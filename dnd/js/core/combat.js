// Turn-based combat. State lives in state.combat (plain JSON, so saves work mid-fight).
// Positions are abstract ("theatre of the mind"): any unit can reach any other.
import * as R from './rules.js';
import { applyEffects, grantXp } from './effects.js';
import { partySheets } from './state.js';

export const DMG_TYPES = {
  slashing: '挥砍', piercing: '穿刺', bludgeoning: '钝击', fire: '火焰', cold: '寒冷', lightning: '闪电', thunder: '雷鸣',
  acid: '强酸', poison: '毒素', necrotic: '黯蚀', radiant: '光耀', psychic: '心灵', force: '力场',
};

const DIFF = {
  story: { hp: 0.7, hit: -2, dmg: -1 },
  normal: { hp: 1, hit: 0, dmg: 0 },
  hard: { hp: 1.3, hit: 1, dmg: 2 },
};

let uidSeq = 1;

function sheetOf(state, unit) {
  if (unit.sheet === 'pc') return state.pc;
  if (unit.sheet) return state.companions[unit.sheet];
  return null;
}

function condDefs(db, unit) {
  return (unit.conds || []).map((c) => db.conditions[c.id]).filter(Boolean);
}

function condFlag(db, unit, flag) {
  return condDefs(db, unit).some((d) => d.flags && d.flags[flag]);
}

function unitPassives(ctx, unit) {
  const { state, db } = ctx;
  const extra = condDefs(db, unit).map((d) => d.passives).filter(Boolean);
  const sheet = sheetOf(state, unit);
  if (sheet) return R.passivesOf(sheet, db, extra);
  const def = unit.def;
  const base = { ac: 0, hit: 0, dmg: 0, spellHit: 0, spellDc: 0, spellDmg: 0, init: 0, hpPerLevel: 0, extraAttack: 0, critRange: 20, critDice: 0, sneak: false,
    resist: [...(def.resist || [])], immune: [...(def.immune || [])], vuln: [...(def.vuln || [])], condImmune: [...(def.condImmune || [])],
    saveAdv: [], saveBonus: 0, skill: {}, skillAdv: [], regen: (def.traits && def.traits.regen) || 0, lucky: false, unarmored: null, natArmor: 0, abil: {}, healBonus: 0, speed: 0 };
  for (const p of extra) {
    for (const k of Object.keys(p)) {
      if (Array.isArray(base[k])) base[k].push(...p[k]);
      else if (typeof p[k] === 'number') base[k] = (base[k] || 0) + p[k];
    }
  }
  return base;
}

export function unitAc(ctx, unit) {
  const sheet = sheetOf(ctx.state, unit);
  const pas = unitPassives(ctx, unit);
  if (sheet) return R.armorClass(sheet, ctx.db, pas);
  return unit.def.ac + pas.ac;
}

function unitSave(ctx, unit, abil) {
  const sheet = sheetOf(ctx.state, unit);
  const pas = unitPassives(ctx, unit);
  if (sheet) return R.saveBonus(sheet, ctx.db, abil, pas);
  return ((unit.def.saves && unit.def.saves[abil]) || 0) + pas.saveBonus;
}

function alive(u) { return !u.dead && !u.down && !u.fled; }

/** A saving throw total for a unit, honouring save advantage from race/class passives. */
function saveRoll(ctx, unit, abil) {
  const pas = unitPassives(ctx, unit);
  const adv = (pas.saveAdv || []).includes(abil);
  return R.d20({ adv }).kept + unitSave(ctx, unit, abil);
}
export function unitsOf(c, side) { return c.order.map((id) => c.units[id]).filter((u) => u.side === side); }
export function living(c, side) { return unitsOf(c, side).filter(alive); }

function bump(c, uid, key, n) {
  if (!c.stats) c.stats = {};
  const s = c.stats[uid] || (c.stats[uid] = { dealt: 0, taken: 0, healed: 0 });
  s[key] += n;
}

function logLine(c, text, cls) { c.log.push({ text, cls: cls || '', round: c.round }); if (c.log.length > 200) c.log.shift(); }

// ---------------------------------------------------------------------------
export function startCombat(ctx, enc) {
  const { state, db } = ctx;
  const diff = DIFF[state.difficulty] || DIFF.normal;
  const c = { enc, round: 1, order: [], turn: 0, units: {}, log: [], over: null, usedSpecials: {}, quickUsed: false, acted: false, started: true, stats: {} };
  const add = (u) => { u.uid = 'u' + (uidSeq++); c.units[u.uid] = u; c.order.push(u.uid); return u; };
  // allies
  const pcInit = R.d20().kept + R.abilMod(state.pc.abil.dex) + R.passivesOf(state.pc, db).init;
  add({ side: 'ally', sheet: 'pc', name: state.pc.name, isPc: true, conds: [], init: pcInit, uses: {} });
  if (state.pc.hp <= 0) state.pc.hp = 1;
  for (const id of state.party) {
    const ch = state.companions[id];
    if (!ch || ch.gone) continue;
    if (ch.hp <= 0) ch.hp = 1;
    add({ side: 'ally', sheet: id, name: ch.name, conds: [], init: R.d20().kept + R.abilMod(ch.abil.dex) + R.passivesOf(ch, db).init, uses: {} });
  }
  const addNpc = (side, spec) => {
    const def = db.enemies[spec.id];
    if (!def) throw new Error(`unknown enemy ${spec.id}`);
    const n = spec.n || 1;
    for (let i = 0; i < n; i++) {
      const baseHp = typeof def.hp === 'number' ? def.hp : R.rollDice(def.hp).total;
      const hp = Math.max(1, Math.round(baseHp * (side === 'enemy' ? diff.hp : 1) * (spec.hpMult || 1)));
      const name = spec.name ? (n > 1 ? `${spec.name}${'甲乙丙丁戊己庚辛'[i] || i + 1}` : spec.name) : (n > 1 ? `${def.name}${'甲乙丙丁戊己庚辛'[i] || i + 1}` : def.name);
      add({ side, defId: def.id, def, name, hp, maxHp: hp, conds: [], init: R.d20().kept + (def.init || 0), uses: {}, boss: !!(def.traits && def.traits.boss) });
    }
  };
  for (const spec of enc.enemies || []) addNpc('enemy', spec);
  for (const spec of enc.allies || []) addNpc('ally', spec);
  c.order.sort((a, b) => c.units[b].init - c.units[a].init || (c.units[a].side === 'ally' ? -1 : 1));
  state.combat = c;
  state.stats.fights += 1;
  if (enc.intro) logLine(c, enc.intro, 'intro');
  logLine(c, `第 1 轮。先攻顺序：${c.order.map((id) => c.units[id].name).join(' → ')}`, 'round');
  if (state.cheats.noEncounter) { finish(ctx, 'win'); return c; }
  if (state.cheats.ascended) divineAwe(ctx);
  if (c.over) return c;
  beginTurn(ctx);
  return c;
}

