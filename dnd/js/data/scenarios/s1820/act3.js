// act3.js：s1820《泪尽》第三幕 · 货单（圣经 §11.4、§12.5、§16.2、§16.3）。1828 年银现月至泪落月，6 级 → 8 级。
// 只改本文件；自检：node tools/check-part.mjs s1820 act3.js
//
// ── 提纲（谁在场 / 改什么 / 去哪）──────────────────────────────────────────
// a3_01  报纸摘要二   铸炉街账房，五年剪报（读 line_* hoard_* rite_given plates_* blood_* oto_exposed report2_* backpay_suit
//                     guilhem_stayed）。first：tears −1 dove −1 doors +1。唯一选择：魂秤专利 gauge_open／_sold／_burned。
//                     [不死] 埃塔撕页、布拉要一个数、夜间恩主的名片。→ 02
// a3_02  病榻         阿兰蒂尔塔。贝尔纳二世、伊莲、灰磨的信。洞悉／宗教 14 → bernal_confided。[神] 面相三答。
//                     埃塔电报：种植园的合同签了。quest q_bill／q_phrase start。→ 03
// a3_03  一件活，两份合同  伊索贝尔港海关。说服／欺瞒 14（[印] 保税单；bought_free 赎身契；[机械人] 填“用途：本人”）。
//                     败：−100 金冠，a3x_escorted。→ 03b
// a3_03b 炸鱼         安德克利夫夜访，布拉拿他的姓开一回玩笑。渡口单子／说已签约／要船钱。→ 04
// a3_04  商栈（枢纽）  卡尔希尔商栈后院。商店、长休。埃塔→04m（m_member 表决）；蒂尔妲（a3x_tilda_calibrated）；
//                     布拉擦枪；娜尔雯回信；别摇的灯（a3x_jar_light）；乌戈（ugo_papers → a3x_met_ugo）；
//                     [卡尔希尔] karshyr_message；[巨魔湾] cousin_tip。→ 05
// a3_04m 十四号       器材栏划不划。→ 04
// a3_05  镇议会       塞斯提尔边区。说服 15 → town_shelters。[巨魔湾] 先领进谷仓 → town_vote_skipped。→ 06
// a3_06  第二道菜底下  戴纽奇的晚宴。洞悉 15 → dainuich_noticed；察觉 14 → a3x_counted（败 a3x_alarm）；[贵族] a3x_engine_hint。
//                     签收（planter_list_signed）／去看机器（a3x_invited）／揣走。[神] 红衣收割者归不归您管；[不死] reaper_file。→ 07
// a3_07  轧棉机报人名  轧棉房。十一号背名字；内莉、老科尔、阿萨、霍布、马蒂。隐匿 14 党（败 a3x_alarm）；奥秘／调查 14 → cores_1810。
//                     [无主者]×2、[机械人]、[绿皮]。接托比（a3x_toby）。→ 08
// a3_08  团务会：两份合同  无解的抉择。contract_planters／_line／_fraud；[印] 合同自始无效；[盾] 布拉押欠饷；表决。→ 09
// a3_09  布拉的枪     bura_alone／_armed／_line（[盾] 或好感 ≥ 6，说服 15，败了回到本场）。→ 10
// a3_10  河堤         追奴队。[伪造] 欺瞒 16；[武人] 推木栅；a3x_counted 摸哨；乌戈的渡口（a3x_ford）。
//                     [神] 谁也不许过 → levee_sanctuary → 10s。contract_planters → 10p。→ 10b
// a3_10b 堤上（战斗） 按人数分档；a3x_light 减一档；礼拜三或机械人主角时可叫九台机器上堤（allies）。输 → levee_lost。→ 11
// a3_10p 劫囚（战斗） 你在追奴队这边。赢 → levee_recovered；输 → 人跑了，钱照付一半。→ 11
// a3_10s 庇护所       神格分支的余波。→ 11
// a3_11  不烧煤的机房  灰磨领参观。quest q_engine start。[奇械] 倒过来的秤。→ 11b
// a3_11b—11e 夜里偷账  隐匿 15（[小个子] 通风道）、巧手 15 或硬撬、调查 14；过两关 → engine_ledger partner_engine_share。
//                     过不了两关：半本账，体质豁免 13。→ 12
// a3_12  真理之路     first：level 7。背锅的地精。求生 14 过河。→ 12b
// a3_12b 朝圣客栈     问答（宗教 13，short rest）；[神职] 带晚祷；运动 14 崖路。→ 13
// a3_13  四根柱子     台座还在响。三种读法当场吵。察觉 14 拓片；奥秘 15（[施法者] 定住那个音）。[神] 换调、礼拜三问你造过我们吗。
//                     [机械人] 多听半个音。→ 13b
// a3_13b 披风卫       交笔记（巧手 14 藏一份）／娜尔雯压资历／动手（cloakmen_fought）。→ 14
// a3_14  两个词       娜尔雯的抉择。phrase_published／_sold（两家）／_kept／_signed（[灯] 或好感 ≥ 5）。rector_*。→ 15
// a3_15  证词         礼拜三的抉择。上秤（奥秘 16 党）／不许去／[无主者·机械人] 自己上／[神] 按住口子。→ 15b
// a3_15b 裁定         ruling_cores／_both（[印] 门槛降一）／engine_licensed；[灯] 当庭念账。→ 16
// a3_16  机房起火     战斗 noAwe，按人数分档。拔调速器、放汽、念编号（warpattern_spared）、抢芯核（cores_saved）。→ 17
// a3_17  洇河口       数人（读 levee_* town_shelters bura_* contract_planters a3x_toby）。说服 16 → ynns_free_soil。
//                     [洛伦特] 林卫上将：回绝／交两个／拿别针唬他。quest q_bill done。→ 18
// a3_18  穿好料子的客人  瓦伦盖尔特。partner_known。历史 15、洞悉 15。两人读出两个意思。[神] 两个节换你不显灵。→ 19
// a3_19  第三份报告   report3_full／_edited／_lie；鱼馆问好（report3_named_bronze）；另抄一份（按出身）。→ 20
// a3_20  数流星       first：level 8。照 tears 报数。不在的人留下的东西。[神] 别摇那一句。→ a4_01
//
// 本段自用标记（前缀 a3x_，只在本文件里设、本文件里读）：
//   a3x_bernal_asked a3x_greymill_letter a3x_ferrylist a3x_escorted a3x_member_no a3x_tilda_calibrated a3x_jar_light
//   a3x_met_ugo a3x_counted a3x_alarm a3x_engine_hint a3x_invited a3x_toby a3x_light a3x_ford a3x_seen a3x_decoded
//   a3x_zerat a3x_festivals a3x_fest_no a3x_glade_done a3x_home_done a3x_void a3x_god_answered
//   计数器 var.a3x_pass（偷账过了几关）
//
// 清单上有名字的人（统稿时并入译名表，崖下兽人照巨魔湾的叫法起英文名）：
//   内莉（Nelly）厨娘，儿子托比（Toby）九岁，在隔壁庄园；老科尔（Old Cole）六十一岁，不走，留下给追的人指错路；
//   阿萨（Asa）撑过船，认得洇河口前头的渡口；霍布（Hob）脚踝被镣磨烂，走不快；马蒂（Matty）十四岁，会数数，
//   替机器把编号记在鞋底。九台轧棉机械人编号七到十五，十一号背名字，屋里的人叫它“念经的”。
//
// 与圣经的出入（照正史和 codex.js）：碎片当年悬在台座上方，两样没挨着（§11.4 只说“空台座”）；a3_12 的同路人照圣经写地精。
// 战斗按五人满编调过强度（check-data 实测），三人以下用 hpMult 减血，见各 ENC 常量。

// ── 河堤：追奴队（6 级）。T5 五人掉血约 36%，T4 四人约 41%，T3 三人约 47%，T2 两人约 46%。
const LEVEE_SPECIALS = [
  { id: 'sluice', name: '开水闸', desc: '把堤上的闸门摇开，让河水灌进他们那半边',
    check: { skill: 'athletics', dc: 14, party: true },
    success: { text: '闸门的铁轮转了半圈就卡住了，再一推，河水整片翻上来。马站不住，人也站不住，对面那半边堤成了一条沟。', dmgAll: '3d6', end: 'win' },
    fail: { text: '铁轮锈死了。你推得手心起泡，它只往下滴了几滴水。', selfDmg: '1d6' } },
  { id: 'narrow', name: '堵住最窄的那一段', desc: '堤顶只容两匹马并排，有一段只容一匹',
    check: { skill: 'athletics', alt: ['intimidation'], dc: 15 },
    success: { text: '你站到最窄的那一段上，后面的马挤成一团，前面的人退不回去。', applyAll: { cond: 'restrained', turns: 1 } },
    fail: { text: '马比你想的高。你被撞下了堤坡，滚了两圈才停住。', selfDmg: '1d8' } },
  { id: 'lantern', name: '打翻防风灯', desc: '那盏灯挂在柳树上，狗认气味，人认灯',
    check: { skill: 'sleight', alt: ['acrobatics'], dc: 13 },
    success: { text: '灯掉进了芦苇里。追奴队的人看不见，狗还在叫，叫的方向全不对。', applyAll: { cond: 'blinded', turns: 1 } },
    fail: { text: '灯晃了两下没掉。领头的人顺着你扔的石头，看见了你。' } },
];
const LEVEE_BASE = {
  title: '河堤',
  intro: '防风灯挂在柳树上，照着堤顶一小块地方。狗先扑了上来。',
  noAwe: false,
  specials: LEVEE_SPECIALS,
  fleeable: true,
  win: { effects: ['rep union +1'], goto: 'a3_11' },
  lose: { effects: [{ if: 'flag.a3x_ford', then: ['hp -6'], else: ['flag levee_lost', 'unflag levee_recovered', 'world chains +1'] }], goto: 'a3_11' },
  reward: ['item +healing_potion 2', 'gold +60'],
};
const T5 = [{ id: 'catcher_captain' }, { id: 'makata_ganger', n: 3, name: '追奴队的打手' }, { id: 'catch_hound', n: 3 }, { id: 'dragoon', n: 2, name: '骑马的追奴' }];
const T4 = [{ id: 'catcher_captain' }, { id: 'makata_ganger', n: 2, name: '追奴队的打手' }, { id: 'catch_hound', n: 3 }, { id: 'dragoon', name: '骑马的追奴' }];
const T3 = [{ id: 'catcher_captain' }, { id: 'makata_ganger', name: '追奴队的打手' }, { id: 'catch_hound', n: 2 }];
const T2 = [{ id: 'catcher_captain' }, { id: 'catch_hound', n: 2 }];
const T1 = [{ id: 'catcher_captain', hpMult: 0.55 }, { id: 'catch_hound' }];
const GIN_ALLIES = [{ id: 'striker', n: 2, name: '轧棉机械人' }];

// ── 劫囚：你在追奴队这边（6 级）。五人约 36%，四人约 33%，三人约 30%，两人约 50%。
const RESCUE_BASE = {
  title: '劫囚',
  intro: '芦苇里站起来七八个人。打头的那个把半边遮着的灯放在地上，抽出了刀。',
  specials: [
    { id: 'reeds', name: '点着芦苇', desc: '风往河那边吹',
      check: { skill: 'survival', alt: ['nature'], dc: 14 },
      success: { text: '芦苇烧起来，烟往河上卷。对面的人一边咳一边往后退。', dmgAll: '2d6', type: 'fire' },
      fail: { text: '芦苇是湿的。火苗冒了一下就灭了，烟全扑在你脸上。', selfDmg: '1d4' } },
    { id: 'shout', name: '喊出悬赏单上的价钱', desc: '让他们知道追奴队按人头领钱，死的不值钱',
      check: { skill: 'intimidation', alt: ['persuasion'], dc: 15 },
      success: { text: '你把价钱喊了一遍。对面有两个人停了手，他们听懂了：追奴队不想打死人，他们可以不死。', applyAll: { cond: 'dazed', turns: 1 } },
      fail: { text: '对面有人回了一句：“那你值多少？”' } },
  ],
  fleeable: true,
  win: { effects: ['flag levee_recovered', 'unflag levee_lost', 'world chains +1', 'rep charter +1'], goto: 'a3_11' },
  lose: { effects: ['world chains -1', 'gold +150'], goto: 'a3_11' },
};
const R5 = [{ id: 'rival_blade', n: 3, name: '暗线的刀手' }, { id: 'rival_mage', n: 2, name: '暗线的法师' }, { id: 'war_priest', name: '科琳教的随军修士' }, { id: 'revolutionary', n: 3, name: '暗线的人' }];
const R4 = [{ id: 'rival_blade', n: 3, name: '暗线的刀手' }, { id: 'rival_mage', name: '暗线的法师' }, { id: 'war_priest', name: '科琳教的随军修士' }, { id: 'revolutionary', n: 2, name: '暗线的人' }];
const R3 = [{ id: 'rival_blade', n: 2, name: '暗线的刀手' }, { id: 'rival_mage', name: '暗线的法师' }, { id: 'revolutionary', n: 2, name: '暗线的人' }];
const R2 = [{ id: 'rival_blade', name: '暗线的刀手' }, { id: 'rival_mage', name: '暗线的法师' }, { id: 'revolutionary', name: '暗线的人' }];

// ── 密室：披风卫（7 级）。五人约 35%，四人约 30%，三人约 30%，两人约 31%。
const CLOAK_BASE = {
  title: '四根柱子底下',
  intro: '披风卫把剑抽出来的时候，剑身上的咒文亮了一下，台座跟着高了半个音。',
  specials: [
    { id: 'pillar', name: '敲一根柱子', desc: '柱子是空心的，敲一下，整间屋子都响',
      check: { skill: 'athletics', dc: 14, party: true },
      success: { text: '柱子响了。声音在屋里绕了三圈，每个人的耳朵里都是那个音。', applyAll: { cond: 'dazed', turns: 1 } },
      fail: { text: '柱子没响，响的是你的手腕。', selfDmg: '1d6' } },
    { id: 'stairs', name: '踹倒台阶上的灯架', desc: '他们是从四十一级台阶上下来的',
      check: { skill: 'acrobatics', alt: ['athletics'], dc: 13 },
      success: { text: '灯架滚下台阶，油泼了一路。后面下来的人踩上去，滑倒了两个。', dmgAll: '2d6', type: 'fire' },
      fail: { text: '灯架倒向了你这边。' , selfDmg: '1d6', type: 'fire' } },
  ],
  fleeable: true,
  win: { effects: ['rep church -1'], goto: 'a3_14' },
  lose: { effects: ['item -phrase_record'], goto: 'a3_14' },
};
const C5 = [{ id: 'cloakman', n: 4 }, { id: 'war_priest', name: '分形修会的修士' }, { id: 'war_mage', n: 2, name: '分形修会的施法者' }];
const C4 = [{ id: 'cloakman', n: 4 }, { id: 'war_priest', name: '分形修会的修士' }, { id: 'war_mage', name: '分形修会的施法者' }];
const C3 = [{ id: 'cloakman', n: 3 }, { id: 'war_mage', name: '分形修会的施法者' }];
const C2 = [{ id: 'cloakman' }, { id: 'war_mage', name: '分形修会的施法者', hpMult: 0.6 }];

