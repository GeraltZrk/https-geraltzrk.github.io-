// s1022 / items.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const ITEMS = {
 "witness_seal": {
  "id": "witness_seal",
  "name": "监誓印",
  "en": "Witness's Seal",
  "quest": true,
  "slot": "trinket",
  "value": 0,
  "desc": "一枚铜柄的蜡印，印面刻着条约的纹样，柄上缠了几圈麻绳。和约派你去看着人发誓，凭的就是这枚印。挂在身上，说服 +1。",
  "passives": {
   "skill": {
    "persuasion": 1
   }
  }
 },
 "moon_badge": {
  "id": "moon_badge",
  "name": "王宫腰牌",
  "en": "Palace Badge",
  "quest": true,
  "value": 0,
  "desc": "达梅里斯堡的银腰牌，背面刻着一弯月亮。有了它，国王的内室和军需库都进得去。"
 },
 "ioriel_letter": {
  "id": "ioriel_letter",
  "name": "太后的私信",
  "en": "Ioriel's Letter",
  "quest": true,
  "value": 0,
  "desc": "信上封的是玫瑰色的蜡，里面只写了一句话，问的是克雷格·达梅里斯那一枪。"
 },
 "legion_token": {
  "id": "legion_token",
  "name": "军团牌",
  "en": "Legion Token",
  "quest": true,
  "value": 0,
  "desc": "黑卡斯塔诺军团的铁牌，一面铸着乌霜家的黑龙，另一面是番号。沉睡的老兵认它，沼泽堡的守军认它，连死了的皇帝也认它。"
 },
 "ibenion_writ": {
  "id": "ibenion_writ",
  "name": "亲王的手令",
  "en": "Ibenion's Writ",
  "quest": true,
  "value": 0,
  "desc": "伊贝尼昂亲笔写在船帆布上的手令，折了三折。精灵的使者见了它，都得先站起身。"
 },
 "ledger_page": {
  "id": "ledger_page",
  "name": "大墓地的账页",
  "en": "Necropolis Ledger Page",
  "quest": true,
  "value": 0,
  "desc": "福尔卡德亲手抄下来的一页账，记的是屠夫原那四百零六座坟。一行一个名字，名字后面注着束腰发了没有。"
 },
 "holy_oil": {
  "id": "holy_oil",
  "name": "圣油",
  "en": "Holy Oil",
  "quest": true,
  "value": 0,
  "desc": "一小瓶行涂油礼用的油，瓶口拿蜡封着。往额头上一抹，一次即位也好，一纸判词也好，神就算认了。只有这一瓶。"
 },
 "lance_ledger": {
  "id": "lance_ledger",
  "name": "比武会的开销账",
  "en": "Tourney Accounts",
  "quest": true,
  "value": 0,
  "desc": "大捷比武会的开销账，是红宝石矮人记的，哪天换了几根枪，是谁领走的。一笔都没落下。"
 },
 "lunatein_plank": {
  "id": "lunatein_plank",
  "name": "月火号的船板",
  "en": "Plank of the Lunateín",
  "quest": true,
  "slot": "trinket",
  "value": 0,
  "desc": "巴掌大的一块船板，早就让海盐浸透了，摸上去凉凉的。带在身上，同精灵说话时说服检定 +1。"
 },
 "nerat_candle": {
  "id": "nerat_candle",
  "name": "奈拉特烛",
  "en": "Nerat's Flame",
  "value": 20,
  "desc": "瓦洛森和大墓地都有卖的葬礼蜡烛，蜡是黑的，烛芯是红的。点着以后的两轮里，死人都会绕着拿蜡烛的人走（被攻击时对方劣势）。",
  "use": {
   "target": "self",
   "apply": {
    "cond": "blurred",
    "turns": 2
   },
   "combat": true
  }
 },
 "ebonsteel_crown": {
  "id": "ebonsteel_crown",
  "name": "乌钢冠",
  "en": "Ebonsteel Crown of Castanor",
  "quest": true,
  "relic": true,
  "value": 0,
  "desc": "卡斯塔诺皇帝的乌钢冠，冠圈里侧已经磨得发亮。这顶冠不能随便戴，想戴它的人，得先过十道试炼。"
 },
 "oathstone_chip": {
  "id": "oathstone_chip",
  "name": "誓石碎片",
  "en": "Chip of the Oathstone",
  "quest": true,
  "relic": true,
  "value": 0,
  "desc": "指甲盖大的一块灰石头，在手里握久了会发烫。只要带着它，你许下的诺就都得兑现，全队的欺瞒检定劣势。"
 },
 "lab_samples": {
  "id": "lab_samples",
  "name": "实验室的罐子",
  "en": "Laboratory Samples",
  "quest": true,
  "value": 0,
  "desc": "几只封了蜡的陶罐，都贴着坎雷克亲笔写的签。拿稻草裹好，千万别摔了。"
 },
 "jaher_letter": {
  "id": "jaher_letter",
  "name": "贾赫的回信",
  "en": "Jaher's Letter",
  "quest": true,
  "value": 0,
  "desc": "太阳王的回信，在路上走了半年才到，写得很短。拿给科乌里亚的总督看，说服 +2。"
 },
 "silversong": {
  "id": "silversong",
  "name": "银歌",
  "en": "Silversong",
  "relic": true,
  "value": 0,
  "desc": "阿德蕾西娅的剑，剑身很窄，挥起来会带出一声细细的响。命中和伤害 +2。",
  "weapon": {
   "dmg": "1d8",
   "type": "slashing",
   "props": [
    "versatile"
   ],
   "bonus": 2
  }
 },
 "stew_spoon": {
  "id": "stew_spoon",
  "name": "守砖人的勺子",
  "en": "Tile-keeper's Spoon",
  "quest": true,
  "value": 0,
  "desc": "一把木勺，勺柄常用来敲地砖，都磨出一道沟了。什么用处也没有。"
 }
};
