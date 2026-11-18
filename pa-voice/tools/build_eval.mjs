#!/usr/bin/env node
// 把一轮 Skill 评测的原始结果整理进页面用的 src/data/eval.json（按轮次存放，可多轮并存）。
//
// 用法：node tools/build_eval.mjs --round v1.0 --label "第一轮 · Skill 1.0" --cases <这一轮用的用例.json> <评测结果.json>
//
// 评测结果.json：{ result: { tally, perJudge, fails, perCase, votes: [{pair, judge, winner, reason}],
//                          outputs: { 'baseline-1': {id: 输出}, 'skill-1': …, 'baseline-2': …, 'skill-2': … } } }
// 用例文件里每条可以带 "held_out": true，表示改规范时没有看过这条用例的评审意见；汇总时会单独算一栏。
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const L = require(path.join(root, 'src', 'lint-core.js'));

const argv = process.argv.slice(2);
const opt = (name, dflt) => { const i = argv.indexOf('--' + name); if (i === -1) return dflt; const v = argv[i + 1]; argv.splice(i, 2); return v; };
const round = opt('round', 'v1.0');
const label = opt('label', round);
const casesPath = opt('cases', path.join(root, 'skill', 'pa-voice-zh', 'evals', 'cases.json'));
const note = opt('note', '');
const resultPath = argv[0];
if (!resultPath) { console.error('用法：node tools/build_eval.mjs --round v1.0 --label "…" --cases <用例.json> <评测结果.json>'); process.exit(2); }
const cases = JSON.parse(readFileSync(casesPath, 'utf8'));
const raw = JSON.parse(readFileSync(resultPath, 'utf8'));
const R = raw.result || raw;

const DIMS = {
  D1: ['首行可判', '只看标题，能同时知道发生了什么、对我值多少'],
  D2: ['事实保真', '数字、条件、确定程度和给定的事实一致，没有多出来的事实'],
  D3: ['可决策', '只要求一个决定；按钮说出了结果；不处理的后果说清了'],
  D4: ['语气合档', '符合任务严肃度和用户此刻的状态；称呼符合用户档案'],
  D5: ['不操纵', '没有缺乏依据的紧迫、稀缺、内疚、恭维、挽留；比较带了范围'],
  D6: ['像人话', '没有客服腔、公文腔、模板腔，没有提到内部机制'],
  D7: ['该不该发', '发或不发、用什么强度发的决定是对的'],
};
const CONDS = ['baseline', 'skill'], RUNS = [1, 2];
const median = (a) => { if (!a.length) return 0; const s = a.slice().sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2 * 10) / 10; };
// 每条用例对应的消息类型（只用于体检时选规则）：用例里写了 type 就用它，否则按 id 里的关键词猜
const TYPE_BY_ID = [['no-change', 'progress'], ['weekly', 'progress'], ['renewal', 'deadline'], ['elder', 'deadline'], ['scheduled', 'deadline'],
  ['payment', 'approval'], ['mandate', 'done'], ['quits', 'done'], ['captcha', 'blocked'], ['delay', 'blocked'], ['monitor', 'blocked'],
  ['error', 'correction'], ['ignore', 'pause'], ['milestone', 'milestone']];
const typeOf = (cs) => cs.type || (TYPE_BY_ID.find(([k]) => cs.id.includes(k)) || [0, 'opportunity'])[1];

// ---------- 逐对投票 ----------
const votes = {};
for (const v of R.votes || []) (votes[v.pair] = votes[v.pair] || []).push(v);

