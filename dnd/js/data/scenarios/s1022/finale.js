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
// f_12   那本书（天亮）：书烧不掉（fx_burn_tried）；book_locked / [旧礼] 念名分再封 / book_wise（writ +2）/ [贤者门下] 借条（writ +1）；
//        book_kept 的揣书下山。卢西安做护国公（正史）。[神] 十字军来问椅子。→ f_12b
// f_12b  骑士团（山下坟场）：对坟场的账（investigation DC 16）；order_founder / [蓝宝石之眼] 凯伦的规矩 / 交给瓦勒兰 / 让阿德蕾西娅领头 / 不管。→ f_12c
// f_12c  交印（去安本科斯特的路上）：同伴最后几句；[神] 哪张椅子都不坐 → end_unseated；其余照 §11.6 去向表六个互斥选项，最后一项兜底。
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

// 笼子、里门、大厅里的几场
const SOUL = {
  title: '翻了一页',
  intro: '墙里出来一团灰白的东西，脸拉得很长，嘴一直张着。',
  enemies: [{ id: 'bellowing_soul', name: '号魂' }], noAwe: true,
  specials: [
    { id: 'cage', name: '推倒一摞空笼子压住它', desc: '铁的，一人高，码到了梁上',
      check: { skill: 'athletics', dc: 16 },
      success: { text: '笼子是一只带一只倒的。铁栏穿过那团东西的时候，它叫的声音变了调。', dmgAll: '4d8', type: 'bludgeoning' },
      fail: { text: '最底下那只笼子里还有人。你收了手，它没收。', selfDmg: '1d8', type: 'necrotic' } },
  ],
  win: { effects: ['xp 500'], goto: 'f_09' },
  lose: { goto: 'f_09' },
};
const SP_BACK = {
  id: 'back', name: '绕到他背后那道旧口子', desc: '994 年那一刀是从后面进去的',
  check: { skill: 'acrobatics', dc: 16 },
  success: { text: '你的剑尖找到了甲上那道口子。六十年前有人从这儿进去过，路是现成的。', dmgAll: '5d8', type: 'piercing' },
  fail: { text: '想从他身边绕的人，他先出手。这一条他活着的时候就会。', selfDmg: '2d8', type: 'slashing' },
};
const SP_YEARS = {
  id: 'years', name: '把今年是哪一年报给他听', desc: '他还以为是 994 年',
  check: { skill: 'history', alt: ['persuasion'], dc: 17 },
  success: { text: '你报了年份，又报了他孙子的岁数。他停了一停，剑尖垂下去半尺。', applyAll: { cond: 'stunned', turns: 1 } },
  fail: { text: '他用六十年前的宫廷话回了你两个字：退下。' },
};
const ARREL = {
  title: '遭叛者',
  intro: '他转过身来。冠戴得很正，有人六十年里一直替他扶着。脸已经灰到了眼眶。',
  enemies: [{ id: 'arrel_revenant' }], noAwe: true,
  specials: [SP_BACK, SP_YEARS],
  win: { effects: ['xp 800'], goto: 'f_10' },
  lose: { goto: 'f_09b' },
};
const ARREL_MARION = {
  title: '遭叛者',
  intro: '马里昂叫了一声祖父。门口那位停了一停，剑尖垂下去半尺。你们趁这一停先动了手。',
  enemies: [{ id: 'arrel_revenant', hpMult: 0.75 }], allies: [{ id: 'knight', name: '马里昂一世', hpMult: 1.5 }], noAwe: true,
  specials: [SP_BACK, SP_YEARS],
  win: { effects: ['xp 800'], goto: 'f_10' },
  lose: { goto: 'f_09b' },
};
const SP_TOKEN = {
  id: 'order', name: '把他最后那道令喊回给他', desc: '沼泽堡那天他喊的是：放下兵器',
  check: { skill: 'intimidation', alt: ['performance'], dc: 17, adv: 'item.legion_token >= 1' },
  success: { text: '“放下兵器！”他的手松了一下。三十七年里他自己做主下过的令，只有这一道。', applyAll: { cond: 'stunned', turns: 1 } },
  fail: { text: '他抬起一只手。你们的手先于脑子松开了一下。', selfDmg: '2d6', type: 'psychic' },
};
const LIII = {
  title: '左手边那位',
  intro: '五十三世站直了。乌钢剑是从椅背后头抽出来的，抽得很慢。',
  enemies: [{ id: 'castan_liii_revenant' }], noAwe: true,
  specials: [SP_TOKEN],
  win: { effects: ['flag fx_liii_done', 'xp 800'], goto: 'f_11' },
  lose: { effects: ['flag fx_liii_done', 'flag fx_ald_hurt'], goto: 'f_11' },
};
const LIII_SPOON = {
  title: '左手边那位',
  intro: '五十三世站直了。他的眼睛还留在桌上那把木勺上，剑抽到一半才想起来往下抽。',
  enemies: [{ id: 'castan_liii_revenant', hpMult: 0.7 }], noAwe: true,
  specials: [SP_TOKEN],
  win: { effects: ['flag fx_liii_done', 'xp 800'], goto: 'f_11' },
  lose: { effects: ['flag fx_liii_done', 'flag fx_ald_hurt'], goto: 'f_11' },
};
const EMP_KILL = {
  title: '被牵的皇帝',
  intro: '皇帝转过身来，剑举得很平。他的嘴在动：别留手。',
  enemies: [EMPEROR], allies: [ALD_NORM], noAwe: true,
  specials: [
    { id: 'name', name: '喊他的本名', desc: '眼睛后面还有人',
      check: { skill: 'persuasion', alt: ['intimidation'], dc: 17 },
      success: { text: '你喊的是名字，没带帝号。他挣出了一口气，剑停在半空，停了一整轮。', applyAll: { cond: 'stunned', turns: 1 } },
      fail: { text: '他听见了。脚没听见。' } },
  ],
  win: { effects: ['unflag castan_alive', { if: 'flag.castan_liv', then: ['flag liv_dead'] }, 'xp 900'], goto: 'f_11' },
  lose: { effects: ['flag fx_emp_foe'], goto: 'f_11' },
};
// 主战的友军：行 = muster 给的人（0／一队／两队），列 = 阿德蕾西娅（带伤／照常／你带出来的）
const AL00 = [ALD_HALF];
const AL01 = [ALD_NORM];
const AL02 = [ALD_STRONG];
const AL10 = [ALD_HALF, TEAM1];
const AL11 = [ALD_NORM, TEAM1];
const AL12 = [ALD_STRONG, TEAM1];
const AL20 = [ALD_HALF, TEAM1, TEAM2, TEAM3];
const AL21 = [ALD_NORM, TEAM1, TEAM2, TEAM3];
const AL22 = [ALD_STRONG, TEAM1, TEAM2, TEAM3];

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
    art: 'ev_castellos_is_dead',
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
    art: 'ev_feyforest',
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
      { if: 'party.liv && is.immortal', text: '她说这话的时候看的是桌上的酒壶。1040 年以前她同你讲价，眼睛是钉在你脸上的。' },
      { if: 'flag.winters_home', text: '你是最后一个到的，从本国赶来，路上换了三回路条。阿德蕾西娅翻名册找你，找了一阵，把你记在了“外来”那一栏。' },
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
    art: 'ck3_damesteeth',
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
      '达拉万之愚。快四百年前，科尔巴里德人的国王达拉万为了淹死一群豺狼人，在这儿放了一场大水，连自己的兵一块淹了。水到今天没退。路是插柳条标出来的，柳条外头的泥没有底。',
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
          '{?flag.god_crusade:你叫他们把柱子上的神号凿掉。他们凿了，凿得很仔细，凿下来的石粉拿布包好，揣进了怀里。|他们跪下的时候问你神号怎么写，好往柱子上刻。柱子上那位是自己下来的，走出很远才敢回头。}',
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

  f_09: {
    id: 'f_09',
    title: '笼子',
    loc: '山上的宅子 · 前厅',
    text: [
      '前厅有四十步深。笼子从地面码到梁上，铁的，一人高，每只挂一块木牌，牌上是数目。',
      '有的笼子里的人已经白了，贴着栏杆站着，不出声。有的还在说话，说的是哪个村，家里还剩谁。稻草有些日子没换了。',
      '里门口站着一个戴冠的人，背朝着你们。他后背的甲上有一道旧口子，是从后面捅进去的。达梅里亚的“遭叛者”阿雷尔二世，994 年死的。',
      { if: 'flag.vezina_left && !flag.vezina_eye && !flag.vezina_freed && world.unburied <= 6', text: '左数第三排有一只笼子里坐着薇齐娜。她瘦了很多，手指在栏杆上一格一格地点，在数笼子。' },
      { if: 'flag.vezina_left && !flag.vezina_eye && world.unburied >= 7', text: '左数第三排有一只笼子空着。木牌上的数目旁边多写了一个名字：薇齐娜·马尔尼德。字很工整，是她自己的笔迹。' },
      { if: 'is.elf', text: '笼子里的人看见你的耳朵，有几个往后缩，有几个把手伸了出来。' },
      { if: 'party.barry', text: '巴里把篮子里剩的饼掰开，从栏杆缝里一块一块递进去。这回他没说话。' },
      { if: "origin == 'dameria'", text: '马里昂跟到了这儿。他看着里门口那个背影，头盔摘了，夹在胳膊底下。' },
      { if: 'flag.fx_cages', text: '开过的那一排空着，笼门朝外敞着。' },
    ],
    first: ['codex ravenhill_2'],
    choices: [
      { text: '分清哪些笼子里的人还救得了，开锁', once: true,
        check: { skill: 'medicine', dc: 16, party: true, adv: 'flag.fx_vezina_tip || is.elf' },
        ok: { effects: ['flag fx_cages', 'xp 300'], combat: SOUL,
          text: '木牌背面有针眼大的记号，白了的画圈，没白的画点。你照着点开了一排。出来四十一个，能自己走的二十六个。里门后面有人翻了一页书。' },
        fail: { effects: ['flag fx_cages', 'hp -8'], combat: SOUL,
          text: '你开到第五只，里头那个已经白了。他扑出来的时候阿德蕾西娅离着三步。你胳膊上多了一排牙印。里门后面有人翻了一页书。' } },
      { text: '看木牌上的数目是照什么排的', tag: '施法者', if: 'is.caster', once: true,
        check: { skill: 'arcana', dc: 16 },
        ok: { effects: ['flag fx_tags_read'], text: '数目是页码。每只笼子对着那本书里的一页。人还没死，页已经留好了，页眉上写着名字。' },
        fail: { effects: ['hp -5'], text: '你把手按在木牌上，想摸出法术的走向。牌是冰的，你半条胳膊麻到了天黑。' } },
      { text: '开薇齐娜那只笼子', if: 'flag.vezina_left && !flag.vezina_eye && !flag.vezina_freed && world.unburied <= 6', once: true,
        effects: ['flag vezina_freed', 'approval vezina +2'],
        result: [
          { speaker: '薇齐娜', text: '九百九十六只。有四只是空的，其中一只昨天还不空。你那年写给各国的那封信，我在里头背了很多遍，一遍也没背错。' },
          '她出来以后先抬头数房梁上的乌鸦。一只也没有。她把你那页账要了过去，说往下她来翻。',
        ] },
      { text: '替他把六十年没办的葬礼办了', tag: '旧礼', if: "faction == 'rites'", goto: 'f_10', effects: ['world unburied -1', 'xp 800'],
        result: [
          '没有棺材，没有束腰，只有一小截奈拉特烛和他的全名。你把 994 年到今年的年数报给他听，一年一年地报。',
          '报到第五十九年，他把剑放在地上，自己躺下了，两只手交叠在胸口。冠没摘。{?origin == \'dameria\':马里昂替他把冠扶正了。|}',
        ] },
      { text: '让马里昂先开口', tag: '达梅里亚', if: "origin == 'dameria'", combat: ARREL_MARION },
      { text: '从他身边过去，过不去就打', combat: ARREL },
    ],
  },

  f_09b: {
    id: 'f_09b',
    title: '空笼子',
    text: [
      '你是在一只空笼子里醒的，木牌上的数目还没写。他把你们扔进来，就回门口站着去了。',
      '阿德蕾西娅在外头开锁，用的是她的发簪。里门是趁他转身的时候推开的。他听见了，没回头。',
    ],
    next: 'f_10',
  },

  f_10: {
    id: 'f_10',
    title: '死去的国王们',
    art: 'ev_apostle',
    loc: '山上的宅子 · 大厅',
    text: [
      '大厅里摆着一张长桌。两边的高背椅上坐满了人，都戴着冠，都不喘气。上首那位在写字，写完一行才抬头。屋里有没药味。',
      { speaker: '坎雷克', text: '请坐，椅子不够。我写到 1053 年真霜月了，再有两页就到你们进门。劳驾等等，后脑勺痒，这得怪维纳克。' },
      '他右手边的椅子空着，坐它的人在门口站岗。左手边{?flag.body_quiet || flag.body_left:坐着五十三世，冠是歪的，没人替他扶|那把也空着}。',
      { if: '!flag.body_quiet && !flag.body_left', speaker: '坎雷克', text: '左边这把是留给先帝的。有人抢在我前头把他安顿了，安顿得还挺体面。我为这事三十年没睡好，虽然我本来也不睡。' },
      { if: "origin == 'ebonmarck' && (flag.body_quiet || flag.body_left)", text: '五十三世的头朝你胸口的军团牌转了过来。{?flag.p_laid_arms:他把搁在膝头的剑拿起来，放到了桌上，剑柄朝外。|}{?flag.p_fought_on:他朝你点了一下头，手没离开剑柄。|}' },
      { if: 'party.liv && flag.liv_saw_body && (flag.body_quiet || flag.body_left)', speaker: '卡斯坦', text: '爹。' },
      { if: 'party.liv && flag.liv_saw_body && (flag.body_quiet || flag.body_left)', text: '她就叫了这一声。椅子上那位的脸朝着桌面。' },
      { if: 'is.god', text: '他不怕你。他从书里抽出一张单子，把你这些年显过的本事一件一件念了，{?var.god_acts >= 4:念了半支蜡烛的工夫，|单子不长，}口气是在念荐书。念完他从桌子那头推过来一把椅子。' },
      { if: 'is.god', speaker: '坎雷克', text: '誓词写的是“至我寿终之日”。我找了三十年没有寿终的人。您请坐。' },
    ],
    first: ['codex canrec', 'codex book_of_canrec', 'codex canrec_2', 'codex bridle_3'],
    choices: [
      { text: '问他那根缰绳到底是什么', once: true, effects: ['xp 150'],
        result: [
          { speaker: '坎雷克', text: '契约。誓词是条款，“至我寿终之日”是期限。我师父没碰过皇帝的脑子，他只是把契约上听誓的那一方换成了自己。' },
          { speaker: '坎雷克', text: '亚科布同你讲的是手艺，林子里那个老兵同你讲的是罪。他们都没读过正文。{?flag.knows_why_watched:渡鸦山那帮看鸟的读过，他们选了坐着。|}' },
        ] },
      { text: '问他要这么多死人干什么', once: true, effects: ['xp 150'],
        result: [
          { speaker: '坎雷克', text: '活人会变卦：一袋金子，一记闷棍，一个字，就换了主子。死人不改口。' },
          { speaker: '坎雷克', text: '这本是花名册。在册的都在位，没有逃的，没有欠饷的。至于当年往我这儿送尸首的那道令，是我师父下的。这不能怪收货的。' },
          { if: 'flag.knows_canrec_plan', speaker: '坎雷克', text: '修山那一段你们读过我的信了，我不重讲。一位死了也还在位的皇帝，这主意有什么不好？' },
        ] },
      { text: '把守砖人的勺子放到五十三世面前', if: 'item.stew_spoon >= 1 && (flag.body_quiet || flag.body_left)', once: true, effects: ['flag fx_spoon'],
        result: '他看了一眼。看了很久的一眼。坎雷克翻书的手停了，头一回露出没算到的样子。' },
      { text: '在他推过来的椅子上坐下，听他讲完', tag: '神', if: 'is.god', once: true,
        effects: ['var god_acts +1', 'flag knows_word',
          { if: 'party.liv', then: ['approval liv -1'] }, { if: 'party.valeran', then: ['approval valeran -1'] },
          { if: 'party.barry', then: ['approval barry -1'] }, { if: 'party.vezina', then: ['approval vezina -1'] }],
        result: [
          '椅子是硬的。他很高兴，把那个字当见面礼念给你听了。烛火往同一边倒，前厅的笼子一齐响了一声。',
          { speaker: '阿德蕾西娅', text: '您坐下去的时候我数了一遍。屋里站着的活人少了一个。' },
          { if: 'party.liv', speaker: '卡斯坦', text: '神排在皇帝后头。这把是给皇帝坐的，你坐错了，起来。' },
        ] },
      { text: '让他把话说完', goto: 'f_10b' },
    ],
  },

  f_10b: {
    id: 'f_10b',
    title: '那个字',
    text: [
      { if: 'flag.castan_crowned && flag.castan_alive && !flag.castan_pc', text: '坎雷克把笔搁下，朝你们身后看过去。站在那儿的是山上那位皇帝。{?flag.castan_garrec:加雷克，五十五岁，手里是他父亲那一路的剑。|}{?flag.castan_lucan:卢坎，三十四岁，耳朵尖冻得发红。|}{?flag.castan_liv:卡斯坦，六十一岁，嘴里还在嚼东西。|}' },
      { if: 'flag.castan_crowned && flag.castan_alive', text: '他说了一个字。' },
      { if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc', text: '烛火往同一边倒。前厅的笼子一齐响了一声，是里头的人同时抓住了栏杆。皇帝的左脚往前迈了一步，右脚跟上了。眼睛还是自己的。' },
      { if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_liv', speaker: '卡斯坦', text: '我的脚。掌玺大臣，朕的脚不听朕的。' },
      { if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_pc', text: '烛火往同一边倒。前厅的笼子一齐响了一声。你的左脚往前迈了一步。你没叫它迈。' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.knot_cut', text: '烛火晃了晃，又立直了。前厅没有动静。{?flag.castan_pc:你的脚还在原地。|皇帝低头看了看自己的脚，又抬头看了看他。}' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.knot_cut', speaker: '坎雷克', text: '解了？谁解的？' },
      { if: 'flag.castan_crowned && flag.castan_alive && flag.knot_cut', text: '他把那个字又念了一遍，念得很慢，像在核一笔对不上的账。' },
      { if: '!(flag.castan_crowned && flag.castan_alive)', text: '坎雷克把笔搁下，朝你们身后看了看，又看了一遍。' },
      { if: '!(flag.castan_crowned && flag.castan_alive)', speaker: '坎雷克', text: '{?flag.mountain_sealed:山封了。|三十三年，山上一个能用的人也没有。}我备了一个字，等了半辈子，如今没处念。那就照老办法点名。' },
      { if: '!(flag.castan_crowned && flag.castan_alive)', text: '他把书翻到中间，手指按在一个名字上。' },
      { if: 'party.vezina', text: '薇齐娜把本子合上了。上一回她这么干，是在试炼山的绳子底下。' },
    ],
    enter: ['unflag fx_emp_foe', 'unflag fx_emp_ally', 'unflag fx_pc_dragged'],
    choices: [
      { text: '把你知道的那半个字接上去', if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc && flag.knows_word', goto: 'f_11',
        effects: ['flag bridle_pc', { if: 'party.vezina', then: ['approval vezina -1'] }],
        result: '你只会前半个。后半个他刚替你念了。两半合上的时候，皇帝的脚停了，回头看你。他看你的样子，同刚才看坎雷克没有两样。' },
      { text: '朝伊迪丝点头', if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc && world.writ >= 7', goto: 'f_11',
        effects: ['flag bridle_wise', { if: 'party.vezina', then: ['approval vezina -1'] }, { if: 'party.valeran', then: ['approval valeran -1'] }],
        result: [
          '伊迪丝摘了一只手套。她说的话很短。皇帝的脚停了，转过身，朝她站着。',
          { speaker: '伊迪丝', text: '接住了。我不松手，他就不走。这话你听着耳熟吧。' },
        ] },
      { text: '现在就动手，趁他还没走到桌边', if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc', combat: EMP_KILL },
      { text: '不动他，先对付桌子那头的', if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc', goto: 'f_11',
        effects: ['flag fx_emp_foe'],
        result: '皇帝走到了坎雷克的椅子后面，转过身，拔了剑。他的嘴在动，没出声。看口型是两个字：快点。' },
      { text: '咬住你知道的那半个字，把脚钉在地上', if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_pc && flag.knows_word', goto: 'f_11',
        effects: ['flag bridle_pc'],
        result: '两半个字在你嘴里合上了。脚停了。牵你的那根绳，另一头现在攥在你自己手里。' },
      { text: '想站住', if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_pc && !flag.knows_word', goto: 'f_11',
        effects: ['flag fx_pc_dragged'],
        result: [
          '你没站住。走到第四步，后脑勺上挨了一下重的，是剑柄。',
          { speaker: '阿德蕾西娅', text: '沼泽堡的土办法。大人，您醒过来的这口气不长，省着用。' },
        ] },
      { text: '告诉他是谁解的', if: 'flag.castan_crowned && flag.castan_alive && flag.knot_cut', goto: 'f_11',
        effects: [{ if: '!flag.castan_pc', then: ['flag fx_emp_ally'] }, 'xp 150'],
        result: [
          '{?flag.god_half_sentence:你说是你自己，顺手扯下来的。|}{?!flag.god_half_sentence && flag.knot_alarian:你说是塞纳蒂尔的阿拉里安，用的是一把竖琴。|}{?!flag.god_half_sentence && flag.knot_ravens:你说是渡鸦山那帮看鸟的。|}{?!flag.god_half_sentence && flag.knot_iacob:你说是亚科布，戴罪干的活。|}最后一股是一位半身人国王从兜里掏出来的。',
          { speaker: '坎雷克', text: '三十三年。我等活人修山等了三十三年，他们修的时候顺手把我的字拆了。劳驾，这回是真痒。' },
        ] },
      { text: '不答，拔剑', if: 'flag.castan_crowned && flag.castan_alive && flag.knot_cut', goto: 'f_11',
        effects: [{ if: '!flag.castan_pc', then: ['flag fx_emp_ally'] }, { if: 'party.liv', then: ['approval liv +1'] }],
        result: '{?flag.castan_pc:你拔了剑。坎雷克把那个字念了第三遍，声音小了。|皇帝先拔的剑，站到了你左手边。坎雷克把那个字念了第三遍，声音小了。}' },
      { text: '问他手指按着的是谁的名字', if: '!(flag.castan_crowned && flag.castan_alive)', goto: 'f_11', effects: ['xp 150'],
        result: [
          { speaker: '坎雷克', text: '屠夫原，四百零六座坟里的第三百九十一位。你们的账页上有他，我的册上也有。两本账对得上，这是我最得意的地方。' },
        ] },
      { text: '拔剑', if: '!(flag.castan_crowned && flag.castan_alive)', goto: 'f_11',
        effects: [{ if: 'party.liv', then: ['approval liv +1'] }],
        result: '他叹了口气，说他这辈子每回讲到要紧处，都有人拔剑。' },
    ],
  },

  f_11: {
    id: 'f_11',
    title: '谁付账',
    art: 'ev_priest_phantom',
    text: [
      '坎雷克站起来了。他比坐着的时候矮，袍子下摆拖着地。那本书摊在桌上，页边自己在动。',
      { speaker: '坎雷克', text: '名册上还有空行，诸位可以自己挑。字我来写，我的字比你们的好。' },
      { if: 'flag.fx_emp_foe', text: '皇帝站在他椅子后面，{?flag.castan_liv:爪尖冲着地|剑已经出了鞘}。他一直看着你。' },
      { if: 'flag.fx_emp_ally', text: '皇帝站在你左手边，把有誓烙的那只手按在{?flag.castan_liv:腰间的酒壶上|剑柄上}，说这一阵算山上欠山下的。' },
      { if: 'flag.bridle_pc && flag.castan_crowned && flag.castan_alive && !flag.castan_pc', text: '皇帝站在你身后三步，一动不动。你不开口，他就不动。' },
      { if: 'flag.bridle_wise && flag.castan_crowned && flag.castan_alive', text: '皇帝站在伊迪丝身后三步，一动不动。' },
      { if: 'flag.fx_liii_up', text: '左手边的椅子响了一声。五十三世在起身，起得很慢，一只手先撑住了桌沿。阿德蕾西娅已经同书里出来的东西接上了，腾不出手。' },
      { if: 'flag.fx_liii_done', text: '五十三世倒在他那把椅子旁边，冠滚到了桌子底下。' },
      { if: 'flag.vezina_freed', text: '薇齐娜站在门边，手里是你那页账，眼睛在书和账页之间来回走。' },
      { if: 'var.muster >= 2', text: '会师的人堵住了大厅的两扇门。' },
    ],
    enter: [
      'var fx_ald =1',
      { if: 'flag.winters_squire', then: ['var fx_ald +1'] },
      { if: 'flag.fx_ald_hurt', then: ['var fx_ald -1'] },
      { if: "(flag.body_quiet || flag.body_left) && !(origin == 'ebonmarck' && flag.p_laid_arms) && !flag.fx_liii_done", then: ['flag fx_liii_up'], else: ['unflag fx_liii_up'] },
      'var fx_cfg =0',
      { if: 'flag.fx_emp_foe', then: ['var fx_cfg +9'] },
      { if: 'flag.fx_emp_ally && !flag.fx_emp_foe', then: ['var fx_cfg +18'] },
      { if: 'var.muster >= 2 && var.muster < 4', then: ['var fx_cfg +3'] },
      { if: 'var.muster >= 4', then: ['var fx_cfg +6'] },
      { if: 'var.fx_ald == 1', then: ['var fx_cfg +1'] },
      { if: 'var.fx_ald >= 2', then: ['var fx_cfg +2'] },
    ],
    choices: [
      { text: '举起军团牌，替他把那道令再下一遍', tag: '乌霜边区', if: "flag.fx_liii_up && origin == 'ebonmarck'",
        check: { skill: 'persuasion', alt: ['religion'], dc: 16, mods: [{ if: 'flag.fx_spoon', n: 2, why: '守砖人的勺子还在桌上' }] },
        ok: { goto: 'f_11', effects: ['flag fx_liii_done', 'xp 800'],
          text: '“放下兵器。”你用的是军团的喊法。他站了一会儿，把乌钢剑平放在桌上，坐了回去。这回他坐得比刚才直。' },
        fail: { text: '他听见了，头朝你偏了偏。坎雷克在那头咳了一声，他的手又握紧了。', combat: LIII } },
      { text: '先挡住五十三世', if: 'flag.fx_liii_up && flag.fx_spoon', combat: LIII_SPOON },
      { text: '先挡住五十三世', if: 'flag.fx_liii_up && !flag.fx_spoon', combat: LIII },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 0', combat: { ...HALL, enemies: FOE, allies: AL00 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 1', combat: { ...HALL, enemies: FOE, allies: AL01 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 2', combat: { ...HALL, enemies: FOE, allies: AL02 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 3', combat: { ...HALL, enemies: FOE, allies: AL10 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 4', combat: { ...HALL, enemies: FOE, allies: AL11 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 5', combat: { ...HALL, enemies: FOE, allies: AL12 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 6', combat: { ...HALL, enemies: FOE, allies: AL20 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 7', combat: { ...HALL, enemies: FOE, allies: AL21 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 8', combat: { ...HALL, enemies: FOE, allies: AL22 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 9', combat: { ...HALL, enemies: FOE_EMP, allies: AL00 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 10', combat: { ...HALL, enemies: FOE_EMP, allies: AL01 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 11', combat: { ...HALL, enemies: FOE_EMP, allies: AL02 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 12', combat: { ...HALL, enemies: FOE_EMP, allies: AL10 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 13', combat: { ...HALL, enemies: FOE_EMP, allies: AL11 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 14', combat: { ...HALL, enemies: FOE_EMP, allies: AL12 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 15', combat: { ...HALL, enemies: FOE_EMP, allies: AL20 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 16', combat: { ...HALL, enemies: FOE_EMP, allies: AL21 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 17', combat: { ...HALL, enemies: FOE_EMP, allies: AL22 } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 18', combat: { ...HALL, enemies: FOE, allies: [...AL00, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 19', combat: { ...HALL, enemies: FOE, allies: [...AL01, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 20', combat: { ...HALL, enemies: FOE, allies: [...AL02, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 21', combat: { ...HALL, enemies: FOE, allies: [...AL10, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 22', combat: { ...HALL, enemies: FOE, allies: [...AL11, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 23', combat: { ...HALL, enemies: FOE, allies: [...AL12, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 24', combat: { ...HALL, enemies: FOE, allies: [...AL20, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 25', combat: { ...HALL, enemies: FOE, allies: [...AL21, EMPEROR] } },
      { text: '动手', if: '!flag.fx_liii_up && var.fx_cfg == 26', combat: { ...HALL, enemies: FOE, allies: [...AL22, EMPEROR] } },
    ],
  },

  f_11c: {
    id: 'f_11c',
    title: '谁付账',
    text: [
      { if: '!flag.fx_lost', text: '坎雷克倒在桌腿边上，袍子瘪下去一半，嘴还在动。号魂缩回了书里。书页鼓着，一下一下地往外顶。' },
      { if: 'flag.fx_lost', text: '你们是被阿德蕾西娅一个人顶到爬起来的。坎雷克倒在桌腿边上。她靠着桌子站着，左边的甲全开了，血顺着剑往下走。' },
      { speaker: '坎雷克', text: '倒下不算完。书还在，我那一页还在。谁撕我那一页，书里这些位松绑的时候，头一个撕的就是谁。这一条我写在序里了。' },
      { if: 'flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise && !flag.castan_pc', text: '他歪过头，把那个字又念了一遍。这回念得很清楚，是教人的念法。烛火倒向你们这一边。' },
      { if: 'flag.winters_squire', speaker: '阿德蕾西娅', text: '您教过我，盖印之前先数人。我数过了，够一个人去。' },
      { if: '!flag.winters_squire', speaker: '阿德蕾西娅', text: '大人，十三年前坟边上是我数的，今天也该我数。我数过了，够一个人去。' },
      { if: 'is.immortal', speaker: '阿德蕾西娅', text: '您别往前站。您去不算数，您又不会死。书撕不动您，这笔账就一直挂着。' },
      { if: 'flag.fx_pc_dragged', text: '你的脚又在往桌子那边挪。后脑勺上那一下顶不了多久。这口气够你走到书跟前，不够你走回来。' },
      { if: 'flag.fx_lost && !flag.fx_pc_dragged', text: '她已经把手按在书上了。屋里别的人都还没站稳。' },
    ],
    first: [
      { if: 'item.book_of_canrec < 1', then: ['item +book_of_canrec'] },
      'quest crusade done', 'quest sixteen_graves done', 'quest canrec_trail done',
    ],
    choices: [
      { text: '让阿德蕾西娅去', if: '!flag.fx_pc_dragged', goto: 'f_12',
        effects: ['flag price_aldresia', 'item +silversong', CLOSE],
        result: [
          '她把银歌解下来放在你手里，说剑用不着陪着去。然后她把那一页撕了。',
          '声音不大，是纸的声音。书里出来的东西只找了她一个人。你数到七，屋里静了。',
        ] },
      { text: '你自己去', if: '!flag.fx_pc_dragged && !flag.fx_lost', goto: 'f_12',
        effects: ['flag price_pc', { if: 'is.mortal', then: ['flag fx_pc_dead', { if: 'flag.castan_pc', then: ['unflag castan_alive'] }] }, CLOSE],
        result: [
          { if: 'is.mortal', text: '你把印摘下来，塞给阿德蕾西娅。她没接稳，掉了一回。{?party.liv:卡斯坦骂了一句很长的。|}那一页比看上去厚，你撕了两下。' },
          { if: 'is.mortal', text: '往下的事，是别人看见的。' },
          { if: 'is.immortal', text: '那一页你撕了。书里的东西全扑在你身上，撕了很久，撕不动。它们停手的时候，你左手从腕子到肘弯多了一道白印。' },
          { if: 'is.immortal', speaker: '阿德蕾西娅', text: '我说过不算数。您看，它们没走，它们拿您当自己人了。' },
        ] },
      { text: '让瓦勒兰去：他已经站出来了', if: '!flag.fx_pc_dragged && !flag.fx_lost && party.valeran && approval.valeran >= 6', goto: 'f_12',
        effects: ['flag price_companion', 'flag price_valeran', 'companion -valeran', CLOSE],
        result: [
          { speaker: '瓦勒兰', text: '恕我直言，这一份该我。您还得回去交印，她才二十七。我五十二了，家父在莫尔班平原比我现在小十岁。' },
          '他撕那一页之前先把手套摘了，叠好，放在桌角。',
        ] },
      { text: '让卡斯坦去：她把酒壶塞给你了', if: '!flag.fx_pc_dragged && !flag.fx_lost && party.liv && approval.liv >= 6 && !flag.liv_bridled', goto: 'f_12',
        effects: ['flag price_companion', 'flag price_liv', 'companion -liv', { if: 'flag.castan_liv', then: ['unflag castan_alive', 'flag liv_dead'] }, CLOSE],
        result: [
          { speaker: '卡斯坦', text: '五十四世批了：这笔账朕来付。壶里还有一半，你替我喝，别洒。' },
          '她是飞过去的，最后一回。翅膀扫倒了桌上三支蜡烛。',
        ] },
      { text: '喊皇帝的名字，叫他自己来', goto: 'f_12',
        if: 'flag.fx_emp_foe && !flag.fx_lost && flag.castan_crowned && flag.castan_alive && ((flag.castan_garrec && rep.dragon >= 3) || (flag.castan_lucan && (flag.lucan_marion || flag.lucan_garrec || (flag.lucan_alva && flag.years_wards))) || (flag.castan_liv && approval.liv >= 4))',
        effects: ['flag price_emperor', 'unflag castan_alive', { if: 'flag.castan_liv', then: ['flag liv_dead'] }],
        result: [
          '你喊的是名字，没带帝号。他挣开了半口气，同五十三世在沼泽堡喊停手那回一个样。这半口气他没拿来说话。',
          '他走到桌边，把那一页撕了。书里出来的东西只找了他一个人。{?flag.castan_liv:她撕之前回头冲你喊了一句：酒钱不用结了。|}',
        ] },
      { text: '喊皇帝的名字，叫他自己来', once: true,
        if: 'flag.fx_emp_foe && !flag.fx_lost && flag.castan_crowned && flag.castan_alive && !((flag.castan_garrec && rep.dragon >= 3) || (flag.castan_lucan && (flag.lucan_marion || flag.lucan_garrec || (flag.lucan_alva && flag.years_wards))) || (flag.castan_liv && approval.liv >= 4))',
        effects: ['hp -5'],
        result: '他的眼睛朝你转过来了。嘴张了张，脚没动。你同他之间那点交情，不够换这半口气。书页在你手边掀了一下，掀掉你一层皮。' },
      { text: '走到书跟前，自己撕', if: 'flag.fx_pc_dragged', goto: 'f_12',
        effects: ['flag price_emperor', { if: 'is.mortal', then: ['flag fx_pc_dead', 'unflag castan_alive'] }, CLOSE],
        result: [
          { if: 'is.mortal', text: '你走过去了。脚是别人在牵，手是你自己的。你把那一页撕了。阿德蕾西娅在你身后数数，数到一就停了。' },
          { if: 'is.mortal', text: '往下的事，是别人看见的。' },
          { if: 'is.immortal', text: '你走过去，把那一页撕了。书里的东西扑上来撕了很久，撕不动。有誓烙的那只手上从此多了一道白印。' },
        ] },
      { text: '不撕。从账页上的头一个名字念起', if: '!flag.fx_pc_dragged && !flag.fx_lost && world.unburied <= 3 && item.ledger_page >= 1 && flag.knows_roster', goto: 'f_12',
        effects: ['flag price_names', CLOSE],
        result: [
          '{?is.god:你一夜就念完了。书里的魂同一夜全出去了，大厅的窗纸破了一半。|你念了头一个名字。书页平下去一点。第二个。阿德蕾西娅搬来一把椅子，这回你坐了。}',
          '坎雷克那一页留在最后。{?flag.fx_walked:雾林里那些木牌上的名字，你念得最顺。|}他得先听完前面所有的。',
        ] },
      { text: '谁也别去。把书上的记号接过来', if: '!flag.fx_pc_dragged && !flag.fx_lost', goto: 'f_12',
        effects: ['flag book_kept', CLOSE],
        result: [
          '你把手按在书脊上。记号换手的时候没有声音。坎雷克看着你，头一回没抱怨。',
          { speaker: '坎雷克', text: '这一行我没想到。字还是我来写吧。你的字我看过，不行。' },
        ] },
    ],
  },

  // ======================================================================== 天亮以后
  f_12: {
    id: 'f_12',
    title: '那本书',
    art: 'ev_magic_study_and_relax',
    loc: '渡鸦山 · 山上的宅子',
    text: [
      '天亮了。窗纸透进来一层灰光，长桌两边的国王们都歪在椅子上，冠落了一地。坎雷克那把高背椅空着，垫子上坐出了一个坑。',
      { if: 'flag.price_aldresia', text: '阿德蕾西娅躺在长桌的另一头，十字军的人拿她的斗篷盖住了脸。银歌在你手里，剑柄是热的。' },
      { if: 'flag.fx_pc_dead', text: '他们把你抬到了长桌的另一头。阿德蕾西娅攥着你的印坐了一夜，天亮时指缝里全是蜡渣。' },
      { if: 'flag.price_pc && is.immortal', text: '你左手那道白印到天亮也没褪。书不往外顶了，隔一会儿自己翻过去一页，像在里头找你。' },
      { if: 'flag.price_emperor && !flag.castan_pc', text: '皇帝躺在他自己撕下来的那一页旁边。手背上的誓烙到天亮也没褪色。' },
      { if: 'flag.price_emperor && flag.castan_pc && is.immortal', text: '你手背上的誓烙旁边多了一道白印。两道印挨着，一道是山的，一道是书的。' },
      { if: 'flag.price_valeran', text: '瓦勒兰躺在长桌的另一头。他叠好的手套还在桌角，谁也没去动。' },
      { if: 'flag.price_liv', text: '卡斯坦躺在长桌上，翅膀收不拢，垂到了地上。她的酒壶挂在你腰上，还剩一半。' },
      { if: 'flag.price_names && !is.god', text: '你还在念。账页摊在膝头，念到第一百一十二个。阿德蕾西娅换了三回蜡烛，每回都问你喝不喝水。' },
      { if: 'flag.price_names && is.god', text: '你一夜就念完了。书里空了一大半，剩下的只有坎雷克那一页，薄得透光。' },
      { if: 'flag.book_kept', text: '书上的记号到了你手背上，颜色同没药一样。夜里死人一个一个躺下了，你坐在这儿，一个一个都听得见。' },
      '卢西安·西尔·维文是踩着雪上来的，靴子上糊满了沼泥。他在门口数了数桌边的椅子，把帽子摘了。',
      { speaker: '卢西安', text: '布勒瓦尔来了信，贾赫封我做科乌里亚的护国公。信是半年前写的，那时候他还不知道我们打不打得赢。' },
      { if: '!flag.book_kept', speaker: '卢西安', text: '这本书怎么办？我的兵要问的。他们头一句就会问烧不烧得掉。' },
      { if: '!flag.price_aldresia && !flag.fx_pc_dead', speaker: '阿德蕾西娅', text: '大人，桌边四十一把椅子，三十九个戴冠的。我数了三遍。第三遍多出一个，是我自己坐下了。' },
      { if: 'party.barry', text: '巴里在厨房里找着一口锅，正拿雪擦。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，这屋里没一样能吃的，盐罐里装的是牙。那本书你们商量，我先把锅烧上。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '七只。昨天窗外还有四十只乌鸦。要是它们不回来（我说的是要是），这山上往后就清净了。' },
      { if: 'is.god', text: '院子里跪了一片十字军。领头的那个问，大人往后坐哪儿，他们好把那把椅子抬下山。' },
    ],
    enter: [CLOSE, { if: '!flag.book_kept && !flag.book_locked && !flag.book_wise && item.book_of_canrec < 1', then: ['item +book_of_canrec'] }],
    choices: [
      { text: '把书塞进壁炉里试试', if: '!flag.book_kept && !flag.fx_pc_dead', once: true, effects: ['flag fx_burn_tried', 'hp -3'],
        result: [
          '炉火舔了书皮一下，自己灭了。炉膛里的灰往外一喷，糊了你一脸。书皮上连个焦印都没有。',
          { speaker: '卢西安', text: '那就是烧不掉。我去跟兵说，省得他们排队来试。' },
        ] },
      { text: '劝卢西安剿先知会的时候晚一天动手', if: 'party.vezina && !flag.fx_pc_dead', once: true,
        check: { skill: 'persuasion', dc: 16, mods: [{ if: 'rep.wise >= 2', n: 2, why: '贤者会替你说过话' }, { if: 'flag.fx_route', n: 1, why: '进沼的路是你同他对的' }] },
        ok: { text: '他想了半天，说一天可以，两天他的兵要问。薇齐娜在门边听见了，转身去收拾她的本子。', effects: ['approval vezina +2'] },
        fail: { text: '他说渡鸦山上那帮看鸟的他心里有数，叫你少管。薇齐娜在门边听见了，一整天没同你说话。', effects: ['approval vezina -1'] } },
      { text: '封进骑士团的库里', if: '!flag.book_kept', goto: 'f_12b', effects: ['flag book_locked', 'item -book_of_canrec'],
        result: '卢西安叫人找来一口装火药的铁箱，里头衬了铅。{?flag.fx_burn_tried:他看了看你脸上的炉灰，叫人又衬了一层。|}书放进去以后，他上了三道锁，钥匙分给三个人，自己不拿。' },
      { text: '封箱之前，请收殓人给书里的人念一遍名分', tag: '旧礼', if: "!flag.book_kept && faction == 'rites'", goto: 'f_12b',
        effects: ['flag book_locked', 'item -book_of_canrec', 'rep wex +1', { if: 'party.barry', then: ['approval barry +1'] }],
        result: [
          '随军的收殓人是大墓地来的，念到天黑才念完头一册。念一个名字，她在箱盖上划一道。',
          '锁上的时候箱盖划满了，划不下的写在了箱底。',
        ] },
      { text: '派人把书送去瓦洛森，交给加里昂', if: '!flag.book_kept', goto: 'f_12b',
        effects: ['flag book_wise', 'item -book_of_canrec', 'world writ +2', { if: 'party.vezina', then: ['approval vezina -1'] }],
        result: '书是十个人护着走的。回信四天后到了瓦洛森的驿站，只有一行字：我说过我不想要。底下盖着贤者会的印。' },
      { text: '送去瓦洛森，附一张有期限的借条', tag: '贤者门下', if: "!flag.book_kept && faction == 'staff'", goto: 'f_12b',
        effects: ['flag book_wise', 'item -book_of_canrec', 'world writ +1', 'rep wise +1'],
        result: '借条上写的是借阅三十年，到期交还骑士团。过期一天，罚贤者会在兰斯日请全城吃饭。加里昂回信说罚得太轻，签了。' },
      { text: '把书揣进怀里，下山', if: 'flag.book_kept', goto: 'f_12b', effects: ['rep wex -1'],
        result: [
          '书比看上去轻。卢西安看着你揣进去，把帽子又戴上了。',
          { speaker: '卢西安', text: '我的兵问起来，我就说书没了。他们会信的，他们巴不得信。' },
        ] },
    ],
  },

  f_12b: {
    id: 'f_12b',
    title: '骑士团',
    art: 'ev_excalibur',
    loc: '渡鸦山 · 山下的坟场',
    text: [
      '山下的坟场重新填了土。十字军的人排成两行，一行挖，一行数。数的人手里捧着那页账，念一个名字，插一块木牌。木牌是拆了栅门劈的，不够用。',
      { if: 'flag.price_aldresia', text: '阿德蕾西娅的坟在头一排，木牌是卢西安亲手削的，削短了一截。十字军的人已经管那个还没立起来的骑士团叫“阿德蕾西娅的”了。' },
      { if: 'flag.fx_pc_dead', text: '你的坟挨着她数过的那一排。阿德蕾西娅往木牌上刻你的名字，刻错了一笔，又劈了一块重刻。' },
      { speaker: '卢西安', text: '库得有人守，书得有人看，沼地里那帮烧人的也得有人管。这一摊事得立个骑士团。规矩我想好了三条，就是没人肯领头。' },
      { if: '!flag.price_aldresia && !flag.fx_pc_dead', speaker: '阿德蕾西娅', text: '名字别用我的。我才二十七，用上了往后不好改。' },
      { if: 'party.valeran', text: '瓦勒兰坐在一块碑上擦盾，盾面是空的，原来的纹章叫他刮掉了。' },
      { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，骑士团头一年枪够使，记账的人不够。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '立骑士团好。朕给它定两条。头一条，守库的不许喝酒。第二条，头一条管不着朕。' },
      { if: 'flag.book_kept', text: '你怀里的书沉了一下。挖坟的人都没抬头，可离你最近的那几个，铲子慢了。' },
    ],
    choices: [
      { text: '同十字军一道把坟场的账对完', once: true,
        check: { skill: 'investigation', alt: ['medicine'], dc: 16, party: true,
          mods: [{ if: 'item.ledger_page >= 1', n: 2, why: '福尔卡德那页账还在' }, { if: 'flag.fx_walked', n: 1, why: '雾林里的木牌你走过一遍' }] },
        ok: { text: '四百零六座，一座不差。最后一块木牌插下去，数的那一行里有人蹲下哭了，挖的那一行接着挖。', effects: ['rep wex +1', 'xp 300'] },
        fail: { text: '对到第三百座，两本账岔开了，岔的是同名的两个人。你在雪里跪了一下午，膝盖没了知觉，账还是没对齐。', effects: ['hp -4'] } },
      { text: '你来领头，誓词上不写你的名字', if: '!flag.fx_pc_dead', goto: 'f_12c', effects: ['flag order_founder'],
        result: '你在誓词底下画了一道，没签名。卢西安看了看，说这样也行，往后有人问，就说是一位追随者。' },
      { text: '照凯伦的规矩写头一条：赢了要留人', tag: '蓝宝石之眼', if: "!flag.fx_pc_dead && faction == 'sapphire'", goto: 'f_12c',
        effects: ['flag order_founder', 'rep escann +1', { if: 'flag.pyre_stopped', then: ['rep escann +1'] }],
        result: [
          '你写的头一条是凯伦的老话，第二条是你在沼地里加的：不许烧人。',
          { speaker: '卢西安', text: '第二条会有人不服。那就让他们来同第一条讲理。' },
        ] },
      { text: '把骑士团交给瓦勒兰', if: 'party.valeran', goto: 'f_12c', effects: ['approval valeran +2', 'rep rose +1'],
        result: { speaker: '瓦勒兰', text: '恕我直言，这是三十年里您头一回没问我愿不愿意。我愿意。名字就不留了，家父也没留下。' } },
      { text: '让阿德蕾西娅自己领头', if: '!flag.price_aldresia', goto: 'f_12c', effects: ['rep escann +1'],
        result: '{?flag.book_kept:她写的头一条誓词是：盯着那个揣书下山的人。她念给你听，眼睛没离开你的怀里。|她写的头一条誓词是：数清楚再动手。她念完了，又数了一遍字。}' },
      { text: '不管，留给后来的人', goto: 'f_12c', effects: ['rep escann -1'],
        result: '卢西安把誓词卷起来塞进靴筒，说那就等一位肯来的。后来是来了一位，没留下名字。' },
    ],
  },

  f_12c: {
    id: 'f_12c',
    title: '交印',
    loc: '去安本科斯特的路上', date: '1054年花始月',
    text: [
      { if: '!flag.fx_pc_dead', text: '印还挂在你脖子上，绳子换过四回。蜡印的边磨圆了，压出来的纹看不出是条约上的哪一枚。' },
      { if: 'flag.fx_pc_dead', text: '印挂在阿德蕾西娅脖子上。她说要替你送回安本科斯特，路上谁问都不摘，睡觉也不摘。' },
      '从瓦洛森往西走了十九天。路边的坟都填了土，有几处插了新木牌。艾伦河上的渡口又开始收钱了，一人三个铜子，抬棺的不收。',
      { if: 'flag.winters_varlosen && !flag.fx_pc_dead', text: '路过瓦洛森塔下的时候，厨房的人还认得你。十二个冬天你在这儿吃了多少顿，他们记着，塞给你一袋硬饼，说算在账上。' },
      { if: 'is.immortal && !flag.fx_pc_dead', text: '渡口有个老太太认出了你。她说八岁那年在科塞顿见过你，那时候你就是这个样子。她问你是不是吃了什么。' },
      { if: 'is.god', text: '每个驿站都有人在等你。东坎诺的诸王请你上试炼山，月神神殿请你进神系。摄政王庭的祭司们抬来一把镶金的椅子，绑在骡子背上走了二十天。' },
      { if: 'party.barry && !flag.fx_pc_dead', speaker: '巴里', text: '对不住，我到前面岔口就得往南了。我家那孩子四十了，说议事厅的门不关，不许我叫他孩子。我就在门外头叫。' },
      { if: 'party.valeran && !flag.fx_pc_dead', speaker: '瓦勒兰', text: '恕我直言，这一路您没说几句话。我到了恩特本就把这身甲卖了，卖给精灵。他们出价最公道，这一点我认。' },
      { if: 'party.liv && !flag.fx_pc_dead && !(flag.castan_liv && flag.castan_alive)', speaker: '卡斯坦', text: '掌玺大臣，印交了，你的官还算不算？算的话，先去打酒。' },
      { if: 'party.liv && !flag.fx_pc_dead && flag.castan_liv && flag.castan_alive', speaker: '卡斯坦', text: '朕在山上等你。印交了，掌玺大臣照当，这个朕批了。' },
      { if: 'party.vezina && !flag.fx_pc_dead', text: '薇齐娜把本子递过来，翻到最后一页。上头是空的。' },
      { if: 'flag.fx_pc_dead && partysize > 0', text: '跟你的人都还在队里，走得比来时慢。{?party.barry:巴里在岔口往南拐之前，往阿德蕾西娅的包袱里塞了一块乳酪，说是给你的。她没告诉他你吃不着。|}{?party.vezina:薇齐娜把你那本的最后一页空着，没让任何人写。|}' },
    ],
    choices: [
      { text: '在薇齐娜本子的最后一页落款', if: 'party.vezina && !flag.fx_pc_dead', once: true, effects: ['approval vezina +2'],
        result: '你写了日子和名字。她看了一眼，把本子合上，说这一本到这儿完了，下一本她自己写，不给任何人看。' },
      { text: '吃巴里在岔口开的那一锅', if: 'party.barry && !flag.fx_pc_dead', once: true, effects: ['hp full', 'approval barry +1'],
        result: '一锅豆子炖腌肉，加了乳酪。他看着每个人吃了第二碗，才肯自己坐下。' },
      { text: '把卡斯坦的酒壶喝干', if: 'flag.price_liv', once: true, effects: ['hp -2', 'rep dragon +1'],
        result: '是乌霜领的黑麦酒，冲。你喝到一半呛了，咳完接着喝。壶底刻着一行字：五十四世御用，偷喝者斩。' },
      { text: '绕道瓦洛森，把银歌送回去', if: 'flag.price_aldresia && item.silversong >= 1', once: true, effects: ['item -silversong', 'rep wise +1'],
        result: '瓦洛森的人把它挂在饭堂的东墙上，正对着锅。挂钩是现钉的，钉歪了，没人肯重钉。' },
      { text: '哪张椅子都不坐', tag: '神', if: 'is.god && !flag.book_kept && !(flag.castan_crowned && flag.castan_alive)', goto: 'end_unseated',
        effects: ['flag god_unseated', 'var god_acts +1', 'rep escann -2', 'rep moon -1', 'rep rose -1',
          { if: 'party.liv', then: ['approval liv -1'] }, { if: 'party.valeran', then: ['approval valeran +1'] }],
        result: [
          '你叫人把镶金的椅子从骡子背上卸下来，留在了驿站。驿站的人拿它当了柜台。',
          '东坎诺的使者在路边站了很久，回去报的是“神不肯来”。各国的宫廷头一件事是把正殿里的王座往后挪了半丈，好空出你站的地方。',
          { if: 'party.liv', speaker: '卡斯坦', text: '你不坐，那把镶金的归朕。朕坐一回，在上头拉一泡，然后你们爱给谁给谁。' },
          { if: 'party.valeran', speaker: '瓦勒兰', text: '恕我直言，您不坐，满坎诺的王座往后都得空出半边防着您。可我宁愿这样。' },
          { if: 'party.barry', text: '巴里没劝。他从驿站搬了只凳子，自己坐了，把乳酪掰成两半，一半递给你。你站着接的。' },
          { if: 'party.vezina', text: '薇齐娜在本子上写了一行，划掉，又写了一行。你凑过去看，第二行只有两个字：要是。' },
        ] },
      { text: '{?flag.fx_pc_dead:让阿德蕾西娅把印送回去|把印交回去，再回渡鸦山}', if: 'flag.book_kept', goto: 'end_quiet' },
      { text: '{?flag.fx_pc_dead:让阿德蕾西娅把印送回去|把印交回去，再上试炼山}', if: '!flag.book_kept && (flag.castan_crowned && flag.castan_alive) && !flag.knot_cut', goto: 'end_bridle' },
      { text: '{?flag.fx_pc_dead:让阿德蕾西娅把印送回去|上试炼山观礼，再去交印}', if: '!flag.book_kept && (flag.castan_crowned && flag.castan_alive) && flag.knot_cut', goto: 'end_fiftyfourth' },
      { text: '{?flag.fx_pc_dead:让阿德蕾西娅把印送回去|把印交回去，路上绕到凯尔马尔多}', if: '!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion <= 2', goto: 'end_parting' },
      { text: '{?flag.fx_pc_dead:让阿德蕾西娅把印送回去|把印交回去，赶上兰斯日那顿饭}', if: '!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion > 2 && world.communion >= 8 && world.writ >= 4 && world.writ <= 6 && world.feud <= 3 && flag.blame_canrec && !flag.castan_crowned', goto: 'end_table' },
      { text: '{?flag.fx_pc_dead:让阿德蕾西娅把印送回去|把印交回安本科斯特}', if: '!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion > 2 && !(world.communion >= 8 && world.writ >= 4 && world.writ <= 6 && world.feud <= 3 && flag.blame_canrec && !flag.castan_crowned)', goto: 'end_ledger' },
    ],
  },

  // ======================================================================== 结局
  end_unseated: {
    id: 'end_unseated',
    title: '不肯落座的神',
    loc: '安本科斯特 · 旧斗兽场', date: '1054年',
    text: [
      '第七次泛神会议是在旧斗兽场复会的，别处坐不下。看台上坐满了祭司：月神神殿的，摄政王庭各家神殿的，大墓地的。布勒瓦尔来了两位太阳教士，坐得离谁都远。',
      '议程贴在拱廊的柱子上。头一条是“阿德蕾西娅算谁家的化身”，第二条是你。{?flag.god_on_agenda:你这一条三十二年前就排进去过，一直没轮上。|}',
      { if: 'flag.price_aldresia', text: '吵头一条的时候，有人把她那把剑的空鞘抬上了台子。两边的祭司谁也不敢碰。' },
      { if: 'flag.price_pc', text: '你左手那道白印露在袖口外头。前排的收殓人一直盯着看，看完在本子上记了一笔。' },
      { if: 'flag.price_companion', text: '{?flag.price_valeran:瓦勒兰|卡斯坦}的名字也在议程上，排在第三条，是你叫人添的。' },
      { if: 'flag.price_emperor', text: '皇帝撕书的事没人提。死了的皇帝不归神殿管，归史官。' },
      { if: 'flag.price_names', text: '你一夜念完的那些名字，大墓地抄了一份挂在会场门口，抄了四十张纸。' },
      { if: 'flag.god_half_sentence', text: '你在场，屋里没人撒得了谎，会开得很短。头一天就有三位大祭司说了本来没打算说的话，第二天都告了病。' },
      '午饭是巴里送来的，一篮子乳酪和腌鱼。他在看台上替你占了个座，拿帽子占着。你站着吃完了，帽子一直没挪。',
      '散会那天，书记官在拱廊底下把你拦住了。还是那张桌，那锅蜡。他把登记册翻到底，找不着你的名字。',
      { speaker: '书记官', text: '神号怎么写？还有，要不要留个地址，往后有信好寄。' },
    ],
    first: ['quest witness done'],
    ending: 'unseated',
  },

  end_quiet: {
    id: 'end_quiet',
    title: '寂静之冠',
    art: 'ev_looming_death',
    loc: '渡鸦山 · 山上的宅子',
    text: [
      '印交了。你又走了十九天回到渡鸦山。山上的宅子里，笼子拆了，长桌还在，坎雷克那把椅子没人坐。你在它旁边搬了只凳子，书摊在膝头。',
      '死人是你接过记号那一夜躺下的，从渡鸦山到艾伦河，坟场里的，沼地里的，走在半路上的。山下的哨兵说那一夜满山都是东西倒地的声音，像有人收了一晚上的柴。书里的魂没走。你不开口，它们就等着。',
      '头一个上山来的是阿德蕾西娅。她在门口站了一会儿，没进来。',
      { speaker: '阿德蕾西娅', text: '骑士团的誓词我添了一条，排在最前头：盯着您。大人别多心，第二条是给您送饭。' },
      { if: "flag.f_rites || name == '普丽姆萝丝·花足'", text: '大墓地派来的收殓人进门先量了量书，又量了量你。' },
      { if: "flag.f_rites || name == '普丽姆萝丝·花足'", speaker: '收殓人', text: '这些人是我们一个一个数过的。您把他们揣走了，账上得记一个偷字。我照实记。' },
      { if: 'is.immortal', text: '你用不着学坎雷克那一步，你本来就不会老。十字军的人听说了这一条，往后送饭都把碗搁在门槛外头，敲两下就走。' },
      { if: 'party.barry', text: '巴里没走。他在厨房里生了火，说死人躺下了，活人总得吃饭。' },
      '书里那个声音又响了一下。',
      { speaker: '坎雷克', text: '劳驾，后脑勺痒。这得怪维纳克。' },
    ],
    first: ['quest witness done'],
    ending: 'quiet',
  },

  end_bridle: {
    id: 'end_bridle',
    title: '缰绳',
    art: 'ev_mages_estate_mad',
    loc: '试炼山 · 北要塞',
    text: [
      '北要塞的大厅重新生了火。上首坐着皇帝，乌钢冠戴得很正。',
      { if: 'flag.castan_garrec', text: '加雷克坐得笔直，同他父亲在旧画像上一个样。黑龙的老兵站满了两廊，没有一个看他的眼睛。' },
      { if: 'flag.castan_lucan', text: '卢坎耳朵尖从冠底下露出来。他读了一上午折子，读完一份就抬头，等人告诉他批什么。' },
      { if: 'flag.castan_liv', text: '卡斯坦坐在上首，翅膀收得规规矩矩。她照旧嚷着要酒。酒来了，有人叫她停，她就停，杯子停在半空，停到那人说可以。' },
      { if: 'flag.castan_pc', text: '上首坐的是你。冠是你自己戴的，誓是你自己立的。脚往哪边迈，要看绳子那头的意思。' },
      { if: 'flag.bridle_wise', text: '绳子攥在贤者门下手里。伊迪丝坐在皇帝左手边，手套没摘。加里昂从瓦洛森来过一封信，只有一句：我反对。信是敕令发下去以后才到的。' },
      { if: 'flag.bridle_pc && !flag.castan_pc', text: '绳子攥在你手里。你不开口，他就不动。{?flag.iacob_loop:后来你想起来，那个活扣是亚科布留的。他到头来没攥着，攥着的是你。|}' },
      { if: 'flag.bridle_pc && flag.castan_pc', text: '牵你的那根绳，另一头也在你手里。夜里醒过来，你常要想一会儿，刚才那个念头是谁的。' },
      '往后的敕令都从这间屋发出去。头一道叫各国把欠十字军的饷补齐，第二道封了达拉万之愚。诸王照办，没有一家回嘴。',
      { if: 'flag.fx_pc_dead', text: '你没看见这些。阿德蕾西娅替你看了，回瓦洛森以后只说了一句：他坐得很直，直得不像是自己坐的。' },
      { if: 'flag.bridle_pc && flag.castan_garrec', speaker: '加雷克', text: '下一道敕令写什么？' },
      { if: 'flag.bridle_pc && flag.castan_lucan', speaker: '卢坎', text: '下一道敕令写什么？您说，我来写，我的字比您的好看。' },
      { if: 'flag.bridle_pc && flag.castan_liv', speaker: '卡斯坦', text: '掌玺大臣，下一道敕令写什么？写完了给朕倒杯酒。你说倒，朕才喝得着。' },
      { if: 'flag.bridle_pc && flag.castan_pc', text: '你提起笔，先问了自己一句：下一道敕令写什么。' },
      { if: 'flag.bridle_wise && !flag.castan_pc', text: '皇帝转过头，问伊迪丝下一道敕令写什么。' },
      { if: 'flag.bridle_wise && flag.castan_pc', speaker: '伊迪丝', text: '下一道敕令你想写什么？你先说，我听听。' },
    ],
    first: ['quest witness done'],
    ending: 'bridle',
  },

  end_fiftyfourth: {
    id: 'end_fiftyfourth',
    title: '第五十四位',
    art: 'ev_wex_precipice',
    loc: '试炼山',
    text: [
      '石阶修好了，十道试炼一道没少。誓石缺的那一角也补上了，补的那块颜色浅一点。',
      { speaker: '布洛克', text: '补一角，用料三块，废了两块。颜色差半成，再过一百年看不出来。' },
      { if: 'flag.castan_garrec', text: '加雷克走完了十道。下山的时候，黑龙的老兵在山脚跪了一地。西边的人连夜数自己有多少枪。' },
      { if: 'flag.castan_lucan', text: '卢坎走完了十道。乌霜家的血，精灵的耳朵。月神神殿和摄政王庭的祭司在山下吵了四十天，吵的是谁先跪。' },
      { if: 'flag.castan_liv', text: '卡斯坦走完了十道，最后一道是爬上去的。立完誓，她翅膀根上的灰毛掉了一把。屠兽者的椅子她坐了，说在上头拉一泡的事留给五十五世。' },
      { if: 'flag.castan_pc', text: '十道试炼是你自己走的。第九道的石像没拦你。誓石烫了一下，誓烙到了你手背上。听誓的只有石头。' },
      { if: 'flag.castan_pc && is.god', text: '北要塞的守军不知道该怎么行礼。一位不会死的卡斯坦，坎雷克找了三十年的那种人，如今是你。' },
      { if: 'flag.map_drawn', text: '石桌上还留着你当年画的那条线，炭灰叫人拿油封住了。如今那是真的疆界，北要塞的书记官照着抄了十二份。' },
      '达梅斯海德诸国连夜结了盟。盟约头一条写的是：山上那位要是往西看，大家一起看回去。',
      { if: 'flag.castan_liv', text: '第十一道试炼是她加的：在北要塞的酒桶边上喝赢她。头一个来试的是布洛克，喝到第七碗趴下了。{?flag.fx_pc_dead:卡斯坦把第八碗推到一张空凳子跟前，说掌玺大臣的那份先记着。|卡斯坦把第八碗推到你面前。}' },
      { if: '!flag.castan_liv', text: '傍晚，山上照老规矩喊了一声阵。北要塞的守军头一回应了。' },
    ],
    first: ['quest witness done'],
    ending: 'fiftyfourth',
  },

  end_parting: {
    id: 'end_parting',
    title: '各回各船',
    art: 'ck3_landing',
    loc: '凯尔马尔多 · 白港',
    text: [
      { if: 'flag.larthan_open', text: '白港的码头修了四十年，头一回挂满了帆。船是从精灵码头拖过来的旧船，船板补过，帆是新的。' },
      { if: '!flag.larthan_open', text: '伊贝瓦尔的信是前一天到的：拉尔桑的门洞填死了，墙又加了一截。来白港的是墙外头剩下的那些，没处去了。' },
      '走的人不多，几百个，大多是老的。船上的长老管这叫回家。家在哪边谁也说不准，船上的海图是五十多年前画的。',
      { if: 'item.lunatein_plank >= 1 && !flag.fx_pc_dead', text: '有个老水手认出了你兜里那块月火号的船板。他摸了摸上头的钉眼，说这块是左舷第三排的，他钉的。' },
      { if: 'flag.fx_pc_dead', text: '阿德蕾西娅替你来了。她站在码头的缆桩边上数帆，数到第十一面，有人问她是谁家的，她说是监誓人家的。' },
      '巴里没走。他站在跳板边上，挨个给上船的人塞乳酪，塞一个说一声对不住。他说他家那孩子在威克斯，他得留下。',
      '马里昂没来送。他派人送来一箱酒，箱子上没盖月庭的印，也没盖别家的。',
      { if: 'is.halfelf', text: '跳板中间站着几个半精灵的孩子，十来岁，一只脚在船上，一只脚在岸上。船上的人喊他们上来，岸上的人喊他们下来。' },
      { if: "name == '精灵码头的莉安娜'", speaker: '莉安娜', text: '我也站过那块板子，就站了一会儿。后来我娘的鱼摊收了，我就下来了。' },
      '一条小船解了缆。船尾有人回过头，用威克斯话喊了一句：坟要挖得比恨深。',
    ],
    first: ['quest witness done'],
    ending: 'parting',
  },

  end_table: {
    id: 'end_table',
    title: '同席',
    art: 'ck3_barry',
    loc: '安本科斯特 · 旧斗兽场', date: '1054年兰斯日',
    text: [
      '旧斗兽场的沙地上摆了一圈桌子。地不平，桌腿底下垫着砖。主位有椅子，空着。',
      { if: "origin == 'dameria'", text: '今年轮到月庭管饭。马里昂五十二了，亲自掌勺，用的是当年那把切肉刀。他说这刀砍过人，该切回肉了。' },
      { if: "origin == 'lorent'", text: '今年轮到洛伦特管饭。太后坐在离主位最近的那张桌，菜单是她定的，每道菜底下配一句客气话，句句有刺。' },
      { if: "origin == 'ebonmarck'", text: '今年轮到乌霜边区管饭。黑卡斯塔诺人烤了一整头牛，军团的老兵排着队切，切一刀报一声番号。' },
      { if: "origin == 'ibevar'", text: '今年轮到伊贝瓦尔管饭。船上的长老带来腌鱼和海草饼，说是船上的吃法。没人爱吃，都吃完了。' },
      { if: "origin == 'wex'", text: '今年轮到威克斯管饭。戴伦公爵站在门口，挨个问吃了没有，问法是巴里教的。' },
      '瓦洛森的人带着令状来，令状上的日子还剩六年。旁边坐着两个看着他们的外人，一个精灵，一个矮人。玫瑰和月如今是亲家，坐一桌，为谁先掰面包吵了半顿饭。',
      { if: 'is.god', text: '你站着吃。坐下去这张桌就散了，头一年大家就看出来了，没人再劝。' },
      { if: 'is.immortal && !is.god', text: '坐你对面的老伯爵说，他爷爷那辈就见过你。他问你明年还来不来，好提前占座。' },
      '有个头一回来的男爵问，主位是给谁留的。',
      { speaker: '巴里', text: '先吃。' },
    ],
    first: ['quest witness done'],
    ending: 'table',
  },

  end_ledger: {
    id: 'end_ledger',
    title: '监誓人的账',
    art: 'ev_blank',
    loc: '安本科斯特 · 旧斗兽场拱廊',
    text: [
      { if: 'flag.price_aldresia', text: '瘟疫是 1053 年冬天停的。阿德蕾西娅没回来，瓦洛森的人把她的剑挂在了饭堂里。' },
      { if: 'flag.fx_pc_dead', text: '瘟疫是 1053 年冬天停的。你没回来。阿德蕾西娅把你的印揣了一路，揣到了安本科斯特。' },
      { if: 'flag.price_pc && !flag.fx_pc_dead', text: '瘟疫是 1053 年冬天停的。书撕不动你，你回来了，左手多了一道白印。' },
      { if: 'flag.price_valeran', text: '瘟疫是 1053 年冬天停的。瓦勒兰没回来。恩特本的人把他的手套送回了家，叠得同他放在桌角那回一样。' },
      { if: 'flag.price_liv', text: '瘟疫是 1053 年冬天停的。卡斯坦没回来。乌翼兵团把她的空酒壶插在了北要塞脚下的坟头上。' },
      { if: 'flag.price_emperor && !flag.fx_pc_dead', text: '瘟疫是 1053 年冬天停的。皇帝没回来。他自己撕的那一页，史书上记成了他的最后一道敕令。' },
      { if: 'flag.price_names', text: '瘟疫是 1053 年冬天停的，那本书念到第三年还没念完。你抽空下了一趟山。' },
      '解药出自瓦洛森。{?flag.book_wise:书在加里昂的塔上，借条压在书底下。|书锁进了骑士团的库里。}试炼山上没有皇帝。',
      { if: 'flag.order_founder', text: '骑士团是一位没留下名字的追随者建的。誓词底下那一道，是你画的。' },
      { if: '!flag.order_founder', text: '骑士团是一位没留下名字的追随者建的。' },
      { if: '!flag.fx_pc_dead', text: '你把监誓人的印交还安本科斯特。拱廊底下还是那张桌，那锅蜡。书记官{?is.god:认出了你，手一抖，蜡洒了半张桌子。他|}翻了半天，找不着三十一年前那本登记册。' },
      { if: 'flag.fx_pc_dead', text: '阿德蕾西娅把印交到拱廊底下那张桌上。还是那锅蜡。书记官翻了半天，找不着三十一年前那本登记册。' },
      { speaker: '书记官', text: '{?flag.fx_pc_dead:他叫什么？名字怎么写？|名字怎么写？}' },
      '他另起一页。门外有个半精灵小孩在追一只鸡，鸡往精灵码头那边跑了。',
    ],
    first: ['quest witness done'],
    ending: 'ledger',
  },
};
