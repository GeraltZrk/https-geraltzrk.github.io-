// Tabletop rules: dice, ability scores, skills, derived character numbers.
// Mechanics follow the 5e System Reference Document (CC-BY-4.0) in simplified form.

export const ABILS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
export const ABIL_NAMES = { str: '力量', dex: '敏捷', con: '体质', int: '智力', wis: '感知', cha: '魅力' };

export const SKILLS = {
  athletics: { name: '运动', abil: 'str' },
  acrobatics: { name: '杂技', abil: 'dex' },
  sleight: { name: '巧手', abil: 'dex' },
  stealth: { name: '隐匿', abil: 'dex' },
  arcana: { name: '奥秘', abil: 'int' },
  history: { name: '历史', abil: 'int' },
  investigation: { name: '调查', abil: 'int' },
  nature: { name: '自然', abil: 'int' },
  religion: { name: '宗教', abil: 'int' },
  animal: { name: '驯兽', abil: 'wis' },
  insight: { name: '洞悉', abil: 'wis' },
  medicine: { name: '医药', abil: 'wis' },
  perception: { name: '察觉', abil: 'wis' },
  survival: { name: '求生', abil: 'wis' },
  deception: { name: '欺瞒', abil: 'cha' },
  intimidation: { name: '威吓', abil: 'cha' },
  performance: { name: '表演', abil: 'cha' },
  persuasion: { name: '游说', abil: 'cha' },
};

export const MAX_LEVEL = 12;
export const XP_TABLE = [0, 0, 300, 900, 1800, 3000, 4500, 6500, 9000, 12000, 15500, 19500, 24000];

// Spell slots by caster level (index = character level), slots for spell levels 1..5.
const FULL = [null, [2], [3], [4, 2], [4, 3], [4, 3, 2], [4, 3, 3], [4, 3, 3, 1], [4, 3, 3, 2], [4, 3, 3, 3, 1], [4, 3, 3, 3, 2], [4, 3, 3, 3, 2], [4, 3, 3, 3, 2]];
const HALF = [null, [], [2], [3], [3], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3, 2], [4, 3, 2], [4, 3, 3], [4, 3, 3]];
// Pact magic: [count, slotLevel]; recovered on a short rest.
const PACT = [null, [1, 1], [2, 1], [2, 2], [2, 2], [2, 3], [2, 3], [2, 4], [2, 4], [2, 5], [2, 5], [3, 5], [3, 5]];

