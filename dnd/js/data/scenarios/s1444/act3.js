// s1444 / act3.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "a3_01": {
  "id": "a3_01",
  "title": "一匣子没寄出的信",
  "chapter": "第三幕 · 郁金香下面的大公",
  "art": "ev_lilac_wars",
  "loc": "卡斯托纳斯 · 门板桌",
  "date": "1451年秋",
  "text": [
   {
    "if": "flag.a3_ushka_went",
    "text": "乌什卡没能等到这天。前一天夜里她把刀和锤擦了一遍，背在身上，往烂刀氏族的方向走了。临走前她在门板旁边刻了一道，跟她木签上的刻痕一样深。"
   },
   "卡斯托纳斯下城空地上那张门板桌，收尸队已经用了七年。下面垫的酒桶换过，桌面还是旧的，布满刀痕。蓝牙让人沿边钉了铁皮，免得谁再把桌子掀翻。",
   "这年秋天，第一车萝卜刚卸完，有个穿灰斗篷的年轻骑士牵着马进了空地，马跑得满嘴白沫。他的剑柄上缠着铜丝，那是会法术的骑士才用的。他一进来就问，替人收尸迁坟的是哪几位。",
   {
    "if": "party.ushka",
    "text": "乌什卡朝板车抬抬下巴。"
   },
   {
    "if": "!party.ushka",
    "text": "门板桌边的人一齐朝板车看了过去。"
   },
   {
    "cls": "letter",
    "text": "骑士带来一封信，信上写的是：“诸位，敝人有个朋友，七年前被人埋在了一处不该埋的地方，那地方是皇宫的花圃。想请诸位把他请出来，另找一处能立碑的地方安葬。随信奉上定金一百五十金冠，已清点无误，余款事成后结清。”落款是阿德蕾西娅骑士团的大团长，德利安·西尔·阿兰嫩。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "七年了。花圃的土松，压不坏骨头，人应该还是全的。"
   },
   "到了下午，多米尼克也来了，怀里抱着一本抄好的科琳信条，想托你们带到帝国都城安本科斯特的神殿区去。蓝牙跟在他后面，手里拿着一张路条，上面盖着科琳塔尔的印，那是当年追随科琳的队伍如今用的印信。",
   {
    "speaker": "多米尼克",
    "text": "这本信条叫《剑与盾》，一共七页。帝国的神殿要是不肯认科琳是神，就请他们把不认的道理说出来，我要记下来。"
   },
   {
    "if": "rep.corintar <= -2",
    "text": "蓝牙把路条折了两折，一声不响地又揣回了怀里。他不打算给你们。"
   },
   {
    "if": "origin == 'sons'",
    "text": "三天前，塔兰顿的信差先到了一步，给你捎来一张纸。上面是罗吉尔的字，只有一行：别让人拿我父亲的尸骨当旗子。"
   },
   {
    "if": "origin == 'wex'",
    "text": "替皇帝管密探的巴兹伍德也来了信，是夹在一捆运盐的单子里送来的。上面写着：回来述职，顺路。"
   },
   {
    "if": "origin == 'wex' && (flag.report1_false || var.false_reports >= 2)",
    "text": "巴兹伍德的信下面另起了一行，字小了一号：带上你的抄本。"
   },
   {
    "if": "is.god",
    "text": "骑士身上还带着第二封信，封皮上写着“致车上那位”。里面只有一句话：若阁下真是神，敝人另有一事请教，见面再说。"
   }
  ],
  "first": [
   {
    "if": "party.ushka && approval.ushka <= -4",
    "then": [
     "companion -ushka",
     "flag ushka_left",
     "flag a3_ushka_went",
     "log 乌什卡背上刀与锤走了，往烂刀氏族那边。"
    ]
   },
   {
    "if": "origin == 'sons'",
    "then": [
     "quest q_o_sons stage 2"
    ]
   },
   {
    "if": "origin == 'wex'",
    "then": [
     "quest q_o_wex stage 2"
    ]
   },
   "codex lilac_wars"
  ],
  "choices": [
   {
    "text": "接过多米尼克的信条",
    "once": true,
    "effects": [
     "flag creed_carried",
     "item +corinite_creed"
    ],
    "result": [
     "多米尼克把书递过来，忽然又抽回去，翻到最后一页看了一眼，才重新递给你。",
     {
      "speaker": "多米尼克",
      "text": "第一页是愚足抄的，字丑了些，意思没抄错。"
     }
    ]
   },
   {
    "text": "收下蓝牙的路条，过帝国关卡时用",
    "once": true,
    "req": "rep.corintar > -2",
    "reqText": "科琳塔尔信不过你们",
    "effects": [
     "item +safe_conduct"
    ],
    "result": [
     {
      "speaker": "蓝牙",
      "text": "西边的事我不过问。过关卡的时候，记得把印朝上递过去。"
     },
     {
      "if": "is.greenskin || party.ushka || party.nixee",
      "speaker": "蓝牙",
      "text": "帝国那边见了绿皮就要查文书。这张路条别弄丢了。"
     }
    ]
   },
   {
    "text": "向骑士亮出月党的银月徽",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "flag a3_name_early",
     "rep moon +1"
    ],
    "result": [
     "骑士朝你领口看了一眼，声音立刻压低了。",
     {
      "speaker": "骑士",
      "text": "大团长交代过，车上要是有人戴着银月徽，就把名字告诉他。埋在花圃里的那位叫阿登。别的话，等您到了堡里，大团长亲口跟您说。"
     }
    ]
   },
   {
    "text": "当众打开巴兹伍德的信",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "once": true,
    "effects": [
     "flag a3_wex_open",
     "approval tan +1",
     "approval nixee -1"
    ],
    "result": [
     "你把信从头到尾念了一遍，连“顺路”两个字也念了。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "东家的信得自己一个人看！你当众这么干，会坏了行情的。"
     },
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "我觉得这样挺好。"
     }
    ]
   },
   {
    "text": "收下一百五十金冠定金，上路",
    "effects": [
     "quest q_duke start",
     "gold +150",
     "approval nixee +1"
    ],
    "result": "骑士把钱袋放在门板上，又从怀里掏出一张单子，请你在“收讫”两个字下面按手印。",
    "goto": "a3_02"
   },
   {
    "text": "请骑士收回定金，完事后再付",
    "effects": [
     "quest q_duke start",
     "flag a3_no_deposit",
     "approval ushka +1",
     "approval nixee -1"
    ],
    "result": [
     "骑士愣了一下，把钱袋系回了马鞍上。他说大团长管了五十年的仓库，有人把钱往回推，这还是第一次。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "一百五十金冠，就这么推回去了？到手的钱哪有往外推的道理！"
     }
    ],
    "goto": "a3_02"
   }
  ]
 },
 "a3_02": {
  "id": "a3_02",
  "title": "倒着走的难民路",
  "loc": "阿巴兰 · 弗里塞斯提尔一带",
  "date": "1451年秋",
  "text": [
   "二十七年前，东坎诺的难民沿这条路向西逃。如今你的车轮正好嵌进当年的辙印。路边每隔一段立着一根难民营留下的木桩，上面刻着里数，当年的人靠它才知道离下一处施粥点还有多远。",
   "弗里塞斯提尔的难民营一直没拆，帐篷换成了泥墙房，又添了一座磨坊、两家客栈，如今算是个镇子了。镇口有个泰卢姆的喊报人站在酒桶上，一手拿着单子，一手摇着铃，在喊悬赏。",
   {
    "speaker": "喊报人",
    "text": "流亡者罗吉尔，赏一千金冠！偷骡子的瘸腿汉斯，赏三十金冠！见着了就到磨坊去报，报假的打二十鞭！"
   },
   {
    "if": "flag.rogier_counted",
    "speaker": "喊报人",
    "text": "又据东边的书办来报，罗吉尔眼下就在塔兰顿，城堡东墙上挂的正是他的旗！"
   },
   {
    "if": "origin == 'sons'",
    "text": "单子下面贴着一排画像，第四张画的就是你。鼻子画歪了，下巴倒画对了。"
   },
   {
    "if": "is.god",
    "speaker": "喊报人",
    "text": "另有自称是神的一名，跟着一辆板车走，赏格待议！"
   },
   {
    "if": "is.god",
    "text": "他还没喊完，镇上的人已经把病人往车边抬了。有个咳血的老头，两个出疹子的孩子，还有个摔断了腰的磨坊伙计，是躺在门板上抬来的。"
   },
   {
    "if": "party.tan",
    "text": "阿坦在镇口站了很久。他就是在这里出生的。那年营里有四百顶帐篷，他娘住的是哪一顶，他说不上来。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "镇口还坐着个书办，面前摆着一张小桌子。他一看见车上有绿皮，就伸手要文书。"
   }
  ],
  "choices": [
   {
    "text": "陪阿坦去磨坊查旧名册",
    "if": "party.tan",
    "once": true,
    "effects": [
     "approval tan +1"
    ],
    "result": [
     "磨坊的账房翻出来一本发了霉的册子。1428 年那一页上记着十一个叫“卡斯坦”的新生儿，后面都写着帐篷的排号。阿坦一个一个数完，挑了第七个，说就当是这一个吧。",
     {
      "speaker": "阿坦",
      "text": "一共十一个，都叫卡斯坦。"
     }
    ]
   },
   {
    "text": "治疗板车旁的病人",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag god_shrine",
     "rep temples -1"
    ],
    "result": [
     "你从中午一直治到天黑。那个磨坊伙计是自己走回家的，第二天还扛了两袋面来谢你。",
     "后来听往东去的车夫说，你们走后不到七天，镇口那根木桩旁边就搭起了一个神龛，里面供着你坐过的一块石头。附近神殿的人来看过，脸色很难看。",
     {
      "if": "party.tan",
      "speaker": "老邻居",
      "text": "小卡斯坦，车上那位就是你伺候的神吧？"
     },
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "不是。我们只是同路。"
     }
    ]
   },
   {
    "text": "向书办出示蓝牙的路条",
    "if": "(is.greenskin || party.ushka || party.nixee) && item.safe_conduct",
    "result": "书办举起路条，对着太阳看了看印，在你们每个人的名字后面画了一个圈。车上那个绿皮的名字他写错了，也没人去纠正他。",
    "goto": "a3_02b"
   },
   {
    "text": "告诉书办车上的绿皮是收尸队的搬运工",
    "if": "(is.greenskin || party.ushka || party.nixee) && !item.safe_conduct",
    "check": {
     "skill": "deception",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "origin == 'sons'",
       "n": -1,
       "why": "赏格单上有你的脸"
      }
     ]
    },
    "ok": {
     "text": "书办捏着鼻子朝板车看了一眼，就挥挥手让你们过去了。",
     "goto": "a3_02b"
    },
    "fail": {
     "text": "书办说苦力也得有文书。你们只好绕开镇子，在磨坊后面的泥地里多走了一天半。",
     "effects": [
      "flag a3_detour"
     ],
     "goto": "a3_02b"
    }
   },
   {
    "text": "绕走磨坊后的泥路，避开镇子",
    "if": "is.greenskin || party.ushka || party.nixee",
    "effects": [
     "flag a3_detour"
    ],
    "result": "泥深得没过脚踝。你们多走了一天半，车轴里塞满了烂草。",
    "goto": "a3_02b"
   },
   {
    "text": "买两张饼，继续西行",
    "if": "!(is.greenskin || party.ushka || party.nixee)",
    "effects": [
     "gold -2"
    ],
    "result": "饼是黑麦做的，里面夹着一片马肉。阿巴兰西边的人向来吃马肉，谁也不当回事。",
    "goto": "a3_02b"
   }
  ]
 },
 "a3_02b": {
  "id": "a3_02b",
  "title": "林子旁边的军士",
  "loc": "阿巴兰 · 往西的大路",
  "text": [
   "出镇往西走了半天，路边林子里飘来烤马肉的气味。十来个散兵围着火堆，都是紫丁香战争打完以后没人收编的。他们拆掉了袖标，号衣的颜色却还认得出来，有玫瑰党的红，也有月党的蓝，当年争皇位的两边如今烤着同一堆火。一辆干草车横在路中间。",
   "领头的军士站起身，嘴里还嚼着东西。他没拔刀，先看了看车，又看看你们脚上的鞋，最后才看钱袋。",
   {
    "speaker": "军士",
    "text": "仗打完了，也没人来告诉我们该往哪里去。过路钱八十。不给也行，我这帮弟兄正闲着。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "他们也没地方去，跟当年营里的人一样。"
   },
   {
    "if": "is.greenskin",
    "text": "军士一看见你，嘴里那口肉就不嚼了。玫瑰党他打过，月党他也打过，绿皮还从来没见过。"
   }
  ],
  "choices": [
   {
    "text": "劝他带队去东坎诺谋生",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "party": true,
     "adv": "is.soldier",
     "mods": [
      {
       "if": "rep.companies >= 2",
       "n": 2,
       "why": "东坎诺的冒险团认得这辆车"
      }
     ]
    },
    "ok": {
     "text": "你给他算了一笔账：东坎诺有十几个冒险团，个个缺人，虽然都欠着饷，可欠饷总比没饷强。他听完把马骨头往火里一扔，说那就去看看。",
     "effects": [
      "flag a3_sergeant_east",
      "rep companies +1"
     ],
     "goto": "a3_03"
    },
    "fail": {
     "text": "他说东坎诺的饷是拿兽人脑袋换的，他宁可留在这里收过路钱。说话间，他身后的弩手已经把弦挂上了。",
     "combat": {
      "title": "林子旁边的散兵",
      "intro": "军士往火里啐了一口。两名弩手退到草车后上弦。",
      "enemies": [
       {
        "id": "merc_captain",
        "name": "散兵的军士"
       },
       {
        "id": "sellsword",
        "n": 3,
        "name": "拆了袖标的散兵"
       },
       {
        "id": "crossbowman",
        "n": 2,
        "name": "散兵弩手"
       }
      ],
      "specials": [
       {
        "id": "hay",
        "name": "点着他们存干草的车",
        "desc": "弩手身后停着一车晒过一整个夏天的干草。成功时，所有敌人受到 1d6 点火焰伤害，并陷入「目盲」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "dc": 13
        },
        "success": {
         "text": "火绒一落进草堆，火呼的一下就起来了。弩手忙着拍身上的火星，足有两轮顾不上瞄你。",
         "dmgAll": "1d6",
         "type": "fire",
         "applyAll": {
          "cond": "blinded",
          "turns": 2
         }
        },
        "fail": {
         "text": "火绒受了潮，只冒了一缕烟就灭了。军士看在眼里，骂了一句粗话。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 600,
      "win": {
       "effects": [
        "flag a3_road_fought"
       ],
       "goto": "a3_03"
      },
      "lose": {
       "effects": [
        "gold -150",
        "hp 1",
        "flag a3_robbed"
       ],
       "goto": "a3_03"
      },
      "fled": {
       "effects": [
        "gold -80",
        "flag a3_robbed"
       ],
       "goto": "a3_03"
      }
     }
    }
   },
   {
    "text": "付给他八十金冠",
    "req": "gold >= 80",
    "reqText": "钱不够八十",
    "cost": {
     "gold": 80
    },
    "effects": [
     "flag a3_paid_road"
    ],
    "result": "他把钱掂了掂，塞进靴筒里，才让人把干草车推开。",
    "goto": "a3_03"
   },
   {
    "text": "摘下兜帽向火堆走近",
    "tag": "绿皮",
    "if": "is.greenskin",
    "check": {
     "skill": "intimidation",
     "dc": 13
    },
    "ok": {
     "text": "你摘了兜帽站进火光里，一张绿脸谁都看得清。最先站起来的是那两个弩手，他们一步一步退进了林子。军士骂了一声，也跟着退了，干草车留在了路上。",
     "effects": [
      "flag a3_scared_road"
     ],
     "goto": "a3_03"
    },
    "fail": {
     "text": "军士把那口肉咽了下去，说绿皮他是没打过，可绿皮的赏格单他见过。说完就拔了刀。",
     "combat": {
      "title": "林子旁边的散兵",
      "intro": "军士往火里啐了一口。两名弩手退到草车后上弦。",
      "enemies": [
       {
        "id": "merc_captain",
        "name": "散兵的军士"
       },
       {
        "id": "sellsword",
        "n": 3,
        "name": "拆了袖标的散兵"
       },
       {
        "id": "crossbowman",
        "n": 2,
        "name": "散兵弩手"
       }
      ],
      "specials": [
       {
        "id": "hay",
        "name": "点着他们存干草的车",
        "desc": "弩手身后停着一车晒过一整个夏天的干草。成功时，所有敌人受到 1d6 点火焰伤害，并陷入「目盲」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "dc": 13
        },
        "success": {
         "text": "火绒一落进草堆，火呼的一下就起来了。弩手忙着拍身上的火星，足有两轮顾不上瞄你。",
         "dmgAll": "1d6",
         "type": "fire",
         "applyAll": {
          "cond": "blinded",
          "turns": 2
         }
        },
        "fail": {
         "text": "火绒受了潮，只冒了一缕烟就灭了。军士看在眼里，骂了一句粗话。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 600,
      "win": {
       "effects": [
        "flag a3_road_fought"
       ],
       "goto": "a3_03"
      },
      "lose": {
       "effects": [
        "gold -150",
        "hp 1",
        "flag a3_robbed"
       ],
       "goto": "a3_03"
      },
      "fled": {
       "effects": [
        "gold -80",
        "flag a3_robbed"
       ],
       "goto": "a3_03"
      }
     }
    }
   },
   {
    "text": "拔刀，跟散兵硬拼",
    "combat": {
     "title": "林子旁边的散兵",
     "intro": "军士往火里啐了一口。两名弩手退到草车后上弦。",
     "enemies": [
      {
       "id": "merc_captain",
       "name": "散兵的军士"
      },
      {
       "id": "sellsword",
       "n": 3,
       "name": "拆了袖标的散兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "散兵弩手"
      }
     ],
     "specials": [
      {
       "id": "hay",
       "name": "点着他们存干草的车",
       "desc": "弩手身后停着一车晒过一整个夏天的干草。成功时，所有敌人受到 1d6 点火焰伤害，并陷入「目盲」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 13
       },
       "success": {
        "text": "火绒一落进草堆，火呼的一下就起来了。弩手忙着拍身上的火星，足有两轮顾不上瞄你。",
        "dmgAll": "1d6",
        "type": "fire",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "火绒受了潮，只冒了一缕烟就灭了。军士看在眼里，骂了一句粗话。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag a3_road_fought"
      ],
      "goto": "a3_03"
     },
     "lose": {
      "effects": [
       "gold -150",
       "hp 1",
       "flag a3_robbed"
      ],
      "goto": "a3_03"
     },
     "fled": {
      "effects": [
       "gold -80",
       "flag a3_robbed"
      ],
      "goto": "a3_03"
     }
    }
   }
  ]
 },
 "a3_03": {
  "id": "a3_03",
  "title": "目前可靠",
  "loc": "阿巴兰旁边的一间驿站",
  "text": [
   {
    "if": "flag.a3_robbed",
    "text": "你们进驿站的时候钱袋是空的，骡子也让散兵牵走了，车是几个人轮流拉过来的。"
   },
   "驿站只有三间客房，马厩反倒更大。一个帝国侏儒守在最好的房门前，膝上的账本足有她半个人宽。一见你们，她合起账本跳下凳子，头顶刚到桌沿。",
   {
    "speaker": "蒂尔达",
    "text": "我叫蒂尔达·奥布·敏菲吉特，替巴兹伍德先生做事。他给皇帝管密探，派我来盯着你们。这句话本来该瞒着，可我觉得瞒着也没用。哪张床归我？"
   },
   {
    "if": "flag.a3_road_fought",
    "speaker": "蒂尔达",
    "text": "林子旁边那一仗我已经记下了，倒下的我数的是六个。你们数的要是五个，我就改成五个。"
   },
   {
    "if": "flag.a3_sergeant_east",
    "speaker": "蒂尔达",
    "text": "你们劝走了十来个散兵，他们往东去了。这个我也记下了。人数是估的，可能估少了。"
   },
   {
    "if": "flag.a3_paid_road",
    "speaker": "蒂尔达",
    "text": "那八十金冠的过路钱，我记在“杂项”下面了。巴兹伍德先生最爱看杂项。"
   },
   {
    "if": "flag.a3_scared_road",
    "speaker": "蒂尔达",
    "text": "把人吓跑不算打，也不算劝，我只好另开了一栏。"
   },
   {
    "if": "origin == 'wex'",
    "speaker": "蒂尔达",
    "text": "说实话，我主要是来查你的，他们几个只是顺便。你这些年写的信，我一封一封都带在身上。"
   },
   {
    "if": "origin == 'wex' && flag.a3_wex_open",
    "speaker": "蒂尔达",
    "text": "你在门板桌边把巴兹伍德先生的信念出来了。这个他早料到了。他说你准会念，还跟人赌了一个铜子。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西把自己的账本也摊开了。两个人头碰头对了一遍账。对到一半，妮克西说自己多收了蒂尔达两个铜子的灯油钱，蒂尔达说是三个。最后谁也没退给谁。"
   },
   {
    "if": "is.god",
    "text": "她的差事单里夹着一页纸，是巴兹伍德先生亲手写的，专门问你的事。第一条问能不能杀得死，第二条问纳不纳税，第三条问站在哪一边。第三条的字还描粗了。"
   },
   {
    "if": "race == 'gnome'",
    "text": "你们两个侏儒凑在一起，她说话又快了一倍。旁人一句也插不进去。"
   },
   {
    "if": "is.greenskin",
    "speaker": "蒂尔达",
    "text": "你的文书我得先看一眼。不是信不过你，是我得在本子上写“已验”两个字。"
   }
  ],
  "choices": [
   {
    "text": "让蒂尔达上车同行",
    "effects": [
     "flag tilda_with"
    ],
    "result": "她把账本塞进板车，给自己挑了一个闻不到气味的角落，又从包里掏出一块薰衣草饼压在账本上。",
    "goto": "a3_04"
   },
   {
    "text": "半夜套车，避开她离开",
    "check": {
     "skill": "stealth",
     "dc": 16,
     "party": true
    },
    "ok": {
     "text": "你们半夜里赶了二十里路。可到了第三天中午，蒂尔达骑着一头驿站的骡子追上来了，还当面报出了你们脱队的时辰。",
     "effects": [
      "flag tilda_with",
      "rep throne -1"
     ],
     "goto": "a3_04"
    },
    "fail": {
     "text": "天亮之前你们赶到了下一站。蒂尔达已经坐在门口了，比你们早到半个时辰，面前那碗麦粥还冒着热气。",
     "effects": [
      "flag tilda_with"
     ],
     "goto": "a3_04"
    }
   },
   {
    "text": "在马厩干草上过夜",
    "if": "!flag.a3_detour",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "客房里有臭虫，马厩里只有马。你们睡了马厩。"
   },
   {
    "text": "和她核对你历年的报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && var.false_reports >= 1",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14
    },
    "ok": {
     "text": "她每念一封，指甲就在纸旁边掐一下，念到你造假的那几封，掐得最深。原来她早就知道哪几封是假的，只是没说。",
     "effects": [
      "flag a3_saw_tilda"
     ]
    },
    "fail": {
     "text": "她念得平平的，你什么也没看出来。念完她只说了两个字：很好。这两个字你琢磨了一整夜。",
     "effects": [
      "rep throne -1"
     ]
    }
   },
   {
    "text": "和她核对你历年的报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && var.false_reports < 1",
    "once": true,
    "effects": [
     "rep throne +1"
    ],
    "result": "对完以后，她在每一封后面都画了个勾。"
   },
   {
    "text": "聊聊各自家族的支系",
    "tag": "侏儒",
    "if": "race == 'gnome'",
    "once": true,
    "effects": [
     "rep throne +1"
    ],
    "result": "扯到第三代，你们俩才发现，两家的曾祖母为一只铜壶打过官司。她在本子上写了一句：可靠（亲戚）。"
   },
   {
    "text": "替她回答纸上的三个问题",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag a3_god_answered",
     "rep throne +1"
    ],
    "result": [
     "你一条一条答了。第一条，不知道，还没人杀成过。第二条，从来没人来收过税。第三条，站在这辆车这一边。",
     {
      "speaker": "蒂尔达",
      "text": "第三条巴兹伍德先生是不会满意的。不过谁来答，他对第三条都没满意过。"
     }
    ]
   }
  ]
 },
 "a3_04": {
  "id": "a3_04",
  "title": "荆月船会",
  "loc": "埃斯玛利亚 · 一条游船",
  "text": [
   "埃斯玛利亚一带河道纵横，出门全靠船。紫丁香战争结束的第一年，曾为皇位交战的月党和玫瑰党各出几条船，在河心并排系好，荆月船会由此而来。如今两岸人家戴着面具上船，隔着船舷比的是衣裳。",
   "你们上的是一条租来的平底船，船头挂着一弯褪了色的月牙，船尾插着一枝干玫瑰，两边都不得罪。船上的女人穿的都是露肩的裙子，男人一律是高筒靴。",
   "伊斯特拉洛尔的女公爵奥坎娜坐在船尾。她没戴面具，穿着一件扈从的短外套，正拿匕首削梨。",
   {
    "if": "party.tan",
    "text": "天刚亮，阿坦就在甲板上做起了晨祷。船一晃，他旁边三个戴面具的公子哥一齐扶着栏杆吐了起来。他念到一半停下来，等他们吐完才接着念。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "面具十二个铜子一张，衣裳四十金冠一件。大家比的是衣裳，赚钱的是卖面具的！"
   },
   {
    "if": "is.greenskin",
    "text": "好在今天人人都戴着面具，你的肤色也就没人过问了。"
   }
  ],
  "choices": [
   {
    "text": "入席，说些讨喜的话混进宾客里",
    "check": {
     "skill": "persuasion",
     "alt": [
      "performance"
     ],
     "dc": 14,
     "adv": "is.greenskin",
     "mods": [
      {
       "if": "is.noble",
       "n": 2,
       "why": "你知道该夸袖口还是夸领子"
      }
     ]
    },
    "ok": {
     "text": "你夸起一位月党夫人的袖口，才夸到第三句，她就让人给你添了把椅子，还替你倒了一杯李子白兰地。",
     "effects": [
      "flag a3_seated"
     ],
     "goto": "a3_04b"
    },
    "fail": {
     "text": "他们把你当成了请来唱曲的，赏了你两个铜子，让你站到桅杆旁边去。你也算留下来了，只不过得站着。",
     "effects": [
      "rep moon -1"
     ],
     "goto": "a3_04b"
    }
   },
   {
    "text": "径直去船尾见奥坎娜",
    "effects": [
     "approval ushka +1"
    ],
    "result": [
     "船尾没有人拦你。肯凑过去跟女公爵说话的人本来就不多，因为她看谁都像是来借钱的。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "衣裳比完了还得脱下来。我不看。"
     }
    ],
    "goto": "a3_04b"
   }
  ]
 },
 "a3_04b": {
  "id": "a3_04b",
  "title": "船尾",
  "loc": "埃斯玛利亚 · 一条游船",
  "text": [
   "太阳西斜，两边的船家都忙着挂灯。纸灯笼从桅杆一路垂到船舷，烛火还没点。",
   {
    "speaker": "奥坎娜",
    "text": "东边来的吧？车上那股味儿我一闻就知道。坐。这种场合我最烦，你们说话起码不绕弯子。"
   },
   {
    "if": "flag.a3_seated",
    "text": "你那把椅子紧挨着月党的席面，听得见他们在骂玫瑰党。骂得很文雅，一个脏字都不带。"
   },
   "席上有个玫瑰党的公子喝多了，手里拿着一张烫金的帖子扇风。那是皇宫三十年庆典的请柬。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "那边船上有三个人，一整天都没换过衣裳。别人都换了好几身了。"
   },
   {
    "if": "is.greenskin",
    "text": "奥坎娜看了你一眼，过一会儿又看了一眼。后来就不看了。她当扈从的时候见过的怪事多了。"
   }
  ],
  "choices": [
   {
    "text": "留意席上有没有可疑的人",
    "if": "origin != 'sons'",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你留意到有三个人，面具是新的，靴子却是旧的。他们一晚上没看过谁的衣裳，光盯着你们放东西的舱口。",
     "effects": [
      "flag a3_spotted"
     ]
    },
    "fail": {
     "text": "你看了一圈，只看出来谁的衣裳是借的。借衣裳的人还真不少。"
    }
   },
   {
    "text": "亮出银月徽，看谁有反应",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "flag a3_spotted"
    ],
    "result": "有个戴面具的盯着你领口的银月徽看了半天，然后跟另外两个人使了个眼色。这三个人的面具都是新的，靴子却都是旧的。"
   },
   {
    "text": "试着偷走公子的请柬",
    "if": "!item.jubilee_invite",
    "once": true,
    "check": {
     "skill": "sleight",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "他才扇到第四下，帖子就进了你的袖子。他没发觉，接着拿手扇。",
     "effects": [
      "item +jubilee_invite"
     ]
    },
    "fail": {
     "text": "他一转身，你的手摸在了他肚子上。他以为你在调戏他，红着脸走开了，帖子还攥在他手里。",
     "effects": [
      "rep throne -1"
     ]
    }
   },
   {
    "text": "编个故事让公子送你请柬",
    "if": "!item.jubilee_invite",
    "once": true,
    "check": {
     "skill": "deception",
     "dc": 15,
     "mods": [
      {
       "if": "origin == 'sons' && !item.jubilee_invite",
       "n": -1,
       "why": "赏格单上有你的脸"
      }
     ]
    },
    "ok": {
     "text": "你说你有个舅舅死在了紫丁香战争里，生前最想进一次皇宫。他听得哭了起来，把帖子塞给你，还塞给你一块手帕。",
     "effects": [
      "item +jubilee_invite"
     ]
    },
    "fail": {
     "text": "他听完拍拍你的肩膀，说他也有个死了的舅舅，接着让你请他喝了三杯。帖子他揣回了怀里。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "问奥坎娜是否还愿为阿登重启紫丁香战争",
    "if": "!flag.a3_aucanna_talked",
    "once": true,
    "effects": [
     "flag a3_aucanna_talked",
     "rep moon -1"
    ],
    "result": [
     "她手里的梨皮一下削断了。",
     {
      "speaker": "奥坎娜",
      "text": "我给阿登大公牵过马。你要是来劝我再打一仗的，就请回吧。"
     }
    ]
   },
   {
    "text": "透露你们打算取回阿登的遗骨",
    "if": "!flag.a3_aucanna_talked",
    "once": true,
    "effects": [
     "flag a3_aucanna_talked",
     "flag a3_aucanna_told",
     "rep moon +1"
    ],
    "result": [
     "她把匕首插回了靴子里，梨放在膝盖上，很久没吃一口。",
     {
      "speaker": "奥坎娜",
      "text": "我十九岁给他当扈从。那年开春他把我打发回了家，我父亲和我哥哥却留在宫里替他战死了。你们要是找着了他，先来告诉我一声。"
     }
    ]
   },
   {
    "text": "等船上点灯",
    "goto": "a3_04c"
   }
  ]
 },
 "a3_04c": {
  "id": "a3_04c",
  "title": "掌灯",
  "loc": "埃斯玛利亚 · 一条游船",
  "text": [
   "灯才点到一半，隔壁玫瑰党的船上便有三个人翻过船舷，悄无声息地落在这边甲板上。面具还戴着，刀已经出鞘。",
   "他们不看奥坎娜，也不看谁的衣裳。领头的那个拿刀尖挑开了你们堆在舱口的油布，油布下面是你们的铺盖卷，还有装着大团长德利安那封信的匣子。",
   {
    "speaker": "领头的面具",
    "text": "把德利安的信交出来。你们接着喝你们的酒。"
   },
   "两边船上的人还在比衣裳。有人朝这边举了举杯，以为是请来的班子在演戏。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "价都不开就动刀子？碰上这种人，讲什么规矩都没用。"
   },
   {
    "if": "flag.a3_spotted",
    "text": "这三双旧靴子你认得。奥坎娜身边坐着两个伊斯特拉洛尔的女兵，此刻正看着你。"
   }
  ],
  "choices": [
   {
    "text": "向奥坎娜的女兵使眼色",
    "if": "flag.a3_spotted",
    "combat": {
     "title": "游船上的刀",
     "intro": "奥坎娜的人先动手。一个面具人还没站稳，就被两个女兵抛进了河里。其余两人愣在原地。",
     "enemies": [
      {
       "id": "assassin",
       "name": "领头的面具"
      },
      {
       "id": "noble_duellist",
       "name": "戴面具的剑客"
      }
     ],
     "specials": [
      {
       "id": "lamps",
       "name": "割断灯绳",
       "desc": "纸灯笼若整串落水，这层甲板就会陷入黑暗。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "sleight",
        "dc": 13
       },
       "success": {
        "text": "刀子一过，灯笼一串一串栽进了河里。他们本来就慌了手脚，这下更是辨不清方向了。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "灯绳是浸过油的麻绳，割了两下也没割断。倒是有一盏灯笼掉在你肩上，把袖子烧着了。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      },
      {
       "id": "rail",
       "name": "撞断船舷的栏杆",
       "desc": "栏杆刻着花纹，经不住重压。成功时，所有敌人受到 1d8 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "栏杆一断，两个戴面具的跟着翻进了河里。过了好一会儿才爬上来，面具都不见了。",
        "dmgAll": "1d8",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "栏杆比看上去结实得多。你撞完了它还好好的，你的肩膀倒疼得抬不起来了。",
        "selfDmg": "1d6"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag a3_boat_won",
       "rep moon +1"
      ],
      "goto": "a3_05"
     },
     "lose": {
      "effects": [
       "item -jubilee_invite",
       "hp 1",
       "flag a3_boat_lost"
      ],
      "goto": "a3_05"
     },
     "fled": {
      "effects": [
       "item -jubilee_invite",
       "flag a3_boat_lost"
      ],
      "goto": "a3_05"
     }
    }
   },
   {
    "text": "守住船舱入口",
    "combat": {
     "title": "游船上的刀",
     "intro": "来者共三人，全戴着面具。打头的手持短刀，刀身涂黑，在灯下也不反光。",
     "enemies": [
      {
       "id": "assassin",
       "name": "领头的面具"
      },
      {
       "id": "noble_duellist",
       "n": 2,
       "name": "戴面具的剑客"
      }
     ],
     "specials": [
      {
       "id": "lamps",
       "name": "割断灯绳",
       "desc": "纸灯笼若整串落水，这层甲板就会陷入黑暗。成功时，所有敌人陷入「目盲」，持续 1 回合。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "sleight",
        "dc": 13
       },
       "success": {
        "text": "刀子一过，灯笼一串一串栽进了河里，嗤嗤地全灭了。黑暗里他们找不着你们，你们却找得着他们，因为他们的面具是白的。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯绳是浸过油的麻绳，割了两下也没割断。倒是有一盏灯笼掉在你肩上，把袖子烧着了。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      },
      {
       "id": "rail",
       "name": "撞断船舷的栏杆",
       "desc": "栏杆刻着花纹，经不住重压。成功时，所有敌人受到 1d8 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "栏杆一断，两个戴面具的跟着翻进了河里。过了好一会儿才爬上来，面具都不见了。",
        "dmgAll": "1d8",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "栏杆比看上去结实得多。你撞完了它还好好的，你的肩膀倒疼得抬不起来了。",
        "selfDmg": "1d6"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag a3_boat_won"
      ],
      "goto": "a3_05"
     },
     "lose": {
      "effects": [
       "item -jubilee_invite",
       "hp 1",
       "flag a3_boat_lost"
      ],
      "goto": "a3_05"
     },
     "fled": {
      "effects": [
       "item -jubilee_invite",
       "flag a3_boat_lost"
      ],
      "goto": "a3_05"
     }
    }
   }
  ]
 },
 "a3_05": {
  "id": "a3_05",
  "title": "管仓的人",
  "loc": "阿德蕾西娅堡",
  "text": [
   {
    "if": "flag.a3_boat_lost",
    "text": "你们是浑身湿透了上的岸。请柬泡烂在了河里，衣裳搭在马背上晾了两天。"
   },
   {
    "if": "flag.a3_boat_won",
    "text": "那三个人身上什么也没搜出来，连钱袋都没有。出钱雇他们的人没留下名字。"
   },
   "阿德蕾西娅堡的仓房比礼拜堂还大。骑士团的大团长德利安今年七十三岁，就在仓房里接见你们，手里还拿着出入库的账册。他脸上的旧疤，是三十多年前在威斯达姆打仗留下的。",
   {
    "speaker": "德利安",
    "text": "长剑四百一十二把，在册的也是四百一十二把。锁甲三百零七领，在册的是三百零九领，少的那两领借给厨房当筛子了。你们坐。"
   },
   "合上册子以后，他才说出要请的是谁。那人叫阿登·天枪，是达梅里亚的大公，也是蓝牙的外祖父。七年前他死在皇宫的王座厅里，就埋在花圃下面。",
   {
    "if": "flag.a3_name_early",
    "text": "这个名字你在门板桌边就听骑士说过了。可从德利安嘴里说出来，到底不一样。"
   },
   {
    "speaker": "德利安",
    "text": "1444 年深秋我进宫当值，过了几个礼拜，看见花圃里的郁金香换了一茬。那时还没到种花的时候，土却是新翻的。我就知道他埋在那下面了。后来我把差事交给副手，自己回了堡里。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "堡门口的骑士把路条翻来覆去地看。直到德利安出来说这几位是他请的，骑士才把剑收了回去。"
   }
  ],
  "first": [
   "quest q_duke stage 2",
   "codex delian",
   "codex adenn",
   "item +garden_sketch"
  ],
  "choices": [
   {
    "text": "问德利安为什么等了七年",
    "once": true,
    "effects": [
     "approval garaele +1"
    ],
    "result": [
     {
      "speaker": "德利安",
      "text": "我是管仓库的。仓里少了一件东西，我得先弄清楚是谁签字出的库。"
     },
     {
      "speaker": "德利安",
      "text": "签字的人我弄清楚了，可我惹不起他。我一直在等一个惹得起他的时候，没等着，倒把你们等来了。"
     },
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "七年，在我们精灵那里不算久。可在你们这里，够一个人把主意改上三回了。"
     }
    ]
   },
   {
    "text": "问黑木匣里的信",
    "once": true,
    "effects": [
     "approval nixee +1"
    ],
    "result": [
     "桌角上放着一只黑木匣子，锁扣已经磨得发亮了。你一问，他就把手按在了匣子上。",
     {
      "speaker": "德利安",
      "text": "这个不能给你们看。里面都是我这些年写给他的信，一封也没寄出去。他还没看过，别人不能先看。"
     },
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "没寄出去的信不值钱，也不欠谁的钱。这个我不打听了。"
     }
    ]
   },
   {
    "text": "查看他摊开的花园地图",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "图是他凭记性画的，花畦都照仓位编了号，第七畦上画着一个小圈。墨色有新有旧，看得出这张图他画了不止一年。你明白过来，1444 年夏天他开城门归降皇帝，为的就是能进宫去看这块地。",
     "effects": [
      "flag a3_delian_read"
     ]
    },
    "fail": {
     "text": "图是他凭记性画的，花畦都照仓位编了号，第七畦上画着一个小圈。他把图卷好递给你，不愿再多谈。"
    }
   },
   {
    "text": "问他阿登十六岁那年的事",
    "tag": "贵族",
    "if": "is.noble",
    "once": true,
    "effects": [
     "rep moon +1"
    ],
    "result": [
     "他看了你好一会儿，像是从你的站姿认出了你的出身。",
     {
      "speaker": "德利安",
      "text": "大公十六岁那年偷偷跑到洛伦特去看比武会，是我替他牵的马。他把洛伦特国王挑下了马。国王有个私生子，喝醉了带人来找他算账。我替他挡了一拳。就挡了那么一拳，他记了我一辈子。"
     }
    ]
   },
   {
    "text": "与校场上的年轻骑士比试",
    "tag": "试炼派",
    "if": "faction == 'tried'",
    "once": true,
    "result": [
     "校场上有个年轻骑士一直盯着你们看。这时他走了过来，说想跟东边来的收尸人比试比试。德利安叹了口气。",
     {
      "speaker": "德利安",
      "text": "照规矩来，点到为止。我见了血会晕，就不看了。"
     }
    ],
    "goto": "a3_05b"
   },
   {
    "text": "收好地图，前往安本科斯特",
    "goto": "a3_06"
   }
  ]
 },
 "a3_05b": {
  "id": "a3_05b",
  "title": "照规矩比一场",
  "loc": "阿德蕾西娅堡 · 校场",
  "text": [
   "校场半边是松软的新沙，半边早被踩硬。白胡子的老骑士们倚着围栏，抱臂等着开场。",
   "年轻骑士先报了自己的名字，又报了骑士团的誓词：不领地，不受衔，不娶不嫁，不留子嗣。报完，他问你有没有誓词要报。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "有。抬起来的要放下，放下了的不许再起来。"
   },
   {
    "if": "is.martial",
    "text": "他起手用的是阿德蕾西娅的路数，剑尖压得很低，好腾出时间念咒。可他念咒的时候哪里有破绽，你一眼就看得出来。"
   },
   "德利安背过身去，盯着墙根下的草料捆看了起来。"
  ],
  "combat": {
   "title": "照骑士团的规矩",
   "intro": "年轻骑士举剑齐眉。淡蓝色的字在剑身上一闪便灭。依这里的规矩，先见血者输。",
   "enemies": [
    {
     "id": "aldresian_knight",
     "name": "阿德蕾西娅骑士"
    }
   ],
   "specials": [
    {
     "id": "sand",
     "name": "把他引到撒了沙的那半边",
     "desc": "校场东侧刚铺过新沙，加上昨日的雨，地面很滑。成功时，所有敌人陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
     "check": {
      "skill": "acrobatics",
      "alt": [
       "athletics"
      ],
      "dc": 14
     },
     "success": {
      "text": "他追着你一脚踩进了新沙里，脚下一滑，剑上的字闪了一下就灭了。",
      "applyAll": {
       "cond": "prone",
       "turns": 1
      }
     },
     "fail": {
      "text": "结果滑倒的是你自己。场边那几个老骑士咳嗽了一声，总算没笑出来。",
      "selfDmg": "1d4"
     }
    }
   ],
   "fleeable": false,
   "xp": 300,
   "win": {
    "effects": [
     "item +aldresian_blade",
     "flag a3_duel_won"
    ],
    "goto": "a3_06"
   },
   "lose": {
    "effects": [
     "hp 1"
    ],
    "goto": "a3_06"
   }
  }
 },
 "a3_06": {
  "id": "a3_06",
  "title": "世人所欲之城",
  "art": "ev_far_and_wide",
  "loc": "安本科斯特",
  "date": "1451年冬",
  "shop": {
   "name": "锻炉街的铁匠",
   "blurb": "矮人店主在门外高挂一块招牌：“花金冠能买到的最好家伙。”",
   "stock": [
    "breastplate",
    "half_plate",
    "rosemetal_rapier",
    "rosemetal_saber",
    "heavy_crossbow",
    "hold_shield",
    "greater_healing_potion"
   ]
  },
  "text": [
   "四百五十年前，劫后余生的精灵舰队在这里靠岸，给它取名安本科斯特。如今它是安本纳尔帝国的都城，人称“世人所欲之城”。七八年前，眼下坐着皇位的威克斯人曾洗劫此地，究竟抢了三天还是几个月，至今众说不一。今天这里是自由市，可威克斯的驻军还在半个岛之外。",
   "城里分成好几块。神殿区有钟声，锻炉街有锤子声，精灵码头的宅子都架在搁浅的方舟上，帝国区围着高墙。舱底区是穷人住的地方，占了全城的四分之一。城里的差役进去过好几次，有几次就没再出来。",
   {
    "if": "is.caster && !is.god",
    "text": "城门口贴着一张告示：凡施法者，入城三日内到魔导院分署登记，立誓约，领牌子。魔导院专管帝国的法师，不登记就在城里施法的，会招来它手下的一队武卫。"
   },
   {
    "if": "is.god",
    "text": "魔导院的人比你们先到了城门口。领头的法师捧着一本 1348 年的旧例，翻到折了角的那一页。上面记的是莉安农女皇，她五岁那年拿一道法术罩住了整座城，后来死在了自己的护卫手里。法师照着书念道：立誓约，或者离岛。"
   },
   {
    "if": "is.god && party.garaele",
    "speaker": "加莱尔",
    "text": "他们真正怕的是一百年前的那位女皇，不见得是怕你。只是这两样，他们自己也分不清了。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "每过一道城门都要验一次文书。守门的先看脸，再看纸，看完纸还要再看一次脸。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡把路条叠成了一个小方块，攥在拳头里。守门的要看，她就把拳头伸过去。"
   },
   {
    "if": "flag.a3_tan_counted && visited.a3_06 == 1",
    "speaker": "阿坦",
    "text": "你说过的哄人的话，我又记了三句。是哪三句，我就不问了。"
   }
  ],
  "first": [
   "level 7",
   {
    "if": "party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)",
    "then": [
     "approval tan -1",
     "flag a3_tan_counted"
    ]
   }
  ],
  "choices": [
   {
    "text": "去神殿区交信条、拜访编年史家会",
    "once": true,
    "goto": "a3_06c"
   },
   {
    "text": "前往贫民聚居的舱底区",
    "goto": "a3_06b"
   },
   {
    "text": "去锻炉街酒馆找那个喝了七年的威克斯老兵",
    "once": true,
    "goto": "a3_09"
   },
   {
    "text": "到精灵码头拜访加莱尔的姑祖母",
    "once": true,
    "goto": "a3_07"
   },
   {
    "text": "去帝国区的威克斯公事房",
    "once": true,
    "goto": "a3_10"
   },
   {
    "text": "看乌什卡在木签上添一条记录",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "quest q_ushka stage 3",
     "approval ushka +1"
    ],
    "result": [
     "她拿刀尖在第十一条下面又刻了一道短的，刻完吹了吹木屑。",
     {
      "speaker": "乌什卡",
      "text": "这是帝国的规矩：先递文书，后说话。这一条不是骑士的规矩，不算第十二条。"
     }
    ]
   },
   {
    "text": "到城北客栈安睡一夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "客栈的床是带床腿的。这样的床你们已经很久没睡过了。"
   },
   {
    "text": "拜访阿斯拉银行分号",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge'",
    "once": true,
    "effects": [
     "flag a3_bank",
     "gold +80"
    ],
    "result": [
     "柜台后面的矮人看了一眼你的账页，转身从后屋抱出来一本更厚的。原来兵团在这家分号存着一笔银子，你签了字，取走了你的一份。",
     {
      "speaker": "账房",
      "text": "还有一件事。皇宫今年换了花匠，新花匠正好是我们放过款的那一家。花匠夜里几点收工，我这里有数。"
     }
    ]
   },
   {
    "text": "去魔导院分署登记身份",
    "tag": "施法者",
    "if": "is.caster && !is.god",
    "once": true,
    "effects": [
     "flag a3_registered",
     "gold -10"
    ],
    "result": "登记要交十个金冠。武卫拿一根绳子量了量你的手腕，问你会几种法术。你一样一样说了，他只记了一半。最后你领到一块铜牌，上面刻着你的名字，还刻错了一个字。"
   },
   {
    "text": "当场烧毁封条和誓约信物",
    "tag": "神",
    "if": "is.god && !flag.a3_god_measured",
    "once": true,
    "effects": [
     "flag a3_god_burned",
     "rep throne -2",
     "rep temples -1"
    ],
    "result": "封条和铜牌在那法师手里烧成了一撮灰，他的手一点也没伤着。城门口的人散得比来的时候还快。当天夜里，各座法师塔都收到了大魔导师的通函，上面画着你的长相。"
   },
   {
    "text": "让魔导院的人测量你",
    "tag": "神",
    "if": "is.god && !flag.a3_god_burned",
    "once": true,
    "effects": [
     "flag a3_god_measured",
     "flag a3_registered"
    ],
    "result": [
     "他们足足量了三天，量了身高，量了影子，连你喝一碗水要多久都量了。第三天傍晚，领队交来了一份结论。",
     {
      "cls": "letter",
      "text": "结论上写着：经测定，此人理论上不存在。建议另行观察。"
     }
    ]
   },
   {
    "text": "在庆典前夜进入皇宫",
    "if": "visited.a3_08 && visited.a3_09 && visited.a3_10",
    "goto": "a3_11"
   }
  ]
 },
 "a3_06b": {
  "id": "a3_06b",
  "title": "舱底区",
  "loc": "安本科斯特 · 舱底区",
  "shop": {
   "name": "药婆",
   "blurb": "铺子设在船的底舱。货品大小不一，倒都装在海螺壳里。",
   "stock": [
    "healing_potion",
    "antidote",
    "heroism_draught",
    "gnomish_smoke_bomb",
    "bandage"
   ]
  },
  "text": [
   "舱底区的房屋用旧船板层层搭起，底层终日不见光。码头木架下躺着十几具无人认领的遗体，有的已停了一个月。潮水一涨，裹尸的帆布就湿到腰间。",
   "这里的药婆说，舱底区的人死了没地方埋。进坟地要钱，进神殿也要钱。扔进海里，第二天潮水又给送回来。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "泡了一个月的不好烧，得埋。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "一共十四个，得一个一个记下来。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "药婆的柜台下压着一沓路条，印是真的，上面的字是假的。"
   },
   {
    "if": "flag.bilge_graves",
    "text": "码头背后那片坡上有十四个新土包，一个挨着一个。有人在上面插了野花，花已经蔫了。"
   }
  ],
  "choices": [
   {
    "text": "付六十金冠，花两天安葬无名死者",
    "if": "!flag.bilge_graves",
    "once": true,
    "cost": {
     "gold": 60
    },
    "effects": [
     "flag bilge_graves",
     "world unburied -1",
     "var rites +1",
     "approval ushka +1",
     "approval tan +1",
     "log 舱底区码头背后的坡上，十四个没有名字的人。"
    ],
    "result": [
     "坟地选在码头背后一片没人要的坡上，那里石头多，土少。你们挖了两天，乌什卡一个人就挖了六个。没有名字可刻，阿坦就在每块石头上划了一道。划完第十四道，他念了晨祷的头四句。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "埋得够深了，潮水够不着。"
     }
    ]
   },
   {
    "text": "挨户募捐，为无名死者立坟",
    "tag": "无冕派",
    "if": "faction == 'crownless' && !flag.bilge_graves",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "舱底区的人没有钱，可是有力气。第一天来了九个人帮着挖，第二天来了二十个，还有个老头扛来一块门板当碑。到头来你们只出了买石灰的钱。",
     "effects": [
      "flag bilge_graves",
      "world unburied -1",
      "var rites +1",
      "approval ushka +1",
      "approval tan +1",
      "rep companies +1",
      "gold -15",
      "log 舱底区码头背后的坡上，十四个没有名字的人，舱底区的人自己埋的。"
     ]
    },
    "fail": {
     "text": "你们敲了一下午的门，只凑到九个铜子。剩下的是你自己掏的。坟还是立起来了。",
     "effects": [
      "flag bilge_graves",
      "world unburied -1",
      "var rites +1",
      "approval ushka +1",
      "approval tan +1",
      "gold -60",
      "log 舱底区码头背后的坡上，十四个没有名字的人。"
     ]
    }
   },
   {
    "text": "向药婆买一张路条",
    "if": "(is.greenskin || party.ushka || party.nixee) && !item.safe_conduct",
    "once": true,
    "cost": {
     "gold": 80
    },
    "effects": [
     "item +safe_conduct"
    ],
    "result": "名字是她当着你的面填的。墨还没干，她吹了吹，塞进一只海螺壳里递给你。"
   },
   {
    "text": "返回城中",
    "goto": "a3_06"
   }
  ]
 },
 "a3_06c": {
  "id": "a3_06c",
  "title": "神殿区",
  "loc": "安本科斯特 · 神殿区",
  "text": [
   "这里十多座神殿各敲各的钟，每刻钟都响成一片。人类把这些神统称为摄政王庭。神王长子阿德安的殿门最高，月神的最古老。诸神之王卡斯特洛斯的门最宽，来的人反而最少。",
   "编年史家会的楼就在钟楼背后，门口挂着一块悬赏的木牌，上面写着：收第一手的见闻，按件付钱。",
   {
    "if": "flag.notebook_order",
    "speaker": "编年史家",
    "text": "守昔者家的那本拓片我们收到了，眼下存在三楼，钱也早就付过了。有两位先生每个礼拜都来借，借回去看不懂，只好再送回来。"
   },
   {
    "if": "flag.notebook_kept",
    "speaker": "编年史家",
    "text": "守昔者小姐还留着那本拓片？会里出的价一直算数。她哪天想通了，尽管来。"
   },
   {
    "if": "flag.notebook_sold",
    "speaker": "编年史家",
    "text": "那本拓片，阿斯拉银行出过一个价，会里没跟上。可惜了。"
   },
   {
    "if": "flag.notebook_sold && party.garaele",
    "text": "加莱尔那时正站在门口看那块悬赏牌，这句话她没听见。"
   },
   {
    "if": "flag.names_filed",
    "text": "会里的人还记得你们报上来的那两个名字。账本上写的是“存疑，待复核”。"
   },
   {
    "if": "origin == 'corintar'",
    "text": "你一进神殿区，后面就跟上了两个穿灰袍的，是阿德安神殿的人。你一停下，他们也跟着停下。"
   },
   {
    "if": "flag.creed_delivered",
    "text": "多米尼克的信条已经交上去了。你路过阿德安神殿门口的时候往里看了一眼，那本书压在一摞请愿书的最下面。"
   }
  ],
  "choices": [
   {
    "text": "把多米尼克的科琳信条交给阿德安神殿",
    "if": "flag.creed_carried && !flag.creed_delivered && origin != 'corintar'",
    "effects": [
     "flag creed_delivered",
     "world scale +1",
     "rep corintar +1",
     "rep temples -1",
     "item -corinite_creed"
    ],
    "result": [
     "接书的祭司翻开第一页，看了很久。",
     {
      "speaker": "祭司",
      "text": "《剑与盾》？就这么几页？"
     },
     "话是这么说，他还是收下了，吩咐小祭司登记为：“东边送来的，科琳信众的说法，一册”。"
    ],
    "goto": "a3_06"
   },
   {
    "text": "当着两名灰袍人的面递交信条",
    "tag": "科琳的队伍",
    "if": "flag.creed_carried && !flag.creed_delivered && origin == 'corintar'",
    "check": {
     "skill": "religion",
     "dc": 14
    },
    "ok": {
     "text": "你把科琳战死的经过原原本本讲给他们听，讲她怎么挡在蓝牙前面，盾是怎么裂的，从头到尾说得平平静静。当天晚上就有两个年轻祭司把信条借走了，第二天还回来时，两人手里各多了一本抄本。",
     "effects": [
      "flag creed_delivered",
      "flag a3_creed_copied",
      "world scale +1",
      "rep corintar +2",
      "rep temples -1",
      "item -corinite_creed"
     ],
     "goto": "a3_06"
    },
    "fail": {
     "text": "你刚一开口，那两个灰袍就反驳起来，一句接着一句，驳得你说不出话来。信条倒是收下了，只是被压在了一摞请愿书的最下面。",
     "effects": [
      "flag creed_delivered",
      "world scale +1",
      "rep corintar +1",
      "rep temples -1",
      "item -corinite_creed"
     ],
     "goto": "a3_06"
    }
   },
   {
    "text": "向编年史家会登记舱底区的十四座坟",
    "if": "flag.bilge_graves",
    "once": true,
    "effects": [
     "gold +15"
    ],
    "result": "编年史家在账上记了一行，付给你们十五个金冠，又问知不知道那些人的名字。你们说不知道，他就把这一栏空着了。"
   },
   {
    "text": "返回城中",
    "goto": "a3_06"
   }
  ]
 },
 "a3_07": {
  "id": "a3_07",
  "title": "姑祖母",
  "art": "ck3_landing",
  "loc": "安本科斯特 · 精灵码头 · 一座搁浅的方舟上的宅子",
  "text": [
   "四百五十年前被拖上岸的方舟，如今成了精灵码头的住宅。人们在船壳上开窗，把桅杆锯成梁，又在甲板上搭起葡萄架。",
   "加莱尔的姑祖母住在最老的那条船上。她是“舰生”的，也就是生在海上的那一辈，登岸那年已经会走路了。算到今年她四百五十多岁，在精灵里面也称得上高寿。这时她正坐在船头的藤椅上剥豆子，嘴里哼着一支摇篮曲。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "姑祖母，我带了几位朋友来看您。他们是收尸的，不过您放心，我让他们在外面把鞋擦过了。"
   },
   {
    "if": "!party.garaele",
    "text": "加莱尔不在。老太太肯见你们，是因为你们捎来了她侄孙女加莱尔父母的消息。听完以后，她把剥好的豆子又倒回了豆荚堆里。"
   },
   {
    "speaker": "姑祖母",
    "text": "这支曲子是我娘当年在船上哼的。里面有个词，后来船上不许唱了。我那时候小，不懂事，还照着唱，为这个挨过一次打。"
   },
   {
    "if": "party.tan",
    "text": "阿坦站在舱门口没进来。他在数那支曲子一共有几句。"
   },
   {
    "if": "is.greenskin",
    "text": "老太太看你的眼神跟看别人没什么两样。她这辈子见过的东西多了，一个绿皮算不上稀奇。她顺手递给你一把豆子。"
   }
  ],
  "first": [
   "flag log_read"
  ],
  "choices": [
   {
    "text": "请她教你唱摇篮曲",
    "once": true,
    "check": {
     "skill": "performance",
     "dc": 12
    },
    "ok": {
     "text": "你跟着她哼了三遍。哼到那个不许唱的词，她停住了，你也跟着停住。她点点头，说你停得对。",
     "effects": [
      "flag a3_lullaby"
     ]
    },
    "fail": {
     "text": "调子你学会了，词一个也没记住。老太太说，她当年养的那只猫也是这么唱的。"
    }
   },
   {
    "text": "问她当年登岸那晚的经历",
    "tag": "精灵",
    "if": "is.elf",
    "once": true,
    "effects": [
     "flag a3_auntie_kin"
    ],
    "result": [
     {
      "speaker": "姑祖母",
      "text": "那天晚上的月亮是弯的。船底刚一碰着沙子，我娘就把我举了起来，让我第一个下去。我是脚先着的地，沙子是凉的。这四百多年，我一直记得那沙子是凉的。"
     },
     "她是拿你当自家晚辈看的。临走时她还告诉你，阁楼上有个天窗，一直通到龙骨上面。她小时候就是从那里往外爬的。"
    ]
   },
   {
    "text": "告诉她你父系来自哪条船",
    "tag": "半精灵",
    "if": "race == 'half_elf'",
    "once": true,
    "effects": [
     "flag a3_auntie_kin"
    ],
    "result": "你报了个船名。她想了许久才说，那条船上的人爱吃鱼干，也爱吵架，靠岸那年吵得最凶。她又说阁楼上有个天窗，通到龙骨上面，你要是用得着，尽管去用。"
   },
   {
    "text": "上阁楼，听加莱尔读航海志",
    "if": "party.garaele",
    "result": "加莱尔领着你们上了阁楼。她念精灵文跟念通用语一样快，只有念到死人数目的地方才慢下来。",
    "goto": "a3_07b"
   },
   {
    "text": "上阁楼，试读精灵的旧航海志",
    "if": "!party.garaele",
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "船上的记法是有规矩的，先记风，后记星，再记死了多少人，最后抄一遍祷词。摸清了这个规矩，剩下的就好认了。",
     "goto": "a3_07b"
    },
    "fail": {
     "text": "你们认了足足半个时辰，只认出一个“风”字。姑祖母叹了口气，只好自己爬上了阁楼。",
     "effects": [
      "flag a3_log_slow"
     ],
     "goto": "a3_07b"
    }
   }
  ]
 },
 "a3_07b": {
  "id": "a3_07b",
  "title": "第四十年",
  "loc": "精灵码头 · 方舟的阁楼",
  "text": [
   "阁楼里摞着十二口樟木箱，航海志在最下面。精灵舰队漂泊时一年记一册，由值夜人轮流执笔。每晚先记风向、星象，再记死者人数，末尾抄上值夜祷词。",
   "头三十九年的祷词一个字都不差，把舰队供的神一位一位列下来。可到了第四十年那一册，还是那个位置，有一位神的名字被人用墨涂掉了。旁边用小字注着“天空”。从那以后的祷词里，就再也没有这位神了。",
   "最后几页记着一行方位，前后量了三个晚上才定下来，量的是故土上一座神殿的位置。舰队离开那天，回过头去还望得见它的屋顶。",
   {
    "if": "flag.a3_log_slow",
    "text": "姑祖母一页页替你们念。她念得慢，一页要歇上三次，等到念完，天早就黑透了。"
   },
   {
    "speaker": "姑祖母",
    "text": "第四十年，船上一个月就死了一百多口人。怎么祷告他都不应，大家就不拜他了，改拜祖宗。祖宗好歹是自家人。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "墨迹下面还看得出第一个字母。我在竖井口拓过一个一模一样的。"
   },
   {
    "if": "party.tan && flag.castellar_seen",
    "speaker": "阿坦",
    "text": "“天上的卡斯特拉尔”，井壁上就是这么刻的。这里写的是同一位神，只是被人涂掉了。"
   },
   {
    "if": "party.tan && !flag.castellar_seen",
    "speaker": "阿坦",
    "text": "卡斯特拉尔……这听起来像王的名字，只是念歪了一点。"
   },
   {
    "if": "flag.a3_lullaby",
    "text": "楼下，老太太又哼起了那支曲子。被涂掉的那个词，她唱出来是“卡斯塔”，后半截咽下去了。"
   }
  ],
  "first": [
   "quest q_dragon stage 4",
   "codex lunatein_log"
  ],
  "next": "a3_08"
 },
 "a3_08": {
  "id": "a3_08",
  "title": "封册",
  "art": "ev_female_spy",
  "loc": "精灵码头 · 次日清晨",
  "text": [
   "清早，魔导院的武卫到了码头，身穿灰外套，手执包铁短棍，胸前各挂一块誓牌。他们自己不会法术，却立誓专管施法者。一个拿封条的法师跟在队长后面。",
   {
    "speaker": "武卫领队",
    "text": "奉阿德瑞尔岛的令，此宅藏有文书，涉及未经审定的神名，现由魔导院收走。请各位让开楼梯。"
   },
   {
    "if": "flag.tilda_with",
    "speaker": "蒂尔达",
    "text": "这不是我告的密，是我上一份例行报告里写的。例行报告不能全算在我头上，顶多算一半。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "那行方位我已经背下来了。眼下该怎么办，你们别问我，我只管记。"
   },
   {
    "if": "!party.garaele && party.tan",
    "text": "那行方位，阿坦昨晚掐着手指背了下来。"
   },
   {
    "if": "!party.garaele && !party.tan",
    "text": "那行方位你昨晚背熟了，还写在了手心里。"
   },
   {
    "if": "is.caster && !flag.a3_registered",
    "text": "领队一看见你，就在本子上画了个记号。没登记过的施法者，他们一眼就认得出来。"
   },
   {
    "if": "flag.a3_god_burned",
    "text": "武卫本该来六个，这次来了八个。大魔导师的通函已经到了，上面写着，车上那位烧过封条。"
   },
   {
    "if": "is.greenskin",
    "text": "领队先把你的文书验了一遍，才说起正事。规矩就是规矩。"
   }
  ],
  "first": [
   "flag bearing_known"
  ],
  "choices": [
   {
    "text": "赶在武卫上楼前抄下那几页",
    "check": {
     "skill": "investigation",
     "alt": [
      "sleight"
     ],
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "flag.a3_log_slow",
       "n": -2,
       "why": "昨晚念得太慢，字还没认熟"
      }
     ]
    },
    "ok": {
     "text": "楼梯响到第九级时，你正好抄完最后一个数。你把抄页塞进靴筒，把册子摆回原处，由着他们贴上了封条。",
     "effects": [
      "flag log_copied",
      "item +log_copy"
     ],
     "goto": "a3_06"
    },
    "fail": {
     "text": "你才抄到一半，领队已经站在你身后了。他把那半张抄页也收走了，说这一张同样涉及神名。册子就这么封了。",
     "goto": "a3_06"
    }
   },
   {
    "text": "抱着航海志从屋顶离开",
    "check": {
     "skill": "stealth",
     "dc": 15,
     "party": true,
     "adv": "flag.a3_auntie_kin"
    },
    "ok": {
     "text": "天窗外面就是方舟的龙骨，弯弯的，长满了青苔。你们顺着它一路爬到船尾，跳上了隔壁的屋顶。武卫还在楼梯上撞门，足足撞了一刻钟。",
     "effects": [
      "flag log_stolen",
      "item +log_copy",
      "rep temples -2",
      "rep throne -1"
     ],
     "goto": "a3_06"
    },
    "fail": {
     "text": "你们刚爬上龙骨，隔壁那条船的屋脊上就站起来两个穿灰外套的。",
     "goto": "a3_08b"
    }
   },
   {
    "text": "带航海志去神殿区，让编年史家会和魔导院都登记",
    "effects": [
     "flag log_filed",
     "world word +2",
     "rep temples +2",
     "approval garaele +1"
    ],
    "result": [
     "你们跟着武卫走了一上午，先在编年史家会登记了一遍，又到魔导院分署登记了一遍。两边的簿子上写的是同一行字：“第四十年，删去一神名”。",
     "这一行字当天就传开了。神殿区的钟一直敲到晚上，少说有三座神殿的人在四处打听，删掉的究竟是哪一位。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "这样两边都留了底，谁想烧也烧不干净了。"
     }
    ],
    "goto": "a3_06"
   },
   {
    "text": "让开楼梯，由武卫封走航海志",
    "effects": [
     "approval nixee +1",
     "approval garaele -1"
    ],
    "result": [
     "法师在册子上贴了三道封条，贴得仔细。贴完，武卫抱起箱子就走了。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "先活着再说！册子是没了，可方位还在脑子里，脑子他们封不了。"
     }
    ],
    "goto": "a3_06"
   }
  ]
 },
 "a3_08b": {
  "id": "a3_08b",
  "title": "屋脊上",
  "loc": "精灵码头 · 方舟的屋脊",
  "text": [
   "你们抱着那本航海志逃上了屋顶。脚下的屋脊就是方舟的龙骨，长满青苔，又弯又滑，往下三丈是码头的石板地。魔导院的武卫已经追上了隔壁那条船的屋脊，短棍上的铁箍在晨光里一闪。",
   {
    "speaker": "武卫领队",
    "text": "把册子放下！我们立过誓，不伤人，只打施法的手。"
   },
   "随队的法师站在后面，指尖已经亮起来了。码头上看热闹的越聚越多，下面还有人押起了注。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "他们立誓的铜牌就挂在胸口上，往那里砸。"
   }
  ],
  "choices": [
   {
    "text": "在屋脊上站稳，迎击追来的武卫",
    "if": "!(is.caster && !flag.a3_registered) && !flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫并排踏着龙骨逼近。随行法师抬起手，指尖亮起一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓时挂上的，损坏铜牌会削弱誓约。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 14
       },
       "success": {
        "text": "铜牌裂成两半掉在龙骨上，叮的一声。武卫们一齐停了手，一时不知道该不该接着打。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手刚伸过去就挨了一短棍，铁箍正砸在指节上。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "keel",
       "name": "趁青苔湿滑，踹倒最前面的武卫",
       "desc": "弯曲的龙骨上布满青苔，很难站稳。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前面那个的膝盖上。他往下一滑，抱住了后面那人的腿，两人一起趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在下面直叫好。",
        "selfDmg": "1d6"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag log_stolen",
       "item +log_copy",
       "rep temples -2",
       "rep throne -1"
      ],
      "goto": "a3_06"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "a3_08c"
     },
     "fled": {
      "effects": [
       "rep temples -1"
      ],
      "goto": "a3_08c"
     },
     "enemies": [
      {
       "id": "magister_militant",
       "n": 2,
       "name": "武卫"
      },
      {
       "id": "court_mage",
       "name": "随队的法师"
      }
     ]
    }
   },
   {
    "text": "在屋脊上站稳，迎击追来的武卫",
    "if": "(is.caster && !flag.a3_registered) && !flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫并排踏着龙骨逼近。随行法师抬起手，指尖亮起一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓时挂上的，损坏铜牌会削弱誓约。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 14
       },
       "success": {
        "text": "铜牌裂成两半掉在龙骨上，叮的一声。武卫们一齐停了手，一时不知道该不该接着打。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手刚伸过去就挨了一短棍，铁箍正砸在指节上。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "keel",
       "name": "趁青苔湿滑，踹倒最前面的武卫",
       "desc": "弯曲的龙骨上布满青苔，很难站稳。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前面那个的膝盖上。他往下一滑，抱住了后面那人的腿，两人一起趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在下面直叫好。",
        "selfDmg": "1d6"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag log_stolen",
       "item +log_copy",
       "rep temples -2",
       "rep throne -1"
      ],
      "goto": "a3_06"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "a3_08c"
     },
     "fled": {
      "effects": [
       "rep temples -1"
      ],
      "goto": "a3_08c"
     },
     "enemies": [
      {
       "id": "magister_militant",
       "n": 3,
       "name": "武卫"
      },
      {
       "id": "court_mage",
       "name": "随队的法师"
      }
     ]
    }
   },
   {
    "text": "在屋脊上站稳，迎击追来的武卫",
    "if": "!(is.caster && !flag.a3_registered) && flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫并排踏着龙骨逼近。随行法师抬起手，指尖亮起一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓时挂上的，损坏铜牌会削弱誓约。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 14
       },
       "success": {
        "text": "铜牌裂成两半掉在龙骨上，叮的一声。武卫们一齐停了手，一时不知道该不该接着打。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手刚伸过去就挨了一短棍，铁箍正砸在指节上。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "keel",
       "name": "趁青苔湿滑，踹倒最前面的武卫",
       "desc": "弯曲的龙骨上布满青苔，很难站稳。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前面那个的膝盖上。他往下一滑，抱住了后面那人的腿，两人一起趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在下面直叫好。",
        "selfDmg": "1d6"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag log_stolen",
       "item +log_copy",
       "rep temples -2",
       "rep throne -1"
      ],
      "goto": "a3_06"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "a3_08c"
     },
     "fled": {
      "effects": [
       "rep temples -1"
      ],
      "goto": "a3_08c"
     },
     "enemies": [
      {
       "id": "magister_militant",
       "n": 4,
       "name": "武卫"
      },
      {
       "id": "court_mage",
       "name": "随队的法师"
      }
     ]
    }
   },
   {
    "text": "在屋脊上站稳，迎击追来的武卫",
    "if": "(is.caster && !flag.a3_registered) && flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫并排踏着龙骨逼近。随行法师抬起手，指尖亮起一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓时挂上的，损坏铜牌会削弱誓约。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 14
       },
       "success": {
        "text": "铜牌裂成两半掉在龙骨上，叮的一声。武卫们一齐停了手，一时不知道该不该接着打。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手刚伸过去就挨了一短棍，铁箍正砸在指节上。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "keel",
       "name": "趁青苔湿滑，踹倒最前面的武卫",
       "desc": "弯曲的龙骨上布满青苔，很难站稳。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前面那个的膝盖上。他往下一滑，抱住了后面那人的腿，两人一起趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在下面直叫好。",
        "selfDmg": "1d6"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       "flag log_stolen",
       "item +log_copy",
       "rep temples -2",
       "rep throne -1"
      ],
      "goto": "a3_06"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "a3_08c"
     },
     "fled": {
      "effects": [
       "rep temples -1"
      ],
      "goto": "a3_08c"
     },
     "enemies": [
      {
       "id": "magister_militant",
       "n": 5,
       "name": "武卫"
      },
      {
       "id": "court_mage",
       "name": "随队的法师"
      }
     ]
    }
   }
  ]
 },
 "a3_08c": {
  "id": "a3_08c",
  "title": "武卫的牢",
  "loc": "安本科斯特 · 魔导院分署的地牢",
  "text": [
   "武卫收走了航海志，你们在魔导院分署的地牢里过了一夜。牢房比舱底区的客栈还干爽，只是隔壁关着个私改天象记录的学徒，哭了半夜。",
   "天亮时，书记来收一百金冠的罚款，给你开了一张收据，上面盖足了三个印。",
   {
    "if": "flag.tilda_with",
    "speaker": "蒂尔达",
    "text": "收据给我。我去找巴兹伍德先生报销。他多半不会批，可总得有人去试一次。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "方位还在我脑子里。纸他们收得走，我这个人他们收不走。"
   }
  ],
  "first": [
   "gold -100"
  ],
  "next": "a3_06"
 },
 "a3_09": {
  "id": "a3_09",
  "title": "挖坑的人",
  "loc": "安本科斯特 · 锻炉街的一间酒馆",
  "text": [
   "锻炉街上全是矮人铺子，一天到晚都是锤声。你要找的酒馆夹在两家铁匠铺中间，伸手碰墙都觉得暖。",
   "桥屯的奥托格坐在最里面那张桌边，面前摆着一壶李子白兰地。阿登下葬的那一夜，在皇宫花园里挖坑的人里就有他。他当过威克斯三卫的大剑手，骨架还在，人却瘦了，端杯子的手一直在抖，洒出来的酒早把袖口浸得硬邦邦的。",
   {
    "if": "origin != 'wex'",
    "text": "七年前他在板车边抬过杜坎森的尸首，后来被一纸调令调回了西边。这次他先认出了板车的轮子，然后才认出你们。"
   },
   {
    "if": "origin == 'wex'",
    "text": "当年在卡斯托纳斯那栋五层楼的屋顶上，替你扶梯子的就是他。他一看见你，就把杯子放下了。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "你的手在抖。"
   },
   {
    "speaker": "奥托格",
    "text": "一直抖。喝了酒才不抖。"
   },
   {
    "if": "flag.tilda_with",
    "text": "蒂尔达在隔着两张桌子的地方坐下，要了一杯牛奶，把本子摊在膝盖上。"
   },
   {
    "if": "flag.dug_the_pit",
    "text": "那一夜你也在花园里。你挖东头，他挖西头，中间隔着一畦郁金香，一整夜谁也没跟谁搭话。"
   },
   {
    "if": "is.greenskin",
    "text": "酒馆里的矮人看了你一眼，又接着喝自己的酒。锻炉街只认钱和手艺，不管你的脸是什么颜色。"
   }
  ],
  "choices": [
   {
    "text": "坐到他对面，给两人各倒一杯",
    "if": "flag.dug_the_pit",
    "effects": [
     "flag digger_talked",
     "item +digger_oath",
     "flag a3_two_prints"
    ],
    "result": [
     "你们俩喝完了一壶，谁也没问谁什么。喝到第二壶，是他先开的口。他说那晚的土下面有石子，铲子磕得直响。你说，你那头也有。"
    ],
    "goto": "a3_09b"
   },
   {
    "text": "劝奥托格说出埋人那晚的经过",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "adv": "is.soldier",
     "mods": [
      {
       "if": "party.ushka",
       "n": 1,
       "why": "他跟乌什卡一起抬过车"
      }
     ]
    },
    "ok": {
     "text": "你跟他说，那一夜他看见的事，不该一个人揣一辈子。他听了，把杯子推到了一边。",
     "effects": [
      "flag digger_talked",
      "item +digger_oath"
     ],
     "goto": "a3_09b"
    },
    "fail": {
     "text": "他听完，只说自己什么也没看见，把酒钱推到你面前，起身走了。",
     "effects": [
      "gold -10"
     ],
     "goto": "a3_06"
    }
   },
   {
    "text": "陪他喝到愿意开口",
    "check": {
     "abil": "con",
     "dc": 14,
     "save": true
    },
    "ok": {
     "text": "第四壶喝下去，你还坐得住，他坐不住了。他趴在桌上，脸贴着木头，就这么说了起来。",
     "effects": [
      "flag digger_talked",
      "item +digger_oath"
     ],
     "goto": "a3_09b"
    },
    "fail": {
     "text": "你最后记得的是第三壶。等醒过来，你已经躺在街上了。酒钱是你付的，他人不见了。",
     "effects": [
      "gold -20",
      "damage 1d6"
     ],
     "goto": "a3_06"
    }
   },
   {
    "text": "亮出密探身份，命令他开口",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "flag digger_talked",
     "item +digger_oath",
     "flag a3_ordered"
    ],
    "result": "你报出了巴兹伍德先生的名字和你身上的差事。他站起来朝你立正，然后像念调令一样，把那一晚的事从头背了一遍。",
    "goto": "a3_09b"
   }
  ]
 },
 "a3_09b": {
  "id": "a3_09b",
  "title": "口供",
  "loc": "安本科斯特 · 锻炉街的一间酒馆",
  "text": [
   {
    "speaker": "奥托格",
    "text": "那天晚上我守在王座厅门外。里面先是有剑响，后来没声了，再后来轰的一声，门缝里直往外冒热风。"
   },
   {
    "speaker": "奥托格",
    "text": "上面让我们进去抬，一共抬出来三具。一具是烧死的，认不出是谁。一具是个骑士。还有一具是银头发的，背上有个口子，是从后面扎进去的，很窄。我拿袖子给他擦过。"
   },
   {
    "speaker": "奥托格",
    "text": "上面跟我说，你什么也没看见。这句话我说了七年。"
   },
   "他照你们的要求在口供上按了手印。第一下手抖，印歪了，他又按了第二遍。",
   {
    "if": "flag.a3_two_prints",
    "text": "他的手印下面还有一个，是你的。那一夜你也在场。"
   },
   {
    "if": "flag.a3_ordered",
    "text": "按完手印，他又朝你立了一次正，然后坐下，再也不朝你看了。"
   },
   {
    "if": "flag.tilda_with",
    "text": "隔着两张桌子，蒂尔达的笔停住了。她在等着看你们怎么处置他。"
   }
  ],
  "choices": [
   {
    "text": "当着蒂尔达的面，安排商队护送他东行",
    "if": "flag.tilda_with",
    "cost": {
     "gold": 50
    },
    "effects": [
     "flag digger_safe"
    ],
    "result": "商队的车夫收了五十金冠，把奥托格藏进了一车麻袋中间。蒂尔达在本子上记下了车号，抬头看了你一眼，又低下头了。",
    "goto": "a3_06"
   },
   {
    "text": "避开蒂尔达，夜里送他上东行的车",
    "if": "flag.tilda_with",
    "cost": {
     "gold": 50
    },
    "effects": [
     "flag digger_safe",
     "flag tilda_blindsided"
    ],
    "result": "后半夜，你们把他扶上了一辆运铁锭的车。第二天一早，蒂尔达问奥托格上哪里去了，你说不知道。她把“不知道”三个字也记了下来。",
    "goto": "a3_06"
   },
   {
    "text": "托东行商队带他离开",
    "if": "!flag.tilda_with",
    "cost": {
     "gold": 50
    },
    "effects": [
     "flag digger_safe"
    ],
    "result": "商队的车夫收了五十金冠，把奥托格藏进了一车麻袋中间。上车以前，他把那壶没喝完的酒留给了你。",
    "goto": "a3_06"
   },
   {
    "text": "把他交给蒂尔达，换巴兹伍德一个人情",
    "if": "flag.tilda_with",
    "effects": [
     "flag digger_given",
     "rep throne +1",
     "approval tan -1"
    ],
    "result": [
     "蒂尔达合上本子走过来，跟奥托格说了声劳驾。门口进来两个大剑手，一边一个把他架走了，架得倒是很客气。",
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "他说的是实话。我们拿这句实话换了一个人情。"
     }
    ],
    "goto": "a3_06"
   },
   {
    "text": "不作安排，留他在酒馆喝酒",
    "effects": [
     "flag a3_ottog_drinks"
    ],
    "result": "你们走时，他又要了一壶，手已经不抖了。",
    "goto": "a3_06"
   }
  ]
 },
 "a3_10": {
  "id": "a3_10",
  "title": "想事情的人",
  "art": "ev_hre",
  "loc": "安本科斯特 · 帝国区 · 威克斯的公事房",
  "text": [
   "帝国区一条死巷的尽头是威克斯公事房，门口守着两名大剑手。替皇帝管密探的侏儒乔恩·巴兹伍德坐在一把高椅上，四周堆满公文。他七十八岁，对侏儒而言正当壮年，面前那盘小饼一块也没动。",
   {
    "speaker": "巴兹伍德",
    "text": "你们是来挖谁的，我知道。德利安那张图画得不怎么样，第七畦都画歪了。我不拦你们，我只问一件事：挖出来的东西，最后进谁的抽屉？"
   },
   {
    "speaker": "巴兹伍德",
    "text": "皇上这把椅子是怎么坐上去的，三十年前就定了，打了的鸡蛋收不回去。不是我打的，不过筐是我递的。我眼下只管一件事，别让帝国再乱。东西要是锁进我的抽屉，你们想要什么，尽管提。"
   },
   {
    "if": "flag.tilda_with",
    "text": "蒂尔达站在他椅子后面，个头跟椅背一般高，手里一直在记。"
   },
   {
    "if": "origin == 'wex'",
    "text": "他看你的眼神跟看别人不一样。你是他的人，这一点屋里谁都清楚。"
   },
   {
    "if": "origin == 'wex' && var.false_reports >= 2",
    "text": "你写回来的那几封假报告就摊在他手边，上面压着一块镇纸。"
   },
   {
    "if": "is.god",
    "text": "他抽屉里早就备好了一份给你的文书，印都盖了，只有头衔那一栏还空着。"
   },
   {
    "if": "is.god",
    "speaker": "巴兹伍德",
    "text": "头衔你自己填，别填得太大。我只求你一件事，真的就这一件：千万别当着众人说皇上不是神的化身。"
   },
   {
    "if": "flag.a3_god_answered",
    "speaker": "巴兹伍德",
    "text": "那三条你是怎么答的，我都看过了。第三条我不满意。"
   },
   {
    "if": "is.greenskin",
    "speaker": "巴兹伍德",
    "text": "你的文书蒂尔达已经验过了。能走进这扇门的绿皮，你是第二个。第一个是来送煤的。"
   }
  ],
  "first": [
   "codex bardswood",
   "codex dove_throne"
  ],
  "choices": [
   {
    "text": "请巴兹伍德先开价",
    "once": true,
    "effects": [
     "flag a3_heard_price"
    ],
    "result": [
     {
      "speaker": "巴兹伍德",
      "text": "一共三样。第一样，东坎诺那份城约，我给它盖上帝国的印，当然得先有城约才行。第二样是阿登之子罗吉尔的赦令。第三样是给东坎诺氏族的一纸特许，让兽人走在帝国的地界上不用挨棍子。"
     },
     {
      "speaker": "巴兹伍德",
      "text": "要不然就给钱。给钱最省事。"
     }
    ]
   },
   {
    "text": "索取氏族特许状作定金",
    "if": "!flag.clan_charter",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "dis": "origin == 'wex' && var.false_reports >= 2",
     "mods": [
      {
       "if": "origin == 'wex' && var.honest_reports >= 2",
       "n": 3,
       "why": "你的报告一封没假"
      },
      {
       "if": "faction == 'heirs'",
       "n": 2,
       "why": "你跟他讲得通名分"
      },
      {
       "if": "rep.clans >= 2",
       "n": 1,
       "why": "氏族那边有人替你说过话"
      }
     ]
    },
    "ok": {
     "text": "他想了很久，这才抽出一张纸，写了七行字，盖上印，吹干了递给你。",
     "effects": [
      "flag clan_charter",
      "item +clan_charter",
      "world room +1",
      "world embers -1",
      "rep clans +1"
     ]
    },
    "fail": {
     "text": "他笑了，说定金应该由先出手的一方给，这次该先出手的是你们。接着他吩咐蒂尔达记下：东边的人许了一件东西。",
     "effects": [
      "flag a3_charter_fail",
      "rep throne -1"
     ]
    }
   },
   {
    "text": "问他是否相信皇帝对阿登死因的说法",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 16,
     "dis": "origin == 'wex' && var.false_reports >= 2"
    },
    "ok": {
     "text": "他平时说话很快，这次慢了下来。他说他疑心了好多年，可一次也没问过皇上，因为一旦问了，就得听人家怎么答。",
     "effects": [
      "flag a3_bard_doubt"
     ]
    },
    "fail": {
     "text": "他跟你绕了一刻钟的弯子，你什么也没问出来。倒是蒂尔达把你的问题一字不差地记了下来。",
     "effects": [
      "rep throne -1"
     ]
    }
   },
   {
    "text": "承诺不公开质疑皇帝的化身身份",
    "tag": "神",
    "if": "is.god && !flag.a3_god_refused",
    "once": true,
    "effects": [
     "flag a3_god_promised"
    ],
    "result": "他把那份空着头衔的文书收回了抽屉，说既然你不填，他就先替你收着。"
   },
   {
    "text": "拒绝向他作此承诺",
    "tag": "神",
    "if": "is.god && !flag.a3_god_promised",
    "once": true,
    "effects": [
     "flag a3_god_refused",
     "rep throne -1"
    ],
    "result": "他点点头，拿起一块饼咬了一口，又放下了。蒂尔达手里的笔尖断了。"
   },
   {
    "text": "起身告退",
    "goto": "a3_06"
   }
  ]
 },
 "a3_11": {
  "id": "a3_11",
  "title": "皇宫花园，夜里",
  "loc": "安本科斯特 · 帝国皇宫 · 庆典前夜",
  "date": "1452年花始月",
  "text": [
   "花始月。明日就是皇帝登基三十周年，花匠还在连夜换花。运郁金香的车从侧门一辆接一辆进宫，推车人提着灯，一路骂着走。",
   "照委托人德利安画的那张图，埋着阿登的第七畦花圃在西边那堵矮墙下。墙外是条运泔水的小巷，臭得很，巡夜的都不爱往这边走。",
   {
    "if": "item.jubilee_invite",
    "text": "有了那张烫金请柬，你们就能混进送花的队伍，只说是替贵人来看花的。"
   },
   {
    "if": "flag.a3_bank",
    "text": "银行的账房说得一点不差，花匠三更收工，三更一刻换岗。"
   },
   {
    "if": "flag.dug_the_pit",
    "text": "你用不着看图。七年前的那一夜，你就是在这堵墙下挖的坑。"
   },
   {
    "if": "is.caster",
    "text": "你刚一靠近矮墙，指尖就发麻。花圃上有一道警戒术，是防人掘土的。"
   },
   {
    "if": "is.greenskin",
    "text": "宫里的杂役当中有几个绿皮战俘，脖子上还留着铁圈勒出来的印子。今晚多了你一个，也没人多看一眼。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "铲子给我。"
   },
   {
    "if": "flag.tilda_with",
    "speaker": "蒂尔达",
    "text": "我也去。我就站在篱笆外面，不进去。一进去，我就得把自己也记上，我可不想记我自己。"
   }
  ],
  "choices": [
   {
    "text": "解除矮墙上的警戒法术",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 15
    },
    "ok": {
     "text": "这道法术织得很密，是老手布下的。你一点点拆，拆完最后一处，指尖总算不麻了。",
     "effects": [
      "flag a3_ward_off"
     ]
    },
    "fail": {
     "text": "你只拆开了一半。剩下的那一半还在，而且已经察觉到有人碰过它了。"
    }
   },
   {
    "text": "独自翻入巷内，打开侧门",
    "tag": "游荡者",
    "if": "class == 'rogue'",
    "once": true,
    "effects": [
     "flag a3_gate_open"
    ],
    "result": "门闩是木头的，你拿铁丝从门缝里挑了三下就挑开了。门轴上过油，那是花匠自己上的，为的是推车进出没有声响。"
   },
   {
    "text": "带蒂尔达一起潜入",
    "if": "flag.tilda_with",
    "check": {
     "skill": "stealth",
     "dc": 15,
     "party": true,
     "adv": "item.garden_sketch || flag.dug_the_pit || class == 'rogue'",
     "mods": [
      {
       "if": "item.jubilee_invite",
       "n": 2,
       "why": "混在送花的队伍里"
      },
      {
       "if": "flag.a3_bank",
       "n": 1,
       "why": "知道几更换岗"
      },
      {
       "if": "is.greenskin",
       "n": 1,
       "why": "杂役里多一个绿皮没人看"
      },
      {
       "if": "flag.a3_ward_off",
       "n": 2,
       "why": "警戒术拆掉了"
      },
      {
       "if": "flag.a3_gate_open",
       "n": 2,
       "why": "侧门已经开了"
      }
     ]
    },
    "ok": {
     "text": "你们跟在一辆推车后面混进了侧门。蒂尔达留在篱笆外，蹲在一丛黄杨后面，本子摊在膝盖上。",
     "goto": "a3_11b"
    },
    "fail": {
     "text": "翻墙的时候不知是谁碰倒了一只花盆。墙那头的灯笼停了一停，又走开了。蒂尔达在篱笆外面把时辰记了下来。",
     "effects": [
      "flag a3_sneak_bad"
     ],
     "goto": "a3_11b"
    }
   },
   {
    "text": "把蒂尔达留在客栈，你们自行潜入",
    "if": "flag.tilda_with",
    "effects": [
     "flag tilda_blindsided"
    ],
    "check": {
     "skill": "stealth",
     "dc": 15,
     "party": true,
     "adv": "item.garden_sketch || flag.dug_the_pit || class == 'rogue'",
     "mods": [
      {
       "if": "item.jubilee_invite",
       "n": 2,
       "why": "混在送花的队伍里"
      },
      {
       "if": "flag.a3_bank",
       "n": 1,
       "why": "知道几更换岗"
      },
      {
       "if": "is.greenskin",
       "n": 1,
       "why": "杂役里多一个绿皮没人看"
      },
      {
       "if": "flag.a3_ward_off",
       "n": 2,
       "why": "警戒术拆掉了"
      },
      {
       "if": "flag.a3_gate_open",
       "n": 2,
       "why": "侧门已经开了"
      }
     ]
    },
    "ok": {
     "text": "你们跟在一辆推车后面混进了侧门。客栈那边，蒂尔达屋里的灯还亮着，她只当你们都睡下了。",
     "goto": "a3_11b"
    },
    "fail": {
     "text": "翻墙的时候不知是谁碰倒了一只花盆。墙那头的灯笼停了一停，又走开了。",
     "effects": [
      "flag a3_sneak_bad"
     ],
     "goto": "a3_11b"
    }
   },
   {
    "text": "混进花园，不惊动巡夜的人",
    "if": "!flag.tilda_with",
    "check": {
     "skill": "stealth",
     "dc": 15,
     "party": true,
     "adv": "item.garden_sketch || flag.dug_the_pit || class == 'rogue'",
     "mods": [
      {
       "if": "item.jubilee_invite",
       "n": 2,
       "why": "混在送花的队伍里"
      },
      {
       "if": "flag.a3_bank",
       "n": 1,
       "why": "知道几更换岗"
      },
      {
       "if": "is.greenskin",
       "n": 1,
       "why": "杂役里多一个绿皮没人看"
      },
      {
       "if": "flag.a3_ward_off",
       "n": 2,
       "why": "警戒术拆掉了"
      },
      {
       "if": "flag.a3_gate_open",
       "n": 2,
       "why": "侧门已经开了"
      }
     ]
    },
    "ok": {
     "text": "你们跟在一辆推车后面混进了侧门。没人多看你们一眼。",
     "goto": "a3_11b"
    },
    "fail": {
     "text": "翻墙的时候不知是谁碰倒了一只花盆。墙那头的灯笼停了一停，又走开了。",
     "effects": [
      "flag a3_sneak_bad"
     ],
     "goto": "a3_11b"
    }
   }
  ]
 },
 "a3_11b": {
  "id": "a3_11b",
  "title": "第七畦",
  "loc": "帝国皇宫 · 西花园",
  "text": [
   "第七畦的郁金香刚栽不久，轻轻一拔就连根起来。旁边花畦一铲下去都是硬土，只有这里松软异常，显然反复翻过。",
   "花园里很静。矮墙那头，换岗的骑士正跟花匠讨水喝，说明天得站一整天，今晚要先歇歇腿。",
   {
    "if": "party.ushka",
    "text": "乌什卡埋着头，挖得最快。每挖出一铲土，她都拍平了堆在一边，好赶在天亮以前填回去。"
   },
   {
    "if": "!party.ushka",
    "text": "你们几个轮着来，一个挖，一个拿衣裳兜土，一个盯着墙头。"
   },
   {
    "if": "flag.a3_sneak_bad",
    "text": "墙那头的灯笼又转了回来，这次停得比上次久。"
   },
   {
    "if": "is.caster && !flag.a3_ward_off",
    "text": "铲子每往土里进一次，你的指尖就麻一下。那道警戒术还在。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "挖别人家的花园，按件算是三倍的价！这一单我不给你们加价了。你们可得记着。"
   }
  ],
  "choices": [
   {
    "text": "赶在卫兵换岗前挖开",
    "if": "flag.a3_sneak_bad || (is.caster && !flag.a3_ward_off)",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "离三更一刻还差一点时，铲子碰到了布。",
     "goto": "a3_11c"
    },
    "fail": {
     "text": "铲子磕在一块石头上，当的一声，整个花园都听得见。灯笼一下全朝这边转了过来。",
     "combat": {
      "title": "花园里的灯笼",
      "intro": "灯笼绕过矮墙，一盏、两盏，转眼已有四盏。领头的骑士不喊人，先拔了剑。",
      "enemies": [
       {
        "id": "wexonard_footman",
        "n": 3,
        "name": "宫里的威克斯步兵"
       },
       {
        "id": "knight",
        "name": "值夜的骑士"
       }
      ],
      "specials": [
       {
        "id": "racks",
        "name": "推倒花架挡路",
        "desc": "三层花架上尽是明日庆典要用的郁金香。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 13
        },
        "success": {
         "text": "花架一倒，三层花盆全砸在了小路上。步兵踩着碎瓦和烂泥，走一步滑一步。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "花架是钉在墙上的。你推了一把，只推下来一盆，正好砸在你自己脚面上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 500,
      "win": {
       "effects": [
        "flag garden_alarm",
        "world peace -1"
       ],
       "goto": "a3_11c"
      },
      "lose": {
       "effects": [
        "flag garden_alarm",
        "world peace -1",
        "damage 4d6"
       ],
       "goto": "a3_11c"
      },
      "fled": {
       "effects": [
        "flag garden_alarm",
        "world peace -1",
        "damage 2d6"
       ],
       "goto": "a3_11c"
      }
     }
    }
   },
   {
    "text": "赶在卫兵换岗前挖开",
    "if": "!(flag.a3_sneak_bad || (is.caster && !flag.a3_ward_off))",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "离三更一刻还差一点时，铲子碰到了布。",
     "goto": "a3_11c"
    },
    "fail": {
     "text": "土下面全是碎瓦，你们一直挖到天边发白才见着布，手上磨得全是血泡。巡夜的从墙外走过去两次，都没往里看。",
     "effects": [
      "damage 2d6"
     ],
     "goto": "a3_11c"
    }
   }
  ]
 },
 "a3_11c": {
  "id": "a3_11c",
  "title": "三具",
  "loc": "帝国皇宫 · 西花园",
  "text": [
   {
    "if": "flag.garden_alarm",
    "text": "你们是一边打一边挖完的，最后拖着尸首翻过了墙。巷子里踩烂的郁金香铺了一地。"
   },
   "三具尸首并排埋着，裹尸布早已烂了。一具烧得蜷曲发黑。一具还穿着阿德蕾西娅骑士团的锁甲，徽记被人锉掉了。第三具埋了七年多，头发仍是银色的。这就是阿登·天枪大公。",
   "他是脸朝下埋的。背上左边的肩胛骨下面有一道口子，从后往前，很窄，整个扎透了。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "威克斯的大剑砍不出这种口子。大剑是劈的，劈下去骨头会碎。这一道是扎出来的，刀很窄，从背后，就一下。"
   },
   {
    "if": "!party.ushka && party.garaele",
    "speaker": "加莱尔",
    "text": "这是从背后进去的，用的是窄刃。皇帝说他是决斗赢的，可决斗的人不会站到对手背后去。"
   },
   {
    "if": "!party.ushka && !party.garaele",
    "text": "你拿手指比了比那道口子，比你的小拇指还窄。皇帝说他是决斗赢的，可决斗的人不会站到对手背后去。"
   },
   "你们拿带来的蜂蜡给那道口子拓了个模，用布仔细包好。皇帝对外说阿登死于一场公平的决斗，这道口子说的是另一回事：王座厅里还有第三个人，从背后给了他一刀。",
   {
    "if": "party.tan",
    "text": "阿坦跪在坑边，念了晨祷的第一句就停住了。天还没亮，还不到念的时辰。"
   },
   {
    "if": "is.greenskin",
    "text": "你们扛着尸首往外走时，墙根下有个绿皮杂役看见了你。他把脸转过去，对着墙。"
   }
  ],
  "first": [
   "flag wound_seen",
   "item +wound_cast"
  ],
  "next": "a3_12"
 },
 "a3_12": {
  "id": "a3_12",
  "title": "那个窟窿",
  "loc": "城外 · 德利安备下的一间仓房 · 当夜",
  "text": [
   "德利安备好的仓房就在城外盐田旁，墙脚还结着一圈白盐。三具遗体各占一扇门板，两盏灯在旁边亮着。",
   "德利安是一个人骑马来的。他进门只看了一眼，就扶着门框在门槛上坐了下去，过了很久才开口。",
   {
    "speaker": "德利安",
    "text": "他疼不疼？"
   },
   {
    "if": "flag.a3_delian_read",
    "text": "你想起了那张图上新旧不一的墨迹。这句话，他大概问了自己七年。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "皇上那把椅子，原来是压在一具尸首上坐的。"
   },
   {
    "if": "is.god",
    "speaker": "德利安",
    "text": "你能不能让他……"
   },
   {
    "if": "is.god",
    "speaker": "德利安",
    "text": "不，算了。我管了一辈子仓库，出了库的东西，不能再入一回库。"
   },
   {
    "if": "is.god && party.ushka",
    "speaker": "乌什卡",
    "text": "这个他比你懂。"
   },
   {
    "if": "faction == 'heirs' && party.garaele",
    "speaker": "加莱尔",
    "text": "你是讲名分的。可帝国名分最正的那把椅子，名分是编出来的。那我问一句，家谱上没写的事，算不算数？"
   },
   {
    "if": "faction == 'heirs' && !party.garaele && party.tan",
    "speaker": "阿坦",
    "text": "你是讲名分的。谱上写的是皇上决斗赢了。那谱上没写的事，算不算数？"
   },
   {
    "if": "is.greenskin",
    "text": "德利安看见你蹲在门板旁边，没问你是谁，只问你们那边人死了，是不是也这样摆着。"
   }
  ],
  "first": [
   "quest q_duke stage 3",
   "codex throne_room"
  ],
  "choices": [
   {
    "text": "修整蜡模，让它经得起查验",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你把蜡模的边修得整整齐齐，连口子里骨头崩过的痕迹都拓出来了。往后不管谁拿到它，都没法说这是伪造的。",
     "effects": [
      "flag a3_cast_fine"
     ]
    },
    "fail": {
     "text": "蜡模旁边起了泡。你修了半宿，修完了还是看得出修过。"
    }
   },
   {
    "text": "留心仓房外的动静",
    "if": "origin != 'sons'",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "门外的盐堆背后坐着个人，正就着月光缝东西，针脚又密又匀。等你推门出去，人已经不见了，地上只留下一截线头。这种针脚你认得，当年板车上的寿衣全是这么缝的。那是达拉斯的手艺。",
     "effects": [
      "flag daras_seen"
     ]
    },
    "fail": {
     "text": "外面只有风，吹得盐袋哗哗响。"
    }
   },
   {
    "text": "出门与正在缝东西的人交谈",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "flag daras_seen"
    ],
    "result": [
     "门外的盐堆背后坐着个人，正就着月光缝东西，针脚又密又匀。军士长那只骨灰袋就是这么缝出来的。",
     "是达拉斯。北城那条世家住的街，你们俩一起守过，他守东口，你守西口。他抬头看了你一眼，手里的针没停。",
     {
      "speaker": "达拉斯",
      "text": "少主说过，别拿大公当旗子。这话我听见了。"
     },
     {
      "speaker": "达拉斯",
      "text": "我不打什么旗子。我只办一件事。"
     },
     "你再说什么，他都只管缝。缝完了他咬断线头，站起来走了。"
    ]
   },
   {
    "text": "回答：家谱上没写的事也算数",
    "tag": "承嗣派",
    "if": "faction == 'heirs' && (party.garaele || party.tan) && !flag.a3_heirs_no",
    "once": true,
    "effects": [
     "flag a3_heirs_yes"
    ],
    "result": "你说算数。问你的那个人点点头，什么也没记。"
   },
   {
    "text": "回答：不算，一切以家谱为准",
    "tag": "承嗣派",
    "if": "faction == 'heirs' && (party.garaele || party.tan) && !flag.a3_heirs_yes",
    "once": true,
    "effects": [
     "flag a3_heirs_no"
    ],
    "result": "你说不算，谱要是改了一次，往后就得一直改下去。问你的那个人看看门板上的三具尸首，没有再问。"
   },
   {
    "text": "安慰德利安，说阿登没受苦",
    "effects": [
     "var lies +1"
    ],
    "result": [
     "他点点头，像是早就等着你这一句。",
     {
      "speaker": "德利安",
      "text": "那就好，那就好。他这人怕疼，小时候摔一跤能哭上半天，哭完了又跑去爬树。"
     }
    ],
    "goto": "a3_13"
   },
   {
    "text": "如实告诉德利安：阿登被人从背后一刀刺穿",
    "effects": [
     "approval ushka +1"
    ],
    "result": [
     "他听完，把手按在膝盖上，按了很久。",
     {
      "speaker": "德利安",
      "text": "就一下。好。他这辈子做什么事都是一下。"
     },
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "刀快，手也稳，他没受什么罪。我说的是实话，不是拣好听的说。"
     }
    ],
    "goto": "a3_13"
   },
   {
    "text": "告诉德利安：他疼不疼，谁也无法确知",
    "effects": [
     "approval garaele +1"
    ],
    "result": [
     "他看看你，又看看门板。",
     {
      "speaker": "德利安",
      "text": "是啊。那间屋里活着走出来的人，我是不会去问的。"
     },
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "不知道，那就记不知道。这一栏空着，比填错了强。"
     }
    ],
    "goto": "a3_13"
   }
  ]
 },
 "a3_13": {
  "id": "a3_13",
  "title": "三十年庆典",
  "art": "load_21",
  "loc": "帝国皇宫 · 大厅",
  "date": "1452年花始月",
  "text": [
   "四十张长桌排满宫廷大厅。坐在上首的是皇帝洛萨恩三世，五十一岁，头发已经灰白，胸前戴着一颗紫宝石。皇后艾莉萨多年来第一次同他入席。她几乎没吃东西，目光停在桌上的郁金香上。",
   {
    "if": "item.jubilee_invite",
    "text": "你们是凭那张烫金请柬进来的，给安排在最末一张桌子的最末尾，紧挨着上菜的过道。"
   },
   {
    "if": "!item.jubilee_invite",
    "text": "巴兹伍德把你们都记成了他的书记。你们坐在他身后那一排，每人手里还发了一支笔。"
   },
   {
    "if": "flag.garden_alarm",
    "text": "昨夜花园里出的事已经传开了。今天门口多加了三道搜身，连上菜的托盘都要掀开来看。"
   },
   "伊斯特拉洛尔的女公爵奥坎娜坐在选帝侯那一排，穿的还是那件扈从外套。巴兹伍德只顾吃他的饼。",
   "上菜的队伍从过道里走过来，每人托着一只银盘子。走在第九个的那人，号衣的袖口是补过的，补得很好，针脚又密又匀。",
   {
    "if": "flag.daras_seen",
    "text": "这针脚你认得，是那个替死人缝寿衣的达拉斯。他走到离皇后还有三张桌子的地方停了一下，把托盘换到了左手上。"
   },
   {
    "if": "origin == 'sons'",
    "text": "是达拉斯。他始终没朝你看一眼。"
   },
   "紧接着他拔出了一把很窄的刀，朝皇后扑了过去。"
  ],
  "choices": [
   {
    "text": "扑过去拦住刺客，救下皇后",
    "check": {
     "skill": "athletics",
     "alt": [
      "acrobatics"
     ],
     "dc": 16,
     "party": false,
     "adv": "flag.daras_seen",
     "mods": [
      {
       "if": "is.martial",
       "n": 2,
       "why": "你的手比脑子快"
      },
      {
       "if": "flag.garden_alarm",
       "n": -1,
       "why": "搜身搜得你们身上什么也没剩"
      }
     ]
    },
    "ok": {
     "text": "你一头撞在他腰上。刀尖擦着皇后的袖子过去，钉进了桌面。",
     "effects": [
      "flag empress_saved",
      "world peace +1",
      "rep throne +2",
      "rep moon -2"
     ],
     "goto": "a3_13b"
    },
    "fail": {
     "text": "你慢了半步。刀扎进去时，皇后手里还捏着一片郁金香叶子。卫兵拿你当同伙，把你死死按在地上。亏得巴兹伍德一边喊一边从桌下钻过来，才把你捞了出去。",
     "effects": [
      "rep throne -1",
      "flag a3_empress_dead",
      "world peace -1"
     ],
     "goto": "a3_14"
    }
   },
   {
    "text": "继续坐着，不介入",
    "effects": [
     "world peace -1",
     "flag a3_empress_dead"
    ],
    "result": "刀扎进去时，皇后手里还捏着一片郁金香叶子。满厅的人都站起身，又一个个坐了回去，谁也不知道该干什么。只有皇帝一动没动，盯着那把刀。",
    "goto": "a3_14"
   },
   {
    "text": "挡住卫兵，掩护达拉斯逃走",
    "req": "origin == 'sons' || rep.moon >= 3",
    "reqText": "需要月党声望达到 3",
    "effects": [
     "flag daras_fled",
     "world peace -1",
     "rep moon +1",
     "rep throne -3",
     "flag a3_empress_dead"
    ],
    "result": "刀已经扎进去了。你撞翻了一张长桌，横在过道当中。达拉斯从你身边跑过去，看都没看你，从上菜的那扇门出去了。等卫兵踩着桌子追过来，你早已混进了人群中。",
    "goto": "a3_14"
   },
   {
    "text": "喊达拉斯的名字，让他停手",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "check": {
     "skill": "persuasion",
     "dc": 17
    },
    "ok": {
     "text": [
      {
       "speaker": "{pc}",
       "text": "达拉斯！"
      },
      "他脚下停了半步。就在这半步之间，卫兵已经扑上来了。被按倒之前，他看了你一眼，眼里没有恨，也没有别的什么。"
     ],
     "effects": [
      "flag empress_saved",
      "world peace +1",
      "rep throne +2",
      "rep moon -2",
      "flag a3_daras_jailed"
     ],
     "goto": "a3_14"
    },
    "fail": {
     "text": [
      {
       "speaker": "{pc}",
       "text": "达拉斯！"
      },
      "他没有停。刀扎进去时，皇后手里还捏着一片郁金香叶子。过后他回过头，在人群中找着了你，冲你点了下头。"
     ],
     "effects": [
      "world peace -1",
      "flag a3_empress_dead",
      "flag a3_daras_cut"
     ],
     "goto": "a3_14"
    }
   },
   {
    "text": "抬手定住刀",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag empress_saved",
     "flag god_sided_throne",
     "world peace +2",
     "rep moon -3"
    ],
    "result": [
     "刀停在了半空里，离皇后的喉咙只有一掌远。满厅的人都朝你跪了下去，盘子碎了一地。只有皇帝还站着。",
     "达拉斯也站着。他松开了刀柄，刀还悬在那里。",
     {
      "speaker": "达拉斯",
      "text": "连这个你都要管。那年在王座厅里，你怎么不管？"
     },
     {
      "if": "party.tan",
      "text": "阿坦跪到一半，又站起身。后来他说，他那时不知道该冲着谁跪。"
     }
    ],
    "goto": "a3_14"
   }
  ]
 },
 "a3_13b": {
  "id": "a3_13b",
  "title": "按住他",
  "loc": "帝国皇宫 · 大厅",
  "text": [
   "你把刺客达拉斯压在身下。他的手还扣着刀柄，刀扎在桌上。他不再挣扎，也不出声。",
   "卫兵从四面往这边挤，有人已经拔出剑来，嚷着要当场砍了他。皇后还坐在那里没动，袖子上破了一道口子。",
   "满厅的人有的往外挤，有的往这边挤，乱成一团。巴兹伍德站到椅子上喊别砍，一连喊了三遍，没人听他的。皇帝仍然坐在原处，看着你。",
   {
    "speaker": "达拉斯",
    "text": "你放手。"
   },
   {
    "if": "origin == 'sons'",
    "text": "他的声音不高，跟当年在北城守街的时候一样。"
   }
  ],
  "choices": [
   {
    "text": "松手，把达拉斯交给卫兵",
    "effects": [
     "flag a3_daras_cut"
    ],
    "result": "你刚一松手，四把剑就一齐砍了下去。他倒在了地上，压着自己缝补过的那只袖口。",
    "goto": "a3_14"
   },
   {
    "text": "继续按住达拉斯，等卫兵来绑",
    "combat": {
     "title": "按住他",
     "intro": "达拉斯紧握刀柄，目光始终越过你，盯着皇后的椅子。",
     "enemies": [
      {
       "id": "daras"
      }
     ],
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "cloth",
       "name": "扯下桌布把他裹住",
       "desc": "桌布长约一丈，银盘都摆在上面。成功时，本场战斗直接获胜。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "alt": [
         "sleight"
        ],
        "dc": 15
       },
       "success": {
        "text": "你使劲一扯，银盘子滚了满地，桌布兜头把他裹了个严实。卫兵的绳子也到了。",
        "end": "win"
       },
       "fail": {
        "text": "桌布是扯下来了，可他不在下面。他的刀在你胳膊上划了一道。",
        "selfDmg": "1d8"
       }
      }
     ],
     "xp": 400,
     "win": {
      "effects": [
       "flag a3_daras_jailed"
      ],
      "goto": "a3_14"
     },
     "lose": {
      "effects": [
       "flag a3_daras_cut",
       "hp 1"
      ],
      "goto": "a3_14"
     }
    }
   }
  ]
 },
 "a3_14": {
  "id": "a3_14",
  "title": "皇帝来了",
  "art": "ev_wex_precipice",
  "loc": "安本科斯特 · 庆典之后的三天",
  "text": [
   "庆典过去三天了。蜡模和三具遗体的清单还在你们手里，而知道这件事的已经有四家。",
   {
    "if": "flag.empress_saved",
    "text": "皇后活了下来，帝国跟洛伦特王国的联姻也就保住了。帝国区门口贴出了告示，通缉刺客的同党。告示上没有你们。"
   },
   {
    "if": "flag.a3_empress_dead",
    "text": "皇后的灵柩停在神殿区。洛伦特的使节第二天就走了，临走还当众把联姻的文书撕了。"
   },
   {
    "if": "flag.a3_daras_jailed",
    "text": "达拉斯关在帝国区的牢里。听送饭的说，他跟牢头要了针线，正在缝自己的囚衣。"
   },
   {
    "if": "flag.a3_daras_cut",
    "text": "达拉斯埋在了城外的乱葬岗上，连块碑也没有。"
   },
   {
    "if": "flag.a3_daras_cut && party.ushka",
    "text": "乌什卡去乱葬岗看过一次达拉斯，回来以后一个字也没提。"
   },
   "第三天夜里，盐田边那间仓房的门口停下了一匹马，骑马的人没带随从。洛萨恩三世自己推门进来，先看了一眼门板上的三具尸首，又转过来看你。",
   {
    "speaker": "洛萨恩三世",
    "text": "证据你带来了。很好。"
   },
   {
    "speaker": "洛萨恩三世",
    "text": "这次屋里没有第三个人，只有你和我。你要不要跟我比一场？"
   },
   {
    "if": "flag.god_sided_throne",
    "text": "他看你的眼神跟那天在大厅里一模一样。那天满厅的人都跪下了，只有他一个人站着。"
   },
   {
    "if": "is.god",
    "text": "对着一位神，他说的也是这句话，一个字都没改。"
   }
  ],
  "choices": [
   {
    "text": "按三卫规矩决斗，一见血就停",
    "tag": "试炼派",
    "if": "faction == 'tried' && !is.god",
    "effects": [
     {
      "if": "party.ushka",
      "then": [
       "flag a3_out_ushka",
       "companion -ushka"
      ]
     },
     {
      "if": "party.tan",
      "then": [
       "flag a3_out_tan",
       "companion -tan"
      ]
     },
     {
      "if": "party.nixee",
      "then": [
       "flag a3_out_nixee",
       "companion -nixee"
      ]
     },
     {
      "if": "party.garaele",
      "then": [
       "flag a3_out_garaele",
       "companion -garaele"
      ]
     }
    ],
    "result": "同伴们都退到了门外。他解下披风叠好，放在一袋盐上，然后把大剑从背上取了下来。",
    "combat": {
     "title": "三卫的规矩",
     "intro": "他双手持剑，剑尖向下点了点地，这是三卫的起手式。按规矩，比到见血为止。",
     "enemies": [
      {
       "id": "lothane_iii"
      }
     ],
     "noAwe": true,
     "fleeable": false,
     "pcMustStand": true,
     "specials": [
      {
       "id": "lamp",
       "name": "把灯踢到他脚下",
       "desc": "仓里只有两盏灯，其中一盏就在他背后。成功时，所有敌人陷入「破绽」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "acrobatics",
        "dc": 15
       },
       "success": {
        "text": "灯油泼在盐地上烧了起来。他向后让了半步，剑尖一偏，露出了破绽。",
        "applyAll": {
         "cond": "exposed",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯滚到墙根下就灭了。他连看都没看一眼。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "win": {
      "effects": [
       "flag emperor_duel_won",
       "rep throne +1"
      ],
      "goto": "a3_14b"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "a3_14b"
     }
    }
   },
   {
    "text": "以神的身份接受皇帝的挑战",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_duel_emperor",
     "flag emperor_duel_won",
     "world peace -2",
     "rep throne -3"
    ],
    "result": [
     "他一起手就是三卫的路数，连着两剑，又快又沉。你站着没动。第三剑他用上了法术，把仓房的顶棚掀掉了半边。当年他就是用这一招烧死埃尔兰的。",
     "你还是好好地站着。倒是他自己的手背上裂开了一道口子，血顺着剑柄往下滴。他低头看了看血，把剑收了起来。",
     "巴兹伍德不知什么时候站到了门口，手里还拿着一块没吃完的饼。刚才的事他全看见了。此后，皇帝说的话，帝国朝廷上上下下都只信一半。"
    ],
    "goto": "a3_14b"
   },
   {
    "text": "谢绝比试",
    "effects": [
     "flag a3_declined_duel"
    ],
    "result": [
     {
      "if": "is.god",
      "speaker": "洛萨恩三世",
      "text": "原来神也不过如此。"
     },
     {
      "if": "!is.god",
      "text": "他站了一会儿，又看了一眼门板上那具银头发的尸首，系上披风走了。"
     }
    ],
    "goto": "a3_14b"
   }
  ]
 },
 "a3_14b": {
  "id": "a3_14b",
  "title": "证据给谁",
  "loc": "安本科斯特 · 盐田边的仓房",
  "text": [
   {
    "if": "flag.emperor_duel_won && !flag.god_duel_emperor",
    "text": "你划破了他的手背。他低头看了看血，把剑收了起来。"
   },
   {
    "if": "flag.emperor_duel_won && !flag.god_duel_emperor",
    "speaker": "洛萨恩三世",
    "text": "你凭的是本事。"
   },
   {
    "if": "faction == 'tried' && !flag.emperor_duel_won && !flag.a3_declined_duel",
    "text": "先见血的是你。他看着你胳膊上那道口子点点头，把剑擦干净了。"
   },
   {
    "if": "faction == 'tried' && !flag.a3_declined_duel",
    "text": "等他走了你才想起来，照你自己的道理，他那把椅子也是凭本事坐上去的。只不过那一晚，屋里还有第三个人帮他。"
   },
   "次日，四家的人都来找你们要证据。",
   "巴兹伍德让蒂尔达送来一张字条，上面只写着“抽屉空着”。奥坎娜是亲自来的，靴子上全是泥。编年史家会的人带来了一个泰卢姆的喊报人，那人一到就站在门口试起了嗓子。只有德利安坐在门槛上，什么也没要。",
   {
    "if": "flag.digger_talked",
    "text": "口供上有奥托格的两个手印，有一个是按歪了的。"
   },
   {
    "if": "flag.a3_ottog_drinks",
    "text": "锻炉街那边传来消息，奥托格已经不在那家酒馆了。老板说是两个大剑手来把他请走的，请得很客气。"
   },
   {
    "if": "flag.a3_bard_doubt",
    "text": "蒂尔达那张字条的背面还有一行，是巴兹伍德的笔迹：我问了，他没答。"
   },
   {
    "if": "flag.a3_aucanna_told",
    "speaker": "奥坎娜",
    "text": "你答应过我，找着了先告诉我。现在我来了，你说吧。"
   },
   {
    "if": "origin == 'wex'",
    "text": "“只有威克斯说了算”，这句话你在信里抄过很多遍。这次轮到你自己掂量了。"
   }
  ],
  "first": [
   {
    "if": "flag.a3_out_ushka",
    "then": [
     "companion +ushka",
     "unflag a3_out_ushka"
    ]
   },
   {
    "if": "flag.a3_out_tan",
    "then": [
     "companion +tan",
     "unflag a3_out_tan"
    ]
   },
   {
    "if": "flag.a3_out_nixee",
    "then": [
     "companion +nixee",
     "unflag a3_out_nixee"
    ]
   },
   {
    "if": "flag.a3_out_garaele",
    "then": [
     "companion +garaele",
     "unflag a3_out_garaele"
    ]
   }
  ],
  "choices": [
   {
    "text": "把证据卖给巴兹伍德封存",
    "effects": [
     "flag proof_bardswood",
     "world peace +2",
     "rep throne +2",
     "rep moon -2"
    ],
    "result": [
     {
      "if": "origin == 'wex'",
      "speaker": "巴兹伍德",
      "text": "你是我的人，这我知道。你自己知不知道，那是另一回事。“只有威克斯说了算”这句话是我写的，写的时候我就知道它是假的。可假的东西只要撑得住，就值钱。"
     },
     {
      "if": "origin != 'wex'",
      "text": "蒂尔达拿油布把蜡模包了三层，抱在怀里走了，像抱着个刚出生的孩子。"
     }
    ],
    "goto": "a3_14c"
   },
   {
    "text": "把证据交给奥坎娜",
    "effects": [
     "flag proof_moon",
     "world peace -2",
     "rep moon +3",
     "rep throne -2",
     {
      "if": "flag.a3_charter_fail",
      "then": [
       "rep throne -1"
      ]
     }
    ],
    "result": [
     "她接过蜡模，拿拇指量了量那道口子的宽度。",
     {
      "if": "origin == 'wex'",
      "speaker": "奥坎娜",
      "text": "你是替威克斯办事的，把这个给了我，回去怎么交代是你的事。我只告诉你一件事：我不会马上开战。我要等一个好日子。"
     },
     {
      "if": "origin != 'wex'",
      "speaker": "奥坎娜",
      "text": "我不会马上开战。我要等一个好日子。"
     }
    ],
    "goto": "a3_14d"
   },
   {
    "text": "交给喊报人和编年史家会公开刊印",
    "effects": [
     "flag proof_published",
     "world peace -3",
     "rep throne -3",
     "rep temples +1",
     {
      "if": "!flag.digger_talked && !flag.a3_cast_fine",
      "then": [
       "rep moon -1"
      ]
     },
     {
      "if": "flag.a3_charter_fail",
      "then": [
       "rep throne -1"
      ]
     }
    ],
    "result": [
     "喊报人站在桶上喊了整整三天，泰卢姆的印坊印了两千张。帝国区的人把告示撕了个干净，第二天又贴满了。",
     {
      "if": "!flag.digger_talked && !flag.a3_cast_fine",
      "text": "可是没有口供，蜡模又修得不干净，满城有一半人说这是诽谤。连月党自己家里也有人这么说。"
     }
    ],
    "goto": "a3_14d"
   },
   {
    "text": "带走证据，不交给任何一方",
    "effects": [
     "flag proof_kept",
     {
      "if": "flag.a3_charter_fail",
      "then": [
       "rep throne -1"
      ]
     }
    ],
    "result": "你把蜡模和清单包好，塞进了板车的夹板里。四家的人都走了，没有一个是高兴的。只有德利安还坐在门槛上，说这样也好，东西放在谁手里，都不如放在仓里。",
    "goto": "a3_14d"
   }
  ]
 },
 "a3_14c": {
  "id": "a3_14c",
  "title": "巴兹伍德的抽屉",
  "loc": "安本科斯特 · 帝国区 · 威克斯的公事房",
  "text": [
   "巴兹伍德把蜡模锁进抽屉，钥匙挂回颈间。随后他打开另一个抽屉，里面的几份文书已经写好了。",
   {
    "speaker": "巴兹伍德",
    "text": "挑一样吧。只能挑一样，挑两样我可给不起。"
   },
   "桌上摆的还是那盘小饼，只是少了一块。蒂尔达站在他椅子后面，这次她没有记。",
   {
    "if": "flag.a3_heard_price",
    "text": "抽屉里的东西跟上次说的一样，一张没多，一张也没少。"
   },
   {
    "if": "flag.a3_god_promised",
    "speaker": "巴兹伍德",
    "text": "你答应的事，你办到了。我给你的评语改了一个词，原来写的是“危险”，现在是“可用”。"
   },
   {
    "if": "flag.a3_god_refused",
    "speaker": "巴兹伍德",
    "text": "你没答应我，东西倒是给了我。给你的评语我原来写的是“看不懂”，现在还是这三个字。"
   },
   {
    "if": "is.god && !flag.a3_god_promised && !flag.a3_god_refused",
    "speaker": "巴兹伍德",
    "text": "你那份头衔还空着的文书，我还收着。"
   }
  ],
  "choices": [
   {
    "text": "索取东坎诺氏族特许状",
    "if": "!flag.clan_charter",
    "effects": [
     "flag clan_charter",
     "item +clan_charter",
     "world room +1",
     "world embers -1",
     "rep clans +1"
    ],
    "result": "他一共写了七行，盖上了印。写到“氏族”两个字时，他停下来问你，兽人那边认不认印。你说认，只要印是真的就认。",
    "goto": "a3_14d"
   },
   {
    "text": "索取罗吉尔的赦免令",
    "effects": [
     "flag rogier_pardoned",
     "rep moon +1"
    ],
    "result": "赦令是早就写好的，只差盖印。他盖完了才说，皇上本来打算派人去塔兰顿杀罗吉尔，现在不派了。",
    "goto": "a3_14d"
   },
   {
    "text": "要求帝国给城约盖印",
    "if": "(flag.compact_league || flag.compact_corintar || flag.compact_free) && !flag.compact_sealed",
    "effects": [
     "flag compact_sealed",
     "world peace +1"
    ],
    "result": "你把城约的抄本递过去。他从头看完，说写得不好，不过印照盖。",
    "goto": "a3_14d"
   },
   {
    "text": "索要八百金冠",
    "effects": [
     "gold +800",
     "approval nixee +1"
    ],
    "result": [
     "给的是阿斯拉银行的票子，一共八张，每张一百。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "八百，这一单我认了！先落袋再说。"
     }
    ],
    "goto": "a3_14d"
   }
  ]
 },
 "a3_14d": {
  "id": "a3_14d",
  "title": "最后一份报告",
  "loc": "安本科斯特 · 盐田边的仓房",
  "text": [
   {
    "if": "flag.tilda_blindsided",
    "text": "你们瞒着蒂尔达行事，她走了，带走了账本、底稿和密码本，连薰衣草饼也没留下。床头只剩一张字条，上面那句“目前可靠”，后两个字已被她划掉。"
   },
   {
    "if": "flag.tilda_blindsided",
    "text": "后来听说，她搭了第一班船回威克斯堡。她到那里的第三天，黑犬佣兵团就接到了一桩活，要来追你们手里的东西。"
   },
   {
    "if": "!flag.tilda_blindsided",
    "text": "蒂尔达坐在仓房门口的盐袋上，在写这一趟的最后一份报告。她写了三页，撕掉了两页。"
   },
   {
    "if": "!flag.tilda_blindsided",
    "speaker": "蒂尔达",
    "text": "巴兹伍德先生要的是一份挑不出错的报告。照实写的话，报告是挑不出错，可你们就要有麻烦了。你说我该怎么写？"
   }
  ],
  "first": [
   {
    "if": "flag.tilda_blindsided",
    "then": [
     "rep throne -2"
    ]
   }
  ],
  "choices": [
   {
    "text": "收好字条，继续上路",
    "if": "flag.tilda_blindsided",
    "effects": [
     "approval nixee -1"
    ],
    "result": [
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "账还没对完她就走了。她不该走，可你也不该瞒着她。你们两头都坏了规矩。"
     }
    ],
    "goto": "a3_15"
   },
   {
    "text": "请她照实写报告",
    "if": "!flag.tilda_blindsided",
    "effects": [
     "flag tilda_true",
     "rep throne +1"
    ],
    "result": "她点点头，把撕掉的那两页捡回来抹平，夹进了报告里。",
    "goto": "a3_15"
   },
   {
    "text": "请她按你的说法写",
    "if": "!flag.tilda_blindsided",
    "check": {
     "skill": "deception",
     "alt": [
      "persuasion"
     ],
     "dc": 15,
     "mods": [
      {
       "if": "flag.a3_saw_tilda",
       "n": 2,
       "why": "你见过她掐纸边，知道她在乎什么"
      },
      {
       "if": "origin == 'sons' && !item.jubilee_invite",
       "n": -1,
       "why": "赏格单上有你的脸"
      }
     ]
    },
    "ok": {
     "text": "她听完你的说法，想了一会儿，在报告上写下了“目前可靠”四个字，又把“目前”两个字描得很粗。",
     "effects": [
      "flag tilda_false"
     ],
     "goto": "a3_15"
    },
    "fail": {
     "text": "她听你说完，夸你讲得很好，然后还是照实写了。你的这番说法她也一字不差地记了进去，算作附件。",
     "effects": [
      "flag tilda_true"
     ],
     "goto": "a3_15"
    }
   },
   {
    "text": "劝她烧掉密码本，留在东边",
    "if": "!flag.tilda_blindsided",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "party.nixee",
       "n": 1,
       "why": "妮克西跟她对过账"
      },
      {
       "if": "faction == 'crownless'",
       "n": 1,
       "why": "东坎诺缺一个记账的"
      }
     ]
    },
    "ok": {
     "text": "她把密码本一页一页撕下来，喂进了灯火里。烧完了，她拿手帕把灰包好，说东坎诺那边总得有个记账的人。",
     "effects": [
      "flag tilda_burned"
     ],
     "goto": "a3_15"
    },
    "fail": {
     "text": "她摇头说这三十年她就学会了一件事，报告得按时交。她照实写了，封好，交给了驿站。",
     "effects": [
      "flag tilda_true"
     ],
     "goto": "a3_15"
    }
   }
  ]
 },
 "a3_15": {
  "id": "a3_15",
  "title": "没有船",
  "art": "ev_anb_global_trade",
  "loc": "精灵码头 · 栈桥尽头",
  "text": [
   "航海志里那行方位指向一座神殿，远在西边大海的另一头。精灵码头的人告诉你，向西出航的船，他们还没见过哪一艘回来。",
   {
    "if": "party.garaele",
    "text": "加莱尔把整个码头都问遍了。十七个船老大里面，十六个说不去。第十七个肯去，可他开的价是一整条船的钱，外加他老婆往后的口粮。"
   },
   {
    "if": "!party.garaele",
    "text": "你们把整个码头都问遍了。十七个船老大里面，十六个说不去。剩下那一个喝醉了。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西蹲在栈桥尽头的缆桩上，两只脚一荡一荡的。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "不坐船也能去。有一扇门，是我东家看着的。他不收钱，他收别的东西。"
   },
   {
    "if": "!party.nixee",
    "text": "舱底区的药婆听说你们要往西去，从柜台下摸出一块树皮来。她说她年轻的时候认识一个森林地精，听那地精讲，深林里有一扇门，能通到很远的地方。要敲门得先写信，信要塞在一圈蘑菇的中间。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "卡斯特拉尔就是神王卡斯特洛斯。精灵在第四十年把他从祷词里划掉了，可我们人类一直拜到了今天，拜的是同一位。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "海上的路走不通。林子里的路是通的。"
   },
   {
    "if": "!party.tan && party.garaele",
    "speaker": "加莱尔",
    "text": "卡斯特拉尔，也就是卡斯特洛斯。精灵划掉的那一位，正是你们人类如今还在拜的那一位。海路不通，不过林子里还有路。"
   },
   {
    "if": "is.greenskin",
    "text": "码头上验文书的差役今天没有来。栈桥尽头只有你们和一群海鸥。"
   }
  ],
  "choices": [
   {
    "text": "问妮克西，她究竟替谁做事",
    "if": "party.nixee",
    "once": true,
    "effects": [
     "codex prince_of_fools",
     "codex verdant_veil"
    ],
    "result": [
     {
      "speaker": "妮克西",
      "text": "是愚者亲王，妖精善庭的一位王。他不爱打架，就爱改东西，改的是什么他从来不说。深林上面盖着一层帷幕，帷幕那头就是他的地方。"
     },
     {
      "speaker": "妮克西",
      "text": "从他的门过去，人会落在哪里、落在哪一年，都由不得自己，全凭他说了算。"
     }
    ]
   },
   {
    "text": "在旧海图上核对方位",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "码头的海图铺子里有一张四百年前的旧图，图的边缘画着精灵故土的海岸。你把方位对上去，正落在一条河的上游。那条河叫塞拉。",
     "effects": [
      "flag a3_sella_known"
     ]
    },
    "fail": {
     "text": "旧海图上那一片是空白的，只画了一条吐泡泡的鱼。"
    }
   },
   {
    "text": "请妮克西代笔，写信向愚者亲王借道",
    "if": "party.nixee",
    "effects": [
     "flag door_letter_sent",
     "quest q_door start",
     "codex prince_of_fools",
     "codex verdant_veil"
    ],
    "result": [
     "她在一块树皮上写好了你们出的价钱，又写了落款，还让你们按了手印。出城往东走，到了第一片林子旁边，她找着一圈蘑菇，把树皮塞在了正中央。",
     {
      "speaker": "妮克西",
      "text": "敲门的人不许催。"
     }
    ],
    "goto": "a3_16"
   },
   {
    "text": "照药婆的指点亲笔写信",
    "if": "!party.nixee",
    "effects": [
     "flag door_letter_sent",
     "quest q_door start",
     "codex prince_of_fools",
     "codex verdant_veil"
    ],
    "result": "你在树皮上写明了你们要去哪里，为什么去，付得起什么。出城往东走，第一片林子旁边就有一圈蘑菇。你把树皮塞在了正中央。",
    "goto": "a3_16"
   }
  ]
 },
 "a3_16": {
  "id": "a3_16",
  "title": "大公埋哪里",
  "art": "ev_excalibur",
  "loc": "月神之耳的一处坡地 · 花始月的月夜",
  "text": [
   "月神之耳的东坡面向大海。德利安指着一棵歪橡树说，阿登小时候在这里放风筝，有一次风筝挂在了树上，还是他爬上去取的。今夜正好有月光。",
   "阿登大公躺在车上，身上裹着新缝的布。三个人要他去三个地方：德利安要一座能立碑的坟，他的儿子罗吉尔只求别拿他当旗子，皇帝要他躺回花圃里去。",
   {
    "if": "item.sergeant_urn",
    "text": "你包里还有一只骨灰袋，是达拉斯缝的，里面是军士长。他生前说过想葬在月神之耳，还得是个有月亮的晚上。"
   },
   {
    "if": "flag.parents_carried",
    "text": "车下还放着两口小匣子，里面是加莱尔的父母守昔者夫妇的遗骨，从山下一路带出来的。"
   },
   {
    "if": "flag.a3_duel_won",
    "text": "你腰上挂着阿德蕾西娅的那把练习剑。德利安看见了，目光在剑上停了一下。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "地点你选。得挖多深，听我的。"
   },
   {
    "if": "party.garaele && flag.parents_carried",
    "speaker": "加莱尔",
    "text": "我父母不挑地方。只要有人记下来他们埋在了哪里，就够了。"
   },
   {
    "if": "is.greenskin",
    "text": "坡下的渔村里有人举着火把上来看了一眼，一看见你，又下去了。"
   }
  ],
  "choices": [
   {
    "text": "先为军士长下葬",
    "if": "item.sergeant_urn",
    "once": true,
    "effects": [
     "flag urn_buried",
     "var rites +1",
     "item -sergeant_urn",
     "quest q_o_sons done",
     "log 军士长，月神之耳东坡，有月亮的晚上。"
    ],
    "result": [
     "你在橡树下挖了个小坑。袋子放进去时，月亮刚好从云里出来了。他要的就是这个。",
     {
      "if": "!flag.urn_promised && party.tan",
      "speaker": "阿坦",
      "text": "当初他求你，你没答应，现在你倒把他埋了。那当初为什么不答应？"
     }
    ]
   },
   {
    "text": "让守昔者夫妇合葬",
    "if": "flag.parents_carried",
    "once": true,
    "effects": [
     "world unburied -1",
     "var rites +1",
     "approval garaele +2",
     "log 守昔者夫妇，月神之耳东坡，挨着。"
    ],
    "result": [
     "两口匣子并排放了下去。加莱尔拿炭笔在一块平石头上写了他们的名字和日子，连坑有多深也写上了。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "三尺二寸。我记下了。"
     }
    ]
   },
   {
    "text": "把阿登葬在坡上，立一块无字石碑",
    "effects": [
     "flag adenn_damesear",
     "world unburied -1",
     "var rites +1",
     "log 阿登·天枪，月神之耳东坡，石头上没刻字。"
    ],
    "result": [
     "坑挖了足足一个时辰。你们从坡上滚下来的石头里挑了一块面平的，立在他头那一边，上面没有刻字。德利安说不要紧，他认得。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "五尺深，狗刨不到。石头上没字，人也不会来刨。"
     }
    ],
    "goto": "a3_16b"
   },
   {
    "text": "装车东行，将遗体交给罗吉尔",
    "effects": [
     "flag adenn_rogier",
     "rep moon +2",
     "world unburied -1",
     "var rites +1",
     "log 阿登·天枪，送往塔兰顿，城堡里的一个龛。"
    ],
    "result": "你们把他重新裹好，绑在了车上。罗吉尔在信里说过，塔兰顿城堡里有一个龛，一直给他留着。德利安在车边站了一会儿，把手放在布上，又拿开了。",
    "goto": "a3_16b"
   },
   {
    "text": "把遗体送回花圃，补种郁金香",
    "effects": [
     "flag adenn_left",
     "rep throne +1",
     "world unburied +1",
     "approval ushka -2",
     "approval tan -1"
    ],
    "result": [
     "你们把他抬回了第七畦，把土填平，又把新的郁金香一株一株栽了回去。等到天亮，谁也看不出那一畦被人动过。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "挖出来又埋回去，这不叫埋，这叫藏。"
     }
    ],
    "goto": "a3_16b"
   }
  ]
 },
 "a3_16b": {
  "id": "a3_16b",
  "title": "坡上的火把",
  "loc": "月神之耳的一处坡地 · 当夜",
  "text": [
   "你们刚收工，坡脚的树林里就亮起一排火把。",
   "拉车的骡子拴在橡树上，是它先听见了动静。它两只耳朵竖起来，一个劲往后退，把缰绳都绷直了。",
   {
    "if": "flag.emperor_duel_won",
    "text": "来的是一伙路上的散兵，听说车上拉着圣骨，想抢了去卖给神殿。领头的连匹马都没有。"
   },
   {
    "if": "!flag.emperor_duel_won && flag.proof_bardswood",
    "text": "来的是月党的人，是不肯罢休的那几家。他们听说证据进了巴兹伍德的抽屉，就要把大公的尸骨抢回去当旗子。"
   },
   {
    "if": "!flag.emperor_duel_won && !flag.proof_bardswood",
    "text": "来的是黑犬佣兵团，就是当年洗劫安本科斯特发了财的那一伙。他们的队长是按人头结账的，今晚的人头就是你们。"
   },
   {
    "if": "flag.tilda_blindsided",
    "text": "火把后面还站着个穿长袍的，手里捏着一张纸，正对着纸上的画像找你。蒂尔达把你画得很像。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "谁也别想动他。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "十一个。不对，十二个。"
   }
  ],
  "choices": [
   {
    "text": "守住坡顶，迎击来人",
    "if": "flag.emperor_duel_won && !flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "夜坡上仅有你们的两盏马灯，月光从身后照来。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "stealth",
        "dc": 14
       },
       "success": {
        "text": "马灯一灭，坡上只剩下月亮，月亮又在你们背后。弩手只能对着一片黑影放箭，放了两轮，一支也没射中。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹灭了一盏，另一盏被风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "墓石立了百余年，底座已经松了。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "第一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓石晃了晃，没有倒。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "reward": [
      "gold +200"
     ],
     "win": {
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "fled": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "intro": "散兵举火冲上坡，高喊着要圣骨。问到圣骨是什么模样，却没人见过。",
     "enemies": [
      {
       "id": "sellsword",
       "n": 3,
       "name": "抢圣骨的散兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "散兵弩手"
      }
     ]
    }
   },
   {
    "text": "守住坡顶，迎击来人",
    "if": "flag.emperor_duel_won && flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "夜坡上仅有你们的两盏马灯，月光从身后照来。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "stealth",
        "dc": 14
       },
       "success": {
        "text": "马灯一灭，坡上只剩下月亮，月亮又在你们背后。弩手只能对着一片黑影放箭，放了两轮，一支也没射中。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹灭了一盏，另一盏被风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "墓石立了百余年，底座已经松了。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "第一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓石晃了晃，没有倒。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "reward": [
      "gold +200"
     ],
     "win": {
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "fled": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "intro": "散兵举火冲上坡。跟在他们后面的长袍人盯着你，他对圣骨没有兴趣。",
     "enemies": [
      {
       "id": "sellsword",
       "n": 3,
       "name": "抢圣骨的散兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "散兵弩手"
      },
      {
       "id": "rival_mage",
       "name": "照着画像找人的法师"
      }
     ]
    }
   },
   {
    "text": "守住坡顶，迎击来人",
    "if": "!flag.emperor_duel_won && flag.proof_bardswood && !flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "夜坡上仅有你们的两盏马灯，月光从身后照来。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "stealth",
        "dc": 14
       },
       "success": {
        "text": "马灯一灭，坡上只剩下月亮，月亮又在你们背后。弩手只能对着一片黑影放箭，放了两轮，一支也没射中。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹灭了一盏，另一盏被风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "墓石立了百余年，底座已经松了。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "第一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓石晃了晃，没有倒。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "reward": [
      "gold +200"
     ],
     "win": {
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "fled": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "intro": "老队长举着新缝的月牙旗：“大公该回弟兄们身边了。”",
     "enemies": [
      {
       "id": "black_hound_captain",
       "name": "月党的老队长"
      },
      {
       "id": "sellsword",
       "n": 3,
       "name": "不肯罢休的月党兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "月党弩手"
      }
     ]
    }
   },
   {
    "text": "守住坡顶，迎击来人",
    "if": "!flag.emperor_duel_won && flag.proof_bardswood && flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "夜坡上仅有你们的两盏马灯，月光从身后照来。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "stealth",
        "dc": 14
       },
       "success": {
        "text": "马灯一灭，坡上只剩下月亮，月亮又在你们背后。弩手只能对着一片黑影放箭，放了两轮，一支也没射中。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹灭了一盏，另一盏被风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "墓石立了百余年，底座已经松了。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "第一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓石晃了晃，没有倒。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "reward": [
      "gold +200"
     ],
     "win": {
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "fled": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "intro": "老队长举着月牙旗。他背后的长袍人拿着画像，仍在人群里找你。",
     "enemies": [
      {
       "id": "black_hound_captain",
       "name": "月党的老队长"
      },
      {
       "id": "sellsword",
       "n": 3,
       "name": "不肯罢休的月党兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "月党弩手"
      },
      {
       "id": "rival_mage",
       "name": "照着画像找人的法师"
      }
     ]
    }
   },
   {
    "text": "守住坡顶，迎击来人",
    "if": "!flag.emperor_duel_won && !flag.proof_bardswood && !flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "夜坡上仅有你们的两盏马灯，月光从身后照来。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "stealth",
        "dc": 14
       },
       "success": {
        "text": "马灯一灭，坡上只剩下月亮，月亮又在你们背后。弩手只能对着一片黑影放箭，放了两轮，一支也没射中。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹灭了一盏，另一盏被风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "墓石立了百余年，底座已经松了。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "第一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓石晃了晃，没有倒。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "reward": [
      "gold +200"
     ],
     "win": {
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "fled": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "intro": "黑犬队长举手，弩弦齐响。他按人头领钱，没打算留下活口。",
     "enemies": [
      {
       "id": "black_hound_captain",
       "name": "黑犬队长"
      },
      {
       "id": "sellsword",
       "n": 3,
       "name": "黑犬佣兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "黑犬弩手"
      }
     ]
    }
   },
   {
    "text": "守住坡顶，迎击来人",
    "if": "!flag.emperor_duel_won && !flag.proof_bardswood && flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "夜坡上仅有你们的两盏马灯，月光从身后照来。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "stealth",
        "dc": 14
       },
       "success": {
        "text": "马灯一灭，坡上只剩下月亮，月亮又在你们背后。弩手只能对着一片黑影放箭，放了两轮，一支也没射中。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹灭了一盏，另一盏被风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "墓石立了百余年，底座已经松了。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "第一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓石晃了晃，没有倒。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 800,
     "reward": [
      "gold +200"
     ],
     "win": {
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "fled": {
      "effects": [
       {
        "if": "flag.adenn_damesear || flag.adenn_rogier",
        "then": [
         "var rites -1",
         "world unburied +2"
        ]
       },
       "unflag adenn_damesear",
       "unflag adenn_rogier",
       "flag adenn_left",
       "flag a3_body_lost",
       "hp 1"
      ],
      "goto": "a3_17"
     },
     "intro": "黑犬队长手一抬，弩弦齐响。他身后的长袍人仍在拿画像找你。",
     "enemies": [
      {
       "id": "black_hound_captain",
       "name": "黑犬队长"
      },
      {
       "id": "sellsword",
       "n": 3,
       "name": "黑犬佣兵"
      },
      {
       "id": "crossbowman",
       "n": 2,
       "name": "黑犬弩手"
      },
      {
       "id": "rival_mage",
       "name": "照着画像找人的法师"
      }
     ]
    }
   }
  ]
 },
 "a3_17": {
  "id": "a3_17",
  "title": "写给死人的信",
  "art": "ev_lilac_wars",
  "loc": "阿德蕾西娅堡外的路口",
  "text": [
   {
    "if": "flag.a3_body_lost",
    "text": "那一夜你们没能守住。天亮时，坡上只剩一个空坑，车辙一路往西，是往皇宫去的。后来听人说，第七畦的郁金香又换过一茬。"
   },
   "德利安在阿德蕾西娅堡外的界石旁等你们，石上刻着堡名和去安本科斯特的里程。他一手拿着账本，一手提着钱袋，腋下还夹着那只黑木匣子。",
   {
    "if": "!flag.adenn_left && !flag.a3_no_deposit",
    "speaker": "德利安",
    "text": "余款六百，都在这里。"
   },
   {
    "if": "!flag.adenn_left && flag.a3_no_deposit",
    "speaker": "德利安",
    "text": "定金一百五，余款六百，加起来七百五。你们当初没收定金，我一起结了，数目点过了。"
   },
   {
    "if": "flag.adenn_left",
    "text": "他只付了一半的钱，把钱袋放在界石上，转身走开了。账本上的那一行，他没有画勾。"
   },
   "他打开匣子，从一摞信里抽出一封来。信没拆过，封皮上写着阿登的名字。",
   {
    "speaker": "德利安",
    "text": "你把它放进坟里也行，替我留着也行。这一封是写得最长的，写的是那年他故意输给我的那一场比武。"
   },
   {
    "if": "!flag.tilda_blindsided && !flag.tilda_burned",
    "text": "蒂尔达在路口跟你们分了手。她骑上驿站的骡子，账本绑在鞍子后面，走出去十几步又回过头来，冲你们喊了一声“目前可靠”。"
   },
   {
    "if": "flag.tilda_burned",
    "text": "蒂尔达没有走。密码本烧成的灰她拿手帕包着，揣在怀里。她说她要跟你们回东边去。"
   },
   {
    "if": "party.ushka && !flag.adenn_left",
    "speaker": "乌什卡",
    "text": "这一个算是埋完了。"
   },
   {
    "if": "party.ushka && flag.adenn_left",
    "speaker": "乌什卡",
    "text": "这一个还没埋完。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "分文不差！这是个认账的主顾，得记住他。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我都记下了。1452 年花始月，阿登·天枪第二次下葬。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "“他疼不疼”这句话，他问了七年。往后他可以不用再问了。"
   },
   {
    "if": "origin == 'sons' && flag.adenn_rogier",
    "text": "罗吉尔的回信到了，还是只有一行：收到了，他睡得很好。"
   }
  ],
  "first": [
   {
    "if": "flag.adenn_left && flag.a3_no_deposit",
    "then": [
     "gold +375"
    ]
   },
   {
    "if": "flag.adenn_left && !flag.a3_no_deposit",
    "then": [
     "gold +300"
    ]
   },
   {
    "if": "!flag.adenn_left && flag.a3_no_deposit",
    "then": [
     "gold +750"
    ]
   },
   {
    "if": "!flag.adenn_left && !flag.a3_no_deposit",
    "then": [
     "gold +600"
    ]
   },
   "item +delian_letter",
   "quest q_duke done",
   "rest short",
   {
    "if": "!flag.tilda_burned",
    "then": [
     "unflag tilda_with"
    ]
   }
  ],
  "choices": [
   {
    "text": "如实向皇帝报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.a3_report_done",
    "once": true,
    "effects": [
     "flag a3_report_done",
     "var honest_reports +1",
     "rep throne +1"
    ],
    "result": "你写了花圃，写了那三具尸首，也写了背上的那个口子。写到最后你停了片刻，又添了一句：皇上本人知道。"
   },
   {
    "text": "向皇帝提交假报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.a3_report_done",
    "once": true,
    "effects": [
     "flag a3_report_done",
     "var false_reports +1"
    ],
    "result": "你写的是花圃无异，船会无事，一路平安。写完你自己读了一遍，读着比真的还顺。"
   },
   {
    "text": "不给皇帝写报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.a3_report_done",
    "once": true,
    "effects": [
     "flag a3_report_done",
     "rep throne -1"
    ],
    "result": "信鸽在笼子里等了三天，你一个字也没写。到第四天你把它放了，腿上什么也没绑。"
   },
   {
    "text": "把德利安的信放进阿登的坟里",
    "effects": [
     "item -delian_letter",
     "flag a3_letter_to_grave",
     "approval ushka +1"
    ],
    "result": [
     {
      "if": "flag.adenn_damesear",
      "text": "你们又绕回月神之耳的东坡，把信压在了那块没刻字的石头下面。"
     },
     {
      "if": "flag.adenn_rogier",
      "text": "你把信塞进了裹尸布里，贴着他的胸口放好。等到了塔兰顿，信就跟他一起进龛。"
     },
     {
      "if": "flag.adenn_left",
      "text": "你托那个年轻骑士夜里去了一趟皇宫西墙，把信埋进了第七畦的土里，就在郁金香下面。"
     },
     "德利安合上匣子。里面如今空了一格，他照常把它锁好了。"
    ],
    "goto": "a3_18"
   },
   {
    "text": "替德利安保管这封信",
    "effects": [
     "approval garaele +1"
    ],
    "result": [
     "你把信揣进了怀里。德利安点点头，说那就替他留着吧，哪天想看了再拆。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "没拆过的信，也算是一份记录。"
     }
    ],
    "goto": "a3_18"
   }
  ]
 },
 "a3_18": {
  "id": "a3_18",
  "title": "九个冬天",
  "art": "ev_dark_forest",
  "loc": "东归的路上",
  "date": "1452年花始月末",
  "text": [
   "东行比西行顺当。路边仍是那些木桩，只是这次桩上的里数要倒过来读。",
   "路过弗里塞斯提尔时，镇口那根木桩旁边多了一捆柴，不知道是谁放的。镇上的磨坊又添了一盘磨，喊报人也换了个人，单子上罗吉尔的赏格还是一千。",
   {
    "if": "flag.god_shrine",
    "text": "木桩旁边那座神龛里供着的石头，不知谁给它披了一块红布。来往的车夫路过，都要伸手摸一下。"
   },
   {
    "if": "party.nixee",
    "text": "走到深林旁边那天，妮克西领着你们去看她塞信的那圈蘑菇。蘑菇早烂了，烂成了一圈黑泥。树皮还在原处，上面的字也还在，没有人来取过。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "东家回话从来不按日子。他说早，那就是早。"
   },
   {
    "if": "!party.nixee",
    "text": "走到深林旁边那天，你们去看了那圈蘑菇。蘑菇早烂了，烂成了一圈黑泥。树皮还在原处，没有人来取过。"
   },
   {
    "if": "party.tan",
    "text": "阿坦在林子旁边做晨祷。念到第四十句，他停了下来，看了看林子，又看看天。第四十一句“愿银龙再临”，他还是没念。"
   },
   {
    "if": "party.tan && flag.a3_lullaby",
    "text": "念完了祷词，阿坦哼起了姑祖母的那支摇篮曲，哼到那个不许唱的词就停住了。"
   },
   {
    "if": "party.garaele && flag.a3_sella_known",
    "speaker": "加莱尔",
    "text": "那座神殿在塞拉河的上游。我在海图上画了个圈，下笔太重，把纸都画破了。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "那就等。车我来修，轮子也该换了。"
   },
   {
    "if": "flag.a3_letter_to_grave",
    "text": "德利安的匣子里少了一封信。剩下的那些，还是没有人拆。"
   },
   {
    "if": "flag.a3_heirs_yes",
    "text": "你在仓房里说过，谱上没写的事也算数。这句话后来有人记在了祈愿簿的空栏里。"
   },
   {
    "if": "flag.a3_heirs_no",
    "text": "你在仓房里说过，谱就是谱。这句话后来有人记在了祈愿簿的空栏里，旁边还打了个问号。"
   },
   {
    "if": "flag.a3_creed_copied",
    "text": "神殿区的那两本信条抄本，听说又让人抄出了四本，已经传到西边去了。"
   },
   {
    "if": "flag.tilda_burned",
    "text": "蒂尔达坐在车尾，拿着一本新账本记路上的里数。她说旧账既然烧了，新账就得从头记起。"
   },
   "愚者亲王的回信，是九个冬天以后才到的。"
  ],
  "first": [
   "level 8",
   "quest q_cart stage 4"
  ],
  "next": "a4_01"
 }
};
