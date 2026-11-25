export const meta = {
  name: 'anbennar-game-data',
  description: 'Author classes, spells, bestiary and items for the Anbennar tabletop RPG and balance them with the simulator',
  phases: [
    { title: 'Classes', detail: 'martial classes and the spell compendium + full casters in parallel, then half-casters' },
    { title: 'Bestiary & Items', detail: 'enemies balanced against the finished classes; setting items' },
    { title: 'Review', detail: 'independent rules review and fixes' },
  ],
}

const S = args.scratch
const G = args.game

const COMMON = `
You are a game designer on a Chinese-language tabletop-style RPG set in the world of Anbennar (the Paradox mod setting; world name Halann). The game is a static browser app in ${G}. It has three campaigns, starting in 1022, 1444 and 1836 AA. Rules are a simplified take on the 5e SRD with a level cap of 12.

READ FIRST, in this order:
1. ${G}/docs/DATA_GUIDE.md — the exact data format. The engine only understands the fields listed there.
2. ${G}/js/core/rules.js, ${G}/js/core/combat.js (how abilities, passives, conditions and enemy attacks are actually resolved — when the guide is unclear, the code is the truth) and ${G}/js/core/state.js (buildCharacter / refreshDerived).
3. ${G}/js/data/conditions.js (the condition registry — use these ids; you may not edit this file) and ${G}/js/data/items_base.js (mundane gear ids; you may not edit this file).
4. ${S}/CORPUS.md — where the Anbennar lore lives locally (wiki dump, mod files, Chinese-name sources). Research dossiers, where already written, are in ${S}/research/ (some are still being written — use the wiki dump directly for anything missing). Use the lore so that classes, subclasses, spells, monsters and items feel like Anbennar rather than generic D&D.

Rules for all output:
- All player-facing text (name, short, desc, era notes) is Simplified Chinese, written plainly the way a game master would say it. Read ${G}/docs/STYLE_GUIDE.md and follow it: short sentences, concrete, no purple prose, no stock phrases. Ability descriptions must state the actual numbers (dice, DC source, duration) because players decide from them.
- Use the standard Chinese D&D terms players know (战士/法师/牧师/游荡者/圣武士/游侠/吟游诗人/德鲁伊/野蛮人/术士/邪术师/武僧/奇械师; 戏法、法术位、豁免、优势/劣势、熟练加值、先攻).
- For every Anbennar-specific proper noun you put in a Chinese string (a place, people, god, order, monster, artifact), add an English source name so a later pass can normalise translations: put an \`en: 'English Name'\` field on the entry, and where a desc mentions further setting terms, list them in an \`enTerms: { '中文': 'English' }\` field on the same entry. Check ${S}/zh/anbennar_guoming_ciku.txt, ${S}/zh/existing_game_zh.txt and (if it exists) ${S}/research/11_zh_glossary.json for established Chinese names before coining one.
- Do not edit files you were not asked to write. Do not touch anything under ${G}/js/core or ${G}/js/ui. If you believe the engine needs a new capability, do NOT work around it with unsupported fields: design within what exists and list the request in your final report.
- Validate constantly with the simulator: \`cd ${G} && node tools/check-data.mjs --parts <your files, comma separated> [--bench ...] [--enemies ...]\`. It must report 0 errors. Iterate on the numbers until the benchmark flags are gone or you can justify each remaining one.
`

