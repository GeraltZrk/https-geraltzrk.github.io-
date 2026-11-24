// Story engine: walks the scene graph, resolves checks, hands off to combat, tracks endings.
import * as R from './rules.js';
import { evaluate } from './expr.js';
import { applyEffects } from './effects.js';
import { makeGetter, partySheets, serialise, migrate } from './state.js';
import * as Combat from './combat.js';

const HISTORY_MAX = 25;

export class Engine {
  constructor(db, scenario, state) {
    this.db = db;
    this.scenario = scenario;
    this.state = state;
    this.listeners = [];
  }

  get ctx() { return { state: this.state, db: this.db, scenario: this.scenario }; }
  on(fn) { this.listeners.push(fn); }
  emit(type, data) { for (const fn of this.listeners) fn(type, data); }
  getter() { return makeGetter(this.state, this.db, this.scenario); }
  test(cond) {
    try { return evaluate(cond, this.getter()); } catch (e) { console.warn('bad condition', cond, e); return false; }
  }
  scene(id) {
    const s = this.scenario.scenes[id || this.state.scene];
    if (!s) throw new Error(`missing scene "${id || this.state.scene}"`);
    return s;
  }

  // ---- text -------------------------------------------------------------
  interpolate(text) {
    const st = this.state;
    const pc = st.pc;
    const race = this.db.races[pc.race];
    const cls = this.db.classes[pc.cls];
    const origin = (this.scenario.origins || []).find((o) => o.id === st.origin);
    return String(text)
      .replace(/\{\?([^:{}]+):([^|{}]*)(?:\|([^{}]*))?\}/g, (m, cond, a, b) => (this.test(cond.trim()) ? a : (b || '')))
      .replace(/\{m:([^|{}]*)\|f:([^{}]*)\}/g, (m, a, b) => (pc.gender === 'f' ? b : a))
      .replace(/\{pc\}/g, pc.name)
      .replace(/\{ta\}/g, pc.gender === 'f' ? '她' : '他')
      .replace(/\{race\}/g, race ? race.name : pc.race)
      .replace(/\{cls\}/g, cls ? cls.name : pc.cls)
      .replace(/\{origin\}/g, origin ? origin.name : '')
      .replace(/\{nation\}/g, origin ? (origin.nationName || origin.name) : '');
  }

  paragraphs(list) {
    const out = [];
    for (const p of list || []) {
      if (typeof p === 'string') { out.push({ text: this.interpolate(p) }); continue; }
      if (!p) continue;
      if (p.if !== undefined && !this.test(p.if)) continue;
      const texts = Array.isArray(p.text) ? p.text : [p.text];
      for (const t of texts) out.push({ text: this.interpolate(t), speaker: p.speaker ? this.interpolate(p.speaker) : null, cls: p.cls || null });
    }
    return out;
  }

  // ---- scene flow ---------------------------------------------------------
  /** Enter a scene: run its effects, record the visit, autosave. */
  enter(id, opts = {}) {
    const st = this.state;
    const sc = this.scene(id);
    st.scene = id;
    st.phase = 'scene';
    st.pending = null;
    const firstVisit = !st.visited[id];
    st.visited[id] = (st.visited[id] || 0) + 1;
    st.stats.scenes += 1;
    if (sc.date) st.date = sc.date;
    if (sc.loc) st.location = sc.loc;
    let notes = opts.notes || [];
    if (firstVisit && sc.first) notes = notes.concat(applyEffects(sc.first, this.ctx));
    if (sc.enter) notes = notes.concat(applyEffects(sc.enter, this.ctx));
    st.notes = notes;
    if (sc.ending) { st.phase = 'ending'; st.ending = sc.ending; if (!st.endings.includes(sc.ending)) st.endings.push(sc.ending); }
    this.emit('enter', { id, firstVisit });
    return this.view();
  }

  start() {
    if (!this.state.stats.startedAt) this.state.stats.startedAt = Date.now();
    if (this.state.phase === 'combat' && this.state.combat) return this.view();
    if (this.state.visited[this.state.scene]) return this.view();
    return this.enter(this.state.scene);
  }

