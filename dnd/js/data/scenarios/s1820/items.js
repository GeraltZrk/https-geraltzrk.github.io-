// s1820 / items.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const ITEMS = {
 "discharge_papers": {
  "id": "discharge_papers",
  "name": "退伍文书",
  "en": "Discharge Papers",
  "desc": "治安军开的遣散单，盖着连部的章，只是事由那一栏的墨迹，看着比签名的要旧，补发的军饷写的是“另候通知”。",
  "value": 0,
  "quest": true
 },
 "old_uniform": {
  "id": "old_uniform",
  "name": "没领章的旧制服",
  "en": "Old Uniform, Unbadged",
  "desc": "1810 年发的呢子制服，领章已经拆掉了，铜扣倒还在，穿着它，老连队的人一眼就认得出你。",
  "value": 0,
  "quest": true,
  "slot": "trinket"
 },
 "embassy_codebook": {
  "id": "embassy_codebook",
  "name": "使馆密码本",
  "en": "Embassy Codebook",
  "desc": "洛伦特驻安本科斯特使馆的密码本，只有巴掌大，书脊是假的，要给使馆写报告，就得用它。",
  "value": 0,
  "quest": true
 },
 "whiterose_pin": {
  "id": "whiterose_pin",
  "name": "白玫瑰别针",
  "en": "Whiterose Pin",
  "desc": "白玫瑰王庭发的银别针，洛伦特的人见了它，说话会客气一点。",
  "value": 0,
  "quest": true,
  "slot": "trinket"
 },
 "wicker_trunk": {
  "id": "wicker_trunk",
  "name": "藤箱",
  "en": "Wicker Trunk",
  "desc": "巨魔湾编的藤箱，有一边的搭扣坏了，只好拿麻绳捆着，里头装着三件衬衫和一本航海日志。",
  "value": 0,
  "quest": true
 },
 "debt_writ": {
  "id": "debt_writ",
  "name": "镇议会的抵债文书",
  "en": "Town Council Debt Writ",
  "desc": "塞斯提尔边区一个小镇的镇议会开的文书，说的是 1789 年的一笔旧账，镇上欠着迟到者公司四百金冠，拿人来抵债。这事表决到第二十次，全票通过了。",
  "value": 0,
  "quest": true
 },
 "bill_of_sale": {
  "id": "bill_of_sale",
  "name": "卖契",
  "en": "Bill of Sale",
  "desc": "铸炉街自动机厂开的卖契，是按废铁的价钱卖的，买主那一栏写着一家公司的名字。",
  "value": 0,
  "quest": true
 },
 "line7_tag": {
  "id": "line7_tag",
  "name": "七号线的工牌",
  "en": "Line Seven Tag",
  "desc": "一块黄铜工牌，上头冲着“七号线·夜班”和一个工位号，背面不知是谁用钉子划了一道。",
  "value": 0,
  "quest": true,
  "slot": "trinket"
 },
 "spire_chip": {
  "id": "spire_chip",
  "name": "尖碑上掉下来的石片",
  "en": "Spire Chip",
  "desc": "一片指甲盖大的黑石头，下雨天摸上去是温的，卡尔希尔的孩子都拿它当护身符。",
  "value": 0,
  "quest": true
 },
 "tour_letter": {
  "id": "tour_letter",
  "name": "游学团的介绍信",
  "en": "Karshyray Tour Letter",
  "desc": "卡尔希尔游学团的介绍信，用三种文字写的，坎诺的客栈老板看完了会把它还给你，然后告诉你没房了。",
  "value": 0,
  "quest": true
 },
 "skiplist_telegram": {
  "id": "skiplist_telegram",
  "name": "十三个字的电报",
  "en": "The Skip-List Telegram",
  "desc": "陆军部一路追到驳船上来的电报，统共十三个字：“梨林等四区公投不稳，暂缓施术。”",
  "value": 0,
  "quest": true
 },
 "korashi_grain": {
  "id": "korashi_grain",
  "name": "一粒寇拉希",
  "en": "A Grain of Korashi",
  "desc": "从一个战斗法师的肩膀里取出来的黑晶，只有米粒那么大，法师要是碰了它，好几天都施不了法。",
  "value": 0,
  "quest": true
 },
 "druznar_plates": {
  "id": "druznar_plates",
  "name": "德鲁兹纳的底片（抄件）",
  "en": "Druznar's Plates (Copies)",
  "desc": "暗望所的玻璃底片，这一份是翻拍的，一年一张，每一张上的光点都比前一年少。",
  "value": 0,
  "quest": true
 },
 "cellar_book": {
  "id": "cellar_book",
  "name": "地窖的血账",
  "en": "The Cellar Book",
  "desc": "魔法领地放血房的账本，一行记一个学徒，哪天放的、放了多少血、换来了多少佣兵的饷，都写在上面。",
  "value": 0,
  "quest": true
 },
 "ancardia_ledger": {
  "id": "ancardia_ledger",
  "name": "军需处的回扣账",
  "en": "Ancardian Quartermaster Ledger",
  "desc": "安卡迪亚兵站镇军需处的私账，法师登记费那一栏记着两个数，当中的差额进了一个军官的口袋。",
  "value": 0,
  "quest": true
 },
 "yamina_copy": {
  "id": "yamina_copy",
  "name": "雅米娜账本的抄件",
  "en": "Copy of Yamina's Ledger",
  "desc": "账分两栏，一栏是 1810 年以来每道咒的产出，另一栏是对应开出去的子弹数。抄账的人手抖了，有一页抄了两遍。",
  "value": 0,
  "quest": true
 },
 "share_register": {
  "id": "share_register",
  "name": "银团的股东名册",
  "en": "Syndicate Share Register",
  "desc": "阿斯拉银行牵头的那个银团的名册，里头有一个代持账户，入股的日子排在你那份报告发出去之后。",
  "value": 0,
  "quest": true
 },
 "engine_ledger": {
  "id": "engine_ledger",
  "name": "机房的流水账",
  "en": "Engine House Ledger",
  "desc": "文森顿那座机房的流水账，机房不烧煤，账上自然也没有煤钱，只有一栏写着“芯核更换”。",
  "value": 0,
  "quest": true
 },
 "phrase_record": {
  "id": "phrase_record",
  "name": "鸣声记录",
  "en": "Fragment Tone Record",
  "desc": "分形修会记的鸣声，一百多年的数都在这儿了，可翻到最后几页，翻来覆去只记着两个词。",
  "value": 0,
  "quest": true
 },
 "torrieth_rubbing": {
  "id": "torrieth_rubbing",
  "name": "托丽丝刻痕的拓片",
  "en": "Rubbing of Torrieth's Marks",
  "desc": "从密室墙上的刻痕拓下来的，炭粉都还没定住，当中有个方方的印子，跟碎片里那块黑东西一般大。",
  "value": 0,
  "quest": true
 },
 "partner_paper": {
  "id": "partner_paper",
  "name": "合伙人的转让文件",
  "en": "The Partner's Transfer Papers",
  "desc": "一份转让五成一股份的文件，条款开得很公道，只是签名栏里的墨是青铜色的。",
  "value": 0,
  "quest": true
 },
 "tuning_fork": {
  "id": "tuning_fork",
  "name": "达姆斯塔尔音叉",
  "en": "Damestear Tuning Fork",
  "desc": "这把音叉调的是某个位面的频率，叉齿是拿晶体磨出来的，敲它一下，满船的杯子都跟着响。",
  "value": 0,
  "quest": true,
  "relic": true
 },
 "draft_treaty": {
  "id": "draft_treaty",
  "name": "草约",
  "en": "Draft Treaty",
  "desc": "第二次阿兰蒂尔大峰会的草约，页边上写满了各国代表的批注。最后通过的是哪一份条款，要看封面上盖的戳。",
  "value": 0,
  "quest": true
 },
 "torrieth_tally": {
  "id": "torrieth_tally",
  "name": "托丽丝的刻痕本",
  "en": "Torrieth's Tally",
  "desc": "天门前那条小船上的刻痕，前后一百六十八年，有人一道一道地抄进了这个本子里，抄到最后一道，后面就是空白了。",
  "value": 0,
  "quest": true
 },
 "jam_jar": {
  "id": "jam_jar",
  "name": "一只空果酱罐",
  "en": "An Empty Jam Jar",
  "desc": "罐子还在，标签也还在，上面写着“别摇”，只是盖子给拧松了半圈。",
  "value": 0,
  "quest": true
 }
};
