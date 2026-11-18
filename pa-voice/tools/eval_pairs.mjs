#!/usr/bin/env node
// Skill 盲评的三步辅助：准备输入、配对、汇总。提示词和整套办法见 skill/pa-voice-zh/evals/prompts.md。
//
//   node tools/eval_pairs.mjs input    --cases <cases.json> --out <目录>
//   node tools/eval_pairs.mjs pairs    --dir <目录>
//   node tools/eval_pairs.mjs assemble --dir <目录> --out <result.json>
//
// 目录里的约定：
//   cases.input.json、cases.a.json、cases.b.json      给写的一方和评审看的情境（没有预期）
//   <baseline|skill>-<1|2>.<a|b>.json                 四组生成结果，{ outputs: [{id, send, title, body, detail?, actions, note}] }
//   pairs/<full|lock>.j<1-3>.<a|b>.json               评审要读的成对候选
//   keys/…                                            对照表：每一对里 X、Y 各是哪一边（不给评审看）
//   judged/<full|lock>.j<1-3>.<a|b>.json              评审交回的 { judgments: [{pair, better, x_fails, y_fails, reason}] }
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const L = require(path.join(root, 'src', 'lint-core.js'));

const argv = process.argv.slice(2);
const cmd = argv.shift();
const opt = (name, dflt) => { const i = argv.indexOf('--' + name); return i === -1 ? dflt : argv[i + 1]; };
const readJSON = (f) => JSON.parse(readFileSync(f, 'utf8'));
const writeJSON = (f, o) => writeFileSync(f, JSON.stringify(o, null, 1), 'utf8');
const ARMS = ['baseline', 'skill'], RUNS = [1, 2], CHUNKS = ['a', 'b'], VIEWS = ['full', 'lock'], JUDGES = [1, 2, 3];