  choiceState(sc, ch, i) {
    const st = this.state;
    const key = `${sc.id}#${i}`;
    if (ch.once && st.picked[key]) return null;
    const cheats = st.cheats;
    if (ch.if !== undefined && !this.test(ch.if)) {
      if (!(cheats.revealHidden || cheats.unlockAll)) return null;
    }
    let disabled = null;
    if (ch.req !== undefined && !this.test(ch.req)) disabled = ch.reqText || '条件不足';
    if (ch.cost && ch.cost.gold && st.gold < ch.cost.gold && !cheats.freeShop) disabled = `需要 ${ch.cost.gold} ${this.scenario.coin || '金币'}`;
    if (ch.cost && ch.cost.item && !(st.inv[ch.cost.item] > 0)) disabled = `需要 ${(this.db.items[ch.cost.item] || {}).name || ch.cost.item}`;
    if (cheats.unlockAll) disabled = null;
    const out = { i, key, text: this.interpolate(ch.text), tag: ch.tag || null, disabled, seen: !!st.picked[key], hiddenByIf: ch.if !== undefined && !this.test(ch.if) };
    if (ch.check) out.check = this.previewCheck(ch.check);
    if (ch.cost && ch.cost.gold) out.costText = `${ch.cost.gold} ${this.scenario.coin || '金币'}`;
    if (ch.combat) out.combat = true;
    return out;
  }

  view() {
    const st = this.state;
    if (st.phase === 'combat' && st.combat) return { type: 'combat', combat: st.combat };
    const sc = this.scene();
    const base = {
      id: sc.id, title: sc.title ? this.interpolate(sc.title) : null, chapter: sc.chapter || null, art: sc.art || null,
      date: st.date, location: st.location, notes: st.notes || [],
    };
    if (st.phase === 'result' && st.pending) {
      return Object.assign(base, { type: 'result', roll: st.pending.roll || null, paragraphs: st.pending.paragraphs || [], outcome: st.pending.outcome || null });
    }
    if (st.phase === 'ending') {
      return Object.assign(base, { type: 'ending', ending: st.ending, paragraphs: this.paragraphs(sc.text) });
    }
    const choices = [];
    (sc.choices || []).forEach((ch, i) => { const c = this.choiceState(sc, ch, i); if (c) choices.push(c); });
    const v = Object.assign(base, { type: 'scene', paragraphs: this.paragraphs(sc.text), choices });
    if (sc.combat) v.fight = { label: sc.combat.label || '战斗！' };
    else if (!choices.length && sc.next) v.next = true;
    else if (!choices.length) v.deadEnd = true;
    return v;
  }

  snapshot() {
    const st = this.state;
    const snap = serialise(st);
    st.history.push(snap);
    if (st.history.length > HISTORY_MAX) st.history.shift();
  }

  canUndo() { return this.state.history.length > 0; }
  undo() {
    const st = this.state;
    if (!st.history.length) return false;
    const hist = st.history;
    const snap = hist.pop();
    const restored = migrate(JSON.parse(snap));
    restored.history = hist;
    restored.cheats = Object.assign({}, st.cheats);
    this.state = restored;
    this.emit('undo', {});
    return true;
  }