const CLASS_RULES = `
Class design rules:
- features: { level: [abilityIds] } covers levels 1–12. Every level should give the player something (a new ability, a new spell, or a visible upgrade). Ability score improvements at 4/8/12 and the proficiency bonus are handled by the engine — do not add features for them.
- Each class has exactly 2 subclasses chosen at level 3 (subclassLevel: 3), each with features at 3, 6 and 10. Give them Anbennar identities (orders, schools, traditions, bloodlines, patrons, gods that exist in the setting), with a desc that says in one or two sentences who these people are in the world.
- era: { 1022: '…', 1444: '…', 1836: '…' } — one sentence each on what this class is in that period of Anbennar (for example: arcane magic before/after the Magisterium, the Corinite faith after 1444, artificery in the 1800s). Research it; do not invent history.
- Active abilities need target; passives need passives{}. Use only supported passive keys. Typical martial kit: a self-heal or defensive option, a resource-gated burst, extra attack at 5 (passives: { extraAttack: 1 }), a control option (apply a condition with a save), and scaling passives. Resources go in the class's resources{} table and abilities spend them with cost: { res, n }.
- Keep the active list manageable: about 8–12 active abilities for a martial class at level 12, about 18–22 for a full caster (including cantrips). Fewer, clearer buttons beat a long list.
- Balance targets come from the simulator's bench table (DPR band per level; a party of four of the same class should beat four standard foes most of the time without being untouchable). Healers and controllers may sit at the bottom of the DPR band; pure strikers must not exceed the top.
- startEquip must use item ids from items_base.js. startItems usually { healing_potion: 1 or 2 }. abilOrder lists all six abilities, primary first.
- Ability ids are snake_case and globally unique. Prefix class-specific features with the class id (fighter_second_wind) so they cannot collide with spells.
`

const MARTIAL = `${COMMON}
${CLASS_RULES}
YOUR TASK: the four non-casting classes — fighter (战士), barbarian (野蛮人), rogue (游荡者), monk (武僧).
Write:
- ${G}/js/data/classes_martial.js exporting \`CLASSES_MARTIAL\`
- ${G}/js/data/abilities_martial.js exporting \`ABILITIES_MARTIAL\`
Lore pointers to research in the wiki dump (Grep titles in ${S}/wiki/index.json): chivalry and the Adeanic vow, Marcher lords and adventurer companies, mercenary companies, Gerudian reavers, orc warrior culture, the Blind Masters of the Blademarches, the Xia warrior sects and chi of Yanshen/Haless, halfling and Viswall agents, thieves and spies, the Aldresian knights, wyvern and griffon riders.
Monk note: unarmed fighting — give the monk a passive that makes unarmed strikes scale (the engine's weapon profile uses the equipped weapon or \`unarmed\`; a monk can instead start with a quarterstaff and get +dmg passives and unarmored: 'wis'). Rogue sneak attack exists as passives: { sneak: true } and needs a finesse or ranged weapon.
Validate: \`node tools/check-data.mjs --parts js/data/classes_martial.js,js/data/abilities_martial.js --bench\`.
Final report: list the classes, subclasses (Chinese + English), any engine limitations you hit, and the final bench table.`

const SPELLS = `${COMMON}
${CLASS_RULES}
YOUR TASK: the spell compendium and the six full casters — wizard (法师), sorcerer (术士), warlock (邪术师, caster: 'pact'), cleric (牧师), druid (德鲁伊), bard (吟游诗人).
Write:
- ${G}/js/data/abilities_spells.js exporting \`ABILITIES_SPELLS\`: the shared spell list, levels 0–5, about 85–100 spells. Each spell: kind: 'spell', level, and a \`lists: ['wizard','cleric',…]\` field naming which classes may have it (include 'paladin', 'ranger' and 'artificer' in lists where appropriate — another designer will build those classes from your compendium and needs level 1–3 spells for each: smites and protective prayers for paladins, marks/snares/healing for rangers, enchant-weapon/elemental/repair style spells for artificers). Cover the staples (attack cantrips per damage type, healing, protection, control via the available conditions, area damage at 3rd+, buffs) and give them Anbennar flavour where the lore supports it (damestear, the elven style of casting, the eight schools of the Wise Council, Sun Cult light, Corinite battle prayers after 1444, fey magic of the Deepwoods, Jadd, runes) — keep familiar Chinese spell names where the effect is the classic one so players recognise them.
- ${G}/js/data/classes_casters.js exporting \`CLASSES_CASTERS\`
- ${G}/js/data/abilities_casters.js exporting \`ABILITIES_CASTERS\` (class and subclass features that are not shared spells)
Spells are learned through features: a full caster knows 2 attack/utility cantrips + 3 first-level spells at level 1 and gains spells as it levels (new spell level at 3, 5, 7, 9). Remember the engine casts at the lowest available slot of at least the spell's level, has no concentration, and positions are abstract (target: 'enemies' hits all foes unless maxTargets is set). Area spells are therefore strong: price them accordingly (use maxTargets, lower dice, or a save for half).
Lore pointers: Magic, Cannorian Magical Education, Wise Council and the eight schools, the Magisterium and mage towers, Witch-Kings, forbidden domination magic, damestear, sorcerous bloodlines (Precursor/elven blood, Augur's Blood, dragon blood among kobolds), hags and their covens, archfey of the Deepwoods and Eordand's seasonal courts, the Infernal Court, genies of Bulwar, the Regent Court gods and their priesthoods (the Dame, Adean, Castellos, Nerat, Esmaryal, Ara, Agrados, Corin after 1444), the Bulwari Sun Cult and the Jadd, Ravelian Society, druids/Verdant Pact/fey, skalds of Gerudia, Lorentish and elven song (Munas Moonsinger).
Validate: \`node tools/check-data.mjs --parts js/data/abilities_spells.js,js/data/classes_casters.js,js/data/abilities_casters.js --bench\`.
Final report: classes and subclasses (Chinese + English), the spell count per level, engine limitations you hit, and the final bench table.`

