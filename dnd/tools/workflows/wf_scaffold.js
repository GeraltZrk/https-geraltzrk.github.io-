export const meta = {
  name: 'anbennar-campaign-scaffold',
  description: 'Turn a campaign bible into the code skeleton: god-line addendum, meta.js, plan.json, enemies, items, codex and stub scene files',
  phases: [
    { title: 'Scaffold', detail: 'meta.js, plan.json, enemies/items, stubs, index.js — and the codex in parallel' },
    { title: 'Verify', detail: 'independent check of the skeleton against the bible and the data' },
  ],
}
const MODELS = args.models || {}
const MM = (role) => { const m = MODELS[role] || args.model; return m ? { model: m } : {} }
const M = MM('default')
const S = args.scratch
const G = args.game
const ID = args.id
const ERA = args.era
const DIR = `${G}/js/data/scenarios/${ID}`
const BIBLE = `${DIR}/BIBLE.md`

const CONTEXT = `
PROJECT. A Chinese-language tabletop-style ("跑团") narrative RPG for the browser set in the world of Anbennar (Paradox mod setting; world Halann), in ${G}. Three campaigns (1022, 1444 and 1820 AA — the CK3, EU4 and Vic3 mod start dates). You are working on the ${ERA} campaign, scenario id "${ID}". Its design document ("the bible", in Chinese) is ${BIBLE}: story, name table (译名表), tracks, origins, factions, pre-made characters, companions, NPCs, endings, a scene-by-scene plan (§11), flag registry (§12), quests and codex list (§13), new enemies and items (§14), the writer assignment (§15) and the divine storyline for the godhood cheat (§16).
Engine and formats: ${G}/docs/CONTENT_GUIDE.md (campaign file layout in §0, bundle fields in §1, scenes, choices, conditions, effects, fights, shops, and §10 the god-line rules), ${G}/docs/DATA_GUIDE.md (enemy and item formats), ${G}/docs/STYLE_GUIDE.md (voice — all player-facing Chinese must follow it). A tiny working example of the file layout is ${G}/js/data/scenarios/demo/.
Data ids live in ${G}/js/data/: races.js, backgrounds.js, classes*.js (class ids: fighter barbarian rogue monk wizard sorcerer warlock cleric druid bard paladin ranger artificer), abilities*.js, conditions.js, items_base.js, items_extra.js, enemies_core.js (if it exists yet; otherwise enemies.js), art.js (ART.scenes keys such as load_N and ev_xxx, ART.portraits keys with race/gender/role, ART.flags) — ${G}/docs/ART_GUIDE.md says what each scene image depicts and how portrait keys are built. Flags: ART.flags is filled from the EU4 country tags listed under "flags" in ${G}/tools/art-config.json; put the tags your origins need in the report so the creative lead can add them (tag ↔ country names: ${S}/research/12_flag_tags.json). Lore corpus guide: ${S}/CORPUS.md; research dossiers: ${S}/research/; Chinese glossary: ${S}/research/11_zh_glossary.json.
Only use proper-noun spellings from the bible's 译名表.
`

const godline = null
phase('Scaffold')
const SCAFFOLD = `${CONTEXT}
YOUR JOB: build the campaign's code skeleton from the bible so that seven writers can fill in scenes in parallel. Create in ${DIR}/:
1. meta.js — \`export const META = { … }\` with every bundle field from CONTENT_GUIDE §1 EXCEPT scenes and codex: id "${ID}", era (the start year as a number), title, coin (the currency word people use in this era — check the lore), startDate, intro (2–3 short paragraphs shown on the origin screen, written to the style guide), tracks, reputations, origins (with flag = EU4 country tag where the bible names one; startScene = that origin's first prologue scene; start {rep, world, flags, items, gold}), factions, premades (10; valid race/subrace/class/background ids from the data files; abil = final scores; profs; a portrait key chosen from ART.portraits that matches race and gender — see art.js and PORTRAIT_RACES; blurb and bio in Chinese), races/classes/backgrounds allow-lists if the bible restricts them (for example no mechanim before the artificery age), companions (stats: abilities like a standard array for their class plus race, class, profs, equip from item ids, portrait key, blurb, gender), quests (title, desc, stages, doneText), chapters (one entry per prologue, act and the finale for the cheat menu's "jump to chapter": title, note, scene = the first scene of that part, and effects that make the jump playable — e.g. ['level 4', 'companion +x'] and the flags a typical player would have by then), flagNotes (Chinese label for each flag in §12), endings (id → { title, subtitle, text: [2–4 paragraphs] }, and divine: true on the god ending), endingScenes (ending id → scene id), epilogues (the after-story cards from §10 and §16 as { if, title, text: [...] } — write them properly now, in the style guide's voice; these are what the player reads last, so make them specific to what the tracks/flags/companions/origin say happened; 18–30 cards).
2. enemies.js — \`export const ENEMIES = { … }\`: the campaign-specific foes from §14 (named bosses and special enemies), in the DATA_GUIDE format, with level-appropriate numbers (see the strength table in DATA_GUIDE and compare with similar entries in the core bestiary). items.js — \`export const ITEMS = { … }\`: story items from §14 (quest items with quest: true so they cannot be sold; relic: true for relics).
3. plan.json — { "scenes": [every scene id in §11, in play order], "parts": { "prologues_a.js": [ids of the first three origins' prologues], "prologues_b.js": [ids of the other two], "act1.js": […], "act2.js": […], "act3.js": […], "act4.js": […], "finale.js": [finale scenes and every end_* scene] }, "entry": { "prologues_a.js": [first scene of each of its prologues], …, "act1.js": ["a1_01"], … }, "levels": { "prologues_a.js": 1, "prologues_b.js": 1, "act1.js": 2, "act2.js": 4, "act3.js": 6, "act4.js": 8, "finale.js": 10 }, "flags": [every flag name in §12 and §16] }.
4. The seven part files, each \`export const SCENES = { … }\` containing a STUB for every scene it owns: { id, title: (the bible's title), text: ['（待写）'], next: (the next scene in the bible's plan) } — or ending: '<endingId>' for end_* scenes — so that the whole graph already links from every origin's start to an ending.
5. index.js — imports META, CODEX (from ./codex.js — another person is writing that file right now; if it does not exist yet create a placeholder \`export const CODEX = {};\` and do not overwrite it if it exists), ENEMIES, ITEMS and the seven SCENES objects, and \`export default { ...META, codex: CODEX, enemies: ENEMIES, items: ITEMS, scenes: { …all } }\`.
Validate: \`cd ${G} && node tools/validate.mjs ${ID}\` must load and report 0 errors (warnings about stub text, missing god-line content and unreachable ending variety are expected at this stage; errors about unknown ids, bad conditions or effects are not). \`node tools/autoplay.mjs ${ID} --runs=6\` must reach endings without problems. Fix the bible if you find it inconsistent with what the engine can express (note every change at the end of the bible under "## 18 骨架说明").
Return a short plain-text summary: counts (scenes per part, flags, epilogue cards), any bible changes, anything missing from the data files that you had to work around.`

