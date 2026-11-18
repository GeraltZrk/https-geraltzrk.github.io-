#!/usr/bin/env node
// 把一轮 Skill 评测的原始结果整理进页面用的 src/data/eval.json（按轮次存放，可多轮并存）。
//
// 用法：node tools/build_eval.mjs --round v1.0 --label "第一轮 · Skill 1.0" --cases <这一轮用的用例.json> <评测结果.json>
//
// 评测结果.json：{ result: { tally, perJudge, fails, perCase, votes: [{pair, judge, winner, reason}],
//                          outputs: { 'baseline-1': {id: 输出}, 'skill-1': …, 'baseline-2': …, 'skill-2': … } } }
// 用例文件里每条可以带 "held_out": true，表示改规范时没有看过这条用例的评审意见；汇总时会单独算一栏。
// 用例带 "added"（第一次用它测的是哪一版规范）时，再按批次各算一栏。
// 评测结果里带 lock: { votes: […] } 时（评审只看到这个位置上显示得出来的部分），另算一份「锁屏视图」。
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

// ---------- 评审理由里的 X、Y 换回对应的一方 ----------
// 评审看到的是打乱后的 X 和 Y，理由里也这么叫。页面上要让读的人对得上，所以换成「带 Skill 的」「不带的」。
// 投票里带了 xy（哪边是哪个）就用它；前两轮没存，按当时的打乱规则算回来：第 i 个情境、第 run 遍、第 j 位评审，(i + run + j - 1) 为奇数时 X 是带 Skill 的。
const order = Object.keys((R.outputs || {})['baseline-1'] || {});
function sideOf(v) {
  if (v.xy) return v.xy;
  const [id, run] = v.pair.split('#');
  const flip = (order.indexOf(id) + Number(run) + (v.judge - 1)) % 2 === 1;
  return { X: flip ? 'skill' : 'baseline', Y: flip ? 'baseline' : 'skill' };
}
const SIDE = { skill: '带 Skill 的', baseline: '不带的' };
function plain(v) {
  const m = sideOf(v);
  return String(v.reason || '').replace(/(?<![A-Za-z])([XY])(?![A-Za-z])\s*的?\s*/g, (_, k) => SIDE[m[k]]);
}
// 自查：理由以 X 或 Y 开头、又分出了胜负的，开头那一方多半就是胜方。对不上的比例高，说明换回的对应关系有问题。
{
  let n = 0, agree = 0;
  for (const v of [...(R.votes || []), ...((R.lock && R.lock.votes) || [])]) {
    const m = /^\s*([XY])(?![A-Za-z])/.exec(v.reason || '');
    if (!m || v.winner === 'tie') continue;
    n++; if (sideOf(v)[m[1]] === v.winner) agree++;
  }
  if (n) console.log(`理由开头的一方与胜方一致：${agree} / ${n}`);
}

// ---------- 逐对投票 ----------
const votes = {};
for (const v of R.votes || []) (votes[v.pair] = votes[v.pair] || []).push(v);

