// Put rewritten text back into a campaign: node tools/rewrite-apply.mjs <scenarioId> <workDir> [chunk ...]
// Only chunks that pass rewrite-check are applied. Files are re-written as plain data (JSON syntax).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const [id, work, ...only] = process.argv.slice(2);
const dir = path.resolve('js/data/scenarios', id);
const map = JSON.parse(fs.readFileSync(path.join(work, 'map.json'), 'utf8'));
const chunks = JSON.parse(fs.readFileSync(path.join(work, 'chunks.json'), 'utf8')).map((c) => c.name).filter((n) => !only.length || only.includes(n));
const text = new Map();
const applied = [], skipped = [];
for (const name of chunks) {
  const f = path.join(work, 'out', name + '.txt');
  if (!fs.existsSync(f)) { skipped.push(name + '（没有交回）'); continue; }
  try { execFileSync('node', ['tools/rewrite-check.mjs', work, name], { stdio: 'pipe' }); } catch (e) { skipped.push(name + '（检查没过）'); continue; }
  for (const line of fs.readFileSync(f, 'utf8').split('\n')) { const m = line.match(/^@(\S+)\s+(.*)$/); if (m) text.set(m[1], m[2].trim()); }
  applied.push(name);
}
const byFile = {};
for (const [eid, t] of text) { const e = map[eid]; if (e) (byFile[e.file] = byFile[e.file] || []).push([e, t]); }
const clone = (v) => JSON.parse(JSON.stringify(v));
for (const [file, list] of Object.entries(byFile)) {
  const mod = await import(pathToFileURL(path.join(dir, file)).href + '?t=' + process.hrtime.bigint());
  const exp = list[0][0].exp;
  const data = clone(mod[exp]);
  const get = (p) => p.reduce((o, k) => (o == null ? o : o[k]), data);
  const drops = [];
  for (const [e, t] of list) {
    const parent = get(e.path.slice(0, -1)); const key = e.path[e.path.length - 1];
    if (parent == null || parent[key] !== e.orig) { console.log(`  跳过 ${e.id}：原文已经变了`); continue; }
    if (t === '∅') drops.push(e.path); else parent[key] = t;
  }
  drops.sort((a, b) => b[b.length - 1] - a[a.length - 1]);
  for (const p of drops) { const arr = get(p.slice(0, -1)); if (Array.isArray(arr)) arr.splice(p[p.length - 1], 1); }
  const head = `// ${id} / ${file}：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。\n`;
  fs.writeFileSync(path.join(dir, file), `${head}export const ${exp} = ${JSON.stringify(data, null, 1)};\n`);
  console.log(`  ${file}: ${list.length} 条`);
}
console.log(`写回 ${applied.length} 块：${applied.join(' ')}`);
if (skipped.length) console.log(`没写回：${skipped.join('、')}`);
