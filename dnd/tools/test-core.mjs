// Core engine smoke tests with a tiny in-memory data set. Run: node tools/test-core.mjs
import assert from 'node:assert/strict';
import * as R from '../js/core/rules.js';
import { evaluate, identifiers } from '../js/core/expr.js';
import { buildCharacter, newGame, makeGetter, exportCode, importCode } from '../js/core/state.js';
import { applyEffects, parseEffect, levelUp } from '../js/core/effects.js';
import { Engine } from '../js/core/engine.js';
import * as Combat from '../js/core/combat.js';

R.setRng(R.seededRng(42));

const db = {
  classes: {
    fighter: { id: 'fighter', name: '战士', hitDie: 10, primary: 'str', saves: ['str', 'con'], caster: null, tags: ['martial'],
      startEquip: { weapon: 'longsword', armor: 'chain', offhand: 'shield' }, startGold: 15,
      resources: { surge: { name: '动作如潮', max: 1, rest: 'short', minLevel: 2 } },
      features: { 1: ['second_wind'], 2: ['action_surge'], 5: ['extra_attack'] } },
    wizard: { id: 'wizard', name: '法师', hitDie: 6, primary: 'int', saves: ['int', 'wis'], caster: 'full', spellAbility: 'int', tags: ['caster'],
      startEquip: { weapon: 'staff' }, features: { 1: ['fire_bolt', 'magic_missile', 'sleep'], 3: ['scorch'], 5: ['fireball'] } },
    cleric: { id: 'cleric', name: '牧师', hitDie: 8, primary: 'wis', saves: ['wis', 'cha'], caster: 'full', spellAbility: 'wis', tags: ['caster', 'divine'],
      startEquip: { weapon: 'mace', armor: 'chain', offhand: 'shield' }, features: { 1: ['sacred_flame', 'cure_wounds', 'healing_word'] } },
  },
  races: { human: { id: 'human', name: '人类', abil: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, tags: ['human'] },
    elf: { id: 'elf', name: '精灵', abil: { dex: 2 }, tags: ['elf', 'longlived'], passives: { skill: { perception: 2 } } } },
  backgrounds: { soldier: { id: 'soldier', name: '老兵', profs: ['athletics', 'intimidation'] } },
  items: {
    longsword: { id: 'longsword', name: '长剑', weapon: { dmg: '1d8', type: 'slashing', props: ['versatile'] } },
    staff: { id: 'staff', name: '木杖', weapon: { dmg: '1d6', type: 'bludgeoning', props: [] } },
    mace: { id: 'mace', name: '钉头锤', weapon: { dmg: '1d6', type: 'bludgeoning', props: [] } },
    chain: { id: 'chain', name: '链甲', armor: { base: 16, dexCap: 0, type: 'heavy' } },
    shield: { id: 'shield', name: '盾牌', shield: 2 },
    potion: { id: 'potion', name: '治疗药水', use: { target: 'ally', heal: '2d4+2' } },
  },
  abilities: {
    second_wind: { id: 'second_wind', name: '回气', kind: 'feature', quick: true, target: 'self', heal: '1d10+lvl', cost: { uses: 1, per: 'short' } },
    action_surge: { id: 'action_surge', name: '动作如潮', kind: 'feature', quick: true, target: 'self', grantAction: true, cost: { res: 'surge', n: 1 } },
    extra_attack: { id: 'extra_attack', name: '额外攻击', kind: 'feature', passives: { extraAttack: 1 } },
    fire_bolt: { id: 'fire_bolt', name: '火焰箭', kind: 'spell', level: 0, target: 'enemy', attack: 'spell', dmg: '1d10', dmgByLevel: { 5: '2d10', 11: '3d10' }, dmgType: 'fire' },
    magic_missile: { id: 'magic_missile', name: '魔法飞弹', kind: 'spell', level: 1, cost: { slot: 1 }, target: 'enemy', dmg: '3d4+3', dmgType: 'force' },
    sleep: { id: 'sleep', name: '睡眠术', kind: 'spell', level: 1, cost: { slot: 1 }, target: 'enemies', maxTargets: 2, save: { abil: 'wis' }, apply: { cond: 'asleep', turns: 2 }, ai: 'control' },
    scorch: { id: 'scorch', name: '灼热射线', kind: 'spell', level: 2, cost: { slot: 2 }, target: 'enemy', attack: 'spell', hits: 3, dmg: '2d6', dmgType: 'fire' },
    fireball: { id: 'fireball', name: '火球术', kind: 'spell', level: 3, cost: { slot: 3 }, target: 'enemies', save: { abil: 'dex', half: true }, dmg: '8d6', dmgType: 'fire' },
    sacred_flame: { id: 'sacred_flame', name: '圣火', kind: 'spell', level: 0, target: 'enemy', save: { abil: 'dex' }, dmg: '1d8', dmgType: 'radiant' },
    cure_wounds: { id: 'cure_wounds', name: '疗伤术', kind: 'spell', level: 1, cost: { slot: 1 }, target: 'ally', heal: '1d8+mod', revive: true, ai: 'heal' },
    healing_word: { id: 'healing_word', name: '治愈真言', kind: 'spell', level: 1, cost: { slot: 1 }, quick: true, target: 'ally', heal: '1d4+mod', revive: true, ai: 'heal' },
  },
  conditions: {
    asleep: { id: 'asleep', name: '沉睡', bad: true, flags: { skip: true, advAgainst: true }, breakOnDamage: true },
    burning: { id: 'burning', name: '燃烧', bad: true, tick: { dmg: '1d4', type: 'fire' } },
    poisoned: { id: 'poisoned', name: '中毒', bad: true, flags: { disAttack: true }, endOn: 'save', saveAbil: 'con' },
  },
  enemies: {
    orc: { id: 'orc', name: '兽人战士', type: 'humanoid', hp: 15, ac: 13, init: 1, saves: { str: 3, con: 3 }, attacks: [{ name: '巨斧', hit: 5, dmg: '1d12+3', type: 'slashing' }], xp: 100 },
    goblin: { id: 'goblin', name: '地精', type: 'humanoid', hp: 7, ac: 14, init: 2, attacks: [{ name: '弯刀', hit: 4, dmg: '1d6+2', type: 'slashing' }, { name: '毒镖', hit: 4, dmg: '1d4+2', type: 'piercing', apply: { cond: 'poisoned', turns: 3, save: { abil: 'con', dc: 11 } } }], xp: 50, ai: 'cunning' },
  },
  companions: {
    ilse: { id: 'ilse', name: '伊尔瑟', race: 'human', cls: 'cleric', abil: { str: 12, dex: 10, con: 14, int: 10, wis: 16, cha: 12 }, profs: ['medicine', 'religion'], equip: { weapon: 'mace', armor: 'chain', offhand: 'shield' } },
  },
  codex: {},
};

