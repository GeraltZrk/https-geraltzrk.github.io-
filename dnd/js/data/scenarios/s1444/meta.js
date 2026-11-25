// s1444《送神》: everything except scenes and codex (see BIBLE.md §4–§10, §12, §13, §16).

// Chapter-jump state (BIBLE.md §12.9). Each list is everything the earlier parts guarantee on the canon line:
// level, companions, quest stages, the "必有 / 几选一" flags, and the origin's own quest and item.
const PROLOGUE_DONE = [
  'level 2', 'companion +ushka', 'flag p_truth', 'quest q_cart start', 'quest q_dragon start',
  'codex greentide', 'codex corin', 'codex agrados', 'codex standing_order', 'codex truce_table',
  { if: "origin == 'corintar'", then: ['quest q_o_corintar start'] },
  { if: "origin == 'sons'", then: ['quest q_o_sons start', { if: 'item.sergeant_urn < 1', then: ['item +sergeant_urn'] }] },
  { if: "origin == 'wex'", then: ['quest q_o_wex start'] },
  { if: "origin == 'grudge'", then: ['quest q_o_grudge start', 'flag body_verified'] },
  { if: "origin == 'tide'", then: ['quest q_o_tide start'] },
];
const ACT1_DONE = [
  ...PROLOGUE_DONE, 'level 4', 'companion +tan', 'companion +nixee',
  'flag goblins_hidden', 'flag korgus_lake', 'flag roll_seen', 'flag spirits_heard', 'flag testimony_host', 'flag compact_none',
  'quest q_korgus start', 'quest q_korgus done', 'quest q_sightings start', 'quest q_sightings done', 'quest q_compact start', 'quest q_compact done',
  'quest q_debt start', 'quest q_ushka start', 'quest q_cart stage 2', 'quest q_dragon stage 2',
  'codex castonath', 'codex korgus', 'codex khak_bazi', 'codex castellos', 'codex dawn_office',
  { if: "origin == 'corintar'", then: ['quest q_o_corintar stage 2'] },
  { if: "origin == 'grudge'", then: ['quest q_o_grudge stage 2'] },
  { if: "origin == 'tide'", then: ['flag road_ghurad', 'quest q_o_tide stage 2'] },
];
const ACT2_DONE = [
  ...ACT1_DONE, 'level 6', 'companion +garaele',
  'flag parents_buried_deep', 'flag castellar_seen', 'flag dookanil_known', 'flag belgrak_lost', 'flag notebook_kept',
  'quest q_parents start', 'quest q_parents done', 'quest q_list start', 'quest q_list fail',
  'quest q_cart stage 3', 'quest q_dragon stage 3', 'quest q_ushka stage 2',
  { if: "origin == 'grudge'", then: ['quest q_o_grudge stage 3'] },
];
const ACT3_DONE = [
  ...ACT2_DONE, 'level 8',
  'flag log_read', 'flag bearing_known', 'flag wound_seen', 'flag proof_kept', 'flag tilda_true', 'flag adenn_damesear', 'flag door_letter_sent', 'world peace -1',
  'quest q_duke start', 'quest q_duke done', 'quest q_door start', 'quest q_cart stage 4', 'quest q_dragon stage 4', 'quest q_ushka stage 3',
  { if: "origin == 'sons'", then: ['quest q_o_sons stage 2'] },
  { if: "origin == 'wex'", then: ['quest q_o_wex stage 2'] },
];
const ACT4_DONE = [
  ...ACT3_DONE, 'level 10',
  'flag toll_years', 'flag contract_staff', 'flag staff_seen', 'flag war_of_two_seen', 'flag tan_read_it', 'flag rite_done', 'flag wall_sealed', 'flag staff_returned', 'var rites =3',
  'quest q_door stage 2', 'quest q_door done', 'quest q_ushka done', 'quest q_wall start', 'quest q_wall done', 'quest q_cart stage 5', 'quest q_dragon stage 5',
  { if: "origin == 'corintar'", then: ['quest q_o_corintar stage 3'] },
];

