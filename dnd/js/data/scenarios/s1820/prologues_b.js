// prologues_b.js：s1820《泪尽》序章乙。洛伦泰内的新年（p_lorent_*）和托拉普里亚卡的新年（p_karshyr_*）。
// 只改本文件；自检：node tools/check-part.mjs s1820 prologues_b.js
//
// ── 提纲（对照圣经 11.1）────────────────────────────────────────────────
// 洛伦特
//   p_lorent_01  画像上的口气  新年朝会。女王驳托里谢赫特权案，口气是画像上的。三样只能盯一样：
//                措辞（历史 12 → heard_old_formula）／老臣（洞悉 11 → pb_watched_guard）／她的手（察觉 11 → pb_watched_crown）。
//                [神] 应她一声 → ioriel_noticed，王冠与魔杖 +1，cult +1。→ 02
//   p_lorent_02  三张条子      侍女、掌印官、保姆。先回谁 → lorent_patron_queen／_guard（魔杖 +1）／_eilis。
//                [灯] 先把三张抄一份（pb_notes_copied）。ioriel_noticed 时有第四张。→ 03
//   p_lorent_03  试口风        掌印官的门客，礼剑，见红就停。开打／装糊涂（欺瞒 12）／[印] 问批文（说服 12）／
//                [灯] 亮抄件（魔杖 −1）／[贵族] 报家名（威吓 11）。输 → lorent_notes_read，魔杖 −1。→ 03b
//   p_lorent_03b 西墙的小门    战后第二天。去至乐宫（隐匿 12，败了进门簿，魔杖 −1）→ 04；不去，药剂房领药 → 05。
//   p_lorent_04  静养所的窗下  艾莉丝是清醒的。first: met_eilis。落不落纸（pb_eilis_on_paper：海关败了多赔一点，使馆买走那一页）。→ 05
//   p_lorent_05  调令          信封、船、新港海关（欺瞒 11 或巧手 12；败 → codebook_seen，共和国 −1）。→ 05b
//   p_lorent_05b 头一份工钱之前 使馆参赞（白玫瑰王庭的人）交底：迟到者公司，旧债，将军的账户。讨开办费（说服 11）。→ 05c
//   p_lorent_05c 蜡烛铺        铸炉街，半块铜牌，布拉，楼梯，埃塔问会不会记账。→ 05d
//   p_lorent_05d 三行字        按章程起誓（印／灯），当选队长，头一件事：工钱先发谁（布拉好感）。→ 06
//   p_lorent_06  铜牌          擦铜牌，传令员喊罐子进城，头一单。当晚的密报：写全（魔杖 +1）／写薄（embassy_gap +1）。→ a1_01
// 卡尔希尔
//   p_karshyr_01 海吐了东西    码头卸货，第二个漩涡，阿尔瓦和罐子。看音叉的光（察觉 11；[蜥蜴人] 自动）→ saw_fork_light；
//                数漩涡（求生 11 → pb_read_water）；接着卸货（金冠）。[神] 把手伸进去（pb_hand_in_root，南岸 +1，特许商 −1）。→ 02
//   p_karshyr_02 收条          殖民官收走音叉。搬草 → alvar_friend；[印] 收条 → fork_receipt；[灯] 画尺寸 → fork_sketch；
//                [盾] 站到中间 → alvar_friend，特许商 −1，南岸 +1；回去卸货（不设标记）。→ 03
//   p_karshyr_03 从没吐过      诺罗·数浪的棚子，烤芭蕉，七条船。洞悉 10／求生 12 → noro_warned；讲罐子换南岸 +1；[半身人] 吃完再问。→ 04
//   p_karshyr_04 标本          夜里两个水手来抢草。开打／算账（说服 12）／吓（威吓 12）／[蜥蜴人] 下水放艇／
//                [施法者] 动水（成了也惊动那片海，南岸 −1）。输 → pb_pot_lost。→ 05
//   p_karshyr_05 考察题目      船长的话，六个礼拜，新港的客栈不租（说服 13，[蜥蜴人] 劣势；多付一倍；[盾] 鱼市的棚子）。→ 05b
//   p_karshyr_05b 抽签         题目：一家有限责任的冒险公司。《论坛报》末版的启事。→ 05c
//   p_karshyr_05c 蜡烛铺       铸炉街。头一个先问名字的地方。埃塔问会不会记账。→ 05d
//   p_karshyr_05d 三行字       起誓（盾／印／灯），当选队长，工钱先发谁。→ 06
//   p_karshyr_06 铜牌          传令员喊“布西拉尔的发现”。那只罐子你见过：说给公司听（布拉 +1）／先写回家（南岸 +1）。→ a1_01
//
// 本段自用标记（前缀 pb_，只在本文件里设、本文件里读）：
//   pb_watched_guard pb_watched_crown pb_notes_copied pb_duel_won pb_duel_talked pb_duel_fled pb_eilis_on_paper
//   pb_read_water pb_hand_in_root pb_dock_won pb_pot_lost
// 本段新拟的名字（统稿时并入译名表）：尼图赫／阿鲁特（nitukh／arut，蜥蜴人多看见的两种颜色）、
//   桨手克罗什克（Kroshk）、卡拉斯克（Karassk，词库已有）、“锚与桶”客栈。

// 西翼长廊的讨教。一对一，门客的血量压到三成：见红就停。
const DUEL = {
  title: '西翼长廊的讨教',
  intro: '礼剑没开刃，抽在身上照样是一道紫印子。他左臂缠着斗篷，当盾使。',
  enemies: [{ id: 'man_at_arms', name: '掌印官的门客', hpMult: 0.3 }],
  specials: [
    {
      id: 'candles', name: '打翻烛台', desc: '让那排蜡烛倒在他脚边',
      check: { skill: 'acrobatics', alt: ['sleight'], dc: 11 },
      success: { text: '烛台倒了，蜡油泼了他一靴子，半条廊子全黑了。', applyAll: { cond: 'blinded', turns: 1 } },
      fail: { text: '烛台比看上去沉。它晃了晃，把一滴蜡油甩在你手背上。', selfDmg: '1' },
    },
    {
      id: 'paperwork', name: '问他批文盖了几个印', desc: '宫里比试要礼宾官的批文，一式三份',
      check: { skill: 'persuasion', dc: 13 },
      success: { text: '他的剑停在半空。没有批文的讨教，明天写进回帖里就叫私斗。他退了一步，把剑夹回了胳肢窝。', end: 'win' },
      fail: { text: '“打完再补。”他说。' },
    },
  ],
  fleeable: true,
  win: { effects: ['flag pb_duel_won'], goto: 'p_lorent_03b' },
  lose: { effects: ['flag lorent_notes_read', 'rep wand -1'], goto: 'p_lorent_03b' },
  fled: { effects: ['flag pb_duel_fled', 'rep wand -1'], goto: 'p_lorent_03b' },
};

// [印] 的批文已经问过、没问住，再打就没有那一招了。
const DUEL_STAMPED = {
  title: DUEL.title,
  intro: '批文他有，一式三份。礼剑没开刃，抽在身上照样是一道紫印子。',
  enemies: DUEL.enemies,
  specials: [DUEL.specials[0]],
  fleeable: true,
  win: DUEL.win,
  lose: DUEL.lose,
  fled: DUEL.fled,
};

// 码头上的后半夜。两个水手血量六成，同船的桨手帮一把。
const DOCK = {
  title: '码头上的后半夜',
  intro: '灯只有两盏，栈桥上到处是缆绳。油布底下，有一盆草叫人吵醒了。',
  enemies: [{ id: 'cutpurse', n: 2, name: '想发财的水手', hpMult: 0.6 }],
  allies: [{ id: 'village_militia', name: '桨手克罗什克' }],
  specials: [
    {
      id: 'hawser', name: '把缆绳踢进他们脚底下', desc: '栈桥上盘着一圈系船的粗缆',
      check: { skill: 'acrobatics', alt: ['athletics'], dc: 11 },
      success: { text: '粗缆在栈桥上甩开，两个人一个绊一个，全躺下了。', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '缆绳比你想的沉。它只挪了一尺，倒把你自己的脚踝套了进去。', selfDmg: '1d2' },
    },
    {
      id: 'tarp', name: '掀开油布', desc: '蓝叶子的那盆见不得灯',
      check: { skill: 'nature', alt: ['arcana'], dc: 11 },
      success: { text: '油布一掀，蓝叶子的那盆对着灯炸开一团粉，亮得跟晌午一样。两个水手捂着眼睛乱转。', applyAll: { cond: 'blinded', turns: 1 } },
      fail: { text: '你掀错了一盆。会转的那盆转过来，冲你打了个喷嚏。' },
    },
  ],
  fleeable: true,
  win: { effects: ['flag pb_dock_won'], goto: 'p_karshyr_05' },
  lose: { effects: ['flag pb_pot_lost'], goto: 'p_karshyr_05' },
  fled: { effects: ['flag pb_pot_lost'], goto: 'p_karshyr_05' },
};

