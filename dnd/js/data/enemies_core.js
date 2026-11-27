// Core bestiary shared by all three campaigns (1022 / 1444 / 1836 AA).
// Format: docs/DATA_GUIDE.md → 敌人. `en` / `enTerms` hold English source names for the translation pass.
// `era` lists the campaigns an entry fits; it is a note for scenario writers and is not read by the engine.
// Balance: node tools/check-data.mjs --parts <class files>,js/data/enemies_core.js --enemies

const S = (str, dex, con, int, wis, cha) => ({ str, dex, con, int, wis, cha });
const ANY = [1022, 1444, 1836];
const E1022 = [1022];
const E1444 = [1444];
const E1836 = [1836];
const LATE = [1444, 1836];
const EARLY = [1022, 1444];

// Shared immunity sets.
const UNDEAD = { immune: ['poison'], condImmune: ['poisoned', 'frightened', 'charmed', 'asleep'] };
const CONSTRUCT = { immune: ['poison', 'psychic'], condImmune: ['poisoned', 'frightened', 'charmed', 'asleep', 'paralyzed'] };

const LIST = [
  // =========================================================================
  // 1 级
  // =========================================================================
  {
    id: 'vagrant_bandit', name: '流民匪', en: 'Desperate Vagrant', type: 'humanoid', level: 1, era: ANY,
    desc: '三个人，一把锈刀，剩下的拿着削尖的棍子。领头的那个光着一只脚，鞋大概换了吃的。',
    hp: 12, ac: 12, init: 1, saves: S(1, 1, 1, -1, 0, -1), xp: 25, ai: 'cunning',
    attacks: [
      { name: '锈刀', hit: 4, dmg: '1d6+2', type: 'slashing', weight: 3 },
      { name: '扔石头', hit: 4, dmg: '1d4+2', multi: 2, type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, chance: 0.3 } },
    ],
  },
  {
    id: 'village_militia', name: '乡勇', en: 'Village Militiaman', type: 'humanoid', level: 1, era: ANY,
    desc: '镇上的鞋匠和磨坊伙计，套着发霉的皮甲，矛杆是新削的。他们站得太挤了。',
    hp: 13, ac: 13, init: 0, saves: S(1, 0, 1, 0, 0, 0), xp: 25, ai: 'brute',
    attacks: [
      { name: '长矛', hit: 4, dmg: '1d8+2', type: 'piercing', weight: 3 },
      { name: '一起上', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '{name}吼了一声，旁边几个人跟着往前挤。' },
    ],
  },
  {
    id: 'cutpurse', name: '扒手', en: 'Cutpurse', type: 'humanoid', level: 1, era: ANY,
    desc: '刚才撞了你一下的小个子，现在手里多了把剔骨刀。你的钱袋在他腰上。',
    hp: 11, ac: 13, init: 3, saves: S(-1, 3, 0, 0, 0, 1), xp: 25, ai: 'cunning',
    attacks: [
      { name: '剔骨刀', hit: 4, dmg: '1d4+2', type: 'piercing', multi: 2, weight: 3 },
      { name: '撒灰', hit: 4, dmg: '1', type: 'bludgeoning', apply: { cond: 'blinded', turns: 1, save: { abil: 'dex', dc: 11 } }, recharge: 5, text: '{name}往你脸上扬了一把炉灰。' },
    ],
  },
  {
    id: 'cult_initiate', name: '邪教新信徒', en: 'Cult Initiate', type: 'humanoid', level: 1, era: ANY,
    desc: '白天在码头扛包，晚上披着染红的麻袋片念经。他手腕上的新疤还没结痂。',
    hp: 12, ac: 12, init: 0, saves: S(0, 0, 0, 0, -1, 1), xp: 25, ai: 'cunning',
    attacks: [
      { name: '祭刀', hit: 4, dmg: '1d6+2', type: 'piercing', weight: 3 },
      { name: '血誓诅咒', hit: 4, dmg: '2d6', type: 'necrotic', apply: { cond: 'hexed', turns: 2, save: { abil: 'wis', dc: 11 } }, recharge: 5 },
    ],
  },
  {
    id: 'grey_wolf', name: '灰狼', en: 'Grey Wolf', type: 'beast', level: 1, era: ANY,
    desc: '林子旁边的灰影子，肋骨一根根数得出来。它们不出声，绕着火堆转圈。',
    hp: 11, ac: 12, init: 2, saves: S(1, 2, 1, -4, 1, -2), xp: 30, ai: 'cunning', traits: { packTactics: true },
    attacks: [
      { name: '撕咬', hit: 3, dmg: '1d6+1', type: 'piercing', weight: 3 },
      { name: '扑倒', hit: 3, dmg: '1d4+1', type: 'piercing', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 11 } }, recharge: 5 },
    ],
  },
  {
    id: 'goblin_skirmisher', name: '地精散兵', en: 'Goblin Skirmisher', type: 'humanoid', level: 1, era: E1444,
    desc: '绿皮小个子，穿着从死人身上扒下来的大号锁子甲，袖子卷了三道。被兽人放出来以后，他们就自己找饭吃。',
    enTerms: { '兽人': 'Orc' },
    hp: 8, ac: 13, init: 2, saves: S(-1, 2, 0, 0, -1, -1), xp: 25, ai: 'cunning', traits: { packTactics: true },
    attacks: [
      { name: '短弯刀', hit: 4, dmg: '1d6+1', type: 'slashing', weight: 3 },
      { name: '吹箭', hit: 4, dmg: '1d4', type: 'piercing', apply: { cond: 'poisoned', turns: 2, save: { abil: 'con', dc: 11 } }, recharge: 5 },
    ],
  },
  {
    id: 'kobold_trapper', name: '狗头人陷阱手', en: 'Kobold Trapper', type: 'humanoid', level: 1, era: ANY,
    desc: '个头只到你腰，鳞片是砖红色的。他身后那条路你刚才走过，现在多了一根绊绳。',
    hp: 7, ac: 13, init: 2, saves: S(-2, 2, 0, 1, 0, -1), xp: 25, ai: 'cunning', traits: { packTactics: true },
    attacks: [
      { name: '短矛', hit: 4, dmg: '1d4+2', type: 'piercing', weight: 3 },
      { name: '拉绊索', dmg: '1d4', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 11, half: false } }, apply: { cond: 'prone', turns: 1 }, uses: 1, text: '{name}一扯绳子，地上的落叶整片翻起来。' },
    ],
  },
  {
    id: 'bnunin', name: '洞穴巨兔', en: 'Bnunin', type: 'beast', level: 1, era: ANY,
    desc: '蛇脊山脉里的兔子，个头像条狗，门牙能啃穿靴子。矮人叫它“布努宁”，见了就绕路。',
    enTerms: { '蛇脊山脉': 'Serpentspine', '布努宁': 'Bnunin' },
    hp: 12, ac: 11, init: 2, saves: S(1, 2, 1, -4, 0, -3), xp: 25, ai: 'brute',
    attacks: [
      { name: '门牙', hit: 3, dmg: '1d6+1', type: 'piercing', weight: 3 },
      { name: '后腿蹬', hit: 3, dmg: '1d8', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 11 } }, recharge: 5 },
    ],
  },
  {
    id: 'pixie', name: '皮克西', en: 'Pixie', type: 'fey', level: 1, era: ANY,
    desc: '指头大的小人，翅膀像蜻蜓。她笑得很开心，因为你的马刚刚自己跑掉了。',
    hp: 9, ac: 15, init: 4, saves: S(-3, 4, 0, 1, 1, 2), xp: 30, ai: 'cunning', resist: ['psychic'], condImmune: ['charmed'],
    attacks: [
      { name: '针刺', hit: 5, dmg: '1d4+2', type: 'piercing', multi: 2, weight: 2 },
      { name: '妖精粉', hit: 4, dmg: '1', type: 'psychic', apply: { cond: 'asleep', turns: 2, save: { abil: 'wis', dc: 11 } }, recharge: 5, text: '{name}往你头顶撒了一把亮晶晶的粉。' },
    ],
  },
  {
    id: 'shrieker', name: '尖啸菇', en: 'Shrieker', type: 'plant', level: 1, era: ANY,
    desc: '诅咒森林里那种普通的褐蘑菇，人一靠近就从中间裂开，开始尖叫。叫声会把别的东西招来。',
    enTerms: { '诅咒森林': 'Cursewood' },
    hp: 13, ac: 9, init: -3, saves: S(-3, -3, 2, -5, 0, -5), xp: 25, ai: 'brute', condImmune: ['frightened', 'charmed', 'blinded', 'prone'],
    attacks: [
      { name: '孢子', hit: 3, dmg: '1d6', type: 'poison', apply: { cond: 'poisoned', turns: 2, save: { abil: 'con', dc: 10 } } },
      { name: '尖叫', dmg: '1d4', type: 'thunder', aoe: { save: { abil: 'con', dc: 10, half: true } }, apply: { cond: 'dazed', turns: 1 }, recharge: 6 },
    ],
  },
  {
    id: 'pestilent_zombie', name: '白疫行尸', en: 'White Pestilence Zombie', type: 'undead', level: 1, era: LATE,
    desc: '皮肤白得像泡过的面团，嘴边一圈黑。白色瘟疫的病根没断干净，每过些年就在哪个村子里冒出来。',
    enTerms: { '白色瘟疫': 'White Pestilence' },
    hp: 20, ac: 8, init: -2, saves: S(1, -2, 3, -4, -2, -3), xp: 30, ai: 'brute', ...UNDEAD,
    attacks: [
      { name: '抓挠', hit: 4, dmg: '1d8+2', type: 'bludgeoning', weight: 3 },
      { name: '病咬', hit: 3, dmg: '1d4+1', type: 'piercing', apply: { cond: 'poisoned', turns: 3, save: { abil: 'con', dc: 11 } }, text: '{name}一口咬下来，伤口旁边马上泛白。' },
    ],
  },

  // =========================================================================
  // 2 级
  // =========================================================================
  {
    id: 'thug', name: '打手', en: 'Thug', type: 'humanoid', level: 2, era: ANY,
    desc: '收账的。脖子比你大腿粗，指节上缠着油布，木棒头上钉了一圈马蹄钉。',
    hp: 24, ac: 12, init: 0, saves: S(3, 0, 2, -1, 0, 0), xp: 50, ai: 'brute',
    attacks: [
      { name: '钉头棒', hit: 5, dmg: '1d6+2', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '照脸一拳', hit: 4, dmg: '1d4+2', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'man_at_arms', name: '武装扈兵', en: 'Man-at-Arms', type: 'humanoid', level: 2, era: ANY,
    desc: '领主家养的兵，锁子甲擦过油，盾上画着主人的纹章。他们一天两顿饭，打起来很守规矩。',
    hp: 20, ac: 15, init: 0, saves: S(2, 0, 2, 0, 0, 0), xp: 50, ai: 'brute',
    attacks: [
      { name: '单手剑', hit: 4, dmg: '1d6+2', type: 'slashing', multi: 2, weight: 3 },
      { name: '盾击', hit: 4, dmg: '1d4+2', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'archer', name: '弓手', en: 'Archer', type: 'humanoid', level: 2, era: ANY,
    desc: '猎户出身，背着长弓，箭囊里的箭羽颜色不一，是自己捡鸟毛粘的。',
    hp: 17, ac: 13, init: 2, saves: S(0, 3, 1, 0, 1, 0), xp: 50, ai: 'cunning',
    attacks: [
      { name: '长弓', hit: 5, dmg: '1d6+2', type: 'piercing', multi: 2, weight: 3 },
      { name: '瞄准射击', hit: 6, dmg: '3d6+2', type: 'piercing', recharge: 5, text: '{name}拉满了弓，停了一口气。' },
    ],
  },
  {
    id: 'skeleton_legionary', name: '骷髅军团兵', en: 'Skeleton Legionary', type: 'undead', level: 2, era: ANY,
    desc: '骨架上还挂着卡斯塔诺军团的鳞甲片，盾牌朽了一半。它们排着队走，脚步一样齐。',
    enTerms: { '卡斯塔诺军团': 'Castanorian Legions' },
    hp: 20, ac: 13, init: 0, saves: S(1, 1, 2, -4, -1, -4), xp: 50, ai: 'brute', ...UNDEAD, vuln: ['bludgeoning'],
    attacks: [
      { name: '短剑', hit: 4, dmg: '1d6+2', type: 'piercing', multi: 2, weight: 3 },
      { name: '列阵', buff: { cond: 'shielded', turns: 2, all: true }, uses: 1, text: '骷髅们同时把盾牌举了起来，咔的一声。' },
    ],
  },
  {
    id: 'reaver_raider', name: '格鲁迪亚掠夺者', en: 'Gerudian Reaver', type: 'humanoid', level: 2, era: E1022,
    desc: '从北边长船上跳下来的人，胡子编成辫子，斧刃上刻着家里人的名字。他们先烧粮仓。',
    enTerms: { '格鲁迪亚': 'Gerudia' },
    hp: 21, ac: 13, init: 1, saves: S(3, 1, 2, -1, 0, 0), xp: 50, ai: 'brute',
    attacks: [
      { name: '胡斧', hit: 4, dmg: '1d6+2', type: 'slashing', multi: 2, weight: 3 },
      { name: '火把', hit: 4, dmg: '1d4', type: 'fire', apply: { cond: 'burning', turns: 2, save: { abil: 'dex', dc: 11 } }, recharge: 5 },
    ],
  },
  {
    id: 'enthralled_soldier', name: '受控士兵', en: 'Enthralled Soldier', type: 'humanoid', level: 2, era: E1022,
    desc: '眼睛是睁着的，可他不看你。术士王死了一年多，有些人脑子里的那个声音还没停。',
    enTerms: { '术士王': 'Sorcerer-King' },
    hp: 24, ac: 14, init: -1, saves: S(2, 0, 2, -2, -2, -2), xp: 50, ai: 'brute', condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '长矛', hit: 4, dmg: '1d8+2', type: 'piercing', weight: 3 },
      { name: '不顾死活', hit: 5, dmg: '2d6+2', type: 'piercing', recharge: 5, text: '{name}直接撞上你的武器，往前推。' },
    ],
  },
  {
    id: 'orc_raider', name: '兽人劫掠者', en: 'Orc Raider', type: 'humanoid', level: 2, era: E1444,
    desc: '绿潮留下来的兽人，獠牙上套着铜环，背后挂着三颗风干的头。他冲你点了点下巴，意思是来。',
    enTerms: { '绿潮': 'Greentide' },
    hp: 19, ac: 13, init: 1, saves: S(3, 1, 3, -2, 0, 0), xp: 50, ai: 'brute',
    attacks: [
      { name: '大斧', hit: 5, dmg: '1d12+3', type: 'slashing', weight: 3 },
      { name: '冲锋', hit: 4, dmg: '1d6+2', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'harpy_raider', name: '鹰身女妖掠袭者', en: 'Harpy Raider', type: 'monstrosity', level: 2, era: E1444,
    desc: '上半身是女人，手臂长成了翅膀，爪子像鹰。她一张嘴能同时唱出两个音，听得人牙酸。',
    hp: 16, ac: 13, init: 2, saves: S(0, 3, 1, -1, 0, 2), xp: 50, ai: 'cunning',
    attacks: [
      { name: '钩爪', hit: 4, dmg: '1d6+2', type: 'slashing', multi: 2, weight: 3 },
      { name: '双音战歌', dmg: '1d4', type: 'psychic', aoe: { save: { abil: 'wis', dc: 11, half: true } }, apply: { cond: 'charmed', turns: 1, dc: 11, save: { abil: 'wis' } }, uses: 1, text: '{name}张开嘴，两个音一高一低地钻进耳朵。' },
    ],
  },
  {
    id: 'wild_boar', name: '野猪', en: 'Wild Boar', type: 'beast', level: 2, era: ANY,
    desc: '一身黑毛，獠牙上糊着泥。它刨了两下地，鼻子喷气。',
    hp: 24, ac: 11, init: 0, saves: S(3, 0, 3, -4, 0, -3), xp: 50, ai: 'brute',
    attacks: [
      { name: '獠牙', hit: 5, dmg: '2d6+2', type: 'slashing', weight: 3 },
      { name: '冲撞', hit: 5, dmg: '3d6+2', type: 'piercing', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'line_rifleman', name: '线列步兵', en: 'Line Rifleman', type: 'humanoid', level: 2, era: E1836,
    desc: '蓝外套，白绑腿，刺刀上了枪。他们排成两排，前排跪下，后排的枪口从前排耳朵旁边伸出来。',
    hp: 17, ac: 12, init: 0, saves: S(1, 2, 1, 0, 0, 0), xp: 50, ai: 'brute',
    attacks: [
      { name: '刺刀', hit: 4, dmg: '1d6+2', type: 'piercing', weight: 2 },
      { name: '排枪', hit: 5, dmg: '1d10+2', type: 'piercing', multi: 2, weight: 3, text: '军官的刀往下一劈，一排枪口同时冒烟。' },
    ],
  },
  {
    id: 'striker', name: '罢工工人', en: 'Striker', type: 'humanoid', level: 2, era: E1836,
    desc: '工厂门口堵着的人，手里拿着扳手和撬棍。有人在后面喊工钱的数，喊一句，前面就往前走一步。',
    hp: 16, ac: 11, init: 0, saves: S(2, 0, 2, 0, 0, 0), xp: 40, ai: 'brute',
    attacks: [
      { name: '扳手', hit: 4, dmg: '1d6+2', type: 'bludgeoning', weight: 3 },
      { name: '砸石头', dmg: '1d4', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 11, half: true } }, uses: 1, text: '后排的人捡起铺路石扔了过来。' },
    ],
  },
  {
    id: 'bandit_chief', name: '土匪头子', en: 'Bandit Chief', type: 'humanoid', level: 2, era: ANY,
    desc: '他穿着一件绣花的骑马外套，袖口上还有别人的血。外套原来的主人大概是个税官。',
    hp: 80, ac: 14, init: 2, saves: S(3, 2, 2, 0, 1, 2), xp: 200, ai: 'cunning', traits: { boss: true },
    attacks: [
      { name: '马刀', hit: 5, dmg: '1d8+3', type: 'slashing', multi: 3, weight: 3 },
      { name: '脏招', hit: 5, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 12 } }, recharge: 4 },
      { name: '火油罐', dmg: '3d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 12, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}把一个冒烟的陶罐砸在你们脚边。' },
      { name: '都给我上', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1 },
    ],
  },

  // =========================================================================
  // 3 级
  // =========================================================================
  {
    id: 'sellsword', name: '佣兵', en: 'Sellsword', type: 'humanoid', level: 3, era: ANY,
    desc: '甲是拼的，左肩一块右肩一块，剑倒是好剑。他问你出多少，听完摇摇头。',
    hp: 30, ac: 15, init: 1, saves: S(3, 1, 2, 0, 0, 0), xp: 100, ai: 'brute',
    attacks: [
      { name: '长剑', hit: 5, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '剑柄砸', hit: 5, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'crossbowman', name: '弩手', en: 'Crossbowman', type: 'humanoid', level: 3, era: EARLY,
    desc: '他躲在大盾后面上弦，一脚踩着弩镫，两只手绞得飞快。弩箭头是方的，专破锁子甲。',
    hp: 26, ac: 15, init: 1, saves: S(1, 3, 2, 0, 1, 0), xp: 100, ai: 'cunning',
    attacks: [
      { name: '重弩', hit: 6, dmg: '1d10+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '破甲箭', hit: 6, dmg: '1d10+3', type: 'piercing', apply: { cond: 'sundered', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'bc_legionary', name: '黑卡斯塔诺军团兵', en: 'Black Castanorian Legionary', type: 'humanoid', level: 3, era: E1022,
    desc: '黑漆的鳞甲，盾面上画着乌霜家的黑龙。皇帝死在了沼泽堡，可他们没接到解散的命令。',
    enTerms: { '黑卡斯塔诺': 'Black Castanor', '乌霜': 'Ebonfrost', '沼泽堡': 'Bal Mire' },
    hp: 32, ac: 16, init: 0, saves: S(3, 0, 3, 0, 1, 0), xp: 100, ai: 'brute',
    attacks: [
      { name: '军团短剑', hit: 5, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '盾墙推进', hit: 5, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 13 } }, recharge: 5, text: '盾牌连成一排，往前撞了一步。' },
    ],
  },
  {
    id: 'orc_berserker', name: '兽人狂战士', en: 'Orc Berserker', type: 'humanoid', level: 3, era: E1444,
    desc: '身上的疤是一道一道划出来的，排成花纹。他把斧头在自己胳膊上抹了一下，舔了舔。',
    hp: 34, ac: 13, init: 1, saves: S(4, 1, 3, -2, 0, 0), xp: 100, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '双手斧', hit: 5, dmg: '1d12+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '杜坎之怒', buff: { cond: 'raging', turns: 3 }, uses: 1, text: '{name}仰头吼了一声“杜坎”，眼珠子红了。' },
    ],
    enTerms: { '杜坎': 'Dookan' },
  },
  {
    id: 'goblin_tinker', name: '地精工匠', en: 'Goblin Tinker', type: 'humanoid', level: 3, era: LATE,
    desc: '戴着一副只剩一片镜子的护目镜，背了一筐叮当响的陶罐。罐口塞着破布，破布在冒烟。',
    hp: 24, ac: 13, init: 2, saves: S(-1, 3, 1, 2, 0, -1), xp: 100, ai: 'cunning',
    attacks: [
      { name: '扳手', hit: 5, dmg: '1d6+3', type: 'bludgeoning', multi: 2, weight: 2 },
      { name: '土炸弹', dmg: '3d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 12, half: true } }, recharge: 6, text: '{name}点着一个罐子，看都不看就扔了过来。' },
      { name: '酸液瓶', hit: 5, dmg: '1d6', type: 'acid', apply: { cond: 'corroded', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'ghoul', name: '食尸鬼', en: 'Ghoul', type: 'undead', level: 3, era: ANY,
    desc: '佝着背，指甲又黑又长，舌头伸出来有半尺。哪里新坟多，哪里就有它们。',
    hp: 34, ac: 12, init: 2, saves: S(1, 2, 1, -2, 0, -2), xp: 100, ai: 'cunning', ...UNDEAD,
    attacks: [
      { name: '撕咬', hit: 5, dmg: '1d8+2', type: 'piercing', multi: 2, weight: 3 },
      { name: '麻痹之爪', hit: 5, dmg: '1d6+2', type: 'slashing', apply: { cond: 'paralyzed', turns: 2, save: { abil: 'con', dc: 11 } }, recharge: 5, text: '被它抓过的地方一下子没了知觉。' },
    ],
  },
  {
    id: 'gnoll_corsair', name: '豺狼人海盗', en: 'Gnoll Corsair', type: 'humanoid', level: 3, era: E1444,
    desc: '豺狗脑袋，一身斑点，耳朵上穿了一串铜钱。他笑起来像狗在咳嗽，弯刀刃上沾着双足飞龙的毒。',
    enTerms: { '双足飞龙': 'Wyvern' },
    hp: 30, ac: 13, init: 2, saves: S(3, 2, 2, -1, 0, -1), xp: 100, ai: 'cunning', traits: { packTactics: true },
    attacks: [
      { name: '弯刀', hit: 5, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '毒刃', hit: 5, dmg: '1d6+3', type: 'slashing', extra: { dmg: '1d6', type: 'poison' }, apply: { cond: 'poisoned', turns: 2, save: { abil: 'con', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'gnoll_slaver', name: '豺狼人奴贩', en: 'Gnoll Slaver', type: 'humanoid', level: 3, era: E1444,
    desc: '他腰上缠了三圈铁链，链子头上是项圈。豺狼人管这一行叫“克拉的活儿”，克拉是第一个干这行的。',
    enTerms: { '克拉': 'Krah' },
    hp: 36, ac: 13, init: 1, saves: S(3, 1, 3, -1, 0, 0), xp: 100, ai: 'cunning',
    attacks: [
      { name: '狼牙棒', hit: 5, dmg: '1d8+3', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '套索链', hit: 5, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 12 } }, recharge: 5, text: '{name}抖开铁链，往你脖子上一套。' },
    ],
  },
  {
    id: 'kobold_dragon_cultist', name: '狗头人拜龙教徒', en: 'Kobold Dragon Cultist', type: 'humanoid', level: 3, era: ANY,
    desc: '鳞片上抹了金粉，脖子上挂着一枚咬过的金币。他们相信金子攒够了，龙父马利亚斯就会醒。',
    enTerms: { '马利亚斯': 'Malliath', '狗头人拜龙教': 'Kobold Dragon Cult' },
    hp: 24, ac: 13, init: 2, saves: S(-1, 2, 1, 1, 2, 2), xp: 100, ai: 'caster', traits: { packTactics: true },
    attacks: [
      { name: '短矛', hit: 5, dmg: '1d6+2', type: 'piercing', multi: 2, weight: 2 },
      { name: '龙火', dmg: '2d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 12, half: true } }, recharge: 6, text: '{name}朝手心吐了口唾沫，那口唾沫烧着了。' },
      { name: '鳞片祷告', heal: '2d6+2', uses: 1 },
    ],
  },
  {
    id: 'redcap', name: '红帽子', en: 'Redcap', type: 'fey', level: 3, era: ANY,
    desc: '矮得像个孩子，戴一顶湿漉漉的红帽子，穿着铁靴。帽子上的红是血染的，干了就得重新染。',
    hp: 30, ac: 13, init: 2, saves: S(3, 2, 3, -1, 1, -1), xp: 100, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '长柄镰', hit: 5, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '铁靴踩', hit: 5, dmg: '2d6+3', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'dex', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'giant_spider', name: '巨型蜘蛛', en: 'Giant Spider', type: 'beast', level: 3, era: ANY,
    desc: '腿张开有一张桌子那么宽，背上的毛是湿的。头顶的网里吊着一只裹成茧的鹿。',
    hp: 32, ac: 14, init: 3, saves: S(2, 3, 1, -4, 0, -3), xp: 100, ai: 'cunning',
    attacks: [
      { name: '毒牙', hit: 5, dmg: '1d8+3', type: 'piercing', extra: { dmg: '1d6', type: 'poison' }, multi: 2, weight: 3 },
      { name: '喷网', hit: 5, dmg: '1', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'wexonard_footman', name: '威克斯步兵', en: 'Wexonard Footman', type: 'humanoid', level: 3, era: E1444,
    desc: '紫色罩袍，长戟，靴子底钉了铁。威克斯的兵嘴碎，一边打一边骂洛伦特人。',
    enTerms: { '威克斯': 'Wex', '洛伦特': 'Lorent' },
    hp: 30, ac: 15, init: 0, saves: S(3, 0, 2, 0, 0, 0), xp: 100, ai: 'brute',
    attacks: [
      { name: '长戟', hit: 5, dmg: '1d10+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '钩腿', hit: 5, dmg: '1d6+3', type: 'slashing', apply: { cond: 'prone', turns: 1, save: { abil: 'dex', dc: 12 } }, recharge: 5 },
    ],
  },
  {
    id: 'revolutionary', name: '革命党人', en: 'Revolutionary', type: 'humanoid', level: 3, era: E1836,
    desc: '帽子上别着一枚铁皮章，口袋里塞满传单。他手里那把左轮是从警察局抢的，序号还没锉掉。',
    hp: 30, ac: 13, init: 2, saves: S(1, 2, 1, 1, 0, 2), xp: 100, ai: 'cunning',
    attacks: [
      { name: '左轮', hit: 5, dmg: '1d10+2', type: 'piercing', multi: 2, weight: 3 },
      { name: '喊口号', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '{name}跳上翻倒的板车，喊了一句，后面的人跟着喊。' },
    ],
  },
  {
    id: 'grenadier', name: '掷弹兵', en: 'Grenadier', type: 'humanoid', level: 3, era: E1836,
    desc: '个子都挑高的，戴着熊皮高帽，腰上挂一排铁球。点火用的火绳缠在手腕上，一直燃着。',
    hp: 30, ac: 14, init: 0, saves: S(3, 1, 2, 0, 0, 0), xp: 100, ai: 'brute',
    attacks: [
      { name: '刺刀', hit: 5, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '手榴弹', dmg: '2d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 12, half: true } }, uses: 1, weight: 2, text: '{name}咬掉引信盖，数到三，扔了出来。' },
    ],
  },
  {
    id: 'lizardfolk_raider', name: '蜥蜴人海寇', en: 'Lizardfolk Raider', type: 'humanoid', level: 3, era: LATE,
    desc: '从阳洲南边来的蜥蜴人，没有嘴唇，说话漏风，发不出“m”和“b”。他们抢船的法子是自己先跳海，再从另一边爬上来。',
    enTerms: { '阳洲': 'Sarhal', '蜥蜴人': 'Lizardfolk' },
    hp: 32, ac: 14, init: 1, saves: S(3, 1, 3, -1, 1, -1), xp: 100, ai: 'brute',
    attacks: [
      { name: '骨矛', hit: 5, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '撕咬', hit: 5, dmg: '2d6+3', type: 'piercing', apply: { cond: 'bleeding', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'reaver_jarl', name: '掠夺者首领', en: 'Reaver Chieftain', type: 'humanoid', level: 3, era: E1022,
    desc: '他戴着一顶缀满耳朵的熊皮帽，胡子里夹着铁环。黑冰纪元过去四十多年了。他还当这片海岸是他家的。',
    enTerms: { '黑冰纪元': 'Era of Black Ice' },
    hp: 120, ac: 15, init: 1, saves: S(4, 1, 4, 0, 1, 2), xp: 300, ai: 'brute', traits: { boss: true },
    attacks: [
      { name: '战斧', hit: 6, dmg: '1d12+4', type: 'slashing', multi: 3, weight: 3 },
      { name: '横扫', dmg: '2d8+3', type: 'slashing', aoe: { save: { abil: 'dex', dc: 13, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}抡着斧子转了一整圈。' },
      { name: '踹倒', hit: 6, dmg: '1d8+4', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 13 } }, recharge: 4 },
      { name: '北方战号', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '{name}吹响了牛角，声音传到海上。' },
    ],
  },

  // =========================================================================
  // 4 级
  // =========================================================================
  {
    id: 'knight', name: '骑士', en: 'Knight', type: 'humanoid', level: 4, era: ANY,
    desc: '板甲擦得能照人，盔顶插着一根染色的羽毛。他把面甲拉下来之前，先报了一遍自己的家名。',
    hp: 42, ac: 17, init: 0, saves: S(4, 0, 3, 0, 1, 2), xp: 150, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '长剑', hit: 6, dmg: '1d10+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '骑士的挑战', buff: { cond: 'emboldened', turns: 2 }, uses: 1, text: '{name}用剑尖指了指你：“报上名来。”' },
      { name: '盾猛击', hit: 6, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 13 } }, recharge: 5 },
    ],
  },
  {
    id: 'court_mage', name: '宫廷法师', en: 'Court Mage', type: 'humanoid', level: 4, era: ANY,
    desc: '丝袍，戒指，一本用链子拴在腰上的书。他说话前先清嗓子，然后告诉你这件事“理论上”不该发生。',
    hp: 32, ac: 12, init: 2, saves: S(-1, 2, 1, 4, 2, 1), xp: 150, ai: 'caster',
    attacks: [
      { name: '魔法飞弹', dmg: '3d4+3', type: 'force', weight: 3, hit: 20 },
      { name: '火球术', dmg: '4d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 13, half: true } }, recharge: 6, minRound: 2, text: '{name}掌心里亮起一颗豆大的火星，接着整片地烧了起来。' },
      { name: '法术护盾', buff: { cond: 'arcane_shield', turns: 1 }, recharge: 5 },
    ],
  },
  {
    id: 'war_priest', name: '随军祭司', en: 'War Priest', type: 'humanoid', level: 4, era: ANY,
    desc: '锁子甲外面套着白罩袍，钉锤柄上缠着念珠。他打你一下，就给身边的人念一句祷文。',
    hp: 40, ac: 16, init: 0, saves: S(2, 0, 2, 0, 4, 2), xp: 150, ai: 'caster',
    attacks: [
      { name: '钉锤', hit: 6, dmg: '1d8+3', type: 'bludgeoning', extra: { dmg: '1d6', type: 'radiant' }, multi: 2, weight: 3 },
      { name: '疗伤祷告', heal: '2d8+3', uses: 2 },
      { name: '祝福', buff: { cond: 'blessed', turns: 3, all: true }, uses: 1 },
    ],
  },
  {
    id: 'witch_hunter', name: '猎巫人', en: 'Witch-Hunter', type: 'humanoid', level: 4, era: ANY,
    desc: '黑斗篷，宽檐帽，脖子上挂着一串没打孔的铁片。他先看你们里面谁带着法器，再决定先打谁。',
    hp: 44, ac: 15, init: 2, saves: S(2, 3, 2, 1, 3, 1), xp: 150, ai: 'cunning', condImmune: ['charmed', 'frightened'], resist: ['psychic'],
    attacks: [
      { name: '银刃', hit: 6, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '冷铁镣铐', hit: 6, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 13 } }, recharge: 5 },
      { name: '火刑油', hit: 6, dmg: '1d6', type: 'fire', apply: { cond: 'burning', turns: 3 }, recharge: 5 },
    ],
  },
  {
    id: 'orc_shaman', name: '兽人萨满', en: 'Orc Shaman', type: 'humanoid', level: 4, era: E1444,
    desc: '眼睛蒙着一层白翳，脖子上挂满指骨。她看不见，可她每次都转向说话的那个人。',
    hp: 36, ac: 13, init: 0, saves: S(1, 0, 2, 0, 4, 2), xp: 150, ai: 'caster',
    attacks: [
      { name: '骨杖', hit: 5, dmg: '1d8+2', type: 'bludgeoning', extra: { dmg: '1d8', type: 'necrotic' }, weight: 2 },
      { name: '祖灵之怒', dmg: '3d8', type: 'necrotic', aoe: { save: { abil: 'wis', dc: 13, half: true } }, recharge: 6, minRound: 2 },
      { name: '血祭疗伤', heal: '2d8+4', uses: 2 },
      { name: '混眼诅咒', hit: 6, dmg: '1d6', type: 'psychic', apply: { cond: 'frightened', turns: 2, save: { abil: 'wis', dc: 13 } }, recharge: 5, text: '{name}朝你啐了一口，嘴里念着你的名字。她不该知道你的名字。' },
    ],
  },
  {
    id: 'hobgoblin_legionary', name: '命令秩序军团兵', en: 'Command Legionary', type: 'humanoid', level: 4, era: E1444,
    desc: '红橙色的皮肤，头发扎成髻，铁片甲一片片绑得整整齐齐。大地精的兵不喊，也不乱，退一步都要听哨子。',
    enTerms: { '命令秩序': 'The Command', '大地精': 'Hobgoblin' },
    hp: 42, ac: 17, init: 1, saves: S(3, 1, 3, 1, 1, 0), xp: 150, ai: 'brute', traits: { packTactics: true },
    attacks: [
      { name: '长枪', hit: 6, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '枪阵', buff: { cond: 'shielded', turns: 2, all: true }, uses: 1, text: '哨子响了两声，枪尖一齐放平。' },
    ],
  },
  {
    id: 'marcher_veteran', name: '边区派老兵', en: 'Marcher Veteran', type: 'humanoid', level: 4, era: E1444,
    desc: '从血腐阶梯活着回来的那批人里的一个，缺了两颗牙，盾上画的科琳教徽掉得只剩一角。',
    enTerms: { '边区派': 'Marchers', '血腐阶梯之战': 'Battle of Rottenstep', '科琳教': 'Corinite' },
    hp: 44, ac: 16, init: 1, saves: S(4, 1, 3, 0, 1, 0), xp: 150, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '双手剑', hit: 6, dmg: '2d6+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '老兵的眼力', hit: 6, dmg: '1d8+3', type: 'slashing', apply: { cond: 'exposed', turns: 1 }, recharge: 4 },
    ],
  },
  {
    id: 'gawedi_ranger', name: '加韦德游侠', en: 'Gawedi Ranger', type: 'humanoid', level: 4, era: E1444,
    desc: '绿灰两色的斗篷，靴子上沾着大森林的松针。他在你看见他之前，已经射了你一箭。',
    enTerms: { '加韦德': 'Gawed' },
    hp: 36, ac: 15, init: 3, saves: S(1, 4, 2, 0, 2, 0), xp: 150, ai: 'cunning',
    attacks: [
      { name: '长弓', hit: 7, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '猎人标记', hit: 7, dmg: '1d8+3', type: 'piercing', apply: { cond: 'marked', turns: 3 }, recharge: 5 },
    ],
  },
  {
    id: 'brown_bear', name: '棕熊', en: 'Brown Bear', type: 'beast', level: 4, era: ANY,
    desc: '它站起来比门框还高，嘴里还叼着半截蜂巢。蜜蜂跟着它，它跟着你。',
    hp: 48, ac: 12, init: 0, saves: S(4, 0, 3, -4, 1, -2), xp: 150, ai: 'brute',
    attacks: [
      { name: '熊掌', hit: 6, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '熊抱', hit: 6, dmg: '1d8+4', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 14 } }, recharge: 5 },
    ],
  },
  {
    id: 'dryad', name: '树精', en: 'Dryad', type: 'fey', level: 4, era: ANY,
    desc: '一个绿皮肤的女人从橡树里走出来，头发是叶子，脚是根。她让你把斧子放下，说得很客气。',
    hp: 36, ac: 13, init: 2, saves: S(0, 2, 1, 1, 3, 4), xp: 150, ai: 'caster', resist: ['psychic'],
    attacks: [
      { name: '荆棘鞭', hit: 6, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 2 },
      { name: '藤蔓缠绕', dmg: '1d6', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 13, half: true } }, apply: { cond: 'restrained', turns: 2, dc: 13, save: { abil: 'str' } }, recharge: 6 },
      { name: '妖精魅惑', hit: 6, dmg: '1', type: 'psychic', apply: { cond: 'charmed', turns: 2, save: { abil: 'wis', dc: 13 } }, recharge: 5 },
      { name: '树皮', buff: { cond: 'barkskin', turns: 5 }, uses: 1 },
    ],
  },
  {
    id: 'dragoon', name: '龙骑兵', en: 'Dragoon', type: 'humanoid', level: 4, era: E1836,
    desc: '骑马来，下马打。马鞍边挂着一支短卡宾枪，腰上一把弯刀。铜盔顶上一撮马鬃。',
    hp: 40, ac: 15, init: 2, saves: S(3, 2, 2, 0, 1, 0), xp: 150, ai: 'brute',
    attacks: [
      { name: '骑兵刀', hit: 6, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '卡宾枪', hit: 6, dmg: '2d8+2', type: 'piercing', recharge: 4 },
      { name: '纵马冲阵', hit: 6, dmg: '2d6+3', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 13 } }, uses: 1, text: '马蹄声一下子近了。' },
    ],
  },
  {
    id: 'ruinborn_warrior', name: '遗迹精灵战士', en: 'Ruinborn Warrior', type: 'humanoid', level: 4, era: LATE,
    desc: '个子比坎诺的精灵矮，脸上画着白泥纹。他的矛头是黑曜石，木柄上缠着祖先的头发。',
    enTerms: { '遗迹精灵': 'Ruinborn', '坎诺': 'Cannor' },
    hp: 40, ac: 14, init: 3, saves: S(2, 3, 2, 0, 2, 0), xp: 150, ai: 'cunning',
    attacks: [
      { name: '黑曜石矛', hit: 6, dmg: '1d10+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '吹箭毒', hit: 6, dmg: '1d4', type: 'piercing', apply: { cond: 'paralyzed', turns: 1, save: { abil: 'con', dc: 13 } }, recharge: 6 },
    ],
  },
  {
    id: 'fleshwrought_beast', name: '塑肉兽', en: 'Fleshwrought Beast (Ciprian the Depraved)', type: 'monstrosity', level: 4, era: E1022,
    desc: '熊的身子，狼的头，背上长着第三条胳膊。堕落者奇普里安的变化术留下来的东西。没人敢烧它的窝。',
    enTerms: { '堕落者奇普里安': 'Ciprian the Depraved' },
    hp: 50, ac: 13, init: 1, saves: S(4, 1, 4, -3, 0, -2), xp: 150, ai: 'brute',
    attacks: [
      { name: '三爪', hit: 6, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '畸变嚎叫', dmg: '2d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 12, half: true } }, apply: { cond: 'frightened', turns: 1, dc: 12, save: { abil: 'wis' } }, recharge: 6 },
    ],
  },
  {
    id: 'makata_ganger', name: '马卡塔帮众', en: 'Makata Company Ganger', type: 'humanoid', level: 4, era: E1836,
    desc: '索伊兹卡鲁垄断集团租出来打仗的地精，一人一把锯短的霰弹枪，胳膊上纹着欠条编号。',
    enTerms: { '索伊兹卡鲁垄断集团': 'Soyzkaru Cartel', '马卡塔': 'Makata Companies' },
    hp: 34, ac: 14, init: 3, saves: S(0, 3, 1, 1, 0, 0), xp: 150, ai: 'cunning', traits: { packTactics: true },
    attacks: [
      { name: '锯短霰弹枪', hit: 6, dmg: '2d6+2', type: 'piercing', multi: 2, weight: 3 },
      { name: '烟雾弹', buff: { cond: 'blurred', turns: 2, all: true }, uses: 1, text: '{name}往地上摔了个罐子，一股黄烟冒起来。' },
    ],
  },
  {
    id: 'centaur_outrider', name: '半人马骑射手', en: 'Centaur Outrider', type: 'monstrosity', level: 4, era: ANY,
    desc: '上身是人，下身是马，一张角弓背在肩上。卡斯坦把他们的祖先赶出了旧林，他们在禁原上记了一千多年。',
    enTerms: { '卡斯坦': 'Castan', '旧林': 'Oldwoods', '禁原': 'Forbidden Plains' },
    hp: 44, ac: 14, init: 2, saves: S(3, 3, 2, 0, 2, 0), xp: 150, ai: 'cunning',
    attacks: [
      { name: '角弓', hit: 6, dmg: '1d8+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '马蹄', hit: 6, dmg: '2d6+3', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 13 } }, recharge: 5, text: '{name}人立起来，两只前蹄踢了下来。' },
    ],
  },
  {
    id: 'orc_warlord', name: '兽人军阀', en: 'Orc Warlord', type: 'humanoid', level: 4, era: E1444,
    desc: '他赤手空拳，拳头上缠着铁链，链子的另一头拴着一个矮人的头盔。绿潮之后，他自称是杜坎之子的继承人。',
    enTerms: { '绿潮': 'Greentide', '杜坎之子': 'Dookanson', '奥扎姆·查达什': "Ozarm'Chadash" },
    hp: 170, ac: 16, init: 1, saves: S(5, 1, 5, 0, 2, 3), xp: 450, ai: 'brute', traits: { boss: true }, condImmune: ['frightened'],
    attacks: [
      { name: '铁链拳', hit: 7, dmg: '2d6+5', type: 'bludgeoning', multi: 3, weight: 3 },
      { name: '踏地', dmg: '3d6+2', type: 'thunder', aoe: { save: { abil: 'str', dc: 14, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 5, minRound: 2, weight: 8, text: '{name}一脚踩下去，地面裂了一道缝。' },
      { name: '决斗之礼', hit: 7, dmg: '2d10+4', type: 'bludgeoning', apply: { cond: 'stunned', turns: 1, save: { abil: 'con', dc: 14 } }, recharge: 5, text: '“奥扎姆·查达什。”{name}指着你，要单挑。' },
      { name: '战吼', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1 },
    ],
  },

  // =========================================================================
  // 5 级
  // =========================================================================
  {
    id: 'assassin', name: '刺客', en: 'Assassin', type: 'humanoid', level: 5, era: ANY,
    desc: '一身灰，脸长得让人记不住。你上次见他时，他在楼下端菜。',
    hp: 58, ac: 15, init: 4, saves: S(1, 5, 2, 2, 2, 1), xp: 250, ai: 'cunning',
    attacks: [
      { name: '双匕', hit: 7, dmg: '1d6+4', type: 'piercing', extra: { dmg: '1d6', type: 'poison' }, multi: 2, weight: 3 },
      { name: '背刺', hit: 8, dmg: '4d6+4', type: 'piercing', recharge: 5, text: '{name}不见了。下一下来自你背后。' },
      { name: '毒针', hit: 7, dmg: '1d4', type: 'piercing', apply: { cond: 'paralyzed', turns: 1, save: { abil: 'con', dc: 14 } }, recharge: 6 },
    ],
  },
  {
    id: 'noble_duellist', name: '贵族决斗者', en: 'Noble Duellist', type: 'humanoid', level: 5, era: ANY,
    desc: '他戴着手套，剑柄上镶着家传的宝石。他夸你站姿不错，意思是你马上就要倒了。',
    hp: 58, ac: 16, init: 4, saves: S(1, 5, 2, 1, 1, 3), xp: 250, ai: 'cunning',
    attacks: [
      { name: '细剑', hit: 7, dmg: '2d8+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '挑腕', hit: 7, dmg: '1d8+4', type: 'piercing', apply: { cond: 'weakened', turns: 2, save: { abil: 'dex', dc: 14 } }, recharge: 4 },
      { name: '格挡姿态', buff: { cond: 'shielded', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'merc_captain', name: '佣兵队长', en: 'Mercenary Captain', type: 'humanoid', level: 5, era: ANY,
    desc: '她左手拿着账本，右手拿着锤子。账本上记着谁欠饷，锤子是给不想还的人准备的。',
    hp: 60, ac: 17, init: 1, saves: S(4, 1, 3, 1, 2, 3), xp: 250, ai: 'brute',
    attacks: [
      { name: '战锤', hit: 7, dmg: '2d8+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '整队', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '{name}吼：“谁跑了扣一个月的饷！”' },
      { name: '锤柄捣', hit: 7, dmg: '1d8+4', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 14 } }, recharge: 5 },
    ],
  },
  {
    id: 'lorentish_knight', name: '洛伦特骑士', en: 'Lorentish Knight', type: 'humanoid', level: 5, era: E1444,
    desc: '甲胄上錾着玫瑰，披风是酒红色。紫丁香战争打了好几轮，他每一轮都去了，所以他觉得自己比你懂礼数。',
    enTerms: { '洛伦特': 'Lorent', '紫丁香战争': 'Lilac Wars' },
    hp: 62, ac: 18, init: 0, saves: S(4, 0, 3, 1, 1, 3), xp: 250, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '骑士剑', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '玫瑰冲锋', hit: 7, dmg: '3d8+4', type: 'piercing', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 14 } }, uses: 1, text: '{name}放平骑枪，策马冲了过来。' },
    ],
  },
  {
    id: 'jaddari_lightbringer', name: '贾达尔光明使者', en: 'Jaddari Lightbringer', type: 'humanoid', level: 5, era: E1444,
    desc: '太阳精灵，白袍外面套着镀金的鳞甲。他先递过来一本书，你不接，他才拔刀。',
    enTerms: { '贾达尔军团': 'Jaddari', '太阳精灵': 'Sun Elf' },
    hp: 54, ac: 16, init: 2, saves: S(2, 2, 2, 2, 4, 4), xp: 250, ai: 'caster', resist: ['radiant'],
    attacks: [
      { name: '烈阳弯刀', hit: 7, dmg: '1d8+4', type: 'slashing', extra: { dmg: '1d8', type: 'radiant' }, multi: 2, weight: 3 },
      { name: '日轮', dmg: '3d8', type: 'radiant', aoe: { save: { abil: 'con', dc: 14, half: true } }, apply: { cond: 'blinded', turns: 1 }, recharge: 6, minRound: 2, text: '{name}举起手，手心里像揣了一个正午。' },
      { name: '苏雷尔的恩光', heal: '3d8+4', uses: 1 },
    ],
  },
  {
    id: 'rival_blade', name: '对头冒险团剑手', en: 'Rival Company Blade', type: 'humanoid', level: 5, era: LATE,
    desc: '跟你们抢同一张悬赏的人。他的团徽是一只咬着金币的狐狸，新绣的，线头还没剪。',
    hp: 62, ac: 16, init: 3, saves: S(3, 3, 3, 1, 1, 2), xp: 250, ai: 'cunning',
    attacks: [
      { name: '长剑', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '抢先手', hit: 7, dmg: '2d10+4', type: 'slashing', recharge: 5 },
      { name: '喝药水', heal: '2d8+4', uses: 1, text: '{name}咬开一个小瓶子，一口灌了下去。' },
    ],
  },
  {
    id: 'rival_mage', name: '对头冒险团法师', en: 'Rival Company Mage', type: 'humanoid', level: 5, era: LATE,
    desc: '半精灵，法杖顶上挂着一盏小灯，灯里关着个什么东西在扑腾。她跟你打招呼，叫错了你的名字。',
    hp: 58, ac: 13, init: 3, saves: S(-1, 3, 1, 5, 2, 2), xp: 250, ai: 'caster',
    attacks: [
      { name: '火焰箭', hit: 7, dmg: '2d8', type: 'fire', multi: 2, weight: 3 },
      { name: '闪电束', dmg: '5d6', type: 'lightning', aoe: { save: { abil: 'dex', dc: 14, half: true } }, recharge: 6, minRound: 2 },
      { name: '缓慢术', hit: 20, dmg: '1', type: 'force', apply: { cond: 'slowed', turns: 2, save: { abil: 'wis', dc: 14 } }, recharge: 5 },
      { name: '护盾术', buff: { cond: 'arcane_shield', turns: 1 }, recharge: 5 },
    ],
  },
  {
    id: 'werewolf', name: '狼人', en: 'Werewolf', type: 'monstrosity', level: 5, era: ANY,
    desc: '先是一个披着狼皮的樵夫，然后骨头一节一节地响。大森林里的狼人是妖精下的咒，伐木人管它叫“月下的那个”。',
    enTerms: { '大森林': 'Greatwoods' },
    hp: 56, ac: 14, init: 2, saves: S(4, 2, 3, 0, 1, 0), xp: 250, ai: 'cunning', resist: ['slashing', 'piercing'], traits: { regen: 3 },
    attacks: [
      { name: '爪', hit: 7, dmg: '2d6+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '撕喉', hit: 7, dmg: '2d8+4', type: 'piercing', apply: { cond: 'bleeding', turns: 3 }, recharge: 5 },
      { name: '嚎月', dmg: '1d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 13, half: true } }, apply: { cond: 'frightened', turns: 1, dc: 13, save: { abil: 'wis' } }, uses: 1 },
    ],
  },
  {
    id: 'green_hag', name: '绿鬼婆', en: 'Green Hag', type: 'fey', level: 5, era: ANY,
    desc: '集市上卖草药的老太太，指甲缝里是黑泥。她报的价太便宜了。她走过的地方，水洼里映出来的是另一张脸。',
    hp: 72, ac: 15, init: 1, saves: S(4, 1, 3, 2, 3, 3), xp: 250, ai: 'caster', resist: ['psychic'],
    attacks: [
      { name: '长爪', hit: 7, dmg: '2d8+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '幻象', buff: { cond: 'invisible', turns: 2 }, recharge: 5, text: '{name}站在原地，然后同时站在了三个地方。' },
      { name: '自证预言', hit: 7, dmg: '2d6', type: 'psychic', apply: { cond: 'hexed', turns: 3, save: { abil: 'wis', dc: 14 } }, recharge: 4, text: '“你会绊一跤，小乖乖。”{name}说完，你脚下一软。' },
    ],
  },
  {
    id: 'ogre', name: '食人魔', en: 'Ogre', type: 'giant', level: 5, era: ANY,
    desc: '三米高，肚子比磨盘还圆，扛着一截带根的树。它闻闻你，咂了咂嘴。',
    hp: 72, ac: 12, init: -1, saves: S(5, -1, 4, -3, -2, -2), xp: 250, ai: 'brute',
    attacks: [
      { name: '树干棒', hit: 7, dmg: '2d8+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '抓起来扔', hit: 7, dmg: '3d6+4', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 15 } }, recharge: 5, text: '{name}一把攥住你的腰带，抡了出去。' },
    ],
  },
  {
    id: 'wight', name: '尸妖', en: 'Wight', type: 'undead', level: 5, era: ANY,
    desc: '一个穿锈甲的死人，眼窝里亮着两点冷光。它会说话，说的是三百年前的口音，问你是哪家的人。',
    hp: 64, ac: 15, init: 2, saves: S(3, 2, 3, 1, 2, 2), xp: 250, ai: 'cunning', ...UNDEAD, resist: ['necrotic'],
    attacks: [
      { name: '古剑', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '吸命之触', hit: 7, dmg: '3d6+3', type: 'necrotic', lifesteal: true, recharge: 4 },
      { name: '墓穴寒气', hit: 7, dmg: '1d6', type: 'cold', apply: { cond: 'withering', turns: 2, save: { abil: 'con', dc: 14 } }, recharge: 5 },
    ],
  },
  {
    id: 'hook_horror', name: '钩爪怪', en: 'Hook Horror', type: 'monstrosity', level: 5, era: ANY,
    desc: '两条胳膊尽头是骨钩，脑袋像秃鹫。它们在黑暗里敲石头传话，咔哒，咔哒。黑皮兽人拿它们当战兽。',
    enTerms: { '黑皮兽人': 'Black Orc' },
    hp: 64, ac: 15, init: 0, saves: S(4, 0, 3, -3, 1, -2), xp: 250, ai: 'brute', traits: { packTactics: true },
    attacks: [
      { name: '骨钩', hit: 7, dmg: '2d6+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '钩住拖走', hit: 7, dmg: '2d6+4', type: 'piercing', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 14 } }, recharge: 5 },
    ],
  },
  {
    id: 'secret_police', name: '秘密警察', en: 'Secret Police Agent', type: 'humanoid', level: 5, era: E1836,
    desc: '圆顶礼帽，灰呢大衣，大衣里面是一支短管左轮和一本小本子。本子上有你的名字，拼对了。',
    hp: 64, ac: 15, init: 3, saves: S(1, 4, 2, 2, 3, 1), xp: 250, ai: 'cunning',
    attacks: [
      { name: '短管左轮', hit: 7, dmg: '2d6+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '电棍', hit: 7, dmg: '1d6+3', type: 'lightning', apply: { cond: 'stunned', turns: 1, save: { abil: 'con', dc: 14 } }, recharge: 5, text: '{name}手里那根黑棍子噼啪响了一声。' },
      { name: '吹哨叫人', buff: { cond: 'focused', turns: 1, all: true }, uses: 1 },
    ],
  },
  {
    id: 'artificer_engineer', name: '奇械工程师', en: 'Artificer-Engineer', type: 'humanoid', level: 5, era: E1836,
    desc: '侏儒，背着一个嗡嗡响的黄铜箱子，箱子上伸出三根管子。他一边打一边拧螺丝，嘴里报着读数。',
    enTerms: { '奇械': 'Artifice' },
    hp: 54, ac: 15, init: 2, saves: S(0, 2, 2, 5, 2, 1), xp: 250, ai: 'caster',
    attacks: [
      { name: '电弧枪', hit: 7, dmg: '2d8+3', type: 'lightning', multi: 2, weight: 3 },
      { name: '过载', dmg: '4d6', type: 'lightning', aoe: { save: { abil: 'dex', dc: 14, half: true } }, recharge: 6, minRound: 2, text: '箱子上的指针一下子打到了头。{name}说：“哦。”' },
      { name: '修补', heal: '2d8+4', uses: 2 },
      { name: '腐蚀喷管', hit: 7, dmg: '1d8', type: 'acid', apply: { cond: 'corroded', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'seedthrall', name: '种奴', en: 'Seedthrall', type: 'plant', level: 5, era: E1836,
    desc: '曾经是个拓荒的，现在胸口长出了藤，眼眶里开着花。伊菲莱把烧过它的人收了回去。',
    enTerms: { '伊菲莱': 'Effelai' },
    hp: 82, ac: 13, init: 0, saves: S(4, 0, 4, -2, 1, -2), xp: 250, ai: 'brute', resist: ['bludgeoning', 'piercing'], vuln: ['fire'], condImmune: ['frightened', 'charmed', 'asleep'],
    attacks: [
      { name: '藤鞭', hit: 7, dmg: '2d6+3', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '孢子云', dmg: '2d6', type: 'poison', aoe: { save: { abil: 'con', dc: 13, half: true } }, apply: { cond: 'poisoned', turns: 2, dc: 13, save: { abil: 'con' } }, recharge: 6 },
    ],
  },
  {
    id: 'harimari_duelist', name: '虎人武者', en: 'Harimari Warrior', type: 'humanoid', level: 5, era: LATE,
    desc: '两米多高，一身橘黑相间的条纹，穿着丝袍，手里一对弯刀。开打之前他先跟你讲了一段道理，讲得还挺通。',
    enTerms: { '虎人': 'Harimari' },
    hp: 62, ac: 15, init: 3, saves: S(4, 3, 3, 1, 2, 2), xp: 250, ai: 'cunning',
    attacks: [
      { name: '双弯刀', hit: 7, dmg: '1d8+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '虎扑', hit: 7, dmg: '2d8+4', type: 'slashing', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 14 } }, recharge: 5 },
      { name: '虎啸', dmg: '1d6', type: 'thunder', aoe: { save: { abil: 'wis', dc: 13, half: true } }, apply: { cond: 'frightened', turns: 1, dc: 13, save: { abil: 'wis' } }, uses: 1, weight: 2 },
    ],
  },
  {
    id: 'necromancer', name: '死灵法师', en: 'Necromancer', type: 'humanoid', level: 5, era: ANY,
    desc: '他瘦得只剩一把骨头，袍子上缝满了小口袋，每个口袋里都是一截指骨。他念的咒是从一本人皮书上抄来的，抄错了几个字，所以他的死人走路有点瘸。',
    hp: 220, ac: 14, init: 2, saves: S(0, 2, 3, 5, 3, 2), xp: 750, ai: 'caster', traits: { boss: true }, resist: ['necrotic'],
    attacks: [
      { name: '黯蚀射线', hit: 8, dmg: '2d10+4', type: 'necrotic', multi: 3, weight: 3 },
      { name: '死亡波动', dmg: '4d8', type: 'necrotic', aoe: { save: { abil: 'con', dc: 15, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}张开手，你们脚下的草一圈一圈地枯了。' },
      { name: '凋零诅咒', hit: 8, dmg: '2d6', type: 'necrotic', apply: { cond: 'withering', turns: 3, save: { abil: 'con', dc: 15 } }, recharge: 4 },
      { name: '吸取生命', hit: 8, dmg: '3d10', type: 'necrotic', lifesteal: true, recharge: 5 },
      { name: '骨盾', buff: { cond: 'stoneskin', turns: 3 }, uses: 1, text: '地上的碎骨飞起来，在{name}身前拼成一面墙。' },
    ],
  },

  // =========================================================================
  // 6 级
  // =========================================================================
  {
    id: 'war_mage', name: '战斗法师', en: 'War Mage', type: 'humanoid', level: 6, era: ANY,
    desc: '皮甲外面绑着一圈法术卷轴，每卷都用不同颜色的绳子系着。他扯开一根红绳，空气就热了。',
    hp: 64, ac: 15, init: 2, saves: S(1, 2, 3, 5, 2, 1), xp: 350, ai: 'caster',
    attacks: [
      { name: '灼热射线', hit: 8, dmg: '2d8+3', type: 'fire', multi: 2, weight: 3 },
      { name: '火球术', dmg: '6d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 15, half: true } }, recharge: 6, minRound: 2, text: '{name}扯断一根红绳，卷轴烧成了一个火球。' },
      { name: '雷鸣波', dmg: '2d8', type: 'thunder', aoe: { save: { abil: 'con', dc: 15, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 6 },
      { name: '护盾术', buff: { cond: 'arcane_shield', turns: 1 }, recharge: 5 },
    ],
  },
  {
    id: 'troll', name: '巨魔', en: 'Troll', type: 'giant', level: 6, era: ANY,
    desc: '三米高，绿灰皮，鼻子垂到下巴。你砍断的手指头在地上自己往回爬。它说“我力气大，我说了算”，说完就扑上来。',
    hp: 84, ac: 15, init: 1, saves: S(5, 1, 5, -2, -1, -2), xp: 350, ai: 'brute', traits: { regen: 8 },
    attacks: [
      { name: '爪', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '断骨', hit: 7, dmg: '2d8+4', type: 'bludgeoning', apply: { cond: 'weakened', turns: 2, save: { abil: 'con', dc: 15 } }, recharge: 5, text: '{name}攥住你的胳膊往反方向一掰。巨魔管这叫“断骨”，是礼数。' },
    ],
  },
  {
    id: 'griffon', name: '狮鹫', en: 'Griffon', type: 'monstrosity', level: 6, era: ANY,
    desc: '鹰头狮身，翅膀展开有两丈。马尔霍德的狮鹫骑士从小养它们，野生的就只当你是马。',
    enTerms: { '马尔霍德': 'Marrhold' },
    hp: 76, ac: 14, init: 3, saves: S(4, 3, 3, -4, 2, -1), xp: 350, ai: 'cunning',
    attacks: [
      { name: '喙与爪', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '俯冲', hit: 8, dmg: '3d8+4', type: 'piercing', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 15 } }, recharge: 5, text: '{name}拔高，收翅，像石第一样砸下来。' },
    ],
  },
  {
    id: 'wyvern', name: '双足飞龙', en: 'Wyvern', type: 'dragon', level: 6, era: ANY,
    desc: '褐里透红的鳞，两条腿，一条带倒刺的尾巴。炼金师出大价钱收它的毒，说那东西能化开一切活物。',
    hp: 80, ac: 14, init: 1, saves: S(4, 1, 4, -3, 1, -2), xp: 350, ai: 'brute', resist: ['poison'],
    attacks: [
      { name: '撕咬', hit: 7, dmg: '2d6+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '毒尾', hit: 7, dmg: '2d6+4', type: 'piercing', extra: { dmg: '3d6', type: 'poison' }, apply: { cond: 'poisoned', turns: 3, save: { abil: 'con', dc: 15 } }, recharge: 4, text: '尾巴从{name}头顶甩过来，倒刺上挂着黄水。' },
    ],
  },
  {
    id: 'war_mechanim', name: '战斗机械人', en: 'War Mechanim', type: 'construct', level: 6, era: E1836,
    desc: '一人多高的铁人，胸口一块雕花的达姆斯塔尔核心发着蓝光，左臂是一挺旋转枪管。它的编号刷在背上，有一道被人用刀划掉了。',
    enTerms: { '达姆斯塔尔': 'Damestear', '核心': 'Kauga' },
    hp: 80, ac: 17, init: 0, saves: S(4, 0, 4, 1, 0, -3), xp: 350, ai: 'brute', ...CONSTRUCT, vuln: ['lightning'],
    attacks: [
      { name: '铁拳', hit: 7, dmg: '2d6+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '转管扫射', dmg: '3d8', type: 'piercing', aoe: { save: { abil: 'dex', dc: 14, half: true } }, recharge: 6, minRound: 2, text: '{name}的左臂开始转，嗡的一声。' },
    ],
  },
  {
    id: 'airship_marine', name: '飞艇陆战队', en: 'Airship Marine', type: 'humanoid', level: 6, era: E1836,
    desc: '皮帽，护目镜，腰上挂着一圈缆钩。他们是顺着绳子从天上滑下来的，靴底还在冒烟。',
    hp: 66, ac: 16, init: 3, saves: S(3, 3, 3, 0, 1, 0), xp: 350, ai: 'cunning',
    attacks: [
      { name: '登舷刀', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '双管手枪', hit: 7, dmg: '2d10+3', type: 'piercing', recharge: 4 },
      { name: '缆钩', hit: 7, dmg: '1d8+4', type: 'piercing', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 14 } }, recharge: 5 },
    ],
  },
  {
    id: 'deep_crow', name: '深渊鸦', en: 'Deep Crow', type: 'monstrosity', level: 6, era: ANY,
    desc: '一只像牛那么大的乌鸦，喙分成两片，像剪子。头上一簇红眼睛挤在一起，每只都在看你。',
    hp: 72, ac: 15, init: 3, saves: S(3, 3, 3, -2, 2, -1), xp: 350, ai: 'cunning', traits: { packTactics: true },
    attacks: [
      { name: '剪喙', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '剪断', hit: 7, dmg: '2d8+4', type: 'slashing', apply: { cond: 'bleeding', turns: 3 }, recharge: 5 },
    ],
  },
  {
    id: 'vampire_spawn', name: '吸血鬼仆从', en: 'Vampire Spawn', type: 'undead', level: 6, era: LATE,
    desc: '脸白得发青，嘴唇倒是红的，镜子里照不出来。主人放他出来觅食，他还记得自己以前是个马夫。',
    hp: 72, ac: 15, init: 3, saves: S(3, 3, 3, 0, 1, 1), xp: 350, ai: 'cunning', ...UNDEAD, resist: ['necrotic'], traits: { regen: 5 },
    attacks: [
      { name: '爪', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '吸血', hit: 7, dmg: '2d8+4', type: 'piercing', extra: { dmg: '2d6', type: 'necrotic' }, lifesteal: true, recharge: 4, text: '{name}扑上来，咬住了你的脖子。' },
    ],
  },
  {
    id: 'challumata', name: '青铜守像', en: 'Challúmata', type: 'construct', level: 6, era: LATE,
    desc: '一尊淡青铜色的雕像，脸是哭的。奴主贵族用灌了魂的“死铜”铸它们守墓，魂还在里面。',
    enTerms: { '死铜': 'Necrochalchum', '奴主贵族': 'Slaver-Nobles' },
    hp: 76, ac: 17, init: -1, saves: S(4, -1, 4, -2, 0, -3), xp: 350, ai: 'brute', ...CONSTRUCT, resist: ['slashing', 'piercing'], vuln: ['radiant'],
    attacks: [
      { name: '铜拳', hit: 7, dmg: '2d8+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '哭嚎', dmg: '2d8', type: 'psychic', aoe: { save: { abil: 'wis', dc: 14, half: true } }, apply: { cond: 'frightened', turns: 1, dc: 14, save: { abil: 'wis' } }, recharge: 6, text: '{name}张开铜嘴，里面传出一个人的哭声。' },
    ],
  },
  {
    id: 'hobgoblin_banneret', name: '命令秩序旗官', en: 'Command Banner-Officer', type: 'humanoid', level: 6, era: E1444,
    desc: '背上插一面三角旗，旗上是一头老虎。他吹的哨子是铜的，吹一声。他手下的兵就换一个阵。',
    enTerms: { '命令秩序': 'The Command' },
    hp: 86, ac: 18, init: 2, saves: S(4, 2, 3, 2, 2, 2), xp: 350, ai: 'cunning',
    attacks: [
      { name: '朴刀', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '变阵', buff: { cond: 'emboldened', turns: 2, all: true }, recharge: 5, text: '铜哨响了三声。' },
      { name: '点穴', hit: 7, dmg: '1d8+4', type: 'bludgeoning', apply: { cond: 'stunned', turns: 1, save: { abil: 'con', dc: 14 } }, recharge: 5 },
    ],
  },
  {
    id: 'drakon', name: '岩龙', en: 'Drake (wingless drakon of Gor Vazumbrog)', type: 'dragon', level: 6, era: LATE,
    desc: '没有翅膀的龙种，红里带黑，能顺着墙往上爬。西山驿的坑里养了一窝，穿刺龙部的兽人骑着它们打仗。',
    enTerms: { '西山驿': 'Gor Vazumbrog', '穿刺龙部': 'Skewered Drake' },
    hp: 80, ac: 16, init: 2, saves: S(4, 2, 4, -2, 1, 0), xp: 350, ai: 'brute', resist: ['fire'],
    attacks: [
      { name: '撕咬', hit: 7, dmg: '2d6+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '火息', dmg: '3d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 14, half: true } }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'fire_elemental', name: '火元素', en: 'Fire Elemental', type: 'elemental', level: 6, era: ANY,
    desc: '一团人形的火，走过的草地留下一串焦脚印。它不说话，只是噼啪响。',
    hp: 64, ac: 14, init: 3, saves: S(1, 3, 3, -2, 0, -2), xp: 350, ai: 'brute', immune: ['fire', 'poison'], condImmune: ['poisoned', 'paralyzed', 'restrained', 'prone', 'asleep', 'charmed'], vuln: ['cold'],
    attacks: [
      { name: '烈焰之触', hit: 7, dmg: '2d6+3', type: 'fire', multi: 2, weight: 3 },
      { name: '火旋', weight: 2, dmg: '2d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 14, half: true } }, apply: { cond: 'burning', turns: 2 }, recharge: 6 },
    ],
  },
  {
    id: 'infernal_tormentor', name: '地狱刑吏', en: 'Infernal Tormentor (devil of Kazraiel)', type: 'fiend', level: 6, era: ANY,
    desc: '剥了皮的红肉身子，长着山羊腿，手里拎一根带刺的铁链。它是怒王子卡兹拉伊尔手下干脏活的。',
    enTerms: { '怒王子卡兹拉伊尔': 'Kazraiel, the Wroth Prince', '地狱王庭': 'Infernal Court' },
    hp: 76, ac: 15, init: 2, saves: S(4, 2, 4, 1, 2, 2), xp: 350, ai: 'cunning', resist: ['fire', 'cold'], immune: ['poison'], condImmune: ['poisoned'],
    attacks: [
      { name: '刺链', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '剥皮钩', hit: 7, dmg: '2d6+4', type: 'slashing', apply: { cond: 'bleeding', turns: 3 }, recharge: 4 },
      { name: '地狱火', hit: 7, dmg: '3d6', type: 'fire', apply: { cond: 'burning', turns: 3 }, recharge: 5 },
    ],
  },
  {
    id: 'basilisk', name: '蛇怪', en: 'Basilisk', type: 'monstrosity', level: 6, era: ANY,
    desc: '八条腿的大蜥蜴，眼皮耷拉着。它的洞口站着一圈石头人，有一个还举着盾。',
    hp: 84, ac: 15, init: -1, saves: S(4, -1, 4, -4, 1, -2), xp: 350, ai: 'brute',
    attacks: [
      { name: '撕咬', hit: 7, dmg: '2d6+4', type: 'piercing', extra: { dmg: '1d8', type: 'poison' }, multi: 2, weight: 3 },
      { name: '石化凝视', weight: 2, dmg: '1d6', type: 'necrotic', aoe: { save: { abil: 'con', dc: 14, half: true } }, apply: { cond: 'paralyzed', turns: 1, dc: 14, save: { abil: 'con' } }, recharge: 6, minRound: 2, text: '{name}抬起了眼皮。别看它。' },
    ],
  },
  {
    id: 'hag_mother', name: '鬼婆之母', en: 'Coven Mother (hag)', type: 'fey', level: 6, era: ANY,
    desc: '她坐在一口能装下一头牛的锅边，锅里在煮东西。你不想知道是什么。鬼婆凑满三个才成一个巫会，她是另外两个的娘。',
    hp: 320, ac: 16, init: 2, saves: S(4, 2, 4, 3, 4, 4), xp: 1050, ai: 'caster', traits: { boss: true }, resist: ['psychic', 'cold'], condImmune: ['charmed', 'frightened'],
    attacks: [
      { name: '铁指甲', hit: 8, dmg: '2d8+5', type: 'slashing', multi: 3, weight: 3 },
      { name: '锅里的东西', dmg: '4d8', type: 'acid', aoe: { save: { abil: 'dex', dc: 15, half: true } }, apply: { cond: 'corroded', turns: 2 }, recharge: 5, minRound: 2, weight: 8, text: '{name}一脚踢翻了大锅。' },
      { name: '噩梦之言', hit: 8, dmg: '3d6', type: 'psychic', apply: { cond: 'frightened', turns: 3, save: { abil: 'wis', dc: 15 } }, recharge: 4 },
      { name: '剜心咒', hit: 8, dmg: '2d10+4', type: 'necrotic', apply: { cond: 'hexed', turns: 4, save: { abil: 'wis', dc: 15 } }, recharge: 5 },
      { name: '换张脸', buff: { cond: 'invisible', turns: 2 }, uses: 1 },
    ],
  },

  // =========================================================================
  // 7 级
  // =========================================================================
  {
    id: 'wyvern_rider', name: '弗恩双足飞龙骑手', en: 'Vernman Wyvern Rider', type: 'humanoid', level: 7, era: LATE,
    desc: '飞龙从孵出来那天起就只认他一个。骑手腿上绑着皮带，手里一支长骑枪，枪尖上涂着飞龙自己的毒。',
    enTerms: { '弗恩': 'Verne', '双足飞龙': 'Wyvern' },
    hp: 100, ac: 16, init: 3, saves: S(4, 3, 4, 1, 2, 2), xp: 550, ai: 'cunning',
    attacks: [
      { name: '骑枪与撕咬', hit: 8, dmg: '2d8+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '毒尾横扫', dmg: '3d8', type: 'poison', aoe: { save: { abil: 'con', dc: 15, half: true } }, apply: { cond: 'poisoned', turns: 2, dc: 15, save: { abil: 'con' } }, recharge: 6, minRound: 2 },
      { name: '俯冲刺击', hit: 9, dmg: '4d8+4', type: 'piercing', recharge: 5, text: '飞龙收翅，{name}把枪尖压低了。' },
    ],
  },
  {
    id: 'annis_hag', name: '安妮丝鬼婆', en: 'Annis Hag', type: 'fey', level: 7, era: ANY,
    desc: '比食人魔还高，牙是铁的，指甲是铁的。山里的巨人族怕她，她吃孩子，吃完把骨头挂在门口。',
    enTerms: { '巨人族': 'Giantkin' },
    hp: 108, ac: 16, init: 1, saves: S(5, 1, 5, 1, 2, 2), xp: 550, ai: 'brute', resist: ['cold'],
    attacks: [
      { name: '铁爪', hit: 8, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '碾骨抱', hit: 8, dmg: '3d8+5', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 16 } }, recharge: 5, text: '{name}把你搂进怀里，一边挤一边哼歌。' },
    ],
  },
  {
    id: 'steam_construct', name: '蒸汽魔像', en: 'Steam Construct', type: 'construct', level: 7, era: E1836,
    desc: '锅炉做的肚子，活塞做的腿，烟囱从后背伸出来。它是给矿上搬石头造的，后来有人往它脑袋里换了一张打孔卡。',
    hp: 110, ac: 17, init: -2, saves: S(5, -2, 5, -4, 0, -5), xp: 550, ai: 'brute', ...CONSTRUCT, resist: ['fire'], vuln: ['cold'],
    attacks: [
      { name: '活塞锤', hit: 8, dmg: '2d8+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '泄压', dmg: '4d6', type: 'fire', aoe: { save: { abil: 'con', dc: 15, half: true } }, recharge: 6, minRound: 2, text: '{name}身上所有阀门一起打开，白汽喷了一屋子。' },
    ],
  },
  {
    id: 'treant', name: '树人', en: 'Treant', type: 'plant', level: 7, era: ANY,
    desc: '那棵橡树刚才不在那里。它的脾气看人怎么待过它：这一棵身上有好几道斧痕。',
    hp: 105, ac: 16, init: -1, saves: S(6, -1, 5, 1, 3, 1), xp: 550, ai: 'brute', resist: ['bludgeoning', 'piercing'], vuln: ['fire'],
    attacks: [
      { name: '枝臂', hit: 8, dmg: '2d8+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '根须拔地', dmg: '2d8', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 15, half: true } }, apply: { cond: 'restrained', turns: 2, dc: 15, save: { abil: 'str' } }, recharge: 6 },
    ],
  },
  {
    id: 'ettin', name: '双头巨人', en: 'Ettin', type: 'giant', level: 7, era: ANY,
    desc: '两个脑袋，一个想往左，一个想往右，一路上都在吵。黑皮兽人给它们穿甲，当攻城槌用。',
    enTerms: { '黑皮兽人': 'Black Orc' },
    hp: 112, ac: 14, init: -1, saves: S(5, -1, 5, -3, 1, -1), xp: 550, ai: 'brute', condImmune: ['blinded', 'charmed', 'asleep'],
    attacks: [
      { name: '左斧右锤', hit: 8, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '两个头一起砸', hit: 8, dmg: '3d10+5', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 15 } }, recharge: 5, text: '两个脑袋难得意见一致。' },
    ],
  },
  {
    id: 'manticore', name: '蝎尾狮', en: 'Manticore', type: 'monstrosity', level: 7, era: ANY,
    desc: '狮子的身子，一张男人的脸，尾巴上一簇铁刺。布勒瓦尔人说它们以前是拉玛苏，被一个镇尼拧坏了。',
    enTerms: { '布勒瓦尔': 'Bulwar', '拉玛苏': 'Lamassu', '镇尼': 'Djinn' },
    hp: 100, ac: 15, init: 3, saves: S(4, 3, 4, 0, 2, 0), xp: 550, ai: 'cunning',
    attacks: [
      { name: '爪咬', hit: 8, dmg: '2d8+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '尾刺齐射', weight: 2, dmg: '2d8', type: 'piercing', aoe: { save: { abil: 'dex', dc: 15, half: true } }, apply: { cond: 'poisoned', turns: 2, dc: 15, save: { abil: 'con' } }, recharge: 6, minRound: 2, text: '{name}甩尾，一蓬铁刺扎过来。' },
    ],
  },
  {
    id: 'gorebeak', name: '血喙钩爪怪', en: 'Gorebeak', type: 'undead', level: 7, era: LATE,
    desc: '一只钩爪怪，可是瘦得皮包骨，嘴边一圈干血。血灾逼它喝过自己的血。它就不再是活物了。',
    enTerms: { '血灾': 'Bloodscourge' },
    hp: 104, ac: 15, init: 2, saves: S(5, 2, 4, -2, 1, -1), xp: 550, ai: 'brute', ...UNDEAD, traits: { regen: 4 },
    attacks: [
      { name: '骨钩', hit: 8, dmg: '2d8+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '吸血啄', hit: 8, dmg: '3d8+4', type: 'piercing', lifesteal: true, recharge: 4 },
    ],
  },
  {
    id: 'air_elemental', name: '风元素', en: 'Air Elemental', type: 'elemental', level: 7, era: ANY,
    desc: '一股站着不走的旋风，卷着沙子、树叶和一只鞋。风声里有人在笑。',
    hp: 84, ac: 15, init: 5, saves: S(2, 5, 3, -2, 0, -2), xp: 550, ai: 'cunning', immune: ['poison', 'lightning'], resist: ['thunder'], condImmune: ['poisoned', 'paralyzed', 'restrained', 'prone', 'asleep', 'charmed'],
    attacks: [
      { name: '风拳', hit: 8, dmg: '2d6+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '旋风', weight: 2, dmg: '2d8', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 15, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 6 },
    ],
  },
  {
    id: 'hedine_temptress', name: '赫丁的魅魔', en: 'Temptress of Hedine', type: 'fiend', level: 7, era: ANY,
    desc: '一个很好看的人，好看得不对劲：她的影子长着翅膀。她是欲之女主赫丁的使女，专找有心事的人。',
    enTerms: { '欲之女主赫丁': 'Hedine, the Mistress of Lust' },
    hp: 92, ac: 15, init: 3, saves: S(1, 3, 3, 3, 3, 5), xp: 550, ai: 'caster', resist: ['fire', 'cold', 'poison'], condImmune: ['charmed'],
    attacks: [
      { name: '刀一样的指甲', hit: 8, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '一吻', hit: 8, dmg: '4d8', type: 'psychic', lifesteal: true, recharge: 4 },
      { name: '魅惑', hit: 9, dmg: '1', type: 'psychic', apply: { cond: 'charmed', turns: 2, save: { abil: 'wis', dc: 15 } }, recharge: 5, text: '{name}叫了你一声小名。只有你娘这么叫过。' },
    ],
  },
  {
    id: 'effelai_strangler', name: '伊菲莱绞杀藤', en: 'Effelai Strangler', type: 'plant', level: 7, era: LATE,
    desc: '从树冠上垂下来的一把藤，摸上去是温的，会跳。整片伊菲莱林子是一个活物，这是它的手指。',
    enTerms: { '伊菲莱': 'Effelai' },
    hp: 110, ac: 14, init: 2, saves: S(5, 2, 5, -3, 2, -3), xp: 550, ai: 'cunning', resist: ['bludgeoning', 'piercing'], vuln: ['fire'], condImmune: ['blinded', 'frightened', 'charmed', 'asleep', 'prone'],
    attacks: [
      { name: '缠绞', hit: 8, dmg: '2d8+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '勒紧', hit: 8, dmg: '3d8+4', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 15 } }, recharge: 5 },
      { name: '催眠花粉', dmg: '1d6', type: 'poison', aoe: { save: { abil: 'con', dc: 14, half: true } }, apply: { cond: 'asleep', turns: 1 }, recharge: 6 },
    ],
  },
  {
    id: 'wendigo', name: '温迪戈', en: 'Wendigo', type: 'fey', level: 7, era: LATE,
    desc: '一具瘦得像晾衣杆的东西，头上长着鹿角，嘴咧到耳根。北洇河的人说，吃过人的人会变成这个。',
    enTerms: { '洇河': 'Ynn' },
    hp: 90, ac: 15, init: 4, saves: S(4, 4, 3, 0, 2, 0), xp: 550, ai: 'cunning', resist: ['cold'], condImmune: ['frightened'],
    attacks: [
      { name: '冻爪', hit: 8, dmg: '2d8+4', type: 'slashing', extra: { dmg: '1d6', type: 'cold' }, multi: 2, weight: 3 },
      { name: '饥饿的叫声', weight: 2, dmg: '1d8', type: 'psychic', aoe: { save: { abil: 'wis', dc: 15, half: true } }, apply: { cond: 'frightened', turns: 2, dc: 15, save: { abil: 'wis' } }, recharge: 6, text: '林子里有人学你的声音喊救命。' },
    ],
  },
  {
    id: 'archmage', name: '大法师', en: 'Archmage', type: 'humanoid', level: 7, era: ANY,
    desc: '一个戴老花镜的老头，袍子上全是墨渍。他身边的书自己翻页。他说他不想打，然后叹了口气，因为你们好像很想。',
    hp: 340, ac: 16, init: 3, saves: S(0, 3, 3, 7, 5, 3), xp: 1650, ai: 'caster', traits: { boss: true }, resist: ['psychic'],
    attacks: [
      { name: '奥术飞弹', hit: 20, dmg: '4d4+4', type: 'force', multi: 3, weight: 3 },
      { name: '连锁闪电', dmg: '6d8', type: 'lightning', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}伸出一根手指。闪电从你身上跳到旁边的人身上。' },
      { name: '冰风暴', dmg: '4d6', type: 'cold', aoe: { save: { abil: 'dex', dc: 16, half: true } }, apply: { cond: 'chilled', turns: 2 }, recharge: 5 },
      { name: '定身术', hit: 20, dmg: '1', type: 'psychic', apply: { cond: 'paralyzed', turns: 2, save: { abil: 'wis', dc: 16 } }, recharge: 5 },
      { name: '护盾术', buff: { cond: 'arcane_shield', turns: 1 }, recharge: 4 },
      { name: '时间加速', buff: { cond: 'hasted', turns: 3 }, uses: 1 },
    ],
  },

  // =========================================================================
  // 8 级
  // =========================================================================
  {
    id: 'hill_giant', name: '丘陵巨人', en: 'Hill Giant', type: 'giant', level: 8, era: ANY,
    desc: '五米高，一身羊皮缝的袍子，腰上挂着一口抢来的铜钟当铃铛。它刚吃过一整头牛，还饿。',
    hp: 130, ac: 14, init: -1, saves: S(6, -1, 5, -3, -1, -2), xp: 700, ai: 'brute',
    attacks: [
      { name: '巨棒', hit: 8, dmg: '3d8+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '扔石头', weight: 2, dmg: '2d10', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 15, half: true } }, recharge: 6, minRound: 2, text: '{name}拔起一块界碑扔了过来。' },
    ],
  },
  {
    id: 'rune_golem', name: '符文魔像', en: 'Dwarven Rune Golem', type: 'construct', level: 8, era: ANY,
    desc: '众矮人之国留下来的石头守卫，胸口刻满发光的符文。它守的金库可能早就空了，它不知道。',
    enTerms: { '众矮人之国': 'Aul-Dwarov' },
    hp: 115, ac: 17, init: -1, saves: S(6, -1, 5, -4, 0, -5), xp: 700, ai: 'brute', ...CONSTRUCT, resist: ['fire'],
    attacks: [
      { name: '石拳', hit: 8, dmg: '2d10+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '符文脉冲', weight: 2, dmg: '3d8', type: 'force', aoe: { save: { abil: 'con', dc: 16, half: true } }, apply: { cond: 'slowed', turns: 2 }, recharge: 6, minRound: 2, text: '{name}胸口的符文一齐亮了。' },
    ],
  },
  {
    id: 'sea_serpent', name: '海蛇怪', en: 'Sea Serpent', type: 'monstrosity', level: 8, era: ANY,
    desc: '先是浪里一截背，像一排礁石，然后礁石动了。水手说杀一条够一座城吃一年，前提是你能杀。',
    hp: 120, ac: 15, init: 2, saves: S(6, 2, 5, -4, 1, -2), xp: 700, ai: 'brute', resist: ['cold'],
    attacks: [
      { name: '撕咬', hit: 8, dmg: '2d8+5', type: 'piercing', multi: 2, weight: 3 },
      { name: '缠船', hit: 8, dmg: '2d10+5', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 16 } }, recharge: 5 },
      { name: '甩尾激浪', weight: 2, dmg: '2d8', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 16, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 6 },
    ],
  },
  {
    id: 'vampire', name: '吸血鬼', en: 'Vampire', type: 'undead', level: 8, era: LATE,
    desc: '一位很有礼貌的先生，等你请他才进门。科乌里亚的老家族都这样。他伤重了会化成一团雾，回棺材里去。',
    enTerms: { '科乌里亚': 'Corvuria' },
    hp: 126, ac: 16, init: 4, saves: S(5, 4, 4, 3, 3, 5), xp: 700, ai: 'cunning', ...UNDEAD, resist: ['necrotic'], traits: { regen: 6 },
    attacks: [
      { name: '爪', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '吸血', hit: 9, dmg: '3d8+5', type: 'piercing', extra: { dmg: '3d6', type: 'necrotic' }, lifesteal: true, recharge: 4, text: '{name}托住你的下巴，像要吻你。' },
      { name: '支配凝视', hit: 9, dmg: '1', type: 'psychic', apply: { cond: 'charmed', turns: 2, save: { abil: 'wis', dc: 16 } }, recharge: 5 },
    ],
  },
  {
    id: 'night_hag', name: '夜鬼婆', en: 'Night Hag', type: 'fiend', level: 8, era: ANY,
    desc: '紫黑皮，白头发，牙齿像钉子。她从暗影位面来，夜里坐在睡着的人胸口上。她肯教人死灵术，开价很高。',
    enTerms: { '暗影位面': 'Shadow Plane' },
    hp: 118, ac: 17, init: 2, saves: S(4, 2, 4, 3, 4, 4), xp: 700, ai: 'caster', resist: ['fire', 'cold', 'necrotic'], condImmune: ['charmed'],
    attacks: [
      { name: '爪', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '入梦', hit: 9, dmg: '4d10', type: 'psychic', apply: { cond: 'asleep', turns: 2, save: { abil: 'wis', dc: 16 } }, recharge: 5, text: '{name}凑到你耳边，说了一句晚安。' },
      { name: '噩梦', hit: 9, dmg: '2d8', type: 'psychic', apply: { cond: 'frightened', turns: 3, save: { abil: 'wis', dc: 16 } }, recharge: 4 },
    ],
  },
  {
    id: 'bheur_hag', name: '冬鬼婆', en: 'Bheur Hag', type: 'fey', level: 8, era: ANY,
    desc: '蓝皮，白发冻成一根根冰条，拄着一根灰木拐杖。远格鲁迪亚的冬天有一半是她带来的，北方的诗人能把她唱回去。',
    enTerms: { '格鲁迪亚': 'Gerudia', '诗人': 'Skalds' },
    hp: 105, ac: 16, init: 2, saves: S(4, 2, 4, 2, 4, 3), xp: 700, ai: 'caster', immune: ['cold'], condImmune: ['charmed'],
    attacks: [
      { name: '灰木杖', hit: 9, dmg: '2d8+5', type: 'bludgeoning', extra: { dmg: '1d8', type: 'cold' }, multi: 2, weight: 3 },
      { name: '暴风雪', weight: 2, dmg: '2d8', type: 'cold', aoe: { save: { abil: 'con', dc: 16, half: true } }, apply: { cond: 'chilled', turns: 2 }, recharge: 6, minRound: 2 },
      { name: '冻住', hit: 9, dmg: '2d6', type: 'cold', apply: { cond: 'chilled', turns: 2, save: { abil: 'con', dc: 16 } }, recharge: 5 },
    ],
  },
  {
    id: 'young_dragon', name: '年轻的龙', en: 'Young Dragon', type: 'dragon', level: 8, era: ANY,
    desc: '马那么大，鳞还没长硬，可它已经开始攒金子了。窝里的金币才铺满一个角，它看你的眼神像看那块没铺满的地方。',
    hp: 115, ac: 16, init: 1, saves: S(6, 1, 5, 2, 2, 4), xp: 700, ai: 'brute', resist: ['fire'], condImmune: ['frightened'],
    attacks: [
      { name: '爪与牙', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '龙息', weight: 2, dmg: '4d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 6, minRound: 2, text: '{name}的喉咙亮了。' },
    ],
  },
  {
    id: 'wroth_knight', name: '怒王子的骑士', en: 'Wroth Knight of Kazraiel', type: 'fiend', level: 8, era: ANY,
    desc: '一身焦黑的板甲，接缝里往外冒火。头盔里没有脸，只有一团红光。它为怒王子卡兹拉伊尔打仗，从不问为什么？',
    enTerms: { '怒王子卡兹拉伊尔': 'Kazraiel, the Wroth Prince' },
    hp: 112, ac: 17, init: 1, saves: S(6, 1, 5, 1, 2, 3), xp: 700, ai: 'brute', resist: ['fire', 'cold'], immune: ['poison'], condImmune: ['poisoned', 'frightened'],
    attacks: [
      { name: '焰刃', hit: 9, dmg: '2d8+5', type: 'slashing', extra: { dmg: '1d8', type: 'fire' }, multi: 2, weight: 3 },
      { name: '怒火', buff: { cond: 'raging', turns: 3 }, uses: 1, text: '{name}的甲缝里喷出火来。' },
      { name: '地狱烙印', hit: 9, dmg: '2d10+5', type: 'fire', apply: { cond: 'burning', turns: 3 }, recharge: 4 },
    ],
  },
  {
    id: 'shaytan', name: '沙伊坦', en: 'Shaytan', type: 'elemental', level: 8, era: ANY,
    desc: '土与石头的巨灵，皮肤是黑铁色，胡子里卡着金砂。巨灵杀不死，只能放逐或者锁住，它知道这一点。',
    enTerms: { '巨灵': 'Genie' },
    hp: 110, ac: 17, init: 0, saves: S(6, 0, 5, 2, 3, 3), xp: 700, ai: 'brute', immune: ['poison'], condImmune: ['poisoned', 'paralyzed', 'prone'],
    attacks: [
      { name: '石锤', hit: 9, dmg: '2d10+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '大地震', weight: 2, dmg: '3d8', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 16, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 6, minRound: 2 },
    ],
  },
  {
    id: 'precursor_sentinel', name: '先驱哨兵', en: 'Precursor Sentinel', type: 'construct', level: 8, era: LATE,
    desc: '银白色的金属人，没有一条焊缝，脸是一块光滑的镜子。它守在先驱精灵的废墟门口，问了你话，用的是没人会的语言。',
    enTerms: { '先驱精灵': 'Precursor Elves' },
    hp: 112, ac: 18, init: 2, saves: S(5, 2, 5, 3, 3, 0), xp: 700, ai: 'cunning', ...CONSTRUCT, resist: ['force', 'lightning'],
    attacks: [
      { name: '光刃', hit: 9, dmg: '2d8+5', type: 'radiant', multi: 2, weight: 3 },
      { name: '净化射线', hit: 9, dmg: '6d8', type: 'radiant', recharge: 5, text: '{name}的镜子脸上亮起一行字，接着亮起一道光。' },
      { name: '禁锢场', dmg: '2d6', type: 'force', aoe: { save: { abil: 'str', dc: 16, half: true } }, apply: { cond: 'restrained', turns: 1 }, recharge: 6 },
    ],
  },
  {
    id: 'obsidian_runeguard', name: '黑曜石符文卫', en: 'Obsidian Blood-Rune Warrior', type: 'humanoid', level: 8, era: E1836,
    desc: '从地心上来的矮人，皮肤灰得像火山灰，胳膊上的血符文还在往外渗。他们的符文之父坐在黑曜石王座上，打败仗的将军要去见他。',
    enTerms: { '黑曜石矮人': 'Obsidian Dwarf', '符文之父': 'Runefather' },
    hp: 115, ac: 18, init: 0, saves: S(5, 0, 6, 1, 3, 1), xp: 700, ai: 'brute', resist: ['fire', 'poison'], condImmune: ['frightened'],
    attacks: [
      { name: '黑曜石斧', hit: 9, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '血符爆裂', dmg: '4d8', type: 'fire', aoe: { save: { abil: 'con', dc: 16, half: true } }, recharge: 6, minRound: 2, text: '{name}割开手掌，按在斧面上。' },
      { name: '岩浆血', hit: 9, dmg: '2d6+5', type: 'fire', apply: { cond: 'burning', turns: 3 }, recharge: 4 },
    ],
  },
  {
    id: 'witch_king', name: '巫师王', en: 'Witch-King', type: 'humanoid', level: 8, era: LATE,
    desc: '魔导院的规矩管不到东坎诺，所以他自己定规矩。他的王冠是一圈铁，铁上拴着他学徒的戒指。',
    enTerms: { '魔导院': 'Magisterium', '东坎诺': 'Escann', '巫师王': 'Witch-King' },
    hp: 400, ac: 17, init: 3, saves: S(1, 3, 4, 8, 5, 5), xp: 2100, ai: 'caster', traits: { boss: true }, resist: ['psychic', 'necrotic'], condImmune: ['charmed'],
    attacks: [
      { name: '支配之言', hit: 10, dmg: '2d10+5', type: 'psychic', multi: 3, weight: 3 },
      { name: '血月火雨', dmg: '7d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 17, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}抬头看天。天变红了。' },
      { name: '夺心', hit: 20, dmg: '1', type: 'psychic', apply: { cond: 'charmed', turns: 2, save: { abil: 'wis', dc: 17 } }, recharge: 4, text: '“跪下。”你的膝盖先于你听懂了这句话。' },
      { name: '死亡指令', hit: 10, dmg: '5d10', type: 'necrotic', recharge: 5 },
      { name: '护身结界', buff: { cond: 'warded', turns: 3 }, uses: 1 },
      { name: '吸魂', hit: 10, dmg: '4d8', type: 'necrotic', lifesteal: true, recharge: 5 },
    ],
  },

  // =========================================================================
  // 9 级
  // =========================================================================
  {
    id: 'efreet', name: '伊夫利特', en: 'Efreet', type: 'elemental', level: 9, era: ANY,
    desc: '火的巨灵，四米高，皮肤像烧红的铜，戴着金耳环。他问你想许什么愿，问得很不耐烦。',
    enTerms: { '巨灵': 'Genie' },
    hp: 118, ac: 17, init: 2, saves: S(6, 2, 5, 3, 3, 5), xp: 1000, ai: 'brute', immune: ['fire'], condImmune: ['burning', 'frightened'],
    attacks: [
      { name: '火焰弯刀', hit: 9, dmg: '2d8+5', type: 'slashing', extra: { dmg: '1d8', type: 'fire' }, multi: 2, weight: 3 },
      { name: '火柱', dmg: '3d8', type: 'fire', aoe: { save: { abil: 'dex', dc: 16, half: true } }, apply: { cond: 'burning', turns: 2 }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'frost_giant', name: '霜巨人', en: 'Frost Giant', type: 'giant', level: 9, era: ANY,
    desc: '六米高，胡子上挂着冰，披着一张猛犸皮。他说霜王格鲁德的宫殿还在海下面，他迟早要把它捞上来。',
    enTerms: { '格鲁德': 'Frost King Gerud' },
    hp: 110, ac: 15, init: -1, saves: S(7, -1, 6, 0, 2, 1), xp: 1000, ai: 'brute', immune: ['cold'],
    attacks: [
      { name: '冰斧', hit: 9, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '冰块', dmg: '2d8', type: 'cold', aoe: { save: { abil: 'dex', dc: 16, half: true } }, apply: { cond: 'chilled', turns: 2 }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'hydra', name: '多头蛇', en: 'Hydra', type: 'monstrosity', level: 9, era: ANY,
    desc: '五个脑袋，五个脖子，一个肚子。砍掉一个，断口冒泡，过一会儿长出两个来。',
    hp: 130, ac: 15, init: 1, saves: S(6, 1, 6, -4, 1, -2), xp: 1000, ai: 'brute', traits: { regen: 5 },
    attacks: [
      { name: '群咬', hit: 9, dmg: '1d10+5', type: 'piercing', multi: 3, weight: 3 },
      { name: '五头齐扑', dmg: '3d8', type: 'piercing', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 6, weight: 2 },
    ],
  },
  {
    id: 'xhazob_demon', name: '哈佐布恶魔', en: 'Xhazob Demon', type: 'fiend', level: 9, era: ANY,
    desc: '一大堆粘在一起的胳膊和嘴，颜色像烧过的骨头。豺狼人的哈佐布秘教杀了很多人才把它叫出来。',
    enTerms: { '哈佐布秘教': 'Xhazobkult', '哈佐布': 'Xhazob' },
    hp: 136, ac: 16, init: 2, saves: S(6, 2, 6, -1, 2, 2), xp: 1000, ai: 'brute', resist: ['fire', 'cold', 'lightning'], immune: ['poison'], condImmune: ['poisoned', 'frightened'],
    attacks: [
      { name: '乱抓', hit: 9, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '吞噬', hit: 9, dmg: '4d10', type: 'necrotic', lifesteal: true, recharge: 5 },
      { name: '尸臭', dmg: '2d8', type: 'poison', aoe: { save: { abil: 'con', dc: 16, half: true } }, apply: { cond: 'poisoned', turns: 2, dc: 16, save: { abil: 'con' } }, recharge: 6, weight: 2 },
    ],
  },
  {
    id: 'blackened_knight', name: '焦黑王子的骑士', en: 'Knight of the Blackened Prince (Ashentree fey)', type: 'fey', level: 9, era: LATE,
    desc: '他的甲是烧焦的树皮，剑是一根黑荆棘。灰烬之树的妖精要把东坎诺变回森林，碰上伐木的、修路的，他就来。',
    enTerms: { '焦黑王子': 'Blackened Prince', '灰烬之树': 'Ashentree Pact', '东坎诺': 'Escann' },
    hp: 140, ac: 18, init: 3, saves: S(5, 3, 5, 2, 4, 5), xp: 1000, ai: 'cunning', resist: ['psychic', 'fire'], condImmune: ['charmed', 'frightened'],
    attacks: [
      { name: '荆棘剑', hit: 10, dmg: '2d10+5', type: 'piercing', multi: 2, weight: 3 },
      { name: '灰烬之誓', hit: 10, dmg: '3d10', type: 'fire', apply: { cond: 'burning', turns: 3 }, recharge: 5, text: '{name}报了一个名字。那是被卡斯坦烧掉的那棵树的名字。' },
      { name: '妖精步', buff: { cond: 'blurred', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'bellowing_soul', name: '嚎魂', en: 'Bellowing Soul (Book of Canrec)', type: 'undead', level: 9, era: LATE,
    desc: '一团灰白的影子，脸拉得很长，一直张着嘴在叫。白色瘟疫的死者，魂被锁进了坎雷克的书里，书页一翻，它们就出来。',
    enTerms: { '坎雷克之书': 'Book of Canrec', '白色瘟疫': 'White Pestilence' },
    hp: 110, ac: 15, init: 3, saves: S(0, 3, 4, 0, 3, 4), xp: 1000, ai: 'cunning', ...UNDEAD, resist: ['cold'], immune: ['poison', 'necrotic'], vuln: ['radiant'], condImmune: ['poisoned', 'frightened', 'charmed', 'asleep', 'restrained', 'prone', 'paralyzed'],
    attacks: [
      { name: '冷手', hit: 9, dmg: '2d8+4', type: 'necrotic', multi: 2, weight: 3 },
      { name: '嚎叫', dmg: '3d8', type: 'psychic', aoe: { save: { abil: 'wis', dc: 16, half: true } }, apply: { cond: 'frightened', turns: 2, dc: 16, save: { abil: 'wis' } }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'purple_worm', name: '紫虫', en: 'Purple Worm', type: 'monstrosity', level: 9, era: ANY,
    desc: '先是地在抖，然后墙上开了一个洞，洞口全是牙。有人说蛇脊山脉一半的隧道是它们啃出来的。',
    enTerms: { '蛇脊山脉': 'Serpentspine' },
    hp: 160, ac: 15, init: -2, saves: S(7, -2, 6, -5, -1, -3), xp: 1000, ai: 'brute',
    attacks: [
      { name: '巨口', hit: 9, dmg: '3d8+6', type: 'piercing', multi: 2, weight: 3 },
      { name: '毒尾针', hit: 9, dmg: '2d6+6', type: 'piercing', extra: { dmg: '4d6', type: 'poison' }, apply: { cond: 'poisoned', turns: 2, save: { abil: 'con', dc: 17 } }, recharge: 5 },
    ],
  },
  {
    id: 'death_knight', name: '死亡骑士', en: 'Death Knight', type: 'undead', level: 9, era: ANY,
    desc: '一身黑甲，甲上的家徽被刮掉了。他生前发过誓，后来违了誓，死了也不让他躺下。他的马是骨头的。',
    hp: 400, ac: 19, init: 1, saves: S(7, 1, 6, 2, 4, 5), xp: 3000, ai: 'brute', traits: { boss: true }, ...UNDEAD, resist: ['necrotic', 'cold'],
    attacks: [
      { name: '黑剑', hit: 10, dmg: '2d10+6', type: 'slashing', multi: 3, weight: 3 },
      { name: '地狱火球', dmg: '7d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 17, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}把剑往地上一插，地缝里冒出黑色的火。' },
      { name: '违誓者的威压', dmg: '2d8', type: 'necrotic', aoe: { save: { abil: 'wis', dc: 17, half: true } }, apply: { cond: 'frightened', turns: 2, dc: 17, save: { abil: 'wis' } }, uses: 1 },
      { name: '斩首', hit: 10, dmg: '4d10+6', type: 'slashing', recharge: 5 },
      { name: '亡者之盾', buff: { cond: 'shielded', turns: 3 }, uses: 1 },
    ],
  },
  {
    id: 'great_mechanim', name: '巨型机械人', en: 'Great Mechanim', type: 'construct', level: 9, era: LATE,
    desc: '一座房子那么高的先驱铁人，从隐厦的泥里爬出来，背上长着青苔。它胸口的核心有人头那么大，正在一明一暗地闪。',
    enTerms: { '隐厦': 'Insyaa', '核心': 'Kauga', '先驱精灵': 'Precursor Elves' },
    hp: 420, ac: 19, init: 0, saves: S(7, 0, 7, 3, 2, -2), xp: 3000, ai: 'brute', traits: { boss: true }, ...CONSTRUCT, resist: ['fire', 'cold'], vuln: ['lightning'],
    attacks: [
      { name: '巨拳', hit: 10, dmg: '2d10+6', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '核心过载', dmg: '7d6', type: 'force', aoe: { save: { abil: 'con', dc: 17, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}胸口的核心从蓝变白。' },
      { name: '踩踏', dmg: '4d8', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 17, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 5 },
      { name: '抓起', hit: 10, dmg: '2d10+6', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 18 } }, recharge: 4 },
      { name: '自检修复', heal: '4d10+10', uses: 1, text: '{name}停了一下，身上的铁片自己拧回了原位。' },
    ],
  },

  // =========================================================================
  // 10 级
  // =========================================================================
  {
    id: 'djinn', name: '镇尼', en: 'Djinn', type: 'elemental', level: 10, era: ANY,
    desc: '风的巨灵，腰以下是一团旋风，头巾上别着一颗鸽蛋大的蓝宝石。古时候的拉玛苏给他们守过宫殿。',
    enTerms: { '巨灵': 'Genie', '拉玛苏': 'Lamassu' },
    hp: 145, ac: 17, init: 4, saves: S(6, 4, 5, 3, 4, 5), xp: 1200, ai: 'cunning', immune: ['lightning', 'thunder'], condImmune: ['prone', 'restrained'],
    attacks: [
      { name: '弯刀', hit: 10, dmg: '2d10+6', type: 'slashing', extra: { dmg: '1d8', type: 'lightning' }, multi: 2, weight: 3 },
      { name: '旋风', dmg: '4d8', type: 'thunder', aoe: { save: { abil: 'str', dc: 17, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 6, minRound: 2, weight: 2 },
      { name: '雷击', hit: 10, dmg: '4d10', type: 'lightning', recharge: 6 },
    ],
  },
  {
    id: 'marid', name: '马立德', en: 'Marid', type: 'elemental', level: 10, era: ANY,
    desc: '水的巨灵，蓝皮，胡子是流动的水，一直往下滴，滴不完。他最瞧不起的是许愿的人，其次是不许愿的人。',
    enTerms: { '巨灵': 'Genie' },
    hp: 150, ac: 17, init: 1, saves: S(6, 1, 6, 3, 4, 5), xp: 1200, ai: 'brute', resist: ['acid', 'cold', 'lightning'],
    attacks: [
      { name: '三叉戟', hit: 10, dmg: '2d10+6', type: 'piercing', multi: 2, weight: 3 },
      { name: '水龙', dmg: '4d8', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 17, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 6, minRound: 2, weight: 2 },
      { name: '溺水', hit: 10, dmg: '3d10', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 17 } }, recharge: 5 },
    ],
  },
  {
    id: 'fire_giant', name: '火巨人', en: 'Fire Giant', type: 'giant', level: 10, era: ANY,
    desc: '皮肤像炭，头发像炉火，在禁原的火山旁边打铁。他的剑比你的马长。',
    enTerms: { '禁原': 'Forbidden Plains' },
    hp: 160, ac: 18, init: -1, saves: S(7, -1, 6, 0, 2, 1), xp: 1200, ai: 'brute', immune: ['fire'],
    attacks: [
      { name: '巨剑', hit: 10, dmg: '2d10+6', type: 'slashing', multi: 2, weight: 3 },
      { name: '熔岩块', dmg: '4d8', type: 'fire', aoe: { save: { abil: 'dex', dc: 17, half: true } }, apply: { cond: 'burning', turns: 2 }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'roc', name: '大鹏', en: 'Roc', type: 'monstrosity', level: 10, era: ANY,
    desc: '它的影子先到，盖住了整片草场。在禁原上，它叼走的是马和猛犸。半人马把它当风神的兆头。',
    enTerms: { '禁原': 'Forbidden Plains', '风神': 'Irdaeos' },
    hp: 160, ac: 16, init: 2, saves: S(7, 2, 6, -4, 2, -1), xp: 1200, ai: 'cunning',
    attacks: [
      { name: '钩喙', hit: 10, dmg: '3d8+6', type: 'piercing', multi: 2, weight: 3 },
      { name: '抓上天', hit: 10, dmg: '4d10+6', type: 'slashing', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 18 } }, recharge: 5, text: '{name}一爪子抓住你，地面一下子远了。' },
    ],
  },
  {
    id: 'mantle_serpent', name: '地幔蛇', en: 'Mantle Serpent', type: 'monstrosity', level: 10, era: E1836,
    desc: '原初蛇渊的岩浆海里游着的东西，鳞片是冷下来的黑石，缝里透红光。它吃地幔鲸，你只是顺路。',
    enTerms: { '原初蛇渊': 'Primeval Serpentdepths', '地幔鲸': 'Mantle whale' },
    hp: 150, ac: 17, init: 1, saves: S(7, 1, 6, -3, 2, -2), xp: 1200, ai: 'brute', immune: ['fire'],
    attacks: [
      { name: '熔牙', hit: 10, dmg: '2d10+6', type: 'piercing', multi: 2, weight: 3 },
      { name: '岩浆浪', dmg: '4d8', type: 'fire', aoe: { save: { abil: 'dex', dc: 17, half: true } }, apply: { cond: 'burning', turns: 2 }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'precursor_warden', name: '先驱典狱', en: 'Precursor Warden', type: 'construct', level: 10, era: LATE,
    desc: '六条腿的银色机械，背上驮着一个透明的罐子，罐子里泡着一样还在动的东西。它守的是先驱精灵的牢，不是宝库。',
    enTerms: { '先驱精灵': 'Precursor Elves' },
    hp: 135, ac: 18, init: 2, saves: S(6, 2, 6, 3, 3, -1), xp: 1200, ai: 'cunning', ...CONSTRUCT, resist: ['force', 'lightning', 'fire'],
    attacks: [
      { name: '刃足', hit: 10, dmg: '2d10+6', type: 'slashing', multi: 2, weight: 3 },
      { name: '收容光束', hit: 10, dmg: '3d10', type: 'force', apply: { cond: 'paralyzed', turns: 1, save: { abil: 'con', dc: 17 } }, recharge: 6 },
      { name: '净化脉冲', dmg: '4d8', type: 'radiant', aoe: { save: { abil: 'con', dc: 17, half: true } }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'demilich', name: '半巫妖', en: 'Demilich', type: 'undead', level: 10, era: ANY,
    desc: '一颗飘着的骷髅，眼窝里嵌着两颗宝石，下巴上镶着金牙。巫妖饿久了没有魂吃，就剩这个。它跟着盗墓的人走。',
    enTerms: { '巫妖': 'Lich' },
    hp: 120, ac: 19, init: 4, saves: S(-5, 4, 4, 6, 4, 4), xp: 1200, ai: 'caster', ...UNDEAD, immune: ['poison', 'necrotic', 'psychic'], condImmune: ['poisoned', 'frightened', 'charmed', 'asleep', 'paralyzed', 'prone', 'restrained', 'stunned', 'blinded'],
    attacks: [
      { name: '宝石射线', hit: 10, dmg: '3d10', type: 'necrotic', multi: 2, weight: 3 },
      { name: '吸魂嚎叫', dmg: '4d6', type: 'necrotic', aoe: { save: { abil: 'con', dc: 17, half: true } }, apply: { cond: 'withering', turns: 2, dc: 17, save: { abil: 'con' } }, recharge: 6, minRound: 2, weight: 2, text: '{name}张开下巴，金牙后面什么都没有，只有风声。' },
    ],
  },
  {
    id: 'infernal_champion', name: '地狱王庭的勇士', en: 'Champion of the Infernal Court', type: 'fiend', level: 10, era: ANY,
    desc: '三米高，羊角上缠着金链，背后一对烧破的翅膀。阿尔德坦佩尔的洞底有一座血庙，它是从那里爬上来的，替七位堕神收账。',
    enTerms: { '地狱王庭': 'Infernal Court', '阿尔德坦佩尔': 'Aldtempel' },
    hp: 460, ac: 19, init: 3, saves: S(8, 3, 7, 4, 5, 6), xp: 3600, ai: 'brute', traits: { boss: true }, resist: ['cold'], immune: ['fire', 'poison'], condImmune: ['poisoned', 'frightened', 'charmed'],
    attacks: [
      { name: '烙铁巨刃', hit: 11, dmg: '2d10+7', type: 'slashing', multi: 3, weight: 3 },
      { name: '地狱烈焰', dmg: '8d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 18, half: true } }, apply: { cond: 'burning', turns: 2 }, recharge: 5, minRound: 2, weight: 8, text: '{name}张开翅膀，翅膀下面是一个火坑。' },
      { name: '七罪契约', dmg: '3d8', type: 'psychic', aoe: { save: { abil: 'wis', dc: 18, half: true } }, apply: { cond: 'hexed', turns: 3, dc: 18, save: { abil: 'wis' } }, uses: 1, text: '{name}念出你们每个人最想要的东西，一样不差。' },
      { name: '尾鞭', hit: 11, dmg: '3d10+7', type: 'bludgeoning', apply: { cond: 'stunned', turns: 1, save: { abil: 'con', dc: 18 } }, recharge: 5 },
      { name: '吞噬灵魂', hit: 11, dmg: '4d10', type: 'necrotic', lifesteal: true, recharge: 5 },
    ],
  },

  // =========================================================================
  // 11 级
  // =========================================================================
  {
    id: 'kraken', name: '克拉肯', en: 'Kraken', type: 'monstrosity', level: 11, era: ANY,
    desc: '巨人坟海里一抹黑影比船还长。格鲁迪亚人烧它的墨点灯，可没人愿意去取。一条触手先搭上了船舷。',
    enTerms: { '巨人坟海': "Giant's Grave Sea", '格鲁迪亚': 'Gerudia' },
    hp: 170, ac: 17, init: 0, saves: S(8, 0, 7, 1, 3, 2), xp: 1500, ai: 'brute', immune: ['cold', 'lightning'], condImmune: ['frightened', 'paralyzed'],
    attacks: [
      { name: '触手', hit: 10, dmg: '2d10+7', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '卷走', hit: 10, dmg: '3d10+7', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 18 } }, recharge: 5 },
      { name: '喷墨', dmg: '3d8', type: 'poison', aoe: { save: { abil: 'con', dc: 18, half: true } }, apply: { cond: 'blinded', turns: 1 }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'vault_golem', name: '远古守库魔像', en: 'Aul-Dwarov Vault Golem', type: 'construct', level: 11, era: ANY,
    desc: '众矮人之国最后一批铸的守卫，黑铁身子，眼睛是两块红宝石。它站在门前两千年，门后是什么只有它知道。',
    enTerms: { '众矮人之国': 'Aul-Dwarov' },
    hp: 170, ac: 19, init: -1, saves: S(8, -1, 7, -3, 1, -5), xp: 1500, ai: 'brute', ...CONSTRUCT, resist: ['fire', 'cold', 'lightning'],
    attacks: [
      { name: '黑铁拳', hit: 10, dmg: '2d10+7', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '毒气阀', dmg: '4d8', type: 'poison', aoe: { save: { abil: 'con', dc: 18, half: true } }, apply: { cond: 'poisoned', turns: 2, dc: 18, save: { abil: 'con' } }, recharge: 6, minRound: 2, weight: 2 },
      { name: '符文锁', hit: 10, dmg: '2d10', type: 'force', apply: { cond: 'slowed', turns: 2, save: { abil: 'wis', dc: 18 } }, recharge: 5 },
    ],
  },
  {
    id: 'errant_prince', name: '游荡亲王', en: 'Errant-Prince (second-generation vampire)', type: 'undead', level: 11, era: LATE,
    desc: '最早那批十字军领主之一，被艾塔琳德亲口变成了吸血鬼。他穿的还是十一世纪的衣服，过不了流水，进门要人请。',
    enTerms: { '艾塔琳德': 'Ettalinde the Wretched', '游荡亲王': 'Errant-Princes' },
    hp: 160, ac: 18, init: 5, saves: S(7, 5, 6, 4, 5, 7), xp: 1500, ai: 'cunning', ...UNDEAD, resist: ['necrotic', 'cold'], traits: { regen: 6 },
    attacks: [
      { name: '十字军长剑', hit: 11, dmg: '2d10+7', type: 'slashing', multi: 2, weight: 3 },
      { name: '吸血', hit: 11, dmg: '3d8+7', type: 'piercing', extra: { dmg: '4d6', type: 'necrotic' }, lifesteal: true, recharge: 4 },
      { name: '化雾', buff: { cond: 'blurred', turns: 2 }, recharge: 5, text: '{name}散成一片红雾，又在你身后聚起来。' },
      { name: '血仆之令', hit: 20, dmg: '1', type: 'psychic', apply: { cond: 'charmed', turns: 2, save: { abil: 'wis', dc: 18 } }, recharge: 6 },
    ],
  },
  {
    id: 'adult_dragon', name: '成年巨龙', en: 'Adult Dragon', type: 'dragon', level: 11, era: ANY,
    desc: '它睡在金子上，金子化开又凝住，粘在它肚皮上像一层甲。巨龙能活三千年，越老越凶，它才活了三百年。',
    hp: 520, ac: 19, init: 2, saves: S(8, 2, 7, 3, 4, 6), xp: 4500, ai: 'brute', traits: { boss: true }, resist: ['fire', 'cold'], condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '爪牙尾', hit: 11, dmg: '2d10+7', type: 'slashing', multi: 3, weight: 3 },
      { name: '龙息', dmg: '10d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 18, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}的胸口鼓了起来。你们有一眨眼的时间。' },
      { name: '龙威', dmg: '1d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 18, half: true } }, apply: { cond: 'frightened', turns: 2, dc: 18, save: { abil: 'wis' } }, uses: 1 },
      { name: '振翅', dmg: '3d8', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 18, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 5 },
    ],
  },
  {
    id: 'lich', name: '巫妖', en: 'Lich', type: 'undead', level: 11, era: ANY,
    desc: '一具穿着学袍的骷髅，指骨上套满戒指。它的魂藏在别处的一个匣子里。不按时喂它魂，它会疯。看样子它最近吃得不错。',
    hp: 520, ac: 18, init: 3, saves: S(0, 3, 6, 8, 6, 5), xp: 4500, ai: 'caster', traits: { boss: true }, ...UNDEAD, resist: ['cold', 'lightning', 'necrotic'], immune: ['poison'], condImmune: ['poisoned', 'frightened', 'charmed', 'asleep', 'paralyzed'],
    attacks: [
      { name: '黯蚀射线', hit: 11, dmg: '3d10+5', type: 'necrotic', multi: 3, weight: 3 },
      { name: '死亡之环', dmg: '9d6', type: 'necrotic', aoe: { save: { abil: 'con', dc: 19, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}手里的戒指同时亮了，一圈黑光往外推。' },
      { name: '麻痹之触', hit: 11, dmg: '3d6', type: 'cold', apply: { cond: 'paralyzed', turns: 2, save: { abil: 'con', dc: 19 } }, recharge: 5 },
      { name: '寒冰锥', dmg: '6d8', type: 'cold', aoe: { save: { abil: 'con', dc: 19, half: true } }, apply: { cond: 'chilled', turns: 2 }, recharge: 6 },
      { name: '护身符', buff: { cond: 'arcane_shield', turns: 1 }, recharge: 4 },
    ],
  },

  // =========================================================================
  // 12 级
  // =========================================================================
  {
    id: 'arzakathn_child', name: '阿扎卡斯之子', en: 'Child of Arzakathn', type: 'elemental', level: 12, era: E1836,
    desc: '原初蛇渊那座会走的火山生下的东西，肉是岩浆，皮是刚凝的黑石。他们跟外人做生意，每笔都要拿血封口。',
    enTerms: { '阿扎卡斯': 'Arzakathn', '原初蛇渊': 'Primeval Serpentdepths' },
    hp: 160, ac: 18, init: 1, saves: S(8, 1, 8, 2, 3, 3), xp: 1800, ai: 'brute', immune: ['fire', 'poison'], vuln: ['cold'], condImmune: ['poisoned', 'burning', 'paralyzed'],
    attacks: [
      { name: '熔岩拳', hit: 11, dmg: '2d12+7', type: 'bludgeoning', extra: { dmg: '2d6', type: 'fire' }, multi: 2, weight: 3 },
      { name: '喷发', dmg: '5d8', type: 'fire', aoe: { save: { abil: 'dex', dc: 19, half: true } }, apply: { cond: 'burning', turns: 2 }, recharge: 6, minRound: 2, weight: 2 },
    ],
  },
  {
    id: 'runefather_guard', name: '符文之父近卫', en: 'Runefather\'s Guard (Obsidian Legion)', type: 'humanoid', level: 12, era: E1836,
    desc: '黑曜石军团里最老的矮人，全身的血符文连成一张网，盔甲和皮肉长在了一起。连奴隶都不许进的大殿，他们在里面站岗。',
    enTerms: { '黑曜石军团': 'Obsidian Legion', '符文之父': 'Runefather' },
    hp: 180, ac: 19, init: 1, saves: S(8, 1, 8, 2, 5, 2), xp: 1800, ai: 'brute', resist: ['fire', 'poison', 'necrotic'], condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '血符战锤', hit: 12, dmg: '2d12+7', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '符文禁锢', hit: 12, dmg: '2d10', type: 'force', apply: { cond: 'stunned', turns: 1, save: { abil: 'con', dc: 19 } }, recharge: 5 },
      { name: '血誓', buff: { cond: 'stoneskin', turns: 3 }, uses: 1, text: '{name}身上的符文全亮了，血从缝里流出来，又流了回去。' },
    ],
  },
  {
    id: 'precursor_guardian', name: '先驱守护者', en: 'Precursor Guardian', type: 'construct', level: 12, era: ANY,
    desc: '先驱精灵最后一座城的门神，十米高，银色，背后浮着一圈转动的环。它的脸上刻着一句话。学者念出来是：“你们来晚了。”',
    enTerms: { '先驱精灵': 'Precursor Elves' },
    hp: 520, ac: 20, init: 2, saves: S(9, 2, 9, 6, 6, 3), xp: 5400, ai: 'brute', traits: { boss: true }, ...CONSTRUCT, resist: ['fire', 'cold', 'lightning'],
    attacks: [
      { name: '光刃双臂', hit: 12, dmg: '2d12+7', type: 'radiant', multi: 3, weight: 3 },
      { name: '天环落雷', dmg: '10d6', type: 'lightning', aoe: { save: { abil: 'dex', dc: 19, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}背后的环停止了转动。' },
      { name: '消解射线', hit: 12, dmg: '8d8', type: 'force', recharge: 5 },
      { name: '重力井', dmg: '4d8', type: 'force', aoe: { save: { abil: 'str', dc: 19, half: true } }, apply: { cond: 'restrained', turns: 1 }, recharge: 5 },
      { name: '屏障', buff: { cond: 'arcane_shield', turns: 1 }, recharge: 4 },
    ],
  },
];

export const ENEMIES_CORE = Object.fromEntries(LIST.map((e) => [e.id, e]));
