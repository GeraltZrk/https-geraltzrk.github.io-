// Setting-specific and magical items: better arms and armour, canon relics, trinkets,
// consumables, food and drink, and loot that only sells.
// Metadata the engine does not read: en (English source name), enTerms (setting terms in desc),
// relic (a named canon relic), invented (not canon), era (campaigns where the item fits; omitted = any).
// Item save DCs: a `use` with a save takes the user's spell DC (8 + proficiency for non-casters),
// or 8 + proficiency + that ability's modifier when `dcAbil` is set. A fixed `dc` is ignored for items.
export const ITEMS_EXTRA = {
  // ---------------------------------------------------------------------------
  // Aliases kept for the demo scenario.
  potion: { id: 'potion', name: '治疗药水', en: 'Potion of Healing', desc: '恢复 2d4+2 点生命，倒地的人也能灌下去。和普通治疗药水是一样东西。', use: { target: 'ally', heal: '2d4+2', revive: true }, value: 50 },
  staff: { id: 'staff', name: '木杖', en: 'Wooden Staff', desc: '一根走路用的木杖，打人 1d6 钝击。', weapon: { dmg: '1d6', type: 'bludgeoning', props: [] }, value: 2 },
  chain: { id: 'chain', name: '链甲', en: 'Chain Mail', desc: '护甲等级 16，不加敏捷。和普通链甲是一样东西。', armor: { base: 16, dexCap: 0, type: 'heavy' }, value: 75 },

  // ---------------------------------------------------------------------------
  // Weapons. +1 around level 4, +2 around level 8.
  hold_battleaxe: {
    id: 'hold_battleaxe', name: '山堡锻钢战斧', en: 'Hold-forged Battleaxe',
    desc: '矮人山堡炉子里出来的战斧，斧背打着锻工的族徽。命中和伤害 +1。',
    enTerms: { '山堡': 'Dwarven hold' },
    weapon: { dmg: '1d8', type: 'slashing', props: ['versatile'], bonus: 1 }, value: 700,
  },
  hold_warhammer: {
    id: 'hold_warhammer', name: '山堡符文战锤', en: 'Rune-struck Hold Warhammer',
    desc: '锤头刻了两道矮人符文，符文匠收的钱够买一头牛。命中和伤害 +2。',
    enTerms: { '山堡': 'Dwarven hold', '符文匠': 'Runesmith' },
    weapon: { dmg: '1d8', type: 'bludgeoning', props: ['versatile'], bonus: 2 }, value: 3500,
  },
  precursor_longsword: {
    id: 'precursor_longsword', name: '先驱钢长剑', en: 'Precursor-steel Longsword',
    desc: '精灵家里传了几十代的剑，先驱钢打的，一千年没上过锈。命中和伤害 +1。',
    enTerms: { '先驱钢': 'Precursor steel' },
    weapon: { dmg: '1d8', type: 'slashing', props: ['versatile'], bonus: 1 }, value: 900,
  },
  precursor_spellblade: {
    id: 'precursor_spellblade', name: '先驱咒刃', en: 'Precursor Spellblade',
    desc: '剑身是空的，里面灌着达姆斯塔尔，既是剑也是施法器。施法者拿它用施法属性攻击；命中和伤害 +2，法术 DC +1。',
    enTerms: { '先驱': 'Precursor', '达姆斯塔尔': 'Damestear' },
    weapon: { dmg: '1d8', type: 'slashing', props: ['versatile', 'casting'], bonus: 2 }, passives: { spellDc: 1 }, value: 4500,
  },
  elven_longbow: {
    id: 'elven_longbow', name: '精灵传家长弓', en: 'Elven Heirloom Longbow',
    desc: '月港精灵的旧弓，弓臂换过三回，弓把还是原来那个。命中和伤害 +1。',
    enTerms: { '月港': 'Moonhaven' },
    weapon: { dmg: '1d8', type: 'piercing', props: ['ranged', 'two_handed'], bonus: 1 }, value: 900,
  },
  rosemetal_rapier: {
    id: 'rosemetal_rapier', name: '玫瑰钢刺剑', en: 'Rosemetal Rapier',
    desc: '红宝石领的玫瑰钢，粉色，比普通钢轻，洛伦特宫廷里决斗爱用。命中和伤害 +1。',
    enTerms: { '红宝石领': 'Rubyhold', '玫瑰钢': 'Rosemetal', '洛伦特': 'Lorent' },
    weapon: { dmg: '1d8', type: 'piercing', props: ['finesse'], bonus: 1 }, value: 1000,
  },
  rose_knight_lance: {
    id: 'rose_knight_lance', name: '玫瑰骑士骑枪', en: 'Rose Knight Lance',
    desc: '第二次紫丁香战争时红宝石领给洛伦特玫瑰骑士打的玫瑰钢骑枪。命中和伤害 +2。',
    enTerms: { '玫瑰骑士': 'Rose Knights', '紫丁香战争': 'Lilac Wars', '红宝石领': 'Rubyhold', '洛伦特': 'Lorent', '玫瑰钢': 'Rosemetal' },
    weapon: { dmg: '1d10', type: 'piercing', props: ['two_handed'], bonus: 2 }, value: 3500, era: [1444],
  },
  rosemetal_saber: {
    id: 'rosemetal_saber', name: '玫瑰钢军刀', en: 'Rosemetal Consortium Saber',
    desc: '玫瑰钢联合会的量产货，据说只有老玫瑰钢八成的成色，军官照样抢着买。命中和伤害 +1。',
    enTerms: { '玫瑰钢联合会': 'Rosemetal Consortium', '玫瑰钢': 'Rosemetal' },
    weapon: { dmg: '1d8', type: 'slashing', props: ['finesse'], bonus: 1 }, value: 800, era: [1836],
  },
  legion_shortsword: {
    id: 'legion_shortsword', name: '卡斯塔诺军团短剑', en: 'Castanorian Legion Shortsword',
    desc: '古卡斯塔诺军团的制式短剑，柄上压着军团编号。命中和伤害 +1。',
    enTerms: { '卡斯塔诺军团': 'Castanorian Legions' },
    weapon: { dmg: '1d6', type: 'piercing', props: ['finesse', 'light'], bonus: 1 }, value: 600, era: [1022, 1444],
  },
  ebonsteel_greataxe: {
    id: 'ebonsteel_greataxe', name: '乌钢巨斧', en: 'Ebonsteel Greataxe',
    desc: '格鲁迪亚的乌钢不卷刃也不烧化，炼法失传了好几百年，这把是从老坟里挖的。命中和伤害 +1。',
    enTerms: { '格鲁迪亚': 'Gerudia', '乌钢': 'Ebonsteel' },
    weapon: { dmg: '1d12', type: 'slashing', props: ['two_handed'], bonus: 1 }, value: 900,
  },
  ebonsteel_greatsword: {
    id: 'ebonsteel_greatsword', name: '乌钢双手剑', en: 'Ebonsteel Greatsword',
    desc: '格鲁迪亚北方的乌钢大剑，比同样大小的钢剑轻一截。命中和伤害 +2。',
    enTerms: { '格鲁迪亚': 'Gerudia', '乌钢': 'Ebonsteel' },
    weapon: { dmg: '2d6', type: 'slashing', props: ['two_handed'], bonus: 2 }, value: 4000,
  },
  damestear_dagger: {
    id: 'damestear_dagger', name: '达姆斯塔尔匕首', en: 'Damestear-edged Dagger',
    desc: '刃口镶了一线达姆斯塔尔，法师拿它当施法器用。施法者用施法属性攻击；命中和伤害 +1。',
    enTerms: { '达姆斯塔尔': 'Damestear' },
    weapon: { dmg: '1d4', type: 'piercing', props: ['finesse', 'light', 'casting'], bonus: 1 }, value: 900,
  },
  damestear_longsword: {
    id: 'damestear_longsword', name: '达姆斯塔尔刃长剑', en: 'Damestear-edged Longsword',
    desc: '刃上的达姆斯塔尔挨一下亮一下，砍得深了会炸出一团光。命中和伤害 +1，重击额外 +1d6。',
    enTerms: { '达姆斯塔尔': 'Damestear' },
    weapon: { dmg: '1d8', type: 'slashing', props: ['versatile'], bonus: 1 }, passives: { critDice: 1 }, value: 1200,
  },
  command_halberd: {
    id: 'command_halberd', name: '命令秩序制式长戟', en: 'Command-issue Halberd',
    desc: '大地精军队按册子发的长戟，每一把一样长，一样重，戟杆上烙着营号。命中和伤害 +1。',
    enTerms: { '命令秩序': 'The Command', '大地精': 'Hobgoblin' },
    weapon: { dmg: '1d10', type: 'slashing', props: ['two_handed'], bonus: 1 }, value: 700, era: [1444, 1836],
  },
  command_arquebus: {
    id: 'command_arquebus', name: '命令秩序火绳枪', en: 'Command-issue Arquebus',
    desc: '大地精的军械库造的火绳枪，枪管比坎诺货厚，炸膛的少。命中和伤害 +1。',
    enTerms: { '命令秩序': 'The Command', '大地精': 'Hobgoblin', '坎诺': 'Cannor' },
    weapon: { dmg: '1d12', type: 'piercing', props: ['ranged', 'two_handed'], bonus: 1 }, value: 900, era: [1444],
  },
  sparkdrive_rifle: {
    id: 'sparkdrive_rifle', name: '火驱枪', en: 'Sparkdrive Rifle',
    desc: '尼姆斯科德侏儒造的，摇一圈杠杆，打出去的是一道闪电。造成闪电伤害，命中和伤害 +1。',
    enTerms: { '尼姆斯科德': 'Nimscodd', '侏儒': 'Gnome' },
    weapon: { dmg: '2d6', type: 'lightning', props: ['ranged', 'two_handed'], bonus: 1 }, value: 1200, era: [1836],
  },
  sparkdrive_mk2: {
    id: 'sparkdrive_mk2', name: '火驱枪二型', en: 'Sparkdrive MK II',
    desc: '波特纳姆的奇械师改过的火驱枪，不用专人伺候也能打。造成闪电伤害，命中和伤害 +2。',
    enTerms: { '波特纳姆': 'Portnamm', '奇械师': 'Artificer', '火驱枪': 'Sparkdrive Rifle' },
    weapon: { dmg: '2d6', type: 'lightning', props: ['ranged', 'two_handed'], bonus: 2 }, value: 4500, era: [1836],
  },
  factory_rifle: {
    id: 'factory_rifle', name: '工厂线膛枪', en: 'Factory-made Rifle',
    desc: '北方联盟工厂里一天出几百支的货，膛线拉得比手工的齐，零件能互换。命中和伤害 +1。',
    enTerms: { '北方联盟': 'Northern League' },
    weapon: { dmg: '2d6', type: 'piercing', props: ['ranged', 'two_handed'], bonus: 1 }, value: 900, era: [1836],
  },
  wandlock_pistol: {
    id: 'wandlock_pistol', name: '魔杖枪', en: 'Wandlock',
    desc: '奇械师的随身家伙：枪托里塞了一节魔杖，扣扳机打出一团力场。施法者用施法属性攻击；1d10 力场伤害，命中和伤害 +1。',
    enTerms: { '奇械师': 'Artificer' },
    weapon: { dmg: '1d10', type: 'force', props: ['ranged', 'light', 'casting'], bonus: 1 }, value: 1100, era: [1836],
  },
  magister_wand: {
    id: 'magister_wand', name: '魔导院魔杖', en: 'Magisterium Wand',
    desc: '魔导院发给毕业生的魔杖，杖尾刻着学号。法术攻击 +1，用它打人命中和伤害 +1。',
    enTerms: { '魔导院': 'Magisterium' },
    weapon: { dmg: '1d6', type: 'force', props: ['ranged', 'casting'], bonus: 1 }, passives: { spellHit: 1 }, value: 900,
  },
  corinite_holy_symbol: {
    id: 'corinite_holy_symbol', name: '科琳教红剑圣徽', en: 'Corinite Red Sword Symbol',
    desc: '红盾上一把剑，科琳的记号。握着它祈祷，用施法属性攻击，命中和伤害 +1，法术攻击 +1。',
    enTerms: { '科琳': 'Corin', '科琳教': 'Corinite' },
    weapon: { dmg: '1d6', type: 'radiant', props: ['casting'], bonus: 1 }, passives: { spellHit: 1 }, value: 900, era: [1444, 1836],
  },
  regent_court_mace: {
    id: 'regent_court_mace', name: '摄政王庭祝圣钉锤', en: 'Regent Court Blessed Mace',
    desc: '王庭神殿开过光的钉锤，锤头上刻着卡斯特洛斯和阿德安的名字。命中和伤害 +1，你施放的治疗每次多恢复 1 点。',
    enTerms: { '摄政王庭': 'Regent Court', '卡斯特洛斯': 'Castellos', '阿德安': 'Adean' },
    weapon: { dmg: '1d6', type: 'bludgeoning', props: [], bonus: 1 }, passives: { healBonus: 1 }, value: 800,
  },

  // ---------------------------------------------------------------------------
  // Armour and shields.
  hold_chain: {
    id: 'hold_chain', name: '山堡链甲', en: 'Hold-forged Chain Mail',
    desc: '矮人山堡的链甲，环子是一个个铆死的。护甲等级 17，不加敏捷。',
    enTerms: { '山堡': 'Dwarven hold' },
    armor: { base: 17, dexCap: 0, type: 'heavy' }, value: 900,
  },
  hold_plate: {
    id: 'hold_plate', name: '山堡符文板甲', en: 'Rune-struck Hold Plate',
    desc: '胸甲里侧刻满了守护符文，穿上要两个人帮忙。护甲等级 20，不加敏捷。',
    enTerms: { '山堡': 'Dwarven hold' },
    armor: { base: 20, dexCap: 0, type: 'heavy' }, value: 7000,
  },
  rosemetal_breastplate: {
    id: 'rosemetal_breastplate', name: '玫瑰钢胸甲', en: 'Rosemetal Breastplate',
    desc: '粉红色的胸甲，洛伦特贵族出门打仗也要好看。护甲等级 15 + 敏捷（至多 +2）。',
    enTerms: { '玫瑰钢': 'Rosemetal', '洛伦特': 'Lorent' },
    armor: { base: 15, dexCap: 2, type: 'medium' }, value: 1400,
  },
  rose_knight_halfplate: {
    id: 'rose_knight_halfplate', name: '玫瑰骑士半身甲', en: 'Rose Knight Half Plate',
    desc: '只有最有钱的玫瑰骑士穿得起整套玫瑰钢。护甲等级 17 + 敏捷（至多 +2）。',
    enTerms: { '玫瑰骑士': 'Rose Knights', '玫瑰钢': 'Rosemetal' },
    armor: { base: 17, dexCap: 2, type: 'medium' }, value: 6000,
  },
  elven_mail: {
    id: 'elven_mail', name: '先驱精灵链衫', en: 'Precursor Elven Mail',
    desc: '细得像布的链衫，叠起来塞得进一只靴子。算轻甲：护甲等级 13 + 敏捷，隐匿 +1。',
    enTerms: { '先驱精灵': 'Precursor Elves' },
    armor: { base: 13, dexCap: null, type: 'light' }, passives: { skill: { stealth: 1 } }, value: 1200,
  },
  legion_splint: {
    id: 'legion_splint', name: '卡斯塔诺军团条板甲', en: 'Castanorian Legion Splint',
    desc: '古卡斯塔诺军团的甲，铁条上还有当年的红漆。护甲等级 18，不加敏捷。',
    enTerms: { '卡斯塔诺军团': 'Castanorian Legions' },
    armor: { base: 18, dexCap: 0, type: 'heavy' }, value: 1000, era: [1022, 1444],
  },
  ebonsteel_plate: {
    id: 'ebonsteel_plate', name: '乌钢板甲', en: 'Ebonsteel Plate',
    desc: '格鲁迪亚的乌钢甲，挨得住好几发火枪子弹才变形。护甲等级 19，不加敏捷。',
    enTerms: { '格鲁迪亚': 'Gerudia', '乌钢': 'Ebonsteel' },
    armor: { base: 19, dexCap: 0, type: 'heavy' }, value: 2500,
  },
  command_scale: {
    id: 'command_scale', name: '命令秩序鳞甲', en: 'Command-issue Scale',
    desc: '大地精军队的鳞甲，鳞片按尺寸编号，坏一片换一片。护甲等级 15 + 敏捷（至多 +2）。',
    enTerms: { '命令秩序': 'The Command', '大地精': 'Hobgoblin' },
    armor: { base: 15, dexCap: 2, type: 'medium' }, value: 800, era: [1444, 1836],
  },
  hold_shield: {
    id: 'hold_shield', name: '山堡钢盾', en: 'Hold-forged Shield',
    desc: '矮人守隧道的大钢盾，底边能戳进地里。护甲等级 +3。',
    enTerms: { '山堡': 'Dwarven hold' },
    shield: 3, value: 700,
  },
  corintar_shield: {
    id: 'corintar_shield', name: '科琳塔尔红盾', en: 'Corintar Red Shield',
    desc: '科琳塔尔骑士团的盾，红底一把剑，照科琳挡下科尔古斯那一斧的样子画的。护甲等级 +4，免疫恐慌。',
    enTerms: { '科琳塔尔': 'Corintar', '科琳': 'Corin', '科尔古斯': 'Korgus Dookanson' },
    shield: 4, passives: { condImmune: ['frightened'] }, value: 4000, era: [1444, 1836],
  },

  // ---------------------------------------------------------------------------
  // Canon relics.
  calindal: {
    id: 'calindal', name: '卡林达尔', en: 'Calindal, the Gleaming Blade', relic: true,
    desc: '屠龙者埃勒卡斯特斩赤铜龙阿洛斯的先驱咒刃，660 年丢在试炼山，1021 年克拉丽蒙德把它带回刀锋边区；绿潮攻破刀锋堡时碎了。挨一下就闪一下：命中和伤害 +3，施法者用施法属性攻击，可用「护目炽光」。',
    enTerms: { '屠龙者埃勒卡斯特': 'Elecast Dragonsbane', '赤铜龙阿洛斯': 'Alos the Copper', '试炼山': 'Trialmount', '克拉丽蒙德': 'Clarimonde of Oldhaven', '刀锋边区': 'Blademarches', '绿潮': 'Greentide', '刀锋堡': 'Bladeskeep', '先驱': 'Precursor' },
    weapon: { dmg: '2d6', type: 'slashing', props: ['two_handed', 'casting'], bonus: 3 }, grants: ['cleric_sun_flare'], value: 60000, era: [1022, 1836],
  },
  dinatoldir: {
    id: 'dinatoldir', name: '迪纳托迪尔', en: 'Dinătoldir, Piercer of Shadows', relic: true,
    desc: '贾赫的先驱钢长矛，两米半长，破甲如纸，1085 年对上空刃时断成两截。完整的这杆：命中 +5，伤害 +3，魅力 +2。',
    enTerms: { '贾赫': 'Jaher', '空刃': 'Kongren, the Void\'s Edge', '先驱钢': 'Precursor steel' },
    weapon: { dmg: '1d10', type: 'piercing', props: ['two_handed'], bonus: 3 }, passives: { hit: 2, abil: { cha: 2 } }, value: 60000, era: [1022],
  },
  dinatoldir_spearhead: {
    id: 'dinatoldir_spearhead', name: '迪纳托迪尔矛头', en: 'Spearhead of Dinătoldir', relic: true,
    desc: '断矛的前半截，矛头连着一尺长的杆，阿玛里恩的子孙守了三百多年。当短矛使：命中 +3，伤害 +2。',
    enTerms: { '迪纳托迪尔': 'Dinătoldir', '阿玛里恩': 'Amarien Amarienzuir' },
    weapon: { dmg: '1d6', type: 'piercing', props: ['finesse', 'light'], bonus: 2 }, passives: { hit: 1 }, value: 30000, era: [1444],
  },
  saerasyar: {
    id: 'saerasyar', name: '塞拉斯亚尔', en: 'Saerasyar, the Green-Flamed Sword', relic: true,
    desc: '穆纳克勒斯起义时从奴隶主手里夺来的先驱咒刃，一拔出来就烧起蓝绿色的火；拿它作恶的人会和剑一起炸掉。伤害算火焰，命中和伤害 +2。',
    enTerms: { '穆纳克勒斯': 'Munakles', '先驱': 'Precursor' },
    weapon: { dmg: '1d8', type: 'fire', props: ['finesse'], bonus: 2 }, value: 40000, era: [1444, 1836],
  },
  humacs_mace: {
    id: 'humacs_mace', name: '胡马克的圣锤', en: "Humac's Holy Mace", relic: true,
    desc: '始祖卡斯坦埋葬父亲胡马克时，陪葬了他所有东西，只留下这柄圣锤。命中和伤害 +2，豁免 +1。',
    enTerms: { '始祖卡斯坦': 'Castan the Progenitor', '胡马克': 'Humac' },
    weapon: { dmg: '1d6', type: 'bludgeoning', props: [], bonus: 2 }, passives: { saveBonus: 1 }, value: 30000,
  },
  ulrics_lance: {
    id: 'ulrics_lance', name: '乌尔里克之枪', en: "Ulric's Lance", relic: true,
    desc: '第一位狮鹫骑士乌尔里克王子的骑枪，做得极长，好够到天上的龙，在地上从来没人用过。伤害 1d12+2，但地上太笨，命中不加。',
    enTerms: { '乌尔里克': 'Ulric', '狮鹫骑士': 'Griffon knight' },
    weapon: { dmg: '1d12', type: 'piercing', props: ['two_handed'], bonus: 2 }, passives: { hit: -2 }, value: 15000, era: [1022, 1444],
  },
  bjarnrik_sword: {
    id: 'bjarnrik_sword', name: '比亚恩国乌钢剑', en: 'Ebonsteel Sword of Bjarnrík', relic: true,
    desc: '比亚恩国国王加冕用的乌钢剑，格鲁迪亚人说是霜巨人时代的东西。决斗时换上轻柄：灵巧，命中和伤害 +2。',
    enTerms: { '比亚恩国': 'Bjarnrík', '乌钢': 'Ebonsteel', '格鲁迪亚': 'Gerudia', '霜巨人': 'Frost Giants' },
    weapon: { dmg: '1d8', type: 'slashing', props: ['finesse', 'versatile'], bonus: 2 }, value: 25000, era: [1022, 1444],
  },
  moorsword: {
    id: 'moorsword', name: '沼地剑', en: 'The Moorsword', relic: true,
    desc: '术士王战争时威斯特摩尔的马伦·科特西收留流亡的加韦德国王阿伦，得了这把剑首是人鱼尾巴的短剑。命中和伤害 +1，隐匿 +1。',
    enTerms: { '术士王战争': 'War of the Sorcerer-King', '加韦德': 'Gawed', '阿伦': 'Alenn', '威斯特摩尔': 'Westmoor', '马伦·科特西': 'Marlen Cottersea' },
    weapon: { dmg: '1d6', type: 'piercing', props: ['finesse', 'light'], bonus: 1 }, passives: { skill: { stealth: 1 } }, value: 8000, era: [1022, 1444],
  },
  khenak_cuirass: {
    id: 'khenak_cuirass', name: '克纳克胸甲', en: 'Cuirass of the Khenaks', relic: true,
    desc: '威克斯女领主玛格达守克纳克山对付豺狼人，丈夫请阿拉里安给她附魔了这件甲，好让她四肢齐全地回来。护甲等级 16 + 敏捷（至多 +2），每级生命 +1。',
    enTerms: { '威克斯': 'Wex', '玛格达': 'Magda', '克纳克': 'Khenak', '豺狼人': 'Gnoll', '阿拉里安': 'Alarian Singkeep' },
    armor: { base: 16, dexCap: 2, type: 'medium' }, passives: { hpPerLevel: 1 }, value: 20000, era: [1022, 1444],
  },
  ruby_crown: {
    id: 'ruby_crown', name: '洛伦特红宝石王冠', en: 'Ruby Crown of Lorent', relic: true, slot: 'trinket',
    desc: '红宝石领给洛伦南大帝打的玫瑰钢王冠，镶了一百多颗各带附魔的红宝石，正中那颗叫“大玫瑰”。魅力 +2，豁免 +1，游说 +2。',
    enTerms: { '红宝石领': 'Rubyhold', '洛伦南大帝': 'Lorenan the Great', '玫瑰钢': 'Rosemetal', '大玫瑰': 'Great Rose', '洛伦特': 'Lorent' },
    passives: { abil: { cha: 2 }, saveBonus: 1, skill: { persuasion: 2 } }, value: 80000,
  },
  iron_crown_gawed: {
    id: 'iron_crown_gawed', name: '加韦德铁王冠', en: 'Iron Crown of Gawed', relic: true, slot: 'trinket',
    desc: '532 年“鹰王”乌尔里克一世拿下沼泽堡后打的，一圈黑铁，灰白尖刺刻成鹰爪。豁免 +1，免疫恐慌。',
    enTerms: { '加韦德': 'Gawed', '乌尔里克一世': 'Ulric I \'The Eagle\' Gawe', '沼泽堡': 'Bal Mire' },
    passives: { saveBonus: 1, condImmune: ['frightened'] }, value: 40000,
  },
  swansong: {
    id: 'swansong', name: '天鹅歌', en: 'Swansong (Ealánsein)', relic: true, slot: 'trinket',
    desc: '从阿伦蒂尔带来的精灵竖琴，阿拉里安用它唱睡了一整座堡的守军，那地方后来叫塞纳蒂尔。表演 +3，可用「旧冬摇篮曲」。',
    enTerms: { '阿伦蒂尔': 'Aelantir', '阿拉里安': 'Alarian Singkeep', '塞纳蒂尔': 'Seinathíl' },
    passives: { skill: { performance: 3 } }, grants: ['bard_skald_lullaby'], value: 30000, era: [1022, 1444],
  },
  compass_galsheah: {
    id: 'compass_galsheah', name: '加尔希亚号的精灵罗盘', en: 'Elven Compass of the Galsheáh', relic: true, slot: 'trinket',
    desc: '领航者马尔多船上的先驱罗盘，船后来成了凯尔马尔多城的地基，大漂泊一路上它没派上过用场。求生 +3，先攻 +1。',
    enTerms: { '马尔多': 'Maldor the Navigator', '凯尔马尔多': 'Celmaldor', '大漂泊': 'Great Wander', '先驱': 'Precursor' },
    passives: { skill: { survival: 3 }, init: 1 }, value: 12000, era: [1022, 1444],
  },
  pearl_of_dame: {
    id: 'pearl_of_dame', name: '月神明珠', en: 'Pearl of the Dame', relic: true, slot: 'trinket',
    desc: '珍珠边地采珠人捞上来的一颗大珠子，献给了哈拉尔一世，从此是珍珠边地的王权器物。洞悉 +2，游说 +1。',
    enTerms: { '珍珠边地': 'Pearlsedge', '哈拉尔一世': 'Harald I' },
    passives: { skill: { insight: 2, persuasion: 1 } }, value: 20000,
  },
  ladys_eagle: {
    id: 'ladys_eagle', name: '夫人之鹰', en: "Lady's Eagle", relic: true, slot: 'trinket',
    desc: '术士王战争时奥托坎家的莱恩在埃斯玛利亚举的鹰旗，打满了补丁，冲锋总在最前面。豁免 +1，可用「骑士挑战」。',
    enTerms: { '术士王战争': 'War of the Sorcerer-King', '奥托坎家的莱恩': 'Lain of Ottocam', '埃斯玛利亚': 'Esmaria' },
    passives: { saveBonus: 1 }, grants: ['fighter_knight_challenge'], value: 6000, era: [1022, 1444],
  },
  book_of_canrec: {
    id: 'book_of_canrec', name: '坎雷克之书', en: 'Book of Canrec', relic: true, slot: 'trinket',
    desc: '亵渎者坎雷克的书，白色瘟疫死者的魂都绑在里面，翻页时能听见喊声。法术伤害 +2，可用戏法「丧钟」；你受到的光耀伤害加倍。',
    enTerms: { '亵渎者坎雷克': 'Canrec the Defiler', '白色瘟疫': 'White Pestilence' },
    passives: { spellDmg: 2, vuln: ['radiant'] }, grants: ['toll_the_dead'], value: 25000, era: [1022],
  },
  blood_of_ryala: {
    id: 'blood_of_ryala', name: '丽雅拉之血', en: 'Blood of Ryala', relic: true, slot: 'trinket',
    desc: '876 年打的银头冠，做它的女人新婚夜被赫丁教徒丈夫刺死，她的魂附在冠上，逼戴的人去砸“罪窝”。武器伤害 +2，免疫魅惑。',
    enTerms: { '丽雅拉': 'Ryala', '赫丁': 'Hedine' },
    passives: { dmg: 2, condImmune: ['charmed'] }, value: 20000,
  },
  eye_of_the_dame: {
    id: 'eye_of_the_dame', name: '月神之眼', en: 'Eye of the Dame', relic: true, slot: 'trinket',
    desc: '拳头大的泪滴形达姆斯塔尔，474 年黑龙扎马洛特砸塌达梅纳斯议会时丢了，至今没找着。法术攻击、法术 DC、法术伤害各 +2，可用「一撮达姆斯塔尔」；传说用满一年零一天的人会烧成一团火。',
    enTerms: { '达姆斯塔尔': 'Damestear', '黑龙扎马洛特': 'Zaamalot the Black', '达梅纳斯': 'Damenath' },
    passives: { spellHit: 2, spellDc: 2, spellDmg: 2 }, grants: ['wizard_damestear'], value: 100000,
  },

  // ---------------------------------------------------------------------------
  // Trinkets.
  regent_court_token: {
    id: 'regent_court_token', name: '摄政王庭圣牌', en: 'Regent Court Holy Token', slot: 'trinket',
    desc: '神殿门口卖的锡牌，一面卡斯特洛斯，一面阿德安。豁免 +1。',
    enTerms: { '摄政王庭': 'Regent Court', '卡斯特洛斯': 'Castellos', '阿德安': 'Adean' },
    passives: { saveBonus: 1 }, value: 400,
  },
  sun_cult_amulet: {
    id: 'sun_cult_amulet', name: '太阳崇拜日轮护符', en: 'Sun Cult Sun-disc Amulet', slot: 'trinket',
    desc: '布勒瓦尔的铜日轮，背面刻着苏雷尔的名号。火焰伤害减半。',
    enTerms: { '太阳崇拜': 'Bulwari Sun Cult', '布勒瓦尔': 'Bulwar', '苏雷尔': 'Surael' },
    passives: { resist: ['fire'] }, value: 900,
  },
  corinite_red_cloak: {
    id: 'corinite_red_cloak', name: '科琳教红披风', en: 'Corinite Red Cloak', slot: 'trinket',
    desc: '科琳像上那件红披风的样子，科琳教骑士发誓那天披上。免疫恐慌，先攻 +1。',
    enTerms: { '科琳': 'Corin', '科琳教': 'Corinite' },
    passives: { condImmune: ['frightened'], init: 1 }, value: 700, era: [1444, 1836],
  },
  ward_runestone: {
    id: 'ward_runestone', name: '矮人守护符文石', en: 'Dwarven Ward Runestone', slot: 'trinket',
    desc: '一块磨平的玄武岩，刻一个守护符文，缝在衣领里。护甲等级 +1。',
    passives: { ac: 1 }, value: 1500,
  },
  vigor_runestone: {
    id: 'vigor_runestone', name: '矮人坚韧符文石', en: 'Dwarven Vigour Runestone', slot: 'trinket',
    desc: '矿工下井前攥在手心的符文石，据说能多扛一锄头。每级生命 +1。',
    passives: { hpPerLevel: 1 }, value: 1500,
  },
  merchant_citrine: {
    id: 'merchant_citrine', name: '矮人商人的黄水晶', en: "Dwarven Merchant's Citrine", slot: 'trinket',
    desc: '矮人商人兜里揣一块黄水晶图吉利，讲价时拿出来摸一摸。游说 +1，洞悉 +1。',
    passives: { skill: { persuasion: 1, insight: 1 } }, value: 120,
  },
  halfling_luck_knot: {
    id: 'halfling_luck_knot', name: '半身人幸运结', en: 'Halfling Luck Knot', slot: 'trinket',
    desc: '小人国的奶奶们编的红绳结，里面绕了一根烟草叶。敏捷豁免有优势。',
    enTerms: { '小人国': 'Small Country', '半身人': 'Halfling' },
    passives: { saveAdv: ['dex'] }, value: 300,
  },
  elven_cloak: {
    id: 'elven_cloak', name: '月精灵披风', en: 'Moon Elf Cloak', slot: 'trinket',
    desc: '灰绿色，站在树下就看不出边。隐匿 +2。',
    enTerms: { '月精灵': 'Moon Elf' },
    passives: { skill: { stealth: 2 } }, value: 600,
  },
  orc_tusk_string: {
    id: 'orc_tusk_string', name: '兽人獠牙串', en: 'Orcish Tusk String', slot: 'trinket',
    desc: '一串打下来的獠牙，每颗是一场单挑，兽人看见会先数一数。威吓 +2，先攻 +1。',
    enTerms: { '兽人': 'Orc' },
    passives: { skill: { intimidation: 2 }, init: 1 }, value: 150,
  },
  gnomish_spectacles: {
    id: 'gnomish_spectacles', name: '侏儒多片眼镜', en: 'Gnomish Multi-lens Spectacles', slot: 'trinket',
    desc: '五片镜片，转一转换倍数（第六片掉了，侏儒说它本来就是装饰）。调查 +2，察觉 +1。',
    enTerms: { '侏儒': 'Gnome' },
    passives: { skill: { investigation: 2, perception: 1 } }, value: 350,
  },
  gnomish_shock_glove: {
    id: 'gnomish_shock_glove', name: '侏儒电击手套', en: 'Gnomish Shock Glove', slot: 'trinket',
    desc: '手背上一块达姆斯塔尔电池，握拳就放电。可用戏法「电爪」：法术攻击带优势，1d6 闪电伤害（5 级 2d6，11 级 3d6）。',
    enTerms: { '侏儒': 'Gnome', '达姆斯塔尔': 'Damestear' },
    grants: ['shocking_grasp'], value: 700,
  },
  gerudian_mantle: {
    id: 'gerudian_mantle', name: '格鲁迪亚熊皮披肩', en: 'Gerudian Bearskin Mantle', slot: 'trinket',
    desc: '北地斯卡尔德冬天赶路穿的熊皮，熊头还在肩上。寒冷伤害减半。',
    enTerms: { '格鲁迪亚': 'Gerudia', '斯卡尔德': 'Skald' },
    passives: { resist: ['cold'] }, value: 900,
  },
  healers_satchel: {
    id: 'healers_satchel', name: '医者药囊', en: "Healer's Satchel", slot: 'trinket',
    desc: '照贤者加里昂那一派的方子配的药囊：柳树皮、蜂蜜、干净的布。你施放的治疗每次多恢复 2 点，医药 +2。',
    enTerms: { '贤者加里昂': 'Garion the Wise' },
    passives: { healBonus: 2, skill: { medicine: 2 } }, value: 800,
  },
  magisterium_signet: {
    id: 'magisterium_signet', name: '魔导院徽戒', en: 'Magisterium Signet', slot: 'trinket',
    desc: '魔导院正式法师的戒指，镶一颗小达姆斯塔尔，盖印用，也帮着收束法术。法术 DC +1。',
    enTerms: { '魔导院': 'Magisterium', '达姆斯塔尔': 'Damestear' },
    passives: { spellDc: 1 }, value: 2500,
  },
  damestear_ring: {
    id: 'damestear_ring', name: '达姆斯塔尔戒指', en: 'Damestear Ring', slot: 'trinket',
    desc: '戒面一粒满灌的达姆斯塔尔，发着淡蓝的光；空了会变成土绿色。法术攻击 +1，法术伤害 +1。',
    enTerms: { '达姆斯塔尔': 'Damestear' },
    passives: { spellHit: 1, spellDmg: 1 }, value: 3000,
  },
  pocket_watch: {
    id: 'pocket_watch', name: '黄铜怀表', en: 'Brass Pocket Watch', slot: 'trinket',
    desc: '1836 年火车按时刻表跑，人也得跟着表跑。先攻 +2。',
    passives: { init: 2 }, value: 300, era: [1836],
  },
  gas_mask: {
    id: 'gas_mask', name: '奇械防毒面罩', en: "Artificer's Gas Mask", slot: 'trinket',
    desc: '炼狱硫磺厂的工人戴的，两只玻璃眼，一个滤嘴，呼吸声很吵。毒素伤害减半，免疫中毒。',
    enTerms: { '炼狱硫磺': 'Infernal Sulfur', '奇械': 'Artifice' },
    passives: { resist: ['poison'], condImmune: ['poisoned'] }, value: 600, era: [1836],
  },

  // ---------------------------------------------------------------------------
  // Potions and alchemy.
  heroism_draught: {
    id: 'heroism_draught', name: '英雄药剂', en: 'Potion of Heroism',
    desc: '一名同伴获得 2d6+4 点临时生命，并「坚定」5 回合：豁免 +2，免疫恐慌。',
    use: { target: 'ally', tempHp: '2d6+4', apply: { cond: 'steadfast', turns: 5 } }, value: 200,
  },
  haste_potion: {
    id: 'haste_potion', name: '加速药剂', en: 'Potion of Speed',
    desc: '一名同伴「加速」3 回合：护甲等级 +2，攻击动作多打一下。',
    use: { target: 'ally', apply: { cond: 'hasted', turns: 3 }, outside: false }, value: 700,
  },
  stoneskin_potion: {
    id: 'stoneskin_potion', name: '石肤药剂', en: 'Potion of Stoneskin',
    desc: '喝下去皮肤发灰发硬。一名同伴「石肤」5 回合：挥砍、穿刺、钝击伤害减半。',
    use: { target: 'ally', apply: { cond: 'stoneskin', turns: 5 }, outside: false }, value: 900,
  },
  troll_blood_tonic: {
    id: 'troll_blood_tonic', name: '巨魔血酊', en: 'Troll-blood Tonic',
    desc: '巨魔血兑烈酒，腥。一名同伴「再生」4 回合：每回合开始恢复 1d6 生命。',
    enTerms: { '巨魔': 'Troll' },
    use: { target: 'ally', apply: { cond: 'regenerating', turns: 4 }, outside: false }, value: 250,
  },
  damestear_dust: {
    id: 'damestear_dust', name: '达姆斯塔尔粉', en: 'Damestear Dust',
    desc: '抹在牙龈上，一下子劲儿就上来了，可这东西有毒。你受到 2d6 毒素伤害，然后「加速」3 回合：护甲等级 +2，攻击动作多打一下。',
    enTerms: { '达姆斯塔尔': 'Damestear' },
    use: { target: 'self', dmg: '2d6', dmgType: 'poison', apply: { cond: 'hasted', turns: 3 }, outside: false }, value: 300,
  },
  strong_antitoxin: {
    id: 'strong_antitoxin', name: '矮人解毒烈酒', en: 'Dwarven Antitoxin Spirit',
    desc: '蛇脊山脉的矿工拿它治蛇咬。恢复 1d4 生命，解除中毒、麻痹、腐蚀和凋零。',
    enTerms: { '蛇脊山脉': 'Serpentspine Mountains' },
    use: { target: 'ally', heal: '1d4', cleanse: ['poisoned', 'paralyzed', 'corroded', 'withering'] }, value: 80,
  },
  corinite_holy_oil: {
    id: 'corinite_holy_oil', name: '科琳教圣油', en: 'Corinite Holy Oil',
    desc: '抹在刃上，刃会发红。一名同伴「武器附魔」5 回合：武器伤害 +3。',
    enTerms: { '科琳教': 'Corinite' },
    use: { target: 'ally', apply: { cond: 'empowered', turns: 5 }, outside: false }, value: 150, era: [1444, 1836],
  },
  regent_anointing_oil: {
    id: 'regent_anointing_oil', name: '王庭膏油', en: 'Regent Court Anointing Oil',
    desc: '神殿祝过的橄榄油，点在额头上。一名同伴「祝福」4 回合：攻击检定额外 +1d4。',
    enTerms: { '王庭': 'Regent Court' },
    use: { target: 'ally', apply: { cond: 'blessed', turns: 4 }, outside: false }, value: 100,
  },
  blessed_water_jar: {
    id: 'blessed_water_jar', name: '大罐圣水', en: 'Jar of Holy Water',
    desc: '一整罐泼出去。至多 3 个敌人各做敏捷豁免（DC 8+熟练加值+敏捷调整值），失败受 2d6 光耀伤害，成功减半。',
    use: { target: 'enemies', maxTargets: 3, save: { abil: 'dex', half: true }, dcAbil: 'dex', dmg: '2d6', dmgType: 'radiant', outside: false }, value: 120,
  },
  magebane_grenade: {
    id: 'magebane_grenade', name: '破法弹', en: 'Magebane Grenade',
    desc: '瓷壳里装一张法术卷轴和一粒达姆斯塔尔，摔碎了闪光加巨响。至多 3 个敌人各做体质豁免（DC 8+熟练加值+敏捷调整值），失败「晕眩」2 回合，攻击劣势，不造成伤害。',
    enTerms: { '达姆斯塔尔': 'Damestear' },
    use: { target: 'enemies', maxTargets: 3, save: { abil: 'con' }, dcAbil: 'dex', apply: { cond: 'dazed', turns: 2 }, outside: false }, value: 150, era: [1444, 1836],
  },
  goblin_bomb: {
    id: 'goblin_bomb', name: '地精炸药包', en: 'Goblin Satchel Bomb',
    desc: '地精的说法是“反正能炸”。至多 3 个敌人各做敏捷豁免（DC 8+熟练加值+敏捷调整值），失败受 3d6 火焰伤害，成功减半。',
    enTerms: { '地精': 'Goblin' },
    use: { target: 'enemies', maxTargets: 3, save: { abil: 'dex', half: true }, dcAbil: 'dex', dmg: '3d6', dmgType: 'fire', outside: false }, value: 150, era: [1444, 1836],
  },
  kobold_storm_jar: {
    id: 'kobold_storm_jar', name: '狗头人雷瓶', en: 'Kobold Storm Jar',
    desc: '狗头人奇械师把雷暴装进瓦罐里，罐口拿蜡封着。一个敌人做敏捷豁免（DC 8+熟练加值+敏捷调整值），失败受 3d8 闪电伤害，成功减半。',
    enTerms: { '狗头人': 'Kobold', '奇械师': 'Artificer' },
    use: { target: 'enemy', save: { abil: 'dex', half: true }, dcAbil: 'dex', dmg: '3d8', dmgType: 'lightning', outside: false }, value: 150,
  },
  gnomish_smoke_bomb: {
    id: 'gnomish_smoke_bomb', name: '侏儒烟雾弹', en: 'Gnomish Smoke Bomb',
    desc: '一团紫烟，闻着像烧糊的糖。全队「朦胧」3 回合：攻击你们的人都有劣势。',
    enTerms: { '侏儒': 'Gnome' },
    use: { target: 'allies', apply: { cond: 'blurred', turns: 3 }, outside: false }, value: 200,
  },
  sulfur_grenade: {
    id: 'sulfur_grenade', name: '炼狱硫磺弹', en: 'Infernal Sulfur Grenade',
    desc: '黄烟，呛得人流眼泪。至多 3 个敌人各做体质豁免（DC 8+熟练加值+敏捷调整值），失败受 2d6 毒素伤害并「中毒」2 回合，成功伤害减半。',
    enTerms: { '炼狱硫磺': 'Infernal Sulfur' },
    use: { target: 'enemies', maxTargets: 3, save: { abil: 'con', half: true }, dcAbil: 'dex', dmg: '2d6', dmgType: 'poison', apply: { cond: 'poisoned', turns: 2 }, outside: false }, value: 180, era: [1836],
  },

  // ---------------------------------------------------------------------------
  // Scrolls. Save DCs are your spell DC (8 + proficiency if you cannot cast).
  scroll_magic_missile: {
    id: 'scroll_magic_missile', name: '魔法飞弹卷轴', en: 'Scroll of Magic Missile',
    desc: '念完卷轴就烧掉。三枚飞弹一定打中一个敌人，共 3d4+3 力场伤害。',
    use: { target: 'enemy', dmg: '3d4+3', dmgType: 'force', outside: false }, value: 100,
  },
  scroll_fireball: {
    id: 'scroll_fireball', name: '火球卷轴', en: 'Scroll of Fireball',
    desc: '所有敌人做敏捷豁免（DC 为你的法术 DC，不会施法的人 8+熟练加值），失败受 6d6 火焰伤害，成功减半。',
    use: { target: 'enemies', save: { abil: 'dex', half: true }, dmg: '6d6', dmgType: 'fire', outside: false }, value: 500,
  },
  scroll_hold_person: {
    id: 'scroll_hold_person', name: '定身卷轴', en: 'Scroll of Hold Person',
    desc: '一个敌人做感知豁免（DC 为你的法术 DC，不会施法的人 8+熟练加值），失败「麻痹」最多 3 回合。',
    use: { target: 'enemy', save: { abil: 'wis' }, apply: { cond: 'paralyzed', turns: 3 }, outside: false }, value: 300,
  },
  scroll_banishment: {
    id: 'scroll_banishment', name: '放逐卷轴', en: 'Scroll of Banishment',
    desc: '一个敌人做魅力豁免（DC 为你的法术 DC，不会施法的人 8+熟练加值），失败被推出这个世界 2 回合，「震慑」。',
    use: { target: 'enemy', save: { abil: 'cha' }, apply: { cond: 'stunned', turns: 2 }, outside: false }, value: 700,
  },
  scroll_mass_healing: {
    id: 'scroll_mass_healing', name: '群体治疗卷轴', en: 'Scroll of Mass Healing',
    desc: '全队每人恢复 2d8 点生命，倒地的人也能救起来。',
    use: { target: 'allies', heal: '2d8', revive: true, outside: false }, value: 450,
  },
  scroll_dispel: {
    id: 'scroll_dispel', name: '解咒卷轴', en: 'Scroll of Dispel Magic',
    desc: '解除全队身上所有负面状态。',
    use: { target: 'allies', cleanse: 'all', outside: false }, value: 300,
  },

  // ---------------------------------------------------------------------------
  // Food and drink.
  rubenaire_red: {
    id: 'rubenaire_red', name: '鲁本奈尔红酒', en: 'Rubenaire Red',
    desc: '洛伦特最常见的红酒，一股草药和泥土味。恢复 1d4 生命；战斗中喝还能「坚定」3 回合：豁免 +2，免疫恐慌。',
    enTerms: { '鲁本奈尔': 'Rubenaire', '洛伦特': 'Lorent' },
    use: { target: 'ally', heal: '1d4', apply: { cond: 'steadfast', turns: 3 } }, value: 15,
  },
  krakzol_ale: {
    id: 'krakzol_ale', name: '酒匠大厅烈麦酒', en: 'Krakzol Ale',
    desc: '酒匠大厅的矮人酿的，东洲那帮醉拳师父也只喝这个。恢复 1d4 生命；战斗中喝再得 1d8 点临时生命。',
    enTerms: { '酒匠大厅': 'Hul-az-Krakazol', '东洲': 'Haless' },
    use: { target: 'ally', heal: '1d4', tempHp: '1d8' }, value: 12,
  },
  candor_ale: {
    id: 'candor_ale', name: '坎多尔酒', en: 'Candor Ale',
    desc: '铜石镇铜壶里酿的淡色烈酒，甜，后劲大。你恢复 1d6 生命并得 2d6 点临时生命，但「晕眩」2 回合，攻击劣势。',
    enTerms: { '铜石镇': 'Coppertown' },
    use: { target: 'self', heal: '1d6', tempHp: '2d6', apply: { cond: 'dazed', turns: 2 } }, value: 20,
  },
  halfling_pie: {
    id: 'halfling_pie', name: '半身人肉派', en: 'Halfling Meat Pie',
    desc: '小人国的派，油纸包着，还是温的，半身人会塞给你第二块。恢复 1d6+2 生命。',
    enTerms: { '小人国': 'Small Country', '半身人': 'Halfling' },
    use: { target: 'ally', heal: '1d6+2' }, value: 8,
  },
  yanshen_tea: {
    id: 'yanshen_tea', name: '烟州大叶茶', en: 'Yanshen Large-leaf Tea',
    desc: '烟州人说精灵的小叶茶是从他们这儿偷去改的。恢复 1d4 生命，解除恐慌和晕眩。',
    enTerms: { '烟州': 'Yanshen' },
    use: { target: 'ally', heal: '1d4', cleanse: ['frightened', 'dazed'] }, value: 25,
  },

  // ---------------------------------------------------------------------------
  // Valuables and curios: sell them.
  dame_pennies: {
    id: 'dame_pennies', name: '一袋月神银便士', en: 'Purse of Silver Dames',
    desc: '安本纳尔的银便士，正面月亮，背面法师和平的鸽子。一袋二十来枚。',
    enTerms: { '安本纳尔': 'Empire of Anbennar', '法师和平': "Mages' Peace" },
    value: 20,
  },
  gold_crowns: {
    id: 'gold_crowns', name: '一卷金克朗', en: 'Roll of Gold Crowns',
    desc: '帝国的金币，拿蜡纸卷成一卷，十枚。俗话说月神之冠城里只有银便士、金克朗和乞丐。',
    enTerms: { '克朗': 'Crown (currency)', '月神之冠': 'Damescrown' },
    value: 100,
  },
  small_country_coins: {
    id: 'small_country_coins', name: '一串小人国铜币', en: 'String of Small Country Coins',
    desc: '铜克伦、黄铜面包币、方角的鹿币串在一根绳上。一个面包币刚好买一条面包。',
    enTerms: { '小人国': 'Small Country' },
    value: 4,
  },
  castanorian_gold: {
    id: 'castanorian_gold', name: '卡斯塔诺古金币', en: 'Old Castanorian Gold Coin',
    desc: '古帝国的金币，皇帝的脸磨得只剩个鼻子。收古钱的比熔金子的出价高。',
    enTerms: { '卡斯塔诺': 'Castanor' },
    value: 40,
  },
  asra_bank_draft: {
    id: 'asra_bank_draft', name: '阿斯拉银行汇票', en: 'Asra Bank Draft',
    desc: '矮人银行开的汇票，五百金，盖三个印，任何一家分号都认。',
    enTerms: { '阿斯拉': 'Asra' },
    value: 500, era: [1444, 1836],
  },
  deranne_share: {
    id: 'deranne_share', name: '德冉恩贸易公司股票', en: 'Deranne Trading Company Share',
    desc: '一张印得很漂亮的纸，上周值三百金，这周要看报纸。',
    enTerms: { '德冉恩贸易公司': 'Deranne Trading Company' },
    value: 300, era: [1836],
  },
  vanbury_bond: {
    id: 'vanbury_bond', name: '范伯里行会债券', en: 'Vanbury Guild Bond',
    desc: '范伯里行会借钱打的条子，年息六分，到期日还早。',
    enTerms: { '范伯里行会': 'Vanbury Guild' },
    value: 250, era: [1444, 1836],
  },
  west_ruby: {
    id: 'west_ruby', name: '红宝石领的红宝石', en: 'Rubyhold "West Ruby"',
    desc: '红宝石领的红宝石，矮人管它叫“西红宝”。别的矮人看见它会想起散了的东西，不太爱买。',
    enTerms: { '红宝石领': 'Rubyhold' },
    value: 400,
  },
  rose_brooch: {
    id: 'rose_brooch', name: '洛伦特玫瑰胸针', en: 'Lorentish Rose Brooch',
    desc: '金托子上一朵红珐琅玫瑰，洛伦特贵妇丢了会派人找的那种。',
    enTerms: { '洛伦特': 'Lorent' },
    value: 150,
  },
  precursor_fragment: {
    id: 'precursor_fragment', name: '先驱精灵遗物残件', en: 'Precursor Relic Fragment',
    desc: '一块看不出用处的先驱合金，摸着微温。编年史家会按件收，钱多钱少看成色。',
    enTerms: { '先驱精灵': 'Precursor Elves', '编年史家会': 'Order of Chroniclers' },
    value: 150,
  },
  calindal_shard: {
    id: 'calindal_shard', name: '卡林达尔碎片', en: 'Shard of Calindal', relic: true,
    desc: '瓦洛克的锤子砸碎卡林达尔时溅出来的一片，碰一下还会闪。守刃僧团在暗地里收这些碎片。',
    enTerms: { '瓦洛克': 'Varok Bladebreaker', '卡林达尔': 'Calindal', '守刃僧团': 'Order of the Blade Stewards' },
    value: 5000, era: [1444],
  },
  cairn_stone: {
    id: 'cairn_stone', name: '试炼山宝石冢的宝石', en: 'Gem from the Trialmount Cairn',
    desc: '卡斯坦试炼里每个候选人都要往“人类之冠”宝石冢上添一块，这块是从那儿掉下来的。拿去卖不太吉利。',
    enTerms: { '卡斯坦试炼': 'Trials of Castan', '人类之冠': 'Crown of mankind (gem cairn)', '试炼山': 'Trialmount' },
    value: 300,
  },
  gem_of_asra: {
    id: 'gem_of_asra', name: '阿斯拉宝石', en: 'Gem of Asra', relic: true,
    desc: '众矮人王冠上的七颗宝石之一，粉色玛瑙，有半身人的拳头大。1410 年才找回来，存在阿斯拉银行的库里。',
    enTerms: { '众矮人王冠': 'Dwarovkron', '阿斯拉银行': 'Asra Bank' },
    value: 25000,
  },
  sapphire_key: {
    id: 'sapphire_key', name: '纳斯蓝宝石钥匙', en: 'Sapphire Key of Nath', relic: true,
    desc: '始祖卡斯坦送给纳斯河部落的两把钥匙之一，没有它的军团进不了卡斯托纳斯。渡鸦王拿它进了巴尔多斯坦，之后一直锁在科乌里亚的库里。',
    enTerms: { '始祖卡斯坦': 'Castan the Progenitor', '卡斯托纳斯': 'Castonath', '渡鸦王': 'Raven King', '巴尔多斯坦': 'Bal Dostan', '科乌里亚': 'Corvuria' },
    value: 40000,
  },
  lunetein_carillon: {
    id: 'lunetein_carillon', name: '卢内泰因号钟琴', en: 'Carillon of the Luneteín', relic: true,
    desc: '精灵从阿伦蒂尔带上船的一组小钟，脆到没有法师护着就不敢敲。后来归了伊贝瓦尔。',
    enTerms: { '阿伦蒂尔': 'Aelantir', '伊贝瓦尔': 'Ibevar' },
    value: 8000, era: [1022, 1444],
  },
};
