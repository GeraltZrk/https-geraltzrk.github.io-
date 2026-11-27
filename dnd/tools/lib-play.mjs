// Shared random-walk player used by autoplay.mjs and check-part.mjs.
import * as R from '../js/core/rules.js';
import { buildCharacter, newGame, defaultCheats, setAscended } from '../js/core/state.js';
import { levelUp, levelUpNeeds } from '../js/core/effects.js';
import { Engine } from '../js/core/engine.js';
import * as Combat from '../js/core/combat.js';

export const STEP_LIMIT = 4000;

export function makeCharacter(db, sc, origin, rnd) {
  const pre = (sc.premades || []).filter((p) => !p.origins || p.origins.includes(origin.id));
  if (pre.length && rnd() < 0.4) return buildCharacter(db, Object.assign({ abilFinal: true }, pre[Math.floor(rnd() * pre.length)]));
  const classes = Object.keys(db.classes).filter((c) => !sc.classes || sc.classes.includes(c));
  const races = Object.keys(db.races).filter((c) => !sc.races || sc.races.includes(c));
  const bgs = Object.keys(db.backgrounds).filter((c) => !sc.backgrounds || sc.backgrounds.includes(c));
  const cls = classes[Math.floor(rnd() * classes.length)];
  const race = races[Math.floor(rnd() * races.length)];
  const def = db.classes[cls];
  const order = def.abilOrder || R.ABILS;
  const vals = [15, 14, 13, 12, 10, 8];
  const abil = {};
  order.forEach((a, i) => { abil[a] = vals[i]; });
  const profs = def.skills ? def.skills.from.slice().sort(() => rnd() - 0.5).slice(0, def.skills.n) : [];
  return buildCharacter(db, { name: '测试员', gender: rnd() < 0.5 ? 'm' : 'f', cls, race, background: bgs[Math.floor(rnd() * bgs.length)], abil, profs });
}

export function autoLevel(state, db, rnd) {
  let guard = 0;
  while (state.pc.pendingLevels > 0 && guard++ < 20) {
    const needs = levelUpNeeds(state.pc, db);
    const choice = {};
    if (needs.subclass) { const subs = db.classes[state.pc.cls].subclasses; choice.subclass = subs[Math.floor(rnd() * subs.length)].id; }
    if (needs.asi) { const prim = db.classes[state.pc.cls].primary || 'str'; choice.asi = state.pc.abil[prim] <= 18 ? { [prim]: 2 } : { con: 2 }; }
    const before = state.pc.level;
    levelUp(state, db, choice);
    if (state.pc.level === before) break;
  }
}

export function fight(eng, rnd) {
  const c = eng.state.combat;
  let guard = 0;
  while (!c.over && guard++ < 400) {
    const u = Combat.currentUnit(c);
    if (!u.sheet) { Combat.endTurn(eng.ctx); Combat.runUntilPlayer(eng.ctx, false); continue; }
    const acts = Combat.availableActions(eng.ctx);
    const usable = acts.abilities.filter((a) => !a.disabled);
    const foes = Combat.living(c, 'enemy');
    const friends = Combat.living(c, 'ally');
    const roll = rnd();
    if (acts.specials.length && roll < 0.25 && !c.acted) Combat.useSpecial(eng.ctx, acts.specials[0].id, eng.combatCheck());
    else if (usable.length && roll < 0.65) {
      const a = usable[Math.floor(rnd() * usable.length)];
      const pool = a.target === 'ally' ? friends : foes;
      const t = pool.length ? pool[Math.floor(rnd() * pool.length)] : null;
      Combat.useAbility(eng.ctx, u, a.id, t ? t.uid : null);
    } else if (acts.items.length && roll > 0.95 && !c.acted) Combat.useItem(eng.ctx, acts.items[0].id, friends[0] && friends[0].uid);
    if (!c.over && !c.acted && foes.length) { Combat.attackAction(eng.ctx, Combat.living(c, 'enemy')[0].uid); while (!c.over && c.attacksLeft > 0 && Combat.living(c, 'enemy').length) Combat.attackAction(eng.ctx, Combat.living(c, 'enemy')[0].uid); }
    if (!c.over) { Combat.endTurn(eng.ctx); Combat.runUntilPlayer(eng.ctx, false); }
  }
  if (!c.over) throw new Error('combat did not finish in 400 player turns');
  return c.over;
}

export function playOnce(db, sc, origin, faction, seed, opts = {}) {
  const rnd = R.seededRng(seed);
  R.setRng(rnd);
  const ch = makeCharacter(db, sc, origin, rnd);
  const cheats = defaultCheats();
  if (opts.god) { cheats.god = true; }
  const state = newGame(db, sc, { originId: origin.id, factionId: faction ? faction.id : null, character: ch, difficulty: 'normal', cheats });
  if (opts.ascended) setAscended(state, db, true);
  if (opts.prepare) opts.prepare(state, rnd);
  const eng = new Engine(db, sc, state);
  const out = { origin: origin.id, faction: faction ? faction.id : null, cls: ch.cls, race: ch.race, seed, steps: 0, ending: null, problem: null, visited: null, fights: 0, losses: 0, trace: [] };
  try {
    let v = eng.start();
    for (let step = 0; step < STEP_LIMIT; step++) {
      out.steps = step;
      const st = eng.state;
      autoLevel(st, db, rnd);
      if (opts.trace) out.trace.push(`${st.scene} [${v.type}]`);
      if (v.type === 'ending') { out.ending = v.ending; if (!opts.noEpilogue) eng.epilogue(); break; }
      if (v.type === 'gameover') { out.losses++; if (!eng.undo()) { out.problem = `gameover at ${st.scene} with no undo`; break; } eng.state.cheats.god = true; v = eng.view(); continue; }
      if (v.type === 'combat') { out.fights++; const res = fight(eng, rnd); if (res === 'lose') out.losses++; v = eng.finishCombat(); continue; }
      if (v.type === 'result') { v = eng.proceed(); continue; }
      if (v.fight || v.next) { v = eng.proceed(); continue; }
      if (v.deadEnd) { out.problem = `soft-lock: no available choice at scene ${st.scene}`; break; }
      const open = v.choices.filter((c) => !c.disabled);
      if (!open.length) { out.problem = `soft-lock: all choices disabled at scene ${st.scene}`; break; }
      if ((st.visited[st.scene] || 0) > 40) { out.problem = `loop: scene ${st.scene} entered ${st.visited[st.scene]} times`; break; }
      // prefer choices not picked before so hubs get explored and then left
      const fresh = open.filter((c) => !c.seen);
      const pool = fresh.length && rnd() < 0.85 ? fresh : open;
      const pick = pool[Math.floor(rnd() * pool.length)];
      v = eng.choose(pick.i);
    }
    if (!out.ending && !out.problem) out.problem = `no ending after ${STEP_LIMIT} steps (last scene ${eng.state.scene})`;
    out.godSeen = !!eng.state.cheats.ascended;
    out.visited = Object.keys(eng.state.visited);
    out.level = eng.state.pc.level;
  } catch (e) {
    out.problem = `CRASH at scene ${eng.state.scene}: ${e.message}`;
    out.stack = String(e.stack).split('\n').slice(0, 4).join(' | ');
    out.visited = Object.keys(eng.state.visited);
  }
  return out;
}

