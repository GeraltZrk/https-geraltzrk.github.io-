// Effect commands used by story content. Each effect is a short string such as
//   "flag met_corin"  "rep empire +2"  "gold +50"  "item +healing_potion 2"  "xp 150"
// or an object { if: "cond", then: [...], else: [...] }.
import * as R from './rules.js';
import { evaluate } from './expr.js';
import { refreshDerived, restCharacter, makeGetter, partySheets } from './state.js';

export const EFFECT_VERBS = ['flag', 'unflag', 'var', 'rep', 'world', 'gold', 'xp', 'level', 'levelup', 'hp', 'heal', 'damage',
  'item', 'equip', 'companion', 'approval', 'codex', 'quest', 'date', 'loc', 'rest', 'learn', 'log', 'toast', 'ending', 'party'];

function parseDelta(tok) {
  // "+2" / "-1" => relative ; "=5" or "5" => absolute
  if (tok === undefined) return { rel: true, n: 1 };
  if (tok[0] === '=') return { rel: false, n: Number(tok.slice(1)) };
  if (tok[0] === '+' || tok[0] === '-') return { rel: true, n: Number(tok) };
  return { rel: false, n: Number(tok) };
}

/** Parse an effect string into {verb, args}. Throws on malformed input (used by the validator too). */
export function parseEffect(src) {
  if (typeof src !== 'string') throw new Error('effect must be a string');
  const s = src.trim();
  const sp = s.indexOf(' ');
  const verb = sp < 0 ? s : s.slice(0, sp);
  const rest = sp < 0 ? '' : s.slice(sp + 1).trim();
  if (!EFFECT_VERBS.includes(verb)) throw new Error(`unknown effect "${verb}" in "${src}"`);
  const args = rest.length ? rest.split(/\s+/) : [];
  const need = (n) => { if (args.length < n) throw new Error(`effect "${src}" needs ${n} argument(s)`); };
  switch (verb) {
    case 'flag': case 'unflag': case 'codex': case 'learn': case 'equip': case 'ending': need(1); break;
    case 'var': case 'rep': case 'world': case 'approval': need(2); if (Number.isNaN(parseDelta(args[1]).n)) throw new Error(`bad number in "${src}"`); break;
    case 'gold': case 'xp': case 'level': need(1); if (Number.isNaN(parseDelta(args[0]).n)) throw new Error(`bad number in "${src}"`); break;
    case 'hp': need(1); break;
    case 'heal': case 'damage': need(1); break;
    case 'item': case 'companion': case 'party': need(1); if (!/^[+-]/.test(args[0])) throw new Error(`"${src}" must use +id or -id`); break;
    case 'quest': need(2); break;
    case 'date': case 'loc': case 'log': case 'toast': need(1); break;
    case 'rest': need(1); if (!['short', 'long'].includes(args[0])) throw new Error(`rest must be short|long in "${src}"`); break;
    default: break;
  }
  return { verb, args, rest };
}

/**
 * Apply a list of effects. Returns an array of human-readable notices for the UI
 * (e.g. "获得 50 金币") so the player sees what changed.
 */
