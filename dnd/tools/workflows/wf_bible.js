export const meta = {
  name: 'anbennar-campaign-bible',
  description: 'Write one campaign bible from its three pitches: judge and synthesise the story, plan every scene with the god line, then check canon and structure',
  phases: [
    { title: 'Bible', detail: 'lead designer judges the pitches and writes the story bible, then the scene plan' },
    { title: 'Check', detail: 'canon and structure check of the bible' },
  ],
}

const S = args.scratch
const G = args.game
const ERA = args.era
const ID = args.id
const OUT = `${S}/design/${ID}`
const BIBLE = `${G}/js/data/scenarios/${ID}/BIBLE.md`

const BRIEF = `
PROJECT. A Chinese-language tabletop-style ("跑团") narrative RPG for the browser, set in the world of Anbennar (Paradox mod setting; world name Halann). The player picks a campaign, a nation/origin, a faction, a character (pre-made or custom: race, class, background) and plays a branching story told by a game-master narrator with d20 skill checks, turn-based fights, companions, reputation with factions and "world state" tracks that record what the player's choices do to the world. The game ships three campaigns, one per Anbennar mod start date: 1022 AA (CK3 mod), 1444 AA (EU4 mod), 1836 AA (Vic3 mod). You are working on the ${ERA} campaign (scenario id "${ID}").

WHAT THE PLAYER (the person who commissioned this) ASKED FOR: the plot must be grand — it must decide the fate of the setting's nations, continents and world order, not a local errand; the player must be able to choose character, faction, nation and class and have those choices matter; and the writing must sound like a person telling a story at a table, never like generated filler.

SOURCES (read before designing):
- ${S}/CORPUS.md — where the local lore corpus is (wiki dump, the three mods' text, Chinese-name sources).
- Research dossiers in ${S}/research/ — read ALL that exist that touch your era: 01_era1022_ck3, 02_era1444_west_cannor, 03_era1444_escann_dwarovar_deepwoods, 04_era1444_bulwar_sarhal, 05_era1444_haless_aelantir_plains, 06_timeline_1444_1836, 07_era1836_vic3, 08_cosmology_gods_magic (especially its secret-truth index), 09_races_cultures_names, 10_bestiary_artifacts_places_orgs, 13_community (what fans love and would hate to see gotten wrong). Some may still be in progress; go to the corpus directly for anything missing. Dossiers can contain mistakes: for any fact your design leans on, open the cited source.
- ${G}/docs/CONTENT_GUIDE.md — what the engine can express (scenes, choices, checks, effects, fights, shops, companions, quests, codex, tracks, endings, epilogues) and the pacing numbers. ${G}/docs/STYLE_GUIDE.md — the voice.

FIXED STRUCTURE (so three campaigns are comparable and can be built in parallel):
- 5 origins. Each is a nation or people the player belongs to, with its own flag, its own short prologue (5–6 scenes, ends at level 2) and its own stake in the ending. Origins must be genuinely different seats at the table (different sides of the era's conflicts), including at least one non-human or outsider perspective.
- 3 factions (cross-cutting allegiances or convictions, each available to at least 3 origins) that change starting reputation, unlock options and colour the ending.
- 2 pre-made characters per origin (10 total) — canon minor figures where that is safe, otherwise invented people who fit canon — and free custom creation with any sensible race and class.
- 4 companions with strong voices and conflicting loyalties, joining between the prologue and Act 2; each has a personal decision that can lose them.
- Prologue (per origin) → Act 1 → Act 2 → Act 3 → Act 4 → Finale. The four acts are shared by all origins (with origin/faction/class/race-specific options and text inside them). Each act has 16–20 scenes and ends at levels 4 / 6 / 8 / 10. The finale has 8–12 scenes and leads to 5–7 distinct endings, followed by epilogue cards driven by the world tracks, companions and origin.
- 4–6 world tracks (numbers the player can see moving) and 5–7 reputations.
- The story may span years or decades with time skips between acts (elves live long; humans age — use it).
- The campaign must travel: at least three regions of Halann, and at least one place outside the starting region's comfort zone.
- Use the canon's real people, places and events as the frame; invent only where canon is silent, and never contradict what the mods establish as fixed before the start date. After the start date the canon itself calls later history "one timeline among those the games can produce", so the player may bend it — that is the point of the world tracks — but the BASELINE (what happens if the player does nothing) should be the canonical course.
- Keep the setting's own tone (see dossier 13 and the mod's event writing): grounded politics, dry humour, wonder that costs something. Villains have reasons.
`

