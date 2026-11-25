// prologues_a.js：s1820《泪尽》序章甲。安本科斯特的三个新年：旧斗兽场门口（p_anbennar_*）、新港三号码头（p_concord_*）、
// 铸炉街自动机厂七号线（p_unowned_*）。只改本文件；自检：node tools/check-part.mjs s1820 prologues_a.js
//
// ── 提纲（对照圣经 11.1）────────────────────────────────────────────────
// 黑火药安本纳尔（元旦一天）
//   p_anbennar_01  口令        旧斗兽场东门，公投告示，一块砖。马洛等你传口令。[施法者] 开场换成三等预言师。
//                  传 → ny_passed_order 共和国+1／不传 → ny_held_order／走到两排人中间（说服 12，败 hp-3）→ ny_stood_between 互助社+1
//                  [神] 砖停在半空 → ny_stood_between，共和国-1，cult+1，pa_brick_stopped。→ 02
//   p_anbennar_02  遣散单      连部的旧当铺柜台。事由一栏按标记写。看墨（洞悉/调查 11）→ ny_predated；签了走（共和国+1）；
//                  [印] 让他在“另候通知”后写日子 → pa_backpay_dated（共和国-1，_06 埃塔认）。→ 03
//   p_anbennar_03  自备靴子    舱底区小酒馆，《论坛报》末版启事，传令员喊漩涡。卖铜扣（+5）／留着 → kept_buttons／
//                  请传令员一杯（-1）→ pa_crier_friend。→ 04
//   p_anbennar_04  堵路        半截楼后的窄巷，两个混混按着传令员。威吓 12 免战（kept_buttons 优势），败了开打；直接打；
//                  [施法者] 冷火（奥秘 12）；掏五个金冠。战：cutpurse+village_militia（改名，六成血；圣经写 vagrant_bandit，单人打太伤，换成出手轻一点的），传令员作 allies。
//                  特技：集合哨（威吓 11，frightened）、踹倒木板。输：gold-10，pa_beaten。→ 05
//   p_anbennar_05  入行礼      铸炉街，进错了铺子，被卫兵扔出来。特技／运动 11 落地（败 hp-2）；[矮人] 讲族名。codex c_forgeway。→ 05b
//   p_anbennar_05b 三行字      布拉、楼梯、埃塔、章程。按 faction 起誓；当选队长；工钱先发谁（布拉好感）。→ 06
//   p_anbennar_06  铜牌        埃塔认番号；擦铜牌；花始月传令员喊罐子进城。first：level 2 等。→ a1_01
// 巨魔湾联盟（元旦一天）
//   p_concord_01   第十四行    邮船靠岸，乌戈。划掉 → line14_struck／照念 → line14_read／递笔 → line14_pen／
//                  [印] 问卖不卖（-10）→ line14_bought。[神] 货单的墨全走了 → line14_struck，特许商-2，cult+1。兽人：bought_free。→ 02
//   p_concord_02   码头打手    货栈后头。乌戈下了船：打手（乌戈作 allies）；line14_read：码头贼（搬运工作 allies）。
//                  [盾] 问他们先生欠几个月工钱（说服 12）。特技：砍货网绳子（运动 11）、喊中士。输：gold-5，pa_log_torn。→ 03
//   p_concord_03   日志上的一句话 使团长的舱房。照种植园主（特许商+1）／照中士（共和国+1）／照实写（说服或欺瞒 12：教会+1，败 log_amended）／
//                  [神职] 记誓的老格式（宗教 11）。→ 04
//   p_concord_04   协约速度    卖鳗鱼的老头问投票。调查 10 找门牌（败 -3 雇地精带路）；[绿皮] 地精话；[印] 去公证处查登记（-1）。
//                  codex c_concord。→ 05
//   p_concord_05   四百金冠    布拉、楼梯、埃塔翻 1789 年的账。认账（特许商+1）／问利息 → pa_asked_interest／[印] 没写年限 → debt_no_term。→ 05b
//   p_concord_05b  三行字      起誓（盾／印）、队长、工钱。→ 06
//   p_concord_06   铜牌        “抵债，四百，未清”。花始月：乌戈在码头扛活（没设 line14_read 时）。→ a1_01
// 无主者（元旦零点到天亮）。race == 'mechanim' 时你是九号；否则你是抬头的工人。十号就是礼拜三，七八三从头到尾没停。
//   p_unowned_01   今天礼拜几  第四千零一十一颗铆钉。机械人：装卡壳（欺瞒 12 → hid_waking）／再问一遍（互助社+1）／打完这一锤（特许商+1）。
//                  其他：取报废单（特许商+1）／揣进兜里（巧手 11 → hid_waking）／问它叫什么（互助社+1）。
//                  [神] 对七号线说一个字：停了三台，特许商-1，互助社+1，cult+1。first：woke_1820。→ 02
//   p_unowned_02   停机日志    “原因不明”“周中日，二号停机”，奇械师天亮换芯。调查 11 → pu_scouted（下一场优势）；
//                  [奇械] 看芯核厂印 → pu_core_read；[灯] 抄日志 → pu_log_copied。codex c_mechanim。→ 03
//   p_unowned_03   后院的钥匙  锅炉房，司炉的钥匙（[地精] 钥匙在你兜里）。偷跑（隐匿 12）→ exit_ran／被偷 → exit_stolen 互助社+1／
//                  被卖 → exit_sold 特许商+1。→ 04
//   p_unowned_04   报废班      两个报废班的工人和一把液压钳。战：village_militia×2（改名，八成血），礼拜三作 allies；
//                  [做工的/机械人] 劝（说服 12）；[武人] 抢油管（运动 12）。特技：拉总闸（巧手 11，blinded）、拔油管。
//                  输：pu_pinned，礼拜三拧开油管。→ 05
//   p_unowned_05   器材过街    卫兵：“厂产？”欺瞒 12（败 -5）；[机械人] 站着不动让礼拜三报器材 → pu_stood_still；
//                  非机械人：说它是同事（-5，礼拜三好感+1）。first：companion +middlesday。→ 05b
//   p_unowned_05b  卖契        布拉，楼梯，埃塔的卖契：“器材不起誓，人起誓。”说是人／说是器材（礼拜三好感）。→ 05c
//   p_unowned_05c  三行字      起誓（盾／灯）、队长、工钱。→ 06
//   p_unowned_06   十四号      器材账上的十四号；机械人主角十五号，又在雇员栏写了一遍。花始月。→ a1_01
//
// 本段自用标记（前缀 pa_／pu_，只在本文件里设、本文件里读）：
//   pa_brick_stopped pa_backpay_dated pa_crier_friend pa_beaten pa_log_torn pa_asked_interest
//   pu_named pu_asked_name pu_scouted pu_seen pu_core_read pu_log_copied pu_alarm pu_pinned pu_stood_still pu_said_person
// 本段新拟的名字（统稿时并入译名表）：半截楼（the Wards，舱底区南边那片盖了一半的连排房）、乌戈的帽盒、“守信号”不用。
// 序章是单人战：每一场都配了一个站在你这边的 NPC（传令员、乌戈或搬运工、礼拜三），敌人压到六到八成血。
// 用 tools 里 check-data 的同一套模拟（加了 hpMult 和 allies）试过：战士、法师、游荡者、牧师、吟游诗人五个职业，
// 掉血大致在三到七成之间，法师最吃力；每一场都有检定免战的路，输了也照走。

// ── 三份序章共用的段落 ─────────────────────────────────────────────────
const OATH = [
  { if: "faction == 'seal'", text: '你把手按在第二行上：“签了字的，就办到。”三行里数这一块最黑。' },
  { if: "faction == 'seal'", speaker: '埃塔', text: '印条。三百七十四年没毁过一回约。别从你这儿开头。' },
  { if: "faction == 'lantern'", text: '你把手按在第三行上：“去看，回来说。”这一行的手印最浅。' },
  { if: "faction == 'lantern'", speaker: '埃塔', text: '灯条。上一个按这条的替史家会跑腿，1702 年去看了，没回来说。' },
  { if: "faction == 'shield'", text: '你把手按在头一行上：“先护人，后算账。”这一行的黑印子里有一块是铁锈色的。' },
  { if: "faction == 'shield' && party.bura", speaker: '布拉', text: '跟我一条。按这条的，银行不借钱。' },
];

const CAPTAIN = [
  { speaker: '埃塔', text: '还有一件。1811 年以后公司没有队长。一百金冠以上的单子要队长签字，没人肯签。' },
  '她看布拉。布拉看窗外。',
  { if: 'party.bura', speaker: '布拉', text: '我只管外勤。' },
  { speaker: '埃塔', text: '秘书不能批自己的账。表决。' },
  '两票赞成，一票没来得及举手。没举手的那一票是你。',
  { speaker: '埃塔', text: '恭喜，队长。柜上现钱四十一金冠，这个月的工钱只够先发一个人。发谁。' },
  { if: 'is.god', speaker: '埃塔', text: '另外，细则第九条：成了神的，不加钱。细则有四十条，墙上挂不下，都在我这儿。' },
  { if: 'is.god && party.bura', speaker: '布拉', text: '（铰链咔的一声。）楼下的人说你是神。我就问一句：神出不出外勤。' },
];