  // ---- checks -------------------------------------------------------------
  /** Work out who rolls, with what bonus. */
  checkSetup(check) {
    const st = this.state;
    const db = this.db;
    const skills = [check.skill, ...(check.alt || [])].filter(Boolean);
    let best = null;
    const sheets = check.party ? partySheets(st) : [st.pc];
    for (const ch of sheets) {
      if (skills.length) {
        for (const sk of skills) {
          const b = R.skillBonus(ch, db, sk);
          if (!best || b > best.bonus) best = { who: ch, skill: sk, bonus: b, label: R.SKILLS[sk].name };
        }
      } else {
        const abil = check.abil || 'str';
        const pas = R.passivesOf(ch, db);
        const b = check.save ? R.saveBonus(ch, db, abil, pas) : R.abilMod(R.abilScore(ch, abil, pas));
        if (!best || b > best.bonus) best = { who: ch, skill: null, abil, bonus: b, label: R.ABIL_NAMES[abil] + (check.save ? '豁免' : '') };
      }
    }
    const mods = [];
    for (const m of check.mods || []) if (this.test(m.if)) mods.push({ n: m.n, why: m.why || '' });
    const pas = R.passivesOf(best.who, db);
    let adv = check.adv !== undefined && check.adv !== false && (check.adv === true || this.test(check.adv));
    let dis = check.dis !== undefined && check.dis !== false && (check.dis === true || this.test(check.dis));
    if (best.skill && pas.skillAdv.includes(best.skill)) adv = true;
    if (check.save && pas.saveAdv.includes(best.abil)) adv = true;
    const total = best.bonus + mods.reduce((s, m) => s + m.n, 0);
    const mode = adv && !dis ? 'adv' : dis && !adv ? 'dis' : 'normal';
    return { ...best, mods, total, mode, dc: check.dc };
  }

  previewCheck(check) {
    const s = this.checkSetup(check);
    return { label: s.label, who: s.who === this.state.pc ? null : s.who.name, dc: s.dc, bonus: s.total, mode: s.mode, chance: R.successChance(s.total, s.dc, s.mode) };
  }

  rollCheck(check) {
    const st = this.state;
    const s = this.checkSetup(check);
    let force = null;
    if (st.cheats.fixedRoll) force = st.cheats.fixedRoll;
    if (st.cheats.autoSuccess) force = 20;
    const roll = R.d20({ adv: s.mode === 'adv', dis: s.mode === 'dis', force });
    const total = roll.kept + s.total;
    const crit = roll.kept === 20;
    const fumble = roll.kept === 1;
    const success = crit || (!fumble && total >= s.dc);
    st.stats.rolls += 1;
    if (crit) st.stats.nat20 += 1;
    if (fumble) st.stats.nat1 += 1;
    if (success) st.stats.checksPassed += 1; else st.stats.checksFailed += 1;
    return {
      label: s.label, skill: s.skill, who: s.who.name, isPc: s.who === st.pc, dice: roll.dice, kept: roll.kept, mode: roll.mode,
      bonus: s.bonus, mods: s.mods, total, dc: s.dc, success, crit, fumble,
      text: `${s.label} d20[${roll.kept}]${R.fmtMod(s.total)}=${total} 对 DC ${s.dc}`,
    };
  }

  // ---- choosing -----------------------------------------------------------
  choose(i) {
    const st = this.state;
    if (st.phase !== 'scene') return this.view();
    const sc = this.scene();
    const ch = (sc.choices || [])[i];
    if (!ch) return this.view();
    const cs = this.choiceState(sc, ch, i);
    if (!cs || cs.disabled) return this.view();
    this.snapshot();
    st.picked[cs.key] = (st.picked[cs.key] || 0) + 1;
    st.log.push({ t: 'choice', text: cs.text, scene: sc.id, date: st.date });
    if (st.log.length > 300) st.log.shift();
    let notes = [];
    if (ch.cost && !st.cheats.freeShop) {
      if (ch.cost.gold) notes = notes.concat(applyEffects([`gold -${ch.cost.gold}`], this.ctx));
      if (ch.cost.item) notes = notes.concat(applyEffects([`item -${ch.cost.item}`], this.ctx));
    }
    let branch = ch;
    let roll = null;
    if (ch.check) {
      roll = this.rollCheck(ch.check);
      branch = roll.success ? (ch.ok || {}) : (ch.fail || {});
      if (roll.crit && ch.crit) branch = ch.crit;
      if (roll.fumble && ch.fumble) branch = ch.fumble;
    }
    if (ch.check && ch.effects) notes = notes.concat(applyEffects(ch.effects, this.ctx));
    notes = notes.concat(applyEffects(branch.effects, this.ctx));
    const combat = branch.combat || (!ch.check && ch.combat) || null;
    const goto = branch.goto || (ch.check ? null : ch.goto) || null;
    // outcome prose: ok/fail branches use `text`; plain choices use `result` (their `text` is the button label)
    const outText = ch.check ? branch.text : ch.result;
    const paragraphs = this.paragraphs(outText ? (Array.isArray(outText) ? outText : [outText]) : []);
    if (roll || paragraphs.length) {
      st.phase = 'result';
      st.pending = { roll, paragraphs, goto, combat, outcome: roll ? (roll.success ? 'ok' : 'fail') : null };
      st.notes = notes;
      this.emit('result', {});
      return this.view();
    }
    return this.follow(goto, combat, notes);
  }

