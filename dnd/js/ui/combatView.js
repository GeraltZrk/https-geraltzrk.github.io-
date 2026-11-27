// Combat screen.
import { h, icon, button, bar, modal } from './dom.js';
import { paintPortrait } from './art.js';
import * as Combat from '../core/combat.js';
import * as R from '../core/rules.js';
import { pips } from './play.js';

const ui = { pending: null };

function ctxOf(app) { return app.engine.ctx; }

function afterAction(app) {
  const c = app.engine.state.combat;
  if (c && !c.over) {
    const acts = Combat.availableActions(ctxOf(app));
    const quickLeft = acts.abilities.some((a) => a.quick && !a.disabled);
    if (c.acted && (c.attacksLeft || 0) <= 0 && !quickLeft) endTurn(app, true);
  }
  ui.pending = null;
  app.refresh();
}

function endTurn(app, silent) {
  const eng = app.engine;
  const c = eng.state.combat;
  if (!c || c.over) return;
  Combat.endTurn(eng.ctx);
  Combat.runUntilPlayer(eng.ctx, eng.manualCompanions);
  ui.pending = null;
  if (!silent) app.refresh();
}

function validTargets(app, pending) {
  const c = app.engine.state.combat;
  if (!pending) return [];
  const side = pending.target === 'ally' ? 'ally' : 'enemy';
  let list = Combat.unitsOf(c, side);
  if (side === 'enemy') list = list.filter((u) => !u.dead && !u.fled);
  else list = list.filter((u) => (!u.dead && !u.down) || (pending.revive && u.down));
  return list.map((u) => u.uid);
}

function execute(app, pending, targetUid) {
  const ctx = ctxOf(app);
  const c = ctx.state.combat;
  const u = Combat.currentUnit(c);
  if (pending.type === 'attack') Combat.attackAction(ctx, targetUid);
  else if (pending.type === 'ability') Combat.useAbility(ctx, u, pending.id, targetUid);
  else if (pending.type === 'item') Combat.useItem(ctx, pending.id, targetUid);
  afterAction(app);
}

function choose(app, pending) {
  const targets = validTargets(app, pending);
  if (pending.target === 'self' || pending.target === 'enemies' || pending.target === 'allies') { execute(app, pending, null); return; }
  if (targets.length === 1) { execute(app, pending, targets[0]); return; }
  if (!targets.length) return;
  ui.pending = pending;
  app.refresh();
}

function unitCard(app, u, active, targetable) {
  const ctx = ctxOf(app);
  const hp = Combat.unitHp(ctx, u);
  const gone = u.dead || u.down || u.fled;
  const sheet = u.sheet === 'pc' ? ctx.state.pc : u.sheet ? ctx.state.companions[u.sheet] : null;
  const conds = h('div', { class: 'conds' });
  for (const cd of u.conds || []) { const d = ctx.db.conditions[cd.id]; if (d) conds.appendChild(h('span', { class: d.bad ? '' : 'good', title: d.desc || '' }, d.name)); }
  if (u.dodging) conds.appendChild(h('span', { class: 'good' }, '防御'));
  if (u.hidden) conds.appendChild(h('span', { class: 'good' }, '隐匿'));
  const cls = `unit ${u.side}${active ? ' active' : ''}${gone ? ' dead' : ''}${targetable ? ' target' : ''}`;
  const el = h(targetable ? 'button' : 'div', { class: cls, type: targetable ? 'button' : null, onclick: targetable ? () => execute(app, ui.pending, u.uid) : null },
    active ? h('span', { class: 'turn' }, '行动中') : null,
    h('div', { class: 'row', style: { gap: '8px', flexWrap: 'nowrap' } },
      sheet ? paintPortrait(h('div', { class: 'portrait sm' }), sheet.portrait) : null,
      h('div', { class: 'grow', style: { minWidth: 0 } }, h('div', { class: 'nm' }, u.name),
        h('div', { class: 'hpt' }, h('span', null, gone ? (u.down ? '倒地' : '阵亡') : `${hp.hp}/${hp.max}${hp.temp ? ` +${hp.temp}` : ''}`), h('span', null, `AC ${Combat.unitAc(ctx, u)}`)))),
    bar(hp.hp, hp.max, 'thin'), conds.childNodes.length ? conds : null);
  return el;
}

