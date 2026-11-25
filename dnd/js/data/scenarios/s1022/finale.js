// 终章《最后一个冬天》，含间幕《十二个冬天》和七个结局场景（BIBLE §11.6、§10、§16）。
// 自检：node tools/check-part.mjs s1022 finale.js
//
// ---- 提纲（照 §11.6 对过）------------------------------------------------------------
// f_01   十二个冬天（年表上半）：解药早晚、艾伦纳斯那条街、死者名单、阿雷尔。cure_early 在这里结算 unburied -1。→ f_01b
// f_01b  十二个冬天（年表下半）：十字军的旗、山上的敕令、疫令、年纪（凡人／长命／永生）。
//        四选一：winters_crusade / winters_varlosen / winters_home / winters_squire。→ f_02
// f_02   谁没熬过来：瓦洛森重聚，先数没来的人（福尔卡德、克雷格、雷安、亚科布），王座上又是孩子。[洛伦特] 太后。→ f_02b
// f_02b  来了的人：四个同伴 1053 年的口气，阿德蕾西娅二十七。三种过夜法（好感／fx_walked／[洛伦特] 回信）。→ f_03
// f_03   集结（枢纽）：进场算 var muster；店；长休；同伴最后的谈话；加里昂、伊迪丝、戴伦、卢西安；[达梅里亚] f_03m。→ f_04
// f_04   苏雷尔神庙：西奥多带着镐。temple_dug（muster +1）/ temple_guarded（没劝住 muster -1）。[精灵] 问修士。→ f_05
// f_05   科乌尔堡：sun_terms 开门；否则谈（DC 18）或绕（DC 17），败了 muster -1、unburied +1。[伊贝瓦尔][威克斯]。→ f_05b
// f_05b  头阵点哪一路；短休。→ f_06
// f_06   达拉万之愚：过沼 survival DC 16（[鹰身女妖] 自己飞）。→ f_06b
// f_06b  柱子：writ <= 3 火刑队（谈 DC 18，[蓝宝石] DC 14，打；[神] 叫停）→ pyre_stopped；writ >= 4 空柱子、沼里的死人。
//        输了去 f_06c。→ f_07
// f_07   山下的坟场：战（阿德蕾西娅、muster 给的人作友军），敲钟。输了 f_07b（muster -1）。→ f_08
// f_08   门：埃德蒙·苍手。行过礼／[蓝宝石] 一对一；否则连扈从一起。输了 fx_ald_hurt。→ f_08b（短休）→ f_09
// f_09   笼子（旁白不逗趣）：开不开笼子（开了当场多打一个号魂）；薇齐娜在不在笼子里（vezina_freed）；
//        阿雷尔二世：[旧礼] 葬礼（unburied -1）／[达梅里亚] 马里昂开口／打。输了 f_09b。→ f_10
// f_10   死去的国王们（枢纽）：坎雷克讲第三种缰绳（契约）；五十三世在不在左手边；[乌霜边区] 军团牌；[神] 那把椅子。→ f_10b
// f_10b  那个字：四种情形（被牵的皇帝／皇帝是你／结解了／山上没人），立 bridle_pc / bridle_wise 或者开打。→ f_11
// f_11   动手：五十三世先起身（要打的话）；主战按 皇帝在哪边 × muster × 阿德蕾西娅的状态 给二十七种编成。→ f_11c
// f_11c  谁付账：六选一，前提不满足的不显示；收尾保证 end_bridle 一定有人牵绳。→ f_12
// f_12   那本书：book_locked / book_wise（book_kept 的跳过）。[贤者门下] 借条。→ f_12b 骑士团（order_founder）→ f_12c 交印，去七个结局。
// end_*  七个终幕场景，只写结局卡片之前的那一场戏；卡片正文在 meta.js 的 endings 里，接在后面显示。
//
// 本段私有标记（只在本文件设、本文件读）：fx_walked fx_route fx_vezina_tip fx_temple_read fx_temple_botched fx_prayed
// fx_ald_hurt fx_cages fx_tags_read fx_spoon fx_liii_up fx_liii_done fx_emp_foe fx_emp_ally fx_pc_dragged fx_lost fx_pc_dead
// fx_burn_tried；计数器 muster（§12.8）、fx_ald（阿德蕾西娅作友军的强弱 0/1/2）、fx_cfg（主战编成 0–26）。

// ---- 友军与敌人的现成编组（纯数据）------------------------------------------------------
const ALD_HALF = { id: 'knight', name: '阿德蕾西娅', hpMult: 0.5 };
const ALD_NORM = { id: 'knight', name: '阿德蕾西娅' };
const ALD_STRONG = { id: 'knight', name: '阿德蕾西娅', hpMult: 2 };
const TEAM1 = { id: 'knight', n: 2, name: '十字军骑士' };
const TEAM2 = { id: 'archer', n: 2, name: '会师的弓手' };
const TEAM3 = { id: 'war_priest', name: '随军的收殓人' };
const EMPEROR = { id: 'bridled_emperor', name: '卡斯坦五十四世' };
const FOE = [{ id: 'canrec_lich' }, { id: 'bellowing_soul', n: 2, name: '号魂' }];
const FOE_EMP = [{ id: 'canrec_lich' }, { id: 'bellowing_soul', n: 2, name: '号魂' }, EMPEROR];

// 山下的坟场
const GRAVE = {
  title: '山下的坟场',
  intro: '栅门是从里头被推开的。十三年前那口钟还挂在钟楼上，绳子换过了。',
  enemies: [{ id: 'pestilent_zombie', n: 4 }, { id: 'wight', n: 2, name: '穿甲的死人' }, { id: 'ghoul', n: 2 }],
  noAwe: true,
  specials: [
    { id: 'bell', name: '敲钟', desc: '十三年前就是这口钟把它们从栅门引开的',
      check: { skill: 'athletics', dc: 16, adv: 'flag.fx_prayed' },
      success: { text: '钟响了。它们一齐朝钟楼转过头去，同十三年前一个样。', applyAll: { cond: 'stunned', turns: 1 } },
      fail: { text: '钟绳是新换的，太滑。你被带得离了地，摔在钟楼的台阶上。', selfDmg: '1d10' } },
    { id: 'stones', name: '推倒一排墓碑', desc: '第一排的碑早就松了',
      check: { skill: 'athletics', dc: 15, adv: 'is.martial' },
      success: { text: '碑是连着底座倒的，一块砸一块，砸到第三排才停。', dmgAll: '3d8', type: 'bludgeoning' },
      fail: { text: '碑没倒，你的肩膀先响了一声。', selfDmg: '1d6' } },
  ],
  win: { effects: ['xp 900'], goto: 'f_08' },
  lose: { effects: ['var muster -1'], goto: 'f_07b' },
};