const scenario = {
  id: 'test', era: 1444, coin: '金冠', startDate: '1444年11月11日',
  tracks: [{ key: 'order', name: '帝国秩序', start: 0, min: -5, max: 5 }],
  reputations: [{ key: 'empire', name: '帝国', start: 0 }],
  origins: [{ id: 'lorent', name: '洛伦特', startScene: 'a', start: { rep: { empire: 1 }, gold: 5 } }],
  factions: [],
  quests: { q1: { title: '第一桩差事' } },
  scenes: {
    a: { id: 'a', text: ['你好，{pc}。{?class == \'fighter\':你握紧了剑。|你握紧了法杖。}', { if: 'race == "elf"', text: '精灵专属段落。' }],
      first: ['quest q1 start', 'companion +ilse'],
      choices: [
        { text: '游说守卫', check: { skill: 'persuasion', dc: 10 }, ok: { text: '他让开了路。', effects: ['rep empire +1'], goto: 'b' }, fail: { text: '他不买账。', goto: 'fight' } },
        { text: '（战士）硬闯', req: "class == 'fighter'", reqText: '需要战士', goto: 'fight' },
        { text: '买药水', once: true, cost: { gold: 10 }, effects: ['item +potion 2'] },
        { text: '只有精灵看得见', if: "race == 'elf'", goto: 'b' },
      ] },
    fight: { id: 'fight', text: ['两个兽人拦住了去路。'], combat: { enemies: [{ id: 'orc', n: 2 }, { id: 'goblin', n: 1 }], win: { effects: ['world order +1'], goto: 'b' }, lose: 'dead',
      specials: [{ id: 'rock', name: '推落巨石', check: { skill: 'athletics', dc: 12 }, success: { text: '巨石滚落。', dmgAll: '2d6' }, fail: { text: '石头纹丝不动。' } }] } },
    b: { id: 'b', text: ['你到了城里。'], first: ['quest q1 done', 'level 3'], next: 'end' },
    dead: { id: 'dead', text: ['你死了。'], ending: 'death' },
    end: { id: 'end', text: ['故事结束。'], ending: 'good' },
  },
  endings: { good: { title: '好结局', text: ['不错。'] }, death: { title: '身亡', text: ['可惜。'] } },
  epilogues: [{ if: 'world.order > 0', title: '秩序', text: ['帝国稳住了。'] }, { if: 'world.order <= 0', title: '动荡', text: ['帝国晃了晃。'] }],
};

