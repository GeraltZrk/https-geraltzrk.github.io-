# 游戏数据格式（职业、种族、背景、能力、状态、物品、敌人）

数据在 `js/data/*.js`，每个文件导出一个以 id 为键的对象。引擎只认下面列出的字段；写了别的字段不会报错，但也不会生效。改完跑 `node tools/validate.mjs` 和 `node tools/test-core.mjs`。

规则底子是 5e SRD 的简化版：六维、熟练加值、优势劣势、法术位、短休长休。等级上限 12。

## 职业 `classes.js` → `CLASSES`

```js
wizard: {
  id: 'wizard', name: '法师', short: '一行卖点', desc: '两三句介绍',
  era: { 1022: '这个年代这个职业是什么人', 1444: '…', 1836: '…' },
  hitDie: 6, primary: 'int', saves: ['int', 'wis'],
  caster: 'full' | 'half' | 'pact' | null, spellAbility: 'int',
  tags: ['caster', 'arcane'],                    // 条件里用 is.caster
  abilOrder: ['int','con','dex','wis','cha','str'],   // 自动分配属性的优先级，六项都要列
  skills: { n: 2, from: ['arcana', 'history', …] },
  startEquip: { weapon: 'quarterstaff', armor: null, offhand: null, trinket: null },
  startItems: { healing_potion: 1 }, startGold: 10,
  resources: { ki: { name: '气', max: 'level' | 'prof' | 数字 | 'wis'(取调整值), byLevel?: [0,2,2,3…], perLevel?: 5, rest: 'short'|'long', minLevel?: 2 } },
  features: { 1: ['能力id', …], 2: […], … 12: […] },   // 每级获得的能力（主动或被动都放这里）
  subclassLevel: 3,
  subclasses: [ { id, name, desc, features: { 3: […], 6: […], 10: […] } } ],
}
```

施法者的法术直接写进 `features`：到了那一级就会。全施法者 1 级给 2 个戏法 + 3 个 1 环；之后每逢新环给 2–3 个该环法术，其他等级给 1 个。到 12 级总共 20 个左右主动能力就够，别堆。

## 种族 `races.js` → `RACES`

```js
elf: {
  id: 'elf', name: '精灵', short: '一行', desc: '两三句', trait: '给玩家看的特性说明',
  era: { 1022: '…', 1444: '…', 1836: '…' },      // 这个年代该种族的处境，一句话
  abil: { dex: 2 }, profs: ['perception'], tags: ['elf', 'longlived'],
  passives: { … }, abilities: ['能力id'],
  subraces: [ { id: 'moon_elf', name: '月精灵', short, abil: { int: 1 }, passives, abilities, tags } ],
  names: { m: ['…'], f: ['…'], family: ['…'] },   // 中文译名，随机取名用
}
```

## 背景 `backgrounds.js` → `BACKGROUNDS`

`{ id, name, short, desc, profs: [两项技能], tags: ['noble'] }`

## 能力 `abilities.js` → `ABILITIES`

主动能力必须有 `target`；没有 `target` 的是被动（只读 `passives`）。

```js
{
  id, name, desc,                      // desc 写清效果和数值，玩家在战斗里靠它做决定
  kind: 'spell' | 'maneuver' | 'feature',
  level: 0..5,                         // 法术环级，0 = 戏法
  cost: { slot: 1 } | { res: 'ki', n: 1 } | { uses: 1, per: 'short'|'long' } | { hp: 5 },
  quick: true,                         // 附赠动作：不占主要行动，每回合一个
  target: 'enemy' | 'ally' | 'self' | 'enemies' | 'allies',   maxTargets: 3,
  attack: 'spell' | 'weapon',          // spell = 法术攻击检定；weapon = 用当前武器打一下（伤害走武器）
  save: { abil: 'dex', half: true },   // 目标豁免，对抗施法者 DC
  dmg: '2d6', dmgType: 'fire', dmgByLevel: { 5: '2d10', 11: '3d10' },   // 骰式可用 mod / lvl / prof
  hits: 3,                             // 连打几次
  weaponExtra: '2d8', extraType: 'radiant', advantage: true, hitBonus: 2, dmgBonus: 2,   // 配合 attack:'weapon'
  heal: '1d8+mod', healByLevel: {…}, tempHp: '1d10+lvl', revive: true, cleanse: 'all' | ['poisoned'],
  apply: { cond: 'frightened', turns: 2, save: { abil: 'wis' } },   // 命中/豁免失败后附加状态
  selfApply: { cond: 'raging', turns: 10 },
  hide: true,                          // 进入隐匿（下次攻击优势）
  grantAction: true,                   // 再获得一次主要行动
  requires: 'shield',
  ai: 'heal' | 'buff' | 'control',     // 同伴自动行动时的提示
  passives: { … },                     // 被动加成
}
```

