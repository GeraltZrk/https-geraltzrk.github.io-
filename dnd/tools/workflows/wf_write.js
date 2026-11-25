export const meta = {
  name: 'anbennar-campaign-write',
  description: 'Write scene files of one campaign from its bible (one writer per part), each self-checked with the part checker',
  phases: [
    { title: 'Write', detail: 'one writer per scene file' },
    { title: 'Edit', detail: 'a second pair of eyes on each file: voice, consequences, god line' },
  ],
}
const S = args.scratch
const G = args.game
const ID = args.id
const ERA = args.era
const PARTS = args.parts
const DIR = `${G}/js/data/scenarios/${ID}`
const BIBLE = `${DIR}/BIBLE.md`

const CONTEXT = `
PROJECT. A Chinese-language tabletop-style ("跑团") narrative RPG for the browser, set in the world of Anbennar (Paradox mod setting; world Halann), in ${G}. The player picks a campaign, an origin (nation/people), a faction and a character, then plays a branching story told by a game-master narrator, with d20 skill checks, turn-based fights, companions, reputations and world-state tracks. You are on the ${ERA} campaign, scenario id "${ID}".
The person who commissioned the game asked for three things above all: a GRAND plot that decides the fate of nations and the world; choices of character, faction, nation and class that MATTER; and prose that sounds like a person telling a story at the table — "说人话，不要 AI 味". The last one is where most writers fail. Read the style guide twice.

READ BEFORE WRITING (in this order):
1. ${G}/docs/STYLE_GUIDE.md — the voice. Study the ✗/✓ pairs. Every paragraph you write will be linted against the banned-phrase list in ${G}/tools/style-lint.mjs (read that file too).
2. ${G}/docs/CONTENT_GUIDE.md — the exact scene format (§0 file layout, §2 scenes, §3 choices and checks, §4 conditions, §5 effects, §6 fights, §7 pacing, §9 shops, §10 the god line). ${G}/js/data/scenarios/demo/act1.js is a tiny working example.
3. The campaign bible ${BIBLE} — all of it. Your scenes are in §11; names in §3 (use ONLY these spellings); companions' and NPCs' voices in §8–§9; flags in §12; quests and codex ids in §13; new enemies/items in §14; the divine storyline in §17; hand-over notes in §15.
4. ${DIR}/meta.js (exact keys of tracks, reputations, origins, factions, companions, quests, endings), ${DIR}/plan.json (which scene ids are yours, entries, entry level, the flag list), ${DIR}/codex.js (codex ids to unlock with "codex <id>"), ${DIR}/enemies.js and ${DIR}/items.js (campaign-specific ids).
5. Data ids: ${G}/js/data/enemies_core.js (bestiary: id, level, name), ${G}/js/data/items_base.js and items_extra.js (items), class ids (fighter barbarian rogue monk wizard sorcerer warlock cleric druid bard paladin ranger artificer) and their tags, race ids and tags in ${G}/js/data/races.js, backgrounds in backgrounds.js — conditions such as is.caster / is.martial / is.elf / is.monstrous / is.noble use those tags, so grep for the real tag names before using one.
6. Art: ${G}/js/data/art.js lists the keys (load_N = painted scenes, ev_xxx = sepia event sketches). ${S}/research/12_art_catalog.json and .md describe what each image shows — pick art that actually fits the scene (place, people, mood); give most scenes art, reuse sparingly, never use an image that shows the wrong people or place.
7. For texture, mine the "Everyday & sensory detail" sections and the character tables of the research dossiers in ${S}/research/ that cover your scenes' places and people; go to the corpus (${S}/CORPUS.md) when you need a real detail: what they eat, what coin, what oath, what the building looks like. Real specifics from the setting are what make the prose good. Never contradict canon as of ${ERA}; where the bible and the corpus disagree about a fact, follow the corpus and say so in your report.
`

