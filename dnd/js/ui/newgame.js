// New-game wizard: 剧本 → 国家/出身 → 阵营 → 人物 → 确认.
import { h, button, icon, toast, field } from './dom.js';
import { paint, paintFlag, paintPortrait, portraitsFor, setBackdrop } from './art.js';
import * as R from '../core/rules.js';
import { buildCharacter, defaultCheats } from '../core/state.js';

const STEPS = ['剧本', '出身', '阵营', '角色', '出发'];
const COST = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
const ARRAY = [15, 14, 13, 12, 10, 8];

function blankCustom() {
  return { race: null, subrace: null, cls: null, background: null, abil: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 }, method: 'buy', profs: [], name: '', gender: 'm', portrait: null };
}

export function renderNewGame(app) {
  const p = app.params;
  p.step = p.step || 0;
  p.custom = p.custom || blankCustom();
  p.difficulty = p.difficulty || 'normal';
  p.cheats = p.cheats || defaultCheats();
  const sc = p.scenarioId ? app.loaded[p.scenarioId] : null;
  const go = (step, patch) => { Object.assign(p, patch || {}); p.step = step; app.show('new', p); };
  const page = h('div', { class: 'page' });
  page.appendChild(h('div', { class: 'page-head' },
    h('button', { class: 'icon-btn', type: 'button', 'aria-label': '返回', onclick: () => (p.step === 0 ? app.toTitle() : go(p.step - 1)) }, icon('back')),
    h('h2', null, ['选择剧本', '选择出身', '选择阵营', '选择角色', '确认并出发'][p.step])));
  page.appendChild(h('div', { class: 'steps' }, STEPS.map((s, i) => h('span', { class: i === p.step ? 'on' : i < p.step ? 'done' : '' }, `${i + 1} ${s}`))));

  if (p.step === 0) page.appendChild(stepScenario(app, p, go));
  else if (!sc) { go(0); return page; }
  else if (p.step === 1) page.appendChild(stepOrigin(app, p, sc, go));
  else if (p.step === 2) page.appendChild(stepFaction(app, p, sc, go));
  else if (p.step === 3) page.appendChild(stepCharacter(app, p, sc, go));
  else page.appendChild(stepConfirm(app, p, sc, go));
  return page;
}

function stepScenario(app, p, go) {
  const cards = h('div', { class: 'cards' });
  for (const s of app.scenarios) {
    const card = h('button', { class: 'frame card' + (p.scenarioId === s.id ? ' sel' : ''), type: 'button', onclick: async () => {
      try { await app.loadScenario(s.id); setBackdrop(s.art); go(1, { scenarioId: s.id, originId: null, factionId: null, premadeId: null, custom: blankCustom() }); }
      catch (e) { console.error(e); toast('剧本载入失败：' + e.message, 'bad'); }
    } },
      paint(h('div', { class: 'card-art' }, h('span', { class: 'year' }, s.yearLabel)), s.art),
      h('div', { class: 'card-body' }, h('h3', null, s.title), h('div', { class: 'tags' }, (s.tags || []).map((t) => h('span', { class: 'tag' }, t))), h('p', null, s.blurb)));
    cards.appendChild(card);
  }
  return cards;
}

function stepOrigin(app, p, sc, go) {
  const box = h('div', { style: { display: 'grid', gap: '14px' } });
  if (sc.intro) box.appendChild(h('div', { class: 'parch event-body', style: { margin: 0 } }, sc.intro.map((t) => h('p', null, t))));
  const cards = h('div', { class: 'cards' });
  for (const o of sc.origins) {
    cards.appendChild(h('button', { class: 'frame card compact' + (p.originId === o.id ? ' sel' : ''), type: 'button', onclick: () => go(2, { originId: o.id, factionId: null, premadeId: null }) },
      h('div', { class: 'card-body' },
        h('div', { class: 'head' }, paintFlag(h('div', { class: 'flag' }), o.flag), h('div', null, h('h3', null, o.name), h('div', { class: 'muted small' }, o.region || ''))),
        h('p', null, o.blurb), h('div', { class: 'tags' }, (o.tags || []).map((t) => h('span', { class: 'tag' }, t))))));
  }
  box.appendChild(cards);
  return box;
}

