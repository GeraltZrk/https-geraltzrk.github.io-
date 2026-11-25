// 序章甲：达梅里亚、洛伦特、乌霜边区（BIBLE §11.1、§15.3、§16.2）
// 自检：node tools/check-part.mjs s1022 prologues_a.js
//
// ───────────────────────────── 场景提纲 ─────────────────────────────
// 达梅里亚 · 月庭
//   p_dameria_01  第七天的早饭：剩席，扛旗的老兵端着切肉刀走向主桌。察觉（可选）→ 扑／施法拦刀。立 saw_sleeper。→ 01b
//   p_dameria_01b 主桌上的刀：马里昂、元帅登场。先看国王／看老兵的手／看刀；[神] 把弯刀捋直（元帅下跪）。→ 02
//   p_dameria_02  只记得出门打水：卫兵房。洞悉、医药、[施法者] 奥秘三个检定，给 05 的说服攒优势。→ 03
//   p_dameria_03  帐篷城：枢纽。翻铺板（工兵铲）、亮腰牌问话（败了是萝卜印）、伊迪丝和三碗汤。立 met_edith。→ 04
//   p_dameria_04  夜里起身的人：两个同袍扛铲往堡里走。拦（战斗，noAwe）或者跟着看（不打，被元帅拿下）。→ 05
//   p_dameria_05  元帅要结案：吊／押着等验／具保放回，[旧礼] 送进神殿。p_knife_* 必立其一。→ 06
//   p_dameria_06  登记桌：书记官问名字怎么写，问两遍；马里昂塞印。level 2、印、任务、图鉴。→ a1_01
// 洛伦特 · 玫瑰摄政
//   p_lorent_01   王座上的两岁：恩特本的骑士说太后慑住了御前会议。洞悉、历史、捡鞋。→ 02
//   p_lorent_02   太后的茶：任命，外加“那一枪”。quest lance start。问她信哪种／问门卫。→ 03
//   p_lorent_03   对大厅说什么：否认（欺瞒）／照实说／立案；[神] 以神的名义作保。p_hall_* 必立其一。→ 04
//   p_lorent_04   红宝石矮人的箱子：商店；讨比武会的开销账（成了白拿，败了付开箱费；矮人直接拿）。→ 05
//   p_lorent_05   莫尔班平原来的车：有几口棺材太轻，瓦勒兰找三十七号。立 saw_empty_graves、p_met_valeran。
//                 撬棺 → 05a 战斗；请瓦勒兰作保（成了免战）；[旧礼] 搬出规矩免战。→ 05b
//   p_lorent_05a  动棺材的人：押车的扈从。战斗，输了被捆在车辕上。→ 05b
//   p_lorent_05b  三十七号：四十口空了七口。抄号给恩特本／先不声张／[旧礼] 写名字。→ 06
//   p_lorent_06   登记桌：书记官把“洛伦特”写得很花；拱廊那头站着克雷格。level 2、印、任务、图鉴。→ a1_01
// 乌霜边区 · 黑龙
//   p_ebonmarck_01  围城第九十一天：加雷克要你带话；军需官说起旧金币（p_old_coin）。历史、洞悉。→ 02
//   p_ebonmarck_02  自己人的申辩：交人（p_gave_legionary）／不交／[蓝宝石] 立誓留人再交。→ 03
//   p_ebonmarck_03  过营：交了人走大路（可停下看哨兵）；没交的潜行、欺瞒、报旧口令（p_used_watchword）；
//                   谁都可以绕冻河；[神] 从营地正中走过去。→ 04
//   p_ebonmarck_04  按亲戚价：白湾战帮追上来，鹰身女妖从哨塔上跳下来。战斗。立 met_liv_early。→ 04b
//   p_ebonmarck_04b 亲戚价：卡斯坦报名号、收账；没见过沉睡者的在这里补立 saw_sleeper。付钱／许酒／[武人] 掰手腕。→ 05
//   p_ebonmarck_05  克拉丽蒙德的一句话：放了（p_laid_arms）／没放（p_fought_on）／不在场（都不立）。→ 06
//   p_ebonmarck_06  登记桌：书记官想写“东坎诺某地”。level 2、印、任务、图鉴。→ a1_01
//
// 本段私有标记一律 pax_ 开头，只在本文件里立、本文件里读。
// 书记官：五个登记桌末场是同一个人。没有名字；脚在桌子底下轮流跺；炭盆上一口化蜡的小铜锅；
// 开口第一句永远是“名字。怎么写？”；印是从桌下的匣子里数出来的（达梅里亚版由马里昂亲手塞）。

const OIL = { if: 'flag.f_rites && item.holy_oil < 1', then: ['item +holy_oil'] };
const SEAL = { if: 'item.witness_seal < 1', then: ['item +witness_seal'] };
const LANCE_LEDGER = { if: 'item.lance_ledger < 1', then: ['item +lance_ledger'] };
const DESK_FIRST = ['level 2', SEAL, 'quest witness start', 'codex witnesses', 'codex anbenncost', 'codex treaty', 'codex sorcerer_war'];
// 书记官的口头禅和对神的反应，同 prologues_b.js 的 SEAL_OUT、DESK_GOD 对齐（同一个人）
const DESK = '一张桌，一本登记册，一只炭盆，盆上坐着一口化蜡的小铜锅。书记官的两只脚在桌子底下轮流跺。';
const DESK_GOD = { if: 'is.god', text: '写到一半，他抬头看了你一眼，低头，又抬头看了一眼。然后他把蜡锅往自己那边挪了半尺，接着写。' };
const DESK_NEXT = { speaker: '书记官', text: '明天在场子里当众再发一遍誓。印面别拿手摸，沾了油盖不清。下一位。' };

// 达梅里亚 04：两种开战（翻出过铲子的多一个帮手）共用的场景动作
const DAM_NIGHT_SPECIALS = [
  {
    id: 'knock', name: '照后脑勺来一下', desc: '绕到背后，拿铲柄把人敲醒',
    check: { skill: 'athletics', dc: 11, adv: 'is.martial' },
    success: { text: '闷响一声。挨敲的那个晃了晃，眼睛里回来了一点东西，张嘴问了句“什么时辰”。另一个被他撞得一歪。', dmgAll: '2d4', type: 'bludgeoning', applyAll: { cond: 'dazed', turns: 2 } },
    fail: { text: '他头也不回，铲柄往后一捅，正捅在你的肋条上。', selfDmg: '1d4' },
  },
  {
    id: 'line', name: '扯下晾衣绳', desc: '五国的军服连绳带杆兜头罩下去',
    check: { skill: 'acrobatics', alt: ['sleight'], dc: 11 },
    success: { text: '绳子带着一排湿军服兜头罩了下去。两个人缠在一条洛伦特的马裤里，铲子一时抡不开。', applyAll: { cond: 'restrained', turns: 2 } },
    fail: { text: '绳子比你想的结实。杆子倒了，砸的是你。', selfDmg: '1d4' },
  },
];
const DAM_NIGHT_WIN = { effects: ['flag pax_dam_won'], goto: 'p_dameria_05' };
const DAM_NIGHT_LOSE = { effects: ['flag pax_dam_caught', 'heal 1d6+2'], goto: 'p_dameria_05' };
const DAM_NIGHT_INTRO = '走在后头的那个转过身，把铲子从肩上卸下来，两手握住。握的是长矛的把位。';

// 达梅里亚 05：说服元帅时，前几场攒下的东西
const DAM_PLEA_MODS = [
  { if: 'flag.pax_dam_caught', n: -2, why: '他们是握着铲子在吊桥前被按住的' },
  { if: 'flag.pax_dam_doubt', n: -1, why: '你自己也拿不准' },
  { if: 'flag.pax_dam_talk', n: 1, why: '同营的人说了他夜里的事' },
  { if: 'flag.pax_dam_knife', n: 1, why: '刀是厨房的，一路没人拦' },
  { if: "faction == 'sapphire'", n: 1, why: '凯伦的规矩：先留人' },
];
const DAM_PLEA_ADV = 'flag.pax_dam_honest || flag.pax_dam_sober || flag.pax_dam_trace';

