// Game state: creation, derived lookups for conditions, rest/level handling, save & load.
import * as R from './rules.js';

export const SAVE_VERSION = 1;
const LS_PREFIX = 'anbdnd.';

export function defaultCheats() {
  return {
    used: false,
    god: false,          // 无敌：我方不受伤害
    oneHit: false,       // 一击必杀
    infRes: false,       // 无限法术位与职业资源
    autoSuccess: false,  // 检定必定成功
    fixedRoll: 0,        // 固定 d20 点数（0 = 关闭）
    showDc: true,        // 显示难度与成功率
    unlockAll: false,    // 无视选项条件
    revealHidden: false, // 显示隐藏选项
    noEncounter: false,  // 跳过战斗（直接胜利）
    freeShop: false,     // 商店免费
    debug: false,        // 显示场景编号
  };
}

/** Build a character sheet from creation choices. */
export function buildCharacter(db, spec) {
  const cls = db.classes[spec.cls];
  const race = db.races[spec.race];
  if (!cls) throw new Error(`unknown class ${spec.cls}`);
  if (!race) throw new Error(`unknown race ${spec.race}`);
  const abil = {};
  for (const a of R.ABILS) abil[a] = (spec.abil && spec.abil[a]) || 10;
  const bonus = Object.assign({}, race.abil || {});
  const sr = race.subraces && race.subraces.find((s) => s.id === spec.subrace);
  if (sr && sr.abil) for (const a of Object.keys(sr.abil)) bonus[a] = (bonus[a] || 0) + sr.abil[a];
  if (!spec.abilFinal) for (const a of Object.keys(bonus)) abil[a] += bonus[a];
  const bg = db.backgrounds && db.backgrounds[spec.background];
  const profs = new Set([...(spec.profs || []), ...((bg && bg.profs) || []), ...((race && race.profs) || [])]);
  const equip = Object.assign({ weapon: null, offhand: null, armor: null, trinket: null }, spec.equip || cls.startEquip || {});
  const ch = {
    name: spec.name || '无名氏', gender: spec.gender || 'm', race: spec.race, subrace: spec.subrace || (race.subraces && race.subraces[0] && race.subraces[0].id) || null,
    cls: spec.cls, subclass: spec.subclass || null, background: spec.background || null, portrait: spec.portrait || null,
    level: spec.level || 1, xp: R.XP_TABLE[spec.level || 1] || 0, abil, profs: [...profs], expertise: spec.expertise || [],
    equip, learned: spec.learned || [], feats: spec.feats || [], hpBonus: 0,
    hp: 1, maxHp: 1, tempHp: 0, slots: [], slotsMax: [], res: {}, conds: [], pendingLevels: 0, asiPoints: 0, bio: spec.bio || '',
  };
  refreshDerived(ch, db, true);
  return ch;
}

/** Recompute max HP and resource maxima. `fill` restores everything to full. */
export function refreshDerived(ch, db, fill = false) {
  const pas = R.passivesOf(ch, db);
  const oldMax = ch.maxHp || 0;
  ch.maxHp = R.maxHpOf(ch, db, pas);
  if (fill) ch.hp = ch.maxHp; else ch.hp = Math.min(ch.maxHp, Math.max(0, ch.hp + Math.max(0, ch.maxHp - oldMax)));
  const mx = R.resourceMaxima(ch, db);
  const oldSlots = ch.slots || [];
  ch.slotsMax = mx.slots;
  ch.slots = mx.slots.map((m, i) => (fill ? m : Math.min(m, (oldSlots[i] ?? m) + Math.max(0, m - ((ch._slotsMaxPrev || [])[i] ?? m)))));
  ch._slotsMaxPrev = mx.slots.slice();
  const res = {};
  for (const k of Object.keys(mx.res)) {
    const prev = ch.res && ch.res[k];
    res[k] = { cur: fill || !prev ? mx.res[k].max : Math.min(mx.res[k].max, prev.cur + Math.max(0, mx.res[k].max - prev.max)), max: mx.res[k].max, rest: mx.res[k].rest, name: mx.res[k].name };
  }
  ch.res = res;
  ch.pact = !!mx.pact;
  return ch;
}

export function restCharacter(ch, db, kind) {
  if (kind === 'long') {
    refreshDerived(ch, db, true);
    ch.conds = [];
    ch.tempHp = 0;
    return;
  }
  // short rest: heal half of missing HP, restore short-rest resources and pact slots
  const missing = ch.maxHp - ch.hp;
  ch.hp = Math.min(ch.maxHp, ch.hp + Math.ceil(missing / 2));
  for (const k of Object.keys(ch.res)) if (ch.res[k].rest === 'short') ch.res[k].cur = ch.res[k].max;
  if (ch.pact) ch.slots = ch.slotsMax.slice();
  ch.conds = (ch.conds || []).filter((c) => c.persist);
}