/** A god walks onto the field: ordinary foes may break and run before a blow is struck. */
function divineAwe(ctx) {
  const { state, db } = ctx;
  const c = state.combat;
  const mindless = ['construct', 'undead', 'plant', 'elemental', 'aberration'];
  logLine(c, `${state.pc.name}没有拔武器。光是站在那儿就够了。`, 'special');
  for (const u of unitsOf(c, 'enemy')) {
    if (u.boss || mindless.includes(u.def.type) || c.enc.noAwe) continue;
    const roll = R.d20().kept + ((u.def.saves && u.def.saves.wis) || 0);
    if (roll < 12) { u.fled = true; logLine(c, `${u.name}扔下武器跑了。`, 'flee'); }
    else if (roll < 22 && db.conditions.frightened) { u.conds.push({ id: 'frightened', turns: 3, dc: 30, saveAbil: 'wis' }); logLine(c, `${u.name}的手在抖。`, 'cond bad'); }
  }
  checkOver(ctx);
}

export function currentUnit(c) { return c.units[c.order[c.turn]]; }

function beginTurn(ctx) {
  const { state, db } = ctx;
  const c = state.combat;
  for (let guard = 0; guard < 200; guard++) {
    if (c.over) return;
    const u = currentUnit(c);
    c.quickUsed = false; c.acted = false; c.attacksLeft = 0; c.sneakUsed = false; c.surge = false;
    if (!alive(u)) { advance(ctx); continue; }
    u.dodging = false;
    // start-of-turn condition ticks
    for (const cond of [...u.conds]) {
      const def = db.conditions[cond.id];
      if (!def || !def.tick) continue;
      if (def.tick.dmg) {
        const r = R.rollDice(def.tick.dmg);
        dealDamage(ctx, null, u, r.total, def.tick.type || 'fire', { source: def.name });
      } else if (def.tick.heal) {
        const r = R.rollDice(def.tick.heal);
        healUnit(ctx, u, r.total, def.name);
      }
      if (!alive(u)) break;
    }
    const pas = unitPassives(ctx, u);
    if (alive(u) && pas.regen > 0 && getHp(ctx, u) < getMaxHp(ctx, u)) healUnit(ctx, u, pas.regen, '再生');
    checkOver(ctx);
    if (c.over) return;
    if (!alive(u)) { advance(ctx); continue; }
    if (condFlag(db, u, 'skip')) {
      logLine(c, `${u.name}无法行动。`, 'cond');
      endTurn(ctx, true);
      continue;
    }
    return;
  }
}

function advance(ctx) {
  const c = ctx.state.combat;
  c.turn += 1;
  if (c.turn >= c.order.length) {
    c.turn = 0;
    c.round += 1;
    logLine(c, `第 ${c.round} 轮。`, 'round');
    if (c.enc.rounds && c.round > c.enc.rounds) { finish(ctx, c.enc.roundsOutcome || 'win'); }
  }
}

/** End the acting unit's turn: tick durations, end-of-turn saves, then move on. */
export function endTurn(ctx, silent) {
  const { state, db } = ctx;
  const c = state.combat;
  if (c.over) return;
  const u = currentUnit(c);
  for (const cond of [...u.conds]) {
    const def = db.conditions[cond.id];
    if (def && def.endOn === 'save' && cond.dc) {
      const roll = saveRoll(ctx, u, cond.saveAbil || 'con');
      if (roll >= cond.dc) { u.conds = u.conds.filter((x) => x !== cond); logLine(c, `${u.name}摆脱了「${def.name}」。`, 'cond'); continue; }
    }
    if (cond.turns !== undefined && cond.turns !== null) {
      cond.turns -= 1;
      if (cond.turns <= 0) { u.conds = u.conds.filter((x) => x !== cond); if (def && !silent) logLine(c, `${u.name}的「${def.name}」结束了。`, 'cond'); }
    }
  }
  advance(ctx);
  beginTurn(ctx);
}

function getHp(ctx, u) { const s = sheetOf(ctx.state, u); return s ? s.hp : u.hp; }
function getMaxHp(ctx, u) { const s = sheetOf(ctx.state, u); return s ? s.maxHp : u.maxHp; }
export function unitHp(ctx, u) { return { hp: getHp(ctx, u), max: getMaxHp(ctx, u), temp: (sheetOf(ctx.state, u) || u).tempHp || 0 }; }

function addCond(ctx, target, spec, src) {
  const { db } = ctx;
  const c = ctx.state.combat;
  const def = db.conditions[spec.cond];
  if (!def || !alive(target)) return false;
  const pas = unitPassives(ctx, target);
  if (pas.condImmune.includes(spec.cond)) { logLine(c, `${target.name}免疫「${def.name}」。`, 'cond'); return false; }
  if (target.side === 'ally' && def.bad && ctx.state.cheats.god) return false;
  const existing = target.conds.find((x) => x.id === spec.cond);
  const entry = { id: spec.cond, turns: spec.turns ?? def.turns ?? 2, dc: spec.dc || null, saveAbil: (spec.save && spec.save.abil) || def.saveAbil || null };
  if (existing) Object.assign(existing, entry); else target.conds.push(entry);
  logLine(c, `${target.name}陷入「${def.name}」。`, def.bad ? 'cond bad' : 'cond good');
  return true;
}

