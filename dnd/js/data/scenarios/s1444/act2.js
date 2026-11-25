// s1444 act2.js — 第二幕《再没人见过的矮人》（a2_01–a2_18，另加 a2_05b、a2_15b、a2_17b）。
//
// 提纲（对照 BIBLE §11.3、§12.4、§15、§16.2–16.3）
//   a2_01 五年以后，狼门｜加莱尔入队，q_parents 开始，乌什卡底线检查；五年按 compact_* / korgus_* 交代；
//         [永生] 速写撕了；蓝牙的信使送地契（groundhawk_deed）→ 02
//   a2_02 四十四页的约｜贾尔蒙、出纳、门楼的地精、妮克西｜调查 DC12 出入簿（q_parents 2）；
//         撵（khug_goblins_out）/ 租约 说服 DC13（khug_goblins_lease；goblins_handed 劣势）/ 不掺和 → 03
//   a2_03 三百一十二条｜贝尔格拉克入队，codex grudgebearers；[负怨者] 账本 grudge_book；[神] entry_313；
//         洞悉 DC13；[达梅里亚之子] 花仇三选一；接活（q_list 开始，定金 100）→ 04
//   a2_04 备远征（枢纽）｜四件事各 var prep +1；乌什卡的木签（q_ushka 2）；阿坦的蜡烛；[游荡者] 牌局；
//         店：阿斯拉的军需（租约时多地精的摊）；长休 → 05
//   a2_05 死铁道｜codex dwarovrod；认活轨 奥秘 DC13；过断桥 特技 DC12 → 打巨魔；[施法者] 引电上刃 → 打
//   a2_05b 轨枕之间｜收骨（rail_bones）/ 记位置；[神] 让铁道跑起来（rail_woken，直去 a2_08）→ 06
//   a2_06 交轨大厅的过路费｜布拉克｜照价 / 讲价 说服 DC14（rail_contract，brack_token）/ [地精] 亲戚价 /
//         [负怨者] 拿铅锭那笔抵账 / 潜行 DC14 / 硬闯 → 打地精（可免）→ 07
//   a2_07 蘑菇宴｜付了钱才有灶间：体质豁免 DC12、洞悉 DC14 → 堵嘴（brack_bought）；阿坦掐蜡烛晨祷，
//         贝尔格拉克讲半句雷萨格；短休 → 08
//   a2_08 勘测营｜codex pastkeepers，rubbing_book，q_parents 3；调查 DC13、医药 DC12；
//         [神] 加莱尔先开口；说快（lies+1，lied_to_garaele）/ 照实 / 让乌什卡答 → 09
//   a2_09 两口子的葬礼｜就地埋（parents_buried_deep，rites+1）/ [神职] 主礼 / [神] 引月光 / 带走（parents_carried）→ 10
//   a2_10 兵团分家｜level 5；说服 DC15 / 历史 DC14（company_whole）；[承嗣] [无冕] [负怨者]；
//         → 11（rail_woken 时 → 12）
//   a2_11 手摇车｜codex black_orcs；三下检定，败两下被追上 → 打（可免）→ 12
//   a2_12 竖井口｜castellar_seen、dookanil_known、shaft_rubbing、q_dragon 3、三条图鉴（必有，不靠检定）；
//         历史 DC14、宗教 DC13、奥秘 DC14、清塌方必败；[退潮的人] 对唱两问；[兽人] 自己哼；[精灵] 摇篮曲；
//         [神] 清开塌方（god_opened_shaft，余烬+1）→ 13
//   a2_13 铅闸｜[战士系] 一个人顶住闸口；守闸战（brack_bought/rail_contract 少两个，rail_woken 多三个，
//         company_whole 友军两名）；胜且 prep>=3 → brok_lives → 14
//   a2_14 贝尔格拉克的名单｜洞悉 DC14；握手（belgrak_lost）/ 跟下去 → 15 / 劝他划一条 说服 DC18
//         （[科琳的队伍] 16，[负怨者] 先划自己那页 15）；[神] belgrak_struck_by_god → 16
//   a2_15 往深处｜打深渊鸦（可免于选择）；胜 → 15b，败 → belgrak_lost → 16
//   a2_15b 背出来｜运动 DC14（全队），belgrak_saved → 16
//   a2_16 数目对得上｜q_parents 完成，尾款 300，礼（rites）；拉车 运动 DC13 → 17
//   a2_17 山里的话｜dookanil_told / dookanil_mocked / names_filed / 不说；[试炼] 讲给脚夫 → 17b
//   a2_17b 本子归谁｜notebook_order / notebook_kept / notebook_sold → 18
//   a2_18 出山｜level 6，贝尔格拉克离队，q_cart 3，短休；[皇帝的差事] 报告三选一 → a3_01
//
// 本文件自设自读的标记：a2_paid a2_haggle_failed a2_brack_seen a2_flower a2_knows_belgrak a2_live_known
//   a2_split_done a2_struck_survey a2_c1 a2_c2 a2_c3 a2_held a2_rethag a2_sang
// 本文件自设自读的计数：a2_miss

// ───────────── 死铁道上的巨魔（a2_05） ─────────────
const TROLL_LURE = {
  id: 'lure', name: '把它们引到活轨上', desc: '那几段轨还带着电，巨魔的脚是湿的',
  check: { skill: 'athletics', alt: ['deception'], dc: 13, adv: 'flag.a2_live_known' },
  success: { text: '你踩着枕木往回跑，两头巨魔追上了那一段亮轨。噼啪一声，洞里一股烧毛的味儿。', dmgAll: '4d6', type: 'lightning' },
  fail: { text: '你没算准是哪一段。电先找上的是你的鞋钉。', selfDmg: '2d6', type: 'lightning' },
};
const TROLL_OIL = {
  id: 'oil', name: '泼灯油，点火', desc: '巨魔的伤口会自己长好，烧过的地方长得慢',
  check: { skill: 'sleight', alt: ['athletics'], dc: 12 },
  success: { text: '一罐灯油泼在打头那头的胸口上，火绳一碰就着了。它扑腾着去拍，越拍越旺。', dmgAll: '2d6', type: 'fire', applyAll: { cond: 'burning', turns: 2 } },
  fail: { text: '罐子砸在轨上碎了。油顺着枕木流开，烧着的是你们自己这边的半截路。', selfDmg: '1d6', type: 'fire' },
};
const TROLLS = {
  title: '断桥那头',
  intro: '两头巨魔蹲在轨上，一头在啃一截枕木。另一头先站起来，头顶蹭着了洞顶的石笋。',
  enemies: [{ id: 'troll', n: 2 }],
  specials: [TROLL_LURE, TROLL_OIL],
  xp: 400,
  win: { goto: 'a2_05b' },
  lose: { effects: [{ if: 'var.prep >= 1', then: ['var prep -1'] }, 'hp 1'], goto: 'a2_05b' },
  fled: { effects: [{ if: 'var.prep >= 1', then: ['var prep -1'] }], goto: 'a2_05b' },
  reward: ['item +dagrite_shard 2'],
};
const TROLLS_VOLT = {
  ...TROLLS,
  intro: '你把手按在活轨上，电顺着胳膊爬上了每个人的兵器。头一刀砍下去，巨魔身上冒了烟。',
  specials: [
    {
      id: 'volt', name: '放掉刃上的电', desc: '趁刃上的电还没散，一齐砍下去',
      success: { text: '几把兵器同时落下，蓝光一闪。两头巨魔身上都添了一道焦口子。', dmgAll: '2d6', type: 'lightning' },
    },
    TROLL_LURE, TROLL_OIL,
  ],
};

// ───────────── 转车台（a2_06） ─────────────
const GOBLINS = {
  title: '转车台',
  intro: '车皮顶上一排脑袋缩了下去，又冒出来一排。布拉克把账板夹在胳肢窝底下，退到了转车台的另一头。',
  enemies: [{ id: 'goblin_tinker', n: 2 }, { id: 'goblin_skirmisher', n: 4 }],
  specials: [
    {
      id: 'points', name: '扳道岔，放一节空车下来', desc: '坡上停着一节空车皮，闸木是松的',
      check: { skill: 'sleight', alt: ['athletics'], dc: 13 },
      success: { text: '道岔咔哒一声。空车皮顺着坡溜下来，铁轮子碾过去的地方，地精全往两边跳，没跳开的那几个躺下了。', dmgAll: '3d6', type: 'bludgeoning' },
      fail: { text: '道岔扳错了一格。空车皮停在半坡上，地精们在车顶上冲你鼓掌。', selfDmg: '1d4' },
    },
    {
      id: 'shout', name: '冲布拉克喊一个价', desc: '打下去他也亏，让他算明白',
      check: { skill: 'persuasion', alt: ['intimidation'], dc: 14 },
      success: { text: '你喊了个数。布拉克在账板上划了两下，吹了一声哨。地精们收了刀，有一个还把掉了的火把替你捡了起来。', end: 'win' },
      fail: { text: '布拉克摇头。你喊的数，连车皮的折旧都不够。' },
    },
  ],
  xp: 250,
  win: { goto: 'a2_07' },
  lose: { effects: ['gold -100', 'hp 1'], goto: 'a2_07' },
  fled: { effects: ['gold -50'], goto: 'a2_07' },
};

// ───────────── 手摇车（a2_11） ─────────────
const CHASE = {
  title: '下行线',
  intro: '手摇车停了。后头的爪子声没停，一下一下刮在石头上，越来越近。',
  enemies: [{ id: 'hook_horror', n: 2 }, { id: 'black_orc_raider', n: 2 }],
  specials: [
    {
      id: 'roll', name: '松开闸，让车往回撞', desc: '这一段是下坡，车是铁的',
      check: { skill: 'athletics', dc: 13 },
      success: { text: '你一脚踹开闸。空车顺着坡倒回去，正撞进钩爪怪的腿弯里。', dmgAll: '3d8', type: 'bludgeoning' },
      fail: { text: '闸卡死了。你拽出来的只有一根闸杆，和一手的锈。', selfDmg: '1d6' },
    },
    {
      id: 'switch', name: '把道岔扳到断线上', desc: '前头那条线是断的，他们不知道',
      check: { skill: 'sleight', dc: 14 },
      success: { text: '道岔一动，冲在前头的两个踩空了，连人带矛摔在断轨底下。', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '道岔没动。你的手指头差一点夹在里头。' },
    },
  ],
  xp: 400,
  win: { goto: 'a2_12' },
  lose: { effects: [{ if: 'var.prep >= 1', then: ['var prep -1'] }, 'gold -40', 'hp 1'], goto: 'a2_12' },
  fled: { effects: [{ if: 'var.prep >= 1', then: ['var prep -1'] }], goto: 'a2_12' },
};

// ───────────── 铅闸（a2_13） ─────────────
const LEAD = {
  title: '铅闸',
  intro: '一支骨号在黑地里响了三声。兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，没人听清。',
  specials: [
    {
      id: 'drop', name: '放下铅闸', desc: '闸轮锈了一半。转下来，闸外的就关在闸外',
      check: { skill: 'athletics', dc: 14, adv: 'flag.a2_held', mods: [{ if: 'flag.parents_carried', n: -1, why: '车上多了两副担架' }] },
      success: { text: '闸轮转动了。铅闸砸下来，地都颤了一下。闸外头的号声隔着一尺厚的铅，听上去像是在井底下。', end: 'win' },
      fail: { text: '闸轮转了半圈就卡住了。你的肩膀比它先松了劲。', selfDmg: '2d6' },
    },
    {
      id: 'spark', name: '把活轨的电引到闸口', desc: '闸口底下压着一段还亮着的轨',
      check: { skill: 'arcana', dc: 14 },
      success: { text: '你把那段轨上的电勾了出来。一道蓝光贴着地皮扫过去，闸口外头站着的全跳了一下。', dmgAll: '4d6', type: 'lightning' },
      fail: { text: '电没听你的，顺着你的胳膊走了一遍。', selfDmg: '2d6', type: 'lightning' },
    },
  ],
  xp: 600,
  win: { effects: [{ if: 'var.prep >= 3', then: ['flag brok_lives'] }], goto: 'a2_14' },
  lose: { effects: ['hp 1', 'gold -100'], goto: 'a2_14' },
  fled: { effects: ['gold -100'], goto: 'a2_14' },
};
const LEAD_E3 = [{ id: 'black_orc_warcaller' }, { id: 'black_orc_raider', n: 3 }, { id: 'hook_horror', n: 2 }];
const LEAD_E1 = [{ id: 'black_orc_warcaller' }, { id: 'black_orc_raider', n: 1 }, { id: 'hook_horror', n: 2 }];
const LEAD_E6 = [{ id: 'black_orc_warcaller' }, { id: 'black_orc_raider', n: 6 }, { id: 'hook_horror', n: 2 }];
const LEAD_E4 = [{ id: 'black_orc_warcaller' }, { id: 'black_orc_raider', n: 4 }, { id: 'hook_horror', n: 2 }];
const VETS2 = [{ id: 'grudgebearer_vet', n: 2 }];
const VETS1 = [{ id: 'grudgebearer_vet', n: 1 }];
const B = '(flag.brack_bought || flag.rail_contract)';
const NB = '!(flag.brack_bought || flag.rail_contract)';

