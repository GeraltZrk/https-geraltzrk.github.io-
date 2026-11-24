// Content validator. Usage: node tools/validate.mjs [scenarioId ...] [--json] [--quiet]
// Checks scene graph integrity, conditions, effects, references, and lints prose.
import { DB, mergeScenarioData } from '../js/data/index.js';
import { SCENARIOS } from '../js/data/scenarios/index.js';
import { ART } from '../js/data/art.js';
import { compile, identifiers } from '../js/core/expr.js';
import { parseEffect } from '../js/core/effects.js';
import { SKILLS, ABILS } from '../js/core/rules.js';
import { lintText } from './style-lint.mjs';
import { validateDb } from './lib-db.mjs';
export { validateDb };

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const quiet = args.includes('--quiet');
const only = args.filter((a) => !a.startsWith('--'));

const PLAIN = ['class', 'cls', 'subclass', 'race', 'subrace', 'origin', 'nation', 'faction', 'gender', 'level', 'gold', 'hp', 'maxhp', 'bg', 'background', 'scenario', 'era', 'difficulty', 'partysize', 'name'];
const NAMESPACES = ['flag', 'var', 'rep', 'world', 'stat', 'mod', 'skill', 'prof', 'item', 'party', 'met', 'approval', 'quest', 'done', 'failed', 'visited', 'picked', 'cheat', 'knows', 'is'];