// 大厅里的主战
const SP_NAMES = {
  id: 'names', name: '照账页念名字', desc: '念对一页，书里就有人松一口气', once: false,
  check: { skill: 'history', alt: ['religion'], dc: 17, adv: 'flag.vezina_freed || flag.fx_tags_read',
    mods: [{ if: 'item.ledger_page < 1', n: -8, why: '手里没有账页' }, { if: 'flag.fx_walked', n: 2, why: '雾林里那些木牌你走过一遍' }] },
  success: { text: '你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫。号魂的边缘散了一圈。', dmgAll: '6d8', type: 'radiant' },
  fail: { text: '你念错了一个姓。书里的人不答应，答应的是别的东西。', selfDmg: '2d8', type: 'necrotic' },
};
const SP_ITCH = {
  id: 'itch', name: '抓他后脑勺', desc: '他的命匣不像他，那块地方痒了三十年',
  check: { skill: 'sleight', dc: 18, adv: "class == 'rogue'" },
  success: { text: '你的指甲刚碰到那块地方，他两只手就都顾不上书了。“维纳克！”他骂的是一个死了四十年的人。', applyAll: { cond: 'blinded', turns: 2 } },
  fail: { text: '他偏了偏头。你抓了一把袍领，领子底下是冰的。', selfDmg: '2d10', type: 'cold' },
};
const HALL = {
  title: '死去的国王们',
  intro: '坎雷克翻开书，念了头一个名字。书页里有人应了一声。',
  noAwe: true, fleeable: false,
  specials: [SP_NAMES, SP_ITCH],
  win: { effects: ['xp 1500'], goto: 'f_11c' },
  lose: { effects: ['flag fx_lost'], goto: 'f_11c' },
};

// 沼地的柴堆前
const PYRE = {
  title: '柴堆前',
  intro: '白罩袍围成半圈。队长把火把举过了头。',
  enemies: [{ id: 'witch_hunter', n: 3, name: '火刑队' }, { id: 'pyre_captain' }],
  specials: [
    { id: 'kick', name: '踢散柴堆', desc: '带火星的劈柴会滚到他们脚下',
      check: { skill: 'athletics', dc: 16 },
      success: { text: '柴堆散了。带火星的劈柴滚了他们一脚，白罩袍的下摆烧起来两件。', dmgAll: '3d6', type: 'fire' },
      fail: { text: '柴捆是拿湿藤扎死的。你踢在上头，油溅了自己一腿。', selfDmg: '1d8', type: 'fire' } },
    { id: 'rope', name: '割断柱子上的绳', desc: '柱子上的人一落地，他们就得分神',
      check: { skill: 'sleight', dc: 15 },
      success: { text: '绳子断了。柱子上的人滚进泥里，顺手抱走了队长脚边那桶油。', applyAll: { cond: 'dazed', turns: 1 } },
      fail: { text: '绳子浸过油，刀口打滑，只割开一半。' } },
  ],
  win: { effects: ['xp 900', 'flag pyre_stopped'], goto: 'f_07' },
  lose: { goto: 'f_06c' },
};

// 令状管着的年头：柱子是空的，拦路的是沼里的死人
const MIRE = {
  title: '沼里的死人',
  intro: '它们从泥里往外拔腿，拔一步响一声。',
  enemies: [{ id: 'pestilent_zombie', n: 3 }, { id: 'ghoul', n: 2 }, { id: 'wight', name: '挂着水草的骑士' }],
  noAwe: true,
  specials: [
    { id: 'mud', name: '把它们引到烂泥最深的那一段', desc: '柳条外头的泥没有底',
      check: { skill: 'survival', dc: 15 },
      success: { text: '你退着走，踩的是柳条里头。它们直着追，踩的是柳条外头，一个接一个陷到了腰。', applyAll: { cond: 'restrained', turns: 2 } },
      fail: { text: '你自己先踩空了一脚，泥灌进了靴筒。', selfDmg: '1d8' } },
  ],
  win: { effects: ['xp 700'], goto: 'f_07' },
  lose: { goto: 'f_06c' },
};

// 山上的宅子大门：一对一，或者连扈从一起
const SP_VISOR = {
  id: 'visor', name: '掀他的面甲', desc: '里头是什么，他自己多半也不想看',
  check: { skill: 'athletics', dc: 16 },
  success: { text: '面甲掀开了。里头的东西见了光，他抬手去挡，挡的是自己的脸。', applyAll: { cond: 'stunned', turns: 1 } },
  fail: { text: '你够着了面甲的边，他的盾先到了。', selfDmg: '2d6' },
};
const GATE_DUEL = {
  title: '门',
  intro: '他把枪放平，朝两个扈从摆了一下手。扈从退到了门柱后头。',
  enemies: [{ id: 'edmund_palehand' }], noAwe: true,
  specials: [SP_VISOR],
  win: { effects: ['xp 1000'], goto: 'f_08b' },
  lose: { effects: ['flag fx_ald_hurt'], goto: 'f_08b' },
};
const GATE_FULL = {
  title: '门',
  intro: '他退开十步，压低了枪尖。两个扈从一左一右跟了上来。',
  enemies: [{ id: 'edmund_palehand' }, { id: 'wight', n: 2, name: '苍手的扈从' }], allies: [ALD_NORM], noAwe: true,
  specials: [SP_VISOR],
  win: { effects: ['xp 1000'], goto: 'f_08b' },
  lose: { effects: ['flag fx_ald_hurt'], goto: 'f_08b' },
};

// f_11c 的收尾（§11.6）：皇帝还被牵着、还活着、没人夺过缰绳，坎雷克倒下前把那个字念给了屋里的人。
const CLOSE = {
  if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise',
  then: [{ if: 'world.writ >= 7 || flag.fx_pc_dead', then: ['flag bridle_wise'], else: ['flag bridle_pc', 'flag knows_word'] }],
};

