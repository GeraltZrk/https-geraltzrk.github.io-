// 第一幕《谁的手》（BIBLE §11.2）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 act1.js
export const SCENES = {
  a1_01: {
    "id": "a1_01",
    "title": "斗兽场",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +liv",
      "companion +barry"
    ],
    "next": "a1_02"
  },
  a1_02: {
    "id": "a1_02",
    "title": "帐篷城",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest edith start",
      {
        "if": "origin == 'lorent'",
        "then": [
          "quest lance stage 2"
        ]
      }
    ],
    "choices": [
      {
        "text": "（骨架）洛伦特：当面问过克雷格",
        "goto": "a1_03",
        "effects": [
          "flag lance_asked"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_03"
      },
      {
        "text": "（骨架）[神] 在帐篷城治过人",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_camp",
          "var god_acts +1",
          "flag lance_asked"
        ],
        "goto": "a1_03"
      }
    ]
  },
  a1_03: {
    "id": "a1_03",
    "title": "验心",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest sleepers start"
    ],
    "choices": [
      {
        "text": "（骨架）验心进了案卷，成了前例",
        "goto": "a1_04",
        "effects": [
          "flag exam_precedent",
          "flag knows_watchword"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_04"
      }
    ]
  },
  a1_04: {
    "id": "a1_04",
    "title": "普卢姆沃尔的申辩",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）收下了普卢姆沃尔的“受慑”申辩",
        "goto": "a1_05",
        "effects": [
          "flag plumwall_plea"
        ]
      },
      {
        "text": "（骨架）普卢姆沃尔的事用骑士裁决了结",
        "goto": "a1_05",
        "effects": [
          "flag plumwall_duel"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_05"
      }
    ]
  },
  a1_05: {
    "id": "a1_05",
    "title": "月山",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）判词由月神神殿涂油作保",
        "goto": "a1_06",
        "effects": [
          "flag aria_anoints"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_06"
      }
    ]
  },
  a1_06: {
    "id": "a1_06",
    "title": "活手的名分",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）泛神会议上替阿拉莉亚作证",
        "goto": "a1_07",
        "effects": [
          "flag alaria_for"
        ]
      },
      {
        "text": "（骨架）泛神会议上拦下了阿拉莉亚",
        "goto": "a1_07",
        "effects": [
          "flag alaria_blocked"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_07"
      },
      {
        "text": "（骨架）[神] 泛神会议把你排进了议程",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_on_agenda",
          "var god_acts +1",
          "flag alaria_for"
        ],
        "goto": "a1_07"
      }
    ]
  },
  a1_07: {
    "id": "a1_07",
    "title": "月河上的和约",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）删掉了埃米尔排挤精灵的条款",
        "goto": "a1_08",
        "effects": [
          "flag emil_struck"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_08"
      }
    ]
  },
  a1_08: {
    "id": "a1_08",
    "title": "码头的夜",
    "text": [
      "（待写）"
    ],
    "next": "a1_09"
  },
  a1_09: {
    "id": "a1_09",
    "title": "去科塞顿的路",
    "text": [
      "（待写）"
    ],
    "next": "a1_10"
  },
  a1_10: {
    "id": "a1_10",
    "title": "威克斯堡",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest dyren start",
      "quest barry_boy start"
    ],
    "next": "a1_11"
  },
  a1_11: {
    "id": "a1_11",
    "title": "大墓地",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "item.ledger_page < 1",
        "then": [
          "item +ledger_page"
        ]
      },
      "quest sixteen_graves start"
    ],
    "next": "a1_12"
  },
  a1_12: {
    "id": "a1_12",
    "title": "雾里收尸的人",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）屠夫原的迁葬做完了",
        "goto": "a1_13",
        "effects": [
          "flag field_done"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_13"
      }
    ]
  },
  a1_13: {
    "id": "a1_13",
    "title": "谁带大公爵",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）巴里带大戴伦",
        "goto": "a1_14",
        "effects": [
          "flag guardian_barry"
        ]
      },
      {
        "text": "（骨架）克洛万带大戴伦",
        "goto": "a1_14",
        "effects": [
          "flag guardian_crovan"
        ]
      },
      {
        "text": "（骨架）马里昂做戴伦的监护人",
        "goto": "a1_14",
        "effects": [
          "flag guardian_marion"
        ]
      },
      {
        "text": "（骨架）男爵们带大戴伦",
        "goto": "a1_14",
        "effects": [
          "flag guardian_barons"
        ]
      }
    ]
  },
  a1_14: {
    "id": "a1_14",
    "title": "克洛万听得懂",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag knows_watchword",
      "quest sleepers stage 2"
    ],
    "next": "a1_15"
  },
  a1_15: {
    "id": "a1_15",
    "title": "阿克罗姆顿的地窖",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +vezina"
    ],
    "next": "a1_16"
  },
  a1_16: {
    "id": "a1_16",
    "title": "驯师",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag knows_iacob_name"
    ],
    "choices": [
      {
        "text": "（骨架）驯师梅尔科尔死了",
        "goto": "a1_17",
        "effects": [
          "flag melcor_dead"
        ]
      },
      {
        "text": "（骨架）驯师梅尔科尔交给了贤者会",
        "goto": "a1_17",
        "effects": [
          "flag melcor_wise"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a1_17"
      }
    ]
  },
  a1_17: {
    "id": "a1_17",
    "title": "阿克罗米斯的账",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest sleepers done"
    ],
    "choices": [
      {
        "text": "（骨架）揭发了阿克罗米斯",
        "goto": "a1_18",
        "effects": [
          "flag acromis_exposed"
        ]
      },
      {
        "text": "（骨架）阿克罗米斯的事悄悄了结",
        "goto": "a1_18",
        "effects": [
          "flag acromis_quiet"
        ]
      },
      {
        "text": "（骨架）拿阿克罗米斯的把柄换了令状",
        "goto": "a1_18",
        "effects": [
          "flag acromis_traded"
        ]
      }
    ]
  },
  a1_18: {
    "id": "a1_18",
    "title": "苏伦月的账",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 4",
      "rest long",
      "quest witness stage 2",
      "quest edith stage 2"
    ],
    "next": "a2_01"
  },
};
