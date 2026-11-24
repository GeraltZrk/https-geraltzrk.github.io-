// Class and subclass features of the half-casters: paladin, ranger, artificer. Format: docs/DATA_GUIDE.md.
// Their spells come from abilities_spells.js (smites, hunter's mark, field repair …); this file only holds
// what is theirs alone, plus one subclass spell (paladin_aldresian_arc).
// - Save DCs here use the class's spell DC (8 + proficiency + casting ability). Where a formula says `mod`
//   on a non-spell feature, `dcAbil` picks the ability (paladin: cha, griffon: wis; artificer defaults to int).
// - Limited-use features spend class resources, never `cost.uses`:
//     paladin   lay 圣疗 (long rest), oath 引导神力 (short rest)
//     ranger    focus 猎技 (short rest)
//     artificer gadgets 备料 (short rest), charge 蓄能 (short rest, from level 3)
// - `en` / `enTerms` carry English source names of Anbennar terms for the translation pass; the engine ignores them.

const P = (id, name, desc, passives, extra = {}) => ({ id, name, kind: 'feature', desc, passives, ...extra });

export const ABILITIES_HALF = {
  // =========================================================================
  // 圣武士 Paladin
  // =========================================================================
  paladin_lay_on_hands: {
    id: 'paladin_lay_on_hands', name: '圣疗', en: 'Lay on Hands', kind: 'feature', target: 'ally', dcAbil: 'cha', ai: 'heal',
    heal: '1d8+lvl+mod', revive: true, cleanse: ['poisoned'], cost: { res: 'lay', n: 1 },
    desc: '手按在伤口上。一名同伴恢复 1d8+等级+魅力调整值 点生命，顺带解毒；倒地的人也能救起来。对自己也能用。花 1 次圣疗，长休恢复。',
  },
  paladin_divine_sense: P('paladin_divine_sense', '神圣感知', '亡灵和邪魔离近了，你的圣徽会发烫。洞悉和宗教检定 +2。', { skill: { insight: 2, religion: 2 } }, { en: 'Divine Sense' }),
  paladin_extra_attack: P('paladin_extra_attack', '额外攻击', '攻击动作可以打两下。', { extraAttack: 1 }),
  paladin_aura_protection: P('paladin_aura_protection', '守护灵光', '誓言在身，邪术不容易沾上。你的所有豁免 +2。', { saveBonus: 2 }, { en: 'Aura of Protection' }),
  paladin_divine_health: P('paladin_divine_health', '神圣体魄', '瘟疫和尸毒都绕着你走。免疫中毒，黯蚀伤害减半。', { condImmune: ['poisoned'], resist: ['necrotic'] }, { en: 'Divine Health' }),
  paladin_aura_courage: {
    id: 'paladin_aura_courage', name: '勇气灵光', en: 'Aura of Courage', kind: 'feature', quick: true, target: 'allies',
    apply: { cond: 'steadfast', turns: 3 }, cost: { res: 'oath', n: 1 }, passives: { condImmune: ['frightened'] },
    desc: '你自己免疫恐慌，这一条不用花东西。附赠动作：把这口胆气借给全队，所有同伴（包括你）「坚定」3 回合：豁免 +2，免疫恐慌。花 1 次引导神力。',
  },
  paladin_radiant_strikes: P('paladin_radiant_strikes', '光耀打击', '剑刃上常年带着一层光。武器伤害 +2。', { dmg: 2 }, { en: 'Radiant Strikes' }),
  paladin_cleansing_touch: {
    id: 'paladin_cleansing_touch', name: '净化之触', en: 'Cleansing Touch', kind: 'feature', quick: true, target: 'ally', dcAbil: 'cha',
    cleanse: 'all', tempHp: 'lvl+mod', cost: { res: 'lay', n: 1 },
    desc: '附赠动作。手一碰，一名同伴身上的负面状态全部解除，并获得 等级+魅力调整值 点临时生命。花 1 次圣疗。',
  },

  // —— 咒刃骑士（阿德蕾西娅骑士团）
  paladin_aldresian_drumbeat: {
    id: 'paladin_aldresian_drumbeat', name: '擂鼓式', en: 'Aldresian Diranbe (drumbeat)', kind: 'maneuver', target: 'enemy', attack: 'weapon', hits: 3,
    cost: { res: 'oath', n: 1 },
    desc: '阿德蕾西娅一派的剑路像擂鼓：一下试，两下跟。对同一个敌人连做三次武器攻击，代替整个攻击动作。花 1 次引导神力。',
    enTerms: { '阿德蕾西娅': 'Orda Aldresia' },
  },
  paladin_aldresian_arc: {
    id: 'paladin_aldresian_arc', name: '剑弧', en: 'Blade Arc (Diranbe)', kind: 'spell', level: 2, school: 'evocation', lists: ['paladin'],
    target: 'enemies', maxTargets: 3, attack: 'weapon', weaponExtra: '1d8', extraType: 'force', cost: { slot: 2 },
    desc: '咒是从剑上出去的。一剑带出一道弧光，对至多 3 个敌人各做一次武器攻击，命中额外造成 1d8 力场伤害。代替整个攻击动作，耗一个 2 环法术位。',
  },
  paladin_aldresian_form_zero: P('paladin_aldresian_form_zero', '零式', '七式之外传说还有一个“零式”，团里的剑咏者一辈子都在找它。你摸到了一点边。攻击骰掷出 19 或 20 都算重击，护甲等级 +1，法术 DC +1。', { critRange: 19, ac: 1, spellDc: 1 }, { en: 'Form 0', enTerms: { '剑咏者': 'Bladesingers (of the Orda Aldresia)', '七式': 'Forms I–VII of Aldresian Diranbe' } }),

  // —— 伐恶骑士（“正直者”德万；科琳塔尔）
  paladin_crusader_creed: P('paladin_crusader_creed', '信条', '后来科琳教把这句话写进了信条：善而不行，等于没有。先攻 +2，威吓检定 +2。', { init: 2, skill: { intimidation: 2 } }, { en: 'The Corinite Creed', enTerms: { '科琳教': 'Corinite' } }),
  paladin_crusader_abjure: {
    id: 'paladin_crusader_abjure', name: '斥邪', en: 'Abjure the Wicked', kind: 'feature', target: 'enemies', maxTargets: 3, ai: 'control',
    save: { abil: 'wis' }, apply: { cond: 'frightened', turns: 3 }, cost: { res: 'oath', n: 1 },
    desc: '举起圣徽，把誓言报一遍。至多 3 个敌人做感知豁免（法术 DC）。失败则恐慌，攻击有劣势，最多 3 回合，每回合结束可再豁免。花 1 次引导神力。',
  },
  paladin_crusader_enmity: {
    id: 'paladin_crusader_enmity', name: '誓敌', en: 'Vow of Enmity', kind: 'feature', quick: true, target: 'enemy',
    apply: { cond: 'exposed', turns: 2 }, cost: { res: 'oath', n: 1 },
    desc: '附赠动作。指着一个敌人立誓：今天你和它只走一个。目标「破绽」2 回合：谁打它都有优势。没有豁免。花 1 次引导神力。',
  },
  paladin_crusader_all_in: {
    id: 'paladin_crusader_all_in', name: '舍身一击', en: 'All-in Strike', kind: 'maneuver', target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '3d8+lvl', extraType: 'radiant', cost: { res: 'oath', n: 2 },
    desc: '不留后手的一剑。一次有优势的武器攻击，命中额外造成 3d8+等级 光耀伤害，代替整个攻击动作。花 2 次引导神力。',
  },

  // =========================================================================
  // 游侠 Ranger
  // =========================================================================
  ranger_aim: {
    id: 'ranger_aim', name: '瞄准', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'focused', turns: 1 }, cost: { res: 'focus', n: 1 },
    desc: '附赠动作。屏住气，看准了再放。本回合你的攻击有优势。花 1 点猎技。',
  },
  ranger_wilderness: P('ranger_wilderness', '野外行家', '脚印、断枝、粪便，都是字。求生和察觉检定 +2。', { skill: { survival: 2, perception: 2 } }),
  ranger_marksman: P('ranger_marksman', '准头', '弓也好，枪也好，刀也好，练的是同一双眼。武器命中 +1。', { hit: 1 }),
  ranger_extra_attack: P('ranger_extra_attack', '额外攻击', '攻击动作可以打两下。', { extraAttack: 1 }),
  ranger_volley: {
    id: 'ranger_volley', name: '连珠箭', kind: 'maneuver', target: 'enemies', maxTargets: 3, attack: 'weapon',
    cost: { res: 'focus', n: 1 },
    desc: '一口气放三支，手里是刀就是三刀。对至多 3 个敌人各做一次武器攻击，代替整个攻击动作。花 1 点猎技。',
  },
  ranger_land_stride: P('ranger_land_stride', '如履平地', '荆棘、泥沼、蛛网都绊不住你。先攻 +2，免疫束缚。', { init: 2, condImmune: ['restrained'] }),
  ranger_evasive: {
    id: 'ranger_evasive', name: '闪身', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'blurred', turns: 2 }, cost: { res: 'focus', n: 1 },
    desc: '附赠动作。借一棵树、一块石头挪个位置。到你下回合结束前，敌人打你有劣势。花 1 点猎技。',
  },
  ranger_deadeye: P('ranger_deadeye', '老猎手', '什么东西哪儿是软的，你都剥过皮看过。武器伤害 +2。', { dmg: 2 }),
  ranger_slayer: P('ranger_slayer', '一箭封喉', '攻击骰掷出 19 或 20 都算重击，武器命中 +1。', { critRange: 19, hit: 1 }),

  // —— 法拉赫的猎手
  ranger_falah_cloak: P('ranger_falah_cloak', '绿斗篷', '法拉赫的祭司人人一件绿斗篷，进了林子就找不着。隐匿和自然检定 +2。', { skill: { stealth: 2, nature: 2 } }, { en: 'Green cloak of Falah', enTerms: { '法拉赫': 'Falah' } }),
  ranger_falah_bane_arrow: {
    id: 'ranger_falah_bane_arrow', name: '克制箭', en: "Temple of Falah's armory", kind: 'maneuver', target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '1d8+lvl', cost: { res: 'focus', n: 1 },
    desc: '神殿军械库里领的箭：银头的，带倒钩的，淬过药的，什么怪物配什么。一次有优势的武器攻击，命中额外造成 1d8+等级 伤害，代替整个攻击动作。花 1 点猎技。',
  },
  ranger_falah_first_hunt: P('ranger_falah_first_hunt', '首猎之礼', '入门的最后一关：只带一张弓、一把刀进荒野，带一头像样的猎物回来。你回来了。每级生命 +1，所有豁免 +1。', { hpPerLevel: 1, saveBonus: 1 }, { en: 'Rite of the First Hunt' }),
  ranger_falah_grand_hunt: {
    id: 'ranger_falah_grand_hunt', name: '大围猎', en: 'The Grand Hunt', kind: 'feature', quick: true, target: 'allies', ai: 'buff',
    apply: { cond: 'focused', turns: 2 }, cost: { res: 'focus', n: 2 },
    desc: '附赠动作。按节庆围猎的规矩分派位置：谁赶，谁堵，谁放箭。所有同伴（包括你）的攻击有优势，持续 2 回合；你自己的头一回合就是眼下这个。花 2 点猎技。',
  },

  // —— 狮鹫骑手（马尔霍德）
  ranger_griffon_bond: P('ranger_griffon_bond', '认主', '狮鹫一辈子只认一个人。它盯着的方向，通常就是有事的方向。驯兽检定 +3，先攻 +1。', { skill: { animal: 3 }, init: 1 }, { en: 'Griffon bond', enTerms: { '狮鹫': 'Griffon' } }),
  ranger_griffon_strike: {
    id: 'ranger_griffon_strike', name: '狮鹫扑击', en: 'Griffon strike', kind: 'maneuver', quick: true, target: 'enemy', attack: 'spell', dcAbil: 'wis',
    dmg: '1d8+mod', dmgByLevel: { 5: '2d6+mod', 11: '3d6+mod' }, dmgType: 'slashing',
    desc: '附赠动作。打个唿哨，它就从上头下来。命中加值是熟练+感知；造成 1d8+感知调整值 挥砍伤害，5 级起 2d6，11 级起 3d6。不花猎技。',
  },
  ranger_griffon_screech: {
    id: 'ranger_griffon_screech', name: '俯冲尖啸', en: 'Ironclaw screech', kind: 'feature', quick: true, target: 'enemies', dcAbil: 'wis',
    save: { abil: 'wis' }, apply: { cond: 'frightened', turns: 2 }, cost: { res: 'focus', n: 1 },
    desc: '附赠动作。铁爪种的狮鹫扎进人堆之前会先叫一声，马尔霍德的敌人都认得。所有敌人做感知豁免（DC 8+熟练+感知）。失败则恐慌，攻击有劣势，最多 2 回合，每回合结束可再豁免。花 1 点猎技。',
    enTerms: { '铁爪种': 'Ironclaw Griffon', '马尔霍德': 'Marrhold' },
  },
  ranger_griffon_dive: {
    id: 'ranger_griffon_dive', name: '俯冲', en: 'Griffon dive', kind: 'maneuver', target: 'enemy', attack: 'spell', dcAbil: 'wis', advantage: true,
    dmg: '6d8+mod', dmgType: 'slashing', apply: { cond: 'prone', turns: 1, save: { abil: 'str' } }, cost: { res: 'focus', n: 2 },
    desc: '你压低身子，它收起翅膀。一次有优势的攻击（熟练+感知），命中造成 6d8+感知调整值 挥砍伤害。目标力量豁免（DC 8+熟练+感知）失败则倒地 1 回合。代替整个攻击动作。花 2 点猎技。',
  },

  // =========================================================================
  // 奇械师 Artificer
  // =========================================================================
  artificer_tinkering: P('artificer_tinkering', '手艺人', '拆过的东西比见过的多。调查和巧手检定 +2。', { skill: { investigation: 2, sleight: 2 } }),
  artificer_bomb: {
    id: 'artificer_bomb', name: '爆燃瓶', en: 'Alchemical bomb', kind: 'feature', target: 'enemies', maxTargets: 3,
    save: { abil: 'dex', half: true }, dmg: '2d6', dmgByLevel: { 5: '3d6', 9: '4d6', 11: '5d6' }, dmgType: 'fire', cost: { res: 'gadgets', n: 1 },
    desc: '玻璃瓶加一截引信，侏儒炼金术里最老的方子。至多 3 个敌人做敏捷豁免（法术 DC）。失败受 2d6 火焰伤害，成功减半。5 级 3d6，9 级 4d6，11 级 5d6。花 1 份备料。',
  },
  artificer_tincture: {
    id: 'artificer_tincture', name: '急救药剂', en: 'Remedial Tincture', kind: 'feature', target: 'ally', ai: 'heal',
    heal: '2d4+mod', healByLevel: { 5: '4d4+mod', 9: '6d4+mod' }, revive: true, cost: { res: 'gadgets', n: 1 },
    desc: '自己配的，味道像铁锈兑醋。一名同伴恢复 2d4+智力调整值 点生命，倒地的人也能灌下去。5 级 4d4，9 级 6d4。花 1 份备料。',
  },
  artificer_calibration: P('artificer_calibration', '校准', '准星、配重、杖芯，都照自己的手调过。法术攻击和武器命中各 +1。', { spellHit: 1, hit: 1 }),
  artificer_flashbang: {
    id: 'artificer_flashbang', name: '闪光弹', en: 'Flash charge', kind: 'feature', target: 'enemies', maxTargets: 3, ai: 'control',
    save: { abil: 'con' }, apply: { cond: 'blinded', turns: 1 }, cost: { res: 'gadgets', n: 1 },
    desc: '镁粉里掺一点达姆斯塔尔碎屑。至多 3 个敌人做体质豁免（法术 DC）。失败则目盲到它下回合结束：攻击有劣势，打它有优势。花 1 份备料。',
    enTerms: { '达姆斯塔尔': 'Damestear' },
  },
  artificer_genius: P('artificer_genius', '灵光一闪', '脑子转得比咒快。所有豁免 +1，奥秘检定 +2。', { saveBonus: 1, skill: { arcana: 2 } }, { en: 'Flash of Genius' }),
  artificer_veteran: P('artificer_veteran', '熟能生巧', '同一张图纸做到第一百遍，误差就没了。法术 DC +1，法术每次造成伤害时 +2。', { spellDc: 1, spellDmg: 2 }),
  artificer_masterwork: P('artificer_masterwork', '压箱底', '身上每一件东西都是自己做的，没有一件是头一版。护甲等级 +1，法术攻击 +1。', { ac: 1, spellHit: 1 }),

  // —— 符文匠（矮人）
  artificer_runesmith_armor: P('artificer_runesmith_armor', '符文甲', '甲片内侧刻着一行护身的符文，是你自己的手笔。护甲等级 +1，每级生命 +1。', { ac: 1, hpPerLevel: 1 }, { en: 'Runic armor', enTerms: { '符文': 'Dwarven Runic Magic' } }),
  artificer_runesmith_ward: {
    id: 'artificer_runesmith_ward', name: '护身符文', en: 'Warding rune', kind: 'feature', quick: true, target: 'ally',
    tempHp: 'lvl+mod', apply: { cond: 'shielded', turns: 3 }, cost: { res: 'charge', n: 1 },
    desc: '附赠动作。点亮预先刻在同伴甲上的符文。他获得 等级+智力调整值 点临时生命，并「护盾」3 回合：护甲等级 +2。花 1 点蓄能。',
  },
  artificer_runesmith_fire: {
    id: 'artificer_runesmith_fire', name: '火字符', en: 'Rune of fire', kind: 'feature', quick: true, target: 'allies', ai: 'buff',
    apply: { cond: 'empowered', turns: 3 }, cost: { res: 'charge', n: 2 },
    desc: '附赠动作。矮人说“火”是最好写的一个字。全队兵器上的火字一起亮：所有同伴（包括你）武器伤害 +3，持续 3 回合。花 2 点蓄能。',
  },
  artificer_runesmith_stone: {
    id: 'artificer_runesmith_stone', name: '石字符', en: 'Rune of stone', kind: 'feature', quick: true, target: 'ally',
    apply: { cond: 'stoneskin', turns: 3 }, cost: { res: 'charge', n: 2 },
    desc: '附赠动作。山堡大门上守了几千年的就是这一类字。一名同伴「石肤」3 回合：挥砍、穿刺、钝击伤害减半。花 2 点蓄能。',
    enTerms: { '山堡': 'Dwarven hold' },
  },

  // —— 发明家（侏儒机巧）
  artificer_inventor_turret: {
    id: 'artificer_inventor_turret', name: '机关炮台', en: 'Portable Turret', kind: 'feature', quick: true, target: 'enemy', attack: 'spell',
    dmg: '2d6+mod', dmgByLevel: { 5: '2d8+mod', 9: '3d8+mod' }, dmgType: 'piercing', cost: { res: 'charge', n: 1 },
    desc: '附赠动作。背上卸下来的铁匣子，支开就是一座会转的弩炮；到了 1800 年代，里头换成了枪管。法术攻击，命中造成 2d6+智力调整值 穿刺伤害，5 级 2d8，9 级 3d8。每开一炮花 1 点蓄能。',
  },
  artificer_inventor_sparkdrive: {
    id: 'artificer_inventor_sparkdrive', name: '火驱枪', en: 'Sparkdrive Rifle', kind: 'feature', target: 'enemy', attack: 'spell', advantage: true,
    dmg: '4d8', dmgByLevel: { 9: '5d8', 11: '6d8' }, dmgType: 'lightning', cost: { res: 'charge', n: 1 },
    desc: '摇柄蓄电，扳机放电，一道闪电指哪打哪。法术攻击带优势，命中造成 4d8 闪电伤害，9 级 5d8，11 级 6d8。花 1 点蓄能。尼姆斯科德人管用这东西的连队叫“摇把连”。',
    enTerms: { '尼姆斯科德': 'Nimscodd', '摇把连': 'Cranker Companies' },
  },
  artificer_inventor_overload: {
    id: 'artificer_inventor_overload', name: '过载', en: 'Damestear overload', kind: 'feature', target: 'enemies',
    save: { abil: 'dex', half: true }, dmg: '8d6', dmgType: 'lightning', cost: { res: 'charge', n: 3 },
    desc: '把蓄的电一次放空。所有敌人做敏捷豁免（法术 DC）。失败受 8d6 闪电伤害，成功减半。花 3 点蓄能。',
  },
};
