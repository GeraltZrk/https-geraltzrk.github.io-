// s1444 act4.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "a4_01": {
    "id": "a4_01",
    "title": "九个冬天以后",
    "chapter": "第四幕 · 诸神之王",
    "loc": "卡斯托纳斯 · 万神道",
    "date": "1461年秋",
    "text": [
      "（待写）"
    ],
    "next": "a4_02"
  },
  "a4_02": {
    "id": "a4_02",
    "title": "烧过的世界树",
    "art": "ev_feyforest",
    "loc": "旧日庇护地 · 世界树的旧址（枢纽）",
    "text": [
      "（待写）"
    ],
    "next": "a4_03"
  },
  "a4_03": {
    "id": "a4_03",
    "title": "青道",
    "art": "load_27",
    "loc": "深林 · 一条青道上的木精灵聚落",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag arun_notes"
        ]
      }
    ],
    "next": "a4_04"
  },
  "a4_04": {
    "id": "a4_04",
    "title": "青道上的猎",
    "art": "ev_wood_elf_hunt",
    "loc": "深林 · 青道 · 入夜",
    "text": [
      "（待写）"
    ],
    "next": "a4_05"
  },
  "a4_05": {
    "id": "a4_05",
    "title": "黑枝亲王的价",
    "art": "ev_dark_forest",
    "loc": "深林 · 影林",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag blackbranch_deal"
        ]
      }
    ],
    "next": "a4_06"
  },
  "a4_06": {
    "id": "a4_06",
    "title": "缺一个傻子",
    "loc": "妖精界 · 林隙 · 愚者亲王的宫",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer']",
        "then": [
          "flag toll_nixee"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag toll_years"
        ]
      },
      {
        "if": "class in ['warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag toll_story"
        ]
      },
      {
        "if": "class in []",
        "then": [
          "flag toll_staff"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag owes_fey_miracle"
        ]
      }
    ],
    "next": "a4_07"
  },
  "a4_07": {
    "id": "a4_07",
    "title": "没有太阳的天",
    "art": "load_19",
    "loc": "妖精界 · 一条不肯直着走的路",
    "text": [
      "（待写）"
    ],
    "next": "a4_08"
  },
  "a4_08": {
    "id": "a4_08",
    "title": "红冬",
    "art": "load_14",
    "loc": "阿伦蒂尔 · 血林",
    "text": [
      "（待写）"
    ],
    "next": "a4_09"
  },
  "a4_09": {
    "id": "a4_09",
    "title": "血律",
    "loc": "血林深处 · 一棵渗得最凶的树下",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag lies_cursed"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag lies_confessed"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag garaele_leaving"
        ]
      }
    ],
    "next": "a4_10"
  },
  "a4_10": {
    "id": "a4_10",
    "title": "塞拉河口的集",
    "loc": "血林 · 塞拉河口 · 奎内赫人的聚落（枢纽）",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag contract_staff"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag relic_given"
        ]
      }
    ],
    "next": "a4_11"
  },
  "a4_11": {
    "id": "a4_11",
    "title": "饮血者",
    "art": "ev_the_covenant",
    "loc": "塞拉河上游 · 离岸两天的林子",
    "text": [
      "（待写）"
    ],
    "next": "a4_12"
  },
  "a4_12": {
    "id": "a4_12",
    "title": "断权杖",
    "loc": "一座遗迹精灵的小神龛",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag staff_seen"
    ],
    "next": "a4_13"
  },
  "a4_13": {
    "id": "a4_13",
    "title": "守门的",
    "art": "ev_high_temple_in_distance",
    "loc": "壁画神殿 · 入口",
    "text": [
      "（待写）"
    ],
    "next": "a4_14"
  },
  "a4_14": {
    "id": "a4_14",
    "title": "壁画厅",
    "loc": "壁画神殿 · 地下的长厅",
    "text": [
      "（待写）"
    ],
    "first": [
      "flag war_of_two_seen"
    ],
    "next": "a4_15"
  },
  "a4_15": {
    "id": "a4_15",
    "title": "最后一幅",
    "art": "load_17",
    "loc": "壁画厅尽头 · 树根后面",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag tan_read_it"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag tan_shielded"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag god_answered_for_him"
        ]
      }
    ],
    "next": "a4_16"
  },
  "a4_16": {
    "id": "a4_16",
    "title": "头一场丧事",
    "loc": "壁画厅",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag rite_done"
        ]
      }
    ],
    "next": "a4_17"
  },
  "a4_17": {
    "id": "a4_17",
    "title": "那面墙",
    "loc": "壁画厅",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag wall_rubbed"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag wall_sealed"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag wall_defaced"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag tan_stayed"
        ]
      }
    ],
    "next": "a4_18"
  },
  "a4_18": {
    "id": "a4_18",
    "title": "那根杖，和回去的路",
    "loc": "神龛，然后是秋门",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','warlock','paladin']",
        "then": [
          "flag staff_home"
        ]
      },
      {
        "if": "class in ['barbarian','sorcerer','cleric','druid']",
        "then": [
          "flag staff_returned"
        ]
      },
      {
        "if": "class in ['rogue','wizard','bard','ranger','artificer']",
        "then": [
          "flag staff_fey"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag contract_broken"
        ]
      }
    ],
    "next": "a4_19"
  },
  "a4_19": {
    "id": "a4_19",
    "title": "出林",
    "loc": "深林边缘 · 旧日庇护地以南",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 10"
    ],
    "next": "f_01"
  }
};