伤害类型：`slashing piercing bludgeoning fire cold lightning thunder acid poison necrotic radiant psychic force`。

### 被动 `passives` 支持的键

`ac` `hit` `dmg`（武器命中/伤害）`spellHit` `spellDc` `spellDmg` `init` `hpPerLevel` `extraAttack: 1` `critRange: 19` `critDice: 1`
`sneak: true`（偷袭，每回合一次 ⌈等级/2⌉d6，需灵巧或远程武器）`resist: ['fire']` `immune: []` `vuln: []` `condImmune: ['frightened']`
`saveAdv: ['dex']` `saveBonus` `skill: { stealth: 2 }` `skillAdv: ['perception']` `regen` `unarmored: 'con'|'wis'`（无甲防御加第二属性）`natArmor: 13` `abil: { str: 2 }` `healBonus`

## 状态 `conditions.js` → `CONDITIONS`

```js
{ id, name, desc, bad: true,
  passives: { … },
  flags: { skip: true（跳过回合）, advAgainst: true（被打有优势）, disAgainst: true, advAttack: true, disAttack: true, taunt: true },
  tick: { dmg: '1d6', type: 'fire' } | { heal: '1d4' },     // 回合开始时
  endOn: 'save', saveAbil: 'con',      // 回合结束时豁免解除
  breakOnDamage: true,
  bonusDie: '1d4', consume: 'attack',  // 下次攻击加骰
  turns: 2 }                           // 默认持续回合
```

## 物品 `items.js` → `ITEMS`

```js
{ id, name, desc, value,
  weapon: { dmg: '1d8', type: 'slashing', props: ['finesse','ranged','two_handed','light','versatile','casting'], bonus: 1 },
  armor: { base: 14, dexCap: 2 | 0 | null(不限), type: 'light'|'medium'|'heavy' },
  shield: 2, slot: 'trinket',
  passives: { … }, grants: ['能力id'],
  use: { target: 'ally'|'enemy'|'enemies'|'self', heal, dmg, dmgType, save, apply, cleanse, revive, combat: true, outside: true, effects: ['剧情效果'] } }
```

必须保留 `unarmed`。

## 敌人 `enemies.js` → `ENEMIES`

```js
{ id, name, type: 'humanoid'|'beast'|'undead'|'fiend'|'fey'|'construct'|'dragon'|'giant'|'monstrosity'|'elemental'|'aberration'|'plant',
  desc, hp: 22 | '4d8+4', ac: 13, init: 1, level: 3,
  saves: { str: 3, dex: 1, con: 2, int: -1, wis: 0, cha: -1 },
  resist: [], immune: [], vuln: [], condImmune: [],
  traits: { regen: 5, packTactics: true, boss: true },
  ai: 'brute' | 'cunning' | 'caster',
  attacks: [
    { name: '巨斧', hit: 5, dmg: '1d12+3', type: 'slashing', multi: 2, weight: 3,
      apply: { cond: 'poisoned', turns: 2, save: { abil: 'con', dc: 12 } },
      extra: { dmg: '1d6', type: 'fire' }, lifesteal: true, text: '{name}抡圆了斧子。' },
    { name: '龙息', dmg: '6d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 14, half: true } }, recharge: 5, minRound: 2 },
    { name: '战吼', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1 },
    { name: '黑暗治愈', heal: '2d8+2', uses: 2 },
  ],
  xp: 100 }
```

强度参考（对四人小队）：

| 敌人等级 | 生命 | AC | 命中 | 单次伤害 | 经验 |
|---|---|---|---|---|---|
| 杂兵（1–2 级用） | 7–15 | 11–13 | +3～+4 | 1d6+2 | 25–50 |
| 3–4 级 | 20–35 | 13–14 | +4～+5 | 1d8+3，或两次 1d6+2 | 75–150 |
| 5–6 级 | 40–65 | 14–15 | +5～+6 | 2d6+3，两次 | 200–350 |
| 7–8 级 | 70–100 | 15–16 | +6～+7 | 2d8+4，两次 | 450–700 |
| 9–12 级 | 110–160 | 16–18 | +7～+9 | 2d10+5，两到三次 | 900–1800 |
| Boss | 同级 ×2 生命 | +1 | +1 | 带一个范围技和一个充能技 | ×3 |