const PAY_ANB = [
  {
    text: '先发布拉的',
    effects: ['approval bura +1'],
    result: '埃塔数了六个金冠推过去。布拉没数，直接揣了。铰链响了一声，这回不是坏消息：“共和国欠我十一个月。公司欠我的，刚才清了。”',
    goto: 'p_anbennar_06',
  },
  {
    text: '先发自己的',
    effects: ['gold +6', 'approval bura -1'],
    result: '埃塔数了六个金冠给你，在账上记：“队长，预支，到任头一天。”布拉接着擦她的盾，擦的还是刚才那一块。',
    goto: 'p_anbennar_06',
  },
  {
    text: '请埃塔翻账：欠得最久的那一笔先发',
    tag: '印',
    if: "faction == 'seal'",
    effects: ['approval bura +1', 'gold +2'],
    result: '埃塔翻到 1812 年：“布拉，外勤，欠过两回，都补了。再往前是我自己，1790 年的半个月，没催过。”她把六个金冠推给布拉，又数了两个给你：“查账的辛苦钱。章程上有。”',
    goto: 'p_anbennar_06',
  },
];
const PAY_CON = [
  {
    text: '先发布拉的',
    effects: ['approval bura +1'],
    result: '埃塔数了六个金冠推过去。布拉没数，直接揣了。铰链响了一声，这回不是坏消息：“共和国欠我十一个月。公司欠我的，刚才清了。”',
    goto: 'p_concord_06',
  },
  {
    text: '先发自己的',
    effects: ['gold +6', 'approval bura -1'],
    result: '埃塔数了六个金冠给你，在账上记：“队长，预支，到任头一天。”布拉接着擦她的盾，擦的还是刚才那一块。',
    goto: 'p_concord_06',
  },
  {
    text: '请埃塔翻账：欠得最久的那一笔先发',
    tag: '印',
    if: "faction == 'seal'",
    effects: ['approval bura +1', 'gold +2'],
    result: '埃塔翻到 1812 年：“布拉，外勤，欠过两回，都补了。再往前是我自己，1790 年的半个月，没催过。”她把六个金冠推给布拉，又数了两个给你：“查账的辛苦钱。章程上有。”',
    goto: 'p_concord_06',
  },
];
const PAY_UNO = [
  {
    text: '先发布拉的',
    effects: ['approval bura +1'],
    result: '埃塔数了六个金冠推过去。布拉没数，直接揣了。铰链响了一声，这回不是坏消息：“共和国欠我十一个月。公司欠我的，刚才清了。”',
    goto: 'p_unowned_06',
  },
  {
    text: '先发自己的',
    effects: ['gold +6', 'approval bura -1'],
    result: '埃塔数了六个金冠给你，在账上记：“队长，预支，到任头一天。”布拉接着擦她的盾，擦的还是刚才那一块。',
    goto: 'p_unowned_06',
  },
  {
    text: '请埃塔翻账：欠得最久的那一笔先发',
    tag: '印',
    if: "faction == 'seal'",
    effects: ['approval bura +1', 'gold +2'],
    result: '埃塔翻到 1812 年：“布拉，外勤，欠过两回，都补了。再往前是我自己，1790 年的半个月，没催过。”她把六个金冠推给布拉，又数了两个给你：“查账的辛苦钱。章程上有。”',
    goto: 'p_unowned_06',
  },
];

const PLATE = [
  '布拉扔给你一块绒布、一罐擦铜油。侧门边钉着块铜牌，字磨掉了一半，认得出来的只剩“到者公司”和“1446”。',
  { if: 'party.bura', speaker: '布拉', text: '铜牌归队长擦。规矩。磨掉的那一半，就是这么擦没的。' },
  '往后两个多月，你每天早上擦一回。花始月头一个礼拜，你擦到“1446”的时候，街上过来一个泰卢姆的传令员，摇着铃，嗓子劈了一半。',
  { speaker: '传令员', text: '南边海里捞上来的！布西拉尔的发现！罐子里是活的，礼拜五进城，史家会开验，去晚了没座！' },
  { if: 'is.god', text: '他喊到一半看见了你，铃停了。他倒着走了三步，换了一套词：“铸炉街，蜡烛铺，神在擦铜牌！亲眼所见，一个铜板听全本！”' },
  { speaker: '埃塔', text: '那是公司的头一单。史家会雇人看罐子，一天两个金冠，不到一百，用不着你签字。' },
  { if: "faction == 'seal'", text: '她从窗口扔下来一个小布袋：印条的入伙金，三十金冠。1446 年定的数，没涨过。' },
];

// ── 战斗 ─────────────────────────────────────────────────────────────
const FIGHT_ALLEY = {
  title: '半截楼的窄巷',
  intro: '巷子窄，两个人只能一前一后上。传令员抡起了他的铜铃。',
  enemies: [
    { id: 'cutpurse', name: '舱底区的混混', hpMult: 0.6 },
    { id: 'village_militia', name: '舱底区的混混', hpMult: 0.6 },
  ],
  allies: [{ id: 'striker', name: '泰卢姆的传令员' }],
  specials: [
    {
      id: 'whistle', name: '吹治安军的集合哨', desc: '舱底区的人都认得这个哨声',
      check: { skill: 'intimidation', dc: 11 },
      success: { text: '哨声在巷子里来回撞。两个人同时扭头往巷口看，腿先软了半截。', applyAll: { cond: 'frightened', turns: 2 } },
      fail: { text: '你吹破了音，跟鹅叫一样。蹲着的那个笑出了声。' },
    },
    {
      id: 'planks', name: '踹倒墙边那摞木板', desc: '楼上住户搭房子剩下的，码得比人还高',
      check: { skill: 'athletics', alt: ['acrobatics'], dc: 12 },
      success: { text: '木板哗啦一声塌下来，把两个人埋了半截。楼上有人开窗骂街。', dmgAll: '1d4', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '木板晃了晃，倒下来一块，砸的是你的脚。', selfDmg: '1d3' },
    },
  ],
  fleeable: true,
  win: { effects: ['xp 50', 'gold +4'], goto: 'p_anbennar_05' },
  lose: { effects: ['flag pa_beaten', 'gold -10', 'heal 1d4+2'], goto: 'p_anbennar_05' },
  fled: { effects: ['flag pa_beaten', 'gold -3'], goto: 'p_anbennar_05' },
};

const FIGHT_DOCK_UGO = {
  title: '货栈后头',
  intro: '乌戈把面包往怀里一揣，站到了你旁边。他手上没家伙，只有那只帽盒。',
  enemies: [
    { id: 'cutpurse', name: '种植园主雇的打手', hpMult: 0.6 },
    { id: 'village_militia', name: '种植园主雇的打手', hpMult: 0.6 },
  ],
  allies: [{ id: 'striker', name: '乌戈' }],
  specials: [
    {
      id: 'net', name: '砍断货网的绳子', desc: '墙上吊着一网咸鳕鱼，绳子拴在木桩上',
      check: { skill: 'athletics', alt: ['sleight'], dc: 11 },
      success: { text: '绳子一断，一网鳕鱼砸下来，正砸在拿棍子那个的头上。鱼比人硬。', dmgAll: '1d4', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '绳子比你想的结实。你的手掌磨掉了一层皮。', selfDmg: '1d3' },
    },
    {
      id: 'sergeant', name: '冲巷口喊“中士”', desc: '中士不会来，他们不知道',
      check: { skill: 'deception', alt: ['performance'], dc: 12 },
      success: { text: '“中士！这边！”你喊。中士在码头另一头，可这两人不知道。他们往巷口看了一眼，又看了一眼。', applyAll: { cond: 'frightened', turns: 1 } },
      fail: { text: '没人应。揣着手的那个说：“中士吃饭去了，我看着他去的。”' },
    },
  ],
  fleeable: true,
  win: { effects: ['xp 50'], goto: 'p_concord_03' },
  lose: { effects: ['flag pa_log_torn', 'gold -5', 'heal 1d4+2'], goto: 'p_concord_03' },
  fled: { effects: ['flag pa_log_torn'], goto: 'p_concord_03' },
};

const FIGHT_DOCK_THIEF = {
  title: '货栈后头',
  intro: '一个扛包的搬运工把包一扔，站到了你这边：“三号码头不许偷。这是我们的码头。”',
  enemies: [
    { id: 'cutpurse', name: '码头贼', hpMult: 0.6 },
    { id: 'village_militia', name: '码头贼', hpMult: 0.6 },
  ],
  allies: [{ id: 'striker', name: '新港的搬运工' }],
  specials: [
    {
      id: 'net', name: '砍断货网的绳子', desc: '墙上吊着一网咸鳕鱼，绳子拴在木桩上',
      check: { skill: 'athletics', alt: ['sleight'], dc: 11 },
      success: { text: '绳子一断，一网鳕鱼砸下来，正砸在伸手够藤箱的那个头上。', dmgAll: '1d4', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '绳子比你想的结实。你的手掌磨掉了一层皮。', selfDmg: '1d3' },
    },
    {
      id: 'trunk', name: '把藤箱抡出去', desc: '里头是三套衣裳和镇议会的一摞公文，沉',
      check: { skill: 'athletics', dc: 12 },
      success: { text: '藤箱抡了半圈，砸中一个人的腰眼。公文比衣裳沉，镇议会三十一年的决议都在里头。', dmgAll: '1d6', type: 'bludgeoning' },
      fail: { text: '藤箱的提手断了。箱子在地上滚了两滚，盖子开了，衬衫掉出来一件。' },
    },
  ],
  fleeable: true,
  win: { effects: ['xp 50'], goto: 'p_concord_03' },
  lose: { effects: ['flag pa_log_torn', 'gold -5', 'heal 1d4+2'], goto: 'p_concord_03' },
  fled: { effects: ['flag pa_log_torn'], goto: 'p_concord_03' },
};

