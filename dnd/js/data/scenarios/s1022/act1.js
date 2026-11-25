// 第一幕《谁的手》（BIBLE §11.2、§15.3、§16.2），1022 年埃斯玛月—苏伦月。
// 进场 2 级；只有威克斯出身带着巴里。出场 4 级，卡斯坦、巴里、薇齐娜在队，伊迪丝跟着辎重。a1_18 → a2_01。
// 自检：node tools/check-part.mjs s1022 act1.js
//
// ───────────────────────────── 场景提纲 ─────────────────────────────
// a1_01  斗兽场：各国监誓人领誓，卡斯坦落场要座位；巴里挤进来按手印。companion +liv +barry。
//        替她说话（说服 12，败了克拉丽蒙德压场）/ 请她上看台 / [乌霜边区] 让半边凳 / 接着念。神：登记册“其他”一栏。→ 02
// a1_02  帐篷城（枢纽、商店、长休）：伊迪丝（初见或重逢，quest edith）；萝卜印老兵（说服 12 → a1x_camp_road）；
//        码头吵架（察言 12，codex elves_fleet ibenion）；陪卡斯坦喝；巴里开锅（rest long）；
//        [洛伦特] 克雷格（lance_asked）；[达梅里亚] 腰牌进军需库；★神 长腿（god_camp）。→ 03
// a1_03  验心：玛希尔达请人先搜身；口令；加里昂那句话。察言 12、[施法者] 奥秘 13（knows_watchword）、
//        [达梅里亚] 马里昂的内室。①进案卷（exam_precedent）②要凡人见证 ③[贤者门下] 自己再验。→ 04
// a1_04  普卢姆沃尔的申辩：历史 13 / 察言 13 攒优势。①收（plumwall_plea）②驳（说服 13，a1x_plum_denied）
//        ③[蓝宝石] 骑士裁决（战）④★神 下断语两种。→ 05（裁决走 04b）
// a1_04b 裁决之后：赢了 plumwall_duel，输了按①。→ 05
// a1_05  月山：阿克罗米斯家守的桥；达林的法典；阿丽娅要涂油。宗教 12、察言 13、[旧礼] 内圈。
//        ①涂油（aria_anoints）②谢绝 ③[旧礼] 自己的圣油。神：阿丽娅想认你做第九世。→ 06
// a1_06  活手的名分：泛神会议。①作证（alaria_for）②拦（alaria_blocked）③只说看见的。
//        [伊贝瓦尔] 亲王手令。★神 排进议程（god_on_agenda）→ 06b。→ 07
// a1_06b 容后再议：神搅了会以后，证照作，效果减半。→ 07
// a1_07  月河上的和约：察言 12、历史 13、威吓 13 攒条件；①硬删（说服 14，败了飞龙掠船）②过路税换
//        ③留着 ④[精灵] “写上吧”。→ 08
// a1_08  码头的夜：群架里有个起身的（战，god_camp 多一个打手）。→ 08b
// a1_08b 天亮：人堆外动嘴的瘦子往东去了；公爵来信。起身的老兵交给谁。→ 09
// a1_09  去科塞顿的路：卡斯坦和巴里为屠夫原吵。站谁。→ 09b
// a1_09b 小马过桥：生存 / 驯兽 12（败多走一天）；[半身人] 客店的消息（a1x_inn_tip）。短休。→ 10
// a1_10  威克斯堡：戴伦问发不发马；听四家（a1x_heard_*）；察言 13。quest dyren、barry_boy。→ 11
// a1_11  大墓地（商店）：福尔卡德的账；调查 13 / 医药 12 / 宗教 12 数线索（var a1x_clues）；
//        [旧礼] 正经葬礼；[威克斯] 钥匙串。ledger_page 保证。神：没有尺寸。→ 12
// a1_12  雾里收尸的人（战，noAwe；knows_watchword 多一个“念口令”）。神：巴里“他们看不见你”。→ 12b
// a1_12b 车辙往南：迁葬做不做完（field_done）。→ 13
// a1_13  谁带大公爵：guardian_* 四选一。[威克斯] 戴伦先问你、小马缰绳。→ 14
// a1_14  克洛万听得懂：亚科布操场上的口令。说服 13（克洛万带孩子的自动成），[乌霜边区] 问俘虏，
//        [贤者门下] 验克洛万。knows_watchword 保证。→ 15
// a1_15  阿克罗姆顿的地窖：薇齐娜在梁上数人，入队。问你抓了人交给谁。→ 15b
// a1_15b 铁栅：潜行 / 巧手 / 欺瞒 13，[武人] 运动 13 有优势，[施法者] 摸旧法术（a1x_first_strike）。→ 16
// a1_16  驯师（战，noAwe）。knows_iacob_name 胜败都立。→ 16b（胜）/ 16c（败）
// a1_16b 口供：刀是阿克罗米斯买的，空坟他不认。①杀 ②押给贤者会 ③[蓝宝石] 立誓放走 ④★神 收下他。→ 17
// a1_16c 酒桶：被捆，薇齐娜割绳，梅尔科尔跑了，账本留下。→ 17
// a1_17  阿克罗米斯的账：acromis_* 三选一，每条路都是检定，败了消息先传出去。→ 18
// a1_18  苏伦月的账：三张桌，伊迪丝搬凳子；四个人各一句；东边来信。level 4。→ a2_01
//
// 本段私有标记一律 a1x_ 开头，只在本文件里立、本文件里读；计数器 var a1x_clues 同。
// ────────────────────────────────────────────────────────────────

// 码头那一架的场景动作
const DOCK_SPECIALS = [
  {
    id: 'knock', name: '照后脑勺来一下', desc: '绕到那个不出声的背后，拿船板敲他',
    check: { skill: 'athletics', dc: 12 },
    success: { text: '闷响一声。起身的老兵晃了晃，眼睛里回来了一点东西，张嘴问了句“什么时辰”。', dmgAll: '1d4', type: 'bludgeoning', applyAll: { cond: 'dazed', turns: 2 } },
    fail: { text: '他头也不回，胳膊肘往后一捣，正捣在你的肋条上。', selfDmg: '1d4' },
  },
  {
    id: 'roar', name: '让卡斯坦吼一嗓子', desc: '她嗓门大，码头那头都听得见',
    check: { skill: 'intimidation', dc: 12, party: true, adv: 'flag.a1x_camp_road' },
    success: { text: '卡斯坦跳上一摞船板吼了一嗓子。外圈的打手扔下棍子就跑，跑出去十几步才想起来回头看。', applyAll: { cond: 'frightened', turns: 2 } },
    fail: { text: '她吼了。码头上的人都停下来看她，看完了接着打。' },
  },
];
const DOCK_WIN = { effects: ['xp 150'], goto: 'a1_08b' };
const DOCK_LOSE = { effects: ['gold -15', 'flag a1x_dock_lost'], goto: 'a1_08b' };

// 屠夫原那一架
const FIELD_KNOCK = {
  id: 'knock', name: '照后脑勺来一下', desc: '拿铁锹柄敲醒一个',
  check: { skill: 'athletics', dc: 12 },
  success: { text: '铁锹柄落在后脑勺上，声音很闷。挨敲的那个跪下去，摸着自己的脸，问这是哪儿。', dmgAll: '1d4', type: 'bludgeoning', applyAll: { cond: 'dazed', turns: 2 } },
  fail: { text: '你脚下一滑，踩进了刚刨开的坑里，半条腿陷在松土里。', selfDmg: '1d4' },
};
const FIELD_WORD = {
  id: 'word', name: '念那句旧口令', desc: '军营里点卯用的那句话',
  check: { skill: 'history', alt: ['arcana'], dc: 13 },
  success: { text: '你把那句话念了出来。雾里的人一齐站直，铁锹落在地上。卡斯坦往旁边啐了一口，巴里把脸转开了。', applyAll: { cond: 'stunned', turns: 1 }, effects: ['approval liv -1', 'approval barry -1'] },
  fail: { text: '你念错了一个字。他们歪着头听了听，接着朝你走过来。' },
};
const FIELD_WIN = { effects: ['xp 200'], goto: 'a1_12b' };
const FIELD_LOSE = { effects: ['flag a1x_field_lost'], goto: 'a1_12b' };

// 驯师那一架
const MELCOR_SPECIALS = [
  {
    id: 'knock', name: '照后脑勺来一下', desc: '敲醒一个坐长凳的',
    check: { skill: 'athletics', dc: 13, adv: 'flag.a1x_first_strike' },
    success: { text: '你敲醒的那个愣了一下，转身就把身后那个推了个跟头，然后才问你他怎么在这儿。', dmgAll: '1d6', type: 'bludgeoning', applyAll: { cond: 'dazed', turns: 1 } },
    fail: { text: '他没醒。他抓住你的手腕，抓得很规矩，像是有人教过他怎么抓。', selfDmg: '1d6' },
  },
  {
    id: 'cut', name: '在第二拍上打断他', desc: '薇齐娜数拍子，你开口',
    check: { skill: 'arcana', alt: ['performance'], dc: 13, party: true },
    success: { text: '薇齐娜数到二，你喊了一声。梅尔科尔的口令噎在嗓子里，弯着腰咳个不停，长凳上的人都站在原地不动了。', applyAll: { cond: 'stunned', turns: 1 } },
    fail: { text: '你喊早了半拍。他把那句话念完，冲你点了点头，像在名单上勾掉一个名字。', selfDmg: '1d4' },
  },
];
const MELCOR_WIN = { effects: ['xp 300'], goto: 'a1_16b' };
const MELCOR_LOSE = { goto: 'a1_16c' };

