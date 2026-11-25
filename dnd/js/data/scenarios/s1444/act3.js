// s1444《送神》第三幕：郁金香底下的大公（BIBLE.md §11.4、§12.5、§13、§15 第三幕、§16.2 第三幕）
//
// 提纲（写之前对过圣经第 11.4 节；入口 a3_01，6 级进，a3_06 到 7 级，a3_18 到 8 级，出口 a4_01）
//
//   a3_01 一匣子没寄出的信  门板桌。乌什卡底线检查。德利安的骑士送信和定金；多米尼克托信条（creed_carried）；蓝牙给路条
//                          （rep.corintar<=-2 不给）。[达梅里亚之子] 罗吉尔一句话，q_o_sons 2；亮银月徽问出名字。[皇帝的差事]
//                          巴兹伍德叫述职，q_o_wex 2；当众拆信。定金：收下 / 事毕再结（a3_no_deposit）。[神] 第二封信。→02
//   a3_02 倒着走的难民路    弗里塞斯提尔。喊报人（rogier_counted 时喊出塔兰顿）；[达梅里亚之子] 画像；阿坦找名册。
//                          [神] 治病→god_shrine；阿坦“我们同路”。绿皮（或车上有绿皮）过镇口：路条 / 欺瞒 DC14 / 绕路（a3_detour）。→02b
//   a3_02b 林子边上的军士   说服 DC14 劝去东坎诺（老兵优势）/ 给八十 / [绿皮] 威吓 DC13 / 打。战：散兵军士+佣兵×3+弩手×2，
//                          点干草车。败：丢一百五十金冠。→03
//   a3_03 目前可靠          蒂尔达自报家门；妮克西跟她对账。跟着→tilda_with；甩掉（潜行 DC16 全队，成败都 tilda_with，成则 throne-1）。
//                          短休（没绕路才有）。[皇帝的差事] 对报告（false_reports≥1 时洞悉 DC14）。[侏儒] throne+1。[神] 三条问话。→04
//   a3_04 荆月船会          游船。说服/表演 DC14 挤进席面（绿皮优势）；败了站着听，moon-1。阿坦甲板晨祷，妮克西算面具钱。→04b
//   a3_04b 船尾             奥坎娜：问第五场 / 说找谁（moon+1）。洞悉 DC13 认出三个人（[达梅里亚之子] 自动）。
//                          巧手 DC14 / 欺瞒 DC15 拿请柬（jubilee_invite）。→04c
//   a3_04c 掌灯             必打：刺客+贵族决斗者×2（递眼色给奥坎娜少一个）。割灯绳。败：湿着上岸，丢请柬。→05
//   a3_05 管仓的人          德利安报仓单；说出名字。图（garden_sketch），q_duke 2，codex delian/adenn。洞悉 DC12 看出他为何归降。
//                          [贵族] 十六岁那年的比武会。[试炼派] 照骑士团规矩比一场→05b。→06
//   a3_05b 照规矩比一场     阿德蕾西娅骑士×1，点到为止，赢了拿练习剑。→06
//   a3_06 世人所欲之城（枢纽）level 7；长休；锻炉街铁匠。神殿区→06c；舱底区→06b；锻炉街打听→09；精灵码头→07；公事房→10；
//                          乌什卡木签 q_ushka 3。[负怨者] 银行分号（a3_bank）。[施法者] 魔导院登记（a3_registered）。
//                          [神] 烧封条（a3_god_burned，throne-2 temples-1）/ 让他们量三天。08/09/10 都去过才能进宫→11。
//   a3_06b 舱底区           药婆的店。六十金冠立坟（bilge_graves，未葬-1，rites+1）；[无冕派] 凑份子立坟；买假路条。→06
//   a3_06c 神殿区           交信条（creed_delivered，天平+1）；[科琳的队伍] 宗教 DC14 留抄本。编年史家按 notebook_* 三种问法。→06
//   a3_07 姑祖母            舰生老太太，摇篮曲（表演 DC12，a3_lullaby）。[精灵] 登岸那晚 / [半精灵] 哪条船（a3_auntie_kin）。
//                          log_read 在这里设。读志：加莱尔念 / 历史 DC14（败：念得慢，a3_log_slow）。→07b
//   a3_07b 第四十年         q_dragon 4，codex lunatein_log。划掉的“天空”，方位。阿坦对上竖井口那个名字。→08
//   a3_08 封册              武卫上门。抄（调查/巧手 DC14）/ 屋顶走（潜行 DC15，败则打→08b）/ 登记（log_filed，风声+2）/ 让封。
//                          bearing_known 在这里设。→06
//   a3_08b 屋脊上           武卫×2+宫廷法师（施法者没登记 +1 武卫；神烧了封条 +2）。打碎誓约信物。败：一夜牢，-100。→06
//   a3_09 挖坑的人          奥托格。说服 DC15（老兵优势）/ 陪喝体质豁免 DC14 / [皇帝的差事] 拿军令压 / dug_the_pit 对饮。→09b 或回 06
//   a3_09b 口供             送走（digger_safe；瞒着蒂尔达→tilda_blindsided）/ 交给蒂尔达（digger_given）/ 由他喝（a3_ottog_drinks）。→06
//   a3_10 想事情的人        巴兹伍德。听价 / 要特许（说服 DC16，报告真假改 DC；承嗣 +2）/ 问决斗（洞悉 DC16）。codex bardswood/dove_throne。
//                          [神] 空着头衔的文书，别说皇帝不是化身（a3_god_promised）。→06
//   a3_11 皇宫花园，夜里    1452 年花始月。[施法者] 奥秘 DC15 解警戒术。带不带蒂尔达（不带→tilda_blindsided）×潜行 DC15 全队。→11b
//   a3_11b 第七畦           运动 DC13 全队挖开。潜行也败了（或施法者没解警戒术）就惊动守卫：威克斯步兵×3+骑士，推花架。
//                          garden_alarm、太平-1。→11c
//   a3_11c 三具             wound_seen、wound_cast。乌什卡：大剑砍不出这种口子。→12
//   a3_12 那个窟窿          德利安：他疼不疼（不疼→lies+1 / 照实→ushka+1 / 不知道）。医药 DC13（a3_cast_fine），察觉 DC13（daras_seen），
//                          [达梅里亚之子] 出去跟达拉斯说话。[承嗣] 谱上没写的事（a3_heirs_answer）。[神] 德利安半句话。q_duke 3，codex throne_room。→13
//   a3_13 三十年庆典        拦（运动/特技 DC16，daras_seen 优势，武人 +2）→13b；不动；放他跑（daras_fled）；[达梅里亚之子] 喊名字 DC17；
//                          [神] 抬手（god_sided_throne）。→14
//   a3_13b 按住他           交给卫兵 / 自己活捉（达拉斯×1）。→14
//   a3_14 皇帝来了          “这回屋里没有第三个人。”[试炼派] 应战→同伴退到门外，洛萨恩三世×1（pcMustStand）；[神] 应战；不接。→14b
//   a3_14b 证据给谁         四选一：巴兹伍德→14c / 奥坎娜 / 喊报人和编年史家会 / 带走。[皇帝的差事] 两段单独的话。→14d
//   a3_14c 巴兹伍德的抽屉   特许 / 赦令 / 城约的印 / 八百金冠。→14d
//   a3_14d 最后一份报告     tilda_blindsided：她已经走了；否则 照实 / 照你的意思（欺瞒 DC15）/ 烧密码本（说服 DC16）。→15
//   a3_15 没有船            妮克西写信（door_letter_sent，q_door start）。问东家（codex prince_of_fools/verdant_veil）。
//                          历史 DC14 对旧海图（a3_sella_known）。阿坦说出第三层。→16
//   a3_16 大公埋哪儿        月神之耳，月夜。顺手：军士长（urn_buried）、守昔者夫妇。三选一 adenn_*。→16b
//   a3_16b 有人来了         黑犬（默认）/ 月党的死硬（proof_bardswood）/ 抢圣骨的散兵（emperor_duel_won，无队长）；tilda_blindsided 加法师。
//                          灭灯、推墓石。败：尸首被抢，改 adenn_left。→17
//   a3_17 写给死人的信      德利安结账，信（delian_letter），q_duke done，短休；蒂尔达分手（tilda_burned 除外）。[皇帝的差事] 报告。
//                          [达梅里亚之子] adenn_rogier 时罗吉尔回信。→18
//   a3_18 九个冬天          level 8，q_cart 4。蘑菇烂了，树皮还在。→a4_01
//
// 本文件自设自读的标记（前缀 a3_）：a3_ushka_went a3_no_deposit a3_name_early a3_wex_open a3_detour a3_sergeant_east
//   a3_paid_road a3_scared_road a3_road_fought a3_robbed a3_saw_tilda a3_god_answered a3_seated a3_spotted a3_aucanna_talked
//   a3_aucanna_told a3_boat_won a3_boat_lost a3_delian_read a3_duel_won a3_bank a3_registered a3_god_burned a3_god_measured
//   a3_creed_copied a3_lullaby a3_auntie_kin a3_log_slow a3_ottog_drinks a3_ordered a3_charter_fail a3_bard_doubt
//   a3_god_promised a3_ward_off a3_sneak_bad a3_cast_fine a3_heirs_answer a3_daras_jailed a3_daras_cut a3_empress_dead
//   a3_out_ushka a3_out_tan a3_out_nixee a3_out_garaele a3_declined_duel a3_sella_known a3_letter_to_grave a3_body_lost

// ---- 战斗 --------------------------------------------------------------------

const ROAD_FIGHT = {
  title: '林子边上的散兵',
  intro: '军士往火里啐了一口。两个弩手退到干草车后头，把弦一根一根挂上。',
  enemies: [{ id: 'merc_captain', name: '散兵的军士' }, { id: 'sellsword', n: 3, name: '拆了袖标的散兵' }, { id: 'crossbowman', n: 2, name: '散兵弩手' }],
  specials: [
    {
      id: 'hay', name: '点着他们存干草的车', desc: '车就停在弩手身后，晒了一夏天',
      check: { skill: 'sleight', dc: 13 },
      success: { text: '火绒落进草堆，呼的一下就起来了。弩手忙着拍身上的火星，两轮工夫顾不上瞄你。', dmgAll: '1d6', type: 'fire', applyAll: { cond: 'blinded', turns: 2 } },
      fail: { text: '火绒受了潮，冒了一缕烟就灭了。军士看见了，骂了一句玫瑰党的粗话。', selfDmg: '1d4' },
    },
  ],
  xp: 600,
  win: { effects: ['flag a3_road_fought'], goto: 'a3_03' },
  lose: { effects: ['gold -150', 'hp 1', 'flag a3_robbed'], goto: 'a3_03' },
  fled: { effects: ['gold -80', 'flag a3_robbed'], goto: 'a3_03' },
};

