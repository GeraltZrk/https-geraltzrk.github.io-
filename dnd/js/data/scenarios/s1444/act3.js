// s1444 act3.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "a3_01": {
    "id": "a3_01",
    "title": "一匣子没寄出的信",
    "chapter": "第三幕 · 郁金香底下的大公",
    "art": "ev_lilac_wars",
    "loc": "卡斯托纳斯 · 门板桌",
    "date": "1451年秋",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag creed_carried"
        ]
      }
    ],
    "next": "a3_02"
  },
  "a3_02": {
    "id": "a3_02",
    "title": "倒着走的难民路",
    "loc": "阿巴兰 · 弗里塞斯提尔一带",
    "date": "1451年秋",
    "text": [
      "（待写）"
    ],
    "next": "a3_03"
  },
  "a3_03": {
    "id": "a3_03",
    "title": "目前可靠",
    "loc": "阿巴兰边上的一间驿站",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag tilda_with"
        ]
      }
    ],
    "next": "a3_04"
  },
  "a3_04": {
    "id": "a3_04",
    "title": "荆月船会",
    "loc": "埃斯玛利亚 · 一条游船",
    "text": [
      "（待写）"
    ],
    "next": "a3_05"
  },
  "a3_05": {
    "id": "a3_05",
    "title": "管仓的人",
    "loc": "阿德蕾西娅堡",
    "text": [
      "（待写）"
    ],
    "next": "a3_06"
  },
  "a3_06": {
    "id": "a3_06",
    "title": "世人所欲之城",
    "art": "ev_far_and_wide",
    "loc": "安本科斯特（枢纽）",
    "date": "1451年冬",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag creed_delivered"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag bilge_graves"
        ]
      }
    ],
    "next": "a3_07"
  },
  "a3_07": {
    "id": "a3_07",
    "title": "姑祖母",
    "art": "ck3_landing",
    "loc": "安本科斯特 · 精灵码头 · 一座搁浅的方舟上的宅子",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag log_read"
    ],
    "next": "a3_08"
  },
  "a3_08": {
    "id": "a3_08",
    "title": "封册",
    "art": "ev_female_spy",
    "loc": "精灵码头 · 次日清晨",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer']",
        "then": [
          "flag log_copied"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag log_stolen"
        ]
      },
      {
        "if": "class in ['warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag log_filed"
        ]
      },
      "flag bearing_known"
    ],
    "next": "a3_09"
  },
  "a3_09": {
    "id": "a3_09",
    "title": "挖坑的人",
    "loc": "安本科斯特 · 锻炉街的一间酒馆",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag digger_talked"
        ]
      },
      {
        "if": "class in ['barbarian','rogue']",
        "then": [
          "flag digger_safe"
        ]
      },
      {
        "if": "class in ['fighter','cleric','bard','paladin']",
        "then": [
          "flag digger_given"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag tilda_blindsided"
        ]
      }
    ],
    "next": "a3_10"
  },
  "a3_10": {
    "id": "a3_10",
    "title": "想事情的人",
    "art": "ev_hre",
    "loc": "安本科斯特 · 帝国区 · 威克斯的公事房",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag clan_charter"
        ]
      }
    ],
    "next": "a3_11"
  },
  "a3_11": {
    "id": "a3_11",
    "title": "皇宫花园，夜里",
    "loc": "安本科斯特 · 帝国皇宫 · 庆典前夜",
    "date": "1452年花始月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag garden_alarm"
        ]
      },
      "flag wound_seen"
    ],
    "next": "a3_12"
  },
  "a3_12": {
    "id": "a3_12",
    "title": "那个窟窿",
    "loc": "城外 · 德利安备下的一间仓房 · 当夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag daras_seen"
        ]
      }
    ],
    "next": "a3_13"
  },
  "a3_13": {
    "id": "a3_13",
    "title": "三十年庆典",
    "art": "load_21",
    "loc": "帝国皇宫 · 大厅",
    "date": "1452年花始月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag empress_saved"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag daras_fled"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag god_sided_throne"
        ]
      }
    ],
    "next": "a3_14"
  },
  "a3_14": {
    "id": "a3_14",
    "title": "证据给谁",
    "loc": "安本科斯特 · 庆典之后的三天",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag proof_bardswood"
        ]
      },
      {
        "if": "class in []",
        "then": [
          "flag proof_moon"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer']",
        "then": [
          "flag proof_published"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag proof_kept"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag rogier_pardoned"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag emperor_duel_won"
        ]
      },
      {
        "if": "class in ['monk','warlock','cleric']",
        "then": [
          "flag tilda_true"
        ]
      },
      {
        "if": "class in ['barbarian','wizard','druid','ranger']",
        "then": [
          "flag tilda_false"
        ]
      },
      {
        "if": "class in ['fighter','rogue','sorcerer','bard','paladin','artificer']",
        "then": [
          "flag tilda_burned"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_duel_emperor"
        ]
      }
    ],
    "next": "a3_15"
  },
  "a3_15": {
    "id": "a3_15",
    "title": "没有船",
    "art": "ev_anb_global_trade",
    "loc": "精灵码头 · 栈桥尽头",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag door_letter_sent"
    ],
    "next": "a3_16"
  },
  "a3_16": {
    "id": "a3_16",
    "title": "大公埋哪儿",
    "art": "ev_excalibur",
    "loc": "月神之耳的一处坡地（或东去的路上） · 花始月的月夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['monk','wizard','sorcerer','cleric']",
        "then": [
          "flag adenn_damesear"
        ]
      },
      {
        "if": "class in ['fighter','barbarian','druid','paladin','ranger']",
        "then": [
          "flag adenn_rogier"
        ]
      },
      {
        "if": "class in ['rogue','warlock','bard','artificer']",
        "then": [
          "flag adenn_left"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag urn_buried"
        ]
      }
    ],
    "next": "a3_17"
  },
  "a3_17": {
    "id": "a3_17",
    "title": "写给死人的信",
    "loc": "阿德蕾西娅堡外的路口",
    "text": [
      "（待写）"
    ],
    "next": "a3_18"
  },
  "a3_18": {
    "id": "a3_18",
    "title": "九个冬天",
    "loc": "东归的路上",
    "date": "1452年花始月末",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 8"
    ],
    "next": "a4_01"
  }
};