function healUnit(ctx, u, amount, sourceName) {
  const c = ctx.state.combat;
  const sheet = sheetOf(ctx.state, u);
  const tgt = sheet || u;
  const max = getMaxHp(ctx, u);
  const before = tgt.hp;
  tgt.hp = Math.min(max, Math.max(0, tgt.hp) + amount);
  if (u.down && tgt.hp > 0) { u.down = false; if (sheet) sheet.down = false; logLine(c, `${u.name}重新站了起来。`, 'heal'); }
  if (tgt.hp > before) logLine(c, `${u.name}恢复 ${tgt.hp - before} 点生命${sourceName ? `（${sourceName}）` : ''}。`, 'heal');
  const actor = currentUnit(c);
  if (actor && tgt.hp > before) bump(c, actor.uid, 'healed', tgt.hp - before);
  return tgt.hp - before;
}

function dealDamage(ctx, src, target, amount, type, opts = {}) {
  const { state, db } = ctx;
  const c = state.combat;
  if (!alive(target)) return 0;
  const pas = unitPassives(ctx, target);
  let dmg = Math.max(0, Math.floor(amount));
  let note = '';
  if (pas.immune.includes(type)) { dmg = 0; note = '（免疫）'; }
  else if (pas.resist.includes(type) || pas.resist.includes('all')) { dmg = Math.floor(dmg / 2); note = '（抗性）'; }
  else if (pas.vuln.includes(type)) { dmg *= 2; note = '（易伤）'; }
  if (target.side === 'ally' && state.cheats.god) { dmg = 0; note = '（无敌）'; }
  if (src && src.side === 'ally' && state.cheats.oneHit && target.side === 'enemy') dmg = Math.max(dmg, getHp(ctx, target) + 999);
  const sheet = sheetOf(state, target);
  const tgt = sheet || target;
  if (tgt.tempHp > 0 && dmg > 0) { const used = Math.min(tgt.tempHp, dmg); tgt.tempHp -= used; dmg -= used; }
  tgt.hp -= dmg;
  if (src) bump(c, src.uid, 'dealt', Math.min(dmg, Math.max(0, tgt.hp + dmg)));
  bump(c, target.uid, 'taken', dmg);
  const typeName = DMG_TYPES[type] || type || '';
  logLine(c, `${target.name}受到 ${dmg} 点${typeName}伤害${note}${opts.source ? `（${opts.source}）` : ''}。`, target.side === 'ally' ? 'dmg ally' : 'dmg enemy');
  // conditions that break on damage (sleep, charm)
  for (const cond of [...target.conds]) { const d = db.conditions[cond.id]; if (d && d.breakOnDamage && dmg > 0) target.conds = target.conds.filter((x) => x !== cond); }
  if (tgt.hp <= 0) {
    tgt.hp = 0;
    if (target.side === 'enemy') {
      target.dead = true;
      state.stats.kills += 1;
      logLine(c, `${target.name}倒下了。`, 'kill');
    } else if (sheet && target.isPc && (state.cheats.immortal || state.cheats.ascended)) {
      tgt.hp = tgt.maxHp; target.conds = [];
      logLine(c, `${target.name}倒下了，又站了起来。伤口合上的速度比血流出来还快。`, 'heal');
    } else if (sheet) {
      target.down = true; sheet.down = true; target.conds = [];
      logLine(c, `${target.name}倒地不起！`, 'down');
    } else {
      target.dead = true;
      logLine(c, `${target.name}倒下了。`, 'down');
    }
  }
  return dmg;
}

function checkOver(ctx) {
  const c = ctx.state.combat;
  if (c.over) return true;
  if (living(c, 'enemy').length === 0) { finish(ctx, 'win'); return true; }
  const pcUnit = unitsOf(c, 'ally').find((u) => u.isPc);
  const anyAlly = living(c, 'ally').some((u) => u.sheet);
  if (!anyAlly || (c.enc.pcMustStand && pcUnit && !alive(pcUnit))) { finish(ctx, 'lose'); return true; }
  return false;
}

function finish(ctx, result) {
  const { state, db } = ctx;
  const c = state.combat;
  if (c.over) return;
  c.over = result;
  c.notes = [];
  if (result === 'win') {
    let xp = 0;
    for (const u of unitsOf(c, 'enemy')) xp += (u.def && u.def.xp) || 0;
    if (c.enc.xp !== undefined) xp = c.enc.xp;
    logLine(c, '战斗胜利。', 'win');
    c.notes.push(...grantXp(state, db, xp));
  } else if (result === 'lose') {
    logLine(c, '你们被击败了。', 'lose');
  } else if (result === 'fled') {
    logLine(c, '你们脱离了战斗。', 'flee');
  }
  // everyone who fell gets back up with 1 HP after the fight (unless the story says otherwise)
  for (const ch of partySheets(state)) { if (ch.hp <= 0) ch.hp = 1; ch.down = false; ch.tempHp = 0; }
}

// ---------------------------------------------------------------------------
// Attacks

function attackRoll(ctx, attacker, target, bonus, opts = {}) {
  const { state, db } = ctx;
  let adv = !!opts.adv, dis = !!opts.dis;
  if (condFlag(db, attacker, 'advAttack')) adv = true;
  if (condFlag(db, attacker, 'disAttack')) dis = true;
  if (condFlag(db, target, 'advAgainst')) adv = true;
  if (condFlag(db, target, 'disAgainst') || target.dodging) dis = true;
  if (attacker.hidden) { adv = true; }
  if (attacker.def && attacker.def.traits && attacker.def.traits.packTactics && living(state.combat, attacker.side).length > 1) adv = true;
  let force = null;
  if (attacker.side === 'ally' && attacker.sheet) {
    if (state.cheats.fixedRoll) force = state.cheats.fixedRoll;
    if (state.cheats.autoSuccess) force = 20;
  }
  const roll = R.d20({ adv, dis, force });
  state.stats.rolls += 1;
  const pas = unitPassives(ctx, attacker);
  let extra = 0;
  // one-shot bonus dice from conditions (bardic inspiration, bless)
  for (const cond of [...attacker.conds]) {
    const d = db.conditions[cond.id];
    if (d && d.bonusDie) { extra += R.rollDice(d.bonusDie).total; if (d.consume === 'attack') attacker.conds = attacker.conds.filter((x) => x !== cond); }
  }
  const ac = unitAc(ctx, target);
  const total = roll.kept + bonus + extra;
  const crit = roll.kept >= (pas.critRange || 20);
  const fumble = roll.kept === 1;
  const hit = !fumble && (crit || total >= ac);
  if (attacker.isPc) { if (roll.kept === 20) state.stats.nat20 += 1; if (roll.kept === 1) state.stats.nat1 += 1; }
  return { roll, total, ac, hit, crit, fumble, adv: roll.mode === 'adv', dis: roll.mode === 'dis', hadAdv: adv && !dis };
}

