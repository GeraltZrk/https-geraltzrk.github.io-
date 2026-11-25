// s1444 act4.js — 第四幕《诸神之王》（BIBLE.md §11.5、§16.2）。1461 年秋进林，出林时外头是 1472 年。
//
// 场景提纲（谁 / 改变什么 / 去哪儿）
//   a4_01 九个冬天以后｜阿坦、守庙的姑娘、妮克西、蓝牙、阿罗莎｜乌什卡的底线检查；九年按 compact_* / proof_* /
//         empress_saved / groundhawk_deed 各两句；树皮回信；粉笔抄的四十一句；pixiebury_warned 的最后机会（容身+1）；
//         先锋行会的铺子；永生与神格各一段 → a4_02
//   a4_02 烧过的世界树（枢纽）｜四个同伴各一段、寄车的老头｜q_ushka done（好感够时）；可在此把泵房那句实话补上；
//         冷铁钉；短休 → a4_03
//   a4_03 青道｜娜拉雯、长老、加莱尔｜[木精灵] 报氏族；绿皮进不进厅（同伴好感 / 没人送）→ a4_03b
//   a4_03b 树皮纸｜娜拉雯｜必听的那一句；arun_notes 三种拿法（说服 / 加莱尔作保 / 偷）→ a4_04
//   a4_04 青道上的猎｜红帽子、妮克西｜求生检定，败了踩出桩外 → a4_04b
//   a4_04b 焦树皮甲｜黑枝亲王的骑士｜必打：有冷铁钉和没有两种打法；败了被赶进影林 → a4_05
//   a4_05 黑枝亲王的价｜黑枝亲王、妮克西、阿坦、乌什卡｜接（blackbranch_deal → a4_07）/ 不接（→ a4_06）
//   a4_06 缺一个傻子｜愚者亲王、妮克西｜过路费：toll_nixee / toll_years / toll_story（风声）/ toll_staff；
//         表演赢 fey_token；[无冕][地精][邪术师]；[神] 一个人扛十年（owes_fey_miracle）→ a4_07
//   a4_07 没有太阳的天｜阿坦数脉念晨祷、加莱尔、带路的｜道曼德劳德那一眼；奥布利格的帽子；感知豁免 → a4_08
//   a4_08 红冬｜加莱尔、乌什卡、阿坦｜q_door done；取了要还（没还的当晚起头一道红痕）；[精灵][神职] → a4_09
//   a4_09 血律｜河口的猎手、四个同伴｜按 var.lies 四档结算（lies_cursed）；notebook_sold 见光（garaele_leaving）；
//         说出来（lies_confessed）/ 带着走 / [神] 抹掉（多一句）→ a4_10
//   a4_10 塞拉河口的集（枢纽）｜伊什塔努姆、头人｜长休、商店、解咒、对方位（少走两天）、[试炼派] 摔跤 → a4_10b
//   a4_10b 血约｜伊什塔努姆｜contract_staff / relic_given（按出身的信物）；对她撒谎（lies+1，lies_cursed）→ a4_11
//   a4_11 饮血者｜必打，noAwe｜念血律头三条、点树脂；败 → a4_11b；胜 → a4_11c
//   a4_11b 拖回河边｜河口的猎手断后｜再打一回，敌人少两个 → a4_11c（再败 → a4_12）
//   a4_11c 没名字的｜乌什卡、阿坦｜烧过的树要补种；埋不埋老的那只 → a4_12
//   a4_12 断权杖｜阿坦比权杖头、加莱尔｜staff_seen；[施法者]；借走或不动 → a4_13
//   a4_13 守门的｜三尊守誓石像，noAwe｜举杖（end: 'win'）、照门楣答话、[战士系] 卡门洞；败 → a4_13b
//   a4_13b 第二回｜回神龛取了杖再来 → a4_14
//   a4_14 壁画厅（小枢纽）｜加莱尔、乌什卡、妮克西｜war_of_two_seen；三项检定；[退潮的人][负怨者][矮人] → a4_15
//   a4_15 最后一幅｜阿坦｜tan_read_it / tan_shielded（添一句则 lies+1）；[科琳的队伍]；[神] 替那位应一声 → a4_16
//   a4_16 头一场丧事｜四个同伴各一段｜rite_done、天平；[神职] 主礼；[承嗣][试炼派][无冕]；[达梅里亚之子] → a4_17
//   a4_17 那面墙｜四个人四个主张｜wall_rubbed / wall_sealed / 两样都做 / wall_defaced（阿坦留下，加莱尔要走）→ a4_18
//   a4_18 那根杖｜staff_home（血约在身则毁约）/ staff_returned → a4_18b
//   a4_18b 秋门｜愚者亲王伸手（toll_staff）｜交杖（staff_fey）/ 妮克西抵账 / 每人十年 → a4_18c
//   a4_18c 回去的路｜感知豁免，败了偏出三十里 → a4_19
//   a4_19 出林｜看车的男孩｜level 10；q_wall done；q_cart stage 5；外头是 1472 年 → f_01

// 血律的霉运：a4_09 之后本幕各检定 -2。
const CURSE = { if: 'flag.lies_cursed', n: -2, why: '血律记着你的话' };

// 阿坦数谎：var.lies 在这一幕里新到 3、6、9 时各问一回（进林前已经到过的档位在 a4_01 标掉，不重复扣）。
const TAN_COUNTS = [
  { if: 'var.lies >= 3 && !flag.a4_l3', then: ['flag a4_l3', { if: 'party.tan', then: ['approval tan -1', 'flag a4_tan_counts'] }] },
  { if: 'var.lies >= 6 && !flag.a4_l6', then: ['flag a4_l6', { if: 'party.tan', then: ['approval tan -1', 'flag a4_tan_counts'] }] },
  { if: 'var.lies >= 9 && !flag.a4_l9', then: ['flag a4_l9', { if: 'party.tan', then: ['approval tan -1', 'flag a4_tan_counts'] }] },
];

// ---- a4_04b：青道上的猎
const HUNT = {
  title: '青道上的猎',
  enemies: [{ id: 'blackened_knight', name: '黑枝亲王的骑士' }, { id: 'redcap', n: 4 }],
  xp: 900,
  win: { goto: 'a4_05' },
  lose: { effects: ['flag a4_hunt_lost', 'rest short'], goto: 'a4_05' },
};
const SP_NAILS = {
  id: 'nails', name: '把它们引到撒了钉子的那一段', desc: '冷铁：全体敌人受伤，迟缓一轮',
  success: { text: '领头的红帽子一脚踩上去，铁靴底冒了烟。后头三个收不住脚。连那个骑士也往后退了半步。', dmgAll: '3d6', type: 'piercing', applyAll: { cond: 'slowed', turns: 1 } },
};
const SP_SHOE = {
  id: 'horseshoe', name: '把马掌砸进红帽子堆里', desc: '旧铁凑合当冷铁使',
  check: { skill: 'sleight', dc: 15 },
  success: { text: '马掌在两个红帽子中间弹了一下。碰着的地方起了泡，它们尖叫着往后跳。', dmgAll: '2d6', type: 'bludgeoning', applyAll: { cond: 'slowed', turns: 1 } },
  fail: { text: '马掌飞出了白桩。你没听见它落地。' },
};
const SP_HORN = {
  id: 'horn', name: '学那三声号角吹回去', desc: '红帽子听号行事',
  check: { skill: 'performance', dc: 14 },
  success: { text: '你把手拢在嘴上，三声，调子差不离。四个红帽子一齐回头找吹号的。', applyAll: { cond: 'dazed', turns: 1 } },
  fail: { text: '你吹出来的是一头害了喉病的骡子。焦树皮的骑士头一回笑了，笑声是树枝折断的动静。' },
};

// ---- a4_11 / a4_11b：饮血者
const SP_LAWS = {
  id: 'laws', name: '高声念血律头三条', desc: '它们从前是人，听得懂',
  check: { skill: 'religion', alt: ['persuasion'], dc: 15, mods: [{ if: 'flag.lies_cursed', n: -15, why: '你自己就犯着头一条' }] },
  success: { text: '许了的要守，话要说真的。取了的要还。不许毁林。老的那只停住了，歪着头，嘴唇跟着动了两下。别的几只跟着她停。', applyAll: { cond: 'frightened', turns: 2 } },
  fail: { text: '你念到“话要说真的”，嗓子是哑的。老的那只歪了歪头，牙露了出来。' },
};
const SP_SAPFIRE = {
  id: 'sapfire', name: '点着树根边的红树脂，围一圈火', desc: '树脂烧得很旺。用了要还',
  check: { skill: 'survival', dc: 14, mods: [CURSE] },
  success: { text: '树脂一点就着，火是暗红的，贴着雪面跑了一圈。它们怕这个。', dmgAll: '2d6', type: 'fire', applyAll: { cond: 'burning', turns: 3 }, effects: ['flag a4_burned_sap'] },
  fail: { text: '火星溅到了你袖子上沾的树脂。', selfDmg: '1d6', type: 'fire' },
};

// ---- a4_13：守门的
const GATE = {
  title: '守门的',
  intro: '三尊石像一起迈了步。地在抖，树根上的雪一片一片往下掉。',
  enemies: [{ id: 'mural_warden' }, { id: 'stone_votary', n: 2 }],
  noAwe: true,
  xp: 1400,
  win: { goto: 'a4_14' },
  lose: { effects: [{ if: 'item.broken_scepter < 1', then: ['item +broken_scepter', 'flag a4_fetched_staff'] }], goto: 'a4_13b' },
};
const SP_STAFF = {
  id: 'staff', name: '把断权杖举过头顶', desc: '它们认得这根杖',
  success: { text: '大的那尊停在半步上，一只石头脚悬着。然后三尊一齐退回原位，脸转向门里。', end: 'win' },
};
const SP_ANSWER = {
  id: 'answer', name: '照门楣上的字，把它那句话答回去', desc: '念对了，它们会停一停',
  check: { skill: 'history', dc: 16, party: true, mods: [{ if: 'party.garaele', n: 2, why: '加莱尔替你对着门楣' }, { if: 'flag.a4_old_words', n: 1, why: '加莱尔教的老词' }, CURSE] },
  success: { text: '门楣上刻着一行字，句式跟它问的那句对得上。你照着字形硬念了出来。三尊石像顿住了，等下文。你没有下文。', applyAll: { cond: 'stunned', turns: 1 } },
  fail: { text: '你念错了一个音。大的那尊又问了一遍，这回问话是带着劲的，撞在胸口上。', selfDmg: '2d8', type: 'force' },
};
const SP_DOOR = {
  id: 'door', name: '一个人卡住门洞', desc: '门洞只容一尊，让它们轮流上',
  check: { skill: 'athletics', dc: 14, mods: [CURSE] },
  success: { text: '你退进门洞，肩膀顶着门框。门洞只容一尊。后头两尊挤在外面，石拳砸在门框上，够不着人。', applyAll: { cond: 'restrained', turns: 2 } },
  fail: { text: '你退慢了半步。石拳先到，门框后到。', selfDmg: '2d6' },
};

// ---- a4_16：主礼的那一段，三种办法共用
const LED_RITE = { if: 'flag.a4_led_rite', text: '悼词是你念的，照你那一殿的念法。念到该接神名的地方，你停了一下，接的是他自己的名字。' };
const RITE_DONE = ['flag rite_done', 'var rites +1', 'log 卡斯特拉尔，天空之神。没有尸首，办了一场。', 'rest short'];

