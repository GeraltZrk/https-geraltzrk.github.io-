// 第四幕《玫瑰与月的婚礼》（BIBLE §11.5）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 act4.js
export const SCENES = {
  a4_01: {
    "id": "a4_01",
    "title": "彩城关门",
    "text": [
      "（待写）"
    ],
    "next": "a4_02"
  },
  a4_02: {
    "id": "a4_02",
    "title": "芬尼克的那块石头",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag finnic_chip",
      "item +oathstone_chip"
    ],
    "choices": [
      {
        "text": "（骨架）两国使者在芬尼克那间屋里许过诺",
        "goto": "a4_03",
        "effects": [
          "flag viswall_safe"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a4_03"
      },
      {
        "text": "（骨架）[神] 在芬尼克那间屋里许过诺",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_promise_viswall",
          "flag viswall_safe",
          "var god_acts +1"
        ],
        "goto": "a4_03"
      }
    ]
  },
  a4_03: {
    "id": "a4_03",
    "title": "去洛伦泰内的路",
    "text": [
      "（待写）"
    ],
    "next": "a4_04"
  },
  a4_04: {
    "id": "a4_04",
    "title": "洛伦泰内",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）有人谢过管闸的红宝石矮人",
        "goto": "a4_05",
        "effects": [
          "flag dwarves_thanked",
          "flag lance_told_truth"
        ]
      },
      {
        "text": "（骨架）洛伦特：告诉太后那一枪是受慑",
        "goto": "a4_05",
        "effects": [
          "flag lance_told_thrall"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a4_05"
      }
    ]
  },
  a4_05: {
    "id": "a4_05",
    "title": "克雷格的血债",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）克雷格行了忏悔礼",
        "goto": "a4_06",
        "effects": [
          "flag crege_penance"
        ]
      },
      {
        "text": "（骨架）克雷格派人代战",
        "goto": "a4_06",
        "effects": [
          "flag crege_champions"
        ]
      },
      {
        "text": "（骨架）克雷格交给了太后",
        "goto": "a4_06",
        "effects": [
          "flag crege_given"
        ]
      }
    ]
  },
  a4_06: {
    "id": "a4_06",
    "title": "碎玫瑰",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）瓦勒兰替精灵出战",
        "goto": "a4_07",
        "effects": [
          "flag valeran_champion",
          "flag enteben_stopped"
        ]
      },
      {
        "text": "（骨架）你解了瓦勒兰的誓",
        "goto": "a4_07",
        "effects": [
          "flag valeran_released",
          "flag enteben_stopped",
          "companion -valeran"
        ]
      },
      {
        "text": "（骨架）瓦勒兰跟纯血派走了",
        "goto": "a4_07",
        "effects": [
          "flag valeran_purist",
          "flag wedding_blood",
          "companion -valeran"
        ]
      },
      {
        "text": "（骨架）瓦勒兰留在你身边",
        "goto": "a4_07",
        "effects": [
          "flag valeran_stayed",
          "flag wedding_blood"
        ]
      }
    ]
  },
  a4_07: {
    "id": "a4_07",
    "title": "婚礼",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）另一条路",
        "goto": "a4_08"
      },
      {
        "text": "（骨架）[神] 那桩婚事是你证的",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_wed",
          "var god_acts +1"
        ],
        "goto": "a4_08"
      }
    ]
  },
  a4_08: {
    "id": "a4_08",
    "title": "帐子里的议事",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）十字军章程：奉皇帝",
        "goto": "a4_09",
        "effects": [
          "flag charter_emperor",
          "flag wex_crown_promised"
        ]
      },
      {
        "text": "（骨架）十字军章程：自由会盟",
        "goto": "a4_09",
        "effects": [
          "flag charter_league"
        ]
      },
      {
        "text": "（骨架）十字军章程：凭瓦洛森令状",
        "goto": "a4_09",
        "effects": [
          "flag charter_writ"
        ]
      },
      {
        "text": "（骨架）十字军章程：各国出兵",
        "goto": "a4_09",
        "effects": [
          "flag charter_muster"
        ]
      },
      {
        "text": "（骨架）[神] 十字军奉你的名出征",
        "tag": "神",
        "if": "is.god",
        "effects": [
          "flag god_crusade",
          "flag charter_emperor",
          "var god_acts +1"
        ],
        "goto": "a4_09"
      }
    ]
  },
  a4_09: {
    "id": "a4_09",
    "title": "拉尔桑来的使者",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）拉尔桑防线说开了",
        "goto": "a4_10",
        "effects": [
          "flag larthan_open"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a4_10"
      }
    ]
  },
  a4_10: {
    "id": "a4_10",
    "title": "河里上来的",
    "text": [
      "（待写）"
    ],
    "next": "a4_11"
  },
  a4_11: {
    "id": "a4_11",
    "title": "那个字",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag knows_canrec_plan",
      "flag knows_why_watched"
    ],
    "next": "a4_12"
  },
  a4_12: {
    "id": "a4_12",
    "title": "面甲",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）对苍手行过旧礼",
        "goto": "a4_13",
        "effects": [
          "flag palehand_saluted"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a4_13"
      }
    ]
  },
  a4_13: {
    "id": "a4_13",
    "title": "每位国王都想要一个皇帝",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）把缰绳的事对诸王摊开讲了",
        "goto": "a4_14",
        "effects": [
          "flag bridle_public"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a4_14"
      }
    ]
  },
  a4_14: {
    "id": "a4_14",
    "title": "北上",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）卡斯坦知道缰绳的全部",
        "goto": "a4_15",
        "effects": [
          "flag liv_told"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "a4_15"
      }
    ]
  },
  a4_15: {
    "id": "a4_15",
    "title": "第二次上山",
    "text": [
      "（待写）"
    ],
    "next": "a4_16"
  },
  a4_16: {
    "id": "a4_16",
    "title": "誓石前",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）山上立过皇帝",
        "goto": "a4_17",
        "effects": [
          "flag castan_crowned",
          "flag castan_alive",
          "flag castan_garrec",
          "flag knot_cut",
          "unflag mountain_sealed"
        ]
      },
      {
        "text": "（骨架）山上立过皇帝",
        "goto": "a4_17",
        "effects": [
          "flag castan_crowned",
          "flag castan_alive",
          "flag castan_lucan",
          "flag iacob_loop",
          "unflag mountain_sealed"
        ]
      },
      {
        "text": "（骨架）山上立过皇帝",
        "goto": "a4_17",
        "effects": [
          "flag castan_crowned",
          "flag castan_alive",
          "flag castan_liv",
          "flag liv_bridled",
          "unflag mountain_sealed"
        ]
      },
      {
        "text": "（骨架）山上立过皇帝",
        "goto": "a4_17",
        "effects": [
          "flag castan_crowned",
          "flag castan_alive",
          "flag castan_pc",
          "flag knot_cut",
          "unflag mountain_sealed"
        ]
      },
      {
        "text": "（骨架）试炼山的石阶毁了",
        "goto": "a4_17",
        "effects": [
          "flag mountain_sealed",
          "flag liv_north",
          "companion -liv",
          "quest liv_claim fail"
        ]
      },
      {
        "text": "（骨架）试炼山的石阶毁了",
        "goto": "a4_17",
        "effects": [
          "flag mountain_sealed",
          "flag liv_dead",
          "companion -liv",
          "quest liv_claim fail"
        ]
      }
    ]
  },
  a4_17: {
    "id": "a4_17",
    "title": "下山",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest mountain done"
    ],
    "next": "a4_18"
  },
  a4_18: {
    "id": "a4_18",
    "title": "1041 年花始月",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 10",
      "rest long",
      "quest witness stage 5",
      "item +jaher_letter"
    ],
    "next": "f_01"
  },
};