function weaponAttack(ctx, attacker, target, opts = {}) {
  const { state, db } = ctx;
  const c = state.combat;
  const sheet = sheetOf(state, attacker);
  const pas = unitPassives(ctx, attacker);
  const prof = R.weaponProfile(sheet, db, pas);
  const ar = attackRoll(ctx, attacker, target, prof.hit + (opts.hitBonus || 0), opts);
  attacker.hidden = false;
  const label = opts.label || prof.name;
  if (!ar.hit) {
    logLine(c, `${attacker.name}用${label}攻击${target.name}：${rollText(ar)}，${ar.fumble ? '大失手！' : '未命中。'}`, 'miss');
    return ar;
  }
  let dmg = R.rollDice(prof.dmg, {}, { crit: ar.crit }).total + prof.dmgBonus + (opts.dmgBonus || 0);
  if (ar.crit && pas.critDice) dmg += R.rollDice(`${pas.critDice}d6`).total;
  let extraText = '';
  if (pas.sneak && !c.sneakUsed && (ar.hadAdv || living(c, attacker.side).length > 1) && (prof.props.includes('finesse') || prof.ranged)) {
    const dice = Math.ceil(sheet.level / 2);
    const sn = R.rollDice(`${dice}d6`, {}, { crit: ar.crit }).total;
    dmg += sn; c.sneakUsed = true; extraText += `，偷袭 +${sn}`;
  }
  logLine(c, `${attacker.name}用${label}攻击${target.name}：${rollText(ar)}，${ar.crit ? '重击！' : '命中。'}${extraText}`, ar.crit ? 'hit crit' : 'hit');
  dealDamage(ctx, attacker, target, Math.max(1, dmg), prof.type);
  if (opts.extraDmg && alive(target)) {
    const ex = R.rollDice(opts.extraDmg, { lvl: sheet.level, mod: R.spellMod(sheet, db, pas) }, { crit: ar.crit }).total;
    dealDamage(ctx, attacker, target, ex, opts.extraType || prof.type);
  } else if (opts.extraDmg) { /* target already down */ }
  if (opts.apply && alive(target)) tryApply(ctx, attacker, target, opts.apply);
  return ar;
}

function rollText(ar) {
  const d = ar.roll.dice.length > 1 ? `[${ar.roll.dice.join(',')}→${ar.roll.kept}]` : `[${ar.roll.kept}]`;
  return `d20${d}${R.fmtMod(ar.total - ar.roll.kept)}=${ar.total} 对 AC ${ar.ac}`;
}

function casterDc(ctx, unit, ability) {
  if (ability.dc && !ability.save?.dc && ability.kind !== 'item') return ability.dc;
  const sheet = sheetOf(ctx.state, unit);
  if (!sheet) return ability.dc || 12;
  const pas = unitPassives(ctx, unit);
  if (ability.kind === 'spell' || !ability.dcAbil) return R.spellDc(sheet, ctx.db, pas);
  return 8 + R.profBonus(sheet.level) + R.abilMod(R.abilScore(sheet, ability.dcAbil, pas));
}

function tryApply(ctx, src, target, apply, dcOverride) {
  if (!apply || !alive(target)) return false;
  const c = ctx.state.combat;
  if (apply.chance !== undefined && R.rand() > apply.chance) return false;
  let dc = dcOverride || apply.dc || null;
  if (apply.save) {
    dc = dc || (apply.save.dc) || 12;
    const roll = saveRoll(ctx, target, apply.save.abil);
    if (roll >= dc) { logLine(c, `${target.name}通过了${R.ABIL_NAMES[apply.save.abil]}豁免（${roll} 对 DC ${dc}）。`, 'save'); return false; }
  }
  return addCond(ctx, target, { cond: apply.cond, turns: apply.turns, dc, save: apply.save }, src);
}

function pickByLevel(table, level, fallback) {
  if (!table) return fallback;
  let best = fallback;
  let bestLv = 0;
  for (const k of Object.keys(table)) { const lv = parseInt(k, 10); if (lv <= level && lv >= bestLv) { best = table[k]; bestLv = lv; } }
  return best;
}

// ---------------------------------------------------------------------------
// Resources

export function canAfford(ctx, unit, ability) {
  const { state } = ctx;
  const sheet = sheetOf(state, unit);
  if (!sheet || !ability.cost) return { ok: true };
  if (state.cheats.infRes) return { ok: true };
  const cost = ability.cost;
  if (cost.slot) {
    const idx = findSlot(sheet, cost.slot);
    if (idx < 0) return { ok: false, why: '没有可用的法术位' };
  }
  if (cost.res) {
    const pool = sheet.res[cost.res];
    if (!pool || pool.cur < (cost.n || 1)) return { ok: false, why: `${pool ? pool.name : '资源'}不足` };
  }
  if (cost.uses) {
    const used = (sheet.uses && sheet.uses[ability.id]) || 0;
    if (used >= cost.uses) return { ok: false, why: cost.per === 'short' ? '短休后可再次使用' : '长休后可再次使用' };
  }
  if (cost.hp) { if (sheet.hp <= cost.hp) return { ok: false, why: '生命值不足' }; }
  return { ok: true };
}

function findSlot(sheet, level) {
  for (let i = level - 1; i < (sheet.slots || []).length; i++) if (sheet.slots[i] > 0) return i;
  return -1;
}

function payCost(ctx, unit, ability) {
  const { state } = ctx;
  const sheet = sheetOf(state, unit);
  if (!sheet || !ability.cost || state.cheats.infRes) return;
  const cost = ability.cost;
  if (cost.slot) { const idx = findSlot(sheet, cost.slot); if (idx >= 0) sheet.slots[idx] -= 1; }
  if (cost.res && sheet.res[cost.res]) sheet.res[cost.res].cur -= (cost.n || 1);
  if (cost.uses) { sheet.uses = sheet.uses || {}; sheet.uses[ability.id] = (sheet.uses[ability.id] || 0) + 1; }
  if (cost.hp) sheet.hp -= cost.hp;
}

// ---------------------------------------------------------------------------
// Player-facing actions

