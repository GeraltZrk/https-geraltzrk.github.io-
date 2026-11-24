// In-game panels: character sheet, inventory, party, quests, codex, world state, log.
import { h, rich, button, bar, modal, toast, icon } from './dom.js';
import { paintPortrait, paint } from './art.js';
import * as R from '../core/rules.js';
import { partySheets, characterTags } from '../core/state.js';
import { equipItem, unequip, applyEffects } from '../core/effects.js';
import { trackRow, pips } from './play.js';
import { openLevelUp } from './levelup.js';

const TABS = [['sheet', '角色'], ['inv', '背包'], ['party', '队伍'], ['quests', '任务'], ['codex', '图鉴'], ['world', '局势'], ['log', '记录']];
const SLOT_NAMES = { weapon: '武器', offhand: '副手', armor: '护甲', trinket: '饰品' };

export function openPanel(app, tab = 'sheet') {
  let current = tab;
  let who = 'pc';
  const m = modal({ title: '', wide: true, content: () => h('div') });
  const draw = () => {
    while (m.body.firstChild) m.body.removeChild(m.body.firstChild);
    m.box.querySelector('.modal-head h2').textContent = TABS.find((t) => t[0] === current)[1];
    const tabs = h('div', { class: 'tabs' });
    for (const [id, label] of TABS) tabs.appendChild(h('button', { type: 'button', class: id === current ? 'on' : '', onclick: () => { current = id; draw(); } }, label));
    m.body.appendChild(tabs);
    const ctx = { app, redraw: draw, close: m.close, who, setWho: (w) => { who = w; draw(); } };
    const fn = { sheet: sheetTab, inv: invTab, party: partyTab, quests: questTab, codex: codexTab, world: worldTab, log: logTab }[current];
    m.body.appendChild(fn(ctx));
  };
  draw();
  return m;
}

function sheetOfWho(app, who) { return who === 'pc' ? app.state.pc : app.state.companions[who]; }

function whoPicker(ctx) {
  const st = ctx.app.state;
  if (!st.party.length) return null;
  const row = h('div', { class: 'tabs' });
  const mk = (id, name) => h('button', { type: 'button', class: ctx.who === id ? 'on' : '', onclick: () => ctx.setWho(id) }, name);
  row.appendChild(mk('pc', st.pc.name));
  for (const id of st.party) if (st.companions[id]) row.appendChild(mk(id, st.companions[id].name));
  return row;
}