const HALF = `${COMMON}
${CLASS_RULES}
YOUR TASK: the half-casters and the artificer — paladin (圣武士, caster: 'half', cha), ranger (游侠, caster: 'half', wis), artificer (奇械师, caster: 'half', int).
The spell compendium already exists at ${G}/js/data/abilities_spells.js (export ABILITIES_SPELLS; spells carry a \`lists\` field). Use spells from it by id in your features (prefer ones whose lists include your class). If a spell you really need is missing, add it to a small extra file rather than editing the compendium. Also read ${G}/js/data/classes_martial.js and ${G}/js/data/classes_casters.js (already written) so your classes sit at a comparable power level and do not duplicate ids.
Write:
- ${G}/js/data/classes_half.js exporting \`CLASSES_HALF\`
- ${G}/js/data/abilities_half.js exporting \`ABILITIES_HALF\` (class/subclass features and any extra spells)
Lore pointers: Orda Aldresia and other knightly/holy orders (see eu4 gfx/interface/holy_orders and their localisation), the Corintar and Corinite orders after 1444, the Order of the Sapphire Eye and Trial by Chivalry, Adeanic knights; Marcher wardens, Deepwoods and Verdant Pact rangers, Escanni pathfinders and the Pioneer's Guild, griffon knights of Marrhold; artificery (its rise in the 1500s–1600s, damestear-powered devices, the Ravelian Society, gnomish tinkerers, dwarven runesmiths and rail, mechanim, airships) — in 1022 and 1444 an "artificer" is a gnome tinkerer or a dwarven runesmith, by 1836 it is an ordinary profession.
Artificer design: built from supported pieces — damaging gadgets (grenades as target:'enemies' with maxTargets), self/ally buffs via conditions (empowered, shielded, hasted…), healing draughts, a turret-like bonus action attack (quick: true, cost per rest), and passives.
Validate: \`node tools/check-data.mjs --parts js/data/abilities_spells.js,js/data/classes_martial.js,js/data/abilities_martial.js,js/data/classes_casters.js,js/data/abilities_casters.js,js/data/classes_half.js,js/data/abilities_half.js --bench paladin,ranger,artificer\`.
Final report: as for the other class designers.`

const PARTS_ALL = 'js/data/abilities_spells.js,js/data/classes_martial.js,js/data/abilities_martial.js,js/data/classes_casters.js,js/data/abilities_casters.js,js/data/classes_half.js,js/data/abilities_half.js'