const CODEX = `${CONTEXT}
YOUR JOB: write the campaign's encyclopedia: ${DIR}/codex.js exporting \`CODEX = { id: { title, group, short, text: [paragraphs], art? } }\` for every entry listed in the bible's §13 (40–60 entries; add up to 10 more if the scene plan clearly needs them, and list additions at the end of the bible's §13). Groups: 历史 / 地理 / 人物 / 势力 / 种族 / 信仰 / 魔法 / 怪物.
Each entry: \`short\` under 16 字; \`text\` 2–3 paragraphs, 120–260 字 in total, written the way a well-read companion would explain it at the campfire — concrete, a little opinionated, with one detail the player will not find in the scenes — never as an encyclopedia abstract. Entries are unlocked when the player first meets the thing, so write what a person living in ${ERA} would know or believe: later revelations (see the secret-truth index in ${S}/research/08_cosmology_gods_magic.md) belong in separate entries that the plot unlocks, or are left out. Every fact must be canon: check the research dossiers and, for anything load-bearing, the corpus itself. Choose \`art\` keys from ${G}/docs/ART_GUIDE.md where an image really shows the subject (skip art if unsure).
Follow ${G}/docs/STYLE_GUIDE.md strictly and run a lint: \`cd ${G} && node -e "import('./tools/style-lint.mjs').then(async m=>{const c=(await import('./js/data/scenarios/${ID}/codex.js')).CODEX;let n=0;for(const [k,e] of Object.entries(c)){for(const p of [].concat(e.text)){for(const h of m.lintText(p)){console.log(k,h);n++}}}console.log('entries',Object.keys(c).length,'lint hits',n)})"\` — rewrite until there are 0 hits.
Return a short plain-text summary (entry count per group).`

const [scaffold, codex] = await parallel([
  () => agent(SCAFFOLD, { ...MM('check'), label: `scaffold:${ID}`, phase: 'Scaffold' }),
  () => agent(CODEX, { ...MM('creative'), label: `codex:${ID}`, phase: 'Scaffold' }),
])

phase('Verify')
const verify = await agent(`${CONTEXT}
YOUR JOB: independently verify the campaign skeleton in ${DIR}/ (meta.js, plan.json, enemies.js, items.js, codex.js, index.js, seven stub part files) against the bible, before seven writers start filling it in. Mistakes here multiply by seven.
Check and FIX directly:
1. Run \`cd ${G} && node tools/validate.mjs ${ID}\` and \`node tools/autoplay.mjs ${ID} --runs=10\`: 0 errors, 0 problems, every origin reaches an ending. Run \`node tools/check-part.mjs ${ID} <file>\` for each of the seven part files: each must load, own exactly its planned ids, and have its entry scenes.
2. plan.json matches §11 exactly (every scene id, right file, order), entries and levels are right, flags = §12 ∪ §16.
3. meta.js matches the bible: tracks/reputations keys and ranges; origins (ids, flags, start values); factions; premades (stats legal: valid ids, sensible final ability scores, two background skills plus class skills, portrait keys that exist and match race/gender); companions (class/race ids, equipment ids exist, stats sensible); quests; chapters (jump effects produce a playable state: level, companions, key flags); endings and endingScenes complete including the divine ending; epilogue cards cover every track at high and low values, every companion, every origin and faction, the god/immortal cards — and read well (rewrite weak ones to the style guide).
4. enemies.js / items.js: formats valid, numbers at the right level (run \`node tools/check-data.mjs --enc "<id>:1" --level <n>\` style spot checks if the class data is integrated; otherwise compare with the DATA_GUIDE table).
5. Names: every Chinese proper noun in meta.js and codex.js matches the bible's 译名表.
6. Canon spot-check of 20 facts in codex.js and the epilogues against the corpus.
Return a plain-text report: what you fixed, what remains for the creative lead.`, { ...MM('check'), label: `verify-skeleton:${ID}`, phase: 'Verify' })

const cut = (x) => (typeof x === 'string' ? x.slice(0, 1200) : x)
return { id: ID, scaffold: cut(scaffold), codex: cut(codex), verify: cut(verify) }
