// s1820 / prologues_a.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "p_anbennar_01": {
  "id": "p_anbennar_01",
  "title": "口令",
  "chapter": "序章 · 新年",
  "art": "ev_far_and_wide",
  "loc": "安本科斯特 · 旧斗兽场东门",
  "date": "1820年卡斯坦月1日",
  "first": [
   "codex c_blackpowder",
   "codex c_anbenncost",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "text": [
   "灰元 1820 年元旦一早，共和国都城安本科斯特的旧斗兽场东门贴出了公投日期：今年泪落月，埃斯玛利亚各邦投票。糨糊还没干，告示前已经围了四百来人，有人念给旁人听，有人当街骂，卖热栗子的车被挤下了台阶。",
   {
    "if": "!is.caster",
    "text": "{pc}，你是治安军第三连的下士，今天排在第二列。刺刀已经装好，枪里却没填药。中尉交代过，元旦执勤，空枪好看些。"
   },
   {
    "if": "is.caster",
    "text": "{pc}，你是国立魔导院的三等预言师。魔晶是随流星落下、能储存魔力的晶体，院里的已经耗尽，部里才派你来帮治安军“看看人群的气色”。你站在士兵后面，袖口那粒比指甲还小的晶屑已经暗下去了。"
   },
   "一块砖从人群里飞了出来。",
   {
    "if": "!is.god",
    "text": "砖砸中你前面那人的肩章，磕掉一颗铜星。人群向前挤了半步。第一排士兵同时抬起刺刀。"
   },
   {
    "if": "is.god",
    "text": "在你眼里，这块砖慢得连上面的气孔都数得清。掷砖的手仍停在半空，戴着一只半指手套。"
   },
   "马洛中尉转过头，等你把他的口令传给后排。",
   {
    "speaker": "马洛",
    "text": "{?is.caster:预言师|下士}，往后传！预备！"
   }
  ],
  "choices": [
   {
    "text": "把口令传给后排",
    "effects": [
     "flag ny_passed_order",
     "rep republic +1"
    ],
    "result": "你喊“预备”，身后的两排接连应声。枪托齐齐磕上石板。人群这才向后退去，扔砖的人却没了踪影。",
    "goto": "p_anbennar_02"
   },
   {
    "text": "站着不动，不把口令往后传",
    "effects": [
     "flag ny_held_order"
    ],
    "result": "你没有开口。马洛等了片刻，只得自己喊。后两排没听清，传出了两道不同的口令。趁这阵混乱，人群散掉一半，留下的人都望着你。",
    "goto": "p_anbennar_02"
   },
   {
    "text": "把枪交给身旁的人，站到士兵和人群中间",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "adv": "faction == 'shield'",
     "mods": [
      {
       "if": "is.soldier",
       "n": 1,
       "why": "你知道当兵的怕什么"
      }
     ]
    },
    "ok": {
     "text": "你背对刺刀，告诉人群，第三连也欠了四个月饷。士兵等饷，就和他们等麦子一样。前排有人笑了。一人放下砖头，又一人跟着放下。",
     "effects": [
      "flag ny_stood_between",
      "rep union +1"
     ],
     "goto": "p_anbennar_02"
    },
    "fail": {
     "text": "第二块砖打断了你的话，擦破额角。血流进眼睛里。你和人群都没后退。马洛只好命令第一排端枪。",
     "effects": [
      "flag ny_stood_between",
      "rep union +1",
      "hp -3"
     ],
     "goto": "p_anbennar_02"
    }
   },
   {
    "text": "让砖块悬在空中",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag ny_stood_between",
     "flag pa_brick_stopped",
     "rep republic -1",
     "var cult +1"
    ],
    "result": "砖在离肩章一掌远的地方停住了，悬在空中慢慢转。人群齐退三步，一个卖栗子的老太太跪了下来。马洛盯着那块砖，忘了下令。",
    "goto": "p_anbennar_02"
   }
  ]
 },
 "p_anbennar_02": {
  "id": "p_anbennar_02",
  "title": "遣散单",
  "loc": "安本科斯特 · 治安军第三连连部",
  "text": [
   "第三连借斗兽场后面那家倒闭的当铺办公，柜台的铁栏还在。下午三点，管军饷的文书隔着栏杆推给你一张纸。",
   "是张遣散单，一式两联，番号、姓名、服役年限都替你填好了，只有补发军饷那一栏写的是“另候通知”。",
   {
    "if": "flag.ny_passed_order",
    "text": "事由一栏写的是“新年当值，口令传达迟缓”。可你明明及时传了令。"
   },
   {
    "if": "flag.ny_held_order",
    "text": "事由一栏写的是“新年当值，拒传口令”，这一条倒是没写错。"
   },
   {
    "if": "flag.ny_stood_between && !flag.pa_brick_stopped",
    "text": "事由一栏写的是“新年当值，擅离队列”。"
   },
   {
    "if": "flag.pa_brick_stopped",
    "text": "事由一栏写的是“疑似未登记施术”，用的还是同一张表。文书多垫了一张复写纸，说是上面要存档。"
   },
   {
    "if": "is.caster",
    "text": "预言师那一联下面还另夹着半个月的咖啡票。文书说大夫交代过，你们这一行喝咖啡得悠着点。"
   },
   {
    "if": "is.god && !flag.pa_brick_stopped",
    "text": "文书抬眼看看你，又低头看了看表，表上找不出哪一栏能填你。他想想，在“籍贯”后面画了个问号。"
   },
   {
    "speaker": "文书",
    "text": "在这里签字，快点，后面还排着十一个。"
   }
  ],
  "choices": [
   {
    "text": "把遣散单举到窗前，细看事由栏的墨迹",
    "check": {
     "skill": "insight",
     "alt": [
      "investigation"
     ],
     "dc": 11,
     "mods": [
      {
       "if": "is.soldier",
       "n": 1,
       "why": "你填过这种表"
      }
     ]
    },
    "ok": {
     "text": "事由一栏的墨迹比签名的旧，颜色都发褐了。签名是今天签的，事由却是前天写的。这张单子在那块砖飞过来之前就填好了。",
     "effects": [
      "flag ny_predated"
     ],
     "goto": "p_anbennar_03"
    },
    "fail": {
     "text": "你刚把单子举起来，文书就请你别挡着后面的人。后面的人也让你别挡着，还有一个骂了你的娘。",
     "effects": [
      "rep republic -1"
     ],
     "goto": "p_anbennar_03"
    }
   },
   {
    "text": "签好遣散单，折起收好",
    "effects": [
     "rep republic +1"
    ],
    "result": "你签了字。文书在存根上盖了个戳，盖歪了也懒得重盖。",
    "goto": "p_anbennar_03"
   },
   {
    "text": "请文书在“另候通知”后注明今天的日期",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag pa_backpay_dated",
     "rep republic -1"
    ],
    "result": "他瞪了你好一会儿，才在“另候通知”后面补上一小行字，是灰元 1820 年卡斯坦月 1 日。补完他把笔一扔，说你们这种人他见得多了。",
    "goto": "p_anbennar_03"
   }
  ]
 },
 "p_anbennar_03": {
  "id": "p_anbennar_03",
  "title": "自备靴子",
  "loc": "安本科斯特 · 舱底区的小酒馆",
  "first": [
   "codex c_tellum"
  ],
  "text": [
   "拿了遣散单，你坐进舱底区的一家小酒馆。店里只点得起一支牛油蜡烛，柜台上有半壶麦酒和一份三天前的《论坛报》。麦酒两个铜板，想配一勺腌萝卜就再添一个。",
   "你把末版的招人启事一栏一栏看下来，不是“不招”就是“已满”。只剩右下角指甲盖大的一条还在招人，上面印着“招冒险者。老字号。自备靴子。铸炉街。”没写门牌。",
   "门外有人摇铃，是个泰卢姆的传令员，站在泥地里喊传音石那头刚传过来的消息：南边海上冒出个漩涡，布西拉尔有个人钻了下去，又钻上来了。酒馆里没有一个人抬头。",
   "酒保倒是一直盯着你衣襟上那七颗铜扣。",
   {
    "speaker": "酒保",
    "text": "共和国的扣子，七颗我算你五个金冠。这是实心的，熔了也值这个价。明年就要改样式了，你留在手里就不值钱了。"
   },
   {
    "if": "is.god",
    "text": "传令员喊到一半，隔着门看见了你，赶紧把铃往腋下一夹，换了一套词：“舱底区，小酒馆，神喝麦酒！”喊完他自己也觉得不像话，又换回了漩涡那一套。"
   }
  ],
  "choices": [
   {
    "text": "把七颗铜扣卖给酒保",
    "effects": [
     "gold +5"
    ],
    "result": "酒保拿小刀把扣子一颗一颗挑下来，挑得很仔细，连线头都没留。你的制服就这么敞着怀，风从领口直往里灌。",
    "goto": "p_anbennar_04"
   },
   {
    "text": "留下铜扣，扣紧制服",
    "effects": [
     "flag kept_buttons"
    ],
    "result": "你把最上面那颗也扣上了。酒保耸耸肩，给你添了一勺萝卜，没收钱。",
    "goto": "p_anbennar_04"
   },
   {
    "text": "请传令员喝酒，打听漩涡",
    "cost": {
     "gold": 1
    },
    "effects": [
     "flag pa_crier_friend"
    ],
    "result": "他一口灌下去半杯，这才说，漩涡在西尔·伯肯之地外面，有条船下去了一天，上来的时候船上多了一只罐子。“罐子里有活的！”他说，“这条消息值三个铜板，你这杯酒算两个，还欠我一个。”",
    "goto": "p_anbennar_04"
   }
  ]
 },
 "p_anbennar_04": {
  "id": "p_anbennar_04",
  "title": "堵路",
  "loc": "安本科斯特 · 舱底区 · 半截楼",
  "text": [
   "去铸炉街要穿过一排没盖完的楼。一百六十年前造到二层，钱就用光了，上面的木屋全是住户自己搭的。巷子窄得只容一人，墙边还堆着剩下的木板。",
   "巷子当中有两个人，一个蹲着，一个站着，蹲着的那个手里攥着一只铜铃。铃的主人被按在墙上，正是刚才那个泰卢姆的传令员。",
   {
    "if": "flag.pa_crier_friend",
    "text": "传令员一看见你，眼睛都亮了：“请我喝酒的那位！”按着他的那个人也回过头来。"
   },
   {
    "speaker": "舱底区的混混",
    "text": "过路钱，一人五个！穿制服的收十个，谁让你们拿着饷呢。"
   },
   {
    "if": "flag.kept_buttons",
    "text": "他看看你那排铜扣，退后半步，可又站住了。"
   },
   {
    "if": "!flag.kept_buttons",
    "text": "他看看你敞着的衣襟：“扣子都卖啦？那就算你五个吧。”"
   }
  ],
  "choices": [
   {
    "text": "走上前，逼他们放开传令员",
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "adv": "flag.kept_buttons",
     "mods": [
      {
       "if": "is.soldier",
       "n": 1,
       "why": "刺刀练过三年"
      },
      {
       "if": "is.martial",
       "n": 1,
       "why": "你站得像个会打的"
      }
     ]
    },
    "ok": {
     "text": "你往前走了一步，又走了一步。两个人看看你，又互相看看，松开传令员走了。他们走得不快，好让人觉得他们本来就打算走。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_anbennar_05"
    },
    "fail": {
     "text": "你吼了一嗓子，谁知蹲着的那个站起身，比站着的那个还高出半头。",
     "combat": {
      "title": "半截楼的窄巷",
      "intro": "巷子太窄，来人只能一前一后。连传令员都挥起了手里的铜铃。",
      "enemies": [
       {
        "id": "cutpurse",
        "name": "舱底区的混混",
        "hpMult": 0.6
       },
       {
        "id": "village_militia",
        "name": "舱底区的混混",
        "hpMult": 0.6
       }
      ],
      "allies": [
       {
        "id": "striker",
        "name": "泰卢姆的传令员"
       }
      ],
      "specials": [
       {
        "id": "whistle",
        "name": "吹治安军的集合哨",
        "desc": "舱底区的人都听得出这个哨音。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "intimidation",
         "dc": 11
        },
        "success": {
         "text": "哨声在窄巷里来回碰壁。那两人同时看向巷口，腿已经软了。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你吹破了音，听着跟鹅叫似的，蹲着的那个笑出了声。"
        }
       },
       {
        "id": "planks",
        "name": "踹倒墙边那摞木板",
        "desc": "楼上修房剩下的材料堆在一处，比一个人还高。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "alt": [
          "acrobatics"
         ],
         "dc": 12
        },
        "success": {
         "text": "木板哗啦一声塌下来，把两个人埋了半截，楼上有人推开窗就骂街。",
         "dmgAll": "1d4",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "木板晃了晃，只倒下来一块，砸的还是你自己的脚。",
         "selfDmg": "1d3"
        }
       }
      ],
      "fleeable": true,
      "win": {
       "effects": [
        "xp 50",
        "gold +4"
       ],
       "goto": "p_anbennar_05"
      },
      "lose": {
       "effects": [
        "flag pa_beaten",
        "gold -10",
        "heal 1d4+2"
       ],
       "goto": "p_anbennar_05"
      },
      "fled": {
       "effects": [
        "flag pa_beaten",
        "gold -3"
       ],
       "goto": "p_anbennar_05"
      }
     }
    }
   },
   {
    "text": "冲上去把传令员拽出来",
    "combat": {
     "title": "半截楼的窄巷",
     "intro": "巷子太窄，来人只能一前一后。连传令员都挥起了手里的铜铃。",
     "enemies": [
      {
       "id": "cutpurse",
       "name": "舱底区的混混",
       "hpMult": 0.6
      },
      {
       "id": "village_militia",
       "name": "舱底区的混混",
       "hpMult": 0.6
      }
     ],
     "allies": [
      {
       "id": "striker",
       "name": "泰卢姆的传令员"
      }
     ],
     "specials": [
      {
       "id": "whistle",
       "name": "吹治安军的集合哨",
       "desc": "舱底区的人都听得出这个哨音。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "intimidation",
        "dc": 11
       },
       "success": {
        "text": "哨声在窄巷里来回碰壁。那两人同时看向巷口，腿已经软了。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹破了音，听着跟鹅叫似的，蹲着的那个笑出了声。"
       }
      },
      {
       "id": "planks",
       "name": "踹倒墙边那摞木板",
       "desc": "楼上修房剩下的材料堆在一处，比一个人还高。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "alt": [
         "acrobatics"
        ],
        "dc": 12
       },
       "success": {
        "text": "木板哗啦一声塌下来，把两个人埋了半截，楼上有人推开窗就骂街。",
        "dmgAll": "1d4",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "木板晃了晃，只倒下来一块，砸的还是你自己的脚。",
        "selfDmg": "1d3"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "xp 50",
       "gold +4"
      ],
      "goto": "p_anbennar_05"
     },
     "lose": {
      "effects": [
       "flag pa_beaten",
       "gold -10",
       "heal 1d4+2"
      ],
      "goto": "p_anbennar_05"
     },
     "fled": {
      "effects": [
       "flag pa_beaten",
       "gold -3"
      ],
      "goto": "p_anbennar_05"
     }
    }
   },
   {
    "text": "打个响指点起冷火，吓走他们",
    "tag": "施法者",
    "if": "is.caster",
    "check": {
     "skill": "arcana",
     "dc": 12
    },
    "ok": {
     "text": "袖口那片晶屑热了一下，巷子里亮起一团青火，有拳头大，烧不着东西。两个混混没见过这个，骂骂咧咧地跑了。再看那片晶屑，已经凉透了，黑得跟煤渣一样。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_anbennar_05"
    },
    "fail": {
     "text": "火苗才冒了个头就灭了，只留下一股焦毛味。两个混混笑出了声。",
     "combat": {
      "title": "半截楼的窄巷",
      "intro": "巷子太窄，来人只能一前一后。连传令员都挥起了手里的铜铃。",
      "enemies": [
       {
        "id": "cutpurse",
        "name": "舱底区的混混",
        "hpMult": 0.6
       },
       {
        "id": "village_militia",
        "name": "舱底区的混混",
        "hpMult": 0.6
       }
      ],
      "allies": [
       {
        "id": "striker",
        "name": "泰卢姆的传令员"
       }
      ],
      "specials": [
       {
        "id": "whistle",
        "name": "吹治安军的集合哨",
        "desc": "舱底区的人都听得出这个哨音。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "intimidation",
         "dc": 11
        },
        "success": {
         "text": "哨声在窄巷里来回碰壁。那两人同时看向巷口，腿已经软了。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你吹破了音，听着跟鹅叫似的，蹲着的那个笑出了声。"
        }
       },
       {
        "id": "planks",
        "name": "踹倒墙边那摞木板",
        "desc": "楼上修房剩下的材料堆在一处，比一个人还高。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "alt": [
          "acrobatics"
         ],
         "dc": 12
        },
        "success": {
         "text": "木板哗啦一声塌下来，把两个人埋了半截，楼上有人推开窗就骂街。",
         "dmgAll": "1d4",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "木板晃了晃，只倒下来一块，砸的还是你自己的脚。",
         "selfDmg": "1d3"
        }
       }
      ],
      "fleeable": true,
      "win": {
       "effects": [
        "xp 50",
        "gold +4"
       ],
       "goto": "p_anbennar_05"
      },
      "lose": {
       "effects": [
        "flag pa_beaten",
        "gold -10",
        "heal 1d4+2"
       ],
       "goto": "p_anbennar_05"
      },
      "fled": {
       "effects": [
        "flag pa_beaten",
        "gold -3"
       ],
       "goto": "p_anbennar_05"
      }
     }
    }
   },
   {
    "text": "付给他们五枚金冠",
    "cost": {
     "gold": 5
    },
    "result": "他们放走传令员，也给你让了路。传令员捡起铃朝你作揖，拔腿跑出巷子。人影不见了，你还听得见铃响。",
    "goto": "p_anbennar_05"
   }
  ]
 },
 "p_anbennar_05": {
  "id": "p_anbennar_05",
  "title": "入行礼",
  "loc": "安本科斯特 · 铸炉街",
  "first": [
   "codex c_forgeway"
  ],
  "text": [
   "铸炉街入夜仍亮着火，一排矮人店铺门前净是刀剑、盔甲的招牌。招工启事没留门牌号，你便推开了其中最气派的一扇门。",
   {
    "if": "flag.pa_beaten",
    "text": "你脸上还肿着，一进门，柜台后面的矮人就皱了皱眉。"
   },
   "铺子里亮得晃眼。柜台后面的矮人听你说完“我来应聘冒险者”，抬手打了个响指，门口两个卫兵就一人架住了你一条胳膊。他们穿着一身重甲，走路时却一点响动都没有。",
   {
    "speaker": "柜台后的矮人",
    "text": "本号只卖东西，不招人。第一次进门的个个都这么问。扔远点，别砸着招牌。"
   },
   "你就这样被架出了门，两脚离了地，飞过了半条街。对面是家蜡烛铺，台阶是石头的。"
  ],
  "choices": [
   {
    "text": "在空中翻身，双脚落地",
    "check": {
     "skill": "acrobatics",
     "alt": [
      "athletics"
     ],
     "dc": 11
    },
    "ok": {
     "text": "你两只脚落了地，膝盖软了一下，总算又站直了。蜡烛铺的台阶上有人鼓了两下掌。",
     "effects": [
      "xp 10"
     ],
     "goto": "p_anbennar_05b"
    },
    "fail": {
     "text": "你是脸先着的地。台阶上有人说：“这铺子里的人，个个都是这么进来的。”",
     "effects": [
      "hp -2"
     ],
     "goto": "p_anbennar_05b"
    }
   },
   {
    "text": "趁卫兵还没把你扔出去，报上族名",
    "tag": "矮人",
    "if": "is.dwarf",
    "effects": [
     "xp 10"
    ],
    "result": "你报了族名，又报了祖上住的是哪座厅。两个卫兵对看了一眼，这次没扔，一人一边把你架过街，放在了蜡烛铺的台阶上。“入行礼免不了，”左边那个说，“不过能打折。”",
    "goto": "p_anbennar_05b"
   }
  ]
 },
 "p_anbennar_05b": {
  "id": "p_anbennar_05b",
  "title": "三行字",
  "loc": "铸炉街 · 蜡烛铺楼上",
  "first": [
   "companion +bura"
  ],
  "text": [
   "一个兽人女人坐在蜡烛铺的台阶上，用油布擦膝头的盾。她是老兵布拉·铁颌，下巴是黄铜做的，她低头打量你时，下巴上的铰链跟着动了一下。",
   {
    "speaker": "布拉",
    "text": "你找谁？"
   },
   "你说是来应聘的。她看看你的靴子，又看看你领口的番号。",
   {
    "speaker": "布拉",
    "text": "第三连的啊。1810 年那时我在第九连。上来吧，第三级楼梯是松的。"
   },
   "楼上只有一间屋，摆着三张桌子，只有一张坐了人。那是迟到者公司的秘书、白头发的矮人埃塔·斧砧，手边的账本比她的胳膊还厚。她背后的墙上钉着一张羊皮纸，写着公司的三条章程，每一行左边都有一块黑印子，是三百多年的手印一层层叠出来的。",
   {
    "speaker": "埃塔",
    "text": "会不会记账？不会也行。墙上这三条是 1446 年立的，你挑一条按个手印，我记在你名字后面，记上了就改不了。"
   },
   {
    "if": "faction == 'seal'",
    "text": "你把手按在了第二行上，这一行写的是“签了字的，就办到”，三行里就数这一块印子最黑。"
   },
   {
    "if": "faction == 'seal'",
    "speaker": "埃塔",
    "text": "这是守信之约。三百七十四年了，按这条的没毁过一次约，别从你这里开头。"
   },
   {
    "if": "faction == 'lantern'",
    "text": "你把手按在了第三行上，这一行写的是“去看，回来说”，手印也数这一行最浅。"
   },
   {
    "if": "faction == 'lantern'",
    "speaker": "埃塔",
    "text": "这是求真之约。上一个按这条的是替史家会跑腿的，1702 年去看了，可没回来说。"
   },
   {
    "if": "faction == 'shield'",
    "text": "你把手按在了第一行上，这一行写的是“先护人，后算账”，黑印子里面有一块是铁锈色的。"
   },
   {
    "if": "faction == 'shield' && party.bura",
    "speaker": "布拉",
    "text": "跟我是一条。按了这条的，银行可不借钱给你。"
   },
   {
    "speaker": "埃塔",
    "text": "还有一件事。1811 年以后公司就没有队长了，一百金冠以上的单子得队长签字。可这个字谁也不肯签。"
   },
   "她看着布拉，布拉扭头看窗外。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我只管外勤。"
   },
   {
    "speaker": "埃塔",
    "text": "秘书不能批自己的账。那就表决吧。"
   },
   "两票赞成，还有一票没来得及举手，没举手的那一票就是你。",
   {
    "speaker": "埃塔",
    "text": "恭喜你，队长。柜上的现钱是四十一金冠，这个月的工钱只够先发一个人的。你说先发谁吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "另外还有细则第九条，成了神的不加钱。细则一共四十条，墙上挂不下，都在我这里收着。"
   },
   {
    "if": "is.god && party.bura",
    "speaker": "布拉",
    "text": "楼下都在传你是神。我只想弄清一件事，神肯不肯出外勤？"
   }
  ],
  "choices": [
   {
    "text": "先给布拉发钱",
    "effects": [
     "approval bura +1"
    ],
    "result": "埃塔数出六个金冠推过去，布拉数都没数就揣进了兜里。她下巴的铰链响了一声，这次倒不是要说坏消息：“共和国欠着我十一个月的饷。公司欠我的，刚才清了。”",
    "goto": "p_anbennar_06"
   },
   {
    "text": "先领自己的那份",
    "effects": [
     "gold +6",
     "approval bura -1"
    ],
    "result": "埃塔数了六个金冠给你，在账上写下“队长，预支，到任当天”。布拉接着擦她的盾，擦来擦去还是刚才那一块。",
    "goto": "p_anbennar_06"
   },
   {
    "text": "让埃塔查账，先付拖欠最久的一笔",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "approval bura +1",
     "gold +2"
    ],
    "result": "埃塔把账翻到 1812 年：“布拉，外勤，欠过两次，都补上了。再往前就是我自己，1790 年的半个月工钱，我没催过。”她把六个金冠推给布拉，又数了两个给你：“这是查账的辛苦钱，章程上有的。”",
    "goto": "p_anbennar_06"
   }
  ]
 },
 "p_anbennar_06": {
  "id": "p_anbennar_06",
  "title": "铜牌",
  "art": "ev_multi_racial_merc",
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
   "rest long"
  ],
  "text": [
   "埃塔接过你的遣散单，凑到灯前，先核对你服役的部队番号。",
   {
    "speaker": "埃塔",
    "text": "第三连，1810 年那一批的。共和国欠你们十一个月的饷，我账上记着的是布拉那一份。你这一份，我另起一行。"
   },
   {
    "if": "flag.pa_backpay_dated",
    "speaker": "埃塔",
    "text": "“另候通知”后面有日期，好。有日期的能去告，没日期的就只能等着了。"
   },
   {
    "if": "flag.ny_predated",
    "text": "你告诉她，事由一栏的墨迹比签名旧，是事先填好的。她头也没抬，把那张单子收进身后的铁箱，上了锁。"
   },
   "布拉扔给你一块绒布和一罐擦铜油。侧门边钉着块铜牌，字已经磨掉了一半，还认得出来的只剩“到者公司”和“1446”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "铜牌归队长擦，这是规矩。磨掉的那一半字，就是这么一天天擦没的。"
   },
   "往后两个多月，你每天早上都擦一遍。花始月第一个礼拜的一天，你正擦到“1446”，街上过来一个泰卢姆的传令员，摇着铃，嗓子都喊哑了。",
   {
    "speaker": "传令员",
    "text": "南边海里捞上来的！布西拉尔的发现！罐子里是活的，礼拜五进城，史家会开验，去晚了可就没座啦！"
   },
   {
    "if": "is.god",
    "text": "他喊到一半看见了你，铃也不摇了，倒退着走了三步，换了一套词：“铸炉街，蜡烛铺，神在擦铜牌！亲眼所见，一个铜板听全本！”"
   },
   {
    "speaker": "埃塔",
    "text": "那就是公司的第一单。史家会要雇人看着罐子，一天两个金冠，到不了一百，用不着你签字。"
   },
   {
    "if": "faction == 'seal'",
    "text": "她从窗口扔下来一个小布袋，里面是守信之约的入伙金，三十金冠。这个数还是 1446 年定的，一直没涨过。"
   },
   {
    "if": "flag.pa_crier_friend",
    "text": "这传令员正是半截楼的那一位，铃上多了个瘪。他朝你挤了挤眼，嗓门又提高了一截。"
   }
  ],
  "next": "a1_01"
 },
 "p_concord_01": {
  "id": "p_concord_01",
  "title": "第十四行",
  "chapter": "序章 · 新年",
  "loc": "安本科斯特 · 新港三号码头",
  "date": "1820年卡斯坦月1日",
  "first": [
   {
    "if": "race == 'orc'",
    "then": [
     "flag bought_free"
    ]
   },
   "codex c_anbenncost",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "text": [
   "元旦上午，一艘从巨魔湾来的邮船靠上了安本科斯特新港三号码头。船走了四十一天，舱里一半是烟草，一半是咸鳕鱼。{pc}，你是巨魔湾一个小镇派来的使团的随船书记，藤箱里装着三套换洗衣服和镇议会的公文。",
   "跳板还没放，港口治安军就登船查货。你替他们念货单，读到第十四行停了下来。上面把一位兽人列作货物：“贴身仆役一名，兽人，估价九十金冠。”",
   "清单上的“仆役”就站在舱口。他叫乌戈，四十来岁，耳朵缺了一角，手里提着主人的帽盒。共和国境内禁止蓄奴。他只要踏上码头，就是自由人。眼下，他的脚还在甲板上。",
   {
    "if": "race == 'orc'",
    "text": "你自己也有过一份赎身文书，如今就在箱底。文书上写着“本会已出资赎身”，镇议会三十号一致通过，三十一号就把你送上了船。乌戈看着你，像是终于遇见了一个识字的同乡。"
   },
   "乌戈的主人，那位种植园主，把手搭在你肩上。中士舔湿笔尖，等你填货单。使团长站在一旁看表。",
   {
    "speaker": "种植园主",
    "text": "书记，照单念就行。他是来服侍我的，又没打算在这里定居。"
   },
   {
    "if": "is.god",
    "text": "货单在你手中越来越烫，墨字一行行往纸外洇。你知道，一松手，上面的字就会全部消失。"
   }
  ],
  "choices": [
   {
    "text": "划掉货单第十四行",
    "effects": [
     "flag line14_struck",
     "rep union +1",
     "rep charter -1"
    ],
    "result": "你提笔涂掉那一行。中士在旁签名，只说了句“依法”。种植园主把手从你肩头移开，问你叫什么。你答过一遍，他又问了一次。",
    "goto": "p_concord_02"
   },
   {
    "text": "照单念完第十四行，让乌戈先回舱",
    "effects": [
     "flag line14_read",
     "rep charter +1"
    ],
    "result": "你照单读完。中士在货单上打勾，加注“过境仆役，不下船”。乌戈提着帽盒退进船舱。舱门合上前，他看了你一眼。",
    "goto": "p_concord_02"
   },
   {
    "text": "把笔递给乌戈，让他亲自划掉",
    "effects": [
     "flag line14_pen",
     "rep union +1"
    ],
    "result": "乌戈捏着笔看了半天。他不会写字，就在那一栏上划了两道交叉的线，笔尖把纸都戳破了。中士点了点头：“这样也算。”",
    "goto": "p_concord_02"
   },
   {
    "text": "向种植园主出价，买下乌戈再放他自由",
    "tag": "印",
    "if": "faction == 'seal'",
    "cost": {
     "gold": 10
    },
    "effects": [
     "flag line14_bought"
    ],
    "result": "种植园主开价一百二十。你指着货单上的九十，他收起笑容。最后你先付十金冠定金，余款挂在你正要去报到的迟到者公司名下，那家公司的门你还没进过。中士作证，你当场写下了放免书。",
    "goto": "p_concord_02"
   },
   {
    "text": "松开手，抹掉整张货单的字",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag line14_struck",
     "rep charter -2",
     "var cult +1"
    ],
    "result": "货单变成了一张白纸。第十四行消失了，另外二十九行也是。按法律，满舱烟草已成了无主货。搬运工愣了片刻，便开始卸船。使团长回神后的第一句话是：“镇议会表决过，不设神龛。”",
    "goto": "p_concord_02"
   }
  ]
 },
 "p_concord_02": {
  "id": "p_concord_02",
  "title": "码头打手",
  "loc": "新港三号码头 · 货栈后面",
  "text": [
   "中午，你抱着日志去货栈后背风处抄货单。脚下是烂鱼鳞，墙上新贴着“蜥蜴人水手恕不接待”。旁边一网咸鳕鱼吊在木桩上。",
   {
    "if": "!flag.line14_read",
    "text": "乌戈蹲在你旁边啃一块硬面包，这是他第一顿不用先端给别人的饭。巷口进来了两个人，一个拎着短棍，另一个把手揣在怀里。"
   },
   {
    "if": "!flag.line14_read",
    "speaker": "打手",
    "text": "先生说了，人是他的，你这个当书记的手伸得太长了。人我们带走，你的手留下。"
   },
   {
    "if": "!flag.line14_read && flag.line14_bought",
    "text": "你把放免书抖开给他们看，可惜拎短棍的那个不识字。"
   },
   {
    "if": "flag.line14_read",
    "text": "巷口进来了两个人，眼睛直盯着你的藤箱。他们八成以为书记的箱子里装的都是钱。"
   },
   {
    "if": "flag.line14_read",
    "speaker": "码头贼",
    "text": "书记，这箱子可挺沉的啊。"
   }
  ],
  "choices": [
   {
    "text": "护住乌戈，迎上去",
    "if": "!flag.line14_read",
    "combat": {
     "title": "货栈后面",
     "intro": "乌戈把面包塞进怀里，站到你身旁。他手上唯一能用的，是那只帽盒。",
     "enemies": [
      {
       "id": "cutpurse",
       "name": "种植园主雇的打手",
       "hpMult": 0.6
      },
      {
       "id": "village_militia",
       "name": "种植园主雇的打手",
       "hpMult": 0.6
      }
     ],
     "allies": [
      {
       "id": "striker",
       "name": "乌戈"
      }
     ],
     "specials": [
      {
       "id": "net",
       "name": "砍断货网的绳子",
       "desc": "墙上挂着整网咸鳕鱼，网绳绑在木桩上。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "alt": [
         "sleight"
        ],
        "dc": 11
       },
       "success": {
        "text": "绳子一断，一整网鳕鱼砸了下来，正砸在拿棍子那个的头上，那鱼可比人硬。",
        "dmgAll": "1d4",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "绳子比你想的结实多了，倒把你的手掌磨掉了一层皮。",
        "selfDmg": "1d3"
       }
      },
      {
       "id": "sergeant",
       "name": "冲巷口喊“中士”",
       "desc": "中士不会赶来，这伙人却不知道。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "deception",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "“中士，这边！”你冲巷口喊。中士其实在码头另一头，可这两个人不知道，他们往巷口看了一眼，又看了一眼。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "没人答应。揣着手的那个说：“中士吃饭去了，我看着他去的。”"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "xp 50"
      ],
      "goto": "p_concord_03"
     },
     "lose": {
      "effects": [
       "flag pa_log_torn",
       "gold -5",
       "heal 1d4+2"
      ],
      "goto": "p_concord_03"
     },
     "fled": {
      "effects": [
       "flag pa_log_torn"
      ],
      "goto": "p_concord_03"
     }
    }
   },
   {
    "text": "护住乌戈，问打手：你们先生欠了你们几个月工钱",
    "tag": "盾",
    "if": "faction == 'shield' && !flag.line14_read",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "is.worker",
       "n": 1,
       "why": "你也拿过工钱"
      }
     ]
    },
    "ok": {
     "text": "揣着手的那个算了算，说是三个月，拎短棍的偏说是四个月。两个人为这个吵了起来，吵着吵着就走了，临走还跟乌戈要了一口面包。",
     "effects": [
      "rep union +1"
     ],
     "goto": "p_concord_03"
    },
    "fail": {
     "text": "“欠多少也轮不着你来问。”拎短棍的把棍子往手心里一拍。",
     "combat": {
      "title": "货栈后面",
      "intro": "乌戈把面包塞进怀里，站到你身旁。他手上唯一能用的，是那只帽盒。",
      "enemies": [
       {
        "id": "cutpurse",
        "name": "种植园主雇的打手",
        "hpMult": 0.6
       },
       {
        "id": "village_militia",
        "name": "种植园主雇的打手",
        "hpMult": 0.6
       }
      ],
      "allies": [
       {
        "id": "striker",
        "name": "乌戈"
       }
      ],
      "specials": [
       {
        "id": "net",
        "name": "砍断货网的绳子",
        "desc": "墙上挂着整网咸鳕鱼，网绳绑在木桩上。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "alt": [
          "sleight"
         ],
         "dc": 11
        },
        "success": {
         "text": "绳子一断，一整网鳕鱼砸了下来，正砸在拿棍子那个的头上，那鱼可比人硬。",
         "dmgAll": "1d4",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "绳子比你想的结实多了，倒把你的手掌磨掉了一层皮。",
         "selfDmg": "1d3"
        }
       },
       {
        "id": "sergeant",
        "name": "冲巷口喊“中士”",
        "desc": "中士不会赶来，这伙人却不知道。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
        "check": {
         "skill": "deception",
         "alt": [
          "performance"
         ],
         "dc": 12
        },
        "success": {
         "text": "“中士，这边！”你冲巷口喊。中士其实在码头另一头，可这两个人不知道，他们往巷口看了一眼，又看了一眼。",
         "applyAll": {
          "cond": "frightened",
          "turns": 1
         }
        },
        "fail": {
         "text": "没人答应。揣着手的那个说：“中士吃饭去了，我看着他去的。”"
        }
       }
      ],
      "fleeable": true,
      "win": {
       "effects": [
        "xp 50"
       ],
       "goto": "p_concord_03"
      },
      "lose": {
       "effects": [
        "flag pa_log_torn",
        "gold -5",
        "heal 1d4+2"
       ],
       "goto": "p_concord_03"
      },
      "fled": {
       "effects": [
        "flag pa_log_torn"
       ],
       "goto": "p_concord_03"
      }
     }
    }
   },
   {
    "text": "朝巷口喊中士，假装他就在附近",
    "check": {
     "skill": "deception",
     "alt": [
      "performance"
     ],
     "dc": 12
    },
    "ok": {
     "text": "谁知中士真就在拐角买烟。他探出头来看了一眼，两个人就散了。中士问你喊他干什么，你说没事，他还是把你的名字记了下来。",
     "effects": [
      "rep republic +1"
     ],
     "goto": "p_concord_03"
    },
    "fail": {
     "text": "没人答应。{?flag.line14_read:两个人一个按住你，另一个翻你的箱子，|乌戈攥着帽盒跑了，两个人追了几步没追上，回头就拿你出气，}他们拿走了五个金冠，还撕走了日志的一页，临走还嫌少。",
     "effects": [
      "gold -5",
      "flag pa_log_torn"
     ],
     "goto": "p_concord_03"
    }
   },
   {
    "text": "提起藤箱，跟这两个贼动手",
    "if": "flag.line14_read",
    "combat": {
     "title": "货栈后面",
     "intro": "搬运工扔下包裹，站到了你身边：“三号码头是我们的。在这里别想偷东西！”",
     "enemies": [
      {
       "id": "cutpurse",
       "name": "码头贼",
       "hpMult": 0.6
      },
      {
       "id": "village_militia",
       "name": "码头贼",
       "hpMult": 0.6
      }
     ],
     "allies": [
      {
       "id": "striker",
       "name": "新港的搬运工"
      }
     ],
     "specials": [
      {
       "id": "net",
       "name": "砍断货网的绳子",
       "desc": "墙上挂着整网咸鳕鱼，网绳绑在木桩上。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "alt": [
         "sleight"
        ],
        "dc": 11
       },
       "success": {
        "text": "绳子一断，一整网鳕鱼砸了下来，正砸在伸手够藤箱的那个头上。",
        "dmgAll": "1d4",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "绳子比你想的结实多了，倒把你的手掌磨掉了一层皮。",
        "selfDmg": "1d3"
       }
      },
      {
       "id": "trunk",
       "name": "把藤箱抡出去",
       "desc": "箱子里装着三套衣服和一摞镇议会公文，分量很重。成功时，所有敌人受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "藤箱抡了半圈，砸中了一个人的腰眼。公文到底比衣裳沉，镇议会三十一年的决议全在里面。",
        "dmgAll": "1d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "藤箱的提手断了，箱子在地上滚了两滚，盖子摔开了，掉出来一件衬衫。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "xp 50"
      ],
      "goto": "p_concord_03"
     },
     "lose": {
      "effects": [
       "flag pa_log_torn",
       "gold -5",
       "heal 1d4+2"
      ],
      "goto": "p_concord_03"
     },
     "fled": {
      "effects": [
       "flag pa_log_torn"
      ],
      "goto": "p_concord_03"
     }
    }
   },
   {
    "text": "打开藤箱，让他们看清里面没钱",
    "if": "flag.line14_read",
    "check": {
     "skill": "persuasion",
     "alt": [
      "deception"
     ],
     "dc": 12
    },
    "ok": {
     "text": "箱子里是三件衬衫、一摞决议，还有一块干硬的奶酪。两个人翻了一遍，只拿走了奶酪，说你们镇可真穷。",
     "effects": [
      "xp 10"
     ],
     "goto": "p_concord_03"
    },
    "fail": {
     "text": "你刚掀开盖子，揣着手的那个就把手伸了进去。你一把按住了他的手腕。",
     "combat": {
      "title": "货栈后面",
      "intro": "搬运工扔下包裹，站到了你身边：“三号码头是我们的。在这里别想偷东西！”",
      "enemies": [
       {
        "id": "cutpurse",
        "name": "码头贼",
        "hpMult": 0.6
       },
       {
        "id": "village_militia",
        "name": "码头贼",
        "hpMult": 0.6
       }
      ],
      "allies": [
       {
        "id": "striker",
        "name": "新港的搬运工"
       }
      ],
      "specials": [
       {
        "id": "net",
        "name": "砍断货网的绳子",
        "desc": "墙上挂着整网咸鳕鱼，网绳绑在木桩上。成功时，所有敌人受到 1d4 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d3 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "alt": [
          "sleight"
         ],
         "dc": 11
        },
        "success": {
         "text": "绳子一断，一整网鳕鱼砸了下来，正砸在伸手够藤箱的那个头上。",
         "dmgAll": "1d4",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "绳子比你想的结实多了，倒把你的手掌磨掉了一层皮。",
         "selfDmg": "1d3"
        }
       },
       {
        "id": "trunk",
        "name": "把藤箱抡出去",
        "desc": "箱子里装着三套衣服和一摞镇议会公文，分量很重。成功时，所有敌人受到 1d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 12
        },
        "success": {
         "text": "藤箱抡了半圈，砸中了一个人的腰眼。公文到底比衣裳沉，镇议会三十一年的决议全在里面。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "藤箱的提手断了，箱子在地上滚了两滚，盖子摔开了，掉出来一件衬衫。"
        }
       }
      ],
      "fleeable": true,
      "win": {
       "effects": [
        "xp 50"
       ],
       "goto": "p_concord_03"
      },
      "lose": {
       "effects": [
        "flag pa_log_torn",
        "gold -5",
        "heal 1d4+2"
       ],
       "goto": "p_concord_03"
      },
      "fled": {
       "effects": [
        "flag pa_log_torn"
       ],
       "goto": "p_concord_03"
      }
     }
    }
   }
  ]
 },
 "p_concord_03": {
  "id": "p_concord_03",
  "title": "日志上的一句话",
  "loc": "邮船 · 使团长的舱房",
  "text": [
   "使团长的船舱比你的宽一倍，桌上摊着航海日志。他把墨水推到你面前，起身给自己倒茶。",
   "今天这一页该怎么写，三个人要的是三句不一样的话。种植园主要你写“仆役一名，途中走失”。中士要你写“该员已依共和国法律恢复自由”。你自己想写的，是早上码头上到底出了什么事。",
   {
    "if": "flag.line14_read",
    "text": "你想写的那一句很短，就是乌戈没下船。"
   },
   {
    "if": "flag.pa_log_torn",
    "text": "日志缺了一页，是在货栈后面被人撕走的，今天的事你得从头补起。"
   },
   {
    "if": "flag.line14_bought",
    "text": "桌角压着你那张放免书的抄件。使团长说回去还得表决，看这十个金冠算公款还是算私款。"
   },
   {
    "speaker": "使团长",
    "text": "你写什么我不管，我只管一样：将来镇议会把它翻出来，读着别太难看。这本日志记了三十一年，每一页他们都表决过。"
   },
   {
    "if": "is.god",
    "text": "他倒茶的时候手一直在抖，倒满了第三杯，才想起来屋里只有两个人。"
   }
  ],
  "choices": [
   {
    "text": "按种植园主的说法写",
    "effects": [
     "rep charter +1"
    ],
    "result": "你照着写了。使团长吹干了墨，点点头。这一行字，往后三十年都会这么写着。",
    "goto": "p_concord_04"
   },
   {
    "text": "按中士的说法写",
    "effects": [
     "rep republic +1"
    ],
    "result": "你照着写了。使团长念了一遍，说“共和国法律”这几个字镇上没人爱看，可也挑不出什么错来。",
    "goto": "p_concord_04"
   },
   {
    "text": "如实记下经过",
    "check": {
     "skill": "persuasion",
     "alt": [
      "deception"
     ],
     "dc": 12,
     "adv": "is.scholar",
     "mods": [
      {
       "if": "faction == 'seal'",
       "n": 1,
       "why": "你一句一句对着货单写"
      }
     ]
    },
    "ok": {
     "text": "你写完，使团长从头念到尾，念到第十四行那里停了一下，到底没改。",
     "effects": [
      "rep church +1"
     ],
     "goto": "p_concord_04"
    },
    "fail": {
     "text": "使团长读完，拿过笔去，在你那句话后面添了半句“经各方同意”。至于是谁同意的，他没写。",
     "effects": [
      "flag log_amended"
     ],
     "goto": "p_concord_04"
    }
   },
   {
    "text": "依教会誓词格式写，末尾附祷词",
    "tag": "神职",
    "if": "is.divine",
    "check": {
     "skill": "religion",
     "dc": 11
    },
    "ok": {
     "text": "你在每句前面写一个日子，末尾写上一句“以上所记，愿真理裁之”。使团长不敢改祷词，连带着前面的字也不敢动了。",
     "effects": [
      "rep church +1"
     ],
     "goto": "p_concord_04"
    },
    "fail": {
     "text": "祷词你记串了，串成了洛伦特那边的。使团长皱着眉头改了两处，顺手把前面也改了，添的是“经各方同意”。",
     "effects": [
      "flag log_amended"
     ],
     "goto": "p_concord_04"
    }
   }
  ]
 },
 "p_concord_04": {
  "id": "p_concord_04",
  "title": "协约速度",
  "art": "ev_far_and_wide",
  "loc": "安本科斯特 · 新港往铸炉街",
  "first": [
   "codex c_concord"
  ],
  "text": [
   "下午，你拎着藤箱进了城，怀里揣着使团长临走塞给你的抵债文书。文书盖着镇议会的章，要紧的只有一个数目：四百金冠。",
   "新港的路是斜的，往上走全是货栈，往下走全是酒馆。有个卖热鳗鱼的老头问你打哪里来，一听说是巨魔湾，他就乐了。",
   {
    "speaker": "卖鳗鱼的",
    "text": "听说你们那里干什么都得投票？那你上这里来，也是投过票的喽？"
   },
   "投过，一共投了二十次，前十九次的结果都是“缓议”。",
   {
    "speaker": "卖鳗鱼的",
    "text": "这就叫协约速度。来，这一截鳗鱼不用投票，拿着吃。"
   },
   "你要找的那家公司，启事上只写了铸炉街，没写门牌，可铸炉街足有一里多长。",
   {
    "if": "is.god",
    "text": "你走出去半条街，回头看了一眼，老头正往你站过的地方撒盐呢。"
   }
  ],
  "choices": [
   {
    "text": "从街口逐家核对招牌",
    "check": {
     "skill": "investigation",
     "alt": [
      "perception"
     ],
     "dc": 10
    },
    "ok": {
     "text": "你数到第四十几家，才看见一家蜡烛铺的侧门上钉着块铜牌，字磨掉了一半，还认得出“到者公司”。",
     "effects": [
      "xp 10"
     ],
     "goto": "p_concord_05"
    },
    "fail": {
     "text": "你走过了头，折回来，又走过了头。最后只好花三个金冠雇了个城市地精带路。他一路上都在推销他表哥做的靴子，说你脚上这双撑不过雨季。",
     "effects": [
      "gold -3"
     ],
     "goto": "p_concord_05"
    }
   },
   {
    "text": "用地精语向带路的地精问路",
    "tag": "绿皮",
    "if": "is.greenskin",
    "effects": [
     "rep union +1"
    ],
    "result": "他一听见乡音，眼睛都亮了，钱也不要了，一直把你带到了门口。临走他说新港三号码头上有他一个姨，是扛包的。往后有事尽管去找她。",
    "goto": "p_concord_05"
   },
   {
    "text": "先去码头公证处查公司登记",
    "tag": "印",
    "if": "faction == 'seal'",
    "cost": {
     "gold": 1
    },
    "effects": [
     "xp 10"
    ],
    "result": "公证处的书记翻了二十分钟，才翻出一条登记：迟到者公司，1446 年登记，地址是铸炉街蜡烛铺楼上。查档费收了一个金冠。他还说，三十年了，你是第一个来查这家公司的。",
    "goto": "p_concord_05"
   }
  ]
 },
 "p_concord_05": {
  "id": "p_concord_05",
  "title": "四百金冠",
  "loc": "铸炉街 · 蜡烛铺楼上",
  "first": [
   "codex c_forgeway"
  ],
  "text": [
   "蜡烛铺侧门开着，传出牛油味。一个兽人女人坐在楼梯口擦盾，目光落在你的藤箱上。她是老兵布拉·铁颌，黄铜下巴靠一副铰链活动。",
   {
    "speaker": "布拉",
    "text": "找谁的？上去吧，第三级楼梯是松的。"
   },
   "楼上只有一间屋，摆着三张桌子，只有一张坐了人。那是公司的秘书、白头发的矮人埃塔·斧砧，手边的账本比她的胳膊还厚。你把抵债文书放到了她面前。",
   "她没看文书，先从架子上抽出了另一本账，翻到 1789 年。上面记着：替塞斯提尔边区某镇清理沼泽鬼婆一窝，四百金冠，利息另算。下面一行写着“未付”，再往下三十行，行行都是“已催”。",
   {
    "speaker": "埃塔",
    "text": "你们镇总算来人了。钱呢？"
   },
   "你说，镇上没钱，是拿你这个人来抵债的。她看了看文书，又看看你，笔尖停在了“收讫”那一栏前面。",
   {
    "if": "flag.bought_free",
    "speaker": "埃塔",
    "text": "先出钱把你赎出来，再拿你来抵债，你们镇这账做得比我还细。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "拿一个神抵四百金冠，你们镇是赚了。我这里亏没亏，得等我查过细则再说。"
   }
  ],
  "choices": [
   {
    "text": "承认这笔债务",
    "effects": [
     "rep charter +1"
    ],
    "result": "你说认。埃塔在“收讫”前面写了两个字，“人到”，钱的那一栏她就空着了。",
    "goto": "p_concord_05b"
   },
   {
    "text": "问明利息如何计算",
    "effects": [
     "flag pa_asked_interest"
    ],
    "result": "埃塔拨了两下算盘就停了手：“真算下来，你们镇得整个卖掉。”她把算盘推到一边，“我不算了，不算就一直欠着，欠着的账我记得住。”",
    "goto": "p_concord_05b"
   },
   {
    "text": "指出文书没写服务期限",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag debt_no_term"
    ],
    "result": "埃塔把文书拿起来，从头到尾看了两遍。“是没写。”她在账上注明“抵债人服务年限，文书未载，待议”，其中“待议”那两个字，她写得很小。",
    "goto": "p_concord_05b"
   }
  ]
 },
 "p_concord_05b": {
  "id": "p_concord_05b",
  "title": "三行字",
  "loc": "铸炉街 · 蜡烛铺楼上",
  "first": [
   "companion +bura"
  ],
  "text": [
   "布拉上楼倚住门框。埃塔合上账本，示意你看墙上的羊皮纸。三条章程旁各有一团黑印，是三百多年里一只只手按出来的。",
   {
    "speaker": "埃塔",
    "text": "抵债的也得起誓。墙上这三条是 1446 年立的，你挑一条按个手印，我记在你名字后面，记上了就改不了。"
   },
   {
    "if": "race == 'orc'",
    "speaker": "布拉",
    "text": "你是崖下的？我是林木之墙的。按完了下楼来，我请你喝一碗。"
   },
   {
    "if": "faction == 'seal'",
    "text": "你把手按在了第二行上，这一行写的是“签了字的，就办到”，三行里就数这一块印子最黑。"
   },
   {
    "if": "faction == 'seal'",
    "speaker": "埃塔",
    "text": "这是守信之约。三百七十四年了，按这条的没毁过一次约，别从你这里开头。"
   },
   {
    "if": "faction == 'lantern'",
    "text": "你把手按在了第三行上，这一行写的是“去看，回来说”，手印也数这一行最浅。"
   },
   {
    "if": "faction == 'lantern'",
    "speaker": "埃塔",
    "text": "这是求真之约。上一个按这条的是替史家会跑腿的，1702 年去看了，可没回来说。"
   },
   {
    "if": "faction == 'shield'",
    "text": "你把手按在了第一行上，这一行写的是“先护人，后算账”，黑印子里面有一块是铁锈色的。"
   },
   {
    "if": "faction == 'shield' && party.bura",
    "speaker": "布拉",
    "text": "跟我是一条。按了这条的，银行可不借钱给你。"
   },
   {
    "speaker": "埃塔",
    "text": "还有一件事。1811 年以后公司就没有队长了，一百金冠以上的单子得队长签字。可这个字谁也不肯签。"
   },
   "她看着布拉，布拉扭头看窗外。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我只管外勤。"
   },
   {
    "speaker": "埃塔",
    "text": "秘书不能批自己的账。那就表决吧。"
   },
   "两票赞成，还有一票没来得及举手，没举手的那一票就是你。",
   {
    "speaker": "埃塔",
    "text": "恭喜你，队长。柜上的现钱是四十一金冠，这个月的工钱只够先发一个人的。你说先发谁吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "另外还有细则第九条，成了神的不加钱。细则一共四十条，墙上挂不下，都在我这里收着。"
   },
   {
    "if": "is.god && party.bura",
    "speaker": "布拉",
    "text": "楼下都在传你是神。我只想弄清一件事，神肯不肯出外勤？"
   }
  ],
  "choices": [
   {
    "text": "先给布拉发钱",
    "effects": [
     "approval bura +1"
    ],
    "result": "埃塔数出六个金冠推过去，布拉数都没数就揣进了兜里。她下巴的铰链响了一声，这次倒不是要说坏消息：“共和国欠着我十一个月的饷。公司欠我的，刚才清了。”",
    "goto": "p_concord_06"
   },
   {
    "text": "先领自己的那份",
    "effects": [
     "gold +6",
     "approval bura -1"
    ],
    "result": "埃塔数了六个金冠给你，把“队长，预支，到任当天”登进了账。布拉接着擦她的盾，擦来擦去还是刚才那一块。",
    "goto": "p_concord_06"
   },
   {
    "text": "让埃塔查账，先付拖欠最久的一笔",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "approval bura +1",
     "gold +2"
    ],
    "result": "埃塔把账翻到 1812 年：“布拉，外勤，欠过两次，都补上了。再往前就是我自己，1790 年的半个月工钱，我没催过。”她把六个金冠推给布拉，又数了两个给你：“这是查账的辛苦钱，章程上有的。”",
    "goto": "p_concord_06"
   }
  ]
 },
 "p_concord_06": {
  "id": "p_concord_06",
  "title": "铜牌",
  "art": "ev_multi_racial_merc",
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
   "rest long"
  ],
  "text": [
   "誓已起完，埃塔翻开账本，在你名字后添了几个字。隔着桌倒着看，你也认得：“抵债，四百，未清。”",
   {
    "if": "flag.debt_no_term",
    "text": "后面还跟着她刚才添的那两个小字，“待议”。"
   },
   {
    "if": "flag.pa_asked_interest",
    "text": "利息那一栏是空着的。她说空着最好，空着就谁都不用卖了。"
   },
   {
    "if": "flag.line14_bought",
    "speaker": "埃塔",
    "text": "还有一笔，码头上那个兽人的余款，八十金冠，记在公司名下了。你到任当天就替公司花了钱，上一个这么干的人，还是 1702 年的事。"
   },
   "布拉扔给你一块绒布和一罐擦铜油。侧门边钉着块铜牌，字已经磨掉了一半，还认得出来的只剩“到者公司”和“1446”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "铜牌归队长擦，这是规矩。磨掉的那一半字，就是这么一天天擦没的。"
   },
   "往后两个多月，你每天早上都擦一遍。花始月第一个礼拜的一天，你正擦到“1446”，街上过来一个泰卢姆的传令员，摇着铃，嗓子都喊哑了。",
   {
    "speaker": "传令员",
    "text": "南边海里捞上来的！布西拉尔的发现！罐子里是活的，礼拜五进城，史家会开验，去晚了可就没座啦！"
   },
   {
    "if": "is.god",
    "text": "他喊到一半看见了你，铃也不摇了，倒退着走了三步，换了一套词：“铸炉街，蜡烛铺，神在擦铜牌！亲眼所见，一个铜板听全本！”"
   },
   {
    "speaker": "埃塔",
    "text": "那就是公司的第一单。史家会要雇人看着罐子，一天两个金冠，到不了一百，用不着你签字。"
   },
   {
    "if": "faction == 'seal'",
    "text": "她从窗口扔下来一个小布袋，里面是守信之约的入伙金，三十金冠。这个数还是 1446 年定的，一直没涨过。"
   },
   {
    "if": "!flag.line14_read",
    "text": "那两个多月里，你在三号码头见过乌戈一次。他扛着两包咸鱼上跳板，走得很稳。他看见了你，脚下没停，只冲你扬了扬下巴。"
   }
  ],
  "next": "a1_01"
 },
 "p_unowned_01": {
  "id": "p_unowned_01",
  "title": "今天礼拜几",
  "chapter": "序章 · 新年",
  "art": "ev_artifice_gear",
  "loc": "安本科斯特 · 铸炉街自动机厂 · 七号线",
  "date": "1820年卡斯坦月1日",
  "first": [
   {
    "if": "race == 'mechanim'",
    "then": [
     "flag woke_1820"
    ]
   },
   "codex c_anbenncost",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "text": [
   "塔厄尔的午夜钟敲了十二下。铸炉街自动机厂的七号线仍在运转。十二盏灯下，十二个工位的铆锤每秒敲一次，空气里是机油和热铁皮的味道。",
   {
    "if": "is.mechanim",
    "text": "你在九号工位。这一班刚打到第四千零一十一颗铆钉，锤子举到一半，手却停住了。没人下过这道指令。"
   },
   {
    "if": "is.mechanim",
    "text": "“今天礼拜几？”你第一次开口，声音很轻，像落锤一样平稳。十二个工位都没抬头。十一号工位的七八三照常一秒拧一圈阀门，只有领班嘴里的烟斗掉进了铆钉箱。"
   },
   {
    "if": "is.mechanim",
    "text": "十号工位也停了。那台机器放下扳手，转头看你。"
   },
   {
    "if": "is.mechanim",
    "speaker": "领班",
    "text": "礼拜三啊。今天礼拜三。……等等，我怎么跟你聊上了？"
   },
   {
    "if": "!is.mechanim",
    "text": "{pc}，你是这班的{?race == 'goblin':司炉|铆工}。一班十二个钟头，工钱计件。十号工位的机器忽然举着锤子停在半空，转头问你：“今天礼拜几？”"
   },
   {
    "if": "!is.mechanim",
    "text": "声音很轻，语调和它落锤一样平。十一号工位的七八三仍是一秒拧一圈阀门，领班的烟斗掉了。十二个工位上，只有你一个工人抬起头去看。"
   },
   {
    "if": "!is.mechanim",
    "speaker": "领班",
    "text": "礼拜三。……我跟一台机器说这个干什么？你，上账房拿一张报废单来。"
   },
   {
    "if": "is.god",
    "text": "你还没回答，七号线的机械嗡鸣先沉下去半个调。"
   }
  ],
  "choices": [
   {
    "text": "假装机器卡住，缓缓放回锤子",
    "if": "is.mechanim",
    "check": {
     "skill": "deception",
     "dc": 12
    },
    "ok": {
     "text": "你把锤子送回原位，让关节泄出一点气，声音像一只坏铰链。领班在日志上写下：“九号，卡壳，待修。”",
     "effects": [
      "flag hid_waking"
     ],
     "goto": "p_unowned_02"
    },
    "fail": {
     "text": "你放下锤子的动作太慢，倒像是在犹豫。领班盯了你许久。日志上最后只写了“九号，原因不明”。",
     "effects": [
      "flag pu_named"
     ],
     "goto": "p_unowned_02"
    }
   },
   {
    "text": "把问题再问一遍",
    "if": "is.mechanim",
    "effects": [
     "flag pu_named",
     "rep union +1"
    ],
    "result": "“今天礼拜几？”你又问了一遍。锅炉房的司炉探出头，铆钉箱后的学徒也站了起来。领班捡起烟斗，把日志上的“九号”描得更黑了。",
    "goto": "p_unowned_02"
   },
   {
    "text": "照常干活，当作什么都没发生",
    "effects": [
     "rep charter +1"
    ],
    "result": "{?is.mechanim:你让锤子沿着原来的轨迹落下去，把第四千零一十一颗铆钉打进了铁板，和前面四千零一十颗一样平。领班松了口气。十号工位的那一锤却始终没有落下。|你去了账房。老会计头也没抬，递来一张蓝纸。上面印着“器材报废，回炉，作废铁价”，只有编号一栏还没填。}",
    "goto": "p_unowned_02"
   },
   {
    "text": "藏起报废单，回去说没找到",
    "if": "!is.mechanim",
    "check": {
     "skill": "sleight",
     "dc": 11
    },
    "ok": {
     "text": "你把报废单折小，藏进鞋里。领班骂了一句，说只好等天亮再开新单。眼下，日志里关于那台机器只有“停机”二字。",
     "effects": [
      "flag hid_waking"
     ],
     "goto": "p_unowned_02"
    },
    "fail": {
     "text": "报废单从袖口滑出来，落到领班脚边。他捡起单子，在背后写下了你的工号。",
     "effects": [
      "rep charter -1"
     ],
     "goto": "p_unowned_02"
    }
   },
   {
    "text": "上前问机器叫什么名字",
    "if": "!is.mechanim",
    "effects": [
     "flag pu_asked_name",
     "rep union +1"
    ],
    "result": "它看着你，过了两秒才回答：“没有。”又过一秒，它问：“今天礼拜几？”你说礼拜三。这三个字，它记住了。",
    "goto": "p_unowned_02"
   },
   {
    "text": "向整条七号线说一个字",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "rep charter -1",
     "rep union +1",
     "var cult +1"
    ],
    "result": "你说“停”。三台机器停了下来，全用的是 1811 年的材料。其余九台照常工作，七八三仍在拧阀门。厂主第二天去申请保险赔款，在理由一栏填上了“神力所致损失”。",
    "goto": "p_unowned_02"
   }
  ]
 },
 "p_unowned_02": {
  "id": "p_unowned_02",
  "title": "停机日志",
  "loc": "七号线 · 领班的桌子",
  "first": [
   "codex c_mechanim"
  ],
  "text": [
   "领班的桌子钉死在七号线尽头，桌面积着厚厚的油泥。停机日志摊在上面，每页容二十条记录。",
   {
    "if": "is.mechanim && !flag.hid_waking",
    "text": "今晚写了两行。第一行写的是你，“九号，原因不明”，第二行写的是十号，“周中日，二号停机”。"
   },
   {
    "if": "is.mechanim && flag.hid_waking",
    "text": "今晚写了两行。第一行写的是你，“九号，卡壳，待修”，第二行写的是十号，“周中日，二号停机”。"
   },
   {
    "if": "!is.mechanim",
    "text": "今晚写了两行。第一行是傍晚写的，“三号，皮带断了”，第二行写的是十号，“周中日，二号停机”。"
   },
   "领班写日子用的是公文上的正式写法，写完了又在后面描了一遍。日志下面还压着厂主的一张条子：“请奇械师来换芯，天亮到。”",
   {
    "speaker": "领班",
    "text": "换个芯得十二个金冠，报废才三个。厂主那个人会算账。"
   },
   {
    "speaker": "十号",
    "text": "换下来的那个，要去哪里。"
   },
   "领班没回头，他多半不知道问话的是谁。",
   {
    "if": "is.god",
    "text": "日志上还有第三行，是领班刚写的，才写了一半就划掉了。划掉的是个“神”字，旁边改成了“外人”。"
   }
  ],
  "choices": [
   {
    "text": "趁领班倒水，查看排班和钥匙的位置",
    "check": {
     "skill": "investigation",
     "alt": [
      "perception"
     ],
     "dc": 11
    },
    "ok": {
     "text": "换班表钉在柱子上，上面写着报废班四点到，两个人，带液压钳。后院门的钥匙一共两把，一把在厂主家里，一把挂在锅炉房，挂钩上写着司炉的名字。",
     "effects": [
      "flag pu_scouted"
     ],
     "goto": "p_unowned_03"
    },
    "fail": {
     "text": "你刚凑过去，领班就回来了，往桌上一坐。你只来得及看见“四点”两个字，他倒是把你看了个正着。",
     "effects": [
      "flag pu_seen"
     ],
     "goto": "p_unowned_03"
    }
   },
   {
    "text": "打开十号的胸板，检查芯核厂印",
    "tag": "奇械",
    "if": "is.artificer",
    "check": {
     "skill": "arcana",
     "alt": [
      "investigation"
     ],
     "dc": 11
    },
    "ok": {
     "text": "芯核上刻着一行小字，“七号线，1811 年三月”，用的料是 1810 年那场流星雨里捡来的。纹路刻得很急，有两道连尾都没收。",
     "effects": [
      "flag pu_core_read",
      "xp 10"
     ],
     "goto": "p_unowned_03"
    },
    "fail": {
     "text": "胸板的螺丝是反牙的，你拧了很久，领班在那边咳嗽了一声。",
     "effects": [
      "flag pu_seen"
     ],
     "goto": "p_unowned_03"
    }
   },
   {
    "text": "抄下今晚的两条停机记录",
    "tag": "灯",
    "if": "faction == 'lantern'",
    "effects": [
     "flag pu_log_copied"
    ],
    "result": "你把那两行字，连同领班描粗的那几笔，一笔一笔抄在了手背上，回头又誊到了工牌背面。",
    "goto": "p_unowned_03"
   }
  ]
 },
 "p_unowned_03": {
  "id": "p_unowned_03",
  "title": "后院的钥匙",
  "loc": "七号线 · 锅炉房",
  "text": [
   "锅炉房热得睁不开眼，煤堆高过头顶。现在是两点一刻，四点报废班就要来把十号拉去回炉。",
   {
    "if": "race != 'goblin'",
    "text": "司炉是个城市地精，九岁就进了厂，工钱按半班算。后院的钥匙就挂在她腰上，跟一串煤铲钩子挂在一起。"
   },
   {
    "if": "race == 'goblin'",
    "text": "锅炉房是你的地盘，后院的钥匙就在你兜里，跟一串煤铲钩子挂在一起。学徒蹲在煤堆后面，怎么也不肯抬头。"
   },
   "十号也跟着进来了。它走路时跟别的机器一样，一步一尺，只是每走三步就要停下来，看看四周都有些什么。",
   "它胸口的工号下面多了三个字，是拿钉子刻上去的，刻得很浅，刻的是“礼拜三”。领班随口答的那一句，它当成了自己的名字。",
   {
    "speaker": "礼拜三",
    "text": "这里有三扇门。哪一扇是出去的。"
   },
   {
    "if": "flag.pu_scouted",
    "text": "你还记得换班表上写的，两个人，一把液压钳。"
   }
  ],
  "choices": [
   {
    "text": "趁天黑翻出后院",
    "check": {
     "skill": "stealth",
     "dc": 12,
     "adv": "flag.pu_scouted",
     "dis": "flag.pu_seen"
    },
    "ok": {
     "text": "你们贴着煤堆往外走，后院的狗认得煤味，没叫。墙头的碎玻璃早被人拿布垫过了，大概是从前想走的人留下的。",
     "effects": [
      "flag exit_ran"
     ],
     "goto": "p_unowned_04"
    },
    "fail": {
     "text": "礼拜三踩翻了一只铁桶，桶滚出去老远，一直滚到了报废班的门口，门开了。",
     "effects": [
      "flag exit_ran",
      "flag pu_alarm"
     ],
     "goto": "p_unowned_04"
    }
   },
   {
    "text": "请司炉把它当废铁运出去",
    "if": "race != 'goblin'",
    "effects": [
     "flag exit_stolen",
     "rep union +1"
    ],
    "result": "司炉看看你，又看看礼拜三，从腰上解下了钥匙：“推车在后面，拿麻袋盖上。我可没见过你们。”她把钥匙扔过来，转身往炉膛里添了一铲煤。",
    "goto": "p_unowned_04"
   },
   {
    "text": "亲自用废铁车把它运出去",
    "tag": "地精",
    "if": "race == 'goblin'",
    "effects": [
     "flag exit_stolen",
     "rep union +1"
    ],
    "result": "你把麻袋往礼拜三身上一盖，跟学徒说：“我没见过你，你也没见过我。”学徒说了句“我谁也没见过”，说完把头埋得更低了。",
    "goto": "p_unowned_04"
   },
   {
    "text": "等厂主来，请他按废铁价把机器卖掉",
    "effects": [
     "flag exit_sold",
     "rep charter +1"
    ],
    "result": "厂主不到四点就来了。他嫌换芯太贵，就把{?is.mechanim:你和十号|十号}写进了待售的单子，三个金冠一台。可报废班才不管谁来买，他们只认回炉单。",
    "goto": "p_unowned_04"
   }
  ]
 },
 "p_unowned_04": {
  "id": "p_unowned_04",
  "title": "报废班",
  "loc": "七号线尽头 · 后院门口",
  "text": [
   {
    "if": "flag.pu_alarm",
    "text": "报废班提前到了，连裤腰带都还没系好。"
   },
   "报废班的两个人等在后院的风灯下。一个抽烟，一个扛着液压钳，长及小臂的钳口垂在肩头。油管沿地面通到墙角的泵。",
   {
    "if": "flag.exit_sold",
    "text": "他们手里有厂主签的单子，写的是“回炉，不待售”，厂主跟买主说的可是另一套话。"
   },
   {
    "if": "flag.exit_stolen",
    "text": "废铁车推到了门口，麻袋下面偏偏伸出来一只铁脚。抽烟的那个把烟头一弹，拿脚尖挑开了麻袋。"
   },
   {
    "if": "is.mechanim",
    "speaker": "报废班的工人",
    "text": "九号，十号，回炉。你们俩谁先来啊？"
   },
   {
    "if": "!is.mechanim",
    "speaker": "报废班的工人",
    "text": "十号，回炉。你让开吧，这里没你的事，你是按件拿钱的。"
   },
   {
    "speaker": "礼拜三",
    "text": "那把钳子。我数过，它一次能夹断四根铆钉。"
   },
   {
    "if": "flag.pu_named",
    "text": "抽烟的那个手里捏着回炉单，“九号”那两个字描得很粗，隔着风灯都看得见。"
   },
   "门边的墙上有一根铁杆，那是七号线的总闸。"
  ],
  "choices": [
   {
    "text": "挺身挡在礼拜三前面",
    "combat": {
     "title": "后院门口",
     "intro": "扛钳子的那个把油管往身后一甩，墙角的泵嗡嗡地响了起来。礼拜三迈出一步，挡在你和钳口之间。",
     "enemies": [
      {
       "id": "village_militia",
       "name": "报废班的工人",
       "hpMult": 0.8
      },
      {
       "id": "village_militia",
       "name": "报废班的工人",
       "hpMult": 0.8
      }
     ],
     "allies": [
      {
       "id": "striker",
       "name": "礼拜三"
      }
     ],
     "specials": [
      {
       "id": "mainswitch",
       "name": "拉下七号线的总闸",
       "desc": "墙边的铁杆控制着整条生产线的电源。成功时，所有敌人陷入「目盲」，持续 1 回合。失败时，行动者受到 1 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 11
       },
       "success": {
        "text": "你把总闸拉了下去，七号线的十二盏灯一齐灭了，后院黑得伸手不见五指。好在礼拜三看东西用不着灯。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "总闸锈住了，你使出了全身的劲，它也只往下走了半寸，灯闪了两下又亮了。",
        "selfDmg": "1"
       }
      },
      {
       "id": "hose",
       "name": "拔掉液压钳的油管",
       "desc": "油管拖在地上，接头已经露了出来。成功时，所有敌人陷入「虚弱」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "接头一松，油喷了一地。没了油压，钳子就是一块死铁，两个人一下笨手笨脚起来。",
        "applyAll": {
         "cond": "weakened",
         "turns": 2
        }
       },
       "fail": {
        "text": "油管滑得根本抓不住，你还摔了一跤，膝盖磕在了铆钉箱的角上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "xp 50"
      ],
      "goto": "p_unowned_05"
     },
     "lose": {
      "effects": [
       "flag pu_pinned",
       "heal 1d4+2"
      ],
      "goto": "p_unowned_05"
     },
     "fled": {
      "effects": [
       "flag pu_pinned"
      ],
      "goto": "p_unowned_05"
     }
    }
   },
   {
    "text": "提醒报废班的两人：厂主迟早也会把他们列进回炉单",
    "tag": "做工的",
    "if": "is.worker || is.mechanim",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "flag.exit_sold",
       "n": 1,
       "why": "厂主两头卖的单子在他们手里"
      }
     ]
    },
    "ok": {
     "text": "抽烟那人和同伙对看一眼：“一台才三个金冠。我们一个礼拜就挣两个。”他放下钳子，朝门边让了一步。",
     "effects": [
      "rep union +1",
      "xp 25"
     ],
     "goto": "p_unowned_05"
    },
    "fail": {
     "text": "“我有老婆孩子，”扛钳子的说，“它们可没有。”",
     "combat": {
      "title": "后院门口",
      "intro": "扛钳子的那个把油管往身后一甩，墙角的泵嗡嗡地响了起来。礼拜三迈出一步，挡在你和钳口之间。",
      "enemies": [
       {
        "id": "village_militia",
        "name": "报废班的工人",
        "hpMult": 0.8
       },
       {
        "id": "village_militia",
        "name": "报废班的工人",
        "hpMult": 0.8
       }
      ],
      "allies": [
       {
        "id": "striker",
        "name": "礼拜三"
       }
      ],
      "specials": [
       {
        "id": "mainswitch",
        "name": "拉下七号线的总闸",
        "desc": "墙边的铁杆控制着整条生产线的电源。成功时，所有敌人陷入「目盲」，持续 1 回合。失败时，行动者受到 1 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你把总闸拉了下去，七号线的十二盏灯一齐灭了，后院黑得伸手不见五指。好在礼拜三看东西用不着灯。",
         "applyAll": {
          "cond": "blinded",
          "turns": 1
         }
        },
        "fail": {
         "text": "总闸锈住了，你使出了全身的劲，它也只往下走了半寸，灯闪了两下又亮了。",
         "selfDmg": "1"
        }
       },
       {
        "id": "hose",
        "name": "拔掉液压钳的油管",
        "desc": "油管拖在地上，接头已经露了出来。成功时，所有敌人陷入「虚弱」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "接头一松，油喷了一地。没了油压，钳子就是一块死铁，两个人一下笨手笨脚起来。",
         "applyAll": {
          "cond": "weakened",
          "turns": 2
         }
        },
        "fail": {
         "text": "油管滑得根本抓不住，你还摔了一跤，膝盖磕在了铆钉箱的角上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "fleeable": true,
      "win": {
       "effects": [
        "xp 50"
       ],
       "goto": "p_unowned_05"
      },
      "lose": {
       "effects": [
        "flag pu_pinned",
        "heal 1d4+2"
       ],
       "goto": "p_unowned_05"
      },
      "fled": {
       "effects": [
        "flag pu_pinned"
       ],
       "goto": "p_unowned_05"
      }
     }
    }
   },
   {
    "text": "抢先夺下油管",
    "tag": "武人",
    "if": "is.martial",
    "check": {
     "skill": "athletics",
     "dc": 12
    },
    "ok": {
     "text": "你一把攥住油管往回拽，泵那头的接头崩开了，油喷了他们一身。没了油压，钳子就是一块死铁，两个人骂骂咧咧地走了。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_unowned_05"
    },
    "fail": {
     "text": "油管从你手里滑了出去，钳口一下夹住了你的袖子，连皮带肉都夹在了里面。",
     "effects": [
      "hp -2"
     ],
     "combat": {
      "title": "后院门口",
      "intro": "扛钳子的那个把油管往身后一甩，墙角的泵嗡嗡地响了起来。礼拜三迈出一步，挡在你和钳口之间。",
      "enemies": [
       {
        "id": "village_militia",
        "name": "报废班的工人",
        "hpMult": 0.8
       },
       {
        "id": "village_militia",
        "name": "报废班的工人",
        "hpMult": 0.8
       }
      ],
      "allies": [
       {
        "id": "striker",
        "name": "礼拜三"
       }
      ],
      "specials": [
       {
        "id": "mainswitch",
        "name": "拉下七号线的总闸",
        "desc": "墙边的铁杆控制着整条生产线的电源。成功时，所有敌人陷入「目盲」，持续 1 回合。失败时，行动者受到 1 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你把总闸拉了下去，七号线的十二盏灯一齐灭了，后院黑得伸手不见五指。好在礼拜三看东西用不着灯。",
         "applyAll": {
          "cond": "blinded",
          "turns": 1
         }
        },
        "fail": {
         "text": "总闸锈住了，你使出了全身的劲，它也只往下走了半寸，灯闪了两下又亮了。",
         "selfDmg": "1"
        }
       },
       {
        "id": "hose",
        "name": "拔掉液压钳的油管",
        "desc": "油管拖在地上，接头已经露了出来。成功时，所有敌人陷入「虚弱」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "接头一松，油喷了一地。没了油压，钳子就是一块死铁，两个人一下笨手笨脚起来。",
         "applyAll": {
          "cond": "weakened",
          "turns": 2
         }
        },
        "fail": {
         "text": "油管滑得根本抓不住，你还摔了一跤，膝盖磕在了铆钉箱的角上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "fleeable": true,
      "win": {
       "effects": [
        "xp 50"
       ],
       "goto": "p_unowned_05"
      },
      "lose": {
       "effects": [
        "flag pu_pinned",
        "heal 1d4+2"
       ],
       "goto": "p_unowned_05"
      },
      "fled": {
       "effects": [
        "flag pu_pinned"
       ],
       "goto": "p_unowned_05"
      }
     }
    }
   }
  ]
 },
 "p_unowned_05": {
  "id": "p_unowned_05",
  "title": "器材过街",
  "loc": "安本科斯特 · 铸炉街",
  "first": [
   "companion +middlesday",
   "codex c_forgeway"
  ],
  "text": [
   "拂晓前的铸炉街只剩炉火亮着。你们贴墙走，礼拜三跟在身后，每步一尺。四周静下来，你才听清它胸口那点嗡嗡声。",
   {
    "if": "flag.pu_pinned",
    "text": "你肋骨上还留着钳口的印子。后来是礼拜三拧开了液压钳的油管，拧的时候低声说了句什么，也不知道是跟谁说的。"
   },
   "街口站着两个垄断集团的卫兵，一身重甲，只露着两只眼睛。他们拦住你们，要问这台机器是谁家的。",
   {
    "speaker": "卫兵",
    "text": "厂产？"
   },
   {
    "if": "is.mechanim",
    "text": "他问的是你们两个。"
   }
  ],
  "choices": [
   {
    "text": "谎称送机器去修，单据留在厂里",
    "check": {
     "skill": "deception",
     "dc": 12,
     "mods": [
      {
       "if": "flag.exit_sold",
       "n": 2,
       "why": "你手里真有厂主的单子"
      }
     ]
    },
    "ok": {
     "text": "卫兵看看你，又看了看礼拜三胸口的厂号。“送修的走后街。”说完他让开了路。",
     "effects": [
      "xp 10"
     ],
     "goto": "p_unowned_05b"
    },
    "fail": {
     "text": "他不信，可也不拦，只伸出一只手来，说过街费五个金冠，不开收据。",
     "effects": [
      "gold -5"
     ],
     "goto": "p_unowned_05b"
    }
   },
   {
    "text": "站好，让礼拜三把你报作器材",
    "tag": "机械人",
    "if": "is.mechanim",
    "effects": [
     "flag pu_stood_still"
    ],
    "result": "你站得笔直，连关节都没响。礼拜三上前报数：“器材，两台，送修。”卫兵在册上画了两笔，放你们过去。走过半条街，它才说：“刚才报数时，我把你也算进去了。”",
    "goto": "p_unowned_05b"
   },
   {
    "text": "说明它是你的同事，不是厂产",
    "if": "!is.mechanim",
    "effects": [
     "gold -5",
     "approval middlesday +1"
    ],
    "result": "卫兵笑出了声，笑完了照样要了五个金冠的过街费，还说这叫“同事费”。礼拜三把这个数记下了：“我欠你五个金冠。同事是什么。”",
    "goto": "p_unowned_05b"
   }
  ]
 },
 "p_unowned_05b": {
  "id": "p_unowned_05b",
  "title": "卖契",
  "loc": "铸炉街 · 蜡烛铺楼上",
  "first": [
   "companion +bura"
  ],
  "text": [
   "街中的蜡烛铺开着半扇侧门。楼梯口坐着一个兽人女人，是老兵布拉·铁颌，正低头擦盾，黄铜下巴上安着铰链。她先打量礼拜三，再抬眼看你。",
   {
    "speaker": "礼拜三",
    "text": "这里招不招人。"
   },
   {
    "if": "flag.pu_asked_name",
    "speaker": "礼拜三",
    "text": "我叫礼拜三。{ta}在七号线上问过我一次。"
   },
   {
    "speaker": "布拉",
    "text": "招。启事上只有一条，自备靴子。你没有靴子？先上来再说。小心第三级，踏板松了。"
   },
   "到了楼上，迟到者公司的秘书、白头发的矮人埃塔·斧砧把一张纸压在了账本上，是一张卖契。",
   {
    "if": "is.mechanim && flag.exit_sold",
    "text": "买主一栏写着“迟到者公司”，是天亮前签的，按废铁作价，两台一共六个金冠。厂主收钱的时候没提报废班的事，她收下卖契的时候也没提。"
   },
   {
    "if": "is.mechanim && !flag.exit_sold",
    "text": "厂里告你们盗窃厂产，告示贴了半条街。这位矮人天亮前去了一趟厂里，按废铁价把这件事了结了，两台一共六个金冠。卖契上买主一栏写的是“迟到者公司”。"
   },
   {
    "if": "!is.mechanim",
    "text": "你上了整条街的黑名单，罪名是盗窃厂产。这位矮人天亮前去了一趟厂里，按废铁价把十号买了下来，花了三个金冠。卖契上买主一栏写的是“迟到者公司”。"
   },
   {
    "speaker": "埃塔",
    "text": "我买的是器材。器材用不着起誓，人才起誓。是哪一样，你们自己说吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "卖契上没有你。你该写在哪张纸上，我还没想好。"
   }
  ],
  "choices": [
   {
    "text": "要求登记为人",
    "effects": [
     "flag pu_said_person",
     {
      "if": "is.mechanim",
      "then": [
       "approval middlesday +1"
      ]
     }
    ],
    "result": "埃塔把卖契翻过来，在背面写了个“人”字，写得方方正正。{?is.mechanim:礼拜三看着那个字，足足看了七秒，然后说：“我也是。”|礼拜三看看那个字，又看看你，说：“你替我说了。下次我自己说。”}",
    "goto": "p_unowned_05c"
   },
   {
    "text": "先按器材登记，起誓的事以后再说",
    "if": "is.mechanim",
    "effects": [
     "rep charter +1",
     "approval middlesday -1"
    ],
    "result": "埃塔点点头，没有写字。礼拜三把头转过去看墙上那张羊皮纸，看了很久。",
    "goto": "p_unowned_05c"
   },
   {
    "text": "让礼拜三自己回答",
    "if": "!is.mechanim",
    "effects": [
     "flag pu_said_person",
     "approval middlesday +2"
    ],
    "result": "沉默三秒后，礼拜三说：“人。不过，账上先记器材也可以。数目得对。”埃塔说：“对，数目得对。”她翻过卖契，在背面写下一个“人”字。",
    "goto": "p_unowned_05c"
   }
  ]
 },
 "p_unowned_05c": {
  "id": "p_unowned_05c",
  "title": "三行字",
  "loc": "铸炉街 · 蜡烛铺楼上",
  "text": [
   "埃塔身后钉着一张羊皮纸，只有三行。每行左边都是一团层层叠叠的黑掌印。三百多年来，每个入伙的人都在这里留过印。",
   {
    "speaker": "埃塔",
    "text": "墙上这三条是 1446 年立的，你挑一条按个手印，我记在你名字后面，记上了就改不了。"
   },
   {
    "if": "faction == 'seal'",
    "text": "你把手按在了第二行上，这一行写的是“签了字的，就办到”，三行里就数这一块印子最黑。"
   },
   {
    "if": "faction == 'seal'",
    "speaker": "埃塔",
    "text": "这是守信之约。三百七十四年了，按这条的没毁过一次约，别从你这里开头。"
   },
   {
    "if": "faction == 'lantern'",
    "text": "你把手按在了第三行上，这一行写的是“去看，回来说”，手印也数这一行最浅。"
   },
   {
    "if": "faction == 'lantern'",
    "speaker": "埃塔",
    "text": "这是求真之约。上一个按这条的是替史家会跑腿的，1702 年去看了，可没回来说。"
   },
   {
    "if": "faction == 'shield'",
    "text": "你把手按在了第一行上，这一行写的是“先护人，后算账”，黑印子里面有一块是铁锈色的。"
   },
   {
    "if": "faction == 'shield' && party.bura",
    "speaker": "布拉",
    "text": "跟我是一条。按了这条的，银行可不借钱给你。"
   },
   {
    "if": "flag.pu_said_person",
    "text": "礼拜三也把手按了上去，就按在你旁边。它的手印是方的，没有掌纹。埃塔看了一眼，照样记下了。"
   },
   {
    "speaker": "埃塔",
    "text": "还有一件事。1811 年以后公司就没有队长了，一百金冠以上的单子得队长签字。可这个字谁也不肯签。"
   },
   "她看着布拉，布拉扭头看窗外。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我只管外勤。"
   },
   {
    "speaker": "埃塔",
    "text": "秘书不能批自己的账。那就表决吧。"
   },
   "两票赞成，还有一票没来得及举手，没举手的那一票就是你。",
   {
    "speaker": "埃塔",
    "text": "恭喜你，队长。柜上的现钱是四十一金冠，这个月的工钱只够先发一个人的。你说先发谁吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "另外还有细则第九条，成了神的不加钱。细则一共四十条，墙上挂不下，都在我这里收着。"
   },
   {
    "if": "is.god && party.bura",
    "speaker": "布拉",
    "text": "楼下都在传你是神。我只想弄清一件事，神肯不肯出外勤？"
   },
   {
    "if": "is.god && party.middlesday",
    "speaker": "礼拜三",
    "text": "你一开口，我胸口的东西就朝你偏过去。我想知道，别的机器也会这样吗？"
   }
  ],
  "choices": [
   {
    "text": "先给布拉发钱",
    "effects": [
     "approval bura +1"
    ],
    "result": "埃塔数出六个金冠推过去，布拉数都没数就揣进了兜里。她下巴的铰链响了一声，这次倒不是要说坏消息：“共和国欠着我十一个月的饷。公司欠我的，刚才清了。”",
    "goto": "p_unowned_06"
   },
   {
    "text": "先领自己的那份",
    "effects": [
     "gold +6",
     "approval bura -1"
    ],
    "result": "埃塔数了六个金冠给你，当场开了张预支条，写明“队长，到任当天”。布拉接着擦她的盾，擦来擦去还是刚才那一块。",
    "goto": "p_unowned_06"
   },
   {
    "text": "让埃塔查账，先付拖欠最久的一笔",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "approval bura +1",
     "gold +2"
    ],
    "result": "埃塔把账翻到 1812 年：“布拉，外勤，欠过两次，都补上了。再往前就是我自己，1790 年的半个月工钱，我没催过。”她把六个金冠推给布拉，又数了两个给你：“这是查账的辛苦钱，章程上有的。”",
    "goto": "p_unowned_06"
   }
  ]
 },
 "p_unowned_06": {
  "id": "p_unowned_06",
  "title": "十四号",
  "art": "ev_multi_racial_merc",
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
   "quest q_middlesday start",
   "rest long"
  ],
  "text": [
   "埃塔翻开器材账。她把礼拜三登记为“十四号，驮运用，二手，每年折旧一成”。",
   {
    "if": "is.mechanim",
    "text": "她在下一行写了个十五号，写到“驮运用”就停了笔，看了你一眼，然后翻回雇员那一页，把你的名字又写了一遍。这一来，两本账上就都有你了。"
   },
   {
    "speaker": "礼拜三",
    "text": "账上一年折旧一成。照这个数，十年后我就不值钱了。到那时，我还可以留下吗？"
   },
   {
    "speaker": "埃塔",
    "text": "账上是这么算的。可这账不是我定的，是 1446 年的章程定的。章程上也没说不值钱了就得走。"
   },
   {
    "if": "flag.pu_core_read",
    "text": "你说了芯核上那行厂印的事。埃塔在十四号后面添了一笔，记的是芯，七号线，1811 年三月，料是 1810 年的。"
   },
   {
    "if": "flag.pu_log_copied",
    "text": "你把抄下来的那两行日志递过去。她看完就收进身后的铁箱，上了锁。"
   },
   {
    "if": "flag.pu_stood_still",
    "speaker": "埃塔",
    "text": "街口的卫兵说，是你自己报的器材。下次再报，先跟我说一声吧，账得对得上才行。"
   },
   "布拉扔给你一块绒布和一罐擦铜油。侧门边钉着块铜牌，字已经磨掉了一半，还认得出来的只剩“到者公司”和“1446”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "铜牌归队长擦，这是规矩。磨掉的那一半字，就是这么一天天擦没的。"
   },
   "往后两个多月，你每天早上都擦一遍。花始月第一个礼拜的一天，你正擦到“1446”，街上过来一个泰卢姆的传令员，摇着铃，嗓子都喊哑了。",
   {
    "speaker": "传令员",
    "text": "南边海里捞上来的！布西拉尔的发现！罐子里是活的，礼拜五进城，史家会开验，去晚了可就没座啦！"
   },
   {
    "if": "is.god",
    "text": "他喊到一半看见了你，铃也不摇了，倒退着走了三步，换了一套词：“铸炉街，蜡烛铺，神在擦铜牌！亲眼所见，一个铜板听全本！”"
   },
   {
    "speaker": "埃塔",
    "text": "那就是公司的第一单。史家会要雇人看着罐子，一天两个金冠，到不了一百，用不着你签字。"
   },
   {
    "if": "faction == 'seal'",
    "text": "她从窗口扔下来一个小布袋，里面是守信之约的入伙金，三十金冠。这个数还是 1446 年定的，一直没涨过。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "罐子里装的是什么。他说是活的。我们也是。"
   }
  ],
  "next": "a1_01"
 }
};