function costText(app, a, sheet) {
  if (!a.cost) return a.quick ? '附赠动作' : '';
  const parts = [];
  if (a.cost.slot) parts.push(`${a.cost.slot}环法术位`);
  if (a.cost.res) { const pool = sheet.res[a.cost.res]; parts.push(`${pool ? pool.name : a.cost.res} ${a.cost.n || 1}（剩 ${pool ? pool.cur : 0}）`); }
  if (a.cost.uses) { const used = (sheet.uses && sheet.uses[a.id]) || 0; parts.push(`${a.cost.per === 'short' ? '每短休' : '每长休'} ${a.cost.uses - used}/${a.cost.uses}`); }
  if (a.cost.hp) parts.push(`生命 ${a.cost.hp}`);
  if (a.quick) parts.push('附赠动作');
  return parts.join(' · ');
}

function openAbilities(app, acts) {
  const ctx = ctxOf(app);
  const u = acts.unit;
  const sheet = u.sheet === 'pc' ? ctx.state.pc : ctx.state.companions[u.sheet];
  modal({
    title: `${u.name} 的能力`,
    content: (close) => {
      const box = h('div');
      if (sheet.slotsMax && sheet.slotsMax.some((n) => n > 0)) {
        const row = h('div', { class: 'slots' });
        sheet.slotsMax.forEach((mx, i) => { if (mx > 0) row.appendChild(h('span', null, `${i + 1}环`, pips(sheet.slots[i], mx))); });
        box.appendChild(row);
      }
      const list = h('div', { class: 'ability-list' });
      const sorted = acts.abilities.slice().sort((a, b) => (a.kind === 'spell' ? 1 : 0) - (b.kind === 'spell' ? 1 : 0) || a.level - b.level);
      if (!sorted.length) list.appendChild(h('p', { class: 'muted' }, '还没有可以主动使用的能力。'));
      for (const a of sorted) {
        const def = ctx.db.abilities[a.id];
        list.appendChild(h('button', { class: 'ability', type: 'button', disabled: !!a.disabled, onclick: () => { close(); choose(app, { type: 'ability', id: a.id, target: a.target, revive: def.revive }); } },
          h('b', null, a.name, a.kind === 'spell' ? h('span', { class: 'muted small' }, a.level ? `　${a.level}环` : '　戏法') : null),
          h('span', { class: 'cost' }, a.disabled || costText(app, def, sheet)),
          h('span', { class: 'd' }, a.desc || '')));
      }
      box.appendChild(list);
      return box;
    },
  });
}

function openItems(app, acts) {
  modal({
    title: '使用物品',
    content: (close) => {
      const list = h('div', { class: 'ability-list' });
      if (!acts.items.length) list.appendChild(h('p', { class: 'muted' }, '背包里没有能在战斗中用的东西。'));
      for (const it of acts.items) {
        list.appendChild(h('button', { class: 'ability', type: 'button', disabled: !!it.disabled, onclick: () => { close(); choose(app, { type: 'item', id: it.id, target: it.target, revive: app.db.items[it.id].use.revive }); } },
          h('b', null, it.name), h('span', { class: 'cost' }, `×${it.n}`), h('span', { class: 'd' }, it.desc || '')));
      }
      return list;
    },
  });
}

function openSpecials(app, acts) {
  const eng = app.engine;
  modal({
    title: '见机行事',
    content: (close) => {
      const list = h('div', { class: 'ability-list' });
      for (const sp of acts.specials) {
        const pv = sp.check ? eng.previewCheck(sp.check) : null;
        list.appendChild(h('button', { class: 'ability', type: 'button', disabled: !!sp.disabled, onclick: () => { close(); Combat.useSpecial(eng.ctx, sp.id, eng.combatCheck()); afterAction(app); } },
          h('b', null, sp.name), h('span', { class: 'cost' }, pv ? `${pv.label} DC ${pv.dc} · ${Math.round(pv.chance * 100)}%` : ''), h('span', { class: 'd' }, sp.desc || '')));
      }
      return list;
    },
  });
}