// ── 机房起火（7 级，noAwe）。五人约 54%，四人约 49%，三人约 50%，两人约 50%，一个人约 35%（伤得重，但打得赢）。
const FIRE_BASE = {
  title: '炉门',
  intro: '四条胳膊一起抬了起来。它胸口那颗芯核叫了一声，十二颗跟着叫。',
  noAwe: true,
  specials: [
    { id: 'governor', name: '拔掉调速器', desc: '它背上有一根铜杆，连着炉子',
      check: { skill: 'sleight', alt: ['athletics'], dc: 15, party: true },
      success: { text: '铜杆拔了出来，带出一串火星。四条胳膊同时停在半空。', applyAll: { cond: 'stunned', turns: 1 } },
      fail: { text: '铜杆烫手。你松开的时候，掌心留下了一道印子。', selfDmg: '1d8', type: 'fire' } },
    { id: 'steam', name: '放锅炉的汽', desc: '锅炉上有三个阀门，一个是放汽的',
      check: { skill: 'athletics', alt: ['investigation'], dc: 14 },
      success: { text: '白汽从炉膛边上喷出来，整排扫过去。', dmgAll: '3d6', type: 'fire' },
      fail: { text: '你拧开的那个阀门是进水的。地上多了一摊水，别的什么也没变。' } },
    { id: 'number', name: '念出它的编号，问它今天礼拜几', desc: '它胸口铜牌上的编号还看得清',
      check: { skill: 'persuasion', alt: ['insight'], dc: 16, adv: 'party.middlesday || is.mechanim' },
      success: { text: '它的四条胳膊慢慢放了下来。“礼拜三。”它说。那天是礼拜四，没人纠正它。', effects: ['flag warpattern_spared'], end: 'win' },
      fail: { text: '它听见了编号，没听见后半句。胸口那颗叫得更响了。' } },
    { id: 'cores', name: '把炉膛里那十二颗抢出来', desc: '炉膛的门开着一条缝',
      check: { skill: 'athletics', dc: 15, party: true },
      success: { text: '十二颗，一颗一颗夹出来，放进一只铁皮桶。桶底垫了一件外套，外套烧了个洞。', effects: ['flag cores_saved', 'world chains -1'] },
      fail: { text: '炉膛口的火舌卷了出来。你缩回手，手套没了。', selfDmg: '2d6', type: 'fire' } },
  ],
  fleeable: false,
  win: { effects: [{ if: 'flag.engine_licensed', then: [], else: ['flag engine_burned'] }, 'quest q_engine done', 'rest short'], goto: 'a3_17' },
  lose: { effects: ['flag engine_burned', { if: 'flag.cores_saved', then: ['unflag cores_saved', 'world chains +1'] }, 'quest q_engine done', 'rest short'], goto: 'a3_17' },
};
const F5 = [{ id: 'war_pattern_screamer' }, { id: 'artificer_engineer', name: '财团的奇械师' }, { id: 'secret_police', name: '特殊案件预防局的人' }];
const F4 = [{ id: 'war_pattern_screamer', hpMult: 0.7 }, { id: 'secret_police', name: '特殊案件预防局的人' }];
const F3 = [{ id: 'war_pattern_screamer', hpMult: 0.5 }, { id: 'secret_police', name: '特殊案件预防局的人' }];
const F2 = [{ id: 'war_pattern_screamer', hpMult: 0.3 }];
const F1 = [{ id: 'war_pattern_screamer', hpMult: 0.15 }];

