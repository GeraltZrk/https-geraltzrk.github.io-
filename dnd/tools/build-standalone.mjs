// Build a standalone copy of the game that runs without ES-module loading:
// all code in one classic inline script, portraits packed into one file, other pictures copied as-is.
//
//   node tools/build-standalone.mjs <outDir> [--artifact]
//
// Default: <outDir>/index.html is a complete page that also opens from a local folder (double-click).
//          Portraits come from portraits.js (a plain script), so no fetch is needed.
// --artifact: <outDir>/index.html is a page body for a claude.ai artifact (the host adds the
//          doctype/head/body skeleton), and portraits come from portraits.json via fetch.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.resolve(process.argv[2] || 'dist');
const ARTIFACT = process.argv.includes('--artifact');

// ---- bundle -----------------------------------------------------------------
const modules = new Map(); // rel path -> transformed source
const rel = (abs) => path.relative(ROOT, abs).split(path.sep).join('/');

function resolveFrom(fromAbs, spec) {
  if (!spec.startsWith('.')) throw new Error(`bare import "${spec}" in ${rel(fromAbs)}`);
  return path.resolve(path.dirname(fromAbs), spec);
}

function transform(abs) {
  const id = rel(abs);
  if (modules.has(id)) return;
  modules.set(id, null);
  let src = fs.readFileSync(abs, 'utf8');
  const exported = [];
  const deps = [];
  const req = (spec) => { const a = resolveFrom(abs, spec); deps.push(a); return JSON.stringify(rel(a)); };

  // import { a, b as c } from './x.js';   (may span lines)
  src = src.replace(/^[ \t]*import\s*\{([^}]*)\}\s*from\s*'([^']+)';?/gm, (m, names, spec) => {
    const parts = names.split(',').map((n) => n.trim()).filter(Boolean).map((n) => {
      const [a, b] = n.split(/\s+as\s+/);
      return b ? `${a.trim()}: ${b.trim()}` : a.trim();
    });
    return `const { ${parts.join(', ')} } = __req(${req(spec)});`;
  });
  // import * as R from './x.js';
  src = src.replace(/^[ \t]*import\s*\*\s*as\s+([A-Za-z_$][\w$]*)\s*from\s*'([^']+)';?/gm, (m, name, spec) => `const ${name} = __req(${req(spec)});`);
  // import X from './x.js';
  src = src.replace(/^[ \t]*import\s+([A-Za-z_$][\w$]*)\s+from\s*'([^']+)';?/gm, (m, name, spec) => `const ${name} = __req(${req(spec)}).default;`);
  // import './x.js';
  src = src.replace(/^[ \t]*import\s*'([^']+)';?/gm, (m, spec) => `__req(${req(spec)});`);
  // dynamic import('./x.js')
  src = src.replace(/\bimport\(\s*'([^']+)'\s*\)/g, (m, spec) => `Promise.resolve().then(() => __req(${req(spec)}))`);
  // export default ...
  src = src.replace(/^export\s+default\s+/gm, '__exports.default = ');
  // export function / async function / class / const / let / var
  src = src.replace(/^export\s+(async\s+function\*?|function\*?|class|const|let|var)\s+([A-Za-z_$][\w$]*)/gm, (m, kw, name) => { exported.push(name); return `${kw} ${name}`; });
  if (/^\s*export\s/m.test(src)) throw new Error(`unhandled export form in ${id}: ${src.match(/^\s*export\s.*$/m)[0]}`);
  if (/^\s*import\s/m.test(src)) throw new Error(`unhandled import form in ${id}: ${src.match(/^\s*import\s.*$/m)[0]}`);
  if (/import\.meta/.test(src)) throw new Error(`import.meta in ${id}`);

  const getters = exported.map((n) => `__get(__exports, ${JSON.stringify(n)}, () => ${n});`).join('\n');
  modules.set(id, `__def(${JSON.stringify(id)}, function (__exports, __req) {\n${getters}\n${src}\n});`);
  for (const d of deps) transform(d);
}

transform(path.join(ROOT, 'js/app.js'));

const runtime = `
var __mods = {}, __cache = {};
function __def(id, fn) { __mods[id] = fn; }
function __get(o, k, g) { Object.defineProperty(o, k, { enumerable: true, get: g }); }
function __req(id) {
  if (__cache[id]) return __cache[id];
  var ex = __cache[id] = {};
  if (!__mods[id]) throw new Error('missing module ' + id);
  __mods[id](ex, __req);
  return ex;
}`;

let bundle = `(function () {\n'use strict';\n${runtime}\n${[...modules.values()].join('\n')}\n` +
`window.__NO_SW = true;
var art = __req('js/data/art.js').ART;
function start() { __req('js/app.js').boot(); }
function usePortraits(map) { for (var k in map) if (art.portraits[k]) art.portraits[k].src = map[k]; }
if (window.__PORTRAITS) { usePortraits(window.__PORTRAITS); start(); }
else fetch('portraits.json').then(function (r) { return r.json(); }).then(usePortraits).catch(function () {}).then(start);
})();`;
bundle = bundle.replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\!--');

// ---- assets -------------------------------------------------------------------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const copyDir = (d) => { fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true }); };
for (const d of ['assets/art', 'assets/ev', 'assets/flags']) copyDir(d);

const portraitDir = path.join(ROOT, 'assets/portraits');
const pack = {};
for (const f of fs.readdirSync(portraitDir).sort()) {
  if (!f.endsWith('.webp')) continue;
  pack[f.replace(/\.webp$/, '')] = 'data:image/webp;base64,' + fs.readFileSync(path.join(portraitDir, f)).toString('base64');
}
if (ARTIFACT) fs.writeFileSync(path.join(OUT, 'portraits.json'), JSON.stringify(pack));
else fs.writeFileSync(path.join(OUT, 'portraits.js'), 'window.__PORTRAITS = ' + JSON.stringify(pack) + ';\n');

// ---- page ---------------------------------------------------------------------
const css = fs.readFileSync(path.join(ROOT, 'css/main.css'), 'utf8');
const { GAME } = await import(path.join(ROOT, 'js/data/credits.js'));
const title = `${GAME.title}：${GAME.subtitle}`;
const body = `<div id="backdrop" aria-hidden="true"></div>
<div id="app"><div class="title-screen"><div class="logo"><div class="over">正在展开卷轴……</div></div></div></div>
<noscript><p style="padding:2em;color:#eee">这个游戏需要启用 JavaScript。</p></noscript>`;
const style = `<style>\n:root { color-scheme: dark; }\n${css}\n</style>`;
let html;
if (ARTIFACT) {
  html = `<title>${title}</title>\n${style}\n${body}\n<script>\n${bundle}\n</script>\n`;
} else {
  html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0c1418">
<title>${title}</title>
${style}
</head>
<body>
${body}
<script src="portraits.js"></script>
<script>
${bundle}
</script>
</body>
</html>
`;
}
fs.writeFileSync(path.join(OUT, 'index.html'), html);

const size = (f) => (fs.statSync(path.join(OUT, f)).size / 1e6).toFixed(2) + ' MB';
const count = (d) => fs.readdirSync(path.join(OUT, d)).length;
console.log(`modules ${modules.size}; index.html ${size('index.html')}; portraits ${size(ARTIFACT ? 'portraits.json' : 'portraits.js')} (${Object.keys(pack).length}); ` +
  `art ${count('assets/art')}, ev ${count('assets/ev')}, flags ${count('assets/flags')} files`);