/** What the acting ally can do right now. */
export function availableActions(ctx) {
  const { state, db } = ctx;
  const c = state.combat;
  const u = currentUnit(c);
  const sheet = sheetOf(state, u);
  const out = { unit: u, attack: null, abilities: [], items: [], specials: [], canFlee: c.enc.fleeable !== false && !c.acted, canEnd: true };
  if (!sheet) return out;
  const pas = unitPassives(ctx, u);
  const prof = R.weaponProfile(sheet, db, pas);
  out.attack = { name: prof.name, hit: prof.hit, dmg: `${prof.dmg}${R.fmtMod(prof.dmgBonus)}`, type: prof.type, disabled: c.acted && c.attacksLeft <= 0, attacksLeft: c.attacksLeft };
  for (const id of R.knownAbilities(sheet, db)) {
    const a = db.abilities[id];
    if (!a || !a.target) continue;
    let disabled = null;
    const aff = canAfford(ctx, u, a);
    if (!aff.ok) disabled = aff.why;
    else if (a.quick && c.quickUsed) disabled = '本回合已用过附赠动作';
    else if (!a.quick && c.acted) disabled = '本回合已行动';
    else if (a.requires === 'shield' && !(db.items[sheet.equip.offhand] && db.items[sheet.equip.offhand].shield)) disabled = '需要盾牌';
    out.abilities.push({ id, name: a.name, desc: a.desc, kind: a.kind, level: a.level || 0, quick: !!a.quick, target: a.target, cost: a.cost || null, disabled });
  }
  if (u.isPc || true) {
    for (const id of Object.keys(state.inv)) {
      const it = db.items[id];
      if (it && it.use && state.inv[id] > 0 && it.use.combat !== false) out.items.push({ id, name: it.name, desc: it.desc, n: state.inv[id], target: it.use.target || 'ally', disabled: c.acted ? '本回合已行动' : null });
    }
  }
  if (u.isPc) {
    for (const sp of c.enc.specials || []) {
      if (sp.once !== false && c.usedSpecials[sp.id]) continue;
      out.specials.push({ id: sp.id, name: sp.name, desc: sp.desc, check: sp.check, disabled: c.acted ? '本回合已行动' : null });
    }
  }
  return out;
}

function resolveTargets(ctx, unit, ability, targetUid) {
  const c = ctx.state.combat;
  const foes = living(c, unit.side === 'ally' ? 'enemy' : 'ally');
  const friends = living(c, unit.side);
  switch (ability.target) {
    case 'self': return [unit];
    case 'enemies': return ability.maxTargets ? foes.slice(0, ability.maxTargets) : foes;
    case 'allies': return ability.revive ? unitsOf(c, unit.side).filter((x) => alive(x) || (x.down && x.sheet)) : friends;
    case 'ally': {
      const t = c.units[targetUid];
      if (t && t.side === unit.side && (alive(t) || (ability.revive && t.down))) return [t];
      return [unit];
    }
    case 'enemy': default: {
      const t = c.units[targetUid];
      if (t && alive(t) && t.side !== unit.side) return [t];
      return foes.length ? [foes[0]] : [];
    }
  }
}

/** Use an ability (spell, maneuver, feature). Works for allies and for scripted enemy casters. */
export function useAbility(ctx, unit, abilityId, targetUid) {
  const { state, db } = ctx;
  const c = state.combat;
  const a = db.abilities[abilityId];
  if (!a) throw new Error(`unknown ability ${abilityId}`);
  const sheet = sheetOf(state, unit);
  const aff = canAfford(ctx, unit, a);
  if (!aff.ok) return false;
  payCost(ctx, unit, a);
  const pas = unitPassives(ctx, unit);
  const level = sheet ? sheet.level : (unit.def.level || 3);
  const vars = { lvl: level, prof: R.profBonus(level), mod: sheet ? (a.kind === 'spell' ? R.spellMod(sheet, db, pas) : R.abilMod(R.abilScore(sheet, a.dcAbil || (db.classes[sheet.cls].primary || 'str'), pas))) : (unit.def.castMod || 2) };
  const targets = resolveTargets(ctx, unit, a, targetUid);
  logLine(c, `${unit.name}${a.kind === 'spell' ? '施放' : '使用'}「${a.name}」。`, 'ability');
  const dc = casterDc(ctx, unit, a);
  const hits = a.hits || 1;
  for (const target of targets) {
    for (let h = 0; h < hits; h++) {
      if (!alive(target) && !(a.revive && target.down)) break;
      if (a.attack === 'weapon' && sheet) {
        weaponAttack(ctx, unit, target, { adv: a.advantage, extraDmg: a.weaponExtra, extraType: a.extraType, apply: a.apply ? Object.assign({ dc }, a.apply) : null, dmgBonus: a.dmgBonus || 0, hitBonus: a.hitBonus || 0, label: a.name });
        continue;
      }
      let landed = true;
      let crit = false;
      let half = false;
      if (a.attack) {
        const bonus = sheet ? R.spellAttack(sheet, db, pas) : (unit.def.castHit || 4);
        const ar = attackRoll(ctx, unit, target, bonus, { adv: a.advantage });
        landed = ar.hit; crit = ar.crit;
        logLine(c, `　对${target.name}：${rollText(ar)}，${ar.hit ? (ar.crit ? '重击！' : '命中。') : '未命中。'}`, ar.hit ? 'hit' : 'miss');
      } else if (a.save && target.side !== unit.side) {
        const sv = saveRoll(ctx, target, a.save.abil);
        if (sv >= dc) { landed = false; half = !!a.save.half; logLine(c, `　${target.name}通过${R.ABIL_NAMES[a.save.abil]}豁免（${sv} 对 DC ${dc}）。`, 'save'); }
        else logLine(c, `　${target.name}${R.ABIL_NAMES[a.save.abil]}豁免失败（${sv} 对 DC ${dc}）。`, 'save fail');
      }
      const dmgExpr = pickByLevel(a.dmgByLevel, level, a.dmg);
      if (dmgExpr && (landed || half)) {
        let dmg = R.rollDice(dmgExpr, vars, { crit }).total + (a.kind === 'spell' ? pas.spellDmg : 0);
        if (half) dmg = Math.floor(dmg / 2);
        dealDamage(ctx, unit, target, Math.max(0, dmg), a.dmgType || 'force');
      }
      const healExpr = pickByLevel(a.healByLevel, level, a.heal);
      if (healExpr) {
        const amount = R.rollDice(healExpr, vars).total + pas.healBonus;
        healUnit(ctx, target, Math.max(1, amount), null);
      }
      if (a.tempHp) { const t = sheetOf(state, target) || target; const amt = R.rollDice(a.tempHp, vars).total; t.tempHp = Math.max(t.tempHp || 0, amt); logLine(c, `　${target.name}获得 ${amt} 点临时生命。`, 'heal'); }
      if (a.cleanse) { const before = target.conds.length; target.conds = target.conds.filter((x) => { const d = db.conditions[x.id]; return !(d && d.bad && (a.cleanse === 'all' || a.cleanse.includes(x.id))); }); if (target.conds.length < before) logLine(c, `　${target.name}的负面状态被解除。`, 'heal'); }
      if (a.apply && landed) {
        const spec = Object.assign({}, a.apply);
        if (a.save && !a.attack) delete spec.save; // already saved above
        tryApply(ctx, unit, target, spec, dc);
      }
    }
  }
  if (a.selfApply) addCond(ctx, unit, a.selfApply, unit);
  if (a.hide) unit.hidden = true;
  if (a.grantAction) { c.acted = false; c.attacksLeft = 0; c.surge = true; }
  if (a.quick) c.quickUsed = true; else if (!a.grantAction) c.acted = true;
  checkOver(ctx);
  return true;
}