export function newGame(db, scenario, { originId, factionId, character, difficulty = 'normal', cheats = null }) {
  const origin = scenario.origins.find((o) => o.id === originId) || scenario.origins[0];
  const state = {
    v: SAVE_VERSION,
    scenario: scenario.id, origin: origin.id, nation: origin.nation || origin.id, faction: factionId || null,
    difficulty,
    pc: character,
    party: [], companions: {},
    inv: {}, gold: 0,
    flags: {}, vars: {}, rep: {}, world: {},
    quests: {}, codex: {}, visited: {}, picked: {},
    scene: null, phase: 'scene', pending: null, combat: null,
    date: scenario.startDate || '', location: '',
    log: [], history: [],
    cheats: cheats || defaultCheats(),
    stats: { rolls: 0, nat20: 0, nat1: 0, kills: 0, fights: 0, checksPassed: 0, checksFailed: 0, startedAt: 0, scenes: 0 },
    endings: [],
  };
  for (const t of scenario.tracks || []) state.world[t.key] = t.start ?? 0;
  for (const f of scenario.reputations || []) state.rep[f.key] = f.start ?? 0;
  const cls = db.classes[character.cls];
  for (const [id, n] of Object.entries((cls && cls.startItems) || {})) state.inv[id] = (state.inv[id] || 0) + n;
  for (const slot of Object.keys(character.equip || {})) { const id = character.equip[slot]; if (id) state.inv[id] = Math.max(state.inv[id] || 0, 1); }
  state.gold = (cls && cls.startGold) || 10;
  if (origin.start) {
    for (const [k, v] of Object.entries(origin.start.rep || {})) state.rep[k] = (state.rep[k] || 0) + v;
    for (const [k, v] of Object.entries(origin.start.world || {})) state.world[k] = (state.world[k] || 0) + v;
    for (const k of origin.start.flags || []) state.flags[k] = true;
    for (const [id, n] of Object.entries(origin.start.items || {})) state.inv[id] = (state.inv[id] || 0) + n;
    state.gold += origin.start.gold || 0;
  }
  const faction = (scenario.factions || []).find((f) => f.id === factionId);
  if (faction && faction.start) {
    for (const [k, v] of Object.entries(faction.start.rep || {})) state.rep[k] = (state.rep[k] || 0) + v;
    for (const [k, v] of Object.entries(faction.start.world || {})) state.world[k] = (state.world[k] || 0) + v;
    for (const k of faction.start.flags || []) state.flags[k] = true;
  }
  state.scene = origin.startScene || scenario.startScene;
  return state;
}

/** Every character sheet currently travelling with the player (PC first). */
export function partySheets(state) {
  const out = [state.pc];
  for (const id of state.party) if (state.companions[id]) out.push(state.companions[id]);
  return out;
}

/**
 * Lookup used by condition expressions. Namespaces:
 * flag.x  var.x  rep.x  world.x  stat.str  mod.str  skill.arcana  prof.arcana  item.x  party.x  met.x
 * approval.x  quest.x (stage)  done.x  failed.x  visited.x  picked.x  cheat.x  is.x (tags)
 * plain: class subclass race subrace origin nation faction gender level gold hp maxhp era bg scenario difficulty partysize
 */
export function makeGetter(state, db, scenario) {
  const pc = state.pc;
  let pas = null;
  const P = () => pas || (pas = R.passivesOf(pc, db));
  return function get(path) {
    const dot = path.indexOf('.');
    if (dot < 0) {
      switch (path) {
        case 'class': case 'cls': return pc.cls;
        case 'subclass': return pc.subclass || '';
        case 'race': return pc.race;
        case 'subrace': return pc.subrace || '';
        case 'origin': return state.origin;
        case 'nation': return state.nation;
        case 'faction': return state.faction || '';
        case 'gender': return pc.gender;
        case 'level': return pc.level;
        case 'gold': return state.gold;
        case 'hp': return pc.hp;
        case 'maxhp': return pc.maxHp;
        case 'bg': case 'background': return pc.background || '';
        case 'scenario': return state.scenario;
        case 'era': return scenario ? scenario.era : 0;
        case 'difficulty': return state.difficulty;
        case 'partysize': return state.party.length;
        case 'name': return pc.name;
        default: return undefined;
      }
    }
    const ns = path.slice(0, dot);
    const key = path.slice(dot + 1);
    switch (ns) {
      case 'flag': return !!state.flags[key];
      case 'var': return state.vars[key] || 0;
      case 'rep': return state.rep[key] || 0;
      case 'world': return state.world[key] || 0;
      case 'stat': return R.abilScore(pc, key, P());
      case 'mod': return R.abilMod(R.abilScore(pc, key, P()));
      case 'skill': return R.SKILLS[key] ? R.skillBonus(pc, db, key, P()) : 0;
      case 'prof': return (pc.profs || []).includes(key);
      case 'item': return state.inv[key] || 0;
      case 'party': return state.party.includes(key);
      case 'met': return !!state.companions[key];
      case 'approval': return (state.companions[key] && state.companions[key].approval) || 0;
      case 'quest': return (state.quests[key] && state.quests[key].stage) || 0;
      case 'done': return !!(state.quests[key] && state.quests[key].done);
      case 'failed': return !!(state.quests[key] && state.quests[key].failed);
      case 'visited': return !!state.visited[key];
      case 'picked': return !!state.picked[key];
      case 'cheat': return state.cheats[key];
      case 'knows': return R.knownAbilities(pc, db).includes(key);
      case 'is': return characterTags(pc, db).includes(key);
      default: return undefined;
    }
  };
}

