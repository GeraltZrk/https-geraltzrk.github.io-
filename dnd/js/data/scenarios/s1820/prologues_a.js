// prologues_a.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 prologues_a.js
export const SCENES = {
  "p_anbennar_01": {
    "id": "p_anbennar_01",
    "title": "口令",
    "chapter": "序章 · 新年",
    "art": "ev_far_and_wide",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）ny_passed_order",
        "goto": "p_anbennar_02",
        "effects": [
          "flag ny_passed_order"
        ]
      },
      {
        "text": "（待写）ny_held_order",
        "goto": "p_anbennar_02",
        "effects": [
          "flag ny_held_order"
        ]
      },
      {
        "text": "（待写）ny_stood_between",
        "goto": "p_anbennar_02",
        "effects": [
          "flag ny_stood_between"
        ]
      }
    ]
  },
  "p_anbennar_02": {
    "id": "p_anbennar_02",
    "title": "遣散单",
    "text": [
      "（待写）"
    ],
    "next": "p_anbennar_03"
  },
  "p_anbennar_03": {
    "id": "p_anbennar_03",
    "title": "自备靴子",
    "text": [
      "（待写）"
    ],
    "next": "p_anbennar_04"
  },
  "p_anbennar_04": {
    "id": "p_anbennar_04",
    "title": "堵路",
    "text": [
      "（待写）"
    ],
    "next": "p_anbennar_05"
  },
  "p_anbennar_05": {
    "id": "p_anbennar_05",
    "title": "入行礼",
    "text": [
      "（待写）"
    ],
    "next": "p_anbennar_06"
  },
  "p_anbennar_06": {
    "id": "p_anbennar_06",
    "title": "铜牌",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      "flag captain",
      "companion +bura",
      "quest q_jar start",
      "codex c_company",
      {
        "if": "faction == 'seal'",
        "then": [
          "gold +30"
        ]
      }
    ],
    "next": "a1_01"
  },
  "p_concord_01": {
    "id": "p_concord_01",
    "title": "第十四行",
    "chapter": "序章 · 新年",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "race == 'orc'",
        "then": [
          "flag bought_free"
        ]
      }
    ],
    "choices": [
      {
        "text": "（待写）line14_struck",
        "goto": "p_concord_02",
        "effects": [
          "flag line14_struck"
        ]
      },
      {
        "text": "（待写）line14_read",
        "goto": "p_concord_02",
        "effects": [
          "flag line14_read"
        ]
      },
      {
        "text": "（待写）line14_pen",
        "goto": "p_concord_02",
        "effects": [
          "flag line14_pen"
        ]
      },
      {
        "text": "（待写）line14_bought",
        "goto": "p_concord_02",
        "effects": [
          "flag line14_bought"
        ]
      }
    ]
  },
  "p_concord_02": {
    "id": "p_concord_02",
    "title": "码头打手",
    "text": [
      "（待写）"
    ],
    "next": "p_concord_03"
  },
  "p_concord_03": {
    "id": "p_concord_03",
    "title": "日志上的一句话",
    "text": [
      "（待写）"
    ],
    "next": "p_concord_04"
  },
  "p_concord_04": {
    "id": "p_concord_04",
    "title": "协约速度",
    "art": "ev_far_and_wide",
    "text": [
      "（待写）"
    ],
    "next": "p_concord_05"
  },
  "p_concord_05": {
    "id": "p_concord_05",
    "title": "四百金冠",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）debt_no_term",
        "goto": "p_concord_06",
        "effects": [
          "flag debt_no_term"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "p_concord_06"
      }
    ]
  },
  "p_concord_06": {
    "id": "p_concord_06",
    "title": "铜牌",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      "flag captain",
      "companion +bura",
      "quest q_jar start",
      "codex c_company",
      {
        "if": "faction == 'seal'",
        "then": [
          "gold +30"
        ]
      }
    ],
    "next": "a1_01"
  },
  "p_unowned_01": {
    "id": "p_unowned_01",
    "title": "今天礼拜几",
    "chapter": "序章 · 新年",
    "art": "ev_artifice_gear",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "race == 'mechanim'",
        "then": [
          "flag woke_1820"
        ]
      }
    ],
    "next": "p_unowned_02"
  },
  "p_unowned_02": {
    "id": "p_unowned_02",
    "title": "停机日志",
    "text": [
      "（待写）"
    ],
    "next": "p_unowned_03"
  },
  "p_unowned_03": {
    "id": "p_unowned_03",
    "title": "后院的钥匙",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）exit_ran",
        "goto": "p_unowned_04",
        "effects": [
          "flag exit_ran"
        ]
      },
      {
        "text": "（待写）exit_stolen",
        "goto": "p_unowned_04",
        "effects": [
          "flag exit_stolen"
        ]
      },
      {
        "text": "（待写）exit_sold",
        "goto": "p_unowned_04",
        "effects": [
          "flag exit_sold"
        ]
      }
    ]
  },
  "p_unowned_04": {
    "id": "p_unowned_04",
    "title": "报废班",
    "text": [
      "（待写）"
    ],
    "next": "p_unowned_05"
  },
  "p_unowned_05": {
    "id": "p_unowned_05",
    "title": "器材过街",
    "text": [
      "（待写）"
    ],
    "next": "p_unowned_06"
  },
  "p_unowned_06": {
    "id": "p_unowned_06",
    "title": "十四号",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      "flag captain",
      "companion +bura",
      "quest q_jar start",
      "codex c_company",
      {
        "if": "faction == 'seal'",
        "then": [
          "gold +30"
        ]
      },
      "companion +middlesday",
      "quest q_middlesday start"
    ],
    "next": "a1_01"
  }
};