export function validateScenario(sc, db) {
  const errors = [];
  const warnings = [];
  const info = [];
  const E = (where, msg) => errors.push(`${where}: ${msg}`);
  const W = (where, msg) => warnings.push(`${where}: ${msg}`);
  const scenes = sc.scenes || {};
  const flagsSet = new Map();
  const flagsRead = new Map();
  const varsSet = new Set();
  const edges = new Map();
  const addEdge = (from, to) => { if (!edges.has(from)) edges.set(from, new Set()); edges.get(from).add(to); };

  const reps = new Set((sc.reputations || []).map((r) => r.key));
  const tracks = new Set((sc.tracks || []).map((r) => r.key));
  const comps = new Set(Object.keys(sc.companions || {}));
  const quests = new Set(Object.keys(sc.quests || {}));
  const codex = new Set([...Object.keys(sc.codex || {}), ...Object.keys(db.codex || {})]);
  const origins = new Set((sc.origins || []).map((o) => o.id));
  const factions = new Set((sc.factions || []).map((o) => o.id));
  const tagSet = new Set();
  for (const c of Object.values(db.classes)) for (const t of c.tags || []) tagSet.add(t);
  for (const r of Object.values(db.races)) { for (const t of r.tags || []) tagSet.add(t); for (const s of r.subraces || []) for (const t of s.tags || []) tagSet.add(t); }
  for (const b of Object.values(db.backgrounds)) for (const t of b.tags || []) tagSet.add(t);
  ['female', 'male', 'other'].forEach((t) => tagSet.add(t));

  function checkCond(where, src) {
    if (src === undefined || src === null || src === true || src === false) return;
    if (typeof src !== 'string') { E(where, `condition must be a string, got ${typeof src}`); return; }
    let ast;
    try { ast = compile(src); } catch (e) { E(where, `bad condition "${src}": ${e.message}`); return; }
    for (const id of identifiers(src)) {
      const dot = id.indexOf('.');
      if (dot < 0) { if (!PLAIN.includes(id)) E(where, `unknown identifier "${id}" in "${src}"`); continue; }
      const ns = id.slice(0, dot), key = id.slice(dot + 1);
      if (!NAMESPACES.includes(ns)) { E(where, `unknown namespace "${ns}" in "${src}"`); continue; }
      if (ns === 'flag') { if (!flagsRead.has(key)) flagsRead.set(key, where); }
      else if (ns === 'rep' && !reps.has(key)) E(where, `unknown reputation "${key}"`);
      else if (ns === 'world' && !tracks.has(key)) E(where, `unknown world track "${key}"`);
      else if ((ns === 'skill' || ns === 'prof') && !SKILLS[key]) E(where, `unknown skill "${key}"`);
      else if ((ns === 'stat' || ns === 'mod') && !ABILS.includes(key)) E(where, `unknown ability "${key}"`);
      else if (ns === 'item' && !db.items[key]) E(where, `unknown item "${key}"`);
      else if ((ns === 'party' || ns === 'met' || ns === 'approval') && !comps.has(key)) E(where, `unknown companion "${key}"`);
      else if ((ns === 'quest' || ns === 'done' || ns === 'failed') && !quests.has(key)) E(where, `unknown quest "${key}"`);
      else if (ns === 'visited' && !scenes[key]) E(where, `visited.${key}: no such scene`);
      else if (ns === 'knows' && !db.abilities[key]) E(where, `unknown ability "${key}"`);
      else if (ns === 'is' && !tagSet.has(key)) W(where, `tag "is.${key}" is not defined on any class/race/background`);
    }
    // literal comparisons against enumerations
    (function walk(n) {
      if (!n) return;
      if (n.k === 'bin') {
        const pairs = [[n.l, n.r], [n.r, n.l]];
        for (const [a, b] of pairs) {
          if (a.k !== 'id') continue;
          const lits = b.k === 'lit' ? [b.v] : b.k === 'list' ? b.v.filter((x) => x.k === 'lit').map((x) => x.v) : [];
          for (const v of lits) {
            if (typeof v !== 'string') continue;
            if ((a.v === 'class' || a.v === 'cls') && !db.classes[v]) E(where, `unknown class "${v}" in "${src}"`);
            if (a.v === 'race' && !db.races[v]) E(where, `unknown race "${v}" in "${src}"`);
            if (a.v === 'origin' && !origins.has(v)) E(where, `unknown origin "${v}" in "${src}"`);
            if (a.v === 'faction' && v !== '' && !factions.has(v)) E(where, `unknown faction "${v}" in "${src}"`);
            if ((a.v === 'bg' || a.v === 'background') && !db.backgrounds[v]) E(where, `unknown background "${v}" in "${src}"`);
            if (a.v === 'gender' && !['m', 'f', 'x'].includes(v)) E(where, `gender must be 'm' or 'f' in "${src}"`);
            if (a.v === 'subrace' && !Object.values(db.races).some((r) => (r.subraces || []).some((s) => s.id === v))) E(where, `unknown subrace "${v}" in "${src}"`);
            if (a.v === 'subclass' && !Object.values(db.classes).some((r) => (r.subclasses || []).some((s) => s.id === v))) E(where, `unknown subclass "${v}" in "${src}"`);
          }
        }
        walk(n.l); walk(n.r);
      } else if (n.k === 'not' || n.k === 'neg') walk(n.v);
      else if (n.k === 'list') n.v.forEach(walk);
    })(ast);
  }

  function checkEffects(where, list) {
    if (list === undefined || list === null) return;
    const arr = Array.isArray(list) ? list : [list];
    for (const eff of arr) {
      if (eff && typeof eff === 'object') { checkCond(where, eff.if); checkEffects(where, eff.then); checkEffects(where, eff.else); continue; }
      let p;
      try { p = parseEffect(eff); } catch (e) { E(where, e.message); continue; }
      const a = p.args;
      switch (p.verb) {
        case 'flag': flagsSet.set(a[0], where); break;
        case 'var': varsSet.add(a[0]); break;
        case 'rep': if (!reps.has(a[0])) E(where, `effect "${eff}": unknown reputation`); break;
        case 'world': if (!tracks.has(a[0])) E(where, `effect "${eff}": unknown world track`); break;
        case 'item': if (!db.items[a[0].slice(1)]) E(where, `effect "${eff}": unknown item`); break;
        case 'equip': if (!db.items[a[0]]) E(where, `effect "${eff}": unknown item`); break;
        case 'companion': case 'party': if (!comps.has(a[0].slice(1))) E(where, `effect "${eff}": unknown companion`); break;
        case 'approval': if (!comps.has(a[0])) E(where, `effect "${eff}": unknown companion`); break;
        case 'codex': if (!codex.has(a[0])) E(where, `effect "${eff}": unknown codex entry`); break;
        case 'quest': if (!quests.has(a[0])) E(where, `effect "${eff}": unknown quest`); if (!['start', 'done', 'fail', 'stage'].includes(a[1])) E(where, `effect "${eff}": use start|stage N|done|fail`); break;
        case 'learn': if (!db.abilities[a[0]]) E(where, `effect "${eff}": unknown ability`); break;
        case 'ending': if (!(sc.endingScenes && sc.endingScenes[a[0]])) E(where, `effect "${eff}": unknown ending`); break;
        case 'level': { const n = Number(String(a[0]).replace(/^[=+]/, '')); if (n < 1 || n > 12) E(where, `effect "${eff}": level out of range`); break; }
        default: break;
      }
    }
  }

  function checkText(where, list, opts = {}) {
    if (list === undefined || list === null) return 0;
    const arr = Array.isArray(list) ? list : [list];
    let chars = 0;
    for (const p of arr) {
      let texts = [];
      if (typeof p === 'string') texts = [p];
      else if (p && typeof p === 'object') { checkCond(where, p.if); texts = Array.isArray(p.text) ? p.text : [p.text]; if (p.text === undefined) E(where, 'text block without "text"'); }
      else { E(where, 'text entries must be strings or {if,text} objects'); continue; }
      for (const t of texts) {
        if (typeof t !== 'string') { E(where, 'paragraph is not a string'); continue; }
        chars += t.length;
        for (const m of t.matchAll(/\{([^{}]*)\}/g)) {
          const tok = m[1];
          if (['pc', 'ta', 'race', 'cls', 'origin', 'nation'].includes(tok)) continue;
          if (/^m:[^|]*\|f:.*$/.test(tok)) continue;
          if (tok.startsWith('?')) { const cm = tok.match(/^\?([^:]+):/); if (cm) checkCond(where, cm[1].trim()); else E(where, `bad inline conditional {${tok}}`); continue; }
          E(where, `unknown token {${tok}}`);
        }
        if (t.length > 260 && !opts.long) W(where, `paragraph is ${t.length} chars — split it`);
        for (const hit of lintText(t)) W(where, `文风：${hit}`);
      }
    }
    return chars;
  }

  function checkCheck(where, ck) {
    if (!ck) return;
    if (ck.skill && !SKILLS[ck.skill]) E(where, `unknown skill "${ck.skill}"`);
    for (const s of ck.alt || []) if (!SKILLS[s]) E(where, `unknown alt skill "${s}"`);
    if (!ck.skill && !ck.abil) E(where, 'check needs skill or abil');
    if (ck.abil && !ABILS.includes(ck.abil)) E(where, `unknown ability "${ck.abil}"`);
    if (typeof ck.dc !== 'number' || ck.dc < 5 || ck.dc > 30) E(where, `check dc must be 5..30 (got ${ck.dc})`);
    if (typeof ck.adv === 'string') checkCond(where, ck.adv);
    if (typeof ck.dis === 'string') checkCond(where, ck.dis);
    for (const m of ck.mods || []) { checkCond(where, m.if); if (typeof m.n !== 'number') E(where, 'check mod needs numeric n'); }
  }

  function gotoOf(where, from, target) {
    if (target === undefined || target === null) return;
    if (typeof target !== 'string') { E(where, 'goto must be a scene id string'); return; }
    if (!scenes[target]) E(where, `goto "${target}" does not exist`);
    else addEdge(from, target);
  }

  function checkCombat(where, from, enc) {
    if (!enc) return;
    if (!Array.isArray(enc.enemies) || !enc.enemies.length) E(where, 'combat needs enemies');
    for (const e of enc.enemies || []) { if (!db.enemies[e.id]) E(where, `unknown enemy "${e.id}"`); if (e.n !== undefined && (e.n < 1 || e.n > 8)) E(where, 'enemy count 1..8'); }
    for (const e of enc.allies || []) if (!db.enemies[e.id]) E(where, `unknown ally "${e.id}"`);
    for (const key of ['win', 'lose', 'fled']) {
      const o = enc[key];
      if (o === undefined) { if (key === 'win') E(where, 'combat needs a win outcome'); continue; }
      if (typeof o === 'string') gotoOf(where, from, o);
      else { checkEffects(where, o.effects); gotoOf(where, from, o.goto); if (key === 'win' && !o.goto) E(where, 'combat win needs goto'); }
    }
    checkEffects(where, enc.reward);
    for (const sp of enc.specials || []) {
      if (!sp.id || !sp.name) E(where, 'special needs id and name');
      if (sp.check) checkCheck(where + ' special', sp.check);
      for (const b of [sp.success, sp.fail]) if (b) { checkEffects(where, b.effects); if (b.applyAll && !db.conditions[b.applyAll.cond]) E(where, `unknown condition "${b.applyAll.cond}"`); }
    }
    if (enc.intro) for (const hit of lintText(enc.intro)) W(where, `文风：${hit}`);
  }

  // ---- top level
  if (!sc.id) E('scenario', 'missing id');
  if (!sc.origins || !sc.origins.length) E('scenario', 'needs origins');
  for (const o of sc.origins || []) {
    const s = o.startScene || sc.startScene;
    if (!s || !scenes[s]) E(`origin ${o.id}`, `startScene "${s}" does not exist`);
    if (o.start) { for (const k of Object.keys(o.start.rep || {})) if (!reps.has(k)) E(`origin ${o.id}`, `unknown rep ${k}`); for (const k of Object.keys(o.start.world || {})) if (!tracks.has(k)) E(`origin ${o.id}`, `unknown track ${k}`); for (const k of Object.keys(o.start.items || {})) if (!db.items[k]) E(`origin ${o.id}`, `unknown item ${k}`); for (const k of o.start.flags || []) flagsSet.set(k, `origin ${o.id}`); }
    if (o.flag && !ART.flags[o.flag]) W(`origin ${o.id}`, `flag art "${o.flag}" missing`);
    for (const f of ['name', 'blurb']) if (!o[f]) E(`origin ${o.id}`, `missing ${f}`);
  }
  for (const f of sc.factions || []) {
    for (const oid of f.origins || []) if (!origins.has(oid)) E(`faction ${f.id}`, `unknown origin ${oid}`);
    if (f.start) { for (const k of Object.keys(f.start.rep || {})) if (!reps.has(k)) E(`faction ${f.id}`, `unknown rep ${k}`); for (const k of Object.keys(f.start.world || {})) if (!tracks.has(k)) E(`faction ${f.id}`, `unknown track ${k}`); for (const k of f.start.flags || []) flagsSet.set(k, `faction ${f.id}`); }
  }
  for (const o of sc.origins || []) {
    const fs = (sc.factions || []).filter((f) => !f.origins || f.origins.includes(o.id));
    if ((sc.factions || []).length && !fs.length) W(`origin ${o.id}`, 'no faction available for this origin');
    const pm = (sc.premades || []).filter((p) => !p.origins || p.origins.includes(o.id));
    if (!pm.length) W(`origin ${o.id}`, 'no premade character for this origin');
  }
  for (const p of sc.premades || []) {
    const w = `premade ${p.id}`;
    if (!db.classes[p.cls]) E(w, `unknown class ${p.cls}`);
    if (!db.races[p.race]) E(w, `unknown race ${p.race}`);
    if (p.background && !db.backgrounds[p.background]) E(w, `unknown background ${p.background}`);
    if (p.subrace && !(db.races[p.race] && (db.races[p.race].subraces || []).some((s) => s.id === p.subrace))) E(w, `unknown subrace ${p.subrace}`);
    for (const a of ABILS) if (typeof (p.abil || {})[a] !== 'number') E(w, `missing ability ${a}`);
    for (const s of p.profs || []) if (!SKILLS[s]) E(w, `unknown skill ${s}`);
    for (const oid of p.origins || []) if (!origins.has(oid)) E(w, `unknown origin ${oid}`);
    if (p.portrait && !ART.portraits[p.portrait]) W(w, `portrait "${p.portrait}" missing`);
    for (const slot of Object.keys(p.equip || {})) if (p.equip[slot] && !db.items[p.equip[slot]]) E(w, `unknown item ${p.equip[slot]}`);
    if (!p.blurb) W(w, 'missing blurb');
  }
  for (const [id, c] of Object.entries(sc.companions || {})) {
    const w = `companion ${id}`;
    if (c.id !== id) E(w, 'id mismatch');
    if (!db.classes[c.cls]) E(w, `unknown class ${c.cls}`);
    if (!db.races[c.race]) E(w, `unknown race ${c.race}`);
    for (const slot of Object.keys(c.equip || {})) if (c.equip[slot] && !db.items[c.equip[slot]]) E(w, `unknown item ${c.equip[slot]}`);
    for (const s of c.profs || []) if (!SKILLS[s]) E(w, `unknown skill ${s}`);
    if (c.portrait && !ART.portraits[c.portrait]) W(w, `portrait "${c.portrait}" missing`);
  }
  for (const t of sc.tracks || []) if (t.start < (t.min ?? 0) || t.start > (t.max ?? 10)) E(`track ${t.key}`, 'start outside min..max');
  for (const ch of sc.chapters || []) { if (!scenes[ch.scene]) E(`chapter ${ch.title}`, `scene "${ch.scene}" missing`); checkCond(`chapter ${ch.title}`, ch.if); checkEffects(`chapter ${ch.title}`, ch.effects); }
  for (const [id, target] of Object.entries(sc.endingScenes || {})) { if (!scenes[target]) E(`ending ${id}`, `scene "${target}" missing`); if (!(sc.endings || {})[id]) E(`ending ${id}`, 'missing entry in endings'); }
  for (const [id, e] of Object.entries(sc.codex || {})) { if (!e.title || !e.text) E(`codex ${id}`, 'needs title and text'); checkText(`codex ${id}`, e.text, { long: true }); if (e.art && !ART.scenes[e.art]) W(`codex ${id}`, `art "${e.art}" missing`); }
  for (const [id, q] of Object.entries(sc.quests || {})) if (!q.title) E(`quest ${id}`, 'needs title');
  for (const [i, ep] of (sc.epilogues || []).entries()) { checkCond(`epilogue ${i}`, ep.if); checkText(`epilogue ${i}`, ep.text, { long: true }); if (ep.art && !ART.scenes[ep.art]) W(`epilogue ${i}`, `art "${ep.art}" missing`); }
  for (const [id, e] of Object.entries(sc.endings || {})) { checkText(`ending ${id}`, e.text, { long: true }); if (e.art && !ART.scenes[e.art]) W(`ending ${id}`, `art "${e.art}" missing`); }

  // ---- scenes
  let totalChars = 0;
  let checks = 0, fights = 0, choiceCount = 0;
  const endingsUsed = new Set();
  for (const [id, s] of Object.entries(scenes)) {
    const w = `scene ${id}`;
    if (s.id !== id) E(w, `id field "${s.id}" does not match key`);
    if (!Array.isArray(s.text) || !s.text.length) E(w, 'needs text[]');
    const chars = checkText(w, s.text);
    totalChars += chars;
    if (chars > 1100) W(w, `scene text is ${chars} chars — consider splitting`);
    if (s.art && !ART.scenes[s.art]) W(w, `art "${s.art}" missing`);
    checkEffects(w, s.first);
    checkEffects(w, s.enter);
    const exits = (s.choices && s.choices.length ? 1 : 0) + (s.next ? 1 : 0) + (s.combat ? 1 : 0) + (s.ending ? 1 : 0);
    if (!exits) E(w, 'dead end: needs choices, next, combat or ending');
    if (s.ending) { endingsUsed.add(s.ending); if (!(sc.endings || {})[s.ending]) E(w, `ending "${s.ending}" missing from endings`); }
    if (s.shop) {
      checkCond(w + ' shop', s.shop.if);
      if (!Array.isArray(s.shop.stock) || !s.shop.stock.length) E(w, 'shop needs stock[]');
      for (const entry of s.shop.stock || []) { const iid = typeof entry === 'string' ? entry : entry.id; if (!db.items[iid]) E(w, `shop item "${iid}" unknown`); if (typeof entry === 'object') checkCond(w + ' shop', entry.if); }
    }
    if (s.next) gotoOf(w, id, s.next);
    if (s.combat) { fights++; checkCombat(w + ' combat', id, s.combat); if (s.choices && s.choices.length) W(w, 'scene has both combat and choices — choices are ignored'); }
    let unconditional = 0;
    (s.choices || []).forEach((c, i) => {
      const cw = `${w} choice ${i + 1}`;
      choiceCount++;
      if (!c.text || typeof c.text !== 'string') E(cw, 'needs text');
      else { for (const hit of lintText(c.text)) W(cw, `文风：${hit}`); if (c.text.length > 60) W(cw, `choice label is ${c.text.length} chars — keep it under 40`); }
      checkCond(cw, c.if); checkCond(cw, c.req);
      if (c.req && !c.reqText) W(cw, 'req without reqText');
      if (c.if === undefined && c.req === undefined && !c.cost && !c.once) unconditional++;
      if (c.cost && c.cost.item && !db.items[c.cost.item]) E(cw, `unknown cost item ${c.cost.item}`);
      checkEffects(cw, c.effects);
      if (c.check) {
        checks++;
        checkCheck(cw, c.check);
        if (!c.ok || !c.fail) E(cw, 'check needs ok and fail branches');
        for (const key of ['ok', 'fail', 'crit', 'fumble']) {
          const b = c[key];
          if (!b) continue;
          checkText(cw, b.text); checkEffects(cw, b.effects); gotoOf(cw, id, b.goto);
          if (b.combat) { fights++; checkCombat(cw + ' combat', id, b.combat); }
          if (!b.text) W(cw, `${key} branch has no outcome text`);
          if (!b.goto && !b.combat && !(b.effects && b.effects.length) && !c.once) W(cw, `${key} branch changes nothing and leads nowhere`);
        }
        if (c.goto) W(cw, 'check choice has top-level goto (ignored; put goto in ok/fail)');
        if (c.result) W(cw, 'check choice has "result" (ignored; use ok.text / fail.text)');
      } else {
        checkText(cw, c.result);
        gotoOf(cw, id, c.goto);
        if (c.combat) { fights++; checkCombat(cw + ' combat', id, c.combat); }
        if (!c.goto && !c.combat && !c.once && !(c.effects || []).some((e) => typeof e === 'string' && e.startsWith('ending'))) W(cw, 'repeatable choice with no goto (possible loop) — add once:true or a goto');
        if (c.ok || c.fail) E(cw, 'ok/fail without check');
      }
    });
    if (s.choices && s.choices.length && !unconditional && !s.next) W(w, 'every choice is conditional/once — make sure one always remains (autoplay will confirm)');
  }

  // reachability
  const seen = new Set();
  const queue = [];
  for (const o of sc.origins || []) { const s = o.startScene || sc.startScene; if (scenes[s]) queue.push(s); }
  for (const ch of sc.chapters || []) if (scenes[ch.scene]) queue.push(ch.scene);
  for (const t of Object.values(sc.endingScenes || {})) if (scenes[t]) queue.push(t);
  while (queue.length) { const cur = queue.pop(); if (seen.has(cur)) continue; seen.add(cur); for (const nx of edges.get(cur) || []) queue.push(nx); }
  for (const id of Object.keys(scenes)) if (!seen.has(id)) W(`scene ${id}`, 'unreachable from any start');

  for (const [k, where] of flagsRead) if (!flagsSet.has(k)) E(where, `flag "${k}" is read but never set anywhere`);
  const unread = [...flagsSet.keys()].filter((k) => !flagsRead.has(k));
  if (unread.length) info.push(`flags set but never read (${unread.length}): ${unread.slice(0, 40).join(', ')}${unread.length > 40 ? ' …' : ''}`);
  for (const id of Object.keys(sc.endings || {})) if (!endingsUsed.has(id)) W(`ending ${id}`, 'no scene uses this ending');

  const stats = { scenes: Object.keys(scenes).length, chars: totalChars, choices: choiceCount, checks, fights, endings: endingsUsed.size, origins: (sc.origins || []).length, factions: (sc.factions || []).length, premades: (sc.premades || []).length, companions: comps.size, codex: Object.keys(sc.codex || {}).length, flags: flagsSet.size };
  return { errors, warnings, info, stats };
}

