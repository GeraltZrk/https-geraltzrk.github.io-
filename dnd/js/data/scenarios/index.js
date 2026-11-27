// Scenario list shown on the new-game screen. Bundles load on demand.
// (scenarios/demo is a tiny reference campaign for content writers; it is not listed in the game.)
export const SCENARIOS = [
  {
    id: 's1022', era: 1022, yearLabel: '1022', title: '无冕之年',
    tags: ['十字军之王 3 开局', '条约与冠冕', '跨三十一年'], art: 'ck3_landing',
    blurb: '术士王死后，五家签下和约。你受命担任监誓人，带着印章去见各国的国王。有人请你见证誓言，也有人想借你的印，让一场围城显得名正言顺。',
    load: () => import('./s1022/index.js'),
  },
  {
    id: 's1444', era: 1444, yearLabel: '1444', title: '送神',
    tags: ['欧陆风云 4 开局', '绿潮之后', '跨二十八年'], art: 'load_8',
    blurb: '科琳和兽人大酋长杜坎森同归于尽。各营临时凑出一支收尸队，你是其中一员。第一具遗体就是杜坎森：边区兵要把他的头挂上城门，他的儿子要接父亲回家。',
    load: () => import('./s1444/index.js'),
  },
  {
    id: 's1820', era: 1820, yearLabel: '1820', title: '泪尽',
    tags: ['维多利亚 3 开局', '煤气灯下的奇幻', '跨十八年'], art: 'load_2',
    blurb: '彗星碎了，能用来施法的魔晶一年比一年少。你刚加入手头拮据的迟到者公司，接的第一单是替人看守一只果酱罐。罐里的仙子会说话，还特地叮嘱了一句：“别摇。”',
    load: () => import('./s1820/index.js'),
  },
];