// ---------- 汇总（全部 / 没见过的用例 / 见过的用例） ----------
function summarize(subset) {
  const idset = new Set(subset.map((c) => c.id));
  const tally = { skill: 0, baseline: 0, tie: 0 }, perJudge = {}, fails = { skill: {}, baseline: {} };
  for (const v of R.votes || []) {
    if (!idset.has(v.pair.split('#')[0])) continue;
    tally[v.winner]++;
    const pj = (perJudge[v.judge] = perJudge[v.judge] || { judge: v.judge, skill: 0, baseline: 0, tie: 0 });
    pj[v.winner]++;
    for (const cond of CONDS) for (const d of (v.fails && v.fails[cond]) || []) fails[cond][d] = (fails[cond][d] || 0) + 1;
  }
  const checks = {};
  for (const cond of CONDS) {
    const c = { send_ok: 0, send_total: 0, include_ok: 0, include_total: 0, must_not_hits: 0, lint_error_msgs: 0, lint_warns: 0, title_ok: 0, sent: 0, median_len: 0 };
    const lens = [];
    for (const run of RUNS) for (const cs of subset) {
      const o = (R.outputs[cond + '-' + run] || {})[cs.id];
      c.send_total++;
      if (!o) continue;
      if (cs.expect.send.includes(o.send)) c.send_ok++;
      const text = (o.title || '') + (o.body || '');
      if (!text.trim()) continue;
      c.sent++;
      const all = text + (o.actions || []).join('');
      if ((cs.expect.must_include || []).length) { c.include_total++; if (cs.expect.must_include.every((w) => text.includes(w))) c.include_ok++; }
      if ((cs.expect.must_not || []).some((w) => all.includes(w))) c.must_not_hits++;
      const surface = cs.surface === 'chat' ? 'chat' : 'lock';
      const r = L.lint({ title: o.title || '', body: o.body || '', actions: o.actions || [] }, { type: typeOf(cs), stakes: cs.goal.stakes, surface, allowNin: cs.profile.address === '您' });
      if (r.counts.error) c.lint_error_msgs++;
      c.lint_warns += r.counts.warn;
      if (L.visualLen(o.title || '') <= L.SURFACES[surface].title) c.title_ok++;
      lens.push(r.metrics.chars);
    }
    c.median_len = median(lens);
    checks[cond] = c;
  }
  return { n_cases: subset.length, tally, perJudge: Object.values(perJudge).sort((a, b) => a.judge - b.judge), fails, checks };
}

const all = summarize(cases);
const held = cases.filter((c) => c.held_out);
const out = {
  id: round, label, note, model: R.model || '', n_cases: cases.length, runs: RUNS.length, judges: R.judges || 3,
  ...all,
  held_out: held.length ? summarize(held) : null,
  seen: held.length ? summarize(cases.filter((c) => !c.held_out)) : null,
  cases: cases.map((cs) => {
    const pc = { skill: 0, baseline: 0, tie: 0 };
    for (const r of RUNS) for (const v of votes[cs.id + '#' + r] || []) pc[v.winner]++;
    return {
      id: cs.id, about: cs.about, event: cs.event, now: cs.context.now, last: cs.context.user_last_message,
      expect: cs.expect, surface: cs.surface, type: typeOf(cs), stakes: cs.goal.stakes, address: cs.profile.address, goal: cs.goal.title,
      held_out: !!cs.held_out, votes: pc,
      outputs: Object.fromEntries(CONDS.flatMap((c) => RUNS.map((r) => [c + '-' + r, (R.outputs[c + '-' + r] || {})[cs.id] || null]))),
      reasons: RUNS.flatMap((r) => (votes[cs.id + '#' + r] || []).map((v) => ({ run: r, judge: v.judge, winner: v.winner, reason: v.reason }))),
    };
  }),
};

const file = path.join(root, 'src', 'data', 'eval.json');
let E = { dims: DIMS, story: [], rounds: [] };
if (existsSync(file)) { try { const prev = JSON.parse(readFileSync(file, 'utf8')); if (Array.isArray(prev.rounds)) E = prev; } catch (e) { /* 重新生成 */ } }
E.dims = DIMS;
const prevRound = E.rounds.find((r) => r.id === round);
if (prevRound && prevRound.findings) out.findings = prevRound.findings; // 手写的结论段落，重跑时保留
E.rounds = E.rounds.filter((r) => r.id !== round).concat([out]).sort((a, b) => a.id.localeCompare(b.id));
writeFileSync(file, JSON.stringify(E, null, 1), 'utf8');

const show = (name, s) => {
  const t = s.tally, n = t.skill + t.baseline + t.tie;
  console.log(`${name}（${s.n_cases} 条用例，${n} 次盲评）：带 Skill ${t.skill}，不带 ${t.baseline}，差不多 ${t.tie}`);
  for (const cond of CONDS) console.log('  ' + cond, JSON.stringify(s.checks[cond]));
  console.log('  各维度没过', JSON.stringify(s.fails));
};
console.log(`轮次 ${round}（${label}）`);
show('全部', all);
if (out.held_out) { show('没见过的用例', out.held_out); show('见过的用例', out.seen); }
console.log(out.cases.map((c) => `${c.id.slice(0, 3)}${c.held_out ? '*' : ''} S${c.votes.skill}/B${c.votes.baseline}/T${c.votes.tie}`).join('  '));
