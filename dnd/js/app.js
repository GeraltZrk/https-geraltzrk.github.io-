// Application shell: screen routing, game lifecycle, saving.
import { h, clear, toast } from './ui/dom.js';
import { DB, mergeScenarioData } from './data/index.js';
import { SCENARIOS } from './data/scenarios/index.js';
import * as State from './core/state.js';
import { Engine } from './core/engine.js';
import { setBackdrop } from './ui/art.js';
import { renderTitle } from './ui/title.js';
import { renderNewGame } from './ui/newgame.js';
import { renderPlay } from './ui/play.js';

export class App {
  constructor(root) {
    this.root = root;
    this.db = DB;
    this.scenarios = SCENARIOS;
    this.settings = State.loadSettings();
    this.meta = State.loadMeta();
    this.engine = null;
    this.scenario = null;
    this.screen = 'title';
    this.params = {};
    this.loaded = {};
    this.applySettings();
    window.addEventListener('keydown', (e) => this.onKey(e));
  }

  applySettings() {
    const el = document.documentElement;
    el.dataset.text = this.settings.textSize;
    el.dataset.motion = this.settings.reducedMotion ? 'off' : 'on';
    State.saveSettings(this.settings);
  }

  show(screen, params = {}) {
    this.screen = screen;
    this.params = params;
    this.render();
    window.scrollTo(0, 0);
  }

  render() {
    clear(this.root);
    let node;
    if (this.screen === 'title') node = renderTitle(this);
    else if (this.screen === 'new') node = renderNewGame(this);
    else if (this.screen === 'play') node = renderPlay(this);
    else node = h('div', null, '未知界面');
    this.root.appendChild(node);
  }

  /** Re-render keeping the scroll position (used after small state changes). */
  refresh() {
    const y = window.scrollY;
    this.render();
    window.scrollTo(0, y);
  }

  async loadScenario(id) {
    if (this.loaded[id]) return this.loaded[id];
    const entry = this.scenarios.find((s) => s.id === id);
    if (!entry) throw new Error('未知剧本 ' + id);
    const mod = await entry.load();
    const scenario = mod.default || mod.scenario;
    mergeScenarioData(this.db, scenario);
    this.loaded[id] = scenario;
    return scenario;
  }

  async startGame({ scenarioId, originId, factionId, character, difficulty, cheats }) {
    const scenario = await this.loadScenario(scenarioId);
    const state = State.newGame(this.db, scenario, { originId, factionId, character, difficulty, cheats });
    if (state.cheats.ascended) State.setAscended(state, this.db, true);
    this.attach(scenario, state);
    this.engine.start();
    this.autosave();
    this.show('play');
  }

  attach(scenario, state) {
    this.scenario = scenario;
    this.engine = new Engine(this.db, scenario, state);
    this.engine.manualCompanions = !this.settings.autoCompanions;
    this.engine.on((type) => {
      if (type === 'enter') this.autosave();
      if (type === 'enter' && this.engine.state.phase === 'ending') this.recordEnding();
    });
  }

  async resume(state) {
    if (!state) { toast('读取失败：存档损坏或不存在', 'bad'); return false; }
    try {
      const scenario = await this.loadScenario(state.scenario);
      if (!scenario.scenes[state.scene]) { toast('读取失败：存档与当前版本不兼容', 'bad'); return false; }
      this.attach(scenario, state);
      this.engine.start();
      this.show('play');
      return true;
    } catch (e) {
      console.error(e);
      toast('读取失败：' + e.message, 'bad');
      return false;
    }
  }

  get state() { return this.engine ? this.engine.state : null; }

  autosave() {
    if (!this.engine) return;
    if (this.engine.state.cheats.used) { this.meta.cheatsEverUsed = true; }
    State.saveSlot('auto', this.engine.state, { auto: true, title: this.scenario.title });
    for (const id of Object.keys(this.engine.state.codex)) this.meta.codex[this.scenario.id + ':' + id] = true;
    State.saveMeta(this.meta);
  }

  save(slot) {
    if (!this.engine) return false;
    const ok = State.saveSlot(slot, this.engine.state, { title: this.scenario.title });
    toast(ok ? '已存档' : '存档失败（浏览器禁止了本地存储）', ok ? 'info' : 'bad');
    return ok;
  }

  recordEnding() {
    const st = this.engine.state;
    const key = this.scenario.id + ':' + st.ending;
    if (!this.meta.endings[key]) { this.meta.endings[key] = { when: Date.now(), cheats: !!st.cheats.used }; State.saveMeta(this.meta); }
  }

  toTitle() {
    this.engine = null;
    this.scenario = null;
    setBackdrop('title');
    this.show('title');
  }

  onKey(e) {
    if (this.screen !== 'play' || !this.engine) return;
    if (document.querySelector('.modal-wrap')) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (/^[1-9]$/.test(e.key)) {
      const btn = this.root.querySelectorAll('.options .opt')[parseInt(e.key, 10) - 1];
      if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
    } else if (e.key === 'Enter' || e.key === ' ') {
      const btn = this.root.querySelector('.continue-row .btn');
      if (btn) { e.preventDefault(); btn.click(); }
    }
  }
}

export function boot() {
  const root = document.getElementById('app');
  const app = new App(root);
  window.__app = app;
  setBackdrop('title');
  app.show('title');
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
  return app;
}
