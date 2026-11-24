// Check ONE scene file of a campaign in isolation, while other files are still being written.
//
//   node tools/check-part.mjs <scenarioId> <partFile.js> [--runs=40] [--quiet]
//
// Loads <scenario>/meta.js (+ codex.js, enemies.js, items.js if present) and plan.json, takes the scenes
// exported by the part file, replaces every other planned scene with a stub exit, then validates the
// result and random-walks it from the part's entry scenes (as a mortal and as a god).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { DB, mergeScenarioData } from '../js/data/index.js';
import * as R from '../js/core/rules.js';
import { refreshDerived } from '../js/core/state.js';
import { makeCompanion } from '../js/core/effects.js';
import { validateScenario } from './validate.mjs';
import { playOnce } from './lib-play.mjs';
import { lintText } from './style-lint.mjs';

const args = process.argv.slice(2);
const pos = args.filter((a) => !a.startsWith('--'));
const runsArg = args.find((a) => a.startsWith('--runs='));
const RUNS = runsArg ? parseInt(runsArg.split('=')[1], 10) : 40;
const quiet = args.includes('--quiet');
if (pos.length < 2) { console.log('usage: node tools/check-part.mjs <scenarioId> <partFile.js> [--runs=40]'); process.exit(2); }
const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(here, '..', 'js', 'data', 'scenarios', pos[0]);
const partPath = path.isAbsolute(pos[1]) ? pos[1] : path.resolve(dir, path.basename(pos[1]));
const partName = path.basename(partPath);

async function load(file, key) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) return {};
  const mod = await import(pathToFileURL(p).href + '?t=' + Date.now());
  return mod[key] || mod.default || {};
}

const META = await load('meta.js', 'META');
const plan = JSON.parse(fs.readFileSync(path.join(dir, 'plan.json'), 'utf8'));
const CODEX = await load('codex.js', 'CODEX');
const ENEMIES = await load('enemies.js', 'ENEMIES');
const ITEMS = await load('items.js', 'ITEMS');
let partScenes;
try {
  const mod = await import(pathToFileURL(partPath).href + '?t=' + Date.now());
  partScenes = mod.SCENES || mod.default;
} catch (e) { console.log(`LOAD FAILED ${partName}: ${e.stack}`); process.exit(1); }
if (!partScenes || typeof partScenes !== 'object') { console.log(`${partName} must export const SCENES = { id: scene, … }`); process.exit(1); }

const errors = [];
const warnings = [];
const mine = new Set((plan.parts && plan.parts[partName]) || []);
const owner = {};
for (const [file, ids] of Object.entries(plan.parts || {})) for (const id of ids) owner[id] = file;
for (const id of mine) if (!partScenes[id]) errors.push(`planned scene "${id}" is missing from ${partName}`);
for (const id of Object.keys(partScenes)) {
  if (owner[id] && owner[id] !== partName) errors.push(`scene "${id}" belongs to ${owner[id]} — do not define it here`);
  if (!owner[id]) { const pref = [...mine][0] ? [...mine][0].replace(/_?\d+[a-z]?$/, '') : ''; if (pref && !id.startsWith(pref.split('_')[0])) warnings.push(`extra scene "${id}" does not follow this part's id prefix`); }
}

// stubs for every planned scene that lives elsewhere
const scenes = { ...partScenes };
const STUB = '__elsewhere';
for (const id of plan.scenes || []) if (!scenes[id]) scenes[id] = { id, text: ['（这一场在别的文件里。）'], ending: STUB };
const endings = { ...(META.endings || {}), [STUB]: { title: '离开本段', text: [] } };
const entries = ((plan.entry && plan.entry[partName]) || []).filter((id) => partScenes[id]);
if (!entries.length) errors.push(`plan.json has no entry scene for ${partName} (plan.entry["${partName}"])`);
const sc = { ...META, codex: CODEX, enemies: ENEMIES, items: ITEMS, scenes, endings,
  chapters: entries.map((id) => ({ title: id, scene: id })), epilogues: [], endingScenes: {} };
for (const [eid, target] of Object.entries(META.endingScenes || {})) if (scenes[target]) sc.endingScenes[eid] = target;

const db = { ...DB, companions: {}, enemies: { ...DB.enemies }, items: { ...DB.items }, abilities: { ...DB.abilities }, conditions: { ...DB.conditions } };
mergeScenarioData(db, sc);
const res = validateScenario(sc, db);
const known = new Set(plan.flags || []);
for (const e of res.errors) {
  const m = e.match(/flag "([^"]+)" is read but never set/);
  if (m && known.has(m[1])) continue;                       // set in another part, per the bible
  if (/origin .*startScene/.test(e)) continue;
  errors.push(e);
}
for (const w of res.warnings) {
  if (/unreachable from any start/.test(w)) { const id = w.match(/^scene (\S+):/); if (id && !partScenes[id[1]]) continue; }
  if (/^(ending|origin|premade|companion|scenario)/.test(w) && !/文风/.test(w)) continue;
  warnings.push(w);
}

