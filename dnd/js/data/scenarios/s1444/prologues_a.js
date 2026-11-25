// s1444《送神》序章甲：科琳的队伍 / 达梅里亚之子 / 皇帝的差事（BIBLE.md §11.1、§15、§16.2）
//
// 提纲（写之前对过圣经第 11.1 节；每条六场，末场去 a1_01）
//
// 科琳的队伍
//   p_corintar_01 盾墙      第三排，老布兰多克在左手。她挡，盾裂，剑从下往上。察觉→saw_her_look；拖蓝牙→corintar+1；补缺口→pa_wall_held。→02
//   p_corintar_02 没听见撤退 两个嗜血者的狂战士。[战士系]合拢盾墙多一个友军；[绿皮]喊兽人话的撤退号少一个敌人；败→拖到墙根。→03
//   p_corintar_03 她还起来吗 伙头按着肠子问那句话。谎→lies+1/p_lied；实话或按伤口→p_truth；[神职]送行；[神]治→god_revealed/god_shrine。→04
//   p_corintar_04 不许割头发 愚足守着她。挡人（威吓/说服）；还盾带→q_o_corintar done；问那个声音→pa_no_voice。→05
//   p_corintar_05 守夜      沙漏翻十二回。跪→vigil_knelt；站；问多米尼克（洞悉）→nerat_rule；[无冕]说“埋”；[神]试一试→god_tried_raise。→06
//   p_corintar_06 门板桌    共用骨架。队长点你；蓝牙看你一眼（saw_her_look 时多看一会儿）。→a1_01
//
// 达梅里亚之子
//   p_sons_01 世家的街  罗吉尔看兵书，达拉斯补手套，特里斯坦报信。认门楣（历史）→patricians；问少主→先发五个金冠的饷。→02
//   p_sons_02 抢东西的  三个撕了袖标的。亮银月徽（威吓）/[贵族]报封号/[施法者]炸响/[矮个子]钻狗洞/拔剑。败→挨一棍丢五个金冠。→03
//   p_sons_03 军士长    月神之耳，有月亮的晚上。答应→urn_promised/p_truth；哄他→lies+1/p_lied；说归威克斯了→p_truth。三样都给骨灰。[神]他让你先治旗手。→04
//   p_sons_04 点人头的  威克斯书办问“公文上过世的那位”。欺瞒/威吓/[承嗣]对公文；败或让他数→rogier_counted。→05
//   p_sons_05 跪不跪    街心烧着军士长，坡下一圈火。都去→sons_knelt；不去→moon+1；一个人去；[承嗣][无冕]；[神]谁也别跪。→06
//   p_sons_06 门板桌    共用骨架。罗吉尔出的人是你；达拉斯把袋口又缝了一道。→a1_01
//
// 皇帝的差事
//   p_wex_01 五层楼的屋顶 奥托格扶梯子。皇宫那一晚的三个答法（头一个设 dug_the_pit）；数门（察觉）→pa_gates_counted。→02
//   p_wex_02 下楼        三个逃兵分银器。亮信（优势，设 letter_shown）/[战士系]三卫起手式/讲价/[夜视]先吹蜡烛/拔剑。败→银器没了信还在。→03
//   p_wex_03 皇上知道吗   钴蓝兵团里的威克斯佣兵。谎→lies+1/p_lied；实话→p_truth；记名字→p_truth；[神]治。→04
//   p_wex_04 桥          罗吉尔坐在桥栏上看书。低头过；搭话（说服）→rogier_spotted；数人→rogier_spotted；[承嗣][试炼]。→05
//   p_wex_05 头一只信鸽   照实写（需 rogier_spotted，太平+1）/只写城门/写“稳了”/不放；[神]添一行自己，太平-1。→06
//   p_wex_06 报名        共用骨架。只有尸车没人盘问，你自己报的名；奥托格留在营里。→a1_01
//
// 本文件自设自读的标记（前缀 pa_）：pa_wall_held pa_dragged pa_ran pa_no_voice pa_door_friend pa_clubbed
//   pa_palace_answered pa_clerk pa_gates_counted pa_robbed pa_silver pa_name_taken

// ---- 三场小仗（都配了友军；败了不结束，照样往下走）

const BERSERKERS = {
  title: '没听见撤退的人',
  intro: '两个狂战士一前一后撞上盾墙。老布兰多克顶住了头一下，盾沿上的铜包边崩飞了一块。',
  enemies: [{ id: 'orc_raider', n: 2, name: '嗜血者的狂战士' }],
  allies: [{ id: 'man_at_arms', name: '老布兰多克' }, { id: 'archer', name: '科琳塔尔的弩手' }],
  specials: [
    {
      id: 'rack', name: '推倒鱼摊的晾架', desc: '两丈长的竹架子，连咸鱼一起压到他们身上',
      check: { skill: 'athletics', dc: 11 },
      success: { text: '晾架带着三排咸鱼砸了下去。一个兽人被压在底下，另一个脚下一滑，跪进了鱼堆里。', dmgAll: '1d6', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '架子比你想的结实。它晃了晃，掉下来一条咸鱼，砸在你自己头上。', selfDmg: '1d4' },
    },
  ],
  xp: 50,
  win: { goto: 'p_corintar_03' },
  lose: { effects: ['hp 1', 'flag pa_dragged'], goto: 'p_corintar_03' },
  fled: { effects: ['flag pa_ran', 'rep corintar -1'], goto: 'p_corintar_03' },
};

const LOOTERS = {
  title: '撬门的',
  intro: '大个子把钉头棒往手心里一拍。两个瘦的扔了撬棍，从后腰摸出刀来。',
  enemies: [{ id: 'vagrant_bandit', n: 2, name: '撕了袖标的兵', hpMult: 0.6 }, { id: 'thug', name: '提钉头棒的', hpMult: 0.75 }],
  allies: [{ id: 'man_at_arms', name: '达拉斯' }, { id: 'archer', name: '街口的长弓手' }],
  specials: [
    {
      id: 'cart', name: '把街口的水车推倒', desc: '半车水连木桶一起冲下坡',
      check: { skill: 'athletics', dc: 11 },
      success: { text: '水车翻了，半车水带着木桶冲下坡。三个人被冲得东倒西歪，大个子的棒子脱了手。', dmgAll: '1d6', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '车轴锈死了。你推得满脸通红，车只挪了半尺，还轧了自己的脚。', selfDmg: '1d4' },
    },
    {
      id: 'window', name: '朝楼上喊：守街的在这儿', desc: '木板后头的人家听得见',
      check: { skill: 'persuasion', dc: 12, mods: [{ if: 'flag.pa_door_friend', n: 4, why: '这家人下午给过你半块豆饼' }] },
      success: { text: '二楼的窗板开了一条缝，一锅滚水照着街心泼下来。在兽人眼皮底下熬过二十年的人家，这一手很熟。', dmgAll: '2d4', type: 'fire' },
      fail: { text: '楼上没有动静。二十年了，这条街上谁喊也不开窗。' },
    },
  ],
  xp: 50,
  win: { goto: 'p_sons_03' },
  lose: { effects: ['hp 1', 'gold -5', 'flag pa_clubbed'], goto: 'p_sons_03' },
  fled: { effects: ['rep league -1'], goto: 'p_sons_03' },
};

const STAIRS = {
  title: '楼梯上的逃兵',
  intro: '蜡烛灭了。楼梯间里只剩窗缝漏进来的一道光，照着一地银器。',
  enemies: [{ id: 'vagrant_bandit', n: 3, name: '逃兵', hpMult: 0.5 }],
  allies: [{ id: 'wexonard_footman', name: '奥托格' }],
  specials: [
    {
      id: 'sack', name: '把那袋银器踢下楼梯', desc: '银盘子会一路响到一楼',
      check: { skill: 'athletics', dc: 10 },
      success: { text: '袋子滚下去，银盘子一级一级地响。三个逃兵全扭头去追，把后背亮给了你们。', applyAll: { cond: 'stunned', turns: 1 } },
      fail: { text: '袋子比你想的沉。你一脚踢在了烛台尖上。', selfDmg: '1d4' },
    },
    {
      id: 'high', name: '抢上两级台阶，居高往下踹', desc: '楼梯窄，他们一次只上得来一个',
      check: { skill: 'acrobatics', alt: ['athletics'], dc: 11 },
      success: { text: '你一脚蹬在领头那个的胸口上。他往后倒，把后面两个一起带了下去。', dmgAll: '1d6', type: 'bludgeoning' },
      fail: { text: '你踩在了一只银盘子上。', selfDmg: '1d4' },
    },
  ],
  xp: 50,
  win: { effects: ['gold +15', 'flag pa_silver'], goto: 'p_wex_03' },
  lose: { effects: ['hp 1', 'flag pa_robbed'], goto: 'p_wex_03' },
  fled: { effects: ['flag pa_robbed'], goto: 'p_wex_03' },
};