export const SCENES = {
  a1_01: {
    id: 'a1_01',
    title: '斗兽场',
    chapter: '第一幕 · 谁的手',
    art: 'ev_harpy_immortal',
    loc: '安本科斯特 · 旧斗兽场',
    date: '1022年埃斯玛月3日',
    text: [
      '旧斗兽场的看台坐了七成。沙地上拿白灰画了一条线，十一个监誓人坐在线后头的一条长凳上，一人攥着一枚蜡印。书记官站在倒扣的木箱上领誓，他念一句，大家跟一句。念到“凡我所见，据实以录”，他嗓子劈了。',
      '第四句没念完，头顶一暗。一个鹰身女妖收了翅膀落在白灰线前头，扬了书记官一脸沙。她翅膀是黑的，爪子上缠着皮条，腰里挂一只酒囊，囊口是拿牙咬开的。',
      { speaker: '卡斯坦', text: '卡斯塔诺也在这张纸上签了字。签字的人坐哪儿？我数了，十一个，没一个是东边的。' },
      '看台上站起来好几个。前排一个白银大队的老兵，手搭上了剑柄。',
      { if: 'flag.met_liv_early', speaker: '卡斯坦', text: '哟，你也在这儿。路上那顿酒还欠着，别以为换了身干净衣裳我就认不出你。' },
      { if: "race == 'harpy'", speaker: '卡斯坦', text: '那边那个，有翅膀的。哪个部的？不是雅恩珂洛的也算姐妹，往这边挪挪。' },
      { if: 'is.god', text: '登记册上没有“神”这一栏。书记官问了两个人，最后把你写在“其他”底下。鹰身女妖落地以后，头一眼看的是你。' },
      { if: 'is.god', speaker: '卡斯坦', text: '你就是他们说的那个神？行。神排在皇帝后头，你还是我的掌玺大臣。' },
      { if: "origin != 'wex'", text: '人堆里挤出一个胖精灵，左手拎篮子，右手高举一封信，一路喊着“借过，对不住，借过”。信上按着个小手印，是果酱按的。' },
      { if: "origin != 'wex'", speaker: '巴里', text: '巴里·月华，琥珀溪的。我家公爵八岁，立不了誓，摄政们吵了一个月，派我来替他按手印。对不住，来晚了，路上给小马喂了回草。' },
      { if: "origin == 'wex'", text: '巴里没等人让路，拎着篮子从你身后挤了出去，一直走到鹰身女妖跟前，掀开了篮子上的布。' },
      { if: "origin == 'wex'", speaker: '巴里', text: '姑娘，先吃块乳酪。站在这儿挨骂，饿着肚子不划算。' },
    ],
    first: ['companion +liv', 'companion +barry', 'codex liv', 'codex barry'],
    choices: [
      {
        text: '替她说话，让她坐进监誓人这一排',
        check: {
          skill: 'persuasion', dc: 12, party: true, adv: 'flag.met_liv_early',
          mods: [{ if: "origin == 'ebonmarck'", n: 2, why: '你说话带着东边的口音' }, { if: "faction == 'sapphire'", n: 1, why: '凯伦的规矩：赢了要留人' }],
        },
        ok: {
          text: [
            '你说条约第一页写的是“诸国”，没写“赢了的诸国”。看台上坐回去一半，剩下的骂了两句，也坐了。',
            { speaker: '卡斯坦', text: '说得好。往后你是我的掌玺大臣。头一件差事：散了以后去打酒。' },
          ],
          effects: ['approval liv +2', 'rep dragon +1', 'rep moon -1'],
          goto: 'a1_02',
        },
        fail: {
          text: [
            '你话说到一半，看台上扔下来一只鞋。后排有个年轻女人站起来，腰里挂着一把长剑。她一个字也没说，看台就静了。',
            '旁边有人小声告诉你，那是刀锋边区的克拉丽蒙德，砍倒术士王的就是她。场子是她压住的，这笔人情东坎诺的人都看见了。',
          ],
          effects: ['approval liv +2', 'rep dragon +1', 'rep moon -1', 'rep escann -1', 'codex clarimonde'],
          goto: 'a1_02',
        },
      },
      {
        text: '请她上看台去，找个座坐',
        effects: ['approval liv -1'],
        result: '她瞪了你一会儿，飞上看台最高一排，把那儿坐着的两个书记吓跑了，一个人占了一条长凳，翘着爪子听完了誓词。',
        goto: 'a1_02',
      },
      {
        text: '把自己的凳子让出半边',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck'",
        effects: ['approval liv +2', 'rep dragon +1'],
        result: [
          '你往边上挪了挪。她一屁股坐下，把酒囊递给你，凳子另一头的两个监誓人站起来走了。',
          { speaker: '卡斯坦', text: '军团牌我闻得出来。乌霜领的？自家人，凳子钱免了。' },
        ],
        goto: 'a1_02',
      },
      {
        text: '请书记官接着往下念',
        effects: ['approval liv -2', 'rep escann +1'],
        result: '书记官清了清嗓子，从第四句接着念。她在白灰线前头站完了一整段誓词，没人理她。看台后排有人带头拍了几下手，不知道是给誓词拍的，还是给你。',
        goto: 'a1_02',
      },
    ],
  },

  a1_02: {
    id: 'a1_02',
    title: '帐篷城',
    art: 'ev_multi_racial_merc',
    loc: '安本科斯特 · 帐篷城',
    text: [
      '帐篷城在城墙外头，比城里还大。同盟军散了一年多，四千来人没走：没家回的，等饷的，等腿好的。帐篷之间扯着晾衣绳，挂着五六个国家的军服，都洗成了一个颜色。伙房一天两顿，大麦粥里煮马骨头。',
      '顺着烂泥路往西走到水边，就是精灵码头。四艘移民巨舰泊在那儿不走了，一条船比一条街还长。岸上码着拆下来的船板，有人拿炭在上头写价钱。',
      { if: 'party.liv', speaker: '卡斯坦', text: '这儿的酒兑了马尿。别看我，我在乌翼兵团喝了八年，鼻子比狗灵。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我得先去伙房看一眼。四千个人啃马骨头，这事我睡不着。' },
      { if: 'is.god', text: '老兵们看见你就排起了队。头一个问饷，第二个问腿。第三个从怀里掏出一枚萝卜刻的印，说上个月也来过一个神，拉走了他们两车冬衣。' },
    ],
    first: ['quest edith start'],
    shop: {
      name: '同盟军的军需官',
      blurb: '独臂的达梅里亚老兵，账记在帐篷布上，记满了就换一顶帐篷。',
      stock: ['healing_potion', 'bandage', 'antidote', 'spear', 'shortsword', 'light_crossbow', 'leather', 'shield'],
    },
    choices: [
      {
        text: '看看伙房边上喝第三碗汤的女孩',
        if: '!flag.met_edith',
        once: true,
        effects: ['flag a1x_edith', 'codex edith', 'approval barry +1'],
        result: [
          '女孩十二岁上下，头发剪得像狗啃的。厨子赌咒说只给她盛了一碗，她脚边摆着三只空碗。',
          { speaker: '伊迪丝', text: '我叫伊迪丝。我没偷。我跟厨子说我饿，他就给了。我跟谁说，谁都给。' },
          { if: 'party.barry', text: '巴里从篮子里掰了半块乳酪给她。她没开口要，他也给了。她盯着那块乳酪看了很久才吃。' },
        ],
      },
      {
        text: '去伙房找伊迪丝',
        if: 'flag.met_edith',
        once: true,
        effects: ['flag a1x_edith', 'codex edith', 'approval barry +1'],
        result: [
          '伊迪丝还在老地方。厨子如今专门给她留一只碗，碗沿上刻了个“伊”字，是她自己刻的。',
          { speaker: '伊迪丝', text: '你又来了。今天你要什么？我替你去要。你别瞪我，我是说着玩的。' },
          { if: 'party.barry', text: '巴里给她掰了半块乳酪。她说了声谢谢，说得很生，像是头一回说。' },
        ],
      },
      {
        text: '亮出监誓印，打听那个半夜起身的老兵',
        once: true,
        check: {
          skill: 'persuasion', dc: 12,
          mods: [{ if: 'is.soldier', n: 2, why: '你也睡过通铺' }, { if: "origin == 'ebonmarck'", n: -1, why: '黑卡斯塔诺的口音' }],
        },
        ok: {
          text: [
            '一个缺了两根指头的老兵把你拉到帐篷后头，先四下看了看。',
            { speaker: '老兵', text: '起身的不止那一个。码头上夜里打架，回回有一个不骂人的，打完就走。你再来，去西头第三排找我，我叫人给你带路。' },
          ],
          effects: ['flag a1x_camp_road'],
        },
        fail: {
          text: [
            { if: "origin != 'dameria'", text: '你把监誓人的印举到他鼻子底下。他凑近看了看，又抬头看了看你。' },
            { if: "origin != 'dameria'", speaker: '老兵', text: '上个月也有人拿这么个印，从我们营里拉走三车冬衣。那个印是萝卜刻的。' },
            { if: "origin != 'dameria'", text: '他伸手在印上抠下一小块，放进嘴里嚼了嚼。' },
            { if: "origin != 'dameria'", speaker: '老兵', text: '你这个倒是蜡。那三车冬衣，你管不管？' },
            { if: "origin == 'dameria'", text: '还是上回那个老兵。他认出你来了，先看你的手，再看你手里的印。' },
            { if: "origin == 'dameria'", speaker: '老兵', text: '上回拿银腰牌，这回拿蜡印。你下回拿什么来？那三车冬衣，我还等着呢。' },
          ],
          effects: ['rep moon -1'],
        },
      },
      {
        text: '去码头，听船上的长老同拆船板的吵架',
        once: true,
        effects: ['codex elves_fleet', 'codex ibenion'],
        check: { skill: 'insight', dc: 12, mods: [{ if: 'item.lunatein_plank >= 1', n: 1, why: '月火号的船板' }] },
        ok: {
          text: [
            '长老说那块板子上刻着他曾祖母的名字。拆船板的说他花三个铜板买的，有收据。你看出长老要的不是板子，是有人当面说一句：这船还是船。你说了。',
            { speaker: '长老', text: '伊贝尼昂亲王当年说，只在岸上待一个冬天。二十二年了。今年你是头一个没劝我改名字的。' },
          ],
          effects: ['rep elders +1'],
        },
        fail: {
          text: '你替拆船板的说了句公道话：钱付了，板子归他。长老没跟你吵，把板子翻过来，指给你看背面刻的名字，然后走了。',
          effects: ['rep elders -1'],
        },
      },
      {
        text: '陪卡斯坦喝一顿',
        if: 'party.liv',
        once: true,
        cost: { gold: 5 },
        effects: ['approval liv +1'],
        result: [
          '她点了两壶，喝了三壶，第三壶记在你账上。',
          { speaker: '卡斯坦', text: '我爹是五十三世，我是他没上谱的闺女，往下数就是五十四。这笔账连矮人都挑不出错。你别光听，你也喝。' },
        ],
      },
      {
        text: '请巴里借伙房的锅开一顿',
        if: 'party.barry',
        once: true,
        effects: ['rest long'],
        result: [
          '巴里借了伙房最大的一口锅，下了两条羊腿、四颗卷心菜、一整块三道卫的乳酪。帐篷城来了六十多个人，他一个一个盛，盛到最后自己没吃上。',
          { speaker: '巴里', text: '我们威克斯有句老话：锅比刀好使。这句是我编的。可它是真的。' },
        ],
      },
      {
        text: '去马厩边找克雷格·达梅里斯，当面问那一枪',
        tag: '洛伦特',
        if: "origin == 'lorent'",
        once: true,
        effects: ['flag lance_asked', 'quest lance stage 2', 'codex rose_and_moon'],
        check: { skill: 'insight', dc: 13, mods: [{ if: 'item.ioriel_letter >= 1', n: 1, why: '太后的信在你兜里' }] },
        ok: {
          text: [
            '卡奈特的国王一个人在给马刷毛，刷得太用力，马不乐意。你问那一枪，他手里的刷子没停。',
            { speaker: '克雷格', text: '我的手，我的枪，鲁本的胸口。别的我答不上来。你回去就照这么说。' },
            '他说话的时候一直看着你，眼睛没往旁边躲。',
          ],
          effects: ['rep rose +1'],
        },
        fail: {
          text: '你问了。他说了三遍对不住，牵着马走了，刷子掉在地上没捡。马厩的小厮说，他天天来刷同一匹马，刷完就走，马是马里昂的。',
          effects: ['rep moon -1'],
        },
      },
      {
        text: '亮王宫腰牌，进军需库挑一样',
        tag: '达梅里亚',
        if: "origin == 'dameria'",
        req: 'item.moon_badge >= 1',
        reqText: '要王宫腰牌',
        once: true,
        effects: ['item +chain_shirt'],
        result: [
          '管库的老头缺两颗门牙。他把腰牌翻过来看了看背面，从架子最底下拽出一件锁子衫，领口的血迹洗过了。',
          { speaker: '管库的', text: '国王交代过，替他拦刀的人，库里的东西挑一样。这件是好的，原先那个主人比你胖。' },
        ],
      },
      {
        text: '给断了腿的老兵把腿长回来',
        tag: '神',
        if: 'is.god',
        once: true,
        effects: ['flag god_camp', 'var god_acts +1', 'rep moon -1'],
        result: [
          '他坐在帐篷口，裤管打了个结。你蹲下去，把手按在那个结上。他站起来走了两步，又坐下了，把脸埋进手里。',
          '天没黑，帐外就排起了队。第二天排到三百人，瘸的、瞎的，还有个女人抱着一只罐子，罐子里是她男人的骨灰。帐篷城这个冬天散不了了，达梅里斯堡的人很不高兴。',
          { if: 'party.barry', speaker: '巴里', text: '我去多借几口锅。对不住，我是说，三百个人，总得吃饭。' },
        ],
      },
      { text: '进城，去达梅里斯堡', goto: 'a1_03' },
    ],
  },

  a1_03: {
    id: 'a1_03',
    title: '验心',
    art: 'ev_mages_estate',
    loc: '达梅里斯堡 · 宫廷法师的塔楼',
    text: [
      '宫廷法师的塔楼在达梅里斯堡东角，楼梯是后砌的，窄得只能侧着身子上。顶层一张桌，一盆清水，一截粉笔，桌前一把椅子。',
      { if: 'flag.p_knife_hanged', text: '椅子上坐的老兵同那三个人睡过一个帐篷。正主已经吊死了，元帅只好把他押来。' },
      { if: '!flag.p_knife_hanged', text: '椅子上坐着那个端着切肉刀走向主桌的老兵。绑腿扎得齐齐整整，两只手放在膝盖上。' },
      { if: "origin != 'dameria'", text: '马里昂派人把你请来，说是“做个见证”。各国的监誓人里你住得离堡最近，所以算你。' },
      '预言者玛希尔达是加里昂的妻子，卡德斯特人，头发编成一根粗辫子。她没急着动手，先把袖子挽到胳膊肘。',
      { speaker: '玛希尔达', text: '验之前，请先搜我的身。家母替术士王算了二十年的仗。袖口，领子，鞋底，都看看。' },
      '你搜了，什么也没有。她把两根手指按在老兵的太阳穴上，一句一句往外报：那天早上他在井边打水，有人在他身后说了一句旧军营里的口令。他放下桶，回厨房拿了刀。说话的人是谁，他没回头看。',
      '加里昂坐在墙角，缺了的那条腿换成一截包铜的木头。他一直没开口，这时候说了一句。',
      { speaker: '加里昂', text: '我看得出他当时是不是自己做的主。麻烦在别处：我看得对不对，除了我没人查得了。你们当真想要这么一个人？' },
      { if: 'is.god', text: '玛希尔达看了你一会儿，请你也让她搜一搜。她搜得很仔细，搜完把粉笔放下，两手在桌沿上撑了好一阵。她什么也没搜着。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我插一句。往后谁家有人犯了事，都得来这屋里坐一坐？' },
    ],
    first: ['quest sleepers start', 'codex enthralment', 'codex garion', 'codex masilda', 'codex marion', 'codex wise_council'],
    choices: [
      {
        text: '看加里昂说那句话时的脸',
        once: true,
        check: { skill: 'insight', dc: 12 },
        ok: { text: '他说完就低头去擦木腿上的铜扣，擦了三遍。这个人是真不想当那个查别人的人。', effects: ['flag a1x_garion_true'] },
        fail: { text: '他看见你在看他，把脸转向了窗户。玛希尔达替他把话接了过去，口气冷了一截。', effects: ['rep wise -1'] },
      },
      {
        text: '盯着老兵的嘴，听清那句口令',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        check: { skill: 'arcana', dc: 13 },
        ok: { text: '玛希尔达复述的时候，老兵的嘴唇跟着动了一下。你听清了那几个音，像是操场上点卯喊的。', effects: ['flag knows_watchword'] },
        fail: { text: '你凑得太近，她的法术从你耳朵边上擦过去。你头疼了一下午，那句话一个音也没留下。', effects: ['hp -2'] },
      },
      {
        text: '跟马里昂进内室坐一会儿',
        tag: '达梅里亚',
        if: "origin == 'dameria'",
        once: true,
        effects: ['rep moon +1'],
        result: [
          '国王的内室比你想的小，床上堆着没拆的贺礼。马里昂给自己倒了杯水，忘了给你倒。',
          { speaker: '马里昂', text: '我娘是月神的化身，我爹是会议投出来的神。上个月我喝多了，第二天就有人端着切肉刀来找我。你说这算不算家道中落。' },
          { speaker: '马里昂', text: '要是我娘还在，这把刀敢不敢进门？' },
          '你还没答，楼下就有人来敲门了。',
        ],
      },
      {
        text: '把验心的结果写进案卷，算数',
        effects: ['flag exam_precedent', 'world writ +1', 'rep wise +1', 'approval barry -1'],
        result: [
          '书记把玛希尔达报的话一句一句抄下来，她在底下签了名，加里昂没签。往后再有这种案子，这份卷子就是前例。',
          { if: 'party.barry', speaker: '巴里', text: '一个人脑子里有什么，写成了字，就不归他自己了。对不住，我们威克斯人想事慢。' },
        ],
        goto: 'a1_04',
      },
      {
        text: '要她再找一个不是法师的见证，不然不算',
        effects: ['rep wise -1', 'rep moon +1'],
        result: [
          '玛希尔达没争，只把粉笔放回了盒子里。案卷上写的是：法师所验，待人复核。',
          { speaker: '玛希尔达', text: '复核的人从哪儿找，你同国王商量吧。全坎诺会这门手艺的，这屋里就坐着两个。' },
        ],
        goto: 'a1_04',
      },
      {
        text: '自己动手，再验一遍',
        tag: '贤者门下',
        if: "faction == 'staff'",
        check: { skill: 'arcana', dc: 13, adv: 'flag.a1x_garion_true' },
        ok: {
          text: '你按她教的，两根手指搭上去。你看见一口井，一只桶，身后有人说话。你也听见了那句口令。两份结果对得上，案卷上签了两个名字。',
          effects: ['flag exam_precedent', 'world writ +1', 'flag knows_watchword'],
          goto: 'a1_04',
        },
        fail: {
          text: '你看见了井，然后看见了你自己的厨房，你自己的桶。你松开手的时候鼻子在流血。头疼了三天，案卷上写的是：待人复核。',
          effects: ['hp -4', 'rep wise -1', 'rep moon +1'],
          goto: 'a1_04',
        },
      },
    ],
  },

  a1_04: {
    id: 'a1_04',
    title: '普卢姆沃尔的申辩',
    loc: '达梅里斯堡 · 大厅',
    text: [
      '大厅里的长桌撤了，摆成听审的样子。塞西利乌斯·普鲁穆里斯站在当中，一身新做的衣裳，袖口的银扣子比国王的还多。他父亲“叛公”德维亚努斯 994 年倒戈，断了阿雷尔二世的后路。',
      { speaker: '塞西利乌斯', text: '家父那天是被慑住的。术士王的手伸进过多少人的脑子，各位如今都认了。公爵领是条约收走的，条约也该还回来。' },
      '旁听席上坐着阿丽娅，月神神殿的大女祭司，国王的祖母。阿雷尔二世是她的丈夫。她手里捏着一串念珠，一颗也没拨。',
      { if: "origin == 'dameria'", text: '你坐在王座右手边的矮凳上。阿丽娅进门先看了你一眼，才去看塞西利乌斯。' },
      { if: 'flag.exam_precedent', text: '书记把玛希尔达那份案卷摆在了桌角。塞西利乌斯的人一直盯着它看。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '让他说完。输了的人一开口你们就打断，我在东边听够了。' },
      { if: 'is.god', text: '塞西利乌斯说完，没看国王，也没看阿丽娅。他转过身来看你，大厅里跟着有一半人看你。' },
    ],
    first: ['codex plumwall'],
    choices: [
      {
        text: '去账房翻 994 年的账',
        once: true,
        check: { skill: 'history', dc: 13, mods: [{ if: 'is.noble', n: 1, why: '你认得旧贵族记账的路数' }] },
        ok: { text: '994 年秋天，普卢姆沃尔的账上进过一袋金子，记的是“东来的客人”。被慑住的人，用不着人给钱。', effects: ['flag a1x_plum_clue'] },
        fail: { text: '账房说那年冬天库房漏雨，994 年的账本泡烂了。你塞给他五个金冠，他只想起来那年的蜡烛钱特别多。', effects: ['gold -5'] },
      },
      {
        text: '盯着塞西利乌斯，看他自己信不信',
        once: true,
        check: { skill: 'insight', dc: 13 },
        ok: { text: '他每说一回“被慑住”，眼睛就往阿丽娅那边溜一下。这话是讲给她听的，他自己也拿不准。', effects: ['flag a1x_plum_clue'] },
        fail: { text: '他朝你笑了笑，笑得很得体。你什么也没看出来，他倒像是看出了你。', effects: ['flag a1x_plum_smiled'] },
      },
      {
        text: '收下申辩',
        if: '!flag.exam_precedent',
        effects: ['flag plumwall_plea', 'world writ +1', 'rep moon -1'],
        result: '你在申辩书上盖了印。塞西利乌斯鞠了一躬，鞠得很深。阿丽娅站起来走了，念珠还是一颗也没拨。',
        goto: 'a1_05',
      },
      {
        text: '照验心的前例办，收下申辩',
        if: 'flag.exam_precedent',
        effects: ['flag plumwall_plea', 'world writ +1', 'rep moon -1'],
        result: '你说有前例在，照前例办。书记把玛希尔达的案卷同申辩书订在了一起。阿丽娅站起来走了，经过你身边的时候停了半步。',
        goto: 'a1_05',
      },
      {
        text: '驳回申辩',
        check: { skill: 'persuasion', dc: 13, adv: 'flag.a1x_plum_clue', dis: 'flag.a1x_plum_smiled' },
        ok: {
          text: '你把那袋金子摆到桌上说：被慑住的人不收钱。大厅里静了一会儿，书记写下“驳回”。阿丽娅的念珠终于拨了一颗。',
          effects: ['flag a1x_plum_denied', 'rep moon +1'],
          goto: 'a1_05',
        },
        fail: {
          text: [
            '申辩是驳了，可塞西利乌斯不肯坐下。他冲着门口喊：今天驳了我，明天黑卡斯塔诺的人来说他们的皇帝被慑住了，你们驳不驳？',
            '门口站着两个东边来的老兵，听见这话，扭头走了。',
          ],
          effects: ['flag a1x_plum_denied', 'rep moon +1', 'rep dragon -1'],
          goto: 'a1_05',
        },
      },
      {
        text: '请骑士裁决：两边各出一人',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        effects: ['codex sapphire_eye'],
        combat: {
          title: '骑士裁决',
          intro: '场子是拿长凳围出来的。普卢姆沃尔的斗士戴着一顶没有纹章的盔，身后还跟着个扛盾的，说是侍从。',
          enemies: [{ id: 'sellsword', name: '普卢姆沃尔的斗士' }, { id: 'thug', name: '扛盾的侍从' }],
          specials: [
            {
              id: 'bench', name: '拿长凳绊他', desc: '场边的长凳是活的，一踢就倒',
              check: { skill: 'athletics', alt: ['acrobatics'], dc: 12 },
              success: { text: '长凳横着滑进场里，斗士一脚踩上去，连人带盾摔了个四仰八叉。看台上有人笑出了声。', applyAll: { cond: 'prone', turns: 1 } },
              fail: { text: '长凳没动，你的脚趾头动了。', selfDmg: '1d4' },
            },
          ],
          win: { effects: ['flag plumwall_duel', 'rep escann +1', 'xp 100'], goto: 'a1_04b' },
          lose: { effects: ['flag plumwall_plea', 'world writ +1', 'rep moon -1'], goto: 'a1_04b' },
        },
      },
      {
        text: '开口断定：他父亲那天是被慑住的',
        tag: '神',
        if: 'is.god',
        effects: ['flag plumwall_plea', 'world writ +1', 'rep moon -1', 'rep wise -1', 'var god_acts +1'],
        result: [
          '你说了。没人上诉，也没人问你凭什么。塞西利乌斯当场跪下，磕了一个头。',
          '散了以后，他的邻居在门廊里说，普鲁穆里斯家买通了一个神。第二天，有三家人带着自家的旧案子，在你住的门口排起了队，没一家去找国王，也没一家去找法师。',
        ],
        goto: 'a1_05',
      },
      {
        text: '开口断定：他父亲那天是自己做的主',
        tag: '神',
        if: 'is.god',
        effects: ['flag a1x_plum_denied', 'rep moon -1', 'rep wise -1', 'var god_acts +1'],
        result: [
          '你说了。塞西利乌斯的脸白了，张了两回嘴，一个字也没出来。没人上诉。',
          '第二天，有三家人带着自家的旧案子，在你住的门口排起了队。国王听说了，派人来问，往后达梅里斯堡的大厅还开不开。',
        ],
        goto: 'a1_05',
      },
    ],
  },

  a1_04b: {
    id: 'a1_04b',
    title: '裁决之后',
    text: [
      { if: 'flag.plumwall_duel', text: '斗士躺在长凳圈里，盔掉了。他是普卢姆沃尔的一个铁匠，塞西利乌斯花钱雇的。按骑士裁决的规矩，申辩驳回。按同一条规矩，这一家打过、输了、认了，往后谁也不许再拿 994 年的事说他们。' },
      { if: 'flag.plumwall_duel', text: '塞西利乌斯过来同你握手，握得很用力。阿丽娅没过来，可她走之前同书记交代了一句，书记把“叛公之子”四个字从卷子上划掉了。' },
      { if: '!flag.plumwall_duel', text: '你躺在长凳圈里，听书记念裁决：骑士裁决，王室输了，申辩照收。塞西利乌斯没过来看你，他忙着同人握手。' },
      { if: '!flag.plumwall_duel', text: '阿丽娅起身走了。念珠在她手里拨得很快，一颗接一颗。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '打得好看。下回别让人家带侍从，规矩是一对一，你得先把规矩念出来。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，有人拿面包来吗？打完架不吃东西，晚上要做噩梦的。' },
    ],
    next: 'a1_05',
  },

  a1_05: {
    id: 'a1_05',
    title: '月山',
    loc: '月山 · 月神神殿',
    date: '1022年花始月',
    text: [
      '去月山要过阿克罗姆顿的桥。守桥的兵穿着阿克罗米斯家的号衣，一人收一个铜板，监誓人也不免。桥那头就是月神之耳，岛不大，山在正当中。',
      '山顶的神殿有一座老天文台，比达梅里亚这个国号还老。第七次泛神会议就在天文台底下的大堂里开，开了七年还没散。走廊里有个祭司抱着一本比他胳膊还粗的书，见人就拦。',
      { speaker: '比珊的达林', text: '《月歌者法典》，穆纳斯的行传，第四稿。签个名就行，签在这一页，不用看。' },
      '王后有喜的消息比你先到了山上。阿丽娅在偏殿见你，桌上摆着一只银碗，碗里是油。',
      { speaker: '阿丽娅', text: '往后你的判词，由神殿抹一道油。有了油，谁也不能说那只是一个外人的意思。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '月神管不管鹰身女妖？不管我就不跪。' },
      { if: 'party.barry', speaker: '巴里', text: '神殿的面包是好面包，就是太干。我替你们多拿了两个，揣在袖子里了。' },
      { if: 'is.god', text: '阿丽娅说完判词的事，没让你走。她把银碗往前推了一寸，问你有没有想过做月神的第九世。她说奥琪去年才走，位子还热。' },
    ],
    first: ['codex moon_temple', 'codex seventh_council'],
    choices: [
      {
        text: '打听会议这七年到底在吵什么',
        once: true,
        check: { skill: 'religion', dc: 12, mods: [{ if: "faction == 'rites'", n: 2, why: '你认得各家的祭司' }] },
        ok: { text: '穆纳斯的神位早投完了，凯伦算阿德安的化身也定了。吵得最久的是阿拉莉亚：她生前不拜坎诺的任何一位神，有人说她就是她自己，用不着封。', effects: ['flag a1x_council_read'] },
        fail: { text: '你被达林拦住，听他念了半个时辰的法典，最后稀里糊涂在那一页上签了名。那一页写的是穆纳斯封神，精灵码头的长老们知道了不会高兴。', effects: ['rep elders -1'] },
      },
      {
        text: '想想阿丽娅要的到底是什么',
        once: true,
        check: { skill: 'insight', dc: 13 },
        ok: { text: '和约刚把加冕的权分给了所有神殿。一道油抹在监誓人的判词上，往后谁的名分算数，月神神殿就有一只手在里头。', effects: ['flag a1x_aria_read'] },
        fail: { text: '她看出你在掂量她，把银碗往回收了半寸，说你可以回去想想。', effects: ['rep moon -1'] },
      },
      {
        text: '进会场的内圈，找几个认得的祭司',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['flag a1x_inner'],
        result: '你认的是老规矩，老规矩的人都坐在内圈。奈拉特的收殓人给你挪了个座，月神神殿的一个老执事悄悄告诉你，明天先发言的是哪几家。',
      },
      {
        text: '低头，让她抹油',
        effects: ['flag aria_anoints', 'rep moon +1', 'rep rose -1'],
        result: '油是凉的，抹在你的印上，也抹在你的额头上。阿丽娅说，往后你盖的每一个印，神殿都认。洛伦特的使节当天就往家里写了信。',
        goto: 'a1_06',
      },
      {
        text: '谢绝',
        effects: ['rep moon -1'],
        result: '阿丽娅没再说什么，叫人把银碗端走了。端碗的小祭司走到门口，回头看了你一眼。',
        goto: 'a1_06',
      },
      {
        text: '用自己带的圣油，给判词抹一道',
        tag: '旧礼',
        if: "faction == 'rites'",
        req: 'item.holy_oil >= 1',
        reqText: '要一瓶圣油',
        effects: ['item -holy_oil', 'flag a1x_self_oil'],
        result: '你把自己那瓶油拔了塞子，抹在印上。阿丽娅看着你抹完，说老规矩里确实有这一条，说完把她的碗端走了。你不欠她的了。',
        goto: 'a1_06',
      },
    ],
  },

  a1_06: {
    id: 'a1_06',
    title: '活手的名分',
    art: 'ev_piety',
    loc: '月山 · 泛神会议会场',
    text: [
      '大堂里摆着十几张长桌，一座神殿一张。今天的议题写在一块门板上，钉在柱子上：“活手”阿拉莉亚。她是试炼山上死的九个人之一，在山上给人接骨，接到自己倒下。',
      '卡斯特洛斯的祭司坐在最后一排，袍子洗得发白，没人请他们发言。主持的老祭司敲了敲桌子。',
      { speaker: '主持的老祭司', text: '请监誓人作证。山上活下来的人回来以后，是怎么说她的？' },
      { if: 'flag.god_camp', text: '门口有个瘸腿的执事指着你，同旁边的人咬耳朵。你听见了半句：帐篷城那个，活手第二。' },
      { if: "origin == 'ibevar'", text: '你袖子里揣着亲王的手令，上面只有一句：别让他们把我们的人封成他们的神。' },
      { if: 'party.barry', speaker: '巴里', text: '我在威克斯听过她。敌我两边的骨头她都接。这样的人，封不封，她都不在乎吧。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '投票封神？我们部里谁打赢了谁就是神，省事。' },
      { if: 'is.god', text: '你一进门，有三张桌子的人站了起来。月神神殿那桌要你坐到他们中间。阿德安的骑士那桌说你得先同他们比一场。剩下的人吵起来：该排进升座之神，还是算哪位旧神的化身。' },
      { if: 'is.god', text: '卡斯特洛斯的祭司举起一块木牌，上面写着诸神禁令的头一条。比珊的达林抱着书挤到你跟前。' },
      { if: 'is.god', speaker: '比珊的达林', text: '能不能让我跟您三年？写活人难，您的事迹还没完。我可以先写个目录。' },
    ],
    choices: [
      {
        text: '替阿拉莉亚作证',
        check: { skill: 'religion', alt: ['persuasion'], dc: 13, party: true, adv: 'flag.a1x_council_read || flag.a1x_inner' },
        ok: {
          text: [
            '你说她在山上接骨不问是哪一国的。书记照抄了，后面还添了一句你没说的：“证人言之甚详。”',
            { if: "origin == 'ibevar'", text: '你把亲王的手令折了一道，塞回袖子里。' },
          ],
          effects: ['flag alaria_for', 'world communion +1', 'rep elders -1', 'approval barry +1'],
          goto: 'a1_07',
        },
        fail: {
          text: [
            '你说到一半，前排两个祭司就开始交头接耳。书记只记下了你的前三句，后面的写着“余略”。',
            { if: "origin == 'ibevar'", text: '你把亲王的手令折了一道，塞回袖子里。' },
          ],
          effects: ['flag alaria_for', 'world communion +1'],
          goto: 'a1_07',
        },
      },
      {
        text: '拦下：她不拜坎诺的神，这张桌子管不着她',
        check: { skill: 'religion', alt: ['persuasion'], dc: 13, party: true, adv: "flag.a1x_council_read || flag.a1x_inner || origin == 'ibevar'" },
        ok: {
          text: '你说她生前不进任何一座神殿，死后也不该被抬进去。精灵码头来旁听的两个长老在后排站起来，冲你点了点头。',
          effects: ['flag alaria_blocked', 'rep elders +2', 'world communion -1', { if: "origin == 'ibevar'", then: ['rep elders +1'] }],
          goto: 'a1_07',
        },
        fail: {
          text: '你的话被掐掉了一半，书记只记了“证人以为不妥”。长老们没站起来，可也没走。',
          effects: ['flag alaria_blocked', 'rep elders +1', 'world communion -1', { if: "origin == 'ibevar'", then: ['rep elders +1'] }],
          goto: 'a1_07',
        },
      },
      {
        text: '只说你亲眼见过、亲耳听过的',
        effects: ['rep escann +1'],
        result: '你说你没上过山，只听回来的人讲过。克拉丽蒙德派来旁听的一个扈从把你的话抄在了袖口上。会场里一半人嫌你说得太少，一半人嫌你说了等于没说。',
        goto: 'a1_07',
      },
      {
        text: '走上去说：“把我也排进议程。”',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_on_agenda', 'var god_acts +1', 'rep elders -1'],
        result: [
          '你从长桌中间走过去。卡斯特洛斯的祭司举着那块木牌，你经过的时候，他们往后挪了三排。',
          '主持的老祭司愣了很久，在门板上阿拉莉亚的名字底下添了一行字。添完他宣布休会，请示月神神殿。',
        ],
        goto: 'a1_06b',
      },
    ],
  },

  a1_06b: {
    id: 'a1_06b',
    title: '容后再议',
    text: [
      '休会休了一下午。再开的时候，门板上阿拉莉亚的名字往下挪了一格，上头写的是“更新的事”。议程上她还在，证还能作，只是大堂里一半的人在看你，没几个在听。',
      '精灵码头来的两个长老一直坐在后排。散会的时候，年纪大的那个走过你身边，停下来问了一句：上回神在场的时候，我们丢了一块大陆。那天你在哪儿？',
      { if: 'party.barry', speaker: '巴里', text: '对不住，他不是冲你。他见谁都问。可他这回问得最慢。' },
    ],
    choices: [
      { text: '照旧替阿拉莉亚说两句', effects: ['flag alaria_for', 'world communion +1'], result: '你说了，书记记了，记在“更新的事”底下，字写得很小。', goto: 'a1_07' },
      { text: '照旧拦下', effects: ['flag alaria_blocked', 'world communion -1', 'rep elders +1'], result: '你说了，长老们听见了。记录上只有一行：证人以为不妥。', goto: 'a1_07' },
      { text: '不说了，下山', effects: ['rep moon -1'], result: '你走的时候，月神神殿那桌的人站起来送，一直送到门口。阿丽娅没送。', goto: 'a1_07' },
    ],
  },

  a1_07: {
    id: 'a1_07',
    title: '月河上的和约',
    loc: '月河 · 一条平底驳船',
    text: [
      '和约在月河上签。两边都不肯去对方的岸，就在河当中抛锚，用一条平底驳船。船上一张桌，桌腿钉在甲板上。上游拐弯的那一段河岸，和约要还给弗恩。',
      '弗恩的埃米尔一世穿得比谁都素，像是怕人说他割了地还有钱置衣裳。螫针割给珍珠边地，这一条他昨天就认了。今天他带来的文本多了一条，写在最后一页的背面：精灵不得在弗恩置地、任职。',
      '船舷外，两头双足飞龙贴着水面飞过去，翅膀扫起的水溅到了桌上。龙背上的骑手一直朝驳船看。',
      { speaker: '埃米尔一世', text: '我回去总得有句话说。割了地的国王，要么带回一样东西，要么带回一个仇人。' },
      { if: 'is.elf', text: '他念到那一条的时候，抬眼看了看你的耳朵。' },
      { if: "origin == 'ibevar' && flag.p_ibevar_blood", speaker: '埃米尔一世', text: '伊贝瓦尔的亲王也立过法，一命抵一命，听说就是照你回的话写的。各家有各家的规矩，我这一条也是。' },
      { if: 'party.barry', speaker: '巴里', text: '我们威克斯有句老话：“逐”字开头的令，最后逐的都是自己人。对不住，这句不是我编的。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '那两头飞龙再飞低一点，我就下去跟它们讲讲道理。' },
    ],
    choices: [
      {
        text: '看看他到底要回去说什么',
        once: true,
        check: { skill: 'insight', dc: 12 },
        ok: { text: '他每提一回螫针，手指就在桌上敲一下。他要的不是排挤精灵，是回去以后有一句话能盖过“割地”两个字。', effects: ['flag a1x_emil_read'] },
        fail: { text: '他发现你在看他，把文本合上了。往后谈什么，他都先瞄你一眼再开口。', effects: ['flag a1x_emil_wary'] },
      },
      {
        text: '翻翻螫针那一段的过路税',
        once: true,
        check: { skill: 'history', dc: 13, mods: [{ if: 'is.merchant', n: 2, why: '你算过别人的过路钱' }] },
        ok: { text: '螫针割出去了，可月河上那道税卡的抽成和约里没写。这一笔钱，够埃米尔回去说好几年。', effects: ['flag a1x_toll'] },
        fail: { text: '你翻错了年份。弗恩的书记当面纠正了你，桌上的人都笑了，达梅里亚那边笑得最响。', effects: ['rep moon -1'] },
      },
      {
        text: '当着飞龙把话说重一点',
        once: true,
        check: { skill: 'intimidation', dc: 13, party: true, adv: 'party.liv' },
        ok: { text: '卡斯坦站到船舷上，冲着飞龙张开了翅膀。埃米尔看了她一眼，叫骑手把龙往下游带。', effects: ['flag a1x_emil_cowed'] },
        fail: { text: '飞龙从你头顶掠过去，尾巴扫翻了墨水瓶，泼了你一身。弗恩的骑手在龙背上吹了声口哨。', effects: ['damage 1d4'] },
      },
      {
        text: '叫他把那一条划掉',
        check: { skill: 'persuasion', dc: 14, adv: 'flag.a1x_emil_read || flag.a1x_emil_cowed', dis: 'flag.a1x_emil_wary', mods: [{ if: 'item.lunatein_plank >= 1', n: 1, why: '月火号的船板' }] },
        ok: {
          text: '你说割地的账，弗恩百姓记在达梅里亚头上；赶精灵的账，他们迟早记在他头上。埃米尔沉着脸，拿笔把那一条划掉了，划了三道。',
          effects: ['flag emil_struck', 'world communion +1', 'rep moon +1'],
          goto: 'a1_08',
        },
        fail: {
          text: [
            '埃米尔一拍桌子站起来。他还没开口，一头飞龙就从船顶上掠过去，掀翻了半张桌子，船上的人全趴在了甲板上。',
            '等水花落下去，他又坐回来，把那一条划了。划之前他说：今天这一下，弗恩记着。',
          ],
          effects: ['flag emil_struck', 'world communion +1', 'rep moon +1', 'damage 1d6'],
          goto: 'a1_08',
        },
      },
      {
        text: '拿税卡的抽成同他换那一条',
        if: 'flag.a1x_toll',
        effects: ['flag emil_struck', 'world communion +1'],
        result: '你把税卡那一段写在纸上推过去。埃米尔看了很久，叫书记另起一行，把抽成写进去，把精灵那一条划掉。两边都没吃亏，所以两边都不太高兴。',
        goto: 'a1_08',
      },
      {
        text: '那一条，留着',
        effects: ['rep elders -1'],
        result: '你在和约上盖了印。埃米尔把最后一页翻过来，冲你点了点头。船靠岸的时候，码头上有个精灵船夫把缆绳扔到了水里，没扔给你们。',
        goto: 'a1_08',
      },
      {
        text: '对他说：“写上吧，省得我们猜。”',
        tag: '精灵',
        if: 'is.elf',
        effects: ['rep elders +1'],
        result: '埃米尔的笔停在半空。你说上岸二十二年，头一回有人肯把这句话写在纸上，总比背地里说强。他没划，你也没再提。精灵码头的长老们后来听说了这句话，传了好几天。',
        goto: 'a1_08',
      },
    ],
  },

  a1_08: {
    id: 'a1_08',
    title: '码头的夜',
    art: 'ck3_landing',
    loc: '安本科斯特 · 精灵码头',
    text: [
      '回到安本科斯特那天晚上，精灵码头打起来了。拆船板的工头说有块板子是他买下的，守船的长老说那块板子上刻着他曾祖母的名字。一群领不到饷的老兵本来是来看热闹的，看着看着也下了场。',
      '火把有二十来支。人堆当中有一个人跟别人不一样：他不骂，不喊，打完一个就去找下一个，打得很规矩。',
      { if: 'flag.p_knife_released', text: '你认得他。你放回帐篷城的那三个老兵里，扛铲的就是这一个。' },
      { if: 'flag.god_camp', text: '帐篷城排队等你的那些人也跟来了，挤在码头上。人一多，下场的就更多。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '那个，眼睛后面没人。打晕就行，别打死。其余的随便。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，对不住，我先把篮子放下。' },
    ],
    choices: [
      {
        text: '挤进人堆，去够那个不出声的',
        if: '!flag.god_camp',
        combat: {
          title: '码头的夜',
          intro: '船板、火把、四国的粗话。人堆里只有一个人不出声。',
          enemies: [{ id: 'thug', n: 3, name: '打红了眼的' }, { id: 'enthralled_soldier', name: '起身的老兵' }],
          specials: DOCK_SPECIALS,
          win: DOCK_WIN,
          lose: DOCK_LOSE,
        },
      },
      {
        text: '挤进人堆，去够那个不出声的',
        if: 'flag.god_camp',
        combat: {
          title: '码头的夜',
          intro: '船板、火把、四国的粗话，还有一个喊着要你治腿的。人堆里只有一个人不出声。',
          enemies: [{ id: 'thug', n: 4, name: '打红了眼的' }, { id: 'enthralled_soldier', name: '起身的老兵' }],
          specials: DOCK_SPECIALS,
          win: DOCK_WIN,
          lose: DOCK_LOSE,
        },
      },
    ],
  },

  a1_08b: {
    id: 'a1_08b',
    title: '天亮',
    text: [
      { if: 'flag.a1x_dock_lost', text: '你是在一条渔船的舱底醒过来的。舱里一股腌鲱鱼味，钱袋轻了一半。起身的老兵也躺在舱里，就在你旁边，打着呼噜。' },
      { if: '!flag.a1x_dock_lost', text: '天亮的时候，码头上躺了一地的人，都还喘气。起身的老兵坐在一摞船板上揉后脑勺，问你这是哪儿。他不记得自己为什么来码头。' },
      '补渔网的精灵老太太说，打架的时候人堆外头站着一个人，不动手，嘴一直在动。打完他就走了，往东，往威克斯那边去。她说那人瘦，穿得像个账房先生。',
      '巴里收到一封信，信封上又是一个果酱手印。他念给你听：玛格达夫人要给我请枪术先生，克洛万伯爵要给我请识字先生，男爵们说两个都请，钱大家出。巴里叔叔，你什么时候回来？',
      { if: 'party.barry', speaker: '巴里', text: '对不住。我得回去了。你们要不要一起来？威克斯的摄政们正等着一枚印，盖了才算数。' },
    ],
    choices: [
      {
        text: '把起身的老兵交给船上的长老看着',
        effects: ['rep elders +1'],
        result: '长老收下了他，在月火号上给他找了张铺。长老说船上的人睡得浅，谁半夜起身，他们听得见。',
        goto: 'a1_09',
      },
      {
        text: '送他回帐篷城自己的铺上',
        effects: ['rep moon +1', 'approval barry +1'],
        result: '同帐篷的人接了他，给他留了碗粥。走之前你叫他们夜里拿根绳子，一头拴他脚脖子，一头拴自己手腕。',
        goto: 'a1_09',
      },
      {
        text: '押去达梅里斯堡，交给玛希尔达',
        effects: ['rep wise +1', 'approval barry -1'],
        result: '玛希尔达收了人，在册子上记了一笔：码头，第二例。她问你这一路还会碰上几个。你说不知道，她说她也不知道，这才是麻烦。',
        goto: 'a1_09',
      },
    ],
  },

  a1_09: {
    id: 'a1_09',
    title: '去科塞顿的路',
    loc: '边境地 · 大路',
    date: '1022年银现月',
    text: [
      '出了月神之首，也就是达梅斯海德，路就窄了。边境地的路边隔一段有个石头堆，堆上插一根削尖的木棍，是给死人认路的。公爵的小马拴在巴里的马后头，一路上啃了三家人的篱笆。',
      '离科塞顿还有两天，路牌上出现了“屠夫原”三个字。巴里不说话了。',
      { speaker: '卡斯坦', text: '那一仗我知道。军团干的，埃尔拉克带的兵。我那时候还没生。' },
      { speaker: '巴里', text: '978 年银现月二十七。那年我二十岁，还在船上，没见过陆地。上岸以后我在威克斯一家一家听来的：来议和的人，连赶车的带做饭的，一个都没回去。' },
      { speaker: '卡斯坦', text: '我说了，我那时候还没生。你冲我瞪什么眼？我爹手底下的人干的事，你记我账上？' },
      { speaker: '巴里', text: '对不住，我没瞪眼。我们威克斯有句老话：坟要挖得比恨深。我在挖，挖得慢。' },
    ],
    choices: [
      { text: '站到卡斯坦这边：那年她还没生，账不该她还', effects: ['approval liv +1', 'approval barry -1'], result: '卡斯坦哼了一声，把酒囊扔给你。巴里拍了拍马脖子，往前走了一段，一直走在最前头。', goto: 'a1_09b' },
      { text: '站到巴里这边：叫卡斯坦把“记我账上”收回去', effects: ['approval barry +1', 'approval liv -1'], result: '卡斯坦飞上了路边的一棵树，在树上待到天黑才下来。巴里给她留了一块饼，她吃了，没道谢。', goto: 'a1_09b' },
      { text: '让他们吵完，你去前头看路', effects: ['approval liv +1', 'approval barry +1'], result: '他们吵了一整个下午。天黑的时候，巴里在问乌翼兵团的饷怎么发，卡斯坦在问三道卫的乳酪怎么做。', goto: 'a1_09b' },
    ],
  },

  a1_09b: {
    id: 'a1_09b',
    title: '小马过桥',
    text: [
      '离科塞顿半天路有一座木桥，桥板缺了三块，底下的河水是灰的。你们在桥头生了堆火，过了一夜。',
      '第二天一早，公爵的小马走到桥头就站住了。巴里拽它，它往后坐；卡斯坦拿翅膀扇它，它干脆趴下了。',
      { if: 'party.barry', speaker: '巴里', text: '它在威克斯堡长大的，没见过桥。对不住，这也怪我，我该早点带它出来走走。' },
      { if: "class in ['ranger', 'druid']", text: '你看了一眼小马的蹄子就明白它怕什么：桥板缝里看得见底下的水。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我驮它过去。别笑，我驮过比它沉的，驮过一个喝醉的百夫长。' },
      '桥头有一家半身人开的客店，烟囱冒着烟，窗台上摆着一排晾着的苹果饼。',
    ],
    first: ['rest short'],
    choices: [
      {
        text: '去半身人的客店坐一会儿',
        tag: '半身人',
        if: "race == 'halfling'",
        once: true,
        effects: ['flag a1x_inn_tip', 'codex halflings'],
        result: [
          '老板娘一见你就把你按在炉子边上，掰了一块饼，自己也掰了一块。同桌分过饼，就是自家人了。',
          { speaker: '老板娘', text: '你们去科塞顿？大墓地那边夜里有人干活，铁锹声，一响半宿。我男人去送过饼，没人开门。吃，再吃一块。' },
        ],
      },
      {
        text: '牵着小马过桥',
        check: { skill: 'animal', alt: ['survival'], dc: 12, party: true },
        ok: { text: '你把自己的斗篷盖在小马头上，牵着它一块板一块板地走。它过了桥，掀开斗篷，回头看了看河，打了个响鼻。', goto: 'a1_10' },
        fail: { text: '小马说什么也不上桥。你们绕到下游找浅滩，多走了一天，在一户农家买了草料和过夜的地方。', effects: ['gold -5'], goto: 'a1_10' },
      },
    ],
  },

  a1_10: {
    id: 'a1_10',
    title: '威克斯堡',
    loc: '威克斯堡 · 议事厅',
    text: [
      '威克斯堡是卡斯塔诺人一千四百多年前砌的老堡，墙里有暗道，当年围城就靠暗道运粮。议事厅正中摆着王座，上面蒙着一块布，蒙了三十年。公爵的椅子在王座下首，矮一截，一条腿底下垫了两块砖。',
      '戴伦·里奥纳德八岁，坐在那把椅子上脚够不着地。他看见巴里先笑了，看见你，又把笑收回去，坐直了。',
      { speaker: '戴伦', text: '监誓人发不发马？不发的话，我把小马借你。你别告诉玛格达夫人。' },
      { if: 'party.barry', speaker: '巴里', text: '小马在外头。它一路啃了三家人的篱笆，赔钱的事我回头再同你说。' },
      '摄政们分坐两边。玛格达·西尔·玛格达嗓门最大，丈夫是精灵，说话拿刀鞘敲桌子。克洛万·维内里克一句话也没说，指头上有墨。男爵们挤在一头，七八个人共用一壶酒。门边还站着一个穿天蓝罩袍、绣白月牙的，是马里昂派来的使者。',
      { if: "origin == 'wex'", text: '你回家了。玛格达冲你点了点头，克洛万没点，男爵们看你的眼神，像在数你手里有几票。' },
      { if: 'is.god', speaker: '戴伦', text: '你就是那个神？那你发不发马？神的马是不是会飞？' },
    ],
    first: ['quest dyren start', 'quest barry_boy start', 'codex dyren'],
    choices: [
      {
        text: '听玛格达怎么说',
        once: true,
        effects: ['flag a1x_heard_magda'],
        result: { speaker: '玛格达', text: '他爹死在维特斯克，他大伯也是。这孩子得学拿枪。交给我，十岁上马，十五岁上阵，二十岁谁也不敢拿他当私生子说事。' },
      },
      {
        text: '听克洛万怎么说',
        once: true,
        effects: ['flag a1x_heard_crovan'],
        result: [
          '他说话很慢，像每个字都先在纸上写过一遍。',
          { speaker: '克洛万', text: '孩子得识字。我六岁被人领走，领我的人教了我九年，我恨了他九年。我不会那么教。' },
        ],
      },
      {
        text: '听男爵们怎么说',
        once: true,
        effects: ['flag a1x_heard_barons'],
        result: { speaker: '一位男爵', text: '公爵是大家的公爵。谁一个人带都不放心，那就大家轮着带，一家一年，饭钱各出各的。' },
      },
      {
        text: '听马里昂的使者怎么说',
        once: true,
        effects: ['flag a1x_heard_envoy'],
        result: { speaker: '使者', text: '国王愿意做公爵的监护人。威克斯和达梅里亚本来是邻居，往后就是一家。国王小时候也是在敌营里长大的，他知道这滋味。' },
      },
      {
        text: '看看这一屋子人里，谁是为了那孩子',
        once: true,
        check: { skill: 'insight', dc: 13 },
        ok: { text: '说话的人没一个看着戴伦。只有巴里，他一直在看。戴伦也一直在看他。', effects: ['flag a1x_saw_through'] },
        fail: { text: '你看得太明白了点，玛格达拿刀鞘敲了敲桌子，问监誓人是来盖印的还是来相面的。', effects: ['rep wex -1'] },
      },
      { text: '先去科塞顿看那笔账，回来再定', goto: 'a1_11' },
    ],
  },

  a1_11: {
    id: 'a1_11',
    title: '大墓地',
    art: 'ev_priest_phantom',
    loc: '科塞顿 · 大墓地',
    text: [
      '科塞顿在河对岸的一面白崖上。崖上凿满了壁龛，一层叠一层，每个龛里站着一个死人。他们腰上束着皮条和木片做的束腰，勒得笔直，脸朝外，等着站着上路去见奈拉特。外乡人管这地方叫束腰镇。',
      '大墓地的大祭司福尔卡德是个半身人，六十一岁，踩着板凳翻账本。他先量了量你的肩宽，才请你坐。',
      { speaker: '福尔卡德', text: '屠夫原，四百零六座坟，四百零六块碑，束腰只发出去三百九十副。剩下十六座我叫人刨开看了，是空的。孩子，先吃块饼再说。' },
      { if: "origin == 'wex'", text: '这是你第二回对这本账。福尔卡德把腰上的钥匙串解下来扔给你，说哪间库房都能进，别进他睡觉那间。' },
      { if: "origin == 'lorent' && flag.saw_empty_graves", text: '洛伦特那几口太轻的棺材你见过，四十口空了七口，车夫只记得那一夜卸了牛。这里的坟土，也是有人夜里刨开、又原样填好的。' },
      { if: 'is.god', text: '福尔卡德量你的肩宽量了两遍，把尺子卷起来，塞回袖子里。' },
      { if: 'is.god', speaker: '福尔卡德', text: '你这样的，奈拉特那边没有尺寸。饼还是要吃的。' },
      { if: 'is.divine', text: '他知道你也是替神办事的。量完肩宽，他把收殓词的本子翻开一页推给你：这一行，你们那边念不念？' },
      { if: "race == 'dwarf'", text: '他说矮人的坟他见过，石头砌的，一千年不塌。这里的坟是土的，所以才要人一座一座地数。' },
      { if: 'party.barry', speaker: '巴里', text: '福尔卡德大人，饼我带了，三道卫的乳酪也带了。您先吃，账不跑。' },
    ],
    first: [
      { if: 'item.ledger_page < 1', then: ['item +ledger_page'] },
      'quest sixteen_graves start',
      'quest sixteen_graves stage 2',
      'codex necropolis',
      'codex corset_burial',
      'codex folcard',
    ],
    shop: {
      name: '收殓人的铺子',
      blurb: '崖底下一间矮屋，卖葬礼用的东西，也卖活人用的。掌柜的先问你家里谁走了。',
      stock: ['holy_water', 'bandage', 'antidote', 'healing_potion', 'nerat_candle'],
    },
    choices: [
      {
        text: '去屠夫原看铲痕和车辙',
        once: true,
        check: { skill: 'investigation', dc: 13, adv: 'flag.a1x_inn_tip' },
        ok: { text: '铲痕是窄的，收殓人用的那种窄头铲。车辙比运尸的车窄一掌，一律往南，进沼地的方向。', effects: ['var a1x_clues +1'] },
        fail: { text: '你蹲下看车辙的时候踩塌了一座坟的边，连人带土滑了下去，坑里的水没过了膝盖。', effects: ['hp -2'] },
      },
      {
        text: '看看刨开的那几座空坟',
        once: true,
        check: { skill: 'medicine', dc: 12 },
        ok: { text: '坟是空着填回去的。土分了三层，跟下葬时一样，最上面还压了一层草皮。挖的人有耐心，不着急。', effects: ['var a1x_clues +1'] },
        fail: { text: '你伸手去翻旁边一具没下葬的，没等收殓人念完词。福尔卡德拿账本敲了敲你的手背，这一下很疼。', effects: ['rep wex -1'] },
      },
      {
        text: '问问填坟的人懂不懂规矩',
        once: true,
        check: { skill: 'religion', dc: 12, mods: [{ if: "faction == 'rites'", n: 2, why: '你认得收殓人的规矩' }] },
        ok: { text: '每座空坟的碑脚都撒过盐，是奈拉特的收殓词里要的。干活的人懂行，比你懂。', effects: ['var a1x_clues +1'] },
        fail: { text: '你问错了人，问到一个正在给死人束腰的老收殓人。他念完一整段词才理你，理你的时候说：外行。', effects: ['gold -2'] },
      },
      {
        text: '给崖下等着的那几具主持一场正经葬礼',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['world unburied -1', 'approval barry +1'],
        result: [
          '崖下停着七具，都束好了腰，排队等壁龛。你从头一具念起，名字、年岁、哪家的人，一个一个念过去。收殓人跟着你念，念完把他们一具一具抬上去。',
          { if: 'party.barry', speaker: '巴里', text: '念得好。我们威克斯有句老话：名字念出来，路就短一半。' },
        ],
      },
      { text: '等天黑，去屠夫原守着', goto: 'a1_12' },
    ],
  },

  a1_12: {
    id: 'a1_12',
    title: '雾里收尸的人',
    art: 'ev_looming_death',
    loc: '屠夫原',
    date: '1022年银现月27日',
    text: [
      '屠夫原在两道丘陵中间，一片平地，四百零六块碑排成二十行。四十四年前的今天，来议和的威克斯人死在这里。雾是半夜起来的。',
      '雾里有铁锹的声音。三个人在起坟，一个刨，一个扶，一个往车上抬。干得很规矩，土堆在一边，碑一块也不碰。车前头套着一匹骡子，车辕上没坐人。',
      { if: 'var.a1x_clues >= 2', text: '其中两个穿着收殓人的灰袍子。是福尔卡德的人，你白天在崖下见过他们，一个在给死人束腰，一个在扫台阶。' },
      { if: 'var.a1x_clues < 2', text: '雾太浓，你只看得清他们手里的铁锹，头是窄的。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '那三个，眼睛后面都没人。我在乌霜领见过这种，喊他们也不回头。' },
      { if: 'is.god', text: '你走近了。他们照样干活，没一个抬头看你。' },
      { if: 'is.god && party.barry', speaker: '巴里', text: '他们看不见你。这话是好是坏，我说不上来。' },
    ],
    first: ['codex butchers_field'],
    choices: [
      {
        text: '冲过去，先把铁锹夺下来',
        if: '!flag.knows_watchword',
        combat: {
          title: '雾里收尸的人',
          intro: '雾里三个人放下了铁锹，又捡起来，一齐转过身。',
          enemies: [{ id: 'enthralled_soldier', n: 3, name: '收尸的人' }],
          noAwe: true,
          specials: [FIELD_KNOCK],
          win: FIELD_WIN,
          lose: FIELD_LOSE,
        },
      },
      {
        text: '冲过去，先把铁锹夺下来',
        if: 'flag.knows_watchword',
        combat: {
          title: '雾里收尸的人',
          intro: '雾里三个人放下了铁锹，又捡起来，一齐转过身。你嘴里有一句话，念不念在你。',
          enemies: [{ id: 'enthralled_soldier', n: 3, name: '收尸的人' }],
          noAwe: true,
          specials: [FIELD_KNOCK, FIELD_WORD],
          win: FIELD_WIN,
          lose: FIELD_LOSE,
        },
      },
    ],
  },

  a1_12b: {
    id: 'a1_12b',
    title: '车辙往南',
    text: [
      { if: 'flag.a1x_field_lost', text: '你是在一座空坟里醒过来的，嘴里都是土。车走了，骡子也走了。天亮以后，你数了数，又少了三座。' },
      { if: '!flag.a1x_field_lost', text: '天快亮的时候，雾散了。三个人坐在地上，一个在哭，两个在问这是哪儿。车上躺着两具刚起出来的，束腰都还系着。' },
      '车辙往南，进沼地的方向。没有人赶车，也没有人在前头等。骡子认得路。',
      '福尔卡德是骑着驴来的。他看见那两件灰袍子，从驴背上下来，在坑沿上坐下，一句话也没说。坐到太阳出来，他才把账本打开。',
      { if: 'party.barry', speaker: '巴里', text: '剩下的四百座，要是不赶紧埋回去，还会有人来起。对不住，我是说，我们得埋。' },
    ],
    first: ['quest sixteen_graves stage 3', 'codex sleepers'],
    choices: [
      {
        text: '把迁葬做完，四百零六座一座不落',
        if: 'rep.wex >= 2 && !flag.a1x_field_lost',
        effects: ['flag field_done', 'world unburied -2', 'approval barry +1'],
        result: '丘陵里的人听说是给屠夫原埋人，自己扛着铲子来了，没要工钱。埋了九天，最后一座是巴里填的土。',
        goto: 'a1_13',
      },
      {
        text: '把迁葬做完，四百零六座一座不落',
        if: 'rep.wex >= 2 && flag.a1x_field_lost',
        cost: { gold: 20 },
        effects: ['flag field_done', 'world unburied -2', 'approval barry +1'],
        result: '丘陵里的人来了，没要工钱。被拉走的那几具得重新做束腰，那笔钱是你出的。最后一座是巴里填的土。',
        goto: 'a1_13',
      },
      {
        text: '出钱雇人，把迁葬做完',
        if: 'rep.wex < 2 && !flag.a1x_field_lost',
        req: 'gold >= 40',
        reqText: '要 40 金冠',
        cost: { gold: 40 },
        effects: ['flag field_done', 'world unburied -2', 'approval barry +1'],
        result: '你雇了二十个人，埋了九天。福尔卡德每天收工的时候对一遍账，第九天对上了。最后一座是巴里填的土。',
        goto: 'a1_13',
      },
      {
        text: '出钱雇人，把迁葬做完',
        if: 'rep.wex < 2 && flag.a1x_field_lost',
        req: 'gold >= 60',
        reqText: '要 60 金冠',
        cost: { gold: 60 },
        effects: ['flag field_done', 'world unburied -2', 'approval barry +1'],
        result: '你雇了二十个人，又给被拉走的那几具重做了束腰，埋了十一天。福尔卡德第十一天对上了账。最后一座是巴里填的土。',
        goto: 'a1_13',
      },
      {
        text: '留两个收殓人守夜，先回威克斯堡',
        effects: ['rep wex -1'],
        result: '福尔卡德派了两个人守着，给他们一人一盏灯。他说灯是给活人点的，死人不怕黑。他没留你。',
        goto: 'a1_13',
      },
    ],
  },

  a1_13: {
    id: 'a1_13',
    title: '谁带大公爵',
    loc: '威克斯堡 · 议事厅',
    date: '1022年哈兰娜月',
    text: [
      '回到威克斯堡，议事厅的门关上了。桌上铺着一张纸，纸上写谁的名字，谁就带大公爵，盖了监誓人的印才算数。摄政们各自把椅子往前挪了半尺。',
      '戴伦不在厅里。门缝底下有一双小靴子的影子，一会儿踮脚，一会儿蹲下。',
      { if: 'flag.a1x_heard_magda', text: '玛格达把刀鞘横着搁在纸上，说十岁上马。' },
      { if: 'flag.a1x_heard_crovan', text: '克洛万把手放在膝盖上，指头上的墨还没洗。' },
      { if: 'flag.a1x_heard_barons', text: '男爵们的那壶酒见了底，又叫了一壶。' },
      { if: 'flag.a1x_heard_envoy', text: '马里昂的使者站着，没坐，罩袍上的月牙刚熨过。' },
      { if: 'is.elfblood', text: '玛格达看了看你的耳朵，说她男人也是这样的耳朵，所以你别指望她偏着谁。' },
      { if: 'flag.a1x_saw_through', text: '巴里坐在最边上，眼睛一直盯着门缝。' },
      { if: "origin == 'wex'", text: '门开了一条缝，戴伦把头探进来，先看的是你。' },
      { if: "origin == 'wex'", speaker: '戴伦', text: '你也有一票。你选谁我就跟谁。你别选错了。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '我没票，我就说一句：谁带都行，别让他学喝酒学晚了。' },
    ],
    first: ['quest dyren stage 2'],
    choices: [
      {
        text: '写巴里·月华',
        effects: ['flag guardian_barry', 'world communion +1', 'rep wex -1', 'approval barry +2'],
        result: [
          '巴里站起来，又坐下，又站起来。他说对不住，说了两遍，第二遍是对着门缝说的。男爵们嘀咕了几句，玛格达拿刀鞘敲了一下桌子，嘀咕就停了。',
          { if: "origin == 'wex'", text: '散了以后，戴伦把小马的缰绳塞到你手里，说借你的，不用还。' },
        ],
        goto: 'a1_14',
      },
      {
        text: '写克洛万·维内里克',
        effects: ['flag guardian_crovan', 'world writ +1', 'approval barry -1'],
        result: [
          '克洛万接过纸，把自己的名字看了一遍，叠好收进怀里。巴里一直看着门缝，门缝底下的影子不动了。',
          { if: "origin == 'wex'", text: '散了以后，戴伦把小马牵回了马厩，没看你。' },
        ],
        goto: 'a1_14',
      },
      {
        text: '写马里昂一世，由达梅里亚国王监护',
        effects: ['flag guardian_marion', 'world feud +1', 'rep moon +1', 'rep wex -1'],
        result: [
          '使者鞠了一躬，鞠得很深。男爵们一个接一个站起来走了，走的时候没一个跟你打招呼。',
          { if: 'flag.aria_anoints', speaker: '玛格达', text: '我就说。这印上抹过月神神殿的油，盖出来的当然是达梅里亚的字。' },
          { if: "origin == 'wex'", text: '戴伦把小马牵回了马厩。第二天，他问巴里，达梅里亚的国王会不会骑马。' },
        ],
        goto: 'a1_14',
      },
      {
        text: '写摄政会全体，由男爵们轮流带',
        effects: ['flag guardian_barons', 'rep wex +2', 'approval barry -1'],
        result: [
          '男爵们拍了桌子，酒壶跳起来，又落回去。玛格达骂了一句。巴里笑了一下，笑得很快，然后去门口把戴伦领了进来。',
          { if: "origin == 'wex'", text: '戴伦把小马的缰绳塞给你，说一家一年，轮到你家的时候你得管草料。' },
        ],
        goto: 'a1_14',
      },
    ],
  },

  a1_14: {
    id: 'a1_14',
    title: '克洛万听得懂',
    loc: '威克斯堡 · 克洛万的书房',
    text: [
      '克洛万的书房在塔楼底下，窗户朝北，书比椅子多。他点了一根蜡，坐下先洗手，洗得很仔细。',
      { speaker: '克洛万', text: '我六岁到十六岁，养在福阿哈尔公爵亚科布家里。你在屠夫原听见的那句话，是他辖地操场上的口令，早上点卯用的。' },
      { speaker: '克洛万', text: '那句话我一听就想站直。到今天还是。' },
      { if: 'flag.guardian_crovan', text: '他把桌上那张写着自己名字的纸往旁边推了推。他说你把孩子交给了他，这件事他不收钱，问吧。' },
      { if: 'flag.p_used_watchword', speaker: '克洛万', text: '你用过那句话。我看得出来，用过的人提起它，嘴唇会先动一下。用过几回？' },
      { if: 'party.liv', speaker: '卡斯坦', text: '亚科布。倒戈的那个。乌霜领的老兵提起他，先往地上啐一口，再说话。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，伯爵，您这屋太冷了。我去厨房要壶热的。' },
    ],
    first: ['flag knows_watchword', 'quest sleepers stage 2', 'codex iacob'],
    choices: [
      {
        text: '去地牢，问屠夫原抓回来的那个人',
        tag: '乌霜边区',
        if: "origin == 'ebonmarck' && !flag.a1x_field_lost",
        once: true,
        effects: ['rep dragon +1', 'approval liv +1'],
        result: [
          '他听出了你的口音，眼睛亮了一下。他说他是第九军团的，沼泽堡那天在中军。',
          '他把那句口令原样背给你听，一个字不差。背完了问你，皇帝还好吗。',
        ],
      },
      {
        text: '请克洛万让你验一验他自己',
        tag: '贤者门下',
        if: "faction == 'staff'",
        once: true,
        check: { skill: 'arcana', dc: 13 },
        ok: { text: '他同意了，伸出手腕。你看得很仔细，什么也没有：没人动过他。他把袖子放下来，说他自己也是头一回知道。', effects: ['world writ +1'] },
        fail: { text: '你的法术在他身上碰了一下就弹了回来，弹得你眼前发黑。他扶住你，说亚科布教过他怎么关门，关了十几年，改不过来了。', effects: ['hp -3'] },
      },
      {
        text: '请他把拿这句话接活的人说全',
        check: { skill: 'persuasion', dc: 13, mods: [{ if: 'flag.a1x_heard_crovan', n: 1, why: '你在议事厅听他说完过' }, { if: 'flag.guardian_crovan', n: 10, why: '孩子是你交给他的' }] },
        ok: {
          text: [
            { speaker: '克洛万', text: '驯师梅尔科尔。亚科布早年的学生，比我早几年进的门。他在阿克罗姆顿替人办事，主人家姓阿克罗米斯。' },
            '他抽出一张纸，画了酒窖的样子，哪排桶后面有道铁栅。',
          ],
          effects: ['flag a1x_crovan_map'],
          goto: 'a1_15',
        },
        fail: {
          text: [
            { speaker: '克洛万', text: '我告诉你，你欠我一回。哪天我要用这枚印，你得来。' },
            '他说了名字：驯师梅尔科尔，在阿克罗姆顿。别的他不肯说了。',
          ],
          effects: ['rep wex -1'],
          goto: 'a1_15',
        },
      },
    ],
  },

  a1_15: {
    id: 'a1_15',
    title: '阿克罗姆顿的地窖',
    art: 'ev_female_spy',
    loc: '阿克罗姆顿 · 酒窖',
    text: [
      '阿克罗姆顿守着去月神之耳的那座桥，你去月山的时候过过。维德拉尔杜斯·阿克罗米斯是这里的主人，旧达梅里亚贵族，他姑母就是叛公夫人。他家的酒窖在主楼底下，窖门上刻着一串葡萄。',
      '窖里还有一层。第三排酒桶后头有道铁栅，栅那边是往下的台阶。你们摸到台阶口，头顶的梁上有人小声说话。',
      { speaker: '薇齐娜', text: '别抬头，抬头掉灰。下面七个人。刚才是八个，有一个去解手了，要是他回来（我说的是要是），就是八个。' },
      '她从梁上滑下来，一身灰，十九岁上下，科乌里亚口音，腰里别着一本本子。她说她叫薇齐娜·马尔尼德，渡鸦先知会派来盯梅尔科尔的。顺便也盯着你。',
      { speaker: '薇齐娜', text: '我先问一句，我得记下来：抓到人以后，你打算交给谁？' },
      { if: 'party.liv', speaker: '卡斯坦', text: '你谁啊？行，会爬梁，封你个斥候长。俸禄先欠着。' },
      { if: 'party.barry', speaker: '巴里', text: '姑娘，你在梁上蹲了多久？饿不饿？我这儿还有半块饼。' },
      { if: 'is.god', text: '她看了你一眼，翻开本子写了个字，又划掉了。' },
    ],
    first: ['companion +vezina', 'codex vezina', 'codex ravenseers'],
    choices: [
      { text: '说：“先问清楚再说。”', effects: ['approval vezina +1'], result: [{ speaker: '薇齐娜', text: '先问清楚。好。我记下了，字写得很大。' }], goto: 'a1_15b' },
      { text: '说：“吊死。”', effects: ['approval vezina -1'], result: [{ speaker: '薇齐娜', text: '吊死。我记下了。要是吊错了（我说的是要是），这一行我不会划。' }], goto: 'a1_15b' },
    ],
  },

  a1_15b: {
    id: 'a1_15b',
    title: '铁栅',
    text: [
      '铁栅有一人高，锁是新的，铰链是旧的，锈得发红。栅那头的台阶往下拐了个弯，弯那头有灯光，有人在念什么，一个一个的，像在点名。',
      { if: 'flag.a1x_crovan_map', text: '克洛万画的那张纸上，台阶拐弯的地方打了个叉：那里站着一个守门的。' },
      { speaker: '薇齐娜', text: '十一只。我说的是窖顶上的乌鸦，刚才是十二只。少的那只要么死了，要么在听我们说话。' },
      { if: 'party.barry', speaker: '巴里', text: '对不住，我喘气声大。我憋着。' },
      { if: 'party.liv', speaker: '卡斯坦', text: '锁我能撬，就是撬得响。' },
    ],
    choices: [
      {
        text: '摸一摸门框上的旧法术',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        effects: ['flag a1x_first_strike'],
        result: '门框上有一道很旧的法术，茬口还是毛的。下面的人每念一句，它就跟着颤一下。你数清了拍子，知道他什么时候换气。',
      },
      {
        text: '贴着墙根摸下去',
        check: { skill: 'stealth', dc: 13, party: true, adv: 'flag.a1x_crovan_map' },
        ok: { text: '你从守门的背后过去，他正低着头抠指甲。你在拐角站定，看清了下面的人。', goto: 'a1_16' },
        fail: { text: '台阶上有一块松的，你一脚踩响了。守门的喊了一声，下面的念声停了。', effects: ['flag a1x_alarm'], goto: 'a1_16' },
      },
      {
        text: '把锁撬开',
        check: { skill: 'sleight', dc: 13, party: true },
        ok: { text: '锁芯转了一圈半，咔的一声，声音比你想的小。薇齐娜在本子上记了一笔。', goto: 'a1_16' },
        fail: { text: '撬子断在了锁眼里，断的那一下，整道铁栅都嗡了一声。', effects: ['flag a1x_alarm'], goto: 'a1_16' },
      },
      {
        text: '装成来买酒的，大大方方叫门',
        check: { skill: 'deception', dc: 13, mods: [{ if: 'is.noble', n: 2, why: '你说话像个老爷' }] },
        ok: { text: '守门的骂骂咧咧地开了栅，问你要哪一年的。你说要最好的，他转身去搬，你跟着他下了台阶。', goto: 'a1_16' },
        fail: { text: '他问你要哪一年的。你报了个年份，那一年阿克罗姆顿遭了冰雹，一桶也没酿。', effects: ['flag a1x_alarm'], goto: 'a1_16' },
      },
      {
        text: '把铁栅整个从墙里端下来',
        tag: '武人',
        if: 'is.martial',
        check: { skill: 'athletics', dc: 13, adv: 'is.martial' },
        ok: { text: '铰链锈透了。你两手一抬，铁栅连着半块墙皮一起下来，你把它轻轻靠在了酒桶上。', goto: 'a1_16' },
        fail: { text: '铁栅是下来了，可它是砸下来的。整个酒窖都听见了。', effects: ['flag a1x_alarm'], goto: 'a1_16' },
      },
    ],
  },

  a1_16: {
    id: 'a1_16',
    title: '驯师',
    loc: '阿克罗姆顿 · 地窖下层',
    text: [
      '下层比上层矮，人得弯着腰走。墙上一排铁环，环上没拴人。七个人坐在长凳上，穿着各国的旧军服，手放在膝盖上，眼睛睁着。一个瘦子站在他们前头，手里捏着一张名单，一个一个地点。',
      { speaker: '梅尔科尔', text: '第三个，起身。第四个，起身。好。今晚的活，一刀，不多。' },
      { if: 'flag.a1x_alarm', text: '他抬头看见了你们，名单还捏在手里。长凳上有两个人站了起来。' },
      { if: '!flag.a1x_alarm', text: '他背对着你们，点得很专心。长凳上那两个刚站起来的，还没转身。' },
      { if: 'is.god', text: '他转过身，冲你念了一句旧口令。你没动。他又念了一遍，声音尖了，然后他把名单攥成了一团。' },
      { if: 'is.arcane', text: '他念的不全是法术。你听得出里面有一截咒文的骨头，肉是军营里的话。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '他每念一句停三拍。三拍。要是有人在第二拍上打断他……' },
    ],
    first: ['flag knows_iacob_name'],
    choices: [
      {
        text: '下去，别让他把名单念完',
        if: '!flag.a1x_alarm',
        combat: {
          title: '驯师',
          intro: '梅尔科尔往后退了一步，舔了舔嘴唇，接着点名。',
          enemies: [{ id: 'melcor_handler' }, { id: 'enthralled_soldier', n: 2, name: '坐长凳的人' }],
          noAwe: true,
          specials: MELCOR_SPECIALS,
          win: MELCOR_WIN,
          lose: MELCOR_LOSE,
        },
      },
      {
        text: '下去，别让他把名单念完',
        if: 'flag.a1x_alarm',
        combat: {
          title: '驯师',
          intro: '守门的从台阶上追下来，梅尔科尔往后退了一步，接着点名。',
          enemies: [{ id: 'melcor_handler' }, { id: 'enthralled_soldier', n: 2, name: '坐长凳的人' }, { id: 'thug', name: '守门的' }],
          noAwe: true,
          specials: MELCOR_SPECIALS,
          win: MELCOR_WIN,
          lose: MELCOR_LOSE,
        },
      },
    ],
  },

  a1_16b: {
    id: 'a1_16b',
    title: '口供',
    text: [
      '梅尔科尔被按在长凳上，咳了很久。咳完了，他说话还像点名，一条一条的。',
      { speaker: '梅尔科尔', text: '一，我是亚科布大人早年的学生。二，刀是阿克罗米斯老爷买的，说好了只吓一吓。三，往前递那一步是我加的，吓一吓不值那个价钱。' },
      { speaker: '梅尔科尔', text: '屠夫原的坟？不是我的活。那些人夜里干什么，我管不着，我也没那么多人手。' },
      '他想了想，又补了一句，像是怕你们漏记。',
      { speaker: '梅尔科尔', text: '亚科布大人那句口令，是从山上学来的。' },
      { if: 'is.god', text: '他从长凳上滑下来，跪在你脚边，说他什么都能叫人去办，比他们都快，比他们都听话。他说他想给你当差。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '三条，加一条。我都记下了。' },
    ],
    choices: [
      {
        text: '当场了结他',
        effects: ['flag melcor_dead', 'approval liv +1', 'approval vezina -1'],
        result: [
          '他没求饶，只是又咳了一声。长凳上坐着的那几个人，到最后也没转过头来看。',
          { if: 'party.vezina', speaker: '薇齐娜', text: '他知道的事，现在只有亚科布一个人知道了。这一行我写得很慢。' },
        ],
        goto: 'a1_17',
      },
      {
        text: '捆上，押去达梅里斯堡交给贤者会',
        effects: ['flag melcor_wise', 'rep wise +1', 'approval vezina -1'],
        result: [
          '玛希尔达收人的时候，先请梅尔科尔搜她的身。梅尔科尔愣了一下，搜了。',
          { if: 'party.vezina', speaker: '薇齐娜', text: '交给法师。我师门的人要是知道了（我说的是要是），会问我为什么没拦。' },
        ],
        goto: 'a1_17',
      },
      {
        text: '叫他照凯伦的规矩立誓，再不念口令，放他走',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        effects: ['rep escann +1', 'approval vezina +1'],
        result: [
          '他立了誓，立得很快，像点名一样。你放他走了，他走到台阶口回头看了一眼，看的是长凳上的人。',
          { if: 'party.vezina', speaker: '薇齐娜', text: '我记下了：立誓，放走。要是他再念，我也会记下来。' },
        ],
        goto: 'a1_17',
      },
      {
        text: '收下他，叫他去帐篷城替你管排队的人',
        tag: '神',
        if: 'is.god',
        effects: ['flag melcor_wise', 'var god_acts +1', 'approval vezina -2', 'approval barry -1', 'rep wise -1'],
        result: [
          '他磕了三个头，第二天就去了帐篷城。他管排队管得很好，一个也不乱，没人敢问他是怎么管的。贤者会派人来要口供，他照着名单一条一条背给他们听。',
          { if: 'party.vezina', speaker: '薇齐娜', text: '你收了一个会叫别人起身的人。我在本子上写了，写完以后看了很久。' },
          { if: 'party.barry', speaker: '巴里', text: '对不住，这件事我不吃饭也得说：他看人的样子，跟看牲口一样。' },
        ],
        goto: 'a1_17',
      },
    ],
  },

  a1_16c: {
    id: 'a1_16c',
    title: '酒桶',
    text: [
      '你是被捆在一只酒桶上醒过来的，绳子勒进了肋条。长凳上的人都走了，梅尔科尔也走了。他走之前在你耳边说了好一阵话，你只记得一条一条的，像点名。',
      '薇齐娜从梁上下来，拿一把小刀割绳子，割得很慢，一边割一边念她记下的东西：刀是阿克罗米斯老爷买的，只说吓一吓，往前递那一步是他自己加的；屠夫原的坟不是他的活；亚科布那句口令，是从山上学来的。',
      '他的名单落在地上，背面是一本账，一笔一笔记着阿克罗米斯家付的钱。',
      { speaker: '薇齐娜', text: '他跑了，账没跑。要是你现在去主楼（我说的是要是），那位老爷还没睡。' },
    ],
    next: 'a1_17',
  },

  a1_17: {
    id: 'a1_17',
    title: '阿克罗米斯的账',
    loc: '阿克罗姆顿 · 主厅',
    text: [
      '主厅点着六根蜡。维德拉尔杜斯·阿克罗米斯坐在长桌尽头，桌上摊着那本账：哪一天，多少钱，买的是“一次惊吓”。他没站起来。',
      { speaker: '阿克罗米斯', text: '达梅里亚一千年没让祭司替国王当过家。如今当家的是他祖母。我只是把各家饭桌上的话，换个地方又说了一遍。' },
      '他说他没想杀人，刀是那个驯师自己加的码。这话他说了两遍。你提到亚科布的名字，他的手停在了酒杯上。他哥哥阿克罗马尔是保王党，999 年死的，家谱上凶手那一栏，写的就是这个人。',
      { if: 'flag.plumwall_plea', speaker: '阿克罗米斯', text: '再说，我当时也是被慑住的。普卢姆沃尔的申辩你们收了，我的凭什么不收？' },
      { if: 'flag.plumwall_duel', speaker: '阿克罗米斯', text: '普卢姆沃尔家的名声叫你一场裁决洗干净了。我家的，没那么好洗。' },
      { if: 'is.god', speaker: '阿克罗米斯', text: '尖耳朵，女祭司，现在又来个神。达梅里亚还剩哪一样是达梅里亚人的？' },
      { if: 'is.noble', text: '他看你的时候，眼神跟看别人不一样。他认出你也是家里有画像挂着的人，所以他更不肯站起来。' },
      { if: 'party.vezina', text: '薇齐娜坐在角落里，本子摊在膝盖上，每一句都记。' },
    ],
    first: ['quest sleepers done'],
    choices: [
      {
        text: '当着他的封臣，把这本账从头念一遍',
        check: { skill: 'persuasion', dc: 14, party: true, mods: [{ if: 'flag.a1x_plum_denied', n: -2, why: '旧达梅里亚的诸侯记着你驳回普卢姆沃尔那一回' }, { if: 'flag.knows_iacob_name', n: 2, why: '你提了亚科布的名字' }] },
        ok: {
          text: '你念到第三页，下首有两个封臣站起来走了。念完的时候，主厅里只剩阿克罗米斯一个人坐着。消息第二天就到了达梅里斯堡，马里昂在大厅里把那本账摔在了地上。',
          effects: ['flag acromis_exposed', 'world communion -1', 'rep moon +1'],
          goto: 'a1_18',
        },
        fail: {
          text: '你念完了，他也认了。可你还没出阿克罗姆顿，消息就先到了达梅斯海德，传成了“月庭拿旧贵族开刀”。',
          effects: ['flag acromis_exposed', 'world communion -1'],
          goto: 'a1_18',
        },
      },
      {
        text: '账你收着，叫他欠你一笔',
        check: { skill: 'intimidation', dc: 14, mods: [{ if: 'flag.a1x_plum_denied', n: -2, why: '旧达梅里亚的诸侯记着你驳回普卢姆沃尔那一回' }, { if: 'flag.knows_iacob_name', n: 2, why: '你提了亚科布的名字' }] },
        ok: {
          text: '你把账合上，塞进自己怀里。他看着那本账进了你的衣裳，然后站了起来，这是他今晚头一回站起来。他说往后你有事，阿克罗姆顿的门开着。',
          effects: ['flag acromis_quiet', 'approval vezina -1'],
          goto: 'a1_18',
        },
        fail: {
          text: '他认了，答应了。可你走后，他的管家连夜去了一趟达梅斯海德。半个月以后，宫里有人问你，阿克罗姆顿那边是不是收了什么东西。',
          effects: ['flag acromis_quiet', 'approval vezina -1', 'rep moon -1'],
          goto: 'a1_18',
        },
      },
      {
        text: '拿这本账去找加里昂，换一纸验心的令状',
        check: { skill: 'persuasion', alt: ['intimidation'], dc: 14, mods: [{ if: 'flag.a1x_plum_denied', n: -2, why: '旧达梅里亚的诸侯记着你驳回普卢姆沃尔那一回' }, { if: 'flag.knows_iacob_name', n: 2, why: '你提了亚科布的名字' }, { if: 'flag.a1x_garion_true', n: 1, why: '你知道加里昂不想当这个人' }] },
        ok: {
          text: [
            '你叫阿克罗米斯在账的末页签了名。加里昂收下账，看了很久，给你写了一纸令状：凡涉慑心之案，贤者会可验，验了算数。他写完把笔放下，说这东西他本来不想写。',
            { if: 'party.barry', speaker: '巴里', text: '对不住。我还是那句话，人脑子里的东西写成了字，就不归他自己了。' },
          ],
          effects: ['flag acromis_traded', 'world writ +2', 'rep wise +2', 'approval vezina -1', 'approval barry -1'],
          goto: 'a1_18',
        },
        fail: {
          text: [
            '令状是换来了。可阿克罗米斯签名之前，先写了三封信，一封比一封送得早。达梅里亚的旧贵族们都知道了，是谁拿他们的丑事去给法师换了权。',
            { if: 'party.barry', speaker: '巴里', text: '对不住。人脑子里的东西写成了字，就不归他自己了。' },
          ],
          effects: ['flag acromis_traded', 'world writ +2', 'rep wise +2', 'approval vezina -1', 'approval barry -1', 'rep moon -1'],
          goto: 'a1_18',
        },
      },
    ],
  },

  a1_18: {
    id: 'a1_18',
    title: '苏伦月的账',
    art: 'ck3_barry',
    loc: '安本科斯特 · 帐篷城',
    date: '1022年苏伦月',
    text: [
      '巴里在帐篷城摆了三张桌，桌子是拿门板搭的。羊是他自己掏钱买的，乳酪从三道卫运来，酒是卡斯坦挑的，所以兑了水。来的人比椅子多，站着吃的有一半。',
      '吃到一半，伊迪丝自己搬着一只凳子过来，挤到了你这一桌，坐下就不走了。巴里给她盛了一碗，她喝完，又把碗递了过来。',
      { if: 'flag.god_camp', text: '帐篷城还没散。席上一半的人是来排队的，有人隔着帐篷布喊你的名号。' },
      { if: '!is.god && party.liv', speaker: '卡斯坦', text: '我往东去。我爹倒在沼泽堡，我连那块地长什么样都不知道。你们谁跟我去，我给谁封官。' },
      { if: '!is.god && party.barry', speaker: '巴里', text: '我家那孩子等我回信。我得想想怎么写，他认的字还不多，我得挑他认得的。' },
      { if: 'is.god && party.liv', speaker: '卡斯坦', text: '神排在皇帝后头。先去打酒。打完了，我往东去看我爹倒下的地方，你也来。' },
      { if: 'is.god && party.barry', speaker: '巴里', text: '神吃不吃乳酪？我问真的，我带了三道卫的。你不吃，我就不知道往后该怎么给你留了。' },
      { if: '!is.god && party.vezina', text: '薇齐娜把本子翻到头一页，把你这半年的裁断从头念了一遍，一条没漏。' },
      { if: 'is.god && party.vezina', text: '薇齐娜把本子翻到头一页，念你这半年的裁断。念到一半，她在一行字上停住了。那行字写的是“神”，划掉了，旁边改成“要是”。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '普卢姆沃尔，{?flag.plumwall_plea:申辩收了|申辩没收}。月山，{?flag.aria_anoints:印上抹了阿丽娅的油|印上没抹阿丽娅的油}。月河，{?flag.emil_struck:那一条划掉了|那一条还在}。屠夫原，{?flag.field_done:四百零六座都埋回去了|还有人在守夜}。' },
      { if: 'party.vezina', speaker: '薇齐娜', text: '威克斯的孩子，{?flag.guardian_barry:归巴里带|}{?flag.guardian_crovan:归克洛万带|}{?flag.guardian_marion:归马里昂带|}{?flag.guardian_barons:归男爵们轮着带|}。阿克罗姆顿，{?flag.acromis_exposed:当众念了账|}{?flag.acromis_quiet:账在你怀里|}{?flag.acromis_traded:账换了一纸令状|}。就这些。我没漏。' },
      { speaker: '伊迪丝', text: '国王那个人，我管他叫糖袋子。他骑马从我们帐篷门口过，我管他要糖，他把一整包都给了。他自己也不知道为什么给。' },
      { if: 'is.god', speaker: '伊迪丝', text: '你跟我一样了。说什么，别人都给。你吃饭的时候，他们是不是也不敢先动筷子？' },
      '东边来了两封信。一封是乌霜领的：还围着，城里开始吃马了。另一封的封蜡是南王国的，福阿哈尔公爵亚科布写的。字很好看，只有一句：很乐意协助监誓人。',
    ],
    first: ['level 4', 'rest long', 'quest witness stage 2', 'quest edith stage 2'],
    next: 'a2_01',
  },
};
