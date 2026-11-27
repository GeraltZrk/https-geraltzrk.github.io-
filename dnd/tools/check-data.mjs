// Data checker and balance simulator for classes, abilities, items and enemies.
//
//   node tools/check-data.mjs                         validate the full data set
//   node tools/check-data.mjs --bench                 benchmark every class (damage per round, toughness, mono-class party win rate)
//   node tools/check-data.mjs --bench fighter,monk    … only some classes
//   node tools/check-data.mjs --enemies               fight every enemy at its own level with a standard party
//   node tools/check-data.mjs --enemies orc_raider,troll
//   node tools/check-data.mjs --enc "orc_raider:3,orc_chief:1" --level 4 [--party fighter,cleric,wizard,rogue] [--scenario s1444]
//   --parts a.js,b.js     build the data set from the stable base (conditions, base items) plus these files
//                         instead of js/data/index.js. Each file's exports named CLASSES*/ABILITIES*/ITEMS*/
//                         ENEMIES*/CONDITIONS*/RACES*/BACKGROUNDS* are merged in. Use this while other
//                         data files are still being written by someone else.
//   --trials N            simulations per measurement (default 120)
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import * as R from '../js/core/rules.js';
import { buildCharacter, newGame } from '../js/core/state.js';
import { makeCompanion } from '../js/core/effects.js';
import * as Combat from '../js/core/combat.js';
import { validateDb } from './lib-db.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf('--' + name); if (i < 0) return undefined; const v = argv[i + 1]; return v === undefined || v.startsWith('--') ? true : v; };
const TRIALS = parseInt(opt('trials') || '120', 10);

async function loadDb() {
  const parts = opt('parts');
  if (!parts || parts === true) {
    const { DB } = await import('../js/data/index.js');
    const db = { ...DB, companions: {} };
    // --scenario s1444 adds that campaign's own enemies, items and companions, so --enc can use them.
    const sid = opt('scenario');
    if (sid && sid !== true) {
      const mod = await import(pathToFileURL(path.resolve('js/data/scenarios', sid, 'index.js')).href);
      const sc = mod.default || mod.SCENARIO || mod;
      db.enemies = { ...db.enemies, ...(sc.enemies || {}) };
      db.items = { ...db.items, ...(sc.items || {}) };
    }
    return db;
  }
  const { CONDITIONS } = await import('../js/data/conditions.js');
  const { ITEMS_BASE } = await import('../js/data/items_base.js');
  const db = { classes: {}, races: {}, backgrounds: {}, items: { ...ITEMS_BASE }, abilities: {}, conditions: { ...CONDITIONS }, enemies: {}, companions: {}, codex: {} };
  const table = { CLASSES: 'classes', ABILITIES: 'abilities', ITEMS: 'items', ENEMIES: 'enemies', CONDITIONS: 'conditions', RACES: 'races', BACKGROUNDS: 'backgrounds' };
  for (const f of parts.split(',')) {
    const mod = await import(pathToFileURL(path.resolve(f)).href);
    for (const [name, value] of Object.entries(mod)) {
      const key = Object.keys(table).find((k) => name.startsWith(k));
      if (key && value && typeof value === 'object') Object.assign(db[table[key]], value);
    }
  }
  return db;
}

const BENCH_RACE = { id: 'bench', name: '基准', abil: {}, tags: [] };
const SCEN = { id: 'bench', era: 1444, origins: [{ id: 'o', name: 'o', startScene: 'x' }], scenes: { x: { id: 'x', text: ['x'], ending: 'e' } }, tracks: [], reputations: [], endings: { e: { title: 'e', text: [] } } };

