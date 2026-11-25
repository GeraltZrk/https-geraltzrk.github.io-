// s1444 prologues_b.js — 序章乙：负怨者兵团（p_grudge_01–06）、退潮的人（p_tide_01–06）。
//
// 提纲（对照 BIBLE §11.1、§15、§16.2）
//
// 负怨者兵团：午后进南城 → 龙炉 → 渣堆 → 下城空地 → 入夜 → 清晨上车
//   p_grudge_01 巴尔加尔盖的城｜布罗克｜历史/调查 DC10 认水闸，设 knows_underpass；[矮人] 自动成；[小个子] 钻沟；
//               问玛瑙之门的车（p_grudge_carts）；抄近路（p_grudge_early）→ 02
//   p_grudge_02 龙炉的渣｜铁锤兵团的工头，布罗克｜说服/威吓 DC12，败则开打（打手×2，友军布罗克，败：扔出院子）；
//               [试炼] 赌撬板；[游荡者] 摸炉铭 +15；绕路 → 03
//   p_grudge_03 炉子还点得着吗｜老炉匠｜说谎（lies+1, p_lied）/ 实话（p_truth）/ 抬梁 运动 DC12（成败都 p_truth）；
//               [匠人] 看渣答话；[游荡者] 还炉铭；[神] 按伤口（p_truth, god_revealed, god_shrine）→ 04
//   p_grudge_04 验明正身｜乌什卡头一回露面，不入队｜医药/调查 DC11 设 body_verified；问她量什么（有优势）；
//               [施法者] 查记号；[神] 叫他报名字（body_verified, god_revealed, ushka_wary）→ 05
//   p_grudge_05 头砍了不好认｜边区军士｜说服 DC12 / 威吓 DC13，败：割走一只耳朵，companies-1；
//               [承嗣][试炼][无冕] 各一种说法；花钱买一夜 → 06
//   p_grudge_06 上车｜共用骨架第 ⑥ 场，q_o_grudge 开始 → a1_01
//
// 退潮的人：午后旧集市边上 → 死巷 → 墙根 → 空地边上 → 板车边 → 清晨
//   p_tide_01 手背｜兽人/半兽人写手背，地精写断链，别的种族写铁箍印｜察觉 DC10 看见佐格倒了；
//             [地精] 回去捡课本；[奴工] 遮箍印；摸钱袋 → 02
//   p_tide_02 最后一个｜两个抢功的兵，马布格｜打（扈兵×2，友军马布格）/ 扔兵器（p_surrendered, hp-3）/ 威吓 DC11；
//             [施法者] 亮法术；打输等于投降 → 03
//   p_tide_03 他还在打吗｜垂死的同族，马布格｜说谎（lies+1, p_lied）/ 实话 / 给他看手背或断链（p_truth）；
//             [战士系] 把斧子塞回他手里；[神] 按伤口 → 04
//   p_tide_04 算俘虏还是算尸首｜边区兵｜说服 DC13 / 欺瞒 DC12，败 hp-4；[无冕] 有优势；[试炼] 抬给他们看；
//             不吭声；[神] “算神”（god_revealed, 余烬+1）→ 05
//   p_tide_05 抬得动兽人的｜乌什卡开口｜问她是谁的人（codex rotcleaver）；跟她走；讨口吃的；[地精] 我认字；
//             q_o_tide 开始 → 06
//   p_tide_06 没有队长的人｜共用骨架第 ⑥ 场，签字那一栏空着 → a1_01
//
// 本文件自设自读的标记：p_grudge_carts p_grudge_early p_grudge_hammers p_grudge_thrown p_grudge_plate
//   p_grudge_motto p_grudge_asked p_grudge_broke p_grudge_marked p_grudge_ear p_grudge_hearsay
//   p_tide_saw_zog p_tide_hid p_tide_asked p_tide_noask p_tide_silent p_tide_reads

// 龙炉院子里的那一架：说服、威吓两条路谈崩了都打这一场。
const FORGE_BRAWL = {
  title: '龙炉的院子',
  intro: '工头把撬棍往渣里一戳。两个刨渣的放下铲子，朝手心啐了一口。',
  enemies: [{ id: 'thug', n: 2, name: '铁锤兵团的刨渣工' }],
  allies: [{ id: 'man_at_arms', name: '布罗克' }],
  specials: [
    {
      id: 'cart', name: '踹掉手推车的垫石', desc: '半车铁板顺着渣坡滑下去',
      check: { skill: 'athletics', dc: 11 },
      success: { text: '垫石一松，半车铁板顺着渣坡滑下去，拦腰撞上那两位。', dmgAll: '2d6', type: 'bludgeoning' },
      fail: { text: '垫石没动，你的脚趾动了。', selfDmg: '1d4' },
    },
    {
      id: 'ash', name: '扬一铲炉灰', desc: '凉了快二十年的灰，照样迷眼',
      check: { skill: 'sleight', alt: ['acrobatics'], dc: 11 },
      success: { text: '一铲灰扬出去。两个人捂着眼睛，骂的是同一句矮人话。', applyAll: { cond: 'blinded', turns: 1 } },
      fail: { text: '风向不对，灰全回到了你自己脸上。' },
    },
  ],
  xp: 50,
  win: { effects: ['rep companies -1'], goto: 'p_grudge_03' },
  lose: { effects: ['flag p_grudge_thrown'], goto: 'p_grudge_03' },
  fled: { effects: ['flag p_grudge_thrown'], goto: 'p_grudge_03' },
};

// 死巷里的那一仗：直接打、威吓失败都是这一场。打输等于投降。
const ALLEY_FIGHT = {
  title: '死巷',
  intro: '两面盾并在一起往巷子里压。马布格把斧子从墙边拎了起来。',
  enemies: [{ id: 'man_at_arms', n: 2, name: '抢功的兵' }],
  allies: [{ id: 'orc_raider', name: '马布格' }],
  specials: [
    {
      id: 'shed', name: '拽塌墙上的木棚', desc: '下城的石墙上都搭着木头棚子，拽倒一根柱子，整片往下砸',
      check: { skill: 'athletics', dc: 11 },
      success: { text: '柱子一歪，半条巷子的木板、瓦罐和一笼鸽子全落在那两面盾上。', dmgAll: '2d6', type: 'bludgeoning' },
      fail: { text: '柱子比看上去结实。你只拽下来一只鸽子笼，砸的是自己的脚。', selfDmg: '1d4' },
    },
    {
      id: 'horn', name: '学一声回头的号', desc: '拿兽人话朝巷口喊，叫他们以为大队折回来了',
      check: { skill: 'deception', alt: ['performance', 'intimidation'], dc: 11 },
      success: { text: '两个兵一齐回头看巷口。巷口没人，可他们的脚已经往后挪了。', applyAll: { cond: 'frightened', turns: 2 } },
      fail: { text: '你的嗓子劈了。其中一个兵笑出了声。' },
    },
  ],
  fleeable: false,
  xp: 50,
  win: { goto: 'p_tide_03' },
  lose: { effects: ['flag p_surrendered'], goto: 'p_tide_03' },
};