const M = args.model ? { model: args.model } : {}

phase('Bible')
const bibleA = await agent(`${BRIEF}
YOUR JOB: you are the lead designer and the judge. Three independent pitches for the ${ERA} campaign are in ${OUT}/ (pitch_crowns.md, pitch_secrets.md, pitch_road.md); read all three completely. First judge them, hard, on two lenses and write your verdict to ${OUT}/verdict.md (one page): (1) as an Anbennar lore-keeper and long-time fan: truth to the mods and wiki (open the cited sources in the corpus yourself), use of what is special about this era, plausibility of inventions, tone, missed opportunities; (2) as game director: is it world-scale, do five origins and three factions give different games, does every act hold a real decision with visible consequences, are companions people, is there variety of scene types, can the engine in docs/CONTENT_GUIDE.md express it, do endings follow from play, do the Chinese sample moments sound like a person talking (judge against docs/STYLE_GUIDE.md). Then synthesise the final design: start from the strongest pitch, graft the best ideas of the others, fix every problem you found, and resolve disagreements yourself (say how in a short design note). Verify every canon fact you rely on against the corpus. Dossiers 04, 07 and 10 in ${S}/research/ were never fact-checked: treat anything you take from them as unverified until you have opened the source.
${args.steer ? `\nDirection from the creative lead:\n${args.steer}\n` : ''}
Write PART ONE of the campaign bible to ${BIBLE} (create the folder), IN CHINESE (Simplified), because the scene writers will write in Chinese from it. On first mention of any proper noun give the original in brackets, e.g. 卡斯托纳斯（Castonath）. Take Chinese names from ${S}/research/11_zh_glossary.json (and its .md for the transliteration conventions); when the glossary has no entry, coin a name by those conventions and mark it 〔新译〕.
Part one sections:
# ${ERA}：《中文标题》 (English title)
## 1 概述 — 一句话故事、世界级的赌注、情感主线、基调、时间跨度（各幕的年月）、正史锚点（列出来源）与本作虚构之处、设计说明（怎么综合三个方案）。
## 2 真相与揭示节奏 — 幕后到底发生了什么；每一幕结束时玩家以为的和实际的。
## 3 译名表 — 本剧本会用到的全部专有名词：English → 中文（来源：词库/沿用玩家旧作/新译）。人名、地名、国名、组织、神祇、事件、物件、种族都要列，后面所有人只准用这张表里的写法。至少 120 条。
## 4 世界局势与声望 — 4–6 条世界局势（key、名字、说明、起始值/最小/最大、五档文字标签、什么会推动它）；5–7 个声望方（key、名字、说明、起始值）。key 用小写英文加下划线。
## 5 出身 — 5 个：id、名字、所属国家/族群、旗帜用的 EU4 国家 tag（没有合适的写 无）、一段给玩家看的介绍（80 字内，按文风规范写）、标签、起始声望与物品、序章前提、这个出身在后面各幕里的专属戏份、它在结局里的赌注。
## 6 阵营 — 3 个：id、名字、格言、给玩家看的介绍、可选的出身、起始影响、专属选项的方向、在结局里的含义。
## 7 预设人物 — 10 个（每出身 2 个）：id、中文名（原文名）、性别、种族/亚种、职业、背景、六维（最终值，总体相当于标准数组 15/14/13/12/10/8 加种族加值）、熟练技能、给玩家看的一句话、六十字小传。种族、职业、背景的 id 必须取自 ${G}/js/data/ 里已有的定义（races*.js、classes*.js、backgrounds.js；如果某个文件还没写好，就用 docs/DATA_GUIDE.md 里的常规 id 并在“待确认”里记一笔）。
## 8 同伴 — 4 个：id、名字、种族职业、来历、想要什么、怕什么、说话方式（给三句示范台词）、入队时机、赞同/反对什么、个人抉择（做错会离队或更糟）、在各结局里的下场。
## 9 重要人物 — 12–18 个 NPC：是谁（正史/虚构）、立场、想要什么、秘密、说话方式（一句示范台词）。
## 10 结局 — 5–7 个：id、标题、达成条件（用世界局势/标记/声望描述）、世界变成什么样、和正史的关系。再列后日谈卡片的矩阵（按世界局势、同伴、出身、阵营）。
Write with the density of a working document: no filler, concrete names and dates. Return a short plain-text summary (title, origins, factions, companions, endings).`, { ...M, label: `bible:${ID}:story`, phase: 'Bible' })