function factionsFor(sc, originId) {
  return (sc.factions || []).filter((f) => !f.origins || f.origins.includes(originId));
}

function stepFaction(app, p, sc, go) {
  const list = factionsFor(sc, p.originId);
  if (!list.length) { go(3, { factionId: null }); return h('div'); }
  const cards = h('div', { class: 'cards' });
  for (const f of list) {
    cards.appendChild(h('button', { class: 'frame card compact' + (p.factionId === f.id ? ' sel' : ''), type: 'button', onclick: () => go(3, { factionId: f.id }) },
      f.art ? paint(h('div', { class: 'card-art', style: { height: '110px' } }), f.art) : null,
      h('div', { class: 'card-body' }, h('h3', null, f.name), h('div', { class: 'muted small' }, f.motto || ''), h('p', null, f.blurb), h('div', { class: 'tags' }, (f.tags || []).map((t) => h('span', { class: 'tag' }, t))))));
  }
  return cards;
}

function premadesFor(sc, originId) {
  return (sc.premades || []).filter((c) => !c.origins || c.origins.includes(originId));
}

function stepCharacter(app, p, sc, go) {
  const db = app.db;
  const box = h('div', { style: { display: 'grid', gap: '14px' } });
  const mode = p.charMode || 'premade';
  const pre = premadesFor(sc, p.originId);
  box.appendChild(h('div', { class: 'tabs', style: { margin: 0 } },
    h('button', { type: 'button', class: mode === 'premade' ? 'on' : '', onclick: () => go(3, { charMode: 'premade' }) }, '预设角色'),
    h('button', { type: 'button', class: mode === 'custom' ? 'on' : '', onclick: () => go(3, { charMode: 'custom' }) }, '自建角色')));
  if (mode === 'premade') {
    if (!pre.length) box.appendChild(h('p', { class: 'muted' }, '这个出身暂时没有预设角色，请自建角色。'));
    const cards = h('div', { class: 'cards' });
    for (const c of pre) {
      const cls = db.classes[c.cls];
      const race = db.races[c.race];
      cards.appendChild(h('button', { class: 'frame card compact' + (p.premadeId === c.id ? ' sel' : ''), type: 'button', onclick: () => go(4, { premadeId: c.id, charMode: 'premade' }) },
        h('div', { class: 'card-body' },
          h('div', { class: 'head' }, paintPortrait(h('div', { class: 'portrait' }), c.portrait), h('div', null, h('h3', null, c.name), h('div', { class: 'muted small' }, `${race ? race.name : ''} · ${cls ? cls.name : ''}`))),
          h('p', null, c.blurb), h('div', { class: 'tags' }, (c.tags || []).map((t) => h('span', { class: 'tag' }, t))))));
    }
    box.appendChild(cards);
    return box;
  }
  box.appendChild(customBuilder(app, p, sc, go));
  return box;
}

function allowed(list, id) { return !list || list.includes(id); }

/** Era notes are keyed by year; use the note closest to the campaign's year. */
function eraNote(def, year) {
  if (!def || !def.era) return '';
  const keys = Object.keys(def.era).map(Number).filter((k) => !Number.isNaN(k));
  if (!keys.length) return '';
  const best = keys.reduce((a, b) => (Math.abs(b - year) < Math.abs(a - year) ? b : a));
  return def.era[best] || '';
}

