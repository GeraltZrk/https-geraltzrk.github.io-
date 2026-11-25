// 1022 AA《无冕之年》：除场景和图鉴以外的全部定义。照 BIBLE.md 第一、二部分写。
// 场景在 prologues_a.js … finale.js，图鉴在 codex.js，专用敌人和物品在 enemies.js / items.js。

// ---- 跳章用的默认标记（BIBLE §12.9：什么都不管的基线） -------------------------
const SEAL = { if: 'item.witness_seal < 1', then: ['item +witness_seal'] };
const LEDGER = { if: 'item.ledger_page < 1', then: ['item +ledger_page'] };
const PROLOGUE_DONE = [
  'level 2', SEAL, 'quest witness start',
  { if: "origin == 'dameria'", then: ['flag saw_sleeper', 'flag met_edith', 'flag p_knife_hanged'] },
  { if: "origin == 'lorent'", then: ['flag saw_empty_graves', 'flag p_hall_denied', 'flag p_met_valeran', 'quest lance start', { if: 'item.lance_ledger < 1', then: ['item +lance_ledger'] }] },
  { if: "origin == 'ebonmarck'", then: ['flag saw_sleeper', 'flag p_old_coin', 'flag met_liv_early'] },
  { if: "origin == 'ibevar'", then: ['flag saw_sleeper', 'flag p_ibevar_blood', { if: 'item.lunatein_plank < 1', then: ['item +lunatein_plank'] }] },
  { if: "origin == 'wex'", then: ['flag saw_empty_graves', 'companion +barry', 'quest sixteen_graves start'] },
  { if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] },
];
const ACT1_DONE = [
  ...PROLOGUE_DONE, 'level 4', 'companion +liv', 'companion +barry', 'companion +vezina', LEDGER,
  'flag knows_watchword', 'flag knows_iacob_name', 'flag guardian_barons', 'flag acromis_quiet', 'flag melcor_dead',
  'quest sleepers start', 'quest sleepers done', 'quest edith start', 'quest edith stage 2', 'quest witness stage 2', 'quest dyren start', 'quest dyren stage 2', 'quest barry_boy start',
  'quest sixteen_graves stage 3', { if: "origin == 'lorent'", then: ['quest lance stage 2'] },
];
const ACT2_DONE = [
  ...ACT1_DONE, 'level 6', 'companion +valeran',
  'flag siege_certified', 'flag garrec_dead', 'flag body_left', 'flag liv_saw_body', 'flag knows_myrrh', 'flag golem_none',
  'flag iacob_pardoned', 'flag lucan_alva', 'flag edith_none', 'world unburied 7',
  'quest valeran_oath start', 'quest emperor_body start', 'quest emperor_body fail', 'quest liv_claim start', 'quest mountain start',
  'quest canrec_trail start', 'quest witness stage 3', 'quest edith stage 3', 'quest mountain stage 2', 'quest liv_claim stage 2',
  { if: "origin == 'lorent'", then: ['quest lance stage 3'] },
];
const ACT3_DONE = [
  ...ACT2_DONE, 'level 8',
  'flag years_court', 'flag quarantine_held', 'flag vezina_stopped', 'flag knows_ravens_watched', 'flag sun_terms',
  'flag edict_softened', 'companion -barry', 'flag blame_silent', 'flag law_limited', 'flag knows_roster', 'flag doses_split',
  'world unburied 5', 'world communion 6', { if: 'flag.f_staff', then: ['world writ 4'], else: ['world writ 3'] },
  'quest white_year start', 'quest white_year done', 'quest vezina_eye start', 'quest vezina_eye done',
  'quest dyren done', 'quest barry_boy done', 'quest edith done', 'quest witness stage 4', 'quest sixteen_graves stage 4', 'quest canrec_trail stage 2',
];
const ACT4_DONE = [
  ...ACT3_DONE, 'level 10',
  'flag crege_champions', 'flag valeran_stayed', 'flag wedding_blood', 'flag charter_league', 'flag knows_canrec_plan', 'flag liv_told',
  { if: 'item.jaher_letter < 1', then: ['item +jaher_letter'] },
  'quest valeran_oath done', 'quest mountain done', 'quest liv_claim done', 'quest witness stage 5', 'quest canrec_trail stage 3',
  { if: "origin == 'lorent'", then: ['quest lance done'] },
];

