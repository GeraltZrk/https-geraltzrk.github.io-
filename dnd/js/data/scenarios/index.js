// Scenario list shown on the new-game screen. Bundles load on demand.
export const SCENARIOS = [
  { id: 'demo', era: 1444, yearLabel: '1444', title: '演示剧本', tags: ['测试'], art: 'load_19', blurb: '用来测试界面的占位剧本。', load: () => import('./demo/index.js') },
];
