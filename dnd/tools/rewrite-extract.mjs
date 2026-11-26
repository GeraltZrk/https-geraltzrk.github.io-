// Pull every piece of story text out of one campaign so it can be rewritten without touching structure.
//   node tools/rewrite-extract.mjs <scenarioId> <workDir> [--chunk=9000] [--survey]
// Writes <workDir>/map.json (id -> where the string lives), <workDir>/in/<chunk>.txt (numbered text for the writer)
// and <workDir>/chunks.json. Nothing in the campaign is changed.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [id, work] = process.argv.slice(2);
const CHUNK = parseInt((process.argv.find((a) => a.startsWith('--chunk=')) || '--chunk=9000').split('=')[1], 10);
const SURVEY = process.argv.includes('--survey');
const COMPACT = process.argv.includes('--compact');   // short tags, no repeated lines: for reading the whole thing through
const bibleText = fs.existsSync(path.resolve('js/data/scenarios', id, 'BIBLE.md')) ? fs.readFileSync(path.resolve('js/data/scenarios', id, 'BIBLE.md'), 'utf8').split('\n') : [];
function brief(sid) {
  const i = bibleText.findIndex((l) => l.includes('`' + sid + '｜') || l.includes('`' + sid + '`｜') || l.includes('`' + sid + '` ｜'));
  if (i < 0) return '';
  const out = [];
  for (let j = i + 1; j < bibleText.length && out.join('').length < 380; j++) { const l = bibleText[j].trim(); if (!l) { if (out.length) break; continue; } if (/^[`*#]/.test(l) && /｜/.test(l)) break; out.push(l.replace(/\*\*/g, '')); }
  return out.join(' ').slice(0, 380);
}
const short = (kind) => kind.replace(/^选项/, 'O').replace(/战斗里的特殊行动「([^」]*)」的说明/, 'X说明「$1」').replace(/^「([^」]*)」成功/, 'X成「$1」').replace(/^「([^」]*)」失败/, 'X败「$1」').replace(/战斗开场/, '开战').replace(/结果·/, 'R·').replace(/成功·/, '成·').replace(/失败·/, '败·').replace(/打赢·/, '赢·').replace(/打输·/, '输·').replace(/旁白/, 'N').replace(/台词·/, 'S:').replace(/ \[if /g, ' ?[');
const dir = path.resolve('js/data/scenarios', id);
const imp = async (f) => import(pathToFileURL(path.join(dir, f)).href);
const hasCJK = (s) => /[一-鿿]/.test(s);

const SCENE_TEXT = new Set(['text', 'result', 'intro', 'desc', 'blurb']);
const entries = [];   // { id, file, exp, path, kind, orig, scene, drop }
let n = 0;
const push = (file, exp, code, p, kind, orig, extra = {}) => { entries.push({ id: `${code}:${++n}`, file, exp, path: p, kind, orig, ...extra }); };

function walkScene(file, code, node, p, ctx) {
  if (Array.isArray(node)) { node.forEach((v, i) => walkScene(file, code, v, [...p, i], ctx)); return; }
  if (!node || typeof node !== 'object') return;
  const here = { ...ctx, speaker: typeof node.speaker === 'string' ? node.speaker : null, cond: typeof node.if === 'string' ? node.if : null };
  for (const [k, v] of Object.entries(node)) {
    const kp = [...p, k];
    if (SCENE_TEXT.has(k)) { emit(file, code, v, kp, here, k, node); continue; }
    if (!v || typeof v !== 'object') continue;
    const next = { prefix: ctx.prefix, special: ctx.special };
    if (k === 'ok' || k === 'success') next.prefix = '成功';
    else if (k === 'fail') next.prefix = '失败';
    else if (k === 'win') next.prefix = '打赢';
    else if (k === 'lose') next.prefix = '打输';
    if (k === 'specials' && Array.isArray(v)) { v.forEach((sp, i) => walkScene(file, code, sp, [...kp, i], { ...next, special: sp && sp.name })); continue; }
    walkScene(file, code, v, kp, next);
  }
}
function emit(file, code, v, p, here, key, owner) {
  const sceneId = p[0];
  const one = (s, sp, isArrayItem) => {
    if (!hasCJK(s)) return;
    const isChoiceLabel = key === 'text' && typeof sp[sp.length - 2] === 'number' && sp[sp.length - 3] === 'choices';
    let kind;
    if (isChoiceLabel) kind = '选项' + (owner.tag ? `〈${owner.tag}〉` : '') + (owner.check ? `·检定${owner.check.skill || ''}` : '') + (here.cond ? ` [if ${here.cond}]` : '');
    else {
      const who = here.speaker ? `台词·${here.speaker}` : '旁白';
      let lead = here.prefix || (key === 'result' ? '结果' : '');
      if (key === 'intro') lead = '战斗开场'; if (key === 'blurb') lead = '商店介绍';
      if (key === 'desc') lead = here.special ? `战斗里的特殊行动「${here.special}」的说明` : '说明';
      else if (here.special) lead = `「${here.special}」${here.prefix || ''}`;
      kind = (lead ? lead + '·' : '') + who + (here.cond && key === 'text' ? ` [if ${here.cond}]` : '');
    }
    const drop = !isChoiceLabel && sp.length === 3 && sp[1] === 'text' && typeof sp[2] === 'number' && isArrayItem;
    push(file, 'SCENES', code, sp, kind, s, { scene: sceneId, label: isChoiceLabel, speech: !!here.speaker && !isChoiceLabel, drop });
  };
  if (typeof v === 'string') return one(v, p, false);
  if (Array.isArray(v)) { v.forEach((x, i) => { if (typeof x === 'string') one(x, [...p, i], true); else walkScene(file, code, x, [...p, i], { prefix: here.prefix || (key === 'result' ? '结果' : ''), special: here.special }); }); return; }
  if (v && typeof v === 'object') walkScene(file, code, v, p, { prefix: here.prefix || (key === 'result' ? '结果' : ''), special: here.special });
}

// ---- scenes ----
const plan = JSON.parse(fs.readFileSync(path.join(dir, 'plan.json'), 'utf8'));
const parts = Object.keys(plan.parts);
const sceneInfo = {};
for (const f of parts) {
  const code = f.replace('.js', '').replace('prologues_', 'p').replace('act', 'a').replace('finale', 'f');
  const { SCENES } = await imp(f);
  for (const [sid, sc] of Object.entries(SCENES)) { sceneInfo[sid] = { file: f, title: sc.title || '', loc: sc.loc || '', date: sc.date || '' }; walkScene(f, code, sc, [sid], {}); }
}
// ---- meta, codex, enemies, items ----
const META_TEXT = new Set(['intro', 'desc', 'blurb', 'bio', 'motto', 'text', 'stages', 'doneText', 'short', 'join', 'leave', 'summary', 'epitaph', 'quote']);
const survey = {};
function walkPlain(file, exp, code, node, p, groupOf) {
  if (Array.isArray(node)) { node.forEach((v, i) => walkPlain(file, exp, code, v, [...p, i], groupOf)); return; }
  if (!node || typeof node !== 'object') return;
  for (const [k, v] of Object.entries(node)) {
    const kp = [...p, k];
    const strs = typeof v === 'string' ? [[v, kp]] : (Array.isArray(v) && v.every((x) => typeof x === 'string')) ? v.map((x, i) => [x, [...kp, i]]) : null;
    if (strs) {
      for (const [s, sp] of strs) {
        if (!hasCJK(s)) continue;
        const key = `${exp}.${p.filter((x) => typeof x !== 'number' && !/^[a-z0-9_]+$/.test(String(x)) ? true : false).join('.')}.${k}`;
        survey[`${exp}:${k}`] = (survey[`${exp}:${k}`] || 0) + s.length;
        if (META_TEXT.has(k) && s.length >= 8) push(file, exp, code, sp, groupOf(kp, node), s, { plain: true, owner: node.title || node.name || '' });
      }
      continue;
    }
    if (v && typeof v === 'object') walkPlain(file, exp, code, v, kp, groupOf);
  }
}
const { META } = await imp('meta.js');
walkPlain('meta.js', 'META', 'm', META, [], (kp, node) => {
  const top = kp[0]; const who = node.title || node.name || '';
  const names = { intro: '开场白', tracks: '局势条说明', reputations: '声望说明', origins: '出身介绍', factions: '阵营介绍', premades: '预设人物介绍', companions: '同伴介绍', quests: '任务文字', endings: '结局', endingScenes: '结局', epilogues: '后日谈', chapters: '章节说明' };
  return `${names[top] || top}${who ? '·' + who : ''}${typeof node.if === 'string' ? ` [if ${node.if}]` : ''}·${kp[kp.length - 1]}`;
});
const { CODEX } = await imp('codex.js');
walkPlain('codex.js', 'CODEX', 'cx', CODEX, [], (kp, node) => `图鉴「${node.title || kp[0]}」·${kp[kp.length - 1] === 'short' ? '一句话简介（十五字以内）' : '正文'}`);
const { ENEMIES } = await imp('enemies.js');
walkPlain('enemies.js', 'ENEMIES', 'en', ENEMIES, [], (kp, node) => `敌人「${node.name || kp[0]}」·${kp[kp.length - 1] === 'text' ? '出招时的一句话（{name} 是敌人的名字）' : '介绍'}`);
const { ITEMS } = await imp('items.js');
walkPlain('items.js', 'ITEMS', 'it', ITEMS, [], (kp, node) => `物品「${node.name || kp[0]}」·介绍`);

if (SURVEY) { console.log(Object.entries(survey).sort((a, b) => b[1] - a[1]).map(([k, c]) => `${k}=${c}`).join('  ')); }

// ---- exact repeats: rewrite once, reuse everywhere (fight blocks are repeated across branches) ----
const firstOf = new Map();
for (const e of entries) { if (e.drop) continue; const p0 = firstOf.get(e.orig); if (p0) e.aliasOf = p0; else firstOf.set(e.orig, e.id); }

// ---- chunks ----
fs.mkdirSync(path.join(work, 'in'), { recursive: true }); fs.mkdirSync(path.join(work, 'out'), { recursive: true });
const chunks = [];
const header = (name, i, total) => `# ${id} 第 ${name} 块\n# 每一行的格式是：@编号 〔这一行是什么〕 原文\n# 你交回的文件里，每一行写成：@编号 改好的文字（一行一条，编号照抄，不要方括号里的说明，不要空行以外的别的东西）。\n# 不带条件的旁白如果并进了上一条，这一条写：@编号 ∅\n# 以 # 开头、写着“同 @某号”的行，是别处已经改过的重复文字，放在这里只为让你看懂上下文，不用交。\n`;
function flush(name, list, head) {
  if (!list.length) return;
  const lines = [COMPACT ? `# ${id} ${name}` : header(name)];
  let last = null;
  for (const e of list) {
    if (e.scene && e.scene !== last) { const si = sceneInfo[e.scene]; lines.push(`\n=== 场景 ${e.scene}${si.title ? `《${si.title}》` : ''}${si.loc ? `　地点：${si.loc}` : ''}${si.date ? `　日期：${si.date}` : ''}`); if (COMPACT) { const b = brief(e.scene); if (b) lines.push(`（设计意图）${b}`); } last = e.scene; }
    if (COMPACT) { if (!e.aliasOf) lines.push(`@${e.id} ${short(e.kind)}| ${e.orig}`); continue; }
    lines.push(e.aliasOf ? `# （同 @${e.aliasOf}，不用交）〔${e.kind}〕 ${e.orig}` : `@${e.id} 〔${e.kind}〕 ${e.orig}`);
  }
  fs.writeFileSync(path.join(work, 'in', name + '.txt'), lines.join('\n') + '\n');
  chunks.push({ name, ids: list.filter((e) => !e.aliasOf).length, chars: list.reduce((a, e) => a + (e.aliasOf ? 0 : e.orig.length), 0) });
}
for (const f of parts) {
  const list = entries.filter((e) => e.file === f);
  const scenes = [...new Set(list.map((e) => e.scene))];
  const total = list.reduce((a, e) => a + (e.aliasOf ? 0 : e.orig.length), 0);
  const k = Math.max(1, Math.round(total / CHUNK));
  const target = total / k;
  let cur = [], size = 0, idx = 1;
  for (const sid of scenes) {
    const sl = list.filter((e) => e.scene === sid);
    const sz = sl.reduce((a, e) => a + (e.aliasOf ? 0 : e.orig.length), 0);
    if (cur.length && size + sz / 2 > target && idx < k) { flush(`${f.replace('.js', '')}-${idx++}`, cur); cur = []; size = 0; }
    cur.push(...sl); size += sz;
  }
  flush(`${f.replace('.js', '')}-${idx}`, cur);
}
const plain = entries.filter((e) => e.plain);
const groups = { 'meta-1': plain.filter((e) => e.file === 'meta.js' && !/^(后日谈|结局)/.test(e.kind)), 'meta-2': plain.filter((e) => e.file === 'meta.js' && /^(后日谈|结局)/.test(e.kind)), 'codex-1': plain.filter((e) => e.file === 'codex.js'), 'data-1': plain.filter((e) => e.file === 'enemies.js' || e.file === 'items.js') };
for (const [name, list] of Object.entries(groups)) {
  if (name === 'codex-1' && list.reduce((a, e) => a + e.orig.length, 0) > CHUNK * 1.4) { const half = Math.ceil(list.length / 2); flush('codex-1', list.slice(0, half)); flush('codex-2', list.slice(half)); }
  else flush(name, list);
}
fs.writeFileSync(path.join(work, 'map.json'), JSON.stringify(Object.fromEntries(entries.map((e) => [e.id, e]))));
fs.writeFileSync(path.join(work, 'chunks.json'), JSON.stringify(chunks, null, 1));
console.log(`${id}: ${entries.length} strings, ${entries.reduce((a, e) => a + e.orig.length, 0)} chars, ${chunks.length} chunks`);
console.log(chunks.map((c) => `${c.name}:${c.ids}/${c.chars}`).join('  '));
