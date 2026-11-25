// 第二幕《地砖下的皇帝》（BIBLE §11.3）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 act2.js
export const SCENES = {
  a2_01: {
    "id": "a2_01",
    "title": "西门",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +valeran",
      "quest valeran_oath start"
    ],
    "next": "a2_02"
  },
  a2_02: {
    "id": "a2_02",
    "title": "万神道",
    "text": [
      "（待写）"
    ],
    "next": "a2_03"
  },
  a2_03: {
    "id": "a2_03",
    "title": "亚科布的客厅",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）收过亚科布的通行文书",
        "goto": "a2_04",
        "effects": [
          "flag iacob_favor"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a2_04"
      }
    ]
  },
  a2_04: {
    "id": "a2_04",
    "title": "去乌霜领的路",
    "text": [
      "（待写）"
    ],
    "next": "a2_05"
  },
  a2_05: {
    "id": "a2_05",
    "title": "终结黑龙之战",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）围城：你给加雷克作了保",
        "goto": "a2_06",
        "effects": [
          "flag siege_certified"
        ]
      },
      {
        "text": "（骨架）围城：你给加雷克争到了听证",
        "goto": "a2_06",
        "effects": [
          "flag siege_hearing"
        ]
      },
      {
        "text": "（骨架）围城：用一场单挑了结",
        "goto": "a2_06",
        "effects": [
          "flag siege_duel"
        ]
      },
      {
        "text": "（骨架）[神] 乌霜领的仗是你一句话停的",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_truce",
          "var god_acts +1",
          "flag siege_certified"
        ],
        "goto": "a2_06"
      }
    ]
  },
  a2_06: {
    "id": "a2_06",
    "title": "缺口",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）加雷克称王，黑龙留在东坎诺",
        "goto": "a2_07",
        "effects": [
          "flag garrec_king"
        ]
      },
      {
        "text": "（骨架）加雷克死了，寒行军北上",
        "goto": "a2_07",
        "effects": [
          "flag garrec_dead"
        ]
      },
      {
        "text": "（骨架）加雷克流亡",
        "goto": "a2_07",
        "effects": [
          "flag garrec_exile"
        ]
      }
    ]
  },
  a2_07: {
    "id": "a2_07",
    "title": "一口棺材",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest emperor_body start",
      "quest liv_claim start"
    ],
    "choices": [
      {
        "text": "（骨架）威克斯：讨回了“屠夫”那笔债",
        "goto": "a2_08",
        "effects": [
          "flag elrac_debt_paid"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a2_08"
      }
    ]
  },
  a2_08: {
    "id": "a2_08",
    "title": "沼泽堡",
    "text": [
      "（待写）"
    ],
    "next": "a2_09"
  },
  a2_09: {
    "id": "a2_09",
    "title": "奈拉特的碗",
    "text": [
      "（待写）"
    ],
    "next": "a2_10"
  },
  a2_10: {
    "id": "a2_10",
    "title": "头领林地",
    "text": [
      "（待写）"
    ],
    "next": "a2_11"
  },
  a2_11: {
    "id": "a2_11",
    "title": "炖菜",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）守砖人不信你",
        "goto": "a2_12",
        "effects": [
          "flag keeper_hostile"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a2_12"
      }
    ]
  },
  a2_12: {
    "id": "a2_12",
    "title": "地砖下",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag knows_myrrh",
      "flag liv_saw_body",
      "quest canrec_trail start"
    ],
    "choices": [
      {
        "text": "（骨架）皇帝葬在西门",
        "goto": "a2_13",
        "effects": [
          "flag body_westgate",
          "item +ebonsteel_crown"
        ]
      },
      {
        "text": "（骨架）皇帝葬在北要塞",
        "goto": "a2_13",
        "effects": [
          "flag body_citadel"
        ]
      },
      {
        "text": "（骨架）皇帝葬在万神道",
        "goto": "a2_13",
        "effects": [
          "flag body_pantheon"
        ]
      },
      {
        "text": "（骨架）皇帝悄悄埋了",
        "goto": "a2_13",
        "effects": [
          "flag body_quiet"
        ]
      },
      {
        "text": "（骨架）皇帝火化了",
        "goto": "a2_13",
        "effects": [
          "flag body_burned"
        ]
      },
      {
        "text": "（骨架）皇帝留在地砖下没人收",
        "goto": "a2_13",
        "effects": [
          "flag body_left",
          "quest emperor_body fail"
        ]
      }
    ]
  },
  a2_13: {
    "id": "a2_13",
    "title": "葬礼",
    "text": [
      "（待写）"
    ],
    "first": [
      "item +stew_spoon"
    ],
    "choices": [
      {
        "text": "（骨架）照这条走",
        "goto": "a2_14",
        "effects": [
          "quest emperor_body done"
        ]
      }
    ]
  },
  a2_14: {
    "id": "a2_14",
    "title": "刀锋堡",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）告诉了克拉丽蒙德卡林达尔是谁家的手艺",
        "goto": "a2_15",
        "effects": [
          "flag calindal_named",
          "flag clarimonde_pact"
        ]
      },
      {
        "text": "（骨架）告诉了克拉丽蒙德卡林达尔是谁家的手艺",
        "goto": "a2_15",
        "effects": [
          "flag calindal_named"
        ]
      },
      {
        "text": "（骨架）答应帮克拉丽蒙德毁阶",
        "goto": "a2_15",
        "effects": [
          "flag clarimonde_pact"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a2_15"
      }
    ]
  },
  a2_15: {
    "id": "a2_15",
    "title": "北要塞",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）洛伦特：在比武场找到了凭据",
        "goto": "a2_16",
        "effects": [
          "flag lance_truth"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a2_16"
      }
    ]
  },
  a2_16: {
    "id": "a2_16",
    "title": "绳子",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest mountain start"
    ],
    "choices": [
      {
        "text": "（骨架）在石桌上画过“将来的疆界”",
        "goto": "a2_17",
        "effects": [
          "flag map_drawn",
          "flag vow_liv"
        ]
      },
      {
        "text": "（骨架）在石桌上画过“将来的疆界”",
        "goto": "a2_17",
        "effects": [
          "flag map_drawn"
        ]
      },
      {
        "text": "（骨架）在山上答应过让卡斯坦试",
        "goto": "a2_17",
        "effects": [
          "flag vow_liv"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a2_17"
      }
    ]
  },
  a2_17: {
    "id": "a2_17",
    "title": "第九道",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）魔像向你缴了械",
        "goto": "a2_18",
        "effects": [
          "flag golem_pc"
        ]
      },
      {
        "text": "（骨架）魔像向卡斯坦缴了械",
        "goto": "a2_18",
        "effects": [
          "flag golem_liv"
        ]
      },
      {
        "text": "（骨架）谁也没缴下魔像的械",
        "goto": "a2_18",
        "effects": [
          "flag golem_none"
        ]
      },
      {
        "text": "（骨架）[神] 魔像向不会死的人下了跪",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag golem_forever",
          "flag golem_pc",
          "var god_acts +1"
        ],
        "goto": "a2_18"
      }
    ]
  },
  a2_18: {
    "id": "a2_18",
    "title": "誓石",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）亚科布绞死了",
        "goto": "a2_19",
        "effects": [
          "flag iacob_hanged",
          "flag lucan_alva",
          "flag knot_alarian",
          "flag mended",
          "flag knows_word"
        ]
      },
      {
        "text": "（骨架）亚科布被赦了",
        "goto": "a2_19",
        "effects": [
          "flag iacob_pardoned",
          "flag lucan_garrec",
          "flag knot_ravens",
          "flag ravens_trust",
          "flag mended",
          "flag knows_word"
        ]
      },
      {
        "text": "（骨架）亚科布交给了贤者会",
        "goto": "a2_19",
        "effects": [
          "flag iacob_wise",
          "flag lucan_marion",
          "flag knot_iacob",
          "flag mended",
          "flag knows_word"
        ]
      },
      {
        "text": "（骨架）亚科布被赦了",
        "goto": "a2_19",
        "effects": [
          "flag iacob_pardoned",
          "flag lucan_iacob",
          "flag stair_down",
          "flag mountain_sealed",
          "flag knows_word"
        ]
      },
      {
        "text": "（骨架）[神] 你在的屋里没人撒得了谎",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_half_sentence",
          "var god_acts +1",
          "flag iacob_pardoned",
          "flag lucan_alva",
          "flag mended",
          "flag knows_word"
        ],
        "goto": "a2_19"
      }
    ]
  },
  a2_19: {
    "id": "a2_19",
    "title": "1024 年真霜月",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 6",
      "rest long",
      "quest witness stage 3",
      "quest edith stage 3"
    ],
    "choices": [
      {
        "text": "（骨架）伊迪丝跟阿拉里安学",
        "goto": "a3_01",
        "effects": [
          "flag edith_alarian"
        ]
      },
      {
        "text": "（骨架）伊迪丝跟贤者会学",
        "goto": "a3_01",
        "effects": [
          "flag edith_wise"
        ]
      },
      {
        "text": "（骨架）伊迪丝跟渡鸦先知会学",
        "goto": "a3_01",
        "effects": [
          "flag edith_ravens"
        ]
      },
      {
        "text": "（骨架）伊迪丝跟亚科布学",
        "goto": "a3_01",
        "effects": [
          "flag edith_iacob"
        ]
      },
      {
        "text": "（骨架）伊迪丝没有先生",
        "goto": "a3_01",
        "effects": [
          "flag edith_none"
        ]
      }
    ]
  },
};
