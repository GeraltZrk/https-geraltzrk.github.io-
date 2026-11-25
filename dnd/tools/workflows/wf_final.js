export const meta = {
  name: 'anbennar-campaign-final',
  description: 'Integrate a written campaign: full validation and playtests, canon check, continuity read-through, final fixes',
  phases: [
    { title: 'Integrate', detail: 'whole-bundle validation and random playtests; fix cross-file problems' },
    { title: 'Review', detail: 'canon check and continuity read-through in parallel' },
    { title: 'Polish', detail: 'adversarial "does it sound human" pass and final verification' },
  ],
}
const S = args.scratch
const G = args.game
const ID = args.id
const ERA = args.era
const DIR = `${G}/js/data/scenarios/${ID}`
const BIBLE = `${DIR}/BIBLE.md`
const CONTEXT = `
PROJECT. A Chinese-language tabletop-style ("跑团") narrative RPG for the browser set in the world of Anbennar (Paradox mod setting; world Halann), in ${G}. You are on the ${ERA} campaign, scenario id "${ID}", in ${DIR}/ (meta.js, codex.js, enemies.js, items.js, plan.json, prologues_a.js, prologues_b.js, act1.js … act4.js, finale.js, index.js). The design bible is ${BIBLE}. Formats: ${G}/docs/CONTENT_GUIDE.md; voice: ${G}/docs/STYLE_GUIDE.md; lore corpus guide: ${S}/CORPUS.md; research dossiers and the Chinese glossary: ${S}/research/.
The commissioner's requirements: a grand plot that decides the fate of nations and the world; character, faction, nation and class choices that matter; a cheat that makes the hero a god/immortal with story, options and endings reacting to it (CONTENT_GUIDE §10); and prose that sounds like a person telling a story — no machine flavour.
Tools: \`cd ${G} && node tools/validate.mjs ${ID}\` (structure, references, style lint), \`node tools/autoplay.mjs ${ID} --runs=40\` (random playthroughs of every origin as mortal and as god; reports crashes, soft-locks, loops, coverage and endings), \`node tools/check-part.mjs ${ID} <file>\` (one file in isolation).
`
const STAGE = args.stage || 'all'
let integrate = null, canon = null, continuity = null, polish = [], final = null
if (STAGE === 'all' || STAGE === 'review') {
phase('Integrate')
integrate = await agent(`${CONTEXT}
YOUR JOB: integration. Seven writers wrote the scene files separately. Make the campaign work as one.
1. Run validate and autoplay. Fix every error and problem: unknown ids, flags read but never set (find where the bible says it should be set and add it, or add a fallback), soft-locks (a scene where a character without the right origin/flag has no option), loops, fights without a win path, endings never reached (check the conditions in the finale against what earlier acts actually set), scenes never visited (find why — dead branch, impossible condition, missing link).
2. Level curve: autoplay reports the average end level; the bible wants level 10 before the finale. Check each act's closing scene has its \`level N\` milestone and that fights at each stage are winnable but not trivial (autoplay's fights lost count; spot-check with \`node tools/check-data.mjs --enc "<ids>" --level N\`).
3. Joints: read the last scene of each part and the first of the next back to back; fix seams (location, date, who is present, what was just decided).
4. Chapters in meta.js: test each "jump to chapter" entry produces a sensible state (use a small node script with the engine: apply the effects and enter the scene) and fix the effects lists.
5. World tracks and reputations: grep every effect; make sure each track moves in both directions across the campaign and that the endings' and epilogues' conditions use ranges the play can actually reach (use autoplay's ending distribution; no ending should take over 70% of random runs, none under 3% unless it is the divine ending or a deliberately hard one).
Re-run until validate shows 0 errors and autoplay 0 problems with every ending reached at least once in 60 runs per origin (\`--runs=60\`). Return a plain-text report with the final tool output and what you changed.`, { label: `integrate:${ID}`, phase: 'Integrate' })

phase('Review')
;[canon, continuity] = await parallel([
  () => agent(`${CONTEXT}
YOUR JOB: canon check of the WRITTEN campaign (all scene files, codex.js, meta.js epilogues and endings). You are an Anbennar lore-keeper. Read everything. List at least 60 concrete setting claims the text makes or implies (who rules what in ${ERA}, who is alive and how old, relationships, dates, geography and travel, what the faiths teach, how magic works and who may use it, what is publicly known versus secret in this year, customs, coin, titles, how peoples treat each other) and check each against the corpus (mods outrank wiki; research dossiers are a guide, not a source). Also check for anachronisms in things and words (for example firearms, printing, Corinite terms before 1444, the Magisterium before it exists, modern idiom in medieval mouths). Fix errors directly in the files with the smallest change that keeps the scene working; keep the voice. Proper nouns must match the bible's 译名表. Run validate afterwards (0 errors). Return a plain-text report: what you checked, each error found and how you fixed it, and deliberate departures from canon you left alone (with reasons).`, { label: `canon:${ID}`, phase: 'Review' }),
  () => agent(`${CONTEXT}
YOUR JOB: continuity read-through. Read the whole campaign in play order (prologues, acts 1–4, finale, endings, epilogues) as one story, twice: once as a mortal of one origin, once imagining the hero is a god.
Fix directly:
1. Story: does each act's question get asked and answered; is the grand stake visible from Act 1 and paid off in the finale; do reveals land in the order the bible's §2 sets; does anything important happen off-screen that should be a scene; are there contradictions (a dead character speaking, a place described two ways, a companion present before joining or silent for an act)?
2. Characters: each companion and major NPC keeps one voice and one set of wants across files written by different people; their arcs (bible §8) actually happen on screen; approval effects are consistent with what they care about.
3. Memory: choices made early are acknowledged later (conditional paragraphs on flags, changed options). Add the missing callbacks — this is what makes a campaign feel written rather than assembled. Aim for at least 25 callbacks across the campaign.
4. The god line and immortality: consistent treatment across acts (people who saw a miracle in Act 1 remember it in Act 3), the divine ending reachable and earned, time skips acknowledge immortality.
5. Endings and epilogues: each ending scene and its text pay off the specific things the player did; epilogue cards do not contradict the ending they follow.
Keep ids, flags and joints valid; run validate and autoplay (--runs=30) after editing: 0 errors, 0 problems. Return a plain-text report of what you changed and what you think is still weak.`, { label: `continuity:${ID}`, phase: 'Review' }),
])

}
const FILES = args.files || ['prologues_a.js', 'prologues_b.js', 'act1.js', 'act2.js', 'act3.js', 'act4.js', 'finale.js']
if (STAGE === 'all' || STAGE === 'polish') {
phase('Polish')
polish = await parallel(FILES.map(f => () => agent(`${CONTEXT}
YOUR JOB: you are a native Chinese fiction editor who has read too much machine-written prose and is allergic to it. The commissioner's exact words: "剧情要说人话不要像ai，不能用ai味". Read ${G}/docs/STYLE_GUIDE.md, then read ${DIR}/${f} line by line.
For EVERY paragraph and line of dialogue ask: would a person running this game at a table actually say this sentence, this way? Mark it for rewriting if it: explains what someone feels or realises; ends on a moral, a foreshadowing or a neat aphorism; uses scenery that could be anywhere; leans on 仿佛/似乎/某种/一丝/缓缓/微微-type hedges and softeners; stacks adjectives or four-character phrases; builds sentences in matched pairs or threes; has every NPC speaking in the same complete, polite sentences; uses a translated-English structure (long attributive clauses before 的, "当……的时候" openers, passive 被 where Chinese would not use it); or says in twelve words what four would. Then rewrite: shorter, concrete, in the idiom of the speaker (a dwarf foreman, a Lorentish courtier and an orc do not share a vocabulary), with the humour dry. Keep meaning, ids, effects, conditions and structure. Do not add new stock phrases while removing old ones; vary rhythm; let some lines be blunt.
Also fix choice labels that are not actions, and outcome texts that merely restate the choice.
Work through the whole file; do not sample. When done run \`cd ${G} && node tools/check-part.mjs ${ID} ${f}\` (0 errors, 0 problems, 0 文风 warnings).
Return a plain-text report: how many paragraphs you rewrote out of how many, and twelve before → after examples.`, { label: `polish:${ID}:${f}`, phase: 'Polish' })))

}
if (STAGE === 'all' || STAGE === 'final') {
phase('Polish')
final = await agent(`${CONTEXT}
YOUR JOB: final verification after several editors touched the files. Run validate (0 errors; list remaining warnings and fix the ones that matter, including every 文风 warning) and autoplay with --runs=60 (0 problems; every ending reached; report coverage). Fix whatever broke. Then play three full routes by reading (one mortal, one god, one with a different origin and faction) and fix any leftover seam or typo you meet. Return a plain-text report with the final tool outputs: scene count, total characters, endings distribution, coverage, godScenes, remaining warnings.`, { label: `final:${ID}`, phase: 'Polish' })
}
return { id: ID, stage: STAGE, integrate, canon, continuity, polish: polish.map(p => typeof p === 'string' ? p.slice(0, 1200) : p), final }
