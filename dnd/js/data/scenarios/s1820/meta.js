// s1820 / meta.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const META = {
 "id": "s1820",
 "era": 1820,
 "title": "泪尽",
 "coin": "金冠",
 "startDate": "1820年卡斯坦月1日",
 "intro": [
  "灰元 1820 年卡斯坦月 1 日，有个布西拉尔的学者划着小船，从南边海上的漩涡里钻了回来。他怀里抱着几盆草，还揣着一只果酱罐。罐子里坐着个会说话的小东西，标签上写着“别摇”。",
  "彗星是十年前在天上碎掉的。如今每到泪落月的夜里，爬上屋顶还数得出二百来颗流星，只是一年比一年少。魔法靠的晶体是流星带下来的，流星一少，魔法也跟着少。共和国靠黑弹守着它的议会，法师得自己干活挣饭吃，连铸炉街的机器都要按年折旧。",
  "铸炉街有家蜡烛铺，楼上开着一家冒险公司，门口那块铜牌已经磨掉了一半。公司的章程是 1446 年立的，三百七十四年里没毁过一回约，也没发过一回财。新年这一天，你还不知道自己会走进那扇门。"
 ],
 "tracks": [
  {
   "key": "tears",
   "name": "余泪",
   "desc": "世上还剩下多少魔法。每年泪落月大家爬上屋顶数流星，数出来的那个数就是它。",
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
   "name": "界门",
   "desc": "通往别的位面的门开了多大。至于这道门归谁，要看各家手里有没有钥匙。",
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
   "name": "白鸽",
   "desc": "共和国底下的各邦还认不认“安本纳尔”这个名字。",
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
   "name": "枷锁",
   "desc": "有多少人给当成了财物，或者当成了燃料。这一条越高越糟。",
   "start": 7,
   "min": 0,
   "max": 10,
   "labels": [
    "无人为货",
    "零星残余",
    "明禁暗行",
    "照旧买卖",
    "人即燃料"
   ]
  },
  {
   "key": "press",
   "name": "见报",
   "desc": "真相有多少见了报。神说的话不算数，史家会只肯印底片、账本和证人的话。",
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
   "desc": "教廷、真言院、分形修会和披风卫。他们只有一条要求：真相得让教会头一个知道。",
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
   "desc": "公司那位不肯露名字的大股东。这一条高了倒不一定是好事，因为他会抢在你前头把事办了。",
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
   "blurb": "十年前你替共和国开过枪。今天是元旦，旧斗兽场门口贴出了埃斯玛利亚公投的日子，你在那儿站岗，看得见人群里有人攥着砖头。不等天黑，你就会丢掉这份差事。",
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
   "blurb": "新年朝会上女王发了一通火，可那嗓音听着不像她自己的。散朝以后，先后有三拨人各塞给你一张条子，要你查的是同一件事。你的行李这会儿已经装上了开往敌国首都的船。",
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
   "blurb": "镇议会欠着一家冒险公司四百金冠，一欠就是三十一年。上个月议会第二十次表决，总算全票通过了：钱不给，给人。于是你拎着藤箱下了船。随船货单的第十四行上，写着一个兽人的价钱。",
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
   "blurb": "铸炉街的自动机厂，七号线，夜班。零点的钟刚敲完，有台机器放下锤子，问了一句今天礼拜几。领班要把它报废。那台机器也许就是你，也许你是站在它旁边的那个人，一伸手就够得着厂门的钥匙。",
   "tags": [
    "车间",
    "财物",
    "头一个醒的"
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
   "blurb": "你跟着卡尔希尔的船在托拉普里亚卡卸货，海上忽然起了第二个漩涡，有个半精灵划着小船从里头钻了出来，手里举着一只罐子。那片海吞船吞了几百年，你们的船向来是绕着走的。可还没等天黑，港里的坎诺人已经管它叫“布西拉尔的发现”了。",
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
   "name": "盾条",
   "motto": "先护人，后算账。",
   "blurb": "这一条是 1446 年加上去的，加它的是个从东坎诺逃出来的铁匠。意思是接了活，先看这件事会连累多少人，再谈钱。信这一条的人，在工棚和码头上都有朋友，在银行里没有。",
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
   "name": "印条",
   "motto": "签了字的，就办到。",
   "blurb": "这一条最短。公司三百七十四年没毁过一回约，这是它唯一值钱的家当。信这一条的人，开出去的价有人肯认，银行、部里和王宫的门房都愿意给你倒杯茶。入伙的时候，公司还会另拨三十金冠。",
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
   "name": "灯条",
   "motto": "去看，回来说。",
   "blurb": "这一条是一位替史家会跑过腿的队长加的，意思是看见了什么，回来就照实说，一个字都不许添。信这一条的人，在报馆和修会里有朋友。可凡是有东西要瞒的地方，都嫌你碍事。",
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
   "blurb": "她 1810 年当上了下士，到今天还是个下士。当年她开过一回不该开的枪，那时候自己站在第几排，她到现在都记得。",
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
   "blurb": "国立魔导院的三等预言师，专管找流星雨的落点。可天上落下来的东西一年比一年少，她那个科室也就给并掉了。",
   "bio": "她叔父当过史家会的典藏主管。她进魔导院那年正赶上清洗，学的是探矿预言。后来晶体落得少了，部里就发给她一张遣散单，外加半个月的咖啡票。",
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
   "blurb": "女王的侍读。她夜里听见过女王在答话，可屋里明明没有第二个人。",
   "bio": "她是马德莱尔家旁支的小女儿，因为书念得好，给挑进宫里替女王读报。每件事她都写两份，一份交上去，一份自己留着。这回调她去敌国首都，是因为有人嫌她听得太多了。",
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
   "blurb": "阿德安的随舰祭司。他在封锁线上丢了船，倒把航海日志揣了回来。",
   "bio": "他是德冉恩的渔家出身，在军舰上念了十二年祷文。黑火药战争那会儿，他的船沉在了达梅斯海德，护船的结界破得比船板还早。如今使馆要他去弄明白，对面的子弹到底是什么做的。",
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
   "blurb": "崖下兽人，码头吊装班的头儿。镇议会三十号投票给她赎了身，三十一号就把她装上了船。",
   "bio": "她生在马利安德的甘蔗地里，十四岁那年给转卖到了码头。赎身的钱是全镇人摊的，为的是拿她去抵一笔欠了三十一年的旧债。这笔账她认，她只想知道利息归谁。",
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
   "blurb": "文森顿有个“并不存在”的局，他是那里的档案员，经手的卷宗比见过的活人还多。",
   "bio": "塔足半身人，十七岁进了特殊案件预防局抄卷宗。去年出了桩“轧棉机报人名”的怪事，上头批示销毁卷宗，他没销毁。等到镇上要选人去抵债，局长头一个提的就是他。",
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
   "blurb": "七号线上的铆接机。这一班打到第四千零一十一颗铆钉的时候，锤子停了。",
   "bio": "1811 年出厂的劳工型，右臂是一把铆枪，九年里没出过一件废品，名字就是它的工位号。新年零点它问了一句今天礼拜几。打那以后，下一锤落在哪儿就得它自己拿主意了。",
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
   "blurb": "七号线的司炉，城市地精。后院的钥匙揣在她兜里，换芯的图纸装在她脑子里。",
   "bio": "她是本城生的地精，九岁进厂，工钱一直按半班算。她偷学过奇械师换芯的手艺，所以看得出这回停机跟往常不一样，就把那台机器从后门领了出去。结果她丢了工作，手里倒多了一张卖契。",
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
   "blurb": "水术师行会的年轻会员，到坎诺来是为了写一篇讲股份公司的论文。那条船出水的时候，她正好就在码头上。",
   "bio": "她是水术师行会在册的会员，随船管淡水和风向。音叉的光里有两种颜色，坎诺人看不见，她看见了。船长要她北上查一件事，她自己还想顺便查另一件：公司到底是个什么东西。",
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
   "blurb": "卡尔希尔商船上的陆战兵，这回给游学团当护卫。他头一回见到雪，很不满意。",
   "bio": "他在盛夏群岛的航线上押了十年船，打过海盗，没吃过败仗。上头派他护送游学团，他还当是份闲差。谁知安本科斯特冷得他连皮都蜕不下来，客栈还不肯租房给他。",
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
   "blurb": "林墙兽人，1810 年在黑火药民兵里当中士，下巴换成了黄铜铰链。共和国欠着她十一个月的饷。她在公司干了八年，如今公司里还出得了外勤的只有她一个。"
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
   "blurb": "七号线的劳工型，1811 年出厂，芯核是拿 1810 年落下的晶体刻的。停机日志上记的是“周中日，二号停机”，公司账上记的是十四号器材，每年折旧一成。"
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
   "blurb": "国家三等变化师，管的是群体催生术，两个人要干一整个法师团的活。他是果农的儿子，话总是说得很满，末了再补一句“理论上”。大夫不许他喝咖啡。"
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
   "blurb": "分形修会的修女，生于 1641 年。1666 年托丽丝辞任的那天，她在门外替托丽丝举过灯，此后一百五十四年都待在地窖里，记碎片的鸣声。这回是教会派她来陪同公司的。"
  }
 },
 "quests": {
  "q_jar": {
   "title": "看罐子",
   "desc": "史家会雇了公司来看一只果酱罐。",
   "stages": [
    "史家会雇了公司来看一只果酱罐，罐子里那位不光会说话，还会记账。",
    "罐子算是“借”给了公司，出钱的是一位没露过面的合伙人。",
    "她翅膀扇出来的声音，正是音叉的那个音。她开了价。"
   ],
   "doneText": "平潮庭把她那本账念完了。"
  },
  "q_partner": {
   "title": "五成一",
   "desc": "公司有个从来不露面的大股东。",
   "stages": [
    "有位匿名的合伙人替公司出了价，他开的汇票还真兑得出钱来。",
    "你的报告发出去以后，他入了卖血那门生意的股。",
    "鱼馆里有客人说，你身上有股青铜味。",
    "他占着五成一的股，从没欠过谁一笔钱。",
    "他本人来了，而且不是飞来的。"
   ],
   "doneText": "股东名册上的那一行总算有了着落。"
  },
  "q_harvest": {
   "title": "第三催收巡回队",
   "desc": "赶在公投以前，把埃斯玛利亚的麦子催熟。",
   "stages": [
    "护送六个公务变化师和一车配给晶体，赶在公投以前把埃斯玛利亚的麦子催熟。",
    "电报上说，有四个区暂缓催熟。"
   ],
   "doneText": "收成入了库。到底入了多少，你自己心里清楚。"
  },
  "q_konwell": {
   "title": "那一声枪",
   "desc": "康威尔广场上响过一声枪。",
   "stages": [
    "康威尔广场上响过一声枪。是枪先响，还是砖头先扔出去，当时谁也说不清。",
    "礼拜三数过。"
   ],
   "doneText": "过了十四年，总算有人来问你了。"
  },
  "q_wastage": {
   "title": "“损耗”卷",
   "desc": "陆军部里有一卷 1811 年立的档案。",
   "stages": [
    "部里有一卷 1811 年立的档案，叫“损耗”，立卷人签的是个矮人的名字。",
    "早在十年前，德鲁兹纳就给十一个国家写过信。"
   ],
   "doneText": "卷号已经当众报出来了。"
  },
  "q_right_of_way": {
   "title": "路权",
   "desc": "替银团勘一条穿过东坎诺的铁路线。",
   "stages": [
    "替银团勘一条铁路线。这条线要过两个国家，一个禁机器，一个禁巫师。",
    "八个席位空着六个，铁路要从第三个和第四个中间穿过去。"
   ],
   "doneText": "队长签了字，也可能没签。"
  },
  "q_blood": {
   "title": "血账",
   "desc": "东坎诺有两个国家，都在卖法师的血。",
   "stages": [
    "两个国家都在卖法师的血，手里又各自握着对方的账。"
   ],
   "doneText": "账有了去处。"
  },
  "q_bill": {
   "title": "货单",
   "desc": "巨魔湾的一件活，有两份合同。",
   "stages": [
    "同一件活，有两份合同。",
    "清单上有二十三个人名，还有九个编号。"
   ],
   "doneText": "洇河口有两面旗。"
  },
  "q_engine": {
   "title": "不烧煤的机房",
   "desc": "文森顿城北的一座机房。",
   "stages": [
    "文森顿有座机房不烧煤，炉膛里的东西还会响。"
   ],
   "doneText": "机房的事了了。"
  },
  "q_phrase": {
   "title": "两个词",
   "desc": "碎片翻来覆去只说两个词。",
   "stages": [
    "老人要娜尔雯带上记录，到碎片原先待的地方去听一回。",
    "它翻来覆去，只说那两个词。"
   ],
   "doneText": "那两个词总算有了去处。"
  },
  "q_summit": {
   "title": "条款",
   "desc": "第二次阿兰蒂尔大峰会。",
   "stages": [
    "人人都想雇你。",
    "草约一条一条地过。"
   ],
   "doneText": "带着一份授权出了海，也可能是空着手走的。"
  },
  "q_knock": {
   "title": "敲门",
   "desc": "音叉、桅杆、漩涡。",
   "stages": [
    "音叉、桅杆、漩涡。",
    "彼岸只肯跟一家签。",
    "一扇没有把手的门。"
   ],
   "doneText": "签了一个名字。"
  },
  "q_bura": {
   "title": "十一个月的饷",
   "desc": "布拉的两笔账。",
   "stages": [
    "共和国欠着布拉十一个月的饷，另外还欠她一句“人人一样”。",
    "她弄来了四十条枪。"
   ],
   "doneText": "她的账总算结了一笔。"
  },
  "q_middlesday": {
   "title": "十四号",
   "desc": "器材账上的十四号。",
   "stages": [
    "器材账上的十四号改了埃塔的一个数，可没人叫它改。",
    "法庭要它当着大家的面上秤。"
   ],
   "doneText": "裁定书里写了它的名字。"
  },
  "q_guilhem": {
   "title": "梨林",
   "desc": "吉列姆想看一回不靠咒语长出来的收成。",
   "stages": [
    "吉列姆想看一回不靠咒语长出来的收成。",
    "有人给了他一样共和国从没给过的东西，他谢绝了。"
   ],
   "doneText": "收成看天。"
  },
  "q_narwen": {
   "title": "上回",
   "desc": "娜尔雯在等一个声音。",
   "stages": [
    "娜尔雯在等一个声音，已经等了一百五十四年。",
    "那份记录落到谁手里，票就会往哪边走。"
   ],
   "doneText": "她问出了那句话，也可能没问。"
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
   "note": "1823 年苏伦月，4 级，四个同伴都在。按圣经 12.8 的基线：名单照办、广场开了枪、头一份报告删改过。",
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
   "note": "1835 年卡斯坦月，10 级。卡拉桑尼的船，特许条款，问过别摇，音叉是买的。",
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
  "jar_snubbed": "头一回她要开盖子，你说回头再说",
  "spotted_bidders": "认出了讲堂里的买家",
  "silcalas_refused": "回绝了西尔卡拉斯的五百金冠",
  "union_card": "工会给机器发了会员证",
  "ugo_papers": "给乌戈出了保函",
  "clause_refusal": "合同里有“得拒绝违法命令”一条",
  "partner_hint_1": "看出将军问话像在估地",
  "crate_cracked": "摔裂了一箱配给晶体",
  "shared_circle": "进过催生术的圈子",
  "skiplist_obeyed": "暂缓名单怎么办的：照办",
  "skiplist_defied": "暂缓名单怎么办的：违令施术",
  "skiplist_halved": "暂缓名单怎么办的：减半施术",
  "skiplist_caught": "违令施术被部里知道了",
  "skiplist_read_out": "当众念过那封电报",
  "refusal_on_paper": "照合同书面拒绝执行",
  "crystals_lost": "夜袭里丢了一半晶体",
  "lianne_arrested": "莉安娜的下落：被捕",
  "lianne_freed": "莉安娜的下落：放走了",
  "lianne_supplied": "莉安娜的下落：给了她晶体",
  "bribed_whiterose": "收了白玫瑰王庭八十金冠",
  "purse_spent_mages": "洛伦特出身那袋钱：花在了法师身上",
  "purse_kept": "洛伦特出身那袋钱：留着没花",
  "purse_to_peargrove": "洛伦特出身那袋钱：给了梨林",
  "box_skiplist": "电报锁进了铁箱",
  "square_stood": "广场上你站哪儿：站在两拨人中间",
  "square_mages_out": "广场上你站哪儿：带法师撤出广场",
  "square_held_line": "广场上你站哪儿：守在治安军的线上",
  "volleys": "康威尔开了排枪",
  "saw_shooter_window": "看见枪烟从税关楼上出来",
  "shot_counted": "礼拜三数过：那一响在砖头之前",
  "blame_crowd": "事件报告的“起因”一栏：写的是人群",
  "blame_officer": "事件报告的“起因”一栏：写的是军官",
  "blame_unknown": "事件报告的“起因”一栏：写的是不明",
  "square_reported": "笔记交给了《康威尔通报》",
  "wastage_ref": "知道部里有一卷“损耗”",
  "heard_hum": "隔着地板听见过碎片一声",
  "report1_full": "头一份报告：写全",
  "report1_edited": "头一份报告：删改",
  "report1_lie": "头一份报告：说谎",
  "partner_knows_lie": "说谎被合伙人看穿过",
  "soil_mended": "〔神〕把一个区的土永久治好了",
  "box_turned_blue": "〔神〕把一盒黑弹变回了蓝的",
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
  "cousin_tip": "表亲指了股东名册放在哪儿",
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
  "article_ration": "黑弹条款通过了哪一份：配给",
  "article_ban": "黑弹条款通过了哪一份：禁令",
  "article_charter": "黑弹条款通过了哪一份：特许",
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
    "阿兰蒂尔塔条约。归零设了上限，每块晶体挂一张表，表上有编号、产地和下一回过秤的日子。",
    "门那边的气态晶体按份额运回来，拿彼岸认的东西换：人情、节日、真名。条约有一款写明，签约各方不得从人身上取魔法。",
    {
     "if": "flag.article_heads",
     "text": "条约第七款写得明明白白，机械人也算人头。"
    },
    {
     "if": "!flag.article_heads",
     "text": "第七款上只写了“另议”两个字，后面跟着一个委员会的名字。"
    },
    "魔法成了公用事业，撑得过这个世纪，要排队。人人签字，没人敬酒。往后是四十年的官司。",
    {
     "if": "is.god",
     "text": "份额表上有一行是留给你的，数目那一栏空着。你一回也没去领过，可配给局每年还是照样把那一行印上去。"
    }
   ]
  },
  "charter": {
   "title": "特许状",
   "subtitle": "位面，按吨",
   "art": "load_2",
   "text": [
    "海归了公司。气态晶体一船一船运回来，压成砖，码在新港的仓库里。安本科斯特的路灯再没暗过。",
    "妖精界有了自己的巨魔湾。锚地修了栈桥，桥头插着卡拉桑尼的旗。船员咳的痰是蓝的，保险行为这个另收一笔钱。",
    {
     "if": "flag.court_refused",
     "text": "彼岸到底没有签字。平潮庭散的时候，把你们这一批人记成了“先来的”，看样子那本账往后还要接着往下记。"
    },
    {
     "if": "!flag.partner_dead",
     "text": "到了 1851 年，《泰卢姆传声报》登了一篇专访，受访的是一位退了役的将军。说起当年那片海，他只给了一句话，说那不过是一笔小投资。"
    },
    {
     "if": "is.god",
     "text": "卡拉桑尼给你发了一张特许状，编号是零。你没去领，他们就把它裱了起来，挂在董事会的墙上。"
    }
   ]
  },
  "quiet": {
   "title": "静世纪",
   "subtitle": "返港，无货",
   "art": "ev_big_star_in_sky",
   "text": [
    "门关上了。往后四十年，没人再去敲。",
    "没人肯放下子弹，门也关了。魔法在 1870 年代熄掉。再没有巫师王，面包师的儿子永远可以说不。老海堤的结界一段一段失效，修堤的人换成了石匠。",
    "伊奥瑞尔一句话说到一半停了。卡斯蒂娜等了一会儿，接着把那句话说完，用的是她自己的口气。",
    {
     "if": "world.chains <= 3",
     "text": "法律把最后一批晶体留给了芯核，醒着的机器就排着队去领自己那一份，领完了照旧回去干活。"
    },
    {
     "if": "world.chains >= 4",
     "text": "机器一台接一台地躺下了。铸炉街的车间在门口摆了一张长椅，最后停在那儿的几台，脸都是朝着街的。"
    },
    {
     "if": "is.god",
     "text": "有人来求你把魔法续上，你说不行。往后几十年里，只要谁家的灯灭了，就有人往你门口放一根蜡烛。"
    }
   ]
  },
  "rose": {
   "title": "玫瑰和约",
   "subtitle": "第三次法师和平",
   "art": "ev_mages_estate",
   "text": [
    "黑弹按条约禁了。剩下的魔法交给魔杖托管会，托管会的章程写得很长，每一条都注了出处。",
    {
     "if": "flag.crown_castine",
     "text": "条约是一句一句谈出来的。洛伦特的宪法比条约还早签了一个月，女王说，先后的次序可不能乱。"
    },
    {
     "if": "flag.crown_ioriel",
     "text": "条约是靠大咒办成的。打那以后三十年没打过仗，也没有谁还记得自己当初反对过什么。"
    },
    "一场长久、整齐、世袭的和平。法师安全了，他们看得上的人也大体安全。机械人成了“魔杖的被监护人”。",
    {
     "if": "is.god",
     "text": "托管会给你留了一个席位，名牌上写的是“阁下”。你一回也没去坐过，那块名牌倒是每年都有人擦一遍。"
    }
   ]
  },
  "dragon": {
   "title": "他的帝国",
   "subtitle": "一个会回信的神",
   "art": "ev_aakhet_dragon_smug",
   "text": [
    "他签了约，回了阿拉莫莱。哈赫普拉等了四十五年的神，回家了。",
    "世界的魔法成了他的窖藏。他任性，虚荣，记仇。跟董事会不一样的是，报纸骂得动他，骂他的信他每封都回。哈赫普拉不用再等了。",
    {
     "if": "flag.struck_own_name",
     "text": "章程上你的名字给划了一道。埃塔没把它涂掉，她说账上的东西是不许涂的。"
    },
    {
     "if": "is.god",
     "text": "他每年都写一封信来，问的总是同一件事，问你到底是怎么办到的。你怎么回他都不信，信还是一年一封地来。"
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
     "text": "天界的生灵一个接一个从门缝里走了过去，谁也没有回头。门缝里塞着的那叠状子直到今天还在谈，谈判桌就摆在门槛上。"
    },
    {
     "if": "flag.gate_forced",
     "text": "采矿特许权分给了九家，股票上市头一天就翻了一倍。凡是叫红衣敲过门的人家，门框上都留着一道红粉笔印。"
    },
    "机械人大觉醒早来了五十年，是你们自己敲出来的。教会裂成两半：一半说祂回家了，一半说从来只有一扇门。",
    {
     "if": "is.god",
     "text": "门就那么开着，你没有进去。往后每年都有人来问你一回进不进，你每年答的都不一样。"
    }
   ]
  },
  "keeper": {
   "title": "守门人",
   "subtitle": "隔着钥匙孔",
   "art": "ev_priest_phantom",
   "text": [
    "隔着钥匙孔立了一份约。门不开。崩塌之城的队伍开始往前挪，一百多年里头一回。活人起誓不再点魂炉，芯核依约算人。",
    "魔法照计划一年年少下去。教会学会了少说两句。",
    {
     "if": "flag.angels_follow",
     "text": "跟着船回来的天使在新港租了一栋楼。房东问他们做的是什么营生，他们说，等。"
    },
    {
     "if": "flag.keeper_narwen",
     "text": "每年都有人从门口捎回来一页纸，上面密密麻麻全是数字，一看就是娜尔雯的字迹。"
    },
    {
     "if": "flag.keeper_self",
     "text": "公司每年往门口寄一回工钱，是按年算的，信封上写着“驻外”两个字。"
    },
    {
     "if": "is.god",
     "text": "门后头的那些声音认得你，每回一开口，总是先叫一声你的神号，然后才说别的事。"
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
     "text": "你坐下了。这一来天使有了主，魔法又从对{god}的信仰里涌了出来，怎么用也用不完。"
    },
    {
     "if": "flag.seat_sat",
     "text": "你成了那口井。这出戏里的每一口井都是一个人，这一回轮到了你，你一出屋天就暗下来，配给局只好给你挂了一块表，卡拉桑尼还递了状子，要求公平接入，公司也修了章程，添上了一位不领工钱的合伙人。"
    },
    {
     "if": "flag.seat_locked",
     "text": "你走了进去，从里面把门锁上了，外面那一侧的钥匙孔跟着就没了，碎片也彻底黑了下去。魔法照着《静世纪》上写的钟点熄掉了，可里面的人总算安全了，再也没有谁能拿他们当矿来挖。"
    },
    {
     "if": "flag.seat_locked",
     "text": "公司的人在门外等了整整三天。后来埃塔在名册上你那一行写的是：“外勤，未归。”"
    },
    {
     "if": "flag.seat_carried",
     "text": "你把那把椅子搬了出来，摆进了旧斗兽场。打那以后门就一直开着，开的正好是一把椅子那么宽。"
    },
    {
     "if": "flag.seat_carried",
     "text": "可谁来坐这把椅子，得选。一个按财产投票的共和国要选出一位神来，摄政王庭、科琳教、揭秘教都说提名权在自己手里，你倒还是神，只是没有座了。"
    },
    "第十二次泛神会议隔着传音石表决了你，票数很接近。结果写成一句公文：升格者，待其身故后追认。"
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
     "text": "1871 年泪落月，安本科斯特天文台的值夜员在簿子上写了个零，写完他又在屋顶上坐了一个钟头，临下楼才把那个零重新描了一遍，描得粗粗的。"
    },
    {
     "if": "world.tears <= 2",
     "text": "最后一位在编的法师领了退休金，在铸炉街口支了个修钟的摊子。他说这是他这辈子头一件不靠咒语办成的事，经他手修好的钟倒是走得很准。"
    },
    {
     "if": "world.tears >= 3 && world.tears <= 5",
     "text": "到了泪落月的晚上，人们还是带着毯子和野餐篮上屋顶去看流星，可数到五十几颗，孩子们就喊起冷来，大人只好收了篮子领他们下楼。"
    },
    {
     "if": "world.tears >= 3 && world.tears <= 5",
     "text": "晶价一年涨一回，好在涨得不多。公务法师照样是两个人干一整个法师团的活，大夫也照样不许他们喝咖啡。"
    },
    {
     "if": "world.tears >= 6",
     "text": "晶价跌回了 1809 年的数，魔导院贴出了招生告示，头一届收了四十个人，其中二十六个是做工人家的孩子。"
    },
    {
     "if": "world.tears >= 6 && met.guilhem",
     "text": "头一堂课是吉列姆去讲的。他说理论上谁都学得会，说完停了一下，又补了一句，说实际上也学得会。"
    }
   ]
  },
  {
   "title": "门",
   "text": [
    {
     "if": "world.doors <= 2",
     "text": "那把音叉一直没人去捞，往后四十年里，安本科斯特的路灯一盏一盏都换成了煤气的，点灯人也改了名，叫抄表员了。"
    },
    {
     "if": "world.doors <= 2 && flag.fork_sunk",
     "text": "托拉普里亚卡的港务簿上，“返港，无货”那一行一直没人去改，领航的人带船，还是绕着那片海走，跟他们的太奶奶当年一模一样。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6",
     "text": "钥匙到底归谁，都写在条约后面的附表里，那份附表比条约本身还要厚。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && flag.article_doors",
     "text": "门归了共管委员会。委员会开会的屋子在贾赫港，桌边专门有一把椅子，是留给守在门口的人的，头一年坐在那儿的是个卡尔希尔的水术师，第二年换成了诺罗的孙女。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && (flag.sign_charter || flag.client_charter)",
     "text": "门归了公司。卡拉桑尼每个季度公布一回出港的船数，过路费就印在行情牌上，跟煤价紧挨着。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && !flag.sign_charter && !flag.client_charter && flag.rector_zealot && flag.salvation_sails",
     "text": "门归了教会。教廷给每条出港的船发一张通行文书，背面还印着一段经文，船长们都拿它来垫茶杯。"
    },
    {
     "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && !flag.sign_charter && !flag.client_charter && !(flag.rector_zealot && flag.salvation_sails)",
     "text": "门归了布西拉尔。贾赫港的金库又加了一道门，频率照旧锁在里头，租给别人用，按年收钱。"
    },
    {
     "if": "world.doors >= 7",
     "text": "各家都试出了自己的频率，侏儒议会也好，北方联盟、卡拉桑尼也好，都有了，就连小人国也租了一条船。"
    },
    {
     "if": "world.doors >= 7",
     "text": "还真有人到了一颗有海的星星上。回来的人说，那儿的潮一天要涨三回，鱼是蓝的，可惜不好吃。"
    }
   ]
  },
  {
   "if": "world.dove <= 3",
   "title": "鸽子",
   "text": [
    {
     "if": "flag.artheta",
     "text": "上尉看了看怀表，又抬头看了看天。天刚蒙蒙亮，第一排的枪口就抬了起来，后来人们把这一天叫作“破晓”。"
    },
    {
     "if": "flag.artheta",
     "text": "叛乱各邦有四分之一的人改了籍。行刑名单的最后一页上有一栏是见证人，在那儿签名的人，字写得都很工整。"
    },
    {
     "if": "flag.artheta && origin == 'anbennar'",
     "text": "那一栏里也有你的名字，是马洛少校替你写上去的。他说你当时在场，这是事实。"
    },
    {
     "if": "!flag.artheta",
     "text": "鸽子死了。达梅斯海德沿岸一下子多出了六面新旗，旧斗兽场里的议会倒还照开，只是管的地方小了一半，后来人们管这件事叫“不复联合”。"
    }
   ]
  },
  {
   "if": "world.dove >= 4",
   "title": "鸽子",
   "text": [
    {
     "if": "world.dove <= 6",
     "text": "公投一年一年往后推，谁也没有开枪，谁也没有庆祝。埃斯玛利亚的麦子照样催，选票照样数，数完了就锁进柜子里。"
    },
    {
     "if": "world.dove >= 7",
     "text": "在梅尼博尔的一家酒馆里，有个弗恩人举起杯子喊了一声“自由的弗恩”，喊完四下里看了看，见没人理他，就坐下了。酒保过来给他续了一杯，没收他的钱。"
    },
    {
     "if": "world.dove >= 7 && (flag.inquiry_truth || flag.dove_honoured)",
     "text": "康威尔那一枪，调查庭的结论足足写了四页，起因那一栏是照你说的填的，底下签着三位部长的名字，后来人们把这一年叫作“鸽之日”。"
    },
    {
     "if": "world.dove >= 7 && !flag.inquiry_truth && !flag.dove_honoured",
     "text": "康威尔那一枪到头来还是没人认。好在各邦照样投了票，投完也照样留了下来，报上管这一年叫“鸽之日”，鸽子自己可不知道。"
    }
   ]
  },
  {
   "title": "货与人",
   "text": [
    {
     "if": "world.chains <= 2",
     "text": "联盟把奴隶制废了。表决那天，伊索贝尔港投票的人一直排到了码头上，队尾有个崖下兽人，排了整整一上午，轮到他了才想起来，自己根本没有票。"
    },
    {
     "if": "world.chains <= 2",
     "text": "许多年以后出了一本回忆录，书名叫《在一个下雨天》。作者署的是一个编号，编号后面跟着两个字，解放。"
    },
    {
     "if": "world.chains >= 3 && world.chains <= 5",
     "text": "奴隶换了个名字，改叫“学徒”了，心智执照要另外发，只有少数走运的拿到了那张纸，纸上得盖三个章，每五年还要换一回。"
    },
    {
     "if": "world.chains >= 6",
     "text": "文森顿的机房又盖起了第二座，第三座也已经画在图纸上了。那一带夜里亮得很，根本用不着点灯，害得住在附近的人都睡不好觉。"
    }
   ]
  },
  {
   "title": "铅字",
   "text": [
    {
     "if": "world.press <= 3",
     "text": "1838 年，德鲁兹纳的论文登在了报纸第七版，旁边挨着一则寻狗启事，标题后面本来有个问号，偏偏叫排字工给漏掉了。"
    },
    {
     "if": "world.press <= 3",
     "text": "读到这篇论文的人不多，读到了又肯信的，那就更少了。"
    },
    {
     "if": "world.press >= 4 && world.press <= 6",
     "text": "各家报纸各说各的。《论坛报》说是这么一回事，《哀恸日评论》说是另一回事，《泰卢姆传声报》干脆两样都喊，读者呢，就挑自己爱信的那一份看。"
    },
    {
     "if": "world.press >= 7",
     "text": "1838 年，德鲁兹纳的论文登了出来，标题后面带着个问号，可谁也没觉得吃惊，报童嫌这条消息不好卖，一上午都换着喊别的。"
    }
   ]
  },
  {
   "if": "flag.line_castonath || flag.line_ancardia || flag.line_none",
   "title": "东坎诺",
   "text": [
    {
     "if": "flag.line_castonath",
     "text": "卡斯托纳斯通上了煤气灯，八座塔租出去了三座，其中一座当了邮局，城门里那块铜牌旁边，也多了个卖车票的窗口。"
    },
    {
     "if": "flag.line_ancardia",
     "text": "东坎诺是坐着兵车统一起来的，安卡迪亚的登记处搬进了卡斯托纳斯的西门，法师们按月去那儿交血，队伍一直排到铜牌跟前。"
    },
    {
     "if": "flag.line_none",
     "text": "阿斯拉银行倒了。银团的股东名册上，迟到者公司那一栏写着“勘测未签”，同行们拿这件事笑话了好几年。"
    },
    {
     "if": "flag.hoard_sealed",
     "text": "雅米娜的窖藏到现在还封着。上头有三道印，钥匙分在三家手里，哪一家也不肯先拿出来。"
    },
    {
     "if": "flag.hoard_milled",
     "text": "窖藏全给磨成了子弹，可也只打了两年，就打完了。"
    },
    {
     "if": "flag.rite_given",
     "text": "伊萨受了礼，把第三席补上了。她给公司写过一封信，问账本上的那两栏如今是谁在记。"
    },
    {
     "if": "!flag.rite_given",
     "text": "第三席就这么一直空着。伊萨长大以后去学了测量，她量过的地方里头，就有那条铁路。"
    }
   ]
  },
  {
   "if": "flag.crown_castine || flag.crown_ioriel || flag.crown_off",
   "title": "洛伦特",
   "text": [
    {
     "if": "flag.crown_castine",
     "text": "卡斯蒂娜颁布了宪法。王冠她倒是还戴着，可如今在朝会上，她一句话能从头说到尾，用的都是同一副口气。"
    },
    {
     "if": "flag.crown_ioriel",
     "text": "洛伦特成了帝国。诏书写得很好看，用的全是十一世纪的套话，女王签完字，盯着自己的笔迹看了很久。"
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
     "text": "阿兰蒂尔塔的地窖开了门。排队看碎片的人绕着塔排了三圈，看完出来的，一半说那是菱形，另一半说是方块。"
    },
    {
     "if": "flag.rector_zealot",
     "text": "教廷造了一条船，起名叫“得救”。这条船出过两回港，每回回来的时候，甲板上的人都比走的时候少。"
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
     "text": "巡回法庭一纸裁定管了两样事，醒着的芯核算人，戴镣的也算人，联盟差一点为这个散了伙，表决前前后后拖了九个月，最后只多出一票。"
    },
    {
     "if": "flag.ruling_cores",
     "text": "机器算人了。甘蔗地里戴镣的那些却还不算，这个消息他们还是从一台轧棉机嘴里听来的。"
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
     "text": "卡尔希尔成了一个共和国，门口站的是他们自己的人。尖碑底下立了块牌子，用几种文字写着同一句话：“先问，再进。”"
    },
    {
     "if": "flag.spires_sold",
     "text": "尖碑卖给了出价最高的那一家，卡尔希尔的海关每个月能收到一笔过路费，数目是印在报上的，说小不算小，可也不够用。"
    },
    {
     "if": "flag.spires_kept",
     "text": "尖碑的事，到头来谁也没往外说。一到雨季的夜里，它们还是那个颜色，渔民也还是绕着走，跟从前一样。"
    },
    {
     "if": "flag.pilots_paid",
     "text": "阿迪诺诺西的半身人拿到了领航权。诺罗的账上记着那片海欠她七条船，这一回她划掉了一条。"
    },
    {
     "if": "!flag.pilots_paid",
     "text": "领航的活给了布西拉尔的人。诺罗还在棚子里烤她的芭蕉，只是见了坎诺的船，一句话也不肯说。"
    }
   ]
  },
  {
   "if": "flag.partner_known && !flag.sign_dragon",
   "title": "五成一",
   "text": [
    {
     "if": "flag.partner_dead",
     "text": "阿拉莫莱的灯还点着，一万盏，每天黄昏都点。谁也没去告诉他们，那一位已经沉在根那头的海里了。"
    },
    {
     "if": "!flag.partner_dead && flag.partner_to_hakhepra",
     "text": "他回了家，一进门就嫌宫殿修得小。贾内比萨辞掉了大统帅的职务，去鲁本奈尔大学教军事史，头一课讲的就是萨拉哈德那一仗。"
    },
    {
     "if": "!flag.partner_dead && !flag.partner_to_hakhepra && (flag.partner_bought_out || flag.partner_voted_out)",
     "text": "埃塔用红墨水把股东名册上那一行划掉了。五成一的股份一笔一笔结得清清楚楚，他一个子儿也没少要，可也没多要。"
    },
    {
     "if": "!flag.partner_dead && !flag.partner_to_hakhepra && !flag.partner_bought_out && !flag.partner_voted_out",
     "text": "1851 年，一位退了役的将军在《泰卢姆传声报》上谈起了当年的事，他说那不过是一笔小投资，又说萨拉哈德那一仗打了个平手。"
    },
    {
     "if": "flag.partner_goes_home",
     "text": "有人说，那天在妖精界的海上，看见一对青铜翅膀掉过头往南飞走了，左边那只扇得还慢一点。"
    }
   ]
  },
  {
   "title": "七号线",
   "text": [
    {
     "if": "!flag.mass_awakening",
     "text": "在七号线上，七八三还在拧它的阀门，一秒钟拧一圈。要等到 1870 年代的某个下雨天，它才会把头抬起来。"
    },
    {
     "if": "flag.mass_awakening",
     "text": "所有的芯核在同一个夜里醒了过来，七八三醒的那天正好是礼拜三，它开口问的头一句话，是今天礼拜几。领班告诉了它，然后转身去找报废单，没找着。"
    }
   ]
  },
  {
   "if": "met.bura && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "布拉",
   "text": [
    {
     "if": "flag.bura_alone && world.chains >= 6",
     "text": "布拉没有回来。马利安德奴隶区的后墙上留着一排弹孔，一共四十个，跟她弄来的枪正好一样多。"
    },
    {
     "if": "!flag.bura_alone && !party.bura",
     "text": "布拉后来不在队里了。可埃塔的账上她那一栏一直没划掉，欠饷十一个月，利息也照样记着。"
    },
    {
     "if": "flag.bura_alone && world.chains <= 5",
     "text": "布拉是一个人去的，也是一个人回来的，她再没进过公司的门，只是每年泪落月都托人给埃塔捎一句话，说人还活着，饷还欠着。"
    },
    {
     "if": "party.bura && flag.sign_ration",
     "text": "布拉总算领到了补发的军饷，十一个月的，还带着利息。她拿这笔钱在铸炉街开了一家铺子，专给老兵装假肢，黄铜做的，价钱也公道。"
    },
    {
     "if": "party.bura && flag.sign_charter",
     "text": "布拉给公司的船当了护卫长。六十岁那年，她死在一片没有名字的海上，船上的人把她下巴上的铰链带了回来。"
    },
    {
     "if": "party.bura && flag.sign_quiet",
     "text": "布拉回了林木之墙，教小兽人认字。头一课教他们写的是“饷”，第二课是“人人一样”。"
    },
    {
     "if": "party.bura && flag.sign_rose",
     "text": "和约是法师定的，布拉不肯在这样的和约底下领饷。她就这么走了，连个地址也没留。"
    },
    {
     "if": "party.bura && flag.sign_dragon",
     "text": "布拉辞了职。临走之前，她从铰链上拧下一颗螺丝，放在埃塔的桌上，什么话也没说。"
    },
    {
     "if": "party.bura && flag.sign_gate && flag.gate_key",
     "text": "门开的那一夜，布拉在门口站了一整夜的岗。天亮的时候她说，前头没有卡子了。"
    },
    {
     "if": "party.bura && flag.sign_gate && flag.gate_forced",
     "text": "红衣的人出来以后，布拉就带着暗线上的人东躲西藏。她说她这辈子躲过兵，也躲过债主，真没想到还得躲账房。"
    },
    {
     "if": "party.bura && flag.sign_keeper",
     "text": "每年一到泪落月，布拉就拎上一瓶酒到码头去，朝着南边放一枪。"
    },
    {
     "if": "party.bura && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
     "text": "布拉每年给你写一封信，抬头写的是你的名字，从来不写神号。信里只说一件事，就是今年还有谁的饷欠着没发。"
    }
   ]
  },
  {
   "if": "met.middlesday && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "礼拜三",
   "text": [
    {
     "if": "flag.m_left",
     "text": "礼拜三回了铸炉街，还领了头一回停工。它那张工会会员证上，出生地一栏填的是七号线。"
    },
    {
     "if": "!party.middlesday && !flag.m_left && !flag.m_dormant",
     "text": "礼拜三后来不在队里了。器材账上的十四号倒还留着，埃塔每年都在旁边记上一笔，写的是“下落待查”。"
    },
    {
     "if": "flag.m_dormant && !flag.m_rewoken",
     "text": "礼拜三还在公司的名单上，它的箱子搁在埃塔办公室的角落里，上面盖着一块帆布，每到礼拜三，总有人去掸一回灰。"
    },
    {
     "if": "flag.m_rewoken && party.middlesday",
     "text": "礼拜三是醒了，可它已经不记得你了，你只好重新做了一回自我介绍，它听完说：“（礼貌。）幸会。（陈述。）你的左手在摸口袋。”"
    },
    {
     "if": "party.middlesday && flag.sign_ration && flag.article_heads",
     "text": "条约第七款写明了机械人算人头，礼拜三头一个跑去登记，姓名那一栏它写得很长，办事员只好给它加了一页纸。"
    },
    {
     "if": "party.middlesday && flag.sign_ration && !flag.article_heads",
     "text": "条约第七款写的是“另议”。礼拜三就坐在旁听席上数着，前前后后另议了十一回，每一回它都记了下来。"
    },
    {
     "if": "party.middlesday && flag.sign_charter",
     "text": "礼拜三把自己的卖契买了下来。剩下的钱，它又拿去买别人的卖契。"
    },
    {
     "if": "party.middlesday && flag.sign_quiet && world.chains <= 3",
     "text": "法律把最后一批晶体留给了芯核，礼拜三也就一直活到了下一个世纪。它说它数过，账上的折旧早就折完了。"
    },
    {
     "if": "party.middlesday && flag.sign_quiet && world.chains >= 4",
     "text": "礼拜三把同类一台一台地送走了。后来它自己停在了新港码头的一张长椅上，脸朝着海，账上记的是“停机，原因已知”。"
    },
    {
     "if": "party.middlesday && flag.sign_rose",
     "text": "礼拜三成了“魔杖的被监护人”，每个礼拜三它都得去领一次许可，日子一长，窗口里的人都用不着问它叫什么了。"
    },
    {
     "if": "party.middlesday && flag.sign_dragon",
     "text": "龙的库房里正缺一个谁也收买不了的管账的，礼拜三就去了。它说，它去是为了盯着。"
    },
    {
     "if": "party.middlesday && flag.sign_gate",
     "text": "所有的芯核都醒了以后，“我是谁”这个问题，被问得最多的就是礼拜三，它每一回都答，只是每一回的答案都不大一样。"
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
     "text": "吉列姆留在了卡斯托纳斯，教那个洪裔女孩，后来又添了三个学生。他的头发已经全白了，学生们从来没见过他头发不白的样子。"
    },
    {
     "if": "!flag.guilhem_stayed && !party.guilhem",
     "text": "吉列姆后来不在队里了。梨林的果园每年秋天都给公司寄来一筐梨，寄件人那一栏只写着三个字，“理论上”。"
    },
    {
     "if": "party.guilhem && flag.sign_ration",
     "text": "吉列姆当上了配给局的头一任总稽核。这份差事他恨得要命，偏偏又干得很好，每一张表他都是念出声来填的。"
    },
    {
     "if": "party.guilhem && flag.sign_charter",
     "text": "公司给了吉列姆一间实验室，气态晶体随他用，怎么用都用不完，可他一个学生也没教出来，因为再也没有人用得着学了。"
    },
    {
     "if": "party.guilhem && flag.sign_quiet",
     "text": "吉列姆回梨林种梨去了。那一年的收成全得看天，好在老天还算给面子。"
    },
    {
     "if": "party.guilhem && flag.sign_rose",
     "text": "吉列姆进了魔杖托管会。头一回有人叫他“阁下”的时候，他没有去纠正。"
    },
    {
     "if": "party.guilhem && flag.sign_dragon",
     "text": "龙请吉列姆去阿拉莫莱教书。他的回信上只有三个字，外加一个条例编号。"
    },
    {
     "if": "party.guilhem && flag.sign_gate",
     "text": "魔法野了整整一季。吉列姆在地里站了三天，记满了四本笔记，第五本还空着，他说留到明年再用。"
    },
    {
     "if": "party.guilhem && flag.sign_keeper",
     "text": "魔法照着计划一年比一年少。吉列姆索性把《催生术要则》改成了一本农书，第一章讲的是怎么看天。"
    },
    {
     "if": "party.guilhem && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
     "text": "吉列姆算过，你一共让多少个法师丢了饭碗。他把那个数抄在本子的第一页上，又在下面添了一句：“理论上我也是其中之一。”"
    }
   ]
  },
  {
   "if": "met.narwen && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "娜尔雯",
   "text": [
    {
     "if": "flag.narwen_dead",
     "text": "门口多了一盏灯。修会的名册上，她那一行写着生卒年，两个数中间隔了将近两百年。"
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
     "text": "教廷把鸣声记录的版权卖掉了。娜尔雯就退出了修会，到史家会去当抄写员，如今她抄的都是别人的记录。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_quiet",
     "text": "碎片不响了。娜尔雯又等了四十年，才离开那间地窖，她走的那天正下着雨，这一回她带了伞。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_rose",
     "text": "伊奥瑞尔请娜尔雯去谈一谈“活得久的人该怎么办”。她只去了一回，回来说，上回也有人这么问过她。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_dragon",
     "text": "龙想雇娜尔雯替他数灯。她数了一个晚上，数完告诉他，数目不够。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_gate && flag.gate_key",
     "text": "门刚开了一掌宽，娜尔雯就头一个走进了门缝。谁也没见她出来过，只有她那盏灯还留在门口。"
    },
    {
     "if": "party.narwen && !flag.keeper_narwen && flag.sign_gate && flag.gate_forced",
     "text": "撞锤撤下来以后，娜尔雯在门槛上那道印子旁边坐了一夜，天亮了她才回到船上，往后再也没碰过那本鸣声记录。"
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
     "text": "娜尔雯数到了零。她把本子合上，说她等的原来是另一个声音，说完就问你，今天想吃点什么。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "埃塔",
   "text": [
    {
     "if": "flag.etta_left",
     "text": "埃塔走了，把公司的印也带走了。新来的秘书是个人类小伙子，记账倒是很勤快，就是年份老写错。"
    },
    {
     "if": "!flag.etta_left",
     "text": "在账本的最后一页上，埃塔写下了公司的年龄，三百九十二年。下面一行是留给下一任秘书的话：“别信准时付款的人。”"
    },
    {
     "if": "!flag.etta_left && flag.report4_lie",
     "text": "那一页里还夹着最后一份报告的抄件，她在空白的地方批了两个字，“不对”。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "别摇",
   "text": [
    {
     "if": "flag.jar_sold",
     "text": "罐子如今放在贾赫港的金库里，编了号。至于里面装的是什么，账上没写。"
    },
    {
     "if": "!flag.jar_sold && flag.sign_ration",
     "text": "窗台上摆着那只果酱罐，里面插了一枝薄荷，每天有人给它浇一回水。"
    },
    {
     "if": "!flag.jar_sold && !flag.sign_ration && flag.court_signs",
     "text": "她回家去了，走的时候连声谢也没说。罐子就留在你的桌上，盖子拧松了半圈，里面还剩着一点潮气。"
    },
    {
     "if": "!flag.jar_sold && flag.court_refused",
     "text": "她在庭上指认了你，然后就回家去了。罐子已经空了，标签倒还贴在上面，写着“别摇”两个字。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "老家",
   "text": [
    {
     "if": "origin == 'anbennar' && (flag.dove_honoured || world.dove >= 7)",
     "text": "补发的军饷总算寄到了，十一个月的，还带着利息。信封上写的番号，还是 1810 年的那一个。"
    },
    {
     "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove <= 3 && !flag.artheta",
     "text": "你领到了一张新的退伍证，只是国名那一栏还空着，办事员说，要等上头定下来了再填。"
    },
    {
     "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove <= 3 && flag.artheta",
     "text": "补发的军饷寄到了，十一个月的，还带着利息。可汇票上的日子偏偏是破晓那一天，你一直没有拿去兑。"
    },
    {
     "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove >= 4 && world.dove <= 6",
     "text": "补发的军饷还是那四个字，“另候通知”，你把那张遣散单钉在了门背后，每年到了泪落月，就看一眼上面的日子。"
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
     "text": "镇上那笔四百金冠的账，埃塔在账本上写了“清讫”两个字，镇议会还专门表决了一回，看要不要谢你，结果是二十票对十九票，没通过。"
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
     "text": "器材账上的十四号划掉了，改成了一个名字。埃塔落笔的时候问都没问一声，她说这一栏早就该改了。"
    },
    {
     "if": "origin == 'unowned' && !flag.ruling_cores && !flag.ruling_both && !flag.article_heads && !flag.mass_awakening",
     "text": "器材账上的十四号还在，每年折旧一成，如今已经折成负数了，埃塔说账本是不认负数的，可她到底也没把这一栏划掉。"
    },
    {
     "if": "origin == 'karshyr' && flag.spires_told",
     "text": "你的考察报告总算交上去了，光题目就改过三次。老家的港口新立了一块牌子，上面用了四种文字，坎诺的那一种排在最末。"
    },
    {
     "if": "origin == 'karshyr' && !flag.spires_told",
     "text": "你的考察报告总算交上去了，光题目就改过三次，最后一版叫《一家有限责任的冒险公司，及其责任的限度》。"
    },
    {
     "if": "var.home_copies >= 3",
     "text": "你寄回家的那几份抄件，老家的人一直留着没扔，还拿绳子捆成了一摞。"
    }
   ]
  },
  {
   "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
   "title": "章程",
   "text": [
    {
     "if": "faction == 'shield' && world.chains <= 3",
     "text": "暗线上的人给公司送来了一块匾，如今挂在蜡烛铺的楼梯口。匾上的字是一个崖下兽人写的，就三个字，“先护人”。"
    },
    {
     "if": "faction == 'shield' && world.chains >= 4",
     "text": "有人给公司送来了一块匾，上面的字是布拉亲手刻的，只有一个，“欠”。"
    },
    {
     "if": "faction == 'seal' && !flag.contract_broken && !flag.etta_left",
     "text": "公司还是老样子，三百多年里没有毁过一回约，你开出去的价钱有人认，就连银行的门房见了你，也还会给你倒一杯茶。"
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
    "第十二次泛神会议的结果是七比五。教廷那份鉴定出到第三卷，结论是“某一面相，待复核”。",
    "东坎诺的胫甲们另投了一回，把你定成“科琳的同路人”，也是七比五。",
    {
     "if": "flag.council_called",
     "text": "会议纪要的最后一句是这么写的：“升格者，待其身故后追认。”有人在页边上问了一句，要是这人一直不身故怎么办，这一条至今没人回答。"
    }
   ]
  },
  {
   "if": "is.god",
   "title": "果酱罐",
   "text": [
    "舱底区有人在卖你“亲手摸过”的果酱罐，一个金冠能买三只。小人国还把你印在了烟草罐上，可惜印得不大像，鼻子印大了。"
   ]
  },
  {
   "if": "is.god",
   "title": "杂项",
   "text": [
    "共和国下一年的预算里多出了一行，写的是“神迹，杂项”。",
    "埃塔的账上是这么记的：“资产，神一位。折旧，无。另见：排队、楼梯、投诉。”"
   ]
  },
  {
   "if": "is.god && met.middlesday",
   "title": "不是这一位",
   "text": [
    "礼拜三告诉醒过来的机器，是谁造了它们。它答的是：不是这一位。",
    {
     "if": "flag.mass_awakening",
     "text": "它们听完以后，有一半回去干活了，另一半就坐在码头上，等着下一个问题。"
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
    "阿拉莫莱的祭司分成了两派，一派叫“一盏灯派”，一派叫“两盏灯派”，在大殿门口足足吵了三年。",
    "一位退了役的将军跟《泰卢姆传声报》谈了谈他对外行的看法。记者问他说的到底是谁，他说，你知道是谁。"
   ]
  },
  {
   "if": "is.immortal",
   "title": "1921 年",
   "text": [
    "又到了泪落月，照理说彗星该在这一年再来一回，你一个人上了屋顶，带着一把椅子、一只空罐子，还有四个名字。",
    "你一直数到了天亮。至于数出来几颗，你跟谁也没说。"
   ]
  },
  {
   "if": "is.immortal && !is.god",
   "title": "名片",
   "text": [
    "每隔三十年，那张没有地址的名片就会再寄来一回，纸一回比一回新，上面印的还是那四个字，“幸会，同道”。",
    "红衣的人也来过一回。他在门口站了一会儿，问你打算什么时候把手续办了。"
   ]
  }
 ]
};
