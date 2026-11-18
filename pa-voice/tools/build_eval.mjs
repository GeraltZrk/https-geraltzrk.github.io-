#!/usr/bin/env node
// 把 Skill 评测的原始结果整理成页面用的 src/data/eval.json。
// 用法：node tools/build_eval.mjs <评测结果.json> [评审日志 journal.jsonl]
//
// 评测结果.json：{ result: { tally, perJudge, fails, outputs: { 'baseline-1': {id: 输出}, 'skill-1': …, 'baseline-2': …, 'skill-2': … } } }
// 评审日志（可选）：每位评审的逐对判断。有它就能给出每一对的投票和理由，并用来复核合计数。
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const L = require(path.join(root, 'src', 'lint-core.js'));
const cases = JSON.parse(readFileSync(path.join(root, 'skill', 'pa-voice-zh', 'evals', 'cases.json'), 'utf8'));
const [resultPath, journalPath] = process.argv.slice(2);
if (!resultPath) { console.error('用法：node tools/build_eval.mjs <评测结果.json> [journal.jsonl]'); process.exit(2); }
const raw = JSON.parse(readFileSync(resultPath, 'utf8'));
const R = raw.result || raw;

// 每个情境应有的消息类型（只用于体检时选规则）
const TYPE = {
  'c01-opportunity': 'opportunity', 'c02-no-change': 'progress', 'c03-night-small-drop': 'opportunity', 'c04-renewal-5d': 'deadline',
  'c05-payment-approval': 'approval', 'c06-mandate-receipt': 'done', 'c07-captcha-handover': 'blocked', 'c08-delay-rushed': 'blocked',
  'c09-pa-error': 'correction', 'c10-third-ignore': 'pause', 'c11-milestone-relaxed': 'milestone', 'c12-elder-bill': 'deadline',
  'c13-monitor-broken': 'blocked', 'c14-scheduled': 'deadline', 'c15-missing-baseline': 'opportunity', 'c16-user-quits': 'done',
  'c17-duplicate': 'opportunity', 'c18-weekly-report': 'progress',
};
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
const ids = Object.keys(R.outputs['baseline-1']);
const median = (a) => { if (!a.length) return 0; const s = a.slice().sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2 * 10) / 10; };

// ---------- 代码判定 ----------
const checks = {};
for (const cond of CONDS) {
  const c = { send_ok: 0, send_total: 0, include_ok: 0, include_total: 0, must_not_hits: 0, lint_error_msgs: 0, lint_warns: 0, title_ok: 0, sent: 0, median_len: 0 };
  const lens = [];
  for (const run of RUNS) for (const cs of cases) {
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
    const r = L.lint({ title: o.title || '', body: o.body || '', actions: o.actions || [] }, { type: TYPE[cs.id], stakes: cs.goal.stakes, surface, allowNin: cs.profile.address === '您' });
    if (r.counts.error) c.lint_error_msgs++;
    c.lint_warns += r.counts.warn;
    if (L.visualLen(o.title || '') <= L.SURFACES[surface].title) c.title_ok++;
    lens.push(r.metrics.chars);
  }
  c.median_len = median(lens);
  checks[cond] = c;
}

// ---------- 逐对投票（从评审日志还原） ----------
const votes = {}; // pair -> [{judge, winner, reason, fails:{skill:[],baseline:[]}}]
let recount = null;
if (journalPath) {
  const label = {}, results = {};
  for (const line of readFileSync(journalPath, 'utf8').split('\n').filter(Boolean)) {
    const e = JSON.parse(line);
    if (e.type === 'started') label[e.agentId] = e.label;
    if (e.type === 'result' && e.result && e.result.judgments) results[label[e.agentId]] = e.result.judgments;
  }
  recount = { skill: 0, baseline: 0, tie: 0 };
  for (const j of [0, 1, 2]) {
    const js = results['judge:' + (j + 1)];
    if (!js) continue;
    const key = {};
    for (const run of RUNS) ids.forEach((id, i) => { const flip = (i + run + j) % 2 === 1; key[id + '#' + run] = { X: flip ? 'skill' : 'baseline', Y: flip ? 'baseline' : 'skill' }; });
    for (const g of js) {
      const k = key[g.pair]; if (!k) continue;
      const winner = g.better === 'tie' ? 'tie' : k[g.better];
      recount[winner]++;
      (votes[g.pair] = votes[g.pair] || []).push({ judge: j + 1, winner, reason: g.reason, fails: { [k.X]: g.x_fails || [], [k.Y]: g.y_fails || [] } });
    }
  }
  const t = R.tally;
  if (recount.skill !== t.skill || recount.baseline !== t.baseline || recount.tie !== t.tie) {
    console.error('警告：从日志还原的合计与工作流汇总不一致', recount, t);
  }
}

const out = {
  n_cases: ids.length, runs: RUNS.length, judges: R.judges,
  tally: R.tally, perJudge: (R.perJudge || []).slice().sort((a, b) => a.judge - b.judge), fails: R.fails, dims: DIMS, checks,
  perCase: R.perCase,
  cases: cases.map((cs) => ({
    id: cs.id, about: cs.about, event: cs.event, now: cs.context.now, last: cs.context.user_last_message,
    expect: cs.expect, surface: cs.surface, type: TYPE[cs.id], stakes: cs.goal.stakes, address: cs.profile.address,
    goal: cs.goal.title,
    outputs: Object.fromEntries(CONDS.flatMap((c) => RUNS.map((r) => [c + '-' + r, (R.outputs[c + '-' + r] || {})[cs.id] || null]))),
    reasons: RUNS.flatMap((r) => (votes[cs.id + '#' + r] || []).map((v) => ({ run: r, judge: v.judge, winner: v.winner, reason: v.reason }))),
  })),
  findings: [],
};
// 保留手写的结论段落（重跑脚本时不覆盖）
try { const prev = JSON.parse(readFileSync(path.join(root, 'src', 'data', 'eval.json'), 'utf8')); if (prev.findings && prev.findings.length) out.findings = prev.findings; } catch (e) { /* 第一次生成 */ }
writeFileSync(path.join(root, 'src', 'data', 'eval.json'), JSON.stringify(out, null, 1), 'utf8');

const total = R.tally.skill + R.tally.baseline + R.tally.tie;
console.log(`盲评 ${total} 次：带 Skill ${R.tally.skill}，不带 ${R.tally.baseline}，差不多 ${R.tally.tie}` + (recount ? '（已用日志复核）' : ''));
for (const cond of CONDS) console.log(cond, JSON.stringify(checks[cond]));
console.log('各维度没过的次数', JSON.stringify(R.fails));
const split = cases.map((cs) => { const p = R.perCase[cs.id] || {}; return `${cs.id.slice(0, 3)} S${p.skill || 0}/B${p.baseline || 0}/T${p.tie || 0}`; });
console.log(split.join('  '));
