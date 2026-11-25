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
      '莱恩王的宫廷在上城，温斯坦王的人也在里头，两家隔着一张桌子吵谁是正统。下城那边传来打铁的声音。福阿哈尔公爵的宅子还在更上头，门口的台阶有人天天扫。',
      { if: 'party.liv', text: '卡斯坦在屠兽者卡斯坦的石像底下站了一会儿，把酒囊里剩的一口倒在了它脚面上。她说先请他喝一口，往后好算账。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '屠兽者头上蹲着四只。刚才是五只。要是少的那只往公爵宅子那边飞了（我说的是要是），那就有人知道我们到了。' },
      { if: "origin == 'dameria'", cls: 'letter', text: '马里昂的密信追到了客店。没有抬头，没有落款，只有一句：半精灵爬得上去吗。' },
      { if: 'is.god', text: '粥棚里的祭司分成了两拨。一拨朝你举着木牌，牌上抄的是诸神禁令：神不下场。另一拨没举牌子，只打听了你住哪家客店。' },
      { if: 'flag.god_on_agenda', text: '泛神会议的信使在坡下追上了你，带来一张要你填的表。头一栏是神号，第二栏是“所属神系（如无，填无）”，第三栏是卒年。信使说这一栏您先空着。' },
    ],
    choices: [
      {
        text: '去上城，听莱恩和温斯坦的人吵正统',
        once: true,
        check: { skill: 'history', dc: 13, party: true, mods: [{ if: "origin == 'ebonmarck'", n: 2, why: '这两家的旧账你从小听到大' }] },
        ok: {
          text: '吵了一个钟头，你听出门道来了。南王国的人只说税。北王国的人三句不离“乌霜领的仗得有个了结”。怕加雷克的是北边：永冻边区同他们挨着。',
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
      { if: 'party.vezina && !flag.god_truce', speaker: '薇齐娜', text: '城头上十九只乌鸦。它们来得比我们早，要是它们没看错（我说的是要是），今天这儿有东西可吃。' },
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

  // @@NEXT@@
};
