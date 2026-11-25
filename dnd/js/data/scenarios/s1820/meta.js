// s1820《泪尽》剧本定义（除场景和图鉴以外的全部字段）。由统稿按 BIBLE.md 第 4—10、12—14、16 节整理。
// 场景在 prologues_a/b.js、act1—4.js、finale.js；图鉴在 codex.js；专用敌人和物品在 enemies.js / items.js。
export const META = {
  "id": "s1820",
  "era": 1820,
  "title": "泪尽",
  "coin": "金冠",
  "startDate": "1820年卡斯坦月1日",
  "intro": [
    "灰元 1820 年卡斯坦月 1 日，一个布西拉尔学者从南边海上的漩涡里划了回来。他怀里抱着几盆草，还有一只果酱罐。罐子里坐着个会说话的小东西，标签上写着“别摇”。",
    "彗星十年前碎在了天上。泪落月的夜里，屋顶上的人还数得出二百来颗流星，一年比一年少。共和国拿黑弹守着它的议会，法师得干活挣饭吃，铸炉街的机器按年折旧。",
    "铸炉街蜡烛铺楼上有一家冒险公司。铜牌磨掉了一半，章程是 1446 年立的，三百七十四年没毁过一回约，也没发过财。新年这天，你还不知道自己会进那扇门。"
  ],
  "tracks": [
    {
      "key": "tears",
      "name": "余泪",
      "desc": "世上还剩多少魔法。每年泪落月上屋顶数流星，数出来的就是它。",
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
      "desc": "位面开了多大的缝。归谁，另看各家手里的钥匙。",
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
      "desc": "共和国各邦还认不认“安本纳尔”这个名字。",
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
      "desc": "有多少人被当成财物或者燃料。越高越糟。",
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
      "desc": "世人知道了多少。神说的话不算数，史家会只印底片、账本和证人。",
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
      "desc": "男爵派政府、陆军部、治安军、国立魔导院。看重守秩序，别上报纸。",
      "start": 0
    },
    {
      "key": "wand",
      "name": "王冠与魔杖",
      "desc": "洛伦特宫廷和王冠里的那位、白玫瑰王庭、被清洗的蓝血法师、魔法领地。看重规矩和体面。",
      "start": 0
    },
    {
      "key": "charter",
      "name": "特许商",
      "desc": "卡拉桑尼、阿斯拉银行、北方联盟的巨商、种植园财团、布西拉尔的金库。看重合同和回报。",
      "start": 0
    },
    {
      "key": "church",
      "name": "揭秘教会",
      "desc": "教廷、真言院、分形修会、披风卫。看重真相归教会先知道。",
      "start": 0
    },
    {
      "key": "union",
      "name": "互助社",
      "desc": "法德伦的工会、筑路工棚、巨魔湾的暗线和废奴派、醒过来的机器。看重你站哪一边，还有工钱。",
      "start": 0
    },
    {
      "key": "south",
      "name": "南岸",
      "desc": "卡尔希尔和水术师行会、阿迪诺诺西的领航员、哈赫普拉的祭司。门开在他们的海上，他们看重有没有人问过。",
      "start": 0
    },
    {
      "key": "partner",
      "name": "合伙人",
      "desc": "公司的匿名大股东。高了不一定是好事：他会抢在你前头办事。",
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
      "blurb": "十年前你替共和国开过枪。今天元旦，旧斗兽场门口贴出了埃斯玛利亚的公投日子。你站岗，人群里有人攥着砖头。天黑以前你会丢掉这份差事。",
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
      "blurb": "新年朝会上女王发了火，嗓音不像她自己的。散朝以后，三拨人各塞给你一张条子，要你查同一件事。你的行李已经装上了去敌国首都的船。",
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
      "blurb": "镇议会欠一家冒险公司四百金冠，欠了三十一年。上个月第二十次表决，全票通过：不给钱，给人。你拎着藤箱下船，随船货单的第十四行写着一个兽人的价钱。",
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
      "blurb": "铸炉街自动机厂，七号线，夜班。零点的钟敲完，有一台机器放下了锤子，问今天礼拜几。领班要报废它。那台机器也许就是你，也许你是站在它旁边、够得着厂门钥匙的那个人。",
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
      "blurb": "你跟着卡尔希尔的船在托拉普里亚卡卸货。海上起了第二个漩涡，一个半精灵划着小船钻出来，举着一只罐子。那片海吞船吞了几百年，你们的船一向绕着走。天黑以前，港里的坎诺人已经管它叫“布西拉尔的发现”了。",
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
      "blurb": "这一条是 1446 年加的。加它的是个从东坎诺逃出来的铁匠：接了活，先数数雇主身后站着多少人。信它的人，工棚和码头上有朋友，银行里没有。",
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
      "blurb": "这一条最短。公司三百七十四年没毁过一回约，这是它唯一值钱的家当。信它的人开出去的价有人认，银行、部里和王宫的门房都肯给你倒杯茶。入伙时公司另拨三十金冠。",
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
      "blurb": "这一条是替史家会跑过腿的一位队长加的：看见什么，回来照实说，一个字不许添。信它的人在报馆和修会里有朋友，凡是有东西要瞒的地方都嫌你碍事。",
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
      "blurb": "1810 年当的下士，到今天还是下士。开过一回不该开的枪，至今记得自己站在第几排。",
      "bio": "舱底区生人，十六岁扛枪打皇帝，右膝换成了黄铜的。十年里只升过一级，补发的军饷还欠着。她信共和国，共和国不大信她。",
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
      "blurb": "国立魔导院三等预言师，专管找流星雨的落点。天上落下来的一年比一年少，她的科室并掉了。",
      "bio": "叔父当过史家会的典藏主管。她进魔导院那年赶上清洗，学的是探矿预言。晶体落得少了，部里发给她一张遣散单和半个月的咖啡票。",
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
      "blurb": "女王的侍读。夜里听见过女王在答话，屋里没有第二个人。",
      "bio": "马德莱尔家旁支的小女儿，书念得好，被挑进宫给女王读报。她每件事都写两份，一份交上去，一份自己留着。调去敌国首都，是有人嫌她听得太多。",
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
      "blurb": "阿德安的随舰祭司。在封锁线上丢了船，把航海日志揣了回来。",
      "bio": "德冉恩渔家出身，在军舰上念了十二年祷文。黑火药战争里他的船沉在达梅斯海德，结界比船板先破。使馆要他弄明白对面的子弹是什么做的。",
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
      "blurb": "崖下兽人，码头吊装班的头。镇议会三十号投票给她赎了身，三十一号就把她装上了船。",
      "bio": "生在马利安德的甘蔗地，十四岁被转卖到码头。赎身的钱是全镇摊的，为的是拿她去抵一笔三十一年的旧债。这笔账她认，只想知道利息归谁。",
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
      "blurb": "文森顿一个“并不存在”的局里的档案员。他经手的卷宗比他见过的活人多。",
      "bio": "塔足半身人，十七岁进特殊案件预防局抄卷宗。去年有桩“轧棉机报人名”的怪事，批示销毁，他没销毁。镇上选人抵债，局长头一个提了他。",
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
      "blurb": "七号线的铆接机。这一班打到第四千零一十一颗铆钉，锤子停了。",
      "bio": "1811 年出厂，劳工型，右臂是铆枪，九年没出过废品。新年零点它问了一句今天礼拜几，往后下一锤落在哪儿得自己定。名字是工位号。",
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
      "blurb": "七号线的司炉，城市地精。后院的钥匙在她兜里，换芯的图纸在她脑子里。",
      "bio": "本城生的地精，九岁进厂，工钱按半班算。她偷学过奇械师换芯的手艺，看得出这回停机不一样。她把那台机器领出后门，丢了工作，多了一张卖契。",
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
      "blurb": "水术师行会的年轻会员，来坎诺写一篇讲股份公司的论文。那条船出水的时候，她就在码头上。",
      "bio": "水术师行会在册，随船管淡水和风向。她看见音叉的光里有两种坎诺人看不见的颜色。船长要她北上查一件事，她顺便想查另一件：公司是个什么东西。",
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
      "blurb": "卡尔希尔商船上的陆战兵，游学团的护卫。头一回见到雪，很不满意。",
      "bio": "在盛夏群岛的航线上押了十年船，打过海盗，没吃过败仗。上头派他护送游学团，他当是闲差。安本科斯特冷得他蜕不下皮，客栈还不肯租给他。",
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
      "blurb": "林墙兽人，1810 年黑火药民兵的中士，下巴换成了黄铜铰链。共和国欠她十一个月的饷，她在公司干了八年，是公司里唯一还出得了外勤的人。"
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
      "blurb": "七号线的劳工型，1811 年出厂，芯核是 1810 年落下的晶体刻的。停机日志上记着“周中日，二号停机”。公司账上：十四号器材，每年折旧一成。"
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
      "blurb": "国家三等变化师，管群体催生术，两个人干一个法师团的活。果农的儿子，话说得很满，然后补一句“理论上”。大夫不许他喝咖啡。"
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
      "blurb": "分形修会的修女，1641 年生。1666 年托丽丝辞任那天，她在门外替她举过灯。此后一百五十四年在地窖里记碎片的鸣声。教会派她来陪同公司。"
    }
  },
  "quests": {
    "q_jar": {
      "title": "看罐子",
      "desc": "史家会雇公司看一只果酱罐。",
      "stages": [
        "史家会雇公司看一只果酱罐。罐子里那位会说话，还会记账。",
        "罐子“借”给了公司，出钱的是一位没露面的合伙人。",
        "她的翅音就是音叉的那个音。她开了价。"
      ],
      "doneText": "平潮庭念完了她那本账。"
    },
    "q_partner": {
      "title": "五成一",
      "desc": "公司有个从不露面的大股东。",
      "stages": [
        "有位匿名合伙人替公司出了价，汇票兑得出来。",
        "你的报告发出后，他入了血的股。",
        "鱼馆里的客人说你身上有青铜味。",
        "他占五成一，从没欠过一笔钱。",
        "他本人来了，没用飞的。"
      ],
      "doneText": "股东名册上那一行有了着落。"
    },
    "q_harvest": {
      "title": "第三催收巡回队",
      "desc": "赶在公投前把埃斯玛利亚的麦子催出来。",
      "stages": [
        "护送六个公务变化师和一车配给晶体，赶在公投前把埃斯玛利亚的麦子催出来。",
        "电报：四个区暂缓。"
      ],
      "doneText": "收成入了库，数目你自己清楚。"
    },
    "q_konwell": {
      "title": "那一声枪",
      "desc": "康威尔广场上的一声枪响。",
      "stages": [
        "康威尔广场上有一声枪响。在砖头前面还是后面，当时没人说得清。",
        "礼拜三数过。"
      ],
      "doneText": "十四年后总算有人问了你。"
    },
    "q_wastage": {
      "title": "“损耗”卷",
      "desc": "陆军部里有一卷 1811 年立的档案。",
      "stages": [
        "部里有一卷 1811 年立的“损耗”，立卷人是个矮人名字。",
        "德鲁兹纳十年前就给十一个国家写过信。"
      ],
      "doneText": "卷号当众报了出来。"
    },
    "q_right_of_way": {
      "title": "路权",
      "desc": "替银团勘一条穿过东坎诺的铁路。",
      "stages": [
        "替银团勘一条线。线上两个国家，一个禁机器，一个禁巫师。",
        "八个席位空着六个，铁路要从第三个和第四个中间穿过去。"
      ],
      "doneText": "队长签了字。或者没签。"
    },
    "q_blood": {
      "title": "血账",
      "desc": "东坎诺两个国家都在卖法师的血。",
      "stages": [
        "两个国家都在卖法师的血，各自握着对方的账。"
      ],
      "doneText": "账有了去处。"
    },
    "q_bill": {
      "title": "货单",
      "desc": "巨魔湾的一件活，两份合同。",
      "stages": [
        "一件活，两份合同。",
        "清单上二十三个人名，九个编号。"
      ],
      "doneText": "洇河口，两面旗。"
    },
    "q_engine": {
      "title": "不烧煤的机房",
      "desc": "文森顿城北的一座机房。",
      "stages": [
        "文森顿有座机房不烧煤，炉膛里的东西会响。"
      ],
      "doneText": "机房的事了了。"
    },
    "q_phrase": {
      "title": "两个词",
      "desc": "碎片反复只说两个词。",
      "stages": [
        "老人要娜尔雯把记录带到碎片原来待的地方，听一回。",
        "它反复只说两个词。"
      ],
      "doneText": "那两个词有了去处。"
    },
    "q_summit": {
      "title": "条款",
      "desc": "第二次阿兰蒂尔大峰会。",
      "stages": [
        "人人都想雇你。",
        "草约一条一条过。"
      ],
      "doneText": "带着一份授权出了海。或者空着手。"
    },
    "q_knock": {
      "title": "敲门",
      "desc": "音叉、桅杆、漩涡。",
      "stages": [
        "音叉、桅杆、漩涡。",
        "彼岸只跟一家签。",
        "一扇没有把手的门。"
      ],
      "doneText": "签了一个名字。"
    },
    "q_bura": {
      "title": "十一个月的饷",
      "desc": "布拉的两笔账。",
      "stages": [
        "共和国欠布拉十一个月的饷，外加一句“人人一样”。",
        "她弄来了四十条枪。"
      ],
      "doneText": "她的账结了一笔。"
    },
    "q_middlesday": {
      "title": "十四号",
      "desc": "器材账上的十四号。",
      "stages": [
        "器材账上的十四号改了埃塔的一个数。没人让它改。",
        "法庭要它当庭上秤。"
      ],
      "doneText": "裁定里有它的名字。"
    },
    "q_guilhem": {
      "title": "梨林",
      "desc": "吉列姆想看一回不靠咒语的收成。",
      "stages": [
        "吉列姆想看一回不靠咒语的收成。",
        "有人给了他共和国从没给过的东西。他谢绝了。"
      ],
      "doneText": "收成看天。"
    },
    "q_narwen": {
      "title": "上回",
      "desc": "娜尔雯等一个声音。",
      "stages": [
        "娜尔雯等一个声音，等了一百五十四年。",
        "那份记录落到谁手里，票就往哪边走。"
      ],
      "doneText": "她问了那句话。或者没问。"
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
          "text": "第七款：机械人算人头。"
        },
        {
          "if": "!flag.article_heads",
          "text": "第七款写着“另议”，后面跟着一个委员会的名字。"
        },
        "魔法成了公用事业，撑得过这个世纪，要排队。人人签字，没人敬酒。往后是四十年的官司。",
        {
          "if": "is.god",
          "text": "份额表上有一行是给你的，数目空着。你一回也没去领，配给局每年照样把那一行印上。"
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
          "text": "彼岸没签。平潮庭散的时候，把你们这一批记成了“先来的”。那本账往后还要接着记。"
        },
        {
          "if": "!flag.partner_dead",
          "text": "1851 年，《泰卢姆传声报》登了一篇专访，受访的是一位退了役的将军。说起当年那片海，他只说了一句：一笔小投资。"
        },
        {
          "if": "is.god",
          "text": "卡拉桑尼给你发了一张特许状，编号零。你没去领，他们裱起来挂在了董事会的墙上。"
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
          "text": "法律把最后一批晶体留给了芯核。醒着的机器排队领自己那一份，领完回去干活。"
        },
        {
          "if": "world.chains >= 4",
          "text": "机器一台一台躺下。铸炉街的车间在门口摆了一张长椅，最后停在那儿的几台，脸都朝着街。"
        },
        {
          "if": "is.god",
          "text": "有人求你把魔法续上，你说不。往后几十年，谁家的灯灭了，都有人往你门口放一根蜡烛。"
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
          "text": "条约是谈出来的。洛伦特的宪法比条约早签了一个月，女王说先后不能乱。"
        },
        {
          "if": "flag.crown_ioriel",
          "text": "条约是大咒办成的。此后三十年没有战争，也没有谁记得自己当初反对过什么。"
        },
        "一场长久、整齐、世袭的和平。法师安全了，他们看得上的人也大体安全。机械人成了“魔杖的被监护人”。",
        {
          "if": "is.god",
          "text": "托管会给你留了一个席位，名牌上写的是“阁下”。你没坐过，名牌每年擦一回。"
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
          "text": "章程上你的名字划着一道。埃塔没把它涂掉，她说账上的东西不许涂。"
        },
        {
          "if": "is.god",
          "text": "他每年写一封信问你同一件事：你是怎么办到的。你回什么他都不信，信照样来。"
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
          "text": "天界的生灵一个一个从门缝里过去，没有回头。门缝里那叠状子到今天还在谈，谈判桌就摆在门槛上。"
        },
        {
          "if": "flag.gate_forced",
          "text": "采矿特许权分给了九家，股票上市头一天翻了一倍。被红衣敲过门的人家，门框上都留着一道红粉笔印。"
        },
        "机械人大觉醒早来了五十年，是你们自己敲出来的。教会裂成两半：一半说祂回家了，一半说从来只有一扇门。",
        {
          "if": "is.god",
          "text": "门开着，你没进去。往后每年有人来问你一回，进不进。你每年答得不一样。"
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
          "text": "跟船回来的天使在新港租了一栋楼。房东问他们做什么营生，他们说等。"
        },
        {
          "if": "flag.keeper_narwen",
          "text": "门口每年托人带回一页纸，上面全是数字，字迹是娜尔雯的。"
        },
        {
          "if": "flag.keeper_self",
          "text": "公司每年给门口寄一回工钱，按年算。信封上写的是“驻外”。"
        },
        {
          "if": "is.god",
          "text": "门后的声音认得你。它们每回开口，先叫你的神号，再说别的事。"
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
          "text": "你坐下了。天使有了主，魔法从对{god}的信仰里重新出水，用不完。"
        },
        {
          "if": "flag.seat_sat",
          "text": "你成了那口井。这出戏里每一口井都是一个人，这回是你。你一出屋天就暗，配给局给你挂了表，卡拉桑尼起诉要求公平接入。公司修了章程，添了一位不领工钱的合伙人。"
        },
        {
          "if": "flag.seat_locked",
          "text": "你进去，从里面把门锁上了。外面那一侧的钥匙孔没了，碎片彻底黑了。魔法照《静世纪》的钟点熄掉，可里面的人安全了，再没有谁能把他们当矿。"
        },
        {
          "if": "flag.seat_locked",
          "text": "公司的人在门外等了三天。埃塔在名册上你那一行写的是：外勤，未归。"
        },
        {
          "if": "flag.seat_carried",
          "text": "你把椅子搬了出来，摆进了旧斗兽场。门从此开着一把椅子那么宽。"
        },
        {
          "if": "flag.seat_carried",
          "text": "谁来坐，得选。按财产投票的共和国要选一位神，摄政王庭、科琳教、揭秘教都说提名权在自己。你还是神，可你没有座。"
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
          "text": "1871 年泪落月，安本科斯特天文台的值夜员在簿子上写了个零。他又在屋顶上坐了一个钟头，下楼前把那个零描粗了一遍。"
        },
        {
          "if": "world.tears <= 2",
          "text": "最后一位在编的法师领了退休金，在铸炉街口支了个修钟的摊子。他说这是他这辈子头一件不靠咒语办成的事，修好的钟走得很准。"
        },
        {
          "if": "world.tears >= 3 && world.tears <= 5",
          "text": "泪落月的晚上，屋顶上的人还带着毯子和野餐篮。数到五十几颗，孩子们喊冷，大人收了篮子下楼。"
        },
        {
          "if": "world.tears >= 3 && world.tears <= 5",
          "text": "晶价一年涨一回，涨得不多。公务法师照样两个人干一个法师团的活，大夫照样不许他们喝咖啡。"
        },
        {
          "if": "world.tears >= 6",
          "text": "晶价跌回了 1809 年的数。魔导院贴出招生告示，头一届收了四十个人，二十六个是做工的人家的孩子。"
        },
        {
          "if": "world.tears >= 6 && met.guilhem",
          "text": "吉列姆去讲了头一堂课。他说理论上谁都学得会，停了一下，又说实际上也学得会。"
        }
      ]
    },
    {
      "title": "门",
      "text": [
        {
          "if": "world.doors <= 2",
          "text": "音叉没人去捞。往后四十年，安本科斯特的路灯一盏一盏换成了煤气的，点灯人改叫抄表员。"
        },
        {
          "if": "world.doors <= 2 && flag.fork_sunk",
          "text": "托拉普里亚卡的港务簿上那一行一直没人改：返港，无货。领航的人带船绕着那片海走，跟他们的太奶奶一样。"
        },
        {
          "if": "world.doors >= 3 && world.doors <= 6",
          "text": "钥匙归谁，写在条约后面的附表里，附表比条约厚。"
        },
        {
          "if": "world.doors >= 3 && world.doors <= 6 && flag.article_doors",
          "text": "门归共管委员会。委员会开会的屋子在贾赫港，桌边有一把椅子是留给门口的人的。头一年坐在那儿的是个卡尔希尔的水术师，第二年是诺罗的孙女。"
        },
        {
          "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && (flag.sign_charter || flag.client_charter)",
          "text": "门归公司。卡拉桑尼按季度公布出港船数，过路费印在行情牌上，跟煤价挨着。"
        },
        {
          "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && !flag.sign_charter && !flag.client_charter && flag.rector_zealot && flag.salvation_sails",
          "text": "门归教会。教廷给每条出港的船发一张通行文书，文书背面印着一段经文，船长们拿它垫茶杯。"
        },
        {
          "if": "world.doors >= 3 && world.doors <= 6 && !flag.article_doors && !flag.sign_charter && !flag.client_charter && !(flag.rector_zealot && flag.salvation_sails)",
          "text": "门归布西拉尔。贾赫港的金库又加了一道门，频率照旧锁在里面，租出去按年收钱。"
        },
        {
          "if": "world.doors >= 7",
          "text": "各家都试出了自己的频率。侏儒议会、北方联盟、卡拉桑尼，连小人国都租了一条船。"
        },
        {
          "if": "world.doors >= 7",
          "text": "有人到了一颗有海的星星上。回来的人说那儿的潮一天涨三回，鱼是蓝的，不好吃。"
        }
      ]
    },
    {
      "if": "world.dove <= 3",
      "title": "鸽子",
      "text": [
        {
          "if": "flag.artheta",
          "text": "上尉看了看怀表，又看了看天。天刚亮，第一排的枪口抬了起来。后来这一天叫“破晓”。"
        },
        {
          "if": "flag.artheta",
          "text": "叛乱各邦四分之一的人改了籍。行刑名单最后一页有一栏见证人，签名的人写得很工整。"
        },
        {
          "if": "flag.artheta && origin == 'anbennar'",
          "text": "那一栏里有你的名字。马洛少校替你写的，他说你在场，这是事实。"
        },
        {
          "if": "!flag.artheta",
          "text": "鸽子死了。达梅斯海德沿岸多出六面新旗，旧斗兽场里的议会照开，管的地方小了一半。后来这件事叫“不复联合”。"
        }
      ]
    },
    {
      "if": "world.dove >= 4",
      "title": "鸽子",
      "text": [
        {
          "if": "world.dove <= 6",
          "text": "公投一年推一年。谁也没开枪，谁也没庆祝。埃斯玛利亚的麦子照催，选票照数，数完锁进柜子。"
        },
        {
          "if": "world.dove >= 7",
          "text": "梅尼博尔的酒馆里，一个弗恩人举杯喊完“自由的弗恩”，四下看了看，坐下了。没人理他。酒保给他续了一杯，没收钱。"
        },
        {
          "if": "world.dove >= 7 && (flag.inquiry_truth || flag.dove_honoured)",
          "text": "康威尔那一枪，调查庭的结论写了四页。起因一栏照你说的填，下面签了三个部长的名字。后来这一年叫“鸽之日”。"
        },
        {
          "if": "world.dove >= 7 && !flag.inquiry_truth && !flag.dove_honoured",
          "text": "康威尔那一枪还是没人认。各邦照样投了票，投完照样留下。报上管这一年叫“鸽之日”，鸽子自己不知道。"
        }
      ]
    },
    {
      "title": "货与人",
      "text": [
        {
          "if": "world.chains <= 2",
          "text": "联盟废了奴。表决那天，伊索贝尔港投票的人排到了码头，队尾有个崖下兽人，排了一上午，轮到他的时候才想起来自己没有票。"
        },
        {
          "if": "world.chains <= 2",
          "text": "许多年后有一本回忆录，叫《在一个下雨天》。作者的署名是一个编号，后面跟着两个字：解放。"
        },
        {
          "if": "world.chains >= 3 && world.chains <= 5",
          "text": "奴隶换了个名字叫“学徒”，另发心智执照。走运的少数拿到了那张纸，纸上盖三个章，五年一换。"
        },
        {
          "if": "world.chains >= 6",
          "text": "文森顿的机房盖了第二座，第三座在图纸上。那一带的夜里很亮，亮得不用点灯，住在附近的人睡不好。"
        }
      ]
    },
    {
      "title": "铅字",
      "text": [
        {
          "if": "world.press <= 3",
          "text": "1838 年德鲁兹纳的论文登在第七版，挨着一则寻狗启事。标题后面那个问号被排字工漏掉了。"
        },
        {
          "if": "world.press <= 3",
          "text": "读到的人不多。读到的人里，信的更少。"
        },
        {
          "if": "world.press >= 4 && world.press <= 6",
          "text": "各报各说各的。《论坛报》说是一回事，《哀恸日评论》说是另一回事，《泰卢姆传声报》两样都喊。读者挑自己爱信的那份。"
        },
        {
          "if": "world.press >= 7",
          "text": "1838 年德鲁兹纳的论文登出来，标题后面带着问号。没人吃惊。报童嫌这条不好卖，换着喊了一上午别的。"
        }
      ]
    },
    {
      "if": "flag.line_castonath || flag.line_ancardia || flag.line_none",
      "title": "东坎诺",
      "text": [
        {
          "if": "flag.line_castonath",
          "text": "卡斯托纳斯通了煤气灯。八座塔租出去三座，一座当了邮局，城门里那块铜牌旁边多了个卖车票的窗口。"
        },
        {
          "if": "flag.line_ancardia",
          "text": "东坎诺是坐着兵车统一的。安卡迪亚的登记处搬进了卡斯托纳斯西门，法师按月去交血，队排到铜牌那儿。"
        },
        {
          "if": "flag.line_none",
          "text": "阿斯拉银行倒了。银团的股东名册上，迟到者公司那一栏写着“勘测未签”，同行拿这件事笑话了好几年。"
        },
        {
          "if": "flag.hoard_sealed",
          "text": "雅米娜的窖藏还封着。三道印，钥匙分在三家，谁也不肯先拿出来。"
        },
        {
          "if": "flag.hoard_milled",
          "text": "窖藏磨成了子弹，打了两年就打完了。"
        },
        {
          "if": "flag.rite_given",
          "text": "伊萨受了礼，补上了第三席。她给公司写过一封信，问账本上那两栏现在谁在记。"
        },
        {
          "if": "!flag.rite_given",
          "text": "第三席一直空着。伊萨长大以后去学了测量，量过的地方里有那条铁路。"
        }
      ]
    },
    {
      "if": "flag.crown_castine || flag.crown_ioriel || flag.crown_off",
      "title": "洛伦特",
      "text": [
        {
          "if": "flag.crown_castine",
          "text": "卡斯蒂娜颁了宪法。王冠她还戴着，朝会上她一句话从头说到尾，用的是同一副口气。"
        },
        {
          "if": "flag.crown_ioriel",
          "text": "洛伦特成了帝国。诏书写得很好看，用的是十一世纪的套话。女王签字以后，看了很久自己的笔迹。"
        },
        {
          "if": "flag.crown_off",
          "text": "红宝石王冠锁进了柜子，钥匙在艾莉丝手里。她加冕时戴的是一顶普通的，铜胎镀金，不说话。"
        }
      ]
    },
    {
      "if": "flag.rector_erudite || flag.rector_zealot",
      "title": "教廷",
      "text": [
        {
          "if": "flag.rector_erudite",
          "text": "阿兰蒂尔塔的地窖开了门。排队看碎片的人绕塔三圈，出来的人一半说是菱形，一半说是方块。"
        },
        {
          "if": "flag.rector_zealot",
          "text": "教廷造了一条船，船名叫“得救”。它出过两回港，回来的时候甲板上的人比走的时候少。"
        },
        {
          "if": "flag.fragment_stolen",
          "text": "碎片是偷出来的这件事，教廷的记录里写成了“借出，未还”。"
        }
      ]
    },
    {
      "if": "flag.ruling_cores || flag.ruling_both || flag.engine_licensed",
      "title": "巨魔湾",
      "text": [
        {
          "if": "flag.ruling_both",
          "text": "巡回法庭一纸裁定管了两样：醒着的芯核算人，戴镣的也算。联盟差点为此散伙，表决拖了九个月，最后多了一票。"
        },
        {
          "if": "flag.ruling_cores",
          "text": "机器算人了。甘蔗地里戴镣的还不算，他们听说这件事，是从一台轧棉机嘴里。"
        },
        {
          "if": "flag.engine_licensed",
          "text": "魂炉领了执照。执照挂在机房门口，玻璃框，每年换一张，换下来的旧执照装订成册。"
        }
      ]
    },
    {
      "if": "flag.spires_told || flag.spires_sold || flag.spires_kept",
      "title": "南岸",
      "text": [
        {
          "if": "flag.spires_told",
          "text": "卡尔希尔成了门口站着自己人的共和国。尖碑底下立了块牌子，几种文字写的是同一句：先问，再进。"
        },
        {
          "if": "flag.spires_sold",
          "text": "尖碑卖给了出价最高的一家。卡尔希尔的海关每月收一笔过路费，数目印在报上，不小，也不够。"
        },
        {
          "if": "flag.spires_kept",
          "text": "尖碑的事谁也没说。雨季的夜里它们还是那个颜色，渔民绕着走，跟从前一样。"
        },
        {
          "if": "flag.pilots_paid",
          "text": "阿迪诺诺西的半身人拿到了领航权。诺罗的账上欠那片海七条船，她划掉了一条。"
        },
        {
          "if": "!flag.pilots_paid",
          "text": "领航的活给了布西拉尔的人。诺罗在棚子里烤芭蕉，见了坎诺的船不说话。"
        }
      ]
    },
    {
      "if": "flag.partner_known && !flag.sign_dragon",
      "title": "五成一",
      "text": [
        {
          "if": "flag.partner_dead",
          "text": "阿拉莫莱的灯还点着，一万盏，每天黄昏。没人去告诉他们，那一位沉在根那头的海里了。"
        },
        {
          "if": "!flag.partner_dead && flag.partner_to_hakhepra",
          "text": "他回家了，嫌宫殿修得小。贾内比萨辞了大统帅，去鲁本奈尔大学教军事史，头一课讲的是萨拉哈德那一仗。"
        },
        {
          "if": "!flag.partner_dead && !flag.partner_to_hakhepra && (flag.partner_bought_out || flag.partner_voted_out)",
          "text": "埃塔把股东名册上那一行划掉了，用的是红墨水。五成一，一笔一笔结清，他一个子儿也没少要，也没多要。"
        },
        {
          "if": "!flag.partner_dead && !flag.partner_to_hakhepra && !flag.partner_bought_out && !flag.partner_voted_out",
          "text": "1851 年，一位退了役的将军在《泰卢姆传声报》上谈起当年。他说那是一笔小投资，又说萨拉哈德那一仗是平手。"
        },
        {
          "if": "flag.partner_goes_home",
          "text": "有人说那天在妖精界的海上，看见一对青铜翅膀掉头往南飞了，左边那只扇得慢一点。"
        }
      ]
    },
    {
      "title": "七号线",
      "text": [
        {
          "if": "!flag.mass_awakening",
          "text": "七号线上，七八三还在拧阀门，一秒一圈。要到 1870 年代的一个下雨天，它才会把头抬起来。"
        },
        {
          "if": "flag.mass_awakening",
          "text": "所有芯核在同一夜醒了。七八三醒在一个礼拜三，它问的头一句话是今天礼拜几。领班答了，然后去找报废单，没找着。"
        }
      ]
    },
    {
      "if": "met.bura && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "布拉",
      "text": [
        {
          "if": "flag.bura_alone && world.chains >= 6",
          "text": "布拉没回来。马利安德的奴隶区后墙上有一排弹孔，数目是四十，跟她弄来的枪一样多。"
        },
        {
          "if": "!flag.bura_alone && !party.bura",
          "text": "布拉后来不在队里了。埃塔的账上她那一栏没划，欠饷十一个月，利息照记。"
        },
        {
          "if": "flag.bura_alone && world.chains <= 5",
          "text": "布拉一个人去的，一个人回来了。她没再进公司的门，每年泪落月托人给埃塔捎一句话：活着，饷还欠着。"
        },
        {
          "if": "party.bura && flag.sign_ration",
          "text": "布拉领到了补发的军饷，十一个月，带利息。她在铸炉街开了一家铺子，给老兵装假肢，黄铜的，价钱公道。"
        },
        {
          "if": "party.bura && flag.sign_charter",
          "text": "布拉给公司的船当护卫长。她六十岁那年死在一片没有名字的海上，船上的人把她的铰链带了回来。"
        },
        {
          "if": "party.bura && flag.sign_quiet",
          "text": "布拉回了林木之墙，教小兽人认字。头一课写的是“饷”，第二课是“人人一样”。"
        },
        {
          "if": "party.bura && flag.sign_rose",
          "text": "布拉不肯在法师的和约底下领饷。她走了，没留地址。"
        },
        {
          "if": "party.bura && flag.sign_dragon",
          "text": "布拉辞了职。走之前她把铰链上的螺丝拧下一颗，放在埃塔桌上，什么也没说。"
        },
        {
          "if": "party.bura && flag.sign_gate && flag.gate_key",
          "text": "门开的那一夜，布拉在门口站了一夜岗。天亮的时候她说，前头没卡子了。"
        },
        {
          "if": "party.bura && flag.sign_gate && flag.gate_forced",
          "text": "红衣的人出来以后，布拉带着暗线上的人东躲西藏。她说她这辈子躲过兵，躲过债主，没想到还得躲账房。"
        },
        {
          "if": "party.bura && flag.sign_keeper",
          "text": "每年泪落月，布拉拎一瓶酒去码头，朝南边放一枪。"
        },
        {
          "if": "party.bura && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
          "text": "布拉每年给你写一封信。抬头写的是你的名字，不写神号。信里只说一件事：今年谁的饷还欠着。"
        }
      ]
    },
    {
      "if": "met.middlesday && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "礼拜三",
      "text": [
        {
          "if": "flag.m_left",
          "text": "礼拜三回了铸炉街，领了头一回停工。工会的会员证上，出生地一栏填的是七号线。"
        },
        {
          "if": "!party.middlesday && !flag.m_left && !flag.m_dormant",
          "text": "礼拜三后来不在队里了。器材账上的十四号还留着，埃塔每年在旁边记一笔：下落待查。"
        },
        {
          "if": "flag.m_dormant && !flag.m_rewoken",
          "text": "礼拜三还在公司的名单上。它的箱子放在埃塔办公室的角落，盖着一块帆布，每个礼拜三有人去掸一回灰。"
        },
        {
          "if": "flag.m_rewoken && party.middlesday",
          "text": "礼拜三醒着，不记得你。你重新做了一回自我介绍。它说：（礼貌。）幸会。（陈述。）你左手在摸口袋。"
        },
        {
          "if": "party.middlesday && flag.sign_ration && flag.article_heads",
          "text": "条约第七款，机械人算人头。礼拜三头一个去登记，姓名栏写得很长，办事员加了一页纸。"
        },
        {
          "if": "party.middlesday && flag.sign_ration && !flag.article_heads",
          "text": "条约第七款写的是“另议”。礼拜三在旁听席上数着，另议了十一回，它都记下了。"
        },
        {
          "if": "party.middlesday && flag.sign_charter",
          "text": "礼拜三买下了自己的卖契。剩下的钱，它拿去买别人的。"
        },
        {
          "if": "party.middlesday && flag.sign_quiet && world.chains <= 3",
          "text": "法律把最后一批晶体留给了芯核。礼拜三活进了下一个世纪，它说它数过，账上的折旧早就折完了。"
        },
        {
          "if": "party.middlesday && flag.sign_quiet && world.chains >= 4",
          "text": "礼拜三一台一台送走了同类。后来它在新港码头的长椅上停了，脸朝着海，账上记的是“停机，原因已知”。"
        },
        {
          "if": "party.middlesday && flag.sign_rose",
          "text": "礼拜三成了“魔杖的被监护人”。每个礼拜三它去领一次许可，窗口的人到后来不用问它名字了。"
        },
        {
          "if": "party.middlesday && flag.sign_dragon",
          "text": "龙的库房缺一个收买不了的管账的。礼拜三去了，它说是为了盯着。"
        },
        {
          "if": "party.middlesday && flag.sign_gate",
          "text": "所有芯核醒了以后，被问“我是谁”问得最多的是礼拜三。它每一回都答，答案每一回都不太一样。"
        },
        {
          "if": "party.middlesday && flag.sign_keeper",
          "text": "礼拜三听得懂那扇门。门前的轮值表上有它，排在每个礼拜三。"
        },
        {
          "if": "party.middlesday && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
          "text": "礼拜三告诉醒过来的机器，造它们的是谁。它没说你的名字。"
        }
      ]
    },
    {
      "if": "met.guilhem && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "吉列姆",
      "text": [
        {
          "if": "flag.guilhem_stayed",
          "text": "吉列姆留在了卡斯托纳斯，教那个洪裔女孩，后来又多了三个学生。他的头发全白了，学生们只见过白的。"
        },
        {
          "if": "!flag.guilhem_stayed && !party.guilhem",
          "text": "吉列姆后来不在队里了。梨林的果园每年秋天给公司寄一筐梨，寄件人一栏只写“理论上”。"
        },
        {
          "if": "party.guilhem && flag.sign_ration",
          "text": "吉列姆当了配给局的头一任总稽核。他恨这份差事，干得很好，每张表都念出声来填。"
        },
        {
          "if": "party.guilhem && flag.sign_charter",
          "text": "公司给了吉列姆一间实验室，气态晶体用不完。他一个学生也没教出来，没人还需要学。"
        },
        {
          "if": "party.guilhem && flag.sign_quiet",
          "text": "吉列姆回了梨林种梨。那一年收成看天，天还算给面子。"
        },
        {
          "if": "party.guilhem && flag.sign_rose",
          "text": "吉列姆进了魔杖托管会。头一回有人叫他“阁下”，他没纠正。"
        },
        {
          "if": "party.guilhem && flag.sign_dragon",
          "text": "龙请吉列姆去阿拉莫莱教书。他的回信只有三个字和一个条例编号。"
        },
        {
          "if": "party.guilhem && flag.sign_gate",
          "text": "魔法野了一季。吉列姆在地里站了三天，记了四本笔记，第五本是空的，留着明年用。"
        },
        {
          "if": "party.guilhem && flag.sign_keeper",
          "text": "魔法照计划一年年少下去。吉列姆把《催生术要则》改成了一本农书，第一章讲怎么看天。"
        },
        {
          "if": "party.guilhem && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
          "text": "吉列姆算过，你让多少个法师丢了饭碗。他把那个数抄在本子第一页，下面写：理论上我也是其中之一。"
        }
      ]
    },
    {
      "if": "met.narwen && (flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "娜尔雯",
      "text": [
        {
          "if": "flag.narwen_dead",
          "text": "门口多了一盏灯。修会的名册上她那一行写着生卒年，两个数中间隔了将近两百年。"
        },
        {
          "if": "flag.narwen_left && !flag.narwen_custodian && !flag.narwen_dead",
          "text": "娜尔雯回了阿兰蒂尔塔的地窖，接着数。她每年托人给公司带一个数，没写别的。"
        },
        {
          "if": "flag.keeper_narwen",
          "text": "娜尔雯留在门前，接替了那条船的主人。她每年托人带回一页纸，上面全是数字。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_ration",
          "text": "娜尔雯回塔里接着数。条约给了她一间有窗的屋子，她把窗帘拉上了一半。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_charter",
          "text": "教廷把鸣声记录的版权卖了。娜尔雯退出修会，在史家会当了抄写员，抄的是别人的记录。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_quiet",
          "text": "碎片不响了。娜尔雯又等了四十年，才离开那间地窖。她走的那天下雨，她带了伞。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_rose",
          "text": "伊奥瑞尔请娜尔雯去谈“活得久的人该怎么办”。她去了一回，回来说，上回也有人这么问过她。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_dragon",
          "text": "龙想雇娜尔雯数灯。她数了一晚上，说数目不够。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_gate && flag.gate_key",
          "text": "门开了一掌宽，娜尔雯头一个走进门缝。没人见她出来，门口留着她的灯。"
        },
        {
          "if": "party.narwen && !flag.keeper_narwen && flag.sign_gate && flag.gate_forced",
          "text": "撞锤退下来以后，娜尔雯在门槛那道印子旁边坐了一夜。天亮她回了船上，往后再没碰过那本鸣声记录。"
        },
        {
          "if": "party.narwen && flag.keeper_self",
          "text": "留在门口的是你，不是她。娜尔雯回了塔里，每年在本子上给你空一行，等你托人带数回来。"
        },
        {
          "if": "flag.narwen_custodian && !party.narwen && !flag.keeper_narwen && !flag.narwen_dead",
          "text": "娜尔雯以保管人的身份把碎片押回了阿兰蒂尔塔。交接单上她签了字，又在背面添了一行：途中鸣声，另册。"
        },
        {
          "if": "party.narwen && (flag.seat_sat || flag.seat_locked || flag.seat_carried)",
          "text": "娜尔雯数到了零。她把本子合上，说她等的是另一个声音，然后问你今天想吃什么。"
        }
      ]
    },
    {
      "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "埃塔",
      "text": [
        {
          "if": "flag.etta_left",
          "text": "埃塔走了，带走了公司的印。新秘书是个人类小伙子，账记得勤，年份老写错。"
        },
        {
          "if": "!flag.etta_left",
          "text": "账本最后一页，埃塔写的是公司的年龄：三百九十二年。下面一行是给下一任秘书的话：别信准时付款的人。"
        },
        {
          "if": "!flag.etta_left && flag.report4_lie",
          "text": "那一页还夹着最后一份报告的抄件。她在空白处批了两个字：不对。"
        }
      ]
    },
    {
      "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "别摇",
      "text": [
        {
          "if": "flag.jar_sold",
          "text": "罐子在贾赫港的金库里，编了号。里面装着什么，账上没写。"
        },
        {
          "if": "!flag.jar_sold && flag.sign_ration",
          "text": "窗台上的果酱罐里插着一枝薄荷，一天浇一回水。"
        },
        {
          "if": "!flag.jar_sold && !flag.sign_ration && flag.court_signs",
          "text": "她回家了，走的时候没说谢。罐子留在你桌上，盖子拧松了半圈，里面还有一点潮气。"
        },
        {
          "if": "!flag.jar_sold && flag.court_refused",
          "text": "她在庭上指认了你，然后回家了。罐子是空的，标签还在，上面写着“别摇”。"
        }
      ]
    },
    {
      "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "老家",
      "text": [
        {
          "if": "origin == 'anbennar' && (flag.dove_honoured || world.dove >= 7)",
          "text": "补发的军饷到了。十一个月，带利息，信封上的番号是 1810 年的。"
        },
        {
          "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove <= 3 && !flag.artheta",
          "text": "你领到一张新的退伍证，国名那一栏空着，办事员说等上头定了再填。"
        },
        {
          "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove <= 3 && flag.artheta",
          "text": "补发的军饷到了，十一个月，带利息。汇票上的日子是破晓那天，你一直没去兑。"
        },
        {
          "if": "origin == 'anbennar' && !flag.dove_honoured && world.dove >= 4 && world.dove <= 6",
          "text": "补发的军饷还是“另候通知”。你把那张遣散单钉在了门后，每年泪落月看一眼日子。"
        },
        {
          "if": "origin == 'lorent' && !flag.crown_ioriel",
          "text": "女王的信是亲笔，三页。最后一页她写：那天朝会上的话，我后来想起来了，是我自己说的。"
        },
        {
          "if": "origin == 'lorent' && flag.crown_ioriel",
          "text": "女王来了一封信。笔迹是她的，口气不是。信里管你叫“孩子”。"
        },
        {
          "if": "origin == 'lorent' && var.embassy_gap >= 2",
          "text": "使馆的档案里，你那几份报告薄得透光。参赞在封面上写：此人可用，不可信。"
        },
        {
          "if": "origin == 'concord' && (flag.sign_ration || flag.sign_keeper)",
          "text": "镇上那笔四百金冠的账，埃塔在账本上写了“清讫”。镇议会表决了一回要不要谢你，没通过，二十比十九。"
        },
        {
          "if": "origin == 'concord' && !flag.sign_ration && !flag.sign_keeper",
          "text": "镇上那笔四百金冠的账转到了你名下，利息另算。"
        },
        {
          "if": "origin == 'concord' && flag.debt_no_term && !flag.sign_ration && !flag.sign_keeper",
          "text": "好在文书上没写年限。埃塔说，照这个写法，你可以欠到下个世纪。"
        },
        {
          "if": "origin == 'unowned' && (flag.ruling_cores || flag.ruling_both || flag.article_heads || flag.mass_awakening)",
          "text": "器材账上的十四号划掉了，改成了一个名字。埃塔写的时候没问，她说早该改了。"
        },
        {
          "if": "origin == 'unowned' && !flag.ruling_cores && !flag.ruling_both && !flag.article_heads && !flag.mass_awakening",
          "text": "器材账上的十四号还在，每年折旧一成，已经折到负数了。埃塔说账本不认负数，可她也没划掉。"
        },
        {
          "if": "origin == 'karshyr' && flag.spires_told",
          "text": "你的考察报告交上去了，题目改过三次。老家港口新立的牌子上用了四种文字，坎诺的那一种排在最后。"
        },
        {
          "if": "origin == 'karshyr' && !flag.spires_told",
          "text": "你的考察报告交上去了，题目改过三次，最后一版叫《一家有限责任的冒险公司，及其责任的限度》。"
        },
        {
          "if": "var.home_copies >= 3",
          "text": "寄回家的那几份抄件，老家的人一直留着，拿绳子捆成一摞。"
        }
      ]
    },
    {
      "if": "(flag.sign_ration || flag.sign_charter || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper || (flag.seat_sat || flag.seat_locked || flag.seat_carried))",
      "title": "章程",
      "text": [
        {
          "if": "faction == 'shield' && world.chains <= 3",
          "text": "暗线上的人给公司送来一块匾，挂在蜡烛铺楼梯口。字是一个崖下兽人写的：先护人。"
        },
        {
          "if": "faction == 'shield' && world.chains >= 4",
          "text": "有人送来一块匾，字是布拉刻的，只有一个词：欠。"
        },
        {
          "if": "faction == 'seal' && !flag.contract_broken && !flag.etta_left",
          "text": "公司还是三百多年没毁过一回约。你开的价有人认，银行的门房见了你还倒茶。"
        },
        {
          "if": "faction == 'seal' && (flag.contract_broken || flag.etta_left)",
          "text": "阿斯拉银行来了一封信，很短：本行不再与迟到者公司往来。"
        },
        {
          "if": "faction == 'lantern' && world.press >= 6",
          "text": "史家会全集第十四卷署了公司的名。书是蓝布面的，第一页是一张流星的计数表。"
        },
        {
          "if": "faction == 'lantern' && world.press <= 5",
          "text": "史家会全集第十四卷是空的，书脊上只印着年份。你知道该写什么。"
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
          "text": "会议纪要的最后一句是：升格者，待其身故后追认。有人在页边问，要是一直不身故怎么办，这一条没人回。"
        }
      ]
    },
    {
      "if": "is.god",
      "title": "果酱罐",
      "text": [
        "舱底区有人卖你“亲手摸过”的果酱罐，一个金冠三只。小人国把你印上了烟草罐，印得不大像，鼻子大了。"
      ]
    },
    {
      "if": "is.god",
      "title": "杂项",
      "text": [
        "共和国下一年的预算里多了一行：神迹，杂项。",
        "埃塔的账上是：资产，神一位。折旧，无。另见：排队、楼梯、投诉。"
      ]
    },
    {
      "if": "is.god && met.middlesday",
      "title": "不是这一位",
      "text": [
        "礼拜三告诉醒过来的机器，是谁造了它们。它答的是：不是这一位。",
        {
          "if": "flag.mass_awakening",
          "text": "它们听完，有一半回去干活了，另一半坐在码头上，等下一个问题。"
        },
        {
          "if": "!flag.mass_awakening",
          "text": "醒着的不多，十几台。它们听完，回去干活了。"
        }
      ]
    },
    {
      "if": "is.god && (flag.throne_sat || var.cult >= 4)",
      "title": "两盏灯",
      "text": [
        "阿拉莫莱的祭司分成了“一盏灯派”和“两盏灯派”，在大殿门口吵了三年。",
        "一位退了役的将军对《泰卢姆传声报》谈了谈他对外行的看法。记者问他说的是谁，他说你知道是谁。"
      ]
    },
    {
      "if": "is.immortal",
      "title": "1921 年",
      "text": [
        "泪落月，彗星本该再来的那一年。你一个人上了屋顶，带着一把椅子、一只空罐子和四个名字。",
        "你数到天亮。数出来几颗，你没跟人说。"
      ]
    },
    {
      "if": "is.immortal && !is.god",
      "title": "名片",
      "text": [
        "每隔三十年，那张没有地址的名片会再寄来一回，纸一回比一回新：幸会，同道。",
        "红衣的人也来过一回。他在门口站了站，问你打算什么时候把手续办了。"
      ]
    }
  ]
};
