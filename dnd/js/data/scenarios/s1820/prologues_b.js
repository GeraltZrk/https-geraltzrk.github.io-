// prologues_b.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 prologues_b.js
export const SCENES = {
  "p_lorent_01": {
    "id": "p_lorent_01",
    "title": "画像上的口气",
    "chapter": "序章 · 新年",
    "art": "ev_mages_estate_mad",
    "text": [
      "（待写）"
    ],
    "next": "p_lorent_02"
  },
  "p_lorent_02": {
    "id": "p_lorent_02",
    "title": "三张条子",
    "art": "ev_female_spy",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）lorent_patron_queen",
        "goto": "p_lorent_03",
        "effects": [
          "flag lorent_patron_queen"
        ]
      },
      {
        "text": "（待写）lorent_patron_guard",
        "goto": "p_lorent_03",
        "effects": [
          "flag lorent_patron_guard"
        ]
      },
      {
        "text": "（待写）lorent_patron_eilis",
        "goto": "p_lorent_03",
        "effects": [
          "flag lorent_patron_eilis"
        ]
      }
    ]
  },
  "p_lorent_03": {
    "id": "p_lorent_03",
    "title": "试口风",
    "text": [
      "（待写）"
    ],
    "next": "p_lorent_04"
  },
  "p_lorent_04": {
    "id": "p_lorent_04",
    "title": "静养所的窗下",
    "text": [
      "（待写）"
    ],
    "next": "p_lorent_05"
  },
  "p_lorent_05": {
    "id": "p_lorent_05",
    "title": "调令",
    "text": [
      "（待写）"
    ],
    "next": "p_lorent_06"
  },
  "p_lorent_06": {
    "id": "p_lorent_06",
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
  "p_karshyr_01": {
    "id": "p_karshyr_01",
    "title": "海吐了东西",
    "chapter": "序章 · 新年",
    "text": [
      "（待写）"
    ],
    "next": "p_karshyr_02"
  },
  "p_karshyr_02": {
    "id": "p_karshyr_02",
    "title": "收条",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）alvar_friend",
        "goto": "p_karshyr_03",
        "effects": [
          "flag alvar_friend"
        ]
      },
      {
        "text": "（待写）fork_receipt",
        "goto": "p_karshyr_03",
        "effects": [
          "flag fork_receipt"
        ]
      },
      {
        "text": "（待写）fork_sketch",
        "goto": "p_karshyr_03",
        "effects": [
          "flag fork_sketch"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "p_karshyr_03"
      }
    ]
  },
  "p_karshyr_03": {
    "id": "p_karshyr_03",
    "title": "从没吐过",
    "text": [
      "（待写）"
    ],
    "next": "p_karshyr_04"
  },
  "p_karshyr_04": {
    "id": "p_karshyr_04",
    "title": "标本",
    "text": [
      "（待写）"
    ],
    "next": "p_karshyr_05"
  },
  "p_karshyr_05": {
    "id": "p_karshyr_05",
    "title": "考察题目",
    "text": [
      "（待写）"
    ],
    "next": "p_karshyr_06"
  },
  "p_karshyr_06": {
    "id": "p_karshyr_06",
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
  }
};