const ENEMIES = `${COMMON}
YOUR TASK: the bestiary — ${G}/js/data/enemies_core.js exporting \`ENEMIES_CORE\`, about 110–130 enemies that campaign writers for all three eras can draw on. Every entry needs: id, name (Chinese), en (English), type, desc (one or two plain Chinese sentences a game master would say when it appears — what you see, not a statistics summary), level (1–12, the party level it is meant for), hp, ac, init, saves, attacks, xp, and where relevant resist/immune/vuln/condImmune/traits/ai. Give most enemies 2 attacks (a basic one and something with character: a condition, a recharge move, a heal or war-cry) and give every attack a short name that fits the creature; \`text\` flavour lines on a few signature moves.
Coverage (research each in the corpus so the details are right — wiki pages such as Orc, Goblin, Gnoll, Harpy, Kobold, Ogre, Troll, Serpentspine Fauna, Primeval Serpentdepths, Hobgoblin/The Command, Centaur, Lizardfolk, Harimari, Mechanim, Fey, Hag, Lich, Vampire, Werewolf, Dragon, Wyvern, Griffon, Genie, Demon/Infernal Court, Undead, and the mod's event text):
- People of every tier, usable in any era: beggars-turned-bandits, militia, men-at-arms, knights, sellswords, captains, archers/crossbowmen, court mages and archmages, priests, cultists, assassins, thugs, witch-hunters, noble duellists; plus era-marked variants: 1022 (Black Castanorian legionaries, enthralled soldiers, reaver raiders, Sorcerer-King acolytes' creatures), 1444 (orc raiders/berserkers/shamans/warlords of the Greentide, goblin skirmishers and tinkers, adventurer-company rivals, Marcher veterans, Wexonard soldiers, Lorentish knights, Gawedi rangers, wyvern riders, gnoll corsairs and slavers, Command hobgoblin legionaries, harpy raiders, kobold trappers and dragon cultists, Jaddari lightbringers), 1836 (riflemen, grenadiers, dragoons, strikers and revolutionaries, artificer-engineers with gadgets, war mechanim and steam constructs, airship marines, company mercenaries, secret police).
- Undead (the White Pestilence's risen dead, skeleton legionaries, ghouls, wights, death knights, a lich), fey (sprites, redcaps, dryads, hags of several kinds, an archfey's knight), fiends of the Infernal Court, elementals and genies, constructs (Precursor relic guardians, dwarven rune golems), beasts and monsters by region (wolves, bears, boars, giant spiders, cave horrors of the Serpentspine, basilisks, treants, trolls, ogres, giants, griffons, wyverns, drakes, a young and an adult dragon, sea monsters), Aelantir threats (ruinborn warriors, jungle horrors, precursor constructs), Deepwoods threats.
- Bosses (traits: { boss: true }) at several levels: an orc warlord, a necromancer, a witch-king, a hag mother, a death knight, a dragon, a great mechanim, an archmage, an infernal champion, a Precursor guardian.
Spread: at least 8 enemies for each level 1–10 and a few at 11–12.
Balance with the simulator against the real classes: \`node tools/check-data.mjs --parts ${PARTS_ALL},js/data/enemies_core.js --enemies\` — work through the flags (TOO-HARD / TOO-EASY / SLOG / TRIVIAL) until the table is clean or each remaining flag is deliberate. Use only conditions from the registry.
Final report: counts per level and type, the list of bosses, remaining flags with reasons.`

