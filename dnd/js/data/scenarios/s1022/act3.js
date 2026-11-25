// 第三幕《白年》，含间幕《十六年》（BIBLE §11.4）。间幕 1024—1040，正戏 1040 年卡斯坦月—苏伦月。
// 进场 6 级，四个同伴都在。出场 8 级，卡斯坦、瓦勒兰一定在队；巴里只在 edict_overruled 时留队；薇齐娜看 vezina_left。
// 阿德蕾西娅从 a3_04 起是扈从（不是同伴，战斗里作 allies）。a3_20 → a4_01。
//
// 大纲（谁在场；变了什么；出口）
// a3_01  十六年：年表（加雷克、山、戴伦、卢坎）；years_* 四选一。永生：登记册抄了上一年。→ a3_02
// a3_02  彗星之夜（1033）：伊迪丝一句“都歇会儿吧”，全场放碗；五种先生五种口气。edith_trusts / 不说 / [贤者门下] 报瓦洛森。→ a3_03
// a3_03  信（1040 卡斯坦月）：福尔卡德的信和一块饼；四人重聚数白头发；[达梅里亚] 阿雷尔王子（arrel_with_you）；
//        分饼连夜走 / 回信问坟（a3x_wrote）。white_year 开始，四人入队保证。→ a3_04
// a3_04  渡鸦山（第三幕开场）：敞着的坟、阿德蕾西娅入场；医药/宗教/调查三检；[精灵] 进隔离屋；[伊贝瓦尔] 手令。→ a3_05
// a3_05  头一夜：坟场战（起尸×5、食尸鬼；驻军弓手、阿德蕾西娅）；敲钟、泼灯油。败：烧半个下城。→ a3_06
// a3_06  封不封（上）：德纳里昂要烧山，说服 15；[旧礼] 门里的葬礼（体质豁免）；★[神] 进城治病（god_healed）。→ a3_06b
// a3_06b 门：quarantine_held / quarantine_open。→ a3_07
// a3_07  城门口的两队（样例④）：“是精灵带来的”；追（运动）/ [鹰身女妖] 上房 / 不追（a3x_rumor）。→ a3_07b 或 a3_07d
// a3_07b 皮匠街：特技 / 叫队友截。→ a3_07c
// a3_07c 染坊：察觉 / 威吓；三中二立 a3x_caught，否则 a3x_rumor。→ a3_07d
// a3_07d 车夫：放人 / 叫他收回那句话 / 贴告示 / 什么也不说。→ a3_08
// a3_08  鸦巢：knows_ravens_watched、vezina_eye 任务开始；[鸦信] 正门 / 潜行 15（败：开打）/ 敲门。→ a3_08b
// a3_08b 内圈：德基南；奥秘 15 看两种读法；洞悉 16（没有鸦信又没打过的，败了开打）。神：不仁里没有你。→ a3_09
// a3_09  鸦眼：vezina_eye / vezina_stopped / vezina_left（写信捅出去，blame_ravens）。→ a3_10
// a3_10  海路：体质豁免 13 或买偏方；卡斯坦和瓦勒兰吵凯伦。white_year 2。→ a3_10b
// a3_10b 白旗船：上船取样（医药 15，[水手/海精灵] 优势）→ plague_samples；绕开。→ a3_11
// a3_11  布勒瓦尔城（枢纽、巴扎、长休）：锡亚丹的鹰身女妖（赎 / 撬 / 不管）、钱庄汇票、试炼山老兵（历史 14）、
//        [伊贝瓦尔] 拉娜哈莉的管家、[鹰身女妖] 兽苑登记、[精灵][矮人] 一句。→ a3_12
// a3_12  太阳王的印：伊谢莉丝；说服 17 谈“各出一位”；照准 / 不接 / 交出先知会的塔 / ★[神] 苏雷尔的使者。→ a3_13 或 a3_12b
// a3_12b 半年：谈不拢之后再选接或不接。→ a3_13
// a3_13  大墓地第三层：束腰的死人（战）；[武人] 守楼梯口 / [半身人] 钻矮门；踢翻灯油福尔卡德拦。sixteen_graves 4。→ a3_13b
// a3_13b 念名字：帮福尔卡德念一夜（短休）/ 连夜走。→ a3_14
// a3_14  戴伦：四种性子；[威克斯] 四百匹马；永生：发马的是个什么；说服 16 劝他认错 / 让巴里进来。→ a3_14b
// a3_14b 令：edict_upheld（巴里出城）/ edict_overruled / edict_softened（巴里留堡）。→ a3_15
// a3_15  街口（样例⑤）：伊迪丝摘手套；点头（edith_mob）/ 自己上（说服 16，败：开打）/ 敲钟 / [蓝宝石] 单挑 / ★[神] 站着。→ a3_16
// a3_16  瓦洛森（小枢纽、药房、短休）：加里昂要两样东西；[acromis_quiet] 三船粮；[years_watch] 学生；样本。→ a3_17
// a3_17  怪谁：blame_* 四选一；blame_ravens 已立的改问怎么办。神：声望翻倍。→ a3_18
// a3_18  疫令：law_full / law_limited（说服 15；[贤者门下] 免检）/ law_refused。→ a3_19 或 a3_18b
// a3_18b 签字：限期没签成，只剩全给或不给。→ a3_19
// a3_19  实验室（上）：有图（cure_early）或自己找（求生 16，败多一个月）。knows_roster、罐子、white_year 3。→ a3_19b
// a3_19b 号魂：潜行 15 绕过去（败：全队受伤）；[乌霜边区] 罐子上的军团牌。→ a3_19c
// a3_19c 名册：医药 15 挑罐子；奥秘 16（[施法者] 优势）看懂那本书；阿雷尔二世在 994 年那一页。→ a3_20
// a3_20  三剂药（样例⑥）：doses_* 四选一；[洛伦特] 骑士按剑；医药 16 看出雷安是着凉。level 8。→ a4_01
//
// 本段私有标记（只在本文件里设、本文件里读）：a3x_arrel_no、a3x_wrote、a3x_bite、a3x_tree、a3x_inside、a3x_burn_warned、
// a3x_night_lost、a3x_rumor、a3x_caught、a3x_retracted、a3x_fought、a3x_bandaged、a3x_read_dekinan、a3x_left_cage、
// a3x_alarm、a3x_bill、a3x_veteran、a3x_steward、a3x_crypt_lost、a3x_dyren_sorry、a3x_rean_cold；计数器 a3x_chase。
export const SCENES = {
  // ───────────────────────── 间幕《十六年》 ─────────────────────────
  a3_01: {
    id: 'a3_01',
    title: '十六年',
    chapter: '间幕 · 十六年',
    art: 'ev_blank',
    loc: '坎诺各地',
    date: '1024年—1040年',
    text: [
      '十六年是这么过去的：头几年你还数日子，后来只数信。信一年比一年薄，写信的人一年比一年少说客套话。',
      { if: 'flag.garrec_king', text: '乌霜领的城墙修起来了。加雷克在大厅里挂上他父亲的军团旗，每年真霜月给你捎一桶黑麦酒，桶底刻着三个字：准日子。' },
      { if: 'flag.garrec_dead', text: '加雷克死在突围北上的路上。乌尔维克带着剩下的人走了五年，走到乌尔维克斯滕才停，人们管那一路叫寒行军。乌霜领如今住着别人。' },
      { if: 'flag.garrec_exile', text: '加雷克去了北边，没死。他隔一两年托人捎一句话，从来不写地址，最后一封只有一行：还没找着准日子。' },
      { if: 'flag.mended', text: '试炼山上的石匠干了十六年。布洛克每年报一回账：十道试炼，修好了五道，剩下的“看石头的脾气”。' },
      { if: 'flag.stair_down', text: '试炼山的石阶是你看着毁的。山脚的比武场长满了草，北要塞的哨兵如今守着一面空崖。' },
      { if: '!flag.mended && !flag.stair_down', text: '试炼山没人动。山腰上的雪一年比一年厚，北要塞的哨兵每年往山上看一眼，记一笔“照旧”。' },
      { if: 'flag.guardian_barry', text: '戴伦是巴里带大的。巴里来信说那孩子长高了，心软，说话还是有点结巴，饭量随他。' },
      { if: 'flag.guardian_crovan', text: '戴伦跟着克洛万长大，学会了看账，也学会了几手戏法。他给你写信从不落款，字倒是一年比一年好看。' },
      { if: 'flag.guardian_marion', text: '戴伦在达梅里斯堡长大，一口月庭腔。他回威克斯议事的时候，男爵们故意听不懂。' },
      { if: 'flag.guardian_barons', text: '戴伦是男爵们轮着带大的，一年换一家。他十五岁那年给每位男爵写了同一封信，信里只有一句：我记得在你家那年吃的是什么。' },
      { if: 'flag.lucan_alva', text: '卢坎跟着他娘长大。十八岁上就有人当面叫他“银龙”，他每回都红着耳朵走开。' },
      { if: 'flag.lucan_garrec', text: '卢坎在舅舅那边长大，学的是军团的规矩，那对精灵耳朵一年到头扣在头盔里。' },
      { if: 'flag.lucan_marion', text: '卢坎在月庭长大。马里昂拿他当半个儿子，宫里的人拿他当一件寄存的礼物。' },
      { if: 'flag.lucan_iacob', text: '卢坎在亚科布身边长大。他给你写过一封信，字写得极好，你从头读到尾，没读出一句是他自己的话。' },
      '1033 年泪落月，天上来了一颗彗星，渡鸦先知会管它叫“神谕之眼”。1038 年，太阳王贾赫从布勒瓦尔城往东边打仗去了。坎诺的坟一年比一年空，没人去数。',
      { if: '!is.longlived && !is.immortal', text: '你的膝盖先老。下雨天上楼，你得扶着墙。镜子里那个人的鬓角白了，你看了半天才认下来。' },
      { if: 'is.longlived && !is.immortal', text: '你没怎么变，变的是认得你的人。帐篷城拆了，当年的书记官回乡了，你走在安本科斯特的街上，没人朝你点头。' },
      { if: 'is.immortal', text: '你这十六年的账上没有添一岁。书记官续登记册的时候，在你年纪那一栏停了笔，抄了上一年的。第二年他又抄了一遍。' },
      '这十六年，你主要在干什么？',
    ],
    choices: [
      {
        text: '去古塔，办一个法师自己查法师的“守望”',
        effects: ['flag years_watch', 'world writ +1', 'rep wise +1'],
        result: '头一年来了四个学生，第二年来了十一个。古塔顶上那间屋子挂了块木牌，写着“先搜我的身”。',
        goto: 'a3_02',
      },
      {
        text: '回本国当差',
        effects: [
          'flag years_court',
          { if: "origin == 'dameria'", then: ['rep moon +2'] },
          { if: "origin == 'lorent'", then: ['rep rose +2'] },
          { if: "origin == 'ebonmarck'", then: ['rep dragon +2'] },
          { if: "origin == 'ibevar'", then: ['rep elders +2'] },
          { if: "origin == 'wex'", then: ['rep wex +2'] },
        ],
        result: '你在{nation}的衙门里坐了十六年。同僚换了一茬，{?is.immortal:新来的那个把你当成了你自己的儿子，客客气气问令尊身体可好。|新来的几个管你叫“老监誓人”，听着跟叫一件家具差不多。}',
        goto: 'a3_02',
      },
      {
        text: '守着那几个孩子：伊迪丝、卢坎、戴伦',
        effects: ['flag years_wards', 'approval barry +1'],
        result: '你一年里八个月在路上，从这家到那家。三个孩子各学会了一件事：见了你先问带了什么。',
        goto: 'a3_02',
      },
      {
        text: '去找少掉的尸首',
        effects: ['flag years_graves', 'world unburied -1', 'flag knows_myrrh'],
        result: '你挖开过二十一座空坟，找回来七具。每回去晚了一步的地方，都有人记得一个身上带没药味的过路人。',
        goto: 'a3_02',
      },
    ],
  },

  a3_02: {
    id: 'a3_02',
    title: '彗星之夜',
    art: 'ev_big_star_in_sky',
    date: '1033年泪落月',
    first: ['codex edith'],
    text: [
      { if: 'flag.years_watch', text: '古塔的院子里摆了三张长桌。学生们端着碗出来看彗星，有两个在争它的尾巴算几度。' },
      { if: 'flag.years_court', text: '宫里伙房的后院挤满了人。厨子把灶熄了，帮厨的、劈柴的、看门的，都端着碗出来看天。' },
      { if: 'flag.years_wards', text: '你在路边扎营。营火边坐着赶车的、卖锅的、两个逃婚的，都端着碗看天。' },
      { if: 'flag.years_graves', text: '坟场边的营地里，挖坟的人蹲在新翻的土堆上，端着碗看天。' },
      '彗星的尾巴拖过半个天，亮得看得清碗里的豆子。伊迪丝是傍晚到的，二十三岁，骑一匹借来的马。她挨着你坐下，看了一会儿天，打了个哈欠。',
      { speaker: '伊迪丝', text: '都歇会儿吧。' },
      '她说得很轻，跟自言自语差不多。三十几只碗一齐磕在桌上，响了一声。没人再端起来。有个人的勺子举在半空，他就那么举着。',
      '过了好一阵，碗才陆陆续续有人端起来。谁也不记得刚才停过。伊迪丝把手缩进了袖子里。',
      { if: 'flag.edith_alarian', speaker: '伊迪丝', text: '我没唱。我连调子都没起。阿拉里安说不唱就不会出事。' },
      { if: 'flag.edith_wise', speaker: '伊迪丝', text: '我得写报告。三份，一份给加里昂大人，一份给玛希尔达夫人，一份存档。我写什么？写我说了“歇会儿”？' },
      { if: 'flag.edith_ravens', speaker: '伊迪丝', text: '我见过今晚。去年就见过。我以为见过了就躲得开。' },
      { if: 'flag.edith_iacob', speaker: '伊迪丝', text: '你别那么看我。我没想让他们干什么。这回没有。' },
      { if: 'flag.edith_none', speaker: '伊迪丝', text: '我不是故意的，我就是累了。你说，我往后是不是连“累”都不能说？' },
      { if: 'is.god', text: '院子里只有你的碗没放下。她看见了。' },
      { if: 'is.god', speaker: '伊迪丝', text: '你没停。你跟我一样，对不对？说什么，别人都给。' },
    ],
    choices: [
      {
        text: '告诉她：你没做错什么，往后开口前先想一想',
        effects: ['flag edith_trusts', 'approval vezina +1'],
        result: '她点点头，把手从袖子里拿出来，端起碗喝了一口。汤凉了，她还是喝完了。',
        goto: 'a3_03',
      },
      {
        text: '告诉她：这件事别让任何人知道',
        effects: ['approval vezina -1'],
        result: '她答应了，答应得太快。往后几年她来信，再没提过一句自己的事。',
        goto: 'a3_03',
      },
      {
        text: '告诉她：这件事得报给瓦洛森',
        tag: '贤者门下',
        if: "faction == 'staff'",
        effects: ['rep wise +1'],
        result: '你当晚就写了报告。她在旁边看你写完，指着一行说：不是“歇会儿”，是“都歇会儿吧”，你漏了三个字。',
        goto: 'a3_03',
      },
    ],
  },

  a3_03: {
    id: 'a3_03',
    title: '信',
    art: 'ev_blank',
    date: '1040年卡斯坦月',
    first: ['quest white_year start', 'companion +liv', 'companion +valeran', 'companion +barry', 'companion +vezina'],
    text: [
      '信是卡斯坦月中旬到的，送信的路上跑坏了两匹马。福尔卡德的字还是那么小，一行挤得跟账本似的。',
      { cls: 'letter', text: '渡鸦山出了事。本月三日，一个刚下葬的人从没填土的坟里坐起来，把守夜的同事吃了。是奈拉特的祭司，同我一年进的科塞顿。驻军说是野狗。野狗不解束腰。你来一趟。先吃块饼再动身。——福尔卡德，七十九，手还稳' },
      '信封里真有一块饼，压扁了，芝麻还在。人是在路上一个一个凑齐的。',
      { if: 'party.liv && !is.longlived && !is.immortal', speaker: '卡斯坦', text: '翅膀根疼。你别笑，你膝盖响了一路，我都听着呢。' },
      { if: 'party.liv && is.longlived && !is.immortal', speaker: '卡斯坦', text: '翅膀根疼。你倒好，十六年一根白头发没长，看着就来气。' },
      { if: 'party.liv && is.immortal', speaker: '卡斯坦', text: '你连个褶子都没添，我翅根都灰了。她说这话的时候没看你的脸。' },
      { if: 'party.valeran && !is.immortal', speaker: '瓦勒兰', text: '三十九了。恕我直言，您也不年轻。' },
      { if: 'party.valeran && is.immortal', text: '瓦勒兰三十九了，鬓角全白。他看了你很久，说了一句“恕我直言”，没往下说。' },
      { if: 'party.vezina', text: '薇齐娜三十七，本子换到了第十一本。她在头一页写上日子，抬头数了数道旁树上的乌鸦。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '九只。要是到了渡鸦山还是九只，我就不记了。' },
      { if: 'party.barry', text: '巴里一点没变，带的乳酪比十六年前多了一倍。' },
      { if: 'party.barry && !is.immortal', speaker: '巴里', text: '对不住，对不住。我想着大家牙口都不比从前了，就挑了软的带。' },
      { if: 'party.barry && is.immortal', speaker: '巴里', text: '他把乳酪往你这边推了推。这滋味我知道一半。往后你慢慢知道另一半。' },
      { if: 'party.valeran && party.barry', text: '头天晚上，瓦勒兰说精灵不老这件事他想了十六年也没想通。巴里给他切了一块乳酪，切得特别厚。' },
      { if: "origin == 'dameria'", text: '动身之前，马里昂把你叫进内室。他三十九了，胡子里夹着白的。门口站着阿雷尔王子，十七岁，靴子是新的，剑也是新的。' },
      { if: "origin == 'dameria'", speaker: '马里昂', text: '他要跟你去边境地。我说不行，他说我当年十九就上了试炼山。这话他到底跟谁学的？' },
    ],
    choices: [
      {
        text: '带上阿雷尔王子',
        tag: '达梅里亚',
        if: "origin == 'dameria' && !flag.arrel_with_you && !flag.a3x_arrel_no",
        once: true,
        effects: ['flag arrel_with_you', 'rep moon +1'],
        result: '阿雷尔把新剑在腰上挂了三回才挂正。马里昂送到城门口，一句话没说，拍了拍他儿子的马。',
      },
      {
        text: '把王子留在月山',
        tag: '达梅里亚',
        if: "origin == 'dameria' && !flag.arrel_with_you && !flag.a3x_arrel_no",
        once: true,
        effects: ['flag a3x_arrel_no', 'gold +60'],
        result: '马里昂松了一口气，当场叫人给你备了两匹好马、一袋路费。楼上传来摔门的声音，摔得很响。',
      },
      {
        text: '把饼分了，当晚就走',
        effects: ['approval barry +1'],
        result: '饼掰成了五块，芝麻掉了一路。你们赶在城门关上之前出了城。',
        goto: 'a3_04',
      },
      {
        text: '先回信问福尔卡德那座坟在哪',
        cost: { gold: 10 },
        effects: ['flag a3x_wrote'],
        result: '回信在路上追上了你：下城北角，第三排，碑还没刻。信背面画了张图，画得比字还小。',
        goto: 'a3_04',
      },
    ],
  },

  // ───────────────────────── 正戏 ─────────────────────────
  a3_04: {
    id: 'a3_04',
    title: '渡鸦山',
    chapter: '第三幕 · 白年',
    art: 'ev_looming_death',
    loc: '科乌里亚 · 渡鸦山',
    date: '1040年卡斯坦月',
    first: ['codex aldresia', 'codex ravenhill', 'codex white_pestilence'],
    text: [
      '渡鸦山是一座有城墙的城，墙外就是达拉万之愚的烂泥。山顶那座老堡做过科尔巴里德诸王的巢，如今黑着。山下是坟场，坟场外头新围了一圈木栅，太阳精灵的驻军在栅门口烧着一堆火，火里扔的是衣裳。',
      '卡斯坦月三日的那座坟还敞着。坑边土堆上插着一把铲子，铲把上系着一条白布。坑底扔着一副束腰，带子是一根一根解开的，扣眼一个没坏。',
      '看坟的是个女孩，十四岁，手里攥着一根绳子，绳上打了十一个结。她叫阿德蕾西娅，守墓人家的女儿，那天晚上就站在这儿。',
      { speaker: '阿德蕾西娅', text: '他从坟里坐起来，先去解身上的束腰。大人，死人解束腰干什么？' },
      '她把绳子收进袖子，跟在你后头。没人叫她跟。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '坟边那棵树上落了四只。要是我没记错，渡鸦山的乌鸦从来不在坟场落脚，嫌晦气。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '你，丫头。往后你是我的掌旗官。旗还没有，先把绳子收好。' },
      { if: 'is.god', text: '驻军的队长看见你，把头盔摘了，又戴上，朝东边看了一眼。东边在打仗，那边有他自己的神。' },
    ],
    choices: [
      {
        text: '去停尸房，看那几道咬伤',
        once: true,
        check: { skill: 'medicine', dc: 14, party: true },
        ok: { text: '咬口四周的肉是白的，不青，也不肿，白得发亮，跟泡久了的面团一样。被咬的人里，精灵只有一个，伤口已经结痂了。', effects: ['flag a3x_bite'] },
        fail: { text: '你凑得太近。一具没盖严的手指头动了一下，你往后一退，撞翻了灯，手背烫起一溜泡。', effects: ['hp -4'] },
      },
      {
        text: '看看这座坟是怎么开、怎么填的',
        once: true,
        check: { skill: 'religion', dc: 14, adv: "faction == 'rites'", mods: [{ if: 'flag.a3x_wrote', n: 2, why: '福尔卡德画的图' }] },
        ok: { text: '坟是照奈拉特的规矩开的：头朝西，束腰勒到第三扣，碑七天后再刻。可填土那一步没人办。那天夜里守夜的被人支走了，支他的人说是驻军叫的。', effects: ['codex corset_burial'] },
        fail: { text: '你看了半天，只看出这坑挖得很规矩。阿德蕾西娅小声说：大人，坑都是这么挖的。' },
      },
      {
        text: '去看坟边那棵老树',
        once: true,
        check: { skill: 'investigation', dc: 15, party: true },
        ok: { text: '离地一人多高的树杈上，树皮磨亮了一块，正好一个人坐的宽度。树下的落叶里有鸦毛，黑的里头夹着几根灰的。有人在这上头蹲了很多年。', effects: ['flag a3x_tree'] },
        fail: { text: '树就是树。你绕着它走了三圈，裤腿上沾满了苍耳。' },
      },
      {
        text: '进隔离的那几排屋子',
        tag: '精灵',
        if: 'is.elf',
        once: true,
        effects: ['hp -3', 'flag a3x_inside'],
        result: '驻军放你进去，因为你不容易染病。屋里躺着二十六个，你一个个数了。出来的时候一块石头砸在你肩上，扔石头的是个人类老太太，她儿子在第三间屋。',
      },
      {
        text: '把亲王的手令给驻军队长看',
        tag: '伊贝瓦尔',
        if: "origin == 'ibevar'",
        once: true,
        effects: ['flag a3x_burn_warned'],
        result: '队长认得月火号的封蜡。他把你拉到火堆后头，压低了嗓子：总督想把整座山烧了，信写好了，就等风向。',
      },
      {
        text: '跟阿德蕾西娅去下城，等天黑',
        goto: 'a3_05',
      },
    ],
  },

  a3_05: {
    id: 'a3_05',
    title: '头一夜',
    art: 'ev_undead_army',
    loc: '渡鸦山 · 山下坟场 · 夜',
    text: [
      '天黑以后坟场里有了动静。先是土响，然后是栅门响。驻军点起火把，两个弓手爬上了停尸房的房顶。',
      '从栅门那边过来的有十一个，走得都很直。束腰勒着，弯不了腰，所以跨矮墙的时候是整个人往前一倒，倒下去再站起来。最前头那个穿着祭司的灰袍，袍子前襟没了。',
      '停尸房的檐下挂着一口钟，绳子垂到半人高。',
      { speaker: '阿德蕾西娅', text: '十一个。昨天是九个。' },
      { if: 'flag.arrel_with_you', text: '阿雷尔王子把新剑拔了出来，盯着那件灰袍，嘴唇发白。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '站得这么直，比军团还齐。老娘最烦齐的。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，别让它们咬着。别的随便。' },
      { if: 'is.god', text: '它们不看你。它们谁也不看，只朝有热气的地方走。你身上的热气，它们闻不出来。' },
    ],
    combat: {
      title: '坟场的头一夜',
      intro: '最前头那件灰袍张开嘴，嘴里没有舌头。',
      noAwe: true,
      enemies: [{ id: 'pestilent_zombie', n: 5, name: '起尸', hpMult: 2.5 }, { id: 'ghoul', name: '吃了祭司的那个', hpMult: 1.5 }],
      allies: [{ id: 'archer', n: 2, name: '太阳精灵驻军' }, { id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
      specials: [
        {
          id: 'bell',
          name: '敲停尸房的钟',
          desc: '把死人从栅门那边引开',
          check: { skill: 'athletics', dc: 14, party: true, adv: 'is.god' },
          success: { text: '钟响了。所有的死人一齐转过身，朝钟那边走了几步，把背亮给了你们。', applyAll: { cond: 'stunned', turns: 1 } },
          fail: { text: '绳子是湿的。你一使劲，人顺着绳子滑了下来，钟只响了半声。', selfDmg: '1d8' },
        },
        {
          id: 'oil',
          name: '把灯油泼在栅门口点着',
          desc: '束腰是浸过油的麻，一点就着',
          check: { skill: 'sleight', dc: 14, party: true },
          success: { text: '火顺着栅门烧过去。束腰沾了火，一个接一个着了。', dmgAll: '2d6', type: 'fire' },
          fail: { text: '油泼了一半在你自己靴子上。', selfDmg: '1d6', type: 'fire' },
        },
      ],
      xp: 500,
      win: { goto: 'a3_06' },
      lose: { effects: ['world unburied +1', 'flag a3x_night_lost', 'heal 2d8'], goto: 'a3_06' },
    },
  },

  a3_06: {
    id: 'a3_06',
    title: '封不封',
    loc: '渡鸦山 · 城门',
    text: [
      { if: 'flag.a3x_night_lost', text: '你是在停尸房的地上醒的。阿德蕾西娅坐在门槛上，膝盖上横着一把驻军的剑。外头的天是红的：驻军烧了半个下城，才把那十一个堵了回去。' },
      { if: '!flag.a3x_night_lost', text: '天亮以后，阿德蕾西娅去数了一遍：起来十一个，躺下十一个。她在绳子上又打了个结。' },
      { if: 'is.god', speaker: '阿德蕾西娅', text: '大人，神用不用数人？' },
      '中午，科乌里亚总督德纳里昂·德纳祖尔带着两百个太阳精灵到了城门口。他一身白，袍子下摆一点泥都没沾，是叫人抬过来的。他看了一眼城墙，就把要说的说了。',
      { speaker: '德纳里昂', text: '这种病我在东边见过。烧一座城，保一个省。今天刮西风，傍晚点火，明早就干净了。' },
      { if: 'is.god', speaker: '德纳里昂', text: '重生的苏雷尔在东边打仗。这地方不归别的神管。' },
      '城门里头挤满了要出城的人。前排有一对守墓的夫妇，女的抱着一卷铺盖。阿德蕾西娅看见他们，把绳子攥紧了。',
    ],
    choices: [
      {
        text: '劝德纳里昂别点火',
        check: {
          skill: 'persuasion', dc: 15,
          mods: [{ if: 'flag.a3x_burn_warned', n: 2, why: '你早知道他要烧' }, { if: 'flag.a3x_inside', n: 2, why: '你数过屋里的人' }],
        },
        ok: { text: '他听你把二十几间屋子里的人一间一间数完，叫人把火把收了。“西风还会再来的。”他说完就上了轿子。', goto: 'a3_06b' },
        fail: { text: '他客客气气听完，点了点头。傍晚风一转，下城的三条街烧了起来，火光照了一夜。', effects: ['world unburied +1'], goto: 'a3_06b' },
      },
      {
        text: '进城门，给死人办一场正经葬礼',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        check: { abil: 'con', dc: 14, save: true },
        ok: { text: '你在城里待了一天一夜，埋了四十一个，束腰都勒到第三扣。出门的时候，栅门口的精灵往你身上泼了三桶醋。你没发烧。', effects: ['world unburied -1'] },
        fail: { text: '四十一个你都埋完了。出城门的时候腿是软的，烧了三天才退。', effects: ['world unburied -1', 'hp -8'] },
      },
      {
        text: '走进城门，把病人治了',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_healed', 'world unburied +1', 'var god_acts +1'],
        result: '你从下城走到上城，见一个治一个。阿德蕾西娅的爹娘是头一批站起来的。到第三天，三个郡的病人抬着门板往渡鸦山赶，栅栏挡不住。你只有两只手。',
        goto: 'a3_06b',
      },
    ],
  },

  a3_06b: {
    id: 'a3_06b',
    title: '门',
    loc: '渡鸦山 · 城门',
    text: [
      '火的事有了着落，门的事还没有。城门里的人在拍门板，拍得很齐。门外是驻军，是你。',
      { if: 'flag.god_healed', text: '城里的病人治好了大半。可城外的路上还有人在往这边来，门板上躺着的，自己拄着棍走着的，一眼望不到头。' },
      '阿德蕾西娅的爹娘在门里。她没开口求你。她在数门缝里看得见几个人。',
      { if: 'party.barry', speaker: '巴里', text: '对不住，我插一句。门里有孩子。我们威克斯有句老话：坟要挖得比恨深。门一关，挖坟的人就关在里头了。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，门一开，这病明年就到洛伦泰内了。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是开门……不，我不说了。我说的每句话都有人记，记的人是我。' },
    ],
    choices: [
      {
        text: '封门，谁也不许出去',
        effects: ['flag quarantine_held', 'world unburied -1', 'approval barry -1', { if: 'flag.god_healed', then: ['approval barry -1'] }],
        result: '{?flag.god_healed:城外赶来的人推着门板往栅栏上撞，你得亲手把他们一个个推回去。|门闩落下去的那一声，全城都听见了。}阿德蕾西娅在门缝前站到天黑，绳子上一个结也没再打。',
        goto: 'a3_07',
      },
      {
        text: '放没发病的人出城',
        effects: ['flag quarantine_open', 'world unburied +2', 'approval barry +1'],
        result: '驻军在门口排了一道队，挨个看舌头、看手心，放出去四百多人。第七天，往南三十里的一个村子挂了白。',
        goto: 'a3_07',
      },
    ],
  },

  a3_07: {
    id: 'a3_07',
    title: '城门口的两队',
    loc: '渡鸦山 · 城门外',
    date: '1040年花始月',
    text: [
      '渡鸦山的钟敲了一夜。天亮以后城门口排了两队：染病的人用门板抬着，染病的精灵自己走着。看热闹的不看门板，都盯着那队精灵。瓦勒兰爵士把手套摘了又戴上。',
      { if: 'flag.quarantine_held', text: '两队人是从隔离的屋子挪往城西的新棚子。门没开，只是换个地方躺。' },
      { if: 'flag.quarantine_open', text: '栅门外又排起了一队出城的，排在最后的那几个开始咳嗽。' },
      { if: 'flag.god_healed', text: '门板比上个月少，看热闹的比上个月多。有人是来看神的，看不着神，就看精灵。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。他们马上要问为什么。您最好赶在他们自己想出答案之前，给一个。' },
      '他话音没落，人群里有人喊了一嗓子：“是精灵带来的！”喊完转身就跑，帽子掉在地上也没捡。',
    ],
    choices: [
      {
        text: '追上去',
        check: { skill: 'athletics', dc: 14 },
        ok: { text: '你撞开两个挑担的，看见他拐进了皮匠街。', effects: ['var a3x_chase +1'], goto: 'a3_07b' },
        fail: { text: '一副门板横过来挡住了路。等门板过去，他已经拐进了皮匠街。', goto: 'a3_07b' },
      },
      {
        text: '飞上屋顶去追',
        tag: '鹰身女妖',
        if: 'is.harpy',
        check: { skill: 'acrobatics', dc: 12 },
        ok: { text: '你从屋脊上往下看，他的秃头顶在人堆里一冒一冒的，往皮匠街去了。', effects: ['var a3x_chase +1'], goto: 'a3_07b' },
        fail: { text: '屋瓦是松的，你踩塌了一溜，连瓦带人落在一家卖醋的门口。他拐进了皮匠街。', effects: ['hp -3'], goto: 'a3_07b' },
      },
      {
        text: '不追，先把人群压住',
        effects: ['flag a3x_rumor'],
        result: '你站到门板前头，把人群往后推了三步。那句话没人再喊，可它已经跑出去了。',
        goto: 'a3_07d',
      },
    ],
  },

  a3_07b: {
    id: 'a3_07b',
    title: '皮匠街',
    loc: '渡鸦山 · 皮匠街',
    text: [
      '皮匠街窄，两边晾着刚刮过的皮子，往下滴灰水，地上滑得站不住人。街上一股石灰和臭肉的味儿，捂着鼻子也挡不住。',
      '他在前头跑，跑得不快，跑一段就回一次头，像是怕你追丢了，又像是怕你追上。街尽头是一道齐肩的矮墙，墙那边冒着蓝烟，是染坊。',
      { if: 'party.liv', speaker: '卡斯坦', text: '要我说就别翻了，我从上头绕过去，揪着他的领子提回来。' },
      { if: 'party.barry', text: '巴里落在后头，一边跑一边跟每个被撞翻的摊子道歉。' },
    ],
    choices: [
      {
        text: '翻墙过去',
        check: { skill: 'acrobatics', dc: 14 },
        ok: { text: '你一撑就过去了，落地的时候正好看见他钻进晾布的院子。', effects: ['var a3x_chase +1'], goto: 'a3_07c' },
        fail: { text: '墙头的瓦松了。你连人带瓦摔进院子，一缸蓝水溅了一身。', effects: ['hp -2'], goto: 'a3_07c' },
      },
      {
        text: '叫队里腿快的从旁边截他',
        check: { skill: 'athletics', dc: 14, party: true },
        ok: { text: '有人从侧门抢到了他前头。他一转身，往晾布的院子里钻了进去。', effects: ['var a3x_chase +1'], goto: 'a3_07c' },
        fail: { text: '侧门是锁着的。等你们绕过去，院子里只剩晾着的布在晃。', goto: 'a3_07c' },
      },
    ],
  },

  a3_07c: {
    id: 'a3_07c',
    title: '染坊',
    loc: '渡鸦山 · 染坊',
    text: [
      '染坊的院子里晾满了布，一排挨着一排，蓝的靛的都有，风一吹全在动。他钻进去就不见了。',
      '布底下露着脚。不止一双：染坊的伙计、来取布的女人、一个蹲着吃饼的孩子。都不吭声，都看着你。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '七双。刚才是六双。多出来那双是他。' },
    ],
    choices: [
      {
        text: '蹲下来，一双一双看布底下的脚',
        check: { skill: 'perception', dc: 14, party: true },
        ok: { text: '有一双靴子上沾着门口那摊醋，鞋跟还在抖。', effects: ['var a3x_chase +1', { if: 'var.a3x_chase >= 2', then: ['flag a3x_caught'], else: ['flag a3x_rumor'] }], goto: 'a3_07d' },
        fail: { text: '脚都差不多，都沾着蓝。你看花了眼。', effects: [{ if: 'var.a3x_chase >= 2', then: ['flag a3x_caught'], else: ['flag a3x_rumor'] }], goto: 'a3_07d' },
      },
      {
        text: '大喝一声，看谁先跑',
        check: { skill: 'intimidation', dc: 14 },
        ok: { text: '一院子人都愣住了，只有一双脚往后挪了半步。', effects: ['var a3x_chase +1', { if: 'var.a3x_chase >= 2', then: ['flag a3x_caught'], else: ['flag a3x_rumor'] }], goto: 'a3_07d' },
        fail: { text: '吃饼的孩子吓哭了，一院子人跟着乱跑，布扯下来七八匹。', effects: [{ if: 'var.a3x_chase >= 2', then: ['flag a3x_caught'], else: ['flag a3x_rumor'] }], goto: 'a3_07d' },
      },
    ],
  },

  a3_07d: {
    id: 'a3_07d',
    title: '车夫',
    loc: '渡鸦山 · 城门外',
    text: [
      { if: 'flag.a3x_caught', text: '你在一口染缸后头揪住了他。是个赶车的，四十来岁，手上全是老茧。他没挣，先问你他闺女怎么样了。他闺女在门板上，第三副。' },
      { if: 'flag.a3x_caught', speaker: '车夫', text: '没人叫我喊。我就是想……总得有个根吧。没个根，它凭什么挑上她。' },
      { if: '!flag.a3x_caught', text: '你没找着他。回到城门口，那句话已经换了好几张嘴：精灵带来的，精灵不得这病，精灵早就知道。到晚上，下城的酒馆里已经有人说得出是哪一个精灵了。' },
      '城门口的人还没散。抬门板的放下门板歇脚，那队精灵站在原地，没人叫他们走，也没人叫他们停。',
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，您现在答不出。那就先别让他们自己答。' },
      { if: 'is.elfblood', text: '有个人从你身边走过，往地上啐了一口。啐完才抬头看你是谁。' },
    ],
    choices: [
      {
        text: '放了车夫，叫他回去守着闺女',
        if: 'flag.a3x_caught',
        effects: ['approval barry +1'],
        result: '他冲你鞠了个躬，倒退着走了。他的帽子还落在皮匠街上。',
        goto: 'a3_08',
      },
      {
        text: '叫车夫当着城门口的人把那句话收回去',
        if: 'flag.a3x_caught',
        effects: ['flag a3x_retracted'],
        result: '他站在门板旁边把话收了回去，声音很小。听见的人不多，听见的那些里有一半不信。',
        goto: 'a3_08',
      },
      {
        text: '在城门上贴一张告示：病因未明，监誓人在查',
        if: '!flag.a3x_caught',
        cost: { gold: 5 },
        effects: ['approval vezina +1'],
        result: '你花五个金冠雇人誊了二十份。第二天早上还剩十一份没叫人揭。',
        goto: 'a3_08',
      },
      {
        text: '什么也不说，去找薇齐娜的师门',
        effects: ['approval valeran -1'],
        result: '你转身走了。瓦勒兰在后头站了一会儿，才跟上来。',
        goto: 'a3_08',
      },
    ],
  },

  a3_08: {
    id: 'a3_08',
    title: '鸦巢',
    art: 'ev_magic_study_and_relax',
    loc: '渡鸦山 · 先知会的塔',
    first: ['flag knows_ravens_watched', 'quest vezina_eye start', 'codex ravenseers', 'codex nichmer_2'],
    text: [
      '渡鸦先知会的塔在半山腰，比山顶的老堡矮一截，窗户全朝着坟场。坟边那棵树上的灰毛，薇齐娜一眼就认出是谁家的。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '外圈的人不长灰毛。长灰毛的都在里头。要是他们在那棵树上蹲过，我得问清楚蹲了多久。' },
      { if: '!party.vezina', text: '你认得那种灰毛。薇齐娜的本子里夹过一根，她说那是内圈的东西，外人碰不得。' },
      '塔门开着，门洞里摆着一碗黑莓，门房说是招待客人的。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '别碰。那是岩高兰，渡鸦人吃了要死。摆在门口，是告诉楼上的人：今天来了外人。' },
      '楼上在吵架，隔着三层楼板都听得见。吵的是要不要留你们的命。',
      { if: 'flag.a3x_tree', text: '你想起树杈上那块磨亮的树皮。蹲在那儿的人，这会儿多半就在楼上。' },
      { if: 'is.god', text: '吵架声停了一下。楼上有人说：“不仁里没有他。”另一个说：“那就更不能留。”' },
    ],
    choices: [
      {
        text: '从正门上楼',
        tag: '鸦信',
        if: 'flag.ravens_trust',
        result: '门房看了你一眼，把那碗岩高兰端走了。',
        goto: 'a3_08b',
      },
      {
        text: '摸上楼去，先听他们吵什么',
        check: { skill: 'stealth', dc: 15, party: true, mods: [{ if: 'party.vezina', n: 2, why: '薇齐娜认得哪级楼梯会响' }] },
        ok: { text: '第七级楼梯会响，你们跨了过去，在门外听了一刻钟才敲门。', goto: 'a3_08b' },
        fail: {
          text: '第七级楼梯响了。门开了，出来三个人，有两个的眼珠子是灰的。',
          combat: {
            title: '鸦巢的楼梯',
            intro: '灰眼珠子的那个先笑了：“这一下我昨晚就看过了。”',
            enemies: [{ id: 'wereraven_seer', n: 2 }, { id: 'court_mage', name: '外圈先知' }],
            allies: [{ id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
            specials: [
              {
                id: 'basin',
                name: '打翻水盆',
                desc: '他们靠水盆预读',
                check: { skill: 'arcana', dc: 15, party: true },
                success: { text: '铜盆翻了，黑水泼了一地。灰眼珠子的那个愣了一下：他看不见下一下了。', applyAll: { cond: 'dazed', turns: 2 } },
                fail: { text: '你的手刚碰到盆沿，手背上就挨了一啄。', selfDmg: '1d6' },
              },
              {
                id: 'crowberry',
                name: '把门口那碗岩高兰泼过去',
                desc: '渡鸦人碰不得这东西',
                check: { skill: 'sleight', dc: 14 },
                success: { text: '黑莓砸了一身。两个渡鸦人往后退，拿袖子拼命擦脸。', applyAll: { cond: 'weakened', turns: 2 } },
                fail: { text: '莓子滚了一地，倒是你自己踩上去滑了一跤。', selfDmg: '1d4' },
              },
            ],
            xp: 500,
            win: { effects: ['flag a3x_fought'], goto: 'a3_08b' },
            lose: { effects: ['flag a3x_fought', 'flag a3x_bandaged', 'heal 3d8'], goto: 'a3_08b' },
          },
        },
      },
      {
        text: '敲门，报上监誓人的名号',
        effects: ['approval valeran +1'],
        result: '门房上楼去报。吵架声停了一会儿，又更响了。半个时辰以后，你们被请了上去。',
        goto: 'a3_08b',
      },
    ],
  },

  a3_08b: {
    id: 'a3_08b',
    title: '内圈',
    loc: '渡鸦山 · 先知会的塔',
    first: ['codex unkind'],
    text: [
      '内圈的屋子没有窗。四面墙写满了字，两种笔迹，一种从左往右写，一种从右往左写，在墙当中撞上了。屋子正中摆着一只铜水盆，水是黑的。',
      { if: 'flag.a3x_bandaged', text: '你是在这间屋里醒的。一个老头在给你胳膊缠绷带，缠得很紧，缠完拍了两下：“那一派输了，我这一派赢了。你们暂时死不了。”' },
      { if: 'flag.a3x_fought && !flag.a3x_bandaged', text: '楼梯上那三个被人架下去了。屋里的老头手边放着一卷绷带，是给你们准备的。' },
      '德基南长老坐在水盆边上。他很老，左眼是一颗磨光的灰石子，一动不动。他等你们站定才开口，听着像在念别人的遗嘱。',
      { speaker: '德基南', text: '白年我们是十九年前冬天看见的。也看见了没有白年的那些年头。你要是见过后面那些，你也会坐着不动。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '师父。树上那个人，是您派的？' },
      { if: 'party.vezina', speaker: '德基南', text: '派了十九年，换过四个人。头一个蹲树的，是你进门那年死的。' },
      { if: 'is.god', speaker: '德基南', text: '不仁里没有你。我翻了三遍。你站在哪儿，哪儿的预言就是一块白的。屋里一半人想躲着你，一半人想杀你。后一半知道杀不了，更生气。' },
    ],
    choices: [
      {
        text: '看墙上那两种字',
        once: true,
        check: { skill: 'arcana', dc: 15, party: true },
        ok: { text: '从左往右的那一派说：亵渎者没死，趁早去杀。从右往左的那一派说：凡是瘟疫早早掐灭的年头，后面都接着人类诸侯把精灵赶下海。两派都写到了今年，写到了你们进门。', effects: ['xp 150'] },
        fail: { text: '字你都认得，句子也读得通，就是读不出哪一句要紧。薇齐娜说，这正是“不仁”的意思。' },
      },
      {
        text: '看德基南：他自己信不信这一套',
        if: 'flag.ravens_trust || flag.a3x_fought',
        check: { skill: 'insight', dc: 16, party: true },
        ok: { text: '他说话的时候一直在摸那颗石头眼。他不知道当年那一票投得对不对，十九年没睡过一个整觉。', effects: ['flag a3x_read_dekinan'], goto: 'a3_09' },
        fail: { text: '他的脸跟那颗石头眼一样，什么也看不出来。', goto: 'a3_09' },
      },
      {
        text: '看德基南：他自己信不信这一套',
        if: '!flag.ravens_trust && !flag.a3x_fought',
        check: { skill: 'insight', dc: 16, party: true },
        ok: { text: '他说话的时候一直在摸那颗石头眼。他不知道当年那一票投得对不对，十九年没睡过一个整觉。', effects: ['flag a3x_read_dekinan'], goto: 'a3_09' },
        fail: {
          text: '你看他看得太久了。他身后一个灰眼珠子的年轻人说：“长老，他在算您。”屋里的人一齐站了起来。',
          combat: {
            title: '内圈',
            intro: '德基南没站起来。他把手按在水盆沿上，看着。',
            enemies: [{ id: 'wereraven_seer', n: 2 }, { id: 'court_mage', name: '外圈先知' }],
            allies: [{ id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
            specials: [
              {
                id: 'basin',
                name: '打翻水盆',
                desc: '他们靠水盆预读',
                check: { skill: 'arcana', dc: 15, party: true },
                success: { text: '铜盆翻了，黑水泼了德基南一身。灰眼珠子的那两个愣了一下：他们看不见下一下了。', applyAll: { cond: 'dazed', turns: 2 } },
                fail: { text: '你的手刚碰到盆沿，手背上就挨了一啄。', selfDmg: '1d6' },
              },
            ],
            xp: 500,
            win: { effects: ['flag a3x_fought'], goto: 'a3_09' },
            lose: { effects: ['flag a3x_fought', 'flag a3x_bandaged', 'heal 3d8'], goto: 'a3_09' },
          },
        },
      },
      {
        text: '不看了，跟德基南上顶层',
        goto: 'a3_09',
      },
    ],
  },

  a3_09: {
    id: 'a3_09',
    title: '鸦眼',
    art: 'ev_elven_eye',
    loc: '渡鸦山 · 鸦巢顶层',
    text: [
      '顶层是个鸟笼似的屋子，四面是木栅，风从栅缝里灌进来。栅上站满了乌鸦。薇齐娜这回没数。',
      '内圈吵出了一个结果：薇齐娜要是肯受鸦眼，她在内圈就有一票，这一票够压住德基南那一派。屋里坐着个老妇人，一只眼是好的，另一只是空的，她在等薇齐娜点头。',
      { speaker: '德基南', text: '尼奇默当年也站在这儿，也是三十几岁。他要一只鸦眼，我没给。后来他去了卡斯塔诺。' },
      { if: 'flag.a3x_read_dekinan', text: '他说这话的时候，又去摸那颗石头眼。' },
      { if: 'flag.knot_ravens', speaker: '德基南', text: '山上那个结，我们的人解到只剩最后一股。石头缺了一角，缺的那一角不在山上。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是我戴上，我就会看见东西。看见了，我就再也不能说“要是”了。' },
      { if: '!party.vezina', text: '薇齐娜是自己从楼下上来的。她把第十一本本子搁在栅栏边上，没回头看你。' },
      '老妇人把手伸出来。手心里是一枚乌鸦的喙，磨得很尖。',
    ],
    choices: [
      {
        text: '对薇齐娜点头：戴上它',
        effects: ['flag vezina_eye', 'flag ravens_trust', 'flag cure_early', 'approval vezina +2', 'quest vezina_eye done'],
        result: '她自己把头凑了过去。满屋的乌鸦一齐叫了一声。等她再抬头，左眼上缠着布，右眼看着你，看了很久：“坎雷克的实验室在达拉万之愚边上。他们早就知道。现在我也知道了。”',
        goto: 'a3_10',
      },
      {
        text: '拦住她',
        effects: ['flag vezina_stopped', 'approval vezina -3', 'quest vezina_eye done'],
        result: '你握住她的手腕，她没挣。老妇人把喙收了回去，德基南那一派有人笑出了声。薇齐娜一路下楼没跟你说一个字，走到塔门口，一脚踢翻了那碗岩高兰。',
        goto: 'a3_10',
      },
      {
        text: '写信给各国：先知会看了十九年，一个字没说',
        effects: ['flag vezina_left', 'flag blame_ravens', 'world unburied +2', 'companion -vezina', 'quest vezina_eye fail'],
        result: '信当晚发出去，十一封。第三天驻军围了塔。薇齐娜跟她师父一起被带走，经过你身边的时候，把第十一本本子塞进你手里，走了。',
        goto: 'a3_10',
      },
    ],
  },

  a3_10: {
    id: 'a3_10',
    title: '海路',
    art: 'ev_far_and_wide',
    loc: '迪文哈尔海 · 去布拉桑的船上',
    date: '1040年银现月',
    first: ['quest white_year stage 2'],
    text: [
      '科乌里亚归太阳王管。外头的兵要进来，得有他的印。贾赫两年前往东边打仗去了，印留在布勒瓦尔城。德纳里昂把这话说了三遍，一遍比一遍慢。',
      '你们在海边雇了一条运橄榄油的船，走海路去布拉桑，再从布拉桑上岸往南。船老大是布勒瓦尔人，每天早上先喝一碗又黑又苦的咖啡，喝完才肯开口。',
      { if: 'party.liv', speaker: '卡斯坦', text: '翅膀在船上派不上用场。往哪飞？飞出去还得飞回来。' },
      { if: 'party.liv', text: '她吐了。吐完去找船老大要酒，要来的是一碗咖啡。' },
      { if: 'party.liv && party.valeran', text: '第二天，卡斯坦和瓦勒兰为凯伦·长枪算不算叛徒吵了一下午。瓦勒兰说凯伦守的是骑士的规矩，卡斯坦说凯伦砸的是她爹的饭碗。吵到后来两个人都吐了，各吐一边。' },
      { if: 'party.barry', speaker: '巴里', text: '我带了姜糖。对不住，只带了一包，你们分着吃。' },
      { if: "is.sailor || subrace == 'sea_elf'", text: '船一出港你就站稳了。你在甲板上走来走去，别人扶着栏杆看你。' },
    ],
    choices: [
      {
        text: '站在甲板上硬扛',
        check: { abil: 'con', dc: 13, save: true, adv: "is.sailor || subrace == 'sea_elf'" },
        ok: { text: '你扶着桅杆站了两天，第三天咽得下一块饼了。', goto: 'a3_10b' },
        fail: { text: '你吐了两天。瓦勒兰每回给你端水，都先说一句恕我直言。', effects: ['hp -4'], goto: 'a3_10b' },
      },
      {
        text: '花钱买船老大的偏方',
        cost: { gold: 15 },
        result: '偏方是一撮黑渣，泡在咖啡里喝。喝下去舌头麻了半天，胃倒是安生了。',
        goto: 'a3_10b',
      },
    ],
  },

  a3_10b: {
    id: 'a3_10b',
    title: '白旗船',
    loc: '迪文哈尔海',
    text: [
      '第五天，航道上漂着一条船，桅杆上挂着白旗。帆没收，舵没人掌，船身慢慢打着转。船老大把咖啡碗放下了。',
      { speaker: '船老大', text: '挂白的。不靠。靠了要烧船，烧的是我的船。' },
      '那条船离你们不到一箭地。甲板上躺着人，有一个还在动，在往船舷那边爬。',
      { if: "is.sailor || subrace == 'sea_elf'", text: '你看得出来：那条船是自己抛的锚，锚链放到了底。船上的人没打算去哪，是在等。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是玛希尔达夫人在，她会要一块新鲜的。新鲜的只有那条船上有。' },
      { if: 'party.barry', speaker: '巴里', text: '那个人还在爬。对不住，我就是说一声。' },
    ],
    choices: [
      {
        text: '放小艇过去，上船取样',
        check: {
          skill: 'medicine', dc: 15, party: true,
          adv: "is.sailor || subrace == 'sea_elf'",
          mods: [{ if: 'flag.a3x_bite', n: 2, why: '在渡鸦山看过咬伤' }],
        },
        ok: { text: '你在底舱找到一个刚咽气的，咬口还新，白得发亮。你拿船上的酒洗了刀，切下一块封进罐子。你下船的时候，甲板上那个人不爬了。', effects: ['flag plague_samples'], goto: 'a3_11' },
        fail: { text: '底舱的梯子断了，你摔下去，正摔在一具没死透的身上。它咬住了你的靴子。靴子没了，脚踝挂了彩，样本你照样取到了。', effects: ['hp -8', 'flag plague_samples'], goto: 'a3_11' },
      },
      {
        text: '叫船老大绕开',
        effects: ['approval barry -1'],
        result: '船老大绕了一个大弯。你站在船尾看着，那个人爬到了船舷，就不动了。',
        goto: 'a3_11',
      },
    ],
  },

  a3_11: {
    id: 'a3_11',
    title: '布勒瓦尔城',
    art: 'ev_surakes_sun_garden',
    loc: '布勒瓦尔 · 布勒瓦尔城',
    date: '1040年银现月',
    first: ['codex bulwar_city', 'codex sun_cult', 'codex jaher'],
    shop: {
      name: '巴扎',
      blurb: '香料、弯刀、刻着太阳的护符，一样一样摆在地毯上。摊主先请你喝咖啡，再谈价。',
      stock: ['sun_cult_amulet', 'scroll_fireball', 'scroll_dispel', 'scimitar', 'breastplate', 'greater_healing_potion', 'superior_healing_potion', 'damestear_dust'],
      markup: 1.2,
    },
    text: [
      '布勒瓦尔城的墙是黄土夯的，墙里头全是园子。园子分八瓣，当中一口方池，水面上落着花。神殿的窗是红玻璃，太阳一照，地上一片红。神殿里还摆着秤，收钱，也放钱。',
      '街上的人管贾赫叫重生的苏雷尔，提他名字之前先朝东边点一下头。他们念“苏拉克尔”，卖饼的听见你们念“苏雷尔”，纠正了两回。在这里撒谎是对神不敬，愁眉苦脸也是：你在街上叹口气，就有邻居过来请你喝咖啡。',
      '王妃“机敏的”伊谢莉丝替丈夫掌印。宫里传话说，三天后见你。',
      { if: 'party.liv', text: '卡斯坦在王宫西边的兽苑前站住了，不走了。笼子里关着锡亚丹来的鹰身女妖，翅膀上的羽毛剪过，一只只缩在栖木上。' },
      { if: '!party.liv', text: '王宫西边的兽苑里关着锡亚丹来的鹰身女妖俘虏，羽毛剪过，一只只缩在栖木上。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '这是南边山里的姐妹。屠兽者杀剩下的，又叫太阳王抓了。我要把她们弄出来。别跟我讲道理。' },
      { if: 'party.barry', speaker: '巴里', text: '这儿的乳酪有蓝纹，说是从前有个放羊的追鹰身女妖，把午饭忘在山洞里了。对不住，卡斯坦，我不是那个意思。' },
      { if: 'is.elf', text: '太阳精灵管你叫“留在冷地方的亲戚”。他们说得很客气，客气得你听得出来，他们觉得冷地方配不上你。' },
      { if: "race == 'dwarf'", text: '巴扎上有个黄铜矮人卖秤。他看了一眼你的手，报的是本家价。' },
      { if: 'is.god', text: '城里来了第二个神这件事，比你先进了王宫。卖饼的不再纠正你了，他连钱都不肯收。' },
    ],
    choices: [
      {
        text: '赎下笼子里的鹰身女妖',
        if: '!flag.harpies_freed && !flag.a3x_left_cage',
        once: true,
        cost: { gold: 150 },
        effects: ['flag harpies_freed', 'approval liv +3'],
        result: '兽苑的管事数钱数了三遍。笼门开的时候，有一只没飞，先过来闻了闻卡斯坦的翅膀根。',
      },
      {
        text: '夜里去撬笼门',
        if: '!flag.harpies_freed && !flag.a3x_left_cage',
        once: true,
        check: { skill: 'stealth', dc: 16, party: true },
        ok: { text: '你撬开了四道锁。她们一声没叫，一只跟着一只从墙头飞走了。天亮后兽苑的管事在空笼子前站了很久，回去报的是“夜里起风”。', effects: ['flag harpies_freed', 'approval liv +3'] },
        fail: { text: '第三道锁响了。守夜的赶来时笼子已经空了，你们还趴在墙头上。没人看清脸，可宫里的卫兵多了一倍。', effects: ['flag harpies_freed', 'approval liv +3', 'flag a3x_alarm'] },
      },
      {
        text: '笼子的事不管',
        if: '!flag.harpies_freed && !flag.a3x_left_cage',
        once: true,
        effects: ['flag a3x_left_cage', 'approval liv -2'],
        result: '卡斯坦在笼子前又站了一会儿。回来以后一晚上没喝酒，这是她头一回不喝。',
      },
      {
        text: '去神殿的钱庄把金冠换成汇票',
        once: true,
        cost: { gold: 20 },
        effects: ['flag a3x_bill'],
        result: '钱庄的祭司在汇票上盖了一个太阳，收了二十个金冠的手续费。他说在布勒瓦尔，欠神殿的钱比欠王的钱要紧。',
      },
      {
        text: '去找那个在试炼山上活下来的太阳精灵老兵',
        once: true,
        check: { skill: 'history', dc: 14 },
        ok: { text: '他少了三根手指，在园子里剪葡萄。他说贾赫当年在山脚下讲过一句：没有人往山上逃，往山上去的都是去办事的。他答应替你在宫里说一句话。', effects: ['flag a3x_veteran'] },
        fail: { text: '他把你当成了来收葡萄税的，剪子没停，一句话也没跟你说。' },
      },
      {
        text: '去找拉娜哈莉留在城里的管家',
        tag: '伊贝瓦尔',
        if: "origin == 'ibevar'",
        once: true,
        effects: ['flag a3x_steward'],
        result: '管家是月火号上的老水手，听你报出船名，眼圈红了。他答应替你往宫里递话，临走托你捎一句回瓦多塞德：她问她父亲的行李开了没有。',
      },
      {
        text: '兽苑的看守要把你登记进笼子',
        tag: '鹰身女妖',
        if: 'is.harpy',
        once: true,
        check: { skill: 'intimidation', dc: 14, alt: ['persuasion'], mods: [{ if: 'item.witness_seal >= 1', n: 2, why: '监誓印' }] },
        ok: { text: '你把监誓印拍在他的登记簿上。他放下笔，改写了一张“过路的客人”。', effects: ['approval liv +1'] },
        fail: { text: '他还是把你登记了，登在“会说话的”那一栏。你掏了十个金冠，他才肯划掉。', effects: ['gold -10'] },
      },
      {
        text: '在园子里睡一觉',
        once: true,
        effects: ['rest long'],
        result: '园子里的夜是凉的。池子里的青蛙叫了一夜，跟渡鸦山的钟一个调。',
      },
      {
        text: '进宫去见伊谢莉丝',
        goto: 'a3_12',
      },
    ],
  },

  a3_12: {
    id: 'a3_12',
    title: '太阳王的印',
    art: 'ev_sun_cult_debate',
    loc: '布勒瓦尔城 · 王宫',
    text: [
      '伊谢莉丝在一间凉厅里见你。地上铺着蓝砖，墙上挂着一面金太阳，太阳底下是一把空椅子，她坐在椅子旁边的矮凳上。手边一杯咖啡，一封没封口的信。',
      { if: '!is.god', speaker: '伊谢莉丝', text: '坎诺的兵可以进科乌里亚。统兵的得是太阳精灵。我已经往东边去了信，回信要走半年。这半年里，你们的兵听德纳里昂的。' },
      { if: 'is.god', text: '她只见你这一面，开门见山。' },
      { if: 'is.god', speaker: '伊谢莉丝', text: '城里管我丈夫叫重生的苏雷尔。现在又来了一个。两个太阳，田要晒死的。兵的事照旧：统兵的得是太阳精灵。' },
      '她说完，把另一杯咖啡推到你面前。在这里谈事，先喝咖啡，喝完才算开始。',
      { if: 'flag.knows_ravens_watched && !flag.vezina_left', text: '信底下还压着一样东西，她抽出来摆在桌上：德纳里昂的报告，说渡鸦山那座塔里的人看了十九年。' },
      { if: 'flag.knows_ravens_watched && !flag.vezina_left', speaker: '伊谢莉丝', text: '把那座塔交给总督府，统兵的事我就不提了。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，咱们的兵听一个精灵的，这话我回去没法写。' },
      { if: 'party.barry', speaker: '巴里', text: '咖啡挺好，就是苦。对不住，我能要块糖吗？' },
    ],
    choices: [
      {
        text: '跟她谈：两家各出一位统领',
        check: {
          skill: 'persuasion', dc: 17,
          adv: 'flag.a3x_steward',
          mods: [
            { if: 'flag.a3x_veteran', n: 2, why: '老兵替你说过话' },
            { if: 'flag.a3x_bill', n: 1, why: '神殿的汇票' },
            { if: 'flag.a3x_alarm', n: -2, why: '兽苑的事' },
          ],
        },
        ok: { text: '她把信展开，在末尾添了一行：坎诺来的兵，由坎诺人和太阳精灵各领一半。她写字很快，写完吹了吹墨。', effects: ['flag sun_terms', 'world communion +1'], goto: 'a3_13' },
        fail: { text: '她听完，笑了笑，那一行没写。“回信要走半年，”她说，“你可以等。”', goto: 'a3_12b' },
      },
      {
        text: '照她的条件接下',
        effects: ['flag sun_terms', 'world communion +1', 'rep escann -1', 'approval valeran -1'],
        result: '你在信上按了监誓印。瓦勒兰在门外等你，看见印泥还没干，把头扭开了。',
        goto: 'a3_13',
      },
      {
        text: '不接',
        effects: ['flag sun_refused'],
        result: '{?is.god:她客客气气请你在日落前出城，派了两队卫兵“送”你。|她没生气，叫人撤了咖啡，送你到门口：“德纳里昂的人会记得你的脸。他们记性很好。”}',
        goto: 'a3_13',
      },
      {
        text: '把渡鸦山那座塔交给总督府',
        if: 'flag.knows_ravens_watched && !flag.vezina_left',
        effects: ['flag vezina_left', 'flag blame_ravens', 'world unburied +2', 'companion -vezina', 'quest vezina_eye fail', 'flag sun_terms', 'world communion +1'],
        result: '{?flag.vezina_eye:薇齐娜是提前一天走的。那只鸦眼大概早看见了今天。她在你枕边留了第十一本本子，上面压着一枚乌鸦喙。|一个月后，德纳里昂的人围了那座塔。薇齐娜跟着师门一起走了，走之前把第十一本本子塞给你，没说话。}',
        goto: 'a3_13',
      },
      {
        text: '认下“苏雷尔的使者”这个名头',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_herald', 'flag sun_terms', 'var god_acts +1', 'rep moon -2', 'rep rose -2', 'rep elders -1'],
        result: '她叫人拿来一块白布，上面绣着一颗小太阳，挂在大太阳底下。当天下午，神殿的石匠就把这件事刻上了墙。坎诺那边听到的是：他们的神给太阳王当了差。',
        goto: 'a3_13',
      },
    ],
  },

  a3_12b: {
    id: 'a3_12b',
    title: '半年',
    loc: '布勒瓦尔城 · 王宫',
    text: [
      '伊谢莉丝把信又折了起来，用指甲压了压折痕。凉厅外头，日头往西挪了一截，蓝砖上那片红光爬到了你的靴子边。',
      '她不急。回信要走半年，等的人不是她。科乌里亚那边，德纳里昂的驻军每天往渡鸦山的栅栏里多扔一车衣裳。',
      { speaker: '伊谢莉丝', text: '我的条件还在桌上。你接，兵明天就能动身。你不接，也没人拦你回家。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这时候接，就是低头。不接，就是让渡鸦山再等半年。两样我都写得出来，都不好看。' },
      { if: 'is.god', text: '门口的卫兵换了一班，新来的那几个一直盯着你看，有一个在悄悄掰手指，算两个太阳的事。' },
    ],
    choices: [
      {
        text: '接下她的条件',
        effects: ['flag sun_terms', 'world communion +1', 'rep escann -1', 'approval valeran -1'],
        result: '你按了印。她把信封好，交给门外等着的信差，信差当场就上了骆驼。',
        goto: 'a3_13',
      },
      {
        text: '不接，回坎诺去',
        effects: ['flag sun_refused'],
        result: '{?is.god:她请你在日落前出城。卫兵送你到城门口，一路没人说话。|她把咖啡撤了。你走到门口的时候，她已经在写下一封信了。}',
        goto: 'a3_13',
      },
    ],
  },

  a3_13: {
    id: 'a3_13',
    title: '大墓地第三层',
    art: 'ev_cave',
    loc: '边境地 · 科塞顿 · 大墓地',
    date: '1040年哈兰娜月',
    first: ['quest sixteen_graves stage 4', 'codex necropolis', 'codex folcard'],
    text: [
      '从布勒瓦尔回来，路上走了一个多月。科塞顿的大墓地是奈拉特在坎诺最大的庙，修在米尔科里人的老坟上，往下一共七层。每层的壁龛里都站着死人，束着腰，脸朝外，笔直。',
      '福尔卡德七十九了，还是自己下楼。他走在头里，提一盏油灯，到第三层停住了。',
      '第三层的死人把头转过来了。三十几个壁龛，三十几张脸，都朝着楼梯口。有一个已经迈出了一只脚，束腰勒着，迈得笔直。',
      { speaker: '福尔卡德', text: '别烧。每一个都有名字，我都数过。你们先把它们按回去，按回去我再挨个念。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，对不住。第二排那位我认得，他给我修过车轴。我下不去手，我给你们照亮。' },
      { if: 'is.martial', text: '楼梯口只有一人宽。你守在这儿，它们一次只能上来两个。' },
      { if: 'is.halfling', text: '楼梯边上有一道矮门，是当年半身人石匠修的，只有你钻得进去。' },
      { if: 'is.god', text: '福尔卡德借着灯光看了你一眼。“你下来干什么，”他说，“你又不用量。”' },
    ],
    choices: [
      {
        text: '下去，把它们按回去',
        combat: {
          title: '大墓地第三层',
          intro: '迈出脚的那一具把另一只脚也迈了出来。',
          noAwe: true,
          enemies: [{ id: 'corseted_dead', n: 3 }, { id: 'wight', name: '束了腰的老祭司' }],
          allies: [{ id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
          specials: [
            {
              id: 'lamp',
              name: '踢翻油灯',
              desc: '束腰浸过油，一点就着；福尔卡德会拦',
              success: { text: '灯油泼开，火顺着束腰往上爬。福尔卡德喊了一声“别”，喊晚了。', dmgAll: '3d6', type: 'fire', effects: ['rep wex -1'] },
            },
            {
              id: 'cut',
              name: '割断束腰',
              desc: '束腰一断，里头就撑不住了',
              check: { skill: 'sleight', dc: 14, alt: ['athletics'], party: true },
              success: { text: '带子一断，离你最近的那具散成了一地骨头和布，旁边几具跟着歪了一歪。', dmgAll: '2d8', type: 'slashing' },
              fail: { text: '束腰比你想的结实。刀卡在扣眼里，那一具顺手掐住了你的手腕。', selfDmg: '1d8' },
            },
          ],
          xp: 550,
          win: { goto: 'a3_13b' },
          lose: { effects: ['world unburied +1', 'flag a3x_crypt_lost', 'heal 2d8'], goto: 'a3_13b' },
        },
      },
      {
        text: '守住楼梯口，一次只放两个上来',
        tag: '武人',
        if: 'is.martial',
        combat: {
          title: '大墓地第三层 · 楼梯口',
          intro: '楼梯口只容一个人。它们排着队上来，束腰勒着，排得很齐。',
          noAwe: true,
          enemies: [{ id: 'corseted_dead', n: 2 }, { id: 'wight', name: '束了腰的老祭司' }],
          allies: [{ id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
          specials: [
            {
              id: 'cut',
              name: '割断束腰',
              desc: '束腰一断，里头就撑不住了',
              check: { skill: 'sleight', dc: 14, alt: ['athletics'], party: true },
              success: { text: '带子一断，打头的那具散成了一地骨头和布，后头的绊了一跤。', dmgAll: '2d8', type: 'slashing' },
              fail: { text: '刀卡在扣眼里，那一具顺手掐住了你的手腕。', selfDmg: '1d8' },
            },
          ],
          xp: 550,
          win: { goto: 'a3_13b' },
          lose: { effects: ['world unburied +1', 'flag a3x_crypt_lost', 'heal 2d8'], goto: 'a3_13b' },
        },
      },
      {
        text: '钻那道矮门，绕到它们背后',
        tag: '半身人',
        if: 'is.halfling',
        combat: {
          title: '大墓地第三层 · 矮门',
          intro: '你从它们背后钻出来的时候，它们的脸还朝着楼梯口。',
          noAwe: true,
          enemies: [{ id: 'corseted_dead', n: 3, hpMult: 0.75 }, { id: 'wight', name: '束了腰的老祭司', hpMult: 0.75 }],
          allies: [{ id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
          specials: [
            {
              id: 'cut',
              name: '从背后割断束腰',
              desc: '它们转身慢',
              check: { skill: 'sleight', dc: 12, party: true },
              success: { text: '你从背后挑断了两根带子，两具一起塌了下去。', dmgAll: '2d10', type: 'slashing' },
              fail: { text: '它们转身比你想的快。', selfDmg: '1d8' },
            },
          ],
          xp: 550,
          win: { goto: 'a3_13b' },
          lose: { effects: ['world unburied +1', 'flag a3x_crypt_lost', 'heal 2d8'], goto: 'a3_13b' },
        },
      },
    ],
  },

  a3_13b: {
    id: 'a3_13b',
    title: '念名字',
    loc: '科塞顿 · 大墓地',
    text: [
      { if: '!flag.a3x_crypt_lost', text: '第三层安静了。福尔卡德让人把下面四层的门都封上，封条是他亲手贴的，一层贴了三道。' },
      { if: 'flag.a3x_crypt_lost', text: '下面三层丢了。你们退到第二层，福尔卡德守在楼梯口没上来，叫人从上头往下递砖。到天亮，那道门砌死了，门后头一直有人在走。' },
      '福尔卡德坐在台阶上喘了一会儿，从怀里掏出一本账，翻到第三层那几页。账页边上全是手指头印。',
      { speaker: '福尔卡德', text: '三十四个。我得把名字念一遍，念完了才算按回去。孩子，你要是不急着走，就帮我举着灯。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '念吧。我爹那边要是也有人肯念，我也想听听都有谁。' },
    ],
    choices: [
      {
        text: '举着灯，陪他念完',
        effects: ['rest short', 'approval barry +1'],
        result: '念到第二十一个，福尔卡德停下来，说这人是他表舅。念到第三十四个，天亮了。',
        goto: 'a3_14',
      },
      {
        text: '把灯交给阿德蕾西娅，连夜赶去威克斯堡',
        effects: ['approval liv +1'],
        result: '你们走的时候，身后还在念。阿德蕾西娅举着灯，一个名字也没念错。她后来骑马追上来的时候，在绳子上多打了三十四个结。',
        goto: 'a3_14',
      },
    ],
  },

  a3_14: {
    id: 'a3_14',
    title: '戴伦',
    loc: '威克斯丘陵 · 威克斯堡 · 议事厅',
    first: ['codex dyren'],
    text: [
      '威克斯堡的议事厅里坐满了男爵，没一个脱斗篷。长桌上摆着一张羊皮纸，写好了，没盖印。戴伦·里奥纳德坐在桌子头上，二十七岁，比你记得的高出两个头。',
      { if: 'flag.guardian_barry', text: '他拿笔的手在抖。羊皮纸是男爵们写的，他签了三回，每回只签了半个名字。' },
      { if: 'flag.guardian_crovan', text: '羊皮纸是他自己写的。条文很漂亮，每一条后面都附了理由，理由也漂亮。克洛万教出来的字，一笔不多。' },
      { if: 'flag.guardian_marion', text: '他满口月庭腔，开口前先清嗓子。男爵们在底下交头接耳。他想拿这道令换他们一句服气。' },
      { if: 'flag.guardian_barons', text: '他看谁都只看一眼。桌上的酒他一口没碰，喝的是自己腰上那只壶里的水。' },
      '令上只有一句：精灵逐出威克斯，限期一个月。',
      { if: "origin == 'wex'", speaker: '戴伦', text: '你当年在科塞顿问我要不要马。我现在有四百匹，都在拉尸首。' },
      { if: 'is.immortal', text: '他一眼就认出了你，因为你同他八岁那年看见的一模一样。' },
      { if: 'is.immortal', speaker: '戴伦', text: '我这些年一直在想，那天给我发马的，到底是个什么。' },
      { if: 'party.barry', text: '巴里提着一篮子饼，是给“我家那孩子”带的。他在门口站住，没往里走。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这道令洛伦特也有人想写，只是没人敢先写。' },
    ],
    choices: [
      {
        text: '劝戴伦先别盖印，同你单独谈',
        check: {
          skill: 'persuasion', dc: 16,
          mods: [
            { if: 'flag.guardian_barry', n: 3, why: '他是巴里带大的' },
            { if: 'flag.elrac_debt_paid', n: 2, why: '你讨回过屠夫那笔债' },
            { if: 'flag.years_wards', n: 2, why: '这些年你守着他' },
            { if: "origin == 'wex'", n: 2, why: '你是威克斯人' },
          ],
        },
        ok: { text: '男爵们出去了。门一关，戴伦把脸埋在手里坐了很久：“我知道这不对。你告诉我怎么办，别让我自己想。”', effects: ['flag a3x_dyren_sorry'], goto: 'a3_14b' },
        fail: { text: '他听你说完，把笔放下了：“你说的我都想过。想过的事不算数。”男爵们一个也没走。', goto: 'a3_14b' },
      },
      {
        text: '让巴里进来，先听他说',
        if: 'party.barry',
        effects: ['approval barry +1'],
        result: '巴里进来，把那篮饼搁在羊皮纸上，压住了。他一句话没说，就站在那儿。',
        goto: 'a3_14b',
      },
    ],
  },

  a3_14b: {
    id: 'a3_14b',
    title: '令',
    loc: '威克斯堡 · 议事厅',
    first: ['quest dyren done', 'quest barry_boy done'],
    text: [
      '羊皮纸还摊在桌上，印泥盒开着。戴伦看着你，男爵们看着戴伦，巴里看着那篮饼。',
      '监誓人的印推得翻一道令。推翻以后，你就是威克斯的仇人，戴伦往后见不见你，男爵们说了算。',
      { if: 'flag.a3x_dyren_sorry', text: '他当着你认了错。那句话男爵们没听见，可他们看得出来：他今天不想同你翻脸。' },
      { if: 'party.barry', speaker: '巴里', text: '我不替他求情，他是公爵。我就说一句：我家那孩子小时候怕黑，是我给他点的灯。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '要我说，盖什么印都行，别让男爵们替他盖。' },
    ],
    choices: [
      {
        text: '让他盖印',
        effects: ['flag edict_upheld', 'world communion -2', 'rep wex +1', 'companion -barry'],
        result: '戴伦把印按下去，按得很重。第二天逐令贴上了城门，巴里跟着出城的精灵一起走，手里还提着那篮饼。走出去一里地，他回头朝城墙挥了挥手。城墙上没人。',
        goto: 'a3_15',
      },
      {
        text: '拿监誓印推翻它',
        effects: ['flag edict_overruled', 'world communion +1', { if: 'flag.a3x_dyren_sorry', then: ['rep wex -1'], else: ['rep wex -3'] }],
        result: '你把监誓印盖在那道令上，盖在戴伦的名字旁边。他站起来出去了，没回头。巴里把那篮饼收回来，说：“他不吃，我们吃。”',
        goto: 'a3_15',
      },
      {
        text: '请巴里留在堡里作保，令先缓着',
        effects: ['flag edict_softened', 'companion -barry'],
        result: '巴里自己开的口：一个精灵押在威克斯堡，男爵们心里踏实。戴伦答应了。巴里把那篮饼塞给你，站在堡门口，等你们拐过了山才进去。',
        goto: 'a3_15',
      },
    ],
  },

  a3_15: {
    id: 'a3_15',
    title: '街口',
    loc: '威克斯堡 · 精灵街 · 夜',
    first: ['quest edith done'],
    text: [
      '威克斯堡，精灵住的那条街口。火把有两百来支。街那头的窗板后面有孩子在哭。',
      { if: 'flag.edict_upheld', text: '这些人是来“帮着执行”的。令上写的是一个月，他们觉得一夜就够了。' },
      { if: 'flag.edict_overruled', text: '他们听说监誓人推翻了公爵的令，就自己来了。' },
      { if: 'flag.edict_softened', text: '令缓了，他们不肯缓。' },
      '伊迪丝是前天到的，三十岁，一身灰。她站在你旁边，把手套摘了，一根指头一根指头地摘。',
      { if: 'flag.edith_alarian', text: '她嘴里哼着一支调子，哼到一半停住了。' },
      { if: 'flag.edith_wise', text: '她袖口别着瓦洛森的铜扣，扣子擦得很亮。' },
      { if: 'flag.edith_ravens', text: '她比你们早到一天，像是知道今晚有人要来。' },
      { if: 'flag.edith_iacob || flag.edith_none', text: '她没看火把，看的是窗板后面那个哭的。' },
      { speaker: '伊迪丝', text: '我能让他们都回家睡觉，明早谁也不记得。你点个头。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，她比火把可怕。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是她开口……我记不下来。我不想记。' },
      { if: 'is.god', text: '火把底下有人认出了你，往后退了一步。后头的人不知道为什么，跟着退。' },
    ],
    choices: [
      {
        text: '点头，让她开口',
        effects: ['flag edith_mob', 'world communion +1', 'world writ +3', 'approval vezina -2', 'approval barry -1', 'approval valeran -2'],
        result: '{?flag.edith_iacob:她说了一句，又多说了半句。火把一支一支灭了，人都回家了。第二天，有三个男人不认得自己的老婆。|她只说了一句“都回家睡吧”。火把一支一支低下去，人转身走了，走得很齐。第二天早上，没一个人记得自己出过门。}',
        goto: 'a3_16',
      },
      {
        text: '按住她的手，自己走到火把前面去',
        check: { skill: 'persuasion', dc: 16, alt: ['intimidation'], adv: 'flag.edith_trusts' },
        ok: { text: '你站在两百支火把前头，一家一家点名：皮匠家的，屠户家的，管磨坊的。点到第三十几个，前排的人开始往后看。人散了，散得很慢。', effects: ['rep wex +1', 'approval valeran +1'], goto: 'a3_16' },
        fail: {
          text: '你刚说出“监誓人”三个字，就有人把火把扔了过来。',
          combat: {
            title: '街口',
            intro: '“别杀人，”伊迪丝在你身后说，“他们明天还得卖肉。”',
            enemies: [{ id: 'thug', n: 4, name: '拿火把的' }, { id: 'village_militia', n: 2, name: '城防的乡勇' }],
            allies: [{ id: 'knight', name: '阿德蕾西娅', hpMult: 0.7 }],
            specials: [
              {
                id: 'torch',
                name: '夺火把',
                desc: '没了火，他们就是一群站在夜里的屠户',
                check: { skill: 'athletics', dc: 14, party: true },
                success: { text: '你一把夺下三支火把，摁进了水沟。没了火，前排的人开始找退路。', applyAll: { cond: 'frightened', turns: 2 } },
                fail: { text: '火把擦着你的脸过去，燎了半边眉毛。', selfDmg: '1d6', type: 'fire' },
              },
            ],
            xp: 300,
            win: { effects: ['rep wex +1'], goto: 'a3_16' },
            lose: { effects: ['world communion -1'], goto: 'a3_16' },
          },
        },
      },
      {
        text: '叫人去敲钟楼的钟，趁乱带精灵走后巷',
        effects: ['world communion -1'],
        result: '钟一响，火把全朝钟楼转了过去。你们从后巷带出来一百一十个精灵，一个没少。回头看的时候，那条街已经烧起来了。',
        goto: 'a3_16',
      },
      {
        text: '点领头的出来，单挑',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        combat: {
          title: '街口的单挑',
          intro: '屠户行的把头把火把交给身后的人，卷起了袖子。两百支火把围成了一个圈。',
          enemies: [{ id: 'thug', name: '屠户行的把头', hpMult: 3 }],
          specials: [
            {
              id: 'rule',
              name: '报出凯伦的规矩',
              desc: '赢了要留人：输的人走，赢的人不追',
              check: { skill: 'persuasion', dc: 14 },
              success: { text: '你把规矩喊了一遍。圈子外头有人跟着念了半句，把头手里的刀垂下来一寸。', applyAll: { cond: 'dazed', turns: 1 } },
              fail: { text: '没人听过凯伦是谁。把头趁你说话的工夫给了你一拳。', selfDmg: '1d6' },
            },
          ],
          xp: 200,
          win: { effects: ['rep wex +1', 'approval valeran +1'], goto: 'a3_16' },
          lose: { effects: ['world communion -1'], goto: 'a3_16' },
        },
      },
      {
        text: '走到街口，就那么站着',
        tag: '神',
        if: 'is.god',
        effects: ['world writ +1', 'var god_acts +1'],
        result: '你什么也没说。两百支火把一支一支低了下去，人跪了一地，跪完回家了。第二天两拨人各说神站在自己那边。伊迪丝把手套戴了回去：“你跟我一样了。”',
        goto: 'a3_16',
      },
    ],
  },

  a3_16: {
    id: 'a3_16',
    title: '瓦洛森',
    art: 'ev_mages_estate',
    loc: '科乌里亚 · 瓦洛森',
    date: '1040年苏伦月',
    first: ['codex varlosen', 'codex wise_council', 'codex garion', 'codex masilda'],
    shop: {
      name: '瓦洛森的药房',
      blurb: '药房的学徒一边称药一边打哈欠。货架最上层摆着奈拉特烛，一捆二十根。',
      stock: ['antidote', 'strong_antitoxin', 'healers_satchel', 'greater_healing_potion', 'scroll_dispel', 'nerat_candle', 'blessed_water_jar'],
    },
    text: [
      '瓦洛森是一座孤塔，原先是座兵寨，四面都是坎雷克的地盘。从塔顶往下看，北边是达拉万之愚的烂泥，东边是一个空村子，烟囱一根也不冒烟。',
      '智者加里昂今年整两百岁，少一条胳膊一条腿，靠精灵的身子骨扛住了病，带着学生躲进了这里。玛希尔达在楼下熬药，门口挂着一排奈拉特烛，点着的那几根是给刚死的人的。阿德蕾西娅一到就去井边提水，没人叫她提。',
      { speaker: '加里昂', text: '我要两样东西：坎雷克实验室里的样本，和封路征尸的权。头一样你们去拿。后一样我不想要，可总得有人拿着。' },
      { if: 'flag.plague_samples', text: '玛希尔达看见你从白旗船上带来的罐子，先谢了你，然后把罐子拿走，再也没提。' },
      { if: 'flag.acromis_exposed', text: '阿克罗姆顿的粮船从塔下的河上过，没靠岸。押船的是阿克罗米斯的儿子，他站在船头看了这座塔一眼。' },
      { if: 'is.god', speaker: '加里昂', text: '我连你当时是不是自己做的主都看不出来。我活了两百年，最怕的就是这个。' },
    ],
    choices: [
      {
        text: '收下阿克罗米斯送来的三船粮',
        if: 'flag.acromis_quiet',
        once: true,
        effects: ['rep wise +1', 'rep moon +1'],
        result: '三船粮是从月河上来的，船头插着阿克罗姆顿的旗。押船的说，老爷还你一笔旧账，账上只写了一句：那年你没把我说出去。',
      },
      {
        text: '去见古塔来的学生',
        if: 'flag.years_watch',
        once: true,
        effects: ['item +healing_potion 2'],
        result: '四个学生围上来叫你先生，有一个是头一批的，胡子都白了。他们塞给你两瓶药，说是自己熬的，理论上管用。',
      },
      {
        text: '到井边，同阿德蕾西娅坐一会儿',
        once: true,
        effects: ['rest short'],
        result: '她数着提上来的桶，四十一桶。她问你，大人，渡鸦山那十一个算不算病死的。你说算。她在绳子上又打了个结。',
      },
      {
        text: '下楼去塔下的空场',
        goto: 'a3_17',
      },
    ],
  },

  a3_17: {
    id: 'a3_17',
    title: '怪谁',
    loc: '瓦洛森 · 塔下的空场',
    text: [
      '塔下的空场上站满了人：各国的信使，边境地的村长，科乌里亚的太阳精灵军官，还有一个推着空车来的，说是来拉药的。他们在等一句话。这病怪谁。',
      { if: 'flag.a3x_rumor', text: '“是精灵带来的”那句话比你们先到了瓦洛森。有个村长当场报出了一个精灵的名字。' },
      { if: 'flag.blame_ravens', text: '为什么你早就说过了：渡鸦山那座塔里的人看了十九年。信早发出去了。今天他们要听的是怎么办。' },
      { if: 'is.god', text: '人群里有人先喊了出来：既然有神在，这病是谁放过来的？' },
      { if: 'is.god', speaker: '伊贝瓦尔的信使', text: '上回神在场的时候，我们丢了一块大陆。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '说坎雷克。死人干的事算到死人头上，这才叫账。' },
      { if: 'party.barry', speaker: '巴里', text: '你说什么都行，别说精灵。对不住，我就求这一件。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，不管您说哪一句，我都照实往回写。' },
    ],
    choices: [
      {
        text: '当众说：坎雷克没死，这病是他放的',
        if: '!flag.blame_ravens && item.ledger_page >= 1 && flag.field_done',
        effects: ['flag blame_canrec', 'world communion +2', 'rep elders +1', { if: 'is.god', then: ['rep elders +1'] }],
        result: '你把大墓地的账页摊在药车上，一行一行念：屠夫原，四百零六座坟，十六座空的。渡鸦山的那座，和这十六座是一个挖法。底下福尔卡德派来的人点了一下头。',
        goto: 'a3_18',
      },
      {
        text: '当众说：坎雷克没死，这病是他放的',
        if: '!flag.blame_ravens && !(item.ledger_page >= 1 && flag.field_done)',
        check: {
          skill: 'persuasion', dc: 15,
          mods: [
            { if: 'flag.a3x_rumor', n: -2, why: '那句话先到了' },
            { if: 'flag.emil_struck', n: 3, why: '弗恩的信使替你作证' },
            { if: 'flag.a3x_retracted', n: 1, why: '车夫收回过那句话' },
          ],
        },
        ok: { text: '{?flag.emil_struck:弗恩的信使站出来，说他们那条排挤精灵的条款是你删的，你不是替精灵说话的人。|你说了坎雷克的名字，说了空坟，说了没药味。}人群里有人开始点头，太阳精灵的军官第一个。', effects: ['flag blame_canrec', 'world communion +1', 'rep elders +1', { if: 'is.god', then: ['rep elders +1'] }], goto: 'a3_18' },
        fail: { text: '有人笑了：“他死了三十年了，你拿什么证明？”你拿不出来。人群散的时候，那句“精灵带来的”还在。', effects: ['flag blame_silent'], goto: 'a3_18' },
      },
      {
        text: '对领主们点头：病是精灵带来的',
        if: '!flag.blame_ravens',
        effects: ['flag blame_elves', 'world communion -3', 'world unburied -1', 'approval barry -3', 'rep elders -1', 'rep wex +1', { if: 'is.god', then: ['rep elders -1', 'rep wex +1'] }],
        result: '你点了头。信使们当场上马，第二个月各国的兵就到了。瓦勒兰看了你很久，什么也没说。他记下了。',
        goto: 'a3_18',
      },
      {
        text: '把先知会看了十九年的事讲出来',
        if: '!flag.blame_ravens && flag.knows_ravens_watched',
        effects: ['flag blame_ravens', 'world unburied +2', 'flag vezina_left', 'companion -vezina', 'quest vezina_eye fail', 'rep wise -1', { if: 'is.god', then: ['rep wise -1'] }],
        result: '{?flag.vezina_eye:薇齐娜没等你开口就走了，那只鸦眼早一天看见了今天。你站在药车上讲完，有人朝渡鸦山的方向啐了一口。|薇齐娜自己站上药车，一五一十讲了一遍。讲完她下来，走到太阳精灵的军官跟前，把两只手伸了出去。}',
        goto: 'a3_18',
      },
      {
        text: '叫各国出车，把病死的往瓦洛森拉',
        if: 'flag.blame_ravens',
        effects: ['rep wise +1', 'rep escann -1'],
        result: '信使们记下了车数。头一批车十天后到，车上盖着草席，草席上压着石头。',
        goto: 'a3_18',
      },
      {
        text: '叫各国出兵，把渡鸦山围起来',
        if: 'flag.blame_ravens',
        effects: ['rep escann +1', 'rep elders -1'],
        result: '东坎诺的信使头一个答应。伊贝瓦尔的那个没答应，转身走了。',
        goto: 'a3_18',
      },
      {
        text: '一个字也不说',
        effects: [{ if: 'flag.blame_ravens', then: ['rep wise -1'], else: ['flag blame_silent'] }],
        result: '你站在药车上看着他们，一个字也没说。人群站了一个时辰，散了。散的时候，每个人心里都有了自己的答案。',
        goto: 'a3_18',
      },
    ],
  },

  a3_18: {
    id: 'a3_18',
    title: '疫令',
    loc: '瓦洛森 · 塔里的圆桌',
    text: [
      '圆桌是从兵寨的伙房搬上来的，桌面上还有刀砍的印子。九个信使围着坐，加里昂坐在窗边，玛希尔达坐在他对面，中间隔着一锅没熬完的药。',
      { speaker: '加里昂', text: '封路，征尸，病死的人不许自家埋，一律送到这里来烧或者看。这个权我不想要。可它总得在一个人手里。' },
      { speaker: '玛希尔达', text: '家母替术士王算了二十年的仗。所以这个权得有日子，到了日子就还回去。我验别人的心之前，都请对方先搜我的身。' },
      { if: 'flag.exam_precedent', text: '信使们记得十八年前那桩验心的案子。从那以后，法师说一句“我看过了”，就没人能再查。达梅里亚的信使把这话当场说了出来。' },
      { if: 'flag.edith_mob', text: '威克斯堡那条街的事，信使们昨天刚听说。他们看加里昂的眼神变了，看玛希尔达的也变了。' },
      { if: "faction == 'staff'", text: '你是贤者门下的人，条文该你起草。玛希尔达把笔推了过来。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，给法师一根杖容易，往回要难。' },
    ],
    choices: [
      {
        text: '全给：封路征尸的权都交给瓦洛森',
        effects: ['flag law_full', 'world writ +2', 'world unburied -2', 'approval valeran -1'],
        result: '九个信使签了字，加里昂最后一个签。他签完把笔放下，看了一会儿自己那只手。',
        goto: 'a3_19',
      },
      {
        text: '劝信使们签：限期十年，各国派人看着',
        if: "faction != 'staff'",
        check: { skill: 'persuasion', dc: 15, dis: 'flag.exam_precedent', mods: [{ if: 'flag.edith_mob', n: -2, why: '威克斯堡那条街' }] },
        ok: { text: '你把“十年”两个字写在最上头，又在底下添了一行：每年由各国派一个人来翻账。九个人挨个签了，达梅里亚的最后一个。', effects: ['flag law_limited', 'world writ +1', 'world unburied -1'], goto: 'a3_19' },
        fail: { text: '“十年以后谁来收这个权？”达梅里亚的信使问。你答不上来。有四个人把笔放下了。', goto: 'a3_18b' },
      },
      {
        text: '亲手起草：限期十年，各国派人看着',
        tag: '贤者门下',
        if: "faction == 'staff'",
        effects: ['flag law_limited', 'world writ +1', 'world unburied -1'],
        result: '你写了一个时辰，玛希尔达在旁边一条一条念出声。念到“到期即还”那一句，她停下来，叫你把字写大一点。',
        goto: 'a3_19',
      },
      {
        text: '不给',
        effects: ['flag law_refused', 'world unburied +1', 'rep wise -2'],
        result: '加里昂点了点头，好像早料到了。玛希尔达转身去看锅，锅已经熬干了。',
        goto: 'a3_19',
      },
    ],
  },

  a3_18b: {
    id: 'a3_18b',
    title: '签字',
    loc: '瓦洛森 · 塔里的圆桌',
    text: [
      '“限期”两个字没人肯签。九个信使里有四个把笔放下了，剩下五个在看那四个。窗外的奈拉特烛又点了两根。',
      '加里昂没劝。他把那张纸往你这边推了推，像在说：这是你的事了。',
      { speaker: '玛希尔达', text: '没有期限，我不签。可我也不拦着你们签。锅不等人。' },
      '外头有车在往塔下拉人。拉车的喊了一声，问这一车卸在哪。没人答他。',
      { if: 'party.liv', speaker: '卡斯坦', text: '给就全给，不给就别给。半截的买卖最难看。' },
    ],
    choices: [
      {
        text: '那就全给',
        effects: ['flag law_full', 'world writ +2', 'world unburied -2', 'approval valeran -1'],
        result: '四支笔又拿了起来。加里昂签完，把那张纸叠好塞进了自己的袖子。',
        goto: 'a3_19',
      },
      {
        text: '那就不给',
        effects: ['flag law_refused', 'world unburied +1', 'rep wise -2'],
        result: '你把那张纸撕了。拉车的又喊了一声，这回玛希尔达下楼去答了。',
        goto: 'a3_19',
      },
    ],
  },

  a3_19: {
    id: 'a3_19',
    title: '实验室',
    loc: '达拉万之愚边上',
    first: ['flag knows_roster', 'item +lab_samples', 'quest white_year stage 3', 'quest canrec_trail stage 2'],
    text: [
      '坎雷克的实验室在达拉万之愚的边上，是一座米尔科里人的老墓窖，塌了半边，另一半陷在烂泥里。泥上没有脚印，只有一道车辙，是很久以前的。',
      { if: 'flag.cure_early', text: '先知会给了一张图，画得极细：从哪棵枯树往北，数到第几块界石，往下挖。图背面有一行字，是薇齐娜的笔迹：要是你到了，别碰门口那口锅。' },
      { if: '!flag.cure_early', text: '你们手里没有图。达拉万之愚这片泥地，每天早上的样子都同前一天不一样。' },
      '阿德蕾西娅在泥边上站住，数泥里冒上来的气泡，数到三十就不数了。泥里有股甜味，闻久了舌根发麻。',
      { if: 'flag.knows_myrrh', text: '甜味底下还压着一股别的：没药。你在空坟边上闻到过。' },
      { if: 'party.vezina && flag.vezina_eye', speaker: '薇齐娜', text: '往左走。我说的不是要是。' },
    ],
    choices: [
      {
        text: '照先知会的图走',
        if: 'flag.cure_early',
        effects: ['approval vezina +1'],
        result: '图是对的。不到中午，你们就找到了那块界石，石头上有人拿刀刻了一只乌鸦。',
        goto: 'a3_19b',
      },
      {
        text: '自己在泥地里找路',
        check: { skill: 'survival', dc: 16, party: true },
        ok: { text: '你跟着那道旧车辙走，车辙在一块界石前头断了。界石底下是空的。', goto: 'a3_19b' },
        fail: { text: '你们在泥地里转了一个月。头一个礼拜还数日子，后来就不数了。这一个月里，瓦洛森那边又烧了四百个。', effects: ['world unburied +1'], goto: 'a3_19b' },
      },
    ],
  },

  a3_19b: {
    id: 'a3_19b',
    title: '号魂',
    loc: '达拉万之愚 · 墓窖',
    first: ['codex death_knight'],
    text: [
      '墓窖里是干的。四面墙上摆满了罐子，每只都贴着签，签上有日子，最早的一只是 980 年。里间是笼子，一排一排，门都开着，笼底的稻草发黑。',
      '屋子当中站着一个东西，没躺下。它是半透明的，嘴张着，嘴里往外淌声音，可你们什么也听不见。它在等谁来点它的名。',
      { if: "origin == 'ebonmarck'", text: '靠门那排罐子的颈上拴着军团牌。你凑近看了一块，上面的编号你认得：第九军团，沼泽堡那一年。' },
      { if: 'party.vezina && flag.vezina_eye', speaker: '薇齐娜', text: '它叫号魂。别听它。它下一句我已经听见了。' },
      { if: 'party.liv', text: '卡斯坦把翅膀收得紧紧的，这是她头一回不说话。' },
      { if: 'is.god', text: '号魂的头朝你转过来，转了一半，停住了。它好像认得你是什么，又好像不想认。' },
    ],
    choices: [
      {
        text: '贴着墙根绕过去',
        check: { skill: 'stealth', dc: 15, party: true },
        ok: { text: '你们贴着墙根走过去。它的头跟着转了半圈，又转了回去。', goto: 'a3_19c' },
        fail: { text: '有人踢到了一只罐子。号魂把嘴张大了，这回你们听见了。', effects: ['damage 3d6'], goto: 'a3_19c' },
      },
      {
        text: '点一根奈拉特烛，举着走过去',
        if: 'item.nerat_candle >= 1',
        effects: ['item -nerat_candle'],
        result: '烛火是青的。号魂往后让了一步，让出一条正好一个人宽的路。',
        goto: 'a3_19c',
      },
    ],
  },

  a3_19c: {
    id: 'a3_19c',
    title: '名册',
    loc: '达拉万之愚 · 墓窖',
    first: ['codex canrec', 'codex book_of_canrec'],
    text: [
      '里间的石桌上摞着账本，摞到了屋顶。翻开头一本，是一份名册：一行一个名字，后面是死的日子、死在哪、怎么死的。渡鸦山奈拉特的那个祭司在上头，墨迹还新。',
      '你往前翻。994 年那一页有一个名字写得比别的大：阿雷尔，达梅里亚的国王，背后一刀。',
      '石桌正中空着一块，印着一本厚书压出来的方印子，印子四周一圈灰是干净的。那本书不在这儿。它刚被人拿走没多久。',
      { if: "origin == 'dameria'", text: '阿雷尔二世是马里昂的外祖父。你在月山的画像上见过他，画上的人没背过身。' },
      { if: 'flag.arrel_with_you', text: '你没让王子进里间。' },
    ],
    choices: [
      {
        text: '挑出新鲜的罐子带走',
        once: true,
        check: { skill: 'medicine', dc: 15, party: true },
        ok: { text: '你挑了七只，签上的日子都在今年。玛希尔达要的就是这几只。', effects: ['xp 150'] },
        fail: { text: '你挑错了一只。盖子一开，里头的东西还是活的。你把它摔了，手背上溅了一点，火辣辣疼了三天。', effects: ['hp -6'] },
      },
      {
        text: '弄明白这摞名册到底是什么',
        once: true,
        check: { skill: 'arcana', dc: 16, party: true, adv: 'is.caster' },
        ok: { text: '名册不是记账用的。每一页都拴着一个人。真正的那本书拴着所有这些页，也拴着写书的人自己：它是名册，是号魂的笼子，也是他的命。', effects: ['xp 200'] },
        fail: { text: '你多看了一页。那一页上的名字动了一下，外间的号魂叫了一声。', effects: ['damage 2d6'] },
      },
      {
        text: '把那块军团牌解下来带走',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck'",
        once: true,
        effects: ['rep dragon +1'],
        result: '你把牌子揣进怀里。第九军团要是还有活着的，总得有个人把这一块带回去。',
      },
      {
        text: '把罐子装箱，回瓦洛森',
        goto: 'a3_20',
      },
    ],
  },

  a3_20: {
    id: 'a3_20',
    title: '三剂药',
    loc: '瓦洛森 · 药房',
    first: ['level 8', 'quest white_year done', 'quest witness stage 4', 'item -lab_samples'],
    text: [
      { if: '!flag.arrel_with_you', text: '玛希尔达的药只熬出三剂。帐外，达梅里亚的信使说，王子前夜在边境上叫人抓了一道，今早开始发白。' },
      { if: 'flag.arrel_with_you', text: '玛希尔达的药只熬出三剂。阿雷尔王子就躺在隔壁，他是跟你来的。前夜在边境上叫人抓了一道，今早开始发白。' },
      '洛伦特的骑士说，雷安国王咳了三天。渡鸦山的车夫没开口，车上躺着十一个孩子。她把药箱推给你，转身去刷锅。',
      { if: 'flag.a3x_caught', text: '赶车的就是皮匠街上那个。他闺女在车上，第三个。' },
      { if: "origin == 'lorent'", text: '洛伦特的骑士当着你的面把手按在了剑上。他没拔，就那么按着。' },
      { if: "origin == 'lorent'", speaker: '洛伦特的骑士', text: '三剂里有一剂本该是我家国王的。您是太后派出来的人。' },
      { if: 'is.god', text: '两家的信使都跪着。车夫没跪，他腾不出手，手里攥着缰绳。' },
      { if: 'flag.god_healed', speaker: '达梅里亚的信使', text: '您上回治过一城。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '别看我。我只会算一种账，这种我不会。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，不管给谁，另外两家都会说您是故意的。' },
      { if: 'party.barry', speaker: '巴里', text: '十一个孩子……对不住，我不该开口。' },
    ],
    choices: [
      {
        text: '问骑士几句雷安国王的病',
        once: true,
        check: { skill: 'medicine', dc: 16, party: true },
        ok: { text: '你问了三句：咳的时候有没有痰，夜里出不出汗，手心白不白。他答完，你心里有了数：雷安那是着了凉。可你没法证明，骑士也不会信。', effects: ['flag a3x_rean_cold'] },
        fail: { text: '骑士答得含含糊糊，说国王的事他不该多嘴。你听不出是什么病。' },
      },
      {
        text: '把三剂都给达梅里亚的信使',
        effects: ['flag doses_moon', 'world feud +2', 'rep moon +2', 'rep rose -2', { if: 'is.god', then: ['rep rose -1'] }],
        result: '{?flag.arrel_with_you:你端着药进了隔壁。阿雷尔喝完头一剂，把碗还给你，说他还能站。|信使把药箱抱在怀里上了马，一路没敢跑快。}洛伦特的骑士把剑按回了鞘里，按得很慢。',
        goto: 'a4_01',
      },
      {
        text: '把三剂都给洛伦特的骑士',
        effects: ['flag doses_rose', 'world feud +2', 'rep rose +2', 'rep moon -2', { if: 'is.god', then: ['rep moon -1'] }],
        result: '{?flag.a3x_rean_cold:骑士接过药箱，谢了你。你没告诉他那是着凉，说了他也不信。|骑士接过药箱，单膝跪下谢你。}达梅里亚的信使在帐外站了一夜，第二天一早才走。',
        goto: 'a4_01',
      },
      {
        text: '两家各给一剂，剩的给最小的孩子',
        effects: ['flag doses_split'],
        result: '最小的那个四岁，车夫把她抱下来，她自己把药喝了，皱着眉说苦。两家的人各拿了一剂，谁也没谢你。',
        goto: 'a4_01',
      },
      {
        text: '把药全给车夫',
        effects: ['flag doses_children', 'world unburied -1', 'rep moon -1', 'rep rose -1', 'approval barry +2', { if: 'is.god', then: ['rep moon -1', 'rep rose -1'] }],
        result: '车夫没说话，一个一个把孩子抱下来，喂完一个抱回去一个。两家的信使当天就走了。玛希尔达刷完锅出来，把空药箱拿回去，又开了一炉。',
        goto: 'a4_01',
      },
    ],
  },
};