// ───────────── 往深处（a2_15） ─────────────
const DEEP = {
  title: '没有名字的支线',
  intro: '灯照不到的地方有翅膀拍了一下。贝尔格拉克还在念条目，念到一半停了。',
  enemies: [{ id: 'deep_crow' }, { id: 'black_orc_raider', n: 2 }],
  specials: [
    {
      id: 'dark', name: '把灯全灭了', desc: '深渊鸦是冲着光来的',
      check: { skill: 'stealth', dc: 14, party: true },
      success: { text: '最后一盏灯一灭，头顶的翅膀声乱了。它撞在石壁上，又撞了一回。', applyAll: { cond: 'blinded', turns: 2 } },
      fail: { text: '有人的灯罩掉在地上，又亮了。它看见了，先扑的是那盏灯。', selfDmg: '1d8' },
    },
    {
      id: 'pipe', name: '拽倒头顶那截旧水管', desc: '胡尔-乔卡德的铅管，一截有一人粗',
      check: { skill: 'athletics', dc: 13 },
      success: { text: '锈死的卡箍一断，一截铅管连着六千年的泥垢砸了下来。', dmgAll: '2d8', type: 'bludgeoning' },
      fail: { text: '水管晃了晃，掉下来的只有泥垢，全掉在你头上。', selfDmg: '1d4' },
    },
  ],
  xp: 500,
  win: { goto: 'a2_15b' },
  lose: { effects: ['flag belgrak_lost', 'quest q_list fail', 'hp 1'], goto: 'a2_16' },
  fled: { effects: ['flag belgrak_lost', 'quest q_list fail'], goto: 'a2_16' },
};

