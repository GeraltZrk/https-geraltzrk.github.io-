// 序章乙：伊贝瓦尔、威克斯（BIBLE §11.1、§15.3、§16.2）
// 自检：node tools/check-part.mjs s1022 prologues_b.js
//
// ── 提纲（同 §11.1 对过）────────────────────────────────────────────
// 伊贝瓦尔 · 船上长老
//   p_ibevar_01 两条命      瓦多塞德。死了一个哨兵，凶手是法拉内安的伐木工，锁在柱子上。亲王叫你去看了再回话。
//                           枢纽：history 11（那条界没人量过）、insight 12（他在等人告诉他出了什么事）、
//                           [习武] 看伤、[施法者] arcana 12、[旧礼] 祖器。少见搭配的交代在这里。→ 02
//   p_ibevar_02 雪橇        林界。圆木底下一具起出来的尸首。立 saw_sleeper（保证）。天黑前只够细看一样：
//                           survival 11 / investigation 12 / medicine 12 / [旧礼] / [矮人] / [鹰身女妖]。成了得“凭据”。→ 03
//   p_ibevar_03 法兰的人    perception 11 数人；persuasion 12 劝退（前两场的发现给优势和加值）→ 04；败或者动手 → 03b；[神] 叫他们回去。
//   p_ibevar_03b 工地夜斗   village_militia×3，我方哨兵一名。special：敲排钟、踹脚手架。输了人被抢走又追回。→ 04
//   p_ibevar_04 亲王问你    三选一必立其一：p_ibevar_blood / weregild / held（另有 [贤者门下] [人类] 的写法）。神格钩子。→ 04b
//   p_ibevar_04b 十一口箱子 亲王交代差事：看看这张纸值不值得开箱。→ 05
//   p_ibevar_05 船板        精灵码头。persuasion / performance 12 救那块刻着船名的板；买；附和；[矮人]。店。→ 06
//   p_ibevar_06 登记桌      书记官把“塔·卢纳泰因”写错两回。所属写什么。level 2、印、任务、图鉴。→ a1_01
// 威克斯 · 幼主之家
//   p_wex_01 路沟           §11.7 样例①开场。athletics 10 抬、religion 11 看束腰、[旧礼] 路祷。神格钩子（没有 [神] 选项）。→ 02
//   p_wex_02 公爵的小马     巴里入队。篮子，小马，字条。收马（animal 10，巴+1）或者先不收（wex+1）。→ 03
//   p_wex_03 第十二具       军团牌。①束腰同葬（religion 11，败了 wex−1）②扔出去 ③墙外单立一座 ④[旧礼]。标记照 §12.1。→ 04
//   p_wex_04 扒束腰的       流民三个。巴里请吃饭（persuasion 11，成了少一个）、动手、[游荡者] sleight 11、[蓝宝石] 单挑、[神]。
//                           输了丢三副束腰。引擎的 special 没法只撂倒一个人，所以“请吃饭”放在开打之前。→ 04b / 05
//   p_wex_04b 光脚的        打赢以后怎么处置：放、交给玛格达、[旧礼] 雇去挖坟、[蓝宝石] 起誓。→ 05
//   p_wex_05 十六座空坟     屠夫原。立 saw_empty_graves、开 sixteen_graves。investigation / survival / religion 各 11，[贤者门下]。→ 06
//   p_wex_06 登记桌         三封“谁都行，除了某某”的信，果酱手印。level 2、印、任务、图鉴。→ a1_01
// 本段自用的标记都以 pbx_ 开头，只在本文件里设、本文件里读。
// ────────────────────────────────────────────────────────────────

// 五个序章的末场是同一张桌子、同一个人：拱廊，登记册，炭盆上的蜡锅，跺脚，“名字怎么写”问两遍，“下一位”。
const DESK = '旧斗兽场的拱廊底下摆着一张桌子。桌上一本登记册，一只炭盆，盆上坐着一口小锅，锅里的蜡化了一半。书记官在桌子后头跺脚。';
const DESK_GOD = { if: 'is.god', text: '写到一半，他抬头看了你一眼，低头，又抬头看了一眼。然后他把蜡锅往自己那边挪了半尺，接着写。' };
const SEAL_OUT = [
  '他从锅里舀了一勺蜡，浇在你那一行的末尾，拿一枚铜柄的印按下去，数到三才提起来。印擦干净，递给你。柄上缠着麻绳，还是热的。',
  { speaker: '书记官', text: '明天在场子里当众再发一遍誓。印面别拿手摸，沾了油盖不清。下一位。' },
];
const JAM = [
  { speaker: '书记官', text: '登记册上不许有吃的。' },
  { speaker: '巴里', text: '对不住，已经有了。' },
];
const PLANK_LOST = '板子下了锯坑。你捡到一把锯末，还有锯剩的一个角，巴掌大，上头只剩半个字。';

// 路沟边那一架的两样把式（三个人和两个人的打法共用）。
const DITCH_SPECIALS = [
  {
    id: 'ditch', name: '把他们往沟里撵', desc: '沟沿的泥是下午翻车时搅烂的',
    check: { skill: 'athletics', dc: 11 },
    success: { text: '头一个踩上那摊烂泥就滑了下去，伸手一抓，把后面的也带了下去。', dmgAll: '1d6', type: 'bludgeoning' },
    fail: { text: '你自己先踩进了那摊烂泥。', selfDmg: '1d4' },
  },
  {
    id: 'horn', name: '吹赶车的牛角号', desc: '矛兵就在前头村里，听得见',
    check: { skill: 'performance', alt: ['intimidation'], dc: 11 },
    success: { text: '号声传出去老远。村子那头有人应了一嗓子，听着像矛兵。几个流民都回头去看。', applyAll: { cond: 'frightened', turns: 2 } },
    fail: { text: '号嘴里灌了泥，只出来一口气。' },
  },
];