const ITEMS = `${COMMON}
YOUR TASK: setting-specific and magical items — REPLACE ${G}/js/data/items_extra.js (it currently holds three placeholder entries: keep the ids \`potion\`, \`staff\` and \`chain\` working as aliases because a demo scenario uses them) exporting \`ITEMS_EXTRA\`, about 90–110 items. Every entry: id, name (Chinese), en, desc (one or two plain sentences with the actual effect and numbers), value, and the mechanical fields from the guide.
Coverage:
- Better arms and armour: +1/+2/+3 versions of the common weapons and armours with in-world makers (dwarven hold-forged steel, elven Precursor-steel heirlooms, Lorentish rosemetal, Castanorian legion gear, ebonsteel of the Gerudian north, damestear-edged blades, Command-issue kit, 1836 factory rifles and artificer side-arms) using weapon.bonus, passives and grants.
- Named relics from canon that a campaign could award (research them: Calindal the blade of the Blademarches, Dinătoldir, crowns and regalia, Corin's arms, relics of the Trials of Castan, dwarven hold relics, Precursor relics, the Book of Canrec, Swansong the harp, etc.). Give each a truthful one-line history in desc and mechanics that match its legend; mark relic: true. Do not invent "canon" relics — if you add an invented one, do not give it an \`en\` name that pretends to be canon; set invented: true.
- Trinkets (slot: 'trinket') with passives: rings, amulets, cloaks, charms from the various cultures (Regent Court holy tokens, Sun Cult amulets, dwarven rune-stones, halfling luck charms, elven compasses, orcish trophies, gnomish gadgets, 1836 pocket watches and gas masks).
- Consumables: stronger potions, damestear dust (a risky power boost built from supported effects), scrolls (use: one-shot spell-like effects), grenades and alchemy, food and drink of the setting with small effects (Lorentish wine, dwarven ale, halfling pies, tea from Yanshen), antitoxins, holy oils.
- Valuables and curios that only have a value and a desc (things a party loots and sells: coins of the eras, jewellery, relic fragments, letters of credit), about 15.
Keep power sane: a +1 weapon around level 4, +2 around level 8, +3 only as an endgame relic; trinket passives small.
Validate: \`node tools/check-data.mjs --parts ${PARTS_ALL},js/data/items_extra.js\`.
Final report: counts by kind, the list of canon relics with their sources, and anything you could not express with the supported fields.`

phase('Classes')
const [martial, spells] = await parallel([
  () => agent(MARTIAL, { label: 'classes:martial', phase: 'Classes' }),
  () => agent(SPELLS, { label: 'classes:casters+spells', phase: 'Classes' }),
])
const half = await agent(HALF, { label: 'classes:half-casters', phase: 'Classes' })

phase('Bestiary & Items')
const [enemies, items] = await parallel([
  () => agent(ENEMIES, { label: 'data:bestiary', phase: 'Bestiary & Items' }),
  () => agent(ITEMS, { label: 'data:items', phase: 'Bestiary & Items' }),
])

phase('Review')
const review = await agent(`${COMMON}
YOUR TASK: independent rules review of the finished data set. Files: ${G}/js/data/abilities_spells.js, classes_martial.js, abilities_martial.js, classes_casters.js, abilities_casters.js, classes_half.js, abilities_half.js, enemies_core.js, items_extra.js (all in ${G}/js/data/).
1. Run \`cd ${G} && node tools/check-data.mjs --parts ${PARTS_ALL},js/data/enemies_core.js,js/data/items_extra.js --bench --enemies --trials 160\` and study the tables.
2. Read every class top to bottom as a player would. For each ability check that the desc matches what the fields actually do in ${G}/js/core/combat.js (numbers, targets, durations, costs, whether it is a bonus action), that no ability relies on a field the engine ignores, that ids referenced in features exist, that no two abilities are duplicates, that each level 1–12 gives something, and that the two subclasses of a class are both worth picking. Fix what is wrong directly in the files.
3. Fix balance outliers the tables show (classes outside the DPR band or with WEAK/TOO-SAFE flags at any level; enemies flagged TOO-HARD/TOO-EASY/SLOG/TRIVIAL) by adjusting numbers, unless a flag is clearly deliberate (a support class at the bottom of the band, a boss).
4. Read the Chinese text for tone against ${G}/docs/STYLE_GUIDE.md and rewrite anything stilted, vague or generic. Check Anbennar facts in era notes and descs against the corpus (${S}/CORPUS.md) and fix errors.
5. Re-run the command until it reports 0 errors and the remaining flags are deliberate.
Final report: what you changed (by file), remaining flags with justification, and a list of every \`en\`/\`enTerms\` proper noun used across the files with its Chinese rendering (so a glossary pass can normalise them).`, { label: 'review:rules+balance', phase: 'Review' })

return { martial, spells, half, enemies, items, review }