export const SCENES = {
  // ───────────────────────── 玛瑙之门 ─────────────────────────
  a2_01: {
    id: 'a2_01',
    title: '五年以后，狼门',
    chapter: '第二幕 · 再没人见过的矮人',
    art: 'ev_cave',
    loc: '蛇脊山脉西麓 · 玛瑙之门外',
    date: '1450年春',
    text: [
      '五年。城里的事，是一路上听来的。',
      { if: 'flag.compact_league', text: '伯爵联盟管着卡斯托纳斯。卡莱昂在每道门上收一个铜子，下城人说，收得比兽人那会儿还准时。' },
      { if: 'flag.compact_corintar', text: '科琳塔尔守着城。蓝牙的兵轮班站岗，万神道上给她修的祠堂盖了瓦。阿坦那座庙还是没屋顶。' },
      { if: 'flag.compact_free', text: '城约还算数。各家每月凑一回份子，门板桌照旧摆在下城那块空地上。地精坊打了一口井，井绳是从你们车上拆的。' },
      { if: 'flag.compact_none', text: '城还是没人管。三家各占一道门，各收各的税。进一趟下城要交三回钱。' },
      { if: 'flag.korgus_rite', text: '杜坎森那件事，说书的讲成一个兽人女人把他磨成了粉，撒在风里。讲到这儿，听的人都看乌什卡。' },
      { if: 'flag.korgus_son', text: '杜坎森的骨头在长者郡。每年银现月，古尔赞的人抬着它绕火走一圈。去的酋长一年比一年多。' },
      { if: 'flag.korgus_spike', text: '杜坎森的头在城门上挂了两年，鸟啄干净了，后来不知被谁偷走。城门上那颗钉子还在。' },
      { if: 'flag.korgus_sold', text: '杜坎森在银池湖边。有人说铁杖骑士团那儿有一具特别大的骷髅，天天扛石头修墙。' },
      { if: 'flag.korgus_lake', text: '杜坎森沉在银池湖里。打鱼的说，开春有人看见他在湖心游水。买鱼的人都爱听这一段。' },
      { if: 'flag.korgus_carver', text: '杜坎森的骨头在雕骨者手里。如今东坎诺每个集上都有人卖“杜坎森的指骨”，一根三个金冠，够拼出十个他。' },
      { if: 'party.tan', text: '阿坦二十二了，下巴上冒出一圈软胡子。他说庙里没镜子，刮不了。' },
      { if: 'party.nixee', text: '妮克西的账本换到了第三本，头一本拿去垫了车轴。' },
      '玛瑙之门开在一面山壁上，门脸冲着北边一片烧秃了的坡。那儿从前是林子，狼多，矮人管它叫狼门。铁闸悬在半截，锈成了一整块。门洞底下搭着二十几顶帐篷，帐篷布上缝着阿斯拉银行的徽。',
      '加莱尔·守昔者坐在门洞外头的界石上等你们。本子揣在怀里，没摊开。她父母随探险队进山勘测，说好开春回来，如今逾期四个月了。',
      { if: 'is.immortal', text: '她从本子里抽出一张纸，是五年前给你画的速写。她举着纸对了对你的脸，然后撕了。' },
      { if: 'is.immortal', speaker: '加莱尔', text: '用不着再画了。我写“未见衰老”，对吗。' },
      { if: 'is.immortal && party.ushka', speaker: '乌什卡', text: '五年。你连指甲都没长坏。' },
      { speaker: '加莱尔', text: '我要雇你们进山。编年史家悬赏，照老价钱，路上的花销另算。' },
    ],
    first: [
      { if: 'party.ushka && approval.ushka <= -4', then: ['companion -ushka gone', 'flag ushka_left', 'log 乌什卡离了车。她走前把那根木签插在了车辕上。'] },
      'companion +garaele',
      'quest q_parents start',
      'codex khugdihr',
    ],
    choices: [
      {
        text: '问她为什么找你们',
        once: true,
        effects: ['approval garaele +1'],
        result: [
          { speaker: '加莱尔', text: '你们进去几个，出来几个，数目对得上。会里的账我翻过。东坎诺的冒险团里，对得上的只有你们一家。' },
          '她顿了一下，又补了一句：她父母那一队，出闸的时候是十一个人。',
        ],
      },
      {
        text: '拆开蓝牙的信使送来的那封信',
        if: '!flag.groundhawk_deed && rep.corintar >= 1',
        once: true,
        effects: ['flag groundhawk_deed', 'item +groundhawk_deed', 'world room +1', 'quest q_debt stage 2', { if: 'party.nixee', then: ['approval nixee +2'] }],
        result: [
          '信使是骑骡子追上来的，路上跑死了一头。信里是康原的地契，蓝牙盖了印，背面一行字：欠她的，我先还一样。',
          { if: 'party.nixee', speaker: '妮克西', text: '你收着。我的口袋我信不过。' },
        ],
      },
      {
        text: '跟她进营',
        goto: 'a2_02',
      },
    ],
  },

  a2_02: {
    id: 'a2_02',
    title: '四十四页的约',
    art: 'ev_anb_global_trade',
    loc: '玛瑙之门 · 阿斯拉探险队的营地',
    text: [
      '贾尔蒙·阿斯拉一百六十岁，胡子掖在腰带里，免得蘸了墨。他面前摊着探险队的章程，四十四页，铜扣装订。银行派来的出纳蹲在门口，拿一根刻痕棍点人头，点一个刻一道。',
      { speaker: '贾尔蒙', text: '四十四页的约，头一页就写了：先算账，后谈光荣。我今年一百六。光荣我见过，账没平过。' },
      '门楼里又住进了一窝地精。1444 年探险队头一回来，撵散过一窝，这几年又一家一家摸了回来。矮人的门把手开在齐胸高，他们在每扇门的膝盖那么高的地方，又凿了一个把手。',
      { speaker: '贾尔蒙', text: '门楼是堡的，堡归银行管。地精归谁，章程上没写。你们是外人，外人说句话，我好往账上记。' },
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第三十一条：有人请你说公道话，先问谁付钱。' },
      { if: 'flag.goblins_handed', text: '门楼窗口趴着一个老地精。他看了看你们的车，把窗板关上了。五年前地下通道里那一车人，有他认得的。' },
    ],
    choices: [
      {
        text: '借勘测队的出入簿翻一翻',
        once: true,
        check: { skill: 'investigation', dc: 12, party: true },
        ok: {
          text: '银现月初那一页：守昔者夫妇，十一人出闸，走旧线，往交轨大厅。两个名字旁边各画了一个小月牙。',
          effects: ['quest q_parents stage 2', { if: 'party.garaele', then: ['approval garaele +1'] }],
        },
        fail: {
          text: [
            '簿子是按欠款排的，不是按日子。你翻了半个时辰，出纳伸出两根指头。',
            { speaker: '出纳', text: '翻簿子按页收。往交轨大厅去了，走的旧线。这一句算你五个金冠。' },
          ],
          effects: ['gold -5', 'quest q_parents stage 2'],
        },
      },
      {
        text: '帮着把门楼里的地精撵出去',
        effects: ['flag khug_goblins_out', 'world room -1', 'rep companies +1', 'approval nixee -2'],
        result: '探险队的人拿着长柄锤上了门楼。地精们背着锅从侧门走，最后一个出来的回头看了你一眼，把膝盖高的那个门把手掰了，揣进怀里。',
        goto: 'a2_03',
      },
      {
        text: '让妮克西替他们谈一份租约',
        if: 'party.nixee',
        check: { skill: 'persuasion', dc: 13, party: true, adv: 'is.goblin', dis: 'flag.goblins_handed', mods: [{ if: 'flag.groundhawk_deed', n: 1, why: '地契上有蓝牙的印' }] },
        ok: {
          text: [
            '妮克西跟老地精蹲在门槛上谈了一顿饭的工夫。末了贾尔蒙在第四十五页上添了一条：门楼按月收租，一个月三筐蘑菇，或者等价的铁钉。',
            { speaker: '妮克西', text: '三筐。我原本只要两筐的，他自己加的。' },
          ],
          effects: ['flag khug_goblins_lease', 'world room +1', 'approval nixee +1'],
          goto: 'a2_03',
        },
        fail: {
          text: '谈到第二筐蘑菇的时候，出纳插了一句“利息另算”。老地精当场把窗板关上了。贾尔蒙在章程边上画了个叉。',
          effects: ['rep companies -1'],
          goto: 'a2_03',
        },
      },
      {
        text: '你自己去替他们谈一份租约',
        if: '!party.nixee',
        check: { skill: 'persuasion', dc: 15, party: true, adv: 'is.goblin', dis: 'flag.goblins_handed' },
        ok: {
          text: '你跟老地精蹲在门槛上，把每个月几筐蘑菇抵多少租子算了三遍。贾尔蒙在章程第四十五页上添了一条。',
          effects: ['flag khug_goblins_lease', 'world room +1'],
          goto: 'a2_03',
        },
        fail: {
          text: '你说到“按月”，老地精问一个月是几天。你答不上地底下的一个月是几天，他就把窗板关上了。',
          effects: ['rep companies -1'],
          goto: 'a2_03',
        },
      },
      {
        text: '说这事你们不掺和',
        effects: ['approval nixee -1'],
        result: [
          { speaker: '贾尔蒙', text: '外人，无意见。也好记。' },
          '他在账上写了一行。门楼的窗板开了一条缝，又合上了。',
        ],
        goto: 'a2_03',
      },
    ],
  },

  a2_03: {
    id: 'a2_03',
    title: '三百一十二条',
    loc: '玛瑙之门 · 闸口',
    text: [
      '午后负怨者兵团到了，两百来人，红胡子居多，车上拉着撬棍、铅坠和一捆一捆的账页。队长基尔杜姆·终怨者三十岁，喊了三回“列队”，老兵们照旧蹲在地上抽烟斗。',
      '走在最前头的是贝尔格拉克·穴居者，科琳之环的旧人。他手里一卷名单，展开有一人高。',
      { speaker: '贝尔格拉克', text: '三百一十二条。头一条，议会之门，灰前五千八百八十八年。咱们从后往前讨。' },
      { speaker: '贝尔格拉克', text: '雇你们一趟。你们进去几个，出来几个，数目对得上。兵团的数，从来对不上。' },
      { speaker: '基尔杜姆', text: '我是队长。名单是他的，兵团是我的。账本……账本算大家的。' },
      { speaker: '布罗克', text: '新铲子。红宝石领打的。' },
      { if: "origin != 'grudge'", text: '五年前布罗克在你们车上待过，签完字回红宝石领交了差。他认出了板车，过来拍了拍车辕，没说话。' },
      { if: "origin == 'grudge'", text: '基尔杜姆从车上搬下来一个油布包，四十斤，往你怀里一塞。兵团的账本。他说背账本的是你，划账的也是你，他只管喊列队。' },
      { if: 'is.god', text: '贝尔格拉克把名单翻到末页，拿笔添了一条，第三百一十三：某神，玛瑙之门，一四二四，未到。他抬头看你。' },
      { if: 'is.god', speaker: '贝尔格拉克', text: '那年你在哪儿。' },
      { if: 'is.god', text: '基尔杜姆和几个老兵为一件事吵了一刻钟：神能不能记成欠债的那一方。没吵出结果，那一条先留着。' },
    ],
    first: [
      'companion +belgrak',
      'codex grudgebearers',
      { if: "origin == 'grudge'", then: ['item +grudge_book'] },
      { if: 'is.god', then: ['flag entry_313'] },
    ],
    choices: [
      {
        text: '先问名单最末一条是什么',
        once: true,
        effects: ['approval belgrak +1'],
        result: [
          { speaker: '贝尔格拉克', text: '玛瑙之门，一四二四。' },
          { if: 'flag.entry_struck', text: '他把名单翻过来给你看。那一条已经划了，墨是你的墨，字是你的字。他说红宝石领那边认了，账房先生还不大乐意。' },
        ],
      },
      {
        text: '看他说话时的眼睛',
        once: true,
        check: { skill: 'insight', dc: 13 },
        ok: {
          text: '他说“从后往前讨”的时候，没提讨完了怎么回来。名单只有往里走的路。',
          effects: ['flag a2_knows_belgrak'],
        },
        fail: {
          text: [
            '他发觉你在盯着他。',
            { speaker: '贝尔格拉克', text: '看什么。牙上有菜？' },
          ],
          effects: ['approval belgrak -1'],
        },
      },
      {
        text: '认下名单上“花仇”那一笔，付军械钱',
        tag: '达梅里亚之子',
        if: "origin == 'sons' && !flag.a2_flower",
        once: true,
        req: 'gold >= 80', reqText: '需要 80 金冠',
        effects: ['flag a2_flower', 'gold -80', 'rep companies +1', 'codex lilac_wars'],
        result: [
          '丁香战争的第二十几年，达梅里亚欠红宝石领一批戟头的钱。矮人管那场仗叫“花仇”，你们自家的仗，账记在他们这儿。',
          { speaker: '贝尔格拉克', text: '八十。收了。这一条划掉，头一回有人主动来还。' },
        ],
      },
      {
        text: '请贝尔格拉克把“花仇”那一笔划掉',
        tag: '达梅里亚之子',
        if: "origin == 'sons' && !flag.a2_flower",
        once: true,
        check: { skill: 'persuasion', dc: 15, mods: [{ if: 'item.moon_badge', n: 1, why: '银月徽' }] },
        ok: {
          text: '你说欠钱的那位大公埋在花圃底下，连坟都没有。贝尔格拉克想了一会儿，在那一条上划了一道。',
          effects: ['flag a2_flower', 'rep moon +1', 'codex lilac_wars'],
        },
        fail: {
          text: [
            { speaker: '贝尔格拉克', text: '人死了，账没死。你们人类老是弄混这两样。' },
            '旁边几个老兵把你的脸记住了。',
          ],
          effects: ['flag a2_flower', 'rep companies -1', 'codex lilac_wars'],
        },
      },
      {
        text: '装没听见“花仇”这两个字',
        tag: '达梅里亚之子',
        if: "origin == 'sons' && !flag.a2_flower",
        once: true,
        effects: ['flag a2_flower', 'rep companies -1'],
        result: '贝尔格拉克念到那一条，停了停，看了你一眼，接着往下念。',
      },
      {
        text: '接下这趟活',
        effects: ['quest q_list start', 'gold +100'],
        result: [
          '定金一百，装在一只记了编号的皮袋里。袋上的编号是三百一十二。',
          { if: 'party.garaele', speaker: '加莱尔', text: '我父母那一页，排在第几条？' },
          { if: 'party.garaele', speaker: '贝尔格拉克', text: '不在名单上。在合同上。合同比名单好讨。' },
        ],
        goto: 'a2_04',
      },
    ],
  },

  a2_04: {
    id: 'a2_04',
    title: '备远征',
    art: 'ev_cave',
    loc: '玛瑙之门 · 营地',
    text: [
      '照矮人远征的老规矩，出发前要办四件事：图重画一遍，粮封好，席办一桌，饷先发。四件都办齐的队伍，回来的时候要游一趟街。',
      '贾尔蒙的军需官是个银矮人，鼻梁上架着两副眼镜，一副看货，一副看你。玛瑙之门的矮人从前替整座山记账，出门的背包里装了什么都要过秤。她照老规矩把你们的包一个一个倒在毡子上，绳子几尺、火绒几两，记进一本小册子。',
      '布罗克在磨他的新铲子，磨一下，拿拇指试一下。',
      { if: 'party.ushka', text: '乌什卡的包倒出来只有三样：刀，锤，一根木签。军需官在册子上写了三行，又看了看那根木签，没写。' },
      { if: 'party.tan', text: '阿坦在一根蜡烛上刻了二十四道痕，一道是一个时辰。他点着它，盯着看，说烧到第六道就算天亮。' },
      { if: 'party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)', text: '他看着蜡烛，没抬头，问你：上回跟丧家说的那句，是真的吗。你还没张嘴，他就说，算了，我数着呢。' },
    ],
    first: [
      { if: 'party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)', then: ['approval tan -1'] },
    ],
    shop: {
      name: '阿斯拉的军需官',
      blurb: '两副眼镜，一本价目。地精的蘑菇摊借她的秤。',
      stock: [
        'greater_healing_potion', 'strong_antitoxin', 'bandage', 'hold_shield', 'chain_mail', 'splint',
        'warhammer', 'heavy_crossbow', 'ward_runestone',
        { id: 'troll_blood_tonic', if: 'flag.khug_goblins_lease' },
        { id: 'goblin_bomb', if: 'flag.khug_goblins_lease' },
      ],
      markup: 1.2,
    },
    choices: [
      {
        text: '照旧图把路重画一遍',
        once: true,
        check: { skill: 'investigation', alt: ['history'], dc: 13, party: true, mods: [{ if: 'is.dwarf', n: 1, why: '矮人的图你看得懂' }, { if: 'item.grudge_book', n: 2, why: '兵团的账本里夹着旧图' }] },
        ok: { text: '玛瑙之门的人是给整座山记账的。旧图上每一段轨都标了里数，连哪个岔口有一口好井都记着。你把塌了的几处补上，用的是红墨。', effects: ['var prep +1'] },
        fail: { text: '图是灰前的。你画到第三段才发觉自己把上下两层拼在了一起，只好揉了重来，天已经黑了。', effects: ['gold -10'] },
      },
      {
        text: '腌肉、封粮',
        once: true,
        check: { skill: 'survival', alt: ['medicine'], dc: 12, party: true },
        ok: { text: '盐抹三遍，腊封口，罐底垫一层干苔。军需官拿第二副眼镜看了看，点头。', effects: ['var prep +1'] },
        fail: { text: '第二天早上，一罐肉鼓了盖。你们把它埋了，埋的时候乌什卡说埋得太浅。', effects: ['gold -15'] },
      },
      {
        text: '办一桌席，唱几段',
        once: true,
        check: { skill: 'performance', alt: ['persuasion'], dc: 12 },
        ok: { text: '你唱到第三段，老兵们开始拿杯底敲桌子打拍子。基尔杜姆头一回没喊列队，因为大家自己站起来了。', effects: ['var prep +1', 'rep companies +1'] },
        fail: { text: '你唱的是人类的歌。矮人们礼貌地听完，接着喝他们自己的。', effects: ['gold -10'] },
      },
      {
        text: '跟老兵们拼酒',
        once: true,
        check: { abil: 'con', dc: 13, save: true },
        ok: { text: '第七杯放下，对面那个老兵扶着桌子说你肚子里有一口井。这话在兵团里传开了，算是夸人。', effects: ['var prep +1', 'rep companies +1'] },
        fail: { text: '第四杯你就看见了两个基尔杜姆。第二天你头疼到中午，布罗克替你多磨了一回铲子。', effects: ['hp -4'] },
      },
      {
        text: '给弟兄们先发一个月的饷',
        once: true,
        req: 'gold >= 80', reqText: '需要 80 金冠',
        effects: ['gold -80', 'var prep +1'],
        result: [
          '出纳刻了八十道。老兵们排队领钱，领完了把钱袋系在腰带里侧。',
          { speaker: '布罗克', text: '先拿钱，再下井。这规矩比祖宗还老。' },
        ],
      },
      {
        text: '看看乌什卡的木签',
        if: 'party.ushka',
        once: true,
        effects: ['quest q_ushka stage 2', 'approval ushka +1'],
        result: [
          '木签上原来刻着十一条。五年里她又刻了三道，划掉了两道。剩下那一道是：先报名号，再动手。',
          { speaker: '乌什卡', text: '划掉的两条不对。骑士自己也不照着做。' },
        ],
      },
      {
        text: '听阿坦讲地底下怎么算天亮',
        if: 'party.tan',
        once: true,
        effects: ['approval tan +1'],
        result: [
          { speaker: '阿坦', text: '一根蜡烛烧一天，二十四道。烧到第六道，外头天亮。我念四十句，念完它就烧到第六道半。' },
          { speaker: '阿坦', text: '要是山里的蜡烛烧得快，那我就是提前念了。提前念应该不要紧。王不挑这个。' },
        ],
      },
      {
        text: '跟军需官玩两把骰子',
        tag: '游荡者',
        if: "class == 'rogue'",
        once: true,
        effects: ['item +greater_healing_potion'],
        result: '她的骰子灌过铅，你的也灌过。两个人对着看了一会儿，她换了一副干净的。你赢了一瓶大药水，她赢了你半条腰带。',
      },
      {
        text: '睡一整夜',
        once: true,
        effects: ['rest long'],
        result: '门洞里的风是从山肚子里往外吹的，带着一股铁锈和凉水的味儿。你睡得很沉。',
      },
      {
        text: '出发',
        goto: 'a2_05',
        result: [
          '兵团和探险队的人在闸口排成两排，出纳点了一遍人头，在刻痕棍上刻了个记号。',
          { if: 'var.prep >= 4', text: '四件事全办齐了。贾尔蒙说，回来要是人数也齐，他自掏腰包请游街。' },
          { if: 'var.prep <= 1', text: '贾尔蒙看了看你们的准备，什么也没说，在账上多留了一页空白。' },
        ],
      },
    ],
  },

  // ───────────────────────── 矮人之路 ─────────────────────────
  a2_05: {
    id: 'a2_05',
    title: '死铁道',
    art: 'ev_dwarven_rail',
    loc: '矮人之路 · 头三段',
    date: '1450年夏初',
    text: [
      '铁道是达格银打的。六千年没人修，它自己还在长：断口上冒出一层新茬，摸上去是温的。有几段至今带电，轨面上隔一会儿爬过一道蓝光，噼啪一声。',
      '轨枕之间隔几步就是一具矮人的遗骨。有的穿着甲，有的只剩一只靴子。脸都朝着来的方向，朝着玛瑙之门。',
      { speaker: '贝尔格拉克', text: '这一具，一四二四。那年弃堡，往东逃的。往前那具，灰前五千八百七十六，铁道停的那年。往家走的，朝向都一样。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '躺了这么久，没人动过。这条道上的死人有福气。' },
      { if: 'party.tan', text: '阿坦每过一具就停一步，嘴里不出声。你数了数，他停了二十几回。' },
      '第三段尽头的桥塌了一半，剩两根轨悬在空中。桥那头的黑地里有东西在嚼木头。',
    ],
    first: ['codex dwarovrod'],
    choices: [
      {
        text: '看清哪几段轨是活的',
        once: true,
        check: { skill: 'arcana', alt: ['investigation'], dc: 13, party: true },
        ok: { text: '活的那几段，轨面底下有一层很淡的纹，一明一暗，跟喘气一样。你拿粉笔在枕木上做了记号。', effects: ['flag a2_live_known'] },
        fail: { text: '你蹲下去看。打头的人一脚踩上了亮的那段，鞋钉炸开一串火星，他躺在地上半天没说话。', effects: ['damage 2d6'] },
      },
      {
        text: '踩着悬空的两根轨过桥',
        check: { skill: 'acrobatics', dc: 12, party: true },
        ok: { text: '你张着胳膊走过去，后头的人一个接一个跟上。最后一个刚落脚，那头的嚼木头声停了。', combat: TROLLS },
        fail: { text: '走到一半脚下一滑，你抱着轨吊了好一会儿才爬上去。半袋粮掉进了黑地里，那头的东西被吵醒了。', effects: ['hp -4', { if: 'var.prep >= 1', then: ['var prep -1'] }], combat: TROLLS },
      },
      {
        text: '把活轨的电引到大家的兵器上，再过桥',
        tag: '施法者',
        if: 'is.caster',
        combat: TROLLS_VOLT,
        result: '你把手按在一段活轨上。电爬上胳膊，再顺着你的手指走到每个人的刃上。刃口嗡嗡响，乌什卡的锤头上跳着蓝火。',
      },
    ],
  },

  a2_05b: {
    id: 'a2_05b',
    title: '轨枕之间',
    loc: '矮人之路 · 第三段',
    text: [
      '巨魔啃的那截枕木底下压着三具遗骨。骨头上有牙印，新的。',
      '再往前，一直到第三段尽头，你们数出来三十一具。贝尔格拉克一具一具报年份，加莱尔一笔一笔记。有两具攥着手，分不清是谁的骨头。',
      { if: 'party.ushka', speaker: '乌什卡', text: '带出去，得一具一具裹。车上挤一挤，装得下。' },
      { speaker: '贝尔格拉克', text: '三十一。名字进账本，人进石头。账本我有，石头在红宝石领。' },
      { if: 'is.god', text: '铁轨在你脚下嗡嗡地响，一段接一段，一直响到黑地里头。它在等一个肯给它通电的人。' },
    ],
    choices: [
      {
        text: '把遗骨一具一具裹好，收上车',
        effects: ['flag rail_bones', 'rep companies +1', 'approval ushka +1'],
        result: '你们拆了两顶帐篷裹骨头。布罗克在每个包上用炭笔写了年份。车沉了一截。',
        goto: 'a2_06',
      },
      {
        text: '记下位置，人先往前走',
        effects: ['approval belgrak +1'],
        result: [
          { speaker: '贝尔格拉克', text: '记下了。三十一具，第三段，左轨。账上欠他们一趟车，不欠一车骨头。' },
        ],
        goto: 'a2_06',
      },
      {
        text: '让整条铁道重新跑起来',
        tag: '神',
        if: 'is.god',
        effects: ['flag rail_woken', 'approval belgrak -1'],
        result: [
          '你把手掌贴在轨上。蓝光从你手底下跑出去，一段点亮一段，一直亮到看不见的地方。停了六千年的车皮自己滑了起来。',
          '一个时辰，你们到了乔卡德枢纽。路上经过交轨大厅，转车台上的地精全跑上车顶看，有一个摔了下去。',
          '山里所有的东西都听见了。黑地里远远有骨号响了一声，又一声。',
          { speaker: '贝尔格拉克', text: '六千年，八十三段。你一个时辰。这一笔，账上没地方记。' },
        ],
        goto: 'a2_08',
      },
    ],
  },

  a2_06: {
    id: 'a2_06',
    title: '交轨大厅的过路费',
    art: 'ev_goblin_ambush',
    loc: '交轨大厅 · 转车台',
    text: [
      '交轨大厅是众矮人之国的调车场，管全山的车和信。当年一张攻城的军需单子从这儿发出去，二十九门铜臼炮，四百多斗麦子，到货比约的时辰早三分钟，一粒麦子没少。贝尔格拉克说这件事的时候，声音比平时低。',
      '如今转车台上一圈一圈停着几百节车皮，每节里都住着铁路潜伏者氏族的地精，晾着衣裳，冒着灶烟。',
      '头领布拉克坐在调度亭里，面前一块账板。他按车皮收钱。',
      { speaker: '布拉克', text: '兵团那两百个脑袋，基尔杜姆按团价付过了。你们另一张单子。一节车皮四十，人头一个十五，死人另算，一具五个。你们这车，一百五。' },
      { if: 'flag.rail_bones', speaker: '布拉克', text: '车上那三十一包，看见了。按规矩该加一百五十五。抹了。死了六千年的，我不收。' },
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第七条，先谈价。让我来。' },
      { if: 'party.belgrak', text: '贝尔格拉克的手搁在斧柄上。他说账上有铁路潜伏者四笔，最近的一笔是一车皮铅锭。' },
    ],
    choices: [
      {
        text: '照价付一百五',
        if: '!flag.a2_haggle_failed',
        req: 'gold >= 150', reqText: '需要 150 金冠',
        effects: ['gold -150', 'flag a2_paid'],
        result: '布拉克在账板上划了一道，撕下一张车皮签给你。签上画着一节车厢，车厢里画着一个小人，躺着的。',
        goto: 'a2_07',
      },
      {
        text: '认了，付两百',
        if: 'flag.a2_haggle_failed',
        req: 'gold >= 200', reqText: '需要 200 金冠',
        effects: ['gold -200', 'flag a2_paid'],
        result: '布拉克收了钱，账板上没划，直接翻了一页。',
        goto: 'a2_07',
      },
      {
        text: '让妮克西跟他讲价',
        if: 'party.nixee && !flag.a2_haggle_failed',
        check: { skill: 'persuasion', dc: 14, party: true, mods: [{ if: 'flag.khug_goblins_lease', n: 2, why: '玛瑙之门那份租约传到了这儿' }, { if: 'rep.clans >= 2', n: 1, why: '氏族里有人替你们说过话' }], dis: 'flag.khug_goblins_out' },
        ok: {
          text: [
            '妮克西和布拉克互相报了一遍各自记得的规矩，报到第六十几条，布拉克认输了。六十个金冠，外加一张往后通行的约，按年续。',
            { speaker: '布拉克', text: '回程不收。签别丢。丢了按新客算。' },
          ],
          effects: ['gold -60', 'flag rail_contract', 'world room +1', 'item +brack_token', 'flag a2_paid', 'approval nixee +1'],
          goto: 'a2_07',
        },
        fail: {
          text: [
            '妮克西报到第十九条，布拉克报了一条第二百二十二：身上藏三把刀，一把给敌人，一把给朋友，一把捅自己，好栽给东家。妮克西没听过这条。',
            { speaker: '布拉克', text: '两百。不讲了。' },
          ],
          effects: ['flag a2_haggle_failed'],
        },
        once: true,
      },
      {
        text: '你自己跟他讲价',
        if: '!party.nixee && !flag.a2_haggle_failed',
        once: true,
        check: { skill: 'persuasion', dc: 16, party: true, dis: 'flag.khug_goblins_out' },
        ok: {
          text: '你把车上每一样东西的轻重报给他听，他按斤重新算了一遍，算出来六十。外加一张往后通行的约。',
          effects: ['gold -60', 'flag rail_contract', 'world room +1', 'item +brack_token', 'flag a2_paid'],
          goto: 'a2_07',
        },
        fail: {
          text: [
            { speaker: '布拉克', text: '你讲价的样子像矮人。两百。' },
          ],
          effects: ['flag a2_haggle_failed'],
        },
      },
      {
        text: '跟他说地精话，按亲戚价算',
        tag: '地精',
        if: 'is.goblin',
        effects: ['gold -60', 'flag rail_contract', 'world room +1', 'item +brack_token', 'flag a2_paid'],
        result: [
          '你报了自己的氏族，又报了断链那天你在哪条街上。布拉克把账板翻到背面，那一面的数小得多。',
          { speaker: '布拉克', text: '六十。签拿着。往后你的车都按亲戚算，你车上那些大个子不算。' },
        ],
        goto: 'a2_07',
      },
      {
        text: '翻出兵团账本里铅锭那一笔，拿它抵过路费',
        tag: '负怨者',
        if: "origin == 'grudge' && item.grudge_book",
        effects: ['flag rail_contract', 'world room +1', 'item +brack_token', 'flag a2_paid', 'rep companies -1'],
        result: [
          '账本第九百多页：铁路潜伏者，偷铅锭一车皮，灰元 1302 年。你当着布拉克的面把它划了，旁边写上“抵过路费，两清”。',
          { speaker: '布拉克', text: '一车皮铅，换你们一趟来回。划算。我爷爷偷的，我认。' },
          '兵团里有几个老兵别过了脸。那一车铅是他们哪一家的，你没问。',
        ],
        goto: 'a2_07',
      },
      {
        text: '半夜从机修棚那边摸过去',
        check: { skill: 'stealth', dc: 14, party: true, adv: 'is.small' },
        ok: { text: '机修棚里堆着拆下来的车轮，正好挡住你们。板车的轮子上缠了布，一声没响。天亮的时候，转车台已经在身后了。', goto: 'a2_07' },
        fail: { text: '一只车轮倒了，滚了好远。车顶上亮起一排灯笼。', combat: GOBLINS },
      },
      {
        text: '不给，硬闯',
        effects: ['world room -1'],
        combat: GOBLINS,
      },
    ],
  },

  a2_07: {
    id: 'a2_07',
    title: '蘑菇宴',
    art: 'ev_fungrum',
    loc: '交轨大厅 · 灶间',
    text: [
      { if: 'flag.a2_paid', text: '付了钱的客人有一顿饭。灶间设在一节旧邮车里，邮格还钉在墙上，现在放的是碗。锅里炖的是黄光蘑菇，熟了也还亮，汤是金的。' },
      { if: 'flag.a2_paid', text: '掌勺的地精说，规矩是祭司先尝，尝了没事别人才动勺子。{?party.tan:阿坦尝了一口，说咸。|你们车上的祭司尝了一口，说咸。}一屋子地精这才低头喝汤。' },
      { if: '!flag.a2_paid', text: '没给钱的客人没饭吃。你们在铁道边上扎了个冷营，啃干饼，就着轨上偶尔跳一下的蓝光看彼此的脸。' },
      { if: 'party.tan', text: '阿坦掐着那根刻了痕的蜡烛做晨祷。四十句，他念得不快。{?flag.a2_paid:一屋子地精端着碗看他，勺子都停了。|铁道那头有几个放哨的地精，听着听着坐下了。}念完第四十句，他合上嘴。' },
      { if: 'party.tan && flag.a2_paid', speaker: '掌勺的地精', text: '还有呢？' },
      { if: 'party.tan && flag.a2_paid', speaker: '阿坦', text: '还有一句。我不念。' },
      { if: 'party.belgrak', speaker: '贝尔格拉克', text: '我跟雷萨格头一回下这条线，是灰元一三九……' },
      { if: 'party.belgrak', text: '他没往下说，把烟斗磕了磕。' },
      { if: 'party.garaele', text: '加莱尔回来的时候，手里攥着一张纸。一个地精卖给她的：一对精灵夫妇三个月前路过，拿纸和墨付的过路费，往乔卡德枢纽去了。纸上是她母亲的字，写的是一张收条。' },
    ],
    choices: [
      {
        text: '喝那锅炖菜',
        if: 'flag.a2_paid',
        once: true,
        check: { abil: 'con', dc: 12, save: true, adv: 'is.goblin' },
        ok: { text: '有点辣，回味是土的味儿。你喝了两碗，嘴唇亮了一晚上。', effects: ['heal 2d4'] },
        fail: { text: '半个时辰后你脸上起了一片紫点子。地精们说这叫紫热，喝错了锅的都这样，明早就消。他们笑了一晚上，第二天还在笑。', effects: ['hp -5'] },
      },
      {
        text: '看布拉克跟谁说话',
        if: 'flag.a2_paid',
        once: true,
        check: { skill: 'insight', dc: 14, party: true },
        ok: { text: '饭吃到一半，布拉克出去了一趟。回来时他腰上多了一串黑石头的珠子。黑皮兽人才用那种石头。过路人往哪边走，他也卖。', effects: ['flag a2_brack_seen'] },
        fail: { text: '你盯了他一晚上，只看出他饭量很大。他走的时候拍了拍你的肩，说盯人也算一份手艺，回头按次收。', effects: ['gold -2'] },
      },
      {
        text: '再塞他六十，把嘴堵上',
        if: 'flag.a2_brack_seen && !flag.rail_contract',
        once: true,
        req: 'gold >= 60', reqText: '需要 60 金冠',
        effects: ['gold -60', 'flag brack_bought'],
        result: [
          { speaker: '布拉克', text: '你们往哪边走，我不知道。我连你们来过都不知道。这个价，管一个月。' },
        ],
      },
      {
        text: '提一句你们俩签过的那张约',
        if: 'flag.a2_brack_seen && flag.rail_contract',
        once: true,
        effects: ['flag brack_bought'],
        result: [
          { speaker: '布拉克', text: '约上有一条：签了约的车，算自家的车。自家的车往哪走，不往外说。是我写的这条，我差点忘了。' },
        ],
      },
      {
        text: '躺下，等蜡烛烧到第六道',
        effects: ['rest short'],
        result: '你们轮流守夜。天亮是阿坦说了算的。他说亮了，大家就起来。',
        goto: 'a2_08',
      },
    ],
  },

  // ───────────────────────── 泵房 ─────────────────────────
  a2_08: {
    id: 'a2_08',
    title: '勘测营',
    art: 'ev_dark_expedition',
    loc: '乔卡德枢纽以西 · 一处泵房',
    text: [
      '泵房是胡尔-乔卡德的矮人修的，墙里走着铅管，有一人粗，管口挂着干了的水锈。墙角支着两张铺。铺上两具遗体，盖着各自的斗篷，三个月了。',
      '东西没怎么翻过。墨水瓶还立着，笔插在里面。门是从里头用一张桌子顶上的，桌子腿断了。',
      '桌上摊着一本勘测簿，最后一行是女人的字：铅管内壁无锈，乔卡德的匠人不拿铅走饮水，此说可信。写到这儿，墨点了一下，没往下写。',
      { if: 'party.ushka', text: '乌什卡先进去看的伤。她看完了，出来洗手，洗了很久。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '黑石头矛头。崩在骨头里了，三处。' },
      { if: 'is.god', text: '加莱尔站在门口。你刚要开口，她先说了。' },
      { if: 'is.god', speaker: '加莱尔', text: '别。我要记的是他们死了。' },
      { if: '!is.god', text: '加莱尔站在门口，把本子打开，又合上。她没有进去。' },
    ],
    first: ['codex pastkeepers', 'quest q_parents stage 3', 'item +rubbing_book'],
    choices: [
      {
        text: '找他们藏起来的东西',
        once: true,
        check: { skill: 'investigation', dc: 13, party: true },
        ok: {
          text: '烟道口的砖是新抹的灰。你抽出两块砖，里面是一本拓片本，油布包了三层。看灰的干法，本子是先藏好的，桌子是后顶上的。',
          effects: [{ if: 'party.garaele', then: ['approval garaele +1'] }],
        },
        fail: {
          text: '你们把半面墙拆了才在烟道里摸到那本拓片本。一块砖砸在你脚背上。',
          effects: ['hp -3'],
        },
      },
      {
        text: '看他们是怎么走的',
        once: true,
        check: { skill: 'medicine', dc: 12, party: true },
        ok: { text: '母亲身上的伤在前头，三处，她站着挨的。父亲伤在腿上，他是自己爬回铺上的，爬了一段。走得不快。' },
        fail: { text: '你看了半天，只看出他们是一起躺下的。手背被铅管的毛刺刮了一道。', effects: ['hp -2'] },
      },
      {
        text: '她问你他们走得快不快。说快，没受什么罪',
        effects: ['var lies +1', 'flag lied_to_garaele'],
        result: [
          '她点了点头，在本子上写了一行。她写得很慢，写完把那一行看了两遍。',
          { if: 'party.ushka', text: '乌什卡在你身后哼了一声，转身去裹斗篷了。' },
        ],
        goto: 'a2_09',
      },
      {
        text: '照实说：走得不快',
        effects: [{ if: 'party.garaele', then: ['approval garaele +1'] }],
        result: [
          '你把门、桌子和那三处伤一样一样说了。她一边听一边记，中间只问了一句：桌子是谁顶的。',
          { speaker: '加莱尔', text: '我母亲。她顶门总是顶不牢。' },
        ],
        goto: 'a2_09',
      },
      {
        text: '让乌什卡自己答',
        if: 'party.ushka',
        effects: ['approval ushka +1'],
        result: [
          { speaker: '乌什卡', text: '不快。她先挨的。他爬回去，躺在她边上。' },
          '加莱尔把这三句一字不改地记了下来，在后面加了个日子。',
        ],
        goto: 'a2_09',
      },
    ],
  },

  a2_09: {
    id: 'a2_09',
    title: '两口子的葬礼',
    art: 'ev_elven_constellation',
    loc: '乔卡德枢纽以西 · 一处泵房',
    text: [
      '拜月神的人要在月光底下入土。这里离月亮隔着半座山。',
      { speaker: '加莱尔', text: '上回我们家埋人，是在船上，往海里放。我祖母讲的。她的上回是四百年前。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '石头垒起来，底下的谁也挖不动。在这儿，也行。' },
      { if: 'party.belgrak', speaker: '贝尔格拉克', text: '兵团里有个砌匠。三尺见方，四个时辰。我们的规矩，人进石头。' },
      { if: 'party.tan', text: '阿坦说他只会念王的词，月神的不会。加莱尔说没关系，王的词她听过，句子都不长。' },
      '加莱尔问哪边是往上，往地面。规矩是脸要朝着月亮出来的方向。贝尔格拉克拿斧柄在地上划了一道，说东偏北，往上两千尺。',
      { if: 'is.god && party.tan', text: '阿坦把蜡烛举到你面前，问你知不知道外头这会儿几时。你知道。他听完，还是低头看了一眼蜡烛上的刻痕。' },
    ],
    choices: [
      {
        text: '就地垒石头埋了，阿坦念词',
        effects: ['flag parents_buried_deep', 'world unburied -1', 'var rites +1', 'log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。'],
        result: '石头垒到齐胸高。阿坦念的是晨祷的头四句，念完看了加莱尔一眼。加莱尔在最上面那块石头上刻了个月牙，刻歪了，她没改。',
        goto: 'a2_10',
      },
      {
        text: '你来主礼，念月神的词',
        tag: '神职',
        if: 'is.divine',
        effects: ['flag parents_buried_deep', 'world unburied -1', 'var rites +1', { if: 'party.garaele', then: ['approval garaele +1'] }, 'log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。'],
        result: '你念的词各家神殿大同小异，到月神这里多了一句，求她认得回家的路。加莱尔跟着念了那一句，声音比你低半个调。',
        goto: 'a2_10',
      },
      {
        text: '把月光从山顶上引下来，照着埋',
        tag: '神',
        if: 'is.god',
        effects: ['flag parents_buried_deep', 'world unburied -1', 'var rites +1', { if: 'party.garaele', then: ['approval garaele -2'] }, 'log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。'],
        result: [
          '泵房外头亮了。一道白光从石缝里落下来，正好照在两个坑上。',
          { speaker: '加莱尔', text: '这不是月光，是你。' },
          '她还是让你们埋了。那一页上她写的是：入土，光自称为月。',
        ],
        goto: 'a2_10',
      },
      {
        text: '裹好带上车，出山找个有月亮的地方',
        effects: ['flag parents_carried', 'log 守昔者夫妇，裹好上了车，等一个有月亮的晚上。'],
        result: '你们拿油布裹了三层，又拿绳子捆紧。车上多了两副担架，推起来沉了。加莱尔走在车边上，一只手扶着。',
        goto: 'a2_10',
      },
    ],
  },

  a2_10: {
    id: 'a2_10',
    title: '兵团分家',
    loc: '乔卡德枢纽 · 旧站台',
    text: [
      '乔卡德枢纽是三条线碰头的地方。站台有半里长，柱子上还钉着收税的铜牌，一排一排的窗口，窗口后头没人。',
      '近处的几笔账讨完了。一面家传的盾，一扇刻着名字的门，三个兽人头目的牙。合同上写的数也够了。',
      { speaker: '基尔杜姆', text: '合同写的是十二笔。讨了十四笔。我说回头。' },
      { speaker: '贝尔格拉克', text: '三百一十二条，讨了十四。下一页。' },
      '老兵们当场分成三堆。一堆要往胡尔-乔卡德去讨铅，说那堆铅是祖上被抢的；一堆要回交轨大厅找一把叔公的斧子；还有一堆蹲着不动，等别人吵完。布罗克坐在他的铲子上，哪堆也不去。',
    ],
    first: ['level 5'],
    choices: [
      {
        text: '站到站台中间，讲哪一笔离得最近、最该先讨',
        if: '!flag.a2_split_done',
        once: true,
        check: { skill: 'persuasion', dc: 15, party: true, adv: 'flag.a2_struck_survey', mods: [{ if: "origin == 'grudge'", n: 1, why: '自己兵团的人' }, { if: 'rep.companies >= 3', n: 1, why: '诸团里有你们的名声' }] },
        ok: {
          text: '你说胡尔-乔卡德就在下一站，铅跑不了，斧子也跑不了。先去近的，再回头。三堆人慢慢并成了一堆，基尔杜姆趁机喊了一声列队，这回有人应。',
          effects: ['flag company_whole', 'rep companies +1', 'flag a2_split_done'],
        },
        fail: {
          text: '你说到一半，要斧子的那一堆已经背上包走了。三分之一的人顺着来路回去，站台上空出一块。',
          effects: ['flag a2_split_done'],
        },
      },
      {
        text: '翻出账上的里数，讲哪一笔最该先讨',
        if: '!flag.a2_split_done',
        once: true,
        check: { skill: 'history', dc: 14, party: true, adv: 'flag.a2_struck_survey', mods: [{ if: 'item.grudge_book', n: 1, why: '账本在你背上' }] },
        ok: {
          text: '你翻到那堆铅的那一页，念了它被抢的年份，又念了斧子那一页。铅在前，斧子在后，照祖宗的先后讨。老兵们没话说了。',
          effects: ['flag company_whole', 'rep companies +1', 'flag a2_split_done'],
        },
        fail: {
          text: '你念错了一个年份，差了三百年。要斧子的那一堆人笑着走了，走了三分之一。',
          effects: ['flag a2_split_done'],
        },
      },
      {
        text: '站到基尔杜姆身后：账是祖宗传的，轮不到活人挑',
        tag: '承嗣',
        if: "faction == 'heirs' && !flag.a2_split_done",
        once: true,
        check: { skill: 'history', dc: 14, party: true, adv: 'flag.a2_struck_survey', mods: [{ if: "faction == 'heirs'", n: 2, why: '名分定了，刀才收得回去' }] },
        ok: {
          text: [
            '你站到年轻的队长身后，替他把合同和名单一条一条对了一遍。合同在前，名单在后，先签的先算。基尔杜姆的腰板直了，老兵们一个一个站回队里。',
            { speaker: '贝尔格拉克', text: '照这么说，头一条该先讨。头一条在议会之门。' },
          ],
          effects: ['flag company_whole', 'rep companies +1', 'flag a2_split_done', 'approval belgrak -1'],
        },
        fail: {
          text: '老兵们听你讲祖宗，听得直点头，点完了照样分家。走的那三分之一里，有人临走拍了拍基尔杜姆的肩。',
          effects: ['flag a2_split_done', 'approval belgrak -1'],
        },
      },
      {
        text: '喊一句：谁还想往前走，举手',
        tag: '无冕',
        if: "faction == 'crownless' && !flag.a2_split_done",
        once: true,
        check: { skill: 'persuasion', dc: 15, party: true, adv: 'flag.a2_struck_survey', mods: [{ if: "faction == 'crownless'", n: 2, why: '椅子空着，天也没塌' }] },
        ok: {
          text: '站台上静了一会儿。先举手的是布罗克，举的是铲子。后头稀稀拉拉跟上来一片，最后连要斧子的那一堆也举了，说斧子回头再找。',
          effects: ['flag company_whole', 'rep companies +1', 'flag a2_split_done'],
        },
        fail: {
          text: '举手的不到一半。没举的那些人自己数了数，觉得人够多了，背上包往回走了。',
          effects: ['flag a2_split_done'],
        },
      },
      {
        text: '当场划掉勘测营那一条',
        tag: '负怨者',
        if: "origin == 'grudge' && item.grudge_book && !flag.a2_struck_survey && !flag.a2_split_done",
        once: true,
        effects: ['flag a2_struck_survey', 'rep companies -1', { if: 'party.garaele', then: ['approval garaele +2'] }],
        result: [
          '账本上有一条：守昔者夫妇，欠兵团护送费，四十金冠。你把它划了，在旁边写：人已入土，两清。',
          '有个老兵嘟囔说钱是钱。加莱尔把你写的那行字抄进了她自己的本子。老兵们看你的眼神变了：这个人真敢划。',
        ],
      },
      {
        text: '由他们吵，你们收拾车',
        if: '!flag.a2_split_done',
        once: true,
        effects: ['flag a2_split_done', 'rep companies -1'],
        result: '吵到最后，要斧子的那一堆走了，三分之一。基尔杜姆看了你一眼，那意思是你本来可以说两句的。',
      },
      {
        text: '上站台边那辆手摇车',
        if: 'flag.a2_split_done && !flag.rail_woken',
        goto: 'a2_11',
      },
      {
        text: '坐那节自己会跑的车，往胡尔-乔卡德去',
        if: 'flag.a2_split_done && flag.rail_woken',
        result: '铁道还亮着。车皮载着你们一路往下滑，到胡尔-乔卡德的站台，自己停了。站台上的灰被风吹开，露出底下一排脚印，是新的，光着脚。',
        goto: 'a2_12',
      },
    ],
  },

  a2_11: {
    id: 'a2_11',
    title: '乔卡德枢纽的手摇车',
    art: 'ev_the_covenant',
    loc: '乔卡德枢纽 · 下行线',
    text: [
      '手摇车是一块铁板架在四个轮子上，中间一根压杠，两个人一上一下。你们刚把车推上轨，后头的黑地里就有了声音：爪子刮石头，一下，一下，不紧不慢。',
      '黑皮兽人的探子是不出声的。出声的是他们牵着的钩爪怪。',
      '站台尽头的墙上刻着一张线路图，三条线在这儿交成一个结。胡尔-乔卡德的矮人从前替这个结看门，每过一车收一回税。线路图上的下行线，有一段被人拿刀划掉了。',
      { if: 'party.belgrak', speaker: '贝尔格拉克', text: '前头三个岔。头一个往左，第二个往右，第三个有一条是断的。哪条断，我忘了。' },
    ],
    first: ['codex black_orcs', 'var a2_miss =0'],
    choices: [
      {
        text: '压杠，往前冲',
        if: '!flag.a2_c1',
        once: true,
        check: { skill: 'athletics', dc: 13, party: true },
        ok: { text: '杠子一上一下，车轮唱起来。后头的爪子声远了一截。', effects: ['flag a2_c1'] },
        fail: { text: '压杠的两个人没对上拍，车颠了一下。后头的声音近了，能听见喘气。', effects: ['flag a2_c1', 'var a2_miss +1'] },
      },
      {
        text: '头一个岔口，扳道往左',
        if: 'flag.a2_c1 && !flag.a2_c2',
        once: true,
        check: { skill: 'sleight', dc: 13, party: true },
        ok: { text: '你探出半个身子扳道岔。车拐过去的时候，左轮离了轨一下，又落回去。', effects: ['flag a2_c2'] },
        fail: { text: '道岔锈得死。你扳了两下才扳动，车速掉了一半。后头有一支矛扎在车尾的铁板上。', effects: ['flag a2_c2', 'var a2_miss +1'] },
      },
      {
        text: '盯着前头，看哪条线是断的',
        if: 'flag.a2_c2 && !flag.a2_c3',
        once: true,
        check: { skill: 'perception', dc: 12, party: true },
        ok: { text: '右边那条，轨面上没有蓝光。断的。你喊了一声，车往左走了。', effects: ['flag a2_c3'] },
        fail: { text: '你看错了。车冲上右边那条，轨到头了，你们一齐跳车。车翻进了黑地里。', effects: ['flag a2_c3', 'var a2_miss +1', 'hp -3'] },
      },
      {
        text: '停下来，跟追上来的打',
        if: 'flag.a2_c3 && var.a2_miss >= 2',
        combat: CHASE,
      },
      {
        text: '甩掉他们，往胡尔-乔卡德去',
        if: 'flag.a2_c3 && var.a2_miss < 2',
        effects: ['xp 200'],
        result: '后头的爪子声一点一点没了。车滑进胡尔-乔卡德的站台，停在一排倒塌的澡堂柱子前头。',
        goto: 'a2_12',
      },
    ],
  },

  // ───────────────────────── 胡尔-乔卡德 ─────────────────────────
  a2_12: {
    id: 'a2_12',
    title: '竖井口',
    loc: '胡尔-乔卡德 · 通往最底层的竖井口',
    text: [
      '胡尔-乔卡德是管水的堡。水道干了，澡堂的瓷砖还在，青的白的，一块没碎。往下的竖井口拿铅封着，封口有三尺厚。底下塌实了，下不去。',
      '井壁上有字，不是矮人的。困在堡里的精灵兵刻的，刻得很深：一段值夜的祷词，一位一位列着他们的神；末尾是主将的名字。',
      { if: 'party.garaele', speaker: '加莱尔', text: '这一位，是天上的卡斯特拉尔。主将的名字念作杜卡涅尔。' },
      { if: '!party.garaele', text: '你照着拓片上的字母一个一个拼。天上的卡斯特拉尔。主将叫杜卡涅尔。' },
      { if: 'party.ushka', text: '乌什卡听了一会儿，哼出一句。是她小时候老萨满唱的，造兽人的那一位，名字叫杜坎尼尔。跟墙上那个，只差一个音。' },
      { if: '!party.ushka', text: '塌方那头有人在唱，是个老萨满。唱的是造兽人的那一位，叫杜坎尼尔。跟墙上那个，只差一个音。' },
      '塌方那头的嗓子又换了腔，骂人了。破碎之冠的旧杜坎信徒，骂杜坎森是假先知，把矮人的罪记到人类头上。',
      { if: 'party.tan', speaker: '阿坦', text: '神都活着。只是从来不是我们的。他是他们的神，跟着他们走了。' },
    ],
    first: ['flag castellar_seen', 'flag dookanil_known', 'item +shaft_rubbing', 'quest q_dragon stage 3', 'codex hul_jorkad', 'codex ducaniel', 'codex dookan'],
    choices: [
      {
        text: '看刻痕的手法，断个年代',
        once: true,
        check: { skill: 'history', dc: 14, party: true },
        ok: { text: '刻字的凿子是精灵的，下刀从左往右，跟矮人的反着。字底下压着一层更老的矮人刻痕，被人铲平过。先驱精灵的手笔，错不了。', effects: [{ if: 'party.garaele', then: ['approval garaele +1'] }] },
        fail: { text: '你凑太近，袖口蹭糊了拓片的一角。加莱尔没说话，自己又拓了一张。', effects: [{ if: 'party.garaele', then: ['approval garaele -1'] }] },
      },
      {
        text: '对一对祷词的格式',
        once: true,
        check: { skill: 'religion', dc: 13, party: true },
        ok: { text: '先唤名，再报时辰，最后一句求天明。跟阿坦的晨祷是一个格。阿坦把两份对着念了一遍，念到最后一句，两边都缺了一截。', effects: [{ if: 'party.tan', then: ['approval tan +1'] }] },
        fail: { text: '你认了半天没认出来。塌方那头的萨满听见你嘀咕，扔过来一块石头。', effects: ['damage 1d4'] },
      },
      {
        text: '探一探井底',
        once: true,
        check: { skill: 'arcana', dc: 14, party: true },
        ok: { text: '底下有一道法术的残迹。很大，很旧，铅封压着它，压了六千年还没压住。你收回手的时候，指甲缝里是凉的。' },
        fail: { text: '你刚探下去，有个东西往回顶了你一下。你坐在地上，耳朵里嗡了半天。', effects: ['damage 1d6'] },
      },
      {
        text: '动手清开塌方',
        once: true,
        effects: ['damage 1d8'],
        result: '你搬开第一块，上头掉下来三块。贝尔格拉克说胡尔-乔卡德的塌方是一层压一层的，搬一块，塌一丈。',
      },
      {
        text: '隔着塌方，跟老萨满对唱',
        tag: '退潮的人',
        if: "origin == 'tide' && !flag.a2_sang",
        once: true,
        effects: ['flag a2_sang'],
        result: '你起了个头。那边停了一下，接上了。他唱一句你接一句，唱到杜坎尼尔的名字，两边一起唱的。唱完了，他问你是哪一家的。',
      },
      {
        text: '替杜坎森回他一嘴',
        tag: '退潮的人',
        if: "origin == 'tide' && flag.a2_sang",
        once: true,
        check: { skill: 'intimidation', dc: 14 },
        ok: { text: '你说杜坎森带着你们出了山，你们看见了天。那边半天没出声，后来说了句：天上也没什么。', effects: ['rep clans +1'] },
        fail: { text: '你吼了一句。那边吼回来的是一串你没听过的诅咒，带着你的氏族名。', effects: ['rep clans -1'] },
      },
      {
        text: '问他，杜坎手上的锁链是谁上的',
        tag: '退潮的人',
        if: "origin == 'tide' && flag.a2_sang",
        once: true,
        check: { skill: 'insight', dc: 13 },
        ok: { text: '他说老辈人讲，杜坎想找块地方住，矮人把他锁了。是你们那个假先知改的口，把地面上的神也算了进去，好让你们出山去砸人类的庙。他说完就走了，脚步声往底下去。', effects: [{ if: 'party.ushka', then: ['approval ushka +1'] }] },
        fail: { text: '他听出你是杜坎森的人，只回了一句：问你那个假先知去。', effects: ['hp -2'] },
      },
      {
        text: '跟着乌什卡把那句唱词哼出来',
        tag: '兽人',
        if: 'is.greenskin && !is.goblin',
        once: true,
        effects: ['rep clans +1', { if: 'party.ushka', then: ['approval ushka +1'] }],
        result: '你不知道自己会这一句。张嘴就出来了，跟你阿妈哄你睡觉时的调子一样。塌方那头的萨满不骂了。',
      },
      {
        text: '念出墙上那两位你小时候听过的名字',
        tag: '精灵',
        if: 'is.elf',
        once: true,
        effects: [{ if: 'party.garaele', then: ['approval garaele +1'] }],
        result: [
          '祷词里有两位的名字，你小时候在摇篮曲里听过。那支曲子没有词，只有名字，一个接一个，唱到第七个就睡着了。墙上这一列有八个。多出来的那个，你家的曲子里没有。',
          { if: 'party.garaele', speaker: '加莱尔', text: '你家也唱这支。' },
        ],
      },
      {
        text: '把塌方一块一块挪开，铅封也掀了',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag god_opened_shaft', 'world embers +1', { if: 'party.ushka', then: ['approval ushka -1'] }],
        result: [
          '石头挪得动，三尺厚的铅也挪得动。你掀开一角，底下有个东西应了你一下。很旧，很大，不是冲你来的。',
          '全队都喊你停手。你没停，井壁裂了一道缝，又自己合上了。还是下不去。',
          '塌方那头的老萨满在喊：造物主翻身了。喊完他隔着石头问你：你是哪一位，替谁来开锁。',
        ],
      },
      {
        text: '收好拓片，往上层的闸口走',
        result: '拓片卷成一卷，塞进竹筒，加莱尔把竹筒挂在自己脖子上。往上走的时候，后头的黑地里响了一声骨号。',
        goto: 'a2_13',
      },
    ],
  },

  a2_13: {
    id: 'a2_13',
    title: '铅闸',
    art: 'ev_orc_with_axe',
    loc: '胡尔-乔卡德 · 上层闸口',
    text: [
      '上层闸口有一道铅闸，一尺厚，挂在两根铜链上。乔卡德湖涨水的年月，矮人一夜要放三回闸，闸轮上的把手磨得发亮。如今挡的是别的。',
      '骨号响了三声，黑皮兽人的大队到了。他们不喊，矛头是黑曜石的，在灯底下一点光也不反。前头吹号的那个，号是拿深渊鸦的腿骨做的。',
      { if: 'flag.company_whole', text: '兵团两百人一个不少，背靠铅闸站了三排。基尔杜姆在最前头，这回是他自己站过去的。' },
      { if: '!flag.company_whole', text: '兵团剩下的人背靠铅闸站了两排，第二排有空当。' },
      { if: 'flag.rail_woken', text: '来的比该来的多。铁道醒了一回，山里每一个窝都听见了。' },
      { if: 'is.god', text: '战号手的眼睛越过兵团，落在你身上。他们的规矩是先杀对面最大的那个。他看了一圈，认定了你。' },
      { if: 'party.belgrak', speaker: '贝尔格拉克', text: '四十个。闸轮在左边，一百二十圈。谁去转？' },
    ],
    first: ['codex black_orcs'],
    choices: [
      {
        text: '一个人顶在闸口，让别人去转闸轮',
        tag: '战士系',
        if: 'is.martial && !flag.a2_held',
        once: true,
        effects: ['flag a2_held', 'hp -6'],
        result: '你站到闸口正中间。头一支矛扎在你脚前的地上，第二支扎进你肩膀。后头闸轮开始响了，一圈，两圈。',
      },
      { text: '背靠铅闸，守住', if: NB + ' && !flag.rail_woken && flag.company_whole', combat: { ...LEAD, enemies: LEAD_E3, allies: VETS2 } },
      { text: '背靠铅闸，守住', if: NB + ' && !flag.rail_woken && !flag.company_whole', combat: { ...LEAD, enemies: LEAD_E3, allies: VETS1 } },
      { text: '背靠铅闸，守住', if: B + ' && !flag.rail_woken && flag.company_whole', combat: { ...LEAD, enemies: LEAD_E1, allies: VETS2 } },
      { text: '背靠铅闸，守住', if: B + ' && !flag.rail_woken && !flag.company_whole', combat: { ...LEAD, enemies: LEAD_E1, allies: VETS1 } },
      { text: '背靠铅闸，守住', if: NB + ' && flag.rail_woken && flag.company_whole', combat: { ...LEAD, enemies: LEAD_E6, allies: VETS2 } },
      { text: '背靠铅闸，守住', if: NB + ' && flag.rail_woken && !flag.company_whole', combat: { ...LEAD, enemies: LEAD_E6, allies: VETS1 } },
      { text: '背靠铅闸，守住', if: B + ' && flag.rail_woken && flag.company_whole', combat: { ...LEAD, enemies: LEAD_E4, allies: VETS2 } },
      { text: '背靠铅闸，守住', if: B + ' && flag.rail_woken && !flag.company_whole', combat: { ...LEAD, enemies: LEAD_E4, allies: VETS1 } },
    ],
  },

  a2_14: {
    id: 'a2_14',
    title: '贝尔格拉克的名单',
    art: 'load_18',
    loc: '胡尔-乔卡德 · 闸口内侧',
    date: '当夜',
    text: [
      '闸落下了。外头的号声隔着一尺厚的铅，一直响到后半夜。',
      { if: 'flag.brok_lives', text: '布罗克坐在闸边上擦铲子。铲刃上缺了一个口，他说缺得好，往后挖坑有个记号。' },
      { if: '!flag.brok_lives', text: '布罗克倒在闸口，铲子压在身子底下。兵团的人把他抬到墙根，跟别的几个并排放着。他的铲子没人去拿。' },
      '贝尔格拉克摊开名单，给你们讲议会之门。大厅三层拱廊，每层一百二十盏灯，尽头坐着一尊石头的王，眼睛是琥珀的。他爷爷给他数过灯，他自己没见过。讲的时候他眼睛是亮的。',
      { speaker: '贝尔格拉克', text: '明天我往深处去。愿意的跟着。照名单，一条一条，一直到议会之门。' },
      { speaker: '基尔杜姆', text: '合同到这儿就完了。' },
      { speaker: '贝尔格拉克', text: '合同完了。名单没完。' },
    ],
    choices: [
      {
        text: '听他报名单的时候，留心他先念谁',
        once: true,
        check: { skill: 'insight', dc: 14, adv: 'flag.a2_knows_belgrak' },
        ok: { text: '名单的页边上有一行小字，没编号：雷萨格·铁眉，欠一句话。他念到那一页总是翻得很快。他往深处去，是因为深处没有雷萨格。', effects: ['flag a2_rethag'] },
        fail: { text: '你听了一晚上，只听出他念到第一百条就开始打哈欠。他发觉你在听，把名单卷起来了。', effects: ['approval belgrak -1'] },
      },
      {
        text: '劝他当着全团的面划掉一条',
        if: "origin != 'corintar' && origin != 'grudge'",
        once: true,
        check: { skill: 'persuasion', dc: 18, mods: [{ if: 'flag.a2_rethag', n: 1, why: '你知道他要讨的是雷萨格' }, { if: 'flag.company_whole', n: 1, why: '兵团还是一整个' }] },
        ok: {
          text: [
            '你说一条也好，划给大伙看看，账是能划掉的。他看了你半天，拿笔在头一条上划了一道：议会之门，灰前五千八百八十八年。页边那行小字，他没划。',
            '{?is.god:兵团里有人说，那一笔不算他自己划的，是神按着他的手。乌什卡说，你替他划了，那一笔还是没人还。|老兵们看着那道墨，有一半人站起来走开了。}',
          ],
          effects: ['flag belgrak_struck', 'quest q_list done', { if: 'party.garaele', then: ['approval garaele +1'] }, { if: 'is.god', then: ['flag belgrak_struck_by_god', 'rep companies -2'], else: ['rep companies -1'] }],
          goto: 'a2_16',
        },
        fail: { text: '他听完，把名单折好揣回怀里，说了一句：三百一十二条，一条也不能少，少了就不是我的名单了。', effects: ['approval belgrak -1'] },
      },
      {
        text: '拿她当年的事劝他划掉一条',
        tag: '科琳的队伍',
        if: "origin == 'corintar'",
        once: true,
        check: { skill: 'persuasion', dc: 16, mods: [{ if: 'flag.a2_rethag', n: 1, why: '你知道他要讨的是雷萨格' }, { if: 'flag.company_whole', n: 1, why: '兵团还是一整个' }] },
        ok: {
          text: [
            '你说她在血腐阶梯那天放过三个投降的，没记账。他认得你，那一仗你们在一条盾墙上。他在头一条上划了一道：议会之门，灰前五千八百八十八年。页边那行小字，他没划。',
            '{?is.god:兵团里有人说，那一笔不算他自己划的，是神按着他的手。乌什卡说，你替他划了，那一笔还是没人还。|老兵们看着那道墨，有一半人站起来走开了。}',
          ],
          effects: ['flag belgrak_struck', 'quest q_list done', { if: 'party.garaele', then: ['approval garaele +1'] }, { if: 'is.god', then: ['flag belgrak_struck_by_god', 'rep companies -2'], else: ['rep companies -1'] }],
          goto: 'a2_16',
        },
        fail: { text: '他说：她是她，我是我。她放过的人，我账上一个也没少。他把名单揣回了怀里。', effects: ['approval belgrak -1'] },
      },
      {
        text: '先当众划掉你自己账页上的玛瑙之门，再劝他',
        tag: '负怨者',
        if: "origin == 'grudge'",
        once: true,
        check: { skill: 'persuasion', dc: 15, mods: [{ if: 'flag.a2_rethag', n: 1, why: '你知道他要讨的是雷萨格' }, { if: 'flag.company_whole', n: 1, why: '兵团还是一整个' }] },
        ok: {
          text: [
            '{?flag.entry_struck:你把五年前划掉的那一页举起来给全团看。|你抽出那张账页，玛瑙之门，一四二四，当着全团划了。}贝尔格拉克看了一会儿，在头一条上也划了一道：议会之门。',
            '{?is.god:兵团里有人说，那一笔不算他自己划的，是神按着他的手。乌什卡说，你替他划了，那一笔还是没人还。|老兵们看着那两道墨，有一半人站起来走开了。}',
          ],
          effects: ['flag entry_struck', 'flag belgrak_struck', 'quest q_list done', { if: 'party.garaele', then: ['approval garaele +1'] }, { if: 'is.god', then: ['flag belgrak_struck_by_god', 'rep companies -2'], else: ['rep companies -1'] }],
          goto: 'a2_16',
        },
        fail: {
          text: '你的那一条划掉了，他的没有。他说：你划你的，我讨我的，兵团的规矩一人一本账。',
          effects: ['flag entry_struck', 'approval belgrak -1'],
        },
      },
      {
        text: '不拦他，跟他握手',
        effects: ['flag belgrak_lost', 'quest q_list fail', 'approval belgrak +1'],
        result: [
          '他的手很硬，指节上全是老茧。握完了，他从腰上解下一盏矿灯塞给你，说两盏他提不过来。',
          { speaker: '贝尔格拉克', text: '你们数目对得上。我这边，就不必对了。' },
        ],
        goto: 'a2_16',
      },
      {
        text: '跟他下去，到时候把他背出来',
        effects: ['approval belgrak +1'],
        result: '他哼了一声，说你们人类走不了三天。然后他把灯分了你们一盏。',
        goto: 'a2_15',
      },
    ],
  },

  a2_15: {
    id: 'a2_15',
    title: '往深处',
    art: 'ev_dark_expedition',
    loc: '中矮人之地 · 一条没有名字的支线',
    text: [
      '三天。头一天跟着走的有三十人，第二天十一个，第三天剩下你们和他。路是越走越窄的，最后一段得侧着身子过。',
      '贝尔格拉克腿上中了一钩，绑了布，还在念条目。念一条，划一个方位，接着走。',
      { speaker: '贝尔格拉克', text: '第二百九十一条。这儿往东，三里，一座小堡，欠一扇门。门没了，账还在。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '他再走一天，就得我来抬。' },
      '头顶有翅膀拍了一下。灯光照不到的地方，有个东西跟了你们一天。',
    ],
    combat: DEEP,
  },

  a2_15b: {
    id: 'a2_15b',
    title: '背出来',
    loc: '中矮人之地 · 一条没有名字的支线',
    text: [
      '深渊鸦掉在地上还在扑腾。贝尔格拉克坐着，腿上的布全红了，手里还攥着名单。',
      { speaker: '贝尔格拉克', text: '第二百九十条。还剩二百八十九条。' },
      '他站不起来了。往回走是三天的路，往前没有路。',
      '你们折回第二天那个岔口的时候，掉队的十一个里还有三个坐在那儿，守着一盏快灭的灯。他们说等的是贝尔格拉克，不是你们。',
    ],
    choices: [
      {
        text: '把他背起来，往回走',
        check: { skill: 'athletics', dc: 14, party: true },
        ok: {
          text: '你们轮流背。他一路骂人，骂到第二天就不骂了，改成报每一段路的年份。到闸口的时候，他睡着了。',
          effects: ['flag belgrak_saved', 'quest q_list done', 'xp 500'],
          goto: 'a2_16',
        },
        fail: {
          text: '背到第二天，每个人的肩膀都磨破了，脚上的泡连着泡。他还是被你们背到了闸口。',
          effects: ['flag belgrak_saved', 'quest q_list done', 'xp 500', 'hp -6'],
          goto: 'a2_16',
        },
      },
    ],
  },

  // ───────────────────────── 回程 ─────────────────────────
  a2_16: {
    id: 'a2_16',
    title: '数目对得上',
    art: 'ev_dwarven_rail',
    loc: '矮人之路 · 回程',
    date: '1450年秋',
    text: [
      '到了玛瑙之门的闸口，进去多少人，抬出来多少人，要一个一个点。银行的出纳拿着出发那天的刻痕棍，点一个，在旧刻痕旁边再刻一道。两排刻痕要一样长。',
      { if: 'flag.belgrak_lost', text: '点数的是基尔杜姆。贝尔格拉克那一格空着。他带着名单往深处去了，此后再没人见过。' },
      { if: '!flag.belgrak_lost', text: '点数的是贝尔格拉克。他点一个，基尔杜姆在账本上记一个。' },
      { if: '!flag.brok_lives', text: '布罗克是抬出来的。他的铲子放在他胸口上。' },
      { if: 'flag.brok_lives', text: '布罗克是自己走出来的，扛着铲子，第一个过闸。' },
      { if: 'flag.rail_bones', text: '车上那三十一包，基尔杜姆也一包一包点了，点完给每一包添了一个名字。有九包，名字是“不知道”。' },
      { if: 'flag.parents_carried', text: '加莱尔父母的两副担架，点数的人跳过去了。她说了一句：算上。他们就算上了。' },
      { if: 'item.brack_token', text: '交轨大厅过闸的时候，你们亮了车皮签。地精们没收钱，有一个从车顶上扔下来一袋蘑菇。' },
      '矮人的规矩：名字进账本，人进石头。闸口外头的崖壁上，兵团的砌匠凿了一排新龛。',
    ],
    first: [
      'quest q_parents done',
      'gold +300',
      'world unburied -1',
      'var rites +1',
      { if: '!flag.brok_lives', then: ['log 布罗克，负怨者兵团，葬在玛瑙之门外的崖壁上。铲子跟着他。'], else: ['log 负怨者兵团战死的弟兄，葬在玛瑙之门外的崖壁上。'] },
      { if: 'flag.rail_bones', then: ['world unburied -1', 'var rites +1', 'log 死铁道上的三十一具，送去红宝石领入石。'] },
    ],
    choices: [
      {
        text: '把车推上闸口外那段坡',
        check: { skill: 'athletics', dc: 13, party: true, mods: [{ if: 'flag.rail_bones', n: -1, why: '车上三十一包遗骨' }, { if: 'flag.parents_carried', n: -1, why: '两副担架' }] },
        ok: { text: '坡是石头凿的台阶，每级半尺。你们喊着号子推上去，到顶的时候，外头的风是暖的。', goto: 'a2_17' },
        fail: { text: '推到一半，车轮崩了一根辐条，车往后溜。等你们拿石头垫住，车尾少了一包。那一包滚下坡，掉进了黑地里，没找着。', effects: ['world unburied +1'], goto: 'a2_17' },
      },
    ],
  },

  a2_17: {
    id: 'a2_17',
    title: '山里的话带不带出去',
    loc: '玛瑙之门 · 闸口外',
    text: [
      '闸口外头摆了一张桌子，贾尔蒙在结账：兵团的尾款，探险队的租子，一笔一笔，笔尖在纸上划得沙沙响。',
      '你们这边有两件事要定，都没有对的。头一件是井口那两个名字。兵团里没人认得先驱精灵的字，井壁上刻了什么，眼下只有你们几个知道。',
      { if: 'party.ushka', speaker: '乌什卡', text: '造我们的，是个带作坊的精灵。我们不欠他。这句话我想带回去。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '我只管记。可要记就得有人看。没人看的本子，跟没记一样。' },
      { if: 'party.nixee', speaker: '妮克西', text: '这种话最值钱的时候，是还没人说过的时候。说一回，掉一半。' },
      { if: 'party.tan', text: '阿坦什么也没说。他手里攥着那根蜡烛，攥得太紧，蜡上留下了指头印。' },
    ],
    choices: [
      {
        text: '让乌什卡把那句话带回烂刀氏族',
        if: 'party.ushka',
        effects: ['flag dookanil_told', 'world embers -1', 'approval ushka +2'],
        result: '她在木签的背面刻了一行字，刻完给你看了一眼：杜坎尼尔，杜卡涅尔，一个人。她说烂刀的年轻人会把这根签传下去。',
        goto: 'a2_17b',
      },
      {
        text: '托阿罗莎的信使把那句话带回氏族',
        if: '!party.ushka',
        effects: ['flag dookanil_told', 'world embers -1'],
        result: '阿罗莎的信使是个半大的兽人小子。你把那句话说了三遍，他背了三遍，第三遍一个字没错。他走的时候没回头。',
        goto: 'a2_17b',
      },
      {
        text: '当笑话讲给兵团的人听',
        effects: ['flag dookanil_told', 'flag dookanil_mocked', 'world embers +1', 'rep clans -2', 'rep companies +1'],
        result: '兽人的神是个精灵，拿兽人当家伙使。老兵们笑得拍桌子，当晚就编了一段顺口溜。他们回东坎诺的路上，会在每一家酒馆唱一遍。',
        goto: 'a2_17b',
      },
      {
        text: '让加莱尔把两个名字报给编年史家会',
        if: 'party.garaele && !flag.names_filed',
        once: true,
        effects: ['flag names_filed', 'world word +1', 'approval garaele +1', 'codex chroniclers'],
        result: '她写了一封短信，只有两个名字、一个地方和一个日子，封了蜡，交给探险队往外送信的骡队。她说会里的人看了，会先吵一年格式。',
      },
      {
        text: '当众讲给门外的地精住户和脚夫听',
        tag: '试炼',
        if: "faction == 'tried'",
        effects: ['flag dookanil_told', 'world embers -1', 'rep clans +1'],
        result: '你站在闸口外的石墩上讲。讲完了，有个老脚夫说他不信；有个地精说他信，因为这么说对他们没坏处。信不信，各凭各的。你没劝谁。',
        goto: 'a2_17b',
      },
      {
        text: '谁也不说',
        effects: [{ if: 'party.tan', then: ['approval tan -1'] }],
        result: '你把拓片卷好，塞回竹筒。阿坦看着竹筒，嘴动了一下，没出声。',
        goto: 'a2_17b',
      },
    ],
  },

  a2_17b: {
    id: 'a2_17b',
    title: '本子归谁',
    loc: '玛瑙之门 · 闸口外',
    text: [
      '第二件是守昔者的拓片本。三十年的拓片，一页一个地方：东坎诺的墓碑，一座卡斯塔诺老矿的门楣，地精刻在车皮上的氏族记号，最后几页是死铁道上的里程石。井壁那一张在竹筒里，不在本子里。',
      '银行的出纳在边上站了一下午。他不说话，只是把一张汇票拿出来又收回去，汇票上写着五百。',
      { if: 'party.garaele', speaker: '加莱尔', text: '我父母为这个吵了一辈子。记下来的东西归谁。我母亲说归会里，我父亲说归记的人。没吵出结果，他们就进山了。' },
    ],
    choices: [
      {
        text: '交给编年史家会',
        effects: ['flag notebook_order', 'rep temples +1'],
        result: '加莱尔把本子包好，写了收件人，又在包上写了她母亲的名字。她说会里会把它锁进柜子，锁一百年。',
        goto: 'a2_18',
      },
      {
        text: '让加莱尔自己留着',
        effects: ['flag notebook_kept', { if: 'party.garaele', then: ['approval garaele +2'] }],
        result: '她把本子贴身揣着。夜里你看见她翻开了，翻到最后一页，那一页是空的。她拿笔在上头写了一行，写的是泵房。',
        goto: 'a2_18',
      },
      {
        text: '趁她睡着，把本子卖给出纳',
        if: 'item.rubbing_book',
        effects: ['flag notebook_sold', 'gold +500', 'item -rubbing_book'],
        result: '出纳把汇票换成了现金，一袋，很沉。第二天加莱尔把车翻了三遍。她最后说，大概是丢在回程的坡上了。',
        goto: 'a2_18',
      },
    ],
  },

  a2_18: {
    id: 'a2_18',
    title: '出山',
    loc: '玛瑙之门外',
    date: '1450年秋',
    text: [
      '出山那天，坡上的草黄了。来时那片烧秃的地上长出一层矮树苗，狼还没回来。',
      { if: 'var.prep >= 4 && !flag.belgrak_lost', text: '贾尔蒙说话算话，自掏腰包办了游街。门洞里二十几顶帐篷的人排成两行，出纳敲着一口锅。游的是你们这一车，游了一圈，路不长。' },
      { if: 'var.prep < 4 || flag.belgrak_lost', text: '贾尔蒙在章程第四十六页上记了这一趟：去几人，回几人，讨回几笔，花了多少。他没提游街，你们也没问。' },
      { if: 'flag.belgrak_lost', text: '贝尔格拉克没有出来。你最后一回握他的手，是在闸口内侧，他的手很硬。往后山里再没人见过他。' },
      { if: 'flag.belgrak_saved', text: '贝尔格拉克坐在兵团回红宝石领的车上，腿上绑着夹板，膝盖上摊着名单。车走远了，他也没抬头。' },
      { if: 'flag.belgrak_struck && !flag.belgrak_struck_by_god', text: '贝尔格拉克跟兵团一起走。半个兵团的人走在他后头，跟他隔着十步，背对着他扎营。他不在乎，名单上那道墨还在。' },
      { if: 'flag.belgrak_struck_by_god', text: '贝尔格拉克跟兵团一起走。兵团的人说，那一笔不算他划的。他回红宝石领以后，再没碰过账本。' },
      { if: 'flag.rail_woken', text: '阿斯拉银行已经在卖矮人之路头三段的股份，一股十金冠。交轨大厅的地精被探险队清了出去，转车台上的车皮挂了银行的牌子。' },
      { if: 'party.tan', text: '天亮的时候，阿坦在山外头念了晨祷，看着真的太阳念的。念完了，他还是低头看了一眼手里的蜡烛。' },
      { if: 'party.tan', speaker: '阿坦', text: '烧到第六道半了。山里的蜡烛，跟外头的一样快。' },
    ],
    first: [
      'level 6',
      { if: 'flag.belgrak_lost', then: ['companion -belgrak gone'], else: ['companion -belgrak'] },
      'quest q_cart stage 3',
      'rest short',
      { if: "origin == 'grudge' && flag.entry_struck", then: ['quest q_o_grudge stage 3'] },
      { if: 'flag.rail_woken', then: ['world room -1', 'rep companies +2', 'approval nixee -2'] },
    ],
    choices: [
      {
        text: '写这一幕的报告，照实写',
        tag: '皇帝的差事',
        if: "origin == 'wex'",
        effects: ['var honest_reports +1', 'rep throne +1'],
        result: '你写了矮人认的每一笔旧账，连“花仇”那一笔也写了。信鸽是探险队的，飞走的时候在门洞里绕了一圈。',
        goto: 'a3_01',
      },
      {
        text: '写这一幕的报告，写一份好看的',
        tag: '皇帝的差事',
        if: "origin == 'wex'",
        effects: ['var false_reports +1'],
        result: '你写矮人在山底下只认祖宗的账，不认帝国的。这话有一半是真的。剩下一半，巴兹伍德先生会自己去想。',
        goto: 'a3_01',
      },
      {
        text: '不写报告，往西走',
        effects: [{ if: "origin == 'wex'", then: ['rep throne -1'] }],
        result: [
          { if: "origin == 'wex'", text: '信鸽在笼子里又待了一个月。你喂它喂得很好。' },
          '加莱尔把本子摊开，在新的一页上写了日子，往下空着。她说下一页该写什么，等走到再说。',
        ],
        goto: 'a3_01',
      },
    ],
  },
};
