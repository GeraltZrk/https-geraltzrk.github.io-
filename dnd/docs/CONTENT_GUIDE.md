# 内容编写规范（剧本数据格式）

剧本是纯数据：一个 JS 模块导出一个对象，引擎照着走。写完必须跑：

```
node tools/validate.mjs <剧本id>     # 结构、引用、条件、文风
node tools/autoplay.mjs <剧本id>     # 随机试玩，查卡死和崩溃
```

两个都要 0 error / 0 problem 才算完成。文风 warning 也要清掉（改写句子，不要绕过检查）。

## 1. 剧本包

`js/data/scenarios/<id>/index.js` 默认导出：

```js
export default {
  id: 's1444', era: 1444, title: '……', coin: '金冠',
  startDate: '1444年11月11日',
  intro: ['出身选择页顶部的两三段引子'],
  tracks: [ { key, name, desc, start, min, max, labels: ['最低档', …, '最高档'] } ],   // 世界局势
  reputations: [ { key, name, desc, start } ],                                         // 各方声望
  origins: [ { id, name, region, flag, blurb, tags: [], nationName, startScene, start: { rep:{}, world:{}, flags:[], items:{}, gold } } ],
  factions: [ { id, name, motto, blurb, tags: [], art, origins?: [originId…], start: { rep:{}, world:{}, flags:[] } } ],
  premades: [ { id, name, gender:'m'|'f', race, subrace?, cls, subclass?, background, abil:{str,dex,con,int,wis,cha}（最终值，已含种族加值）, profs:[技能id], portrait, blurb, bio, tags: [], origins?: [] } ],
  races?: [允许的种族id], classes?: [允许的职业id], backgrounds?: [允许的背景id],   // 不写 = 全部
  companions: { id: { id, name, gender, race, subrace?, cls, subclass?, abil, profs, equip:{weapon,armor,offhand,trinket}, portrait, blurb } },
  enemies: { … }, items: { … },                 // 本剧本专用的敌人和物品（格式见 DATA_GUIDE.md）
  quests: { id: { title, desc, stages: ['第1阶段提示', '第2阶段提示'], doneText } },
  codex: { id: { title, group: '历史|地理|人物|势力|种族|信仰|魔法|怪物', short, text: ['段落'], art? } },
  chapters: [ { title, note, scene, if?, effects? } ],     // 作弊菜单“跳到章节”用；effects 用来补齐该章需要的等级/同伴/标记
  flagNotes: { flag名: '给玩家看的中文说明' },             // 作弊菜单里显示
  scenes: { id: Scene },
  endings: { id: { title, subtitle, art?, text: [] } },
  endingScenes: { endingId: sceneId },                     // 每个结局对应的终幕场景
  epilogues: [ { if?, title, art?, text: [] } ],           // 结局后的“后日谈”卡片，按条件逐条显示
};
```

场景可以拆成多个文件（`act1.js` 导出 `{ id: Scene }`，在 index 里 `Object.assign` 合并）。**场景 id 全剧本唯一**，统一前缀：`序章 p_<出身>_NN`，`第N幕 aN_NN`，`终章 f_NN`，结局 `end_<id>`。

## 2. 场景

```js
a1_010: {
  id: 'a1_010',
  title: '事件窗口标题（可省）',
  chapter: '第一幕 · 灰烬之路',        // 只在每幕第一个场景写
  art: '美术key',                      // 见 js/data/art.js；没有合适的就不写
  loc: '东坎诺 · 卡斯托纳斯', date: '1444年11月12日',   // 变了才写
  text: [
    '普通段落。',
    { speaker: '科琳', text: '带说话人的台词，不要再加引号。' },
    { if: "race == 'elf'", text: '满足条件才出现的段落。' },
    { text: '旁白式的小字。', cls: 'aside' },          // cls: aside | letter
  ],
  first: ['只在第一次进入时执行的效果'],
  enter: ['每次进入都执行的效果'],
  choices: [ Choice… ],                // 或者 next: '场景id'（只有“继续”按钮）
  // combat: Encounter                 // 这个场景是开战前的铺垫：显示正文和“战斗！”按钮
  // ending: '结局id'                  // 终幕场景
}
```

