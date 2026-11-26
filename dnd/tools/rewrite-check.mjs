// Check one rewritten chunk against its source: node tools/rewrite-check.mjs <workDir> <chunk>
import fs from 'node:fs';
import path from 'node:path';
import { BANNED } from './style-lint.mjs';

const [work, chunk] = process.argv.slice(2);
const map = JSON.parse(fs.readFileSync(path.join(work, 'map.json'), 'utf8'));
const inIds = fs.readFileSync(path.join(work, 'in', chunk + '.txt'), 'utf8').split('\n').map((l) => (l.match(/^@(\S+) /) || [])[1]).filter(Boolean);
const outPath = path.join(work, 'out', chunk + '.txt');
if (!fs.existsSync(outPath)) { console.log('FAIL 没有找到 ' + outPath); process.exit(1); }
const out = new Map();
const must = [], note = [];
for (const line of fs.readFileSync(outPath, 'utf8').split('\n')) {
  if (!line.trim() || line.startsWith('#') || line.startsWith('===')) continue;
  const m = line.match(/^@(\S+)\s+(.*)$/);
  if (!m) { must.push(`看不懂这一行（每行要以 @编号 开头，一条只占一行）：${line.slice(0, 40)}`); continue; }
  if (out.has(m[1])) must.push(`@${m[1]} 重复了`);
  out.set(m[1], m[2].trim());
}
const inSet = new Set(inIds);
for (const id of inIds) if (!out.has(id)) must.push(`@${id} 漏了`);
for (const id of out.keys()) if (!inSet.has(id)) must.push(`@${id} 不是这一块的编号`);

const tokens = (s) => { const t = []; for (const m of s.matchAll(/\{([^{}]*)\}/g)) { const x = m[1]; if (x.startsWith('?')) t.push('?' + x.slice(1).split(':')[0].trim()); else if (/^m:.*\|f:/.test(x)) t.push('m|f'); else t.push(x); } return t.sort().join(' '); };
const strip = (s) => s.replace(/\{\?[^:{}]+:([^|{}]*)(?:\|[^{}]*)?\}/g, '$1').replace(/\{m:([^|{}]*)\|f:[^{}]*\}/g, '$1').replace(/\{[^{}]*\}/g, '某某');
const count = (s, re) => (s.match(re) || []).length;
const PART = /[啊呀哪吧嘛呢啦呗哎唉嗨哟喽哇咯呐哩]|可不是|算了|你瞧|我说|要我说|得了|行了|你猜|说实在|好家伙|怎么着/;
let nComma = 0, nEnd = 0, oldLen = 0, newLen = 0, speech = 0, speechPart = 0, rewritten = 0;
let prev = null;
for (const id of inIds) {
  const e = map[id]; const t = out.get(id);
  if (t === undefined) { prev = e; continue; }
  if (t === '∅') {
    if (!e.drop) must.push(`@${id} 不能并掉：只有场景正文里不带条件的旁白可以写 ∅`);
    else if (!prev || prev.scene !== e.scene || !prev.drop || out.get(prev.id) === undefined) must.push(`@${id} 写了 ∅，可上一条不是同一场的普通旁白，没处可并`);
    prev = e; continue;   // a dropped line keeps "prev" pointing at a narration line of the same kind
  }
  prev = e; rewritten++;
  if (!t) { must.push(`@${id} 是空的`); continue; }
  if (tokens(t) !== tokens(e.orig)) must.push(`@${id} 记号和原文对不上：原文 [${tokens(e.orig)}]，现在 [${tokens(t)}]`);
  const rest = t.replace(/\{\?[^:{}]+:[^|{}]*(?:\|[^{}]*)?\}/g, '').replace(/\{m:[^|{}]*\|f:[^{}]*\}/g, '').replace(/\{(pc|ta|race|cls|origin|nation|god|name)\}/g, '');
  if (/[{}]/.test(rest)) must.push(`@${id} 花括号的写法不对`);
  const s = strip(t);
  oldLen += strip(e.orig).length; newLen += s.length;
  for (const [re, label] of BANNED) if (re.test(s)) must.push(`@${id} 用了禁用的套话：${label}`);
  if (/——/.test(s)) must.push(`@${id} 有破折号`);
  if (/；/.test(s)) must.push(`@${id} 有分号`);
  if (e.label) { if (s.length > 44) must.push(`@${id} 选项太长（${s.length} 字，最多 40）`); continue; }
  if (/一句话简介/.test(e.kind)) { if (s.length > 15) must.push(`@${id} 简介超过 15 个字`); continue; }
  const commas = count(s, /，/g), ends = count(s, /[。！？]/g);
  if (e.speech) {
    if (s.length >= 12) { speech++; if (PART.test(s)) speechPart++; }
    if (s.length >= 60 && ends >= 4 && commas / ends < 1.2) note.push(`@${id} 这段台词句号太密（${ends} 个句号，${commas} 个逗号），人说话是一口气往下说的`);
    continue;
  }
  if (s.length >= 50) { nComma += commas; nEnd += ends; }
  if (s.length >= 80 && ends >= 4 && commas / ends < 1.5) must.push(`@${id} 句子太碎（${ends} 个句号，${commas} 个逗号），连起来说`);
  if (s.length >= 30) { const shorts = s.split(/[。！？]/).filter((x) => x.trim() && x.trim().length <= 6).length; if (shorts >= 2) note.push(`@${id} 里有 ${shorts} 个六字以内的短句`); }
  if (/：(?!“)/.test(s)) note.push(`@${id} 旁白里用了冒号（冒号只用来引出别人的话）`);
  if (/没吭声|没说话|没接话|不吭声|没出声/.test(s) && /没吭声|没说话|没接话|不吭声|没出声/.test(e.orig) === false) note.push(`@${id} 新添了“没吭声”一类的节拍`);
}
const ratio = nEnd ? nComma / nEnd : 9;
if (nEnd >= 12 && ratio < 2.8) must.push(`整块叙述里逗号只有句号的 ${ratio.toFixed(1)} 倍，至少要 3 倍：把碎句连起来`);
const sp = speech ? speechPart / speech : 1;
if (speech >= 8 && sp < 0.4) note.push(`台词里带语气词或垫话的只有 ${(100 * sp).toFixed(0)}%，看看是不是有人说话像念稿（喊口令的、皇帝、黑枝亲王这类人除外）`);
const lr = oldLen ? newLen / oldLen : 1;
if (lr > 1.7) note.push(`整块比原文长了 ${(lr).toFixed(2)} 倍，看看有没有注水`);
if (lr < 0.85) note.push(`整块只有原文的 ${(lr).toFixed(2)} 倍，看看有没有丢内容`);
if (must.length) { console.log('必须改：'); for (const x of must.slice(0, 60)) console.log('  ' + x); if (must.length > 60) console.log(`  ……还有 ${must.length - 60} 处`); }
if (note.length) { console.log('留意：'); for (const x of note.slice(0, 40)) console.log('  ' + x); if (note.length > 40) console.log(`  ……还有 ${note.length - 40} 处`); }
console.log(`总结：${rewritten} 条；叙述逗号/句号 = ${ratio.toFixed(1)}；台词带语气词 ${(100 * sp).toFixed(0)}%；长度是原文的 ${lr.toFixed(2)} 倍；必须改 ${must.length} 处，留意 ${note.length} 处`);
console.log(must.length ? 'FAIL' : 'OK');
process.exit(must.length ? 1 : 0);