function sheetTab(ctx) {
  const { app } = ctx;
  const db = app.db;
  const ch = sheetOfWho(app, ctx.who) || app.state.pc;
  const pas = R.passivesOf(ch, db);
  const cls = db.classes[ch.cls];
  const race = db.races[ch.race];
  const sub = cls && cls.subclasses && cls.subclasses.find((s) => s.id === ch.subclass);
  const sr = race && race.subraces && race.subraces.find((s) => s.id === ch.subrace);
  const bg = db.backgrounds && db.backgrounds[ch.background];
  const box = h('div');
  const picker = whoPicker(ctx);
  if (picker) box.appendChild(picker);
  box.appendChild(h('div', { class: 'hero', style: { marginBottom: '10px' } }, paintPortrait(h('div', { class: 'portrait lg' }), ch.portrait),
    h('div', { class: 'grow' }, h('div', { class: 'nm', style: { fontSize: '20px' } }, ch.name),
      h('div', { class: 'sub' }, [sr ? sr.name : race ? race.name : '', cls ? cls.name : '', sub ? sub.name : '', bg ? bg.name : ''].filter(Boolean).join(' · ')),
      h('div', { class: 'sub' }, `${ch.level} 级　熟练加值 ${R.fmtMod(R.profBonus(ch.level))}`),
      ch === app.state.pc && ch.pendingLevels > 0 ? button('升级！', () => { ctx.close(); openLevelUp(app); }, { class: 'primary small', icon: 'star' }) : null)));
  const prof = R.weaponProfile(ch, db, pas);
  box.appendChild(h('div', { class: 'kv' },
    kv('生命', `${ch.hp}/${ch.maxHp}`), kv('护甲等级', R.armorClass(ch, db, pas)), kv('先攻', R.fmtMod(R.abilMod(R.abilScore(ch, 'dex', pas)) + pas.init)),
    kv('攻击', `${prof.name} ${R.fmtMod(prof.hit)}`), kv('伤害', `${prof.dmg}${R.fmtMod(prof.dmgBonus)}`),
    cls && cls.spellAbility ? kv('法术豁免 DC', R.spellDc(ch, db, pas)) : null, cls && cls.spellAbility ? kv('法术攻击', R.fmtMod(R.spellAttack(ch, db, pas))) : null));
  if (ch.slotsMax && ch.slotsMax.some((n) => n > 0)) {
    const row = h('div', { class: 'slots', style: { marginTop: '10px' } }, h('span', null, '法术位'));
    ch.slotsMax.forEach((mx, i) => { if (mx > 0) row.appendChild(h('span', null, `${i + 1}环`, pips(ch.slots[i], mx))); });
    box.appendChild(row);
  }
  const resKeys = Object.keys(ch.res || {}).filter((k) => ch.res[k].max > 0);
  if (resKeys.length) box.appendChild(h('div', { class: 'kv', style: { marginTop: '8px' } }, resKeys.map((k) => kv(ch.res[k].name, `${ch.res[k].cur}/${ch.res[k].max}`))));

  box.appendChild(h('div', { class: 'section-title' }, '属性'));
  const ag = h('div', { class: 'abil-grid' });
  for (const a of R.ABILS) { const s = R.abilScore(ch, a, pas); ag.appendChild(h('div', { class: 'abil' }, h('span', { class: 'nm' }, R.ABIL_NAMES[a]), h('b', null, String(s)), h('span', { class: 'md' }, R.fmtMod(R.abilMod(s))))); }
  box.appendChild(ag);

  box.appendChild(h('div', { class: 'section-title' }, '技能'));
  const sk = h('div', { class: 'kv' });
  for (const id of Object.keys(R.SKILLS)) sk.appendChild(h('div', { class: (ch.profs || []).includes(id) ? 'prof' : '' }, h('span', null, R.SKILLS[id].name), h('b', null, R.fmtMod(R.skillBonus(ch, db, id, pas)))));
  box.appendChild(sk);

  box.appendChild(h('div', { class: 'section-title' }, '能力与特性'));
  const list = h('div', { class: 'list' });
  const feats = R.knownAbilities(ch, db);
  if (race && race.trait) list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, `种族：${race.name}`), h('div', { class: 'd' }, race.trait))));
  for (const id of feats) {
    const a = db.abilities[id];
    list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, a.name, a.kind === 'spell' ? h('span', { class: 'muted small' }, a.level ? `　${a.level}环法术` : '　戏法') : null), h('div', { class: 'd' }, a.desc || ''))));
  }
  if (!list.childNodes.length) list.appendChild(h('p', { class: 'muted' }, '暂无。'));
  box.appendChild(list);
  if (ch.bio) { box.appendChild(h('div', { class: 'section-title' }, '来历')); box.appendChild(h('p', { class: 'small', style: { lineHeight: 1.8 } }, ch.bio)); }
  return box;
}

function kv(k, v) { return h('div', null, h('span', null, k), h('b', null, String(v))); }

function invTab(ctx) {
  const { app } = ctx;
  const st = app.state;
  const db = app.db;
  const ch = sheetOfWho(app, ctx.who) || st.pc;
  const box = h('div');
  const picker = whoPicker(ctx);
  if (picker) box.appendChild(picker);
  box.appendChild(h('div', { class: 'row between', style: { marginBottom: '8px' } }, h('span', null, `${ch.name} 的装备`), h('span', { class: 'chip gold' }, `${st.gold} ${app.scenario.coin || '金币'}`)));
  const eq = h('div', { class: 'list' });
  for (const slot of Object.keys(SLOT_NAMES)) {
    const it = ch.equip[slot] && db.items[ch.equip[slot]];
    eq.appendChild(h('div', { class: 'li' }, h('span', { class: 'chip gold' }, SLOT_NAMES[slot]), h('div', { class: 'grow' }, h('b', null, it ? it.name : '（空）'), it ? h('div', { class: 'd' }, itemLine(it)) : null),
      it ? button('卸下', () => { unequip(st, db, ch, slot); ctx.redraw(); app.refresh(); }, { class: 'small ghost' }) : null));
  }
  box.appendChild(eq);
  box.appendChild(h('div', { class: 'section-title' }, '背包'));
  const list = h('div', { class: 'list' });
  const equippedBy = (id) => partySheets(st).filter((c) => Object.values(c.equip).includes(id)).length;
  const ids = Object.keys(st.inv).filter((id) => st.inv[id] > 0);
  if (!ids.length) list.appendChild(h('p', { class: 'muted' }, '空空如也。'));
  for (const id of ids) {
    const it = db.items[id] || { name: id, desc: '' };
    const free = st.inv[id] - equippedBy(id);
    const canEquip = (it.weapon || it.armor || it.shield || it.slot) && free > 0;
    const canUse = it.use && it.use.outside !== false && (it.use.heal || it.use.effects || it.use.cleanse);
    list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, it.name, st.inv[id] > 1 ? ` ×${st.inv[id]}` : ''), h('div', { class: 'd' }, [itemLine(it), it.desc].filter(Boolean).join('　'))),
      canEquip ? button('装备', () => { if (!equipItem(st, db, ch, id)) toast('现在装备不了（双手武器不能配副手）', 'bad'); ctx.redraw(); app.refresh(); }, { class: 'small' }) : null,
      canUse ? button('使用', () => { useOutside(app, ch, id); ctx.redraw(); app.refresh(); }, { class: 'small' }) : null));
  }
  box.appendChild(list);
  return box;
}

