// act3.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 act3.js
export const SCENES = {
  "a3_01": {
    "id": "a3_01",
    "title": "报纸摘要二",
    "chapter": "第三幕 · 货单",
    "art": "ev_castellos_is_dead",
    "text": [
      "（待写）"
    ],
    "first": [
      "world tears -1",
      "world dove -1",
      "world doors +1"
    ],
    "choices": [
      {
        "text": "（待写）gauge_open",
        "goto": "a3_02",
        "effects": [
          "flag gauge_open"
        ]
      },
      {
        "text": "（待写）gauge_sold",
        "goto": "a3_02",
        "effects": [
          "flag gauge_sold"
        ]
      },
      {
        "text": "（待写）gauge_burned",
        "goto": "a3_02",
        "effects": [
          "flag gauge_burned"
        ]
      }
    ]
  },
  "a3_02": {
    "id": "a3_02",
    "title": "病榻",
    "art": "ev_piety",
    "text": [
      "（待写）"
    ],
    "next": "a3_03"
  },
  "a3_03": {
    "id": "a3_03",
    "title": "一件活，两份合同",
    "art": "ev_high_temple_city",
    "text": [
      "（待写）"
    ],
    "next": "a3_04"
  },
  "a3_04": {
    "id": "a3_04",
    "title": "商栈",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）m_member",
        "goto": "a3_05",
        "effects": [
          "flag m_member"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a3_05"
      }
    ]
  },
  "a3_05": {
    "id": "a3_05",
    "title": "镇议会",
    "text": [
      "（待写）"
    ],
    "next": "a3_06"
  },
  "a3_06": {
    "id": "a3_06",
    "title": "第二道菜底下",
    "text": [
      "（待写）"
    ],
    "next": "a3_07"
  },
  "a3_07": {
    "id": "a3_07",
    "title": "轧棉机报人名",
    "art": "ev_mechanim_awakening",
    "text": [
      "（待写）"
    ],
    "next": "a3_08"
  },
  "a3_08": {
    "id": "a3_08",
    "title": "团务会：两份合同",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）contract_planters",
        "goto": "a3_09",
        "effects": [
          "flag contract_planters"
        ]
      },
      {
        "text": "（待写）contract_line",
        "goto": "a3_09",
        "effects": [
          "flag contract_line"
        ]
      },
      {
        "text": "（待写）contract_fraud",
        "goto": "a3_09",
        "effects": [
          "flag contract_fraud"
        ]
      }
    ]
  },
  "a3_09": {
    "id": "a3_09",
    "title": "布拉的枪",
    "art": "ev_orc_with_axe",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）bura_alone",
        "goto": "a3_10",
        "effects": [
          "flag bura_alone",
          "companion -bura",
          "quest q_bura fail"
        ]
      },
      {
        "text": "（待写）bura_armed、wanted_concord",
        "goto": "a3_10",
        "effects": [
          "flag bura_armed",
          "flag wanted_concord",
          "world chains -2",
          "quest q_bura done"
        ]
      },
      {
        "text": "（待写）bura_line",
        "goto": "a3_10",
        "effects": [
          "flag bura_line",
          "quest q_bura done"
        ]
      }
    ]
  },
  "a3_10": {
    "id": "a3_10",
    "title": "河堤",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）levee_lost",
        "goto": "a3_11",
        "effects": [
          "flag levee_lost"
        ]
      },
      {
        "text": "（待写）levee_recovered",
        "goto": "a3_11",
        "effects": [
          "flag levee_recovered",
          "world chains +1"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a3_11"
      }
    ]
  },
  "a3_11": {
    "id": "a3_11",
    "title": "不烧煤的机房",
    "art": "ev_damestear_core",
    "text": [
      "（待写）"
    ],
    "next": "a3_12"
  },
  "a3_12": {
    "id": "a3_12",
    "title": "真理之路",
    "art": "ev_dark_forest",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 7"
    ],
    "next": "a3_13"
  },
  "a3_13": {
    "id": "a3_13",
    "title": "四根柱子",
    "art": "load_7",
    "text": [
      "（待写）"
    ],
    "next": "a3_14"
  },
  "a3_14": {
    "id": "a3_14",
    "title": "两个词",
    "art": "ev_the_heroine",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）phrase_published、narwen_left、rector_erudite",
        "goto": "a3_15",
        "effects": [
          "flag phrase_published",
          "flag narwen_left",
          "companion -narwen",
          "quest q_narwen fail",
          "flag rector_erudite"
        ]
      },
      {
        "text": "（待写）phrase_sold、rector_zealot",
        "goto": "a3_15",
        "effects": [
          "flag phrase_sold",
          "flag rector_zealot"
        ]
      },
      {
        "text": "（待写）phrase_kept、rector_erudite",
        "goto": "a3_15",
        "effects": [
          "flag phrase_kept",
          "flag rector_erudite"
        ]
      },
      {
        "text": "（待写）phrase_signed、rector_zealot",
        "goto": "a3_15",
        "effects": [
          "flag phrase_signed",
          "world press +1",
          "flag rector_zealot"
        ]
      }
    ]
  },
  "a3_15": {
    "id": "a3_15",
    "title": "证词",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）ruling_cores",
        "goto": "a3_16",
        "effects": [
          {
            "if": "party.middlesday",
            "then": [
              "flag m_testified",
              "quest q_middlesday done"
            ]
          },
          "flag ruling_cores",
          "world chains -1"
        ]
      },
      {
        "text": "（待写）ruling_both",
        "goto": "a3_16",
        "effects": [
          {
            "if": "party.middlesday",
            "then": [
              "flag m_dormant",
              "companion -middlesday"
            ]
          },
          "flag ruling_both",
          "world chains -2"
        ]
      },
      {
        "text": "（待写）engine_licensed",
        "goto": "a3_16",
        "effects": [
          {
            "if": "party.middlesday",
            "then": [
              "flag m_left",
              "companion -middlesday",
              "quest q_middlesday fail"
            ]
          },
          "flag engine_licensed",
          "world chains +1"
        ]
      }
    ]
  },
  "a3_16": {
    "id": "a3_16",
    "title": "机房起火",
    "art": "ev_damestear_core",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）engine_burned",
        "goto": "a3_17",
        "effects": [
          "flag engine_burned"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a3_17"
      }
    ]
  },
  "a3_17": {
    "id": "a3_17",
    "title": "洇河口",
    "text": [
      "（待写）"
    ],
    "next": "a3_18"
  },
  "a3_18": {
    "id": "a3_18",
    "title": "穿好料子的客人",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag partner_known",
      "quest q_partner stage 3"
    ],
    "next": "a3_19"
  },
  "a3_19": {
    "id": "a3_19",
    "title": "第三份报告",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）report3_full",
        "goto": "a3_20",
        "effects": [
          "flag report3_full",
          "rep partner +1"
        ]
      },
      {
        "text": "（待写）report3_edited",
        "goto": "a3_20",
        "effects": [
          "flag report3_edited"
        ]
      },
      {
        "text": "（待写）report3_lie",
        "goto": "a3_20",
        "effects": [
          "flag report3_lie",
          "rep partner -1"
        ]
      }
    ]
  },
  "a3_20": {
    "id": "a3_20",
    "title": "数流星",
    "art": "ev_big_star_in_sky",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 8"
    ],
    "next": "a4_01"
  }
};