function heroSpec(db, clsId, level, name) {
  const cls = db.classes[clsId];
  if (!cls) throw new Error(`unknown class ${clsId}`);
  const order = cls.abilOrder || R.ABILS;
  const vals = [15, 14, 13, 12, 10, 8];
  const abil = {};
  order.forEach((a, i) => { abil[a] = vals[i]; });
  abil[order[0]] += 1; abil[order[1]] += 1; // stand-in for racial bonuses
  let pts = (level >= 4 ? 2 : 0) + (level >= 8 ? 2 : 0) + (level >= 12 ? 2 : 0);
  for (const a of order) { while (pts > 0 && abil[a] < 20) { abil[a] += 1; pts -= 1; } }
  const sub = cls.subclasses && cls.subclasses.length && level >= (cls.subclassLevel || 3) ? cls.subclasses[0].id : null;
  const profs = cls.skills ? cls.skills.from.slice(0, cls.skills.n) : [];
  return { id: name, name, race: 'bench', cls: clsId, subclass: sub, abil, abilFinal: true, level, profs, equip: Object.assign({ weapon: null, offhand: null, armor: null, trinket: null }, cls.startEquip) };
}

function makeState(db, party, level) {
  db.races.bench = BENCH_RACE;
  const pc = buildCharacter(db, heroSpec(db, party[0], level, party[0] + '①'));
  const state = newGame(db, SCEN, { originId: 'o', character: pc });
  party.slice(1).forEach((c, i) => {
    const id = `ally${i}`;
    const def = heroSpec(db, c, level, c + '②③④⑤'[i]);
    def.id = id;
    db.companions[id] = def;
    state.companions[id] = makeCompanion(db, def, level);
    state.party.push(id);
  });
  return state;
}

function simulate(db, party, level, enemies, { rounds = 40, seed = 1 } = {}) {
  R.setRng(R.seededRng(seed));
  const state = makeState(db, party, level);
  const ctx = { state, db, scenario: SCEN };
  const maxHp = [state.pc, ...Object.values(state.companions)].reduce((s, c) => s + c.maxHp, 0);
  Combat.startCombat(ctx, { enemies, fleeable: false });
  const c = Combat.autoResolve(ctx, rounds);
  const allies = Combat.unitsOf(c, 'ally');
  const dealt = allies.reduce((s, u) => s + ((c.stats[u.uid] || {}).dealt || 0), 0);
  const taken = allies.reduce((s, u) => s + ((c.stats[u.uid] || {}).taken || 0), 0);
  const healed = allies.reduce((s, u) => s + ((c.stats[u.uid] || {}).healed || 0), 0);
  const downs = allies.filter((u) => u.down).length;
  return { over: c.over, rounds: c.round, dealt, taken, healed, downs, maxHp };
}

function dummyFor(level) {
  return { id: 'bench_dummy', name: '木桩', type: 'construct', hp: 100000, ac: 12 + Math.floor(level / 3), init: -5, saves: { str: 2, dex: 1 + Math.floor(level / 4), con: 2 + Math.floor(level / 4), int: 0, wis: 1 + Math.floor(level / 4), cha: 0 }, attacks: [{ name: '晃动', hit: -20, dmg: '0' }], traits: { boss: true }, xp: 0 };
}

// A plain "standard foe" per level, following the strength table in docs/DATA_GUIDE.md.
function gruntFor(level) {
  const t = level <= 2 ? [11, 12, 3, '1d6+2', 1] : level <= 4 ? [27, 13, 5, '1d8+3', 1] : level <= 6 ? [52, 14, 6, '2d6+3', 2] : level <= 8 ? [85, 15, 7, '2d8+4', 2] : [130, 17, 8, '2d10+5', 2];
  return { id: 'bench_grunt', name: '标准敌人', type: 'humanoid', hp: t[0], ac: t[1], init: 1, saves: { str: 2 + Math.floor(level / 3), dex: 1 + Math.floor(level / 4), con: 2 + Math.floor(level / 3), int: 0, wis: 1 + Math.floor(level / 4), cha: 0 }, attacks: [{ name: '攻击', hit: t[2], dmg: t[3], type: 'slashing', multi: t[4] }], xp: 0 };
}

