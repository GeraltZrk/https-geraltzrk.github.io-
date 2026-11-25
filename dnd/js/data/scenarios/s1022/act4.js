// 第四幕《玫瑰与月的婚礼》（BIBLE §11.5）　1040 年泰苏伦月—1041 年花始月
//
// 提纲（谁、变了什么、去哪）
// a4_01  彩城关门：维斯沃尔城外，芬尼克放下一篮饼。说服 DC 15 / 半身人自动 / 卡斯坦拿酒开路。败：a4x_blue。→ a4_02
// a4_02  芬尼克的那块石头：议会三年不敢出声。把两国使者请进屋许诺（说服 16 或欺瞒 15）→ viswall_safe；
//        [神] 自己许诺 → god_promise_viswall。→ a4_02b
// a4_02b 石头归谁：讨（viswall_safe 免检；败了交一百金冠）、[游荡者/黑道] 顺手拿、留给他。finnic_chip + oathstone_chip。→ a4_03
// a4_03  去洛伦泰内的路：盖帆布的车（医药 15）、抄近路（求生 14）、短休；瓦勒兰问“您站哪边”（a4x_ans_*）。→ a4_04
// a4_04  洛伦泰内（枢纽、商店、长休）：新人、红宝石矮人（dwarves_thanked）、罗恩、试冠、巴里掌勺；
//        [洛伦特] → a4_04b 回太后的话（lance_told_truth / lance_told_thrall / 不答）。→ a4_05
// a4_05  克雷格的血债：crege_penance（[旧礼] 涂油）/ crege_champions（→ a4_05c 裁决战 → a4_05d）/ crege_given。→ a4_06
// a4_06  碎玫瑰：瓦勒兰的抉择。blame_elves 自动 valeran_purist；否则 valeran_champion（战）/ valeran_released / valeran_stayed。→ a4_07
// a4_07  婚礼：feud ±1；卡斯坦的座次、敬酒或拦架、看席；[神] 证婚 god_wed。→ a4_08
// a4_08  帐子里的议事：四份章程；先请四家认账（说服 16）；[威克斯] wex_crown_promised。→ a4_08b
// a4_08b 落印：charter_emperor / league / writ（[贤者门下] 限期）/ muster；[神] god_crusade。→ a4_09
// a4_09  拉尔桑来的使者：说服 DC 17 → larthan_open；认了；[伊贝瓦尔] 拿手令压。→ a4_10
// a4_10  河里上来的：战斗，开闸（dwarves_thanked 稳成）。→ a4_11
// a4_11  那个字：信差的回信，knows_canrec_plan；三项调查；[旧礼] 葬礼。→ a4_11b（渡鸦交底，knows_why_watched）或 a4_12
// a4_12  面甲：埃德蒙·苍手。[蓝宝石之眼] 行旧礼一对一 palehand_saluted。→ a4_12b → a4_13
// a4_13  每位国王都想要一个皇帝：摊不摊开缰绳（bridle_public）；洞悉 16、说服 16（败：a4x_rushed）。→ a4_14
// a4_14  北上（小枢纽、商店、短休）：布洛克的账；卡斯坦问结解了没有（liv_told）。→ a4_15
// a4_15  第二次上山：攀断阶、喊阵、石桌、锻炉，四项走完才放行。→ a4_16
// a4_16  誓石前·碎片和结：knot_cut / iacob_loop。→ a4_16b 卡斯坦的抉择（a4x_liv_passed / liv_bridled / liv_dead / liv_north）
//        → a4_16c 山：立皇帝（castan_*）/ 毁阶（mountain_sealed）/ 下山。→ a4_17
// a4_17  下山：头一道敕令、后六道试炼；章程落空的回退。→ a4_17b 阿德蕾西娅问能不能立誓（a4x_squire_sworn）。→ a4_18
// a4_18  1041 年花始月：十字军出发，贾赫的回信。level 10。→ f_01
//
// 本段私有标记（只在本文件里设、本文件里读）：a4x_blue、a4x_ans_fair / a4x_ans_rose / a4x_ans_ask、a4x_met_roen、
// a4x_duel_won、a4x_liv_seated、a4x_insight_wed、a4x_table_won、a4x_palehand_won、a4x_read_kings、a4x_rushed、
// a4x_liv_answered、a4x_t0–a4x_t3、a4x_liv_passed、a4x_liv_stood、a4x_charter_fell、a4x_squire_sworn；计数器 a4x_trials。

