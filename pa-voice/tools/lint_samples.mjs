#!/usr/bin/env node
// 把手册自己写的示例话术全部过一遍体检：node tools/lint_samples.mjs [--all]
// 只打印有「必改」或「建议」的条目；加 --all 连「可更好」也打印。
import { createRequire } from 'node:module';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const L = require(path.join(root, 'src', 'lint-core.js'));
const data = (n) => JSON.parse(readFileSync(path.join(root, 'src', 'data', n + '.json'), 'utf8'));
const showAll = process.argv.includes('--all');

const items = [];
const add = (where, m, o) => items.push({ where, m, o });
const fromLine = (text) => {
  const [head, btn] = String(text).split('｜');
  const acts = (btn || '').match(/\[[^\]]+\]/g) || [];
  return { title: '', body: head.replace(/^（[^）]*）/, '').trim(), actions: acts.map((x) => x.slice(1, -1)) };
};

const life = data('lifecycle');
life.states.forEach((s) => s.sample && add('lifecycle/' + s.id + ' ' + s.name, s.sample, { type: s.type, stakes: s.sample.stakes || 'mid', surface: s.type === 'approval' ? 'chat' : 'lock', subject: s.sample.subject }));

const tone = data('tone');
tone.examples.forEach((e, i) => add('tone/' + i + ' ' + JSON.stringify(e.when), e.msg, {
  type: e.when.event === 'bad' ? 'blocked' : e.when.event === 'good' ? (e.when.stakes === 'low' ? 'milestone' : 'done') : e.when.event === 'pa_error' ? 'correction' : (e.when.stakes === 'high' ? 'approval' : e.when.stakes === 'low' ? 'nudge' : 'deadline'),
  stakes: e.when.stakes, surface: 'chat', allowNin: e.when.persona === 'elder', subject: e.msg.subject }));

const presets = data('presets');
add('presets/hero.after', presets.hero.after, presets.hero.options);
add('presets/surfaceDemo', presets.surfaceDemo, { type: 'opportunity', stakes: 'mid', surface: 'chat' });
presets.linter.filter((p) => /改后/.test(p.name)).forEach((p) => add('presets/' + p.name, p, { type: p.type, stakes: p.stakes, surface: p.surface }));

const tree = data('tree');
tree.rules.forEach((r, i) => { if (!/^（不发/.test(r.example)) add('tree/' + i + ' ' + r.out, fromLine(r.example), { type: r.out.startsWith('ask') ? 'approval' : 'done', stakes: 'mid', surface: 'chat' }); });

const humor = data('humor');
humor.levels.forEach((lv, i) => lv.examples.filter((x) => !x.bad).forEach((x, j) => add('humor/H' + i + '.' + j, fromLine(x.text), { type: 'done', stakes: i === 0 ? 'high' : 'low', surface: 'chat' })));

const rules = data('rules');
rules.forEach((r) => r.say && add('rules/' + r.id + '.say', { title: '', body: r.say, actions: [] }, { type: 'progress', stakes: 'low', surface: 'chat', __soft: true }));

data('basecheck').items.forEach((it) => add('basecheck/' + it.name + '.fixed', it.fixed, { type: it.type, stakes: it.stakes, surface: it.surface, subject: it.subject }));

if (existsSync(path.join(root, 'src', 'data', 'scenarios.json'))) {
  data('scenarios').forEach((s) => s.thread.forEach((t, i) => Object.entries(t.variants || {}).forEach(([mood, v]) =>
    add(`scenarios/${s.id}#${i + 1}.${mood}`, v, { type: t.type, stakes: ['approval', 'blocked'].includes(t.type) && s.stakes !== 'low' ? 'high' : s.stakes, surface: t.surface || 'lock', allowNin: s.address === '您', subject: t.subject || s.subject }))));
}

let bad = 0, total = 0;
for (const it of items) {
  total++;
  const r = L.lint(it.m, it.o);
  let fs = r.findings.filter((f) => showAll || f.level !== 'info');
  if (it.o.__soft) fs = fs.filter((f) => !['LEN', 'ANCHOR', 'BUTTON', 'DEFAULT', 'OPENQ', 'CLAUSE', 'BASELINE'].includes(f.rule));
  if (!fs.length) continue;
  bad++;
  console.log(`\n${it.where}  【${r.verdictText}】`);
  console.log('  ' + [it.m.title, it.m.body].filter(Boolean).join(' ｜ ') + ((it.m.actions || []).length ? '  [' + it.m.actions.join('] [') + ']' : ''));
  fs.forEach((f) => console.log(`  - ${f.level} ${f.rule}: ${f.msg}`));
}
console.log(`\n${total} 条示例，${bad} 条有问题`);