const RULES = `
HARD RULES
- Edit ONLY your own file. It must \`export const SCENES = { … }\` with every scene id that plan.json assigns to it (replace the stubs). You may add small extra scenes (suffix letters, e.g. a2_07b) when a branch needs room. Keep the fixed joints: the goto targets that lead out of your file are the ones the bible gives.
- Use only flags from plan.json's flag list (set and read them as §12 says). If you need a local flag, set and read it inside your own file and give it a name starting with your part's prefix.
- Every scene: 120–450 Chinese characters of narration in about three paragraphs (a few can be shorter or longer when the moment needs it), speakers as { speaker, text } blocks, then choices. Paragraphs under 120 characters where possible.
- Every choice does something: moves a track, a reputation, a companion's approval, a flag, gold, an item, hit points — or opens a different scene. No fake choices that all lead to the same text with no consequence. Outcome text (result / ok.text / fail.text) is one or two sentences of what happened, not a summary of the option.
- Checks fail forward: failure costs something and the story continues. Mix skills; use \`party: true\` when a companion could plausibly do it; add \`mods\` and \`adv\` for origin, faction, reputation, items and earlier flags so that earlier choices pay off. DCs per CONTENT_GUIDE §3.
- Fights: enemies from the bestiary or the campaign's enemies.js at the party's level; give most fights one or two \`specials\` that use the scene; give story fights a \`lose\` outcome (captured, rescued, robbed, driven off) instead of game over; \`win\` always has a goto.
- Exclusive content per CONTENT_GUIDE §7 minimums for your part: options for specific origins, factions, class groups and races (shown with \`tag\`), and each companion who can be in the party speaks in several scenes (\`if: "party.<id>"\`) in their own voice, with approval effects where they would care.
- The god line (CONTENT_GUIDE §10 and bible §17): implement every hook §17 assigns to your scenes, and reach the per-part minimum. A god gets extra paragraphs, a [神] option with a real cost, different reactions — never a different main path that mortals cannot follow.
- Bookkeeping: \`chapter\` on the first scene of each act/prologue; \`loc\` and \`date\` when they change; \`first\` effects for quest updates, codex unlocks (when something first appears on screen), companions joining, and the level milestone the bible gives for the end of your part (\`level N\`); a hub scene with a shop and a rest where the bible says.
- JavaScript: single-quoted strings; watch for unescaped apostrophes and for Chinese quotes inside strings (use “ ” or 「 」 in narration, never ASCII quotes inside single-quoted strings). No trailing prose outside the object. No functions — data only.

WORKING METHOD
1. Outline each of your scenes in a comment block at the top of the file (who, what changes, exits) and check the outline against the bible's §11.
2. Write the scenes. Read each one back as if you were saying it aloud to players. Cut every sentence that explains a feeling, summarises a theme or could appear in any fantasy story. Replace abstractions with things: a named person, an object, a number, a smell, a line of dialogue.
3. Run \`cd ${G} && node tools/check-part.mjs ${ID} <your file>\` and fix until: 0 errors, 0 problems, 0 warnings that begin with 文风, and every scene reached by the random walks unless it truly needs a specific origin/faction. Read the remaining warnings and fix the real ones.
4. Final self-review: pick your five weakest scenes and rewrite them.
`

phase('Write')
const results = await pipeline(
  PARTS,
  (p) => agent(`${CONTEXT}
YOUR JOB: you are the writer of \`${p.file}\` — ${p.what}. Write ${DIR}/${p.file}.
${RULES}
Return a plain-text report: scene count, total characters, checks, fights, how many scenes react to is.god / is.immortal, which exclusive options you wrote (origin/faction/class/race), any place where you departed from the bible and why, and the last output of check-part.`, { label: `write:${ID}:${p.file}`, phase: 'Write' }),
  (report, p) => agent(`${CONTEXT}
YOUR JOB: you are the editor for \`${DIR}/${p.file}\` (${p.what}), which another writer has just finished. You did not write it; be the reader the commissioner will be. Read the file from top to bottom the way a player would, following branches.
Fix directly in the file, keeping scene ids, joints and flags intact:
1. VOICE. This is the main job. Hunt for anything that reads machine-written or like translated boilerplate: explained feelings, summarising last lines, stock scenery, three-part lists, symmetrical sentences, adjectives doing a noun's work, NPCs who all talk alike, options written as attitudes instead of actions, "epic" vocabulary. Rewrite those passages so they sound like a good game master talking: concrete, specific to this place and these people, dry where it can be funny. Check NPC and companion lines against their voice notes in the bible (§8–§9) — each should be recognisable without the speaker label. The linter (${G}/tools/style-lint.mjs) only catches the obvious; you must catch the rest.
2. CONSEQUENCE. Every choice should matter (track, reputation, approval, flag, resource, or a different scene). Give fake choices real consequences or merge them. Check that earlier choices are remembered where the bible says they should be (conditions on flags), and that failures fail forward.
3. THE GOD LINE. Check the bible's §17 hooks for these scenes are implemented and good: the [神] options have real costs, reactions differ by who is reacting, companions do not all applaud. Add what is missing (CONTENT_GUIDE §10 minimums).
4. CANON AND NAMES. Proper nouns must match the bible's 译名表. Spot-check ten setting facts against the corpus (${S}/CORPUS.md) and fix errors.
5. PLAY. Balance of checks and fights, DCs sane for the level, shops/rests where promised, exclusive options present for origins, factions, classes and races.
After editing run \`cd ${G} && node tools/check-part.mjs ${ID} ${p.file}\` until 0 errors, 0 problems and 0 文风 warnings.
Return a plain-text report: the ten most significant rewrites as before → after pairs (one line each), what you added, what you could not fix.
The writer's own report, for context:
${typeof report === 'string' ? report.slice(0, 3000) : ''}`, { label: `edit:${ID}:${p.file}`, phase: 'Edit' }).then(e => ({ file: p.file, writer: typeof report === 'string' ? report.slice(0, 1500) : report, editor: typeof e === 'string' ? e.slice(0, 2500) : e }))
)
return { id: ID, results: results.filter(Boolean) }
