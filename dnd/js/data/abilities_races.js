// 种族能力。格式见 docs/DATA_GUIDE.md，id 一律以 race_ 开头，由 races.js 的 abilities 引用。
//
// 两类：
// 1. 主动能力（有 target）：按次数用，cost: { uses: 1, per: 'short' | 'long' }。
//    带豁免的用 dcAbil 指定算 DC 的属性（DC = 8 + 熟练加值 + 该属性调整值），跟武系职业的战技同一套算法；
//    骰式里的 mod 也取这项属性的调整值。这样法师和战士用同一个种族能力，DC 不会差出一截。
// 2. 亚种说明（race_sub_*，没有 target，也没有 passives）：只在角色卡的“能力与特性”里显示一行字。
//    真正的数值写在 races.js 里亚种自己的 passives 上，这里不重复，免得算两遍。
// `en` 是英文原名，给翻译核对用，引擎不读。

const NOTE = (id, name, desc) => ({ id, name, kind: 'feature', desc });

export const ABILITIES_RACES = {
  // =========================================================================
  // 主动能力
  // =========================================================================
  race_human_all_in: {
    id: 'race_human_all_in', name: '豁出去', en: 'All In', kind: 'feature', quick: true, target: 'self', ai: 'buff',
    selfApply: { cond: 'focused', turns: 1 }, cost: { uses: 1, per: 'short' },
    desc: '附赠动作。到本回合结束前，你的攻击检定具有优势。每次短休后可以使用 1 次。',
  },
  race_halfling_second_breakfast: {
    id: 'race_halfling_second_breakfast', name: '加餐', en: 'Second Breakfast', kind: 'feature', quick: true, target: 'self', ai: 'heal',
    heal: '1d6+lvl', cost: { uses: 1, per: 'short' },
    desc: '附赠动作。从兜里摸出点吃的塞进嘴里，恢复 1d6+等级 点生命。每次短休后可以使用 1 次。',
  },
  race_gnome_misdirection: {
    id: 'race_gnome_misdirection', name: '障眼法', en: 'Misdirection', kind: 'feature', quick: true, target: 'self',
    hide: true, cost: { uses: 1, per: 'short' },
    desc: '附赠动作。一点小幻术让对面看花了眼：你进入隐匿，下一次攻击具有优势。每次短休后可以使用 1 次。',
  },
  race_goblin_dirty_trick: {
    id: 'race_goblin_dirty_trick', name: '下黑手', en: 'Dirty Trick', kind: 'feature', quick: true, target: 'enemy', ai: 'control',
    save: { abil: 'dex' }, dcAbil: 'dex', apply: { cond: 'exposed', turns: 1 }, cost: { uses: 1, per: 'short' },
    desc: '附赠动作。撒把沙子，踩一脚，朝裆下来一下。目标需进行敏捷豁免（DC 8+熟练加值+敏捷调整值），失败则露出破绽：在其下一回合结束前，打它的攻击都有优势。每次短休后可以使用 1 次。',
  },
  race_hobgoblin_orders: {
    id: 'race_hobgoblin_orders', name: '传令', en: 'Orders', kind: 'feature', quick: true, target: 'ally', ai: 'buff',
    apply: { cond: 'inspired', turns: 5 }, cost: { uses: 1, per: 'short' },
    desc: '附赠动作。选择一名同伴（也可以是自己），喊出口令：他下一次攻击检定额外 +1d6。每次短休后可以使用 1 次。',
  },
  race_kobold_snare: {
    id: 'race_kobold_snare', name: '下套', en: 'Snare', kind: 'feature', target: 'enemy', ai: 'control',
    save: { abil: 'dex' }, dcAbil: 'dex', apply: { cond: 'restrained', turns: 2 }, cost: { uses: 1, per: 'short' },
    desc: '甩出一副夹子或者一根绊索。目标需进行敏捷豁免（DC 8+熟练加值+敏捷调整值），失败则被束缚，至多 2 回合：它攻击有劣势，打它有优势，它每回合结束时可以用力量豁免挣脱。消耗主要行动，每次短休后可以使用 1 次。',
  },
  race_gnoll_bite: {
    id: 'race_gnoll_bite', name: '碎骨咬', en: 'Bone-cracking Bite', kind: 'feature', quick: true, target: 'enemy',
    save: { abil: 'dex' }, dcAbil: 'str', dmg: '1d8+mod', dmgType: 'piercing', apply: { cond: 'bleeding', turns: 3 }, cost: { uses: 1, per: 'short' },
    desc: '附赠动作。照着胳膊或者腿咬下去。目标需进行敏捷豁免（DC 8+熟练加值+力量调整值），失败则受到 1d8+力量调整值 点穿刺伤害，并流血 3 回合（每回合开始受 1d4 伤害）。每次短休后可以使用 1 次。',
  },
  race_harpy_screech: {
    id: 'race_harpy_screech', name: '尖啸', en: 'Screech', kind: 'feature', target: 'enemies', ai: 'control',
    save: { abil: 'con', half: true }, dcAbil: 'cha', dmg: '1d8+lvl', dmgType: 'thunder', apply: { cond: 'dazed', turns: 1 }, cost: { uses: 1, per: 'short' },
    desc: '张嘴一声尖啸。所有敌人受到 1d8+等级 点雷鸣伤害，体质豁免（DC 8+熟练加值+魅力调整值）成功则减半。豁免失败的还会晕眩，在其下一回合结束前攻击有劣势。消耗主要行动，每次短休后可以使用 1 次。',
  },
  race_ogre_hunger: {
    id: 'race_ogre_hunger', name: '饿劲', en: 'The Hunger', kind: 'feature', quick: true, target: 'self', ai: 'buff',
    selfApply: { cond: 'emboldened', turns: 2 }, cost: { uses: 1, per: 'long' },
    desc: '附赠动作。任由腹中那股饥饿冲昏头脑：本回合和下一回合，武器命中 +2、伤害 +2。每次长休后可以使用 1 次。',
  },
  race_centaur_charge: {
    id: 'race_centaur_charge', name: '冲撞', en: 'Charge', kind: 'maneuver', target: 'enemy', attack: 'weapon',
    weaponExtra: '1d6+lvl', extraType: 'bludgeoning', dcAbil: 'str', apply: { cond: 'prone', turns: 1, save: { abil: 'str' } }, cost: { uses: 1, per: 'short' },
    desc: '四蹄发力撞上去：进行一次武器攻击，命中后额外造成 1d6+等级 点钝击伤害。被撞中的目标随后进行力量豁免（DC 8+熟练加值+力量调整值），失败则倒地 1 回合。消耗主要行动，每次短休后可以使用 1 次。',
  },
  race_harimari_roar: {
    id: 'race_harimari_roar', name: '虎啸', en: 'Roar', kind: 'feature', target: 'enemies', ai: 'control',
    save: { abil: 'wis' }, dcAbil: 'str', apply: { cond: 'frightened', turns: 2 }, cost: { uses: 1, per: 'short' },
    desc: '一声三公里外都听得见的吼。所有敌人须进行感知豁免（DC 8+熟练加值+力量调整值），失败则恐慌至多 2 回合：攻击有劣势，每回合结束时可以再豁免一次。消耗主要行动，每次短休后可以使用 1 次。',
  },

  // =========================================================================
  // 亚种说明（只显示，不带数值；数值在 races.js 的亚种 passives 里）
  // =========================================================================
  // 人类
  race_sub_damerian: NOTE('race_sub_damerian', '见惯了法师', '达梅里亚人：帝国腹地到处是法师和精灵先生，耳濡目染。奥秘 +2。'),
  race_sub_lorentish: NOTE('race_sub_lorentish', '客套话', '洛伦特人：一句话能绕三道弯，绕完了你还得谢他。游说 +2。'),
  race_sub_alenic: NOTE('race_sub_alenic', '北地身板', '艾伦人：冷地方干重活长大的。运动 +2。'),
  race_sub_escanni: NOTE('race_sub_escanni', '废墟里长大', '东坎诺人：哪口井能喝、哪片林子能过夜，心里有数。求生 +2。'),
  race_sub_gerudian: NOTE('race_sub_gerudian', '峡湾的冬天', '格鲁迪亚人：寒冷伤害减半。'),
  race_sub_bulwari: NOTE('race_sub_bulwari', '集市上的眼力', '布勒瓦尔人：讲价讲了几代人，对面心里想什么看得出七八分。洞悉 +2。'),
  race_sub_raheni: NOTE('race_sub_raheni', '神殿脚下', '罗祆人：从小在神殿和各路说法之间长大。宗教 +2。'),
  race_sub_yan: NOTE('race_sub_yan', '武馆底子', '烟州人：小时候多少在武馆里压过腿。杂技 +2。'),
  // 精灵
  race_sub_moon_elf: NOTE('race_sub_moon_elf', '魔法底子', '月精灵：奥秘 +2。'),
  race_sub_sun_elf: NOTE('race_sub_sun_elf', '替人拿主意', '太阳精灵：游说 +2。'),
  race_sub_wood_elf: NOTE('race_sub_wood_elf', '林子里的一千年', '木精灵：求生 +2。'),
  race_sub_sea_elf: NOTE('race_sub_sea_elf', '船上长大', '海精灵：爬桅杆、泅水都是家常便饭。运动 +2。'),
  // 矮人
  race_sub_ruby_dwarf: NOTE('race_sub_ruby_dwarf', '鉴宝的眼', '红宝石矮人：真假成色，上手一看就知道。调查 +2。'),
  race_sub_silver_dwarf: NOTE('race_sub_silver_dwarf', '钱庄的规矩', '白银矮人：借钱的人话里几分真，听得出来。洞悉 +2。'),
  race_sub_stone_dwarf: NOTE('race_sub_stone_dwarf', '石匠的身板', '岩石矮人：每级生命 +1。'),
  race_sub_remnant_dwarf: NOTE('race_sub_remnant_dwarf', '山堡的记性', '残堡矮人：哪年哪月谁欠了谁，山堡里都有账。历史 +2。'),
  // 侏儒
  race_sub_cliff_gnome: NOTE('race_sub_cliff_gnome', '岛上的作坊', '山崖侏儒：拆开看看是他们的口头禅。调查 +2。'),
  race_sub_creek_gnome: NOTE('race_sub_creek_gnome', '戏台上的嘴', '河流侏儒：表演 +2。'),
  // 兽人
  race_sub_green_orc: NOTE('race_sub_green_orc', '吃遍东坎诺', '绿皮兽人：求生 +2。'),
  race_sub_gray_orc: NOTE('race_sub_gray_orc', '北边的风', '灰皮兽人：寒冷伤害减半。'),
  race_sub_brown_orc: NOTE('race_sub_brown_orc', '打头阵的', '棕皮兽人：运动 +2。'),
  race_sub_black_orc: NOTE('race_sub_black_orc', '岩壁的颜色', '黑皮兽人：隐匿 +2。'),
  // 狗头人
  race_sub_redscale: NOTE('race_sub_redscale', '放牧的', '红鳞：驯兽 +2。'),
  race_sub_bluescale: NOTE('race_sub_bluescale', '守典籍的', '蓝鳞：历史 +2。'),
  race_sub_greenscale: NOTE('race_sub_greenscale', '碎冰海的水手', '绿鳞：寒冷伤害减半。'),
  race_sub_goldscale: NOTE('race_sub_goldscale', '招财鳞', '金鳞：人家觉得你吉利，门就好敲。游说 +2。'),
  // 食人魔
  race_sub_fathide_ogre: NOTE('race_sub_fathide_ogre', '厚皮', '厚皮食人魔：不穿甲时护甲等级为 12+敏捷调整值。'),
  race_sub_horned_ogre: NOTE('race_sub_horned_ogre', '山顶书库', '有角食人魔：奥秘 +2。'),
  // 虎人
  race_sub_royal_harimari: NOTE('race_sub_royal_harimari', '官面上的话', '帝虎人：游说 +2。'),
  race_sub_primal_harimari: NOTE('race_sub_primal_harimari', '丛林老家', '初虎人：求生 +2。'),
  race_sub_serene_harimari: NOTE('race_sub_serene_harimari', '坐得住', '宁虎人：洞悉 +2。'),
  // 遗迹精灵
  race_sub_taychendi: NOTE('race_sub_taychendi', '好勇', '泰琴德人：运动 +2。'),
  race_sub_kheionai: NOTE('race_sub_kheionai', '广场上练出来的嘴', '刻伊俄奈人：游说 +1，表演 +1。'),
  race_sub_eordan: NOTE('race_sub_eordan', '四季与妖精', '奥尔丹德人：自然 +2。'),
  race_sub_ynnic: NOTE('race_sub_ynnic', '鹿角马', '洇河人：驯兽 +2。'),
  // 机械人
  race_sub_insyaan_mechanim: NOTE('race_sub_insyaan_mechanim', '旧日的碎片', '隐厦机械人：灰烬之日以前的事还记得零碎几片。历史 +2。'),
  race_sub_wrought_mechanim: NOTE('race_sub_wrought_mechanim', '出厂就会干活', '仿造机械人：运动 +2。'),
};