let rng = Math.random;
export function setRng(fn) { rng = fn || Math.random; }
export function rand() { return rng(); }
export function randInt(n) { return Math.floor(rng() * n); }
export function pick(arr) { return arr[randInt(arr.length)]; }
export function seededRng(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function abilMod(score) { return Math.floor((score - 10) / 2); }
export function profBonus(level) { return 2 + Math.floor((Math.max(1, level) - 1) / 4); }
export function levelForXp(xp) {
  let lv = 1;
  for (let i = 2; i <= MAX_LEVEL; i++) if (xp >= XP_TABLE[i]) lv = i;
  return lv;
}
export function fmtMod(n) { return (n >= 0 ? '+' : '') + n; }

/**
 * Roll dice notation such as "2d6+3", "1d8+mod", "1d10+1d4+2", "lvl", "3".
 * vars supplies named numbers (mod, prof, lvl ...). opts.crit doubles dice, opts.max maximises them.
 */
export function rollDice(notation, vars = {}, opts = {}) {
  const src = String(notation).replace(/\s+/g, '');
  const parts = src.match(/[+-]?[^+-]+/g) || [];
  let total = 0;
  const rolls = [];
  for (const raw of parts) {
    const sign = raw[0] === '-' ? -1 : 1;
    const term = raw.replace(/^[+-]/, '');
    const m = term.match(/^(\d*)d(\d+)$/i);
    if (m) {
      let count = parseInt(m[1] || '1', 10);
      const sides = parseInt(m[2], 10);
      if (opts.crit) count *= 2;
      for (let i = 0; i < count; i++) {
        const r = opts.max ? sides : 1 + randInt(sides);
        rolls.push({ sides, r });
        total += sign * r;
      }
    } else if (/^\d+$/.test(term)) {
      total += sign * parseInt(term, 10);
    } else if (term in vars) {
      total += sign * Math.floor(vars[term]);
    } else {
      throw new Error(`bad dice notation "${notation}" (unknown "${term}")`);
    }
  }
  return { total, rolls, notation: src };
}

/** Average value of a dice notation, for previews. */
export function avgDice(notation, vars = {}) {
  const src = String(notation).replace(/\s+/g, '');
  const parts = src.match(/[+-]?[^+-]+/g) || [];
  let total = 0;
  for (const raw of parts) {
    const sign = raw[0] === '-' ? -1 : 1;
    const term = raw.replace(/^[+-]/, '');
    const m = term.match(/^(\d*)d(\d+)$/i);
    if (m) total += sign * parseInt(m[1] || '1', 10) * (parseInt(m[2], 10) + 1) / 2;
    else if (/^\d+$/.test(term)) total += sign * parseInt(term, 10);
    else if (term in vars) total += sign * vars[term];
  }
  return total;
}

/** d20 roll with advantage/disadvantage. `force` fixes the kept die (cheats / tests). */
export function d20({ adv = false, dis = false, force = null } = {}) {
  const a = 1 + randInt(20);
  const b = 1 + randInt(20);
  let mode = 'normal';
  if (adv && !dis) mode = 'adv';
  else if (dis && !adv) mode = 'dis';
  let kept = a;
  if (mode === 'adv') kept = Math.max(a, b);
  if (mode === 'dis') kept = Math.min(a, b);
  if (force !== null && force !== undefined) kept = force;
  return { kept, dice: mode === 'normal' ? [force ?? a] : [a, b], mode };
}

/** Chance (0..1) to meet a DC with a given bonus, for the "show odds" option. */
export function successChance(bonus, dc, mode = 'normal') {
  let need = dc - bonus;
  let p;
  if (need <= 1) p = 1; else if (need > 20) p = 0; else p = (21 - need) / 20;
  // natural 20 always succeeds / natural 1 always fails on story checks
  p = Math.min(0.95, Math.max(0.05, p));
  if (mode === 'adv') return 1 - (1 - p) * (1 - p);
  if (mode === 'dis') return p * p;
  return p;
}

export function slotsFor(casterType, level) {
  const lv = Math.max(1, Math.min(MAX_LEVEL, level));
  if (casterType === 'full') return (FULL[lv] || []).slice();
  if (casterType === 'half') return (HALF[lv] || []).slice();
  if (casterType === 'pact') { const [n, sl] = PACT[lv]; const a = [0, 0, 0, 0, 0]; a[sl - 1] = n; return a; }
  return [];
}

// ---------------------------------------------------------------------------
// Derived numbers for a character sheet (player character or companion).
// `ch` shape: { cls, subclass, race, level, abil:{}, profs:[], expertise:[], equip:{weapon,offhand,armor,trinket}, feats:[] }
// `db` is the data registry (classes, races, items, abilities, conditions).

/** Merge every passive bonus that applies to a character into one object. */
export function passivesOf(ch, db, extraSources = []) {
  const out = { ac: 0, hit: 0, dmg: 0, spellHit: 0, spellDc: 0, spellDmg: 0, init: 0, hpPerLevel: 0, extraAttack: 0,
    critRange: 20, critDice: 0, sneak: false, resist: [], immune: [], vuln: [], condImmune: [], saveAdv: [], saveBonus: 0,
    skill: {}, skillAdv: [], regen: 0, lucky: false, unarmored: null, natArmor: 0, abil: {}, healBonus: 0, speed: 0 };
  const add = (p) => {
    if (!p) return;
    for (const k of Object.keys(p)) {
      const v = p[k];
      if (Array.isArray(out[k])) { for (const x of v) if (!out[k].includes(x)) out[k].push(x); }
      else if (k === 'skill' || k === 'abil') { for (const s of Object.keys(v)) out[k][s] = (out[k][s] || 0) + v[s]; }
      else if (k === 'critRange') out.critRange = Math.min(out.critRange, v);
      else if (k === 'natArmor') out.natArmor = Math.max(out.natArmor, v);
      else if (k === 'extraAttack') out.extraAttack = Math.max(out.extraAttack, v);
      else if (typeof v === 'number') out[k] = (out[k] || 0) + v;
      else out[k] = v;
    }
  };
  const cls = db.classes[ch.cls];
  if (cls) {
    for (let lv = 1; lv <= ch.level; lv++) {
      for (const f of (cls.features && cls.features[lv]) || []) add(featurePassive(f, db));
      const sub = cls.subclasses && cls.subclasses.find((s) => s.id === ch.subclass);
      if (sub) for (const f of (sub.features && sub.features[lv]) || []) add(featurePassive(f, db));
    }
  }
  const race = db.races[ch.race];
  if (race) {
    add(race.passives);
    const sr = race.subraces && race.subraces.find((s) => s.id === ch.subrace);
    if (sr) add(sr.passives);
  }
  for (const f of ch.feats || []) add(featurePassive(f, db));
  const eq = ch.equip || {};
  for (const slot of Object.keys(eq)) {
    const it = eq[slot] && db.items[eq[slot]];
    if (it && it.passives) add(it.passives);
  }
  for (const p of extraSources) add(p);
  return out;
}

function featurePassive(f, db) {
  const a = typeof f === 'string' ? db.abilities[f] : f;
  return a && a.passives ? a.passives : null;
}

export function abilScore(ch, abil, pas) {
  return (ch.abil[abil] || 10) + ((pas && pas.abil && pas.abil[abil]) || 0);
}

export function armorClass(ch, db, pas) {
  pas = pas || passivesOf(ch, db);
  const dex = abilMod(abilScore(ch, 'dex', pas));
  const eq = ch.equip || {};
  const armor = eq.armor && db.items[eq.armor];
  let ac;
  if (armor && armor.armor) {
    const cap = armor.armor.dexCap;
    ac = armor.armor.base + (cap === undefined || cap === null ? dex : Math.min(dex, cap));
  } else {
    ac = 10 + dex;
    if (pas.unarmored) ac += Math.max(0, abilMod(abilScore(ch, pas.unarmored, pas)));
    if (pas.natArmor) ac = Math.max(ac, pas.natArmor + dex);
  }
  const off = eq.offhand && db.items[eq.offhand];
  if (off && off.shield) ac += off.shield;
  return ac + pas.ac;
}

export function maxHpOf(ch, db, pas) {
  pas = pas || passivesOf(ch, db);
  const cls = db.classes[ch.cls];
  const die = cls ? cls.hitDie : 8;
  const con = abilMod(abilScore(ch, 'con', pas));
  const lv = ch.level;
  const hp = die + con + (lv - 1) * (Math.floor(die / 2) + 1 + con) + lv * pas.hpPerLevel + (ch.hpBonus || 0);
  return Math.max(lv, hp);
}

export function weaponProfile(ch, db, pas, weaponId) {
  pas = pas || passivesOf(ch, db);
  const eq = ch.equip || {};
  const w = db.items[weaponId || eq.weapon] || db.items.unarmed || { id: 'unarmed', name: '拳脚', weapon: { dmg: '1', type: 'bludgeoning', props: [] } };
  const wp = w.weapon || { dmg: '1', type: 'bludgeoning', props: [] };
  const str = abilMod(abilScore(ch, 'str', pas));
  const dex = abilMod(abilScore(ch, 'dex', pas));
  const props = wp.props || [];
  let mod = str;
  if (props.includes('ranged')) mod = dex;
  else if (props.includes('finesse')) mod = Math.max(str, dex);
  if (wp.abil) mod = abilMod(abilScore(ch, wp.abil, pas));
  if (props.includes('casting')) { const sa = spellAbility(ch, db); if (sa) mod = abilMod(abilScore(ch, sa, pas)); }
  const magic = wp.bonus || 0;
  return {
    id: w.id, name: w.name, dmg: wp.dmg, type: wp.type || 'slashing', props,
    hit: mod + profBonus(ch.level) + magic + pas.hit,
    dmgBonus: mod + magic + pas.dmg,
    ranged: props.includes('ranged'), mod,
  };
}

export function spellAbility(ch, db) {
  const cls = db.classes[ch.cls];
  return (cls && cls.spellAbility) || null;
}
export function spellMod(ch, db, pas) {
  const sa = spellAbility(ch, db);
  if (!sa) return 0;
  return abilMod(abilScore(ch, sa, pas || passivesOf(ch, db)));
}
export function spellDc(ch, db, pas) { pas = pas || passivesOf(ch, db); return 8 + profBonus(ch.level) + spellMod(ch, db, pas) + pas.spellDc; }
export function spellAttack(ch, db, pas) { pas = pas || passivesOf(ch, db); return profBonus(ch.level) + spellMod(ch, db, pas) + pas.spellHit; }

export function skillBonus(ch, db, skill, pas) {
  pas = pas || passivesOf(ch, db);
  const def = SKILLS[skill];
  if (!def) throw new Error(`unknown skill ${skill}`);
  let b = abilMod(abilScore(ch, def.abil, pas));
  if ((ch.profs || []).includes(skill)) b += profBonus(ch.level);
  if ((ch.expertise || []).includes(skill)) b += profBonus(ch.level);
  b += pas.skill[skill] || 0;
  return b;
}

export function saveBonus(ch, db, abil, pas) {
  pas = pas || passivesOf(ch, db);
  const cls = db.classes[ch.cls];
  let b = abilMod(abilScore(ch, abil, pas)) + pas.saveBonus;
  if (cls && (cls.saves || []).includes(abil)) b += profBonus(ch.level);
  return b;
}

/** All ability ids a character knows at their level (class, subclass, race, extra learned). */
export function knownAbilities(ch, db) {
  const ids = [];
  const push = (f) => { const id = typeof f === 'string' ? f : f.id; if (id && db.abilities[id] && !ids.includes(id)) ids.push(id); };
  const cls = db.classes[ch.cls];
  if (cls) {
    for (let lv = 1; lv <= ch.level; lv++) {
      for (const f of (cls.features && cls.features[lv]) || []) push(f);
      const sub = cls.subclasses && cls.subclasses.find((s) => s.id === ch.subclass);
      if (sub) for (const f of (sub.features && sub.features[lv]) || []) push(f);
    }
  }
  const race = db.races[ch.race];
  if (race) {
    for (const f of race.abilities || []) push(f);
    const sr = race.subraces && race.subraces.find((s) => s.id === ch.subrace);
    if (sr) for (const f of sr.abilities || []) push(f);
  }
  for (const f of ch.learned || []) push(f);
  for (const f of ch.feats || []) push(f);
  const eq = ch.equip || {};
  for (const slot of Object.keys(eq)) {
    const it = eq[slot] && db.items[eq[slot]];
    if (it && it.grants) for (const f of it.grants) push(f);
  }
  return ids;
}

/** Fill resource pools (spell slots, class resources) to their maximum for the current level. */
export function resourceMaxima(ch, db) {
  const cls = db.classes[ch.cls];
  const slots = cls ? slotsFor(cls.caster, ch.level) : [];
  const res = {};
  if (cls && cls.resources) {
    for (const key of Object.keys(cls.resources)) {
      const def = cls.resources[key];
      let max = 0;
      if (typeof def.max === 'number') max = def.max;
      else if (Array.isArray(def.byLevel)) max = def.byLevel[Math.min(ch.level, def.byLevel.length - 1)] || 0;
      else if (def.max === 'level') max = ch.level;
      else if (def.max === 'prof') max = profBonus(ch.level);
      else if (typeof def.max === 'string' && ABILS.includes(def.max)) max = Math.max(1, abilMod(ch.abil[def.max] || 10));
      else if (def.perLevel) max = def.perLevel * ch.level;
      if (def.minLevel && ch.level < def.minLevel) max = 0;
      res[key] = { max, rest: def.rest || 'long', name: def.name || key };
    }
  }
  return { slots, res, pact: cls && cls.caster === 'pact' };
}