export const SCENES = {
  // ───────────────────────── 负怨者兵团 ─────────────────────────
  p_grudge_01: {
    id: 'p_grudge_01',
    title: '巴尔加尔盖的城',
    chapter: '序章 · 负怨者兵团',
    art: 'ev_far_and_wide',
    loc: '南卡斯托纳斯',
    date: '1444年奈拉月11日午后',
    text: [
      '你是来划账的。负怨者兵团的账本上有一条：玛瑙之门，1424 年，欠债者科尔古斯·杜坎森。半个时辰前下城的号停了，传话的一路跑一路喊，两个都倒了，红头发的那个，还有他。',
      '账要划，得有人亲眼看一眼尸首。去下城得穿过南城。这城是巴尔加尔拿整块石头凿的，从河边一层一层摞到山顶，峭壁区的楼有五层，街上晒不着太阳。',
      '你一路走一路估价。矮人砌的这一段，石缝里插不进指甲，拆了重砌，一丈四百金冠。人类后补的那一段灰浆酥了，白送都嫌占地方。',
      '布罗克跟在后头，扛着自己带来的铲子。营里发的那把他掂了一下就还回去了。',
      { speaker: '布罗克', text: '人类的铲子，轻。挖两下就卷刃。' },
      '脚边有个排水口，盖板叫人掀了，底下有水声。城底下的地下通道也是巴尔加尔挖的，听说没有一张图是画全的。水往哪边走，闸就在哪边。',
      { speaker: '布罗克', text: '四十步一个口，水全走银瀑。下城人管那条水叫粪瀑，叫得对。后补的那段三十步一个，还歪。' },
    ],
    first: ['codex greentide'],
    choices: [
      {
        text: '蹲下去，听水往哪边走',
        tag: '矮人',
        if: 'is.dwarf',
        effects: ['flag knows_underpass'],
        result: '你把手掌贴在沟沿上。水往东北，三个口并成一条干渠，干渠尽头该有一道闸，闸轮在左手边。矮人的沟都这么排，两千年没改过规矩。',
        goto: 'p_grudge_02',
      },
      {
        text: '顺着水声找水闸的方向',
        if: '!is.dwarf',
        check: { skill: 'history', alt: ['investigation'], dc: 10 },
        ok: {
          text: '三个口的水并成一条，往东北去。照巴尔加尔的规矩，并渠的地方必有一道闸。你把方位记在了账页的边上。',
          effects: ['flag knows_underpass'],
          goto: 'p_grudge_02',
        },
        fail: {
          text: [
            '你把胳膊伸进沟里摸水流。水流没摸着，摸着一只不乐意的耗子。',
            { speaker: '布罗克', text: '别问我。我是挖坑的，不是修沟的。' },
          ],
          effects: ['hp -2'],
          goto: 'p_grudge_02',
        },
      },
      {
        text: '钻进排水口看一眼',
        tag: '小个子',
        if: 'is.small',
        effects: ['flag knows_underpass'],
        result: '沟刚好容下你一个。爬了二十步，前头是一道铁闸，闸轮比你人还大。你退出来的时候布罗克往旁边让了三步，说这身味道得另算一笔。',
        goto: 'p_grudge_02',
      },
      {
        text: '问布罗克，玛瑙之门那年的车是怎么回事',
        once: true,
        effects: ['flag p_grudge_carts'],
        result: [
          '账页上那一行写的是玛瑙之门，1424 年。那年堡破了，兽人把堡里的死人装上车，叫活捉的矮人拉着，一个镇一个镇地送，带的话只有一句：这只是个开头。',
          { speaker: '布罗克', text: '我叔那年去玛瑙之门收一笔货款。他在第三辆车上，从上往下数第四个。拉车的认得他的靴子。' },
          { speaker: '布罗克', text: '所以我自己带铲子。' },
        ],
      },
      {
        text: '不看了，抄近路，抢在别的营前头下坡',
        effects: ['flag p_grudge_early'],
        result: '你们抄了一条石阶，陡，布罗克的铲子磕了一路。',
        goto: 'p_grudge_02',
      },
    ],
  },

  p_grudge_02: {
    id: 'p_grudge_02',
    title: '龙炉的渣',
    art: 'ev_forge',
    loc: '南卡斯托纳斯 · 龙炉',
    text: [
      '矮人堡里的炉子是这个样子：吊钩，飞轮，铁水顺着槽往模子里走。龙炉当年就照这个样子盖在南城的山顶上，只多了一颗石头凿的龙头，嘴朝天，烧的是跟试炼山借的地火。',
      '如今龙头塌了半边。绿潮进城以后，守炉的炉匠在山顶上又守了一年多，守不住了，自己放的火，自己砸的芯子。渣从山顶淌到院墙根，凉了快二十年，上头长了草。',
      '铁锤兵团先到一步。七八个岩石矮人在渣里刨，撬出来的铁板码了半车。下坡的近路从院子里穿，一根撬棍横在路当中。',
      { speaker: '布罗克', text: '拿人类打的铲子，刨巴尔加尔的炉子。' },
      { speaker: '铁锤兵团的工头', text: '先到先得。我们队长是巴尔加尔的血脉，这堆渣姓什么，你自己算。红宝石领的绕路。' },
      { if: 'is.god', text: '工头说完，自己往后挪了半步。他低头看了看脚，没弄清是谁叫它挪的，又站了回来。' },
    ],
    choices: [
      {
        text: '掏出账页：炉子是玛瑙之门的人盖的，账归兵团',
        check: {
          skill: 'persuasion', dc: 12,
          mods: [
            { if: 'is.dwarf', n: 1, why: '说的是矮人话' },
            { if: 'flag.p_grudge_early', n: 1, why: '到得早，他们的人还没到齐' },
            { if: 'rep.companies >= 3', n: 1, why: '诸团里有人替你们说过话' },
          ],
        },
        ok: {
          text: [
            '你把账页摊在他的铁板上。巴尔加尔是玛瑙之门出来的，玛瑙之门的账在兵团手里：从这堆渣里出去的每一块铁，都得过秤、记数。工头把那行字看了半天。',
            { speaker: '铁锤兵团的工头', text: '过秤就过秤。秤你们出。' },
          ],
          effects: ['flag p_grudge_hammers', 'rep companies +1'],
          goto: 'p_grudge_03',
        },
        fail: {
          text: [
            { speaker: '铁锤兵团的工头', text: '一张纸。' },
            '他把账页从铁板上拂了下去，拂得不重。布罗克的铲子已经举起来了。',
          ],
          combat: FORGE_BRAWL,
        },
      },
      {
        text: '报兵团的名头：拦路的另记一条',
        check: {
          skill: 'intimidation', dc: 12,
          mods: [{ if: 'flag.p_grudge_early', n: 1, why: '到得早，他们的人还没到齐' }],
        },
        ok: {
          text: [
            '你说负怨者兵团的账本上，拦路的另记一条，记到孙子辈。工头骂了一句，把撬棍挪开了，又从围裙兜里数出八个金冠拍在你手上。',
            { speaker: '铁锤兵团的工头', text: '红宝石领的讨债鬼。拿去喝酒，别记。' },
          ],
          effects: ['gold +8'],
          goto: 'p_grudge_03',
        },
        fail: {
          text: [
            { speaker: '铁锤兵团的工头', text: '记。我孙子还没生，你先记我。' },
            '他朝身后招了招手。',
          ],
          combat: FORGE_BRAWL,
        },
      },
      {
        text: '跟他赌五个金冠：谁先撬起那块板，渣堆听谁的',
        tag: '试炼',
        if: "faction == 'tried'",
        check: { skill: 'athletics', dc: 12 },
        ok: {
          text: '那块铁板有一扇门大。你先撬起来的，早了他两口气。矮人认赌，工头把撬棍从路上拿开，冲渣堆摆了摆下巴。',
          effects: ['flag p_grudge_hammers'],
          goto: 'p_grudge_03',
        },
        fail: {
          text: '他先撬起来的。你数了五个金冠给他，他一个一个咬过，让开了路。别的他不提，你也不好提。',
          effects: ['gold -5'],
          goto: 'p_grudge_03',
        },
      },
      {
        text: '趁布罗克跟他们吵，摸走一块没化的炉铭',
        tag: '游荡者',
        if: "class == 'rogue'",
        once: true,
        effects: ['gold +15', 'flag p_grudge_plate'],
        result: '手推车最底下压着一块巴掌大的铜板，字还是全的。它进了你的袖子，车上谁也没少数一块。这东西回头卖给谁都值十五个金冠。',
      },
      {
        text: '不争，绕远路从渣堆背面下坡',
        effects: ['rep companies -1'],
        result: '你们绕了小半个山头。那半车铁板没过秤就拉走了，布罗克一路回头看，看一眼骂一句，说回营要记在你名下。',
        goto: 'p_grudge_03',
      },
    ],
  },

  p_grudge_03: {
    id: 'p_grudge_03',
    title: '炉子还点得着吗',
    loc: '龙炉 · 渣堆底下',
    text: [
      { if: 'flag.p_grudge_thrown', text: '你是叫两个人抬着扔出院墙的，落在渣堆下坡的那一头。布罗克跟着翻了出来，铲子没丢。' },
      '敲击声是布罗克先听见的。三下，停，三下。渣堆背阴的一面有个豁口，一根烧黑的梁斜压着，梁底下是个老矮人，系着皮围裙，胡子烧没了半边。',
      '他脚腕上一圈铁箍，链子另一头锁在渣里的铁环上。兽人拴了他十八年，叫他把龙炉点起来。今天午后监工听见号跑了，山下侏儒的炮一响，梁落了下来。',
      { speaker: '老炉匠', text: '别刨了。梁压着的地方我自己摸过，腰往下没知觉。' },
      { speaker: '老炉匠', text: '十八年，换了六个监工，个个问我同一句，我回回说快了。说到后来我自己也拿不准。你们兵团的人懂行，你说：炉子还点不点得着？' },
      { if: 'flag.p_grudge_hammers', text: '铁锤兵团的人跟过来了，站成半圈。工头把帽子摘了。' },
    ],
    first: ['codex balgar'],
    choices: [
      {
        text: '告诉他点得着，换个炉膛的事',
        effects: ['var lies +1', 'flag p_lied'],
        result: [
          { speaker: '老炉匠', text: '换个炉膛。我跟第三个监工也是这么说的，一个字不差。' },
          '他笑了一下，没再问，手从梁上松开了。布罗克把铲子插在渣里，没看你。',
        ],
        goto: 'p_grudge_04',
      },
      {
        text: '告诉他点不着了，芯子裂了',
        effects: ['flag p_truth'],
        result: [
          { speaker: '老炉匠', text: '从龙嘴往下数，第三道箍。那一锤是我抡的。' },
          { speaker: '老炉匠', text: '那就是砸透了。十八年，我就怕没砸透。' },
          '他把手从梁上拿开了。',
        ],
        goto: 'p_grudge_04',
      },
      {
        text: '先不答，把梁抬起来',
        check: { skill: 'athletics', dc: 12, adv: 'flag.p_grudge_hammers' },
        ok: {
          text: [
            '梁起来了一拃，布罗克把铲子垫了进去。{?flag.p_grudge_hammers:铁锤兵团的人抓着他的围裙往外拖。|你抓着他的围裙往外拖。}他在渣堆外头多喘了一顿饭的工夫。',
            { speaker: '老炉匠', text: '炉铭上就一句，巴尔加尔自己凿的：火是跟山借的，手艺是自己的。山还在。' },
          ],
          effects: ['flag p_truth', 'flag p_grudge_motto'],
          goto: 'p_grudge_04',
        },
        fail: {
          text: '梁起来半寸，又落回去，落得比刚才还实。烧黑的木头蹭掉你手掌一层皮。他张了张嘴，那句话没出来。',
          effects: ['flag p_truth', 'hp -2'],
          goto: 'p_grudge_04',
        },
      },
      {
        text: '看渣是从哪儿淌出来的，再答他',
        tag: '匠人',
        if: "class == 'artificer' || bg in ['artisan', 'miner']",
        effects: ['flag p_truth', 'flag p_grudge_motto'],
        result: [
          '渣是从龙嘴往下第三道箍淌出来的，一条线，没有岔。你照实说：这一座废了，芯子裂在第三道箍；山底下的火没废。',
          { speaker: '老炉匠', text: '第三道箍。你看得出来。那我告诉你炉铭上凿的什么：火是跟山借的，手艺是自己的。' },
        ],
        goto: 'p_grudge_04',
      },
      {
        text: '把袖子里那块炉铭放在他手里',
        tag: '游荡者',
        if: 'flag.p_grudge_plate',
        effects: ['gold -15', 'flag p_truth', 'flag p_grudge_motto'],
        result: [
          '他拿拇指把字从头摸到尾。你没答他的话，他也没再问。',
          { speaker: '老炉匠', text: '火是跟山借的，手艺是自己的。哪儿撬的我不问。让它跟我走。' },
        ],
        goto: 'p_grudge_04',
      },
      {
        text: '把手按在他腰上',
        tag: '神',
        if: 'is.god',
        effects: ['flag p_truth', 'flag god_revealed', 'flag god_shrine', 'rep companies -1'],
        result: [
          '梁自己挪开了。他的脚趾动了一下，接着是膝盖。铁箍开了，没人碰过它。',
          '一炷香的工夫，半条街的伤兵都抬到了渣堆底下：铁锤兵团的，边区的，还有叫不出营号的。你治不完，没轮上的记住了你的脸。抬担架的问你：下城躺着的那两位呢，你去不去？',
          '老炉匠后来在渣堆背阴处垒了三块石头，说是龛。他跟着板车走了三天，赶不走，见人就讲。',
        ],
        goto: 'p_grudge_04',
      },
    ],
  },

  p_grudge_04: {
    id: 'p_grudge_04',
    title: '验明正身',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月11日傍晚',
    text: [
      { if: '!flag.god_shrine', text: '布罗克拿自己的铲子在渣堆背阴处刨了个坑，把老炉匠放了进去。链子他一铲剁断，没让带着埋。' },
      '下城，旧集市边上的一块空地，不大，半边立着晾咸鱼的架子。两位都还躺在倒下的地方，中间隔着七八步。红头发的那位身边坐着个半身人，外头围了一圈兵，没人说话。有人在数时辰：上回她是三个时辰起来的。',
      '杜坎森这边没人围。他仰面躺着，比你估的大一圈，满身祭礼的疤，两只拳头攥着。一个兽人女人蹲在他右手边，拿一根打了结的皮绳量他的指节，量一节，在木签上刻一道。没人拦她：科琳的队伍里有兽人，谁也说不准她是不是。',
      '兵团的规矩里，没有一条写着该怎么跟一个兽人并排蹲在一具尸首边上。你蹲下了。',
      '账页背面要添一行：验明正身，是他本人。兵团的规矩，这行字得有凭据。兽人都说他掌心有一块印，是从山底下的胡尔-乔卡德带出来的，叫杜坎印记。兵团的账只认看得见的。',
    ],
    choices: [
      {
        text: '问那个兽人，量这个做什么',
        once: true,
        effects: ['flag p_grudge_asked'],
        result: [
          { speaker: '量指节的兽人', text: '算磨几天。' },
          '她没抬头。又量了两节，才添了一句。',
          { speaker: '量指节的兽人', text: '你要看他手心，别硬掰。从小指往回推，一节一节来。断了的不好磨。' },
        ],
      },
      {
        text: '掰开他的右手，找那块印',
        check: {
          skill: 'medicine', alt: ['investigation'], dc: 11,
          adv: 'flag.p_grudge_asked',
        },
        ok: {
          text: '从小指往回推，一节一节。掌心一块旧烙疤，铜钱大，是一只捆着链子的拳头，烙得很深，边是齐的。你在账页背面写：验明正身，掌心有印。',
          effects: ['flag body_verified'],
          goto: 'p_grudge_05',
        },
        fail: {
          text: '食指响了一声，拳头还是攥着。那个兽人抬头看了你一眼，在木签上多刻了一道。你只好写：据在场者称，是他本人。',
          effects: ['flag p_grudge_broke'],
          goto: 'p_grudge_05',
        },
      },
      {
        text: '查一查有没有人先在他身上动过手脚',
        tag: '施法者',
        if: 'is.caster',
        once: true,
        check: { skill: 'arcana', dc: 12 },
        ok: {
          text: '他耳后有一道粉笔记号，新画的，一个圈套一横。收死人的法师验货才画这个，意思是这一具有主了。你没擦，记下了。',
          effects: ['flag p_grudge_marked'],
        },
        fail: {
          text: '你凑到他耳边的时候，一根矛杆敲在你肩上。边区兵当你要割东西。',
          effects: ['hp -2'],
        },
      },
      {
        text: '叫他自己报名字',
        tag: '神',
        if: 'is.god',
        effects: ['flag body_verified', 'flag god_revealed', 'flag ushka_wary'],
        result: [
          '你叫了他一声。尸首的嘴动了，喉咙里滚出几个字：科尔古斯，杜坎之子。然后合上，跟没动过一样。',
          { speaker: '量指节的兽人', text: '再来一回，我先磨你。' },
          '她的手搁在锤柄上。空地那头围着的兵站起来一半。你在账页背面写：验明正身，本人自述。',
        ],
        goto: 'p_grudge_05',
      },
      {
        text: '不碰他，照旁人说的写',
        effects: ['flag p_grudge_hearsay'],
        result: '你问了三个边区兵、一个科琳塔尔的弩手。四个人都说是他，四个人都没走到五步以内看过。你写：据在场者称。那个兽人量完一节，朝你点了下头。',
        goto: 'p_grudge_05',
      },
    ],
  },

  p_grudge_05: {
    id: 'p_grudge_05',
    title: '头砍了不好认',
    loc: '下卡斯托纳斯 · 空地边上',
    date: '1444年奈拉月11日夜',
    text: [
      '天黑了。空地那头点起一圈火，他们还在等她起来。空地这头来了六个边区兵，带着一把劈柴的斧子，一根两人长的杆子。',
      { speaker: '边区军士', text: '让开。这颗头天亮前要上城门。' },
      '你说头砍了不好认，账划不了。他问什么账。你把账页举给他看，他不识字，可“欠债”两个字他听得懂。',
      { speaker: '边区军士', text: '去年血腐阶梯，我们王子的脑袋是他亲手拧下来的。一颗换一颗，这也是账。' },
      { if: 'flag.god_revealed', text: '军士认得你，下午的事已经传开了。他把斧子换到左手，右手在胸口比划了半下，没比划完：他拿不准该比划哪一位的。' },
      { if: 'flag.god_revealed', speaker: '边区军士', text: '头我们照割。你要拦，自己显灵。' },
      { if: 'is.god && !flag.god_revealed', text: '军士说话的时候没看你的眼睛。他身后五个人里，有两个不知不觉退到了杆子后头。' },
    ],
    choices: [
      {
        text: '跟他算：没了头的尸首，谁都能说不是他',
        check: {
          skill: 'persuasion', dc: 12,
          mods: [
            { if: 'flag.body_verified', n: 2, why: '你验过印，说得出凭据' },
            { if: 'flag.p_grudge_marked', n: 2, why: '有人给这具尸首画了记号' },
            { if: 'flag.p_grudge_carts', n: 1, why: '玛瑙之门的车你说得上来' },
          ],
        },
        ok: {
          text: '你说头挂上去三天就烂，烂了的头谁都能说不是他，到那天满东坎诺都在传杜坎森没死。军士把斧子在手里转了半圈，收了。',
          goto: 'p_grudge_06',
        },
        fail: {
          text: [
            '他听完了，说有道理，然后割走了一只右耳。',
            { speaker: '边区军士', text: '耳朵不耽误你认人。' },
          ],
          effects: ['rep companies -1', 'flag p_grudge_ear'],
          goto: 'p_grudge_06',
        },
      },
      {
        text: '报兵团的名头：拦着验尸的，另记一条',
        check: { skill: 'intimidation', dc: 13 },
        ok: {
          text: '你把账页翻到背面，问他叫什么，哪个营，祖上哪个村。他报到一半停住了，往后退了半步，说红宝石领的讨债鬼惹不起。',
          goto: 'p_grudge_06',
        },
        fail: {
          text: [
            { speaker: '边区军士', text: '记。我叫什么你听好了，一个字别写错。' },
            '他一边报名字，一边割走了一只右耳。',
          ],
          effects: ['rep companies -1', 'flag p_grudge_ear'],
          goto: 'p_grudge_06',
        },
      },
      {
        text: '先看清楚，他要这颗头是拿去给谁看',
        check: { skill: 'insight', dc: 12 },
        ok: {
          text: '他回头看了两回身后那五个人。他要的是给营里一个交代。你把账页翻到背面，叫他按个手印：某营某人，亲眼见证，是他本人。他按了，按得很用力，带着人走了。',
          effects: ['rep companies +1'],
          goto: 'p_grudge_06',
        },
        fail: {
          text: [
            '你盯着他看了半天，没看出名堂。他倒叫你看烦了。',
            { speaker: '边区军士', text: '看什么看。' },
            '斧子落在耳根上。一只右耳，他拿布包了，揣进怀里。',
          ],
          effects: ['rep companies -1', 'flag p_grudge_ear'],
          goto: 'p_grudge_06',
        },
      },
      {
        text: '告诉他：他有儿子，尸首的事轮不到你们定',
        tag: '承嗣',
        if: "faction == 'heirs'",
        check: { skill: 'persuasion', dc: 12, adv: true },
        ok: {
          text: '军士骂你替兽人讲名分。骂完了他没动手：他自己也有儿子，他不想哪天有人这么处置他。这话当晚就传到了没撤干净的兽人耳朵里。',
          effects: ['rep clans +1'],
          goto: 'p_grudge_06',
        },
        fail: {
          text: [
            { speaker: '边区军士', text: '他儿子来了，一块儿挂。' },
            '斧子没落在脖子上，落在了耳根。一只右耳。',
          ],
          effects: ['rep companies -1', 'flag p_grudge_ear'],
          goto: 'p_grudge_06',
        },
      },
      {
        text: '告诉他：头是杀他的那个人的，去问她的人',
        tag: '试炼',
        if: "faction == 'tried'",
        check: { skill: 'persuasion', dc: 12, adv: true },
        ok: {
          text: '军士回头看了一眼那圈火。圈里跪着的那个半兽人，一下午没人敢过去跟他说话。军士把斧子夹回了胳膊底下。',
          effects: ['rep corintar +1'],
          goto: 'p_grudge_06',
        },
        fail: {
          text: [
            { speaker: '边区军士', text: '她躺着呢。她起来了，我当面还她。' },
            '他割走了一只右耳，拿布包好，揣进怀里。',
          ],
          effects: ['rep companies -1', 'flag p_grudge_ear'],
          goto: 'p_grudge_06',
        },
      },
      {
        text: '告诉他：队长们还没吵完，哪一营也不能先动刀',
        tag: '无冕',
        if: "faction == 'crownless'",
        check: { skill: 'persuasion', dc: 12, adv: true },
        ok: {
          text: '空地当中，十几个队长正围着两只酒桶吵。军士朝那边看了看：他的队长也在里头，嗓门最大的那个。他啐了一口，等着。',
          effects: ['rep companies +1'],
          goto: 'p_grudge_06',
        },
        fail: {
          text: [
            { speaker: '边区军士', text: '等他们吵完，这颗头都长蘑菇了。' },
            '他割走了一只右耳，算是先收个定钱。',
          ],
          effects: ['rep companies -1', 'flag p_grudge_ear'],
          goto: 'p_grudge_06',
        },
      },
      {
        text: '数十个金冠给他：买到天亮',
        cost: { gold: 10 },
        result: [
          '军士把钱数了两遍，分给身后五个人，一人两个，自己没留。',
          { speaker: '边区军士', text: '买到天亮。天亮以后另算。' },
        ],
        goto: 'p_grudge_06',
      },
    ],
  },

  p_grudge_06: {
    id: 'p_grudge_06',
    title: '上车',
    art: 'ev_multi_racial_merc',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月12日清晨',
    text: [
      '火圈烧了一夜。天亮的时候她还躺着。没有人说埋，也没有人走。',
      '队长们在空地当中拿两只酒桶架起一扇门板，吵到这会儿只吵定一件事：各营出一个人，把这场仗里没人认领的死人收了。军令抄了一份，有人拿去钉在万神道一座庙的门上。',
      '负怨者兵团出的是你。门板角上有人拿炭条写了名字和差事：{pc}，验明正身。{?flag.body_verified:掌心那块印你验过了，记在账页背面。|你那行字写的还是“据在场者称”。}{?flag.p_grudge_ear:尸首少了一只右耳，这个你也记了，记在边区兵名下。|}',
      { if: 'flag.p_grudge_motto', text: '账页背面还有一行，是你自己添的：火是跟山借的，手艺是自己的。' },
      { if: 'flag.god_revealed', text: '队长们为你算哪一营的又吵了一刻钟。一个随军祭司挤到桌边，问的是你是哪一位的化身。没人问你是不是神。' },
      { if: 'is.god', text: '这一夜你没合眼，也不困。布罗克打了三回盹，每回醒过来都先看你一眼，再看尸首。' },
      { speaker: '布罗克', text: '我回营交差。铲子你留着。人类的那种，挖一个兽人要半天。' },
      '板车停在咸鱼架子边上。昨晚那个兽人已经在车上了，有人问她哪个营的，她只报了名字：乌什卡。皮绳还在量，量的还是指节。',
      { if: 'party.ushka', speaker: '乌什卡', text: '骨头粗，要磨两天。' },
      { if: 'flag.ushka_wary', text: '她说这话的时候没看尸首，看的是你。右手一直搭在锤柄上。' },
      { if: 'party.ushka && flag.ushka_wary', speaker: '乌什卡', text: '死不了的我见过。都得有人去放倒。' },
      '车边站着个提灯的男孩，十六七岁，祭司的袍子短了一截。天已经亮了，灯他忘了吹。',
      { if: 'flag.god_revealed', text: '他昨晚就听说车上要来一位什么。他把灯举高了一点，照了照你的脸，没多问。' },
      { speaker: '阿坦', text: '军令钉在我门上了，四颗钉子。我是看庙的，叫阿坦。' },
      { speaker: '阿坦', text: '你们出城的时候，顺路替我打听一件事。银龙为什么没有再来。' },
    ],
    first: [
      'level 2',
      'companion +ushka',
      'quest q_cart start',
      'quest q_dragon start',
      'codex standing_order',
      'codex truce_table',
      'rest short',
      'codex corin',
      'codex agrados',
      'quest q_o_grudge start',
      { if: 'flag.ushka_wary', then: ['approval ushka -2'] },
      { if: 'flag.p_grudge_broke', then: ['approval ushka -1'] },
      { if: 'flag.p_grudge_hearsay', then: ['approval ushka +1'] },
    ],
    choices: [
      {
        text: '答应那个男孩：顺路问',
        effects: ['rep temples +1'],
        result: [
          { speaker: '阿坦', text: '问谁都行。问着了告诉我，问不着也告诉我。' },
        ],
        goto: 'a1_01',
      },
      {
        text: '告诉他：打听要另算钱',
        effects: ['gold +2'],
        result: [
          '他从袖子里摸出两枚金冠，数了两遍才递过来。',
          { speaker: '阿坦', text: '庙里就这些。不够的先欠着，你们不是会记账吗。' },
        ],
        goto: 'a1_01',
      },
      {
        text: '先搭把手，把尸首在车上捆牢',
        effects: ['approval ushka +1'],
        result: '乌什卡把皮绳的另一头扔给你。捆完了，她在木签上刻了一道，没说记的是什么。',
        goto: 'a1_01',
      },
    ],
  },

  // ───────────────────────── 退潮的人 ─────────────────────────
  p_tide_01: {
    id: 'p_tide_01',
    title: '手背',
    chapter: '序章 · 退潮的人',
    art: 'load_5',
    loc: '下卡斯托纳斯 · 旧集市边上',
    date: '1444年奈拉月11日午后',
    text: [
      '去年在血腐阶梯，你们头一回没冲过去。骑士从烂木头垒的河岸上压下来，旗子多得数不过来。那一仗绿潮躺下一万八，碎心者的酋长当着所有人哭了一场，带着氏族往南走了。',
      '今天是第二回。卡斯托纳斯下城，旧集市边上，杜坎森倒下去的地方离你一条街，中间隔着一排晾咸鱼的架子。你没看见。你只听见那边一下子没了声，接着是撤退的号。',
      { if: 'is.orc || is.halforc', text: '三天前你还在城底下矮人挖的道里，两只手黑得跟洞壁一个色。上来以后一天一天往回绿，绿的时候皮是痒的。就在那边没了声的当口，手不痒了。手背刚绿过来，指头还黑着，停住了。' },
      { if: 'is.goblin', text: '拴你的那串链子，午后断在第三环上。牵链头的兽人听见号，扔下链子就跑。你替一个地精书贩子背了八年书箱，箱子翻在街角，书撒了一地，里头有你照着认字的那本缺页课本。' },
      { if: '!(is.orc || is.halforc || is.goblin)', text: '你脖子上的铁箍是午后撬开的，撬它的人已经跑了。箍印一指宽，磨得发白。你给这支大军扛了多少年东西，这道印子就有多少年。' },
      '撤退喊的是兽人话，往北，越喊越远。街上没人等你。',
    ],
    first: ['codex greentide'],
    choices: [
      {
        text: '爬上晾鱼架，看那边到底怎么了',
        check: { skill: 'perception', dc: 10 },
        ok: {
          text: '杜坎森仰面躺在咸鱼摊边上，一把剑从下往上穿了过去。一圈人类围着另一个躺着的，红头发。再往南三条街，酋长佐格倒在路当中，四个亲卫趴在他身上，都不动了。嗜血者的头也没了。',
          effects: ['flag p_tide_saw_zog'],
          goto: 'p_tide_02',
        },
        fail: {
          text: '架子塌了，你连人带咸鱼摔在石板上。那边什么也没看清，只看见烟。',
          effects: ['hp -2'],
          goto: 'p_tide_02',
        },
      },
      {
        text: '回去把那本课本捡回来',
        tag: '地精',
        if: 'is.goblin',
        effects: ['item +scroll_magic_missile', 'hp -2'],
        result: '课本还在，封皮上多了一个靴印。里头夹着一张你一直没舍得用的卷轴。捡书的工夫，一块石头砸在你背上，谁扔的没看见。',
        goto: 'p_tide_02',
      },
      {
        text: '把领口竖起来，遮住箍印',
        tag: '奴工',
        if: '!is.greenskin',
        effects: ['flag p_tide_hid'],
        result: '领子竖起来，箍印遮了大半。远看你像个随军的脚夫，哪一边的都像。',
        goto: 'p_tide_02',
      },
      {
        text: '摸走脚边那个死人的钱袋，再跑',
        effects: ['gold +4'],
        result: '袋子里四枚金冠，一颗牙。牙你扔了。',
        goto: 'p_tide_02',
      },
    ],
  },

  p_tide_02: {
    id: 'p_tide_02',
    title: '最后一个',
    art: 'ev_orc_with_axe',
    loc: '下卡斯托纳斯 · 一条死巷',
    text: [
      '号声拐了两个弯就听不清了。你跟着跑，跑进一条死巷：三面是巴尔加尔的石墙，两人高，缝里插不进指甲。',
      '巷口站着一个嗜血者的，光头，斧子扛在肩上。他侧着耳朵听了听号，看了你一眼，走了。',
      '接着来的是两个人类兵，穿锁甲，盾上的纹章刮掉了一半。',
      { speaker: '抢功的兵', text: '还有一个。' },
      { speaker: '另一个兵', text: '队长许的那桶酒，是给砍倒城里最后一个绿皮的。这个归我，你上午那个不算。' },
      { if: '!is.greenskin', speaker: '抢功的兵', text: '这个不绿。脖子上有箍印，跟着他们走的，一样算。' },
      { if: 'is.god', text: '他们的剑尖先垂了下去，人还没想好为什么。' },
      '墙根的门洞里站起来一个老兵，左边的獠牙断了半截。他没看那两个人，先看你。',
      { speaker: '马布格', text: '两个。你左，我右。要不你把家伙扔了，挨两脚。我都行。' },
    ],
    choices: [
      {
        text: '你左他右，打',
        combat: ALLEY_FIGHT,
      },
      {
        text: '把兵器扔在地上',
        effects: ['flag p_surrendered', 'hp -3'],
        result: [
          '你把家伙扔了。挨了一脚，在肋上。马布格把斧子靠在墙边，自己蹲下去，两只手放在膝盖上。',
          { speaker: '另一个兵', text: '最后两个。酒得分了。' },
        ],
        goto: 'p_tide_03',
      },
      {
        text: '朝他们吼，叫他们掂量这桶酒值不值',
        check: {
          skill: 'intimidation', dc: 11,
          mods: [
            { if: "class == 'barbarian'", n: 1, why: '你吼惯了' },
            { if: 'is.small', n: -1, why: '个头不够' },
          ],
        },
        ok: {
          text: [
            '你吼的是冲锋的号子。两个人各退了一步，互相看。',
            { speaker: '另一个兵', text: '上午那个算最后一个也行。' },
          ],
          goto: 'p_tide_03',
        },
        fail: {
          text: '你吼到一半呛着了。两面盾并到了一起。',
          combat: ALLEY_FIGHT,
        },
      },
      {
        text: '把手举起来，让法术在指头上亮一下',
        tag: '施法者',
        if: 'is.caster',
        effects: ['rep companies -1'],
        result: [
          '光蹿了一尺高。两个兵扭头就跑，一边跑一边喊绿潮里有萨满。到天黑，半个营都知道了。',
          { speaker: '马布格', text: '把戏。管用。' },
        ],
        goto: 'p_tide_03',
      },
    ],
  },

  p_tide_03: {
    id: 'p_tide_03',
    title: '他还在打吗',
    loc: '下卡斯托纳斯 · 空地北边的墙根',
    text: [
      '{?flag.p_surrendered:他们把你们俩赶到空地北边的墙根，跟别的没撤走的蹲成一排。|你们贴着墙根往北摸，摸到空地北边就过不去了。}',
      { if: 'is.orc || is.halforc', text: '墙根坐着一个你认得的，同一个氏族，去年在血腐阶梯替你扛过一袋蘑菇干。他胸口三个眼，是侏儒的铅弹打的，背后没有出来。' },
      { if: '!(is.orc || is.halforc)', text: '墙根坐着一个你认得的，拴你的那个氏族里的兽人。这些年他踢过你，也分过你半块蘑菇饼。他胸口三个眼，是侏儒的铅弹打的，背后没有出来。' },
      '他的眼睛还跟着人转。听不见号了，他拿不准是自己的耳朵不行了，还是号真的停了。',
      { speaker: '垂死的同族', text: '那边没声了。杜坎森是不是还在打？' },
      { speaker: '垂死的同族', text: '他要是还在打，我这就不算掉队。' },
      '{?flag.p_surrendered:马布格蹲在一边，两只手还放在膝盖上，不看你。|马布格蹲在一边，拿拇指试斧刃，不看你。}',
    ],
    choices: [
      {
        text: '告诉他还在打，快赢了',
        effects: ['var lies +1', 'flag p_lied'],
        result: [
          { speaker: '垂死的同族', text: '那就行。我回来得快，碗给我留着。' },
          '他是咧着嘴走的。马布格等他不动了，才看了你一眼，什么也没说。',
        ],
        goto: 'p_tide_04',
      },
      {
        text: '告诉他杜坎森死了，你的手不变色了',
        if: 'is.orc || is.halforc',
        effects: ['flag p_truth'],
        result: [
          '你说他死了，就在咸鱼摊边上，你的手从那一下起不变色了。{?flag.p_tide_saw_zog:你又添了一句：佐格也倒了。|}他没看你的手，看的是他自己的。',
          { speaker: '垂死的同族', text: '那我这一下算谁的？' },
          { speaker: '马布格', text: '算你自己的。' },
        ],
        goto: 'p_tide_04',
      },
      {
        text: '告诉他杜坎森死了，链子全松了',
        if: '!(is.orc || is.halforc)',
        effects: ['flag p_truth'],
        result: [
          '他看你空着的脖子，看了很久。{?flag.p_tide_saw_zog:你又添了一句：佐格也倒了。|}',
          { speaker: '垂死的同族', text: '连你都松了。那是真的。' },
          { speaker: '垂死的同族', text: '那我这一下算谁的？' },
          { speaker: '马布格', text: '算你自己的。' },
        ],
        goto: 'p_tide_04',
      },
      {
        text: '不说话，把手背伸到他眼前',
        if: 'is.orc || is.halforc',
        effects: ['flag p_truth'],
        result: '他盯着你的指头看。黑的还是黑的，绿的还是绿的，中间那道线不动。他看懂了，把眼睛闭上了。',
        goto: 'p_tide_04',
      },
      {
        text: '不说话，把那节断链放在他手里',
        if: '!(is.orc || is.halforc)',
        effects: ['flag p_truth'],
        result: [
          '他拿拇指摸断口。新的，还扎手。',
          { speaker: '垂死的同族', text: '谁砸的？' },
          '你说没人砸，它自己松的。他攥着那节链子走的。你把他的手指掰开，把它拿了回来。',
        ],
        goto: 'p_tide_04',
      },
      {
        text: '把他的斧子塞回他手里',
        tag: '战士系',
        if: 'is.martial',
        effects: ['flag p_truth', 'rep clans +1'],
        result: [
          '斧子压在他自己腿底下，没人顾得上收。你抽出来，把他的手指一根一根合在柄上。他没再问。',
          { speaker: '马布格', text: '拿着家伙走的，不算掉队。' },
          '这件事马布格后来在俘虏队里讲过，讲了不止一回。',
        ],
        goto: 'p_tide_04',
      },
      {
        text: '把手按在他胸口上',
        tag: '神',
        if: 'is.god',
        effects: ['flag p_truth', 'flag god_revealed', 'flag god_shrine', 'rep companies -1'],
        result: [
          '三颗铅弹从他胸口退出来，掉在石板上，还是热的。他坐直了，先找自己的斧子。',
          '一炷香的工夫，墙根底下爬得动的都爬过来了，断了腿的拖着腿。你治不完。一个抬担架的人类兵站在十步外看了半天，问你：那两位呢？',
          '头一个被你摸活的这位，后来跟着板车走了三天，赶不走，逢人就讲。他在墙根垒了三块石头，石头上放了一颗铅弹。',
        ],
        goto: 'p_tide_04',
      },
    ],
  },

  p_tide_04: {
    id: 'p_tide_04',
    title: '算俘虏还是算尸首',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月11日傍晚',
    text: [
      '{?flag.p_surrendered:押你们的换了一拨人，是边区兵。|你们没走出两条街，就叫边区兵堵住了。}一根矛尖顶在你后腰上，不重，刚好让你知道它在。',
      { speaker: '边区兵', text: '这个还喘气。算俘虏还是算尸首？' },
      { speaker: '另一个边区兵', text: '那个半兽人传了话，不许杀俘。' },
      { speaker: '边区兵', text: '他说的是俘虏。没说尸首。' },
      { if: 'is.god', text: '矛尖在你后腰上断了。没人使劲，它自己断的。边区兵看了看手里那半截杆子。' },
      { if: 'is.god', speaker: '边区兵', text: '这个算什么？' },
      '马布格已经叫两个人按在地上了。空地当中围着一圈人，圈里躺着个红头发的，没人出声。上回她死了三个时辰就站了起来，所以今晚谁也不走。',
      '圈外七八步，杜坎森仰面躺着，没人围。他边上停着一辆板车，一个兽人女人蹲在车边，拿皮绳量他的指节。',
    ],
    choices: [
      {
        text: '告诉他们：我抬得动你们抬不动的',
        check: {
          skill: 'persuasion', dc: 13,
          mods: [
            { if: 'stat.str >= 15', n: 1, why: '块头摆在这儿' },
            { if: 'flag.p_surrendered', n: 1, why: '你是自己扔的家伙' },
            { if: 'rep.companies <= -3', n: -1, why: '营里在传你的闲话' },
          ],
        },
        ok: {
          text: '你朝杜坎森那边偏了偏头。下午四个边区兵抬过他，没抬动，这事他们自己清楚。矛尖松了。',
          goto: 'p_tide_05',
        },
        fail: {
          text: [
            '他们笑了。矛杆抡圆了，抽在你腰眼上。',
            { speaker: '边区兵', text: '抬得动。先抬你自己。' },
          ],
          effects: ['hp -4'],
          goto: 'p_tide_05',
        },
      },
      {
        text: '说自己是跟过科琳的，跟地鹰一样',
        check: {
          skill: 'deception', dc: 12,
          adv: 'flag.p_tide_hid',
          mods: [{ if: 'is.goblin', n: 2, why: '地鹰也是地精' }],
        },
        ok: {
          text: '他们吃不准。科琳的队伍里确实有绿的，也有从链子上解下来的，谁也不想砍错一个再去跟那个半兽人交代。矛尖松了。',
          goto: 'p_tide_05',
        },
        fail: {
          text: [
            { speaker: '边区兵', text: '跟过她？她的人这会儿都在那圈里跪着。你怎么在圈外头？' },
            '你答不上来。矛杆替你答了，在腰眼上。',
          ],
          effects: ['hp -4'],
          goto: 'p_tide_05',
        },
      },
      {
        text: '问他：链子今天才断，你要给我再拴一条？',
        tag: '无冕',
        if: "faction == 'crownless'",
        check: { skill: 'persuasion', dc: 13, adv: true },
        ok: {
          text: [
            '拿矛的那个是东坎诺口音，西边的难民营里长大的。叫人圈起来数人头是什么滋味，他小时候尝过。',
            { speaker: '边区兵', text: '算俘虏。' },
          ],
          effects: ['rep clans +1'],
          goto: 'p_tide_05',
        },
        fail: {
          text: [
            { speaker: '边区兵', text: '拴？我连绳子都舍不得给你。' },
            '矛杆抽在你腰眼上。',
          ],
          effects: ['hp -4'],
          goto: 'p_tide_05',
        },
      },
      {
        text: '叫他们挑最沉的一具，你一个人抬给他们看',
        tag: '试炼',
        if: "faction == 'tried'",
        check: { skill: 'athletics', dc: 12 },
        ok: {
          text: [
            '他们挑了杜坎森。你把他的上半身从地上搬起来一尺，稳住，又放下。',
            { speaker: '量指节的兽人', text: '轻点放。' },
          ],
          goto: 'p_tide_05',
        },
        fail: {
          text: '他们挑了杜坎森。你搬起来半尺，腰先响了。边区兵没笑完，矛杆已经落下来了。',
          effects: ['hp -4'],
          goto: 'p_tide_05',
        },
      },
      {
        text: '一声不吭',
        effects: ['hp -4', 'flag p_tide_silent'],
        result: [
          { speaker: '边区兵', text: '不说话的算尸首。' },
          '矛杆抽下来的时候你没躲。车边那个兽人女人站起来了。',
        ],
        goto: 'p_tide_05',
      },
      {
        text: '告诉他们：算神',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_revealed', 'world embers +1'],
        result: [
          '他们退开了，退得很整齐，然后有人跑去找祭司。',
          '天黑以前，没撤完的兽人里已经传开了：{?is.greenskin:杜坎又派了一个绿的。|杜坎又派了一个来，这回不是绿的。}',
        ],
        goto: 'p_tide_05',
      },
    ],
  },

  p_tide_05: {
    id: 'p_tide_05',
    title: '抬得动兽人的',
    loc: '下卡斯托纳斯 · 板车边',
    date: '1444年奈拉月11日夜',
    text: [
      '那个兽人女人走过来，走得不快。腰上别着一把短刀、一把锤，都磨得很亮。她没看边区兵，先把你从肩膀看到脚。',
      { speaker: '兽人女人', text: '板车缺一个抬得动兽人的。这个我要了。' },
      { speaker: '边区兵', text: '你又是哪个营的？' },
      { speaker: '兽人女人', text: '车是拉死人的。死人不分营。' },
      '边区兵互相看。车上要抬的那一位，他们下午四个人试过。矛收了。那辆板车的车板上还粘着鱼鳞。',
      { if: 'is.goblin', text: '她这才看清你的个头，眉毛动了一下。' },
      { if: 'flag.god_revealed', text: '她的手搭在锤柄上，从走过来到这会儿没拿开过。' },
      { if: 'flag.god_revealed', speaker: '兽人女人', text: '死不了的我见过。都得有人去放倒。你上车，我看着你。' },
      { if: 'is.god && !flag.god_revealed', text: '她弯腰捡起地上那半截矛尖，看了看断口，又看了看你的后腰，把它揣进了怀里。' },
      { speaker: '马布格', text: '去。抬人的活，哪边都缺。' },
    ],
    first: ['quest q_o_tide start'],
    choices: [
      {
        text: '问她是谁的人',
        once: true,
        effects: ['codex rotcleaver', 'flag p_tide_asked'],
        result: [
          { speaker: '乌什卡', text: '乌什卡。烂刀氏族。来给他做礼的。' },
          '你问谁请的。',
          { speaker: '乌什卡', text: '没人请。' },
        ],
      },
      {
        text: '站起来，去抬车把',
        effects: [{ if: '!flag.p_tide_asked', then: ['flag p_tide_noask'] }],
        result: '你站起来，走到车把那头。她把绳子的另一头扔给你，没再说话。',
        goto: 'p_tide_06',
      },
      {
        text: '先问她，抬完了管不管饭',
        effects: ['hp +4'],
        result: [
          '她从车板底下摸出一条干鱼扔给你，硬得能敲钉子。',
          { speaker: '兽人女人', text: '先吃。抬的时候别吐。' },
        ],
        goto: 'p_tide_06',
      },
      {
        text: '告诉她：我抬不动，我认字',
        tag: '地精',
        if: 'is.goblin',
        effects: ['flag p_tide_reads'],
        result: [
          { speaker: '兽人女人', text: '车上也缺认字的。死人得有人记名字。' },
          '她把一块刮平的木板和半截炭条塞到你手里。',
        ],
        goto: 'p_tide_06',
      },
    ],
  },

  p_tide_06: {
    id: 'p_tide_06',
    title: '没有队长的人',
    art: 'ev_multi_racial_merc',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月12日清晨',
    text: [
      '人类那边的火圈烧了一夜，他们在等那个红头发的再站起来。天亮了，她没有。兽人这边没人等杜坎森：兽人不信死人会自己起来，起来的那种都是别人拉的。',
      '队长们在空地当中拿两只酒桶架了一扇门板。各营出一个人上车，每出一个，那一营的队长在门板上签个字。轮到绿潮，门板上写着：{pc}。队长那一栏空着。桌边没有人替你说话。',
      { if: 'flag.god_revealed', text: '队长们为你算哪一营的又吵了一刻钟。一个随军祭司挤到桌边，问的是你是哪一位的化身。没人问你是不是神。' },
      '马布格被编进了俘虏队，拴成一串往北城押。经过你的时候，他把半块干粮塞进你手里，蘑菇粉掺麦麸烙的，硬。',
      { speaker: '马布格', text: '抬人的活，别问是哪边的。' },
      { if: 'is.god', text: '俘虏队里有人回头看你，看了一路，脖子都拧过来了。押队的兵拿矛杆把他的头拨了回去。' },
      '板车上，那个兽人女人还在量指节。{?flag.p_tide_asked:|有人问她哪个营的，她只报了名字：乌什卡。}{?flag.p_tide_reads:记名字的木板归你背。|}',
      { if: 'party.ushka', speaker: '乌什卡', text: '骨头粗，要磨两天。' },
      '车边站着个提灯的男孩，十六七岁，祭司的袍子短了一截。天亮了，灯他忘了吹。{?is.greenskin:他看见你是绿的，没往后退，也没换一句话问。|}',
      { speaker: '阿坦', text: '军令钉在我门上了，四颗钉子。我是看庙的，叫阿坦。庙顶是二十年前绿潮掀的，这事不归你管。' },
      { speaker: '阿坦', text: '我托的是另一件。你们出城的时候，顺路替我打听：银龙为什么没有再来。' },
    ],
    first: [
      'level 2',
      'companion +ushka',
      'quest q_cart start',
      'quest q_dragon start',
      'codex standing_order',
      'codex truce_table',
      'rest short',
      'codex corin',
      'codex agrados',
      { if: 'flag.p_tide_noask || flag.p_tide_silent', then: ['approval ushka +1'] },
    ],
    choices: [
      {
        text: '在空着的那一栏按个手印',
        effects: ['rep clans +1'],
        result: '你把手按进炭灰里，再按在门板上。{?is.greenskin:灰印子看不出颜色，可在场的都知道那是一只绿手。|在场的都知道这一栏是替谁按的。}队长们没人吭声，也没人去擦。',
        goto: 'a1_01',
      },
      {
        text: '在那一栏写上自己的名字',
        tag: '地精',
        if: 'is.goblin',
        effects: ['gold +5', 'rep companies +1'],
        result: [
          '你够不着门板，踩着酒桶的箍写的。一笔通用语，没写错。',
          { speaker: '苔藓滩的冈瑟', text: '会写字的地精。车上记数的活归他。我先垫五个金冠，几分利回头再谈。' },
        ],
        goto: 'a1_01',
      },
      {
        text: '在那一栏画一节断链',
        tag: '无冕',
        if: "faction == 'crownless'",
        effects: ['rep clans +1', 'rep companies +1'],
        result: '你把怀里那节断链按在门板上，拿炭条描了一圈。先锋行会的人看了一会儿，在旁边按了个手印，算是见证。',
        goto: 'a1_01',
      },
      {
        text: '让那一栏空着，去抬车把',
        effects: ['approval ushka +1'],
        result: '你什么也没写，走到车把那头。乌什卡把绳子的另一头扔给你，这回连看都没看。',
        goto: 'a1_01',
      },
      {
        text: '先答应那个男孩：顺路问',
        effects: ['rep temples +1'],
        result: [
          { speaker: '阿坦', text: '问谁都行。问着了告诉我，问不着也告诉我。' },
        ],
        goto: 'a1_01',
      },
    ],
  },
};