export function applyEffects(list, ctx) {
  const notes = [];
  if (!list) return notes;
  const { state, db, scenario } = ctx;
  const arr = Array.isArray(list) ? list : [list];
  for (const eff of arr) {
    if (!eff) continue;
    if (typeof eff === 'object') {
      const ok = evaluate(eff.if, makeGetter(state, db, scenario));
      notes.push(...applyEffects(ok ? eff.then : eff.else, ctx));
      continue;
    }
    const { verb, args, rest } = parseEffect(eff);
    switch (verb) {
      case 'flag': state.flags[args[0]] = args[1] !== 'false'; break;
      case 'unflag': delete state.flags[args[0]]; break;
      case 'var': { const d = parseDelta(args[1]); state.vars[args[0]] = d.rel ? (state.vars[args[0]] || 0) + d.n : d.n; break; }
      case 'rep': {
        const d = parseDelta(args[1]);
        const before = state.rep[args[0]] || 0;
        state.rep[args[0]] = d.rel ? before + d.n : d.n;
        const def = (scenario.reputations || []).find((f) => f.key === args[0]);
        const diff = state.rep[args[0]] - before;
        if (def && diff !== 0) notes.push({ kind: diff > 0 ? 'good' : 'bad', text: `${def.name} 声望 ${R.fmtMod(diff)}` });
        break;
      }
      case 'world': {
        const d = parseDelta(args[1]);
        const def = (scenario.tracks || []).find((t) => t.key === args[0]);
        const before = state.world[args[0]] || 0;
        let v = d.rel ? before + d.n : d.n;
        if (def) v = Math.max(def.min ?? -99, Math.min(def.max ?? 99, v));
        state.world[args[0]] = v;
        if (def && v !== before) notes.push({ kind: 'world', text: `世界局势：${def.name} ${R.fmtMod(v - before)}` });
        break;
      }
      case 'gold': {
        const d = parseDelta(args[0]);
        const before = state.gold;
        state.gold = Math.max(0, d.rel ? before + d.n : d.n);
        const diff = state.gold - before;
        if (diff) notes.push({ kind: diff > 0 ? 'good' : 'bad', text: `${diff > 0 ? '获得' : '失去'} ${Math.abs(diff)} ${scenario.coin || '金币'}` });
        break;
      }
      case 'xp': { const d = parseDelta(args[0]); notes.push(...grantXp(state, db, Math.max(0, d.n))); break; }
      case 'level': { const d = parseDelta(args[0]); notes.push(...ensureLevel(state, db, d.n)); break; }
      case 'levelup': notes.push(...ensureLevel(state, db, state.pc.level + state.pc.pendingLevels + 1)); break;
      case 'hp': {
        if (args[0] === 'full') { for (const ch of partySheets(state)) { ch.hp = ch.maxHp; ch.down = false; } notes.push({ kind: 'good', text: '全队生命值回满' }); break; }
        const d = parseDelta(args[0]);
        const pc = state.pc;
        const before = pc.hp;
        pc.hp = Math.max(1, Math.min(pc.maxHp, d.rel ? pc.hp + d.n : d.n));
        if (state.cheats.god && pc.hp < before) pc.hp = before;
        if (pc.hp !== before) notes.push({ kind: pc.hp > before ? 'good' : 'bad', text: `生命值 ${R.fmtMod(pc.hp - before)}` });
        break;
      }
      case 'heal': {
        const r = R.rollDice(args[0], { lvl: state.pc.level });
        for (const ch of partySheets(state)) ch.hp = Math.min(ch.maxHp, ch.hp + r.total);
        notes.push({ kind: 'good', text: `全队恢复 ${r.total} 点生命` });
        break;
      }
      case 'damage': {
        const r = R.rollDice(args[0], { lvl: state.pc.level });
        const pc = state.pc;
        if (!state.cheats.god) {
          const lethal = args.includes('lethal');
          pc.hp = Math.max(lethal ? 0 : 1, pc.hp - r.total);
          notes.push({ kind: 'bad', text: `受到 ${r.total} 点伤害` });
        }
        break;
      }
      case 'item': {
        const id = args[0].slice(1);
        const n = args[1] ? parseInt(args[1], 10) : 1;
        const it = db.items[id];
        if (args[0][0] === '+') {
          state.inv[id] = (state.inv[id] || 0) + n;
          notes.push({ kind: 'item', text: `获得 ${it ? it.name : id}${n > 1 ? ' ×' + n : ''}` });
        } else {
          state.inv[id] = Math.max(0, (state.inv[id] || 0) - n);
          if (!state.inv[id]) { delete state.inv[id]; for (const ch of partySheets(state)) for (const slot of Object.keys(ch.equip)) if (ch.equip[slot] === id) ch.equip[slot] = null; }
          notes.push({ kind: 'bad', text: `失去 ${it ? it.name : id}${n > 1 ? ' ×' + n : ''}` });
        }
        break;
      }
      case 'equip': {
        const it = db.items[args[0]];
        if (it) { state.inv[args[0]] = Math.max(1, state.inv[args[0]] || 0); equipItem(state, db, state.pc, args[0]); }
        break;
      }
      case 'companion': case 'party': {
        const id = args[0].slice(1);
        if (args[0][0] === '+') {
          const def = db.companions[id];
          if (def && !state.companions[id]) state.companions[id] = makeCompanion(db, def, state.pc.level);
          if (def && !state.party.includes(id)) { state.party.push(id); notes.push({ kind: 'good', text: `${def.name} 加入了队伍` }); }
        } else {
          const def = db.companions[id];
          if (state.party.includes(id)) { state.party = state.party.filter((x) => x !== id); notes.push({ kind: 'bad', text: `${def ? def.name : id} 离开了队伍` }); }
          if (args[1] === 'gone' && state.companions[id]) state.companions[id].gone = true;
        }
        break;
      }
      case 'approval': {
        const d = parseDelta(args[1]);
        const c = state.companions[args[0]];
        const def = db.companions[args[0]];
        if (c) {
          const before = c.approval || 0;
          c.approval = d.rel ? before + d.n : d.n;
          if (def && c.approval !== before && state.party.includes(args[0])) notes.push({ kind: c.approval > before ? 'good' : 'bad', text: `${def.name}${c.approval > before ? '赞同' : '不赞同'}` });
        }
        break;
      }
      case 'codex': if (!state.codex[args[0]]) { state.codex[args[0]] = true; const e = scenario.codex && scenario.codex[args[0]] || (db.codex && db.codex[args[0]]); if (e) notes.push({ kind: 'codex', text: `图鉴更新：${e.title}` }); } break;
      case 'quest': {
        const id = args[0];
        const q = state.quests[id] || (state.quests[id] = { stage: 0, done: false, failed: false });
        const def = scenario.quests && scenario.quests[id];
        const name = def ? def.title : id;
        if (args[1] === 'start') { if (!q.stage) { q.stage = 1; notes.push({ kind: 'quest', text: `新任务：${name}` }); } }
        else if (args[1] === 'done') { if (!q.done) { q.done = true; q.stage = Math.max(q.stage, 1); notes.push({ kind: 'quest', text: `任务完成：${name}` }); } }
        else if (args[1] === 'fail') { if (!q.failed && !q.done) { q.failed = true; notes.push({ kind: 'bad', text: `任务失败：${name}` }); } }
        else if (args[1] === 'stage') { const n = parseInt(args[2], 10) || 1; if (n > q.stage) { q.stage = n; notes.push({ kind: 'quest', text: `任务更新：${name}` }); } }
        break;
      }
      case 'date': state.date = rest; break;
      case 'loc': state.location = rest; break;
      case 'rest': for (const ch of partySheets(state)) { restCharacter(ch, db, args[0]); ch.down = false; if (ch.hp <= 0) ch.hp = 1; } notes.push({ kind: 'good', text: args[0] === 'long' ? '长休：全队恢复完毕' : '短休：恢复了部分生命与能力' }); break;
      case 'learn': if (!state.pc.learned.includes(args[0])) { state.pc.learned.push(args[0]); const a = db.abilities[args[0]]; if (a) notes.push({ kind: 'good', text: `学会：${a.name}` }); refreshDerived(state.pc, db); } break;
      case 'log': state.log.push({ t: 'note', text: rest, date: state.date }); break;
      case 'toast': notes.push({ kind: 'info', text: rest }); break;
      case 'ending': state.pendingEnding = args[0]; break;
      default: break;
    }
  }
  return notes;
}