// ---------- 汇总（全部 / 没见过的用例 / 见过的用例） ----------
// 一个情境有 6 票（2 遍 × 3 位评审），这 6 票不独立。所以另按情境算一次：哪边票多就算哪边占优，再做符号检验（双侧）。
function byCase(subset, voteList) {
  const net = {};
  for (const c of subset) net[c.id] = 0;
  for (const v of voteList || []) {
    const id = v.pair.split('#')[0];
    if (!(id in net)) continue;
    net[id] += v.winner === 'skill' ? 1 : v.winner === 'baseline' ? -1 : 0;
  }
  const r = { skill: 0, baseline: 0, even: 0 };
  for (const d of Object.values(net)) r[d > 0 ? 'skill' : d < 0 ? 'baseline' : 'even']++;
  const n = r.skill + r.baseline, k = Math.min(r.skill, r.baseline);
  let p = 0, c = 1; // 二项分布 B(n, 0.5) 的双侧尾概率
  for (let i = 0; i <= k; i++) { p += c; c = c * (n - i) / (i + 1); }
  r.p = n ? Math.min(1, Math.round(p / Math.pow(2, n) * 2 * 1000) / 1000) : 1;
  return r;
}
function tallyVotes(subset, voteList) {
  const idset = new Set(subset.map((c) => c.id));
  const tally = { skill: 0, baseline: 0, tie: 0 }, perJudge = {}, fails = { skill: {}, baseline: {} };
  for (const v of voteList || []) {
    if (!idset.has(v.pair.split('#')[0])) continue;
    tally[v.winner]++;
    const pj = (perJudge[v.judge] = perJudge[v.judge] || { judge: v.judge, skill: 0, baseline: 0, tie: 0 });
    pj[v.winner]++;
    for (const cond of CONDS) for (const d of (v.fails && v.fails[cond]) || []) fails[cond][d] = (fails[cond][d] || 0) + 1;
  }
  return { n_cases: subset.length, tally, byCase: byCase(subset, voteList), perJudge: Object.values(perJudge).sort((a, b) => a.judge - b.judge), fails };
}
function summarize(subset) {
  const { tally, perJudge: pjList, fails } = tallyVotes(subset, R.votes);
  const perJudge = Object.fromEntries(pjList.map((j) => [j.judge, j]));
  const checks = {};
  for (const cond of CONDS) {
    const c = { send_ok: 0, send_total: 0, include_ok: 0, include_total: 0, must_not_hits: 0, lint_error_msgs: 0, lint_warns: 0, title_ok: 0, sent: 0, median_len: 0, detail_used: 0, median_len_all: 0 };
    const lensAll = [];
    const lens = [];
    for (const run of RUNS) for (const cs of subset) {
      const o = (R.outputs[cond + '-' + run] || {})[cs.id];
      c.send_total++;
      if (!o) continue;
      if (cs.expect.send.includes(o.send)) c.send_ok++;
      const text = (o.title || '') + (o.body || '');
      if (!text.trim()) continue;
      c.sent++;
      const detail = (o.detail || '').trim();
      if (detail) c.detail_used++;
      const all = text + detail + (o.actions || []).join('');
      // 该出现的数字：锁屏层或展开层里有就算
      if ((cs.expect.must_include || []).length) { c.include_total++; if (cs.expect.must_include.every((w) => (text + detail).includes(w))) c.include_ok++; }
      if ((cs.expect.must_not || []).some((w) => all.includes(w))) c.must_not_hits++;
      const surface = cs.surface === 'chat' ? 'chat' : 'lock';
      const r = L.lint({ title: o.title || '', body: o.body || '', detail, actions: o.actions || [] }, { type: typeOf(cs), stakes: cs.goal.stakes, surface, allowNin: cs.profile.address === '您' });
      if (r.counts.error) c.lint_error_msgs++;
      c.lint_warns += r.counts.warn;
      if (L.visualLen(o.title || '') <= L.SURFACES[surface].title) c.title_ok++;
      lens.push(r.metrics.chars);
      lensAll.push(r.metrics.chars + L.visualLen(detail));
    }
    c.median_len = median(lens);
    c.median_len_all = median(lensAll);
    checks[cond] = c;
  }
  return { n_cases: subset.length, tally, byCase: byCase(subset, R.votes), perJudge: Object.values(perJudge).sort((a, b) => a.judge - b.judge), fails, checks };
}

