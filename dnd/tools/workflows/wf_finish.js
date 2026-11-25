export const meta = {
  name: 'anbennar-campaign-finish',
  description: 'Lean finish for one written campaign: one agent integrates the seven scene files, fixes every validator and autoplay problem, and makes every ending reachable',
  phases: [{ title: 'Finish', detail: 'integrate, fix, verify' }],
}
const G = args.game
const ID = args.id
const ERA = args.era
const DIR = `${G}/js/data/scenarios/${ID}`
const opts = args.model ? { model: args.model } : {}

phase('Finish')
const report = await agent(`PROJECT: a Chinese-language browser tabletop RPG set in the Anbennar mod world, in ${G}. The ${ERA} campaign "${ID}" in ${DIR} has just been written by seven writers, one per scene file (prologues_a.js, prologues_b.js, act1–act4.js, finale.js), each checked on its own. Nobody has yet run the whole campaign end to end. You are the integrator. The token budget is tight this week: work from tool output and open only the scenes a problem points at. Do NOT read the whole campaign, do NOT rewrite prose for taste, do NOT re-check canon.

Formats: ${G}/docs/CONTENT_GUIDE.md (scene format, conditions, effects, fights, §10 god line). The design is in ${DIR}/BIBLE.md (§11 scene table, §12 flags, §16 god line): grep it for the bit you need instead of reading it all.

DO, in order:
1. \`cd ${G} && node tools/validate.mjs ${ID}\`. Fix every error (unknown ids, flags read but never set, bad effects, broken gotos). For "flag read but never set": find in BIBLE §12 where it should be set and set it there, or give the reader a fallback. Then fix every warning that starts with 文风 (rewrite only that sentence, in the same plain spoken voice as its neighbours) and every warning that would let a player get stuck.
2. \`node tools/autoplay.mjs ${ID} --runs=30\`. Fix every problem (crash, soft-lock, loop, a fight with no way to win or lose forward, an origin that cannot reach an ending). Autoplay mixes mortal, invincible and ascended (god) runs.
3. Endings: autoplay prints which endings were reached. For every ending that was never reached, read the finale's routing scene and the conditions it tests, trace where earlier parts set those flags/tracks, and fix the chain so that a player who makes the matching choices can reach it (the divine ending needs the god cheat: is.god). Verify with \`node tools/autoplay.mjs ${ID} --runs=60\` or by a targeted trace (\`--trace=<originId>\`). State for each ending, in one line, what leads to it.
4. Seams: each part's exits must go to the next part's entry scene (plan.json "entry"); each prologue's last scene goes to a1_01. Check by grep, fix if not.
5. Re-run validate and autoplay at the end: 0 errors, 0 problems.

Return a plain-text report (under 400 words): final validate and autoplay summary lines, what you fixed (one line each), the ending → path table, and anything you could not fix.`, { ...opts, label: `finish:${ID}`, phase: 'Finish' })
return { id: ID, report: typeof report === 'string' ? report.slice(0, 3000) : report }