const bibleB = await agent(`${BRIEF}
YOUR JOB: you are the lead designer's scene planner. Part one of the ${ERA} campaign bible is at ${BIBLE} — read it completely, plus the pitches and judge reports in ${OUT}/ for material. APPEND part two (sections 11–16) to the same file (do not rewrite part one; if you find a contradiction in part one, fix it minimally and note it). Write in Chinese, using only the names in the bible's 译名表 (add to the table if you need a new name).
Also read, if they exist by now: ${G}/js/data/enemies_core.js (bestiary ids, with level), ${G}/js/data/items_extra.js and items_base.js (item ids), ${S}/research/12_art_catalog.json and .md (art keys: loading screens are "load_N", event pictures "ev_<name>" — see ${G}/js/data/art.js for the exact keys), ${S}/research/10_bestiary_artifacts_places_orgs.md.
Part two sections:
## 11 分幕场景表 — for the 5 prologues (each 5–6 scenes), Acts 1–4 (each 16–20 scenes) and the finale (8–12 scenes plus one ending scene per ending). For EVERY scene one entry:
\`场景id｜标题｜地点·日期｜美术key（没有合适的写 —）\` then 2–4 lines: 这一场发生什么；在场的人；关键选项及其后果（写出要设置/读取的标记、世界局势和声望的变化、通向哪个场景）；检定（技能与大致 DC）；战斗（敌人 id×数量，或“新敌人：概念”）；出身/阵营/职业/种族专属内容；商店或休整。
Scene ids: prologues \`p_<originId>_01…\`, acts \`a1_01…\` \`a2_01…\` \`a3_01…\` \`a4_01…\`, finale \`f_01…\`, endings \`end_<endingId>\`. FIXED JOINTS so that different writers can work in parallel: every prologue's last scene goes to \`a1_01\`; Act N's last scene goes to \`a(N+1)_01\`; Act 4's last scene goes to \`f_01\`. State each act's entry assumptions (level, who can be in the party, which flags may be set) and exit guarantees.
Each act must include: at least 2 fights and 6 checks, a hub scene (camp/court/town with once-only options, a shop and a rest), at least one option exclusive to an origin, one to a faction, one to a class group (is.caster / is.martial …) and one to a race, one decision with no right answer, and each companion speaking at least once after they join. Vary the scene types across the campaign: court intrigue, travel, dungeon, battle, investigation, heist, trial or debate, negotiation, chase, feast.
## 12 标记表 — every flag: 名字（小写英文加下划线）、含义、在哪些场景设置、在哪些场景读取。Every flag that is read must be set somewhere earlier on every path that can reach the reader, or the reader must have a fallback.
## 13 任务与图鉴 — quests (id、标题、阶段提示、完成提示) and codex entries (id、标题、分组、一句话梗概; 40–60 entries covering people, places, peoples, faiths, events, magic — the scene writers will write the full text and unlock them as the player meets things).
## 14 本剧本需要的新敌人与物品 — named bosses and special foes not in the bestiary (id、名字、等级、概念、招牌招式), and story items (id、名字、作用).
## 16 神格线 — the game has a cheat that lets the player make the hero a GOD (永生、无敌、检定必成) at any moment, or only immortal; the commissioner requires story text, NPC reactions, available options and endings to change when it is on. Read ${G}/docs/CONTENT_GUIDE.md §10 for the rules (conditions is.god / is.immortal / is.mortal, the {god} token, per-act minimums, a divine ending, epilogue cards). Write: (1) 这个年代的人怎么看“一个活着的神”：各教会、法师、君主、平民、主要反派、四个同伴各自的反应和利害，要有设定依据（封神先例、万神会议、化身、各教义对新神的态度；查 ${S}/research/08_cosmology_gods_magic.md 和语料库）；(2) 分幕钩子表：序章每个出身 1 处，第一至四幕每幕至少 5 处，终章至少 3 处，逐条写场景 id（必须是 §11 里的场景）、凡人版本、神版本多了什么（文字反应、[神] 专属选项及其代价、改变了的检定或战斗）；(3) 每次时间跳跃处怎么写“别人老了你没变”（场景 id）；(4) 神格专属结局：ending id 与 end_ 场景 id、标题、终章里哪一场出现只有神能选的路、世界变成什么样、当神的代价（不是“赢麻了”）——把它也列进 §10 的结局表和 §11 的终章场景表；(5) 至少 4 张 is.god 和 1 张 is.immortal 的后日谈卡片梗概；(6) 新增标记并入 §12。
## 15 写作分工 — a table assigning the scenes to writers: 序章 ×5（可两人分），第一至四幕各一人，终章与结局一人；and for each the hand-over notes they must respect.
Return a short plain-text summary: scene counts per section, number of flags, anything in part one you had to change.`, { ...M, label: `bible:${ID}:scenes`, phase: 'Bible' })