export const META = {
  id: 's1022',
  era: 1022,
  title: '无冕之年',
  coin: '金冠',
  startDate: '1022年卡斯坦月1日',
  intro: [
    '灰元 1022 年卡斯坦月 1 日。术士王死了一年多，《安本科斯特条约》的墨刚干。安本科斯特旧斗兽场的拱廊底下摆着一张登记桌：一本册子，一锅蜡，一个冻得直跺脚的书记官。',
    '条约派了一批监誓人，各拿一枚蜡印去各国，看着人把誓发完。签字的有两个赢家，一个输家，一个不打算入伙的，一个被夹在中间的。你替其中一家跑腿。',
    '仗是打完了。可南边的沼地里每天夜里还有人推着车出门，车上是空的，回来的时候不是。',
  ],

  // ---- 世界局势（BIBLE §4.1）
  tracks: [
    { key: 'unburied', name: '未葬者', desc: '地里没埋好的死人有多少。1040 年以前数的是战死的，以后数的是病死的。越高越糟。', start: 6, min: 0, max: 10, labels: ['各归其墓', '坟比人少', '沟里有人', '村村挂白', '死人当家'] },
    { key: 'communion', name: '同席', desc: '精灵和人类还肯不肯坐一张桌子。', start: 5, min: 0, max: 10, labels: ['各回各船', '隔墙而居', '同城分桌', '同桌吃饭', '骨血相连'] },
    { key: 'mantle', name: '卡斯坦之名', desc: '试炼山上那个位子离人有多近。', start: 3, min: 0, max: 10, labels: ['山已封死', '没人敢提', '有人惦记', '群雄问山', '新皇在位'] },
    { key: 'writ', name: '法师之权', desc: '法师凭手里的令状能管多少事。', start: 2, min: 0, max: 10, labels: ['各管各的', '宫廷顾问', '持令看守', '法师断案', '杖下太平'] },
    { key: 'feud', name: '玫瑰与月', desc: '洛伦特的西洛瑞尔家同达梅里亚的西尔穆纳家结的梁子。越高越糟。', start: 4, min: 0, max: 10, labels: ['结成亲家', '面上客气', '各记各账', '已经见血', '世代为仇'] },
  ],

  // ---- 声望（BIBLE §4.2）
  reputations: [
    { key: 'moon', name: '月庭', desc: '达梅里亚的宫廷、白银大队的老兵、月神神殿。', start: 0 },
    { key: 'rose', name: '玫瑰摄政', desc: '洛伦特太后伊奥瑞尔和她的人。恩特本的纯血派不算。', start: 0 },
    { key: 'escann', name: '东坎诺诸王', desc: '北王国、南王国、刀锋边区，还有蓝宝石之眼骑士团。', start: 0 },
    { key: 'dragon', name: '黑龙', desc: '乌霜边区、黑卡斯塔诺的老兵、还认乌霜家的白湾人。', start: 0 },
    { key: 'wex', name: '威克斯与大墓地', desc: '小公爵的朝廷，边境地的收殓人。', start: 0 },
    { key: 'elders', name: '船上长老', desc: '伊贝瓦尔和残存舰队里不肯改名换姓的精灵。', start: 0 },
    { key: 'wise', name: '贤者会', desc: '加里昂、玛希尔达和他们的学生。1040 年以后就是瓦洛森。', start: 0 },
  ],

  // ---- 出身（BIBLE §5）
  origins: [
    {
      id: 'dameria', name: '达梅里亚 · 月庭', region: '达梅斯海德', flag: 'A58', nationName: '达梅里亚王国',
      blurb: '国王二十岁，半精灵，上礼拜刚成亲。城外的帐篷城还没拆。你在他宫里当差，头一件事是拦下一把切肉刀。',
      tags: ['赢家', '宫廷', '初盟'],
      startScene: 'p_dameria_01',
      start: { rep: { moon: 2, wise: 1, dragon: -1 }, world: {}, flags: [], items: { moon_badge: 1 }, gold: 40 },
    },
    {
      id: 'lorent', name: '洛伦特 · 玫瑰摄政', region: '伦瑟诺', flag: 'A01', nationName: '洛伦特王国',
      blurb: '国王再过三天满两岁，在他爹的王座上睡着了。替他拿主意的是太后，一位八十三岁的精灵，按她族里的算法还没成年。她交给你一枚印，外加一句和约上没有的话。',
      tags: ['赢家', '旧怨', '摄政'],
      startScene: 'p_lorent_01',
      start: { rep: { rose: 2, moon: -1 }, world: {}, flags: [], items: { ioriel_letter: 1 }, gold: 50 },
    },
    {
      id: 'ebonmarck', name: '乌霜边区 · 黑龙', region: '东坎诺', flag: 'Z34', nationName: '乌霜边区',
      blurb: '你们打输了，这没什么可辩的。皇帝那些年身不由己，这话没人肯听。围城的营火一夜比一夜近。加雷克大人要你带句话出去：听我们讲完，或者别再杀了。',
      tags: ['输家', '遗民', '军团'],
      startScene: 'p_ebonmarck_01',
      start: { rep: { dragon: 3, escann: -1, moon: -1, wex: -1 }, world: {}, flags: [], items: { legion_token: 1 }, gold: 15 },
    },
    {
      id: 'ibevar', name: '伊贝瓦尔 · 船上长老', region: '凄苦谷', flag: 'A32', nationName: '伊贝瓦尔精灵国',
      blurb: '你们在海上漂了一千年，上岸才二十二年。有的族人已经改了人类的名字，拜了人类的神。亲王没改。他派你去看看，人类这份和约值不值得你们把行李打开。',
      tags: ['外人', '长命', '纯血'],
      startScene: 'p_ibevar_01',
      start: { rep: { elders: 2, wise: 1, rose: -1 }, world: {}, flags: [], items: { ibenion_writ: 1 }, gold: 30 },
    },
    {
      id: 'wex', name: '威克斯 · 幼主之家', region: '边境地', flag: 'A30', nationName: '威克斯丘陵公国',
      blurb: '威克斯的王冠三十年前就没了。公爵今年八岁，是扶正的私生子。几位摄政只在一件事上想到一块：这枚印不能落在别的摄政手里。公爵问你，监誓人发不发马。',
      tags: ['夹缝', '幼主', '坟场'],
      startScene: 'p_wex_01',
      start: { rep: { wex: 2, dragon: -2 }, world: {}, flags: [], items: { ledger_page: 1 }, gold: 25 },
    },
  ],

  // ---- 阵营（BIBLE §6）。旧礼的圣油由各序章第一场发（阵营的 start 不支持物品）。
  factions: [
    {
      id: 'sapphire', name: '蓝宝石之眼（剑）', motto: '先留人，后论理。',
      blurb: '规矩是凯伦·长枪定的：赢了要留人，争地盘就派人单挑，别拉上两个村子陪葬。骑士团去年才立起来，创始的那几位有一半死在了试炼山上。',
      tags: ['骑士', '骑士裁决', '留人'], art: 'ev_adeanic_war',
      origins: ['dameria', 'lorent', 'ebonmarck', 'wex'],
      start: { rep: { escann: 2, dragon: 1 }, world: {}, flags: ['f_sapphire'] },
    },
    {
      id: 'rites', name: '旧礼（冠）', motto: '冠是神给的，总得有人替神递一下。',
      blurb: '和约说，往后哪座神殿的祭司都能给国王加冕。于是每座神殿都觉得轮到自己了。你认的是老规矩：冠得有人递，死人得有人埋，逃进神殿的人也得有人管顿饭。',
      tags: ['祭司', '下葬', '涂油', '庇护'], art: 'ev_piety',
      start: { rep: { wex: 1, moon: 1 }, world: {}, flags: ['f_rites'] },
    },
    {
      id: 'staff', name: '贤者门下（杖）', motto: '法师得有人看着。最好是法师。',
      blurb: '只有法师看得出一个人当时是不是自己做的主。加里昂的学生们觉得，这双眼睛得有人管着，最好是他们自己。',
      tags: ['法师', '验心', '疫令'], art: 'ev_mages_estate',
      origins: ['dameria', 'lorent', 'ibevar', 'wex'],
      start: { rep: { wise: 2, dragon: -1 }, world: { writ: 1 }, flags: ['f_staff'] },
    },
  ],

  // ---- 预设人物（BIBLE §7）。六维是最终值。
  premades: [
    {
      id: 'pm_rianna', name: '精灵码头的莉安娜', gender: 'f', race: 'half_elf', cls: 'sorcerer', background: 'urchin',
      abil: { str: 8, dex: 15, con: 13, int: 10, wis: 12, cha: 17 }, profs: ['deception', 'insight', 'sleight', 'stealth'],
      portrait: 'sun_elf_court_mage_f', origins: ['dameria'], tags: ['半精灵', '天生施法'],
      blurb: '世上头一批半精灵里的一个，也是头一批生来带魔法的。满宫廷的人都盯着她看。',
      bio: '1004 年生在精灵上岸时扎的营地里，就是如今精灵码头那一带。父亲是白银大队的弓手，母亲卖鱼。十四岁那年她一生气，汤锅自己开了。如今在王宫当侍童，宫廷法师想验她的血。',
    },
    {
      id: 'pm_aucan', name: '奥坎·海月', gender: 'm', race: 'elf', subrace: 'moon_elf', cls: 'ranger', background: 'soldier',
      abil: { str: 12, dex: 17, con: 13, int: 9, wis: 14, cha: 10 }, profs: ['perception', 'stealth', 'survival', 'athletics', 'intimidation'],
      portrait: 'sun_elf_commandant', origins: ['dameria'], tags: ['老兵', '长命'],
      blurb: '白银大队的老兵，照穆纳斯的话改了个人类名字，取的是先王后的名。',
      bio: '本名阿多里安。880 年生在海上，跟穆纳斯上的岸，在月神之牙丢了半只耳朵。战后改名奥坎，是奥琪的男式。族里的长老至今只叫他旧名。',
    },
    {
      id: 'pm_alain', name: '大奥尔丁的阿兰', gender: 'm', race: 'human', subrace: 'lorentish', cls: 'paladin', background: 'squire',
      abil: { str: 16, dex: 10, con: 14, int: 8, wis: 12, cha: 15 }, profs: ['persuasion', 'religion', 'athletics', 'animal'],
      portrait: 'gen_human_knight_m', origins: ['lorent'], tags: ['平民', '骑士', '简单上手'],
      blurb: '独角兽骑士的扈从，平民出身。他信凯伦那一套：赢了要留人。',
      bio: '十九岁，父亲养马。十四岁起给奥尔丁的莫冈大人牵马。仗他没赶上，只赶上了埋人。太后挑中他，是因为恩特本的老爷们看不上他。',
    },
    {
      id: 'pm_barila', name: '巴丽拉·钢臂', gender: 'f', race: 'dwarf', subrace: 'ruby_dwarf', cls: 'artificer', background: 'artisan',
      abil: { str: 12, dex: 10, con: 16, int: 15, wis: 13, cha: 9 }, profs: ['arcana', 'history', 'sleight', 'investigation'],
      portrait: 'dwarven_artist_f', origins: ['lorent'], tags: ['符文匠', '长命'],
      blurb: '红宝石关的门符是她刻的，守住了两回。第三回，上头派来一位精灵法师。',
      bio: '红宝石领的符文匠，一百三十一岁。1001 年红宝石关那一仗，她刻的门没破。战后她的手艺成了“土办法”。族人都在装箱，她还没走。',
    },
    {
      id: 'pm_hilde', name: '希尔德·半牌', gender: 'f', race: 'human', subrace: 'gerudian', cls: 'fighter', background: 'soldier',
      abil: { str: 16, dex: 14, con: 15, int: 10, wis: 12, cha: 8 }, profs: ['perception', 'survival', 'athletics', 'intimidation'],
      portrait: 'gen_human_knight_f', origins: ['ebonmarck'], tags: ['军团', '简单上手'],
      blurb: '黑卡斯塔诺的军团兵。皇帝叫放下兵器，她放下了。她的军团牌只剩半块。',
      bio: '三十四岁。沼泽堡那天她在中军，皇帝下令停手，她停了。术士王的火烧过来，军团牌熔掉一半，另一半还在泥里。如今她替加雷克守城门。',
    },
    {
      id: 'pm_marcan', name: '万神道的马尔坎修士', gender: 'm', race: 'human', subrace: 'escanni', cls: 'cleric', background: 'acolyte',
      abil: { str: 13, dex: 9, con: 13, int: 14, wis: 16, cha: 10 }, profs: ['history', 'persuasion', 'religion', 'insight'],
      portrait: 'gen_human_mage_m', origins: ['ebonmarck'], tags: ['祭司', '失势'],
      blurb: '卡斯特洛斯的祭司。他一顶王冠也没递过，账照样算在他头上。',
      bio: '三十五岁，卡斯托纳斯万神道的祭司。给傀儡皇帝加冕的是他的上司，和约罚的是所有穿这身袍子的人。只有乌霜边区还肯让他主持葬礼。',
    },
    {
      id: 'pm_galindel', name: '加琳德尔·夜枝', gender: 'f', race: 'elf', subrace: 'moon_elf', cls: 'wizard', background: 'scholar',
      abil: { str: 8, dex: 16, con: 12, int: 16, wis: 13, cha: 10 }, profs: ['insight', 'investigation', 'arcana', 'history'],
      portrait: 'sun_elf_philosopher_f', origins: ['ibevar'], tags: ['法师', '长命'],
      blurb: '月火号排钟的看钟人。她觉得两族掺在一起，最后总有一边要戴孝。',
      bio: '801 年生在月火号上，守了一百年排钟。那些钟脆得只有法师托得住。钟搬去瓦多塞德，她跟着。上岸二十二年，她送走了三个人类朋友。',
    },
    {
      id: 'pm_wren', name: '文达尔·金箭', gender: 'm', race: 'elf', subrace: 'moon_elf', cls: 'rogue', background: 'sailor',
      abil: { str: 10, dex: 17, con: 12, int: 14, wis: 8, cha: 14 }, profs: ['stealth', 'sleight', 'acrobatics', 'persuasion', 'athletics', 'perception'],
      portrait: 'sun_elf_spymaster', origins: ['ibevar'], tags: ['年少', '长命'],
      blurb: '人称“鹪鹩”。六十一岁，按精灵的算法还是孩子。他喜欢人类，亲王不大喜欢这一点。',
      bio: '生在海上，四十岁上岸，头一回看见会结冰的河。他在精灵码头混了二十年，学了一口达梅里亚粗话。亲王派他出门，是想让他离酒馆远点。',
    },
    {
      id: 'pm_ottrac', name: '威克斯人奥特拉克', gender: 'm', race: 'human', subrace: 'alenic', cls: 'barbarian', background: 'miner',
      abil: { str: 16, dex: 12, con: 15, int: 8, wis: 14, cha: 10 }, profs: ['intimidation', 'perception', 'athletics', 'nature'],
      portrait: 'gen_human_rogue_m', origins: ['wex'], tags: ['正史人物', '简单上手'],
      blurb: '1020 年登试炼山的人里，他走到半山腰就下来了。这件事他听人提了两年。',
      bio: '丘陵矿上出来的大个子，三十三岁。比武会上他挣到了上山的资格，半路陪马里昂下了山，留在山上的人死了九个。去年泪落月起在马里昂宫里吃饷。威克斯的摄政们谁也不放心别人，就把印托给这个两边都认得的人，因为没人敢伸手抢。',
    },
    {
      id: 'pm_primrose', name: '普丽姆萝丝·花足', gender: 'f', race: 'halfling', cls: 'cleric', background: 'acolyte',
      abil: { str: 8, dex: 14, con: 13, int: 10, wis: 15, cha: 15 }, profs: ['medicine', 'persuasion', 'religion', 'insight'],
      portrait: 'gnome_theologian_f', origins: ['wex'], tags: ['收殓人'],
      blurb: '大墓地的收殓人，福尔卡德大祭司的徒弟。她看人先量肩宽，再问谁来继承。',
      bio: '二十四岁的半身人，十二岁进科塞顿学束腰。屠夫原的账归她管，四百零六座坟一座一座对过，多出十六座空的。师父叫她出去找找是谁挖的。',
    },
  ],

  // ---- 可选种族（BIBLE §5.6）。亚种没法在这里限制：木精灵、罗祆人、东洲人照样能点，序章作者别为他们写专属文字。
  races: ['human', 'elf', 'half_elf', 'dwarf', 'halfling', 'gnome', 'harpy'],

  // ---- 同伴（BIBLE §8）
  companions: {
    liv: {
      id: 'liv', name: '卡斯坦“五十四世”', gender: 'f', race: 'harpy', cls: 'barbarian',
      abil: { str: 15, dex: 14, con: 14, int: 8, wis: 10, cha: 14 }, profs: ['performance', 'athletics', 'intimidation'],
      equip: { weapon: 'greataxe', armor: 'hide', offhand: null, trinket: null }, portrait: 'harpy_commandant_f',
      blurb: '雅恩珂洛部的鹰身女妖，乌霜家没上谱的女儿，乌翼兵团的队长。喝了酒自称五十四世，没喝的时候自称“你们队长”。',
    },
    barry: {
      id: 'barry', name: '巴里·月华', gender: 'm', race: 'elf', subrace: 'moon_elf', cls: 'bard',
      abil: { str: 8, dex: 12, con: 13, int: 13, wis: 14, cha: 15 }, profs: ['persuasion', 'insight', 'performance', 'history'],
      equip: { weapon: 'rapier', armor: 'leather', offhand: null, trinket: null }, portrait: 'sun_elf_diplomat',
      blurb: '在威克斯落了户的精灵，琥珀溪的男爵，小公爵最像父亲的人。篮子里永远多带一份吃的。',
    },
    vezina: {
      id: 'vezina', name: '薇齐娜·马尔尼德', gender: 'f', race: 'human', subrace: 'escanni', cls: 'wizard',
      abil: { str: 9, dex: 14, con: 12, int: 15, wis: 15, cha: 10 }, profs: ['arcana', 'investigation', 'insight', 'history'],
      equip: { weapon: 'quarterstaff', armor: null, offhand: null, trinket: null }, portrait: 'gen_human_mage_f',
      blurb: '渡鸦先知会外圈的见习先知，科尔巴里德人。将来的事前面一定加“要是”，走到哪儿都在数乌鸦。',
    },
    valeran: {
      id: 'valeran', name: '恩特本的瓦勒兰爵士', gender: 'm', race: 'human', subrace: 'lorentish', cls: 'fighter', subclass: 'fighter_knight',
      abil: { str: 16, dex: 13, con: 15, int: 8, wis: 10, cha: 13 }, profs: ['athletics', 'animal', 'history', 'insight'],
      equip: { weapon: 'longsword', armor: 'chain_mail', offhand: 'shield', trinket: null }, portrait: 'gen_human_knight_m',
      blurb: '阿瑟利斯家的骑士，明说是来盯梢的。无礼的话前面必加“恕我直言”，从不撒谎。',
    },
  },

  // ---- 任务（BIBLE §13.1）
  quests: {
    witness: { title: '印', desc: '和约派你去看着各国把誓发完。', stages: ['把各国的誓看完。', '往东去，看输家怎么发誓。', '有人从坟里出来了。', '给十字军找一面旗。', '最后一个冬天。'], doneText: '你把印交了回去。书记官找不着那本登记册。' },
    sleepers: { title: '眼睛后面没人', desc: '有个老兵端着刀走向主桌，事后只记得出门打水。', stages: ['查出是谁在叫老兵起身。', '去阿克罗姆顿找那个会说旧口令的人。'], doneText: '驯师是亚科布的学生，刀是阿克罗米斯买的。空坟的事他不认。' },
    sixteen_graves: { title: '十六座空坟', desc: '屠夫原四百零六座坟，束腰只发出去三百九十副。', stages: ['福尔卡德的账对不上，替他数一遍。', '看看夜里是谁在干活。', '车辙往南去了，车上没人赶。', '大墓地的死人把头转过来了，下去看看。'], doneText: '四百零六个名字，你在那本书上都找着了。' },
    lance: { title: '那一枪', desc: '太后要你查清克雷格·达梅里斯那一枪是不是他自己的。', stages: ['查清克雷格那一枪是不是他自己的。', '比武场的围栏还立着，去看看。', '回太后的话。'], doneText: '你答了。她记不记这笔账，是她的事。' },
    edith: { title: '谁都给', desc: '帐篷城有个孩子，她跟谁要什么，谁都给。', stages: ['帐篷城有个孩子，她要什么别人就给什么。', '她得有个先生。', '看看她长成了什么人。'], doneText: '街口那一夜，她问你要一个点头。' },
    dyren: { title: '公爵问发不发马', desc: '威克斯的公爵八岁，摄政们谁也不服谁。', stages: ['威克斯的摄政们在等你的印。', '十八年后，他有话同你说。'], doneText: '他长成了你交出去的那个样子。' },
    emperor_body: { title: '一口棺材', desc: '加雷克只要他父亲的遗体和一个准日子。', stages: ['加雷克要你把他父亲找回来。', '沼泽堡的人说，去问林子里的驿站。', '地砖下面是空的。'], doneText: '皇帝有了去处。守砖人把勺子洗了。' },
    mountain: { title: '山上的伤', desc: '试炼山受了诅咒，没人上得去。', stages: ['上山看看坏成了什么样。', '石头上挂着半句话。', '石头缺了一角，在一位半身人国王兜里。'], doneText: '山有了交代。' },
    canrec_trail: { title: '没药味', desc: '有个一身没药味的人，比你先来问过遗体。', stages: ['有人比你先来问过遗体。', '实验室里的账从 980 年记起。', '他在等活人把山修好。'], doneText: '你见着了写信的人。他后脑勺痒。' },
    white_year: { title: '白年', desc: '1040 年卡斯坦月 3 日，渡鸦山，一个刚死的人从没填土的坟里起来了。', stages: ['去渡鸦山看那座没填土的坟。', '外头的兵要进科乌里亚，得有太阳王的印。', '瓦洛森要样本，也要权。'], doneText: '头一锅药只有三剂。你分完了。' },
    crusade: { title: '谁付账', desc: '最后一路十字军要去渡鸦山。', stages: ['最后一路在瓦洛森集结。', '门口站着一位老熟人。'], doneText: '有人付了。' },
    liv_claim: { title: '第五十四位', desc: '卡斯坦要上一趟试炼山，让一样收买不了的东西告诉她行还是不行。', stages: ['她要看她爹一眼。', '第九道试炼的石像认谁？', '她问你，那个结到底解了没有。'], doneText: '她得了一个答复。' },
    barry_boy: { title: '我家那孩子', desc: '巴里替八岁的公爵来按手印。', stages: ['八岁的孩子不能立誓，巴里替他按手印。', '那孩子签了一道逐精灵的令。'], doneText: '巴里选了站在哪边。' },
    vezina_eye: { title: '不仁', desc: '薇齐娜想被内圈叫进去，得一只鸦眼。', stages: ['她的师门在那棵树上蹲了十九年。'], doneText: '她要了，或者没要那只眼。' },
    valeran_oath: { title: '恕我直言', desc: '恩特本派瓦勒兰来盯着你。', stages: ['恩特本派他来盯着你。', '恩特本打出了“碎玫瑰”的旗号。'], doneText: '他对你的誓有了下落。' },
  },

  // ---- 跳到章节（作弊菜单）
  chapters: [
    { title: '序章 · 达梅里亚', note: '达梅里斯堡，王室婚礼后第七天。', scene: 'p_dameria_01', if: "origin == 'dameria'", effects: [{ if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] }] },
    { title: '序章 · 洛伦特', note: '洛伦泰内，国王两岁生日的前三天。', scene: 'p_lorent_01', if: "origin == 'lorent'", effects: [{ if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] }] },
    { title: '序章 · 乌霜边区', note: '乌霜领，围城第九十一天。', scene: 'p_ebonmarck_01', if: "origin == 'ebonmarck'", effects: [{ if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] }] },
    { title: '序章 · 伊贝瓦尔', note: '瓦多塞德，两条命。', scene: 'p_ibevar_01', if: "origin == 'ibevar'", effects: [{ if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] }] },
    { title: '序章 · 威克斯', note: '去科塞顿的大路，一车尸首翻进了路沟。', scene: 'p_wex_01', if: "origin == 'wex'", effects: [{ if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] }] },
    { title: '第一幕 · 谁的手', note: '1022 年埃斯玛月，安本科斯特旧斗兽场。2 级，领过印。', scene: 'a1_01', effects: PROLOGUE_DONE },
    { title: '第二幕 · 地砖下的皇帝', note: '1023 年花始月，卡斯托纳斯西门。4 级；卡斯坦、巴里、薇齐娜在队；阿克罗米斯悄悄了结，男爵们带大小公爵。', scene: 'a2_01', effects: ACT1_DONE },
    { title: '第三幕 · 白年', note: '间幕《十六年》开头。6 级，瓦勒兰入队；加雷克死了，皇帝没人收，亚科布被赦。', scene: 'a3_01', effects: ACT2_DONE },
    { title: '第四幕 · 玫瑰与月的婚礼', note: '1040 年泰苏伦月，维斯沃尔。8 级；逐精灵令缓行，巴里离队；渡鸦山封了，当众谁也没怪。', scene: 'a4_01', effects: ACT3_DONE },
    { title: '终章 · 最后一个冬天', note: '间幕《十二个冬天》开头。10 级；克雷格派人代战，十字军自由会盟，卡斯坦知道缰绳的事。', scene: 'f_01', effects: ACT4_DONE },
  ],

  // ---- 标记说明（BIBLE §12）
  flagNotes: {
    f_sapphire: '阵营：蓝宝石之眼', f_rites: '阵营：旧礼', f_staff: '阵营：贤者门下',
    saw_sleeper: '序章撞见过沉睡者', saw_empty_graves: '序章撞见过少掉的尸首', met_edith: '序章见过伊迪丝',
    p_knife_hanged: '达梅里亚：三个老兵绞了', p_knife_held: '达梅里亚：三个老兵押着', p_knife_released: '达梅里亚：三个老兵放了',
    p_hall_denied: '洛伦特：对大厅说没这回事', p_hall_truth: '洛伦特：对大厅说了实话', p_hall_inquiry: '洛伦特：答应大厅彻查',
    p_met_valeran: '洛伦特：在空棺材边见过瓦勒兰', p_old_coin: '乌霜边区：听说有人拿旧金币打听皇帝',
    p_gave_legionary: '乌霜边区：把申辩“受慑”的老兵交了出去', p_used_watchword: '乌霜边区：用旧口令使唤过沉睡者',
    met_liv_early: '乌霜边区：序章里卡斯坦救过你', p_laid_arms: '乌霜边区：沼泽堡那天放下了兵器', p_fought_on: '乌霜边区：沼泽堡那天没放下兵器',
    p_ibevar_blood: '伊贝瓦尔：两条命按血偿判', p_ibevar_weregild: '伊贝瓦尔：两条命按命价判', p_ibevar_held: '伊贝瓦尔：两条命押后再判',
    p_wex_buried_legionary: '威克斯：第十二具尸首埋了', p_wex_cast_out: '威克斯：第十二具尸首扔出了屠夫原',
    exam_precedent: '验心进了案卷，成了前例', knows_watchword: '听得懂、念得出那句旧口令', lance_asked: '洛伦特：当面问过克雷格',
    plumwall_plea: '收下了普卢姆沃尔的“受慑”申辩', plumwall_duel: '普卢姆沃尔的事用骑士裁决了结', aria_anoints: '判词由月神神殿涂油作保',
    alaria_for: '泛神会议上替阿拉莉亚作证', alaria_blocked: '泛神会议上拦下了阿拉莉亚', emil_struck: '删掉了埃米尔排挤精灵的条款',
    field_done: '屠夫原的迁葬做完了',
    guardian_barry: '巴里带大戴伦', guardian_crovan: '克洛万带大戴伦', guardian_marion: '马里昂做戴伦的监护人', guardian_barons: '男爵们带大戴伦',
    melcor_dead: '驯师梅尔科尔死了', melcor_wise: '驯师梅尔科尔交给了贤者会', knows_iacob_name: '知道驯师的师父是亚科布',
    acromis_exposed: '揭发了阿克罗米斯', acromis_quiet: '阿克罗米斯的事悄悄了结', acromis_traded: '拿阿克罗米斯的把柄换了令状',
    iacob_favor: '收过亚科布的通行文书',
    siege_certified: '围城：你给加雷克作了保', siege_hearing: '围城：你给加雷克争到了听证', siege_duel: '围城：用一场单挑了结',
    garrec_king: '加雷克称王，黑龙留在东坎诺', garrec_dead: '加雷克死了，寒行军北上', garrec_exile: '加雷克流亡',
    elrac_debt_paid: '威克斯：讨回了“屠夫”那笔债', knows_myrrh: '知道有个一身没药味的人先打听过遗体', keeper_hostile: '守砖人不信你',
    liv_saw_body: '卡斯坦看过她爹',
    body_westgate: '皇帝葬在西门', body_citadel: '皇帝葬在北要塞', body_pantheon: '皇帝葬在万神道', body_quiet: '皇帝悄悄埋了', body_burned: '皇帝火化了', body_left: '皇帝留在地砖下没人收',
    calindal_named: '告诉了克拉丽蒙德卡林达尔是谁家的手艺', clarimonde_pact: '答应帮克拉丽蒙德毁阶', lance_truth: '洛伦特：在比武场找到了凭据',
    map_drawn: '在石桌上画过“将来的疆界”', vow_liv: '在山上答应过让卡斯坦试',
    golem_pc: '魔像向你缴了械', golem_liv: '魔像向卡斯坦缴了械', golem_none: '谁也没缴下魔像的械',
    iacob_hanged: '亚科布绞死了', iacob_pardoned: '亚科布被赦了', iacob_wise: '亚科布交给了贤者会',
    knows_word: '你知道那个字（至少一半）', mended: '试炼动工修了',
    knot_alarian: '请阿拉里安解结', knot_ravens: '请渡鸦先知会解结', knot_iacob: '请亚科布解结',
    stair_down: '第二幕就把石阶毁了', mountain_sealed: '试炼山的石阶毁了', ravens_trust: '先知会内圈把你当自己人',
    lucan_alva: '卢坎跟着母亲阿尔瓦', lucan_garrec: '卢坎跟着舅舅加雷克', lucan_marion: '卢坎交给马里昂养', lucan_iacob: '卢坎交给亚科布养',
    edith_alarian: '伊迪丝跟阿拉里安学', edith_wise: '伊迪丝跟贤者会学', edith_ravens: '伊迪丝跟渡鸦先知会学', edith_iacob: '伊迪丝跟亚科布学', edith_none: '伊迪丝没有先生',
    years_watch: '十六年：在古塔办“守望”', years_court: '十六年：回本国当差', years_wards: '十六年：带大被监护的孩子', years_graves: '十六年：跟着收殓人埋人',
    edith_trusts: '彗星之夜你对伊迪丝说了实话', arrel_with_you: '达梅里亚：阿雷尔王子跟着你',
    quarantine_held: '渡鸦山封了', quarantine_open: '渡鸦山放人出城', knows_ravens_watched: '知道先知会十九年前就看见了白年',
    vezina_eye: '薇齐娜受了鸦眼', vezina_stopped: '你拦住了薇齐娜', vezina_left: '薇齐娜离队了',
    cure_early: '先知会早交出了实验室的位置', plague_samples: '从白旗船上取过样本', harpies_freed: '放了锡亚丹的鹰身女妖',
    sun_terms: '接了太阳王宫廷的条件', sun_refused: '没接太阳王宫廷的条件',
    edict_upheld: '逐精灵令照准', edict_overruled: '逐精灵令推翻', edict_softened: '逐精灵令缓行',
    edith_mob: '让伊迪丝慑住了暴民',
    blame_canrec: '当众怪坎雷克', blame_elves: '当众怪精灵', blame_ravens: '当众怪渡鸦先知会', blame_silent: '当众谁也没怪',
    law_full: '疫令全给', law_limited: '疫令限期', law_refused: '疫令不给', knows_roster: '知道那本书是花名册',
    doses_moon: '三剂药都给了达梅里亚', doses_rose: '三剂药都给了洛伦特', doses_split: '三剂药两家各一，剩的给了孩子', doses_children: '三剂药都给了车上的孩子',
    viswall_safe: '两国使者在芬尼克那间屋里许过诺', finnic_chip: '誓石碎片到了你手里', dwarves_thanked: '有人谢过管闸的红宝石矮人',
    lance_told_truth: '洛伦特：告诉太后那一枪是他自己的', lance_told_thrall: '洛伦特：告诉太后那一枪是受慑',
    crege_penance: '克雷格行了忏悔礼', crege_champions: '克雷格派人代战', crege_given: '克雷格交给了太后',
    valeran_champion: '瓦勒兰替精灵出战', valeran_released: '你解了瓦勒兰的誓', valeran_purist: '瓦勒兰跟纯血派走了', valeran_stayed: '瓦勒兰留在你身边',
    enteben_stopped: '恩特本的逼宫被拦下了', wedding_blood: '婚礼上见了血',
    charter_emperor: '十字军章程：奉皇帝', charter_league: '十字军章程：自由会盟', charter_writ: '十字军章程：凭瓦洛森令状', charter_muster: '十字军章程：各国出兵',
    wex_crown_promised: '威克斯：答应过替戴伦要王号', larthan_open: '拉尔桑防线说开了',
    knows_canrec_plan: '知道坎雷克在等活人修山', knows_why_watched: '知道先知会为什么坐着看', palehand_saluted: '对苍手行过旧礼',
    bridle_public: '把缰绳的事对诸王摊开讲了', liv_told: '卡斯坦知道缰绳的全部', knot_cut: '山上的结解成了', iacob_loop: '亚科布留了活扣',
    castan_crowned: '山上立过皇帝', castan_alive: '那位皇帝还活着',
    castan_garrec: '皇帝是加雷克', castan_lucan: '皇帝是卢坎', castan_liv: '皇帝是卡斯坦', castan_pc: '皇帝是你',
    liv_bridled: '卡斯坦不知情立了誓，被套上了', liv_north: '卡斯坦往北飞了', liv_dead: '卡斯坦死了',
    winters_crusade: '十二个冬天：跟着十字军打', winters_varlosen: '十二个冬天：守在瓦洛森', winters_home: '十二个冬天：回了本国', winters_squire: '十二个冬天：带阿德蕾西娅',
    temple_dug: '让人挖了苏雷尔神庙底下', temple_guarded: '派人守住了苏雷尔神庙', pyre_stopped: '拦下了沼地里的火刑', vezina_freed: '从笼子里放出了薇齐娜',
    bridle_pc: '缰绳在你手里', bridle_wise: '缰绳在贤者门下手里',
    price_aldresia: '付账的是阿德蕾西娅', price_pc: '付账的是你', price_companion: '付账的是同伴', price_emperor: '付账的是被牵的皇帝', price_names: '一页一页念名字', price_valeran: '替你付账的是瓦勒兰', price_liv: '替你付账的是卡斯坦',
    book_locked: '书封进了骑士团的库', book_wise: '书交给了加里昂', book_kept: '你接过了书上的记号', order_founder: '骑士团是你建的',
    god_camp: '神：在帐篷城治过人', god_on_agenda: '神：泛神会议把你排进了议程', god_truce: '神：乌霜领的仗是你一句话停的',
    golem_forever: '神：魔像向不会死的人下了跪', god_half_sentence: '神：你在的屋里没人撒得了谎', god_healed: '神：在渡鸦山治了病人',
    god_herald: '神：认下了“苏雷尔的使者”', god_promise_viswall: '神：在芬尼克那间屋里许过诺', god_wed: '神：那桩婚事是你证的',
    god_crusade: '神：十字军奉你的名出征', god_unseated: '神：哪张椅子都没坐',
  },

  // ---- 结局（BIBLE §10.2、§16.4）
  endings: {
    unseated: {
      title: '不肯落座的神', subtitle: '仗打完了，人人给你搬椅子', divine: true,
      text: [
        '东坎诺的诸王请你上试炼山。祭司们请你进神系。山上的宅子里，坎雷克那张椅子也空着，垫子是新换的。你一张都没坐。',
        '拖了三十年没散的第七次泛神会议只好复会。议题排在“阿德蕾西娅算谁家的化身”后面，开了十一天，决议是容后再议。各国陆续订了“神过境”的章程：谁出城迎，摆不摆座，屋里的王座要不要先抬走。',
        '书记官另起一页，蘸了蘸墨，问你神号怎么写，要不要留个地址。门外那个半精灵小孩还在追那只鸡。',
      ],
    },
    quiet: {
      title: '寂静之冠', subtitle: '你叫死人躺下，他们都躺下了',
      text: [
        '你接过了书上的记号。当夜，从渡鸦山到艾伦河，死人全躺下了，一个不剩。瘟疫在这一夜停了，停得比哪一种结法都干净。',
        '书里的魂从此都等你一句话。坎雷克的声音也还在书里，隔三岔五抱怨一句后脑勺痒。边境地和科乌里亚多了一位谁也不敢得罪的守墓人。阿德蕾西娅活着，她建的骑士团头一条誓词就是盯着你。',
        '魔典没进库。四百年后想找它的人，得先来找你。',
      ],
    },
    bridle: {
      title: '缰绳', subtitle: '山上有皇帝，皇帝脖子上有绳',
      text: [
        '试炼山上坐着一位皇帝。他守誓，守得一丝不差，因为誓的那一头攥在活人手里。',
        '令行禁止。瘟疫年里诸王听令封路，十字军三年打完了剩下的仗。尼奇默干过的事有人原样又干了一遍，这回是为了大家好。',
        '1221 年不会有阿兰蒂尔大峰会了。用不着。',
      ],
    },
    fiftyfourth: {
      title: '第五十四位', subtitle: '结解了，山修了，有人立了誓',
      text: [
        '结解开了。有人走完十道试炼，在誓石前把誓说完，石头烫了一下，誓烙在了人身上。这一回，听誓的只有石头。',
        '东坎诺用不着再等三百年的卡斯泰利尔。1424 年绿潮撞上来的时候，撞的是一个帝国。',
        '代价是现成的：那场仗就是为了不让这东西再有才打的。达梅斯海德诸国连夜数自己有多少枪，然后抱成了一团。',
      ],
    },
    parting: {
      title: '各回各船', subtitle: '杀停了，因为精灵走了',
      text: [
        '伊贝瓦尔关上了拉尔桑，月港收起了吊桥。凯尔马尔多的白港头一回派上用场，有几条小船真的又出了海。',
        '没有迫害，因为没有邻居了。马里昂成了一个两边都不认的国王。半精灵的孩子们长到十几岁，都得挑一边站。',
        '“安本纳尔”成了别人话里的一个词，意思是“同席”，用的时候多半带点讥讽。',
      ],
    },
    table: {
      title: '同席', subtitle: '主位空着，轮流管饭',
      text: [
        '没有皇帝，没有傀儡，没有哪一族走。每年兰斯日，各国各族的人在安本科斯特的旧斗兽场坐一圈，主位空着，轮流管饭。',
        '瘟疫的账记在坎雷克一个人头上。瓦洛森的令状十年一续，续的时候有外人在旁边看着。玫瑰和月成了亲家，吵架都在饭桌上吵。',
        '漏洞百出，走得慢，可它是真的。后世史家为“1221 年的帝国算建立还是算改名”吵了很久。',
      ],
    },
    ledger: {
      title: '监誓人的账', subtitle: '十三年，一字不差',
      text: [
        '瘟疫是 1053 年冬天停的。解药出自瓦洛森，书锁进了骑士团的库里，试炼山还封着。史书上该怎么写，就怎么写。',
        '不一样的只有一张不长的名单：因为你才活下来的人。名单没人收，你自己留着。',
        '你把印交还安本科斯特。书记官翻了半天，找不着三十一年前那本登记册。他另起一页，问你的名字怎么写。门外有个半精灵小孩在追一只鸡，鸡往精灵码头那边跑了。',
      ],
    },
  },
  endingScenes: {
    unseated: 'end_unseated', quiet: 'end_quiet', bridle: 'end_bridle', fiftyfourth: 'end_fiftyfourth',
    parting: 'end_parting', table: 'end_table', ledger: 'end_ledger',
  },

  // ---- 后日谈（BIBLE §10.3、§16.5）。按顺序逐张出，条件不中的跳过。
  epilogues: [
    // 世界局势
    {
      title: '未葬者',
      text: [
        { if: 'world.unburied <= 3', text: '在这条时间线上，白疫没走出边境地。阿雷尔王子活着，老了以后常去瓦洛森的饭堂吃饭，吃完自己洗碗。卡奈特的克雷格也活着，看着儿女成了家，卡奈特一直没有并进达梅里亚。' },
        { if: 'world.unburied >= 4 && world.unburied <= 6', text: '死的人还是史书上那几位。1050 年是卡奈特的克雷格和他的儿女{?flag.doses_rose || flag.doses_split:。|，还有洛伦特的雷安四世。}{?flag.doses_moon || flag.doses_split:|马里昂的长子阿雷尔也没熬过去。}1053 年是加韦德的戈德拉克十一世，他六岁。' },
        { if: 'world.unburied >= 4 && world.unburied <= 6', text: '大墓地的账本上，这几行字写得比别的大一号。' },
        { if: 'world.unburied >= 7', text: '在这条时间线上，名单又长了一截。克雷格一家{?flag.doses_moon || flag.doses_split:|，阿雷尔王子}{?flag.doses_rose || flag.doses_split:|，雷安四世}，六岁的戈德拉克十一世，后面还跟着整整一页小地方的名字。' },
        { if: 'world.unburied >= 7', text: '边境地的村名换了一半。新来的垦户说罗尔萨德话，管路边的老坟叫“前面那家人的”。' },
      ],
    },
    {
      title: '艾伦纳斯的那条街',
      text: [
        { if: 'world.communion <= 5', text: '1042 年，艾伦纳斯烧了精灵街。火从街东头的面包房起，烧了两天。白银家族趁着人少地多，一家一家起来了。' },
        { if: 'world.communion >= 6 && world.communion <= 7', text: '在这条时间线上，艾伦纳斯的街还是烧了。只是街上的人前一夜就从后巷走了，带走了锅，留下了门牌。' },
        { if: 'world.communion >= 8', text: '在这条时间线上，艾伦纳斯那条街到十五世纪还在。街口卖的点心是两族掺着做的，人类嫌太淡，精灵嫌太甜，都买。' },
      ],
    },
    {
      if: 'world.mantle <= 2 || flag.mountain_sealed || !(flag.castan_crowned && flag.castan_alive)',
      title: '试炼山',
      text: [
        { if: 'world.mantle <= 2 || flag.mountain_sealed', text: '山封到了十五世纪以后。1339 年南北两国合成卡斯泰利尔。1424 年绿潮来的时候，东坎诺没有皇帝。' },
        { if: '!(world.mantle <= 2 || flag.mountain_sealed)', text: '在这条时间线上，每一代都有人去爬那座山。下来的人里有几个再也撒不了谎，后来都成了很好的法官，就是没人愿意请他们吃饭。' },
      ],
    },
    {
      title: '法师之权',
      text: [
        { if: 'world.writ <= 3', text: '没人管法师，就有人替天行道。达拉万之愚里立起一根根烧黑的柱子。卢西安剿了渡鸦先知会。法师们记了一百八十年的账，1221 年联手逼出一个帝国。' },
        { if: 'world.writ >= 4 && world.writ <= 6', text: '在这条时间线上，瓦洛森的令状有期限，有外人看着。后来的魔导院照这张纸立规矩，1221 年的阿兰蒂尔大峰会开得更像签字。' },
        { if: 'world.writ >= 7', text: '在这条时间线上，杖下太平。街上没人闹事，因为闹事的念头还没走到嘴边，就会被人轻轻拿走。' },
      ],
    },
    {
      title: '玫瑰与月',
      text: [
        { if: 'world.feud <= 3', text: '在这条时间线上，西洛瑞尔家和西尔穆纳家是亲家。紫丁香战争成了表兄弟吵架，吵得短，吵完一起吃饭。' },
        { if: 'world.feud >= 4 && world.feud <= 6', text: '伊奥瑞尔替孙子当家，又替重孙当家。面具戴了十年，然后是一百年的紫丁香战争。' },
        { if: 'world.feud >= 7', text: '在这条时间线上，婚礼上的血没擦干净。那场战争提前了两代人，头一仗打在洛伦泰内城外的葡萄园里。' },
      ],
    },
    // 关键抉择
    {
      title: '史书怎么写那场瘟疫',
      text: [
        { if: 'flag.blame_canrec', text: '史书上这场瘟疫有名有姓。瓦洛森的教习讲到它，先在板上写“坎雷克”三个字，然后才讲病。' },
        { if: 'flag.blame_elves', text: '仗打得快，账记得久。在这条时间线上，1162 年以后加韦德有位国王专杀尖耳朵。他引的是你那年在瓦洛森说的话，一字没改。' },
        { if: 'flag.blame_ravens', text: '在这条时间线上，先知会垮在瘟疫前头。往后没人再提前看见什么了。' },
        { if: 'flag.blame_silent', text: '你那年一个字也没说。每个村子只好自己编了一个缘由，四百年后还在用，编得一个比一个圆。' },
        { if: 'flag.doses_children', text: '车上那十一个孩子里，有一个后来在渡鸦山开了间铁匠铺。她打的第一样东西是一口钟。' },
        { if: 'flag.doses_moon', text: '阿雷尔王子喝下了那剂药。他后来每年苏伦月都往瓦洛森送一车柴，送到他自己走不动为止。' },
        { if: 'flag.doses_rose', text: '雷安国王喝下了那剂药。他那回到底是不是只着了凉，到死也没人说得准。' },
        { if: 'flag.doses_split', text: '那两剂药各自进了王宫。剩下的一剂给了车上最小的孩子，她长大以后在瓦洛森刷锅，刷的就是那口锅。' },
      ],
    },
    {
      if: 'flag.price_aldresia || flag.price_pc || flag.price_companion || flag.price_emperor || flag.price_names',
      title: '谁付了账',
      text: [
        { if: 'flag.price_aldresia', text: '阿德蕾西娅数过了，够一个人去。她去了，没回来。骑士团的新人入门头一天，都要在瓦洛森的饭堂吃一顿饭。她的剑挂在饭堂。' },
        { if: 'flag.price_pc && is.mortal', text: '付账的是你。书记官在登记册上替你补了一行，墨水用的是你自己那锅蜡化开的。阿德蕾西娅把你的印收着，从来不拿出来盖。' },
        { if: 'flag.price_pc && !is.mortal', text: '付账的是你，可你没死成。阿德蕾西娅说了一句“您不用数人”，然后转身去埋别人。' },
        { if: 'flag.price_companion && flag.price_liv', text: '卡斯坦临走前要了一口酒，喝了一半，把另一半留给你。史书上没有这个名字，瓦洛森的饭堂里有。' },
        { if: 'flag.price_companion && !flag.price_liv', text: '瓦勒兰临走前说了一句恕我直言，后半句没说完。史书上没有这个名字，瓦洛森的饭堂里有。' },
        { if: 'flag.price_emperor', text: '那位皇帝挣开了半口气，自己把书撕了，跟五十三世当年在沼泽堡喊停手一个样子。北要塞给他立了碑，碑上只刻了这一件事。' },
        { if: 'flag.price_names', text: '你没毁书。你一页一页地念名字，念一个放一个。念完用了二十年，这二十年里巫妖一直关在书里，偶尔插一句嘴。' },
      ],
    },
    {
      title: '皇帝和他的儿子',
      text: [
        { if: 'flag.body_westgate || flag.body_citadel || flag.body_pantheon', text: '五十三世有了坟，每年有人去。{?flag.body_westgate:西门那座坟前站的多是卡斯托纳斯的老兵，带着酒。|}{?flag.body_citadel:北要塞那座坟前站的是守军，换岗的时候顺路行个礼。|}{?flag.body_pantheon:万神道那座坟前站的是祭司，后来也有不认识他的香客。|}' },
        { if: 'flag.body_quiet || flag.body_left', text: '那一年他坐在坎雷克左手边。事后总算有人把他埋了，埋的地方没立碑，只插了一根勺柄。' },
        { if: 'flag.body_burned', text: '守砖人把灰撒进了艾伦河。黑龙的老兵见了你都要说一句：你欠我们一座坟。' },
        { if: 'flag.garrec_dead', text: '加雷克死在突围北上的路上。乌尔维克带着残部走完了寒行军，乌霜家在乌尔维克斯滕的雪里歇了四百年。' },
        { if: 'flag.garrec_king', text: '在这条时间线上，东坎诺北边一直有个姓乌霜的王国。他们的钱币上刻着一口棺材。' },
        { if: 'flag.garrec_exile', text: '在这条时间线上，加雷克流亡到了格鲁迪亚，活到很老。他每年给东坎诺写一封信，信里只问一件事：坟修好了没有。' },
      ],
    },
    {
      if: 'met.vezina || flag.edith_none || flag.edith_wise || flag.edith_alarian || flag.edith_ravens || flag.edith_iacob',
      title: '伊迪丝',
      text: [
        { if: 'flag.edith_alarian', text: '伊迪丝后来在塞纳蒂尔当教习，教的是怎么唱歌不叫人跟着哭。' },
        { if: 'flag.edith_wise', text: '伊迪丝后来做了瓦洛森的典狱，管的是那些慑过人的法师。她自己的那间屋子门没上锁。' },
        { if: 'flag.edith_ravens', text: '伊迪丝后来成了渡鸦先知会的最后一位长老。卢西安来剿的那天，她让一整队兵放下了碗。' },
        { if: 'flag.edith_iacob', text: '伊迪丝后来站在某位国王身后。史书上没有她，史书上那位国王的每一道诏令里都有她。' },
        { if: 'flag.edith_none', text: '伊迪丝后来在科塞顿开了间面包铺。客人从不赊账，她也从来没开口要过。' },
        { if: 'flag.edith_mob', text: '威克斯堡那条街口的人，到老也记不起那一夜自己为什么拿着火把。' },
      ],
    },
    {
      title: '威克斯必须统治',
      text: [
        '威克斯复了国，史称第四威克斯王国。四百年后有句话叫“威克斯必须统治”。',
        { if: 'flag.guardian_barry', text: '头一位国王是巴里带大的。他吃饭慢，判案也慢，判完了总要问一句大家吃了没有。' },
        { if: 'flag.guardian_crovan', text: '头一位国王是克洛万带大的。他说话从来只说一半，另一半留给别人去猜，猜错了的都不在朝里了。' },
        { if: 'flag.guardian_marion', text: '头一位国王是在达梅斯海德长大的。威克斯的老男爵们一直说他口音不对。' },
        { if: 'flag.guardian_barons', text: '头一位国王是摄政们轮流带大的。他学会的头一件事是谁也别信，第二件是这话别说出口。' },
        { if: 'flag.edict_upheld', text: '他签过的那道逐精灵令，史书上记了一行，他自己一辈子没再提。' },
        { if: 'flag.edict_overruled', text: '那道逐精灵令是你推翻的。他后来复了国，却一直没请你来吃过一顿饭。' },
        { if: 'flag.edict_softened', text: '那道逐精灵令缓了又缓，缓到后来没人记得它还在。' },
      ],
    },
    {
      if: 'flag.iacob_hanged || flag.iacob_pardoned || flag.iacob_wise',
      title: '背叛者亚科布',
      text: [
        { if: 'flag.iacob_hanged', text: '在这条时间线上，亚科布是在卡斯托纳斯西门外绞的。上绞架前他要了一杯茶，喝完把杯子还给了刽子手。福阿哈尔往后换了三任公爵，没一个比他会管账。' },
        { if: 'flag.iacob_pardoned', text: '他活到九十一岁，死在床上。床头的茶具摆得整整齐齐。最后那几年他替谁办事，谁也说不准。' },
        { if: 'flag.iacob_wise', text: '在这条时间线上，亚科布在瓦洛森的塔里关了一辈子，也替贤者会讲了一辈子课。讲缰绳那一课，学生抢着坐前排。下了课没人敢同他说话。' },
      ],
    },
    {
      if: '(flag.lucan_alva || flag.lucan_garrec || flag.lucan_marion || flag.lucan_iacob) && !(flag.castan_lucan && flag.castan_crowned)',
      title: '卢坎',
      text: [
        { if: 'flag.lucan_alva', text: '卢坎跟着母亲长大，后来做了乌里昂马尔的公爵。南王国的人见了他那对耳朵，还是要多看一眼。那座山他从来不提。' },
        { if: 'flag.lucan_garrec', text: '卢坎是舅舅带大的，学会的头一件事是乌霜家的军礼。他后来做了乌里昂马尔的公爵，府里挂一面黑龙旗，旗边镶的是银。' },
        { if: 'flag.lucan_marion', text: '卢坎在达梅斯海德长大，同马里昂的孩子们一桌吃饭。他后来做了乌里昂马尔的公爵，口音一辈子没改过来。南王国的人管他叫“西边来的”。' },
        { if: 'flag.lucan_iacob', text: '卢坎是亚科布教出来的。他后来做了乌里昂马尔的公爵，倒茶的手同他先生一样稳。东坎诺从此又多了一个亚科布。' },
      ],
    },
    {
      if: 'flag.crege_penance || flag.crege_champions || flag.crege_given',
      title: '那一枪',
      text: [
        { if: 'flag.crege_penance', text: '克雷格行完忏悔礼，又过了几年安生日子。每年泪落月 27 日他不出门，门厅里挂着一根断枪。' },
        { if: 'flag.crege_champions', text: '克雷格到底没亲自下场，替他出战的骑士赢了。卡奈特的人说他还了一笔，洛伦特的人说他赖了一笔。这笔账就一直挂着。' },
        { if: 'flag.crege_given', text: '克雷格被交到了太后手里。往后的事，洛伦泰内的人不提，卡奈特的人不问。' },
      ],
    },
    {
      if: 'flag.temple_dug || flag.temple_guarded',
      title: '苏雷尔神庙底下',
      text: [
        { if: 'flag.temple_dug', text: '西奥多的人从苏雷尔神庙底下带上来一样东西，拿油布裹着，没人当面打开过。往后科乌里亚的贵族不大晒太阳。' },
        { if: 'flag.temple_guarded', text: '在这条时间线上，苏雷尔神庙底下那样东西又多睡了一阵。西奥多爵士另找了门路，晚了一代人。' },
      ],
    },
    {
      if: 'flag.book_locked || flag.book_wise',
      title: '那本书',
      text: [
        { if: 'flag.book_locked', text: '魔典锁进了骑士团的库，钥匙分给三个人拿。四百年后有个法师惦记上了它。' },
        { if: 'flag.book_wise', text: '在这条时间线上，魔典交到了加里昂手里。瓦洛森的塔里多了一间不点灯的屋子，学生路过都绕着走。加里昂每年进去一回，出来不说话。' },
      ],
    },
    {
      if: 'flag.finnic_chip && item.oathstone_chip < 1',
      title: '誓石碎片',
      text: ['誓石碎片放回了山上。维斯沃尔的议会又有人敢开口了，头一句是骂国王。芬尼克听完，叫人给骂他的那位添了一块饼。'],
    },
    {
      title: '拉尔桑',
      text: [
        { if: 'flag.larthan_open', text: '在这条时间线上，拉尔桑的墙矮了一截。墙根底下后来开了个集，精灵卖船板，人类卖腌菜。' },
        { if: '!flag.larthan_open', text: '拉尔桑的墙又立了几百年。墙那边的人记得是谁关的门，墙这边的人记得是谁没开。' },
      ],
    },
    // 同伴
    {
      if: 'met.liv',
      title: '卡斯坦“五十四世”',
      text: [
        { if: '!flag.price_liv && flag.castan_liv && flag.castan_alive && !flag.liv_bridled', text: '一个鹰身女妖坐上了屠兽者的椅子。东坎诺的神殿吵了四十年，她加的第十一道试炼是喝赢她，至今没人过关。' },
        { if: '!flag.price_liv && flag.liv_bridled && !flag.liv_dead', text: '她照旧嚷着要酒，照旧给每个人封官。叫她停，她就停。这件事乌翼兵团的人谁也不提，提了要挨揍，可她不会动手了。' },
        { if: '!flag.price_liv && flag.liv_dead', text: '她死在山上。乌翼兵团把她的翅膀骨埋在北要塞脚下，坟头插了一只空酒壶。' },
        { if: '!flag.price_liv && flag.liv_north && !flag.liv_dead', text: '1053 年以前，有人在格鲁迪亚的雪山里见过一只灰翅膀的老鹰身女妖，在教小的打架。她教的头一句是：先把账算清楚。' },
        { if: 'flag.price_liv', text: '她替你去撕了那一页。乌翼兵团在北要塞脚下给她立了块碑，碑上刻着“五十四世”，没人敢去改。' },
        { if: '!flag.price_liv && !flag.castan_liv && !flag.liv_bridled && !flag.liv_dead && !flag.liv_north', text: '她把乌翼兵团交给了副手，在北要塞脚下开了间酒馆。招牌上画一顶冠，冠歪着。' },
      ],
    },
    {
      if: 'met.barry',
      title: '巴里·月华',
      text: [
        '1058 年巴里满一百岁，船上的长老总算肯叫他一声大人。他摆了三天席，第三天的菜是第一天剩的。',
        { if: 'world.communion <= 2', text: '精灵走的那年，他是少数没走的。他守着戴伦的坟，每年戴伦生日那天，往坟前放一块三道卫的乳酪。' },
        { if: 'world.communion >= 3', text: '1221 年阿兰蒂尔大峰会的席上，有个两百六十三岁的胖精灵带了一篮子吃的，先分给门口的卫兵。' },
      ],
    },
    {
      if: 'met.vezina',
      title: '薇齐娜·马尔尼德',
      text: [
        { if: 'flag.vezina_eye', text: '卢西安护国公剿先知会的那天，她是提前一天走掉的那个。往后的史书里，偶尔有个独眼女人给国王托梦。梦里她总先说“要是”。' },
        { if: 'flag.vezina_left && !flag.vezina_eye && (flag.vezina_freed || world.unburied <= 6)', text: '她从狱里出来，头一件事是数了数门口的乌鸦。往后她在瓦洛森教预言学派，教到六十八岁。' },
        { if: 'flag.vezina_left && !flag.vezina_eye && !flag.vezina_freed && world.unburied >= 7', text: '她死在山上的宅子的一只笼子里。她的名字在坎雷克之书上，排在第十一页，笔迹很工整。' },
        { if: '!flag.vezina_left && !flag.vezina_eye', text: '她在瓦洛森教预言学派，教到六十八岁。学生问她预言准不准，她说准，然后说一遍“理论上”。' },
      ],
    },
    {
      if: 'met.valeran',
      title: '恩特本的瓦勒兰爵士',
      text: [
        { if: 'flag.valeran_purist && world.communion <= 5', text: '他跟纯血派走了。1042 年他死在艾伦纳斯一条烧着的街上，手里抱着一个不是他家的孩子。' },
        { if: 'flag.valeran_purist && world.communion >= 6', text: '他跟纯血派走了，又在艾伦纳斯烧街那夜，替精灵开了后巷的门。恩特本人至今不知道该怎么记他。' },
        { if: '!flag.valeran_purist && flag.price_valeran', text: '他替你付了账。阿瑟利斯家的族谱上，他那一行旁边多了一句注：守誓。' },
        { if: '!flag.valeran_purist && !flag.price_valeran && !flag.order_founder', text: '后来有人建了阿德蕾西娅骑士团，没留名字。恩特本的人都说那是他，他听了只说恕我直言，然后不往下说。' },
        { if: '!flag.valeran_purist && !flag.price_valeran && flag.order_founder', text: '他在你建的骑士团里当了二十年教头，从没撒过一句谎。新人最怕他夸人。' },
      ],
    },
    // 出身
    {
      title: '故土',
      text: [
        { if: "origin == 'dameria'", text: '马里昂活到九十六岁。他晚年爱讲切肉刀那天的事，{?flag.p_knife_hanged:讲到绞架那一段就停下来喝水。|讲到三个老兵后来回家种地，就笑。}' },
        { if: "origin == 'lorent'", text: '七岁的鲁本三世坐在他爹坐过的王座上，脚够不着垫子。{?flag.lance_told_truth:你那句“那一枪是他自己的”，太后记到了她死的那一年。|}{?flag.lance_told_thrall:你说那一枪是受慑。太后点了头，往后再没提过克雷格的名字。|}{?!flag.lance_told_truth && !flag.lance_told_thrall:你始终没回她那句话。她也始终没再问。|}' },
        { if: "origin == 'ebonmarck'", text: '“黑卡斯塔诺人”这个词，{?flag.garrec_king:后来成了一支军团的番号。|后来是骂人话，再后来成了一个姓。}' },
        { if: "origin == 'ibevar'", text: '1084 年伊贝尼昂退位。他的行李{?flag.larthan_open && world.communion >= 6:开了一大半，剩下几只是他舍不得开。|还是没开。箱子跟着他进了坟。}' },
        { if: "origin == 'wex'", text: '四百年后，说“威克斯必须统治”的那些人家里，{?flag.guardian_barry:供着一尊胖精灵的像。|供着一位小公爵的像，像底下压着一张发马的单子。}' },
      ],
    },
    // 阵营
    {
      if: 'flag.f_sapphire || flag.f_rites || flag.f_staff',
      title: '剑、冠、杖',
      text: [
        { if: 'flag.f_sapphire && flag.pyre_stopped', text: '圣武士在沼地烧人的那几年，骑士团当众说过：那些人不是凯伦的门徒。你拦下的那根柱子还立在达拉万之愚，柱子上什么也没有。' },
        { if: 'flag.f_sapphire && !flag.pyre_stopped', text: '圣武士在沼地烧人的那几年，骑士团一直没开口认不认他们。后来开口了，晚了一代人。' },
        { if: 'flag.f_rites && flag.temple_guarded', text: '在这条时间线上，阿德蕾西娅被认作了化身。奈拉特和阿德安两边的祭司坐在一张桌上，吵了一整天，最后一起签了字。' },
        { if: 'flag.f_rites && !flag.temple_guarded', text: '阿德蕾西娅到底没被认作化身。奈拉特和阿德安两边的祭司都说她是自己家的，会议定不下来。' },
        { if: 'flag.f_staff && world.writ >= 4', text: '你那张令状的抄本，1221 年有人带进了阿兰蒂尔的会场。抄本上你的名字拼错了一个字。' },
        { if: 'flag.f_staff && world.writ <= 3', text: '你那张令状的抄本没人带进阿兰蒂尔的会场。它压在瓦洛森的一只箱子底下，箱子上面放着腌菜。' },
      ],
    },
    // 神格与永生（BIBLE §16.5）
    { if: 'is.god', title: '容后再议', text: ['在这条时间线上，第七次泛神会议为你的名分复会，开了十一天。决议是容后再议。议事录有四十页，你的名字出现了三百一十一次，没有一次写的是同一个称呼。'] },
    { if: 'is.god && var.god_acts >= 4', title: '鼻子都不一样', text: ['在这条时间线上，各国给你立了像，鼻子都不一样。威克斯那尊手里多了一篮子吃的，是巴里出的钱。'] },
    { if: 'is.god && flag.god_half_sentence', title: '当着神的面', text: ['你进哪间屋，哪间屋里就没人撒得了谎。各国给你修了专门的偏厅，谈正事在隔壁。在这条时间线上，“当着神的面说”成了一句骂人话，意思是不留情面。'] },
    { if: 'is.god && flag.god_crusade', title: '柱子上的字', text: ['在这条时间线上，沼地里烧人的那些年，柱子上刻的是你的神号。骑士团后来花了两代人把它凿掉。凿不干净。'] },
    { if: 'is.god && flag.god_herald', title: '日轮旁边那颗小的', text: ['在这条时间线上，布勒瓦尔的神殿在苏雷尔的日轮旁边添了一颗小的。贾赫一直没回来。东边来的信里问过一句：墙上那颗小的是谁。'] },
    { if: 'is.god && flag.god_promise_viswall', title: '请神吃饭', text: ['在这条时间线上，小人国往后每回有事，你都得回去一趟。芬尼克的孙子管这叫“请神吃饭”。四百年里你吃了十一回，每回都是派。'] },
    { if: 'is.god && flag.golem_forever', title: '跪着的石像', text: ['在这条时间线上，第九道试炼的石像还跪着。北要塞的孩子往它手里托着的那颗头上放过果子、帽子和一只猫。猫待了一下午才走。'] },
    { if: 'is.god && flag.god_wed', title: '神证的婚', text: ['在这条时间线上，神证的婚没人敢解。奥坎娜守了一辈子寡，西洛瑞尔家和西尔穆纳家都说这是对方求来的。'] },
    { if: 'is.god && flag.price_names', title: '一夜念完', text: ['书上的名字你一夜就念完了。书里的魂同一夜全放了出去。边境地三年没人敢走夜路，第四年才有人敢在门口挂灯。'] },
    { if: 'is.god && flag.castan_pc && flag.castan_crowned && flag.castan_alive && flag.knot_cut', title: '不会死的卡斯坦', text: ['在这条时间线上，试炼山上坐着一位不会死的卡斯坦。誓词说“至我寿终之日”，你没有那一日。坎雷克想要的东西，你替他办成了。'] },
    { if: 'is.immortal', title: '欠一死', text: ['在这条时间线上，奈拉特的收殓人在账上给你留了一行：欠一死。大墓地每换一任大祭司，都写信来问那笔账还挂不挂着。你每回都回信。'] },
    { if: 'is.immortal && flag.price_pc', title: '后脑勺', text: ['书在你身上留的那道记号，过了多少年也没淡。阴天的时候，你听得见有人在很远的地方抱怨后脑勺痒。'] },
    { if: 'is.immortal', title: '两百年前的蜡印', text: ['在这条时间线上，1221 年阿兰蒂尔大峰会，门口有人拿着一枚两百年前的蜡印求见。卫兵去问书记官。书记官翻了半天，还是找不着那本登记册。'] },
  ],
};