function customBuilder(app, p, sc, go) {
  const db = app.db;
  const c = p.custom;
  const redraw = () => app.refresh();
  const box = h('div', { style: { display: 'grid', gap: '14px' } });

  // race
  const racePanel = h('div', { class: 'frame panel' }, h('h3', null, '种族'));
  const races = h('div', { class: 'pick-list' });
  for (const r of Object.values(db.races)) {
    if (!allowed(sc.races, r.id)) continue;
    races.appendChild(h('button', { type: 'button', class: 'pick' + (c.race === r.id ? ' sel' : ''), onclick: () => { c.race = r.id; c.subrace = (r.subraces && r.subraces[0] && r.subraces[0].id) || null; c.portrait = null; redraw(); } },
      h('b', null, r.name), h('span', null, r.short || '')));
  }
  racePanel.appendChild(races);
  const race = db.races[c.race];
  if (race) {
    if (race.subraces && race.subraces.length > 1) {
      const subs = h('div', { class: 'pick-list', style: { marginTop: '8px' } });
      for (const s of race.subraces) subs.appendChild(h('button', { type: 'button', class: 'pick' + (c.subrace === s.id ? ' sel' : ''), onclick: () => { c.subrace = s.id; redraw(); } }, h('b', null, s.name), h('span', null, s.short || '')));
      racePanel.appendChild(subs);
    }
    const era = eraNote(race, sc.era);
    racePanel.appendChild(h('p', { class: 'small muted', style: { margin: '10px 0 0', lineHeight: 1.7 } }, [race.desc, race.trait ? `特性：${race.trait}` : '', era ? `在本剧本中的处境：${era}` : ''].filter(Boolean).join('　')));
  }
  box.appendChild(racePanel);

  // class
  const clsPanel = h('div', { class: 'frame panel' }, h('h3', null, '职业'));
  const classes = h('div', { class: 'pick-list' });
  for (const k of Object.values(db.classes)) {
    if (!allowed(sc.classes, k.id)) continue;
    classes.appendChild(h('button', { type: 'button', class: 'pick' + (c.cls === k.id ? ' sel' : ''), onclick: () => { c.cls = k.id; c.profs = []; if (c.method !== 'buy') assignByClass(c, db); else { for (const a of R.ABILS) c.abil[a] = 8; autoBuy(c, k); } redraw(); } },
      h('b', null, k.name), h('span', null, k.short || '')));
  }
  clsPanel.appendChild(classes);
  const cls = db.classes[c.cls];
  if (cls) clsPanel.appendChild(h('p', { class: 'small muted', style: { margin: '10px 0 0', lineHeight: 1.7 } }, [cls.desc, eraNote(cls, sc.era) ? `在本剧本中的处境：${eraNote(cls, sc.era)}` : ''].filter(Boolean).join('　')));
  box.appendChild(clsPanel);

  // background
  const bgPanel = h('div', { class: 'frame panel' }, h('h3', null, '背景'));
  const bgs = h('div', { class: 'pick-list' });
  for (const b of Object.values(db.backgrounds)) {
    if (!allowed(sc.backgrounds, b.id)) continue;
    bgs.appendChild(h('button', { type: 'button', class: 'pick' + (c.background === b.id ? ' sel' : ''), onclick: () => { c.background = b.id; c.profs = c.profs.filter((s) => !(b.profs || []).includes(s)); redraw(); } },
      h('b', null, b.name), h('span', null, `${b.short || ''}　熟练：${(b.profs || []).map((s) => R.SKILLS[s].name).join('、')}`)));
  }
  bgPanel.appendChild(bgs);
  box.appendChild(bgPanel);

  // abilities
  const abPanel = h('div', { class: 'frame panel' }, h('h3', null, '属性'));
  const spent = R.ABILS.reduce((s, a) => s + (COST[c.abil[a]] ?? 99), 0);
  abPanel.appendChild(h('div', { class: 'tabs', style: { margin: '0 0 8px' } },
    h('button', { type: 'button', class: c.method === 'buy' ? 'on' : '', onclick: () => { c.method = 'buy'; for (const a of R.ABILS) c.abil[a] = 8; if (cls) autoBuy(c, cls); redraw(); } }, '分配属性点（27 点）'),
    h('button', { type: 'button', class: c.method === 'array' ? 'on' : '', onclick: () => { c.method = 'array'; c.rolled = ARRAY.slice(); assignByClass(c, db); redraw(); } }, '使用标准属性值'),
    h('button', { type: 'button', class: c.method === 'roll' ? 'on' : '', onclick: () => { c.method = 'roll'; c.rolled = roll4d6(); assignByClass(c, db); redraw(); } }, '掷 4d6 决定属性')));
  if (c.method === 'buy') abPanel.appendChild(h('p', { class: 'small muted' }, `已用 ${spent} / 27 点。8 到 13 每点 1 点，14 和 15 各 2 点。`));
  if (c.method === 'roll') abPanel.appendChild(h('div', { class: 'row', style: { marginBottom: '8px' } }, h('span', { class: 'small muted' }, `掷出：${(c.rolled || []).join('、')}（已按职业自动分配）`), button('重掷', () => { c.rolled = roll4d6(); assignByClass(c, db); redraw(); }, { class: 'small', icon: 'dice' })));
  const bonus = raceBonus(db, c);
  const grid = h('div', { class: 'abil-grid' });
  for (const a of R.ABILS) {
    const base = c.abil[a];
    const total = base + (bonus[a] || 0);
    const up = COST[base + 1] !== undefined && spent - COST[base] + COST[base + 1] <= 27;
    grid.appendChild(h('div', { class: 'abil' }, h('span', { class: 'nm' }, R.ABIL_NAMES[a] + (bonus[a] ? ` +${bonus[a]}` : '')), h('b', null, String(total)), h('span', { class: 'md' }, R.fmtMod(R.abilMod(total))),
      c.method === 'buy' ? h('div', { class: 'pm' },
        h('button', { type: 'button', disabled: base <= 8, onclick: () => { c.abil[a] -= 1; redraw(); }, 'aria-label': '减少' }, '−'),
        h('button', { type: 'button', disabled: !up, onclick: () => { c.abil[a] += 1; redraw(); }, 'aria-label': '增加' }, '+')) : null));
  }
  abPanel.appendChild(grid);
  if (cls && c.method === 'buy') abPanel.appendChild(h('div', { class: 'row', style: { marginTop: '8px' } }, button(`按${cls.name}推荐分配`, () => { for (const a of R.ABILS) c.abil[a] = 8; autoBuy(c, cls); redraw(); }, { class: 'small' })));
  box.appendChild(abPanel);

  // skills
  if (cls && cls.skills) {
    const bg = db.backgrounds[c.background];
    const fixed = new Set([...((bg && bg.profs) || []), ...((race && race.profs) || [])]);
    const skPanel = h('div', { class: 'frame panel' }, h('h3', null, `技能熟练（选 ${cls.skills.n} 项，已选 ${c.profs.length}）`));
    const picks = h('div', { class: 'pick-list' });
    for (const s of cls.skills.from) {
      const has = c.profs.includes(s);
      const isFixed = fixed.has(s);
      picks.appendChild(h('button', { type: 'button', class: 'pick' + (has || isFixed ? ' sel' : ''), disabled: isFixed || (!has && c.profs.length >= cls.skills.n), onclick: () => { c.profs = has ? c.profs.filter((x) => x !== s) : [...c.profs, s]; redraw(); } },
        h('b', null, R.SKILLS[s].name), h('span', null, isFixed ? '已由背景获得' : R.ABIL_NAMES[R.SKILLS[s].abil])));
    }
    skPanel.appendChild(picks);
    box.appendChild(skPanel);
  }

  // identity
  const idPanel = h('div', { class: 'frame panel' }, h('h3', null, '姓名和外貌'));
  const nameInput = h('input', { type: 'text', value: c.name, maxlength: 16, placeholder: '角色名', oninput: (e) => { c.name = e.target.value; } });
  idPanel.appendChild(h('div', { class: 'row' }, h('div', { class: 'grow' }, field('名字', nameInput)),
    button('随机', () => { c.name = randomName(db, c, sc); redraw(); }, { class: 'small', icon: 'dice' })));
  idPanel.appendChild(h('div', { class: 'row', style: { marginTop: '8px' } }, h('span', { class: 'small muted' }, '称谓'),
    h('div', { class: 'tabs', style: { margin: 0 } }, [['m', '他'], ['f', '她']].map(([v, l]) => h('button', { type: 'button', class: c.gender === v ? 'on' : '', onclick: () => { c.gender = v; c.portrait = null; redraw(); } }, l)))));
  let ports = portraitsFor(c.race, c.gender, c.subrace);
  if (!ports.length) ports = portraitsFor(c.race, null, c.subrace);
  if (!ports.length) ports = portraitsFor(c.race, null, null);
  if (ports.length) {
    if (!c.portrait || !ports.includes(c.portrait)) c.portrait = ports[0];
    const row = h('div', { class: 'portrait-pick', style: { marginTop: '10px' } });
    for (const key of ports.slice(0, 40)) row.appendChild(h('button', { type: 'button', class: c.portrait === key ? 'sel' : '', onclick: () => { c.portrait = key; redraw(); }, 'aria-label': '头像' }, paintPortrait(h('div', { class: 'portrait' }), key)));
    idPanel.appendChild(row);
  }
  box.appendChild(idPanel);

  const problems = [];
  if (!c.race) problems.push('种族');
  if (!c.cls) problems.push('职业');
  if (!c.background) problems.push('背景');
  if (cls && cls.skills && c.profs.length < cls.skills.n) problems.push('技能');
  if (c.method === 'buy' && spent > 27) problems.push('已超出可用属性点');
  box.appendChild(h('div', { class: 'sticky-foot' }, button(problems.length ? `还差：${problems.join('、')}` : '下一步', () => { if (!c.name.trim()) c.name = randomName(db, c, sc); go(4, { charMode: 'custom', premadeId: null }); }, { class: 'primary', disabled: !!problems.length })));
  return box;
}