/** The Attack action: 1 + extraAttack weapon strikes. Each call resolves one strike. */
export function attackAction(ctx, targetUid) {
  const { state } = ctx;
  const c = state.combat;
  const u = currentUnit(c);
  const pas = unitPassives(ctx, u);
  if (!c.acted) { c.acted = true; c.attacksLeft = 1 + (pas.extraAttack || 0); }
  if (c.attacksLeft <= 0) return false;
  let target = c.units[targetUid];
  if (!target || !alive(target)) target = living(c, 'enemy')[0];
  if (!target) return false;
  c.attacksLeft -= 1;
  weaponAttack(ctx, u, target, {});
  checkOver(ctx);
  return true;
}

export function dodgeAction(ctx) {
  const c = ctx.state.combat;
  const u = currentUnit(c);
  if (c.acted) return false;
  u.dodging = true; c.acted = true;
  logLine(c, `${u.name}全力防御。`, 'ability');
  return true;
}

export function useItem(ctx, itemId, targetUid) {
  const { state, db } = ctx;
  const c = state.combat;
  const u = currentUnit(c);
  const it = db.items[itemId];
  if (!it || !it.use || !(state.inv[itemId] > 0) || c.acted) return false;
  if (!state.cheats.infRes) { state.inv[itemId] -= 1; if (state.inv[itemId] <= 0) delete state.inv[itemId]; }
  const fake = Object.assign({ id: 'item:' + itemId, name: it.name, kind: 'item', target: it.use.target || 'ally' }, it.use);
  db.abilities[fake.id] = fake;
  useAbility(ctx, u, fake.id, targetUid);
  delete db.abilities[fake.id];
  c.acted = true;
  return true;
}

/** Scene-specific stunt (cut the rope bridge, topple the brazier...). */
export function useSpecial(ctx, specialId, checkFn) {
  const { state } = ctx;
  const c = state.combat;
  const sp = (c.enc.specials || []).find((s) => s.id === specialId);
  if (!sp || c.acted) return null;
  c.acted = true;
  if (sp.once !== false) c.usedSpecials[sp.id] = true;
  const res = sp.check ? checkFn(sp.check) : { success: true };
  const branch = res.success ? sp.success : sp.fail;
  logLine(c, `${state.pc.name}尝试：${sp.name}${sp.check ? `（${res.text || ''}）` : ''}——${res.success ? '成功' : '失败'}。`, res.success ? 'hit' : 'miss');
  if (branch) {
    if (branch.text) logLine(c, branch.text, 'special');
    if (branch.dmgAll) for (const e of living(c, 'enemy')) dealDamage(ctx, currentUnit(c), e, R.rollDice(branch.dmgAll).total, branch.type || 'bludgeoning');
    if (branch.applyAll) for (const e of living(c, 'enemy')) addCond(ctx, e, branch.applyAll, null);
    if (branch.selfDmg) dealDamage(ctx, null, currentUnit(c), R.rollDice(branch.selfDmg).total, branch.type || 'bludgeoning');
    if (branch.effects) c.notes = [...(c.notes || []), ...applyEffects(branch.effects, ctx)];
    if (branch.end) finish(ctx, branch.end);
  }
  checkOver(ctx);
  return res;
}

export function fleeAction(ctx, checkFn) {
  const { state } = ctx;
  const c = state.combat;
  if (c.enc.fleeable === false || c.acted) return null;
  const dc = 10 + Math.min(6, living(c, 'enemy').length);
  const res = checkFn({ skill: 'acrobatics', alt: ['athletics', 'stealth'], dc });
  c.acted = true;
  if (res.success) finish(ctx, 'fled');
  else logLine(c, `${state.pc.name}没能脱身（${res.text || ''}）。`, 'miss');
  return res;
}

// ---------------------------------------------------------------------------
// AI

