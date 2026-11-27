// s1444 / items.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const ITEMS = {
 "shield_strap": {
  "id": "shield_strap",
  "name": "一截盾带",
  "relic": true,
  "value": 0,
  "desc": "一截牛皮盾带，一头还连着两颗铆钉。这是抬科琳的时候从她那面裂了的盾上崩下来的。你捡了以后一直没还回去。"
 },
 "moon_badge": {
  "id": "moon_badge",
  "name": "银月徽",
  "relic": true,
  "value": 0,
  "desc": "达梅里亚之子的徽章，银子打的，背面还刻着编号。只要把它亮出来，月党的人认，帝国的差役也认。"
 },
 "bardswood_letter": {
  "id": "bardswood_letter",
  "name": "带火漆的信",
  "relic": true,
  "value": 0,
  "desc": "信上盖着巴兹伍德先生的火漆，印的是一只合着的眼睛。把它亮出来能过关卡，可要是让人从你身上搜出来，那就是另一回事了。"
 },
 "grudge_page": {
  "id": "grudge_page",
  "name": "账页：玛瑙之门，1424",
  "relic": true,
  "value": 0,
  "desc": "从兵团账本上誊下来的一页，正面只有一行字：玛瑙之门，灰元 1424 年，欠债者科尔古斯·杜坎森。背面还空着，可以往上添字。"
 },
 "grudge_book": {
  "id": "grudge_book",
  "name": "兵团的账本",
  "relic": true,
  "value": 0,
  "desc": "拿油布包着，足有四十斤重，里面一共记了三百一十二条。谁背着它，谁就有权当场划账。"
 },
 "chain_link": {
  "id": "chain_link",
  "name": "一节断链",
  "relic": true,
  "value": 0,
  "desc": "一指来长的铁环，断口还是新的。它从前拴过谁，你都还记得。"
 },
 "sergeant_urn": {
  "id": "sergeant_urn",
  "name": "军士长的骨灰",
  "quest": true,
  "value": 0,
  "desc": "骨灰是天亮前烧的，装在达拉斯缝的袋子里，袋口足足缝了两道。军士长交代过，他要埋在月神之耳，还得挑个有月亮的晚上。"
 },
 "sky_tally": {
  "id": "sky_tally",
  "name": "老太太的天象簿",
  "quest": true,
  "value": 0,
  "desc": "簿子记了二十年，一天划一道，每一道旁边都特意空着一块，是留到银龙来的那天写字用的。"
 },
 "bonecarver_salt": {
  "id": "bonecarver_salt",
  "name": "一袋盐",
  "value": 30,
  "desc": "阿祖科尔拿来换尸首的就是这袋粗盐，压得结结实实的。乌什卡说了，不许你拿它腌东西。"
 },
 "sash_copy": {
  "id": "sash_copy",
  "name": "萨什卷的抄本",
  "quest": true,
  "value": 0,
  "desc": "这是从抄本上又抄下来的一本，用的是古卡斯塔诺语，有一半的字已经没人认得了。认得出来的那半句说，王从灰烬那年起就没再说过话。拿到会上去，能当个证物。"
 },
 "groundhawk_deed": {
  "id": "groundhawk_deed",
  "name": "康原的地契",
  "relic": true,
  "value": 0,
  "desc": "地契上盖着蓝牙的印，墨到现在还有点洇。妮克西信不过自己的口袋，就让你替她收着。"
 },
 "compact_copy": {
  "id": "compact_copy",
  "name": "城约的抄本",
  "quest": true,
  "value": 0,
  "desc": "就在那张门板桌上誊出来的，下面按着一排手印，有大的也有小的，其中有一个还是绿的。"
 },
 "petition_book": {
  "id": "petition_book",
  "name": "没回音的祈愿簿",
  "relic": true,
  "value": 0,
  "desc": "阿坦庙里的那一本，记了二十年的祷告，一页分成两栏，左边写求的是什么事，右边写得了什么回音。右边那一栏从头到尾都空着。"
 },
 "dagrite_shard": {
  "id": "dagrite_shard",
  "name": "达格银碎片",
  "value": 120,
  "desc": "从死铁道上撬下来的一块，摸上去手直发麻。把它扔出去，能让一个敌人受 3d6 闪电伤害。",
  "use": {
   "target": "enemy",
   "dmg": "3d6",
   "dmgType": "lightning",
   "outside": false
  }
 },
 "brack_token": {
  "id": "brack_token",
  "name": "车皮签",
  "quest": true,
  "value": 0,
  "desc": "一块磨得发亮的铁片，上面打着铁路潜伏者的记号。手里有了它，回程就不用再交过路费了。"
 },
 "rubbing_book": {
  "id": "rubbing_book",
  "name": "守昔者的拓片本",
  "relic": true,
  "value": 0,
  "desc": "加莱尔父母留下的本子，里面有一百多页拓片，每一页的右下角都写着日期，还有两个人名字的缩写。"
 },
 "shaft_rubbing": {
  "id": "shaft_rubbing",
  "name": "竖井口的拓片",
  "quest": true,
  "value": 0,
  "desc": "一张油纸，上面拓的是精灵兵刻下的值夜祷词。祷词里提了两个名字，一个是天上那位的，一个是主将的。"
 },
 "safe_conduct": {
  "id": "safe_conduct",
  "name": "蓝牙的路条",
  "quest": true,
  "value": 0,
  "desc": "路条上盖着科琳塔尔的印，写明了持条的人是“随队收殓的”。在帝国境内过关卡就靠它，只是碰上查得严的地方，人家要看上两遍。"
 },
 "corinite_creed": {
  "id": "corinite_creed",
  "name": "一本信条",
  "quest": true,
  "value": 0,
  "desc": "多米尼克托你带到西边去的，薄薄的一本，翻开第一页只写了一句话，剑与盾。"
 },
 "garden_sketch": {
  "id": "garden_sketch",
  "name": "德利安画的花园图",
  "quest": true,
  "value": 0,
  "desc": "皇宫花园的平面图，一畦一畦都照着仓位编了号，第七畦上还画了个小圈。"
 },
 "jubilee_invite": {
  "id": "jubilee_invite",
  "name": "庆典请柬",
  "quest": true,
  "value": 0,
  "desc": "一张烫金的请柬，是从一位玫瑰党公子身上摸来的。名字那一栏写得花里花哨，看不大清楚，这倒正好。"
 },
 "log_copy": {
  "id": "log_copy",
  "name": "航海志的抄页",
  "quest": true,
  "value": 0,
  "desc": "月焰号值夜簿上第四十年的那一页，神殿的方位也一并记在上面。字是连夜抄下来的，有几处已经洇开了。"
 },
 "digger_oath": {
  "id": "digger_oath",
  "name": "按了手印的口供",
  "quest": true,
  "value": 0,
  "desc": "口供上说，那天晚上他就在门外，里面一共抬出来三具，其中有一具是烧死的。下面按了一个手印，按得很重。"
 },
 "wound_cast": {
  "id": "wound_cast",
  "name": "伤口的蜡模",
  "quest": true,
  "value": 0,
  "desc": "一块黄蜡，翻出来的模子是个窄窄的口子，走向是从后往前的。"
 },
 "clan_charter": {
  "id": "clan_charter",
  "name": "盖了帝国印的氏族特许",
  "relic": true,
  "value": 0,
  "desc": "巴兹伍德亲笔写的，字又小又密。东坎诺的氏族凭着它，可以在帝国的地界上做买卖、过关卡、打官司。"
 },
 "aldresian_blade": {
  "id": "aldresian_blade",
  "name": "阿德蕾西娅的练习剑",
  "value": 400,
  "desc": "在阿德蕾西娅堡里比试赢来的长剑，剑身上刻着练剑时用的咒文。命中和伤害 +1，还可以当施法的法器用。",
  "weapon": {
   "dmg": "1d8",
   "type": "slashing",
   "props": [
    "versatile",
    "casting"
   ],
   "bonus": 1
  }
 },
 "delian_letter": {
  "id": "delian_letter",
  "name": "写给死人的一封信",
  "relic": true,
  "value": 0,
  "desc": "信是德利安的笔迹，写给阿登的，封口一直没有拆过。"
 },
 "cold_iron_nails": {
  "id": "cold_iron_nails",
  "name": "冷铁钉",
  "value": 80,
  "desc": "一把没淬过火的铁钉，妖精一闻见就躲。撒出去，至多三个敌人做敏捷豁免，失败受 3d6 伤害并迟缓一轮，成功减半。",
  "use": {
   "target": "enemies",
   "maxTargets": 3,
   "save": {
    "abil": "dex",
    "half": true
   },
   "dcAbil": "dex",
   "dmg": "3d6",
   "dmgType": "piercing",
   "apply": {
    "cond": "slowed",
    "turns": 1
   },
   "outside": false
  }
 },
 "arun_notes": {
  "id": "arun_notes",
  "name": "阿鲁恩的笔记",
  "quest": true,
  "value": 0,
  "desc": "一捆木精灵用的树皮纸，拿草绳扎着。里面写的是帷幕当初究竟是为了挡什么才立起来的。"
 },
 "fey_token": {
  "id": "fey_token",
  "name": "愚者宫里的一枚扣子",
  "relic": true,
  "value": 0,
  "slot": "trinket",
  "desc": "一枚木头扣子，正面刻着一张笑脸，翻过来一看还是笑脸，戴着它豁免检定 +1。不过一出林子，它就会变成一颗橡子。",
  "passives": {
   "saveBonus": 1
  }
 },
 "kwineh_salve": {
  "id": "kwineh_salve",
  "name": "血树脂膏",
  "value": 75,
  "desc": "血林里的树渗出来的红树脂熬成的膏，闻着有股铁锈味。抹上恢复 4d4+4 点生命，并解除中毒。",
  "use": {
   "target": "ally",
   "heal": "4d4+4",
   "cleanse": [
    "poisoned"
   ],
   "outside": true
  }
 },
 "mural_rubbing": {
  "id": "mural_rubbing",
  "name": "壁画的拓片",
  "relic": true,
  "value": 0,
  "desc": "这是最后一幅，拓了四张纸才拓全。画上一只手拿着杖，另一条胳膊齐腕断了，下面还有两个字。"
 },
 "broken_scepter": {
  "id": "broken_scepter",
  "name": "断权杖",
  "relic": true,
  "value": 0,
  "desc": "一根六尺长的白石杖，杖头的宝石已经碎了，上面还留着一道防护术的余劲，握久了手会发麻。它太长，没法拿来打仗。"
 },
 "blade_and_hammer": {
  "id": "blade_and_hammer",
  "name": "刀与锤",
  "value": 0,
  "relic": true,
  "desc": "烂刀氏族的人个个随身带着这么一对家什，一把是剔骨头的短刀，一把是磨骨头的锤子。乌什卡做归尘礼用的是它们，打仗用的也是它们。",
  "weapon": {
   "dmg": "1d8",
   "type": "bludgeoning",
   "props": [
    "versatile"
   ],
   "bonus": 1
  }
 },
 "procession_head": {
  "id": "procession_head",
  "name": "游行用的权杖头",
  "value": 0,
  "relic": true,
  "desc": "一截铜包木的权杖头。原先是插在游行用的长杆上的，杆子早就不知丢到哪里去了。阿坦拿它当圣徽，有时候也拿它敲人。",
  "weapon": {
   "dmg": "1d6",
   "type": "bludgeoning",
   "props": [
    "casting"
   ]
  }
 }
};
