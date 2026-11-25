// s1444 prologues_b.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "p_grudge_01": {
    "id": "p_grudge_01",
    "title": "巴尔加尔盖的城",
    "chapter": "序章 · 负怨者兵团",
    "loc": "南卡斯托纳斯",
    "date": "1444年奈拉月11日午后",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag knows_underpass"
        ]
      }
    ],
    "next": "p_grudge_02"
  },
  "p_grudge_02": {
    "id": "p_grudge_02",
    "title": "龙炉的渣",
    "loc": "龙炉",
    "text": [
      "（待写）"
    ],
    "next": "p_grudge_03"
  },
  "p_grudge_03": {
    "id": "p_grudge_03",
    "title": "炉子还点得着吗",
    "loc": "渣堆底下",
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
    "next": "p_grudge_04"
  },
  "p_grudge_04": {
    "id": "p_grudge_04",
    "title": "验明正身",
    "loc": "下城 · 空地",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag body_verified"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag ushka_wary"
        ]
      }
    ],
    "next": "p_grudge_05"
  },
  "p_grudge_05": {
    "id": "p_grudge_05",
    "title": "头砍了不好认",
    "loc": "空地边上",
    "text": [
      "（待写）"
    ],
    "next": "p_grudge_06"
  },
  "p_grudge_06": {
    "id": "p_grudge_06",
    "title": "上车",
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
  "p_tide_01": {
    "id": "p_tide_01",
    "title": "手背",
    "chapter": "序章 · 退潮的人",
    "loc": "旧集市边上",
    "date": "1444年奈拉月11日午后",
    "text": [
      "（待写）"
    ],
    "next": "p_tide_02"
  },
  "p_tide_02": {
    "id": "p_tide_02",
    "title": "最后一个",
    "loc": "一条死巷",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag p_surrendered"
        ]
      }
    ],
    "next": "p_tide_03"
  },
  "p_tide_03": {
    "id": "p_tide_03",
    "title": "他还在打吗",
    "loc": "墙根",
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
    "next": "p_tide_04"
  },
  "p_tide_04": {
    "id": "p_tide_04",
    "title": "算俘虏还是算尸首",
    "loc": "空地边上",
    "text": [
      "（待写）"
    ],
    "next": "p_tide_05"
  },
  "p_tide_05": {
    "id": "p_tide_05",
    "title": "抬得动兽人的",
    "loc": "板车边",
    "text": [
      "（待写）"
    ],
    "next": "p_tide_06"
  },
  "p_tide_06": {
    "id": "p_tide_06",
    "title": "没有队长的人",
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
  }
};
