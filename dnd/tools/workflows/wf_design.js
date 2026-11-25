export const meta = {
  name: 'anbennar-campaign-design',
  description: 'Design one campaign: three independent pitches, a judge panel, a synthesised story bible, a scene plan and a lore check',
  phases: [
    { title: 'Pitch', detail: 'three designers pitch from different angles' },
    { title: 'Judge', detail: 'two judges with different lenses score the pitches' },
    { title: 'Bible', detail: 'lead designer writes the story bible, then the scene plan' },
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

const ANGLES = [
  { key: 'crowns', title: 'Crowns and councils', text: 'Your angle: the political heart of the era. Build the campaign around its succession crises, treaties, wars, marriages and betrayals, with the supernatural as a force the powers try to use. The player should end up kingmaker (or king-breaker) for several realms.' },
  { key: 'secrets', title: 'The secret under the world', text: 'Your angle: the metaphysical mystery. Build the campaign around one of the setting\'s great hidden truths (see the secret-truth index in dossier 08 and the era notes) that the player can uncover generations before canon does, and make the world\'s powers fight over what to do with it.' },
  { key: 'road', title: 'The company on the road', text: 'Your angle: an adventuring company\'s long road. Build the campaign as a journey across Halann with a found family of companions, where each act is a new land with its own crisis, and the threads knot into one world-scale decision at the end.' },
]

const PITCH_SCHEMA = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    titleZh: { type: 'string' }, titleEn: { type: 'string' },
    logline: { type: 'string' },
    worldStake: { type: 'string' },
    origins: { type: 'array', items: { type: 'string' } },
    endings: { type: 'array', items: { type: 'string' } },
    canonRisks: { type: 'array', items: { type: 'string' } },
  },
  required: ['file', 'titleZh', 'logline', 'worldStake', 'origins', 'endings'],
}

const pitchPrompt = (a) => `${BRIEF}
YOUR JOB: write one campaign pitch for the ${ERA} campaign. ${a.text}
${args.steer ? `\nDIRECTION FROM THE CREATIVE LEAD (constraints and seeds, not a script — you may argue with them in a short "disagreements" section):\n${args.steer}\n` : ''}
Write the pitch to ${OUT}/pitch_${a.key}.md (create the folder). English is fine for the pitch (keep proper nouns in original spelling), but the working title and the one-paragraph logline must also be given in natural Chinese. Contents, in this order:
1. Title (中文 + English), logline, the world-scale stake in two sentences, the emotional spine in two sentences.
2. Canon anchors: the real events, people and places the campaign is bolted to, each with its source ([wiki: …] / [eu4: …] / [ck3: …] / [vic3: …]), and a list of what you invent.
3. The truth behind the plot and the reveal schedule (what the player believes at the end of each act).
4. The five origins (nation/people, why this seat matters, prologue premise in three sentences, which EU4 country tag's flag to show if one fits), the three factions, the ten pre-made characters (one line each), the four companions (who, voice in one line, the decision that can lose them).
5. Act-by-act outline: for the prologue (general shape), each of the four acts and the finale — where and when, the act's question, 6–8 key beats, the big choice(s) and what they do to the world tracks, the set-piece fights, the time skip if any.
6. World tracks and reputations (name, what moves them).
7. The endings (5–7): what the world looks like, and what conditions lead there. Include at least one ending that is a defensible "wrong" choice and one bittersweet one; no ending should be simply "evil".
8. Six sample moments written IN CHINESE in the game's voice (60–120 字 each): one prologue opening, one companion line, one check failure, one moral choice with its options, one fight intro, one ending paragraph. Follow ${G}/docs/STYLE_GUIDE.md strictly.
9. Risks: where this pitch strains canon or the engine, and how to defuse it.
Aim for 2,500–4,000 words. Return the structured summary.`

phase('Pitch')
const pitches = (await parallel(ANGLES.map(a => () => agent(pitchPrompt(a), { label: `pitch:${ID}:${a.key}`, phase: 'Pitch', schema: PITCH_SCHEMA }).then(r => r && ({ ...r, angle: a.key }))))).filter(Boolean)
log(`${pitches.length} pitches written for ${ID}`)

