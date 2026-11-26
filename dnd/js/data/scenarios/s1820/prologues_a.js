// s1820 / prologues_a.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
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
   "元旦这天，天刚亮，安本科斯特旧斗兽场的东门外就贴出了一张告示，糨糊还没干。告示上说，埃斯玛利亚各邦的公投定在今年泪落月。没多久，告示底下就聚了四百来号人，有念的，有骂的，连卖热栗子的推车都给挤到了台阶底下。",
   {
    "if": "!is.caster",
    "text": "{pc}，你是治安军第三连的下士，今天当值，站在第二排。枪上了刺刀，可没装药。中尉说了，元旦不装药，看着体面。"
   },
   {
    "if": "is.caster",
    "text": "{pc}，你是国立魔导院的三等预言师。科室里早就没有晶体可用了，部里干脆把你借给了治安军，叫你站在两排兵后头“看人群的气色”。你袖口上别着一片晶屑，比指甲盖还小，颜色已经发乌了。"
   },
   "正乱着，人堆里忽然飞出来一块砖。",
   {
    "if": "!is.god",
    "text": "那块砖正砸在你前头那人的肩章上，磕掉了一颗铜星。人群跟着往前拱了半步，第一排的枪尖也抬了起来。"
   },
   {
    "if": "is.god",
    "text": "在你眼里它飞得很慢，慢得你连砖上的蜂窝眼都数得清。你还看得见扔砖的那只手没来得及收回去，手上戴着半指手套。"
   },
   "奥德里克·马洛中尉回过头来，看的正是你，因为口令得从你这儿往后传。",
   {
    "speaker": "马洛",
    "text": "{?is.caster:预言师|下士}！往后传，预备！"
   }
  ],
  "choices": [
   {
    "text": "把口令传下去",
    "effects": [
     "flag ny_passed_order",
     "rep republic +1"
    ],
    "result": "你喊了一声“预备”，第三排、第四排跟着喊了下去，枪托一齐磕在石板上。人群往后退了，退得很不情愿。扔砖的那个到底没找着。",
    "goto": "p_anbennar_02"
   },
   {
    "text": "不传，就站着",
    "effects": [
     "flag ny_held_order"
    ],
    "result": "你闭着嘴没动。马洛等了两口气的工夫，只好自己喊了，可后头两排没听清，喊成了两样口令。人群趁乱散了一半，剩下的那一半都在看着你。",
    "goto": "p_anbennar_02"
   },
   {
    "text": "把枪塞给旁边的人，走到两排人中间去",
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
     "text": "你背对着枪口，跟人群说起了饷，说第三连的饷也欠了四个月了，跟他们的麦子是一回事。前排有人笑了，接着有人把砖放到了地上，放下一块，又放下一块。",
     "effects": [
      "flag ny_stood_between",
      "rep union +1"
     ],
     "goto": "p_anbennar_02"
    },
    "fail": {
     "text": "你才说了半句，第二块砖就到了，正砸在额角上，血一直流进了眼睛里。你没往后退，人群也没退，马洛只好叫第一排把枪端了起来。",
     "effects": [
      "flag ny_stood_between",
      "rep union +1",
      "hp -3"
     ],
     "goto": "p_anbennar_02"
    }
   },
   {
    "text": "让那块砖停在半空",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag ny_stood_between",
     "flag pa_brick_stopped",
     "rep republic -1",
     "var cult +1"
    ],
    "result": "砖在离那人肩章一掌远的地方停住了，悬在半空慢慢地转。人群往后退了三步，接着有人跪了下去，是个卖栗子的老太太。马洛掏出小本子，舔了舔铅笔头，记了一笔。",
    "goto": "p_anbennar_02"
   }
  ]
 },
 "p_anbennar_02": {
  "id": "p_anbennar_02",
  "title": "遣散单",
  "loc": "安本科斯特 · 治安军第三连连部",
  "text": [
   "第三连的连部设在斗兽场背后一家倒闭了的当铺里，柜台还是当铺原来的柜台，连铁栏杆都没拆。下午三点，发饷的文书隔着栏杆给你推出来一张纸。",
   "是张遣散单，一式两联，番号、姓名、服役年限都替你填好了，只有补发军饷那一栏写的是“另候通知”。",
   {
    "if": "flag.ny_passed_order",
    "text": "事由一栏写的是“新年当值，口令传达迟缓”，可你明明传得一点也不慢。"
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
    "text": "事由一栏写的是“疑似未登记施术”，用的还是同一张表。文书多垫了一张复写纸，说是上头要存档。"
   },
   {
    "if": "is.caster",
    "text": "预言师那一联底下还另夹着半个月的咖啡票。文书说大夫交代过，你们这一行喝咖啡得悠着点。"
   },
   {
    "if": "is.god && !flag.pa_brick_stopped",
    "text": "文书抬眼看了看你，又低头看了看表，表上找不出哪一栏能填你。他想了想，在“籍贯”后头画了个问号。"
   },
   {
    "speaker": "文书",
    "text": "在这儿签字，快点，后头还排着十一个。"
   }
  ],
  "choices": [
   {
    "text": "把单子举起来，对着窗户看事由那一栏",
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
     "text": "事由一栏的墨迹比签名的旧，颜色都发褐了。签名是今天签的，事由却是前天写的，这么说来，这张单子在那块砖飞过来以前就填好了。",
     "effects": [
      "flag ny_predated"
     ],
     "goto": "p_anbennar_03"
    },
    "fail": {
     "text": "你刚把单子举起来，文书就请你别挡着后面的人，后面的人也叫你别挡着，还有一个骂了你的娘。",
     "effects": [
      "rep republic -1"
     ],
     "goto": "p_anbennar_03"
    }
   },
   {
    "text": "签字，把单子折好揣进兜里",
    "effects": [
     "rep republic +1"
    ],
    "result": "你签了字。文书在存根上盖了个戳，盖歪了，他也懒得重盖。",
    "goto": "p_anbennar_03"
   },
   {
    "text": "要他在“另候通知”后头写上今天的日子",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag pa_backpay_dated",
     "rep republic -1"
    ],
    "result": "他瞪了你好一会儿，才在“另候通知”后头添了一行小字，写的是灰元 1820 年卡斯坦月 1 日。添完他把笔一扔，说你们这种人他见得多了。",
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
   "舱底区的酒馆点不起灯，柜台上只有一根牛油蜡，照着半壶麦酒和一份三天前的《论坛报》。麦酒卖两个铜板，加一勺腌萝卜就是三个。",
   "你把末版的招人启事一栏一栏看下来，不是“不招”就是“已满”。只剩右下角指甲盖大的一条还在招人，上头印着“招冒险者。老字号。自备靴子。铸炉街。”没写门牌。",
   "门外有人摇铃，是个泰卢姆的传令员，站在泥地里喊传音石那头刚传过来的消息：南边海上冒出个漩涡，布西拉尔有个人钻了下去，又钻上来了。酒馆里没有一个人抬头。",
   "酒保倒是一直在数你衣襟上的铜扣，一共七颗。",
   {
    "speaker": "酒保",
    "text": "共和国的扣子，七颗我算你五个金冠。这是实心的，熔了也值这个价。明年就要改样式了，你留在手里就不值钱了。"
   },
   {
    "if": "is.god",
    "text": "传令员喊到一半，隔着门看见了你，赶紧把铃往胳肢窝里一夹，换了一套词：“舱底区，小酒馆，神喝麦酒！”喊完他自己也觉得不像话，又换回了漩涡那一套。"
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
    "text": "留着扣子，把制服扣严实",
    "effects": [
     "flag kept_buttons"
    ],
    "result": "你把最上头那颗也扣上了。酒保耸耸肩，给你添了一勺萝卜，没收钱。",
    "goto": "p_anbennar_04"
   },
   {
    "text": "请传令员进来喝一杯，问他漩涡的事",
    "cost": {
     "gold": 1
    },
    "effects": [
     "flag pa_crier_friend"
    ],
    "result": "他一口灌下去半杯，这才说，漩涡在西尔·伯肯之地外头，有条船下去了一天，上来的时候船上多了一只罐子。“罐子里有活的！”他说，“这条消息值三个铜板，你这杯酒算两个，还欠我一个。”",
    "goto": "p_anbennar_04"
   }
  ]
 },
 "p_anbennar_04": {
  "id": "p_anbennar_04",
  "title": "堵路",
  "loc": "安本科斯特 · 舱底区 · 半截楼",
  "text": [
   "去铸炉街得穿过半截楼。那一片连排房是一百六十年前开的工，盖到二层就没钱了，再往上都是住户自己拿木板搭的。巷子窄得两个人错不开身，墙边还码着一摞没用完的木板。",
   "巷子当中有两个人，一个蹲着，一个站着，蹲着的那个手里攥着一只铜铃。铃的主人给按在墙上，正是刚才那个泰卢姆的传令员。",
   {
    "if": "flag.pa_crier_friend",
    "text": "传令员一看见你，眼睛都亮了：“请我喝酒的那位！”按着他的那个人也回过头来。"
   },
   {
    "speaker": "舱底区的混混",
    "text": "过路钱，一人五个！穿制服的收十个，谁叫你们拿着饷呢。"
   },
   {
    "if": "flag.kept_buttons",
    "text": "他看了看你那排铜扣，往后退了半步，可又站住了。"
   },
   {
    "if": "!flag.kept_buttons",
    "text": "他看了看你敞着的衣襟：“扣子都卖啦？那就算你五个吧。”"
   }
  ],
  "choices": [
   {
    "text": "往前走，让他们把人放了",
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
     "text": "你往前走了一步，又走了一步。两个人看看你，又互相看了看，松开传令员走了。他们走得不快，好叫人知道他们本来就打算走。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_anbennar_05"
    },
    "fail": {
     "text": "你吼了一嗓子，谁知蹲着的那个站了起来，比站着的那个还高出半头。",
     "combat": {
      "title": "半截楼的窄巷",
      "intro": "巷子太窄，两个人只能一前一后地上，传令员也抡起了他的铜铃。",
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
        "desc": "舱底区的人没有不认得这个哨声的",
        "check": {
         "skill": "intimidation",
         "dc": 11
        },
        "success": {
         "text": "哨声在巷子里来回地撞，两个人一齐扭头往巷口看，腿先软了半截。",
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
        "desc": "楼上住户搭房子剩下的，码得比人还高",
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
    "text": "不说话，上去把传令员拽出来",
    "combat": {
     "title": "半截楼的窄巷",
     "intro": "巷子太窄，两个人只能一前一后地上，传令员也抡起了他的铜铃。",
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
       "desc": "舱底区的人没有不认得这个哨声的",
       "check": {
        "skill": "intimidation",
        "dc": 11
       },
       "success": {
        "text": "哨声在巷子里来回地撞，两个人一齐扭头往巷口看，腿先软了半截。",
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
       "desc": "楼上住户搭房子剩下的，码得比人还高",
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
    "text": "捏个响指，在巷子里点一团冷火",
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
     "text": "火苗才冒了个头就灭了，只留下一股焦毛味，两个混混笑出了声。",
     "combat": {
      "title": "半截楼的窄巷",
      "intro": "巷子太窄，两个人只能一前一后地上，传令员也抡起了他的铜铃。",
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
        "desc": "舱底区的人没有不认得这个哨声的",
        "check": {
         "skill": "intimidation",
         "dc": 11
        },
        "success": {
         "text": "哨声在巷子里来回地撞，两个人一齐扭头往巷口看，腿先软了半截。",
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
        "desc": "楼上住户搭房子剩下的，码得比人还高",
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
    "text": "数五个金冠给他们",
    "cost": {
     "gold": 5
    },
    "result": "他们放了传令员，也放你过去了。传令员捡起铃，冲你作了个揖，一溜烟跑了，铃声一路响到了巷子外头。",
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
   "铸炉街到了夜里也不关门。矮人的铺子一家挨着一家，招牌上画的不是刀就是甲，炉膛的红光从门缝里一直漏到街心。启事上没写门牌，你就挑了最气派的一家走了进去。",
   {
    "if": "flag.pa_beaten",
    "text": "你脸上还肿着，一进门，柜台后头的矮人就皱了皱眉。"
   },
   "铺子里亮得晃眼。柜台后头的矮人听你说完“我来应聘冒险者”，抬手打了个响指，门口两个卫兵就一人架住了你一条胳膊。他们穿着一身重甲，走起路来却一点响动都没有。",
   {
    "speaker": "柜台后的矮人",
    "text": "本号只卖东西，不招人。头一回进门的个个都这么问。扔远点，别砸着招牌。"
   },
   "你就这么给架出了门，两脚离了地，飞过了半条街。对面是家蜡烛铺，台阶是石头的。"
  ],
  "choices": [
   {
    "text": "在半空里拧个身，脚先着地",
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
    "text": "在被扔出去之前，跟卫兵报你的族名",
    "tag": "矮人",
    "if": "is.dwarf",
    "effects": [
     "xp 10"
    ],
    "result": "你报了族名，又报了祖上住的是哪座厅，两个卫兵对看了一眼，这回没扔，一人一边把你架过街，搁在了蜡烛铺的台阶上。“入行礼免不了，”左边那个说，“不过能打折。”",
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
   "蜡烛铺的台阶上坐着个兽人女人，膝盖上横着一面盾，手里拿着块油布。她低下头来看你，下巴是黄铜做的，还带着铰链。",
   {
    "speaker": "布拉",
    "text": "你找谁？"
   },
   "你说是来应聘的。她看了看你的靴子，又看了看你领口上的番号。",
   {
    "speaker": "布拉",
    "text": "第三连的啊。1810 年那会儿我在第九连。上来吧，第三级楼梯是松的。"
   },
   "楼上只有一间屋，摆着三张桌子，只有一张坐了人，是个白头发的矮人，手边的账本比她的胳膊还厚。她背后的墙上钉着一张羊皮纸，上头写着三行字。每一行左边都有一块黑印子，是三百多年的手印一层一层叠出来的。",
   {
    "speaker": "埃塔",
    "text": "会不会记账？不会也行。墙上这三条是 1446 年立的，你挑一条按个手印，我就记在你名字后头。记上了就改不了。"
   },
   {
    "if": "faction == 'seal'",
    "text": "你把手按在了第二行上，这一行写的是“签了字的，就办到”，三行里就数这一块印子最黑。"
   },
   {
    "if": "faction == 'seal'",
    "speaker": "埃塔",
    "text": "这是印条。三百七十四年了，按这条的没毁过一回约，别从你这儿开头。"
   },
   {
    "if": "faction == 'lantern'",
    "text": "你把手按在了第三行上，这一行写的是“去看，回来说”，手印也数这一行最浅。"
   },
   {
    "if": "faction == 'lantern'",
    "speaker": "埃塔",
    "text": "这是灯条。上一个按这条的是替史家会跑腿的，1702 年去看了，可没回来说。"
   },
   {
    "if": "faction == 'shield'",
    "text": "你把手按在了头一行上，这一行写的是“先护人，后算账”，黑印子里头有一块是铁锈色的。"
   },
   {
    "if": "faction == 'shield' && party.bura",
    "speaker": "布拉",
    "text": "跟我是一条。按了这条的，银行可不借钱给你。"
   },
   {
    "speaker": "埃塔",
    "text": "还有一件事。1811 年以后公司就没有队长了，一百金冠以上的单子得队长签字，可这个字谁也不肯签。"
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
    "text": "恭喜你，队长。柜上的现钱是四十一金冠，这个月的工钱只够先发一个人的，你说先发谁吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "另外还有细则第九条，成了神的不加钱。细则一共四十条，墙上挂不下，都在我这儿收着。"
   },
   {
    "if": "is.god && party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）楼下的人都说你是神。别的我不管，我就问一句，神出不出外勤？"
   }
  ],
  "choices": [
   {
    "text": "先发布拉的",
    "effects": [
     "approval bura +1"
    ],
    "result": "埃塔数出六个金冠推了过去，布拉数都没数就揣进了兜里。她下巴的铰链响了一声，这回不是坏消息：“共和国欠着我十一个月的饷。公司欠我的，刚才清了。”",
    "goto": "p_anbennar_06"
   },
   {
    "text": "先发自己的",
    "effects": [
     "gold +6",
     "approval bura -1"
    ],
    "result": "埃塔数了六个金冠给你，在账上记了一笔：“队长，预支，到任头一天。”布拉接着擦她的盾，擦来擦去还是刚才那一块。",
    "goto": "p_anbennar_06"
   },
   {
    "text": "请埃塔翻账：欠得最久的那一笔先发",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "approval bura +1",
     "gold +2"
    ],
    "result": "埃塔把账翻到 1812 年：“布拉，外勤，欠过两回，都补上了。再往前就是我自己，1790 年的半个月工钱，我没催过。”她把六个金冠推给布拉，又数了两个给你：“这是查账的辛苦钱，章程上有的。”",
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
   "埃塔把你的遣散单要了过去，对着灯看上头的番号。",
   {
    "speaker": "埃塔",
    "text": "第三连，1810 年那一批的。共和国欠你们十一个月的饷，我账上记着的是布拉那一份。你这一份，我另起一行。"
   },
   {
    "if": "flag.pa_backpay_dated",
    "speaker": "埃塔",
    "text": "有日子的，好。有日子的能去告，没日子的就只能等着了。"
   },
   {
    "if": "flag.ny_predated",
    "text": "你说了事由一栏那墨迹的事。她头也没抬，把那张单子收进身后的铁箱，上了锁。"
   },
   "布拉扔给你一块绒布和一罐擦铜油。侧门边上钉着块铜牌，字已经磨掉了一半，还认得出来的只剩“到者公司”和“1446”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "铜牌归队长擦，这是规矩。磨掉的那一半字，就是这么一天天擦没的。"
   },
   "往后的两个多月，你每天早上都要擦一回。到了花始月的头一个礼拜，这天你正擦到“1446”，街上过来一个泰卢姆的传令员，摇着铃，嗓子都喊劈了一半。",
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
    "text": "那就是公司的头一单。史家会要雇人看着罐子，一天两个金冠，到不了一百，用不着你签字。"
   },
   {
    "if": "faction == 'seal'",
    "text": "她从窗口扔下来一个小布袋，里头是印条的入伙金，三十金冠，这个数还是 1446 年定的，一直没涨过。"
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
   "元旦上午，从巨魔湾来的邮船靠上了安本科斯特新港的三号码头。舱里一半是烟草，一半是咸鳕鱼，路上足足走了四十一天。{pc}，你是随船的书记，藤箱里装着三套换洗衣裳，还有镇议会的一摞公文。",
   "跳板还没放下来，港口的治安军就先上了船，要对货单。你一行一行往下念，念到第十四行就停住了：“贴身仆役一名，兽人，估价九十金冠。”",
   "货单上的第十四行，这会儿就站在舱口。他叫乌戈，四十来岁，有只耳朵缺了个角，手里提着主人的帽盒。共和国的地界上没有奴隶，只要他一只脚落了地，这一行就得划掉。可他的脚眼下还踩在船板上。",
   {
    "if": "race == 'orc'",
    "text": "你自己的那张赎身文书就压在藤箱最底下，上头写着“本会已出资赎身”。那是三十号全票通过的，到了三十一号，他们就把你装上了船。乌戈看你的那副神情，像在看一个识字的同乡。"
   },
   "种植园主的手搭上了你的肩膀。治安军的中士舔了舔笔尖，等着你落笔，使团长在一边看怀表。",
   {
    "speaker": "种植园主",
    "text": "书记，你照着念就是了。他是跟来伺候我的，又不是来这儿落户的。"
   },
   {
    "if": "is.god",
    "text": "货单在你手里直发烫，纸上的字正一行一行地往外渗。你只要一松手，这些字就全没了。"
   }
  ],
  "choices": [
   {
    "text": "划掉第十四行",
    "effects": [
     "flag line14_struck",
     "rep union +1",
     "rep charter -1"
    ],
    "result": "你拿笔把那一行涂成了一道黑杠。中士在旁边签了字，嘴里说了声“依法”。种植园主的手从你肩膀上拿开了，他问了你的名字，一连问了两遍。",
    "goto": "p_concord_02"
   },
   {
    "text": "照货单念，让他先回舱里",
    "effects": [
     "flag line14_read",
     "rep charter +1"
    ],
    "result": "你照着念了。中士在货单上打了个钩，写上“过境仆役，不下船”。乌戈退回了舱里，帽盒还提在手上。舱门关上以前，他看了你一眼。",
    "goto": "p_concord_02"
   },
   {
    "text": "把笔递给乌戈，让他自己划",
    "effects": [
     "flag line14_pen",
     "rep union +1"
    ],
    "result": "乌戈接过笔，看了老半天，他不会写字。他在那一行上画了一道，又画了一道，画成了一个叉，下手太重，把纸都画破了。中士说这样也算数。",
    "goto": "p_concord_02"
   },
   {
    "text": "问种植园主：这一行卖不卖",
    "tag": "印",
    "if": "faction == 'seal'",
    "cost": {
     "gold": 10
    },
    "effects": [
     "flag line14_bought"
    ],
    "result": "种植园主笑了，开价一百二。你说货单上明明写的是九十，他就不笑了。最后讲定先付十个金冠的定金，余款记在迟到者公司的账上，可那家公司的门你还没进过。你当场写了一张放免书，由中士做见证。",
    "goto": "p_concord_02"
   },
   {
    "text": "松开手，让货单上的字全消失",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag line14_struck",
     "rep charter -2",
     "var cult +1"
    ],
    "result": "整张货单都白了，跟新纸一样。第十四行没了，前后那二十九行也没了，这一来，一整舱烟草在法律上就成了没主的东西。码头上的搬运工愣了一会儿，就动手往下搬。使团长回过神来，头一句话是：镇议会表决过，不设神龛。",
    "goto": "p_concord_02"
   }
  ]
 },
 "p_concord_02": {
  "id": "p_concord_02",
  "title": "码头打手",
  "loc": "新港三号码头 · 货栈后面",
  "text": [
   "到了晌午，你抱着航海日志去了货栈后头，找了个背风的地方誊早上那张货单。地上全是烂鱼鳞，墙上贴着一张“蜥蜴人水手恕不接待”，墨迹还是新的。旁边吊着一网咸鳕鱼，绳子拴在一根木桩上。",
   {
    "if": "!flag.line14_read",
    "text": "乌戈蹲在你旁边啃一块硬面包，这还是他头一顿不用先端给别人的饭。巷口进来了两个人，一个拎着短棍，另一个把手揣在怀里。"
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
    "text": "巷口进来了两个人，眼睛直盯着你的藤箱，他们八成以为书记的箱子里装的都是钱。"
   },
   {
    "if": "flag.line14_read",
    "speaker": "码头贼",
    "text": "书记，这箱子可挺沉的啊。"
   }
  ],
  "choices": [
   {
    "text": "把乌戈挡在身后，迎上去",
    "if": "!flag.line14_read",
    "combat": {
     "title": "货栈后头",
     "intro": "乌戈把面包往怀里一揣，站到了你旁边。他手上没有家伙，只有那只帽盒。",
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
       "desc": "墙上吊着一网咸鳕鱼，绳子就拴在木桩上",
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
       "desc": "中士不会来，可他们不知道",
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
    "text": "站到乌戈前头，问他们先生欠了几个月工钱",
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
      "title": "货栈后头",
      "intro": "乌戈把面包往怀里一揣，站到了你旁边。他手上没有家伙，只有那只帽盒。",
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
        "desc": "墙上吊着一网咸鳕鱼，绳子就拴在木桩上",
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
        "desc": "中士不会来，可他们不知道",
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
    "text": "冲巷口喊中士，喊得像他就在拐角",
    "check": {
     "skill": "deception",
     "alt": [
      "performance"
     ],
     "dc": 12
    },
    "ok": {
     "text": "谁知中士真就在拐角，正在那儿买烟呢，他探出头来看了一眼，两个人就散了。中士问你喊他干什么，你说没事，他就把你的名字记了下来。",
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
    "text": "拎起藤箱，迎上去",
    "if": "flag.line14_read",
    "combat": {
     "title": "货栈后头",
     "intro": "有个扛包的搬运工把包一扔，站到了你这边：“三号码头不许偷东西，这是我们的码头！”",
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
       "desc": "墙上吊着一网咸鳕鱼，绳子就拴在木桩上",
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
       "desc": "里头是三套衣裳和镇议会的一摞公文，沉得很",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "藤箱抡了半圈，砸中了一个人的腰眼。公文到底比衣裳沉，镇议会三十一年的决议全在里头。",
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
    "text": "把藤箱打开给他们看",
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
     "text": "你刚掀开盖子，揣着手的那个就把手伸了进去，你一把按住了他的手腕。",
     "combat": {
      "title": "货栈后头",
      "intro": "有个扛包的搬运工把包一扔，站到了你这边：“三号码头不许偷东西，这是我们的码头！”",
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
        "desc": "墙上吊着一网咸鳕鱼，绳子就拴在木桩上",
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
        "desc": "里头是三套衣裳和镇议会的一摞公文，沉得很",
        "check": {
         "skill": "athletics",
         "dc": 12
        },
        "success": {
         "text": "藤箱抡了半圈，砸中了一个人的腰眼。公文到底比衣裳沉，镇议会三十一年的决议全在里头。",
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
   "使团长的舱房比你的大一倍，还有张桌子，航海日志就摊在桌上。他把墨水瓶推到你手边，自己倒茶去了。",
   "今天这一页该怎么写，三个人要的是三句不一样的话。种植园主要你写“仆役一名，途中走失”。中士要你写“该员已依共和国法律恢复自由”。你自己想写的，是早上码头上到底出了什么事。",
   {
    "if": "flag.line14_read",
    "text": "你想写的那一句很短，就是乌戈没下船。"
   },
   {
    "if": "flag.pa_log_torn",
    "text": "日志缺了一页，是在货栈后头给人撕走的，今天的事你得从头补起。"
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
    "text": "照种植园主的写",
    "effects": [
     "rep charter +1"
    ],
    "result": "你照着写了。使团长吹干了墨，点了点头。这一行字，往后三十年都会这么写着。",
    "goto": "p_concord_04"
   },
   {
    "text": "照中士的写",
    "effects": [
     "rep republic +1"
    ],
    "result": "你照着写了。使团长念了一遍，说“共和国法律”这几个字镇上没人爱看，可也挑不出什么错来。",
    "goto": "p_concord_04"
   },
   {
    "text": "照实写，一个字不添",
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
     "text": "你写完了，使团长从头念到尾，念到第十四行那儿停了一下，到底没改。",
     "effects": [
      "rep church +1"
     ],
     "goto": "p_concord_04"
    },
    "fail": {
     "text": "使团长读完，拿过笔去，在你那句话后头添了半句“经各方同意”。至于是谁同意的，他没写。",
     "effects": [
      "flag log_amended"
     ],
     "goto": "p_concord_04"
    }
   },
   {
    "text": "照教会记誓的老格式写，末尾加一句祷词",
    "tag": "神职",
    "if": "is.divine",
    "check": {
     "skill": "religion",
     "dc": 11
    },
    "ok": {
     "text": "你在每句前头写一个日子，末尾写上一句“以上所记，愿真理裁之”。使团长不敢改祷词，连带着前头的字也不敢动了。",
     "effects": [
      "rep church +1"
     ],
     "goto": "p_concord_04"
    },
    "fail": {
     "text": "祷词你记串了，串成了洛伦特那边的。使团长皱着眉头改了两处，顺手把前头也改了，添的是“经各方同意”。",
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
   "下午，你提着藤箱进了城，怀里揣着使团长临走塞给你的一张纸。那是镇议会的抵债文书，盖着镇上的章，正文里要紧的只有一个数，四百。",
   "新港的路是斜的，往上走全是货栈，往下走全是酒馆。有个卖热鳗鱼的老头问你打哪儿来，一听说是巨魔湾，他就乐了。",
   {
    "speaker": "卖鳗鱼的",
    "text": "听说你们那儿干什么都得投票？那你上这儿来，也是投过票的喽？"
   },
   "投过，一共投了二十回，前十九回的结果都是“缓议”。",
   {
    "speaker": "卖鳗鱼的",
    "text": "这就叫协约速度。来，这一截鳗鱼不用投票，拿着吃。"
   },
   "启事上只写了铸炉街，没写门牌，可铸炉街足有一里多长。",
   {
    "if": "is.god",
    "text": "你走出去半条街，回头看了一眼，老头正往你站过的地方撒盐呢。"
   }
  ],
  "choices": [
   {
    "text": "从街口起，一家一家对招牌",
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
     "text": "你走过了头，折回来，又走过了头，最后只好花三个金冠雇了个城市地精带路。他一路上都在推销他表哥做的靴子，说你脚上这双撑不过雨季。",
     "effects": [
      "gold -3"
     ],
     "goto": "p_concord_05"
    }
   },
   {
    "text": "跟街口那个带路的城市地精说地精话",
    "tag": "绿皮",
    "if": "is.greenskin",
    "effects": [
     "rep union +1"
    ],
    "result": "他一听见乡音，眼睛都亮了，钱也不要了，一直把你带到了门口。临走他说新港三号码头上有他一个姨，是扛包的，往后有事尽管去找她。",
    "goto": "p_concord_05"
   },
   {
    "text": "先去码头的公证处查那家公司的登记",
    "tag": "印",
    "if": "faction == 'seal'",
    "cost": {
     "gold": 1
    },
    "effects": [
     "xp 10"
    ],
    "result": "公证处的书记翻了二十分钟，才翻出一条登记：迟到者公司，1446 年登记，地址是铸炉街蜡烛铺楼上。查档费收了一个金冠。他还说，三十年了，你是头一个来查这家公司的。",
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
   "蜡烛铺的侧门开着，里头飘出来一股牛油味。楼梯口坐着个兽人女人，正在擦一面盾，下巴是黄铜做的，还带着铰链，她看了看你的藤箱。",
   {
    "speaker": "布拉",
    "text": "找谁的？上去吧，第三级楼梯是松的。"
   },
   "楼上只有一间屋，摆着三张桌子，只有一张坐了人，是个白头发的矮人，手边的账本比她的胳膊还厚。你把抵债文书放到了她面前。",
   "她没看文书，先从架子上抽出了另一本账，翻到 1789 年。上头记着：替塞斯提尔边区某镇清理沼泽鬼婆一窝，四百金冠，利息另算。下面一行写着“未付”，再往下三十行，行行都是“已催”。",
   {
    "speaker": "埃塔",
    "text": "你们镇总算来人了。钱呢？"
   },
   "你说，镇上没钱，是拿你这个人来抵债的。她看了看文书，又看了看你，笔尖停在了“收讫”那一栏前头。",
   {
    "if": "flag.bought_free",
    "speaker": "埃塔",
    "text": "先出钱把你赎出来，再拿你来抵债，你们镇这账做得比我还细。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "拿一个神抵四百金冠，你们镇是赚了。我这儿亏没亏，得等我查过细则再说。"
   }
  ],
  "choices": [
   {
    "text": "认这笔账",
    "effects": [
     "rep charter +1"
    ],
    "result": "你说认。埃塔在“收讫”前头写了两个字，“人到”，钱的那一栏她就空着了。",
    "goto": "p_concord_05b"
   },
   {
    "text": "问她利息怎么算",
    "effects": [
     "flag pa_asked_interest"
    ],
    "result": "埃塔拨了两下算盘就停了手：“真算下来，你们镇得整个卖掉。”她把算盘推到一边，“我不算了，不算就一直欠着，欠着的账我记得住。”",
    "goto": "p_concord_05b"
   },
   {
    "text": "指着文书：上头没写年限",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag debt_no_term"
    ],
    "result": "埃塔把文书拿起来，从头到尾看了两遍。“是没写。”她在账上添了一行“抵债人服务年限，文书未载，待议”，其中“待议”那两个字，她写得很小。",
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
   "布拉也上了楼，往门框上一靠。埃塔合上账本，下巴朝身后抬了抬，她背后的墙上钉着一张羊皮纸，上头写着三行字，每一行左边都有一块黑印子，是三百多年的手印一层一层叠出来的。",
   {
    "speaker": "埃塔",
    "text": "抵债的也得起誓。墙上这三条是 1446 年立的，你挑一条按个手印，我就记在你名字后头。记上了就改不了。"
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
    "text": "这是印条。三百七十四年了，按这条的没毁过一回约，别从你这儿开头。"
   },
   {
    "if": "faction == 'lantern'",
    "text": "你把手按在了第三行上，这一行写的是“去看，回来说”，手印也数这一行最浅。"
   },
   {
    "if": "faction == 'lantern'",
    "speaker": "埃塔",
    "text": "这是灯条。上一个按这条的是替史家会跑腿的，1702 年去看了，可没回来说。"
   },
   {
    "if": "faction == 'shield'",
    "text": "你把手按在了头一行上，这一行写的是“先护人，后算账”，黑印子里头有一块是铁锈色的。"
   },
   {
    "if": "faction == 'shield' && party.bura",
    "speaker": "布拉",
    "text": "跟我是一条。按了这条的，银行可不借钱给你。"
   },
   {
    "speaker": "埃塔",
    "text": "还有一件事。1811 年以后公司就没有队长了，一百金冠以上的单子得队长签字，可这个字谁也不肯签。"
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
    "text": "恭喜你，队长。柜上的现钱是四十一金冠，这个月的工钱只够先发一个人的，你说先发谁吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "另外还有细则第九条，成了神的不加钱。细则一共四十条，墙上挂不下，都在我这儿收着。"
   },
   {
    "if": "is.god && party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）楼下的人都说你是神。别的我不管，我就问一句，神出不出外勤？"
   }
  ],
  "choices": [
   {
    "text": "先发布拉的",
    "effects": [
     "approval bura +1"
    ],
    "result": "埃塔数出六个金冠推了过去，布拉数都没数就揣进了兜里。她下巴的铰链响了一声，这回不是坏消息：“共和国欠着我十一个月的饷。公司欠我的，刚才清了。”",
    "goto": "p_concord_06"
   },
   {
    "text": "先发自己的",
    "effects": [
     "gold +6",
     "approval bura -1"
    ],
    "result": "埃塔数了六个金冠给你，在账上记了一笔：“队长，预支，到任头一天。”布拉接着擦她的盾，擦来擦去还是刚才那一块。",
    "goto": "p_concord_06"
   },
   {
    "text": "请埃塔翻账：欠得最久的那一笔先发",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "approval bura +1",
     "gold +2"
    ],
    "result": "埃塔把账翻到 1812 年：“布拉，外勤，欠过两回，都补上了。再往前就是我自己，1790 年的半个月工钱，我没催过。”她把六个金冠推给布拉，又数了两个给你：“这是查账的辛苦钱，章程上有的。”",
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
   "起完了誓，埃塔重新翻开账本，在你名字后头写了一行字，你倒着看也看得清，写的是“抵债，四百，未清”。",
   {
    "if": "flag.debt_no_term",
    "text": "后头还跟着她刚才添的那两个小字，“待议”。"
   },
   {
    "if": "flag.pa_asked_interest",
    "text": "利息那一栏是空着的。她说空着最好，空着就谁都不用卖了。"
   },
   {
    "if": "flag.line14_bought",
    "speaker": "埃塔",
    "text": "还有一笔，码头上那个兽人的余款，八十金冠，记在公司名下了。你到任头一天就替公司花了钱，上一个这么干的人，还是 1702 年的事。"
   },
   "布拉扔给你一块绒布和一罐擦铜油。侧门边上钉着块铜牌，字已经磨掉了一半，还认得出来的只剩“到者公司”和“1446”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "铜牌归队长擦，这是规矩。磨掉的那一半字，就是这么一天天擦没的。"
   },
   "往后的两个多月，你每天早上都要擦一回。到了花始月的头一个礼拜，这天你正擦到“1446”，街上过来一个泰卢姆的传令员，摇着铃，嗓子都喊劈了一半。",
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
    "text": "那就是公司的头一单。史家会要雇人看着罐子，一天两个金冠，到不了一百，用不着你签字。"
   },
   {
    "if": "faction == 'seal'",
    "text": "她从窗口扔下来一个小布袋，里头是印条的入伙金，三十金冠，这个数还是 1446 年定的，一直没涨过。"
   },
   {
    "if": "!flag.line14_read",
    "text": "那两个多月里，你在三号码头见过乌戈一回，他扛着两包咸鱼上跳板，走得很稳。他看见了你，脚下没停，只冲你扬了扬下巴。"
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
   "零点的钟声从塔厄尔那边传过来，敲了十二下，铸炉街自动机厂的七号线没停。十二个工位上十二只铆锤，照旧一秒钟砸一下。车间里一股机油和热铁皮的味道，顶棚上挂着十二盏灯。",
   {
    "if": "is.mechanim",
    "text": "你是九号工位。这一班你已经打到了第四千零一十一颗铆钉，锤子举到一半却停住了，可并没有谁下过这道指令。"
   },
   {
    "if": "is.mechanim",
    "text": "你问了一句“今天礼拜几”，声音不大，跟你的锤子一样平。十二个工位没有一个抬头的，隔壁的七八三还在拧它的阀门，一秒钟一圈。只有领班的烟斗掉进了铆钉箱里。"
   },
   {
    "if": "is.mechanim",
    "text": "十号也停了。那一台放下扳手，转过头来看着你。"
   },
   {
    "if": "is.mechanim",
    "speaker": "领班",
    "text": "礼拜三啊，今天礼拜三。……嗨，我跟你说这个干什么。"
   },
   {
    "if": "!is.mechanim",
    "text": "{pc}，你是这一班的{?race == 'goblin':司炉|铆工}，一班十二个钟头，工钱按件算。十号工位的锤子举到一半，忽然停了。那台机器转过头来，问了一句“今天礼拜几”。"
   },
   {
    "if": "!is.mechanim",
    "text": "它声音不大，跟它的锤子一样平。十二个工位没有一个抬头的，十一号的七八三还在拧它的阀门，一秒钟一圈。领班的烟斗掉进了铆钉箱里。全车间抬了头的工人只有你一个。"
   },
   {
    "if": "!is.mechanim",
    "speaker": "领班",
    "text": "礼拜三。……嗨，我跟它说这个干什么！你，上账房给我取一张报废单来。"
   },
   {
    "if": "is.god",
    "text": "你还没张嘴，整条七号线的嗡嗡声就先低了半个调。"
   }
  ],
  "choices": [
   {
    "text": "装成卡壳了，把锤子慢慢放回去",
    "if": "is.mechanim",
    "check": {
     "skill": "deception",
     "dc": 12
    },
    "ok": {
     "text": "你让锤子落回了原位，又从关节里放出一口气，听着跟坏了的铰链一个声。领班在日志上写的是“九号，卡壳，待修”。",
     "effects": [
      "flag hid_waking"
     ],
     "goto": "p_unowned_02"
    },
    "fail": {
     "text": "你放得太慢了，慢得像是在想事情。领班盯着你看了老半天，在日志上写的是“九号，原因不明”。",
     "effects": [
      "flag pu_named"
     ],
     "goto": "p_unowned_02"
    }
   },
   {
    "text": "再问一遍",
    "if": "is.mechanim",
    "effects": [
     "flag pu_named",
     "rep union +1"
    ],
    "result": "你又问了一遍“今天礼拜几”。这一回，锅炉房的司炉探出了头，铆钉箱后头的学徒也站了起来，领班捡起烟斗，在日志上把“九号”两个字描粗了。",
    "goto": "p_unowned_02"
   },
   {
    "text": "照常干活，别让领班看出什么",
    "effects": [
     "rep charter +1"
    ],
    "result": "{?is.mechanim:锤子落了下去，第四千零一十一颗铆钉进了板子，跟前头那四千零一十颗一样平。领班松了口气，回头去看十号，十号那一锤到底没打完。|你去了账房。老会计头都没抬，从抽屉里抽出一张递给你，是张蓝纸，印着“器材报废，回炉，作废铁价”，编号那一栏还空着。}",
    "goto": "p_unowned_02"
   },
   {
    "text": "取来报废单，揣进兜里，回来说没找着",
    "if": "!is.mechanim",
    "check": {
     "skill": "sleight",
     "dc": 11
    },
    "ok": {
     "text": "你把单子折成小块塞进了鞋里，领班骂了一句，说那就等天亮再开。这一来，那台机器的事在日志上暂时只写了“停机”两个字。",
     "effects": [
      "flag hid_waking"
     ],
     "goto": "p_unowned_02"
    },
    "fail": {
     "text": "单子从你袖口里掉了出来，正飘到领班脚边。他捡起来，在背面记下了你的工号。",
     "effects": [
      "rep charter -1"
     ],
     "goto": "p_unowned_02"
    }
   },
   {
    "text": "走过去，问那台机器叫什么",
    "if": "!is.mechanim",
    "effects": [
     "flag pu_asked_name",
     "rep union +1"
    ],
    "result": "它看着你，过了两秒才说：“（陈述。）没有。”又过了一秒，它问：“（询问。）今天礼拜几。”你说礼拜三，看得出来，它把这三个字记下了。",
    "goto": "p_unowned_02"
   },
   {
    "text": "对整条七号线说一个字",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "rep charter -1",
     "rep union +1",
     "var cult +1"
    ],
    "result": "你说了一个字，“停”。停下来的只有三台，都是 1811 年的料，其余九台照旧打，七八三也照旧拧。第二天厂主去报了保险，理由一栏写的是“神力所致损失”。",
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
   "领班的桌子在七号线的尽头，桌腿是钉在地上的，桌面上积了一层油泥。停机日志就摊在上头，一页二十行。",
   {
    "if": "is.mechanim && !flag.hid_waking",
    "text": "今晚写了两行。头一行写的是你，“九号，原因不明”，第二行写的是十号，“周中日，二号停机”。"
   },
   {
    "if": "is.mechanim && flag.hid_waking",
    "text": "今晚写了两行。头一行写的是你，“九号，卡壳，待修”，第二行写的是十号，“周中日，二号停机”。"
   },
   {
    "if": "!is.mechanim",
    "text": "今晚写了两行。头一行是傍晚写的，“三号，皮带断了”，第二行写的是十号，“周中日，二号停机”。"
   },
   "领班写日子用的是公文上的正式写法，写完了又在后头描了一遍。日志底下还压着厂主的一张条子：“请奇械师来换芯，天亮到。”",
   {
    "speaker": "领班",
    "text": "换个芯得十二个金冠，报废才三个。厂主那个人会算账。"
   },
   {
    "speaker": "十号",
    "text": "（询问。）换下来的那个，要去哪儿。"
   },
   "领班没回头，他多半不知道问话的是谁。",
   {
    "if": "is.god",
    "text": "日志上还有第三行，是领班刚写的，才写了一半就划掉了。划掉的是个“神”字，旁边改成了“外人”。"
   }
  ],
  "choices": [
   {
    "text": "趁领班去倒水，看换班表和钥匙挂在哪",
    "check": {
     "skill": "investigation",
     "alt": [
      "perception"
     ],
     "dc": 11
    },
    "ok": {
     "text": "换班表钉在柱子上，上头写着报废班四点到，两个人，带液压钳。后院门的钥匙一共两把，一把在厂主家里，一把挂在锅炉房，挂钩上写着司炉的名字。",
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
    "text": "掀开十号的胸板，看芯核上的厂印",
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
     "text": "胸板的螺丝是反牙的，你拧了老半天，领班在那边咳嗽了一声。",
     "effects": [
      "flag pu_seen"
     ],
     "goto": "p_unowned_03"
    }
   },
   {
    "text": "把今晚那两行日志抄下来",
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
   "锅炉房里热得人睁不开眼，煤堆得比人还高。报废班四点到，眼下是两点一刻。",
   {
    "if": "race != 'goblin'",
    "text": "司炉是个城市地精，九岁就进了厂，工钱按半班算。后院的钥匙就挂在她腰上，跟一串煤铲钩子挂在一块儿。"
   },
   {
    "if": "race == 'goblin'",
    "text": "锅炉房是你的地盘，后院的钥匙就在你兜里，跟一串煤铲钩子挂在一块儿。学徒蹲在煤堆后头，怎么也不肯抬头。"
   },
   "十号也跟着进来了。它走起路来跟别的机器一样，一步一尺，只是每走三步就要停下来，看看四周都有些什么。",
   "它胸口的工号底下多了三个字，是拿钉子刻上去的，刻得很浅，刻的是“礼拜三”。领班随口答的那一句，它当成了自己的名字。",
   {
    "speaker": "礼拜三",
    "text": "（陈述。）这里有三扇门。（询问。）哪一扇是出去的。"
   },
   {
    "if": "flag.pu_scouted",
    "text": "你还记得换班表上写的，两个人，一把液压钳。"
   }
  ],
  "choices": [
   {
    "text": "趁黑从后院翻出去",
    "check": {
     "skill": "stealth",
     "dc": 12,
     "adv": "flag.pu_scouted",
     "dis": "flag.pu_seen"
    },
    "ok": {
     "text": "你们贴着煤堆往外走，后院的狗认得煤味，没叫。墙头的碎玻璃早给人拿布垫过了，大概是从前想走的人留下的。",
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
    "text": "求司炉把它当废铁推出去",
    "if": "race != 'goblin'",
    "effects": [
     "flag exit_stolen",
     "rep union +1"
    ],
    "result": "司炉看看你，又看看礼拜三，从腰上解下了钥匙：“推车在后头，拿麻袋盖上。我可没见过你们。”她把钥匙扔过来，转身往炉膛里添了一铲煤。",
    "goto": "p_unowned_04"
   },
   {
    "text": "把它装上废铁车，自己推出去",
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
    "text": "等天亮，让厂主按废铁价卖掉",
    "effects": [
     "flag exit_sold",
     "rep charter +1"
    ],
    "result": "厂主不到四点就来了，他嫌换芯太贵，就把{?is.mechanim:你和十号|十号}写进了待售的单子，三个金冠一台。可报废班才不管谁来买，他们只认回炉单。",
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
   "后院门口亮着一盏风灯，报废班的两个人就站在灯底下，一个抽着烟，一个扛着液压钳。那钳口有小臂那么长，油管拖在地上，一直接到墙角的泵上。",
   {
    "if": "flag.exit_sold",
    "text": "他们手里有厂主签的单子，写的是“回炉，不待售”，厂主跟买主说的可是另一套话。"
   },
   {
    "if": "flag.exit_stolen",
    "text": "废铁车推到了门口，麻袋底下偏偏伸出来一只铁脚。抽烟的那个把烟头一弹，拿脚尖挑开了麻袋。"
   },
   {
    "if": "is.mechanim",
    "speaker": "报废班的工人",
    "text": "九号，十号，回炉。你们俩谁先来啊？"
   },
   {
    "if": "!is.mechanim",
    "speaker": "报废班的工人",
    "text": "十号，回炉。你让开吧，这儿没你的事，你是按件拿钱的。"
   },
   {
    "speaker": "礼拜三",
    "text": "（害怕。）那把钳子。（陈述。）我数过，它一回能夹断四根铆钉。"
   },
   {
    "if": "flag.pu_named",
    "text": "抽烟的那个手里捏着回炉单，“九号”那两个字描得很粗，隔着风灯都看得见。"
   },
   "门边的墙上有一根铁杆，那是七号线的总闸。"
  ],
  "choices": [
   {
    "text": "挡在礼拜三前头",
    "combat": {
     "title": "后院门口",
     "intro": "扛钳子的那个把油管往身后一甩，墙角的泵嗡嗡地响了起来。礼拜三往前站了一步，正站在你和钳口中间。",
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
       "desc": "墙上那根铁杆，一拉下来全线断电",
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
       "desc": "油管拖在地上，接头是拧上去的",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "接头一松，油喷了一地。没了油压，钳子就是一块死铁，两个人一下子笨手笨脚起来。",
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
    "text": "跟他们说：都是七号线的，明天回炉单上就有你们",
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
     "text": "抽烟的那个看了看同伴，说：“三个金冠一台，我们一个礼拜才挣两个。”说完他把钳子放下，往门边让了一步。",
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
      "intro": "扛钳子的那个把油管往身后一甩，墙角的泵嗡嗡地响了起来。礼拜三往前站了一步，正站在你和钳口中间。",
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
        "desc": "墙上那根铁杆，一拉下来全线断电",
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
        "desc": "油管拖在地上，接头是拧上去的",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "接头一松，油喷了一地。没了油压，钳子就是一块死铁，两个人一下子笨手笨脚起来。",
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
    "text": "先下手，去抢那根油管",
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
     "text": "油管从你手里滑了出去，钳口一下夹住了你的袖子，连皮带肉都夹在了里头。",
     "effects": [
      "hp -2"
     ],
     "combat": {
      "title": "后院门口",
      "intro": "扛钳子的那个把油管往身后一甩，墙角的泵嗡嗡地响了起来。礼拜三往前站了一步，正站在你和钳口中间。",
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
        "desc": "墙上那根铁杆，一拉下来全线断电",
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
        "desc": "油管拖在地上，接头是拧上去的",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "接头一松，油喷了一地。没了油压，钳子就是一块死铁，两个人一下子笨手笨脚起来。",
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
   "天亮以前的铸炉街，只有炉子还醒着。你们沿着墙根走，礼拜三跟在后头，一步一尺，它走路的时候胸口里有一点嗡嗡声，从前在七号线上太吵，你一直没留意过。",
   {
    "if": "flag.pu_pinned",
    "text": "你肋骨上还留着钳口的印子。后来是礼拜三把液压钳的油管拧开的，拧的时候它说了一句“（抱歉。）”，也不知道是跟谁说的。"
   },
   "街口站着两个垄断集团的卫兵，一身重甲，只露着两只眼睛。",
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
    "text": "说是送去修的，单子在厂里",
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
     "text": "卫兵看了看你，又看了看礼拜三胸口的厂号。“送修的走后街。”说完他让开了路。",
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
    "text": "站着不动，让礼拜三把你报成器材",
    "tag": "机械人",
    "if": "is.mechanim",
    "effects": [
     "flag pu_stood_still"
    ],
    "result": "你站定了，关节里一点声都不出。礼拜三往前走了一步，说：“（陈述。）器材，两台，送修。”卫兵在本子上画了两道杠，放你们过去了。走出半条街，礼拜三才说：“（不确定。）我刚才把你记成了一个数。”",
    "goto": "p_unowned_05b"
   },
   {
    "text": "说它不是厂产，是你的同事",
    "if": "!is.mechanim",
    "effects": [
     "gold -5",
     "approval middlesday +1"
    ],
    "result": "卫兵笑出了声，笑完了照样要了五个金冠的过街费，还说这叫“同事费”。礼拜三把这个数记下了：“（陈述。）我欠你五个金冠。（询问。）同事是什么。”",
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
   "街当中有一家蜡烛铺，侧门半开着。楼梯口坐着个兽人女人，正在擦一面盾，下巴是黄铜做的，还带着铰链，她先看了看礼拜三，然后才看你。",
   {
    "speaker": "礼拜三",
    "text": "（询问。）这里招不招人。"
   },
   {
    "if": "flag.pu_asked_name",
    "speaker": "礼拜三",
    "text": "（陈述。）我叫礼拜三。{ta}在七号线上问过我一回。"
   },
   {
    "speaker": "布拉",
    "text": "招。启事上就一条，自备靴子。（铰链咔的一声。）你没有靴子。先上来吧，第三级楼梯是松的。"
   },
   "到了楼上，白头发的矮人把一张纸压在了账本上，是一张卖契。",
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
    "text": "说：人",
    "effects": [
     "flag pu_said_person",
     {
      "if": "is.mechanim",
      "then": [
       "approval middlesday +1"
      ]
     }
    ],
    "result": "埃塔把卖契翻过来，在背面写了个“人”字，写得方方正正。{?is.mechanim:礼拜三看着那个字，足足看了七秒，然后说：“（陈述。）我也是。”|礼拜三看了看那个字，又看了看你，说：“（询问。）你替我说了。（陈述。）下回我自己说。”}",
    "goto": "p_unowned_05c"
   },
   {
    "text": "说：先记器材，起誓的事以后再说",
    "if": "is.mechanim",
    "effects": [
     "rep charter +1",
     "approval middlesday -1"
    ],
    "result": "埃塔点了点头，没有写字。礼拜三把头转过去看墙上那张羊皮纸，看了很久。",
    "goto": "p_unowned_05c"
   },
   {
    "text": "让它自己说",
    "if": "!is.mechanim",
    "effects": [
     "flag pu_said_person",
     "approval middlesday +2"
    ],
    "result": "屋里静了三秒，礼拜三才开口：“（不确定。）人。（陈述。）账上先记器材也行，账要对得上。”埃塔说对，账是要对得上，说完在卖契背面写了个“人”字。",
    "goto": "p_unowned_05c"
   }
  ]
 },
 "p_unowned_05c": {
  "id": "p_unowned_05c",
  "title": "三行字",
  "loc": "铸炉街 · 蜡烛铺楼上",
  "text": [
   "埃塔背后的墙上钉着一张羊皮纸，上头写着三行字，每一行左边都有一块黑印子，是三百多年的手印一层一层叠出来的。",
   {
    "speaker": "埃塔",
    "text": "墙上这三条是 1446 年立的，你挑一条按个手印，我就记在你名字后头。记上了就改不了。"
   },
   {
    "if": "faction == 'seal'",
    "text": "你把手按在了第二行上，这一行写的是“签了字的，就办到”，三行里就数这一块印子最黑。"
   },
   {
    "if": "faction == 'seal'",
    "speaker": "埃塔",
    "text": "这是印条。三百七十四年了，按这条的没毁过一回约，别从你这儿开头。"
   },
   {
    "if": "faction == 'lantern'",
    "text": "你把手按在了第三行上，这一行写的是“去看，回来说”，手印也数这一行最浅。"
   },
   {
    "if": "faction == 'lantern'",
    "speaker": "埃塔",
    "text": "这是灯条。上一个按这条的是替史家会跑腿的，1702 年去看了，可没回来说。"
   },
   {
    "if": "faction == 'shield'",
    "text": "你把手按在了头一行上，这一行写的是“先护人，后算账”，黑印子里头有一块是铁锈色的。"
   },
   {
    "if": "faction == 'shield' && party.bura",
    "speaker": "布拉",
    "text": "跟我是一条。按了这条的，银行可不借钱给你。"
   },
   {
    "if": "flag.pu_said_person",
    "text": "礼拜三也把手按了上去，就按在你旁边。它的手印是方的，没有掌纹。埃塔看了一眼，没说话，照样记下了。"
   },
   {
    "speaker": "埃塔",
    "text": "还有一件事。1811 年以后公司就没有队长了，一百金冠以上的单子得队长签字，可这个字谁也不肯签。"
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
    "text": "恭喜你，队长。柜上的现钱是四十一金冠，这个月的工钱只够先发一个人的，你说先发谁吧。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "另外还有细则第九条，成了神的不加钱。细则一共四十条，墙上挂不下，都在我这儿收着。"
   },
   {
    "if": "is.god && party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）楼下的人都说你是神。别的我不管，我就问一句，神出不出外勤？"
   },
   {
    "if": "is.god && party.middlesday",
    "speaker": "礼拜三",
    "text": "（不确定。）你说话的时候，我胸口里的东西会往你那边偏。（询问。）别的机器也是这样吗。"
   }
  ],
  "choices": [
   {
    "text": "先发布拉的",
    "effects": [
     "approval bura +1"
    ],
    "result": "埃塔数出六个金冠推了过去，布拉数都没数就揣进了兜里。她下巴的铰链响了一声，这回不是坏消息：“共和国欠着我十一个月的饷。公司欠我的，刚才清了。”",
    "goto": "p_unowned_06"
   },
   {
    "text": "先发自己的",
    "effects": [
     "gold +6",
     "approval bura -1"
    ],
    "result": "埃塔数了六个金冠给你，在账上记了一笔：“队长，预支，到任头一天。”布拉接着擦她的盾，擦来擦去还是刚才那一块。",
    "goto": "p_unowned_06"
   },
   {
    "text": "请埃塔翻账：欠得最久的那一笔先发",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "approval bura +1",
     "gold +2"
    ],
    "result": "埃塔把账翻到 1812 年：“布拉，外勤，欠过两回，都补上了。再往前就是我自己，1790 年的半个月工钱，我没催过。”她把六个金冠推给布拉，又数了两个给你：“这是查账的辛苦钱，章程上有的。”",
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
   "埃塔翻到器材那一页，写下“十四号，驮运用，二手，每年折旧一成”，写的是礼拜三。",
   {
    "if": "is.mechanim",
    "text": "她在下一行写了个十五号，写到“驮运用”就停了笔，看了你一眼，然后翻回雇员那一页，把你的名字又写了一遍。这一来，两本账上就都有你了。"
   },
   {
    "speaker": "礼拜三",
    "text": "（不确定。）每年折旧一成。照这么算，十年以后我就不值钱了。（礼貌。）到了那一年，我还能留下来吗。"
   },
   {
    "speaker": "埃塔",
    "text": "账上是这么算的。可这账不是我定的，是 1446 年的章程定的。章程上也没说不值钱了就得走。"
   },
   {
    "if": "flag.pu_core_read",
    "text": "你说了芯核上那行厂印的事。埃塔在十四号后头添了一笔，记的是芯，七号线，1811 年三月，料是 1810 年的。"
   },
   {
    "if": "flag.pu_log_copied",
    "text": "你把抄下来的那两行日志递了过去。她看完就收进身后的铁箱，上了锁。"
   },
   {
    "if": "flag.pu_stood_still",
    "speaker": "埃塔",
    "text": "街口的卫兵说，是你自己报的器材。下回再报，先跟我说一声吧，账得对得上才行。"
   },
   "布拉扔给你一块绒布和一罐擦铜油。侧门边上钉着块铜牌，字已经磨掉了一半，还认得出来的只剩“到者公司”和“1446”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "铜牌归队长擦，这是规矩。磨掉的那一半字，就是这么一天天擦没的。"
   },
   "往后的两个多月，你每天早上都要擦一回。到了花始月的头一个礼拜，这天你正擦到“1446”，街上过来一个泰卢姆的传令员，摇着铃，嗓子都喊劈了一半。",
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
    "text": "那就是公司的头一单。史家会要雇人看着罐子，一天两个金冠，到不了一百，用不着你签字。"
   },
   {
    "if": "faction == 'seal'",
    "text": "她从窗口扔下来一个小布袋，里头是印条的入伙金，三十金冠，这个数还是 1446 年定的，一直没涨过。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（询问。）罐子里装的是什么。（陈述。）他说是活的。我们也是。"
   }
  ],
  "next": "a1_01"
 }
};
