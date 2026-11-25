// 第三幕《白年》，含间幕《十六年》（BIBLE §11.4）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 act3.js
export const SCENES = {
  a3_01: {
    "id": "a3_01",
    "title": "十六年",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）十六年：在古塔办“守望”",
        "goto": "a3_02",
        "effects": [
          "flag years_watch"
        ]
      },
      {
        "text": "（骨架）十六年：回本国当差",
        "goto": "a3_02",
        "effects": [
          "flag years_court"
        ]
      },
      {
        "text": "（骨架）十六年：带大被监护的孩子",
        "goto": "a3_02",
        "effects": [
          "flag years_wards"
        ]
      },
      {
        "text": "（骨架）十六年：跟着收殓人埋人",
        "goto": "a3_02",
        "effects": [
          "flag years_graves"
        ]
      }
    ]
  },
  a3_02: {
    "id": "a3_02",
    "title": "彗星之夜",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）彗星之夜你对伊迪丝说了实话",
        "goto": "a3_03",
        "effects": [
          "flag edith_trusts"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a3_03"
      }
    ]
  },
  a3_03: {
    "id": "a3_03",
    "title": "信",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）达梅里亚：阿雷尔王子跟着你",
        "goto": "a3_04",
        "effects": [
          "flag arrel_with_you"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a3_04"
      }
    ]
  },
  a3_04: {
    "id": "a3_04",
    "title": "渡鸦山",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest white_year start"
    ],
    "next": "a3_05"
  },
  a3_05: {
    "id": "a3_05",
    "title": "头一夜",
    "text": [
      "（待写）"
    ],
    "next": "a3_06"
  },
  a3_06: {
    "id": "a3_06",
    "title": "封不封",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）渡鸦山封了",
        "goto": "a3_07",
        "effects": [
          "flag quarantine_held"
        ]
      },
      {
        "text": "（骨架）渡鸦山放人出城",
        "goto": "a3_07",
        "effects": [
          "flag quarantine_open"
        ]
      },
      {
        "text": "（骨架）[神] 在渡鸦山治了病人",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_healed",
          "flag quarantine_held",
          "var god_acts +1"
        ],
        "goto": "a3_07"
      }
    ]
  },
  a3_07: {
    "id": "a3_07",
    "title": "城门口的两队",
    "text": [
      "（待写）"
    ],
    "next": "a3_08"
  },
  a3_08: {
    "id": "a3_08",
    "title": "鸦巢",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag knows_ravens_watched",
      "quest vezina_eye start"
    ],
    "next": "a3_09"
  },
  a3_09: {
    "id": "a3_09",
    "title": "鸦眼",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）薇齐娜受了鸦眼",
        "goto": "a3_10",
        "effects": [
          "flag vezina_eye",
          "flag cure_early",
          "flag ravens_trust",
          "quest vezina_eye done"
        ]
      },
      {
        "text": "（骨架）你拦住了薇齐娜",
        "goto": "a3_10",
        "effects": [
          "flag vezina_stopped",
          "quest vezina_eye done"
        ]
      },
      {
        "text": "（骨架）薇齐娜离队了",
        "goto": "a3_10",
        "effects": [
          "flag vezina_left",
          "companion -vezina",
          "quest vezina_eye fail"
        ]
      }
    ]
  },
  a3_10: {
    "id": "a3_10",
    "title": "海路",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）从白旗船上取过样本",
        "goto": "a3_11",
        "effects": [
          "flag plague_samples"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a3_11"
      }
    ]
  },
  a3_11: {
    "id": "a3_11",
    "title": "布勒瓦尔城",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）放了锡亚丹的鹰身女妖",
        "goto": "a3_12",
        "effects": [
          "flag harpies_freed"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a3_12"
      }
    ]
  },
  a3_12: {
    "id": "a3_12",
    "title": "太阳王的印",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）接了太阳王宫廷的条件",
        "goto": "a3_13",
        "effects": [
          "flag sun_terms"
        ]
      },
      {
        "text": "（骨架）没接太阳王宫廷的条件",
        "goto": "a3_13",
        "effects": [
          "flag sun_refused"
        ]
      },
      {
        "text": "（骨架）[神] 认下了“苏雷尔的使者”",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_herald",
          "flag sun_terms",
          "var god_acts +1"
        ],
        "goto": "a3_13"
      }
    ]
  },
  a3_13: {
    "id": "a3_13",
    "title": "大墓地第三层",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）照这条走",
        "goto": "a3_14",
        "effects": [
          "quest sixteen_graves stage 4"
        ]
      }
    ]
  },
  a3_14: {
    "id": "a3_14",
    "title": "戴伦",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）逐精灵令照准",
        "goto": "a3_15",
        "effects": [
          "flag edict_upheld",
          "companion -barry"
        ]
      },
      {
        "text": "（骨架）逐精灵令推翻",
        "goto": "a3_15",
        "effects": [
          "flag edict_overruled"
        ]
      },
      {
        "text": "（骨架）逐精灵令缓行",
        "goto": "a3_15",
        "effects": [
          "flag edict_softened",
          "companion -barry"
        ]
      }
    ]
  },
  a3_15: {
    "id": "a3_15",
    "title": "街口",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）让伊迪丝慑住了暴民",
        "goto": "a3_16",
        "effects": [
          "flag edith_mob"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a3_16"
      }
    ]
  },
  a3_16: {
    "id": "a3_16",
    "title": "瓦洛森",
    "text": [
      "（待写）"
    ],
    "next": "a3_17"
  },
  a3_17: {
    "id": "a3_17",
    "title": "怪谁",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）当众怪坎雷克",
        "goto": "a3_18",
        "effects": [
          "flag blame_canrec"
        ]
      },
      {
        "text": "（骨架）当众怪精灵",
        "goto": "a3_18",
        "effects": [
          "flag blame_elves"
        ]
      },
      {
        "text": "（骨架）当众怪渡鸦先知会",
        "goto": "a3_18",
        "effects": [
          "flag blame_ravens"
        ]
      },
      {
        "text": "（骨架）当众谁也没怪",
        "goto": "a3_18",
        "effects": [
          "flag blame_silent"
        ]
      }
    ]
  },
  a3_18: {
    "id": "a3_18",
    "title": "疫令",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）疫令全给",
        "goto": "a3_19",
        "effects": [
          "flag law_full"
        ]
      },
      {
        "text": "（骨架）疫令限期",
        "goto": "a3_19",
        "effects": [
          "flag law_limited"
        ]
      },
      {
        "text": "（骨架）疫令不给",
        "goto": "a3_19",
        "effects": [
          "flag law_refused"
        ]
      }
    ]
  },
  a3_19: {
    "id": "a3_19",
    "title": "实验室",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag knows_roster",
      "item +lab_samples"
    ],
    "next": "a3_20"
  },
  a3_20: {
    "id": "a3_20",
    "title": "三剂药",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 8",
      "quest white_year done",
      "quest witness stage 4"
    ],
    "choices": [
      {
        "text": "（骨架）三剂药都给了达梅里亚",
        "goto": "a4_01",
        "effects": [
          "flag doses_moon"
        ]
      },
      {
        "text": "（骨架）三剂药都给了洛伦特",
        "goto": "a4_01",
        "effects": [
          "flag doses_rose"
        ]
      },
      {
        "text": "（骨架）三剂药两家各一，剩的给了孩子",
        "goto": "a4_01",
        "effects": [
          "flag doses_split"
        ]
      },
      {
        "text": "（骨架）三剂药都给了车上的孩子",
        "goto": "a4_01",
        "effects": [
          "flag doses_children"
        ]
      }
    ]
  },
};