  /** After a result screen. */
  proceed() {
    const st = this.state;
    if (st.phase === 'result' && st.pending) {
      const { goto, combat } = st.pending;
      st.pending = null;
      return this.follow(goto, combat, []);
    }
    if (st.phase === 'scene') {
      const sc = this.scene();
      if (sc.combat) { this.snapshot(); return this.beginCombat(sc.combat); }
      if (sc.next) { this.snapshot(); return this.enter(sc.next); }
    }
    return this.view();
  }

  follow(goto, combat, notes) {
    const st = this.state;
    if (combat) return this.beginCombat(combat, notes);
    if (st.pendingEnding) { const id = st.pendingEnding; delete st.pendingEnding; const target = this.scenario.endingScenes && this.scenario.endingScenes[id]; if (target) return this.enter(target, { notes }); }
    if (goto) return this.enter(goto, { notes });
    // stay in the same scene (hub): re-render with notices
    st.phase = 'scene';
    st.notes = notes;
    return this.view();
  }

  // ---- combat -------------------------------------------------------------
  beginCombat(enc, notes) {
    const st = this.state;
    st.phase = 'combat';
    st.notes = notes || [];
    Combat.startCombat(this.ctx, enc);
    Combat.runUntilPlayer(this.ctx, this.manualCompanions);
    this.emit('combat', {});
    return this.view();
  }

  combatCheck() {
    return (check) => this.rollCheck(check);
  }

  /** Called by the UI once the player dismisses the end-of-combat summary. */
  finishCombat() {
    const st = this.state;
    const c = st.combat;
    if (!c || !c.over) return this.view();
    const enc = c.enc;
    const result = c.over;
    let out = result === 'win' ? enc.win : result === 'fled' ? (enc.fled || enc.lose) : enc.lose;
    let notes = (c.notes || []).slice();
    st.combat = null;
    st.phase = 'scene';
    if (result === 'win' && enc.reward) notes = notes.concat(applyEffects(enc.reward, this.ctx));
    if (out === undefined || out === null) {
      if (result === 'lose') { st.phase = 'gameover'; st.notes = notes; this.emit('gameover', {}); return { type: 'gameover', notes }; }
      st.notes = notes;
      return this.view();
    }
    if (typeof out === 'string') out = { goto: out };
    notes = notes.concat(applyEffects(out.effects, this.ctx));
    if (out.goto) return this.enter(out.goto, { notes });
    st.notes = notes;
    return this.view();
  }

  // ---- endings ------------------------------------------------------------
  epilogue() {
    const sc = this.scenario;
    const id = this.state.ending;
    const def = (sc.endings && sc.endings[id]) || { title: '终章', text: [] };
    const slides = [];
    for (const s of sc.epilogues || []) {
      if (s.if !== undefined && !this.test(s.if)) continue;
      slides.push({ title: s.title ? this.interpolate(s.title) : null, art: s.art || null, paragraphs: this.paragraphs(Array.isArray(s.text) ? s.text : [s.text]) });
    }
    return { id, title: def.title, subtitle: def.subtitle || '', art: def.art || null, paragraphs: this.paragraphs(def.text), slides };
  }
}