const BOAT_SPECIALS = [
  {
    id: 'lamps', name: '割断灯绳', desc: '一整串纸灯笼掉进河里，这层甲板就黑了',
    check: { skill: 'sleight', dc: 13 },
    success: { text: '刀子一过，灯笼一串一串栽进河里，嗤嗤地灭。黑里头他们找不着你们，你们找得着他们：他们的面具是白的。', applyAll: { cond: 'blinded', turns: 1 } },
    fail: { text: '灯绳是浸过油的麻，割了两下没断。一盏灯笼掉在你肩上，烧着了你的袖子。', selfDmg: '1d6', type: 'fire' },
  },
  {
    id: 'rail', name: '撞断船舷的栏杆', desc: '栏杆是雕花的，好看，不结实',
    check: { skill: 'athletics', dc: 14 },
    success: { text: '栏杆一断，两个戴面具的跟着一起翻进了河里，过了好一会儿才爬上来，面具没了。', dmgAll: '1d8', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
    fail: { text: '栏杆比看上去结实。你撞完它，它还在，你的肩膀不大在了。', selfDmg: '1d6' },
  },
];

const BOAT_FIGHT = {
  title: '游船上的刀',
  intro: '三个人，面具没摘。领头的那个手里是一把很短的刀，刀身涂黑了，不反灯光。',
  enemies: [{ id: 'assassin', name: '领头的面具' }, { id: 'noble_duellist', n: 2, name: '戴面具的剑客' }],
  specials: BOAT_SPECIALS,
  xp: 600,
  win: { effects: ['flag a3_boat_won'], goto: 'a3_05' },
  lose: { effects: ['item -jubilee_invite', 'hp 1', 'flag a3_boat_lost'], goto: 'a3_05' },
  fled: { effects: ['item -jubilee_invite', 'flag a3_boat_lost'], goto: 'a3_05' },
};

const BOAT_FIGHT_TIPPED = {
  title: '游船上的刀',
  intro: '奥坎娜的人先动的手。一个戴面具的剑客还没站稳，就被两个伊斯特拉洛尔的女兵架起来扔进了河里。剩下两个愣了一下。',
  enemies: [{ id: 'assassin', name: '领头的面具' }, { id: 'noble_duellist', name: '戴面具的剑客' }],
  specials: [Object.assign({}, BOAT_SPECIALS[0], { success: { text: '刀子一过，灯笼一串一串栽进河里。他们本来就慌了，这下更找不着北。', applyAll: { cond: 'blinded', turns: 2 } } }), BOAT_SPECIALS[1]],
  xp: 600,
  win: { effects: ['flag a3_boat_won', 'rep moon +1'], goto: 'a3_05' },
  lose: { effects: ['item -jubilee_invite', 'hp 1', 'flag a3_boat_lost'], goto: 'a3_05' },
  fled: { effects: ['item -jubilee_invite', 'flag a3_boat_lost'], goto: 'a3_05' },
};

const KNIGHT_BOUT = {
  title: '照骑士团的规矩',
  intro: '年轻骑士把剑举到眉前，剑身上亮起一道淡蓝的字，又灭了。按规矩，先见血的算输。',
  enemies: [{ id: 'aldresian_knight', name: '阿德蕾西娅骑士' }],
  specials: [
    {
      id: 'sand', name: '把他引到撒了沙的那半边', desc: '校场东半边昨天下过雨，沙子是新铺的',
      check: { skill: 'acrobatics', alt: ['athletics'], dc: 14 },
      success: { text: '他追着你踩进了新沙里，脚底一滑，剑上的字闪了一下就断了。', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '滑倒的是你。场边的老骑士们咳嗽了一声，没笑出来。', selfDmg: '1d4' },
    },
  ],
  fleeable: false,
  xp: 300,
  win: { effects: ['item +aldresian_blade', 'flag a3_duel_won'], goto: 'a3_06' },
  lose: { effects: ['hp 1'], goto: 'a3_06' },
};

const MILITANT_SPECIALS = [
  {
    id: 'token', name: '打碎领队胸前的誓约信物', desc: '铜牌是立誓时挂上的，碎了，誓也就晃了一下',
    check: { skill: 'sleight', alt: ['athletics'], dc: 14 },
    success: { text: '铜牌裂成两半，掉在龙骨上，叮的一声。武卫们一起停了手，像是有人在他们耳朵边上念错了一句誓词。', applyAll: { cond: 'dazed', turns: 1 } },
    fail: { text: '你的手刚伸过去，就挨了一短棍。铁箍砸在指节上。', selfDmg: '1d6' },
  },
  {
    id: 'keel', name: '在湿青苔上踹他们一脚', desc: '龙骨是弯的，长满青苔，站不稳的人站不住',
    check: { skill: 'athletics', dc: 14 },
    success: { text: '你一脚踹在最前头那个的膝盖上。他滑下去，抱住了后头那个的腿，两个人一起趴在了青苔上。', dmgAll: '1d6', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
    fail: { text: '滑下去的是你。你抓住了一根晾衣绳，挂在半空，码头上的人在下面喊好。', selfDmg: '1d6' },
  },
];
const MILITANT_BASE = {
  title: '屋脊上的武卫',
  intro: '武卫们一字排开，踩着龙骨往这边挪。随队的法师抬起手，指尖上一点白光。',
  specials: MILITANT_SPECIALS,
  xp: 600,
  win: { effects: ['flag log_stolen', 'item +log_copy', 'rep temples -2', 'rep throne -1'], goto: 'a3_06' },
  lose: { effects: ['hp 1'], goto: 'a3_08c' },
  fled: { effects: ['rep temples -1'], goto: 'a3_08c' },
};
const MILITANT_2 = Object.assign({}, MILITANT_BASE, { enemies: [{ id: 'magister_militant', n: 2, name: '武卫' }, { id: 'court_mage', name: '随队的法师' }] });
const MILITANT_3 = Object.assign({}, MILITANT_BASE, { enemies: [{ id: 'magister_militant', n: 3, name: '武卫' }, { id: 'court_mage', name: '随队的法师' }] });
const MILITANT_4 = Object.assign({}, MILITANT_BASE, { enemies: [{ id: 'magister_militant', n: 4, name: '武卫' }, { id: 'court_mage', name: '随队的法师' }] });
const MILITANT_5 = Object.assign({}, MILITANT_BASE, { enemies: [{ id: 'magister_militant', n: 5, name: '武卫' }, { id: 'court_mage', name: '随队的法师' }] });

const GARDEN_FIGHT = {
  title: '花园里的灯笼',
  intro: '灯笼从矮墙那头绕过来，一盏，两盏，四盏。领头的骑士没喊人，先拔了剑。',
  enemies: [{ id: 'wexonard_footman', n: 3, name: '宫里的威克斯步兵' }, { id: 'knight', name: '值夜的骑士' }],
  specials: [
    {
      id: 'racks', name: '推倒花架挡路', desc: '一排三层的花架，摆满了明天要用的郁金香盆',
      check: { skill: 'athletics', dc: 13 },
      success: { text: '花架倒下去，三层花盆一起砸在小路上。步兵踩着碎瓦和烂泥，一步一滑。', dmgAll: '1d6', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
      fail: { text: '花架是钉在墙上的。你推了一下，只推下来一盆，砸在你自己脚面上。', selfDmg: '1d4' },
    },
  ],
  xp: 500,
  win: { effects: ['flag garden_alarm', 'world peace -1'], goto: 'a3_11c' },
  lose: { effects: ['flag garden_alarm', 'world peace -1', 'damage 4d6'], goto: 'a3_11c' },
  fled: { effects: ['flag garden_alarm', 'world peace -1', 'damage 2d6'], goto: 'a3_11c' },
};

const DARAS_FIGHT = {
  title: '按住他',
  intro: '达拉斯的手还攥着刀柄。他不看你，只看皇后那张椅子。',
  enemies: [{ id: 'daras' }],
  noAwe: true,
  fleeable: false,
  specials: [
    {
      id: 'cloth', name: '扯下桌布把他裹住', desc: '一丈长的桌布，上头还摆着银盘子',
      check: { skill: 'athletics', alt: ['sleight'], dc: 15 },
      success: { text: '你一扯，银盘子满地乱滚，桌布兜头裹住了他。卫兵的绳子跟着就到了。', end: 'win' },
      fail: { text: '桌布扯下来了，他没在底下。他的刀在你胳膊上划了一道。', selfDmg: '1d8' },
    },
  ],
  xp: 400,
  win: { effects: ['flag a3_daras_jailed'], goto: 'a3_14' },
  lose: { effects: ['flag a3_daras_cut', 'hp 1'], goto: 'a3_14' },
};

const EMPEROR_DUEL = {
  title: '三卫的规矩',
  intro: '他把大剑从背上取下来，双手握着，剑尖朝下点了点地。这是三卫的起手。比到见血为止。',
  enemies: [{ id: 'lothane_iii' }],
  noAwe: true,
  fleeable: false,
  pcMustStand: true,
  specials: [
    {
      id: 'lamp', name: '把灯踢到他脚底下', desc: '仓房里只有两盏灯，他背对着一盏',
      check: { skill: 'acrobatics', dc: 15 },
      success: { text: '灯油泼在盐地上烧起来。他往后让了半步，剑尖偏了，空当露出来一瞬。', applyAll: { cond: 'exposed', turns: 1 } },
      fail: { text: '灯滚到墙根灭了。他连看都没看一眼。', selfDmg: '1d4' },
    },
  ],
  xp: 800,
  win: { effects: ['flag emperor_duel_won', 'rep throne +1'], goto: 'a3_14b' },
  lose: { effects: ['hp 1'], goto: 'a3_14b' },
};

const GRAVE_SPECIALS = [
  {
    id: 'lights', name: '灭掉所有的灯', desc: '坡上只有你们那两盏马灯，今晚的月亮在你们背后',
    check: { skill: 'stealth', dc: 14 },
    success: { text: '马灯一灭，坡上只剩月亮，月亮在你们背后。弩手对着一片黑影放箭，放了两轮，一支也没中。', applyAll: { cond: 'blinded', turns: 2 } },
    fail: { text: '你吹灭了一盏，另一盏让风吹得更旺了，正照着你的脸。', selfDmg: '1d6' },
  },
  {
    id: 'stones', name: '推倒坡上那排墓石', desc: '老坟的墓石立了上百年，根早松了',
    check: { skill: 'athletics', dc: 14 },
    success: { text: '头一块倒下去，砸倒了第二块。一排墓石顺着坡滚下去，滚进了火把堆里。', dmgAll: '3d8', type: 'bludgeoning' },
    fail: { text: '墓石晃了晃，没倒。石头上刻的名字你认得半个。', selfDmg: '1d4' },
  },
];
const GRAVE_LOSE = {
  effects: [
    { if: 'flag.adenn_damesear || flag.adenn_rogier', then: ['var rites -1', 'world unburied +2'] },
    'unflag adenn_damesear', 'unflag adenn_rogier', 'flag adenn_left', 'flag a3_body_lost', 'hp 1',
  ],
  goto: 'a3_17',
};
const GRAVE_BASE = {
  title: '坡上的火把',
  specials: GRAVE_SPECIALS,
  xp: 800,
  reward: ['gold +200'],
  win: { goto: 'a3_17' },
  lose: GRAVE_LOSE,
  fled: GRAVE_LOSE,
};
const HOUNDS = [{ id: 'black_hound_captain', name: '黑犬队长' }, { id: 'sellsword', n: 3, name: '黑犬佣兵' }, { id: 'crossbowman', n: 2, name: '黑犬弩手' }];
const DIEHARDS = [{ id: 'black_hound_captain', name: '月党的老队长' }, { id: 'sellsword', n: 3, name: '不肯罢休的月党兵' }, { id: 'crossbowman', n: 2, name: '月党弩手' }];
const LOOTERS = [{ id: 'sellsword', n: 3, name: '抢圣骨的散兵' }, { id: 'crossbowman', n: 2, name: '散兵弩手' }];
const TILDA_MAGE = { id: 'rival_mage', name: '照着画像找人的法师' };
const GRAVE_HOUNDS = Object.assign({}, GRAVE_BASE, { intro: '黑犬队长举起一只手，弩手的弦一起响了。他按人头结账，不留活口。', enemies: HOUNDS });
const GRAVE_HOUNDS_T = Object.assign({}, GRAVE_BASE, { intro: '黑犬队长举起一只手，弩手的弦一起响了。他身后那个穿长袍的，还在对着画像找你。', enemies: HOUNDS.concat([TILDA_MAGE]) });
const GRAVE_MOON = Object.assign({}, GRAVE_BASE, { intro: '领头的老队长举着一面月牙旗，旗面是新缝的。他说大公得回到弟兄们中间去。', enemies: DIEHARDS });
const GRAVE_MOON_T = Object.assign({}, GRAVE_BASE, { intro: '领头的老队长举着一面月牙旗。他身后那个穿长袍的，还在对着画像找你。', enemies: DIEHARDS.concat([TILDA_MAGE]) });
const GRAVE_LOOT = Object.assign({}, GRAVE_BASE, { intro: '散兵们举着火把往坡上冲，嘴里喊着圣骨，谁也不知道圣骨长什么样。', enemies: LOOTERS });
const GRAVE_LOOT_T = Object.assign({}, GRAVE_BASE, { intro: '散兵们举着火把往坡上冲。他们后头那个穿长袍的，是来找你的，跟圣骨没关系。', enemies: LOOTERS.concat([TILDA_MAGE]) });

export const SCENES = {

  // ======================================================================
  // 接活，上路
  // ======================================================================

  a3_01: {
    id: 'a3_01',
    title: '一匣子没寄出的信',
    chapter: '第三幕 · 郁金香底下的大公',
    art: 'ev_lilac_wars',
    loc: '卡斯托纳斯 · 门板桌',
    date: '1451年秋',
    text: [
      { if: 'flag.a3_ushka_went', text: '乌什卡没等到这一天。她头天夜里把刀与锤擦了一遍，背上，往烂刀氏族的方向走了。走之前她在门板边上刻了一道，跟她木签上的刻痕一样深。' },
      '门板桌还在下城那块空地上。底下垫的两只酒桶换过一回，门板没换。七年了，上头的刀痕摞着刀痕，蓝牙让人钉了一圈铁皮包边，免得再有人掀桌子。',
      '秋天头一车萝卜刚卸完，一个穿灰斗篷的年轻骑士牵着马进了空地。马跑得满嘴白沫。他的剑柄上缠着铜丝，那是施法用的。他问谁是会办这种事的人。',
      { if: 'party.ushka', text: '乌什卡朝板车抬了抬下巴。' },
      { if: '!party.ushka', text: '门板桌边的人一起朝板车看。' },
      { cls: 'letter', text: '诸位：敝人有个朋友，八年前被人埋在一处不该埋的地方。地方是皇宫，花圃。请诸位把他请出来，另找一处能立碑的地方。定金一百五十金冠，随信，点过两遍。余款事毕结清。——阿德蕾西娅堡，德利安·西尔·阿兰嫩' },
      { if: 'party.ushka', speaker: '乌什卡', text: '八年。花圃的土松，不压骨头。人应该还是全的。' },
      '下午多米尼克来了，怀里抱着一本抄好的信条，想托你们带到安本科斯特的神殿区。蓝牙跟在他后头，手里攥着一张盖了科琳塔尔印的路条。',
      { speaker: '多米尼克', text: '剑与盾，一共七页。帝国的神殿要是不认，请他们说出不认的道理。我要记下来。' },
      { if: 'rep.corintar <= -2', text: '蓝牙把路条在手里折了两折，又揣回了怀里。他什么也没说。' },
      { if: "origin == 'sons'", text: '三天前塔兰顿的信差先到了一步，给你捎来一张纸。罗吉尔的字，就一行：别让我父亲当旗子。' },
      { if: "origin == 'wex'", text: '巴兹伍德的信夹在一捆运盐的单子里，也到了：回来述职，顺路。' },
      { if: "origin == 'wex' && (flag.report1_false || var.false_reports >= 2)", text: '底下另起一行，字小了一号：带上你的抄本。' },
      { if: 'is.god', text: '骑士还带着第二封，封皮上写着“致车上那位”。里头一句话：若阁下真是那一位，敝人另有一事请教，见面再说。' },
    ],
    first: [
      { if: 'party.ushka && approval.ushka <= -4', then: ['companion -ushka', 'flag ushka_left', 'flag a3_ushka_went', 'log 乌什卡背上刀与锤走了，往烂刀氏族那边。'] },
      { if: "origin == 'sons'", then: ['quest q_o_sons stage 2'] },
      { if: "origin == 'wex'", then: ['quest q_o_wex stage 2'] },
      'codex lilac_wars',
    ],
    choices: [
      {
        text: '收下多米尼克的信条',
        once: true,
        effects: ['flag creed_carried', 'item +corinite_creed'],
        result: [
          '多米尼克把书递过来，又抽回去，翻到最后一页看了一眼，才又递过来。',
          { speaker: '多米尼克', text: '头一页是愚足抄的。字丑，意思没错。' },
        ],
      },
      {
        text: '收下蓝牙的路条',
        once: true,
        req: 'rep.corintar > -2',
        reqText: '科琳塔尔信不过你们',
        effects: ['item +safe_conduct'],
        result: [
          { speaker: '蓝牙', text: '西边的事我不过问。过卡的时候，印朝上。' },
          { if: 'is.greenskin || party.ushka || party.nixee', speaker: '蓝牙', text: '帝国那边见了绿皮就要文书。别弄丢。' },
        ],
      },
      {
        text: '把银月徽亮给骑士看',
        tag: '达梅里亚之子',
        if: "origin == 'sons'",
        once: true,
        effects: ['flag a3_name_early', 'rep moon +1'],
        result: [
          '骑士看了一眼你的领口，把声音压低了。',
          { speaker: '骑士', text: '大团长交代过，车上要是有人戴这个，就把名字告诉他。阿登。别的话，他到了堡里亲口说。' },
        ],
      },
      {
        text: '当着大家拆开巴兹伍德的信',
        tag: '皇帝的差事',
        if: "origin == 'wex'",
        once: true,
        effects: ['flag a3_wex_open', 'approval tan +1', 'approval nixee -1'],
        result: [
          '你把信念了一遍，连“顺路”两个字也念了。',
          { if: 'party.nixee', speaker: '妮克西', text: '规矩第四条：东家的信自己看。你这是坏行情。' },
          { if: 'party.tan', speaker: '阿坦', text: '这样好。' },
        ],
      },
      {
        text: '收下定金，上路',
        effects: ['quest q_duke start', 'gold +150', 'approval nixee +1'],
        result: '骑士把钱袋放在门板上，又从怀里掏出一张单子，请你在“收讫”两个字底下按个手印。',
        goto: 'a3_02',
      },
      {
        text: '告诉骑士：事毕再结账，定金带回去',
        effects: ['quest q_duke start', 'flag a3_no_deposit', 'approval ushka +1', 'approval nixee -1'],
        result: [
          '骑士愣了一下，把钱袋又系回了鞍上。他说大团长管了五十年仓，头一回有人把钱往回推。',
          { if: 'party.nixee', speaker: '妮克西', text: '一百五十。白放走一百五十。我记着，这笔算你的。' },
        ],
        goto: 'a3_02',
      },
    ],
  },

  a3_02: {
    id: 'a3_02',
    title: '倒着走的难民路',
    loc: '阿巴兰 · 弗里塞斯提尔一带',
    date: '1451年秋',
    text: [
      '二十七年前东坎诺的人往西逃，走的就是这条路。如今你们往回走，板车的轮子压在当年的车辙里。路边隔一段立一根木桩，刻着里数，是难民营的人刻的，好让后头的人知道离下一口粥还有多远。',
      '弗里塞斯提尔的营地没拆。帐篷换成了泥墙房，添了一座磨坊、两家客栈，算个镇了。镇口一个泰卢姆喊报人站在酒桶上，一手拿单子，一手摇铃。',
      { speaker: '喊报人', text: '流亡者罗吉尔，一千金冠。偷骡子的瘸腿汉斯，三十金冠。见着了报到磨坊，报假的打二十鞭。' },
      { if: 'flag.rogier_counted', speaker: '喊报人', text: '又据东边书办的报：此人眼下在塔兰顿，城堡朝东那面墙上挂他的旗。' },
      { if: "origin == 'sons'", text: '单子底下贴着一溜画像。第四张是你。鼻子画歪了，下巴画对了。' },
      { if: 'is.god', speaker: '喊报人', text: '另有自称神者一名，跟着一辆板车走，赏格待议。' },
      { if: 'is.god', text: '他还没喊完，镇上的人已经往车边抬病人了：一个咳血的老头，两个出疹子的孩子，一个摔断了腰的磨坊伙计，躺在门板上。' },
      { if: 'party.tan', text: '阿坦在镇口站了很久。他是在这儿生的。那年营里有四百顶帐篷，他娘那顶在哪一排，他说不上来。' },
      { if: 'is.greenskin || party.ushka || party.nixee', text: '镇口还坐着个书办，面前一张小桌子。他看见车上的绿皮，伸手要文书。' },
    ],
    choices: [
      {
        text: '陪阿坦去磨坊翻营里的旧名册',
        if: 'party.tan',
        once: true,
        effects: ['approval tan +1'],
        result: [
          '磨坊的账房翻出一本发了霉的册子。1428 年那一页记着十一个“卡斯坦”，后头写着帐篷的排号。阿坦一个一个数完，挑了第七个，说就当是这个。',
          { speaker: '阿坦', text: '十一个。我数了两遍。' },
        ],
      },
      {
        text: '给车边的病人治病',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag god_shrine', 'rep temples -1'],
        result: [
          '你从晌午治到天黑。磨坊伙计自己走回了家，第二天扛着两袋面来谢你。',
          '后来往东去的车夫说，你们走后不出七天，镇口那根刻里数的木桩边上就搭了个龛，供着一块你坐过的石头。附近神殿的人来看过，脸色很难看。',
          { if: 'party.tan', speaker: '老邻居', text: '小卡斯坦，车上那位，是你伺候的那位？' },
          { if: 'party.tan', speaker: '阿坦', text: '不是。我们同路。' },
        ],
      },
      {
        text: '把蓝牙的路条递给书办',
        if: '(is.greenskin || party.ushka || party.nixee) && item.safe_conduct',
        result: '书办对着日头看了看印，在你们的名字后头各画了一个圈。车上那个绿皮的名字他写错了，没人纠正他。',
        goto: 'a3_02b',
      },
      {
        text: '跟书办说车上的绿皮是抬尸首的苦力',
        if: '(is.greenskin || party.ushka || party.nixee) && !item.safe_conduct',
        check: { skill: 'deception', dc: 14, party: true, mods: [{ if: "origin == 'sons'", n: -1, why: '赏格单上有你的脸' }] },
        ok: { text: '书办捏着鼻子朝板车看了一眼，挥手让你们过去了。', goto: 'a3_02b' },
        fail: { text: '书办说苦力也得有文书。你们只好绕开镇子，在磨坊后头的泥地里多走了一天半。', effects: ['flag a3_detour'], goto: 'a3_02b' },
      },
      {
        text: '不进镇，从磨坊后头的泥路绕过去',
        if: 'is.greenskin || party.ushka || party.nixee',
        effects: ['flag a3_detour'],
        result: '泥没过脚踝。你们多走了一天半，车轴里塞满了烂草。',
        goto: 'a3_02b',
      },
      {
        text: '在镇上买两个饼，接着往西走',
        if: '!(is.greenskin || party.ushka || party.nixee)',
        effects: ['gold -2'],
        result: '饼是黑麦的，夹着一片马肉。阿巴兰西边的人吃马，不当回事。',
        goto: 'a3_02b',
      },
    ],
  },

  a3_02b: {
    id: 'a3_02b',
    title: '林子边上的军士',
    loc: '阿巴兰 · 往西的大路',
    text: [
      '出镇往西走了半天，路边的林子里飘出一股烤马肉的味儿。十来个人围着一堆火，号衣上的袖标都拆了，有玫瑰党的红，也有月党的蓝，补丁摞着补丁。一辆干草车横在路当中。',
      '领头的军士站起来，嘴里还在嚼。他没拔刀，先看车，再看你们的鞋，最后看钱袋。',
      { speaker: '军士', text: '仗打完了，没人告诉我们往哪儿去。过路钱八十。不给也行，我这儿的弟兄刚好闲着。' },
      { if: 'party.tan', speaker: '阿坦', text: '他们走的也是当年难民那条路。就是方向反了。' },
      { if: 'is.greenskin', text: '他看见你，嚼的那口肉停了一下。他打过玫瑰党，打过月党，没跟绿皮打过照面。' },
    ],
    choices: [
      {
        text: '劝他带弟兄们去东坎诺找活',
        check: { skill: 'persuasion', dc: 14, party: true, adv: 'is.soldier', mods: [{ if: 'rep.companies >= 2', n: 2, why: '东坎诺的冒险团认得这辆车' }] },
        ok: { text: '你跟他算了一笔账：东坎诺十几个冒险团，个个欠饷，个个缺人，欠饷的也比没饷的强。他把马骨头扔进火里，说去看看。', effects: ['flag a3_sergeant_east', 'rep companies +1'], goto: 'a3_03' },
        fail: { text: '他说东坎诺的饷是拿兽人脑袋抵的，他宁可在这儿收过路钱。他身后的弩手把弦挂上了。', combat: ROAD_FIGHT },
      },
      {
        text: '数八十金冠给他',
        req: 'gold >= 80',
        reqText: '钱不够八十',
        cost: { gold: 80 },
        effects: ['flag a3_paid_road'],
        result: '他数了两遍，把钱塞进靴筒，让人把干草车推开了。',
        goto: 'a3_03',
      },
      {
        text: '摘下兜帽，朝火边走两步',
        tag: '绿皮',
        if: 'is.greenskin',
        check: { skill: 'intimidation', dc: 13 },
        ok: { text: '你什么也没说。火边先站起来的是那两个弩手，他们往后退，退进了林子里。军士骂了一声，跟着退了。干草车留在了路上。', effects: ['flag a3_scared_road'], goto: 'a3_03' },
        fail: { text: '军士咽下那口肉，说绿皮他是没打过，可绿皮的赏格单他见过。他拔了刀。', combat: ROAD_FIGHT },
      },
      {
        text: '拔刀',
        combat: ROAD_FIGHT,
      },
    ],
  },

  a3_03: {
    id: 'a3_03',
    title: '目前可靠',
    loc: '阿巴兰边上的一间驿站',
    text: [
      { if: 'flag.a3_robbed', text: '你们是空着钱袋进的驿站。骡子也让散兵牵走了，车是你们轮着拉过来的。' },
      '驿站的马厩比客房大。客房一共三间，最好的那间门口坐着个帝国侏儒，脚够不着地，膝盖上摊着一本账，比她半个人还宽。她看见你们进门，合上账，跳下凳子，个头刚到桌沿。',
      { speaker: '蒂尔达', text: '蒂尔达·奥布·敏菲吉特。巴兹伍德先生派我来盯着你们（这一句本该瞒着（我觉得瞒着没用））。哪张床归我？' },
      { if: 'flag.a3_road_fought', speaker: '蒂尔达', text: '林子边上那一仗我记了。倒下的我数的是六个（你们数的要是五个，我按五个改）。' },
      { if: 'flag.a3_sergeant_east', speaker: '蒂尔达', text: '你们劝走了十来个散兵，往东去了。我记下了（人数是估的（估得偏少））。' },
      { if: 'flag.a3_paid_road', speaker: '蒂尔达', text: '八十金冠过路钱，记在“杂项”底下。巴兹伍德先生最爱看杂项。' },
      { if: 'flag.a3_scared_road', speaker: '蒂尔达', text: '吓跑的不算打，也不算劝。我另开了一栏。' },
      { if: "origin == 'wex'", speaker: '蒂尔达', text: '说实话，我主要是来查你的（他们几个是顺便）。你这些年的信，我一封一封都带着。' },
      { if: "origin == 'wex' && flag.a3_wex_open", speaker: '蒂尔达', text: '你在门板桌边上把巴兹伍德先生的信念出来了。他料到了（他说你会念（他赌了一个铜子））。' },
      { if: 'party.nixee', text: '妮克西把自己的账也摊开了，两个人头对头对了一遍。对到一半，妮克西说她多收了蒂尔达两个铜子的灯油钱。蒂尔达说是三个。最后谁也没退。' },
      { if: 'is.god', text: '她的差事单里夹着一页，是巴兹伍德先生亲手拟的，专问你：一，能否被杀；二，是否纳税；三，站哪一边。第三条的字描粗过。' },
      { if: "race == 'gnome'", text: '她跟你说话的时候语速又快了一倍，旁人只听得见括号。' },
      { if: 'is.greenskin', speaker: '蒂尔达', text: '你的文书我得先看一眼。不是不信你，是我得在本子上写“已验”两个字。' },
    ],
    choices: [
      {
        text: '让她跟着',
        effects: ['flag tilda_with'],
        result: '她把账本塞进板车，挑了离尸首最远的那个角，又从包里掏出一块薰衣草饼，压在账本上。',
        goto: 'a3_04',
      },
      {
        text: '半夜套车，甩掉她',
        check: { skill: 'stealth', dc: 16, party: true },
        ok: { text: '你们半夜走了二十里。第三天中午，蒂尔达骑着一头驿站的骡子追上来了，账本上多了一行：曾试图脱队。', effects: ['flag tilda_with', 'rep throne -1'], goto: 'a3_04' },
        fail: { text: '天亮前你们到了下一站。蒂尔达已经坐在门口了，比你们早半个时辰，面前一碗麦粥还冒着热气。', effects: ['flag tilda_with'], goto: 'a3_04' },
      },
      {
        text: '在马厩的干草上歇一晚',
        if: '!flag.a3_detour',
        once: true,
        effects: ['rest short'],
        result: '客房里有臭虫，马厩里有马。你们挑了马。',
      },
      {
        text: '跟她对一遍你这些年的报告',
        tag: '皇帝的差事',
        if: "origin == 'wex' && var.false_reports >= 1",
        once: true,
        check: { skill: 'insight', dc: 14 },
        ok: { text: '她每念一封，指甲就在纸边上掐一下。念到假的那几封，指甲掐得最深。她早就知道，只是没说。', effects: ['flag a3_saw_tilda'] },
        fail: { text: '她念得很平，你什么也没看出来。念完了她说：很好。这两个字你琢磨了一夜。', effects: ['rep throne -1'] },
      },
      {
        text: '跟她对一遍你这些年的报告',
        tag: '皇帝的差事',
        if: "origin == 'wex' && var.false_reports < 1",
        once: true,
        effects: ['rep throne +1'],
        result: '对完了，她在每一封后头画了个勾，又在最后一封后头画了个小一点的勾。',
      },
      {
        text: '跟她扯两句各自家里是哪一支的',
        tag: '侏儒',
        if: "race == 'gnome'",
        once: true,
        effects: ['rep throne +1'],
        result: '扯到第三代，你们俩发现各自的曾祖母为了一只铜壶打过官司。她在本子上写：可靠（亲戚）。',
      },
      {
        text: '替她把那页上的三条答了',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag a3_god_answered', 'rep throne +1'],
        result: [
          '你一条一条答：一，不知道，没人试成过；二，没人收过；三，站在车这一边。',
          { speaker: '蒂尔达', text: '第三条巴兹伍德先生不会满意的（他从来不满意第三条（谁的都一样））。' },
        ],
      },
    ],
  },

  // ======================================================================
  // 荆月船会
  // ======================================================================

  a3_04: {
    id: 'a3_04',
    title: '荆月船会',
    loc: '埃斯玛利亚 · 一条游船',
    text: [
      '在埃斯玛利亚，河就是路。丁香战争打完头一年，这儿的人家办了个荆月船会：月党和玫瑰党的人家各出几条船，并排拴在河心，戴着面具隔着船舷比衣裳。',
      '你们上的是一条租来的平底船，船头挂一弯褪了色的月牙，船尾插一枝干玫瑰，两边谁也不得罪。女人的裙子都露着肩膀，男人一律高筒靴。',
      '伊斯特拉洛尔的女公爵奥坎娜坐在船尾，没戴面具，穿一件扈从的短外套，拿匕首削梨。',
      { if: 'party.tan', text: '天刚亮阿坦就在甲板上做晨祷。船一晃，他旁边三个戴面具的公子哥一起扶着栏杆吐。他念到第二十句停下，等他们吐完，接着念。' },
      { if: 'party.nixee', speaker: '妮克西', text: '面具十二个铜子一张，衣裳四十金冠一件。比的是衣裳，赚钱的是卖面具的。' },
      { if: 'is.greenskin', text: '今天人人戴面具。你脸上那块颜色，也就没人问了。' },
    ],
    choices: [
      {
        text: '凑到席上，说几句好听的',
        check: { skill: 'persuasion', alt: ['performance'], dc: 14, adv: 'is.greenskin', mods: [{ if: 'is.noble', n: 2, why: '你知道该夸袖口还是夸领子' }] },
        ok: { text: '你夸一位月党夫人的袖口，夸到第三句她就让人给你添了把椅子，还替你倒了一杯李子白兰地。', effects: ['flag a3_seated'], goto: 'a3_04b' },
        fail: { text: '他们以为你是请来唱曲的，赏了两个铜子，让你站到桅杆边上去。你照样留下了，就是站着。', effects: ['rep moon -1'], goto: 'a3_04b' },
      },
      {
        text: '不凑热闹，径直去船尾找奥坎娜',
        effects: ['approval ushka +1'],
        result: [
          '船尾没人拦你。肯凑过去跟女公爵说话的人不多，她看谁都像是来借钱的。',
          { if: 'party.ushka', speaker: '乌什卡', text: '衣裳比完了还得换。不看。' },
        ],
        goto: 'a3_04b',
      },
    ],
  },

  a3_04b: {
    id: 'a3_04b',
    title: '船尾',
    loc: '埃斯玛利亚 · 一条游船',
    text: [
      '太阳偏西。两边的船上开始挂灯，灯绳从桅杆拉到船舷，一串一串的纸灯笼，还没点。',
      { speaker: '奥坎娜', text: '东边来的？车上的味儿一闻就知道。坐。这种场子我最烦，你们说话起码不绕。' },
      { if: 'flag.a3_seated', text: '你那把椅子挨着月党的席面，听得见他们骂玫瑰党，骂得很文雅，一句脏字都没有。' },
      '席上有个玫瑰党的公子喝多了，腰带上别着一张烫金的帖子，是皇宫三十年庆典的请柬。他拿它扇风。',
      { if: 'party.tan', speaker: '阿坦', text: '那边船上有三个人，一整天没换过衣裳。' },
      { if: 'is.greenskin', text: '奥坎娜看了你一眼，又看了一眼，就不看了。她在扈从帐里见过的东西多。' },
    ],
    choices: [
      {
        text: '看看席上都是些什么人',
        if: "origin != 'sons'",
        once: true,
        check: { skill: 'insight', dc: 13, party: true },
        ok: { text: '三个人。面具是新的，靴子是旧的，一晚上没看过谁的衣裳，只看你们存东西的舱口。', effects: ['flag a3_spotted'] },
        fail: { text: '你看了一圈，只看出谁的衣裳是借的。借的人还挺多。' },
      },
      {
        text: '由着他们看你的银月徽',
        tag: '达梅里亚之子',
        if: "origin == 'sons'",
        once: true,
        effects: ['flag a3_spotted'],
        result: '一个戴面具的盯着你领口的银月徽看了半天，跟另外两个使了个眼色。三个人的靴子都是旧的，面具都是新的。',
      },
      {
        text: '去摸那个公子腰上的请柬',
        if: '!item.jubilee_invite',
        once: true,
        check: { skill: 'sleight', dc: 14, party: true },
        ok: { text: '他扇到第四下，帖子已经在你袖子里了。他接着拿手扇。', effects: ['item +jubilee_invite'] },
        fail: { text: '他腰一扭，你一把摸在他肚子上。他以为你在调戏他，红着脸走开了，帖子还别在腰上。', effects: ['rep throne -1'] },
      },
      {
        text: '编个故事，哄他把请柬送你',
        if: '!item.jubilee_invite',
        once: true,
        check: { skill: 'deception', dc: 15, mods: [{ if: "origin == 'sons' && !item.jubilee_invite", n: -1, why: '赏格单上有你的脸' }] },
        ok: { text: '你说你舅舅死在丁香战争里，生前最想进一回皇宫。他哭了，把帖子塞给你，又塞给你一块手帕。', effects: ['item +jubilee_invite'] },
        fail: { text: '他听完拍着你的肩膀，说他也有个死了的舅舅，然后让你请他喝了三杯，帖子揣回了怀里。', effects: ['gold -10'] },
      },
      {
        text: '问奥坎娜想不想打第五场',
        if: '!flag.a3_aucanna_talked',
        once: true,
        effects: ['flag a3_aucanna_talked', 'rep moon -1'],
        result: [
          '她手里的梨削断了皮。',
          { speaker: '奥坎娜', text: '我给他牵过马。你要是来问这个的，回去吧。' },
        ],
      },
      {
        text: '告诉奥坎娜你们要去找谁',
        if: '!flag.a3_aucanna_talked',
        once: true,
        effects: ['flag a3_aucanna_talked', 'flag a3_aucanna_told', 'rep moon +1'],
        result: [
          '她把匕首插回靴子里，梨搁在膝盖上，半天没吃。',
          { speaker: '奥坎娜', text: '我十九岁给他当扈从。那年开春他把我打发回了家，我父亲和我哥替他死在了宫里。找着了，先来告诉我。' },
        ],
      },
      {
        text: '等着掌灯',
        goto: 'a3_04c',
      },
    ],
  },

  a3_04c: {
    id: 'a3_04c',
    title: '掌灯',
    loc: '埃斯玛利亚 · 一条游船',
    text: [
      '灯笼点到一半，隔壁那条玫瑰党的船上有人翻过船舷跳了过来，落地没出声。三个人，面具没摘，刀已经在手里。',
      '他们不看奥坎娜，也不看衣裳。领头的那个拿刀尖挑开你们堆在舱口的油布，油布底下是德利安的信匣和你们的铺盖卷。',
      { speaker: '领头的面具', text: '德利安的信。交出来，你们接着喝。' },
      '两边船上的人还在比衣裳。有人朝这边举杯，以为是请来的班子在演戏。',
      { if: 'party.nixee', speaker: '妮克西', text: '没开价就动刀。规矩第三条，这种人不用跟他讲规矩。' },
      { if: 'flag.a3_spotted', text: '你认得这三双旧靴子。奥坎娜那边坐着两个伊斯特拉洛尔的女兵，正看着你。' },
    ],
    choices: [
      {
        text: '朝奥坎娜的女兵递个眼色',
        if: 'flag.a3_spotted',
        combat: BOAT_FIGHT_TIPPED,
      },
      {
        text: '护住舱口',
        combat: BOAT_FIGHT,
      },
    ],
  },

  // ======================================================================
  // 阿德蕾西娅堡
  // ======================================================================

  a3_05: {
    id: 'a3_05',
    title: '管仓的人',
    loc: '阿德蕾西娅堡',
    text: [
      { if: 'flag.a3_boat_lost', text: '你们是湿着上的岸。请柬泡烂在河里，衣裳在马背上晾了两天。' },
      { if: 'flag.a3_boat_won', text: '那三个人身上什么也没搜出来，连钱袋都没有。付钱的人没留名字。' },
      '阿德蕾西娅堡的仓房比礼拜堂大。德利安在仓房里见的你们，手里拿着一本出入库的册子。他七十三岁，脸上横着一道旧疤，是三十多年前在威斯达姆留下的。',
      { speaker: '德利安', text: '长剑，四百一十二把，在册四百一十二。锁甲，三百零七领，在册三百零九，两领借给了厨房当筛子。坐。' },
      '他合上册子，才说出那个名字：阿登·天枪，达梅里亚的大公，蓝牙的外祖父。八年前死在皇宫王座厅，埋在花圃底下。',
      { if: 'flag.a3_name_early', text: '这个名字你在门板桌边上已经听过了。从他嘴里说出来，跟从骑士嘴里说出来不一样。' },
      { speaker: '德利安', text: '1444 年深秋我进宫当值。几个礼拜以后，看见郁金香换了一茬。花不到季，土是新翻的。我就把差事交给副手，回了堡里。' },
      { if: 'is.greenskin || party.ushka || party.nixee', text: '堡门口的骑士把路条看了三遍。德利安出来，说这几位是他请的，骑士才收了剑。' },
    ],
    first: ['quest q_duke stage 2', 'codex delian', 'codex adenn', 'item +garden_sketch'],
    choices: [
      {
        text: '问他为什么等了七年',
        once: true,
        effects: ['approval garaele +1'],
        result: [
          { speaker: '德利安', text: '我是管仓的。少了一件东西，得先弄清楚是谁签的出库。' },
          { speaker: '德利安', text: '签字的人我弄清楚了。我惹不起他。我等的是一个惹得起的时候，没等着。等来了你们。' },
          { if: 'party.garaele', speaker: '加莱尔', text: '七年。在我们那儿算不上等。在你们这儿，够一个人改主意三回。' },
        ],
      },
      {
        text: '问他那匣子信',
        once: true,
        effects: ['approval nixee +1'],
        result: [
          '桌角放着一只黑木匣子，锁扣磨得发亮。他把手按在上面。',
          { speaker: '德利安', text: '不给看。都是写给他的，他还没拆。' },
          { if: 'party.nixee', speaker: '妮克西', text: '没拆的信不值钱，也不欠钱。行，这个我不打听。' },
        ],
      },
      {
        text: '看他摊开的那张花园图',
        once: true,
        check: { skill: 'insight', dc: 12, party: true },
        ok: { text: '图是凭记性画的，畦按仓位编号，第七畦画了个小圈。墨色有新有旧：这张图他画了不止一年。1444 年夏天他开城门归降，为的就是进宫看这块地。', effects: ['flag a3_delian_read'] },
        fail: { text: '图是凭记性画的，畦按仓位编号，第七畦画了个小圈。他把图卷起来递给你，别的没多说。' },
      },
      {
        text: '问他十六岁那年的事',
        tag: '贵族',
        if: 'is.noble',
        once: true,
        effects: ['rep moon +1'],
        result: [
          '他看了你一会儿，大概是认出了你站着的样子。',
          { speaker: '德利安', text: '十六岁那年他偷偷跑去洛伦特看比武会，我替他牵马。他把洛伦特国王挑下了马，国王的私生子喝醉了带人来找他算账。我挡了一拳。就挡了那一拳，他记了我一辈子。' },
        ],
      },
      {
        text: '应下校场上那个年轻骑士的邀',
        tag: '试炼派',
        if: "faction == 'tried'",
        once: true,
        result: [
          '校场上一个年轻骑士一直盯着你们，这会儿走过来，说想试试东边来的收尸人。德利安叹了口气。',
          { speaker: '德利安', text: '按规矩，点到为止。见了血我会晕，所以我不看。' },
        ],
        goto: 'a3_05b',
      },
      {
        text: '揣好图，动身去安本科斯特',
        goto: 'a3_06',
      },
    ],
  },

  a3_05b: {
    id: 'a3_05b',
    title: '照规矩比一场',
    loc: '阿德蕾西娅堡 · 校场',
    text: [
      '校场的沙子东半边是新铺的，西半边踩实了。几个白胡子的老骑士靠着木栏站着，抱着胳膊。',
      '年轻骑士报了自己的名字，又报了骑士团的誓词：不领地，不受衔，不娶不嫁，不留子嗣。报完了问你有没有誓词要报。',
      { if: 'party.ushka', speaker: '乌什卡', text: '有。抬起来的放下，放下的不许再起来。' },
      { if: 'is.martial', text: '他起手是阿德蕾西娅的路数，剑尖压得低，留着念咒的空当。你看得出来空当在哪儿。' },
      '德利安背过身去，开始数墙根底下的草料捆。',
    ],
    combat: KNIGHT_BOUT,
  },

  // ======================================================================
  // 安本科斯特
  // ======================================================================

  a3_06: {
    id: 'a3_06',
    title: '世人所欲之城',
    art: 'ev_far_and_wide',
    loc: '安本科斯特',
    date: '1451年冬',
    shop: {
      name: '锻炉街的铁匠',
      blurb: '矮人开的铺子。门口挂的牌子写着：金冠买得到的最好的家伙。',
      stock: ['breastplate', 'half_plate', 'rosemetal_rapier', 'rosemetal_saber', 'heavy_crossbow', 'hold_shield', 'greater_healing_potion'],
    },
    text: [
      '安本科斯特，世人所欲之城。精灵的残存舰队四百五十年前在这儿靠的岸，城名是他们起的。八年前威克斯的兵在这儿抢了三天，也有人说抢了几个月。如今它是自由市，市政厅门口站着民兵，隔着半个岛就是威克斯的驻军。',
      '城分好几块：神殿区的钟，锻炉街的锤子，精灵码头那些架在搁浅方舟上的宅子，帝国区的高墙。舱底区占了全城四分之一，城里的差役进去过好几回，有几回没出来。',
      { if: 'is.caster && !is.god', text: '城门口贴着告示：凡施法者，入城三日内到魔导院分署登记，立誓约，领牌子。不登记的，在城里施一回法，就来一队武卫。' },
      { if: 'is.god', text: '魔导院的人比你们先到城门。领头的法师捧着一本 1348 年的旧例，翻到折了角的那一页：莉安农女皇五岁那年拿一道法术罩住了整座城，后来死在自己的护卫手里。他照着念：立誓约，或者离岛。' },
      { if: 'is.god && party.garaele', speaker: '加莱尔', text: '他们怕的不是你。他们怕的是一百年前那一回。这两样，他们自己也分不清。' },
      { if: 'is.greenskin || party.ushka || party.nixee', text: '每过一道城门都要验文书。守门的先看脸，再看纸，看完纸又看一回脸。' },
      { if: 'party.ushka', text: '乌什卡把路条叠成小方块，攥在拳头里。守门的要看，她就把拳头伸过去。' },
      { if: 'flag.a3_tan_counted && visited.a3_06 == 1', speaker: '阿坦', text: '你对快死的人说的好话，我又记满三笔了。我不问是哪几笔。' },
    ],
    first: [
      'level 7',
      { if: 'party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)', then: ['approval tan -1', 'flag a3_tan_counted'] },
    ],
    choices: [
      { text: '去神殿区', once: true, goto: 'a3_06c' },
      { text: '去舱底区', goto: 'a3_06b' },
      { text: '去锻炉街的酒馆，打听一个喝了七年的威克斯老兵', once: true, goto: 'a3_09' },
      { text: '去精灵码头，找加莱尔的姑祖母', once: true, goto: 'a3_07' },
      { text: '去帝国区，威克斯的公事房', once: true, goto: 'a3_10' },
      {
        text: '看乌什卡在木签上刻新的一条',
        if: 'party.ushka',
        once: true,
        effects: ['quest q_ushka stage 3', 'approval ushka +1'],
        result: [
          '她拿刀尖在第十一道底下又刻了一道短的，刻完吹了吹木屑。',
          { speaker: '乌什卡', text: '帝国的规矩。先递文书，后说话。这条不算第十二。' },
        ],
      },
      {
        text: '在城北找家客栈，睡个整觉',
        once: true,
        effects: ['rest long'],
        result: '客栈的床有床腿。你们已经很久没睡过有床腿的床了。',
      },
      {
        text: '去阿斯拉银行的分号',
        tag: '负怨者兵团',
        if: "origin == 'grudge'",
        once: true,
        effects: ['flag a3_bank', 'gold +80'],
        result: [
          '柜台后头的矮人看了一眼你的账页，从后屋抱出一本更厚的。兵团在这家分号存着一笔银子，你签字取了一份。',
          { speaker: '账房', text: '另外，皇宫今年换了花匠，换的是我们放过款的那家。花匠夜里几点收工，我这儿有数。' },
        ],
      },
      {
        text: '去魔导院分署登记',
        tag: '施法者',
        if: 'is.caster && !is.god',
        once: true,
        effects: ['flag a3_registered', 'gold -10'],
        result: '登记费十个金冠。武卫拿一根绳子量了你的手腕，问你会几种法术，你说了，他写了一半。你领到一块铜牌，上头刻着你的名字，刻错了一个字。',
      },
      {
        text: '当场烧了他的封条和誓约信物',
        tag: '神',
        if: 'is.god && !flag.a3_god_measured',
        once: true,
        effects: ['flag a3_god_burned', 'rep throne -2', 'rep temples -1'],
        result: '封条和铜牌在他手里烧成了一撮灰，他的手一点没伤着。城门口的人散得比来时快。当天夜里，各塔都收到了大魔导师的通函，通函上有你的长相。',
      },
      {
        text: '让他们量',
        tag: '神',
        if: 'is.god && !flag.a3_god_burned',
        once: true,
        effects: ['flag a3_god_measured', 'flag a3_registered'],
        result: [
          '他们量了三天：量身高，量影子，量你喝一碗水要多久。第三天傍晚领队交来一份结论，你拆开看了。',
          { cls: 'letter', text: '经测定，此人理论上不存在。建议另行观察。' },
        ],
      },
      {
        text: '庆典前夜，进宫',
        if: 'visited.a3_08 && visited.a3_09 && visited.a3_10',
        goto: 'a3_11',
      },
    ],
  },

  a3_06b: {
    id: 'a3_06b',
    title: '舱底区',
    loc: '安本科斯特 · 舱底区',
    shop: {
      name: '药婆',
      blurb: '铺子开在一条船的底舱里，东西装在海螺壳里。',
      stock: ['healing_potion', 'antidote', 'heroism_draught', 'gnomish_smoke_bomb', 'bandage'],
    },
    text: [
      '舱底区的房子拿旧船板钉的，一层压一层，越往下越黑。码头边那排木架子底下躺着十几具没人认的尸首，裹着帆布，有的裹了一个月。潮一涨，帆布就湿到腰。',
      '药婆说舱底区的人死了没地方埋：坟地要钱，神殿要钱，扔进海里，潮水第二天又送回来。',
      { if: 'party.ushka', speaker: '乌什卡', text: '泡了一个月的不好烧。得埋。' },
      { if: 'party.tan', speaker: '阿坦', text: '十四个。我数了。' },
      { if: 'is.greenskin || party.ushka || party.nixee', text: '药婆的柜台底下压着一沓路条。印是真的，字是假的。' },
      { if: 'flag.bilge_graves', text: '码头背后那片坡上，十四个新土包，一个挨一个。有人在上头插了野花，花已经蔫了。' },
    ],
    choices: [
      {
        text: '出六十金冠，花两天给那排无名尸立坟',
        if: '!flag.bilge_graves',
        once: true,
        cost: { gold: 60 },
        effects: ['flag bilge_graves', 'world unburied -1', 'var rites +1', 'approval ushka +1', 'approval tan +1', 'log 舱底区码头背后的坡上，十四个没有名字的人。'],
        result: [
          '坟地是码头背后一片没人要的坡，石头多，土少。你们挖了两天，乌什卡一个人挖了六个。没有名字可刻，阿坦在每块石头上划了一道，划到第十四道，念了一遍晨祷的头四句。',
          { if: 'party.ushka', speaker: '乌什卡', text: '埋深了。潮水够不着。' },
        ],
      },
      {
        text: '挨家敲门，凑份子立坟',
        tag: '无冕派',
        if: "faction == 'crownless' && !flag.bilge_graves",
        once: true,
        check: { skill: 'persuasion', dc: 13, party: true },
        ok: { text: '舱底区的人没钱，有力气。头一天来了九个人帮着挖，第二天来了二十个，有个老头扛来一块门板当碑。你们只出了买石灰的钱。', effects: ['flag bilge_graves', 'world unburied -1', 'var rites +1', 'approval ushka +1', 'approval tan +1', 'rep companies +1', 'gold -15', 'log 舱底区码头背后的坡上，十四个没有名字的人，舱底区的人自己埋的。'] },
        fail: { text: '敲了一下午的门，凑到九个铜子。剩下的你自己掏了，坟照样立起来了。', effects: ['flag bilge_graves', 'world unburied -1', 'var rites +1', 'approval ushka +1', 'approval tan +1', 'gold -60', 'log 舱底区码头背后的坡上，十四个没有名字的人。'] },
      },
      {
        text: '从药婆那儿买一张路条',
        if: '(is.greenskin || party.ushka || party.nixee) && !item.safe_conduct',
        once: true,
        cost: { gold: 80 },
        effects: ['item +safe_conduct'],
        result: '她当着你的面填的名字，墨还没干就吹了吹，塞进一只海螺壳里递给你。',
      },
      { text: '回城里', goto: 'a3_06' },
    ],
  },

  a3_06c: {
    id: 'a3_06c',
    title: '神殿区',
    loc: '安本科斯特 · 神殿区',
    text: [
      '神殿区的钟一刻钟敲一回，十几座神殿各敲各的，谁也不让谁。摄政王庭的每一位在这儿都有一扇门。阿德安的门最高，月神的门最旧，卡斯特洛斯的门最宽，进出的人最少。',
      '编年史家会的楼在钟楼背后，门口挂着悬赏木牌：第一手的见闻，按件付钱。',
      { if: 'flag.notebook_order', speaker: '编年史家', text: '守昔者家的拓片本收到了，存在三楼，钱付过了。有两位先生每个礼拜来借一回，借回去看不懂，又送回来。' },
      { if: 'flag.notebook_kept', speaker: '编年史家', text: '守昔者小姐还留着那本拓片？会里出的价一直有效。她哪天想通了，门在这儿。' },
      { if: 'flag.notebook_sold', speaker: '编年史家', text: '那本拓片阿斯拉银行出过一个价，会里没跟上。可惜了。' },
      { if: 'flag.notebook_sold && party.garaele', text: '加莱尔那会儿站在门口看悬赏牌，没听见。' },
      { if: 'flag.names_filed', text: '会里的人还记得你们报上来的那两个名字。账本上写着：存疑，待复核。' },
      { if: "origin == 'corintar'", text: '你一进神殿区，后头就跟上了两个穿灰袍的，阿德安神殿的人。你停，他们也停。' },
      { if: 'flag.creed_delivered', text: '多米尼克的信条已经交上去了。你路过阿德安的门口，看见那本书压在一摞请愿书最底下。' },
    ],
    choices: [
      {
        text: '把多米尼克的信条交给神殿',
        if: "flag.creed_carried && !flag.creed_delivered && origin != 'corintar'",
        effects: ['flag creed_delivered', 'world scale +1', 'rep corintar +1', 'rep temples -1', 'item -corinite_creed'],
        result: [
          '接书的祭司翻到第一页，看了半天。',
          { speaker: '祭司', text: '剑与盾。就这些？' },
          '他还是收了，在簿子上写了一行：东边送来的，科琳信众的说法，一册。',
        ],
        goto: 'a3_06',
      },
      {
        text: '当着那两个灰袍，把信条交上去',
        tag: '科琳的队伍',
        if: "flag.creed_carried && !flag.creed_delivered && origin == 'corintar'",
        check: { skill: 'religion', dc: 14 },
        ok: { text: '你把那一下说给他们听：她挡在蓝牙前头，盾裂了。你说得很平。当晚有两个年轻祭司借走了信条，第二天还回来，手里各多了一本抄本。', effects: ['flag creed_delivered', 'flag a3_creed_copied', 'world scale +1', 'rep corintar +2', 'rep temples -1', 'item -corinite_creed'], goto: 'a3_06' },
        fail: { text: '你一开口，灰袍就开始驳，驳到你说不出话。信条还是收下了，压在一摞请愿书最底下。', effects: ['flag creed_delivered', 'world scale +1', 'rep corintar +1', 'rep temples -1', 'item -corinite_creed'], goto: 'a3_06' },
      },
      {
        text: '把舱底区那十四座坟报给编年史家会',
        if: 'flag.bilge_graves',
        once: true,
        effects: ['gold +15'],
        result: '编年史家在账上记了一行，付了十五个金冠，问你们知不知道他们的名字。不知道。他把这一栏空着。',
      },
      { text: '回城里', goto: 'a3_06' },
    ],
  },

  a3_07: {
    id: 'a3_07',
    title: '姑祖母',
    art: 'ck3_landing',
    loc: '安本科斯特 · 精灵码头 · 一座搁浅的方舟上的宅子',
    text: [
      '精灵码头的宅子是拿方舟改的。四百五十年前残存舰队靠岸，船拖上了滩，再没下过水。船身开了窗，桅杆截下来做房梁，甲板上搭着葡萄架。',
      '加莱尔的姑祖母住在最老的一条船上。她是舰生的，生在海上，登岸那年已经会走路了，到今年四百五十多岁，在精灵里也算长的。她坐在船头的藤椅上剥豆子，嘴里哼着一支摇篮曲。',
      { if: 'party.garaele', speaker: '加莱尔', text: '姑祖母，我带了几个朋友。他们是抬尸首的，鞋我让他们在外头擦过了。' },
      { if: '!party.garaele', text: '加莱尔不在。老太太肯见你们，是因为你们带来了她侄孙女父母的消息。她听完，把剥好的豆子倒回了豆荚堆里。' },
      { speaker: '姑祖母', text: '这支曲子是我娘在船上哼的。里头有个词，船上后来不许唱了。我小时候不懂，照唱，挨过一回打。' },
      { if: 'party.tan', text: '阿坦站在舱门口没进来。他在数那支曲子有几句。' },
      { if: 'is.greenskin', text: '老太太看你跟看别人一样。她这辈子见过的东西里，你排不上号。她递给你一把豆子。' },
    ],
    first: ['flag log_read'],
    choices: [
      {
        text: '跟她学那支摇篮曲',
        once: true,
        check: { skill: 'performance', dc: 12 },
        ok: { text: '你跟着哼了三遍。到那个词的地方，她停了，你也停了。她点了点头，说你停得对。', effects: ['flag a3_lullaby'] },
        fail: { text: '你学会了调子，词一个没记住。老太太说她当年的猫也是这么唱的。' },
      },
      {
        text: '问她登岸那晚的事',
        tag: '精灵',
        if: 'is.elf',
        once: true,
        effects: ['flag a3_auntie_kin'],
        result: [
          { speaker: '姑祖母', text: '那晚月亮是弯的。船底一碰着沙子，我娘把我举起来，让我先下去。我是脚先着的地，沙子是凉的。往后四百年，我一直记得沙子是凉的。' },
          '她拿你当晚辈，又告诉你阁楼有个天窗，通到龙骨上面，小时候她从那儿往外爬。',
        ],
      },
      {
        text: '告诉她你父亲那边是哪条船上的',
        tag: '半精灵',
        if: "race == 'half_elf'",
        once: true,
        effects: ['flag a3_auntie_kin'],
        result: '你说了个船名，她想了半天，说那条船上的人爱吃鱼干，爱吵架，靠岸那年吵得最凶。她又说阁楼有个天窗通到龙骨上面，你要是用得着。',
      },
      {
        text: '让加莱尔把航海志念出来',
        if: 'party.garaele',
        result: '加莱尔领你们上了阁楼。她念精灵字跟念通用语一样快，只在念到死人数目的地方慢下来。',
        goto: 'a3_07b',
      },
      {
        text: '上阁楼，自己啃航海志的记法',
        if: '!party.garaele',
        check: { skill: 'history', dc: 14, party: true },
        ok: { text: '船上的记法有规矩：先风，后星，再死人，最后抄祷词。摸清了规矩，就好认了。', goto: 'a3_07b' },
        fail: { text: '你们认了半个时辰，只认出一个“风”字。姑祖母叹了口气，自己爬上了阁楼。', effects: ['flag a3_log_slow'], goto: 'a3_07b' },
      },
    ],
  },

  a3_07b: {
    id: 'a3_07b',
    title: '第四十年',
    loc: '精灵码头 · 方舟的阁楼',
    text: [
      '阁楼里堆着十二口樟木箱子。航海志在最底下那口，一年一册，值夜的人轮着写。每一夜先记风，再记星，再记死了几个人，最后把值夜的祷词抄一遍。',
      '前三十九年，祷词都一样，列着舰队的神，一个挨一个。第四十年那一册，同一个位置，一个名字被墨涂掉了，旁边小字注着两个字：天空。往后的祷词里，再没有这个词。',
      '最后几页是一行方位，量了三个晚上，量的是一座神殿。舰队离开故土那天，回头还看得见它的屋顶。',
      { if: 'flag.a3_log_slow', text: '姑祖母一页一页替你们念。她念得慢，一页要歇三回，念完天已经黑透了。' },
      { speaker: '姑祖母', text: '第四十年，船上一个月死了一百多个。祷告没人应，就不祷他了，改祷祖宗。祖宗起码是自家人。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '墨底下还看得出头一个字母。我在竖井口拓过同一个。' },
      { if: 'party.tan && flag.castellar_seen', speaker: '阿坦', text: '天上的卡斯特拉尔。井壁上是这么刻的。这儿是同一个，涂掉了。' },
      { if: 'party.tan && !flag.castellar_seen', speaker: '阿坦', text: '卡斯特拉尔。听着像王的名字念歪了。' },
      { if: 'flag.a3_lullaby', text: '楼下老太太又哼起了那支曲子。涂掉的那个词，她唱的是“卡斯塔”，后半截吞了。' },
    ],
    first: ['quest q_dragon stage 4', 'codex lunatein_log'],
    next: 'a3_08',
  },

  a3_08: {
    id: 'a3_08',
    title: '封册',
    art: 'ev_female_spy',
    loc: '精灵码头 · 次日清晨',
    text: [
      '第二天一早，码头上来了一队魔导院的武卫。灰外套，包铁的短棍，胸前挂一块誓约的铜牌。他们不会法术，立过誓，专门对付会的人。领队后头跟着一个法师，手里一卷封条。',
      { speaker: '武卫领队', text: '奉阿德瑞尔岛的令。此宅藏有涉及未经审定之神名的文书，收归魔导院。请让开楼梯。' },
      { if: 'flag.tilda_with', speaker: '蒂尔达', text: '不是我报的。是我上一份例行报告报的（例行报告不算我（算一半））。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '那行方位我背下来了，昨晚背了九遍。你们怎么办，别问我。我只管记。' },
      { if: '!party.garaele && party.tan', text: '那行方位阿坦昨晚背了九遍，掐着手指头背的。' },
      { if: '!party.garaele && !party.tan', text: '那行方位你昨晚背了九遍，写在了手心里。' },
      { if: 'is.caster && !flag.a3_registered', text: '领队看见你，在本子上画了个记号。没登记的施法者，他们一眼就认得出来。' },
      { if: 'flag.a3_god_burned', text: '武卫来了八个，不是六个。大魔导师的通函到了：车上那位，烧过封条。' },
      { if: 'is.greenskin', text: '领队先验了你的文书，才说正事。规矩就是规矩。' },
    ],
    first: ['flag bearing_known'],
    choices: [
      {
        text: '抢在他们上楼前，把那几页抄下来',
        check: { skill: 'investigation', alt: ['sleight'], dc: 14, party: true, mods: [{ if: 'flag.a3_log_slow', n: -2, why: '昨晚念得太慢，字还没认熟' }] },
        ok: { text: '楼梯响到第九级，你抄完了最后一个数。抄页塞进靴筒里，册子摆回原处，封条贴得整整齐齐。', effects: ['flag log_copied', 'item +log_copy'], goto: 'a3_06' },
        fail: { text: '你抄到一半，领队已经站在你身后了。他把半张抄页也收了，说这一张也涉及神名。册子封了。', goto: 'a3_06' },
      },
      {
        text: '抱着册子，从屋顶走',
        check: { skill: 'stealth', dc: 15, party: true, adv: 'flag.a3_auntie_kin' },
        ok: { text: '天窗外头是方舟的龙骨，弯的，长着青苔。你们顺着它爬到船尾，跳上了隔壁的屋顶。武卫在楼梯上撞门撞了一刻钟。', effects: ['flag log_stolen', 'item +log_copy', 'rep temples -2', 'rep throne -1'], goto: 'a3_06' },
        fail: { text: '你们刚爬上龙骨，隔壁船的屋脊上就站起来两个灰外套。', goto: 'a3_08b' },
      },
      {
        text: '照规矩办：陪着册子去神殿区，两边都登记',
        effects: ['flag log_filed', 'world word +2', 'rep temples +2', 'approval garaele +1'],
        result: [
          '你们跟着武卫走了一上午，在编年史家会登了一遍，在魔导院分署又登了一遍。两边的簿子上都写着同一行：第四十年，删去一神名。',
          '这一行当天就传出去了。神殿区的钟敲到晚上，至少有三座神殿里的人在打听，删的是哪一位。',
          { if: 'party.garaele', speaker: '加莱尔', text: '两边都有底子，谁也烧不干净。' },
        ],
        goto: 'a3_06',
      },
      {
        text: '让他们封',
        effects: ['approval nixee +1', 'approval garaele -1'],
        result: [
          '法师在册子上贴了三道封条，贴得很仔细，像在给伤口缠布。武卫抱着箱子走了。',
          { if: 'party.nixee', speaker: '妮克西', text: '规矩第一条，活着。册子没了，方位还在脑袋里。脑袋他们封不了。' },
        ],
        goto: 'a3_06',
      },
    ],
  },

  a3_08b: {
    id: 'a3_08b',
    title: '屋脊上',
    loc: '精灵码头 · 方舟的屋脊',
    text: [
      '脚底下是方舟的龙骨，弯的，湿的，长着青苔，底下三丈是码头的石板。武卫已经上了隔壁船的屋脊，短棍上的铁箍在早上的太阳底下发亮。',
      { speaker: '武卫领队', text: '把册子放下。誓约在身，我们不打人，只打施法的手。' },
      '随队的法师站在后头，指尖已经亮了。码头上看热闹的人越聚越多，有人在下面押注。',
      { if: 'party.ushka', speaker: '乌什卡', text: '铜牌挂在胸口。砸那个。' },
    ],
    choices: [
      { text: '站稳了，迎上去', if: '!(is.caster && !flag.a3_registered) && !flag.a3_god_burned', combat: MILITANT_2 },
      { text: '站稳了，迎上去', if: '(is.caster && !flag.a3_registered) && !flag.a3_god_burned', combat: MILITANT_3 },
      { text: '站稳了，迎上去', if: '!(is.caster && !flag.a3_registered) && flag.a3_god_burned', combat: MILITANT_4 },
      { text: '站稳了，迎上去', if: '(is.caster && !flag.a3_registered) && flag.a3_god_burned', combat: MILITANT_5 },
    ],
  },

  a3_08c: {
    id: 'a3_08c',
    title: '武卫的牢',
    loc: '安本科斯特 · 魔导院分署的地牢',
    text: [
      '册子让他们收走了。你们在魔导院分署的地牢里蹲了一夜，地牢是干的，比舱底区的客栈干净。隔壁关着一个偷改天象簿的学徒，哭了半宿。',
      '天亮以后，一个书记来收罚金：一百金冠，开了收据，盖了三个印。',
      { if: 'flag.tilda_with', speaker: '蒂尔达', text: '收据给我。我替巴兹伍德先生报销（报不了（但我得试试））。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '方位还在。他们收得走纸，收不走我。' },
    ],
    first: ['gold -100'],
    next: 'a3_06',
  },

  a3_09: {
    id: 'a3_09',
    title: '挖坑的人',
    loc: '安本科斯特 · 锻炉街的一间酒馆',
    text: [
      '锻炉街一条街都是矮人的铺子，锤子从天亮敲到天黑。酒馆夹在两家铁匠铺中间，墙摸上去是热的。',
      '桥屯的奥托格坐在最里头那张桌子边，面前一壶李子白兰地。还是三卫大剑手的那副骨架，人瘦了。端杯子的手在抖，酒洒在袖口上，袖口早就硬了。',
      { if: "origin != 'wex'", text: '七年前他在板车边上抬过杜坎森，后来一纸调令把他叫回了西边。他先认出了板车的轮子，后认出你们。' },
      { if: "origin == 'wex'", text: '在卡斯托纳斯那栋五层楼的屋顶上，是他替你扶的梯子。他看见你，把杯子放下了。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '你手还抖。' },
      { speaker: '奥托格', text: '一直抖。喝了就不抖。' },
      { if: 'flag.tilda_with', text: '蒂尔达隔着两张桌子坐下，要了一杯牛奶，本子摊在膝盖上。' },
      { if: 'flag.dug_the_pit', text: '那一夜你也在花园里。你挖东头，他挖西头，隔着一畦郁金香，谁也没跟谁说话。' },
      { if: 'is.greenskin', text: '酒馆里的矮人看了你一眼，接着喝。锻炉街只认钱和手艺，脸是什么颜色不算在里头。' },
    ],
    choices: [
      {
        text: '坐到他对面，给你们俩各倒一杯',
        if: 'flag.dug_the_pit',
        effects: ['flag digger_talked', 'item +digger_oath', 'flag a3_two_prints'],
        result: [
          '你们喝了一壶。谁也没问谁。喝到第二壶，他先开的口，说的是那晚的土：底下有石子，铲子一下一下磕着响。你说你那头也有。',
        ],
        goto: 'a3_09b',
      },
      {
        text: '劝他把那晚的事说出来',
        check: { skill: 'persuasion', dc: 15, adv: 'is.soldier', mods: [{ if: 'party.ushka', n: 1, why: '他跟乌什卡一起抬过车' }] },
        ok: { text: '你跟他说，那人背上的口子是有人给他擦过的，擦的人不该一辈子揣着。他把杯子推开了。', effects: ['flag digger_talked', 'item +digger_oath'], goto: 'a3_09b' },
        fail: { text: '他听完，说他什么也没看见。然后把酒钱推到你面前，起身走了。', effects: ['gold -10'], goto: 'a3_06' },
      },
      {
        text: '陪他喝，喝到他先开口',
        check: { abil: 'con', dc: 14, save: true },
        ok: { text: '第四壶下去，你还坐得住，他坐不住了。他趴在桌上，脸贴着木头，开始说。', effects: ['flag digger_talked', 'item +digger_oath'], goto: 'a3_09b' },
        fail: { text: '你记得的最后一件事是第三壶。醒过来是在街上，酒钱是你付的，他人没了。', effects: ['gold -20', 'damage 1d6'], goto: 'a3_06' },
      },
      {
        text: '拿军令压他',
        tag: '皇帝的差事',
        if: "origin == 'wex'",
        effects: ['flag digger_talked', 'item +digger_oath', 'flag a3_ordered'],
        result: '你报出了巴兹伍德先生的名字和你的差事。他站起来，朝你立正，像念调令一样把那一晚背了一遍。',
        goto: 'a3_09b',
      },
    ],
  },

  a3_09b: {
    id: 'a3_09b',
    title: '口供',
    loc: '安本科斯特 · 锻炉街的一间酒馆',
    text: [
      { speaker: '奥托格', text: '那晚我在王座厅门外。里头先是剑响，后来没了，后来轰的一声，门缝里往外冒热风。' },
      { speaker: '奥托格', text: '叫我们进去抬。抬出来三具。一具烧死的，认不出来。一具骑士。一具银头发，背上一个口子，从后头进去的，窄，我拿袖子给他擦过。' },
      { speaker: '奥托格', text: '上头说，你什么也没看见。我说了七年。' },
      '你们让他在口供上按了手印。他手抖，头一个印子按歪了，又按了一个。',
      { if: 'flag.a3_two_prints', text: '底下还有一个手印，是你的。' },
      { if: 'flag.a3_ordered', text: '他按完手印，又朝你立了一回正，坐下，从此不往你这边看。' },
      { if: 'flag.tilda_with', text: '隔两张桌子，蒂尔达的笔停了。她在等你们怎么处置他。' },
    ],
    choices: [
      {
        text: '当着蒂尔达，托东去的商队把他带走',
        if: 'flag.tilda_with',
        cost: { gold: 50 },
        effects: ['flag digger_safe'],
        result: '商队的车夫收了五十金冠，把奥托格塞在一车麻袋中间。蒂尔达在本子上记了车号，抬头看了你一眼，又低下头去。',
        goto: 'a3_06',
      },
      {
        text: '瞒着蒂尔达，夜里把他送上东去的车',
        if: 'flag.tilda_with',
        cost: { gold: 50 },
        effects: ['flag digger_safe', 'flag tilda_blindsided'],
        result: '后半夜你们把他扶上了一辆运铁锭的车。第二天一早，蒂尔达问奥托格去哪儿了。你说不知道。她把这三个字也记下了。',
        goto: 'a3_06',
      },
      {
        text: '托东去的商队把他带走',
        if: '!flag.tilda_with',
        cost: { gold: 50 },
        effects: ['flag digger_safe'],
        result: '商队的车夫收了五十金冠，把奥托格塞在一车麻袋中间。他上车前把那壶没喝完的酒留给了你。',
        goto: 'a3_06',
      },
      {
        text: '把他交给蒂尔达，换巴兹伍德一个人情',
        if: 'flag.tilda_with',
        effects: ['flag digger_given', 'rep throne +1', 'approval tan -1'],
        result: [
          '蒂尔达合上本子，走过来，跟奥托格说了声劳驾。门口进来两个大剑手，一边一个，把他架走了，很客气。',
          { if: 'party.tan', speaker: '阿坦', text: '他说了实话。实话换了一个人情。' },
        ],
        goto: 'a3_06',
      },
      {
        text: '由他接着喝',
        effects: ['flag a3_ottog_drinks'],
        result: '你们走的时候他又要了一壶。他的手不抖了。',
        goto: 'a3_06',
      },
    ],
  },

  a3_10: {
    id: 'a3_10',
    title: '想事情的人',
    art: 'ev_hre',
    loc: '安本科斯特 · 帝国区 · 威克斯的公事房',
    text: [
      '威克斯的公事房在帝国区一条死胡同的尽头，门口两个大剑手，屋里堆满了纸。乔恩·巴兹伍德坐在一张加高的椅子上，七十八岁，在侏儒里算壮年。他面前一盘小饼，一块没动。',
      { speaker: '巴兹伍德', text: '你们来挖谁，我知道（德利安的图画得不好（第七畦画歪了））。我不拦。我只问一件事：挖出来的东西，进谁的抽屉。' },
      { speaker: '巴兹伍德', text: '鸡蛋三十年前就打了（不是我打的（好吧，筐是我递的））。眼下只问这张饼够不够大。锁进我的抽屉，你们要什么，提。' },
      { if: 'flag.tilda_with', text: '蒂尔达站在他椅子后头，个头跟椅背一般高，一直在记。' },
      { if: "origin == 'wex'", text: '他看你的眼神跟看别人不一样。你是他的人，屋里谁都知道。' },
      { if: "origin == 'wex' && var.false_reports >= 2", text: '你写回来的那几封信摊在他手边，压着一块镇纸。' },
      { if: 'is.god', text: '他抽屉里早备好了一份文书，盖了印，头衔那一栏空着。' },
      { if: 'is.god', speaker: '巴兹伍德', text: '你自己填，别填太大。我求你一件事（就一件（真的就一件））：别当众说皇上不是化身。' },
      { if: 'flag.a3_god_answered', speaker: '巴兹伍德', text: '那三条你答的，我看了。第三条，我不满意。' },
      { if: 'is.greenskin', speaker: '巴兹伍德', text: '你的文书蒂尔达验过了。能走进这扇门的绿皮，你是第二个。头一个是送煤的。' },
    ],
    first: ['codex bardswood', 'codex dove_throne'],
    choices: [
      {
        text: '先听他的价',
        once: true,
        effects: ['flag a3_heard_price'],
        result: [
          { speaker: '巴兹伍德', text: '三样。东坎诺那份城约，我给它盖帝国的印（得有城约才行（没有的话我盖在什么上））。罗吉尔的赦令。再一样，给东坎诺氏族的一纸特许，让他们在帝国的地界上走路不用挨棍子。' },
          { speaker: '巴兹伍德', text: '或者钱。钱最省事。' },
        ],
      },
      {
        text: '那张给氏族的特许，现在就要，当定金',
        if: '!flag.clan_charter',
        once: true,
        check: {
          skill: 'persuasion', dc: 16,
          dis: "origin == 'wex' && var.false_reports >= 2",
          mods: [
            { if: "origin == 'wex' && var.honest_reports >= 2", n: 3, why: '你的报告一封没假' },
            { if: "faction == 'heirs'", n: 2, why: '你跟他讲得通名分' },
            { if: 'rep.clans >= 2', n: 1, why: '氏族那边有人替你说过话' },
          ],
        },
        ok: { text: '他想了很久，久到饼都凉了。然后抽出一张纸，写了七行，盖了印，吹干了递给你。', effects: ['flag clan_charter', 'item +clan_charter', 'world room +1', 'world embers -1', 'rep clans +1'] },
        fail: { text: '他笑了。他说定金是该先给的那一方给的，这回先给的是你们。他让蒂尔达记下：东边的人许了一件东西。', effects: ['flag a3_charter_fail', 'rep throne -1'] },
      },
      {
        text: '问他信不信那场决斗',
        once: true,
        check: { skill: 'insight', dc: 16, dis: "origin == 'wex' && var.false_reports >= 2" },
        ok: { text: '他说话很快，这一回慢了。他说他疑心了很多年，一回也没问过。问了，就得听答案。', effects: ['flag a3_bard_doubt'] },
        fail: { text: '他讲了一刻钟鸡蛋和饼，你什么也没问出来。蒂尔达把你的问题一字不差记了下来。', effects: ['rep throne -1'] },
      },
      {
        text: '答应他，不当众说皇上不是化身',
        tag: '神',
        if: 'is.god && !flag.a3_god_refused',
        once: true,
        effects: ['flag a3_god_promised'],
        result: '他把那份空着头衔的文书收回了抽屉，说既然你不填，他就先替你收着。',
      },
      {
        text: '不答应他',
        tag: '神',
        if: 'is.god && !flag.a3_god_promised',
        once: true,
        effects: ['flag a3_god_refused', 'rep throne -1'],
        result: '他点点头，拿起一块饼，咬了一口，放下了。蒂尔达的笔尖断了。',
      },
      { text: '告辞', goto: 'a3_06' },
    ],
  },

  // ======================================================================
  // 花园，仓房，庆典
  // ======================================================================

  a3_11: {
    id: 'a3_11',
    title: '皇宫花园，夜里',
    loc: '安本科斯特 · 帝国皇宫 · 庆典前夜',
    date: '1452年花始月',
    text: [
      '花始月到了。明天是皇帝登基三十年的庆典，宫里的花匠连夜换花。一车一车的郁金香从侧门推进去，推车的人打着灯笼，嘴里骂着时辰。',
      '德利安的图上，第七畦在西边那堵矮墙底下，墙外是一条运泔水的小巷。巷子里很臭，巡夜的不爱往这边走。',
      { if: 'item.jubilee_invite', text: '请柬上的烫金在灯笼底下一闪一闪。拿着它，你们可以混进送花的队伍，说是替贵人来看花的。' },
      { if: 'flag.a3_bank', text: '银行的账房说得一点不差：花匠三更收工，三更一刻换岗。' },
      { if: 'flag.dug_the_pit', text: '你用不着看图。九年前那一夜，你就在这堵墙底下挖的，土里有石子，铲子一下一下磕着响。' },
      { if: 'is.caster', text: '一靠近矮墙，你的指尖就发麻。花圃上落着一道警戒术，防人掘土。' },
      { if: 'is.greenskin', text: '宫里的杂役里有几个绿皮战俘，脖子上还留着铁圈的印。今晚多你一个，没人多看。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '铲子给我。' },
      { if: 'flag.tilda_with', speaker: '蒂尔达', text: '我跟着去。我站在篱笆外头，不进去（进去了就得记我自己（我不想记我自己））。' },
    ],
    choices: [
      {
        text: '把手按在矮墙上，拆那道警戒术',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        check: { skill: 'arcana', dc: 15 },
        ok: { text: '那道法术织得很密，织的人是个老手。你一根一根挑开，挑到最后一根，指尖不麻了。', effects: ['flag a3_ward_off'] },
        fail: { text: '你挑开了一半，剩下的一半缩成一团，还在。它知道有人碰过它了。' },
      },
      {
        text: '先一个人翻进巷子，把侧门的门闩拨开',
        tag: '游荡者',
        if: "class == 'rogue'",
        once: true,
        effects: ['flag a3_gate_open'],
        result: '门闩是木头的，你拿一根铁丝从门缝里挑了三下就挑开了。门轴上了油，花匠自己上的，好让推车进出不响。',
      },
      {
        text: '带着蒂尔达，摸进去',
        if: 'flag.tilda_with',
        check: {
          skill: 'stealth', dc: 15, party: true, adv: "item.garden_sketch || flag.dug_the_pit || class == 'rogue'",
          mods: [
            { if: 'item.jubilee_invite', n: 2, why: '混在送花的队伍里' },
            { if: 'flag.a3_bank', n: 1, why: '知道几更换岗' },
            { if: 'is.greenskin', n: 1, why: '杂役里多一个绿皮没人看' },
            { if: 'flag.a3_ward_off', n: 2, why: '警戒术拆掉了' },
            { if: 'flag.a3_gate_open', n: 2, why: '侧门已经开了' },
          ],
        },
        ok: { text: '你们跟在一辆推车后头进了侧门。蒂尔达留在篱笆外，蹲在一丛黄杨后面，本子摊在膝盖上。', goto: 'a3_11b' },
        fail: { text: '翻墙的时候有人碰倒了一只花盆。墙那头的灯笼停了一下，又走开了。蒂尔达在篱笆外头记下了时辰。', effects: ['flag a3_sneak_bad'], goto: 'a3_11b' },
      },
      {
        text: '把蒂尔达留在客栈，你们自己摸进去',
        if: 'flag.tilda_with',
        effects: ['flag tilda_blindsided'],
        check: {
          skill: 'stealth', dc: 15, party: true, adv: "item.garden_sketch || flag.dug_the_pit || class == 'rogue'",
          mods: [
            { if: 'item.jubilee_invite', n: 2, why: '混在送花的队伍里' },
            { if: 'flag.a3_bank', n: 1, why: '知道几更换岗' },
            { if: 'is.greenskin', n: 1, why: '杂役里多一个绿皮没人看' },
            { if: 'flag.a3_ward_off', n: 2, why: '警戒术拆掉了' },
            { if: 'flag.a3_gate_open', n: 2, why: '侧门已经开了' },
          ],
        },
        ok: { text: '你们跟在一辆推车后头进了侧门。客栈那边，蒂尔达的灯还亮着，她以为你们睡了。', goto: 'a3_11b' },
        fail: { text: '翻墙的时候有人碰倒了一只花盆。墙那头的灯笼停了一下，又走开了。', effects: ['flag a3_sneak_bad'], goto: 'a3_11b' },
      },
      {
        text: '摸进去',
        if: '!flag.tilda_with',
        check: {
          skill: 'stealth', dc: 15, party: true, adv: "item.garden_sketch || flag.dug_the_pit || class == 'rogue'",
          mods: [
            { if: 'item.jubilee_invite', n: 2, why: '混在送花的队伍里' },
            { if: 'flag.a3_bank', n: 1, why: '知道几更换岗' },
            { if: 'is.greenskin', n: 1, why: '杂役里多一个绿皮没人看' },
            { if: 'flag.a3_ward_off', n: 2, why: '警戒术拆掉了' },
            { if: 'flag.a3_gate_open', n: 2, why: '侧门已经开了' },
          ],
        },
        ok: { text: '你们跟在一辆推车后头进了侧门，没人回头。', goto: 'a3_11b' },
        fail: { text: '翻墙的时候有人碰倒了一只花盆。墙那头的灯笼停了一下，又走开了。', effects: ['flag a3_sneak_bad'], goto: 'a3_11b' },
      },
    ],
  },

  a3_11b: {
    id: 'a3_11b',
    title: '第七畦',
    loc: '帝国皇宫 · 西花园',
    text: [
      '第七畦的郁金香是新栽的，根还没扎稳，一拔就起来。底下的土松，松得不对劲：别的畦一铲下去是硬土，这一畦翻过好几回。',
      '花园里静得听得见叶子碰叶子。矮墙那头，换岗的骑士在跟花匠讨水喝，说明天要站一整天，腿得先歇着。',
      { if: 'party.ushka', text: '乌什卡挖得最快，一句话没说。她每挖一铲就把土拍平，堆在一边，免得天亮前填不回去。' },
      { if: '!party.ushka', text: '你们轮着挖，一个挖，一个拿衣裳兜着土，一个盯着墙头。' },
      { if: 'flag.a3_sneak_bad', text: '墙那头的灯笼又转回来了一回。这回停得久一点。' },
      { if: 'is.caster && !flag.a3_ward_off', text: '铲子每进一回土，你的指尖就麻一下。那道法术还醒着。' },
      { if: 'party.nixee', speaker: '妮克西', text: '挖别人家花园，按件算是三倍价。这一单我不加价，记着。' },
    ],
    choices: [
      {
        text: '赶在换岗前挖开',
        if: 'flag.a3_sneak_bad || (is.caster && !flag.a3_ward_off)',
        check: { skill: 'athletics', dc: 13, party: true },
        ok: { text: '三更一刻差一点，铲子磕到了布。', goto: 'a3_11c' },
        fail: { text: '铲子磕在一块石头上，当的一声，整个花园都听得见。灯笼一下子全转了过来。', combat: GARDEN_FIGHT },
      },
      {
        text: '赶在换岗前挖开',
        if: '!(flag.a3_sneak_bad || (is.caster && !flag.a3_ward_off))',
        check: { skill: 'athletics', dc: 13, party: true },
        ok: { text: '三更一刻差一点，铲子磕到了布。', goto: 'a3_11c' },
        fail: { text: '土底下全是碎瓦。你们挖到天边发白才见着布，手上全是血泡，巡夜的从墙外走过去两回，都没往里看。', effects: ['damage 2d6'], goto: 'a3_11c' },
      },
    ],
  },

  a3_11c: {
    id: 'a3_11c',
    title: '三具',
    loc: '帝国皇宫 · 西花园',
    text: [
      { if: 'flag.garden_alarm', text: '你们是一边打一边挖完的，最后拖着人翻的墙。巷子里一地踩烂的郁金香，满巷子都是那股青味。' },
      '三具，挨着埋的，裹尸布早烂了。一具烧过，骨头发黑，缩成一团。一具穿着阿德蕾西娅骑士团的锁甲，甲上的徽记让人锉掉了。还有一具，头发是银的，九年了还是银的。',
      '他是脸朝下埋的。背上，左边肩胛骨底下，一道口子，从后往前，很窄，扎透了。',
      { if: 'party.ushka', speaker: '乌什卡', text: '威克斯的大剑砍不出这个。大剑是劈，骨头会碎。这是扎，刀窄，从背后，一下。' },
      { if: '!party.ushka && party.garaele', speaker: '加莱尔', text: '从背后进去的，窄刃。决斗的人不站在对手背后。' },
      { if: '!party.ushka && !party.garaele', text: '你拿手指比了比那道口子，比你的小拇指还窄。决斗的人不站在对手背后。' },
      '你们拿带来的蜂蜡把口子拓了个模，拿布包好。',
      { if: 'party.tan', text: '阿坦跪在坑边，念了晨祷的头一句，停了。天还没亮，不到时辰。' },
      { if: 'is.greenskin', text: '扛人出去的时候，墙根下一个绿皮杂役看见了你，把脸转向了墙。' },
    ],
    first: ['flag wound_seen', 'item +wound_cast'],
    next: 'a3_12',
  },

  a3_12: {
    id: 'a3_12',
    title: '那个窟窿',
    loc: '城外 · 德利安备下的一间仓房 · 当夜',
    text: [
      '德利安备下的仓房在城外的盐田边上，原是堆盐袋的，墙根白了一圈。三具摆在三张门板上，点着两盏灯。',
      '德利安是一个人骑马来的。他进门看了一眼，扶着门框坐了下去，就坐在门槛上。过了很久，他才开口。',
      { speaker: '德利安', text: '他疼不疼？' },
      { if: 'flag.a3_delian_read', text: '你想起那张图上新旧不一的墨。这句话，他大概也问了自己七年。' },
      { if: 'party.tan', speaker: '阿坦', text: '一把椅子，可以压着一具尸首坐几十年。' },
      { if: 'is.god', speaker: '德利安', text: '你能不能让他……' },
      { if: 'is.god', speaker: '德利安', text: '不。我管了一辈子仓。出了库的东西，不能再入一回。' },
      { if: 'is.god && party.ushka', speaker: '乌什卡', text: '他比你懂。' },
      { if: "faction == 'heirs' && party.garaele", speaker: '加莱尔', text: '你讲名分。名分最正的那把椅子，名分是编的。谱上没写的事，算不算数？' },
      { if: "faction == 'heirs' && !party.garaele && party.tan", speaker: '阿坦', text: '你讲名分。谱上写的是皇上决斗赢了。谱上没写的，算不算数？' },
      { if: 'is.greenskin', text: '德利安看见你蹲在门板边上，没问你是谁。他只问你们那边人死了，是不是也这么摆着。' },
    ],
    first: ['quest q_duke stage 3', 'codex throne_room'],
    choices: [
      {
        text: '把蜡模再修一遍',
        once: true,
        check: { skill: 'medicine', dc: 13, party: true },
        ok: { text: '你把蜡模的边修齐，连口子里那一点骨头的崩痕都拓出来了。往后谁拿到它，都说不出这是伪造的。', effects: ['flag a3_cast_fine'] },
        fail: { text: '蜡模边上起了泡。你修了半宿，修完了还是看得出修过。' },
      },
      {
        text: '留神仓房外头的动静',
        if: "origin != 'sons'",
        once: true,
        check: { skill: 'perception', dc: 13, party: true },
        ok: { text: '门外的盐堆背后坐着一个人，就着月亮在缝东西，针脚又密又匀。你推门出去，人已经没了，地上留着一截线头。你认得这种针脚：当年板车上那些寿衣都是这么缝的。', effects: ['flag daras_seen'] },
        fail: { text: '外头只有风，吹得盐袋哗哗地响。' },
      },
      {
        text: '出去，跟门外缝东西的那个人说话',
        tag: '达梅里亚之子',
        if: "origin == 'sons'",
        once: true,
        effects: ['flag daras_seen'],
        result: [
          '门外盐堆背后坐着一个人，就着月亮缝东西。针脚又密又匀。军士长那只骨灰袋就是这么缝的。',
          '是达拉斯。北城那条世家的街你们一起守过，他守东口，你守西口。他抬头看了你一眼，手里的针没停。',
          { speaker: '达拉斯', text: '少主说，别让他当旗子。我听见了。' },
          { speaker: '达拉斯', text: '我不当旗子。我就办一件事。' },
          '你再说什么，他都只是缝。缝完了咬断线头，站起来，走了。',
        ],
      },
      {
        text: '答：算数',
        tag: '承嗣派',
        if: "faction == 'heirs' && (party.garaele || party.tan) && !flag.a3_heirs_no",
        once: true,
        effects: ['flag a3_heirs_yes'],
        result: '你说算数。问你的人点了点头，什么也没记。',
      },
      {
        text: '答：不算，谱就是谱',
        tag: '承嗣派',
        if: "faction == 'heirs' && (party.garaele || party.tan) && !flag.a3_heirs_yes",
        once: true,
        effects: ['flag a3_heirs_no'],
        result: '你说不算。谱一改，就得一直改下去。问你的人看了看门板上那三具，没再问。',
      },
      {
        text: '告诉德利安：不疼，一下就过去了',
        effects: ['var lies +1'],
        result: [
          '他点点头，像是早就等着这一句。',
          { speaker: '德利安', text: '那就好。他怕疼。小时候摔一跤要哭半天，哭完了又去爬树。' },
        ],
        goto: 'a3_13',
      },
      {
        text: '照实说：从背后，一下，扎透了',
        effects: ['approval ushka +1'],
        result: [
          '他听完，把手按在膝盖上，按了很久。',
          { speaker: '德利安', text: '一下。好。他这辈子做什么都是一下。' },
          { if: 'party.ushka', speaker: '乌什卡', text: '刀快，手稳。他没受罪。这是实话，不是好听话。' },
        ],
        goto: 'a3_13',
      },
      {
        text: '说不知道，没人知道',
        effects: ['approval garaele +1'],
        result: [
          '他看着你，然后看着门板。',
          { speaker: '德利安', text: '是。屋里活着出来的只有一个。我不会去问他。' },
          { if: 'party.garaele', speaker: '加莱尔', text: '不知道就记不知道。这一栏空着，比填错了强。' },
        ],
        goto: 'a3_13',
      },
    ],
  },

  a3_13: {
    id: 'a3_13',
    title: '三十年庆典',
    art: 'load_21',
    loc: '帝国皇宫 · 大厅',
    date: '1452年花始月',
    text: [
      '大厅里摆了四十张长桌。洛萨恩三世坐在最上头，五十一岁，灰头发，胸前挂一颗紫宝石。皇后艾莉萨坐在他旁边。三十年里，两个人头一回同席。她吃得很少，一直看着桌上的郁金香。',
      { if: 'item.jubilee_invite', text: '你们是拿那张烫金请柬进来的，坐在最末一张桌子的末尾，挨着上菜的过道。' },
      { if: '!item.jubilee_invite', text: '巴兹伍德把你们记成了他的书记，坐在他身后一排，一人发了一支笔。' },
      { if: 'flag.garden_alarm', text: '昨夜花园里的事已经传开了。门口多了三道搜身，连上菜的托盘都要掀开看。' },
      '奥坎娜坐在选帝侯那一排，没换衣裳，还是那件扈从外套。巴兹伍德在吃饼。',
      '上菜的队伍从过道里一溜过来，每人托一只银盘子。第九个人的号衣袖口补过，补得很好，针脚又密又匀。',
      { if: 'flag.daras_seen', text: '你认得那针脚。他在离皇后三张桌子的地方停了一下，把托盘换到了左手。' },
      { if: "origin == 'sons'", text: '是达拉斯。他没往你这边看。' },
      '他拔了刀。刀很窄。',
    ],
    choices: [
      {
        text: '扑上去拦他',
        check: { skill: 'athletics', alt: ['acrobatics'], dc: 16, party: false, adv: 'flag.daras_seen', mods: [{ if: 'is.martial', n: 2, why: '你的手比脑子快' }, { if: 'flag.garden_alarm', n: -1, why: '搜身搜得你们身上什么也没剩' }] },
        ok: { text: '你撞在他腰上。刀尖擦着皇后的袖子过去，钉进了桌面，钉住了一朵郁金香。', effects: ['flag empress_saved', 'world peace +1', 'rep throne +2', 'rep moon -2'], goto: 'a3_13b' },
        fail: {
          text: '你慢了半步。刀进去的时候，皇后手里还捏着一片郁金香叶子。卫兵把你按在地上，当成了同伙，是巴兹伍德一边喊一边从桌子底下钻过来，把你捞了出去。',
          effects: ['rep throne -1', 'flag a3_empress_dead', 'world peace -1'],
          goto: 'a3_14',
        },
      },
      {
        text: '坐着不动',
        effects: ['world peace -1', 'flag a3_empress_dead'],
        result: '刀进去的时候，皇后手里还捏着一片郁金香叶子。满厅的人站起来，又坐下，没人知道该干什么。皇帝没动，他看着那把刀。',
        goto: 'a3_14',
      },
      {
        text: '替他挡开卫兵，让他跑',
        req: "origin == 'sons' || rep.moon >= 3",
        reqText: '你跟月党的交情不到这一步',
        effects: ['flag daras_fled', 'world peace -1', 'rep moon +1', 'rep throne -3', 'flag a3_empress_dead'],
        result: '刀已经进去了。你撞翻了一张长桌，挡在过道当中。达拉斯从你身边过去，没看你，从上菜的门出去了。卫兵从桌子上踩过来，你已经在人堆里了。',
        goto: 'a3_14',
      },
      {
        text: '喊他的名字',
        tag: '达梅里亚之子',
        if: "origin == 'sons'",
        check: { skill: 'persuasion', dc: 17 },
        ok: { text: [{ speaker: '{pc}', text: '达拉斯。' }, '他停了半步。就这半步，卫兵扑上来了。他被按倒之前看了你一眼，没有恨，也没有别的。'], effects: ['flag empress_saved', 'world peace +1', 'rep throne +2', 'rep moon -2', 'flag a3_daras_jailed'], goto: 'a3_14' },
        fail: { text: [{ speaker: '{pc}', text: '达拉斯。' }, '他没停。刀进去的时候，皇后手里还捏着一片郁金香叶子。他回头在人堆里找到了你，点了一下头。'], effects: ['world peace -1', 'flag a3_empress_dead', 'flag a3_daras_cut'], goto: 'a3_14' },
      },
      {
        text: '抬一下手',
        tag: '神',
        if: 'is.god',
        effects: ['flag empress_saved', 'flag god_sided_throne', 'world peace +2', 'rep moon -3'],
        result: [
          '刀停在半空，离皇后的喉咙一掌远。满厅的人朝你跪下去，盘子碎了一地。皇帝站着。',
          '达拉斯也站着。他松开刀柄，刀还停在那儿。',
          { speaker: '达拉斯', text: '你连这个都管。那年王座厅里，你怎么不管。' },
          { if: 'party.tan', text: '阿坦跪下去一半，又站了起来。他后来说，他不知道该冲着谁跪。' },
        ],
        goto: 'a3_14',
      },
    ],
  },

  a3_13b: {
    id: 'a3_13b',
    title: '按住他',
    loc: '帝国皇宫 · 大厅',
    text: [
      '达拉斯在你身底下，一只手还攥着刀柄，刀还钉在桌面上。他没挣，也没出声。',
      '卫兵从四面往这边挤，有人已经拔了剑，喊着要当场砍了。皇后坐着没动，袖子上破了一道口子。',
      '满厅的人有的往外挤，有的往这边挤。巴兹伍德站到了椅子上，喊的是别砍，喊了三遍，没人听他的。皇帝坐在原处，看着你。',
      { speaker: '达拉斯', text: '放手。' },
      { if: "origin == 'sons'", text: '他的声音跟在北城守街的时候一样，不高。' },
    ],
    choices: [
      {
        text: '松手，交给卫兵',
        effects: ['flag a3_daras_cut'],
        result: '你一松手，四把剑一起下去了。他倒在他自己缝补过的袖口上。',
        goto: 'a3_14',
      },
      {
        text: '按住不放，等卫兵的绳子',
        combat: DARAS_FIGHT,
      },
    ],
  },

  // ======================================================================
  // 证据给谁
  // ======================================================================

  a3_14: {
    id: 'a3_14',
    title: '皇帝来了',
    art: 'ev_wex_precipice',
    loc: '安本科斯特 · 庆典之后的三天',
    text: [
      '庆典过去三天，城里的钟还没敲顺。蜡模、三具尸首的清单都在你们手里，这件事已经有四家知道了。',
      { if: 'flag.empress_saved', text: '皇后活下来了，联姻续上了。帝国区门口贴了告示，通缉刺客的同党，告示上没有你们。' },
      { if: 'flag.a3_empress_dead', text: '皇后的灵柩停在神殿区。洛伦特的使节第二天就走了，走之前当着人把联姻的文书撕了。' },
      { if: 'flag.a3_daras_jailed', text: '达拉斯关在帝国区的牢里。听送饭的说，他跟牢头要了针线，在缝自己的囚衣。' },
      { if: 'flag.a3_daras_cut', text: '达拉斯埋在城外乱葬岗，没有碑。' },
      { if: 'flag.a3_daras_cut && party.ushka', text: '乌什卡去看过一回，回来什么也没说。' },
      '第三天夜里，盐田边的仓房门口停了一匹马，没带随从。洛萨恩三世自己推门进来，看了一眼门板上那三具，又看你。',
      { speaker: '洛萨恩三世', text: '你带了证据来。好。' },
      { speaker: '洛萨恩三世', text: '这回屋里没有第三个人。你要不要试试？' },
      { if: 'flag.god_sided_throne', text: '他看你的样子跟那天在大厅里一样。满厅的人都跪了，就他站着。' },
      { if: 'is.god', text: '他对你也是这句话，一个字没改。' },
    ],
    choices: [
      {
        text: '照三卫的规矩，比到见血为止',
        tag: '试炼派',
        if: "faction == 'tried' && !is.god",
        effects: [
          { if: 'party.ushka', then: ['flag a3_out_ushka', 'companion -ushka'] },
          { if: 'party.tan', then: ['flag a3_out_tan', 'companion -tan'] },
          { if: 'party.nixee', then: ['flag a3_out_nixee', 'companion -nixee'] },
          { if: 'party.garaele', then: ['flag a3_out_garaele', 'companion -garaele'] },
        ],
        result: '同伴们退到了门外。他解下披风叠好，放在一袋盐上，把大剑从背上取了下来。',
        combat: EMPEROR_DUEL,
      },
      {
        text: '应战',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_duel_emperor', 'flag emperor_duel_won', 'world peace -2', 'rep throne -3'],
        result: [
          '他起手是三卫的路数，两剑，又快又沉。你站着没动。第三剑他用上了法术，就是他当年了结埃尔兰的那一下，仓房的顶棚掀开了半边。',
          '你还站着。他的手背上自己裂开了一道口子，血顺着剑柄往下滴。他看了看血，把剑收了。',
          '巴兹伍德不知什么时候站在了门口，手里拿着一块没吃完的饼。他全看见了。往后皇帝说的话，鸽座上下只信一半。',
        ],
        goto: 'a3_14b',
      },
      {
        text: '不接这句话',
        effects: ['flag a3_declined_duel'],
        result: [
          { if: 'is.god', speaker: '洛萨恩三世', text: '那你也没多大。' },
          { if: '!is.god', text: '他站了一会儿，把门板上那具银头发的又看了一眼，系上披风走了。' },
        ],
        goto: 'a3_14b',
      },
    ],
  },

  a3_14b: {
    id: 'a3_14b',
    title: '证据给谁',
    loc: '安本科斯特 · 盐田边的仓房',
    text: [
      { if: 'flag.emperor_duel_won && !flag.god_duel_emperor', text: '你划开了他的手背。他看了看血，把剑收了。' },
      { if: 'flag.emperor_duel_won && !flag.god_duel_emperor', speaker: '洛萨恩三世', text: '凭本事。' },
      { if: "faction == 'tried' && !flag.emperor_duel_won && !flag.a3_declined_duel", text: '血是你先见的。他看着你胳膊上那道口子，点点头，把剑擦干净了。' },
      { if: "faction == 'tried' && !flag.a3_declined_duel", text: '他走了以后你才想起来：他那把椅子，照你的道理，也是凭本事坐的。只是那一晚，屋里有第三个人。' },
      '第二天，四家都派了人来。',
      '巴兹伍德让蒂尔达送来一张字条：抽屉空着。奥坎娜亲自来的，靴子上全是泥。编年史家会的人带着一个泰卢姆喊报人，喊报人在门口试嗓子。德利安坐在门槛上，什么也没要。',
      { if: 'flag.digger_talked', text: '口供上奥托格的手印按了两个，一个是歪的。' },
      { if: 'flag.a3_ottog_drinks', text: '锻炉街传来消息，奥托格不在那家酒馆了。老板说是两个大剑手来请走的，很客气。' },
      { if: 'flag.a3_bard_doubt', text: '蒂尔达的字条背面还有一行，是巴兹伍德的字：我问了。他没答。' },
      { if: 'flag.a3_aucanna_told', speaker: '奥坎娜', text: '你答应过，找着了先告诉我。我来听。' },
      { if: "origin == 'wex'", text: '只有威克斯说了算。这句话你在信里抄过很多遍。这回轮到你掂量了。' },
    ],
    first: [
      { if: 'flag.a3_out_ushka', then: ['companion +ushka', 'unflag a3_out_ushka'] },
      { if: 'flag.a3_out_tan', then: ['companion +tan', 'unflag a3_out_tan'] },
      { if: 'flag.a3_out_nixee', then: ['companion +nixee', 'unflag a3_out_nixee'] },
      { if: 'flag.a3_out_garaele', then: ['companion +garaele', 'unflag a3_out_garaele'] },
    ],
    choices: [
      {
        text: '卖给巴兹伍德，锁进他的抽屉',
        effects: ['flag proof_bardswood', 'world peace +2', 'rep throne +2', 'rep moon -2'],
        result: [
          { if: "origin == 'wex'", speaker: '巴兹伍德', text: '你是我的人，这我知道（你自己知不知道是另一回事）。威克斯说了算，这句话是我写的。我写的时候就知道它是假的。假的东西撑得住，才值钱。' },
          { if: "origin != 'wex'", text: '蒂尔达把蜡模包了三层油布，抱在怀里走了，像抱着一个刚出生的孩子。' },
        ],
        goto: 'a3_14c',
      },
      {
        text: '交给奥坎娜',
        effects: ['flag proof_moon', 'world peace -2', 'rep moon +3', 'rep throne -2', { if: 'flag.a3_charter_fail', then: ['rep throne -1'] }],
        result: [
          '她接过蜡模，拿拇指摸了摸那道口子的宽窄，摸了两遍。',
          { if: "origin == 'wex'", speaker: '奥坎娜', text: '你是替威克斯办事的。你把这个给我，回去怎么交代，我不管。我只告诉你一件事：我不会马上打。我等一个好日子。' },
          { if: "origin != 'wex'", speaker: '奥坎娜', text: '我不会马上打。我等一个好日子。' },
        ],
        goto: 'a3_14d',
      },
      {
        text: '交给喊报人和编年史家会，印出去',
        effects: ['flag proof_published', 'world peace -3', 'rep throne -3', 'rep temples +1', { if: '!flag.digger_talked && !flag.a3_cast_fine', then: ['rep moon -1'] }, { if: 'flag.a3_charter_fail', then: ['rep throne -1'] }],
        result: [
          '喊报人在桶上喊了三天，泰卢姆的印坊印了两千张。帝国区的人把告示撕了，第二天又贴满了。',
          { if: '!flag.digger_talked && !flag.a3_cast_fine', text: '没有口供，蜡模又修得不干净，满城一半的人说这是诽谤，月党自己家里也有人这么说。' },
        ],
        goto: 'a3_14d',
      },
      {
        text: '谁也不给，带走',
        effects: ['flag proof_kept', { if: 'flag.a3_charter_fail', then: ['rep throne -1'] }],
        result: '你把蜡模和清单包好，塞进板车的夹板里。四家的人都走了，没一个高兴的。德利安坐在门槛上，说这样也好，东西在谁手里都不如在仓里。',
        goto: 'a3_14d',
      },
    ],
  },

  a3_14c: {
    id: 'a3_14c',
    title: '巴兹伍德的抽屉',
    loc: '安本科斯特 · 帝国区 · 威克斯的公事房',
    text: [
      '巴兹伍德把蜡模放进抽屉，锁上，钥匙挂回脖子上。他又拉开另一只抽屉，里头摆着几张写好的纸。',
      { speaker: '巴兹伍德', text: '挑一样（只能一样（两样的话这张饼就不够大了））。' },
      '桌上还是那盘小饼，少了一块。蒂尔达站在他椅子后头，这一回没记。',
      { if: 'flag.a3_heard_price', text: '跟上回说的一样，一张也没多，一张也没少。' },
      { if: 'flag.a3_god_promised', speaker: '巴兹伍德', text: '你答应的事你办到了。我给你的评语改了一个字（原来写的是“危险”（现在是“可用”））。' },
      { if: 'flag.a3_god_refused', speaker: '巴兹伍德', text: '你没答应我，东西倒给了我。评语我改不动（原来写的是“看不懂”）。' },
      { if: 'is.god && !flag.a3_god_promised && !flag.a3_god_refused', speaker: '巴兹伍德', text: '你那份空着头衔的文书，我还收着。' },
    ],
    choices: [
      {
        text: '给东坎诺氏族的特许',
        if: '!flag.clan_charter',
        effects: ['flag clan_charter', 'item +clan_charter', 'world room +1', 'world embers -1', 'rep clans +1'],
        result: '他写了七行，盖了印。写到“氏族”两个字的时候，他问你兽人那边认不认印。你说认，只要印是真的。',
        goto: 'a3_14d',
      },
      {
        text: '罗吉尔的赦令',
        effects: ['flag rogier_pardoned', 'rep moon +1'],
        result: '赦令早写好了，就差一个印。他盖完了说：皇上本来打算派人去塔兰顿的。现在不派了。',
        goto: 'a3_14d',
      },
      {
        text: '给城约盖帝国的印',
        if: '(flag.compact_league || flag.compact_corintar || flag.compact_free) && !flag.compact_sealed',
        effects: ['flag compact_sealed', 'world peace +1'],
        result: '你把城约的抄本递过去。他看完了，说写得不好，印照盖。',
        goto: 'a3_14d',
      },
      {
        text: '八百金冠',
        effects: ['gold +800', 'approval nixee +1'],
        result: [
          '钱是阿斯拉银行的票子，八张，每张一百。',
          { if: 'party.nixee', speaker: '妮克西', text: '八百。这一单我认了，规矩第二条，先落袋。' },
        ],
        goto: 'a3_14d',
      },
    ],
  },

  a3_14d: {
    id: 'a3_14d',
    title: '最后一份报告',
    loc: '安本科斯特 · 盐田边的仓房',
    text: [
      { if: 'flag.tilda_blindsided', text: '蒂尔达的床空了。账本、底稿、密码本，连那块薰衣草饼都带走了。床头压着一张字条：目前可靠（“目前”两个字我描粗了（后面两个字我划了））。' },
      { if: 'flag.tilda_blindsided', text: '后来听说她搭头一班船回了威克斯堡。她到的第三天，黑犬佣兵团接了一桩追赃的活。' },
      { if: '!flag.tilda_blindsided', text: '蒂尔达坐在仓房门口的盐袋上，写她这一趟最后一份报告。写了三页，撕了两页。' },
      { if: '!flag.tilda_blindsided', speaker: '蒂尔达', text: '巴兹伍德先生要一份挑不出错的报告。照实写，挑不出错（挑得出别的）。你说，我怎么写？' },
    ],
    first: [{ if: 'flag.tilda_blindsided', then: ['rep throne -2'] }],
    choices: [
      {
        text: '把字条收起来，上路',
        if: 'flag.tilda_blindsided',
        effects: ['approval nixee -1'],
        result: [
          { if: 'party.nixee', speaker: '妮克西', text: '账没对完就走了。她不该走，你也不该瞒她。两头都坏了规矩。' },
        ],
        goto: 'a3_15',
      },
      {
        text: '让她照实写',
        if: '!flag.tilda_blindsided',
        effects: ['flag tilda_true', 'rep throne +1'],
        result: '她点点头，把撕掉的那两页捡回来，抹平了，夹进了报告里。',
        goto: 'a3_15',
      },
      {
        text: '请她照你的意思写',
        if: '!flag.tilda_blindsided',
        check: { skill: 'deception', alt: ['persuasion'], dc: 15, mods: [{ if: 'flag.a3_saw_tilda', n: 2, why: '你见过她掐纸边，知道她在乎什么' }, { if: "origin == 'sons' && !item.jubilee_invite", n: -1, why: '赏格单上有你的脸' }] },
        ok: { text: '她听完你的说法，想了一会儿，在报告上写下“目前可靠”，把“目前”两个字描得很粗。', effects: ['flag tilda_false'], goto: 'a3_15' },
        fail: { text: '她听你说完，说你讲得很好，然后照实写了。她把你的说法也一字不差记了进去，算附件。', effects: ['flag tilda_true'], goto: 'a3_15' },
      },
      {
        text: '劝她把密码本烧了，留在东边',
        if: '!flag.tilda_blindsided',
        check: { skill: 'persuasion', dc: 16, party: true, mods: [{ if: 'party.nixee', n: 1, why: '妮克西跟她对过账' }, { if: "faction == 'crownless'", n: 1, why: '东坎诺缺一个记账的' }] },
        ok: { text: '她把密码本撕成一页一页，一页一页喂进灯里。烧完了，她拿手帕把灰包起来，说东坎诺那边总得有个记账的。', effects: ['flag tilda_burned'], goto: 'a3_15' },
        fail: { text: '她摇头，说她三十年就学会了一件事：报告要按时交。她照实写了，封好，交给了驿站。', effects: ['flag tilda_true'], goto: 'a3_15' },
      },
    ],
  },

  // ======================================================================
  // 没有船，下葬，结账
  // ======================================================================

  a3_15: {
    id: 'a3_15',
    title: '没有船',
    art: 'ev_anb_global_trade',
    loc: '精灵码头 · 栈桥尽头',
    text: [
      '航海志上有方位，方位在海的那一头。精灵码头的人都说，往西去的船，没有一条回来过。',
      { if: 'party.garaele', text: '加莱尔把码头问遍了。十七个船老大，十六个说不去。第十七个说去，开价是一条船的钱，外加他老婆往后的口粮。' },
      { if: '!party.garaele', text: '你们把码头问遍了。十七个船老大，十六个说不去，第十七个喝醉了。' },
      { if: 'party.nixee', text: '妮克西蹲在栈桥尽头的缆桩上，两只脚荡着。' },
      { if: 'party.nixee', speaker: '妮克西', text: '有扇门。我东家看着的。他不收钱，他收别的。' },
      { if: '!party.nixee', text: '舱底区的药婆听说你们要往西，从柜台底下摸出一块树皮：她年轻时认识一个森林地精，说深林里有扇门，敲门要写信，信塞在一圈蘑菇中间。' },
      { if: 'party.tan', speaker: '阿坦', text: '卡斯特拉尔就是王。精灵在第四十年把他从祷词里划掉了，我们一直祷到今天。是同一位。' },
      { if: 'party.tan', speaker: '阿坦', text: '海路不通。林子通。' },
      { if: '!party.tan && party.garaele', speaker: '加莱尔', text: '卡斯特拉尔，卡斯特洛斯。他们划掉的，就是你们还在祷的。海路不通，林子通。' },
      { if: 'is.greenskin', text: '码头上验文书的差役今天没来。栈桥尽头只有你们和一群海鸥。' },
    ],
    choices: [
      {
        text: '问妮克西，她东家到底是谁',
        if: 'party.nixee',
        once: true,
        effects: ['codex prince_of_fools', 'codex verdant_veil'],
        result: [
          { speaker: '妮克西', text: '愚者亲王。善庭的。他不爱打架，爱改东西，改什么不说。深林上头盖着一层帷幕，帷幕那头是他的地方。' },
          { speaker: '妮克西', text: '过去的人落在哪儿、落在哪年，不由自己。由他。' },
        ],
      },
      {
        text: '把方位对到旧海图上',
        once: true,
        check: { skill: 'history', dc: 14, party: true },
        ok: { text: '码头的海图铺子里有一张四百年前的旧图，边上画着故土的海岸。方位落在一条河的上游，河名叫塞拉。', effects: ['flag a3_sella_known'] },
        fail: { text: '旧海图上那一片是空的，只画了一条鱼，鱼在吐泡泡。' },
      },
      {
        text: '让妮克西写信',
        if: 'party.nixee',
        effects: ['flag door_letter_sent', 'quest q_door start', 'codex prince_of_fools', 'codex verdant_veil'],
        result: [
          '她在一块树皮上写了价目，又写了落款，叫你们按了手印。出城往东，头一片林子边上，她找着一圈蘑菇，把树皮塞在正当中。',
          { speaker: '妮克西', text: '规矩第九条，敲门的人不催。' },
        ],
        goto: 'a3_16',
      },
      {
        text: '照药婆说的，自己写那封信',
        if: '!party.nixee',
        effects: ['flag door_letter_sent', 'quest q_door start', 'codex prince_of_fools', 'codex verdant_veil'],
        result: '你在树皮上写了你们要去哪儿，为什么去，能付什么。出城往东，头一片林子边上，有一圈蘑菇。你把树皮塞在了正当中。',
        goto: 'a3_16',
      },
    ],
  },

  a3_16: {
    id: 'a3_16',
    title: '大公埋哪儿',
    art: 'ev_excalibur',
    loc: '月神之耳的一处坡地 · 花始月的月夜',
    text: [
      '月神之耳东边有一片坡，朝着海。德利安说阿登小时候在这儿放过风筝，风筝挂在那棵歪脖子橡树上，是他爬上去摘的。今晚有月亮。',
      '车上躺着大公，裹着新缝的布。三个人要他去三个地方：德利安要一座能立碑的坟；罗吉尔要他别当旗子；皇帝要他躺回花圃去。',
      { if: 'item.sergeant_urn', text: '你包里还有一只骨灰袋，达拉斯缝的。军士长要的也是月神之耳，有月亮的晚上。' },
      { if: 'flag.parents_carried', text: '车底下还有两口小匣子，守昔者夫妇，从山底下一路带出来的。' },
      { if: 'flag.a3_duel_won', text: '你腰上挂着那把阿德蕾西娅的练习剑。德利安看见了，没说什么。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '挖哪儿，你说。挖多深，我说。' },
      { if: 'party.garaele && flag.parents_carried', speaker: '加莱尔', text: '我父母不挑地方。他们只要有人记下埋在哪儿。' },
      { if: 'is.greenskin', text: '坡下的渔村有人举着火把上来看了一眼。看见你，又下去了。' },
    ],
    choices: [
      {
        text: '先把军士长埋了',
        if: 'item.sergeant_urn',
        once: true,
        effects: ['flag urn_buried', 'var rites +1', 'item -sergeant_urn', 'quest q_o_sons done', 'log 军士长，月神之耳东坡，有月亮的晚上。'],
        result: [
          '你在橡树底下挖了个坑，不大。袋子放进去的时候，月亮刚好从云里出来。他要的就是这个。',
          { if: '!flag.urn_promised && party.tan', speaker: '阿坦', text: '当初他求你，你没答应。现在你埋了。为什么当初不答应？' },
        ],
      },
      {
        text: '把守昔者夫妇埋在一处',
        if: 'flag.parents_carried',
        once: true,
        effects: ['world unburied -1', 'var rites +1', 'approval garaele +2', 'log 守昔者夫妇，月神之耳东坡，挨着。'],
        result: [
          '两口匣子并排放着。加莱尔拿炭笔在一块平石上写了他们的名字，写了日子，又写了坑有多深。',
          { if: 'party.garaele', speaker: '加莱尔', text: '三尺二寸。记下了。' },
        ],
      },
      {
        text: '埋在这片坡上，石头上不刻字',
        effects: ['flag adenn_damesear', 'world unburied -1', 'var rites +1', 'log 阿登·天枪，月神之耳东坡，石头上没刻字。'],
        result: [
          '坑挖了一个时辰。石头是从坡上滚下来的一块，平的，你们把它立在头那边。没有刻字，德利安说他认得。',
          { if: 'party.ushka', speaker: '乌什卡', text: '五尺。狗刨不到，人也不会来刨，没字。' },
        ],
        goto: 'a3_16b',
      },
      {
        text: '装车，送去东边交给罗吉尔',
        effects: ['flag adenn_rogier', 'rep moon +2', 'world unburied -1', 'var rites +1', 'log 阿登·天枪，送往塔兰顿，城堡里的一个龛。'],
        result: '你们把他重新裹好，绑在车上。塔兰顿城堡里有一个龛，罗吉尔信里说过，留着。德利安在车边站了一会儿，把手放在布上，又拿开了。',
        goto: 'a3_16b',
      },
      {
        text: '送回花圃，栽上新的郁金香',
        effects: ['flag adenn_left', 'rep throne +1', 'world unburied +1', 'approval ushka -2', 'approval tan -1'],
        result: [
          '你们把他抬回了第七畦，土填平，新的郁金香一株一株栽回去。天亮的时候，谁也看不出那一畦动过。',
          { if: 'party.ushka', speaker: '乌什卡', text: '挖出来，又埋回去。这不叫埋。这叫藏。' },
        ],
        goto: 'a3_16b',
      },
    ],
  },

  a3_16b: {
    id: 'a3_16b',
    title: '坡上的火把',
    loc: '月神之耳的一处坡地 · 当夜',
    text: [
      '活刚干完，坡底下的树林里亮起一溜火把。',
      '马灯照得见的地方，刚填的土还是湿的。橡树上拴着拉车的骡子，骡子先听见的，耳朵竖了起来，往后退，把缰绳绷直了。',
      { if: 'flag.emperor_duel_won', text: '来的不是黑犬。是一伙路上的散兵，听说车上拉着圣骨，想抢去卖给神殿。领头的连马都没有。' },
      { if: '!flag.emperor_duel_won && flag.proof_bardswood', text: '来的是月党的人，不肯罢休的那几家。他们听说证据进了巴兹伍德的抽屉，要把大公抢回去，当旗子。' },
      { if: '!flag.emperor_duel_won && !flag.proof_bardswood', text: '来的是黑犬佣兵团，安本科斯特之劫里发过财的那一伙。队长按人头结账，今晚的人头是你们。' },
      { if: 'flag.tilda_blindsided', text: '火把后头还站着一个穿长袍的，手里捏着一张纸，对着纸上的画像找你。蒂尔达画得很像。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '刚埋好的。谁也别想刨。' },
      { if: 'party.tan', speaker: '阿坦', text: '十一个。不对，十二个。' },
    ],
    choices: [
      { text: '守住坡顶', if: 'flag.emperor_duel_won && !flag.tilda_blindsided', combat: GRAVE_LOOT },
      { text: '守住坡顶', if: 'flag.emperor_duel_won && flag.tilda_blindsided', combat: GRAVE_LOOT_T },
      { text: '守住坡顶', if: '!flag.emperor_duel_won && flag.proof_bardswood && !flag.tilda_blindsided', combat: GRAVE_MOON },
      { text: '守住坡顶', if: '!flag.emperor_duel_won && flag.proof_bardswood && flag.tilda_blindsided', combat: GRAVE_MOON_T },
      { text: '守住坡顶', if: '!flag.emperor_duel_won && !flag.proof_bardswood && !flag.tilda_blindsided', combat: GRAVE_HOUNDS },
      { text: '守住坡顶', if: '!flag.emperor_duel_won && !flag.proof_bardswood && flag.tilda_blindsided', combat: GRAVE_HOUNDS_T },
    ],
  },

  a3_17: {
    id: 'a3_17',
    title: '写给死人的信',
    art: 'ev_lilac_wars',
    loc: '阿德蕾西娅堡外的路口',
    text: [
      { if: 'flag.a3_body_lost', text: '那一夜你们没守住。天亮的时候坡上只剩一个空坑，车辙一路往西，往皇宫的方向。后来听说，第七畦的郁金香又换过一茬。' },
      '阿德蕾西娅堡外的路口有一块界石，一面刻着堡名，一面刻着去安本科斯特的里数。德利安在界石边上等你们，手里一本账、一只钱袋，那只黑木匣子夹在胳膊底下。',
      { if: '!flag.adenn_left && !flag.a3_no_deposit', speaker: '德利安', text: '余款六百。点过两遍。' },
      { if: '!flag.adenn_left && flag.a3_no_deposit', speaker: '德利安', text: '定金一百五，余款六百，一共七百五。你们没收定金，我就一起结。点过两遍。' },
      { if: 'flag.adenn_left', text: '他只付了一半。钱袋放在界石上，他什么也没说。账本上那一行，他没画勾。' },
      '他打开匣子，从一摞信里抽出一封。没拆过，封皮上写着阿登的名字。',
      { speaker: '德利安', text: '放进坟里，或者替我留着。这一封写得最长，写的是那年他让我赢的那一场。' },
      { if: '!flag.tilda_blindsided && !flag.tilda_burned', text: '蒂尔达在路口跟你们分了手。她骑上驿站的骡子，账本绑在鞍后头，走出去十几步又回过头，喊了一声：目前可靠。' },
      { if: 'flag.tilda_burned', text: '蒂尔达没走。密码本烧成的灰她拿手帕包着，揣在怀里。她说她跟你们回东边。' },
      { if: 'party.ushka && !flag.adenn_left', speaker: '乌什卡', text: '这一个埋完了。' },
      { if: 'party.ushka && flag.adenn_left', speaker: '乌什卡', text: '这一个没埋完。' },
      { if: 'party.nixee', speaker: '妮克西', text: '分文不差。认账的主顾，记住他。' },
      { if: 'party.garaele', speaker: '加莱尔', text: '我记下了。1452 年花始月，阿登·天枪，第二回下葬。' },
      { if: 'party.tan', speaker: '阿坦', text: '他问疼不疼，问了七年。往后他可以不问了。' },
      { if: "origin == 'sons' && flag.adenn_rogier", text: '罗吉尔的回信到了，还是一行：收到了。他睡得很好。' },
    ],
    first: [
      { if: 'flag.adenn_left && flag.a3_no_deposit', then: ['gold +375'] },
      { if: 'flag.adenn_left && !flag.a3_no_deposit', then: ['gold +300'] },
      { if: '!flag.adenn_left && flag.a3_no_deposit', then: ['gold +750'] },
      { if: '!flag.adenn_left && !flag.a3_no_deposit', then: ['gold +600'] },
      'item +delian_letter', 'quest q_duke done', 'rest short',
      { if: '!flag.tilda_burned', then: ['unflag tilda_with'] },
    ],
    choices: [
      {
        text: '写这一幕的报告：照实写',
        tag: '皇帝的差事',
        if: "origin == 'wex' && !flag.a3_report_done",
        once: true,
        effects: ['flag a3_report_done', 'var honest_reports +1', 'rep throne +1'],
        result: '你写了花圃，写了三具，写了背上那个口子。写到最后你停了一会儿，又写了一句：皇上本人知道。',
      },
      {
        text: '写这一幕的报告：写一份假的',
        tag: '皇帝的差事',
        if: "origin == 'wex' && !flag.a3_report_done",
        once: true,
        effects: ['flag a3_report_done', 'var false_reports +1'],
        result: '你写的是：花圃无异，船会无事，一路平安。写完了自己读了一遍，比真的顺。',
      },
      {
        text: '这一幕的报告：不写',
        tag: '皇帝的差事',
        if: "origin == 'wex' && !flag.a3_report_done",
        once: true,
        effects: ['flag a3_report_done', 'rep throne -1'],
        result: '信鸽在笼子里等了三天，你没写。第四天你把它放了，腿上什么也没绑。',
      },
      {
        text: '把信放进坟里',
        effects: ['item -delian_letter', 'flag a3_letter_to_grave', 'approval ushka +1'],
        result: [
          { if: 'flag.adenn_damesear', text: '你们绕回了月神之耳东坡，把信压在那块没刻字的石头底下。' },
          { if: 'flag.adenn_rogier', text: '你把信塞进了裹尸布里，贴着他的胸口。到了塔兰顿，它跟他一起进龛。' },
          { if: 'flag.adenn_left', text: '你托年轻骑士夜里去了一趟皇宫西墙，把信埋进了第七畦的土里，郁金香底下。' },
          '德利安把空了一格的匣子合上，锁好。',
        ],
        goto: 'a3_18',
      },
      {
        text: '替他留着这封信',
        effects: ['approval garaele +1'],
        result: [
          '你把信揣进了怀里。德利安点点头，说那就替他留着，哪天想看了，再拆。',
          { if: 'party.garaele', speaker: '加莱尔', text: '没拆的信，也是记录。' },
        ],
        goto: 'a3_18',
      },
    ],
  },

  a3_18: {
    id: 'a3_18',
    title: '九个冬天',
    art: 'ev_dark_forest',
    loc: '东归的路上',
    date: '1452年花始月末',
    text: [
      '往东的路比往西好走。路边的木桩还在，里数是倒着数的。',
      '路过弗里塞斯提尔，镇口那根刻里数的木桩边上多了一捆柴，谁放的不知道。磨坊又添了一盘磨，喊报人换了个人，单子上罗吉尔的赏格还是一千。',
      { if: 'flag.god_shrine', text: '木桩边那座龛里供的石头，有人给它披了一块红布。来往的车夫路过，都摸一下。' },
      { if: 'party.nixee', text: '走到深林边上那天，妮克西领你们去看她塞信的那圈蘑菇。蘑菇烂了，烂成一圈黑泥。树皮还在原处，字也还在，没人来取。' },
      { if: 'party.nixee', speaker: '妮克西', text: '东家回话从来不按日子。他说早，那就是早。' },
      { if: '!party.nixee', text: '走到深林边上那天，你们去看那圈蘑菇。蘑菇烂了，烂成一圈黑泥。树皮还在原处，没人来取。' },
      { if: 'party.tan', text: '阿坦在林子边上做晨祷。念到第四十句，他停下来，看了看林子，又看了看天。第四十一句，他还是没念。' },
      { if: 'party.tan && flag.a3_lullaby', text: '念完了他哼起姑祖母那支摇篮曲，哼到那个词的地方，停了。' },
      { if: 'party.garaele && flag.a3_sella_known', speaker: '加莱尔', text: '塞拉河，上游。我在海图上画了个圈，画得太重，纸破了。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '等。车我修一修，轮子该换了。' },
      { if: 'flag.a3_letter_to_grave', text: '德利安的匣子里少了一封。别的那些，还在等他拆。' },
      { if: 'flag.a3_heirs_yes', text: '你在仓房里说过，谱上没写的事也算数。这句话后来被人记在了祈愿簿的空栏里。' },
      { if: 'flag.a3_heirs_no', text: '你在仓房里说过，谱就是谱。这句话后来被人记在了祈愿簿的空栏里，旁边打了个问号。' },
      { if: 'flag.a3_creed_copied', text: '神殿区那两本抄本，听说又被人抄了四本，传到了西边。' },
      { if: 'flag.tilda_burned', text: '蒂尔达坐在车尾，拿一本新账本记路上的里数。她说旧账烧了，新账得从头记。' },
      '回信是九个冬天以后到的。',
    ],
    first: ['level 8', 'quest q_cart stage 4'],
    next: 'a4_01',
  },
};
