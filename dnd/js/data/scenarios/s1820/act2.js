// act2.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 act2.js
export const SCENES = {
  "a2_01": {
    "id": "a2_01",
    "title": "报纸摘要一",
    "chapter": "第二幕 · 路权",
    "art": "ev_castellos_is_dead",
    "text": [
      "（待写）"
    ],
    "first": [
      "world tears -1",
      "world dove -1"
    ],
    "choices": [
      {
        "text": "（待写）retainer_taken",
        "goto": "a2_02",
        "effects": [
          "flag retainer_taken"
        ]
      },
      {
        "text": "（待写）retainer_split",
        "goto": "a2_02",
        "effects": [
          "flag retainer_split"
        ]
      },
      {
        "text": "（待写）backpay_suit",
        "goto": "a2_02",
        "effects": [
          "flag backpay_suit"
        ]
      }
    ]
  },
  "a2_02": {
    "id": "a2_02",
    "title": "银团",
    "art": "ev_anb_global_trade",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_right_of_way start"
    ],
    "next": "a2_03"
  },
  "a2_03": {
    "id": "a2_03",
    "title": "哨卡",
    "text": [
      "（待写）"
    ],
    "next": "a2_04"
  },
  "a2_04": {
    "id": "a2_04",
    "title": "测量队的营地",
    "text": [
      "（待写）"
    ],
    "next": "a2_05"
  },
  "a2_05": {
    "id": "a2_05",
    "title": "天文学家的箱子",
    "art": "ev_elven_constellation",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_wastage stage 2"
    ],
    "choices": [
      {
        "text": "（待写）plates_printed",
        "goto": "a2_06",
        "effects": [
          "flag plates_printed",
          "world press +1"
        ]
      },
      {
        "text": "（待写）plates_sold",
        "goto": "a2_06",
        "effects": [
          "flag plates_sold"
        ]
      },
      {
        "text": "（待写）box_plates",
        "goto": "a2_06",
        "effects": [
          "flag box_plates"
        ]
      }
    ]
  },
  "a2_06": {
    "id": "a2_06",
    "title": "血税",
    "text": [
      "（待写）"
    ],
    "next": "a2_07"
  },
  "a2_07": {
    "id": "a2_07",
    "title": "没有煤气灯的城",
    "art": "load_8",
    "text": [
      "（待写）"
    ],
    "next": "a2_08"
  },
  "a2_08": {
    "id": "a2_08",
    "title": "站着见客",
    "art": "ev_mages_estate",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_right_of_way stage 2"
    ],
    "next": "a2_09"
  },
  "a2_09": {
    "id": "a2_09",
    "title": "账本",
    "art": "ev_magic_study_and_relax",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 5"
    ],
    "next": "a2_10"
  },
  "a2_10": {
    "id": "a2_10",
    "title": "地窖",
    "art": "ev_forge",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_blood start",
      "flag cellar_book",
      "item +cellar_book"
    ],
    "choices": [
      {
        "text": "（待写）isa_owes_company",
        "goto": "a2_11",
        "effects": [
          "flag isa_owes_company"
        ]
      },
      {
        "text": "（待写）yamina_spent",
        "goto": "a2_11",
        "effects": [
          "flag yamina_spent"
        ]
      }
    ]
  },
  "a2_11": {
    "id": "a2_11",
    "title": "轨头",
    "art": "ev_dwarven_rail",
    "text": [
      "（待写）"
    ],
    "next": "a2_12"
  },
  "a2_12": {
    "id": "a2_12",
    "title": "机车库",
    "art": "ev_dwarven_rail",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）strike_settled",
        "goto": "a2_13",
        "effects": [
          "flag strike_settled"
        ]
      },
      {
        "text": "（待写）strike_held",
        "goto": "a2_13",
        "effects": [
          "flag strike_held"
        ]
      },
      {
        "text": "（待写）strike_broken",
        "goto": "a2_13",
        "effects": [
          "flag strike_broken"
        ]
      }
    ]
  },
  "a2_13": {
    "id": "a2_13",
    "title": "九天",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_partner stage 2"
    ],
    "next": "a2_14"
  },
  "a2_14": {
    "id": "a2_14",
    "title": "血账",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_blood done"
    ],
    "choices": [
      {
        "text": "（待写）blood_published",
        "goto": "a2_15",
        "effects": [
          "flag blood_published",
          "world press +1"
        ]
      },
      {
        "text": "（待写）blood_sold",
        "goto": "a2_15",
        "effects": [
          "flag blood_sold"
        ]
      },
      {
        "text": "（待写）blood_burned",
        "goto": "a2_15",
        "effects": [
          "flag blood_burned"
        ]
      },
      {
        "text": "（待写）blood_reported",
        "goto": "a2_15",
        "effects": [
          "flag blood_reported"
        ]
      },
      {
        "text": "（待写）box_blood",
        "goto": "a2_15",
        "effects": [
          "flag box_blood"
        ]
      }
    ]
  },
  "a2_15": {
    "id": "a2_15",
    "title": "团务会：路权",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_right_of_way done"
    ],
    "choices": [
      {
        "text": "（待写）line_castonath",
        "goto": "a2_16",
        "effects": [
          "flag line_castonath"
        ]
      },
      {
        "text": "（待写）line_ancardia",
        "goto": "a2_16",
        "effects": [
          "flag line_ancardia",
          "world dove -1"
        ]
      },
      {
        "text": "（待写）line_none、contract_broken",
        "goto": "a2_16",
        "effects": [
          "flag line_none",
          "flag contract_broken"
        ]
      }
    ]
  },
  "a2_16": {
    "id": "a2_16",
    "title": "空席",
    "art": "ev_fat_loot",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）hoard_sealed、rite_given",
        "goto": "a2_17",
        "effects": [
          "flag hoard_sealed",
          "flag rite_given"
        ]
      },
      {
        "text": "（待写）hoard_milled、guilhem_stayed",
        "goto": "a2_17",
        "effects": [
          "flag hoard_milled",
          "flag guilhem_stayed",
          "companion -guilhem",
          "quest q_guilhem fail"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a2_17"
      },
      {
        "text": "（待写）不设标记",
        "goto": "a2_17",
        "effects": [
          "quest q_guilhem stage 2"
        ]
      }
    ]
  },
  "a2_17": {
    "id": "a2_17",
    "title": "第二份报告",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）report2_full",
        "goto": "a2_18",
        "effects": [
          "flag report2_full",
          "rep partner +1"
        ]
      },
      {
        "text": "（待写）report2_edited",
        "goto": "a2_18",
        "effects": [
          "flag report2_edited"
        ]
      },
      {
        "text": "（待写）report2_lie",
        "goto": "a2_18",
        "effects": [
          "flag report2_lie",
          "rep partner -1"
        ]
      }
    ]
  },
  "a2_18": {
    "id": "a2_18",
    "title": "数流星",
    "art": "ev_big_star_in_sky",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 6"
    ],
    "next": "a3_01"
  }
};
