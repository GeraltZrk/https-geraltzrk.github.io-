// Level-up dialog.
import { h, button, modal, toast } from './dom.js';
import * as R from '../core/rules.js';
import { levelUp, levelUpNeeds } from '../core/effects.js';

export function openLevelUp(app) {
  const st = app.state;
  const pc = st.pc;
  if (pc.pendingLevels <= 0) return null;
  const db = app.db;
  const needs = levelUpNeeds(pc, db);
  const cls = db.classes[pc.cls];
  const asi = {};
  let points = needs.asi ? 2 : 0;
  let subclass = null;
  const m = modal({ title: `升到 ${needs.level} 级`, content: () => h('div') });
  const draw = () => {
    while (m.body.firstChild) m.body.removeChild(m.body.firstChild);
    const box = h('div', { class: 'list' });
    const die = cls.hitDie;
    const con = R.abilMod(pc.abil.con);
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '生命上限'), h('div', { class: 'd' }, `+${Math.floor(die / 2) + 1 + con}（${cls.name}的生命骰 d${die} 取均值，加上体质调整）`))));
    if (R.profBonus(needs.level) > R.profBonus(pc.level)) box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '熟练加值'), h('div', { class: 'd' }, `提升到 ${R.fmtMod(R.profBonus(needs.level))}`))));
    const feats = needs.newFeatures.map((id) => db.abilities[id]).filter(Boolean);
    const subDef = cls.subclasses && cls.subclasses.find((s) => s.id === (pc.subclass || subclass));
    const subFeats = subDef ? ((subDef.features && subDef.features[needs.level]) || []).map((id) => db.abilities[typeof id === 'string' ? id : id.id]).filter(Boolean) : [];
    for (const a of [...feats, ...subFeats]) box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, `新能力：${a.name}`), h('div', { class: 'd' }, a.desc || ''))));

    if (needs.subclass) {
      box.appendChild(h('div', { class: 'section-title' }, '选择一条道路'));
      const picks = h('div', { class: 'pick-list' });
      for (const s of cls.subclasses) picks.appendChild(h('button', { type: 'button', class: 'pick' + (subclass === s.id ? ' sel' : ''), onclick: () => { subclass = s.id; draw(); } }, h('b', null, s.name), h('span', null, s.desc || '')));
      box.appendChild(picks);
    }
    if (needs.asi) {
      box.appendChild(h('div', { class: 'section-title' }, `属性提升（还可分配 ${points} 点）`));
      const grid = h('div', { class: 'abil-grid' });
      for (const a of R.ABILS) {
        const cur = pc.abil[a] + (asi[a] || 0);
        grid.appendChild(h('div', { class: 'abil' }, h('span', { class: 'nm' }, R.ABIL_NAMES[a]), h('b', null, String(cur)), h('span', { class: 'md' }, R.fmtMod(R.abilMod(cur))),
          h('div', { class: 'pm' },
            h('button', { type: 'button', disabled: !(asi[a] > 0), onclick: () => { asi[a] -= 1; points += 1; draw(); }, 'aria-label': '减少' }, '−'),
            h('button', { type: 'button', disabled: points <= 0 || cur >= 20, onclick: () => { asi[a] = (asi[a] || 0) + 1; points -= 1; draw(); }, 'aria-label': '增加' }, '+'))));
      }
      box.appendChild(grid);
    }
    const ready = (!needs.subclass || subclass) && (!needs.asi || points === 0);
    box.appendChild(h('div', { class: 'row end', style: { marginTop: '10px' } },
      button('确认升级', () => {
        const lv = levelUp(st, db, { asi, subclass });
        m.close();
        toast(`${pc.name} 升到了 ${lv} 级`);
        app.autosave();
        app.refresh();
        if (pc.pendingLevels > 0) openLevelUp(app);
      }, { class: 'primary', disabled: !ready })));
    m.body.appendChild(box);
  };
  draw();
  return m;
}
