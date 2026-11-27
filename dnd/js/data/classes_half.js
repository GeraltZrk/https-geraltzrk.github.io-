// The half-casters: paladin, ranger, artificer. Format: docs/DATA_GUIDE.md.
// Class features live in abilities_half.js, spells in abilities_spells.js. Half-casters get slots from level 2
// and top out at 3rd-level spells (rules.js HALF table). `en` / `enTerms` carry English source names for the
// translation pass. byLevel arrays are indexed by character level (index 0 unused).

export const CLASSES_HALF = {
  // ------------------------------------------------------------------ 圣武士
  paladin: {
    id: 'paladin', name: '圣武士', en: 'Paladin', short: '穿重甲作战，命中时可用神力重创敌人',
    desc: '你以誓言侍奉神明，披重甲，持剑盾，也会治伤。命中敌人时，可以消耗法术位发动至圣斩，把神力灌入武器。',
    era: {
      1022: '凯伦·长枪的骑士道刚传开，蓝宝石之眼骑士团去年才在银镜湖边立起来，传说第一个圣武士就是它的创始人之一、信卡斯特洛斯的“正直者”德万爵士。',
      1444: '阿德蕾西娅骑士团还在给皇帝当卫队，可二十年前一半年轻骑士违令去了东坎诺；那边科琳刚死在卡斯托纳斯，她的同伴正把自己编成科琳塔尔骑士团。',
      1836: '科琳教立教三百多年，圣武士多半是科琳教徒，也有守着摄政王庭的老派骑士团；仗靠步枪队打，立了誓的人照样走在最前面。',
    },
    enTerms: { '凯伦·长枪': 'Caylen Longlance', '蓝宝石之眼骑士团': 'Order of the Sapphire Eye', '银镜湖': 'Lake Silvermere', '卡斯特洛斯': 'Castellos', '“正直者”德万爵士': 'Ser Devan the Righteous', '阿德蕾西娅骑士团': 'Orda Aldresia', '东坎诺': 'Escann', '科琳': 'Corin', '卡斯托纳斯': 'Castonath', '科琳塔尔骑士团': 'Corintar Order', '科琳教': 'Corinite', '摄政王庭': 'Regent Court' },
    hitDie: 10, primary: 'str', saves: ['wis', 'cha'], caster: 'half', spellAbility: 'cha', tags: ['martial', 'caster', 'divine'],
    abilOrder: ['str', 'cha', 'con', 'wis', 'dex', 'int'],
    skills: { n: 2, from: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'] },
    startEquip: { weapon: 'longsword', armor: 'chain_mail', offhand: 'shield', trinket: null },
    startItems: { healing_potion: 1 }, startGold: 15,
    resources: {
      lay: { name: '圣疗', byLevel: [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4], rest: 'long' },
      oath: { name: '引导神力', byLevel: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3], rest: 'short' },
    },
    features: {
      1: ['paladin_lay_on_hands', 'paladin_divine_sense', 'paladin_fighting_style'],
      2: ['paladin_divine_smite', 'bless'],
      3: ['paladin_divine_health', 'command'],
      4: ['shield_of_faith'],
      5: ['paladin_extra_attack', 'aid'],
      6: ['paladin_aura_protection'],
      7: ['paladin_aura_courage'],
      8: ['paladin_cleansing_touch'],
      9: ['battle_prayer', 'light_of_surael'],
      10: [],
      11: ['paladin_radiant_strikes'],
      12: ['blinding_smite'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'paladin_aldresia', name: '阿德蕾西娅骑士', en: 'Knight of the Orda Aldresia',
        desc: '骑士团以白色瘟疫年间战死的骑士阿德蕾西娅命名，专出咒刃骑士：剑就是法器，这门剑艺叫迪兰贝。他们立誓不领封地、不受爵位、不娶不嫁，给皇帝守门，跟魔导院一直不对付。',
        enTerms: { '白色瘟疫': 'White Pestilence', '阿德蕾西娅': 'Aldresia', '咒刃骑士': 'Arcane knight', '迪兰贝': 'Diranbe', '魔导院': 'Magisterium' },
        features: { 3: ['paladin_aldresian_drumbeat'], 6: ['paladin_aldresian_arc'], 10: ['paladin_aldresian_tearite'] },
      },
      {
        id: 'paladin_righteous', name: '正直之誓', en: 'Oath of the Righteous (Ser Devan; the Corintar)',
        desc: '蓝宝石之眼的“正直者”德万爵士走的路数：看见恶事，先报名号，再动手。1444 年以后，科琳塔尔骑士团接过了这一路，信条只有一句：善而不行，等于没有。',
        enTerms: { '蓝宝石之眼': 'Order of the Sapphire Eye', '“正直者”德万爵士': 'Ser Devan the Righteous', '科琳塔尔骑士团': 'Corintar Order', '信条': 'The Corinite Creed' },
        features: { 3: ['paladin_righteous_vow', 'paladin_crusader_abjure'], 6: ['paladin_crusader_enmity'], 10: ['paladin_crusader_all_in'] },
      },
    ],
  },

  // ------------------------------------------------------------------ 游侠
  ranger: {
    id: 'ranger', name: '游侠', en: 'Ranger', short: '标记猎物，用弓箭或近身兵器追击',
    desc: '猎人、斥候和荒野向导里都有游侠。你能在远处用弓，也能拔刀近战。你掌握的自然法术能标记猎物、止血，还能唤起藤蔓缠住敌人。',
    era: {
      1022: '荒野里的事多半归法拉赫的神殿管，披绿斗篷的猎人祭司替偏远村子打怪；北边马尔霍德的贵族从巨龙苏醒那时起就骑狮鹫。',
      1444: '东坎诺遍地兽人和废墟，冒险团里最缺认路的斥候；隔壁深林的木精灵氏族刚结成翠绿盟约。他们的弓手不跟外人多说话。',
      1836: '游侠多半在给军队当斥候、给勘测队领路，背线膛枪；北方联盟把法拉赫的老林子砍了盖工厂，神殿的人还守着剩下的。',
    },
    enTerms: { '法拉赫': 'Falah', '马尔霍德': 'Marrhold', '巨龙苏醒': 'Dragonwake', '狮鹫': 'Griffon', '东坎诺': 'Escann', '冒险团': 'Adventurer company', '深林': 'Deepwoods', '木精灵': 'Wood Elf', '翠绿盟约': 'Verdant Pact', '北方联盟': 'Northern League' },
    hitDie: 10, primary: 'dex', saves: ['str', 'dex'], caster: 'half', spellAbility: 'wis', tags: ['martial', 'caster', 'nature'],
    abilOrder: ['dex', 'wis', 'con', 'str', 'int', 'cha'],
    skills: { n: 3, from: ['animal', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'] },
    startEquip: { weapon: 'longbow', armor: 'studded', offhand: null, trinket: null },
    startItems: { healing_potion: 2 }, startGold: 12,
    resources: {
      focus: { name: '猎技', byLevel: [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4], rest: 'short' },
    },
    features: {
      1: ['ranger_aim', 'ranger_wilderness', 'ranger_marksman'],
      2: ['hunters_mark', 'healing_spirit'],
      3: ['ensnaring_strike'],
      4: ['hail_of_thorns'],
      5: ['ranger_extra_attack'],
      6: ['ranger_land_stride'],
      7: ['ranger_volley'],
      8: ['ranger_evasive'],
      9: ['lightning_arrow', 'conjure_barrage'],
      10: ['ranger_deadeye'],
      11: ['ranger_slayer'],
      12: ['ranger_feral_senses'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'ranger_falah', name: '法拉赫猎手', en: 'Hunter of Falah',
        desc: '狩猎女神法拉赫的猎人祭司，替偏远的村子打怪物，也管着林子不被砍光。她的神殿看着像猎屋，闻着像屠宰场，箭库里什么怪配什么箭。',
        enTerms: { '法拉赫': 'Falah' },
        features: { 3: ['ranger_falah_cloak', 'ranger_falah_bane_arrow'], 6: ['ranger_falah_first_hunt'], 10: ['ranger_falah_grand_hunt'] },
      },
      {
        id: 'ranger_griffon', name: '狮鹫骑手', en: 'Griffon rider of Marrhold',
        desc: '马尔霍德是一座矮人丢下的山堡，住的是人。“狮鹫王子”乌尔里克当年杀了野狮鹫，留下蛋，孵出第一批坐骑。从那以后，骑狮鹫的人在马尔霍德说了算。',
        enTerms: { '马尔霍德': 'Marrhold', '狮鹫': 'Griffon', '“狮鹫王子”乌尔里克': 'Ulric, the Griffon Prince' },
        features: { 3: ['ranger_griffon_bond', 'ranger_griffon_strike'], 6: ['ranger_griffon_screech'], 10: ['ranger_griffon_dive'] },
      },
    ],
  },

  // ------------------------------------------------------------------ 奇械师
  artificer: {
    id: 'artificer', name: '奇械师', en: 'Artificer', short: '制作药剂、炮台和带电的兵器',
    desc: '奇械师用工具施展魔法。你能照图纸配出药剂，也能装配炸瓶、炮台和通电的枪。遇到同一个难题，你常常先伸手去拿扳手。',
    era: {
      1022: '还没有“奇械师”这个叫法：尼姆斯科德的侏儒在岛上挖达姆斯塔尔、造器械，跟狗头人打了几百年，矮人山堡里的符文匠把字刻在门上和甲上。',
      1444: '尼姆斯科德的工程学院管这门手艺叫奇械术，懂的人不多；这一年在卡斯托纳斯，一个侏儒枪匠的步枪和小炮替科琳开了路。',
      1836: '奇械师成了一门正经行当，做火驱枪、修机械人、造本世纪初才飞上天的飞艇；黑火药叛乱以前，帝国把新奇械管得很严。',
    },
    enTerms: { '奇械师': 'Artificer', '尼姆斯科德': 'Nimscodd', '达姆斯塔尔': 'Damestear', '狗头人': 'Kobold', '山堡': 'Dwarven hold', '符文匠': 'Runesmith', '奇械术': 'Artificery', '卡斯托纳斯': 'Castonath', '科琳': 'Corin', '火驱枪': 'Sparkdrive Rifle', '机械人': 'Mechanim', '飞艇': 'Airship', '黑火药叛乱': 'Blackpowder Rebellion', '帝国': 'Empire of Anbennar' },
    hitDie: 8, primary: 'int', saves: ['con', 'int'], caster: 'half', spellAbility: 'int', tags: ['caster', 'arcane', 'artificer'],
    abilOrder: ['int', 'con', 'dex', 'wis', 'str', 'cha'],
    skills: { n: 2, from: ['arcana', 'history', 'investigation', 'medicine', 'nature', 'perception', 'sleight'] },
    startEquip: { weapon: 'wand', armor: 'scale', offhand: 'shield', trinket: null },
    startItems: { healing_potion: 1, alchemist_fire: 1 }, startGold: 15,
    resources: {
      gadgets: { name: '备料', byLevel: [0, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], rest: 'short' },
      charge: { name: '蓄能', byLevel: [0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4], rest: 'short', minLevel: 3 },
    },
    features: {
      1: ['fire_bolt', 'artificer_bomb', 'artificer_tinkering'],
      2: ['artificer_tincture', 'magic_missile'],
      3: ['field_repair', 'faerie_fire'],
      4: ['artificer_calibration'],
      5: ['artificer_repeater', 'damestear_flare'],
      6: ['artificer_flashbang'],
      7: ['artificer_genius', 'magic_weapon'],
      8: ['artificer_veteran'],
      9: ['haste', 'explosive_runes'],
      10: [],
      11: ['artificer_masterwork'],
      12: ['artificer_soul'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'artificer_runesmith', name: '符文匠', en: 'Dwarven runesmith',
        desc: '矮人的魔法不靠念，靠刻：一个符文就是一个字，多半刻在石头和金属上。符文匠给山堡刻门，给战士刻甲，刻错一笔，整块料就废了。',
        enTerms: { '符文': 'Runic Magic', '山堡': 'Dwarven hold' },
        features: { 3: ['artificer_runesmith_armor', 'artificer_runesmith_ward'], 6: ['artificer_runesmith_fire'], 10: ['artificer_runesmith_stone'] },
      },
      {
        id: 'artificer_inventor', name: '侏儒机巧师', en: 'Gnomish tinker (Nimscodd; later the Brilliant Inventors)',
        desc: '尼姆斯科德一路传下来的侏儒手艺：先试，再量，再记。最后才拿去打仗。后来的“璀璨发明家”一派就出在这里，火驱枪是他们最出名的东西。',
        enTerms: { '尼姆斯科德': 'Nimscodd', '璀璨发明家': 'Philosophy of Brilliant Inventors', '火驱枪': 'Sparkdrive Rifle' },
        features: { 3: ['artificer_inventor_turret'], 6: ['artificer_inventor_sparkdrive'], 10: ['artificer_inventor_overload'] },
      },
    ],
  },
};