export const SCENES = {
  a3_01: {
    id: 'a3_01',
    title: '报纸摘要二',
    chapter: '第三幕 · 货单',
    art: 'ev_castellos_is_dead',
    loc: '安本科斯特 · 铸炉街',
    date: '1828年银现月',
    text: [
      '埃塔把五年的剪报钉在了账房的墙上，一条一枚图钉。图钉论斤买，她嫌贵，一条只钉一个角。楼下的蜡烛铺换了招牌，字还是那几个字，漆新了。',
      { if: 'flag.line_castonath', text: '《泰卢姆时报》，1825 年：卡斯托纳斯通了煤气灯。八座塔，租出去三座，租客里有一家卖帽子的。', cls: 'letter' },
      { if: 'flag.line_ancardia', text: '《斗兽场哨兵报》，1825 年：安卡迪亚的兵车开进了卡斯托纳斯，车头挂着阿斯拉银行的旗。东坎诺是坐着兵车统一的。', cls: 'letter' },
      { if: 'flag.line_none', text: '《安本科斯特论坛报》，1824 年：阿斯拉银行停兑三天。门口排队的人里，有两个是公司的老主顾。', cls: 'letter' },
      { if: 'flag.hoard_sealed', text: '同一年，魔法领地的窖藏上了三道印，钥匙分给了三家。', cls: 'letter' },
      { if: 'flag.hoard_milled', text: '同一年，窖藏磨成了子弹。军需处的收条上写着“旧料再用”。', cls: 'letter' },
      { if: 'flag.rite_given', text: '伊萨受了礼。王家巫师的名册上，空席从六个变成了五个。', cls: 'letter' },
      { if: '!flag.rite_given', text: '伊萨没受礼。王家巫师的名册上，空席还是六个。', cls: 'letter' },
      { if: 'flag.plates_printed', text: '德鲁兹纳的底片印成了一本小册子，四个铜子一本，退回来的比卖出去的多。', cls: 'letter' },
      { if: 'flag.plates_sold', text: '底片归了银团。银团的年报里没有一个字提到彗星。', cls: 'letter' },
      { if: 'flag.box_plates', text: '底片还在埃塔的铁箱里，压在 1789 年那张欠条底下。', cls: 'letter' },
      { if: 'flag.blood_published', text: '血账见了报。东坎诺两国互相抗议，两封抗议书写得一样长。', cls: 'letter' },
      { if: 'flag.blood_sold', text: '血账卖了出去。买主没留姓名，付的是汇票。', cls: 'letter' },
      { if: 'flag.blood_burned', text: '血账烧了。埃塔在账上记的是：纸，一册，自然损耗。', cls: 'letter' },
      { if: 'flag.blood_reported', text: '血账交了上去。上头回了一封信，两个字：已阅。', cls: 'letter' },
      { if: 'flag.box_blood', text: '血账在铁箱里，和底片挨着。', cls: 'letter' },
      { if: 'flag.oto_exposed', text: '莫雷塞德的奥托调去管马料了。听说他嫌马吃得多。', cls: 'letter' },
      { text: '合伙人入了血的股，十一个月后又撤了。{?flag.report2_full:他撤得比别的股东早一个月。|}', cls: 'letter' },
      { text: '《洛伦特日报》：洛伦特在境内禁了寇拉希。社论只有一句话：洛伦泰内有人会算账。', cls: 'letter' },
      { text: '《加韦顿观察》，去年冬天：布西拉尔以外，头一回有人自己试出了一个频率。报上没说是谁，配了一张很糊的照片。', cls: 'letter' },
      { if: 'flag.backpay_suit', text: '欠饷的官司判了，给一半。布拉把判词裱了起来，挂在床头，比她那张科琳像大一圈。', cls: 'letter' },
      { if: 'flag.guilhem_stayed', text: '还有吉列姆一封信。信纸上印着塔的徽记，正文三页，两页在讲学生的作业。', cls: 'letter' },
      { speaker: '埃塔', text: '血的股，他入了十一个月。代理人的原话：嫌浅。这两个字我记在“备注”那一栏了。' },
      { if: 'party.guilhem', text: '吉列姆的头发全灰了。他说是咖啡的事，大夫说不是。' },
      { if: 'is.immortal', text: '埃塔又把你的养老金算了一遍。算完，她把那一页撕下来，团成一团，扔进了炉子。' },
      { if: 'is.immortal && party.bura', speaker: '布拉', text: '一百年以后，你还记不记得我叫什么。（铰链咔的一声。）别说记得。给我个数。' },
      { if: 'is.immortal', text: '同一个礼拜，信箱里多了一张名片。维文帝国的某位“夜间恩主”，没有地址，背面一行字：幸会，同道。' },
      '最底下压着蒂尔妲的信，邮戳是加韦顿的。卡拉桑尼出价买魂秤的专利，八百金冠。图纸上要公司副署，因为秤是拿公司的十四号器材校准的。',
      { speaker: '蒂尔妲（信）', text: '签不签？汇票不等人（我也不等（我在等另一张汇票））。第三页有我的签名，第四页给你们留了地方。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）十四号器材就是我。（礼貌。）他们要买的那杆秤，量过我三回。' },
    ],
    first: [
      'world tears -1',
      'world dove -1',
      'world doors +1',
      { if: 'is.god', then: ['codex c_apotheosis'] },
    ],
    choices: [
      {
        text: '把图纸送去专利局公开备案，谁都能抄',
        effects: ['flag gauge_open', 'unflag gauge_sold', 'unflag gauge_burned', 'world press +1', 'rep union +1'],
        result: '专利局的书记员问了三遍，“谁都能抄”是不是写错了。没写错。第二个月，铸炉街就有人照着图纸做了一杆。',
        goto: 'a3_02',
      },
      {
        text: '副署，卖给卡拉桑尼',
        effects: ['flag gauge_sold', 'unflag gauge_open', 'unflag gauge_burned', 'gold +800', 'rep charter +2', 'world chains +1', 'approval middlesday -2'],
        result: '汇票第二天就兑了。礼拜三在器材账上自己那一行旁边，用铅笔添了一个价钱。',
        goto: 'a3_02',
      },
      {
        text: '把图纸烧了',
        effects: ['flag gauge_burned', 'unflag gauge_open', 'unflag gauge_sold', 'approval middlesday +1'],
        result: '图纸在炉子里卷了边才着。蒂尔妲的回信只有一句：秤我脑子里还有一杆，下一杆不叫秤。',
        goto: 'a3_02',
      },
    ],
  },

  a3_02: {
    id: 'a3_02',
    title: '病榻',
    art: 'ev_piety',
    loc: '阿兰蒂尔塔 · 总院长的卧房',
    text: [
      '总院长的卧房在三楼，窗户朝着月河。贝尔纳二世躺在一张窄床上，被子盖到胸口。床头柜上一杯水，一本没合上的祈祷书。他当了二十七年总院长，屋里没有一样金的东西。',
      '床边站着真言师伊莲·西纳·阿尔科，手里一本小册子，老人每喘一口气她记一笔。文森顿的灰磨大监院没来，来的是他一封信，十一页，搁在水杯旁边，还没拆。',
      { if: 'party.narwen', speaker: '娜尔雯', text: '上回我进这间屋，是 1666 年。那回屋里的人站着，第二天就走了，没带伞。' },
      { speaker: '贝尔纳二世', text: '修女。把你的本子带到那条路的尽头去。碎片原来待的地方。在那儿，听一回。' },
      '他停了一下，嘴又动了动，把后半句咽了回去。',
      { if: '!party.narwen', text: '他要的修女不在。他把话说给你听，叫你转告。伊莲在册子上记了一笔：口信，经俗人转交。' },
      { if: 'is.god', text: '他看见你，撑着坐起来一点。伊莲伸手去扶，没扶住。' },
      { if: 'is.god', speaker: '贝尔纳二世', text: '您是祂的一个面相吗。我想在走之前，把这一栏填上。' },
      { if: 'is.god', text: '伊莲翻开了一本新册子，封面上写着：鉴定，卷一。' },
      '出门的时候，埃塔的电报追到了塔下：马利安德的种植园财团雇了“这家出了名的老公司”，追回走失的财物。合同她已经签了，定金很厚。',
    ],
    first: ['quest q_bill start', 'quest q_phrase start', 'codex c_ravelian_church'],
    choices: [
      {
        text: '答他：是',
        tag: '神',
        if: 'is.god && !flag.a3x_bernal_asked',
        once: true,
        effects: ['flag a3x_bernal_asked', 'rep church +1', 'var cult +1'],
        result: '他闭上眼睛，点了一下头。第二个礼拜，热忱派的小报上多了一面旗，旗上印着你的侧脸，鼻子画大了。',
      },
      {
        text: '答他：不是',
        tag: '神',
        if: 'is.god && !flag.a3x_bernal_asked',
        once: true,
        effects: ['flag a3x_bernal_asked', 'approval narwen +1', 'rep church -1'],
        result: '伊莲在册子上写：天赋异禀的法师，见附录。博学派当天就把这一卷归了档，热忱派说归早了。',
      },
      {
        text: '反问他：您觉得呢',
        tag: '神',
        if: 'is.god && !flag.a3x_bernal_asked',
        once: true,
        effects: ['flag a3x_bernal_asked', 'approval narwen -1'],
        result: '他笑了，笑着笑着咳起来，咳了很久。伊莲把你请到了门外。',
      },
      {
        text: '听他咽回去的那半句',
        check: { skill: 'insight', alt: ['religion'], dc: 14, mods: [{ if: 'flag.heard_hum', n: 1, why: '隔着地板听过它一声' }] },
        ok: { text: '那半句是：“这些年，它反复只说一句。”他说完看了伊莲一眼。伊莲的笔停着，没记。', effects: ['flag bernal_confided'], goto: 'a3_03' },
        fail: { text: '你只听见他咳。伊莲合上册子，记下了你的名字，和你站的位置。', effects: ['rep church -1'], goto: 'a3_03' },
      },
      {
        text: '替娜尔雯举着灯，等他睡着',
        if: 'party.narwen',
        effects: ['approval narwen +1'],
        result: '他睡着以前，娜尔雯数了他的呼吸，一百一十二下。她没说为什么要数。',
        goto: 'a3_03',
      },
      {
        text: '把灰磨那封信拆开，念给他听',
        effects: ['flag a3x_greymill_letter', 'rep church +1'],
        result: '信里写的是文森顿穷人街上的路灯，一共四百一十盏，一盏一盏写了地址。老人听到第二百盏，睡着了。',
        goto: 'a3_03',
      },
    ],
  },

  a3_03: {
    id: 'a3_03',
    title: '一件活，两份合同',
    art: 'ev_high_temple_city',
    loc: '巨魔湾 · 伊索贝尔港',
    date: '1828年哈兰娜月',
    text: [
      '伊索贝尔港的海关在码头尽头，一栋刷白的木楼，门口两根旗杆。一根挂联盟的旗，一根挂昨天的表决结果：码头税，赞成四十一，反对三十九。',
      '关员戴着袖套，面前一摞表格。他要看兽人的身份文书，要看机器的卖契。{?party.bura:布拉把文书递过去，关员没接，先看了看她的下巴。|}',
      { speaker: '关员', text: '联盟什么都投票。码头税投，路灯投，礼拜天开不开酒馆也投。只有谁是财物不投，那是早定了的。' },
      { if: 'is.greenskin', text: '他也朝你伸出了手。你是来办事的，他是来查你的，这两件事在这张柜台上分不开。' },
      { if: 'flag.bought_free', text: '你从怀里掏出镇议会那张赎身契。关员念了两遍，第二遍念出了声，后面排队的人都听见了。' },
      { if: 'is.mechanim', text: '他推过来两张“随行器材”表，一张给礼拜三，一张给你。表上有一栏叫“用途”。' },
      { if: 'party.middlesday && !is.mechanim', text: '礼拜三那张表上有一栏叫“用途”。它看了很久，没有动笔。' },
    ],
    first: ['codex c_concord'],
    choices: [
      {
        text: '递上阿斯拉银行开的保税单',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['rep charter +1'],
        result: '保税单上有阿斯拉银行的章。关员看见那个章，把两张表一起收进了抽屉，没再要文书。',
        goto: 'a3_03b',
      },
      {
        text: '把镇议会的赎身契拍在柜台上',
        tag: '绿皮',
        if: 'flag.bought_free',
        effects: ['approval bura +1'],
        result: '关员又念了一遍，念到“全镇摊付”四个字停住了。他给你们三个人都盖了章，章盖得很用力。',
        goto: 'a3_03b',
      },
      {
        text: '在“用途”一栏写：本人',
        tag: '机械人',
        if: 'is.mechanim',
        effects: ['gold -100', 'approval middlesday +2'],
        result: '关员看了很久，在旁边批了两个字：待议。待议的意思是下个月再表决。这个月先交一百金冠的保证金。',
        goto: 'a3_03b',
      },
      {
        text: '跟关员讲道理，或者讲点别的',
        check: { skill: 'persuasion', alt: ['deception'], dc: 14, party: true, mods: [{ if: 'rep.charter >= 3', n: 2, why: '特许商那边的熟面孔' }] },
        ok: { text: '他在表上盖了章。章盖歪了，他没重盖。', goto: 'a3_03b' },
        fail: { text: '他收了一百金冠的保证金，另附一条：兽人上街，须由雇主陪同。', effects: ['gold -100', 'flag a3x_escorted'], goto: 'a3_03b' },
      },
    ],
  },

  a3_03b: {
    id: 'a3_03b',
    title: '炸鱼',
    loc: '伊索贝尔港 · 码头边的客栈',
    text: [
      '当晚有人敲客栈的门，敲三下，停一下，再敲一下。来人穿一件旧黑袍，没戴教会的徽章，手里拎着一包热的炸鱼，纸都油透了。',
      '他是伊索贝尔港的大监院，莫里斯·安德克利夫。讲台上他能把一座教堂说得没人咳嗽，进了屋只说短句。',
      { speaker: '莫里斯·安德克利夫', text: '同一批人。二十三个，外加九台机器。我要你们把他们送到洇河口。那儿两面旗，谁的拘票都不好使。' },
      { speaker: '莫里斯·安德克利夫', text: '靠你得来的自由，你一走就没了。所以我不要你解放谁。我要你送一趟货。' },
      { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）安德克利夫。翻成我们的话，就是崖下。崖下的人砍甘蔗，崖下的老爷讲道。' },
      { if: 'party.bura', text: '大监院把炸鱼往她那边推了推。她吃了。这个玩笑，她后来没再开过。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '他是废奴派。文森顿的大监院是他的老对头，两家吵了好几代人。我们这趟走文森顿。' },
    ],
    first: ['codex c_undercliffe'],
    choices: [
      {
        text: '收下他手抄的渡口单子',
        effects: ['flag a3x_ferrylist', 'rep church +1'],
        result: '单子上七个渡口，每个后面写着船家的名字，和一句暗号。暗号都是晚祷词里的句子，挑的是平常不大念的那几句。',
        goto: 'a3_04',
      },
      {
        text: '告诉他公司已经签了另一份',
        effects: ['rep charter +1'],
        result: '他点点头，把单子留在桌上，鱼也留下了。“签了的，也有办法不办到。”说完他就走了。',
        goto: 'a3_04',
      },
      {
        text: '问他教会出不出这趟的船钱',
        effects: ['flag a3x_ferrylist', 'gold +150', 'rep union -1'],
        result: '他从袍子里数出一百五十金冠，全是零钱。“三个礼拜天的捐款。”第二天暗线上就传开了：迟到者公司收教会的钱办事。',
        goto: 'a3_04',
      },
    ],
  },

  a3_04: {
    id: 'a3_04',
    title: '商栈',
    art: 'ev_anb_global_trade',
    loc: '伊索贝尔港 · 卡尔希尔商栈',
    text: [
      '隔离法底下，肯把屋子租给一个兽人、一台机器和一个罐子里的仙子的，伊索贝尔港只有一家：卡尔希尔商栈。后院晾着鱼干，墙角码着盛夏群岛运来的椰壳，账房的蜥蜴人一天换两回水。',
      '伊索贝尔港有个外号，叫不夜城。荆棘道的戏院半夜才散场，桥区的酒馆天亮才关门。后院的墙矮，外头的灯照进来，晾着的鱼干都有影子。',
      { if: 'is.lizardfolk', text: '账房听出了你的口音，往你碗里多舀了一勺鱼汤，没收钱。罐子里那位管你叫“勿摇”的同乡，你没纠正她。' },
      { if: "origin == 'karshyr'", text: '商栈的老掌柜认出你是游学团的人。他请你喝茶，喝完才说正事：他想托你带一句话回家。' },
      { if: "origin == 'concord'", text: '塞斯提尔边区离这儿两天的路。码头上有人认出了你，问那笔四百金冠的账还清了没有。' },
      { if: 'flag.a3x_escorted && party.bura', text: '布拉每回出门，都得有人跟着。她出门三回，三回都是去码头后面。' },
    ],
    shop: {
      name: '卡尔希尔商栈',
      blurb: '鱼干、药、火驱枪，柜台上刻着一行字：不赊账。',
      stock: ['greater_healing_potion', 'healing_potion', 'antidote', 'strong_antitoxin', 'gnomish_smoke_bomb', 'sparkdrive_rifle', 'rosemetal_saber', 'breastplate', 'elven_cloak'],
      markup: 1.1,
    },
    choices: [
      {
        text: '把十四号器材的事拿到团里表决',
        if: '!flag.m_member && !flag.a3x_member_no',
        goto: 'a3_04m',
      },
      {
        text: '去见蒂尔妲',
        if: '!flag.gauge_burned',
        once: true,
        effects: ['flag a3x_tilda_calibrated', 'approval middlesday +1'],
        result: '她是大监院请来的鉴定人，带着那杆秤，秤盘上缠着胶布（第三页的签名还在（我看过了））。她说开庭以前，可以先给礼拜三校一回。',
      },
      {
        text: '拆开蒂尔妲的信',
        if: 'flag.gauge_burned',
        once: true,
        effects: ['approval middlesday -1'],
        result: '信纸是卡拉桑尼的，抬头印着金字。正文一行：你们烧了图纸，我只好去给烧图纸的人画图（别回信（他们拆信））。',
      },
      {
        text: '坐下来，陪布拉擦枪',
        if: 'party.bura',
        once: true,
        effects: ['approval bura +1'],
        result: '她去看过码头后面的奴隶区了。整晚她只说了一个数：四十。你问四十什么，她接着擦枪。',
      },
      {
        text: '替娜尔雯回塔里的信',
        if: 'party.narwen',
        once: true,
        effects: ['approval narwen +1'],
        result: '塔里来信说，老人还撑着，今天喝了半碗汤。她的回信写了三行，都是数字。',
      },
      {
        text: '问别摇晚上睡不睡得着',
        once: true,
        effects: ['flag a3x_jar_light'],
        result: '她说这儿的夜太亮，亮得不对。“城北那一片，路灯的光发白。那是芯核的光，从墙那边借的。”她数了七盏，说文森顿那边更多。',
      },
      {
        text: '去码头找乌戈',
        if: 'flag.ugo_papers',
        once: true,
        effects: ['flag a3x_met_ugo', 'approval bura +1'],
        result: '乌戈如今是暗线上的列车员。他把你领到一张旧海图前，洇河口以南的每一个渡口，他都用指甲掐过一道印。',
      },
      {
        text: '答应替老掌柜带那句话回家',
        tag: '卡尔希尔',
        if: "origin == 'karshyr'",
        once: true,
        effects: ['flag karshyr_message', 'rep south +1'],
        result: '那句话是：“他们管会说话的货叫器材，管不会说话的叫人手。记清楚，别弄反。”',
      },
      {
        text: '去找在种植园当账房的表亲',
        tag: '巨魔湾',
        if: "origin == 'concord'",
        once: true,
        effects: ['flag cousin_tip'],
        result: '你表亲在戴纽奇家管了十一年账。他压低声音说，文森顿那座机房的股东名册，锁在机房账房左手第二个柜子里。说完要你保证没见过他。',
      },
      {
        text: '在后院的吊床上睡一整夜',
        once: true,
        effects: ['rest long'],
        result: '鱼干的味儿一夜没散。你醒来的时候，账房的蜥蜴人已经换过一回水了。',
      },
      {
        text: '动身去塞斯提尔边区',
        goto: 'a3_05',
      },
    ],
  },

  a3_04m: {
    id: 'a3_04m',
    title: '十四号',
    loc: '伊索贝尔港 · 卡尔希尔商栈',
    text: [
      '埃塔隔着电报线把账本翻到了器材那一页，电报念出来是这样的：十四号，驮运用，二手，1820 年入账，每年折旧一成。八年折了八成，账面上它还值二十几个金冠。',
      { speaker: '埃塔（电报）', text: '划到成员栏，要全团表决。划过去，它就不能再折旧。这八年提的折旧，一百九十二金冠，退给谁。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（不确定。）退给我吧。（礼貌。）我可以拿它买一把伞。' },
      { if: 'party.bura', text: '布拉头一个举了手，举得很高，铰链跟着响了一下。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '成员登记表第四栏是“出生地”。理论上，七号线算一个地方。' },
    ],
    choices: [
      {
        text: '举手：划',
        effects: ['flag m_member', 'unflag a3x_member_no', 'world chains -1', 'approval middlesday +2'],
        result: '举起来的手里有一只是礼拜三自己的。埃塔回电：成员，礼拜三，1811 年生，七号线。折旧款记在它名下，没说买不买伞。',
        goto: 'a3_04',
      },
      {
        text: '不划，账先放着',
        effects: ['flag a3x_member_no', 'approval middlesday -1'],
        result: '埃塔回电只有一个字：存。礼拜三把行李码齐，背上，下楼去等你们。',
        goto: 'a3_04',
      },
    ],
  },

  a3_05: {
    id: 'a3_05',
    title: '镇议会',
    loc: '塞斯提尔边区 · 一个小镇',
    text: [
      '镇子的名字地图上有，路牌上没有，路牌三年前被表决拆了。议会开在教堂的地下室：一张长桌，十一个人，一壶凉茶。桌头挂一块黑板，写着本月议题，第四条是“某冒险公司旧账（1789）”。',
      { if: "origin == 'concord'", text: '这是你的镇。黑板上那笔账就是你。桌头记录的是你小时候的先生，他抬头看了你一眼，在纸上写下你的名字，又划掉，改成“债务本人”。' },
      '暗线上的人要在镇上的谷仓里过三夜，镇议会照例得表决。头一个发言的议员提议，先成立一个委员会，研究这件事该怎么表决。',
      { speaker: '议员', text: '我不反对收留。我反对不按程序收留。程序是我们唯一比种植园强的地方。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '他说得不全错。程序慢，可程序记得住事。人记不住。' },
    ],
    choices: [
      {
        text: '站起来，提请当场表决',
        check: {
          skill: 'persuasion', dc: 15,
          mods: [
            { if: "origin == 'concord'", n: 2, why: '这是你老家，你有权提请表决' },
            { if: 'rep.church >= 3', n: 1, why: '教会那边有人替你说过话' },
            { if: 'flag.log_amended', n: -2, why: '对面翻出了你 1820 年那页航海日志' },
          ],
        },
        ok: { text: '七比四。谷仓的钥匙交到你手里的时候，还是热的。', effects: ['flag town_shelters', 'world chains -1', 'rep union +1'], goto: 'a3_06' },
        fail: { text: '议案搁到下个月。委员会成立了，三个人，头一回会定在雨季以后。那三夜，暗线上的人睡在河边的芦苇里，霍布的脚泡烂了。', effects: ['rep union -1'], goto: 'a3_06' },
      },
      {
        text: '不等表决，先把人领进谷仓',
        tag: '巨魔湾',
        if: "origin == 'concord'",
        effects: ['flag town_shelters', 'flag town_vote_skipped', 'world chains -1', 'rep charter -1'],
        result: '人进了谷仓，表决第二天才开。镇上从此有一半人不跟你说话，另一半人见了你先看看左右。',
        goto: 'a3_06',
      },
      {
        text: '找镇上的科琳教小堂借地方',
        if: 'party.bura',
        check: { skill: 'religion', alt: ['persuasion'], dc: 13, party: true },
        ok: { text: '小堂的执事是个独眼的半兽人。他听布拉念完一段科琳的祷词，开了后门，只说了一句：别点灯。', effects: ['world chains -1', 'approval bura +1'], goto: 'a3_06' },
        fail: { text: '执事说小堂归镇议会管，借地方也得表决。布拉谢了他，出门踢了一脚门槛。', effects: ['approval bura -1'], goto: 'a3_06' },
      },
    ],
  },

  a3_06: {
    id: 'a3_06',
    title: '第二道菜底下',
    loc: '马利安德 · 戴纽奇庄园',
    text: [
      '马利安德的庄园出名的是门廊深、树荫厚。戴纽奇家的门廊能并排停四辆马车。太阳落山以前，没人请你们进屋，管家端来柠檬水，杯子外头结着水珠。',
      '天黑才开席。长桌上二十四根蜡烛，银盘子，三道汤。威廉·戴纽奇坐在主位，袖口熨得笔直，面前一副刀叉摆得端端正正，一晚上没动过。上菜的是戴镣的手，镣子裹了布，碰着盘子不响。',
      { speaker: '威廉·戴纽奇', text: '请用。我看着你们吃就很高兴。合同在第二道菜底下，不急。' },
      '第二道是烤鸭。盘子底下压着一张清单：二十三个人名，九个编号。{?party.bura:布拉的铰链整晚没响过。|}',
      { if: 'is.god', speaker: '威廉·戴纽奇', text: '恕我冒昧。红衣收割者，归不归您管？' },
      { if: 'is.god', text: '他问得很客气，像在打听你住的客栈收不收狗。' },
      { if: 'is.immortal', speaker: '威廉·戴纽奇', text: '他们给您立过案了。那种卷宗的封皮是红的，我认得。' },
    ],
    first: ['quest q_bill stage 2', 'codex c_dainuich', 'codex c_undercliff_orcs', { if: 'is.immortal', then: ['flag reaper_file'] }],
    choices: [
      {
        text: '盯着他的刀叉，看他吃不吃',
        once: true,
        check: { skill: 'insight', dc: 15 },
        ok: { text: '你数了。一整晚没有人给他斟过酒，他的杯子是满的，满得一滴不少。', effects: ['flag dainuich_noticed'] },
        fail: { text: '你盯久了。他笑着问你是不是嫌银器不够亮，叫人换了一套，换的时候多看了你两眼。', effects: ['rep charter -1'] },
      },
      {
        text: '数清屋里屋外有多少人手',
        once: true,
        check: { skill: 'perception', dc: 14, party: true },
        ok: { text: '屋里六个，门廊上四个，马厩那边两条狗。换岗是十一点，换岗的人要先去厨房喝一碗汤。', effects: ['flag a3x_counted'] },
        fail: { text: '你数到第九个就乱了，有一个人进出了两回。第二回他手里没端东西，看的是你。', effects: ['flag a3x_alarm'] },
      },
      {
        text: '照规矩回敬主人一杯',
        tag: '贵族',
        if: 'is.noble',
        once: true,
        effects: ['flag a3x_engine_hint', 'rep charter +1'],
        result: '他很满意，多留你喝了一杯。你喝，他看。临走他说漏了一句：文森顿那座不烧煤的机房，他也有股。',
      },
      {
        text: '在清单上签收',
        effects: ['flag planter_list_signed', 'rep charter +1'],
        result: '他把笔递过来。笔杆是热的，有人一直握着它等你。',
        goto: 'a3_07',
      },
      {
        text: '说要先看看那几台“有毛病的”轧棉机',
        effects: ['flag a3x_invited'],
        result: '他叫管事提了灯带你们去，说机器在轧棉房，夜里也不停。',
        goto: 'a3_07',
      },
      {
        text: '把清单折好揣进怀里，不签',
        effects: ['approval bura +1'],
        result: '他看着你揣进怀里，叫人上了第三道。第三道是甜的，他也没动。',
        goto: 'a3_07',
      },
    ],
  },

  a3_07: {
    id: 'a3_07',
    title: '轧棉机报人名',
    art: 'ev_mechanim_awakening',
    loc: '戴纽奇庄园 · 轧棉房',
    text: [
      '轧棉房在甘蔗地边上，后半夜还亮着一盏灯。九台轧棉机械人站成一排，锁在同一根梁上，胸口各一块铜牌，七号到十五号。地上铺着草席，二十三个人坐的坐、躺的躺，有个人在补鞋。',
      '机器和人互相藏着对方。管事来查，机器就转得响一点，盖住说话声；人替机器把出了毛病的齿轮拿布包起来，免得它被拉去回炉。十一号一直在背名字，跟它锁在同一根梁上的每一个人，一个不落。',
      { speaker: '十一号', text: '内莉。老科尔。阿萨。霍布。马蒂。托比，不在。……' },
      { speaker: '内莉', text: '我们走。可我儿子托比在隔壁庄园，九岁。不带上他，我不走。' },
      { speaker: '老科尔', text: '我六十一了，走不动。我留下，给追的人指路。指错的那条。' },
      '阿萨撑过船，认得洇河口前头的三个渡口里的两个。霍布的脚踝被镣磨烂了，裹着烟叶。马蒂十四岁，会数数，替十一号把编号记在鞋底上。他们问你的只有一句：你站哪边。',
      { if: "origin == 'unowned' && is.mechanim", text: '你用机器的语速说了一句话，人听着像一声哨子。九台同时停了工，十一号也不背了，转过头来看你。' },
      { if: "origin == 'unowned' && !is.mechanim", text: '你蹲下去看芯核座上的厂印：七号线，1811 年的料。这种座子你在那条线上拧过，一班拧四十个。' },
      { if: "is.mechanim && origin != 'unowned'", text: '九台机器先转过头来，问你今天礼拜几。' },
      { if: 'is.greenskin', text: '屋里的人先跟你说话。他们问你在这家公司是干什么的，你说是队长，他们不大信，又问了一遍。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（高兴。）十一号跟我是一炉的料。（担心。）它背名字，是怕自己忘了。' },
    ],
    choices: [
      {
        text: '压低声音，别让管事听见',
        once: true,
        check: { skill: 'stealth', dc: 14, party: true, adv: 'flag.a3x_invited' },
        ok: { text: '管事提着灯走过两回，什么也没看见。第二回他打了个哈欠。' },
        fail: { text: '草席底下压着一只空罐头，被你一脚踩响了。管事吹了三声哨子，马厩那边的狗跟着叫。', effects: ['flag a3x_alarm'] },
      },
      {
        text: '看看它们芯核的料',
        once: true,
        check: { skill: 'arcana', alt: ['investigation'], dc: 14, party: true },
        ok: { text: '纹路是新刻的，晶体的底子却发青。那是 1810 年落下的那一批。早醒的，都是这一批。', effects: ['flag cores_1810'] },
        fail: { text: '纹路太细，灯太暗。你看得眼睛发酸，只看出九颗是同一个厂出的。十一号背名字的时候，把你也背了进去。', effects: ['hp -2'] },
      },
      {
        text: '答应内莉，先去隔壁庄园接托比',
        once: true,
        effects: ['flag a3x_toby', 'rep charter -1', 'approval bura +1'],
        result: '隔壁庄园的狗认得内莉，没叫。托比睡在马槽里，抱出来的时候还没醒。第二天，隔壁的主人给戴纽奇写了封信，抱怨走失了一个孩子。',
      },
      {
        text: '告诉他们你站哪边，回去开会',
        goto: 'a3_08',
      },
    ],
  },

  a3_08: {
    id: 'a3_08',
    title: '团务会：两份合同',
    art: 'ev_multi_racial_merc',
    loc: '马利安德城外 · 河边的空货栈',
    date: '1828年苏伦月',
    text: [
      '河边有座空货栈，原先堆棉包，地上还有一层棉絮，走一步扬一下。公司在这儿开团务会。一只空箱子翻过来当桌子，埃塔的电报压在上面，拿一块石头镇着。',
      { if: 'party.bura', speaker: '布拉', text: '合同上写的是“追回财物”。你过来，指给我看，哪一个是财物。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）屋里三十二个。（更正。）三十三。我刚才没数我自己。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '我站大监院那边。可要悄悄地办。动静一大，教会就得出来表态，表态这种事，一拖就是二十年。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '最糟的是骗。理论上，两头骗是两倍的糟。实际上……实际上我没算过。' },
      { text: '埃塔电：三百八十二年，没毁过一回约。', cls: 'letter' },
      { speaker: '别摇', text: '问一句。你们这儿，说话不算数的人，后来都怎么样了。' },
      '多数人站暗线。剩下的，看你。',
    ],
    choices: [
      {
        text: '照种植园的合同办，把人追回来',
        effects: ['flag contract_planters', 'unflag contract_line', 'unflag contract_fraud', 'world chains +2', 'rep charter +2', 'rep union -3', 'var overruled +1', 'approval bura -1', 'approval middlesday -1', 'approval narwen -1'],
        result: '你在合同背面签了字。布拉把枪擦了第二遍，没抬头。',
        goto: 'a3_09',
      },
      {
        text: '走暗线，把人送去洇河口',
        if: "faction != 'seal' && !(faction == 'shield' && party.bura)",
        effects: ['flag contract_line', 'unflag contract_planters', 'unflag contract_fraud', 'flag contract_broken', 'world chains -2', 'rep charter -2', 'rep union +2'],
        result: '埃塔回电两个字：收到。后面跟着违约金的数目，比定金多一倍。',
        goto: 'a3_09',
      },
      {
        text: '走暗线；布拉要拿欠饷抵违约金，收下',
        tag: '盾',
        if: "faction == 'shield' && party.bura",
        effects: ['flag contract_line', 'unflag contract_planters', 'unflag contract_fraud', 'flag contract_broken', 'world chains -2', 'rep charter -2', 'rep union +2', 'approval bura +2'],
        result: '布拉把那张裱起来的判词从包袱里抽出来，拍在箱子上。“一半的饷，够赔吧。”埃塔回电：够。',
        goto: 'a3_09',
      },
      {
        text: '引合同：在共和国地界上签的约，不得以人为标的',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['flag contract_line', 'unflag contract_planters', 'unflag contract_fraud', 'world chains -2', 'rep charter -1', 'rep union +2'],
        result: '合同是在安本科斯特签的。追人的那一条自始无效，公司没毁约；机器那一条还有效，得等法庭。埃塔回电：条款第六款，我早看见了，等你自己看见。',
        goto: 'a3_09',
      },
      {
        text: '两头都办：给财团交一叠假的报废单和死亡登记',
        effects: ['flag contract_fraud', 'unflag contract_planters', 'unflag contract_line', 'world chains -1', 'var overruled +1', 'approval guilhem -1'],
        result: '吉列姆替你拟了第一张死亡登记。写完，他把笔放下，说他手抖。',
        goto: 'a3_09',
      },
      {
        text: '举手表决',
        effects: ['flag contract_line', 'unflag contract_planters', 'unflag contract_fraud', 'flag contract_broken', 'world chains -2', 'rep charter -2', 'rep union +2', 'approval bura +1', 'approval middlesday +1'],
        result: '你也举了手。礼拜三把自己那只手举得很直，数了一遍，又数了一遍。',
        goto: 'a3_09',
      },
    ],
  },

  a3_09: {
    id: 'a3_09',
    title: '布拉的枪',
    art: 'ev_corinite_war',
    loc: '马利安德 · 奴隶区后墙',
    text: [
      '奴隶区的后墙是土坯的，墙根长着蓖麻。墙下四只长木箱，撬开了一只，里面是油纸包着的枪，四十条，枪托上烙着拉姆斯盖特军火的字号。',
      { if: 'party.bura', speaker: '布拉', text: '共和国欠我十一个月的饷。我欠科琳一条命。今天先还这一笔。' },
      { if: '!party.bura', text: '布拉不在。箱盖上有一行粉笔字：先还这一笔。粉笔是从教堂里拿的，写到最后一个字断了。' },
      '墙那边有人在唱晚祷，词是揭秘教的词，调子慢一半。他们和主人进同一座教堂，走不同的门。',
      { if: 'flag.contract_planters && party.bura', text: '你签过种植园的合同。这件事她知道。她把箱盖扣上了一半，等你开口。' },
    ],
    first: ['quest q_bura stage 2'],
    choices: [
      {
        text: '拦住她，照雇主的合同办',
        if: 'party.bura',
        effects: ['flag bura_alone', 'unflag bura_armed', 'unflag bura_line', 'companion -bura', 'quest q_bura fail'],
        result: '她把枪一条一条码回箱子，码得很齐。然后她扛起一箱，一个人走了，没回头。铰链响了一声，就一声。',
        goto: 'a3_10',
      },
      {
        text: '帮她把枪发下去',
        if: 'party.bura',
        effects: ['flag bura_armed', 'unflag bura_alone', 'unflag bura_line', 'world chains -2', 'rep charter -2', 'flag wanted_concord', 'approval bura +2', 'quest q_bura done', { if: 'flag.contract_planters', then: ['flag contract_broken'] }],
        result: '四十条枪，一人一条。教会怎么教唱诗，她就怎么教装弹：一句一句来，错了重来。天亮以前，墙那边的歌停了。',
        goto: 'a3_10',
      },
      {
        text: '劝她把人带上暗线，枪留给不肯走的',
        tag: '盾',
        if: "party.bura && !flag.contract_planters && faction == 'shield'",
        once: true,
        check: { skill: 'persuasion', dc: 15, mods: [{ if: 'approval.bura >= 6', n: 2, why: '她信你' }] },
        ok: { text: '她想了很久，铰链响了两回。最后她撬开第二箱，只拿出十条。“不肯走的，给这个。肯走的，跟我。”', effects: ['flag bura_line', 'unflag bura_alone', 'unflag bura_armed', 'world chains -1', 'approval bura +1', 'quest q_bura done'], goto: 'a3_10' },
        fail: { text: '“你说的是对的。”她说，“可你说晚了十一个月。”她站着，等你在剩下的两条路里挑一条。', effects: ['approval bura -1'], goto: 'a3_09' },
      },
      {
        text: '劝她把人带上暗线，枪留给不肯走的',
        if: "party.bura && !flag.contract_planters && faction != 'shield' && approval.bura >= 6",
        once: true,
        check: { skill: 'persuasion', dc: 15 },
        ok: { text: '她想了很久，铰链响了两回。最后她撬开第二箱，只拿出十条。“不肯走的，给这个。肯走的，跟我。”', effects: ['flag bura_line', 'unflag bura_alone', 'unflag bura_armed', 'world chains -1', 'approval bura +1', 'quest q_bura done'], goto: 'a3_10' },
        fail: { text: '“你说的是对的。”她说，“可你说晚了十一个月。”她站着，等你在剩下的两条路里挑一条。', effects: ['approval bura -1'], goto: 'a3_09' },
      },
      {
        text: '把箱子留在墙根，去追她',
        if: '!party.bura',
        effects: ['flag bura_alone', 'unflag bura_armed', 'unflag bura_line', 'quest q_bura fail'],
        result: '你追到河边，只看见泥地上一串脚印，往北去了。脚印很深，她扛着一箱。',
        goto: 'a3_10',
      },
    ],
  },

  a3_10: {
    id: 'a3_10',
    title: '河堤',
    loc: '马利安德以北 · 河堤',
    text: [
      '河堤高出甘蔗地一人多，堤顶只容两匹马并排。追奴队来了九个人，四条狗，一盏防风灯。领头的把悬赏单举到灯底下，一个字一个字地念。',
      { speaker: '追奴队长', text: '……走失财物，兽人二十三口，机械九具。送回者每口赏四十金冠，机械另议……' },
      { if: 'party.middlesday', text: '念到“财物”两个字，礼拜三把背上的行李一件一件卸在地上，码齐了，最小的一件放在最上面。' },
      '身后的甘蔗地里蹲着二十三个人。{?flag.a3x_toby:内莉怀里抱着托比，捂着他的嘴。|内莉把脸埋在膝盖上。}老科尔没跟来，他留在庄园里，给追的人指错的路。',
      { if: 'flag.contract_planters', text: '你站在追奴队这一边。堤下的芦苇里有东西在动，是暗线的人，来劫人的。追奴队长把悬赏单塞进怀里，冲你点了点头：该你们了。' },
      { if: 'flag.a3x_alarm && !flag.contract_planters', text: '庄园那边的哨子还在吹。又来了一骑，马上的人一边跑一边装弹。' },
      { if: 'is.god', text: '狗先不叫了。追奴队的马往后退，退到堤边上，一只前蹄踩空了。' },
    ],
    choices: [
      {
        text: '把报废单和死亡登记递给追奴队长',
        if: 'flag.contract_fraud',
        once: true,
        check: { skill: 'deception', dc: 16, party: true, mods: [{ if: 'flag.planter_list_signed', n: -2, why: '清单上有你的签收' }] },
        ok: { text: '他借着灯看了很久，看到第七张骂了一句，把两个人和骑马的打发了回去。“剩下的我得亲眼看看尸首。”', effects: ['flag a3x_light'] },
        fail: { text: '他翻到第三张就笑了。那张死亡登记上的日子是礼拜天，马利安德的公证所礼拜天不开门。他把单子收好，说要寄给联盟的法庭。', effects: ['flag wanted_concord'] },
      },
      {
        text: '先去把堤上最窄那段的木栅推倒',
        tag: '武人',
        if: 'is.martial && !flag.contract_planters',
        once: true,
        check: { skill: 'athletics', dc: 14 },
        ok: { text: '木栅倒进了河里。最窄那一段只剩一人宽，马过不来，骑马的只好下马。', effects: ['flag a3x_light'] },
        fail: { text: '木栅倒了，你也跟着滑下去半截，膝盖磕在石头上。', effects: ['hp -6'] },
      },
      {
        text: '趁十一点换岗，先摸掉放哨的两个',
        if: 'flag.a3x_counted && !flag.contract_planters',
        once: true,
        check: { skill: 'stealth', dc: 14, party: true },
        ok: { text: '换岗的人还在厨房喝汤。放哨的两个被你们捆在柳树上，嘴里塞着他们自己的帽子。', effects: ['flag a3x_light'] },
        fail: { text: '放哨的那个回头了。他没喊，他吹的是哨子。', effects: ['flag a3x_alarm'] },
      },
      {
        text: '让乌戈先带甘蔗地里的人下渡口',
        if: 'flag.a3x_met_ugo && !flag.contract_planters',
        once: true,
        effects: ['flag a3x_ford', 'approval bura +1'],
        result: '乌戈打了一声唿哨。甘蔗地里的人弯着腰走了，一个跟一个，霍布让阿萨背着。剩下的事归你们。',
      },
      {
        text: '站到堤上，说一句：谁也不许过',
        tag: '神',
        if: 'is.god && !flag.contract_planters',
        effects: ['flag levee_sanctuary', 'world chains -3', 'rep charter -3', 'rep church -1', 'var cult +1'],
        goto: 'a3_10s',
      },
      {
        text: '上堤',
        if: '!flag.contract_planters',
        goto: 'a3_10b',
      },
      {
        text: '跟追奴队一起下堤，堵住芦苇',
        if: 'flag.contract_planters',
        goto: 'a3_10p',
      },
      {
        text: '站着别动，让暗线的人把人带走',
        if: 'flag.contract_planters',
        effects: ['world chains -1', 'rep charter -2', 'rep union +1', 'approval narwen +1'],
        result: '你把枪背回了肩上。追奴队长看了你一眼，在本子上记了一笔。暗线的人从你身边过去，有一个停下来，跟你说了声谢谢。',
        goto: 'a3_11',
      },
    ],
  },

  a3_10b: {
    id: 'a3_10b',
    title: '堤上',
    loc: '马利安德以北 · 河堤',
    text: [
      '防风灯挂到了堤边的柳树上。追奴队长把马刀抽出来，又插了回去，换了一根套索。他按人头领钱，死的不值钱。',
      { if: 'flag.a3x_light && !flag.a3x_alarm', text: '对面少了几个人。剩下的那几个也看得出来，往后瞄了好几回。' },
      { if: 'flag.a3x_ford', text: '甘蔗地里已经空了。乌戈的唿哨从下游传过来，又短又急，意思是：还要一刻钟。' },
      { speaker: '追奴队长', text: '我不想打死谁。打死了不值钱。你们让开，我少记你们一笔。' },
      { if: 'party.middlesday || is.mechanim', text: '九台轧棉机械人跟着你们上了堤，镣子还拖在脚后头。十一号不背名字了，它在数对面有几个人。' },
    ],
    choices: [
      { text: '叫九台机器排成一排，一起上', if: '(party.middlesday || is.mechanim) && partysize >= 2 && flag.a3x_light && !flag.a3x_alarm', combat: { ...LEVEE_BASE, enemies: T4, allies: GIN_ALLIES } },
      { text: '叫九台机器排成一排，一起上', if: '(party.middlesday || is.mechanim) && partysize >= 2 && !(flag.a3x_light && !flag.a3x_alarm)', combat: { ...LEVEE_BASE, enemies: T5, allies: GIN_ALLIES } },
      { text: '叫九台机器排成一排，一起上', if: '(party.middlesday || is.mechanim) && partysize <= 1', combat: { ...LEVEE_BASE, enemies: T3, allies: GIN_ALLIES } },
      { text: '动手', if: 'partysize >= 4 && flag.a3x_light && !flag.a3x_alarm', combat: { ...LEVEE_BASE, enemies: T4 } },
      { text: '动手', if: 'partysize >= 4 && !(flag.a3x_light && !flag.a3x_alarm)', combat: { ...LEVEE_BASE, enemies: T5 } },
      { text: '动手', if: 'partysize == 3 && flag.a3x_light && !flag.a3x_alarm', combat: { ...LEVEE_BASE, enemies: T3 } },
      { text: '动手', if: 'partysize == 3 && !(flag.a3x_light && !flag.a3x_alarm)', combat: { ...LEVEE_BASE, enemies: T4 } },
      { text: '动手', if: 'partysize == 2 && flag.a3x_light && !flag.a3x_alarm', combat: { ...LEVEE_BASE, enemies: T2 } },
      { text: '动手', if: 'partysize == 2 && !(flag.a3x_light && !flag.a3x_alarm)', combat: { ...LEVEE_BASE, enemies: T3 } },
      { text: '动手', if: 'partysize <= 1', combat: { ...LEVEE_BASE, enemies: T1 } },
    ],
  },

  a3_10p: {
    id: 'a3_10p',
    title: '劫囚',
    loc: '马利安德以北 · 河堤',
    text: [
      '芦苇里出来七八个人，有拿刀的，有拿猎枪的。打头的是个半身人，手里一盏遮了半边的灯。他看见你们外套上的铜牌，愣了一下。',
      { speaker: '打头的半身人', text: '迟到者公司？我爹说过你们。他说你们是先护人、后算账的那一家。' },
      '他身后有个崖下兽人，是阿萨，手里攥着一根撑船的竹篙。甘蔗地里的人已经起身了，往芦苇这边挪。',
      { if: 'party.bura', text: '布拉没拔枪。她站在你身后，你听得见她的铰链一下一下地响。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '你签的字。我不拦你。我也不帮你。' },
    ],
    choices: [
      { text: '动手', if: 'partysize >= 4', combat: { ...RESCUE_BASE, enemies: R5 } },
      { text: '动手', if: 'partysize == 3', combat: { ...RESCUE_BASE, enemies: R4 } },
      { text: '动手', if: 'partysize == 2', combat: { ...RESCUE_BASE, enemies: R3 } },
      { text: '动手', if: 'partysize <= 1', combat: { ...RESCUE_BASE, enemies: R2 } },
      {
        text: '把枪放下，让他们过去',
        effects: ['world chains -1', 'rep charter -2', 'rep union +1', 'approval narwen +1'],
        result: '你把枪放在了地上。半身人从你身边走过去，没道谢，他把灯的另外半边也遮上了。',
        goto: 'a3_11',
      },
    ],
  },

  a3_10s: {
    id: 'a3_10s',
    title: '庇护所',
    loc: '马利安德以北 · 河堤',
    text: [
      '你站到堤上，说了一句：谁也不许过。狗趴下了。追奴队长把悬赏单折起来，折成很小的一块，塞进靴子里，掉转了马头。',
      '甘蔗地里的二十三个人从你身边走过去，有人摸了摸你的袖子。往后三个月，这段河堤叫“神的庇护所”。联盟议会花了一整个会期辩论：神的庇护所，算不算外国管辖。',
      '种植园主们开始买枪。拉姆斯盖特的代理人在马利安德开了一家门面。安德克利夫派人送来一张便条。',
      { speaker: '莫里斯·安德克利夫（便条）', text: '谢谢。别再替我干活。' },
      { if: 'party.bura', speaker: '布拉', text: '我当了二十年兵，头一回仗没打就赢了。（铰链咔的一声。）我不喜欢。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（不确定。）十一号问我，你是不是也有编号。我说不知道。' },
    ],
    next: 'a3_11',
  },

  a3_11: {
    id: 'a3_11',
    title: '不烧煤的机房',
    art: 'ev_damestear_core',
    loc: '文森顿 · 城北',
    date: '1828年泰苏伦月',
    text: [
      '文森顿是为一条路生的城。当年探险队找到碎片，队长不干了，回到海边要了一块地住下，城就照他的名字叫。城北有座机房，红砖墙，三根烟囱，一根也不冒烟。',
      '科尔班·灰磨大监院亲自领路。他和气，个子不高，袍子的袖口磨得发亮。锅炉房里闻不到煤味，只有一股热铁皮的气味。炉膛里排着十二颗芯核，蓝得发白，每一颗都在响，调门各不一样。',
      { speaker: '科尔班·灰磨', text: '先驱精灵偷了一回，法师又把它锁了八百年。我们只是把灯点到穷人的街上。你听见的那个声音，是机器在响。' },
      '穷人街上的路灯是这座机房点的，四百一十盏，不收钱。',
      { if: 'flag.a3x_greymill_letter', speaker: '科尔班·灰磨', text: '我那封信，听说是你念给老人听的。念到第几盏了？' },
      { if: 'is.artificer', text: '你看得懂炉膛的接法。进线和出线对调了：指针那头接着芯核，表盘那头接着路灯。这是一杆倒过来的秤。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（害怕。）第四颗在叫名字。（更正。）在叫编号。它不记得自己叫什么了。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '不用法师，不用晶体，一年四百一十盏灯。理论上我该高兴。我回去想想，为什么高兴不起来。' },
    ],
    first: ['quest q_engine start', 'codex c_soul_engine', 'codex c_greymill'],
    choices: [
      {
        text: '夸他的路灯',
        effects: ['rep church +1'],
        result: '他高兴得像个学徒，领你们去看路灯的开关：一根铜杆，一拉，半条街就亮了。',
        goto: 'a3_11b',
      },
      {
        text: '问他炉膛里那颗为什么叫',
        effects: ['approval middlesday +1'],
        result: '“那是机器在响。”他又说了一遍，说得很慢，好像说慢一点就更真一点。',
        goto: 'a3_11b',
      },
      {
        text: '指给他看：进线和出线接反了',
        tag: '奇械',
        if: 'is.artificer',
        effects: ['rep church -1', 'approval guilhem +1'],
        result: '他看了很久，说：“我知道。”然后请你们去喝茶。茶是好茶，他一口没喝。',
        goto: 'a3_11b',
      },
    ],
  },

  a3_11b: {
    id: 'a3_11b',
    title: '夜里',
    loc: '文森顿 · 城北机房外',
    text: [
      '夜里机房只留一个看门的，一条狗，三盏灯。账房在二楼，窗户朝着路灯。路灯整夜不灭，这在偷东西的人看来，是这座机房唯一的毛病。',
      { if: 'flag.a3x_jar_light', text: '别摇说过，哪几盏灯是从墙那边借的光。那几盏的影子淡，你们贴着那几盏灯底下走。' },
      { if: 'is.small', text: '二楼有个通风道，一尺见方，铁栅栏锈了一半。你钻得进去。' },
      { if: 'party.bura', text: '布拉留在街口望风。她靠着路灯杆，铰链一声没响。' },
    ],
    choices: [
      {
        text: '从通风道钻进去',
        tag: '小个子',
        if: 'is.small',
        effects: ['var a3x_pass +1'],
        result: '通风道里全是灰。你从另一头爬出来，像刚从面粉袋里钻出来。',
        goto: 'a3_11c',
      },
      {
        text: '摸过院子，翻进二楼',
        check: { skill: 'stealth', dc: 15, party: true, mods: [{ if: 'flag.a3x_jar_light', n: 2, why: '别摇数过的那几盏灯' }] },
        ok: { text: '狗睡得很沉，看门的在数自己的工钱，数到一半又从头数。', effects: ['var a3x_pass +1'], goto: 'a3_11c' },
        fail: { text: '狗叫了两声。看门的提着灯出来转了一圈，又回去了。他记下了。', effects: ['flag a3x_seen'], goto: 'a3_11c' },
      },
    ],
  },

  a3_11c: {
    id: 'a3_11c',
    title: '保险柜',
    loc: '文森顿 · 机房账房',
    text: [
      '账房里一张写字台，一只保险柜，柜门的铭牌是北方联盟一家厂子的。墙上钉着十二颗芯核的出厂单，每张单子上一个编号，没有名字。',
      { if: 'flag.cousin_tip', text: '左手第二个柜子。你表亲说的就是这个。' },
      { if: 'flag.a3x_seen', text: '楼下有脚步声，一步一步上楼梯，不快。' },
      '锁是三道簧的。外头的路灯照进来，照得锁眼发蓝。',
    ],
    choices: [
      {
        text: '慢慢拨开那三道簧',
        check: { skill: 'sleight', dc: 15, party: true, mods: [{ if: 'is.artificer', n: 2, why: '这种锁你修过' }] },
        ok: { text: '第三道簧弹开的时候，柜门自己往外让了一指宽。', effects: ['var a3x_pass +1'], goto: 'a3_11d' },
        fail: { text: '锁簧响了一声。楼下的狗又叫了。柜门是开了，开得很响。', effects: ['flag a3x_seen'], goto: 'a3_11d' },
      },
      {
        text: '拿撬棍硬撬',
        check: { skill: 'athletics', dc: 13, party: true },
        ok: { text: '柜门开了，铰链也断了。整条街都听得见。', effects: ['var a3x_pass +1', 'flag a3x_seen'], goto: 'a3_11d' },
        fail: { text: '撬棍弯了，柜门没弯。你们只好去翻写字台的抽屉。', effects: ['flag a3x_seen'], goto: 'a3_11d' },
      },
    ],
  },

  a3_11d: {
    id: 'a3_11d',
    title: '三十几本',
    loc: '文森顿 · 机房账房',
    text: [
      '柜子里码着三十几本账，封皮都是一个颜色。流水账、煤账（一本空的）、修理账、股东名册，混在一起，书脊上没有字。',
      { if: 'flag.a3x_engine_hint', text: '戴纽奇说漏的那句话还在你耳朵里：他也有股。有他的名字的那一本，就是名册。' },
      { if: 'flag.a3x_seen', text: '脚步声停在了楼梯拐角。有人在那儿点烟斗，点了三回才着。' },
    ],
    choices: [
      {
        text: '一本一本翻，找对那两本',
        check: { skill: 'investigation', dc: 14, party: true, adv: 'flag.cousin_tip || flag.a3x_engine_hint' },
        ok: { text: '流水账是最厚的那本，股东名册是最薄的。薄的那本封皮上有一块指印，是常被人翻的。', effects: ['var a3x_pass +1'], goto: 'a3_11e' },
        fail: { text: '你翻到第十一本，楼梯拐角的烟斗灭了。', goto: 'a3_11e' },
      },
    ],
  },

  a3_11e: {
    id: 'a3_11e',
    title: '代持账户',
    loc: '文森顿 · 城北',
    text: [
      { if: 'var.a3x_pass >= 2', text: '你们拿到了流水账，还有股东名册。名册第三页有一行代持账户，户名是一串数字，开户行在安本科斯特。埃塔账上，合伙人的汇票也是这家行开的。' },
      { if: 'var.a3x_pass >= 2', text: '流水账上没有煤钱。每个月一笔“芯核更换”，十二颗里每月换一颗，换下来的那颗记作“报废”。' },
      { if: 'var.a3x_pass < 2', text: '你们只抓到半本流水账，后半本还锁在柜子里。看门的已经上了楼，手里的灯在门缝底下晃。' },
      '外头的路灯一盏挨一盏，照得街上没有一块暗处。',
    ],
    choices: [
      {
        text: '揣好账本和名册，从后门走',
        if: 'var.a3x_pass >= 2',
        effects: ['flag engine_ledger', 'item +engine_ledger', 'flag partner_engine_share'],
        result: '后门外是一条窄巷，巷口一盏路灯，灯底下坐着个讨饭的，看了你们一眼，又低头睡了。',
        goto: 'a3_12',
      },
      {
        text: '抱着半本账，翻窗跑',
        if: 'var.a3x_pass < 2',
        check: { abil: 'con', dc: 13, save: true },
        ok: { text: '你们跑过三条街。最后一条街的路灯一盏一盏在身后亮着，亮得像是在给追的人指路。', goto: 'a3_12' },
        fail: { text: '第三条街口你摔进了排水沟。半本账护住了，膝盖没护住。', effects: ['hp -8'], goto: 'a3_12' },
      },
    ],
  },

  a3_12: {
    id: 'a3_12',
    title: '真理之路',
    art: 'ev_dark_forest',
    loc: '真理之路',
    date: '1828年伊什达月',
    text: [
      '暗线的人跟着乌戈那样的列车员走水路，去洇河口。公司陪着娜尔雯的本子走另一条路，朝圣的路，从文森顿往诺鲁因腹地去。路很长，两头并不近，早年走一趟是拿命换的。',
      '同路的朝圣客里有个地精，背着一口铁锅，一路上非说碎片是个方块。他说他舅舅见过，他舅舅是听一个修士说的。',
      { speaker: '背锅的地精', text: '方的。四个角。你们管它叫菱形，那是你们站的地方不对。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '上回我走这条路，是一百多年前。那回没下雨。' },
      { if: 'party.narwen', text: '这回下了，下了九天。' },
      { if: '!party.narwen', text: '娜尔雯的本子在你包里，拿油布包了三层。这回下了雨，下了九天。' },
      '第九天，路被一条涨水的河截断了。',
    ],
    first: ['level 7', 'codex c_path_of_truth'],
    choices: [
      {
        text: '找一段能蹚过去的浅滩',
        check: { skill: 'survival', alt: ['nature'], dc: 14, party: true },
        ok: { text: '你们找到一段浅滩，水只到腰。地精把锅顶在头上，第一个过了河。', goto: 'a3_12b' },
        fail: { text: '水等了一天才退。干粮泡了一半，你们借地精的锅煮了一锅糊糊，人人都冻得发抖。', effects: ['hp -5'], goto: 'a3_12b' },
      },
    ],
  },

  a3_12b: {
    id: 'a3_12b',
    title: '朝圣客栈',
    loc: '真理之路 · 朝圣客栈',
    text: [
      '路上有家朝圣客栈，石头墙，门口挂着一块木牌，牌上刻着问答。答得上来的住干的那间，答不上来的住漏雨的那间，钱收一样多。信的和来查证的，客栈收一样多的钱。',
      '今晚问的是：头一个听懂碎片的人是谁，她在密室边上住了几年。',
      { if: 'is.divine', text: '老板看见你的打扮，请你带今晚的晚祷。堂屋里坐了十来个朝圣客，地精坐在最前排，锅放在膝盖上。' },
      '再往前只剩最后一段崖路。崖上凿着台阶，有些台阶被雨冲得只剩半截。',
    ],
    choices: [
      {
        text: '答木牌上的问题',
        once: true,
        check: { skill: 'religion', alt: ['history'], dc: 13, party: true },
        ok: { text: '“托丽丝。她在密室边上搭了营，一住好些年。”老板把干的那间钥匙给了你。', effects: ['rest short'] },
        fail: { text: '你答了个年份，差了二十年。漏雨那间屋顶上，雨水滴进一只铜盆，响了一整夜。', effects: ['hp -2'] },
      },
      {
        text: '带今晚的晚祷',
        tag: '神职',
        if: 'is.divine',
        once: true,
        effects: ['rest short', 'approval narwen +1'],
        result: '你念完了。{?party.narwen:娜尔雯坐在后排听完，散场时纠正了你一个年份，1638 年，不是 1636 年。|地精说你念得比他舅舅好。}',
      },
      {
        text: '爬最后那段崖路',
        check: { skill: 'athletics', alt: ['acrobatics'], dc: 14, party: true },
        ok: { text: '你们拿绳子把人一个一个吊上去。崖顶上有一块平地，平地底下就是那间密室。', goto: 'a3_13' },
        fail: { text: '半截台阶在你脚下塌了。你抓住一根树根，挂了一会儿，被人拽了上去，手心磨掉一层皮。', effects: ['hp -6'], goto: 'a3_13' },
      },
    ],
  },

  a3_13: {
    id: 'a3_13',
    title: '四根柱子',
    art: 'load_7',
    loc: '诺鲁因 · 四根柱子的密室',
    text: [
      '密室在地下，下去要走四十一级台阶。四根柱子撑着屋顶，粗得像树干，柱身上的纹路谁也认不得，比先驱精灵的帝国还老。屋子正当中，一方石头台座。',
      '照 1585 年的记载，碎片当年悬在台座上方，两样没挨着。碎片运去坎诺两百多年了，台座还在响。声音又高又快，一口气说完就停，停一会儿再说。',
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）它说的一直是“他们”。剩下两个词。一个是“门”。（不确定。）另一个，既能当命令，也能当陈述。' },
      { if: '!party.middlesday', text: '你们对着娜尔雯的译码表，一个音一个音地对。对到最后剩两个词：一个是“门”，另一个，既能当命令，也能当陈述。' },
      { if: 'is.mechanim', text: '你不用译码。那个音一进耳朵就是字。你听见的比礼拜三多半个音，那半个音很轻，是一口气。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '把门关上。理论上这是一道命令，有命令就有下命令的人。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '门关着。它在报告。一百多年来它一直在报告。' },
      { if: 'party.bura', speaker: '布拉', text: '门是从里面关的。（铰链咔的一声。）当兵的都听得出来，是有人在里头守着。' },
      { if: '!party.guilhem && !party.narwen && !party.bura', speaker: '别摇', text: '三种念法都对。你们的话就这个毛病。' },
      { if: 'party.narwen', text: '娜尔雯趴到台座底下，拿手指摸到了几道刻痕。她说那是托丽丝的记号。又说，1666 年以后那些声音里，有一个她认得。' },
      { if: 'is.god', text: '你一进门，台座换了调。你听见的那一句，和礼拜三听见的不是同一句。两句都记了下来，记在同一页上，中间空着一行。' },
      { if: 'is.god && flag.fragment_hushed && party.narwen', text: '娜尔雯先看了你一眼，才去看台座。' },
      { if: 'is.god && party.middlesday', speaker: '礼拜三', text: '（害怕。）你造过我们吗。' },
    ],
    first: ['item +phrase_record', 'codex c_chamber', 'codex c_torrieth', 'codex c_phrase', 'quest q_phrase stage 2'],
    choices: [
      {
        text: '答它：没有',
        tag: '神',
        if: 'is.god && party.middlesday && !flag.a3x_god_answered',
        once: true,
        effects: ['flag a3x_god_answered', 'approval middlesday +1'],
        result: '（陈述。）好。（不确定。）那是谁。它没等你回答，转过去接着听台座了。',
      },
      {
        text: '答它：不知道',
        tag: '神',
        if: 'is.god && party.middlesday && !flag.a3x_god_answered',
        once: true,
        effects: ['flag a3x_god_answered', 'approval middlesday -1'],
        result: '（害怕。）神也不知道。（陈述。）我记下了。它在自己的停机日志上添了一行。',
      },
      {
        text: '在台座底下找那些刻痕',
        once: true,
        check: { skill: 'perception', alt: ['investigation'], dc: 14, party: true },
        ok: { text: '刻痕在台座北面，七道一组，一共二十四组。你们拿炭条拓了下来，拓到最后一组，炭条断了。', effects: ['item +torrieth_rubbing'] },
        fail: { text: '你在台座底下摸了半天，摸到的是一窝蝎子。拓片没拓成。', effects: ['hp -3'] },
      },
      {
        text: '跟着那个音，把译码对完',
        once: true,
        check: { skill: 'arcana', alt: ['religion'], dc: 15, party: true, adv: 'is.caster || is.divine' },
        ok: { text: '你对上了。两个词，三种念法，哪一种都不多一个音，也不少一个。', effects: ['flag a3x_decoded'] },
        fail: { text: '那个音钻进脑子里，你头疼了一整夜。第二天早上，你梦里还是它。', effects: ['hp -4'] },
      },
      {
        text: '用法术把那个音定在半空，慢慢听',
        tag: '施法者',
        if: 'is.caster && !flag.a3x_decoded',
        once: true,
        effects: ['flag a3x_decoded', 'approval narwen -1'],
        result: '{?world.tears <= 2:法术只撑了十几口气就散了，刚够你听一遍。|音定住了，一个一个排在空中。}台座的调门跟着低了半个音。娜尔雯皱了眉，把这件事记进了本子。',
      },
      {
        text: '台阶上有脚步声，收拾东西',
        goto: 'a3_13b',
      },
    ],
  },

  a3_13b: {
    id: 'a3_13b',
    title: '披风卫',
    loc: '诺鲁因 · 四根柱子的密室',
    text: [
      '台阶上下来六个人，披风都搭在左肩，剑上带咒。后面跟着两个分形修会的人，背着仪器箱。领头的递过来一张文书，盖着文森顿大监院的章。',
      { speaker: '披风卫队长', text: '奉大监院令，封存此室。另，那台会说神的话的机器，随我们回文森顿。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（礼貌。）我不说神的话。（陈述。）我只说它说的话。' },
      { if: '!party.middlesday && is.mechanim', text: '他说这句话的时候，看着的是你。' },
      { if: '!party.middlesday && !is.mechanim', text: '他四下看了一圈，没找到机器，改口要你们的笔记。' },
      { if: 'flag.cloakmen_fought', text: '他们队里有人认得你们。那人的披风上有一道补过的口子。' },
    ],
    choices: [
      {
        text: '交出笔记让他们查，袖子里藏一份',
        check: { skill: 'sleight', dc: 14, party: true },
        ok: { text: '他们翻了三遍，没翻到你袖子里那几页。队长收了笔记，没再提机器的事。', effects: ['rep church +1', 'approval middlesday -1'], goto: 'a3_14' },
        fail: { text: '他们连袖子也翻了。笔记一页没剩，好在娜尔雯背得下来，她一路背到了山脚。', effects: ['item -phrase_record', 'rep church +1', 'approval middlesday -1'], goto: 'a3_14' },
      },
      {
        text: '让娜尔雯拿资历压他们',
        if: 'party.narwen',
        check: { skill: 'religion', alt: ['persuasion'], dc: 15, party: true },
        ok: { text: '她报了自己入会的年份：1659。队长的祖父那年还没生。他们退回台阶顶上，站岗站到你们走。', goto: 'a3_14' },
        fail: { text: '队长听完年份，客客气气地说，文书上盖的章比他祖父年轻，可章就是章。他收走了笔记。', effects: ['item -phrase_record', 'rep church -1'], goto: 'a3_14' },
      },
      { text: '动手', if: 'partysize >= 4', effects: ['flag cloakmen_fought', 'rep church -2'], combat: { ...CLOAK_BASE, enemies: C5 } },
      { text: '动手', if: 'partysize == 3', effects: ['flag cloakmen_fought', 'rep church -2'], combat: { ...CLOAK_BASE, enemies: C4 } },
      { text: '动手', if: 'partysize == 2', effects: ['flag cloakmen_fought', 'rep church -2'], combat: { ...CLOAK_BASE, enemies: C3 } },
      { text: '动手', if: 'partysize <= 1', effects: ['flag cloakmen_fought', 'rep church -2'], combat: { ...CLOAK_BASE, enemies: C2 } },
    ],
  },

  a3_14: {
    id: 'a3_14',
    title: '两个词',
    art: 'ev_the_heroine',
    loc: '真理之路 · 朝圣客栈',
    date: '1828年花终月',
    text: [
      '回程又住进那家朝圣客栈。半夜，客栈的传音石响了。老板披着衣服去接，接完站在楼梯口，半天没说话。',
      '贝尔纳二世去世了。教廷要选新的总院长，一边是真言师伊莲·西纳·阿尔科，一边是文森顿的灰磨大监院。你手里这份记录落到谁手里，票就往哪边走。客栈里正好住着两个人，一个替伊莲跑腿，一个替灰磨跑腿，都是今晚到的。',
      { if: 'party.narwen', speaker: '娜尔雯', text: '它出了那间屋，就不是它了，是一张传单。我听了一百六十二年，不是为了听一张传单。' },
      { if: 'party.narwen', text: '她把本子抱在怀里，眼镜摘下来擦了一遍，又擦了一遍。' },
      { if: '!party.narwen', text: '娜尔雯没跟来。记录里夹着她一张字条：别让它出那间屋。' },
      { if: 'flag.bernal_confided', text: '你想起老人咽回去的那半句：这些年，它反复只说一句。' },
    ],
    first: ['quest q_narwen stage 2'],
    choices: [
      {
        text: '不管她，交给史家会登出来',
        effects: ['flag phrase_published', 'unflag phrase_sold', 'unflag phrase_kept', 'unflag phrase_signed', 'world press +2', 'rep church -2', 'flag rector_erudite', 'unflag rector_zealot', 'flag narwen_left', 'companion -narwen', 'quest q_phrase done', 'quest q_narwen fail'],
        result: '史家会的人连夜抄了三份。娜尔雯天亮前走了，往阿兰蒂尔塔去，伞忘在了门后。',
        goto: 'a3_15',
      },
      {
        text: '卖给伊莲的人',
        effects: ['flag phrase_sold', 'unflag phrase_published', 'unflag phrase_kept', 'unflag phrase_signed', 'flag rector_erudite', 'unflag rector_zealot', 'gold +500', 'world press -1', 'flag narwen_left', 'companion -narwen', 'quest q_phrase done', 'quest q_narwen fail'],
        result: '伊莲的人数了五百金冠，又写了一张收条，收条上的字比钱还工整。娜尔雯没说话，第二天就回了塔。',
        goto: 'a3_15',
      },
      {
        text: '卖给灰磨的人',
        effects: ['flag phrase_sold', 'unflag phrase_published', 'unflag phrase_kept', 'unflag phrase_signed', 'flag rector_zealot', 'unflag rector_erudite', 'gold +800', 'world press -1', 'flag narwen_left', 'companion -narwen', 'quest q_phrase done', 'quest q_narwen fail'],
        result: '他付了八百金冠，当着你的面把记录塞进了炉子。他买来是为了埋掉。娜尔雯看着炉子烧完，才走。',
        goto: 'a3_15',
      },
      {
        text: '替她守住，锁进埃塔的铁箱',
        effects: ['flag phrase_kept', 'unflag phrase_published', 'unflag phrase_sold', 'unflag phrase_signed', 'flag box_phrase', 'flag rector_zealot', 'unflag rector_erudite', 'approval narwen +2', 'quest q_phrase done'],
        result: '两个跑腿的都空着手走了。一个月以后，灰磨当选，票数差了三张。娜尔雯在本子上记下了这个数。',
        goto: 'a3_15',
      },
      {
        text: '劝她自己署名公开',
        tag: '灯',
        if: "party.narwen && faction == 'lantern'",
        once: true,
        check: { skill: 'persuasion', dc: 15, mods: [{ if: 'flag.bernal_confided', n: 2, why: '老人咽回去的那半句' }, { if: 'flag.heard_hum', n: 1, why: '你也听过它一声' }, { if: 'flag.a3x_decoded', n: 1, why: '你自己对过译码' }] },
        ok: { text: '她想了一夜。天亮的时候，她在记录的末尾签了名：分形修会，娜尔雯·望月，1659 年入会。签完她说，上回有人这么签名，是托丽丝。', effects: ['flag phrase_signed', 'unflag phrase_published', 'unflag phrase_sold', 'unflag phrase_kept', 'world press +2', 'flag rector_erudite', 'unflag rector_zealot', 'approval narwen +1', 'quest q_phrase done'], goto: 'a3_15' },
        fail: { text: '“还不行。”她说，“我还没问它那句话。”她把本子抱紧了一点。', effects: ['approval narwen -1'], goto: 'a3_14' },
      },
      {
        text: '劝她自己署名公开',
        if: "party.narwen && faction != 'lantern' && approval.narwen >= 5",
        once: true,
        check: { skill: 'persuasion', dc: 15, mods: [{ if: 'flag.bernal_confided', n: 2, why: '老人咽回去的那半句' }, { if: 'flag.heard_hum', n: 1, why: '你也听过它一声' }, { if: 'flag.a3x_decoded', n: 1, why: '你自己对过译码' }] },
        ok: { text: '她想了一夜。天亮的时候，她在记录的末尾签了名：分形修会，娜尔雯·望月，1659 年入会。签完她说，上回有人这么签名，是托丽丝。', effects: ['flag phrase_signed', 'unflag phrase_published', 'unflag phrase_sold', 'unflag phrase_kept', 'world press +2', 'flag rector_erudite', 'unflag rector_zealot', 'approval narwen +1', 'quest q_phrase done'], goto: 'a3_15' },
        fail: { text: '“还不行。”她说，“我还没问它那句话。”她把本子抱紧了一点。', effects: ['approval narwen -1'], goto: 'a3_14' },
      },
    ],
  },

  a3_15: {
    id: 'a3_15',
    title: '证词',
    loc: '伊索贝尔港 · 联盟巡回法庭',
    date: '1828年泪落月',
    text: [
      '巡回法庭借的是伊索贝尔港的旧谷物交易所。柜台改成了证人席，墙上的价目板没擦干净，还写着“棉，每包”。旁听席坐满了，一半是种植园的账房，一半是码头上的人，中间隔着一排治安员。',
      '法官同意采信魂秤对一颗醒着的芯核的读数，条件是当庭上秤。秤一接上，那道口子会被拉开一下。拉开多久，蒂尔妲也说不准{?flag.gauge_burned:，这杆秤是她凭记忆重做的|}。',
      { speaker: '莫里斯·安德克利夫', text: '我不要恩赐。我要一个判例。判例管得了下一个。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（担心。）我可能会睡过去。（礼貌。）睡过去以前，我想先把名字说完。' },
      { if: 'is.god', speaker: '法官', text: '本庭不采信神迹。请证人上秤。' },
      { if: 'is.god', text: '你不用秤也看得见芯核里有什么。这不算证据。法院门口有人开了盘口，赌你会不会流血，一赔七。' },
    ],
    first: ['quest q_middlesday stage 2'],
    choices: [
      {
        text: '让礼拜三上秤',
        if: 'party.middlesday',
        check: {
          skill: 'arcana', dc: 16, party: true,
          mods: [
            { if: 'flag.engine_ledger', n: 3, why: '账本替它少挨了半刻钟' },
            { if: 'flag.gauge_tested_m', n: 1, why: '它上过一回秤' },
            { if: 'flag.m_member', n: 1, why: '名册上它是成员' },
            { if: 'flag.a3x_tilda_calibrated', n: 1, why: '蒂尔妲开庭前校过' },
            { if: 'flag.gauge_open', n: 1, why: '图纸公开了，人人校得了' },
            { if: 'flag.gauge_sold', n: -1, why: '秤是卡拉桑尼的' },
            { if: 'flag.gauge_burned', n: -2, why: '那杆秤是凭记忆重做的' },
          ],
        },
        ok: { text: '指针摆过去，又摆回来。礼拜三醒着下了秤，第一句话是：（陈述。）内莉。老科尔。阿萨。霍布。马蒂。它把名字说完了。', effects: ['flag m_testified', 'unflag m_dormant', 'unflag m_left', 'quest q_middlesday done'], goto: 'a3_15b' },
        fail: { text: '指针摆过去，没有摆回来。礼拜三说到“阿萨”就停了，眼睛还亮着，人不在了。法警把它抬下了证人席，它还在公司的名单上。', effects: ['flag m_dormant', 'unflag m_testified', 'unflag m_left', 'companion -middlesday', 'quest q_middlesday fail'], goto: 'a3_15b' },
      },
      {
        text: '不许它去',
        if: 'party.middlesday',
        effects: ['flag m_left', 'unflag m_testified', 'unflag m_dormant', 'companion -middlesday', 'quest q_middlesday fail'],
        result: '（愤怒。）那我自己去别处说。它把行李码齐，买了一张回安本科斯特的船票。一个月后，铸炉街头一回停了工，领头的是一台机器。',
        goto: 'a3_15b',
      },
      {
        text: '你自己上秤',
        tag: '机械人',
        if: "origin == 'unowned' && is.mechanim",
        check: {
          abil: 'con', dc: 15, save: true,
          mods: [
            { if: 'flag.engine_ledger', n: 3, why: '账本替你少挨了半刻钟' },
            { if: 'flag.a3x_tilda_calibrated', n: 1, why: '蒂尔妲开庭前校过' },
            { if: 'flag.gauge_open', n: 1, why: '图纸公开了' },
            { if: 'flag.gauge_sold', n: -1, why: '秤是卡拉桑尼的' },
            { if: 'flag.gauge_burned', n: -2, why: '凭记忆重做的秤' },
          ],
        },
        ok: { text: '口子拉开的那一下，你听见了台座的那个音。然后你醒着下了秤，法官在记录上写下了你在七号线的工位号。', effects: ['flag pc_testified'], goto: 'a3_15b' },
        fail: { text: '你下秤的时候，法官问你今天礼拜几。你答了，答的是去年的日子。读数照样算数。', effects: ['flag pc_testified', 'flag pc_lost_year'], goto: 'a3_15b' },
      },
      {
        text: '用手替它按住那道口子',
        tag: '神',
        if: 'is.god && party.middlesday',
        effects: ['flag a3x_void', 'var cult +1', 'approval middlesday +1'],
        result: '秤上的指针一动没动。礼拜三没有睡过去，读数作废。法官在记录上写：证人受到超自然干预。门口的赌档宣布这一局不算，钱一个子儿也没退。',
        goto: 'a3_15b',
      },
      {
        text: '没有可以上秤的证人，直接请求裁定',
        if: "!party.middlesday && !(origin == 'unowned' && is.mechanim)",
        goto: 'a3_15b',
      },
    ],
  },

  a3_15b: {
    id: 'a3_15b',
    title: '裁定',
    loc: '伊索贝尔港 · 联盟巡回法庭',
    text: [
      '下午，法官问原告方，请求本庭怎么判。安德克利夫看了你一眼，他把这一条让给了公司。',
      { if: 'flag.m_testified || flag.m_dormant || flag.pc_testified', text: '记录上已经有了一个读数：芯核醒着的时候，那道口子开着；口子开着，里头有东西。' },
      { if: 'flag.engine_ledger', text: '机房的流水账摆在书记官桌上，每个月一颗“报废”，十二个月十二颗。' },
      { if: '!(flag.m_testified || flag.m_dormant || flag.pc_testified) && !flag.engine_ledger', text: '记录上什么也没有。戴纽奇家的律师在对面坐着，指甲修得很干净。' },
      '三种判法，哪一种都留着一样东西不判。',
    ],
    choices: [
      {
        text: '把机房的流水账当庭念出来',
        tag: '灯',
        if: "faction == 'lantern' && flag.engine_ledger",
        once: true,
        effects: ['world press +1'],
        result: '你念了十二个月的“报废”。念到第九个月，旁听席上有人站起来走了，是戴纽奇家的账房。',
      },
      {
        text: '只请求判芯核：醒着的芯核不是财物',
        if: 'flag.m_testified || flag.m_dormant || flag.pc_testified || flag.engine_ledger',
        effects: ['flag ruling_cores', 'unflag ruling_both', 'unflag engine_licensed', 'world chains -1', 'world press +1'],
        result: '法官判了。醒着的芯核不得登记为财物。散庭的时候，码头上的人往外走，戴镣的那几个还得从后门走。',
        goto: 'a3_16',
      },
      {
        text: '把芯核和戴镣的人写进同一张裁定',
        if: "(flag.m_testified || flag.m_dormant || flag.pc_testified) && flag.engine_ledger && faction != 'seal'",
        req: 'world.press >= 4 || rep.church >= 3',
        reqText: '要见报到 4，或者教会的声望到 3',
        effects: ['flag ruling_both', 'unflag ruling_cores', 'unflag engine_licensed', 'world chains -2', 'world press +1', 'rep charter -2'],
        result: '法官判了，一张纸管了两样。当晚联盟议会紧急开会，马利安德的议员退席，退了一半又回来，联盟差点为此散伙。',
        goto: 'a3_16',
      },
      {
        text: '由你写结案陈词：芯核和戴镣的人一并裁定',
        tag: '印',
        if: "(flag.m_testified || flag.m_dormant || flag.pc_testified) && flag.engine_ledger && faction == 'seal'",
        req: 'world.press >= 3 || rep.church >= 3',
        reqText: '要见报到 3，或者教会的声望到 3',
        effects: ['flag ruling_both', 'unflag ruling_cores', 'unflag engine_licensed', 'world chains -2', 'world press +1', 'rep charter -2'],
        result: '你的陈词只有一页，引的全是联盟自己的法条。法官照着判了。当晚马利安德的议员退席，联盟差点为此散伙。',
        goto: 'a3_16',
      },
      {
        text: '和解：给机房发执照，换它不再收醒过的芯核',
        effects: ['flag engine_licensed', 'unflag ruling_cores', 'unflag ruling_both', 'world chains +1', 'rep charter +2'],
        result: '执照第二天就发下来了，一张纸，三个章。文森顿穷人街上的四百一十盏路灯，当晚照常亮。',
        goto: 'a3_16',
      },
    ],
  },

  a3_16: {
    id: 'a3_16',
    title: '机房起火',
    art: 'ev_damestear_core',
    loc: '文森顿 · 城北机房',
    text: [
      { if: 'flag.engine_licensed', text: '裁定下来的当夜，机房起了火。放火的是暗线上气不过的人，他们说，执照就是许可。' },
      { if: '!flag.engine_licensed', text: '裁定下来的当夜，机房起了火。火是从账房烧起来的，放火的人穿着财团的号衣，是来烧账的。' },
      '炉膛里十二颗芯核还在响，火一近，调门全往高里走。挡在炉门前的是一台四条胳膊的战争型，胸口那颗芯核叫得最响。它还在执行最后一道命令：守住炉门。',
      { if: 'party.middlesday', speaker: '礼拜三', text: '（愤怒。）那一颗我认识。七号线，1811 年三月的料。别打它胸口。' },
      { if: '!party.middlesday', text: '它胸口的铜牌被火烤得发红，编号还看得清：七号线，1811。' },
      '街上的路灯一盏一盏地暗下去，从机房这头往外暗。穷人街上的人端着盆出来看火。',
    ],
    choices: [
      { text: '冲进炉房', if: 'partysize >= 4', combat: { ...FIRE_BASE, enemies: F5 } },
      { text: '冲进炉房', if: 'partysize == 3', combat: { ...FIRE_BASE, enemies: F4 } },
      { text: '冲进炉房', if: 'partysize == 2', combat: { ...FIRE_BASE, enemies: F3 } },
      { text: '冲进炉房', if: 'partysize == 1', combat: { ...FIRE_BASE, enemies: F2 } },
      { text: '冲进炉房', if: 'partysize <= 0', combat: { ...FIRE_BASE, enemies: F1 } },
    ],
  },

  a3_17: {
    id: 'a3_17',
    title: '洇河口',
    loc: '洇河口 · 码头',
    text: [
      '洇河口有两面旗，两座税关。联盟的税关在南岸，萨尔达的税关在北岸，中间一条河，河上漂着运棺材的驳船和收过路钱的小艇。博克人的王庭在河心的岛上，两家都管它，所以哪一家的拘票都递不进去。',
      { if: 'flag.engine_burned', text: '文森顿的火烧了两天。烟顺着河往下走，到洇河口的时候已经看不见了，只剩一股热铁皮的气味。' },
      { if: '!flag.engine_burned', text: '文森顿的机房保住了。听说穷人街上的路灯第二天就亮了，比先前还亮一点。' },
      { if: 'flag.contract_planters', text: '你是追到这儿来的。他们踩上码头的时候，你站在船头，一步也跟不过去。码头上的人看着你，像看一条靠错了岸的船。' },
      { if: '!flag.contract_planters && flag.levee_lost', text: '下船的是十四个。九个在河堤上被抓了回去，霍布是其中一个，他的脚走不快。' },
      { if: '!flag.contract_planters && !flag.levee_lost', text: '二十三个人都下了船。{?flag.a3x_toby:托比是第二十四个，算不算在清单上，没人知道。|}阿萨替船家撑了最后一段，内莉上岸先找了一口井。' },
      { if: 'flag.town_shelters', text: '塞斯提尔边区那个镇的谷仓收过他们三夜。马蒂在谷仓的墙上刻了个记号，说下一拨人看得懂。' },
      { if: 'flag.levee_sanctuary', text: '他们是从“神的庇护所”那段堤上走过来的。有人还留着你袖口上的一根线头，拿布包着。' },
      { if: 'flag.bura_alone && world.chains <= 5', text: '码头上有人捎来布拉的消息：她带着一队人往北走了，多少人没说，只说她走在最后。' },
      { if: 'flag.bura_alone && world.chains > 5', text: '布拉的消息，码头上没人说得清。有人说在北边见过一个下巴是黄铜的兽人，有人说那是去年的事。' },
      { if: 'flag.bura_armed', text: '下船的人里，有三个背着拉姆斯盖特的枪，枪托上的字号拿泥糊住了。' },
      { if: 'flag.bura_line', text: '布拉站在码头上数人，数一个，拍一下肩。' },
      { if: "origin == 'lorent'", text: '血林外海停着三条洛伦特的船。林卫上将的分舰队放下一条小艇，靠到码头上，艇上的人要见你。' },
      { if: "origin != 'lorent'", text: '天边停着几条船，挂的是洛伦特的旗，没靠过来。' },
    ],
    first: ['quest q_bill done'],
    choices: [
      {
        text: '去河心的王庭，请他们把“不认拘票”写成一句明文',
        once: true,
        check: {
          skill: 'persuasion', dc: 16, party: true,
          mods: [
            { if: 'flag.town_shelters', n: 1, why: '塞斯提尔边区开过先例' },
            { if: 'rep.south >= 3', n: 1, why: '南岸的人替你说话' },
            { if: 'flag.ruling_both', n: 1, why: '伊索贝尔港的裁定刚登了报' },
          ],
        },
        ok: { text: '博克人的老王听完，叫书记写了一句：本岛不认两岸拘票。他盖了章，又说这句话两岸都会骂。联盟和萨尔达为此又吵了六年。', effects: ['flag ynns_free_soil', 'world chains -1'] },
        fail: { text: '老王收下了你们带去的礼，说要先问问河神。河神的意思，要等到雨季以后。', effects: ['gold -50'] },
      },
      {
        text: '上小艇见林卫上将',
        tag: '洛伦特',
        if: "origin == 'lorent' && !flag.a3x_glade_done",
        goto: 'a3_17b',
      },
      {
        text: '去萨尔达税关隔壁的鱼馆吃饭',
        goto: 'a3_18',
      },
    ],
  },

  a3_17b: {
    id: 'a3_17b',
    title: '林卫上将',
    loc: '洇河口外 · 洛伦特的小艇',
    text: [
      '小艇上坐着的就是埃雷拉斯·林卫本人。他是 1449 年生的精灵，比他封锁的每一块殖民地都老。制服上的金线磨白了，帽子放在膝盖上。',
      { speaker: '埃雷拉斯·林卫', text: '那枚别针我认得。女王的侍读戴这个。你们船上有几个是从血林那边跑出来的，我要人，照名单。' },
      '他递过来一张名单，两个名字。都不在二十三个人里，可都在你们船上。{?party.bura:布拉在码头上看着这条小艇，手搭在枪套上。|}',
    ],
    choices: [
      {
        text: '回绝他',
        effects: ['flag a3x_glade_done', 'flag gladeguard_refused', 'rep wand -2', 'rep union +1'],
        result: '他把名单折好，收回口袋，戴上帽子。“女王会知道的。”他说。“女王什么都知道。”',
        goto: 'a3_17',
      },
      {
        text: '交两个人给他，做做样子',
        effects: ['flag a3x_glade_done', 'rep wand +1', 'world chains +1', 'approval bura -3'],
        result: '两个人上了小艇，没回头。林卫上将向你致了礼，礼行得很标准。',
        goto: 'a3_17',
      },
      {
        text: '拿白玫瑰别针唬他：这两个是使馆要的人',
        check: { skill: 'deception', dc: 16, adv: 'item.whiterose_pin' },
        ok: { text: '他看了别针很久，又看了你很久。“使馆的事，我不过问。”小艇划走了，两个人还在你们船上。', effects: ['flag a3x_glade_done'], goto: 'a3_17' },
        fail: { text: '“使馆上个月的公文里没这两个人。”他说。他没要人，可他把你的名字记进了航海日志。', effects: ['flag a3x_glade_done', 'rep wand -1'], goto: 'a3_17' },
      },
    ],
  },

  a3_18: {
    id: 'a3_18',
    title: '穿好料子的客人',
    art: 'ev_dragon_fly',
    loc: '洇河口 · 萨尔达税关隔壁的鱼馆',
    text: [
      '鱼馆在萨尔达税关隔壁，门口挂着一串晒干的鲶鱼。你们刚坐下，上游来了一位客人，料子很好，耳朵尖，脸色白里透青，是遗迹精灵的样子。他自己找过来拼桌，点了全店的鱼。',
      { speaker: '穿好料子的客人', text: '你身上有青铜味儿。替我问他好。' },
      '他叫瓦伦盖尔特，三百八十四岁，洇河上游有人供着他，身体很好。他拿同行的口气聊当神这门买卖：什一税怎么收，节庆排在哪个月，头一回歉收那年该说什么。',
      { speaker: '瓦伦盖尔特', text: '什一税要秋天收，人手里有粮。春天收，他们就开始问你到底保佑了什么。' },
      '然后他说起了你们的合伙人。没人拜的老家伙会累。阿赫特到现在还喘着气，兴许只因为有个被他扔下的帝国，每天黄昏给他点灯，一万盏。',
      { speaker: '瓦伦盖尔特', text: '他穿着你们共和国的将军制服。泽拉特那一仗以后，他再没飞过。他说那一仗是平手。他输的仗都叫平手。' },
      { if: 'party.bura', speaker: '布拉', text: '醉话。龙喝多了也是醉话。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '他没撒谎。他什么都往外说，所以没人信。我信一半。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '将军给我们写过推荐信。理论上，龙也会签字。实际上，我得回去对一对笔迹。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）合伙人的汇票是安本科斯特一家行开的。（不确定。）龙也用银行吗。' },
      { if: '!party.bura && !party.narwen && !party.guilhem && !party.middlesday', speaker: '别摇', text: '他说的是真话。真话最便宜，所以他到处送。' },
      { if: '!party.bura && !party.narwen && !party.guilhem && !party.middlesday', text: '第二天埃塔的回电到了：一头龙？账上没这一栏。我划一栏。' },
      { if: 'is.god', text: '他看见你，又叫了一壶酒，换了个座位，坐到你正对面。' },
      { if: 'is.god', speaker: '瓦伦盖尔特', text: '香火钱你怎么入账？我这儿三七开，三成归庙，七成修堤。洇河上有两个节，我让给你，日子随你挑。条件是你别在我的地界上显灵。' },
    ],
    first: ['flag partner_known', 'quest q_partner stage 3', 'codex c_varlengeilt', 'codex c_aakhet', 'codex c_hakhepra'],
    choices: [
      {
        text: '跟他提萨拉哈德沙漠那一仗',
        once: true,
        check: { skill: 'history', dc: 15, party: true },
        ok: { text: '他笑得很开心，拍着桌子说：“平手！他到今天还说是平手！”然后多送了你一句：泽拉特那门炮是卡塔拉什亚造的，专打龙鳞，他是掉进湖里的。', effects: ['flag a3x_zerat'] },
        fail: { text: '你把泽拉特和萨拉哈德说反了。他耐心地纠正了你，又加了两条鱼，账记在你们桌上。', effects: ['gold -30'] },
      },
      {
        text: '看他说的是不是真话',
        once: true,
        check: { skill: 'insight', dc: 15 },
        ok: { text: '他没撒谎。他说话的时候手一直在剥鱼刺，一根没落下，说到阿赫特的时候也没停。', effects: ['approval narwen +1'] },
        fail: { text: '你看不出来。他说什么都是同一副笑脸，说自己的生日和说别人的死期，一样高兴。', effects: ['approval bura +1'] },
      },
      {
        text: '收下那两个节',
        tag: '神',
        if: 'is.god && !flag.a3x_festivals && !flag.a3x_fest_no',
        once: true,
        effects: ['flag a3x_festivals', 'var cult +1', 'rep south +1', 'rep church -1'],
        result: '他把两个节的日子写在餐巾上，推给你。往后洇河上游的人，每年有两天朝你那个方向烧香。揭秘教的院长听说了，写了一封很长的信。',
      },
      {
        text: '回绝他',
        tag: '神',
        if: 'is.god && !flag.a3x_festivals && !flag.a3x_fest_no',
        once: true,
        effects: ['flag a3x_fest_no', 'rep south -1'],
        result: '“随你。”他耸耸肩，“头一回他们原谅你。第二回他们换神。”他把餐巾揉成一团，擦了擦手。',
      },
      {
        text: '结账，去电报房',
        goto: 'a3_19',
      },
    ],
  },

  a3_19: {
    id: 'a3_19',
    title: '第三份报告',
    loc: '洇河口 · 电报房',
    text: [
      '洇河口的电报房在联盟税关的二楼。一根线通伊索贝尔港，再转安本科斯特。报务员是个半身人，按字收钱，标点另算，问号最贵。',
      '这回你知道读报告的是谁了。埃塔的回电先到了，只有一行：照常写，我照常记。',
      { if: 'flag.partner_engine_share', speaker: '埃塔（电报）', text: '另：机房的股，他上个月也撤了。代理人原话：供不起。' },
      { if: 'flag.report2_named_general', text: '上一回你在抬头写了“将军阁下”。他回过一封亲笔信，谈的是天气。' },
      { if: 'flag.a3x_zerat', text: '你手里还有鱼馆那位多送的一句：泽拉特那门炮，专打龙鳞。' },
      { if: "origin == 'concord'", text: '镇议会也来了电报，点名要一份抄件。电报的落款是“全体议员”，下面列着表决结果，十一比零。' },
    ],
    choices: [
      { text: '另抄一份，寄给老连队的文书', tag: '安本纳尔', if: "origin == 'anbennar' && !flag.a3x_home_done", once: true, effects: ['flag a3x_home_done', 'var home_copies +1', 'rep republic +1'], result: '老连队的文书回了一张明信片，上面是旧斗兽场，背面写：收到，别再惹事。' },
      { text: '给使馆的那份照实写', tag: '洛伦特', if: "origin == 'lorent' && !flag.a3x_home_done", once: true, effects: ['flag a3x_home_done', 'var home_copies +1', 'rep wand +1'], result: '你拿使馆的密码本译了一遍，译到“青铜”两个字，密码本里没有，只好拼。' },
      { text: '给使馆的那份写薄一点', tag: '洛伦特', if: "origin == 'lorent' && !flag.a3x_home_done", once: true, effects: ['flag a3x_home_done', 'var home_copies +1', 'var embassy_gap +1', { if: 'flag.codebook_seen', then: ['rep republic +1'] }], result: '使馆那份只写了鱼。{?flag.codebook_seen:共和国海关早抄过那本密码，他们读到的也是鱼。|}' },
      { text: '照镇议会的要求抄一份', tag: '巨魔湾', if: "origin == 'concord' && !flag.a3x_home_done", once: true, effects: ['flag a3x_home_done', 'var home_copies +1', 'rep charter +1'], result: '抄件寄走了。一个月以后镇议会回电：已阅，下月表决是否存档。' },
      { text: '念给法德伦的工会听', tag: '无主者', if: "origin == 'unowned' && !flag.a3x_home_done", once: true, effects: ['flag a3x_home_done', 'var home_copies +1', 'rep union +1'], result: '你把稿子寄给铸炉街，工会的人在礼拜天的会上念了一遍。法德伦听完，只问了一句：机器那条，判没判。' },
      { text: '写进考察笔记', tag: '卡尔希尔', if: "origin == 'karshyr' && !flag.a3x_home_done", once: true, effects: ['flag a3x_home_done', 'var home_copies +1', 'rep south +1'], result: '考察笔记已经写到第三本。题目改过两回，这一回又改了：一家有限责任的冒险公司，和它的股东。' },
      {
        text: '写全',
        effects: ['flag report3_full', 'unflag report3_edited', 'unflag report3_lie', 'rep partner +1'],
        result: '报务员数了字，三百一十一个，标点四十二个。他问要不要省掉几个标点，你说不用。',
        goto: 'a3_20',
      },
      {
        text: '写全，末尾加一句：鱼馆里有人问您好',
        effects: ['flag report3_full', 'flag report3_named_bronze', 'unflag report3_edited', 'unflag report3_lie', 'rep partner -1'],
        result: '报务员把这句念了一遍，问要不要加标点。{?flag.report2_named_general:这是你第二回在纸上点破他。|}这一回，他没有回电。',
        goto: 'a3_20',
      },
      {
        text: '删掉鱼馆那一段',
        effects: ['flag report3_edited', 'unflag report3_full', 'unflag report3_lie'],
        result: '删完只剩一百零四个字。埃塔回电：短了。没说短在哪儿。',
        goto: 'a3_20',
      },
      {
        text: '编一份：货送到了，别的一切照常',
        check: { skill: 'deception', dc: 15 },
        ok: { text: '电报写得平平整整，读起来像一张收据。汇票照常到了，一分不少。', effects: ['flag report3_lie', 'unflag report3_full', 'unflag report3_edited', 'rep partner -1'], goto: 'a3_20' },
        fail: { text: '汇票照常到了，附了一行字：“洇河口的鱼好吃吗。”你没跟他说过你在洇河口吃过鱼。', effects: ['flag report3_lie', 'unflag report3_full', 'unflag report3_edited', 'rep partner -1', 'flag partner_knows_lie'], goto: 'a3_20' },
      },
    ],
  },

  a3_20: {
    id: 'a3_20',
    title: '数流星',
    art: 'ev_big_star_in_sky',
    loc: '洇河口 · 鱼馆的屋顶',
    text: [
      '鱼馆的屋顶是平的，晒着渔网。泪落月的夜里，洇河口的人都上房，带一张草席、一壶酒。河上两座税关都熄了灯，这是一年里两家唯一说好的一件事。',
      { if: 'world.tears >= 7', text: '那一夜落了三百多颗。有人数乱了，从头再数，又数乱了。' },
      { if: 'world.tears == 6', text: '那一夜落了二百来颗。' },
      { if: 'world.tears == 5', text: '那一夜落了一百五十颗上下。' },
      { if: 'world.tears == 4', text: '那一夜落了九十多颗。' },
      { if: 'world.tears == 3', text: '那一夜落了五十颗上下。' },
      { if: 'world.tears == 2', text: '那一夜落了二十几颗。' },
      { if: 'world.tears == 1', text: '那一夜落下来的，一只手数得过来。' },
      { if: 'world.tears <= 0', text: '那一夜一颗也没有。屋顶上的人坐到后半夜，把酒喝完，下楼了。' },
      '1809 年的历书上，这一栏写的是“数不过来”。',
      { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）比去年少。比明年多。' },
      { if: '!party.bura', text: '布拉不在。草席上放着她的一颗铰链螺丝，是她走那天落在行李里的。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）我数到了。（礼貌。）要我报给埃塔吗。' },
      { if: 'flag.m_left', text: '礼拜三不在。屋角码着它的行李，最小的一件放在最上面。' },
      { if: 'flag.m_dormant', text: '礼拜三坐在屋顶上，面朝南。它没有数。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '我小时候在梨林数过一回，数到一千就睡着了。理论上那一年还有更多。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '上回我在屋顶上数，是 1810 年。那回数不过来，我数的是天上空着的地方。' },
      { if: 'flag.narwen_left', text: '娜尔雯不在。她的备用眼镜搁在烟囱上，镜片朝天。' },
      { if: 'world.tears <= 2', text: '罐子里别摇的光暗得只剩一个点。' },
      { if: 'is.god', speaker: '别摇', text: '现在我欠你的，这辈子还不清了。这个我不原谅。' },
    ],
    first: ['level 8'],
    next: 'a4_01',
  },
};
