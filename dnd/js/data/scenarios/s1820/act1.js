// act1.js：s1820《泪尽》第一幕 · 收成（1820 年花始月至泪落月，2 级 → 4 级）。
// 只改本文件；自检：node tools/check-part.mjs s1820 act1.js
//
// 提纲（对照圣经 11.2；带字母后缀的是本段加的小场景）
// a1_01  史家会讲堂。别摇纠正标签，要开盖。开一条缝（jar_trust +1）／先问主管／回头再说（jar_snubbed）。
//        察觉 12 → spotted_bidders。[卡尔希尔] 上台补一句。→ a1_02
// a1_02  后院。西尔卡拉斯出价，翻墙的来抢。战（按人数两档；spotted_bidders 时多一个巡夜人助战）。→ a1_02b
// a1_02b 合伙人的汇票压过卡拉桑尼（q_partner 开，q_jar 第 2 阶段）。西尔卡拉斯私下出五百：
//        回绝（silcalas_refused）／拖着／[印] 念附言。→ a1_03
// a1_03  枢纽。礼拜三入队（固定效果），q_bura 开。埃塔、布拉、别摇、礼拜三各一段；[无主者] 工会会员证；
//        [巨魔湾] 乌戈的保函；[机械人] 伙食费；[奇械] 轴承；[神] 看病。铺子，长休。签字 → a1_04
// a1_04  陆军部。将军问地，吉列姆报到入队。洞悉 13 → partner_hint_1。讲价／[印] 加第九条（clause_refusal）／
//        问前两支巡回队。[安本纳尔] 问欠饷。[神] 他来问你怎么办到的。→ a1_05
// a1_05  码头装车：运动 11（败 crate_cracked）／雇人／叫十四号驮。→ a1_05b
// a1_05b 河上。看土（自然 12，c_verdancy）。小册子：撕／读／随它去；[洛伦特] 认水印。→ a1_06
// a1_06  头一个区，催苗。[施法者] 进圈（shared_circle）；[长寿] 说旧产量；[武人] 扛人；买面包；守车；
//        [神] 治土（soil_mended）。→ a1_07
// a1_07  电报十三个字（skiplist_telegram）。→ a1_08
// a1_08  团务会。照办（skiplist_obeyed，overruled +1）／趁夜施（隐匿 13，败 skiplist_caught）／请别摇起雾再施／
//        当众念（skiplist_read_out）／表决／[盾] 减半（skiplist_halved）／[印] 书面拒绝（refusal_on_paper）。→ a1_09
// a1_09  梨林，3 级。吉列姆的手。医药 12（败：少一个区）／收走咖啡壶。[神] soil_mended 时再治一回。→ a1_10
// a1_10  纤道夜袭。战：莉安娜和两个老同袍。特技砍纤绳、请别摇。[施法者] 喊破起手式。
//        [神] 吓退的人拖走一个变化师。输 → crystals_lost。→ a1_11
// a1_11  莉安娜。洞悉 13 学校是真的；医药 14 剜一粒寇拉希；[施法者] 问黑弹的滋味。
//        交治安军／放走／分她一箱（三个 lianne_* 之一）。→ a1_12
// a1_12  康威尔客栈。白玫瑰王庭挖人：揭穿／收八十／让法师自己定；[洛伦特] 钱袋三选一（purse_*）。→ a1_12b
// a1_12b 报馆街。史家酬金头一回：卖史家会／卖卡拉桑尼／锁箱（box_skiplist）。药铺，短休。
//        [神] 中士的黑弹（box_turned_blue）。→ a1_13
// a1_13  公投日。察觉 15 → saw_shooter_window。站中间（成：不开战）／带法师走（战甲）／守线（战乙）；
//        [神] 子弹停在半空（square_miracle）。→ a1_14
// a1_14  医护所。礼拜三的数（shot_counted）。裹伤；[灯] 交笔记（square_reported）。“起因”一栏（blame_*）。→ a1_15
// a1_15  结算表。吉列姆辞职。调查 14 → wastage_ref。去阿兰蒂尔塔带信还是带梨。→ a1_16
// a1_16  门房。说服 15（成 heard_hum）／排队；[神] 自己走进去（fragment_hushed）。→ a1_16b
// a1_16b 娜尔雯入队（固定效果挪到她露面的这一场）。→ a1_17
// a1_17  头一份报告：写全／删改／说谎（欺瞒 13，败 partner_knows_lie）。五个出身各一份另抄。→ a1_18
// a1_18  数流星，4 级。四个同伴各一句；[神] 让它多落一阵（tears_called）。→ a2_01
//
// 本段自用标记（前缀 a1x_）：jar_grabbed、general_asked、asked_circuits、soil_read、guilhem_spent、
// mage_dragged、school_true、grant_done、jailed、letter、embassy_done。

// ---- 战斗里反复用到的零件 ----
const JAR_ASK = {
  id: 'jar_ask', name: '问别摇肯不肯出来', desc: '她肯的话，全场晃眼一回合',
  check: { skill: 'persuasion', dc: 12, mods: [{ if: "var.jar_trust >= 1", n: 2, why: '你给她开过盖子' }] },
  success: { text: '“半个人情。”盖子自己转开了。一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。', applyAll: { cond: 'blinded', turns: 1 } },
  fail: { text: '“不。你们的架，你们打。”她在罐底转了个身，背对着你。' },
};
const JAR_OPEN = {
  id: 'jar_open', name: '不问，直接拧开罐子', desc: '全场晃眼一回合；她会记账',
  success: { text: '你一把拧开盖子。她冲出来的时候亮得像烧着的镁条，所有人都捂了眼。“我没答应。记了一笔，红的。”', applyAll: { cond: 'blinded', turns: 1 }, effects: ['var jar_trust -1'] },
};
const YARD_BELL = {
  id: 'bell', name: '敲史家会的钟', desc: '把整个神殿区叫醒',
  check: { skill: 'performance', alt: ['athletics'], dc: 12 },
  success: { text: '钟一响，半条街的窗户亮了。翻墙进来的人开始回头看墙。', applyAll: { cond: 'frightened', turns: 2 } },
  fail: { text: '钟绳去年就该换了。你手里多了一截麻绳，钟没动。' },
};
const YARD = {
  title: '史家会后院',
  intro: '头一个落地的踩断了一株药草。他们朝标本库的门去，没人看你。',
  specials: [YARD_BELL, JAR_ASK, JAR_OPEN],
  win: { effects: ['gold +40'], goto: 'a1_02b' },
  lose: { effects: ['flag a1x_jar_grabbed', 'gold +20', 'heal 1d6+2'], goto: 'a1_02b' },
};
const YARD_FEW = [{ id: 'thug', n: 2, name: '翻墙的打手' }];
const YARD_MANY = [{ id: 'thug', n: 3, name: '翻墙的打手' }, { id: 'cutpurse', name: '拿撬刀的' }];
const YARD_WATCH = [{ id: 'village_militia', name: '史家会的巡夜人' }];

const ROPE = {
  id: 'rope', name: '砍断拴船的缆', desc: '让驳船带着晶体车顺水漂走',
  check: { skill: 'athletics', dc: 13, mods: [{ if: 'flag.a1x_asked_circuits', n: 2, why: '你睡前看过那个结' }, { if: 'is.sailor', n: 2, why: '你认得这种结' }] },
  success: { text: '一刀下去，缆绳弹起来抽在水面上。驳船离了岸，跳板掉进河里。领头的女人追到齐膝深的水里，站住了，看着一车晶体往下游漂。', end: 'win' },
  fail: { text: '缆是浸过桐油的三股麻，刀砍进去一半就夹住了。你拔刀的时候挨了一下。', selfDmg: '1d4' },
};
const TOWPATH = {
  title: '纤道夜袭',
  intro: '跳板响了三下。领头的女人没看钱箱，军刀指的是铅皮箱。',
  enemies: [{ id: 'thug', name: '使军刀的老兵' }, { id: 'court_mage', name: '还施得出法的老战斗法师' }, { id: 'lianne_warmage', name: '领头的女人' }],
  specials: [ROPE, JAR_ASK],
  win: { goto: 'a1_11' },
  lose: { effects: ['flag crystals_lost', 'heal 1d6+2'], goto: 'a1_11' },
};
const RESCUE = {
  id: 'rescue', name: '把被拖走的变化师抢回来', desc: '退走的人拿他挡在身前',
  check: { skill: 'athletics', alt: ['acrobatics'], dc: 12 },
  success: { text: '你三步追上去，一把攥住那件灰外套的后领。拖人的那个松了手，头也没回。', effects: ['unflag a1x_mage_dragged'] },
  fail: { text: '纤道上全是露水。你脚下一滑，灰外套从你指头缝里溜走了。' },
};

const SQUARE_BELL = {
  id: 'bell', name: '敲神殿的钟', desc: '钟一响，两边都会停手',
  check: { skill: 'athletics', dc: 13 },
  success: { text: '你撞开钟楼的门，把整个人吊在钟绳上。康威尔的大钟一百年没在礼拜天以外的日子响过。枪停了，喊声也停了。', end: 'win' },
  fail: { text: '钟楼的门从里头闩着。你撞了两下，先受不了的是肩膀。', selfDmg: '1d4' },
};
const SQUARE_A = {
  title: '康威尔广场',
  intro: '巷口一个班的治安军把枪横了过来。后头是人，前头是刺刀。',
  enemies: [{ id: 'line_rifleman', n: 4, name: '治安军' }, { id: 'dragoon', n: 2, name: '骑马的治安军' }],
  specials: [SQUARE_BELL, {
    id: 'sergeant', name: '把老中士说下来', desc: '他那个班听他的',
    check: { skill: 'persuasion', dc: 13, adv: 'party.bura' },
    success: { text: '带班的老中士头发全白了，1810 年打过皇帝。你问他这一枪是替谁放的。他那个班的枪口抬高了半尺。', applyAll: { cond: 'frightened', turns: 2 } },
    fail: { text: '老中士看了你一眼，把脸转了回去。“装弹。”' },
  }],
  win: { goto: 'a1_14' },
  lose: { effects: ['flag a1x_jailed', 'heal 1d6+2'], goto: 'a1_14' },
};
const SQUARE_B = {
  title: '税关的台阶',
  intro: '齐射过后人群没有散干净。有一拨是冲着投票箱和灰外套来的。',
  enemies: [{ id: 'striker', n: 5, name: '抄撬棍的' }, { id: 'revolutionary', n: 2, name: '领头喊话的' }],
  specials: [SQUARE_BELL, {
    id: 'leader', name: '冲领头的喊：票箱还开着', desc: '他们是来投票的，至少早上是',
    check: { skill: 'persuasion', alt: ['intimidation'], dc: 13 },
    success: { text: '领头的那个愣了一下，回头去看税关门口。票箱确实还在，两个书记趴在箱子上护着。他手里的撬棍低了。', applyAll: { cond: 'frightened', turns: 2 } },
    fail: { text: '“票？”他朝地上啐了一口。地上躺着人。' },
  }],
  win: { goto: 'a1_14' },
  lose: { effects: ['gold -10', 'heal 1d6+2'], goto: 'a1_14' },
};

