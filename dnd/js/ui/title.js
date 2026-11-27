// Title screen.
import { h, button } from './dom.js';
import * as State from '../core/state.js';
import { openSystem } from './system.js';
import { setBackdrop } from './art.js';
import { GAME } from '../data/credits.js';

export function renderTitle(app) {
  setBackdrop('title');
  const saves = State.listSaves();
  const latest = saves.slice().sort((a, b) => b.when - a.when)[0];
  const endings = Object.keys(app.meta.endings || {}).length;
  const menu = h('div', { class: 'title-menu' });
  if (latest) {
    menu.appendChild(button('继续上次游戏', async () => { await app.resume(State.loadSlot(latest.slot)); }, { class: 'primary' }));
  }
  menu.appendChild(button('开始新游戏', () => app.show('new', { step: 0 }), { class: latest ? '' : 'primary' }));
  menu.appendChild(button('读取存档', () => openSystem(app, 'load'), { disabled: !saves.length }));
  menu.appendChild(button('设置', () => openSystem(app, 'settings')));
  menu.appendChild(button('关于游戏与致谢', () => openSystem(app, 'about'), { class: 'ghost' }));
  return h('div', { class: 'title-screen' },
    h('div', { class: 'logo' },
      h('div', { class: 'over' }, GAME.over),
      h('h1', null, GAME.title),
      h('div', { class: 'sub' }, GAME.subtitle),
      h('div', { class: 'rule' })),
    menu,
    latest ? h('div', { class: 'muted small' }, `上次游玩：${latest.name}，${latest.location || latest.title || ''}`) : null,
    endings ? h('div', { class: 'muted small' }, `已见证 ${endings} 个结局`) : null,
    h('div', { class: 'title-foot' }, GAME.disclaimer));
}