// --- expr
const g0 = (p) => ({ 'flag.a': true, 'rep.x': 3, class: 'wizard', level: 4 }[p]);
assert.equal(evaluate("flag.a && rep.x >= 2", g0), true);
assert.equal(evaluate("class in ['wizard','sorcerer'] && !(level < 3)", g0), true);
assert.equal(evaluate("flag.b || rep.x + 1 == 4", g0), true);
assert.equal(evaluate("class != 'wizard'", g0), false);
assert.equal(evaluate(undefined, g0), true);
assert.deepEqual(identifiers("flag.a && rep.x > 1"), ['flag.a', 'rep.x']);
assert.throws(() => evaluate("flag.a &&", g0));

// --- rules
assert.equal(R.abilMod(15), 2); assert.equal(R.abilMod(8), -1); assert.equal(R.profBonus(5), 3);
assert.ok(R.rollDice('2d6+3').total >= 5); assert.equal(R.rollDice('2d6+mod', { mod: 3 }, { max: true }).total, 15);
assert.deepEqual(R.slotsFor('full', 5), [4, 3, 2]);
assert.throws(() => parseEffect('bogus 1'));

// --- character
const pc = buildCharacter(db, { name: '阿尔文', cls: 'fighter', race: 'human', background: 'soldier', abil: { str: 15, dex: 13, con: 14, int: 10, wis: 12, cha: 8 }, profs: ['perception'] });
assert.equal(pc.abil.str, 16); assert.equal(pc.maxHp, 10 + 2); assert.equal(R.armorClass(pc, db), 18);
assert.ok(pc.profs.includes('athletics'));
const state = newGame(db, scenario, { originId: 'lorent', character: pc });
assert.equal(state.rep.empire, 1); assert.equal(state.gold, 20);
const eng = new Engine(db, scenario, state);
let v = eng.start();
assert.equal(v.type, 'scene'); assert.ok(v.paragraphs[0].text.includes('阿尔文') && v.paragraphs[0].text.includes('握紧了剑'));
assert.equal(v.paragraphs.length, 1);
assert.equal(v.choices.length, 3, 'elf-only choice hidden');
assert.ok(state.party.includes('ilse')); assert.equal(state.quests.q1.stage, 1);
// buy potions (hub choice stays in scene)
v = eng.choose(2);
assert.equal(state.inv.potion, 2); assert.equal(state.gold, 10); assert.equal(v.type, 'scene'); assert.equal(v.choices.length, 2);
// undo
assert.ok(eng.undo()); assert.equal(eng.state.gold, 20); assert.equal(eng.state.inv.potion, undefined);
eng.choose(2);
// save code round trip
const code = exportCode(eng.state); const back = importCode(code); assert.equal(back.pc.name, '阿尔文'); assert.equal(back.gold, 10);
// force fight
v = eng.choose(1);
assert.equal(v.type, 'scene'); assert.ok(v.fight);
v = eng.proceed();
assert.equal(v.type, 'combat');
let guard = 0;
while (!eng.state.combat.over && guard++ < 200) {
  const c = eng.state.combat;
  const acts = Combat.availableActions(eng.ctx);
  assert.ok(acts.attack);
  if (guard === 1) { const r = Combat.useSpecial(eng.ctx, 'rock', eng.combatCheck()); assert.ok(r); }
  else {
    const sw = acts.abilities.find((a) => a.id === 'second_wind' && !a.disabled);
    if (sw && eng.state.pc.hp < 6) Combat.useAbility(eng.ctx, Combat.currentUnit(c), 'second_wind');
    const foe = Combat.living(c, 'enemy')[0];
    if (foe) Combat.attackAction(eng.ctx, foe.uid);
  }
  if (!c.over) { Combat.endTurn(eng.ctx); Combat.runUntilPlayer(eng.ctx); }
}
assert.ok(eng.state.combat.over, 'combat finished');
console.log('combat result:', eng.state.combat.over, 'rounds:', eng.state.combat.round, 'log lines:', eng.state.combat.log.length);
console.log(eng.state.combat.log.slice(0, 14).map((l) => '  ' + l.text).join('\n'));
v = eng.finishCombat();
if (v.type === 'ending') { assert.equal(v.ending, 'death'); }
else {
  assert.equal(eng.state.scene, 'b'); assert.equal(eng.state.world.order, 1);
  assert.ok(eng.state.pc.pendingLevels >= 1);
  while (eng.state.pc.pendingLevels > 0) levelUp(eng.state, db, {});
  assert.equal(eng.state.pc.level, 3);
  v = eng.proceed();
  assert.equal(v.type, 'ending');
  const ep = eng.epilogue(); assert.equal(ep.title, '好结局'); assert.equal(ep.slides.length, 1); assert.equal(ep.slides[0].title, '秩序');
}
// wizard fight with spells, cheats
R.setRng(R.seededRng(7));
const wz = buildCharacter(db, { name: '梅拉', gender: 'f', cls: 'wizard', race: 'elf', level: 5, abil: { str: 8, dex: 14, con: 13, int: 16, wis: 12, cha: 10 } });
assert.deepEqual(wz.slots, [4, 3, 2]);
const st2 = newGame(db, scenario, { originId: 'lorent', character: wz });
const e2 = new Engine(db, scenario, st2);
v = e2.start();
assert.equal(v.choices.length, 4, 'elf sees the elf option; fighter option shown disabled');
assert.ok(v.choices.find((c) => c.disabled === '需要战士'));
assert.equal(v.paragraphs.length, 2);
e2.state.scene = 'fight'; e2.enter('fight'); e2.proceed();
const c2 = e2.state.combat;
guard = 0;
while (!c2.over && guard++ < 100) {
  const u = Combat.currentUnit(c2);
  const acts = Combat.availableActions(e2.ctx);
  const fb = acts.abilities.find((a) => a.id === 'fireball');
  if (fb && !fb.disabled) Combat.useAbility(e2.ctx, u, 'fireball'); else Combat.useAbility(e2.ctx, u, 'fire_bolt', (Combat.living(c2, 'enemy')[0] || {}).uid);
  if (!c2.over) { Combat.endTurn(e2.ctx); Combat.runUntilPlayer(e2.ctx); }
}
assert.ok(c2.over);
assert.ok(wz.slots[2] < 2, 'fireball spent a 3rd-level slot');
console.log('wizard combat:', c2.over, 'rounds', c2.round);
// cheats: god mode + one hit
const st3 = newGame(db, scenario, { originId: 'lorent', character: buildCharacter(db, { name: 'X', cls: 'fighter', race: 'human', abil: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 } }) });
st3.cheats.god = true; st3.cheats.oneHit = true;
const e3 = new Engine(db, scenario, st3);
e3.start(); e3.state.scene = 'fight'; e3.enter('fight'); e3.proceed();
guard = 0;
while (!e3.state.combat.over && guard++ < 100) { const foe = Combat.living(e3.state.combat, 'enemy')[0]; Combat.attackAction(e3.ctx, foe.uid); if (!e3.state.combat.over) { Combat.endTurn(e3.ctx); Combat.runUntilPlayer(e3.ctx); } }
assert.equal(e3.state.combat.over, 'win'); assert.equal(e3.state.pc.hp, e3.state.pc.maxHp, 'god mode: no damage taken');
// getter
const get = makeGetter(e3.state, db, scenario);
assert.equal(get('class'), 'fighter'); assert.equal(get('era'), 1444); assert.equal(get('is.martial'), true); assert.equal(get('skill.athletics'), -1);
console.log('ALL CORE TESTS PASSED');
