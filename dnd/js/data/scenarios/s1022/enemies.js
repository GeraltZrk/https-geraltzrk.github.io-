// 1022 剧本专用的敌人（BIBLE §14.1）。数值照 DATA_GUIDE 的强度表，Boss 参照核心库的同级 Boss。
// 引擎不支持的招式（召唤、指定同伴互殴、“挣一口气”）用现有字段近似，写在 desc 里；
// 场景作者用 encounter 的 specials 和 allies 补足这些戏。没有心智的、被那本书拴着的，encounter 一律写 noAwe: true。
const MINDLESS = ['poisoned', 'frightened', 'charmed', 'asleep'];

export const ENEMIES = {
  melcor_handler: {
    id: 'melcor_handler', name: '驯师梅尔科尔', en: 'Melcor the Handler', type: 'humanoid', level: 4, era: [1022],
    desc: '亚科布早年的学生，瘦，说话像在点名。他自己不动手，叫别人动。被人打断就咳嗽，咳完接着点。',
    hp: 70, ac: 14, init: 2, saves: { str: 0, dex: 2, con: 1, int: 4, wis: 2, cha: 3 },
    ai: 'caster', traits: { boss: true }, xp: 420,
    attacks: [
      { name: '袖里的短刀', hit: 6, dmg: '1d6+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '旧口令', dmg: '1d6', type: 'psychic', apply: { cond: 'charmed', turns: 1, save: { abil: 'wis', dc: 13 } }, recharge: 4, weight: 3, text: '{name}念了半句军中的旧口令，你身边有人放下了手。' },
      { name: '起身', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '{name}拍了两下手：“起身。”他身后的人一齐站直了。' },
      { name: '刺耳的点名', dmg: '2d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 13, half: true } }, recharge: 6, minRound: 2 },
    ],
  },
  headman_wolf: {
    id: 'headman_wolf', name: '头领林地的老狼', en: 'Old Wolf of the Headman\'s Wood', type: 'monstrosity', level: 6, era: [1022],
    desc: '狼人的头领，嘴边的毛全白了。他认得卡斯塔诺的军团牌，先咬戴牌子的人。',
    hp: 130, ac: 15, init: 3, saves: { str: 5, dex: 3, con: 4, int: 0, wis: 2, cha: 0 },
    ai: 'cunning', resist: ['slashing', 'piercing'], traits: { boss: true, regen: 4 }, xp: 1000,
    attacks: [
      { name: '爪', hit: 7, dmg: '2d6+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '认牌', hit: 7, dmg: '2d8+3', type: 'piercing', extra: { dmg: '1d8', type: 'piercing' }, apply: { cond: 'bleeding', turns: 3 }, recharge: 4, text: '{name}凑近嗅了嗅，一口咬在挂牌子的地方。' },
      { name: '号', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 2, text: '{name}仰头一声长号，林子里四面都有回应。' },
      { name: '扑倒', hit: 7, dmg: '2d6+3', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 15 } }, aoe: { save: { abil: 'dex', dc: 15, half: true } }, recharge: 6, minRound: 2 },
    ],
  },
  trial_golem: {
    id: 'trial_golem', name: '第九道试炼的石像', en: 'Golem of the Ninth Trial', type: 'construct', level: 8, era: [1022],
    desc: '巨人克星卡斯坦立的魔像，没有头，头在它自己胳肢窝底下夹着。规矩是缴了它的械就算过关。打碎不算赢，它明天还在原地。',
    hp: 210, ac: 17, init: -1, saves: { str: 7, dex: -1, con: 6, int: -3, wis: 0, cha: -3 },
    ai: 'brute', immune: ['poison', 'psychic'], condImmune: [...MINDLESS, 'stunned', 'paralyzed'], resist: ['slashing', 'piercing'],
    traits: { boss: true }, xp: 2100,
    attacks: [
      { name: '门板剑', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3, text: '{name}把门板宽的剑抡了一圈。' },
      { name: '横扫', dmg: '4d8', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 5, minRound: 2, text: '剑身贴着石阶扫过来，扫过的地方碎石乱飞。' },
      { name: '拿头撞', hit: 9, dmg: '2d10+5', type: 'bludgeoning', apply: { cond: 'dazed', turns: 1, save: { abil: 'con', dc: 15 } }, recharge: 5 },
    ],
  },
  wereraven_seer: {
    id: 'wereraven_seer', name: '渡鸦人先知', en: 'Wereraven Seer', type: 'humanoid', level: 7, era: [1022],
    desc: '先知会内圈的人，老，一只眼是假的。他动手之前已经看过这一架了，所以头一下总打不着他。屋里那盆水打翻以后，他就看不准了。',
    hp: 90, ac: 15, init: 4, saves: { str: 0, dex: 4, con: 2, int: 4, wis: 6, cha: 2 },
    ai: 'cunning', condImmune: ['frightened'], xp: 650,
    attacks: [
      { name: '鸦喙杖', hit: 7, dmg: '2d6+3', type: 'piercing', multi: 2, weight: 3 },
      { name: '预读', buff: { cond: 'blurred', turns: 2 }, uses: 2, text: '{name}看着你的手，先你一步往旁边让开。' },
      { name: '啄眼', hit: 7, dmg: '1d8+3', type: 'piercing', apply: { cond: 'blinded', turns: 1, save: { abil: 'con', dc: 15 } }, recharge: 4 },
      { name: '散成一群', dmg: '3d6', type: 'slashing', aoe: { save: { abil: 'dex', dc: 15, half: true } }, recharge: 6, minRound: 2, text: '{name}散成了一群乌鸦，翅膀扑了你们一脸。' },
    ],
  },
  corseted_dead: {
    id: 'corseted_dead', name: '束腰的死人', en: 'Corseted Dead', type: 'undead', level: 5, era: [1022],
    desc: '大墓地壁龛里起来的行尸。束腰把它们勒得笔直，迈出来连腰都不用弯。两具挨在一起的时候下手更准。束腰一断，人就散架。',
    hp: 52, ac: 14, init: 0, saves: { str: 3, dex: 0, con: 4, int: -3, wis: 0, cha: -3 },
    ai: 'brute', immune: ['poison'], resist: ['piercing', 'necrotic'], condImmune: MINDLESS,
    traits: { packTactics: true }, xp: 260,
    attacks: [
      { name: '僵直的手', hit: 6, dmg: '2d6+3', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '勒住', hit: 6, dmg: '1d8+3', type: 'bludgeoning', apply: { cond: 'restrained', turns: 1, save: { abil: 'str', dc: 14 } }, recharge: 5, text: '{name}直挺挺地扑上来，两条胳膊箍住了你。' },
    ],
  },
  edmund_palehand: {
    id: 'edmund_palehand', name: '埃德蒙·苍手', en: 'Edmund Palehand', type: 'undead', level: 10, era: [1022],
    desc: '死亡骑士，生前是凯伦的至交。面甲不抬，规矩不丢：不对倒地的人补刀。有人对他行蓝宝石之眼的旧礼，他就只同那个人打。',
    hp: 320, ac: 19, init: 1, saves: { str: 7, dex: 1, con: 6, int: 2, wis: 4, cha: 5 },
    ai: 'brute', immune: ['poison'], resist: ['necrotic', 'cold'], condImmune: MINDLESS,
    traits: { boss: true }, xp: 4200,
    attacks: [
      { name: '骑枪', hit: 10, dmg: '2d10+5', type: 'piercing', multi: 2, weight: 3 },
      { name: '冲阵', dmg: '6d8', type: 'piercing', aoe: { save: { abil: 'dex', dc: 17, half: true } }, recharge: 5, minRound: 2, text: '{name}退开十步，压低枪尖，一条线冲了过来。' },
      { name: '受礼', buff: { cond: 'steadfast', turns: 3 }, uses: 1, text: '{name}把枪竖起来，等你行礼。' },
      { name: '盾击', hit: 10, dmg: '2d8+5', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 17 } }, recharge: 4 },
    ],
  },
  pyre_captain: {
    id: 'pyre_captain', name: '沼地的火刑队长', en: 'Pyre Captain of the Dreadmire', type: 'humanoid', level: 8, era: [1022],
    desc: '瘟疫年里自己给自己立了规矩的圣武士，嘴上全是凯伦的话。他烧法师烧得最狠。蓝宝石之眼的人听他引经，只当他念错了。',
    hp: 180, ac: 18, init: 0, saves: { str: 5, dex: 0, con: 4, int: 0, wis: 3, cha: 5 },
    ai: 'brute', condImmune: ['frightened', 'charmed'], traits: { boss: true }, xp: 1900,
    attacks: [
      { name: '长剑', hit: 9, dmg: '2d8+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '净火', dmg: '5d8', type: 'fire', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 5, minRound: 2, text: '{name}把火把往柴堆上一按，火舌顺着泥水窜了过来。' },
      { name: '引经', dmg: '1d8', type: 'psychic', apply: { cond: 'dazed', turns: 1, save: { abil: 'cha', dc: 16 } }, recharge: 4, text: '{name}大声念了一句凯伦的话，后半句是他自己加的。' },
      { name: '祷告', heal: '3d8+4', uses: 1 },
    ],
  },
  arrel_revenant: {
    id: 'arrel_revenant', name: '“遭叛者”阿雷尔二世', en: 'Arrel II the Betrayed (revenant)', type: 'undead', level: 9, era: [1022],
    desc: '994 年就落到坎雷克手上的达梅里亚国王，冠还戴着，背后那一刀的口子也在。有人想从他身边绕过去，他先出手。听见孙子叫他，他会停一停。',
    hp: 260, ac: 18, init: 1, saves: { str: 6, dex: 1, con: 5, int: 2, wis: 4, cha: 5 },
    ai: 'brute', immune: ['poison'], resist: ['necrotic', 'cold'], condImmune: MINDLESS,
    traits: { boss: true }, xp: 3200,
    attacks: [
      { name: '王剑', hit: 10, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '断后', hit: 10, dmg: '3d10+5', type: 'slashing', recharge: 4, text: '{name}横跨一步，挡住了去里门的路。' },
      { name: '王命', dmg: '2d8', type: 'psychic', aoe: { save: { abil: 'wis', dc: 17, half: true } }, apply: { cond: 'frightened', turns: 2, save: { abil: 'wis', dc: 17 } }, recharge: 6, minRound: 2, text: '{name}开口了，说的是六十年前的宫廷话：“退下。”' },
    ],
  },
  castan_liii_revenant: {
    id: 'castan_liii_revenant', name: '卡斯坦五十三世', en: 'Castan LIII the Enthralled (revenant)', type: 'undead', level: 10, era: [1022],
    desc: '遗体没人收，才会坐在坎雷克左手边。他起身很慢。他活着时最后一道令是放下兵器，死了也还在下。他认得军团牌。',
    hp: 300, ac: 18, init: -1, saves: { str: 7, dex: 0, con: 6, int: 2, wis: 5, cha: 6 },
    ai: 'brute', immune: ['poison'], resist: ['necrotic', 'cold'], condImmune: MINDLESS,
    traits: { boss: true }, xp: 4000,
    attacks: [
      { name: '乌钢剑', hit: 10, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '放下兵器', dmg: '2d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 17, half: true } }, apply: { cond: 'dazed', turns: 1, save: { abil: 'wis', dc: 17 } }, recharge: 5, minRound: 2, text: '{name}抬起一只手。你们的手先于脑子松开了一下。' },
      { name: '皇帝的重击', hit: 10, dmg: '3d10+5', type: 'slashing', recharge: 5 },
    ],
  },
  bridled_emperor: {
    id: 'bridled_emperor', name: '被牵的皇帝', en: 'The Bridled Emperor', type: 'humanoid', level: 10, era: [1022],
    desc: '眼睛后面有人，脚不听他的。场景里按 castan_* 改名字（加雷克、卢坎、卡斯坦）。打倒他就是杀了他。',
    hp: 260, ac: 18, init: 2, saves: { str: 6, dex: 3, con: 5, int: 2, wis: 2, cha: 5 },
    ai: 'brute', condImmune: ['frightened', 'charmed'], traits: { boss: true }, xp: 3600,
    attacks: [
      { name: '帝剑', hit: 10, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '誓火', dmg: '5d8', type: 'radiant', aoe: { save: { abil: 'con', dc: 17, half: true } }, recharge: 5, minRound: 2, text: '{name}胸口那道誓烙亮了一下，烫得周围的人往后退。' },
      { name: '照令行事', buff: { cond: 'emboldened', turns: 2 }, uses: 2, text: '{name}的嘴动了动，说的不是他自己的话。' },
    ],
  },
  canrec_lich: {
    id: 'canrec_lich', name: '亵渎者坎雷克', en: 'Canrec the Defiler', type: 'undead', level: 12, era: [1022],
    desc: '巫妖，学究，被人打断了三十年。他边打边讲道理。他的命匣不像他，后脑勺一直痒。倒下不算完，书还在桌上，得有人去付账。',
    hp: 400, ac: 18, init: 3, saves: { str: 1, dex: 3, con: 6, int: 9, wis: 7, cha: 5 },
    ai: 'caster', immune: ['poison', 'necrotic'], resist: ['cold', 'lightning'],
    condImmune: [...MINDLESS, 'paralyzed', 'stunned'], traits: { boss: true }, xp: 9000,
    attacks: [
      { name: '死灵射线', hit: 11, dmg: '4d10', type: 'necrotic', multi: 2, weight: 3, text: '{name}一边说话一边抬手，像在黑板上点一个错字。' },
      { name: '点名', dmg: '6d8', type: 'necrotic', aoe: { save: { abil: 'wis', dc: 18, half: true } }, apply: { cond: 'frightened', turns: 2, save: { abil: 'wis', dc: 18 } }, recharge: 5, minRound: 2, text: '{name}翻开书念了一个名字。书页里有人应了一声。' },
      { name: '冷手', hit: 11, dmg: '3d8+5', type: 'cold', lifesteal: true, recharge: 4 },
      { name: '那个字', dmg: '3d10', type: 'psychic', apply: { cond: 'stunned', turns: 1, save: { abil: 'wis', dc: 18 } }, recharge: 6, minRound: 3, text: '{name}说了一个字。烛火往同一边倒。' },
      { name: '翻回前一页', heal: '6d8+10', uses: 1 },
    ],
  },
};