export const SCENES = {
  a4_01: {
    id: 'a4_01',
    title: '九个冬天以后',
    art: 'ev_castellos_is_dead',
    chapter: '第四幕 · 诸神之王',
    loc: '卡斯托纳斯 · 万神道',
    date: '1461年秋',
    shop: {
      name: '先锋行会的铺子',
      blurb: '万神道口。门板上写着：概不赊账，神殿的人也一样。',
      stock: ['superior_healing_potion', 'greater_healing_potion', 'half_plate', 'plate', 'elven_cloak', 'scroll_dispel', 'haste_potion', 'cold_iron_nails', 'bandage', 'antidote'],
    },
    text: [
      '九年。板车换过两回轴，一回骡子。那道军令还钉在万神道这座没屋顶的庙门上，纸黄了，四颗钉子各锈出一圈印。九年里没有人来说“事毕”。',
      { if: 'flag.compact_league', text: '城归伯爵联盟代管。城门的税吏换了三茬，税单上一直盖着黑塔家的印。下城人管这叫“房东回来了”。' },
      { if: 'flag.compact_corintar', text: '城归科琳塔尔看着。巡夜的披红斗篷，旧集市边上那块空地砌了一圈矮墙，每天有人往里放花和旧盾牌。' },
      { if: 'flag.compact_free', text: '城约贴在旧集市的告示板上，书记换到第三任。地精坊有了自己的一口井，井绳比别处短一截。' },
      { if: 'flag.compact_none', text: '城还是没人管。北城三条街归三家，过一趟要交三回钱，交完了三家都说没见过你。' },
      '西边的消息隔三个月才到。{?flag.empress_saved:皇后还在，一年跟皇帝同席一回。|皇后死了九年，洛伦特的使节再没进过威克斯堡。}{?flag.proof_bardswood:那只抽屉没人开过。|}{?flag.proof_moon:奥坎娜把蜡模钉在帐子里，磨了九年刀，一刀没砍。|}{?flag.proof_published:那一刀满帝国的酒馆都比划过，比划完照旧纳税。|}{?flag.proof_kept:皇帝还是那个决斗得胜的皇帝。|}',
      '{?flag.groundhawk_deed:康原的地鹰种了九年豆子，地契的折痕磨白了。|康原那块地，蓝牙嘴上认着，纸一直没下来，灰烬玫瑰年年派人去量。}今天他和阿罗莎来送行，站在车边，一个比一个话少。蓝牙三十六了。',
      '回信是今年秋天到的。一块树皮，搁在庙门槛上，四周长了一圈蘑菇。',
      { text: '来早了，小债主。九个冬天以后再敲门。', cls: 'letter' },
      '落款的日子是九年前的。',
      { if: 'party.nixee', speaker: '妮克西', text: '他九年前就回了，信在路上走了九年。我东家管这叫刚好。' },
      '阿坦三十三了。他拿粉笔把四十一句晨祷抄在庙门背面，一句一行，抄到门槛。钥匙交给一个五岁的姑娘，她娘是替庙里扫地的寡妇。',
      { if: 'party.tan', speaker: '阿坦', text: '一天四十句，照着念。最后一行先不用管。' },
      { if: 'is.immortal', text: '当年在门板桌边给你擦过靴子的小子，如今带着自己的小子来看车。蓝牙的腰粗了一圈。那姑娘盯着你看了半天，问阿坦：门板上写的那个人，怎么比你还小。' },
      { if: 'is.immortal && party.tan', speaker: '阿坦', text: '{ta}比我大四岁。从前是。' },
      { if: 'is.god', text: '她又仰头问你：你是银龙吗。你说不是。她想了想，问那你会不会飞。' },
      { if: 'flag.a4_ushka_walked', text: '乌什卡没来。车辕上横着她那根木签，折成了两截。' },
    ],
    first: [
      { if: 'party.ushka && approval.ushka <= -4', then: ['companion -ushka gone', 'flag ushka_left', 'flag a4_ushka_walked'] },
      'quest q_door stage 2',
      'quest q_wall start',
      { if: 'var.lies >= 3', then: ['flag a4_l3'] },
      { if: 'var.lies >= 6', then: ['flag a4_l6'] },
      { if: 'var.lies >= 9', then: ['flag a4_l9'] },
    ],
    choices: [
      {
        text: '托蓝牙和阿罗莎给古拉德捎话，替碎心者作保',
        if: '!flag.pixiebury_warned && (flag.clan_charter || flag.groundhawk_deed || item.clan_charter >= 1)',
        once: true,
        effects: ['flag pixiebury_warned', 'world room +1'],
        result: [
          { speaker: '蓝牙', text: '灰烬玫瑰在量皮克精之墓的城墙。我知道，我的人也量过他们的。你手里有盖了印的纸，这个保我就敢写。' },
          '阿罗莎把信接过去，没让信使碰。',
          { speaker: '阿罗莎', text: '我去送。古拉德认得我的斧子。' },
        ],
      },
      {
        text: '托蓝牙和阿罗莎给古拉德捎话，替碎心者作保',
        if: '!flag.pixiebury_warned && !(flag.clan_charter || flag.groundhawk_deed || item.clan_charter >= 1)',
        once: true,
        check: {
          skill: 'persuasion', dc: 14, party: true,
          mods: [
            { if: 'rep.corintar >= 3', n: 2, why: '科琳塔尔信得过你' },
            { if: 'rep.clans >= 2', n: 1, why: '氏族里有人替你说话' },
            { if: "origin == 'corintar'", n: 1, why: '你是她队伍里的人' },
          ],
        },
        ok: {
          text: [
            { speaker: '蓝牙', text: '她许过的每一句我都认。碎心者那一句，她没许过。' },
            '他想了一会儿，把獠牙上那截蓝布往里掖了掖。',
            { speaker: '蓝牙', text: '算我许的。' },
            '阿罗莎当天下午就带着信走了。',
          ],
          effects: ['flag pixiebury_warned', 'world room +1'],
        },
        fail: {
          text: [
            { speaker: '蓝牙', text: '我替他作保，莫古妮娅明天就来问我凭什么。你手里有纸吗？' },
            '你没有。阿罗莎答应把话带到。话带得到，保带不到。',
          ],
        },
      },
      {
        text: '问那个姑娘会念到第几句',
        once: true,
        effects: ['approval tan +1'],
        result: [
          '她背着手从头念，念到第四十句停了，一个字没错。',
          { speaker: '守庙的姑娘', text: '最后一行他没教。他说那一行要等人。等谁，他没说。' },
        ],
      },
      { text: '出城，往旧日庇护地去', goto: 'a4_02' },
    ],
  },

  a4_02: {
    id: 'a4_02',
    title: '烧过的世界树',
    art: 'ev_feyforest',
    loc: '旧日庇护地 · 世界树的旧址',
    text: [
      '深林边上有一大圈黑土，绕一圈要走小半个时辰，里头一根草都没有。两千年前卡斯塔诺人在这儿烧了一棵树，据说是卡斯坦二世亲手点的火。树早成了灰，地到今天没缓过来。',
      '板车进不了林子。寄车的是个木精灵老头，在黑土边上搭了个棚。帷幕一开他就搬了出来，住了十八年。谁寄了车，他拿炭把名字记在一扇旧门板上。',
      { speaker: '寄车的老头', text: '车我看着，骡子我也看着。人我不看。进去几个出来几个，那是林子的事。' },
      '往后只能用担架：两根杆子，一块帆布。火生在黑土外头。车上是空的。',
    ],
    first: ['rest short'],
    choices: [
      {
        text: '坐到乌什卡边上',
        if: 'party.ushka',
        once: true,
        effects: [{ if: 'approval.ushka >= 3', then: ['quest q_ushka done', 'approval ushka +1'] }],
        result: [
          { speaker: '乌什卡', text: '这回车上没人。去抬谁？' },
          '你说了那个名字。她拿手拃了拃担架的杆子。',
          { speaker: '乌什卡', text: '六尺。不知道够不够。没抬过神。' },
          { if: 'approval.ushka >= 3', text: '她把木签递过来。十一道旧的磨得发亮，第十二道是新刻的，刀口还白。' },
          { if: 'approval.ushka >= 3', speaker: '乌什卡', text: '第十二条。我自己拟的：死人不当差。' },
          { if: 'approval.ushka < 3', text: '你看见她的木签上多了一道新的。她把木签翻了个面，扣在膝盖上。' },
          { if: 'is.god', speaker: '乌什卡', text: '死不了的我见过，都得有人去放倒。这回去看一个放倒了的。我想知道是怎么放倒的。' },
        ],
      },
      {
        text: '看阿坦收拾他的包',
        if: 'party.tan',
        once: true,
        effects: ['flag a4_tan_lamp'],
        result: [
          '包里三样东西：那截游行用的权杖头，一把蜡烛，{?item.sky_tally >= 1:老太太那本天象簿。二十年，一天一道，一道也没等着。|半截粉笔。}',
          { speaker: '阿坦', text: '王要是在那边，我问他一句。要是不在，我得知道是哪种不在。' },
          { speaker: '阿坦', text: '到了地方，灯我想自己举。' },
          { if: 'is.god', speaker: '阿坦', text: '我问过你了，你不知道。那我接着问他。' },
        ],
      },
      {
        text: '听妮克西讲她东家的门',
        if: 'party.nixee',
        once: true,
        effects: ['flag a4_fey_manners'],
        result: [
          { speaker: '妮克西', text: '规矩第一条：活着。到了我东家那儿再加三条。席上的东西别吃。别道谢，谢了就是认账。他问什么，别答“随便”。' },
          { speaker: '妮克西', text: '他的门不讲价，他讲别的。上回有个寻誓者拿一个夏天跟他换了条近路，到现在没见过七月。' },
          { if: 'is.god', speaker: '妮克西', text: '还有你。我东家会想见你。别去。他请客，你付账。' },
        ],
      },
      {
        text: '问加莱尔这一趟打算怎么记',
        if: 'party.garaele',
        once: true,
        effects: ['flag a4_old_words'],
        result: [
          { speaker: '加莱尔', text: '我祖上是从那边坐船来的，在海上漂了一千年。上回我家有人看见那片岸，是灰烬之日，在船尾。我是头一个走回去的。' },
          '她教了你五个老词：借，还，路，死人，谢谢。最后一个她让你到了妖精那儿先别用。',
          { if: 'flag.lied_to_garaele', speaker: '加莱尔', text: '我问一句。泵房那天，你说他们走得快。乌什卡当时看了你一眼。我记了十一年，记的是那一眼。' },
          { if: 'is.god', speaker: '加莱尔', text: '你是什么，我写“自称”。别介意，我写谁都是这两个字。' },
          { if: 'is.immortal && !is.god', speaker: '加莱尔', text: '九年，你没变。这在我不算事。照我家的寿数，我还有三百多年，你慢慢来。' },
        ],
      },
      {
        text: '告诉加莱尔泵房那天的实话',
        if: 'party.garaele && flag.lied_to_garaele && flag.a4_old_words',
        once: true,
        effects: ['unflag lied_to_garaele', 'approval garaele -1'],
        result: [
          '你说了：不快。乌什卡看得出来，你也看得出来。',
          { speaker: '加莱尔', text: '我知道。我要的是你来说。' },
          '她把本子翻到十一年前那一页，改了三个字。',
        ],
      },
      {
        text: '跟老头讨一包冷铁钉',
        once: true,
        cost: { gold: 20 },
        effects: ['item +cold_iron_nails'],
        result: [
          '他从棚顶上摘下一个油纸包，掂了掂。',
          { speaker: '寄车的老头', text: '没淬过火的。妖精闻见就躲。城里卖八十，我收二十，木精灵的价：我巴不得你们带着它进去。' },
        ],
      },
      { text: '把担架扛上肩，进林', goto: 'a4_03' },
    ],
  },

  a4_03: {
    id: 'a4_03',
    title: '青道',
    art: 'load_27',
    loc: '深林 · 青道上的德雷嫩聚落',
    text: [
      '木精灵的地界只许走青道：踩熟了的土路，两边每隔二十步钉一根白桩。领路的猎手说，桩外头三步，可能是另一片一模一样的林子，也可能是七十五年前。',
      '德雷嫩一支的聚落搭在荆棘丛里，房子是活枝子编的。议事的拱廊底下摆着一张红木长桌，七八个长老围着它，吵的是该不该放你们过去。女王娜拉雯坐在桌子那头，五十一岁，在木精灵里算年轻。她没开口。',
      { speaker: '长老', text: '上回放外人进林子是 1443 年。来了个红头发的人类，把咱们的帷幕带走了。' },
      { speaker: '另一位长老', text: '也把咱们的牢带走了。那年你哭得比谁都响。' },
      '拱廊口站着两个持矛的。兽人和地精不许进厅：1430 年，一支兽人在这片荆棘丛外头杀了德雷嫩的上一位主人和他的妻子。那是娜拉雯的父母。',
      { if: 'is.greenskin', text: '矛杆横到了你胸前。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '上回他们这样围着一张桌子，吵了一年多，吵出来一个盟约。我问一句：今天打算吵多久？' },
      { if: 'is.god', speaker: '长老', text: '上一位自称这片林子的神的，是科琳带人杀的。我们对它没什么怨言。对你也是。' },
      { if: 'is.god', text: '娜拉雯很客气。她叫人把你们的水囊都灌满了。在木精灵这儿，这是催客。' },
    ],
    choices: [
      {
        text: '报上你这一支的名字',
        tag: '木精灵',
        if: "subrace == 'wood_elf'",
        once: true,
        effects: ['flag a4_salla'],
        result: '木精灵报家门，先报氏族，后报名字。你报了。桌边有两个长老互相看了一眼，其中一个往旁边挪了挪凳子。娜拉雯头一回抬了眼。',
      },
      {
        text: '照他们的规矩进厅',
        effects: [
          { if: 'party.ushka', then: ['approval ushka -1'] },
          { if: 'party.nixee', then: ['approval nixee -1'] },
          { if: 'is.greenskin', then: ['flag a4_disarmed'] },
        ],
        result: [
          { if: 'party.ushka', speaker: '乌什卡', text: '我等。我数数他们门口挂了几块兽骨。' },
          { if: 'party.nixee', speaker: '妮克西', text: '规矩第十二条：被关在门外的时候，记下门的尺寸。' },
          { if: 'is.greenskin', text: '你把兵器解下来，交给持矛的。两个猎手一左一右夹着你进去，矛尖离你的腰一拃。' },
        ],
        goto: 'a4_03b',
      },
      {
        text: '坚持同进同出：要进一起进',
        if: 'party.ushka || party.nixee || is.greenskin',
        effects: ['flag a4_together', 'flag a4_no_escort'],
        result: '你说这支队伍进去几个出来几个，数目得对得上，拱廊也一样。持矛的回头看女王。娜拉雯抬了一下手指，矛杆收了。有三个长老起身走了。',
        goto: 'a4_03b',
      },
    ],
  },

  a4_03b: {
    id: 'a4_03b',
    title: '树皮纸',
    art: 'ev_wood_elven_throne_room',
    text: [
      '长老们吵累了，散去喝水。娜拉雯把你们领到拱廊后头一间小屋。屋里一张藤编的高座，她不坐，站着。桌上一捆树皮纸，草绳扎着。',
      { if: 'flag.a4_disarmed', text: '你腰上是空的，身后站着那两个猎手。' },
      { speaker: '娜拉雯', text: '我叔祖阿鲁恩的笔记。他找了一辈子帷幕是打哪儿来的。找着了，搭进去一个徒弟，那孩子是他侄孙。林子里判了他杀亲。' },
      { speaker: '娜拉雯', text: '1443 年他跟着那个红头发的去杀了立帷幕的那一位，没回来。罪名到今天没人去销。长老们提起他，还说“那个通缉犯”。' },
      '她没解草绳。她是背的：',
      { text: '帷幕是为了挡烧了天的那东西才立的。', cls: 'letter' },
      { speaker: '娜拉雯', text: '立它的那一位把自己耗空了，那个红头发的杀的是一副壳子。这一句够你们上路。笔记不出这间屋。' },
      { if: 'party.tan', speaker: '阿坦', text: '烧了天的。是哪一天？' },
      { if: 'party.tan', speaker: '娜拉雯', text: '灰烬那天往后几日。他是这么推的。' },
    ],
    first: ['codex eldest'],
    choices: [
      {
        text: '劝她让笔记跟你们走：它该有人读',
        check: {
          skill: 'persuasion', dc: 15, party: true,
          adv: 'flag.a4_salla', dis: 'flag.a4_disarmed',
          mods: [
            { if: 'flag.a4_together', n: -2, why: '三个长老是被你气走的' },
            { if: 'flag.a4_old_words', n: 1, why: '加莱尔教的老词' },
            { if: "faction == 'heirs'", n: 2, why: '你讲的是名分：谱上他还姓德雷嫩' },
          ],
        },
        ok: {
          text: [
            '你说，一个人找了一辈子的东西锁在屋里，等于没找着。娜拉雯看了那捆纸很久。',
            { speaker: '娜拉雯', text: '拿去。有人问起，就说是德雷嫩的女王给的。别说是通缉犯留的。' },
          ],
          effects: ['item +arun_notes', 'flag arun_notes', 'unflag a4_no_escort', { if: 'flag.a4_together', then: ['approval ushka +1', 'approval nixee +1'] }],
          goto: 'a4_04',
        },
        fail: {
          text: [
            { speaker: '娜拉雯', text: '你们是去看一具尸首的。我叔祖已经是一具了。我不想让他再被人抬一回。' },
            '她把草绳又紧了一扣。',
          ],
          goto: 'a4_04',
        },
      },
      {
        text: '请加莱尔答应：把阿鲁恩最后那一天如实记下来，存进会里',
        if: 'party.garaele',
        effects: ['item +arun_notes', 'flag arun_notes', 'approval garaele +1'],
        result: [
          { speaker: '加莱尔', text: '他最后那一天，我照你说的记，照笔记上的记，两样分开写，存进编年史家会，谁查都查得到。我只管记，不管销罪名。' },
          { speaker: '娜拉雯', text: '记下来就够了。罪名是长老的事，长老会死的。' },
          '她把那捆树皮纸放进了加莱尔的包里，自己系的扣。',
        ],
        goto: 'a4_04',
      },
      {
        text: '趁她转身，把那捆纸塞进怀里',
        check: { skill: 'sleight', dc: 16, party: true, adv: "class == 'rogue'" },
        ok: {
          text: '草绳一声没响。出了聚落三里地，你才敢摸一摸怀里。',
          effects: ['item +arun_notes', 'flag arun_notes', 'approval nixee +1'],
          goto: 'a4_04',
        },
        fail: {
          text: [
            '娜拉雯没回头。她说：放下。',
            '你放下了。她没喊人，只把门帘掀开，朝外偏了偏头。猎手不送了。',
          ],
          effects: ['flag a4_no_escort', 'approval garaele -1'],
          goto: 'a4_04',
        },
      },
      { text: '谢过她，只带那一句走', goto: 'a4_04' },
    ],
  },

  a4_04: {
    id: 'a4_04',
    title: '青道上的猎',
    art: 'ev_wood_elf_hunt',
    loc: '深林 · 青道 · 入夜',
    text: [
      '出聚落的时候，六个德雷嫩的猎手{?flag.a4_no_escort:远远缀在后头，不肯走近|走在前头，矛尖朝下}。道边的树上挂着兽骨，一串一串，风一过互相磕。',
      '入夜，先是号角。三声，一声比一声近，没有一声是从青道上来的。猎手们互相看了一眼，退进了树影里。这东西不归他们管。',
      '然后是红帽子。四个，矮得只到你腰，铁靴踩在落叶上没有声，帽子湿漉漉的往下滴。它们不扑，只从两侧往里挤，一步一步把你们往白桩外头赶。',
      { if: 'party.nixee', speaker: '妮克西', text: '别出桩。它们是赶羊的。圈在哪儿我不知道，我也不想知道。' },
    ],
    choices: [
      {
        text: '盯住白桩，一步不让，谁也不许迈出去',
        check: {
          skill: 'survival', dc: 15, party: true,
          adv: "subrace == 'wood_elf' || is.nature",
          mods: [{ if: 'flag.a4_no_escort', n: -2, why: '没有猎手领路' }],
        },
        ok: { text: '你们背靠背往前挪，一根桩一根桩地数。数到第十九根，红帽子不挤了，往两边让开。', goto: 'a4_04b' },
        fail: {
          text: '你的右脚踩出了桩外。只一步。收回来的时候靴底沾的是另一种土，灰白的，带着没化的雪，半条腿是麻的。',
          effects: ['hp -6', 'flag a4_off_vyr'],
          goto: 'a4_04b',
        },
      },
    ],
  },

  a4_04b: {
    id: 'a4_04b',
    title: '焦树皮甲',
    text: [
      '让开是因为正主到了。一个骑士，甲是烧焦的树皮，一片压一片，走一步掉一撮炭渣。剑是一根黑荆棘。它骑着的东西你没看清，也可能它压根没骑东西。',
      '它不冲，站在青道正中，报了一个名字。{?party.garaele:加莱尔说那是一棵树的名字，两千年前烧掉的那棵。|那名字很长，听着是一棵树的。}四个红帽子一齐把镰刀举了起来。',
      { if: 'flag.a4_off_vyr', text: '你踩出去过的那条腿还没缓过来。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '这东西没骨头。砍倒了也没料可磨。白干。' },
    ],
    choices: [
      {
        text: '把冷铁钉撒在路面上，等它们踩上来',
        if: 'item.cold_iron_nails >= 1',
        cost: { item: 'cold_iron_nails' },
        combat: { ...HUNT, intro: '钉子撒在两根白桩之间，落叶盖着，看不出来。', specials: [SP_NAILS, SP_HORN] },
      },
      {
        text: '解下腰上那两只从骡子脚上换下来的旧马掌，迎上去',
        combat: { ...HUNT, intro: '马掌是熟铁的，淬过火，对付妖精只能算凑合。', specials: [SP_SHOE, SP_HORN] },
      },
    ],
  },

  a4_05: {
    id: 'a4_05',
    title: '黑枝亲王的价',
    art: 'ev_dark_forest',
    loc: '深林 · 影林',
    text: [
      '{?flag.a4_hunt_lost:你们是被镰刀背一路赶过来的。|骑士散成了一堆炭，红帽子拖着同伴跑了。打完才看出来，你们早被挤下了青道。}白桩没了。头顶的叶子是黑的，一片摞一片，漏不下光。这是影林。',
      '赶你们的那位在这儿等着。它坐在一截烧空的树桩里，样子定不下来：盯着看，是个披灰斗篷的瘦高个；眼睛挪开一下再看，斗篷是一树枯叶。',
      { speaker: '黑枝亲王', text: '汝等要去看一具尸首。吾不收买路钱。只要汝回去，一字不改，讲给卡斯坦的子孙听。' },
      '它恨的是烧树的人。两千年了，谁点的火它都记得。它要他们难受，别的不要。',
      { if: 'party.nixee', speaker: '妮克西', text: '别接。白走的路最贵。' },
      { if: 'party.tan', speaker: '阿坦', text: '它说的是“尸首”。它知道那边躺着什么。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '氏族里传过：1439 年有个谁也不认得的兽人，给三个氏族指了条穿林子的近路。进去的没出来。' },
      { if: 'party.ushka', speaker: '黑枝亲王', text: '彼等乃吾之斧。斧不问去处。' },
      { if: 'is.god', text: '它朝你躬了一下身，躬得很假。' },
      { if: 'is.god', speaker: '黑枝亲王', text: '又一位天上来的。上一位烧了吾的树。汝之价另算：须汝本人去讲，用汝的嗓子，一个字不许软。' },
    ],
    first: ['codex blackened_prince'],
    choices: [
      {
        text: '看它到底图什么',
        once: true,
        check: { skill: 'insight', dc: 15 },
        ok: {
          text: '它不在乎你们信不信墙上的东西。它在乎的是听的人信不信。那句话在卡斯坦的子孙耳朵里是一把火，它等着看烧起来。',
          effects: ['xp 120'],
        },
        fail: {
          text: '你盯得太久。它把脸转过来，那张脸是你埋过的一个人的。你把眼睛挪开了，后脖子上全是汗。',
          effects: ['hp -5'],
        },
      },
      {
        text: '想想跟大妖精立约是怎么回事',
        once: true,
        check: { skill: 'arcana', dc: 15, adv: 'is.pact' },
        ok: {
          text: '跟大妖精立的约，条款写在它嘴里。毁约的代价由它定，定在毁约以后。接了，这句话你们就非说不可，一个字不许改。',
          effects: ['xp 120'],
        },
        fail: {
          text: '你只想起一句俗话：跟妖精握过手，回来数数手指头。你数了。十根，有一根的指甲黑了。',
          effects: ['hp -3'],
        },
      },
      {
        text: '接它的价：路白走，回去照实讲',
        effects: ['flag blackbranch_deal', 'approval nixee -2'],
        result: [
          '它把一根黑枝子折成两段，一段给你，一段自己留着。断口是湿的。',
          { speaker: '黑枝亲王', text: '吾之鸦领路。到了卡斯坦的城，汝开口之日，吾听得见。' },
          { if: 'is.god', text: '你那半截枝子在手里动了一下。往后没有“约好不说”这回事了。' },
        ],
        goto: 'a4_07',
      },
      {
        text: '不接，另找路',
        result: [
          { speaker: '黑枝亲王', text: '那便去敲那傻子的门。彼处无白走之路，汝自会想起吾。' },
          '{?party.nixee:妮克西已经在往回数步子了。她说：有扇门，不远，看你怎么算远。|树桩空了。地上留着一根乌鸦毛，尖朝着一个方向。}',
        ],
        goto: 'a4_06',
      },
    ],
  },

  a4_06: {
    id: 'a4_06',
    title: '缺一个傻子',
    art: 'ev_magical_forest_animated',
    loc: '妖精界 · 林隙 · 愚者亲王的宫',
    text: [
      '{?party.nixee:妮克西|地鹰氏族派来的一个寻誓者}在两棵并生的榛树中间敲了三下，敲的是空气。迈过去，天是亮的，找不着太阳。',
      '愚者亲王的宫是一张桌子。桌子长得望不到头，坐满了：长鹿角的，长翅膀的，一个整个儿是水做的，还有三位，你数了两遍，数目不一样。人人有座。只有上首空着一把三条腿的矮凳，凳面磨得发亮。',
      '亲王坐在矮凳旁边。今天他是个穿补丁礼服的胖子，补丁的颜色比礼服多。',
      { speaker: '愚者亲王', text: '来早了，小债主。也来晚了。我这儿缺一个傻子，缺了有些年头。你们那边管这叫过路费，我们这边管这叫入席。' },
      '他不收钱。满桌的菜冒着热气，你一口没敢动。',
      { if: 'party.nixee', speaker: '妮克西', text: '他要的是那把凳子上坐个人。我去。规矩第一条是活着，没说在哪儿活。' },
      { if: "faction == 'crownless'", text: '亲王拿叉子指了指那把矮凳，问你：椅子空着，怎么办。你说：空着，天也没塌。他笑出了声。一桌子妖精跟着笑，有两个笑掉了脑袋，捡起来又安上了。' },
      { if: 'is.pact', text: '席上的话你听得懂一半，那一半全是在报价。左手第三位刚拿一个夏天换了一句实话，换亏了。' },
      { if: 'is.god', speaker: '愚者亲王', text: '年头对你不算数。拿不心疼的东西付账，那不叫付账。' },
      { if: 'is.god && party.nixee', speaker: '妮克西', text: '我说过别来。他请客，你付账。' },
    ],
    choices: [
      {
        text: '在席上讲个笑话，逗他笑',
        once: true,
        check: {
          skill: 'performance', dc: 15, adv: 'is.performer',
          mods: [
            { if: 'flag.a4_fey_manners', n: 2, why: '妮克西教过席上的规矩' },
            { if: 'is.pact', n: 2, why: '你听得懂他们在笑什么' },
          ],
        },
        ok: {
          text: [
            '你讲的是当年钴蓝兵团那个哨兵，和一车穿靴子的“马肉”。亲王笑得把一块补丁崩飞了。',
            { speaker: '愚者亲王', text: '好。这个我要拿去讲给别人，讲错三回，看它变成什么。' },
            '他从礼服上揪下一枚木扣子给你。正面刻着一张笑脸，翻过来还是笑脸。',
          ],
          effects: ['item +fey_token'],
        },
        fail: {
          text: [
            '没人笑。水做的那位替你鼓了掌，溅了你一身。',
            { speaker: '愚者亲王', text: '这个笑话我收下了。讲砸的也有行情：三十。' },
            '后来你怎么也想不起那个笑话的后半句。',
          ],
          effects: ['gold -30'],
        },
      },
      {
        text: '替妮克西在那把矮凳上坐三天试试',
        tag: '地精',
        if: 'is.goblin && party.nixee',
        once: true,
        effects: ['approval nixee +2', 'hp -4'],
        result: [
          { speaker: '愚者亲王', text: '你也是有东家的人？没有？那更好，没东家的傻子最贵。坐。' },
          '三天。席上的每个笑话你都得笑，每个哑谜你都得猜错。第三天夜里妮克西来换你，往你手里塞了半块干粮。',
          { speaker: '妮克西', text: '规矩里没有“替人坐凳子”这一条。我给你记一笔，算我欠的。' },
          '试完了。凳子还空着，账还得结。',
        ],
      },
      {
        text: '用席上的行话还一口价',
        tag: '邪术师',
        if: 'is.pact',
        once: true,
        effects: ['xp 100', 'approval nixee +1'],
        result: [
          '你没还下来。可你听出了一件事：他报的几样价里，有一样他早就想要。',
          { speaker: '愚者亲王', text: '那边有一根杖。白的，六尺。你们还不知道吧？我知道。回程带给我瞧瞧，也算一种付法。' },
        ],
      },
      {
        text: '点头，让妮克西去坐那把矮凳',
        if: 'party.nixee',
        effects: ['flag toll_nixee'],
        result: [
          '妮克西爬上矮凳，脚够不着地。一桌子妖精鼓掌。',
          { speaker: '妮克西', text: '康原的欠条你拿着。蓝牙认，你就去讨；他不认，你就去吵。规矩第七条倒过来用：先救命，后谈价。这回算我先付的。' },
          '她把一张叠成指甲盖大的纸塞进你手里，没再看你。',
        ],
        goto: 'a4_07',
      },
      {
        text: '十一年之外，每人再添十年',
        effects: ['flag toll_years', 'approval ushka -1', 'approval tan -1', 'approval nixee -1', 'approval garaele -1'],
        result: [
          { speaker: '愚者亲王', text: '年头。老实人的付法。过门十一年是门的规矩，这十年是我的。出了宫门就算。' },
          '{?is.longlived:十年在你只是个零头。别人的不是。|你点头的时候，替别人也点了。}',
        ],
        goto: 'a4_07',
      },
      {
        text: '把你们要去找的那个故事先讲给他',
        effects: ['flag toll_story', { if: "faction == 'crownless'", then: ['world word +1'], else: ['world word +2'] }],
        result: [
          '你从万神道那座没屋顶的庙讲起，讲到航海志上划掉的那个词。他听得很规矩，一句没插。',
          { speaker: '愚者亲王', text: '好故事。我要讲给别人听，他们再讲给别人。传到头，天上那位是死是活、是男是女，我可就管不着了。' },
          '满桌子妖精已经在交头接耳。',
        ],
        goto: 'a4_07',
      },
      {
        text: '答应回程把那边的一根杖留给他',
        effects: ['flag toll_staff'],
        result: [
          { speaker: '愚者亲王', text: '白的，六尺，一头碎了。你们还没见着，我先替你们惦记上了。回程，秋门，我在那儿伸手。' },
          '他比你们先知道那儿有根杖。',
        ],
        goto: 'a4_07',
      },
      {
        text: '什么也不给',
        if: 'party.nixee',
        effects: ['flag toll_nixee'],
        result: [
          '你说不付。亲王没恼，拿叉子敲了敲杯沿，等着。',
          '妮克西自己站了起来，走到上首，爬上了那把矮凳。',
          { speaker: '妮克西', text: '别看我。规矩第一条。康原的欠条在你左边兜里，我刚塞的。' },
        ],
        goto: 'a4_07',
      },
      {
        text: '把那十年全算在你一个人头上',
        tag: '神',
        if: 'is.god',
        effects: ['flag toll_years', 'flag owes_fey_miracle', 'approval nixee -2'],
        result: [
          { speaker: '愚者亲王', text: '成。同伴的年头我一天不动。添一条：往后我敲一回门，你得应一回。什么事，我到时候说。' },
          '{?party.nixee:妮克西的脸白了。她张了张嘴，规矩第几条都没说出来。|满桌子妖精头一回全安静了。}',
        ],
        goto: 'a4_07',
      },
    ],
  },

  a4_07: {
    id: 'a4_07',
    title: '没有太阳的天',
    art: 'load_19',
    loc: '妖精界 · 一条不肯直着走的路',
    text: [
      '天是亮的，没有太阳，影子朝四面倒。路不肯直着走：盯着它，它是直的；一眨眼，拐了。',
      { if: 'flag.blackbranch_deal', text: '带路的是黑枝的一只乌鸦，飞三步停一停，回头数人。' },
      { if: '!flag.blackbranch_deal && party.nixee', text: '妮克西走在最前头，嘴里一直在数步子，数的是地精话。' },
      { if: '!flag.blackbranch_deal && !party.nixee', text: '带路的是愚者宫里拨来的一个提灯小妖。灯里没有火，照样亮。{?flag.toll_nixee:回头已经看不见那张桌子。矮凳上那个黄眼睛的小个子，最后一眼是在数席上的盘子。|}' },
      { if: 'flag.toll_years && !flag.owes_fey_miracle', text: '{?is.longlived:十年在你身上看不出来。|你的膝盖是出了宫门才开始响的。}{?party.tan:阿坦的鬓角白了一撮，他自己还没看见。|}' },
      { if: 'party.tan', text: '阿坦头一回不知道该什么时候念晨祷。蜡烛在这儿烧不短。' },
      { if: 'party.tan', speaker: '阿坦', text: '我数脉。一个时辰四千下上下。数到该天亮了，我就念。' },
      { if: 'party.tan', text: '他念了四十句。念到一半，影子换了个方向。' },
      '路从一片下雪的松林边上擦过去。雪地里两拨人在打仗：一个白头发的女人，蓝袍子上缀着星，抬手就是一道冰，冰那头是一整支军。血冻成了黑的。谁也没朝你们看一眼。',
      { if: 'party.garaele', speaker: '加莱尔', text: '道曼德劳德。故土北边的一片林子，航海志上只有个名字。我问一句：他们打的是哪一年的仗？' },
      { if: 'party.garaele', text: '带路的没答。' },
      '路边每隔一段挂一盏灯。灯光是暖的，里头有人喊你的小名。',
    ],
    first: [{ if: 'flag.toll_nixee', then: ['companion -nixee'] }],
    choices: [
      {
        text: '看一眼路边枝子上挂的东西',
        once: true,
        check: { skill: 'perception', dc: 14, party: true },
        ok: {
          text: [
            '一顶地精的尖帽，毡的，褪成了灰白，帽尖上缝着一粒铜扣。挂了有年头了。',
            { if: 'party.nixee', speaker: '妮克西', text: '奥布利格的。跟欠我们的那位去打至长者的那个。1443 年打完那一仗，人就没了。东家说他掉回从前去了。我当时以为东家在打哑谜。' },
            { if: '!party.nixee', text: '帽子里塞着一张树皮欠条，落款是奥布利格：跟科琳去打过至长者的那个地精。欠的是什么，字迹糊了。' },
          ],
          effects: ['xp 100'],
        },
        fail: {
          text: '是顶帽子。你伸手去够，帽子里有东西咬了你一口，然后帽子自己走了。',
          effects: ['hp -3'],
        },
      },
      {
        text: '盯着带路的后脚跟走，不看灯',
        check: { abil: 'wis', dc: 14, save: true, mods: [{ if: 'is.fey_touched', n: 2, why: '你身上有这边的东西' }] },
        ok: { text: '喊你小名的那个声音一直跟到路尽头，最后骂了一句很难听的。', goto: 'a4_08' },
        fail: {
          text: '你只看了一眼。醒过来的时候躺在路边，别人已经找了你半天。你手里攥着一张树皮，上头写着一个你不记得借过的数目。',
          effects: ['hp -6'],
          goto: 'a4_08',
        },
      },
      {
        text: '拿布条蒙上眼，攥着前头人的腰带走',
        effects: ['hp -2'],
        result: '什么也没看见。摔了两跤，膝盖上各青了一块。喊你小名的声音跟了一路，你数了，喊了六十一回。',
        goto: 'a4_08',
      },
    ],
  },

  a4_08: {
    id: 'a4_08',
    title: '红冬',
    art: 'load_14',
    loc: '阿伦蒂尔 · 血林',
    date: '红冬',
    text: [
      '出来是冬天。回头看，来路是两棵挨着的白树，中间什么也没有。',
      '树干是白的，叶子是红的，一片没落。树皮的裂口往外渗红树脂，顺着树干淌到雪上，一道一道，闻着是铁锈味。',
      '就你们所知，灰烬之日以后头一批踏上故土的坎诺人，是你们几个。走来的。这块地上有规矩，头一晚就得学：取了要还。',
      { if: 'party.garaele', text: '加莱尔蹲下去，摘了手套，把手按在雪底下的土上，按了很久。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '我祖上从这儿走到坎诺，用了一千年。我走回来，用了一个冬天。回去我得把这两个数写在一行里。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '树在流血，没人管。这地方的规矩我不懂。先别动刀。' },
      { if: 'party.tan', speaker: '阿坦', text: '这儿有太阳。我能念了。' },
      { if: 'is.divine', text: '你试了一个最小的神术，暖手用的。它来了，慢了半拍，像隔着一层水递过来的。' },
      '远处两棵白树中间站着个人，脸上画着红道，手里一杆插羽毛的矛。你一抬头，没了。',
    ],
    first: ['quest q_door done', 'codex laws_by_blood'],
    choices: [
      {
        text: '找吃的，砍柴，生火',
        once: true,
        check: { skill: 'survival', dc: 14, party: true, adv: 'is.nature' },
        ok: {
          text: '两只白兔，一捆枯枝，还砍了一棵手腕粗的小树当柴架。斧子下去，树茬往外冒的是红的。火生起来了，肉是热的。',
          effects: ['flag a4_took', 'heal 2d6'],
        },
        fail: {
          text: '雪太深。折腾到天黑，只打着一只瘦兔子，砍了半捆湿柴。砍树的时候斧子崩了你一手红树脂，烫的。',
          effects: ['flag a4_took', 'hp -4'],
        },
      },
      {
        text: '先看看这块地上别人是怎么过的',
        once: true,
        check: { skill: 'nature', dc: 13, adv: 'is.nature' },
        ok: {
          text: '有人在这儿砍过树。每个树桩边的雪里都埋着一颗橡子，一个桩一颗。一块平石上留着半只冻硬的兔子，没人动，也没野物动。取一样，还一样，留一份。',
          effects: ['flag a4_knows_return'],
        },
        fail: {
          text: '你只看出雪地上有脚印，光脚的，五个脚趾。别的没看出来，手倒是冻木了。',
          effects: ['hp -2'],
        },
      },
      {
        text: '脱了鞋，光脚踩上去',
        tag: '精灵',
        if: 'is.elf',
        once: true,
        effects: ['hp -3', 'flag a4_knows_return', 'approval garaele +1'],
        result: [
          { if: 'party.garaele', speaker: '加莱尔', text: '我问一句：你要不要脱鞋？你祖上是从这儿逃走的。我祖上也是。我刚才没敢。' },
          '雪没到脚踝，冷得钻骨头。走了十来步，脚底下硌了一下，又一下：是橡子，埋得很浅，一个树桩边上一颗。有人在还。',
        ],
      },
      {
        text: '在砍过的树茬边埋一颗橡子，兔子留半只在平石上',
        if: 'flag.a4_took && flag.a4_knows_return',
        once: true,
        effects: ['flag a4_gave_back'],
        result: '橡子是在林子边上捡的，冻得梆硬。你拿刀尖在树茬边凿了个坑，埋了。半只兔子放上石头的时候，远处那杆插羽毛的矛动了一下，矛尖朝了下。',
      },
      {
        text: '过夜',
        effects: [
          { if: 'flag.a4_took && !flag.a4_gave_back', then: ['hp -5', 'flag a4_first_mark'] },
          { if: '!flag.a4_took', then: ['hp -3'] },
        ],
        result: [
          { if: 'flag.a4_first_mark', text: '半夜你是被烫醒的。砍树的那只手，手背上起了一道红痕，细的，直的。同伴的手上也有。' },
          { if: '!flag.a4_took', text: '没生火。干粮是冻的，要含化了才咬得动。' },
          { if: 'flag.a4_gave_back', text: '一夜没事。早上平石上的半只兔子不见了，石头上多了一粒贝珠。' },
        ],
        goto: 'a4_09',
      },
    ],
  },

  a4_09: {
    id: 'a4_09',
    title: '血律',
    art: 'ev_elven_eye',
    loc: '血林深处 · 一棵渗得最凶的树下',
    text: [
      '往里走了三天。营扎在一棵三人合抱的白树底下，树脂从一人高的裂口里往外淌，树根边的雪全是红的。半夜，手背是烫的。',
      '头一天那个画红道的猎手从树后走出来，矛尖朝下。他挨个翻你们的手，嘴里数数。{?party.garaele:加莱尔听出了三个词：许了的，说了的，取了的。|他的话是精灵语磨掉了一半的音，你只听懂了数。}',
      { if: 'flag.a4_tier0', text: '数到你，他数的是零。他多看了你一眼，把你的手放下了。' },
      { if: 'flag.a4_tier1', text: '你手背上有红痕，细的，一句一道。{?flag.p_lied:头一道在虎口，是城破那天说给一个快死的人听的。|}他数完，拿指甲在最长的那道上掐了一下。疼得很实在。' },
      { if: 'flag.a4_tier2', text: '你两只手背上都是，一句一道，有几道已经爬过了腕子。{?flag.p_lied:头一道是城破那天说给一个快死的人听的。|}他数到一半停下，换了一只手接着数，数完往后退了一步。' },
      { if: 'flag.a4_tier3', text: '红痕从手背一路爬到肘弯，新的压着旧的。你的指甲从根上开始发黑。猎手没数完。他把矛尖抬起来对着你，又朝林子深处偏了偏头：里头那些东西，都是这么开的头。' },
      { if: 'flag.lied_to_garaele && !flag.a4_tier0', text: '有一道在左手无名指根上，是泵房那天长的。' },
      { if: 'flag.a4_urn_owed', text: '还有一道是空心的：军士长的骨灰。许了，没办。' },
      { if: 'flag.god_faked_dragon', text: '最粗的一道是银白色的。蓝宝石望那座塔，那个仰头的老太太。' },
      { if: 'party.ushka', text: '乌什卡把两只手摊开让他看。一道也没有。猎手朝她点了一下头，这是他今晚头一回点头。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '烂刀氏族不对快死的人说好听的。倒也不算规矩。嫌麻烦。' },
      { if: 'flag.notebook_sold', text: '你右手掌心还有一道横的，是取了没还的那种。{?party.garaele:加莱尔的手是干净的。她看了看你的掌心，又看了看自己的包。那个本子在山里“丢”了十一年。|那个拓片本，你卖了五百金冠。}' },
      { if: 'flag.notebook_sold && party.garaele', speaker: '加莱尔', text: '我问一句。银行出的什么价？' },
      { if: 'flag.notebook_sold && party.garaele', text: '你答了。她点点头，记了下来。她说这一趟她陪你们走完，出了林子，她回月山。' },
      { if: 'is.god && !flag.a4_tier0', text: '这块地不认你是谁。你叫它消，它不消。' },
    ],
    first: [
      'unflag a4_tan_counts',
      { if: 'flag.urn_promised && !flag.urn_buried', then: ['flag a4_urn_owed'] },
      { if: 'var.lies == 0 && !flag.a4_urn_owed', then: ['flag a4_tier0', 'approval tan +1', 'approval ushka +1'] },
      { if: '(var.lies >= 1 && var.lies <= 2 && !flag.a4_urn_owed) || (var.lies <= 1 && flag.a4_urn_owed)', then: ['flag a4_tier1', 'hp -8'] },
      { if: '(var.lies >= 3 && var.lies <= 5 && !flag.a4_urn_owed) || (var.lies >= 2 && var.lies <= 4 && flag.a4_urn_owed)', then: ['flag a4_tier2', 'flag lies_cursed'] },
      { if: '(var.lies >= 6 && !flag.a4_urn_owed) || (var.lies >= 5 && flag.a4_urn_owed)', then: ['flag a4_tier3', 'flag lies_cursed', 'damage 3d8'] },
      { if: 'flag.notebook_sold', then: ['approval garaele -4', 'flag garaele_leaving'] },
    ],
    choices: [
      {
        text: '当着大家把每一句都说出来：对谁说的，说了什么',
        if: '!flag.a4_tier0',
        effects: ['flag lies_confessed', 'unflag lies_cursed', 'approval tan +1', { if: 'flag.lied_to_garaele', then: ['approval garaele -2'] }],
        result: [
          '你从头一句说起。对谁说的，说了什么，当时为什么说。{?flag.p_lied:城破那天，那个快死的人问的那一句。|}{?flag.lied_to_garaele:泵房里，那两位走得快不快。|}{?flag.a4_urn_owed:军士长的骨灰，许了月神之耳，没办。|}{?flag.god_faked_dragon:蓝宝石望的塔顶，那道银光是你放的。|}说到后来嗓子是哑的。',
          '红痕没消，不烫了。猎手把矛靠在树上，蹲下来，往火里添了一根柴。',
          { if: 'party.tan', speaker: '阿坦', text: '我数了。跟他数的一样。' },
          { if: 'party.nixee', text: '妮克西把钱袋往自己那边挪了一寸，想了想，又挪了回来。' },
          { if: 'flag.lied_to_garaele && party.garaele', speaker: '加莱尔', text: '泵房那一句，我记了十一年。现在可以划掉了。划掉的我也留着。' },
        ],
        goto: 'a4_10',
      },
      {
        text: '把手收回袖子里，接着走',
        result: '{?flag.a4_tier0:你把手收回来。猎手拿矛杆朝河的方向指了指：跟他走。|猎手没追问。他拿矛杆在雪上划了几道，跟你手背上的一样多，拿脚抹了，然后朝河的方向指了指。林子替你记着。}',
        goto: 'a4_10',
      },
      {
        text: '把手背上的痕抹了',
        tag: '神',
        if: 'is.god && !flag.a4_tier0',
        effects: ['var lies +1', { if: 'var.lies >= 3', then: ['flag lies_cursed'] }, ...TAN_COUNTS],
        result: [
          '你拿拇指一抹，痕没了。猎手往后跳了一步。',
          '一顿饭的工夫，它们又长了出来，一道不少，还多一道。他伸出手指头，替你把新的那道也数上了。',
          { if: 'flag.a4_tan_counts && party.tan', speaker: '阿坦', text: '抹了一回，算一句。这句是说给这块地听的。' },
        ],
        goto: 'a4_10',
      },
    ],
  },

  a4_10: {
    id: 'a4_10',
    title: '塞拉河口的集',
    art: 'load_14',
    loc: '血林 · 塞拉河口 · 奎内赫人的聚落',
    shop: {
      name: '河口的集',
      blurb: '以物易物。金冠他们也收，掂的是分量，不看上头的头像。',
      stock: ['kwineh_salve', 'healing_potion', 'antidote', 'elven_longbow'],
    },
    text: [
      '猎手领着你们沿河走了四天。河口是一片缓滩，几百顶皮帐子，烟是直的。这是他们一年里唯一聚齐的日子：换贝珠，订亲，了结去年的官司。',
      '他们管自己叫奎内赫。身量和耳朵都跟月精灵差不多，只是鼻梁往上翘，露着鼻孔。{?party.garaele:加莱尔一进帐子，满帐子的人都站了起来，有个老妇人伸手摸了摸她的耳朵尖。|}{?party.ushka:没人见过兽人。孩子们围着乌什卡，胆大的拿树枝碰她的獠牙。|}',
      '头人管集，伊什塔努姆管约。她是个看不出岁数的女人，颧骨上三道树脂纹，贝珠串从手腕垂到膝盖。{?party.garaele:加莱尔学了四天他们的话，够用了。|她的徒弟会二十来个精灵词，其余靠比划。}',
      { speaker: '伊什塔努姆', text: '往上游去的人，我见过回来的，没见过空着手回来的。要路，这块地可以指。指了，你们得还一样东西。' },
      { if: 'is.god', speaker: '伊什塔努姆', text: '哭泣之母为死了的神流过泪。活的，她没见过。在这儿你守律，别的我不问。' },
      { if: 'flag.a4_tan_counts && party.tan', speaker: '阿坦', text: '又一句。我替你数着，数到三的倍数我就问一回：这句值不值。' },
    ],
    first: ['rest long', 'level 9', 'quest q_wall stage 2', 'codex kwineh'],
    enter: [...TAN_COUNTS],
    choices: [
      {
        text: '在集上当众把每一句都说出来',
        if: 'flag.lies_cursed && !flag.lies_confessed',
        once: true,
        effects: ['flag lies_confessed', 'approval tan +1'],
        result: [
          '几百个人，一多半听不懂通用语。{?party.garaele:加莱尔一句一句替你翻。|伊什塔努姆的徒弟连猜带比划地翻。}你说完，没人鼓掌，也没人走开。有个孩子问他娘，那个人的手为什么是红的。',
          { if: 'party.tan', speaker: '阿坦', text: '在树底下你没说。在这儿说了。也算。' },
        ],
      },
      {
        text: '请伊什塔努姆解咒',
        if: 'flag.lies_cursed',
        req: 'flag.lies_confessed',
        reqText: '得先把每一句当众说出来',
        once: true,
        cost: { gold: 100 },
        effects: ['unflag lies_cursed'],
        result: [
          '一百金冠换成了铁锅、针和一把剪子，堆在她脚边。她拿骨针在你每一道红痕的头上点了一下。',
          { speaker: '伊什塔努姆', text: '痕留着。走背运的那一截，树收回去了。再说一句，它再长出来，比这回粗。' },
        ],
      },
      {
        text: '拿金冠跟头人换东西',
        once: true,
        cost: { gold: 40 },
        effects: ['item +kwineh_salve 2'],
        result: [
          '头人掂了掂你的金冠，没看上头的头像。他真正想要的是你腰上那把备用的小刀，你没给。',
          '换来两盒血树脂膏，外加一串贝珠，他硬挂到你脖子上的：集上空着脖子走路，丢人。',
        ],
      },
      {
        text: '照他们的规矩，跟猎手摔一跤赌药膏',
        tag: '试炼派',
        if: "faction == 'tried'",
        once: true,
        check: { skill: 'athletics', dc: 14, mods: [CURSE] },
        ok: {
          text: '他们的摔法不许抓头发，不许碰耳朵。第三回合你把他按进了沙里。他爬起来，把两盒药膏拍在你手上，又比划：明年再来。',
          effects: ['item +kwineh_salve 2', 'xp 100'],
        },
        fail: {
          text: '第二回合你的脸就进了沙子。一圈孩子笑得直打滚。药膏没赢着，照规矩你还得输他一样东西。',
          effects: ['hp -5', 'gold -20'],
        },
      },
      {
        text: '听他们讲哭泣之母',
        once: true,
        effects: ['codex weeping_mother'],
        result: [
          '{?party.garaele:加莱尔一边听一边转述|伊什塔努姆的徒弟讲，一半靠手}：这片林子就是她。树上淌的，是很久以前那场大灾里死掉的人的血，她替他们哭到今天。',
          '她哭归哭，照样养人。取东西只取够用的，取一样谢一回。砍这儿的树是大忌。',
          { if: 'party.tan', speaker: '阿坦', text: '他们说，她是回话的。我问一句也行吗？' },
          { if: 'party.tan', text: '伊什塔努姆听完，看了他很久，说：你要问的那一位，不归她管。' },
        ],
      },
      {
        text: '把航海志上的方位对到河道上',
        once: true,
        check: {
          skill: 'history', dc: 14, party: true,
          adv: 'flag.log_copied || flag.log_stolen || flag.log_filed || item.log_copy >= 1',
          mods: [CURSE],
        },
        ok: {
          text: '那行方位落在第三道白滩往北。照河口的人指的走，要绕一个大弯；照航海志走，能省两天。一千四百多年前量的，差不到半里。',
          effects: ['flag a4_shortcut'],
        },
        fail: {
          text: '你把河画反了。{?party.garaele:加莱尔看了一眼，没说话，把图收了起来。|头人看了一眼你画在沙上的图，笑了。}',
        },
      },
      { text: '去找伊什塔努姆立约，上路', effects: ['unflag a4_tan_counts'], goto: 'a4_10b' },
    ],
  },

  a4_10b: {
    id: 'a4_10b',
    title: '血约',
    loc: '塞拉河口 · 河滩尽头的一棵白树',
    text: [
      '立约的地方在河滩尽头一棵白树底下。树根上缠着几十根草绳，每根拴着一样东西：一把骨梳，半只陶碗，一枚生了绿的铜箭头。有的绳子新，有的一碰就断。',
      '伊什塔努姆拿骨针在你左手虎口上扎了一下，血滴在树根上，雪化出一个小坑。',
      { speaker: '伊什塔努姆', text: '路我指：沿河往上，过了第三道白滩，离岸往北，两天。我们的人不往那儿住。那儿有一样东西，每年有人去放贝珠。' },
      { if: 'flag.bearing_known', text: '她指的方向，跟航海志上那行方位差不到一指宽。' },
      { speaker: '伊什塔努姆', text: '还什么，你们自己说。说了，树记着。' },
      { if: 'party.nixee', speaker: '妮克西', text: '先问清楚：还的是旧东西，还是往后的东西？往后的东西利钱高。' },
      { if: 'party.nixee', speaker: '伊什塔努姆', text: '这块地不放利钱。' },
    ],
    choices: [
      {
        text: '还那边一样不是你们的东西：找到了，放回原处',
        effects: ['flag contract_staff'],
        result: [
          { speaker: '伊什塔努姆', text: '那就别带走。看可以，拿起来可以，走的时候它得在原处。' },
          '你虎口上的针眼收成了一个红点，针尖大。',
        ],
        goto: 'a4_11',
      },
      {
        text: '把那截盾带放到树根上',
        tag: '科琳的队伍',
        if: 'item.shield_strap >= 1',
        effects: ['flag relic_given', 'item -shield_strap', 'quest q_o_corintar done'],
        result: '皮子十七年没上过油，硬得像块木片。它是抬她的时候崩断的。你把它放在雪坑边上，树脂淌下来，盖住了一半。',
        goto: 'a4_11',
      },
      {
        text: '把银月徽放到树根上',
        tag: '达梅里亚之子',
        if: 'item.moon_badge >= 1',
        effects: ['flag relic_given', 'item -moon_badge'],
        result: '徽上的月牙朝上。这儿夜里也有月亮，跟月神之耳看见的是同一个。树脂淌下来，把银的糊成了红的。',
        goto: 'a4_11',
      },
      {
        text: '把那封带火漆的信压到树根底下',
        tag: '皇帝的差事',
        if: 'item.bardswood_letter >= 1',
        effects: ['flag relic_given', 'item -bardswood_letter'],
        result: '信在你怀里揣了十七年，四个角都磨圆了。数门的差事是从它开始的。你拿一块石头把它压住。伊什塔努姆问那上头写的什么，你说：让我数数。',
        goto: 'a4_11',
      },
      {
        text: '把账页塞进树根的缝里',
        tag: '负怨者',
        if: 'item.grudge_page >= 1',
        effects: ['flag relic_given', 'item -grudge_page'],
        result: '账页：玛瑙之门，一四二四。{?flag.entry_struck:那一条早划了，纸你一直留着。|那一条到今天没划。}你把它折了三折。矮人的一笔账，交给了一棵树。兵团要是知道，得开三天会。',
        goto: 'a4_11',
      },
      {
        text: '把那节断链埋在树根底下',
        tag: '退潮的人',
        if: 'item.chain_link >= 1',
        effects: ['flag relic_given', 'item -chain_link'],
        result: '断口是 1444 年奈拉月 11 日砸开的，茬子到今天还扎手。你拿刀尖在冻土上凿了个坑。埋下去以后，手背上那块绿还在。',
        goto: 'a4_11',
      },
      {
        text: '把庙里那本祈愿簿放到树根上',
        if: 'item.petition_book >= 1 && item.shield_strap < 1 && item.moon_badge < 1 && item.bardswood_letter < 1 && item.grudge_page < 1 && item.chain_link < 1',
        effects: ['flag relic_given', 'item -petition_book'],
        result: [
          '二十年的祷告，回音一栏是空的。你把它放在雪坑边上。',
          { if: 'party.tan', speaker: '阿坦', text: '放这儿吧。他们说这棵树是回话的。' },
        ],
        goto: 'a4_11',
      },
      {
        text: '割一绺头发，添上五十金冠的东西',
        if: 'item.petition_book < 1 && item.shield_strap < 1 && item.moon_badge < 1 && item.bardswood_letter < 1 && item.grudge_page < 1 && item.chain_link < 1',
        effects: ['flag relic_given', 'gold -50'],
        result: '你身上没有带了一路的东西。伊什塔努姆看了看你的头发，又看了看你的钱袋，两样各要了一点。',
        goto: 'a4_11',
      },
      {
        text: '递上一件不相干的东西，说它跟了你一路',
        if: 'item.shield_strap >= 1 || item.moon_badge >= 1 || item.bardswood_letter >= 1 || item.grudge_page >= 1 || item.chain_link >= 1',
        effects: ['flag relic_given', 'var lies +1', 'flag lies_cursed', ...TAN_COUNTS],
        result: [
          '你递的是一只旧水囊。伊什塔努姆收下了。树没收：雪坑里那滴血没化开，滚到了一边。',
          '当晚你虎口上的针眼烫了一夜。真东西还在你怀里。',
          { if: 'flag.a4_tan_counts && party.tan', speaker: '阿坦', text: '又一句。这句是说给一棵树听的。值不值？' },
        ],
        goto: 'a4_11',
      },
    ],
  },

  a4_11: {
    id: 'a4_11',
    title: '饮血者',
    art: 'ev_the_covenant',
    loc: '塞拉河上游 · 离岸两天的林子',
    text: [
      '离岸两天。{?flag.a4_shortcut:你们照航海志抄了近道，省下两天口粮，到这儿人还是整的。|没有近道，多绕了两天，夜里不敢生火，到这儿人人眼底是青的。}',
      '林子越走越红。树脂淌成了小溪，雪地上有爪印，四个指头，拖着走的。河口的人不往深处来，就是因为这个。',
      '先看见的是树上的：倒挂着，脸贴着树干的裂口在舔。皮是灰白的，鼻子往上翻，身上一道一道的树脂纹已经长进了肉里。它们是人变的。犯了律的。',
      '一只回过头。然后是四只。最后头那只最老，纹路从脸一直爬到胸口。没有一只出声。',
      { if: 'party.garaele', speaker: '加莱尔', text: '耳朵是尖的。我问一句：它们还记不记得自己的名字？' },
      { if: 'party.ushka', speaker: '乌什卡', text: '记不记得都得放倒。放倒了再问。' },
      { if: 'flag.lies_cursed', text: '你手背上的红痕跟着它们身上的纹路一起跳。' },
      { if: 'is.god', text: '没有一只朝你跪，也没有一只跑。它们闻的是血。你有血。' },
    ],
    first: [{ if: '!flag.a4_shortcut', then: ['hp -8'] }, 'codex bloodfeeders', 'unflag a4_tan_counts'],
    combat: {
      title: '饮血者',
      intro: '它们从树上落下来，四肢着地，没有声。',
      enemies: [{ id: 'bloodfeeder', n: 4 }, { id: 'bloodfeeder_matriarch' }],
      noAwe: true,
      xp: 1100,
      specials: [SP_LAWS, SP_SAPFIRE],
      win: { goto: 'a4_11c' },
      lose: { goto: 'a4_11b' },
    },
  },

  a4_11b: {
    id: 'a4_11b',
    title: '拖回河边',
    loc: '塞拉河口',
    text: [
      '你醒在河滩上。伊什塔努姆的猎手把你们一个一个拖回来的，拖了一夜，丢了两天。',
      '断后的那个猎手没回来。这是他们的老办法：留一个人把那些东西引开，好让其余的走。头人什么也没说，往你手里放了一串贝珠，是那个人的。',
      '再进去的时候，树上少了两只。两个猎手跟着你们，这回不肯站远了。',
    ],
    first: ['rest short'],
    combat: {
      title: '饮血者，第二回',
      intro: '老的那只还在原处，脸上的血是新的。',
      enemies: [{ id: 'bloodfeeder', n: 2 }, { id: 'bloodfeeder_matriarch' }],
      allies: [{ id: 'ruinborn_warrior', n: 2, name: '河口的猎手' }],
      noAwe: true,
      xp: 700,
      specials: [SP_LAWS, SP_SAPFIRE],
      win: { goto: 'a4_11c' },
      lose: { effects: ['rest short', 'flag a4_carried_past'], goto: 'a4_12' },
    },
  },

  a4_11c: {
    id: 'a4_11c',
    title: '没名字的',
    text: [
      '最后一只倒下的时候脸朝下趴在树根上，嘴还张着，对着那道裂口。',
      '老的那只躺在雪里。死了以后纹路退了一点，看得出是个女人，耳朵是尖的，左耳上穿着一粒贝珠。河口的人戴的那种。',
      '她腰上还系着半截草绳，绳头磨秃了。跟河滩尽头那棵白树上拴的是一种搓法。她当年也去立过约。',
      { if: 'party.ushka', speaker: '乌什卡', text: '这个磨不磨？没名字的不算一场。算半场。' },
      { if: 'party.tan', speaker: '阿坦', text: '她犯的是哪一条，没人记得了。贝珠还在。' },
      { if: 'flag.a4_burned_sap', text: '你点过的那一圈树脂，烧黑了三棵树的根。取了要还。' },
    ],
    choices: [
      {
        text: '在烧黑的树根边各埋一颗橡子',
        if: 'flag.a4_burned_sap',
        once: true,
        effects: ['unflag a4_burned_sap'],
        result: '橡子是集上换的，一把三颗，原本是预备路上吃的。你埋了三个坑。雪盖上去，看不出来。',
      },
      {
        text: '把老的那只埋了，贝珠留在她耳朵上',
        once: true,
        effects: ['approval ushka +1', 'approval tan +1', 'log 血林里一个犯了律的人。没有名字，埋了。'],
        result: [
          '冻土凿不深，石头垒了半人高。{?party.ushka:乌什卡没动锤子，搬的石头最多。|}',
          { if: 'party.tan', text: '阿坦念了四句，停了，说后头的词是求王收留的，不知道用在这儿合不合适。他把四句又念了一遍。' },
        ],
      },
      {
        text: '赶路',
        effects: [{ if: 'flag.a4_burned_sap', then: ['hp -5'] }],
        result: '{?flag.a4_burned_sap:走出半里地，烧过火的那只手开始烫。手背上多了一道，这回是黑红的。|你们把担架扛上肩，朝北走。}',
        goto: 'a4_12',
      },
    ],
  },

  a4_12: {
    id: 'a4_12',
    title: '断权杖',
    loc: '塞拉河上游 · 一座石头垒的小龛',
    text: [
      { if: 'flag.a4_carried_past', text: '这一段你是被河口的猎手架着走过来的。老的那只没追出林子。' },
      '林子中间一块空地，一座石头垒的龛，齐胸高，没用灰浆。垒它的人显然不富裕。龛里横着一根杖。',
      '六尺长，一整块白石雕的。一头嵌着个实心的蓝球，拳头大。另一头原先是一大颗磨了棱的宝石，如今只剩几粒碴子嵌在托里，碴口朝外。',
      '龛前的石板上有贝珠，七八粒，没落灰。还有人在供它。空地边上站着个猎手，离着五十步，不走近，也不走。',
      { if: 'party.tan', text: '阿坦把自己那截游行用的权杖头掏出来，凑到龛边比。白杆，蓝球，一样的。他手里那截是木头刷的漆。龛里这根大了三倍。' },
      { if: 'party.tan', speaker: '阿坦', text: '神像手里那根，顶上有一圈翅。这根没有。别的都对。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '垒龛的人不认得它是什么。认得的话，不会垒得这么矮。我只管记：有人捡到了，没舍得扔。' },
      { if: 'is.caster', text: '用不着凑近，你就知道杖上有东西：防护那一路的，很旧，劲还没散完。' },
    ],
    first: ['flag staff_seen', 'codex broken_scepter'],
    choices: [
      {
        text: '把手放到杖上，探上面的法术',
        once: true,
        check: { skill: 'arcana', dc: 15, party: true, adv: 'is.caster', mods: [CURSE] },
        ok: {
          text: '手一放上去就发麻。是防护术，当年使得极重，使到杖头的宝石撑不住。{?is.caster:这种架势你认得：劲是朝上使的，挡的是从天上落下来的东西。|别的探不出来。}',
          effects: ['xp 150'],
        },
        fail: {
          text: '麻劲顺着胳膊一直窜到肩膀，半边身子木了一顿饭的工夫。你什么也没探出来。',
          effects: ['hp -4'],
        },
      },
      {
        text: '想想在哪儿见过这种形制',
        once: true,
        check: { skill: 'history', dc: 14, party: true, mods: [CURSE] },
        ok: {
          text: '坎诺每座神殿里都有。老王的像，一手持杖，白杆蓝球。那些像立了一千多年，照着刻的人没有一个见过真的。',
          effects: ['xp 100'],
        },
        fail: {
          text: '你想起来的是安本科斯特一家当铺的招牌。{?party.nixee:妮克西说那家当铺她去过，利钱黑。|}',
          effects: ['hp -1'],
        },
      },
      {
        text: '先借走，到神殿用得上',
        effects: ['item +broken_scepter'],
        result: [
          '杖比看着沉。握了十步，手是麻的。空地边上那个猎手把矛换到了另一只手，没拦。',
          { if: 'flag.contract_staff', text: '你虎口上那个红点跳了一下。约上说的是走的时候它得在原处，没说不许借。' },
        ],
        goto: 'a4_13',
      },
      {
        text: '不动它，往神殿去',
        effects: ['approval ushka +1'],
        result: '你们绕着龛走了半圈，从贝珠边上跨过去。那个猎手朝你们点了一下头。',
        goto: 'a4_13',
      },
    ],
  },

  a4_13: {
    id: 'a4_13',
    title: '守门的',
    art: 'ev_high_temple_in_distance',
    loc: '壁画神殿 · 入口',
    text: [
      '又走了两天。从一块秃岩上望出去，林子中间戳着一座石塔，一层一层往上收。走到跟前才知道，塔只是露在外头的那一截：神殿的大半埋在树根底下，根有腰那么粗，把石头勒出了裂。',
      '门口立着三尊石像，两小一大，小的也有一人半高。没有接缝，没有机括，就是石头。大的那尊有一条胳膊颜色不对，是后补的，补得很糙。',
      '你们走到二十步，大的那尊开口了。一句话，问句的调子，用的是谁也不会的话。{?party.garaele:加莱尔的笔停了。她一个词也没听懂，这在她是头一回。|}它等了三息。然后三尊一起迈了步。',
      { if: 'item.broken_scepter >= 1', text: '大的那尊的头朝你背上那根杖偏了一寸。' },
      { if: 'is.god', text: '石头不认神。它们只认那一句话的答案。' },
    ],
    choices: [
      {
        text: '把断权杖横在身前，迎上去',
        if: 'item.broken_scepter >= 1',
        combat: { ...GATE, specials: [SP_STAFF, SP_ANSWER] },
      },
      {
        text: '一个人卡住门洞，杖交给身后的人举着',
        tag: '战士系',
        if: 'is.martial && item.broken_scepter >= 1',
        combat: { ...GATE, specials: [SP_DOOR, SP_STAFF, SP_ANSWER] },
      },
      {
        text: '一个人卡住门洞，让它们一尊一尊来',
        tag: '战士系',
        if: 'is.martial && item.broken_scepter < 1',
        combat: { ...GATE, specials: [SP_DOOR, SP_ANSWER] },
      },
      {
        text: '拔武器',
        combat: { ...GATE, specials: [SP_ANSWER] },
      },
    ],
  },

  a4_13b: {
    id: 'a4_13b',
    title: '第二回',
    text: [
      '三尊石像把你们一个一个拎起来，扔出二十步外，然后退回门口站好。没追。它们只管门。',
      '{?flag.a4_fetched_staff:回神龛那两天的路上没人说话。那个猎手还站在空地边上。你把杖从龛里请出来的时候，他把矛换了一只手。|你在雪地里躺了半天，才想起背上还有一根杖。大的那尊刚才朝它偏过头。}',
      '第二回，你把杖举在最前头。大的那尊停在半步上，一只石头脚悬着。然后三尊一齐退开，脸转向门里。',
      { if: 'party.ushka', speaker: '乌什卡', text: '它认的是杖。举杖的是谁，它不问。看门的都这样。' },
    ],
    first: ['rest short'],
    next: 'a4_14',
  },

  a4_14: {
    id: 'a4_14',
    title: '壁画厅',
    loc: '壁画神殿 · 地下的长厅',
    text: [
      '台阶往下四十七级{?party.tan:，阿坦数的|}。底下是一条长厅，宽得能并排走三辆板车。两面墙从头到脚刻满了画，上了色，颜色还在。灯一照，贴金的地方晃眼。',
      '画是按次序讲的。头一段，精灵脖子上套着锁链，链子那头攥在龙的爪子里；后来链子断了，龙倒了。再往里是一场仗，两支军，领头的两个人长得像，刻工特意把他们脸对着脸刻。题字是两个名字。',
      '再往里，一支精灵军围着一座山堡，堡门是矮人的制式。画工一幅比一幅精，到这儿连箭羽都一根一根数得清。最里头垂着一帘树根，根后头还有墙。',
      { if: 'party.garaele', speaker: '加莱尔', text: '左边这位念阿尔丹。右边这位念杜卡涅尔。兄弟。船上带过海的故事里没有这一段，一个字都没有。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '杜卡涅尔。井口那个。{?flag.dookanil_known:老萨满唱的只差一个音。|}他在这儿跟亲兄弟打仗，在山底下造我们。一个人，两头忙。' },
      { if: '!party.ushka && party.garaele', text: '加莱尔把竖井口那张拓片掏出来，按在墙上比。同一个名字，同一种写法。' },
      { if: '!party.ushka && !party.garaele', text: '右边那个名字你见过：胡尔-乔卡德的竖井口，刻在主将的位置上。' },
      { if: 'party.nixee', speaker: '妮克西', text: '贴的是真金。我没刮。规矩第四十条：别人坟里的东西，先问价，再问是谁的坟。' },
      { if: 'flag.god_opened_shaft', text: '围堡那一幅的最底下刻着一道往下的竖线，线头是空的。那口井你撬过一回，底下有东西应过你一声。画上没画那是什么。' },
    ],
    first: ['flag war_of_two_seen', 'codex war_of_two', 'codex precursors', 'quest q_wall stage 3'],
    choices: [
      {
        text: '把题字一幅一幅读下来',
        once: true,
        check: { skill: 'history', dc: 15, party: true, mods: [{ if: 'flag.a4_old_words', n: 1, why: '加莱尔教的老词' }, CURSE] },
        ok: {
          text: '头一段的题字你认出三个词：锁链，断，自己。围堡那一幅底下有一行小字，是个数目，很大，后头跟着的词是“还没回来的”。',
          effects: ['xp 150'],
        },
        fail: {
          text: '你把“龙”读成了“王”，把整段读成了另一个故事。{?party.garaele:加莱尔纠正了你，没抬头。|没人纠正你。}凑得太近，墙上的防护术在你鼻尖上弹了一下。',
          effects: ['hp -3'],
        },
      },
      {
        text: '拨开一条缝，看看最里头那幅的刻工',
        once: true,
        check: { skill: 'investigation', dc: 14, mods: [CURSE] },
        ok: {
          text: '刀口浅，线是抖的，题字只刻了一半深。前头的画是一个作坊干了几十年的活。这一幅是一个人赶出来的，手里的工夫不多了。',
          effects: ['flag a4_saw_hand', 'xp 100'],
        },
        fail: {
          text: '树根上有刺，带钩的。你什么也没看清，手背上倒是多了三道口子，这回是白的，不算账。',
          effects: ['hp -3'],
        },
      },
      {
        text: '在画里找那位管天的神',
        once: true,
        check: { skill: 'religion', dc: 15, party: true, mods: [CURSE] },
        ok: {
          text: '他在前头的画里露过四回面，跟别的神排在一处，手里一根杖。四回都是两手两脚，俱全。',
          effects: ['flag a4_whole_god', 'xp 100'],
        },
        fail: {
          text: '你找着的是管海的那位，对着他认真看了半天。',
          effects: ['hp -1'],
        },
      },
      {
        text: '把手按在那个名字上',
        tag: '退潮的人',
        if: "origin == 'tide'",
        once: true,
        effects: ['approval ushka +1', 'xp 100'],
        result: [
          '石头是凉的。造你们的人叫这个。他在这面墙上是个跟亲兄弟打仗的将军，没有一幅画着他手里牵着什么。',
          { if: 'party.ushka', speaker: '乌什卡', text: '按完了？按完了把手拿下来。我们不欠他的。' },
        ],
      },
      {
        text: '在账页背面添一行：欠债的人长这样',
        tag: '负怨者',
        if: "origin == 'grudge'",
        once: true,
        effects: ['approval garaele +1', 'xp 100'],
        result: [
          '围堡那一幅。兵团账本上最老的那一条，欠债的人你今天头一回见着了长相：尖耳朵，高个子，旗上绣的是一只手。',
          '{?item.grudge_page >= 1:你在账页背面添了一行，照规矩先写数目，再写事。|账页已经交给了那棵树。你把这一行记在袖口的里子上，回去再誊。}',
        ],
      },
      {
        text: '看那座山堡的门楣',
        tag: '矮人',
        if: "race == 'dwarf'",
        once: true,
        effects: ['xp 100'],
        result: '你认得。门楣上压着三道水纹，是管铅和水道的那一家：胡尔-乔卡德。{?flag.castellar_seen:它的井口你去过。|}一千四百多年前围它的人，把自己的仗刻在了自己的墙上，刻得很得意。',
      },
      { text: '拨开树根，进去', goto: 'a4_15' },
    ],
  },

  a4_15: {
    id: 'a4_15',
    title: '最后一幅',
    art: 'load_17',
    loc: '壁画厅尽头 · 树根后面',
    text: [
      '树根后头是最后一面墙。{?flag.a4_saw_hand:刀口浅，线是抖的。|这一幅比前头的都粗，刀口浅，线是抖的。}你举着灯。{?party.tan:阿坦站在你左手边，半步远。|}',
      '画的当中是一团火，从一整片大地中间腾起来，石头和雷电往四下里落。旁边一个人从云里下来，一手持杖，另一条胳膊朝那团火伸过去。伸出去的那条胳膊齐腕而断，没有手。一领银披风遮着他左半边，披风底下少一条腿。雷电是朝他去的。火比他大。',
      '题字两处。人的旁边一行：卡斯特拉尔，天空之神。火的旁边一个字：终。',
      '厅里只有灯芯响。没有人应声。',
      { if: 'flag.a4_whole_god', text: '前头那四幅里，他两手两脚俱全。' },
      { if: 'party.tan', speaker: '阿坦', text: '缺的是左臂左腿。庙里那尊像，我擦了十七年。' },
      { if: 'flag.god_avatar_claimed && party.tan', speaker: '阿坦', text: '那年他们说你是王的化身，你认了。我当时说你不是。' },
      { if: 'is.god && party.tan', text: '一位活的神，站在这面墙前头。阿坦没问你是不是真的。' },
      { if: 'is.god && party.tan', speaker: '阿坦', text: '你怕不怕？' },
      { if: "origin == 'corintar'", text: '你想的是另一件事。多米尼克说她升了天。天上那把椅子的主人画在这儿。那她升的是谁的天？' },
      { if: "origin == 'corintar' && party.tan", speaker: '阿坦', text: '那天她倒下去的时候，脸朝哪边？' },
      { if: "origin == 'corintar' && party.tan", text: '{?flag.saw_her_look:你答得出。你在盾墙里看见了。她没朝天上看。|你没看清。你照实说了没看清。}' },
    ],
    first: [
      'quest q_dragon stage 5', 'codex mural', 'codex castellar',
      { if: "origin == 'corintar'", then: ['quest q_o_corintar stage 3'] },
    ],
    choices: [
      {
        text: '把灯交到他手里，让他自己看完',
        if: 'party.tan',
        effects: ['flag tan_read_it', 'approval tan +2'],
        result: [
          { if: 'flag.a4_tan_lamp', speaker: '阿坦', text: '我说过，灯我想自己举。' },
          '他从左看到右，又从右看到左。数了画上的雷，十一道。然后他把灯放在地上，试了一个小法术，手心里亮了一下。',
          { speaker: '阿坦', text: '还灵。' },
        ],
        goto: 'a4_16',
      },
      {
        text: '站到他前头，替他念，念得慢一点',
        if: 'party.tan',
        effects: ['flag tan_shielded'],
        result: [
          '你挡住了那条断臂，从题字念起，一个字一个字地念。他没绕过你。念完了，他在你背后试了一个小法术。',
          { speaker: '阿坦', text: '还灵。' },
        ],
        goto: 'a4_16',
      },
      {
        text: '替他念，再添一句：也许画错了',
        if: 'party.tan',
        effects: ['flag tan_shielded', 'var lies +1', 'hp -5', ...TAN_COUNTS],
        result: [
          '话刚出口，手背上烫了一下，多一道。这块地算账不过夜。',
          { speaker: '阿坦', text: '画没画错，我看得见。你那一句，我也数上了。' },
          { if: 'flag.a4_tan_counts', speaker: '阿坦', text: '到三的倍数了。我问一回：这句值不值？' },
          '他绕过你，自己把题字看了一遍，试了一个小法术。',
          { speaker: '阿坦', text: '还灵。' },
        ],
        goto: 'a4_16',
      },
      {
        text: '把手按在墙上，对阿坦说：往后你念的，我听着',
        tag: '神',
        if: 'is.god && party.tan',
        effects: ['flag tan_read_it', 'flag god_answered_for_him', 'approval tan -2'],
        result: [
          { speaker: '阿坦', text: '银龙也是这么干的。干了五百年。' },
          '他没再说别的。他试了一个小法术，手心里亮了一下。',
          { speaker: '阿坦', text: '还灵。' },
          '从这天起，每天天亮你都听得见四十句晨祷，不管你在哪儿。',
        ],
        goto: 'a4_16',
      },
      {
        text: '举着灯不动，各看各的',
        effects: ['flag tan_read_it'],
        result: [
          '灯油烧下去一指。画上的雷你数了，十一道。',
          { if: 'party.tan', text: '阿坦借着你的灯把题字看了三遍。然后他试了一个小法术，手心里亮了一下。' },
          { if: 'party.tan', speaker: '阿坦', text: '还灵。' },
        ],
        goto: 'a4_16',
      },
    ],
  },

  a4_16: {
    id: 'a4_16',
    title: '头一场丧事',
    loc: '壁画厅',
    text: [
      '一千四百多年，没人给他办过。没有尸首，没有坟，只有一面墙。来的人各拿各家的规矩。',
      { if: 'party.ushka', text: '乌什卡在墙根蹲了一会儿，找骨头。没有。她把锤子横放在墙根底下，锤头朝着那条断臂。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '没有料，礼做不全。锤子先押在这儿，算我欠他一场。' },
      { if: 'party.garaele', text: '加莱尔在等月亮。厅顶塌了一角，成了个天井。月神的人下葬要有月光。她等了半夜，月亮照进来一条，正落在题字上。她什么也没念，把那一条光的位置记在了本子上。' },
      { if: 'party.nixee', text: '妮克西往墙根放了一枚金冠，正面朝上。' },
      { if: 'party.nixee', speaker: '妮克西', text: '死人的账不过夜。他这笔过了一千四百多年的夜。利钱我不算了。' },
      { if: 'party.tan', text: '阿坦念晨祷。天没亮，他照念。四十句，一句不快，一句不慢。' },
      { if: 'is.god && party.ushka', speaker: '乌什卡', text: '你死不了。将来没人给你做礼。这一场你看仔细。' },
      { if: "origin == 'sons'", text: '达梅里亚之子给一口空棺材办过全套的葬礼，棺材里的人后来活蹦乱跳。这回反过来：人是真没了，棺材没有。' },
      '轮到你。',
    ],
    first: ['unflag a4_tan_counts'],
    choices: [
      {
        text: '接过主礼的位置',
        tag: '神职',
        if: 'is.divine',
        once: true,
        effects: ['flag a4_led_rite', 'approval tan +1'],
        result: '{?party.tan:阿坦往旁边让了一步，把那截权杖头递给你拿着。他说：你来。我念了十七年，念给谁听的，我今天才看见。|你站到了墙的正前头。}',
      },
      {
        text: '照战死者的规矩办：他是倒在阵前的',
        effects: ['world scale +1', ...RITE_DONE],
        result: [
          '战死的人，照规矩脸朝着敌人埋。他没有脸可摆。你们把灯挪了挪，让那条断臂冲着火的那一面亮着。',
          { if: "faction == 'tried'", text: '你添了一句：他是下场试过的。拦没拦住另说。' },
          LED_RITE,
        ],
        goto: 'a4_17',
      },
      {
        text: '请长子的名字来主丧',
        effects: ['world scale -1', { if: "faction == 'heirs'", then: ['rep temples +1'] }, ...RITE_DONE],
        result: [
          '照坎诺的规矩，父亲的丧事长子主持。你把阿德安的名字念了三遍，替一个不在场的孝子磕了头。',
          { if: "faction == 'heirs'", text: '理由你是说给墙听的：名分定了，后头的人才不用为这把椅子再死一回。这句话，回去以后神殿里有人爱听。' },
          LED_RITE,
        ],
        goto: 'a4_17',
      },
      {
        text: '只送，不提谁来接',
        effects: ['approval tan +1', ...RITE_DONE],
        result: [
          '你们只送。没提谁来接，没提椅子，没提往后。完了，各人把自己带来的那样东西又看了一眼。',
          { if: "faction == 'crownless'", text: '椅子空着。你没往上放任何名字。' },
          LED_RITE,
        ],
        goto: 'a4_17',
      },
      {
        text: '没工夫，收拾东西走',
        effects: ['approval ushka -2'],
        result: '你说灯油不够了。{?party.ushka:乌什卡把锤子从墙根捡回来，别回腰上，没看你。|}一千四百多年都等了，他不差这一晚。你们差。',
        goto: 'a4_17',
      },
    ],
  },

  a4_17: {
    id: 'a4_17',
    title: '那面墙',
    text: [
      '{?flag.rite_done:丧事办完，剩一件事|剩一件事}：这面墙怎么办。四个人四个主张，从半夜吵到灯油见底。',
      { if: 'party.ushka', speaker: '乌什卡', text: '封门。石头砌死，什么都不带。尸首落到谁也用不上的地步才算完，墙也一样。带出去一张纸，就有人拿它当旗。' },
      { if: 'party.tan', speaker: '阿坦', text: '得告诉拜他的人。每天早上有几万人对着空屋子说话，我是其中一个。听不听由他们。我只管说。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '拓下来，存档。四张纸的事。记下来的东西归谁，我父母吵了一辈子没吵出结果，所以我只管记。别让我来挑。' },
      { if: 'party.nixee', speaker: '妮克西', text: '拿去换东西。康原的地，城约的印，南门的粮。这面墙值半个坎诺，你们打算白扔？规矩第三条：手里有货，先别说不卖。' },
      '谁也没说服谁。灯油还够一个时辰。',
      '万神道上那座没屋顶的庙，门背后抄着四十一句。拓片要是进了城，头一个看见它的会是那个守庙的姑娘，她今年该十六了。门要是砌死，往后再有人从林子里走过来，看见的只是一面新墙。',
      { if: "origin == 'wex'", text: '你在灯底下起了一封报告的头：呈陛下御览。写完这五个字，后头的不知道该怎么写。' },
    ],
    first: ['quest q_wall stage 4'],
    choices: [
      {
        text: '拓下来带走',
        effects: ['flag wall_rubbed', 'item +mural_rubbing', 'world word +2', 'approval garaele +2', 'approval tan +1', 'approval nixee +1', 'approval ushka -1'],
        result: '最后一幅拓了四张纸才拓全。{?party.garaele:加莱尔的手很稳。|你的手不大稳。}墨是集上换的，掺了树脂，干了发红。',
        goto: 'a4_18',
      },
      {
        text: '搬石头，把门砌死',
        effects: ['flag wall_sealed', 'approval ushka +2', 'approval tan -1'],
        check: { skill: 'athletics', dc: 14, party: true, mods: [CURSE] },
        ok: {
          text: [
            '砌了一天一夜。石头是塌下来的厅顶，一块一块对着茬口码上去，码得很规矩。',
            { if: 'party.garaele', speaker: '加莱尔', text: '我答应不说。也不否认。' },
          ],
          goto: 'a4_18',
        },
        fail: {
          text: [
            '砌到一半塌了一回，砸了你的脚。重码的那半边是歪的，缝里塞的是碎石。往后来的人一眼看得出是新砌的。',
            { if: 'party.garaele', speaker: '加莱尔', text: '我答应不说。也不否认。这扇门自己会说。' },
          ],
          effects: ['hp -6'],
          goto: 'a4_18',
        },
      },
      {
        text: '两样都做：先拓，再砌',
        effects: ['flag wall_rubbed', 'flag wall_sealed', 'item +mural_rubbing', 'world word +2', 'approval garaele +1', 'approval ushka +1'],
        check: { skill: 'athletics', dc: 14, party: true, mods: [CURSE] },
        ok: {
          text: '先拓，四张纸。再砌，一天一夜，石头对着茬口码，码得很规矩。{?party.ushka:乌什卡看了一眼你怀里的纸筒，没说话，接着搬石头。|}',
          goto: 'a4_18',
        },
        fail: {
          text: '拓片是好的。门砌到一半塌了一回，砸了你的脚，重码的那半边是歪的。往后来的人一眼看得出是新砌的。',
          effects: ['hp -6'],
          goto: 'a4_18',
        },
      },
      {
        text: '把最后一幅凿掉',
        effects: ['flag wall_defaced', 'flag tan_stayed', 'flag garaele_leaving', 'approval garaele -5', 'approval ushka -1', 'quest q_dragon done'],
        result: [
          '{?party.ushka:锤子是跟乌什卡借的。她给了，没说话。|你用的是随身的锤子。}断臂先掉的，然后是杖，最后是那两行字。凿了一个时辰，地上一层白渣。',
          { if: 'party.tan', speaker: '阿坦', text: '剩下的我守着。前头那些画里他是全的。你们走。' },
          { if: 'party.tan', text: '他没跟你们争。他把权杖头从包里拿出来，摆在凿过的墙根底下。' },
          { if: 'party.garaele', speaker: '加莱尔', text: '这一趟我陪你们走完。出了林子，我回月山。往后的事，我不记了。' },
        ],
        goto: 'a4_18',
      },
    ],
  },

  a4_18: {
    id: 'a4_18',
    title: '那根杖，和回去的路',
    loc: '塞拉河上游 · 石头垒的小龛',
    text: [
      '回程先过神龛。{?item.broken_scepter >= 1:杖在你背上，背了一路，肩膀是麻的。|杖还横在龛里，贝珠多了两粒。}那个猎手还站在空地边上，这回走近了十步。',
      '带回去，它是证物：六尺白石，谁见了都得闭嘴。留下，它是别人供了不知多少年的东西。',
      { if: 'flag.tan_stayed', text: '阿坦没跟来。他在神殿门口垒了个灶，三块石头。' },
      { if: 'flag.contract_staff', text: '你虎口上那个红点还在。约上说的是：走的时候它得在原处。' },
      { if: 'flag.toll_staff', text: '你还答应过另一位，回程把它留在秋门。两个约，一根杖。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '这是他的东西。骨头没有，就剩这个。放回去。' },
      { if: 'party.tan', speaker: '阿坦', text: '它在这儿有人供。带回万神道，也有人供。哪一头算数，我不知道。' },
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第三条。我不重复了。' },
    ],
    first: [{ if: 'flag.tan_stayed', then: ['companion -tan'] }],
    choices: [
      {
        text: '带回坎诺',
        effects: [
          'flag staff_home',
          { if: 'item.broken_scepter < 1', then: ['item +broken_scepter'] },
          'world word +1',
          { if: 'flag.contract_staff', then: ['flag contract_broken', 'flag lies_cursed', 'var lies +1', 'damage 2d8', ...TAN_COUNTS] },
        ],
        result: [
          '你把杖拿帆布裹了三层，捆在担架上。这副担架进林子以来头一回抬东西。',
          { if: 'flag.contract_broken', text: '走出空地，虎口上那个红点裂开了。血是烫的，顺着手腕往下淌，淌过的地方起了一道新痕。猎手把矛尖抬了起来，没追。约毁了。' },
          { if: 'flag.contract_broken && flag.a4_tan_counts && party.tan', speaker: '阿坦', text: '许了，没办。这也算一句。我数上了。' },
        ],
        goto: 'a4_18b',
      },
      {
        text: '放回龛里',
        effects: [
          'flag staff_returned',
          { if: 'item.broken_scepter >= 1', then: ['item -broken_scepter'] },
          'approval ushka +1',
          { if: 'flag.contract_staff', then: ['heal 4d8'] },
        ],
        result: [
          '{?visited.a4_13b:你把它从背上解下来，横放回龛里，蓝球朝东，跟原先一样。|杖横在龛里，蓝球朝东。你们从贝珠边上跨了过去。}那个猎手走过来，往石板上添了一粒贝珠。',
          { if: 'flag.contract_staff', text: '虎口上那个红点没了。当晚谁也没做梦，早上起来，一路上的伤轻了一半。约成了。' },
        ],
        goto: 'a4_18b',
      },
    ],
  },

  a4_18b: {
    id: 'a4_18b',
    title: '秋门',
    loc: '血林 · 秋门',
    text: [
      '秋门是两棵挨着的树。满林子红叶，只有这两棵是黄的，中间的地上没有雪。',
      { if: 'flag.blackbranch_deal', text: '黑枝的乌鸦蹲在左边那棵上，数了数人{?flag.tan_stayed:。少一个，它又数了一遍|}。' },
      { if: '!flag.toll_staff && !flag.blackbranch_deal', text: '过路的账，进来的时候已经付了。门口没人伸手。' },
      { if: 'flag.toll_staff', text: '愚者亲王坐在两棵树中间的一把矮凳上，今天是个瘦子。他伸出一只手，手心朝上。' },
      { if: 'flag.toll_staff', speaker: '愚者亲王', text: '那根杖。说好的。我想拿去给几位朋友瞧瞧，看他们会错成什么样。不给也行：不给，每位留下十年。' },
      { if: 'flag.toll_staff && flag.staff_returned', text: '你两手是空的。杖在龛里。' },
      { if: 'flag.toll_staff && party.nixee', speaker: '妮克西', text: '还有第三种付法，他没说，我替他说：凳子。' },
    ],
    choices: [
      {
        text: '把杖交到他手里',
        if: 'flag.toll_staff && flag.staff_home',
        effects: ['flag staff_fey', 'unflag staff_home', 'item -broken_scepter', 'world word +1'],
        result: [
          '他两只手接的，接得很小心，然后拿它当拐棍拄了拄。',
          { speaker: '愚者亲王', text: '我先拿去给几位老朋友瞧瞧。黑枝那位见了，脸色一定好看。他们会问这是谁的。我就说：猜。' },
        ],
        goto: 'a4_18c',
      },
      {
        text: '让妮克西留下抵账',
        if: 'flag.toll_staff && party.nixee',
        effects: ['unflag toll_staff', 'flag toll_nixee'],
        result: [
          { speaker: '妮克西', text: '我就知道这笔账绕不过去。康原的欠条你拿着。蓝牙认，你就去讨；他不认，你就去吵。' },
          '亲王站起来，把矮凳让给了她。她爬上去，脚够不着地。',
        ],
        goto: 'a4_18c',
      },
      {
        text: '从两棵树中间迈过去',
        effects: [{ if: 'flag.toll_staff', then: ['unflag toll_staff', 'flag toll_years', 'flag a4_gate_years', 'approval ushka -1', 'approval tan -1', 'approval nixee -1', 'approval garaele -1'] }],
        result: [
          { if: 'flag.a4_gate_years', speaker: '愚者亲王', text: '那就是年头。每位十年，出去再算。我不拦门，我只记账。' },
          { if: 'flag.a4_gate_years', text: '{?is.longlived:十年在你只是个零头。别人的不是。|迈过去的时候你的膝盖响了一声。以前不响。}' },
          { if: '!flag.a4_gate_years', text: '两棵树中间比外头暖。' },
        ],
        goto: 'a4_18c',
      },
    ],
  },

  a4_18c: {
    id: 'a4_18c',
    title: '回去的路',
    art: 'ev_magical_forest_animated',
    loc: '妖精界 · 一条直路',
    text: [
      '回去的路比来的时候短，短得不对。没有雪林，没有灯，只有一条直路，直得让人不踏实。',
      '担架扛在肩上，{?flag.staff_home:帆布里裹着那根杖，压得杆子往下弯。|上头是空的，帆布叠成了一条，捆在杆子上。}{?flag.wall_rubbed:拓片卷成筒，塞在最干的那只包里。|}身后有人喊你，喊一声近一步。',
      '{?flag.blackbranch_deal:乌鸦飞在前头，这回不回头数人了。|带路的换了一个，是个不说话的小妖，背上背着一把空凳子。}',
      { if: 'party.tan', text: '阿坦又在数脉。数到两千，他说不对，这一段走得太快，脉跟不上。' },
      { if: 'item.fey_token >= 1', text: '你兜里那枚木扣子是热的，朝着一个方向拽。' },
    ],
    first: [{ if: 'flag.toll_nixee', then: ['companion -nixee'] }],
    choices: [
      {
        text: '顺着直路走，不回头',
        check: { abil: 'wis', dc: 15, save: true, adv: 'item.fey_token >= 1', mods: [CURSE] },
        ok: { text: '你没回头。身后有人喊了你一路，喊的是你的全名，连你自己都快忘了的那个。', goto: 'a4_19' },
        fail: {
          text: '你回了一下头。就一下。出来的地方偏了三十里，是一片沼泽，水齐腰。等绕回那圈黑土，靴子里的水还没倒干净。',
          effects: ['hp -8'],
          goto: 'a4_19',
        },
      },
    ],
  },

  a4_19: {
    id: 'a4_19',
    title: '出林',
    art: 'ev_feyforest',
    loc: '深林边缘 · 旧日庇护地以南',
    date: '1472年奈拉月',
    text: [
      '林子外头是秋天。进去的时候也是秋天，叶子黄得一样。只是那圈黑土边上的棚子换了新顶，棚边多了一座小坟。',
      '寄车的老头不在了。看车的是个十来岁的男孩，耳朵尖还没长开。板车在，轴上了油，骡子换了一头。那扇记名字的旧门板靠在棚柱上，炭字描过好几回。',
      { speaker: '看车的男孩', text: '车是我爷爷留下的。他说寄车的人不回来，车不许卖。你们是门板上写的那几个？' },
      '{?party.tan:阿坦|你}问他今年是哪一年。',
      { speaker: '看车的男孩', text: '1472。奈拉月。东边又在打仗。' },
      '你们在里头过了一个冬天。',
      { if: 'is.immortal', text: '男孩盯着你看了半天。他爷爷寄车那天你就是这个样子。爷爷跟他说过：里头有一个不会老的，别怕，也别信。' },
      { if: 'flag.toll_years && !flag.owes_fey_miracle', text: '十一年是林子拿走的。另外那十年是你们自己付的：{?is.longlived:你只当少了个零头。|你上车的时候扶了一把车帮。}' },
      { if: 'flag.a4_acorn', text: '你兜里那枚木扣子变成了一颗橡子。' },
      { if: 'party.tan', speaker: '阿坦', text: '守庙的那个，今年十六了。门背后的粉笔字，不知道还看不看得清。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '十一年。氏族里跟我同一年出门巡游的，该回去的都回去了。我是最后一个。' },
      { if: 'party.nixee', speaker: '妮克西', text: '十一年的利钱。规矩里没这一条，我得现拟。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '{?flag.garaele_leaving:到头一个岔路口，我下车。|我只管记。日期那一栏，我先空着。}' },
      { if: 'flag.toll_nixee', text: '你左边兜里有一张叠成指甲盖大的纸。康原的欠条。' },
      { if: 'flag.tan_stayed', text: '车上少一个人。没人去坐他常坐的那一角。' },
    ],
    first: [
      'level 10',
      'quest q_wall done',
      'quest q_cart stage 5',
      'rest short',
      'unflag a4_tan_counts',
      { if: 'item.fey_token >= 1', then: ['item -fey_token', 'flag a4_acorn'] },
    ],
    next: 'f_01',
  },
};
