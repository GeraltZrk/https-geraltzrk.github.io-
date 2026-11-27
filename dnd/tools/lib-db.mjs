// Structural checks for the data tables (classes, races, abilities, items, enemies).
import { SKILLS, ABILS } from '../js/core/rules.js';

export function validateDb(db) {
  const errors = [];
  const E = (w, m) => errors.push(`${w}: ${m}`);
  for (const [id, c] of Object.entries(db.classes)) {
    if (c.id !== id) E(`class ${id}`, 'id mismatch');
    for (const lv of Object.keys(c.features || {})) for (const f of c.features[lv]) if (typeof f === 'string' && !db.abilities[f]) E(`class ${id}`, `feature "${f}" missing from abilities`);
    for (const s of c.subclasses || []) for (const lv of Object.keys(s.features || {})) for (const f of s.features[lv]) if (typeof f === 'string' && !db.abilities[f]) E(`class ${id}/${s.id}`, `feature "${f}" missing from abilities`);
    for (const slot of Object.keys(c.startEquip || {})) if (c.startEquip[slot] && !db.items[c.startEquip[slot]]) E(`class ${id}`, `start item ${c.startEquip[slot]} missing`);
    for (const k of Object.keys(c.startItems || {})) if (!db.items[k]) E(`class ${id}`, `start item ${k} missing`);
    if (c.skills) for (const s of c.skills.from) if (!SKILLS[s]) E(`class ${id}`, `unknown skill ${s}`);
    for (const a of c.saves || []) if (!ABILS.includes(a)) E(`class ${id}`, `bad save ${a}`);
    if (c.abilOrder && (c.abilOrder.length !== 6 || new Set(c.abilOrder).size !== 6)) E(`class ${id}`, 'abilOrder must list all six abilities');
  }
  for (const [id, r] of Object.entries(db.races)) { if (r.id !== id) E(`race ${id}`, 'id mismatch'); for (const f of r.abilities || []) if (!db.abilities[f]) E(`race ${id}`, `ability ${f} missing`); for (const s of r.profs || []) if (!SKILLS[s]) E(`race ${id}`, `unknown skill ${s}`); }
  for (const [id, b] of Object.entries(db.backgrounds)) for (const s of b.profs || []) if (!SKILLS[s]) E(`background ${id}`, `unknown skill ${s}`);
  for (const [id, a] of Object.entries(db.abilities)) {
    if (a.id !== id) E(`ability ${id}`, 'id mismatch');
    if (!a.name) E(`ability ${id}`, 'needs name');
    if (a.target && !['enemy', 'ally', 'self', 'enemies', 'allies'].includes(a.target)) E(`ability ${id}`, `bad target ${a.target}`);
    for (const k of ['apply', 'selfApply']) if (a[k] && !db.conditions[a[k].cond]) E(`ability ${id}`, `condition ${a[k].cond} missing`);
    if (a.save && !ABILS.includes(a.save.abil)) E(`ability ${id}`, 'bad save ability');
    if (a.cost && a.cost.res) { const ok = Object.values(db.classes).some((c) => c.resources && c.resources[a.cost.res]); if (!ok) E(`ability ${id}`, `resource ${a.cost.res} not defined on any class`); }
  }
  for (const [id, e] of Object.entries(db.enemies)) {
    if (e.id !== id) E(`enemy ${id}`, 'id mismatch');
    if (!e.attacks || !e.attacks.length) E(`enemy ${id}`, 'needs attacks');
    for (const atk of e.attacks || []) { for (const k of ['apply', 'buff']) if (atk[k] && !db.conditions[atk[k].cond]) E(`enemy ${id}`, `condition ${atk[k].cond} missing`); if (!atk.heal && !atk.buff && !atk.dmg) E(`enemy ${id}`, `attack ${atk.name} needs dmg`); }
    if (typeof e.ac !== 'number' || e.hp === undefined) E(`enemy ${id}`, 'needs hp and ac');
  }
  for (const [id, it] of Object.entries(db.items)) { if (it.id !== id) E(`item ${id}`, 'id mismatch'); if (!it.name) E(`item ${id}`, 'needs name'); if (it.use && it.use.apply && !db.conditions[it.use.apply.cond]) E(`item ${id}`, 'bad condition'); for (const f of it.grants || []) if (!db.abilities[f]) E(`item ${id}`, `grants unknown ability ${f}`); }
  return errors;
}