function raceBonus(db, c) {
  const out = {};
  const race = db.races[c.race];
  if (!race) return out;
  Object.assign(out, race.abil || {});
  const sr = race.subraces && race.subraces.find((s) => s.id === c.subrace);
  if (sr && sr.abil) for (const a of Object.keys(sr.abil)) out[a] = (out[a] || 0) + sr.abil[a];
  return out;
}

function roll4d6() {
  const out = [];
  for (let i = 0; i < 6; i++) { const d = [0, 0, 0, 0].map(() => 1 + R.randInt(6)).sort((a, b) => b - a); out.push(d[0] + d[1] + d[2]); }
  return out.sort((a, b) => b - a);
}

function assignByClass(c, db) {
  const cls = db.classes[c.cls];
  const order = (cls && cls.abilOrder) || R.ABILS;
  const vals = (c.rolled || ARRAY).slice().sort((a, b) => b - a);
  order.forEach((a, i) => { c.abil[a] = vals[i]; });
}

function autoBuy(c, cls) {
  const order = cls.abilOrder || R.ABILS;
  const target = [15, 14, 13, 12, 10, 8];
  order.forEach((a, i) => { c.abil[a] = target[i]; });
}

function randomName(db, c, sc) {
  const race = db.races[c.race];
  const sub = race && race.subraces && race.subraces.find((x) => x.id === c.subrace);
  const pool = (sc.names && (sc.names[`${c.race}:${c.subrace}`] || sc.names[c.race])) || (sub && sub.names) || (race && race.names) || { m: ['阿尔文'], f: ['伊尔瑟'], family: [] };
  const given = R.pick((c.gender === 'f' ? pool.f : pool.m) || pool.m || ['无名氏']);
  const fam = pool.family && pool.family.length ? R.pick(pool.family) : '';
  if (!fam) return given;
  return pool.familyFirst ? `${fam}${given}` : `${given}·${fam}`;
}

