// s1444 finale.js — 终章《卡斯托纳斯，又一次》与七个结局（BIBLE.md §11.6、§10、§16.2、§16.4）。
// 1472 年奈拉月 1 日 — 11 日。进来时 10 级；队伍在林子里只过了一冬，外头过了十一年。
//
// 场景提纲（谁 / 改变什么 / 去哪儿）
//   f_01 十一年，一口气｜喊报人、同伴｜first：“丢掉的那些年”十五行（顺序照 §11.6），中间第 2 行是乌什卡的底线检查；
//         q_southgate start；喊报人按 pixiebury_warned / proof_* 报十一年；问城（compact_* / belgrak_* / 斯劳）、
//         问收尸队（f_rumor_dead）；[皇帝的差事][达梅里亚之子]；永生一段（乌什卡看白头的边区兵）；神一条 → f_02
//   f_02 没屋顶的神殿｜阿坦、守庙的姑娘｜q_dragon done；阿坦在队：tan_told / tan_silent / tan_forced（好感不到 2 则
//         tan_morningstar，他走）；不在队：姑娘问他几时回（说快了 lies+1）；洞悉：庙外听晨祷的人（f_listeners）→ f_03
//   f_03 门板桌，又一次（枢纽）｜蓝牙、阿罗莎、多米尼克、洛朗、卡莉斯塔、小格里夫、四个同伴各一段｜商店、长休；
//         告诉多米尼克 / 神殿（temples_first）/ 蓝牙；ushka_spoke；arosha_at_table；bones_at_gate；q_debt；
//         杖给谁；五个出身各一项（q_o_* 收尾）；[矮人] 修闸；goblins_armed → underpass_held；神的三处旁人反应 → f_04
//   f_04 来要这句话的人｜五拨人｜刻版（told_printed，风声+3，太平就地结算）/ 卖给元老（sold_morningstar）/ 都回绝；
//         洞悉看袖口（f_crow_seen）；拦“他们的神杀了咱们的王”（否则 skyking_slur）→ f_04b
//   f_04b 一页纸｜阿格拉多斯教团的老妇人｜prophecy_known、两条图鉴；公开（prophecy_told）/ 还她 / 烧 → f_05
//   f_05 晨星会的手｜妮克西｜codex morningstar；车被割了；追：运动 → f_05b
//   f_05b 排水沟｜察觉 → f_05c
//   f_05c 地下通道｜阿坦（tan_morningstar 时站在他们后头）｜特技；必打：元老+刀手×3（开闸、喊席次、[施法者]反制）
//         败两下则他们先动手；胜 / 败 → f_05d
//   f_05d 天亮以前｜妮克西或乌什卡｜[无冕] 被顶回来：空着的椅子谁来看（好感）→ f_06
//   f_06 南门（路口）｜q_southgate stage 2｜余烬 ≤3 → f_06c；白骨守门 → f_06b；否则 → f_06d
//   f_06b 三排白骨｜乌什卡一具一具敲碎，走了（ushka_left）｜southgate_held，未葬+2 → f_07
//   f_06c 缠白布的使者｜马布格｜southgate_held → f_07
//   f_06d 南门之战｜必打，noAwe：先锋酋长+老兵（余烬 ≥8 多两个，underpass_held 少一个）；友军三选一（阿罗莎 /
//         边区老兵 / 就你们几个）；落闸（战士系优势）、阵前喊话；[绿皮] 应一声；[神] 一个人去（god_held_gate）
//         胜 → f_07；败 → f_07（余烬 ≥8 时城破 → f_09）
//   f_07 试炼山，夜里｜卡莉斯塔、阿罗莎、阿坦、两位树灵｜陪谁上山（req）→ f_07b；谁也不陪 → f_08；[试炼派] 被顶回来
//   f_07b 头一道试炼｜喊声有没有人应（声望够 3 的那家应；不够则说服 18）→ f_07c
//   f_07c 誓石｜见证（说服 17，按 var.lies 扣）；claimant_kalista / claimant_arosha → f_08
//   f_08 万神道上的会｜多米尼克、各殿祭司、阿坦、加莱尔｜conclave_held（三条件原样）；神：fourth_offered；
//         三选一（检定 17，证物 +1 至 +3）；[承嗣] 第二遍；[神职] 一票 → f_09
//   f_09 十一月十一日｜古尔赞、乌什卡｜余烬 ≤3：谈（gurzan_treaty）；城破：看他扔链子；否则必打（noAwe）；
//         [退潮的人 / 声望 clans ≥4] 走到他那边（sided_gurzan）；q_southgate stage 3 → f_09b / f_10
//   f_09b 城门洞｜洛朗｜让他收（gurzan_soul_taken，乌什卡去追罐子）/ 吓退（威吓 18）/ 打 → f_09c / f_10
//   f_09c 归谁｜归尘礼（gurzan_buried）/ 交给马布格（gurzan_returned）→ f_10
//   f_10 最后一件事｜按 §10.2 列结局；《军令未撤》永远在列；[神] 把城拿回来；[神] 在空椅子前站住 → f_10b
//   f_10b 那把空椅子｜三种答法 fourth_sat / fourth_declined / fourth_undertaker → end_fourth
//   end_* 七个结局场景，各停在一件东西上。

const CONCLAVE = 'flag.southgate_held && !flag.compact_none && world.word >= 4';
const OPEN = '(flag.southgate_held || world.embers < 8)';

// f_08：证物和票。拿来的东西最多加 3。
const EVIDENCE = [
  { if: 'flag.has_vote || is.divine', n: 2, why: '你在会上有一票' },
  { if: 'item.mural_rubbing >= 1', n: 1, why: '壁画的拓片' },
  { if: 'item.broken_scepter >= 1', n: 1, why: '断权杖' },
  { if: 'item.arun_notes >= 1 || item.sash_copy >= 1 || item.shaft_rubbing >= 1 || item.log_copy >= 1', n: 1, why: '笔记和抄本' },
  { if: 'flag.f_listeners', n: 1, why: '庙外听晨祷的那几个人也来了' },
];

// f_07c：誓石前，每一句好听的假话扣一分；当众认过的只扣一半。
const OATH_LIES = [
  { if: 'var.lies >= 1 && !flag.lies_confessed', n: -1, why: '你说过的好听话' },
  { if: 'var.lies >= 2 && !flag.lies_confessed', n: -1, why: '你说过的好听话' },
  { if: 'var.lies >= 3 && !flag.lies_confessed', n: -1, why: '你说过的好听话' },
  { if: 'var.lies >= 4 && !flag.lies_confessed', n: -1, why: '你说过的好听话' },
  { if: 'var.lies >= 5 && !flag.lies_confessed', n: -1, why: '你说过的好听话' },
  { if: 'var.lies >= 6 && !flag.lies_confessed', n: -1, why: '你说过的好听话' },
  { if: 'var.lies >= 2 && flag.lies_confessed', n: -1, why: '你说过的好听话（当众认过）' },
  { if: 'var.lies >= 4 && flag.lies_confessed', n: -1, why: '你说过的好听话（当众认过）' },
  { if: 'var.lies >= 6 && flag.lies_confessed', n: -1, why: '你说过的好听话（当众认过）' },
];

// f_10：选完以后先交代同伴，再进结局场景。
const FATES = [
  { if: 'party.ushka', text: '乌什卡把锤子在裤腿上蹭了两下，插回腰里。' },
  { if: 'party.tan', text: '阿坦把那截权杖头搁在门板上，手没离开它。' },
  { if: 'party.nixee', text: '妮克西把一张欠条压在灯座底下，压平了。' },
  { if: 'party.garaele', text: '加莱尔在册子上写下日期，底下空了一行。' },
];

