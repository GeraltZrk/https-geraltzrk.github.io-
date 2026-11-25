// 第二幕《地砖下的皇帝》（BIBLE §11.3），1023 年花始月—1024 年真霜月。
// 进场 4 级，卡斯坦、巴里、薇齐娜在队，伊迪丝跟着辎重。出场 6 级，四个同伴都在。a2_19 → a3_01。
//
// 大纲（谁在场；变了什么；出口）
// a2_01  西门：两遍城门税。瓦勒兰递信入队；卡斯坦封他马厩总管。[洛伦特] 太后的小笺、三十七号棺材。神：您还算不算人。→ a2_02
// a2_02  万神道（枢纽、军团旧货铺、长休）：两家吵正统；失势的卡斯特洛斯祭司（[旧礼] 带话，★神当众开口）；
//        [矮人] 赊账；瓦勒兰同巴里头一回吃饭；卡斯坦教伊迪丝喝酒；[达梅里亚] 马里昂的密信。→ a2_03
// a2_03  亚科布的客厅：缰绳的头一种讲法（手艺）。察言 / 奥秘两项检定；通行文书收不收（iacob_favor）。→ a2_04
// a2_04  阿德尼卡平原：凯伦算不算叛徒，站哪边；[蓝宝石] 巡骑给白旗和见证骑士。→ a2_04b
// a2_04b 平原上的夜：军团的歌，稳马检定（败丢一匹驮马）；短休。→ a2_05
// a2_05  围城营地：进营（文书 / 说服 / 混进去）。→ a2_05b
// a2_05b 大帐：盖印 / 听证 / [蓝宝石] 骑士裁决 / [乌霜边区] 自己作保 / ★神叫两边放下兵器。siege_* 三选一。→ a2_06
// a2_06  缺口：按 siege_* 分路。god_truce 免战立 garrec_king。→ a2_06h / a2_06c / a2_06d / a2_07
// a2_06h 听证：狂热骑士撕约夜袭。胜 garrec_king，败 garrec_exile。→ a2_07
// a2_06c 盖印：跟攻城的进缺口。胜 → a2_06b，败 garrec_dead。
// a2_06b 北门：看着他往北冲（garrec_dead）/ 拿印压住北门放人（garrec_exile）。→ a2_07
// a2_06d 裁决：石灰圈里各出一“枪”。胜 garrec_king，败 garrec_exile。→ a2_07
// a2_07  一口棺材：加雷克（或乌尔维克）托你找回五十三世。[威克斯] 讨屠夫的债；卡斯坦要跟去。→ a2_08
// a2_08  沼泽堡（调查）：布罗恩费尔德、独眼老兵；三项检定；旧口令。→ a2_09
// a2_09  奈拉特的碗：付钱 / 捞人 / [施法者] 自己看 / [旧礼] 同行；察言得 knows_myrrh。→ a2_10
// a2_10  头领林地：狼人夜袭（战）。→ a2_10b
// a2_10b 天亮：伊迪丝和那头不咬人的狼；薇齐娜记了一笔。→ a2_11
// a2_11  炖菜：守砖人试你；缰绳的第二种讲法（罪）。败立 keeper_hostile。→ a2_11b
// a2_11b 又一碗：伊迪丝说还饿。替她说话 / 让她自己说。→ a2_12
// a2_12  地砖下：五十三世、乌钢冠、没药味的来客（knows_myrrh）。让不让卡斯坦看（liv_saw_body 都立）。→ a2_12b
// a2_12b 乌钢冠：收进行李 / 留在他胸口。→ a2_12c
// a2_12c 皇帝的去处：body_* 六选一。body_left → a2_14，其余 → a2_13
// a2_13  葬礼：五种各一段；[旧礼] 主持；[乌霜边区] 乌霜家的规矩；悼词检定；瓦勒兰问办给谁看。→ a2_14
// a2_14  刀锋堡：试剑管不管。神：请你拔卡林达尔。→ a2_14b
// a2_14b 镐：克拉丽蒙德要毁阶（clarimonde_pact）；[精灵 / 伊贝瓦尔] 认出剑（calindal_named）。→ a2_15
// a2_15  北要塞（小枢纽、石匠的库房、短休）：布洛克报账；撒不了谎的哨兵；[洛伦特] 比武场（lance_truth）；[矮人] 行话。→ a2_16
// a2_16  绳子：攀崖检定（[有翅膀的] 免检）。→ a2_16b
// a2_16b 前三道：喊阵；石桌（map_drawn）；[矮人 / 奇械师] 锻炉。→ a2_16c
// a2_16c 半坡：答不答应卡斯坦“总有一天让你试”（vow_liv）。→ a2_17
// a2_17  第九道：魔像（战）。golem_pc / golem_liv / golem_none 三选一；神：golem_forever。→ a2_18
// a2_18  誓石：亚科布、石匠、五岁的卢坎到了。听出半个音（knows_word）；★神扯下那半句话（knot_cut、god_half_sentence）。→ a2_18b
// a2_18b 背叛者：iacob_* 三选一；[贤者门下] 先验心。→ a2_18c
// a2_18c 石头怎么办：修并请人解结 / 照原样修 / 毁阶 / 不动。→ a2_18d 或 a2_18e
// a2_18d 请谁来解：knot_alarian / knot_ravens / knot_iacob。→ a2_18e
// a2_18e 银龙：lucan_* 四选一。→ a2_19
// a2_19  1024 年真霜月：一摞信；四个人各一句；伊迪丝跟谁学（edith_* 五选一）；升 6 级。→ a3_01
//
// 本段私有标记（只在本文件里设、本文件里读）：a2x_*。
export const SCENES = {
  a2_01: {
    id: 'a2_01',
    title: '西门',
    chapter: '第二幕 · 地砖下的皇帝',
    loc: '卡斯托纳斯 · 西门',
    date: '1023年花始月',
    text: [
      '卡斯托纳斯的西门收两遍税。门洞左边一张桌子归北王国，右边一张归南王国，两家都说自己才是卡斯塔诺，收的都是四个铜板。只交了左边的，右边那位会客客气气把你请回去重排。',
      '门洞里站着个洛伦特骑士，二十出头，罩袍上的灰拍过，没拍干净。他等你把两份税都交完，才递过来一封信，封蜡是阿瑟利斯家的。',
      { speaker: '瓦勒兰', text: '恩特本的瓦勒兰。恕我直言，恩特本信不过太后派的监誓人，也信不过月家的，所以派我跟着您。您判什么，我照实往回写。' },
      { if: "origin == 'lorent'", text: '信封里还夹着一张小笺，玫瑰色的封蜡，太后的字只有一行：恩特本的人，放在看得见的地方。他看着你读完，脸上没有一点不自在。' },
      { if: "origin == 'lorent' && flag.p_met_valeran", speaker: '瓦勒兰', text: '我们见过，在那口空棺材边上。三十七号，后来找着没有？我回去问过两回，没人答我。' },
      { if: "origin == 'lorent' && flag.p_hall_truth", speaker: '瓦勒兰', text: '您在大厅里回的那句是实话，我在场。恕我直言，这在洛伦泰内不多见。' },
      { if: "origin == 'lorent' && flag.p_hall_denied && !flag.p_hall_truth", speaker: '瓦勒兰', text: '您在大厅里替太后把话挡了回去，我在场。恕我直言，这一条我早就写回去了。' },
      { if: 'is.elfblood', speaker: '瓦勒兰', text: '还有，恩特本最信不过的就是您这样的耳朵。这一条我也照实写，先同您说一声。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '骑马来的？行。卡斯塔诺眼下正缺个马厩总管，就你了。俸禄先欠着，我这儿人人都欠着。' },
      { if: 'party.barry', text: '巴里已经在门洞的石墩上摆开了碗，给新来的盛了一勺豆子炖咸肉，又问他吃不吃得惯三道卫的乳酪。' },
      { if: 'is.god', text: '两张税桌后头的人都没敢伸手要那四个铜板。南王国那位把钱匣子合上了，北王国那位看他合了，也合上了。' },
      { if: 'is.god', speaker: '瓦勒兰', text: '还有一句。恕我直言，我向人发过誓，没向神发过。您还算不算人？' },
    ],
    first: [
      'companion +valeran',
      'codex valeran',
      'codex castonath',
      'quest valeran_oath start',
      { if: "origin == 'lorent' && flag.p_hall_truth", then: ['approval valeran +1'] },
      { if: "origin == 'lorent' && flag.p_hall_denied && !flag.p_hall_truth", then: ['approval valeran -1'] },
    ],
    choices: [
      {
        text: '答他：算',
        if: 'is.god && !flag.a2x_god_answered',
        once: true,
        effects: ['flag a2x_god_answered', 'approval valeran +1'],
        result: '他点了点头，掏出炭笔，把这个字记在了给恩特本的头一封信里。',
      },
      {
        text: '答他：不算',
        if: 'is.god && !flag.a2x_god_answered',
        once: true,
        effects: ['flag a2x_god_answered', 'flag a2x_not_man'],
        result: [{ speaker: '瓦勒兰', text: '那我照样跟着。只是称呼得改一改，阁下。' }],
      },
      {
        text: '拦住卡斯坦：他是来盯梢的，不归她封官',
        effects: ['approval valeran +1', 'approval liv -1'],
        result: '卡斯坦“哼”了一声，说掌玺大臣管得真宽。瓦勒兰朝你欠了欠身，把这一条也记下了。',
        goto: 'a2_02',
      },
      {
        text: '不拦，看他怎么接这个官',
        effects: ['approval liv +1'],
        result: [
          { speaker: '瓦勒兰', text: '恕我直言，陛下，贵国眼下没有马厩。' },
          { speaker: '卡斯坦', text: '所以才要个总管。' },
          '他想了想，没找出这句话的毛病，把缰绳换到了左手。',
        ],
        goto: 'a2_02',
      },
      {
        text: '把信当众念一遍，再请他坐下吃饭',
        effects: ['approval barry +1', 'approval vezina +1'],
        result: '信不长，三行，一句客气话没有。薇齐娜把三行都抄了。巴里又给他添了一勺，说盯梢是力气活，得先垫一口。',
        goto: 'a2_02',
      },
    ],
  },

  a2_02: {
    id: 'a2_02',
    title: '万神道',
    loc: '卡斯托纳斯 · 万神道',
    shop: {
      name: '军团旧货铺',
      blurb: '锻炉街拐角的铺子，卖的都是军团散伙时没人领的东西，番号还刻在上头。',
      stock: [
        { id: 'legion_shortsword', price: 300 },
        { id: 'legion_splint', price: 500 },
        'longsword',
        'chain_mail',
        'heavy_crossbow',
        'healing_potion',
        'greater_healing_potion',
        'alchemist_fire',
      ],
    },
    text: [
      '万神道是一条上坡路，两边站着石像：神，皇帝，还有几位说不清是神还是皇帝的。北城的大宅空着一多半，屋顶上的花园没人浇，草从檐口垂下来。伊迪丝数到第三十尊就不数了。',
      '路中段搭着一排粥棚，掌勺的是卡斯特洛斯的祭司。前年以前，全坎诺的王冠都从他们手上过。如今和约说哪座神殿都能递冠，他们手上只剩勺子。',
      '下城听南王国莱恩王的，上城听北王国温斯坦王的。两家的司礼官在下城的议事厅里隔着一张长桌吵正统，吵了两年，桌子当中那条漆线谁也没过。锻炉街在下城，打铁声从早响到晚。福阿哈尔公爵的宅子在坡顶，门口的台阶有人天天扫。',
      { if: 'party.liv', text: '卡斯坦在屠兽者卡斯坦的石像底下站了一会儿，把酒囊里剩的一口倒在了它脚面上。她说先请他喝一口，往后好算账。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '屠兽者头上蹲着四只。刚才是五只。要是少的那只往公爵宅子那边飞了（我说的是要是），那就有人知道我们到了。' },
      { if: "origin == 'dameria'", cls: 'letter', text: '马里昂的密信追到了客店。没有抬头，没有落款，只有一句：半精灵爬得上去吗。' },
      { if: 'is.god', text: '粥棚里的祭司分成了两拨。一拨朝你举着木牌，牌上抄的是诸神禁令：神不下场。另一拨没举牌子，只打听了你住哪家客店。' },
      { if: 'flag.god_on_agenda', text: '泛神会议的信使在坡下追上了你，带来一张要你填的表。头一栏是神号，第二栏是“所属神系（如无，填无）”，第三栏是卒年。信使说这一栏您先空着。' },
    ],
    choices: [
      {
        text: '去议事厅，听莱恩和温斯坦的人吵正统',
        once: true,
        check: { skill: 'history', dc: 13, party: true, mods: [{ if: "origin == 'ebonmarck'", n: 2, why: '这两家的旧账你从小听到大' }] },
        ok: {
          text: '吵了一个钟头，你听出门道来了。南王国的人只说税。北王国的人三句不离“乌霜领的仗得有个了结”。怕加雷克的是北边：永冻边区同他们挨着。{?faction == \'sapphire\':散会的时候两位司礼官在门口互相替对方掸了掸袖子。他们的主子是蓝宝石之眼一起立团的兄弟，吵归吵。|}',
          effects: ['flag a2x_court_read'],
        },
        fail: {
          text: '你在该点头的地方笑了一声。南王国的司礼官记下了你的名字，北王国的司礼官记下了他记名字这件事。',
          effects: ['rep escann -1'],
        },
      },
      {
        text: '往粥棚的钱匣子里放十个金冠',
        once: true,
        cost: { gold: 10 },
        effects: ['rep dragon +1'],
        result: "掌勺的老祭司没数钱，先给你盛了一碗。{?origin == 'ebonmarck' && class == 'cleric':他认出了你，没叫你的名字，只把勺子递过来，让你替他盛了下一碗。|他说万神道从前有三百个祭司，如今凑得齐的只有这一棚。}",
      },
      {
        text: '答应粥棚里的祭司，把那句话带给各国',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['rep dragon +1', 'rep moon -1'],
        result: '老祭司没让你发誓。他说这身袍子如今不配听人发誓，只请你把粥喝完。那句话是：加冕的事，不怪每一个穿这身袍子的人。月神神殿的人听见了不会高兴，你带是不带，他不催。',
      },
      {
        text: '在万神道当众说：加冕的事，不怪穿这身袍子的人',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['rep dragon +1', 'rep escann +1', 'rep moon -2', 'var god_acts +1'],
        result: '你说得不响，整条坡都听见了。当夜万神道点了三百盏灯，卡斯特洛斯的祭司团一夜翻了身。和约里“哪座神殿都能递冠”那一条，从第二天起成了酒馆里的笑话。月神神殿的人没笑。',
      },
      {
        text: '报上氏族名，在锻炉街赊一副链甲',
        tag: '矮人',
        if: 'is.dwarf',
        once: true,
        effects: ['item +chain_mail'],
        result: '掌柜的翻出一本账，从你的氏族名往上查了四代，查到一笔 871 年的欠账，已还。他把链甲推过来：“记你名下。利钱按年算，我们等得起。”',
      },
      {
        text: '拉瓦勒兰同巴里坐一桌吃顿饭',
        if: 'party.valeran && party.barry',
        once: true,
        effects: ['approval valeran +1', 'approval barry +1'],
        result: [
          '客店的桌子是整块石头凿的，挪不动，瓦勒兰只能坐在巴里对面。',
          { speaker: '瓦勒兰', text: '恕我直言。精灵待我们很好。家父待他的猎犬也很好。' },
          { speaker: '巴里', text: '这话在理，我们威克斯人也这么疼狗。你尝尝这个，鹿肉馅的，我多搁了杜松子。' },
          '瓦勒兰吃了三个。当晚他给恩特本的信里多了一行：该精灵擅长烹饪，此事属实。',
        ],
      },
      {
        text: '卡斯坦在教伊迪丝喝酒：把碗拿走',
        if: 'party.liv && !flag.a2x_edith_drink',
        once: true,
        effects: ['flag a2x_edith_drink', 'approval liv -1'],
        result: [
          { speaker: '卡斯坦', text: '我十三岁已经喝倒过一个百夫长了。行，你是掌玺大臣，玺归你管，酒也归你管。' },
          '伊迪丝说她本来也没觉得好喝。碗是空的。',
        ],
      },
      {
        text: '卡斯坦在教伊迪丝喝酒：随她们去',
        if: 'party.liv && !flag.a2x_edith_drink',
        once: true,
        effects: ['flag a2x_edith_drink', 'approval vezina -1'],
        result: [
          '伊迪丝喝了半碗，说像马尿，又要了半碗。卡斯坦给她倒了，倒完才想起来问自己为什么倒。',
          { if: 'party.vezina', speaker: '薇齐娜', text: '十三岁。我记下了，连同是谁没拦。' },
        ],
      },
      {
        text: '回信：爬得上',
        tag: '达梅里亚',
        if: "origin == 'dameria' && !flag.a2x_marion_answered",
        once: true,
        effects: ['flag a2x_marion_answered', 'rep moon +1'],
        result: '你写了三个字。信使走的时候说，陛下收到这种回信，一般要喝一场。',
      },
      {
        text: '回信：别爬',
        tag: '达梅里亚',
        if: "origin == 'dameria' && !flag.a2x_marion_answered",
        once: true,
        effects: ['flag a2x_marion_answered', 'rep moon -1'],
        result: '你写了两个字。信使看了一眼，把信贴身收好，说这一封得挑陛下没喝酒的时候递。',
      },
      {
        text: '回信：我替你去看',
        tag: '达梅里亚',
        if: "origin == 'dameria' && !flag.a2x_marion_answered",
        once: true,
        effects: ['flag a2x_marion_answered', 'flag a2x_look_for_marion'],
        result: '你写：山在北边，我正往那儿走，看完告诉你。信使说这封最好，哪头都不得罪。',
      },
      {
        text: '找家客店睡一觉',
        once: true,
        effects: ['rest long'],
        result: '客店在下城，床板是整块石头凿的，建造者巴尔加尔那辈人的手艺。你睡得很沉，醒来腰疼。',
      },
      { text: '去福阿哈尔公爵的宅子', goto: 'a2_03' },
    ],
  },

  a2_03: {
    id: 'a2_03',
    title: '亚科布的客厅',
    art: 'ev_adventurers_estate',
    loc: '卡斯托纳斯 · 福阿哈尔公爵的宅子',
    text: [
      '亚科布六十出头，自己开的门。客厅里生着两个火盆，茶是好茶，杯子是一套，一只不缺。他给每个人都倒了，伊迪丝那杯兑了蜜。',
      '伊迪丝喝完说还要。他提起壶又给她倒了一杯，倒完把壶放下，看了看自己的手，头一回没接上话。只一下，他就接着说了下去。',
      { if: 'flag.melcor_dead && !flag.melcor_wise', text: '他先问梅尔科尔埋在哪。你说了。他替学生叹了口气，叹得很像样。' },
      { if: 'flag.melcor_wise', text: '梅尔科尔的口供他已经听说了。“那孩子嘴不严，从小就不严。”他说这话像在说别人家的狗。' },
      '你问慑心术。他一点不躲，讲得同教徒弟一样。',
      { speaker: '亚科布', text: '头一步是口令，一句旧营房里人人听过的话，所以没人防它。第二步是常令：听见了口令，去干什么。第三步是收尾，叫他忘了自己干过。' },
      { speaker: '亚科布', text: '同驯马差不多。马还难些，马记仇。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '茶我不喝。上一个喝他师父茶的人是我爹。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，公爵大人，您背叛过一个人。我数来数去，嫌多。' },
      { speaker: '亚科布', text: '乌霜领外头的营地不好进，三路人各有各的哨卡。我给您开一张通行文书，盖福阿哈尔的印，算我替和约出一分力。' },
      { if: "origin == 'ebonmarck'", text: '他看见你胸口的军团牌，把番号念了出来，连驻地都没念错。“那个军团的伙食一向不行。”' },
      { if: 'is.arcane', text: '他同你说话时多用了两个行话，说完停一停，看你接不接得住。' },
      { if: "faction == 'staff'", text: '他提起加里昂，一口一个“您的老师”，客气得叫人后背发凉。' },
      { if: 'is.god', text: '他是这座城里头一个想明白的人，前后没用一杯茶的工夫。' },
      { if: 'is.god', speaker: '亚科布', text: '我这辈子都在找一只稳当的手。您比哪位皇帝都稳当。祭司们眼下乱成一锅粥，您要是缺个替您管他们的人，我毛遂自荐。' },
    ],
    first: ['codex nichmer', 'codex bridle', 'codex iacob'],
    choices: [
      {
        text: '看他到底在等什么',
        once: true,
        check: { skill: 'insight', dc: 15, party: true, adv: 'flag.melcor_wise' },
        ok: {
          text: '他每说完一段，眼睛就往北窗那边带一下。窗外是试炼山。他等的东西在那个方向，你只是顺路从他客厅里过。',
          effects: ['flag a2x_iacob_read'],
        },
        fail: {
          text: '你盯着他看，他就由着你看，顺手把茶续上，又问你们打算走哪条路去北边。等你回过味来，路线已经说完了。',
          effects: ['flag a2x_iacob_ahead'],
        },
      },
      {
        text: '把他讲的这门手艺从头捋一遍',
        once: true,
        check: { skill: 'arcana', dc: 14, party: true, adv: 'flag.melcor_wise' },
        ok: {
          text: '口令，常令，收尾，三步都对。少了最前头那一步：头一句话是怎么放进人脑子里去的，他从头到尾没提。{?party.vezina:薇齐娜在本子上画了个空格。|}',
          effects: ['flag a2x_missing_link'],
        },
        fail: {
          text: '你问口令能不能换成别的话。他很耐心，拿马给你讲了一刻钟，从选驹讲到钉掌。慑心术的事你一点没多听着。{?party.liv:卡斯坦替你数了，你一共点了十一回头。|}',
          effects: ['approval liv -1'],
        },
      },
      {
        text: '收下通行文书',
        effects: ['flag iacob_favor'],
        result: '文书上的印泥是新调的。他送你们到门口，说路上要是见着他从前的学生，替他带声好。',
        goto: 'a2_04',
      },
      {
        text: '谢过他的茶，文书不收',
        effects: ['approval valeran +1', 'approval liv +1'],
        result: [
          '他把文书折起来放回袖子里，一点不恼。',
          { speaker: '亚科布', text: '那就祝您在哨卡上运气好。白湾人不大认字，这一点对谁都公平。' },
        ],
        goto: 'a2_04',
      },
    ],
  },

  a2_04: {
    id: 'a2_04',
    title: '去乌霜领的路',
    loc: '阿德尼卡平原',
    date: '1023年银现月',
    text: [
      '出了卡斯托纳斯往西北，是阿德尼卡的平原。这地方马比人多。骑士道就是从这片草里讲出来的：两家争一口井，各出一个人，骑着马对冲，赢的喝水。',
      '路边的瞭望塔空了，一座接一座。收税的卡子里有一副骨头，半埋在去年的落叶底下，身上的号衣认不出是哪一家的。',
      '平原上的人见了外乡人，先问怎么看凯伦·长枪。他是黑卡斯塔诺的将军，替皇帝打赢了莫尔班平原，后来掉头拉起自由卡斯塔诺，死在了试炼山上。答得不对，井水要加钱。',
      { if: "origin == 'dameria'", text: '莫尔班平原那一仗，马里昂王子叫凯伦俘了去，在他帐里住过一阵。宫里的老人说，王子回来以后骑马的架势都改了，改成了黑卡斯塔诺的骑法。' },
      { if: 'party.valeran && party.liv', text: '瓦勒兰和卡斯坦为这个人从第一座塔吵到了第九座塔。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，他向皇帝发过誓。誓就是誓。后来救了多少人，那是另一本账。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '他效忠的是我爹，要骂也轮不到你。你爹冲的就是他的阵，冲输了。你这是替你爹骂街。' },
    ],
    choices: [
      {
        text: '朝路上那队蓝宝石之眼的巡骑打旗号',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        once: true,
        effects: ['flag a2x_white_flag', 'rep escann +1'],
        result: '领头的认得你剑柄上那只蓝眼睛。他们留下一面白旗和一位见证骑士：有这两样，围城营地里没人能说你裁得不合规矩。见证骑士姓什么你没听清，他的马叫“公道”。',
      },
      {
        text: '答：守誓要紧，他背了就是背了',
        effects: ['approval valeran +1', 'approval liv -1'],
        result: '井边的老头收了你两个铜板的水钱，没加价。{?party.liv:卡斯坦一下午没同你并排走。|}',
        goto: 'a2_04b',
      },
      {
        text: '答：他救的人比他背的誓多',
        effects: ['approval liv +1', 'approval valeran -1'],
        result: '井边的老头没收你的水钱，还多打了一桶饮马。{?party.valeran:瓦勒兰把这句话一字不差写进了信里。|}',
        goto: 'a2_04b',
      },
      {
        text: '答：他死在山上了，账清了',
        effects: ['approval vezina +1'],
        result: '井边的老头琢磨了半天，照原价收了钱。{?party.valeran && party.liv:瓦勒兰和卡斯坦一起转过头来看你，都不满意。|}{?party.vezina:薇齐娜在本子上记了一笔，记完很轻地“嗯”了一声。|}',
        goto: 'a2_04b',
      },
    ],
  },

  a2_04b: {
    id: 'a2_04b',
    title: '平原上的夜',
    text: [
      '夜里在一座空塔底下扎营。{?party.barry:巴里开了一罐腌梨，说平原上没遮没拦，人得吃口甜的才睡得着。|}这是出城以来头一个能生火的晚上。',
      '后半夜，山梁那边有人唱歌。是军团行军的调子，几百条嗓子，齐得很。守夜的翻过山梁去看，那边只有草。',
      '歌一起，拴着的马全炸了。驮辎重的那匹挣得最凶，桩子已经松了。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是那是活人唱的，他们得有四百个。要是别的，我不知道该怎么数。' },
    ],
    first: ['rest short'],
    choices: [
      {
        text: '稳住马，别让它们挣断缰绳',
        check: { skill: 'animal', alt: ['survival'], dc: 13, party: true },
        ok: {
          text: '你摸着驮马的脖子，一下一下顺到它不抖。歌唱完第三段就没了。天亮清点，一样没少。',
          goto: 'a2_05',
        },
        fail: {
          text: '驮马挣断了缰绳往歌那边跑，翻过山梁就不见了。天亮在邻村另买了一匹，贵了十个金冠。卖马的说，这一带的马都听过那支歌。',
          effects: ['gold -10'],
          goto: 'a2_05',
        },
      },
      {
        text: '对马说两句它们听得懂的',
        tag: '游侠·德鲁伊',
        if: 'is.nature',
        result: '你用的是哄马驹的调子。马不抖了，耳朵却还朝着山梁那边，一直朝到天亮。',
        goto: 'a2_05',
      },
      {
        text: '把军团牌挂到塔门上，让他们唱',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck' && item.legion_token >= 1",
        effects: ['approval liv +1'],
        result: '歌唱到一半停了一停，换了一支，是军团收营的调子。马安静了。{?party.liv:卡斯坦跟着哼了两句，哼完说她没学过这支，是翅膀自己记得。|}天亮你把牌子摘下来，钉子是热的。',
        goto: 'a2_05',
      },
    ],
  },

  a2_05: {
    id: 'a2_05',
    title: '终结黑龙之战',
    art: 'ev_fireball',
    loc: '乌霜领外 · 围城营地',
    text: [
      '乌霜领在一道河湾里，城墙塌了一段，缺口拿木栅和冻住的沙袋堵着。城外的营火连成半个圈。开春了，河面的冰还没化透，人踩上去吱吱响。',
      '围城的有三路，外加一队永冻边区来的枪兵。白湾人的战帮占着上游，阿德安的狂热骑士占着大路，倒戈的黑卡斯塔诺人占着下游，离另外两家都远。三家的哨卡各查各的。',
      '他们给这场仗起了名字，叫“终结黑龙之战”。名字起好了，就差一个印：和约的监誓人盖一下，这场仗就合乎和约。',
      { if: 'is.god', text: '你走到哪一家的哨卡，哪一家的哨兵就把矛尖垂下去。三路人各派了人来请你进帐，三张请帖是同一个时辰到的。' },
    ],
    choices: [
      {
        text: '亮出亚科布开的通行文书',
        if: 'flag.iacob_favor',
        result: '白湾人的哨兵把文书倒着看了一遍，认出了印，放行。阿德安骑士的哨兵正着看了三遍，也放行，只是往后看你的眼神同看那枚印一样。',
        goto: 'a2_05b',
      },
      {
        text: '去上游找白湾人，他们认得你',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck' && flag.p_gave_legionary",
        result: '战帮的头领记得那个老兵是你交出来的。他先敬了你一碗酒，酒里有鱼腥味，然后亲自把你领进了大帐。{?party.liv:卡斯坦没碰她那一碗。|}',
        goto: 'a2_05b',
      },
      {
        text: '举起监誓印，叫哨卡让路',
        check: {
          skill: 'persuasion',
          dc: 13,
          adv: 'flag.a2x_white_flag || flag.a2x_court_read',
          mods: [{ if: 'rep.escann >= 3', n: 2, why: '东坎诺诸王认你' }],
        },
        ok: {
          text: '你说的是：和约的印来了，你们等的就是这个。哨兵想了想，是这么回事。',
          goto: 'a2_05b',
        },
        fail: {
          text: [
            '哨兵把印接过去，对着火看了看，还给你。',
            { speaker: '哨兵', text: '这礼拜来了两个监誓人，一个替城里说话，一个替城外说话，都叫我们轰走了。你替哪头？' },
            '你在哨卡外头的雪地里等到后半夜，花了十五个金冠，才有人肯去通报。',
          ],
          effects: ['gold -15'],
          goto: 'a2_05b',
        },
      },
      {
        text: '扛一袋燕麦，混在送粮的车队里进去',
        if: '!flag.god_half_sentence',
        check: { skill: 'deception', dc: 13 },
        ok: {
          text: '没人多看你一眼。进了营，你把燕麦放下，把印拿了出来。管粮的气得不轻，可燕麦他收下了。',
          goto: 'a2_05b',
        },
        fail: {
          text: '赶车的问这袋是谁家的粮，你答“阿德安骑士的”。那是白湾人的车。{?party.valeran:头一拳是瓦勒兰替你挨的。恕他直言，是您先撒的谎。|你挨了两拳。}印是后来从雪里刨出来的。',
          effects: ['hp -5'],
          goto: 'a2_05b',
        },
      },
    ],
  },

  a2_05b: {
    id: 'a2_05b',
    title: '要一个印',
    text: [
      '大帐是阿德安骑士的，桌子是白湾人抢来的，桌上的地图是黑卡斯塔诺人画的。地图上乌霜领已经分成了三块，颜色都涂好了。',
      { speaker: '狂热骑士的统领', text: '和约说仗打完了。城里那位还举着黑龙旗，所以对他来说没打完。请监誓人盖个印，我们替和约把它打完。' },
      '城里递出来的话只有一句，加雷克·乌霜亲笔：给我一场听证。听完了，你们照样可以攻城。',
      { if: 'party.liv', speaker: '卡斯坦', text: '里头那个算我兄弟。他不认，我认。你盖印之前先想想，往后还找不找我打酒。' },
      { if: 'party.barry', speaker: '巴里', text: '屠夫原是军团干的，城里那些人我一个也不想替他们说话。可我们威克斯有句老话：坟要挖得比恨深。先让人把话讲完，再挖不迟。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，三家是把地图画好了才来请印的。这印盖下去，证的是地图。' },
      { if: 'is.god', text: '帐里静了。统领把地图卷起来，又摊开，最后推到你面前：请神来断。城里不知怎么也知道了，城头上有人朝这边跪着。' },
    ],
    choices: [
      {
        text: '先看看这三家到底要什么',
        once: true,
        check: { skill: 'insight', dc: 14, party: true, adv: 'flag.a2x_court_read' },
        ok: {
          text: '三家要的是三块地，哪一块上都没给加雷克留站的地方。统领说“打完”的时候，白湾人的头领在磨一把剥皮用的小刀。',
          effects: ['flag a2x_siege_read'],
        },
        fail: {
          text: '你盯着统领看得久了些。他当你在挑他的毛病，摘了一只手套放在桌上。{?party.valeran:瓦勒兰替你把手套递了回去，赔了半天好话。|你费了半天口舌，才说清那不是挑战。}',
          effects: ['rep escann -1'],
        },
      },
      {
        text: '盖印：这场仗合乎和约',
        effects: ['flag siege_certified', 'rep escann +1', 'rep dragon -2', 'approval liv -1'],
        result: '蜡是热的，印是凉的，按下去“嗤”的一声。统领当场下令：天亮攻城。{?party.liv:卡斯坦出了帐，一整夜没回来。|}',
        goto: 'a2_06',
      },
      {
        text: '给加雷克一场听证，围城暂停',
        effects: ['flag siege_hearing', 'world mantle +1', 'rep dragon +2', 'rep escann -2'],
        result: '统领的脸一直红到盔沿底下。停战约写了三份，三家各按了手印，白湾人按的是血。城头上的黑龙旗降了半截，算是回礼。',
        goto: 'a2_06',
      },
      {
        text: '要一场听证，拿你自己替加雷克作保',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck'",
        effects: ['flag siege_hearing', 'world mantle +1', 'rep dragon +2', 'rep escann -1'],
        result: '你把军团牌摘下来，压在停战约上：他要是趁停战出城，你们先砍我。倒戈的那几位认得牌子上的番号，头一个按了手印。',
        goto: 'a2_06',
      },
      {
        text: '骑士裁决：两边各出一名斗士，输的认',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        effects: ['flag siege_duel', 'rep escann +1', 'approval valeran +1'],
        result: '这是凯伦·长枪定的规矩，帐里有一半人是他的旧部，没人好意思摇头。{?flag.a2x_white_flag:见证骑士把白旗插在了河滩上。|}统领问城里出谁。城里回话：人出不来，请监誓人代。',
        goto: 'a2_06',
      },
      {
        text: '叫两边都放下兵器',
        tag: '神',
        if: 'is.god',
        effects: ['flag siege_hearing', 'flag god_truce', 'world mantle +1', 'rep escann -2', 'var god_acts +1'],
        result: '你说：放下。他们放了，城里城外，连磨刀的那位也放了。兵器在河滩上堆了三堆。当夜三家各在自己营里搭了一座小庙，供的都是你，庙门都朝着另外两家。',
        goto: 'a2_06',
      },
    ],
  },

  a2_06: {
    id: 'a2_06',
    title: '缺口',
    art: 'ev_adeanic_war',
    loc: '乌霜领 · 城墙缺口',
    text: [
      '缺口有四丈宽，是去年冬天投石机砸的。碎石堆成一道斜坡，坡上冻着没人收的箭杆和半面盾。坡下就是河，冰面上凿了几个取水的窟窿，窟窿边上的冰最薄。',
      { if: 'flag.god_truce', text: '今夜缺口两边都没人站岗。兵器堆在河滩上，三堆，谁也没敢先去捡。城门从里头开了。加雷克·乌霜一个人走出来，走到你跟前停下，身后跟着一条瘸腿的猎狗。' },
      { if: '!flag.god_truce && flag.siege_hearing', text: '停战约的墨干了才两天。入夜以后，大路那边的营火一盏一盏灭了，灭得很齐。阿德安的狂热骑士不认这场听证：照他们的经，同黑龙讲和的印不算印。' },
      { if: '!flag.god_truce && !flag.siege_hearing && flag.siege_duel', text: '河滩上拿石灰画了一个圈，三十步见方。围城的三家推出来一位阿德安的骑士。照平原上的老规矩，一名斗士算一“枪”，连他带来的人一起算。城头上站满了人，没人出声。' },
      { if: '!flag.god_truce && !flag.siege_hearing && !flag.siege_duel', text: '天亮攻城。云梯搭上了缺口两侧的墙，白湾人从坡上往里涌。印是你盖的，照规矩你得跟进去看着：看他们进了城，是不是还照和约办事。坡顶上站着一排黑漆鳞甲。' },
      { if: 'party.vezina && !flag.god_truce', speaker: '薇齐娜', text: '城头上十九只乌鸦，比我们来得早。乌鸦先到的地方，一般有东西可吃。' },
    ],
    first: ['codex garrec', 'codex black_castanor'],
    choices: [
      {
        text: '听他说完',
        if: 'flag.god_truce',
        effects: ['flag garrec_king'],
        result: [{ speaker: '加雷克', text: '他们说我是神保下来的王。这名头我接了，因为我没有别的可接。棺材的事，我还是得求人。' }],
        goto: 'a2_07',
      },
      { text: '天黑以后，带人上缺口守着', if: '!flag.god_truce && flag.siege_hearing', goto: 'a2_06h' },
      { text: '走进石灰圈', if: '!flag.god_truce && !flag.siege_hearing && flag.siege_duel', goto: 'a2_06d' },
      { text: '跟着攻城的人上坡', if: '!flag.god_truce && !flag.siege_hearing && !flag.siege_duel', goto: 'a2_06c' },
    ],
    next: 'a2_06c',
  },

  a2_06h: {
    id: 'a2_06h',
    title: '撕了的停战约',
    text: [
      '他们没举火把，马蹄上裹了麻布。走在最前头的骑士把停战约挑在枪尖上，过河的时候抖了抖，纸掉进了取水的窟窿里。随军祭司跟在后头念经，念的是给黑龙送葬的那一段。',
      '缺口上守着的黑卡斯塔诺兵只有十来个，一半没有鞋。带队的百夫长看了看你，又看了看你那枚印，把自己的位置让出来半步。',
      { if: 'party.liv', speaker: '卡斯坦', text: '四个打头的。我数过了，不够分。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，按了手印又撕约的，不配叫骑士。这一条我替阿德安的神写。' },
    ],
    combat: {
      title: '缺口夜战',
      intro: '狂热骑士踩着碎石坡往上冲，盔缨上还结着霜。',
      enemies: [
        { id: 'knight', name: '阿德安的狂热骑士' },
        { id: 'man_at_arms', n: 2, name: '骑士的扈兵' },
        { id: 'war_priest', name: '念经的随军祭司' },
      ],
      allies: [{ id: 'bc_legionary', name: '守缺口的百夫长' }],
      specials: [
        {
          id: 'ford',
          name: '把他们引上冰河渡口',
          desc: '取水窟窿边上的冰最薄，穿板甲的站不住',
          check: { skill: 'survival', dc: 13, adv: 'flag.a2x_siege_read' },
          success: { text: '你退到窟窿边上，等他们追过来。冰面先响了一声，然后整片塌了下去，穿板甲的沉得最快。', dmgAll: '2d6', type: 'cold', applyAll: { cond: 'chilled', turns: 2 } },
          fail: { text: '你自己先踩进了窟窿，一条腿湿到胯。', selfDmg: '1d6', type: 'cold' },
        },
        {
          id: 'ladder',
          name: '推云梯',
          desc: '白天搭上来的云梯还靠在坡顶，顺着碎石坡推下去',
          check: { skill: 'athletics', dc: 13 },
          success: { text: '云梯顺着碎石坡滑下去，把往上冲的人扫倒了一片。', dmgAll: '2d6' },
          fail: { text: '梯脚冻在了石头上。你没推动，肩膀上先挨了一下。', selfDmg: '1d6' },
        },
      ],
      xp: 350,
      win: { effects: ['flag garrec_king'], goto: 'a2_07' },
      lose: { effects: ['flag garrec_exile', 'flag a2x_carried'], goto: 'a2_07' },
    },
  },

  a2_06c: {
    id: 'a2_06c',
    title: '坡顶的盾墙',
    text: [
      '坡顶是三个军团兵，盾挨着盾，把缺口最窄的地方堵死了。他们身后的街上，有女人在往车上搬锅。',
      '白湾人压在坡上上不去，后头的还在往前挤。有人回头冲你喊：监誓人，你的印，你来开路。',
      { speaker: '军团兵', text: '皇帝没下令解散。你们谁下的？' },
      { if: 'party.liv', text: '卡斯坦落在你旁边，斧子没举起来。她说对面那面盾上的番号她认得，她小时候在那个营里偷过酒。' },
    ],
    combat: {
      title: '坡顶的盾墙',
      intro: '三面盾往前撞了一步，碎石从你脚边滚下坡去。',
      enemies: [{ id: 'bc_legionary', n: 3, name: '守缺口的军团兵' }],
      specials: [
        {
          id: 'ladder',
          name: '推云梯',
          desc: '把墙边的云梯横着推倒，砸他们的盾墙',
          check: { skill: 'athletics', dc: 13 },
          success: { text: '云梯横着倒下去，砸在三面盾上。', dmgAll: '2d6' },
          fail: { text: '云梯倒错了方向，压住的是你自己这边的人，还有你一只脚。', selfDmg: '1d6' },
        },
        {
          id: 'quarter',
          name: '喊话：放下盾，留你们的命',
          desc: '答应他们活着出城',
          check: {
            skill: 'persuasion',
            dc: 14,
            party: true,
            mods: [
              { if: "origin == 'ebonmarck'", n: 2, why: '他们认得你的军团牌' },
              { if: "faction == 'sapphire'", n: 2, why: '蓝宝石之眼的规矩：赢了要留人' },
            ],
          },
          success: { text: '中间那个先把盾放下了。他说这句话他等了快八年，从沼泽堡一直等到这儿。', end: 'win' },
          fail: { text: '“上一个叫我们放下兵器的是皇帝。他说完就死了。”' },
        },
      ],
      xp: 350,
      win: { goto: 'a2_06b' },
      lose: { effects: ['flag garrec_dead', 'flag a2x_carried'], goto: 'a2_07' },
    },
  },

  a2_06b: {
    id: 'a2_06b',
    title: '北门',
    text: [
      '城破了一半。白湾人在南城抢，阿德安的骑士在主街上列队，等着进大厅拿人。北门还在加雷克手里。他在门洞里上马，身边剩下六十来骑。他哥哥乌尔维克在骂人，骂的是所有人。',
      '加雷克二十五六岁，脸上有一道新口子，还没顾上擦。他认出了你的印。',
      { speaker: '加雷克', text: '北边是永冻边区，从前是我家的。我带人冲过去，冲得过去就有地方站，冲不过去也算死在自家地里。监誓人，你的印管不管得了一道门？' },
      { if: 'party.liv', speaker: '卡斯坦', text: '管得了。你别看我，看他。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，印是盖给攻城的。您现在拿它去拦攻城的，我照实写，写出来不好看。' },
    ],
    choices: [
      {
        text: '看着他带人往北冲',
        effects: ['flag garrec_dead'],
        result: '他们出了北门，在雪地里排成楔形。永冻边区的枪兵等在河对岸。你在城头上看见楔形的尖先慢下来，然后散了。傍晚乌尔维克带回来四十骑，和一副盖着黑龙旗的担架。',
        goto: 'a2_07',
      },
      {
        text: '拿印压住北门，放他和乌尔维克走山路',
        effects: ['flag garrec_exile', 'rep dragon +1', 'rep escann -1'],
        result: '你站在门洞里，把印举着。阿德安的骑士赶到的时候，北门外只剩马蹄印，往山里去了。统领隔着三步看了你很久，往你脚边吐了一口。',
        goto: 'a2_07',
      },
    ],
  },

  a2_06d: {
    id: 'a2_06d',
    title: '石灰圈',
    text: [
      '规矩是见证人念的：两边各出一名斗士，各带自己的枪组。斗士倒了，这一边就输。出了圈的不许再进。{?flag.a2x_white_flag:念规矩的是蓝宝石之眼那位见证骑士，他的马拴在白旗底下。|念规矩的是个阿德安的老祭司，念错了两处，没人纠正他。}',
      '对面的骑士报了家名，一共十一个字，祖上三代都在里头。他的两个扈从一人抱着三根枪。圈的一角压着河冰，石灰画到冰上就洇开了。',
      { speaker: '围城一方的斗士', text: '我替和约出战。你替谁？' },
      { if: 'party.liv', speaker: '卡斯坦', text: '替我兄弟。你就这么答，酒钱算我的。' },
    ],
    combat: {
      title: '骑士裁决',
      intro: '他放平了枪。两个扈从往两边散开。',
      enemies: [
        { id: 'knight', name: '围城一方的斗士', hpMult: 1.5 },
        { id: 'man_at_arms', n: 2, name: '斗士的扈从' },
      ],
      pcMustStand: true,
      fleeable: false,
      specials: [
        {
          id: 'ford',
          name: '把他引到压着河冰的那一角',
          desc: '板甲在薄冰上站不住',
          check: { skill: 'survival', alt: ['acrobatics'], dc: 13 },
          success: { text: '他追过来，一只脚踩穿了冰，半条腿卡在窟窿里。', dmgAll: '2d6', type: 'cold', applyAll: { cond: 'prone', turns: 1 } },
          fail: { text: '滑倒的是你。', selfDmg: '1d6' },
        },
        {
          id: 'salute',
          name: '照凯伦的规矩，先行一礼',
          desc: '他得回礼，回礼的时候枪尖朝下',
          check: { skill: 'performance', alt: ['persuasion'], dc: 13, mods: [{ if: "faction == 'sapphire'", n: 2, why: '这是你们团里的礼' }] },
          success: { text: '他回了礼。枪尖垂下去的那一下，你已经到了他跟前。', applyAll: { cond: 'exposed', turns: 2 } },
          fail: { text: '他没回礼。他说礼是行给骑士的。' },
        },
      ],
      xp: 350,
      win: { effects: ['flag garrec_king'], goto: 'a2_07' },
      lose: { effects: ['flag garrec_exile', 'flag a2x_carried'], goto: 'a2_07' },
    },
  },

  a2_07: {
    id: 'a2_07',
    title: '一口棺材',
    loc: '乌霜领',
    text: [
      { if: 'flag.garrec_king', text: '乌霜领的大厅里挂着黑龙旗，旗角叫烟熏黄了。加雷克坐的那张椅子没有扶手，从前是他父亲行猎时歇脚用的。乌霜边区剩下的几位领主刚在这儿重新发过誓，兵器在石板地上顿出来的白印子还没扫。' },
      { if: '!flag.garrec_king && flag.garrec_exile', text: '北门外的雪地里，六十来骑已经上了马。加雷克没上，他牵着缰绳等你。乌尔维克在队伍前头来回地走，嫌他弟弟话多。' },
      { if: '!flag.garrec_king && !flag.garrec_exile', text: '加雷克的担架停在大厅当中，盖着黑龙旗。乌尔维克坐在担架边上磨一把斧子，磨一下，看你一眼。寒行军明早动身，往北，去乌尔维克斯滕。' },
      { if: 'flag.a2x_carried', text: '你是叫人从缺口上抬下来的，醒过来头一样看见的就是这面旗。' },
      { if: 'flag.garrec_king || flag.garrec_exile', speaker: '加雷克', text: '家父三十七年没做过自己的主。你们恨他，我不拦。我只要一口棺材，和一个准日子。' },
      { if: 'flag.garrec_king || flag.garrec_exile', speaker: '加雷克', text: '他倒在沼泽堡，尸首叫活下来的兵抬走了，往北。{?flag.garrec_king:我的人一出城就得打仗|我这一走就回不来了}，你的印哪儿都去得。替我把他找回来。' },
      { if: '!flag.garrec_king && !flag.garrec_exile', speaker: '乌尔维克', text: '我弟弟临走交代了一件事，交代给你，没交代给我。他说监誓人欠乌霜家一场听证，还不上，就还一口棺材。我爹的。' },
      { if: '!flag.garrec_king && !flag.garrec_exile', speaker: '乌尔维克', text: '他倒在沼泽堡，尸首叫人往北抬走了。找着了，埋哪儿随你。别叫我听说埋得寒碜。' },
      { if: "origin == 'wex' && flag.p_wex_buried_legionary && (flag.garrec_king || flag.garrec_exile)", speaker: '加雷克', text: '我听说了，你在威克斯埋过家父的一个兵，照规矩埋的。这句谢，我替他说。' },
      { if: "origin == 'ebonmarck' && flag.p_gave_legionary && (flag.garrec_king || flag.garrec_exile)", speaker: '加雷克', text: '你交出去的那个老兵，后来怎样了？……算了，别告诉我。' },
      { if: 'is.god && (flag.garrec_king || flag.garrec_exile)', speaker: '加雷克', text: '还有一件事，只求这一件。请您说一句：家父那些年，不是他自己。您说了，就没人能上诉。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我跟着去。找着了，我得看他一眼。就一眼，看完了我才知道往后这酒该怎么喝。' },
    ],
    first: ['quest emperor_body start', 'quest liv_claim start', 'codex castan_liii'],
    choices: [
      {
        text: '当面讨“屠夫”埃尔拉克那笔债',
        tag: '威克斯',
        if: "origin == 'wex' && (flag.garrec_king || flag.garrec_exile)",
        once: true,
        effects: ['flag elrac_debt_paid', 'rep wex +2', 'approval barry +2'],
        result: '加雷克叫人取来一只铁皮箱，里头是埃尔拉克军团的名册，978 年银现月那一页折着角。他在一张纸上写：屠夫原的事是军团干的，乌霜家认。写完按了印。{?party.barry:巴里把那张纸看了三遍，叠好，半天才想起来问人家吃了没有。|}',
      },
      {
        text: '找乌尔维克讨“屠夫”埃尔拉克那笔债',
        tag: '威克斯',
        if: "origin == 'wex' && !flag.garrec_king && !flag.garrec_exile",
        once: true,
        effects: ['flag elrac_debt_paid', 'rep wex +1', 'approval barry +1'],
        result: [
          '乌尔维克把一本名册摔在桌上，灰扬起来老高。',
          { speaker: '乌尔维克', text: '埃尔拉克 1006 年就死了。他的兵死了一多半，剩下的都在这本册子上。我只有这个，你要就拿走，不要就滚。' },
        ],
      },
      {
        text: '说那句话：他那些年，不是他自己',
        tag: '神',
        if: 'is.god && (flag.garrec_king || flag.garrec_exile)',
        once: true,
        effects: ['rep dragon +2', 'rep escann -2', 'var god_acts +1'],
        result: '你说了。加雷克把脸埋进手里，肩膀抖了很久。这句话三天传到卡斯托纳斯，十天传到安本科斯特。东坎诺恨了四十年的那个人忽然没了。恨还在，一时没处放，有一些就放到了你头上。',
      },
      {
        text: '答应卡斯坦：找着了，带你看他一眼',
        if: 'party.liv',
        effects: ['approval liv +1'],
        result: '她“嗯”了一声，把酒囊的塞子按紧了。这是你头一回见她把没喝完的酒收起来。',
        goto: 'a2_08',
      },
      {
        text: '只对她说：到了再看',
        if: 'party.liv',
        effects: ['approval vezina +1'],
        result: [
          { speaker: '卡斯坦', text: '到了再看。行，掌玺大臣说话就是滴水不漏。' },
          { if: 'party.vezina', text: '薇齐娜的本子上有一栏叫“信口许诺”。这一回她没往里添字。' },
        ],
        goto: 'a2_08',
      },
    ],
    next: 'a2_08',
  },

  a2_08: {
    id: 'a2_08',
    title: '沼泽堡',
    loc: '沼泽堡 · 瞭望塔',
    date: '1023年哈兰娜月',
    text: [
      '沼泽堡的白石头在泥沼上立了一千五百年，没塌，只是往西歪了一点。蛙叫得人说话要抬嗓门。旗换过了，守军没全换。',
      '瞭望塔顶上坐着布罗恩费尔德队长：一条木腿，一件旧斗篷，一把水壶坐在炭上。塔底下的墙根蹲着个独眼老兵，脖子上拿皮绳挂着军团牌，手里攥着一坨拧成麻花的铁。他说那是他的剑。',
      { speaker: '布罗恩费尔德', text: '水开了再说。' },
      { speaker: '布罗恩费尔德', text: '皇帝后脑挨了一记，醒了，喊两边都停手。真停了一口气的工夫。然后术士王指着他，说了一个字。' },
      { speaker: '布罗恩费尔德', text: '我没听见，我是觉出来的，天地眨了一下眼。没有闪电，没有火。人就倒了。' },
      '活下来的几个兵抬着他往北走了。这几年堡里还陆续少过别的尸首，都是当年没来得及埋的。夜里少的，没人看见是谁抬的。',
      { if: "origin == 'ebonmarck' && flag.p_laid_arms", text: '队长认出了你的番号，拿水壶同你的水囊碰了一下。“放下兵器的那一拨。我也是。”' },
      { if: "origin == 'ebonmarck' && flag.p_fought_on && !flag.p_laid_arms", speaker: '布罗恩费尔德', text: '那天往前冲的都烧没了。你是怎么活下来的？' },
      { if: 'is.halfling', text: '队长看了看你的个头，把炭盆边的矮凳让给你，自己坐到了垛口上。' },
      { if: 'party.liv', text: '卡斯坦趴在垛口上问是哪一块泥。队长拿木腿指了指。她就一直看着那一块，酒囊在手里，没拔塞子。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '七只。沼地上空不该有七只乌鸦，这儿早就没东西可吃了。要是还有（我说的是要是），那是新添的。' },
      { if: 'is.god', text: '独眼老兵把那坨铁举到你面前，问您能不能把它捋直。你伸了手，他又缩了回去：“算了。直了我就认不出它了。”' },
    ],
    first: ['quest emperor_body stage 2', 'codex bal_mire', 'codex the_word'],
    choices: [
      {
        text: '请队长把抬走尸首的事说细些',
        if: "origin != 'ebonmarck'",
        once: true,
        check: {
          skill: 'persuasion',
          dc: 13,
          party: true,
          mods: [
            { if: 'rep.dragon >= 3', n: 2, why: '黑龙的老兵信得过你' },
            { if: 'flag.siege_hearing', n: 1, why: '你给过加雷克一场听证' },
          ],
        },
        ok: {
          text: '他给你也倒了一碗水。抬尸首的有五个人，领头的是个管旗的，走的北堤。“他们走得不慌。慌的人不会记得带上冠。”',
          effects: ['flag a2x_brohnfeld'],
        },
        fail: {
          text: [
            '他把水壶从炭上提下来，没给你倒。',
            { speaker: '布罗恩费尔德', text: '上一拨来问的人，也说是替他儿子问的。' },
            '他只肯说往北。别的，你自己去对。',
          ],
          effects: ['rep dragon -1'],
        },
      },
      {
        text: '把军团牌放在他的炭盆边上',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck'",
        once: true,
        effects: ['flag a2x_brohnfeld'],
        result: '他看了牌子，又看了你，给你倒了水。抬尸首的有五个人，领头的是个管旗的，走的北堤。“他们是带着冠走的。慌的人不会记得带冠。”',
      },
      {
        text: '把队长、老兵和守军的说法对到一起',
        once: true,
        check: { skill: 'history', dc: 14, party: true, adv: 'flag.a2x_brohnfeld' },
        ok: {
          text: '三个人说了三条路，对到一起只剩一条：出北堤，碰上艾伦河，顺河往东，进大森林。那边有旧帝国的驿道，抬着一副担架也走得动。',
          effects: ['flag a2x_alen_route'],
        },
        fail: {
          text: '你把三个人的说法对出了四条路。雇来的向导领着你在堤上白转了一天，工钱照收。',
          effects: ['gold -10'],
        },
      },
      {
        text: '下到泥地里看车辙',
        once: true,
        check: { skill: 'perception', dc: 13, party: true },
        ok: {
          text: '北堤的烂泥里有车辙，不止一道，有新有旧，最新的不出一个月。是重车，往南走的，进沼地深处。同屠夫原雾里那几道是一个方向。',
          effects: ['flag a2x_ruts'],
        },
        fail: {
          text: '你一脚踩进了泥窝子，陷到大腿。{?party.liv:卡斯坦把你拔出来的时候笑得翅膀直抖。|守军拿长杆把你捅了出来。}车辙没看成，靴子丢了一只。',
          effects: ['hp -4'],
        },
      },
      {
        text: '对着守军念一遍那句旧口令',
        if: 'flag.knows_watchword',
        once: true,
        effects: ['approval barry -1', 'approval vezina +1'],
        result: '院子里四十来个人，都在吃饭。你念完，有两个放下碗站了起来，面朝南，站得笔直，别人推也不动。半炷香以后他们坐下接着吃。问刚才怎么了，一个说腿麻。{?party.barry:巴里把脸转开了。|}{?party.vezina:薇齐娜记的是：两个，朝南。|}',
      },
      { text: '下塔，去沼里那座奈拉特的神龛', goto: 'a2_09' },
    ],
  },

  a2_09: {
    id: 'a2_09',
    title: '奈拉特的碗',
    art: 'ev_priest_phantom',
    loc: '沼泽堡外 · 沼中神龛',
    text: [
      '神龛半截沉在水里，进门要下三级台阶，最后一级在水面底下。管事的祭司裹着灰布，一身沼水和没药味。他说皇帝没有坟，可这片地喝了他的死，有时候会说两句。',
      '他领你们下到龛底，端出一只陶碗。碗里是沼里舀的黑水，一点光不反。',
      { speaker: '祭司', text: '往碗里看，看得见死人去了哪儿。三十个金冠。没钱也行：龛底下淹着三个军团的兵，泡了快八年了。你们替我捞上来埋了，这一碗算我请。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我不看。我怕看见的是他年轻时候的样子，那我往后没法骂他了。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我多一句嘴。钱我们出得起，可人还是该捞。我带了干净布。' },
      { if: 'is.elf', text: '碗沿上那一圈纹路你认得出路数：拿死水照死人，是很老的法子，比这座神龛老得多。' },
      { if: 'is.god', text: '你探头往碗里看。黑水一下清到了底，碗底躺着三枚铜板和一只小蛙。祭司把碗端了回去：“它照不出您来。您还是得付钱，或者下水。”' },
    ],
    choices: [
      {
        text: '看懂碗里到底是什么',
        once: true,
        check: { skill: 'religion', alt: ['arcana'], dc: 14, party: true, adv: 'is.elf' },
        ok: {
          text: '水只是个引子。碗认的是“没埋好”这三个字：哪具尸首还没入土，它就往哪边偏。它偏向东北，偏得很稳。',
          effects: ['flag a2x_bowl_read'],
        },
        fail: {
          text: '你看了很久，看见的是自己的脸，比平日老十岁。祭司说人人头一回都这样。你不信邪又看了一回，他另收了五个金冠。',
          effects: ['gold -5'],
        },
      },
      {
        text: '问他：这只碗最近还给谁看过',
        once: true,
        check: {
          skill: 'insight',
          dc: 15,
          party: true,
          adv: 'flag.a2x_ruts',
          mods: [{ if: "origin == 'ebonmarck' && flag.p_old_coin", n: 2, why: '你听说过有人拿旧金币打听皇帝' }],
        },
        ok: {
          text: [
            '他整了整袖口，整了两回。',
            { speaker: '祭司', text: '去年秋天来过一位。问的也是那位皇帝，付的是旧帝国的金币，足色。他看完碗没往北走，往南去了。身上的没药比我还重。' },
          ],
          effects: ['flag knows_myrrh'],
        },
        fail: {
          text: '他说奈拉特的碗不记来客，只记死人。说完把碗往怀里收了收，先收了你五个金冠的问话钱。',
          effects: ['gold -5'],
        },
      },
      {
        text: '付三十个金冠，往碗里看',
        cost: { gold: 30 },
        result: '黑水里先是泥，然后是树，很老的林子。树底下一座白石头的房子，屋顶塌了一角，有烟。祭司说那是头领林地，旧帝国的驿站。{?flag.a2x_bowl_read:碗偏的也是那个方向。|}',
        goto: 'a2_10',
      },
      {
        text: '下水，把龛底那三个兵捞上来埋了',
        check: { skill: 'athletics', dc: 13, party: true },
        ok: {
          text: '三个人还穿着鳞甲，沉得很。你们在高处挖了三个坑，祭司念了经，没收钱。然后他让你看了碗：很老的林子，树底下一座白石头的驿站，有烟。',
          effects: ['rep dragon +1'],
          goto: 'a2_10',
        },
        fail: {
          text: '第三个卡在石缝里。你呛了两口沼水才把他拽出来，夜里发了烧。坑照样挖了，经照样念了。碗里是一片老林子，一座白石头的驿站，有烟。',
          effects: ['hp -4', 'rep dragon +1'],
          goto: 'a2_10',
        },
      },
      {
        text: '不借他的碗，自己舀一捧水照',
        tag: '施法者',
        if: 'is.caster && !is.god',
        check: { abil: 'con', dc: 13, save: true, mods: [{ if: 'flag.a2x_bowl_read', n: 2, why: '你看懂了这只碗' }] },
        ok: {
          text: '你舀了一捧沼水，照着他的法子问。水在你手心里凉得扎骨头，然后亮了一下：林子，白石头，烟。祭司的脸色不大好看。这一行最怕同行。',
          goto: 'a2_10',
        },
        fail: {
          text: '水在你手心里凉得扎骨头，一直凉到肩膀。你看见了林子和白石头，然后吐了。祭司递过来一块布，说自学的都这样。',
          effects: ['hp -5'],
          goto: 'a2_10',
        },
      },
      {
        text: '报上你的神殿，请他看在同行的面上',
        tag: '旧礼',
        if: "faction == 'rites'",
        result: '他问你最近一场葬礼是给谁办的。你答了。他把碗推过来，没提钱。碗里是一片老林子，一座白石头的驿站，屋顶有烟。',
        goto: 'a2_10',
      },
      {
        text: '不看碗，照你对出来的路走：顺艾伦河往东',
        if: 'flag.a2x_alen_route',
        result: '祭司耸了耸肩，说河本来就往那边流，这不用问奈拉特。他把碗端回去的时候洒了一点，洒出来的水往东北淌。',
        goto: 'a2_10',
      },
    ],
  },

  a2_10: {
    id: 'a2_10',
    title: '头领林地',
    art: 'ev_the_covenant',
    loc: '头领林地 · 夜',
    date: '1023年苏伦月',
    text: [
      '艾伦河边的崖越走越陡，路只好拐进林子。头领林地里没有鸟叫。树老得枝杈都朝下长，马不肯走在前头。',
      '天黑前你们找到一处旧营地：一根烧黑了头的旗杆插在泥里，旁边散着锅、勺、一把锈穿的剑和啃过的骨头。有人在这儿守过一阵，后来走得很急。',
      '月亮上来的时候，营火变了颜色，烟是绿的。外圈守夜的只喊出半声。林子里出来的东西有战马那么高，眼睛是黄的，最大的那头嘴边的毛全白了。它没看火，先看人，一个一个看过去。',
      { if: 'item.legion_token >= 1', text: '它的鼻子在你胸口那块军团牌上停住了。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '屠兽者烧过它们的林子，它们记了一千六百年，比矮人还能记。好，今天正主儿到了，别咬错人。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这不是狼。狼不排队。' },
      { if: 'is.harpy && party.liv', speaker: '卡斯坦', text: '你上树，我也上树。让骑马的在底下扎圈。' },
    ],
    combat: {
      title: '头领林地的夜',
      intro: '老狼仰头号了一声，林子里四面都有回应。',
      enemies: [{ id: 'headman_wolf' }, { id: 'werewolf' }, { id: 'grey_wolf', n: 2 }],
      specials: [
        {
          id: 'circle',
          name: '长矛围圈',
          desc: '背靠营火，矛尖朝外，围成一圈',
          check: { skill: 'athletics', dc: 14, party: true, adv: 'is.martial' },
          success: { text: '圈扎住了。扑上来的头一个撞在矛尖上，退回去舔伤，后头的下嘴都轻了。', applyAll: { cond: 'weakened', turns: 2 } },
          fail: { text: '圈有个口子，口子正对着你。', selfDmg: '1d8' },
        },
        {
          id: 'firering',
          name: '把营火引成一个圈',
          desc: '法师的办法：叫火绕着营地烧',
          check: { skill: 'arcana', dc: 15, adv: 'is.caster' },
          success: { text: '火从火堆里站起来，绕着营地走了一圈。撞上去的狼带着一身火跑进了林子。', dmgAll: '2d6', type: 'fire', applyAll: { cond: 'frightened', turns: 2 } },
          fail: { text: '火只听了你一半，烧着的是你们自己的帐篷。', selfDmg: '1d6', type: 'fire' },
        },
        {
          id: 'baggage',
          name: '把辎重扔进火里',
          desc: '油、干粮、铺盖，烧得起来的全扔进去（值三十个金冠）',
          success: { text: '火头蹿起一人多高，照得林子里一片黄眼睛往后退。三十个金冠的东西烧了个干净。', dmgAll: '2d6', type: 'fire', effects: ['gold -30'] },
        },
        {
          id: 'torch',
          name: '抄起火把往它脸上捅',
          desc: '狼人的皮刀枪不入，火烧得动',
          once: false,
          check: { skill: 'athletics', alt: ['acrobatics'], dc: 12 },
          success: { text: '火把捅在它鼻子上，焦毛味冲得人睁不开眼。它往后一缩，伤口再也合不上。', dmgAll: '2d6', type: 'fire' },
          fail: { text: '它一爪子把火把拍进了泥里，顺手在你胳膊上留了三道。', selfDmg: '1d6' },
        },
      ],
      xp: 450,
      win: { goto: 'a2_10b' },
      lose: { effects: ['gold -40', 'flag a2x_wolves_lost'], goto: 'a2_10b' },
    },
  },

  a2_10b: {
    id: 'a2_10b',
    title: '天亮以后',
    text: [
      { if: '!flag.a2x_wolves_lost', text: '天亮了，人还站着。最大的那头钉在一根长矛上，血把落叶泡成了黑的。{?party.barry:巴里把伤号排成一排，挨个喂热汤，喂一个道一声对不住。|你们把伤号排成一排，挨个数。}' },
      { if: '!flag.a2x_wolves_lost', text: '辎重车没人动过。车底下趴着一头灰狼，肚皮贴地，耳朵往后抿着。伊迪丝坐在车辕上晃着腿。她说夜里它想上车，她说了句“下去”，它就下去了，一直趴到现在。' },
      { if: 'flag.a2x_wolves_lost', text: '你是在艾伦河边醒过来的。{?party.valeran:瓦勒兰把你从林子里拖了出来，拖了半里地，他自己的肩甲叫咬穿了。|有人把你从林子里拖了出来，拖了半里地。}行李丢了一半，营地还在冒烟。' },
      { if: 'flag.a2x_wolves_lost', text: '伊迪丝不见了一夜。天亮她自己从林子里走了回来，鞋是干的，身后跟着一头灰狼，隔着三步，不叫也不咬。她说她迷路了，问它河在哪边，它就领她来了。' },
      { if: 'party.vezina', text: '薇齐娜把本子翻到新的一页，写了一行，拿手盖住了。' },
      { if: '!party.vezina', text: '没人说话。几个兵悄悄往后挪了挪，离那辆车远了些。' },
    ],
    choices: [
      {
        text: '问伊迪丝：你是怎么同它说的',
        effects: ['approval vezina +1'],
        result: [
          { speaker: '伊迪丝', text: '就那么说的。我跟谁说，谁都听。狼也算“谁”吗？' },
          '没人答得上来。狼打了个哈欠。',
        ],
        goto: 'a2_11',
      },
      {
        text: '叫薇齐娜把那一页撕了',
        if: 'party.vezina',
        effects: ['approval vezina -1', 'approval barry +1'],
        result: [
          { speaker: '薇齐娜', text: '撕了它也发生过。要是往后有人问起（我说的是要是），你想让我说我没记，还是说我记了又撕了？' },
          '她撕了。撕下来的那页她没扔，折好放进了袖子里。',
        ],
        goto: 'a2_11',
      },
      {
        text: '什么也不问，给她盛碗热的',
        effects: ['approval barry +1'],
        result: '伊迪丝喝了两碗。狼等她喝完，站起来抖了抖毛，自己回林子里去了，走的时候没回头。',
        goto: 'a2_11',
      },
    ],
  },

  a2_11: {
    id: 'a2_11',
    title: '炖菜',
    art: 'ev_dark_forest',
    loc: '头领林地 · 白石驿站',
    text: [
      '林子深处有一道烟。烟底下是座白石头的驿站，叫藤和青苔吃掉了一半。门楣上刻着一条喷火的银龙，翅膀磨得快看不见了。屋顶塌了一角，烟就从那儿出去。',
      '屋里一个老人坐在火边，火烧的是松果。他看了你的脸很久，才拿下巴指了指石凳。',
      { speaker: '守砖人', text: '坐。锅里还有。' },
      '炖菜是萝卜、野葱和一种说不上名字的肉，很烫。他不报名字，也不问你们的。他问别的：外头如今谁管事，誓还算不算数，法师是不是还在给人看病，有的名字是不是不该大声说。每问一句，他都看着你把那一口咽下去。',
      { if: "origin == 'ebonmarck'", text: '他看见了你的军团牌，少问了三句。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，老人家，不该大声说的名字，我连小声说都嫌多。' },
      { if: 'party.barry', speaker: '巴里', text: '这里头搁了松子，对不对？对不住，我话多。我是说这锅炖得真好，火候是守出来的。' },
      '你问起皇帝。他拿勺子在锅里搅了很久。',
      { speaker: '守砖人', text: '没人给他套过什么。他二十三岁上的山，自己走到石头跟前，自己把誓说完的。有人伸手接住了，就这么回事。' },
      { speaker: '守砖人', text: '接的人有罪。说的人也有。我替他守着，守的是后一样。' },
      { if: 'is.god', text: '他给你也盛了一碗，看着你吃。你吃得不快不慢，一口没烫着。他把自己的勺子放下了。' },
      { if: 'is.god', speaker: '守砖人', text: '我试的是人。烫不烫嘴，咽不咽得下去，眼睛后头有没有人。你这样的，我没试过，我试不了。' },
    ],
    choices: [
      {
        text: '琢磨他到底在试什么',
        once: true,
        check: { skill: 'insight', dc: 14, party: true },
        ok: {
          text: '他问的话没有一句要紧。他看的是你怎么答：答得太快的，是背过的；一个字不差的，是有人替你答的。他在看你眼睛后头有没有人。',
          effects: ['flag a2x_keeper_read'],
        },
        fail: {
          text: '你当他是想打听外头的消息，就把两个王国怎么收税讲了一遍，讲得很细。他听完，往你碗里添了一勺，把刚才那句又原样问了一回。',
          effects: ['flag a2x_keeper_wary'],
        },
      },
      {
        text: '照实答他，一句不添',
        check: {
          skill: 'persuasion',
          dc: 15,
          adv: 'flag.a2x_keeper_read',
          mods: [
            { if: "origin == 'ebonmarck'", n: 3, why: '他认你的军团牌' },
            { if: 'flag.a2x_keeper_wary', n: -2, why: '你方才答岔了' },
            { if: 'flag.siege_hearing', n: 1, why: '你给过他儿子一场听证' },
          ],
        },
        ok: {
          text: [
            { if: '!is.god', text: '他问完了，半天没说话，往火里添了一把松果。' },
            { if: '!is.god', speaker: '守砖人', text: '你不是他的人。你还是……你。这就好，这说明没有全丢。' },
            { if: 'is.god', text: '你每一句都答得挑不出毛病。他听完摇了摇头。' },
            { if: 'is.god', speaker: '守砖人', text: '挑不出毛病的，我见过一个，在皇帝身后站了三十七年。我不赶你。我也不认你。' },
          ],
          goto: 'a2_11b',
        },
        fail: {
          text: [
            '有一句你答得太顺了。他的勺子在锅沿上停了一停。',
            { speaker: '守砖人', text: '天亮以后，林子外头的路好走。' },
            '他没再问别的。',
          ],
          effects: ['flag keeper_hostile'],
          goto: 'a2_11b',
        },
      },
    ],
  },

  a2_11b: {
    id: 'a2_11b',
    title: '又一碗',
    text: [
      '伊迪丝把碗舔干净了，顺口说了句还饿。',
      '老人拿起勺子，给她盛了满满一碗，递过去。然后他愣住了，低头看了看自己的手，把勺子放回了锅里。屋里只剩松果烧裂的声音。',
      { speaker: '守砖人', text: '这孩子是谁教的？' },
      { speaker: '守砖人', text: '{?flag.keeper_hostile:不用等天亮了。|我方才的话收回。}带上她，出去。现在。' },
      { if: 'party.liv', text: '卡斯坦的手按到了斧柄上。伊迪丝捧着那碗炖菜，没敢喝，也没放下。' },
      { if: 'party.vezina', text: '薇齐娜的炭笔停在本子上方，没落下去。' },
      { if: '!party.liv && !party.vezina', text: '伊迪丝捧着那碗炖菜，没敢喝，也没放下。门外的林子里有东西在走动。' },
    ],
    choices: [
      {
        text: '替她说话：没人教过她，她自己都不知道',
        effects: ['approval vezina +1', 'approval barry +1'],
        result: [
          '你说她十三岁，帐篷城里捡的，要一碗汤就有人给三碗，她一直当是自己讨人喜欢。',
          '老人看着伊迪丝。伊迪丝看着锅。',
          { speaker: '守砖人', text: '那就别让人教她。' },
          '他没再提赶人的事。{?flag.keeper_hostile:也没再同你说一个字。|}',
        ],
        goto: 'a2_12',
      },
      {
        text: '让她自己说',
        effects: ['approval liv +1'],
        result: [
          { speaker: '伊迪丝', text: '没人教。我跟谁说，谁都给。你不想给可以不给呀，我又没抢。' },
          '老人的手在膝盖上攥了一下，又松开。他说他不想给，可是给了，这才是他要赶人的缘故。说完他到底没站起来。',
        ],
        goto: 'a2_12',
      },
    ],
  },

  a2_12: {
    id: 'a2_12',
    title: '地砖下',
    loc: '白石驿站 · 夜',
    text: [
      { if: '!flag.keeper_hostile', text: '后半夜他站起来，走到屋角，跪下去，拿勺柄敲一块地砖。声音是空的。{?is.god:他是敲给伊迪丝听的，你只是也在屋里。|}' },
      { if: 'flag.keeper_hostile', text: '后半夜你叫撬东西的声音弄醒了。{?party.liv:卡斯坦跪在屋角，拿斧刃别一块地砖。|屋角有块地砖叫人别开了一条缝，敲上去是空的。}守砖人提着柴刀站在门口，没动，也没拦。' },
      '砖下是一个浅坑，铺着石灰和松针。里头躺着一个人，裹在军团的红斗篷里，瘦得只剩一把，胡子还是黑的。胸口压着一顶冠，乌钢的，不反光。',
      { speaker: '守砖人', text: '快八年了。我只求一件事：烧了他。别给他修坟，别让人知道埋在哪儿。坟是给人找的。' },
      { speaker: '守砖人', text: '你们不是头一拨。去年秋天来过一个人，一身没药味。他问遗体在哪，放了多久，烂到什么地步。皇帝还有个儿子活着，他一句没问。' },
      { if: "origin == 'ebonmarck' && flag.p_old_coin", text: '老人从灶台缝里抠出一枚金币给你看，是那人留下的饭钱。旧帝国的足色金币，同乌霜领城里有人拿来打听皇帝的那种，是一个模子。' },
      { if: 'party.vezina', text: '薇齐娜把“没药”两个字写下来，在底下画了两道。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '让我看看他的脸。' },
    ],
    first: ['flag knows_myrrh', 'flag liv_saw_body', 'quest emperor_body stage 3', 'quest canrec_trail start', 'codex castan_liii_2'],
    choices: [
      {
        text: '把斗篷掀开，让她看',
        if: 'party.liv',
        effects: ['approval liv +2'],
        result: [
          '她蹲下去看了很久。',
          { speaker: '卡斯坦', text: '比我想的矮。鼻子像。你们谁也别说不像。' },
          '她把酒囊里剩的酒倒在了坑沿上，一滴没留。',
        ],
        goto: 'a2_12b',
      },
      {
        text: '挡在前头：别看，他不是你想看的样子了',
        if: 'party.liv',
        effects: ['approval liv -3'],
        result: '她没同你争。夜里你听见屋角有动静，没起来。第二天她的眼睛是肿的，一整天没同你说一个字。封你的官她没撤，只是不叫了。',
        goto: 'a2_12b',
      },
    ],
    next: 'a2_12b',
  },

  a2_12b: {
    id: 'a2_12b',
    title: '乌钢冠',
    text: [
      '那顶冠比看上去沉。冠圈内侧磨得发亮，是三十七年戴出来的。它不能随便戴：戴它的人得先过十道试炼，这规矩比乌霜家老。',
      '守砖人说，抬皇帝来的五个兵里，有一个专管这顶冠，一路抱在怀里。他到这儿第三天死的，伤口烂了，死的时候冠还在怀里。',
      { if: 'party.liv', text: '卡斯坦的眼睛一直跟着你的手。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我说句不中听的。这东西出了这间屋，就有人要为它死。留在他胸口上，它只是件陪葬。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这顶冠在谁的行李里，恩特本一定想知道。我得写。' },
    ],
    choices: [
      {
        text: '把冠收进行李',
        effects: ['item +ebonsteel_crown', 'approval liv +1'],
        result: '你拿布包了三层。{?party.liv:卡斯坦说掌玺大臣管玺，顺手管管冠，天经地义。她说这话的时候没笑。|布包放在行李最底下，上头压着干粮。}',
        goto: 'a2_12c',
      },
      {
        text: '把冠留在他胸口上',
        effects: ['approval barry +1'],
        result: '你把他的两只手搭回冠上。守砖人看了你一眼，这是他今夜头一回正眼看你。',
        goto: 'a2_12c',
      },
    ],
  },

  a2_12c: {
    id: 'a2_12c',
    title: '皇帝的去处',
    text: [
      '天快亮了。守砖人把话又说了一遍：烧了他。加雷克要的是一口棺材和一个准日子。和约上关于死皇帝一个字也没写。',
      '能去的地方就这么几处。卡斯托纳斯西门外是乌霜家的坟园，头一位乌霜皇帝埋在那儿。北要塞在试炼山脚下，历代卡斯坦从那儿上山，照皇帝的规格办，只能在那儿。',
      '万神道最体面，那是葬给整个卡斯塔诺的。再不然，这片林子够深，这堆松果也够烧。',
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，埋在哪儿，哪儿往后就有人去磕头。您选的是往后谁去磕头。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '烧了他，我同你没完。别的随你。' },
    ],
    choices: [
      {
        text: '西门，葬进乌霜家的坟园',
        req: "flag.garrec_king || flag.garrec_exile || origin == 'ebonmarck'",
        reqText: '乌霜家没有活人能去开那座坟园了',
        effects: ['flag body_westgate', 'world mantle +1'],
        result: '你们拿驿站的门板钉了一口棺材。守砖人没拦，也没帮手，只把那件红斗篷重新给他裹了一遍，裹得比原先紧。',
        goto: 'a2_13',
      },
      {
        text: '北要塞，照皇帝的规格办',
        effects: ['flag body_citadel', 'world mantle +2', 'rep escann +1'],
        result: '信先走，棺材后走。北王国的回信只有一行：北要塞可以借，仪仗自备。',
        goto: 'a2_13',
      },
      {
        text: '万神道，葬给整个卡斯塔诺',
        effects: ['flag body_pantheon', 'world mantle +2', 'rep dragon +1'],
        result: '消息到卡斯托纳斯那天，万神道粥棚里的祭司把勺子放下，回去翻出了多年没穿的祭袍。',
        goto: 'a2_13',
      },
      {
        text: '就在这片林子里，悄悄埋了',
        effects: ['flag body_quiet', 'world mantle -1'],
        result: '坑挖在驿站后头第三棵老橡树底下，没立碑。守砖人说他记得住是哪一棵，他别的也没什么可记的。',
        goto: 'a2_13',
      },
      {
        text: '照守砖人的话，烧了他',
        effects: ['flag body_burned', 'world mantle -2', 'world unburied -2', 'rep dragon -2', 'approval liv -2'],
        result: '松果不够，守砖人把石凳边上的柴全搬了出来。火从后半夜烧到晌午。{?party.liv:卡斯坦站在上风口，一眼没看。|}',
        goto: 'a2_13',
      },
      {
        text: '把砖原样盖回去，谁也不告诉',
        effects: ['flag body_left', 'world unburied +1', 'quest emperor_body fail'],
        result: [
          '守砖人看着你把砖放平，拿脚踩实。他没骂你。',
          { speaker: '守砖人', text: '那我还得守多少年？' },
          '你答不上来。{?item.ebonsteel_crown >= 1:冠在你的行李里，比刚才沉。|}',
        ],
        goto: 'a2_14',
      },
    ],
  },

  a2_13: {
    id: 'a2_13',
    title: '葬礼',
    date: '1023年花终月',
    text: [
      '动身前，守砖人把他那把勺子给了你，勺柄上有一道敲地砖敲出来的沟。他说砖底下空了，勺子就只是勺子了。',
      { if: 'flag.body_westgate', text: '西门外的坟园里，头一位乌霜皇帝的石椁旁边新开了一个穴。莱恩王派了个管家，温斯坦王谁也没派。最后一排站着沼泽堡那个独眼老兵，手里攥着他那坨铁。' },
      { if: 'flag.body_westgate && flag.garrec_king', text: '加雷克带着乌霜边区的领主来了，黑龙旗打了一路。他扶棺的时候没戴手套。' },
      { if: 'flag.body_westgate && !flag.garrec_king && flag.garrec_exile', text: '加雷克是拿着一天的安全文书来的，天黑前得出城。他在穴边站满了这一天。' },
      { if: 'flag.body_citadel', text: '北要塞的校场上搭了灵台，朝着试炼山。温斯坦王亲自来了，站得比谁都直：替一位死皇帝办事，比招待一位活的便宜。克拉丽蒙德女王没来，托人带了一句话：埋深点。最后一排是万神道的祭司，没人请他们上台。' },
      { if: 'flag.body_pantheon', text: '万神道两边的石像底下都站了人。主祭的是卡斯特洛斯的祭司，和约以后，这是他们头一回当众办事，袍子上的折痕压了多年。两位王都来了，一个站路左，一个站路右，谁也没过中线。最后一排是把军团牌挂到衣服外头来的老兵。' },
      { if: 'flag.body_quiet', text: '夜里四个人抬，没点火把。坑在第三棵老橡树底下，守砖人领的路。填土的时候谁也没开口，只有铲子响。填平了，他拿松针把新土盖上，退后两步看了看，又盖了一层。' },
      { if: 'flag.body_burned', text: '火灭了以后，守砖人拿他那口炖菜的锅装灰，装了大半锅，盖上盖子，拿草绳捆了两道。他说等来年开春，他自己提到艾伦河边去倒，倒在水深的地方。' },
      { if: 'party.barry && !flag.body_burned', speaker: '巴里', text: '我们威克斯有句老话：坟要挖得比恨深。这一位，恨他的人多，得挖深些。对不住，我去看看大伙儿吃上没有。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。替一个当了三十七年傀儡的人办这一场，办给谁看？' },
    ],
    first: ['quest emperor_body done', 'item +stew_spoon'],
    enter: [
      { if: 'flag.body_westgate', then: ['loc 卡斯托纳斯 · 西门'] },
      { if: 'flag.body_citadel && !flag.body_westgate', then: ['loc 北要塞'] },
      { if: 'flag.body_pantheon && !flag.body_westgate && !flag.body_citadel', then: ['loc 卡斯托纳斯 · 万神道'] },
    ],
    choices: [
      {
        text: '主持葬礼，把该念的念全',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['world unburied -1'],
        result: '你照老规矩来：净手，涂油，报名字，报年号，问三遍有没有人替他说话。{?flag.body_burned:灰不好涂油，你涂在了锅盖上。|}第三遍的时候，后头有个声音说：有。',
      },
      {
        text: '照乌霜家的规矩办：斧子，盐，黑龙旗',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck'",
        once: true,
        effects: ['rep dragon +1'],
        result: "这是格鲁迪亚老家带来的规矩，会的人没几个了：一把斧子放右手，一撮盐放舌头底下，旗盖到胸口，不盖脸。{?class == 'cleric':经也是你念的。和约以后，你头一回穿着这身袍子站在人前。|}在场的黑卡斯塔诺人一个接一个，把拳头按在了心口上。",
      },
      {
        text: '念悼词',
        once: true,
        check: { skill: 'performance', alt: ['religion'], dc: 13, party: true, mods: [{ if: "faction == 'rites'", n: 2, why: '这是你的本行' }] },
        ok: {
          text: '你没夸他，也没骂他。你说他二十三岁上山，六十岁倒在泥里，中间三十七年的事，记在别人账上。{?flag.body_quiet || flag.body_burned:守砖人听完，点了一下头。|底下很静。有个老兵哭出了声，旁边的人没笑话他。}',
          effects: ['approval liv +1'],
        },
        fail: {
          text: '{?flag.body_quiet || flag.body_burned:你把他的年号说错了一位。守砖人替你改了，改完再没看你。|你念到“三十七年”，后排有人笑了一声。声音不大，传得很远。}',
          effects: [{ if: 'flag.body_quiet || flag.body_burned', then: ['approval liv -1'], else: ['rep escann -1'] }],
        },
      },
      {
        text: '答瓦勒兰：办给活人看，叫他们知道输家也有人埋',
        if: 'party.valeran && !flag.a2x_funeral_answered',
        once: true,
        effects: ['flag a2x_funeral_answered', 'approval valeran +1'],
        result: [{ speaker: '瓦勒兰', text: '恕我直言，这是我头一回听见一句站得住的理由。我照原话写回去。' }],
      },
      {
        text: '答瓦勒兰：办给他儿子看',
        if: 'party.valeran && !flag.a2x_funeral_answered',
        once: true,
        effects: ['flag a2x_funeral_answered', 'approval liv +1'],
        result: [
          { speaker: '瓦勒兰', text: '那么这是私事。恕我直言，私事不该用和约的印。' },
          { if: 'party.liv', speaker: '卡斯坦', text: '他有个儿子，还有个没上谱的闺女。两个人看，不算私事。' },
        ],
      },
      { text: '散了，往南去刀锋堡', goto: 'a2_14' },
    ],
  },

  a2_14: {
    id: 'a2_14',
    title: '刀锋堡',
    art: 'ev_excalibur',
    loc: '刀锋边区 · 刀锋堡',
    date: '1024年花始月',
    text: [
      '刀锋堡的大厅当中有一截石墩，墩上横着一把带鞘的剑。剑柄是龙骨磨的，柄头镶着一颗铜龙的牙。这就是卡林达尔。四年前克拉丽蒙德在试炼山上捡到它，拿它砍倒了术士王。',
      '今天石墩前跪着一个黑卡斯塔诺的百夫长，手是松开的。照刀锋边区的规矩，不认女王的人都请去拔一下这把剑。剑认他，他走人，还能来争王位；剑不认，他就瞎了。守刃僧说瞎不疼，瞎了的可以留下，给剑上油。',
      { speaker: '克拉丽蒙德', text: '他说刀锋边区是军团的南界，他只认卡斯坦，不认什么女王。那就让剑认一认他。监誓人来得巧，替我做个证。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '莫尔班平原那一仗，她同我爹的兵站一排。如今她拿这把剑给我爹的兵剜眼睛。这话你别替我传，我自己挑日子说。' },
      { if: 'is.god', text: '克拉丽蒙德看了你一会儿，把剑连鞘转了半圈，柄朝着你。' },
      { if: 'is.god', speaker: '克拉丽蒙德', text: '您先请。我想听听它怎么说。' },
    ],
    first: ['codex clarimonde', 'codex sapphire_eye'],
    choices: [
      {
        text: '握住剑柄，拔卡林达尔',
        if: 'is.god',
        once: true,
        effects: ['flag a2x_god_drew'],
        result: [
          '剑出鞘一半就亮了，亮得同刚出炉一样，厅里的人都拿手挡脸。你没瞎。',
          { speaker: '克拉丽蒙德', text: '它认您。它也认过别人，认过我。这说明不了什么。' },
        ],
      },
      {
        text: '拦下试剑：俘虏该审，不该瞎',
        if: "faction != 'sapphire'",
        check: {
          skill: 'persuasion',
          dc: 15,
          party: true,
          mods: [{ if: 'rep.escann >= 3', n: 2, why: '东坎诺诸王认你' }],
        },
        ok: {
          text: '你说和约管得着俘虏，管不着剑。她想了想，叫人把百夫长带了下去。“审可以。审完他要是还不认，剑还在这儿。”',
          effects: ['rep dragon +1', 'approval valeran +1'],
          goto: 'a2_14b',
        },
        fail: {
          text: [
            { speaker: '克拉丽蒙德', text: '和约上没写我的剑。' },
            '百夫长自己伸了手。剑出鞘一寸，厅里白了一下。等你再睁开眼，他还跪着，眼珠成了两颗煮过的蛋白。他没叫，只问了一句天是不是黑了。',
          ],
          effects: ['approval liv -1'],
          goto: 'a2_14b',
        },
      },
      {
        text: '以骑士团的名义拦下：赢了要留人',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        effects: ['rep dragon +1', 'approval valeran +1'],
        result: '她是凯伦·长枪的扈从出身，这句话是她师父的。她把手从剑鞘上拿开了。“留。留到他肯改口，或者我改主意。”',
        goto: 'a2_14b',
      },
      {
        text: '让他拔',
        effects: ['approval liv -1'],
        result: '百夫长握住了剑柄。剑出鞘一寸，厅里白了一下。等你再睁开眼，他还跪着，眼珠成了两颗煮过的蛋白。他没叫，只问了一句天是不是黑了。守刃僧上来扶他，领他去学怎么给剑上油。',
        goto: 'a2_14b',
      },
      {
        text: '替他拔',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck'",
        effects: ['rep escann +1'],
        result: [
          '你握住剑柄，往外抽了一寸。剑没亮，也没烫手，同握着一截凉铁没两样。它没认你，也没伤你。',
          { speaker: '克拉丽蒙德', text: '剑不肯断的案子，我也不断。把他的绳子解了。' },
          '她说完又看了你很久。',
        ],
        goto: 'a2_14b',
      },
    ],
  },

  a2_14b: {
    id: 'a2_14b',
    title: '镐',
    text: [
      '人散了以后，她把你领到城墙上。墙根底下码着四十把新打的石镐，镐头上了油。',
      { speaker: '克拉丽蒙德', text: '我砍下去的时候他话说到一半。后半句是什么，我夜里常替他往下编。编出来的没有一句是好话。' },
      { speaker: '克拉丽蒙德', text: '那座山上有位子，就有人想坐。我要把通誓石的石阶毁了，一级不留。北要塞不让人上山，可拦不住监誓人。你带我的人上去。' },
      '她没等你答，先叫人去备向导：你应不应，路她都借。{?party.liv:卡斯坦蹲在垛口上磨爪子，磨得很响。|}',
      { if: "is.elf || origin == 'ibevar'", text: '你一进大厅就看出来了。那把剑的弧度，剑身上细细的颤，是先驱精灵的手艺，船上的祖器里有它的兄弟。这座堡里没有第二个人看得出来。' },
      { if: 'is.god', speaker: '克拉丽蒙德', text: '我砍过一个自己封自己的王。您打不打算坐上去？' },
    ],
    choices: [
      {
        text: '告诉她：卡林达尔是先驱精灵打的',
        tag: '精灵',
        if: "is.elf || origin == 'ibevar'",
        once: true,
        effects: ['flag calindal_named', 'rep escann +1', 'rep elders -1'],
        result: [
          '她听完，拿拇指在剑柄上抹了一下。',
          { speaker: '克拉丽蒙德', text: '精灵的剑，人类的手，砍的是人类的术士王。这话传出去，我的骑士们要高兴三年。你们的长老呢？' },
          '长老们不会高兴：祖器流落在外头，还叫人拿去剜眼睛。',
        ],
      },
      {
        text: '答她：不坐',
        if: 'is.god && !flag.a2x_god_asked',
        once: true,
        effects: ['flag a2x_god_asked', 'flag a2x_god_wont_sit', 'rep escann +1'],
        result: [{ speaker: '克拉丽蒙德', text: '好。这句话到了山上，请您当着石头再说一遍。那儿说的才算数。' }],
      },
      {
        text: '答她：还没想好',
        if: 'is.god && !flag.a2x_god_asked',
        once: true,
        effects: ['flag a2x_god_asked', 'rep escann -1', 'approval liv +1'],
        result: [
          { speaker: '克拉丽蒙德', text: '又来一个想坐上去的。' },
          '她叫人把镐的数目从四十改成了八十。',
        ],
      },
      {
        text: '答应帮她毁阶',
        effects: ['flag clarimonde_pact', 'rep escann +1', 'approval liv -2'],
        result: '她同你击了一下掌，手上全是茧。{?party.liv:卡斯坦从垛口上飞走了，天黑才回来，回来一句话没有。|}',
        goto: 'a2_15',
      },
      {
        text: '不答应：山上的事，到了山上再说',
        effects: ['approval liv +1'],
        result: [
          { speaker: '克拉丽蒙德', text: '那你到了山上看一眼那块石头，再回头想想我的镐。' },
          '向导是个少了两根指头的老猎户，第二天一早就等在了门口。',
        ],
        goto: 'a2_15',
      },
    ],
  },

  a2_15: {
    id: 'a2_15',
    title: '北要塞',
    art: 'ev_forge',
    loc: '北要塞',
    date: '1024年花终月',
    shop: {
      name: '石匠的库房',
      blurb: '布洛克的规矩：先报数，再看货，不还价。',
      stock: ['ward_runestone', 'vigor_runestone', 'hold_shield', 'warhammer', 'greater_healing_potion', 'healing_potion', 'antidote'],
    },
    text: [
      '北要塞贴着试炼山的山根，历代想当卡斯坦的人都从这道门出去。如今门上了三道栓。温斯坦王有令：谁也不许徒步上山。这道令没人违过，因为本来也没人上得去。走到半坡，路就自己拐回来。',
      '要塞里管石头的是个岩石矮人，叫布洛克。他的账本摊在石案上，一页一道试炼。',
      { speaker: '布洛克', text: '十道试炼，坏了七道半。头三道剩个壳子，誓石裂到了根。后头六道我只在山脚拿镜子照过，照见三处塌方。那半道是锻炉：炉子是好的，火没了。' },
      '发饷的窗口后头坐着个哨兵。两年前他在坡上骂了句娘，从此撒不了谎，问什么答什么。百夫长把他调来管饷。北要塞头一回有了一本对得上的账，也头一回人人知道上头扣了多少。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '我问了他三个问题。三个他都答了，答到第三个他哭了。上了山，我的本子最好合着。' },
      { if: 'is.gnome', text: '那个哨兵看见你，脱口说了句“这么小”，说完自己捂住了嘴。' },
      { if: "origin == 'lorent'", text: '要塞西边的草场上，大捷比武会的围栏还立着，漆掉了一半。鲁本二世就是在那道栏里落的马。' },
      { if: "origin == 'wex' && class == 'barbarian'", text: '山道的前半截你认得。四年前挑人上山，你走到半坡才下来。哪块石头松，哪一段要贴着崖走，脚还记着。' },
      { if: 'is.god', speaker: '布洛克', text: '建造者巴尔加尔是干完了活，死了，过了几百年才封的。活着就封，工期没法算。我没说您不行，我是说这笔账我不会记。' },
    ],
    first: ['codex trialmount', 'codex trials', 'codex tourney'],
    choices: [
      {
        text: '去比武场，照着开销账找那根断枪',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        once: true,
        check: { skill: 'investigation', dc: 14, party: true, adv: 'item.lance_ledger >= 1 || flag.lance_asked' },
        ok: {
          text: '账上记着泪落月 27 日换枪一根，领枪的人画了押。司礼官的记数牌还钉在栏柱上，断枪就压在牌子底下的草里：枪头是钝的，木头是顺着纹裂的，没人锯过。是他自己的枪，自己的手。是失手。{?party.valeran:瓦勒兰把断枪翻过来看了两遍，说他照这个写。|}',
          effects: ['flag lance_truth', 'quest lance stage 3'],
        },
        fail: {
          text: '记数牌叫耗子啃了一半，草场去年让人犁过，断枪没找着。你雇了两个人翻了一天土，翻出来半副马镫。太后要的答复，你还是得带一个回去。',
          effects: ['gold -10', 'quest lance stage 3'],
        },
      },
      {
        text: '同布洛克讲行话：问山上那座炉子的风口朝哪开',
        tag: '矮人',
        if: 'is.dwarf',
        once: true,
        effects: ['flag a2x_brok_shop'],
        result: [
          { speaker: '布洛克', text: '朝东，偏北一指。炉膛是整块凿的，老活儿，比这座要塞岁数大。你上去别动风门，先清灰道。灰道通了，火自己来。' },
          '他说这些的时候，头一回抬眼看你。',
        ],
      },
      {
        text: '在炉边歇一晚',
        once: true,
        effects: ['rest short'],
        result: '炉边的石头是暖的。布洛克半夜起来添了一回炭，顺手把你们的靴子挪得离火远了些，嘴里报了个数：三双烤裂了口。',
      },
      { text: '上山：不走石阶，走崖', goto: 'a2_16' },
    ],
  },

  a2_16: {
    id: 'a2_16',
    title: '绳子',
    art: 'ev_wex_precipice',
    loc: '试炼山 · 崖下',
    text: [
      '北要塞后墙外头就是崖。左手边有石阶，一级一级好好的。可是走上去半个时辰，人就从右手边的林子里出来，回到原地。北要塞的兵管这叫“山送客”，送回来的人鞋底都是干的。',
      '卡斯坦把酒囊往腰上一勒，往手心里啐了一口，展翅上了崖。崖顶滚下来一阵碎石。过了一袋烟的工夫，一根浸过油的麻绳垂了下来，绳头打的是军团的死扣。',
      { speaker: '卡斯坦', text: '拴在一棵松树上了，那树比我爹岁数大。往上爬别往下看，底下没什么好看的。' },
      '薇齐娜把本子合上，拿皮绳捆了两道，塞进怀里。',
      { speaker: '薇齐娜', text: '从这儿往上，说过的话都算数。要是谁想开玩笑（我说的是要是），下了山再开。' },
      { if: 'is.flyer', text: '你的翅膀在风里张了一下。崖上的风是往下压的，飞得上去，就是费劲。' },
      { if: "origin == 'wex' && class == 'barbarian'", text: '这段崖你爬过。四年前挑人上山，你走到半坡就下来了。哪块石头是松的，脚还记得。' },
      { if: 'is.god', text: '你在左手的石阶上走了二十来级，路没有拐。你回头，同伴们还站在原地，往上看着你，谁也跟不上来。山只肯放你一个人上去。' },
    ],
    first: ['quest mountain start'],
    choices: [
      {
        text: '抓住绳子往上爬',
        check: {
          skill: 'athletics',
          dc: 14,
          adv: "origin == 'wex' && class == 'barbarian'",
          mods: [{ if: 'is.small', n: 1, why: '个子小，绳子吃得住' }],
        },
        ok: {
          text: '爬到一半，绳子晃了两下，卡斯坦在上头骂了一句，又稳住了。你翻上崖顶，手心磨掉一层皮，别的都好。',
          goto: 'a2_16b',
        },
        fail: {
          text: '离崖顶还有一人高，脚下那块石头掉了。你吊在绳子上转了三圈，膝盖在崖壁上磕出两道口子。巴里在底下一个劲儿喊对不住，好像石头是他推的。',
          effects: ['hp -6'],
          goto: 'a2_16b',
        },
      },
      {
        text: '张开翅膀，自己飞上去',
        tag: '有翅膀的',
        if: 'is.flyer',
        effects: ['approval liv +1'],
        result: '风往下压，你贴着崖壁一下一下往上扑，落地比卡斯坦晚了半口气。她说你飞得太低、太慢，在她嘴里这就是夸人了。',
        goto: 'a2_16b',
      },
      {
        text: '叫巴里背伊迪丝先上，自己在底下压绳',
        effects: ['approval barry +1', 'hp -3'],
        result: '伊迪丝趴在巴里背上，一路数绳子上的结，数到四十一。你最后一个上，天已经擦黑，绳子叫别人的手汗浸得发滑，你是拿胳膊肘夹着上去的。',
        goto: 'a2_16b',
      },
      {
        text: '不等绳子，一个人走石阶上去',
        tag: '神',
        if: 'is.god',
        effects: ['var god_acts +1', 'approval liv -1', 'flag a2x_god_stair'],
        result: [
          '你在第二道的石桌边等了他们一个时辰。卡斯坦头一个翻上来，看见你坐在那儿，没说话，先去解她的绳子。',
          { speaker: '卡斯坦', text: '山认你不认我。行，我记下了。' },
        ],
        goto: 'a2_16b',
      },
    ],
  },

  a2_16b: {
    id: 'a2_16b',
    title: '前三道',
    loc: '试炼山 · 前三道',
    text: [
      '崖顶是一块平地，铺着青石，石缝里长着没死透的蓟草。头一道试炼就在这儿：站在边上朝北要塞喊一嗓子，喊到守军应声才算。从这儿往下看，北要塞只有一枚铜板大。',
      '往里走二十步是第二道，一张石桌，冰得粘手。桌面上刻着旧帝国的边界，叫人拿凿子刮掉了一半。桌角搁着一截白垩石磨的粉笔头。',
      '第三道是嵌在崖壁里的锻炉，炉口有一人高。炉子是好的，火没了。炉膛里积了半尺灰，灰上有一串小脚印，是只狐狸。',
      { speaker: '卡斯坦', text: '先喊。喊不应，后头的都白搭。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，那张桌子上画了什么，往后就有人拿着它去打仗。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，这时候说这个不合适。我带了乳酪，锻炉边上要是暖和，咱们就在那儿吃。' },
      { if: 'flag.a2x_god_stair', text: '石桌边上留着你等人时坐出来的一块干印子。' },
    ],
    choices: [
      {
        text: '站到平地边上，朝北要塞喊阵',
        once: true,
        check: {
          skill: 'performance',
          dc: 13,
          party: true,
          mods: [
            { if: 'rep.escann >= 3', n: 2, why: '北要塞听说过你' },
            { if: 'rep.escann <= -2', n: -2, why: '北要塞不待见你' },
          ],
        },
        ok: {
          text: '你喊完，山底下静了一会儿。接着北要塞的墙头亮起一排火把，号角吹了三长一短，是旧军团的回营号。{?party.liv:卡斯坦在你后头又补了一嗓子，喊破了音。|}',
          effects: ['approval liv +1'],
        },
        fail: {
          text: '你的声音撞到对面山上，折回来，落在自己脚边。过了很久，底下只有一个人回了话，是那个撒不了谎的哨兵：“听见了。没人想应。”',
          effects: ['approval liv -1'],
        },
      },
      {
        text: '在石桌上画：先画现在的，再画将来的',
        if: '!flag.a2x_table',
        once: true,
        effects: ['flag a2x_table', 'flag map_drawn', 'world mantle +1', 'approval liv +1'],
        result: '你先照着刮剩的刻痕描了眼下这十几个王国，再拿粉笔头往外画了一圈。粉笔一离手，线就吃进了石头，同凿出来的一样深。{?party.valeran:瓦勒兰俯身看了那一圈很久，掏出炭笔抄了下来。|}',
      },
      {
        text: '只画现在的，将来那一半空着',
        if: '!flag.a2x_table',
        once: true,
        effects: ['flag a2x_table', 'approval valeran +1', 'approval liv -1'],
        result: [
          '线吃进了石头。你画的是今天：两个卡斯塔诺，一个刀锋边区，北边一圈黑卡斯塔诺。外头那一圈你没画。',
          { if: 'party.liv', speaker: '卡斯坦', text: '这儿呢？这儿空着算谁的？' },
        ],
      },
      {
        text: '照布洛克说的，先清灰道，再生火打一件礼物',
        tag: '矮人',
        if: 'is.dwarf && flag.a2x_brok_shop && !flag.a2x_forged',
        once: true,
        effects: ['flag a2x_forged', 'item +ward_runestone'],
        result: '你没碰风门，伸手进去掏灰道。掏到底，炉膛里呼的一声自己着了，火是青的。你在火里打了一块护符石，一锤一个数，打到三十七锤，石头上的矮人记号就出来了。',
      },
      {
        text: '把锻炉生起来，打一件给矮人的礼物',
        tag: '矮人',
        if: 'is.dwarf && !flag.a2x_brok_shop && !flag.a2x_forged',
        once: true,
        check: { skill: 'history', alt: ['arcana'], dc: 14 },
        ok: {
          text: '这是老炉子，老炉子有老脾气：先通灰，后开风。你照着祖辈的规矩来，火是青的。打出来的护符石上，你刻了自己家的记号。',
          effects: ['flag a2x_forged', 'item +ward_runestone'],
        },
        fail: {
          text: '你先开了风门。积了四年的灰扑了你一脸，火星子跟着灰一起出来，把你的胡子燎掉了一撮。炉子到底没着。',
          effects: ['flag a2x_forged', 'hp -4'],
        },
      },
      {
        text: '拆开炉口的符文盖子，看看火是怎么封住的',
        tag: '奇械师',
        if: "class == 'artificer' && !is.dwarf && !flag.a2x_forged",
        once: true,
        check: { skill: 'arcana', dc: 14 },
        ok: {
          text: '封火的符文叫人拿凿子划断了一笔。你拿铜丝把那一笔接上，炉膛里的火就回来了。你趁热打了一块护符石，敲上矮人的记号，记号是照着炉门上抄的。',
          effects: ['flag a2x_forged', 'item +ward_runestone'],
        },
        fail: {
          text: '铜丝接错了一头。炉膛里蹿出一道白火，把你半边袖子烧没了，又自己灭了。',
          effects: ['flag a2x_forged', 'hp -4'],
        },
      },
      { text: '往林子里走，去誓石那边', goto: 'a2_16c' },
    ],
  },

  a2_16c: {
    id: 'a2_16c',
    title: '半坡',
    loc: '试炼山 · 半坡',
    text: [
      '过了锻炉，石阶往林子里钻。林子里没有雪，松针是干的，踩上去不响。一路上净是旧年的东西：一只烂了底的靴子，一面军团的小旗，一块刻着“十四”的界石。',
      '卡斯坦走在最前头，翅膀收着。到一处拐角，她站住了，背对着你们。',
      { speaker: '卡斯坦', text: '我同你说件事，你听完再答。等这山修好了，总有一天，你让我试一回。' },
      { speaker: '卡斯坦', text: '不用今天，不用明年。你就说一句“让你试”。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我插一句。这话你是喝了说的，还是没喝说的？' },
      { if: 'party.barry', speaker: '卡斯坦', text: '没喝。所以才同{ta}说。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '{pc}，这里说的话收不回。你答应了，往后你要是想拦她，你自己的嘴不答应。这回我说的不是要是。' },
      { if: 'is.god', speaker: '卡斯坦', text: '你别替山答我。山答山的，你只管答你自己的。' },
    ],
    choices: [
      {
        text: '答她：总有一天，让你试',
        effects: ['flag vow_liv', 'approval liv +2', 'approval vezina -1'],
        result: [
          '你说完，脚底下的石阶热了一下，就一下。',
          '卡斯坦没回头，接着往上走，走得比刚才快。{?party.vezina:薇齐娜没打开本子。她把你那句话小声念了两遍，背下来了。|}',
        ],
        goto: 'a2_17',
      },
      {
        text: '答她：这种话我不在山上许',
        effects: ['approval vezina +1'],
        result: [
          { speaker: '卡斯坦', text: '行。那你记着，是你不许的，不是山不许。' },
          '她把翅膀抖了一下，抖下来一片松针，接着往上走了。',
        ],
        goto: 'a2_17',
      },
    ],
  },

  a2_17: {
    id: 'a2_17',
    title: '第九道',
    loc: '试炼山 · 石阶',
    text: [
      '它本不该在这儿。第九道在誓石后头很远，布洛克拿镜子照见过那块空台子。试炼坏了以后，它自己走了下来，跪在通往誓石的这段石阶当中，一跪四年。它脚边刻着巨人克星卡斯坦的规矩：缴了它的械，它摘头下跪，跪到你死。',
      '第九道试炼的石像跪在台阶当中，脖子上没有头。头在它自己手里托着，脸朝着你们。卡斯坦往地上啐了一口酒。石像站起来，把头往胳肢窝底下一夹，另一只手从石阶里拔出一把剑，剑身有门板宽。',
      { speaker: '卡斯坦', text: '规矩是缴了它的械就算过关。可没说缴的时候它还不还手。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这是巨人克星立的。他立的东西，从没打算让人好过。' },
      { if: 'is.god', text: '它胳肢窝底下那颗头转了半圈，朝着你，没有眼睛的脸对着你停了一会儿。它里头没有会怕的东西，神威落不到它身上。' },
    ],
    first: ['quest liv_claim stage 2'],
    choices: [
      {
        text: '拔出兵器，上去缴它的械',
        combat: {
          title: '第九道',
          intro: '石像把门板宽的剑往石阶上一拄，碎石溅了你们一身。',
          enemies: [{ id: 'trial_golem' }],
          noAwe: true,
          specials: [
            {
              id: 'disarm',
              name: '缴它的械',
              desc: '贴上去，把那把门板剑从它手里卸下来',
              once: false,
              check: { skill: 'athletics', alt: ['sleight'], dc: 15 },
              success: {
                text: '你钻到它胳膊底下，两只手攥住剑柄往外一拧，剑脱了手。石像站着不动了，把头从胳肢窝底下取出来，搁在你脚边，跪下了。',
                effects: ['flag golem_pc'],
                end: 'win',
              },
              fail: { text: '剑柄你攥住了。它手腕一翻，你连人带剑被甩了出去，在石阶上滚了七八级。', selfDmg: '2d6' },
            },
            {
              id: 'liv_disarm',
              name: '让卡斯坦去缴',
              desc: '她从半空扑下去，你们在底下引开它',
              once: false,
              check: { skill: 'athletics', dc: 15, party: true },
              success: {
                text: '卡斯坦从半空砸在它肩膀上，两只爪子扣住剑柄，连人带翅膀往后一仰，剑脱了手。石像摘下头，朝她跪下了。她在那把剑上坐了好一会儿才起来。',
                effects: ['flag golem_liv', 'approval liv +2'],
                end: 'win',
              },
              fail: { text: '她扣住了剑柄，没扣住剑。石像一甩胳膊，把她砸在石阶上，你冲上去接她，挨了一剑背。', selfDmg: '1d8' },
            },
            {
              id: 'rope',
              name: '拿绳子绊它',
              desc: '把上山那根麻绳横在石阶上',
              check: { skill: 'survival', alt: ['athletics'], dc: 13, party: true },
              success: { text: '它一脚踩进绳套，往前一栽，半边身子跪在了台阶上，一时起不来。', applyAll: { cond: 'restrained', turns: 2 } },
              fail: { text: '绳子绷断了，断头抽在你脸上。', selfDmg: '1d4' },
            },
          ],
          xp: 600,
          win: { effects: [{ if: '!flag.golem_pc && !flag.golem_liv', then: ['flag golem_none'] }], goto: 'a2_18' },
          lose: { effects: ['damage 2d6', 'flag golem_none', 'flag a2x_golem_lost'], goto: 'a2_18' },
        },
      },
      {
        text: '走过去，伸手把它的剑接过来',
        tag: '神',
        if: 'is.god',
        effects: ['flag golem_pc', 'flag golem_forever', 'var god_acts +1', 'approval liv -2'],
        result: [
          '它没还手。剑柄落进你手里，比一扇门还沉。石像把头从胳肢窝底下取出来，放在你脚边，跪下了。',
          { speaker: '卡斯坦', text: '跪到你死。你又不死。那它这辈子起不来了，这道坎往后谁也过不去，我也过不去。' },
        ],
        goto: 'a2_18',
      },
    ],
  },

  a2_18: {
    id: 'a2_18',
    title: '誓石',
    art: 'ev_feyforest',
    loc: '试炼山 · 誓石',
    text: [
      { if: 'flag.golem_pc', text: '你身后，石像跪在石阶当中，头搁在你方才站的地方。' },
      { if: 'flag.golem_liv', text: '石像朝卡斯坦跪着。她走出去十几步又回头，它那颗头跟着她转。' },
      { if: 'flag.golem_none && !flag.a2x_golem_lost', text: '石像碎了一地。你们走过去的时候，碎石在背后自己滚动，一块一块往一处凑。' },
      { if: 'flag.a2x_golem_lost', text: '你们是绕崖边一条兽道爬上来的。石像把你们扫下石阶，没追，又跪回了原处。' },
      '林子到这儿空出一块地，地上不长草。誓石立在当中，两人高，青灰色。历代卡斯坦的誓词一位一位刻在上头，越往下字越新，头一句都一样：我誓守我的土地与我的子民，至我寿终之日。',
      '石头从顶上裂到了根。裂缝里有东西在流，细得同蛛丝一样。凑近了听，是一个人在说话，说来说去只有一截：凡我土我民，自今而后，皆听——然后就断了，再从头来。',
      '没等多久，林子那头有了人声。头一个出来的是布洛克，背着一筐凿子，后头跟着六个石匠。再后头是亚科布，拄着手杖，喘得厉害。他牵着一个孩子，五岁上下，耳朵是尖的，头发是乌霜家的黑。',
      { speaker: '亚科布', text: '劳您久等，六十岁的人，山路走得慢。这是卢坎，阿尔瓦夫人的儿子。他娘身子弱，托我带他上来看看。' },
      { speaker: '亚科布', text: '山上撒不了谎，我就不费那个劲了。我想把石头修好，等这孩子长大，让他上来立誓。乌霜家的血，精灵的耳朵，两边都服他。' },
      { if: 'flag.iacob_favor', speaker: '亚科布', text: '您收过我一张文书。我不提那个，只是您该知道我记着。' },
      { if: 'flag.clarimonde_pact', text: '克拉丽蒙德是从另一边上来的，带着二十个人，每人肩上一把石镐。她看见亚科布，把镐头往地上一顿。' },
      { speaker: '卢坎', text: '这块石头在说话。它说的我听不懂。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我爹的外孙，那就是我外甥。外甥要坐我爹的椅子，那得先问过我。' },
      { if: 'is.god', text: '你走近石头，裂缝里那截话停了一下，绕着你转了半圈，才接着往下流。' },
      { if: 'is.god', speaker: '亚科布', text: '您也在。那事情就简单了：您比哪个孩子都稳当。' },
    ],
    first: ['quest mountain stage 2', 'codex oathstone', 'codex bridle_2', 'codex lucan'],
    choices: [
      {
        text: '凑过去，听亚科布给石匠交代工序',
        once: true,
        check: {
          skill: 'arcana',
          alt: ['insight'],
          dc: 15,
          party: true,
          adv: 'flag.melcor_wise',
          mods: [{ if: 'flag.knows_watchword', n: 1, why: '你听过旧口令是怎么念的' }],
        },
        ok: {
          text: '他念到“收口”那道工序，舌头底下带出半个音。那不是字，是半个字的头，舌尖顶着上牙。你记住了舌头的位置。',
          effects: ['flag knows_word'],
        },
        fail: {
          text: '你凑得太近，石缝里那截话往你耳朵里钻了一下。你流了半袖子鼻血，半个音没听着。',
          effects: ['hp -3'],
        },
      },
      {
        text: '伸手把那半句话从石头上扯下来',
        tag: '神',
        if: 'is.god && !flag.knot_cut',
        once: true,
        effects: ['flag knot_cut', 'flag god_half_sentence', 'var god_acts +1', 'approval valeran +1', 'approval vezina -2', 'approval liv -1'],
        result: [
          '那截话缠在你手指上，是凉的。扯到最后一寸，它不肯走了，顺着你的胳膊爬了上来，再也找不着。',
          { speaker: '亚科布', text: '我要那根缰绳在我手里。我想了四十五年。' },
          '他说完，自己把嘴捂住了。旁边一个石匠把凿子砸在了脚面上，骂了一句，骂完愣了：他骂的是实话。{?party.vezina:薇齐娜把怀里的本子按紧了。|}',
        ],
      },
      {
        text: '当着石头再说一遍：我不坐',
        tag: '神',
        if: 'is.god && flag.a2x_god_wont_sit',
        once: true,
        effects: ['rep escann +1', 'approval liv +1'],
        result: '石头热了一下。你的话没刻上去，可最底下那行誓词边上多了一道浅印子。{?flag.clarimonde_pact:克拉丽蒙德点了一下头，把镐靠在了树上。|卡斯坦看了你一眼，把嘴里的酒咽下去了。}',
      },
      { text: '叫亚科布把缰绳的事说完', goto: 'a2_18b' },
    ],
  },

  a2_18b: {
    id: 'a2_18b',
    title: '背叛者',
    text: [
      '亚科布在石头边上找了块平地坐下，手杖横在膝盖上。卢坎坐在他脚边，拿一根松枝在地上画龙。{?party.barry:巴里过去在孩子另一边坐下，把乳酪掰了一半给他。|}',
      { speaker: '亚科布', text: '那个字我会半个，是四十五年前在尼奇默门外听来的。所以我知道，石头修好了不解那个结，头一个上来立誓的就被套上。' },
      { speaker: '亚科布', text: '套上也不打紧，牵绳的是我。我不拿它干坏事，我只要一只稳当的手。东坎诺这片地方，没人牵着，就会自己吃自己。' },
      { if: 'flag.god_half_sentence', text: '他说这些的时候一直在擦汗。在你跟前，他连换个说法都换不成。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '他要牵我外甥。你听见了。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，他说的句句是实话。这是我这辈子听过最难听的一回实话。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '他每一句我都记下了。在这山上记的，往后谁也改不了一个字。' },
      '布洛克的石匠们站在一边，绳子是现成的，树也是现成的。',
    ],
    choices: [
      {
        text: '先验他的心，看他当年是不是自己做的主',
        tag: '贤者门下',
        if: "faction == 'staff'",
        once: true,
        effects: ['world writ +1', 'flag knows_word'],
        result: '你把手按在他额头上，他没躲。他心里那半个字是一块炭，在舌头底下搁了四十五年，烫出一个窝。你摸清了那个窝的形状。他当年是自己做的主，现在也是。',
      },
      {
        text: '绞死他',
        effects: ['flag iacob_hanged', 'world writ -1', 'approval liv +1'],
        result: [
          '石匠里有人会打绳结。亚科布自己走过去，走之前把手杖递给卢坎，叫他别看。',
          { if: 'party.barry', text: '巴里把孩子的脸按在自己怀里，一直按到完。' },
          { if: '!party.barry', text: '孩子没看。他一直盯着手里那根手杖。' },
        ],
        goto: 'a2_18c',
      },
      {
        text: '赦了他，叫他在山上戴罪干活',
        effects: ['flag iacob_pardoned', 'rep escann -1', 'approval valeran -1', 'flag knows_word'],
        result: [
          { speaker: '亚科布', text: '划算。那半个字我教您，免得哪天您要用，还得来求我。' },
          '他凑过来，舌尖顶在上牙后头，出了半口气。就半口。',
        ],
        goto: 'a2_18c',
      },
      {
        text: '把他交给贤者会去审',
        effects: ['flag iacob_wise', 'world writ +1', 'rep wise +1'],
        result: [
          '你写了信，封好，交给布洛克带下山。亚科布看着你封蜡。',
          { speaker: '亚科布', text: '加里昂会看我当年是不是自己做的主。他看不出来的，我自己都看不出来。' },
        ],
        goto: 'a2_18c',
      },
    ],
  },

  a2_18c: {
    id: 'a2_18c',
    title: '石头怎么办',
    text: [
      '石匠们把筐撂下，等你一句话。布洛克绕着誓石走了一圈，拿指节敲，敲一下报一个数。',
      { speaker: '布洛克', text: '裂缝从顶到根，七尺三寸。补得上，工期两年。' },
      { speaker: '布洛克', text: '这儿少一块，巴掌大，早年就少了。补的时候得有这一块，没有它，补上了也漏。' },
      { speaker: '布洛克', text: '三条路，我报个数。修了不解结：头一个上来立誓的套上，一个。毁：镐子够的话三天，往后一个也上不来。' },
      { if: 'flag.knot_cut', text: '那截话已经不在石头里了，在你身上。裂缝里空了，只剩下石头。' },
      { if: 'flag.clarimonde_pact', speaker: '克拉丽蒙德', text: '你在刀锋堡答应过我。镐都在这儿。' },
      { if: 'party.liv && flag.vow_liv', speaker: '卡斯坦', text: '你在半坡上说的话，山记着，我也记着。' },
      { if: 'party.liv && !flag.vow_liv', speaker: '卡斯坦', text: '毁了它，我同你没完。' },
    ],
    choices: [
      {
        text: '修，并且请人来解那个结',
        if: '!flag.knot_cut',
        effects: ['flag mended', 'world mantle +2'],
        result: '布洛克拿墨斗在裂缝两边弹了线，叫石匠先别和灰浆。',
        goto: 'a2_18d',
      },
      {
        text: '照原样修，结的事不动',
        if: '!flag.knot_cut',
        effects: ['flag mended', 'world mantle +3', 'approval vezina -2'],
        result: [
          '布洛克弹了线，石匠们开始和灰浆，头一铲就抹进了裂缝。',
          { if: 'party.vezina', text: '薇齐娜在一边站着，一句话也没说，这比说了还难听。' },
        ],
        goto: 'a2_18e',
      },
      {
        text: '修。结已经不在了',
        if: 'flag.knot_cut',
        effects: ['flag mended', 'world mantle +3'],
        result: '布洛克弹了线，石匠们和灰浆。他拿耳朵贴着石头听了半天，说这块石头头一回这么安静，安静得他不放心。',
        goto: 'a2_18e',
      },
      {
        text: '同克拉丽蒙德一起，把石阶毁了',
        if: 'flag.clarimonde_pact',
        effects: ['flag stair_down', 'flag mountain_sealed', 'world mantle =0', 'approval liv -3', 'rep escann +2', 'rep dragon -2'],
        result: [
          '四十把镐从第九道往下砸，砸了三天。最后一级是克拉丽蒙德自己砸的，砸完她把镐扔下了山。',
          { if: 'party.liv', text: '卡斯坦头一天就飞走了，第三天傍晚才回来，落在崖顶上，一直看着。' },
        ],
        goto: 'a2_18e',
      },
      {
        text: '什么都不动，下山',
        effects: ['approval vezina +1', 'approval liv -1'],
        result: '布洛克把凿子一把一把收回筐里，收得很慢，收完报了个数：一把没用上。',
        goto: 'a2_18e',
      },
    ],
  },

  a2_18d: {
    id: 'a2_18d',
    title: '请谁来解',
    text: [
      '石头能补，结得另请人解。布洛克说得明白：他只管石头，那截话不归他管。',
      { speaker: '布洛克', text: '我只听说塞纳蒂尔有个阿拉里安·歌堡，教惑控的头一位。他的学生管那地方叫歌者堡，一天到晚有人唱。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '我师父是德基南长老，先知会的长老解过比这难的。要是请先知会（我说的是要是），信我去送。' },
      { if: '!flag.iacob_hanged', speaker: '亚科布', text: '还有我。半个字解不开，拆一半还拆得动。您看着办。' },
      { if: 'flag.iacob_hanged', text: '会半个字的那一位，还挂在林子边那棵树上，风一吹，绳子吱一声。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，请谁来解，往后那个结就算谁的。' },
    ],
    choices: [
      {
        text: '写信去塞纳蒂尔，请阿拉里安',
        effects: ['flag knot_alarian', 'rep wise +1'],
        result: '回信是一张谱子，背面只写了一行字：开春就到，带竖琴。',
        goto: 'a2_18e',
      },
      {
        text: '叫薇齐娜给先知会送信',
        effects: ['flag knot_ravens', 'flag ravens_trust', 'approval vezina +2'],
        result: '薇齐娜写了三遍才写成。信是一只渡鸦带走的，她站在空地上数着它飞，数到看不见为止。{?party.barry:巴里问她数什么，她说数它回不回头。|}',
        goto: 'a2_18e',
      },
      {
        text: '让亚科布来解',
        if: '!flag.iacob_hanged',
        effects: ['flag knot_iacob', 'approval valeran -1', 'approval vezina -1'],
        result: [
          '亚科布把手杖靠在石头上，对着裂缝看了很久。',
          { speaker: '亚科布', text: '两年。我六十岁了，两年我还有。' },
        ],
        goto: 'a2_18e',
      },
    ],
  },

  a2_18e: {
    id: 'a2_18e',
    title: '银龙',
    art: 'ev_elven_constellation',
    text: [
      '天黑以后，石匠们在林子边上生了火。卢坎不肯睡，蹲在誓石跟前，拿手去摸那些刻上去的名字，一行一行往下摸，摸到第五十三行停住了。',
      { speaker: '卢坎', text: '我舅舅是黑龙，我父亲是精灵，我娘说我们兄妹六个是照着一颗星生的。山认哪一样，我想上去问问。' },
      '他娘阿尔瓦夫人在南王国等着，身子弱，见了生人就躲。马里昂也来过信：他宫里已经有一个半精灵国王，再添一个半精灵孩子，没人会盯着看。',
      { if: 'flag.garrec_king', text: '他舅舅加雷克在乌霜领坐稳了，回信只有一句：送来，我教他骑马。' },
      { if: 'flag.garrec_exile', text: '他舅舅加雷克往北去了，没留地址。' },
      { if: 'flag.garrec_dead', text: '他舅舅加雷克死在永冻边区人的枪下，坟在哪儿，没人说得清。' },
      { if: 'flag.iacob_pardoned', speaker: '亚科布', text: '跟着我，我教他认字。我教过的学生里出过一个驯师。这孩子不会，他比那个聪明。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我只说一句：孩子跟着谁，就长成谁。我家那个就是。' },
      { if: 'is.god', speaker: '卢坎', text: '你是神吗？神能不能上去立誓？' },
    ],
    choices: [
      {
        text: '送他回南王国，回他娘身边',
        effects: ['flag lucan_alva', 'approval barry +1'],
        result: '下山那天他骑在骡子上，回头看了三次山。阿尔瓦夫人派来接他的是两个老嬷嬷，一个替他擦鼻涕，一个替他数行李。',
        goto: 'a2_19',
      },
      {
        text: '送到他舅舅加雷克身边',
        if: 'flag.garrec_king',
        effects: ['flag lucan_garrec', 'rep dragon +1'],
        result: '加雷克派来的是一队黑龙旗的骑兵，二十个人接一个五岁的孩子。卢坎给领头的看了自己的耳朵，领头的说乌霜家不看耳朵。',
        goto: 'a2_19',
      },
      {
        text: '送去马里昂的宫里',
        effects: ['flag lucan_marion', 'rep moon +1'],
        result: '马里昂的回信比人先到：房间备好了，挨着他的书房，他保证不教孩子喝酒。信末又添了一行：至少今年不教。',
        goto: 'a2_19',
      },
      {
        text: '留给亚科布带',
        if: 'flag.iacob_pardoned',
        effects: ['flag lucan_iacob', 'approval barry -1'],
        result: '亚科布把手杖递给孩子，叫他拿着。卢坎拿着手杖走在前头，亚科布扶着他的肩膀走在后头，分不清是谁领着谁。',
        goto: 'a2_19',
      },
    ],
  },

  a2_19: {
    id: 'a2_19',
    title: '1024年真霜月',
    art: 'ev_blank',
    loc: '北要塞 · 炉边',
    date: '1024年真霜月',
    text: [
      '北要塞落了头一场雪。布洛克的炉子边上压着一摞信，都是这一年里追着你跑的，有的在路上走了半年，封蜡都磨平了。',
      '加韦德的阿伦三世苏伦月里死了，里卡德接了冠。递冠的不是卡斯特洛斯的祭司，这在加韦德是头一回。达梅里亚添了个公主，叫奥坎娜，马里昂在信尾画了一个歪歪扭扭的摇篮。',
      { if: 'flag.god_on_agenda', text: '泛神会议也来了一封，盖了三个印，说您的事容后再议。' },
      '伊迪丝十四岁了，个子蹿了一截，一年顶破两双鞋。她坐在炉子另一头，装作没在听。她得有个先生。',
      { if: 'party.barry', speaker: '巴里', text: '开春我得回一趟威克斯。我家那孩子十一了，信上说学会了骑马，摔了三回。对不住，我得回去看看。' },
      { if: 'party.liv && !flag.stair_down', speaker: '卡斯坦', text: '我在山下等着。等多久都行。' },
      { if: 'party.liv && flag.stair_down', speaker: '卡斯坦', text: '石阶没了，我在山下等着，等它自己长回来。等多久都行。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '这一年我记了四百一十二条。要是有人问我哪条最要紧（我说的是要是），我答不上来。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，我给恩特本写了十九封信。他们回了两封，两封都问我您平常吃什么。' },
      { if: 'is.god', speaker: '伊迪丝', text: '你跟我一样了：说什么，别人都给。那你教我吧，你比他们都懂。' },
    ],
    first: ['level 6', 'rest long', 'quest witness stage 3', 'quest edith stage 3'],
    choices: [
      {
        text: '送她去塞纳蒂尔，跟阿拉里安学',
        effects: ['flag edith_alarian', 'approval barry +1'],
        result: '阿拉里安回信说，他那儿人人唱歌，唱不好的罚洗碗。伊迪丝问洗碗算不算唱。',
        goto: 'a3_01',
      },
      {
        text: '送她去贤者会',
        effects: ['flag edith_wise', 'rep wise +1', 'approval vezina -1'],
        result: "{?faction == 'staff':先生的名单上有你，排第三。|加里昂的回信说收，先验心。}伊迪丝问验心疼不疼，没人答她。",
        goto: 'a3_01',
      },
      {
        text: '让薇齐娜带她去渡鸦先知会',
        effects: ['flag edith_ravens', 'approval vezina +1', 'approval barry -1'],
        result: '薇齐娜给她削了一支炭笔，又给了她一个新本子。头一页伊迪丝写的是：今天下雪。',
        goto: 'a3_01',
      },
      {
        text: '交给亚科布',
        if: 'flag.iacob_pardoned',
        effects: ['flag edith_iacob', 'approval liv -1', 'approval barry -1', 'approval vezina -1', 'approval valeran -1'],
        result: '亚科布说这孩子是块好料，说完给她倒了一杯茶，兑了蜜。四个同伴谁也没碰那壶茶。',
        goto: 'a3_01',
      },
      {
        text: '谁也不交，她跟着你',
        effects: ['flag edith_none', 'approval liv +1'],
        result: '{?is.god:她跟着一个神，学的是怎么不开口。|她跟着你，学的是你会的那几样：数人，盖印，听人把话说完。}卡斯坦给她倒了半杯酒，她喝了一口，吐了。',
        goto: 'a3_01',
      },
    ],
  },
};
