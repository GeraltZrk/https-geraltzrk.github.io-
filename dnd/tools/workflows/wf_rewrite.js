export const meta = {
  name: 'anbennar-prose-rewrite',
  description: 'Rewrite one campaign\'s story text in the approved natural-Chinese voice, one small batch per agent, text only',
  phases: [{ title: 'Rewrite', detail: 'one writer per batch of extracted text' }],
}
const G = args.game, W = args.work, ID = args.id
const OPT = { model: args.model || 'fable', effort: args.effort || 'medium' }
const EXTRA = {
  meta: 'This batch is not scenes: it is the campaign\'s front matter (opening lines, descriptions of world tracks and reputations, origin and faction blurbs, premade characters, quest text) or its endings and epilogue cards. Endings and epilogues are narration and deserve your best prose; blurbs are short pitches a player reads before choosing; quest stages are one-line reminders and stay one line.',
  codex: 'This batch is codex entries (the in-game encyclopedia). Write them as plain, clear explanatory prose, the way a well-written Chinese reference or a knowledgeable person would explain the thing; no storytelling tricks. The one-line summaries (一句话简介) must stay within 15 characters.',
  data: 'This batch is enemy and item descriptions and enemies\' attack lines. Keep each to one or two natural sentences. In attack lines {name} is the enemy\'s name and must stay.',
}
phase('Rewrite')
const results = await pipeline(args.chunks, (chunk) => agent(`You are rewriting the Chinese story text of a tabletop-style RPG set in the Anbennar world (campaign ${ID}). The person who commissioned the game read the current text and said all of it reads as if an AI wrote it. He then approved a new voice from samples. Your job is to carry that approved voice through one batch of text.

Read, completely and in this order:
1. ${G}/docs/STYLE_GUIDE.md : the rules and the three approved samples. This is the standard. Study how each 改后 differs from its 原文.
2. ${G}/js/data/scenarios/${ID}/VOICES.md : how each character talks.
3. ${W}/in/${chunk}.txt : your batch. Numbered lines, each tagged with what it is (narration, a character's line, an option label, a success or failure result, a fight special, and so on).
${EXTRA[chunk.split('-')[0]] ? '\n' + EXTRA[chunk.split('-')[0]] + '\n' : ''}
Then write ${W}/out/${chunk}.txt : one line per number, "@编号 改好的文字", same order, nothing else.

How to work:
- Go scene by scene. First understand what is happening (the old text is terse and leaves a lot implied: work out who is who and what is going on from the lines themselves), then tell it the way a good Chinese novelist or a good translator would.
- Rewrite, do not patch. The old sentences are chopped into fragments: join them into flowing sentences, put in the connective words, let people talk like people. But change no facts: follow the guide's hard rules (内容不变、专有名词不变、记号原样、带条件的行各自成立、一条对一条).
- Lines tagged 选项 are option labels: short imperative actions. Most can stay as they are.
- Lines tagged with a speaker are spoken by that person: no quotation marks around them, no "他说".
- Short functional lines (a one-line result, the description of a fight special) stay short: one natural sentence. Do not pad.
- Text for gods and immortals (tagged [if is.god] and the like) gets the same treatment.

Then run: cd ${G} && node tools/rewrite-check.mjs ${W} ${chunk}
Fix everything it lists under 必须改. Look at what it lists under 留意 and fix what is really wrong. Run it again. Three rounds at most.

Last, read your whole output once more from top to bottom as a player would, aloud in your head. Wherever a sentence sounds translated, written, clipped or clever, say it the way a person would say it. This last read matters most.

Return three short lines: how many lines you rewrote, the checker's final 总结 line, and any numbers you were unsure about (with why).`, { ...OPT, label: `rewrite:${ID}:${chunk}`, phase: 'Rewrite' }).then((r) => ({ chunk, report: typeof r === 'string' ? r.slice(0, 500) : r })))
return { id: ID, results: results.filter(Boolean) }