export const SCENES = {
  a4_01: {
    id: 'a4_01',
    title: '彩城关门',
    chapter: '第四幕 · 玫瑰与月的婚礼',
    loc: '小人国 · 维斯沃尔城外',
    date: '1040年泰苏伦月',
    text: [
      '维斯沃尔的城门关着。城墙里头冒上来七八股烟，红的蓝的黄的都有：染坊的大缸还烧着。风一转，是碱水和煮布的味儿。阿德蕾西娅数了数城头晾的布，四十二匹，全是白的，一人长。她说渡鸦山的裹尸布也是这个尺寸。',
      '城外扎着两座营。上游是洛伦特的，帐子玫瑰色；下游是加韦德的，帐子铁灰。两边的使者都说是来“保护”小人国的，中间隔着一块萝卜地，谁也不朝对面看。',
      '城头探出一个卷毛脑袋，接着放下来一只篮子，绳上每隔一尺打一个结。篮里是半张饼，还烫。另外半张在城头上，那人正嚼着。',
      { speaker: '芬尼克', text: '我是国王。开门得问议会，议会三年没出过声了。你先把饼吃了：同桌分过饼的人不许动手，你不许，我也不许，这叫分饼礼。' },
      '他三十九岁，试炼山上活着下来的六个人里有他。从城头到篮子这一段墙，他管它叫“同桌”。',
      { if: 'is.halfling', text: '守门的半身人隔着门缝，先看的是你的脚。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '一道墙。我飞过去拔了门闩，一口酒的工夫。' },
      { if: 'party.liv', text: '阿德蕾西娅说城头有十一张弩，她数过了。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。上游那座营里有三面旗是恩特本的。他们大老远来，为的总不会是半身人。' },
      { if: 'is.god', text: '城头上的半身人看了你一会儿，回头朝里喊：那个不用吃饭的来了，饼还放不放。里头有人答：放，规矩是规矩。' },
    ],
    first: ['codex viswall', 'codex finnic', 'codex halflings'],
    choices: [
      {
        text: '吃了饼，隔着城墙同他讲理',
        check: {
          skill: 'persuasion', dc: 15, party: true,
          mods: [
            { if: 'item.witness_seal >= 1', n: 2, why: '监誓印' },
            { if: 'flag.doses_children', n: 1, why: '渡鸦山那车孩子的事传到了这里' },
          ],
        },
        ok: { text: '你说到“我谁也不替，也不保护你们”，他在城头上笑出了声。门开了一条缝，刚够一个人侧着身进去。', goto: 'a4_02' },
        fail: { text: '他听完，把篮子收了上去：话是好话，上游下游那两位讲的也是好话。你们最后是从染坊的排水口爬进去的，出来的时候从头到脚一身靛蓝。', effects: ['flag a4x_blue'], goto: 'a4_02' },
      },
      {
        text: '把脚伸到门缝前头',
        tag: '半身人',
        if: 'is.halfling',
        effects: ['item +halfling_pie'],
        result: '守门的看了一眼你脚背上的卷毛，门闩就响了。“自家人怎么不早说。”他往你手里塞了一块派，油纸包着，还烫手。',
        goto: 'a4_02',
      },
      {
        text: '让卡斯坦带着酒飞上城头',
        if: 'party.liv',
        cost: { gold: 20 },
        effects: ['approval liv +1'],
        result: '十一张弩跟着她转了半圈。她落在垛口上，自己先喝一口，再把酒囊递给最近的弩手。半个钟头以后门开了，开门的人走路有点斜。酒钱记在你账上。',
        goto: 'a4_02',
      },
    ],
  },

  a4_02: {
    id: 'a4_02',
    title: '芬尼克的那块石头',
    loc: '维斯沃尔 · 议会厅',
    text: [
      '议会厅在北岸，门正对着河那边的王宫。四十张矮椅子坐得满满的，没有一个人出声。门槛底下塞进来一张纸条，书记官捡起来举给全场看：*提议修东门的闸*。四十只手举起来，放下。这就算过了。',
      '芬尼克坐在最上头，两只脚搭着桌沿，脚背的毛梳成了小卷。他从坎肩兜里摸出一块灰石头，指甲盖大，搁在桌上。',
      { speaker: '芬尼克', text: '下山那天顺手拿的，习惯了。后来才发现，这石头搁在哪间屋，那间屋里许的愿就都得兑现。前年有位议员说，他要是撒谎，就把帽子吃了。' },
      '墙上挂着一只玻璃匣，里头是半顶毡帽，帽檐上有牙印。',
      { speaker: '芬尼克', text: '城外那两位天天隔着墙说要保护我。你是监誓人，看人发誓是你的本行。要不要请他们进这间屋，把话再说一遍？' },
      { if: 'flag.a4x_blue', text: '你们一行人是蓝的。议员们看一眼，低头，再看一眼。没人笑：这间屋里连笑都得掂量。' },
      { if: 'flag.god_half_sentence', text: '芬尼克盯着你看了半天。“你也是？”他拿指甲弹了弹那块石头。它在你旁边不响了。' },
      { if: 'is.god', text: '他把脚从桌上放下来，头一回坐直了。' },
      { if: 'is.god', speaker: '芬尼克', text: '您这样的，许一个诺顶他们十个。“维斯沃尔永不陷落。”您看这句长不长？' },
    ],
    choices: [
      {
        text: '把话挑明，请两国使者进屋立誓',
        check: {
          skill: 'persuasion', dc: 16, party: true,
          mods: [
            { if: 'flag.a4x_blue', n: -1, why: '一张蓝脸' },
            { if: 'rep.rose >= 3', n: 2, why: '太后的人信你' },
          ],
        },
        ok: {
          text: '洛伦特的使者进门先说了句客套话：洛伦特从没打算动小人国一根草。说完他的脸白了。加韦德那位一个字不肯说，芬尼克递给他一块饼，问他是不是也这个意思。他点了头。点头也算。',
          effects: ['flag viswall_safe', 'rep rose -1'],
          goto: 'a4_02b',
        },
        fail: {
          text: '两位使者走到门槛外头就站住了。洛伦特那位看了看墙上的半顶帽子，说他站在这儿也听得见。加韦德那位连台阶都没上。',
          goto: 'a4_02b',
        },
      },
      {
        text: '只说国王请两位进来喝茶',
        if: '!flag.god_half_sentence',
        check: {
          skill: 'deception', dc: 15,
          mods: [{ if: 'flag.a4x_blue', n: -1, why: '一张蓝脸' }],
        },
        ok: {
          text: '茶是真的。洛伦特的使者端起杯子，说了句“洛伦特与小人国世代交好，绝无二心”，杯子就停在了半空。加韦德那位起身要走，芬尼克已经把饼塞进了他手里。',
          effects: ['flag viswall_safe', 'rep rose -1'],
          goto: 'a4_02b',
        },
        fail: {
          text: '“喝茶？”洛伦特的使者往屋里看了一眼，看见了那半顶帽子。“替我谢过国王。我这个人一喝茶就爱说话。”两位都没进门。第二天洛伦特营里传开了一句话：监誓人请人喝茶，茶里泡着誓。',
          effects: ['rep rose -1'],
          goto: 'a4_02b',
        },
      },
      {
        text: '应他的请：许维斯沃尔永不陷落',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_promise_viswall', 'flag viswall_safe', 'rep rose -2', 'var god_acts +1'],
        result: [
          '你说了。石头没响，它用不着响。芬尼克掰了半张饼给你：“往后小人国一有事，您就得回来一趟。我们管这叫分饼礼的加长版。”城外两座营当天夜里各拔了一半帐子。洛伦特的使者走之前没来辞行，只托人捎了一句：太后会记得是谁替小人国作的保。',
          { if: 'party.liv', speaker: '卡斯坦', text: '我在这屋里许一句，石头记我一辈子。你许一句，它连响都懒得响。这不公道。' },
          { if: 'party.vezina', text: '薇齐娜把这句话记下了，记完把本子往离你远的那头挪了挪。' },
        ],
        goto: 'a4_02b',
      },
      { text: '不请使者，直接谈这块石头', goto: 'a4_02b' },
    ],
  },

  a4_02b: {
    id: 'a4_02b',
    title: '石头归谁',
    text: [
      '散会没人喊，议员们是看着日头自己走的，走到门外才敢咳嗽。屋里剩下你们和芬尼克。他把石头朝你推了一寸，手指头还按在上面。',
      { speaker: '芬尼克', text: '说实话，我巴不得你拿走。三年了，我连“明天请你吃饭”都不敢出口。可议会舍不得：有它在，城外那两位进这道门就得掂量。' },
      { if: 'flag.viswall_safe', text: '如今那两位掂量过了，话也撂在这屋里了。他把手指头抬了起来。' },
      { if: '!flag.viswall_safe', text: '他的手指头没抬。' },
      '北要塞的石匠说过，誓石上少一角，早年就少了。大小对得上。',
      { if: 'is.caster', text: '你把手搁在石头边上。里头有一股细流，同试炼山誓石裂缝里的是一路。它认得自己是从哪儿掉下来的。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '那我在这屋里说一句“我要当五十四世”，算不算数？' },
      { if: 'party.liv', speaker: '芬尼克', text: '算。办不到的话，你先想好拿什么赔。上一位赔了半顶帽子。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '我的本子进了这间屋。里头记着你许过的每一句话，一共四十七句。要是它们都得算（我说的是要是），你最好现在就走。' },
    ],
    first: ['quest mountain stage 3'],
    choices: [
      {
        text: '开口讨这块石头，说清它该回哪儿去',
        if: 'flag.viswall_safe',
        effects: ['flag finnic_chip', 'item +oathstone_chip'],
        result: '他把石头放进你手心，合上你的手指头。“拿稳。揣着它的时候，你许的诺也都得兑现，别怪我没说。”他往椅背上一靠，大声说了一句：“明天我请全城吃饭。”说完自己先笑了。',
        goto: 'a4_03',
      },
      {
        text: '开口讨这块石头，说清它该回哪儿去',
        if: '!flag.viswall_safe',
        check: {
          skill: 'persuasion', dc: 15, party: true,
          mods: [
            { if: 'flag.a4x_blue', n: -1, why: '一张蓝脸' },
            { if: 'is.halfling', n: 2, why: '自家人' },
          ],
        },
        ok: {
          text: '你讲了誓石上的缺口，讲了那半句话。书记官出去转了一圈，带回四十张纸条，三十一张写着“给”。芬尼克把石头放进你手心：“揣着它的时候，你许的诺都得兑现，别怪我没说。”',
          effects: ['flag finnic_chip', 'item +oathstone_chip'],
          goto: 'a4_03',
        },
        fail: {
          text: '门外头四十个人一齐开了口，三年没用的嗓子都是哑的：“不给。”芬尼克耸耸肩，等人走光了才把石头塞给你，要你留下一百金冠修东门的闸，省得议会说国王白送。',
          effects: ['gold -100', 'flag finnic_chip', 'item +oathstone_chip'],
          goto: 'a4_03',
        },
      },
      {
        text: '趁他转身倒茶，顺手拿走',
        tag: '游荡者',
        if: "class == 'rogue' || is.criminal",
        check: {
          skill: 'sleight', dc: 17,
          mods: [{ if: 'flag.a4x_blue', n: -1, why: '手指头是蓝的' }],
        },
        ok: {
          text: '石头进了你的袖子，桌上连灰印都没动。第二天有人往你铺盖里塞了张纸条：“手艺不错。当年我拿它的时候，比你多碰倒一只杯子。芬。”',
          effects: ['flag finnic_chip', 'item +oathstone_chip', 'xp 150'],
          goto: 'a4_03',
        },
        fail: {
          text: '你的手刚碰到桌面，他已经把石头递到你手里了，茶一滴没洒。“下回别这么费劲，开口要就行。”',
          effects: ['flag finnic_chip', 'item +oathstone_chip'],
          goto: 'a4_03',
        },
      },
      {
        text: '把石头留给他',
        effects: ['item +halfling_pie 2'],
        result: '他把石头揣回坎肩兜里，拍了拍。“那我接着当哑巴国王。”他叫人给你们包了两块派，包的时候一句客气话没敢说。',
        goto: 'a4_03',
      },
    ],
  },

  a4_03: {
    id: 'a4_03',
    title: '去洛伦泰内的路',
    loc: '伦瑟诺 · 去洛伦泰内的大路',
    date: '1040年真霜月',
    text: [
      '洛伦特的请柬追着你们换了三回日子：瘟疫改一回，新娘的嫁妆船在港外验疫又改一回。你们动身的时候已经是真霜月。',
      '大路上两股人挤一条道。赴婚礼的坐车，车顶捆着酒桶和帽盒。往南逃的走路，背上捆着锅。车夫嫌走路的挡道，走路的不让。',
      '路边停着一辆车，盖着帆布，没有牲口。车主蹲在轮子边上，手里还攥着鞭子。帆布底下有东西在动，动得不多。',
      { if: 'party.valeran', text: '进了恩特本的地界，有人朝瓦勒兰爵士行礼，隔一个村子就有人朝他脚边吐唾沫。行礼的他点头，吐唾沫的他也点头。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。恩特本的人要是在婚礼上闹起来，您站哪边？我问这个，是想知道到时候我该站在您的哪一侧。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我在上头看了一圈，往南四十里全是这样的车。翅膀根疼，今天别再叫我飞了。' },
      { if: 'party.barry', text: '巴里的篮子从维斯沃尔出来是满的。他见一个背锅的递一块乳酪，走到这儿只剩垫篮子的布。' },
    ],
    first: [{ if: 'party.valeran', then: ['quest valeran_oath stage 2'] }],
    next: 'a4_04',
    choices: [
      {
        text: '掀开帆布，给车上的人分拣',
        once: true,
        check: {
          skill: 'medicine', dc: 15, party: true,
          mods: [
            { if: 'flag.plague_samples', n: 1, why: '白旗船上见过这病' },
            { if: 'is.divine', n: 1, why: '你常给人送终' },
          ],
        },
        ok: {
          text: '帆布底下十一个人，九个已经发白。你把两个没发白的抱下车：一个六岁的丫头，一个是她一直搂着的弟弟。车主没说谢，把赶车的鞭子递给了你，自己坐回轮子边上。',
          effects: ['approval valeran +1', 'approval barry +1'],
        },
        fail: {
          text: '你刚掀开帆布一角，鞭梢就抽在了你手背上。“又来一个抢尸首的。”车主挡在车前头，走路的人都停下来看你。',
          effects: ['hp -5'],
        },
      },
      {
        text: '离开大路，抄田埂的近道',
        once: true,
        check: { skill: 'survival', dc: 14, party: true },
        ok: {
          text: '田埂尽头是一条干了的水渠，顺着走，少绕两座验疫的桥。你们比赴宴的车队早两天看见洛伦泰内的红墙。',
          effects: ['xp 120'],
        },
        fail: {
          text: '田埂尽头是一条没干的水渠。骡子陷到了肚子，你们花了半天，外加十个金冠，请种萝卜的把它拽出来。',
          effects: ['gold -10'],
        },
      },
      {
        text: '在路边的空谷仓歇半天',
        once: true,
        effects: ['rest short'],
        result: '谷仓的主人往南走了，门没锁，灶上还扣着一只锅。阿德蕾西娅把锅刷了，扣回原处。',
      },
      {
        text: '答他：谁先掀桌子，你就站在谁对面',
        if: 'party.valeran',
        effects: ['flag a4x_ans_fair', 'approval valeran +1'],
        result: '“公道。”他把这两个字掂了掂。“恕我直言，公道话最难站。到时候我看您怎么站。”',
        goto: 'a4_04',
      },
      {
        text: '答他：你站太后和新人那一边',
        if: 'party.valeran',
        effects: ['flag a4x_ans_rose', 'approval valeran -1'],
        result: '他点了点头，把手套戴上了。“我回去照实禀报。”过了一会儿他又说：“禀报给谁，我还得想想。”',
        goto: 'a4_04',
      },
      {
        text: '反问他：你自己站哪边',
        if: 'party.valeran',
        effects: ['flag a4x_ans_ask'],
        result: '他走了二十步没出声。“恕我直言，”他最后说，“我要是答得出来，就不问您了。”',
        goto: 'a4_04',
      },
      { text: '继续赶路', if: '!party.valeran', goto: 'a4_04' },
    ],
  },

  a4_04: {
    id: 'a4_04',
    title: '洛伦泰内',
    art: 'ev_lilac_wars',
    loc: '洛伦特 · 洛伦泰内',
    text: [
      '洛伦泰内的红墙上挂满了白玫瑰，墙根每隔五十步烧着一盆醋。进城的人排两队：一队验请柬，一队验指甲。血酒河上新搭了三座桥，全是为这场婚礼修的。',
      '太后伊奥瑞尔一百零二岁，还是十九年前那张脸。船上的长老们今年总算改了口，不叫她孩子了。新郎雷安二十岁，书读得多，没自己拿过一回主意。新娘奥坎娜十七，比她丈夫敢说话。',
      '离行礼还有六天。一早上，客房门缝底下塞进来九张帖子：三张请吃饭，两张请喝酒，四张没署名。',
      { if: 'is.immortal', text: '太后是全城唯一看你不躲眼神的人。她的样子没变，你也没变。' },
      { if: 'is.immortal', speaker: '伊奥瑞尔', text: '长老们总算不叫我孩子了。你呢，你打算等到哪一年？' },
      { if: 'is.longlived && is.mortal', text: '城门口的老卫兵盯着你看了半天，问你是不是十九年前那位监誓人的{m:儿子|f:女儿}。' },
      { if: '!is.longlived && is.mortal', text: '城门的台阶比十九年前高了。你的膝盖是这么说的。' },
      { if: 'flag.god_half_sentence', text: '你走过的地方，店家报的是实价，媒人讲的是实话。城东有两桩亲事当场黄了。' },
      { if: "origin == 'dameria'", text: '马里昂隔着半条街喊你的名字。他快四十了，嗓门还是切肉刀那年的嗓门，带来的贺礼装了六条船。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。城门上的白玫瑰是从恩特本的园子里剪的，拉了十一车，没给钱。' },
    ],
    first: ['codex ioriel', 'codex marion'],
    shop: {
      name: '王城的铺子',
      blurb: '玫瑰钢是粉的，价钱是红的。掌柜的说婚礼这个月不讲价。',
      stock: ['rosemetal_rapier', 'rose_knight_lance', 'rosemetal_breastplate', 'rose_knight_halfplate', 'elven_longbow', 'superior_healing_potion', 'greater_healing_potion', 'heroism_draught', 'rubenaire_red'],
    },
    choices: [
      {
        text: '去见太后，回她十九年前交代的那件事',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        once: true,
        goto: 'a4_04b',
      },
      {
        text: '去见新郎和新娘',
        once: true,
        check: { skill: 'insight', dc: 15, party: true },
        ok: {
          text: '雷安背了一段《月歌者法典》里讲初盟的话，一字不差。奥坎娜等他背完才开口：“监誓人，这门亲事，有人问过我们两个吗？”没人问过。两个人倒也都不反对，这是你从他们没松开的手上看出来的。',
          effects: ['rep moon +1'],
        },
        fail: {
          text: '雷安同你谈了半个钟头洛伦特的桥税。你出来的时候只弄清一件事：过血酒河，一个人三个铜子。奥坎娜看了你一会儿，后来就不看了。',
        },
      },
      {
        text: '提一桶酒，去谢管水闸的红宝石矮人',
        if: '!is.dwarf && !flag.dwarves_thanked',
        once: true,
        cost: { gold: 20 },
        effects: ['flag dwarves_thanked'],
        result: '替王室管了几百年水闸的红宝石矮人，城里只剩这一家，五口，最小的八十岁。老闸官拍了拍酒桶，没开。“上回有人来谢，是鲁本二世，1019 年。你是第二个。”他把你的名字记进了闸门的检修簿，排在“换铰链”后面。',
      },
      {
        text: '用矮人话同管水闸的那一家打招呼',
        tag: '矮人',
        if: 'is.dwarf && !flag.dwarves_thanked',
        once: true,
        effects: ['flag dwarves_thanked'],
        result: [
          '你隔着闸房的门用矮人话问了一句闸好不好使。里头静了一会儿，然后一家五口全出来了。老闸官说，城里上回有人同他讲矮人话是 1022 年，讲的是“装箱”。',
          { if: 'is.ruby_dwarf', text: '他听出了你的口音是红宝石领的，把你拉进闸房，从柜底翻出一本族谱，非要查出你们俩隔了几代。查到第十一代，对上了。他当场把绞盘的钥匙分了你一把。' },
        ],
      },
      {
        text: '穿过广场，去同罗恩·阿瑟利斯说话',
        once: true,
        effects: ['flag a4x_met_roen'],
        result: [
          '恩特本的主人头发全白了，站得像一杆枪。',
          { speaker: '罗恩', text: '监誓人阁下气色真好。您这些年盖过的印，我书房里收了一套，装订得很讲究。' },
          '他朝王宫抬了抬下巴。',
          { speaker: '罗恩', text: '那上头坐着一位尖耳朵的国王，要娶一位尖耳朵的王后，替他们当家的那位耳朵最尖。您管这叫洛伦特。我不敢。' },
        ],
      },
      {
        text: '陪卡斯坦去金匠铺试冠',
        if: 'party.liv',
        once: true,
        cost: { gold: 10 },
        effects: ['approval liv +1'],
        result: '金匠铺的冠都是照人的脑袋打的。她试到第七顶，冠卡在羽冠上摘不下来，十个金冠是修理钱。“不合适。”她对着铜镜说。“合适的那顶在山上。”',
      },
      {
        text: '去后厨看巴里掌勺',
        if: 'party.barry',
        once: true,
        effects: ['approval barry +1', 'item +rubenaire_red 2'],
        result: '三百人的席面，十二口灶，巴里站在一只倒扣的木桶上指挥。“对不住，对不住，鹅得再烤一刻钟。”他往你嘴里塞了一勺酱汁，又往你怀里塞了两瓶红酒，说是路上喝。',
      },
      {
        text: '在王宫的客房睡一觉',
        once: true,
        effects: ['rest long'],
        result: '床是鹅绒的，枕头里缝了干玫瑰。你睡到第二天晌午，梦里有人在数东西。醒来发现是阿德蕾西娅在门外数走过去的侍从。',
      },
      { text: '去白玫瑰庭：克雷格的案子开审了', goto: 'a4_05' },
    ],
  },

  a4_04b: {
    id: 'a4_04b',
    title: '太后的问话',
    loc: '洛伦泰内 · 太后的小花厅',
    text: [
      '太后在小花厅见你，没叫人上茶。窗台上一排白玫瑰，都剪过刺。她先问那封玫瑰色封蜡的信你还留着没有。留着。她点了点头，没往回要。',
      { speaker: '伊奥瑞尔', text: '我儿子过几天成亲，杀他父亲的人坐在第三排。枪是不是克雷格自己的，十九年了，你现在可以说了。' },
      { if: 'flag.p_hall_truth', speaker: '伊奥瑞尔', text: '照直说。你当年在大厅里就是这么不给人留面子的，我记得。' },
      { if: 'flag.lance_truth', text: '你怀里揣着凭据，是当年从试炼山脚下的比武场带回来的。' },
      { if: '!flag.lance_truth', text: '你手里没有凭据，只有一句话。' },
      { if: 'flag.god_half_sentence', text: '在你跟前没人撒得了谎，你自己也不行。她清楚这一点，所以才挑今天问。' },
    ],
    choices: [
      {
        text: '照实说：是他自己的手，是失手',
        effects: ['flag lance_told_truth', { if: 'flag.lance_truth', then: ['world feud -1'], else: ['world feud +1'] }, 'quest lance done'],
        result: [
          { if: 'flag.lance_truth', text: '她把凭据看了两遍，折起来收进袖子。“失手。”她说。“这两个字，我等了二十年才肯念出声。”' },
          { if: '!flag.lance_truth', text: '她听完了。“没有凭据的话，月家的人二十年前就同我说过，说得比你顺。”她把这句空口白话记在了月家的账上。' },
        ],
        goto: 'a4_04',
      },
      {
        text: '告诉她：他当时被慑住了',
        if: '!flag.god_half_sentence',
        effects: ['flag lance_told_thrall', 'world feud -1', 'world writ +1', 'approval valeran -2', 'quest lance done'],
        result: '她看了你很久。“被慑住的。那就谁也不用恨谁了。”她叫人去请宫廷法师，补一份验心的文书。{?party.valeran:瓦勒兰爵士站在门外，一个字不落地听见了。|门外的侍从把这句话带出了宫。}',
        goto: 'a4_04',
      },
      {
        text: '不答',
        effects: ['world feud +1', 'quest lance done'],
        result: '“那就是不肯说。”她叫人上了茶，亲手把杯子推给你。“不说也是一种说法，监誓人。我会当它是最坏的那一种。”',
        goto: 'a4_04',
      },
    ],
  },

  a4_05: {
    id: 'a4_05',
    title: '克雷格的血债',
    art: 'ev_piety',
    loc: '洛伦泰内 · 白玫瑰庭',
    text: [
      '白玫瑰庭的大殿供着阿德安和米娜拉，一个持枪，一个捧杯。两尊像当中停着鲁本二世的石棺，棺盖上刻的是他比武那天穿的甲。二十年了，棺前的蜡没断过。',
      '克雷格·达梅里斯四十二岁，卡奈特的国王，是自己走进来的，没带卫兵。他在石棺前三步站住，再往前得有人准许。太后坐在侧席，两只手是空的。',
      { speaker: '克雷格', text: '那一枪是我的。枪杆是我自己挑的，马是我自己勒的。二十年了，没有一位肯告诉我该怎么还，监誓人，您给个数。' },
      { speaker: '伊奥瑞尔', text: '他要一个数。我要一个说法。你给哪一个？' },
      { if: "origin == 'lorent' && flag.lance_asked", text: '克雷格看见你，点了一下头。十九年前在马里昂身边，你当面问过他那一枪。' },
      { if: 'is.god', text: '克雷格绕过太后的席位，直接跪在了你跟前，求你罚他。太后没动。“他跪错了人。”她说。“神罚的不算数，得是我点头的那一份。”' },
      { if: 'is.god && flag.god_on_agenda', text: '白玫瑰庭的主祭凑过来，问你如今算哪一家的。泛神会议还没给名分，没名分的神在这座殿里涂不了油。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。先王的棺材在这儿停了二十年，凶手今天头一回进这个门。恩特本的人都在外头数他待多久。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '欠钱还钱，欠一枪还一枪。让他挨一下不就结了？你们人类办事真费蜡。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我多句嘴。我们威克斯有句老话：坟要挖得比恨深。这一位埋了二十年，坟还是浅的。' },
    ],
    first: ['codex rose_and_moon'],
    choices: [
      {
        text: '判忏悔礼：当众卸甲，在先王棺前守一夜',
        effects: ['flag crege_penance', 'world feud -2', 'rep moon -1'],
        result: '他当众卸了甲，一件一件码在殿门口，只穿衬衣在石棺前跪到天亮。太后在侧席陪了一夜，一眼没看他。天亮她说了句“行了”。月庭的人说，卡奈特的国王不该跪洛伦特的棺材。',
        goto: 'a4_06',
      },
      {
        text: '判忏悔礼，并亲手给他涂油',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: [
          'flag crege_penance', 'world feud -2', 'rep moon -1',
          {
            if: 'flag.aria_anoints || (is.god && flag.god_on_agenda)',
            then: ['rep rose -1'],
            else: ['world feud -1', { if: 'item.holy_oil >= 1', then: ['item -holy_oil'] }],
          },
        ],
        result: [
          '他当众卸了甲，只穿衬衣在石棺前跪到天亮。太后在侧席陪了一夜。',
          { if: 'flag.aria_anoints && !(is.god && flag.god_on_agenda)', text: '你刚拔开油瓶的塞子，白玫瑰庭的主祭就伸手挡住了：月神神殿担保过的手，在这座殿里涂的油不算。忏悔礼照行，他的额头是干的。' },
          { if: 'is.god && flag.god_on_agenda', text: '主祭伸手挡住了你的油瓶：会议还没给名分。忏悔礼照行，他的额头是干的。' },
          { if: '!flag.aria_anoints && !(is.god && flag.god_on_agenda)', text: '天亮的时候你把油抹在他额头上。涂过油的忏悔，往后谁再提这笔债，就是同殿里这两位过不去。太后看着那一点油光，过了很久才点头。' },
        ],
        goto: 'a4_06',
      },
      {
        text: '判骑士裁决：两家各出一人，见血为止',
        effects: ['flag crege_champions', 'world feud -1'],
        goto: 'a4_05c',
      },
      {
        text: '把他交给太后',
        effects: ['flag crege_given', 'world feud +2', 'rep rose +2', 'rep moon -3', 'approval valeran -1'],
        result: '克雷格把剑解下来，放在石棺上，跟着太后的人从侧门出去了，没回头。当晚马里昂来敲你的门，敲了三下，没等你开就走了。',
        goto: 'a4_06',
      },
    ],
  },

  a4_05c: {
    id: 'a4_05c',
    title: '见血为止',
    loc: '洛伦泰内 · 白玫瑰庭的前院',
    text: [
      '殿前的院子铺了沙。白玫瑰庭出的是个二十出头的骑士，枪旗上一朵白玫瑰，他父亲当年是鲁本二世的掌旗官。规矩三条：钝枪，见血为止，不许追击。',
      '克雷格在场边解自己的臂甲，解到一半停住了，看着你。按规矩，欠债的一方可以自己上，也可以请人替。',
      { if: "faction == 'sapphire'", text: '司仪把裁决用的白手套递给了你：这是蓝宝石之眼的规矩，洛伦特人学了才二十年。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '钝枪。你们管这叫打架？行，我在边上押十个金冠。' },
    ],
    choices: [
      {
        text: '替克雷格出场',
        if: 'partysize == 0',
        combat: {
          title: '白玫瑰庭的裁决',
          intro: '号角响了一声。对面的年轻骑士把枪旗压低，朝先王的石棺点了一下。',
          enemies: [{ id: 'lorentish_knight', name: '白玫瑰庭的斗士', hpMult: 1.5 }],
          pcMustStand: true,
          fleeable: false,
          specials: [
            {
              id: 'flag', name: '挑落他的枪旗', desc: '旗一落，他得低头去看',
              check: { skill: 'athletics', alt: ['acrobatics'], dc: 15, mods: [{ if: "faction == 'sapphire'", n: 2, why: '骑士裁决是你的本行' }] },
              success: { text: '白玫瑰的枪旗落在沙上。他低头看了一眼，就这一眼。', applyAll: { cond: 'dazed', turns: 2 } },
              fail: { text: '你的枪尖擦着旗杆滑了过去，人跟着往前栽了半步。', selfDmg: '1d8' },
            },
          ],
          win: { effects: ['flag a4x_duel_won', 'rep rose -1'], goto: 'a4_05d' },
          lose: { effects: ['rep rose +1'], goto: 'a4_05d' },
        },
      },
      {
        text: '替克雷格出场，同伴作副手',
        if: 'partysize > 0',
        combat: {
          title: '白玫瑰庭的裁决',
          intro: '洛伦特的规矩许带副手，副手只许同副手打。号角响了一声。',
          enemies: [
            { id: 'lorentish_knight', name: '白玫瑰庭的斗士', hpMult: 1.5 },
            { id: 'knight', n: 2, name: '斗士的副手' },
          ],
          pcMustStand: true,
          fleeable: false,
          specials: [
            {
              id: 'flag', name: '挑落他的枪旗', desc: '旗一落，他得低头去看',
              check: { skill: 'athletics', alt: ['acrobatics'], dc: 15, mods: [{ if: "faction == 'sapphire'", n: 2, why: '骑士裁决是你的本行' }] },
              success: { text: '白玫瑰的枪旗落在沙上。对面三个人都低头看了一眼，就这一眼。', applyAll: { cond: 'dazed', turns: 2 } },
              fail: { text: '你的枪尖擦着旗杆滑了过去，人跟着往前栽了半步。', selfDmg: '1d8' },
            },
          ],
          win: { effects: ['flag a4x_duel_won', 'rep rose -1'], goto: 'a4_05d' },
          lose: { effects: ['rep rose +1'], goto: 'a4_05d' },
        },
      },
      {
        text: '把钝枪递给克雷格，让他自己上',
        effects: ['rep moon +1', 'approval liv +1', 'approval valeran +1'],
        result: '他上了场。第三合，他把盾放低了一寸。在场的骑士都看出来了，没有一个说破。钝枪戳在他肩窝里，血从锁甲的环眼往外渗。他下场的时候没让人扶，走到石棺跟前，把那根沾了血的钝枪靠在棺脚上，才去找人包扎。',
        goto: 'a4_06',
      },
    ],
  },

  a4_05d: {
    id: 'a4_05d',
    title: '沙上的血',
    text: [
      { if: 'flag.a4x_duel_won', text: '血是白玫瑰庭那位年轻骑士的，在左肩，不深。他拿手套按住，朝你点了头。太后的人把沙扫平了。' },
      { if: 'flag.a4x_duel_won', text: '恩特本那一席有人说了一句：洛伦特的血，又叫月家的人放了一回。说得不响，够半个院子听见。' },
      { if: '!flag.a4x_duel_won', text: '血是你的，在眉骨上，流进了眼睛。年轻骑士收了枪，退后三步，照规矩没追。' },
      { if: '!flag.a4x_duel_won', text: '太后看着沙上那一小块红，说：“够了。”她身后的侍女捧着先王比武那天的头盔，从早上捧到这时候，这才放回匣子里。' },
      '克雷格站在场边，臂甲还是解到一半的样子。他把它重新扣上，扣了三回才扣好。',
    ],
    next: 'a4_06',
  },

  a4_06: {
    id: 'a4_06',
    title: '碎玫瑰',
    loc: '洛伦泰内 · 城外 · 恩特本的营地',
    text: [
      '恩特本的营扎在红墙外的葡萄坡上，四十来顶帐子，马比人多。每顶帐子前插一面旗：一朵红玫瑰，从当中劈成两半。他们管这叫“碎玫瑰”，打算在婚宴上到第三道菜的时候站起来。',
      '罗恩·阿瑟利斯坐在一只卸下来的马鞍上喝汤，没起身。他父亲和兄弟都埋在莫尔班平原。那一仗过去二十六年了，他讲起来还是“上个月”的口气。',
      { speaker: '罗恩', text: '太后是精灵，国王是半个，新娘也是半个。再过两代，洛伦特的王座上还剩几分是我们的？监誓人，我只问这一句。' },
      { if: 'flag.a4x_met_roen', speaker: '罗恩', text: '广场上那位。汤还有，坐。' },
      { if: 'is.god', text: '营里有一半人摘了帽子，另一半把手按在了剑上。罗恩说，尖耳朵之后是女祭司，女祭司之后是神，恩特本的桌上快没有恩特本人的位子了。' },
      { if: 'party.valeran', text: '他朝瓦勒兰爵士抬了抬勺子。瓦勒兰的父亲当年是跟着老罗恩冲的阵，没回来。' },
      { if: 'party.valeran && flag.blame_elves', speaker: '瓦勒兰', text: '恕我直言。今年在瓦洛森，您当着各国的面说病是精灵带来的。那天您已经替我选了。' },
      { if: 'party.valeran && flag.blame_elves', text: '他解下佩剑，剑柄朝你递过来。恩特本的规矩：你碰一下，他对你的誓就算还了。' },
      { if: 'party.valeran && !flag.blame_elves && flag.a4x_ans_fair', speaker: '瓦勒兰', text: '路上您说，谁先掀桌子您站谁对面。恕我直言，先掀桌子的会是我的乡亲。到那时候我算哪一边的，请您现在定。' },
      { if: 'party.valeran && !flag.blame_elves && flag.a4x_ans_rose', speaker: '瓦勒兰', text: '路上您说您站太后那边。恕我直言，那您现在就站在我乡亲的对面，我还站在您旁边。这件事得有个说法。' },
      { if: 'party.valeran && !flag.blame_elves && !flag.a4x_ans_fair && !flag.a4x_ans_rose', speaker: '瓦勒兰', text: '路上您反问我站哪边。恕我直言，我想了一路，没想出来。所以我来请您定。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '四十顶帐子，一顶一位老爷。酒桶我数过了，他们带的酒不够闹到第三道菜。' },
      { if: 'party.barry', text: '巴里往罗恩的汤锅里添了一把自己带的干蘑菇。罗恩看着他添，没拦。' },
    ],
    next: 'a4_07',
    choices: [
      {
        text: '碰一下他的剑柄，看着他走过去',
        if: 'party.valeran && flag.blame_elves',
        effects: ['flag valeran_purist', 'flag wedding_blood', 'companion -valeran', 'quest valeran_oath done'],
        result: '他把剑挂回去，朝你欠了欠身，同十七年前在卡斯托纳斯城门口递信时一样深。然后他走到罗恩的火边。有人给他让了个位子，递过去一碗汤。',
        goto: 'a4_07',
      },
      {
        text: '提出骑士裁决，点瓦勒兰替精灵一方出战',
        if: 'party.valeran && !flag.blame_elves',
        combat: {
          title: '葡萄坡上的裁决',
          intro: '罗恩把汤碗放下了。“阿瑟利斯家出两个。钝枪。输了的认。”瓦勒兰爵士拉下面甲之前说了一句：恕我直言，我是替誓打的，不是替耳朵。',
          enemies: [{ id: 'lorentish_knight', n: 2, name: '阿瑟利斯家的斗士', hpMult: 1.4 }],
          fleeable: false,
          specials: [
            {
              id: 'vines', name: '把他们引进葡萄架', desc: '架子矮，马过不去，长枪转不开',
              check: { skill: 'acrobatics', alt: ['survival'], dc: 15 },
              success: { text: '两匹马一头扎进葡萄架，枪杆叫老藤别住了。', applyAll: { cond: 'restrained', turns: 2 } },
              fail: { text: '你自己先叫藤绊了一跤，膝盖磕在架桩上。', selfDmg: '1d8' },
            },
            {
              id: 'horses', name: '惊了坡上拴的马', desc: '四十匹马一乱，谁也顾不上出枪',
              check: { skill: 'animal', alt: ['intimidation'], dc: 15, party: true },
              success: { text: '四十匹马一齐扯缰绳，坡上全是尘土。两位斗士忙着勒自己的坐骑。', applyAll: { cond: 'dazed', turns: 2 } },
              fail: { text: '离你最近的那匹马尥了一蹶子，正踢在你胯上。', selfDmg: '1d10' },
            },
          ],
          win: { effects: ['flag valeran_champion', 'flag enteben_stopped', 'quest valeran_oath done'], goto: 'a4_07' },
          lose: { effects: ['flag valeran_champion', 'flag wedding_blood', 'quest valeran_oath done'], goto: 'a4_07' },
        },
      },
      {
        text: '解了他对你的誓，放他回去拦',
        if: 'party.valeran && !flag.blame_elves',
        effects: [
          'flag valeran_released',
          { if: 'world.feud <= 4', then: ['flag enteben_stopped'], else: ['flag wedding_blood'] },
          'companion -valeran', 'quest valeran_oath done',
        ],
        result: '你碰了一下他的剑柄。“恕我直言，”他说，“我头一回不知道该怎么直言。”他朝那四十顶帐子走过去，走得不快。拦不拦得住，要到第三道菜才见分晓。',
        goto: 'a4_07',
      },
      {
        text: '告诉他：这是恩特本自己的事，你不插手',
        if: 'party.valeran && !flag.blame_elves',
        effects: ['flag valeran_stayed', 'flag wedding_blood', 'approval valeran -2', 'quest valeran_oath done'],
        result: '瓦勒兰爵士把别人递来的汤碗接过去，又放下了，一口没喝。回城的路上他走在你后面三步，一直是三步。',
        goto: 'a4_07',
      },
      {
        text: '坐下喝汤，同罗恩把话说开',
        if: '!party.valeran',
        check: {
          skill: 'persuasion', dc: 17, party: true,
          mods: [
            { if: 'flag.a4x_met_roen', n: 2, why: '广场上打过照面' },
            { if: 'flag.blame_elves', n: 2, why: '你在瓦洛森说过的话' },
          ],
        },
        ok: {
          text: '你没劝他认精灵，只问他：令尊冲阵那天，身后站的是不是自己的国王。他喝完了汤。“第三道菜，我的人坐着。”他说。“只这一回。”',
          effects: ['flag valeran_stayed', 'flag enteben_stopped'],
          goto: 'a4_07',
        },
        fail: {
          text: '他听你说完，把勺子在锅沿上磕了磕。“监誓人看了二十年的誓，没看出来有的誓是叫人逼着发的。汤钱不要了。”',
          effects: ['flag valeran_stayed', 'flag wedding_blood'],
          goto: 'a4_07',
        },
      },
      {
        text: '看一眼就走，不插手',
        if: '!party.valeran',
        effects: ['flag valeran_stayed', 'flag wedding_blood', 'rep rose -1'],
        result: '你下坡的时候，营里有人在磨餐刀。磨得很慢，离第三道菜还有好几天。',
        goto: 'a4_07',
      },
    ],
  },

  a4_07: {
    id: 'a4_07',
    title: '婚礼',
    art: 'ck3_barry',
    loc: '洛伦泰内 · 王宫大厅',
    text: [
      '婚期定在年关：真霜月最后一夜行礼，席面摆到新年。新郎再过四天满二十一。三百人的大厅里，西坎诺的每一顶冠都到了。洛伦特那顶红宝石冠上有一百多颗石头，雷安戴着它不敢低头。',
      { if: 'flag.crege_given', text: '座次排了三天。卡奈特的席位空着，椅子没撤。' },
      { if: '!flag.crege_given', text: '座次排了三天。克雷格坐第三排，离先王的画像隔着两根柱子。' },
      { if: 'flag.wedding_blood', text: '上到第三道菜，恩特本那一桌的人一齐站了起来，桌子是罗恩亲手掀的。有人拔了餐刀，有人拔的是别的。等卫兵把两边分开，白桌布上已经红了一道，从主桌拖到门口。' },
      { if: 'flag.wedding_blood && flag.valeran_champion', text: '葡萄坡上那场裁决是恩特本赢的。赢了的人不用认账。' },
      { if: 'flag.wedding_blood && flag.valeran_purist', text: '瓦勒兰爵士站在那一桌后头，手没碰刀，也没拦人。' },
      { if: 'flag.wedding_blood', text: '誓词是在血擦干以后说的。奥坎娜的声音比雷安稳。' },
      { if: '!flag.wedding_blood', text: '上到第三道菜，恩特本那一桌没人动。他们把菜吃完了，一口酒没敬。新郎新娘是握着手说的誓词，奥坎娜替雷安提了一个字。' },
      { if: 'flag.doses_moon', text: '太后那一桌的人隔着烛台不看你：今年那三剂药，你全给了月家。' },
      { if: 'flag.doses_rose', text: '月庭那一桌没人同你碰杯：今年那三剂药，你全给了洛伦特。' },
      { if: 'is.halfelf', text: '新郎新娘都是半精灵，你也是。满厅的人看他们的耳朵，顺带也看你的。' },
      { if: 'is.god', text: '把神排在哪儿，司礼官想了三天：高过诸王不行，低过诸王也不行。他昨晚辞了差事。你的椅子是临时从厨房搬来的，椅背上有一块油。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，对不住，第四道我多做了六十份。逃到城根底下的那些人也得过年。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我是五十四世，五十四世不坐下席。你去同那个拿名册的说，不然我自己去说。' },
    ],
    first: [{ if: 'flag.wedding_blood', then: ['world feud +1'], else: ['world feud -1'] }],
    choices: [
      {
        text: '把卡斯坦排到主桌',
        if: 'party.liv && !flag.a4x_liv_seated',
        once: true,
        effects: ['flag a4x_liv_seated', 'approval liv +2', 'rep rose -1'],
        result: '她坐在加韦德国王和一位月神女祭司当中，翅膀收不拢，扫翻了两只杯子。太后隔着七个座位看了你一眼。那一眼是记了账的。',
      },
      {
        text: '请卡斯坦去下席',
        if: 'party.liv && !flag.a4x_liv_seated',
        once: true,
        effects: ['flag a4x_liv_seated', 'approval liv -1'],
        result: '下席同乌翼兵团的老兵一桌。她喝得很凶，敬酒敬的是“山上那位”，没敬你。',
      },
      {
        text: '起身敬酒',
        if: '!flag.wedding_blood',
        once: true,
        check: { skill: 'performance', alt: ['persuasion'], dc: 15 },
        ok: {
          text: '你说，十九年前你看着各国发誓，今天头一回看见有人发誓发得这么高兴。雷安的脸红了，太后笑了一下，月家那一桌先举的杯。',
          effects: ['rep rose +1', 'rep moon +1'],
        },
        fail: {
          text: '你敬到一半，把“西洛瑞尔”念成了“西尔穆纳”。两家人都看着你。奥坎娜站起来，替你把那杯酒喝了。',
          effects: ['rep rose -1'],
        },
      },
      {
        text: '举着监誓印，站到两桌人当中去',
        if: 'flag.wedding_blood',
        once: true,
        check: {
          skill: 'intimidation', alt: ['persuasion'], dc: 16,
          mods: [{ if: 'item.witness_seal >= 1', n: 1, why: '监誓印' }],
        },
        ok: {
          text: '你把印举过头顶：这座厅里今晚发的是婚誓，谁再拔刀，你就把他的名字盖在背誓那一栏。卫兵赶到之前，两边已经各退了三步。',
          effects: ['rep rose +1', 'rep moon +1'],
        },
        fail: {
          text: '你刚举起印，后脑勺就挨了一只银盘子。扔盘子的是哪一家的，事后谁也说不清。两家都派人来赔了不是，赔得很敷衍。',
          effects: ['hp -6'],
        },
      },
      {
        text: '看席上谁在同谁咬耳朵',
        once: true,
        check: { skill: 'insight', alt: ['perception'], dc: 15, party: true },
        ok: {
          text: '瓦洛森的法师在同加韦德的人说话，说的是“令状”。东坎诺的几位王挨着坐，刀叉没动，在等人。马里昂朝你使了个眼色，意思是帐子里见。',
          effects: ['flag a4x_insight_wed'],
        },
        fail: {
          text: '你看了一晚上，只看出上菜的侍从里有两个是太后的耳目。他们也看出来你在看了，往后每道菜都先上你这一桌。',
        },
      },
      {
        text: '站起来，替新人证婚',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag god_wed', 'world feud -1', 'rep moon -1', 'rep rose -1', 'var god_acts +1'],
        result: [
          '月神神殿的大女祭司同白玫瑰庭的主祭为谁先开口争了半个月。你站起来的时候，两个人都还张着嘴。等你说完，他们一齐坐下了，脸色一模一样。司礼官的徒弟在婚书上找“证婚”那一栏，找到了，又在旁边另画了一格，空着。',
          { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。神证的婚，往后谁也解不了。新娘十七岁，我替她多想了一步。' },
          { if: 'party.barry', speaker: '巴里', text: '对不住……那往后小两口吵架，找谁评理？' },
        ],
      },
      { text: '散席，去婚宴厅外的大帐', goto: 'a4_08' },
    ],
  },

  a4_08: {
    id: 'a4_08',
    title: '帐子里的议事',
    loc: '洛伦泰内 · 婚宴外的大帐',
    text: [
      '婚宴厅外的草地上支了一顶军帐，里头一张长桌，四份章程，每份的角上压一只酒杯。十字军要进科乌里亚去打坎雷克，归谁统领，今晚得定。监誓人的印落在哪一份上，哪一份算数。',
      { speaker: '北王国的温斯坦', text: '皇帝。东坎诺要一位卡斯坦，一面旗。没有这面旗，我们三家的兵连谁走前头都要先打一架。' },
      { speaker: '伊奥瑞尔', text: '同盟。自由诸国打过一回术士王，章程是现成的。等这件事完了，我们还在。' },
      { speaker: '瓦洛森的法师', text: '令状。封路的是我们，验尸的是我们，熬药的也是我们。兵归谁管，诸位自己掂量。' },
      { speaker: '马里昂', text: '会盟。愿意来的来，不愿意的我不拿刀架着。自愿来的才靠得住。' },
      '四份里没有哪一份是胡说。',
      { if: 'flag.a4x_insight_wed', text: '谁同谁事先通过气，你在席上已经看清了。' },
      { if: 'flag.acromis_traded', text: '瓦洛森的法师从袖子里抽出一张旧令状：十八年前你拿阿克罗米斯的把柄，从加里昂手里换来的那一张。“有先例。”他说。' },
      { if: 'flag.map_drawn', text: '温斯坦摊开一张图。上头那条线你认得，是你当年在试炼山的石桌上画的“将来的疆界”，有人上山抄了下来。' },
      { if: "origin == 'wex'", text: '戴伦公爵二十七岁，坐在末席。他托人递过来一张条子：威克斯这一票，换一个王号。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '皇帝那份好。人选是现成的，就坐在这儿，带着翅膀。' },
      { if: 'party.liv && party.valeran', speaker: '瓦勒兰', text: '恕我直言，队长。上一位卡斯坦的兵烧过恩特本三个庄子，庄子的名字我背得出来。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是印落在令状上（我说的是要是），十年以后这顶帐子里坐的全是法师。理论上。' },
    ],
    first: ['codex wise_council'],
    choices: [
      {
        text: '落印之前，先请四家答应：落在哪份都认',
        once: true,
        check: {
          skill: 'persuasion', dc: 16, party: true,
          adv: 'flag.a4x_insight_wed',
          mods: [{ if: 'rep.moon >= 3 && rep.rose >= 3', n: 2, why: '两家都信你' }],
        },
        ok: {
          text: '四家都点了头。马里昂点得最慢，温斯坦点完又加了一句“看在监誓人的面上”。书记官把这四个头记了下来。',
          effects: ['flag a4x_table_won'],
        },
        fail: {
          text: '温斯坦说，认不认，得看落在哪一份上。帐子里凉了半截，有人把自己那份章程往怀里拢了拢。',
          effects: ['rep escann -1'],
        },
      },
      {
        text: '朝末席点头：替威克斯要回王号',
        tag: '威克斯',
        if: "origin == 'wex'",
        once: true,
        effects: ['flag wex_crown_promised', 'rep wex +2'],
        result: '戴伦把那张条子收回去，凑到烛火上烧了。威克斯五十年没有王了，他不想留字据。{?item.oathstone_chip >= 1:你兜里那块石头热了一下。|}',
      },
      { text: '拿起印', goto: 'a4_08b' },
    ],
  },

  a4_08b: {
    id: 'a4_08b',
    title: '落印',
    text: [
      '书记官把印泥盒打开了。四份章程在桌上排成一排，四家的人各站在自己那一份后头。阿德蕾西娅替你托着印，两只手托的。',
      { if: "origin == 'dameria'", text: '马里昂站在“会盟”后头，朝你挤了下眼。你是从他宫里出来的人，满帐子都记得。' },
      { if: "origin == 'ebonmarck' && flag.garrec_king", text: '加雷克·乌霜就站在“皇帝”那一份后头，如今是东坎诺北边的一位王了。他看的是你腰上的军团牌。' },
      { if: "origin == 'ebonmarck' && !flag.garrec_king", text: '“皇帝”那一份后头站着东坎诺的使者，没有一个姓乌霜的。替黑龙一系开口的，只剩你腰上那块军团牌。' },
      { if: "faction == 'staff'", text: '瓦洛森的法师把笔递给你：令状的条文可以由你来起草。' },
      { if: 'flag.stair_down && !party.liv', text: '石阶十六年前就毁了，如今没人上得了那座山。“皇帝”那一份是一张空纸。' },
      { if: 'is.god', text: '帐角上有人清了清嗓子，提了第五份：不打谁家的旗，奉神的名出征。满帐子没有一个人笑。' },
      { if: 'is.god && flag.god_herald', speaker: '马里昂', text: '先问一句。听说您在布勒瓦尔认了差事，如今是替太阳王说话，还是替自己？' },
    ],
    choices: [
      {
        text: '把印落在“皇帝”上',
        req: '!flag.stair_down || party.liv',
        reqText: '石阶已经毁了，没人上得去',
        effects: [
          'flag charter_emperor', 'world mantle +3', 'approval liv +1',
          { if: "origin == 'ebonmarck' && flag.garrec_king", then: ['rep dragon +2'] },
          { if: 'flag.a4x_table_won', then: ['rep moon +1'] },
        ],
        result: '印落下去。东坎诺的使者当场摘了帽子。克拉丽蒙德没摘，她把椅子往后挪了一尺，出帐去了。',
        goto: 'a4_09',
      },
      {
        text: '把印落在“同盟”上',
        effects: ['flag charter_league', 'rep rose +3', { if: '!flag.a4x_table_won', then: ['rep moon -1'] }],
        result: '印落下去。太后没笑，只把自己那只酒杯从章程角上拿开了：用不着压了。马里昂说，他祖母那一辈人打术士王用的也是这面旗，那回可没人问洛伦特排第几。',
        goto: 'a4_09',
      },
      {
        text: '把印落在“令状”上',
        effects: ['flag charter_writ', 'world writ +3', 'approval vezina -1', 'approval valeran -1'],
        result: '印落下去。瓦洛森的法师把章程卷起来，卷得很紧。从今天起，哪条路封，哪个村的尸首归谁收，哪一路兵往哪走，都凭塔里出来的一张纸。',
        goto: 'a4_09',
      },
      {
        text: '亲手起草令状，写上十年的期限再落印',
        tag: '贤者门下',
        if: "faction == 'staff'",
        effects: ['flag charter_writ', 'world writ +2', 'rep wise +1'],
        result: '你把条文重写了一遍，末尾添了一行：此令十年为期，期满由各国监誓人会同复核。瓦洛森的法师把那一行看了很久，签了。',
        goto: 'a4_09',
      },
      {
        text: '把印落在“会盟”上',
        effects: [
          'flag charter_muster', 'world communion +2', 'world unburied +1', 'approval barry +1',
          { if: "origin == 'dameria'", then: ['rep moon +2'] },
        ],
        result: "印落下去。没有总旗，没有总帅，愿意来的自己带粮。{?origin == 'dameria':马里昂当着满帐子的人管你叫“我的监誓人”。|马里昂朝你举了举杯。}瓦洛森的法师小声算了一笔账：这样凑兵，要慢一个春天。",
        goto: 'a4_09',
      },
      {
        text: '点头：奉你的名出征',
        tag: '神',
        if: 'is.god',
        effects: ['flag charter_muster', 'flag god_crusade', 'world communion +2', 'world mantle +1', 'var god_acts +1'],
        result: '你点了头。满帐子的人一齐站了起来，四份章程没人再看。兵来得很快，快得不像自愿，有人是怕不来。从今天起，这支兵干的每一件事都记在你名下。',
        goto: 'a4_09',
      },
    ],
  },

  a4_09: {
    id: 'a4_09',
    title: '拉尔桑来的使者',
    loc: '洛伦泰内 · 使者的住处',
    text: [
      '伊贝瓦尔的使者住在城西一间没生火的屋里，三只箱子摞在门边，一只没开。他是个三百来岁的月精灵，说话的时候看着窗外。',
      { speaker: '使者', text: '我是来知会一声的，谈不上商量。拉尔桑一线从上个月起对人类关了。行尸过不去，逃难的也过不去，这两样我们的弓手夜里分不清。' },
      '他把一张单子推过来。线外头的人，他们是数着的：三千四百，在林子边上搭了棚，每天夜里少几个。阿德蕾西娅把单子上的数加了一遍，说少算了十一个孩子。',
      { if: "origin == 'ibevar'", text: '他是你母亲那一支的表亲，上回见面还在月火号的甲板上。他先问你，人类的面包吃得惯吃不惯。' },
      { if: 'is.god', text: '他见了你没起身。伊贝瓦尔的精灵把神戒了，这你是清楚的。' },
      { if: 'flag.blame_elves', text: '你在瓦洛森说的那句话，他抄在了单子背面，一个字没改。' },
      { if: 'flag.edict_upheld', text: '他提了一句威克斯：逐精灵的那道令上，盖的是你的印。' },
      { if: 'flag.calindal_named', text: '长老们还托他问：卡林达尔是先驱精灵的手艺，这是你自己说的。那把剑什么时候还？' },
      { if: 'flag.alaria_blocked', text: '他记得你。当年在泛神会议上拦下阿拉莉亚封神的，是你。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我插一句。我是在船上叫人轮流带大的，没人问过我是谁家的孩子，有饭就给。墙外头那三千四百个，你们就当是我。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，贵国的墙修得很好。家父那一辈人要是也会修墙，我们今天用不着来求人开门。' },
    ],
    first: ['codex larthan'],
    choices: [
      {
        text: '劝他把线说开：验过没发病的，白天放过去',
        check: {
          skill: 'persuasion', dc: 17, party: true,
          mods: [
            { if: 'flag.alaria_blocked', n: 2, why: '你拦过阿拉莉亚封神' },
            { if: 'flag.p_ibevar_blood', n: 2, why: '你替死去的精灵讨过命' },
            { if: 'rep.elders >= 3', n: 2, why: '长老们信你' },
            { if: "origin == 'ibevar'", n: 2, why: '使者是你的族亲' },
            { if: 'item.lunatein_plank >= 1', n: 1, why: '月火号的船板' },
            { if: 'flag.blame_elves', n: -4, why: '你说过病是精灵带来的' },
            { if: 'flag.edict_upheld', n: -2, why: '逐精灵令上有你的印' },
            { if: 'flag.calindal_named', n: -1, why: '长老们想要回那把剑' },
          ],
        },
        ok: {
          text: '他把单子翻过来，在背面写了一行精灵字，折好。“没发白的，验过舌头的，白天过。夜里照旧。”他说亲王不会高兴。说完他把门边头一只箱子打开了。',
          effects: ['flag larthan_open', 'world communion +2', 'rep elders -1'],
          goto: 'a4_10',
        },
        fail: {
          text: '他把你的话一句一句记下来，说会带回去。十二天后亲王的回信到了，只有一行：上回有人劝我们开门。',
          goto: 'a4_10',
        },
      },
      {
        text: '认了：墙是他们的，线也是',
        effects: ['rep elders +1', 'approval barry -1'],
        result: '他头一回正眼看你。“我会同亲王说，人类那边有一位没劝我们。”阿德蕾西娅把那张单子收了起来，没还他。',
        goto: 'a4_10',
      },
      {
        text: '把亲王的手令放在桌上',
        tag: '伊贝瓦尔',
        if: "origin == 'ibevar'",
        req: 'item.ibenion_writ >= 1',
        reqText: '需要亲王的手令',
        effects: ['flag larthan_open', 'world communion +2', 'rep elders -3'],
        result: '那张折了三折的船帆布一放下，他就站起来了：见手令得站。“这是亲王写给你出门用的。你拿它开他自己的门。”线开了。他说，瓦多塞德的城门，你往后不用回去敲了。',
        goto: 'a4_10',
      },
    ],
  },

  a4_10: {
    id: 'a4_10',
    title: '河里上来的',
    art: 'ev_undead_army',
    loc: '洛伦泰内 · 血酒河岸 · 夜',
    text: [
      '半夜，三座新桥当中那一座的桥头有人喊。血酒河是从东边流过来的，上游四十里就有没人收尸的村子。死人顺着水漂进了城，在婚礼这一区的石阶上一个一个站起来，身上挂着水草。',
      '守桥头的是两个卫兵，穿的是婚礼的礼服甲，胸口别着白玫瑰。上游有一道水闸，闸房的灯亮着。开了闸，这一段河岸能冲干净。',
      '阿德蕾西娅数了数：石阶上七个，水里还有。她把你的盾递了过来。',
      { if: 'flag.dwarves_thanked', text: '闸房的窗口探出一把红胡子。老闸官朝你举了举那桶没开的酒，手已经搭在绞盘上了。' },
      { if: '!flag.dwarves_thanked', text: '闸房的窗口有人往外看了一眼，把窗板合上了。绞盘得你自己去摇。' },
      { if: 'is.divine', text: '你念了半句送葬的祷词。最前头那两个在桥栏边上停了一停。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '河里的不算军功。打完你请酒。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '七个。刚才是六个。水里那个背信匣的要是也上来（我说的是要是），匣子留着。' },
    ],
    combat: {
      title: '桥头',
      intro: '头一个踩上桥板的时候，卫兵胸口的白玫瑰掉进了河里。',
      enemies: [
        { id: 'pestilent_zombie', n: 4 },
        { id: 'ghoul', n: 2 },
        { id: 'wight', name: '背信匣的死人' },
      ],
      allies: [{ id: 'man_at_arms', n: 2, name: '婚礼的卫兵' }],
      noAwe: true,
      xp: 700,
      specials: [
        {
          id: 'sluice', name: '开闸', desc: '放上游的水下来，把石阶冲干净',
          check: { skill: 'athletics', dc: 16, mods: [{ if: 'flag.dwarves_thanked', n: 20, why: '矮人已经把手搭在绞盘上了' }] },
          success: { text: '闸门提起来，一人高的水头把石阶上的东西全卷了下去。', dmgAll: '4d6', type: 'bludgeoning' },
          fail: { text: '绞盘卡死了，反弹的摇柄抽在你肋上。', selfDmg: '2d6' },
        },
        {
          id: 'rite', name: '念送葬的祷词', desc: '按规矩送过的死人，脚步会慢',
          check: { skill: 'religion', dc: 15, mods: [{ if: 'is.divine', n: 20, why: '这是你的本行' }] },
          success: { text: '你把祷词念完了。桥板上那几个站住了，像在等人叫名字。', applyAll: { cond: 'stunned', turns: 1 } },
          fail: { text: '你念错了一句。它们没停。' },
        },
      ],
      win: { goto: 'a4_11' },
      lose: { effects: ['world unburied +1', 'world feud +1'], goto: 'a4_11' },
    },
  },

  a4_11: {
    id: 'a4_11',
    title: '那个字',
    art: 'ev_looming_death',
    loc: '洛伦泰内 · 河边的停尸棚',
    text: [
      '天亮以后，捞上来的都摆在河边的棚子里，一共二十三具，脚朝着河。第九具穿信差的短斗篷，腰上拴一只铜信匣，匣口封着黑蜡，没进水。他的靴底是走穿的，脚掌磨到了骨头。',
      { if: 'flag.iacob_pardoned', text: '匣里是一封回信。字很小，一行挤着一行，纸边有指甲反复刮过的印子。抬头写的是“福阿哈尔公爵亚科布阁下”。' },
      { if: '!flag.iacob_pardoned', text: '匣里是一封回信。字很小，一行挤着一行，纸边有指甲反复刮过的印子。抬头只有“阁下”两个字，没有名字。' },
      { cls: 'letter', text: '“来信收悉。阁下问我急不急。不急。活人自己会把山修好，修好了自己会请一位上去。我等了二十年，不差这几个冬天。誓词是现成的，*至我寿终之日*，这一句归我念。又及：后脑勺痒得厉害，劳驾往后别在信里提维纳克。”' },
      { if: 'flag.knows_myrrh', text: '信纸上有一股没药味。打听过皇帝遗体的那个人，身上也是这个味儿。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '他说活人会自己请一位上去。那位要是我呢。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。这封信要是真的，帐子里那四份章程，有一份是替写信的人拟的。' },
    ],
    first: [
      'flag knows_canrec_plan', 'quest canrec_trail stage 3', 'codex the_word_2',
      { if: 'flag.ravens_trust || party.vezina', then: ['flag knows_why_watched', 'codex ravenseers_2'] },
    ],
    next: 'a4_12',
    choices: [
      {
        text: '查这封信是哪年发出来的',
        once: true,
        check: { skill: 'investigation', dc: 16, party: true },
        ok: {
          text: '蜡封上压着年份：1024。{?flag.mended:北要塞的石匠上试炼山动工，也是那一年。|你头一回从试炼山下来，也是那一年。}信差是死了以后接着送的，送了十六年，靴底就是这么走穿的。',
          effects: ['xp 120'],
        },
        fail: {
          text: '你把信对着光看了半天，只看出纸很贵。阿德蕾西娅把信匣翻过来给你看：蜡封上压着四个数，1024。她数靴底的破洞数到第九个，不数了。',
        },
      },
      {
        text: '凑近闻一闻信纸',
        once: true,
        check: {
          skill: 'arcana', dc: 16,
          adv: 'is.caster',
          mods: [{ if: 'flag.knows_roster', n: 2, why: '你见过那本名册' }],
        },
        ok: {
          text: '没药，旧皮面，还有实验室那些陶罐上的味儿。这张纸是从那本名册上裁下来的边。写信的人撕的是自己的账本，撕得很随手。',
          effects: ['xp 120'],
        },
        fail: {
          text: '你闻到了没药，然后是别的。你扶着棚柱站了一刻钟，眼前才不发白。',
          effects: ['hp -4'],
        },
      },
      {
        text: '把那句誓词从头想一遍',
        once: true,
        check: { skill: 'history', dc: 15, party: true },
        ok: {
          text: '历代卡斯坦立誓，头一句都押在“寿终之日”上。沼泽堡那个字，就是叫这一天到了。写信的人会念。山上的结一天不解，谁在石头前立誓，谁的这一天就捏在他手里。',
          effects: ['xp 120'],
        },
        fail: {
          text: '你想了半天，卡在“寿终”两个字上。阿德蕾西娅把那句誓词数了一遍，六个字。“大人，这一天要是有人替他定呢？”她问得很认真。',
        },
      },
      {
        text: '给这二十三具办一场正经葬礼',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['world unburied -1'],
        result: '你叫人把棚子里的二十三具一具一具擦净，头朝东。没有束腰，用的是婚宴撤下来的白桌布。你把名字能问到的都念了，问不到的念“某村某人”。念完，洛伦泰内的收尸人才敢上来抬。',
      },
      { text: '把信收进印匣', if: 'flag.ravens_trust || party.vezina', goto: 'a4_11b' },
      { text: '把信收进印匣', if: '!flag.ravens_trust && !party.vezina', goto: 'a4_12' },
    ],
  },

  a4_11b: {
    id: 'a4_11b',
    title: '烤鹅上的渡鸦',
    text: [
      '棚子外头的长凳上摆着婚宴撤下来的剩席，是给抬尸首的人留的。一只渡鸦落在半只烤鹅上，没啄，歪着头等你出来。它开口的时候，声音像在念别人的遗嘱。',
      { speaker: '渡鸦', text: '德基南长老问监誓人好。你想知道我们为什么坐着看。凡是白年早早掐灭的年头，后头都接着人类把精灵赶下海。' },
      { speaker: '渡鸦', text: '有太平的那些年头，都得先有一个精灵同一个女先知的女儿坐下来熬药。我们挑了后一种，所以在那棵树上蹲了十九年。' },
      '它说完，在鹅背上蹭了蹭喙，飞了。瓦洛森的塔里，加里昂同玛希尔达今年熬出了头一锅药。这件事你是亲眼看见的。',
      { if: 'party.vezina && flag.vezina_eye', speaker: '薇齐娜', text: '这一句我见过。没告诉你，是因为不仁从来不说哪一句要紧。' },
      { if: 'party.vezina && !flag.vezina_eye', speaker: '薇齐娜', text: '是他的声音。他从来没同我说过这么长的话。……我跟了他二十年。' },
      { if: 'party.barry', speaker: '巴里', text: '十九年。他们看着我家那孩子长大，看着坟一座一座空，一口热饭没给谁送过。对不住，这个理我咽不下去。' },
    ],
    next: 'a4_12',
  },

  a4_12: {
    id: 'a4_12',
    title: '面甲',
    art: 'ev_adeanic_war',
    loc: '洛伦泰内 · 婚礼比武场',
    text: [
      '比武会最后一天。最后一轮的号角吹过了，东门却又开了一回：一个骑士骑进场，没报名字，没举旗，马蹄踩在霜上没有声音。面甲是拉下来的。两个扈从跟在马后，走路不弯膝盖。',
      '头一个上去拦的是洛伦特的掌旗官，一合落马。枪尖在他喉咙上停了一下，收回去了。看台上有东坎诺来的老兵站了起来。',
      { speaker: '老兵', text: '那个起手，那个收枪。是净手，埃德蒙·净手。他去年冬天死在梅雷斯克，棺材是我抬的。' },
      '骑士拨转马头，朝看台最上头那一层走过去。那一层坐的是冠。',
      { if: "faction == 'sapphire'", text: '你认得他进场时行的礼：枪尖点地，再抬到眉心。蓝宝石之眼的旧礼，是他同凯伦两个人定的。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，那个礼我认得。家父教过，说是东边的骑士才用，洛伦特人学了要挨笑。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '他是凯伦的人。凯伦吃我爹的饷，掉过头来打我爹。让开，这个归我。' },
      { if: 'party.liv && party.valeran', speaker: '瓦勒兰', text: '恕我直言，队长。凯伦杀了家父，他的规矩我照样学。规矩同人是两回事。' },
      { if: 'is.god', text: '他不怕你。他朝你行了半个礼，面甲里头有声音，像隔着一口井：“凯伦说赢了要留人。神留不留？”' },
    ],
    first: ['codex edmund', 'codex death_knight'],
    choices: [
      {
        text: '对他行旧礼，请他一对一',
        tag: '蓝宝石之眼',
        if: "faction == 'sapphire'",
        effects: ['flag palehand_saluted'],
        combat: {
          title: '旧礼',
          intro: '他把枪竖了起来，等你行完礼。两个扈从退到场边，站成了两根桩子。',
          enemies: [{ id: 'edmund_palehand' }],
          noAwe: true,
          xp: 900,
          rounds: 8,
          roundsOutcome: 'win',
          specials: [
            {
              id: 'visor', name: '掀他的面甲', desc: '让全场看见里面是什么',
              check: { skill: 'athletics', dc: 16 },
              success: { text: '面甲掀开了。全场都看见了里面是什么。他抬手去合，慢了一拍。', applyAll: { cond: 'stunned', turns: 1 } },
              fail: { text: '你的手指头刚抠住面甲的边，他的盾就到了。', selfDmg: '2d6' },
            },
            {
              id: 'creed', name: '喊凯伦的规矩', desc: '赢了要留人',
              check: { skill: 'performance', alt: ['persuasion'], dc: 15 },
              success: { text: '“赢了要留人！”他的枪尖低了一寸。', applyAll: { cond: 'weakened', turns: 2 } },
              fail: { text: '你喊岔了气。他没听见，或者听见了没认。' },
            },
          ],
          win: { effects: ['flag a4x_palehand_won'], goto: 'a4_12b' },
          lose: { goto: 'a4_12b' },
        },
      },
      {
        text: '学着瓦勒兰的样子，对他行那个礼',
        if: "party.valeran && faction != 'sapphire'",
        check: { skill: 'performance', alt: ['history'], dc: 16 },
        ok: {
          text: '枪尖点地，再抬到眉心。瓦勒兰爵士在你身后小声说了句“眉心，不是鼻梁”，你及时抬高了一寸。骑士勒住马，把枪竖了起来。两个扈从退到了场边。',
          effects: ['flag palehand_saluted'],
          combat: {
            title: '旧礼',
            intro: '他等你行完礼，才把枪放平。',
            enemies: [{ id: 'edmund_palehand' }],
            noAwe: true,
            xp: 900,
            rounds: 8,
            roundsOutcome: 'win',
            specials: [
              {
                id: 'visor', name: '掀他的面甲', desc: '让全场看见里面是什么',
                check: { skill: 'athletics', dc: 16 },
                success: { text: '面甲掀开了。全场都看见了里面是什么。他抬手去合，慢了一拍。', applyAll: { cond: 'stunned', turns: 1 } },
                fail: { text: '你的手指头刚抠住面甲的边，他的盾就到了。', selfDmg: '2d6' },
              },
            ],
            win: { effects: ['flag a4x_palehand_won'], goto: 'a4_12b' },
            lose: { goto: 'a4_12b' },
          },
        },
        fail: {
          text: '你的枪尖点了地，抬到了鼻梁。差一寸。骑士看了你一会儿，把枪放平了，两个扈从也跟着往前走。',
          combat: {
            title: '面甲',
            intro: '礼行错了，他按没行过礼的打。',
            enemies: [{ id: 'edmund_palehand' }, { id: 'wight', n: 2, name: '苍手的扈从' }],
            noAwe: true,
            xp: 900,
            rounds: 8,
            roundsOutcome: 'win',
            specials: [
              {
                id: 'visor', name: '掀他的面甲', desc: '让全场看见里面是什么',
                check: { skill: 'athletics', dc: 16 },
                success: { text: '面甲掀开了。全场都看见了里面是什么。他抬手去合，慢了一拍。', applyAll: { cond: 'stunned', turns: 1 } },
                fail: { text: '你的手指头刚抠住面甲的边，他的盾就到了。', selfDmg: '2d6' },
              },
            ],
            win: { effects: ['flag a4x_palehand_won'], goto: 'a4_12b' },
            lose: { goto: 'a4_12b' },
          },
        },
      },
      {
        text: '走进沙场，拦在他和看台当中',
        combat: {
          title: '面甲',
          intro: '他没有加速。马是走着过来的，枪是平的。两个扈从一左一右散开。',
          enemies: [{ id: 'edmund_palehand' }, { id: 'wight', n: 2, name: '苍手的扈从' }],
          noAwe: true,
          xp: 900,
          rounds: 8,
          roundsOutcome: 'win',
          specials: [
            {
              id: 'visor', name: '掀他的面甲', desc: '让全场看见里面是什么',
              check: { skill: 'athletics', dc: 16 },
              success: { text: '面甲掀开了。全场都看见了里面是什么。他抬手去合，慢了一拍，两个扈从跟着停了。', applyAll: { cond: 'stunned', turns: 1 } },
              fail: { text: '你的手指头刚抠住面甲的边，他的盾就到了。', selfDmg: '2d6' },
            },
            {
              id: 'creed', name: '喊凯伦的规矩', desc: '赢了要留人',
              check: { skill: 'performance', alt: ['persuasion'], dc: 15 },
              success: { text: '“赢了要留人！”他的枪尖低了一寸。', applyAll: { cond: 'weakened', turns: 2 } },
              fail: { text: '你喊岔了气。他没听见，或者听见了没认。' },
            },
          ],
          win: { effects: ['flag a4x_palehand_won'], goto: 'a4_12b' },
          lose: { goto: 'a4_12b' },
        },
      },
    ],
  },

  a4_12b: {
    id: 'a4_12b',
    title: '他没追任何人',
    text: [
      { if: 'flag.a4x_palehand_won', text: '他的枪断在你的盾上。他看了看手里那半截，把它插在沙地上，拨马走了。走的是进来的那道门，没追任何人，也没人敢追。两个扈从跟在后头，膝盖还是不弯。' },
      { if: '!flag.a4x_palehand_won', text: '你是仰面摔在沙上的。枪尖抵着你的喉咙停了一下，近得数得清上头的霜花。然后它收回去了。他拨马走了，没追任何人。' },
      { if: 'flag.palehand_saluted', text: '出门之前他勒住马，朝你回了一个礼：枪尖点地，再抬到眉心。这回是整个的。' },
      '阿德蕾西娅说他进场以后一共出了九枪，九枪都收了。看台上那位东坎诺的老兵坐了回去，嘴里念着一句话：凯伦说，赢了要留人。',
      '看台最上头那一层已经空了。冠都回了各家的偏厅，灯一间一间亮起来。',
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。一个死人今天守了规矩。在场的活人，守了的不到一半。' },
    ],
    choices: [
      {
        text: '朝着那道门答他：神也留人',
        if: 'is.god && flag.a4x_palehand_won',
        effects: ['rep escann +1'],
        result: '门洞里的马蹄停了一步，接着走远了。看台上有人把你这句话记了下来，当天晚上已经传出三个版本，有一个版本里你答的是“看心情”。',
        goto: 'a4_13',
      },
      { text: '去偏厅，诸王在等', goto: 'a4_13' },
    ],
  },

  a4_13: {
    id: 'a4_13',
    title: '每位国王都想要一个皇帝',
    art: 'ev_hre',
    loc: '洛伦泰内 · 各家的偏厅',
    text: [
      '死人骑进了婚礼的比武场，还占了上风。当天夜里，王宫的偏厅没有一间是黑的，每间里都有一位国王在说同一句话：得有一面大旗，得有个皇帝。你兜里揣着那封信。写信的人等的就是今晚这些话。',
      '人选一个一个摆上桌，像摆菜。卢坎·西卢里昂二十一岁，乌霜家的外孙，精灵的耳朵，他们管他叫“银龙”。',
      { speaker: '卢坎', text: '我舅舅是黑龙，我父亲是精灵，我娘说我们兄妹六个是照着一颗星生的。山认哪一样，我想上去问问。' },
      { if: 'flag.lucan_iacob', text: '他身后站着一个七十九岁的老人，替他拿着斗篷。亚科布。' },
      { if: 'flag.lucan_marion', text: '他是月庭带大的，满口达梅里亚腔，管马里昂叫叔叔。' },
      { if: 'flag.garrec_king && !flag.god_truce', text: '加雷克·乌霜也在桌上，四十出头，黑龙，自己有兵，只说要先给父亲补一场葬礼。' },
      { if: 'flag.garrec_king && flag.god_truce', text: '有人提了加雷克。满屋子笑了一声：“神保的那位？”没人把他当正经人选。' },
      { if: 'flag.golem_pc', text: '还有人提了你：第九道的石像向你下过跪。' },
      { if: 'party.liv', text: '卡斯坦在走廊里嚷，说名单上少写了一位。' },
      '克拉丽蒙德四十二岁，卡林达尔横在膝上。满屋子的人说了一晚上，她只说了两个字：“毁阶。”',
      '嗓门最大的那几位，你挨个看过去。没有一个眼睛后面是空的。',
      { if: 'flag.god_half_sentence', text: '你一进屋，三位国王的话说到一半改了口，改成了实话。有一位干脆闭了嘴。' },
    ],
    first: ['codex clarimonde', 'codex lucan'],
    choices: [
      {
        text: '看看谁最急',
        once: true,
        check: { skill: 'insight', dc: 16, party: true },
        ok: {
          text: '最急的都站在后排。每位人选身后都有一个替他算过账的人，手指头在袖子里掐着日子。{?flag.lucan_iacob:卢坎每说一句都要停半拍，等身后那位老人在斗篷上敲一下。|卢坎是屋里唯一没人替他算账的，所以他说得最慢。}',
          effects: ['flag a4x_read_kings', 'xp 120'],
        },
        fail: {
          text: '你看了一圈，人人都急。南王国的一位伯爵以为你在数他的随从，把手按在了剑上。',
          effects: ['rep escann -1'],
        },
      },
      {
        text: '劝诸王：先让你上山看过，再定人',
        once: true,
        check: {
          skill: 'persuasion', dc: 16, party: true,
          mods: [
            { if: 'flag.a4x_read_kings', n: 2, why: '你看清了谁在后头掐日子' },
            { if: 'rep.escann >= 3', n: 2, why: '东坎诺诸王信你' },
            { if: 'flag.clarimonde_pact', n: 1, why: '克拉丽蒙德替你说了一句' },
          ],
        },
        ok: {
          text: '他们答应等你从山上下来。克拉丽蒙德说她也去，带着镐。温斯坦说他也去，带着冠。两个人互相看了一眼。',
          effects: ['rep escann +1'],
        },
        fail: {
          text: '东坎诺的几位王不肯等。{?flag.charter_emperor:章程上盖的是你的印，他们限你三个月之内让山上有人。|他们说，监誓人看监誓人的，他们找他们的。}',
          effects: [{ if: 'flag.charter_emperor', then: ['flag a4x_rushed'], else: ['rep escann -1'] }],
        },
      },
      {
        text: '把信念给他们听，把缰绳的事摊开讲',
        effects: ['flag bridle_public', 'world mantle -2', 'world writ +1', 'approval liv +1', 'approval vezina +1'],
        result: '你念到“誓词是现成的”，屋里没人出声了。温斯坦头一个开口：结解没解，谁说了算？瓦洛森的法师咳了一声。从今往后，这句话只有法师答得上来。',
        goto: 'a4_14',
      },
      {
        text: '不讲，把信收好',
        effects: ['approval liv -1'],
        result: '你一个字没提。散的时候温斯坦拍了拍你的肩，说山上见。{?party.liv:卡斯坦在走廊里等你，看了看你按着衣兜的那只手，什么也没问。|走廊里的灯一盏一盏灭了。}',
        goto: 'a4_14',
      },
    ],
  },

  a4_14: {
    id: 'a4_14',
    title: '北上',
    art: 'ev_forge',
    loc: '东坎诺 · 北要塞',
    date: '1041年花始月',
    text: [
      '北要塞脚下的雪刚化，路是烂的。布洛克的工棚还在老地方，账本换到了第九本。岩石矮人石匠头也没抬，先报数。',
      { if: 'flag.stair_down', speaker: '布洛克', text: '十六年。石阶是你们自己砸的，砸得很地道，我验过。如今上山只有两条路：飞，或者坐我吊石料的篮子。' },
      { if: 'flag.mended && !flag.stair_down', speaker: '布洛克', text: '十六年，石料四千二百车，折了两个徒弟，一个摔的，一个老的。十道试炼修好了九道。剩下誓石，那块我修不了，它缺一角。' },
      { if: '!flag.mended && !flag.stair_down', speaker: '布洛克', text: '十六年，没人给钱，我一锤没动。十道试炼，坏了七道半，同你上回来一个样。零头我没给你抹。' },
      { if: 'item.oathstone_chip >= 1', text: '他看见你手里的东西，停了笔。“就是这一角。断口是旧的。它在谁兜里搁了二十年？”' },
      { if: 'is.dwarf', text: '他同你讲的是矮人话，账报得更细，连哪一车石料掺了砂都报了。' },
      { if: 'is.god', speaker: '布洛克', text: '巴尔加尔是干完活，死了，过了几百年才封的。你这样活着就封，工期没法算。' },
      { if: 'flag.a4x_rushed', text: '东坎诺的信使一天来催两回。没工夫歇了。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，我快四十了，这山是第二回爬。上回我以为我是来盯着您的。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '第十一本本子留在山下。第十二本带着。山上说的话都得算数，理论上那才最该记。' },
      { if: 'party.barry', speaker: '巴里', text: '我不上去了，对不住。屠夫原是那座山上下来的人干的。汤我在山下热着，你们下来就有。' },
      { if: 'party.liv', text: '卡斯坦把酒囊递给你，自己没喝。她的翅根全灰了。' },
      { if: 'party.liv && !flag.liv_told', speaker: '卡斯坦', text: '你同我说实话。山上那个结，到底解了没有。' },
      { if: 'party.liv && flag.liv_told', speaker: '卡斯坦', text: '缰绳的事我都知道了。我只问一句：那个结，你打算解，还是不打算解。' },
    ],
    first: [
      'codex trialmount', 'codex trials',
      { if: 'party.liv', then: ['quest liv_claim stage 3'] },
      { if: 'flag.bridle_public', then: ['flag liv_told'] },
    ],
    shop: {
      name: '石匠的库房',
      blurb: '布洛克按斤报价，不讲价，秤是他自己校的。',
      stock: ['hold_plate', 'hold_chain', 'hold_warhammer', 'ward_runestone', 'vigor_runestone', 'superior_healing_potion', 'greater_healing_potion', 'stoneskin_potion'],
    },
    choices: [
      {
        text: '把缰绳的事从头到尾告诉她',
        if: 'party.liv && !flag.liv_told && !flag.a4x_liv_answered',
        once: true,
        effects: ['flag liv_told', 'flag a4x_liv_answered', 'approval liv +1'],
        result: '你从誓词讲到沼泽堡，从那半句话讲到河里捞上来的信。她听完把酒囊拿回去，喝了一大口。“那我爹那三十七年，也是这么叫人牵着的。”她没再问别的。',
      },
      {
        text: '只说：上去看了才清楚',
        if: 'party.liv && !flag.liv_told && !flag.a4x_liv_answered',
        once: true,
        effects: ['flag a4x_liv_answered', 'approval liv -1'],
        result: '她看了你一会儿。“行。那就上去看。”酒囊她自己收起来了。',
      },
      {
        text: '在工棚里歇半天',
        if: '!flag.a4x_rushed',
        once: true,
        effects: ['rest short'],
        result: '工棚里的炉子烧的是碎石料底下垫的松木，烟很大。布洛克的徒弟给你们一人盛了一碗松塔上炖的肉，肉是什么肉，他没报。',
      },
      { text: '上山', goto: 'a4_15' },
    ],
  },

  a4_15: {
    id: 'a4_15',
    title: '第二次上山',
    art: 'ev_wex_precipice',
    loc: '东坎诺 · 试炼山',
    text: [
      { if: 'flag.mended && !flag.stair_down', text: '石阶是新凿的，棱角还割手。前三道得照规矩重走一遍。' },
      { if: '!flag.mended && !flag.stair_down && party.liv', text: '石阶还是断的。卡斯坦先飞上去放绳子，同十六年前一样，只是这回她放得慢。' },
      { if: '!flag.mended && !flag.stair_down && !party.liv', text: '石阶还是断的。十六年前有人替你们放绳子，这回得自己搭。' },
      { if: 'flag.stair_down && party.liv', text: '石阶没了，只剩一面崖。卡斯坦一趟带一个，带了三趟，骂了三趟。' },
      { if: 'flag.stair_down && !party.liv', text: '石阶没了，只剩一面崖。布洛克借出吊石料的篮子，一回吊一个人，吊了一上午。' },
      '山脚那块岩石底下是头一道：喊一嗓子，要喊到北要塞的守军应声。半坡的石桌是第二道，冰凉，手指头划过去就留一条白线。第三道在山腰的洞里，炉火自己不灭，得给矮人打一件礼物。',
      '誓石是第四道，在上头林子里的空地上。',
      { if: 'flag.iacob_pardoned', text: '空地上已经坐着一个人。亚科布七十九岁了，带着一包凿子，朝你们抬了抬手，像在自己家里招呼客人。' },
      { if: 'is.caster', text: '越往上走，耳朵里越像有人说话，说到一半就断。你听得出那半句是冲着什么去的：誓词里的“我的土地与我的子民”。' },
      { if: 'is.flyer', text: '你有翅膀。绳子是给别人用的。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '翅膀根疼。上回我是一口气飞上来的。你别笑，你膝盖响了一路，我都听着呢。' },
    ],
    choices: [
      {
        text: '抓着绳子攀过那段断阶',
        if: '!flag.mended && !flag.stair_down && !is.martial && !is.flyer',
        once: true,
        effects: ['flag a4x_t0'],
        check: { skill: 'athletics', alt: ['acrobatics'], dc: 15 },
        ok: { text: '绳子勒手，断阶底下是四十丈的空。你没往下看，一口气过去了。', effects: ['var a4x_trials +1'] },
        fail: { text: '你在半当中荡了三个来回，膝盖撞在崖壁上，是叫上头的人像拽水桶一样拽上去的。', effects: ['hp -5'] },
      },
      {
        text: '一个人把绳桥拉起来',
        tag: '武艺',
        if: '!flag.mended && !flag.stair_down && is.martial && !is.flyer',
        once: true,
        effects: ['flag a4x_t0', 'var a4x_trials +1'],
        result: '你把绳头在腰上绕了两圈，一个人把整座绳桥拽直了，拴死在石桩上。后头的人是走过来的，阿德蕾西娅在桥上还数了数桥板。',
      },
      {
        text: '自己飞过断阶',
        tag: '有翅膀',
        if: '!flag.mended && !flag.stair_down && is.flyer',
        once: true,
        effects: ['flag a4x_t0', 'var a4x_trials +1'],
        result: '四十丈的空，你三下翅膀就过去了，回头替后面的人把绳子拴牢。',
      },
      {
        text: '头一道：朝北要塞喊阵',
        once: true,
        effects: ['flag a4x_t1'],
        check: {
          skill: 'performance', alt: ['intimidation'], dc: 15, party: true,
          mods: [{ if: 'flag.mended', n: 2, why: '北要塞这回有人守着' }],
        },
        ok: {
          text: '{?flag.mended:北要塞的垛口上有人应了，先是一个，后来是一排。十六年前这里是没人应的。|声音撞在北要塞的空垛口上，弹了回来。山把回声也算作应。}',
          effects: ['var a4x_trials +1'],
        },
        fail: { text: '喊劈了。山不认，从崖上给你落了一嘴石渣。', effects: ['hp -5'] },
      },
      {
        text: '第二道：在石桌上描疆界',
        once: true,
        effects: ['flag a4x_t2'],
        check: { skill: 'history', dc: 15, adv: 'flag.map_drawn' },
        ok: {
          text: '{?flag.map_drawn:你当年画的那条线还在桌上，白的，一点没淡。你照着描了一遍，分毫不差。|眼下的疆界你画对了。“将来的”那一条，你的手指头停了一下才落下去。}',
          effects: ['var a4x_trials +1'],
        },
        fail: { text: '你把乌霜边区画进了南王国。石桌冰了你一下，从指尖一直麻到肩膀。', effects: ['hp -5'] },
      },
      {
        text: '第三道：在锻炉给矮人打一件礼物',
        if: "!is.dwarf && class != 'artificer'",
        once: true,
        effects: ['flag a4x_t3'],
        check: { skill: 'athletics', alt: ['sleight'], dc: 16 },
        ok: { text: '你打了一只带盖的铁杯，盖子合得上。布洛克后来看了，说壁厚不匀，收下了。', effects: ['var a4x_trials +1'] },
        fail: { text: '你打出来的东西，自己也叫不上名字。火星燎了你的手背。', effects: ['hp -5'] },
      },
      {
        text: '第三道：给矮人打一件礼物',
        tag: '矮人',
        if: 'is.dwarf',
        once: true,
        effects: ['flag a4x_t3', 'var a4x_trials +1'],
        result: '矮人给矮人打礼物，这一道是白送的。你打了一把校秤用的小砝码，底下錾了今年的年份。',
      },
      {
        text: '第三道：给矮人打一件礼物',
        tag: '奇械师',
        if: "class == 'artificer' && !is.dwarf",
        once: true,
        effects: ['flag a4x_t3', 'var a4x_trials +1'],
        result: '炉子是一千年前的炉子，风箱是你的老本行。你打了一只会自己合盖的铁杯，合盖的时候咔的一声。布洛克后来把它拆了，又装了回去，没说话。',
      },
      {
        text: '往上走，去誓石',
        req: 'flag.a4x_t1 && flag.a4x_t2 && flag.a4x_t3 && (flag.mended || flag.stair_down || flag.a4x_t0)',
        reqText: '前头的路和三道试炼还没走完',
        goto: 'a4_16',
      },
    ],
  },

  a4_16: {
    id: 'a4_16',
    title: '誓石前',
    loc: '试炼山 · 誓石',
    text: [
      '誓石立在林子里的一块空地上，一人半高，裂缝从顶上一直劈到根。历代卡斯坦的誓词一位挨一位刻在上面，头一句都一样。阿德蕾西娅数了数，五十三段，最底下还空着一行。',
      '石头右下角缺了一块，指甲盖大，断口是旧的。',
      { if: '!flag.knot_cut', text: '裂缝里有东西在流，很细，贴近了听得见，是一句话的前半截。' },
      { if: 'flag.knot_cut', text: '裂缝里是空的。那半句话，十六年前就叫你亲手扯下来了。' },
      { if: 'flag.knot_alarian && !flag.knot_cut', text: '阿拉里安·歌堡十六年前在裂缝两边各钉了一根银弦。那半句话顺着弦绕了十六年，只剩最后一股没松。' },
      { if: 'flag.knot_ravens && !flag.knot_alarian && !flag.knot_cut', text: '先知会的人十六年前在石根埋了一圈鸦骨。那半句话叫他们一股一股引了出去，只剩最后一股。' },
      { if: 'flag.knot_iacob && !flag.knot_alarian && !flag.knot_ravens && !flag.knot_cut', text: '亚科布的凿痕沿着裂缝排了一路，间距分毫不差。{?flag.iacob_pardoned:他|他是贤者会的人押上来的，}说只剩最后一股：缺角放回去，他来收尾。' },
      { if: '!flag.knot_alarian && !flag.knot_ravens && !flag.knot_iacob && !flag.knot_cut', text: '十六年里没人动过那半句话。它还整个挂在上头。' },
      { if: 'flag.iacob_pardoned', speaker: '亚科布', text: '监誓人。我这辈子背叛过一个人，修过一座山。您看后一样抵不抵得了前一样。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '十一只。山下是十二只。少的那只要么死了，要么已经在石头后面听了。' },
    ],
    first: ['codex oathstone', 'codex bridle'],
    next: 'a4_16b',
    choices: [
      {
        text: '把碎片按回缺口',
        if: 'item.oathstone_chip >= 1 && !flag.knot_cut && (flag.knot_alarian || flag.knot_ravens)',
        effects: ['flag knot_cut', 'item -oathstone_chip'],
        result: '碎片自己吸了上去，合得连指甲都插不进。石头里那股细流顿了一下，最后一股松了，像有人把一句说了二十年的话咽了回去。空地上的鸟叫了一声。',
        goto: 'a4_16b',
      },
      {
        text: '把碎片按回缺口',
        if: 'item.oathstone_chip >= 1 && !flag.knot_cut && flag.knot_iacob && !flag.knot_alarian && !flag.knot_ravens && ((party.vezina && flag.vezina_eye) || flag.knows_word)',
        effects: ['flag knot_cut', 'item -oathstone_chip'],
        result: '碎片吸了上去。亚科布下最后一凿的时候，{?flag.knows_word:你认出了那半个字的走向|薇齐娜的那只眼转了过去}：他留了一个活扣。你按住他的手腕。他看了你一会儿，把凿子倒过来递给你。“手艺人的毛病，总想给自己留个线头。”这一回是真解了。',
        goto: 'a4_16b',
      },
      {
        text: '把碎片按回缺口',
        if: 'item.oathstone_chip >= 1 && !flag.knot_cut && flag.knot_iacob && !flag.knot_alarian && !flag.knot_ravens && !((party.vezina && flag.vezina_eye) || flag.knows_word)',
        effects: ['item -oathstone_chip'],
        check: {
          skill: 'insight', dc: 17, party: true,
          mods: [{ if: 'var.a4x_trials >= 3', n: 2, why: '这座山今天认你' }],
        },
        ok: {
          text: '碎片吸了上去。亚科布下最后一凿的时候，手腕多转了半圈。你按住了他。他看了你一会儿，把凿子倒过来递给你。“手艺人的毛病，总想给自己留个线头。”这一回是真解了。',
          effects: ['flag knot_cut'],
          goto: 'a4_16b',
        },
        fail: {
          text: '碎片吸了上去。亚科布收了最后一凿，吹了吹石粉。石头里那股细流顿了一下，没声了。“解完了。”他把凿子一把一把包好。空地上的鸟叫了一声。',
          effects: ['flag iacob_loop'],
          goto: 'a4_16b',
        },
      },
      {
        text: '把碎片按回缺口',
        if: 'item.oathstone_chip >= 1 && (flag.knot_cut || (!flag.knot_alarian && !flag.knot_ravens && !flag.knot_iacob))',
        effects: ['item -oathstone_chip'],
        result: '碎片自己吸了上去，石头合上了。{?flag.knot_cut:里头是空的，合上也是空的。布洛克拿指节敲了敲，说了声“实心”。|可没人解过那半句话，它自己不会走。它还挂在上头，只是如今挂在一块整石头上。}',
        goto: 'a4_16b',
      },
      {
        text: '不放回去，把碎片揣回兜里',
        if: 'item.oathstone_chip >= 1',
        effects: ['rep escann -1'],
        result: '你把手从缺口边上收了回来。布洛克在账本上划了一道：缺角，仍缺。温斯坦的人看见了，脸色不好看。',
        goto: 'a4_16b',
      },
      {
        text: '摸一摸那个缺口',
        if: 'item.oathstone_chip < 1',
        effects: ['xp 50'],
        result: '缺口是凉的，边上磨得很滑：二十年里，上山的人都摸过这一处。少的那一角不在你手上，这块石头今天合不上。',
        goto: 'a4_16b',
      },
    ],
  },

  a4_16b: {
    id: 'a4_16b',
    title: '第五十四位',
    text: [
      { if: '!party.liv', text: '空地上没有卡斯坦。这块石头她惦记了半辈子，今天来的人里偏偏没有她。' },
      { if: 'party.liv', text: '卡斯坦在誓石前头站住，把酒囊解下来搁在地上。这是你头一回见她上山不带酒味。她收翅膀的时候，得用手扶一下。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我等这块石头等了二十六年。它收买不了，这一点比你们谁都强。' },
      { if: 'party.liv && (flag.knot_cut || flag.iacob_loop)', speaker: '卡斯坦', text: '结解了，我听见了。那我上去问它一句：行，还是不行。' },
      { if: 'party.liv && !flag.knot_cut && !flag.iacob_loop && flag.liv_told', text: '缰绳的事她全知道。她看着裂缝里那半句话，没往前走，也没回头。' },
      { if: 'party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told', text: '石头上还挂着什么，她不知道。她在背誓词，嘴唇动着，背到了“至我寿终之日”那一句。' },
      { if: 'party.liv && flag.vow_liv', text: '十六年前在这座山上，你答应过让她试。山上说过的话得算数。' },
      { if: 'party.liv && is.god', speaker: '卡斯坦', text: '你别替它答。你一开口，我这二十六年就白等了。' },
    ],
    next: 'a4_16c',
    choices: [
      {
        text: '让开，让她把手按上去',
        if: 'party.liv && (flag.knot_cut || flag.iacob_loop) && (flag.golem_liv || world.mantle >= 6)',
        effects: ['flag a4x_liv_passed', 'approval liv +2'],
        result: '规矩是石头认不认，手心知道。她把手按了上去。石头是烫的，空地上都闻得见羽毛焦了的味儿。她回过头来，那张脸你没见过：她不嚷了。',
        goto: 'a4_16c',
      },
      {
        text: '让开，让她把手按上去',
        if: 'party.liv && (flag.knot_cut || flag.iacob_loop) && !(flag.golem_liv || world.mantle >= 6)',
        effects: ['approval liv +1'],
        result: '规矩是石头认不认，手心知道。她把手按了上去。石头是凉的。她等了一会儿，又等了一会儿，然后笑了，笑得把林子里的鸟都惊了起来。“它不要我。行，老娘问过了。”她捡起酒囊，这回喝了。',
        goto: 'a4_16c',
      },
      {
        text: '等她自己拿主意',
        if: 'party.liv && !flag.knot_cut && !flag.iacob_loop && flag.liv_told',
        effects: ['flag a4x_liv_stood', 'approval liv +3'],
        result: '她在石头前站了一夜，没坐，没喝。天亮的时候她走回来，从地上捡起酒囊。“老娘不给人当马。”她灌了一大口，递给你。“你早告诉了我，这笔账记你一功，掌玺大臣。”',
        goto: 'a4_16c',
      },
      {
        text: '现在把缰绳的事全告诉她',
        if: 'party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told',
        effects: ['flag liv_told', 'flag a4x_liv_stood', 'approval liv +1'],
        result: '你从誓词讲到沼泽堡，从那半句话讲到河里捞上来的信。她听完给了你一翅膀，不重。“这话你憋了一路。”然后她在石头前站了一夜。天亮她回来捡酒囊：“老娘不给人当马。”',
        goto: 'a4_16c',
      },
      {
        text: '什么也不说，看着她走上去',
        if: 'party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told && (flag.golem_liv || approval.liv >= 5)',
        effects: [
          'flag castan_crowned', 'flag castan_alive', 'flag castan_liv', 'flag liv_bridled',
          'world mantle =10', 'unflag mountain_sealed', 'companion -liv',
        ],
        result: '她念得一个字不错，这段誓词她背了二十六年。念到“至我寿终之日”，石头烫了。那股细流顺着她的手腕爬上去，没进了羽毛里。她什么也没觉出来。她回过头冲你喊：“五十四世！这回是真的！”',
        goto: 'a4_17',
      },
      {
        text: '什么也不说，看着她走上去',
        if: 'party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told && !(flag.golem_liv || approval.liv >= 5)',
        effects: ['flag liv_dead', 'companion -liv'],
        result: '她念到“至我寿终之日”，石头亮了一下，把这一句当场兑了。她是站着死的，手还按在上面，翅膀张开了一半。阿德蕾西娅走过去，把酒囊捡起来，塞好塞子，放在她脚边。',
        goto: 'a4_16c',
      },
      {
        text: '拦在她和石头当中，不让她试',
        if: 'party.liv',
        req: '!flag.vow_liv',
        reqText: '你在山上答应过她',
        effects: ['flag liv_north', 'companion -liv'],
        result: '她看了你很久，比哪一回都久。“掌玺大臣。”她说。“你被革职了。”她是从空地上直接起飞的，往北，没回头拿酒囊。',
        goto: 'a4_16c',
      },
    ],
  },

  a4_16c: {
    id: 'a4_16c',
    title: '山',
    text: [
      '空地上的人越聚越多。克拉丽蒙德是带着镐上来的，一把鹤嘴镐，同卡林达尔一起背在背上。卢坎站得离石头最近，两只手背在身后。布洛克抱着账本。',
      { speaker: '克拉丽蒙德', text: '我砍下去的时候，他话说到一半。你们要是再请一位上来，后半句早晚有人替他说完。' },
      { speaker: '布洛克', text: '立人，一句话的事。毁阶，四十个人干三天。下山，不要钱。三样我都报过价了。' },
      { if: 'flag.knot_cut || flag.iacob_loop', text: '结是解了的。今天谁立誓，誓归谁自己。' },
      { if: '!flag.knot_cut && !flag.iacob_loop', text: '那半句话还挂在石头上。这时候谁上去立誓，就是把脖子伸进一根眼下没人牵的绳套。等着来牵的那一位，信你是读过的。' },
      { if: 'flag.garrec_king && !flag.stair_down', text: '加雷克站在林子边上，没往前走。他说他等得起，他父亲等了更久。' },
      { if: 'flag.a4x_liv_passed && party.liv', text: '卡斯坦的手心还烫着。她没说话，她在看你选谁。' },
      { if: 'flag.liv_dead', text: '卡斯坦躺在石头底下，身上盖着乌翼兵团的旗。没人敢去动她按过的那一处。' },
      { if: 'flag.golem_forever', text: '第九道的石像还跪在上头的石阶上，跪的是你。别人要过那一道，得你当着众人的面叫它起来。' },
      { if: 'flag.charter_emperor', text: '章程上盖的是你的印：东坎诺的兵在山下等一位皇帝。' },
      { if: 'flag.stair_down', text: '石阶十六年前就没了。今天能站在这块空地上的人选，只剩飞得上来的，和你。' },
    ],
    choices: [
      {
        text: '立加雷克·乌霜',
        if: 'flag.garrec_king && !flag.stair_down',
        effects: [
          'flag castan_crowned', 'flag castan_alive', 'flag castan_garrec', 'world mantle =10', 'unflag mountain_sealed',
          'rep dragon +2', 'rep moon -1',
          { if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'] },
        ],
        result: '加雷克把手按上去的时候，像在按他父亲的棺盖。{?flag.golem_forever:你先上去叫第九道的石像起来，它起来了，从此人人都说这位皇帝是你给的。|}他念到“至我寿终之日”停了一下，念完了。石头发烫。{?flag.knot_cut || flag.iacob_loop:烫的是他自己的誓。|那股细流顺着他的手腕上去了。他以为誓就该是这个滋味。}',
        goto: 'a4_17',
      },
      {
        text: '立卢坎·西卢里昂',
        if: '!flag.stair_down',
        effects: [
          'flag castan_crowned', 'flag castan_alive', 'flag castan_lucan', 'world mantle =10', 'unflag mountain_sealed',
          'rep escann +1', 'rep moon +1',
          { if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'] },
        ],
        result: '卢坎把背在身后的手拿出来，手心全是汗。{?flag.golem_forever:你先上去叫第九道的石像起来，它起来了，从此人人都说这位皇帝是你给的。|}誓词他念了两遍，人类的话一遍，精灵的话一遍，石头两遍都认。{?flag.knot_cut || flag.iacob_loop:他念完，回头找他娘站的地方。|那股细流顺着他的手腕上去了。他回头找他娘站的地方，脸上还在笑。}',
        goto: 'a4_17',
      },
      {
        text: '立卡斯坦',
        if: 'flag.a4x_liv_passed && party.liv',
        effects: [
          'flag castan_crowned', 'flag castan_alive', 'flag castan_liv', 'world mantle =10', 'unflag mountain_sealed',
          'rep dragon +1', 'rep escann -1',
          { if: '!flag.knot_cut', then: ['flag liv_bridled'] },
          'companion -liv',
        ],
        result: '她把誓词从头念到尾，一个字不错，这一段她背了二十六年。{?item.ebonsteel_crown >= 1:乌钢冠是你从地砖底下带出来的，冠圈内侧磨得发亮，她戴上去正好。|冠是布洛克拿铁条现箍的，箍大了一指，她说就这么戴。}温斯坦的脸是青的。屠兽者的椅子上，坐了一位鹰身女妖。',
        goto: 'a4_17',
      },
      {
        text: '自己把手按上去',
        if: 'flag.golem_pc && is.mortal',
        effects: [
          'flag castan_crowned', 'flag castan_alive', 'flag castan_pc', 'world mantle =10', 'unflag mountain_sealed',
          { if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'] },
        ],
        result: '你看了十九年别人发誓。轮到自己，头一句就卡了一下。石头发烫，把话一个字一个字烙在你身上。{?flag.knot_cut || flag.iacob_loop:阿德蕾西娅在数你念了多少个字。|那股细流顺着你的手腕上来了，凉的。你是读过那封信的，你还是念完了。}',
        goto: 'a4_17',
      },
      {
        text: '自己立誓',
        tag: '神',
        if: 'flag.golem_pc && is.god',
        effects: [
          'flag castan_crowned', 'flag castan_alive', 'flag castan_pc', 'world mantle =10', 'unflag mountain_sealed', 'var god_acts +1',
          { if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'] },
        ],
        result: '誓词说“至我寿终之日”。你念出这一句的时候，满空地的人都在算同一笔账。{?flag.knot_cut || flag.iacob_loop:一位不会死的卡斯坦。|一位不会死的卡斯坦，立在没解的结上：那个字管的是誓，它不管你是不是神。有人找这样一个人找了三十年。}布洛克把账本合上了。',
        goto: 'a4_17',
      },
      {
        text: '朝克拉丽蒙德点头：毁阶',
        if: '!flag.stair_down && (flag.clarimonde_pact || rep.escann >= 3)',
        effects: [
          'flag mountain_sealed', 'world mantle =0',
          { if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'] },
        ],
        result: '克拉丽蒙德把卡林达尔解下来，交给扈从，自己抡的头一镐。“我砍过一位自封的王。”她说。“这一镐省得往后的人再砍。”卢坎看着石屑落在自己靴面上，没躲。',
        goto: 'a4_17',
      },
      {
        text: '出两百金冠，雇布洛克的人毁阶',
        if: '!flag.stair_down && !(flag.clarimonde_pact || rep.escann >= 3)',
        cost: { gold: 200 },
        effects: [
          'flag mountain_sealed', 'world mantle =0',
          { if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'] },
        ],
        result: '克拉丽蒙德不信你，她的镐不借。布洛克收了两百金冠，在账本上写：拆，工期三天，零头抹了。头一镐是他徒弟抡的。克拉丽蒙德在边上看完了全程，一镐没帮。',
        goto: 'a4_17',
      },
      {
        text: '下山，什么都不动',
        effects: [{ if: 'party.liv && flag.a4x_liv_passed', then: ['flag liv_north', 'companion -liv'], else: ['rep escann -1'] }],
        result: '你转身往下走。身后有人喊了你一声监誓人，你没回头。石头还在，石阶还在，那一行空着的地方也还在。',
        goto: 'a4_17',
      },
    ],
  },

  a4_17: {
    id: 'a4_17',
    title: '下山',
    loc: '东坎诺 · 北要塞山脚',
    text: [
      '消息比你们先下山。北要塞放出去十一只信鸽，阿德蕾西娅数的。',
      { if: 'flag.castan_crowned && flag.castan_garrec', text: '皇帝加雷克的头一道敕令只有一行：给他父亲补一场国葬，日子定在今年真霜月十四，沼泽堡那一天。' },
      { if: 'flag.castan_crowned && flag.castan_lucan', text: '皇帝卢坎的头一道敕令写了两种字，人类的一遍，精灵的一遍。抄写的人说这是头一回，抄错了三张。' },
      { if: 'flag.castan_crowned && flag.castan_liv', text: '皇帝卡斯坦的头一道敕令：往后的卡斯坦，过完十道还得再加一道，喝赢她。她嚷得整座山都听得见。' },
      { if: 'flag.castan_crowned && flag.castan_liv && flag.liv_bridled && !flag.iacob_loop', text: '她什么也没觉出来。你读过那封信，你看得出她手腕上多了什么。' },
      { if: 'flag.castan_crowned && flag.castan_pc', text: '头一道敕令等着你落笔。书记官举着印泥站了半个钟头，问你皇帝的印和监誓人的印用哪一枚。' },
      { if: 'flag.castan_crowned', text: '立了誓的人还得往上走完后六道。往“人类之冠”上添一块石头。劝和两个吵了三百年的林中精怪。同一头双足飞龙交朋友。绕着一块石头跳十圈：当年坎雷克的师父也跳过，没人知道他跳的时候在想什么。然后是第九道的石像，最后进林子猎一头兽。' },
      { if: 'flag.castan_crowned && flag.golem_forever && !flag.castan_pc', text: '第九道的石像是你当众叫起来的。它起身的时候，膝盖底下的石阶已经跪出了两个坑。' },
      { if: '!flag.castan_crowned && flag.mountain_sealed && !flag.stair_down', text: '石阶从上往下一级一级敲掉，敲了三天。最后一级是克拉丽蒙德自己敲的。她把镐留在了山脚。' },
      { if: '!flag.castan_crowned && flag.stair_down', text: '山还是十六年前你们封的样子：一面崖，一块石头，没有路。' },
      { if: '!flag.castan_crowned && !flag.mountain_sealed', text: '山还是老样子。石阶在，誓石在，没人上去立誓。诸王各回各的帐子，走的时候谁也没同谁道别。' },
    ],
    first: [
      'quest mountain done',
      { if: 'flag.liv_north || flag.liv_dead', then: ['quest liv_claim fail'], else: ['quest liv_claim done'] },
      { if: 'flag.charter_emperor && !flag.castan_crowned', then: ['unflag charter_emperor', 'flag charter_league', 'world mantle -3', 'flag a4x_charter_fell'] },
    ],
    choices: [
      {
        text: '绕着那块石头跳十圈',
        if: 'flag.castan_crowned && flag.castan_pc',
        once: true,
        check: { skill: 'acrobatics', dc: 12 },
        ok: {
          text: '十圈，一圈没多，一圈没少，阿德蕾西娅在边上替你数的。怪人卡斯坦到底图什么，你跳完了也没弄清。',
          effects: ['xp 100'],
        },
        fail: {
          text: '第七圈你踩到了自己的斗篷。规矩是从头再跳。全队都看着，布洛克把这件事记进了账本：皇帝，十七圈。',
          effects: ['hp -3'],
        },
      },
      { text: '下到山脚', goto: 'a4_17b' },
    ],
  },

  a4_17b: {
    id: 'a4_17b',
    title: '山脚',
    text: [
      { if: 'flag.a4x_charter_fell', text: '章程上那位“皇帝”没有着落。消息送到洛伦泰内，太后笑了一下，叫人把“同盟”那一份重新誊了一遍。印用的还是你的。' },
      { if: 'flag.liv_north', text: '卡斯坦往北飞之前，在山顶上绕了一圈，绕得很低，北要塞的人都看见了。然后她走了。' },
      { if: 'flag.liv_north && flag.harpies_freed', text: '后来有人说，布勒瓦尔兽苑里放出来的那几个锡亚丹姐妹，是跟着她一道往北的。' },
      { if: 'party.liv && is.god && flag.castan_pc', speaker: '卡斯坦', text: '你上去了。那我算什么。' },
      { if: 'party.liv && is.god && !flag.castan_pc', speaker: '卡斯坦', text: '你连这个都不要。那你到底要什么。' },
      { if: 'party.liv && is.mortal', speaker: '卡斯坦', text: '我问过它了。往后谁再同我提这座山，我请他喝酒，喝完揍他。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。山上说的话得算数，这规矩要是搬到山下来，恩特本一半的老爷得改行。' },
      { if: 'party.barry', text: '巴里的汤热了三回。他没问山上的事，先给每人盛了一碗，卡斯坦坐过的那只凳子上也搁了一碗。' },
      { if: 'is.god', speaker: '阿德蕾西娅', text: '大人，石头上五十三段誓词，没有一段是神立的。我数过了。' },
      '阿德蕾西娅把你的印匣擦了一遍，放下，又擦了一遍。她今年十五了。',
      { speaker: '阿德蕾西娅', text: '大人。扈从的誓词我背了一年，四十一个字。能不能今天立？' },
    ],
    choices: [
      {
        text: '答应，就在山脚听她立誓',
        effects: ['flag a4x_squire_sworn', 'xp 100'],
        result: '四十一个字，她一个没错。立完她问：“现在我说的话也得算数了吗？”你告诉她，在这座山脚下，人人的都算。她点了点头，把这句也记下了。',
        goto: 'a4_18',
      },
      {
        text: '叫她再等一年',
        effects: ['rest short'],
        result: '她点了点头，掰着指头算了一下。“三百六十五天。我数着。”她去给你们铺铺盖了，铺得同往常一样平。',
        goto: 'a4_18',
      },
    ],
  },

  a4_18: {
    id: 'a4_18',
    title: '1041 年花始月',
    art: 'ev_blank',
    loc: '东坎诺 · 北要塞 · 大路口',
    date: '1041年花始月',
    text: [
      '十字军头一路是花始月最后一个礼拜出发的。',
      { if: 'flag.god_crusade', text: '旗上绣的是你的神号。绣工赶得急，有两面绣错了字，照样打着走了。' },
      { if: '!flag.god_crusade && flag.charter_emperor', text: '打的是卡斯坦的旗，乌钢色，在北要塞的库里压了二十六年，抖开来一股樟脑味。' },
      { if: '!flag.god_crusade && flag.charter_league', text: '打的是自由诸国同盟的旧旗。洛伦特的玫瑰排在头一面，后头的人为第二面是谁家的吵到了开拔。' },
      { if: '!flag.god_crusade && flag.charter_writ', text: '走在最前头的是瓦洛森的法师，手里拿的是令状，没拿旗。后头的兵隔着十步跟着。' },
      { if: '!flag.god_crusade && flag.charter_muster', text: '没有总旗。各家打各家的，走到路口互相让了半天，谁也不肯走前头，谁也不肯走后头。' },
      '贾赫的回信也是这个礼拜到的，晚了半年，叠成巴掌大，盖着日轮的印。',
      { cls: 'letter', text: '“信收到时我在东边。尼奇默上山那天我在场：他是往上走的，没有人往山上逃。科乌里亚的事我回不来。谁管用，就让谁管。”' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言。这封信比帐子里那四份章程加起来都短，也都管用。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '要是这一路打得到渡鸦山（我说的是要是），我师门那棵树还在不在，我想自己去看。' },
      { if: 'party.barry', speaker: '巴里', text: '我多带了一车乳酪。打仗的人吃不上热的，这不成。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '打完这一仗，我在这山脚下开间酒馆。招牌上画一顶冠。你来，记账。' },
      { if: 'flag.a4x_squire_sworn', text: '头一路的最后一辆车过了路口。阿德蕾西娅站在你左手边半步，扈从该站的地方，她量过。她数了车：一百零六辆。' },
      { if: '!flag.a4x_squire_sworn', text: '头一路的最后一辆车过了路口。阿德蕾西娅站在你身后，嘴里数着日子，顺带数了车：一百零六辆。' },
    ],
    first: ['level 10', 'rest long', 'quest witness stage 5', 'item +jaher_letter', 'codex jaher'],
    next: 'f_01',
  },
};
