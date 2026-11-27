// s1022 / enemies.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const ENEMIES = {
 "melcor_handler": {
  "id": "melcor_handler",
  "name": "驯师梅尔科尔",
  "en": "Melcor the Handler",
  "type": "humanoid",
  "level": 4,
  "era": [
   1022
  ],
  "desc": "亚科布早年收的学生，人很瘦，说话时像在点名。他自己从不动手，只念口令，让受慑的人冲上去。被人打断了，他就咳嗽两声，咳完接着往下念。",
  "hp": 70,
  "ac": 14,
  "init": 2,
  "saves": {
   "str": 0,
   "dex": 2,
   "con": 1,
   "int": 4,
   "wis": 2,
   "cha": 3
  },
  "ai": "caster",
  "traits": {
   "boss": true
  },
  "xp": 420,
  "attacks": [
   {
    "name": "袖里的短刀",
    "hit": 6,
    "dmg": "1d6+3",
    "type": "piercing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "旧口令",
    "dmg": "1d6",
    "type": "psychic",
    "apply": {
     "cond": "charmed",
     "turns": 1,
     "save": {
      "abil": "wis",
      "dc": 13
     }
    },
    "recharge": 4,
    "weight": 3,
    "text": "{name}念了半句军中的旧口令，你身边就有人垂下了手里的兵器。"
   },
   {
    "name": "起身",
    "buff": {
     "cond": "emboldened",
     "turns": 2,
     "all": true
    },
    "uses": 1,
    "text": "{name}拍了两下手，喊了声“起身”，他身后的人一齐站得笔直。"
   },
   {
    "name": "刺耳的点名",
    "dmg": "2d6",
    "type": "psychic",
    "aoe": {
     "save": {
      "abil": "wis",
      "dc": 13,
      "half": true
     }
    },
    "recharge": 6,
    "minRound": 2
   }
  ]
 },
 "headman_wolf": {
  "id": "headman_wolf",
  "name": "头领林地的老狼",
  "en": "Old Wolf of the Headman's Wood",
  "type": "monstrosity",
  "level": 6,
  "era": [
   1022
  ],
  "desc": "头领林地那群狼人的头领，嘴边的毛已经全白了。他认得卡斯塔诺的军团牌，谁身上戴着牌子，他就先咬谁。",
  "hp": 130,
  "ac": 15,
  "init": 3,
  "saves": {
   "str": 5,
   "dex": 3,
   "con": 4,
   "int": 0,
   "wis": 2,
   "cha": 0
  },
  "ai": "cunning",
  "resist": [
   "slashing",
   "piercing"
  ],
  "traits": {
   "boss": true,
   "regen": 4
  },
  "xp": 1000,
  "attacks": [
   {
    "name": "爪",
    "hit": 7,
    "dmg": "2d6+3",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "认牌",
    "hit": 7,
    "dmg": "2d8+3",
    "type": "piercing",
    "extra": {
     "dmg": "1d8",
     "type": "piercing"
    },
    "apply": {
     "cond": "bleeding",
     "turns": 3
    },
    "recharge": 4,
    "text": "{name}凑到面前嗅了嗅，张开嘴，一口就咬在了挂牌子的地方。"
   },
   {
    "name": "号",
    "buff": {
     "cond": "emboldened",
     "turns": 2,
     "all": true
    },
    "uses": 2,
    "text": "{name}仰起头来一声长号，林子里四面八方都有狼应声。"
   },
   {
    "name": "扑倒",
    "hit": 7,
    "dmg": "2d6+3",
    "type": "bludgeoning",
    "apply": {
     "cond": "prone",
     "turns": 1,
     "save": {
      "abil": "str",
      "dc": 15
     }
    },
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 15,
      "half": true
     }
    },
    "recharge": 6,
    "minRound": 2
   }
  ]
 },
 "trial_golem": {
  "id": "trial_golem",
  "name": "第九道试炼的石像",
  "en": "Golem of the Ninth Trial",
  "type": "construct",
  "level": 8,
  "era": [
   1022
  ],
  "desc": "巨人克星卡斯坦当年立下的石像，脖子上没有头，头夹在它自己腋下。规矩是缴了它的械就算过关。把它打碎不算赢，到了明天，它照样站在原地。",
  "hp": 210,
  "ac": 17,
  "init": -1,
  "saves": {
   "str": 7,
   "dex": -1,
   "con": 6,
   "int": -3,
   "wis": 0,
   "cha": -3
  },
  "ai": "brute",
  "immune": [
   "poison",
   "psychic"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep",
   "stunned",
   "paralyzed"
  ],
  "resist": [
   "slashing",
   "piercing"
  ],
  "traits": {
   "boss": true
  },
  "xp": 2100,
  "attacks": [
   {
    "name": "门板剑",
    "hit": 9,
    "dmg": "2d8+5",
    "type": "slashing",
    "multi": 2,
    "weight": 3,
    "text": "{name}把那柄门板一样宽的剑抡了整整一圈。"
   },
   {
    "name": "横扫",
    "dmg": "4d8",
    "type": "bludgeoning",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 16,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "text": "剑身贴着石阶横扫过来，扫到哪里，哪里就碎石乱飞。"
   },
   {
    "name": "拿头撞",
    "hit": 9,
    "dmg": "2d10+5",
    "type": "bludgeoning",
    "apply": {
     "cond": "dazed",
     "turns": 1,
     "save": {
      "abil": "con",
      "dc": 15
     }
    },
    "recharge": 5
   }
  ]
 },
 "wereraven_seer": {
  "id": "wereraven_seer",
  "name": "渡鸦人先知",
  "en": "Wereraven Seer",
  "type": "humanoid",
  "level": 7,
  "era": [
   1022
  ],
  "desc": "先知会内圈的老人，有一只眼是假的。还没动手，这一架他就已经预见过一遍了，所以第一下总是打不着他。要等屋里那盆水打翻了，他才看不准。",
  "hp": 90,
  "ac": 15,
  "init": 4,
  "saves": {
   "str": 0,
   "dex": 4,
   "con": 2,
   "int": 4,
   "wis": 6,
   "cha": 2
  },
  "ai": "cunning",
  "condImmune": [
   "frightened"
  ],
  "xp": 650,
  "attacks": [
   {
    "name": "鸦喙杖",
    "hit": 7,
    "dmg": "2d6+3",
    "type": "piercing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "预读",
    "buff": {
     "cond": "blurred",
     "turns": 2
    },
    "uses": 2,
    "text": "{name}盯着你的手，你还没动，他已经先往旁边让开了。"
   },
   {
    "name": "啄眼",
    "hit": 7,
    "dmg": "1d8+3",
    "type": "piercing",
    "apply": {
     "cond": "blinded",
     "turns": 1,
     "save": {
      "abil": "con",
      "dc": 15
     }
    },
    "recharge": 4
   },
   {
    "name": "散成一群",
    "dmg": "3d6",
    "type": "slashing",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 15,
      "half": true
     }
    },
    "recharge": 6,
    "minRound": 2,
    "text": "{name}一下散成了一群渡鸦，翅膀劈头盖脸地朝你们扑过来。"
   }
  ]
 },
 "corseted_dead": {
  "id": "corseted_dead",
  "name": "束腰的死人",
  "en": "Corseted Dead",
  "type": "undead",
  "level": 5,
  "era": [
   1022
  ],
  "desc": "从大墓地的壁龛里走出来的行尸，被束腰勒得笔直。两具挨在一起，下手就更准。可是束腰一断，整个人就散了架。",
  "hp": 52,
  "ac": 14,
  "init": 0,
  "saves": {
   "str": 3,
   "dex": 0,
   "con": 4,
   "int": -3,
   "wis": 0,
   "cha": -3
  },
  "ai": "brute",
  "immune": [
   "poison"
  ],
  "resist": [
   "piercing",
   "necrotic"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep"
  ],
  "traits": {
   "packTactics": true
  },
  "xp": 260,
  "attacks": [
   {
    "name": "僵直的手",
    "hit": 6,
    "dmg": "2d6+3",
    "type": "bludgeoning",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "勒住",
    "hit": 6,
    "dmg": "1d8+3",
    "type": "bludgeoning",
    "apply": {
     "cond": "restrained",
     "turns": 1,
     "save": {
      "abil": "str",
      "dc": 14
     }
    },
    "recharge": 5,
    "text": "{name}直挺挺地扑了上来，两条胳膊把你箍得死死的。"
   }
  ]
 },
 "edmund_palehand": {
  "id": "edmund_palehand",
  "name": "埃德蒙·苍手",
  "en": "Edmund Palehand",
  "type": "undead",
  "level": 10,
  "era": [
   1022
  ],
  "desc": "他是个死亡骑士，生前是凯伦的至交。面甲从来不抬，规矩也一样没丢：人倒在地上了，他就不再补刀。要是有人对他行蓝宝石之眼的旧礼，他就只跟那个人打。",
  "hp": 320,
  "ac": 19,
  "init": 1,
  "saves": {
   "str": 7,
   "dex": 1,
   "con": 6,
   "int": 2,
   "wis": 4,
   "cha": 5
  },
  "ai": "brute",
  "immune": [
   "poison"
  ],
  "resist": [
   "necrotic",
   "cold"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep"
  ],
  "traits": {
   "boss": true
  },
  "xp": 4200,
  "attacks": [
   {
    "name": "骑枪",
    "hit": 10,
    "dmg": "2d10+5",
    "type": "piercing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "冲阵",
    "dmg": "6d8",
    "type": "piercing",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 17,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "text": "{name}往后退开十步，把枪尖压低，笔直地朝你们冲了过来。"
   },
   {
    "name": "受礼",
    "buff": {
     "cond": "steadfast",
     "turns": 3
    },
    "uses": 1,
    "text": "{name}把枪竖了起来，等着你向他行礼。"
   },
   {
    "name": "盾击",
    "hit": 10,
    "dmg": "2d8+5",
    "type": "bludgeoning",
    "apply": {
     "cond": "prone",
     "turns": 1,
     "save": {
      "abil": "str",
      "dc": 17
     }
    },
    "recharge": 4
   }
  ]
 },
 "pyre_captain": {
  "id": "pyre_captain",
  "name": "沼地的火刑队长",
  "en": "Pyre Captain of the Dreadmire",
  "type": "humanoid",
  "level": 8,
  "era": [
   1022
  ],
  "desc": "瘟疫那些年自己给自己立了规矩的圣武士，嘴上挂的全是凯伦的话，烧起法师来数他最狠。蓝宝石之眼的人说，凯伦的话他都念歪了。",
  "hp": 180,
  "ac": 18,
  "init": 0,
  "saves": {
   "str": 5,
   "dex": 0,
   "con": 4,
   "int": 0,
   "wis": 3,
   "cha": 5
  },
  "ai": "brute",
  "condImmune": [
   "frightened",
   "charmed"
  ],
  "traits": {
   "boss": true
  },
  "xp": 1900,
  "attacks": [
   {
    "name": "长剑",
    "hit": 9,
    "dmg": "2d8+4",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "净火",
    "dmg": "5d8",
    "type": "fire",
    "aoe": {
     "save": {
      "abil": "dex",
      "dc": 16,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "text": "{name}把火把往柴堆上一按，火舌顺着泥水就窜了过来。"
   },
   {
    "name": "引经",
    "dmg": "1d8",
    "type": "psychic",
    "apply": {
     "cond": "dazed",
     "turns": 1,
     "save": {
      "abil": "cha",
      "dc": 16
     }
    },
    "recharge": 4,
    "text": "{name}大声念了一句凯伦的话，只不过后半句是他自己添的。"
   },
   {
    "name": "祷告",
    "heal": "3d8+4",
    "uses": 1
   }
  ]
 },
 "arrel_revenant": {
  "id": "arrel_revenant",
  "name": "“遭叛者”阿雷尔二世",
  "en": "Arrel II the Betrayed (revenant)",
  "type": "undead",
  "level": 9,
  "era": [
   1022
  ],
  "desc": "达梅里亚的国王，994 年战死以后就落到了坎雷克手上。王冠还戴在头上，背后挨的那一刀，口子也还在。谁想从他身边绕过去，他就先对谁出手。只有听见孙子叫他，他才会停一停。",
  "hp": 260,
  "ac": 18,
  "init": 1,
  "saves": {
   "str": 6,
   "dex": 1,
   "con": 5,
   "int": 2,
   "wis": 4,
   "cha": 5
  },
  "ai": "brute",
  "immune": [
   "poison"
  ],
  "resist": [
   "necrotic",
   "cold"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep"
  ],
  "traits": {
   "boss": true
  },
  "xp": 3200,
  "attacks": [
   {
    "name": "王剑",
    "hit": 10,
    "dmg": "2d10+5",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "断后",
    "hit": 10,
    "dmg": "3d10+5",
    "type": "slashing",
    "recharge": 4,
    "text": "{name}横着跨出一步，把通往里门的路挡住了。"
   },
   {
    "name": "王命",
    "dmg": "2d8",
    "type": "psychic",
    "aoe": {
     "save": {
      "abil": "wis",
      "dc": 17,
      "half": true
     }
    },
    "apply": {
     "cond": "frightened",
     "turns": 2,
     "save": {
      "abil": "wis",
      "dc": 17
     }
    },
    "recharge": 6,
    "minRound": 2,
    "text": "{name}开口了，用的还是六十年前的宫廷话：“退下。”"
   }
  ]
 },
 "castan_liii_revenant": {
  "id": "castan_liii_revenant",
  "name": "卡斯坦五十三世",
  "en": "Castan LIII the Enthralled (revenant)",
  "type": "undead",
  "level": 10,
  "era": [
   1022
  ],
  "desc": "他的遗体一直没人好好安葬，这才被坎雷克取走，坐到了坎雷克的左边。他起身起得很慢。活着时，他下的最后一道令是放下兵器，如今死了，这道令他还在下。军团牌他是认得的。",
  "hp": 300,
  "ac": 18,
  "init": -1,
  "saves": {
   "str": 7,
   "dex": 0,
   "con": 6,
   "int": 2,
   "wis": 5,
   "cha": 6
  },
  "ai": "brute",
  "immune": [
   "poison"
  ],
  "resist": [
   "necrotic",
   "cold"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep"
  ],
  "traits": {
   "boss": true
  },
  "xp": 4000,
  "attacks": [
   {
    "name": "乌钢剑",
    "hit": 10,
    "dmg": "2d10+5",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "放下兵器",
    "dmg": "2d6",
    "type": "psychic",
    "aoe": {
     "save": {
      "abil": "wis",
      "dc": 17,
      "half": true
     }
    },
    "apply": {
     "cond": "dazed",
     "turns": 1,
     "save": {
      "abil": "wis",
      "dc": 17
     }
    },
    "recharge": 5,
    "minRound": 2,
    "text": "{name}抬起了一只手。你们还没来得及想，握兵器的手就先松了一下。"
   },
   {
    "name": "皇帝的重击",
    "hit": 10,
    "dmg": "3d10+5",
    "type": "slashing",
    "recharge": 5
   }
  ]
 },
 "bridled_emperor": {
  "id": "bridled_emperor",
  "name": "被牵的皇帝",
  "en": "The Bridled Emperor",
  "type": "humanoid",
  "level": 10,
  "era": [
   1022
  ],
  "desc": "他的身子被别人牵着，两只脚不听他自己使唤。把他打倒，也就是把他杀了。",
  "hp": 260,
  "ac": 18,
  "init": 2,
  "saves": {
   "str": 6,
   "dex": 3,
   "con": 5,
   "int": 2,
   "wis": 2,
   "cha": 5
  },
  "ai": "brute",
  "condImmune": [
   "frightened",
   "charmed"
  ],
  "traits": {
   "boss": true
  },
  "xp": 3600,
  "attacks": [
   {
    "name": "帝剑",
    "hit": 10,
    "dmg": "2d10+5",
    "type": "slashing",
    "multi": 2,
    "weight": 3
   },
   {
    "name": "誓火",
    "dmg": "5d8",
    "type": "radiant",
    "aoe": {
     "save": {
      "abil": "con",
      "dc": 17,
      "half": true
     }
    },
    "recharge": 5,
    "minRound": 2,
    "text": "{name}胸口烙的那道誓词亮了一下，烫得周围的人纷纷往后退。"
   },
   {
    "name": "照令行事",
    "buff": {
     "cond": "emboldened",
     "turns": 2
    },
    "uses": 2,
    "text": "{name}的嘴动了动，可说出来的并不是他自己的话。"
   }
  ]
 },
 "canrec_lich": {
  "id": "canrec_lich",
  "name": "亵渎者坎雷克",
  "en": "Canrec the Defiler",
  "type": "undead",
  "level": 12,
  "era": [
   1022
  ],
  "desc": "一个学究气的巫妖，一边打，还要一边跟你讲道理。他转魂的时候出了点岔子，从此后脑勺老是发痒。他倒下了事情也不算完：书还摆在桌上，得有人去撕他那一页，撕的人要拿命去换。",
  "hp": 400,
  "ac": 18,
  "init": 3,
  "saves": {
   "str": 1,
   "dex": 3,
   "con": 6,
   "int": 9,
   "wis": 7,
   "cha": 5
  },
  "ai": "caster",
  "immune": [
   "poison",
   "necrotic"
  ],
  "resist": [
   "cold",
   "lightning"
  ],
  "condImmune": [
   "poisoned",
   "frightened",
   "charmed",
   "asleep",
   "paralyzed",
   "stunned"
  ],
  "traits": {
   "boss": true
  },
  "xp": 9000,
  "attacks": [
   {
    "name": "死灵射线",
    "hit": 11,
    "dmg": "4d10",
    "type": "necrotic",
    "multi": 2,
    "weight": 3,
    "text": "{name}嘴里的话没停，手已经抬起来，就像在黑板上点出一个错字。"
   },
   {
    "name": "点名",
    "dmg": "6d8",
    "type": "necrotic",
    "aoe": {
     "save": {
      "abil": "wis",
      "dc": 18,
      "half": true
     }
    },
    "apply": {
     "cond": "frightened",
     "turns": 2,
     "save": {
      "abil": "wis",
      "dc": 18
     }
    },
    "recharge": 5,
    "minRound": 2,
    "text": "{name}翻开书念了一个名字，书页里面真有人应了一声。"
   },
   {
    "name": "冷手",
    "hit": 11,
    "dmg": "3d8+5",
    "type": "cold",
    "lifesteal": true,
    "recharge": 4
   },
   {
    "name": "那个字",
    "dmg": "3d10",
    "type": "psychic",
    "apply": {
     "cond": "stunned",
     "turns": 1,
     "save": {
      "abil": "wis",
      "dc": 18
     }
    },
    "recharge": 6,
    "minRound": 3,
    "text": "{name}只说了一个字，烛火就全朝同一边倒了过去。"
   },
   {
    "name": "翻回前一页",
    "heal": "6d8+10",
    "uses": 1
   }
  ]
 }
};