function enemyAct(ctx, u) {
  const { state, db } = ctx;
  const c = state.combat;
  const def = u.def;
  const foes = living(c, u.side === 'enemy' ? 'ally' : 'enemy');
  if (!foes.length) return;
  const options = [];
  for (const [i, atk] of (def.attacks || []).entries()) {
    if (atk.uses && (u.uses[i] || 0) >= atk.uses) continue;
    if (atk.recharge) { if (u['cd' + i]) { if (1 + R.randInt(6) >= atk.recharge) u['cd' + i] = false; else continue; } }
    if (atk.heal) { const hurt = living(c, u.side).filter((x) => x.hp !== undefined && x.hp < x.maxHp * 0.5); if (!hurt.length) continue; }
    if (atk.minRound && c.round < atk.minRound) continue;
    options.push({ i, atk, w: atk.weight || (atk.recharge || atk.uses ? 5 : 2) });
  }
  if (!options.length) { logLine(c, `${u.name}迟疑了一下。`, 'miss'); return; }
  let total = options.reduce((s, o) => s + o.w, 0);
  let r = R.rand() * total;
  let choice = options[0];
  for (const o of options) { r -= o.w; if (r <= 0) { choice = o; break; } }
  const { atk, i } = choice;
  if (atk.uses) u.uses[i] = (u.uses[i] || 0) + 1;
  if (atk.recharge) u['cd' + i] = true;
  const diff = u.side === 'enemy' ? (DIFF[state.difficulty] || DIFF.normal) : DIFF.normal;
  if (atk.text) logLine(c, atk.text.replace('{name}', u.name), 'flavor');
  if (atk.heal) {
    const hurt = living(c, u.side).filter((x) => x.hp !== undefined).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    logLine(c, `${u.name}使用「${atk.name}」。`, 'ability');
    healUnit(ctx, hurt, R.rollDice(atk.heal).total, null);
    return;
  }
  if (atk.buff) { logLine(c, `${u.name}使用「${atk.name}」。`, 'ability'); for (const f of (atk.buff.all ? living(c, u.side) : [u])) addCond(ctx, f, atk.buff, u); return; }
  if (atk.aoe) {
    logLine(c, `${u.name}使用「${atk.name}」！`, 'ability');
    const dmgRoll = atk.dmg ? R.rollDice(atk.dmg).total + diff.dmg : 0;
    for (const t of foes) {
      let dmg = dmgRoll;
      let saved = false;
      if (atk.aoe.save) {
        const sv = saveRoll(ctx, t, atk.aoe.save.abil);
        saved = sv >= atk.aoe.save.dc;
        logLine(c, `　${t.name}${R.ABIL_NAMES[atk.aoe.save.abil]}豁免${saved ? '成功' : '失败'}（${sv} 对 DC ${atk.aoe.save.dc}）。`, saved ? 'save' : 'save fail');
        if (saved) dmg = atk.aoe.save.half ? Math.floor(dmg / 2) : 0;
      }
      if (dmg > 0) dealDamage(ctx, u, t, dmg, atk.type || 'fire');
      if (atk.apply && !saved && alive(t)) addCond(ctx, t, atk.apply, u);
    }
    return;
  }
  const times = atk.multi || 1;
  for (let k = 0; k < times; k++) {
    const pool = living(c, u.side === 'enemy' ? 'ally' : 'enemy');
    if (!pool.length) break;
    const target = chooseTarget(ctx, u, pool);
    const upas = unitPassives(ctx, u);
    const ar = attackRoll(ctx, u, target, (atk.hit || 0) + diff.hit + (upas.hit || 0), {});
    if (!ar.hit) { logLine(c, `${u.name}用${atk.name}攻击${target.name}：${rollText(ar)}，未命中。`, 'miss'); continue; }
    const dmg = R.rollDice(atk.dmg || '1', {}, { crit: ar.crit }).total + diff.dmg + (upas.dmg || 0);
    logLine(c, `${u.name}用${atk.name}攻击${target.name}：${rollText(ar)}，${ar.crit ? '重击！' : '命中。'}`, ar.crit ? 'hit crit' : 'hit');
    dealDamage(ctx, u, target, Math.max(1, dmg), atk.type || 'slashing');
    if (atk.extra && alive(target)) dealDamage(ctx, u, target, R.rollDice(atk.extra.dmg).total, atk.extra.type);
    if (atk.apply && alive(target)) tryApply(ctx, u, target, atk.apply);
    if (atk.lifesteal) healUnit(ctx, u, Math.floor(dmg / 2), null);
  }
}

function chooseTarget(ctx, u, pool) {
  const taunt = pool.filter((t) => condFlag(ctx.db, t, 'taunt'));
  if (taunt.length) return R.pick(taunt);
  const visible = pool.filter((t) => !t.hidden);
  const list = visible.length ? visible : pool;
  const ai = (u.def && u.def.ai) || 'brute';
  if (ai === 'cunning' && R.rand() < 0.6) return list.slice().sort((a, b) => getHp(ctx, a) - getHp(ctx, b))[0];
  if (ai === 'brute' && R.rand() < 0.4) return list.slice().sort((a, b) => unitAc(ctx, a) - unitAc(ctx, b))[0];
  return R.pick(list);
}

function estimate(ctx, u, a, foes) {
  const { state, db } = ctx;
  const sheet = sheetOf(state, u);
  const pas = unitPassives(ctx, u);
  const level = sheet.level;
  const vars = { lvl: level, prof: R.profBonus(level), mod: R.spellMod(sheet, db, pas) || R.abilMod(R.abilScore(sheet, (db.classes[sheet.cls] || {}).primary || 'str', pas)) };
  let per = 0;
  if (a.attack === 'weapon') {
    const prof = R.weaponProfile(sheet, db, pas);
    per = (R.avgDice(prof.dmg) + prof.dmgBonus + (a.dmgBonus || 0) + (a.weaponExtra ? R.avgDice(a.weaponExtra, vars) : 0)) * (a.advantage ? 0.85 : 0.65);
  } else {
    const expr = pickByLevel(a.dmgByLevel, level, a.dmg);
    if (!expr) return 0;
    per = R.avgDice(expr, vars) * (a.attack ? 0.65 : a.save ? (a.save.half ? 0.75 : 0.5) : 1);
  }
  const n = a.target === 'enemies' ? Math.min(foes.length, a.maxTargets || foes.length) : 1;
  return per * (a.hits || 1) * n + (a.apply ? 2 : 0);
}

