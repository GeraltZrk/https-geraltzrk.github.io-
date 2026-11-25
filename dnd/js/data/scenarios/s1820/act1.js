// act1.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 act1.js
export const SCENES = {
  "a1_01": {
    "id": "a1_01",
    "title": "标签写错了",
    "chapter": "第一幕 · 收成",
    "art": "ev_far_and_wide",
    "text": [
      "（待写）"
    ],
    "next": "a1_02"
  },
  "a1_02": {
    "id": "a1_02",
    "title": "出价",
    "text": [
      "（待写）"
    ],
    "next": "a1_03"
  },
  "a1_03": {
    "id": "a1_03",
    "title": "十四号器材",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "!party.middlesday",
        "then": [
          "companion +middlesday",
          "quest q_middlesday start"
        ]
      },
      "quest q_bura start"
    ],
    "next": "a1_04"
  },
  "a1_04": {
    "id": "a1_04",
    "title": "将军的茶",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_harvest start",
      "quest q_guilhem start"
    ],
    "next": "a1_05"
  },
  "a1_05": {
    "id": "a1_05",
    "title": "驳船",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +guilhem"
    ],
    "next": "a1_06"
  },
  "a1_06": {
    "id": "a1_06",
    "title": "头一个区",
    "text": [
      "（待写）"
    ],
    "next": "a1_07"
  },
  "a1_07": {
    "id": "a1_07",
    "title": "电报",
    "text": [
      "（待写）"
    ],
    "next": "a1_08"
  },
  "a1_08": {
    "id": "a1_08",
    "title": "团务会：暂缓名单",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）skiplist_obeyed",
        "goto": "a1_09",
        "effects": [
          "flag skiplist_obeyed"
        ]
      },
      {
        "text": "（待写）skiplist_defied",
        "goto": "a1_09",
        "effects": [
          "flag skiplist_defied"
        ]
      },
      {
        "text": "（待写）skiplist_halved",
        "goto": "a1_09",
        "effects": [
          "flag skiplist_halved"
        ]
      }
    ]
  },
  "a1_09": {
    "id": "a1_09",
    "title": "梨林",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 3"
    ],
    "next": "a1_10"
  },
  "a1_10": {
    "id": "a1_10",
    "title": "夜袭",
    "art": "ev_fireball",
    "text": [
      "（待写）"
    ],
    "next": "a1_11"
  },
  "a1_11": {
    "id": "a1_11",
    "title": "魔杖贵族",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）lianne_arrested",
        "goto": "a1_12",
        "effects": [
          "flag lianne_arrested"
        ]
      },
      {
        "text": "（待写）lianne_freed",
        "goto": "a1_12",
        "effects": [
          "flag lianne_freed"
        ]
      },
      {
        "text": "（待写）lianne_supplied",
        "goto": "a1_12",
        "effects": [
          "flag lianne_supplied"
        ]
      }
    ]
  },
  "a1_12": {
    "id": "a1_12",
    "title": "三倍薪水",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）purse_spent_mages",
        "goto": "a1_13",
        "effects": [
          {
            "if": "origin == 'lorent'",
            "then": [
              "flag purse_spent_mages"
            ]
          }
        ]
      },
      {
        "text": "（待写）purse_kept",
        "goto": "a1_13",
        "effects": [
          {
            "if": "origin == 'lorent'",
            "then": [
              "flag purse_kept"
            ]
          }
        ]
      },
      {
        "text": "（待写）purse_to_peargrove",
        "goto": "a1_13",
        "effects": [
          {
            "if": "origin == 'lorent'",
            "then": [
              "flag purse_to_peargrove"
            ]
          }
        ]
      }
    ]
  },
  "a1_13": {
    "id": "a1_13",
    "title": "公投日",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_konwell start"
    ],
    "choices": [
      {
        "text": "（待写）square_stood",
        "goto": "a1_14",
        "effects": [
          "flag square_stood"
        ]
      },
      {
        "text": "（待写）square_mages_out、volleys",
        "goto": "a1_14",
        "effects": [
          "flag square_mages_out",
          "flag volleys"
        ]
      },
      {
        "text": "（待写）square_held_line、volleys",
        "goto": "a1_14",
        "effects": [
          "flag square_held_line",
          "flag volleys"
        ]
      }
    ]
  },
  "a1_14": {
    "id": "a1_14",
    "title": "广场之后",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag shot_counted",
      "quest q_konwell stage 2"
    ],
    "choices": [
      {
        "text": "（待写）blame_crowd",
        "goto": "a1_15",
        "effects": [
          "flag blame_crowd"
        ]
      },
      {
        "text": "（待写）blame_officer",
        "goto": "a1_15",
        "effects": [
          "flag blame_officer"
        ]
      },
      {
        "text": "（待写）blame_unknown",
        "goto": "a1_15",
        "effects": [
          "flag blame_unknown"
        ]
      }
    ]
  },
  "a1_15": {
    "id": "a1_15",
    "title": "收成",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_harvest done"
    ],
    "next": "a1_16"
  },
  "a1_16": {
    "id": "a1_16",
    "title": "只看一眼",
    "art": "ev_god_fragment",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_narwen start"
    ],
    "next": "a1_17"
  },
  "a1_17": {
    "id": "a1_17",
    "title": "头一份报告",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +narwen"
    ],
    "choices": [
      {
        "text": "（待写）report1_full",
        "goto": "a1_18",
        "effects": [
          "flag report1_full",
          "rep partner +1"
        ]
      },
      {
        "text": "（待写）report1_edited",
        "goto": "a1_18",
        "effects": [
          "flag report1_edited"
        ]
      },
      {
        "text": "（待写）report1_lie",
        "goto": "a1_18",
        "effects": [
          "flag report1_lie",
          "rep partner -1"
        ]
      }
    ]
  },
  "a1_18": {
    "id": "a1_18",
    "title": "数流星",
    "art": "ev_big_star_in_sky",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 4"
    ],
    "next": "a2_01"
  }
};