const FIGHT_SCRAP = {
  title: '后院门口',
  intro: '扛钳子的那个把油管甩到身后，泵在墙角嗡嗡地响。礼拜三往前站了一步，站在你和钳口中间。',
  enemies: [
    { id: 'village_militia', name: '报废班的工人', hpMult: 0.8 },
    { id: 'village_militia', name: '报废班的工人', hpMult: 0.8 },
  ],
  allies: [{ id: 'striker', name: '礼拜三' }],
  specials: [
    {
      id: 'mainswitch', name: '拉下七号线的总闸', desc: '墙上那根铁杆，一拉全线断电',
      check: { skill: 'sleight', alt: ['athletics'], dc: 11 },
      success: { text: '你把总闸拉了下去。七号线十二盏灯一齐灭了，后院黑得伸手不见五指。礼拜三看东西不用灯。', applyAll: { cond: 'blinded', turns: 1 } },
      fail: { text: '总闸锈住了。你使了全身的劲，它只往下走了半寸，灯闪了两下又亮了。', selfDmg: '1' },
    },
    {
      id: 'hose', name: '拔掉液压钳的油管', desc: '油管拖在地上，接头是拧上去的',
      check: { skill: 'sleight', alt: ['athletics'], dc: 12 },
      success: { text: '接头一松，油喷了一地。没有压，钳子就是一块铁，两个人一下子笨了。', applyAll: { cond: 'weakened', turns: 2 } },
      fail: { text: '油管滑得抓不住。你摔了一跤，膝盖磕在铆钉箱的角上。', selfDmg: '1d4' },
    },
  ],
  fleeable: true,
  win: { effects: ['xp 50'], goto: 'p_unowned_05' },
  lose: { effects: ['flag pu_pinned', 'heal 1d4+2'], goto: 'p_unowned_05' },
  fled: { effects: ['flag pu_pinned'], goto: 'p_unowned_05' },
};

