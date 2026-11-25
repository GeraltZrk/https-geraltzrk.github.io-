// s1444 act1.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "a1_01": {
    "id": "a1_01",
    "title": "头一夜的门板桌",
    "chapter": "第一幕 · 没人肯埋的兽人",
    "art": "ev_multi_racial_merc",
    "loc": "下卡斯托纳斯 · 旧集市边上的空地",
    "date": "1444年奈拉月12日夜",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +tan",
      "quest q_korgus start",
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag ushka_left"
        ]
      }
    ],
    "next": "a1_02"
  },
  "a1_02": {
    "id": "a1_02",
    "title": "这马生前穿靴子？",
    "loc": "下城 · 钴蓝兵团的哨卡 · 深夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag cart_known"
        ]
      }
    ],
    "next": "a1_03"
  },
  "a1_03": {
    "id": "a1_03",
    "title": "地下通道",
    "art": "ev_goblin_ambush",
    "loc": "巴尔加尔的地下通道",
    "date": "1444年奈拉月13日凌晨",
    "text": [
      "（待写）"
    ],
    "first": [
      "companion +nixee"
    ],
    "next": "a1_04"
  },
  "a1_04": {
    "id": "a1_04",
    "title": "四十个地精",
    "loc": "地下通道的出口 · 天亮前",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['wizard','warlock','druid','bard','ranger','artificer']",
        "then": [
          "flag goblins_hidden"
        ]
      },
      {
        "if": "class in ['rogue','monk','sorcerer']",
        "then": [
          "flag goblins_armed"
        ]
      },
      {
        "if": "class in ['fighter','barbarian','cleric','paladin']",
        "then": [
          "flag goblins_handed"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag goblin_speaker"
        ]
      }
    ],
    "next": "a1_05"
  },
  "a1_05": {
    "id": "a1_05",
    "title": "板车边的营火",
    "art": "ev_dmarvuks",
    "loc": "银池湖路 · 头一晚到次日清晨",
    "text": [
      "（待写）"
    ],
    "next": "a1_06"
  },
  "a1_06": {
    "id": "a1_06",
    "title": "银池湖路",
    "loc": "银池湖西岸",
    "date": "1444年奈拉月中",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['cleric']",
        "then": [
          "flag rose_chain_freed"
        ]
      },
      {
        "if": "class in ['fighter','bard','ranger']",
        "then": [
          "flag rose_chain_bought"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','druid']",
        "then": [
          "flag rose_chain_ignored"
        ]
      }
    ],
    "next": "a1_07"
  },
  "a1_07": {
    "id": "a1_07",
    "title": "第一起：银粉",
    "art": "ev_dragon_fly",
    "loc": "湖边的一个渔村",
    "text": [
      "（待写）"
    ],
    "next": "a1_08"
  },
  "a1_08": {
    "id": "a1_08",
    "title": "第二起：仰头的老太太",
    "art": "ev_big_star_in_sky",
    "loc": "蓝宝石望 · 一座塌了半边的塔",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_faked_dragon"
        ]
      }
    ],
    "next": "a1_09"
  },
  "a1_09": {
    "id": "a1_09",
    "title": "死齿的罐子",
    "loc": "湖路 · 芦苇荡 · 夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag jar_broken"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag ghost_taken"
        ]
      }
    ],
    "next": "a1_10"
  },
  "a1_10": {
    "id": "a1_10",
    "title": "尸首的去向",
    "loc": "银池湖边的一块平地",
    "date": "1444年奈拉月下旬",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['wizard','warlock','bard','ranger','artificer']",
        "then": [
          "flag korgus_rite"
        ]
      },
      {
        "if": "class in []",
        "then": [
          "flag korgus_son"
        ]
      },
      {
        "if": "class in ['fighter','sorcerer','paladin']",
        "then": [
          "flag korgus_spike"
        ]
      },
      {
        "if": "class in ['rogue']",
        "then": [
          "flag korgus_sold"
        ]
      },
      {
        "if": "class in ['monk']",
        "then": [
          "flag korgus_lake"
        ]
      },
      {
        "if": "class in ['barbarian','cleric','druid']",
        "then": [
          "flag korgus_carver"
        ]
      },
      {
        "if": "class in ['fighter','rogue','monk','sorcerer','warlock','paladin']",
        "then": [
          "flag gurzan_owes"
        ]
      },
      {
        "if": "class in ['barbarian']",
        "then": [
          "flag gurzan_grudge"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag ushka_warned"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag entry_struck"
        ]
      },
      {
        "if": "is.god && class in ['artificer']",
        "then": [
          "flag god_named_korgus"
        ]
      },
      {
        "if": "is.god && class in ['fighter','barbarian','wizard','cleric','druid','bard','paladin','ranger']",
        "then": [
          "flag god_denied_korgus"
        ]
      }
    ],
    "next": "a1_11"
  },
  "a1_11": {
    "id": "a1_11",
    "title": "第三起：焦塔顶上的神迹",
    "art": "ev_dragon_fly",
    "loc": "卡斯托纳斯 · 焦塔",
    "date": "1444年真霜月",
    "text": [
      "（待写）"
    ],
    "next": "a1_12"
  },
  "a1_12": {
    "id": "a1_12",
    "title": "萨什卷",
    "loc": "上城区 · 奥特拉克的宅子 · 真霜月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag roll_seen"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag morningstar_hint"
        ]
      }
    ],
    "next": "a1_13"
  },
  "a1_13": {
    "id": "a1_13",
    "title": "试炼山",
    "art": "ev_trails_basilisk",
    "loc": "试炼山",
    "date": "1445年卡斯坦月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag spirits_heard"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag shout_answered"
        ]
      }
    ],
    "next": "a1_14"
  },
  "a1_14": {
    "id": "a1_14",
    "title": "抢化身",
    "art": "ev_piety",
    "loc": "万神道 · 会场外的帐篷",
    "date": "1445年花始月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','wizard','bard','ranger']",
        "then": [
          "flag avatar_carleon"
        ]
      },
      {
        "if": "class in ['fighter','monk','warlock','druid','paladin','artificer']",
        "then": [
          "flag avatar_gryf"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag sightings_exposed"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag has_vote"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_avatar_claimed"
        ]
      }
    ],
    "next": "a1_15"
  },
  "a1_15": {
    "id": "a1_15",
    "title": "第十次泛神会议",
    "art": "load_8",
    "loc": "万神道 · 大帐",
    "date": "1445年花始月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag roll_told"
        ]
      },
      {
        "if": "class in ['wizard','cleric','druid','bard','artificer']",
        "then": [
          "flag testimony_hers"
        ]
      },
      {
        "if": "class in ['rogue','monk','ranger']",
        "then": [
          "flag testimony_host"
        ]
      },
      {
        "if": "class in ['fighter','barbarian','sorcerer','warlock','paladin']",
        "then": [
          "flag testimony_king"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_judged_council"
        ]
      }
    ],
    "next": "a1_16"
  },
  "a1_16": {
    "id": "a1_16",
    "title": "城约",
    "loc": "下城 · 门板桌",
    "date": "1445年花始月",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag groundhawk_deed"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag pixiebury_warned"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','druid']",
        "then": [
          "flag compact_league"
        ]
      },
      {
        "if": "class in ['monk','wizard','sorcerer','warlock','paladin','artificer']",
        "then": [
          "flag compact_corintar"
        ]
      },
      {
        "if": "class in ['cleric']",
        "then": [
          "flag compact_free"
        ]
      },
      {
        "if": "class in ['fighter','bard','ranger']",
        "then": [
          "flag compact_none"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag compact_sealed"
        ]
      }
    ],
    "next": "a1_17"
  },
  "a1_17": {
    "id": "a1_17",
    "title": "往长者郡",
    "art": "ev_orc_with_axe",
    "loc": "艾伦河上游的路",
    "date": "1445年银现月初",
    "text": [
      "（待写）"
    ],
    "next": "a1_18"
  },
  "a1_18": {
    "id": "a1_18",
    "title": "银现月四日",
    "loc": "长者郡的废墟 · 古尔赞的火",
    "date": "1445年银现月4日",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag moot_defused"
        ]
      },
      {
        "if": "class in ['warlock','cleric','bard']",
        "then": [
          "flag road_ghurad"
        ]
      },
      {
        "if": "class in ['barbarian','monk','wizard','druid','ranger']",
        "then": [
          "flag road_arosha"
        ]
      },
      {
        "if": "class in ['fighter','rogue','sorcerer','paladin','artificer']",
        "then": [
          "flag road_gurzan"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag god_of_the_tide"
        ]
      }
    ],
    "next": "a1_19"
  },
  "a1_19": {
    "id": "a1_19",
    "title": "车空了",
    "loc": "长者郡外的营火 · 当夜",
    "text": [
      "（待写）"
    ],
    "first": [
      "level 4"
    ],
    "next": "a2_01"
  }
};
