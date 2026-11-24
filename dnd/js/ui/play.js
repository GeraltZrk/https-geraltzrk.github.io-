// The play screen: event window (story), sidebar (desktop), bottom nav (mobile).
import { h, rich, icon, button, bar, toast, confirmDialog, modal } from './dom.js';
import { paint, paintPortrait, setBackdrop } from './art.js';
import * as R from '../core/rules.js';
import { divineTitle } from '../core/state.js';
import { renderCombat } from './combatView.js';
import { openPanel } from './panels.js';
import { openSystem } from './system.js';
import { openCheats } from './cheats.js';
import { openLevelUp } from './levelup.js';

export function renderPlay(app) {
  const eng = app.engine;
  const st = eng.state;
  const view = st.phase === 'gameover' ? { type: 'gameover', notes: st.notes || [] } : eng.view();
  if (view.art) setBackdrop(view.art);

  const wrap = h('div', { class: 'play' });
  wrap.appendChild(topbar(app));
  let main;
  if (view.type === 'combat') main = renderCombat(app);
  else if (view.type === 'ending') main = endingView(app, view);
  else if (view.type === 'gameover') main = gameOverView(app, view);
  else main = eventView(app, view);
  wrap.appendChild(main);
  wrap.appendChild(sidebar(app));
  wrap.appendChild(bottomNav(app));
  return wrap;
}

function topbar(app) {
  const st = app.engine.state;
  return h('div', { class: 'topbar' },
    h('span', { class: 'where' }, st.location || app.scenario.title),
    h('span', { class: 'when' }, st.date || ''),
    st.cheats.ascended ? h('span', { class: 'chip gold', title: '神格' }, icon('star', 13), divineTitle(st)) : null,
    h('span', { class: 'coin', title: app.scenario.coin || '金币' }, icon('coin', 16), String(st.gold)),
    st.cheats.debug ? h('span', { class: 'muted small' }, st.scene) : null);
}

function notesRow(notes) {
  if (!notes || !notes.length) return null;
  return h('div', { class: 'notes' }, notes.map((n) => h('span', { class: 'chip ' + (n.kind || 'info') }, n.text)));
}

function paragraphNodes(paragraphs) {
  return paragraphs.map((p) => {
    if (p.speaker) return h('p', { class: 'say ' + (p.cls || '') }, h('span', { class: 'who' }, p.speaker), rich(p.text));
    return h('p', { class: p.cls || '' }, rich(p.text));
  });
}

function d20Face(roll) {
  const cls = roll.crit ? 'crit' : roll.success ? 'ok' : 'fail';
  const box = h('div', { class: `d20 ${cls} rolling`, 'aria-label': `掷出 ${roll.kept}` });
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  const poly = document.createElementNS(svgNS, 'polygon');
  poly.setAttribute('points', '50,3 93,27 93,73 50,97 7,73 7,27');
  poly.setAttribute('stroke-width', '3');
  const inner = document.createElementNS(svgNS, 'polygon');
  inner.setAttribute('points', '50,20 79,68 21,68');
  inner.setAttribute('stroke-width', '1.500');
  inner.setAttribute('fill-opacity', '.25');
  svg.appendChild(poly); svg.appendChild(inner);
  box.appendChild(svg);
  box.appendChild(h('span', null, String(roll.kept)));
  return box;
}

function rollBox(roll) {
  const verdict = roll.divine && roll.success ? '神力所至' : roll.crit ? '大成功！' : roll.fumble ? '大失败！' : roll.success ? '成功' : '失败';
  const cls = roll.crit ? 'crit' : roll.success ? 'ok' : 'fail';
  const parts = [`d20 掷出 ${roll.kept}`];
  if (roll.dice.length > 1) parts[0] = `d20 掷出 ${roll.dice.join(' 与 ')}（${roll.mode === 'adv' ? '优势，取高' : '劣势，取低'} ${roll.kept}）`;
  parts.push(`${roll.label}加值 ${R.fmtMod(roll.bonus)}`);
  for (const m of roll.mods) parts.push(`${m.why || '情境'} ${R.fmtMod(m.n)}`);
  return h('div', { class: 'rollbox' }, d20Face(roll),
    h('div', { class: 'rollinfo' },
      h('div', { class: 'verdict ' + cls }, `${roll.label}检定：${verdict}`),
      h('div', null, `合计 ${roll.total}，难度 ${roll.dc}${roll.isPc ? '' : `（由${roll.who}出手）`}`),
      h('div', { class: 'math' }, parts.join('，'))));
}