const DPR_BAND = { 1: [5, 11], 3: [8, 16], 5: [14, 27], 8: [18, 36], 11: [24, 48] };
const pad = (s, n) => String(s).padEnd(n);

function benchClasses(db, list) {
  const levels = (opt('levels') && opt('levels') !== true ? opt('levels').split(',').map(Number) : [1, 3, 5, 8, 11]);
  console.log('职业基准：DPR = 对木桩 5 轮平均每轮伤害（AI 操作，含资源）；胜率 = 四个同职业对四个同级标准敌人');
  console.log(pad('class', 12) + pad('lv', 4) + pad('HP', 6) + pad('AC', 5) + pad('DPR', 8) + pad('band', 10) + pad('win%', 7) + pad('rounds', 8) + pad('hp lost%', 9) + 'flags');
  const flags = [];
  for (const id of list) {
    for (const lv of levels) {
      db.enemies.bench_dummy = dummyFor(lv);
      db.enemies.bench_grunt = gruntFor(lv);
      let dealt = 0;
      const st0 = makeState(db, [id], lv);
      const hp = st0.pc.maxHp, ac = R.armorClass(st0.pc, db);
      for (let i = 0; i < TRIALS; i++) dealt += simulate(db, [id], lv, [{ id: 'bench_dummy', n: 1 }], { rounds: 5, seed: 100 + i }).dealt;
      const dpr = dealt / TRIALS / 5;
      let wins = 0, rounds = 0, lost = 0;
      const T2 = Math.max(40, Math.floor(TRIALS / 2));
      for (let i = 0; i < T2; i++) { const r = simulate(db, [id, id, id, id], lv, [{ id: 'bench_grunt', n: 4 }], { seed: 500 + i }); if (r.over === 'win') wins++; rounds += r.rounds; lost += Math.min(1, Math.max(0, (r.taken - r.healed)) / r.maxHp); }
      const band = DPR_BAND[lv] || [0, 999];
      const f = [];
      if (dpr < band[0]) f.push('DPR-LOW'); if (dpr > band[1]) f.push('DPR-HIGH');
      const wr = wins / T2;
      if (wr < 0.5) f.push('WEAK'); if (wr > 0.995 && lost / T2 < 0.12) f.push('TOO-SAFE');
      if (f.length) flags.push(`${id}@${lv}: ${f.join(',')}`);
      console.log(pad(id, 12) + pad(lv, 4) + pad(hp, 6) + pad(ac, 5) + pad(dpr.toFixed(1), 8) + pad(band.join('–'), 10) + pad(Math.round(wr * 100), 7) + pad((rounds / T2).toFixed(1), 8) + pad(Math.round((lost / T2) * 100), 9) + f.join(','));
    }
  }
  console.log(flags.length ? `\n需要调整（${flags.length}）：\n  ` + flags.join('\n  ') : '\n全部落在目标区间内。');
  console.log('说明：辅助/治疗型职业 DPR 可以贴着下限；纯输出职业不该超过上限。WEAK = 同职业四人队胜率不足一半；TOO-SAFE = 稳赢且几乎不掉血。');
}

