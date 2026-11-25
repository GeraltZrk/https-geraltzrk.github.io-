// 1022 剧本的剧情物品（BIBLE §14.2）。quest: true 的卖不掉；relic: true 是圣物。
// 坎雷克之书（book_of_canrec）核心库已有，这里不重定义。
// “对精灵说服 +1”“全队欺瞒劣势”这类带条件的作用引擎的被动做不到，写在 desc 里，由场景的检定 mods / dis 去读 item.<id>。
export const ITEMS = {
  witness_seal: {
    id: 'witness_seal', name: '监誓印', en: "Witness's Seal", quest: true, slot: 'trinket', value: 0,
    desc: '一枚铜柄蜡印，印面是条约的纹样，柄上缠着麻绳。和约派你去看着人发誓，凭的就是它。挂在身上，说服 +1。',
    passives: { skill: { persuasion: 1 } },
  },
  moon_badge: {
    id: 'moon_badge', name: '王宫腰牌', en: 'Palace Badge', quest: true, value: 0,
    desc: '达梅里斯堡的银腰牌，背面刻着一弯月。进得了国王的内室和军需库。',
  },
  ioriel_letter: {
    id: 'ioriel_letter', name: '太后的私信', en: "Ioriel's Letter", quest: true, value: 0,
    desc: '玫瑰色的封蜡，信里只有一句话，问的是克雷格·达梅里斯那一枪。',
  },
  legion_token: {
    id: 'legion_token', name: '军团牌', en: 'Legion Token', quest: true, value: 0,
    desc: '黑卡斯塔诺军团的铁牌，一面是乌霜家的黑龙，一面是番号。沉睡的老兵、沼泽堡的守军认它，死了的皇帝也认它。',
  },
  ibenion_writ: {
    id: 'ibenion_writ', name: '亲王的手令', en: "Ibenion's Writ", quest: true, value: 0,
    desc: '伊贝尼昂亲笔写在船帆布上的手令，折了三折。精灵的使者见了它得先站起来。',
  },
  ledger_page: {
    id: 'ledger_page', name: '大墓地的账页', en: 'Necropolis Ledger Page', quest: true, value: 0,
    desc: '福尔卡德亲手抄的一页账：屠夫原四百零六座坟，一行一个名字，后面记着束腰发没发。',
  },
  holy_oil: {
    id: 'holy_oil', name: '圣油', en: 'Holy Oil', quest: true, value: 0,
    desc: '一小瓶涂油礼用的油，瓶口封着蜡。抹在额头上，一次即位、一纸判词就算数了。只有一瓶。',
  },
  lance_ledger: {
    id: 'lance_ledger', name: '比武会的开销账', en: 'Tourney Accounts', quest: true, value: 0,
    desc: '大捷比武会的开销账，红宝石矮人记的。哪天换了几根枪、谁领的，一笔不落。',
  },
  lunatein_plank: {
    id: 'lunatein_plank', name: '月火号的船板', en: 'Plank of the Lunateín', quest: true, slot: 'trinket', value: 0,
    desc: '巴掌大的一块船板，海盐浸透了，摸着发凉。带在身上，同精灵说话时说服检定 +1。',
  },
  nerat_candle: {
    id: 'nerat_candle', name: '奈拉特烛', en: "Nerat's Flame", value: 20,
    desc: '瓦洛森和大墓地卖的葬礼蜡烛，黑蜡，烛芯是红的。点着的两轮里，死人都绕着持烛的人走（被攻击时对方劣势）。',
    use: { target: 'self', apply: { cond: 'blurred', turns: 2 }, combat: true },
  },
  ebonsteel_crown: {
    id: 'ebonsteel_crown', name: '乌钢冠', en: 'Ebonsteel Crown of Castanor', quest: true, relic: true, value: 0,
    desc: '卡斯塔诺的乌钢冠，冠圈内侧磨得发亮。不能戴，戴上的人得先过十道试炼。',
  },
  oathstone_chip: {
    id: 'oathstone_chip', name: '誓石碎片', en: 'Chip of the Oathstone', quest: true, relic: true, value: 0,
    desc: '指甲盖大的一块灰石头，握久了发烫。带着它的时候，你许的诺都得兑现，全队的欺瞒检定劣势。',
  },
  lab_samples: {
    id: 'lab_samples', name: '实验室的罐子', en: 'Laboratory Samples', quest: true, value: 0,
    desc: '六只封了蜡的陶罐，贴着坎雷克的字签，最早的一只写着 980 年。拿稻草裹着，别摔。',
  },
  jaher_letter: {
    id: 'jaher_letter', name: '贾赫的回信', en: "Jaher's Letter", quest: true, value: 0,
    desc: '太阳王的回信，走了半年才到。很短。给科乌里亚的总督看，说服 +2。',
  },
  silversong: {
    id: 'silversong', name: '银歌', en: 'Silversong', relic: true, value: 0,
    desc: '阿德蕾西娅的剑，剑身窄，挥起来有一声细响。命中和伤害 +2。',
    weapon: { dmg: '1d8', type: 'slashing', props: ['versatile'], bonus: 2 },
  },
  stew_spoon: {
    id: 'stew_spoon', name: '守砖人的勺子', en: "Tile-keeper's Spoon", quest: true, value: 0,
    desc: '一把木勺，勺柄敲地砖敲出了一道沟。没有用处。',
  },
};