// 第 ⑥ 场五条序章共用的效果清单（BIBLE.md §15），后面两条是 §13.2 要在这一场解锁的图鉴。
const TABLE_FIRST = ['level 2', 'companion +ushka', 'quest q_cart start', 'quest q_dragon start', 'codex standing_order', 'codex truce_table', 'rest short', 'codex corin', 'codex agrados'];
const ORDER = { cls: 'letter', text: '兹令各营各出一人，收殓此役无人认领之死者，事毕为止。' };

export const SCENES = {

  // ======================================================================
  // 科琳的队伍
  // ======================================================================

  p_corintar_01: {
    id: 'p_corintar_01',
    title: '盾墙',
    chapter: '序章 · 科琳的队伍',
    art: 'load_5',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月11日午后',
    text: [
      '去年在血腐阶梯，三万人对六万，打到后来一支军散成了二十支。你是从那条烂泥河床里爬出来的，后来跟着一个红头发的扈从走了一年，一条街一条街打进了卡斯托纳斯。',
      '今天是巷战的第七天。下城，旧集市边上的一块空地，满地踩烂的咸鱼。你在盾墙第三排，左手边是老布兰多克：五十岁了还是个扈从，盾沿上那圈铜包边是他自己敲的。',
      '前头二十步，团长倒在一个翻了的鱼摊旁边。大家叫他蓝牙，半兽人，左边獠牙上系着一截蓝布。杜坎森站在他上头，抬起了手。',
      '有人从你左边挤出去了：红头发，没戴盔。她把盾举到蓝牙前头。头一下挡住了，盾从中间裂开。杜坎森的另一只手落下来。她的剑是从下往上走的。',
      '两个都倒了。',
      { speaker: '老布兰多克', text: '看盾。看你自己的盾，别看她。' },
    ],
    first: ['codex greentide'],
    choices: [
      {
        text: '盯着她倒下的地方看',
        check: { skill: 'perception', dc: 11, mods: [{ if: 'is.elfblood', n: 1, why: '精灵血，眼尖' }] },
        ok: {
          text: '她倒下去之前，脸转向了左边。蓝牙躺在她左边。隔着两排盾，这件事只有你这个位置看得见。',
          effects: ['flag saw_her_look'], goto: 'p_corintar_02',
        },
        fail: {
          text: '你只看见那面盾裂成了两半。前排有人往后倒，盔沿磕在你鼻梁上。等你再睁开眼，她已经躺平了。',
          effects: ['hp -1'], goto: 'p_corintar_02',
        },
      },
      {
        text: '冲出去，把蓝牙拖回盾墙里',
        check: {
          skill: 'athletics', dc: 11,
          mods: [{ if: "race in ['orc', 'half_orc', 'ogre', 'gnoll']", n: 2, why: '力气大' }, { if: 'is.small', n: -2, why: '他一条胳膊就比你重' }],
        },
        ok: {
          text: '你和布兰多克一人一条胳膊，把他从鱼堆里拖了回来。他不看你们，一只手一直朝她那边伸着。',
          effects: ['rep corintar +1'], goto: 'p_corintar_02',
        },
        fail: {
          text: '半兽人比看上去沉得多。你被带了个跟头，是布兰多克揪着你的后领，连你带他一起拽回来的。',
          effects: ['hp -2'], goto: 'p_corintar_02',
        },
      },
      {
        text: '往左跨一步，补上她留下的缺口',
        effects: ['flag pa_wall_held'],
        result: '你的盾沿磕上了布兰多克的盾沿。第二排的人跟着补上来，墙又是一整面了。',
        goto: 'p_corintar_02',
      },
    ],
  },

  p_corintar_02: {
    id: 'p_corintar_02',
    title: '没听见撤退的人',
    art: 'ev_orc_with_axe',
    text: [
      '撤退的号喊的是兽人话，从南边传过来，一声比一声远。空地上的绿皮开始往后退，有的连斧子都不要了。',
      '有两个没退。嗜血者的狂战士，脸上抹着猪血，耳朵里大概只剩自己的吼声。他们还在砍，砍的正是你们这一段盾墙。',
      '布兰多克把盾往上提了提。你右边蹲着个科琳塔尔的弩手，正拿牙咬着弦往上挂。',
      { if: 'flag.pa_wall_held', text: '缺口是你刚才亲手补上的。眼下这面墙一条缝也没有，第二排的人贴着你的后背。' },
      { speaker: '老布兰多克', text: '就剩这两个。打完了我还得擦甲。' },
    ],
    choices: [
      {
        text: '喊一声“合拢”，等盾墙并紧了再顶上去',
        tag: '战士系',
        if: 'is.martial && !flag.pa_wall_held',
        result: '你喊的是操典上的口令。左右两面盾同时靠了过来，第二排有个人挤到了你身边。',
        combat: { ...BERSERKERS, allies: [...BERSERKERS.allies, { id: 'man_at_arms', name: '第二排的盾手' }] },
      },
      {
        text: '跟着合拢的盾墙一起压上去',
        if: 'flag.pa_wall_held',
        combat: { ...BERSERKERS, allies: [...BERSERKERS.allies, { id: 'man_at_arms', name: '第二排的盾手' }] },
      },
      {
        text: '用兽人话朝他们喊撤退号',
        tag: '绿皮',
        if: 'is.greenskin',
        result: '你喊得比南边那个号手还响。靠后的那个愣了一下，朝你这边看了看，扔下斧子往南跑了。另一个没回头。',
        combat: { ...BERSERKERS, enemies: [{ id: 'orc_raider', name: '嗜血者的狂战士' }] },
      },
      {
        text: '学着那个调子，喊一嗓子撤退号',
        if: '!is.greenskin',
        check: { skill: 'performance', alt: ['deception'], dc: 12 },
        ok: {
          text: '调子学了个八成。靠后的那个愣了一下，扭头往南看，然后扔下斧子跑了。另一个没回头。',
          combat: { ...BERSERKERS, enemies: [{ id: 'orc_raider', name: '嗜血者的狂战士' }] },
        },
        fail: {
          text: '两个都转过了脸。布兰多克事后告诉你，你喊的那一声在兽人话里是“开饭”。斧背先到，磕在你盾上，震得你半边膀子发麻。',
          effects: ['hp -2'],
          combat: BERSERKERS,
        },
      },
      {
        text: '举盾，顶上去',
        combat: BERSERKERS,
      },
    ],
  },

  p_corintar_03: {
    id: 'p_corintar_03',
    title: '她这回还起来吗',
    art: 'ev_looming_death',
    loc: '下卡斯托纳斯 · 空地北角的墙根',
    text: [
      { if: 'flag.pa_dragged', text: '你是被布兰多克拖到墙根的。那两个兽人后来怎么倒的，你没看见。他把你靠墙放稳了，才去看旁边那个人。' },
      { if: 'flag.pa_ran', text: '那两个兽人最后是布兰多克和弩手放倒的。你刚才往后退的事，他一个字没提。' },
      '墙根下坐着你们十人队的伙头，行军锅还在他背上。他的肠子流出来了，自己拿两只手按着，按得很仔细，生怕漏掉哪一截。',
      '他看见你们，先问布兰多克锅磕坏了没有。布兰多克绕到他背后看了看，说没有。他这才问第二句。',
      { speaker: '伙头', text: '上回在河床里是三个时辰，我数着的。她自己站起来了，还跟我讨了口水喝。' },
      { speaker: '伙头', text: '这回呢？她这回还起来吗？' },
      '布兰多克低下头去解自己的水囊，解了半天没解开。',
    ],
    choices: [
      {
        text: '告诉他：起得来，上回不也起来了',
        effects: ['var lies +1', 'flag p_lied'],
        result: '“那我等等。”他把手又按紧了些，脸朝着空地那边。他等了小半个时辰。后来手松了。',
        goto: 'p_corintar_04',
      },
      {
        text: '告诉他：不知道。上回等了三个时辰',
        effects: ['flag p_truth'],
        result: '他想了想，说三个时辰他怕是等不到了，叫你到时候替他看一眼。布兰多克把水囊塞进他手里，没往回要。',
        goto: 'p_corintar_04',
      },
      {
        text: '什么也不说，蹲下去替他按住伤口',
        effects: ['flag p_truth'],
        check: { skill: 'medicine', dc: 12 },
        ok: {
          text: '他多撑了一刻钟，把话说完了：弗里塞斯提尔的难民营，北边第三排棚子，门口挂着半个车轮。他还欠房东两个月的柴火钱。',
          effects: ['rep corintar +1'], goto: 'p_corintar_04',
        },
        fail: {
          text: '血从你指头缝里往外冒。他说了“弗里塞斯提尔”，说了“第三排”，后面的没说完。你这双手到天黑都是黏的。',
          goto: 'p_corintar_04',
        },
      },
      {
        text: '照奈拉特的规矩，替他念送行的词',
        tag: '神职',
        if: 'is.divine',
        effects: ['flag p_truth', 'rep temples +1'],
        result: '念到“过秤”那一句，他插嘴问：照这个规矩，她也得过秤？你说人人都得过。他点了下头，叫你接着念。词还剩两句的时候，他走了。',
        goto: 'p_corintar_04',
      },
      {
        text: '把手按在他的伤口上',
        tag: '神',
        if: 'is.god',
        effects: ['flag p_truth', 'flag god_revealed', 'flag god_shrine'],
        result: [
          '肠子自己回去了，口子合上，连道疤也没留。伙头低头看了半天肚皮，问你这锅往后还归不归他背。打这儿起他就跟定了你，赶不走，见人就讲墙根下的事。',
          '一炷香的工夫，半条街的伤兵全抬到了墙根。你治到天黑也没治完。有个抬担架的问你：那两位呢？空地上那两位，你怎么不去？',
        ],
        goto: 'p_corintar_04',
      },
    ],
  },

  p_corintar_04: {
    id: 'p_corintar_04',
    title: '不许割头发',
    loc: '下卡斯托纳斯 · 两位倒下的地方',
    text: [
      '抬她的时候你搭了一把手。四个人把她从杜坎森身上挪开，放到一领摊开的披风上。她那面裂盾的皮带就是这时候崩断的，半截留在你手里，一头还连着两颗铆钉。',
      '温斯顿·愚足坐在她边上。他是比佩克来的半身人行商，上回在血腐阶梯守着她尸首不让人碰的就是他。他膝盖上摊着一块包干粮的布，看见了你手里的东西，没说话。蓝牙在十步开外，背对着这边站着。',
      '已经来过三拨人了。头一拨要一绺头发，第二拨要一片披风，第三拨是个边区兵，要那面盾。愚足说盾裂了。那个兵说裂的也行。',
      { speaker: '温斯顿·愚足', text: '坐，坐。比佩克的蜂蜜腌肉，就剩这一块了，你一半我一半。吃完替我盯着点她的头发。' },
      { speaker: '温斯顿·愚足', text: '营里现在怎么说？有没有人提那个“埋”字？' },
      { speaker: '讨头发的兵', text: '就一绺。我娘在阿巴兰的营里病着，贴身带着兴许管用。' },
      { if: 'is.greenskin', text: '要盾的那个边区兵看见你的肤色，手先按到了刀把上。' },
      { if: 'is.greenskin', speaker: '温斯顿·愚足', text: '这位抬过她。你抬过谁？' },
      { if: 'flag.god_revealed', text: '讨头发的那几个里有人认出了你：墙根下治伤的就是这一位。他们凑在一起商量了两句，改了口，问能不能要你的一绺。' },
      { if: 'flag.god_revealed', speaker: '温斯顿·愚足', text: '这位的也不给。回去吃你们的饭。' },
    ],
    first: ['quest q_o_corintar start'],
    choices: [
      {
        text: '问愚足：上回他脑子里的那个声音呢',
        once: true,
        effects: ['flag pa_no_voice'],
        result: [
          { speaker: '温斯顿·愚足', text: '上回是有个声音，说她没走，叫我别让人碰她。这回我从晌午坐到现在，一个字也没有。' },
          '他把腌肉又往你这边推了推。',
        ],
      },
      {
        text: '站到她和那几拨人中间，叫他们回去',
        check: {
          skill: 'intimidation', alt: ['persuasion'], dc: 11,
          mods: [
            { if: "faction == 'tried'", n: 2, why: '试炼派：东西得自己挣' },
            { if: 'rep.corintar >= 4', n: 1, why: '营里认得你' },
            { if: 'flag.god_revealed', n: 2, why: '他们见过你治伤' },
          ],
        },
        ok: {
          text: '你往中间一站，只说了一句：她还没凉。讨头发的先走了。要盾的那个站了一会儿，朝她跪了一下，也走了。',
          effects: ['rep corintar +1'], goto: 'p_corintar_05',
        },
        fail: {
          text: '你跟要盾的那个兵吵了起来，肋上挨了一肘子。趁这工夫，有人从另一边伸手割走了一绺。愚足没去追，只把那人的脸看了很久。',
          effects: ['hp -2'], goto: 'p_corintar_05',
        },
      },
      {
        text: '把那截盾带放回她的盾上',
        if: 'item.shield_strap',
        effects: ['item -shield_strap', 'rep corintar +1', 'quest q_o_corintar done'],
        result: '你把皮带搁回裂盾的铆钉眼旁边，对齐了。愚足这才开口，说他刚才一直在数数，看你要揣到第几下。',
        goto: 'p_corintar_05',
      },
      {
        text: '把盾带揣进怀里，走开，不掺和',
        effects: ['rep corintar -1'],
        result: '你走出二十步，还听得见愚足一个人跟三拨人讲道理。第二天营里就有人贴身带着一小片红披风了。',
        goto: 'p_corintar_05',
      },
    ],
  },

  p_corintar_05: {
    id: 'p_corintar_05',
    title: '守夜',
    art: 'ev_big_star_in_sky',
    date: '1444年奈拉月11日入夜',
    text: [
      '绞架峰的多米尼克带着一只沙漏，奈拉特的祭司验尸用的，翻一回半个时辰。他把它摆在她脚边的石板上。翻到第六回，全军都看着她。她没动。有人说上回也许不止三个时辰，于是又翻了六回。',
      '谁也没走，谁也不敢说那个“埋”字。后半夜有人指着北边一颗亮星说是兆头。布兰多克说那颗星每年奈拉月都在那儿，他守了三十年的夜，认得。',
      '蓝牙在她旁边跪了一宿，獠牙上那截蓝布叫露水打透了。天亮的时候，多米尼克把沙漏放倒，站了起来。',
      { if: 'is.god', text: '沙漏翻到第三回，前排有人回过头来看你。后来回头的越来越多。谁也没开口，意思都写在脸上：她上回起来了，这回有你在这儿。' },
      { speaker: '绞架峰的多米尼克', text: '奈拉特的规矩，人死了要过秤。她的秤我替她看过了：不欠。' },
      { speaker: '绞架峰的多米尼克', text: '上回她是走回来的。这回她没有回来，她是往上去了。这叫升天。' },
      '蓝牙站起来，一句话没说，走了。',
    ],
    choices: [
      {
        text: '跟着跪下',
        effects: ['flag vigil_knelt', 'rep corintar +1'],
        result: '你跪下去。前后左右全是膝盖磕在石板上的声音，一片一片往外传，传到空地边上还没停。',
        goto: 'p_corintar_06',
      },
      {
        text: '站着',
        effects: ['rep companies +1'],
        result: '你没动。站着的不止你一个：钴蓝兵团那一片大半没跪。他们的队长隔着人堆看见了你，朝你抬了抬下巴。',
        goto: 'p_corintar_06',
      },
      {
        text: '问多米尼克：凭什么说她是往上去了',
        check: {
          skill: 'insight', dc: 12,
          mods: [
            { if: 'flag.pa_no_voice', n: 2, why: '愚足说过，这回没有声音' },
            { if: 'is.divine', n: 2, why: '祭司这一行你也学过' },
          ],
        },
        ok: {
          text: '他答得滴水不漏。可有一句他说得太顺：还可能起来的，不许下葬。那是背熟了的老规矩。他拖着不让埋，一半是信，一半是照章办事。',
          effects: ['codex nerat_rule'], goto: 'p_corintar_06',
        },
        fail: {
          text: '他没有答，反过来问你：那天你站在第几排？你说第三排。他说，那你看见的比我少。周围的人都转过脸来看你。',
          effects: ['rep corintar -1'], goto: 'p_corintar_06',
        },
      },
      {
        text: '说出那个字：该埋了',
        tag: '无冕',
        if: "faction == 'crownless'",
        effects: ['rep corintar -1', 'rep companies +1', 'codex nerat_rule'],
        result: [
          '你说：该埋了。人先埋，别的往后放。前排好几个人回过头来瞪你。',
          { speaker: '绞架峰的多米尼克', text: '奈拉特的规矩：还可能起来的，不许下葬。你敢担保她起不来，这头一锹你来动。' },
          '你没有动。别人也没有。',
        ],
        goto: 'p_corintar_06',
      },
      {
        text: '说：这是她自己挣的，用不着谁替她看秤',
        tag: '试炼',
        if: "faction == 'tried'",
        effects: ['rep corintar +1', 'rep temples -1'],
        result: '后排有人喊了声好。多米尼克看了你一会儿，说挣来的也得过秤，秤总得有人看。他摸出一块蜡板，把你的话记了上去。',
        goto: 'p_corintar_06',
      },
      {
        text: '试一试，叫她起来',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_tried_raise', 'flag god_revealed', 'rep corintar -2'],
        result: [
          '尸首坐起来了。眼睛是睁着的，里头是空的。',
          '愚足扑上去，拿整个身子把她按回地上，冲你喊：那不是她！蓝牙的手已经攥住了剑把。从这天起，他不肯再跟你单独待在一处。',
        ],
        goto: 'p_corintar_06',
      },
      {
        text: '告诉他们：你办不到的就这一件',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_revealed'],
        result: '前排的人把脸转了回去。多米尼克摸出蜡板，把你这句话一个字一个字刻了上去，刻完抬头问：这一件，是办不到，还是不许办？',
        goto: 'p_corintar_06',
      },
    ],
  },

  p_corintar_06: {
    id: 'p_corintar_06',
    title: '门板桌',
    art: 'ev_multi_racial_merc',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月12日清晨',
    text: [
      '队长们吵了半宿，天亮只定下一件事。他们从旧集市滚来两只空酒桶，卸了一扇门板架在上头，就架在两位倒下的这块空地上。',
      ORDER,
      { speaker: '科琳塔尔的队长', text: '{pc}。你抬过她。就你了。' },
      { if: '!flag.god_tried_raise', text: '蓝牙隔着门板看了你一眼。{?flag.saw_her_look:你知道一件他迟早要问的事。他多看了你一会儿，没有问。|只一眼，他就把脸转开了。}' },
      { if: 'flag.god_tried_raise', text: '蓝牙站在门板另一头，中间隔着三个人。你往哪边挪一步，他就往另一边挪一步。' },
      { if: 'is.god', text: '点到你的时候桌边卡了一下。钴蓝兵团的队长问：军令上写的是各营出一人，神算不算一人？吵了一刻钟，没吵出结果。书记照旧在你名字后头画了个“一”。' },
      '板车是从鱼贩子那儿征来的，车板上还粘着鱼鳞。她那边围着人，谁也不许动。杜坎森这边没人肯动，只有一个兽人女人蹲在他旁边，拿一根打了结的皮绳量他的指节。没人请她来。',
      { speaker: '乌什卡', text: '骨头粗，要磨两天。' },
      { if: 'is.god', text: '她量到一半停了手，看了你一会儿，另一只手搁到了腰后的锤子上。' },
      { if: 'is.god', speaker: '乌什卡', text: '死不了的我见过。都得有人去放倒。' },
      '车那头站着个十五六岁的小祭司。天都亮了，他手里的灯还没吹。',
      { speaker: '阿坦', text: '我叫阿坦，在万神道守庙。军令钉在我的门上了，四颗钉子。' },
      { speaker: '阿坦', text: '你们的车要出城。顺路替我打听一件事：银龙为什么没有再来。书上说卡斯塔诺有难他就来。这回二十年，他没来。' },
    ],
    first: TABLE_FIRST,
    choices: [
      {
        text: '答应他：出城顺路打听',
        effects: ['rep temples +1'],
        result: '他点点头，这才想起来把灯吹了。',
        goto: 'a1_01',
      },
      {
        text: '告诉他：你只管抬人，神的事不归你问',
        effects: ['approval ushka +1'],
        result: '小祭司说他晓得，所以才说顺路。蹲着的那个兽人女人头一回抬眼看你，看完接着量。',
        goto: 'a1_01',
      },
      {
        text: '把那截盾带系在车辕上',
        if: 'item.shield_strap',
        effects: ['rep corintar +1', 'approval ushka -1'],
        result: '铆钉磕着木头响了一声。桌边有人朝它低了低头。兽人女人看了看那截皮带，又看了看你，手上的皮绳多绕了一圈。',
        goto: 'a1_01',
      },
    ],
  },

  // ======================================================================
  // 达梅里亚之子
  // ======================================================================

  p_sons_01: {
    id: 'p_sons_01',
    title: '世家的街',
    chapter: '序章 · 达梅里亚之子',
    art: 'ev_lilac_wars',
    loc: '北卡斯托纳斯 · 一条萨什部的街',
    date: '1444年奈拉月11日午后',
    text: [
      '西边的仗打了九十五年，你们是输的那一边。大公去年死在皇宫里。少主躺进一口棺材，由随军祭司一路念着悼词，才送出了帝国。',
      '眼下少主活得好好的，靠在北城一条街的门洞里翻兵书。街是世家的，家家门上钉着木板。木板后头有人：你听见过咳嗽，还闻见过煮豆子的味儿。',
      '达拉斯坐在你旁边的台阶上补一只手套，针脚细得看不出来。南边的号角响了一上午，这会儿停了。特里斯坦从街口跑进来，头盔夹在胳膊底下。',
      { speaker: '特里斯坦', text: '下城出结果了。杜坎森倒了。那个红头发的扈从也倒了，她是替你外甥挡的那一下。' },
      { speaker: '流亡者罗吉尔', text: '我外甥呢？' },
      { speaker: '特里斯坦', text: '活着。跪在她边上，谁叫也不起来。' },
      '罗吉尔把书合上了，没折页角。',
    ],
    first: ['codex greentide', 'codex lilac_wars'],
    choices: [
      {
        text: '凑到门板跟前，看看里头是什么人家',
        check: {
          skill: 'history', dc: 10,
          mods: [{ if: "faction == 'heirs'", n: 2, why: '承嗣派：认谱是本行' }, { if: 'is.scholar', n: 1, why: '读过书' }],
        },
        ok: {
          text: '门楣上刻着一行古卡斯塔诺字，头一个词你认得：萨什，抄写的人。这是世家里管修史的那一支，兽人占城二十年，这一家没走。你隔着木板报了营号，说今晚这条街有人守。门缝底下推出来半块豆饼。',
          effects: ['codex patricians', 'rep league +1', 'flag pa_door_friend'], goto: 'p_sons_02',
        },
        fail: {
          text: '门楣上刻的字你一个也不认得。你凑近了想看清楚，木板缝里捅出来一根烧火棍，正戳在你肋上。',
          effects: ['hp -1'], goto: 'p_sons_02',
        },
      },
      {
        text: '隔着门报上家名，求见这一户的主人',
        tag: '贵族',
        if: 'is.noble',
        effects: ['codex patricians', 'rep league +1', 'flag pa_door_friend'],
        result: '门里静了一阵。有个老太太用很慢的通用语说：这条街上回来客人，是二十年前。门没开，可你听见后窗的闩落下了，又听见有人往楼上搬东西。',
        goto: 'p_sons_02',
      },
      {
        text: '问罗吉尔：接下来怎么办',
        effects: ['gold +5'],
        result: [
          { speaker: '流亡者罗吉尔', text: '先看弟兄们今晚有没有地方睡。饷欠了三个月，今天先发五个金冠，剩下的等我想出办法。' },
          '他说完又把书翻开了，翻的还是刚才那一页。',
        ],
        goto: 'p_sons_02',
      },
    ],
  },

  p_sons_02: {
    id: 'p_sons_02',
    title: '抢东西的',
    date: '1444年奈拉月11日傍晚',
    text: [
      '天擦黑的时候来了一伙散兵。五六个团的号衣，凑不出一身整的，袖标全撕了。两个瘦的拿撬棍去别第三家的门板，一个提钉头棒的大个子站在街心望风。',
      '达拉斯把手套放下，针还别在上头。他站起来的时候没出声。',
      { if: 'flag.pa_door_friend', text: '第三家就是下午给你推豆饼的那一家。二楼的窗板后头有人在挪东西，听着像一口锅。' },
      { speaker: '提钉头棒的', text: '弟兄，各发各的财。这条街上的东西，又没写你们达梅里亚的名字。' },
    ],
    choices: [
      {
        text: '亮出银月徽，报罗吉尔的名号',
        check: { skill: 'intimidation', dc: 12, mods: [{ if: 'rep.companies >= 2', n: 1, why: '诸团里有人认得你' }] },
        ok: {
          text: '“达梅里亚之子。罗吉尔的街。”大个子看了看徽，又看了看达拉斯手里那把窄刀，往地上啐了一口，带人走了。撬棍留在了门槛上。',
          effects: ['xp 25'], goto: 'p_sons_03',
        },
        fail: {
          text: '“罗吉尔？公文上不是死了吗。”大个子笑了，“死人的街，更用不着客气。”',
          combat: LOOTERS,
        },
      },
      {
        text: '报上全名和封号，问他们是谁家的兵',
        tag: '贵族',
        if: 'is.noble',
        check: { skill: 'intimidation', dc: 12, adv: true },
        ok: {
          text: '你把全名连封号报了一遍，问他们的队长是哪一位，明天好登门。三个人里有两个下意识立正了。走的时候还有一个回头行了半个礼。',
          effects: ['xp 25'], goto: 'p_sons_03',
        },
        fail: {
          text: '“爵爷。”大个子学着你的腔调鞠了一躬。他直起腰的时候，棒子已经抡起来了。',
          combat: LOOTERS,
        },
      },
      {
        text: '在他们脚边炸一声响的',
        tag: '施法者',
        if: 'is.caster',
        check: { skill: 'arcana', dc: 11 },
        ok: {
          text: '撬棍头上炸开一团蓝火，声音大得整条街的木板都在抖。他们跑的时候连那根撬棍都没要。',
          effects: ['xp 25'], goto: 'p_sons_03',
        },
        fail: {
          text: '只冒出几点火星，像打不着的火镰。大个子低头看了看，又抬头看了看你，提着棒子走过来。',
          combat: LOOTERS,
        },
      },
      {
        text: '趁他们没留神，钻狗洞进去把门从里头顶死',
        tag: '矮个子',
        if: 'is.small',
        check: { skill: 'stealth', dc: 10 },
        ok: {
          text: '门里头的人吓了一跳，随后七八只手一起帮你搬柜子。外头撬了一刻钟没撬动，骂骂咧咧地走了。有人往你手里塞了半块豆饼。',
          effects: ['xp 25', 'rep league +1'], goto: 'p_sons_03',
        },
        fail: {
          text: '你钻到一半卡住了。瘦的那个拎着你的脚，把你拔了出来。',
          effects: ['hp -1'],
          combat: LOOTERS,
        },
      },
      {
        text: '拔剑',
        combat: LOOTERS,
      },
    ],
  },

  p_sons_03: {
    id: 'p_sons_03',
    title: '军士长',
    art: 'ev_looming_death',
    loc: '北卡斯托纳斯 · 街角的门廊',
    text: [
      { if: 'flag.pa_clubbed', text: '你后脑勺上挨的那一棍还在嗡嗡响，钱袋轻了五个金冠。门倒是没让人撬开：达拉斯一个人守住了。怎么守的，他不说。' },
      '军士长是早上清这条街的时候挨的那一斧，在肚子上。弟兄们把他抬到街角一户人家的门廊底下，头枕着他自己的盾。门廊另一头还躺着个十七岁的旗手，胸口中了一箭，已经不说话了。',
      '达拉斯蹲在旁边，拿一根打了结的线绳量军士长的肩宽。寿衣向来是他缝。军士长人还醒着，看着他量。',
      { speaker: '军士长', text: '量准点。我肩宽，上回发的号衣就窄了。' },
      { speaker: '军士长', text: '求你一件事。把我埋回月神之耳。要挑有月亮的晚上，没月亮的不算。' },
      { if: "subrace == 'damerian'", text: '他听出了你的口音，又添了半句：你也是那边的人，岸上那片坡你晓得。' },
    ],
    choices: [
      {
        text: '答应他',
        effects: ['flag urn_promised', 'flag p_truth', 'item +sergeant_urn', 'quest q_o_sons start'],
        result: '“好。那就不急了。”他没等到掌灯。弟兄们说夜里就在街心烧，达拉斯已经在缝装骨灰的袋子。这只袋子归你带。',
        goto: 'p_sons_04',
      },
      {
        text: '告诉他：仗快打回去了，到时候他自己走回去',
        effects: ['var lies +1', 'flag p_lied', 'item +sergeant_urn', 'quest q_o_sons start'],
        result: '他笑了一下，说那敢情好，回去头一件事是喝一壶家里的茶。他没等到掌灯。达拉斯已经在缝装骨灰的袋子，缝好了归你带。',
        goto: 'p_sons_04',
      },
      {
        text: '告诉他：月神之耳如今归威克斯了',
        effects: ['flag p_truth', 'item +sergeant_urn', 'quest q_o_sons start'],
        result: '他半天没出声，后来说：归谁都行。坡还是那片坡，月亮也不归威克斯管。他没等到掌灯。达拉斯缝的那只袋子，归你带。',
        goto: 'p_sons_04',
      },
      {
        text: '把手按在他的伤口上',
        tag: '神',
        if: 'is.god',
        effects: ['flag p_truth', 'flag god_revealed', 'flag god_shrine', 'item +sergeant_urn', 'quest q_o_sons start'],
        result: [
          { speaker: '军士长', text: '先治小的。旗手才十七。我这把岁数，不占这个先。' },
          '你把手挪到那个孩子的胸口上。箭自己退了出来，口子合了。他坐起来，从此跟定了你，赶不走，逢人就讲。一炷香的工夫，半条街的伤兵全抬到了门廊底下。',
          '你治到后半夜也没治完。等你再转回来，军士长已经凉了。达拉斯把缝好的袋子交到你手里。抬担架的人问你：下城空地上那两位呢？',
        ],
        goto: 'p_sons_04',
      },
    ],
  },

  p_sons_04: {
    id: 'p_sons_04',
    title: '点人头的',
    art: 'ev_hre',
    loc: '北卡斯托纳斯 · 街口',
    date: '1444年奈拉月11日入夜',
    text: [
      '掌灯以后，街口来了个威克斯人。四十来岁，灰斗篷底下露出一截紫袍，脖子上挂着帝国的印信，手里一本册子、一支炭笔，见人先欠身。',
      '他在数人。数得不快，数一个画一道，五道一捆。罗吉尔就在三十步外的门洞里，借着火把看书。西尔穆纳家的银头发，隔着半条街都认得出来。',
      { speaker: '威克斯的书办', text: '打扰。贵部过阿巴兰的时候，册上是一千一百四十人。我只数人头，不问名字，数完好销册。' },
      { speaker: '威克斯的书办', text: '另有一位先生，公文上是去年过世的。照例我得问一句：他眼下还过世着吧？' },
      { if: 'is.god', text: '他数到你，炭笔停住了。他翻回册子头一页找栏目，没找着合适的，先空了一行。' },
    ],
    choices: [
      {
        text: '挡住他的视线，跟他扯阿巴兰的马肉',
        check: { skill: 'deception', dc: 12 },
        ok: {
          text: '你问他阿巴兰西边是不是真吃马肉。他认真答了一刻钟，连哪家馆子不掺驴肉都说了。等他想起来接着数，门洞里已经没人了。',
          effects: ['rep moon +1'], goto: 'p_sons_05',
        },
        fail: {
          text: '他很有礼貌地听你说完，然后往左挪了一步，越过你的肩膀看了一眼门洞，在册子最后一页添了一道。那一道画得比别的都直。',
          effects: ['flag rogier_counted', 'rep throne +1', 'rep moon -1'], goto: 'p_sons_05',
        },
      },
      {
        text: '直说：这条街不欢迎数数的',
        check: { skill: 'intimidation', dc: 13, mods: [{ if: 'is.martial', n: 1, why: '你的手按在剑上' }] },
        ok: {
          text: '他看了看你的手，又看了看达拉斯的手，把册子合上了。“那我明天再来，白天来。”他明天没来。',
          effects: ['rep moon +1'], goto: 'p_sons_05',
        },
        fail: {
          text: '“欢不欢迎，册子总得销。”他说这话的工夫，已经把门洞里的人看在了眼里。临走他还朝那边欠了欠身，跟见了熟人一样。',
          effects: ['flag rogier_counted', 'rep throne +1', 'rep moon -1'], goto: 'p_sons_05',
        },
      },
      {
        text: '跟他对公文：过世的人不在点数之列',
        tag: '承嗣',
        if: "faction == 'heirs'",
        check: { skill: 'persuasion', dc: 10 },
        ok: {
          text: '你请他把公文念一遍。念到“已故”两个字，你说：那这一位就不归你这本册子管。他想了想，说在理，名分上的事不能乱，在那一格里写了“已故，不计”。',
          effects: ['rep moon +1'], goto: 'p_sons_05',
        },
        fail: {
          text: '他说公文是公文，人头是人头，两本账。然后他把门洞里那一位记在了人头那本上。',
          effects: ['flag rogier_counted', 'rep throne +1', 'rep moon -1'], goto: 'p_sons_05',
        },
      },
      {
        text: '让他数',
        effects: ['flag rogier_counted', 'rep throne +1', 'rep moon -1'],
        result: '他数完了，道了谢，在最后一页添了一道，旁边注了两个小字：在世。',
        goto: 'p_sons_05',
      },
    ],
  },

  p_sons_05: {
    id: 'p_sons_05',
    title: '跪不跪',
    loc: '北卡斯托纳斯 · 世家的街',
    text: [
      '街心架起了柴，军士长在上头烧。隔着银瀑往下看，下城那块空地上也围着一圈火，火圈当中留着一块黑。那边全军都没睡，在等她再起来一回。',
      '罗吉尔合上书走过来，在柴堆边站了一会儿。特里斯坦跟在后头，手里拿着他的斗篷，他没接。',
      { speaker: '流亡者罗吉尔', text: '弟兄们有想下去跪她的，也有不想去的。我不好开口：跪在她边上那个是我外甥。我说去是徇私，说不去是避嫌。' },
      { speaker: '流亡者罗吉尔', text: '军士长不在了，这一队你说了算。你定。' },
      { if: 'is.god', speaker: '流亡者罗吉尔', text: '还有一桩。弟兄们里有人来问我：该跪她，还是该跪你。这个我更不好开口。' },
    ],
    choices: [
      {
        text: '带弟兄们都下去',
        effects: ['flag sons_knelt', 'rep corintar +1'],
        result: '四十来个人排成两列下了坡。达梅里亚的蓝罩袍在火圈外头跪了一排。科琳塔尔的人往两边让了让，给你们腾出一块石板地。',
        goto: 'p_sons_06',
      },
      {
        text: '不去。剑是留给达梅里亚的',
        effects: ['rep moon +1'],
        result: '没人争。有两个年轻的朝坡下看了很久，后来回到柴堆边添了柴。特里斯坦把斗篷披到罗吉尔肩上，这回他没躲。',
        goto: 'p_sons_06',
      },
      {
        text: '你一个人下去',
        effects: ['item +halfling_pie'],
        result: '你在火圈最外头站了半个时辰。她旁边坐着个半身人，隔着三排人看见了你的蓝罩袍，托人传过来一块肉派，还捎了句话：站着的也得吃。',
        goto: 'p_sons_06',
      },
      {
        text: '告诉弟兄们：蓝牙是大公的外孙，跪的是自家人',
        tag: '承嗣',
        if: "faction == 'heirs'",
        effects: ['flag sons_knelt', 'rep corintar +1', 'rep moon +1'],
        result: '这话一说，不想去的那几个也没了话。下坡的路上有人小声排辈分，排到最后发现，那个半兽人比在场所有人都靠近西尔穆纳的正支。',
        goto: 'p_sons_06',
      },
      {
        text: '让弟兄们举手：去的去，留的留',
        tag: '无冕',
        if: "faction == 'crownless'",
        effects: ['flag sons_knelt', 'rep corintar +1', 'rep companies +1'],
        result: '二十三只手对十九只手。去的下了坡，留的替他们看着铺盖和柴堆。罗吉尔看完了，说他父亲的营里从来没举过手。',
        goto: 'p_sons_06',
      },
      {
        text: '告诉他们：谁也别跪',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_revealed', 'rep throne -1'],
        result: [
          '弟兄们互相看了看，站着没动，也没人下坡。罗吉尔点了点头，回门洞里看书去了。',
          '街口那个威克斯书办还没走。他翻开册子，在最后一页添了一行：神，一位，待核。',
        ],
        goto: 'p_sons_06',
      },
    ],
  },

  p_sons_06: {
    id: 'p_sons_06',
    title: '门板桌',
    art: 'ev_multi_racial_merc',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月12日清晨',
    text: [
      '天亮了，她没有起来。下城那块空地上，队长们拿两只空酒桶架起一扇门板，围着它吵到最后，只定下一件事。',
      ORDER,
      { speaker: '流亡者罗吉尔', text: '我出{pc}。这一队里，只有{ta}身上已经背着一个了。' },
      '达拉斯留在纵队里。临走他把军士长那只袋子要过去，在袋口又缝了一道，缝完咬断线头，一句话也没有。',
      { if: 'is.god', text: '伯爵联盟的人问：这一位算哪个营的？罗吉尔说算他的，昨晚替他守过一条街。没人再问。书记在你的名字后头照旧画了个“一”。' },
      '板车停在桌边，车板上粘着鱼鳞。她那边围着人，谁也不许动。杜坎森这边没人肯动，只有一个兽人女人蹲着，拿一根打了结的皮绳量他的指节。达拉斯量活人用线绳，她量死人用皮绳。',
      { speaker: '乌什卡', text: '骨头粗，要磨两天。' },
      { if: 'is.god', text: '她抬头看见你，量到一半的手停了，另一只手搁到了腰后的锤子上。' },
      { if: 'is.god', speaker: '乌什卡', text: '死不了的我见过。都得有人去放倒。' },
      '车边站着个十五六岁的小祭司，天亮了，灯还提在手里。',
      { speaker: '阿坦', text: '我是万神道守庙的，叫阿坦。他们把军令钉在了我的门上。' },
      { speaker: '阿坦', text: '听说车要出城。顺路替我问一件事行不行：银龙为什么没有再来。城破那年人人都求过他，二十年了，他没来。' },
    ],
    first: TABLE_FIRST,
    choices: [
      {
        text: '答应他：顺路问问',
        effects: ['rep temples +1'],
        result: '他说了声谢，又说不白问，往后车上的人到他庙里歇脚，不收香火钱。庙没屋顶，这一条他提前讲明了。',
        goto: 'a1_01',
      },
      {
        text: '告诉他：你包里已经背着一个人了，神的事往后排',
        effects: ['approval ushka +1'],
        result: '小祭司看了看你的包，说不急，顺路就行。量指节的那个抬头看了你一眼，又低下头去。',
        goto: 'a1_01',
      },
      {
        text: '把银月徽别到车辕上',
        if: 'item.moon_badge',
        effects: ['rep moon +1', 'rep throne -1'],
        result: '徽一别上去，桌边钴蓝兵团的人就吹了声口哨：西边的账，带到东边来了。罗吉尔远远看见，没说行，也没说不行。',
        goto: 'a1_01',
      },
    ],
  },

  // ======================================================================
  // 皇帝的差事
  // ======================================================================

  p_wex_01: {
    id: 'p_wex_01',
    title: '五层楼的屋顶',
    chapter: '序章 · 皇帝的差事',
    art: 'load_21',
    loc: '南卡斯托纳斯 · 峭壁区',
    date: '1444年奈拉月11日午后',
    text: [
      '丁香战争是你们赢的。去年皇上在安本科斯特的王座厅里擦着剑说了一句话：只有威克斯说了算。你是替说这句话的人办差的。',
      '差事装在一封信里，火漆上是一只合着的眼睛。巴兹伍德先生统共写了一行。数完以后怎么办，信上没写。',
      { cls: 'letter', text: '数一数卡斯托纳斯有几座门，各在谁手里。' },
      '所以你趴在峭壁区一栋五层楼的屋顶上。桥屯的奥托格在底下替你扶着梯子：三卫出身的大剑手，嘴严，手抖，梯子跟着他一起抖。',
      '从这儿看得见下城。旧集市边上的一块空地，一个半兽人倒了，一个红头发的举着盾，盾裂了。两个都没再起来：她，和杜坎森。奥托格在底下问谁赢了，你说都没赢。他半天没出声，后来问了另一件事。',
      { speaker: '桥屯的奥托格', text: '去年皇宫那一晚，你在哪儿？我一直没问。' },
    ],
    first: ['codex greentide', 'codex lilac_wars'],
    choices: [
      {
        text: '说：我排在后头，事后被叫去花园挖了一夜的坑',
        once: true,
        if: '!flag.pa_palace_answered',
        effects: ['flag dug_the_pit', 'flag pa_palace_answered'],
        result: '梯子不抖了。他在底下半天没出声，后来说：那你什么也没看见。这句话他是照着念的，跟去年上头交代你的一个字都不差。',
      },
      {
        text: '说：我不在。那一晚我在紫庭记数',
        once: true,
        if: '!flag.pa_palace_answered',
        effects: ['flag pa_palace_answered', 'flag pa_clerk'],
        result: '“记数的。”他好像松了口气，“那你接着数吧，我扶稳点。”梯子抖得轻了些。',
      },
      {
        text: '不提这件事',
        once: true,
        if: '!flag.pa_palace_answered',
        effects: ['flag pa_palace_answered', 'rep throne +1'],
        result: '“不提好。”他说。梯子照旧抖。后来他给紫庭的回话里提了你一句，统共四个字：此人嘴严。',
      },
      {
        text: '把南城和下城每座门上的旗数清楚',
        check: {
          skill: 'perception', dc: 11,
          mods: [{ if: 'flag.pa_clerk', n: 2, why: '记数是你的本行' }, { if: 'is.elfblood', n: 1, why: '精灵血，眼尖' }],
        },
        ok: {
          text: '南城两座门归钴蓝兵团。下城临河的水门没人守，门扇早让兽人拆去烧了。离那块空地最近的一座，插的是科琳塔尔的旗。你一座一座记在了袖口里侧。北城那座叫焦塔挡着，得走到跟前去看。',
          effects: ['flag pa_gates_counted'], goto: 'p_wex_02',
        },
        fail: {
          text: '烟太大，南城那一片你只数了个大概。你探出身子想再看一眼，脚下的瓦滑了，是檐角的滴水兽把你挂住的。北城那座门，更得走到跟前去看。',
          effects: ['hp -2'], goto: 'p_wex_02',
        },
      },
    ],
  },

  p_wex_02: {
    id: 'p_wex_02',
    title: '下楼',
    loc: '峭壁区 · 楼梯间',
    text: [
      '下到三楼，拐角蹲着三个逃兵，正就着一截蜡烛头分一袋银器。号衣是三个团的，袖标都撕了。地上摊着银盘子、银烛台，还有一把刻着古卡斯塔诺字的梳子。',
      '他们抬头看见了你和奥托格。奥托格的手不抖了。他的手只有握着剑的时候不抖。',
      { speaker: '逃兵', text: '楼上还有人？晦气。弟兄，见者有份，一人一把汤匙，就当谁也没看见谁，行不行？' },
    ],
    choices: [
      {
        text: '亮出那封带火漆的信',
        effects: ['flag letter_shown'],
        check: { skill: 'intimidation', dc: 12, adv: true },
        ok: {
          text: '三个人里有一个认得那只合着的眼睛。他抓起烛台，想了想又放下。三个人贴着墙根下了楼，银器一件没敢带。',
          effects: ['xp 25'], goto: 'p_wex_03',
        },
        fail: {
          text: '“眼睛？”领头的凑近看了看火漆，“管它谁的眼睛。这城里又没有皇上。”他把蜡烛吹了。',
          combat: STAIRS,
        },
      },
      {
        text: '摆出三卫剑馆的起手式',
        tag: '战士系',
        if: 'is.martial',
        check: { skill: 'intimidation', dc: 10, mods: [{ if: "subrace == 'alenic'", n: 1, why: '这个架子你从小练' }] },
        ok: {
          text: '双手握柄，剑尖朝后，是三卫教的头一个架子。领头的在丁香战争里见过这个架子，也见过它后头跟着什么。他们走得很快。',
          effects: ['xp 25'], goto: 'p_wex_03',
        },
        fail: {
          text: '架子摆出来了，楼梯太窄，剑尖磕在了墙上。三个人看着你。有一个笑出了声。',
          combat: STAIRS,
        },
      },
      {
        text: '跟他们讲价：让路，银器归他们，你没来过',
        check: { skill: 'persuasion', alt: ['deception'], dc: 11 },
        ok: {
          text: '成交。他们硬塞给你一把汤匙，说这是规矩，拿了才算一条船上的。奥托格没接他那一把。',
          effects: ['gold +3'], goto: 'p_wex_03',
        },
        fail: {
          text: '“没来过？”领头的看了看你的靴子，“钉铁掌的，威克斯的官靴。放你下去，明天来的就是一队。”',
          combat: STAIRS,
        },
      },
      {
        text: '先吹灭那截蜡烛头',
        tag: '夜视',
        if: 'is.darkvision',
        result: '楼梯间黑了。你看得见他们，他们看不见你。离你最近的那个还在摸刀，你已经把他放倒了。',
        combat: { ...STAIRS, intro: '黑地里有人踢翻了烛台。剩下的两个背靠背站着，刀尖乱指。', enemies: [{ id: 'vagrant_bandit', n: 2, name: '逃兵', hpMult: 0.5 }] },
      },
      {
        text: '拔剑',
        combat: STAIRS,
      },
    ],
  },

  p_wex_03: {
    id: 'p_wex_03',
    title: '皇上知道吗',
    art: 'ev_looming_death',
    loc: '峭壁区 · 楼下的水槽边',
    text: [
      { if: 'flag.pa_robbed', text: '你是被奥托格架下楼的。银器没了，逃兵也没了。你摸了摸怀里：信还在，火漆没碎。' },
      { if: 'flag.pa_silver', text: '那袋银器归不了原主。奥托格照老规矩分了，你那一份折下来十五个金冠。那把梳子他单独包了起来，没算进去。' },
      '楼下有个饮马的石槽。槽边靠着一个人，袖子上是钴蓝兵团的蓝标，罩袍底下露出来的却是威克斯的铁掌靴。他拿自己的头盔压着肚子，血从盔沿底下往外渗。',
      '他先认出来的是奥托格那身紫。',
      { speaker: '钴蓝兵团的佣兵', text: '三卫的？我也是威克斯人。出来替加韦德人卖命，结果他们的小国王说仗打输了，饷不算数。' },
      { speaker: '钴蓝兵团的佣兵', text: '你们是皇上派来的吧。皇上是咱自己的大公。他知不知道我们这些人在这儿？' },
      { if: "subrace == 'alenic'", text: '他说的是艾伦河那边的土话，跟你小时候听的一个调。' },
    ],
    choices: [
      {
        text: '告诉他：知道，还问起过你们营',
        effects: ['var lies +1', 'flag p_lied'],
        result: '“问起过？”他把头盔按得紧了些，“那行。那就不算白来。”他让奥托格替他把靴子摆正，靴尖朝西。',
        goto: 'p_wex_04',
      },
      {
        text: '告诉他：不知道。你就是来数这个的',
        effects: ['flag p_truth'],
        result: '他笑了一声，笑岔了气。“那你数。数清楚点，别把我数漏了。”奥托格把自己的斗篷给他盖上，手抖得系不上扣。',
        goto: 'p_wex_04',
      },
      {
        text: '问他的名字，记进报告里',
        effects: ['flag p_truth', 'flag pa_name_taken', 'rep companies +1'],
        result: '他把名字报了两遍，连村子带他父亲的名字，怕你写错。你记在了信纸背面。旁边两个钴蓝兵团的人一直看着你写完。',
        goto: 'p_wex_04',
      },
      {
        text: '照奈拉特的规矩，替他念送行的词',
        tag: '神职',
        if: 'is.divine',
        effects: ['flag p_truth', 'rep temples +1'],
        result: '他听了两句就打断你，问念这个要不要钱。你说不要。他说那你念慢点，他头一回听整段的。',
        goto: 'p_wex_04',
      },
      {
        text: '把手按在他的伤口上',
        tag: '神',
        if: 'is.god',
        effects: ['flag p_truth', 'flag god_revealed', 'flag god_shrine'],
        result: [
          '头盔底下的口子合上了。他坐起来，把头盔戴回头上，头一句话是问你归哪个营管饷。打这儿起他就跟着你，赶不走，逢人就讲水槽边的事。',
          '一炷香的工夫，半条街的伤兵都抬到了水槽边。你治到天快黑也没治完。抬担架的人问你：空地上那两位呢？你怎么不去？',
        ],
        goto: 'p_wex_04',
      },
    ],
  },

  p_wex_04: {
    id: 'p_wex_04',
    title: '桥',
    art: 'ev_lilac_wars',
    loc: '银瀑上的石桥',
    text: [
      '北城那座门得走到跟前去数，过去只有一条路：银瀑上的石桥。下城人管这道瀑布叫粪瀑。站到桥头就知道为什么了，全城的阴沟都往这儿淌。',
      '桥让一队人把着。蓝罩袍，胸口别着银月徽，是达梅里亚之子。领头的坐在桥栏上看书，没戴盔，一头银发。帝国的告示上画过这张脸，底下一行字：一千金冠，死活不论。照公文，他去年就过世了。',
      '他旁边站着个高个子骑士，手一直没离开剑把。',
      { if: 'is.god', text: '你走上桥，桥栏上那位头一回从书上抬起了眼睛。高个子骑士的手从剑把上拿开了，一时不知道该往哪儿放。' },
      { speaker: '特里斯坦', text: '过桥的报营号。哪个团的？' },
    ],
    choices: [
      {
        text: '低头报个别人的营号，过桥',
        result: '你报了钴蓝兵团。高个子看了一眼你的靴子，没拦。桥栏上那位自始至终没抬头，翻了一页书。他带了多少人，你没敢回头数。',
        goto: 'p_wex_05',
      },
      {
        text: '告诉桥栏上那位：下城那个半兽人还活着',
        check: {
          skill: 'persuasion', dc: 12,
          mods: [
            { if: 'is.noble', n: 2, why: '贵族之间好说话' },
            { if: 'flag.letter_shown', n: -2, why: '逃兵的嘴比你的腿快，桥上已经听说了那封信' },
          ],
        },
        ok: {
          text: [
            '你把屋顶上看见的讲了：盾，剑，那个半兽人后来自己坐了起来。他把书合上，听完了，告诉你北边第二条巷子没有乱兵。',
            { speaker: '流亡者罗吉尔', text: '替我问候巴兹伍德先生。告诉他，我装死装得很像，他学生的赏格白挂了一年。' },
            '你过桥的时候顺手数了数他的人。他看见你在数，没拦。',
          ],
          effects: ['flag rogier_spotted'], goto: 'p_wex_05',
        },
        fail: {
          text: [
            { speaker: '特里斯坦', text: '这个我们知道了。过桥五个金冠，威克斯口音的加倍。' },
            '桥栏上那位翻了一页书，没有替你讲价。',
          ],
          effects: ['gold -10'], goto: 'p_wex_05',
        },
      },
      {
        text: '边走边数：他带了多少人，几张弓',
        effects: ['flag rogier_spotted'],
        result: '四十二个人，十一张长弓，没有马。你一路数过去，下了桥才发觉自己的嘴唇一直在动。高个子在后头看着你的背影，看了很久。',
        goto: 'p_wex_05',
      },
      {
        text: '照礼数，向一位西尔穆纳欠身',
        tag: '承嗣',
        if: "faction == 'heirs'",
        effects: ['rep moon +1'],
        result: [
          { speaker: '流亡者罗吉尔', text: '公文上我是个死人。你朝死人行礼，回去不好交代。' },
          '他还是从桥栏上下来，还了半个礼。高个子让开了路。',
        ],
        goto: 'p_wex_05',
      },
      {
        text: '问他：值一千金冠的人，守一座粪瀑上的桥？',
        tag: '试炼',
        if: "faction == 'tried'",
        effects: ['flag rogier_spotted'],
        result: [
          { speaker: '流亡者罗吉尔', text: '弟兄们得有地方睡。桥这头有三间不漏雨的屋子。' },
          '他把书签夹好，头一回正眼看你，然后把他带了多少人、几张弓，自己报了一遍。报完他说：省得你数错。',
        ],
        goto: 'p_wex_05',
      },
    ],
  },

  p_wex_05: {
    id: 'p_wex_05',
    title: '头一只信鸽',
    art: 'ev_hre',
    loc: '峭壁区 · 屋顶的鸽笼',
    date: '1444年奈拉月11日傍晚',
    text: [
      '鸽笼是奥托格一路背进城的，眼下搁在那栋五层楼的屋顶上：三只灰鸽子，脚环上烙着紫庭的号。纸条只有两指宽，字得写得很小。',
      '天快黑了。从这儿往下看，下城那块空地上点起了一圈火。全军都没走，在等那个红头发的再起来一回。她上回死了三个时辰就起来了，这事连威克斯堡都听说过。',
      { if: 'flag.pa_name_taken', text: '信纸背面还记着水槽边那个人的名字。' },
      { if: 'is.god', text: '可写的还多一样：你自己。' },
      '奥托格把头一只鸽子捧出来，等着你。',
    ],
    first: ['quest q_o_wex start'],
    choices: [
      {
        text: '照实写：城门，各家的旗，连罗吉尔在哪座桥上',
        req: 'flag.rogier_spotted', reqText: '得先在桥上数过他的人',
        effects: ['flag report1_true', 'var honest_reports +1', 'world peace +1', 'rep throne +1', 'rep moon -1', { if: 'flag.pa_gates_counted', then: ['rep throne +1'] }],
        result: '鸽子往西飞了。用不了十天，巴兹伍德先生就会知道，一个公文上的死人坐在哪座桥的桥栏上，身边有多少人、几张弓。',
        goto: 'p_wex_06',
      },
      {
        text: '只写城门和旗，不提桥上那位',
        effects: ['flag report1_true', 'var honest_reports +1', { if: 'flag.pa_gates_counted', then: ['rep throne +1'] }],
        result: '{?flag.pa_gates_counted:哪座门插着谁的旗，你写得一清二楚。|门你只数了个大概，照大概写了。}桥上的事一个字没提。奥托格看着你把纸条卷好，什么也没问。他从来不问。',
        goto: 'p_wex_06',
      },
      {
        text: '写一行：城在科琳塔尔手里，稳了',
        effects: ['flag report1_false', 'var false_reports +1'],
        result: '一行字，写完纸条还空着一半。这样的信巴兹伍德先生最爱看，也最不信。',
        goto: 'p_wex_06',
      },
      {
        text: '不放。把鸽子关回笼里',
        effects: ['rep throne -1'],
        result: '奥托格把鸽子塞回去，喂了一把麦粒。紫庭的规矩是：头一封迟了，后头每一封都要多核一遍。',
        goto: 'p_wex_06',
      },
      {
        text: '照实写，末尾添一行：城里另有一位神，是我',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_revealed', 'flag report1_true', 'var honest_reports +1', 'world peace -1'],
        result: '奥托格看见了末尾那一行，手抖得差点把鸽子捏死。这只鸽子落地的那一晚，威克斯堡要连夜开会，紫庭一冬天别想睡整觉。',
        goto: 'p_wex_06',
      },
    ],
  },

  p_wex_06: {
    id: 'p_wex_06',
    title: '报名',
    art: 'ev_multi_racial_merc',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月12日清晨',
    text: [
      '天亮了，她没有起来。队长们在那块空地上拿两只空酒桶架了一扇门板，吵到最后只定下一件事。',
      ORDER,
      '威克斯在城里统共十来个人，算不上一个营，桌边本来没有你们的位子。可你数了一天的门，数出来一件事：这城里走到哪儿都有人盘问，只有拉死人的车没人拦。你走到桌边，自己报了名。',
      { speaker: '苔藓滩的冈瑟', text: '威克斯的人要上车？行啊。车你拉，账你们皇上付，几分利另算。' },
      { if: 'flag.letter_shown', text: '钴蓝兵团的这位队长说话的时候，看的是你胸口揣信的地方。昨天楼梯上那几个逃兵，嘴不严。' },
      { if: 'is.god', text: '你报完名，桌边半天没人接话。冈瑟头一回没先问利钱。他问的是：神拉车，工钱按人头结，还是另有个价？' },
      '奥托格被留在了营里。板车停在桌边，车板上粘着鱼鳞。她那边围着人，谁也不许动。杜坎森这边没人肯动，只有一个兽人女人蹲着，拿打了结的皮绳量他的指节。你数门，她数骨节。',
      { speaker: '乌什卡', text: '骨头粗，要磨两天。' },
      { if: 'is.god', text: '她看了你一眼，量到一半的手停了，另一只手搁到了腰后的锤子上。' },
      { if: 'is.god', speaker: '乌什卡', text: '死不了的我见过。都得有人去放倒。' },
      '车边还站着个十五六岁的小祭司，提着一盏没吹的灯。',
      { speaker: '阿坦', text: '我叫阿坦。万神道上没屋顶的那座庙归我看，军令就钉在庙门上。' },
      { speaker: '阿坦', text: '你们出城的时候，顺路替我打听一件事。银龙为什么没有再来。卡斯塔诺有难他就该来的，二十年了。' },
    ],
    first: TABLE_FIRST,
    choices: [
      {
        text: '答应他：顺路打听',
        effects: ['rep temples +1'],
        result: '他点了点头，把你的名字问了去，说晚上记在簿子上。什么簿子，他没说。',
        goto: 'a1_01',
      },
      {
        text: '告诉他：你是来数门的，神的事不归你数',
        effects: ['approval ushka +1'],
        result: '小祭司说门他也数过，万神道上原先有十一座庙门，眼下关得上的剩三座。量骨节的那个抬头看了你一眼，又低下头去。',
        goto: 'a1_01',
      },
      {
        text: '掏五个金冠，替车上置办盐和草席',
        cost: { gold: 5 },
        effects: ['rep companies +1'],
        result: '桌边的人头一回看见威克斯人往外掏钱，好几个伸长了脖子。冈瑟说这笔他记着，不算利。',
        goto: 'a1_01',
      },
    ],
  },
};
