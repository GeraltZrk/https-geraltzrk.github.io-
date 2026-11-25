// s1444 finale.js: scene stubs generated from BIBLE.md §11 (titles, art, places, dates, order).
// Replace each stub with the written scene. `first` on a stub holds placeholders only: the flags §12 says this
// scene sets (with stand-in conditions so test runs vary), plus the fixed milestones/companions from §11.
// Keep the milestones and companion joins; replace the stand-in flag conditions with real choices.
export const SCENES = {
  "f_01": {
    "id": "f_01",
    "title": "十一年，一口气",
    "chapter": "终章 · 卡斯托纳斯，又一次",
    "loc": "东坎诺 · 往卡斯托纳斯的路上",
    "date": "1472年奈拉月1日",
    "text": [
      "（待写）"
    ],
    "first": [
      "quest q_southgate start",
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag garaele_left"
        ]
      }
    ],
    "next": "f_02"
  },
  "f_02": {
    "id": "f_02",
    "title": "没屋顶的神殿",
    "loc": "卡斯托纳斯 · 万神道",
    "date": "1472年奈拉月1日傍晚",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','rogue','sorcerer','cleric','bard','paladin','artificer']",
        "then": [
          "flag tan_told"
        ]
      },
      {
        "if": "class in ['monk','wizard','warlock','ranger']",
        "then": [
          "flag tan_silent"
        ]
      },
      {
        "if": "class in ['barbarian','druid']",
        "then": [
          "flag tan_forced"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag tan_morningstar"
        ]
      }
    ],
    "next": "f_03"
  },
  "f_03": {
    "id": "f_03",
    "title": "门板桌，又一次",
    "art": "ev_multi_racial_merc",
    "loc": "下城 · 旧集市边上的空地（枢纽）",
    "date": "1472年奈拉月2日至5日",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag told_dominic"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag temples_first"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag ushka_spoke"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag arosha_at_table"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag bones_at_gate"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag underpass_held"
        ]
      },
      {
        "if": "class in ['fighter','barbarian','warlock','druid','paladin']",
        "then": [
          "flag staff_to_dominic"
        ]
      },
      {
        "if": "class in ['rogue','cleric','bard','artificer']",
        "then": [
          "flag staff_to_temples"
        ]
      }
    ],
    "next": "f_04"
  },
  "f_04": {
    "id": "f_04",
    "title": "来要这句话的人",
    "art": "ev_castellos_is_dead",
    "loc": "下城 · 板车边",
    "date": "1472年奈拉月5日夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag told_printed"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag sold_morningstar"
        ]
      },
      "flag prophecy_known",
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag prophecy_told"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag skyking_slur"
        ]
      }
    ],
    "next": "f_05"
  },
  "f_05": {
    "id": "f_05",
    "title": "晨星会的手",
    "loc": "下城 · 地下通道",
    "date": "1472年奈拉月5日深夜",
    "text": [
      "（待写）"
    ],
    "next": "f_06"
  },
  "f_06": {
    "id": "f_06",
    "title": "南门",
    "art": "ev_undead_army",
    "loc": "卡斯塔诺白墙 · 南门",
    "date": "1472年奈拉月6日",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag southgate_held"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_held_gate"
        ]
      }
    ],
    "next": "f_07"
  },
  "f_07": {
    "id": "f_07",
    "title": "试炼山，夜里",
    "loc": "试炼山 · 誓石",
    "date": "1472年奈拉月8日夜",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['rogue','wizard','sorcerer','warlock','bard','ranger']",
        "then": [
          "flag claimant_kalista"
        ]
      },
      {
        "if": "class in ['monk','artificer']",
        "then": [
          "flag claimant_arosha"
        ]
      }
    ],
    "next": "f_08"
  },
  "f_08": {
    "id": "f_08",
    "title": "万神道上的会",
    "art": "ev_castellos_is_dead",
    "loc": "万神道 · 没屋顶的神殿前",
    "date": "1472年奈拉月9日至10日",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag conclave_held"
        ]
      },
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag fourth_offered"
        ]
      }
    ],
    "next": "f_09"
  },
  "f_09": {
    "id": "f_09",
    "title": "十一月十一日",
    "art": "ev_apostle",
    "loc": "下城 · 旧集市边上的空地",
    "date": "1472年奈拉月11日",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag gurzan_treaty"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag gurzan_soul_taken"
        ]
      },
      {
        "if": "class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag laurens_stopped"
        ]
      },
      {
        "if": "class in ['fighter','rogue','monk','paladin','artificer']",
        "then": [
          "flag gurzan_buried"
        ]
      },
      {
        "if": "class in ['barbarian','sorcerer','warlock','cleric']",
        "then": [
          "flag gurzan_returned"
        ]
      },
      {
        "if": "class in ['barbarian','rogue','cleric','druid']",
        "then": [
          "flag sided_gurzan"
        ]
      }
    ],
    "next": "f_10"
  },
  "f_10": {
    "id": "f_10",
    "title": "最后一件事",
    "loc": "下城 · 门板桌",
    "date": "1472年奈拉月11日天黑以后",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "is.god && class in ['fighter','monk','wizard','sorcerer','warlock','bard','paladin','ranger','artificer']",
        "then": [
          "flag god_held_city"
        ]
      }
    ],
    "choices": [
      {
        "text": "把你的那节断链也扔进去",
        "if": "!flag.southgate_held && world.embers >= 8",
        "goto": "end_dookansday"
      },
      {
        "text": "把城拿回来",
        "tag": "神",
        "if": "is.god && !flag.southgate_held && world.embers >= 8",
        "effects": [
          "flag god_held_city",
          "flag southgate_held",
          "world room =0",
          "rep clans -5"
        ],
        "goto": "end_standing"
      },
      {
        "text": "把权杖头交给阿坦，请他把第四十一句念完",
        "if": "flag.southgate_held || world.embers < 8",
        "req": "world.word >= 7 && world.peace >= 5 && world.scale >= -2 && world.scale <= 2 && flag.conclave_held && party.tan && flag.tan_told && (flag.wall_rubbed || flag.staff_home)",
        "reqText": "话传得够远，太平还在，天平不偏；会开成了；阿坦在，也说了；手里有拓片或那根杖",
        "goto": "end_funeral"
      },
      {
        "text": "跟多米尼克走到那块空地中间去",
        "if": "(flag.southgate_held || world.embers < 8) && world.scale >= 3 && world.word >= 6 && rep.corintar >= 3",
        "goto": "end_sword"
      },
      {
        "text": "把东西交给主祭们，关上门",
        "if": "(flag.southgate_held || world.embers < 8) && world.scale <= -3 && world.peace >= 6 && rep.temples >= 3 && flag.temples_first",
        "goto": "end_eldest"
      },
      {
        "text": "站在誓石底下，替她作见证",
        "if": "(flag.claimant_kalista || flag.claimant_arosha) && flag.southgate_held",
        "goto": "end_mantle"
      },
      {
        "text": "把你的那节断链扔进银瀑",
        "if": "(flag.southgate_held || world.embers < 8) && flag.sided_gurzan",
        "goto": "end_dookansday"
      },
      {
        "text": "在那把空着的椅子前头站住",
        "tag": "神",
        "if": "(flag.southgate_held || world.embers < 8) && is.god && flag.conclave_held",
        "goto": "end_fourth"
      },
      {
        "text": "在门板桌上按手印，谁也不说",
        "if": "flag.southgate_held || world.embers < 8",
        "goto": "end_standing"
      }
    ]
  },
  "end_funeral": {
    "id": "end_funeral",
    "title": "送神",
    "art": "load_17",
    "loc": "万神道 · 没屋顶的神殿",
    "date": "1472年奈拉月",
    "text": [
      "（待写）"
    ],
    "ending": "funeral"
  },
  "end_sword": {
    "id": "end_sword",
    "title": "剑上天",
    "art": "load_8",
    "loc": "下城 · 那块空地",
    "text": [
      "（待写）"
    ],
    "ending": "sword"
  },
  "end_eldest": {
    "id": "end_eldest",
    "title": "长子",
    "art": "ev_adeanic_war",
    "loc": "万神道 · 一间关着门的偏殿",
    "text": [
      "（待写）"
    ],
    "ending": "eldest"
  },
  "end_standing": {
    "id": "end_standing",
    "title": "军令未撤",
    "loc": "下城 · 门板桌",
    "text": [
      "（待写）"
    ],
    "ending": "standing"
  },
  "end_mantle": {
    "id": "end_mantle",
    "title": "卡斯坦的披风",
    "loc": "试炼山 · 誓石",
    "text": [
      "（待写）"
    ],
    "ending": "mantle"
  },
  "end_dookansday": {
    "id": "end_dookansday",
    "title": "杜坎之日",
    "art": "ev_orc_with_axe",
    "loc": "下城 · 银瀑边",
    "text": [
      "（待写）"
    ],
    "ending": "dookansday"
  },
  "end_fourth": {
    "id": "end_fourth",
    "title": "第四个人选",
    "loc": "万神道 · 大帐",
    "text": [
      "（待写）"
    ],
    "first": [
      {
        "if": "is.god && class in ['monk','cleric','artificer']",
        "then": [
          "flag fourth_sat"
        ]
      },
      {
        "if": "is.god && class in ['fighter','wizard','sorcerer','druid','paladin','ranger']",
        "then": [
          "flag fourth_declined"
        ]
      },
      {
        "if": "is.god && class in ['barbarian','rogue','warlock','bard']",
        "then": [
          "flag fourth_undertaker"
        ]
      }
    ],
    "ending": "fourth"
  }
};