export function renderCombat(app) {
  const eng = app.engine;
  const ctx = eng.ctx;
  const c = eng.state.combat;
  const cur = Combat.currentUnit(c);
  const box = h('section', { class: 'frame combat' });
  box.appendChild(h('div', { class: 'combat-title' }, h('span', null, c.enc.title || '战斗'), h('span', { class: 'small' }, `第 ${c.round} 轮`)));

  const targets = ui.pending ? validTargets(app, ui.pending) : [];
  const enemies = h('div', { class: 'units' });
  for (const u of Combat.unitsOf(c, 'enemy')) enemies.appendChild(unitCard(app, u, !c.over && u === cur, targets.includes(u.uid)));
  box.appendChild(enemies);

  const log = h('div', { class: 'parch clog', 'aria-live': 'polite' });
  for (const line of c.log.slice(-60)) log.appendChild(h('div', { class: line.cls }, line.text));
  box.appendChild(log);
  requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });

  const allies = h('div', { class: 'units' });
  for (const u of Combat.unitsOf(c, 'ally')) allies.appendChild(unitCard(app, u, !c.over && u === cur, targets.includes(u.uid)));
  box.appendChild(allies);

  if (c.over) {
    const label = c.over === 'win' ? '胜利' : c.over === 'fled' ? '脱身' : '落败';
    if (c.notes && c.notes.length) box.appendChild(h('div', { class: 'notes', style: { justifyContent: 'center' } }, c.notes.map((n) => h('span', { class: 'chip ' + n.kind }, n.text))));
    box.appendChild(h('div', { class: 'continue-row' }, button(`${label}——继续`, () => { ui.pending = null; eng.finishCombat(); app.refresh(); window.scrollTo(0, 0); }, { class: 'primary' })));
    return box;
  }

  const acts = Combat.availableActions(ctx);
  const sheet = cur.sheet === 'pc' ? eng.state.pc : eng.state.companions[cur.sheet];
  const hint = ui.pending ? '点选一个目标' : `轮到 ${cur.name}`;
  box.appendChild(h('div', { class: 'hint' }, hint, ui.pending ? h('button', { class: 'btn small ghost', style: { marginLeft: '8px' }, type: 'button', onclick: () => { ui.pending = null; app.refresh(); } }, '取消') : null));

  const bar2 = h('div', { class: 'actions' });
  const atkLabel = c.attacksLeft > 0 ? `再攻击（${c.attacksLeft}）` : '攻击';
  bar2.appendChild(h('button', { class: 'btn', type: 'button', disabled: !!acts.attack.disabled, onclick: () => choose(app, { type: 'attack', target: 'enemy' }) },
    icon('sword'), h('span', null, atkLabel), h('small', null, `${acts.attack.name} ${R.fmtMod(acts.attack.hit)}`)));
  const usable = acts.abilities.filter((a) => !a.disabled).length;
  bar2.appendChild(h('button', { class: 'btn', type: 'button', disabled: !acts.abilities.length, onclick: () => openAbilities(app, acts) },
    icon('spark'), h('span', null, sheet && app.db.classes[sheet.cls] && app.db.classes[sheet.cls].caster ? '法术' : '能力'), h('small', null, `${usable} 项可用`)));
  bar2.appendChild(h('button', { class: 'btn', type: 'button', disabled: !acts.items.length, onclick: () => openItems(app, acts) }, icon('flask'), h('span', null, '物品'), h('small', null, `${acts.items.length} 种`)));
  bar2.appendChild(h('button', { class: 'btn', type: 'button', disabled: c.acted, onclick: () => { Combat.dodgeAction(ctx); afterAction(app); } }, icon('shield'), h('span', null, '防御'), h('small', null, '敌人攻击劣势')));
  if (acts.specials.length) bar2.appendChild(h('button', { class: 'btn', type: 'button', onclick: () => openSpecials(app, acts) }, icon('eye'), h('span', null, '见机行事'), h('small', null, `${acts.specials.length} 个机会`)));
  if (c.enc.fleeable !== false) bar2.appendChild(h('button', { class: 'btn', type: 'button', disabled: !acts.canFlee, onclick: () => { Combat.fleeAction(ctx, eng.combatCheck()); afterAction(app); } }, icon('run'), h('span', null, '逃跑'), h('small', null, '杂技/运动/隐匿')));
  bar2.appendChild(h('button', { class: 'btn primary', type: 'button', onclick: () => endTurn(app) }, icon('next'), h('span', null, '结束回合')));
  box.appendChild(bar2);
  if (eng.state.cheats.used) {
    box.appendChild(h('div', { class: 'row', style: { justifyContent: 'center' } },
      button('作弊：直接获胜', () => { Combat.cheatWin(ctx); app.refresh(); }, { class: 'small ghost', icon: 'wand' }),
      button('作弊：全队回满', () => { Combat.cheatHealAll(ctx); app.refresh(); }, { class: 'small ghost', icon: 'heart' })));
  }
  return box;
}
