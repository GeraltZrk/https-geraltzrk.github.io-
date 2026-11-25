// finale.js：s1820《泪尽》的场景。骨架由统稿生成：每场都是“（待写）”占位，title 照圣经第 11 节。
// 占位里的 first 效果（等级里程碑、基线漂移、同伴入队）和“（待写）”选项上的标记，是圣经规定这一场必须交出去的东西，
// 写正文时照着保留或改写成真选项。只改本文件；自检：node tools/check-part.mjs s1820 finale.js
export const SCENES = {
  "f_01": {
    "id": "f_01",
    "title": "音叉",
    "chapter": "终章 · 敲门",
    "art": "load_2",
    "text": [
      "（待写）"
    ],
    "first": [
      "world tears -1",
      "world doors +1",
      "date 1835年卡斯坦月1日",
      "quest q_knock start"
    ],
    "next": "f_02"
  },
  "f_02": {
    "id": "f_02",
    "title": "把魔法当天气的海",
    "art": "ev_feyforest",
    "text": [
      "（待写）"
    ],
    "next": "f_03"
  },
  "f_03": {
    "id": "f_03",
    "title": "抽气船",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）siphon_taken",
        "goto": "f_04",
        "effects": [
          "flag siphon_taken",
          "var jar_trust +1"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "f_04"
      }
    ]
  },
  "f_04": {
    "id": "f_04",
    "title": "平潮庭",
    "art": "load_20",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）court_signs",
        "if": "!flag.jar_sold && !flag.jar_used_unasked",
        "goto": "f_05",
        "effects": [
          "flag court_signs",
          "item +jam_jar",
          "quest q_jar done"
        ]
      },
      {
        "text": "（待写）court_refused",
        "goto": "f_05",
        "effects": [
          "flag court_refused",
          {
            "if": "!flag.jar_sold",
            "then": [
              "item +jam_jar"
            ]
          },
          "quest q_jar fail"
        ]
      }
    ]
  },
  "f_05": {
    "id": "f_05",
    "title": "青铜的翅膀",
    "art": "ev_dragon_fly",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）partner_draw、went_beyond",
        "if": "flag.alvar_pilot || flag.pilots_paid || party.narwen || flag.narwen_custodian || flag.salvation_sails || is.god",
        "goto": "f_06",
        "effects": [
          {
            "if": "!flag.partner_to_hakhepra",
            "then": [
              "flag partner_draw"
            ]
          },
          "flag went_beyond",
          "quest q_partner done"
        ]
      },
      {
        "text": "（待写）partner_draw",
        "goto": "f_10",
        "effects": [
          {
            "if": "!flag.partner_to_hakhepra",
            "then": [
              "flag partner_draw"
            ]
          },
          "quest q_partner done"
        ]
      },
      {
        "text": "（待写）partner_dead",
        "if": "!flag.partner_to_hakhepra",
        "goto": "f_10",
        "effects": [
          "flag partner_dead",
          "quest q_partner done"
        ]
      },
      {
        "text": "（待写）partner_draw、partner_goes_home",
        "if": "!flag.partner_to_hakhepra",
        "goto": "f_10",
        "effects": [
          "flag partner_draw",
          "flag partner_goes_home",
          "quest q_partner done"
        ]
      }
    ]
  },
  "f_06": {
    "id": "f_06",
    "title": "崩塌之城",
    "art": "ev_looming_death",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）dead_asked",
        "goto": "f_07",
        "effects": [
          "flag dead_asked"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "f_07"
      }
    ]
  },
  "f_07": {
    "id": "f_07",
    "title": "天界浅滩",
    "art": "load_10",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）angels_truth",
        "goto": "f_08",
        "effects": [
          "flag angels_truth"
        ]
      },
      {
        "text": "（待写）angels_follow",
        "goto": "f_08",
        "effects": [
          "flag angels_follow"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "f_08"
      }
    ]
  },
  "f_08": {
    "id": "f_08",
    "title": "没有把手的门",
    "art": "load_3",
    "text": [
      "（待写）"
    ],
    "first": [
      "item +torrieth_tally",
      {
        "if": "flag.m_dormant",
        "then": [
          "flag m_rewoken",
          "companion +middlesday",
          "quest q_middlesday done"
        ]
      }
    ],
    "choices": [
      {
        "text": "（待写）narwen_talked_down",
        "if": "party.narwen || flag.narwen_custodian",
        "goto": "f_09",
        "effects": [
          "flag narwen_talked_down",
          "quest q_narwen done"
        ]
      },
      {
        "text": "（待写）narwen_pact_done",
        "if": "party.narwen || flag.narwen_custodian",
        "goto": "f_09",
        "effects": [
          "flag narwen_pact_done",
          "quest q_narwen done"
        ]
      },
      {
        "text": "（待写）narwen_dead",
        "if": "party.narwen || flag.narwen_custodian",
        "goto": "f_09",
        "effects": [
          "flag narwen_dead",
          "companion -narwen gone",
          "quest q_narwen fail"
        ]
      },
      {
        "text": "（待写）pc_pact",
        "if": "is.caster",
        "goto": "f_09",
        "effects": [
          "flag pc_pact"
        ]
      },
      {
        "text": "（待写）不设标记",
        "goto": "f_09"
      }
    ]
  },
  "f_09": {
    "id": "f_09",
    "title": "敲不敲",
    "art": "load_3",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）不碰，回去",
        "goto": "f_10"
      },
      {
        "text": "（待写）gate_knock",
        "goto": "f_10",
        "effects": [
          "flag gate_knock"
        ]
      },
      {
        "text": "（待写）gate_key",
        "if": "flag.fragment_aboard",
        "goto": "f_10",
        "effects": [
          "flag gate_key",
          "flag mass_awakening",
          "world tears +3",
          "world doors +2"
        ]
      },
      {
        "text": "（待写）gate_forced",
        "if": "flag.siphon_taken || (flag.ship_client && flag.client_charter)",
        "goto": "f_10",
        "effects": [
          "flag gate_forced",
          "flag mass_awakening",
          "world tears +3",
          "world doors +3"
        ]
      },
      {
        "text": "（待写）伸手去握把手",
        "tag": "神",
        "if": "is.god",
        "goto": "f_11"
      }
    ]
  },
  "f_10": {
    "id": "f_10",
    "title": "最后一次团务会",
    "art": "ev_multi_racial_merc",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）sign_ration",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "req": "flag.article_ration && flag.court_signs && world.press >= 7 && world.chains <= 4 && ((rep.republic >= 3) + (rep.wand >= 3) + (rep.charter >= 3) + (rep.church >= 3) + (rep.union >= 3) + (rep.south >= 3) + (rep.partner >= 3)) >= 3",
        "reqText": "要配给条款、平潮庭肯签、见报 7、枷锁不过 4、三方声望 3",
        "goto": "f_12",
        "effects": [
          "flag sign_ration",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_charter",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "goto": "f_12",
        "effects": [
          "flag sign_charter",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_quiet",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "goto": "f_12",
        "effects": [
          "flag sign_quiet",
          "flag fork_sunk",
          "item -tuning_fork",
          "world doors =0",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_rose",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "req": "flag.article_ban && rep.wand >= 4 && (flag.crown_castine || flag.crown_ioriel)",
        "reqText": "要禁令条款、王冠与魔杖 4、洛伦特有人拿主意",
        "goto": "f_12",
        "effects": [
          "flag sign_rose",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_dragon",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "req": "rep.partner >= 4 && !flag.partner_exposed && flag.signed_partner_paper && !flag.partner_dead",
        "reqText": "要合伙人 4、没揭穿他、签过他的文件",
        "goto": "f_12",
        "effects": [
          "flag sign_dragon",
          "flag partner_signed",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_keeper、keeper_narwen",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "req": "flag.gate_knock && world.press >= 6 && world.chains <= 3 && (party.narwen || flag.narwen_custodian) && !flag.narwen_dead",
        "reqText": "要敲过门、见报 6、枷锁不过 3、娜尔雯在",
        "goto": "f_12",
        "effects": [
          "flag sign_keeper",
          "flag keeper_narwen",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_keeper、keeper_self",
        "if": "!(flag.gate_key || flag.gate_forced)",
        "req": "flag.gate_knock && world.press >= 6 && world.chains <= 3",
        "reqText": "要敲过门、见报 6、枷锁不过 3",
        "goto": "f_12",
        "effects": [
          "flag sign_keeper",
          "flag keeper_self",
          "quest q_knock done"
        ]
      },
      {
        "text": "（待写）sign_gate",
        "if": "flag.gate_key || flag.gate_forced",
        "goto": "f_12",
        "effects": [
          "flag sign_gate",
          "quest q_knock done"
        ]
      }
    ]
  },
  "f_11": {
    "id": "f_11",
    "title": "把手",
    "art": "load_17",
    "text": [
      "（待写）"
    ],
    "choices": [
      {
        "text": "（待写）seat_sat",
        "goto": "end_seat",
        "effects": [
          "flag seat_sat",
          "world tears =9"
        ]
      },
      {
        "text": "（待写）seat_locked",
        "goto": "end_seat",
        "effects": [
          "flag seat_locked"
        ]
      },
      {
        "text": "（待写）seat_carried",
        "goto": "end_seat",
        "effects": [
          "flag seat_carried",
          "world doors +2",
          "world dove -1"
        ]
      }
    ]
  },
  "f_12": {
    "id": "f_12",
    "title": "今年是哪一年",
    "art": "ev_big_star_in_sky",
    "text": [
      "（待写）"
    ],
    "first": [
      "date 1838年泪落月",
      "world press +2"
    ],
    "choices": [
      {
        "text": "（待写）走下跳板：sign_ration",
        "if": "flag.sign_ration",
        "goto": "end_ration"
      },
      {
        "text": "（待写）走下跳板：sign_charter",
        "if": "flag.sign_charter || !(flag.sign_ration || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper)",
        "goto": "end_charter"
      },
      {
        "text": "（待写）走下跳板：sign_quiet",
        "if": "flag.sign_quiet",
        "goto": "end_quiet"
      },
      {
        "text": "（待写）走下跳板：sign_rose",
        "if": "flag.sign_rose",
        "goto": "end_rose"
      },
      {
        "text": "（待写）走下跳板：sign_dragon",
        "if": "flag.sign_dragon",
        "goto": "end_dragon"
      },
      {
        "text": "（待写）走下跳板：sign_gate",
        "if": "flag.sign_gate",
        "goto": "end_gate"
      },
      {
        "text": "（待写）走下跳板：sign_keeper",
        "if": "flag.sign_keeper",
        "goto": "end_keeper"
      }
    ]
  },
  "end_ration": {
    "id": "end_ration",
    "title": "《配给本》",
    "art": "ev_hre",
    "text": [
      "（待写）"
    ],
    "ending": "ration"
  },
  "end_charter": {
    "id": "end_charter",
    "title": "《特许状》",
    "art": "load_2",
    "text": [
      "（待写）"
    ],
    "ending": "charter"
  },
  "end_quiet": {
    "id": "end_quiet",
    "title": "《静世纪》",
    "art": "ev_big_star_in_sky",
    "text": [
      "（待写）"
    ],
    "ending": "quiet"
  },
  "end_rose": {
    "id": "end_rose",
    "title": "《玫瑰和约》",
    "art": "ev_mages_estate",
    "text": [
      "（待写）"
    ],
    "ending": "rose"
  },
  "end_dragon": {
    "id": "end_dragon",
    "title": "《他的帝国》",
    "art": "ev_aakhet_dragon_smug",
    "text": [
      "（待写）"
    ],
    "ending": "dragon"
  },
  "end_gate": {
    "id": "end_gate",
    "title": "《开门》",
    "art": "load_3",
    "text": [
      "（待写）"
    ],
    "ending": "gate"
  },
  "end_keeper": {
    "id": "end_keeper",
    "title": "《守门人》",
    "art": "ev_priest_phantom",
    "text": [
      "（待写）"
    ],
    "ending": "keeper"
  },
  "end_seat": {
    "id": "end_seat",
    "title": "《空座》",
    "art": "load_17",
    "text": [
      "（待写）"
    ],
    "ending": "seat"
  }
};