phase('Check')
const check = await agent(`${BRIEF}
YOUR JOB: you are the canon and structure checker for the finished ${ERA} campaign bible at ${BIBLE}. Scene writers will follow it literally, so mistakes multiply.
1. Canon: list at least 40 concrete claims the bible makes about the setting before or at the start date (who rules what, who is alive, ages, dates, relationships, geography, how magic and the faiths work, what is publicly known in this year) and check each against the corpus (${S}/CORPUS.md; mods outrank wiki). Fix errors in the bible directly. Anything invented must be listed as invention in section 1; add it if missing. Check that nothing "known" to characters in ${ERA} is actually only discovered later (see the secret-truth index in ${S}/research/08_cosmology_gods_magic.md) unless the campaign is deliberately about finding it early.
2. Names: every proper noun in the bible must appear in its 译名表 with one consistent Chinese form that matches ${S}/research/11_zh_glossary.json where an entry exists. Fix inconsistencies throughout the file.
3. Structure: scene counts within the fixed structure; the god line (§16) meets docs/CONTENT_GUIDE.md §10 (hooks point at real scene ids, the divine ending is in §10 and §11, flags registered); every scene id unique; every goto target exists; the fixed joints hold; each act meets its minimums; every flag read is set earlier on all paths or has a fallback; every ending is reachable and its conditions are expressible with the bible's tracks/flags/reputations; premade characters use valid race/class/background ids from ${G}/js/data/ (check the files that exist); enemy and item ids used exist in ${G}/js/data/enemies_core.js / items_*.js or are listed in section 14.
4. Voice: the player-facing Chinese blurbs and sample lines must pass ${G}/docs/STYLE_GUIDE.md; rewrite the ones that do not.
Fix everything you can in the file, then append "## 17 核查记录" listing what you checked and changed and anything left for the creative lead to decide. Return a plain-text summary of the changes and the open questions.`, { ...M, label: `check:${ID}`, phase: 'Check' })

const cut = (x) => (typeof x === 'string' ? x.slice(0, 1200) : x)
return { id: ID, bibleA: cut(bibleA), bibleB: cut(bibleB), check: cut(check) }
