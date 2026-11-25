// s1444 act1.js — 第一幕《没人肯埋的兽人》，a1_01–a1_19（出口 a1_19 → a2_01）。
//
// 提纲（对照 BIBLE §11.2；本文件自设自读的标记都以 a1_ 开头）
// a1_01 门板桌头一夜。四拨人出价，卡莱昂要尸首天亮前出城，阿坦入队。乌什卡底线检查。
//       听价（各一次）、借骡子（说服 13，败设 a1_pull）、[承嗣]名分、[负怨者]出城单、[神]按住门板。→ a1_02
// a1_02 钴蓝兵团哨卡。欺瞒 13 / 潜行 12（a1_pull 劣势）/ 塞钱 / [皇帝的差事]亮信。败 → a1_02b
// a1_02b 冈瑟被哨子叫来：设 cart_known；付 30 或记账（诸团 −1）。→ a1_03
// a1_03 地下通道，链头监工。妮克西入队。三种开打法：硬打 / [战士系]掰住闸轮 / [矮个子]钻排水沟。→ a1_04
// a1_04 四十个地精往哪儿放：goblins_hidden / armed / handed 三选一；[无冕]推说话的人（goblin_speaker）。→ a1_05
// a1_05 营火（枢纽）：木签、晨祷、规矩、四只手、抹盐（a1_salted）、守夜（食尸鬼）。愚足的货担。→ a1_05b
// a1_05b 天亮，加莱尔雇人查三起现身；长休。→ a1_06
// a1_06 银池湖路，灰烬玫瑰的“仆役”：rose_chain_freed / bought / ignored。说服败 → a1_06b
// a1_07 渔村的“龙皮”：调查/自然 12，[自然系]闻皮。→ a1_07b 拆穿 / 私下 / 由他。→ a1_08
// a1_08 蓝宝石望的老太太：lies 的来源之一；天象簿；[神]造一道银光（god_faked_dragon）。→ a1_09
// a1_09 死齿的罐子（必打）：jar_broken、ghost_taken。→ a1_10
// a1_10 尸首的去向，六选一（korgus_*），[神]答“是/不是”。① → a1_10a → a1_10b；其余 → a1_10z
// a1_10a 归尘礼头一夜（体质豁免）；a1_10b 第二天边区兵来抢头（说服 14 或打）。→ a1_10z
// a1_10z 收尾：[负怨者]签字 entry_struck；外人不知道尸首在哪。→ a1_11
// a1_11 焦塔脚下：说服 / 打 / 爬外墙。→ a1_11b 塔顶追放风筝的。q_sightings 完成，q_compact 开始。→ a1_12
// a1_12 萨什卷：历史 14、洞悉 13（morningstar_hint），roll_seen，阿坦说出假答案一。→ a1_13
// a1_13 试炼山：劝和树灵（spirits_heard 必设），[试炼派]喊话，[精灵血统]，[矮人]认锻炉。→ a1_13b 小石化蜥。→ a1_14
// a1_14 抢化身：avatar_carleon / avatar_gryf / sightings_exposed / 谁也不帮；[承嗣]查谱；[神职]has_vote；[神]认化身。→ a1_15
// a1_15 第十次泛神会议：testimony_* 三选一（说服检定定成色），roll_told，[神]替会议裁决。→ a1_15b
// a1_15b 会后：教团长老、科琳封神、布兰多克剃头；[科琳的队伍]蓝牙问“她看我了没有”。→ a1_16
// a1_16 城约（枢纽）：地契、给古拉德报信、阿罗莎、愚足；[达梅里亚之子]罗吉尔。compact_* 四选一。军需官。→ a1_17 / a1_16b
// a1_16b 城约立成：[皇帝的差事]请帝国盖印（compact_sealed）。→ a1_17
// a1_17 往长者郡：奥托格、布罗克离车；死熊；嗜血者前哨（可免）。→ a1_18
// a1_18 古尔赞的火：下战书（熊血斗士）/ 劝 / 看 / 乌什卡开口 / [神]接位子。→ a1_18b
// a1_18b 火边的路：[退潮的人] road_* 三选一；马布格留下。→ a1_19
// a1_19 车空了：level 4，q_cart 第二阶段；[皇帝的差事]写报告。→ a2_01
export const SCENES = {
  a1_01: {
    id: 'a1_01',
    title: '头一夜的门板桌',
    chapter: '第一幕 · 没人肯埋的兽人',
    art: 'ev_multi_racial_merc',
    loc: '下卡斯托纳斯 · 旧集市边上的空地',
    date: '1444年奈拉月12日夜',
    text: [
      '天黑以后，空地边上那圈守夜的火还亮着，跪着的人换了一拨。门板桌照旧支在两只酒桶上。杜坎森躺在鱼贩子的板车里，身上压着另一扇门板，两只脚露在外头，靴底磨穿了一个洞。',
      '入夜以后来了四拨人。瓦丽娜·埃斯瑟带着两个学徒抬来一只铁箍木箱，箱盖敞着，金冠码得整整齐齐。三个边区兵拎着一把剁肉刀。一个缠白布的老兽人蹲在车轮边，说是替杜坎森的小儿子来领人。雕骨者的三个兽人空着手，肩上扛一袋盐。',
      { speaker: '瓦丽娜', text: '一箱，现结。他躺着也是躺着，站起来还能替东坎诺修三十年城墙。理论上不咬人。' },
      { speaker: '卡莱昂', text: '天亮以前，这具尸首不能还在我的城里。谁拉走，拉去哪儿，我不管。' },
      { speaker: '冈瑟', text: '拉去哪儿都行。下城的卡子是我钴蓝兵团的，过路照收。几分利另算。' },
      "板车边上，另外几只手各干各的。{?origin != 'corintar':老布兰多克在擦一副不是他自己的护肩。|}{?origin != 'sons':达拉斯坐在车辕上缝东西，一句话没有。|}{?origin != 'wex':奥托格抱着他的大剑，手一直在抖。|}{?origin != 'grudge':布罗克嫌营里的铲子轻，扛着自己的。|}{?origin != 'tide':马布格靠着车帮，断了的那根獠牙上缠着麻绳。|}",
      '万神道那边过来一盏灯。阿坦把庙门锁了，钥匙用麻绳拴着挂在脖子上。',
      { if: 'party.tan', speaker: '阿坦', text: '军令钉在门上，我在不在都一样。你们出城，我顺路。' },
      { if: 'flag.god_revealed', text: '桌边的人都听说了你是什么。出价的人说话时眼睛不看尸首，看你。' },
      { if: 'is.god', text: '瓦丽娜把箱盖往你这边推了推，问你本人卖不卖，按天算也行。卡莱昂换了个问法：你打算在他的城里住多久。' },
      { if: 'is.god && party.ushka', speaker: '乌什卡', text: '车上多了一位神。车还是车。' },
      { if: 'flag.ushka_wary && party.ushka', text: '乌什卡蹲在车尾量杜坎森的腕骨，一只手始终没离开腰后的锤子。她量的时候背对着尸首，脸朝着你。' },
      { if: "origin == 'tide'", text: '缠白布的老兽人认出了你手背上那块不再变的绿。他用兽人话问你是哪个氏族的，问完就不再看你了。' },
    ],
    first: [
      { if: 'approval.ushka <= -4 && party.ushka', then: ['companion -ushka', 'flag ushka_left', 'log 乌什卡走了。她说跟着你，迟早要替你做一回礼。'] },
      'companion +tan',
      'quest q_korgus start',
      'codex korgus',
      'codex castonath',
      'codex rotcleaver',
    ],
    choices: [
      {
        text: '听瓦丽娜把价钱说完',
        once: true,
        check: { skill: 'insight', dc: 12, party: true },
        ok: { text: '她说“站起来”三个字的时候，两个学徒同时看了一眼箱子底下的粉笔圈。她买回去不是摆着的。', effects: ['flag a1_varina_read'] },
        fail: { text: '你盯着那箱金冠多看了两眼。乌什卡也看见了。', effects: ['approval ushka -1'] },
      },
      {
        text: '听边区兵要什么',
        once: true,
        effects: ['rep companies +1'],
        result: '领头的说要挂北城门，挂满一个月，让墙根底下那些绿的天天看。你听完了，他觉得你是自己人。',
      },
      {
        text: '听缠白布的老兽人怎么说',
        once: true,
        effects: ['rep clans +1'],
        result: '他说小儿子叫古尔赞，带着人退到长者郡去了，在等。他说完就闭嘴，一个字也不多加。',
      },
      {
        text: '问雕骨者那袋盐是干什么的',
        once: true,
        effects: ['flag a1_salt_known'],
        result: '他们说骨头要拿去雕，雕满了他就能再生一回。盐是换他的价，一袋够腌一冬的鱼。',
      },
      {
        text: '问乌什卡打算怎么办',
        once: true,
        if: 'party.ushka',
        effects: ['codex khak_bazi', 'approval ushka +1'],
        result: '她伸出两根手指：两天。拆开，烧，骨头磨成粉。要一块能生火的平地，城里没有。“磨完了，谁也用不上他。”',
      },
      {
        text: '向卡莱昂借一头骡子',
        once: true,
        check: { skill: 'persuasion', dc: 13, party: true, mods: [{ if: 'rep.league >= 2', n: 2, why: '旧东坎诺认得你' }] },
        ok: { text: '卡莱昂说骡子是他女儿的，别累死了。一个家丁牵来一头灰骡，耳朵缺了一角。', effects: ['flag a1_mule'] },
        fail: { text: '卡莱昂说他的骡子不拉兽人。车辕只好你们自己扛。', effects: ['flag a1_pull'] },
      },
      {
        text: '说尸首该归他儿子，这是名分',
        tag: '承嗣',
        if: "faction == 'heirs'",
        once: true,
        effects: ['rep clans +1', 'rep league -1', 'flag a1_heir_named'],
        result: '卡莱昂的脸沉了一下。老兽人抬起头看了你一会儿，把你的长相记住了。',
      },
      {
        text: '在出城的单子上签字',
        tag: '负怨者兵团',
        if: "origin == 'grudge'",
        once: true,
        effects: ['flag a1_signed_whole', 'rep companies +1'],
        result: '书记把单子推过来，上面写着“尸首一具，完整”。你签了。往后少一根指头，都是你的账。',
      },
      {
        text: '把手按在门板上：今晚谁也不许再出价',
        tag: '神',
        if: 'is.god',
        effects: ['flag a1_table_pressed', 'rep league -1', 'rep companies -1'],
        result: '桌边一下子没了声。瓦丽娜合上箱盖，边区兵把刀收了。往后有人说起门板桌，都说那晚它不算中立了。',
        goto: 'a1_02',
      },
      {
        text: '今晚先出城，路上再说',
        goto: 'a1_02',
      },
    ],
  },

  a1_02: {
    id: 'a1_02',
    title: '这马生前穿靴子？',
    loc: '下城 · 钴蓝兵团的哨卡 · 深夜',
    text: [
      '去地下通道的口子在银瀑下头，下城人管那儿叫粪瀑，味道配得上名字。半路有个卡子：三根拒马，一口煮豆子的锅，四个胳膊上扎蓝布条的兵。',
      '车上盖着草席。草席短了一截，两只靴子还露在外头。{?flag.a1_mule:灰骡子走两步停一步，嫌车沉。|没借着骡子，车辕压在你们自己肩上，一步一个脚印。}',
      { if: 'party.ushka', speaker: '乌什卡', text: '别看他们的锅。看锅的人显得饿，饿的人好说话，他们知道。' },
      { if: 'is.god', text: '哨兵看见你，先去看车上那两只靴子，又回来看你。他一时拿不准该先拦哪一样。' },
      { speaker: '哨兵', text: '站住。车上什么？' },
    ],
    choices: [
      {
        text: '说是害了热病的马肉，拉出城去烧',
        check: { skill: 'deception', dc: 13, party: true, adv: 'flag.a1_table_pressed' },
        ok: { text: '他捂着鼻子退开两步，挥手让你们快走。锅里的豆子他也不吃了。', goto: 'a1_03' },
        fail: { text: '哨兵拿矛杆挑起草席一角，看了看那双靴子。“这马生前穿靴子？”他把哨子塞进嘴里。', goto: 'a1_02b' },
      },
      {
        text: '绕后巷，从晾衣绳底下钻过去',
        check: { skill: 'stealth', dc: 12, party: true, dis: 'flag.a1_pull' },
        ok: { text: '后巷窄得刚够车轴。有人在楼上倒了一盆水，没往下看。你们出了巷口，卡子在身后。', goto: 'a1_03' },
        fail: { text: '车轮压翻了一只夜壶，整条巷子的狗都叫了。哨子跟着响。', goto: 'a1_02b' },
      },
      {
        text: '往锅边放二十金冠',
        req: 'gold >= 20',
        reqText: '需要 20 金冠',
        cost: { gold: 20 },
        result: '钱落进锅边的豆子堆里。哨兵数了数，把拒马挪开半根。',
        goto: 'a1_03',
      },
      {
        text: '亮出那封带火漆的信',
        tag: '皇帝的差事',
        if: "origin == 'wex' && item.bardswood_letter",
        effects: ['flag letter_shown', 'rep companies -1'],
        result: '哨兵不识字，认得火漆上的纹样。他叫来的伍长认得更多，脸都白了，挥手放行。天亮前这件事就会传到冈瑟耳朵里。',
        goto: 'a1_03',
      },
    ],
  },

  a1_02b: {
    id: 'a1_02b',
    title: '几分利',
    text: [
      '哨子一响，半条街的窗板都开了。有人探头喊“杜坎森出城了”，喊完又缩回去。天亮以前，下城一半的人都会知道这辆车往哪边走。',
      '冈瑟是披着毯子跑来的，脚上一只靴子，嘴里还嚼着东西。苔藓滩来的老兵，加韦德王欠他一年的饷，他见谁都先算利钱。',
      { speaker: '冈瑟', text: '杜坎森？拉出去好，省得招苍蝇。过我的卡子，三十金冠。没有？那就记账，一分五的利。我记性好。' },
      { if: 'flag.letter_shown', speaker: '冈瑟', text: '还有，替巴兹伍德先生跑腿的那位。下回火漆别往兵脸上怼，他们会害怕。' },
      { if: 'party.nixee', speaker: '妮克西', text: '一分五？抢钱。' },
    ],
    first: ['flag cart_known'],
    choices: [
      {
        text: '付三十金冠',
        req: 'gold >= 30',
        reqText: '需要 30 金冠',
        cost: { gold: 30 },
        result: '冈瑟一枚一枚咬过，收进毯子底下。“不赊账的人难得。”',
        goto: 'a1_03',
      },
      {
        text: '让他记账',
        effects: ['rep companies -1'],
        result: '他从耳朵上摘下半截炭笔，在拒马上画了一道。“钴蓝兵团的账，石头烧不烂。”',
        goto: 'a1_03',
      },
    ],
  },

  a1_03: {
    id: 'a1_03',
    title: '地下通道',
    art: 'ev_goblin_ambush',
    loc: '巴尔加尔的地下通道',
    date: '1444年奈拉月13日凌晨',
    text: [
      '巴尔加尔盖城的时候在底下留了条通道，没人画过图。水没过脚踝，墙上一排排凿痕是矮人的手艺，凿得比人肩高出一截。',
      '前头有铁链响。四十来个洞穴地精拴在一根链子上，蹲在一处干台子上，有的还在啃链环。链头是个嗜血者老兵，腰上缠着主链，手里提一把劈柴的斧子。撤退的号他听见了。他舍不得这串脚夫，要拉着他们往山里走。',
      '排水沟的铁栅后头冒出一对黄眼睛。一个森林地精，帽子上插着根绿羽毛，手扒着栅栏。',
      { speaker: '妮克西', text: '规矩第七条，先谈价，后救命。我带路，你们砸开那条链子，再算我一份。地鹰氏族，妮克西。' },
      { speaker: '妮克西', text: '欠我们的那位死了。债没死。你们车上拉的那个，跟这笔账也有点关系。' },
      { if: 'flag.knows_underpass', text: '你记得水闸在哪儿：左手第三根柱子后头，闸轮锈死一半。' },
      { if: 'is.goblin', text: '链子上有个老地精认出你是同类，用地精话骂了一句，骂的是你来晚了。' },
    ],
    first: ['companion +nixee', 'quest q_debt start', 'codex chainbreak', 'codex groundhawk'],
    choices: [
      {
        text: '冲上去，先把链头放倒',
        combat: {
          title: '地下通道',
          intro: '链头把主链在胳膊上绕了两圈，一串地精被拽得扑倒在水里。',
          enemies: [{ id: 'underpass_overseer' }, { id: 'orc_raider', n: 2 }],
          specials: [
            { id: 'sluice', name: '开水闸', desc: '把上游的水放下来，冲倒站在低处的人', check: { skill: 'athletics', dc: 12, adv: 'flag.knows_underpass' },
              success: { text: '闸门一抬，黑水卷着烂木头冲下来，链头和他的人站不住脚。', dmgAll: '3d6', type: 'bludgeoning' },
              fail: { text: '闸轮卡死了，你的手掌磨掉一层皮。', selfDmg: '1d4' } },
            { id: 'chain', name: '砸开主链', desc: '链子一断，他就没有人可挡了', check: { skill: 'sleight', alt: ['athletics'], dc: 12 },
              success: { text: '链环崩开。三个地精抄起断链就往链头腿上抽，他身边没人可挡了。', applyAll: { cond: 'exposed', turns: 2 } },
              fail: { text: '锤子砸偏了，火星溅了你一脸。', selfDmg: '1d4' } },
          ],
          win: { effects: ['xp 150'], goto: 'a1_04' },
          lose: { effects: ['gold -20', 'flag a1_half_fled'], goto: 'a1_04' },
          reward: ['gold +15'],
        },
      },
      {
        text: '掰住闸轮，让水一口气放下来',
        tag: '战士系',
        if: 'is.martial',
        combat: {
          title: '地下通道',
          intro: '闸轮在你手里转了半圈，卡住，又被你掰过去半圈。水声先到。',
          enemies: [{ id: 'underpass_overseer' }, { id: 'orc_raider', n: 2 }],
          specials: [
            { id: 'sluice', name: '松开闸轮', desc: '你一直掰着它，松手水就下来', success: { text: '你一松手，闸门砸开，黑水把链头一伙冲出去三步远。', dmgAll: '3d6', type: 'bludgeoning' } },
            { id: 'chain', name: '砸开主链', desc: '链子一断，他就没有人可挡了', check: { skill: 'sleight', alt: ['athletics'], dc: 12 },
              success: { text: '链环崩开。三个地精抄起断链就往链头腿上抽。', applyAll: { cond: 'exposed', turns: 2 } },
              fail: { text: '锤子砸偏了，火星溅了你一脸。', selfDmg: '1d4' } },
          ],
          win: { effects: ['xp 150'], goto: 'a1_04' },
          lose: { effects: ['gold -20', 'flag a1_half_fled'], goto: 'a1_04' },
          reward: ['gold +15'],
        },
      },
      {
        text: '钻进排水沟，绕到链头背后',
        tag: '矮个子',
        if: 'is.small',
        check: { skill: 'stealth', dc: 12, adv: 'party.nixee' },
        ok: {
          text: '沟里全是淤泥，正好够你这个头。你从链头脚边冒出来的时候，他还在朝前头吼。',
          combat: {
            title: '地下通道',
            intro: '链头还没回头，你的刀已经到了。',
            enemies: [{ id: 'underpass_overseer' }, { id: 'orc_raider', n: 2 }],
            specials: [
              { id: 'backstab', name: '从背后下手', desc: '趁他还没转身', success: { text: '你一刀扎进他膝弯，他跪进水里，链子也松了。', dmgAll: '2d6', type: 'piercing' } },
              { id: 'chain', name: '砸开主链', desc: '链子一断，他就没有人可挡了', check: { skill: 'sleight', alt: ['athletics'], dc: 12 },
                success: { text: '链环崩开。三个地精抄起断链就往链头腿上抽。', applyAll: { cond: 'exposed', turns: 2 } },
                fail: { text: '锤子砸偏了，火星溅了你一脸。', selfDmg: '1d4' } },
            ],
            win: { effects: ['xp 150'], goto: 'a1_04' },
            lose: { effects: ['gold -20', 'flag a1_half_fled'], goto: 'a1_04' },
            reward: ['gold +15'],
          },
        },
        fail: {
          text: '沟里卡着一只死耗子和半截门栓，你出来时整个人都是泥，链头正等着你。',
          combat: {
            title: '地下通道',
            intro: '链头一把揪住你的领子，把你拎出了沟。',
            enemies: [{ id: 'underpass_overseer' }, { id: 'orc_raider', n: 2 }],
            specials: [
              { id: 'sluice', name: '开水闸', desc: '把上游的水放下来', check: { skill: 'athletics', dc: 12, adv: 'flag.knows_underpass' },
                success: { text: '闸门一抬，黑水卷着烂木头冲下来。', dmgAll: '3d6', type: 'bludgeoning' },
                fail: { text: '闸轮卡死了。', selfDmg: '1d4' } },
            ],
            win: { effects: ['xp 150'], goto: 'a1_04' },
            lose: { effects: ['gold -20', 'flag a1_half_fled'], goto: 'a1_04' },
          },
        },
      },
    ],
  },

  a1_04: {
    id: 'a1_04',
    title: '四十个地精',
    loc: '地下通道的出口 · 天亮前',
    text: [
      '{?flag.a1_half_fled:你们是被地精从水里拖上岸的。监工带着半串人往深处跑了，剩下二十来个，|链头倒在水里，主链断成三截。}地精们坐在出口的台阶上发愣。台阶是给人修的，一级有他们半条腿高。',
      '出口外头是一片烂菜地，再往外就是边区兵的巡逻线，火把一字排开。天快亮了。',
      '一个会说通用语的地精老太太把断链子团成一团抱在怀里，跟抱孩子一样。',
      { speaker: '地精老太太', text: '链子我留着，压腌菜坛子。人往哪儿去，你们说。' },
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第一条，活着。第二条，别信长得高的。你们算长得高的，我先说清楚。' },
      { if: 'party.tan', speaker: '阿坦', text: '庙里有个地窖。原先存灯油的，能蹲下三十个人，挤一挤四十个。钥匙在我这儿。' },
      { if: 'is.goblin', text: '老太太看了你一眼，换成地精话又问了一遍。这回问的是：你跟他们是一伙的，还是跟我们是一伙的。' },
    ],
    choices: [
      {
        text: '藏进万神道那座庙的地窖',
        effects: ['flag goblins_hidden', 'world room +1', 'gold -30', 'approval tan +1', 'approval nixee +1'],
        result: '阿坦打开地窖，搬走了半桶灯油。口粮是你们掏的钱，三十金冠的豆子和咸鱼。老太太头一个下去，把链子放在台阶上。',
        goto: 'a1_05',
      },
      {
        text: '把监工一伙的兵器分给他们，让他们自己守通道',
        effects: ['flag goblins_armed', 'world room +1', 'rep league -1', 'rep clans +1'],
        result: '两把斧子，一捆矛，一面盾。最大的地精扛起斧子，斧柄比他还长。巡逻线那边有人看见了，记下了。',
        goto: 'a1_05',
      },
      {
        text: '藏进地窖，先让他们推一个说话的人',
        tag: '无冕',
        if: "faction == 'crownless'",
        effects: ['flag goblins_hidden', 'flag goblin_speaker', 'world room +1', 'gold -30', 'rep clans +1', 'approval tan +1', 'approval nixee +1'],
        result: '他们吵了一盏茶的工夫，推了老太太。她把链子往你手里一塞：“下回要说话，找我。”',
        goto: 'a1_05',
      },
      {
        text: '分了兵器让他们守通道，先推一个说话的人',
        tag: '无冕',
        if: "faction == 'crownless'",
        effects: ['flag goblins_armed', 'flag goblin_speaker', 'world room +1', 'rep league -1', 'rep clans +2'],
        result: '扛斧子的那个被推出来，他把斧子换到另一边肩膀上，说他叫斯库格，往后通道口归他管。',
        goto: 'a1_05',
      },
      {
        text: '交给边区兵，换一张出城的路条',
        effects: ['flag goblins_handed', 'world room -1', 'rep companies +1', 'gold +40', 'approval nixee -3', 'approval tan -1'],
        result: '边区兵的伍长数了人头，给了你一张路条和四十金冠。老太太被推上大车的时候，没回头。',
        goto: 'a1_05',
      },
    ],
  },

  a1_05: {
    id: 'a1_05',
    title: '板车边的营火',
    art: 'ev_dmarvuks',
    loc: '银池湖路 · 一座空谷仓外',
    date: '1444年奈拉月13日夜',
    shop: { name: '温斯顿·愚足', blurb: '推着货担追了你们一天的半身人。东西不便宜，饼是热的。', stock: ['healing_potion', 'bandage', 'antidote', 'halfling_pie', 'holy_water', 'shield', 'leather'] },
    text: [
      '车停在湖路边一座空谷仓外头。谷仓的门板早被人拆去烧了，里头只剩几只破粮袋。入夜以后，袋子那边有东西在啃，一刻不停。',
      '火是布罗克生的，他嫌人类的柴劈得太细。阿坦把灯挂在车辕上。杜坎森的脚还露在草席外头，有人往上盖了件斗篷。',
      '天黑透以后，路上推来一副货担。温斯顿·愚足追了你们一天，说他在城里待不住，手闲。',
      { speaker: '愚足', text: '先吃。肉饼，咸鱼，豆子，哪样都行。吃完了再说那边那位的事。凉了就不好吃了。' },
      { if: 'flag.p_lied && party.tan', text: '阿坦往火里添了根柴，问起你在城里跟那个快死的人说的话。他问得很平，问完就不说了。' },
      { if: 'flag.p_truth && party.ushka', speaker: '乌什卡', text: '城里那个快死的。你没骗他。' },
      { if: 'is.god && party.tan', speaker: '阿坦', text: '我问一句。王在哪儿？……你也不知道。那我接着问他。' },
      { if: 'is.god && party.nixee', speaker: '妮克西', text: '神迹按件算，不赊。我先把价报给你，省得你被别人坑了。' },
      { if: "is.god && origin != 'sons'", text: '达拉斯拿一根打了结的线，从你的肩膀量到脚后跟。他说给死人做寿衣做惯了，万一呢。' },
      { if: 'var.lies >= 3 && party.tan', text: '阿坦数了数你说过的好听话，数到三，抬头看了你一眼。' },
    ],
    first: [
      'quest q_korgus stage 2',
      { if: 'flag.p_lied && party.tan', then: ['approval tan -1'] },
      { if: 'flag.p_truth && party.ushka', then: ['approval ushka +1'] },
    ],
    enter: [
      { if: 'var.lies >= 3 && party.tan && !flag.a1_lies_asked', then: ['approval tan -1', 'flag a1_lies_asked'] },
    ],
    choices: [
      {
        text: '看乌什卡刻那根木签',
        if: 'party.ushka',
        once: true,
        effects: ['quest q_ushka start', 'approval ushka +1'],
        result: '木签上刻着十一道。她说是骑士的规矩，跟冒险团学来的。头一条是“不杀投降的”，第六条是“吃饭先让伤号”。第十二道还空着。',
      },
      {
        text: '天快亮时，听阿坦做晨祷',
        if: 'party.tan',
        once: true,
        effects: ['codex dawn_office', 'codex castellos', 'codex regent_court', 'item +petition_book'],
        result: '他朝东站着，一共念了四十句，念完就停。他把庙里那本祈愿簿塞给你看：二十年的祷告，回音那一栏是空的。',
      },
      {
        text: '听妮克西背她的规矩',
        if: 'party.nixee',
        once: true,
        effects: ['codex goblin_rules', 'approval nixee +1'],
        result: '规矩有编号，没成文。她背到第四十条就打住了，说后面的要收钱。',
      },
      {
        text: '跟老布兰多克说话',
        if: "origin != 'corintar'",
        once: true,
        effects: ['rep corintar +1'],
        result: '他五十了，给人擦了半辈子甲。他说她的甲是他擦的，护肩上那道缝是他去年补的。“补得不好。”他又擦了一遍。',
      },
      {
        text: '看达拉斯缝东西',
        if: "origin != 'sons'",
        once: true,
        effects: ['item +bandage 2'],
        result: '他在缝一件寿衣，针脚又密又匀。你问他给谁，他抬了抬下巴指那边的车，又低头缝。走的时候他塞给你两卷布条，边都锁好了。',
      },
      {
        text: '替奥托格守前半夜',
        if: "origin != 'wex'",
        once: true,
        effects: ['flag a1_ottog_owes'],
        result: '他的手抖得握不住杯子。你接了他的班，他没道谢，把大剑横在膝盖上睡着了，睡着了手还在抖。',
      },
      {
        text: '问布罗克那把铲子',
        if: "origin != 'grudge'",
        once: true,
        effects: ['rep companies +1'],
        result: '红宝石领的铲子，七斤二两。他说人类的铲子是挖菜地的，挖坟得用这个。你掂了掂，比你的刀沉。',
      },
      {
        text: '问马布格抬过多少人',
        if: "origin != 'tide'",
        once: true,
        effects: ['rep clans +1'],
        result: '他想了想，说没数过。哪边的都抬，抬到地方放下就走。“死了都一样沉。”',
      },
      {
        text: '给尸首抹盐，用席子重新裹一遍',
        once: true,
        check: { skill: 'medicine', dc: 11, party: true },
        ok: { text: '你们把愚足的半袋粗盐都用上了，席子扎了三道绳。味道压下去不少。', effects: ['flag a1_salted'] },
        fail: { text: '盐抹得不匀，席子扎歪了，半袋盐白搭。愚足心疼得直咂嘴。', effects: ['gold -5'] },
      },
      {
        text: '挑个守夜的地方',
        once: true,
        check: { skill: 'survival', dc: 12, party: true },
        ok: { text: '你把车挪到谷仓背风那一面，火堆挡在门口。袋子那边啃了一夜，没过来。', effects: ['xp 50'] },
        fail: {
          text: '后半夜，啃粮袋的东西啃完了粮袋，顺着味儿找到了车。两只，指甲比手指长。',
          combat: {
            title: '谷仓边',
            intro: '食尸鬼扒着车帮往上爬，冲的是草席里的那位。',
            enemies: [{ id: 'ghoul', n: 2 }],
            specials: [
              { id: 'fire', name: '把火堆踢过去', desc: '它们怕火', check: { skill: 'athletics', dc: 11 },
                success: { text: '火炭溅了它们一身，两只都往后缩。', dmgAll: '2d4', type: 'fire' },
                fail: { text: '你踢翻了锅，豆子撒了一地。', selfDmg: '1d4' } },
            ],
            win: { effects: ['xp 100'], goto: 'a1_05' },
            lose: { effects: ['gold -10'], goto: 'a1_05' },
          },
        },
      },
      {
        text: '天亮了，路上来了个骑骡子的',
        goto: 'a1_05b',
      },
    ],
  },

  a1_05b: {
    id: 'a1_05b',
    title: '骑骡子的精灵',
    loc: '银池湖路 · 次日清晨',
    text: [
      '天亮时湖面起了雾。路上来了个精灵女人，骑一头花骡子，膝盖上摊着本子，墨水瓶拿绳子拴在骡鞍上。她在车前头勒住骡子，先看杜坎森的脚，再看你们。',
      { speaker: '加莱尔', text: '加莱尔·守昔者，编年史家。抬稳。我问一句：他倒下的时候，脸朝哪边？' },
      '她把你们的答话一字不改地记下来。然后她从本子里抽出一张纸，上面列着三条：渔村的龙皮，蓝宝石望的老太太，焦塔顶上的银光。',
      { speaker: '加莱尔', text: '今年有人说见着银龙了，三起。编年史家会按件付钱，要第一手的。你们的车哪儿都能去，没人盘问。我上回雇人查这种事，是八十年前，那几位都很守时。' },
      { if: 'is.immortal', speaker: '加莱尔', text: '另外，你是哪年生的？我习惯先写这一栏。' },
      { if: 'is.god', text: '你报了一个数。她写下来，在后面加了两个字：自称。' },
    ],
    first: ['codex chroniclers'],
    choices: [
      {
        text: '接下这份差事',
        effects: ['quest q_sightings start', 'rest long'],
        result: '她付了定钱，说剩下的按件结。你们在谷仓边上睡了个整觉，这是出城以后头一回。',
        goto: 'a1_06',
      },
      {
        text: '先跟她讲定钱',
        check: { skill: 'persuasion', dc: 12, party: true, mods: [{ if: 'party.nixee', n: 2, why: '妮克西在旁边帮腔' }] },
        ok: { text: '她又数出三十金冠，记在本子上：“定钱，三十，雇主吃亏。”', effects: ['quest q_sightings start', 'gold +30', 'rest long'], goto: 'a1_06' },
        fail: { text: '她不急不恼，在本子上写了一行：“爱讲价。”然后照原价付了定钱。', effects: ['quest q_sightings start', 'rep temples -1', 'rest long'], goto: 'a1_06' },
      },
    ],
  },

  a1_06: {
    id: 'a1_06',
    title: '银池湖路',
    loc: '银池湖西岸',
    date: '1444年奈拉月中',
    text: [
      '湖路上全是回乡的人。推独轮车的，背锅的，牵一头羊的。一家人在路边认自家的田，地界石被兽人拿去垒了灶。村口的告示板上贴着三张“招募冒险者”，一张招人打狼，两张招人收麦子。',
      '前头来了一队骑士，披风上绣着灰玫瑰。马后头拴着一串兽人，脖子上套绳，十一个。领头的女人五十上下，胸甲擦得很亮。',
      { speaker: '莫古妮娅', text: '奥尔丁的莫古妮娅，灰烬玫瑰。这些是我的仆役，抓来修路的。你们车上拉的什么？' },
      '她看了一眼草席底下露出来的靴子，又看了一眼乌什卡，看得比看靴子久。',
      { if: 'party.ushka', speaker: '乌什卡', text: '仆役。她嘴里这个词，跟拴链子是一个意思。' },
      { if: "origin == 'tide'", text: '串上第四个你认得。去年冬天在南城，他分过你半块饼。他看见你了，没出声。' },
    ],
    choices: [
      {
        text: '拦下她，要她放人',
        check: { skill: 'persuasion', dc: 14, party: true, alt: ['intimidation'], mods: [{ if: 'rep.corintar >= 2', n: 2, why: '科琳塔尔的面子' }] },
        ok: { text: '你提了蓝牙那条“不许杀俘”，又提了她修路的工钱谁出。她骂了一句，割断了绳子。十一个人往湖边跑，有一个跑一半又回来，朝你点了一下头。', effects: ['flag rose_chain_freed', 'world room +1', 'rep clans +1'], goto: 'a1_07' },
        fail: { text: '莫古妮娅笑了。她说科琳死了，规矩跟着死了一半。她身后的骑士把手搭在了剑柄上。', goto: 'a1_06b' },
      },
      {
        text: '拔刀，抢人',
        combat: {
          title: '湖路上',
          intro: '灰玫瑰的骑士拨转马头，一个兽人被绳子拽倒在泥里。',
          enemies: [{ id: 'marcher_veteran', n: 2, name: '灰玫瑰骑士' }, { id: 'man_at_arms', n: 2 }],
          specials: [
            { id: 'horses', name: '惊了她的马队', desc: '马比人怕事', check: { skill: 'animal', dc: 12 },
              success: { text: '你朝马脸上甩了一把湖泥，领头那匹人立起来，后头的马跟着乱了。', applyAll: { cond: 'dazed', turns: 1 } },
              fail: { text: '马没惊，你挨了一蹄子。', selfDmg: '1d6' } },
          ],
          win: { effects: ['flag rose_chain_freed', 'world room +1', 'rep companies -1', 'rep clans +1', 'xp 150'], goto: 'a1_07' },
          lose: { effects: ['gold -40', 'flag rose_chain_bought'], goto: 'a1_07' },
        },
      },
      {
        text: '出钱，赎两个',
        req: 'gold >= 60',
        reqText: '需要 60 金冠',
        cost: { gold: 60 },
        effects: ['flag rose_chain_bought'],
        result: '她挑了两个最瘦的给你，说这两个本来也修不了几天路。剩下九个跟着马走了。',
        goto: 'a1_07',
      },
      {
        text: '把车往路边一靠，让她过去',
        effects: ['flag rose_chain_ignored', 'world room -1', 'approval ushka -1', { if: "origin == 'tide'", then: ['approval ushka -1'] }],
        result: '十一个人从你们车边走过去，绳子在泥里拖出一道沟。乌什卡一直看着，看到看不见为止。',
        goto: 'a1_07',
      },
    ],
  },

  a1_06b: {
    id: 'a1_06b',
    title: '剑柄上的手',
    text: [
      '湖路一下子空了。推独轮车的把车推进了沟，牵羊的抱着羊蹲在告示板后头。',
      '莫古妮娅没拔剑，她等着你先拔。她身后四个人，两个披甲的老兵，两个扈兵。串上的兽人都低着头，只有一个抬眼看你。',
      { speaker: '莫古妮娅', text: '让路，还是拔？我赶时间，你们车上那位也赶时间。' },
    ],
    choices: [
      {
        text: '拔',
        combat: {
          title: '湖路上',
          intro: '她早等着这一下，剑出鞘的时候马已经冲了起来。',
          enemies: [{ id: 'marcher_veteran', n: 2, name: '灰玫瑰骑士' }, { id: 'man_at_arms', n: 2 }],
          specials: [
            { id: 'horses', name: '惊了她的马队', desc: '马比人怕事', check: { skill: 'animal', dc: 12 },
              success: { text: '领头那匹马人立起来，后头的跟着乱了。', applyAll: { cond: 'dazed', turns: 1 } },
              fail: { text: '马没惊，你挨了一蹄子。', selfDmg: '1d6' } },
          ],
          win: { effects: ['flag rose_chain_freed', 'world room +1', 'rep companies -1', 'rep clans +1', 'xp 150'], goto: 'a1_07' },
          lose: { effects: ['gold -40', 'flag rose_chain_bought'], goto: 'a1_07' },
        },
      },
      {
        text: '让路',
        effects: ['flag rose_chain_ignored', 'world room -1', 'approval ushka -1', { if: "origin == 'tide'", then: ['approval ushka -1'] }],
        result: '她点点头，好像早知道。十一个人从你们车边走过去，抬眼的那个又把头低下了。',
        goto: 'a1_07',
      },
    ],
  },
  a1_07: {
    id: 'a1_07',
    title: '第一起：银粉',
    art: 'ev_dragon_fly',
    loc: '湖边的一个渔村',
    text: [
      '渔村十几户，晒网的竿子比房子多。村口支着个棚子，棚里挂一张皮，有门板那么宽，在风里一闪一闪地发亮。棚前排着队，大半是刚回乡的人。',
      { speaker: '摊主', text: '银龙蜕下的皮！一个铜板看一眼，两个铜板摸一下。摸了治风湿，摸两回管一年。' },
      '加莱尔站在队尾，本子摊开，一笔一笔记排队的人数。她说先记人，再记皮。',
      { if: 'party.tan', speaker: '阿坦', text: '书上说银龙的鳞是白的，太阳底下发蓝。这张是灰的，上了一层亮。' },
      { if: 'party.nixee', speaker: '妮克西', text: '两个铜板摸一下。比我们地精的买卖还黑，我得记下来。' },
    ],
    first: ['quest q_sightings stage 2'],
    choices: [
      {
        text: '掏两个铜板，凑近了摸一摸',
        check: { skill: 'investigation', dc: 12, alt: ['nature'], party: true },
        ok: { text: '指头上沾了一层银粉。你掀起一片鳞，鳞根是褐色的，是一头双足飞龙，死了不到两年。', goto: 'a1_07b' },
        fail: { text: '你看了半天看不出名堂。摊主说要细看就买一角，十金冠。你买了，拿回去一刮，底下是褐色的。', effects: ['gold -10'], goto: 'a1_07b' },
      },
      {
        text: '凑上去闻一闻那张皮',
        tag: '自然系',
        if: 'is.nature',
        effects: ['flag a1_hide_smelled'],
        result: '银粉底下是一股松脂味，混着火山灰。这是试炼山那一带的双足飞龙，那边的松林就是这个味。',
        goto: 'a1_07b',
      },
    ],
  },

  a1_07b: {
    id: 'a1_07b',
    title: '刷了银粉的皮',
    text: [
      '摊主看出来你看出来了。他把你拉到棚子后头，压着嗓子说他表哥是随军祭司，皮是表哥从山上弄来的，粉也是表哥给的。“大家图个念想。”',
      '棚子前头的队还在排。一个老头背着他瘫了半边的老伴，排到了第三个。',
      { speaker: '加莱尔', text: '我按件付钱，不管你们怎么处置。不过我会把怎么处置记下来。' },
      { if: 'flag.a1_hide_smelled', speaker: '加莱尔', text: '试炼山的松脂。这一句我替你记上，署你的名。' },
    ],
    choices: [
      {
        text: '当着排队的人，把银粉刮下来',
        effects: ['rep temples -1', 'gold +20', 'approval nixee +1'],
        result: '你刮了一道，底下的褐鳞露出来。队伍散了一半，老头背着老伴没走，又排了一会儿。摊主的表哥那边，这笔账记下了。',
        goto: 'a1_08',
      },
      {
        text: '私下让他收摊',
        effects: ['gold +20', 'approval tan +1'],
        result: '他天黑前就收了，皮卷起来扛走，说去下一个村子。你没问是哪个村子。',
        goto: 'a1_08',
      },
      {
        text: '由他去',
        effects: ['gold +10'],
        result: '加莱尔照数付了钱，少给一半，说“由他去”也是一种处置，值一半。',
        goto: 'a1_08',
      },
    ],
  },

  a1_08: {
    id: 'a1_08',
    title: '第二起：仰头的老太太',
    art: 'ev_big_star_in_sky',
    loc: '蓝宝石望 · 一座塌了半边的塔',
    text: [
      '蓝宝石望的塔塌了半边，楼梯还剩一百多级。塔顶住着个老太太，裹三层毯子，脚边一只炭盆，炭早灭了。墙上用炭条画满了道，一天一道，五道一捆。',
      '村里人说她见过银龙。她说没有。二十年，每天上来看一回天，一回也没见着。',
      { speaker: '老太太', text: '是不是我哪天眨眼的时候，错过了？' },
      { if: 'flag.a1_blink', text: '她问完就盯着你的眼睛。你眨一下，她嘴唇动一下。她在数你眨眼。' },
      { if: 'party.tan', speaker: '阿坦', text: '七千二百多道。我数了一面墙，还有两面。' },
      { if: 'is.god', text: '她不看天了，转过来看你，看了很久。“是你吗？”' },
    ],
    first: ['quest q_sightings stage 3'],
    choices: [
      {
        text: '看看她到底想听什么',
        once: true,
        check: { skill: 'insight', dc: 12, party: true },
        ok: { text: '她的手一直按在那本天象簿上，按得很紧。她要的是一句准话，哪一句都行，只要是准的。', effects: ['flag a1_blink'] },
        fail: { text: '你看了半天，只看出她冷。你从包里摸出五金冠，托人给她送一筐炭上来。', effects: ['gold -5'] },
      },
      {
        text: '说大概是错过了，他来过',
        effects: ['var lies +1', 'approval tan -1'],
        result: '她点点头，把那本簿子撕了，一页一页喂进炭盆里，说这下暖和了。墙上的道她没擦。',
        goto: 'a1_09',
      },
      {
        text: '说您没错过，他没来',
        effects: ['item +sky_tally', 'approval tan +1'],
        result: '她把天象簿交给阿坦，说你收着，你年轻，眼睛好。阿坦把簿子揣进怀里，揣得很仔细。',
        goto: 'a1_09',
      },
      {
        text: '问她没见着，为什么还看',
        effects: ['flag a1_she_watches', 'rep temples +1'],
        result: '“总得有人看。”她把毯子裹紧了一层，眼睛又回到天上去了。下楼时阿坦在祈愿簿上添了一行，写的是她的名字。',
        goto: 'a1_09',
      },
      {
        text: '让天上过一道银光给她看',
        tag: '神',
        if: 'is.god',
        effects: ['flag god_faked_dragon', 'var lies +1', 'approval tan -3', 'rep temples +1'],
        result: '天上过去一道银光，从塔顶一直拉到湖那边。她看见了，在墙上划了最后一道，划得很重。当晚她就走了。三天以后，神殿的人抬着“第四起银龙现身”的牌子在蓝宝石望游街，阿坦没有去看。',
        goto: 'a1_09',
      },
    ],
  },

  a1_09: {
    id: 'a1_09',
    title: '死齿的罐子',
    art: 'ev_priest_phantom',
    loc: '湖路 · 芦苇荡 · 夜',
    text: [
      '{?flag.a1_mule:半夜，灰骡子先叫了。|半夜，拴在车边的狗先叫了。}芦苇里站起来一排兽人，脸上抹着白灰，白得发青。领头的提着一只陶罐，罐口封着蜡，蜡上按了个手印。',
      '他们不看车上的尸首，看的是尸首上头那块空地方，好像那里还站着谁。再往后，一个瘦高的兽人站在芦苇边上没动，袖着手，看。',
      { speaker: '死语者', text: '肉你们留着。我们要他说话。他说完，你们照样拉走。' },
      { if: 'party.ushka', text: '乌什卡把刀和锤一起抽了出来，左手刀，右手锤。从城里到这儿，她头一回两样一起拿。' },
      { if: 'party.ushka', speaker: '乌什卡', text: '死齿的。他们拿罐子装人，装进去就不放了。' },
      { if: 'flag.cart_known', text: '芦苇那头又站起来两个。城里那一声哨子，传得比你们走得快。' },
      { if: 'is.god', text: '领头的回头问后面那个瘦高的：神有没有魂，罐子装不装得下。缝尸者斯劳看了你很久，才说了句什么。' },
    ],
    first: ['codex deadfang'],
    choices: [
      {
        text: '守住车',
        if: '!flag.cart_known',
        combat: {
          title: '芦苇荡',
          intro: '死语者拍开罐口的蜡，芦苇里的风一下子停了。',
          enemies: [{ id: 'death_whisperer' }, { id: 'orc_raider', n: 3 }, { id: 'ghoul' }],
          specials: [
            { id: 'jar', name: '砸罐子', desc: '罐子碎了，他就叫不起人来', check: { skill: 'sleight', alt: ['athletics'], dc: 13 },
              success: { text: '罐子在石头上碎成七八片，一股凉气贴着地皮散了。抹白灰的几个都愣了一下。', applyAll: { cond: 'frightened', turns: 1 }, effects: ['flag jar_broken', 'world unburied -1'] },
              fail: { text: '你扑空了，罐子还在他手里，你的膝盖磕在了石头上。', selfDmg: '1d6' } },
            { id: 'water', name: '把车推进浅水', desc: '他们的死人不下水', check: { skill: 'athletics', dc: 12 },
              success: { text: '车轮一进水，食尸鬼就停在了岸上，绕着水边打转。', applyAll: { cond: 'slowed', turns: 2 } },
              fail: { text: '车陷进淤泥，推不动了。', selfDmg: '1d4' } },
          ],
          win: { effects: ['xp 250', 'item +goblin_bomb', { if: '!flag.jar_broken', then: ['flag ghost_taken', 'world unburied +1'] }], goto: 'a1_10' },
          lose: { effects: ['flag ghost_taken', 'world unburied +1'], goto: 'a1_10' },
        },
      },
      {
        text: '守住车',
        if: 'flag.cart_known',
        combat: {
          title: '芦苇荡',
          intro: '死语者拍开罐口的蜡，芦苇里的风一下子停了。两边都有人往车这边摸。',
          enemies: [{ id: 'death_whisperer' }, { id: 'orc_raider', n: 5 }, { id: 'ghoul' }],
          specials: [
            { id: 'jar', name: '砸罐子', desc: '罐子碎了，他就叫不起人来', check: { skill: 'sleight', alt: ['athletics'], dc: 13 },
              success: { text: '罐子在石头上碎成七八片，一股凉气贴着地皮散了。', applyAll: { cond: 'frightened', turns: 1 }, effects: ['flag jar_broken', 'world unburied -1'] },
              fail: { text: '你扑空了，膝盖磕在石头上。', selfDmg: '1d6' } },
            { id: 'water', name: '把车推进浅水', desc: '他们的死人不下水', check: { skill: 'athletics', dc: 12 },
              success: { text: '车轮一进水，食尸鬼就停在了岸上。', applyAll: { cond: 'slowed', turns: 2 } },
              fail: { text: '车陷进淤泥，推不动了。', selfDmg: '1d4' } },
          ],
          win: { effects: ['xp 250', 'item +goblin_bomb', { if: '!flag.jar_broken', then: ['flag ghost_taken', 'world unburied +1'] }], goto: 'a1_10' },
          lose: { effects: ['flag ghost_taken', 'world unburied +1'], goto: 'a1_10' },
        },
      },
    ],
  },

  a1_10: {
    id: 'a1_10',
    title: '尸首的去向',
    art: 'ev_excalibur',
    loc: '银池湖边的一块平地',
    date: '1444年奈拉月下旬',
    text: [
      '湖边有一块平地，铺着碎石，能生火。车停下以后，跟了一路的人都到了，各站各的地方。没人催，谁都知道这块地是最后一站。',
      '乌什卡的刀磨好了，搁在一块干净的石头上。古尔赞的使者蹲在车轮边。边区兵的五个人坐在路边吃干粮，剁肉刀插在土里。瓦丽娜的箱子还开着，她自己坐在箱盖上。阿祖科尔的盐袋放在车辕上，没人动过。',
      { if: 'party.tan', speaker: '阿坦', text: '湖里住着一位，叫银夫人。渔民往水里扔鱼头供她。绑上石头扔下去，也算交给她。' },
      { if: 'flag.ghost_taken', text: '芦苇荡那一夜之后，尸首轻了。抬的人都这么说，秤上看不出来。' },
      { if: 'flag.a1_varina_read', text: '瓦丽娜身边的学徒在湖岸上画了个粉笔圈，量了三遍尺寸。' },
      { if: 'flag.a1_heir_named', text: '缠白布的使者认出了你，冲你点了下头。门板桌那晚说“归儿子”的人，他记着。' },
      { if: 'is.god', text: '使者站起来，当着所有人问你：他是不是杜坎的儿子？问完他就等着，边区兵也停了嚼。' },
    ],
    first: ['level 3', 'codex iron_sceptre'],
    choices: [
      {
        text: '当众说：是',
        tag: '神',
        if: 'is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown',
        once: true,
        effects: ['flag god_named_korgus', 'world embers +2'],
        result: '使者跪下了，两只手按在地上。边区兵里有人吐了一口唾沫。天黑以前，这句话会顺着艾伦河往北走。',
      },
      {
        text: '当众说：不是',
        tag: '神',
        if: 'is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown',
        once: true,
        effects: ['flag god_denied_korgus', 'world embers -1', 'rep clans -2'],
        result: '使者站着没动，脸上的白布被风吹开了一角。他走的时候没跟你告别。氏族里从此有人管你叫仇神。',
      },
      {
        text: '照实说：不知道',
        tag: '神',
        if: 'is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown',
        once: true,
        effects: ['flag a1_god_unknown', 'approval tan +1'],
        result: '使者看了你很久，又蹲回车轮边上。你是他见过的头一个不知道的神，他不知道该失望还是该放心。',
      },
      {
        text: '让乌什卡做归尘礼',
        if: 'party.ushka',
        goto: 'a1_10a',
      },
      {
        text: '交给古尔赞的使者',
        effects: ['flag korgus_son', 'flag gurzan_owes', 'world embers +2', 'rep clans +2', 'rep companies -1', 'rep corintar -1', 'approval ushka -2', { if: "origin == 'tide'", then: ['rep clans +1', 'flag a1_kin'] }, 'quest q_korgus done'],
        result: "使者把门板连尸首一起扛上肩，另叫了三个人来抬。{?origin == 'tide':他走前回头，管你叫亲族。|他走前回头看了一眼车，说长者郡记着这辆车。}乌什卡转过身去，不看。",
        goto: 'a1_10z',
      },
      {
        text: '让边区兵把头带回去挂门',
        effects: ['flag korgus_spike', 'flag gurzan_grudge', 'world embers +1', 'world room -1', 'world unburied +1', 'rep companies +2', 'approval ushka -2', 'quest q_korgus done'],
        result: '剁肉刀落了三下。领头的拎着头发提起来看了看，用麻袋装了。剩下的他们不要，乌什卡在湖边烧了，没磨。',
        goto: 'a1_10z',
      },
      {
        text: '把尸首卖给瓦丽娜',
        effects: ['flag korgus_sold', 'flag gurzan_grudge', 'flag ushka_warned', 'gold +400', 'world unburied +3', 'rep companies +1', 'approval ushka -3', 'quest q_korgus done'],
        result: '瓦丽娜数出四百金冠，学徒把尸首抬进了粉笔圈。当夜乌什卡不见了。天亮她回来，手里多了一小包骨粉。她从尸首上砍下一只手，自己磨了。“第二回我走。”',
        goto: 'a1_10z',
      },
      {
        text: '绑上石头，沉进湖里',
        effects: ['flag korgus_lake', 'world embers +1', 'world unburied +1', 'approval ushka -1', 'quest q_korgus done'],
        result: '你们借了渔民的船，划到湖心，绑了四块石头。水冒了一阵泡就平了。渔民说往后不在这片下网了。',
        goto: 'a1_10z',
      },
      {
        text: '交给阿祖科尔的人，收下那袋盐',
        effects: ['flag korgus_carver', 'world embers +1', 'rep clans +1', 'item +bonecarver_salt', 'approval ushka -1', 'quest q_korgus done'],
        result: '雕骨者的三个人用盐把尸首埋了个严实，抬着往东南走了。{?flag.a1_salt_known:那袋盐真够腌一冬的鱼。|}乌什卡说雕满了的骨头，三代以后会有人拿去换酒。',
        goto: 'a1_10z',
      },
    ],
  },

  a1_10a: {
    id: 'a1_10a',
    title: '归尘礼',
    text: [
      '乌什卡先拆。关节一处一处卸开，像木匠拆一张旧桌子，卸下来的按大小码在席子上。她干活的时候不说话，只有一回让你把火再烧旺些。',
      '火要烧一整夜。烧完的骨头要等它凉，凉了再用锤子敲碎，碎了再磨。湖边的风是往你们这边吹的。',
      { speaker: '乌什卡', text: '骨头粗，比我说的还粗。你守火，我磨。夜里别睡，火一灭就得从头来。' },
      { if: 'flag.ghost_taken', speaker: '乌什卡', text: '磨的是料。他本人不在里头了，罐子装走了。料也得磨。' },
      { if: 'flag.a1_salted', text: '盐抹得匀，席子扎得紧，拆的时候省了不少事。乌什卡看了一眼绳结，没说话，算是认了。' },
    ],
    first: ['flag korgus_rite', 'flag gurzan_grudge', 'world embers -2', 'world unburied -1', 'var rites +1', 'log 归尘礼：科尔古斯·杜坎森。银池湖边，两天。', 'rep clans -1', 'approval ushka +3', 'quest q_korgus done'],
    choices: [
      {
        text: '守着火堆熬过这一夜',
        check: { abil: 'con', dc: 12, save: true, adv: 'flag.a1_salted' },
        ok: { text: '天亮的时候火还旺着。乌什卡已经磨完了一半，粉装进三只皮袋。', goto: 'a1_10b' },
        fail: { text: '后半夜你打了个盹，被火星燎醒，半边眉毛没了，手背起了一溜泡。火没灭。', effects: ['hp -5'], goto: 'a1_10b' },
      },
    ],
  },

  a1_10b: {
    id: 'a1_10b',
    title: '第二天',
    text: [
      '第二天晌午，边区兵回来了，这回是八个。领头的看了看三只皮袋，又看了看席子上还没磨的那半堆。',
      { speaker: '边区兵', text: '头呢？营里说好了挂北城门。挂一个月，一天也不能少。你们给磨成面了？' },
      '乌什卡没抬头，锤子照旧一下一下往下落。剩下的是头骨。',
      { if: 'party.nixee', speaker: '妮克西', text: '规矩第十九条，跟带刀的讲道理，先站到他够不着的地方。' },
    ],
    choices: [
      {
        text: '跟他们讲，头挂上去一个月，城门底下要死多少人',
        check: { skill: 'persuasion', dc: 14, party: true, alt: ['intimidation'], mods: [{ if: 'rep.companies >= 2', n: 2, why: '诸团认你' }] },
        ok: { text: '领头的听完，往皮袋上踢了一脚土，带着人走了。乌什卡磨完最后一块，把锤子在湖水里涮了涮。', goto: 'a1_10z' },
        fail: {
          text: '他听烦了，把剁肉刀从土里拔了出来。',
          combat: {
            title: '湖边',
            intro: '边区兵冲的是席子上那半堆骨头。',
            enemies: [{ id: 'marcher_veteran', n: 2, name: '边区老兵' }],
            specials: [
              { id: 'ash', name: '扬一把灰', desc: '火堆还热着', check: { skill: 'sleight', dc: 12 },
                success: { text: '一把热灰扬过去，两个人都捂着眼往后退。', applyAll: { cond: 'blinded', turns: 1 } },
                fail: { text: '灰被风吹回来，迷了你自己的眼。', selfDmg: '1d4' } },
            ],
            win: { effects: ['xp 150'], goto: 'a1_10z' },
            lose: { effects: ['rep companies -1', 'world unburied +1'], goto: 'a1_10z' },
          },
        },
      },
      {
        text: '把剩下的头骨护在身后，等乌什卡磨完',
        effects: ['rep companies -1', 'approval ushka +1'],
        result: '你们三个人往席子前头一站。边区兵骂了一刻钟，骂到乌什卡磨完了，没什么可抢的了，才走。',
        goto: 'a1_10z',
      },
    ],
  },

  a1_10z: {
    id: 'a1_10z',
    title: '车上空了一半',
    text: [
      { if: 'flag.korgus_rite', text: '三只皮袋，乌什卡往湖里倒了一袋，往风里扬了一袋，第三袋埋在平地的碎石底下，上面什么也没立。' },
      { if: 'flag.korgus_son', text: '使者扛着门板往北去了。长者郡在三百里外，他说走得到。' },
      { if: 'flag.korgus_spike', text: '麻袋里的头往西去了，北城门上有颗钉子等着它。' },
      { if: 'flag.korgus_sold', text: '瓦丽娜的学徒套了一辆大车，车上蒙着黑布，往湖东岸的营地去了。' },
      { if: 'flag.korgus_lake', text: '湖心的水已经平了，渔民的船都绕着那一片走。' },
      { if: 'flag.korgus_carver', text: '雕骨者的人走远了，盐粒撒了一路，引来一串鸟。' },
      '车上空了一半，拉起来轻得发飘。往后各营各帐问起杜坎森在哪儿，说法有七八种，没一种对得上。{?flag.korgus_son:长者郡的事，外人不知道。|}{?flag.korgus_carver:雕骨者的事，外人也不知道。|}',
      { if: 'flag.korgus_sold && party.ushka', speaker: '乌什卡', text: '第二回我走。我说过了，你记着。' },
      { if: 'party.tan', speaker: '阿坦', text: '一具。一个去向。我记下了。' },
      { if: "origin == 'grudge'", text: '账页还在你怀里：玛瑙之门，1424，记在杜坎森名下。划这一条，得写清楚尸首到了哪儿。' },
    ],
    choices: [
      {
        text: '在账页上签“已验明，已处置”',
        tag: '负怨者兵团',
        if: "origin == 'grudge' && flag.body_verified && !flag.korgus_son && !flag.korgus_carver",
        effects: ['flag entry_struck', 'quest q_o_grudge stage 2', 'rep companies +1'],
        result: '印记你早在城里就验过了。你写了一行，画了押，那一条从账上划了下去。墨还没干，乌什卡在旁边看了一眼，说你们矮人写字跟刻碑一样慢。',
        goto: 'a1_11',
      },
      {
        text: '把尸首的记号对一遍，再签“已验明，已处置”',
        tag: '负怨者兵团',
        if: "origin == 'grudge' && !flag.body_verified && !flag.korgus_son && !flag.korgus_carver",
        check: { skill: 'investigation', dc: 12, mods: [{ if: 'flag.a1_signed_whole', n: 1, why: '出城时签过“完整”' }] },
        ok: { text: '杜坎印记在他左肩胛骨上，你描了一份贴在账页背面，签了字。那一条划掉了。', effects: ['flag entry_struck', 'quest q_o_grudge stage 2'], goto: 'a1_11' },
        fail: { text: '剩下的东西对不上你要的那几处记号。你没敢签，账页上那一条还留着。', effects: ['quest q_o_grudge stage 2'], goto: 'a1_11' },
      },
      {
        text: '账页上那一条，签不出来',
        tag: '负怨者兵团',
        if: "origin == 'grudge' && (flag.korgus_son || flag.korgus_carver)",
        effects: ['quest q_o_grudge stage 2'],
        result: '尸首到了别人手里，“已处置”三个字没法写。你把账页折好收起来，玛瑙之门那一条还在。',
        goto: 'a1_11',
      },
      {
        text: '套车，回城交差',
        goto: 'a1_11',
      },
    ],
  },
  // @@MORE@@
};