phase('Judge')
const JUDGE_SCHEMA = {
  type: 'object',
  properties: {
    scores: { type: 'array', items: { type: 'object', properties: { pitch: { type: 'string' }, score: { type: 'number' }, strengths: { type: 'array', items: { type: 'string' } }, problems: { type: 'array', items: { type: 'string' } } }, required: ['pitch', 'score'] } },
    winner: { type: 'string' },
    graft: { type: 'array', items: { type: 'string' } },
    mustFix: { type: 'array', items: { type: 'string' } },
  },
  required: ['scores', 'winner', 'graft', 'mustFix'],
}
const LENSES = [
  { key: 'canon', text: 'You judge as an Anbennar lore-keeper and long-time fan: is it true to the mods and the wiki (check the cited sources yourself in the corpus — do not trust citations), does it use what is special about this era rather than generic fantasy, would a fan be delighted or annoyed, are the inventions plausible, is the tone right? Catch every canon error and every missed opportunity (a famous figure, place or secret of the era the pitch ignores).' },
  { key: 'play', text: 'You judge as the game director: is the plot genuinely world-scale, do the five origins and three factions give different games, does each act have a real decision with visible consequences, are companions people rather than functions, is there variety of scene types (court, road, dungeon, battle, mystery, heist, trial), can it be built with the engine in docs/CONTENT_GUIDE.md within the fixed structure, do the endings follow from play, and do the Chinese sample moments sound like a person talking (judge them hard against docs/STYLE_GUIDE.md)?' },
]
const judgements = (await parallel(LENSES.map(l => () => agent(`${BRIEF}
YOUR JOB: judge the campaign pitches for the ${ERA} campaign in ${OUT}/ (${pitches.map(p => `pitch_${p.angle}.md`).join(', ')}). ${l.text}
Score each pitch 1–10 with concrete strengths and problems, name the winner, list the best ideas from the losing pitches that should be grafted onto the winner, and list what must be fixed in any final version. Write your full reasoning to ${OUT}/judge_${l.key}.md and return the structured verdict (use the angle key — ${pitches.map(p => p.angle).join(' / ')} — in "pitch" and "winner").`, { label: `judge:${ID}:${l.key}`, phase: 'Judge', schema: JUDGE_SCHEMA }).then(r => r && ({ ...r, lens: l.key }))))).filter(Boolean)

const tally = {}
for (const j of judgements) for (const s of j.scores || []) tally[s.pitch] = (tally[s.pitch] || 0) + (s.score || 0)
const ranked = Object.entries(tally).sort((a, b) => b[1] - a[1])
log(`Judge totals for ${ID}: ${ranked.map(([k, v]) => `${k}=${v}`).join(', ')}`)

phase('Bible')
const bibleA = await agent(`${BRIEF}
YOUR JOB: you are the lead designer. Three pitches for the ${ERA} campaign are in ${OUT}/ (pitch_*.md) with two judges' reports (judge_*.md). Judge totals: ${ranked.map(([k, v]) => `${k}=${v}`).join(', ')}. Synthesise the final design: start from the strongest pitch, graft the best ideas of the others, fix everything the judges flagged, and resolve disagreements yourself (say how in a short design note). Verify every canon fact you rely on against the corpus.
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
Write with the density of a working document: no filler, concrete names and dates. Return a short plain-text summary (title, origins, factions, companions, endings).`, { label: `bible:${ID}:story`, phase: 'Bible' })