function stepConfirm(app, p, sc, go) {
  const db = app.db;
  const origin = sc.origins.find((o) => o.id === p.originId);
  const faction = (sc.factions || []).find((f) => f.id === p.factionId);
  let ch;
  try {
    if (p.charMode === 'premade' && p.premadeId) {
      const pre = sc.premades.find((x) => x.id === p.premadeId);
      ch = buildCharacter(db, Object.assign({ abilFinal: true }, pre));
    } else {
      ch = buildCharacter(db, Object.assign({}, p.custom, { name: p.custom.name.trim() || '无名氏' }));
    }
  } catch (e) { console.error(e); toast('角色数据有问题：' + e.message, 'bad'); go(3); return h('div'); }
  const cls = db.classes[ch.cls];
  const race = db.races[ch.race];
  const box = h('div', { style: { display: 'grid', gap: '14px' } });
  box.appendChild(h('div', { class: 'frame panel' },
    h('div', { class: 'hero' }, paintPortrait(h('div', { class: 'portrait lg' }), ch.portrait),
      h('div', { class: 'grow' }, h('div', { class: 'nm', style: { fontSize: '22px' } }, ch.name),
        h('div', { class: 'sub' }, `${race.name} · ${cls.name}`), h('div', { class: 'sub' }, `${sc.title}　${origin ? origin.name : ''}${faction ? ' · ' + faction.name : ''}`))),
    h('div', { class: 'abil-grid', style: { marginTop: '12px' } }, R.ABILS.map((a) => h('div', { class: 'abil' }, h('span', { class: 'nm' }, R.ABIL_NAMES[a]), h('b', null, String(ch.abil[a])), h('span', { class: 'md' }, R.fmtMod(R.abilMod(ch.abil[a])))))),
    h('div', { class: 'kv', style: { marginTop: '10px' } }, h('div', null, h('span', null, '生命'), h('b', null, String(ch.maxHp))), h('div', null, h('span', null, '护甲等级'), h('b', null, String(R.armorClass(ch, db)))),
      h('div', null, h('span', null, '已熟练的技能'), h('b', null, ch.profs.map((s) => R.SKILLS[s].name).join('、') || '—'))),
    ch.bio ? h('p', { class: 'small', style: { margin: '12px 0 0', lineHeight: 1.8 } }, ch.bio) : null));

  const diffPanel = h('div', { class: 'frame panel' }, h('h3', null, '战斗难度'));
  const picks = h('div', { class: 'pick-list' });
  for (const [id, name, d] of [['story', '故事', '敌人生命较低，也更难命中。适合想专心看剧情的玩家。'], ['normal', '标准', '使用标准战斗规则。'], ['hard', '硬核', '敌人生命更高，造成的伤害也更高。']]) {
    picks.appendChild(h('button', { type: 'button', class: 'pick' + (p.difficulty === id ? ' sel' : ''), onclick: () => { p.difficulty = id; app.refresh(); } }, h('b', null, name), h('span', null, d)));
  }
  diffPanel.appendChild(picks);
  box.appendChild(diffPanel);

  const cheatPanel = h('div', { class: 'frame panel' }, h('h3', null, '作弊（随时可以在游戏里的“作弊”菜单改）'));
  const sw = (label, desc, key) => h('label', { class: 'switch', style: { marginBottom: '6px' } }, h('div', null, h('div', null, label), h('div', { class: 'd' }, desc)),
    h('input', { type: 'checkbox', checked: !!p.cheats[key], onchange: (e) => { p.cheats[key] = e.target.checked; p.cheats.used = Object.keys(p.cheats).some((k) => !['used', 'showDc', 'fixedRoll'].includes(k) && p.cheats[k] === true); } }));
  cheatPanel.appendChild(sw('开局即为神', '以神明身份进入剧情。你不会老死或受伤，检定自动成功，还能遇到神明专属的对白与选项。', 'ascended'));
  cheatPanel.appendChild(sw('永生', '角色不会衰老或死亡', 'immortal'));
  cheatPanel.appendChild(sw('无敌', '队伍成员不会受到伤害', 'god'));
  cheatPanel.appendChild(sw('检定必成', '所有检定自动成功', 'autoSuccess'));
  cheatPanel.appendChild(sw('无限资源', '使用法术位或消耗品时，数量不会减少', 'infRes'));
  cheatPanel.appendChild(sw('解锁全部选项', '可选择原本条件不足的选项', 'unlockAll'));
  cheatPanel.appendChild(h('p', { class: 'small muted', style: { margin: '6px 0 0' } }, '开始后仍可在作弊菜单中调整人物、背包、世界局势和声望，也能跳到指定章节或结局。'));
  box.appendChild(cheatPanel);

  box.appendChild(h('div', { class: 'sticky-foot' }, button('开始冒险', () => app.startGame({ scenarioId: sc.id, originId: p.originId, factionId: p.factionId, character: ch, difficulty: p.difficulty, cheats: Object.assign(defaultCheats(), p.cheats) }), { class: 'primary' })));
  return box;
}
