// s1820《泪尽》专用的敌人（圣经第 14.1 节）。数值照 DATA_GUIDE 的强度表，首领参照核心图鉴里同级的首领（约为同级杂兵的四倍生命）。
// 引擎表达不了的招式按最接近的写：封口令用 dazed；“放狗”“添人”“无人反对”用全队 buff；四臂战争型的过载用 hasted；
// “决斗架势”的回敬一剑没有对应机制，改成一次 shielded。noAwe 写在场景的 encounter 里，不写在这里。
export const ENEMIES = {
  lianne_warmage: {
    id: 'lianne_warmage', name: '莉安娜·西尔·加贝莱尔', en: 'Lianne síl Gabelaire', type: 'humanoid', level: 4,
    desc: '被清洗的魔杖贵族，战斗法师。肩膀里嵌着三粒寇拉希，今天施不了法。她拿军刀指着配给车，嗓门比刀快。',
    hp: 150, ac: 15, init: 2, saves: { str: 2, dex: 2, con: 3, int: 4, wis: 2, cha: 4 }, xp: 450, ai: 'cunning',
    traits: { boss: true }, condImmune: ['frightened'],
    attacks: [
      { name: '军刀', hit: 6, dmg: '1d8+3', type: 'slashing', multi: 2, weight: 3 },
      { name: '魔杖枪', hit: 6, dmg: '2d10+3', type: 'force', recharge: 5, minRound: 2, weight: 6, text: '{name}把枪托抵在肩上。那根枪管是一支磨短了的魔杖。' },
      { name: '摔晶体', dmg: '3d6', type: 'force', aoe: { save: { abil: 'dex', dc: 13, half: true } }, recharge: 6, minRound: 3, text: '{name}从车上抓起一块配给晶体，砸在你们脚边。' },
      { name: '谁也不许退', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '“谁也不许退。”{name}没回头，她知道他们没退。' },
    ],
  },
  blood_baron: {
    id: 'blood_baron', name: '“大夫”', en: '"The Doctor", Blood Baron', type: 'humanoid', level: 6,
    desc: '卡斯托纳斯地窖里管放血房的血爵。白围裙，袖套，铅笔别在耳朵上。账记得比谁都清楚。',
    hp: 240, ac: 14, init: 2, saves: { str: 2, dex: 3, con: 3, int: 4, wis: 3, cha: 2 }, xp: 1050, ai: 'cunning',
    traits: { boss: true },
    attacks: [
      { name: '手术刀', hit: 7, dmg: '1d8+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '放血针', hit: 7, dmg: '1d6+3', type: 'piercing', apply: { cond: 'bleeding', turns: 3, save: { abil: 'con', dc: 14 } }, recharge: 4, text: '{name}的针扎得很准，他扎过几百回了。' },
      { name: '掀翻血罐', dmg: '3d6', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 14, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 5, minRound: 2, weight: 8, text: '{name}一脚踹翻了架子。一排玻璃罐砸下来，地上全是蓝的。' },
      { name: '一管蓝血', heal: '3d8+6', uses: 2, text: '{name}拔开一管蓝血的塞子，仰头喝了。' },
    ],
  },
  catcher_captain: {
    id: 'catcher_captain', name: '追奴队队长', en: 'Slave-Catcher Captain', type: 'humanoid', level: 7,
    desc: '念悬赏单的那个人。按人头领钱，死的不算，所以他不想打死谁。马鞍上挂着一卷绳子和一本册子。',
    hp: 320, ac: 15, init: 3, saves: { str: 4, dex: 3, con: 4, int: 1, wis: 3, cha: 2 }, xp: 1500, ai: 'cunning',
    traits: { boss: true },
    attacks: [
      { name: '马刀', hit: 8, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '套索', hit: 8, dmg: '1d4+3', type: 'bludgeoning', apply: { cond: 'restrained', turns: 2, save: { abil: 'str', dc: 15 } }, recharge: 4, text: '{name}的绳套从头顶飞过来。' },
      { name: '霰弹枪', dmg: '4d6', type: 'piercing', aoe: { save: { abil: 'dex', dc: 15, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}端起霰弹枪，朝人堆里放了一枪。' },
      { name: '放狗', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 2, text: '{name}吹了一声口哨。狗扑得更凶了。' },
    ],
  },
  catch_hound: {
    id: 'catch_hound', name: '猎奴犬', en: 'Catch-Hound', type: 'beast', level: 3,
    desc: '种植园养的大狗，脖子上套着铁刺项圈。认气味，不认人。',
    hp: 30, ac: 13, init: 3, saves: { str: 3, dex: 3, con: 2, int: -4, wis: 1, cha: -2 }, xp: 100, ai: 'brute',
    traits: { packTactics: true },
    attacks: [
      { name: '咬', hit: 5, dmg: '1d8+3', type: 'piercing', weight: 3 },
      { name: '扑倒', hit: 5, dmg: '1d6+3', type: 'piercing', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 12 } }, recharge: 4, text: '{name}扑上来，两只前爪按在你胸口。' },
    ],
  },
  cloakman: {
    id: 'cloakman', name: '披风卫', en: 'Cloakman', type: 'humanoid', level: 6,
    desc: '揭秘教会的武装。灰披风搭在左肩，剑脊上刻着分形的纹，挥起来有一股熨斗的味道。',
    hp: 72, ac: 16, init: 2, saves: { str: 3, dex: 2, con: 3, int: 1, wis: 3, cha: 1 }, xp: 350, ai: 'cunning',
    attacks: [
      { name: '咒刃', hit: 7, dmg: '1d8+4', type: 'slashing', extra: { dmg: '1d8', type: 'force' }, multi: 2, weight: 3 },
      { name: '封口令', hit: 7, dmg: '1d6', type: 'psychic', apply: { cond: 'dazed', turns: 1, save: { abil: 'wis', dc: 14 } }, recharge: 4, text: '{name}念了一个词。你张嘴，什么也没出来。' },
      { name: '披风格挡', buff: { cond: 'shielded', turns: 2 }, recharge: 5, text: '{name}把披风往前一甩，挡在身前。' },
    ],
  },
  war_pattern_screamer: {
    id: 'war_pattern_screamer', name: '四臂战争型', en: 'Four-Armed War Pattern', type: 'construct', level: 9,
    desc: '胸口那颗芯核醒着，被接在炉子上，一直在叫。它还在执行最后一道命令：守住炉门。',
    hp: 420, ac: 18, init: 1, saves: { str: 6, dex: 1, con: 6, int: 0, wis: 2, cha: -2 }, xp: 2700, ai: 'brute',
    traits: { boss: true }, immune: ['poison'], resist: ['fire'],
    condImmune: ['poisoned', 'frightened', 'charmed', 'asleep'],
    attacks: [
      { name: '四臂连打', hit: 9, dmg: '1d10+5', type: 'bludgeoning', multi: 4, weight: 3 },
      { name: '芯核尖鸣', dmg: '5d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 17, half: true } }, apply: { cond: 'dazed', turns: 1 }, recharge: 5, minRound: 2, weight: 8, text: '{name}胸口的芯核叫了一声，比汽笛高。' },
      { name: '过载', buff: { cond: 'hasted', turns: 3 }, uses: 1, text: '{name}的关节开始冒烟。它动得更快了，身上的铆钉一颗颗往外崩。' },
    ],
  },
  enthralled_officer: {
    id: 'enthralled_officer', name: '被大咒迷住的军官', en: 'Enthralled Officer', type: 'humanoid', level: 7,
    desc: '洛伦特旗舰上的军官，制服一丝不苟，眼神很客气。他一点不记得自己反对过什么。',
    hp: 100, ac: 16, init: 2, saves: { str: 3, dex: 2, con: 3, int: 1, wis: 0, cha: 2 }, xp: 500, ai: 'cunning',
    condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '军刀', hit: 7, dmg: '2d6+4', type: 'slashing', multi: 2, weight: 3 },
      { name: '手枪', hit: 7, dmg: '2d10+3', type: 'piercing', recharge: 4, text: '{name}抬枪的时候还说了一声“失礼”。' },
      { name: '无人反对', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '“无人反对。”{name}说。旁边几个人跟着点头。' },
    ],
  },
  lion_legionary: {
    id: 'lion_legionary', name: '狮军团卫兵', en: 'Lion Legionary', type: 'humanoid', level: 8,
    desc: '布西拉尔金库的守卫。火驱枪擦得能照人，军靴的铜扣也是。',
    hp: 120, ac: 17, init: 1, saves: { str: 4, dex: 2, con: 4, int: 0, wis: 2, cha: 1 }, xp: 650, ai: 'brute',
    attacks: [
      { name: '刺刀', hit: 8, dmg: '2d8+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '火驱枪齐射', dmg: '3d8', type: 'fire', aoe: { save: { abil: 'dex', dc: 15, half: true } }, recharge: 5, minRound: 2, weight: 6, text: '一排枪口同时亮了一下。' },
      { name: '封门', buff: { cond: 'shielded', turns: 1, all: true }, recharge: 5, text: '“封门！”他们肩膀挨着肩膀站成了一堵墙。' },
    ],
  },
  rival_captain: {
    id: 'rival_captain', name: '准点公司的队长', en: 'Captain of the Punctual Company', type: 'humanoid', level: 9,
    desc: '一家从不迟到的同行。合同夹在胸甲里，打之前先念条款，念完看一眼怀表。',
    hp: 400, ac: 18, init: 4, saves: { str: 4, dex: 5, con: 4, int: 2, wis: 3, cha: 3 }, xp: 2700, ai: 'cunning',
    traits: { boss: true }, condImmune: ['frightened'],
    attacks: [
      { name: '佩剑', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '转轮枪三连', hit: 9, dmg: '2d4+4', type: 'piercing', multi: 3, recharge: 4, text: '{name}拔枪，三响，一响比一响准。' },
      { name: '火药罐', dmg: '5d6', type: 'fire', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}把一个冒烟的罐子抛过来，正好落在合同上写的位置。' },
      { name: '决斗架势', buff: { cond: 'shielded', turns: 2 }, recharge: 5, text: '{name}侧过身，剑尖对着你的喉咙。' },
      { name: '按合同办', buff: { cond: 'inspired', turns: 3, all: true }, uses: 1, text: '“第六条，第二款。”{name}说。他的人都知道那一款写的是什么。' },
    ],
  },
  siphon_ram: {
    id: 'siphon_ram', name: '抽气撞锤', en: 'Siphon Ram', type: 'construct', level: 10,
    desc: '架在“红利号”船头的机器，管子伸进天上，把妖精界的空气一舱一舱压成晶体。图纸第三页写着“秤”，接口是反的。',
    hp: 450, ac: 18, init: 0, saves: { str: 7, dex: 0, con: 7, int: -5, wis: 0, cha: -5 }, xp: 3200, ai: 'brute',
    traits: { boss: true }, immune: ['poison', 'psychic'], resist: ['force'],
    condImmune: ['poisoned', 'frightened', 'charmed', 'asleep', 'paralyzed', 'stunned'],
    attacks: [
      { name: '管钳', hit: 10, dmg: '2d10+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '抽气', dmg: '6d6', type: 'force', aoe: { save: { abil: 'con', dc: 17, half: true } }, apply: { cond: 'weakened', turns: 2 }, recharge: 5, minRound: 2, weight: 8, text: '{name}的泵换了一档。你肺里的气被往外拽。' },
      { name: '撞击', hit: 10, dmg: '4d10+6', type: 'bludgeoning', recharge: 4, text: '{name}整个往前一送，船头跟着它一起撞过来。' },
      { name: '蓝雾', dmg: '3d6', type: 'poison', aoe: { save: { abil: 'con', dc: 17, half: true } }, apply: { cond: 'poisoned', turns: 2 }, recharge: 5, text: '排气口喷出一团蓝雾。吸进去的人开始咳。' },
    ],
  },
  aakhet_bronze: {
    id: 'aakhet_bronze', name: '青铜龙阿赫特', en: 'Aakhet the Bronze', type: 'dragon', level: 12,
    desc: '三千零二十岁的龙。四十五年没飞过，左翼有一块鳞是补上去的，飞起来往那边偏。他比传说里的小。',
    hp: 560, ac: 19, init: 3, saves: { str: 8, dex: 2, con: 8, int: 5, wis: 5, cha: 7 }, xp: 5400, ai: 'brute',
    traits: { boss: true }, immune: ['lightning'], condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '爪尾咬', hit: 12, dmg: '2d10+7', type: 'slashing', multi: 3, weight: 3 },
      { name: '雷电吐息', dmg: '10d8', type: 'lightning', aoe: { save: { abil: 'dex', dc: 19, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}张开嘴。海面上的雾一下子全朝他那边吸了过去。' },
      { name: '威仪', dmg: '1d6', type: 'psychic', aoe: { save: { abil: 'wis', dc: 19, half: true } }, apply: { cond: 'frightened', turns: 2, dc: 19, save: { abil: 'wis' } }, uses: 1, text: '“三千年。”{name}说，“你们知道三千年是多少个礼拜吗？”' },
      { name: '这是平手', heal: '8d10+20', uses: 1, text: '{name}落在水上，喘了一会儿。“这一回合不算。”他说。' },
    ],
  },
  reaper_clerk: {
    id: 'reaper_clerk', name: '红衣办事员', en: 'Red Reaper Clerk', type: 'undead', level: 9,
    desc: '归寂领管队伍的。红衣，镰刀，腋下夹着簿子。他是出来查账的，查谁让这扇门开的，谁赖过一死。',
    hp: 130, ac: 17, init: 2, saves: { str: 4, dex: 2, con: 4, int: 3, wis: 5, cha: 3 }, xp: 900, ai: 'cunning',
    immune: ['necrotic', 'poison'], condImmune: ['frightened', 'charmed', 'poisoned'],
    attacks: [
      { name: '镰', hit: 9, dmg: '2d10+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '登记', hit: 9, dmg: '1d6', type: 'necrotic', apply: { cond: 'marked', turns: 3 }, recharge: 4, text: '{name}看了你一眼，在簿子上写下了你的名字。' },
    ],
  },
  reaper_auditor: {
    id: 'reaper_auditor', name: '红衣审计', en: 'Red Reaper Auditor', type: 'undead', level: 12,
    desc: '出门查账的那一位。红衣比别人的旧，镰刀比别人的长。见了盖章的文书，会停笔核对。',
    hp: 520, ac: 19, init: 2, saves: { str: 6, dex: 3, con: 6, int: 6, wis: 8, cha: 5 }, xp: 5400, ai: 'caster',
    traits: { boss: true }, immune: ['necrotic', 'poison'], condImmune: ['frightened', 'charmed', 'poisoned', 'asleep'],
    attacks: [
      { name: '长镰', hit: 12, dmg: '2d10+7', type: 'necrotic', multi: 2, weight: 3, apply: { cond: 'withering', turns: 3, save: { abil: 'con', dc: 19 } } },
      { name: '核账', hit: 12, dmg: '1d10', type: 'psychic', apply: { cond: 'stunned', turns: 1, save: { abil: 'wis', dc: 19 } }, recharge: 5, text: '{name}念了一个名字，后面跟着一个日子。被念到的人动不了了。' },
      { name: '宣读', dmg: '6d8', type: 'necrotic', aoe: { save: { abil: 'wis', dc: 19, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}翻开簿子，从第一行念起。' },
      { name: '添人', buff: { cond: 'emboldened', turns: 3, all: true }, uses: 1, text: '{name}在簿子上添了一笔。旁边的办事员挺直了腰。' },
    ],
  },
  zealot_theurge: {
    id: 'zealot_theurge', name: '热忱派的通神者', en: 'Zealot Theurge', type: 'humanoid', level: 10,
    desc: '跟碎片立过契还活着的人，“得救号”上的领队。他一开口，嗓子里有两个调。',
    hp: 440, ac: 17, init: 2, saves: { str: 3, dex: 2, con: 5, int: 5, wis: 7, cha: 5 }, xp: 3200, ai: 'caster',
    traits: { boss: true }, condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '咒刃', hit: 10, dmg: '2d8+5', type: 'slashing', extra: { dmg: '2d6', type: 'force' }, multi: 2, weight: 3 },
      { name: '碎片之音', dmg: '7d6', type: 'thunder', aoe: { save: { abil: 'con', dc: 18, half: true } }, recharge: 5, minRound: 2, weight: 8, text: '{name}张开嘴，出来的是那块晶体的声音，又高又快。' },
      { name: '殉道之祷', heal: '4d8+10', uses: 1, text: '{name}跪下念了一段。站起来的时候，伤口合上了一半。' },
    ],
  },
};