export const META = {
  id: 's1444',
  era: 1444,
  title: '送神',
  coin: '金冠',
  startDate: '1444年奈拉月11日',
  intro: [
    '灰元 1444 年奈拉月 11 日午后，科琳和杜坎森在下卡斯托纳斯旧集市边上的一块空地上同归于尽。仗打赢了。尸首没人收。',
    '当晚各营的队长拿两只酒桶架了一扇门板，围着它吵到半夜，只定下一件事：各营出一个人，收殓此役无人认领的死者，事毕为止。头一个要收的就是杜坎森。边区兵想把他挂上城门，他儿子想抬回去，死灵法师已经开了价。',
    '板车上一共五只手。你是哪个营借出来的？',
  ],

  tracks: [
    { key: 'embers', name: '余烬', desc: '杜坎森死了，跟过他的人还在。火灭没灭，看灰里还剩多少。', start: 5, min: 0, max: 10, labels: ['冷灰', '余温', '暗火', '复燃', '燎原'] },
    { key: 'room', name: '容身', desc: '兽人和地精在东坎诺有没有一块能站的地方。', start: 2, min: 0, max: 10, labels: ['见绿就杀', '墙根底下', '划地而居', '同街不同灶', '一口锅里吃饭'] },
    { key: 'unburied', name: '未葬', desc: '东坎诺有多少死人没入土，又有多少被人拉起来干活。这是收尸队自己的账。', start: 3, min: 0, max: 10, labels: ['入土为安', '坟多野少', '白骨露野', '白骨有价', '死人当差'] },
    { key: 'peace', name: '鸽座的太平', desc: '丁香战争打了九十五年，去年才停。这点太平是真的，底下垫的那句话是假的。', start: 6, min: 0, max: 10, labels: ['第五场丁香战争', '各家磨刀', '面和心不和', '太平', '威克斯说了算'] },
    { key: 'word', name: '风声', desc: '“诸神之王已经死了”这句话走了多远。', start: 0, min: 0, max: 10, labels: ['没人知道', '几个人知道', '神殿里在传', '街上在传', '天下皆知'] },
    { key: 'scale', name: '天平', desc: '天上那把椅子空出来的话，往哪边倒：一头是长子阿德安，一头是科琳。', start: 0, min: -5, max: 5, labels: ['长子当立', '偏向阿德安', '悬而未决', '偏向科琳', '剑上天'] },
  ],

  reputations: [
    { key: 'corintar', name: '科琳塔尔', desc: '科琳留下的人。蓝牙带兵，多米尼克立教，愚足管耳目。', start: 0 },
    { key: 'companies', name: '诸团', desc: '东坎诺十几支冒险团，加上山底下打着探险队旗号的矮人。欠饷，记仇，认账。', start: 0 },
    { key: 'league', name: '旧东坎诺', desc: '伯爵联盟、马尔霍德和卡斯托纳斯的世家。房子原本是他们的。', start: 0 },
    { key: 'clans', name: '氏族', desc: '留在地面上的兽人和地精。有想种地的，有想再来一回的。', start: 0 },
    { key: 'throne', name: '鸽座', desc: '皇帝、巴兹伍德和替威克斯数人头的那些人。', start: 0 },
    { key: 'moon', name: '月党', desc: '达梅里亚的旧部：流亡的，装聋的，还握着枪杆的。', start: 0 },
    { key: 'temples', name: '神殿', desc: '摄政王庭各神的祭司，连同寄在魔导院名下的编年史家。', start: 0 },
  ],

  origins: [
    {
      id: 'corintar', name: '科琳的队伍', region: '东坎诺 · 卡斯托纳斯', flag: 'B02', nationName: '科琳塔尔',
      blurb: '你跟着那个红头发的扈从从血腐阶梯打到卡斯托纳斯。今天她死在你前头二十步。她上回死了三个时辰就站起来了，所以今晚谁也不肯走。',
      tags: ['信众', '本地人', '亲历者'], startScene: 'p_corintar_01',
      start: { rep: { corintar: 2, clans: -1, temples: 1 }, world: {}, flags: [], items: { shield_strap: 1 }, gold: 15 },
    },
    {
      id: 'sons', name: '达梅里亚之子', region: '东坎诺 · 卡斯托纳斯', flag: 'B07', nationName: '达梅里亚之子',
      blurb: '西边的仗你们打输了。大公死在皇宫里，少主躺进棺材装成尸首才出的帝国。如今你们在东坎诺替别人收复家乡，皇帝的赏格还挂着。',
      tags: ['流亡者', '月党', '败军'], startScene: 'p_sons_01',
      start: { rep: { moon: 2, throne: -2, companies: 1 }, world: {}, flags: [], items: { moon_badge: 1 }, gold: 10 },
    },
    {
      id: 'wex', name: '皇帝的差事', region: '东坎诺 · 卡斯托纳斯', flag: 'A30', nationName: '威克斯',
      blurb: '丁香战争是你们赢的。巴兹伍德先生给了你一封信：数一数卡斯托纳斯有几座门，各在谁手里。信上没写数完以后怎么办。',
      tags: ['帝国', '密探', '胜者'], startScene: 'p_wex_01',
      start: { rep: { throne: 2, moon: -2, league: 1 }, world: {}, flags: [], items: { bardswood_letter: 1 }, gold: 30 },
    },
    {
      id: 'grudge', name: '负怨者兵团', region: '东坎诺 · 卡斯托纳斯', flag: 'H97', nationName: '负怨者兵团',
      blurb: '红宝石领的老字号，替人讨了几百年旧账，按件收费。玛瑙之门那一笔记在杜坎森名下。兵团派你来看一眼尸首，好把这一条划掉。',
      tags: ['矮人', '债主', '外人'], startScene: 'p_grudge_01',
      start: { rep: { companies: 2, clans: -2 }, world: {}, flags: [], items: { grudge_page: 1 }, gold: 25 },
    },
    {
      id: 'tide', name: '退潮的人', region: '东坎诺 · 卡斯托纳斯', flag: 'B01', nationName: '绿潮',
      blurb: '你跟着杜坎森打了二十年，或者被他的人拴了二十年。今天午后撤退的号吹了，你没赶上城门。手背上的颜色停在一块绿上，再也不变了。',
      tags: ['兽人', '败军', '非人'], startScene: 'p_tide_01',
      start: { rep: { clans: 2, companies: -2, corintar: -1 }, world: {}, flags: [], items: { chain_link: 1 }, gold: 0 },
    },
  ],

  factions: [
    {
      id: 'heirs', name: '承嗣派', motto: '名分定了，刀才收得回去。',
      blurb: '椅子该谁坐，谱上写着。血统、遗嘱、长子，哪样都行，只要事先说好。说好了，就不用每死一个人打一仗。',
      tags: ['谱系', '名分'], origins: ['sons', 'wex', 'grudge', 'tide'],
      start: { rep: { league: 1, temples: 1 }, world: { scale: -1 }, flags: [] },
    },
    {
      id: 'tried', name: '试炼派', motto: '谁扛得动，谁来扛。',
      blurb: '科琳是个扈从，杜坎森连氏族都没有。能把事办成的人就该坐那把椅子，办砸了就下来。兽人管这个叫夺斗，卡斯塔诺人管这个叫试炼。',
      tags: ['功劳', '比试'],
      start: { rep: { corintar: 1, companies: 1 }, world: { scale: 1 }, flags: [] },
    },
    {
      id: 'crownless', name: '无冕派', motto: '椅子空着，天也没塌。',
      blurb: '东坎诺二十年没有国王。活下来的人自己开会，自己立约，自己埋人。椅子可以先空着，空着的时候谁也不用跪。',
      tags: ['立约', '砸链子'], origins: ['corintar', 'sons', 'grudge', 'tide'],
      start: { rep: { clans: 1, companies: 1 }, world: { room: 1 }, flags: [] },
    },
  ],

  premades: [
    {
      id: 'gicela', name: '东墙的吉塞拉', gender: 'f', race: 'human', subrace: 'escanni', cls: 'fighter', background: 'soldier',
      abil: { str: 16, dex: 14, con: 14, int: 8, wis: 13, cha: 10 }, profs: ['perception', 'survival'], portrait: 'gen_human_knight_f',
      blurb: '科琳出生的那个村子烧掉的时候，她四岁，也在村里。',
      bio: '1424 年东墙着火，她被塞进一辆往西走的粪车。在阿巴兰的难民营里长大，学会了排队和抢饭。去年跟着援军打回来，路过自家的地，没认出来。',
      tags: ['简单上手'], origins: ['corintar'],
    },
    {
      id: 'aucan', name: '奥坎·西尔·维尔西尔', gender: 'm', race: 'human', subrace: 'escanni', cls: 'bard', background: 'noble',
      abil: { str: 9, dex: 15, con: 13, int: 10, wis: 13, cha: 15 }, profs: ['performance', 'insight', 'perception'], portrait: 'gen_human_rogue_m',
      blurb: '科琳之环里公认最没意思的一位。别人当着他的面叫错他的名字。',
      bio: '法拉内安的贵族子弟，样样会一点，样样不出挑。家没了以后在维尔西尔的瓦砾里带着一营难民过日子。给科琳当过联络人、斥候和伙夫。他写的诗比他本人有名。',
      tags: ['正史人物'], origins: ['corintar'],
    },
    {
      id: 'ademar', name: '阿德玛·西纳·丹瓦尔', gender: 'm', race: 'human', subrace: 'damerian', cls: 'cleric', background: 'squire',
      abil: { str: 13, dex: 11, con: 14, int: 9, wis: 15, cha: 13 }, profs: ['religion', 'medicine'], portrait: 'gen_human_knight_m',
      blurb: '阿德安的随军祭司。给一口空棺材做过全套葬礼。',
      bio: '1443 年少主要装死出帝国，棺材得有祭司送。他一路念着悼词走过阿巴兰，后头跟着威克斯的兵。棺材里的人后来活蹦乱跳。那场礼算不算数，他一直没想好。',
      tags: ['治疗'], origins: ['sons'],
    },
    {
      id: 'cella', name: '瑟拉·塔克斯威克', gender: 'f', race: 'half_elf', cls: 'sorcerer', background: 'apprentice',
      abil: { str: 8, dex: 14, con: 14, int: 12, wis: 10, cha: 17 }, profs: ['deception', 'persuasion'], portrait: 'sun_elf_court_mage_f',
      blurb: '西尔穆纳学院没念完的学生。魔杖是赊的，戒指当过又赎回来。',
      bio: '父亲是精灵，没露过面，留给她一身不用学就会的法术。学院教她使魔杖和戒指，城破那年停了课，欠她的津贴到现在没发。她跟着达梅里亚之子，是为了讨这笔钱。',
      tags: ['施法'], origins: ['sons'],
    },
    {
      id: 'carsten', name: '哈德威克的卡斯滕', gender: 'm', race: 'human', subrace: 'alenic', cls: 'fighter', background: 'soldier',
      abil: { str: 16, dex: 12, con: 15, int: 8, wis: 14, cha: 10 }, profs: ['perception', 'insight'], portrait: 'gen_human_knight_m',
      blurb: '三卫出身的威克斯大剑手。皇宫那一晚他排在后头，“什么也没看见”。',
      bio: '1443 年攻皇宫，他没轮上进王座厅。事后被叫去花园里挖了一夜的坑，上头交代：你什么也没看见。他照这句话说了一年，说得自己都快信了。',
      tags: ['简单上手'], origins: ['wex'],
    },
    {
      id: 'rosamond', name: '林伍德的罗莎蒙德', gender: 'f', race: 'human', subrace: 'alenic', cls: 'rogue', background: 'scribe',
      abil: { str: 9, dex: 15, con: 11, int: 14, wis: 13, cha: 13 }, profs: ['deception', 'persuasion', 'sleight', 'perception'], portrait: 'gen_human_rogue_f',
      blurb: '紫庭的公证人。清点战利品，顺便清点人。',
      bio: '她的本行是别人分赃的时候坐在旁边记数，记完让各方按手印。巴兹伍德看中她两样：字写得小，嘴闭得紧。她看中这趟差事一样：津贴按天算。',
      tags: ['交涉'], origins: ['wex'],
    },
    {
      id: 'thora', name: '索拉·石账', gender: 'f', race: 'dwarf', subrace: 'ruby_dwarf', cls: 'cleric', background: 'acolyte',
      abil: { str: 13, dex: 8, con: 16, int: 10, wis: 15, cha: 13 }, profs: ['history', 'medicine'], portrait: 'dwarven_theologian_f',
      blurb: '负怨者兵团的管账祭司。吃饭的时候念账本，一顿念一页。',
      bio: '她供的是祖先，祖先留下的东西里账最多。兵团的账本归她背，四十斤，油布包着。她亲手划掉的只有三笔，每划一笔，就给欠债那家的后人写封信，告诉他们两清了。',
      tags: ['治疗'], origins: ['grudge'],
    },
    {
      id: 'pip', name: '皮普·枝下', gender: 'm', race: 'halfling', cls: 'rogue', background: 'criminal',
      abil: { str: 8, dex: 17, con: 12, int: 10, wis: 13, cha: 15 }, profs: ['sleight', 'acrobatics', 'perception', 'investigation'], portrait: 'gnome_spymaster',
      blurb: '汤姆斯桥来的半身人。合同上写的工种是“开锁的”。',
      bio: '矮人钻不进地精挖的洞，兵团照老规矩雇了个半身人。他家三代接这种活，传下来一套撬棍和一句话：先问清楚谁背你出来。干粮他自带，带得很多。',
      tags: ['潜行'], origins: ['grudge'],
    },
    {
      id: 'krug', name: '克鲁格·半吼', gender: 'm', race: 'orc', subrace: 'green_orc', cls: 'barbarian', background: 'hunter',
      abil: { str: 17, dex: 13, con: 15, int: 8, wis: 12, cha: 10 }, profs: ['athletics', 'intimidation'], portrait: 'green_orc_grand_captain',
      blurb: '嗜血者的狂战士。今天吼到一半醒了，发现自己落在撤退的队伍后头一条街。',
      bio: '他十六岁独自猎了一头野猪，喝了血，从此上阵不记事。今天午后照旧不记事，醒过来时斧子卡在一扇门上，街上说的全是人话。他的酋长死在三条街外。',
      tags: ['简单上手'], origins: ['tide'],
    },
    {
      id: 'snik', name: '斯尼克·门把手', gender: 'm', race: 'goblin', cls: 'wizard', background: 'merchant',
      abil: { str: 8, dex: 16, con: 13, int: 16, wis: 12, cha: 10 }, profs: ['arcana', 'history'], portrait: 'exodus_goblin_court_mage',
      blurb: '洞穴地精，书贩子的跑腿。通用语认得的字比多数骑士多。',
      bio: '兽人抢来的书没人要，地精书贩子论斤收。他替东家跑了八年腿，路上把货翻了个遍，照着一本缺页的课本学会三样小法术。今天链子断了，他头一件事是回去找那本书。',
      tags: ['施法'], origins: ['tide'],
    },
  ],

  // BIBLE.md §7: no ruinborn (unknown in Cannor before 1490), mechanim, hobgoblin, harimari, lizardfolk, centaur, harpy.
  races: ['human', 'elf', 'half_elf', 'dwarf', 'halfling', 'gnome', 'half_orc', 'orc', 'goblin', 'kobold', 'gnoll', 'ogre'],

  companions: {
    ushka: {
      id: 'ushka', name: '乌什卡', gender: 'f', race: 'orc', subrace: 'green_orc', cls: 'fighter', subclass: 'fighter_company',
      abil: { str: 17, dex: 13, con: 15, int: 8, wis: 12, cha: 10 }, profs: ['athletics', 'survival', 'medicine'],
      equip: { weapon: 'blade_and_hammer', armor: 'chain_shirt', offhand: null, trinket: null }, portrait: 'green_orc_commandant_f',
      blurb: '烂刀氏族出来巡游的年轻人，来给杜坎森做归尘礼。没人请她。谈骨头像木匠谈料。',
    },
    tan: {
      id: 'tan', name: '阿坦', gender: 'm', race: 'human', subrace: 'escanni', cls: 'cleric', subclass: 'cleric_regent',
      abil: { str: 14, dex: 11, con: 14, int: 8, wis: 16, cha: 12 }, profs: ['religion', 'history'],
      equip: { weapon: 'procession_head', armor: 'chain_shirt', offhand: 'shield', trinket: null }, portrait: 'gen_human_mage_m',
      blurb: '十六岁的小祭司，守着万神道上一座没屋顶的庙。晨祷一共四十一句，他念到四十句。',
    },
    nixee: {
      id: 'nixee', name: '妮克西', gender: 'f', race: 'goblin', cls: 'warlock', subclass: 'warlock_archfey',
      abil: { str: 8, dex: 15, con: 14, int: 11, wis: 12, cha: 15 }, profs: ['deception', 'persuasion', 'nature'],
      equip: { weapon: 'dagger', armor: 'leather', offhand: null, trinket: null }, portrait: 'exodus_goblin_trader_f',
      blurb: '地鹰氏族的寻誓者，黄眼睛，东家是愚者亲王。什么都有价，张口闭口“规矩第几条”。',
    },
    garaele: {
      id: 'garaele', name: '加莱尔·守昔者', gender: 'f', race: 'elf', subrace: 'moon_elf', cls: 'cleric', subclass: 'cleric_regent',
      abil: { str: 13, dex: 12, con: 14, int: 9, wis: 15, cha: 12 }, profs: ['history', 'religion', 'insight'],
      equip: { weapon: 'mace', armor: 'chain_shirt', offhand: 'shield', trinket: null }, portrait: 'sun_elf_natural_scientist_f',
      blurb: '编年史家，四十三岁，在精灵里算刚出门。不着急，总在最不合适的时候提问，问得很准。',
    },
    belgrak: {
      id: 'belgrak', name: '贝尔格拉克·穴居者', gender: 'm', race: 'dwarf', subrace: 'ruby_dwarf', cls: 'fighter', subclass: 'fighter_company',
      abil: { str: 15, dex: 13, con: 16, int: 8, wis: 12, cha: 11 }, profs: ['athletics', 'history', 'intimidation'],
      equip: { weapon: 'warhammer', armor: 'chain_mail', offhand: 'shield', trinket: null }, portrait: 'dwarven_commandant',
      blurb: '科琳之环的旧人，红宝石矮人。说话像报账：先说数目，再说事，最后说年份。',
    },
  },

  quests: {
    q_cart: {
      title: '那道军令', desc: '兹令各营各出一人，收殓此役无人认领之死者，事毕为止。',
      stages: ['把杜坎森弄出城，给他找个去处。', '山底下有人逾期没回来。去找。', '帝国有一位压在花圃底下。去把他请出来。', '等妖精回信，去看最后一位。', '回卡斯托纳斯。'],
      doneText: '事毕。没有人来说这两个字，你们自己说了，或者没说。',
    },
    q_dragon: {
      title: '银龙为什么没有再来', desc: '阿坦托你们出城的时候顺路打听一件事。',
      stages: ['出城的时候顺路打听。', '有人说他在生卡斯塔诺的气。再问问。', '井壁上有个名字。记下来。', '同一位，两个名字。去找他的神殿。', '答案在墙上。'],
      doneText: '阿坦知道了。往后的晨祷念几句，是他的事。',
    },
    q_korgus: {
      title: '没人肯埋的兽人', desc: '杜坎森的尸首在板车上。四家出价，没有一家是来埋他的。',
      stages: ['天亮前把尸首弄出城。', '路上有人盯着这辆车。看住它。', '定下他的去向。'],
      doneText: '杜坎森有了去处。记进名册，或者留一个空格。',
    },
    q_sightings: {
      title: '三起银龙现身', desc: '加莱尔按编年史家悬赏付钱，请你们去查三起“银龙现身”。',
      stages: ['去渔村看那张“龙皮”。', '去蓝宝石望找那个仰头的老太太。', '去焦塔顶上看那道银光。'],
      doneText: '三起都不是。加莱尔照价付了钱。',
    },
    q_compact: {
      title: '城归谁管', desc: '各团要走了，门板桌上还剩一件事。',
      stages: ['在各团散伙之前，把城的事说定。'],
      doneText: '城有了说法，或者没有。',
    },
    q_debt: {
      title: '欠地鹰的那块地', desc: '科琳许过地鹰氏族一块能安生过日子的地。她死了，债没死。',
      stages: ['找一个还认这笔账的人。', '拿到盖了印的地契。', '保住康原。'],
      doneText: '账清了。妮克西把欠条撕成两半，一半给你。',
    },
    q_ushka: {
      title: '第十二条', desc: '乌什卡的木签上刻着骑士的规矩，十一条。',
      stages: ['问问她木签上那十一条是什么。', '山里那五年她又刻了几道。去看看。', '帝国的规矩：先递文书后说话。教给她。'],
      doneText: '第十二条是她自己拟的。她起先不给你看，后来给了。',
    },
    q_parents: {
      title: '逾期未归', desc: '加莱尔的父母随阿斯拉探险队进山，逾期没回来。',
      stages: ['问问探险队，他们走的是哪条线。', '往交轨大厅找。', '去泵房。'],
      doneText: '守昔者夫妇找到了。数目对得上。',
    },
    q_list: {
      title: '三百一十二条', desc: '贝尔格拉克的名单，头一条是议会之门，灰前五千八百八十八年。',
      stages: ['跟着名单走，把人带回来。'],
      doneText: '他划了一条，或者你把他背出来了。',
    },
    q_duke: {
      title: '郁金香底下的大公', desc: '德利安的信：皇宫花圃底下躺着几位，他有数。',
      stages: ['去阿德蕾西娅堡见写信的人。', '庆典前夜，去第七畦。', '定下手里的东西给谁，人埋在哪儿。'],
      doneText: '德利安结了账。',
    },
    q_door: {
      title: '有扇门', desc: '妮克西说她东家管着一扇门。他不收钱，他收别的。',
      stages: ['等回信。', '九个冬天以后，去敲门。'],
      doneText: '过去了。回头看不见来路。',
    },
    q_wall: {
      title: '诸神之王', desc: '月焰号的航海志上记着天空神殿的方位。林子通，海路不通。',
      stages: ['过林子。', '沿塞拉河往上走。', '看完那面墙。', '定下带什么回去。'],
      doneText: '出来了。外头是 1472 年。',
    },
    q_southgate: {
      title: '卡斯托纳斯，又一次', desc: '熊心带着氏族到了白墙南边。',
      stages: ['熊心六日到南门。做准备。', '守南门。', '十一日，去那块空地。'],
      doneText: '仗打完了。尸首这回有人收。',
    },
    q_o_corintar: {
      title: '那截皮带', desc: '它是抬她的时候崩断的。',
      stages: ['决定那截盾带还不还。', '会上他们要你作证。', '她升的是谁的天。去墙前头想清楚。'],
      doneText: '皮带有了去处。',
    },
    q_o_sons: {
      title: '有月亮的晚上', desc: '军士长要埋在月神之耳，要有月亮的晚上。',
      stages: ['军士长的骨灰在你包里。带着它。', '少主来信：别让他父亲当旗子。'],
      doneText: '他到了月神之耳。或者没到。',
    },
    q_o_wex: {
      title: '数门的人', desc: '巴兹伍德先生的信：数一数卡斯托纳斯有几座门，各在谁手里。',
      stages: ['巴兹伍德先生等着你的信。', '回去述职。'],
      doneText: '最后一封报告有了收信人。',
    },
    q_o_grudge: {
      title: '玛瑙之门，1424', desc: '账页上那一条记在杜坎森名下。验明正身，才能划账。',
      stages: ['验明正身。', '把那一条划了，或者划不了。', '跟着兵团自己的远征走一趟。'],
      doneText: '账本合上了。',
    },
    q_o_tide: {
      title: '三条路', desc: '古拉德要种地，阿罗莎要跟科琳的人走，古尔赞要再来一回。',
      stages: ['先活过今晚。', '你在火边选了一条。走下去。'],
      doneText: '路走到头了。',
    },
  },

  // Cheat menu "jump to chapter" (BIBLE.md §12.9: the canon line by default; see the *_DONE lists at the top).
  chapters: [
    { title: '序章 · 科琳的队伍', note: '1 级，一个人。科琳刚倒下。', scene: 'p_corintar_01', if: "origin == 'corintar'" },
    { title: '序章 · 达梅里亚之子', note: '1 级，一个人。北城一条世家的街。', scene: 'p_sons_01', if: "origin == 'sons'" },
    { title: '序章 · 皇帝的差事', note: '1 级，一个人。峭壁区的屋顶。', scene: 'p_wex_01', if: "origin == 'wex'" },
    { title: '序章 · 负怨者兵团', note: '1 级，一个人。南城，一路估价。', scene: 'p_grudge_01', if: "origin == 'grudge'" },
    { title: '序章 · 退潮的人', note: '1 级，一个人。手背不再变色。', scene: 'p_tide_01', if: "origin == 'tide'" },
    { title: '第一幕 · 没人肯埋的兽人', note: '2 级；乌什卡在队。序章里对那个快死的人说了实话。', scene: 'a1_01', effects: PROLOGUE_DONE },
    { title: '第二幕 · 再没人见过的矮人', note: '4 级；乌什卡、阿坦、妮克西在队。尸首沉了湖，城没人管。', scene: 'a2_01', effects: ACT1_DONE },
    { title: '第三幕 · 郁金香底下的大公', note: '6 级；加莱尔入队。贝尔格拉克再没人见过。', scene: 'a3_01', effects: ACT2_DONE },
    { title: '第四幕 · 诸神之王', note: '8 级；九年过去。证据没动，皇后死了，大公埋在月神之耳。', scene: 'a4_01', effects: ACT3_DONE },
    { title: '终章 · 卡斯托纳斯，又一次', note: '10 级；出林，外头是 1472 年。门砌上了，杖放回了神龛。', scene: 'f_01', effects: ACT4_DONE },
  ],

  flagNotes: {
    // 序章
    p_truth: '序章里对那个快死的人说了实话',
    p_lied: '序章里对那个快死的人说了好听的',
    saw_her_look: '看清了科琳倒下前脸朝哪边',
    vigil_knelt: '守夜时跟着跪了',
    urn_promised: '答应过军士长，把他埋在月神之耳',
    rogier_counted: '帝国的书办数到了罗吉尔',
    sons_knelt: '达梅里亚之子去那块空地上跪过她',
    dug_the_pit: '你去年在皇宫花园里挖过那个坑',
    rogier_spotted: '在桥上认出了罗吉尔，还数了他的人',
    letter_shown: '亮过巴兹伍德的信',
    report1_true: '头一只信鸽写的是真话',
    report1_false: '头一只信鸽写的是假话',
    knows_underpass: '知道地下通道的水闸在哪儿',
    body_verified: '在尸首上验到了杜坎印记',
    p_surrendered: '序章里扔过兵器',
    // 第一幕
    cart_known: '出城时走漏了风声',
    goblins_hidden: '地下通道的地精藏起来了',
    goblins_armed: '地下通道的地精拿上了兵器',
    goblins_handed: '地下通道的地精交给了边区兵',
    goblin_speaker: '地精推了一个说话的人',
    rose_chain_freed: '灰烬玫瑰那串“仆役”放了',
    rose_chain_bought: '从灰烬玫瑰手里赎了两个“仆役”',
    rose_chain_ignored: '给灰烬玫瑰的“仆役”队让了路',
    jar_broken: '夜袭里砸了魂罐',
    ghost_taken: '杜坎森的鬼魂被死语者带走了',
    korgus_rite: '杜坎森做了归尘礼',
    korgus_son: '杜坎森交给了古尔赞',
    korgus_spike: '杜坎森的头挂上了城门',
    korgus_sold: '杜坎森卖给了铁杖骑士团',
    korgus_lake: '杜坎森沉了银池湖',
    korgus_carver: '杜坎森交给了雕骨者',
    gurzan_owes: '古尔赞欠你们一份情',
    gurzan_grudge: '古尔赞记着你们一笔仇',
    ushka_warned: '乌什卡说过“第二回我走”',
    entry_struck: '玛瑙之门那一条划掉了',
    roll_seen: '看过萨什卷',
    roll_told: '在会上念了卷子里那句话',
    morningstar_hint: '知道元老会里有晨星会的人',
    spirits_heard: '听到了树灵说“银的那位”',
    shout_answered: '在试炼山上喊过，北要塞有人应',
    avatar_carleon: '替卡莱昂作过化身的保',
    avatar_gryf: '替小格里夫作过化身的保',
    sightings_exposed: '当众抖出了三起现身的底',
    has_vote: '你在第十次泛神会议上有一票',
    testimony_hers: '作证：那一下是她自己选的',
    testimony_host: '作证：功劳在全军',
    testimony_king: '作证时替阿坦问了“王在哪儿”',
    groundhawk_deed: '蓝牙认了康原那块地',
    pixiebury_warned: '给古拉德报过信，有人替碎心者作保',
    compact_league: '城约：卡斯托纳斯归伯爵联盟',
    compact_corintar: '城约：卡斯托纳斯归科琳塔尔',
    compact_free: '城约：卡斯托纳斯自己管自己',
    compact_none: '城约没谈成，城没人管',
    compact_sealed: '城约上有帝国的印',
    moot_defused: '银现月的聚会被搅散了，或者谈成了',
    road_ghurad: '你在火边选了古拉德的路：留下来种地',
    road_arosha: '你在火边选了阿罗莎的路：跟科琳的人走',
    road_gurzan: '你在火边选了古尔赞的路：再来一回',
    // 第二幕
    khug_goblins_out: '把玛瑙之门的地精住户撵了',
    khug_goblins_lease: '跟玛瑙之门的地精住户立了租约',
    rail_bones: '收了死铁道上的遗骨',
    rail_contract: '跟铁路潜伏者立了通行的约',
    brack_bought: '堵了布拉克的嘴',
    lied_to_garaele: '泵房那天对加莱尔说了好听的',
    parents_buried_deep: '守昔者夫妇就地埋在了山里',
    parents_carried: '守昔者夫妇被抬出了山',
    company_whole: '负怨者兵团没散',
    castellar_seen: '井壁上读到了“天上的卡斯特拉尔”',
    dookanil_known: '知道了“杜坎尼尔”这个音',
    brok_lives: '布罗克活着出了山',
    belgrak_lost: '贝尔格拉克再没人见过',
    belgrak_saved: '把贝尔格拉克背出来了',
    belgrak_struck: '贝尔格拉克当众划了一条账',
    dookanil_told: '山里那句话带出去了',
    dookanil_mocked: '那句话是被人当笑话传出去的',
    names_filed: '两个名字报给了编年史家会',
    notebook_order: '拓片本交给了编年史家会',
    notebook_kept: '拓片本加莱尔自己留着',
    notebook_sold: '拓片本背着加莱尔卖了',
    // 第三幕
    creed_carried: '接了多米尼克托带的信条',
    creed_delivered: '信条送到了神殿区',
    tilda_with: '蒂尔达跟着队伍',
    bilge_graves: '给舱底区的无名尸立了坟',
    log_read: '读了月焰号航海志',
    log_copied: '抄了航海志',
    log_stolen: '把航海志拿走了',
    log_filed: '航海志两头登记，上交了',
    bearing_known: '记下了神殿的方位',
    digger_talked: '挖坑的人开口了',
    digger_safe: '把挖坑的人送走了',
    digger_given: '把挖坑的人交给了蒂尔达',
    clan_charter: '拿到了给东坎诺氏族的特许',
    tilda_blindsided: '瞒着蒂尔达办了要紧事',
    garden_alarm: '在皇宫花园里惊动了守卫',
    wound_seen: '验了伤：从后往前，窄刃',
    daras_seen: '庆典前认出了达拉斯',
    empress_saved: '皇后没死',
    daras_fled: '帮达拉斯跑了',
    proof_bardswood: '证据给了巴兹伍德',
    proof_moon: '证据给了月党',
    proof_published: '证据印出去了',
    proof_kept: '证据留在了自己手里',
    rogier_pardoned: '替罗吉尔讨到了赦令',
    emperor_duel_won: '照三卫的规矩赢了皇帝一场',
    tilda_true: '蒂尔达的最后一份报告照实写了',
    tilda_false: '蒂尔达的最后一份报告照你的意思写了',
    tilda_burned: '蒂尔达把密码本烧了',
    door_letter_sent: '妮克西给东家写了信',
    adenn_damesear: '大公埋在了月神之耳',
    adenn_rogier: '大公交给了罗吉尔',
    adenn_left: '大公留在了花圃底下',
    urn_buried: '军士长下葬了',
    // 第四幕
    arun_notes: '手里有阿鲁恩的笔记',
    blackbranch_deal: '接了黑枝亲王的价：回去以后非说不可',
    toll_nixee: '过路费：妮克西留在了愚者宫里',
    toll_years: '过路费：再添十年',
    toll_story: '过路费：先把这趟的故事讲给了亲王',
    toll_staff: '过路费：答应回程把权杖留给亲王',
    lies_cursed: '身上带着血律的霉运',
    lies_confessed: '把每一句谎都当众说了',
    garaele_leaving: '加莱尔决定出林后回月山',
    contract_staff: '血约里还的是那根杖',
    relic_given: '血约里还的是一件信物',
    staff_seen: '见过断权杖',
    war_of_two_seen: '看过二人之战那一幅',
    tan_read_it: '最后一幅是阿坦自己看的',
    tan_shielded: '最后一幅你替阿坦挡了',
    rite_done: '头一场丧事办了',
    wall_rubbed: '拓了壁画',
    wall_sealed: '把壁画厅的门砌死了',
    wall_defaced: '凿了最后一幅',
    tan_stayed: '阿坦留在了阿伦蒂尔',
    staff_home: '断权杖带回了坎诺',
    staff_returned: '断权杖放回了神龛',
    staff_fey: '断权杖给了愚者亲王',
    contract_broken: '毁了血约',
    // 终章
    garaele_left: '加莱尔回了月山',
    ushka_left: '乌什卡离队了',
    tan_told: '让阿坦去告诉拜王的人',
    tan_silent: '跟阿坦约好不说',
    tan_forced: '逼阿坦照旧宣讲银龙必再临',
    tan_morningstar: '阿坦去了晨星会',
    told_dominic: '把真相告诉了多米尼克',
    temples_first: '先关起门告诉了神殿',
    ushka_spoke: '“造我们的人不配我们替他死”在古尔赞的火边说了',
    arosha_at_table: '阿罗莎上了门板桌',
    bones_at_gate: '借了白骨守南门',
    underpass_held: '地下通道有人守',
    staff_to_dominic: '断权杖交给了多米尼克',
    staff_to_temples: '断权杖交给了神殿',
    told_printed: '交给编年史家会刻了版',
    sold_morningstar: '卖给了那位元老',
    prophecy_known: '知道阿格拉多斯教团的那则预言',
    prophecy_told: '把预言公开了',
    skyking_slur: '“他们的神杀了咱们的王”传开了',
    southgate_held: '南门守住了',
    claimant_kalista: '陪卡莉斯塔上了试炼山',
    claimant_arosha: '陪阿罗莎上了试炼山',
    conclave_held: '万神道上的会开成了',
    gurzan_treaty: '跟古尔赞谈成了',
    gurzan_soul_taken: '洛朗收了古尔赞的魂',
    laurens_stopped: '拦下了洛朗',
    gurzan_buried: '给古尔赞做了归尘礼',
    gurzan_returned: '古尔赞交给氏族抬回去了',
    sided_gurzan: '你站到了古尔赞那一边',
    // 神格
    god_revealed: '头一回当众显了身份',
    god_tried_raise: '试过让科琳起来',
    god_shrine: '路边有人给你立了龛',
    ushka_wary: '乌什卡头一面就防着你',
    god_faked_dragon: '给老太太造了一回“银龙”',
    god_named_korgus: '当众说杜坎森是杜坎的儿子',
    god_denied_korgus: '当众说杜坎森不是杜坎的儿子',
    god_avatar_claimed: '认了“卡斯特洛斯的化身”这个名分',
    god_judged_council: '替第十次泛神会议裁决了',
    god_of_the_tide: '接了杜坎森空出来的位子',
    entry_313: '负怨者的名单上多了关于你的一条',
    rail_woken: '让死铁道跑了一天',
    god_opened_shaft: '硬撬过胡尔-乔卡德的竖井',
    belgrak_struck_by_god: '贝尔格拉克那一笔是神按着他的手划的',
    god_sided_throne: '当众替皇帝挡了刀',
    god_duel_emperor: '应了皇帝的战，赢了',
    owes_fey_miracle: '欠愚者亲王一次有求必应',
    god_answered_for_him: '在墙前头替那位应了一声',
    god_held_gate: '一个人守了南门',
    god_held_city: '城破以后硬拿了回来',
    fourth_offered: '会上把那把椅子摆到了你面前',
    fourth_sat: '你在那把椅子上坐下了',
    fourth_declined: '你说那把椅子不归你让，也不归你坐',
    fourth_undertaker: '你说你是来收尸的',
  },

  endings: {
    funeral: {
      title: '送神', subtitle: '万神道，1472 年奈拉月', art: 'load_17',
      text: [
        '1472 年奈拉月，万神道上那座没屋顶的庙前头办了一场丧事。来了两百多人，一半是兵，站得乱七八糟。会上只议定了一件事：他死了。谁接那把椅子，是有意不议的。',
        '王庭没改名字。摄政的接着摄政，只是往后大家都知道替的是谁。君王加冕的时候，权杖搁在一边，不拿。',
        '阿坦念完了第四十一句。没人谢你们。',
      ],
    },
    sword: {
      title: '剑上天', subtitle: '天位无主，科琳以功继之', art: 'load_8',
      text: [
        '多米尼克站在她倒下的那块空地上，用念判词的口气宣布：天位无主，科琳以功继之。东坎诺从此只有一个信仰。肯向她低头的兽人，自家的灶保住了。',
        '西边的神殿不认。“失德之君可逐”这句话往西传，传进了一个皇帝刚死两年的帝国。',
        '蓝牙站在人群最外头，没跪，也没走。后来有人捧着一顶冠去找他，他看了一眼，让人原样拿了回去。',
      ],
    },
    eldest: {
      title: '长子', subtitle: '王倦勤，长子摄事', art: 'ev_adeanic_war',
      text: [
        '各殿的主祭关起门议了一冬，开春悄悄立了阿德安。百姓听到的说法是：王倦勤，长子摄事。王冠都还戴着。',
        '科琳塔尔成了王庭里一个脾气大的教派，进门出门都摔门。往后谁坐鸽座，谁头上就有天上盖的印。那把椅子当初是怎么坐上去的，没人再问。',
      ],
    },
    standing: {
      title: '军令未撤', subtitle: '贾哈尼克正史里是这样',
      text: [
        '收尸队在门板桌边按了手印，各自散了。那道军令还钉在万神道的庙门上，纸边卷了，字还认得。',
        '1490 年，恩德拉尔的船从海路到了阿伦蒂尔。1518 年，小册子满街都是。加莱尔一辈子不承认，也不否认。',
        '古尔赞、皮克精之墓、鸽座，各按各的数走。第二天天亮，阿坦照旧做晨祷，念到第四十句。',
      ],
    },
    mantle: {
      title: '卡斯坦的披风', subtitle: '喊一嗓子，有人应',
      text: [
        '山上的法术早没了。那天夜里她在试炼山上喊了一嗓子，北要塞里有人应。誓石边站着作证的人，你站在最前头。',
        '誓词念到“并永说真话”那一句，她停下来，当着全城把墙上的事说了。开春，城里有了王法、粮价和巡夜的。',
        { if: 'flag.claimant_kalista', text: '戴冠的是卡莉斯塔·黑塔。伯爵联盟的人头一回在誓石底下站成一排，各家的旧账留到明年再算。' },
        { if: 'flag.claimant_arosha', text: '戴冠的是阿罗莎·伐橡者。两族共戴一主，在血腐阶梯流过血的边区兵卷了铺盖，往西走了。' },
        '一代人之内，这个国会想起自己从前有多大。帝国那边已经在整军了。',
      ],
    },
    dookansday: {
      title: '杜坎之日', subtitle: '奈拉月 11 日，银瀑边', art: 'ev_orc_with_axe',
      text: [
        '奈拉月 11 日，氏族拿回了他们当年头一座没舍得烧的城。古尔赞站在那块空地上，把一节断链扔进了银瀑。下城的人管银瀑叫粪瀑，链子沉下去，没溅起什么水花。',
        '他的理由二十八年没变：试过讲和的氏族，最后都被人拴着卖了。',
        { if: 'flag.dookanil_told && world.word >= 5', text: '那天夜里火堆边传的是一句新话：造我们的那位，杀了他们的王。' },
        '西边终于出兵了。1424 年他们没来。',
      ],
    },
    fourth: {
      title: '第四个人选', subtitle: '血统，功劳，空着；还有一个是活的', divine: true,
      text: [
        '大帐里一百多人，吵了一冬的三派头一回同时闭了嘴。多米尼克，各殿主祭，教团的老妇人，都看着门板桌边的你。阿坦站在门口。',
        { if: 'flag.fourth_sat', text: '你坐下了。王庭头一回有了一位在地上的主人，“摄政”这个词没人再用。往后的君王加冕要你点头。蓝牙头一个起身走了，科琳塔尔从此不进万神道。阿坦只问了一句：晨祷的词要不要改。' },
        { if: 'flag.fourth_sat', text: '这支队伍二十八年里埋的每一位，都压在一把椅子底下。现在椅子上是你。' },
        { if: 'flag.fourth_declined', text: '你说这把椅子不归你让，也不归你坐。会照凡人的路数接着开。' },
        { if: 'flag.fourth_declined && world.scale >= 3', text: '开到开春，多米尼克那边的人多了一倍。椅子往科琳那头歪了。' },
        { if: 'flag.fourth_declined && world.scale <= -3', text: '各殿的主祭当晚就关起门来，说的都是阿德安的名字。' },
        { if: 'flag.fourth_declined && world.scale > -3 && world.scale < 3', text: '吵到开春也没吵出个结果。椅子空着，两边都说是自己让的。' },
        { if: 'flag.fourth_declined', text: '多米尼克追出三条街问你凭什么：你明明能，你不肯，往后死在教战里的人算谁的。没人答得上来，你也不能。万神道上还是给你留了一座龛，你没答应过。' },
        { if: 'flag.fourth_undertaker', text: '你说你是来收尸的。你没碰那把椅子，把丧事接了过去。王庭里本来就有一位殓神者瓦伊洛科尔，千年来没人问过他殓的是谁。这差事如今有了第二个人。乌什卡管这叫浪费。你往后抬的每一个，都是你认识的。' },
        { if: '!flag.fourth_sat && !flag.fourth_declined && !flag.fourth_undertaker', text: '你站在那把空椅子前头，没坐，也没走。帐子里的人等了一夜。' },
        '军令上写的是“事毕为止”。对一个不会死的人，这四个字没有头。',
      ],
    },
  },

  endingScenes: {
    funeral: 'end_funeral', sword: 'end_sword', eldest: 'end_eldest', standing: 'end_standing',
    mantle: 'end_mantle', dookansday: 'end_dookansday', fourth: 'end_fourth',
  },

  // After-story cards (BIBLE.md §10.3 and §16.5). Groups that are mutually exclusive share one card.
  epilogues: [
    // ---- 甲：世界局势
    {
      if: 'world.embers <= 3 || flag.southgate_held', title: '{?world.embers <= 3:长者郡的集|第二回}',
      text: [
        { if: 'world.embers <= 3', text: '第二次潮没来。银现月 4 日的聚会一年比一年像牲口集，后来干脆就是牲口集。每年奈拉月 11 日，艾伦河上还是漂着断链和蘑菇。' },
        { if: 'world.embers <= 3 && flag.gurzan_treaty', text: '古尔赞放在门板桌上的那节断链，后来一直没人收走。' },
        { if: 'world.embers >= 4 && world.embers <= 7', text: '1472 年那一仗，{?flag.arosha_at_table:阿罗莎|蓝牙}砍了他的手。{?flag.laurens_stopped:洛朗那只空罐子到底没装上东西。|洛朗收了他的魂，罐子挂在腰上第三个。}嗜血者两代人之内散尽了，名字留下来吓唬小孩。' },
        { if: 'world.embers >= 8', text: '南门守住了，守得很惨。往后三十年，边区兵不跟绿皮的同桌吃饭。' },
      ],
    },
    {
      title: '皮克精之墓',
      text: [
        { if: 'world.room <= 2', text: '1467 年，灰烬玫瑰和马尔霍德洗了皮克精之墓。古拉德带着伤往西走，第二年让了位。到 1520 年代，维特斯克的码头按头卖兽人，价钱贴在门口。' },
        { if: 'world.room >= 3 && world.room <= 6', text: '皮克精之墓没烧，康原还是丢了。1470 年代灰烬玫瑰来夺地，蓝牙出面保人，地鹰一家一家迁进了科琳塔尔的地界。那张地契压在一只木匣子底下。' },
        { if: 'world.room >= 7', text: '皮克精之墓没烧。城里的歌往外传，下城有了地精坊。坊里的门把手装在两个高度。' },
      ],
    },
    {
      title: '{?world.unburied >= 7:白骨有价|坟}',
      text: [
        { if: 'world.unburied <= 2', text: '东坎诺的坟后来比村子还多，每座都有名字。埃斯蒂尔晚了一代人才成气候，瓦丽娜抱怨找不到料。' },
        { if: 'world.unburied >= 3 && world.unburied <= 6', text: '洛朗后来成了东坎诺头几个巫师王之一。瓦丽娜拿死人修城墙，管这叫节省。' },
        { if: 'world.unburied >= 7', text: '城是死人守住的，那年冬天卡斯托纳斯没人挨饿。铁杖骑士团读了你们带回来的东西，得出的结论是：椅子既然空着，有本事的就该坐。' },
        { if: 'flag.bilge_graves', text: '安本科斯特舱底区那排无名坟，后来每年有人去扫，扫的人也不知道里头是谁。' },
      ],
    },
    {
      title: '{?world.peace <= 3:第五场|鸽座}',
      text: [
        { if: 'world.peace <= 3', text: '奥坎娜 1467 年就病死了。上马的是她儿子奥坎，提着他母亲那杆断枪。罗吉尔六十多岁了，还带兵往西走。阿登有了一场配得上他的仗，西坎诺没有。' },
        { if: 'world.peace >= 4 && world.peace <= 6', text: '1468 年，新任大魔导师的就职礼上，西尔加里昂家的法师用预言术把王座厅那一晚演了出来。1470 年皇帝中风死了。珍珠边地的人当选，没过几年，威克斯被一块一块拆了。' },
        { if: 'world.peace >= 7', text: '那句话没被戳穿。太平多撑了二十年，鸽座看着越来越像威克斯家的祖产。' },
      ],
    },
    {
      if: 'world.word >= 3 && world.word <= 6 && visited.end_standing', title: '走漏',
      text: [
        '等不到 1518 年。先是神殿区的酒馆，后是泰卢姆喊报人，站在桶上一口气报完。',
        { if: 'flag.blackbranch_deal', text: '最早讲开的是黑枝亲王的骑士，在深林边上，一字不改。' },
        '加莱尔照旧不承认，也不否认。',
      ],
    },

    // ---- 乙：抉择
    {
      if: 'flag.korgus_rite || flag.korgus_son || flag.korgus_spike || flag.korgus_sold || flag.korgus_lake || flag.korgus_carver', title: '杜坎森',
      text: [
        { if: 'flag.korgus_rite', text: '死齿给他备过一副新躯体，1452 年叫坚定大队的冒险者捣了。就算没人去捣，里头也凑不出他的一块骨头。乌什卡的木签上多刻了一道。' },
        { if: 'flag.korgus_son', text: '1472 年南门外竖着的那面骨旗就是他。古尔赞败了以后，那副骨头归谁，氏族里又吵了一回。' },
        { if: 'flag.korgus_spike', text: '人头在白墙的门上挂了三年。掉下来那天没人捡。兽人小孩学会的头一句人话，是那座门的名字。' },
        { if: 'flag.korgus_sold', text: '那箱金冠发了三个营的抚恤。1452 年斯劳手里的是真货，坚定大队多死了四十个人才把它毁掉。' },
        { if: 'flag.korgus_lake', text: '每年奈拉月 11 日，有人往银池湖里扔蘑菇。湖边的渔民说，那天网沉。' },
        { if: 'flag.korgus_carver', text: '阿祖科尔雕了九年。雕完那天他宣布，杜坎森的魂已经上路了。氏族里都在等着认一个孩子。' },
        { if: 'flag.ghost_taken', text: '他的鬼魂在死语者的罐子里，被问了二十年的话。' },
      ],
    },
    {
      if: 'flag.compact_league || flag.compact_corintar || flag.compact_free || flag.compact_none', title: '城',
      text: [
        { if: 'flag.compact_none', text: '城一直没人管。1479 年真霜月 17 日，先锋行会才收回南城。' },
        { if: 'flag.compact_league', text: '黑塔家收税，世家巡夜。门板桌后来搬进了北城的一间库房，桌腿底下垫着两块砖。' },
        { if: 'flag.compact_corintar', text: '科琳塔尔管城。城里的孩子是听着她的歌长大的，巡夜的人盾上都画着红底的剑。门板桌搬进了军团广场，没人敢坐。' },
        { if: 'flag.compact_free', text: '城约一年一议，各团、世家和氏族各出一个人。门板桌留在那块空地上，换过七扇门板，酒桶一直是那两只。' },
        { if: 'flag.compact_sealed', text: '城约的抄本上盖着帝国的印，印泥是紫的。' },
      ],
    },
    {
      title: '{?flag.empress_saved:玫瑰与鸽子|庆典}',
      text: [
        { if: 'flag.empress_saved', text: '皇后活了下来，威克斯和洛伦特的联姻多撑了几年。{?flag.daras_fled:达拉斯跑了。后来有人在塔兰顿见过他，在给人缝寿衣。|达拉斯在牢里缝了八年寿衣。}' },
        { if: '!flag.empress_saved', text: '皇后死在三十年庆典上，联姻作废。皇帝派人去杀罗吉尔，没杀成。罗吉尔从此走路有点偏。' },
      ],
    },
    {
      if: 'flag.proof_bardswood || flag.proof_moon || flag.proof_published || flag.proof_kept', title: '那个窟窿',
      text: [
        { if: 'flag.proof_bardswood', text: '巴兹伍德把蜡模锁进了抽屉，钥匙挂在自己脖子上。他一直没打开过，也一直没扔。' },
        { if: 'flag.proof_moon', text: '奥坎娜把那张口供钉在了帐子里，正对着床。她每天早上起来先看一眼。' },
        { if: 'flag.proof_published', text: '满帝国的酒馆都在比划那一刀：从后往前，窄刃。说书的人越比划，刀越长。' },
        { if: 'flag.proof_kept', text: '证据一直压在你们车上。1468 年，有人替你们当众说了。' },
      ],
    },
    {
      if: 'flag.adenn_damesear || flag.adenn_rogier || flag.adenn_left', title: '大公的坟',
      text: [
        { if: 'flag.adenn_damesear', text: '月神之耳的坡上有一块没刻字的石头。有月亮的晚上，会有人在那儿放一枝郁金香。' },
        { if: 'flag.adenn_rogier', text: '塔兰顿城堡里多了一个龛。罗吉尔每天经过都停一下，有时候站着看兵书。' },
        { if: 'flag.adenn_left', text: '皇宫花圃上新栽了郁金香，红的。德利安死前见没见着，说法不一。他是被人刺死的。' },
      ],
    },
    {
      if: 'flag.belgrak_lost || flag.belgrak_saved || flag.belgrak_struck', title: '名单',
      text: [
        { if: 'flag.belgrak_lost', text: '贝尔格拉克再没人见过。雷萨格从此不提这个名字，谁提他跟谁急。' },
        { if: 'flag.belgrak_saved', text: '1475 年玛瑙之门重立那天，贝尔格拉克在场。他坐在最后一排，手里攥着那份名单，三百一十二条，一条也没讨。' },
        { if: 'flag.belgrak_struck', text: '账本上头一回有人划掉了自家的一条。兵团里一半人不认他，他也不在乎。' },
        { if: 'flag.belgrak_struck_by_god', text: '兵团里的说法是，那一笔是神按着他的手划的。他回红宝石领以后再没碰过账本。' },
      ],
    },
    {
      if: 'flag.wall_sealed || flag.wall_defaced || flag.wall_rubbed', title: '那面墙',
      text: [
        { if: 'flag.wall_sealed', text: '1490 年以后，总会有人找到那扇门。门是从外头砌的，砌得很规矩。' },
        { if: 'flag.wall_defaced', text: '后来的人只看见最后一幅被凿过。凿的人显然不想让谁知道什么，于是人人都猜。' },
        { if: 'flag.wall_rubbed', text: '拓片一共四张纸，{?visited.end_funeral:收在万神道那座庙的供桌底下|收在一只樟木箱子里}，边上压着石头。' },
      ],
    },
    {
      if: 'flag.staff_home || flag.staff_returned || flag.staff_fey', title: '那根杖',
      text: [
        { if: 'flag.staff_home && flag.staff_to_dominic', text: '断杖在多米尼克手里。他拿它主持过很多场礼，一回也没拄过。' },
        { if: 'flag.staff_home && flag.staff_to_temples', text: '断杖进了神殿的库房，登记的名目是“来历待考”。' },
        { if: 'flag.staff_home && !flag.staff_to_dominic && !flag.staff_to_temples', text: '{?visited.end_funeral:断杖横放在空台子上。后来没人再拿起来。|断杖一直在板车上，压着别的东西。}' },
        { if: 'flag.staff_returned', text: '断杖放回了神龛。神龛前头照旧有人供贝珠，供的人不知道它出过一趟远门。' },
        { if: 'flag.staff_fey', text: '断杖在愚者亲王的宫里。听说妖精拿它当门闩，很合适。' },
      ],
    },

    // ---- 丙：同伴
    {
      if: 'met.ushka', title: '{?party.ushka:锤子|罐子}',
      text: [
        { if: 'party.ushka', text: '乌什卡回了烂刀氏族，教了三十年巡游的规矩。她自己的归尘礼是徒弟做的，磨了两天。' },
        { if: '!party.ushka && world.unburied >= 5', text: '洛朗的架子上多了一只罐子。罐口的蜡封上压着一枚兽人的指印。' },
        { if: '!party.ushka && world.unburied <= 4', text: '洛朗少了一只手。剑之誓约的人说是叫一个兽人女人砍的，砍完她把那只手磨成了粉。' },
      ],
    },
    {
      if: 'met.tan', title: '阿坦',
      text: [
        { if: 'flag.tan_told', text: '1520 年，第十一次泛神会议，或者它在这条线上的替身。有人问他，神死了，你怎么不难过。他说：我难过过了，比你们早了大半辈子。' },
        { if: 'flag.tan_morningstar', text: '他把第四十一句改了，改成求另一位。有没有回音，没人敢问。' },
        { if: 'flag.tan_stayed', text: '1490 年，恩德拉尔的人在林子边上遇见一个说坎诺话的老头。他先问今年是哪一年，再问卡斯托纳斯的庙修屋顶了没有。' },
        { if: '!flag.tan_told && !flag.tan_morningstar && !flag.tan_stayed', text: '1520 年，会上终于有人把那句话说了出来。一位东坎诺口音的老祭司坐在后排，松了一口气。他的晨祷念了七十多年，每天四十句。' },
      ],
    },
    {
      if: 'met.nixee', title: '{?flag.toll_nixee:傻子|欠条}',
      text: [
        { if: 'flag.toll_nixee', text: '深林里迷路的人，有时会莫名其妙走出来，手里多一张写着价钱的树皮。' },
        { if: '!flag.toll_nixee && visited.end_dookansday', text: '妮克西带着地精先走了一步。规矩第一条是活着。' },
        { if: '!flag.toll_nixee && !visited.end_dookansday', text: '康原{?world.room >= 6:保住了。她成了地鹰头一个跟人类签约不吃亏的人|还是丢了。她把地契折成小方块，塞进了鞋里}。她给氏族立了规矩第一千条：跟人类签约，先看对方埋不埋自己的死人。' },
      ],
    },
    {
      if: 'met.garaele', title: '{?flag.garaele_left:不承认，也不否认|1802 年冬}',
      text: [
        { if: 'flag.garaele_left', text: '加莱尔回了月山。三百年里有人问她那面墙的事，她不承认，也不否认。' },
        { if: '!flag.garaele_left', text: '1802 年冬，加莱尔死在安本科斯特，屋里全是纸。遗稿里有一页只写了一个日期：1472 年奈拉月 11 日。{?visited.end_standing:下面是空的。|下面写满了，字很小，署名排在最后。}' },
      ],
    },

    // ---- 丁：出身（每局只出一段）
    {
      title: '{nation}',
      text: [
        { if: "origin == 'corintar' && item.shield_strap && visited.end_sword", text: '那截盾带后来成了圣物，装在玻璃匣子里，摆在她倒下的那块空地边上。皮子上的铆钉孔有人数过，一共两个。' },
        { if: "origin == 'corintar' && item.shield_strap && !visited.end_sword", text: '那截盾带一直在你身上，皮子磨得发亮。你死的时候，照你的意思陪了葬。' },
        { if: "origin == 'corintar' && !item.shield_strap", text: '那截盾带早就不在你手里了。它后来去了哪儿，你问过两回，没问出来。' },
        { if: "origin == 'sons'", text: '1473 年罗吉尔死了。旧部把王冠递给蓝牙，蓝牙没接，他大儿子也没接。王冠后来收在塔兰顿的库里，跟大公的佩剑放在一起。' },
        { if: "origin == 'wex'", text: '最后一封报告{?var.honest_reports > var.false_reports:写的是实话|写得很好看}。巴兹伍德活到 1609 年，那封信他一直收在抽屉里，跟别的信分开放。' },
        { if: "origin == 'grudge'", text: '账本上玛瑙之门那一页，{?flag.entry_struck:划掉了，旁边签着你的名字|还在，背面添了一行小字}。1475 年，那座堡重新有了主。' },
        { if: "origin == 'tide'", text: '手背上还是那块绿。{?flag.road_ghurad:你跟着古拉德种了地。|}{?flag.road_arosha:你跟着阿罗莎，在林木之墙上站过岗。|}{?flag.road_gurzan:你走的是古尔赞那条路，走到了头。|}' },
      ],
    },
    // ---- 戊：阵营
    {
      if: "faction in ['heirs','tried','crownless']", title: '那把椅子',
      text: [
        { if: "faction == 'heirs'", text: '谱上没写的事，后来有人补写了。补的那一笔你认不认，没人来问过你。' },
        { if: "faction == 'tried'", text: '喊一嗓子有人应就算数。那天应声的人里，有几个是冲着你来的，你数过。' },
        { if: "faction == 'crownless'", text: '椅子空着的那些年，头一个想坐上去的是晨星会。{?flag.southgate_held:你们拦住了，拦得不好看。|没人拦得住。}' },
      ],
    },

    // ---- 己：神格与永生
    {
      if: 'is.god', title: '多一座龛',
      text: [
        '万神道上给你留了位置。香火钱归谁，各殿吵了三年。你自己去旁听过一回，坐在最后一排，没人认出来。',
        { if: 'flag.god_faked_dragon', text: '蓝宝石望那座塔如今是朝圣的地方，墙上刻着“银龙于此再临”。阿坦路过，从不进去。' },
      ],
    },
    {
      if: 'is.god', title: '多米尼克的问题',
      text: ['他九十多岁了，还在问你和她到底是什么关系。你每回答得不一样，他每回都记下来，记了四本。'],
    },
    {
      if: 'is.god', title: '收尸的神',
      text: ['板车边上还是你。乌什卡管这叫浪费：一个不会死的人，学了一身埋人的手艺。'],
    },
    {
      if: 'is.god', title: '诏令',
      text: ['各殿翻了三年经文，查“神不得亲临”那一条。结论分两派：一派说你不是神，一派说立诏的那位自己都不在了，诏还算不算数。两派都请你去作证。你去了，两派都不满意。'],
    },
    {
      if: 'is.god', title: '第三百一十三条',
      text: [
        '红宝石领的账本上有一条划不掉：某神，玛瑙之门，一四二四，未到。{?flag.entry_313:字是贝尔格拉克的亲笔。|是后来管账的人补记的。}',
        '每一任管账的都问过能不能勾销。答复都一样：欠债的还在，账就在。',
      ],
    },
    {
      if: 'is.god && (flag.fourth_sat || flag.god_answered_for_him)', title: '晨祷',
      text: [
        { if: 'flag.fourth_sat', text: '阿坦活到九十多岁。他每天早上在你的座位底下念晨祷，四十句，或者四十一句，看当年你怎么答的。他死的那天，你听见念到一半停了。' },
        { if: '!flag.fourth_sat', text: '每天天亮，你都听得见。先是一个人的声音，后来是两个人的，再后来是一个年轻的。第四十一句一直没人念。' },
      ],
    },
    {
      if: 'is.god && flag.owes_fey_miracle', title: '敲门',
      text: ['愚者亲王来敲过门了。他要的是什么，各地说法不一。东坎诺有一个村子，一夜之间人人只会说实话，说了三年。'],
    },
    {
      if: 'is.god && flag.god_held_city', title: '仇神',
      text: ['氏族的孩子学的头一个人类词还是那座门的名字，第二个是你的。奈拉月 11 日，他们往河里扔断链和蘑菇，再扔一样：一个草扎的、不会死的人。'],
    },
    {
      if: 'is.immortal', title: '1530 年，那块空地',
      text: ['蓝牙死了，一百零五岁。照他的意思，尸首是在她倒下的那块空地上烧的。当年围着门板桌的人，到场的只剩你和加莱尔。她看了看你，说：又是咱们俩。'],
    },
    {
      if: 'is.immortal', title: '待收',
      text: ['奈拉特的名册上，你那一行一直空着。每年奈拉月 11 日，巷子口站着个穿红袍的。有人说是来收账的，有人说是讨饭的。他从不过来。谁也没证明过什么。'],
    },

    // ---- 庚：名册（人人都有）
    {
      title: '名册',
      text: [
        '那道军令底下，这些年添上去的名字，{?var.rites >= 6:写满了半扇门|一共没几行}。',
        { if: 'flag.korgus_rite || flag.korgus_lake', text: '科尔古斯·杜坎森。' },
        { if: '!flag.korgus_rite && !flag.korgus_lake', text: '头一行空着一格，旁边写着“杜坎森，去向见别处”。' },
        { if: 'flag.urn_buried', text: '军士长，月神之耳，有月亮的晚上。' },
        { if: 'flag.parents_buried_deep || flag.parents_carried', text: '守昔者夫妇，两个人，一块碑。' },
        { if: '!flag.brok_lives', text: '布罗克，红宝石领，铲子留给了车上。' },
        { if: 'flag.adenn_damesear || flag.adenn_rogier', text: '阿登·天枪。' },
        { if: 'flag.gurzan_buried', text: '古尔赞·熊心，归尘礼，磨了两天。' },
        { if: 'visited.end_funeral', text: '最后一行：卡斯特洛斯。底下有人添了两个字，事毕。' },
        { if: '!visited.end_funeral', text: '最后一行空着。' },
      ],
    },
  ],
};
