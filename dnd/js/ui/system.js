// System menu: save / load / settings / about.
import { h, button, modal, toast, confirmDialog, field } from './dom.js';
import * as State from '../core/state.js';
import { CREDITS } from '../data/credits.js';

const SLOTS = ['1', '2', '3', '4', '5', '6'];

function fmtWhen(ts) {
  const d = new Date(ts);
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function saveLine(app, info) {
  if (!info) return '（空）';
  const cls = app.db.classes[info.cls];
  return `${info.name} · ${cls ? cls.name : ''} ${info.level} 级　${info.location || ''}`;
}

export function openSystem(app, tab = 'main') {
  let current = tab;
  const inGame = !!app.engine;
  const m = modal({ title: '系统', content: () => h('div') });
  const draw = () => {
    while (m.body.firstChild) m.body.removeChild(m.body.firstChild);
    const tabs = h('div', { class: 'tabs' });
    const names = [['main', '菜单'], ['save', '存档'], ['load', '读档'], ['settings', '设置'], ['about', '关于']].filter((t) => inGame || !['main', 'save'].includes(t[0]));
    if (!names.find((n) => n[0] === current)) current = names[0][0];
    for (const [id, label] of names) tabs.appendChild(h('button', { type: 'button', class: id === current ? 'on' : '', onclick: () => { current = id; draw(); } }, label));
    m.body.appendChild(tabs);
    m.body.appendChild({ main: mainTab, save: saveTab, load: loadTab, settings: settingsTab, about: aboutTab }[current]());
  };

  const mainTab = () => h('div', { class: 'list' },
    button('继续游戏', m.close, { class: 'primary block' }),
    button('回到上一步', () => { if (app.engine.undo()) { m.close(); app.refresh(); toast('已回到上一步'); } else toast('已经是最早可返回的位置。', 'bad'); }, { class: 'block', icon: 'undo', disabled: !app.engine.canUndo() }),
    button('存档', () => { current = 'save'; draw(); }, { class: 'block', icon: 'save' }),
    button('读档', () => { current = 'load'; draw(); }, { class: 'block' }),
    button('设置', () => { current = 'settings'; draw(); }, { class: 'block', icon: 'gear' }),
    button('返回主菜单', () => confirmDialog('回到主菜单？当前进度已自动保存。', () => { m.close(); app.toTitle(); }), { class: 'block ghost' }));

  const saveTab = () => {
    const saves = State.listSaves();
    const box = h('div', { class: 'list' });
    for (const s of SLOTS) {
      const info = saves.find((x) => x.slot === s);
      box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, `存档 ${s}`), h('div', { class: 'd' }, saveLine(app, info)), info ? h('div', { class: 'd' }, `${info.title || ''}　${fmtWhen(info.when)}`) : null),
        button('保存', () => { const go = () => { app.save(s); draw(); }; if (info) confirmDialog(`覆盖存档 ${s}？`, go); else go(); }, { class: 'small primary' })));
    }
    box.appendChild(h('div', { class: 'section-title' }, '导出存档码以便换设备继续'));
    const ta = h('textarea', { readonly: true, onfocus: (e) => e.target.select() });
    ta.value = State.exportCode(app.state);
    box.appendChild(ta);
    box.appendChild(button('复制存档码', async () => { try { await navigator.clipboard.writeText(ta.value); toast('已复制'); } catch (e) { ta.select(); toast('请选中文本框中的存档码并复制。'); } }, { class: 'block' }));
    return box;
  };

  const loadTab = () => {
    const saves = State.listSaves();
    const box = h('div', { class: 'list' });
    const order = ['auto', ...SLOTS];
    let any = false;
    for (const s of order) {
      const info = saves.find((x) => x.slot === s);
      if (!info) continue;
      any = true;
      box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, s === 'auto' ? '自动存档' : `存档 ${s}`), h('div', { class: 'd' }, saveLine(app, info)), h('div', { class: 'd' }, `${info.title || ''}　${fmtWhen(info.when)}`)),
        button('读取', async () => { const ok = await app.resume(State.loadSlot(s)); if (ok) { m.close(); toast('已读取'); } }, { class: 'small primary' }),
        s !== 'auto' ? button('删除', () => confirmDialog(`删除存档 ${s}？`, () => { State.deleteSlot(s); draw(); }), { class: 'small ghost' }) : null));
    }
    if (!any) box.appendChild(h('p', { class: 'muted' }, '暂无可读取的存档。'));
    box.appendChild(h('div', { class: 'section-title' }, '导入存档码'));
    const ta = h('textarea', { placeholder: '在此粘贴已导出的存档码' });
    box.appendChild(ta);
    box.appendChild(button('导入并载入游戏', async () => { const st = State.importCode(ta.value); if (!st) { toast('未能识别存档码，请检查是否复制完整。', 'bad'); return; } const ok = await app.resume(st); if (ok) { m.close(); toast('已读取'); } }, { class: 'block' }));
    return box;
  };

  const toggle = (label, desc, key) => {
    const input = h('input', { type: 'checkbox', checked: !!app.settings[key], onchange: (e) => { app.settings[key] = e.target.checked; app.applySettings(); if (app.engine) app.engine.manualCompanions = !app.settings.autoCompanions; app.refresh(); } });
    return h('label', { class: 'switch' }, h('div', null, h('div', null, label), h('div', { class: 'd' }, desc)), input);
  };
  const settingsTab = () => {
    const size = h('select', { onchange: (e) => { app.settings.textSize = e.target.value; app.applySettings(); } },
      [['s', '小'], ['m', '标准'], ['l', '大'], ['xl', '特大']].map(([v, l]) => h('option', { value: v, selected: app.settings.textSize === v }, l)));
    const box = h('div', { class: 'list' }, field('正文字号', size),
      toggle('预览检定难度和成功率', '在选项旁显示需要达到的点数（DC）和预计成功率。', 'showDc'),
      toggle('同伴自动行动', '关闭后，你将在战斗中逐个指挥同伴。', 'autoCompanions'),
      toggle('点击剧情选项后再次确认', '开启后，需要确认才会执行选项。', 'confirmChoices'),
      toggle('减少动态效果', '关闭骰子翻滚等动画。', 'reducedMotion'));
    if (inGame) {
      const diff = h('select', { onchange: (e) => { app.state.difficulty = e.target.value; toast('难度已调整'); } },
        [['story', '故事（轻松）'], ['normal', '标准'], ['hard', '硬核']].map(([v, l]) => h('option', { value: v, selected: app.state.difficulty === v }, l)));
      box.appendChild(field('战斗难度', diff));
    }
    return box;
  };

  const aboutTab = () => {
    const box = h('div', { class: 'codex-entry' });
    const body = h('div', { class: 'body' });
    for (const sec of CREDITS) { body.appendChild(h('h3', { style: { fontSize: '16px', marginTop: '10px' } }, sec.title)); for (const p of sec.text) body.appendChild(h('p', null, p)); }
    box.appendChild(body);
    return box;
  };

  if (app.settings.showDc === undefined) app.settings.showDc = true;
  draw();
  return m;
}
