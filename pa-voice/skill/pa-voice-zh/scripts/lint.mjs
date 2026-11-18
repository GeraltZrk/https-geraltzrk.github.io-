#!/usr/bin/env node
/**
 * PA 话术体检（命令行）
 *
 * 用法：
 *   node lint.mjs message.json            检查一条或一组消息
 *   cat message.json | node lint.mjs      从标准输入读
 *   node lint.mjs message.json --json     输出 JSON（给程序读）
 *
 * 输入可以是 assets/message.schema.json 定义的消息对象，也可以是它们的数组。
 * 只做规则检查（字数、锚点位置、禁用说法、按钮、红线）。语气是否得体需要人或模型另判。
 * 退出码：0 = 没有必改项；1 = 有必改项；2 = 输入有误。
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const L = require('./lint-core.cjs');

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const file = args.find((a) => !a.startsWith('--'));

let raw;
try {
  raw = file ? readFileSync(file, 'utf8') : readFileSync(0, 'utf8');
} catch (e) {
  console.error('读不到输入：' + e.message);
  process.exit(2);
}

let data;
try {
  data = JSON.parse(raw);
} catch (e) {
  console.error('输入不是合法的 JSON：' + e.message);
  process.exit(2);
}

const STAKES = { low: 'low', mid: 'mid', medium: 'mid', high: 'high' };
// 把完整的消息对象拍平成体检需要的字段
function normalize(m) {
  const copy = m.copy || {};
  const goal = m.goal || {};
  const title = m.title ?? copy.title ?? '';
  const body = m.body ?? copy.body ?? '';
  const facts = Array.isArray(m.facts) ? m.facts : null;
  return {
    msg: {
      title,
      body,
      actions: (m.actions || []).map((a) => (typeof a === 'string' ? a : a.label)).filter(Boolean),
    },
    options: {
      type: m.type || 'opportunity',
      stakes: STAKES[m.stakes || goal.stakes] || 'mid',
      surface: m.surface || 'lock',
      allowNin: !!(m.profile && m.profile.address === '您') || m.address === '您',
    },
    id: m.id || goal.id || '',
    skip: m.decision && ['none', 'digest', 'hold'].includes(m.decision.send) && !title && !body,
    // 文案里的每个数字都应该能在 facts 里找到
    unmatched: facts
      ? [...new Set((title + ' ' + body).match(/\d[\d,]*(?:\.\d+)?/g) || [])].filter((n) => {
          const hay = JSON.stringify(facts).replace(/,/g, '');
          return !hay.includes(n.replace(/,/g, ''));
        })
      : [],
  };
}

const items = (Array.isArray(data) ? data : [data]).map(normalize);
const results = items.map((it) => {
  if (it.skip) return { id: it.id, message: it.msg, metrics: { chars: 0, readSeconds: 0 }, findings: [], counts: { error: 0, warn: 0, info: 0 }, verdict: 'send', verdictText: '不发（合法输出）' };
  const r = { id: it.id, ...L.lint(it.msg, it.options) };
  for (const n of it.unmatched) {
    r.findings.push({ rule: 'FACTS', level: 'error', field: 'body', index: -1, text: n, msg: `数字「${n}」在 facts 里找不到`, fix: '只写 facts 里有的数字；缺了就列进 missing' });
    r.counts.error++;
  }
  if (r.counts.error) { r.verdict = 'block'; r.verdictText = '别发'; }
  return r;
});

if (asJson) {
  console.log(JSON.stringify(results, null, 2));
} else {
  const label = { error: '必改', warn: '建议', info: '可更好' };
  results.forEach((r, i) => {
    const m = r.message;
    console.log(`\n#${i + 1}${r.id ? ' ' + r.id : ''}  【${r.verdictText}】  ${r.metrics.chars} 字 · 约 ${r.metrics.readSeconds} 秒读完`);
    console.log('  ' + [m.title, m.body].filter(Boolean).join(' ｜ ') + (m.actions.length ? '  [' + m.actions.join('] [') + ']' : ''));
    for (const f of r.findings) console.log(`  - ${label[f.level]}（${f.rule}）${f.msg}${f.fix ? ' → ' + f.fix : ''}`);
    if (!r.findings.length) console.log('  - 规则检查全部通过');
  });
  const blocked = results.filter((r) => r.counts.error).length;
  console.log(`\n共 ${results.length} 条，${blocked} 条有必改项。`);
}

process.exit(results.some((r) => r.counts.error) ? 1 : 0);