每个场景必须有出口：`choices` / `next` / `combat` / `ending` 之一。

### 文本里的记号

- `{pc}` 主角名；`{ta}` 他/她；`{m:小伙子|f:姑娘}` 按性别取词；`{race}` `{cls}` `{origin}`。
- `{?条件:成立时的字|不成立时的字}` 行内条件，例：`{?flag.knows_truth:你早就知道了。|你吃了一惊。}`
- `**加粗**` `*强调*`。

## 3. 选项

```js
// 普通选项
{ text: '按钮上的字（≤40字）', goto: '场景id', effects: [...], result: '点了之后先显示的一小段结果（可省）' }

// 条件
{ text, if: "flag.x",            // 不满足就不显示
        req: "gold >= 50", reqText: '需要 50 金冠',   // 不满足显示为灰色并写明原因
        tag: '法师',             // 显示成 [法师] 前缀，用于职业/种族/背景专属选项
        once: true,              // 选过一次就消失（用于“营地/大厅”式的枢纽场景）
        cost: { gold: 20 } }     // 自动扣钱

// 检定
{ text: '说服守门人',
  check: { skill: 'persuasion', dc: 14,
           alt: ['deception'],            // 取加值高的那个
           party: true,                   // 让队里最擅长的人来（默认只算主角）
           adv: "flag.has_letter",        // 优势条件；dis: 劣势条件
           mods: [ { if: "rep.empire >= 3", n: 2, why: '帝国的名声' } ] },
  ok:   { text: '成功后的描写', effects: [...], goto: '…' },
  fail: { text: '失败后的描写', effects: [...], goto: '…' },
  crit: { … }, fumble: { … } }           // 可选：天然 20 / 天然 1 的特别结果

// 直接开打
{ text: '拔剑', combat: Encounter }
```

没有 `goto` 的选项会留在当前场景（枢纽）。这种选项必须 `once: true`，否则会无限刷。

**检定失败不能是死路。** 失败要么换一条更糟的路继续，要么付出代价（受伤、声望、钱、同伴好感、世界局势），不能只是“再试一次”。

技能 id：`athletics acrobatics sleight stealth arcana history investigation nature religion animal insight medicine perception survival deception intimidation performance persuasion`。
不带技能的属性检定用 `check: { abil: 'con', dc: 13, save: true }`。

DC 参考：简单 8–10，一般 12–13，难 15–16，很难 18–19，离谱 21+。序章和第一幕以 10–14 为主，终章 15–19。

## 4. 条件表达式

字符串，支持 `&& || ! == != < > <= >= in + - ()`，字符串用单引号。

| 写法 | 含义 |
|---|---|
| `flag.x` | 剧情标记 |
| `var.x` | 计数器 |
| `rep.x` `world.x` | 声望、世界局势数值 |
| `class` `race` `subrace` `subclass` `origin` `faction` `gender` `bg` | 当前主角的选择，例 `class in ['wizard','sorcerer']` |
| `level` `gold` `hp` `partysize` | 数值 |
| `stat.str` `mod.str` `skill.arcana` `prof.arcana` | 属性值、调整值、技能加值、是否熟练 |
| `item.x` | 背包里的数量 |
| `party.x` `met.x` `approval.x` | 同伴是否在队、是否认识、好感 |
| `quest.x` `done.x` `failed.x` | 任务阶段、是否完成/失败 |
| `visited.场景id` | 去过某场景 |
| `is.标签` | 角色标签（职业/种族/背景定义的 tags，如 `is.caster` `is.elf` `is.noble`） |

## 5. 效果

