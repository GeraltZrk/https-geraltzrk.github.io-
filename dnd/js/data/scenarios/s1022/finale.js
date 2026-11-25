// 终章《最后一个冬天》，含间幕《十二个冬天》和七个结局场景（BIBLE §11.6）
// 骨架：每场只有标题、出口和“保证”类效果（等级、同伴、必给的物品、任务），选项是占位，
// 只为让整张图从每个出身连到结局、让各组标记在指定场景恰好立一个。写的时候整场替换掉，
// 但 first 里的保证和每组标记的立法要照 BIBLE 留下。自检：node tools/check-part.mjs s1022 finale.js
export const SCENES = {
  f_01: {
    "id": "f_01",
    "title": "十二个冬天",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）十二个冬天：跟着十字军打",
        "goto": "f_02",
        "effects": [
          "flag winters_crusade"
        ]
      },
      {
        "text": "（骨架）十二个冬天：守在瓦洛森",
        "goto": "f_02",
        "effects": [
          "flag winters_varlosen"
        ]
      },
      {
        "text": "（骨架）十二个冬天：回了本国",
        "goto": "f_02",
        "effects": [
          "flag winters_home"
        ]
      },
      {
        "text": "（骨架）十二个冬天：带阿德蕾西娅",
        "goto": "f_02",
        "effects": [
          "flag winters_squire"
        ]
      }
    ]
  },
  f_02: {
    "id": "f_02",
    "title": "谁没熬过来",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest crusade start"
    ],
    "next": "f_03"
  },
  f_03: {
    "id": "f_03",
    "title": "集结",
    "text": [
      "（待写）"
    ],
    "next": "f_04"
  },
  f_04: {
    "id": "f_04",
    "title": "苏雷尔神庙",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）让人挖了苏雷尔神庙底下",
        "goto": "f_05",
        "effects": [
          "flag temple_dug"
        ]
      },
      {
        "text": "（骨架）派人守住了苏雷尔神庙",
        "goto": "f_05",
        "effects": [
          "flag temple_guarded"
        ]
      }
    ]
  },
  f_05: {
    "id": "f_05",
    "title": "科乌尔堡",
    "text": [
      "（待写）"
    ],
    "next": "f_06"
  },
  f_06: {
    "id": "f_06",
    "title": "达拉万之愚",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）拦下了沼地里的火刑",
        "goto": "f_07",
        "effects": [
          "flag pyre_stopped"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "f_07"
      }
    ]
  },
  f_07: {
    "id": "f_07",
    "title": "山下的坟场",
    "text": [
      "（待写）"
    ],
    "next": "f_08"
  },
  f_08: {
    "id": "f_08",
    "title": "门",
    "text": [
      "（待写）"
    ],
    "next": "f_09"
  },
  f_09: {
    "id": "f_09",
    "title": "笼子",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）从笼子里放出了薇齐娜",
        "goto": "f_10",
        "effects": [
          "flag vezina_freed"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "f_10"
      }
    ]
  },
  f_10: {
    "id": "f_10",
    "title": "死去的国王们",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）缰绳在你手里",
        "goto": "f_11",
        "effects": [
          "flag bridle_pc"
        ]
      },
      {
        "text": "（骨架）缰绳在贤者门下手里",
        "goto": "f_11",
        "effects": [
          "flag bridle_wise"
        ]
      },
      {
        "text": "（骨架）另一条路",
        "goto": "f_11"
      }
    ]
  },
  f_11: {
    "id": "f_11",
    "title": "谁付账",
    "text": [
      "（待写）"
    ],
    "first": [
      "item +book_of_canrec",
      "quest crusade done",
      "quest sixteen_graves done",
      "quest canrec_trail done"
    ],
    "choices": [
      {
        "text": "（骨架）付账的是阿德蕾西娅",
        "goto": "f_12",
        "effects": [
          "flag price_aldresia",
          "item +silversong",
          "flag book_locked",
          "item -book_of_canrec",
          "flag order_founder"
        ]
      },
      {
        "text": "（骨架）付账的是你",
        "goto": "f_12",
        "effects": [
          "flag price_pc",
          "flag book_wise",
          "item -book_of_canrec"
        ]
      },
      {
        "text": "（骨架）付账的是同伴",
        "goto": "f_12",
        "effects": [
          "flag price_companion",
          "flag price_valeran",
          "flag book_locked",
          "item -book_of_canrec"
        ]
      },
      {
        "text": "（骨架）付账的是同伴",
        "goto": "f_12",
        "effects": [
          "flag price_companion",
          "flag price_liv",
          "flag book_wise",
          "item -book_of_canrec"
        ]
      },
      {
        "text": "（骨架）付账的是被牵的皇帝",
        "goto": "f_12",
        "effects": [
          "flag price_emperor",
          "unflag castan_alive",
          "flag book_locked",
          "item -book_of_canrec"
        ]
      },
      {
        "text": "（骨架）一页一页念名字",
        "goto": "f_12",
        "effects": [
          "flag price_names",
          "flag book_wise",
          "item -book_of_canrec"
        ]
      },
      {
        "text": "（骨架）你接过了书上的记号",
        "goto": "f_12",
        "effects": [
          "flag book_kept"
        ]
      }
    ]
  },
  f_12: {
    "id": "f_12",
    "title": "那本书",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（骨架）[神] 哪张椅子都不坐",
        "tag": "神",
        "if": "is.god && !flag.book_kept && !(flag.castan_crowned && flag.castan_alive)",
        "effects": [
          "flag god_unseated",
          "var god_acts +1"
        ],
        "goto": "end_unseated"
      },
      {
        "text": "（骨架）把印交回去：寂静之冠",
        "if": "flag.book_kept",
        "goto": "end_quiet"
      },
      {
        "text": "（骨架）把印交回去：缰绳",
        "if": "!flag.book_kept && (flag.castan_crowned && flag.castan_alive) && !flag.knot_cut",
        "goto": "end_bridle"
      },
      {
        "text": "（骨架）把印交回去：第五十四位",
        "if": "!flag.book_kept && (flag.castan_crowned && flag.castan_alive) && flag.knot_cut",
        "goto": "end_fiftyfourth"
      },
      {
        "text": "（骨架）把印交回去：各回各船",
        "if": "!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion <= 2",
        "goto": "end_parting"
      },
      {
        "text": "（骨架）把印交回去：同席",
        "if": "!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion > 2 && world.communion >= 8 && world.writ >= 4 && world.writ <= 6 && world.feud <= 3 && flag.blame_canrec && !flag.castan_crowned",
        "goto": "end_table"
      },
      {
        "text": "（骨架）把印交回去：监誓人的账",
        "if": "!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion > 2 && !(world.communion >= 8 && world.writ >= 4 && world.writ <= 6 && world.feud <= 3 && flag.blame_canrec && !flag.castan_crowned)",
        "goto": "end_ledger"
      }
    ]
  },
  end_unseated: {
    "id": "end_unseated",
    "title": "不肯落座的神",
    "text": [
      "（待写）"
    ],
    "ending": "unseated"
  },
  end_quiet: {
    "id": "end_quiet",
    "title": "寂静之冠",
    "text": [
      "（待写）"
    ],
    "ending": "quiet"
  },
  end_bridle: {
    "id": "end_bridle",
    "title": "缰绳",
    "text": [
      "（待写）"
    ],
    "ending": "bridle"
  },
  end_fiftyfourth: {
    "id": "end_fiftyfourth",
    "title": "第五十四位",
    "text": [
      "（待写）"
    ],
    "ending": "fiftyfourth"
  },
  end_parting: {
    "id": "end_parting",
    "title": "各回各船",
    "text": [
      "（待写）"
    ],
    "ending": "parting"
  },
  end_table: {
    "id": "end_table",
    "title": "同席",
    "text": [
      "（待写）"
    ],
    "ending": "table"
  },
  end_ledger: {
    "id": "end_ledger",
    "title": "监誓人的账",
    "text": [
      "（待写）"
    ],
    "ending": "ledger"
  },
};
