// s1444 / enemies.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const ENEMIES = {
 "underpass_overseer": {
  "id": "underpass_overseer",
  "name": "链头监工",
  "type": "humanoid",
  "level": 3,
  "desc": "嗜血者氏族的老兵，腰上缠着拴地精的主链，链子另一头还拴着四十个人，撤退的号他明明听见了，可就是舍不得丢下这一串脚夫。",
  "hp": 70,
  "ac": 14,
  "init": 0,
  "saves": {
   "str": 4,
   "dex": 1,
   "con": 3,
   "int": -1,
   "wis": 0,
   "cha": 0
  },
  "xp": 300,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "attacks": [
   {
    "name": "链锤",
    "hit": 5,
    "dmg": "1d6+3",
    "type": "bludgeoning",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "收链",
    "hit": 5,
    "dmg": "1d6+3",
    "type": "bludgeoning",
    "apply": {
     "cond": "restrained",
     "turns": 1,
     "save": {
      "abil": "str",
      "dc": 12
     }
    },
    "recharge": 4,
    "text": "{name}手腕一抖，铁链就缠了上来，把人直往他跟前拽。"
   },
   {
    "name": "甩链",
    "dmg": "2d6",
    "type": "bludgeoning",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 12,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6,
    "text": "{name}把主链抡圆了甩过来，拴在链上的地精也跟着一路尖叫。"
   }
  ]
 },
 "death_whisperer": {
  "id": "death_whisperer",
  "name": "死语者",
  "type": "humanoid",
  "level": 4,
  "desc": "死齿氏族的萨满，脸上抹着白灰，手里提着几只封了蜡的罐子。他能跟死人说话，死人就算不想答，也得答他。",
  "hp": 44,
  "ac": 13,
  "init": 1,
  "saves": {
   "str": 0,
   "dex": 1,
   "con": 2,
   "int": 1,
   "wis": 4,
   "cha": 2
  },
  "xp": 150,
  "ai": "caster",
  "resist": [
   "necrotic"
  ],
  "attacks": [
   {
    "name": "骨杖",
    "hit": 5,
    "dmg": "1d6+2",
    "type": "bludgeoning",
    "weight": 1
   },
   {
    "name": "问话",
    "hit": 6,
    "dmg": "2d6+2",
    "type": "psychic",
    "apply": {
     "cond": "frightened",
     "turns": 2,
     "save": {
      "abil": "wis",
      "dc": 13
     }
    },
    "weight": 3,
    "text": "{name}凑到你耳朵边上，用死人的嗓音问了你一句话。"
   },
   {
    "name": "起来",
    "heal": "2d8+4",
    "uses": 1,
    "text": "{name}一巴掌拍开罐子上的蜡封，刚才倒下的那个又撑着地爬了起来。"
   }
  ]
 },
 "young_basilisk": {
  "id": "young_basilisk",
  "name": "小石化蜥",
  "type": "monstrosity",
  "level": 5,
  "desc": "试炼山第十道试炼的林子里养着的那头，长着八条腿，只是还没长全。它的目光眼下只能叫人身子发僵，还没本事把人变成石头，要是拿擦亮的盾往它眼睛上一晃，它就什么也看不见了。",
  "hp": 62,
  "ac": 15,
  "init": -1,
  "saves": {
   "str": 3,
   "dex": -1,
   "con": 3,
   "int": -4,
   "wis": 1,
   "cha": -2
  },
  "xp": 250,
  "ai": "brute",
  "resist": [
   "poison"
  ],
  "attacks": [
   {
    "name": "咬",
    "hit": 7,
    "dmg": "2d6+4",
    "type": "piercing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "瞪",
    "hit": 7,
    "dmg": "1d6",
    "type": "psychic",
    "apply": {
     "cond": "slowed",
     "turns": 2,
     "save": {
      "abil": "con",
      "dc": 13
     }
    },
    "recharge": 4,
    "text": "{name}抬起头死死盯住了你，你还没来得及躲，两条腿先僵住了。"
   }
  ]
 },
 "bloodgorger_champion": {
  "id": "bloodgorger_champion",
  "name": "嗜血者的熊血斗士",
  "type": "humanoid",
  "level": 5,
  "desc": "古尔赞手下的头号狂战士，是喝过熊血的，夺斗场上的规矩他比你熟得多，打到一半还会把自己身上的甲解下来扔掉。",
  "hp": 200,
  "ac": 14,
  "init": 1,
  "saves": {
   "str": 5,
   "dex": 1,
   "con": 4,
   "int": -1,
   "wis": 1,
   "cha": 0
  },
  "xp": 750,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "condImmune": [
   "frightened"
  ],
  "attacks": [
   {
    "name": "熊扑",
    "hit": 8,
    "dmg": "2d8+4",
    "type": "slashing",
    "multi": 2,
    "weight": 3,
    "text": "{name}整个人扑了上来，两把斧子一前一后跟着就到。"
   },
   {
    "name": "横扫",
    "dmg": "3d8",
    "type": "slashing",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 14,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6
   },
   {
    "name": "喝血",
    "buff": {
     "cond": "reckless",
     "turns": 3
    },
    "uses": 1,
    "minRound": 3,
    "text": "{name}舔了舔斧刃上的血，一把扯下护心镜扔到了一边。"
   }
  ]
 },
 "black_orc_raider": {
  "id": "black_orc_raider",
  "name": "黑皮掠袭者",
  "type": "humanoid",
  "level": 5,
  "desc": "这些兽人一辈子没上过地面，使的是黑曜石矛头，一路上连一声都不出。照他们的规矩，动手先杀对面个头最大的那个。",
  "hp": 60,
  "ac": 15,
  "init": 2,
  "saves": {
   "str": 4,
   "dex": 2,
   "con": 3,
   "int": 0,
   "wis": 1,
   "cha": -1
  },
  "xp": 250,
  "ai": "cunning",
  "attacks": [
   {
    "name": "黑曜石矛",
    "hit": 7,
    "dmg": "2d6+4",
    "type": "piercing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "从暗处扎",
    "hit": 8,
    "dmg": "3d6+4",
    "type": "piercing",
    "recharge": 5,
    "text": "{name}从没点灯的那一边悄没声地扎了过来。"
   }
  ]
 },
 "black_orc_warcaller": {
  "id": "black_orc_warcaller",
  "name": "黑皮战号手",
  "type": "humanoid",
  "level": 7,
  "desc": "他吹的那支号是拿深渊鸦的腿骨做的。号声一响，黑地里就有东西往这边爬，有时候爬出来的是钩爪怪。",
  "hp": 300,
  "ac": 16,
  "init": 1,
  "saves": {
   "str": 5,
   "dex": 1,
   "con": 5,
   "int": 0,
   "wis": 2,
   "cha": 3
  },
  "xp": 1650,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "condImmune": [
   "frightened"
  ],
  "attacks": [
   {
    "name": "骨柄战斧",
    "hit": 9,
    "dmg": "2d8+5",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "号",
    "buff": {
     "cond": "emboldened",
     "turns": 2,
     "all": true
    },
    "uses": 2,
    "text": "{name}吹响了骨号，震得闸口两边的石头都嗡嗡直响。"
   },
   {
    "name": "放钩爪怪",
    "dmg": "4d6",
    "type": "slashing",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 15,
      "half": true
     }
    },
    "uses": 1,
    "minRound": 2,
    "weight": 9,
    "text": "黑地里果然有东西应了号声，一头钩爪怪从顶上掉了下来，两只钩子抢先到了。"
   }
  ]
 },
 "grudgebearer_vet": {
  "id": "grudgebearer_vet",
  "name": "负怨者老兵",
  "type": "humanoid",
  "level": 5,
  "desc": "兵团里的老兵，人人心里都揣着一笔旧账。他们打起仗来背靠着背，嘴里报的是自家那一条账的年份。",
  "hp": 62,
  "ac": 17,
  "init": 0,
  "saves": {
   "str": 4,
   "dex": 0,
   "con": 4,
   "int": 0,
   "wis": 1,
   "cha": 0
  },
  "xp": 250,
  "ai": "brute",
  "resist": [
   "poison"
  ],
  "attacks": [
   {
    "name": "战锤",
    "hit": 7,
    "dmg": "2d6+4",
    "type": "bludgeoning",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "记着",
    "hit": 7,
    "dmg": "2d8+4",
    "type": "bludgeoning",
    "recharge": 4,
    "text": "{name}挨了一下，一声都没吭，下一锤反倒砸得更狠了。"
   }
  ]
 },
 "aldresian_knight": {
  "id": "aldresian_knight",
  "name": "阿德蕾西娅骑士",
  "type": "humanoid",
  "level": 7,
  "desc": "拿剑当法器的法师骑士，剑身上刻着咒文。他们出手向来点到为止，可是点得极准。",
  "hp": 100,
  "ac": 17,
  "init": 2,
  "saves": {
   "str": 3,
   "dex": 2,
   "con": 3,
   "int": 3,
   "wis": 2,
   "cha": 2
  },
  "xp": 550,
  "ai": "cunning",
  "attacks": [
   {
    "name": "剑上咒",
    "hit": 8,
    "dmg": "2d8+4",
    "type": "slashing",
    "multi": 2,
    "extra": {
     "dmg": "1d6",
     "type": "force"
    },
    "weight": 3
   },
   {
    "name": "回剑",
    "buff": {
     "cond": "shielded",
     "turns": 2
    },
    "uses": 2,
    "text": "{name}把剑往身前一横，剑身上的字跟着亮了一下。"
   }
  ]
 },
 "magister_militant": {
  "id": "magister_militant",
  "name": "魔导院武卫",
  "type": "humanoid",
  "level": 6,
  "desc": "他们自己不是法师，可是立过誓约，专门对付会施法的人，胸前都挂着一块刻了字的铅牌当誓约信物。信物要是碎了，他们会愣上一下。",
  "hp": 76,
  "ac": 16,
  "init": 1,
  "saves": {
   "str": 3,
   "dex": 1,
   "con": 3,
   "int": 1,
   "wis": 4,
   "cha": 1
  },
  "xp": 350,
  "ai": "cunning",
  "attacks": [
   {
    "name": "包铁短棍",
    "hit": 7,
    "dmg": "2d6+4",
    "type": "bludgeoning",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "禁咒令",
    "hit": 7,
    "dmg": "1d6",
    "type": "force",
    "apply": {
     "cond": "hexed",
     "turns": 2,
     "save": {
      "abil": "int",
      "dc": 14
     }
    },
    "recharge": 4,
    "text": "{name}念了一句誓词，你指尖上的法术登时散掉了一半。"
   }
  ]
 },
 "daras": {
  "id": "daras",
  "name": "达拉斯",
  "type": "humanoid",
  "level": 7,
  "desc": "他话少，针线活倒是好得很，收尸队用的寿衣有不少是他缝的。动起手来他只冲着一个人去，出过头一刀，后面就只招架了。",
  "hp": 90,
  "ac": 15,
  "init": 4,
  "saves": {
   "str": 1,
   "dex": 4,
   "con": 2,
   "int": 1,
   "wis": 2,
   "cha": 0
  },
  "xp": 550,
  "ai": "cunning",
  "attacks": [
   {
    "name": "只这一刀",
    "hit": 10,
    "dmg": "4d8+4",
    "type": "piercing",
    "uses": 1,
    "weight": 20,
    "text": "{name}从人堆里走了出来，手里是一把窄刃的刀，从头到尾一句话也没说。"
   },
   {
    "name": "招架反刺",
    "hit": 8,
    "dmg": "1d8+4",
    "type": "piercing",
    "weight": 3
   }
  ]
 },
 "lothane_iii": {
  "id": "lothane_iii",
  "name": "洛萨恩三世",
  "type": "humanoid",
  "level": 10,
  "desc": "五十一岁的战斗法师，使一把威克斯大剑，动兵之前总要先约对方单挑，比到见血就停。当年他了结埃尔兰，用的就是一道法术。",
  "hp": 220,
  "ac": 18,
  "init": 2,
  "saves": {
   "str": 5,
   "dex": 2,
   "con": 4,
   "int": 4,
   "wis": 3,
   "cha": 4
  },
  "xp": 3600,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "condImmune": [
   "frightened",
   "charmed"
  ],
  "attacks": [
   {
    "name": "三卫的起手",
    "hit": 11,
    "dmg": "2d10+6",
    "type": "slashing",
    "multi": 2,
    "weight": 3,
    "text": "{name}双手握着大剑，先是一劈，紧跟着往上一挑。"
   },
   {
    "name": "雷鸣斩",
    "dmg": "4d8",
    "type": "thunder",
    "aoe": {
     "save": {
      "abil": "con",
      "dc": 17,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6
   },
   {
    "name": "最后一股劲",
    "hit": 11,
    "dmg": "6d10",
    "type": "force",
    "recharge": 6,
    "minRound": 3,
    "weight": 9,
    "text": "{name}松开了一只握剑的手，掌心里亮起来的那样东西可不是剑。"
   }
  ]
 },
 "black_hound_captain": {
  "id": "black_hound_captain",
  "name": "黑犬队长",
  "type": "humanoid",
  "level": 8,
  "desc": "佣兵头子，在安本科斯特之劫里发过一笔财，干活向来按人头结账。他手下的人围上来之前，都要先看一眼他的手指头指着谁。",
  "hp": 380,
  "ac": 17,
  "init": 2,
  "saves": {
   "str": 4,
   "dex": 3,
   "con": 4,
   "int": 1,
   "wis": 2,
   "cha": 2
  },
  "xp": 2100,
  "ai": "cunning",
  "traits": {
   "boss": true
  },
  "attacks": [
   {
    "name": "马刀",
    "hit": 10,
    "dmg": "2d8+5",
    "type": "slashing",
    "multi": 3,
    "weight": 3
   },
   {
    "name": "围上去",
    "buff": {
     "cond": "emboldened",
     "turns": 2,
     "all": true
    },
    "uses": 1,
    "text": "{name}朝一个人抬了抬下巴，他手下的人就全都转过去了。"
   },
   {
    "name": "灭口的弩",
    "hit": 10,
    "dmg": "4d10",
    "type": "piercing",
    "recharge": 5,
    "weight": 6,
    "text": "{name}从斗篷底下端出了一把早就上好弦的重弩。"
   },
   {
    "name": "齐射",
    "dmg": "3d10",
    "type": "piercing",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 16,
      "half": true
     }
    },
    "recharge": 6,
    "minRound": 2,
    "weight": 6
   }
  ]
 },
 "bloodfeeder": {
  "id": "bloodfeeder",
  "name": "饮血者",
  "type": "aberration",
  "level": 7,
  "desc": "奎内赫人犯了血律，就会变成这种东西。它们四肢着地在地上爬，不会说话，只认得血，身上的树脂纹一道一道的，看着跟树皮差不多。",
  "hp": 85,
  "ac": 15,
  "init": 3,
  "saves": {
   "str": 4,
   "dex": 3,
   "con": 4,
   "int": -2,
   "wis": 1,
   "cha": -2
  },
  "xp": 550,
  "ai": "brute",
  "resist": [
   "necrotic"
  ],
  "attacks": [
   {
    "name": "扑咬",
    "hit": 8,
    "dmg": "2d8+4",
    "type": "piercing",
    "multi": 2,
    "lifesteal": true,
    "weight": 3,
    "text": "{name}扑上来就咬，咬住了便死也不松口。"
   }
  ]
 },
 "bloodfeeder_matriarch": {
  "id": "bloodfeeder_matriarch",
  "name": "老饮血者",
  "type": "aberration",
  "level": 9,
  "desc": "这群东西里数她变得最久，树脂纹都已经长进皮里去了。要是有人念起血律的头三条，她会停上一停，像是在想自己从前是谁。",
  "hp": 320,
  "ac": 17,
  "init": 2,
  "saves": {
   "str": 5,
   "dex": 3,
   "con": 5,
   "int": -1,
   "wis": 2,
   "cha": 0
  },
  "xp": 3000,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "resist": [
   "necrotic"
  ],
  "attacks": [
   {
    "name": "撕咬",
    "hit": 10,
    "dmg": "2d10+5",
    "type": "piercing",
    "multi": 2,
    "lifesteal": true,
    "weight": 3
   },
   {
    "name": "唤群",
    "dmg": "4d6",
    "type": "slashing",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 16,
      "half": true
     }
    },
    "uses": 1,
    "minRound": 2,
    "weight": 9,
    "text": "{name}仰起头叫了一声，林子里应声又爬出来两只，头一个扑的就是离她最近的人。"
   },
   {
    "name": "血雾",
    "dmg": "4d8",
    "type": "necrotic",
    "aoe": {
     "save": {
      "abil": "con",
      "dc": 16,
      "half": true
     }
    },
    "apply": {
     "cond": "blinded",
     "turns": 1
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6,
    "text": "{name}身上的树脂纹一道道裂开，喷出了一大片红雾。"
   }
  ]
 },
 "stone_votary": {
  "id": "stone_votary",
  "name": "守誓石像",
  "type": "construct",
  "level": 8,
  "immune": [
   "poison",
   "psychic"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep",
   "paralyzed"
  ],
  "desc": "壁画神殿门口的石像，全靠石头和法术撑着，里头并没有机括。它会用一种谁也不会说的话问你一句，你答不上来，就得挨它一下。",
  "hp": 100,
  "ac": 18,
  "init": -1,
  "saves": {
   "str": 5,
   "dex": -1,
   "con": 5,
   "int": 0,
   "wis": 2,
   "cha": 0
  },
  "xp": 700,
  "ai": "brute",
  "resist": [
   "slashing",
   "piercing"
  ],
  "attacks": [
   {
    "name": "石拳",
    "hit": 9,
    "dmg": "2d8+5",
    "type": "bludgeoning",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "问话",
    "dmg": "3d8",
    "type": "force",
    "aoe": {
     "save": {
      "abil": "int",
      "dc": 15,
      "half": true
     }
    },
    "recharge": 5,
    "weight": 6,
    "text": "{name}开口问了一句话，可在场的人谁也听不懂。"
   }
  ]
 },
 "mural_warden": {
  "id": "mural_warden",
  "name": "守门的",
  "type": "construct",
  "level": 10,
  "immune": [
   "poison",
   "psychic"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep",
   "paralyzed"
  ],
  "desc": "三尊石像里个头最大的一尊，有一条胳膊是后来补上去的，补的人手艺实在不怎么样，不过它只要见到断权杖，就会停手。",
  "hp": 380,
  "ac": 19,
  "init": -1,
  "saves": {
   "str": 6,
   "dex": -1,
   "con": 6,
   "int": 0,
   "wis": 3,
   "cha": 0
  },
  "xp": 3600,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "resist": [
   "slashing",
   "piercing"
  ],
  "attacks": [
   {
    "name": "石臂",
    "hit": 11,
    "dmg": "2d10+6",
    "type": "bludgeoning",
    "multi": 3,
    "weight": 3
   },
   {
    "name": "天幕",
    "dmg": "4d10",
    "type": "force",
    "aoe": {
     "save": {
      "abil": "str",
      "dc": 17,
      "half": true
     }
    },
    "apply": {
     "cond": "prone",
     "turns": 1
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6,
    "text": "{name}把后补的那条胳膊举过了头顶，整间大厅的顶就跟着压了下来。"
   },
   {
    "name": "一臂挡",
    "buff": {
     "cond": "shielded",
     "turns": 2
    },
    "uses": 2,
    "text": "{name}抬起那条完好的胳膊，挡在了身前。"
   }
  ]
 },
 "morningstar_bravo": {
  "id": "morningstar_bravo",
  "name": "晨星会的刀手",
  "type": "humanoid",
  "level": 8,
  "desc": "世家养着的打手，都是过过血门礼的。同伴每倒下一个，他就往前多站一步。",
  "hp": 110,
  "ac": 16,
  "init": 3,
  "saves": {
   "str": 2,
   "dex": 4,
   "con": 3,
   "int": 1,
   "wis": 1,
   "cha": 1
  },
  "xp": 700,
  "ai": "cunning",
  "attacks": [
   {
    "name": "短剑",
    "hit": 9,
    "dmg": "2d8+5",
    "type": "piercing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "下黑手",
    "hit": 9,
    "dmg": "3d8+5",
    "type": "piercing",
    "apply": {
     "cond": "bleeding",
     "turns": 2
    },
    "recharge": 5
   }
  ]
 },
 "morningstar_elder": {
  "id": "morningstar_elder",
  "name": "晨星会的元老",
  "type": "humanoid",
  "level": 10,
  "desc": "元老会里到了夜里另拜一位的那个人，袖口上缀着鸦羽，只要当众喊出他在元老会里坐第几席，他手下的人就会散掉一半。",
  "hp": 420,
  "ac": 17,
  "init": 2,
  "saves": {
   "str": 1,
   "dex": 2,
   "con": 3,
   "int": 5,
   "wis": 4,
   "cha": 5
  },
  "xp": 3600,
  "ai": "caster",
  "traits": {
   "boss": true
  },
  "resist": [
   "necrotic"
  ],
  "condImmune": [
   "charmed",
   "frightened"
  ],
  "attacks": [
   {
    "name": "鸦头杖",
    "hit": 11,
    "dmg": "2d10+5",
    "type": "necrotic",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "鸦王的回音",
    "dmg": "5d8",
    "type": "necrotic",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 17,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6,
    "text": "{name}把袖子一抖，一团黑羽就扑了出来，碰到哪儿，哪儿就冒烟。"
   },
   {
    "name": "开价",
    "hit": 11,
    "dmg": "1d6",
    "type": "psychic",
    "apply": {
     "cond": "charmed",
     "turns": 1,
     "save": {
      "abil": "wis",
      "dc": 17
     }
    },
    "recharge": 4,
    "text": "“你要多少？”{name}问这话的时候，倒是客客气气的。"
   }
  ]
 },
 "tide_veteran": {
  "id": "tide_veteran",
  "name": "二次绿潮的老兵",
  "type": "humanoid",
  "level": 8,
  "desc": "二十八年前他们跟过杜坎森，如今又跟着他儿子，还亲眼见过一个刀枪不入的人，最后死在了卖咸鱼的摊子边上。",
  "hp": 120,
  "ac": 16,
  "init": 1,
  "saves": {
   "str": 5,
   "dex": 1,
   "con": 4,
   "int": 0,
   "wis": 2,
   "cha": 0
  },
  "xp": 700,
  "ai": "brute",
  "condImmune": [
   "frightened"
  ],
  "attacks": [
   {
    "name": "劈斧",
    "hit": 9,
    "dmg": "2d8+5",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "不退",
    "hit": 9,
    "dmg": "3d8+5",
    "type": "slashing",
    "recharge": 5,
    "text": "{name}结结实实挨了那一下，人却还站着，手里的斧子照样落了下来。"
   }
  ]
 },
 "clan_warcaller": {
  "id": "clan_warcaller",
  "name": "氏族的先锋酋长",
  "type": "humanoid",
  "level": 10,
  "desc": "古尔赞的前锋，碎剑者氏族出身。他专挑对面的兵器打，打断了一件就笑一回。",
  "hp": 440,
  "ac": 18,
  "init": 1,
  "saves": {
   "str": 6,
   "dex": 1,
   "con": 5,
   "int": 0,
   "wis": 2,
   "cha": 3
  },
  "xp": 3600,
  "ai": "brute",
  "traits": {
   "boss": true
  },
  "condImmune": [
   "frightened"
  ],
  "attacks": [
   {
    "name": "碎剑",
    "hit": 11,
    "dmg": "2d10+6",
    "type": "bludgeoning",
    "multi": 2,
    "apply": {
     "cond": "sundered",
     "turns": 1,
     "save": {
      "abil": "str",
      "dc": 17
     }
    },
    "weight": 3
   },
   {
    "name": "冲阵",
    "dmg": "4d8",
    "type": "bludgeoning",
    "aoe": {
     "save": {
      "abil": "str",
      "dc": 17,
      "half": true
     }
    },
    "apply": {
     "cond": "prone",
     "turns": 1
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6
   },
   {
    "name": "聚",
    "heal": "3d10+10",
    "uses": 1,
    "text": "{name}把断链举过头顶吼了一声，他身后的人也都跟着吼了回来。"
   },
   {
    "name": "聚拢",
    "buff": {
     "cond": "emboldened",
     "turns": 2,
     "all": true
    },
    "uses": 1
   }
  ]
 },
 "gurzan": {
  "id": "gurzan",
  "name": "古尔赞·熊心",
  "type": "humanoid",
  "level": 11,
  "desc": "四十八岁，只剩一只眼和半条胳膊，肩上披着灰吻的皮。他这一趟来就是要看看你会不会流血，真要是打输了，他也只会断一只手逃走，不会战死在这儿。",
  "hp": 520,
  "ac": 18,
  "init": 2,
  "saves": {
   "str": 6,
   "dex": 2,
   "con": 6,
   "int": 1,
   "wis": 3,
   "cha": 4
  },
  "xp": 4500,
  "ai": "brute",
  "traits": {
   "boss": true,
   "regen": 8
  },
  "condImmune": [
   "frightened",
   "charmed"
  ],
  "attacks": [
   {
    "name": "熊爪斧",
    "hit": 12,
    "dmg": "2d10+7",
    "type": "slashing",
    "multi": 3,
    "weight": 3
   },
   {
    "name": "我父亲的日子",
    "dmg": "4d10",
    "type": "psychic",
    "aoe": {
     "save": {
      "abil": "wis",
      "dc": 18,
      "half": true
     }
    },
    "apply": {
     "cond": "frightened",
     "turns": 2
    },
    "recharge": 5,
    "minRound": 2,
    "weight": 6,
    "text": "“今天是我父亲的日子。”{name}这句话刚说完，他身后的人就一齐敲起了盾。"
   },
   {
    "name": "熊心",
    "buff": {
     "cond": "emboldened",
     "turns": 3
    },
    "uses": 1,
    "minRound": 3
   }
  ]
 },
 "laurens": {
  "id": "laurens",
  "name": "洛朗·西尔·普拉斯",
  "type": "humanoid",
  "level": 11,
  "desc": "剑之誓约的头领，是个法师骑士，腰上挂着一排魂罐，照他自己的说法，他跟你们算是同行，只不过比你们多走了一步。",
  "hp": 480,
  "ac": 18,
  "init": 2,
  "saves": {
   "str": 3,
   "dex": 2,
   "con": 4,
   "int": 6,
   "wis": 4,
   "cha": 3
  },
  "xp": 4500,
  "ai": "caster",
  "traits": {
   "boss": true
  },
  "resist": [
   "necrotic",
   "psychic"
  ],
  "condImmune": [
   "frightened",
   "charmed"
  ],
  "attacks": [
   {
    "name": "誓约之剑",
    "hit": 12,
    "dmg": "2d10+6",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "撕开",
    "hit": 12,
    "dmg": "4d10",
    "type": "psychic",
    "apply": {
     "cond": "dazed",
     "turns": 1,
     "save": {
      "abil": "int",
      "dc": 18
     }
    },
    "recharge": 4,
    "weight": 5,
    "text": "{name}伸手按住了你的额头，接着你就听见自己说出了一句实话。"
   },
   {
    "name": "开罐",
    "dmg": "6d8",
    "type": "necrotic",
    "aoe": {
     "save": {
      "abil": "con",
      "dc": 18,
      "half": true
     }
    },
    "uses": 2,
    "minRound": 2,
    "weight": 7,
    "text": "{name}拍开了一只罐子上的封蜡，里头的东西吼叫着冲了出来。"
   }
  ]
 },
 "arosha": {
  "id": "arosha",
  "name": "阿罗莎·伐橡者",
  "type": "humanoid",
  "level": 10,
  "desc": "混眼氏族的酋长，早先是科琳之环的人。碰上大个子，她下手比砍谁都重。",
  "hp": 150,
  "ac": 17,
  "init": 1,
  "saves": {
   "str": 6,
   "dex": 1,
   "con": 5,
   "int": 0,
   "wis": 3,
   "cha": 2
  },
  "xp": 1200,
  "ai": "brute",
  "attacks": [
   {
    "name": "伐橡斧",
    "hit": 11,
    "dmg": "2d10+6",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "伐橡",
    "hit": 11,
    "dmg": "4d10+6",
    "type": "slashing",
    "recharge": 4,
    "text": "{name}双手抡起斧子，照着最粗的那一根就砍了下去。"
   }
  ]
 },
 "bluetusk": {
  "id": "bluetusk",
  "name": "洛萨恩·蓝牙",
  "type": "humanoid",
  "level": 10,
  "desc": "四十七岁的半兽人，科琳塔尔的大团长，左边獠牙上系着一截蓝布。跟你做对手的时候，他只打到你倒地为止。",
  "hp": 160,
  "ac": 19,
  "init": 1,
  "saves": {
   "str": 5,
   "dex": 1,
   "con": 5,
   "int": 1,
   "wis": 3,
   "cha": 3
  },
  "xp": 1200,
  "ai": "brute",
  "condImmune": [
   "frightened"
  ],
  "attacks": [
   {
    "name": "长剑",
    "hit": 11,
    "dmg": "2d8+6",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "盾在前",
    "buff": {
     "cond": "shielded",
     "turns": 2,
     "all": true
    },
    "uses": 2,
    "text": "{name}把盾往前一顶，身边的人就全都缩到盾后头去了。"
   },
   {
    "name": "盾击",
    "hit": 11,
    "dmg": "2d6+6",
    "type": "bludgeoning",
    "apply": {
     "cond": "prone",
     "turns": 1,
     "save": {
      "abil": "str",
      "dc": 17
     }
    },
    "recharge": 5
   }
  ]
 }
};