const all = summarize(cases);
const held = cases.filter((c) => c.held_out);
const batches = [...new Set(cases.map((c) => c.added).filter(Boolean))].sort();
const lockVotes = (R.lock && R.lock.votes) || null;
const lockByPair = {};
for (const v of lockVotes || []) (lockByPair[v.pair] = lockByPair[v.pair] || []).push(v);
// 这个位置上显示不全的输出有几条（锁屏按硬上限：标题 20、正文 50 字宽；对话 24 / 120）
function cutCount(subset) {
  const n = { skill: 0, baseline: 0, total: 0 };
  for (const cs of subset) for (const run of RUNS) {
    n.total++;
    for (const cond of CONDS) {
      const o = (R.outputs[cond + '-' + run] || {})[cs.id];
      if (!o || !((o.title || '') + (o.body || '')).trim()) continue;
      const s = L.SURFACES[cs.surface === 'chat' ? 'chat' : 'lock'];
      if (L.visualLen(o.title || '') > s.titleHard || L.visualLen(o.body || '') > s.bodyHard) n[cond]++;
    }
  }
  return n;
}
const out = {
  id: round, label, note, model: R.model || '', n_cases: cases.length, runs: RUNS.length, judges: R.judges || 3,
  ...all,
  held_out: held.length ? summarize(held) : null,
  seen: held.length ? summarize(cases.filter((c) => !c.held_out)) : null,
  groups: batches.length > 1 ? batches.map((b) => ({ added: b, ...summarize(cases.filter((c) => c.added === b)) })) : null,
  lock: lockVotes ? {
    ...tallyVotes(cases, lockVotes), cut: cutCount(cases),
    held_out: held.length ? tallyVotes(held, lockVotes) : null,
    seen: held.length ? tallyVotes(cases.filter((c) => !c.held_out), lockVotes) : null,
    groups: batches.length > 1 ? batches.map((b) => ({ added: b, ...tallyVotes(cases.filter((c) => c.added === b), lockVotes) })) : null,
  } : null,
  cases: cases.map((cs) => {
    const pc = { skill: 0, baseline: 0, tie: 0 };
    for (const r of RUNS) for (const v of votes[cs.id + '#' + r] || []) pc[v.winner]++;
    return {
      id: cs.id, about: cs.about, event: cs.event, now: cs.context.now, last: cs.context.user_last_message,
      expect: cs.expect, surface: cs.surface, type: typeOf(cs), stakes: cs.goal.stakes, address: cs.profile.address, goal: cs.goal.title,
      held_out: !!cs.held_out, added: cs.added || null, votes: pc,
      lock: lockVotes ? (() => {
        const lv = { skill: 0, baseline: 0, tie: 0 };
        for (const r of RUNS) for (const v of lockByPair[cs.id + '#' + r] || []) lv[v.winner]++;
        return { votes: lv, reasons: RUNS.flatMap((r) => (lockByPair[cs.id + '#' + r] || []).map((v) => ({ run: r, judge: v.judge, winner: v.winner, reason: plain(v) }))) };
      })() : null,
      outputs: Object.fromEntries(CONDS.flatMap((c) => RUNS.map((r) => [c + '-' + r, (R.outputs[c + '-' + r] || {})[cs.id] || null]))),
      reasons: RUNS.flatMap((r) => (votes[cs.id + '#' + r] || []).map((v) => ({ run: r, judge: v.judge, winner: v.winner, reason: plain(v) }))),
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
  console.log(`${name}（${s.n_cases} 条用例，${n} 次盲评）：带 Skill ${t.skill}，不带 ${t.baseline}，差不多 ${t.tie}；按情境 ${s.byCase.skill} / ${s.byCase.baseline} / ${s.byCase.even}（p≈${s.byCase.p}）`);
  for (const cond of CONDS) console.log('  ' + cond, JSON.stringify(s.checks[cond]));
  console.log('  各维度没过', JSON.stringify(s.fails));
};
console.log(`轮次 ${round}（${label}）`);
show('全部', all);
if (out.held_out) { show('没见过的用例', out.held_out); show('见过的用例', out.seen); }
if (out.groups) for (const g of out.groups) show('第一次用来测 ' + g.added + ' 的那一批', g);
if (out.lock) {
  const lt = (s) => `带 Skill ${s.tally.skill}，不带 ${s.tally.baseline}，差不多 ${s.tally.tie}；按情境 ${s.byCase.skill} / ${s.byCase.baseline} / ${s.byCase.even}（p≈${s.byCase.p}）`;
  console.log('锁屏视图 全部：' + lt(out.lock) + '；显示不全的输出 ' + JSON.stringify(out.lock.cut));
  if (out.lock.held_out) console.log('锁屏视图 没见过的：' + lt(out.lock.held_out) + '；见过的：' + lt(out.lock.seen));
}
console.log(out.cases.map((c) => `${c.id.slice(0, 3)}${c.held_out ? '*' : ''} S${c.votes.skill}/B${c.votes.baseline}/T${c.votes.tie}`).join('  '));