function companionAct(ctx, u) {
  const { state, db } = ctx;
  const c = state.combat;
  const sheet = sheetOf(state, u);
  let foes = living(c, 'enemy');
  if (!foes.length) return;
  const usable = () => R.knownAbilities(sheet, db).map((id) => db.abilities[id]).filter((a) => a && a.target && canAfford(ctx, u, a).ok && !(a.requires === 'shield' && !(db.items[sheet.equip.offhand] && db.items[sheet.equip.offhand].shield)));
  let known = usable();
  const hurtList = () => unitsOf(c, 'ally').filter((x) => x.sheet && (x.down || getHp(ctx, x) < getMaxHp(ctx, x) * 0.4)).sort((a, b) => getHp(ctx, a) - getHp(ctx, b));
  const hasCond = (unit, a) => a.selfApply && unit.conds.some((x) => x.id === a.selfApply.cond);
  const bigFight = foes.length >= 3 || foes.some((f) => f.boss) || foes.reduce((s2, f) => s2 + getHp(ctx, f), 0) > sheet.maxHp * 1.5;
  const lowFoe = () => living(c, 'enemy').slice().sort((a, b) => getHp(ctx, a) - getHp(ctx, b))[0];

  // --- bonus action (one per turn)
  const hurt = hurtList();
  const qHeal = known.find((a) => a.quick && (a.heal || a.healByLevel) && (a.target === 'self' ? getHp(ctx, u) < getMaxHp(ctx, u) * 0.5 : hurt.length));
  const qBuff = known.find((a) => a.quick && a.selfApply && !a.grantAction && !hasCond(u, a) && (bigFight || !a.cost));
  const qSurge = known.find((a) => a.quick && a.grantAction && bigFight && c.round <= 2);
  const qHit = known.filter((a) => a.quick && (a.dmg || a.dmgByLevel || a.attack === 'weapon') && (!a.cost || bigFight)).sort((x, y) => estimate(ctx, u, y, foes) - estimate(ctx, u, x, foes))[0];
  const qHide = known.find((a) => a.quick && a.hide && !u.hidden);
  if (qHeal) useAbility(ctx, u, qHeal.id, qHeal.target === 'self' ? u.uid : hurt[0].uid);
  else if (qBuff && c.round <= 3) useAbility(ctx, u, qBuff.id, u.uid);
  else if (qHit) useAbility(ctx, u, qHit.id, lowFoe().uid);
  else if (qHide) useAbility(ctx, u, qHide.id, u.uid);
  if (c.over) return;

  const mainAction = () => {
    foes = living(c, 'enemy');
    if (!foes.length) return;
    known = usable().filter((a) => !a.quick);
    const hurt2 = hurtList();
    const heal = known.filter((a) => a.heal || a.healByLevel || a.revive).sort((x, y) => (y.level || 0) - (x.level || 0))[0];
    if (heal && hurt2.length) { useAbility(ctx, u, heal.id, heal.target === 'self' ? u.uid : hurt2[0].uid); return; }
    const buff = known.find((a) => a.ai === 'buff' && (a.selfApply || a.apply) && a.target !== 'enemy' && a.target !== 'enemies');
    if (buff && bigFight && c.round === 1 && !hasCond(u, buff) && R.rand() < 0.5) { useAbility(ctx, u, buff.id, u.uid); return; }
    const control = known.find((a) => a.ai === 'control' && a.cost);
    if (control && bigFight && R.rand() < 0.3) { useAbility(ctx, u, control.id, foes.slice().sort((a, b) => getHp(ctx, b) - getHp(ctx, a))[0].uid); return; }
    const dmgers = known.filter((a) => (a.dmg || a.dmgByLevel || a.attack === 'weapon') && (a.target === 'enemy' || a.target === 'enemies'));
    const paid = dmgers.filter((a) => a.cost).sort((x, y) => estimate(ctx, u, y, foes) - estimate(ctx, u, x, foes));
    const free = dmgers.filter((a) => !a.cost).sort((x, y) => estimate(ctx, u, y, foes) - estimate(ctx, u, x, foes));
    const pas = unitPassives(ctx, u);
    const prof = R.weaponProfile(sheet, db, pas);
    const weaponEst = (R.avgDice(prof.dmg) + prof.dmgBonus) * 0.65 * (1 + (pas.extraAttack || 0));
    const bestFree = free[0] && estimate(ctx, u, free[0], foes) > weaponEst ? free[0] : null;
    if (paid.length && bigFight && R.rand() < 0.75 && estimate(ctx, u, paid[0], foes) > Math.max(weaponEst, bestFree ? estimate(ctx, u, bestFree, foes) : 0)) { useAbility(ctx, u, paid[0].id, lowFoe().uid); return; }
    if (bestFree) { useAbility(ctx, u, bestFree.id, lowFoe().uid); return; }
    c.acted = true; c.attacksLeft = 1 + (pas.extraAttack || 0);
    while (c.attacksLeft > 0 && !c.over) {
      const t = lowFoe();
      if (!t) break;
      c.attacksLeft -= 1;
      weaponAttack(ctx, u, t, {});
      checkOver(ctx);
    }
  };
  mainAction();
  if (c.over) return;
  // action surge and the like: a second main action
  if (qSurge && canAfford(ctx, u, qSurge).ok && c.acted) { useAbility(ctx, u, qSurge.id, u.uid); if (!c.over && !c.acted) mainAction(); }
}

/**
 * Advance the fight until it is a player-controlled unit's turn or the fight ends.
 * `manualCompanions` lets the player steer companions too.
 */
export function runUntilPlayer(ctx, manualCompanions = false) {
  const { state } = ctx;
  const c = state.combat;
  for (let guard = 0; guard < 500 && !c.over; guard++) {
    const u = currentUnit(c);
    if (!alive(u)) { endTurn(ctx, true); continue; }
    if (u.isPc || (u.sheet && manualCompanions)) return c;
    if (u.sheet) companionAct(ctx, u); else enemyAct(ctx, u);
    checkOver(ctx);
    if (!c.over) endTurn(ctx);
  }
  return c;
}

/** Let the AI play every unit (used by the balance simulator). */
export function autoResolve(ctx, maxRounds = 40) {
  const c = ctx.state.combat;
  for (let guard = 0; guard < 4000 && !c.over; guard++) {
    if (c.round > maxRounds) { c.over = 'timeout'; break; }
    const u = currentUnit(c);
    if (!alive(u)) { endTurn(ctx, true); continue; }
    if (u.sheet) companionAct(ctx, u); else enemyAct(ctx, u);
    checkOver(ctx);
    if (!c.over) endTurn(ctx);
  }
  return c;
}

/** Cheat helpers */
export function cheatWin(ctx) { const c = ctx.state.combat; if (!c || c.over) return; for (const u of living(c, 'enemy')) { u.hp = 0; u.dead = true; } logLine(c, '（作弊）敌人全数倒下。', 'cheat'); checkOver(ctx); }
export function cheatHealAll(ctx) { const c = ctx.state.combat; for (const ch of partySheets(ctx.state)) { ch.hp = ch.maxHp; ch.down = false; } if (c) for (const u of unitsOf(c, 'ally')) { u.down = false; if (!u.sheet) u.hp = u.maxHp; } }