export function makeCompanion(db, def, level) {
  const ch = {
    id: def.id, name: def.name, gender: def.gender || 'm', race: def.race, subrace: def.subrace || null, cls: def.cls, subclass: def.subclass || null,
    background: null, portrait: def.portrait || null, level: Math.max(1, level), xp: 0,
    abil: Object.assign({ str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }, def.abil), profs: def.profs || [], expertise: def.expertise || [],
    equip: Object.assign({ weapon: null, offhand: null, armor: null, trinket: null }, def.equip), learned: def.learned || [], feats: def.feats || [], hpBonus: def.hpBonus || 0,
    hp: 1, maxHp: 1, tempHp: 0, slots: [], slotsMax: [], res: {}, conds: [], pendingLevels: 0, asiPoints: 0, approval: def.approval || 0, companion: true,
  };
  refreshDerived(ch, db, true);
  return ch;
}

export function grantXp(state, db, n) {
  const notes = [];
  if (!n) return notes;
  const pc = state.pc;
  pc.xp += n;
  notes.push({ kind: 'xp', text: `经验 +${n}` });
  const target = R.levelForXp(pc.xp);
  const have = pc.level + pc.pendingLevels;
  if (target > have) { pc.pendingLevels += target - have; notes.push({ kind: 'level', text: '可以升级了！' }); }
  return notes;
}

