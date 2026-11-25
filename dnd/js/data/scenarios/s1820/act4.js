// act4.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 act4.js
export const SCENES = {
  "a4_01": {
    "id": "a4_01",
    "title": "报纸摘要三",
    "chapter": "第四幕 · 门牌",
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
        "text": "（待写）partner_paid_on",
        "goto": "a4_02",
        "effects": [
          "flag partner_paid_on"
        ]
      },
      {
        "text": "（待写）partner_refused",
        "goto": "a4_02",
        "effects": [
          "flag partner_refused"
        ]
      },
      {
        "text": "（待写）partner_escrow",
        "goto": "a4_02",
        "effects": [
          "flag partner_escrow"
        ]
      }
    ]
  },
  "a4_02": {
    "id": "a4_02",
    "title": "人人都想雇你",
    "art": "ev_anb_global_trade",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）client_republic",
        "goto": "a4_03",
        "effects": [
          "flag client_republic"
        ]
      },
      {
        "text": "（待写）client_lorent",
        "goto": "a4_03",
        "effects": [
          "flag client_lorent"
        ]
      },
      {
        "text": "（待写）client_charter",
        "goto": "a4_03",
        "effects": [
          "flag client_charter"
        ]
      },
      {
        "text": "（待写）client_church",
        "goto": "a4_03",
        "effects": [
          "flag client_church"
        ]
      },
      {
        "text": "（待写）client_none",
        "goto": "a4_03",
        "effects": [
          "flag client_none"
        ]
      }
    ]
  },
  "a4_03": {
    "id": "a4_03",
    "title": "开幕",
    "art": "ev_hre",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "is.god",
        "then": [
          "flag council_called"
        ]
      }
    ],
    "next": "a4_04"
  },
  "a4_04": {
    "id": "a4_04",
    "title": "条款",
    "art": "ev_hre",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）article_heads、article_doors",
        "goto": "a4_05",
        "effects": [
          "flag article_heads",
          "flag article_doors"
        ]
      },
      {
        "text": "（待写）article_wards",
        "goto": "a4_05",
        "effects": [
          "flag article_wards"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_05"
      }
    ]
  },
  "a4_05": {
    "id": "a4_05",
    "title": "面包师的儿子",
    "art": "ev_hre",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）article_ration",
        "goto": "a4_06",
        "effects": [
          "flag article_ration"
        ]
      },
      {
        "text": "（待写）article_ban",
        "goto": "a4_06",
        "effects": [
          "flag article_ban"
        ]
      },
      {
        "text": "（待写）article_charter",
        "goto": "a4_06",
        "effects": [
          "flag article_charter"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_06"
      }
    ]
  },
  "a4_06": {
    "id": "a4_06",
    "title": "地窖",
    "art": "ev_god_fragment",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）fragment_aboard、fragment_stolen",
        "goto": "a4_07",
        "effects": [
          "flag fragment_aboard",
          "flag fragment_stolen",
          {
            "if": "!party.narwen",
            "then": [
              "flag narwen_custodian"
            ]
          }
        ]
      },
      {
        "text": "（待写）salvation_sails",
        "goto": "a4_07",
        "effects": [
          "flag salvation_sails"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_07"
      }
    ]
  },
  "a4_07": {
    "id": "a4_07",
    "title": "签令之夜",
    "art": "ev_far_and_wide",
    "text": [
      "（待写）"
    ],
    "next": "a4_08"
  },
  "a4_08": {
    "id": "a4_08",
    "title": "调查庭",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）inquiry_truth、dove_honoured",
        "goto": "a4_09",
        "effects": [
          "flag inquiry_truth",
          "flag dove_honoured",
          "world dove +2"
        ]
      },
      {
        "text": "（待写）inquiry_cover、artheta",
        "goto": "a4_09",
        "effects": [
          "flag inquiry_cover",
          "flag artheta"
        ]
      },
      {
        "text": "（待写）inquiry_blame_lorent、dove_released",
        "goto": "a4_09",
        "effects": [
          "flag inquiry_blame_lorent",
          "flag dove_released"
        ]
      },
      {
        "text": "（待写）inquiry_truth",
        "goto": "a4_09",
        "effects": [
          "flag inquiry_truth"
        ]
      }
    ]
  },
  "a4_09": {
    "id": "a4_09",
    "title": "旗舰",
    "art": "ev_mages_estate_mad",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）crown_castine",
        "goto": "a4_10",
        "effects": [
          "flag crown_castine"
        ]
      },
      {
        "text": "（待写）crown_ioriel、charmed_once",
        "goto": "a4_10",
        "effects": [
          "flag crown_ioriel",
          "flag charmed_once"
        ]
      },
      {
        "text": "（待写）crown_off",
        "goto": "a4_10",
        "effects": [
          "flag crown_off"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_10"
      }
    ]
  },
  "a4_10": {
    "id": "a4_10",
    "title": "贾赫港",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 9"
    ],
    "choices": [
      {
        "text": "（待写）freq_treaty、alvar_pilot",
        "goto": "a4_11",
        "effects": [
          "flag freq_treaty",
          "item +tuning_fork",
          "flag alvar_pilot"
        ]
      },
      {
        "text": "（待写）freq_bought",
        "goto": "a4_11",
        "effects": [
          "flag freq_bought",
          "item +tuning_fork"
        ]
      },
      {
        "text": "（待写）freq_stolen",
        "goto": "a4_11",
        "effects": [
          "flag freq_stolen",
          "item +tuning_fork"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_11"
      }
    ]
  },
  "a4_11": {
    "id": "a4_11",
    "title": "别摇开价",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）jar_asked、jar_price_self",
        "goto": "a4_12",
        "effects": [
          "flag jar_asked",
          "flag jar_price_self",
          "var jar_trust +2"
        ]
      },
      {
        "text": "（待写）jar_asked、jar_price_companion",
        "goto": "a4_12",
        "effects": [
          "flag jar_asked",
          "flag jar_price_companion",
          "var jar_trust +2"
        ]
      },
      {
        "text": "（待写）jar_used_unasked",
        "goto": "a4_12",
        "effects": [
          "flag jar_used_unasked",
          "var jar_trust =0"
        ]
      },
      {
        "text": "（待写）jar_sold",
        "goto": "a4_12",
        "effects": [
          "flag jar_sold",
          "var jar_trust =0"
        ]
      }
    ]
  },
  "a4_12": {
    "id": "a4_12",
    "title": "石狮灯塔",
    "art": "load_2",
    "text": [
      "（待写）"
    ],
    "next": "a4_13"
  },
  "a4_13": {
    "id": "a4_13",
    "title": "卡尔希尔",
    "art": "load_22",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）spires_told、karshyr_at_summit",
        "goto": "a4_14",
        "effects": [
          "flag spires_told",
          "flag karshyr_at_summit"
        ]
      },
      {
        "text": "（待写）spires_sold",
        "goto": "a4_14",
        "effects": [
          "flag spires_sold"
        ]
      },
      {
        "text": "（待写）spires_kept",
        "goto": "a4_14",
        "effects": [
          "flag spires_kept"
        ]
      }
    ]
  },
  "a4_14": {
    "id": "a4_14",
    "title": "尖碑",
    "art": "load_28",
    "text": [
      "（待写）"
    ],
    "next": "a4_15"
  },
  "a4_15": {
    "id": "a4_15",
    "title": "一万盏灯",
    "art": "ev_sarhel_mengi_temple",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）partner_exposed、partner_to_hakhepra",
        "goto": "a4_16",
        "effects": [
          "flag partner_exposed",
          "flag partner_to_hakhepra"
        ]
      },
      {
        "text": "（待写）throne_sat",
        "goto": "a4_16",
        "effects": [
          {
            "if": "is.god",
            "then": [
              "flag throne_sat"
            ]
          }
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_16"
      }
    ]
  },
  "a4_16": {
    "id": "a4_16",
    "title": "他没用飞的",
    "art": "ev_aakhet_dragon_smug",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）signed_partner_paper",
        "goto": "a4_17",
        "effects": [
          "flag signed_partner_paper"
        ]
      },
      {
        "text": "（待写）partner_exposed、partner_to_guns",
        "goto": "a4_17",
        "effects": [
          {
            "if": "!flag.partner_exposed",
            "then": [
              "flag partner_exposed",
              "flag partner_to_guns"
            ]
          }
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_17"
      }
    ]
  },
  "a4_17": {
    "id": "a4_17",
    "title": "团务会：五成一",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）partner_bought_out",
        "goto": "a4_18",
        "effects": [
          "flag partner_bought_out"
        ]
      },
      {
        "text": "（待写）partner_voted_out",
        "goto": "a4_18",
        "effects": [
          "flag partner_voted_out"
        ]
      },
      {
        "text": "（待写）register_forged、etta_left",
        "goto": "a4_18",
        "effects": [
          "flag register_forged",
          "flag etta_left"
        ]
      },
      {
        "text": "（待写）charter_burned、etta_left",
        "goto": "a4_18",
        "effects": [
          "flag charter_burned",
          "flag etta_left"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "a4_18"
      }
    ]
  },
  "a4_18": {
    "id": "a4_18",
    "title": "托拉普里亚卡",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）ship_own、pilots_paid",
        "goto": "a4_19",
        "effects": [
          "flag ship_own",
          "flag pilots_paid"
        ]
      },
      {
        "text": "（待写）ship_client",
        "goto": "a4_19",
        "effects": [
          "flag ship_client"
        ]
      },
      {
        "text": "（待写）ship_karshyr",
        "goto": "a4_19",
        "effects": [
          "flag ship_karshyr"
        ]
      }
    ]
  },
  "a4_19": {
    "id": "a4_19",
    "title": "第四份报告",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）report4_full",
        "goto": "a4_20",
        "effects": [
          "flag report4_full",
          "rep partner +1"
        ]
      },
      {
        "text": "（待写）report4_edited",
        "goto": "a4_20",
        "effects": [
          "flag report4_edited"
        ]
      },
      {
        "text": "（待写）report4_lie",
        "goto": "a4_20",
        "effects": [
          "flag report4_lie",
          "rep partner -1"
        ]
      },
      {
        "text": "（待写）report4_to_company",
        "goto": "a4_20",
        "effects": [
          "flag report4_to_company"
        ]
      }
    ]
  },
  "a4_20": {
    "id": "a4_20",
    "title": "数流星",
    "art": "ev_big_star_in_sky",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 10"
    ],
    "next": "f_01"
  }
};