// part statistics
let chars = 0, checks = 0, fights = 0, godScenes = 0, shops = 0, rests = 0;
const tagUse = { origin: 0, faction: 0, cls: 0, race: 0 };
for (const s of Object.values(partScenes)) {
  const blob = JSON.stringify(s);
  for (const p of s.text || []) chars += typeof p === 'string' ? p.length : [].concat(p.text || []).join('').length;
  checks += (blob.match(/"check":/g) || []).length;
  fights += (blob.match(/"enemies":/g) || []).length;
  if (/is\.god|is\.immortal/.test(blob)) godScenes++;
  if (s.shop) shops++;
  if (/rest (long|short)/.test(blob)) rests++;
  if (/origin ==|origin in/.test(blob)) tagUse.origin++;
  if (/faction ==|faction in/.test(blob)) tagUse.faction++;
  if (/class ==|class in|is\.(caster|martial|arcane|divine)/.test(blob)) tagUse.cls++;
  if (/race ==|race in|is\.(elf|dwarf|orc|human|halfling|gnome|goblin|monstrous|longlived|small|greenskin|elfblood|halforc|halfelf)/.test(blob)) tagUse.race++;
}

// random walks from each entry
const problems = [];
const visited = new Set();
const level = (plan.levels && plan.levels[partName]) || 1;
let exits = 0, total = 0;
for (const entry of entries) {
  for (let i = 0; i < RUNS; i++) {
    const originId = entry.startsWith('p_') ? (META.origins.find((o) => entry.startsWith(`p_${o.id}_`)) || META.origins[i % META.origins.length]).id : META.origins[i % META.origins.length].id;
    const origin = META.origins.find((o) => o.id === originId);
    const facs = (META.factions || []).filter((f) => !f.origins || f.origins.includes(origin.id));
    const fac = facs.length ? facs[i % facs.length] : null;
    const out = playOnce(db, sc, origin, fac, 7000 + i * 7919, {
      god: i % 3 === 0, ascended: i % 4 === 1, noEpilogue: true,
      prepare: (state, rnd) => {
        state.scene = entry;
        if (!entry.startsWith('p_')) {
          state.pc.level = level; state.pc.xp = R.XP_TABLE[level]; refreshDerived(state.pc, db, true);
          for (const f of plan.flags || []) if (rnd() < 0.5) state.flags[f] = true;
          for (const id of Object.keys(sc.companions || {})) if (rnd() < 0.6) { state.companions[id] = makeCompanion(db, db.companions[id], level); if (state.party.length < 3 && rnd() < 0.8) state.party.push(id); }
          for (const t of sc.tracks || []) state.world[t.key] = Math.round((t.min ?? 0) + rnd() * ((t.max ?? 10) - (t.min ?? 0)));
          for (const f of sc.reputations || []) state.rep[f.key] = Math.round(rnd() * 8 - 3);
          state.gold = 200;
        }
      },
    });
    total++;
    for (const id of out.visited || []) visited.add(id);
    if (out.ending) exits++;
    if (out.problem) problems.push(`${entry} [${origin.id}/${out.cls}/${out.race}${out.godSeen ? '/神' : ''}] ${out.problem}${out.stack ? ' :: ' + out.stack : ''}`);
  }
}
R.setRng(null);
const never = Object.keys(partScenes).filter((id) => !visited.has(id));
const uniq = [...new Set(problems.map((p) => p.replace(/\[[^\]]*\] /, '')))];

console.log(`== ${pos[0]}/${partName}: ${Object.keys(partScenes).length} scenes (${mine.size} planned), ${chars} 字, ${checks} checks, ${fights} fights, ${shops} shops, ${rests} rests, 神格反应 ${godScenes} 场`);
console.log(`   专属内容场景数：出身 ${tagUse.origin}，阵营 ${tagUse.faction}，职业 ${tagUse.cls}，种族 ${tagUse.race}`);
console.log(`   errors ${errors.length}, warnings ${warnings.length}, walk problems ${uniq.length} (of ${total} runs, ${exits} reached an exit)`);
for (const e of errors) console.log('  ERROR ' + e);
for (const p of uniq.slice(0, 20)) console.log('  PROBLEM ' + p);
if (never.length) console.log(`  never reached in ${total} random runs (${never.length}): ${never.join(', ')}`);
if (!quiet) for (const w of warnings) console.log('  warn  ' + w);
process.exitCode = errors.length || uniq.length ? 1 : 0;
