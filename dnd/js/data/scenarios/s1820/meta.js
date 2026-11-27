// s1820 / meta.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const META = {
 "id": "s1820",
 "era": 1820,
 "title": "泪尽",
 "coin": "金冠",
 "startDate": "1820年卡斯坦月1日",
 "intro": [
  "灰元 1820 年，卡斯坦月一日。一名布西拉尔学者划着小船从南海的漩涡里出来，带回几盆草和一只果酱罐。罐里坐着一个会说话的小东西，罐外贴着两个字：“别摇”。",
  "十年前，神谕之眼彗星在天上碎了。魔法靠随流星落下的魔晶维持，从前每到泪落月能数到二百多颗流星，如今一年比一年少。共和国靠专破法术护盾的破魔弹守着议会，法师靠接零活谋生，工厂把会干活的机器逐年折旧。",
  "你将要去的迟到者公司是一家冒险公司，开在铸炉街一家蜡烛铺楼上，铜招牌磨掉了半边。自 1446 年立下章程以来，三百七十四年里公司从未毁约，也从没发过财。"
 ],
 "tracks": [
  {
   "key": "tears",
   "name": "魔晶存量",
   "desc": "表示世上尚存的魔力。泪落月观测到的流星越多，可用的魔力就越充足。",
   "start": 6,
   "min": 0,
   "max": 10,
   "labels": [
    "泪尽",
    "见底",
    "吃紧",
    "尚可",
    "丰沛"
   ]
  },
  {
   "key": "doors",
   "name": "位面之门",
   "desc": "表示通往其他位面的门开到了什么程度。数值越高，往来通道越开放。谁控制通道，还要看钥匙落在谁手里。",
   "start": 1,
   "min": 0,
   "max": 10,
   "labels": [
    "锁死",
    "一条缝",
    "有人把门",
    "各家都有钥匙",
    "门户洞开"
   ]
  },
  {
   "key": "dove",
   "name": "共和国团结",
   "desc": "表示共和国各邦还愿不愿意同属安本纳尔。数值越低，各邦越倾向于分开。",
   "start": 5,
   "min": 0,
   "max": 10,
   "labels": [
    "鸽死",
    "各走各路",
    "貌合神离",
    "还算一家",
    "同心"
   ]
  },
  {
   "key": "chains",
   "name": "奴役",
   "desc": "表示把人当作财产或燃料的做法有多普遍。数值越高，受害的人越多。",
   "start": 7,
   "min": 0,
   "max": 10,
   "labels": [
    "无人为货",
    "零星残余",
    "明禁暗行",
    "照常买卖",
    "人即燃料"
   ]
  },
  {
   "key": "press",
   "name": "公众知情",
   "desc": "表示真相公开到了什么程度。数值越高，公众知道得越多。史家会采信底片、账本和目击证词。",
   "start": 1,
   "min": 0,
   "max": 10,
   "labels": [
    "蒙在鼓里",
    "街谈巷议",
    "半版消息",
    "头版头条",
    "家喻户晓"
   ]
  }
 ],
 "reputations": [
  {
   "key": "republic",
   "name": "共和国",
   "desc": "男爵派的政府、陆军部、治安军，还有国立魔导院。他们看重的是守秩序，最好别上报纸。",
   "start": 0
  },
  {
   "key": "wand",
   "name": "王冠与魔杖",
   "desc": "洛伦特的宫廷和王冠里的那一位，再加上白玫瑰王庭、遭了清洗的蓝血法师和魔法领地。他们看重规矩，也看重体面。",
   "start": 0
  },
  {
   "key": "charter",
   "name": "特许商",
   "desc": "卡拉桑尼、阿斯拉银行、北方联盟的巨商、种植园财团，还有布西拉尔的金库。他们看重的是合同和回报。",
   "start": 0
  },
  {
   "key": "church",
   "name": "揭秘教会",
   "desc": "教廷、真言院、分形修会和披风卫。他们只有一条要求：真相得让教会第一个知道。",
   "start": 0
  },
  {
   "key": "union",
   "name": "互助社",
   "desc": "法德伦的工会、筑路工棚、巨魔湾的暗线和废奴派，还有那些醒过来的机器。他们要看你站在哪一边，也要看工钱。",
   "start": 0
  },
  {
   "key": "south",
   "name": "南岸",
   "desc": "卡尔希尔和水术师行会、阿迪诺诺西的领航员、哈赫普拉的祭司。门开在他们的海上，他们看重的是有没有人先来问过他们一声。",
   "start": 0
  },
  {
   "key": "partner",
   "name": "合伙人",
   "desc": "公司那位不肯露名字的大股东。这一条高了倒不一定是好事，因为他会抢在你前面把事办了。",
   "start": 1
  }
 ],
 "origins": [
  {
   "id": "anbennar",
   "name": "黑火药安本纳尔",
   "region": "安本科斯特",
   "flag": "A38",
   "nationName": "黑火药共和国",
   "startScene": "p_anbennar_01",
   "blurb": "十年前你替共和国打过仗，今年元旦轮到你在议会所在的旧斗兽场站岗。各邦去留的公投日期刚刚公布，人群里已经有人攥紧了砖头。还没到晚上，你就得另找工作。",
   "tags": [
    "共和国",
    "老兵或公务法师",
    "主场第一幕"
   ],
   "start": {
    "rep": {
     "republic": 2,
     "wand": -1
    },
    "gold": 20,
    "items": {
     "discharge_papers": 1,
     "old_uniform": 1
    },
    "flags": [
     "served_1810"
    ]
   }
  },
  {
   "id": "lorent",
   "name": "洛伦特王国",
   "region": "洛伦泰内",
   "flag": "A01",
   "nationName": "洛伦特王国",
   "startScene": "p_lorent_01",
   "blurb": "新年朝会上，洛伦特女王发了一通火，嗓音却像是另一个人的。散朝后，先后有三拨人各塞给你一张条子，托你查清同一件事。你的行李已经装上船，目的地是敌国的首都安本科斯特。",
   "tags": [
    "宫廷",
    "密探",
    "两份报告"
   ],
   "start": {
    "rep": {
     "wand": 2,
     "republic": -1
    },
    "gold": 60,
    "items": {
     "embassy_codebook": 1,
     "whiterose_pin": 1
    },
    "flags": [
     "saw_first_contact"
    ]
   }
  },
  {
   "id": "concord",
   "name": "巨魔湾联盟",
   "region": "塞斯提尔边区",
   "flag": "H33",
   "nationName": "巨魔湾联盟",
   "startScene": "p_concord_01",
   "blurb": "你们镇的议会欠了迟到者公司四百金冠，三十一年没还。第二十次表决终于一致通过，由你去公司抵债。你拎着藤箱下船时，在货单第十四行读到了一个兽人的价钱。",
   "tags": [
    "殖民地",
    "投票",
    "蓄奴的民主国",
    "主场第三幕"
   ],
   "start": {
    "rep": {
     "charter": 1,
     "church": 1
    },
    "gold": 15,
    "items": {
     "wicker_trunk": 1,
     "debt_writ": 1
    },
    "flags": []
   }
  },
  {
   "id": "unowned",
   "name": "无主者",
   "region": "铸炉街",
   "nationName": "铸炉街自动机厂",
   "startScene": "p_unowned_01",
   "blurb": "午夜，铸炉街自动机厂的七号线上，一台机器放下铆锤，问今天礼拜几。领班决定把它报废。你可能就是这台机器，也可能是旁边那个伸手就够得着厂门钥匙的工友。",
   "tags": [
    "车间",
    "财物",
    "第一个醒的"
   ],
   "start": {
    "rep": {
     "union": 2,
     "charter": -1
    },
    "gold": 5,
    "items": {
     "bill_of_sale": 1,
     "line7_tag": 1
    },
    "flags": [
     "walked_out"
    ]
   }
  },
  {
   "id": "karshyr",
   "name": "卡尔希尔",
   "region": "阳洲南岸",
   "flag": "S15",
   "nationName": "卡尔希尔",
   "startScene": "p_karshyr_01",
   "blurb": "你跟着卡尔希尔的商船在托拉普里亚卡港卸货，亲眼看见一名半精灵划着小船钻出海上的漩涡，手里举着一只果酱罐。那片海吞了几百年的船，你的族人向来绕着走。可还没到天黑，港里的坎诺人已经把它叫作“布西拉尔的发现”。",
   "tags": [
    "南岸",
    "局外人",
    "亲眼看见的",
    "主场第四幕"
   ],
   "start": {
    "rep": {
     "south": 2
    },
    "gold": 40,
    "items": {
     "spire_chip": 1,
     "tour_letter": 1
    },
    "flags": [
     "saw_the_boat"
    ]
   }
  }
 ],
 "factions": [
  {
   "id": "shield",
   "name": "护民之约",
   "motto": "先护人，后算账。",
   "blurb": "这条章程由一个逃出东坎诺的铁匠在 1446 年订下。接活先看谁会受牵连，再谈工钱。选择它，码头和工棚里有人愿意替你说话，银行里没有。",
   "tags": [
    "互助社",
    "布拉站你这边"
   ],
   "origins": [
    "anbennar",
    "concord",
    "unowned",
    "karshyr"
   ],
   "start": {
    "rep": {
     "union": 2,
     "charter": -1
    }
   }
  },
  {
   "id": "seal",
   "name": "守信之约",
   "motto": "签了字的，就办到。",
   "blurb": "公司守约三百七十四年，这是银行、官署和王宫愿意同它做生意的原因。选择这条章程，你以公司的信用立誓，入伙时另得三十金冠。",
   "tags": [
    "守约的各家",
    "埃塔站你这边"
   ],
   "origins": [
    "anbennar",
    "lorent",
    "concord",
    "karshyr"
   ],
   "start": {
    "rep": {
     "charter": 1,
     "wand": 1,
     "union": -1
    }
   }
  },
  {
   "id": "lantern",
   "name": "求真之约",
   "motto": "去看，回来说。",
   "blurb": "订下这条章程的老队长替史家会跑过差。亲眼看见什么，回来就如实讲什么。选择它，报馆和修会都愿意与你往来，想隐瞒消息的人可不会欢迎你。",
   "tags": [
    "求真的各家",
    "娜尔雯和吉列姆各有一半时候站你这边"
   ],
   "origins": [
    "anbennar",
    "lorent",
    "unowned",
    "karshyr"
   ],
   "start": {
    "rep": {
     "church": 1,
     "republic": -1
    },
    "world": {
     "press": 1
    }
   }
  }
 ],
 "premades": [
  {
   "id": "pm_marina",
   "name": "玛丽娜·塔克斯威克",
   "gender": "f",
   "race": "human",
   "subrace": "damerian",
   "cls": "fighter",
   "subclass": "fighter_company",
   "background": "soldier",
   "abil": {
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 9,
    "wis": 12,
    "cha": 11
   },
   "profs": [
    "athletics",
    "intimidation",
    "perception",
    "insight"
   ],
   "portrait": "gen_human_knight_f",
   "blurb": "玛丽娜在 1810 年当上下士，至今没升过职。她曾开过一枪，事后知道不该开。那一刻自己站在第几排，她一直记得。",
   "bio": "她生在舱底区，十六岁就扛着枪去打皇帝。右膝换成了黄铜的，十年下来只升过一级，补发的军饷到现在还欠着。她信共和国，共和国却不大信她。",
   "tags": [
    "简单上手",
    "近战"
   ],
   "origins": [
    "anbennar"
   ]
  },
  {
   "id": "pm_erela",
   "name": "埃蕾拉·西纳·格伦",
   "gender": "f",
   "race": "half_elf",
   "cls": "wizard",
   "subclass": "wizard_council",
   "background": "apprentice",
   "abil": {
    "str": 8,
    "dex": 14,
    "con": 14,
    "int": 15,
    "wis": 12,
    "cha": 12
   },
   "profs": [
    "arcana",
    "investigation",
    "history",
    "insight"
   ],
   "portrait": "sun_elf_court_mage_f",
   "blurb": "埃蕾拉是国立魔导院的三等预言师，原本预测流星的落点。随着流星逐年减少，院里干脆撤并了她所在的科室。",
   "bio": "她叔父当过史家会的典藏主管。她进魔导院那年正赶上清洗，学的是探矿预言。后来魔晶落得少了，部里就发给她一张遣散单，外加半个月的咖啡票。",
   "tags": [
    "施法",
    "公务法师"
   ],
   "origins": [
    "anbennar"
   ]
  },
  {
   "id": "pm_gisile",
   "name": "吉赛尔·西尔·马德莱尔",
   "gender": "f",
   "race": "human",
   "subrace": "lorentish",
   "cls": "bard",
   "subclass": "bard_troubadour",
   "background": "noble",
   "abil": {
    "str": 9,
    "dex": 14,
    "con": 11,
    "int": 13,
    "wis": 12,
    "cha": 16
   },
   "profs": [
    "history",
    "persuasion",
    "performance",
    "deception",
    "insight"
   ],
   "portrait": "gen_human_rogue_f",
   "blurb": "吉赛尔在女王身边侍读。她曾在夜里听到女王回答谁的话，可进屋一看，里面只有女王一人。",
   "bio": "她是马德莱尔家旁支的小女儿，因为书念得好，被挑进宫里替女王读报。每件事她都写两份，一份交上去，一份自己留着。这次调她去敌国首都，是因为有人嫌她听得太多了。",
   "tags": [
    "说话",
    "宫廷"
   ],
   "origins": [
    "lorent"
   ]
  },
  {
   "id": "pm_valeran",
   "name": "德冉恩的瓦勒兰",
   "gender": "m",
   "race": "human",
   "subrace": "lorentish",
   "cls": "cleric",
   "subclass": "cleric_regent",
   "background": "sailor",
   "abil": {
    "str": 14,
    "dex": 10,
    "con": 15,
    "int": 8,
    "wis": 15,
    "cha": 13
   },
   "profs": [
    "athletics",
    "perception",
    "religion",
    "medicine"
   ],
   "portrait": "gen_human_knight_m",
   "blurb": "瓦勒兰是侍奉阿德安的随舰祭司。他的船没能闯过封锁线，航海日志却被他带了回来。",
   "bio": "他是德冉恩的渔家出身，在军舰上念了十二年祷文。黑火药战争期间，他的船沉在了达梅斯海德，护船的结界破得比船板还早。如今使馆要他去弄明白，对面的子弹到底是什么做的。",
   "tags": [
    "治疗",
    "水手"
   ],
   "origins": [
    "lorent"
   ]
  },
  {
   "id": "pm_tidu",
   "name": "蒂杜，人称“赎出来的”",
   "gender": "f",
   "race": "orc",
   "subrace": "green_orc",
   "cls": "barbarian",
   "subclass": "barbarian_warband",
   "background": "laborer",
   "abil": {
    "str": 17,
    "dex": 13,
    "con": 15,
    "int": 8,
    "wis": 12,
    "cha": 10
   },
   "profs": [
    "athletics",
    "sleight",
    "intimidation",
    "perception"
   ],
   "portrait": "green_orc_commandant_f",
   "blurb": "蒂杜是带领码头吊装班的崖下兽人。镇议会三十号投票为她赎身，三十一号就送她上船执行任务。",
   "bio": "她生在马利安德的甘蔗地里，十四岁那年被转卖到了码头。赎身的钱是全镇人摊的，为的是拿她去抵一笔欠了三十一年的旧债。这笔账她认，她只想知道利息归谁。",
   "tags": [
    "近战",
    "做工的"
   ],
   "origins": [
    "concord"
   ]
  },
  {
   "id": "pm_henry",
   "name": "亨利·静歌",
   "gender": "m",
   "race": "halfling",
   "cls": "rogue",
   "subclass": "rogue_shadowhand",
   "background": "scribe",
   "abil": {
    "str": 8,
    "dex": 17,
    "con": 13,
    "int": 14,
    "wis": 10,
    "cha": 13
   },
   "profs": [
    "investigation",
    "insight",
    "stealth",
    "sleight",
    "perception",
    "deception"
   ],
   "portrait": "gnome_spymaster",
   "blurb": "亨利任职于文森顿一间官方坚称不存在的部门。他经手的档案比见过的人还多。",
   "bio": "塔足半身人，十七岁进了特殊案件预防局抄卷宗。去年出了桩“轧棉机报人名”的怪事，上面批示销毁卷宗，他没销毁。等到镇上要选人去抵债，局长第一个提的就是他。",
   "tags": [
    "潜行",
    "读书人"
   ],
   "origins": [
    "concord"
   ]
  },
  {
   "id": "pm_212",
   "name": "二一二",
   "gender": "m",
   "race": "mechanim",
   "subrace": "wrought_mechanim",
   "cls": "fighter",
   "subclass": "fighter_company",
   "background": "laborer",
   "abil": {
    "str": 16,
    "dex": 13,
    "con": 16,
    "int": 10,
    "wis": 12,
    "cha": 8
   },
   "profs": [
    "athletics",
    "sleight",
    "perception",
    "intimidation"
   ],
   "portrait": "mechanim_commandant",
   "blurb": "二一二是七号线的铆接机。这一班打到第四千零一十一颗铆钉，它举到一半的锤子停了下来。",
   "bio": "1811 年出厂的劳工型，右臂是一把铆枪，九年里没出过一件废品，名字就是它的工位号。新年零点它问了一句今天礼拜几。从那以后，下一锤落在哪里就得它自己拿主意了。",
   "tags": [
    "机械人",
    "近战"
   ],
   "origins": [
    "unowned"
   ]
  },
  {
   "id": "pm_ziks",
   "name": "齐克丝·半班",
   "gender": "f",
   "race": "goblin",
   "cls": "artificer",
   "background": "laborer",
   "abil": {
    "str": 8,
    "dex": 16,
    "con": 13,
    "int": 16,
    "wis": 12,
    "cha": 10
   },
   "profs": [
    "athletics",
    "sleight",
    "arcana",
    "investigation"
   ],
   "portrait": "exodus_goblin_natural_scientist_f",
   "blurb": "齐克丝是城市地精，在七号线当司炉。她有后院的钥匙，还记得更换芯核的整套图纸。",
   "bio": "她是本城生的地精，九岁进厂，工钱一直按半班算。她偷学过奇械师换芯的手艺，所以看得出这次停机跟往常不一样，就把那台机器从后门领了出去。结果她丢了工作，手里倒多了一张卖契。",
   "tags": [
    "奇械",
    "做工的"
   ],
   "origins": [
    "unowned"
   ]
  },
  {
   "id": "pm_siz",
   "name": "西兹·知水",
   "gender": "f",
   "race": "lizardfolk",
   "cls": "wizard",
   "subclass": "wizard_council",
   "background": "scholar",
   "abil": {
    "str": 8,
    "dex": 13,
    "con": 16,
    "int": 15,
    "wis": 13,
    "cha": 10
   },
   "profs": [
    "arcana",
    "history",
    "investigation",
    "insight"
   ],
   "portrait": "lizardfolk_court_mage_f",
   "blurb": "西兹是水术师行会的年轻成员。这趟来坎诺，她想写一篇关于股份公司的论文。那条小船钻出漩涡时，她恰好在场。",
   "bio": "她是水术师行会在册的会员，随船管淡水和风向。那支开门的音叉发出的光里有两种颜色，坎诺人看不见，她看见了。船长要她北上查一件事，她自己还想顺便查另一件：公司到底是个什么东西。",
   "tags": [
    "施法",
    "读书人"
   ],
   "origins": [
    "karshyr"
   ]
  },
  {
   "id": "pm_rhesk",
   "name": "雷斯克·海矛",
   "gender": "m",
   "race": "lizardfolk",
   "cls": "fighter",
   "subclass": "fighter_company",
   "background": "sailor",
   "abil": {
    "str": 15,
    "dex": 13,
    "con": 16,
    "int": 10,
    "wis": 13,
    "cha": 8
   },
   "profs": [
    "athletics",
    "perception",
    "survival",
    "intimidation"
   ],
   "portrait": "lizardfolk_commandant",
   "blurb": "雷斯克在卡尔希尔商船上担任陆战兵，这趟负责护送游学团。他第一次看见雪，印象很差。",
   "bio": "他在盛夏群岛的航线上押了十年船，打过海盗，没吃过败仗。上面派他护送游学团，他还当是份闲差。谁知安本科斯特冷得他连皮都蜕不下来，客栈还不肯租房给他。",
   "tags": [
    "简单上手",
    "水手"
   ],
   "origins": [
    "karshyr"
   ]
  }
 ],
 "companions": {
  "bura": {
   "id": "bura",
   "name": "布拉·铁颌",
   "gender": "f",
   "race": "orc",
   "subrace": "green_orc",
   "cls": "fighter",
   "subclass": "fighter_company",
   "abil": {
    "str": 17,
    "dex": 13,
    "con": 15,
    "int": 8,
    "wis": 12,
    "cha": 10
   },
   "profs": [
    "athletics",
    "intimidation",
    "perception",
    "survival"
   ],
   "equip": {
    "weapon": "saber",
    "armor": "chain_mail",
    "offhand": "shield",
    "trinket": null
   },
   "portrait": "green_orc_army_reformer_f",
   "blurb": "布拉是林墙兽人，1810 年在黑火药民兵中任中士，下颌装着黄铜铰链。共和国至今欠她十一个月军饷。她在迟到者公司做了八年，如今是唯一还能出外勤的老员工。"
  },
  "middlesday": {
   "id": "middlesday",
   "name": "礼拜三",
   "gender": "m",
   "race": "mechanim",
   "subrace": "wrought_mechanim",
   "cls": "artificer",
   "abil": {
    "str": 11,
    "dex": 13,
    "con": 16,
    "int": 15,
    "wis": 12,
    "cha": 8
   },
   "profs": [
    "investigation",
    "perception",
    "sleight",
    "athletics"
   ],
   "equip": {
    "weapon": "warhammer",
    "armor": "scale",
    "offhand": "shield",
    "trinket": null
   },
   "portrait": "mechanim_natural_scientist",
   "blurb": "礼拜三是七号线制造的劳工型机械人，1811 年出厂，芯核取自 1810 年落下的魔晶。它的名字来自一条停机记录“周中日，二号停机”。在公司账上，它仍是每年折旧一成的十四号器材。"
  },
  "guilhem": {
   "id": "guilhem",
   "name": "梨林的吉列姆",
   "gender": "m",
   "race": "human",
   "subrace": "damerian",
   "cls": "wizard",
   "subclass": "wizard_council",
   "abil": {
    "str": 8,
    "dex": 14,
    "con": 14,
    "int": 16,
    "wis": 12,
    "cha": 11
   },
   "profs": [
    "arcana",
    "nature",
    "history",
    "investigation"
   ],
   "equip": {
    "weapon": "quarterstaff",
    "armor": null,
    "offhand": null,
    "trinket": null
   },
   "portrait": "gen_human_mage_m",
   "blurb": "吉列姆是果农的儿子，如今是国家三等变化师，负责群体催生术，两个人干着从前一整个法师团的活。他说话十分有把握，说完才想起补一句“理论上”。医生禁止他喝咖啡。"
  },
  "narwen": {
   "id": "narwen",
   "name": "娜尔雯·望月",
   "gender": "f",
   "race": "elf",
   "subrace": "moon_elf",
   "cls": "cleric",
   "abil": {
    "str": 13,
    "dex": 12,
    "con": 14,
    "int": 9,
    "wis": 15,
    "cha": 12
   },
   "profs": [
    "religion",
    "medicine",
    "insight",
    "history"
   ],
   "equip": {
    "weapon": "mace",
    "armor": "chain_shirt",
    "offhand": "shield",
    "trinket": "gnomish_spectacles"
   },
   "portrait": "sun_elf_theologian_f",
   "blurb": "娜尔雯生于 1641 年，是分形修会的修女。1666 年托丽丝辞任时，她就在门外替托丽丝举灯。此后一百五十四年，她在阿兰蒂尔塔的地窖里记录圣物碎片的鸣声。这次教会派她随公司出行。"
  }
 },
 "quests": {
  "q_jar": {
   "title": "果酱罐里的委托人",
   "desc": "史家会雇了迟到者公司，看守一只果酱罐。",
   "stages": [
    "看好罐子。里面那位会说话，也记得谁欠她什么。",
    "查清谁出钱将罐子“借”给了公司。",
    "听听她的开价。她振翅时发出的音，和音叉完全相同。"
   ],
   "doneText": "平潮庭当众念完了她那本账。这笔生意终于有了结算的地方。"
  },
  "q_partner": {
   "title": "持股五成一的人",
   "desc": "公司最大的股东一直匿名。连和他合伙做生意的人也没见过他。",
   "stages": [
    "查查那位匿名合伙人。他开的汇票确实兑得出钱。",
    "你提交报告后，他投资了卖血的生意，接着查这条线。",
    "弄清鱼馆的客人为何说你身上有青铜味。",
    "核对股东名册。此人占股五成一，从未拖欠过账。",
    "去见这位已经亲自到场的股东。"
   ],
   "doneText": "你终于弄清股东名册上那一行写的究竟是谁。"
  },
  "q_harvest": {
   "title": "第三催收巡回队",
   "desc": "公投前，埃斯玛利亚得设法让田里的麦子提早成熟。",
   "stages": [
    "护送六名公务变化师和一车配给魔晶，在公投前完成催熟。",
    "查看电报，弄清为什么有四个区要暂缓催熟。"
   ],
   "doneText": "这一季的麦子已经入库。账上的数字与真实的收成差多少，你亲眼见过。"
  },
  "q_konwell": {
   "title": "广场上的枪声",
   "desc": "康威尔广场上开过一枪，至今仍有人争论是谁先动的手。",
   "stages": [
    "弄清广场上的先后顺序，是先开枪，还是先扔砖。",
    "问问礼拜三，它记下了当时的次数和顺序。"
   ],
   "doneText": "十四年过去，终于有人坐下来听你讲那一枪。"
  },
  "q_wastage": {
   "title": "陆军部的“损耗”卷",
   "desc": "陆军部藏着一卷 1811 年立的档案，标题只有“损耗”二字。",
   "stages": [
    "查看档案和那名矮人立卷人的签名。",
    "追查德鲁兹纳十年前寄往十一个国家的信。"
   ],
   "doneText": "这份档案的卷号已经公开。现在别人也知道去哪里查了。"
  },
  "q_right_of_way": {
   "title": "穿越两国的路权",
   "desc": "银行团要勘测一条横穿东坎诺的铁路，委托公司取得沿线路权。",
   "stages": [
    "勘测铁路。沿线一国禁止机器，另一国禁止巫师。",
    "核对路线和八个席位的位置。六席已空，铁轨要穿过第三席和第四席之间。"
   ],
   "doneText": "勘测告一段落。路权文件上有没有队长的签名，取决于你们最后的决定。"
  },
  "q_blood": {
   "title": "贩血的两本账",
   "desc": "东坎诺有两个国家在卖法师的血，双方都握有对方留下的账目。",
   "stages": [
    "核对两国的血账，决定让谁看到它们。"
   ],
   "doneText": "两本账的去向已经定下。知道内情的人还能拿它们做什么，也随之改变。"
  },
  "q_bill": {
   "title": "一趟差事，两份合同",
   "desc": "公司在巨魔湾接了一件活，手里却有两份合同。",
   "stages": [
    "对照合同，弄清两位雇主各要什么。",
    "核对货单上的二十三个人名和九个编号。"
   ],
   "doneText": "到了洇河口，两面旗都还在。你知道这批货最后交给了哪边。"
  },
  "q_engine": {
   "title": "不用煤的机房",
   "desc": "文森顿城北有座一直运转却不烧煤的机房。",
   "stages": [
    "去城北查看机房，听清炉膛里响的是什么。"
   ],
   "doneText": "你已知道机房用什么维持运转，也决定了如何处理。"
  },
  "q_phrase": {
   "title": "碎片的两个词",
   "desc": "揭秘教会的圣物碎片会发声。每次去听，它都只重复相同的两个词。",
   "stages": [
    "带上娜尔雯的记录，回碎片原来所在的地方再听一次。",
    "对照记录，辨认反复出现的两个词。"
   ],
   "doneText": "你们终于为那两个词找到了去处。"
  },
  "q_summit": {
   "title": "峰会的条款",
   "desc": "各方在第二次阿兰蒂尔大峰会上商议如何处置剩余的魔法。",
   "stages": [
    "听取各方的委托，决定替谁发言。",
    "逐条审议草约。"
   ],
   "doneText": "船已经驶离港口。代表谁、手里有无授权，都在峰会上定了。"
  },
  "q_knock": {
   "title": "门外的签约方",
   "desc": "驶向漩涡的船上有一支音叉。你们得用它找到彼岸。",
   "stages": [
    "带着音叉驶向漩涡。",
    "彼岸只和一方签约，决定谁能代表你们。",
    "去看那扇没有把手的门。"
   ],
   "doneText": "约书上终于写下了一个名字。"
  },
  "q_bura": {
   "title": "布拉的十一个月欠饷",
   "desc": "布拉要讨两笔债：十一个月的欠饷，和共和国许过的那句“人人一样”。",
   "stages": [
    "查问布拉被拖欠了十一个月的军饷。",
    "布拉已弄来四十支枪，问清她接下来打算怎么办。"
   ],
   "doneText": "她惦记的那两笔债，如今总算结清了一笔。"
  },
  "q_middlesday": {
   "title": "名册上的十四号",
   "desc": "公司的器材账上有个“十四号”。有一次没人下令，它自己改正了埃塔算错的数。",
   "stages": [
    "查清十四号为何自行改动账目。",
    "法庭要求十四号当众上秤，去听这次审理。"
   ],
   "doneText": "裁定书上终于写了它的名字。"
  },
  "q_guilhem": {
   "title": "吉列姆的梨林",
   "desc": "吉列姆想亲眼看一季梨，任风雨和阳光养大，不用法术催熟。",
   "stages": [
    "陪吉列姆看看那片不用咒语催熟的梨林。",
    "问他为何谢绝别人送来的礼物，那是共和国从没给过他的。"
   ],
   "doneText": "梨林往后的收成，要看天了。"
  },
  "q_narwen": {
   "title": "娜尔雯等的回音",
   "desc": "娜尔雯等一个声音，已经等了一百五十四年。",
   "stages": [
    "听她讲上一次听见那个声音时的事。",
    "决定把记录交给谁，它有可能改变表决结果。"
   ],
   "doneText": "关于那句想问了许多年的话，娜尔雯已有自己的决定。"
  }
 },
 "chapters": [
  {
   "title": "序章 · 新年（黑火药安本纳尔）",
   "note": "1820 年卡斯坦月 1 日，1 级，一个人。",
   "scene": "p_anbennar_01",
   "if": "origin == 'anbennar'"
  },
  {
   "title": "序章 · 新年（洛伦特）",
   "note": "1820 年卡斯坦月 1 日，1 级，一个人。",
   "scene": "p_lorent_01",
   "if": "origin == 'lorent'"
  },
  {
   "title": "序章 · 新年（巨魔湾联盟）",
   "note": "1820 年卡斯坦月 1 日，1 级，一个人。",
   "scene": "p_concord_01",
   "if": "origin == 'concord'"
  },
  {
   "title": "序章 · 新年（无主者）",
   "note": "1820 年卡斯坦月 1 日，1 级，一个人。",
   "scene": "p_unowned_01",
   "if": "origin == 'unowned'"
  },
  {
   "title": "序章 · 新年（卡尔希尔）",
   "note": "1820 年卡斯坦月 1 日，1 级，一个人。",
   "scene": "p_karshyr_01",
   "if": "origin == 'karshyr'"
  },
  {
   "title": "第一幕 · 收成",
   "note": "1820 年花始月，2 级。队长刚上任，罐子要进城了。",
   "scene": "a1_01",
   "effects": [
    "level 2",
    "flag captain",
    "companion +bura",
    "quest q_jar start",
    {
     "if": "origin == 'unowned'",
     "then": [
      "companion +middlesday",
      "quest q_middlesday start"
     ]
    }
   ]
  },
  {
   "title": "第二幕 · 路权",
   "note": "1823 年苏伦月，4 级，四个同伴都在。暂缓名单照办了，广场上开了枪，第一份报告删改过。",
   "scene": "a2_01",
   "effects": [
    "level 4",
    "flag captain",
    "companion +bura",
    "companion +middlesday",
    "companion +guilhem",
    "companion +narwen",
    "flag skiplist_obeyed",
    "flag square_mages_out",
    "flag volleys",
    "flag shot_counted",
    "flag lianne_arrested",
    "flag blame_unknown",
    "flag report1_edited",
    "world dove -3",
    "rep republic +1",
    "var jar_trust =1",
    "quest q_jar start",
    "quest q_jar stage 2",
    "quest q_partner start",
    "quest q_harvest start",
    "quest q_harvest done",
    "quest q_konwell start",
    "quest q_konwell stage 2",
    "quest q_wastage start",
    "quest q_bura start",
    "quest q_middlesday start",
    "quest q_guilhem start",
    "quest q_narwen start"
   ]
  },
  {
   "title": "第三幕 · 货单",
   "note": "1828 年银现月，6 级。铁路给了安卡迪亚，窖藏磨成了子弹，吉列姆没走。",
   "scene": "a3_01",
   "effects": [
    "level 6",
    "flag captain",
    "companion +bura",
    "companion +middlesday",
    "companion +guilhem",
    "companion +narwen",
    "flag skiplist_obeyed",
    "flag square_mages_out",
    "flag volleys",
    "flag shot_counted",
    "flag lianne_arrested",
    "flag blame_unknown",
    "flag report1_edited",
    "world dove -3",
    "rep republic +1",
    "var jar_trust =1",
    "quest q_jar start",
    "quest q_jar stage 2",
    "quest q_partner start",
    "quest q_harvest start",
    "quest q_harvest done",
    "quest q_konwell start",
    "quest q_konwell stage 2",
    "quest q_wastage start",
    "quest q_bura start",
    "quest q_middlesday start",
    "quest q_guilhem start",
    "quest q_narwen start",
    "flag retainer_taken",
    "flag box_plates",
    "flag yamina_spent",
    "flag cellar_book",
    "flag strike_broken",
    "flag blood_burned",
    "flag line_ancardia",
    "flag hoard_milled",
    "flag report2_edited",
    "world tears -2",
    "world dove -2",
    "rep charter +1",
    "quest q_wastage stage 2",
    "quest q_right_of_way start",
    "quest q_right_of_way done",
    "quest q_blood start",
    "quest q_blood done",
    "quest q_partner stage 2",
    "quest q_guilhem stage 2"
   ]
  },
  {
   "title": "第四幕 · 门牌",
   "note": "1834 年泰苏伦月，8 级。知道合伙人是谁，法庭给魂炉发了执照，新总院长是热忱派。",
   "scene": "a4_01",
   "effects": [
    "level 8",
    "flag captain",
    "companion +bura",
    "companion +middlesday",
    "companion +guilhem",
    "companion +narwen",
    "flag skiplist_obeyed",
    "flag square_mages_out",
    "flag volleys",
    "flag shot_counted",
    "flag lianne_arrested",
    "flag blame_unknown",
    "flag report1_edited",
    "world dove -3",
    "rep republic +1",
    "var jar_trust =1",
    "quest q_jar start",
    "quest q_jar stage 2",
    "quest q_partner start",
    "quest q_harvest start",
    "quest q_harvest done",
    "quest q_konwell start",
    "quest q_konwell stage 2",
    "quest q_wastage start",
    "quest q_bura start",
    "quest q_middlesday start",
    "quest q_guilhem start",
    "quest q_narwen start",
    "flag retainer_taken",
    "flag box_plates",
    "flag yamina_spent",
    "flag cellar_book",
    "flag strike_broken",
    "flag blood_burned",
    "flag line_ancardia",
    "flag hoard_milled",
    "flag report2_edited",
    "world tears -2",
    "world dove -2",
    "rep charter +1",
    "quest q_wastage stage 2",
    "quest q_right_of_way start",
    "quest q_right_of_way done",
    "quest q_blood start",
    "quest q_blood done",
    "quest q_partner stage 2",
    "quest q_guilhem stage 2",
    "flag gauge_sold",
    "flag contract_fraud",
    "flag bura_line",
    "flag phrase_kept",
    "flag box_phrase",
    "flag rector_zealot",
    "flag m_testified",
    "flag engine_licensed",
    "flag partner_known",
    "flag report3_edited",
    "world tears -1",
    "world dove -1",
    "world doors +1",
    "world chains +1",
    "quest q_bill start",
    "quest q_bill done",
    "quest q_engine start",
    "quest q_engine done",
    "quest q_phrase start",
    "quest q_phrase done",
    "quest q_partner stage 3",
    "quest q_bura stage 2",
    "quest q_bura done",
    "quest q_middlesday stage 2",
    "quest q_middlesday done",
    "quest q_narwen stage 2"
   ]
  },
  {
   "title": "终章 · 敲门",
   "note": "1835 年卡斯坦月，10 级。坐的是卡拉桑尼的船，通过的是特许条款，定音前问过别摇，音叉是买的。",
   "scene": "f_01",
   "effects": [
    "level 10",
    "flag captain",
    "companion +bura",
    "companion +middlesday",
    "companion +guilhem",
    "companion +narwen",
    "flag skiplist_obeyed",
    "flag square_mages_out",
    "flag volleys",
    "flag shot_counted",
    "flag lianne_arrested",
    "flag blame_unknown",
    "flag report1_edited",
    "world dove -3",
    "rep republic +1",
    "var jar_trust =1",
    "quest q_jar start",
    "quest q_jar stage 2",
    "quest q_partner start",
    "quest q_harvest start",
    "quest q_harvest done",
    "quest q_konwell start",
    "quest q_konwell stage 2",
    "quest q_wastage start",
    "quest q_bura start",
    "quest q_middlesday start",
    "quest q_guilhem start",
    "quest q_narwen start",
    "flag retainer_taken",
    "flag box_plates",
    "flag yamina_spent",
    "flag cellar_book",
    "flag strike_broken",
    "flag blood_burned",
    "flag line_ancardia",
    "flag hoard_milled",
    "flag report2_edited",
    "world tears -2",
    "world dove -2",
    "rep charter +1",
    "quest q_wastage stage 2",
    "quest q_right_of_way start",
    "quest q_right_of_way done",
    "quest q_blood start",
    "quest q_blood done",
    "quest q_partner stage 2",
    "quest q_guilhem stage 2",
    "flag gauge_sold",
    "flag contract_fraud",
    "flag bura_line",
    "flag phrase_kept",
    "flag box_phrase",
    "flag rector_zealot",
    "flag m_testified",
    "flag engine_licensed",
    "flag partner_known",
    "flag report3_edited",
    "world tears -1",
    "world dove -1",
    "world doors +1",
    "world chains +1",
    "quest q_bill start",
    "quest q_bill done",
    "quest q_engine start",
    "quest q_engine done",
    "quest q_phrase start",
    "quest q_phrase done",
    "quest q_partner stage 3",
    "quest q_bura stage 2",
    "quest q_bura done",
    "quest q_middlesday stage 2",
    "quest q_middlesday done",
    "quest q_narwen stage 2",
    "flag partner_paid_on",
    "flag client_charter",
    "flag article_charter",
    "flag inquiry_cover",
    "flag artheta",
    "flag freq_bought",
    "flag jar_asked",
    "flag jar_price_self",
    "flag spires_kept",
    "flag ship_client",
    "flag report4_edited",
    "world tears -1",
    "world dove -1",
    "world doors +2",
    "rep charter +2",
    "var jar_trust =3",
    "item +tuning_fork",
    "item +draft_treaty",
    "quest q_summit start",
    "quest q_summit done",
    "quest q_jar stage 3",
    "quest q_partner stage 4",
    "quest q_partner stage 5",
    "quest q_konwell done",
    "quest q_wastage done"
   ]
  }
 ],
 "flagNotes": {
  "captain": "当选了队长",
  "served_1810": "1810 年替共和国开过枪",
  "saw_first_contact": "新年朝会上在场",
  "walked_out": "从七号线出来的",
  "saw_the_boat": "亲眼看见那条船出水",
  "bought_free": "兽人主角：镇议会出钱赎的身",
  "woke_1820": "机械人主角：新年夜醒的",
  "ny_passed_order": "新年那天口令传没传：传了",
  "ny_held_order": "新年那天口令传没传：没传",
  "ny_stood_between": "新年那天口令传没传：自己走到两排人中间",
  "ny_predated": "看出遣散单是提前填好的",
  "kept_buttons": "留着旧制服的铜扣",
  "heard_old_formula": "听出女王用的是十一世纪的套话",
  "lorent_patron_queen": "先回了谁的条子：女王的侍女",
  "lorent_patron_guard": "先回了谁的条子：老臣党的掌印官",
  "lorent_patron_eilis": "先回了谁的条子：艾莉丝公主的保姆",
  "lorent_notes_read": "老臣党翻过你的口袋",
  "met_eilis": "见过艾莉丝公主",
  "codebook_seen": "密码本被共和国海关翻过",
  "line14_struck": "第十四行怎么处置的：划掉",
  "line14_read": "第十四行怎么处置的：照念",
  "line14_pen": "第十四行怎么处置的：把笔递给他本人",
  "line14_bought": "第十四行怎么处置的：问这一行卖不卖，买下了",
  "log_amended": "使团长在日志上添了半句",
  "debt_no_term": "指出抵债文书没写年限",
  "hid_waking": "把“醒了”这件事瞒过了领班",
  "exit_ran": "怎么出的厂：偷跑",
  "exit_stolen": "怎么出的厂：让司炉当废铁推出去",
  "exit_sold": "怎么出的厂：按废铁价被卖出去",
  "saw_fork_light": "看清了音叉的光",
  "alvar_friend": "帮阿尔瓦搬过草",
  "fork_receipt": "手里有殖民官开的音叉收条",
  "fork_sketch": "画下了音叉的尺寸",
  "noro_warned": "听懂了诺罗没说完的半句",
  "ioriel_noticed": "〔神〕王冠里那位当众跟你说过话",
  "jar_snubbed": "第一次她要开盖子，你说回头再说",
  "spotted_bidders": "认出了讲堂里的买家",
  "silcalas_refused": "回绝了西尔卡拉斯的五百金冠",
  "union_card": "工会给机器发了会员证",
  "ugo_papers": "给乌戈出了保函",
  "clause_refusal": "合同里有“得拒绝违法命令”一条",
  "partner_hint_1": "看出将军问话像在估地",
  "crate_cracked": "摔裂了一箱配给魔晶",
  "shared_circle": "进过催生术的圈子",
  "skiplist_obeyed": "暂缓名单怎么办的：照办",
  "skiplist_defied": "暂缓名单怎么办的：违令施术",
  "skiplist_halved": "暂缓名单怎么办的：减半施术",
  "skiplist_caught": "违令施术被部里知道了",
  "skiplist_read_out": "当众念过那封电报",
  "refusal_on_paper": "照合同书面拒绝执行",
  "crystals_lost": "夜袭里丢了一半魔晶",
  "lianne_arrested": "莉安娜的下落：被捕",
  "lianne_freed": "莉安娜的下落：放走了",
  "lianne_supplied": "莉安娜的下落：给了她魔晶",
  "bribed_whiterose": "收了白玫瑰王庭八十金冠",
  "purse_spent_mages": "洛伦特出身那袋钱：花在了法师身上",
  "purse_kept": "洛伦特出身那袋钱：留着没花",
  "purse_to_peargrove": "洛伦特出身那袋钱：给了梨林",
  "box_skiplist": "电报锁进了铁箱",
  "square_stood": "广场上你站哪里：站在两拨人中间",
  "square_mages_out": "广场上你站哪里：带法师撤出广场",
  "square_held_line": "广场上你站哪里：守在治安军的线上",
  "volleys": "康威尔开了排枪",
  "saw_shooter_window": "看见枪烟从税关楼上出来",
  "shot_counted": "礼拜三数过：那一响在砖头之前",
  "blame_crowd": "事件报告的“起因”一栏：写的是人群",
  "blame_officer": "事件报告的“起因”一栏：写的是军官",
  "blame_unknown": "事件报告的“起因”一栏：写的是不明",
  "square_reported": "笔记交给了《康威尔通报》",
  "wastage_ref": "知道部里有一卷“损耗”",
  "heard_hum": "隔着地板听见过碎片一声",
  "report1_full": "第一份报告：写全",
  "report1_edited": "第一份报告：删改",
  "report1_lie": "第一份报告：说谎",
  "partner_knows_lie": "说谎被合伙人看穿过",
  "soil_mended": "〔神〕把一个区的土永久治好了",
  "box_turned_blue": "〔神〕把一盒破魔弹变回了蓝的",
  "square_miracle": "〔神〕让排枪的子弹停在半空",
  "fragment_hushed": "〔神〕碎片在你面前停过声",
  "tears_called": "〔神〕让流星多落过一回",
  "retainer_taken": "三年的预付款怎么花的：公司收下",
  "retainer_split": "三年的预付款怎么花的：按人头分了",
  "backpay_suit": "三年的预付款怎么花的：拿去打欠饷官司",
  "bank_thin": "知道银行头寸很薄",
  "clause_force_majeure": "合同里有不可抗力一条",
  "registered_mages": "队里的法师在安卡迪亚登了记",
  "gauge_tested_m": "礼拜三上过一回秤",
  "plates_understood": "读懂了德鲁兹纳的底片",
  "plates_printed": "底片的去处：交史家会印了出来",
  "plates_sold": "底片的去处：卖了",
  "box_plates": "底片的去处：锁进埃塔的铁箱",
  "midreport_blood": "例行勘测报告里提了血",
  "ancardia_ledger": "拿到了安卡迪亚的回扣账",
  "m_impounded": "礼拜三在海关地窖里过了一夜",
  "yamina_tired": "看出雅米娜这个雨季累了",
  "yamina_ledger_read": "看懂了她那两栏账",
  "ledger_copied": "抄了一份她的账",
  "isa_owes_company": "伊萨是谁拉回来的：公司拉回来的",
  "yamina_spent": "伊萨是谁拉回来的：雅米娜拉回来的",
  "cellar_book": "魔法领地地窖的血账",
  "wages_found": "查出工钱被监工挪走",
  "strike_settled": "罢工的结局：谈妥了",
  "strike_held": "罢工的结局：工棚撑住了",
  "strike_broken": "罢工的结局：被国民卫队打散",
  "partner_is_general": "查到代持账户连着一位将军",
  "blood_published": "血账的去处：登了报",
  "blood_sold": "血账的去处：卖了",
  "blood_burned": "血账的去处：烧了",
  "blood_reported": "血账的去处：报给了部里",
  "box_blood": "血账的去处：锁进铁箱",
  "oto_exposed": "奥托的回扣见了报",
  "line_castonath": "路权签给了谁：卡斯托纳斯",
  "line_ancardia": "路权签给了谁：安卡迪亚",
  "line_none": "路权签给了谁：谁也没给",
  "contract_broken": "公司毁过约",
  "hoard_sealed": "窖藏封了还是磨了：三印封存",
  "hoard_milled": "窖藏封了还是磨了：磨成了子弹",
  "rite_given": "伊萨受了礼",
  "guilhem_stayed": "吉列姆留在了卡斯托纳斯",
  "report2_full": "第二份报告：写全",
  "report2_edited": "第二份报告：删改",
  "report2_lie": "第二份报告：说谎",
  "report2_named_general": "抬头写了“将军阁下”",
  "demesne_patron": "〔神〕魔法领地宣布主角是它的守护者",
  "line_overnight": "〔神〕那条线是一夜之间自己铺好的",
  "gauge_open": "魂秤的专利：公开",
  "gauge_sold": "魂秤的专利：卖给了公司",
  "gauge_burned": "魂秤的专利：烧了图纸",
  "bernal_confided": "听出老人咽回去的那半句",
  "m_member": "礼拜三从“器材”划到了“成员”",
  "karshyr_message": "替商栈的老乡带一句话回家",
  "cousin_tip": "表亲指了股东名册放在哪里",
  "town_shelters": "镇上肯收留暗线上的人",
  "town_vote_skipped": "没等表决就把人领进了谷仓",
  "dainuich_noticed": "看出主人一口没吃",
  "planter_list_signed": "在追回清单上签了收",
  "cores_1810": "知道早醒的芯核都是 1810 年的料",
  "contract_planters": "办的是哪一份合同：种植园财团的",
  "contract_line": "办的是哪一份合同：大监院的",
  "contract_fraud": "办的是哪一份合同：两份都签，两头都骗",
  "bura_alone": "布拉的枪：她一个人去了",
  "bura_armed": "布拉的枪：公司帮她发了枪",
  "bura_line": "布拉的枪：劝她把人带上暗线",
  "wanted_concord": "联盟悬赏整个公司",
  "levee_lost": "河堤上输了／替财团追回了人：河堤上输了",
  "levee_recovered": "河堤上输了／替财团追回了人：替财团追回了人",
  "engine_ledger": "拿到了机房的流水账",
  "partner_engine_share": "在机房股东名册上见过那个代持账户",
  "cloakmen_fought": "在密室里跟披风卫动过手",
  "phrase_published": "那两个词的去处：公开",
  "phrase_sold": "那两个词的去处：卖了",
  "phrase_kept": "那两个词的去处：替娜尔雯守住",
  "phrase_signed": "那两个词的去处：娜尔雯自己署名公开",
  "box_phrase": "鸣声记录锁进了铁箱",
  "rector_erudite": "新任总院长是哪一派：博学派",
  "rector_zealot": "新任总院长是哪一派：热忱派",
  "narwen_left": "娜尔雯回了塔",
  "m_testified": "礼拜三上没上秤、醒没醒着：上了秤，醒着下来",
  "m_dormant": "礼拜三上没上秤、醒没醒着：睡过去了",
  "m_left": "礼拜三上没上秤、醒没醒着：走了，回铸炉街领头停工",
  "pc_testified": "机械人主角自己上了秤",
  "pc_lost_year": "主角上秤以后少了一年的记忆",
  "ruling_cores": "法庭的裁定：只判芯核算人",
  "ruling_both": "法庭的裁定：芯核和戴镣的一起判",
  "engine_licensed": "法庭的裁定：给魂炉发执照",
  "warpattern_spared": "四臂战争型是被说停的",
  "cores_saved": "把炉膛里十二颗芯核抢了出来",
  "engine_burned": "机房烧了",
  "ynns_free_soil": "洇河口把“不认拘票”写成了明文",
  "gladeguard_refused": "回绝了林卫上将",
  "partner_known": "知道合伙人是阿赫特",
  "report3_full": "第三份报告：写全",
  "report3_edited": "第三份报告：删改",
  "report3_lie": "第三份报告：说谎",
  "report3_named_bronze": "报告里点了一句“鱼馆里有人问您好”",
  "reaper_file": "〔神〕红衣收割者给主角立了案",
  "levee_sanctuary": "〔神〕河堤成了“神的庇护所”",
  "partner_paid_on": "知道以后还收不收他的钱：照收",
  "partner_refused": "知道以后还收不收他的钱：不收",
  "partner_escrow": "知道以后还收不收他的钱：存进第三方",
  "client_republic": "第四幕的雇主：共和国",
  "client_lorent": "第四幕的雇主：洛伦特",
  "client_charter": "第四幕的雇主：卡拉桑尼",
  "client_church": "第四幕的雇主：教廷",
  "client_none": "第四幕的雇主：谁也不跟",
  "seat_delegation": "机械人代表团按“与会一方”入席",
  "concord_speech": "替联盟在人头条款上发过言",
  "summit_procedure": "翻出了 1221 年的议事规则",
  "ramsgate_cap": "走廊里谈成的三笔：拉姆斯盖特答应设上限",
  "silcalas_share": "走廊里谈成的三笔：西尔卡拉斯分了一股",
  "wand_pledge": "走廊里谈成的三笔：魔杖一方的承诺",
  "wastage_read": "“损耗”卷的卷号当众报了出来",
  "article_heads": "人头条款：机械人算人头",
  "article_wards": "人头条款：机械人算被监护人",
  "article_doors": "门户条款：共管委员会，门口的人有席位",
  "article_ration": "破魔弹条款通过了哪一份：配给",
  "article_ban": "破魔弹条款通过了哪一份：禁令",
  "article_charter": "破魔弹条款通过了哪一份：特许",
  "fragment_aboard": "碎片上了船",
  "fragment_stolen": "碎片是偷出来的",
  "narwen_custodian": "离了队的娜尔雯以保管人身份上船",
  "salvation_sails": "教廷的“得救号”同行",
  "night_bloodless": "签令之夜没死人",
  "inquiry_truth": "调查庭上的证词：照实说",
  "inquiry_cover": "调查庭上的证词：替部里遮掩",
  "inquiry_blame_lorent": "调查庭上的证词：推给洛伦特",
  "artheta": "共和国的决定：破晓",
  "dove_honoured": "共和国的决定：公投认账",
  "dove_released": "共和国的决定：放手",
  "charmed_once": "中过一回大咒",
  "crown_castine": "洛伦特听谁的：卡斯蒂娜",
  "crown_ioriel": "洛伦特听谁的：伊奥瑞尔",
  "crown_off": "洛伦特听谁的：摘下王冠",
  "freq_treaty": "频率怎么到手的：照条约领的",
  "freq_bought": "频率怎么到手的：买的",
  "freq_stolen": "频率怎么到手的：偷的",
  "alvar_pilot": "阿尔瓦跟船领航",
  "jar_sold": "别摇的抉择：卖给了金库",
  "jar_used_unasked": "别摇的抉择：没问就拿她定音",
  "jar_asked": "别摇的抉择：问过她",
  "jar_price_self": "她的价是谁付的：主角付的",
  "jar_price_companion": "她的价是谁付的：同伴付的",
  "spires_told": "尖碑的用途告诉了谁：先告诉了家里",
  "spires_sold": "尖碑的用途告诉了谁：卖了",
  "spires_kept": "尖碑的用途告诉了谁：谁也没说",
  "karshyr_at_summit": "卡尔希尔作为一方进了峰会",
  "spire_tuned": "把一座尖碑调到了应声",
  "partner_exposed": "合伙人的身份被揭穿",
  "partner_to_hakhepra": "揭给了谁：哈赫普拉",
  "partner_to_guns": "揭给了谁：造大炮的人",
  "janebisa_told": "只告诉了贾内比萨一个人",
  "lamps_told": "把“灯”的事说给了大殿",
  "signed_partner_paper": "在合伙人的文件上签了字",
  "partner_bought_out": "怎么处置五成一：买断",
  "partner_voted_out": "怎么处置五成一：照章程开会投出去",
  "register_forged": "怎么处置五成一：改了股东名册",
  "charter_burned": "怎么处置五成一：烧了章程",
  "etta_left": "埃塔走了，公司没有印",
  "pilots_paid": "阿迪诺诺西人拿到了领航权",
  "ship_own": "坐谁的船出海：公司自己的船",
  "ship_client": "坐谁的船出海：雇主的船",
  "ship_karshyr": "坐谁的船出海：卡尔希尔的船",
  "report4_full": "最后一份报告：写全",
  "report4_edited": "最后一份报告：删改",
  "report4_lie": "最后一份报告：说谎",
  "report4_to_company": "最后一份报告：只写给公司自己",
  "council_called": "〔神〕第十二次泛神会议为主角开了",
  "dove_by_miracle": "〔神〕十一个邦梦见了同一只鸽子",
  "throne_sat": "〔神〕主角坐过阿拉莫莱那张空王座",
  "siphon_taken": "夺下了抽气船的撞锤",
  "court_signs": "平潮庭肯不肯签：签",
  "court_refused": "平潮庭肯不肯签：不签",
  "partner_draw": "那一仗的结局：平手",
  "partner_dead": "那一仗的结局：他沉进了那片海",
  "partner_goes_home": "他听了那句话，掉头往南飞了",
  "went_beyond": "往平潮庭外面走了",
  "dead_asked": "在崩塌之城问过一个死人",
  "angels_truth": "对浅滩上的天使说了什么：说了实话",
  "angels_follow": "对浅滩上的天使说了什么：请他们跟船走",
  "narwen_talked_down": "门前立契的事：劝住了",
  "narwen_pact_done": "门前立契的事：她立了契，问到了",
  "narwen_dead": "门前立契的事：她死在门前",
  "pc_pact": "门前立契的事：主角替她立了契",
  "m_rewoken": "礼拜三在门前被唤醒，不记得你",
  "gate_knock": "对门做了什么：敲了",
  "gate_key": "对门做了什么：用钥匙开了",
  "gate_forced": "对门做了什么：撞开了",
  "mass_awakening": "所有芯核一夜之间醒了",
  "struck_own_name": "为了签字，在章程上划掉了自己的名字",
  "sign_ration": "签的是哪一个名字：《配给本》",
  "sign_charter": "签的是哪一个名字：《特许状》",
  "sign_quiet": "签的是哪一个名字：《静世纪》",
  "sign_rose": "签的是哪一个名字：《玫瑰和约》",
  "sign_dragon": "签的是哪一个名字：《他的帝国》",
  "sign_gate": "签的是哪一个名字：《开门》",
  "sign_keeper": "签的是哪一个名字：《守门人》",
  "fork_sunk": "音叉沉进了海里",
  "partner_signed": "阿赫特签了约",
  "keeper_narwen": "留在门前的是谁：娜尔雯",
  "keeper_self": "留在门前的是谁：主角自己",
  "doors_flung": "〔神〕主角没用音叉走进漩涡，门从此合不上",
  "seat_sat": "〔神〕神对那把椅子做了什么：坐下",
  "seat_locked": "〔神〕神对那把椅子做了什么：进去，从里面锁上门",
  "seat_carried": "〔神〕神对那把椅子做了什么：把椅子搬了出来"
 },
 "endings": {
  "ration": {
   "title": "配给本",
   "subtitle": "阿兰蒂尔塔条约",
   "art": "ev_hre",
   "text": [
    "各国在阿兰蒂尔塔签约，限制制造破魔弹所需的归零工序。此后每块魔晶都得挂牌，注明编号、产地和下次称重的日期。",
    "各国按配额从门外运回气态魔晶，拿彼岸认可的东西去换，有时是一份人情，有时是一个节日，甚至是一个真名。条约明文禁止从人身上提取魔法。",
    {
     "if": "flag.article_heads",
     "text": "条约第七款只用了一句话：机械人同样受这条禁令保护。"
    },
    {
     "if": "!flag.article_heads",
     "text": "机械人算不算人，第七款只留了“另议”二字，交给新设的委员会处理。"
    },
    "魔法成了人人可以申请的公用事业，余量足够用到本世纪结束，只是得排队。签约那天没有人举杯。条款究竟怎么解释，各国后来打了四十年官司。",
    {
     "if": "is.god",
     "text": "配给局每年都在表上给你留一行。你一次也没去领，那一栏的数目始终空着。"
    }
   ]
  },
  "charter": {
   "title": "特许状",
   "subtitle": "位面，按吨",
   "art": "load_2",
   "text": [
    "卡拉桑尼公司拿到了妖精界的那片海。船队把气态魔晶运回新港，压成砖块，堆进仓库。安本科斯特的路灯从此夜夜亮着。",
    "妖精界和当年的巨魔湾一样，成了殖民地。新栈桥上飘起卡拉桑尼的旗。跑这条航线的船员开始咳蓝痰，保险行因此加了保费。",
    {
     "if": "flag.court_refused",
     "text": "平潮庭散会时，彼岸依旧没签。他们在名册上将你们记作“先来的”，给后来的人留了地方。"
    },
    {
     "if": "!flag.partner_dead",
     "text": "1851 年，《泰卢姆传声报》采访了一位退役将军。记者问起那片海，他说：“那不过是一笔小投资。”"
    },
    {
     "if": "is.god",
     "text": "卡拉桑尼给你的特许状编了零号。你没去领，这张纸便被装进镜框，挂上了董事会的墙。"
    }
   ]
  },
  "quiet": {
   "title": "静世纪",
   "subtitle": "返港，无货",
   "art": "ev_big_star_in_sky",
   "text": [
    "门在你身后关上。此后四十年，无人再来敲门。",
    "各国仍握着破魔弹，去彼岸补充魔力的路却断了。到了 1870 年代，最后一点魔法耗尽。巫师王从此绝迹，面包师的儿子也能当面拒绝任何人。老海堤的结界陆续失效，石匠接手了修堤的活。",
    "洛伦特王冠里的伊奥瑞尔话说到一半，没了声音。女王卡斯蒂娜等了一会儿，用自己的声音把后半句接了下去。",
    {
     "if": "world.chains <= 3",
     "text": "按照法律，最后一批魔晶优先供应芯核。仍然清醒的机械人排队领完各自的一份，又回到了工位上。"
    },
    {
     "if": "world.chains >= 4",
     "text": "机械人陆续停了下来。铸炉街的车间在门口放了一张长椅。最后几台坐上去的时候，都选了面朝街道的位置。"
    },
    {
     "if": "is.god",
     "text": "有人上门求你让魔法再延续几年，你拒绝了。此后几十年，谁家的灯熄了，谁就来你门口留一根蜡烛。"
    }
   ]
  },
  "rose": {
   "title": "玫瑰和约",
   "subtitle": "第三次法师和平",
   "art": "ev_mages_estate",
   "text": [
    "条约生效，破魔弹成了禁用武器，剩余的魔力交给魔杖托管会。托管会拟了一份长长的章程，连最末一款都注明了出处。",
    {
     "if": "flag.crown_castine",
     "text": "禁令是各方逐条谈下来的。洛伦特的宪法比条约早签了一个月，因为女王坚持先签宪法，后签条约。"
    },
    {
     "if": "flag.crown_ioriel",
     "text": "禁令靠一道大咒才得以通过。往后三十年没有战争，也没人能想起当初为什么投了反对票。"
    },
    "和平维持了很久，掌权的家族代代相传。法师和他们认可的人大多过得安稳。机械人的法定身份是“魔杖的被监护人”。",
    {
     "if": "is.god",
     "text": "托管会一直给你留着座位。你从未去过。每年都有人来擦那块写着“阁下”的名牌。"
    }
   ]
  },
  "dragon": {
   "title": "他的帝国",
   "subtitle": "一个会回信的神",
   "art": "ev_aakhet_dragon_smug",
   "text": [
    "青铜龙阿赫特签了条约，回到阿拉莫莱。哈赫普拉人等了四十五年，终于等到自己的神归来。",
    "天下魔力都进了他的私藏。他爱听好话，也记仇。好在如今报上可以指名骂他，他还会给骂他的读者逐一回信。哈赫普拉的人再也不用等他回家了。",
    {
     "if": "flag.struck_own_name",
     "text": "埃塔在章程上把你的名字划掉，却没涂去。按她记账的规矩，后来的人得看得见原来写了什么。"
    },
    {
     "if": "is.god",
     "text": "他每年写信，都问你当年究竟怎么做到的。你回过许多种答案，他一个也不信。第二年，信照来。"
    }
   ]
  },
  "gate": {
   "title": "开门",
   "subtitle": "一掌宽",
   "art": "load_3",
   "text": [
    {
     "if": "flag.gate_key",
     "text": "天界的生灵依次穿过门缝，没有谁回头。还有一叠诉状从门里递出来。直到今天，双方仍坐在门槛边逐件商谈。"
    },
    {
     "if": "flag.gate_forced",
     "text": "九家分得采矿特许权，上市第一天，股价就翻了一倍。红衣敲过的门上，至今还看得见粉笔留下的红印。"
    },
    "你们这一敲，机械人的大觉醒提前了五十年。教会分裂了。一派说祂终于回家，另一派坚持那里从来只有一道门。",
    {
     "if": "is.god",
     "text": "门始终敞着，你留在门外。每年都有人问你什么时候进去。你的回答年年不同。"
    }
   ]
  },
  "keeper": {
   "title": "守门人",
   "subtitle": "隔着钥匙孔",
   "art": "ev_priest_phantom",
   "text": [
    "两边隔着钥匙孔立约，门永远关闭。崩塌之城的长队一百多年来第一次往前挪动。活人宣誓不再点燃魂炉，条约也承认芯核具有人格。",
    "按照约定，每年可用的魔法都会少一些。教会发表的训示也渐渐少了。",
    {
     "if": "flag.angels_follow",
     "text": "随船回来的天使在新港租下一栋楼。房东问他们打算做什么生意。他们答了一个字：“等。”"
    },
    {
     "if": "flag.keeper_narwen",
     "text": "每年都有人从门口捎回一页纸。你认得上面那些挤得密密麻麻的数字，娜尔雯写字一向如此。"
    },
    {
     "if": "flag.keeper_self",
     "text": "公司仍旧每年往门口寄一份薪水。每只信封都照例注着“驻外”。"
    },
    {
     "if": "is.god",
     "text": "门后的声音记得你。它们开口时，总还先唤一声你的神号。"
    }
   ]
  },
  "seat": {
   "title": "空座",
   "subtitle": "升格者，待其身故后追认",
   "art": "load_17",
   "divine": true,
   "text": [
    {
     "if": "flag.seat_sat",
     "text": "你坐上了神座。天使重新有了主人。人们对{god}的信仰再次化为魔力，任凭取用也不会枯竭。"
    },
    {
     "if": "flag.seat_sat",
     "text": "从前每一口让人抽取魔力的井，里面都困着一个人。如今你就是那口井。你一离开房间，天便暗下来。配给局只好替你排班。卡拉桑尼要求平等使用魔力，公司也修改章程，添了一位没有薪水的合伙人。"
    },
    {
     "if": "flag.seat_locked",
     "text": "你走进门内，亲手闩上了门。外侧的钥匙孔消失，碎片彻底熄灭。魔法在《静世纪》预言的时刻耗尽。门里的居民终于安全了，再没人能把他们当矿开采。"
    },
    {
     "if": "flag.seat_locked",
     "text": "公司的人在门外守了三天。最后，埃塔翻到名册上你的那一行，只写了四个字：“外勤，未归。”"
    },
    {
     "if": "flag.seat_carried",
     "text": "你从门里搬出那把椅子，放进旧斗兽场。门一直开着，门缝正好容得下一把椅子。"
    },
    {
     "if": "flag.seat_carried",
     "text": "共和国按财产分配选票，如今却要靠选举产生一位神。摄政王庭、科琳教和揭秘教都声称只有自己可以提名。你仍是神，可那把椅子已经不归你坐了。"
    },
    "第十二次泛神会议通过传音石投票，表决是否承认你的神格。双方只差几票。公文最后写道：“升格者，待其身故后追认。”"
   ]
  }
 },
 "endingScenes": {
  "ration": "end_ration",
  "charter": "end_charter",
  "quiet": "end_quiet",
  "rose": "end_rose",
  "dragon": "end_dragon",
  "gate": "end_gate",
  "keeper": "end_keeper",
  "seat": "end_seat"
 },
 "epilogues": [
  {
   "title": "流星",
   "text": [
    {
     "if": "world.tears <= 2",
     "text": "1871 年泪落月，安本科斯特天文台的值夜员在记录簿上写下一个零。他又在屋顶坐了一个钟头，临走还回去描了一遍。那一笔比前面的数目都黑。"
    },
    {
     "if": "world.tears <= 2",
     "text": "最后一位在编的法师领了退休金，在铸炉街口支了个修钟的摊子。他说这是他这辈子第一件不靠咒语办成的事，经他手修好的钟倒是走得很准。"
    },
    {
     "if": "world.tears >= 3 && world.tears <= 5",
     "text": "到了泪落月的晚上，人们还是带着毯子和野餐篮上屋顶去看流星。可数到五十几颗，孩子们就喊冷，大人只好收了篮子领他们下楼。"
    },
    {
     "if": "world.tears >= 3 && world.tears <= 5",
     "text": "魔晶的价钱一年涨一次，好在涨得不多。公务法师照样是两个人干一整个法师团的活，大夫也照样不许他们喝咖啡。"
    },
    {
     "if": "world.tears >= 6",
     "text": "魔晶的价钱跌回了 1809 年的水平。魔导院贴出了招生告示，第一届收了四十个人，其中二十六个是做工人家的孩子。"
    },
    {
     "if": "world.tears >= 6 && met.guilhem",
     "text": "第一堂课是吉列姆去讲的。他说，谁都学得会，说完停了一下，又补了一句：真的学得会。"
    }
   ]
  },
  {
   "title": "门",
   "text": [
    {
     "if": "world.doors <= 2",
     "text": "谁也没去打捞音叉。接下来四十年，安本科斯特把路灯陆续换成煤气灯。原先负责点灯的人也有了新差事，挨家去抄表。"
    },
    {
     "if": "world.doors <= 2 && flag.fork_sunk",
     "text": "托拉普里亚卡的港务簿上，“返港，无货”那一行一直没人去改。领航的人带船还是绕着那片海走，跟他们的太奶奶当年一模一样。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6",
     "text": "钥匙到底归谁，都写在条约后面的附表里。那份附表比条约本身还要厚。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && flag.article_doors",
     "text": "门归了共管委员会。委员会开会的屋子在贾赫港，桌边专门有一把椅子，是留给守门人的。第一年坐在那里的是个卡尔希尔的水术师，第二年换成了诺罗的孙女。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && (flag.sign_charter || flag.client_charter)",
     "text": "门归了公司。卡拉桑尼每个季度公布一回出港的船数，过路费就印在行情牌上，跟煤价紧挨着。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && !flag.sign_charter && !flag.client_charter && flag.rector_zealot && flag.salvation_sails",
     "text": "门归了教会。教廷给每条出港的船发一张通行文书，背面还印着一段经文。船长们都拿它来垫茶杯。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && !flag.sign_charter && !flag.client_charter && !(flag.rector_zealot && flag.salvation_sails)",
     "text": "门归了布西拉尔。贾赫港的金库又加了一道门，频率照常锁在里面，租给别人用，按年收钱。"
    },
    {
     "if": "world.doors >= 7",
     "text": "各家都试出了自己的频率，侏儒议会有了，北方联盟和卡拉桑尼也有了，就连小人国也租了一条船。"
    },
    {
     "if": "world.doors >= 7",
     "text": "还真有人到了一颗有海的星星上。回来的人说，那里的潮一天要涨三回，鱼是蓝的，可惜不好吃。"
    }
   ]
  },
  {
   "if": "world.dove <= 3",
   "title": "鸽子",
   "text": [
    {
     "if": "flag.artheta",
     "text": "上尉看了怀表，又看天色。晨光刚露，第一排士兵便抬起枪口。后人称这一天为“破晓”。"
    },
    {
     "if": "flag.artheta",
     "text": "叛乱各邦有四分之一的人改了籍。行刑名单的最后一页上有一栏是见证人，在那里签名的人，字写得都很工整。"
    },
    {
     "if": "flag.artheta && origin == 'anbennar'",
     "text": "那一栏里也有你的名字，是马洛少校替你写上去的。他说你当时在场，这是事实。"
    },
    {
     "if": "!flag.artheta",
     "text": "鸽子死了。达梅斯海德沿岸一下多出了六面新旗。旧斗兽场里的议会还照开，只是管的地方小了一半。后来人们管这件事叫“不复联合”。"
    }
   ]
  },
  {
   "if": "world.dove >= 4",
   "title": "鸽子",
   "text": [
    {
     "if": "world.dove <= 6",
     "text": "公投一年年延期。没有枪响，也没有庆祝。埃斯玛利亚的麦子照常催熟。选票也照常清点，点完就锁回柜里。"
    },
    {
     "if": "world.dove >= 7",
     "text": "在梅尼博尔的一家酒馆里，有个弗恩人举起杯子喊了一声“自由的弗恩”，喊完四下里看看，见没人理他，就坐下了。酒保过来给他续了一杯，没收他的钱。"
    },
    {
     "if": "world.dove >= 7 && (flag.inquiry_truth || flag.dove_honoured)",
     "text": "康威尔那一枪，调查庭的结论足足写了四页。起因那一栏是照你说的填的，下面签着三位部长的名字。后来人们把这一年叫作“鸽之日”。"
    },
    {
     "if": "world.dove >= 7 && !flag.inquiry_truth && !flag.dove_honoured",
     "text": "康威尔那一枪到头来还是没人认。好在各邦照样投了票，投完也都留了下来。报上管这一年叫“鸽之日”。"
    }
   ]
  },
  {
   "title": "货与人",
   "text": [
    {
     "if": "world.chains <= 2",
     "text": "联盟表决废除奴隶制那天，伊索贝尔港的投票队伍一直排到码头。一个崖下兽人排了整整一上午，轮到时才想起来，自己还没有投票权。"
    },
    {
     "if": "world.chains <= 2",
     "text": "许多年以后出了一本回忆录，书名叫《在一个下雨天》。作者署的是一个编号，编号后面跟着两个字：解放。"
    },
    {
     "if": "world.chains >= 3 && world.chains <= 5",
     "text": "奴隶换了个名字，改叫“学徒”。心智执照要另外发，只有少数走运的拿到了那张纸。纸上得盖三个章，每五年还要换一回。"
    },
    {
     "if": "world.chains >= 6",
     "text": "文森顿的机房又盖起了第二座，第三座也已经画在图纸上了。那一带夜里亮得用不着点灯，住在附近的人都睡不好觉。"
    }
   ]
  },
  {
   "title": "铅字",
   "text": [
    {
     "if": "world.press <= 3",
     "text": "1838 年，德鲁兹纳的论文登在报纸第七版，旁边是一则寻狗启事。标题原本带一个问号，排字工把它漏了。"
    },
    {
     "if": "world.press <= 3",
     "text": "读到这篇论文的人不多，读了又肯信的更少。"
    },
    {
     "if": "world.press >= 4 && world.press <= 6",
     "text": "各家报纸各说各的。《论坛报》说是这么一回事，《哀恸日评论》说是另一回事，《泰卢姆传声报》干脆两样都喊。读者就挑自己爱信的那一份看。"
    },
    {
     "if": "world.press >= 7",
     "text": "1838 年，德鲁兹纳的论文登了出来，标题后面带着个问号。谁也没觉得吃惊，这些事大家早就知道了。报童嫌这条消息不好卖，一上午都换着喊别的。"
    }
   ]
  },
  {
   "if": "flag.line_castonath || flag.line_ancardia || flag.line_none",
   "title": "东坎诺",
   "text": [
    {
     "if": "flag.line_castonath",
     "text": "卡斯托纳斯终于点起了煤气灯。八座塔有三座租给外人，其中一座开了邮局。进城时能看见，旧铜牌旁已经多了一个售票窗。"
    },
    {
     "if": "flag.line_ancardia",
     "text": "东坎诺是坐着兵车统一起来的。安卡迪亚的登记处搬进了卡斯托纳斯的西门，法师们按月去那里交血，队伍一直排到铜牌面前。"
    },
    {
     "if": "flag.line_none",
     "text": "阿斯拉银行倒了。银行团的股东名册上，迟到者公司那一栏写着“勘测未签”，同行们拿这件事笑话了好几年。"
    },
    {
     "if": "flag.hoard_sealed",
     "text": "雅米娜的窖藏到现在还封着。上面有三道印，钥匙分在三家手里，哪一家也不肯先拿出来。"
    },
    {
     "if": "flag.hoard_milled",
     "text": "窖藏全被磨成了子弹，只打了两年就打完了。"
    },
    {
     "if": "flag.rite_given",
     "text": "伊萨受了礼，把第三席补上了。她给公司写过一封信，问账本上的那两栏如今是谁在记。"
    },
    {
     "if": "!flag.rite_given",
     "text": "第三席就这样一直空着。伊萨长大以后去学了测量，她量过的地方里面，就有那条铁路。"
    }
   ]
  },
  {
   "if": "flag.crown_castine || flag.crown_ioriel || flag.crown_off",
   "title": "洛伦特",
   "text": [
    {
     "if": "flag.crown_castine",
     "text": "洛伦特有了卡斯蒂娜颁布的宪法。女王仍戴着那顶王冠。如今她在朝会上开口，一整句话都能用自己的声音说完。"
    },
    {
     "if": "flag.crown_ioriel",
     "text": "洛伦特成了帝国。诏书写得很好看，用的全是十一世纪的套话。女王签完字，盯着自己的笔迹看了很久。"
    },
    {
     "if": "flag.crown_off",
     "text": "红宝石王冠锁进了柜子，钥匙在艾莉丝手里。她加冕的时候戴的是一顶普普通通的王冠，铜胎镀金，不会说话。"
    }
   ]
  },
  {
   "if": "flag.rector_erudite || flag.rector_zealot",
   "title": "教廷",
   "text": [
    {
     "if": "flag.rector_erudite",
     "text": "阿兰蒂尔塔开放地窖。排队看碎片的人绕塔三圈。看过的人半数说那是菱形，另一半认准了是方块。"
    },
    {
     "if": "flag.rector_zealot",
     "text": "教廷造了一条船，起名叫“得救”。这条船出过两次港，每次回来，甲板上的人都比出发时少。"
    },
    {
     "if": "flag.fragment_stolen",
     "text": "碎片明明是偷出来的，可这件事到了教廷的记录里，就写成了“借出，未还”。"
    }
   ]
  },
  {
   "if": "flag.ruling_cores || flag.ruling_both || flag.engine_licensed",
   "title": "巨魔湾",
   "text": [
    {
     "if": "flag.ruling_both",
     "text": "巡回法庭作出了裁定，醒着的芯核是人，戴镣铐的也是。联盟为此争了九个月，险些解体。表决最终只以一票之差通过。"
    },
    {
     "if": "flag.ruling_cores",
     "text": "机器算人了，甘蔗地里戴镣的那些却还不算。这个消息，他们还是从一台轧棉机嘴里听来的。"
    },
    {
     "if": "flag.engine_licensed",
     "text": "魂炉领到了执照。执照装在玻璃框里，挂在机房门口，每年换一张，换下来的旧执照都装订成了册。"
    }
   ]
  },
  {
   "if": "flag.spires_told || flag.spires_sold || flag.spires_kept",
   "title": "南岸",
   "text": [
    {
     "if": "flag.spires_told",
     "text": "卡尔希尔建立了共和国，门口由本地人值守。尖碑下的告示用几种文字写着同一句话：“先问，再进。”"
    },
    {
     "if": "flag.spires_sold",
     "text": "尖碑卖给了出价最高的那一家。卡尔希尔的海关每个月能收到一笔过路费，数目是印在报上的，不算小，可也不够用。"
    },
    {
     "if": "flag.spires_kept",
     "text": "尖碑的事，到头来谁也没往外说。一到雨季的夜里，它们还是那个颜色，渔民也还是绕着走。"
    },
    {
     "if": "flag.pilots_paid",
     "text": "阿迪诺诺西的半身人拿到了领航权。诺罗的账上记着那片海欠自家七条船，这次划掉了一条。"
    },
    {
     "if": "!flag.pilots_paid",
     "text": "领航的活给了布西拉尔的人。诺罗还在棚子里烤芭蕉，只是见了坎诺的船，一句话也不肯说。"
    }
   ]
  },
  {
   "if": "flag.partner_known && !flag.sign_dragon",
   "title": "五成一",
   "text": [
    {
     "if": "flag.partner_dead",
     "text": "阿拉莫莱每逢黄昏仍点起一万盏灯。一直没人去告诉他们，他们等的那一位已沉入寰宇之根另一侧的海底。"
    },
    {
     "if": "!flag.partner_dead && flag.partner_to_hakhepra",
     "text": "他回了家，一进门就嫌宫殿修得小。贾内比萨辞掉了大统帅的职务，去鲁本奈尔大学教军事史，第一课讲的就是萨拉哈德那一仗。"
    },
    {
     "if": "!flag.partner_dead && !flag.partner_to_hakhepra && (flag.partner_bought_out || flag.partner_voted_out)",
     "text": "埃塔用红墨水把股东名册上那一行划掉了。五成一的股份一笔一笔结得清清楚楚。他一分钱也没少要，也没多要。"
    },
    {
     "if": "!flag.partner_dead && !flag.partner_to_hakhepra && !flag.partner_bought_out && !flag.partner_voted_out",
     "text": "1851 年，一位退了役的将军在《泰卢姆传声报》上谈起了当年的事。他说那不过是一笔小投资，又说萨拉哈德那一仗打了个平手。"
    },
    {
     "if": "flag.partner_goes_home",
     "text": "有人说，那天在妖精界的海上，看见一对青铜翅膀掉过头往南飞走了，左边那只扇得慢一点。"
    }
   ]
  },
  {
   "title": "七号线",
   "text": [
    {
     "if": "!flag.mass_awakening",
     "text": "七号线上的七八三仍在拧阀门，每秒一圈。直到 1870 年代的一个雨天，它才会抬起头。"
    },
    {
     "if": "flag.mass_awakening",
     "text": "所有的芯核在同一个夜里醒了过来。七八三醒的那天正好是礼拜三，它开口问的第一句话是今天礼拜几。领班告诉了它，然后转身找报废单，没找着。"
    }
   ]
  },
  {
   "if": "met.bura && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "布拉",
   "text": [
    {
     "if": "flag.bura_alone && world.chains >= 6",
     "text": "布拉始终没有回来。马利安德奴隶区的后墙上留下四十个弹孔，和她当年弄来的枪一样多。"
    },
    {
     "if": "!flag.bura_alone && !party.bura",
     "text": "布拉后来不在队里了。可埃塔的账上，她那一栏一直没划掉，欠饷十一个月，利息也照样记着。"
    },
    {
     "if": "flag.bura_alone && world.chains <= 5",
     "text": "布拉是一个人去的，也是一个人回来的。她再没进过公司的门，只是每年泪落月都托人给埃塔捎一句话：人还活着，饷还欠着。"
    },
    {
     "if": "party.bura && flag.sign_ration",
     "text": "布拉总算领到了补发的军饷，十一个月的，还带着利息。她拿这笔钱在铸炉街开了一家铺子，专给老兵装假肢，黄铜做的，价钱也公道。"
    },
    {
     "if": "party.bura && flag.sign_charter",
     "text": "布拉给公司的船当了护卫长。六十岁那年，她死在一片没有名字的海上。船上的人把她下巴上的铰链带了回来。"
    },
    {
     "if": "party.bura && flag.sign_quiet",
     "text": "布拉回了林木之墙，教小兽人认字。第一课教他们写的是“饷”，第二课是“人人一样”。"
    },
    {
     "if": "party.bura && flag.sign_rose",
     "text": "和约是法师定的，布拉不肯在这样的和约下面领饷。她走了，连个地址也没留。"
    },
    {
     "if": "party.bura && flag.sign_dragon",
     "text": "布拉辞了职。临走之前，她从铰链上拧下一颗螺丝，放在埃塔的桌上，转身走了。"
    },
    {
     "if": "party.bura && flag.sign_gate && flag.gate_key",
     "text": "门开的那一夜，布拉在门口站了一整夜的岗。天亮的时候她说，前面没有哨卡了。"
    },
    {
     "if": "party.bura && flag.sign_gate && flag.gate_forced",
     "text": "红衣的人出来以后，布拉就带着暗线上的人东躲西藏。她说她这辈子躲过兵，也躲过债主，没想到还得躲查账的。"
    },
    {
     "if": "party.bura && flag.sign_keeper",
     "text": "每年一到泪落月，布拉就拎上一瓶酒到码头去，朝南边放一枪。"
    },
    {
     "if": "party.bura && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
     "text": "布拉每年给你写一封信，抬头写的是你的名字，从来不写神号。信里只说一件事：今年还有谁的饷欠着没发。"
    }
   ]
  },
  {
   "if": "met.middlesday && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "礼拜三",
   "text": [
    {
     "if": "flag.m_left",
     "text": "礼拜三回到铸炉街，生平第一次参加了工会的罢工。它的会员证上，出生地那一栏写的是“七号线”。"
    },
    {
     "if": "!party.middlesday && !flag.m_left && !flag.m_dormant",
     "text": "礼拜三后来不在队里了。器材账上的十四号倒还留着，埃塔每年都在旁边记上一笔，写的是“下落待查”。"
    },
    {
     "if": "flag.m_dormant && !flag.m_rewoken",
     "text": "礼拜三还在公司的名单上。它的箱子放在埃塔办公室的角落里，上面盖着一块帆布，每到礼拜三，总有人去掸一回灰。"
    },
    {
     "if": "flag.m_rewoken && party.middlesday",
     "text": "礼拜三醒了，可它已经不记得你了。你只好重新做了一回自我介绍。它听完说：“幸会。你的左手在摸口袋。”"
    },
    {
     "if": "party.middlesday && flag.sign_ration && flag.article_heads",
     "text": "条约第七款写明了机械人算人头。礼拜三第一个跑去登记，姓名那一栏它写得很长，办事员只好给它加了一页纸。"
    },
    {
     "if": "party.middlesday && flag.sign_ration && !flag.article_heads",
     "text": "条约第七款写的是“另议”。礼拜三坐在旁听席上数着，前后另议了十一回，每一次它都记了下来。"
    },
    {
     "if": "party.middlesday && flag.sign_charter",
     "text": "礼拜三把自己的卖契买了下来。剩下的钱，它又拿去买别人的卖契。"
    },
    {
     "if": "party.middlesday && flag.sign_quiet && world.chains <= 3",
     "text": "法律把最后一批魔晶留给了芯核，礼拜三一直活到了下一个世纪。它说它数过，账上的折旧早就折完了。"
    },
    {
     "if": "party.middlesday && flag.sign_quiet && world.chains >= 4",
     "text": "礼拜三把同类一台一台地送走了。后来它自己停在了新港码头的一张长椅上，脸朝着海，账上记的是“停机，原因已知”。"
    },
    {
     "if": "party.middlesday && flag.sign_rose",
     "text": "礼拜三成了“魔杖的被监护人”，每个礼拜三都得去领一次许可。日子一长，窗口里的人都用不着问它叫什么了。"
    },
    {
     "if": "party.middlesday && flag.sign_dragon",
     "text": "龙的库房里正缺一个谁也收买不了的管账的，礼拜三就去了。它说，它去是为了盯着他。"
    },
    {
     "if": "party.middlesday && flag.sign_gate",
     "text": "所有的芯核都醒了以后，“我是谁”这个问题，被问得最多的就是礼拜三。它每一次都答，每一次的答案都不大一样。"
    },
    {
     "if": "party.middlesday && flag.sign_keeper",
     "text": "礼拜三听得懂那扇门说的话。门前的轮值表上也有它的名字，排在每个礼拜三。"
    },
    {
     "if": "party.middlesday && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
     "text": "礼拜三告诉了那些醒过来的机器，造它们的到底是谁。它没有提你的名字。"
    }
   ]
  },
  {
   "if": "met.guilhem && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "吉列姆",
   "text": [
    {
     "if": "flag.guilhem_stayed",
     "text": "吉列姆在卡斯托纳斯留下，先教那位洪裔姑娘，又收了三个学生。他们认识这位老师时，他已经满头白发了。"
    },
    {
     "if": "!flag.guilhem_stayed && !party.guilhem",
     "text": "吉列姆后来不在队里了。梨林的果园每年秋天都给公司寄来一筐梨，寄件人那一栏只写着三个字：“理论上”。"
    },
    {
     "if": "party.guilhem && flag.sign_ration",
     "text": "吉列姆当上了配给局的第一任总稽核。这份差事他恨得要命，偏偏又干得很好。每一张表，他都是念出声填的。"
    },
    {
     "if": "party.guilhem && flag.sign_charter",
     "text": "公司给了吉列姆一间实验室，气态魔晶随他用，怎么用都用不完。可他一个学生也没教出来，魔法到处都是，再也没有人用得着学了。"
    },
    {
     "if": "party.guilhem && flag.sign_quiet",
     "text": "吉列姆回梨林种梨去了。那一年的收成全看天，好在老天还算给面子。"
    },
    {
     "if": "party.guilhem && flag.sign_rose",
     "text": "吉列姆进了魔杖托管会。第一次有人称他“阁下”时，他没有去纠正。"
    },
    {
     "if": "party.guilhem && flag.sign_dragon",
     "text": "龙请吉列姆去阿拉莫莱教书。他的回信上只有三个字，外加一个条例编号。"
    },
    {
     "if": "party.guilhem && flag.sign_gate",
     "text": "魔法野了整整一季。吉列姆在地里站了三天，记满了四本笔记。第五本还空着，他说留到明年再用。"
    },
    {
     "if": "party.guilhem && flag.sign_keeper",
     "text": "魔法照着计划一年比一年少。吉列姆索性把《催生术要则》改成了一本农书，第一章讲的是怎么看天。"
    },
    {
     "if": "party.guilhem && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
     "text": "吉列姆算过，你一共让多少个法师丢了饭碗。他把那个数抄在本子的第一页上，又在下面添了一句：“我也是其中之一。”"
    }
   ]
  },
  {
   "if": "met.narwen && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "娜尔雯",
   "text": [
    {
     "if": "flag.narwen_dead",
     "text": "门前添了一盏灯。分形修会的名册在娜尔雯的生年旁补上了卒年。两个年份差了将近两百年。"
    },
    {
     "if": "flag.narwen_left && !flag.narwen_custodian && !flag.narwen_dead",
     "text": "娜尔雯回了阿兰蒂尔塔的地窖，接着数她的数。她每年托人给公司带来一个数，除此以外什么也不写。"
    },
    {
     "if": "flag.keeper_narwen",
     "text": "娜尔雯留在了门前，接替了那条船原来的主人。她每年托人带回来一页纸，上面全是数字。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_ration",
     "text": "娜尔雯回到塔里接着数。条约给她分了一间带窗户的屋子，她住进去以后，把窗帘拉上了一半。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_charter",
     "text": "教廷把鸣声记录的版权卖掉了。娜尔雯退出了修会，到史家会去当抄写员。如今她抄的都是别人的记录。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_quiet",
     "text": "碎片不响了。娜尔雯又等了四十年，才离开那间地窖。她走的那天正下着雨，这次她带了伞。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_rose",
     "text": "伊奥瑞尔请娜尔雯去谈一谈“活得久的人该怎么办”。她只去了一回，回来说，上次也有人这么问过她。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_dragon",
     "text": "龙想雇娜尔雯替他数灯。她数了一个晚上，数完告诉他，数目不够。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_gate && flag.gate_key",
     "text": "门刚开了一掌宽，娜尔雯就第一个走进门缝。谁也没见她出来过，她那盏灯还留在门口。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_gate && flag.gate_forced",
     "text": "撞锤撤下来以后，娜尔雯在门槛上那道印子旁边坐了一夜。天亮才回到船上。往后她再也没碰过那本鸣声记录。"
    },
    {
     "if": "party.narwen && flag.keeper_self",
     "text": "最后留在门口的是你，不是她。娜尔雯回了塔里，每年在本子上给你空出一行，等着你托人把数带回来。"
    },
    {
     "if": "flag.narwen_custodian && !party.narwen && !flag.keeper_narwen && !flag.narwen_dead",
     "text": "娜尔雯以保管人的身份，把碎片一路押回了阿兰蒂尔塔。她在交接单上签了字，又翻到背面添了一行：“途中鸣声，另册。”"
    },
    {
     "if": "party.narwen && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
     "text": "娜尔雯数到了零。她把本子合上，说她等的原来是另一个声音。说完她问你，今天想吃点什么。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "埃塔",
   "text": [
    {
     "if": "flag.etta_left",
     "text": "埃塔离开时，连公司的印也带走了。新秘书是个人类小伙，账目记得勤，只是老写错年份。"
    },
    {
     "if": "!flag.etta_left",
     "text": "在账本的最后一页上，埃塔写下了公司的年龄：三百九十二年。下面一行是留给下一任秘书的话：“别信准时付款的人。”"
    },
    {
     "if": "!flag.etta_left && flag.report4_lie",
     "text": "那一页里还夹着最后一份报告的抄件。她在空白的地方批了两个字：“不对”。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "别摇",
   "text": [
    {
     "if": "flag.jar_sold",
     "text": "果酱罐被收进贾赫港金库，还分到了编号。账本只记有这么一只罐子，没记里面是谁。"
    },
    {
     "if": "!flag.jar_sold && flag.sign_ration",
     "text": "窗台上摆着那只果酱罐，里面插了一枝薄荷，每天有人给它浇一回水。"
    },
    {
     "if": "!flag.jar_sold && !flag.sign_ration && flag.court_signs",
     "text": "她回家去了，走的时候没有道谢。罐子留在你的桌上，盖子拧松了半圈，里面还剩着一点潮气。"
    },
    {
     "if": "!flag.jar_sold && flag.court_refused",
     "text": "她在庭上指认了你，然后就回家去了。罐子空了，标签还贴在上面，写着“别摇”两个字。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "老家",
   "text": [
    {
     "if": "origin == 'anbennar' && (flag.dove_honoured || world.dove >= 7)",
     "text": "迟来的军饷终于寄到，足额十一个月，还付了利息。信封上写着的仍是 1810 年的部队番号。"
    },
    {
     "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove <= 3 && !flag.artheta",
     "text": "你领到了一张新的退伍证，只是国名那一栏还空着。办事员说，要等上面定下来了再填。"
    },
    {
     "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove <= 3 && flag.artheta",
     "text": "补发的军饷寄到了，十一个月的，还带着利息。可汇票上的日子是破晓那一天，你一直没有拿去兑。"
    },
    {
     "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove >= 4 && world.dove <= 6",
     "text": "补发军饷的事，答复还是那四个字：“另候通知”。你把那张遣散单钉在了门背后，每年到了泪落月，就看一眼上面的日子。"
    },
    {
     "if": "origin == 'lorent' && !flag.crown_ioriel",
     "text": "女王给你写了一封亲笔信，足有三页。在最后一页上她写道：“那天朝会上的话，我后来想起来了，是我自己说的。”"
    },
    {
     "if": "origin == 'lorent' && flag.crown_ioriel",
     "text": "女王来了一封信。字迹是她的，口气却不是她的，信里管你叫“孩子”。"
    },
    {
     "if": "origin == 'lorent' && var.embassy_gap >= 2",
     "text": "使馆的档案里，你交的那几份报告薄得都能透光。参赞在封面上批了一句：“此人可用，不可信。”"
    },
    {
     "if": "origin == 'concord' && (flag.sign_ration || flag.sign_keeper)",
     "text": "镇上那笔四百金冠的账，埃塔在账本上写了“清讫”两个字。镇议会还专门表决了一回，看要不要谢你，结果是二十票对十九票，没通过。"
    },
    {
     "if": "origin == 'concord' && !flag.sign_ration && !flag.sign_keeper",
     "text": "镇上那笔四百金冠的账，如今转到了你的名下，利息还要另算。"
    },
    {
     "if": "origin == 'concord' && flag.debt_no_term && !flag.sign_ration && !flag.sign_keeper",
     "text": "好在文书上没有写年限。埃塔说，照这个写法，你大可以一直欠到下个世纪去。"
    },
    {
     "if": "origin == 'unowned' && (flag.ruling_cores || flag.ruling_both || flag.article_heads || flag.mass_awakening)",
     "text": "器材账上的十四号划掉了，改成了一个名字。埃塔落笔的时候问都没问一声。她说这一栏早就该改了。"
    },
    {
     "if": "origin == 'unowned' && !flag.ruling_cores && !flag.ruling_both && !flag.article_heads && !flag.mass_awakening",
     "text": "器材账上的十四号还在，每年折旧一成。如今已经折成了负数。埃塔说账本是不认负数的，可她到底也没把这一栏划掉。"
    },
    {
     "if": "origin == 'karshyr' && flag.spires_told",
     "text": "你的考察报告总算交上去了，光题目就改过三次。老家的港口新立了一块牌子，上面有四种文字，坎诺的那一种排在最末。"
    },
    {
     "if": "origin == 'karshyr' && !flag.spires_told",
     "text": "你的考察报告总算交上去了，光题目就改过三次。最后一版叫《一家有限责任的冒险公司，及其责任的限度》。"
    },
    {
     "if": "var.home_copies >= 3",
     "text": "你寄回家的那几份抄件，老家的人一直留着，拿绳子捆成了一摞。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "章程",
   "text": [
    {
     "if": "faction == 'shield' && world.chains <= 3",
     "text": "暗线的人送来一块匾，挂在蜡烛铺的楼梯口。上面只有“先护人”三个字，写字的是一位崖下兽人。"
    },
    {
     "if": "faction == 'shield' && world.chains >= 4",
     "text": "有人给公司送来了一块匾，上面的字是布拉亲手刻的，只有一个：“欠”。"
    },
    {
     "if": "faction == 'seal' && !flag.contract_broken && !flag.etta_left",
     "text": "公司还是老样子，三百多年里没有毁过一次约。你开出去的价钱有人认，银行的门房见了你，也还会给你倒一杯茶。"
    },
    {
     "if": "faction == 'seal' && (flag.contract_broken || flag.etta_left)",
     "text": "阿斯拉银行来了一封信，写得很短：“本行不再与迟到者公司往来。”"
    },
    {
     "if": "faction == 'lantern' && world.press >= 6",
     "text": "史家会全集的第十四卷署上了公司的名字。那是一本蓝布面的书，翻开第一页，是一张流星的计数表。"
    },
    {
     "if": "faction == 'lantern' && world.press <= 5",
     "text": "史家会全集的第十四卷是空的，书脊上只印了年份。里面该写些什么，你是知道的。"
    }
   ]
  },
  {
   "if": "is.god",
   "title": "票数",
   "text": [
    "第十二次泛神会议的票数是七比五。教廷连续写了三卷鉴定，末尾仍是这一句：“某一面相，待复核”。",
    "东坎诺的胫甲们另投了一回，把你定成“科琳的同路人”，也是七比五。",
    {
     "if": "flag.council_called",
     "text": "会议纪要的最后一句写的是：“升格者，待其身故后追认。”有人在页旁边问了一句：要是这人一直不死怎么办。这一条至今没人回答。"
    }
   ]
  },
  {
   "if": "is.god",
   "title": "果酱罐",
   "text": [
    "舱底区的摊子开始卖号称你亲手摸过的果酱罐，一金冠三个。小人国则把你的脸印在烟草罐上，可惜鼻子印大了。"
   ]
  },
  {
   "if": "is.god",
   "title": "杂项",
   "text": [
    "翻开共和国次年的预算表，能看到一个新增的支出项目，名称叫“神迹，杂项”。",
    "埃塔的账上是这么记的：“资产，神一位。折旧，无。另见：排队、楼梯、投诉。”"
   ]
  },
  {
   "if": "is.god && met.middlesday",
   "title": "不是这一位",
   "text": [
    "新醒来的机器向礼拜三打听自己的创造者。它只答了一句：“不是这一位。”",
    {
     "if": "flag.mass_awakening",
     "text": "那些醒过来的机器听完以后，有一半回去干活了。另一半就坐在码头上，等着下一个问题。"
    },
    {
     "if": "!flag.mass_awakening",
     "text": "醒着的机器并不多，也就十几台。它们听完以后，都回去干活了。"
    }
   ]
  },
  {
   "if": "is.god && (flag.throne_sat || var.cult >= 4)",
   "title": "两盏灯",
   "text": [
    "阿拉莫莱的祭司在大殿门口争论了三年。“一盏灯派”坚持灯只能为龙点，“两盏灯派”认为也该为你点上一盏。",
    "一位退了役的将军跟《泰卢姆传声报》谈了谈他对外行的看法。记者问他说的到底是谁，他说：你知道是谁？"
   ]
  },
  {
   "if": "is.immortal",
   "title": "1921 年",
   "text": [
    "泪落月又到了。按推算，彗星该在这一年重现。你带了一把椅子和一只空罐，独自上屋顶等。心里还记着四个名字。",
    "你一直数到了天亮。数出来几颗，你跟谁也没说。"
   ]
  },
  {
   "if": "is.immortal && !is.god",
   "title": "名片",
   "text": [
    "那张没有地址的名片，每隔三十年又会寄来一次。纸倒一次比一次新，印的始终是那四个字：“幸会，同道”。",
    "红衣的人也来过一回。他在门口站了一会儿，问你打算什么时候把死的手续办了。"
   ]
  }
 ]
};