export const SCENES = {
  // ═══════════════════════════════ 洛伦特 ═══════════════════════════════
  p_lorent_01: {
    id: 'p_lorent_01',
    title: '画像上的口气',
    chapter: '序章 · 新年',
    art: 'ev_wood_elven_throne_room',
    loc: '洛伦泰内 · 王宫长殿',
    date: '1820年卡斯坦月1日',
    first: ['codex c_lorent', { if: 'is.god', then: ['codex c_apotheosis'] }],
    text: [
      '卡斯坦月头一天，洛伦泰内的钟从清早敲到现在。新年朝会开在长殿，北墙挂一排先王的画像，炭盆只摆在御座那头。{pc}，你站在侍从这一排，脚已经冻木了。',
      { if: 'is.noble', text: '你家在这殿里有个席位，第四排，靠柱子。今天轮到你当值，只能站着听。' },
      { if: 'is.monstrous', text: '这一排里只有你不是人类、精灵或者半身人。礼宾官把你排在柱子后头，说是为了队列齐整。' },
      '一位伯爵在念托里谢赫殖民地的特权案，念了一刻钟。女王今年二十七，听到第九款叹了口气，伸手去拿笔。笔没拿起来。她的手停在半路，折回去碰了一下王冠。',
      { speaker: '女王', text: '第三款，关税包给谁？你的内弟。第五款，驻军的粮从谁的庄子上买？还是你的内弟。此议于王国无益，于王座无礼，于朕无用。' },
      '伯爵跪下去，膝盖在石板上磕出了声。前排几个老臣没看他。他们扭着脖子，看的是北墙。',
      { if: 'is.caster && !is.mechanim', text: '她碰王冠的那一下，你后槽牙酸了一阵。站在一大块达姆斯塔尔边上，就是这个滋味。' },
      { if: 'is.god', text: '话说完了，她没坐回去。王冠底下那双眼睛越过伯爵的后脑勺，落到侍从这一排，停在你身上。' },
      { if: 'is.god', speaker: '女王', text: '孩子……阁下。' },
      { if: 'is.god', text: '两个称呼中间，她停了一口气的工夫。满殿的人顺着她的眼神找过来，没找着她在叫谁。你旁边的侍从往外挪了半步。' },
    ],
    choices: [
      {
        text: '听她的措辞，一个词一个词地听',
        check: {
          skill: 'history', dc: 12, adv: 'is.noble',
          mods: [
            { if: 'is.scholar', n: 1, why: '念过旧档' },
            { if: "faction == 'lantern'", n: 1, why: '灯条：听话听原文' },
          ],
        },
        ok: {
          text: '三个词收尾，自称用“朕”。这是十一世纪诏书的格式，如今只刻在北墙那些画像底下。七百年没人拿它当话说了。',
          effects: ['flag heard_old_formula'],
          goto: 'p_lorent_02',
        },
        fail: {
          text: '你只记得她碰了三回王冠。措辞是怪，怪在哪儿你说不上来。旁边的侍从拿胳膊肘顶你，叫你别张着嘴。',
          goto: 'p_lorent_02',
        },
      },
      {
        text: '看前排那几个老臣在看什么',
        check: { skill: 'insight', alt: ['perception'], dc: 11 },
        ok: {
          text: '掌印官盯着北墙第三幅：一个精灵女人，戴的是同一顶王冠。他看看画，看看女王，在袖口上记了一个字，记完把袖子拽下来盖住。',
          effects: ['flag pb_watched_guard'],
          goto: 'p_lorent_02',
        },
        fail: {
          text: '老臣们的脸你看了一圈，个个板着，跟墙上的画一个样。掌印官倒是回过头来，把你的脸看了个仔细。',
          effects: ['rep wand -1'],
          goto: 'p_lorent_02',
        },
      },
      {
        text: '盯住女王扶王冠的那只手',
        check: { skill: 'perception', alt: ['arcana'], dc: 11 },
        ok: {
          text: '三回。头两回是扶。第三回手指是扣上去往下摘的，摘到一半，手自己松开了。王冠纹丝没动。',
          effects: ['flag pb_watched_crown'],
          goto: 'p_lorent_02',
        },
        fail: {
          text: '她碰了王冠，这你看见了。碰了几回、怎么碰的，全叫伯爵那顶扑了粉的假发挡住了。你记住的只有假发。',
          goto: 'p_lorent_02',
        },
      },
      {
        text: '应她一声',
        tag: '神',
        if: 'is.god',
        effects: ['flag ioriel_noticed', 'rep wand +1', 'var cult +1'],
        result: '“在。”你说。女王的嘴替另一个人笑了一下，接着她自己打了个寒噤，把特权案扔回给伯爵。散朝的时候，掌印官站在殿门口，把你的名字抄进了一本新簿子，封皮上已经编了号。',
        goto: 'p_lorent_02',
      },
    ],
  },

  p_lorent_02: {
    id: 'p_lorent_02',
    title: '三张条子',
    art: 'ev_female_spy',
    loc: '洛伦泰内 · 王宫东廊',
    text: [
      '散朝了。东廊里人挤人，没人敢高声，靴子声倒比平时响。你从廊子这头走到那头，袖口里多了三样东西。',
      '头一张是女王的侍女塞的，折成指甲盖大，里头是女王自己的笔迹。',
      { text: '方才那些话，我想知道是谁说的。来书房。带上你记下的。', cls: 'letter' },
      '第二张是掌印官当面递的，一式三份，每份两个印。老臣党只认这个：不抄三遍、不盖两回印的，不算公文。',
      { text: '陛下今日所用辞令，出处待考。着即查明，三日内具文回复。', cls: 'letter' },
      '第三样是半张药方。城外“静养”的那位是女王的姐姐。她的保姆替你掸了掸肩膀，手抽回去，药方已经在你袖口里了，背面一行铅笔字。',
      { text: '艾莉丝问：她是不是先碰了王冠，才开的口。明日午后，西墙小门。', cls: 'letter' },
      '三家问的是同一件事。先回谁的话，另外两家天黑前就会知道。',
      { if: 'flag.ioriel_noticed', text: '袖口里还有第四张，没人递过它。纸是女王书房的纸，字母的写法你只在老墓碑上见过。' },
      { if: 'flag.ioriel_noticed', text: '阁下何时得空。', cls: 'letter' },
      { if: 'is.god && !flag.ioriel_noticed', text: '廊子里的人给你让路，让得比平时宽。有个小侍从伸手想摸你的袖子，叫他师傅一巴掌拍了回去。' },
    ],
    choices: [
      {
        text: '先把三张条子抄在一张纸上',
        tag: '灯',
        if: "faction == 'lantern'",
        once: true,
        effects: ['flag pb_notes_copied'],
        result: '你趴在窗台上抄完了。三家的话并排摆着：女王问的是“谁”，掌印官问的是“出处”，公主问的是“王冠”。问得最准的，是被关起来的那个。',
      },
      {
        text: '去书房，先回女王的话',
        effects: ['flag lorent_patron_queen'],
        result: [
          '书房没生火。王冠搁在她膝盖上，她两只手压着。“我说‘朕’了，是不是？”你点头。她把你的笔记从头看到尾，在“无用”底下划了一道，没还你。',
          { if: 'flag.pb_watched_crown', text: '你提了第三回那个往下摘的手势。她把两只手从王冠上拿开，放到了桌子底下。' },
        ],
        goto: 'p_lorent_03',
      },
      {
        text: '去掌印官的值房，先回老臣党的话',
        effects: ['flag lorent_patron_guard', 'rep wand +1'],
        result: [
          '值房里三张桌子，三个书吏，你说一句他们抄三遍。掌印官只问了一句：“像哪一位先王？”{?flag.heard_old_formula:你说十一世纪的，哪一位说不准。|你说画像底下的字你没念过。}他让你在回执上签字，回执也是三份。',
          { if: 'flag.pb_watched_guard', text: '签完，你朝北墙的方向偏了偏头。他把最上面那份抄件抽出来，对折，放进了自己的内袋。' },
        ],
        goto: 'p_lorent_03',
      },
      {
        text: '在药方上回两个字，交给保姆',
        effects: ['flag lorent_patron_eilis'],
        result: '你在药方正面的空白处写了两个字：“碰了。”保姆把它塞进袜筒。“小门我来管。大小姐说了，肯走小门的人她才信。”',
        goto: 'p_lorent_03',
      },
    ],
  },

  p_lorent_03: {
    id: 'p_lorent_03',
    title: '试口风',
    loc: '洛伦泰内 · 王宫西翼长廊',
    text: [
      '当晚回住处，要穿过西翼长廊。这条廊子夜里只点一半的蜡烛。尽头的烛台底下站着个人，三十来岁，左臂缠着斗篷，胳肢窝里夹着两把没开刃的礼剑。',
      '你认得他。掌印官府上的门客，替主子收信、送信，偶尔也收点别的。',
      { if: 'flag.lorent_patron_guard', speaker: '门客', text: '您下午在值房答得很得体。我家大人想知道，同样的话，您还打算答给谁听。' },
      { if: 'flag.lorent_patron_queen', speaker: '门客', text: '您在书房待了一刻钟零一点儿。我家大人想知道，您二位关着门说了些什么。' },
      { if: 'flag.lorent_patron_eilis', speaker: '门客', text: '城外那位的保姆，今天替您掸了肩膀。我家大人想知道，她掸走了什么。' },
      '他抽出一把礼剑，剑柄朝你递过来。',
      { speaker: '门客', text: '宫里不许动刀。所以这个叫讨教，见红就停。请。' },
      { if: 'is.god', text: '他说话的时候一直在看你的脖子。城里的赌档今晚开了个新盘口：朝会上被叫“阁下”的那一位，挨了剑流不流血。他押了五个金冠，押的是流。' },
    ],
    choices: [
      {
        text: '接过礼剑',
        combat: DUEL,
      },
      {
        text: '装糊涂：你只是个站班的，什么也没听清',
        check: {
          skill: 'deception', alt: ['performance'], dc: 12,
          mods: [{ if: 'flag.pb_watched_guard', n: 2, why: '你知道他要打听的是哪幅画，绕着说' }],
        },
        ok: {
          text: '你把朝会讲成了一场罚站：脚冷，伯爵啰嗦，女王嗓门大。他听了半天，没听出一句能写进回帖的，收了剑，请您早点歇着。',
          effects: ['flag pb_duel_talked'],
          goto: 'p_lorent_03b',
        },
        fail: {
          text: '你刚说到“站得太靠后”，他笑了。“第三排左数第七位，离御座十一步。我家大人数过。”他把另一把礼剑抛了过来。',
          combat: DUEL,
        },
      },
      {
        text: '问他这场讨教的批文盖了几个印',
        tag: '印',
        if: "faction == 'seal'",
        check: {
          skill: 'persuasion', dc: 12,
          mods: [{ if: 'flag.lorent_patron_guard', n: 2, why: '你刚给他主子签过三份回执' }],
        },
        ok: {
          text: '“宫里比试，要礼宾官的批文，一式三份，用印两回。您的呢？”他张了张嘴。老臣党的人可以不讲理，不能不讲手续。他把礼剑夹回去，给你让了路。',
          effects: ['flag pb_duel_talked'],
          goto: 'p_lorent_03b',
        },
        fail: {
          text: '“批文？”他从怀里抽出一沓，三份，印泥还没干。“我家大人想得比您周到。请。”',
          combat: DUEL_STAMPED,
        },
      },
      {
        text: '把三张条子的抄件亮给他看',
        tag: '灯',
        if: 'flag.pb_notes_copied',
        effects: ['flag pb_duel_talked', 'rep wand -1'],
        result: '他凑到蜡烛底下看完了。问这件事的不止他主子一家，另外两家一家比一家大。他把抄件还给你，剑也收了。明天一早掌印官就会知道：你手里有底，而且肯拿出来给人看。',
        goto: 'p_lorent_03b',
      },
      {
        text: '报上家名，问他凭什么身份向你讨教',
        tag: '贵族',
        if: 'is.noble',
        check: { skill: 'intimidation', alt: ['history'], dc: 11 },
        ok: {
          text: '你把家名连封地一起报了。他欠了欠身：门客向有席位的人讨教，得他主子亲自下帖。他把两把礼剑并到一只手里，退到了墙边。',
          effects: ['flag pb_duel_talked'],
          goto: 'p_lorent_03b',
        },
        fail: {
          text: '“贵府的席位在第四排，靠柱子。”他说。“我家大人的在第一排。这点路，用不着下帖。”',
          combat: DUEL,
        },
      },
    ],
  },

  p_lorent_03b: {
    id: 'p_lorent_03b',
    title: '西墙的小门',
    loc: '洛伦泰内 · 王宫',
    date: '1820年卡斯坦月2日',
    text: [
      { if: 'flag.pb_duel_won', text: '门客是捂着手腕走的，一把礼剑落在廊子里，你没捡。第二天全宫的人见了你，都先看你的手。' },
      { if: 'flag.lorent_notes_read', text: '你是在石板地上醒过来的。口袋翻过了，翻得很仔细。笔记本一页不少地放了回去，只是页角多了一道折痕。你记了什么，掌印官现在都有数了。' },
      { if: 'flag.pb_duel_talked', text: '第二天早上，门客在廊子里迎面碰见你，欠了欠身，跟头一回见面一样。' },
      { if: 'flag.pb_duel_fled', text: '你是跑回住处的。第二天早饭的时候，这件事已经有了三个讲法，哪个讲法里你都没拔剑。' },
      '早饭是一碗兑了水的热葡萄酒，一块昨天的面包。今天没排你的班。那半张药方上写着：午后，西墙小门。',
      '城外那座行宫叫至乐宫，早年是先王打猎歇脚的地方，坡下是葡萄园和玫瑰圃。如今里头只住着一位病人。去一趟来回半天，正门的门簿上，访客一个一个都要登记。',
    ],
    choices: [
      {
        text: '午后去至乐宫，走西墙的小门',
        check: {
          skill: 'stealth', dc: 12, adv: 'flag.lorent_patron_eilis',
          mods: [{ if: 'is.small', n: 1, why: '个子小，矮墙挡得住' }],
        },
        ok: {
          text: '园丁换班的空当有一袋烟的工夫。你贴着玫瑰圃的矮墙过去，小门没上闩，门轴是新上过油的。',
          goto: 'p_lorent_04',
        },
        fail: {
          text: '小门没闩，可门后坐着个打盹的门丁，你一推他就醒了。他不拦你，只把门簿翻开，舔了舔笔尖。“姓名。事由。”',
          effects: ['rep wand -1'],
          goto: 'p_lorent_04',
        },
      },
      {
        text: '不去。把下午花在药剂房',
        effects: ['hp full', 'item +healing_potion', 'item +bandage 2'],
        result: '药剂师替你揉了淤青，又塞给你一瓶药水、两卷绷带。“宫里这阵子不太平，备着。”西墙的小门那天下午开了一个钟头，没人进去。',
        goto: 'p_lorent_05',
      },
    ],
  },

  p_lorent_04: {
    id: 'p_lorent_04',
    title: '静养所的窗下',
    art: 'ev_the_heroine',
    loc: '洛伦泰内郊外 · 至乐宫',
    first: ['flag met_eilis'],
    text: [
      '静养所是行宫西头的一排平房，窗子朝着玫瑰圃，这个月份只剩剪过的枝子。她坐在窗里，腿上盖着毯子，手边一摞《洛伦特日报》，按日子码得整整齐齐。她比女王大三岁，看着倒比女王小，那是母亲那边的血。',
      { speaker: '艾莉丝', text: '他们一天给我量三回脉，量了十四年。没有一个人问过我听见了什么。你是头一个走小门的。' },
      { speaker: '艾莉丝', text: '十六岁那年我偷戴过那顶王冠，就一顿晚饭的工夫。它问我今年是哪一年。我答了，答出了声，一桌子人都听见了。' },
      { speaker: '艾莉丝', text: '我父亲戴了二十七年，一回也没答过它。所以他是国王，我是病人。' },
      { if: 'flag.heard_old_formula', text: '你把“无益、无礼、无用”学给她听。她没等你说完就接了下去，一个字不差。' },
      { if: 'flag.pb_watched_crown', text: '你比了比第三回那个往下摘的手势。她低头看自己的手。' },
      { if: 'flag.pb_watched_crown', speaker: '艾莉丝', text: '摘不动的。倒不沉，是手不肯。' },
      { if: '!flag.heard_old_formula && !flag.pb_watched_crown', speaker: '艾莉丝', text: '我妹妹昨天碰了几回王冠，你数了没有？下回数一数。' },
      { if: 'is.elfblood', text: '她看了看你的耳朵。' },
      { if: 'is.elfblood', speaker: '艾莉丝', text: '我母亲那边的人。她的族人活得久，记性好，所以宫里不大爱请他们吃饭。' },
      { if: 'is.god', speaker: '艾莉丝', text: '昨天的事保姆讲了。它管你叫“阁下”。它管我父亲叫“孩子”，管谁都叫“孩子”。' },
      { if: 'is.god', text: '她把手里的报纸放下了，十四年里头一回有她没从报上读到过的事。' },
      { if: 'is.god', speaker: '艾莉丝', text: '你是比它老，还是比它大？' },
      '保姆在门外咳了一声：园丁快回来了。',
    ],
    choices: [
      {
        text: '把她的话记进笔记本，一个字不改',
        effects: ['flag pb_eilis_on_paper'],
        result: '她看着你写。“写‘她说’，别写‘病人说’。”写完她把笔记本要过去，在页脚签了名。签的是全名，带封号。',
        goto: 'p_lorent_05',
      },
      {
        text: '只记在脑子里，不落纸',
        result: '“聪明。”她说。“他们对付我用的就是这一手：十四年，没有一个字落在纸上。”保姆送你出小门。门在你背后上了闩。',
        goto: 'p_lorent_05',
      },
      {
        text: '走之前，替她念一段阿德安的晚祷',
        tag: '神职',
        if: 'is.divine',
        effects: ['rep wand +1'],
        result: '她听完了，没跟着念。“王庭的神父一个礼拜来两回，念的也是这一段。你念得比他慢，听着是真在跟阿德安要东西。”保姆在门外，把最后一句跟着念完了。',
        goto: 'p_lorent_05',
      },
    ],
  },

  p_lorent_05: {
    id: 'p_lorent_05',
    title: '调令',
    art: 'ev_far_and_wide',
    loc: '安本科斯特 · 新港海关',
    date: '1820年埃斯玛月',
    first: ['hp full', 'codex c_anbenncost'],
    text: [
      '调令和船票装在同一个信封里，封口两个印。调令上写：“着即赴安本科斯特使馆听用。”船票是三等舱，后天的。',
      { if: 'flag.lorent_patron_queen', text: '女王托侍女捎来一句口信：这不是她的意思。可她也没拦。' },
      { if: 'flag.lorent_patron_guard', text: '送信封来的是那位门客。他说掌印官对您很满意，满意到想请您离远一点。' },
      { if: 'flag.lorent_patron_eilis', text: '保姆没再露面。至乐宫西墙的小门，听说第二天就拿砖砌死了。' },
      '船走了十九天。安本科斯特的新港比洛伦泰内整座城还吵：吊车，卖《论坛报》的报童，墙上隔十步一张告示，印的是埃斯玛利亚公投的日子。',
      '海关归治安军管。查你的是个下士，袖口磨得发亮，手边一杯凉透的咖啡。你的箱子里有一本巴掌大的祈祷书，书脊是假的。',
      { speaker: '下士', text: '洛伦特来的。来干什么，住哪儿，待多久。一样一样说。' },
      { if: 'is.god', text: '他的表格上有一栏“种族”。他看了你一会儿，笔尖在那一栏上头悬着，最后写了个“待定”，旁边画了个问号。' },
    ],
    choices: [
      {
        text: '说是来探亲的，把话编圆',
        check: {
          skill: 'deception', dc: 11,
          mods: [
            { if: "faction == 'seal'", n: 2, why: '印条：报关单填得一字不差' },
            { if: 'flag.pb_duel_talked', n: 1, why: '在西翼长廊练过一回' },
          ],
        },
        ok: {
          text: '“探亲。马里昂区，表姐，开帽子铺的。”帽子铺是真的，表姐是使馆替你备的。他在名册上划了一道，祈祷书连碰都没碰。',
          goto: 'p_lorent_05b',
        },
        fail: {
          text: [
            '你刚说到“表姐”，他已经把那本祈祷书翻到了中间。“书脊是假的。贵国的祈祷书都这么装订？”他翻了两页，合上，还给你，在本子上记了一笔。',
            { if: 'flag.pb_eilis_on_paper', text: '你的笔记本他也翻了。有签名的那一页，他看的工夫比别的页长。' },
          ],
          effects: ['flag codebook_seen', 'rep republic -1', { if: 'flag.pb_eilis_on_paper', then: ['rep wand -1'] }],
          goto: 'p_lorent_05b',
        },
      },
      {
        text: '趁他低头蘸墨水，把祈祷书挪进大衣内袋',
        check: { skill: 'sleight', dc: 12 },
        ok: {
          text: '他抬头的时候，箱子里只剩衬衫、刮脸刀和一包没拆的洛伦特烟草。他把烟草拿起来闻了闻，放了回去。',
          goto: 'p_lorent_05b',
        },
        fail: {
          text: [
            '书是挪进去了，大衣的内袋鼓出一个四方的角。他拿笔杆敲了敲那个角。“掏出来吧，省得我搜。”他翻得很慢，一页一页的。',
            { if: 'flag.pb_eilis_on_paper', text: '笔记本他也要了去。有签名的那一页，他看的工夫比别的页长。' },
          ],
          effects: ['flag codebook_seen', 'rep republic -1', { if: 'flag.pb_eilis_on_paper', then: ['rep wand -1'] }],
          goto: 'p_lorent_05b',
        },
      },
      {
        text: '亮出家名，要求走使馆的通道',
        tag: '贵族',
        if: 'is.noble',
        effects: ['rep republic -1'],
        result: '他把你的家名抄了两遍，一遍进名册，一遍进另一个本子。箱子没开。你出关的时候，有个穿便服的人合上报纸，跟着你走了三条街。',
        goto: 'p_lorent_05b',
      },
    ],
  },

  p_lorent_05b: {
    id: 'p_lorent_05b',
    title: '头一份工钱之前',
    loc: '安本科斯特 · 马里昂区 · 洛伦特使馆',
    first: [{ if: 'flag.pb_eilis_on_paper', then: ['gold +15'] }],
    text: [
      '使馆在马里昂区一条种椴树的街上，门口治安军的岗亭比使馆的门房还新。接你的是参赞，五十来岁，常服领口别一枚白玫瑰别针，跟你那枚是一个模子出来的。他是王庭派在这儿的。',
      { speaker: '参赞', text: '您在宫里站了几年班，站得很好。所以王庭想请您换个地方，接着站。' },
      '他推过来一张剪报，《论坛报》末版的一条启事，拿红铅笔圈着：“招冒险者。老字号。自备靴子。”',
      { speaker: '参赞', text: '迟到者公司，铸炉街，一家蜡烛铺的楼上。穷了三百多年，没人正眼看过它。十年前，它的旧债叫一个账户全数买走了。那个账户，同共和国的一位将军有来往。' },
      { speaker: '参赞', text: '去谋个位置。头一份密报，在头一份工钱之前交。' },
      { if: 'flag.codebook_seen', speaker: '参赞', text: '海关的事我听说了。密码本照旧用。往后您写的每一个字，就当共和国也在看，这样写出来的东西反倒干净。' },
      { if: 'flag.pb_eilis_on_paper', text: '他翻了翻你的笔记本，在有签名的那一页上停了很久，然后把那一页裁了下来，从抽屉里数出十五个金冠，压在你的帽子底下。' },
      { if: 'flag.pb_eilis_on_paper', speaker: '参赞', text: '这一页值这个数。往后这类东西，请直接交给我。' },
      { if: 'is.god', speaker: '参赞', text: '还有一件。洛伦泰内来信，说朝会上出了一位“阁下”。照规矩得开泛神会议，上一回开是 1520 年。会开完之前，请您别在使馆的地界上显什么。保险行不赔。' },
    ],
    choices: [
      {
        text: '问他这趟差事的开办费',
        check: {
          skill: 'persuasion', dc: 11,
          mods: [
            { if: 'flag.lorent_patron_guard', n: 2, why: '掌印官的值房打过招呼' },
            { if: 'is.noble', n: 1, why: '他认得你的家名' },
          ],
        },
        ok: {
          text: '他数了二十五个金冠，让你签收条。收条一式三份。使馆也归老臣党的规矩管。',
          effects: ['gold +25'],
          goto: 'p_lorent_05c',
        },
        fail: {
          text: '“王庭的差事，讲的是奉献。”他从抽屉里摸出五个金冠。“车钱。铸炉街不远，走着去也使得。”',
          effects: ['gold +5'],
          goto: 'p_lorent_05c',
        },
      },
      {
        text: '不提钱。把剪报收好，问清门牌就走',
        effects: ['rep wand +1'],
        result: '他送你到楼梯口，没再往下送。你下到一半，听见他在上头跟书记说：“记一笔。比上一位省事。”',
        goto: 'p_lorent_05c',
      },
    ],
  },

  p_lorent_05c: {
    id: 'p_lorent_05c',
    title: '蜡烛铺',
    loc: '安本科斯特 · 铸炉街',
    date: '1820年花始月',
    first: ['codex c_forgeway', 'codex c_company'],
    text: [
      '花始月。使馆替你把身份养了三个礼拜：帽子铺的表亲，丢了差事，靴子是自己的。铸炉街是矮人的地界，两边的铺子不卖刀就卖甲，各家门口站着垄断集团合养的卫兵。蜡烛铺在街中段，一股牛油味。',
      '侧门边钉着块铜牌，字磨掉了一半，认得出的只剩“到者公司”和“1446”。楼梯口坐着个兽人女人在擦盾，下巴是黄铜的，带铰链。',
      { speaker: '布拉', text: '找谁。' },
      '你说应聘。她低头看你的脚。',
      { speaker: '布拉', text: '洛伦特的鞋掌。靴子是自己的？行，启事上就这一条，你合格。上来。第三级是松的。' },
      '楼上一间屋，三张桌子，只有一张有人。矮人，女的，白头发编成两股，面前一本账，比她的胳膊还厚。她先看了看你的别针。',
      { speaker: '埃塔', text: '银的，白玫瑰王庭的。上一个戴这个进门的是 1794 年，来讨债，没讨着。你会不会记账？' },
    ],
    next: 'p_lorent_05d',
  },

  p_lorent_05d: {
    id: 'p_lorent_05d',
    title: '三行字',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: ['companion +bura'],
    text: [
      '章程钉在埃塔背后的墙上：一张羊皮纸，三行字，每行左边一块黑，是三百多年的手印叠出来的。',
      { speaker: '埃塔', text: '1446 年立的。三条，你按一条。按完我记在你名字后头，改不了。' },
      { if: "faction == 'seal'", text: '你把手按在第二行上：“签了字的，就办到。”三行里数这一块最黑。' },
      { if: "faction == 'seal'", speaker: '埃塔', text: '印条。公司三百七十四年没毁过约。别从你这儿开头。' },
      { if: "faction == 'lantern'", text: '你把手按在第三行上：“去看，回来说。”这一行的手印最浅。' },
      { if: "faction == 'lantern'", speaker: '埃塔', text: '灯条。上一个按这条的替史家会跑腿，跑到 1702 年。去看了，没回来说。' },
      { if: "faction == 'shield'", text: '你把手按在头一行上：“先护人，后算账。”' },
      { if: "faction == 'shield' && party.bura", speaker: '布拉', text: '跟我一条。按这条的，银行不借钱。' },
      { speaker: '埃塔', text: '还有一件。1811 年以后公司没有队长。一百金冠以上的单子要队长签字。' },
      '她看布拉。布拉看窗外。',
      { if: 'party.bura', speaker: '布拉', text: '我只管外勤。' },
      { speaker: '埃塔', text: '秘书不能批自己的账。那就表决。' },
      '表决用了一口气的工夫：两票赞成，一票没来得及举手。',
      { speaker: '埃塔', text: '恭喜，队长。头一件事：柜上现钱四十一金冠，这个月的工钱只够先发一个人。发谁。' },
      { if: 'is.god', speaker: '埃塔', text: '另外，细则第九条：成了神的，不加钱。细则有四十条，墙上挂不下，都在我这儿。' },
      { if: 'is.god && party.bura', speaker: '布拉', text: '楼下的人说你是神。上个月他们说蜡烛铺老板娘是公爵的私生女。我只看外勤。' },
    ],
    choices: [
      {
        text: '先发布拉的',
        effects: ['approval bura +1'],
        result: '埃塔数了六个金冠推过去。布拉没数，直接揣了。铰链咔的响了一声，这回不是坏消息。“共和国欠我十一个月。公司欠我的，刚才清了。”',
        goto: 'p_lorent_06',
      },
      {
        text: '先发自己的',
        effects: ['gold +6', 'approval bura -1'],
        result: '埃塔数了六个金冠给你，在账上记：“队长，预支，到任头一天。”布拉接着擦她的盾，擦的还是刚才那一块。',
        goto: 'p_lorent_06',
      },
      {
        text: '请埃塔翻账：欠得最久的那一笔先发',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['approval bura +1', 'gold +2'],
        result: '埃塔翻到 1812 年。“布拉，外勤，八年，欠过她两回，都补了。再往前是我自己，1790 年的半个月，我没催过。”她把六个金冠推给布拉，又数了两个给你：“查账的辛苦钱。章程上有。”',
        goto: 'p_lorent_06',
      },
    ],
  },

  p_lorent_06: {
    id: 'p_lorent_06',
    title: '铜牌',
    art: 'ev_multi_racial_merc',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: [
      'level 2',
      'flag captain',
      'companion +bura',
      'quest q_jar start',
      'codex c_company',
      'codex c_tellum',
      { if: "faction == 'seal'", then: ['gold +30'] },
    ],
    text: [
      '布拉扔给你一块绒布，一罐擦铜油。',
      { if: 'party.bura', speaker: '布拉', text: '铜牌归队长擦。规矩。磨掉的那一半，就是这么擦没的。' },
      '你在侧门口擦到“1446”的时候，街上过来一个泰卢姆的传令员，摇着铃，嗓子劈了一半。',
      { speaker: '传令员', text: '南边海里捞上来的！布西拉尔的发现！罐子里装的是活的，礼拜五进城，史家会开验，去晚了没座！' },
      { if: 'is.god', text: '他喊到一半看见了你，铃停了。他倒着走了三步，换了一套词：“铸炉街，蜡烛铺，神在擦铜牌！亲眼所见，一个铜板听全本！”' },
      '埃塔从楼上的窗口探出半个身子。',
      { speaker: '埃塔', text: '那是公司的头一单。史家会雇人看罐子，一天两个金冠，不到一百，用不着你签字。' },
      { if: "faction == 'seal'", text: '她顺手扔下来一个小布袋：印条的入伙金，三十金冠。1446 年定的数，没涨过。' },
      '夜里，你在阁楼的铺位上摊开那本祈祷书。头一份密报该写了。蜡烛是楼下铺子给的，记在公司账上。',
    ],
    choices: [
      {
        text: '写全：铜牌、账本、矮人、兽人，一样不落',
        effects: ['rep wand +1'],
        result: '你写到蜡烛短了一半。公司有几个人，柜上有多少钱，那个矮人的账记到哪一年，全在里头。译成密码，四页成了九页。',
        goto: 'a1_01',
      },
      {
        text: '写薄：已入职，公司甚小，详情续报',
        effects: ['var embassy_gap +1'],
        result: '半页纸，三句话。柜上有多少钱、谁的饷欠了多久，你一个字没写。蜡烛还剩大半根，你给吹了。',
        goto: 'a1_01',
      },
    ],
  },

  // ═══════════════════════════════ 卡尔希尔 ═══════════════════════════════
  p_karshyr_01: {
    id: 'p_karshyr_01',
    title: '海吐了东西',
    chapter: '序章 · 新年',
    loc: '西尔·伯肯之地 · 托拉普里亚卡港',
    date: '1820年卡斯坦月1日',
    first: [{ if: 'is.god', then: ['codex c_apotheosis'] }],
    text: [
      '托拉普里亚卡的码头上，卡尔希尔的商船在卸货。六十袋丁香，二十桶染料，布西拉尔的税吏拿着石板一桶一桶点。染料他是按“清水”记的：桶里那两种颜色，坎诺人的眼睛看不见。',
      { if: 'is.scholar', text: '{pc}，你是船上的书记，货单在你手里。“清水”那一栏，你照着他的写了。' },
      { if: '!is.scholar && is.caster && !is.martial', text: '{pc}，你是船上的水术师，管淡水，管风向，卸货的时候管着别让桶滚进海里。' },
      { if: '!is.scholar && is.martial', text: '{pc}，你是船上的陆战兵，卸货的时候站在跳板边上。你数的是人，防着有人顺手。' },
      '晌午刚过，南边的海面塌下去一块。码头上的人都认得那个样子。昨天下午它起过一回，吞了一条小船，船上是个布西拉尔来的半精灵，带着一把音叉。这片海吞船吞了几百年，港里的人看一眼就接着干活。',
      '今天它又起了。小船从涡心里弹上来，跟软木塞似的转了两圈才停稳。船上那个半精灵浑身湿透，一只手举着个果酱罐，另一只手攥着音叉，笑得合不上嘴。税吏的石板掉在地上，摔成了两半。',
      { if: 'is.god', text: '漩涡没合上。它在原地转了半圈，又张开了，第三回。这一回涡口是歪的，朝着码头，朝着你，然后停住不动。栈桥尽头，一个半身人领航员从棚子里钻了出来。' },
      { if: 'is.god', speaker: '领航员', text: '它认得你。几百年了，它谁也不认。' },
    ],
    choices: [
      {
        text: '盯住他另一只手里那把音叉',
        if: "race != 'lizardfolk'",
        check: {
          skill: 'perception', alt: ['arcana'], dc: 11,
          mods: [{ if: 'is.sailor', n: 1, why: '看惯了海上的反光' }],
        },
        ok: {
          text: '音叉在发光，青蓝的，一明一暗，跟着他的手抖。这个颜色你在老家见过：雨季的夜里，海岸上那几座尖碑就是这么亮的。',
          effects: ['flag saw_fork_light'],
          goto: 'p_karshyr_02',
        },
        fail: {
          text: '太阳正对着你。你只看见他举着个亮东西，等手搭上凉棚，殖民官的兵已经围上去了。光的事是后来船上的老水术师讲的，她用了两个你不认识的词。',
          goto: 'p_karshyr_02',
        },
      },
      {
        text: '看那把音叉的光',
        tag: '蜥蜴人',
        if: "race == 'lizardfolk'",
        effects: ['flag saw_fork_light'],
        result: '音叉的光在你眼里是三层：外头一圈尼图赫，当中是坎诺人也看得见的青蓝，芯子里一线阿鲁特。雨季的夜里，老家海岸上的尖碑就是这三层。税吏在你旁边眯着眼，他只看见了当中那一层。',
        goto: 'p_karshyr_02',
      },
      {
        text: '不看人，看水：数它转了几圈才合上',
        check: { skill: 'survival', alt: ['nature'], dc: 11, adv: 'is.sailor' },
        ok: {
          text: '昨天那个，从起到合有一顿饭的工夫。今天这个，你数到四十就平了，海面连个旋儿都没剩。它开得比昨天快，合得也比昨天利索。',
          effects: ['flag pb_read_water'],
          goto: 'p_karshyr_02',
        },
        fail: {
          text: '你数到一半，一只没系牢的染料桶从跳板上滚下来，砸在你脚背上。桶没破。脚背青了一块。',
          effects: ['hp -2'],
          goto: 'p_karshyr_02',
        },
      },
      {
        text: '先把手里的货放稳，货单还没点完',
        effects: ['gold +5'],
        result: '全码头只有你没撒手。税吏的石板摔了，后头三十袋丁香是照你的数记的。船长过来看了一眼货单，往你手里拍了五个金冠。光的事，你是后来听船上的老水术师说的。',
        goto: 'p_karshyr_02',
      },
      {
        text: '把手伸进去',
        tag: '神',
        if: 'is.god',
        effects: ['flag saw_fork_light', 'flag pb_hand_in_root', 'rep south +1', 'rep charter -1'],
        result: '你隔着半个港伸出手，水够着了你。底下有一个音，很长，一直没断。你摸着了它，记住了。港里每条船的缆绳同时松了一扣，三条舢板漂了出去。殖民官的书记当场在报告上添了一行。',
        goto: 'p_karshyr_02',
      },
    ],
  },

  p_karshyr_02: {
    id: 'p_karshyr_02',
    title: '收条',
    art: 'ev_anb_global_trade',
    loc: '托拉普里亚卡 · 码头',
    first: ['codex c_alvar'],
    text: [
      '布西拉尔的殖民官把桌子直接摆到了码头上。小船靠岸不到一刻钟，音叉已经锁进一只铁皮箱，箱子上坐着个兵。',
      '那个半精灵叫阿尔瓦，披着别人的毯子，还在讲。',
      { speaker: '阿尔瓦', text: '下去的时候是有点吓人，是的。可你们想想，那底下有海！有海就能行船！这几盆是我在那边滩上挖的。这只罐子……罐子回头再说，她眼下不大高兴。' },
      { speaker: '殖民官', text: '阿蒙先生，您的发现归布西拉尔王国所有。音叉暂由本署保管。草，您可以自己留着。' },
      '那几盆怪草还在小船上晃，叶子是蓝的，有一盆在自己转着找太阳。你们船上的货也才卸了一半。',
      { if: 'flag.pb_hand_in_root', text: '殖民官的报告摊在桌上，你倒着也认得出来：“另有当地水妖一名，自称无害，未予收缴。”' },
      { if: 'is.god', speaker: '阿尔瓦', text: '您！刚才那是您！下回您跟我一起下去，我带音叉，您带您自己就行！' },
    ],
    choices: [
      {
        text: '帮阿尔瓦把那几盆草搬上岸',
        effects: ['flag alvar_friend'],
        result: '一共五盆。会转的那盆咬了你一口，没破皮。阿尔瓦每搬一盆报一个名字，名字都是他刚起的。搬完他攥着你的手摇了半天，问了两遍你叫什么，说回头书里要写。',
        goto: 'p_karshyr_03',
      },
      {
        text: '站到阿尔瓦和那几个兵中间，让他把话讲完',
        tag: '盾',
        if: "faction == 'shield'",
        effects: ['flag alvar_friend', 'rep charter -1', 'rep south +1'],
        result: '兵要架他去署里“补手续”。你往中间一站，没说话。码头上卸货的蜥蜴人和半身人陆续停了手，也没说话。殖民官数了数人头，说手续明天补也行。阿尔瓦压根没发觉，他还在讲海。',
        goto: 'p_karshyr_03',
      },
      {
        text: '请殖民官给那把音叉开一张收条',
        tag: '印',
        if: "faction == 'seal'",
        check: { skill: 'persuasion', dc: 11 },
        ok: {
          text: '“贵署收了东西，照贵国的规矩得有张条子。”殖民官看了你一会儿，开了：达姆斯塔尔音叉一把，收自阿蒙先生，地点托拉普里亚卡。落款盖了章。阿尔瓦不要，你替他收着。',
          effects: ['flag fork_receipt'],
          goto: 'p_karshyr_03',
        },
        fail: {
          text: '“条子可以开。印花税五个金冠，现付。”他连税带章收得一丝不乱。该写的倒都写了：音叉一把，收自阿蒙先生，地点托拉普里亚卡。',
          effects: ['flag fork_receipt', 'gold -5'],
          goto: 'p_karshyr_03',
        },
      },
      {
        text: '趁乱把音叉的尺寸画下来',
        tag: '灯',
        if: "faction == 'lantern'",
        check: { skill: 'sleight', alt: ['investigation'], dc: 11 },
        ok: {
          text: "坐箱子的兵起身去撵看热闹的，箱盖开着。你拿拇指比了叉齿的长短，画在货单背面，用的是船上记染料的墨。坎诺人拿到这张纸，看见的是一张白纸。{?race == 'lizardfolk':|你自己也看不见，画完请老水术师替你对了一遍。}",
          effects: ['flag fork_sketch'],
          goto: 'p_karshyr_03',
        },
        fail: {
          text: '尺寸是画下来了，用的是船上记染料的墨，坎诺人看着是白纸。可你量叉齿的时候，坐箱子的兵回了头。他没看懂你在干什么，只把你的脸和船名报给了殖民官。',
          effects: ['flag fork_sketch', 'rep charter -1'],
          goto: 'p_karshyr_03',
        },
      },
      {
        text: '回去卸货。卸完再看热闹',
        effects: ['gold +8'],
        result: '剩下的丁香和染料天黑前全上了岸，船长按件加了八个金冠。你直起腰的时候，码头上的坎诺人已经管那个漩涡叫“布西拉尔的发现”了。',
        goto: 'p_karshyr_03',
      },
    ],
  },

  p_karshyr_03: {
    id: 'p_karshyr_03',
    title: '从没吐过',
    loc: '托拉普里亚卡 · 码头尽头',
    first: ['codex c_root'],
    text: [
      '码头尽头有个棚子，芭蕉叶盖顶，门口挂一串量水的铅坠。领航员诺罗·数浪在里头烤芭蕉。她是本地的半身人，二十岁，脚背上的毛编了三股辫子。这岛在她嘴里叫阿迪诺诺西，西尔·伯肯是画地图的人后来添的。',
      { speaker: '诺罗', text: '坐，趁热。这个是甜的，那个抹了丁香酱，你们船上运的那种。吃着说：那个半精灵抱上来的是什么？罐子里的，是活的不是？' },
      '你吃了两个。她自己一个没动，眼睛一直在南边那块海上。',
      { speaker: '诺罗', text: '这片海吞船吞了几百年，从来只进不出。我家三代人领航，账上欠着这片海里的七条船：领出去没领回来的，都算我们的。今天它头一回往外吐，吐的还是个坎诺人。' },
      { speaker: '诺罗', text: '再说这两年……算了。吃你的。' },
      { if: 'is.god', text: '她把最大的那个芭蕉推到你面前，没抹酱。' },
      { if: 'is.god', speaker: '诺罗', text: '七条船。头一条是我奶奶领的，1768 年。你既然跟它熟，叫它吐出来，行不行？' },
      { if: 'is.god', text: '你说不行。' },
      { if: 'is.god', speaker: '诺罗', text: '那你跟它也没多熟。吃吧。' },
    ],
    choices: [
      {
        text: '把她咽回去的那半句捡起来',
        check: {
          skill: 'insight', dc: 10,
          mods: [{ if: 'flag.pb_read_water', n: 2, why: '你数过今天那个漩涡' }],
        },
        ok: {
          text: '“这两年怎么了？”她拿火钳翻芭蕉，翻了很久。“这两年它好起。从前三五年起一回，要有法师在近海动手才起。去年起了四回，有两回海上连条船都没有。我没敢往账上记。”',
          effects: ['flag noro_warned'],
          goto: 'p_karshyr_04',
        },
        fail: {
          text: '你等她往下说，她等你把芭蕉吃完。最后是她赢了。临走她收了你两个金冠：芭蕉一个，酱一个。',
          effects: ['gold -2'],
          goto: 'p_karshyr_04',
        },
      },
      {
        text: '跟她讲行话：潮差，水色，铅坠带上来的是沙是泥',
        check: {
          skill: 'survival', alt: ['nature'], dc: 12, adv: 'is.sailor',
          mods: [{ if: 'flag.pb_read_water', n: 2, why: '你数过今天那个漩涡' }],
        },
        ok: {
          text: '她答着答着，把不想说的也答了。“南边的水这两年是温的。漩涡去年起了四回，有两回海上连条船都没有。从前要有法师动手它才起。”说完她看了你一眼，往你手里又塞了一个芭蕉。',
          effects: ['flag noro_warned'],
          goto: 'p_karshyr_04',
        },
        fail: {
          text: '你问潮差，她答潮差。你问水色，她答水色。问到漩涡，她搬出了领航的规矩：涡口的事，只讲给付了领航钱的船。你们船没雇她。',
          goto: 'p_karshyr_04',
        },
      },
      {
        text: '把罐子里那个东西讲给她听',
        effects: ['rep south +1'],
        result: '你讲了：巴掌高，有翅膀，隔着玻璃冲人比划，看口型不是好话。她听得烤煳了一个芭蕉。“我奶奶说海底下有另一片滩。全家都当她是晒糊涂了。”她给你包了四个芭蕉带走，酱另装。',
        goto: 'p_karshyr_04',
      },
      {
        text: '照半身人的规矩来：她递的先吃完，再开口',
        tag: '半身人',
        if: "race == 'halfling'",
        effects: ['flag noro_warned'],
        result: '七个，你一个没剩。她看你的眼神从看客人变成了看亲戚。“这两年它好起。去年四回，有两回海上连条船都没有。这话我连殖民官都没说。他一顿只吃一个。”',
        goto: 'p_karshyr_04',
      },
    ],
  },

  p_karshyr_04: {
    id: 'p_karshyr_04',
    title: '标本',
    loc: '托拉普里亚卡 · 码头',
    text: [
      '夜里码头上只剩两盏灯。阿尔瓦那五盆草盖着油布，挨着你们船卸下来的货。殖民官的署里不肯收，说活物不归他管。{?flag.alvar_friend:阿尔瓦去署里补手续了，走前拉着你的手，求你替他看一晚上。|船长叫你守货，草是顺带的。}',
      '后半夜来了两个人，光着脚，一身鱼腥味，是港里一条布西拉尔渔船上的水手。一个提着拆缆绳的铁钎，一个拎着麻袋。',
      { speaker: '水手', text: '海里上来的草，贾赫港的药铺论两收。五盆，够买条船了。你让一让，分你一盆的钱。' },
      '跟你一块儿守夜的桨手克罗什克已经把钩篙端平了。他是蜥蜴人，没有嘴唇，坎诺话里的“不”字他发不出来。他拿钩篙尖在栈桥上划了一道线。',
      { if: 'is.god', text: '提铁钎的那个一直在看你。白天码头上的事他听说了，有人跟他打了赌：那一位挨了扎，流出来的是血还是海水。' },
    ],
    choices: [
      {
        text: '抄起撑篙，站到那道线上',
        combat: DOCK,
      },
      {
        text: '跟他们算账：这草谁伺候，卖给谁',
        check: {
          skill: 'persuasion', alt: ['deception'], dc: 12,
          mods: [
            { if: "faction == 'shield'", n: 2, why: '盾条：先问他们船上还有几张嘴' },
            { if: 'flag.alvar_friend', n: 1, why: '你搬过这几盆草，知道它们多难伺候' },
          ],
        },
        ok: {
          text: '“会转的那盆一天挪六回，咬人。蓝叶子的见不得灯。到贾赫港要走四十天，你们谁伺候？”拎麻袋的看了看油布底下自己在动的那一团，把麻袋卷了起来。两个人走的时候还在吵，吵的是谁出的主意。',
          effects: ['flag pb_dock_won'],
          goto: 'p_karshyr_05',
        },
        fail: {
          text: '“四十天？”提铁钎的笑了。“那就今晚卖。码头上现成有个殖民官。”',
          combat: DOCK,
        },
      },
      {
        text: '往前走一步，让他们看清你的个头',
        check: {
          skill: 'intimidation', dc: 12,
          mods: [
            { if: "race == 'lizardfolk'", n: 2, why: '你张了张嘴，牙是全的' },
            { if: 'is.martial', n: 1, why: '你握篙的手法是练过的' },
          ],
        },
        ok: {
          text: '你没说话，克罗什克也没说话。两个不说话的人，一根钩篙，一根撑篙。拎麻袋的先退了，退到灯照不着的地方才转身跑。',
          effects: ['flag pb_dock_won'],
          goto: 'p_karshyr_05',
        },
        fail: {
          text: '你往前走了一步，踩在一摊鱼鳞上，滑了半步。吓人的事最怕这个。两个水手对看了一眼，一起上来了。',
          combat: DOCK,
        },
      },
      {
        text: '下水，从栈桥底下摸过去，把他们的小艇放了',
        tag: '蜥蜴人',
        if: "race == 'lizardfolk'",
        effects: ['flag pb_dock_won'],
        result: '你憋着一口气游了半个码头，解了缆，把小艇往外一送。两个水手听见水响回头，他们的船正往南边那块海上漂。他们扔下麻袋就追。那边今天刚起过漩涡，他们追得很小心。',
        goto: 'p_karshyr_05',
      },
      {
        text: '叫栈桥底下的水站起来',
        tag: '施法者',
        if: 'is.caster && !is.mechanim',
        check: { skill: 'arcana', dc: 11 },
        ok: {
          text: '一道齐腰的浪翻上栈桥，把两个人连麻袋拍进了海里，他们是游着跑的。浪退下去以后，南边的海面塌了碗口大的一块，转了半圈才平。诺罗从棚子里冲出来，站在栈桥那头骂了你一刻钟：这个港三代人不许动法术。',
          effects: ['flag pb_dock_won', 'rep south -1'],
          goto: 'p_karshyr_05',
        },
        fail: {
          text: '水起来了，起在南边。远处的海面塌了碗口大的一块，转了半圈才平。栈桥底下一个浪花都没有。两个水手没看懂，可他们看出来你手里是空的。',
          effects: ['rep south -1'],
          combat: DOCK,
        },
      },
    ],
  },

  p_karshyr_05: {
    id: 'p_karshyr_05',
    title: '考察题目',
    art: 'ev_far_and_wide',
    loc: '安本科斯特 · 新港',
    date: '1820年埃斯玛月',
    first: ['hp full', 'codex c_karshyr', 'codex c_anbenncost'],
    text: [
      { if: 'flag.pb_dock_won', text: '天亮的时候，五盆草一盆不少。阿尔瓦挨个数了两遍，给会转的那盆起了第三个名字。' },
      { if: 'flag.pb_pot_lost', text: '天亮的时候草剩四盆，蓝叶子的那盆叫人连盆端走了。阿尔瓦蹲在空出来的那块地方，蹲了一晚上，谁劝也不起来。' },
      '船长把你叫上舵楼。南边那块海已经平了，海关的小艇在上头插了一面布西拉尔的旗。',
      { speaker: '船长', text: '游学团下个礼拜北上，去安本科斯特。名单上添了你。到了那边，弄清楚他们打算拿我们的海干什么。' },
      '邮船走了六个礼拜。安本科斯特的新港在下雪。游学团十一个人，团长拿着三种文字的介绍信敲了四家客栈的门。四个老板都把信看完了，都很客气地还了回来，都说没房。第五家叫“锚与桶”。',
      { if: "race == 'lizardfolk'", speaker: '老板', text: '没房。' },
      { if: "race == 'lizardfolk'", text: '他连理由都懒得编。' },
      { if: "race != 'lizardfolk'", speaker: '老板', text: '您一位，有房。后头那几位带鳞的先生，小店的被褥怕潮。' },
      { if: 'is.god', speaker: '老板', text: '您我认得，南边那位，泰卢姆的传令员上个月喊过。神住店，房钱加三成。上回舱底区有位显过灵的在我这儿住了一宿，屋顶漏了半年。' },
    ],
    choices: [
      {
        text: '跟老板讲道理：十一个人，十一份房钱，现付',
        check: {
          skill: 'persuasion', dc: 13, dis: "race == 'lizardfolk'",
          mods: [{ if: "faction == 'seal'", n: 2, why: '印条：把他门口贴的店规一条条念给他听' }],
        },
        ok: {
          text: '你把十一份房钱在柜台上码成一摞，又把他门口那张“来者是客”的店规念了一遍。他看看钱，看看店规，看看门外的雪。“后院那排。被褥自己晾。”这是游学团在坎诺睡的头一张床。',
          effects: ['rep south +1'],
          goto: 'p_karshyr_05b',
        },
        fail: {
          text: '“店规是给客人看的。”他把门关了一半。“你们算货。货走商栈。”那一晚十一个人睡在卡尔希尔商栈的货仓里，枕的是丁香袋。早上起来，团里的蜥蜴人没有一个蜕得下皮。',
          effects: ['hp -3'],
          goto: 'p_karshyr_05b',
        },
      },
      {
        text: '多付一倍房钱',
        cost: { gold: 12 },
        effects: ['rep south +1'],
        result: '老板把钱数了两遍，发现被褥其实不怕潮。团长在本子上记了一笔：“坎诺人的规矩有价钱。价钱：一倍。”他让你在后头签字作证。',
        goto: 'p_karshyr_05b',
      },
      {
        text: '不敲门了。去鱼市后头，跟卸货的挤一晚',
        tag: '盾',
        if: "faction == 'shield'",
        effects: ['rep union +1'],
        result: '新港鱼市后头有间棚子，住着二十来个卸货的：蜥蜴人，地精，两个兽人。他们挪了挪，给十一个人腾出半间。夜里有人递过来一壶热鱼汤，没人问你们是哪国的。',
        goto: 'p_karshyr_05b',
      },
    ],
  },

  p_karshyr_05b: {
    id: 'p_karshyr_05b',
    title: '抽签',
    loc: '安本科斯特 · 卡尔希尔商栈',
    first: [{ if: "race == 'lizardfolk'", then: ['gold -3'] }],
    text: [
      '考察题目是抽签定的。团长把十一个纸卷放进一只茶叶罐，摇了摇。抽到“议会”的去旧斗兽场旁听，抽到“海关”的去新港数印章，抽到“报馆”的那个高兴得拿尾巴扫翻了凳子。',
      '你展开自己那一卷：“一家有限责任的冒险公司。”',
      { speaker: '团长', text: '好题目。坎诺人管这个叫公司：几个人凑钱，赔了只赔凑的那些，赚了按份分。我们要共和国，不要帝国，就得先弄懂他们是怎么搭伙的。六个月后交稿。' },
      '可公司不收旁听的。你翻遍了《论坛报》，肯要人的只有末版一条：“招冒险者。老字号。自备靴子。”',
      { if: "race == 'lizardfolk'", text: '靴子你没有，你的脚穿不进坎诺人的鞋楦。商栈的皮匠拿两块船帆皮给你现缝了一双，收了三个金冠。' },
    ],
    next: 'p_karshyr_05c',
  },

  p_karshyr_05c: {
    id: 'p_karshyr_05c',
    title: '蜡烛铺',
    loc: '安本科斯特 · 铸炉街',
    date: '1820年花始月',
    first: ['codex c_forgeway', 'codex c_company'],
    text: [
      '铸炉街从新港一直往北，两边全是矮人的铺子，各家门口站着垄断集团合养的卫兵。你拿着剪报一路问过去。三家的卫兵让你站远点说话，一家的伙计先问你是哪国的、算哪一种，问完说不知道。',
      '蜡烛铺在街中段，一股牛油味。侧门边钉着块铜牌，字磨掉了一半，认得出的只剩“到者公司”和“1446”。楼梯口坐着个兽人女人在擦盾，下巴是黄铜的，带铰链。',
      { speaker: '布拉', text: '叫什么。' },
      '你报了名字。',
      { speaker: '布拉', text: '靴子是自己的？行，启事上就这一条。上来。第三级是松的。' },
      '你上到一半才回过味来：进城这些天，这是头一个先问名字的地方。种族她压根没问。',
      '楼上一间屋，三张桌子，只有一张有人。矮人，女的，白头发编成两股，面前一本账，比她的胳膊还厚。',
      { speaker: '埃塔', text: '卡尔希尔。阳洲南边那个岛。公司 1653 年往那边发过一船蜡烛，船沉了，保险赔了七成。你会不会记账？' },
      '你说你是来写论文的。',
      { speaker: '埃塔', text: '写论文的都会记账。不会的，论文也写不成。' },
    ],
    next: 'p_karshyr_05d',
  },

  p_karshyr_05d: {
    id: 'p_karshyr_05d',
    title: '三行字',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: ['companion +bura'],
    text: [
      '章程钉在埃塔背后的墙上：一张羊皮纸，三行字，每行左边一块黑，是三百多年的手印叠出来的。',
      { speaker: '埃塔', text: '1446 年立的。公司不收旁听的。三条，你按一条，按了就算入伙，入了伙账本随你看。按完我记在你名字后头，改不了。' },
      { if: "faction == 'shield'", text: '你把手按在头一行上：“先护人，后算账。”' },
      { if: "faction == 'shield' && party.bura", speaker: '布拉', text: '跟我一条。按这条的，银行不借钱。' },
      { if: "faction == 'seal'", text: '你把手按在第二行上：“签了字的，就办到。”三行里数这一块最黑。' },
      { if: "faction == 'seal'", speaker: '埃塔', text: '印条。公司三百七十四年没毁过约。别从你这儿开头。' },
      { if: "faction == 'lantern'", text: '你把手按在第三行上：“去看，回来说。”这一行的手印最浅。' },
      { if: "faction == 'lantern'", speaker: '埃塔', text: '灯条。上一个按这条的替史家会跑腿，跑到 1702 年。去看了，没回来说。' },
      { speaker: '埃塔', text: '还有一件。1811 年以后公司没有队长。一百金冠以上的单子要队长签字。' },
      '她看布拉。布拉看窗外。',
      { if: 'party.bura', speaker: '布拉', text: '我只管外勤。' },
      { speaker: '埃塔', text: '秘书不能批自己的账。那就表决。' },
      '表决用了一口气的工夫：两票赞成，一票没来得及举手。你的论文还一个字没写，题目里的那个东西已经归你管了。',
      { speaker: '埃塔', text: '恭喜，队长。头一件事：柜上现钱四十一金冠，这个月的工钱只够先发一个人。发谁。' },
      { if: 'is.god', speaker: '埃塔', text: '另外，细则第九条：成了神的，不加钱。细则有四十条，墙上挂不下，都在我这儿。' },
      { if: 'is.god && party.bura', speaker: '布拉', text: '码头上的人说你是水妖，街上的人说你是神。我只看外勤。' },
    ],
    choices: [
      {
        text: '先发布拉的',
        effects: ['approval bura +1'],
        result: '埃塔数了六个金冠推过去。布拉没数，直接揣了。铰链咔的响了一声，这回不是坏消息。“共和国欠我十一个月。公司欠我的，刚才清了。”',
        goto: 'p_karshyr_06',
      },
      {
        text: '先发自己的',
        effects: ['gold +6', 'approval bura -1'],
        result: '埃塔数了六个金冠给你，在账上记：“队长，预支，到任头一天。”布拉接着擦她的盾，擦的还是刚才那一块。',
        goto: 'p_karshyr_06',
      },
      {
        text: '请埃塔翻账：欠得最久的那一笔先发',
        tag: '印',
        if: "faction == 'seal'",
        effects: ['approval bura +1', 'gold +2'],
        result: '埃塔翻到 1812 年。“布拉，外勤，八年，欠过她两回，都补了。再往前是我自己，1790 年的半个月，我没催过。”她把六个金冠推给布拉，又数了两个给你：“查账的辛苦钱。章程上有。”',
        goto: 'p_karshyr_06',
      },
      {
        text: '问一句再发：这家公司的账，凭什么让一个头一天来的人管',
        tag: '灯',
        if: "faction == 'lantern'",
        effects: ['approval bura +1'],
        result: '“凭你头一天来。”埃塔说。“待久了的都知道这个字不好签。”布拉的铰链响了一声，你后来才学会分辨，那是她在笑。六个金冠，埃塔推给了布拉：“问得对的，后发。”你把这三句话记进了论文的头一页。',
        goto: 'p_karshyr_06',
      },
    ],
  },

  p_karshyr_06: {
    id: 'p_karshyr_06',
    title: '铜牌',
    art: 'ev_multi_racial_merc',
    loc: '铸炉街 · 蜡烛铺楼上',
    first: [
      'level 2',
      'flag captain',
      'companion +bura',
      'quest q_jar start',
      'codex c_company',
      'codex c_tellum',
      { if: "faction == 'seal'", then: ['gold +30'] },
    ],
    text: [
      '布拉扔给你一块绒布，一罐擦铜油。',
      { if: 'party.bura', speaker: '布拉', text: '铜牌归队长擦。规矩。磨掉的那一半，就是这么擦没的。' },
      '你在侧门口擦到“1446”的时候，街上过来一个泰卢姆的传令员，摇着铃，嗓子劈了一半。',
      { speaker: '传令员', text: '南边海里捞上来的！布西拉尔的发现！罐子里装的是活的，礼拜五进城，史家会开验，去晚了没座！' },
      { if: 'is.god', text: '他喊到一半看见了你，铃停了。他倒着走了三步，换了一套词：“铸炉街，蜡烛铺，南边那位在擦铜牌！亲眼所见，一个铜板听全本！”' },
      '埃塔从楼上的窗口探出半个身子。',
      { speaker: '埃塔', text: '那是公司的头一单。史家会雇人看罐子，一天两个金冠，不到一百，用不着你签字。' },
      { if: "faction == 'seal'", text: '她顺手扔下来一个小布袋：印条的入伙金，三十金冠。1446 年定的数，没涨过。' },
      '那只罐子你见过。它出水的时候，这条街上还没有一个人听说过托拉普里亚卡。擦铜油在你手上干了一层。',
    ],
    choices: [
      {
        text: '上楼告诉她们：罐子出水那天，你就在码头上',
        effects: ['approval bura +1'],
        result: '你从漩涡讲到殖民官的铁皮箱。埃塔听完，在账本上添了一行：“队长，目击，不另计酬。”布拉只问了一句：罐子里那个，咬不咬人。你说会转的那盆草咬。',
        goto: 'a1_01',
      },
      {
        text: '先不说。今晚把这件事写进考察笔记，寄回家',
        effects: ['rep south +1'],
        result: '夜里你在阁楼上写了三页，用的是带来的墨，三种颜色，坎诺人只看得见一种。头一句是：“他们已经管它叫布西拉尔的发现了。”信走商栈的船，六个礼拜到卡拉斯克。',
        goto: 'a1_01',
      },
    ],
  },
};