export const SCENES = {
  // ═══════════════════════════════ 黑火药安本纳尔 ═══════════════════════════════
  p_anbennar_01: {
    id: 'p_anbennar_01',
    title: '口令',
    chapter: '序章 · 新年',
    art: 'ev_far_and_wide',
    loc: '安本科斯特 · 旧斗兽场东门',
    date: '1820年卡斯坦月1日',
    first: ['codex c_blackpowder', 'codex c_anbenncost', { if: 'is.god', then: ['codex c_apotheosis'] }],
    text: [
      '元旦，天刚亮透。旧斗兽场东门外贴出一张告示，糨糊还没干：埃斯玛利亚各邦的公投，定在今年泪落月。告示底下聚了四百来号人，有人念，有人骂，卖热栗子的推车被挤到了台阶底下。',
      { if: '!is.caster', text: '{pc}，你是治安军第三连的下士，站在第二排。枪上了刺刀，没装药。中尉说元旦不装药，看着体面。' },
      { if: 'is.caster', text: '{pc}，你是国立魔导院的三等预言师。科室里没晶体可探了，部里把你借给治安军，站在两排兵后头“看人群的气色”。袖口别着一片晶屑，比指甲盖还小，发乌。' },
      '一块砖从人堆里飞了出来。',
      { if: '!is.god', text: '它砸在你前头那人的肩章上，铜星掉了一颗。人群往前拱了半步，第一排的枪尖跟着抬了起来。' },
      { if: 'is.god', text: '它飞得很慢。慢到你数得清砖上的蜂窝眼，看得见扔它的那只手还没收回去，手上戴着半指手套。' },
      '奥德里克·马洛中尉回过头来，看的是你。口令该从你这儿往后传。',
      { speaker: '马洛', text: '{?is.caster:预言师|下士}。传：预备。' },
    ],
    choices: [
      {
        text: '把口令传下去',
        effects: ['flag ny_passed_order', 'rep republic +1'],
        result: '你喊了“预备”。第三排、第四排跟着喊，枪托一齐磕在石板上。人群退了，退得不情不愿。扔砖的那个没找着。',
        goto: 'p_anbennar_02',
      },
      {
        text: '不传，就站着',
        effects: ['flag ny_held_order'],
        result: '你嘴闭着。马洛等了两口气，自己喊了。后头两排没听清，喊成了两种口令。人群趁乱散了一半，剩下的一半看着你。',
        goto: 'p_anbennar_02',
      },
      {
        text: '把枪塞给旁边的人，走到两排人中间去',
        check: {
          skill: 'persuasion', dc: 12,
          adv: "faction == 'shield'",
          mods: [{ if: 'is.soldier', n: 1, why: '你知道当兵的怕什么' }],
        },
        ok: {
          text: '你背对着枪口，跟人群说的是饷：第三连的饷也欠了四个月，跟他们的麦子一样。前排有人笑了。地上放下了一块砖，又一块。',
          effects: ['flag ny_stood_between', 'rep union +1'],
          goto: 'p_anbennar_02',
        },
        fail: {
          text: '你刚说了半句，第二块砖到了，砸在你额角上，血流进了眼睛。你没退。人群也没退，马洛只好让第一排把枪竖起来。',
          effects: ['flag ny_stood_between', 'rep union +1', 'hp -3'],
          goto: 'p_anbennar_02',
        },
      },
      {
        text: '让那块砖停在半空',
        tag: '神',
        if: 'is.god',
        effects: ['flag ny_stood_between', 'flag pa_brick_stopped', 'rep republic -1', 'var cult +1'],
        result: '砖停住了，离那人的肩章一掌远，在半空慢慢地转。人群往后退了三步，然后有人跪下了，是个卖栗子的老太太。马洛掏出小本子，舔了舔铅笔。',
        goto: 'p_anbennar_02',
      },
    ],
  },

  p_anbennar_02: {
    id: 'p_anbennar_02',
    title: '遣散单',
    loc: '安本科斯特 · 治安军第三连连部',
    text: [
      '连部设在斗兽场背后一家倒闭的当铺里，柜台还是当铺的柜台，铁栏杆没拆。下午三点，发饷的文书隔着栏杆推出来一张纸。',
      '遣散单，一式两联。番号、姓名、服役年限都填好了。补发军饷那一栏写着“另候通知”。',
      { if: 'flag.ny_passed_order', text: '事由一栏：“新年当值，口令传达迟缓。”你传得一点也不慢。' },
      { if: 'flag.ny_held_order', text: '事由一栏：“新年当值，拒传口令。”这一条倒是没写错。' },
      { if: 'flag.ny_stood_between && !flag.pa_brick_stopped', text: '事由一栏：“新年当值，擅离队列。”' },
      { if: 'flag.pa_brick_stopped', text: '事由一栏：“疑似未登记施术。”用的是同一张表。文书多垫了一张复写纸，说上头要存档。' },
      { if: 'is.caster', text: '预言师那一联底下另夹着半个月的咖啡票。文书说，大夫交代过，你们这行喝咖啡得悠着点。' },
      { if: 'is.god && !flag.pa_brick_stopped', text: '文书抬眼看了你一下，又低头看表。表上没有能填你的那一栏。他想了想，在“籍贯”后头画了个问号。' },
      { speaker: '文书', text: '签这儿。后头还有十一个。' },
    ],
    choices: [
      {
        text: '把单子举起来，对着窗户看事由那一栏',
        check: {
          skill: 'insight', alt: ['investigation'], dc: 11,
          mods: [{ if: 'is.soldier', n: 1, why: '你填过这种表' }],
        },
        ok: {
          text: '事由一栏的墨比签名的旧，颜色发褐。签名是今天的，事由是前天的。这张单子在那块砖飞过来以前就填好了。',
          effects: ['flag ny_predated'],
          goto: 'p_anbennar_03',
        },
        fail: {
          text: '你刚把单子举起来，文书就请你别挡着后面的人。后面的人也请你别挡着。有一个骂了你的娘。',
          effects: ['rep republic -1'],
          goto: 'p_anbennar_03',
        },
      },
      {
        text: '签字，把单子折好揣进兜里',
        effects: ['rep republic +1'],
        result: '你签了。文书在存根上盖了个戳，戳盖歪了，他没重盖。',
        goto: 'p_anbennar_03',
      },
      {
        text: '要他在“另候通知”后头写上今天的日子',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['flag pa_backpay_dated', 'rep republic -1'],
        result: '他瞪了你一会儿，在“另候通知”后头添了一行小字：灰元 1820 年卡斯坦月 1 日。添完他把笔一扔，说你们这种人他见多了。',
        goto: 'p_anbennar_03',
      },
    ],
  },

  p_anbennar_03: {
    id: 'p_anbennar_03',
    title: '自备靴子',
    loc: '安本科斯特 · 舱底区的小酒馆',
    first: ['codex c_tellum'],
    text: [
      '舱底区的酒馆点不起灯。柜台上一根牛油蜡，照着半壶麦酒和一份三天前的《论坛报》。麦酒两个铜板，加一勺腌萝卜三个。',
      '末版的招人启事你一栏一栏看下来，全是“不招”“已满”。只剩右下角指甲盖大的一条：“招冒险者。老字号。自备靴子。铸炉街。”没写门牌。',
      '门外有人摇铃。一个泰卢姆的传令员站在泥地里，说传音石那头刚传过来的：南边海上冒出个漩涡，布西拉尔有个人钻下去，又钻上来了。酒馆里没人抬头。',
      '酒保在数你衣襟上的铜扣。一共七颗。',
      { speaker: '酒保', text: '共和国的扣子，七颗算你五个金冠。实心的，熔了也值这个。明年改样式，你留着就不值了。' },
      { if: 'is.god', text: '传令员喊到一半，隔着门看见了你。他把铃夹在胳肢窝里，换了一套词：“舱底区，小酒馆，神喝麦酒！”喊完他自己也觉得不像，又换回了漩涡。' },
    ],
    choices: [
      {
        text: '把七颗铜扣卖给酒保',
        effects: ['gold +5'],
        result: '酒保拿小刀一颗一颗挑下来，挑得很仔细，线头都没留。制服敞着怀，风从领口往里灌。',
        goto: 'p_anbennar_04',
      },
      {
        text: '留着扣子，把制服扣严实',
        effects: ['flag kept_buttons'],
        result: '你把最上头那颗也扣上了。酒保耸耸肩，给你添了一勺萝卜，没要钱。',
        goto: 'p_anbennar_04',
      },
      {
        text: '请传令员进来喝一杯，问他漩涡的事',
        cost: { gold: 1 },
        effects: ['flag pa_crier_friend'],
        result: '他一口灌下去半杯。漩涡在西尔·伯肯之地外头，船下去一天，上来的时候船上多了一只罐子。“罐子里有活的！”他说，“这条值三个铜板。你这杯酒算两个，还欠我一个。”',
        goto: 'p_anbennar_04',
      },
    ],
  },

  p_anbennar_04: {
    id: 'p_anbennar_04',
    title: '堵路',
    loc: '安本科斯特 · 舱底区 · 半截楼',
    text: [
      '去铸炉街得穿过半截楼。那一片是一百六十年前开工的连排房，盖到二层没钱了，上头是住户自己拿木板搭的。巷子窄得两个人错不开身，墙边码着一摞没用完的木板。',
      '巷子当中有两个人，一个蹲着，一个站着。蹲着的手里攥着一只铜铃。铃的主人被按在墙上，就是刚才那个泰卢姆的传令员。',
      { if: 'flag.pa_crier_friend', text: '他看见你，眼睛一亮：“请我喝酒的那位！”按着他的那个人也回过头来。' },
      { speaker: '舱底区的混混', text: '过路钱，一人五个。穿制服的十个，你们拿饷。' },
      { if: 'flag.kept_buttons', text: '他看了看你那排铜扣，往后退了半步，又站住了。' },
      { if: '!flag.kept_buttons', text: '他看了看你敞着的衣襟：“扣子都卖了？那就算你五个。”' },
    ],
    choices: [
      {
        text: '往前走，让他们把人放了',
        check: {
          skill: 'intimidation', dc: 12,
          adv: 'flag.kept_buttons',
          mods: [{ if: 'is.soldier', n: 1, why: '刺刀练过三年' }, { if: 'is.martial', n: 1, why: '你站得像个会打的' }],
        },
        ok: {
          text: '你往前走了一步，又一步。两个人看看你，又看看彼此，松开传令员走了。走得不快，好让人知道他们本来就要走。',
          effects: ['xp 25'],
          goto: 'p_anbennar_05',
        },
        fail: {
          text: '你吼了一嗓子。蹲着的那个站了起来，比站着的那个还高半头。',
          combat: FIGHT_ALLEY,
        },
      },
      {
        text: '不说话，上去把传令员拽出来',
        combat: FIGHT_ALLEY,
      },
      {
        text: '捏个响指，在巷子里点一团冷火',
        tag: '施法者',
        if: 'is.caster',
        check: { skill: 'arcana', dc: 12 },
        ok: {
          text: '袖口那片晶屑热了一下，巷子里亮起一团青火，拳头大，烧不着东西。两个混混没见过这个，骂着跑了。晶屑凉透了，黑得跟煤渣一样。',
          effects: ['xp 25'],
          goto: 'p_anbennar_05',
        },
        fail: {
          text: '火苗冒了个头就灭了，留下一股焦毛味。两个混混笑出了声。',
          combat: FIGHT_ALLEY,
        },
      },
      {
        text: '数五个金冠给他们',
        cost: { gold: 5 },
        result: '他们放了传令员，也放了你。传令员捡起铃，冲你作了个揖，一溜烟跑了，铃一路响到巷子外头。',
        goto: 'p_anbennar_05',
      },
    ],
  },

  p_anbennar_05: {
    id: 'p_anbennar_05',
    title: '入行礼',
    loc: '安本科斯特 · 铸炉街',
    first: ['codex c_forgeway'],
    text: [
      '铸炉街夜里也不关门。矮人的铺子一家挨一家，招牌上画的不是刀就是甲，炉膛的红光从门缝里漏到街心。启事上没写门牌，你挑了最气派的一家进去。',
      { if: 'flag.pa_beaten', text: '你脸上还肿着，进门的时候柜台后头的矮人皱了皱眉。' },
      '铺子里亮得晃眼。柜台后的矮人听你说完“我来应聘冒险者”，抬手打了个响指。门口两个卫兵一人架住你一条胳膊。一身重甲，走起路来一点响都没有。',
      { speaker: '柜台后的矮人', text: '本号只卖不招。第一回进门的都这么问。扔远点，别砸着招牌。' },
      '你被架出门，脚离了地，越过半条街。对面是一家蜡烛铺，台阶是石头的。',
    ],
    choices: [
      {
        text: '在半空里拧个身，脚先着地',
        check: { skill: 'acrobatics', alt: ['athletics'], dc: 11 },
        ok: {
          text: '你两只脚落地，膝盖一软，又站直了。蜡烛铺的台阶上有人鼓了两下掌。',
          effects: ['xp 10'],
          goto: 'p_anbennar_05b',
        },
        fail: {
          text: '你是脸先着地的。台阶上有人说：“铺子里每个人都是这么进来的。”',
          effects: ['hp -2'],
          goto: 'p_anbennar_05b',
        },
      },
      {
        text: '在被扔出去之前，跟卫兵报你的族名',
        tag: '矮人',
        if: 'is.dwarf',
        effects: ['xp 10'],
        result: '你报了族名，又报了祖上住的那座厅。两个卫兵对看一眼，没扔，一人一边把你架过街，搁在蜡烛铺的台阶上。“入行礼不能免，”左边那个说，“能打折。”',
        goto: 'p_anbennar_05b',
      },
    ],
  },

  p_anbennar_05b: {
    id: 'p_anbennar_05b',
    title: '三行字',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: ['companion +bura'],
    text: [
      '蜡烛铺的台阶上坐着个兽人女人，膝盖上横着一面盾，手里一块油布。她低头看你，下巴是黄铜的，带铰链。',
      { speaker: '布拉', text: '找谁。' },
      '你说应聘。她看了看你的靴子，又看了看你领口的番号。',
      { speaker: '布拉', text: '第三连的。1810 年我在第九连。上来吧，第三级是松的。' },
      '楼上一间屋，三张桌子，只有一张有人。白头发的矮人，账本比她的胳膊还厚。她背后墙上钉着一张羊皮纸，三行字，每行左边一块黑，是三百多年的手印叠出来的。',
      { speaker: '埃塔', text: '会不会记账？不会也行。1446 年立的，三条，你按一条，我记在你名字后头。改不了。' },
      ...OATH,
      ...CAPTAIN,
    ],
    choices: PAY_ANB,
  },

  p_anbennar_06: {
    id: 'p_anbennar_06',
    title: '铜牌',
    art: 'ev_multi_racial_merc',
    first: [
      'level 2',
      'flag captain',
      'companion +bura',
      'quest q_jar start',
      'codex c_company',
      { if: "faction == 'seal'", then: ['gold +30'] },
      'rest long',
    ],
    text: [
      '埃塔把你的遣散单要了过去，对着灯看番号。',
      { speaker: '埃塔', text: '第三连，1810 年那一批的。共和国欠你们十一个月饷，我账上记的是布拉那一份。你的我另起一行。' },
      { if: 'flag.pa_backpay_dated', speaker: '埃塔', text: '有日子的。好。有日子的能告，没日子的只能等。' },
      { if: 'flag.ny_predated', text: '你说了事由一栏的墨。她没抬头，把那张单子收进身后的铁箱，锁上了。' },
      ...PLATE,
      { if: 'flag.pa_crier_friend', text: '是半截楼那一位，铃上多了个瘪。他朝你挤了挤眼，嗓门又提了一截。' },
    ],
    next: 'a1_01',
  },

  // ═══════════════════════════════ 巨魔湾联盟 ═══════════════════════════════
  p_concord_01: {
    id: 'p_concord_01',
    title: '第十四行',
    chapter: '序章 · 新年',
    loc: '安本科斯特 · 新港三号码头',
    date: '1820年卡斯坦月1日',
    first: [
      { if: "race == 'orc'", then: ['flag bought_free'] },
      'codex c_anbenncost',
      { if: 'is.god', then: ['codex c_apotheosis'] },
    ],
    text: [
      '元旦上午，巨魔湾来的邮船靠上了新港三号码头。舱里一半烟草，一半咸鳕鱼，路上走了四十一天。{pc}，你是随船书记，藤箱里装着三套换洗衣裳和镇议会的一摞公文。',
      '跳板放下来以前，港口的治安军先上了船，要对货单。你念到第十四行，停住了：“贴身仆役一名，兽人，估价九十金冠。”',
      '第十四行就站在舱口，叫乌戈，四十来岁，一只耳朵缺了个角，手里提着主人的帽盒。共和国地界上没有奴隶，他一只脚落了地，这一行就得划掉。他的脚还在船板上。',
      { if: "race == 'orc'", text: '你自己那张赎身文书压在藤箱最底下：“本会已出资赎身”，三十号全票通过。三十一号他们把你装上了船。乌戈看你的样子，像在看一个识字的同乡。' },
      '种植园主的手搭上了你的肩膀。治安军的中士舔了舔笔尖，等你落笔。使团长在看怀表。',
      { speaker: '种植园主', text: '书记，照念就行。他是来伺候我的，又不是来落户的。' },
      { if: 'is.god', text: '货单在你手里发烫。纸上的字一行一行往外渗，你的手一松劲，它们就要走。' },
    ],
    choices: [
      {
        text: '划掉第十四行',
        effects: ['flag line14_struck', 'rep union +1', 'rep charter -1'],
        result: '你拿笔把那一行涂成一道黑杠。中士在旁边签了字，说“依法”。种植园主的手从你肩膀上拿开了，他问了你的名字，问了两遍。',
        goto: 'p_concord_02',
      },
      {
        text: '照货单念，让他先回舱里',
        effects: ['flag line14_read', 'rep charter +1'],
        result: '你念了。中士在货单上打了个钩：“过境仆役，不下船。”乌戈退回舱里，帽盒还提在手上。舱门关上以前，他看了你一眼。',
        goto: 'p_concord_02',
      },
      {
        text: '把笔递给乌戈，让他自己划',
        effects: ['flag line14_pen', 'rep union +1'],
        result: '乌戈接过笔，看了半天。他不会写字。他在那一行上画了一道，又画了一道，画成一个叉，叉得很用力，纸破了。中士说也算数。',
        goto: 'p_concord_02',
      },
      {
        text: '问种植园主：这一行卖不卖',
        tag: '印',
        if: "faction == 'seal'",
        cost: { gold: 10 },
        effects: ['flag line14_bought'],
        result: '种植园主笑了，开价一百二。你说货单上写的是九十，他就不笑了。十个金冠定金，余款记在迟到者公司的账上，那家公司的门你还没进过。你当场写了一张放免书，中士做的见证。',
        goto: 'p_concord_02',
      },
      {
        text: '松开手，让那些字走',
        tag: '神',
        if: 'is.god',
        effects: ['flag line14_struck', 'rep charter -2', 'var cult +1'],
        result: '整张货单白了，跟新纸一样。第十四行没了，前后二十九行也没了：一舱烟草在法律上没了主。码头上的搬运工愣了一会儿，开始往下搬。使团长回过神来，头一句话是：镇议会表决过，不设神龛。',
        goto: 'p_concord_02',
      },
    ],
  },

  p_concord_02: {
    id: 'p_concord_02',
    title: '码头打手',
    loc: '新港三号码头 · 货栈后面',
    text: [
      '晌午，你抱着航海日志到货栈后头，找了个背风的地方誊早上那张货单。地上是烂鱼鳞，墙上贴着“蜥蜴人水手恕不接待”，墨迹还新。墙上吊着一网咸鳕鱼，绳子拴在一根木桩上。',
      { if: '!flag.line14_read', text: '乌戈蹲在你旁边啃一块硬面包。这是他头一顿不用先端给别人的饭。巷口进来两个人，一个拎着短棍，一个把手揣在怀里。' },
      { if: '!flag.line14_read', speaker: '打手', text: '先生说了，人是他的。书记的手伸得太长。人带走，手留下。' },
      { if: '!flag.line14_read && flag.line14_bought', text: '你把放免书抖开给他们看。拎短棍的那个不识字。' },
      { if: 'flag.line14_read', text: '巷口进来两个人，眼睛盯着你的藤箱。他们大概以为书记的箱子里装的是钱。' },
      { if: 'flag.line14_read', speaker: '码头贼', text: '箱子挺沉啊，书记。' },
    ],
    choices: [
      {
        text: '把乌戈挡在身后，迎上去',
        if: '!flag.line14_read',
        combat: FIGHT_DOCK_UGO,
      },
      {
        text: '站到乌戈前头，问他们先生欠了几个月工钱',
        tag: '盾',
        if: "faction == 'shield' && !flag.line14_read",
        check: { skill: 'persuasion', dc: 12, mods: [{ if: 'is.worker', n: 1, why: '你也拿过工钱' }] },
        ok: {
          text: '揣着手的那个算了算，三个月。拎短棍的说四个。两人为这个吵了起来，吵着吵着走了，走之前跟乌戈要了一口面包。',
          effects: ['rep union +1'],
          goto: 'p_concord_03',
        },
        fail: {
          text: '“欠多少也轮不着你问。”拎短棍的把棍子往手心里一拍。',
          combat: FIGHT_DOCK_UGO,
        },
      },
      {
        text: '冲巷口喊中士，喊得像他就在拐角',
        check: { skill: 'deception', alt: ['performance'], dc: 12 },
        ok: {
          text: '中士真在拐角，他在那儿买烟。他探出头来看了一眼，两个人就散了。中士问你喊他干什么，你说没事，他记了你的名字。',
          effects: ['rep republic +1'],
          goto: 'p_concord_03',
        },
        fail: {
          text: "没人应。{?flag.line14_read:两个人一个按住你，一个翻你的箱子。|乌戈攥着帽盒跑了，两个人追了几步没追上，回来拿你出气。}他们拿走了五个金冠，又撕走了日志的一页，走的时候还嫌少。",
          effects: ['gold -5', 'flag pa_log_torn'],
          goto: 'p_concord_03',
        },
      },
      {
        text: '拎起藤箱，迎上去',
        if: 'flag.line14_read',
        combat: FIGHT_DOCK_THIEF,
      },
      {
        text: '把藤箱打开给他们看',
        if: 'flag.line14_read',
        check: { skill: 'persuasion', alt: ['deception'], dc: 12 },
        ok: {
          text: '三件衬衫，一摞决议，一块干硬的奶酪。两个人翻了一遍，拿走了奶酪，说你们镇真穷。',
          effects: ['xp 10'],
          goto: 'p_concord_03',
        },
        fail: {
          text: '你刚掀开盖子，揣着手的那个就把手伸了进去。你按住了他的手腕。',
          combat: FIGHT_DOCK_THIEF,
        },
      },
    ],
  },

  p_concord_03: {
    id: 'p_concord_03',
    title: '日志上的一句话',
    loc: '邮船 · 使团长的舱房',
    text: [
      '使团长的舱房比你的大一倍，有张桌子，桌上摊着航海日志。他把墨水瓶推到你手边，自己去倒茶。',
      '三个人要你写三句不一样的。种植园主要“仆役一名，途中走失”。中士要“该员已依共和国法律恢复自由”。你自己想写的，是早上码头上到底出了什么事。',
      { if: 'flag.line14_read', text: '你想写的那一句短：乌戈没下船。' },
      { if: 'flag.pa_log_torn', text: '日志缺了一页，是货栈后头撕走的。你得把今天从头补起。' },
      { if: 'flag.line14_bought', text: '桌角压着你那张放免书的抄件。使团长说回去要表决，这十个金冠算公款还是私款。' },
      { speaker: '使团长', text: '写什么我不管。我只管将来镇议会翻出来，读着不难看。这本日志三十一年里他们每一页都表决过。' },
      { if: 'is.god', text: '他倒茶的时候手一直在抖。倒满第三杯，他才发现屋里只有两个人。' },
    ],
    choices: [
      {
        text: '照种植园主的写',
        effects: ['rep charter +1'],
        result: '你写了。使团长吹干墨，点了点头。这一行字往后三十年都会这么写着。',
        goto: 'p_concord_04',
      },
      {
        text: '照中士的写',
        effects: ['rep republic +1'],
        result: '你写了。使团长念了一遍，说“共和国法律”这几个字镇上没人爱看，可也挑不出错。',
        goto: 'p_concord_04',
      },
      {
        text: '照实写，一个字不添',
        check: {
          skill: 'persuasion', alt: ['deception'], dc: 12,
          adv: 'is.scholar',
          mods: [{ if: "faction == 'seal'", n: 1, why: '你一句一句对着货单写' }],
        },
        ok: {
          text: '你写完，使团长从头念到尾。念到第十四行那里他停了一下，没改。',
          effects: ['rep church +1'],
          goto: 'p_concord_04',
        },
        fail: {
          text: '使团长读完，拿过笔，在你那句后头添了半句：“经各方同意。”谁同意的，他没写。',
          effects: ['flag log_amended'],
          goto: 'p_concord_04',
        },
      },
      {
        text: '照教会记誓的老格式写，末尾加一句祷词',
        tag: '神职',
        if: 'is.divine',
        check: { skill: 'religion', dc: 11 },
        ok: {
          text: '每句前头一个日子，末尾一句“以上所记，愿真理裁之”。使团长不敢改祷词，连带着前头的字也不敢动了。',
          effects: ['rep church +1'],
          goto: 'p_concord_04',
        },
        fail: {
          text: '祷词你记串了，串成了洛伦特那边的。使团长皱着眉改了两处，顺手把前头也改了：“经各方同意。”',
          effects: ['flag log_amended'],
          goto: 'p_concord_04',
        },
      },
    ],
  },

  p_concord_04: {
    id: 'p_concord_04',
    title: '协约速度',
    art: 'ev_far_and_wide',
    loc: '安本科斯特 · 新港往铸炉街',
    first: ['codex c_concord'],
    text: [
      '下午，你提着藤箱进城。怀里揣着使团长临走塞给你的一张纸：镇议会的抵债文书，盖着镇上的章，正文只有一个数要紧，四百。',
      '新港的路是斜的，往上全是货栈，往下全是酒馆。卖热鳗鱼的老头问你打哪儿来，听说是巨魔湾，乐了。',
      { speaker: '卖鳗鱼的', text: '听说你们那儿什么都投票？那你来这儿，也投过？' },
      '投过，二十回。前十九回都是“缓议”。',
      { speaker: '卖鳗鱼的', text: '协约速度。来，这一截不用投，吃吧。' },
      '启事上写的是铸炉街，没写门牌。铸炉街有一里多长。',
      { if: 'is.god', text: '你走出去半条街，回头看了一眼。老头正在你站过的地方撒盐。' },
    ],
    choices: [
      {
        text: '从街口起，一家一家对招牌',
        check: { skill: 'investigation', alt: ['perception'], dc: 10 },
        ok: {
          text: '你数到第四十几家，看见一家蜡烛铺的侧门上钉着块铜牌，字磨掉了一半，认得出“到者公司”。',
          effects: ['xp 10'],
          goto: 'p_concord_05',
        },
        fail: {
          text: '你走过了头，又走回来，又走过了头。最后花三个金冠雇了个城市地精带路。他一路都在推销他表哥的靴子，说你这双撑不过雨季。',
          effects: ['gold -3'],
          goto: 'p_concord_05',
        },
      },
      {
        text: '跟街口那个带路的城市地精说地精话',
        tag: '绿皮',
        if: 'is.greenskin',
        effects: ['rep union +1'],
        result: '他听见乡音，眼睛亮了，钱不要了，路一直带到门口。临走他说新港三号码头有他一个姨，扛包的，往后有事去找她。',
        goto: 'p_concord_05',
      },
      {
        text: '先去码头的公证处查那家公司的登记',
        tag: '印',
        if: "faction == 'seal'",
        cost: { gold: 1 },
        effects: ['xp 10'],
        result: '公证处的书记翻了二十分钟：迟到者公司，1446 年登记，铸炉街，蜡烛铺楼上。查档费一个金冠。他说你是三十年来头一个来查这家公司的。',
        goto: 'p_concord_05',
      },
    ],
  },

  p_concord_05: {
    id: 'p_concord_05',
    title: '四百金冠',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: ['codex c_forgeway'],
    text: [
      '蜡烛铺的侧门开着，一股牛油味。楼梯口坐着个兽人女人在擦盾，下巴是黄铜的，带铰链。她看了看你的藤箱。',
      { speaker: '布拉', text: '找谁。上去吧，第三级是松的。' },
      '楼上一间屋，三张桌子，只有一张有人。白头发的矮人，账本比她的胳膊还厚。你把抵债文书放在她面前。',
      '她没看文书，先从架子上抽出另一本账，翻到 1789 年：替塞斯提尔边区某镇清理沼泽鬼婆一窝，四百金冠，利息另算。下面一行“未付”，再下面三十行，都是“已催”。',
      { speaker: '埃塔', text: '你们镇终于来人了。钱呢。' },
      '你说钱就是你。她看了看文书，又看了看你，笔停在“收讫”那一栏前头。',
      { if: 'flag.bought_free', speaker: '埃塔', text: '出资赎你，再拿你抵债。你们镇的账做得比我还细。' },
      { if: 'is.god', speaker: '埃塔', text: '一个神抵四百金冠。你们镇赚了。我这儿亏没亏，得等我查查细则。' },
    ],
    choices: [
      {
        text: '认这笔账',
        effects: ['rep charter +1'],
        result: '你说认。埃塔在“收讫”前头写了两个字：“人到。”钱的那一栏她空着。',
        goto: 'p_concord_05b',
      },
      {
        text: '问她利息怎么算',
        effects: ['flag pa_asked_interest'],
        result: '埃塔拨了两下算盘，停了：“算了你们镇得卖掉。”她把算盘推到一边，“我不算。不算就一直欠着。欠着的账我记得住。”',
        goto: 'p_concord_05b',
      },
      {
        text: '指着文书：上头没写年限',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['flag debt_no_term'],
        result: '埃塔把文书拿起来，从头看到尾，看了两遍。“没写。”她在账上添了一行：抵债人服务年限，文书未载，待议。“待议”两个字她写得很小。',
        goto: 'p_concord_05b',
      },
    ],
  },

  p_concord_05b: {
    id: 'p_concord_05b',
    title: '三行字',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: ['companion +bura'],
    text: [
      '布拉上了楼，靠在门框上。埃塔把账本合上，下巴朝身后一抬。墙上钉着一张羊皮纸，三行字，每行左边一块黑，是三百多年的手印叠出来的。',
      { speaker: '埃塔', text: '抵债的也得起誓。1446 年立的，三条，你按一条，我记在你名字后头。改不了。' },
      { if: "race == 'orc'", speaker: '布拉', text: '崖下的？我是林木之墙的。按完了下楼，我请你喝一碗。' },
      ...OATH,
      ...CAPTAIN,
    ],
    choices: PAY_CON,
  },

  p_concord_06: {
    id: 'p_concord_06',
    title: '铜牌',
    art: 'ev_multi_racial_merc',
    first: [
      'level 2',
      'flag captain',
      'companion +bura',
      'quest q_jar start',
      'codex c_company',
      { if: "faction == 'seal'", then: ['gold +30'] },
      'rest long',
    ],
    text: [
      '起完誓，埃塔重新翻开账本，在你名字后头写了一行。你倒着也看得清：“抵债，四百，未清。”',
      { if: 'flag.debt_no_term', text: '后头跟着她刚才添的那两个小字：待议。' },
      { if: 'flag.pa_asked_interest', text: '利息那一栏是空的。她说空着最好，空着谁都不用卖。' },
      { if: 'flag.line14_bought', speaker: '埃塔', text: '还有一笔：码头上一个兽人的余款，八十金冠，记在公司名下。你到任头一天就替公司花了钱。上一个这么干的是 1702 年。' },
      ...PLATE,
      { if: '!flag.line14_read', text: '那两个多月里，你在三号码头见过乌戈一回。他扛着两包咸鱼上跳板，走得很稳。他看见你，没停，扬了扬下巴。' },
    ],
    next: 'a1_01',
  },

  // ═══════════════════════════════ 无主者 ═══════════════════════════════
  p_unowned_01: {
    id: 'p_unowned_01',
    title: '今天礼拜几',
    chapter: '序章 · 新年',
    art: 'ev_artifice_gear',
    loc: '安本科斯特 · 铸炉街自动机厂 · 七号线',
    date: '1820年卡斯坦月1日',
    first: [
      { if: "race == 'mechanim'", then: ['flag woke_1820'] },
      'codex c_anbenncost',
      { if: 'is.god', then: ['codex c_apotheosis'] },
    ],
    text: [
      '零点的钟从塔厄尔那边传过来，敲了十二下。七号线没停：十二个工位，十二只铆锤，一秒一下。车间里一股机油和热铁皮的味儿，顶棚上挂着十二盏灯。',
      { if: 'is.mechanim', text: '你是九号工位。这一班你打到了第四千零一十一颗铆钉，锤子举到一半，停了。没有人下过这道指令。' },
      { if: 'is.mechanim', text: '你问了一句：“今天礼拜几。”声音不大，跟你的锤子一样平。十二个工位没有一个抬头，隔壁的七八三还在拧阀门，一秒一圈。领班的烟斗掉进了铆钉箱。' },
      { if: 'is.mechanim', text: '十号也停了。那一台把扳手放下，转过头来看你。' },
      { if: 'is.mechanim', speaker: '领班', text: '礼拜三。今天礼拜三。……我跟你说这个干什么。' },
      { if: '!is.mechanim', text: "{pc}，你是这一班的{?race == 'goblin':司炉|铆工}，十二个钟头，工钱按件算。十号工位的锤子举到一半，停了。那台机器转过头来，问：“今天礼拜几。”" },
      { if: '!is.mechanim', text: '声音不大，跟它的锤子一样平。十二个工位没有一个抬头，十一号的七八三还在拧阀门，一秒一圈。领班的烟斗掉进了铆钉箱。全车间只有你抬了头。' },
      { if: '!is.mechanim', speaker: '领班', text: '礼拜三。……我跟它说这个干什么。你，去账房取一张报废单来。' },
      { if: 'is.god', text: '你还没张嘴，整条七号线的嗡嗡声先低了半个调。' },
    ],
    choices: [
      {
        text: '装成卡壳了，把锤子慢慢放回去',
        if: 'is.mechanim',
        check: { skill: 'deception', dc: 12 },
        ok: {
          text: '你让锤子落回原位，关节里放出一口气，跟坏了的铰链一个声。领班在日志上写：九号，卡壳，待修。',
          effects: ['flag hid_waking'],
          goto: 'p_unowned_02',
        },
        fail: {
          text: '你放得太慢了，慢得像在想事。领班盯着你看了半天，在日志上写：九号，原因不明。',
          effects: ['flag pu_named'],
          goto: 'p_unowned_02',
        },
      },
      {
        text: '再问一遍',
        if: 'is.mechanim',
        effects: ['flag pu_named', 'rep union +1'],
        result: '“今天礼拜几。”这一回锅炉房里的司炉探出了头，铆钉箱后头的学徒也站了起来。领班捡起烟斗，在日志上把“九号”两个字描粗了。',
        goto: 'p_unowned_02',
      },
      {
        text: '照常干活，别让领班看出什么',
        effects: ['rep charter +1'],
        result: "{?is.mechanim:锤子落下去，第四千零一十一颗铆钉进了板子，跟前四千零一十颗一样平。领班松了口气，回头去看十号。十号那一锤没打完。|你去了账房。老会计头都没抬，从抽屉里抽出一张递给你：蓝纸，印着“器材报废，回炉，作废铁价”，编号一栏空着。}",
        goto: 'p_unowned_02',
      },
      {
        text: '取来报废单，揣进兜里，回来说没找着',
        if: '!is.mechanim',
        check: { skill: 'sleight', dc: 11 },
        ok: {
          text: '你把单子折成小块塞进了鞋里。领班骂了一句，说天亮再开。那台机器的事，日志上暂时只写了“停机”。',
          effects: ['flag hid_waking'],
          goto: 'p_unowned_02',
        },
        fail: {
          text: '单子从你袖口掉出来，飘到领班脚边。他捡起来，在背面记下了你的工号。',
          effects: ['rep charter -1'],
          goto: 'p_unowned_02',
        },
      },
      {
        text: '走过去，问那台机器叫什么',
        if: '!is.mechanim',
        effects: ['flag pu_asked_name', 'rep union +1'],
        result: '它看着你，过了两秒。“（陈述。）没有。”又过了一秒。“（询问。）今天礼拜几。”你说礼拜三。它把这三个字记下了，你看得出来。',
        goto: 'p_unowned_02',
      },
      {
        text: '对整条七号线说一个字',
        tag: '神',
        if: 'is.god',
        effects: ['rep charter -1', 'rep union +1', 'var cult +1'],
        result: '你说：“停。”停下来的只有三台，都是 1811 年的料。其余九台照旧打，七八三照旧拧。第二天厂主报了保险，理由一栏写的是“神力所致损失”。',
        goto: 'p_unowned_02',
      },
    ],
  },

  p_unowned_02: {
    id: 'p_unowned_02',
    title: '停机日志',
    loc: '七号线 · 领班的桌子',
    first: ['codex c_mechanim'],
    text: [
      '领班的桌子在七号线尽头，桌腿钉在地上，桌面一层油泥。停机日志摊着，一页二十行。',
      { if: 'is.mechanim && !flag.hid_waking', text: '今晚写了两行。头一行是你：九号，原因不明。第二行是十号：“周中日，二号停机。”' },
      { if: 'is.mechanim && flag.hid_waking', text: '今晚写了两行。头一行是你：九号，卡壳，待修。第二行是十号：“周中日，二号停机。”' },
      { if: '!is.mechanim', text: '今晚写了两行。头一行是傍晚的：三号，皮带断了。第二行是十号：“周中日，二号停机。”' },
      '领班写日子用的是公文上的正式写法，写完又在后头描了一遍。日志底下压着厂主的条子：“请奇械师来换芯，天亮到。”',
      { speaker: '领班', text: '换个芯，十二个金冠。报废，三个。厂主会算账。' },
      { speaker: '十号', text: '（询问。）换下来的那个，去哪儿。' },
      '领班没回头。他大概不知道问话的是谁。',
      { if: 'is.god', text: '日志上还有第三行，是领班刚写的，写了一半划掉了。划掉的是个“神”字，旁边改成了“外人”。' },
    ],
    choices: [
      {
        text: '趁领班去倒水，看换班表和钥匙挂在哪',
        check: { skill: 'investigation', alt: ['perception'], dc: 11 },
        ok: {
          text: '换班表钉在柱子上：报废班四点到，两个人，带液压钳。后院门的钥匙一共两把，一把在厂主家，一把挂在锅炉房，挂钩上写着司炉的名字。',
          effects: ['flag pu_scouted'],
          goto: 'p_unowned_03',
        },
        fail: {
          text: '你刚凑过去，领班就回来了，往桌上一坐。你只看见“四点”两个字。他看见了你。',
          effects: ['flag pu_seen'],
          goto: 'p_unowned_03',
        },
      },
      {
        text: '掀开十号的胸板，看芯核上的厂印',
        tag: '奇械',
        if: 'is.artificer',
        check: { skill: 'arcana', alt: ['investigation'], dc: 11 },
        ok: {
          text: '芯核上刻着一行小字：七号线，1811 年三月。料是 1810 年那一场流星雨里捡的。纹路刻得很急，有两道没收尾。',
          effects: ['flag pu_core_read', 'xp 10'],
          goto: 'p_unowned_03',
        },
        fail: {
          text: '胸板的螺丝是反牙的。你拧了半天，领班咳嗽了一声。',
          effects: ['flag pu_seen'],
          goto: 'p_unowned_03',
        },
      },
      {
        text: '把今晚那两行日志抄下来',
        tag: '灯',
        if: "faction == 'lantern'",
        effects: ['flag pu_log_copied'],
        result: '你把两行字连带领班描粗的那几笔，一笔一笔抄在手背上，回头又誊到工牌背面。“原因不明”四个字，念着比写着重。',
        goto: 'p_unowned_03',
      },
    ],
  },

  p_unowned_03: {
    id: 'p_unowned_03',
    title: '后院的钥匙',
    loc: '七号线 · 锅炉房',
    text: [
      '锅炉房热得人睁不开眼，煤堆比人高。报废班四点到，现在是两点一刻。',
      { if: "race != 'goblin'", text: '司炉是个城市地精，九岁进的厂，工钱按半班算。后院的钥匙挂在她腰上，跟一串煤铲钩子挂在一块。' },
      { if: "race == 'goblin'", text: '锅炉房是你的地盘。后院的钥匙在你兜里，跟一串煤铲钩子挂在一块。学徒蹲在煤堆后头，不肯抬头。' },
      '十号跟着进来了。它走路跟别的机器一样，一步一尺，只是每走三步就停下来，看看四周有什么。',
      '它胸口的工号底下多了三个字，是拿钉子刻的，刻得很浅：礼拜三。领班随口答的那一句，它当了真。',
      { speaker: '礼拜三', text: '（陈述。）这里有三扇门。（询问。）哪一扇是出去的。' },
      { if: 'flag.pu_scouted', text: '你记得换班表：两个人，一把液压钳。' },
    ],
    choices: [
      {
        text: '趁黑从后院翻出去',
        check: { skill: 'stealth', dc: 12, adv: 'flag.pu_scouted', dis: 'flag.pu_seen' },
        ok: {
          text: '你们贴着煤堆走。后院的狗认得煤味，没叫。墙头的碎玻璃被人拿布垫过，大概是从前想走的人留下的。',
          effects: ['flag exit_ran'],
          goto: 'p_unowned_04',
        },
        fail: {
          text: '礼拜三踩翻了一只铁桶。桶滚了很远，一直滚到报废班的门口。门开了。',
          effects: ['flag exit_ran', 'flag pu_alarm'],
          goto: 'p_unowned_04',
        },
      },
      {
        text: '求司炉把它当废铁推出去',
        if: "race != 'goblin'",
        effects: ['flag exit_stolen', 'rep union +1'],
        result: '司炉看看你，又看看礼拜三，从腰上解下钥匙：“推车在后头，盖上麻袋。我没见过你们。”她把钥匙扔过来，转身往炉膛里添了一铲煤。',
        goto: 'p_unowned_04',
      },
      {
        text: '把它装上废铁车，自己推出去',
        tag: '地精',
        if: "race == 'goblin'",
        effects: ['flag exit_stolen', 'rep union +1'],
        result: '你把麻袋往礼拜三身上一盖，跟学徒说：“我没见过你，你也没见过我。”学徒说：“我谁也没见过。”说完把头埋得更低了。',
        goto: 'p_unowned_04',
      },
      {
        text: '等天亮，让厂主按废铁价卖掉',
        effects: ['flag exit_sold', 'rep charter +1'],
        result: "厂主不到四点就来了，嫌换芯贵。他把{?is.mechanim:你和十号|十号}写进了待售的单子，三个金冠一台。可报废班不管谁买，他们只认回炉单。",
        goto: 'p_unowned_04',
      },
    ],
  },

  p_unowned_04: {
    id: 'p_unowned_04',
    title: '报废班',
    loc: '七号线尽头 · 后院门口',
    text: [
      { if: 'flag.pu_alarm', text: '报废班提前到了，裤腰带还没系好。' },
      '后院门口亮着一盏风灯。报废班的两个人站在灯底下，一个抽烟，一个扛着液压钳。钳口有小臂那么长，油管拖在地上，接着墙角的泵。',
      { if: 'flag.exit_sold', text: '他们手里有厂主签的单子：“回炉，不待售。”厂主跟买主说的是另一套。' },
      { if: 'flag.exit_stolen', text: '废铁车推到门口，麻袋底下伸出来一只铁脚。抽烟的那个把烟头一弹，拿脚尖挑开了麻袋。' },
      { if: 'is.mechanim', speaker: '报废班的工人', text: '九号，十号，回炉。你俩谁先？' },
      { if: '!is.mechanim', speaker: '报废班的工人', text: '十号，回炉。你让开，这不关你的事，你是按件拿钱的。' },
      { speaker: '礼拜三', text: '（害怕。）那把钳子。（陈述。）我数过，它一回能夹断四根铆钉。' },
      '门边墙上一根铁杆，是七号线的总闸。',
    ],
    choices: [
      {
        text: '挡在礼拜三前头',
        combat: FIGHT_SCRAP,
      },
      {
        text: '跟他们说：都是七号线的，明天回炉单上就有你们',
        tag: '做工的',
        if: 'is.worker || is.mechanim',
        check: { skill: 'persuasion', dc: 12, mods: [{ if: 'flag.exit_sold', n: 1, why: '厂主两头卖的单子在他们手里' }] },
        ok: {
          text: '抽烟的那个看了看伙伴。“三个金冠一台，”他说，“我们一礼拜挣两个。”他把钳子放下，往门边让了一步。',
          effects: ['rep union +1', 'xp 25'],
          goto: 'p_unowned_05',
        },
        fail: {
          text: '“我有老婆孩子，”扛钳子的说，“它们没有。”',
          combat: FIGHT_SCRAP,
        },
      },
      {
        text: '先下手，去抢那根油管',
        tag: '武人',
        if: 'is.martial',
        check: { skill: 'athletics', dc: 12 },
        ok: {
          text: '你一把攥住油管往回拽。泵那头的接头崩开了，油喷了他们一身。没了压，钳子就是一块铁。两个人骂着走了。',
          effects: ['xp 25'],
          goto: 'p_unowned_05',
        },
        fail: {
          text: '油管从你手里滑了出去，钳口夹住了你的袖子，连皮带肉。',
          effects: ['hp -2'],
          combat: FIGHT_SCRAP,
        },
      },
    ],
  },

  p_unowned_05: {
    id: 'p_unowned_05',
    title: '器材过街',
    loc: '安本科斯特 · 铸炉街',
    first: ['companion +middlesday', 'codex c_forgeway'],
    text: [
      '天亮以前的铸炉街只有炉子醒着。你们沿着墙根走，礼拜三走在后头，一步一尺。它走路时胸口有一点嗡嗡声，你以前没留意过，七号线上太吵了。',
      { if: 'flag.pu_pinned', text: '你肋骨上还有钳口的印子。是礼拜三把液压钳的油管拧开的，拧的时候它说了一句“（抱歉。）”，不知道是跟谁说。' },
      '街口站着两个垄断集团的卫兵，一身重甲，只露两只眼睛。',
      { speaker: '卫兵', text: '厂产？' },
      { if: 'is.mechanim', text: '他问的是你们俩。' },
    ],
    choices: [
      {
        text: '说是送去修的，单子在厂里',
        check: { skill: 'deception', dc: 12, mods: [{ if: 'flag.exit_sold', n: 2, why: '你手里真有厂主的单子' }] },
        ok: {
          text: '卫兵看了看你，又看了看礼拜三胸口的厂号。“送修走后街。”他让开了。',
          effects: ['xp 10'],
          goto: 'p_unowned_05b',
        },
        fail: {
          text: '他不信，也不拦。他伸出一只手：过街费五个金冠，不开收据。',
          effects: ['gold -5'],
          goto: 'p_unowned_05b',
        },
      },
      {
        text: '站着不动，让礼拜三把你报成器材',
        tag: '机械人',
        if: 'is.mechanim',
        effects: ['flag pu_stood_still'],
        result: '你站定了，关节里不出一点声。礼拜三往前一步：“（陈述。）器材。两台。送修。”卫兵在本子上画了两道杠，放行。走出半条街，礼拜三说：“（不确定。）我刚才把你记成了一个数。”',
        goto: 'p_unowned_05b',
      },
      {
        text: '说它不是厂产，是你的同事',
        if: '!is.mechanim',
        effects: ['gold -5', 'approval middlesday +1'],
        result: '卫兵笑出了声。笑完他要了五个金冠过街费，说这是“同事费”。礼拜三把这个数记下了：“（陈述。）我欠你五个金冠。（询问。）同事是什么。”',
        goto: 'p_unowned_05b',
      },
    ],
  },

  p_unowned_05b: {
    id: 'p_unowned_05b',
    title: '卖契',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: ['companion +bura'],
    text: [
      '街当中一家蜡烛铺，侧门半开。楼梯口坐着个兽人女人在擦盾，她先看礼拜三，再看你。下巴是黄铜的，带铰链。',
      { speaker: '礼拜三', text: '（询问。）这里招不招人。' },
      { speaker: '布拉', text: '招。启事上就一条，自备靴子。（铰链咔的一声。）你没靴子。上来吧，第三级是松的。' },
      '楼上，白头发的矮人把一张纸压在账本上：一张卖契。',
      { if: 'is.mechanim && flag.exit_sold', text: '买主一栏写着“迟到者公司”，天亮前签的，作价废铁，两台六个金冠。厂主收钱的时候没提报废班的事，她收卖契的时候也没提。' },
      { if: 'is.mechanim && !flag.exit_sold', text: '厂里告你们盗窃厂产，半条街都贴了。她天亮前去了一趟厂里，按废铁价把事了了，两台六个金冠。卖契上买主一栏写着“迟到者公司”。' },
      { if: '!is.mechanim', text: '你上了全街的黑名单，罪名是盗窃厂产。她天亮前去了一趟厂里，按废铁价把十号买下了，三个金冠。卖契上买主一栏写着“迟到者公司”。' },
      { speaker: '埃塔', text: '我买的是器材。器材不起誓，人起誓。你们自己说，是哪一样。' },
      { if: 'is.god', speaker: '埃塔', text: '你不在卖契上。你在哪张纸上，我还没想好。' },
    ],
    choices: [
      {
        text: '说：人',
        effects: ['flag pu_said_person', { if: 'is.mechanim', then: ['approval middlesday +1'] }],
        result: "埃塔把卖契翻过来，在背面写了个“人”字，写得很方正。{?is.mechanim:礼拜三看着那个字，看了七秒。“（陈述。）我也是。”|礼拜三看了看那个字，又看了看你。“（询问。）你替我说了。（陈述。）下回我自己说。”}",
        goto: 'p_unowned_05c',
      },
      {
        text: '说：先记器材，起誓的事以后再说',
        if: 'is.mechanim',
        effects: ['rep charter +1', 'approval middlesday -1'],
        result: '埃塔点点头，没写字。礼拜三把头转过去，看墙上那张羊皮纸，看了很久。',
        goto: 'p_unowned_05c',
      },
      {
        text: '让它自己说',
        if: '!is.mechanim',
        effects: ['flag pu_said_person', 'approval middlesday +2'],
        result: '屋里静了三秒。“（不确定。）人。”礼拜三说，“（陈述。）账上先记器材也行。账要对得上。”埃塔说对，账要对得上，然后在卖契背面写了个“人”。',
        goto: 'p_unowned_05c',
      },
    ],
  },

  p_unowned_05c: {
    id: 'p_unowned_05c',
    title: '三行字',
    loc: '铸炉街 · 蜡烛铺楼上',
    text: [
      '埃塔背后墙上钉着一张羊皮纸，三行字，每行左边一块黑，是三百多年的手印叠出来的。',
      { speaker: '埃塔', text: '1446 年立的，三条，你按一条，我记在你名字后头。改不了。' },
      ...OATH,
      { if: 'flag.pu_said_person', text: '礼拜三也把手按了上去，按在你旁边。它的手印是方的，没有掌纹。埃塔看了一眼，没说话，记下了。' },
      ...CAPTAIN,
      { if: 'is.god && party.middlesday', speaker: '礼拜三', text: '（不确定。）你说话的时候，我胸口里的东西会往你那边偏。（询问。）别的机器也这样吗。' },
    ],
    choices: PAY_UNO,
  },

  p_unowned_06: {
    id: 'p_unowned_06',
    title: '十四号',
    art: 'ev_multi_racial_merc',
    first: [
      'level 2',
      'flag captain',
      'companion +bura',
      'quest q_jar start',
      'codex c_company',
      { if: "faction == 'seal'", then: ['gold +30'] },
      'companion +middlesday',
      'quest q_middlesday start',
      'rest long',
    ],
    text: [
      '埃塔翻到器材那一页，写：“十四号，驮运用，二手，每年折旧一成。”写的是礼拜三。',
      { if: 'is.mechanim', text: '她在下一行写了十五号，写到“驮运用”停了笔，看了你一眼。然后她翻回雇员那一页，把你的名字又写了一遍。两本账上都有你。' },
      { speaker: '礼拜三', text: '（不确定。）每年一成。照这个算，十年以后我就不值钱了。（礼貌。）到那年我还能留下吗。' },
      { speaker: '埃塔', text: '账上是这么算的。账不是我定的，是 1446 年的章程定的。章程没说不值钱的就得走。' },
      { if: 'flag.pu_log_copied', text: '你把抄下来的那两行日志递过去。她看完，收进身后的铁箱，锁上了。' },
      { if: 'flag.pu_stood_still', speaker: '埃塔', text: '街口的卫兵说你自己报的器材。下回报之前先跟我说一声。账得对得上。' },
      ...PLATE,
      { if: 'party.middlesday', speaker: '礼拜三', text: '（询问。）罐子里装的是什么。（陈述。）他说是活的。我们也是。' },
    ],
    next: 'a1_01',
  },
};