export const SCENES = {
  a1_01: {
    id: 'a1_01',
    title: '标签写错了',
    chapter: '第一幕 · 收成',
    art: 'ev_far_and_wide',
    loc: '安本科斯特 · 神殿区 · 史家会讲堂',
    date: '1820年花始月9日',
    text: [
      '史家会的总档案馆在神殿区，讲堂在一楼，长凳是后添的，硌人。典藏主管为了查档方便搬进了地下室住，今天难得上楼。讲台上摆着一只果酱罐，标签上两个字：别摇。公司接的活是站在罐子旁边，不让人摇。',
      '阿尔瓦·西尔·阿蒙在台上讲那片海。讲到漩涡把船头往下拽，他两只手比划得比嘴还快。',
      { speaker: '阿尔瓦', text: '下去的时候是有点吓人，是的。可你们想想，那底下有海！有海就能行船，能行船就……' },
      '罐子里有人敲了三下玻璃。指甲盖大的一个人，站在罐底，仰着脸。',
      { speaker: '罐子里那位', text: '标签写错了。我是仙子，有氏族的那种。皮克精脑子慢半拍，你们看我慢吗。' },
      '第三排坐着十一个记笔记的，十一支笔一齐停了。典藏主管的眼镜滑到了鼻尖。讲堂外头，泰卢姆的传令员还在摇铃，喊的是“皮克精进城”。他得改词了。',
      { speaker: '罐子里那位', text: '你。站岗的那个。把盖子拧开一条缝。你们这屋的空气淡得没味儿，罐子里的更淡。' },
      { if: "origin == 'karshyr' && flag.alvar_friend", text: '阿尔瓦从台上指着你喊：“搬草的那位！诸位，这位当时在场！”罐子里那位隔着玻璃打量了你很久，说你身上有她老家的潮气。' },
      { if: "origin == 'karshyr' && !flag.alvar_friend", text: '阿尔瓦眯着眼看了你半天，一拍讲桌：“托拉普里亚卡！码头上卸货的！”罐子里那位隔着玻璃打量了你很久，说你身上有她老家的潮气。' },
      { if: 'is.god', text: '她朝你这边看了一眼，往罐子另一侧挪了半寸，转过身去假装看标签。阿尔瓦讲着讲着卡了壳，翻了两页讲稿，没找到自己讲到第几个漩涡。' },
    ],
    first: ['codex c_jar', 'codex c_alvar', 'codex c_chroniclers', 'codex c_anbenncost', 'codex c_tellum', { if: 'is.god', then: ['codex c_apotheosis'] }],
    choices: [
      {
        text: '数一数第三排那十一个人都是谁',
        once: true,
        check: { skill: 'perception', dc: 12, mods: [{ if: "origin == 'lorent'", n: 2, why: '你认得白玫瑰的别针' }, { if: 'is.scholar', n: 1, why: '你坐过这种讲堂' }] },
        ok: { text: '袖扣上有卡拉桑尼徽记的两个，别着银白玫瑰的一个，披风只搭左肩的一个。剩下七个是真来听讲的。那四位的笔记本都翻在空白页上。', effects: ['flag spotted_bidders'] },
        fail: { text: '你数到第七个，典藏主管走过来挡住了你。“请看管标本，不要看管听众。”他在看管费的单子上划掉了一刻钟。', effects: ['gold -2'] },
      },
      {
        text: '告诉台下：那片海，本地人绕着走了几百年',
        tag: '卡尔希尔',
        if: "origin == 'karshyr'",
        once: true,
        effects: ['rep south +1'],
        result: ['你说船是从第二个漩涡里出来的：头一个吞它，第二个吐它。岛上的半身人领航员管那片海叫欠账的。', '第三排有人头一回把“本地人”三个字写进了本子。阿尔瓦带头鼓掌，他以为你在夸他。'],
      },
      {
        text: '把盖子拧开一条缝',
        effects: ['var jar_trust +1'],
        result: ['盖子转了半圈，罐口冒出来一股雨后石头的味儿。她没说谢，从怀里摸出一根比头发还细的东西，在罐壁上划了一道。', { speaker: '别摇', text: '记了一笔。你那一栏，头一行。' }],
        goto: 'a1_02',
      },
      {
        text: '先去问典藏主管准不准开盖',
        effects: ['gold +5'],
        result: ['主管说不准，标本条例第六款。说完他看你顺眼多了，把今天的看管费提前结给了你。', { speaker: '别摇', text: '你问了他，没问我。这一笔不记。' }],
        goto: 'a1_02',
      },
      {
        text: '告诉她回头再说',
        effects: ['flag jar_snubbed'],
        result: [{ speaker: '别摇', text: '回头。行。' }, '她在罐壁上划了一道，划得很慢，好让你看清是划在哪一栏。'],
        goto: 'a1_02',
      },
    ],
  },

  a1_02: {
    id: 'a1_02',
    title: '出价',
    loc: '安本科斯特 · 史家会后院',
    text: [
      '讲座散了。罐子照规矩送回后院的标本库，{?party.bura:你和布拉|你}守门。院墙两人高，墙根种着一排药草，钟楼正对着后门。',
      '天黑以后来了一位客人，走的正门。脸上一道火药燎的旧疤，大衣是好料子。他跟典藏主管在廊下谈了一刻钟，你只听见两个数：六十，三百。主管说得报理事会。',
      { speaker: '格拉托·西尔卡拉斯', text: '当然要报。我明天再来，带支票，也带律师。两样您挑一样先见。' },
      '他前脚走，后墙上就翻进来{?partysize >= 2:四|两}个人。没带支票。',
      { if: 'flag.spotted_bidders', text: '讲堂里那几支不写字的笔，你数过。巡夜的你傍晚打过招呼：史家会雇的是刚入行的冒险者，一个钟点两个铜板，眼下正蹲在药草后头。' },
      { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）{?partysize >= 2:四个|两个}。短棍，一把撬刀。门归你，墙归我。' },
    ],
    choices: [
      { text: '抄家伙，守住标本库的门', if: '!flag.spotted_bidders && partysize <= 1', combat: { ...YARD, enemies: YARD_FEW } },
      { text: '抄家伙，守住标本库的门', if: '!flag.spotted_bidders && partysize >= 2', combat: { ...YARD, enemies: YARD_MANY } },
      { text: '吹哨，叫药草后头的巡夜人一起上', if: 'flag.spotted_bidders && partysize <= 1', combat: { ...YARD, enemies: YARD_FEW, allies: YARD_WATCH } },
      { text: '吹哨，叫药草后头的巡夜人一起上', if: 'flag.spotted_bidders && partysize >= 2', combat: { ...YARD, enemies: YARD_MANY, allies: YARD_WATCH } },
    ],
  },

  a1_02b: {
    id: 'a1_02b',
    title: '一张汇票',
    text: [
      { if: '!flag.a1x_jar_grabbed', text: '巡夜的把人捆了，一人一根晾衣绳。领头的说不出是谁雇的，只说钱是预付的，付的是新票子。' },
      { if: 'flag.a1x_jar_grabbed', text: '罐子是让人夹在胳肢窝底下抢出院门的。{?party.bura:布拉追了两条街，回来时一手拎着罐子，一手拎着半只袖子。|巡夜的追了两条街才抢回来。}典藏主管当场把史家酬金扣了一半。' },
      '半夜，阿斯拉银行的信差敲开了史家会的门。一张汇票，数目压过了卡拉桑尼，落款是“迟到者公司合伙人”。附言一行：标本借予本公司保管，保管人不得转让。',
      { if: 'party.bura', speaker: '布拉', text: '合伙人。我干了八年，没见过他的脸。钱见过，每月一号。' },
      '天亮前西尔卡拉斯又来了，这回走的后门，一个人。他看了看汇票上的数，把它放回桌上，放得很平。',
      { speaker: '格拉托·西尔卡拉斯', text: '五百金冠，罐子路上丢了，史家会那头我去赔。不想丢也行：哪天贵公司要转手，头一个问我，我出六百。两样您随便挑，我哪样都不亏。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）他出五百。（陈述。）我的卖契上写的是废铁价，十一个金冠。（不确定。）她比我贵四十五倍，她还装在罐子里。' },
      '罐子里那位坐在罐底，背对着你们，翅膀一动不动。她在听。',
    ],
    first: ['quest q_jar stage 2', 'quest q_partner start'],
    choices: [
      {
        text: '回绝他：公司不丢东西',
        effects: ['flag silcalas_refused', 'var jar_trust +1', 'rep charter -1'],
        result: [{ speaker: '格拉托·西尔卡拉斯', text: '好。那我换个问法，改天去问你们的合伙人。' }, '他走以后，罐壁上多了一道划痕。', { speaker: '别摇', text: '五百你没卖。记了一笔。' }],
        goto: 'a1_03',
      },
      {
        text: '说要回去问问秘书，先拖着',
        effects: ['rep charter +1'],
        result: ['他留下一张名片，纸很厚，边上烫了金。', { speaker: '别摇', text: '你没说卖，也没说不卖。这种的我们那儿不记账，记人。' }],
        goto: 'a1_03',
      },
      {
        text: '把附言念给他听：保管人不得转让',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['flag silcalas_refused', 'var jar_trust +1'],
        result: ['你念了两遍，第二遍念得慢。他听完笑了，脸上的疤跟着动了一下。', { speaker: '格拉托·西尔卡拉斯', text: '白纸黑字。行，我敬的就是这个。哪天这张纸到期了，劳驾先知会我。' }, { speaker: '别摇', text: '你拿纸挡的他。也算。记了一笔。' }],
        goto: 'a1_03',
      },
    ],
  },

  a1_03: {
    id: 'a1_03',
    title: '十四号器材',
    art: 'ev_multi_racial_merc',
    loc: '安本科斯特 · 铸炉街 · 公司',
    date: '1820年花始月中',
    shop: {
      name: '铸炉街的矮人铺子',
      blurb: '楼下往南第三家。不讲价，熟客不往外扔。',
      stock: ['dagger', 'shortsword', 'longsword', 'battleaxe', 'pistol', 'musket', 'leather', 'chain_shirt', 'shield', 'healing_potion', 'bandage'],
    },
    text: [
      '蜡烛铺楼上，一股蜂蜡和旧纸的味儿。一张桌子，四把椅子，没有两把一样高。罐子摆在埃塔的墨水瓶旁边，{?var.jar_trust >= 1:盖子松着半圈|盖子上压着一本 1789 年的流水账}。',
      { if: "origin != 'unowned'", text: '墙角站着一台驮运用的机械人，肩上还留着厂里的绿漆。埃塔在器材账上给它记的是“十四号”，它管自己叫礼拜三。从今天起它跟你出外勤。' },
      { if: "origin == 'unowned'", text: '礼拜三站在墙角，肩上还留着七号线的绿漆。器材账上它是十四号。{?is.mechanim:你是十五号，你那一行埃塔在“雇员”栏里又抄了一遍。|把它领出厂门的是你，卖契在你兜里。}' },
      '埃塔推过来一份合同，陆军部的笺头，三页。经德希尔德将军推荐，雇本公司护送第三催收巡回队。金额一栏过了一百金冠。',
      { speaker: '埃塔·斧砧', text: '一百金冠以上的单子要队长签字。笔在这儿。签之前有事办事：楼下铺子卖家伙，阁楼有床。' },
      { if: 'is.god', text: '埃塔把你的名字从“雇员”栏划掉，抄进了“无形资产”。楼梯上有动静：楼下排着队，一直排到蜡烛铺门外，头一个抱着一只瘸腿的羊。' },
      { if: 'is.god', speaker: '埃塔·斧砧', text: '章程第九条：成了神的，不加钱。' },
    ],
    first: [
      { if: '!party.middlesday', then: ['companion +middlesday', 'quest q_middlesday start'] },
      'quest q_bura start',
      'codex c_etta',
      'codex c_forgeway',
      'codex c_mechanim',
    ],
    choices: [
      {
        text: '问埃塔，这家公司的账是怎么回事',
        once: true,
        effects: ['gold +12'],
        result: [
          { speaker: '埃塔·斧砧', text: '1811 年以后公司没有队长。一百金冠以上的单子没人签，所以十年没接过一百金冠以上的单子。' },
          { speaker: '埃塔·斧砧', text: '五成一的股在合伙人手里，1810 年买下旧债进来的。他十年没迟过一回款。我不喜欢他。我的账本喜欢。' },
          '她从抽屉里数出十二个金冠推给你：队长的月钱，1446 年定的数，没涨过。',
        ],
      },
      {
        text: '问布拉，共和国欠她多少',
        once: true,
        if: 'party.bura',
        effects: ['approval bura +1'],
        result: [
          { speaker: '布拉', text: '十一个月的饷。1812 年整编，绿皮的军士一个不留，饷“另候通知”。' },
          { speaker: '布拉', text: '还有一句话。1810 年他们说人人一样。这句也欠着，折不成金冠。' },
          { if: "origin == 'anbennar'", text: '她看了一眼你那张遣散单，把自己那张从怀里掏出来，并排放在桌上。事由一栏的字是同一个人写的。' },
        ],
      },
      {
        text: '给别摇一块方糖，谢她昨晚看了一夜的门',
        once: true,
        effects: ['var jar_trust +1'],
        result: [
          '她坐在墨水瓶盖上晾翅膀，接过糖，两只手才抱得住。',
          { speaker: '别摇', text: '糖收了，记一笔。“谢”字你拿回去，说了你就欠我。' },
          { if: 'is.lizardfolk', text: '你叫她的时候舌头绕不过头一个字，出口成了“勿摇”。她没纠正，在另一栏划了一道。' },
        ],
      },
      {
        text: '问十四号，账上那个数是谁让它改的',
        once: true,
        if: "party.middlesday && origin != 'unowned'",
        effects: ['approval middlesday +1'],
        result: [
          '今天早上埃塔发现第三栏的合计被人动过。差四个铜板，改对了。',
          { speaker: '礼拜三', text: '（陈述。）合计错了四个铜板，我改了。（不确定。）没人让我改。（礼貌。）要改回去吗。' },
          '埃塔看了看那个数，又看了看它，把笔放下了。你问它名字是哪来的。它说厂里的停机日志上写着：周中日，二号停机。',
        ],
      },
      {
        text: '下楼看铸炉街新贴的告示',
        once: true,
        if: "origin == 'unowned'",
        effects: ['approval middlesday +1'],
        result: [
          '告示贴在垄断集团的岗亭上：“有毛病的机器一律回炉。”底下一串编号，四十一个。',
          { if: 'flag.exit_ran', text: '七号线那两行后面注的是“走失”，赏格三个金冠。' },
          { if: 'flag.exit_stolen', text: '七号线那两行后面注的是“盗窃厂产”，底下有厂主的签名。' },
          { if: 'flag.exit_sold', text: '七号线那两行后面注的是“已售”，墨比别的行新。' },
          { if: 'flag.hid_waking', text: '{?is.mechanim:两行里只有礼拜三的编号。领班到今天还当你那晚只是卡了壳。|你兜里那张卖契上的编号，告示上没有。领班到今天还没发现报废单少了一张。}' },
          { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）四十一个编号，我认识九个。（愤怒。）“有毛病”三个字是手写添上去的。' },
        ],
      },
      {
        text: '拿着卖契去法德伦的工会，问机器能不能领会员证',
        tag: '无主者',
        if: "origin == 'unowned'",
        once: true,
        effects: ['codex c_fadlun'],
        check: { skill: 'persuasion', dc: 12, mods: [{ if: 'rep.union >= 3', n: 1, why: '工棚里有人认得你' }, { if: "faction == 'shield'", n: 1, why: '盾条' }] },
        ok: {
          text: [
            '工会开会开到半夜，拿{?is.mechanim:你|礼拜三}这一桩当头一个案子。法德伦在黑板上画图，从“谁干活”画到“谁领证”，画到第七步粉笔断了。',
            { speaker: '法德伦', text: '会员证上有一栏“出生地”。你让我给它填什么？七号线？……行，就填七号线。' },
          ],
          effects: ['flag union_card', 'rep union +1'],
        },
        fail: {
          text: '表决推迟。有人问机器交不交会费，有人问罢工的时候它听谁的。法德伦两样都答不上来，脸涨得通红。入会费两个金冠不退，“出生地”那一栏还空着。',
          effects: ['gold -2'],
        },
      },
      {
        text: '以公司的名义给乌戈出一封保函',
        tag: '巨魔湾',
        if: "origin == 'concord' && !flag.line14_read",
        once: true,
        effects: ['flag ugo_papers', 'rep union +1'],
        result: ['乌戈是从新港走过来的，肩上一道扛麻包磨出来的印子。他要一张纸，上头写明他是谁，雇主看了就不必再问。', '埃塔写的，三行，盖了公司的印。他不识字，让你念了两遍，叠好塞进了鞋里。'],
      },
      {
        text: '照使团长信里要的，把航海日志抄一份寄去',
        tag: '巨魔湾',
        if: "origin == 'concord' && flag.line14_read",
        once: true,
        effects: ['rep charter +1', 'approval bura -1'],
        result: ['信是使团长的，问你要日志的抄件，措辞客气得挑不出毛病。你抄到第十四行，照原样抄了。', { if: 'party.bura', speaker: '布拉', text: '贴身仆役一名，九十金冠。字写得真清楚。' }],
      },
      {
        text: '让埃塔把你的伙食费折成润滑油',
        tag: '机械人',
        if: 'is.mechanim',
        once: true,
        effects: ['gold +3'],
        result: [
          { speaker: '埃塔·斧砧', text: '午饭一天三个铜板，润滑油一天一个。差价按月退你，账上叫“伙食结余”。' },
          { speaker: '埃塔·斧砧', text: '十四号那份我没法算。器材没有伙食费，只有保养费。两个字差着一本账。' },
        ],
      },
      {
        text: '替礼拜三紧一紧左肩的轴承',
        tag: '奇械',
        if: 'is.artificer && party.middlesday',
        once: true,
        effects: ['approval middlesday +1'],
        result: ['左肩的轴承松了半圈，出厂的时候就松。你动手之前先问了它一声。', { speaker: '礼拜三', text: '（惊讶。）九年里你是头一个先问的。（高兴。）拧吧。' }],
      },
      {
        text: '下楼给排队的人看病',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['gold +30', 'var cult +1'],
        result: [
          '瘸腿的羊站起来走了。后头是一个咳血的铆工，一个瞎了半只眼的洗衣妇，一个什么病也没有、只想摸摸你袖子的老头。有人往楼梯上放铜板，埃塔下去收了，开了收据。',
          '第二天蜡烛铺的房东来了，说这栋楼如今是圣地，圣地的租子另算。',
          { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）羊是好羊。下回排队的里头要是有人揣着枪，你先叫我，别先叫羊。' },
        ],
      },
      {
        text: '在阁楼的行军床上睡一整夜',
        once: true,
        effects: ['rest long'],
        result: '阁楼的窗对着铸炉街，打铁的声音后半夜才停。你睡得很沉。',
      },
      {
        text: '在陆军部的合同上签字',
        result: '你签了。埃塔吹干墨水，在账本上添了一行，日期后面写着：队长签字，十年来头一回。',
        goto: 'a1_04',
      },
    ],
  },

  a1_04: {
    id: 'a1_04',
    title: '将军的茶',
    loc: '安本科斯特 · 陆军部三楼',
    date: '1820年花始月底',
    text: [
      '陆军部三楼，走廊里一股湿呢子味。科员念条款，念完一条停一下，等你点头。窗边坐着一位将军，脸晒得很深，茶是自己倒的。他没问价钱，问的都是地。',
      { speaker: '德希尔德将军', text: '梨林那一带，两年不施术就板结。本农是三年。这些数我比部里熟，革命那年全军的粮是我调的，没那几车粮就没有今天这个部。' },
      { if: 'party.bura', speaker: '布拉', text: '（压着嗓子。）德希尔德。打进攻的。1810 年他那个旅从不等炊事班。' },
      '门口进来一个四十出头的人，棕头发，袖口沾着咖啡渍，手里一张表。巡回队派他来接头。表他是念着填的。',
      { speaker: '吉列姆', text: '姓名，吉列姆。籍贯，埃斯玛利亚，梨林镇。职务，国家三等变化师。“护送方”这一栏……条例第十四款没说冒险者算军属还是算器材。我先空着。' },
      { if: "origin == 'anbennar'", text: '科员翻到你的名字，手指在登记簿上停了一下。他认得遣散单上那串编号：新年那一批，一共发了四十张。' },
      { if: 'is.god', text: '将军今天的制服是熨过的，领口的折线能裁纸。他把椅子转过来，正对着你。' },
      { if: 'is.god', speaker: '德希尔德将军', text: '我是专程来的，合同是顺便。你告诉我，你是怎么办到的。' },
    ],
    first: ['companion +guilhem', 'quest q_harvest start', 'quest q_guilhem start', 'codex c_circuit', 'codex c_deshird', 'codex c_blackpowder'],
    choices: [
      {
        text: '看将军怎么端那杯茶',
        once: true,
        check: { skill: 'insight', dc: 13, mods: [{ if: 'is.soldier', n: 1, why: '你见过将军们怎么看地图' }] },
        ok: {
          text: [
            { if: '!is.god', text: '茶是滚的，刚倒的。他没用托碟，五根手指贴着杯壁，一下没换手。他问哪块地几年板结，口气像在估一件东西还能使几年。' },
            { if: 'is.god', text: '茶是滚的，他没用托碟，手指贴着杯壁。你看得比这多：他问话的时候一直没眨眼，杯里的水面有一圈很细的纹。他在害怕。' },
          ],
          effects: ['flag partner_hint_1'],
        },
        fail: { text: '你盯着茶看得太久。将军当你渴了，叫科员给你也倒了一杯。部里的茶，访客自费，一个金冠记在了公司账上。', effects: ['gold -1'] },
      },
      {
        text: '照实说：你也不知道',
        tag: '神',
        if: 'is.god && !flag.a1x_general_asked',
        once: true,
        effects: ['flag a1x_general_asked', 'rep republic +1'],
        result: [{ speaker: '德希尔德将军', text: '不知道。我带了半辈子兵，没见过哪场仗是靠“不知道”打赢的。' }, '科员在问询记录上写：该员配合。将军一个字也没信。'],
      },
      {
        text: '告诉他：有人信，就成了',
        tag: '神',
        if: 'is.god && !flag.a1x_general_asked',
        once: true,
        effects: ['flag a1x_general_asked', 'rep partner -1'],
        result: ['他把茶杯放下了，放得很慢，后来一直没再端起来。', { speaker: '德希尔德将军', text: '有人信。就这么简单。' }, '听着是问句，可他没等你答，转头去看窗外了。'],
      },
      {
        text: '说这是公司的事，请他去问秘书',
        tag: '神',
        if: 'is.god && !flag.a1x_general_asked',
        once: true,
        effects: ['flag a1x_general_asked', 'rep partner +1'],
        result: [{ speaker: '德希尔德将军', text: '公司的事。好。我喜欢守规矩的买卖人。' }, '他笑了一声。几种答法里他大概最爱听这一种，照样不信。'],
      },
      {
        text: '把遣散单拍在桌上，问补发的军饷哪天到',
        tag: '安本纳尔',
        if: "origin == 'anbennar'",
        once: true,
        effects: ['rep republic -1', 'approval bura +1'],
        result: [
          { speaker: '科员', text: '另候通知。' },
          '这四个字他不用翻卷宗。将军在窗边笑了一声，说 1810 年他的旅也欠过饷，后来发了，发的是土地券。',
          { if: 'party.bura', speaker: '布拉', text: '我那张也是“另候通知”。十一个月了，通知比饷还难等。' },
        ],
      },
      {
        text: '指着表上“种族”那一栏，问科员是哪年加的',
        tag: '绿皮',
        if: 'is.greenskin',
        once: true,
        effects: ['rep republic -1', 'approval bura +1'],
        result: [
          { speaker: '科员', text: '1812 年。整编那年。' },
          '他说完才看清是谁在问，把那一栏拿吸墨纸压住了，好像压住了就不用填。将军在窗边咳了一声，没回头。',
          { if: 'party.bura', speaker: '布拉', text: '1812 年三月。我那张表也是这个科填的。字没变，人换了。' },
        ],
      },
      {
        text: '跟科员讲价',
        check: { skill: 'persuasion', dc: 12, mods: [{ if: "faction == 'seal'", n: 2, why: '你引得出合同的条目' }, { if: 'rep.republic >= 2', n: 1, why: '部里认得你' }] },
        ok: { text: '你指出护送六个法师的价是照护送六箱军粮算的。科员翻了翻附表，改了一个数，多出六十金冠。', effects: ['gold +60'], goto: 'a1_05' },
        fail: { text: '科员翻到附表：冒险团的价是 1790 年核定的，要改得三个司会签。申请改价另收文书费，五个金冠，当场付。', effects: ['gold -5'], goto: 'a1_05' },
      },
      {
        text: '要求加一条：本公司得拒绝执行违法之命令',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['flag clause_refusal'],
        result: ['科员说没有先例。将军头也没回。', { speaker: '德希尔德将军', text: '加上，排第九条。打过仗的都知道这一条值多少钱。不值钱的时候，它就是一行字。' }],
        goto: 'a1_05',
      },
      {
        text: '问吉列姆，前两支巡回队怎么了',
        effects: ['flag a1x_asked_circuits', 'approval guilhem +1'],
        result: [
          { speaker: '吉列姆', text: '第一支累垮了，六个人倒了四个，大夫的诊断是“咖啡过量”。第二支在纤道上被抢了，抢的人只要晶体，钱箱没动。' },
          { speaker: '吉列姆', text: '所以这回部里雇了你们。理论上这叫吸取教训。' },
        ],
        goto: 'a1_05',
      },
    ],
  },

  a1_05: {
    id: 'a1_05',
    title: '驳船',
    art: 'ev_damestear_core',
    loc: '月河 · 下游码头',
    date: '1820年苏伦月',
    text: [
      '六个公务变化师，一车配给晶体，一条运过煤的平底驳船。晶体装在铅皮箱里，二十箱：十箱催苗，十箱催穗。箱缝往外漏青蓝的光，大白天也看得见。',
      '最老的变化师叫贝尔特，六十三岁，船还拴在码头上她就晕了。她趴在下风那一侧的船帮上，位置挑得很有经验。',
      { if: 'party.bura', speaker: '布拉', text: '一箱顶我四年的饷。二十箱。别让我算下去。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）条例上一个法师团是四十个人。（陈述。）这儿是六个。（不确定。）少的三十四个去哪了。' },
      { if: 'party.middlesday && party.guilhem', speaker: '吉列姆', text: '清洗了。公文上叫“精简”。' },
      '晶体车得从跳板推上船。跳板一尺半宽，昨夜下过雨。',
    ],
    first: ['codex c_damestear'],
    choices: [
      {
        text: '带着人把车推上跳板',
        check: { skill: 'athletics', dc: 11, party: true, mods: [{ if: 'is.worker', n: 2, why: '你装过车' }, { if: 'is.sailor', n: 1, why: '你走惯了跳板' }] },
        ok: { text: '车轮压着跳板的正当中上去了。贝尔特从船帮上抬头看了一眼，又趴了回去。', goto: 'a1_05b' },
        fail: {
          text: ['左轮滑出去半寸。最上头那箱顺着车板溜下来，角先着地，铅皮裂了一道缝，蓝光淌了一甲板。', { speaker: '贝尔特', text: '那一箱是第九区的。' }],
          effects: ['flag crate_cracked'],
          goto: 'a1_05b',
        },
      },
      {
        text: '花钱雇码头上的装卸班',
        cost: { gold: 15 },
        result: '八个人，一根杠子，一袋烟的工夫。领班数钱的时候说，上个月也有一车这样的箱子从这儿过，押车的比你们多一倍。',
        goto: 'a1_05b',
      },
      {
        text: '叫十四号去驮：账上写的就是驮运用',
        if: 'party.middlesday',
        effects: ['approval middlesday -1'],
        result: ['它一趟两箱，十趟，一步没滑。', { speaker: '礼拜三', text: '（陈述。）驮完了。（平静。）你叫的是“十四号”。（陈述。）我记下了。' }],
        goto: 'a1_05b',
      },
    ],
  },

  a1_05b: {
    id: 'a1_05b',
    title: '施过术的地',
    loc: '月河 · 驳船',
    text: [
      '纤夫八个人拽一根缆，一天走三十里，晌午歇一袋烟。傍晚，西岸一整片地发着青蓝的光，麦子齐腰，是上一支巡回队施过术的。东岸没施过，麦苗才到脚踝，这已经是苏伦月了。',
      { if: 'party.guilhem', speaker: '吉列姆', text: '这块地不施术也能长。理论上。实际上从我曾祖父那辈起，它就没自己长出过东西。' },
      '过闸的时候，码头上有人往船上扔小册子，一扔一沓。封面一行大字：埃斯玛利亚要合，安本纳尔得分。押运的文书弯腰捡了一本，看着你。',
      { if: "origin == 'lorent'", text: '这种纸你认得。对着光看，水印是一朵五瓣的玫瑰，洛伦泰内王家印坊的货，使馆的信笺用的是同一批。' },
    ],
    choices: [
      {
        text: '下到岸边抓一把土看看',
        once: true,
        check: { skill: 'nature', alt: ['survival'], dc: 12, party: true, mods: [{ if: "bg == 'farmer'", n: 2, why: '你种过地' }] },
        ok: {
          text: ['施过术的土是松的，发蓝，闻着有一股雷雨刚过的味儿。没施过的那边攥不成团，一松手全是粉。往下半尺是一层硬壳，根扎不下去。', '帝国拿咒催了它一百年，催到两年才收一回。如今不念咒，它一粒也不长。'],
          effects: ['codex c_verdancy', 'flag a1x_soil_read'],
        },
        fail: {
          text: '你抓了一把闻了闻，没闻出什么，手上沾的蓝灰洗了三遍还在，夜里咳了半宿。贝尔特隔着船帮说，没魔力的人少碰这个，矿上管那毛病叫蓝肺。',
          effects: ['hp -2'],
        },
      },
      {
        text: '指给押运文书看：这纸的水印是洛伦泰内的',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        once: true,
        effects: ['rep republic +1', 'rep wand -1'],
        result: '文书把册子举到灯前看了很久，然后看你，看得更久。一个冒险公司的队长怎么认得王家印坊的水印，他没问。他记下来了。',
      },
      {
        text: '把小册子收走撕了',
        effects: ['rep republic +1', 'rep union -1'],
        result: '你撕了一沓。押运的文书在日志上给你记了一笔好的。岸上扔册子的人朝你喊了一句埃斯玛话，纤夫们都笑了，没人肯替你翻。',
        goto: 'a1_06',
      },
      {
        text: '留一本，夜里读',
        effects: ['rep union +1'],
        result: [
          '册子十二页。前六页讲 1810 年安本科斯特答应过的公投，后六页是一张表：每个区交多少粮，领回多少晶体。数是对的，你拿船上的配给单核过。',
          { if: 'party.bura', speaker: '布拉', text: '写这个的人当过军需。表打得比部里的齐。' },
        ],
        goto: 'a1_06',
      },
      {
        text: '不去管册子，接着看纤夫拉船',
        effects: ['rep republic -1', 'approval bura +1'],
        result: ['文书等了一会儿，见你不动，自己把那本揣进了怀里，在日志上写了半行。', { if: 'party.bura', speaker: '布拉', text: '纸又不咬人。' }],
        goto: 'a1_06',
      },
    ],
  },

  a1_06: {
    id: 'a1_06',
    title: '头一个区',
    art: 'ev_spell_list',
    loc: '埃斯玛利亚 · 一个村子的打谷场',
    text: [
      '头一个区。打谷场上，六个变化师围成一圈，脚尖对着脚尖。咖啡是提前灌下去的，铁皮壶传了一轮，一人一缸，没人加糖。一箱晶体开了盖，摆在圈子当中。',
      '贝尔特起的头。念到第三句，地里有了动静，像一屋子人同时在撕布。麦子从脚踝蹿到膝盖，前后不到一分钟。贝尔特流了鼻血，拿袖口擦了。袖口本来就是褐色的。',
      { speaker: '贝尔特', text: '这是头一遍，催苗。月底再走一遍，催穗。少了后一遍，秋天收的是草。' },
      '农户送来一筐黑麦面包，还烫手。送面包的老头放下筐就退开两步，脸上没有笑。',
      { speaker: '老农', text: '我太爷爷说，这块地从前不用谁来念，一亩打四袋。到我手里，你们不来就一袋也没有。面包拿着，别谢，我们也不谢你们。' },
      { if: 'is.god', text: '打谷场边上不知什么时候排起了队。头一个牵着一只瘸腿的羊，第二个抱着孩子，第三个什么也没带，只是跪着。六个变化师都在看你。' },
    ],
    first: ['codex c_verdancy'],
    choices: [
      {
        text: '进圈，替贝尔特分担一份',
        tag: '施法者',
        if: 'is.caster && !is.mechanim',
        check: { skill: 'arcana', dc: 13, mods: [{ if: 'flag.a1x_soil_read', n: 1, why: '你摸过这儿的土' }, { if: "bg == 'apprentice'", n: 1, why: '学院教过合咒' }] },
        ok: {
          text: ['你站进贝尔特左手边的空当。六个人的咒从你身上过了一遍，烫，带一股焦咖啡味。收咒的时候你的指尖是蓝的。', { if: 'party.guilhem', speaker: '吉列姆', text: '第七个人。条例上没有第七个人的位置。回头我给你补一张表。' }],
          effects: ['flag shared_circle', 'approval guilhem +1'],
          goto: 'a1_07',
        },
        fail: {
          text: '第二句没念完，你眼前一黑，栽在了麦茬上。醒过来嘴里有血。贝尔特把自己那缸咖啡塞到你手里，说头一回都这样，她头一回吐了教官一身。',
          effects: ['hp -4'],
          goto: 'a1_07',
        },
      },
      {
        text: '告诉老农：这片地没催以前，一亩打五袋',
        tag: '长寿',
        if: 'is.longlived',
        effects: ['rep union +1'],
        result: ['你说得出年份，说得出那年河水涨到哪棵树。老头盯着你的{?is.elfblood:耳朵|脸}看了半天，回头喊他儿子过来听。', { if: 'party.guilhem', speaker: '吉列姆', text: '理论上还能回去。停咒，休耕，等上两代人。这两代人吃什么，条例没写。' }],
        goto: 'a1_07',
      },
      {
        text: '把晕倒的变化师和晶体箱一起扛回车上',
        tag: '武人',
        if: 'is.martial',
        effects: ['item +bandage'],
        result: '圈子里最年轻的那个收咒的时候直挺挺倒了。你一边肩膀扛人，一边胳膊夹箱子，走了两趟。老农的儿媳妇追上来，往你怀里塞了一罐自家熬的药膏，没说话。农户头一回正眼看你们。',
        goto: 'a1_07',
      },
      {
        text: '把这一区的土治好，往后不用再催',
        tag: '神',
        if: 'is.god',
        effects: ['flag soil_mended', 'world tears +1', 'world dove -2', 'rep republic -1', 'var cult +1'],
        result: [
          '你蹲下去，手按在地上。那层硬壳从你掌心底下一路裂到了河边。蓝光灭了，土是黑的，潮的，有蚯蚓。',
          '老头跪下去抓了一把，哭了。部里的公报管这叫“一起异常”：这个区从此用不着共和国的法师，票往哪边投，也用不着再问。',
          { if: 'party.guilhem', speaker: '吉列姆', text: '你让六个人失业了。理论上我是其中之一。' },
        ],
        goto: 'a1_07',
      },
      {
        text: '掏钱把这筐面包买下来',
        cost: { gold: 3 },
        effects: ['heal 1d6'],
        result: '老头把铜板在围裙上蹭了两下，收了，还是没笑。面包里掺了碾碎的梨干。六个变化师一人两块，贝尔特吃了三块。',
        goto: 'a1_07',
      },
      {
        text: '回车上守晶体，面包留给法师们',
        effects: ['approval bura +1'],
        result: [{ if: 'party.bura', speaker: '布拉', text: '守车的不吃人家的。吃了嘴软，嘴软手就慢。' }, '你在车辕上坐到天黑。地里的蓝光一直没灭，照得见每一根麦芒。'],
        goto: 'a1_07',
      },
    ],
  },

  a1_07: {
    id: 'a1_07',
    title: '电报',
    loc: '月河 · 驳船',
    date: '1820年泰苏伦月',
    text: [
      '头一遍催苗走完了十个区。第二遍的晶体刚开箱，一条舢板从下游追了上来。划船的是沿河电报局的小工，嗓子都喊哑了。电报是陆军部拍的，十三个字。',
      { text: '梨林等四区公投不稳，暂缓施术。', cls: 'letter' },
      '吉列姆看了一遍，叠成四折，垫在了咖啡杯底下。梨林是他老家。六个变化师都放下了手里的东西，等你开口。',
      { speaker: '贝尔特', text: '“暂缓”是部里的话。翻成人话是今年不给。我干这行四十年，没见过哪块地缓得起。' },
      { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）票往哪边投，麦子就往哪边长。这种仗我没打过。' },
    ],
    first: ['quest q_harvest stage 2', 'item +skiplist_telegram', 'codex c_skiplist'],
    next: 'a1_08',
  },

  a1_08: {
    id: 'a1_08',
    title: '团务会：暂缓名单',
    art: 'ev_multi_racial_merc',
    loc: '月河 · 驳船舱里',
    text: [
      '舱里一盏马灯，一张拿晶体箱拼的桌子。公司的规矩是大事开会，一人一句，说完再定。埃塔不在船上，她的回电刚到。',
      { if: 'party.bura', speaker: '布拉', text: '麦子不认选票。人饿了也不认。施。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '条例第三款：变化师不得拒绝对已登记农地施术。电报不是条例。我施，处分我一个人领。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）四个区，一万一千四百口。（陈述。）电报十三个字。（不确定。）一个字管八百七十六口，还余十二口没人管。' },
      '埃塔的回电只有一个数：“四百八十。”那是违约金。',
      { speaker: '别摇', text: '雾我会。电报局起一夜的雾，谁也说不清哪封电报到没到。你欠我半个人情，当场还，要梨花蜜。' },
      '三个人要施。埃塔报了个数，别摇开了个价。马灯里的油还够烧一个钟头，舱里的人都看着你。',
    ],
    choices: [
      {
        text: '照电报办，绕过这四个区',
        effects: ['flag skiplist_obeyed', 'world dove -1', 'rep republic +1', 'approval guilhem -2', 'approval bura -1', 'approval middlesday -1', 'var overruled +1'],
        result: [
          '你把多数压了下去。船在梨林镇外没有停。',
          { if: 'party.guilhem', speaker: '吉列姆', text: '事由一栏我会写“奉命”。后面两个字你替我想。' },
          { if: 'party.bura', speaker: '布拉', text: '你是队长。这一回我记着。' },
        ],
        goto: 'a1_09',
      },
      {
        text: '趁夜把咒施了，回电说没收到',
        effects: ['flag skiplist_defied', 'world dove +1', 'approval guilhem +2'],
        check: { skill: 'stealth', dc: 13, party: true },
        ok: { text: '四个区，四个晚上，马灯罩着黑布。回电是你拟的：“电报未达，施术照常。”沿河电报局的小工记性变得很差。', goto: 'a1_09' },
        fail: {
          text: '第三个晚上，押运的文书起夜，看见了地里的蓝光。他什么也没说，回舱写了一页日志，第二天在渡口寄了出去。',
          effects: ['flag skiplist_caught', 'rep republic -2'],
          goto: 'a1_09',
        },
      },
      {
        text: '买蜜还别摇的半个人情，等起了雾再施',
        cost: { gold: 8 },
        effects: ['flag skiplist_defied', 'world dove +1', 'approval guilhem +2'],
        check: { skill: 'stealth', dc: 13, party: true, adv: true },
        ok: { text: '雾是后半夜起的，从电报局的烟囱里往外冒，带一股薄荷味。四个晚上，对岸看不见一点蓝光。别摇把蜜罐拖回了罐子里，说两清。', goto: 'a1_09' },
        fail: {
          text: '雾罩住了电报局，没罩住押运的文书。他起夜，一脚踩进了发蓝的麦地，回舱写了一页日志。别摇说雾是雾，人是人，她只管前一样。',
          effects: ['flag skiplist_caught', 'rep republic -2'],
          goto: 'a1_09',
        },
      },
      {
        text: '把电报念给码头上的农户听，然后当众施术',
        effects: ['flag skiplist_defied', 'flag skiplist_read_out', 'world press +1', { if: "faction == 'lantern'", then: ['world press +1'] }, 'rep republic -2', 'rep union +1', 'approval guilhem +1', 'approval bura +1'],
        result: ['你站在梨林的码头上念了十三个字。念完没人出声，后来有个女人问：“不稳”说的是我们？', '六个变化师在三百来号人眼前围了圈。第二天，《康威尔通报》的访员坐着头班驳船来了。'],
        goto: 'a1_09',
      },
      {
        text: '表决，照多数办',
        effects: ['flag skiplist_defied', 'flag skiplist_caught', 'world dove +1', 'approval guilhem +2', 'rep republic -2'],
        result: ['三票要施。埃塔弃权，别摇没有票。咒是大白天施的，没人想到要瞒。', '六个变化师里有一个每晚写日记。日记本后来到了部里。'],
        goto: 'a1_09',
      },
      {
        text: '把配给一分为二，十个区都催半份',
        tag: '盾',
        if: "faction == 'shield'",
        effects: ['flag skiplist_halved', 'approval bura +1'],
        result: ['十个区，每区半箱。贝尔特把咒文改短了一半，念的时候一直在摇头。', '麦穗结出来了，瘪的。每个区都够吃到开春，没有一个区够吃到明年收麦。'],
        goto: 'a1_09',
      },
      {
        text: '照合同第九条，书面拒绝执行这道命令',
        tag: '印',
        if: "faction == 'seal' && flag.clause_refusal",
        effects: ['flag skiplist_defied', 'flag refusal_on_paper', 'world dove +1', 'rep republic -1', 'approval guilhem +2'],
        result: [
          '你写了三行：依合同第九条，本公司认定该命令于法无据，拒绝执行，施术照常。一式两份，押运的文书签了收。',
          { if: 'party.guilhem', speaker: '吉列姆', text: '第九条。我填了二十年表，头一回见有人拿一张表把部里挡了回去。' },
          '咒是白天施的。往后谁来查，查到的头一样东西是这张纸。',
        ],
        goto: 'a1_09',
      },
    ],
  },

  a1_09: {
    id: 'a1_09',
    title: '梨林',
    loc: '埃斯玛利亚 · 梨林镇',
    text: [
      { if: 'flag.skiplist_defied', text: '梨林镇。{?flag.skiplist_read_out:咒是白天施的，全镇的人都站在地头看。|半夜，四十亩地一齐发了蓝。}吉列姆的父亲披着衣裳出来，在地头站了一刻钟，一句话没说。回屋的时候他把门给儿子留着。' },
      { if: 'flag.skiplist_obeyed', text: '船从梨林镇外过，没有停。码头上站着几个人，没人招手。过了闸，一条小船追上来，递上一筐梨，说是吉列姆的母亲捎的。筐底压着一张字条：路上吃。' },
      { if: 'flag.skiplist_halved', text: '梨林镇领到的是半份。吉列姆把自家那二十亩的份让给了隔壁，隔壁有三个孩子。他父亲点了头，他母亲煮了一锅酒煮梨，谁也没提麦子。' },
      '当晚吉列姆的鼻血止不住，两只手抖得端不稳杯子。杯子里是今天的第五缸咖啡。',
      { if: 'party.bura', speaker: '布拉', text: '我见过这种手。炮兵，连着打三天的那种。' },
      { if: 'flag.soil_mended && is.god', text: '头一个区的事已经传到了这儿。梨林来了三个老人，帽子拿在手里，问{god}肯不肯把这儿的土也治了。' },
      { if: 'flag.soil_mended && !is.god', text: '头一个区的事已经传到了这儿。梨林来了三个老人，要找那位治土的。他们把船上的人挨个看了一遍，在你脸上停了停，走了。' },
    ],
    first: ['level 3'],
    choices: [
      {
        text: '把梨林的土也治了',
        tag: '神',
        if: 'flag.soil_mended && is.god',
        once: true,
        effects: ['var cult +1', 'approval guilhem -1'],
        result: [
          '三个老人回去的时候没戴帽子，一路走一路回头。天亮以前，镇口的梨树底下摆了一只碗，碗里是清水和三个铜板。',
          { if: 'party.guilhem', speaker: '吉列姆', text: '我爸种了五十年地，拜的是河上那位女神。往后他拜谁？你别答，我不想知道。' },
        ],
      },
      {
        text: '给他止血，按住他的手',
        check: { skill: 'medicine', dc: 12, party: true, mods: [{ if: 'is.divine', n: 1, why: '你包扎过的人多' }] },
        ok: {
          text: ['你让他仰头，拿湿布压住鼻梁，另一只手攥住他的手腕，攥到不抖了才松。', { speaker: '吉列姆', text: '大夫不许我喝这个，说咖啡和魔法犯冲，喝一缸折一天的寿。我算过，四十亩地换一天，划算。' }],
          effects: ['approval guilhem +1'],
          goto: 'a1_10',
        },
        fail: {
          text: '血是止住了，可你把他的头按得太低，他呛了一口，咳了半夜。第二天他念不出一句完整的咒，第三天也不行。少了他，剩下五个人少催了一个区。',
          effects: ['flag a1x_guilhem_spent'],
          goto: 'a1_10',
        },
      },
      {
        text: '把咖啡壶收走，叫他去睡',
        effects: ['approval guilhem -1'],
        result: [{ speaker: '吉列姆', text: '壶是公家的，编号在壶底。你没收它得开收据。' }, '你没开收据。他睡了十一个钟头，醒来手不抖了，一整天没跟你说话。'],
        goto: 'a1_10',
      },
    ],
  },

  a1_10: {
    id: 'a1_10',
    title: '夜袭',
    art: 'ev_fireball',
    loc: '月河纤道 · 配给车旁',
    date: '1820年伊什达月',
    text: [
      '后半夜。驳船拴在纤道的石桩上，晶体车在甲板当中，三道绳捆着。六个变化师睡在车后头，合盖一块油布。',
      '来的人没点火把。他们上了跳板，绕过钱箱，直奔铅皮箱。领头的是个女人，使军刀，右肩僵着，抬不过耳朵。她身后有人抬了抬手，甲板上的露水全结成了霜。',
      { if: 'flag.a1x_asked_circuits', text: '上一支巡回队是怎么丢的晶体，吉列姆说过。你睡前把拴船的缆看过一遍，记得哪一股吃着劲。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '钱箱在左边，他们往右走。这些人要的东西，只有法师才要。' },
      { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）三个。领头的握刀是军官的握法。' },
    ],
    choices: [
      { text: '拔武器，挡在晶体车前头', combat: TOWPATH },
      {
        text: '喊破那个抬手的：帝国学院，起手第三式',
        tag: '施法者',
        if: 'is.caster && !is.mechanim && !is.god',
        combat: {
          ...TOWPATH,
          intro: '你喊出了那一式的名字。抬手的人愣了半拍，甲板上的霜化了一半。',
          enemies: [{ id: 'thug', name: '使军刀的老兵' }, { id: 'court_mage', name: '还施得出法的老战斗法师', hpMult: 0.6 }, { id: 'lianne_warmage', name: '领头的女人' }],
        },
      },
      {
        text: '走到车和他们中间，不拔武器',
        tag: '神',
        if: 'is.god',
        effects: ['flag a1x_mage_dragged'],
        combat: {
          ...TOWPATH,
          intro: '你没拔武器。使军刀的那个老兵先退了，退的时候拽走了睡在最外头的那个变化师，拿他挡在身前。领头的女人一步没动，刀换到了左手。',
          enemies: [{ id: 'court_mage', name: '还施得出法的老战斗法师' }, { id: 'lianne_warmage', name: '领头的女人' }],
          specials: [RESCUE, ROPE, JAR_ASK],
        },
      },
    ],
  },

  a1_11: {
    id: 'a1_11',
    title: '魔杖贵族',
    loc: '月河纤道',
    text: [
      { if: '!flag.crystals_lost', text: '天亮前。领头的女人被按在纤道的石桩上，{?party.bura:布拉的膝盖压着她那条好肩膀|绳子捆了三道}。她的人跑了，她没喊他们回来。她报了全名：莉安娜·西尔·加贝莱尔。' },
      { if: 'flag.crystals_lost', text: '天亮前。晶体丢了一半。领头的女人自己走了回来，一个人，提着半箱，搁在跳板上。她报了全名：莉安娜·西尔·加贝莱尔。她是来谈的。' },
      { if: 'flag.a1x_mage_dragged', text: '油布底下少了一个人。最年轻的那个变化师被拖进了夜里，没追回来。莉安娜说人她会放，哪天放由她定。' },
      { speaker: '莉安娜', text: '肩膀里三粒寇拉希，1810 年留的，四天里我有三天是个废人。晶体不卖。有一所学校，收退了役没处去的法师，一冬要烧两箱。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '我也是法师。我没抢过谁的车。' },
      { speaker: '莉安娜', text: '你是三等变化师。他们留着你，是因为你祖上没爵位，咬不了人。六个人干四十个人的活，这不叫留用，叫役畜。' },
      { if: 'party.guilhem', text: '吉列姆把手里的杯子转了半圈，没接话。' },
      { speaker: '莉安娜', text: '我们没要特权。我们要的是统治。两样的区别在于，后一样我们会。' },
      { if: 'party.bura', text: '布拉的铰链响了一声。她的下巴就是这么没的，一道咒。' },
      { if: 'is.god', speaker: '莉安娜', text: '黑色教义写过：够强的法师就是神。后来没人敢念了。你往这儿一站，这句话用不着念。' },
    ],
    first: ['codex c_lianne', 'codex c_blackround'],
    choices: [
      {
        text: '听她讲那所学校，看她是不是在编',
        once: true,
        check: { skill: 'insight', dc: 13, mods: [{ if: 'is.noble', n: 1, why: '你听得出贵族撒谎的调子' }] },
        ok: { text: '她说得出一冬烧几箱，说得出哪个学生夜里尿床。说到校舍的屋顶漏雨，她皱了一下眉。编故事的人不会去编屋顶。', effects: ['flag a1x_school_true'] },
        fail: { text: ['她那张脸是练过的，军官的脸。你什么也没看出来，她倒看出你在掂量。', { speaker: '莉安娜', text: '你在估价。你们这种公司就会这个。' }] },
      },
      {
        text: '拿刀尖从她肩上剜一粒寇拉希出来',
        once: true,
        check: { skill: 'medicine', dc: 14, party: true },
        ok: {
          text: ['她咬着自己的皮带。黑的，米粒大，夹出来的时候刀尖上的反光灭了一下。', { speaker: '莉安娜', text: '还剩两粒。往后四天里我能有两天。这个我欠你，加贝莱尔家的债记在爵位上，爵位没了，债还在。' }],
          effects: ['item +korashi_grain'],
        },
        fail: {
          text: ['刀尖滑了，没碰着那一粒，血流了半碗。她一声没出，等你包好了才开口。', { speaker: '莉安娜', text: '学院里这一刀要挨教鞭的。' }],
          effects: ['rep wand -1'],
        },
      },
      {
        text: '请她说说，挨黑弹是什么滋味',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        effects: ['rep wand +1'],
        result: [
          { speaker: '莉安娜', text: '盾还开着，子弹已经进来了。然后是冷。你伸手去够平常够得着的东西，那儿是一个窟窿，往外漏。' },
          { speaker: '莉安娜', text: '漏到哪儿去了，我问过三个大夫。三个都说，没人问过这个。' },
        ],
      },
      {
        text: '把她交给治安军',
        effects: ['flag lianne_arrested', 'rep republic +1', 'rep wand -1'],
        result: '{?flag.crystals_lost:她是空着手回来谈的。你还是叫了人。|}最近的哨所在下游四里。来了一个班，带着一副专给法师用的手铐，铐环里衬着黑的。她伸手的时候看的是吉列姆。',
        goto: 'a1_12',
      },
      {
        text: '放她走',
        effects: ['flag lianne_freed', 'rep wand +1', 'approval bura -1'],
        result: [
          '她活动了一下那条好肩膀，没道谢。走出十几步，她停下，没回头。',
          { speaker: '莉安娜', text: '变化师。哪天你那张表填不下去了，学校缺一个教催生术的。' },
          { if: 'party.bura', speaker: '布拉', text: '1810 年我抓过她这样的。那时候不放。' },
        ],
        goto: 'a1_12',
      },
      {
        text: '从配给里分她一箱，给那所学校',
        if: 'flag.a1x_school_true',
        effects: ['flag lianne_supplied', 'rep wand +2', 'approval guilhem +1'],
        result: [
          '一箱够一个区催穗。{?party.guilhem:吉列姆自己把箱子搬下的跳板，在配给单上划了一笔，事由栏空着。|你在配给单上划了一笔，事由栏空着。}',
          { speaker: '莉安娜', text: '一箱。是谁给的我记得住，是从谁嘴里省的我也记得住。' },
        ],
        goto: 'a1_12',
      },
    ],
  },

  a1_12: {
    id: 'a1_12',
    title: '三倍薪水',
    art: 'ev_female_spy',
    loc: '康威尔 · 客栈',
    date: '1820年花终月',
    text: [
      '公投前三天的康威尔。墙上的告示贴了三层，最底下一层是 1810 年的。报馆街的印机整夜不停，客栈柜上的杯子跟着抖。',
      '后厅坐着一位女客，兜帽没摘，领口别一枚银的白玫瑰。她请巡回队的法师喝酒，鲁本奈尔的红酒，一瓶顶你三天的伙食。',
      { speaker: '白玫瑰王庭的女执事', text: '三倍薪水，一张去洛伦泰内的船票。在我们那儿，变化师有自己的塔，大夫只管劝，不管禁。诸位考虑，船礼拜五开。' },
      '两个年轻的变化师没碰酒杯，可也没走。贝尔特喝了她的酒，说了声多谢，回屋睡了。',
      { if: "origin == 'lorent' && flag.lorent_notes_read", text: '她起身添酒，路过你的时候往你外套里塞了一只钱袋，沉的。“老臣党翻过你的口袋，我们也翻过。袋子归你管，账归你记。”' },
      { if: "origin == 'lorent' && !flag.lorent_notes_read", text: '她起身添酒，路过你的时候往你外套里塞了一只钱袋，沉的。“使馆的意思：袋子归你管，花在谁身上，你定。”' },
    ],
    first: ['codex c_lorent'],
    choices: [
      {
        text: '当着满厅的人问她领的是谁的差',
        if: "origin != 'lorent'",
        check: { skill: 'investigation', alt: ['intimidation'], dc: 13, mods: [{ if: 'flag.spotted_bidders', n: 2, why: '这种别针你在讲堂里见过' }] },
        ok: { text: '你报出了船名、泊位，还有船票的票根是哪家印的。满厅的人都听见了。她把兜帽往下拉了拉，结了酒账走了。押运的文书在日志上给你记了一笔。', effects: ['rep republic +1'], goto: 'a1_12b' },
        fail: { text: '你刚起了个头，她先站了起来，嗓门比你亮：一家拿匿名股东钱的公司，倒来查神殿的账。满厅的人转过头，看的是你。', effects: ['rep republic -1'], goto: 'a1_12b' },
      },
      {
        text: '收下她递过来的八十金冠，当没看见',
        if: "origin != 'lorent'",
        effects: ['flag bribed_whiterose', 'gold +80'],
        result: '钱包在一方绣白玫瑰的手帕里。礼拜五早上，两个年轻的变化师没来吃早饭，铺盖卷也不在了。手帕你留着还是扔了，没人问。',
        goto: 'a1_12b',
      },
      {
        text: '把钱袋花在法师身上：两张船票，现付',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        effects: ['flag purse_spent_mages', 'rep wand +2', 'world dove -1'],
        result: '你没经她的手，自己去找的那两个年轻人。当夜他们走了，铺盖卷叠得很齐。巡回队剩下四个人，要催的地一亩没少。',
        goto: 'a1_12b',
      },
      {
        text: '钱袋不动，原样交回使馆',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        effects: ['flag purse_kept', 'rep wand -1'],
        result: '你在给使馆的条子上写：时机不宜。女执事的条子比你的早到一天，写的是：此人手紧。',
        goto: 'a1_12b',
      },
      {
        text: '把钱袋送去梨林，买明年的麦种',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        effects: ['flag purse_to_peargrove', 'rep wand -2', 'world dove +1'],
        result: ['一袋洛伦特的金冠，换了四十车不念咒也能发芽的硬粒麦种。收据是梨林镇公所开的，抬头写“无名氏”。', { if: 'party.guilhem', speaker: '吉列姆', text: '谁的钱？……算了，收据上没这一栏。' }],
        goto: 'a1_12b',
      },
      {
        text: '告诉吉列姆，让法师们自己定',
        effects: [{ if: "origin == 'lorent' && !flag.purse_spent_mages && !flag.purse_to_peargrove && !flag.purse_kept", then: ['flag purse_kept', 'rep wand -1'] }, 'approval guilhem +1'],
        result: [
          '六个人在马厩里说了一刻钟。两个年轻的动了心，回来的时候眼圈是红的，行李没动。',
          { if: 'party.guilhem', speaker: '吉列姆', text: '我没劝。我把三倍薪水折成咖啡念给他们听了，一天九缸。寿数是他们自己算的。' },
          { if: "origin == 'lorent'", text: '钱袋你原封没动。女执事走的时候看了你一眼，在小本子上写了一个字。' },
        ],
        goto: 'a1_12b',
      },
    ],
  },

  a1_12b: {
    id: 'a1_12b',
    title: '报馆街',
    loc: '康威尔 · 报馆街',
    shop: {
      name: '报馆街的药铺',
      blurb: '药是拿昨天的《康威尔通报》包的，头版朝里。',
      stock: ['healing_potion', 'antidote', 'bandage', 'flash_powder'],
    },
    text: [
      '报馆街。印机是康威尔学院的一位老先生琢磨出来的，客栈老板见一个客人讲一遍。这条街上的印坊一家挨一家，墙皮是油墨熏黑的。《康威尔通报》的门脸挨着史家会的分号，当中只隔一家药铺。分号的窗上贴着价目：头一手见闻，按行计酬，谎报不收。',
      { if: '!flag.skiplist_read_out && !flag.a1x_grant_done', text: '那封十三个字的电报还在你怀里。这条街上至少有两家肯为它出价，价钱不一样，后果也不一样。埃塔的铁箱算第三个去处，一个铜板不给。' },
      { if: 'flag.skiplist_read_out && !flag.a1x_grant_done', text: '那封电报你当众念过，如今全埃斯玛利亚都背得出来。分号的伙计说旧闻不收。它只剩一个去处：埃塔的铁箱。' },
      { if: 'is.god', text: '街口站岗的治安军中士看了你半天，举起步枪，朝你胸口开了一枪。黑弹。弹头在你外套上停了一下，滚到他靴子边，变成了蓝的。' },
      { if: 'is.god', speaker: '中士', text: '还真是。这玩意儿一发顶我半个月的饷。劳驾，剩下的也帮个忙。' },
    ],
    choices: [
      {
        text: '把电报卖给史家会的分号',
        if: '!flag.skiplist_read_out && !flag.a1x_grant_done',
        once: true,
        effects: ['flag a1x_grant_done', 'item -skiplist_telegram', 'gold +40', 'world press +1'],
        result: '伙计数了数，十三个字，按行算只有一行。他去后头请示，回来给了四十金冠。下个月全坎诺的订户都会在第四版读到它。',
      },
      {
        text: '把电报卖给卡拉桑尼的行情科',
        if: '!flag.skiplist_read_out && !flag.a1x_grant_done',
        once: true,
        effects: ['flag a1x_grant_done', 'item -skiplist_telegram', 'gold +120', 'rep charter +1'],
        result: '行情科在报馆街尽头的二楼，不挂牌。出纳没问电报是哪来的，只问还有谁看过。一百二十金冠。明年的麦价，他们今晚就改。',
      },
      {
        text: '把电报寄回公司，锁进埃塔的铁箱',
        if: '!flag.a1x_grant_done',
        once: true,
        effects: ['flag a1x_grant_done', 'flag box_skiplist', 'item -skiplist_telegram'],
        result: [{ speaker: '埃塔·斧砧', text: '回电：收到。铁箱第一格。这东西今天不值钱，哪天值钱了我告诉你。' }],
      },
      {
        text: '把他那一整盒黑弹都变蓝',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag box_turned_blue', 'rep republic +1', 'rep charter -1'],
        result: [
          '四十发，一发不剩。中士数了两遍，把盒子揣进怀里，敬了个礼。',
          '傍晚客栈门口排了一队军需官，一人抱着一箱。公报当晚就出了：{god}兹列为战略资源，离城须向陆军部报备。拉姆斯盖特的厂长是坐夜车来的。他不排队，他是来求你别再干了。',
        ],
      },
      {
        text: '回客栈睡到敲钟',
        once: true,
        effects: ['rest short'],
        result: '印机吵了一夜。你数着它的节拍睡着了，一分钟一百二十张。',
      },
      { text: '公投日一早，去广场', goto: 'a1_13' },
    ],
  },

  a1_13: {
    id: 'a1_13',
    title: '公投日',
    loc: '康威尔 · 广场',
    date: '1820年花终月28日',
    text: [
      '广场是石子地。人从四条街往里灌，口号有三种，互相盖不住。神殿的钟楼在北边，税关的三层楼在东边，票箱摆在税关门口，两个书记守着。巡回队今天来税关领薪，六件公家的灰外套就站在票箱旁边。',
      { if: "origin != 'anbennar'", text: '一排治安军横在广场当中，二十二个人一排，三排，刺刀是上好的。带队的中尉很年轻，手一直按在哨子上。' },
      { if: "origin == 'anbennar'", text: '一排治安军横在广场当中，二十二个人一排，三排，刺刀是上好的。那是你的老连队。带队的是奥德里克·马洛，新年那天等你传口令的那个中尉。' },
      { if: "origin == 'anbennar' && flag.kept_buttons", text: '你外套上还钉着连里的铜扣。前排有人认出来了，枪口低了一寸。' },
      '有一块砖。有一声枪。哪个在前，你当时没顾上：前排一个治安军捂着头蹲了下去，中尉的哨子已经到了嘴边。',
      { if: 'party.bura', speaker: '布拉', text: '（铰链咔的一声。）上膛了。第一排跪姿。他们练的是三排轮射，这个我教过。' },
    ],
    first: ['quest q_konwell start', 'codex c_konwell'],
    choices: [
      {
        text: '抬头找那一声枪是哪儿来的',
        once: true,
        check: { skill: 'perception', dc: 15, mods: [{ if: 'is.soldier', n: 1, why: '你听得出枪声的远近' }] },
        ok: { text: '税关三楼，从左数第四扇窗，一缕烟还没散。客栈老板提过那层楼租给了谁：部里派来的观察员，还有一个外国酒商。窗帘动了一下，合上了。', effects: ['flag saw_shooter_window'] },
        fail: { text: '你抬头的工夫，后头的人往前涌，一只胳膊肘撞在你肋骨上。等你站稳，四面的窗户都关着。', effects: ['hp -2'] },
      },
      {
        text: '走到两排人中间去',
        effects: ['flag square_stood'],
        check: {
          skill: 'persuasion', alt: ['intimidation'], dc: 14,
          adv: "faction == 'shield' || origin == 'anbennar'",
          mods: [{ if: 'flag.kept_buttons', n: 2, why: '连里的铜扣' }, { if: 'is.soldier', n: 1, why: '喊口令的嗓子' }],
        },
        ok: {
          text: [
            '你走到当中，背对人群，脸冲着刺刀。',
            { if: "origin == 'anbennar' && flag.ny_passed_order", speaker: '马洛中尉', text: '……是你。行，我当你还是连里的人。第一排，枪口朝天。' },
            { if: "origin == 'anbennar' && !flag.ny_passed_order", speaker: '马洛中尉', text: '三连，{pc}，新年那天没传口令的那个。全连听好：这人要是倒在这儿，报告我写不圆。枪口朝天。' },
            { if: "origin != 'anbennar'", text: '你喊的话后来没人记得清，只记得你一直没停。中尉的哨子在嘴边含了很久，拿了下来。' },
            '人群往后退了三步。没有第二声枪。票箱下午照常开了。',
          ],
          effects: ['world dove +1', 'rep union +1'],
          goto: 'a1_14',
        },
        fail: {
          text: [
            '你走到当中，刚张开嘴，后头又飞来半块砖，砸在你脚边。',
            { if: "origin == 'anbennar'", speaker: '马洛中尉', text: '{pc}，让开。你已经不归我管了。' },
            '哨子响了。第一排的枪放平的时候，你还站在那儿。',
          ],
          effects: ['flag volleys', 'world dove -1'],
          combat: SQUARE_A,
        },
      },
      {
        text: '把六个变化师带出广场',
        effects: ['flag square_mages_out', 'flag volleys', 'world dove -2', 'approval guilhem +1'],
        result: ['你拽着最近的一件灰外套往钟楼底下的巷子走。{?party.guilhem:吉列姆在后头一个一个地数人头。|}身后哨子响了，然后是头一排齐射。', '巷口有一个班的治安军，奉命封街。他们不认外套，只认命令。'],
        combat: SQUARE_A,
      },
      {
        text: '站到治安军那一边，守住税关的线',
        effects: ['flag square_held_line', 'flag volleys', 'world dove -2', 'rep republic +2', 'rep union -2', 'approval bura -2'],
        result: [
          '合同上写的是护送巡回队，巡回队在税关的台阶上。你站到了第三排的侧翼。三排枪响过，石子地上躺着人。',
          { if: 'party.bura', speaker: '布拉', text: '你站这边。行。我站你旁边，这是合同。别的你别问我。' },
        ],
        combat: SQUARE_B,
      },
      {
        text: '让放平了的那一轮子弹停在半空',
        tag: '神',
        if: 'is.god',
        effects: ['flag square_miracle', 'flag square_stood', 'world dove -1', 'rep republic -2', 'var cult +2'],
        result: [
          '头两轮是朝天放的。第三轮放平了。四十来发子弹停在了半空，离最近的一张脸不到两尺，黑的，慢慢地转。你数得过来。',
          '广场上跪了一片，治安军里也有跪的。当晚安本科斯特的公报出来了：公投系在超自然胁迫下举行，结果作废。',
          { if: 'party.bura', speaker: '布拉', text: '他们上礼拜才学会投票。你这一手，又给教回去了。' },
        ],
        goto: 'a1_14',
      },
    ],
  },

  a1_14: {
    id: 'a1_14',
    title: '广场之后',
    loc: '康威尔 · 神殿的医护所',
    date: '1820年花终月29日',
    text: [
      { if: 'flag.a1x_jailed', text: '你是在拘留所醒的。税关的地窖，一夜，罪名栏空着。早上有人来开门，说合同方不在拘押之列，把鞋带还给了你。医护所隔着两条街。' },
      { if: 'flag.volleys', text: '神殿的偏殿改成了医护所，长椅拼成床。死了七个。扔砖的那个十四岁，印坊的学徒，手指缝里的油墨还没洗掉。' },
      { if: '!flag.volleys && !flag.square_miracle', text: '神殿的偏殿改成了医护所，只用上三张长椅：一个头上挨了砖的治安军，两个挤伤的。没有人死。票箱昨天傍晚封了条，运去了安本科斯特。' },
      { if: 'flag.square_miracle', text: '医护所里只躺着一个头上挨了砖的治安军。神殿门外跪着的人比昨天广场上的还多。停在半空的弹头有人捡回去供了起来，一颗卖到五个金冠。' },
      { if: 'flag.square_stood && !flag.square_miracle', text: '伤员家里的人给你让出半条长凳。{?flag.volleys:你昨天站到了枪口前头，没站住。他们还是认这个。|有个老太太往你手里塞了两个煮鸡蛋。}' },
      { if: 'flag.square_mages_out', text: '没人拦你，也没人跟你说话。你昨天带走的是六件灰外套，这屋里躺着的没有一个穿灰外套。' },
      { if: 'flag.square_held_line', text: '管事的修女看见你，把偏殿的门掩上了一半。肯跟你说话的只有来换药的治安军。' },
      { if: 'party.middlesday && flag.volleys', speaker: '礼拜三', text: '（陈述。）三排，每排二十二响，我数了。（陈述。）另外还有一响。（不确定。）那一响在砖头前面。' },
      { if: 'party.middlesday && !flag.volleys && !flag.square_miracle', speaker: '礼拜三', text: '（陈述。）六十六支枪，一支没放平。（陈述。）可我数到了一响。（不确定。）那一响在砖头前面。' },
      { if: 'party.middlesday && flag.square_miracle', speaker: '礼拜三', text: '（陈述。）停在半空的四十三发，我数了。（陈述。）另有一响没停，它响得早。（不确定。）在砖头前面。' },
      { if: '!party.middlesday', text: '押运的文书昨天一直在数枪声，这是他的差事。他的本子上多记了一响，记在砖头前面。他自己看着那一行也皱眉。' },
      { if: 'party.bura && flag.volleys', speaker: '布拉', text: '开枪的是三连。1810 年跟我一个战壕，那时候枪口朝的是皇宫。' },
      '治安军的文书送来一张事件报告，合同方须得连署。“起因”一栏空着，两指宽。',
    ],
    first: ['flag shot_counted', 'quest q_konwell stage 2', 'rest short'],
    choices: [
      {
        text: '挽起袖子帮着裹伤',
        once: true,
        check: { skill: 'medicine', dc: 12, party: true },
        ok: { text: '你裹了四个人。修女递给你一盆水洗手，水是温的。', effects: ['rep union +1'] },
        fail: { text: '你把夹板绑反了，伤员疼得骂了一句埃斯玛话。修女把你请到了门外，那卷绷带算你的。', effects: ['gold -3'] },
      },
      {
        text: '把你的笔记交给《康威尔通报》',
        tag: '灯',
        if: "faction == 'lantern'",
        once: true,
        effects: ['flag square_reported', 'world press +1', 'rep republic -1'],
        result: '访员抄了一夜。排字的师傅说审查官明天才来上班，今晚印多少算多少。第二天早上，你笔记里那句“另有一响”印在了第二版，没署名。',
      },
      {
        text: '“起因”一栏写：人群投掷砖石',
        effects: ['flag blame_crowd', 'rep republic +1', 'world dove -1'],
        result: '文书看了一眼，点头，盖章。礼拜一这行字会登在首都的公报上，一个字不改。',
        goto: 'a1_15',
      },
      {
        text: '“起因”一栏写：带队军官下令过早',
        effects: ['flag blame_officer', 'rep republic -1', 'world dove +1'],
        result: [
          '文书的笔停了，抬头看你，又低头看那一行。',
          { if: "origin == 'anbennar'", speaker: '马洛中尉', text: '三连，{pc}。全连都来看看，写这一行的人穿过咱们的制服。我不拦你，你写。' },
          { if: "origin != 'anbennar'", text: '中尉自己过来看了。他什么也没说，在连署栏里签了名，签得很用力，纸背都透了。' },
        ],
        goto: 'a1_15',
      },
      {
        text: '“起因”一栏写：不明',
        effects: ['flag blame_unknown', 'approval middlesday +1'],
        result: ['两个字，栏里还空着一大半。文书说部里不喜欢这两个字，卷宗合不上。', { if: 'party.middlesday', speaker: '礼拜三', text: '（赞同。）不明。（陈述。）数得出来的答案只有这一个。' }],
        goto: 'a1_15',
      },
    ],
  },

  a1_15: {
    id: 'a1_15',
    title: '收成',
    loc: '埃斯玛利亚 · 巡回队驻地',
    date: '1820年泪落月初',
    text: [
      '泪落月初，麦子收完了。部里的结算表一区一行，十行。备注栏比亩产栏宽。',
      { if: 'flag.skiplist_obeyed', cls: 'letter', text: '梨林等四区：奉命暂缓。亩产栏：斜杠。' },
      { if: 'flag.skiplist_defied && flag.skiplist_caught', cls: 'letter', text: '梨林等四区：照施。备注：违令，另案处理。' },
      { if: 'flag.skiplist_defied && !flag.skiplist_caught', cls: 'letter', text: '梨林等四区：照施。备注栏有人拿铅笔写过两个字，又擦了。' },
      { if: 'flag.skiplist_halved', cls: 'letter', text: '十区各催半份。亩产栏十个数，没有一个过往年的六成。' },
      { if: 'flag.crate_cracked', cls: 'letter', text: '第九区：晶体箱装船时摔裂，减半。' },
      { if: 'flag.crystals_lost', cls: 'letter', text: '第六、第七区：配给遭劫，未催穗。' },
      { if: 'flag.lianne_supplied', cls: 'letter', text: '第八区：配给短少一箱。事由栏空着。' },
      { if: 'flag.a1x_guilhem_spent', cls: 'letter', text: '第五区：变化师一名病休三日，未催穗。' },
      { if: 'flag.a1x_mage_dragged', cls: 'letter', text: '第四区：变化师一名失踪，未催穗。' },
      { if: 'flag.bribed_whiterose || flag.purse_spent_mages', cls: 'letter', text: '变化师二名擅离职守。去向：洛伦泰内。' },
      '最后一页是给吉列姆的。梨林那一行后面，部里印好了四个字等他签：奉命不救。{?flag.skiplist_defied:咒他明明施了。部里要的是账面上没人违过令。|}{?flag.skiplist_halved:他催的是半份。表上没有“半份”这一格。|}',
      { speaker: '吉列姆', text: '姓名，吉列姆。职务，国家三等变化师。事由……这一栏只有两指宽，“奉命不救”四个字我写得下。我不写。' },
      '他在事由栏里写了两个字：辞职。然后把公家的咖啡壶放在表上，壶底的编号朝上。',
      { speaker: '埃塔·斧砧', text: '回电：雇员栏添一行。月钱十个金冠。咖啡自理。' },
      '合同的最后一站是月河最上游的渡口，在那儿交还驳船。渡口对岸是阿兰蒂尔塔。吉列姆想顺路问教会一件事：流星一年比一年少，他们的本子上记没记。',
    ],
    first: [
      'quest q_wastage start',
      'quest q_harvest done',
      { if: 'flag.skiplist_obeyed', then: ['gold +120'], else: [{ if: 'flag.refusal_on_paper || flag.skiplist_halved', then: ['gold +90'], else: ['gold +60'] }] },
    ],
    choices: [
      {
        text: '趁文书不在，翻一翻巡回队的卷宗',
        once: true,
        check: { skill: 'investigation', dc: 14, party: true, mods: [{ if: 'is.scholar', n: 2, why: '你翻惯了卷宗' }] },
        ok: {
          text: '卷宗里夹着一张调阅单，调的是一卷叫“损耗”的东西，1811 年立的。{?is.dwarf:立卷人签的是如尼字，你念得出姓，是个账房人家常用的字头，名字那半边让墨点糊了。|立卷人签的是矮人的如尼字，你不会念，照着描了下来。}调阅人一栏盖的是部长办公室的章。',
          effects: ['flag wastage_ref'],
        },
        fail: {
          text: '你刚翻到一张夹在当中的调阅单，只看清抬头“损耗”两个字，文书回来了。他把卷宗从你手底下抽走，客客气气地请你签了一张“查阅未遂”，罚金三个金冠。',
          effects: ['gold -3'],
        },
      },
      {
        text: '拍电报请埃塔向史家会讨一封介绍信',
        cost: { gold: 10 },
        effects: ['flag a1x_letter'],
        result: '信是三天后到的，史家会的火漆，措辞很长，意思很短：此人看过我们的罐子，没摇。',
        goto: 'a1_16',
      },
      {
        text: '什么信也不带，带一筐梨林的梨',
        effects: ['approval guilhem +1'],
        result: [{ speaker: '吉列姆', text: '阿兰蒂尔塔的门房吃不吃梨，条例上没写。我妈说，是人就吃，修士也算人。' }, '筐里二十个梨，他挑了一晚上，磕了疤的都换掉了。'],
        goto: 'a1_16',
      },
    ],
  },

  a1_16: {
    id: 'a1_16',
    title: '只看一眼',
    art: 'ev_god_fragment',
    loc: '阿兰蒂尔塔 · 门房',
    date: '1820年泪落月',
    text: [
      '渡口对岸就是阿兰蒂尔塔。一座老法师塔，围着它修起一座镇，镇如今是教廷的都城，地界里禁传统魔法。城门口的卫兵披风只搭左肩。吉列姆过关的时候把两只手揣进了袖子。',
      { if: 'party.guilhem', speaker: '吉列姆', text: '八百年前精灵在这座塔里教人念头一句咒。如今我在这儿算违禁品。理论上。' },
      '门房在塔基的一间石屋里，一张桌子，一条腿短。你说明来意：不问话，只看一眼。',
      { speaker: '门房修士', text: '上一位只看一眼的带了两箱金冠。人在外头排队，号是四百一十一。' },
      { if: 'is.god', text: '他话说到一半，侧门里出来三个穿灰袍的，分形修会的，一人一把黄铜卡尺。他们量了你的手腕、影子的长短和你呼出来的气，在表上填：天赋异禀的法师（见附录）。' },
    ],
    first: ['codex c_aranthil', 'codex c_fragment'],
    choices: [
      {
        text: '把来意再说一遍，说到他肯往里通报',
        check: {
          skill: 'persuasion', dc: 15,
          mods: [{ if: 'flag.a1x_letter', n: 2, why: '史家会的介绍信' }, { if: 'rep.church >= 1', n: 1, why: '教会里有人替你说过话' }, { if: 'is.divine || is.faithful', n: 1, why: '你懂神殿门房的规矩' }],
        },
        ok: {
          text: '他叹了口气，领你进了前厅。前厅空着，石头地面磨得发亮。你站了一刻钟。脚底下响了一声，又高又短，像有人拿指甲弹了一下玻璃杯沿，地板缝里漏上来一线青蓝。门房修士在胸前画了个符号，请你出去。',
          effects: ['flag heard_hum'],
          goto: 'a1_16b',
        },
        fail: {
          text: '{?flag.a1x_letter:他把介绍信看完，叠成四折，垫在了桌子那条短腿底下。桌子不晃了。|他听完，从抽屉里摸出一张号牌。}“四百一十二。登记费五个金冠。叫到号的时候人不在，作废。”',
          effects: ['gold -5'],
          goto: 'a1_16b',
        },
      },
      {
        text: '照规矩领号，去外头排队',
        effects: ['rep church +1'],
        result: '四百一十二号。队伍从塔基绕到了河滩上。排你前头的是一位带了铺盖的老太太，她说她是春天来的。门房修士在登记簿上给你记了三个字：守规矩。',
        goto: 'a1_16b',
      },
      {
        text: '不等通报，自己走进去',
        tag: '神',
        if: 'is.god',
        effects: ['flag fragment_hushed', 'rep church -2'],
        result: [
          '没人拦得住。台阶往下四十级，一道铁门，一间地窖。它悬在一只空台座上方，拳头大，青蓝的，正响到一半。',
          '你站到它跟前，它停了。光还在，声音没了。守在那儿的修女笔尖悬着，本子上那一行是空的，有记录以来头一回。你什么也没问到。',
        ],
        goto: 'a1_16b',
      },
    ],
  },

  a1_16b: {
    id: 'a1_16b',
    title: '陪同',
    art: 'ev_the_heroine',
    loc: '阿兰蒂尔塔 · 塔基',
    text: [
      '你还没走出塔基，身后有人叫住了你。教廷的公文已经写好了：兹派分形修会修女一名，陪同贵公司。墨是干的，日期是昨天。',
      '修女是个月精灵，灰袍，一副侏儒磨的眼镜，胳膊底下夹着一个硬皮本子。她叫娜尔雯·望月。',
      { if: 'party.guilhem', speaker: '吉列姆', text: '我只想问贵会一件事。流星一年比一年少，贵会的本子上记没记。' },
      { speaker: '娜尔雯', text: '上回有人这么问，是 1666 年。问的人第二天就走了，没带伞。你带伞了吗？' },
      { speaker: '娜尔雯', text: '它今年响了十一声。1809 年是四十声。我没说它在变弱。我说的是我数到了十一。' },
      { if: 'flag.heard_hum && !flag.fragment_hushed', text: '她翻开本子给你看最末一行：今天，申时二刻，一声。旁边是她刚添的小字：前厅有外人一名，听见了。' },
      { if: 'flag.fragment_hushed', speaker: '娜尔雯', text: '我听了一百五十四年，它从没提过你。今天它停了。这一行该怎么记，你说？' },
      { if: 'is.god && !flag.fragment_hushed', text: '她打量你的工夫比打量吉列姆长，然后在本子的页边记了一个时辰，别的没写。' },
    ],
    first: ['companion +narwen', 'quest q_narwen start', 'codex c_fractalines', { if: 'flag.fragment_hushed', then: ['approval narwen -2'] }],
    choices: [
      {
        text: '用精灵语问她，“上回”到底是哪一年',
        tag: '精灵血',
        if: 'is.elfblood',
        once: true,
        effects: ['approval narwen +1'],
        result: [{ speaker: '娜尔雯', text: '1666 年，托丽丝辞任的那天。我二十五岁，在门外替她举灯。你这口音是哪一支的？上回我听见，还是在船上。' }],
      },
      {
        text: '问她：公文上写“陪同”，她自己怎么说',
        effects: ['approval narwen +1'],
        result: [{ speaker: '娜尔雯', text: '公文是真言院拟的。我自己说：我来看着你们，顺便出一趟门。上回我出这座镇，渡口还没有电报局。' }],
        goto: 'a1_17',
      },
      {
        text: '告诉她：公司的报告，外人不能看',
        effects: ['rep church -1', 'approval narwen -1', 'rep partner +1'],
        result: [{ speaker: '娜尔雯', text: '可以。那我的本子，公司也不能看。这笔买卖谁吃亏，你算过吗？' }],
        goto: 'a1_17',
      },
      {
        text: '什么也不问，替她把本子箱拎上船',
        effects: ['rep church +1'],
        result: '箱子比看上去沉。一百五十四年，一年一本，她只带了最近的二十本。门房修士在登记簿上又给公司记了一笔好的。',
        goto: 'a1_17',
      },
    ],
  },

  a1_17: {
    id: 'a1_17',
    title: '头一份报告',
    loc: '阿兰蒂尔塔渡口 · 电报局',
    text: [
      '渡口的电报局就一间屋。报务员养了只猫，猫睡在纸带盘上，拍报之前得先把它请下来。公司的规矩：每单收尾，给合伙人拍一份报告。收报地址是安本科斯特阿斯拉银行的一个信箱，没有人名。电报按字收钱，两个铜板一个字。',
      '这一单能写的有：十三个字的电报，纤道上的战斗法师，康威尔的{?flag.volleys:七条人命|那一声枪}，地窖里一年响十一声的东西。报务员把铅笔削好推过来，电报纸上印着格子，一格一个字。',
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）写全是二百一十四个字，四百二十八个铜板。（不确定。）少写的那些字，他会不会从别处知道。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '你写“教会派员陪同”就行。上回有人把我的名字写进公文，是 1702 年，抄错了三处。' },
    ],
    choices: [
      {
        text: '另抄一份，寄给老连队的文书',
        tag: '安本纳尔',
        if: "origin == 'anbennar'",
        once: true,
        effects: ['var home_copies +1', 'rep republic +1'],
        result: '连部的文书是你的老熟人，欠你半包烟。你在信封上写：存档，别往上递。他会往上递的，这一条你也算进去了。',
      },
      {
        text: '用密码本给使馆照抄一份',
        tag: '洛伦特',
        if: "origin == 'lorent' && !flag.a1x_embassy_done",
        once: true,
        effects: ['flag a1x_embassy_done', 'var home_copies +1', 'rep wand +1', { if: 'flag.codebook_seen', then: ['rep republic -1'] }],
        result: ['密码本的书脊是假的，你拆开用了一夜。使馆的回条只有一个词：悉。', { if: 'flag.codebook_seen', text: '这本密码海关翻过。你发给使馆的每一个字，陆军部隔天也读到了，比使馆只晚半天。' }],
      },
      {
        text: '给使馆写一份薄的：只报收成',
        tag: '洛伦特',
        if: "origin == 'lorent' && !flag.a1x_embassy_done",
        once: true,
        effects: ['flag a1x_embassy_done', 'var embassy_gap +1'],
        result: '三行。使馆的回条隔了四天才来，也是三行，最后一行问：阁下是否太忙。',
      },
      {
        text: '另抄一份，寄给镇议会',
        tag: '巨魔湾',
        if: "origin == 'concord'",
        once: true,
        effects: ['var home_copies +1', 'rep charter +1'],
        result: '镇议会收到要六个礼拜，表决要不要拆开看，再要两个礼拜。你在封皮上写了“急”。写了也白写。',
      },
      {
        text: '托回城的船，把报告念给法德伦的工会听',
        tag: '无主者',
        if: "origin == 'unowned'",
        once: true,
        effects: ['var home_copies +1', 'rep union +1'],
        result: '口信是一个司炉背下来带回去的，一字不差。工会在黑板上抄了一遍，抄到“六个人干四十个人的活”，底下有人喊：这不就是我们。',
      },
      {
        text: '把这一单写进游学团的考察笔记',
        tag: '卡尔希尔',
        if: "origin == 'karshyr'",
        once: true,
        effects: ['var home_copies +1', 'rep south +1'],
        result: '题目是“一家有限责任的冒险公司”。你在“共和国如何议事”那一章底下添了一节：电报十三个字，广场三排枪。老家的行会要的就是这种例子。',
      },
      {
        text: '写全，一个字不省',
        cost: { gold: 4 },
        effects: ['flag report1_full', 'rep partner +1', 'approval middlesday +1'],
        result: ['报务员拍了一刻钟，拍到“齐射”两个字的时候抬头看了你一眼。', { speaker: '埃塔·斧砧', text: '回电：款已到。' }],
        goto: 'a1_18',
      },
      {
        text: '写，把广场和电报那两段删掉',
        cost: { gold: 2 },
        effects: ['flag report1_edited'],
        result: ['剩下的是一份很体面的护送报告：十个区，一次夜袭，驳船已交还。', { speaker: '埃塔·斧砧', text: '回电：款已到。' }],
        goto: 'a1_18',
      },
      {
        text: '写一份太平无事的：一路顺利，收成尚可',
        effects: ['flag report1_lie', 'rep partner -1', 'approval middlesday -1'],
        check: { skill: 'deception', dc: 13, mods: [{ if: "faction == 'seal'", n: -1, why: '你不惯在纸上撒谎' }] },
        ok: { text: ['八个字。报务员说这是他今年拍过的最短的报告。', { speaker: '埃塔·斧砧', text: '回电：款已到。' }], goto: 'a1_18' },
        fail: {
          text: ['八个字。回电来得比平常快，这回不是埃塔拟的。', { text: '报告收悉。康威尔一节请补。款照付。', cls: 'letter' }, '康威尔三个字，你没写过。'],
          effects: ['flag partner_knows_lie'],
          goto: 'a1_18',
        },
      },
    ],
  },

  a1_18: {
    id: 'a1_18',
    title: '数流星',
    art: 'ev_big_star_in_sky',
    loc: '月河 · 驳船顶',
    date: '1820年泪落月的一个晴夜',
    text: [
      '泪落月，晴夜。驳船顶上铺了油布，所有人都上来了。老规矩：这个月的头一个晴夜上屋顶数流星，数出来的数记进历书。',
      { if: 'world.tears >= 6', text: '数到后半夜，本子上是二百来颗。船舱里那本 1809 年的历书，这一栏印的是四个字：数不过来。' },
      { if: 'world.tears == 5', text: '数到后半夜，本子上是一百五十出头。船舱里那本 1809 年的历书，这一栏印的是四个字：数不过来。' },
      { if: 'world.tears <= 4', text: '数到后半夜，本子上不到一百颗。船舱里那本 1809 年的历书，这一栏印的是四个字：数不过来。' },
      '别摇也上来了，罐子摆在油布当中。得把马灯捻到最小，才看得见她身上那点光。',
      { if: 'party.bura', speaker: '布拉', text: '九、十、十一。数完了。我数的是欠饷的月份。流星比它多，多不了几年。' },
      { if: 'party.middlesday', speaker: '礼拜三', text: '（陈述。）一百零三，一百零四。（不确定。）落下来的归部里，记在器材账上。（礼貌。）那没落下来的，归谁。' },
      { if: 'party.guilhem', speaker: '吉列姆', text: '彗星一百一十一年来一回，上回是 1810 年。下一回是 1921 年。理论上。' },
      { if: 'party.narwen', speaker: '娜尔雯', text: '上回我这么数，托丽丝还在任。那年她数到一半就不数了，说够用了。' },
      { if: 'is.immortal', text: '娜尔雯说“上回”。你掐指算了算 1921 年你多大，又算 2032 年，算到第三回彗星就不算了。到那时候，船顶上跟年轻人说“上回”的，大概是你。' },
      { if: 'is.god', text: '贝尔特的小孙女是跟船来的，七岁。她数到一百就不会数了，扯了扯你的袖子，问你能不能让它再多落几颗。' },
    ],
    first: ['level 4'],
    choices: [
      {
        text: '让它多落一阵',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag tears_called', 'world tears +1', 'rep charter -2'],
        result: [
          '你抬了一下手。天顶上开了一道口子，青蓝的，落了有一刻钟。小姑娘数不过来，拍着手笑。',
          '有一阵落偏了，砸穿了下游一座谷仓的顶，烧了半仓新麦。第二天晶价跌了三成，卡拉桑尼的行情科连夜改了牌。',
          { if: 'party.narwen', speaker: '娜尔雯', text: '上回天上多落东西，是 1810 年。' },
        ],
      },
      {
        text: '问布拉，那十一个月的饷她打算怎么讨',
        if: 'party.bura',
        effects: ['approval bura +1'],
        result: [{ speaker: '布拉', text: '写信。一个月一封，写了九十六封。回信一共三封，都是“另候通知”。我打算写到他们换一句话。' }],
        goto: 'a2_01',
      },
      {
        text: '回答礼拜三：没落下来的，不归谁',
        if: 'party.middlesday',
        effects: ['approval middlesday +1'],
        result: [{ speaker: '礼拜三', text: '（高兴。）不归谁。（陈述。）这一栏我的账上也有，只有一行。（礼貌。）你这句话我记在那一行了。' }],
        goto: 'a2_01',
      },
      {
        text: '问娜尔雯，托丽丝那年数到了多少',
        if: 'party.narwen',
        effects: ['approval narwen +1'],
        result: [{ speaker: '娜尔雯', text: '她没报数。她说，数它的人比它落得快。我那时候二十出头，没听懂。现在呢？现在我不敢说听懂了。' }],
        goto: 'a2_01',
      },
      {
        text: '什么也不问，数到天亮',
        effects: ['rest short'],
        result: '后半夜落得稀了。{?party.guilhem:吉列姆头一个睡着，杯子还攥在手里，杯里是白水。|船上的人一个接一个睡了。}你数到天边发白，把数报给了记历书的人。',
        goto: 'a2_01',
      },
    ],
  },
};
