// s1444 prologues_a.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "p_corintar_01": {
    "id": "p_corintar_01",
    "title": "盾墙",
    "chapter": "序章 · 科琳的队伍",
    "art": "load_5",
    "loc": "下卡斯托纳斯 · 旧集市边上的空地",
    "date": "1444年奈拉月11日午后",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag saw_her_look"
        ]
      }
    ],
    "next": "p_corintar_02"
  },
  "p_corintar_02": {
    "id": "p_corintar_02",
    "title": "没听见撤退的人",
    "art": "ev_orc_with_axe",
    "loc": "同上 · 片刻之后",
    "text": [
      "（待写）"
    ],
    "next": "p_corintar_03"
  },
  "p_corintar_03": {
    "id": "p_corintar_03",
    "title": "她这回还起来吗",
    "loc": "空地北角的墙根",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag p_truth"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag p_lied"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag god_revealed"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_shrine"
        ]
      }
    ],
    "next": "p_corintar_04"
  },
  "p_corintar_04": {
    "id": "p_corintar_04",
    "title": "不许割头发",
    "loc": "两位倒下的地方",
    "text": [
      "（待写）"
    ],
    "next": "p_corintar_05"
  },
  "p_corintar_05": {
    "id": "p_corintar_05",
    "title": "守夜",
    "loc": "空地 · 入夜到天亮",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag vigil_knelt"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_tried_raise"
        ]
      }
    ],
    "next": "p_corintar_06"
  },
  "p_corintar_06": {
    "id": "p_corintar_06",
    "title": "门板桌",
    "art": "ev_multi_racial_merc",
    "loc": "空地",
    "date": "1444年奈拉月12日清晨",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      "companion +ushka",
      "quest q_cart start",
      "quest q_dragon start",
      "rest short"
    ],
    "next": "a1_01"
  },
  "p_sons_01": {
    "id": "p_sons_01",
    "title": "世家的街",
    "chapter": "序章 · 达梅里亚之子",
    "art": "ev_lilac_wars",
    "loc": "北卡斯托纳斯 · 一条萨什部的街",
    "date": "1444年奈拉月11日午后",
    "text": [
      "（待写）"
    ],
    "next": "p_sons_02"
  },
  "p_sons_02": {
    "id": "p_sons_02",
    "title": "抢东西的",
    "loc": "同一条街",
    "text": [
      "（待写）"
    ],
    "next": "p_sons_03"
  },
  "p_sons_03": {
    "id": "p_sons_03",
    "title": "军士长",
    "loc": "街角的门廊",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag p_truth"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag p_lied"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag urn_promised"
        ]
      }
    ],
    "next": "p_sons_04"
  },
  "p_sons_04": {
    "id": "p_sons_04",
    "title": "点人头的",
    "art": "ev_hre",
    "loc": "街口",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag rogier_counted"
        ]
      }
    ],
    "next": "p_sons_05"
  },
  "p_sons_05": {
    "id": "p_sons_05",
    "title": "跪不跪",
    "loc": "街上，入夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag sons_knelt"
        ]
      }
    ],
    "next": "p_sons_06"
  },
  "p_sons_06": {
    "id": "p_sons_06",
    "title": "门板桌",
    "art": "ev_multi_racial_merc",
    "loc": "下城 · 空地",
    "date": "1444年奈拉月12日清晨",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      "companion +ushka",
      "quest q_cart start",
      "quest q_dragon start",
      "rest short"
    ],
    "next": "a1_01"
  },
  "p_wex_01": {
    "id": "p_wex_01",
    "title": "五层楼的屋顶",
    "chapter": "序章 · 皇帝的差事",
    "loc": "峭壁区",
    "date": "1444年奈拉月11日午后",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag dug_the_pit"
        ]
      }
    ],
    "next": "p_wex_02"
  },
  "p_wex_02": {
    "id": "p_wex_02",
    "title": "下楼",
    "loc": "楼梯间",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag letter_shown"
        ]
      }
    ],
    "next": "p_wex_03"
  },
  "p_wex_03": {
    "id": "p_wex_03",
    "title": "皇上知道吗",
    "loc": "楼下的水槽边",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag p_truth"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag p_lied"
        ]
      }
    ],
    "next": "p_wex_04"
  },
  "p_wex_04": {
    "id": "p_wex_04",
    "title": "桥",
    "loc": "银瀑上的石桥",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag rogier_spotted"
        ]
      }
    ],
    "next": "p_wex_05"
  },
  "p_wex_05": {
    "id": "p_wex_05",
    "title": "头一只信鸽",
    "art": "ev_hre",
    "loc": "峭壁区的鸽笼 · 天黑前",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['monk','sorcerer','cleric']",
        "then": [
          "flag report1_true"
        ]
      },
      {
        "if": "class in ['barbarian','wizard','druid','ranger']",
        "then": [
          "flag report1_false"
        ]
      }
    ],
    "next": "p_wex_06"
  },
  "p_wex_06": {
    "id": "p_wex_06",
    "title": "报名",
    "art": "ev_multi_racial_merc",
    "loc": "下城 · 空地",
    "date": "1444年奈拉月12日清晨",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 2",
      "companion +ushka",
      "quest q_cart start",
      "quest q_dragon start",
      "rest short"
    ],
    "next": "a1_01"
  }
};