function useOutside(app, ch, id) {
  const st = app.state;
  const it = app.db.items[id];
  if (!it || !it.use) return;
  if (it.use.heal) {
    if (ch.hp >= ch.maxHp) { toast(`${ch.name}没有受伤`); return; }
    const r = R.rollDice(it.use.heal, { lvl: ch.level, mod: 0 });
    ch.hp = Math.min(ch.maxHp, ch.hp + r.total);
    toast(`${ch.name}恢复了 ${r.total} 点生命`);
  }
  if (it.use.effects) for (const n of applyEffects(it.use.effects, app.engine.ctx)) toast(n.text);
  st.inv[id] -= 1;
  if (st.inv[id] <= 0) delete st.inv[id];
}

function itemLine(it) {
  const parts = [];
  if (it.weapon) parts.push(`伤害 ${it.weapon.dmg}${it.weapon.bonus ? ' +' + it.weapon.bonus : ''}${(it.weapon.props || []).includes('two_handed') ? '　双手' : ''}${(it.weapon.props || []).includes('finesse') ? '　灵巧' : ''}${(it.weapon.props || []).includes('ranged') ? '　远程' : ''}`);
  if (it.armor) parts.push(`护甲 ${it.armor.base}${it.armor.dexCap === 0 ? '' : it.armor.dexCap ? `（敏捷至多 +${it.armor.dexCap}）` : ' + 敏捷'}`);
  if (it.shield) parts.push(`护甲 +${it.shield}`);
  if (it.use && it.use.heal) parts.push(`恢复 ${it.use.heal}`);
  if (it.value) parts.push(`价值 ${it.value}`);
  return parts.join('　');
}

function partyTab(ctx) {
  const { app } = ctx;
  const st = app.state;
  const box = h('div', { class: 'list' });
  const known = Object.keys(st.companions);
  if (!known.length) return h('p', { class: 'muted' }, '你现在独自上路。旅途中会遇到愿意同行的人。');
  for (const id of known) {
    const c = st.companions[id];
    const def = app.db.companions[id] || {};
    const inParty = st.party.includes(id);
    const cls = app.db.classes[c.cls];
    const race = app.db.races[c.race];
    const mood = c.approval >= 6 ? '生死之交' : c.approval >= 3 ? '信任你' : c.approval >= 0 ? '同路人' : c.approval >= -3 ? '心存芥蒂' : '快要翻脸';
    box.appendChild(h('div', { class: 'li' + (inParty ? ' on' : '') }, paintPortrait(h('div', { class: 'portrait' }), c.portrait),
      h('div', { class: 'grow' }, h('b', null, c.name), h('div', { class: 'd' }, `${race ? race.name : ''} · ${cls ? cls.name : ''} ${c.level} 级　${c.gone ? '已离开' : inParty ? '同行中' : '不在队中'}`),
        h('div', { class: 'd' }, def.blurb || ''), h('div', { class: 'd' }, `态度：${mood}`), bar(c.hp, c.maxHp, 'thin'))));
  }
  return box;
}

function questTab(ctx) {
  const { app } = ctx;
  const st = app.state;
  const defs = app.scenario.quests || {};
  const ids = Object.keys(st.quests).filter((id) => st.quests[id].stage > 0 || st.quests[id].done);
  if (!ids.length) return h('p', { class: 'muted' }, '还没有接到任何差事。');
  const box = h('div', { class: 'list' });
  const order = (q) => (q.done ? 2 : q.failed ? 3 : 1);
  ids.sort((a, b) => order(st.quests[a]) - order(st.quests[b]));
  for (const id of ids) {
    const q = st.quests[id];
    const def = defs[id] || { title: id };
    const stageText = def.stages && def.stages[Math.min(q.stage, def.stages.length) - 1];
    box.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' },
      h('b', null, def.title, q.done ? h('span', { class: 'chip good', style: { marginLeft: '8px' } }, '完成') : q.failed ? h('span', { class: 'chip bad', style: { marginLeft: '8px' } }, '失败') : null),
      h('div', { class: 'd' }, q.done && def.doneText ? def.doneText : stageText || def.desc || ''))));
  }
  return box;
}