function eventView(app, view) {
  const eng = app.engine;
  const st = eng.state;
  const box = h('section', { class: 'frame event' });
  if (view.title) box.appendChild(h('div', { class: 'frame-title' }, view.title));
  const art = paint(h('div', { class: 'event-art' }), view.art);
  if (view.chapter && view.type === 'scene') art.appendChild(h('div', { class: 'chapter' }, view.chapter));
  box.appendChild(art);

  const body = h('div', { class: 'parch event-body' });
  if (view.type === 'result' && view.roll) body.appendChild(rollBox(view.roll));
  for (const n of paragraphNodes(view.paragraphs)) body.appendChild(n);
  const notes = notesRow(view.notes);
  if (notes) body.appendChild(notes);
  if (st.pc.pendingLevels > 0) {
    body.appendChild(h('div', { class: 'notes' }, button('升级！', () => openLevelUp(app), { class: 'primary small', icon: 'star' })));
  }
  box.appendChild(body);

  const act = (fn) => () => { fn(); app.refresh(); scrollToEvent(app); };
  if (view.type === 'result') {
    box.appendChild(h('div', { class: 'continue-row' }, button('继续', act(() => eng.proceed()), { class: 'primary' })));
  } else if (view.fight) {
    box.appendChild(h('div', { class: 'continue-row' }, button(view.fight.label, act(() => eng.proceed()), { class: 'danger', icon: 'sword' })));
  } else if (view.next) {
    box.appendChild(h('div', { class: 'continue-row' }, button('继续', act(() => eng.proceed()), { class: 'primary' })));
  } else if (view.deadEnd) {
    box.appendChild(h('div', { class: 'continue-row' }, button('这条路还没写完——返回上一步', act(() => eng.undo()), { class: 'ghost' })));
  } else {
    const opts = h('div', { class: 'options' });
    if (view.shop) opts.appendChild(h('button', { class: 'opt shop', type: 'button', onclick: () => openShop(app) }, h('span', { class: 'n' }, icon('coin', 14)), h('span', { class: 't' }, `看看${view.shop.name}的货`), h('span', { class: 'meta' }, h('span', null, `${view.shop.stock.length} 样`))));
    view.choices.forEach((c, idx) => opts.appendChild(optionButton(app, c, idx, act)));
    box.appendChild(opts);
  }
  return box;
}

function optionButton(app, c, idx, act) {
  const eng = app.engine;
  const showDc = app.settings.showDc !== false;
  const meta = h('span', { class: 'meta' });
  if (c.check) {
    meta.appendChild(h('span', null, `${c.check.label}${showDc ? ' DC ' + c.check.dc : ''}`));
    if (showDc) {
      const pct = Math.round(c.check.chance * 100);
      meta.appendChild(h('span', { class: 'pct' + (pct < 40 ? ' low' : '') }, `${pct}%${c.check.mode === 'adv' ? ' 优势' : c.check.mode === 'dis' ? ' 劣势' : ''}`));
    }
  }
  if (c.costText) meta.appendChild(h('span', null, c.costText));
  if (c.combat) meta.appendChild(icon('sword', 16));
  const cls = 'opt' + (c.seen ? ' seen' : '') + (c.hiddenByIf ? ' hiddenByIf' : '');
  const go = () => {
    if (app.settings.confirmChoices) confirmDialog(`选择：“${c.text}”？`, act(() => eng.choose(c.i)));
    else act(() => eng.choose(c.i))();
  };
  return h('button', { class: cls, type: 'button', disabled: !!c.disabled, onclick: go },
    h('span', { class: 'n' }, String(idx + 1)),
    h('span', { class: 't' }, c.tag ? h('span', { class: 'tagc' }, `[${c.tag}]`) : null, rich(c.text), c.disabled ? h('span', { class: 'why' }, c.disabled) : null),
    meta.childNodes.length ? meta : null);
}