/** Make sure the hero is at least `level` (story milestones). */
export function ensureLevel(state, db, level) {
  const notes = [];
  const pc = state.pc;
  const lv = Math.min(R.MAX_LEVEL, level);
  const have = pc.level + pc.pendingLevels;
  if (lv > have) {
    pc.pendingLevels += lv - have;
    pc.xp = Math.max(pc.xp, R.XP_TABLE[lv]);
    notes.push({ kind: 'level', text: '可以升级了！' });
  }
  return notes;
}

/** Apply one pending level to the hero. choice = { asi: {str:1, con:1}, subclass } */
export function levelUp(state, db, choice = {}) {
  const pc = state.pc;
  if (pc.pendingLevels <= 0 || pc.level >= R.MAX_LEVEL) { pc.pendingLevels = 0; return null; }
  pc.level += 1;
  pc.pendingLevels -= 1;
  if (choice.subclass) pc.subclass = choice.subclass;
  if (choice.asi) for (const a of Object.keys(choice.asi)) pc.abil[a] = Math.min(20, pc.abil[a] + choice.asi[a]);
  refreshDerived(pc, db, true);
  // companions keep pace with the hero
  for (const id of Object.keys(state.companions)) {
    const c = state.companions[id];
    if (c.level < pc.level) { c.level = pc.level; refreshDerived(c, db, true); }
  }
  return pc.level;
}

export function levelUpNeeds(pc, db) {
  const next = pc.level + 1;
  const cls = db.classes[pc.cls];
  return {
    level: next,
    asi: [4, 8, 12].includes(next),
    subclass: !!(cls && cls.subclasses && cls.subclasses.length && next >= (cls.subclassLevel || 3) && !pc.subclass),
    newFeatures: ((cls && cls.features && cls.features[next]) || []).map((f) => (typeof f === 'string' ? f : f.id)),
  };
}

export function equipItem(state, db, ch, id) {
  const it = db.items[id];
  if (!it || !(state.inv[id] > 0)) return false;
  let slot = it.slot;
  if (!slot) { if (it.weapon) slot = 'weapon'; else if (it.armor) slot = 'armor'; else if (it.shield) slot = 'offhand'; else slot = 'trinket'; }
  if (slot === 'weapon' && it.weapon && (it.weapon.props || []).includes('two_handed')) ch.equip.offhand = null;
  if (slot === 'offhand') { const w = db.items[ch.equip.weapon]; if (w && w.weapon && (w.weapon.props || []).includes('two_handed')) return false; }
  ch.equip[slot] = id;
  refreshDerived(ch, db);
  return true;
}

export function unequip(state, db, ch, slot) { ch.equip[slot] = null; refreshDerived(ch, db); }
