// Random-walk playtester. Plays every origin many times with random choices and reports
// crashes, soft-locks, loops, unreachable scenes and which endings were reached.
// Usage: node tools/autoplay.mjs [scenarioId ...] [--runs=40] [--json] [--trace=originId]
import { DB, mergeScenarioData } from '../js/data/index.js';
import { resolveScenarios } from './lib-scenarios.mjs';
import * as R from '../js/core/rules.js';
import { playOnce, STEP_LIMIT } from './lib-play.mjs';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const runsArg = args.find((a) => a.startsWith('--runs='));
const RUNS = runsArg ? parseInt(runsArg.split('=')[1], 10) : 40;
const traceArg = args.find((a) => a.startsWith('--trace='));
const only = args.filter((a) => !a.startsWith('--'));

async function main() {
  const report = {};
  let failed = false;
  for (const entry of resolveScenarios(only)) {
    const sc = (await entry.load()).default;
    const db = { ...DB, companions: {}, enemies: { ...DB.enemies }, items: { ...DB.items }, abilities: { ...DB.abilities }, conditions: { ...DB.conditions } };
    mergeScenarioData(db, sc);
    const visited = new Set();
    const endings = {};
    const problems = [];
    let total = 0, steps = 0, fights = 0, losses = 0;
    const levels = [];
    for (const origin of sc.origins) {
      const facs = (sc.factions || []).filter((f) => !f.origins || f.origins.includes(origin.id));
      const list = facs.length ? facs : [null];
      for (let i = 0; i < RUNS; i++) {
        const fac = list[i % list.length];
        const res = playOnce(db, sc, origin, fac, 1000 + i * 7919 + origin.id.length * 31, { god: i % 3 === 0, ascended: i % 4 === 1, trace: traceArg && traceArg.split('=')[1] === origin.id && i === 0 });
        total++; steps += res.steps; fights += res.fights; losses += res.losses;
        for (const s of res.visited || []) visited.add(s);
        if (res.ending) { endings[res.ending] = (endings[res.ending] || 0) + 1; levels.push(res.level); }
        if (res.problem) problems.push(`${origin.id}/${res.faction || '-'} ${res.cls}/${res.race} seed ${res.seed}: ${res.problem}${res.stack ? ' :: ' + res.stack : ''}`);
        if (res.trace.length) console.log(res.trace.join('\n'));
      }
    }
    const all = Object.keys(sc.scenes);
    const never = all.filter((s) => !visited.has(s));
    const uniq = [...new Set(problems.map((p) => p.replace(/seed \d+: /, '').replace(/^\S+ \S+ /, '')))];
    report[entry.id] = { runs: total, avgSteps: Math.round(steps / Math.max(1, total)), fights, losses, avgEndLevel: levels.length ? +(levels.reduce((a, b) => a + b, 0) / levels.length).toFixed(1) : null, endings, coverage: `${visited.size}/${all.length}`, neverVisited: never, problems: problems.slice(0, 40), distinctProblems: uniq.slice(0, 40), problemCount: problems.length };
    if (problems.length) failed = true;
    if (!asJson) {
      const r = report[entry.id];
      console.log(`== ${entry.id}: ${r.runs} runs, avg ${r.avgSteps} steps, ${r.fights} fights (${r.losses} lost), end level ~${r.avgEndLevel}, coverage ${r.coverage}`);
      console.log('   endings: ' + JSON.stringify(r.endings));
      if (never.length) console.log(`   never visited (${never.length}): ${never.slice(0, 60).join(', ')}${never.length > 60 ? ' …' : ''}`);
      console.log(`   problems: ${r.problemCount}`);
      for (const p of uniq.slice(0, 25)) console.log('   PROBLEM ' + p);
    }
  }
  if (asJson) console.log(JSON.stringify(report, null, 1));
  R.setRng(null);
  process.exitCode = failed ? 1 : 0;
}

main();
