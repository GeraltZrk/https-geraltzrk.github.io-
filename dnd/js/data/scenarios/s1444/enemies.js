// s1444 campaign foes and allies (BIBLE.md §14.1). Format: docs/DATA_GUIDE.md → 敌人.
// Numbers follow the core bestiary (js/data/enemies_core.js), which runs hotter than the DATA_GUIDE table:
// a level-N boss sits near the core boss of the same level.
// Engine notes for writers:
//  - Bosses (traits.boss) and construct/aberration types already ignore divine awe. tide_veteran and
//    bloodgorger's men are not bosses: put noAwe: true on the encounter (§14.1 says they are immune).
//  - The engine has no summons and no "until half health" stop. Summons are written as one-use area attacks;
//    lothane_iii carries about half a level-10 boss's health so the fight ends roughly where the duel would.
const S = (str, dex, con, int, wis, cha) => ({ str, dex, con, int, wis, cha });
const CONSTRUCT = { immune: ['poison', 'psychic'], condImmune: ['poisoned', 'frightened', 'charmed', 'asleep', 'paralyzed'] };

const LIST = [
  // ---- 第一幕
  {
    id: 'underpass_overseer', name: '链头监工', type: 'humanoid', level: 3,
    desc: '嗜血者的老兵，腰上缠着拴地精的主链，链子另一头还拴着四十个人。撤退的号他听见了，他舍不得这串脚夫。',
    hp: 95, ac: 14, init: 0, saves: S(4, 1, 3, -1, 0, 0), xp: 300, ai: 'brute', traits: { boss: true },
    attacks: [
      { name: '链锤', hit: 5, dmg: '1d8+3', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '收链', hit: 5, dmg: '1d6+3', type: 'bludgeoning', apply: { cond: 'restrained', turns: 1, save: { abil: 'str', dc: 12 } }, recharge: 4, text: '{name}一抖手腕，铁链缠上来，把人往他跟前拽。' },
      { name: '甩链', dmg: '2d6', type: 'bludgeoning', aoe: { save: { abil: 'dex', dc: 12, half: true } }, recharge: 5, minRound: 2, weight: 6, text: '{name}抡圆了主链，链上拴着的地精跟着尖叫。' },
    ],
  },
  {
    id: 'death_whisperer', name: '死语者', type: 'humanoid', level: 4,
    desc: '死齿氏族的萨满，脸上抹着白灰，手里提着封蜡的罐子。他跟死人说话，死人不想答也得答。',
    hp: 44, ac: 13, init: 1, saves: S(0, 1, 2, 1, 4, 2), xp: 150, ai: 'caster', resist: ['necrotic'],
    attacks: [
      { name: '骨杖', hit: 5, dmg: '1d6+2', type: 'bludgeoning', weight: 1 },
      { name: '问话', hit: 6, dmg: '2d6+2', type: 'psychic', apply: { cond: 'frightened', turns: 2, save: { abil: 'wis', dc: 13 } }, weight: 3, text: '{name}凑到你耳边，用死人的声音问了一句话。' },
      { name: '起来', heal: '2d8+4', uses: 1, text: '{name}拍开罐子上的蜡封，倒下的那个又撑着地爬了起来。' },
    ],
  },
  {
    id: 'young_basilisk', name: '小石化蜥', type: 'monstrosity', level: 5,
    desc: '试炼山第十道试炼的林子里那头，八条腿，还没长全。它的目光只能让人发僵，石头还变不出来。擦亮的盾晃到它眼睛上，它就看不见了。',
    hp: 62, ac: 15, init: -1, saves: S(3, -1, 3, -4, 1, -2), xp: 250, ai: 'brute', resist: ['poison'],
    attacks: [
      { name: '咬', hit: 7, dmg: '2d6+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '瞪', hit: 7, dmg: '1d6', type: 'psychic', apply: { cond: 'slowed', turns: 2, save: { abil: 'con', dc: 13 } }, recharge: 4, text: '{name}抬起头盯着你。你的腿先僵了。' },
    ],
  },
  {
    id: 'bloodgorger_champion', name: '嗜血者的熊血斗士', type: 'humanoid', level: 5,
    desc: '古尔赞的头号狂战士，喝过熊血。夺斗场上的规矩他比你熟，打到一半会把自己的甲解下来扔了。',
    hp: 200, ac: 14, init: 1, saves: S(5, 1, 4, -1, 1, 0), xp: 750, ai: 'brute', traits: { boss: true }, condImmune: ['frightened'],
    attacks: [
      { name: '熊扑', hit: 8, dmg: '2d8+4', type: 'slashing', multi: 2, weight: 3, text: '{name}整个人扑了上来，两把斧子一前一后。' },
      { name: '横扫', dmg: '3d8', type: 'slashing', aoe: { save: { abil: 'dex', dc: 14, half: true } }, recharge: 5, minRound: 2, weight: 6 },
      { name: '喝血', buff: { cond: 'reckless', turns: 3 }, uses: 1, minRound: 3, text: '{name}舔了舔斧刃上的血，把护心镜扯下来扔了。' },
    ],
  },

  // ---- 第二幕
  {
    id: 'black_orc_raider', name: '黑皮掠袭者', type: 'humanoid', level: 5,
    desc: '没上过地面的兽人，黑曜石的矛头，一路上一声不出。他们的规矩是先杀对面最大的那个。',
    hp: 60, ac: 15, init: 2, saves: S(4, 2, 3, 0, 1, -1), xp: 250, ai: 'cunning',
    attacks: [
      { name: '黑曜石矛', hit: 7, dmg: '2d6+4', type: 'piercing', multi: 2, weight: 3 },
      { name: '从暗处扎', hit: 8, dmg: '3d6+4', type: 'piercing', recharge: 5, text: '{name}从没有灯的那一边出来了。' },
    ],
  },
  {
    id: 'black_orc_warcaller', name: '黑皮战号手', type: 'humanoid', level: 7,
    desc: '吹一支用深渊鸦腿骨做的号。号一响，黑处就有东西往这边爬，有时候是钩爪怪。',
    hp: 300, ac: 16, init: 1, saves: S(5, 1, 5, 0, 2, 3), xp: 1650, ai: 'brute', traits: { boss: true }, condImmune: ['frightened'],
    attacks: [
      { name: '骨柄战斧', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '号', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 2, text: '{name}吹响了骨号。闸口两边的石头都在嗡。' },
      { name: '放钩爪怪', dmg: '4d6', type: 'slashing', aoe: { save: { abil: 'dex', dc: 15, half: true } }, uses: 1, minRound: 2, weight: 9, text: '黑处有东西应了号声。一头钩爪怪从顶上落下来，两只钩子先到。' },
    ],
  },
  {
    id: 'grudgebearer_vet', name: '负怨者老兵', type: 'humanoid', level: 5,
    desc: '兵团里各有旧账的老兵。打起来背靠背，嘴里报的是自家那一条的年份。',
    hp: 62, ac: 17, init: 0, saves: S(4, 0, 4, 0, 1, 0), xp: 250, ai: 'brute', resist: ['poison'],
    attacks: [
      { name: '战锤', hit: 7, dmg: '2d6+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '记着', hit: 7, dmg: '2d8+4', type: 'bludgeoning', recharge: 4, text: '{name}挨了一下，没出声，下一锤砸得更狠。' },
    ],
  },

  // ---- 第三幕
  {
    id: 'aldresian_knight', name: '阿德蕾西娅骑士', type: 'humanoid', level: 7,
    desc: '以剑为法器的法师骑士。剑上刻着咒文，出手点到为止，点得很准。',
    hp: 100, ac: 17, init: 2, saves: S(3, 2, 3, 3, 2, 2), xp: 550, ai: 'cunning',
    attacks: [
      { name: '剑上咒', hit: 8, dmg: '2d8+4', type: 'slashing', multi: 2, extra: { dmg: '1d6', type: 'force' }, weight: 3 },
      { name: '回剑', buff: { cond: 'shielded', turns: 2 }, uses: 2, text: '{name}把剑横在身前，剑身上的字亮了一下。' },
    ],
  },
  {
    id: 'magister_militant', name: '魔导院武卫', type: 'humanoid', level: 6,
    desc: '立了誓约的非法师，专门对付施法的人。胸前挂着誓约信物，一块刻了字的铅牌。信物碎了，他们会愣一下。',
    hp: 76, ac: 16, init: 1, saves: S(3, 1, 3, 1, 4, 1), xp: 350, ai: 'cunning',
    attacks: [
      { name: '包铁短棍', hit: 7, dmg: '2d6+4', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '禁咒令', hit: 7, dmg: '1d6', type: 'force', apply: { cond: 'hexed', turns: 2, save: { abil: 'int', dc: 14 } }, recharge: 4, text: '{name}念了一句誓词，你指尖的法术散了一半。' },
    ],
  },
  {
    id: 'daras', name: '达拉斯', type: 'humanoid', level: 7,
    desc: '话少，针线活好，第一幕的寿衣都是他缝的。他只冲一个人去。头一刀之后他只招架。',
    hp: 90, ac: 15, init: 4, saves: S(1, 4, 2, 1, 2, 0), xp: 550, ai: 'cunning',
    attacks: [
      { name: '只这一刀', hit: 10, dmg: '4d8+4', type: 'piercing', uses: 1, weight: 20, text: '{name}从人堆里出来，刀是窄刃的，一句话也没有。' },
      { name: '招架反刺', hit: 8, dmg: '1d8+4', type: 'piercing', weight: 3 },
    ],
  },
  {
    id: 'lothane_iii', name: '洛萨恩三世', type: 'humanoid', level: 10,
    desc: '使威克斯大剑的战斗法师，五十一岁。动兵之前先约对方单挑，比到见血为止。他当年就是用一道法术了结埃尔兰的。',
    hp: 220, ac: 18, init: 2, saves: S(5, 2, 4, 4, 3, 4), xp: 3600, ai: 'brute', traits: { boss: true }, condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '三卫的起手', hit: 11, dmg: '2d10+6', type: 'slashing', multi: 2, weight: 3, text: '{name}双手握剑，先劈后挑。' },
      { name: '雷鸣斩', dmg: '4d8', type: 'thunder', aoe: { save: { abil: 'con', dc: 17, half: true } }, recharge: 5, minRound: 2, weight: 6 },
      { name: '最后一股劲', hit: 11, dmg: '6d10', type: 'force', recharge: 6, minRound: 3, weight: 9, text: '{name}松开一只手，掌心里亮起来的东西不是剑。' },
    ],
  },
  {
    id: 'black_hound_captain', name: '黑犬队长', type: 'humanoid', level: 8,
    desc: '安本科斯特之劫里发过财的佣兵头，按人头结账。他的人围上来的时候先看他的手指头指着谁。',
    hp: 380, ac: 17, init: 2, saves: S(4, 3, 4, 1, 2, 2), xp: 2100, ai: 'cunning', traits: { boss: true },
    attacks: [
      { name: '马刀', hit: 10, dmg: '2d8+5', type: 'slashing', multi: 3, weight: 3 },
      { name: '围上去', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1, text: '{name}朝一个人抬了抬下巴。他的人全转了过去。' },
      { name: '灭口的弩', hit: 10, dmg: '4d10', type: 'piercing', recharge: 5, weight: 6, text: '{name}从斗篷底下端出一把上好弦的重弩。' },
      { name: '齐射', dmg: '3d10', type: 'piercing', aoe: { save: { abil: 'dex', dc: 16, half: true } }, recharge: 6, minRound: 2, weight: 6 },
    ],
  },

  // ---- 第四幕
  {
    id: 'bloodfeeder', name: '饮血者', type: 'aberration', level: 7,
    desc: '犯了血律的奎内赫人变成的东西。四肢着地，没有话，只认血。身上的树脂纹一道一道的，像树皮。',
    hp: 100, ac: 15, init: 3, saves: S(4, 3, 4, -2, 1, -2), xp: 550, ai: 'brute', resist: ['necrotic'],
    attacks: [
      { name: '扑咬', hit: 8, dmg: '2d8+4', type: 'piercing', multi: 2, lifesteal: true, weight: 3, text: '{name}扑上来，咬住了就不松口。' },
    ],
  },
  {
    id: 'bloodfeeder_matriarch', name: '老饮血者', type: 'aberration', level: 9,
    desc: '变得最久的一个，树脂纹已经长进了皮里。有人念血律的头三条，她会停一停，像在想自己从前是谁。',
    hp: 400, ac: 17, init: 2, saves: S(5, 3, 5, -1, 2, 0), xp: 3000, ai: 'brute', traits: { boss: true }, resist: ['necrotic'],
    attacks: [
      { name: '撕咬', hit: 10, dmg: '2d10+5', type: 'piercing', multi: 3, lifesteal: true, weight: 3 },
      { name: '唤群', dmg: '4d6', type: 'slashing', aoe: { save: { abil: 'dex', dc: 16, half: true } }, uses: 1, minRound: 2, weight: 9, text: '{name}仰起头叫了一声。林子里又爬出来两只，先扑的是离她最近的人。' },
      { name: '血雾', dmg: '4d8', type: 'necrotic', aoe: { save: { abil: 'con', dc: 16, half: true } }, apply: { cond: 'blinded', turns: 1 }, recharge: 5, minRound: 2, weight: 6, text: '{name}身上的树脂纹裂开了，喷出一片红雾。' },
    ],
  },
  {
    id: 'stone_votary', name: '守誓石像', type: 'construct', level: 8, ...CONSTRUCT,
    desc: '壁画神殿门口的石像，石头和法术，里头没有机括。它用一种没人会的话问你一句，答不上来就挨一下。',
    hp: 115, ac: 18, init: -1, saves: S(5, -1, 5, 0, 2, 0), xp: 700, ai: 'brute', resist: ['slashing', 'piercing'],
    attacks: [
      { name: '石拳', hit: 9, dmg: '2d8+5', type: 'bludgeoning', multi: 2, weight: 3 },
      { name: '问话', dmg: '3d8', type: 'force', aoe: { save: { abil: 'int', dc: 15, half: true } }, recharge: 5, weight: 6, text: '{name}开口问了一句。没有人听得懂。' },
    ],
  },
  {
    id: 'mural_warden', name: '守门的', type: 'construct', level: 10, ...CONSTRUCT,
    desc: '三尊石像里最大的一尊，一条胳膊是后补的，补的人手艺差。它见到断权杖就会停手。',
    hp: 460, ac: 19, init: -1, saves: S(6, -1, 6, 0, 3, 0), xp: 3600, ai: 'brute', traits: { boss: true }, resist: ['slashing', 'piercing'],
    attacks: [
      { name: '石臂', hit: 11, dmg: '2d10+6', type: 'bludgeoning', multi: 3, weight: 3 },
      { name: '天幕', dmg: '4d10', type: 'force', aoe: { save: { abil: 'str', dc: 17, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 5, minRound: 2, weight: 6, text: '{name}把那条后补的胳膊举过头顶。整间厅的顶压了下来。' },
      { name: '一臂挡', buff: { cond: 'shielded', turns: 2 }, uses: 2, text: '{name}抬起完好的那条胳膊挡在身前。' },
    ],
  },

  // ---- 终章
  {
    id: 'morningstar_bravo', name: '晨星会的刀手', type: 'humanoid', level: 8,
    desc: '世家养的打手，过过血门礼的。同伴倒下一个，他就往前多站一步。',
    hp: 110, ac: 16, init: 3, saves: S(2, 4, 3, 1, 1, 1), xp: 700, ai: 'cunning',
    attacks: [
      { name: '短剑', hit: 9, dmg: '2d8+5', type: 'piercing', multi: 2, weight: 3 },
      { name: '下黑手', hit: 9, dmg: '3d8+5', type: 'piercing', apply: { cond: 'bleeding', turns: 2 }, recharge: 5 },
    ],
  },
  {
    id: 'morningstar_elder', name: '晨星会的元老', type: 'humanoid', level: 10,
    desc: '元老会里夜里另拜一位的那个。袖口有鸦羽。当众喊出他在元老会里的席次，他的人会散一半。',
    hp: 420, ac: 17, init: 2, saves: S(1, 2, 3, 5, 4, 5), xp: 3600, ai: 'caster', traits: { boss: true }, resist: ['necrotic'], condImmune: ['charmed', 'frightened'],
    attacks: [
      { name: '鸦头杖', hit: 11, dmg: '2d10+5', type: 'necrotic', multi: 2, weight: 3 },
      { name: '鸦王的回音', dmg: '5d8', type: 'necrotic', aoe: { save: { abil: 'dex', dc: 17, half: true } }, recharge: 5, minRound: 2, weight: 6, text: '{name}一抖袖子，一团黑羽扑了出来，碰到哪儿哪儿冒烟。' },
      { name: '开价', hit: 11, dmg: '1d6', type: 'psychic', apply: { cond: 'charmed', turns: 1, save: { abil: 'wis', dc: 17 } }, recharge: 4, text: '“你要多少？”{name}问得很客气。' },
    ],
  },
  {
    id: 'tide_veteran', name: '二次绿潮的老兵', type: 'humanoid', level: 8,
    desc: '二十八年前跟过杜坎森，如今跟他儿子。他们见过刀枪不入的人，最后死在卖咸鱼的摊子边上。',
    hp: 120, ac: 16, init: 1, saves: S(5, 1, 4, 0, 2, 0), xp: 700, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '劈斧', hit: 9, dmg: '2d8+5', type: 'slashing', multi: 2, weight: 3 },
      { name: '不退', hit: 9, dmg: '3d8+5', type: 'slashing', recharge: 5, text: '{name}挨了那一下还站着，斧子照样落了下来。' },
    ],
  },
  {
    id: 'clan_warcaller', name: '氏族的先锋酋长', type: 'humanoid', level: 10,
    desc: '古尔赞的前锋，碎剑者氏族的。他专打对面的兵器，打断了就笑。',
    hp: 440, ac: 18, init: 1, saves: S(6, 1, 5, 0, 2, 3), xp: 3600, ai: 'brute', traits: { boss: true }, condImmune: ['frightened'],
    attacks: [
      { name: '碎剑', hit: 11, dmg: '2d10+6', type: 'bludgeoning', multi: 2, apply: { cond: 'sundered', turns: 1, save: { abil: 'str', dc: 17 } }, weight: 3 },
      { name: '冲阵', dmg: '4d8', type: 'bludgeoning', aoe: { save: { abil: 'str', dc: 17, half: true } }, apply: { cond: 'prone', turns: 1 }, recharge: 5, minRound: 2, weight: 6 },
      { name: '聚', heal: '3d10+10', uses: 1, text: '{name}把断链举过头顶喊了一声。他身后的人都喊了回来。' },
      { name: '聚拢', buff: { cond: 'emboldened', turns: 2, all: true }, uses: 1 },
    ],
  },
  {
    id: 'gurzan', name: '古尔赞·熊心', type: 'humanoid', level: 11,
    desc: '一只眼，半条胳膊，肩上披着灰吻的皮，四十八岁。他来看你流不流血。打输了是断手而逃，不是战死。',
    hp: 520, ac: 18, init: 2, saves: S(6, 2, 6, 1, 3, 4), xp: 4500, ai: 'brute', traits: { boss: true, regen: 8 }, condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '熊爪斧', hit: 12, dmg: '2d10+7', type: 'slashing', multi: 3, weight: 3 },
      { name: '我父亲的日子', dmg: '4d10', type: 'psychic', aoe: { save: { abil: 'wis', dc: 18, half: true } }, apply: { cond: 'frightened', turns: 2 }, recharge: 5, minRound: 2, weight: 6, text: '“今天是我父亲的日子。”{name}说完这句，他身后的人一起敲盾。' },
      { name: '熊心', buff: { cond: 'emboldened', turns: 3 }, uses: 1, minRound: 3 },
    ],
  },
  {
    id: 'laurens', name: '洛朗·西尔·普拉斯', type: 'humanoid', level: 11,
    desc: '剑之誓约的头领，法师骑士，腰上挂着一排魂罐。他说他跟你们是同行，只是多走了一步。',
    hp: 480, ac: 18, init: 2, saves: S(3, 2, 4, 6, 4, 3), xp: 4500, ai: 'caster', traits: { boss: true }, resist: ['necrotic', 'psychic'], condImmune: ['frightened', 'charmed'],
    attacks: [
      { name: '誓约之剑', hit: 12, dmg: '2d10+6', type: 'slashing', multi: 2, weight: 3 },
      { name: '撕开', hit: 12, dmg: '4d10', type: 'psychic', apply: { cond: 'dazed', turns: 1, save: { abil: 'int', dc: 18 } }, recharge: 4, weight: 5, text: '{name}伸手按住你的额头。你听见自己说了一句实话。' },
      { name: '开罐', dmg: '6d8', type: 'necrotic', aoe: { save: { abil: 'con', dc: 18, half: true } }, uses: 2, minRound: 2, weight: 7, text: '{name}拍开一只罐子的封蜡。里头的东西吼着出来了。' },
    ],
  },
  {
    id: 'arosha', name: '阿罗莎·伐橡者', type: 'humanoid', level: 10,
    desc: '混眼的酋长，科琳之环的旧人。她砍大个子的时候下手最重。',
    hp: 150, ac: 17, init: 1, saves: S(6, 1, 5, 0, 3, 2), xp: 1200, ai: 'brute',
    attacks: [
      { name: '伐橡斧', hit: 11, dmg: '2d10+6', type: 'slashing', multi: 2, weight: 3 },
      { name: '伐橡', hit: 11, dmg: '4d10+6', type: 'slashing', recharge: 4, text: '{name}双手抡斧，照着最粗的那根砍。' },
    ],
  },
  {
    id: 'bluetusk', name: '洛萨恩·蓝牙', type: 'humanoid', level: 10,
    desc: '四十七岁的半兽人，科琳塔尔的大团长，左边獠牙上系着一截蓝布。当对手的时候，他只打到你倒地为止。',
    hp: 160, ac: 19, init: 1, saves: S(5, 1, 5, 1, 3, 3), xp: 1200, ai: 'brute', condImmune: ['frightened'],
    attacks: [
      { name: '长剑', hit: 11, dmg: '2d8+6', type: 'slashing', multi: 2, weight: 3 },
      { name: '盾在前', buff: { cond: 'shielded', turns: 2, all: true }, uses: 2, text: '{name}把盾往前一顶，身边的人都缩到了盾后头。' },
      { name: '盾击', hit: 11, dmg: '2d6+6', type: 'bludgeoning', apply: { cond: 'prone', turns: 1, save: { abil: 'str', dc: 17 } }, recharge: 5 },
    ],
  },
];

export const ENEMIES = Object.fromEntries(LIST.map((e) => [e.id, e]));