function openShop(app) {
  const eng = app.engine;
  let tab = 'buy';
  const m = modal({ title: '买卖', content: () => h('div') });
  const draw = () => {
    while (m.body.firstChild) m.body.removeChild(m.body.firstChild);
    const st = eng.state;
    const shop = eng.view().shop;
    if (!shop) { m.close(); return; }
    m.box.querySelector('.modal-head h2').textContent = shop.name;
    if (shop.blurb) m.body.appendChild(h('p', { class: 'muted small' }, shop.blurb));
    m.body.appendChild(h('div', { class: 'row between', style: { marginBottom: '8px' } },
      h('div', { class: 'tabs', style: { margin: 0 } }, h('button', { type: 'button', class: tab === 'buy' ? 'on' : '', onclick: () => { tab = 'buy'; draw(); } }, '买'), shop.buyback ? h('button', { type: 'button', class: tab === 'sell' ? 'on' : '', onclick: () => { tab = 'sell'; draw(); } }, '卖') : null),
      h('span', { class: 'chip gold' }, `${st.gold} ${app.scenario.coin || '金币'}`)));
    const list = h('div', { class: 'list' });
    if (tab === 'buy') {
      for (const it of shop.stock) {
        list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, it.name, it.owned ? h('span', { class: 'muted small' }, `　已有 ${it.owned}`) : null), h('div', { class: 'd' }, it.desc)),
          button(it.price ? `${it.price}` : '白拿', () => { if (eng.buy(it.id)) { toast(`买下了${it.name}`); app.autosave(); draw(); } }, { class: 'small primary', icon: 'coin', disabled: !it.affordable })));
      }
      if (!shop.stock.length) list.appendChild(h('p', { class: 'muted' }, '货架是空的。'));
    } else {
      const ids = Object.keys(st.inv).filter((id) => eng.sellPrice(id) > 0);
      if (!ids.length) list.appendChild(h('p', { class: 'muted' }, '你身上没有他肯收的东西。'));
      for (const id of ids) {
        const it = app.db.items[id];
        list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, it.name, ` ×${st.inv[id]}`), h('div', { class: 'd' }, it.desc || '')),
          button(`卖 ${eng.sellPrice(id)}`, () => { if (eng.sell(id)) { app.autosave(); draw(); } else toast('穿在身上的卖不了', 'bad'); }, { class: 'small' })));
      }
    }
    m.body.appendChild(list);
  };
  const origClose = m.close;
  draw();
  const obs = new MutationObserver(() => { if (!document.body.contains(m.box)) { obs.disconnect(); app.refresh(); } });
  obs.observe(document.body, { childList: true });
  return { close: origClose };
}

function scrollToEvent(app) {
  const el = app.root.querySelector('.event, .combat');
  if (el && window.innerWidth < 1000) window.scrollTo({ top: 0 });
  else window.scrollTo({ top: 0 });
}

