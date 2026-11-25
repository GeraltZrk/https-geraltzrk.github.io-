// s1444 story items (BIBLE.md §14.2). Format: docs/DATA_GUIDE.md → 物品.
// relic: true = 信物（卖不掉）; quest: true = 任务物品（卖不掉）. cairn_stone is in the core item list.
export const ITEMS = {
  // ---- 出身信物
  shield_strap: {
    id: 'shield_strap', name: '一截盾带', relic: true, value: 0,
    desc: '牛皮的，一头还连着两颗铆钉。抬她的时候从那面裂盾上崩下来的，你一直没还回去。',
  },
  moon_badge: {
    id: 'moon_badge', name: '银月徽', relic: true, value: 0,
    desc: '达梅里亚之子的徽，银的，背面刻着编号。亮出来，月党的人认，帝国的差役也认。',
  },
  bardswood_letter: {
    id: 'bardswood_letter', name: '带火漆的信', relic: true, value: 0,
    desc: '巴兹伍德先生的火漆，一只合着的眼睛。亮出来能过卡；被人从你身上搜出来，就是另一回事了。',
  },
  grudge_page: {
    id: 'grudge_page', name: '账页：玛瑙之门，1424', relic: true, value: 0,
    desc: '从兵团账本上誊下来的一页。正面一行字：玛瑙之门，灰元 1424 年，欠债者科尔古斯·杜坎森。背面是空的，可以添字。',
  },
  grudge_book: {
    id: 'grudge_book', name: '兵团的账本', relic: true, value: 0,
    desc: '四十斤，油布包着，三百一十二条。背着它的人有权当场划账。',
  },
  chain_link: {
    id: 'chain_link', name: '一节断链', relic: true, value: 0,
    desc: '一指长的铁环，断口还是新的。拴过谁，你记得。',
  },
  sergeant_urn: {
    id: 'sergeant_urn', name: '军士长的骨灰', quest: true, value: 0,
    desc: '天亮前烧的，装在达拉斯缝的袋子里，袋口缝了两道。他要埋在月神之耳，要有月亮的晚上。',
  },

  // ---- 第一幕
  sky_tally: {
    id: 'sky_tally', name: '老太太的天象簿', quest: true, value: 0,
    desc: '二十年，一天一道。每一道旁边都空着，留给银龙来的那天写字。',
  },
  bonecarver_salt: {
    id: 'bonecarver_salt', name: '一袋盐', value: 30,
    desc: '阿祖科尔拿来换尸首的价钱，粗盐，压得很实。乌什卡不让你拿它腌东西。',
  },
  sash_copy: {
    id: 'sash_copy', name: '萨什卷的抄本', quest: true, value: 0,
    desc: '抄本的抄本，古卡斯塔诺语，一半字没人认得。认得的那半句不好听。拿到会上能当证物。',
  },
  groundhawk_deed: {
    id: 'groundhawk_deed', name: '康原的地契', relic: true, value: 0,
    desc: '蓝牙盖的印，墨还有点洇。妮克西让你替她收着，她信不过自己的口袋。',
  },
  compact_copy: {
    id: 'compact_copy', name: '城约的抄本', quest: true, value: 0,
    desc: '门板桌上誊出来的，底下按着一排手印，有大有小，有一个是绿的。',
  },
  petition_book: {
    id: 'petition_book', name: '没回音的祈愿簿', relic: true, value: 0,
    desc: '阿坦庙里那本。二十年的祷告，一页两栏，左边是求的事，右边是回音。右边一栏是空的。',
  },

  // ---- 第二幕
  dagrite_shard: {
    id: 'dagrite_shard', name: '达格银碎片', value: 120,
    desc: '死铁道上撬下来的一块，摸着发麻。扔出去，一个敌人受 3d6 闪电伤害。',
    use: { target: 'enemy', dmg: '3d6', dmgType: 'lightning', outside: false },
  },
  brack_token: {
    id: 'brack_token', name: '车皮签', quest: true, value: 0,
    desc: '一块磨亮的铁片，打着铁路潜伏者的记号。拿着它，回程不再收过路费。',
  },
  rubbing_book: {
    id: 'rubbing_book', name: '守昔者的拓片本', relic: true, value: 0,
    desc: '加莱尔父母的本子，一百多页拓片，每页右下角都写着日期和两个人的缩写。',
  },
  shaft_rubbing: {
    id: 'shaft_rubbing', name: '竖井口的拓片', quest: true, value: 0,
    desc: '一张油纸，拓着精灵兵刻的值夜祷词。上面有两个名字，一个是天上的，一个是主将的。',
  },

  // ---- 第三幕
  safe_conduct: {
    id: 'safe_conduct', name: '蓝牙的路条', quest: true, value: 0,
    desc: '科琳塔尔的印，写明持条人是“随队收殓的”。在帝国境内过卡用，查得严的地方要看两遍。',
  },
  corinite_creed: {
    id: 'corinite_creed', name: '一本信条', quest: true, value: 0,
    desc: '多米尼克托你带去西边的，薄薄一本，头一页只有一句：剑与盾。',
  },
  garden_sketch: {
    id: 'garden_sketch', name: '德利安画的花园图', quest: true, value: 0,
    desc: '皇宫花园的平面图，畦按仓位编号，第七畦上画了个小圈。',
  },
  jubilee_invite: {
    id: 'jubilee_invite', name: '庆典请柬', quest: true, value: 0,
    desc: '烫金的，从一位玫瑰党公子身上摸来的。名字那一栏写得很花，看不太清，正好。',
  },
  log_copy: {
    id: 'log_copy', name: '航海志的抄页', quest: true, value: 0,
    desc: '月焰号值夜簿第四十年的那一页，连着神殿的方位。字是连夜抄的，有几处洇了。',
  },
  digger_oath: {
    id: 'digger_oath', name: '按了手印的口供', quest: true, value: 0,
    desc: '那晚他在门外。抬出来三具，其中一具是烧死的。底下一个手印，按得很重。',
  },
  wound_cast: {
    id: 'wound_cast', name: '伤口的蜡模', quest: true, value: 0,
    desc: '一块黄蜡，翻出来的是个窄口子。从后往前。',
  },
  clan_charter: {
    id: 'clan_charter', name: '盖了帝国印的氏族特许', relic: true, value: 0,
    desc: '巴兹伍德的字，写得又小又密。东坎诺的氏族凭它可以在帝国的地界上买卖、过卡、打官司。',
  },
  aldresian_blade: {
    id: 'aldresian_blade', name: '阿德蕾西娅的练习剑', value: 400,
    desc: '阿德蕾西娅堡里比试赢来的长剑，剑身上刻着练剑用的咒文。命中和伤害 +1，可以当施法的法器。',
    weapon: { dmg: '1d8', type: 'slashing', props: ['versatile', 'casting'], bonus: 1 },
  },
  delian_letter: {
    id: 'delian_letter', name: '写给死人的一封信', relic: true, value: 0,
    desc: '德利安的字，收信人是阿登。封口没拆过。',
  },

  // ---- 第四幕
  cold_iron_nails: {
    id: 'cold_iron_nails', name: '冷铁钉', value: 80,
    desc: '一把没淬过火的铁钉，妖精闻见就躲。撒出去，至多三个敌人做敏捷豁免，失败受 3d6 伤害并迟缓一轮，成功减半。',
    use: { target: 'enemies', maxTargets: 3, save: { abil: 'dex', half: true }, dcAbil: 'dex', dmg: '3d6', dmgType: 'piercing', apply: { cond: 'slowed', turns: 1 }, outside: false },
  },
  arun_notes: {
    id: 'arun_notes', name: '阿鲁恩的笔记', quest: true, value: 0,
    desc: '木精灵的树皮纸，一捆，用草绳扎着。里头写着帷幕是为了挡什么才立起来的。',
  },
  fey_token: {
    id: 'fey_token', name: '愚者宫里的一枚扣子', relic: true, value: 0, slot: 'trinket',
    desc: '一枚木扣子，正面刻着一张笑脸，翻过来还是笑脸。戴着它，豁免检定 +1。出了林子它会变成一颗橡子。',
    passives: { saveBonus: 1 },
  },
  kwineh_salve: {
    id: 'kwineh_salve', name: '血树脂膏', value: 75,
    desc: '血林里的树渗出来的红树脂，熬成膏，闻着像铁锈。抹上恢复 4d4+4 点生命，并解除中毒。',
    use: { target: 'ally', heal: '4d4+4', cleanse: ['poisoned'], outside: true },
  },
  mural_rubbing: {
    id: 'mural_rubbing', name: '壁画的拓片', relic: true, value: 0,
    desc: '最后一幅，拓了四张纸才拓全。一手持杖，一臂齐腕而断，底下两个字。',
  },
  broken_scepter: {
    id: 'broken_scepter', name: '断权杖', relic: true, value: 0,
    desc: '六尺白石，杖头的宝石碎了，上面还留着一道防护术的余劲。握久了手会麻。太长，没法拿来打仗。',
  },
  // ---- 同伴的装备
  blade_and_hammer: {
    id: 'blade_and_hammer', name: '刀与锤', value: 0, relic: true,
    desc: '烂刀氏族人人随身的一对家什：一把剔骨的短刀，一把磨骨的锤。乌什卡用它们做归尘礼，也用它们打仗。',
    weapon: { dmg: '1d8', type: 'bludgeoning', props: ['versatile'], bonus: 1 },
  },
  procession_head: {
    id: 'procession_head', name: '游行用的权杖头', value: 0, relic: true,
    desc: '一截铜包木的权杖头，原本插在游行的长杆上，杆子早丢了。阿坦拿它当圣徽，也拿它敲人。',
    weapon: { dmg: '1d6', type: 'bludgeoning', props: ['casting'] },
  },
};