```
flag x            unflag x           var x +1 / var x =3
rep 键 +1         world 键 -1
gold +50          xp 150             level 4        （里程碑：保证至少 4 级）
hp -5             hp full            heal 2d4+2     damage 1d6
item +id 2        item -id           equip id
companion +id     companion -id      approval id +1
codex id          quest id start | quest id stage 2 | quest id done | quest id fail
date 1444年12月1日  loc 地点名        rest short | rest long
learn 能力id      log 一句话记录      toast 一句话提示     ending 结局id
```

条件效果：`{ if: "flag.x", then: ['gold +10'], else: ['rep empire -1'] }`。

## 6. 战斗

```js
combat: {
  title: '桥头伏击',
  intro: '开战时战报里的第一句描写。',
  enemies: [ { id: 'orc_raider', n: 3 }, { id: 'orc_chief', name: '裂牙' } ],
  allies: [ { id: 'militia', n: 2 } ],            // 可省：站在我方的 NPC
  specials: [ { id: 'rope', name: '砍断吊桥绳索', desc: '让桥上的敌人掉下去',
                check: { skill: 'athletics', dc: 13 },
                success: { text: '……', dmgAll: '3d6', type: 'bludgeoning' },   // 还可用 applyAll:{cond,turns} / effects / end:'win'
                fail: { text: '……', selfDmg: '1d6' } } ],
  fleeable: true,                                   // 默认可逃
  win:  { effects: ['xp 100'], goto: '…' },         // 必须有 goto
  lose: { effects: [...], goto: '…' },              // 不写 = 全灭游戏结束。主线战斗尽量写 lose：被俘、被救、丢东西
  fled: { goto: '…' },                              // 不写则用 lose
  reward: ['gold +30', 'item +healing_potion'],
}
```

每场战斗最好配一两个 `specials`（利用场景做点什么），这是“跑团感”的来源。敌人数量：序章 2–3 个弱敌；之后大致等于队伍人数，Boss 带 1–3 个帮手。

## 7. 节奏与数值

- 等级里程碑：序章结束 2 级，第一幕结束 4 级，第二幕 6 级，第三幕 8 级，终章前 10 级。用 `level N` 效果写在每幕收尾场景的 `first` 里。
- 每幕给 1 次长休（`rest long`）和 1–2 次短休的机会。
- 钱：序章手里几十，中期几百。治疗药水 50 一瓶是参考价。
- 同伴 2–4 人，分别在序章末、第一幕、第二幕入队；每人至少 3 处插话、1 个个人抉择。
- 世界局势条目 4–6 条，每幕至少有 2 次选择会推动它们，结局和后日谈按它们的值分支。
- 每个场景正文 120–450 字，3 段左右。一幕 16–24 个场景。
- 每幕至少：2 场战斗、6 次检定、1 处职业专属选项、1 处种族/出身专属选项、1 个没有正确答案的抉择。

## 8. 写之前先看

- `docs/STYLE_GUIDE.md`：文风，必须照做。
- 剧本圣经（各剧本目录下的 `BIBLE.md`）：主线、人物、标记表、译名表。**专有名词只用译名表里的写法。**

## 9. 商店

场景里加 `shop`，选项上方会多出一个“看看某某的货”按钮，玩家可以买卖。

```js
shop: { name: '行脚商老何', blurb: '一句话介绍', stock: ['healing_potion', { id: 'longsword', price: 20 }, { id: 'holy_water', if: "rep.temple >= 1" }],
        markup: 1.2,      // 价格倍率（默认 1，按物品的 value）
        buyback: 0.5,     // 收购折价（默认五折）；sell: false = 不收东西
        if: "flag.x" }    // 可选：满足条件才有这个商人
```

每幕放 1–2 个商人：一个卖补给（药水、绷带、解毒剂），一个卖这一幕等级段的武器护甲。圣物（relic）和任务物品卖不掉。
