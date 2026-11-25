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
};