async function main() {
  const report = {};
  let failed = false;
  const dbErrors = validateDb(DB);
  report.db = { errors: dbErrors };
  if (dbErrors.length) failed = true;
  if (!asJson) { console.log(`== data: ${dbErrors.length} error(s)`); for (const e of dbErrors) console.log('  ERROR ' + e); }
  for (const entry of SCENARIOS) {
    if (only.length && !only.includes(entry.id)) continue;
    let sc;
    try { sc = (await entry.load()).default; } catch (e) { report[entry.id] = { errors: ['load failed: ' + e.message], warnings: [], info: [], stats: {} }; failed = true; if (!asJson) console.log(`== ${entry.id}: LOAD FAILED ${e.stack}`); continue; }
    const db = { ...DB, companions: {}, enemies: { ...DB.enemies }, items: { ...DB.items }, abilities: { ...DB.abilities }, conditions: { ...DB.conditions } };
    mergeScenarioData(db, sc);
    const res = validateScenario(sc, db);
    report[entry.id] = res;
    if (res.errors.length) failed = true;
    if (!asJson) {
      console.log(`== ${entry.id}: ${res.errors.length} error(s), ${res.warnings.length} warning(s)  ${JSON.stringify(res.stats)}`);
      for (const e of res.errors) console.log('  ERROR ' + e);
      if (!quiet) { for (const w of res.warnings) console.log('  warn  ' + w); for (const i of res.info) console.log('  info  ' + i); }
    }
  }
  if (asJson) console.log(JSON.stringify(report, null, 1));
  process.exitCode = failed ? 1 : 0;
}

if (import.meta.url === `file://${process.argv[1]}`) main();
