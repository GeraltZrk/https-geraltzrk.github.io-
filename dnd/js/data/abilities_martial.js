// Abilities of the four non-casting classes: fighter, barbarian, rogue, monk.
// Format: docs/DATA_GUIDE.md.
// - Save DCs of fighter / barbarian / rogue techniques come from `dcAbil` (8 + proficiency + that ability's modifier).
// - The monk's ki techniques use the class's spellAbility (dex): unarmed strikes are `attack: 'spell'`,
//   so they hit with proficiency + dex and do not depend on the equipped weapon.
// - Limited-use abilities spend class resources (stamina, fury, tricks, ki), never `cost.uses`.
// - `en` / `enTerms` carry the English source names of Anbennar terms for the translation pass; the engine ignores them.

const P = (id, name, desc, passives, extra = {}) => ({ id, name, kind: 'feature', desc, passives, ...extra });

export const ABILITIES_MARTIAL = {
  // =========================================================================
  // 战士 Fighter —— 资源：战技（stamina，短休）、动作如潮（surge，短休）
  // =========================================================================
  fighter_second_wind: {
    id: 'fighter_second_wind', name: '回气', kind: 'feature', quick: true, target: 'self', ai: 'heal',
    heal: '1d10+lvl', cost: { res: 'stamina', n: 1 },
    desc: '附赠动作。咬牙喘口气，恢复 1d10+等级 点生命。花 1 点战技。',
  },
  fighter_weapon_drill: P('fighter_weapon_drill', '兵器操练', '同一个动作练过上万遍，不会走样。武器命中 +1。', { hit: 1 }),
  fighter_action_surge: {
    id: 'fighter_action_surge', name: '动作如潮', kind: 'feature', quick: true, target: 'self', grantAction: true,
    cost: { res: 'surge', n: 1 },
    desc: '附赠动作。这一回合多做一次主要行动。每次短休后可用 1 次，12 级起 2 次。',
  },
  fighter_trip_attack: {
    id: 'fighter_trip_attack', name: '绊摔', kind: 'maneuver', quick: true, target: 'enemy', attack: 'weapon', dcAbil: 'str',
    apply: { cond: 'prone', turns: 1, save: { abil: 'str' } }, cost: { res: 'stamina', n: 1 },
    desc: '附赠动作。用武器再打一下。命中后目标过力量豁免（DC 8+熟练+力量），失败就倒地 1 回合。倒地的人攻击有劣势，打他有优势。花 1 点战技。',
  },
  fighter_sweep: {
    id: 'fighter_sweep', name: '横扫', kind: 'maneuver', target: 'enemies', maxTargets: 3, attack: 'weapon',
    cost: { res: 'stamina', n: 1 },
    desc: '抡圆了扫一圈。对至多 3 个敌人各做一次武器攻击。花 1 点战技。',
  },
  fighter_extra_attack: P('fighter_extra_attack', '额外攻击', '攻击动作可以打两下。', { extraAttack: 1 }),
  fighter_sunder: {
    id: 'fighter_sunder', name: '破甲', kind: 'maneuver', target: 'enemy', attack: 'weapon', ai: 'control',
    apply: { cond: 'sundered', turns: 3 }, cost: { res: 'stamina', n: 1 },
    desc: '照着甲缝砸一下。命中后目标“破甲”3 回合：护甲等级 -3，全队都占便宜。这一下代替整个攻击动作。花 1 点战技。',
  },
  fighter_weapon_mastery: P('fighter_weapon_mastery', '兵器精通', '什么兵器到了手里都知道往哪儿使劲。武器伤害 +1。', { dmg: 1 }),
  fighter_improved_critical: P('fighter_improved_critical', '老手的眼力', '攻击骰掷出 19 或 20 都算重击。', { critRange: 19 }),
  fighter_indomitable: {
    id: 'fighter_indomitable', name: '不屈', kind: 'feature', quick: true, target: 'self', cleanse: 'all', tempHp: '1d10+lvl',
    cost: { res: 'stamina', n: 2 },
    desc: '附赠动作。甩掉身上所有负面状态，并获得 1d10+等级 点临时生命。花 2 点战技。',
  },
  fighter_extra_attack_2: P('fighter_extra_attack_2', '三连击', '攻击动作可以打三下。', { extraAttack: 2 }),
  fighter_surge_mastery: P('fighter_surge_mastery', '潮涌不息', '动作如潮每次短休后可用 2 次。', {}),

  // —— 誓约骑士
  fighter_knight_challenge: {
    id: 'fighter_knight_challenge', name: '骑士挑战', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'taunting', turns: 2 },
    desc: '附赠动作。报上名号叫阵。到你下回合结束前，敌人优先打你，你的护甲等级 +1。不花战技。',
  },
  fighter_knight_lance_charge: {
    id: 'fighter_knight_lance_charge', name: '天枪冲锋', en: 'Adean, the Skylance', kind: 'maneuver', target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '1d8+lvl', dcAbil: 'str', apply: { cond: 'prone', turns: 1, save: { abil: 'str' } },
    cost: { res: 'stamina', n: 2 },
    desc: '学“天枪”阿德安刺龙的那一下。一次有优势的武器攻击，命中额外造成 1d8+等级 伤害。目标力量豁免（DC 8+熟练+力量）失败则倒地 1 回合。这一下代替整个攻击动作。花 2 点战技。',
    enTerms: { '阿德安': 'Adean', '天枪': 'The Skylance' },
  },
  fighter_knight_vow: P('fighter_knight_vow', '誓言不移', '发过的誓压在身上，比甲还沉。护甲等级 +1，所有豁免 +1，免疫恐慌。', { ac: 1, saveBonus: 1, condImmune: ['frightened'] }),

  // —— 兵团老兵
  fighter_company_rally: {
    id: 'fighter_company_rally', name: '跟我上', kind: 'feature', quick: true, target: 'allies', ai: 'buff',
    apply: { cond: 'emboldened', turns: 2 }, cost: { res: 'stamina', n: 2 },
    desc: '附赠动作。一嗓子把全队喊起来。所有同伴（包括你）2 回合内武器命中 +2、伤害 +2。花 2 点战技。',
  },
  fighter_company_old_hand: P('fighter_company_old_hand', '老油条', '先动手的活得久，活得久的才领得到饷。先攻 +2，每级生命 +1。', { init: 2, hpPerLevel: 1 }),
  fighter_company_kill_order: {
    id: 'fighter_company_kill_order', name: '集火', kind: 'feature', quick: true, target: 'enemy',
    apply: { cond: 'marked', turns: 4 }, cost: { res: 'stamina', n: 1 },
    desc: '附赠动作。点一个敌人的名，全队照着它打。目标被“标记”4 回合：护甲等级 -2。花 1 点战技。',
  },

  // =========================================================================
  // 野蛮人 Barbarian —— 资源：狂暴（rage，长休）、蛮劲（fury，短休）
  // =========================================================================
  barbarian_rage: {
    id: 'barbarian_rage', name: '狂暴', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'raging', turns: 10 }, cost: { res: 'rage', n: 1 },
    desc: '附赠动作。进入狂暴 10 回合：武器伤害 +2，挥砍、穿刺、钝击伤害减半。花 1 次狂暴，长休恢复。',
  },
  barbarian_unarmored: P('barbarian_unarmored', '皮糙肉厚', '不穿甲时，护甲等级 = 10+敏捷调整值+体质调整值。可以拿盾。', { unarmored: 'con' }),
  barbarian_reckless: {
    id: 'barbarian_reckless', name: '鲁莽攻击', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'reckless', turns: 2 },
    desc: '附赠动作。豁出去打。到你下回合结束前，你的攻击有优势，敌人打你也有优势。不花资源。',
  },
  barbarian_war_cry: {
    id: 'barbarian_war_cry', name: '战吼', kind: 'feature', quick: true, target: 'enemies', dcAbil: 'str',
    save: { abil: 'wis' }, apply: { cond: 'frightened', turns: 2 }, cost: { res: 'fury', n: 1 },
    desc: '附赠动作。吼一嗓子。所有敌人过感知豁免（DC 8+熟练+力量），失败则恐慌，攻击有劣势。恐慌最多 2 回合，每回合结束可再豁免。花 1 点蛮劲。',
  },
  barbarian_extra_attack: P('barbarian_extra_attack', '额外攻击', '攻击动作可以打两下。', { extraAttack: 1 }),
  barbarian_wide_swing: {
    id: 'barbarian_wide_swing', name: '抡扫', kind: 'maneuver', target: 'enemies', maxTargets: 2, attack: 'weapon', dcAbil: 'str',
    apply: { cond: 'prone', turns: 1, save: { abil: 'str' } }, cost: { res: 'fury', n: 1 },
    desc: '一斧子带过两个人。对至多 2 个敌人各做一次武器攻击。命中的目标过力量豁免（DC 8+熟练+力量），失败就倒地 1 回合。花 1 点蛮劲。',
  },
  barbarian_shrug_off: {
    id: 'barbarian_shrug_off', name: '硬扛', kind: 'feature', quick: true, target: 'self', ai: 'heal',
    heal: '1d12+lvl', cost: { res: 'fury', n: 1 },
    desc: '附赠动作。把伤口一按接着打，恢复 1d12+等级 点生命。花 1 点蛮劲。',
  },
  barbarian_feral_instinct: P('barbarian_feral_instinct', '野性直觉', '后颈发凉的时候你已经在动了。先攻 +3，察觉检定有优势。', { init: 3, skillAdv: ['perception'] }),
  barbarian_brutal_critical: P('barbarian_brutal_critical', '残暴重击', '武器伤害 +1；重击时再加 2d6。', { dmg: 1, critDice: 2 }),
  barbarian_mindless_rage: P('barbarian_mindless_rage', '怒不可遏', '吓不住，也哄不走。武器伤害 +2，免疫恐慌和魅惑。', { dmg: 2, condImmune: ['frightened', 'charmed'] }),
  barbarian_primal_might: P('barbarian_primal_might', '原初之力', '力量和体质各 +2，可以超过 20。', { abil: { str: 2, con: 2 } }),

  // —— 掠夺者（格鲁迪亚）
  barbarian_reaver_frenzy: {
    id: 'barbarian_reaver_frenzy', name: '连斩', kind: 'maneuver', quick: true, target: 'enemy', attack: 'weapon',
    cost: { res: 'fury', n: 1 },
    desc: '附赠动作。趁对方还没缓过来，用武器再砍一下。花 1 点蛮劲。',
  },
  barbarian_reaver_north_blood: P('barbarian_reaver_north_blood', '北地身板', '南方人说格鲁迪亚人祖上有巨人的血。寒冷伤害减半，每级生命 +1。', { resist: ['cold'], hpPerLevel: 1 }, { en: 'Gerudian', enTerms: { '格鲁迪亚人': 'Gerudians' } }),
  barbarian_reaver_shieldbreaker: {
    id: 'barbarian_reaver_shieldbreaker', name: '破盾墙', kind: 'maneuver', target: 'enemies', maxTargets: 3, attack: 'weapon',
    apply: { cond: 'sundered', turns: 2 }, cost: { res: 'fury', n: 2 },
    desc: '一斧一个，专劈盾和甲。对至多 3 个敌人各做一次武器攻击，命中的目标“破甲”2 回合：护甲等级 -3。花 2 点蛮劲。',
  },

  // —— 战帮斗士（兽人）
  barbarian_warband_duel: {
    id: 'barbarian_warband_duel', name: '荣誉决斗', en: "Ozarm'Chadash", kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'taunting', turns: 2 }, tempHp: '1d8+lvl', cost: { res: 'fury', n: 1 },
    desc: '附赠动作。按战帮的规矩叫阵。到你下回合结束前，敌人优先打你，你的护甲等级 +1。同时获得 1d8+等级 点临时生命。花 1 点蛮劲。',
    enTerms: { '战帮': 'Orcish warband' },
  },
  barbarian_warband_scars: P('barbarian_warband_scars', '以疤为荣', '兽人把伤疤当勋章，还会自己往大里划。每级生命 +1，免疫恐慌。', { hpPerLevel: 1, condImmune: ['frightened'] }),
  barbarian_warband_killing_blow: {
    id: 'barbarian_warband_killing_blow', name: '夺命一斧', kind: 'maneuver', target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '1d12+lvl', cost: { res: 'fury', n: 2 },
    desc: '谁补的最后一下，战利品谁先挑。一次有优势的武器攻击，命中额外造成 1d12+等级 伤害。这一下代替整个攻击动作。花 2 点蛮劲。',
  },

  // =========================================================================
  // 游荡者 Rogue —— 资源：诡计（tricks，短休）
  // =========================================================================
  rogue_sneak_attack: P('rogue_sneak_attack', '偷袭', '每回合一次。用灵巧或远程武器命中时，只要你有优势，或者还有同伴站着，就加偷袭伤害。骰数是等级的一半，向上取整：1 级 1d6，5 级 3d6，11 级 6d6。', { sneak: true }),
  rogue_expertise: P('rogue_expertise', '专精', '吃这碗饭的基本功。隐匿和巧手检定 +2。', { skill: { stealth: 2, sleight: 2 } }),
  rogue_hide: {
    id: 'rogue_hide', name: '藏身', kind: 'feature', quick: true, target: 'self', hide: true,
    desc: '附赠动作。躲进暗处：敌人优先打别人，你的下一次攻击有优势。一出手就现形。不花资源。',
  },
  rogue_dirty_trick: {
    id: 'rogue_dirty_trick', name: '下三滥', kind: 'maneuver', quick: true, target: 'enemy', dcAbil: 'dex',
    save: { abil: 'con' }, apply: { cond: 'blinded', turns: 1 }, cost: { res: 'tricks', n: 1 },
    desc: '附赠动作。扬沙子、啐唾沫、踩脚趾，哪样顺手用哪样。目标过体质豁免（DC 8+熟练+敏捷），失败则目盲到它下回合结束。目盲的人攻击有劣势，打他有优势。花 1 点诡计。',
  },
  rogue_vital_strike: {
    id: 'rogue_vital_strike', name: '要害一击', kind: 'maneuver', target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '1d6+lvl', cost: { res: 'tricks', n: 1 },
    desc: '看准了再捅。一次有优势的武器攻击，命中额外造成 1d6+等级 伤害，偷袭照算。花 1 点诡计。',
  },
  rogue_uncanny_dodge: P('rogue_uncanny_dodge', '直觉闪避', '刀到跟前，身子比脑子先动。护甲等级 +1。', { ac: 1 }),
  rogue_slip_away: {
    id: 'rogue_slip_away', name: '脱身', kind: 'feature', quick: true, target: 'self', hide: true, tempHp: '1d8+lvl',
    cost: { res: 'tricks', n: 1 },
    desc: '附赠动作。就势一滚，再抬头人已经不在原地。立刻藏身，下一次攻击有优势，并获得 1d8+等级 点临时生命。花 1 点诡计。',
  },
  rogue_evasion: P('rogue_evasion', '反射闪避', '所有豁免 +1；战斗之外的敏捷豁免有优势。', { saveBonus: 1, saveAdv: ['dex'] }),
  rogue_wyvern_venom: {
    id: 'rogue_wyvern_venom', name: '飞龙毒刃', en: 'Wyvern venom', kind: 'maneuver', target: 'enemy', attack: 'weapon', dcAbil: 'dex',
    weaponExtra: '2d8', extraType: 'poison', apply: { cond: 'poisoned', turns: 3, save: { abil: 'con' } },
    cost: { res: 'tricks', n: 2 },
    desc: '刃上抹了双足飞龙尾刺里的毒，炼金师配毒药拿它打底。一次武器攻击，命中额外造成 2d8 毒素伤害。目标体质豁免（DC 8+熟练+敏捷）失败则中毒，攻击有劣势，最多 3 回合。花 2 点诡计。',
    enTerms: { '双足飞龙': 'Wyvern' },
  },
  rogue_street_wise: P('rogue_street_wise', '老江湖', '进门先看后门在哪，坐下先看谁的手不在桌面上。先攻 +2，每级生命 +1，察觉和洞悉检定 +2。', { init: 2, hpPerLevel: 1, skill: { perception: 2, insight: 2 } }),
  rogue_reliable_talent: P('rogue_reliable_talent', '可靠才能', '拿手的活不会失手。武器命中 +1；隐匿、巧手、杂技、欺瞒检定 +2。', { hit: 1, skill: { stealth: 2, sleight: 2, acrobatics: 2, deception: 2 } }),
  rogue_elusive: P('rogue_elusive', '滑不留手', '护甲等级 +1，免疫束缚。', { ac: 1, condImmune: ['restrained'] }),

  // —— 影手（维斯沃尔）
  rogue_shadowhand_light_fingers: P('rogue_shadowhand_light_fingers', '影手的手艺', '芬尼克·影手是偷出来的英雄，小人国的孩子都学过他两手。巧手检定 +3，杂技检定 +2，先攻 +1。', { skill: { sleight: 3, acrobatics: 2 }, init: 1 }, { en: 'Finnic Shadowhand', enTerms: { '芬尼克·影手': 'Finnic Shadowhand (Finnic síl Vis)', '小人国': 'Small Country' } }),
  rogue_shadowhand_dye_bomb: {
    id: 'rogue_shadowhand_dye_bomb', name: '染料弹', en: 'Viswall dyeworks', kind: 'maneuver', target: 'enemies', maxTargets: 3, dcAbil: 'dex', ai: 'control',
    save: { abil: 'dex' }, apply: { cond: 'blinded', turns: 2 }, cost: { res: 'tricks', n: 2 },
    desc: '维斯沃尔染坊的下脚料灌进蛋壳，照脸砸。至多 3 个敌人过敏捷豁免（DC 8+熟练+敏捷），失败则目盲 2 回合。目盲的人攻击有劣势，打他有优势。这是主要行动。花 2 点诡计。',
    enTerms: { '维斯沃尔': 'Viswall' },
  },
  rogue_shadowhand_second_story: P('rogue_shadowhand_second_story', '飞檐走壁', '二楼的窗户比大门好进。先攻 +2，运动和隐匿检定 +2。', { init: 2, skill: { athletics: 2, stealth: 2 } }),
  rogue_shadowhand_vanish: {
    id: 'rogue_shadowhand_vanish', name: '无影', kind: 'feature', quick: true, target: 'self', hide: true,
    selfApply: { cond: 'blurred', turns: 2 }, cost: { res: 'tricks', n: 2 },
    desc: '附赠动作。在所有人眼皮底下不见了。立刻藏身，下一次攻击有优势。到你下回合结束前，敌人打你有劣势。花 2 点诡计。',
  },

  // —— 影舞者（纳撒琳 / 暗影盟约）
  rogue_shadowdancer_cloak: {
    id: 'rogue_shadowdancer_cloak', name: '影幕', en: 'Shadowmancy', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'invisible', turns: 2 }, cost: { res: 'tricks', n: 1 },
    desc: '附赠动作。东洲传来的影术，把影子披在身上。到你下回合结束前隐形：你的攻击有优势，敌人打你有劣势。花 1 点诡计。',
    enTerms: { '东洲': 'Haless', '影术': 'Shadowmancy (shadow magic)' },
  },
  rogue_shadowdancer_assassinate: {
    id: 'rogue_shadowdancer_assassinate', name: '夺命', kind: 'maneuver', target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '3d6+lvl', cost: { res: 'tricks', n: 2 },
    desc: '只出一刀，照着要命的地方。一次有优势的武器攻击，命中额外造成 3d6+等级 伤害，偷袭照算。花 2 点诡计。',
  },
  rogue_shadowdancer_death_mark: P('rogue_shadowdancer_death_mark', '匕首认人', '影舞者纳撒琳偏爱的兵器是匕首。攻击骰掷出 19 或 20 都算重击，偷袭骰也跟着翻倍。先攻 +2。', { critRange: 19, init: 2 }, { en: 'Nathalyne', enTerms: { '影舞者纳撒琳': 'Nathalyne, the Shadowdancer' } }),

  // =========================================================================
  // 武僧 Monk —— 资源：气（ki，短休，数量 = 等级）。气的豁免 DC = 8+熟练+敏捷。
  // =========================================================================
  monk_unarmored_defense: P('monk_unarmored_defense', '无甲防御', '不穿甲时，护甲等级 = 10+敏捷调整值+感知调整值。', { unarmored: 'wis' }),
  monk_martial_arts: {
    id: 'monk_martial_arts', name: '拳脚', kind: 'maneuver', quick: true, target: 'enemy', attack: 'spell',
    dmg: '1d4+mod', dmgByLevel: { 5: '1d6+mod', 11: '1d8+mod' }, dmgType: 'bludgeoning',
    desc: '附赠动作。兵器之外再补一拳或一脚，空着手也能用。命中加值是熟练+敏捷。伤害 1d4+敏捷 钝击，5 级起 1d6，11 级起 1d8。不花气。',
  },
  monk_flurry: {
    id: 'monk_flurry', name: '疾风连击', kind: 'maneuver', quick: true, target: 'enemy', attack: 'spell', hits: 2,
    dmg: '1d4+mod', dmgByLevel: { 5: '1d6+mod', 11: '1d8+mod' }, dmgType: 'bludgeoning', cost: { res: 'ki', n: 1 },
    desc: '附赠动作。连出两下拳脚，每下 1d4+敏捷 钝击，5 级起 1d6，11 级起 1d8。花 1 点气。',
  },
  monk_patient_defense: {
    id: 'monk_patient_defense', name: '守势', kind: 'feature', quick: true, target: 'self',
    apply: { cond: 'blurred', turns: 2 }, cost: { res: 'ki', n: 1 },
    desc: '附赠动作。收住架子只看不抢。到你下回合结束前，敌人打你有劣势。花 1 点气。',
  },
  monk_inner_breath: {
    id: 'monk_inner_breath', name: '调息', kind: 'feature', quick: true, target: 'self', ai: 'heal',
    heal: '1d8+lvl', healByLevel: { 8: '2d8+lvl' }, cost: { res: 'ki', n: 2 },
    desc: '附赠动作。三次呼吸，把气沉下去。恢复 1d8+等级 点生命，8 级起 2d8+等级。花 2 点气。',
  },
  monk_extra_attack: P('monk_extra_attack', '额外攻击', '攻击动作可以打两下。', { extraAttack: 1 }),
  monk_stunning_strike: {
    id: 'monk_stunning_strike', name: '震慑击', kind: 'maneuver', target: 'enemy', attack: 'weapon', ai: 'control',
    weaponExtra: '2d6', extraType: 'bludgeoning', apply: { cond: 'stunned', turns: 1, save: { abil: 'con' } },
    cost: { res: 'ki', n: 2 },
    desc: '把气打进对方身子里。一次武器攻击，命中额外造成 2d6 钝击伤害。目标体质豁免（DC 8+熟练+敏捷）失败则震慑 1 回合：不能行动，打它有优势。这一下代替整个攻击动作。花 2 点气。',
  },
  monk_light_step: P('monk_light_step', '轻身', '脚下没声，起步比谁都快。护甲等级 +1，先攻 +2。', { ac: 1, init: 2 }),
  monk_stillness: P('monk_stillness', '止念', '心里没有浪，就没有东西可以搅。免疫魅惑和恐慌；战斗之外的敏捷豁免有优势。', { condImmune: ['charmed', 'frightened'], saveAdv: ['dex'] }),
  monk_ki_edge: P('monk_ki_edge', '气贯兵刃', '气顺着手走到刃上。武器命中 +1，武器伤害 +1。', { hit: 1, dmg: 1 }),
  monk_purity: P('monk_purity', '百毒不侵', '免疫中毒，毒素伤害减半。', { condImmune: ['poisoned'], resist: ['poison'] }),
  monk_diamond_soul: P('monk_diamond_soul', '金刚心', '所有豁免 +2。', { saveBonus: 2 }),
  monk_empty_body: {
    id: 'monk_empty_body', name: '虚身', kind: 'feature', quick: true, target: 'self',
    selfApply: { cond: 'invisible', turns: 3 }, cost: { res: 'ki', n: 3 },
    desc: '附赠动作。人还站在那儿，看的人却抓不住。隐形 3 回合，这一回合也算：你的攻击有优势，敌人打你有劣势。花 3 点气。',
  },

  // —— 守刃僧（刀锋边区）
  monk_steward_blind_lesson: P('monk_steward_blind_lesson', '蒙眼课', '盲宗师教徒弟，头一件事是让人把眼睛蒙上。免疫目盲，先攻 +2，察觉检定 +2。', { condImmune: ['blinded'], init: 2, skill: { perception: 2 } }, { en: 'Blind Masters', enTerms: { '盲宗师': 'Blind Masters (Order of the Blade Stewards)' } }),
  monk_steward_draw_cut: {
    id: 'monk_steward_draw_cut', name: '出鞘斩', kind: 'maneuver', quick: true, target: 'enemy', attack: 'weapon',
    advantage: true, weaponExtra: '1d6', cost: { res: 'ki', n: 1 },
    desc: '附赠动作。剑出鞘的那一下就是杀招。一次有优势的武器攻击，命中额外造成 1d6 伤害。花 1 点气。',
  },
  monk_steward_test_of_light: {
    id: 'monk_steward_test_of_light', name: '试剑之光', en: 'Test of the Gleaming Blade', kind: 'maneuver', target: 'enemy', attack: 'weapon', hits: 2, ai: 'control',
    apply: { cond: 'blinded', turns: 2, save: { abil: 'con' } }, cost: { res: 'ki', n: 2 },
    desc: '卡林达尔挨了打会放光，受不住的人当场瞎掉。守刃僧学的是拿刃面把光送进对方眼里。连做两次武器攻击。每次命中，目标都过体质豁免（DC 8+熟练+敏捷），失败则目盲 2 回合。目盲的人攻击有劣势，打他有优势。花 2 点气。',
    enTerms: { '卡林达尔': 'Calindal, the Gleaming Blade', '守刃僧': 'Order of the Blade Stewards' },
  },
  monk_steward_mind_eye: P('monk_steward_mind_eye', '心眼', '不拿眼睛看，反倒看得见破绽。攻击骰掷出 19 或 20 都算重击，护甲等级 +1。', { critRange: 19, ac: 1 }),

  // —— 仙界侠客（东洲）
  monk_xia_cultivation: P('monk_xia_cultivation', '养气', '东洲人说气就是命。每天打坐吐纳攒下来的，都算在命上。每级生命 +1。', { hpPerLevel: 1 }, { en: 'Chi', enTerms: { '东洲': 'Haless', '气': 'Chi' } }),
  monk_xia_charging_bull: {
    id: 'monk_xia_charging_bull', name: '奔牛劲', en: 'School of the Charging Bull', kind: 'maneuver', quick: true, target: 'enemy', attack: 'spell',
    dmg: '1d10+mod', dmgByLevel: { 5: '2d8+mod', 11: '3d8+mod' }, dmgType: 'bludgeoning',
    apply: { cond: 'prone', turns: 1, save: { abil: 'str' } }, cost: { res: 'ki', n: 1 },
    desc: '附赠动作。奔牛一门的撞法，肩膀先到。一次拳脚攻击，命中造成 1d10+敏捷 钝击，5 级起 2d8，11 级起 3d8。目标力量豁免（DC 8+熟练+敏捷）失败则倒地 1 回合。花 1 点气。',
  },
  monk_xia_still_ocean: {
    id: 'monk_xia_still_ocean', name: '止水心法', en: 'Still Ocean Technique', kind: 'feature', quick: true, target: 'self',
    cleanse: 'all', apply: { cond: 'steadfast', turns: 5 }, cost: { res: 'ki', n: 1 },
    desc: '附赠动作。口诀只有一句：“我是没有浪的海。”解除身上所有负面状态，并“坚定”5 回合：所有豁免 +2，免疫恐慌。花 1 点气。',
  },
  monk_xia_divine_lightning: {
    id: 'monk_xia_divine_lightning', name: '神雷掌', en: 'School of Divine Lightning', kind: 'maneuver', target: 'enemies', maxTargets: 3,
    save: { abil: 'dex', half: true }, dmg: '3d8', dmgType: 'lightning', apply: { cond: 'dazed', turns: 1 }, cost: { res: 'ki', n: 2 },
    desc: '神雷一门把气放到身外的功夫，一掌推出去是带响的。至多 3 个敌人各受 3d8 闪电伤害，敏捷豁免（DC 8+熟练+敏捷）成功则减半。豁免失败的还会晕眩 1 回合，攻击有劣势。花 2 点气。',
  },
};