export const SCENES = {

  // ══════════════════════════ 伊贝瓦尔 ══════════════════════════

  p_ibevar_01: {
    id: 'p_ibevar_01',
    title: '两条命',
    chapter: '序章 · 印',
    art: 'load_27',
    loc: '凄苦谷 · 瓦多塞德',
    date: '1022年卡斯坦月1日',
    text: [
      '瓦多塞德盖在卡德斯特人的废墟上。旧柱子还立着，精灵在柱子之间拉了船帆当屋顶。白银矮人的匠师赫哈鲁克拿一根打了结的绳子量城墙，这是第四遍。',
      '死的是个哨兵，叫埃文达尔，躺在一扇舱门板上，盖着他自己的斗篷。杀他的人锁在第三根柱子上：人类，法拉内安来的伐木工，手上的松脂还没洗掉。',
      { if: 'is.elf', text: '那个哨兵你认得。月火号右舷长大的孩子，上岸头一个月，他晕地。' },
      { if: "race == 'human'", text: '你是法拉内安那边迁过来的垦户，三年前归了亲王的法。柱子上那个人的口音，同你老家只隔一条河。' },
      { if: 'is.dwarf', text: '你是跟着赫哈鲁克来砌墙的白银矮人。亲王点你，理由只有一句：你两边都不是。' },
      { if: "race == 'harpy'", text: '你是雇来送信的。亲王说送信的眼睛好，记性也好，顺手把这件事派给了你。' },
      { if: "race in ['half_elf', 'halfling', 'gnome']", text: '你不是月火号上下来的人。亲王的营地里，像你这样的一只手数得完。他要的就是这个：你说的话，人类那边肯听。' },
      '伊贝尼昂亲王坐在一口没开过的箱子上，离死人五步，离活人也是五步。',
      { speaker: '伊贝尼昂', text: '一条命是我的人。另一条眼下也攥在我手里。你去看，看完回来告诉我怎么办，你怎么答，我就怎么写。' },
      { if: "race == 'elf' && class == 'wizard'", text: '今早报丧的那一声钟是你敲的。排钟脆，你只敢碰最小的那一口。' },
      { if: "race == 'elf' && class == 'rogue'", text: '亲王多看了你一眼。你在精灵码头的酒馆里混了二十年，他到今天也没想好这算不算本事。' },
    ],
    first: [
      { if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] },
      'codex ibenion',
    ],
    choices: [
      {
        text: '问赫哈鲁克，那条界到底在哪',
        once: true,
        check: { skill: 'history', dc: 11, mods: [{ if: 'is.dwarf', n: 2, why: '同行说话省事' }] },
        ok: {
          text: [
            { speaker: '赫哈鲁克', text: '条约，一份，我读过两遍。上头写：争议之地，南半归伊贝瓦尔。南半到哪棵树为止，没写。' },
            { speaker: '赫哈鲁克', text: '城墙我量了四遍。那条界，没人请我量过一遍。你们为一条没人量过的线，死了一个，锁了一个。' },
          ],
          effects: ['flag pbx_ibevar_line'],
        },
        fail: {
          text: [
            '你说界在河边那道矮墙。他把绳子一圈一圈绕回手上。',
            { speaker: '赫哈鲁克', text: '那是卡德斯特人的羊圈，一百五十年没圈过羊了。你打断了我一趟绳子，重量这一段，工钱两枚金冠。' },
          ],
          effects: ['gold -2'],
        },
      },
      {
        text: '走到柱子跟前，看看那个伐木工',
        once: true,
        check: { skill: 'insight', dc: 12, mods: [{ if: "race == 'human'", n: 1, why: '听得懂他的乡音' }] },
        ok: {
          text: [
            '他没喊冤，也没求饶。每走过来一个人，他就盯着那人的嘴看。',
            { speaker: '伐木工', text: '大人，他们说我杀了人。我杀的是谁？' },
            '他在等，等随便哪个人告诉他出了什么事。',
          ],
          effects: ['flag pbx_ibevar_waiting'],
        },
        fail: {
          text: [
            '你凑得太近。他猛地一挣，铁链甩过来，抽在你手背上。',
            { speaker: '看守', text: '人类撒谎都是这一套，先装傻，再动手。上回……算了，人类哪有什么上回。' },
          ],
          effects: ['hp -2'],
        },
      },
      {
        text: '掀开斗篷，看哨兵身上的伤',
        tag: '习武',
        if: 'is.martial',
        once: true,
        effects: ['flag pbx_ibevar_wound'],
        result: '斗篷底下只有一处伤。斧子从左肩劈进去，到胸骨为止，没有第二下。劈柴的人才这么下斧子：眼睛盯的是纹路，看不见人。',
      },
      {
        text: '摸一摸伐木工身上有没有法术的旧茬',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        check: { skill: 'arcana', dc: 12, mods: [{ if: "faction == 'staff'", n: 2, why: '贤者门下教过这一手' }] },
        ok: {
          text: '他后颈上有铜钱大的一块是凉的。那是别人的法术留下的旧茬，少说有六七年了。你一按，他打了个哆嗦，自己也不知道为什么。',
          effects: ['flag pbx_ibevar_trace'],
        },
        fail: {
          text: '你的手刚搭上他后颈，他整个人往后一撞，后脑勺磕在柱子上。你的指头一直麻到手肘，半天攥不成拳头。',
          effects: ['hp -1'],
        },
      },
      {
        text: '把哨兵的祖器放回他手里',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['rep elders +1'],
        result: '他的祖器是一枚鲸骨织网梭，他家在船上补了九百年的网。你把梭子压进他手心，替他合上手指。看守的精灵把头低了下去。',
      },
      { text: '去林界，看出事的地方', goto: 'p_ibevar_02' },
    ],
  },

  p_ibevar_02: {
    id: 'p_ibevar_02',
    title: '雪橇',
    art: 'ev_dark_forest',
    loc: '瓦多塞德以南 · 林界',
    text: [
      '林界上没有界桩。雪地里一道雪橇印从北边过来，到一棵放倒的冷杉跟前停住。埃文达尔是在这儿拦的他，雪上的血已经冻黑了。',
      '雪橇上码着六根圆木。赫哈鲁克的徒弟拿指节挨根敲，敲到第四根，声音不对。圆木底下裹着一具尸首，脚踝上系着法拉内安坟地的木牌。',
      { speaker: '另一个哨兵', text: '我喊他站住，他没停，也没跑。埃文达尔去拽雪橇绳，他抡了一斧子，眼睛都没往这边转。上回我见人这么走路，是船上梦游的孩子。' },
      { speaker: '伐木工', text: '我是来砍树的。天没亮出的门。' },
      '他看那具尸首，同看别人家的东西一样。',
      { if: 'flag.pbx_ibevar_waiting', text: '说完他又去看你的嘴，等你把后面的事告诉他。' },
      '冬天日头短。天黑以前，你只够细看一样。',
    ],
    first: ['flag saw_sleeper'],
    choices: [
      {
        text: '顺着雪橇印往回走一段',
        check: { skill: 'survival', dc: 11, mods: [{ if: 'is.nature', n: 2, why: '认脚印是本行' }] },
        ok: {
          text: '印子笔直朝南，一步没绕。过沟不绕，过倒木不绕，有一处是从冻住的溪面上硬拖过去的，冰都压裂了。赶路的人不这么走，拉着重东西的人更不这么走。',
          effects: ['flag pbx_ibevar_proof'],
          goto: 'p_ibevar_03',
        },
        fail: {
          text: [
            '你走出半里地，一脚踩穿了沟上的冰，水没到膝盖。',
            { speaker: '徒弟', text: '印子，一道，朝南，直的。我站在这儿就看见了。你那条裤子我不管。' },
          ],
          effects: ['hp -2'],
          goto: 'p_ibevar_03',
        },
      },
      {
        text: '把圆木卸下来，一根一根看',
        check: { skill: 'investigation', dc: 12 },
        ok: {
          text: '六根圆木的茬口都是灰的，裂了细纹，起码晾过一冬。他今天一棵树也没砍。木头是从柴垛上搬来的，码在上头，为的是遮住底下那一位。',
          effects: ['flag pbx_ibevar_proof'],
          goto: 'p_ibevar_03',
        },
        fail: {
          text: [
            '捆木头的绳结冻死了。你同它较了半个钟头的劲，天黑透了才卸下头一根。',
            { speaker: '徒弟', text: '六根，都是旧木头。我敲的时候就听出来了，你没问。' },
          ],
          effects: ['flag pbx_ibevar_late'],
          goto: 'p_ibevar_03',
        },
      },
      {
        text: '掀开裹布，看这人死了多久',
        check: { skill: 'medicine', dc: 12 },
        ok: {
          text: '裹布底下的人死了一年往上，皮贴着骨头，指甲缝里是坟土。他是从坟里起出来的。杀人藏尸的不费这个事，盗墓的只拿东西，不会连人一起拉走。',
          effects: ['flag pbx_ibevar_proof'],
          goto: 'p_ibevar_03',
        },
        fail: {
          text: [
            '你说是上个月死的。',
            { speaker: '徒弟', text: '我爷爷，埋了四十年，去年迁坟起出来。比这位新鲜。' },
            '你把裹布往回掖，冻硬的布边在你手上拉了一道口子。',
          ],
          effects: ['hp -1'],
          goto: 'p_ibevar_03',
        },
      },
      {
        text: '看脚踝上那个结是谁打的',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: ['flag pbx_ibevar_proof'],
        result: '木牌是拿收殓的结系上去的，三绕一扣，人类的祭司都这么打。这人下葬的时候，有人正经给他办过礼。后来又有人把他从办过礼的坟里请了出来。',
        goto: 'p_ibevar_03',
      },
      {
        text: '飞起来，从上头看那道雪橇印',
        tag: '鹰身女妖',
        if: 'is.flyer',
        effects: ['flag pbx_ibevar_proof'],
        result: '从树梢上头看，那道印子是一根拉直的线。它从法拉内安的坟地出来，过沟，过溪，过倒木，一步没绕，到这棵冷杉跟前才断。你顺着它往南看，前头是沼地的方向。',
        goto: 'p_ibevar_03',
      },
      {
        text: '看圆木的茬口',
        tag: '矮人',
        if: 'is.dwarf',
        effects: ['flag pbx_ibevar_proof'],
        result: [
          '木头同石头一个道理，新茬白，旧茬灰。这六根全是灰的，晾过一冬。',
          { speaker: '徒弟', text: '对。六根，旧的。他今天没砍树，木头是拿来压东西的。' },
        ],
        goto: 'p_ibevar_03',
      },
    ],
  },

  p_ibevar_03: {
    id: 'p_ibevar_03',
    title: '法拉内安的人来了',
    loc: '瓦多塞德 · 工地',
    text: [
      '天黑以后，城外来了十来支火把。法拉内安的乡勇，矛杆是新削的。领头的是个磨坊管事，腰上别着一杆秤。',
      { if: 'flag.pbx_ibevar_late', text: '你回来得晚。他们已经在城门口嚷了半个钟头，嗓子都嚷开了。' },
      { speaker: '管事', text: '马丁·法兰大人的话：托马斯是法拉内安的人，在沼泽堡替同盟扛过矛。要杀要剐，回法拉内安办。你们船上的规矩，管船上的人。' },
      { if: "race == 'human'", text: '这个管事你见过。他在你老家的磨坊收过你爹的麦子，秤杆压得很低。' },
      '亲王的哨兵来了四个，弓还没上弦。赫哈鲁克把灰浆桶往脚手架底下挪了挪。排钟挂在工地当中的木架上，最小的一口只有拳头大。',
      { if: 'is.god', text: '火把照到你身上，前排有两个人把矛尖放低了。他们自己没觉出来。' },
    ],
    choices: [
      {
        text: '先数一数火把后头有多少人',
        once: true,
        check: { skill: 'perception', dc: 11 },
        ok: {
          text: '十一支火把。穿皮甲的只有三个，剩下的是庄户人，有一个把矛拿反了。管事每说一句，都要回头看一眼，看他的人还在不在。',
          effects: ['flag pbx_ibevar_counted'],
        },
        fail: {
          text: '你探出半个身子去数，一块冻土飞过来，正砸在额角上。数到几，你忘了。',
          effects: ['hp -1'],
        },
      },
      {
        text: '站到门洞里，叫他们等明天的判词',
        check: {
          skill: 'persuasion', alt: ['intimidation'], dc: 12,
          adv: 'flag.pbx_ibevar_line', dis: 'flag.pbx_ibevar_late',
          mods: [
            { if: 'flag.pbx_ibevar_proof', n: 2, why: '把雪橇拖到火把底下' },
            { if: 'flag.pbx_ibevar_counted', n: 1, why: '他们只有三个穿甲的' },
            { if: "race == 'human'", n: 1, why: '同乡的口音' },
          ],
        },
        ok: {
          text: [
            { if: 'flag.pbx_ibevar_proof', text: '你叫人把雪橇拖到火把底下，掀开裹布。管事凑过去看了脚踝上的木牌，把火把放低了。' },
            { if: 'flag.pbx_ibevar_proof', speaker: '管事', text: '这是磨坊西头的老鞋匠。去年收完麦子埋的，棺材是我抬的。' },
            { if: '!flag.pbx_ibevar_proof', text: '你没提条约，只问了他一句：人带回去，法兰大人打算怎么同死者家里交代。他答不上来。' },
            { speaker: '管事', text: '明天。我在城外等到明天日落，多一刻也不等。' },
          ],
          effects: ['flag pbx_ibevar_talked'],
          goto: 'p_ibevar_04',
        },
        fail: {
          text: [
            '你刚说到“条约”两个字，后排有人笑了。',
            { speaker: '管事', text: '条约是在舞会上签的。我们大人没接到帖子。' },
          ],
          goto: 'p_ibevar_03b',
        },
      },
      { text: '叫哨兵上弦，把人挡在工地外头', goto: 'p_ibevar_03b' },
      {
        text: '走到火把前头，叫他们回去',
        tag: '神',
        if: 'is.god',
        effects: ['var god_acts +1', 'rep moon -1', 'flag pbx_ibevar_awed'],
        result: [
          '你走过去，说了一句“回去”。前排的矛一杆一杆戳在了地上。管事的秤从腰上滑下来，他没去捡。',
          '他们退了，可没走远，城外的雪地里跪了一排火把。精灵的哨兵没跪。四个人都在看你，弓还是没上弦。',
        ],
        goto: 'p_ibevar_04',
      },
    ],
  },

  p_ibevar_03b: {
    id: 'p_ibevar_03b',
    title: '工地夜斗',
    text: [
      '头一杆矛捅翻了灰浆桶。赫哈鲁克骂了一句矮人话，很长，中间夹着一个数目。',
      { speaker: '管事', text: '把人交出来，我们就走。桶钱另算。' },
      '哨兵上了弦。锁伐木工的那根柱子，离最近的火把只有十步。',
    ],
    combat: {
      title: '工地夜斗',
      intro: '乡勇站得太挤，三杆矛一齐往前捅，捅的是同一个地方。',
      enemies: [{ id: 'village_militia', n: 3, name: '法拉内安乡勇' }],
      allies: [{ id: 'archer', name: '亲王的哨兵' }],
      xp: 60,
      specials: [
        {
          id: 'carillon', name: '敲响排钟', desc: '月火号的钟一响，没听过的人会愣住',
          check: { skill: 'performance', alt: ['arcana'], dc: 11, adv: 'is.elf' },
          success: { text: '你敲的是船上报更的调子。钟声又细又尖，往骨头缝里钻。乡勇没听过这种动静，一个个攥着矛站住了。', applyAll: { cond: 'stunned', turns: 1 } },
          fail: { text: '你手重了。最小的那口钟哑了一声，裂开一道缝。船上带下来的东西，裂一口就少一口。', effects: ['rep elders -1'] },
        },
        {
          id: 'scaffold', name: '踹倒脚手架', desc: '让木板和半桶灰浆砸在他们头上',
          check: { skill: 'athletics', dc: 11 },
          success: { text: '脚手架朝火把那头倒过去，木板、绳子和半桶灰浆一齐落下来。赫哈鲁克在后头报了个数，是赔偿的数。', dmgAll: '1d6', type: 'bludgeoning' },
          fail: { text: '架子比看上去结实。它晃了晃，掉下来一块板，砸的是你。', selfDmg: '1d4' },
        },
      ],
      win: { effects: ['flag pbx_ibevar_won'], goto: 'p_ibevar_04' },
      lose: { effects: ['flag pbx_ibevar_lost'], goto: 'p_ibevar_04' },
    },
  },

  p_ibevar_04: {
    id: 'p_ibevar_04',
    title: '亲王问你',
    loc: '瓦多塞德 · 亲王帐',
    date: '1022年卡斯坦月2日',
    text: [
      '亲王的帐子是月火号的一面旧帆，四角压着卡德斯特人的石础。他的行李靠帐壁码着，十一口箱子，箱绳的结上落了灰。',
      { if: 'flag.pbx_ibevar_lost', text: '你是在匠棚里醒的，后脑勺上一个包。法兰的人昨夜抢走了伐木工，走出不到五里，又叫亲王的骑哨追了回来。眼下他锁在帐外，换了一根柱子。' },
      { if: 'flag.pbx_ibevar_won', text: '法兰的人退回了河对岸，丢下两杆矛。赫哈鲁克的账今早送到了：灰浆一桶，脚手架一副，工时照算。' },
      { if: 'flag.pbx_ibevar_talked', text: '法兰的人在城外扎了营，说等到日落。' },
      { if: 'flag.pbx_ibevar_awed', text: '法兰的人在城外的雪地里跪了一夜。天亮又来了二十几个，是听了信从河对岸赶来的。他们不打听亲王怎么判，打听的是你怎么判。这话已经有人往月山那边捎了。' },
      '伊贝尼昂面前摊着一块帆布，手边一瓶墨。他写法，用的是记航海日志的老办法：先记日子，再记风向，然后才是事。',
      { speaker: '伊贝尼昂', text: '卡斯坦月二日，北风，有雪。往下该写什么，你说。' },
      { if: 'is.god', speaker: '伊贝尼昂', text: '慢着。上回神在场的时候，我们丢了一块大陆。那天你在哪儿？' },
      { if: 'is.god', text: '他没等你答，把笔在墨瓶口上刮了刮。' },
      { if: 'is.god', speaker: '伊贝尼昂', text: '你的答复，我照样写成法。可我不谢你。' },
    ],
    first: [{ if: 'is.god', then: ['rep elders -1'] }],
    choices: [
      {
        text: '一命抵一命，照船上的规矩办',
        effects: ['flag p_ibevar_blood', 'rep elders +1'],
        result: [
          '他写得很快，写完把笔横在墨瓶上。',
          { speaker: '伊贝尼昂', text: '月火号上回用这一条，是为一桶淡水。日志上记的是六百年前。' },
          '帐外有人去解柱子上的铁链，换了一根麻绳。{?flag.pbx_ibevar_waiting:伐木工叫人带走的时候还在问，他杀的到底是谁。|伐木工没出声。}',
          { if: 'flag.pbx_ibevar_talked', text: '城外那些人等到了日落。等来的是一卷帆布。' },
        ],
        goto: 'p_ibevar_04b',
      },
      {
        text: '收赔命钱，把人交还法拉内安',
        effects: [
          'flag p_ibevar_weregild',
          { if: 'flag.pbx_ibevar_lost', then: ['rep elders -2'], else: ['rep elders -1'] },
          'rep moon +1',
        ],
        result: [
          { speaker: '伊贝尼昂', text: '一个精灵活四百年，一个人活六十年。照寿数折，这笔钱法兰卖了磨坊也出不起。' },
          '他写了个数目，是法兰出得起的。',
          { speaker: '伊贝尼昂', text: '差的那一截算我让的。你替我记着，他们不会记。' },
          { if: 'flag.pbx_ibevar_lost', text: '帐门口的哨兵没看你。昨夜人是从你手上丢的，今天又是你开口说放。' },
          { if: 'flag.pbx_ibevar_talked', text: '管事在城门口把钱点了三遍，点完把秤别回腰上，隔着老远朝你点了下头。' },
        ],
        goto: 'p_ibevar_04b',
      },
      {
        text: '自己垫头一笔赔命钱，把同乡领出来',
        tag: '人类',
        if: "race == 'human'",
        cost: { gold: 10 },
        effects: ['flag p_ibevar_weregild', 'rep moon +1'],
        result: [
          '你把钱袋搁在帆布边上。亲王看了看钱袋，又看了看你。',
          { speaker: '伊贝尼昂', text: '归了我的法的人，替没归的人垫钱。这一条我也写上，往后有人照着办，我不拦。' },
          '托马斯解下来的时候腿是软的。他问你的头一句话是，他杀的到底是谁。',
        ],
        goto: 'p_ibevar_04b',
      },
      {
        text: '先押着，等一个验得出他当时做没做主的人',
        effects: [
          'flag p_ibevar_held', 'rep wise +1',
          { if: '!flag.pbx_ibevar_proof && !flag.pbx_ibevar_trace && !flag.pbx_ibevar_waiting && !flag.pbx_ibevar_wound', then: ['rep elders -1'] },
        ],
        result: [
          { if: 'flag.pbx_ibevar_proof || flag.pbx_ibevar_trace || flag.pbx_ibevar_waiting || flag.pbx_ibevar_wound', text: '你把这两天看见的一样一样说了。他听完，拿笔杆在帆布上点了一下，没落墨。' },
          { if: '!flag.pbx_ibevar_proof && !flag.pbx_ibevar_trace && !flag.pbx_ibevar_waiting && !flag.pbx_ibevar_wound', speaker: '伊贝尼昂', text: '你什么也没看出来，就叫我等。行，我等得起。帐外那些人等不等得起，你去同他们说。' },
          { speaker: '伊贝尼昂', text: '验得出的人，我只认一位，在达梅里亚的宫里，缺一条胳膊一条腿。他是月火号上下来的，这倒省了我一封信的客气话。' },
          '他写了三个字：押，待验。底下空着一行，留着填日子。',
        ],
        goto: 'p_ibevar_04b',
      },
      {
        text: '押着，并且写明：验心的人由加里昂指派',
        tag: '贤者门下',
        if: "faction == 'staff'",
        effects: ['flag p_ibevar_held', 'rep wise +2', 'rep elders -1'],
        result: [
          { speaker: '伊贝尼昂', text: '加里昂是我船上下来的，可他如今吃的是达梅里亚国王的饷。你要我把自己墙里的事，写给别人的宫廷法师来定。' },
          '他还是写了。写完在后头添了四个字：仅此一例。',
        ],
        goto: 'p_ibevar_04b',
      },
    ],
  },

  p_ibevar_04b: {
    id: 'p_ibevar_04b',
    title: '十一口箱子',
    text: [
      '他等墨干了，把帆布卷起来，拿一截箱绳扎好。然后头一回正眼看你。',
      { speaker: '伊贝尼昂', text: '上回有人劝我们上岸，说的是只待一个冬天。那是二十二年前。' },
      '他拿下巴指了指帐壁那一排箱子。',
      { speaker: '伊贝尼昂', text: '人类派人拿着蜡印去各国看誓，伊贝瓦尔也得出一个。你去安本科斯特领印，替我看看，他们那张纸值不值得我把这些打开。' },
      '手令你早揣着了：一块船帆布，折了三折，上头是他的字。你走到帐门口，他又添了一句。',
      { speaker: '伊贝尼昂', text: '要是不值，我们还有船。虽说码头上已经有人在拆了。' },
      { if: 'is.god', text: '帐门口站岗的两个年轻精灵一直在看你，有一个连矛都忘了扶。你出帐的时候，他们往前跟了半步。亲王看见了。' },
    ],
    next: 'p_ibevar_05',
  },

  p_ibevar_05: {
    id: 'p_ibevar_05',
    title: '月火号的船板',
    art: 'ck3_landing',
    loc: '安本科斯特 · 精灵码头',
    date: '1022年埃斯玛月1日',
    shop: {
      name: '码头的船具商',
      blurb: '从前管月火号的缆绳库。如今什么都卖，就是不卖缆绳。',
      stock: ['healing_potion', 'antidote', 'shortbow', 'leather'],
    },
    text: [
      '月火号搁在安本科斯特的港湾里，从船头走到船尾有大半里地。它不会再出海了。船舷底下开了个锯坑，改了名的族人两个一组，把船板一块一块往下拆。',
      '眼下轮到的这一块刻着船名，字有一掌高。一千年的海盐把刻痕腌成了白的。',
      '锯坑边上有个少了两根手指的老兵在记数。白银大队的，如今说一口达梅里亚话。',
      { if: 'is.elf', text: '他先喊了你一声，喊的是你在船上的小名。上岸以后，没人这么叫过你。' },
      { speaker: '老兵', text: '这块给酒馆做柜台，橡木的，够长。你们亲王的行李开了没有？' },
      { if: "race == 'elf' && class == 'wizard'", text: '排钟的旧钟架也在码头上，正往箱子里装，要运去瓦多塞德。横梁上有一圈茶杯烫的印，是你守钟那一百年里烫的。' },
      { if: "race == 'elf' && class == 'rogue'", text: '码头酒馆的老板娘隔着两条船认出了你，喊的是你的外号，后头跟着一个数目。' },
      { if: 'is.god', speaker: '老兵', text: '我这名字是在月神殿里改的，祭司说神不下场。你别站在这儿。你往这儿一站，我那个名就白改了。' },
    ],
    first: ['rest long', 'codex anbenncost', 'codex elves_fleet'],
    choices: [
      {
        text: '劝他把这一块留下',
        check: { skill: 'persuasion', dc: 12, mods: [{ if: 'is.elf', n: 1, why: '同一条船上下来的' }] },
        ok: {
          text: [
            '你没提亲王。你问他，改名那天，旧名字他是怎么处置的。他拿炭笔的那只手停了。',
            { speaker: '老兵', text: '……柜台我另给他们找一块。酒馆不认字。' },
            '他叫人把板子抬到一边，等伊贝瓦尔的车来拉。又拿凿子从板头起下巴掌大的一角，递给你。',
            { speaker: '老兵', text: '这一角你揣着。见了船上的长老，替我带一句：我没忘。' },
          ],
          effects: ['item +lunatein_plank', 'rep elders +1'],
          goto: 'p_ibevar_06',
        },
        fail: {
          text: [
            { speaker: '老兵', text: '不出海的船就是一堆木料。这话是穆纳斯说的还是我说的，我记不清了。' },
            PLANK_LOST,
          ],
          effects: ['item +lunatein_plank', 'rep elders -1'],
          goto: 'p_ibevar_06',
        },
      },
      {
        text: '站在锯坑边上，唱起锚的号子',
        check: { skill: 'performance', dc: 12, adv: 'is.elf || is.sailor' },
        ok: {
          text: [
            '你起了个头。锯坑里先停了一把锯，接着又停了一把。唱到第三句，老兵跟上了，词他一个没忘。',
            '唱完，拉锯的把那块板抬到了一边。老兵拿凿子从板头起下巴掌大的一角，塞进你手里，没看你。',
          ],
          effects: ['item +lunatein_plank', 'rep elders +1'],
          goto: 'p_ibevar_06',
        },
        fail: {
          text: [
            '你起的调高了，第二句就劈了。锯坑里有人笑，有人接着拉锯。',
            PLANK_LOST,
          ],
          effects: ['item +lunatein_plank', 'rep elders -1'],
          goto: 'p_ibevar_06',
        },
      },
      {
        text: '照木料的价，把这一块买下来',
        cost: { gold: 10 },
        effects: ['item +lunatein_plank'],
        result: [
          { speaker: '老兵', text: '十个金冠。柜台我另找一块，酒馆不认字。' },
          '他叫人把板子抬到一边，从板头凿下巴掌大的一角给你当收条。自己船的名字，你是花钱从自己人手里买回来的。',
        ],
        goto: 'p_ibevar_06',
      },
      {
        text: '告诉他这块木头值多少',
        tag: '矮人',
        if: 'is.dwarf',
        effects: ['item +lunatein_plank', 'rep elders +1'],
        result: [
          '千年的海橡木，盐吃透了，虫不蛀，火不爱烧。你报了个数，是酒馆柜台的四十倍。',
          { speaker: '老兵', text: '……那它不能当柜台。' },
          '板子抬到了一边，等伊贝瓦尔的车。他凿下巴掌大的一角，抵你的估价钱。',
        ],
        goto: 'p_ibevar_06',
      },
      {
        text: '点点头：不出海的船，是该拆了',
        effects: ['item +lunatein_plank', 'rep elders -1', 'rep moon +1'],
        result: [
          '老兵看了你一会儿，把炭笔别到耳朵上。',
          { speaker: '老兵', text: '亲王的人里头，你是头一个这么说的。' },
          '板子下了锯坑。他把锯剩的一角扔给你，巴掌大，上头只剩半个字。',
          { speaker: '老兵', text: '带回去，给你们亲王压箱子。' },
        ],
        goto: 'p_ibevar_06',
      },
    ],
  },

  p_ibevar_06: {
    id: 'p_ibevar_06',
    title: '登记桌',
    loc: '安本科斯特 · 旧斗兽场拱廊',
    date: '1022年埃斯玛月2日',
    text: [
      DESK,
      { speaker: '书记官', text: '名字怎么写？……姓呢？' },
      '你说船上下来的人不用姓，只记船名。{?is.elf:|你不是船上生的，可亲王的人都记在船名底下。}他把冻住的笔尖伸到蜡锅上头烤了烤，写了一遍，划掉。又写了一遍，又划掉。',
      { speaker: '书记官', text: '塔，卢纳，泰因。末一个字上头那一撇，朝左还是朝右？劳驾，名字怎么写，再说一遍。' },
      DESK_GOD,
      '亲王的手令是一块帆布。他翻过来看了看背面，没找着印，拿镇纸压住了。下一栏是“所属”。',
    ],
    first: [
      'level 2',
      { if: 'item.witness_seal < 1', then: ['item +witness_seal'] },
      'quest witness start',
      'codex witnesses', 'codex anbenncost', 'codex treaty', 'codex sorcerer_war',
    ],
    choices: [
      {
        text: '所属写“伊贝瓦尔精灵国”，照条约的叫法',
        effects: ['rep moon +1'],
        result: [
          { speaker: '书记官', text: '精灵国，君主称亲王。条约上是这么排的，排在王国后头。' },
          ...SEAL_OUT,
        ],
        goto: 'a1_01',
      },
      {
        text: '所属写“月火号”',
        effects: ['rep elders +1'],
        result: [
          { speaker: '书记官', text: '所属是一条船。行，条约没说不许。' },
          '他在船名后头添了个括号，括号里写：泊于本港。',
          ...SEAL_OUT,
        ],
        goto: 'a1_01',
      },
      {
        text: '劝他两样都写上',
        check: { skill: 'persuasion', dc: 11, mods: [{ if: 'item.lunatein_plank >= 1', n: 1, why: '把那块船板搁在他桌上' }] },
        ok: {
          text: [
            '他数了数格子，把字写小了一号。',
            { speaker: '书记官', text: '一栏两样。往后有人问起，就说是您自己要的。' },
            ...SEAL_OUT,
          ],
          effects: ['rep moon +1', 'rep elders +1'],
          goto: 'a1_01',
        },
        fail: {
          text: [
            { speaker: '书记官', text: '一栏只许写一样。多占一行，纸钱一枚金冠。这是规矩，我也嫌它烦。' },
            '钱他收了，写的还是只有“伊贝瓦尔”。',
            ...SEAL_OUT,
          ],
          effects: ['rep moon +1', 'gold -1'],
          goto: 'a1_01',
        },
      },
    ],
  },

  // ══════════════════════════ 威克斯 ══════════════════════════

  p_wex_01: {
    id: 'p_wex_01',
    title: '路沟',
    chapter: '序章 · 印',
    loc: '边境地 · 去科塞顿的大路',
    date: '1022年卡斯坦月1日',
    text: [
      '一车尸首翻进了路沟。赶车的蹲下去数：十一具，都束着腰，硬邦邦的，好摆。福尔卡德大祭司是个半身人，踩着板凳才够得着车辕。他翻开账本。',
      { speaker: '福尔卡德', text: '屠夫原，四百零六座坟，四百零六块碑，束腰只发出去三百九十副。{pc}，你帮我算算，剩下十六个是谁埋的？' },
      '这是屠夫原迁出来的头一批。死了四十四年的人，今年才轮到上路。你去安本科斯特领监誓人的印，顺道押这一趟车到科塞顿。',
      { if: 'is.halfling', text: '你是大墓地的人。束腰这东西，你从小看到大。' },
      { if: 'is.elf', text: '你是精灵，学巴里·月华的样，在丘陵里落了户。赶车的背地里管你叫“另一个尖耳朵”。' },
      { if: "race == 'harpy'", text: '你是雇来送信的。几位摄政吵了三天，最后把这趟差事塞给了飞得最快的那个。' },
      { if: "race in ['dwarf', 'gnome', 'half_elf']", text: '你不是威克斯人。几位摄政正是为这个才点的你：你同哪一家都不沾亲。' },
      { if: "race == 'human' && class == 'barbarian' && bg == 'miner'", text: '赶车的认得你，全威克斯都认得你。他没提试炼山，只往你腿上看了一眼。' },
      { if: 'is.mortal', speaker: '福尔卡德', text: '不急着答。先吃块饼。' },
      { if: 'is.god', text: '问完，福尔卡德从板凳上下来，量了你的肩宽。量完，他把皮尺卷起来，塞回围裙兜里。' },
      { if: 'is.god', speaker: '福尔卡德', text: '你这样的，奈拉特那边没有尺寸。账还是得对，先吃块饼再答。' },
      { if: 'is.god', text: '账本你扫了一眼就对上了：碑有四百零六块，底下有人的只有三百九十座，多出来的十六座是空的。他等你往下说是谁挖的。你说不出。账你对得了，上个月的夜里你看不见。' },
      { if: 'is.immortal && !is.god', speaker: '福尔卡德', text: '你的事我听说了。人人都欠奈拉特一死，你那一笔我先记在账上，不催。吃块饼。' },
    ],
    first: [
      { if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] },
      'codex folcard', 'codex corset_burial',
    ],
    choices: [
      {
        text: '下沟，帮赶车的把人抬上来',
        once: true,
        check: { skill: 'athletics', dc: 10 },
        ok: {
          text: '束了腰的死人好抬，一头一个，同抬门板差不多。你同赶车的抬了十一趟。福尔卡德站在板凳上，上来一具，拿炭笔在账上点一下。',
          effects: ['rep wex +1'],
        },
        fail: {
          text: '第三具抬到一半，你脚下的冻泥塌了。死人没摔着，是你的腰替他垫了一下。福尔卡德叫你坐到车辕上去，往你手里塞了块饼。',
          effects: ['hp -2'],
        },
      },
      {
        text: '看看束腰是怎么束的',
        once: true,
        check: {
          skill: 'religion', dc: 11,
          mods: [{ if: 'is.halfling', n: 2, why: '大墓地的人' }, { if: "faction == 'rites'", n: 2, why: '旧礼的功课' }],
        },
        ok: {
          text: [
            '亚麻衬里，鲸骨撑条，背后十二个扣眼。束到第七个要停一停，念一遍死人的名字，再往下束。',
            { speaker: '福尔卡德', text: '站着上路的人，奈拉特先问名字，后问罪过。束腰是叫他站得住，好把名字答完。' },
          ],
          effects: ['flag pbx_wex_rite'],
        },
        fail: {
          text: [
            '有一副在沟里摔松了。你想替它紧一紧，手上使大了劲，啪的一声。',
            { speaker: '福尔卡德', text: '断了一根鲸骨，两枚金冠，我先记在账上。孩子，吃块饼，手就稳了。' },
            '你没让他记，当场掏了。',
          ],
          effects: ['gold -2'],
        },
      },
      {
        text: '替沟里这十一位补一句路祷',
        tag: '旧礼',
        if: "faction == 'rites'",
        once: true,
        effects: ['rep wex +1'],
        result: '翻了车，路祷就得从头念。你站在沟沿上念了十一遍，一遍一个名字，名字是福尔卡德照着账本报给你的。赶车的把帽子摘了。',
      },
      { text: '路那头有人牵着马过来了，迎上去', goto: 'p_wex_02' },
    ],
  },

  p_wex_02: {
    id: 'p_wex_02',
    title: '公爵的小马',
    art: 'ck3_barry',
    text: [
      '来的是个胖精灵，脸上一道旧疤，胳膊上挎一只带盖的篮子，手里牵着一匹矮脚马。他先走到沟边，朝那十一位点了十一下头，一位一下。然后才过来同你握手。',
      { speaker: '巴里', text: '对不住，对不住，我来晚了，琥珀溪的巴里。乳酪是三道卫的，酒是我自己窖里的，你们先垫一口。我们威克斯有句老话：死人不怪活人吃饭。' },
      '福尔卡德看了一眼那只篮子，把自己手里的饼揣回了围裙兜里。',
      { if: 'is.elf', text: '巴里看见你的耳朵，高兴得把篮子换了只手。' },
      { if: 'is.elf', speaker: '巴里', text: '又一个！丘陵里的尖耳朵，这下凑得齐一桌牌了。' },
      '马是给你的。鞍袋里有张字条，字写得很大，墨洇了两处：“监誓人发不发马？不发先骑我的。”落款画了一顶冠，画歪了。',
      { speaker: '巴里', text: '我家那孩子写的。他今年八岁，是公爵。马叫饼干，起名那天他正饿着。' },
      { if: 'is.small', text: '这匹马的个头，你骑正合适。巴里显然也想到了，忍着没说。' },
      { if: 'is.god', speaker: '巴里', text: '神吃不吃乳酪？吃就好办。我们威克斯还有句老话：肯坐下来吃的，都不算外人。' },
    ],
    first: ['companion +barry', 'codex barry', 'codex dyren'],
    choices: [
      {
        text: '问他，公爵是个什么样的孩子',
        once: true,
        effects: ['approval barry +1'],
        result: [
          { speaker: '巴里', text: '这个月底我生日，他要把三道卫送给我。那是座城堡。我同他说，八岁的人送礼，送块乳酪就很体面了。' },
          { speaker: '巴里', text: '他说乳酪他没有，城堡他有。这孩子说话，我有时候接不上。' },
        ],
      },
      {
        text: '掰一块乳酪，喝一口他的酒',
        once: true,
        effects: ['heal 1d6'],
        result: [
          '乳酪是硬的，有核桃味，酒是李子酿的。福尔卡德过来掰了一块，赶车的掰了两块。',
          { speaker: '巴里', text: '我爹娘没得早，是一船人轮着喂大的。上了岸，丘陵里的人也这么喂我。所以我见不得谁空着肚子干活。' },
        ],
      },
      {
        text: '骑上饼干，在字条背面给公爵回一句',
        check: { skill: 'animal', dc: 10, mods: [{ if: 'is.small', n: 2, why: '个头正合适' }] },
        ok: {
          text: [
            '饼干闻了闻你的手，没躲。你骑在马上，在字条背面写：发了，这匹就很好。巴里把字条叠了四折，放进贴身的兜里。',
            { speaker: '巴里', text: '他会把这张纸压在枕头底下。我替他先谢了。' },
          ],
          effects: ['approval barry +1'],
          goto: 'p_wex_03',
        },
        fail: {
          text: [
            '饼干等你坐稳了才尥的蹶子。回信你是坐在地上写的：发了，这匹很好，就是认生。',
            { speaker: '巴里', text: '对不住，对不住。它只让我家那孩子骑，这话我该早说。信我照带，他看了准高兴。' },
          ],
          effects: ['approval barry +1', 'hp -1'],
          goto: 'p_wex_03',
        },
      },
      {
        text: '让巴里先牵着：领印之前，监誓人不收礼',
        effects: ['rep wex +1'],
        result: [
          { speaker: '巴里', text: '对不住，是我想得不周全。那我替你牵着，你几时想骑几时骑。' },
          { speaker: '巴里', text: '回话我可不替你带。你自己同他说去，他问起人来不好糊弄。' },
        ],
        goto: 'p_wex_03',
      },
    ],
  },

  p_wex_03: {
    id: 'p_wex_03',
    title: '第十二具',
    text: [
      '把车扶正的时候，车板底下又滚出来一具。麻袋裹着，没有束腰，软塌塌地折在沟沿上。',
      '他脖子上一根皮绳，绳上一块铁牌：一面是黑龙，一面是番号，锈得只认得出一个“七”字。埃尔拉克的兵。978 年他死在屠夫原，同他杀的人埋进了一个坑，埋了四十四年。',
      { speaker: '赶车的', text: '那头的收殓人不肯给他束，也不敢扔，塞在车底下，说让大祭司定。' },
      { if: "race == 'halfling' && class == 'cleric'", text: '你顺手量了量他的肩宽。真要束的话，得用大一号的。' },
      { if: 'is.soldier', text: '这种牌子你见过。发牌的时候说的是人在牌在，没说人不在了牌归谁。' },
      '押车的是玛格达夫人手下的两个矛兵。年长的那个往地上啐了一口。',
      { speaker: '矛兵', text: '我爷爷就在这车上，哪一具我说不上。你们要让屠夫的兵挨着他站？' },
      { if: 'party.barry', speaker: '巴里', text: '我们威克斯有句老话：坟要挖得比恨深。我是精灵，这话我听着也在理。' },
      { speaker: '福尔卡德', text: '我定了，是大墓地的规矩。领印的人定了，往后各国碰上这种事，都得照着问一句。{pc}，你来。' },
    ],
    choices: [
      {
        text: '给他束上腰，同威克斯人一道迁葬',
        check: {
          skill: 'religion', dc: 11, party: true, adv: 'flag.pbx_wex_rite',
          mods: [{ if: 'rep.wex >= 4', n: 1, why: '威克斯人认你' }],
        },
        ok: {
          text: [
            '你把道理讲了一遍，讲的是束腰，没讲那场仗。',
            { speaker: '福尔卡德', text: '奈拉特先问名字，后问罪过。问罪过是他的事，轮不到车上的人替他问。' },
            '矛兵没再开口。他走到车那头去了，背对着你们。',
          ],
          effects: ['flag p_wex_buried_legionary', 'approval barry +1'],
          goto: 'p_wex_04',
        },
        fail: {
          text: [
            '你讲了一通站着上路的道理，讲岔了一处。矛兵听出来了。',
            { speaker: '矛兵', text: '行，你是领印的。回头我同夫人说，威克斯的印头一回盖下去，盖在了屠夫的兵身上。' },
          ],
          effects: ['flag p_wex_buried_legionary', 'approval barry +1', 'rep wex -1'],
          goto: 'p_wex_04',
        },
      },
      {
        text: '照规矩办：束腰是给死人的，不认军籍',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: ['flag p_wex_buried_legionary', 'approval barry +1'],
        result: [
          '你没讲道理，直接动的手。亚麻衬里，鲸骨撑条，十二个扣眼，束到第七个停下来。名字没有，你念的是那个“七”字。',
          '矛兵看着你束完。同一套手艺，他爷爷身上也是这么束的，他挑不出错。',
        ],
        goto: 'p_wex_04',
      },
      {
        text: '把他扔出车队，束腰留给威克斯人',
        effects: ['flag p_wex_cast_out', 'rep wex +1', 'approval barry -1'],
        result: [
          '两个矛兵一人一头，把麻袋甩到了沟那边的荒地里。铁牌磕在石头上，响了一声。',
          { if: 'party.barry', text: '巴里没拦。他把篮子盖合上了，一直到天黑没再打开。' },
        ],
        goto: 'p_wex_04',
      },
      {
        text: '在大墓地墙外单给他立一座坟，碑上只刻番号',
        cost: { gold: 3 },
        result: [
          { speaker: '福尔卡德', text: '墙外的地不归我管，挖坑刻碑得另雇人。三枚金冠，孩子，这钱得你出。' },
          { speaker: '福尔卡德', text: '碑上刻什么？名字没有，番号只剩一个七。那就刻七，奈拉特认得全。' },
          '矛兵和巴里都没说话，各看各的地方。',
        ],
        goto: 'p_wex_04',
      },
    ],
  },

  p_wex_04: {
    id: 'p_wex_04',
    title: '扒束腰的',
    text: [
      '车轴断了。两个矛兵赶着牛去前头村里借，天擦黑还没回来。沟那头的荒地里站起来三个人：两个拿着削尖的棍子，一个小个子攥着把剔骨刀。领头的光着一只脚。',
      '他们没看你，看的是车。一副束腰拆开，有十四根鲸骨撑条，一幅好亚麻。在科塞顿的旧货摊上，一根鲸骨换三天的面包。',
      { if: 'flag.p_wex_cast_out', text: '领头的脖子上多了一根皮绳，拴的是下午那块铁牌。他多半不知道那是什么，只知道是铁，能卖。' },
      { speaker: '领头的', text: '死人站不站着，奈拉特又不查。车上的东西卸一半，我们就走。' },
      { if: 'party.barry', text: '巴里把手伸进了篮子。他摸的是面包还是那把细剑，你一时看不出来。' },
      { if: 'is.god', text: '三个人里有两个已经在往后挪了。领头的没挪，他饿得顾不上看你是谁。' },
    ],
    choices: [
      {
        text: '让巴里把篮子打开，请他们坐下吃',
        check: { skill: 'persuasion', dc: 11, party: true },
        ok: {
          text: [
            { speaker: '巴里', text: '对不住，剩的不多了，半块乳酪，一条面包，酒还有。坐下吃，我们威克斯的老话，站着吃的不算一顿。' },
            '小个子先坐下了，刀搁在膝盖上，两只手去接面包。另外两个看了看他，又看了看车，没坐。',
          ],
          combat: {
            title: '沟边',
            intro: '光脚的那个先动了。他冲的是车，没冲人。',
            enemies: [{ id: 'vagrant_bandit', n: 2, name: '流民' }],
            xp: 50,
            specials: DITCH_SPECIALS,
            win: { effects: ['flag pbx_wex_fed'], goto: 'p_wex_04b' },
            lose: { effects: ['flag pbx_wex_robbed', 'rep wex -1'], goto: 'p_wex_05' },
          },
        },
        fail: {
          text: [
            '领头的一脚把篮子踢翻了。半块乳酪滚进沟里。',
            { speaker: '领头的', text: '吃完这顿，明天呢？' },
          ],
          combat: {
            title: '沟边',
            intro: '光脚的那个先动了。他冲的是车，没冲人。',
            enemies: [{ id: 'vagrant_bandit', n: 2, name: '流民' }, { id: 'cutpurse', name: '拿剔骨刀的小个子' }],
            xp: 50,
            specials: DITCH_SPECIALS,
            win: { goto: 'p_wex_04b' },
            lose: { effects: ['flag pbx_wex_robbed', 'rep wex -1'], goto: 'p_wex_05' },
          },
        },
      },
      {
        text: '抄家伙，护住车',
        combat: {
          title: '沟边',
          intro: '光脚的那个先动了。他冲的是车，没冲人。',
          enemies: [{ id: 'vagrant_bandit', n: 2, name: '流民' }, { id: 'cutpurse', name: '拿剔骨刀的小个子' }],
          xp: 50,
          specials: DITCH_SPECIALS,
          win: { goto: 'p_wex_04b' },
          lose: { effects: ['flag pbx_wex_robbed', 'rep wex -1'], goto: 'p_wex_05' },
        },
      },
      {
        text: '绕到后头，把小个子手里的刀摸走',
        tag: '游荡者',
        if: "class == 'rogue'",
        check: { skill: 'sleight', alt: ['stealth'], dc: 11 },
        ok: {
          text: [
            '天擦黑，沟沿有草。你走到小个子背后的时候，他还在看车。',
            '刀到了你手里。他低头看了看空着的那只手，回头看了看你，转身就跑，一句话也没留。',
          ],
          effects: ['item +dagger'],
          combat: {
            title: '沟边',
            intro: '光脚的那个先动了。他冲的是车，没冲人。',
            enemies: [{ id: 'vagrant_bandit', n: 2, name: '流民' }],
            xp: 50,
            specials: DITCH_SPECIALS,
            win: { effects: ['flag pbx_wex_knife'], goto: 'p_wex_04b' },
            lose: { effects: ['flag pbx_wex_robbed', 'rep wex -1'], goto: 'p_wex_05' },
          },
        },
        fail: {
          text: '你的手刚碰到刀柄，他先觉出来了。刀尖在你小臂上拉了一道，三个人一齐转过身来。',
          effects: ['hp -2'],
          combat: {
            title: '沟边',
            intro: '小个子退到了另外两个身后，刀还在他手里。',
            enemies: [{ id: 'vagrant_bandit', n: 2, name: '流民' }, { id: 'cutpurse', name: '拿剔骨刀的小个子' }],
            xp: 50,
            specials: DITCH_SPECIALS,
            win: { goto: 'p_wex_04b' },
            lose: { effects: ['flag pbx_wex_robbed', 'rep wex -1'], goto: 'p_wex_05' },
          },
        },
      },
      {
        text: '骑士裁决：同领头的一对一，输的走人',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        result: [
          '你把凯伦的规矩讲给他听：各出一人，输的认。他没听过凯伦，可听懂了“各出一人”。',
          { if: 'party.barry', speaker: '巴里', text: '我算副手。副手是干什么的？对不住，我先站过来再问。' },
        ],
        combat: {
          title: '沟边的裁决',
          intro: '他把棍子在膝盖上磕了磕，磕掉了泥。',
          enemies: [{ id: 'vagrant_bandit', name: '光脚的领头人', hpMult: 1.5 }],
          xp: 50,
          specials: DITCH_SPECIALS,
          win: { effects: ['flag pbx_wex_duel'], goto: 'p_wex_04b' },
          lose: { effects: ['flag pbx_wex_robbed', 'rep wex -1'], goto: 'p_wex_05' },
        },
      },
      {
        text: '叫他们把手里的东西放下',
        tag: '神',
        if: 'is.god',
        effects: ['var god_acts +1', 'rep wex -1', 'approval barry -1'],
        result: [
          '你说了一个“走”字。两个扔下棍子就跑。领头的没跑，他跪下了，光着的那只脚陷在泥里。',
          { speaker: '领头的', text: '您是那边来的？那您把我闺女叫回来。去年冬天没的，六岁，埋在科塞顿墙根底下，地方我认得。' },
          '福尔卡德的脸白了。求人把死了的叫回来，在大墓地是最重的一句话。',
          { if: 'party.barry', text: '巴里把那人扶起来，往他怀里塞了半条面包。这一晚上，他没同你说话。' },
        ],
        goto: 'p_wex_05',
      },
    ],
  },

  p_wex_04b: {
    id: 'p_wex_04b',
    title: '光脚的',
    text: [
      { if: '!flag.pbx_wex_duel', text: '打完了。光脚的那个坐在泥里喘，削尖的棍子断成了两截。另一个跑了。' },
      { if: 'flag.pbx_wex_fed', text: '小个子从头到尾没挪窝。面包吃完了，他正在舔手指头。' },
      { if: 'flag.pbx_wex_knife', text: '小个子早跑没影了，他那把剔骨刀别在你腰上。' },
      { if: '!flag.pbx_wex_duel && !flag.pbx_wex_fed && !flag.pbx_wex_knife', text: '小个子捂着手腕蹲在沟边，剔骨刀掉进了泥里。' },
      { if: 'flag.pbx_wex_duel', text: '光脚的那个躺在泥里，半天才坐起来。另外两个照说好的，把棍子和刀搁在了地上，搁得很齐。' },
      { speaker: '光脚的', text: '1014 年我在维特斯克城下扛过矛。城打下来了，公爵没了，饷到今天没领着。鞋是上个月换的面包。' },
      '福尔卡德从车底下钻出来，先把车上的束腰数了一遍，再看这几个人。',
      { if: 'party.barry', text: '巴里已经在翻篮子了。' },
    ],
    choices: [
      {
        text: '把剩下的吃的给他们，放人',
        effects: ['approval barry +1'],
        result: [
          { speaker: '巴里', text: '就剩这些了。科塞顿北门有个粥棚，逢三是我的人管。报我的名字，不用报你们自己的。' },
          '光脚的把面包掰成三份，自己拿了最小的一份。',
        ],
        goto: 'p_wex_05',
      },
      {
        text: '捆起来，等矛兵回来交给玛格达夫人',
        effects: ['rep wex +1', 'approval barry -1'],
        result: [
          { speaker: '光脚的', text: '夫人那儿我认得路。她欠我八年的饷，这回赏我一顿鞭子，两清。' },
          { if: 'party.barry', text: '绳子是巴里递的。他递得很慢，递完去喂马了。' },
        ],
        goto: 'p_wex_05',
      },
      {
        text: '雇他们去挖坟：大墓地今年缺人手',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: ['rep wex +1', 'approval barry +1'],
        result: [
          { speaker: '福尔卡德', text: '一天两顿，管一副手套，鞋另发。扒过束腰的人，我叫他先学会束。' },
          '光脚的看了看自己那只脚，又看了看福尔卡德，问鞋是今天发还是到了地方发。',
        ],
        goto: 'p_wex_05',
      },
      {
        text: '留人：叫他起个誓，往后不碰死人身上的东西',
        tag: '蓝宝石',
        if: "faction == 'sapphire'",
        effects: ['rep escann +1', 'approval barry +1'],
        result: [
          '他没起过誓，不知道手该往哪儿放。你教他按着自己的胸口。',
          { speaker: '光脚的', text: '活人身上的呢？' },
          '你说那个另算。他点了点头，很认真，把这一条也记下了。',
        ],
        goto: 'p_wex_05',
      },
    ],
  },

  p_wex_05: {
    id: 'p_wex_05',
    title: '十六座空坟',
    art: 'ev_looming_death',
    loc: '边境地 · 屠夫原',
    date: '1022年卡斯坦月2日',
    text: [
      '车轴换好，天也亮了。福尔卡德没让车往科塞顿走，先折回了屠夫原。四百零六块碑排在霜地里，起过棺的坑还敞着，一坑挨着一坑。',
      { if: 'flag.pbx_wex_robbed', text: '昨晚叫人扒走了三副束腰。账上发出去的数又少了三，福尔卡德改数目的时候，笔尖把纸戳破了。' },
      '有十六个坑不一样。坑壁是直的，铲印一道压一道，间距一般宽。坑底没有棺材印，也没有骨头渣，回填的土比别处松。',
      { speaker: '福尔卡德', text: '这十六座我们没动过。碑上有名字，底下没有人。束腰我带来了，没处发。' },
      { if: "race == 'halfling' && class == 'cleric'", text: '这笔账本来归你管。四百零六座你一座一座对过，今天是第三遍，还是差十六。' },
      '他从账本里裁下一页给你。四百零六个名字，一行一个，后头记着束腰发没发。空着的十六行，他拿红笔圈了。',
      { speaker: '福尔卡德', text: '你带着。到了安本科斯特，有人问威克斯凭什么要一枚印，你把这一页拍在桌上。' },
      { if: 'party.barry', speaker: '巴里', text: '这些人死的时候我还在海上，连坎诺在哪边都不知道。如今他们的坟归我操心。对不住，我不是抱怨，我是没想到。' },
      { if: 'is.immortal && party.barry', text: '昨夜巴里一个人在车辕上坐到很晚，篮子搁在腿上，没打开。' },
      { if: 'is.immortal && party.barry', speaker: '巴里', text: '我家那孩子要是听说有人不会死，下一句准问：那巴里呢？这话我还没想好怎么答。' },
    ],
    first: ['flag saw_empty_graves', 'quest sixteen_graves start', 'codex butchers_field'],
    choices: [
      {
        text: '下到坑边，量一量铲印',
        once: true,
        check: { skill: 'investigation', dc: 11, mods: [{ if: "bg == 'miner'", n: 2, why: '下过矿的人认得土' }] },
        ok: {
          text: '铲口宽一掌半，圆头。庄户人的铲是方头的，兵营的工兵铲要窄一指。这个尺寸你昨天见过：车上那两把收殓人的铲。福尔卡德也见过。他没接话，把皮尺卷了又卷。',
          effects: ['rep wex +1'],
        },
        fail: {
          text: '坑沿的霜土吃不住人。你连人带土出溜到坑底，脚踝别了一下。从底下往上看，铲印倒是很齐。',
          effects: ['hp -2'],
        },
      },
      {
        text: '找野兽的爪印，同矛兵赌三枚金冠',
        once: true,
        req: 'gold >= 3',
        reqText: '需要 3 金冠',
        check: { skill: 'survival', alt: ['nature'], dc: 11 },
        ok: {
          text: '没有爪印，没有拖痕，碑脚的草根没叫什么东西拱过。狼和獾都不回填土。年长的矛兵押的是狼。他数了三枚金冠给你，数得很慢。',
          effects: ['gold +3'],
        },
        fail: {
          text: [
            '你认定是獾。',
            { speaker: '矛兵', text: '獾刨完了还把土拍平？你们领印的都这么断案，我明天也去领一个。' },
            '你数了三枚金冠给他。',
          ],
          effects: ['gold -3'],
        },
      },
      {
        text: '看碑脚那一小摊黑蜡',
        once: true,
        check: { skill: 'religion', dc: 11, adv: 'flag.pbx_wex_rite' },
        ok: {
          text: [
            '十六块碑，每块碑脚都有一小摊黑蜡，烛芯灰是红的。奈拉特烛。开坟之前点一支，念完了才动土，这是收殓人的规矩。挖这些坑的人行过礼。',
            { speaker: '福尔卡德', text: '你认得，就带一支。往后见了敞着的坟，先点上再看。' },
          ],
          effects: ['item +nerat_candle'],
        },
        fail: {
          text: '你蹲下去看，鞋尖先蹭掉了半摊。福尔卡德把剩下的半摊抠起来闻了闻，放进围裙兜里，没给你看。',
          effects: ['rep wex -1'],
        },
      },
      {
        text: '把手按在坑底，摸有没有法术的茬',
        tag: '贤者门下',
        if: "faction == 'staff'",
        once: true,
        effects: ['rep wise +1'],
        result: '你按了很久。什么也没有。土是拿铲子一铲一铲挖开的，死人是叫人用手抬走的。这地方没人念过咒。你把这一句记了下来，回头要报给贤者会。',
      },
      {
        text: '上路，去安本科斯特',
        result: '福尔卡德押着车回科塞顿。走出很远，他还站在板凳上，朝你们这边举着账本。巴里说那是叫你别把那一页弄丢了。',
        goto: 'p_wex_06',
      },
    ],
  },

  p_wex_06: {
    id: 'p_wex_06',
    title: '登记桌',
    loc: '安本科斯特 · 旧斗兽场拱廊',
    date: '1022年埃斯玛月2日',
    text: [
      DESK,
      { speaker: '书记官', text: '名字怎么写？' },
      '你报了。他写了半行，停下来，把冻住的笔尖伸到蜡锅上头烤了烤。',
      { speaker: '书记官', text: '劳驾，名字怎么写？头一遍我光听口音了。' },
      DESK_GOD,
      '威克斯的三封信，他一封一封拆开，摆成一排。玛格达夫人写的是：谁都行，除了克洛万的人。克洛万伯爵写的是：谁都行，除了玛格达的人。男爵们联名的那封最长，意思是谁都行，除了前两位举荐的。',
      { speaker: '书记官', text: '三封信除掉的人加起来，威克斯就剩您一位了。下一栏，作保。得公爵本人按手印。' },
      '公爵八岁，人在威克斯堡，替他来的是巴里。书记官的印泥冻成了一坨。巴里从篮子里摸出一罐越橘酱，顺手往炭盆边上搁了一块乳酪。书记官看了一眼，没推回来。',
    ],
    first: [
      'level 2',
      'rest long',
      { if: 'item.witness_seal < 1', then: ['item +witness_seal'] },
      'quest witness start',
      'codex witnesses', 'codex anbenncost', 'codex treaty', 'codex sorcerer_war',
    ],
    choices: [
      {
        text: '三封信一封也不递，册子上只写公爵',
        effects: ['approval barry +1', 'rep wex -1'],
        result: [
          '你把三封信揣了回去。巴里的拇指在酱里滚了一圈，按在“作保”那一栏。',
          ...JAM,
          ...SEAL_OUT,
        ],
        goto: 'a1_01',
      },
      {
        text: '三封信都订进册子，谁也不落下',
        effects: ['rep wex +1'],
        result: [
          '书记官拿麻线把三封信缝在了你那一页后头。册子从此合不严了。巴里的拇指在酱里滚了一圈，按在“作保”那一栏，按得很轻。',
          ...JAM,
          ...SEAL_OUT,
        ],
        goto: 'a1_01',
      },
      {
        text: '把账页拍在桌上，要他在“所属”写威克斯王国',
        check: {
          skill: 'persuasion', alt: ['intimidation'], dc: 12, party: true,
          mods: [{ if: 'item.ledger_page >= 1', n: 2, why: '四百零六个名字' }],
        },
        ok: {
          text: [
            '他把那一页从头看到尾，看到红笔圈的十六行，停了停。',
            { speaker: '书记官', text: '王国我不能写，王位空着。我写“威克斯，王位空缺”。空缺两个字是照实写，谁来查我都这么答。' },
            '巴里的拇指在酱里滚了一圈，按在“作保”那一栏。',
            ...JAM,
            ...SEAL_OUT,
          ],
          effects: ['rep wex +2'],
          goto: 'a1_01',
        },
        fail: {
          text: [
            { speaker: '书记官', text: '条约上写的是威克斯丘陵公国。我只管照条约抄，抄错一个字，扣的是我的饷。' },
            '排在后头的人里有两个穿月庭号衣的，把这一段从头听到了尾。巴里赶紧把拇指按了下去。',
            ...JAM,
            ...SEAL_OUT,
          ],
          effects: ['rep moon -1'],
          goto: 'a1_01',
        },
      },
    ],
  },
};