function endingView(app, view) {
  const eng = app.engine;
  const st = eng.state;
  const ep = eng.epilogue();
  const box = h('section', { class: 'frame event' });
  box.appendChild(paint(h('div', { class: 'event-art' }), ep.art || view.art));
  box.appendChild(h('div', { class: 'ending-head' }, h('div', { class: 'k' }, '终　章'), h('h2', null, ep.title), ep.subtitle ? h('div', { class: 'muted' }, ep.subtitle) : null));
  const body = h('div', { class: 'parch event-body' });
  for (const n of paragraphNodes(view.paragraphs)) body.appendChild(n);
  for (const n of paragraphNodes(ep.paragraphs)) body.appendChild(n);
  box.appendChild(body);
  for (const s of ep.slides) {
    const sl = h('div', { class: 'parch event-body slide' });
    if (s.title) sl.appendChild(h('h3', null, s.title));
    for (const n of paragraphNodes(s.paragraphs)) sl.appendChild(n);
    box.appendChild(sl);
  }
  const mins = Math.max(1, Math.round((Date.now() - (st.stats.startedAt || Date.now())) / 60000));
  box.appendChild(h('div', { class: 'stats-grid' },
    stat(st.pc.level, '最终等级'), stat(st.stats.scenes, '经历场景'), stat(st.stats.fights, '战斗场次'), stat(st.stats.kills, '击倒敌人'),
    stat(st.stats.checksPassed, '检定成功'), stat(st.stats.checksFailed, '检定失败'), stat(st.stats.nat20, '天然 20'), stat(st.stats.nat1, '天然 1'), stat(mins + ' 分', '游玩时间'),
    stat(st.cheats.used ? '用过' : '没用', '作弊')));
  box.appendChild(h('div', { class: 'continue-row row', style: { gap: '10px', flexWrap: 'wrap' } },
    button('回到上一个抉择', () => { eng.undo(); app.refresh(); }, { class: 'ghost', icon: 'undo', disabled: !eng.canUndo() }),
    button('返回标题', () => app.toTitle(), { class: 'primary' })));
  return box;
}

function stat(v, label) { return h('div', null, h('b', null, String(v)), h('span', null, label)); }

function gameOverView(app, view) {
  const eng = app.engine;
  const box = h('section', { class: 'frame event' });
  box.appendChild(h('div', { class: 'frame-title' }, '全军覆没'));
  const body = h('div', { class: 'parch event-body' });
  body.appendChild(h('p', null, '最后一个还站着的人也倒下了。骰子不总是站在你这边。'));
  body.appendChild(h('p', { class: 'aside' }, '可以退回战斗之前重来，也可以在系统菜单里读取存档，或者干脆打开作弊菜单。'));
  box.appendChild(body);
  box.appendChild(h('div', { class: 'options' },
    button('退回战斗之前', () => { if (eng.undo()) app.refresh(); else toast('没有可以退回的步骤', 'bad'); }, { class: 'primary block', icon: 'undo' }),
    button('读取存档', () => openSystem(app, 'load'), { class: 'block', icon: 'save' }),
    button('作弊菜单', () => openCheats(app), { class: 'block ghost', icon: 'wand' }),
    button('返回标题', () => app.toTitle(), { class: 'block ghost' })));
  return box;
}

// ---------------------------------------------------------------------------
function heroBox(app) {
  const st = app.engine.state;
  const pc = st.pc;
  const cls = app.db.classes[pc.cls];
  const race = app.db.races[pc.race];
  const nextXp = R.XP_TABLE[Math.min(R.MAX_LEVEL, pc.level + 1)];
  const prevXp = R.XP_TABLE[pc.level];
  const box = h('div', { class: 'frame box' },
    h('div', { class: 'hero' }, paintPortrait(h('div', { class: 'portrait' }), pc.portrait),
      h('div', { class: 'grow' }, h('div', { class: 'nm' }, pc.name), h('div', { class: 'sub' }, `${race ? race.name : ''} · ${cls ? cls.name : ''} ${pc.level} 级`),
        st.cheats.ascended ? h('div', { class: 'sub', style: { color: 'var(--gold-hi)' } }, `神格：${divineTitle(st)}`) : st.cheats.immortal ? h('div', { class: 'sub', style: { color: 'var(--gold-hi)' } }, '不死之身') : null)),
    h('div', { class: 'stat-line' }, h('span', null, '生命'), h('span', null, `${pc.hp} / ${pc.maxHp}`)), bar(pc.hp, pc.maxHp),
    pc.level < R.MAX_LEVEL ? [h('div', { class: 'stat-line' }, h('span', null, '经验'), h('span', null, `${pc.xp} / ${nextXp}`)), bar(pc.xp - prevXp, nextXp - prevXp, 'xp thin')] : null);
  if (pc.slotsMax && pc.slotsMax.some((n) => n > 0)) {
    const row = h('div', { class: 'slots', style: { marginTop: '8px', marginBottom: 0 } });
    pc.slotsMax.forEach((mx, i) => { if (mx > 0) row.appendChild(h('span', null, `${i + 1}环`, pips(pc.slots[i], mx))); });
    box.appendChild(row);
  }
  if (pc.pendingLevels > 0) box.appendChild(button('升级！', () => openLevelUp(app), { class: 'primary block small', icon: 'star' }));
  return box;
}