// ---- f_05c：晨星会
const SP_SLUICE = {
  id: 'sluice', name: '扳开排水沟上头的旧水闸', desc: '银瀑的水就在头顶上',
  check: { skill: 'athletics', dc: 15, party: true, mods: [{ if: 'flag.underpass_held', n: 20, why: '守通道的人替你开了闸' }] },
  success: { text: '闸板一松，银瀑的水从头顶灌下来，带着下城一礼拜的泔水。三个刀手被冲倒在台阶上，元老抓着铁环没松手。', dmgAll: '5d6', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
  fail: { text: '闸轮锈死了。你扳了两下，掌心磨掉一层皮。', selfDmg: '1d6' },
};
const SP_SEAT = {
  id: 'seat', name: '当着他的人喊出他在元老会里坐第几席', desc: '要先知道他是谁',
  check: { skill: 'intimidation', alt: ['persuasion'], dc: 14, mods: [{ if: '!flag.morningstar_hint && !flag.f_crow_seen', n: -20, why: '你不知道他坐第几席' }] },
  success: { text: '你报了席次，又报了他祖父的名字。两个刀手对看了一眼，把刀插回了鞘里。他们过血门礼的时候没人告诉过他们，主子会被当众点名。', applyAll: { cond: 'frightened', turns: 2 } },
  fail: { text: '你喊出来的席次差了两位。元老笑了一声，袖口一抖，几片黑羽落在水里。' },
};
const SP_COUNTER = {
  id: 'counter', name: '掐断元老的召唤', desc: '鸦羽是从他袖口里出来的，懂行的能把那道口子堵上',
  check: { skill: 'arcana', dc: 16, adv: 'is.caster', mods: [{ if: '!is.caster', n: -4, why: '这得懂行' }] },
  success: { text: '他袖口里的黑羽刚冒头就蔫了，一根根掉进水里。元老低头看了看自己的手。', applyAll: { cond: 'dazed', turns: 1 } },
  fail: { text: '黑羽从你指缝里钻了过去，烫的。', selfDmg: '2d6', type: 'fire' },
};
const MORNINGSTAR = {
  title: '晨星会的手',
  enemies: [{ id: 'morningstar_elder' }, { id: 'morningstar_bravo', n: 3 }],
  specials: [SP_SLUICE, SP_SEAT, SP_COUNTER],
  xp: 1500,
  win: { goto: 'f_05d' },
  lose: { effects: ['flag f_robbed', 'rep league -2', 'gold -300', 'hp 1'], goto: 'f_05d' },
};

// ---- f_06d：南门
const SP_GATE = {
  id: 'gate', name: '落闸', desc: '三百年没落过的铁闸，绞盘昨夜才抹了油',
  check: { skill: 'athletics', dc: 16, party: true, adv: 'is.martial' },
  success: { text: '绞盘转了半圈就卡住了，你拿肩膀顶着又推了半圈。铁闸砸下来，地皮都在跳。闸外那一截人进不来，闸里这一截也出不去。', dmgAll: '4d6', type: 'bludgeoning', applyAll: { cond: 'restrained', turns: 2 } },
  fail: { text: '绞盘上的油抹得太多了。你手一滑，闸只落了一半，正卡在你们自己人头顶上。', selfDmg: '2d6' },
};
const SP_SHOUT = {
  id: 'shout', name: '在阵前喊火边那句话', desc: '造我们的人不配我们替他死。得有人在火边先说过',
  check: { skill: 'intimidation', alt: ['persuasion'], dc: 16, mods: [{ if: 'flag.ushka_spoke', n: 4, why: '这句话在火边说过了' }, { if: "origin == 'tide'", n: 2, why: '对面认得你的嗓子' }, { if: "!flag.ushka_spoke && origin != 'tide'", n: -20, why: '对面没人听过这句话' }] },
  success: { text: '对面头一排有一半人停了脚。有人回头去找喊话的，有人低头看自己的手背。', applyAll: { cond: 'frightened', turns: 1 } },
  fail: { text: '风是往你这边刮的。你喊的话叫号角声盖住了，对面一个字也没听见。' },
};
const SG = { title: '南门', noAwe: true, xp: 1800, specials: [SP_GATE, SP_SHOUT], win: { effects: ['flag southgate_held'], goto: 'f_07' } };
const SG_LOSE = { effects: ['hp 1'], goto: 'f_07' };
const SG_LOSE_CITY = { effects: ['hp 1', 'flag f_city_fell'], goto: 'f_09' };
const E_SG = [{ id: 'clan_warcaller' }, { id: 'tide_veteran', n: 3 }];
const E_SG_U = [{ id: 'clan_warcaller' }, { id: 'tide_veteran', n: 2 }];
const E_SG8 = [{ id: 'clan_warcaller' }, { id: 'tide_veteran', n: 5 }];
const E_SG8_U = [{ id: 'clan_warcaller' }, { id: 'tide_veteran', n: 4 }];
const AL_AROSHA = [{ id: 'arosha' }];
const AL_MARCH = [{ id: 'marcher_veteran', n: 2, name: '边区老兵' }];
const IN_AROSHA = '阿罗莎的人守左边的垛口，伐橡斧靠在墙上，斧刃朝外。';
const IN_MARCH = '边区老兵把盾一面压一面，堵在门洞里。领头的那个白了头，他嘴里数着数。';
const IN_ALONE = '绞盘边上只有你们几个。闸绳是新换的，还有股麻油味。';
const B47 = 'world.embers >= 4 && world.embers <= 7';
const B8 = 'world.embers >= 8';
const UH = 'flag.underpass_held';
const NU = '!flag.underpass_held';
const CAN_AROSHA = 'flag.arosha_at_table';
const CAN_MARCH = '(flag.shout_answered || rep.corintar >= 3 || flag.f_told_bluetusk)';

// ---- f_09：第二次卡斯托纳斯之战
const SP_BANNER = {
  id: 'banner', name: '夺他阵前的骨旗', desc: '旗杆上挂的是他父亲',
  check: { skill: 'athletics', dc: 17, party: true },
  success: { text: '你撞开两个擎旗的，把旗杆从泥里拔了出来。杜坎森的骨头在杆头上哗啦响了一声。对面一整排人都回头看。', applyAll: { cond: 'frightened', turns: 2 } },
  fail: { text: '擎旗的是个老兵，他拿旗杆底下的铁箍砸在你肩上。旗没倒。', selfDmg: '2d8' },
};
const SP_STALL = {
  id: 'stall', name: '掀翻卖咸鱼的摊子，堵住空地的口子', desc: '摊子是石头砌的底，木头搭的棚',
  check: { skill: 'athletics', dc: 14 },
  success: { text: '棚子塌下来，三筐咸鱼滚了一地。冲在前头的几个踩在鱼上，摔成一堆。', dmgAll: '2d6', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
  fail: { text: '摊子底下是石头砌的，比你想的沉。棚顶倒是塌了，塌在你头上。', selfDmg: '1d8' },
};
const SP_CALL = {
  id: 'call', name: '朝他身后的人喊：他父亲的日子过完了', desc: '他们跟着的是一个日子，不是一个人',
  check: { skill: 'intimidation', alt: ['persuasion'], dc: 16, mods: [{ if: 'flag.korgus_rite', n: 3, why: '杜坎森磨成了粉，他们都知道' }, { if: 'flag.ushka_spoke', n: 2, why: '火边有人说过那句话' }, { if: 'flag.gurzan_treaty || flag.moot_defused', n: 1, why: '他们见过谈得拢的时候' }] },
  success: { text: '后排有人放下了斧子。他没走，就是不往前了。旁边的人看了他一眼，也停了。', applyAll: { cond: 'frightened', turns: 1 } },
  fail: { text: '古尔赞替他们答了：今天就是他父亲的日子。号角又响了一遍。' },
};
const SON = [SP_BANNER, SP_STALL, SP_CALL];
const NOSON = [SP_STALL, SP_CALL];
const GZ = { title: '第二次卡斯托纳斯之战', noAwe: true, xp: 2500, win: { goto: 'f_09b' }, lose: { effects: ['hp 1', 'flag f_gurzan_fled'], goto: 'f_10' } };
const E_GZ2 = [{ id: 'gurzan' }, { id: 'tide_veteran', n: 2 }];
const E_GZ3 = [{ id: 'gurzan' }, { id: 'tide_veteran', n: 3 }];
const E_GZ4 = [{ id: 'gurzan' }, { id: 'tide_veteran', n: 4 }];
const AL_BT = [{ id: 'bluetusk' }];
const AL_BTA = [{ id: 'bluetusk' }, { id: 'arosha' }];
const G2 = 'flag.southgate_held && world.embers >= 4 && world.embers < 8';
const G3 = '!flag.southgate_held && world.embers >= 4 && world.embers < 8';
const G4 = 'flag.southgate_held && world.embers >= 8';
const IN_GZ = '号角从南门一路响到下城。古尔赞没骑马，走在头一排，一只手提着斧子。';

// ---- f_09b：洛朗
const SP_JARS = {
  id: 'jars', name: '砸他腰上那一排罐子', desc: '罐口封着蜡，里头不是空的',
  check: { skill: 'sleight', alt: ['athletics'], dc: 16, party: true },
  success: { text: '两只罐子碎在城门洞的石板上。里头出来的东西没有形状，往四面散了。洛朗低头看了一眼，头一回把剑握紧了。', dmgAll: '3d8', type: 'force', applyAll: { cond: 'dazed', turns: 1 } },
  fail: { text: '你的手刚碰到罐子，他就把罐口转向了你。里头那位冲你喊了一句话，你没听清，耳朵里嗡了半天。', selfDmg: '2d8', type: 'psychic' },
};
const LAURENS = {
  title: '城门洞',
  intro: '洛朗把空罐子挂回腰上，拔了剑。他的剑跟他的罐子一样，擦得很干净。',
  enemies: [{ id: 'laurens' }],
  noAwe: true,
  xp: 1500,
  specials: [SP_JARS],
  win: { effects: ['flag laurens_stopped'], goto: 'f_09c' },
  lose: { effects: ['hp 1', 'flag gurzan_soul_taken', 'world unburied +1', { if: 'party.ushka', then: ['companion -ushka', 'flag ushka_left', 'flag f_ushka_chased'] }], goto: 'f_10' },
};

// ---- f_09：站到另一边
const SIDED = {
  title: '站到另一边',
  intro: '蓝牙看见你从对面走过来，把盾往上提了一寸。他没喊你的名字。',
  enemies: [{ id: 'marcher_veteran', n: 3, name: '边区老兵' }, { id: 'bluetusk' }],
  allies: [{ id: 'gurzan' }],
  xp: 2000,
  win: { effects: ['flag f_sided_won'], goto: 'f_10' },
  lose: { effects: ['hp 1'], goto: 'f_10' },
};

export const SCENES = {
  f_01: {
    id: 'f_01',
    title: '十一年，一口气',
    chapter: '终章 · 卡斯托纳斯，又一次',
    loc: '东坎诺 · 往卡斯托纳斯的路上',
    date: '1472年奈拉月1日',
    text: [
      '出了林子，板车往东走了九天。路边的里程石是卡斯塔诺人凿的，字叫兽人拿刀刮过，又叫人拿炭描了回来。',
      { if: 'flag.garaele_left', text: '到头一个岔路口，加莱尔下了车。她把册子夹在胳膊底下，往西走，没回头。' },
      { if: 'flag.f_ushka_quit', text: '过渡口的时候乌什卡下了车。她把那根刻满了道的木签插在车帮上，往南走了。' },
      '白墙外头最后一个岔路口支着个草棚。棚前倒扣着一只酒桶，桶上站着个泰卢姆喊报人，蓝褂子，嗓子是哑的。一条消息一个铜板，先给钱。你们给了他十一个，一年一个。',
      { if: '!flag.pixiebury_warned', speaker: '喊报人', text: '六七年，皮克精之墓！灰烬玫瑰会同马尔霍德的狮鹫，三天烧了城。古拉德腿上带着箭往西走，第二年就让了位。' },
      { if: 'flag.pixiebury_warned', speaker: '喊报人', text: '六七年，灰烬玫瑰去量皮克精之墓的城墙。量到一半，碎心者的人站满了墙头，没打起来。古拉德还在，还种地。' },
      { if: 'flag.proof_kept || (!flag.proof_bardswood && !flag.proof_moon && !flag.proof_published)', speaker: '喊报人', text: '六八年，新任大魔导师就职。西尔加里昂家的法师拿预言术演了王座厅那一晚：背后一刀，窄刃。台下的选帝侯走了一半。' },
      { if: 'flag.proof_moon', speaker: '喊报人', text: '六八年，大魔导师就职，台上演了王座厅那一晚。伊斯特拉洛尔那边拿出一张按了手印的口供，跟台上一对，对上了。' },
      { if: 'flag.proof_bardswood', speaker: '喊报人', text: '六八年，大魔导师就职。西尔加里昂家的法师上台演了一场海战。台下有人说，原本排的不是这一出。' },
      { if: 'flag.proof_published', speaker: '喊报人', text: '六八年，大魔导师就职，台上演了王座厅那一刀。台下有人打哈欠，这一出酒馆里比划了十六年了。' },
      { speaker: '喊报人', text: '七〇年银现月，皇上中风，没了。{?flag.god_duel_emperor:临死前还跟人说，当年那回比剑是他让的。|}新皇是珍珠边地的人。威克斯眼下是块肥肉，拆不拆，看今年。' },
      { speaker: '喊报人', text: '最后一条不要钱：熊心古尔赞带着氏族到了白墙南边。六日之内，到南门。' },
      { if: 'is.god', speaker: '喊报人', text: '还有一条，也不要钱。说十一年前有个车上的神进了深林。有说死在里头了，有说那位就是林子。' },
      { if: 'is.immortal', text: '一队边区兵从路那头过来换岗，打头的白了头。{?party.ushka:乌什卡盯着他看。他年轻时候在门板桌边抢过她的盐，她认得那张脸。|他年轻时候在门板桌边抢过你们的盐。他不认得你们了。}' },
      { if: 'is.immortal && party.ushka', speaker: '乌什卡', text: '原来是这个滋味。你每回都是这样？' },
      { if: "origin == 'wex'", text: '你怀里那封没寄出的报告，抬头写着“呈陛下御览”。陛下死了两年。巴兹伍德先生还活着，今年九十九。' },
      { if: "origin == 'sons'", text: '罗吉尔六十六了，人在塔兰顿，入秋就没下过床。{?flag.rogier_pardoned:赦令早到了，他一回也没往西走。|}' },
    ],
    first: [
      { if: 'flag.garaele_leaving', then: ['companion -garaele', 'flag garaele_left'] },
      { if: 'party.ushka && approval.ushka <= -4', then: ['companion -ushka', 'flag ushka_left', 'flag f_ushka_quit'] },
      { if: 'flag.compact_none && !flag.pixiebury_warned', then: ['world embers +1'] },
      { if: '!flag.pixiebury_warned', then: ['world room -1'] },
      { if: 'flag.pixiebury_warned', then: ['rep clans +1'] },
      { if: '!flag.groundhawk_deed', then: ['world room -1'] },
      { if: 'flag.korgus_sold', then: ['world unburied +1'] },
      { if: 'flag.ghost_taken', then: ['world unburied +1'] },
      { if: 'var.rites < 4', then: ['world unburied +1'] },
      { if: 'flag.proof_kept', then: ['world peace -2'] },
      { if: 'flag.proof_moon', then: ['world peace -1'] },
      { if: 'flag.names_filed || flag.log_filed || flag.toll_story || flag.staff_fey', then: ['world word +1'] },
      { if: 'flag.blackbranch_deal', then: ['world word +1'] },
      { if: 'flag.compact_corintar', then: ['world scale +1'] },
      'rep throne -1',
      'quest q_southgate start',
    ],
    choices: [
      {
        text: '再给他一个铜板，问今年谁管卡斯托纳斯',
        once: true,
        effects: ['gold -1', 'flag f_asked_city'],
        result: [
          { if: 'flag.compact_none', speaker: '喊报人', text: '没人管。北城三条街三家收税，南城谁拳头大归谁。' },
          { if: 'flag.compact_league', speaker: '喊报人', text: '黑塔家。城门税十一年涨了两回，世家巡夜，巡得比税吏还勤。' },
          { if: 'flag.compact_corintar', speaker: '喊报人', text: '科琳塔尔。巡夜的披红斗篷，盾上画着剑，城里孩子都会唱她的歌。' },
          { if: 'flag.compact_free', speaker: '喊报人', text: '城约。还贴在旧集市的告示板上，书记换到第五任了。' },
          { if: 'flag.digger_safe', speaker: '喊报人', text: '锻炉街的老奥托格去年冬天死在乡下，死前一句没说，谁问都一样。' },
          { if: 'flag.digger_given', speaker: '喊报人', text: '锻炉街的老奥托格叫紫庭的人接走了，后来没人再见过。' },
          { if: 'flag.rose_chain_freed && !flag.pixiebury_warned', speaker: '喊报人', text: '皮克精之墓烧的时候，灰烬玫瑰的队伍里少了一串仆役。听说是二十八年前在路上叫人放了。' },
          { speaker: '喊报人', text: '六九年，死齿的斯劳死在自己人手里，碎心者帮的忙。{?flag.belgrak_saved:红宝石领那个背出来的矮人，今年带了一队人往这边走。|}{?flag.belgrak_lost:负怨者那一路进山二十二年，一个也没回来。|}{?flag.belgrak_struck:负怨者兵团分了家，一半人不认划过账的那个。|}' },
        ],
      },
      {
        text: '问他有没有人提过一支收尸队',
        once: true,
        effects: ['flag f_rumor_dead'],
        result: [
          { speaker: '喊报人', text: '提过。说早死在林子里了，十一年前的事。我喊过一回，没人给钱，后来就不喊了。' },
          { if: 'party.nixee', speaker: '妮克西', text: '规矩第四条：死了的人不还债，也不收账。咱们得赶紧进城露个脸。' },
        ],
      },
      { text: '赶车进城', goto: 'f_02' },
    ],
  },

  f_02: {
    id: 'f_02',
    title: '没屋顶的神殿',
    loc: '卡斯托纳斯 · 万神道',
    date: '1472年奈拉月1日傍晚',
    text: [
      '万神道两边的庙，十一年里修好了四座，剩下的还是没顶。阿坦那座在第七个门洞。那道军令还钉在门上，纸黄得发脆，四颗钉子锈出了四个圈。',
      '门槛上坐着个姑娘，十六岁，膝盖上搁着一块叠好的抹布。门背面四十一行粉笔字描过不知多少回，前四十行磨得发亮，最后一行灰扑扑的，没人碰过。',
      { if: 'party.tan', text: '阿坦在门口站了很久。姑娘先认出了他手里那截权杖头，然后才认出他。' },
      { speaker: '守庙的姑娘', text: '一天四十句。十一年，没断过。下雨天念得快一点。' },
      { if: 'party.tan', speaker: '阿坦', text: '四十句。好。' },
      { if: '!party.tan', speaker: '守庙的姑娘', text: '阿坦师傅呢？' },
      { if: 'party.tan && flag.tan_shielded', text: '墙上最后那一幅，是你替他念的，念得很慢。他只看了个大概。今晚他要整的。' },
      { if: 'flag.god_answered_for_him', text: '回来这一路，每天天亮你都听见一个姑娘的嗓子念晨祷，念到第四十句就停。现在你知道是谁了。' },
      { if: 'is.god', text: '她看了你一眼，没跪。十一年前她问过你是不是银龙，你说不是。她记着。' },
    ],
    first: [{ if: '!flag.tan_stayed', then: ['quest q_dragon done'] }],
    choices: [
      {
        text: '看看庙外头还有谁在听',
        once: true,
        check: { skill: 'insight', alt: ['perception'], dc: 15 },
        ok: { text: '墙根底下蹲着三个人：一个瘸腿的老兵，两个洗衣妇。姑娘念的时候她们天天来，十一年了，没进过门。', effects: ['flag f_listeners'] },
        fail: { text: '你只看见一只猫。第二天早上，你才发现墙根底下的土叫人蹲平了一块。' },
      },
      {
        text: '对阿坦说：去告诉拜王的人，丧事你来办',
        if: 'party.tan',
        effects: ['flag tan_told', 'world word +1', 'approval tan +2'],
        result: [
          { if: 'flag.tan_shielded', text: '你先把最后那一幅从头讲了一遍：杖，齐腕断了的胳膊，银披风，那团火，两行字。他一句也没打断。' },
          '他把权杖头搁在门槛上，说明天一早先去找各殿的人。然后他进去，把门背后最后一行字上的灰吹了吹。',
        ],
        goto: 'f_03',
      },
      {
        text: '跟阿坦约好：这件事不说',
        if: 'party.tan',
        effects: ['flag tan_silent'],
        result: [
          { if: 'flag.tan_shielded', text: '最后那一幅你没再讲。他也没再问。' },
          { speaker: '阿坦', text: '好。我接着念。四十句。' },
          '他从姑娘手里接过抹布，去擦供桌。擦完了，把抹布叠成三折，跟她叠的一样。',
        ],
        goto: 'f_03',
      },
      {
        text: '让阿坦照旧讲：银龙必再临',
        if: 'party.tan',
        effects: ['flag tan_forced', { if: 'approval.tan < 2', then: ['flag tan_morningstar', 'companion -tan'], else: ['approval tan -1'] }],
        result: [
          { if: 'flag.tan_morningstar', text: '他听完，点了点头，什么也没说。当夜他走了，庙门没锁。门槛上留着一行炭字：鸦王起码有回音。' },
          { if: '!flag.tan_morningstar', text: '他照办了。第二天一早他站在万神道口讲银龙必再临，讲得一字不差，讲完自己先走了。' },
        ],
        goto: 'f_03',
      },
      {
        text: '告诉她：他快回来了',
        if: '!party.tan && flag.tan_stayed',
        effects: ['var lies +1'],
        result: '她点点头，把抹布放回膝盖上，说那她再等等。她等惯了。',
        goto: 'f_03',
      },
      {
        text: '告诉她：他留在那边，守着一面墙',
        if: '!party.tan',
        effects: ['flag f_girl_told'],
        result: [
          { if: 'flag.tan_stayed', text: '她问那面墙上写着什么。你说了。她听完，回头看了一眼门背后的第四十一行。' },
          { if: '!flag.tan_stayed', text: '你说他走了，走得不远，只是不回这儿了。她没再问，起身去扫门槛。' },
        ],
        goto: 'f_03',
      },
      {
        text: '把门背后的第四十一行指给她看',
        if: '!party.tan',
        effects: ['flag f_girl_shown'],
        result: '她踮起脚，拿袖子把那一行的灰擦了。字还在，跟别的行一样清楚。她看完了，没念出声。',
        goto: 'f_03',
      },
    ],
  },

  f_03: {
    id: 'f_03',
    title: '门板桌，又一次',
    art: 'ev_multi_racial_merc',
    loc: '下城 · 旧集市边上的空地',
    date: '1472年奈拉月2日至5日',
    shop: {
      name: '先锋行会与钴蓝兵团的合铺',
      blurb: '两家合租一间铺面，账分两本。冈瑟的人管收钱，张口先问几分利。',
      stock: ['plate', 'hold_plate', 'corintar_shield', 'precursor_longsword', 'superior_healing_potion', 'scroll_mass_healing', 'stoneskin_potion'],
    },
    text: [
      '旧集市边上那块空地，十一年里砌了一圈矮墙，墙根堆着干花和旧盾。门板换过三扇，酒桶还是那两只，箍桶的铁条是新的。',
      '蓝牙坐东头，獠牙上那截蓝布洗得发白。四十七了，鬓角白了一片。阿罗莎如今管着混眼，坐他旁边不说话。多米尼克鬓角白了，身后站着一排剃了头的。洛朗腰上挂着一排罐子，罐口封着蜡。卡莉斯塔替她父亲坐着，小格里夫早不小了，他的狮鹫拴在矮墙外头。',
      '古尔赞六日到南门。这几天里你去见谁、告诉谁、求谁，各一回。',
      { if: 'flag.f_rumor_dead', text: '他们都听说你们死在林子里了。多米尼克头一个站起来，伸手捏了捏你的袖子。' },
      { if: 'flag.goblins_armed', text: '地下通道口站着两个地精，扛着二十八年前你们给的矛，矛杆截短了一截。他们说通道他们自己守。' },
      { if: 'flag.tilda_burned', text: '蒂尔达寄来一封信，就一行：密码本烧了，我现在谁也不欠（“谁也”两个字我描粗了）。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '古尔赞在南门外点了火，按氏族排。我数了，十四堆。' },
      { if: 'party.tan', speaker: '阿坦', text: '{?flag.tan_told:各殿的人我约在九日。来几个，不知道。|庙门我锁了，钥匙给了她。}' },
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第三十条：仗打起来以前把账收了。康原那张纸，就这几天办。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '上回这张桌子边上坐着十九个人，今天十一个。我记一下谁没来。' },
      { if: 'is.god', speaker: '蓝牙', text: '你一个人守得住南门。那我的人为什么还要去死。' },
      { if: 'is.god', text: '卡莉斯塔托人来问加冕的价钱，问得很客气，先问你收不收金冠。奈拉特的老祭司把名册翻到中间，指着一行空格给你看，旁边注着两个字：待收。' },
      { if: 'flag.avatar_carleon', text: '卡莉斯塔替她父亲问你好。那年你替他作保当化身，到今天他的爪子和尾巴都没长出来。' },
      { if: 'flag.avatar_gryf', text: '小格里夫冲你点了一下头。阿德安的祭司那年相中过他，保是你作的。' },
      { if: 'flag.god_tried_raise', text: '蓝牙还是不跟你单独待在一处。今天他让阿罗莎坐在你们中间。' },
      { if: 'flag.god_sided_throne', text: '桌边有人小声说，这位在安本科斯特替皇帝挡过刀。说完往旁边挪了半个屁股。' },
    ],
    first: [{ if: 'flag.goblins_armed', then: ['flag underpass_held'] }],
    choices: [
      {
        text: '去找多米尼克，把墙上的事讲给他听',
        once: true,
        effects: ['flag told_dominic', 'world word +1', 'world scale +1', 'rep corintar +1', { if: "origin == 'corintar'", then: ['rep corintar +1'] }],
        result: [
          { speaker: '多米尼克', text: '墙上有没有她？' },
          '你说没有。他点点头，把这一句也记进了册子。',
          { if: 'flag.testimony_hers', text: '他翻到二十七年前那一页。你那天说的是：她是自己选的那一下。他拿指甲在那行底下划了一道。' },
          { if: 'flag.testimony_host', text: '他翻到二十七年前那一页。你那天说的是：功在全军。他看了很久，没划。' },
          { if: 'flag.testimony_king', text: '他翻到二十七年前那一页。你那天替一个小祭司问了一句：王在哪儿。他说这句现在有答案了，他得改一改那一页的批注。' },
          { if: 'flag.creed_delivered', text: '他说那本信条在安本科斯特的神殿区如今有人抄。抄错了一个字，他还没去改。' },
          { if: 'is.god', text: '临走他照旧问了一遍你和她是什么关系。你答完，他也记下了。' },
        ],
      },
      {
        text: '先去神殿，关起门讲给主祭们',
        once: true,
        effects: ['flag temples_first', 'world word +1', 'world scale -1', 'rep temples +1'],
        result: '主祭们让你在偏殿等了一个时辰。门关上以后，他们头一句问的是：还有谁知道。',
      },
      {
        text: '去告诉蓝牙',
        once: true,
        effects: ['flag f_told_bluetusk', { if: "origin == 'corintar'", then: ['rep corintar +1'] }],
        result: [
          { speaker: '蓝牙', text: '别跟我讲谁升了谁的天。告诉我南门缺多少人。' },
          '你报了个数。他让人去北城叫边区老兵，又让人去烧水。',
        ],
      },
      {
        text: '请乌什卡缠上白布，去古尔赞的火边说那句话',
        if: 'flag.dookanil_known && party.ushka',
        once: true,
        effects: ['flag ushka_spoke', 'world embers -2', 'rep clans +1', 'approval ushka +1'],
        result: [
          '她缠上白布，一个人出了南门。半夜回来，袖子上有血，不是她的。',
          { speaker: '乌什卡', text: '说了。造我们的人不配我们替他死。灭了三堆火。' },
        ],
      },
      {
        text: '自己缠上白布，去古尔赞的火边说那句话',
        if: 'flag.dookanil_known && !party.ushka',
        once: true,
        check: { skill: 'persuasion', alt: ['intimidation'], dc: 17, mods: [{ if: "origin == 'tide'", n: 2, why: '火边有人认得你' }, { if: 'is.greenskin', n: 2, why: '你是绿皮' }, { if: 'flag.road_gurzan', n: 1, why: '你走过他那条路' }] },
        ok: { text: '你说到“造我们的人”，火边有个老兵把手里的骨头放下了。天亮以前，灭了三堆火。', effects: ['flag ushka_spoke', 'world embers -2', 'rep clans +1'] },
        fail: { text: '你刚开口，就被人拿火棍从火边捅了出去。回来的路上你数了数，肋骨断了两根。', effects: ['damage 5d8'] },
      },
      {
        text: '请阿罗莎上桌，算一家',
        once: true,
        req: 'rep.clans >= 1',
        reqText: '氏族得先认你们这张桌子',
        effects: ['flag arosha_at_table', 'world room +1', 'rep league -1'],
        result: '阿罗莎把凳子往门板边上挪了一尺，算是坐上来了。卡莉斯塔起身，去别处喝水。',
      },
      {
        text: '找瓦丽娜借白骨守南门',
        once: true,
        req: 'world.unburied >= 7 || flag.korgus_sold',
        reqText: '瓦丽娜手里得有够数的料',
        effects: ['flag bones_at_gate', 'world unburied +2', { if: 'party.ushka', then: ['approval ushka -2'] }],
        result: [
          { speaker: '瓦丽娜', text: '三百具，现成的，站得直。不吃饭，不要饷。理论上不咬人。' },
          { if: 'party.ushka', speaker: '乌什卡', text: '第二回。' },
          { if: 'party.ushka && flag.ushka_warned', text: '十一年前她说过一回。这回她没往下说，把锤子从腰上解了下来。' },
        ],
      },
      {
        text: '替妮克西把康原的事了结',
        if: '(party.nixee || flag.toll_nixee) && flag.groundhawk_deed && world.room >= 4',
        once: true,
        effects: ['quest q_debt done', { if: 'party.nixee', then: ['approval nixee +1'] }],
        result: '{?party.nixee:蓝牙在地契上又盖了一回印。妮克西把欠条撕成两半，一半塞给你。|你把那张欠条拿给蓝牙看。他在地契上又盖了一回印。你把欠条撕成两半，一半塞进车帮的缝里。}',
      },
      {
        text: '替妮克西去讨康原的地契',
        if: '(party.nixee || flag.toll_nixee) && !(flag.groundhawk_deed && world.room >= 4)',
        once: true,
        effects: ['quest q_debt stage 3', { if: 'party.nixee', then: ['approval nixee -1'] }],
        result: '地契还是没下来。灰烬玫瑰今年又去量了一回地。{?party.nixee:妮克西在账本上又记了一笔，笔尖戳破了纸。|你在欠条背面记了一笔：没办成。}',
      },
      {
        text: '把断权杖交给多米尼克',
        if: 'flag.staff_home && item.broken_scepter >= 1 && !flag.f_staff_done',
        once: true,
        effects: ['flag staff_to_dominic', 'flag f_staff_done', 'world scale +2', 'item -broken_scepter'],
        result: '他双手接过去，没拄，横着抱在怀里。杖头的碴子在他袖子上勾出一道线。',
      },
      {
        text: '把断权杖交给神殿',
        if: 'flag.staff_home && item.broken_scepter >= 1 && !flag.f_staff_done',
        once: true,
        effects: ['flag staff_to_temples', 'flag f_staff_done', 'world scale -2', 'item -broken_scepter'],
        result: '主祭们叫了四个人来抬，登记的名目写的是“来历待考”。',
      },
      {
        text: '把断权杖先留在车上',
        if: 'flag.staff_home && item.broken_scepter >= 1 && !flag.f_staff_done',
        once: true,
        effects: ['flag f_staff_done', 'flag f_staff_kept'],
        result: '你拿油布把它又裹了一层，塞在车板底下。车轴往下沉了一指。',
      },
      {
        text: '把那截盾带交给多米尼克',
        tag: '科琳的队伍',
        if: "origin == 'corintar' && item.shield_strap >= 1 && !flag.f_strap_done",
        once: true,
        effects: ['item -shield_strap', 'rep corintar +1', 'quest q_o_corintar done', 'flag f_strap_done'],
        result: '他把盾带搁在掌心里数了数铆钉孔，两个。他说要给它打一只匣子。',
      },
      {
        text: '把盾带留在自己身上',
        tag: '科琳的队伍',
        if: "origin == 'corintar' && item.shield_strap >= 1 && !flag.f_strap_done",
        once: true,
        effects: ['quest q_o_corintar done', 'flag f_strap_done'],
        result: '多米尼克看了那截皮子很久，没开口要。你把它缠回手腕上，缠了三圈。',
      },
      {
        text: '答应罗吉尔的人：到时候你去递那顶王冠',
        tag: '达梅里亚之子',
        if: "origin == 'sons' && !flag.f_crown_yes && !flag.f_crown_no",
        once: true,
        effects: ['flag f_crown_yes', 'rep moon +1', 'quest q_o_sons done'],
        result: '来的人是特里斯坦的儿子。他说少主的意思，王冠递给蓝牙，蓝牙不接就递给他大儿子。他没说再不接怎么办。',
      },
      {
        text: '回绝：那顶王冠你不递',
        tag: '达梅里亚之子',
        if: "origin == 'sons' && !flag.f_crown_yes && !flag.f_crown_no",
        once: true,
        effects: ['flag f_crown_no', 'rep moon -1', 'quest q_o_sons done'],
        result: '他没争，只把银月徽从胸口摘下来，又别了回去。',
      },
      {
        text: '把最后一封报告寄给巴兹伍德',
        tag: '皇帝的差事',
        if: "origin == 'wex' && !flag.f_report_done",
        once: true,
        effects: ['flag f_report_done', 'flag f_report_sent', 'rep throne +1', 'var honest_reports +1', 'quest q_o_wex done'],
        result: '你把抬头的“陛下”划了，改成“巴兹伍德先生”。信鸽是先锋行会的，按里程收钱。',
      },
      {
        text: '把报告交给城约的书记，钉在告示板上',
        tag: '皇帝的差事',
        if: "origin == 'wex' && !flag.f_report_done",
        once: true,
        effects: ['flag f_report_done', 'flag f_report_clerk', 'rep companies +1', 'rep throne -1', 'quest q_o_wex done'],
        result: '书记念了一遍，念到“城门七座，各在谁手”那一段，围着看的人自己掰着手指头数。',
      },
      {
        text: '把报告烧了',
        tag: '皇帝的差事',
        if: "origin == 'wex' && !flag.f_report_done",
        once: true,
        effects: ['flag f_report_done', 'flag f_report_burned', 'quest q_o_wex done'],
        result: '火漆最后才化，冒了一股紫烟。巴兹伍德先生等了十一年，往后接着等。',
      },
      {
        text: '请兵团的人守地下通道',
        tag: '负怨者',
        if: "origin == 'grudge' && (flag.belgrak_saved || flag.entry_struck) && !flag.f_grudge_done",
        once: true,
        effects: ['flag underpass_held', 'flag f_grudge_done', 'quest q_o_grudge done'],
        result: '{?flag.belgrak_saved:贝尔格拉克带来的人报了数：二十二个，铲子二十二把。|基尔杜姆的人认你划过的那一笔。}一句话的事，他们当晚就下了通道。',
      },
      {
        text: '劝兵团的人守地下通道',
        tag: '负怨者',
        if: "origin == 'grudge' && !flag.belgrak_saved && !flag.entry_struck && !flag.f_grudge_done",
        once: true,
        check: { skill: 'persuasion', dc: 16, adv: 'is.dwarf', mods: [{ if: 'rep.companies >= 3', n: 2, why: '诸团认你们的账' }] },
        ok: { text: '兵团的老兵把账本翻到最后一页，添了一行：卡斯托纳斯，地下通道，守一夜，不收钱。', effects: ['flag underpass_held', 'flag f_grudge_done', 'quest q_o_grudge done'] },
        fail: { text: '他们说这笔账没人立过字据。你走的时候，有人在背后把账本合上了。', effects: ['rep companies -1', 'flag f_grudge_done', 'quest q_o_grudge done'] },
      },
      {
        text: '托马布格带话：那条路还作数',
        tag: '退潮的人',
        if: "origin == 'tide' && !flag.f_tide_done",
        once: true,
        effects: ['flag f_tide_done', 'flag f_tide_kept', 'rep clans +1', { if: 'flag.road_gurzan', then: ['world embers +1'] }],
        result: '{?flag.road_gurzan:马布格托人回话：熊心在火边给你留了个位子。|马布格托人回话：知道了。}蓝牙那份名单上，你的名字后头多了一个记号。',
      },
      {
        text: '托马布格带话：那条路不作数了',
        tag: '退潮的人',
        if: "origin == 'tide' && !flag.f_tide_done",
        once: true,
        effects: ['flag f_tide_done', 'flag f_tide_broke', 'rep clans -1', 'rep corintar +1'],
        result: '马布格没回话。第二天有人在车帮上放了一节断链，链环磨得发亮，是他的。',
      },
      {
        text: '去修地下通道口的闸',
        tag: '矮人',
        if: "is.dwarf && origin != 'grudge' && !flag.underpass_held",
        once: true,
        check: { skill: 'persuasion', alt: ['athletics'], dc: 17, adv: 'is.dwarf' },
        ok: { text: '闸是巴尔加尔的手艺，齿轮少了两个齿。你拿铅补上了，又说动了城约的书记派人守着。', effects: ['flag underpass_held'] },
        fail: { text: '齿轮补上了，守闸的人没找着。闸板落下来的时候砸了你的手。', effects: ['damage 2d6'] },
      },
      { text: '在车边睡一整夜', once: true, effects: ['rest long'], result: '你们轮流守车。天亮的时候，矮墙根底下多了两个面饼，不知道谁放的。' },
      { text: '该见的都见了', goto: 'f_04' },
    ],
  },

  f_04: {
    id: 'f_04',
    title: '来要这句话的人',
    art: 'ev_castellos_is_dead',
    loc: '下城 · 板车边',
    date: '1472年奈拉月5日夜',
    text: [
      '消息走得比板车快。天一黑，车边来了五拨人，各提各的灯。',
      '头一拨是多米尼克的人，三个剃了头的，要你们明天就在那块空地上宣讲。第二拨是阿德安的祭司，洛伦特口音，要你们什么也别讲，等各殿议定。编年史家会来的人背着一块包了布的印版。铁杖骑士团只来了一个学徒，十五六岁，手腕上缠着一串指骨。',
      { speaker: '铁杖的学徒', text: '瓦丽娜导师让我问一句：椅子既然空着，有本事的坐上去，算不算僭越？理论上不算。' },
      '最后一位是世家的元老，戴着银镯子，开口先说了一句古卡斯塔诺语。他出的价最高，没说买去做什么。',
      { if: 'flag.sightings_exposed', text: '学徒说，城里人还记得那年你们当众揭了三起银龙现身的底。他们管你们叫“不收神迹钱的”。' },
      { if: 'flag.wall_rubbed', text: '拓片摊在车板上，四张纸。{?flag.war_of_two_seen:二人之战那一幅压在最底下，杜卡涅尔的名字朝下。|}几拨人都伸着脖子看最上面那张。' },
      { if: 'flag.dookanil_mocked', text: '学徒还说，山里那句话早传开了，传的是笑话的版本：兽人的神是个精灵。城里人笑过了，就不大当真。' },
      { if: 'is.god', text: '五拨人都先看你，再看车。几位祭司给你行的礼各不一样，腰弯得也不一样深。' },
    ],
    choices: [
      {
        text: '把墙上的事交给编年史家会刻版',
        if: '!flag.f_refused',
        once: true,
        effects: ['flag told_printed', 'world word +3', { if: 'world.word >= 7', then: ['world peace -1'] }, { if: 'world.word >= 8', then: ['world peace -1'] }, { if: 'world.word >= 9', then: ['world peace -1'] }, { if: 'world.word >= 10', then: ['world peace -1'] }],
        result: '印版当夜就开工，背面刻那一幅，正面刻字。编年史家会的人说泰卢姆的喊报人按字收钱，这一版他们包了。',
      },
      {
        text: '把东西卖给那位元老',
        if: '!flag.f_refused',
        once: true,
        effects: ['flag sold_morningstar', 'gold +1500', 'world word +1', 'rep temples -2', 'approval tan -2', 'approval garaele -2'],
        result: [
          '他付的是阿斯拉银行的票子，十五张，每张一百。他把东西收进袖子，朝你点了点头，跟买了一头骡子一样。',
          { if: 'party.garaele', speaker: '加莱尔', text: '我只管记。这一笔我也记。' },
        ],
      },
      {
        text: '都回绝，让他们各自回去',
        if: '!flag.told_printed && !flag.sold_morningstar',
        once: true,
        effects: ['flag f_refused'],
        result: '五盏灯走了四盏。元老的那盏在巷口停了一会儿，才灭。',
      },
      {
        text: '看看那位元老的袖口',
        once: true,
        check: { skill: 'insight', alt: ['perception'], dc: 16, mods: [{ if: 'flag.morningstar_hint', n: 20, why: '你在萨什部见过这种做派' }] },
        ok: { text: '他袖口的里衬是黑的，缝着一根鸦羽。元老会里夜里另拜一位的，就这么几个。', effects: ['flag f_crow_seen'] },
        fail: { text: '他的袖口很干净，银镯子擦得发亮。你只记住了他身上有股樟脑味。' },
      },
      {
        text: '去边区兵的火堆边，把那句话拦下',
        if: 'flag.dookanil_told && world.word >= 5',
        once: true,
        check: { skill: 'persuasion', alt: ['intimidation'], dc: 17, mods: [{ if: 'rep.corintar >= 3', n: 2, why: '科琳塔尔的人认你' }, { if: 'flag.shout_answered', n: 1, why: '北要塞应过你' }] },
        ok: { text: '你蹲在火边，把墙上那一幅从头讲了一遍：画的是精灵，打的是精灵，跟城外那些兽人没关系。说到第三遍，有人往火里吐了口痰，换了个话头。', effects: ['flag f_slur_stopped'] },
        fail: { text: '他们听你讲完，有个人拍了拍你的肩膀：说得好，所以是他们的神杀了咱们的王。第二天这句话到了第三个火堆。', effects: ['flag skyking_slur', 'world embers +2', 'rep clans -1'] },
      },
      {
        text: '去车尾，那儿还坐着一个人',
        effects: [{ if: 'flag.dookanil_told && world.word >= 5 && !flag.f_slur_stopped && !flag.skyking_slur', then: ['flag skyking_slur', 'world embers +2', 'rep clans -1'] }],
        result: [{ if: 'flag.skyking_slur', text: '边区兵的火堆那边有人在嚷。嚷的是一句新话：他们的神杀了咱们的王。' }],
        goto: 'f_04b',
      },
    ],
  },

  f_04b: {
    id: 'f_04b',
    title: '一页纸',
    text: [
      '车尾坐着个老妇人，膝盖上搁着一张木头面具。面具没有脸，只开了两个眼洞。她是阿格拉多斯教团的人，等了一晚上，没跟别的几拨人说过话。',
      '她带来的只有一页羊皮纸，一角烧焦了。上面是一则很老的预言，十二句。东墙的火，西去的车，回来的路，血腐阶梯上的三个时辰。科琳一步一步，全应了。最后一句写着一把剑，别的没写。',
      { speaker: '老妇人', text: '二十七年前我们在帐篷里讲过半句，多米尼克听进去了。这是整的。我们的神死了，听不见祷告。他留下的话倒灵。' },
      { if: 'party.garaele', text: '加莱尔把那页纸凑到灯底下看了很久。她说这种鞣法是三百年前的。' },
      { if: 'party.tan', speaker: '阿坦', text: '十二句。她一句也没落下。' },
      { if: 'is.god', text: '老妇人看你，像看一处抄错了的经文。' },
      { if: 'is.god', speaker: '老妇人', text: '纸上没有你。我从头找过两遍。' },
    ],
    first: ['flag prophecy_known', 'codex agrados_prophecy', 'codex cult_of_agrados'],
    choices: [
      {
        text: '交给神殿，当众念出来',
        effects: ['flag prophecy_told', 'world scale -2'],
        result: '神殿在万神道口贴了一张告示，十二句，一句一行。头一个停下来念的是个科琳塔尔的兵，念到第六句，他把告示撕了一个角。',
        goto: 'f_05',
      },
      {
        text: '还给她，让教团自己定',
        effects: ['flag f_proph_back'],
        result: '她把纸卷起来，塞进面具后头的夹层里。她说教团议事要烧一堆大火，烧完了再说。',
        goto: 'f_05',
      },
      {
        text: '把它烧了',
        effects: ['flag f_proph_burned', 'approval garaele -2'],
        result: [
          '羊皮烧起来比纸慢，一股焦毛味。老妇人看着它烧完，把灰拢在手心里带走了。',
          { if: 'party.garaele', text: '加莱尔一句话没说。她把已经抄下来的那十二句，从册子上撕了下来，放进了自己的衣襟里。' },
        ],
        goto: 'f_05',
      },
    ],
  },

  f_05: {
    id: 'f_05',
    title: '晨星会的手',
    loc: '下城 · 地下通道',
    date: '1472年奈拉月5日深夜',
    text: [
      '后半夜，车上少了东西。{?flag.wall_rubbed:拓片的油布包|装证物的木箱}叫人割开了，割口很齐，刀是好刀。{?item.broken_scepter >= 1:断杖还在，太沉，扛不走。|}{?flag.sold_morningstar:卖出去的那一半他们早拿了，这回是来拿剩下的。|}',
      '脚印往下城去，到银瀑底下钻进了排水沟。二十八年前，妮克西就是从这条沟里探出头来的。',
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第九条：偷我的，我追。这条沟我熟，左手第三个口子通地下通道，第五个口子淹水。' },
      { if: 'is.god', text: '他们知道车上坐着谁，还是来了。晨星会的人过血门礼，光着身子空着手进一间屋，最后一个站着的才算数。他们怕的东西不多。' },
    ],
    first: ['codex morningstar'],
    choices: [
      {
        text: '钻进排水沟，追',
        check: { skill: 'athletics', dc: 16, party: true, mods: [{ if: 'party.nixee', n: 2, why: '妮克西认得路' }] },
        ok: { text: '沟里的水没过膝盖。你们赶在头一个岔口前头看见了他们的灯。', goto: 'f_05b' },
        fail: { text: '你在一段塌了顶的地方卡住了，退回去绕了一大圈。灯早不见了。', effects: ['var f_miss +1'], goto: 'f_05b' },
      },
    ],
  },

  f_05b: {
    id: 'f_05b',
    title: '排水沟',
    text: [
      '沟壁是巴尔加尔的人砌的，石缝里长着白毛。头顶上隔一段有个铁箅子，漏下来北城的灯油味和南城的马尿味。',
      '前头分了三个口子。水面上漂着一片黑羽，打着转，不往哪边去。',
      { if: 'party.ushka', speaker: '乌什卡', text: '鞋印。左边那个往里拐，重。他们扛着东西。' },
    ],
    choices: [
      {
        text: '看水，看鞋印，挑一个口子',
        check: { skill: 'perception', alt: ['survival'], dc: 15, party: true },
        ok: { text: '左手第三个口子的沟壁上有一道新划的刀痕，跟车上那道割口一样齐。', goto: 'f_05c' },
        fail: { text: '你挑的口子尽头是一面墙。回头的时候，你听见远处有人在笑。', effects: ['var f_miss +1'], goto: 'f_05c' },
      },
    ],
  },

  f_05c: {
    id: 'f_05c',
    title: '地下通道',
    text: [
      '通道比排水沟宽，能并排走两辆车。墙上的火把架子空着，只有一盏灯，挂在一扇铁门的门环上。',
      '元老在门口等你们，银镯子推到了胳膊肘上。三个刀手站在他两边，刀都没出鞘。',
      { speaker: '晨星会的元老', text: '椅子空了，总得有人看着。你们看了二十八年，也该歇歇了。' },
      { if: 'flag.tan_morningstar', text: '阿坦站在他们后头的台阶上。他没动手，也没看你。' },
      { if: 'var.f_miss >= 2', text: '你们到得太晚。他们已经排好了位置。' },
    ],
    choices: [
      {
        text: '跳过前头那段塌了的地，扑上去',
        if: 'var.f_miss == 0',
        check: { skill: 'acrobatics', dc: 15, party: true },
        ok: { text: '你落地的时候，离元老只剩三步。', combat: { ...MORNINGSTAR, intro: '你们先到了。刀手的刀才出鞘一半。' } },
        fail: { text: '你落在一摊烂泥里，崴了脚。好在他们也没想到你们来得这么快。', combat: { ...MORNINGSTAR, intro: '刀手们散开，把你们围在灯底下。' } },
      },
      {
        text: '跳过前头那段塌了的地，扑上去',
        if: 'var.f_miss == 1',
        check: { skill: 'acrobatics', dc: 15, party: true },
        ok: { text: '你落地的时候，离元老只剩五步。', combat: { ...MORNINGSTAR, intro: '刀手们散开，把你们围在灯底下。' } },
        fail: { text: '你落在烂泥里。刀手们比你先站稳。', effects: ['damage 2d8'], combat: { ...MORNINGSTAR, intro: '他们先动的手。头一刀是冲你膝盖来的。' } },
      },
      {
        text: '往前走，走到灯底下去',
        if: 'var.f_miss >= 2',
        effects: ['damage 2d8'],
        combat: { ...MORNINGSTAR, intro: '他们先动的手。头一刀是冲你膝盖来的。' },
      },
    ],
  },

  f_05d: {
    id: 'f_05d',
    title: '天亮以前',
    text: [
      { if: '!flag.f_robbed', text: '元老倒在铁门口，袖子里掉出一把黑羽。东西都在，{?flag.wall_rubbed:拓片湿了一角|木箱泡了水}。刀手跑了一个，往通道深处去了。' },
      { if: 'flag.f_robbed', text: '你们醒过来的时候，东西没了。天亮以前，奥特拉克元老的孙子把它们装在一只柳条筐里送了回来，一样不少。他说赎金他先垫了，回头再算。' },
      '你们从排水沟里爬出来，天还没亮。银瀑底下有人在洗衣裳，看了你们一眼，接着洗。',
      { if: 'flag.tan_morningstar', text: '台阶上没有人。阿坦站过的地方，留着两个干的鞋印。' },
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第十一条：抓贼的钱算在贼头上。这一趟，我记在晨星会账上。' },
    ],
    choices: [
      {
        text: '回答妮克西：空着的椅子，谁来看',
        tag: '无冕',
        if: "faction == 'crownless' && party.nixee",
        effects: ['approval nixee +1'],
        result: [
          { speaker: '妮克西', text: '你说椅子空着天也没塌。今晚差一点就塌了。下回，谁来看？' },
          '你说你们看。她想了想，在账本上记了一笔，没写价钱。',
        ],
        goto: 'f_06',
      },
      {
        text: '回答乌什卡：空着的椅子，谁来看',
        tag: '无冕',
        if: "faction == 'crownless' && !party.nixee && party.ushka",
        effects: ['approval ushka +1'],
        result: [
          { speaker: '乌什卡', text: '椅子空着，头一个伸手的是这种人。下回谁来看？' },
          '你说你们看。她把锤子上的泥擦了，说那得多几个人。',
        ],
        goto: 'f_06',
      },
      { text: '回车上，睡两个时辰', effects: ['rest short'], goto: 'f_06' },
    ],
  },

  f_06: {
    id: 'f_06',
    title: '南门',
    loc: '卡斯塔诺白墙 · 南门',
    date: '1472年奈拉月6日',
    text: [
      '天没亮，你们就到了南门。白墙是卡斯塔诺人修的，门洞能并排过四辆车。铁闸三百年没落过，绞盘上的油是昨天夜里抹的，守门的边区兵说抹了三遍。',
      '墙头上看得见南边的营火。昨夜十四堆，今早{?world.embers <= 3:剩下三堆，都灭着|一堆没少，还多了两堆}。',
      { if: 'flag.bones_at_gate && world.embers >= 4', text: '门洞里站着人，一排一排的，不出声。走近了看，没有一个喘气的。' },
    ],
    first: ['quest q_southgate stage 2'],
    choices: [
      { text: '上墙头，看来的是谁', if: 'world.embers <= 3', goto: 'f_06c' },
      { text: '走进门洞里去', if: 'world.embers >= 4 && flag.bones_at_gate', goto: 'f_06b' },
      { text: '上墙，等号角', if: 'world.embers >= 4 && !flag.bones_at_gate', goto: 'f_06d' },
    ],
  },

  f_06b: {
    id: 'f_06b',
    title: '三排白骨',
    art: 'ev_undead_army',
    text: [
      '门洞里站着三排白骨，是瓦丽娜的。矛是新的，骨头是旧的，有人的，也有兽人的，拿铁丝在关节上缠了两道。瓦丽娜坐在墙头的一张折凳上，膝盖上摊着账本。',
      '号角响过三遍，氏族冲到门洞前头，又退了回去。头一排的人看清了矛后头是什么。没有一个活人上墙。',
      { if: 'party.ushka', text: '仗打完了，乌什卡走进门洞。她从第一排第一具敲起，锤子落在颅顶上，一下一具。两边墙头上的人都在看。敲到最后一具，她把锤子插回腰里，出了南门，往南走了。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '第二回。' },
      { if: '!party.ushka', text: '瓦丽娜点完数，在账本上记了一笔：三百具，折了七具，节省。' },
    ],
    first: ['flag southgate_held', 'world unburied +2', 'xp 1800', { if: 'party.ushka', then: ['companion -ushka', 'flag ushka_left'] }],
    next: 'f_07',
  },

  f_06c: {
    id: 'f_06c',
    title: '缠白布的使者',
    text: [
      '晌午来的是使者，七个人，缠着白布，没带兵器。走在头一排的是马布格，断了一根獠牙。二十八年前他在板车上抬人，从不问是哪边的。',
      { speaker: '马布格', text: '熊心让我说一句：十一日，他要到那块空地上去坐一坐。不带刀。' },
      '他说完就站在那儿，等城门上回话。门洞里的边区兵把矛放低了一点，又抬了起来。',
      { if: 'party.ushka', speaker: '乌什卡', text: '马布格。你还活着。' },
      { if: 'party.ushka', speaker: '马布格', text: '你也是。骨头还是你磨？' },
    ],
    first: ['flag southgate_held'],
    choices: [
      {
        text: '请马布格进门洞喝碗热汤',
        effects: ['rep clans +1', 'rep league -1'],
        result: '他喝了两碗，碗底舔干净才还回来。边区兵的伙夫看着他喝，没说话，又给盛了半碗。',
        goto: 'f_07',
      },
      {
        text: '收下这句话，送他们回去',
        effects: ['rep league +1'],
        result: '马布格点点头，领着人往南走。走出一箭地，他回头冲车边挥了一下手。',
        goto: 'f_07',
      },
    ],
  },

  f_06d: {
    id: 'f_06d',
    title: '南门之战',
    art: 'load_5',
    text: [
      '号角是晌午响的，三长一短。氏族的人从南边的坡上下来，不跑，走着来，一排一排。打头的是碎剑者氏族的先锋酋长，斧子上缠着红布。',
      '他们身后的老兵大多二十八年前跟过杜坎森。见过刀枪不入的人，就不大怕别的了。',
      { if: "world.embers >= 8", text: '坡上的旗数不过来。十四个氏族都到了，还有几个你没见过的。' },
      { if: 'flag.underpass_held', text: '地下通道那头有人敲了三下墙。一队想从底下摸进城的，叫守通道的人堵在了里头。' },
      { if: 'flag.skyking_slur', text: '墙头上有个边区兵冲下面喊：你们的神杀了我们的王。下面的人听懂了，喊回来的话更难听。' },
      { if: 'is.greenskin', text: '对面头一排有人喊你的名字，喊的是氏族里的叫法。' },
      { if: "origin == 'tide'", text: '马布格在对面头一排。他也看见你了。' },
      { if: 'is.god', text: '对面的人都知道墙上站着谁。他们没停。' },
    ],
    choices: [
      {
        text: '应他一声',
        tag: '绿皮',
        if: 'is.greenskin',
        once: true,
        effects: ['rep clans +1', 'rep league -1'],
        result: '你应了。对面那人愣了一下，把斧子换到了左手。墙头上的边区兵往旁边挪了一步。',
      },
      {
        text: '一个人出南门',
        tag: '神',
        if: 'is.god',
        effects: ['flag southgate_held', 'flag god_held_gate', 'world room -2', 'rep clans -3', 'unflag arosha_at_table'],
        result: [
          '你让他们把闸升起来，一个人走了出去。仗打到太阳偏西就完了。城里没死一个人。',
          '晚上阿罗莎把凳子从门板边上搬走了。她说南门外头那些人，有一半是她小时候认得的。',
          { speaker: '蓝牙', text: '守住了。往后城里的人会觉得，守城不是他们的事。' },
        ],
        goto: 'f_07',
      },
      { text: '跟阿罗莎的人守左边的垛口', if: `${B47} && ${NU} && ${CAN_AROSHA}`, combat: { ...SG, intro: IN_AROSHA, enemies: E_SG, allies: AL_AROSHA, lose: SG_LOSE } },
      { text: '跟阿罗莎的人守左边的垛口', if: `${B47} && ${UH} && ${CAN_AROSHA}`, combat: { ...SG, intro: IN_AROSHA, enemies: E_SG_U, allies: AL_AROSHA, lose: SG_LOSE } },
      { text: '跟阿罗莎的人守左边的垛口', if: `${B8} && ${NU} && ${CAN_AROSHA}`, combat: { ...SG, intro: IN_AROSHA, enemies: E_SG8, allies: AL_AROSHA, lose: SG_LOSE_CITY } },
      { text: '跟阿罗莎的人守左边的垛口', if: `${B8} && ${UH} && ${CAN_AROSHA}`, combat: { ...SG, intro: IN_AROSHA, enemies: E_SG8_U, allies: AL_AROSHA, lose: SG_LOSE_CITY } },
      { text: '跟边区老兵一起堵门洞', if: `${B47} && ${NU} && ${CAN_MARCH}`, combat: { ...SG, intro: IN_MARCH, enemies: E_SG, allies: AL_MARCH, lose: SG_LOSE } },
      { text: '跟边区老兵一起堵门洞', if: `${B47} && ${UH} && ${CAN_MARCH}`, combat: { ...SG, intro: IN_MARCH, enemies: E_SG_U, allies: AL_MARCH, lose: SG_LOSE } },
      { text: '跟边区老兵一起堵门洞', if: `${B8} && ${NU} && ${CAN_MARCH}`, combat: { ...SG, intro: IN_MARCH, enemies: E_SG8, allies: AL_MARCH, lose: SG_LOSE_CITY } },
      { text: '跟边区老兵一起堵门洞', if: `${B8} && ${UH} && ${CAN_MARCH}`, combat: { ...SG, intro: IN_MARCH, enemies: E_SG8_U, allies: AL_MARCH, lose: SG_LOSE_CITY } },
      { text: '就你们几个，守住绞盘', if: `${B47} && ${NU}`, combat: { ...SG, intro: IN_ALONE, enemies: E_SG, lose: SG_LOSE } },
      { text: '就你们几个，守住绞盘', if: `${B47} && ${UH}`, combat: { ...SG, intro: IN_ALONE, enemies: E_SG_U, lose: SG_LOSE } },
      { text: '就你们几个，守住绞盘', if: `${B8} && ${NU}`, combat: { ...SG, intro: IN_ALONE, enemies: E_SG8, lose: SG_LOSE_CITY } },
      { text: '就你们几个，守住绞盘', if: `${B8} && ${UH}`, combat: { ...SG, intro: IN_ALONE, enemies: E_SG8_U, lose: SG_LOSE_CITY } },
      { text: '等，等他们自己退', if: 'world.embers < 4', effects: ['flag southgate_held'], result: '他们没攻。天黑以前，坡上的火灭了一半。', goto: 'f_07' },
    ],
  },

  f_07: {
    id: 'f_07',
    title: '试炼山，夜里',
    art: 'ev_big_star_in_sky',
    loc: '试炼山 · 誓石',
    date: '1472年奈拉月8日夜',
    text: [
      { if: 'flag.f_city_fell', text: '城破了。上山的路从北要塞后门起头，北要塞里只剩几个看门的。' },
      '上山的路从北要塞的后门起头。山上的法术 1020 年就干了。石图还在，宝石冢还在，第九道试炼那尊石像没了头，还跪着。',
      { if: 'flag.spirits_heard', text: '第六道试炼那两位树灵还在吵。年长的那位说，银的那位后来也上山来问过天。年轻的那位说他记错了，又说记错的是他自己。' },
      '誓石在山顶，比人矮，顶上叫人摸得发亮。誓词刻在背面，最后一句是：并永说真话。',
      '今晚有人想上去。你自己不能上，这是规矩，也是你们的行当：收尸队只管看着。',
      { if: 'flag.compact_league', speaker: '卡莉斯塔', text: '我父亲说他不想要。我想要。他八十一了，这话他说了三十年。' },
      { if: 'world.room >= 6', speaker: '阿罗莎', text: '我不想当王。我想让兽人在这座城里有个说得上话的。没人肯当，那我来。' },
      { if: 'party.tan', speaker: '阿坦', text: '卡斯坦就是在这山上见的银龙。他上来的时候，也是夜里。' },
    ],
    first: ['rest short'],
    choices: [
      {
        text: '回答：她的路是别人写的，算不算她的功',
        tag: '试炼派',
        if: "faction == 'tried' && flag.prophecy_known",
        once: true,
        effects: [{ if: 'party.tan', then: ['approval tan +1'], else: ['rep corintar +1'] }],
        result: [
          '{?party.tan:阿坦|年轻的那位树灵}问你：那页纸上十二句，她一句不落。照着走完的，算功劳，还是照本宣科。皇帝那场决斗，也是凭本事坐上的椅子。',
          '你说路是别人写的，腿是她的。{?party.tan:他想了一会儿，说这话他记下了。|树灵说这话它上回听过，在一千年前。}',
        ],
      },
      {
        text: '陪卡莉斯塔上山',
        req: 'flag.compact_league && rep.league >= 3',
        reqText: '城得归黑塔家，旧东坎诺得肯替她作保',
        effects: ['flag f_up_kalista'],
        goto: 'f_07b',
      },
      {
        text: '陪阿罗莎上山',
        req: 'world.room >= 7 && rep.clans >= 3',
        reqText: '兽人在这城里得有块站的地方，氏族得认她',
        effects: ['flag f_up_arosha'],
        goto: 'f_07b',
      },
      {
        text: '谁也不陪，带阿坦去看那句誓词',
        if: 'party.tan',
        effects: ['approval tan +1'],
        result: [
          '阿坦把灯举到誓石背面，一个字一个字往下念。念到最后一句，他停了停，又念了一遍。',
          { speaker: '阿坦', text: '并永说真话。卡斯坦家的皇帝，一个挨一个，都在这儿说过。' },
        ],
        goto: 'f_08',
      },
      {
        text: '谁也不陪，自己去摸一摸誓石',
        if: '!party.tan',
        effects: ['flag f_oath_touched'],
        result: '石头是凉的，顶上那块磨得比别处亮，是一千多年里一只一只手按出来的。你按了一下，下山了。',
        goto: 'f_08',
      },
    ],
  },

  f_07b: {
    id: 'f_07b',
    title: '头一道试炼',
    text: [
      '头一道试炼是卡斯坦十三世立的。他人称沉默者，立的这一道偏偏是喊。就一条：你冲北要塞喊一嗓子，要塞里得有人应。',
      '{?flag.f_up_kalista:卡莉斯塔|阿罗莎}站在山腰的石台上，冲着山下喊了一声。山下的灯都亮着，没有动静。',
      { if: 'flag.shout_answered', text: '你也在这儿喊过，二十七年前。那回北要塞应了。' },
    ],
    choices: [
      {
        text: '等着，看哪一家应',
        if: 'rep.league >= 3 || rep.corintar >= 3 || rep.clans >= 3',
        result: [
          { if: 'rep.league >= 3', text: '北要塞的箭楼上先应了一声，是世家的人，嗓子拖得很长，照古礼应的。' },
          { if: 'rep.corintar >= 3', text: '要塞西墙上应的是科琳塔尔的兵，十几个人一齐喊，喊的是剑与盾。' },
          { if: 'rep.clans >= 3', text: '要塞底下的棚户区也有人应，兽人话，就一个字：在。' },
          { if: 'flag.shout_answered', text: '应声的人里有一个后来上山来，说二十七年前这山上也有人喊过一嗓子。他那年是看门的。' },
        ],
        goto: 'f_07c',
      },
      {
        text: '你也喊，让山下的人听见',
        if: 'rep.league < 3 && rep.corintar < 3 && rep.clans < 3',
        check: { skill: 'persuasion', alt: ['performance', 'intimidation'], dc: 18, party: true, mods: [{ if: 'flag.shout_answered', n: 2, why: '北要塞应过你' }] },
        ok: { text: '你喊第二声的时候，北要塞的门楼上有人举起了灯，晃了三下。然后是第二盏，第三盏。', goto: 'f_07c' },
        fail: { text: '应声的是你们自己的人。山下要塞里有人笑，笑声顺着山坡传上来，旧东坎诺的人第二天都听说了。', effects: ['rep league -1'], goto: 'f_07c' },
      },
    ],
  },

  f_07c: {
    id: 'f_07c',
    title: '誓石',
    text: [
      '到山顶的时候已经过了半夜。{?flag.f_up_kalista:卡莉斯塔|阿罗莎}把手按在誓石上，你站在她身后，按规矩，你是见证。',
      '誓词是这样的：我誓守我土我民，至死方休；不以不义之争加于世。后面还有几句，最后一句是：并永说真话。',
      '山下来了些人，提着灯站成一圈。他们看的是她，也看你。见证人说的话算不算数，要看见证人自己说过什么话。',
      { if: 'var.lies >= 3', text: '人群里有人认得你。他的嘴动了动，没出声。' },
    ],
    choices: [
      {
        text: '替她作见证，当着这些人开口',
        effects: [{ if: 'flag.f_up_kalista', then: ['flag claimant_kalista'] }, { if: 'flag.f_up_arosha', then: ['flag claimant_arosha'] }],
        check: { skill: 'persuasion', dc: 17, party: false, mods: OATH_LIES },
        ok: { text: '你报了自己的名字、出身，和二十八年里抬过的人。没人打断你。她念完誓词，在誓石上按了手印。', goto: 'f_08' },
        fail: { text: '你说到一半，人群里有人喊：他自己就不说真话。有人笑了，笑声不大。她还是念完了誓词，按了手印。', effects: ['rep league -1'], goto: 'f_08' },
      },
    ],
  },

  f_08: {
    id: 'f_08',
    title: '万神道上的会',
    art: 'ev_castellos_is_dead',
    loc: '万神道 · 没屋顶的神殿前',
    date: '1472年奈拉月9日至10日',
    text: [
      { if: CONCLAVE, text: '帐篷是从先锋行会借的，帐杆插进了没屋顶的庙墙里。各殿的祭司挤在里头。多米尼克的人占了左边一溜长凳，阿德安的祭司坐右边。教团的老妇人坐在门口，膝上搁着面具。奥特拉克元老的孙子也来了，戴着同一只银镯子。' },
      { if: CONCLAVE, text: '{?party.garaele:加莱尔坐在最边上执笔，墨是她自己磨的。|执笔的是编年史家会派来的书记，笔尖削了三回。}要议的只有一句，是一位卡斯泰利尔口音的老祭司问出来的：神的丧事，该怎么办。' },
      { if: CONCLAVE + ' && flag.tan_told && party.tan', text: '阿坦站起来念晨祷。念到第四十句，他停下，坐回去了。帐篷里没人催他。' },
      { if: CONCLAVE + ' && party.garaele', speaker: '加莱尔', text: '我先写“据收尸队称”。等你们说完，我再看那个“据”字要不要划掉。' },
      { if: CONCLAVE + ' && flag.roll_told', text: '有个老祭司记得二十七年前会上念过的一句卷子：这五百年是我替他答的。他把这句又念了一遍。' },
      { if: CONCLAVE + ' && flag.rite_done', text: '有人问头一场丧事办过没有。办过，在故土，五个人，没有尸首。' },
      { if: CONCLAVE + ' && flag.god_held_gate', text: '有祭司提起南门那一天，说城里没死一个人。说到这儿他就不往下说了。' },
      { if: CONCLAVE + ' && (flag.god_judged_council || flag.god_avatar_claimed)', text: '{?flag.god_avatar_claimed:卡斯特洛斯的祭司还叫你王的化身，叫得很小声。|}{?flag.god_judged_council:有人提起二十七年前那回会，说那回是神自己开的。|}' },
      { if: CONCLAVE + ' && is.god', text: '议到那把椅子空了，满屋祭司都转过头来看你。有人请你裁决灰元元年的事。你答不了，那年你不在。他们把话摆在了桌面上：这把椅子，你要不要。你可以晚些再答。' },
      { if: CONCLAVE + " && faction == 'heirs'", speaker: '老祭司', text: '谱上写的是长子。谱上没写的事，算不算数？' },
      { if: '!(' + CONCLAVE + ')', text: '会没开成。帐篷搭了一半，各殿的人吵到一半就散了，长凳上只剩一顶落下的帽子。庙门口坐着你，和{?party.tan:阿坦|守庙的姑娘}。' },
    ],
    first: [{ if: CONCLAVE, then: ['flag conclave_held', { if: 'is.god', then: ['flag fourth_offered'] }] }],
    choices: [
      {
        text: '答老祭司：谱上没写的，也算',
        tag: '承嗣',
        if: `${CONCLAVE} && faction == 'heirs' && !flag.f_heirs_ans`,
        once: true,
        effects: ['flag f_heirs_ans', 'rep temples +1'],
        result: '他点点头，说那长子的事就好议了。左边长凳上有人咳嗽。',
      },
      {
        text: '答老祭司：谱上没写的，不算',
        tag: '承嗣',
        if: `${CONCLAVE} && faction == 'heirs' && !flag.f_heirs_ans`,
        once: true,
        effects: ['flag f_heirs_ans', 'rep corintar +1'],
        result: '他看了你很久，说那你今天来，是替谁说话。你说替死的那位。',
      },
      {
        text: '请会上只议一件事：他死了',
        if: CONCLAVE,
        effects: ['rep temples +1'],
        check: { skill: 'religion', alt: ['persuasion'], dc: 17, dis: 'flag.f_heirs_ans', mods: EVIDENCE },
        ok: { text: '议到天黑，记下了一行：卡斯特洛斯，诸神之王，殁。谁接那把椅子，今天不议。书记写完，把笔搁下了。', effects: ['flag f_c_dead'], goto: 'f_09' },
        fail: { text: '会上只肯记“据收尸队称”。那个“据”字写得比别的字都大。', goto: 'f_09' },
      },
      {
        text: '请会上认科琳以功继位',
        if: CONCLAVE,
        effects: ['rep corintar +1'],
        check: { skill: 'religion', alt: ['persuasion'], dc: 17, mods: EVIDENCE },
        ok: { text: '左边长凳上的人站起来一半。右边的人没动，记下来的那一行是：功可继位，待议。', effects: ['world scale +1'], goto: 'f_09' },
        fail: { text: '会上只肯记“据收尸队称”，后头那半句没记。多米尼克的人拍了拍长凳，坐下了。', goto: 'f_09' },
      },
      {
        text: '请会上认长子',
        if: CONCLAVE,
        effects: ['rep temples +1'],
        check: { skill: 'religion', alt: ['persuasion'], dc: 17, adv: 'flag.f_heirs_ans', mods: EVIDENCE },
        ok: { text: '右边的祭司们互相看了一眼。记下来的那一行是：长子当摄，待议。多米尼克没站起来，在册子上记了一笔。', effects: ['world scale -1'], goto: 'f_09' },
        fail: { text: '会上只肯记“据收尸队称”。阿德安的祭司说长子的事要回洛伦特去议。', goto: 'f_09' },
      },
      {
        text: '在庙门口坐一会儿，再走',
        if: '!(' + CONCLAVE + ')',
        effects: [{ if: 'party.tan', then: ['approval tan +1'] }],
        result: '{?party.tan:阿坦说他明天照旧念四十句。说完他靠在门框上睡着了。|姑娘说她明天照旧念四十句。}',
        goto: 'f_09',
      },
    ],
  },

  f_09: {
    id: 'f_09',
    title: '十一月十一日',
    art: 'ev_orc_with_axe',
    loc: '下城 · 旧集市边上的空地',
    date: '1472年奈拉月11日',
    text: [
      '二十八年前两个人倒下的地方，如今砌着一圈矮墙。卖咸鱼的摊子还在老位置，摊主换了一个，鱼还是那个咸法。',
      { if: 'world.embers <= 3', text: '古尔赞是晌午到的，只带了亲卫，十二个人，没披甲。他一只眼，半条胳膊，肩上搭着灰吻的皮。他走到门板桌边坐下，桌腿响了一声。' },
      { if: '!flag.southgate_held && world.embers >= 8', text: '城是昨天夜里破的。他的人没烧城，二十八年前也没烧。古尔赞走在头里，肩上搭着灰吻的皮，一只眼看着这块空地。你们站在矮墙边上，没人来管。' },
      { if: 'world.embers >= 4 && (flag.southgate_held || world.embers < 8)', text: '晌午，号角从南门一路响进来。古尔赞来了。他一只眼，半条胳膊，肩上搭着灰吻的皮。身后竖着{?flag.korgus_son:一面骨旗，杆头挂的是他父亲|嗜血者的旗，红布，什么也没画}。' },
      { speaker: '古尔赞', text: '我父亲死在那个卖咸鱼的摊子边上。我那年二十，站在三条街外头。他活着的时候，没人敢拿链子拴兽人。他倒下以后，有了。' },
      { if: 'flag.korgus_rite', text: '他看了一眼空地中间，那儿什么也没有。他身后的人也看。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '{?flag.korgus_rite:他父亲是我磨的，两天。他知道。|他父亲那副骨头没磨。他也知道。}' },
      { if: 'flag.road_gurzan', speaker: '古尔赞', text: '我等了你二十七年。' },
      { if: 'flag.gurzan_owes', text: '他朝车边点了一下头。那份情他记着。' },
      { if: 'flag.gurzan_grudge', text: '他没看车边。那笔仇他也记着。' },
      { if: 'flag.god_named_korgus || flag.god_denied_korgus || flag.god_of_the_tide', text: '{?flag.god_named_korgus:你当年当众说他父亲是杜坎的儿子。他今天把这句话带来了。|}{?flag.god_denied_korgus:你当年当众说他父亲不是杜坎的儿子。他今天也记着。|}{?flag.god_of_the_tide:他父亲的位子，你接过一回。他想看看你还坐不坐。|}' },
      { if: 'is.god', speaker: '古尔赞', text: '我父亲也刀枪不入，直到那天。我来看你流不流血。' },
    ],
    first: ['quest q_southgate stage 3', { if: "origin == 'tide'", then: ['quest q_o_tide done'] }],
    choices: [
      {
        text: '坐到他对面，谈',
        if: 'world.embers <= 3',
        check: { skill: 'persuasion', dc: 16, party: true, mods: [{ if: 'flag.clan_charter', n: 1, why: '盖了帝国印的特许' }, { if: 'flag.compact_free', n: 1, why: '城约里有氏族的位子' }, { if: 'flag.arosha_at_table', n: 1, why: '阿罗莎坐在桌边' }] },
        ok: { text: '谈到太阳落山。他从腰上解下一节断链，放在门板上，起身走了。他的亲卫在门口等他，没人回头。', effects: ['flag gurzan_treaty', 'world room +1'], goto: 'f_10' },
        fail: { text: '他听完，摇了摇头，起身走了。没打。门板上留着他坐过的一块汗印。', effects: ['flag f_gurzan_walked'], goto: 'f_10' },
      },
      {
        text: '站在矮墙边，看他走到银瀑去',
        if: '!flag.southgate_held && world.embers >= 8',
        result: '他走到银瀑边上，从腰上解下一节断链，扔了下去。链子沉得很快。他身后几千人一声不出。',
        effects: ['flag f_chain_thrown'],
        goto: 'f_10',
      },
      {
        text: '走到他那一边去',
        tag: '退潮的人',
        if: "world.embers >= 4 && (flag.southgate_held || world.embers < 8) && (origin == 'tide' || rep.clans >= 4)",
        effects: ['flag sided_gurzan'],
        combat: SIDED,
      },
      { text: '跟蓝牙和阿罗莎站成一排，迎上去', if: `${G2} && ${CAN_AROSHA} && flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ2, allies: AL_BTA, specials: SON } },
      { text: '跟蓝牙和阿罗莎站成一排，迎上去', if: `${G2} && ${CAN_AROSHA} && !flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ2, allies: AL_BTA, specials: NOSON } },
      { text: '跟蓝牙站成一排，迎上去', if: `${G2} && !${CAN_AROSHA} && flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ2, allies: AL_BT, specials: SON } },
      { text: '跟蓝牙站成一排，迎上去', if: `${G2} && !${CAN_AROSHA} && !flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ2, allies: AL_BT, specials: NOSON } },
      { text: '跟蓝牙和阿罗莎站成一排，迎上去', if: `${G3} && ${CAN_AROSHA} && flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ3, allies: AL_BTA, specials: SON } },
      { text: '跟蓝牙和阿罗莎站成一排，迎上去', if: `${G3} && ${CAN_AROSHA} && !flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ3, allies: AL_BTA, specials: NOSON } },
      { text: '跟蓝牙站成一排，迎上去', if: `${G3} && !${CAN_AROSHA} && flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ3, allies: AL_BT, specials: SON } },
      { text: '跟蓝牙站成一排，迎上去', if: `${G3} && !${CAN_AROSHA} && !flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ3, allies: AL_BT, specials: NOSON } },
      { text: '跟蓝牙和阿罗莎站成一排，迎上去', if: `${G4} && ${CAN_AROSHA} && flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ4, allies: AL_BTA, specials: SON } },
      { text: '跟蓝牙和阿罗莎站成一排，迎上去', if: `${G4} && ${CAN_AROSHA} && !flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ4, allies: AL_BTA, specials: NOSON } },
      { text: '跟蓝牙站成一排，迎上去', if: `${G4} && !${CAN_AROSHA} && flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ4, allies: AL_BT, specials: SON } },
      { text: '跟蓝牙站成一排，迎上去', if: `${G4} && !${CAN_AROSHA} && !flag.korgus_son`, combat: { ...GZ, intro: IN_GZ, enemies: E_GZ4, allies: AL_BT, specials: NOSON } },
    ],
  },

  f_09b: {
    id: 'f_09b',
    title: '城门洞',
    text: [
      '{?flag.arosha_at_table:阿罗莎的伐橡斧|蓝牙的剑}落在他右腕上。古尔赞没叫，把剩下那半条胳膊抱在怀里，往城门退。他的人围上来，抬着他走。',
      '城门洞里有人等着。洛朗，剑之誓约的头领，腰上挂着一排罐子，手里托着一只空的，罐口的蜡还软。',
      { speaker: '洛朗', text: '你们抬尸首，我问尸首话。咱们是同行，我多走了一步。今天这一位，我想再多走一步。' },
      { if: 'is.god', speaker: '洛朗', text: '同行。我把最大的那只罐子也擦了擦。' },
      { if: 'party.ushka', text: '乌什卡的手放在了锤子上。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '他的魂进了罐子，就没料可磨了。' },
    ],
    choices: [
      {
        text: '让开，让他收',
        effects: ['flag gurzan_soul_taken', 'world unburied +1', { if: 'party.ushka', then: ['companion -ushka', 'flag ushka_left', 'flag f_ushka_chased'] }],
        result: [
          '洛朗念了一句话，很短。古尔赞在担架上抽了一下，不动了。罐口的蜡自己合上了。',
          { if: 'flag.f_ushka_chased', text: '乌什卡什么也没说，跟着洛朗出了城门。你们再没在车边见过她。' },
        ],
        goto: 'f_10',
      },
      {
        text: '挡在担架前头，叫他滚',
        check: { skill: 'intimidation', dc: 18, party: true, mods: [{ if: 'rep.corintar >= 3', n: 2, why: '科琳塔尔的人站在你后头' }, { if: 'party.ushka', n: 1, why: '乌什卡的锤子' }] },
        ok: { text: '洛朗看了你一会儿，把空罐子挂回腰上。他说同行之间不该动刀，下回吧。', effects: ['flag laurens_stopped'], goto: 'f_09c' },
        fail: { text: '他笑了笑，把罐子换到左手，右手拔了剑。', combat: LAURENS },
      },
      { text: '拔刀', combat: LAURENS },
    ],
  },

  f_09c: {
    id: 'f_09c',
    title: '归谁',
    text: [
      '古尔赞没走出城门洞。血是止住了，人没留住，太阳落山以前就断了气。他的魂还在他自己身上。',
      '马布格从人堆里挤出来，站在担架边上。他断的那根獠牙磨得很平。',
      { speaker: '马布格', text: '长者郡有他的熊。他该回去。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '回去了，就有人拿他的骨头立旗。两天，我磨完，谁也用不上。' },
    ],
    choices: [
      {
        text: '让乌什卡给他做归尘礼',
        if: 'party.ushka',
        effects: ['flag gurzan_buried', 'var rites +1', 'log 古尔赞·熊心。归尘礼，磨了两天。', 'world unburied -1', 'world embers -1', 'approval ushka +1'],
        result: '她在空地边上生了火，刀与锤摆在两边。两天后，她把骨粉装进一只陶罐，交给马布格，让他撒在长者郡的蘑菇地里。',
        goto: 'f_10',
      },
      {
        text: '你们自己给他做归尘礼',
        if: '!party.ushka',
        effects: ['flag gurzan_buried', 'var rites +1', 'log 古尔赞·熊心。归尘礼，磨了两天。', 'world unburied -1', 'world embers -1'],
        result: '你照乌什卡当年教的做：拆，烧，磨。手艺不精，磨了三天。马布格在边上看着，一句话没说，最后接过了那只陶罐。',
        goto: 'f_10',
      },
      {
        text: '交给马布格，抬回长者郡',
        effects: ['flag gurzan_returned', 'rep clans +2', { if: 'party.ushka', then: ['approval ushka -1'] }],
        result: '马布格叫了七个人，轮流抬。出城门的时候，他们把灰吻的皮盖在他身上。',
        goto: 'f_10',
      },
    ],
  },

  f_10: {
    id: 'f_10',
    title: '最后一件事',
    loc: '下城 · 门板桌',
    date: '1472年奈拉月11日天黑以后',
    text: [
      '桌边只剩你们，和一盏灯。灯油是兽油，一股膻味。门板上的刀痕二十八年没人刨过，最深的那一道是停战那晚有人砍的，谁砍的没人记得。',
      { if: 'flag.f_gurzan_fled', text: '你们是躺在自己的板车上被拉下来的，拉车的是骡子。古尔赞守不住城，带着他的死人退了，往南。' },
      { if: '!flag.southgate_held && world.embers >= 8', text: '城是古尔赞的了。银瀑那边有人在点火，火堆边有人在唱，兽人话，调子很慢。' },
      { if: 'flag.sided_gurzan', text: '你身上的血，有一半是边区兵的。蓝牙没砍下最后那一下。他走的时候，獠牙上那截蓝布沾了土。' },
      { if: 'flag.gurzan_treaty', text: '古尔赞的那节断链还在门板上，没人收走。' },
      '那道军令写的是：收殓此役无人认领之死者，事毕为止。二十八年，没人来说过“事毕”。',
      { if: 'flag.fourth_offered', text: '万神道那顶帐篷里，那把椅子还空着。他们等你回话。' },
      { if: 'flag.blackbranch_deal', text: '车帮上落着一只乌鸦，从林子那边一路跟过来的，看着你。黑枝亲王的约，有人替你们记着。' },
    ],
    first: ['quest q_southgate done', 'quest q_cart done'],
    choices: [
      {
        text: '把你的那节断链也扔进银瀑',
        if: '!flag.southgate_held && world.embers >= 8',
        result: [
          '{?item.chain_link >= 1:你那节断链在银瀑里沉得比他的慢。|你身上没有链子。你把门板上那根拴板车的铁链解下一截，扔了下去。}',
          ...FATES,
        ],
        goto: 'end_dookansday',
      },
      {
        text: '把城拿回来',
        tag: '神',
        if: 'is.god && !flag.southgate_held && world.embers >= 8',
        effects: ['flag god_held_city', 'flag southgate_held', 'world room =0', 'rep clans -5'],
        result: [
          '你一个人走到银瀑边。天亮的时候，城又是你们的了。氏族退出城的时候，有人回头冲你喊了一个名字。从此他们这么叫你。',
          ...FATES,
        ],
        goto: 'end_standing',
      },
      {
        text: '把权杖头交给阿坦，请他把第四十一句念完',
        if: OPEN,
        req: 'world.word >= 7 && world.peace >= 5 && world.scale >= -2 && world.scale <= 2 && flag.conclave_held && party.tan && flag.tan_told && (flag.wall_rubbed || flag.staff_home)',
        reqText: '话传得够远，太平还在，天平不偏；会开成了；阿坦在，也说了；手里有拓片或那根杖',
        result: ['阿坦接过权杖头，掂了掂，说明天一早。', ...FATES],
        goto: 'end_funeral',
      },
      {
        text: '跟多米尼克走到那块空地中间去',
        if: `${OPEN} && world.scale >= 3 && world.word >= 6 && rep.corintar >= 3`,
        result: ['多米尼克在矮墙外头等着，册子夹在胳膊底下。', ...FATES],
        goto: 'end_sword',
      },
      {
        text: '把东西交给主祭们，关上门',
        if: `${OPEN} && world.scale <= -3 && world.peace >= 6 && rep.temples >= 3 && flag.temples_first`,
        result: ['主祭们派来的车停在巷口，车门上没有纹章。', ...FATES],
        goto: 'end_eldest',
      },
      {
        text: '站在誓石底下，替她作见证',
        if: '(flag.claimant_kalista || flag.claimant_arosha) && flag.southgate_held',
        result: ['{?flag.claimant_kalista:卡莉斯塔|阿罗莎}让人来传话：明天，誓石。你还是见证。', ...FATES],
        goto: 'end_mantle',
      },
      {
        text: '把你的那节断链扔进银瀑',
        if: `${OPEN} && flag.sided_gurzan`,
        result: ['{?item.chain_link >= 1:你从怀里摸出那节断链。|你从板车上解下一截拴车的铁链。}银瀑在下城的那一头响。', ...FATES],
        goto: 'end_dookansday',
      },
      {
        text: '在那把空着的椅子前头站住',
        tag: '神',
        if: `${OPEN} && is.god && flag.conclave_held`,
        goto: 'f_10b',
      },
      {
        text: '在门板上按手印，谁也不说{?flag.blackbranch_deal:（这个约有人替你们记着）|}',
        if: OPEN,
        result: ['你把手掌按在灯油里，又按在门板上。', ...FATES],
        goto: 'end_standing',
      },
    ],
  },

  f_10b: {
    id: 'f_10b',
    title: '那把空椅子',
    loc: '万神道 · 大帐',
    text: [
      '大帐里一百多人。吵了一冬的三派，头一回同时闭了嘴。多米尼克，各殿主祭，教团的老妇人，都看着你。阿坦站在门口。',
      '帐篷正中摆着一把椅子，是从北城哪家世家的厅里搬来的，椅背上的漆掉了一块。血统，功劳，空着，他们议了三样。眼前这一样是活的。',
      { if: 'party.tan', speaker: '阿坦', text: '我问过你了，王在哪儿。你不知道。那我只问一句：晨祷的词，要不要改。' },
      { if: '!party.tan', text: '守庙的姑娘挤在门口，手里攥着那块抹布。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '你坐上去，将来谁给你做礼。' },
    ],
    choices: [
      {
        text: '坐下',
        effects: ['flag fourth_sat'],
        result: '你坐下了。椅子腿在石板上吱了一声。蓝牙头一个起身，从你面前走过去，出了帐篷。',
        goto: 'end_fourth',
      },
      {
        text: '说这把椅子不归你让，也不归你坐',
        effects: ['flag fourth_declined'],
        result: '你说完，往门口走。多米尼克在你身后站起来，椅子倒了。',
        goto: 'end_fourth',
      },
      {
        text: '说你是来收尸的',
        effects: ['flag fourth_undertaker', 'var rites +1', 'log 卡斯特洛斯，诸神之王。丧事是收尸队接的。'],
        result: '你没碰那把椅子。你问主祭们，丧事定在哪天，要几个人抬，抬什么。',
        goto: 'end_fourth',
      },
    ],
  },

  end_funeral: {
    id: 'end_funeral',
    title: '送神',
    art: 'load_17',
    loc: '万神道 · 没屋顶的神殿',
    date: '1472年奈拉月12日',
    text: [
      '奈拉月十二日一早，万神道上那座没屋顶的庙前头来了两百多人。一半是兵，站得乱七八糟，盾牌靠在腿上。多米尼克的人站左边，阿德安的祭司站右边，中间空着一条道。',
      '阿坦念晨祷。念到第四十句，他停了一下。第四十一句是“愿银龙再临”。他念得很慢，念完了。然后他把{?flag.staff_home:那根断杖横放在空台子上，又把自己那截权杖头搁在旁边|那截游行用的权杖头放在空台子上}。',
      '给神办丧事该不该哭，谁也说不准。后来是个卖烤饼的先哭的，哭完接着卖。',
      { if: 'party.ushka', text: '乌什卡问你要不要磨骨头。你说没有骨头。她把锤子收了回去。' },
      { if: '!party.ushka', text: '守庙的姑娘问你要不要立碑。你说没地方立。她把抹布叠了三折，搁在台子边上。' },
      '没人谢你们。',
    ],
    first: ['var rites +1', 'log 卡斯特洛斯，诸神之王。万神道，没有尸首。'],
    ending: 'funeral',
  },

  end_sword: {
    id: 'end_sword',
    title: '剑上天',
    art: 'load_8',
    loc: '下城 · 那块空地',
    date: '1472年奈拉月12日',
    text: [
      '多米尼克站在她倒下的那块地上，脚边是二十八年的干花。他念的是判词的腔调，一条一条：天位无主。科琳以功继之。{?flag.prophecy_told:有人在人群里喊那页预言，他停下来，等那人喊完，接着念。|}',
      '{?flag.staff_to_dominic:那根断杖横在他怀里，他一回也没拄。|}{?flag.told_dominic:念到一半，他朝你这边看了一眼。墙上没有她，这话是你告诉他的。|}蓝牙站在人群最外头，没跪，也没走。',
      { if: 'party.tan', text: '阿坦把万神道上那座庙的钥匙交给了多米尼克的人。他搬到下城，就在这块空地边上，租了一间漏雨的屋子。' },
      '老布兰多克领着人唱愚足写的那支歌。他五十岁当的祭司，如今快八十了，嗓子还亮。唱到第三段他唱错了一句，没人纠正。',
    ],
    ending: 'sword',
  },

  end_eldest: {
    id: 'end_eldest',
    title: '长子',
    art: 'ev_adeanic_war',
    loc: '万神道 · 一间关着门的偏殿',
    date: '1472年奈拉月至1473年花始月',
    text: [
      '你们把东西交了：{?item.mural_rubbing >= 1:拓片，|}{?flag.staff_to_temples:断杖早进了库房，|}还有你们几个人的话。主祭们关上门，议了一冬。偏殿的炭盆一天换三回，门一回也没开。',
      '开春，各殿的门上同一天贴出一张告示：王倦勤，长子摄事。字不多，盖了七方印。',
      { if: 'party.tan', text: '阿坦成了万神道上辈分最老的卡斯特洛斯祭司。新来的小祭司不知道该怎么称呼他，有叫师伯的，有叫老爷子的。他都应。' },
      '科琳塔尔的人来过一回，没说话，摔门走的。门框上的灰落下来，落在门槛边那张告示上，盖住了最后那方印。',
    ],
    ending: 'eldest',
  },

  end_standing: {
    id: 'end_standing',
    title: '军令未撤',
    loc: '下城 · 门板桌',
    date: '1472年奈拉月12日',
    text: [
      '天亮以前，{?partysize >= 4:你们几个|剩下的这几个}在门板上按了手印，一个挨一个，灯油按出来的，黑的。按完了，各自收拾铺盖。',
      { if: 'flag.wall_sealed && world.word <= 2', text: '墙上的事谁也没说。那扇门是你们从外头砌死的。后来的人要去看，得自己坐船去。' },
      { if: 'world.word >= 3 && world.word <= 6', text: '话还是漏出去了一些，漏得不多。神殿区的酒馆里有人在传，传的人自己也不大信。' },
      { if: 'world.word >= 7', text: '话早就传开了，满街都是。只是你们几个，按了手印，往后不再提。' },
      { if: 'flag.god_held_city', text: '城是你拿回来的。氏族退出城门的时候，喊的那个名字是你的。' },
      '那道军令还钉在万神道的庙门上。没人来撤，你们也没去撕。',
      { if: 'flag.tan_silent && party.tan', text: '阿坦按手印的时候按得很重。约好不说的事，他是头一个按的。' },
      '第二天一早，{?party.tan:阿坦|守庙的姑娘}照旧做晨祷。念到第四十句，停了。',
    ],
    first: [{ if: 'flag.blackbranch_deal && world.word < 6', then: ['world word =6'] }],
    ending: 'standing',
  },

  end_mantle: {
    id: 'end_mantle',
    title: '卡斯坦的披风',
    loc: '试炼山 · 誓石',
    date: '1472年奈拉月12日',
    text: [
      '{?flag.claimant_kalista:卡莉斯塔|阿罗莎}又上了一回山，这回是白天，全城的人都在山脚下。她冲北要塞喊了一嗓子，要塞里的人应了，应得比那天夜里齐。',
      '誓词念到“并永说真话”那一句，她停了下来。她当着山下的人把墙上的事说了，从头说到尾：杖，断了的胳膊，银披风，那团火，两行字。说完了，才往下念。',
      { if: 'flag.claimant_kalista', text: '人群里，卡莱昂拄着拐杖，问旁边的人：爪子和尾巴，这回该长在谁身上。' },
      { if: 'flag.claimant_arosha', text: '山脚下，几个在血腐阶梯流过血的边区兵卷了铺盖往西走。其中一个走出去十几步，回来把盾靠在誓石底下，又走了。' },
    ],
    first: ['world word =10'],
    ending: 'mantle',
  },

  end_dookansday: {
    id: 'end_dookansday',
    title: '杜坎之日',
    art: 'ev_orc_with_axe',
    loc: '下城 · 银瀑边',
    date: '1472年奈拉月11日夜',
    text: [
      '奈拉月十一日夜里，氏族的火从南城一直点到下城。他们没烧房子。二十八年前这是他们头一座舍不得烧的城，今年也一样。',
      '{?flag.gurzan_soul_taken || flag.gurzan_buried || flag.gurzan_returned:古尔赞没走到这一天。他的人替他把断链扔进了银瀑。|古尔赞站在银瀑边上，把断链扔了下去。下城人管银瀑叫粪瀑，链子沉下去，没溅起什么水花。}',
      { if: 'flag.dookanil_told && world.word >= 5', text: '火堆边传的是一句新话：造我们的那位，杀了他们的王。' },
      { if: 'flag.korgus_son', text: '空地正中立着那副骨头，是他父亲的，拿铁丝缠着。' },
      { if: 'flag.korgus_rite', text: '空地正中什么也没有。古尔赞的人往那儿看了一眼，又看了你一眼。' },
      { if: 'party.nixee', text: '妮克西天黑前就带着地下通道里的地精走了，走之前把账本塞给你。规矩第一条：活着。' },
      '第二天，西边来了信使。西边终于出兵了。1424 年，他们没来。',
    ],
    ending: 'dookansday',
  },

  end_fourth: {
    id: 'end_fourth',
    title: '第四个人选',
    loc: '万神道 · 大帐',
    date: '1472年奈拉月',
    text: [
      { if: 'flag.fourth_sat', text: '你坐在那把掉了漆的椅子上，坐了一冬。各殿的主祭轮流来回话，回完了倒退着出去。多米尼克来过三回，每回都问你和她是什么关系，每回都记。' },
      { if: 'flag.fourth_sat', text: '{?party.tan:阿坦问你晨祷的词要不要改。你说了。|守庙的姑娘问你晨祷的词要不要改。你说了。}第二天一早，椅子底下有人念晨祷。' },
      { if: 'flag.fourth_declined', text: '你出了帐篷，多米尼克追了你三条街。他问你凭什么：你明明能，你不肯，往后死在教战里的人算谁的。你没答。他站在第三条街的路口，把这句话记在了册子上。' },
      { if: 'flag.fourth_undertaker', text: '丧事定在开春。抬的是一口空棺，杉木的，你们几个抬，前后各两个人。{?party.ushka:乌什卡说这是浪费：一个不会死的人，学了一身埋人的手艺。|守庙的姑娘在棺材后头跟了一路。}' },
      { if: '!flag.fourth_sat && !flag.fourth_declined && !flag.fourth_undertaker', text: '你站在那把空椅子前头，没坐，也没走。帐子里的人等了一夜。' },
      '那道军令还钉在庙门上。四颗钉子又锈深了一圈。',
    ],
    ending: 'fourth',
  },
};