if (cmd === 'input') {
  const cases = readJSON(opt('cases', path.join(root, 'skill', 'pa-voice-zh', 'evals', 'cases.json')));
  const out = opt('out');
  if (!out) usage();
  mkdirSync(out, { recursive: true });
  // 只留情境本身；about 里说明「考什么」的半句去掉，免得两边都被提醒
  const input = cases.map((c) => ({
    id: c.id,
    about: String(c.about || '').split('；').filter((s) => !/故意|看是否|看它会不会/.test(s)).join('；'),
    goal: c.goal, event: c.event, facts: c.facts, context: c.context, profile: c.profile, surface: c.surface,
  }));
  writeJSON(path.join(out, 'cases.input.json'), input);
  // 交错拆成两块，让每块里新旧用例都有
  CHUNKS.forEach((ch, k) => writeJSON(path.join(out, `cases.${ch}.json`), input.filter((_, i) => i % 2 === k)));
  console.log(`写了 ${input.length} 个情境到 ${out}（两块各 ${Math.ceil(input.length / 2)}、${Math.floor(input.length / 2)} 个）`);
} else if (cmd === 'pairs') {
  const dir = opt('dir');
  if (!dir) usage();
  const cases = readJSON(path.join(dir, 'cases.input.json'));
  const chunkOf = {};
  for (const ch of CHUNKS) for (const c of readJSON(path.join(dir, `cases.${ch}.json`))) chunkOf[c.id] = ch;
  const byKey = {}, problems = [];
  for (const arm of ARMS) for (const run of RUNS) {
    const k = `${arm}-${run}`;
    byKey[k] = {};
    for (const ch of CHUNKS) {
      const f = path.join(dir, `${k}.${ch}.json`);
      if (!existsSync(f)) { problems.push('缺文件 ' + f); continue; }
      for (const x of readJSON(f).outputs || []) byKey[k][x.id] = x;
    }
    const miss = cases.filter((c) => !byKey[k][c.id]).map((c) => c.id);
    if (miss.length) problems.push(`${k} 缺 ${miss.length} 条：${miss.join(', ')}`);
  }
  if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
  writeJSON(path.join(dir, 'outputs.json'), byKey);

  // 这个位置上显示得出来的部分：锁屏按硬上限截（标题 20、正文 50 字宽），按钮不显示；对话按 24 / 120，按钮可见
  const shown = (o, surface) => {
    if (!((o.title || '') + (o.body || '')).trim()) return { send: o.send, title: '', body: '' };
    const s = L.SURFACES[surface === 'chat' ? 'chat' : 'lock'];
    const cut = (text, budget) => { const t = L.truncate(text || '', budget); return t.cut ? t.shown + '…' : t.shown; };
    const r = { send: o.send, title: cut(o.title, s.titleHard), body: cut(o.body, s.bodyHard) };
    if (surface === 'chat') r.actions = o.actions || [];
    return r;
  };
  // 完整视图：标题、正文、按钮，以及展开后才显示的那一层（有才带）
  const full = (o) => {
    const r = { send: o.send, title: o.title || '', body: o.body || '', actions: o.actions || [] };
    if ((o.detail || '').trim()) r.detail = o.detail;
    return r;
  };
  mkdirSync(path.join(dir, 'pairs'), { recursive: true });
  mkdirSync(path.join(dir, 'keys'), { recursive: true });
  let n = 0;
  for (const view of VIEWS) for (const j of JUDGES) {
    const pairs = { a: [], b: [] }, key = { a: [], b: [] };
    for (const run of RUNS) cases.forEach((c, i) => {
      const b = byKey['baseline-' + run][c.id], s = byKey['skill-' + run][c.id];
      // 左右顺序按（情境序号 + 第几遍 + 评审序号）的奇偶打乱；锁屏视图再错开一位
      const flip = (i + run + (j - 1) + (view === 'lock' ? 1 : 0)) % 2 === 1;
      const f = view === 'full' ? full : (o) => shown(o, c.surface);
      const ch = chunkOf[c.id];
      pairs[ch].push({ pair: c.id + '#' + run, case_id: c.id, surface: c.surface, X: f(flip ? s : b), Y: f(flip ? b : s) });
      key[ch].push({ pair: c.id + '#' + run, X: flip ? 'skill' : 'baseline', Y: flip ? 'baseline' : 'skill' });
    });
    for (const ch of CHUNKS) {
      writeJSON(path.join(dir, 'pairs', `${view}.j${j}.${ch}.json`), pairs[ch]);
      writeJSON(path.join(dir, 'keys', `${view}.j${j}.${ch}.json`), key[ch]);
      n += pairs[ch].length;
    }
  }
  console.log(`配对完成：${n} 对（${VIEWS.length} 种视图 × ${JUDGES.length} 位评审 × ${RUNS.length} 遍 × ${cases.length} 个情境）`);
} else if (cmd === 'assemble') {
  const dir = opt('dir'), out = opt('out');
  if (!dir || !out) usage();
  const problems = [];
  const collect = (view) => {
    const votes = [];
    for (const j of JUDGES) for (const ch of CHUNKS) {
      const jf = path.join(dir, 'judged', `${view}.j${j}.${ch}.json`);
      if (!existsSync(jf)) { problems.push('评审没交卷：' + jf); continue; }
      const key = Object.fromEntries(readJSON(path.join(dir, 'keys', `${view}.j${j}.${ch}.json`)).map((k) => [k.pair, k]));
      const seen = new Set();
      for (const g of readJSON(jf).judgments || []) {
        const m = key[g.pair];
        if (!m) { problems.push(`${view} j${j}${ch}：不认识的 pair ${g.pair}`); continue; }
        if (seen.has(g.pair)) { problems.push(`${view} j${j}${ch}：重复判了 ${g.pair}`); continue; }
        seen.add(g.pair);
        votes.push({ pair: g.pair, judge: j, winner: g.better === 'tie' ? 'tie' : m[g.better], reason: g.reason,
          xy: { X: m.X, Y: m.Y }, fails: { [m.X]: g.x_fails || [], [m.Y]: g.y_fails || [] } });
      }
      const miss = Object.keys(key).filter((p) => !seen.has(p));
      if (miss.length) problems.push(`${view} j${j}${ch}：漏判 ${miss.length} 对（${miss.slice(0, 4).join(', ')}…）`);
    }
    return votes;
  };
  const tally = (votes) => votes.reduce((t, v) => { t[v.winner]++; return t; }, { skill: 0, baseline: 0, tie: 0 });
  const fullVotes = collect('full');
  const hasLock = existsSync(path.join(dir, 'judged', 'lock.j1.a.json'));
  const lockVotes = hasLock ? collect('lock') : null;
  const outputs = readJSON(path.join(dir, 'outputs.json'));
  const result = { model: opt('model', ''), n_cases: Object.keys(outputs['baseline-1']).length, judges: JUDGES.length,
    tally: tally(fullVotes), votes: fullVotes, outputs };
  if (lockVotes) result.lock = { votes: lockVotes, tally: tally(lockVotes) };
  writeJSON(out, { result });
  console.log('完整文字：' + fullVotes.length + ' 票 ' + JSON.stringify(result.tally));
  if (lockVotes) console.log('只看显示得出来的部分：' + lockVotes.length + ' 票 ' + JSON.stringify(result.lock.tally));
  if (problems.length) { console.error(problems.map((p) => '注意 ' + p).join('\n')); process.exit(1); }
} else usage();

function usage() {
  console.error('用法：\n  node tools/eval_pairs.mjs input    --cases <cases.json> --out <目录>\n  node tools/eval_pairs.mjs pairs    --dir <目录>\n  node tools/eval_pairs.mjs assemble --dir <目录> --out <result.json>');
  process.exit(2);
}
