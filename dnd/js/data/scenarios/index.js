// Scenario list shown on the new-game screen. Bundles load on demand.
// (scenarios/demo is a tiny reference campaign for content writers; it is not listed in the game.)
export const SCENARIOS = [
  {
    id: 's1022', era: 1022, yearLabel: '1022', title: '无冕之年',
    tags: ['十字军之王 3 开局', '条约与冠冕', '跨三十一年'], art: 'ck3_landing',
    blurb: '术士王死了一年多，条约的墨刚干。你是监誓人，拿一枚蜡印去各国，看着人把誓发完。往后三十一年，战争丢在地上的几顶冠都要过你的手。',
    load: () => import('./s1022/index.js'),
  },
  {
    id: 's1444', era: 1444, yearLabel: '1444', title: '送神',
    tags: ['欧陆风云 4 开局', '绿潮之后', '跨二十八年'], art: 'load_8',
    blurb: '科琳和杜坎森在卡斯托纳斯下城同归于尽。仗打赢了，尸首没人收。各营各出一个人凑了支收尸队，头一趟差事就是杜坎森本人。请神容易送神难。',
    load: () => import('./s1444/index.js'),
  },
  {
    id: 's1820', era: 1820, yearLabel: '1820', title: '泪尽',
    tags: ['维多利亚 3 开局', '煤气灯下的奇幻', '跨十八年'], art: 'load_2',
    blurb: '彗星碎了，魔法成了越用越少的东西。安本科斯特最老、最穷的一家冒险公司接了个看果酱罐的活，往后十八年替共和国、银行、种植园和教会跑了四单生意。',
    load: () => import('./s1820/index.js'),
  },
];
