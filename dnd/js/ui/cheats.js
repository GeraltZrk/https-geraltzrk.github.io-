// Cheat menu. Everything here is deliberately unrestricted.
import { h, button, modal, toast, field } from './dom.js';
import * as R from '../core/rules.js';
import { refreshDerived, partySheets, setAscended, divineTitle } from '../core/state.js';
import { applyEffects, ensureLevel, levelUp, makeCompanion } from '../core/effects.js';
import * as Combat from '../core/combat.js';

const TABS = [['divine', '神格'], ['toggles', '开关'], ['hero', '角色'], ['items', '物品'], ['world', '世界'], ['party', '队伍'], ['story', '剧情'], ['fight', '战斗']];

export function openCheats(app) {
  if (!app.engine) return null;
  let current = 'divine';
  let filter = '';
  const m = modal({ title: '作弊菜单', wide: true, content: () => h('div') });
  const st = () => app.state;
  const used = () => { st().cheats.used = true; };
  const fx = (list) => { used(); for (const n of applyEffects(list, app.engine.ctx)) toast(n.text, 'cheat'); app.refresh(); };

  const draw = () => {
    while (m.body.firstChild) m.body.removeChild(m.body.firstChild);
    m.body.appendChild(h('div', { class: 'cheat-warn' }, '这里的一切都不受限制：改数值、跳剧情、改世界线都行。用过作弊的存档会在结局统计里标一下，除此之外没有任何惩罚。'));
    const tabs = h('div', { class: 'tabs' });
    for (const [id, label] of TABS) {
      if (id === 'fight' && !(st().combat && !st().combat.over)) continue;
      tabs.appendChild(h('button', { type: 'button', class: id === current ? 'on' : '', onclick: () => { current = id; filter = ''; draw(); } }, label));
    }
    m.body.appendChild(tabs);
    m.body.appendChild({ divine, toggles, hero, items, world, party, story, fight }[current]());
  };

  const sw = (label, desc, key) => h('label', { class: 'switch' }, h('div', null, h('div', null, label), h('div', { class: 'd' }, desc)),
    h('input', { type: 'checkbox', checked: !!st().cheats[key], onchange: (e) => { st().cheats[key] = e.target.checked; used(); app.refresh(); } }));

  const num = (value, onSet, opts = {}) => {
    const input = h('input', { type: 'number', value, min: opts.min, max: opts.max, step: opts.step || 1 });
    const set = () => { const v = Number(input.value); if (!Number.isNaN(v)) { used(); onSet(v); app.refresh(); draw(); } };
    input.addEventListener('change', set);
    return h('div', { class: 'num-row' },
      h('button', { class: 'btn small', type: 'button', onclick: () => { input.value = Number(input.value) - (opts.big || 1); set(); } }, '−'),
      input,
      h('button', { class: 'btn small', type: 'button', onclick: () => { input.value = Number(input.value) + (opts.big || 1); set(); } }, '+'));
  };

  function divine() {
    const s = st();
    const box = h('div', { class: 'list' });
    const DOMAINS = ['战争', '月亮', '太阳', '死亡', '知识', '自由', '丰饶', '风暴', '命运', '匠艺', '盗贼', '骰子'];
    if (s.cheats.ascended) {
      box.appendChild(h('div', { class: 'li on' }, h('div', { class: 'grow' }, h('b', null, `${s.pc.name}，${divineTitle(s)}`),
        h('div', { class: 'd' }, '你现在是神。凡人会跪、会怕、会求你、也会有人想弑神；很多场合多出只有神才有的选项，结局和后日谈也会跟着改写。'))));
    } else {
      box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '升格为神'),
        h('div', { class: 'd' }, '主角获得神格：永生、无敌、检定必成、资源无限，学会神罚、神言、神恩。之后的剧情文本、人物反应、可选项和结局都会把你当神来写。随时可以褪去神性。'))));
    }
    const name = h('input', { type: 'text', maxlength: 14, placeholder: '例如：灰烬行者、骰子之主（留空则用“某某之神”）', value: s.cheats.divineName || '', onchange: (e) => { s.cheats.divineName = e.target.value.trim(); used(); app.refresh(); draw(); } });
    box.appendChild(field('尊号', name));
    const dom = h('select', { onchange: (e) => { s.cheats.divineDomain = e.target.value; used(); app.refresh(); draw(); } },
      [h('option', { value: '', selected: !s.cheats.divineDomain }, '（未定）'), ...DOMAINS.map((d) => h('option', { value: d, selected: s.cheats.divineDomain === d }, d))]);
    box.appendChild(field('神职', dom));
    box.appendChild(h('div', { class: 'row' },
      s.cheats.ascended
        ? button('褪去神性，变回凡人', () => { setAscended(s, app.db, false); app.autosave(); app.refresh(); draw(); toast('神性散了。你又会流血了。', 'cheat'); }, { class: 'danger' })
        : button('升神', () => { if (!s.cheats.divineDomain && !s.cheats.divineName) s.cheats.divineDomain = DOMAINS[Math.floor(Math.random() * DOMAINS.length)]; setAscended(s, app.db, true); app.autosave(); app.refresh(); draw(); toast(`${s.pc.name}成了${divineTitle(s)}`, 'cheat', 3600); }, { class: 'primary', icon: 'star' })));
    box.appendChild(h('div', { class: 'section-title' }, '只要其中一样'));
    box.appendChild(sw('永生', '不升神，只是不会死也不会老。倒下会自己站起来；隔了几十年的剧情里别人老了，你没有。', 'immortal'));
    box.appendChild(sw('无敌', '我方不受任何伤害', 'god'));
    return box;
  }

  function toggles() {
    const s = st();
    const fixed = h('select', { onchange: (e) => { s.cheats.fixedRoll = Number(e.target.value); used(); } },
      [h('option', { value: 0, selected: !s.cheats.fixedRoll }, '关闭（正常掷骰）'), ...Array.from({ length: 20 }, (_, i) => h('option', { value: i + 1, selected: s.cheats.fixedRoll === i + 1 }, `每次都掷出 ${i + 1}`))]);
    return h('div', { class: 'list' },
      sw('无敌', '我方不受任何伤害，也不会中负面状态', 'god'),
      sw('一击必杀', '我方任何一次命中都直接击倒敌人', 'oneHit'),
      sw('无限资源', '法术位、职业资源、消耗品都用不完', 'infRes'),
      sw('检定必成', '所有检定和攻击都当作掷出天然 20', 'autoSuccess'),
      field('固定 d20 点数', fixed),
      sw('解锁全部选项', '无视职业、种族、声望、金钱等一切条件', 'unlockAll'),
      sw('显示隐藏选项', '把本来看不到的选项也列出来（虚线框）', 'revealHidden'),
      sw('跳过战斗', '遭遇战直接判定胜利并拿经验', 'noEncounter'),
      sw('买东西不花钱', '带价格的选项不扣钱', 'freeShop'),
      sw('调试信息', '显示场景编号', 'debug'),
      h('div', { class: 'row' },
        button('全部打开', () => { Object.assign(s.cheats, { god: true, oneHit: true, infRes: true, autoSuccess: true, unlockAll: true, revealHidden: true, freeShop: true }); used(); app.refresh(); draw(); }, { class: 'small' }),
        button('全部关闭', () => { Object.assign(s.cheats, { god: false, oneHit: false, infRes: false, autoSuccess: false, fixedRoll: 0, unlockAll: false, revealHidden: false, noEncounter: false, freeShop: false, debug: false }); app.refresh(); draw(); }, { class: 'small ghost' })));
  }

  function hero() {
    const s = st();
    const pc = s.pc;
    const db = app.db;
    const box = h('div', { class: 'list' });
    const nameInput = h('input', { type: 'text', value: pc.name, maxlength: 16, onchange: (e) => { pc.name = e.target.value.trim() || pc.name; used(); app.refresh(); } });
    box.appendChild(field('名字', nameInput));
    box.appendChild(field('性别称谓', h('select', { onchange: (e) => { pc.gender = e.target.value; used(); app.refresh(); } }, [['m', '他'], ['f', '她']].map(([v, l]) => h('option', { value: v, selected: pc.gender === v }, l)))));
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '等级'), h('div', { class: 'd' }, '调高会补发升级；调低会直接生效')),
      num(pc.level + pc.pendingLevels, (v) => {
        const lv = Math.max(1, Math.min(R.MAX_LEVEL, Math.round(v)));
        if (lv > pc.level + pc.pendingLevels) { ensureLevel(s, db, lv); while (pc.pendingLevels > 0) { const before = pc.level; levelUp(s, db, {}); if (pc.level === before) break; } }
        else if (lv < pc.level) { pc.level = lv; pc.pendingLevels = 0; pc.xp = R.XP_TABLE[lv]; refreshDerived(pc, db, true); for (const id of Object.keys(s.companions)) { s.companions[id].level = lv; refreshDerived(s.companions[id], db, true); } }
      }, { min: 1, max: R.MAX_LEVEL })));
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '经验值')), num(pc.xp, (v) => { pc.xp = Math.max(0, v); const t = R.levelForXp(pc.xp); if (t > pc.level + pc.pendingLevels) pc.pendingLevels += t - pc.level - pc.pendingLevels; }, { big: 500, min: 0 })));
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '生命值'), h('div', { class: 'd' }, `上限 ${pc.maxHp}`)), num(pc.hp, (v) => { pc.hp = Math.max(1, Math.min(pc.maxHp, v)); }, { big: 5, min: 1 })));
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, '额外生命上限')), num(pc.hpBonus || 0, (v) => { pc.hpBonus = v; refreshDerived(pc, db); }, { big: 10 })));
    box.appendChild(h('div', { class: 'section-title' }, '六维属性（1–30）'));
    const grid = h('div', { class: 'abil-grid' });
    for (const a of R.ABILS) {
      grid.appendChild(h('div', { class: 'abil' }, h('span', { class: 'nm' }, R.ABIL_NAMES[a]),
        h('input', { type: 'number', min: 1, max: 30, value: pc.abil[a], style: { textAlign: 'center' }, onchange: (e) => { pc.abil[a] = Math.max(1, Math.min(30, Number(e.target.value) || 10)); refreshDerived(pc, db); used(); app.refresh(); draw(); } }),
        h('span', { class: 'md' }, R.fmtMod(R.abilMod(pc.abil[a])))));
    }
    box.appendChild(grid);
    box.appendChild(h('div', { class: 'row' },
      button('全属性 20', () => { for (const a of R.ABILS) pc.abil[a] = 20; refreshDerived(pc, db, true); used(); app.refresh(); draw(); }, { class: 'small' }),
      button('回满生命与资源', () => fx(['rest long']), { class: 'small' }),
      button('熟练全部技能', () => { pc.profs = Object.keys(R.SKILLS); used(); app.refresh(); toast('已熟练全部技能', 'cheat'); }, { class: 'small' })));
    box.appendChild(h('div', { class: 'section-title' }, '改职业 / 种族'));
    const clsSel = h('select', { onchange: (e) => { pc.cls = e.target.value; pc.subclass = null; pc.uses = {}; refreshDerived(pc, db, true); used(); app.refresh(); draw(); } }, Object.values(db.classes).map((c) => h('option', { value: c.id, selected: pc.cls === c.id }, c.name)));
    box.appendChild(field('职业', clsSel));
    const cls = db.classes[pc.cls];
    if (cls.subclasses && cls.subclasses.length) {
      box.appendChild(field('道路（子职业）', h('select', { onchange: (e) => { pc.subclass = e.target.value || null; refreshDerived(pc, db, true); used(); app.refresh(); } },
        [h('option', { value: '', selected: !pc.subclass }, '（未选）'), ...cls.subclasses.map((x) => h('option', { value: x.id, selected: pc.subclass === x.id }, x.name))])));
    }
    const raceSel = h('select', { onchange: (e) => { pc.race = e.target.value; const r = db.races[pc.race]; pc.subrace = (r.subraces && r.subraces[0] && r.subraces[0].id) || null; refreshDerived(pc, db, true); used(); app.refresh(); draw(); } }, Object.values(db.races).map((r) => h('option', { value: r.id, selected: pc.race === r.id }, r.name)));
    box.appendChild(field('种族（不会重算属性加值）', raceSel));
    box.appendChild(h('div', { class: 'section-title' }, '学会任意能力'));
    const all = Object.values(db.abilities).filter((a) => a.name && !String(a.id).startsWith('item:'));
    const known = R.knownAbilities(pc, db);
    const abSel = h('select', null, all.filter((a) => !known.includes(a.id)).map((a) => h('option', { value: a.id }, `${a.name}${a.kind === 'spell' ? `（${a.level || 0}环）` : ''}`)));
    box.appendChild(h('div', { class: 'row' }, h('div', { class: 'grow' }, abSel), button('学会', () => { if (abSel.value) fx([`learn ${abSel.value}`]); draw(); }, { class: 'small' }),
      button('全学会', () => { for (const a of all) if (!pc.learned.includes(a.id)) pc.learned.push(a.id); refreshDerived(pc, db); used(); app.refresh(); toast('已学会全部能力', 'cheat'); draw(); }, { class: 'small ghost' })));
    return box;
  }

  function items() {
    const s = st();
    const db = app.db;
    const box = h('div', { class: 'list' });
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, app.scenario.coin || '金币')), num(s.gold, (v) => { s.gold = Math.max(0, v); }, { big: 100, min: 0 })));
    box.appendChild(h('div', { class: 'row' }, button('+1000', () => fx(['gold +1000']), { class: 'small' }), button('+10000', () => fx(['gold +10000']), { class: 'small' }),
      button('所有物品各来一份', () => { for (const id of Object.keys(db.items)) if (id !== 'unarmed') s.inv[id] = (s.inv[id] || 0) + 1; used(); app.refresh(); toast('背包塞满了', 'cheat'); draw(); }, { class: 'small ghost' })));
    const search = h('input', { type: 'text', placeholder: '搜索物品名…', value: filter, oninput: (e) => { filter = e.target.value; renderList(); } });
    box.appendChild(search);
    const list = h('div', { class: 'list' });
    const renderList = () => {
      while (list.firstChild) list.removeChild(list.firstChild);
      const ids = Object.keys(db.items).filter((id) => id !== 'unarmed' && (!filter || db.items[id].name.includes(filter) || id.includes(filter))).slice(0, 80);
      for (const id of ids) {
        const it = db.items[id];
        list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, it.name, s.inv[id] ? ` ×${s.inv[id]}` : ''), h('div', { class: 'd' }, it.desc || '')),
          button('+1', () => { fx([`item +${id}`]); renderList(); }, { class: 'small' }), button('+10', () => { fx([`item +${id} 10`]); renderList(); }, { class: 'small ghost' })));
      }
    };
    renderList();
    box.appendChild(list);
    return box;
  }

  function world() {
    const s = st();
    const sc = app.scenario;
    const box = h('div', { class: 'list' });
    box.appendChild(h('div', { class: 'section-title' }, '世界局势'));
    for (const t of sc.tracks || []) box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, t.name), h('div', { class: 'd' }, `${t.min ?? 0} ～ ${t.max ?? 10}`)), num(s.world[t.key] || 0, (v) => { s.world[t.key] = Math.max(t.min ?? -99, Math.min(t.max ?? 99, v)); }, { min: t.min, max: t.max })));
    box.appendChild(h('div', { class: 'section-title' }, '各方声望'));
    for (const f of sc.reputations || []) box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, f.name)), num(s.rep[f.key] || 0, (v) => { s.rep[f.key] = v; })));
    box.appendChild(h('div', { class: 'row' }, button('所有声望拉满', () => { for (const f of sc.reputations || []) s.rep[f.key] = 10; used(); app.refresh(); draw(); }, { class: 'small' })));
    box.appendChild(h('div', { class: 'section-title' }, '剧情标记'));
    const flagInput = h('input', { type: 'text', placeholder: '标记名，例如 met_corin' });
    box.appendChild(h('div', { class: 'row' }, h('div', { class: 'grow' }, flagInput), button('设为真', () => { const k = flagInput.value.trim(); if (k) { s.flags[k] = true; used(); app.refresh(); draw(); } }, { class: 'small' })));
    const known = new Set([...(sc.flagList || []), ...Object.keys(s.flags)]);
    const flagBox = h('div', { class: 'list' });
    for (const k of [...known].sort()) {
      flagBox.appendChild(h('label', { class: 'switch' }, h('div', null, h('div', null, (sc.flagNotes && sc.flagNotes[k]) || k), sc.flagNotes && sc.flagNotes[k] ? h('div', { class: 'd' }, k) : null),
        h('input', { type: 'checkbox', checked: !!s.flags[k], onchange: (e) => { if (e.target.checked) s.flags[k] = true; else delete s.flags[k]; used(); app.refresh(); } })));
    }
    box.appendChild(flagBox);
    const vars = Object.keys(s.vars);
    if (vars.length) { box.appendChild(h('div', { class: 'section-title' }, '计数器')); for (const k of vars) box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, k)), num(s.vars[k], (v) => { s.vars[k] = v; }))); }
    box.appendChild(h('div', { class: 'section-title' }, '日期与地点'));
    box.appendChild(field('日期', h('input', { type: 'text', value: s.date, onchange: (e) => { s.date = e.target.value; used(); app.refresh(); } })));
    box.appendChild(field('地点', h('input', { type: 'text', value: s.location, onchange: (e) => { s.location = e.target.value; used(); app.refresh(); } })));
    return box;
  }

  function party() {
    const s = st();
    const db = app.db;
    const sc = app.scenario;
    const box = h('div', { class: 'list' });
    const ids = Object.keys(sc.companions || {});
    if (!ids.length) box.appendChild(h('p', { class: 'muted' }, '这个剧本没有可招募的同伴。'));
    for (const id of ids) {
      const def = db.companions[id];
      const c = s.companions[id];
      const inParty = s.party.includes(id);
      box.appendChild(h('div', { class: 'li' + (inParty ? ' on' : '') }, h('div', { class: 'grow' }, h('b', null, def.name), h('div', { class: 'd' }, def.blurb || ''), c ? h('div', { class: 'd' }, `好感 ${c.approval || 0}`) : null),
        c ? num(c.approval || 0, (v) => { c.approval = v; }) : null,
        inParty ? button('请离', () => { fx([`companion -${id}`]); draw(); }, { class: 'small ghost' })
          : button('入队', () => { if (!s.companions[id]) s.companions[id] = makeCompanion(db, def, s.pc.level); s.companions[id].gone = false; fx([`companion +${id}`]); draw(); }, { class: 'small' })));
    }
    box.appendChild(h('div', { class: 'row' }, button('全队回满', () => { for (const ch of partySheets(s)) { ch.hp = ch.maxHp; ch.down = false; } fx(['rest long']); }, { class: 'small' }),
      button('所有同伴好感 +5', () => { for (const id of Object.keys(s.companions)) s.companions[id].approval = (s.companions[id].approval || 0) + 5; used(); app.refresh(); draw(); }, { class: 'small' })));
    return box;
  }

  function story() {
    const s = st();
    const sc = app.scenario;
    const eng = app.engine;
    const box = h('div', { class: 'list' });
    const jump = (id) => { used(); eng.snapshot(); s.combat = null; s.phase = 'scene'; eng.enter(id); m.close(); app.refresh(); window.scrollTo(0, 0); toast('已跳转', 'cheat'); };
    box.appendChild(h('div', { class: 'row' }, button('退回上一步', () => { if (eng.undo()) { app.refresh(); toast('已退回', 'cheat'); } }, { class: 'small', icon: 'undo', disabled: !eng.canUndo() }),
      button('完成所有进行中的任务', () => { for (const id of Object.keys(s.quests)) if (!s.quests[id].failed) s.quests[id].done = true; used(); app.refresh(); toast('任务全部完成', 'cheat'); }, { class: 'small' }),
      button('解锁全部图鉴', () => { for (const id of Object.keys(Object.assign({}, app.db.codex, sc.codex))) s.codex[id] = true; used(); app.autosave(); toast('图鉴已全部解锁', 'cheat'); }, { class: 'small' })));
    if (sc.chapters && sc.chapters.length) {
      box.appendChild(h('div', { class: 'section-title' }, '跳到章节'));
      for (const ch of sc.chapters) {
        if (ch.if && !eng.test(ch.if)) continue;
        box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, ch.title), h('div', { class: 'd' }, ch.note || '')),
          button('跳转', () => { if (ch.effects) applyEffects(ch.effects, eng.ctx); jump(ch.scene); }, { class: 'small' })));
      }
    }
    if (sc.endingScenes) {
      box.appendChild(h('div', { class: 'section-title' }, '直接看结局'));
      for (const id of Object.keys(sc.endingScenes)) {
        const def = (sc.endings || {})[id] || { title: id };
        box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, def.title), h('div', { class: 'd' }, def.subtitle || '')), button('前往', () => jump(sc.endingScenes[id]), { class: 'small' })));
      }
    }
    box.appendChild(h('div', { class: 'section-title' }, '跳到任意场景'));
    const search = h('input', { type: 'text', placeholder: '输入场景编号或标题里的字…', value: filter, oninput: (e) => { filter = e.target.value; renderList(); } });
    box.appendChild(search);
    const list = h('div', { class: 'list' });
    const renderList = () => {
      while (list.firstChild) list.removeChild(list.firstChild);
      if (!filter) { list.appendChild(h('p', { class: 'muted small' }, `共 ${Object.keys(sc.scenes).length} 个场景，输入关键字查找。当前：${s.scene}`)); return; }
      const hits = Object.values(sc.scenes).filter((x) => x.id.includes(filter) || (x.title && x.title.includes(filter)) || (x.loc && x.loc.includes(filter))).slice(0, 40);
      for (const x of hits) list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, x.title || x.id), h('div', { class: 'd' }, `${x.id}　${x.loc || ''}`)), button('跳转', () => jump(x.id), { class: 'small' })));
    };
    renderList();
    box.appendChild(list);
    return box;
  }

  function fight() {
    const ctx = app.engine.ctx;
    const c = st().combat;
    const box = h('div', { class: 'list' });
    box.appendChild(h('div', { class: 'row' },
      button('直接获胜', () => { used(); Combat.cheatWin(ctx); m.close(); app.refresh(); }, { class: 'primary' }),
      button('全队回满', () => { used(); Combat.cheatHealAll(ctx); app.refresh(); draw(); }, {}),
      button('清除我方负面状态', () => { used(); for (const u of Combat.unitsOf(c, 'ally')) u.conds = u.conds.filter((x) => !(app.db.conditions[x.id] || {}).bad); app.refresh(); }, {})));
    box.appendChild(h('div', { class: 'section-title' }, '敌人'));
    for (const u of Combat.unitsOf(c, 'enemy')) {
      box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, u.name), h('div', { class: 'd' }, u.dead ? '已倒下' : `生命 ${u.hp}/${u.maxHp}`)),
        u.dead ? null : button('剩 1 血', () => { used(); u.hp = 1; app.refresh(); draw(); }, { class: 'small' })));
    }
    return box;
  }

  draw();
  return m;
}
