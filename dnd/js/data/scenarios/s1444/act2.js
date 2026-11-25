// s1444 act2.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "a2_01": {
    "id": "a2_01",
    "title": "五年以后，狼门",
    "chapter": "第二幕 · 再没人见过的矮人",
    "art": "ev_cave",
    "loc": "蛇脊山脉西麓 · 玛瑙之门外",
    "date": "1450年春",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +garaele"
    ],
    "next": "a2_02"
  },
  "a2_02": {
    "id": "a2_02",
    "title": "四十四页的约",
    "art": "ev_cave",
    "loc": "玛瑙之门 · 阿斯拉探险队的营地",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','rogue','wizard','paladin','ranger','artificer']",
        "then": [
          "flag khug_goblins_out"
        ]
      },
      {
        "if": "class in ['sorcerer','warlock','bard']",
        "then": [
          "flag khug_goblins_lease"
        ]
      }
    ],
    "next": "a2_03"
  },
  "a2_03": {
    "id": "a2_03",
    "title": "三百一十二条",
    "loc": "玛瑙之门 · 闸口",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +belgrak",
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag entry_313"
        ]
      }
    ],
    "next": "a2_04"
  },
  "a2_04": {
    "id": "a2_04",
    "title": "备远征",
    "loc": "玛瑙之门 · 营地（枢纽）",
    "text": [
      "（待写）"
    ],
    "next": "a2_05"
  },
  "a2_05": {
    "id": "a2_05",
    "title": "死铁道",
    "art": "ev_dwarven_rail",
    "loc": "矮人之路 · 头三段",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag rail_bones"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag rail_woken"
        ]
      }
    ],
    "next": "a2_06"
  },
  "a2_06": {
    "id": "a2_06",
    "title": "交轨大厅的过路费",
    "loc": "交轨大厅 · 转车台",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag rail_contract"
        ]
      }
    ],
    "next": "a2_07"
  },
  "a2_07": {
    "id": "a2_07",
    "title": "蘑菇宴",
    "art": "ev_fungrum",
    "loc": "交轨大厅 · 地精的灶间（或铁道边的冷营）",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag brack_bought"
        ]
      }
    ],
    "next": "a2_08"
  },
  "a2_08": {
    "id": "a2_08",
    "title": "勘测营",
    "art": "ev_dark_expedition",
    "loc": "乔卡德枢纽以西 · 一处泵房",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag lied_to_garaele"
        ]
      }
    ],
    "next": "a2_09"
  },
  "a2_09": {
    "id": "a2_09",
    "title": "两口子的葬礼",
    "loc": "同上",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag parents_buried_deep"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag parents_carried"
        ]
      }
    ],
    "next": "a2_10"
  },
  "a2_10": {
    "id": "a2_10",
    "title": "兵团分家",
    "loc": "乔卡德枢纽 · 旧站台",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag company_whole"
        ]
      }
    ],
    "next": "a2_11"
  },
  "a2_11": {
    "id": "a2_11",
    "title": "乔卡德枢纽的手摇车",
    "art": "ev_dark_expedition",
    "loc": "乔卡德枢纽 · 下行线",
    "text": [
      "（待写）"
    ],
    "next": "a2_12"
  },
  "a2_12": {
    "id": "a2_12",
    "title": "竖井口",
    "loc": "胡尔-乔卡德 · 通往最底层的竖井口",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag castellar_seen",
      "flag dookanil_known",
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag god_opened_shaft"
        ]
      }
    ],
    "next": "a2_13"
  },
  "a2_13": {
    "id": "a2_13",
    "title": "铅闸",
    "loc": "胡尔-乔卡德 · 上层闸口",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag brok_lives"
        ]
      }
    ],
    "next": "a2_14"
  },
  "a2_14": {
    "id": "a2_14",
    "title": "贝尔格拉克的名单",
    "art": "load_18",
    "loc": "闸口内侧 · 当夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['wizard','ranger']",
        "then": [
          "flag belgrak_lost"
        ]
      },
      {
        "if": "class in ['fighter','barbarian','sorcerer','warlock','druid','bard','paladin']",
        "then": [
          "flag belgrak_saved"
        ]
      },
      {
        "if": "class in ['rogue','monk','cleric','artificer']",
        "then": [
          "flag belgrak_struck"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag belgrak_struck_by_god"
        ]
      }
    ],
    "next": "a2_15"
  },
  "a2_15": {
    "id": "a2_15",
    "title": "往深处",
    "loc": "中矮人之地 · 一条没有名字的支线",
    "text": [
      "（待写）"
    ],
    "next": "a2_16"
  },
  "a2_16": {
    "id": "a2_16",
    "title": "数目对得上",
    "art": "ev_dwarven_rail",
    "loc": "矮人之路 · 回程",
    "text": [
      "（待写）"
    ],
    "next": "a2_17"
  },
  "a2_17": {
    "id": "a2_17",
    "title": "山里的话带不带出去",
    "loc": "玛瑙之门 · 闸口外",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag dookanil_told"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag dookanil_mocked"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag names_filed"
        ]
      },
      {
        "if": "class in ['fighter','wizard','warlock','druid','bard','paladin','ranger','artificer']",
        "then": [
          "flag notebook_order"
        ]
      },
      {
        "if": "class in ['rogue','monk']",
        "then": [
          "flag notebook_kept"
        ]
      },
      {
        "if": "class in ['barbarian','sorcerer','cleric']",
        "then": [
          "flag notebook_sold"
        ]
      }
    ],
    "next": "a2_18"
  },
  "a2_18": {
    "id": "a2_18",
    "title": "出山",
    "loc": "玛瑙之门外",
    "date": "1450年秋",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 6",
      "companion -belgrak"
    ],
    "next": "a3_01"
  }
};