export const SCENES = {
  // ======================================================================== 间幕
  f_01: {
    id: 'f_01',
    title: '十二个冬天',
    chapter: '间幕 · 十二个冬天',
    art: 'ev_blank',
    loc: '坎诺各地', date: '1041—1053年',
    text: [
      '十字军的头一路是 1041 年花始月出的北要塞。往后十二个冬天，你那本账一年只记得下一两行。',
      { if: 'flag.cure_early', text: '1042 年。头一批解药出了瓦洛森，比玛希尔达自己算的早一年。只救得了刚被咬的。' },
      { if: '!flag.cure_early', text: '1043 年。头一批解药出了瓦洛森。只救得了刚被咬的，车到边境地的时候洒了两罐。' },
      { if: 'world.communion <= 5', text: '1042 年。艾伦纳斯烧了精灵街，火从街东头的面包房起，烧了两天。加韦德的国王事后罚了三个人，罚的是纵火，没提精灵。' },
      { if: 'world.communion >= 6 && world.communion <= 7', text: '1042 年。艾伦纳斯烧了精灵街。街上的人前一夜从后巷走了，有人挨家敲过门。敲门的是谁，两边到现在说法不一样。' },
      { if: 'world.communion >= 8', text: '1042 年。艾伦纳斯有人举着火把去了精灵街。街口站着一排本城的屠户和面包师，手里是擀面杖。火把举到半夜，散了。' },
      { if: 'world.unburied <= 3', text: '白疫没走出边境地。1050 年卡奈特的克雷格还在打猎，洛伦特的雷安四世在给第二个孩子挑名字。大墓地这几年的新账，一页写不满。' },
      { if: 'world.unburied >= 4 && world.unburied <= 6', text: '1050 年。卡奈特的克雷格和他的儿女，一个礼拜里先后走的。洛伦特的雷安四世也是这一年，三十岁，身后的王子四岁。' },
      { if: 'world.unburied >= 7', text: '1050 年。卡奈特的克雷格和他的儿女；洛伦特的雷安四世，三十岁。这一年边境地有十一个村子从税册上划掉了，划的人懒得写缘由。' },
      { if: 'flag.doses_moon || flag.doses_split', text: '阿雷尔王子喝过你分的那一剂，活了下来。他今年三十岁，左胳膊上那道疤一到阴天就发白。' },
      { if: '!flag.doses_moon && !flag.doses_split && world.unburied <= 3', text: '阿雷尔王子没分到头一锅药。他在隔离的帐子里躺了十九天，等到了第二锅。' },
      { if: '!flag.doses_moon && !flag.doses_split && world.unburied >= 4', text: '阿雷尔王子没等到药。他是 1040 年苏伦月走的，十七岁。马里昂从那以后不在席上讲笑话了。' },
    ],
    first: ['level 10', { if: 'flag.cure_early', then: ['world unburied -1'] }],
    next: 'f_01b',
  },

  f_01b: {
    id: 'f_01b',
    title: '十二个冬天',
    text: [
      { if: 'flag.charter_emperor', text: '十字军打的是皇帝的旗。东坎诺的兵年年来得齐，西边的一年比一年少，都说家里得留人看着东边。' },
      { if: 'flag.charter_league', text: '十字军打的是同盟的旗。军饷从洛伦泰内发，账也在洛伦泰内算，算得很细。' },
      { if: 'flag.charter_writ', text: '十字军跟着瓦洛森的令状走，先封路，后进兵。一个冬天挪三十里，身后的村子倒是都还有人。' },
      { if: 'flag.charter_muster', text: '十字军没有总旗，自愿来的各打各的。每年开春来一批，秋收前走一批，留下过冬的都是没地可种的。' },
      { if: 'flag.god_crusade', text: '他们出阵前喊的是你的神号。喊的人里有一半你没见过。' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.castan_garrec', text: '加雷克在山上发过三道敕令：修北要塞的粮仓，赦放下兵器的军团兵，西门外不许再挂人。' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.castan_lucan', text: '卢坎在山上发过三道敕令。头一道准精灵在卡斯托纳斯置地，第三道请他母亲上山来住。' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.castan_liv', text: '卡斯坦在山上发过十一道敕令，九道同酒有关。她添的第十一道试炼是喝赢她，至今没人过关。' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.castan_pc', text: '山上那把椅子是你的。北要塞的书记官说，历代卡斯坦里数你批文书最慢，下山最勤。' },
      { if: 'flag.law_full', text: '瓦洛森凭疫令封过十一条路。征尸的车进村不用敲门，这事各村记到现在。' },
      { if: 'flag.law_limited', text: '疫令 1050 年到的期。续不续，各国的信使在圆桌边吵了一冬，续了。' },
      { if: 'flag.law_refused', text: '没有疫令。各村自己设卡，卡和卡之间那几里路没人管，死人就走那几里。' },
      { if: 'flag.god_wed && world.unburied >= 4', text: '雷安走后，奥坎娜没能改嫁。那桩婚是你证的，两家的祭司翻了半年书，没找着谁有权解。' },
      { if: 'is.mortal && !is.longlived', text: '你五十出头了。早上得先在床沿坐一会儿，等两个膝盖都答应了再站。' },
      { if: 'is.mortal && is.longlived', text: '十二年没在你脸上留下什么。营里新来的人拿你当同辈，认得你的老人见了你不大自在。' },
      { if: 'is.immortal', text: '这页账上每个名字后面都添了岁数：马里昂五十二，戴伦四十，伊迪丝四十三。你那一行还是领印那天的写法。' },
      { if: 'is.immortal && !is.god', text: '大墓地十二年里换了两任大祭司。每一任上来都写信问你，欠的那一死还挂不挂着。' },
      '这十二个冬天你自己是在哪儿过的，账上也得写一笔。',
    ],
    choices: [
      { text: '跟着十字军，一个冬天一个冬天地打', goto: 'f_02', effects: ['flag winters_crusade', 'rep escann +1'],
        result: '十二个冬天，你换了四匹马，磨穿了两副马镫。卢西安的人现在见了你，先把火堆边的位子让出来。' },
      { text: '守在瓦洛森，替玛希尔达看药锅', goto: 'f_02', effects: ['flag winters_varlosen', 'rep wise +2'],
        result: '你学会了看火候，也学会了在塔里不问隔壁在熬什么。玛希尔达把刷锅的差事分了你一半。' },
      { text: '回本国去：那边也在死人', goto: 'f_02',
        effects: ['flag winters_home',
          { if: "origin == 'dameria'", then: ['rep moon +2'] }, { if: "origin == 'lorent'", then: ['rep rose +2'] },
          { if: "origin == 'ebonmarck'", then: ['rep dragon +2'] }, { if: "origin == 'ibevar'", then: ['rep elders +2'] },
          { if: "origin == 'wex'", then: ['rep wex +2'] }],
        result: '你回去守了十二年自家的路卡。认得你的人少了一半，新添的坟你都叫得出名字。' },
      { text: '把阿德蕾西娅带在身边，教她盖印之前先数人', goto: 'f_02', effects: ['flag winters_squire'],
        result: '她十五岁那年正式立的誓。你教她数人头，数粮车，数回来的和没回来的。她现在数得比你快。' },
    ],
  },

  // ======================================================================== 终章
  f_02: {
    id: 'f_02',
    title: '谁没熬过来',
    chapter: '终章 · 最后一个冬天',
    loc: '科乌里亚 · 瓦洛森', date: '1053年奈拉月',
    text: [
      '1053 年奈拉月，瓦洛森。塔外的林子起了雾，雾里那些石头兵还按老样子站着，脚边是这十三年添的坟。最后一路十字军在塔下扎营。',
      '饭堂的长桌坐不满了。阿德蕾西娅把缺的人数了一遍。',
      '福尔卡德是 1049 年走的，八十八岁。大墓地给他束了腰，用的是他年轻时自己缝的那一副。',
      { if: 'world.unburied >= 4', text: '卡奈特的克雷格和他的儿女。洛伦特的雷安四世。王座上又是孩子了：鲁本三世七岁，替他拿主意的祖母还是那位祖母。' },
      { if: 'world.unburied >= 4', text: '加韦德的戈德拉克十一世六岁。北边来的信使说，他入秋开始咳。' },
      { if: 'world.unburied <= 3', text: '克雷格来了信，说卡奈特的路卡今年撤了一半。雷安四世也来了信，信是他祖母的笔迹。' },
      { if: 'flag.iacob_pardoned', text: '亚科布去年死在床上，九十一岁。福阿哈尔来报丧的人说，床头的茶具摆得整整齐齐。' },
      { if: 'flag.iacob_wise', text: '亚科布九十二了，还关在塔顶那间屋里，每旬讲一课。今天不是讲课的日子。' },
      { if: "origin == 'lorent' && world.unburied >= 4", text: '你动身前进过一趟洛伦泰内的王宫。同一张王座，同一双够不着垫子的脚。太后一百一十五岁，样子没变。' },
      { if: "origin == 'lorent' && world.unburied <= 3", text: '你动身前进过一趟洛伦泰内的王宫。雷安在王座上批文书，太后坐在他斜后面，一百一十五岁，样子没变。' },
      { if: "origin == 'lorent' && flag.lance_told_truth", text: '她说你那句“是他自己的手”，她每年泪落月都拿出来想一遍，想到今年。' },
      { if: "origin == 'lorent' && flag.lance_told_thrall", text: '她说你那句“他当时被慑住了”，她当年就没全信。她只是用得着。' },
      { if: "origin == 'lorent' && !flag.lance_told_truth && !flag.lance_told_thrall", text: '她问你，三十一年前那句话打算欠到哪一年。她说她等得起，这一点她同你们不一样。' },
    ],
    first: ['quest crusade start', 'codex varlosen', 'codex aldresia', 'codex white_pestilence'],
    next: 'f_02b',
  },

  f_02b: {
    id: 'f_02b',
    title: '来了的人',
    text: [
      '{?partysize > 0:来了的人挤在长桌的一头。还是原来那几张脸，都旧了。|来了的人不多。你这一头只有你和阿德蕾西娅，她把空凳子一张一张摞到了墙边。}',
      { if: 'party.valeran && is.mortal && !is.longlived', speaker: '瓦勒兰', text: '我五十二了，恕我直言，您也不年轻。那位太后还是我头一回见她的样子。这件事我想了三十年。' },
      { if: 'party.valeran && is.mortal && is.longlived', speaker: '瓦勒兰', text: '我五十二了。恕我直言，您同那位太后一样，还是我头一回见的样子。这件事我想了三十年。' },
      { if: 'party.valeran && is.immortal', speaker: '瓦勒兰', text: '那位太后还是我头一回见她的样子，您也是。这件事我想了三十年，恕我直言，现在得想两份。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '六十一。翅膀根早不疼了，没知觉了。掌玺大臣，趁我还飞得动，酒钱先结一下，三十一年的。' },
      { if: 'party.liv && is.immortal', text: '她说这话的时候看的是桌上的酒壶，没看你的脸。这是近几年才有的。' },
      { if: 'party.barry', speaker: '巴里', text: '我家那孩子今年四十了。上回我当着人这么叫他，他等议事厅的门关上才敢答应。来，先垫一口，乳酪是三道卫的。' },
      { if: 'party.vezina && flag.vezina_eye', speaker: '薇齐娜', text: '今晚要起风，第三顶帐子的桩得再钉一遍。我没说要是。别问我怎么知道的，我也不想知道。' },
      { if: 'party.vezina && !flag.vezina_eye', speaker: '薇齐娜', text: '第十七本了。前十六本我昨晚翻了一遍，你三十一年里改过口的裁断有四桩。理论上不算多。' },
      '阿德蕾西娅二十七岁，带最后一路，腰上那把剑叫银歌。她十四岁那年在坟边问过你，死人解束腰干什么。',
      { if: 'is.immortal', text: '她站得同你一般高了。你还是她十四岁那年看见的样子。她看了你一会儿，把这件事同别的数目记在了一处。' },
      { if: 'is.god', text: '她那年还问过你一句：神用不用数人。你当时怎么答的，她记着。' },
    ],
    choices: [
      { text: '坐下来，听各人把这十二年讲一遍', goto: 'f_03',
        effects: [{ if: 'party.liv', then: ['approval liv +1'] }, { if: 'party.valeran', then: ['approval valeran +1'] },
          { if: 'party.barry', then: ['approval barry +1'] }, { if: 'party.vezina', then: ['approval vezina +1'] }],
        result: '讲到后半夜。{?party.liv:卡斯坦讲的每一件事里她都赢了。|}没讲完的留到打完再讲，这话是阿德蕾西娅说的，说完她先去睡了。' },
      { text: '去塔后的雾林，把这十三年的新坟走一遍', goto: 'f_03', effects: ['flag fx_walked'],
        result: '坟前的木牌是瓦洛森的学生写的，字有好有坏。你走了一个时辰，认出来的名字有四十几个，有几个你以为还活着。' },
      { text: '给太后回一封信，把欠她的那句话写上', tag: '洛伦特', if: "origin == 'lorent'", goto: 'f_03', effects: ['rep rose +2'],
        result: '你写了三行。信使接过去掂了掂，说太后回信慢，上一封她回了十七年。' },
    ],
  },

  f_03: {
    id: 'f_03',
    title: '集结',
    art: 'ev_multi_racial_merc',
    loc: '瓦洛森 · 十字军大营',
    text: [
      '塔下的营盘扎了三里长。罗尔萨德人的帐子最密。他们是从洛伦特逃出来的，不要饷，只问打完了地契归谁写。',
      '统兵的卢西安·西尔·维文把点名册摊在一只倒扣的木桶上。到了的有：{?flag.edict_softened:威克斯的长矛，|}{?flag.enteben_stopped:恩特本的枪骑，|}{?flag.garrec_king:黑龙的军团兵，|}{?flag.larthan_open:伊贝瓦尔的弓手，|}{?flag.sun_terms:太阳精灵的驻军，|}{?flag.viswall_safe:半身人的粮车，|}{?flag.winters_crusade:跟你打了十二年的老兵，|}瓦洛森自己的两百人。',
      '阿德蕾西娅在各营之间走，嘴里一直有数目。',
      { if: 'is.god', text: '你的帐子前头每天早上有人磕头，磕完留下一只鸡蛋或者半块饼。也有人打水宁可绕半个营，不从你门前过。' },
      { if: 'is.immortal', speaker: '阿德蕾西娅', text: '有句话我先说在前头。到了山上要是得有人拿命去换，您去不算数。您又不会死。' },
    ],
    first: [
      'var muster =0',
      { if: 'flag.edict_softened', then: ['var muster +1'] }, { if: 'flag.enteben_stopped', then: ['var muster +1'] },
      { if: 'flag.garrec_king', then: ['var muster +1'] }, { if: 'flag.larthan_open', then: ['var muster +1'] },
      { if: 'flag.sun_terms', then: ['var muster +1'] }, { if: 'flag.viswall_safe', then: ['var muster +1'] },
      { if: 'flag.winters_crusade', then: ['var muster +1'] },
    ],
    shop: {
      name: '十字军的军需官', blurb: '罗尔萨德口音，秤是准的，价钱是战时的。',
      stock: ['ebonsteel_greatsword', 'ebonsteel_greataxe', 'ebonsteel_plate', 'elven_mail', 'superior_healing_potion',
        'blessed_water_jar', 'scroll_mass_healing', 'scroll_banishment', 'nerat_candle'],
    },
    choices: [
      { text: '同卡斯坦喝最后一顿', if: 'party.liv', once: true, effects: ['approval liv +1'],
        result: [
          { speaker: '卡斯坦', text: '账要是算到拿命付，你先问我。我六十一了，鹰身女妖没有活过一百的。剩下那几年我本来也是打算拿去喝的。' },
          '她把两只杯子都倒满，自己那杯先干了，又替你干了你那杯。',
        ] },
      { text: '陪瓦勒兰擦甲', if: 'party.valeran', once: true, effects: ['approval valeran +1'],
        result: [
          { speaker: '瓦勒兰', text: '恕我直言。家父那条命换来的洛伦特，如今替王座拿主意的还是那位太后。我跟了您三十年，没弄明白自己算赢了还是输了。' },
          '他把护喉的皮带又紧了一格，说这同输赢无关，是他瘦了。',
        ] },
      { text: '去恩特本的营里见瓦勒兰', if: '!party.valeran && flag.valeran_released && flag.enteben_stopped', once: true, effects: ['approval valeran +1', 'rep rose +1'],
        result: [
          { speaker: '瓦勒兰', text: '恕我直言，您解了我的誓，我自己可没解。恩特本来了四十杆枪，都归阿德蕾西娅调。这是我同他们讲好的，讲了三天。' },
        ] },
      { text: '去威克斯的营里找巴里', if: 'party.barry || flag.edict_softened', once: true, effects: ['approval barry +1', 'rep wex +1'],
        result: [
          '巴里在给一排长矛手分乳酪。戴伦公爵四十岁，站在边上等他分完。',
          { speaker: '巴里', text: '我家那孩子来了。来，站过来，让{pc}看看你长到多高了。' },
          '满营的人都听见了。公爵站了过去。',
        ] },
      { text: '见一见威克斯公爵', if: '!party.barry && !flag.edict_softened && !flag.edict_overruled', once: true, effects: ['rep wex +1'],
        result: [
          '戴伦四十岁。{?flag.guardian_barry:他先问你吃了没有。|}{?flag.guardian_crovan:他说话只说一半。|}{?flag.guardian_marion:他一口达梅里亚腔。|}{?flag.guardian_barons:他身后站着四个男爵，他一个也没回头看。|}',
          { speaker: '戴伦', text: '你当年在科塞顿问我要不要马。我现在有四百匹，都在拉尸首。打完这一仗，我想让它们拉点别的。' },
        ] },
      { text: '问薇齐娜这一仗她本子上怎么写', if: 'party.vezina && flag.vezina_eye', once: true, effects: ['approval vezina +1', 'flag fx_vezina_tip'],
        result: [
          { speaker: '薇齐娜', text: '前厅，从左数第三排。要开笼子就开那一排，别的先别碰。我没说要是，你听出来了吧。' },
          '她那只好眼睛看着你，另一只看着你身后。',
        ] },
      { text: '问薇齐娜这一仗她本子上怎么写', if: 'party.vezina && !flag.vezina_eye', once: true, effects: ['approval vezina +1'],
        result: [
          { speaker: '薇齐娜', text: '要是我们都回得来（我说的是要是），这一本的最后一页我想让你写。你的裁断，你自己落款。' },
        ] },
      { text: '上塔顶，同加里昂谈那本书', once: true, effects: ['rep wise +1'],
        result: [
          '加里昂两百一十三岁，坐在窗边，空着的那只袖管别在胸口。',
          { speaker: '加里昂', text: '那本书我不想要。可它要是非得落在谁手里，我情愿是一个不想要的人。你们当真打算把这种事交给一句情愿？' },
          { speaker: '加里昂', text: '还有一条。撕他那一页的人，书里的魂松绑时头一个撕的就是他。理论上没有例外。' },
        ] },
      { text: '见带着令状来的伊迪丝', if: 'world.writ >= 7', once: true, effects: ['rep wise +1'],
        result: [
          '伊迪丝四十三岁，手套没摘。她身后跟着一队人，站得很齐，没有一个说话。',
          { speaker: '伊迪丝', text: '令状上写的是协助十字军。怎么协助，由持令的人定。持令的是我。' },
          { if: 'is.god', speaker: '伊迪丝', text: '你现在跟我一样，说什么别人都给。我学了三十年怎么不开口。你要是想听心得，打完来找我。' },
        ] },
      { text: '见一见伊迪丝', if: 'world.writ >= 4 && world.writ <= 6', once: true, effects: ['rep wise +1'],
        result: [
          '她一个人来的，四十三岁，手套没摘。令状给她批了七天假。',
          { speaker: '伊迪丝', text: '我不上山。山上那位说的话，我怕我听得懂。{?flag.edith_trusts:你当年说以后先问。我问过他们了，他们说不去。|}' },
          { if: 'is.god', speaker: '伊迪丝', text: '你现在跟我一样，说什么别人都给。这滋味我比谁都清楚，所以我替你发愁。' },
        ] },
      { text: '去达梅里亚的营里见马里昂', tag: '达梅里亚', if: "origin == 'dameria'", once: true, goto: 'f_03m' },
      { text: '同卢西安对一遍进沼的路', once: true,
        check: { skill: 'history', alt: ['survival'], dc: 15, party: true },
        ok: { text: '你们把三条路对到只剩一条。卢西安在图上那一条旁边画了个酒壶，说那是他上回丢辎重的地方。', effects: ['flag fx_route'] },
        fail: { text: '你记混了两条河的名字。卢西安没说什么，转头叫书记官另请了个沼地向导，向导的钱记在你账上。', effects: ['gold -20'] } },
      { text: '睡一觉', once: true, effects: ['rest long'], result: '营里一夜敲了三回更。你一回也没听见。' },
      { text: '拔营，往科乌尔堡去', goto: 'f_04' },
    ],
  },

  f_03m: {
    id: 'f_03m',
    title: '切肉刀那天',
    text: [
      '达梅里亚的营里挂着月牙旗。马里昂五十二岁，亲自来了。甲是新打的，旧的那副他说扣不上了。',
      { speaker: '马里昂', text: '切肉刀那天的事，我讲了三十一年，一回一个样。{?flag.p_knife_hanged:讲到绞架那一段，席上就没人接话。|讲到那三个老兵回家种地，席上总有人不信。}' },
      { speaker: '马里昂', text: '你当时在场。你说，我到底该怎么讲。' },
    ],
    choices: [
      { text: '叫他照实讲：那天他宿醉，吓得不轻', goto: 'f_03', effects: ['rep moon +1', { if: 'party.valeran', then: ['approval valeran +1'] }],
        result: [{ speaker: '马里昂', text: '这个版本我祖母最爱听。行，往后就讲这个，讲到我吓得钻桌子为止。' }] },
      { text: '劝他讲成自己拦的刀：国王得有个国王的讲法', goto: 'f_03', effects: ['rep moon +2', { if: 'party.valeran', then: ['approval valeran -1'] }],
        result: '他想了想，说不行，那天满厅的人都看见他把酒洒在了裤子上。可他还是叫书记把这个讲法记下了。' },
    ],
  },

  f_04: {
    id: 'f_04',
    title: '苏雷尔神庙',
    art: 'load_10',
    loc: '科乌里亚 · 去科乌尔堡的路上',
    text: [
      '去科乌尔堡的路边有一座苏雷尔的神庙。庙不大，院墙刷得很白，里头住着七个太阳精灵修士，轮流出来给过路的兵舀水。',
      '骑士西奥多·西纳·特里纳斯把马拴在庙门口。他手下十来个人在卸车，卸下来的是镐。',
      { speaker: '西奥多', text: '听说底下封着一位术士王的侍从。听说封的时候她还没老。精灵活一千年，我祖父活了五十一，这中间的差数总得有个地方找补。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，爵士。寿数要是挖得出来，恩特本早就没有一块平地了。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '底下要是封着酒，我也挖。封着人就算了。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我多一句嘴。我们威克斯有句老话：坟要挖得比恨深。可没说过坟要挖开来看。' },
      { if: 'is.god', text: '修士们的苏雷尔在东边打仗。他们舀水舀到你跟前，多看了你一眼，照样舀了一瓢。' },
    ],
    choices: [
      { text: '看庙后那道封门的石条上刻了什么', once: true,
        check: { skill: 'religion', dc: 16, party: true },
        ok: { text: '石条上的祷文你认得一半。这是关人的写法，葬人的写法不长这样。里头那位是被关进去的，关的人指望她出不来。', effects: ['flag fx_temple_read'] },
        fail: { text: '祷文是太阳精灵的旧体。你凑得太近，一个修士拿水瓢把你隔开了。西奥多在院子里看见了，更信底下有好东西。', effects: ['flag fx_temple_botched'] } },
      { text: '用精灵话问修士，底下那位是谁', tag: '精灵', if: 'is.elf', once: true, effects: ['flag fx_temple_read'],
        result: [
          '老修士看了看你的耳朵，换了船上的旧话。',
          { speaker: '修士', text: '一个照镜子的女人。封她的人把镜子朝里摆了。上回有人来问是十二年前，问的人后来没再来。' },
        ] },
      { text: '让他们挖', goto: 'f_05',
        effects: ['flag temple_dug', 'var muster +1', { if: 'party.valeran', then: ['approval valeran -1'] }, { if: 'party.barry', then: ['approval barry -1'] }],
        result: '修士们被请到了院子里，站成一排，没有一个出声。镐落下去的头一声很闷。西奥多说，他的人打完这一仗再走。' },
      { text: '劝他把镐收起来，留人守庙',
        check: { skill: 'persuasion', alt: ['intimidation'], dc: 17,
          mods: [{ if: 'flag.fx_temple_read', n: 2, why: '你知道底下封的是什么' }, { if: 'flag.fx_temple_botched', n: -2, why: '他看见修士赶你了' },
            { if: 'is.elf', n: -2, why: '他不爱听长命的人劝他认命' }] },
        ok: { goto: 'f_05', effects: ['flag temple_guarded'],
          text: [
            '你把话讲完。他把镐掂了掂，放回了车上。你留了四个人在庙后。',
            { speaker: '西奥多', text: '行。等这一仗打完，我再来问一遍。到那时候监誓人未必还管得着。' },
          ] },
        fail: { goto: 'f_05', effects: ['flag temple_guarded', 'var muster -1'],
          text: '他客客气气听完了。当夜他带人摸到庙后，你留的四个人在那儿等着。天亮的时候西奥多的营盘空了，镐没带走。' } },
    ],
  },

  f_05: {
    id: 'f_05',
    title: '科乌尔堡',
    loc: '科乌里亚 · 科乌尔堡',
    text: [
      '科乌尔堡蹲在半山坡上。石头是卡斯塔诺人砌的，旗是太阳精灵挂的，老辈人还管它叫多斯坦堡。',
      { if: 'flag.sun_terms', text: '城门开着。总督德纳里昂在门洞里等，身后是他的驻军，甲擦得比你们的亮。照十三年前谈好的，统兵的是他的人。' },
      { if: 'flag.sun_terms && flag.god_herald', text: '城门上的日轮旗旁边新缝了一颗小的。德纳里昂朝你行的是见上官的礼，脸色是见债主的。' },
      { if: 'flag.sun_terms', speaker: '德纳里昂', text: '上回我说把那座山烧了，你们说再等等。等到今天，山上那座宅子里的笼子添到了一千只。请进吧。' },
      { if: '!flag.sun_terms', text: '城门关着。城头上站了一排弓手，箭没上弦。总督德纳里昂从垛口探出半个身子。' },
      { if: '!flag.sun_terms', speaker: '德纳里昂', text: '上回我说把那座山烧了，你们说再等等。如今你们带着兵来敲门，倒要我别等了。科乌里亚的事，由科乌里亚的兵办。' },
      { if: 'flag.god_half_sentence', text: '你一到，他嘴里的客套就接不下去了。他停了停，改口说了实话：他原本打算把你们晾在城下，晾到开春。' },
      { if: 'party.valeran && flag.sun_terms', speaker: '瓦勒兰', text: '恕我直言。跟着精灵的旗去打一场人类的仗，这事我回去没法禀报。我照打，只是先说一声。' },
      { if: "origin == 'ibevar' && flag.larthan_open", text: '伊贝瓦尔的弓手队长是你的族亲，隔着半个校场用船名喊你。他说亲王的箱子开了两只，一只装的是冬衣。' },
      { if: "origin == 'wex'", text: '从边境地到这儿，十字军走的是你老家的路。沿途哪个村子还有人，哪口井还能喝，你不用看图。' },
    ],
    choices: [
      { text: '带队进城', if: 'flag.sun_terms', goto: 'f_05b' },
      { text: '隔着城门同他谈', if: '!flag.sun_terms',
        check: { skill: 'persuasion', dc: 18,
          mods: [{ if: 'item.jaher_letter >= 1', n: 2, why: '贾赫的回信' }, { if: 'flag.god_half_sentence', n: 3, why: '他在你跟前说不了场面话' },
            { if: 'item.lunatein_plank >= 1', n: 1, why: '月火号的船板' }] },
        ok: { goto: 'f_05b',
          text: '{?item.jaher_letter >= 1:你把贾赫的回信从门缝里递进去。他看了两遍。“谁管用就让谁管”那一句是太阳王的笔迹。|你报了这十三年死在他辖地里的人数，一年一年地报。报到第九年，他不往下听了。}城门开了。' },
        fail: { goto: 'f_05b', effects: ['var muster -1', 'world unburied +1'],
          text: '谈了三天。第三天夜里他开了门，一个字没解释。这三天里山下的村子没人管，有一路等不及的兵自己走了。' } },
      { text: '夜里牵马走山道，绕过去', if: '!flag.sun_terms',
        check: { skill: 'stealth', dc: 17, party: true, adv: "origin == 'wex'" },
        ok: { goto: 'f_05b', text: '你们走的是羊道，马嚼子上缠了布。天亮的时候科乌尔堡已经在身后了，城头的弓手还朝着北边。' },
        fail: { goto: 'f_05b', effects: ['var muster -1', 'world unburied +1'],
          text: '辎重车在半道上翻了一辆，响动传到了城头。绕出去花了三天，走散了一路人。' } },
    ],
  },

  f_05b: {
    id: 'f_05b',
    title: '头阵',
    text: [
      '{?flag.sun_terms:校场上|城南的坡地上}，各路的旗插成一排。统兵的{?flag.sun_terms:太阳精灵|卢西安}把名册递过来，问你头阵点哪一路。',
      { speaker: '阿德蕾西娅', text: '点哪一路我都去。大人只管点，我好去数人。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '点我。我在天上，头阵尾阵都是我先到。' },
    ],
    choices: [
      { text: '在坡下歇半天，喂马，裹伤', once: true, effects: ['rest short'], result: '马吃的是科乌里亚的干草，草里有沼地的味。歇到太阳偏西。' },
      { text: '托族亲捎句话给亲王：箱子可以再开一只', tag: '伊贝瓦尔', if: "origin == 'ibevar' && flag.larthan_open", once: true, effects: ['rep elders +1'],
        result: '他把这句话在嘴里过了一遍，说亲王听了多半不答话。不答话在亲王那儿算好兆头。' },
      { text: '点阿德蕾西娅那一路', goto: 'f_06', effects: [{ if: 'party.valeran', then: ['approval valeran +1'] }],
        result: [{ speaker: '阿德蕾西娅', text: '头阵四百二十人。我数了两遍，第二遍多出一个，是伙夫。他说他也去。' }] },
      { text: '点罗尔萨德人：地是他们要的，路该他们开', goto: 'f_06',
        effects: [{ if: 'party.liv', then: ['approval liv +1'] }, { if: 'party.valeran', then: ['approval valeran -1'] }, 'rep rose -1'],
        result: '卢西安的人没二话。他们的旗手只问了一句：头阵倒下的人，地契写给谁家里。你答应写给寡妇。' },
    ],
  },

  f_06: {
    id: 'f_06',
    title: '达拉万之愚',
    loc: '科乌里亚 · 达拉万之愚',
    text: [
      '达拉万之愚。快四百年前一位国王在这儿放过一场大水，水到今天没退。路是插柳条标出来的，柳条外头的泥没有底。',
      '沼里隔一阵冒一股火，有硫磺味。马不肯走，得蒙上眼牵着。',
      { if: 'party.vezina', speaker: '薇齐娜', text: '十四只。刚才是十五只。少的那只落到前头那排柱子上去了。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我在上头飞，你们在底下蹚。这种地我只管看，不管捞。' },
    ],
    choices: [
      { text: '照向导插的柳条走，一步不许岔',
        check: { skill: 'survival', dc: 16, party: true, adv: 'flag.fx_route' },
        ok: { goto: 'f_06b', text: '走了一整天，一辆车没丢。向导数柳条数到三百就不数了，说再数不吉利。' },
        fail: { goto: 'f_06b', effects: ['hp -8', 'gold -30'],
          text: '第二辆辎重车连骡子一起下去了。你去拽缰绳，泥没到了胸口，是两个罗尔萨德人把你拔出来的。靴子留在了里头。' } },
      { text: '飞到前头去，把硬地一块一块指给后面的人', tag: '鹰身女妖', if: 'is.flyer', goto: 'f_06b',
        result: '从上头看，硬地是一串发白的斑。你飞一段，落一段，后面的人照着你落脚的地方走。{?party.liv:卡斯坦在你旁边飞，说你落地的姿势像只鸭子。|}' },
    ],
  },

  f_06b: {
    id: 'f_06b',
    title: '柱子',
    text: [
      { if: 'world.writ <= 3', text: '沼中间有一片垫了石头的硬地，立着一排烧黑的柱子，十四根。第十五根是新的，底下的柴堆还没点。' },
      { if: 'world.writ <= 3', text: '柱子边上站着十来个披白罩袍的人，胸口缝着一杆长枪。领头的在念经，念的是凯伦的话。' },
      { if: 'world.writ <= 3 && (flag.edith_none || flag.edith_ravens)', text: '柱子上绑的是伊迪丝。她四十三岁，嘴里塞着一团浸了油的麻，眼睛看着你。' },
      { if: 'world.writ <= 3 && !flag.edith_none && !flag.edith_ravens', text: '柱子上绑的是个瓦洛森的学生，二十出头，袍子下摆已经泼了油。他认出了你们的旗。' },
      { if: 'world.writ <= 3', speaker: '火刑队长', text: '凯伦说赢了要留人。留的是人。背了誓的法师算不算人，凯伦没说，我们替他说。' },
      { if: 'world.writ <= 3 && flag.god_crusade', text: '他们念完凯伦，又念了一个名号，是你的。柱子朝外的那一面刻着同样的字。' },
      { if: 'world.writ <= 3 && party.valeran', speaker: '瓦勒兰', text: '恕我直言。凯伦这辈子没烧过一个人。阁下念的后半句，是哪座神殿教的？' },
      { if: 'world.writ <= 3 && party.liv', speaker: '卡斯坦', text: '这回我站骑士这边。凯伦是我爹的兵，叛不叛另说，他见了这帮人要吐。' },
      { if: 'world.writ >= 4', text: '沼中间有一片垫了石头的硬地，立着一排柱子，十四根，都是空的。每根柱子上钉着一张瓦洛森的令状：此地不得私刑。' },
      { if: 'world.writ >= 4', text: '令状管得住活人。硬地那头的泥里站起来一队死的，身上还挂着水草，把路堵了。' },
      { if: 'world.writ >= 4 && party.vezina', speaker: '薇齐娜', text: '柱子要是没空着（我说的是要是），上头该有我认得的人。这张纸我不喜欢，可我得认它。' },
    ],
    choices: [
      { text: '把凯伦那句话的原文背给他们听', tag: '蓝宝石之眼', if: "world.writ <= 3 && faction == 'sapphire'",
        check: { skill: 'history', alt: ['persuasion'], dc: 14 },
        ok: { goto: 'f_07', effects: ['flag pyre_stopped', 'xp 300'],
          text: '你背了全句。后半句是“留下来的人，由赢的人养着”。队长身后有两个人先把火把插进了泥里。队长站了一会儿，也插了。' },
        fail: { text: '你背岔了一个词。队长笑了一下，说骑士团如今连经都背不全了。他的人把柴堆围了起来。',
          combat: PYRE } },
      { text: '走到柴堆前面，同他们讲理', if: "world.writ <= 3 && faction != 'sapphire'",
        check: { skill: 'persuasion', alt: ['intimidation'], dc: 18, party: true,
          mods: [{ if: 'party.valeran', n: 2, why: '瓦勒兰背得出凯伦的原话' }, { if: 'rep.escann >= 3', n: 2, why: '东坎诺认你这枚印' }] },
        ok: { goto: 'f_07', effects: ['flag pyre_stopped', 'xp 300'],
          text: '你问他们，烧到第十五根，沼里的死人少了几个。队长答不上来。他身后有人把火把放低了，一支，又一支。' },
        fail: { text: '你刚说到“监誓人”三个字，队长就摆了摆手。他说印是蜡的，火是真的。',
          combat: PYRE } },
      { text: '不讲了，拔剑', if: 'world.writ <= 3',
        combat: PYRE },
      { text: '叫他们停', tag: '神', if: 'world.writ <= 3 && (is.god || flag.god_crusade)', goto: 'f_07',
        effects: ['flag pyre_stopped', 'var god_acts +1', 'rep wise -2', { if: 'party.valeran', then: ['approval valeran -1'] }],
        result: [
          '他们停了。火把一支一支放低，放得很齐。',
          { speaker: '火刑队长', text: '那该烧谁？您给个名字，我们换一根柱子。' },
          { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这些人是您的。' },
          '{?flag.god_crusade:你叫他们把柱子上的神号凿掉。他们凿了，凿得很仔细，凿下来的石粉拿布包好，揣进了怀里。|他们跪下的时候问你神号怎么写，好往柱子上刻。瓦洛森那个学生是自己走的，走出很远才敢回头。}',
        ] },
      { text: '结阵，从正面清过去', if: 'world.writ >= 4',
        combat: MIRE },
      { text: '熄了火把，贴着硬地的边摸过去', if: 'world.writ >= 4',
        check: { skill: 'stealth', dc: 16, party: true },
        ok: { goto: 'f_07', effects: ['xp 200'], text: '它们是冲着火光站的。你们摸黑走了半里，最近的一个离你的马镫不到一臂，脸朝着别处。' },
        fail: { effects: ['hp -6'], text: '有匹马打了个响鼻。最近的那个转过头来，一把抓住了你的小腿。',
          combat: MIRE } },
    ],
  },

  f_06c: {
    id: 'f_06c',
    title: '泥里',
    text: [
      { if: 'world.writ <= 3 && (flag.edith_none || flag.edith_ravens)', text: '你被两个人按在泥里，脸朝着柴堆。火点着了。麻团烧断的时候，伊迪丝说了一句话，隔着火你没听清。' },
      { if: 'world.writ <= 3 && (flag.edith_none || flag.edith_ravens)', text: '火灭了。披白罩袍的人一个接一个放下火把，四下里看，有人问这是哪儿。没人答得上来，他们就散了。伊迪丝是自己解的绳子，手套烧没了一只。' },
      { if: 'world.writ <= 3 && !flag.edith_none && !flag.edith_ravens', text: '你被两个人按在泥里，脸朝着柴堆。火点着了。那个学生没喊多久。' },
      { if: 'world.writ <= 3 && !flag.edith_none && !flag.edith_ravens', text: '他们把你们的兵器扔进泥里，走了。第十五根柱子从此也是黑的。' },
      { if: 'world.writ >= 4', text: '它们没追。你们退回上一片硬地，丢了两辆车。天亮以后绕了十里，绕过去的时候它们还站在原地，脸朝着昨晚火把亮过的方向。' },
    ],
    first: [
      { if: 'world.writ <= 3 && !flag.edith_none && !flag.edith_ravens', then: ['rep wise -1'] },
      { if: 'world.writ >= 4', then: ['gold -40'] },
    ],
    next: 'f_07',
  },

  f_07: {
    id: 'f_07',
    title: '山下的坟场',
    art: 'ev_undead_army',
    loc: '科乌里亚 · 渡鸦山下的坟场', date: '1053年真霜月',
    text: [
      '渡鸦山。木栅栏围着的城在坡上，坟场在坡下。十三年前头一个人就是从这儿起来的，那座坟至今敞着，没人敢填。',
      '阿德蕾西娅家的坟在第三排。她路过的时候没停，嘴里的数目断了一下，又接上了。',
      '栅门里头站满了。穿寿衣的，穿甲的，还有几个身上是十字军的罩袍。钟楼上那口钟还在。',
      { if: 'flag.quarantine_open', text: '前排有几张脸你认得。1040 年你开城门放出去的人里，有几个到底走回来了。' },
      { if: 'var.muster >= 2', text: '会师来的人在你身后排开，{?var.muster >= 4:两队，一队下了马的骑士，一队张弓的|一队骑士，都下了马}。' },
      { if: 'party.vezina && flag.vezina_eye', speaker: '薇齐娜', text: '第三排第七个先动。接着是钟楼底下那个穿祭司袍子的。' },
      { if: 'party.barry', speaker: '巴里', text: '打完了得有人回来填土，一座一座填。这话我先撂在这儿，到时候你们别嫌我烦。' },
      { if: 'is.god', text: '它们不看你。书上拴着的东西，眼里没有神。' },
    ],
    first: ['codex ravenhill'],
    choices: [
      { text: '在栅门外把安魂词念完再进去', tag: '神职', if: 'is.divine', once: true, effects: ['flag fx_prayed'],
        result: '你念的是给死人听的那一段。栅门里头前排那几个往后挪了半步，又站住了。钟楼上的绳子自己晃了晃。' },
      { text: '叫会师的人先上，你带人守钟楼', if: 'var.muster >= 2', goto: 'f_08', effects: ['var muster -1', 'xp 300'],
        result: '他们上去了。打到后半夜，回来的比去的少一队。阿德蕾西娅把数目报给你，报得很平。' },
      { text: '推开栅门', if: 'var.muster < 2 && !flag.winters_squire', combat: { ...GRAVE, allies: [ALD_NORM] } },
      { text: '推开栅门', if: 'var.muster < 2 && flag.winters_squire', combat: { ...GRAVE, allies: [ALD_STRONG] } },
      { text: '推开栅门', if: 'var.muster >= 2 && var.muster < 4 && !flag.winters_squire', combat: { ...GRAVE, allies: [ALD_NORM, TEAM1] } },
      { text: '推开栅门', if: 'var.muster >= 2 && var.muster < 4 && flag.winters_squire', combat: { ...GRAVE, allies: [ALD_STRONG, TEAM1] } },
      { text: '推开栅门', if: 'var.muster >= 4 && !flag.winters_squire', combat: { ...GRAVE, allies: [ALD_NORM, TEAM1, TEAM2] } },
      { text: '推开栅门', if: 'var.muster >= 4 && flag.winters_squire', combat: { ...GRAVE, allies: [ALD_STRONG, TEAM1, TEAM2] } },
    ],
  },

  f_07b: {
    id: 'f_07b',
    title: '钟楼',
    text: [
      '你们退上了钟楼，把楼梯拆了三级。底下抓了一夜的墙。',
      '天亮以后它们散回坟里去了。阿德蕾西娅在楼顶上数下面躺着的人，数完说，少了一队。',
    ],
    next: 'f_08',
  },

  f_08: {
    id: 'f_08',
    title: '门',
    art: 'ev_adeanic_war',
    loc: '渡鸦山 · 山上的宅子',
    text: [
      '渡鸦山的人管山顶那座堡叫“山上的宅子”。墙是黑的，早年渡鸦王在里头住过。大门开着一扇。',
      '门洞里立着一匹马。马上的人面甲拉着，枪竖在镫边，两个穿锈甲的扈从一左一右。这副坐姿你们在洛伦泰内的比武场上见过。',
      '埃德蒙·净手，凯伦的至交。他死了以后，人们管他叫苍手。',
      { if: 'flag.palehand_saluted', text: '他认出了你。枪尖抬了一寸，又放回去，等着。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，这位我得行个礼再打。家父要是知道我没行，会从莫尔班平原爬回来。' },
      { if: 'party.liv && party.valeran', speaker: '卡斯坦', text: '你行你的。凯伦算不算叛徒，咱俩吵了三十年。今天正好，叫他的朋友评评。' },
      { if: 'party.liv && !party.valeran', speaker: '卡斯坦', text: '凯伦的朋友，我爹的兵。死了还坐得这么直，比活着的强。' },
    ],
    first: ['quest crusade stage 2', 'codex edmund', 'codex death_knight'],
    choices: [
      { text: '行骑士团的旧礼，一个人走上去', tag: '蓝宝石之眼', if: "faction == 'sapphire' || flag.palehand_saluted",
        combat: GATE_DUEL },
      { text: '学着行那个礼，请他一对一', if: "!(faction == 'sapphire' || flag.palehand_saluted)",
        check: { skill: 'history', dc: 16, party: true, mods: [{ if: 'party.valeran', n: 3, why: '瓦勒兰在后头小声提词' }] },
        ok: { text: '右拳抵左肩，剑柄朝前。你做对了。他在马上还了半个礼。',
          combat: GATE_DUEL },
        fail: { effects: ['hp -6'], text: '你的手举错了一边。他看了看，没还礼，枪尖直接过来了。两个扈从跟着动了。',
          combat: GATE_FULL } },
      { text: '不讲礼数，一起上',
        combat: GATE_FULL },
    ],
  },

  f_08b: {
    id: 'f_08b',
    title: '门洞',
    text: [
      { if: '!flag.fx_ald_hurt', text: '他是从马上慢慢歪下来的。落地的时候面甲磕开了。{?party.valeran:瓦勒兰蹲下去替他合上，合之前看了很久。|阿德蕾西娅替他合上的，没往里看。}' },
      { if: '!flag.fx_ald_hurt', speaker: '埃德蒙', text: '凯伦说赢了要留人。我照办了三十年。门是你们的了。' },
      { if: 'flag.fx_ald_hurt', text: '枪是冲你喉咙来的。阿德蕾西娅拿肩膀替你接了，甲片碎了两块。他看了看枪尖上的血，把枪竖了回去。' },
      { if: 'flag.fx_ald_hurt', speaker: '埃德蒙', text: '凯伦说赢了要留人。我照办了三十年。留下来的人往哪走，我不管。' },
      { if: 'flag.fx_ald_hurt', text: '他把马拨开，让出了半个门洞。' },
      { if: 'flag.fx_ald_hurt', speaker: '阿德蕾西娅', text: '左肩。还举得起剑，举不了多久。大人往后数人，我这一份只能算半个。' },
    ],
    choices: [
      { text: '在门洞里歇一刻钟，裹伤', once: true, effects: ['rest short'], result: '门洞里背风。有人生了一小堆火，烧的是苍手那两个扈从的枪杆。' },
      { text: '把他的枪横放在他胸口', if: '!flag.fx_ald_hurt', once: true, effects: ['rep escann +1', { if: 'party.valeran', then: ['approval valeran +1'] }],
        result: '枪比看上去轻。枪杆上刻着一行小字，是凯伦的名字，刻的人手不稳。' },
      { text: '进门', goto: 'f_09' },
    ],
  },

  // __MORE__
};