function codexTab(ctx) {
  const { app } = ctx;
  const st = app.state;
  const all = Object.assign({}, app.db.codex || {}, app.scenario.codex || {});
  const ids = Object.keys(all).filter((id) => st.codex[id]);
  const total = Object.keys(all).length;
  const box = h('div');
  box.appendChild(h('p', { class: 'muted small' }, `已收录 ${ids.length} / ${total} 条。旅途中的见闻会自动记进来。`));
  if (!ids.length) return box;
  const groups = {};
  for (const id of ids) { const g = all[id].group || '见闻'; (groups[g] = groups[g] || []).push(id); }
  for (const g of Object.keys(groups)) {
    box.appendChild(h('div', { class: 'section-title' }, g));
    const list = h('div', { class: 'pick-list' });
    for (const id of groups[g]) list.appendChild(h('button', { class: 'pick', type: 'button', onclick: () => openCodexEntry(app, all[id]) }, h('b', null, all[id].title), h('span', null, all[id].short || '')));
    box.appendChild(list);
  }
  return box;
}

export function openCodexEntry(app, e) {
  modal({
    title: e.title,
    content: () => {
      const box = h('div', { class: 'codex-entry' });
      if (e.art) box.appendChild(paint(h('div', { class: 'event-art', style: { marginBottom: '10px', border: '1px solid var(--gold-lo)' } }), e.art));
      const body = h('div', { class: 'body' });
      for (const p of (Array.isArray(e.text) ? e.text : [e.text])) body.appendChild(h('p', null, rich(p)));
      box.appendChild(body);
      return box;
    },
  });
}

function worldTab(ctx) {
  const { app } = ctx;
  const st = app.state;
  const box = h('div');
  const tracks = (app.scenario.tracks || []).filter((t) => !t.hidden || st.flags[t.revealFlag]);
  box.appendChild(h('div', { class: 'section-title' }, '世界局势'));
  if (!tracks.length) box.appendChild(h('p', { class: 'muted' }, '风还没起。'));
  for (const t of tracks) box.appendChild(trackRow(t, st.world[t.key] || 0, true));
  const reps = app.scenario.reputations || [];
  if (reps.length) {
    box.appendChild(h('div', { class: 'section-title' }, '各方态度'));
    const list = h('div', { class: 'list' });
    for (const f of reps) {
      const v = st.rep[f.key] || 0;
      const word = v >= 6 ? '奉为上宾' : v >= 3 ? '友善' : v >= 1 ? '有些好感' : v === 0 ? '不认识你' : v >= -2 ? '冷淡' : v >= -5 ? '敌视' : '悬赏捉拿';
      list.appendChild(h('div', { class: 'li' }, h('div', { class: 'grow' }, h('b', null, f.name), h('div', { class: 'd' }, f.desc || '')), h('span', { class: 'chip ' + (v > 0 ? 'good' : v < 0 ? 'bad' : 'info') }, `${word}（${R.fmtMod(v)}）`)));
    }
    box.appendChild(list);
  }
  const tags = characterTags(st.pc, app.db);
  box.appendChild(h('div', { class: 'section-title' }, '你的身份'));
  const origin = (app.scenario.origins || []).find((o) => o.id === st.origin);
  const faction = (app.scenario.factions || []).find((f) => f.id === st.faction);
  box.appendChild(h('div', { class: 'kv' }, kv('剧本', app.scenario.title), origin ? kv('出身', origin.name) : null, faction ? kv('阵营', faction.name) : null, kv('日期', st.date || '—')));
  if (st.cheats.debug) box.appendChild(h('p', { class: 'muted small' }, 'tags: ' + tags.join(', ')));
  return box;
}

function logTab(ctx) {
  const { app } = ctx;
  const st = app.state;
  const box = h('div', { class: 'list' });
  const items = st.log.slice(-80).reverse();
  if (!items.length) return h('p', { class: 'muted' }, '还没有记录。');
  for (const l of items) box.appendChild(h('div', { class: 'li' }, icon(l.t === 'choice' ? 'next' : 'scroll', 16), h('div', { class: 'grow' }, h('div', null, l.text), h('div', { class: 'd' }, l.date || ''))));
  return box;
}