export function pips(cur, max) {
  const el = h('span', { class: 'pips' });
  for (let i = 0; i < max; i++) el.appendChild(h('i', { class: i < cur ? 'on' : '' }));
  return el;
}

function sidebar(app) {
  const st = app.engine.state;
  const side = h('aside', { class: 'side' });
  side.appendChild(heroBox(app));
  if (st.party.length) {
    const box = h('div', { class: 'frame box' }, h('h4', null, '同伴'));
    const list = h('div', { class: 'mini-party' });
    for (const id of st.party) {
      const c = st.companions[id];
      if (!c) continue;
      list.appendChild(h('div', { class: 'm' }, paintPortrait(h('div', { class: 'portrait sm' }), c.portrait),
        h('div', { class: 'grow' }, h('div', null, c.name), bar(c.hp, c.maxHp, 'thin'))));
    }
    box.appendChild(list);
    side.appendChild(box);
  }
  const tracks = (app.scenario.tracks || []).filter((t) => !t.hidden || st.flags[t.revealFlag]);
  if (tracks.length) {
    const box = h('div', { class: 'frame box' }, h('h4', null, '世界局势'));
    for (const t of tracks.slice(0, 5)) box.appendChild(trackRow(t, st.world[t.key] || 0, false));
    side.appendChild(box);
  }
  const btns = h('div', { class: 'side-btns' });
  for (const [id, label, ic] of NAV) btns.appendChild(button(label, () => navAction(app, id), { icon: ic }));
  side.appendChild(h('div', { class: 'frame box' }, btns));
  return side;
}

export function trackRow(t, value, withDesc = true) {
  const min = t.min ?? 0, max = t.max ?? 10;
  let label = '';
  if (t.labels) { const idx = Math.max(0, Math.min(t.labels.length - 1, Math.floor(((value - min) / (max - min || 1)) * t.labels.length))); label = t.labels[idx]; }
  return h('div', { class: 'track' },
    h('div', { class: 'lab' }, h('b', null, t.name), h('span', null, label || String(value))),
    bar(value - min, max - min, 'track thin'),
    withDesc && t.desc ? h('div', { class: 'desc' }, t.desc) : null);
}

const NAV = [
  ['sheet', '角色', 'user'], ['inv', '背包', 'bag'], ['party', '队伍', 'party'],
  ['quests', '任务', 'scroll'], ['codex', '图鉴', 'book'], ['world', '局势', 'globe'],
  ['log', '记录', 'eye'], ['system', '系统', 'gear'], ['cheats', '作弊', 'wand'],
];

function navAction(app, id) {
  if (id === 'system') openSystem(app);
  else if (id === 'cheats') openCheats(app);
  else openPanel(app, id);
}

function bottomNav(app) {
  const st = app.engine.state;
  const nav = h('nav', { class: 'bottom-nav', 'aria-label': '主导航' });
  const items = [['sheet', '角色', 'user'], ['inv', '背包', 'bag'], ['quests', '任务', 'scroll'], ['world', '局势', 'globe'], ['cheats', '作弊', 'wand'], ['system', '系统', 'gear']];
  for (const [id, label, ic] of items) {
    nav.appendChild(h('button', { type: 'button', onclick: () => navAction(app, id) }, icon(ic, 22), h('span', null, label),
      id === 'sheet' && st.pc.pendingLevels > 0 ? h('i', { class: 'dot' }) : null));
  }
  return nav;
}