export const SCENES = {
  // ═══════════════════════════ 达梅里亚 ═══════════════════════════
  p_dameria_01: {
    id: 'p_dameria_01',
    title: '第七天的早饭',
    chapter: '序章 · 印',
    art: 'ck3_damesteeth',
    loc: '达梅里亚 · 达梅里斯堡',
    date: '1022年卡斯坦月1日',
    text: [
      '王室的婚礼是七天前办的，达梅里斯堡的大厅到今天还在吃剩席。烤天鹅只剩一副架子，桌布上的酒渍干成了地图。国王马里昂坐在主桌，一只手撑着头，面前那碗醒酒的鱼汤一口没动。',
      { if: "race == 'elf'", text: '你是白银大队留下来的人，上岸那年起就在月庭当差。这屋里的老兵，你叫得出一半人的名字。' },
      { if: "race == 'dwarf'", text: '你是银锻炉派来的客。两家的盟约是 588 年订的，所以你的座位排在主桌边上，离国王三步。' },
      { if: "race == 'half_elf'", text: '你同国王一样是半精灵。满厅的人看完他的耳朵，总要再看一眼你的。' },
      { if: "race == 'harpy'", text: '你是雇来送信的，本该昨天飞走，为这顿剩席多留了一天。' },
      '侧门进来一个老兵。{pc}，你认得他：沼泽堡那一仗把军旗从泥里扛出来的那位，昨晚满厅的人轮着敬过他酒。他手里端着厨房的切肉刀，刀尖朝前，一步一步往主桌走。',
      '没人拦。都当他是去切肉的。',
      '肉在大厅另一头。他从你身边过去，眼睛睁着，后面没人。',
    ],
    first: [OIL, 'flag saw_sleeper', 'codex marion'],
    choices: [
      {
        text: '盯住他握刀的手，看清楚再动',
        once: true,
        check: { skill: 'perception', dc: 10, mods: [{ if: 'is.soldier', n: 2, why: '当过兵' }] },
        ok: { text: '他握刀用的是握矛的把位，虎口朝上，肘夹着肋。昨晚给他敬酒的人就坐在过道边上，喊了他一声。他没转头。', effects: ['flag pax_dam_spotted'] },
        fail: { text: '你多看了两眼。等你看出不对，他已经踩上了主桌前的台阶。', effects: ['flag pax_dam_late'] },
      },
      {
        text: '喊他的名字',
        tag: '精灵',
        if: "race == 'elf'",
        once: true,
        effects: ['flag pax_dam_spotted'],
        result: '你喊了他的名字。这人在校场上隔着两百步听见有人叫，都要回头应一声，二十年了回回如此。他没回头。',
      },
      {
        text: '扑上去，拧他拿刀的那只手',
        check: {
          skill: 'athletics', alt: ['acrobatics'], dc: 11, adv: 'flag.pax_dam_spotted',
          mods: [{ if: 'flag.pax_dam_late', n: -2, why: '慢了半步' }, { if: "race == 'dwarf'", n: 2, why: '你的座位离主桌最近' }],
        },
        ok: {
          text: [
            { if: '!is.god', text: '你撞在他腰上，两个人一起栽进了天鹅架子。刀脱了手，当啷一声落在主桌前的台阶上，离国王的靴子一拃远。' },
            { if: 'is.god', text: '你伸出胳膊去挡。刀砍在你小臂上，弯了。他眼睛后面没人，看不见自己砍的是什么，照样往前推，推了两下，刀弯成了一把钩子。' },
          ],
          effects: ['rep moon +1'],
          goto: 'p_dameria_01b',
        },
        fail: {
          text: '你只抓住了他的袖子。他头也不回，反手一刀划开你的小臂，接着往前走。你第二回才把他扑倒，血滴了一路，都是你的。国王没伤着。',
          effects: ['hp -3'],
          goto: 'p_dameria_01b',
        },
      },
      {
        text: '往他脚下丢一个绊人的小法术',
        tag: '施法者',
        if: 'is.caster',
        check: { skill: 'arcana', dc: 11, adv: 'flag.pax_dam_spotted', mods: [{ if: 'flag.pax_dam_late', n: -2, why: '慢了半步' }] },
        ok: {
          text: [
            { if: '!is.god', text: '他的右脚钉在了地砖上。人往前栽，刀脱了手，顺着地面一路滑到主桌底下，停在国王的靴子边。国王把脚缩了上去。' },
            { if: 'is.god', text: '你抬了抬手。刀从他手里飞出来，撞在你掌心上，弯了。他眼睛后面没人，又往前走了两步，手还握着，握的是空的。' },
          ],
          effects: ['rep moon +1'],
          goto: 'p_dameria_01b',
        },
        fail: {
          text: '法术落在了他前头那条长凳上。凳子翻了，他从上面迈过去，脚都没顿。你只好扑上去，小臂上挨了一刀才把他按住。',
          effects: ['hp -3'],
          goto: 'p_dameria_01b',
        },
      },
    ],
  },

  p_dameria_01b: {
    id: 'p_dameria_01b',
    title: '主桌上的刀',
    text: [
      { if: '!is.god', text: '满厅的人这会儿才站起来，椅子倒了一片。老兵趴在地上，不挣，也不出声。有人把那把切肉刀捡起来，搁在了主桌上，刀刃冲着墙。' },
      { if: 'is.god', text: '满厅的人这会儿才站起来，椅子倒了一片。没人去看趴在地上的老兵。三百来双眼睛都盯着地上那把弯成钩子的切肉刀，然后去看你的袖子：破了，里头的胳膊没破。' },
      '元帅伊斯特拉拉尼娅从主桌后面绕出来，一脚踩住老兵的手腕。她是精灵，脸上一道旧疤，在坎诺打了二十年仗，三个月前刚生了儿子。',
      { if: '!is.god', speaker: '马里昂', text: '我娘是月神的化身，我爹是会议投出来的神。我昨晚喝多了，今天有人拿切肉刀来找我。你说这算不算家道中落。' },
      { if: 'is.god', speaker: '马里昂', text: '我娘是化身，我爹是会议投出来的神。这种事我们家算见得多的。您又是哪一位？' },
      '他说完打了个嗝。撑着头的那只手一直在抖。',
    ],
    choices: [
      {
        text: '先看国王伤着没有',
        effects: ['rep moon +1'],
        result: [
          '他把两只手翻过来给你看，一道口子也没有。',
          { speaker: '马里昂', text: '别告诉我祖母。上回她听说我骑马摔了，在月山上给我点了四十天的灯。' },
        ],
        goto: 'p_dameria_02',
      },
      {
        text: '掰开老兵的手指，看他的手',
        effects: ['flag pax_dam_hands'],
        result: '他的手指是你一根一根掰开的。掌心全是烤肉的油，握得太死，刀柄的木纹印进了肉里。这双手从头到尾没抖过。',
        goto: 'p_dameria_02',
      },
      {
        text: '拿起那把刀看看',
        if: '!is.god',
        effects: ['flag pax_dam_knife'],
        result: '刀是王宫厨房的，柄上烙着一弯月。厨房挨着井台。从伙夫的案板上顺一把刀，再穿过两道岗走到这儿，路上少说有二十个人看见过他。',
        goto: 'p_dameria_02',
      },
      {
        text: '把刀捋直了，叫人送回厨房',
        tag: '神',
        if: 'is.god',
        effects: ['rep moon +1', 'rep wise -1', 'var god_acts +1', 'flag pax_dam_knelt'],
        result: [
          '你把刀搁在膝盖上捋了一把。直了，刃口比原先还齐。',
          '头一个跪下去的是元帅，她后面跪了一片，有人碰翻了汤。她跪完站起来掸膝盖，掸不掉，膝盖上洇着一块汤渍。',
          '刀没送到厨房。半路叫宫廷法师塔楼上下来的人截走了，说要拿回去看看。',
        ],
        goto: 'p_dameria_02',
      },
    ],
  },

  p_dameria_02: {
    id: 'p_dameria_02',
    title: '只记得出门打水',
    loc: '达梅里斯堡 · 卫兵房',
    text: [
      '卫兵房里生着一盆炭。老兵坐在条凳上，手脚没捆，有人给他披了条马毯。他是自己醒过来的，醒了先看手，手上的油还没擦。',
      { speaker: '老兵', text: '我怎么在这儿？我出门打水来着。桶呢？' },
      '桶他问了三遍。卫兵说，从他的铺位到大厅要过两道岗，两道岗都认得他，都没拦。',
      { if: 'flag.pax_dam_knife', text: '你想起刀柄上烙的那弯月。厨房挨着井台，他说去打水，倒也算顺路。' },
      '元帅靠在门框上，不进来。',
      { speaker: '伊斯特拉拉尼娅', text: '沼泽堡我在。术士王那天慑住的人，我后来见过四十来个，没有一个说得清自己干过什么。' },
      { speaker: '伊斯特拉拉尼娅', text: '天黑以前吊了，营里就出不了第二个。' },
      '马里昂跟到了门口，靴子穿反了一只。',
      { speaker: '马里昂', text: '屋里三百来号人，动的就{pc}一个。伊斯特拉，这事归{ta}。你等一天。' },
      { if: 'flag.pax_dam_knelt', text: '元帅没接话。她换过了裤子，站的地方离你最远。' },
    ],
    first: ['codex enthralment'],
    choices: [
      {
        text: '让他把昨晚的事从头讲一遍',
        once: true,
        check: { skill: 'insight', dc: 11, adv: 'flag.pax_dam_hands' },
        ok: { text: '他讲昨晚的酒，讲谁敬了他，讲他夜里渴醒了，拎桶出门。讲到这儿就断了，下一句是“我怎么在这儿”。编瞎话的人会把断的地方补上。他不补，他自己也在往那个缺口里看。', effects: ['flag pax_dam_honest'] },
        fail: { text: '他讲到一半哭了，鼻涕蹭在马毯上。你分不出这是心虚还是吓的。元帅在门口哼了一声。', effects: ['flag pax_dam_doubt'] },
      },
      {
        text: '闻他的嘴，翻开他的眼皮看',
        once: true,
        check: { skill: 'medicine', dc: 12 },
        ok: { text: '嘴里是隔夜的麦酒，味淡。瞳仁见光就缩，舌头不打结，十个指头数得清。他昨晚喝得比国王少得多。', effects: ['flag pax_dam_sober'] },
        fail: { text: '你翻他眼皮的时候，他冲着你的脸打了个喷嚏。你什么也没看出来。卫兵递给你一块擦甲的布。', effects: ['flag pax_dam_doubt'] },
      },
      {
        text: '探一探他身上有没有别人留下的法术',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        check: { skill: 'arcana', dc: 12, mods: [{ if: "faction == 'staff'", n: 2, why: '加里昂门下教过这个' }] },
        ok: { text: '有。旧得很，像一件穿了好些年的衬里，针脚朝里，他自己摸不着。里头有一根线是松的，新近叫人扯过。', effects: ['flag pax_dam_trace'] },
        fail: { text: '你只探到一身冷汗。他身上要是真有东西，也埋得比你够得着的地方深。' },
      },
      { text: '去帐篷城，看他住的那一排', goto: 'p_dameria_03' },
    ],
  },

  p_dameria_03: {
    id: 'p_dameria_03',
    title: '帐篷城',
    art: 'ev_multi_racial_merc',
    loc: '安本科斯特城外 · 帐篷城',
    text: [
      '同盟军的帐篷从旧城墙一直搭到精灵码头。仗打完一年多了，一顶也没拆。晾衣绳上挂着五国的军服，有人在帐篷门口种了一畦葱。',
      { if: "bg == 'urchin'", text: '这地方你熟。你就是在这样的灶灰边上长大的，哪顶帐篷的厨子心软，你闻得出来。' },
      '老兵那一排在西头，挨着茅坑。同帐的还有两个，都是沼泽堡下来的。两人的铺盖卷打得方方正正，人坐在铺上削木勺，削好的在铺沿上摆了一排，一把比一把像。',
      '伙房就在隔壁。一个十来岁的女孩蹲在灶边喝汤，脚边摞着两只空碗。厨子拎着勺从她身边过，又给她添了一勺，添完站住了，低头看自己的勺。',
      { if: "race == 'half_elf'", text: '女孩盯着你的耳朵看了半天，比宫里的人看得还不客气。' },
    ],
    first: ['flag met_edith'],
    choices: [
      {
        text: '掀开那两个人的铺板看看',
        once: true,
        check: { skill: 'investigation', dc: 11 },
        ok: { text: '铺板底下并排塞着两把工兵铲，刃口是新磨的，能刮胡子。帐篷城一年多没挖过一道壕。你把铺板放回去，那两位还在削勺，头都没抬。', effects: ['flag pax_dam_shovels'] },
        fail: {
          text: [
            '你刚把铺板掀起一条缝，其中一个把木勺搁下了。',
            { speaker: '削勺的老兵', text: '找钱？枕头里有四个铜板。拿了走，别翻我的铺，我叠了一早上。' },
            '你把铺板放了回去。',
          ],
        },
      },
      {
        text: '亮出王宫的腰牌，请同营的人说说他',
        once: true,
        check: { skill: 'persuasion', dc: 12, mods: [{ if: 'is.soldier', n: 2, why: '当过兵' }, { if: "race == 'elf'", n: 1, why: '白银大队的旧人' }] },
        ok: {
          text: [
            '隔壁帐有个老兵肯说。',
            { speaker: '老兵', text: '他这个月半夜起来过四回。穿戴齐整，绑腿都扎好，站在帐篷口，站一刻钟，回来接着睡。问他，他说起夜。' },
            { speaker: '老兵', text: '起夜用不着扎绑腿。' },
          ],
          effects: ['flag pax_dam_talk'],
        },
        fail: {
          text: [
            '你把王宫的腰牌举到他鼻子底下。他凑近看了看，又抬头看了看你。',
            { speaker: '老兵', text: '上个月也有人拿这么块牌子，从我们营里拉走三车冬衣。那块牌子是萝卜刻的。' },
            '他把腰牌拿过去，放在牙上咬了咬。',
            { speaker: '老兵', text: '你这个倒是银的。那三车冬衣，你管不管？' },
          ],
        },
      },
      {
        text: '摸一枚零钱给那女孩',
        once: true,
        effects: ['gold -1', 'flag pax_dam_coin'],
        result: [
          '她把钱翻过来，看上头的头像。',
          { speaker: '女孩', text: '这是先头的女王，耳朵是圆的。新的那个尖耳朵骑马从这儿过，我管他要糖，他把一整包都给了。' },
          '她把钱揣进怀里，又舔了一圈碗沿。',
          { speaker: '伊迪丝', text: '我叫伊迪丝。汤不是偷的，我跟厨子说我饿，他就给了。跟谁说，谁都给。' },
        ],
      },
      {
        text: '问厨子给她盛了几碗',
        once: true,
        effects: ['flag pax_dam_cook'],
        result: [
          { speaker: '厨子', text: '一碗。刚盛的。' },
          '他顺着你的眼睛看见了地上那两只空碗，数了一遍，又数了一遍。',
          { speaker: '厨子', text: '……那是谁的碗？' },
          '女孩已经把第三碗喝完了。她拿袖子擦了擦嘴，冲你做了个鬼脸。',
        ],
      },
      {
        text: '在伙房要一碗汤，坐下歇歇',
        once: true,
        cost: { gold: 1 },
        effects: ['rest short'],
        result: '羊骨头熬的，里头的葱就是门口那一畦。厨子给你盛得很满。这一碗他记得。',
      },
      { text: '等天黑，守在这一排帐篷外头', goto: 'p_dameria_04' },
    ],
  },

  p_dameria_04: {
    id: 'p_dameria_04',
    title: '夜里起身的人',
    text: [
      '后半夜起了海雾。帐篷城的火堆一处一处灭了，只剩茅坑边那盏风灯。王宫派来跟你的扈兵靠着晾衣杆打盹，矛抱在怀里。',
      { if: 'flag.pax_dam_shovels', text: '白天看见那两把铲子以后，你从王宫多要了一个人，叫他蹲在柴堆后头。' },
      { if: 'flag.pax_dam_coin', text: '伙房后头，白天那个女孩裹着一条麻袋睡在灶灰边上。你给的那枚钱攥在她手里。' },
      { if: 'flag.pax_dam_cook', text: '伙房的门上多了一把锁。锁没扣，挂锁的人大概忘了自己为什么要挂。' },
      '门帘动了。两个人一前一后走出来，绑腿扎得齐整，肩上各扛一把工兵铲，刃口朝上。两人步子一样大，谁也不看脚下，直直朝达梅里斯堡去。',
      { if: 'flag.pax_dam_talk', text: '这一回他们没在帐篷口站着发愣，出了门帘就走。' },
      { if: "faction == 'rites'", text: '他们嘴里在念东西。你听出来了：军营晚祷的头一句，求月神照看守夜的人。两人都只念半句，停住，从头再念。' },
    ],
    choices: [
      {
        text: '踢醒扈兵，拦在路当中',
        if: '!flag.pax_dam_shovels',
        combat: {
          title: '帐篷城的夜路',
          intro: DAM_NIGHT_INTRO,
          enemies: [{ id: 'enthralled_soldier', n: 2, name: '起身的老兵' }],
          allies: [{ id: 'man_at_arms', n: 1, name: '王宫扈兵' }],
          noAwe: true,
          xp: 60,
          specials: DAM_NIGHT_SPECIALS,
          win: DAM_NIGHT_WIN,
          lose: DAM_NIGHT_LOSE,
        },
      },
      {
        text: '打个呼哨，同两个扈兵一起拦在路当中',
        if: 'flag.pax_dam_shovels',
        combat: {
          title: '帐篷城的夜路',
          intro: DAM_NIGHT_INTRO,
          enemies: [{ id: 'enthralled_soldier', n: 2, name: '起身的老兵' }],
          allies: [{ id: 'man_at_arms', n: 2, name: '王宫扈兵' }],
          noAwe: true,
          xp: 60,
          specials: DAM_NIGHT_SPECIALS,
          win: DAM_NIGHT_WIN,
          lose: DAM_NIGHT_LOSE,
        },
      },
      {
        text: '不惊动他们，跟在后头看他们往哪儿走',
        effects: ['flag pax_dam_caught', 'flag pax_dam_followed'],
        result: [
          '他们不抄小路，走的是进堡的正道。到了吊桥前，两个人并排站住，铲子拄地，脚跟一磕，像两个来换岗的。',
          '桥头的卫兵喊了三声口令，没人应。元帅的人从两边扑上来的时候，他们连铲子都没举。',
        ],
        goto: 'p_dameria_05',
      },
    ],
  },

  p_dameria_05: {
    id: 'p_dameria_05',
    title: '元帅要结案',
    loc: '达梅里亚 · 达梅里斯堡',
    date: '1022年卡斯坦月2日',
    text: [
      { if: 'flag.pax_dam_won', text: '夜里那两个，是你同扈兵一人一个拖回来的。天亮前他们醒了，头一句话同扛旗的那位一样：我怎么在这儿。' },
      { if: 'flag.pax_dam_caught && !flag.pax_dam_followed', text: '你是在医帐里醒的，肋下缠着布。夜里那两个一路走到了吊桥前，叫元帅的人按在地上，手里还握着磨快的铲子。' },
      { if: 'flag.pax_dam_followed', text: '夜里那两个是在吊桥前叫元帅的人按住的，手里握着磨快的铲子。你在边上从头看到了尾。' },
      '堡里的小院已经立起一根横梁，三个绳套，底下三只倒扣的木桶。三个老兵站在廊下，手捆在身前。扛旗的那位盯着那三只桶看，嘴动了动，这一回没问。',
      { speaker: '伊斯特拉拉尼娅', text: '我儿子三个月大，就睡在这座堡里。这三个人认得营里的岗，认得井在哪儿，昨晚扛着磨快的铲子往这儿走。你叫我等谁？' },
      { if: 'flag.pax_dam_knelt', text: '她这话是冲着国王说的。说到“等谁”两个字，她拿下巴点了点你。' },
      '马里昂坐在台阶上啃一只冷鸡腿，啃得很慢。',
      { speaker: '马里昂', text: '他们三个在沼泽堡替我娘挨过火。伊斯特拉也挨过。我说了，这事归你。' },
      { if: "race == 'half_elf' && is.caster", text: '“等法师来验”这话你耳熟。宫廷法师上个月也说过要验你的血，到今天还没顾上。' },
      { if: 'is.god', text: '三个老兵里有两个在偷眼看你。扛旗的那位没看：他昨天砍过你一刀，自己不知道。' },
    ],
    choices: [
      {
        text: '照元帅的办，今天就吊',
        effects: ['flag p_knife_hanged', 'rep moon +1', 'rep wise -1'],
        result: [
          '三只桶是元帅自己踢的，一脚一只。',
          '扛旗的那位站上桶的时候，还在问他打水的桶哪儿去了。马里昂把鸡腿搁在台阶上，没吃完，也没再拿起来。',
        ],
        goto: 'p_dameria_06',
      },
      {
        text: '关进地牢，等宫廷法师来验',
        check: { skill: 'persuasion', dc: 12, adv: DAM_PLEA_ADV, mods: [...DAM_PLEA_MODS, { if: "faction == 'staff'", n: 2, why: '你是加里昂门下' }] },
        ok: {
          text: [
            '元帅看了你很久。她走过去，把三个绳套一个一个解下来，卷好，挂在自己腰上。',
            { speaker: '伊斯特拉拉尼娅', text: '法师的塔楼下个月开门验人。验的那天，我带着这三根绳子去听。' },
          ],
          effects: ['flag p_knife_held', 'rep wise +1', { if: 'flag.pax_dam_knelt', then: ['rep moon -1'] }],
          goto: 'p_dameria_06',
        },
        fail: {
          text: [
            { speaker: '伊斯特拉拉尼娅', text: '验。叫一个缺了胳膊少了腿的法师来告诉我，我亲眼看见的铲子算不算数。' },
            '她没拦你。她走的时候把院门摔上了，门闩震下来半截。国王叹了口气，叫人去修。',
          ],
          effects: ['flag p_knife_held', 'rep wise +1', 'rep moon -1'],
          goto: 'p_dameria_06',
        },
      },
      {
        text: '交给同营的人具保，放回帐篷城',
        check: { skill: 'persuasion', dc: 12, adv: DAM_PLEA_ADV, mods: [...DAM_PLEA_MODS, { if: 'is.soldier', n: 1, why: '你也睡过那样的通铺' }] },
        ok: {
          text: '帐篷城西头来了十二个人领他们，在保状上挨个按了手印。有一个按完了问你，上个月那三车冬衣归不归你管。三个老兵是自己走回去的，扛旗的那位一路在打听他的桶。',
          effects: ['flag p_knife_released', 'rep moon -1', { if: 'flag.pax_dam_knelt', then: ['rep moon -1'] }],
          goto: 'p_dameria_06',
        },
        fail: {
          text: [
            '保状你写了，手印也按了。元帅没看，转身走了。',
            '当晚帐篷城西头多了一队堡里的兵，矛尖朝里。那三车冬衣的事，这下更没人敢提。',
          ],
          effects: ['flag p_knife_released', 'rep moon -2'],
          goto: 'p_dameria_06',
        },
      },
      {
        text: '请月神神殿收下这三个人',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: ['flag p_knife_held', 'rep wise +1'],
        result: [
          '你叫人往月山送了信。和约没动的老规矩里有这一条：进了神殿的人，谁也不能硬抢。',
          '大女祭司阿丽娅是国王的祖母。她派来接人的是两个抬轿的老祭司，连元帅也得给轿子让路。人先在神殿里押着，等宫廷法师的塔楼开门再验。',
        ],
        goto: 'p_dameria_06',
      },
    ],
  },

  p_dameria_06: {
    id: 'p_dameria_06',
    title: '登记桌',
    loc: '安本科斯特 · 旧斗兽场拱廊',
    date: '1022年埃斯玛月2日',
    text: [
      '旧斗兽场是安本科斯特还叫达穆森那会儿留下的，看台的石头缝里长着草。拱廊底下排着队。' + DESK,
      { speaker: '书记官', text: '名字。怎么写？' },
      '你报了。他蘸了墨，笔尖悬在纸上不落。',
      { speaker: '书记官', text: '劳驾，名字怎么写，再说一遍。上一位说他叫老六，我写了，他说不对，他们村的“六”多一横。' },
      { if: "race == 'elf'", speaker: '书记官', text: '船上用的那个名字要不要也记一笔？精灵码头的长老来查册子，只认旧的。' },
      DESK_GOD,
      '马里昂是自己走来的，没带卫兵，披着一件别人的旧斗篷。他从怀里摸出一枚铜柄蜡印，柄上缠着麻绳，往你手里一塞。',
      { if: 'flag.p_knife_hanged', speaker: '马里昂', text: '伊斯特拉说你办事利索。那三只桶我叫人劈了当柴烧了。印拿着，明天当着各国的面再发一遍誓。' },
      { if: 'flag.p_knife_held', speaker: '马里昂', text: '地牢的饭我叫厨房照军官的份送。伊斯特拉天天去看那三根绳子。印拿着，明天当着各国的面再发一遍誓。' },
      { if: 'flag.p_knife_released', speaker: '马里昂', text: '伊斯特拉一个月没同我说公事以外的话了，我都有点想她。印拿着，明天当着各国的面再发一遍誓。' },
      '书记官把登记册转过来，拿笔杆点了点该按印的地方。蜡还烫。',
      { speaker: '书记官', text: '印面别拿手摸，沾了油盖不清。下一位。' },
    ],
    first: DESK_FIRST,
    next: 'a1_01',
  },

  // ═══════════════════════════ 洛伦特 ═══════════════════════════
  p_lorent_01: {
    id: 'p_lorent_01',
    title: '王座上的两岁',
    chapter: '序章 · 印',
    loc: '洛伦特 · 洛伦泰内王宫',
    date: '1022年卡斯坦月1日',
    text: [
      '洛伦泰内王宫的大厅铺着红地砖，磨得照得见人。国王再过三天满两岁，这会儿在他爹的王座上睡着了，脚离垫子还差一大截，一只小鞋掉在台阶上。没人敢上去捡。',
      '太后伊奥瑞尔坐在王座边的矮凳上剥橘子。她是精灵，八十三岁，看上去同厅里最年轻的侍女差不多大。',
      { if: "race == 'dwarf'", text: '你是红宝石领留在宫里的老顾问。上个月丢的那把椅子，就挨着你坐的这一把。' },
      { if: "race == 'gnome'", text: '你是伊奥尚来的戏班子里的人，进宫演了三回，第四回叫人留下当了差。' },
      { if: "race == 'harpy'", text: '你是雇来送信的。洛伦特的司礼官至今拿不准该让你走门还是走窗。' },
      '恩特本来了六个骑士，靴子上的泥没刮。领头的胡子花白，话是冲着满厅的人说的。',
      { speaker: '恩特本的骑士', text: '上个月御前会议议司库的椅子。九个人到了八个，五比三，红宝石矮人坐了四百多年的位子，给了一位红林来的精灵。' },
      { speaker: '恩特本的骑士', text: '阿瑟利斯大人迟了一刻钟，门已经关了。看门的那个到今天说不清自己那阵子去了哪儿。诸位，这叫慑心。' },
      { if: "race == 'elf'", text: '你是跟着太后从红林来的。那六位进门，先看的是你的耳朵，后看的才是王座。' },
      { if: "bg == 'squire'", text: '花白胡子认得你：独角兽骑士的扈从，养马人家的孩子。他的眼睛从你身上滑了过去，没停。' },
      '伊奥瑞尔没起身。她把一瓣橘子放进嘴里，冲你招了招手。',
    ],
    first: [OIL],
    choices: [
      {
        text: '看那位骑士的脸，看他自己信不信',
        once: true,
        check: { skill: 'insight', dc: 12 },
        ok: { text: '他信。说到“慑心”两个字，他的肩膀往后缩了半寸。见过受慑者的人提起这两个字，都缩这一下。', effects: ['flag pax_lor_sincere'] },
        fail: { text: '你盯着他看。他也盯着你看，还偏过头同旁边的人说了句什么，六个人都笑了。', effects: ['flag pax_lor_mocked'] },
      },
      {
        text: '回想上回御前会议是怎么举的手',
        once: true,
        check: { skill: 'history', dc: 11, mods: [{ if: 'is.noble', n: 2, why: '举手的都是你的熟人' }, { if: "race == 'dwarf'", n: 2, why: '丢椅子的是你的族人' }] },
        ok: { text: '你记得那天。五票里有一票是独角兽骑士莫冈的，他娶的是罗恩·阿瑟利斯的妹妹。阿瑟利斯就算赶上了，也是五比四。那扇门关不关，椅子都得换人。', effects: ['flag pax_lor_vote'] },
        fail: { text: '你只记得那天厨房上的是鳟鱼，酱浇得太咸。' },
      },
      {
        text: '走上台阶，把国王掉的那只鞋捡起来',
        once: true,
        effects: ['rep rose +1'],
        result: '你把鞋放回王座的垫子上。国王在梦里蹬了一脚，又把它踢了下来。恩特本那边有人笑出了声。太后也笑了，这是她今天头一回抬眼。',
      },
      { text: '跟太后进内室', goto: 'p_lorent_02' },
    ],
  },

  p_lorent_02: {
    id: 'p_lorent_02',
    title: '太后的茶',
    art: 'ev_lilac_wars',
    loc: '洛伦泰内 · 太后内室',
    text: [
      '内室很小。一张茶桌，两把椅子，窗外是血酒河。茶籽是她从船上带下来的，在红林种了二十年，这是头一茬，苦。',
      { speaker: '伊奥瑞尔', text: '我叫人把看门的劝开了一会儿。劝，用的是嘴。别的我没做，也用不着做，票本来就够。' },
      '她给你倒了一杯，自己没喝。',
      { speaker: '伊奥瑞尔', text: '和约要各国出一个监誓人，拿一枚印，去看别人把誓发完。洛伦特出你。印到安本科斯特去领。' },
      '你怀里那封信是她昨晚叫人送来的，玫瑰色的封蜡，里头只有一句话。她现在把那句话说了出来。',
      { speaker: '伊奥瑞尔', text: '克雷格·达梅里斯那一枪，是不是他自己的。这一条和约上没有，是我加的。' },
      '大捷比武会是前年泪落月的事。鲁本国王的马还养在厩里，天天有人刷，没人骑。',
    ],
    first: ['quest lance start', 'codex ioriel', 'codex rose_and_moon'],
    choices: [
      {
        text: '问她自己信哪一种',
        once: true,
        effects: ['flag pax_lor_tip'],
        result: [
          '她端着茶壶想了很久，久到壶嘴不冒气了。',
          { speaker: '伊奥瑞尔', text: '我要是知道，就用不着你去了。' },
          { speaker: '伊奥瑞尔', text: '枪是比武会上统一发的。账在红宝石矮人手里，他们这两天在城门外装箱。去晚了，账就跟着车走了。' },
        ],
      },
      {
        text: '问那个看门的如今在哪儿',
        once: true,
        effects: ['flag pax_lor_guard'],
        result: [
          { speaker: '伊奥瑞尔', text: '在厨房剥豆子。他自己要去的，说守门守怕了。' },
          '她把自己那杯凉茶泼进了窗外的河里。',
          { speaker: '伊奥瑞尔', text: '我八十三岁，长老们管我叫孩子。再过十七年他们得改口。我等得起，这一点我同你们不一样。' },
        ],
      },
      { text: '起身，去大厅回话', goto: 'p_lorent_03' },
    ],
  },

  p_lorent_03: {
    id: 'p_lorent_03',
    title: '对大厅说什么',
    loc: '洛伦泰内 · 大厅',
    text: [
      '你回到大厅的时候国王醒了，正拿那只鞋敲王座的扶手。恩特本的六个人没坐，站成一排。满厅两百来号人停了刀叉。长桌上摆着给国王生辰预备的蜜渍李子，一碟也没少。窗下的乐师抱着琵琶，弦按住了，不敢拨。',
      '太后没跟出来。内室的门留着一条缝。',
      { if: 'is.god', text: '你一进门，前排的人先站了起来，后排的跟着站，站起来才想起不知道自己为什么站。花白胡子没站。他按着剑柄，指节都白了，话是冲你说的，眼睛却一直盯着内室那道门缝。' },
      { speaker: '恩特本的骑士', text: '太后挑的监誓人。那你先在自己家里看一回誓：会议叫没叫人慑住，给句话。' },
      '后排有个年轻骑士一直没开口。他把手套摘下来，又戴上。',
      { if: 'flag.pax_lor_sincere', text: '花白胡子是真信。你要是说没有，落在他耳朵里，就是又一个被慑住的人在替她开口。' },
      { if: 'flag.pax_lor_mocked', text: '那六个人刚才笑过你一回，这会儿等着笑第二回。' },
    ],
    choices: [
      {
        text: '从乐师手里借过琵琶，先弹一段生辰曲',
        tag: '吟游诗人',
        if: "class == 'bard'",
        once: true,
        check: { skill: 'performance', dc: 11 },
        ok: { text: '你弹的是洛伦特人家给孩子过生辰的那支，谁家都唱过。弹到第二遍，后排有人跟着哼。国王不敲扶手了，拿鞋打拍子。花白胡子没哼，可也没再往前站。', effects: ['flag pax_lor_lute'] },
        fail: { text: '弦叫人按了半天，一拨就走了音。国王哈哈大笑，满厅的人不敢不笑，恩特本那六个笑得最响。你把琵琶还给了乐师。', effects: ['flag pax_lor_mocked'] },
      },
      {
        text: '告诉大厅：太后谁也没慑',
        check: {
          skill: 'deception', dc: 12,
          mods: [{ if: 'flag.pax_lor_vote', n: 2, why: '票数你记得一清二楚' }, { if: 'flag.pax_lor_mocked', n: -1, why: '他们刚笑过你' }, { if: 'flag.pax_lor_lute', n: 1, why: '大厅刚跟着你哼过曲子' }],
        },
        ok: {
          text: '“没有。票是五比三，门是到点关的。”你说得很平。刀叉声先从后排响起来，一路响到前排。恩特本的人没动。后排那个年轻的看了你一眼，把手套戴好了。',
          effects: ['flag p_hall_denied', 'rep rose +1'],
          goto: 'p_lorent_04',
        },
        fail: {
          text: '你说“没有”之前顿了一下。就一下。花白胡子往地砖上啐了一口，六个人转身就走，靴子上的泥甩了一路。大厅没散，可也没人再动刀叉。',
          effects: ['flag p_hall_denied'],
          goto: 'p_lorent_04',
        },
      },
      {
        text: '把门卫那件事照实说了',
        check: {
          skill: 'persuasion', dc: 12,
          mods: [
            { if: 'flag.pax_lor_vote', n: 2, why: '就算他赶上了，也是五比四' },
            { if: 'flag.pax_lor_guard', n: 1, why: '那个门卫的下落你问过' },
            { if: "faction == 'rites'", n: 2, why: '白玫瑰庭的人说话，大厅肯听' },
            { if: "faction == 'sapphire'", n: -1, why: '恩特本同凯伦有血仇' },
            { if: 'flag.pax_lor_mocked', n: -1, why: '他们刚笑过你' },
            { if: 'flag.pax_lor_lute', n: 1, why: '大厅刚跟着你哼过曲子' },
          ],
        },
        ok: {
          text: [
            '你把门卫的事说了：一会儿工夫，用嘴劝的，别的没有。',
            '有人笑，有人骂。花白胡子愣在那儿。他备了一肚子话，没备着听见这个。内室的门缝合上了。',
          ],
          effects: ['flag p_hall_truth', 'rep rose -1'],
          goto: 'p_lorent_04',
        },
        fail: {
          text: '你刚说到“劝开了一会儿”，后半句就没人听了。“她认了！”有人喊。恩特本的人当场退席，出宫门的时候已经唱上了。内室的门缝合上了。',
          effects: ['flag p_hall_truth', 'rep rose -2'],
          goto: 'p_lorent_04',
        },
      },
      {
        text: '宣布这件事由监誓人立案，待查',
        check: {
          skill: 'persuasion', dc: 12,
          mods: [
            { if: "faction == 'staff'", n: 2, why: '验得出真假的正是你的师门' },
            { if: 'flag.pax_lor_sincere', n: 1, why: '你看得出他是真信' },
            { if: "faction == 'sapphire'", n: -1, why: '恩特本同凯伦有血仇' },
            { if: 'flag.pax_lor_mocked', n: -1, why: '他们刚笑过你' },
            { if: 'flag.pax_lor_lute', n: 1, why: '大厅刚跟着你哼过曲子' },
          ],
        },
        ok: {
          text: '“这件事我收下了，等验得出真假的人来验。在那以前，谁再当众提‘慑’字，先到我这儿画押。”花白胡子张了张嘴。画押这两个字比刀管用，恩特本的老爷们最烦在纸上留名。',
          effects: ['flag p_hall_inquiry', 'rep wise +1'],
          goto: 'p_lorent_04',
        },
        fail: {
          text: [
            { speaker: '恩特本的骑士', text: '立案？拿什么立？印你还没领呢。' },
            '这话不假。恩特本的人退了席。剩下的人看你，是在看一个替太后拖日子的。',
          ],
          effects: ['flag p_hall_inquiry', 'rep wise +1', 'rep rose -1'],
          goto: 'p_lorent_04',
        },
      },
      {
        text: '以神的名义替太后作保',
        tag: '神',
        if: 'is.god',
        effects: ['flag p_hall_denied', 'rep rose +2', 'rep moon -1', 'var god_acts +1'],
        result: [
          '你说她没有。你没抬嗓门，可满厅两百来号人一起点了头，连国王也不敲鞋了。',
          '恩特本的六个人退了席。他们出了宫门，对街口卖栗子的说的头一句话是：太后兜里揣了个神。这话比你先到了安本科斯特。',
          '内室的门开了。伊奥瑞尔站在门口看你，手指在袖子里一下一下地掐。她在算账，算的是一百年以后的。',
        ],
        goto: 'p_lorent_04',
      },
    ],
  },

  p_lorent_04: {
    id: 'p_lorent_04',
    title: '红宝石矮人的箱子',
    loc: '洛伦泰内 · 城门外',
    shop: { name: '红宝石矮人的地摊', blurb: '带不走的，论件卖，不讲价。', stock: ['healing_potion', 'bandage', 'dagger', 'shield'] },
    text: [
      '城门外停着十一辆大车。红宝石矮人在装箱：算盘，秤，成捆的账册，一箱一箱钉死，箱盖上拿红漆写着年份。最老的一箱写的是 530。',
      '管事的老账房坐在一只空箱上点数。他那把椅子上个月给了一位红林来的精灵。据他说，那位算账不用算盘，手指头在半空里划拉两下就有了数。',
      { speaker: '老账房', text: '四百九十二年的账，十一车。钉子自己带的，木板自己带的，不欠洛伦特一根。带不走的在那边，论件卖。' },
      { if: "race == 'elf'", speaker: '老账房', text: '我没说你。' },
      { if: "race == 'elf'", text: '他钉了两颗钉子。' },
      { if: "race == 'elf'", speaker: '老账房', text: '也说你。' },
      { if: "race == 'dwarf' && class == 'artificer'", text: '有一箱没钉盖，里头是一套门符的拓片。红宝石关那两回没破的门，用的就是这一套。老账房拿脚把箱子往你这边推了推。' },
      { if: "race == 'dwarf' && class == 'artificer'", speaker: '老账房', text: '“土办法”，他们是这么叫的。你的东西，你自己钉。' },
      { if: 'flag.p_hall_truth', text: '大厅里的事已经传到了城门口。几个装箱的矮人停了锤子，朝你点了点头，又接着钉。' },
      { if: 'flag.p_hall_denied', text: '大厅里的事已经传到了城门口。装箱的矮人没有一个抬头看你。' },
    ],
    first: ['codex tourney'],
    choices: [
      {
        text: '向老账房打听大捷比武会的开销',
        if: "race != 'dwarf'",
        once: true,
        check: {
          skill: 'persuasion', dc: 12, adv: 'flag.pax_lor_tip',
          mods: [
            { if: 'flag.p_hall_truth', n: 2, why: '你在大厅说了实话' },
            { if: 'flag.p_hall_denied', n: -1, why: '你在大厅替她圆了场' },
            { if: 'is.merchant', n: 1, why: '你同他讲的是行话' },
          ],
        },
        ok: {
          text: [
            '他从 1020 那一箱里抽出一本，翻到泪落月，拿指甲在一行上划了一道。',
            { speaker: '老账房', text: '比武会，骑枪一百四十根。二十七日那天，枪架上换过九根。哪一根谁家供的、谁领的，后头有画押。' },
            { speaker: '老账房', text: '这本是抄件，原件跟我走。看完别来问我，我只管数。' },
          ],
          effects: [LANCE_LEDGER],
        },
        fail: {
          text: [
            { speaker: '老账房', text: '1020 那箱钉上了。钉死的箱子再开，是另一笔买卖：开箱十枚金冠。钉子钱在里头，木板钱也在里头。' },
            '他算得很慢，一个子儿也没给你抹。账本倒是抄得工整。',
          ],
          effects: ['gold -10', LANCE_LEDGER],
        },
      },
      {
        text: '自己去 1020 那一箱里翻',
        tag: '矮人',
        if: "race == 'dwarf'",
        once: true,
        effects: [LANCE_LEDGER],
        result: '老账房没拦。你闭着眼也知道 1020 那箱在第几辆车上：族里的箱子从来按年份码，不按轻重。泪落月二十七日那一页，有人拿指甲划过一道。',
      },
      {
        text: '在城门边的酒摊上坐一会儿，喝一杯再走',
        once: true,
        cost: { gold: 2 },
        effects: ['rest short'],
        result: '摊主是索恩科斯特人，倒酒前先报年份和坡向，报完才收钱。酒是去年的，酸，他自己也说酸。你坐着看矮人钉完了第七辆车。',
      },
      { text: '上路，往恩特本的岔路口去', goto: 'p_lorent_05' },
    ],
  },

  p_lorent_05: {
    id: 'p_lorent_05',
    title: '莫尔班平原来的车',
    loc: '洛伦特 · 去恩特本的岔路口',
    text: [
      '岔路口停着一队牛车，拉的是棺材：四十口，白蜡木，盖上拿炭条写着号。八年前洛伦特人在莫尔班平原输了一仗，死人就地埋了，和约签了才准起回来。',
      '卸车的扈从两个人抬一口。抬到第九口，后头那个一使劲，差点把棺材举过了头。两人对看一眼，谁也没吭声，接着抬。',
      '有个年轻骑士顺着车一口一口找号，手套摘了又戴。大厅后排站的就是他。他在三十七号跟前站住，一只手把棺材掀起了一头，又放下了。',
      { speaker: '年轻骑士', text: '三十七号是家父。恕我直言，他生前比这个沉。' },
      { if: "faction == 'rites'", text: '白玫瑰庭的规矩你背得出：起回来的战死者，落葬前开棺，得有懂礼的人在场。这儿没有第二个。' },
    ],
    first: ['flag saw_empty_graves', 'flag p_met_valeran'],
    choices: [
      {
        text: '盘问赶车的，路上停没停过',
        once: true,
        check: { skill: 'investigation', dc: 12 },
        ok: { text: '车夫说十一天的路一回没停。你叫他倒着讲，一夜一夜往回数。数到第六夜他卡住了：那晚他记得卸了牛，不记得喂过。第二天早上牛槽是满的。', effects: ['flag pax_lor_driver'] },
        fail: { text: '车夫说没停过，说了三遍，一遍比一遍响。押车的军士朝这边看了过来。' },
      },
      {
        text: '走到第九口跟前，把撬棍插进盖缝',
        result: [
          { speaker: '押车的军士', text: '太后的人动恩特本的棺材！' },
        ],
        goto: 'p_lorent_05a',
      },
      {
        text: '请那位骑士作保，一起验第九口',
        check: { skill: 'persuasion', dc: 12, mods: [{ if: 'flag.p_hall_truth', n: 2, why: '你在大厅说了实话' }, { if: 'flag.p_hall_denied', n: -1, why: '他记着你那句“没有”' }] },
        ok: {
          text: [
            { speaker: '年轻骑士', text: '恕我直言，诸位。这位是太后的人，我不喜欢。第九口抬起来同三十七号一样轻，我更不喜欢。' },
            '他自己接过了撬棍。押车的军士把矛竖了回去。',
          ],
          goto: 'p_lorent_05b',
        },
        fail: {
          text: [
            '他还没开口，押车的军士先看见了你搭在棺材盖上的手。',
            { speaker: '押车的军士', text: '太后的人动恩特本的棺材！' },
          ],
          goto: 'p_lorent_05a',
        },
      },
      {
        text: '搬出白玫瑰庭的规矩，叫他们自己开棺',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: ['flag pax_lor_rite'],
        result: [
          '你把落葬的规矩一条一条背给押车的军士听。他听到第三条就摆了手，叫人去拿撬棍。',
          '恩特本人烦太后，可不敢烦阿德安和米娜拉。',
        ],
        goto: 'p_lorent_05b',
      },
    ],
  },

  p_lorent_05a: {
    id: 'p_lorent_05a',
    title: '动棺材的人',
    text: [
      '押车的军士把矛横了过来。他四十来岁，胡子刮了一半，另一半大概是听见喊声就扔了刀子。两个扈从一左一右围上，矛杆是新削的，白茬还没磨圆，握矛的手在抖。',
      '牛不管这些，低着头啃路沟边的草。三十七号还搁在车尾，盖板歪着。',
      '年轻骑士退开一步，手按在剑上，没拔，也没走。他又把手套摘了下来。',
      { if: 'is.god', text: '军士的矛尖一直往下沉。他自己也看见了，咬着牙往上抬，抬一回，沉一回。' },
    ],
    combat: {
      title: '岔路口',
      intro: '三个押车的把你堵在了车辕和棺材当中。',
      enemies: [{ id: 'village_militia', n: 2, name: '恩特本扈从' }, { id: 'man_at_arms', name: '押车的军士' }],
      xp: 60,
      specials: [
        {
          id: 'maugun', name: '报出莫冈大人的名号', desc: '独角兽骑士娶的是恩特本老爷的妹妹',
          check: { skill: 'intimidation', dc: 11, mods: [{ if: "bg == 'squire'", n: 2, why: '你就是他的扈从' }] },
          success: { text: '“独角兽骑士的人，你们也捆？”三根矛尖一齐低了一截。莫冈大人娶的是他们老爷的妹妹，这门亲戚恩特本人不爱提，可也不敢忘。', applyAll: { cond: 'frightened', turns: 2 } },
          fail: { text: '“莫冈？”军士笑了，“他那匹长角的马，拉过犁没有？”' },
        },
        {
          id: 'coffin', name: '把空棺材掀下车', desc: '空的，所以一个人掀得动',
          check: { skill: 'athletics', dc: 11 },
          success: { text: '空的，所以你一个人掀得动。棺材顺着车板滑下去，撞翻了两个，第三个往后一跳，踩进了路沟。', dmgAll: '1d8', type: 'bludgeoning', applyAll: { cond: 'prone', turns: 1 } },
          fail: { text: '你掀的那一口不是空的。', selfDmg: '1d4' },
        },
      ],
      win: { effects: ['flag pax_lor_won'], goto: 'p_lorent_05b' },
      lose: { effects: ['flag pax_lor_tied', 'heal 1d6+2'], goto: 'p_lorent_05b' },
    },
  },

  p_lorent_05b: {
    id: 'p_lorent_05b',
    title: '三十七号',
    text: [
      { if: 'flag.pax_lor_won', text: '三个押车的坐在路沟沿上，军士捂着鼻子，血从指头缝里往外渗。年轻骑士从头到尾没插手。他走过来，先把军士的矛捡起来，插回了车上。' },
      { if: 'flag.pax_lor_won', speaker: '瓦勒兰', text: '恕我直言，您下手不轻。他们是我的同乡。不过棺材的事，他们确实答不上来。' },
      { if: 'flag.pax_lor_tied', text: '你被捆在车辕上，嘴里一股铁锈味。过了一顿饭的工夫，有人从背后割开了绳子，是那个年轻骑士。' },
      { if: 'flag.pax_lor_tied', speaker: '瓦勒兰', text: '恕我直言，他们捆错了人。三十七号是我自己掀的，要捆该先捆我。' },
      { if: 'flag.pax_lor_rite', text: '钉子是押车的军士亲手起的，起一颗，往地上吐一口唾沫。' },
      '轻的几口都撬开了。四十口里空了七口，垫棺的干草还在，压出过人形。每颗钉子边上都有一个旧钉眼：有人起过钉，又照原样钉了回去，钉得比头一回还直。',
      { if: 'flag.pax_lor_driver', text: '车夫说的第六夜，车队歇在一片洼地里，前后十里没有村子。' },
      { speaker: '瓦勒兰', text: '我叫瓦勒兰，恩特本人。家父跟着老罗恩大人迎着凯伦的马队冲上去，没回来。我等了八年，等来一把干草。' },
      { if: 'flag.p_hall_denied', speaker: '瓦勒兰', text: '大厅里您说“没有”。这两个字我记着。' },
      { if: 'flag.p_hall_truth', speaker: '瓦勒兰', text: '大厅里您把门卫的事说了。恩特本没料到，我也没料到。' },
      { if: 'flag.p_hall_inquiry', speaker: '瓦勒兰', text: '大厅里您说要立案。恕我直言，这七口也请一并立上。' },
      { if: 'is.god', speaker: '瓦勒兰', text: '他们说您是神。恕我直言，神要是真在，该知道家父去了哪儿。' },
      { if: 'is.god', text: '你不知道。你数得清四十口里空了几口，看不见第六夜的洼地里来过谁。' },
    ],
    choices: [
      {
        text: '把七个空号抄一份，交给他带回恩特本',
        effects: ['rep rose -1'],
        result: [
          { speaker: '瓦勒兰', text: '我照实禀报：七口空的，号是太后的监誓人给的。恩特本会有人不信后半句。那是他们的事。' },
        ],
        goto: 'p_lorent_06',
      },
      {
        text: '叫人把七口空棺照原样钉好，先不声张',
        effects: ['rep rose +1'],
        result: [
          { speaker: '瓦勒兰', text: '恕我直言，纸包不住干草。我不替您瞒，也不替您说。' },
          '他自己扛起三十七号，放回了车上。',
        ],
        goto: 'p_lorent_06',
      },
      {
        text: '照名册在七口空棺上写名字，当有人的落葬',
        tag: '旧礼',
        if: "faction == 'rites'",
        effects: ['rep rose +1'],
        result: '你照着押车的名册，把七个名字一个一个写在棺盖上，每写一个念一遍。瓦勒兰站在三十七号旁边。等你念到那一个，他把手套摘了，这回没再戴上。',
        goto: 'p_lorent_06',
      },
    ],
  },

  p_lorent_06: {
    id: 'p_lorent_06',
    title: '登记桌',
    loc: '安本科斯特 · 旧斗兽场拱廊',
    date: '1022年埃斯玛月2日',
    text: [
      '安本科斯特的旧斗兽场，拱廊底下排着队。' + DESK,
      { speaker: '书记官', text: '名字。怎么写？' },
      '你报了。他写了两笔，停了。',
      { speaker: '书记官', text: '劳驾，名字怎么写，再说一遍。' },
      '你一个字一个字拼了一遍。他往右挪了一栏，问所属。你说洛伦特。他搁下手里的笔，换了一支细的，把“洛伦特”三个字写得很花，每一笔都拖出一条卷须，写完举起来吹了吹。',
      { speaker: '书记官', text: '上一位洛伦特人嫌我写得素，告到了司礼官那儿。' },
      DESK_GOD,
      '他从桌下的匣子里数出一枚铜柄蜡印，柄上缠着麻绳，往蜡锅里蘸了一下，在册子上按了个样，才交到你手里。',
      DESK_NEXT,
      '拱廊那头站着一个人，二十出头，披着卡奈特的王袍，身边三步之内没有别人。排队的人宁可绕着柱子走。那是克雷格·达梅里斯。',
    ],
    first: DESK_FIRST,
    choices: [
      {
        text: '隔着拱廊朝他点一下头',
        effects: ['rep moon +1'],
        result: '他愣了一下，才想起来该还礼。还完了礼，他还站在原地，像一个等着人来点他名的。',
        goto: 'a1_01',
      },
      {
        text: '装没看见他，从他面前走过去',
        effects: ['rep rose +1'],
        result: '你从他面前走了过去。他没动，也没出声。跟你来的洛伦特马夫回头看了一眼，路上把这事讲给了三个人听。',
        goto: 'a1_01',
      },
      {
        text: '把太后那封信的封蜡朝外，从他面前走过去',
        if: 'item.ioriel_letter >= 1',
        effects: ['rep rose +1', 'rep moon -1'],
        result: '玫瑰色的封蜡他认得。他把背挺直了，两只手垂下来，是等人宣判的站法。你走过去了，什么也没宣。',
        goto: 'a1_01',
      },
    ],
  },

  // ═══════════════════════════ 乌霜边区 ═══════════════════════════
  p_ebonmarck_01: {
    id: 'p_ebonmarck_01',
    title: '围城第九十一天',
    chapter: '序章 · 印',
    art: 'ev_fireball',
    loc: '乌霜边区 · 乌霜领',
    date: '1022年卡斯坦月1日',
    text: [
      '围城第九十一天。乌霜领的大厅里烧的是拆下来的马厩，烟里一股尿臊味。城外三路人的营火连成了一个圈：白湾人的战帮，阿德安的骑士，还有几面你认得的军团旗。昨夜那个圈又近了一箭地。',
      { if: "race in ['elf', 'half_elf']", text: '你是乌里昂·星誓那一房的人。他娶阿尔瓦·乌霜那年，你跟着进了乌霜家的门。他死在试炼山上，你没走。' },
      { if: "race == 'harpy'", text: '你是乌翼兵团的人。去年冬天你同队长顶了嘴，叫她留在城里送信。' },
      '加雷克·乌霜站在长桌的地图前头。他二十四岁，五个兄弟只剩两个。另一个是他哥哥乌尔维克，坐在门槛上磨斧子。',
      { speaker: '加雷克', text: '你带一句话去安本科斯特：听我们讲完，或者别再杀了。两样他们挑一样，哪样都行。' },
      { speaker: '乌尔维克', text: '他们两样都不挑。他们挑第三样：全埋了，省得听。' },
      { if: "faction == 'sapphire'", text: '大厅的柱子上还钉着凯伦·长枪的一道旧军令：不追溃兵。围了九十一天，没人舍得揭。' },
      { if: 'is.god', text: '加雷克看了你很久。有句话到了他嘴边，又咽了回去：这时候开口求你，像是拿围城逼你。' },
      '军需官等在门口销账，顺嘴提了一件事。前几天城里混进来一个行商，买消息，付的是旧帝国的金币，打听的是皇帝在沼泽堡倒下的地方。',
      { speaker: '军需官', text: '钱是足金的，我咬过。就是有股味，像庙里烧的东西，拿醋泡了一夜还在。' },
    ],
    first: [OIL, 'flag p_old_coin', 'codex garrec', 'codex black_castanor'],
    choices: [
      {
        text: '把那枚金币要过来看',
        once: true,
        check: { skill: 'history', dc: 11 },
        ok: {
          text: [
            '正面是五十三世年轻时的头像，那会儿他还没蓄须。这种足金的钱二十年前就停铸了，后来的都掺铜。有人把一袋老钱压了二十年箱底，如今拿出来，买一个死人的下落。',
            { speaker: '军需官', text: '你认得，你拿走。这味儿我闻着睡不着。按分量抵五个新金冠，你在外头花，花到别人兜里去。' },
          ],
          effects: ['gold +5'],
        },
        fail: { text: '金币就是金币，沉，黄。军需官怕你顺走，一直拿两根指头按着。' },
      },
      {
        text: '问加雷克，这句话要讲给谁听',
        once: true,
        check: { skill: 'insight', dc: 12 },
        ok: {
          text: [
            { speaker: '加雷克', text: '讲给签了字的人听。家父三十七年没做过自己的主。他们恨他，我不拦，我只要一口棺材，和一个准日子。' },
            '他把地图往回卷，卷到一半停了。',
            { speaker: '加雷克', text: '大多数年头没做过。' },
          ],
          effects: ['flag pax_ebo_garrec'],
        },
        fail: {
          text: [
            { speaker: '加雷克', text: '讲给肯听的人。你是信使，信使用不着懂信。' },
            '他把地图卷了起来。',
          ],
        },
      },
      {
        text: '在大厅的神龛前点一盏灯再走',
        tag: '旧礼',
        if: "faction == 'rites' || class == 'cleric'",
        once: true,
        effects: ['rep dragon +1'],
        result: '神龛里供的是卡斯特洛斯。和约以后，东坎诺还敢当众给他点灯的大厅没剩几座。乌尔维克停了手里的斧子，等你点完才接着磨。',
      },
      { text: '把军团牌掖进领口，出城', goto: 'p_ebonmarck_02' },
    ],
  },

  p_ebonmarck_02: {
    id: 'p_ebonmarck_02',
    title: '自己人的申辩',
    loc: '乌霜领 · 城门洞',
    text: [
      '城门洞里押着一个老军团兵，五十来岁，旧锁甲，牌子还挂在脖子上。早上白湾人射进来一支箭，箭杆上绑着话：交出 1016 年烧村的那个人，信使可以走大路过营。',
      '那支箭还插在门板上。布条上是白湾人的字，底下有人拿炭用帝国话抄了一遍，抄错了一个，又涂掉重写。老兵面前搁着一碗燕麦糊，结了皮，他没碰。',
      { speaker: '老军团兵', text: '火是我点的。四十一户。我记得火把在我手里，记得烫，不记得谁下的令，也不记得我为什么不问。' },
      { speaker: '老军团兵', text: '他们说这叫被慑住了。我不知道。我要是知道就好了。' },
      { if: "bg == 'soldier'", text: '这道门平日是你守的。他是你那一队的人，沼泽堡回来的路上分过你半块干粮。' },
      '守门的都是他的同袍，没人看他，也没人看你。加雷克留下的话是：营是信使要过的，人交不交，信使自己定。',
    ],
    choices: [
      {
        text: '听他把话讲完，看他自己信不信',
        once: true,
        check: { skill: 'insight', dc: 12 },
        ok: { text: '他没在替自己开脱，他是真想知道。每说一遍“不记得”，他都停一停，等着你告诉他那到底算不算。你也答不上来。', effects: ['flag pax_ebo_unsure'] },
        fail: { text: '他的话你听了三遍，三遍一字不差。背熟的话不一定是假的，打过仗的人讲自己的事都这样。你拿不准。' },
      },
      {
        text: '替他做一遍临终的祷告',
        tag: '祭司',
        if: "class in ['cleric', 'paladin'] || faction == 'rites'",
        once: true,
        effects: ['rep dragon +1', 'flag pax_ebo_prayed'],
        result: '你把手放在他头上。卡斯特洛斯的祷词，你没拿它递过一顶王冠，送人倒送过几十回。他跟着你念，念到一半说，够了，后头的他自己会。',
      },
      {
        text: '把他交出去，走大路',
        effects: ['flag p_gave_legionary', 'rep dragon -1', 'rep escann +1'],
        result: [
          '他自己把军团牌摘下来，搁在门洞的石台上，冲你点了个头，跟着白湾人的旗走了。有个守门的把牌子捡起来揣进怀里。没人看你。',
          { if: 'flag.pax_ebo_unsure', text: '过吊桥的时候他回了一次头。他还在等你那句答复。' },
          { if: 'flag.pax_ebo_prayed', text: '他一路走，嘴里一路在念后半段祷词。' },
        ],
        goto: 'p_ebonmarck_03',
      },
      {
        text: '把箭撅了，自己想办法过营',
        effects: ['rep dragon +1'],
        result: '你把箭杆撅成两截，扔出了城门。守门的有人笑了一声。老军团兵坐回墙根，把脸埋进了手里。',
        goto: 'p_ebonmarck_03',
      },
      {
        text: '交人，但要白湾人照凯伦的规矩立誓留他的命',
        tag: '蓝宝石之眼',
        if: "faction == 'sapphire'",
        effects: ['flag p_gave_legionary', 'rep escann +1'],
        result: [
          '白湾人的头领隔着壕沟听完，把一柄斧子插在了地上。',
          { speaker: '白湾头领', text: '凯伦的规矩我认。留人。留成什么样，凯伦没说。' },
          '老军团兵自己走过了吊桥。他的牌子没摘。',
        ],
        goto: 'p_ebonmarck_03',
      },
    ],
  },

  p_ebonmarck_03: {
    id: 'p_ebonmarck_03',
    title: '过营',
    loc: '乌霜领外 · 围城营地',
    text: [
      '天黑以后你出了城。围城的营地分三块，各烧各的火。白湾人那边在烤整只的羊。阿德安的骑士把长枪插成一排当篱笆。倒戈的军团兵挨着壕沟，旗上的黑龙拿白灰涂掉了一半。',
      '营门只有一道。守门的老哨兵披着白湾人的皮袄，站的是军团的姿势：脚跟并着，矛尾抵着右脚尖。门外的木桩上挂着一面黑龙旗，倒挂着，下摆冻在了泥里。',
      { if: 'is.god', text: '营里早有人传，乌霜家请来了个什么。你走近营门，烤羊那一圈人不吃了，阿德安的骑士有两个在胸前比了个枪的样子。只有老哨兵还是那副站相，眼珠不跟着你转。' },
      { if: 'flag.p_gave_legionary', text: '白湾人说话算数，大路给你让开了。那个老军团兵叫两个人押着往营地深处去，一回也没回头。' },
      { if: '!flag.p_gave_legionary', text: '大路是走不成了。营门口每过一个人，老哨兵都要问一声口令。' },
      { if: "race == 'harpy'", text: '飞过去是找死。阿德安的骑士里有弓手，这三个月他们射下来的信鸽能串一串。' },
    ],
    choices: [
      { text: '顺着大路走过去', if: 'flag.p_gave_legionary', goto: 'p_ebonmarck_04' },
      {
        text: '在老哨兵跟前停一停，看他一眼',
        if: 'flag.p_gave_legionary',
        effects: ['flag saw_sleeper', 'flag pax_ebo_seen03'],
        result: '你从他面前过，他的眼珠没跟着你动。你拿手在他眼前晃了晃。他站得笔直，喘气很匀，眼睛睁着，后面没人。过了一会儿他眨了眨眼，问你口令，问完又忘了自己问过。',
        goto: 'p_ebonmarck_04',
      },
      {
        text: '贴着壕沟的暗处摸过去',
        if: '!flag.p_gave_legionary',
        check: { skill: 'stealth', dc: 12, mods: [{ if: "race == 'harpy'", n: -2, why: '翅膀收不拢' }, { if: 'is.small', n: 1, why: '个子小' }] },
        ok: { text: '壕沟里的水没过脚踝，凉得咬人。你从倒戈的那几面旗底下钻了过去。有个兵正对着沟撒尿，没往下看。', goto: 'p_ebonmarck_04' },
        fail: { text: '你踩翻了沟沿上的一只饭盆。三个白湾人提着斧子追出来，一直把你撵出了营，有一个的斧背擦着了你的肩。', effects: ['flag pax_ebo_chased'], goto: 'p_ebonmarck_04' },
      },
      {
        text: '披一张羊皮，冒充白湾人送羊的',
        if: '!flag.p_gave_legionary',
        check: { skill: 'deception', dc: 12, mods: [{ if: "subrace == 'gerudian'", n: 2, why: '你长着一张北边人的脸' }] },
        ok: { text: '老哨兵问你口令。你说羊要凉了。他想了想，觉得这也算个理，抬手放了行。', goto: 'p_ebonmarck_04' },
        fail: { text: '你一张嘴，口音就漏了。烤羊的那一圈人全站了起来。你扔了羊皮就跑，肩上挨了一斧背，一路被撵出了营。', effects: ['flag pax_ebo_chased'], goto: 'p_ebonmarck_04' },
      },
      {
        text: '照军团守夜的老规矩，把口令报给他',
        if: '!flag.p_gave_legionary && item.legion_token >= 1',
        effects: ['flag saw_sleeper', 'flag p_used_watchword', 'flag pax_ebo_seen03'],
        result: [
          '那句口令你守了多少年夜，就报了多少年，张嘴就来。',
          '老哨兵的脚跟磕了一下，矛尖抬起来，给你让出了半个身位。你走出去五步，回头看。他已经转了回去，正拦着下一个人问口令。那人是他们自己的头领。头领骂他放了谁过去，他一脸不明白。',
        ],
        goto: 'p_ebonmarck_04',
      },
      {
        text: '绕到北边，从冻河上过',
        check: { skill: 'survival', dc: 12 },
        ok: { text: '冰是实的。你在河面上走了半夜，营火一直在右手边，没人往这边看。', goto: 'p_ebonmarck_04' },
        fail: { text: '冰是实的，就一处不实。你把一条腿拔出来的时候，岸上已经有人举着火把喊了。三个白湾人追了你半夜。', effects: ['flag pax_ebo_chased'], goto: 'p_ebonmarck_04' },
      },
      {
        text: '就这么从营地正中走过去',
        tag: '神',
        if: 'is.god',
        effects: ['rep dragon +2', 'rep escann -1', 'var god_acts +1'],
        result: [
          '你从营门正中走了进去，没弯腰。阿德安的骑士把插成篱笆的长枪一根一根拔起来，让出一条道。',
          '有个白湾人从背后给了你一矛。矛杆断成了三截，没人再试第二下。',
          '“乌霜边区请来了一个神。”这句话当夜就上了路，比你早三天到安本科斯特。',
        ],
        goto: 'p_ebonmarck_04',
      },
    ],
  },

  p_ebonmarck_04: {
    id: 'p_ebonmarck_04',
    title: '按亲戚价',
    art: 'ev_harpy_immortal_fight',
    loc: '东坎诺 · 阿德尼卡的大路',
    text: [
      '天亮的时候你上了阿德尼卡的大路。草是黄的，一眼望得出十里。路边每隔一程立着一座空哨塔，门板早叫人拆去烧了。',
      { if: 'flag.pax_ebo_chased', text: '营里追出来的那三个一直咬在后头。你肩上那一下还在往外渗血。' },
      '三个白湾人从哨塔后头转出来，斧子提在手里，走得不紧不慢。他们用不着跑：这片平地上，你没处躲。',
      '头顶上有人打了个很响的酒嗝。',
      '哨塔顶上蹲着一个鹰身女妖，翅膀收着，一只手拎酒囊，另一只手拄着一把比她自己还长的斧子。',
      { if: "race != 'harpy'", speaker: '鹰身女妖', text: '三个打一个。这买卖我看不下去，除非有人出钱。' },
      { if: "race == 'harpy'", speaker: '鹰身女妖', text: '又是你，顶嘴的那个。三个打一个，你求我一声，我听着呢。' },
    ],
    first: ['flag met_liv_early', 'codex liv', { if: 'flag.pax_ebo_chased', then: ['hp -4'] }],
    combat: {
      title: '阿德尼卡大路',
      intro: '她从塔顶跳下来，落在你和白湾人当中，斧子往地上一顿。',
      enemies: [{ id: 'reaver_raider', n: 3, name: '白湾战帮' }],
      allies: [{ id: 'harpy_raider', n: 1, name: '鹰身女妖' }],
      xp: 75,
      specials: [
        {
          id: 'mud', name: '往河滩上引', desc: '路边的河滩是烂泥，披甲的人下去就拔不出脚',
          check: { skill: 'survival', dc: 11 },
          success: { text: '河滩看着是干的，底下是烂泥。追得最紧的那个一脚陷到了膝盖，另外两个只好回头去拽他。', applyAll: { cond: 'restrained', turns: 2 } },
          fail: { text: '你自己先踩进了泥里。脚拔出来了，靴子留在了里头。', selfDmg: '1d4' },
        },
        {
          id: 'tower', name: '踹倒哨塔的烂梯子', desc: '梯子连着半面朽了的木墙',
          check: { skill: 'athletics', dc: 12 },
          success: { text: '梯子带着半面木墙一起倒了下去，砸起一片灰。', dmgAll: '1d8', type: 'bludgeoning' },
          fail: { text: '梯子比看上去结实。你的脚比看上去不结实。', selfDmg: '1d4' },
        },
      ],
      win: { effects: ['flag pax_ebo_won'], goto: 'p_ebonmarck_04b' },
      lose: { effects: ['flag pax_ebo_dragged', 'heal 1d6+2'], goto: 'p_ebonmarck_04b' },
    },
  },

  p_ebonmarck_04b: {
    id: 'p_ebonmarck_04b',
    title: '亲戚价',
    text: [
      { if: 'flag.pax_ebo_won', text: '最后一个白湾人是她拿斧背拍倒的。她挨个翻他们的腰包，翻出来的东西分成两堆，大的那堆归她。' },
      { if: 'flag.pax_ebo_dragged', text: '你是叫人拎着后领从烂泥里拔出来的。她把你搁在哨塔的台阶上，回头去翻白湾人的腰包，翻出来的东西分成两堆，两堆都归她。' },
      { if: "race != 'harpy'", speaker: '卡斯坦', text: '我叫卡斯坦。我爹是五十三世，我是他没上谱的闺女，往下数就是五十四。这笔账连矮人都挑不出错。' },
      { if: "race == 'harpy'", speaker: '卡斯坦', text: '在外头别叫队长，叫五十四世。我爹是五十三世，往下数就是我，这笔账连矮人都挑不出错。' },
      { if: 'flag.pax_ebo_won', speaker: '卡斯坦', text: '你脖子上挂的是我家的牌子，所以按亲戚价：十枚金冠。' },
      { if: 'flag.pax_ebo_dragged', speaker: '卡斯坦', text: '你脖子上挂的是我家的牌子，按亲戚价十枚。从泥里拎一回翻一倍，二十。' },
      { if: 'is.god', speaker: '卡斯坦', text: '你往那儿一站就能把人吓跑，那我跳下来图什么。跳都跳了，钱照收。' },
      { if: '!flag.pax_ebo_seen03', text: '她朝大路那头抬了抬下巴。最远那座哨塔底下站着一个人，披着白湾人的皮袄，矛尾抵着右脚尖，是军团的站法。看样子是哪一路撤哨的时候落下的。' },
      { if: '!flag.pax_ebo_seen03', speaker: '卡斯坦', text: '我飞过去瞧了一眼：睁着眼，后头没人。沼泽堡下来的有这一种，叫他站岗他就站。没人叫他换岗，他能站到下雪。' },
    ],
    first: ['flag saw_sleeper'],
    choices: [
      {
        text: '数十枚金冠给她',
        if: 'flag.pax_ebo_won',
        cost: { gold: 10 },
        effects: ['item +healing_potion'],
        result: [
          '她把金冠挨个咬了一遍，从大的那堆里拣出一只药瓶扔给你。',
          { speaker: '卡斯坦', text: '找零。酒另算，到了安本科斯特我来讨。你往后是我的掌玺大臣，掌玺大臣管打酒。' },
        ],
        goto: 'p_ebonmarck_05',
      },
      {
        text: '数二十枚金冠给她',
        if: 'flag.pax_ebo_dragged',
        cost: { gold: 20 },
        effects: ['item +healing_potion'],
        result: [
          '她把金冠挨个咬了一遍，从那两堆里拣出一只药瓶扔给你。',
          { speaker: '卡斯坦', text: '找零。酒另算，到了安本科斯特我来讨。你往后是我的掌玺大臣，掌玺大臣管打酒。' },
        ],
        goto: 'p_ebonmarck_05',
      },
      {
        text: '说手头紧，许她到了安本科斯特请一顿酒',
        effects: ['flag pax_ebo_owes'],
        result: [
          { speaker: '卡斯坦', text: '记账。五十四世的账本丢不了。你往后是我的掌玺大臣，头一件差事就是打酒。' },
          '她把地上的东西全扫进了自己的口袋，张开翅膀。风把你的兜帽掀了。',
        ],
        goto: 'p_ebonmarck_05',
      },
      {
        text: '同她掰一回手腕，赢了免账',
        tag: '武人',
        if: 'is.martial',
        check: { skill: 'athletics', dc: 12 },
        ok: {
          text: [
            '她的手背砸在了台阶上。她看看自己的手，又看看你，笑得翅膀直抖。',
            { speaker: '卡斯坦', text: '免了，再搭你一瓶药。你往后是我的掌玺大臣。到了安本科斯特，头一顿酒还是你请。' },
          ],
          effects: ['item +healing_potion'],
          goto: 'p_ebonmarck_05',
        },
        fail: {
          text: [
            '你的手背砸在了台阶上，响得很脆。',
            { speaker: '卡斯坦', text: '钱我不要了，要酒，两顿。手腕拿凉水泡泡，我的掌玺大臣得拿得动印。' },
          ],
          effects: ['hp -2', 'flag pax_ebo_owes'],
          goto: 'p_ebonmarck_05',
        },
      },
    ],
  },

  p_ebonmarck_05: {
    id: 'p_ebonmarck_05',
    title: '克拉丽蒙德的一句话',
    loc: '安本科斯特 · 达梅里斯堡外廊',
    date: '1022年埃斯玛月1日',
    text: [
      '你在达梅里斯堡的外廊上等了两天。来往的人看见你领口露出来的皮绳，就知道底下挂的是什么，都贴着另一边的墙走。',
      '第三天来的是刀锋边区的女王。二十三岁，头发剪得很短，腰上那把剑的鞘是新配的，剑是旧的。全坎诺都知道她拿它砍倒了谁。',
      { speaker: '克拉丽蒙德', text: '印我替你讨下来了。用不着谢，我有我的道理：输家得有人在场，不然这纸和约只是赢家写给自己的家书。' },
      '她靠着栏杆，看的是海湾。四条精灵的巨舰泊在西岸，一条有几条街那么大。',
      { if: 'is.god', text: '营地里那根断成三截的矛，她听说了。她同你说话，右手一直没离开剑柄。' },
      { if: 'is.god', speaker: '克拉丽蒙德', text: '话说在前头：我砍过一个自封的。' },
      { if: "class == 'fighter' && bg == 'soldier'", text: '你的军团牌只剩半块，另外半块熔在了沼泽堡的泥里。她的眼睛在那半块牌子上停了停。' },
      { speaker: '克拉丽蒙德', text: '我只问一件事。沼泽堡，皇帝叫你们放下兵器那天，你放了没有？' },
    ],
    first: ['codex clarimonde', 'rest short'],
    choices: [
      {
        text: '看她的脸，琢磨她为什么偏问这个',
        once: true,
        check: { skill: 'insight', dc: 12 },
        ok: { text: '她问得太熟了。只有那天自己也站在阵里、自己也得挑一边的人，才问得出这一句。她当年在莫尔班平原是替哪一边打的，这条廊上没人提，她自己也没提。' },
        fail: { text: '她脸上什么也没有。从试炼山上活着下来的人，脸上都什么也没有。' },
      },
      {
        text: '答：放了',
        effects: ['flag p_laid_arms'],
        result: [
          { speaker: '克拉丽蒙德', text: '那你听见的，是他这辈子头一道自己下的令。' },
          '她点了一下头。这是好是坏，她没说。',
        ],
        goto: 'p_ebonmarck_06',
      },
      {
        text: '答：没放',
        effects: ['flag p_fought_on'],
        result: [
          { speaker: '克拉丽蒙德', text: '火烧过来的时候，你手里还握着东西。行。' },
          '她把你的右手拿过去，翻过来看了看掌心的老茧，又还给了你。',
        ],
        goto: 'p_ebonmarck_06',
      },
      {
        text: '答：那天你不在沼泽堡',
        result: [
          { speaker: '克拉丽蒙德', text: '那你运气好。你用不着知道自己会怎么挑。' },
          '她说完转过去，接着看海湾里那几条巨舰。',
        ],
        goto: 'p_ebonmarck_06',
      },
    ],
  },

  p_ebonmarck_06: {
    id: 'p_ebonmarck_06',
    title: '登记桌',
    loc: '安本科斯特 · 旧斗兽场拱廊',
    date: '1022年埃斯玛月2日',
    text: [
      '旧斗兽场的拱廊底下排着队。你一站进去，前后各空出了两个人的位置。' + DESK,
      { speaker: '书记官', text: '名字。怎么写？' },
      '你报了。他写到一半，眼睛溜到你领口的皮绳上。',
      { speaker: '书记官', text: '劳驾，名字怎么写，再说一遍。头一遍我光顾着看那根绳子了。' },
      DESK_GOD,
      { if: 'is.god', text: '排在你后头的人已经退到了拱廊外面，这一回他们躲的倒不是你脖子上的牌子。' },
      '他记了，从桌下的匣子里数出一枚铜柄蜡印，柄上缠着麻绳，往蜡锅里蘸了一下，在册子上按了个样。按完了，他才回头去填前面空着的那一栏。笔尖停住了，墨聚成了一滴。',
      { speaker: '书记官', text: '所属。我写“东坎诺某地”，行不行？上头没教我这一栏该怎么填。' },
      { if: 'flag.pax_ebo_owes', text: '拱廊外头有人在大声打听哪家酒馆肯赊账。那个嗓门你认得。' },
      { if: '!flag.pax_ebo_owes', text: '拱廊外头有人在大声打听哪家酒馆的酒最冲。那个嗓门你认得。' },
    ],
    first: DESK_FIRST,
    choices: [
      {
        text: '请他照实写“乌霜边区”',
        check: { skill: 'persuasion', alt: ['intimidation'], dc: 12, mods: [{ if: 'flag.pax_ebo_garrec', n: 1, why: '你知道这句话是替谁带的' }] },
        ok: {
          text: ['他看了你一会儿，低头写了：乌霜边区。四个字不大，可是工整，同前头那些国号一般高。他把印推过来，蜡还烫。', DESK_NEXT],
          effects: ['rep dragon +1'],
          goto: 'a1_01',
        },
        fail: {
          text: [
            '他写了“东坎诺某地”，又在旁边拿小字添了一行：自称乌霜边区。',
            { speaker: '书记官', text: '两样都在上头了。往后谁来查，都不算我写错。' },
            '他把印推过来，蜡还烫。',
            DESK_NEXT,
          ],
          goto: 'a1_01',
        },
      },
      {
        text: '由他写“东坎诺某地”',
        effects: ['rep dragon -1', 'rep escann +1'],
        result: ['他松了口气，写得飞快，墨都没蘸第二回。他把印推过来，蜡还烫。', DESK_NEXT],
        goto: 'a1_01',
      },
      {
        text: '把军团牌搁在登记册上，叫他照着抄',
        tag: '军团',
        if: 'is.soldier && item.legion_token >= 1',
        effects: ['rep dragon +1'],
        result: [
          '他把牌子翻过来，凑着炭火认背面的番号，一笔一画描了下来，连那条黑龙也描了个大概。',
          { speaker: '书记官', text: '这是照原件抄的。谁也怪不着我。' },
          '他把印推过来，蜡还烫。',
          DESK_NEXT,
        ],
        goto: 'a1_01',
      },
    ],
  },
};
