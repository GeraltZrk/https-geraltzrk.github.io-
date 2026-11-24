// The four non-casting classes: fighter, barbarian, rogue, monk. Format: docs/DATA_GUIDE.md.
// Abilities live in abilities_martial.js. `en` / `enTerms` hold English source names for the translation pass.
// byLevel arrays are indexed by character level (index 0 unused).

export const CLASSES_MARTIAL = {
  // -------------------------------------------------------------------------
  fighter: {
    id: 'fighter', name: '战士', en: 'Fighter',
    short: '剑、盾、甲，外加一身旧伤',
    desc: '靠兵器吃饭的人：骑士、扈从、佣兵、守城的、押车的。挨得住，打得稳，一口气能出好几下。全队最不容易倒的通常是他。',
    era: {
      1022: '巫师王战争刚打完，自由领域联盟的老兵各回各家。长枪凯伦讲的“骑士道”才传开没几年，多数战士还只是领主的扈从和雇来的矛手。',
      1444: '紫丁香战争打了近百年，去年才停。没仗可打的骑士和佣兵结成冒险团，往东坎诺去找兽人、地盘和饷。',
      1836: '步枪成了寻常兵器，当兵的先学装弹再学劈刺。冒险者这一行还在，行善的、图名的、卖剑的都算。',
    },
    enTerms: { '巫师王战争': 'War of the Sorcerer-King', '自由领域联盟': 'League of Free Realms', '长枪凯伦': 'Caylen Longlance', '紫丁香战争': 'Lilac Wars', '冒险团': 'Adventurer company', '东坎诺': 'Escann' },
    hitDie: 10, primary: 'str', saves: ['str', 'con'], caster: null, tags: ['martial'],
    abilOrder: ['str', 'con', 'dex', 'wis', 'cha', 'int'],
    skills: { n: 2, from: ['athletics', 'perception', 'intimidation', 'survival', 'animal', 'history', 'insight', 'acrobatics'] },
    startEquip: { weapon: 'longsword', armor: 'chain_mail', offhand: 'shield', trinket: null },
    startItems: { healing_potion: 2 }, startGold: 15,
    resources: {
      stamina: { name: '战技', byLevel: [0, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5], rest: 'short' },
      surge: { name: '动作如潮', byLevel: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], rest: 'short' },
    },
    features: {
      1: ['fighter_second_wind', 'fighter_weapon_drill'],
      2: ['fighter_action_surge'],
      3: ['fighter_trip_attack'],
      4: ['fighter_sweep'],
      5: ['fighter_extra_attack'],
      6: ['fighter_sunder'],
      7: ['fighter_weapon_mastery'],
      8: ['fighter_improved_critical'],
      9: ['fighter_indomitable'],
      10: [],
      11: ['fighter_extra_attack_2'],
      12: ['fighter_surge_mastery'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'fighter_knight', name: '誓约骑士', en: 'Knight (chivalric orders, vow before Adean)',
        desc: '在“好骑士”阿德安面前发过誓的人，守的是长枪凯伦传下的规矩。蓝宝石之眼、阿德蕾西娅这些骑士团里都是这种人，弗恩的飞龙骑手和马尔霍德的狮鹫骑士也认这一套。',
        enTerms: { '阿德安': 'Adean', '好骑士': 'The Good Knight', '长枪凯伦': 'Caylen Longlance', '蓝宝石之眼': 'Order of the Sapphire Eye', '阿德蕾西娅': 'Orda Aldresia', '弗恩': 'Verne', '飞龙骑手': 'Wyvern riders', '马尔霍德': 'Marrhold', '狮鹫骑士': 'Griffon Knights' },
        features: { 3: ['fighter_knight_challenge'], 6: ['fighter_knight_lance_charge'], 10: ['fighter_knight_vow'] },
      },
      {
        id: 'fighter_company', name: '连队老兵', en: 'Company veteran (mercenary and adventurer companies)',
        desc: '拿饷打仗的人，认队长和合同，不认纹章。钴蓝兵团被加韦德国王赖了饷，干脆自己去东坎诺打下一块地；这一行的人都记得那句“石头烧不着，钴蓝也烧不着”。',
        enTerms: { '钴蓝兵团': 'Cobalt Company', '加韦德': 'Gawed', '东坎诺': 'Escann' },
        features: { 3: ['fighter_company_rally'], 6: ['fighter_company_old_hand'], 10: ['fighter_company_kill_order'] },
      },
    ],
  },

  // -------------------------------------------------------------------------
  barbarian: {
    id: 'barbarian', name: '野蛮人', en: 'Barbarian',
    short: '不穿甲，靠一口怒气顶着',
    desc: '打起来不管不顾的人。狂暴的时候刀砍在身上只算一半，自己的斧子却更重。没什么花样，胜在血厚、手狠、先动。',
    era: {
      1022: '黑冰纪元刚过去，格鲁迪亚的掠夺者在南方海岸留下了瑞维利亚这样的王国，奥拉夫人的长船还在出海。兽人的战帮还在蛇脊山脉底下跟矮人打，地面上没几个人见过。',
      1444: '比亚恩国已经废了掠夺的旧俗，只剩个别港口还偷偷出船。绿潮把兽人战帮带上了地面，东坎诺到处是只认拳头的氏族。',
      1836: '灰兽人和人类合成的格罗姆巴尔王国压着北方，峡湾里住的是奥拉夫人和半兽人。掠夺只剩地名，海图上还印着“掠夺者海”。',
    },
    enTerms: { '黑冰纪元': 'Era of Black Ice', '格鲁迪亚': 'Gerudia', '掠夺者': 'Reavers', '瑞维利亚': 'Reveria', '奥拉夫人': 'Olavish', '战帮': 'Orcish warband', '蛇脊山脉': 'Serpentspine Mountains', '比亚恩国': 'Bjarnrík', '绿潮': 'Greentide', '东坎诺': 'Escann', '格罗姆巴尔': 'Grombar', '掠夺者海': "Reaver's Sea" },
    hitDie: 12, primary: 'str', saves: ['str', 'con'], caster: null, tags: ['martial'],
    abilOrder: ['str', 'con', 'dex', 'wis', 'cha', 'int'],
    skills: { n: 2, from: ['athletics', 'survival', 'intimidation', 'perception', 'animal', 'nature'] },
    startEquip: { weapon: 'greataxe', armor: null, offhand: null, trinket: null },
    startItems: { healing_potion: 2 }, startGold: 10,
    resources: {
      rage: { name: '狂暴', byLevel: [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5], rest: 'long' },
      fury: { name: '蛮劲', byLevel: [0, 0, 0, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5], rest: 'short' },
    },
    features: {
      1: ['barbarian_rage', 'barbarian_unarmored'],
      2: ['barbarian_reckless'],
      3: [],
      4: ['barbarian_war_cry'],
      5: ['barbarian_extra_attack'],
      6: [],
      7: ['barbarian_shrug_off'],
      8: ['barbarian_feral_instinct'],
      9: ['barbarian_brutal_critical'],
      10: [],
      11: ['barbarian_mindless_rage'],
      12: ['barbarian_primal_might'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'barbarian_reaver', name: '掠夺者', en: 'Gerudian Reaver',
        desc: '格鲁迪亚的海上强人，长船靠岸，抢完就走。出门前要听斯卡尔德念一段故事壮胆。黑冰纪元里，他们从巨龙海岸一路抢到达梅斯海德。',
        enTerms: { '格鲁迪亚': 'Gerudia', '斯卡尔德': 'Skald (Skald-Priests)', '黑冰纪元': 'Era of Black Ice', '巨龙海岸': 'Dragon Coast', '达梅斯海德': 'Dameshead' },
        features: { 3: ['barbarian_reaver_frenzy'], 6: ['barbarian_reaver_north_blood'], 10: ['barbarian_reaver_shieldbreaker'] },
      },
      {
        id: 'barbarian_warband', name: '战帮斗士', en: 'Orcish warband fighter',
        desc: '兽人战帮的打法和规矩：东西打得赢才算你的，位子靠荣誉决斗来换，死在战场外头是丢人的事。够硬的外族人也能在战帮里占一个位置。1424 年绿潮之前，地面上难得见到。',
        enTerms: { '战帮': 'Orcish warband', '荣誉决斗': "Ozarm'Chadash (duel for honor)", '绿潮': 'Greentide' },
        features: { 3: ['barbarian_warband_duel'], 6: ['barbarian_warband_scars'], 10: ['barbarian_warband_killing_blow'] },
      },
    ],
  },

  // -------------------------------------------------------------------------
  rogue: {
    id: 'rogue', name: '游荡者', en: 'Rogue',
    short: '一刀只捅一次，但捅在要紧处',
    desc: '贼、密探、探子、开锁的。正面打不过谁，所以从不正面打：先藏，再等同伴缠住对方，然后一下偷袭。检定上的事多半也归他。',
    era: {
      1022: '半身人芬尼克·影手靠偷和骗成了巫师王战争的英雄，刚被推举为维斯沃尔国王。小人国的年轻人有一半想学他。',
      1444: '维斯沃尔起义失败才二十年，城被洛伦特和加韦德一分为二，城里人把密探撒向各地等机会。各地的贼拜的是影舞者娜塔琳。',
      1836: '暗影盟约早就不只接杀人的活，传说有些政府背后站着他们的人。买消息和禁货的地方叫“暗影集市”。',
    },
    enTerms: { '芬尼克·影手': 'Finnic Shadowhand (Finnic síl Vis)', '巫师王战争': 'War of the Sorcerer-King', '维斯沃尔': 'Viswall', '小人国': 'Small Country', '维斯沃尔起义': 'Viswall Rebellion', '洛伦特': 'Lorent', '加韦德': 'Gawed', '影舞者娜塔琳': 'Nathalyne, the Shadowdancer', '暗影盟约': 'Shadow Covenant', '暗影集市': 'Shadow Market' },
    hitDie: 8, primary: 'dex', saves: ['dex', 'int'], caster: null, tags: ['martial', 'rogue'],
    abilOrder: ['dex', 'con', 'int', 'cha', 'wis', 'str'],
    skills: { n: 4, from: ['stealth', 'sleight', 'perception', 'deception', 'acrobatics', 'investigation', 'insight', 'persuasion', 'intimidation', 'athletics'] },
    startEquip: { weapon: 'rapier', armor: 'leather', offhand: null, trinket: null },
    startItems: { healing_potion: 1 }, startGold: 20,
    resources: {
      tricks: { name: '诡计', byLevel: [0, 0, 0, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], rest: 'short' },
    },
    features: {
      1: ['rogue_sneak_attack', 'rogue_expertise'],
      2: ['rogue_hide'],
      3: ['rogue_dirty_trick'],
      4: ['rogue_vital_strike'],
      5: ['rogue_uncanny_dodge'],
      6: [],
      7: ['rogue_evasion'],
      8: ['rogue_wyvern_venom'],
      9: ['rogue_street_wise'],
      10: [],
      11: ['rogue_reliable_talent'],
      12: ['rogue_elusive'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'rogue_shadowhand', name: '影手', en: 'Shadowhand (after Finnic Shadowhand; halfling thieves and Viswall agents)',
        desc: '学的是芬尼克·影手那一路：摸东西、翻墙、脱身。这位半身人靠这手本事在巫师王战争里出了名，后来当了维斯沃尔的国王。1423 年城破之后，维斯沃尔派往各地的密探也是这个路数。',
        enTerms: { '芬尼克·影手': 'Finnic Shadowhand (Finnic síl Vis)', '巫师王战争': 'War of the Sorcerer-King', '维斯沃尔': 'Viswall' },
        features: { 3: ['rogue_shadowhand_light_fingers', 'rogue_shadowhand_dye_bomb'], 6: ['rogue_shadowhand_second_story'], 10: ['rogue_shadowhand_vanish'] },
      },
      {
        id: 'rogue_shadowdancer', name: '影舞者', en: 'Shadowdancer (Nathalyne; Shadow Covenant)',
        desc: '刺客和密探的路子，带一点东洲的影术。1162 年以后，这行人拜摄政王庭的盗贼女神、影舞者娜塔琳；暗影盟约的杀手用的也是这一套。更早的年头这门手艺没有名字，只有师父。',
        enTerms: { '东洲': 'Haless', '影术': 'Shadowmancy', '摄政王庭': 'Regent Court', '影舞者娜塔琳': 'Nathalyne, the Shadowdancer', '暗影盟约': 'Shadow Covenant' },
        features: { 3: ['rogue_shadowdancer_cloak'], 6: ['rogue_shadowdancer_assassinate'], 10: ['rogue_shadowdancer_death_mark'] },
      },
    ],
  },

  // -------------------------------------------------------------------------
  monk: {
    id: 'monk', name: '武僧', en: 'Monk',
    short: '一口气，一柄短剑，两只手',
    desc: '把身子当兵器练的人。不穿甲，靠身法躲；兵器之外随时补一拳一脚；练出来的“气”可以连击、守势、调息，也可以一下把人打懵。气在短休后回满。',
    era: {
      1022: '卡林达尔刚从试炼山找回来，刀锋边区复国，守刃僧团重新立了规矩：想当王的先过试剑。东洲仙界的侠离坎诺太远，这边几乎没人见过。',
      1444: '卡林达尔被兽人瓦洛克打断，刀锋边区亡了国，守刃僧团带着碎片躲了起来。东洲的仙界里，各门各派还守着自己的山头，再过几年魔军就要打过去。',
      1836: '坎诺的商船常年跑东洲，“气”和侠门的名字不再是奇闻。舞风一派的身法，据说躲得开子弹。',
    },
    enTerms: { '卡林达尔': 'Calindal, the Gleaming Blade', '试炼山': 'Trialmount', '刀锋边区': 'Blademarches', '守刃僧团': 'Order of the Blade Stewards', '试剑': 'Test of the Gleaming Blade', '东洲': 'Haless', '仙界': 'Xianjie', '侠': 'Xia', '侠门': 'Xiaken', '瓦洛克': 'Varok Bladebreaker', '魔军': 'The Command', '气': 'Chi', '舞风': 'Way of the Dancing Breeze', '坎诺': 'Cannor' },
    hitDie: 8, primary: 'dex', saves: ['str', 'dex'], caster: null, spellAbility: 'dex', tags: ['martial'],
    abilOrder: ['dex', 'wis', 'con', 'str', 'int', 'cha'],
    skills: { n: 2, from: ['acrobatics', 'athletics', 'insight', 'stealth', 'religion', 'history', 'perception', 'medicine'] },
    startEquip: { weapon: 'shortsword', armor: null, offhand: null, trinket: null },
    startItems: { healing_potion: 1 }, startGold: 5,
    resources: {
      ki: { name: '气', max: 'level', rest: 'short', minLevel: 2 },
    },
    features: {
      1: ['monk_unarmored_defense', 'monk_martial_arts'],
      2: ['monk_flurry', 'monk_patient_defense'],
      3: [],
      4: ['monk_inner_breath'],
      5: ['monk_extra_attack', 'monk_stunning_strike'],
      6: [],
      7: ['monk_stillness'],
      8: ['monk_light_step'],
      9: ['monk_ki_edge'],
      10: ['monk_purity'],
      11: ['monk_diamond_soul'],
      12: ['monk_empty_body'],
    },
    subclassLevel: 3,
    subclasses: [
      {
        id: 'monk_steward', name: '守刃僧', en: 'Order of the Blade Stewards (Blind Masters)',
        desc: '刀锋边区的武僧团，世代看守闪耀之刃卡林达尔，替它挑下一个主人。拔剑时被剑光灼瞎的人留在团里教徒弟，叫盲宗师。',
        enTerms: { '刀锋边区': 'Blademarches', '卡林达尔': 'Calindal, the Gleaming Blade', '盲宗师': 'Blind Masters' },
        features: { 3: ['monk_steward_blind_lesson', 'monk_steward_draw_cut'], 6: ['monk_steward_test_of_light'], 10: ['monk_steward_mind_eye'] },
      },
      {
        id: 'monk_xia', name: '仙界侠客', en: 'Xia (Xiaken of Xianjie, Accretive Path)',
        desc: '东洲仙界的武学门派出身，走“升道”，靠打坐和拳脚养气。奔牛、神雷、灵狐各是一门，谁也不服谁。离了东洲，气只能从自己身上养，所以肯出远门的侠都是苦练出来的。',
        enTerms: { '东洲': 'Haless', '仙界': 'Xianjie', '升道': 'Accretive Path', '奔牛': 'School of the Charging Bull', '神雷': 'School of Divine Lightning', '灵狐': 'School of the Cunning Fox', '侠': 'Xia' },
        features: { 3: ['monk_xia_charging_bull'], 6: ['monk_xia_still_ocean'], 10: ['monk_xia_divine_lightning'] },
      },
    ],
  },
};