function testEnemies(db, list) {
  const party = (opt('party') && opt('party') !== true ? opt('party').split(',') : ['fighter', 'cleric', 'wizard', 'rogue']).filter((c) => db.classes[c]);
  if (party.length < 2) { console.log('标准队伍需要 fighter, cleric, wizard, rogue 这几个职业已经存在（或用 --party 指定）。'); process.exitCode = 1; return; }
  console.log(`敌人强度测试：标准队伍 ${party.join('/')}，等级 = 敌人的 level；普通敌人上 ${party.length} 个，Boss 上 1 个带 2 个同级标准敌人`);
  console.log(pad('enemy', 26) + pad('lv', 4) + pad('n', 3) + pad('win%', 7) + pad('rounds', 8) + pad('hp lost%', 10) + pad('downs', 7) + 'flags');
  const flags = [];
  for (const id of list) {
    const e = db.enemies[id];
    const lv = Math.max(1, Math.min(12, e.level || 1));
    db.enemies.bench_grunt = gruntFor(lv);
    const boss = e.traits && e.traits.boss;
    const enc = boss ? [{ id, n: 1 }, { id: 'bench_grunt', n: 2 }] : [{ id, n: party.length }];
    let wins = 0, rounds = 0, lost = 0, downs = 0;
    const T = Math.max(40, Math.floor(TRIALS / 2));
    for (let i = 0; i < T; i++) { const r = simulate(db, party, lv, enc, { seed: 900 + i }); if (r.over === 'win') wins++; rounds += r.rounds; lost += Math.min(1.5, Math.max(0, r.taken - r.healed) / r.maxHp); downs += r.downs; }
    const wr = wins / T, avgLost = lost / T, avgR = rounds / T;
    const f = [];
    if (wr < 0.6) f.push('TOO-HARD'); else if (wr > 0.99 && avgLost < 0.15) f.push('TOO-EASY');
    if (avgR > 9) f.push('SLOG'); if (avgR < 2) f.push('TRIVIAL');
    if (f.length) flags.push(`${id}: ${f.join(',')}`);
    console.log(pad(id, 26) + pad(lv, 4) + pad(boss ? 1 : party.length, 3) + pad(Math.round(wr * 100), 7) + pad(avgR.toFixed(1), 8) + pad(Math.round(avgLost * 100), 10) + pad((downs / T).toFixed(1), 7) + f.join(','));
  }
  console.log(flags.length ? `\n需要调整（${flags.length}）：\n  ` + flags.join('\n  ') : '\n全部在可接受范围内。');
  console.log('目标：胜率 70–97%，3–7 轮，队伍掉血 20–65%。Boss 可以更狠（胜率 60–90%）。');
}

const db = await loadDb();
const errors = validateDb(db);
console.log(`数据检查：${errors.length} 个错误（classes ${Object.keys(db.classes).length}, abilities ${Object.keys(db.abilities).length}, items ${Object.keys(db.items).length}, enemies ${Object.keys(db.enemies).length}, conditions ${Object.keys(db.conditions).length}, races ${Object.keys(db.races).length}）`);
for (const e of errors) console.log('  ERROR ' + e);
if (errors.length) process.exitCode = 1;
try {
  if (opt('bench')) benchClasses(db, opt('bench') === true ? Object.keys(db.classes) : opt('bench').split(','));
  if (opt('enemies')) testEnemies(db, opt('enemies') === true ? Object.keys(db.enemies).filter((k) => !k.startsWith('bench_')) : opt('enemies').split(','));
  if (opt('enc')) {
    const level = parseInt(opt('level') || '3', 10);
    const party = (opt('party') && opt('party') !== true ? opt('party').split(',') : ['fighter', 'cleric', 'wizard', 'rogue']);
    const enc = opt('enc').split(',').map((x) => { const [id, n] = x.split(':'); return { id, n: parseInt(n || '1', 10) }; });
    let wins = 0, rounds = 0, lost = 0, downs = 0;
    for (let i = 0; i < TRIALS; i++) { const r = simulate(db, party, level, enc, { seed: 300 + i }); if (r.over === 'win') wins++; rounds += r.rounds; lost += Math.max(0, r.taken - r.healed) / r.maxHp; downs += r.downs; }
    console.log(`遭遇 ${opt('enc')} 对 ${party.join('/')} ${level} 级：胜率 ${Math.round((wins / TRIALS) * 100)}%，平均 ${(rounds / TRIALS).toFixed(1)} 轮，队伍掉血 ${Math.round((lost / TRIALS) * 100)}%，平均倒地 ${(downs / TRIALS).toFixed(1)} 人`);
  }
} catch (e) { console.log('SIM CRASH: ' + e.stack); process.exitCode = 1; }
R.setRng(null);