/** Convenience tags for conditions: is.caster, is.martial, is.elf, is.longlived, is.noble ... */
export function characterTags(ch, db) {
  const tags = new Set();
  const cls = db.classes[ch.cls];
  const race = db.races[ch.race];
  for (const t of (cls && cls.tags) || []) tags.add(t);
  for (const t of (race && race.tags) || []) tags.add(t);
  const sr = race && race.subraces && race.subraces.find((s) => s.id === ch.subrace);
  for (const t of (sr && sr.tags) || []) tags.add(t);
  const bg = db.backgrounds && db.backgrounds[ch.background];
  for (const t of (bg && bg.tags) || []) tags.add(t);
  tags.add(ch.gender === 'f' ? 'female' : ch.gender === 'm' ? 'male' : 'other');
  return [...tags];
}

// ---------------------------------------------------------------------------
// Persistence. localStorage may be unavailable (private mode) — every access is guarded.

function ls() { try { return globalThis.localStorage || null; } catch (e) { return null; } }

export function serialise(state) {
  const copy = Object.assign({}, state, { history: [] });
  return JSON.stringify(copy);
}

export function saveSlot(slot, state, meta = {}) {
  const store = ls();
  if (!store) return false;
  try {
    const info = { slot, when: Date.now(), scenario: state.scenario, name: state.pc.name, level: state.pc.level, cls: state.pc.cls, race: state.pc.race, date: state.date, location: state.location, scene: state.scene, ...meta };
    store.setItem(LS_PREFIX + 'save.' + slot, serialise(state));
    const index = listSaves().filter((s) => s.slot !== slot);
    index.push(info);
    store.setItem(LS_PREFIX + 'index', JSON.stringify(index));
    return true;
  } catch (e) { return false; }
}

export function listSaves() {
  const store = ls();
  if (!store) return [];
  try { return JSON.parse(store.getItem(LS_PREFIX + 'index') || '[]'); } catch (e) { return []; }
}

export function loadSlot(slot) {
  const store = ls();
  if (!store) return null;
  try {
    const raw = store.getItem(LS_PREFIX + 'save.' + slot);
    return raw ? migrate(JSON.parse(raw)) : null;
  } catch (e) { return null; }
}

export function deleteSlot(slot) {
  const store = ls();
  if (!store) return;
  try {
    store.removeItem(LS_PREFIX + 'save.' + slot);
    store.setItem(LS_PREFIX + 'index', JSON.stringify(listSaves().filter((s) => s.slot !== slot)));
  } catch (e) { /* ignore */ }
}

export function migrate(state) {
  if (!state || typeof state !== 'object') return null;
  state.cheats = Object.assign(defaultCheats(), state.cheats || {});
  state.history = state.history || [];
  state.picked = state.picked || {};
  state.visited = state.visited || {};
  state.stats = Object.assign({ rolls: 0, nat20: 0, nat1: 0, kills: 0, fights: 0, checksPassed: 0, checksFailed: 0, startedAt: 0, scenes: 0 }, state.stats || {});
  state.v = SAVE_VERSION;
  return state;
}

/** Export a save as a compact text code the player can copy between devices. */
export function exportCode(state) {
  const json = serialise(state);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return 'ANB1:' + btoa(bin);
}

export function importCode(code) {
  const text = String(code || '').trim();
  try {
    if (text.startsWith('ANB1:')) {
      const bin = atob(text.slice(5));
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return migrate(JSON.parse(new TextDecoder().decode(bytes)));
    }
    return migrate(JSON.parse(text));
  } catch (e) { return null; }
}

export function loadSettings() {
  const store = ls();
  const def = { textSize: 'm', showDc: true, autoCompanions: true, confirmChoices: false, reducedMotion: false };
  if (!store) return def;
  try { return Object.assign(def, JSON.parse(store.getItem(LS_PREFIX + 'settings') || '{}')); } catch (e) { return def; }
}
export function saveSettings(s) { const store = ls(); if (!store) return; try { store.setItem(LS_PREFIX + 'settings', JSON.stringify(s)); } catch (e) { /* ignore */ } }

export function loadMeta() {
  const store = ls();
  const def = { endings: {}, codex: {}, cheatsEverUsed: false };
  if (!store) return def;
  try { return Object.assign(def, JSON.parse(store.getItem(LS_PREFIX + 'meta') || '{}')); } catch (e) { return def; }
}
export function saveMeta(m) { const store = ls(); if (!store) return; try { store.setItem(LS_PREFIX + 'meta', JSON.stringify(m)); } catch (e) { /* ignore */ } }