const bibleB = await agent(`${BRIEF}
YOUR JOB: you are the lead designer's scene planner. Part one of the ${ERA} campaign bible is at ${BIBLE} — read it completely, plus the pitches and judge reports in ${OUT}/ for material. APPEND part two to the same file (do not rewrite part one; if you find a contradiction in part one, fix it minimally and note it). Write in Chinese, using only the names in the bible's 译名表 (add to the table if you need a new name).
Also read, if they exist by now: ${G}/js/data/enemies_core.js (bestiary ids, with level), ${G}/js/data/items_extra.js and items_base.js (item ids), ${S}/research/12_art_catalog.json and .md (art keys: loading screens are "load_N", event pictures "ev_<name>" — see ${G}/js/data/art.js for the exact keys), ${S}/research/10_bestiary_artifacts_places_orgs.md.
Part two sections:
## 11 分幕场景表 — for the 5 prologues (each 5–6 scenes), Acts 1–4 (each 16–20 scenes) and the finale (8–12 scenes plus one ending scene per ending). For EVERY scene one entry:
\`场景id｜标题｜地点·日期｜美术key（没有合适的写 —）\` then 2–4 lines: 这一场发生什么；在场的人；关键选项及其后果（写出要设置/读取的标记、世界局势和声望的变化、通向哪个场景）；检定（技能与大致 DC）；战斗（敌人 id×数量，或“新敌人：概念”）；出身/阵营/职业/种族专属内容；商店或休整。
Scene ids: prologues \`p_<originId>_01…\`, acts \`a1_01…\` \`a2_01…\` \`a3_01…\` \`a4_01…\`, finale \`f_01…\`, endings \`end_<endingId>\`. FIXED JOINTS so that different writers can work in parallel: every prologue's last scene goes to \`a1_01\`; Act N's last scene goes to \`a(N+1)_01\`; Act 4's last scene goes to \`f_01\`. State each act's entry assumptions (level, who can be in the party, which flags may be set) and exit guarantees.
Each act must include: at least 2 fights and 6 checks, a hub scene (camp/court/town with once-only options, a shop and a rest), at least one option exclusive to an origin, one to a faction, one to a class group (is.caster / is.martial …) and one to a race, one decision with no right answer, and each companion speaking at least once after they join. Vary the scene types across the campaign: court intrigue, travel, dungeon, battle, investigation, heist, trial or debate, negotiation, chase, feast.
## 12 标记表 — every flag: 名字（小写英文加下划线）、含义、在哪些场景设置、在哪些场景读取。Every flag that is read must be set somewhere earlier on every path that can reach the reader, or the reader must have a fallback.
## 13 任务与图鉴 — quests (id、标题、阶段提示、完成提示) and codex entries (id、标题、分组、一句话梗概; 40–60 entries covering people, places, peoples, faiths, events, magic — the scene writers will write the full text and unlock them as the player meets things).
## 14 本剧本需要的新敌人与物品 — named bosses and special foes not in the bestiary (id、名字、等级、概念、招牌招式), and story items (id、名字、作用).
## 15 写作分工 — a table assigning the scenes to writers: 序章 ×5（可两人分），第一至四幕各一人，终章与结局一人；and for each the hand-over notes they must respect.
Return a short plain-text summary: scene counts per section, number of flags, anything in part one you had to change.`, { label: `bible:${ID}:scenes`, phase: 'Bible' })

phase('Check')
const check = await agent(`${BRIEF}
YOUR JOB: you are the canon and structure checker for the finished ${ERA} campaign bible at ${BIBLE}. Scene writers will follow it literally, so mistakes multiply.
1. Canon: list at least 40 concrete claims the bible makes about the setting before or at the start date (who rules what, who is alive, ages, dates, relationships, geography, how magic and the faiths work, what is publicly known in this year) and check each against the corpus (${S}/CORPUS.md; mods outrank wiki). Fix errors in the bible directly. Anything invented must be listed as invention in section 1; add it if missing. Check that nothing "known" to characters in ${ERA} is actually only discovered later (see the secret-truth index in ${S}/research/08_cosmology_gods_magic.md) unless the campaign is deliberately about finding it early.
2. Names: every proper noun in the bible must appear in its 译名表 with one consistent Chinese form that matches ${S}/research/11_zh_glossary.json where an entry exists. Fix inconsistencies throughout the file.
3. Structure: scene counts within the fixed structure; every scene id unique; every goto target exists; the fixed joints hold; each act meets its minimums; every flag read is set earlier on all paths or has a fallback; every ending is reachable and its conditions are expressible with the bible's tracks/flags/reputations; premade characters use valid race/class/background ids from ${G}/js/data/ (check the files that exist); enemy and item ids used exist in ${G}/js/data/enemies_core.js / items_*.js or are listed in section 14.
4. Voice: the player-facing Chinese blurbs and sample lines must pass ${G}/docs/STYLE_GUIDE.md; rewrite the ones that do not.
Fix everything you can in the file, then append "## 16 核查记录" listing what you checked and changed and anything left for the creative lead to decide. Return a plain-text summary of the changes and the open questions.`, { label: `check:${ID}`, phase: 'Check' })

return { id: ID, pitches, judgements: judgements.map(j => ({ lens: j.lens, winner: j.winner, mustFix: j.mustFix, graft: j.graft })), ranked, bibleA, bibleB, check }
