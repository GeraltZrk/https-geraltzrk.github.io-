// s1444 / act3.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a3_01": {
  "id": "a3_01",
  "title": "一匣子没寄出的信",
  "chapter": "第三幕 · 郁金香底下的大公",
  "art": "ev_lilac_wars",
  "loc": "卡斯托纳斯 · 门板桌",
  "date": "1451年秋",
  "text": [
   {
    "if": "flag.a3_ushka_went",
    "text": "乌什卡没能等到这一天。头天夜里她把刀和锤擦了一遍，背在身上，往烂刀氏族的方向走了。临走前她在门板边上刻了一道，跟她木签上的刻痕一样深。"
   },
   "门板桌还摆在下城那块空地上。底下垫的两只酒桶换过一回，门板还是原来那一块。七年下来，桌面上全是刀痕，蓝牙叫人沿边钉了一圈铁皮，省得再有人掀桌子。",
   "这年秋天，头一车萝卜刚卸完，有个穿灰斗篷的年轻骑士牵着马进了空地，马跑得满嘴白沫。他的剑柄上缠着铜丝，那是会法术的骑士才用的。他一进来就问，替人收尸迁坟的是哪几位。",
   {
    "if": "party.ushka",
    "text": "乌什卡朝板车抬了抬下巴。"
   },
   {
    "if": "!party.ushka",
    "text": "门板桌边上的人一齐朝板车看了过去。"
   },
   {
    "cls": "letter",
    "text": "骑士带来一封信，信上是这么写的：“诸位，敝人有个朋友，七年前叫人埋在了一处不该埋的地方，那地方是皇宫的花圃。想请诸位把他请出来，另找一处能立碑的地方安葬。随信奉上定金一百五十金冠，已点过两遍，余款事成后结清。”落款是阿德蕾西娅骑士团的大团长，德利安·西尔·阿兰嫩。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "七年了。花圃的土松，压不坏骨头，人应该还是全的。"
   },
   "到了下午，多米尼克也来了，怀里抱着一本抄好的科琳信条，想托你们带到安本科斯特的神殿区去。蓝牙跟在他后头，手里拿着一张盖了科琳塔尔印的路条。",
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
    "text": "三天前，塔兰顿的信差先到了一步，给你捎来一张纸。上头是罗吉尔的字，只有一行：别让人拿我父亲的尸骨当旗子。"
   },
   {
    "if": "origin == 'wex'",
    "text": "巴兹伍德的信也到了，是夹在一捆运盐的单子里送来的。上头写着：回来述职，顺路。"
   },
   {
    "if": "origin == 'wex' && (flag.report1_false || var.false_reports >= 2)",
    "text": "巴兹伍德的信底下另起了一行，字小了一号：带上你的抄本。"
   },
   {
    "if": "is.god",
    "text": "骑士身上还带着第二封信，封皮上写着“致车上那位”。里头只有一句话：若阁下真是神，敝人另有一事请教，见面再说。"
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
    "text": "收下多米尼克的信条",
    "once": true,
    "effects": [
     "flag creed_carried",
     "item +corinite_creed"
    ],
    "result": [
     "多米尼克把书递过来，忽然又抽回去，翻到最后一页看了一眼，才重新递给你。",
     {
      "speaker": "多米尼克",
      "text": "头一页是愚足抄的，字丑了些，意思没抄错。"
     }
    ]
   },
   {
    "text": "收下蓝牙的路条",
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
      "text": "帝国那边见了绿皮就要查文书，这张路条别弄丢了。"
     }
    ]
   },
   {
    "text": "把银月徽亮给骑士看",
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
    "text": "当着大家拆开巴兹伍德的信",
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
      "text": "规矩第四条，东家的信得自己一个人看！你这么干要坏行情的。"
     },
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "我觉得这样挺好。"
     }
    ]
   },
   {
    "text": "收下定金，上路",
    "effects": [
     "quest q_duke start",
     "gold +150",
     "approval nixee +1"
    ],
    "result": "骑士把钱袋放在门板上，又从怀里掏出一张单子，请你在“收讫”两个字底下按手印。",
    "goto": "a3_02"
   },
   {
    "text": "告诉骑士：事毕再结账，定金带回去",
    "effects": [
     "quest q_duke start",
     "flag a3_no_deposit",
     "approval ushka +1",
     "approval nixee -1"
    ],
    "result": [
     "骑士愣了一下，把钱袋系回了马鞍上。他说大团长管了五十年的仓库，有人把钱往回推，这还是头一回。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "一百五十金冠，就这么推回去了？这一笔我记着，算在你头上。"
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
   "二十七年前，东坎诺的人就是顺着这条路往西逃难的。如今你们也走这条路，板车的轮子正压在当年的车辙里。路边每隔一段就立着一根木桩，上头刻着里数。那是难民营的人刻的，好让后头来的人知道离下一口粥还有多远。",
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
    "text": "单子底下贴着一排画像，第四张画的就是你。鼻子画歪了，下巴倒画对了。"
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
    "text": "阿坦在镇口站了很久。他就是在这儿出生的。那年营里有四百顶帐篷，他娘住的是哪一顶，他说不上来。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "镇口还坐着个书办，面前摆着一张小桌子。他一看见车上有绿皮，就伸手要文书。"
   }
  ],
  "choices": [
   {
    "text": "陪阿坦去磨坊翻营里的旧名册",
    "if": "party.tan",
    "once": true,
    "effects": [
     "approval tan +1"
    ],
    "result": [
     "磨坊的账房翻出来一本发了霉的册子。1428 年那一页上记着十一个叫“卡斯坦”的新生儿，后头都写着帐篷的排号。阿坦一个一个数完，挑了第七个，说就当是这一个吧。",
     {
      "speaker": "阿坦",
      "text": "一共十一个。我数了两遍。"
     }
    ]
   },
   {
    "text": "给车边的病人治病",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag god_shrine",
     "rep temples -1"
    ],
    "result": [
     "你从晌午一直治到天黑。那个磨坊伙计是自己走回家的，第二天还扛了两袋面来谢你。",
     "后来听往东去的车夫说，你们走后不到七天，镇口那根木桩旁边就搭起了一个神龛，里头供着你坐过的一块石头。附近神殿的人来看过，脸色很难看。",
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
    "text": "把蓝牙的路条递给书办",
    "if": "(is.greenskin || party.ushka || party.nixee) && item.safe_conduct",
    "result": "书办举起路条，对着太阳看了看印，在你们每个人的名字后头画了一个圈。车上那个绿皮的名字他写错了，也没人去纠正他。",
    "goto": "a3_02b"
   },
   {
    "text": "跟书办说车上的绿皮是抬尸首的苦力",
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
     "text": "书办说苦力也得有文书。你们只好绕开镇子，在磨坊后头的泥地里多走了一天半。",
     "effects": [
      "flag a3_detour"
     ],
     "goto": "a3_02b"
    }
   },
   {
    "text": "不进镇，从磨坊后头的泥路绕过去",
    "if": "is.greenskin || party.ushka || party.nixee",
    "effects": [
     "flag a3_detour"
    ],
    "result": "泥深得没过脚踝。你们多走了一天半，车轴里塞满了烂草。",
    "goto": "a3_02b"
   },
   {
    "text": "在镇上买两个饼，接着往西走",
    "if": "!(is.greenskin || party.ushka || party.nixee)",
    "effects": [
     "gold -2"
    ],
    "result": "饼是黑麦做的，里头夹着一片马肉。阿巴兰西边的人向来吃马肉，谁也不当回事。",
    "goto": "a3_02b"
   }
  ]
 },
 "a3_02b": {
  "id": "a3_02b",
  "title": "林子边上的军士",
  "loc": "阿巴兰 · 往西的大路",
  "text": [
   "出了镇子往西走了半天，路边的林子里飘出来一股烤马肉的味儿。林子里有十来个人围着一堆火，都是丁香战争打完以后没人管的散兵。他们号衣上的袖标都拆掉了，从布的颜色看，有玫瑰党的红，也有月党的蓝。一辆干草车横在路当中。",
   "领头的军士站了起来，嘴里还嚼着东西。他没拔刀，先看了看车，又看了看你们脚上的鞋，最后才看钱袋。",
   {
    "speaker": "军士",
    "text": "仗打完了，也没人来告诉我们该往哪儿去。过路钱八十。不给也行，我这帮弟兄正闲着。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "他们也没地方去，跟当年营里的人一样。"
   },
   {
    "if": "is.greenskin",
    "text": "他一看见你，嘴里那口肉就不嚼了。玫瑰党他打过，月党他也打过，绿皮还从来没见过。"
   }
  ],
  "choices": [
   {
    "text": "劝他带弟兄们去东坎诺找活",
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
     "text": "他说东坎诺的饷是拿兽人脑袋换的，他宁可留在这儿收过路钱。说话间，他身后的弩手已经把弦挂上了。",
     "combat": {
      "title": "林子边上的散兵",
      "intro": "军士往火里啐了一口。两个弩手退到干草车后头，挂上了弦。",
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
        "desc": "那辆车就停在弩手身后，草晒了整整一夏天。",
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
    "text": "数八十金冠给他",
    "req": "gold >= 80",
    "reqText": "钱不够八十",
    "cost": {
     "gold": 80
    },
    "effects": [
     "flag a3_paid_road"
    ],
    "result": "他把钱数了两遍，塞进靴筒里，才叫人把干草车推开。",
    "goto": "a3_03"
   },
   {
    "text": "摘下兜帽，朝火边走两步",
    "tag": "绿皮",
    "if": "is.greenskin",
    "check": {
     "skill": "intimidation",
     "dc": 13
    },
    "ok": {
     "text": "你一句话也没说。火边最先站起来的是那两个弩手，他们一步一步退进了林子。军士骂了一声，也跟着退了，干草车留在了路上。",
     "effects": [
      "flag a3_scared_road"
     ],
     "goto": "a3_03"
    },
    "fail": {
     "text": "军士把那口肉咽了下去，说绿皮他是没打过，可绿皮的赏格单他见过。说完就拔了刀。",
     "combat": {
      "title": "林子边上的散兵",
      "intro": "军士往火里啐了一口。两个弩手退到干草车后头，挂上了弦。",
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
        "desc": "那辆车就停在弩手身后，草晒了整整一夏天。",
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
    "text": "拔刀",
    "combat": {
     "title": "林子边上的散兵",
     "intro": "军士往火里啐了一口。两个弩手退到干草车后头，挂上了弦。",
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
       "desc": "那辆车就停在弩手身后，草晒了整整一夏天。",
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
  "loc": "阿巴兰边上的一间驿站",
  "text": [
   {
    "if": "flag.a3_robbed",
    "text": "你们进驿站的时候钱袋是空的，骡子也让散兵牵走了，车是几个人轮流拉过来的。"
   },
   "这家驿站的马厩比客房还大，客房一共才三间。最好的那间门口坐着个帝国来的侏儒，两只脚够不着地，膝盖上摊着一本账，比她半个人还宽。看见你们进门，她合上账本跳下凳子，个头刚够到桌沿。",
   {
    "speaker": "蒂尔达",
    "text": "我叫蒂尔达·奥布·敏菲吉特，是巴兹伍德先生派来盯着你们的。这句话本来该瞒着，可我觉得瞒着也没用。哪张床归我？"
   },
   {
    "if": "flag.a3_road_fought",
    "speaker": "蒂尔达",
    "text": "林子边上那一仗我已经记下了，倒下的我数的是六个。你们数的要是五个，我就改成五个。"
   },
   {
    "if": "flag.a3_sergeant_east",
    "speaker": "蒂尔达",
    "text": "你们劝走了十来个散兵，他们往东去了，这个我也记下了。人数是估的，可能估少了。"
   },
   {
    "if": "flag.a3_paid_road",
    "speaker": "蒂尔达",
    "text": "那八十金冠的过路钱，我记在“杂项”底下了。巴兹伍德先生最爱看杂项。"
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
    "text": "你在门板桌边上把巴兹伍德先生的信念出来了，这个他早料到了。他说你准会念，还跟人赌了一个铜子。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西把自己的账本也摊开了，两个人头碰头对了一遍账。对到一半，妮克西说自己多收了蒂尔达两个铜子的灯油钱，蒂尔达说是三个。最后谁也没退给谁。"
   },
   {
    "if": "is.god",
    "text": "她的差事单里夹着一页纸，是巴兹伍德先生亲手写的，专门问你的事。头一条问能不能杀得死，第二条问纳不纳税，第三条问站在哪一边。第三条的字还描粗了。"
   },
   {
    "if": "race == 'gnome'",
    "text": "你们两个侏儒凑在一起，她说话又快了一倍，旁人一句也插不进去。"
   },
   {
    "if": "is.greenskin",
    "speaker": "蒂尔达",
    "text": "你的文书我得先看一眼。不是信不过你，是我得在本子上写“已验”两个字。"
   }
  ],
  "choices": [
   {
    "text": "让她跟着",
    "effects": [
     "flag tilda_with"
    ],
    "result": "她把账本塞进板车，给自己挑了一个闻不到味儿的角落，又从包里掏出一块薰衣草饼压在账本上。",
    "goto": "a3_04"
   },
   {
    "text": "半夜套车，甩掉她",
    "check": {
     "skill": "stealth",
     "dc": 16,
     "party": true
    },
    "ok": {
     "text": "你们半夜里赶了二十里路。可到了第三天中午，蒂尔达骑着一头驿站的骡子追上来了，账本上多了一行：曾试图脱队。",
     "effects": [
      "flag tilda_with",
      "rep throne -1"
     ],
     "goto": "a3_04"
    },
    "fail": {
     "text": "天亮以前你们赶到了下一站。蒂尔达已经坐在门口了，比你们早到半个时辰，面前那碗麦粥还冒着热气。",
     "effects": [
      "flag tilda_with"
     ],
     "goto": "a3_04"
    }
   },
   {
    "text": "在马厩的干草上歇一晚",
    "if": "!flag.a3_detour",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "客房里有臭虫，马厩里只有马。你们睡了马厩。"
   },
   {
    "text": "跟她对一遍你这些年的报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && var.false_reports >= 1",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14
    },
    "ok": {
     "text": "她每念一封，指甲就在纸边上掐一下，念到你造假的那几封，掐得最深。原来她早就知道哪几封是假的，只是没说。",
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
    "text": "跟她对一遍你这些年的报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && var.false_reports < 1",
    "once": true,
    "effects": [
     "rep throne +1"
    ],
    "result": "对完以后，她在每一封后头都画了个勾。"
   },
   {
    "text": "跟她扯两句各自家里是哪一支的",
    "tag": "侏儒",
    "if": "race == 'gnome'",
    "once": true,
    "effects": [
     "rep throne +1"
    ],
    "result": "扯到第三代，你们俩才发现，两家的曾祖母为一只铜壶打过官司。她在本子上写了一句：可靠（亲戚）。"
   },
   {
    "text": "替她把那页上的三条答了",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag a3_god_answered",
     "rep throne +1"
    ],
    "result": [
     "你一条一条答了。头一条，不知道，还没人杀成过。第二条，从来没人来收过税。第三条，站在这辆车这一边。",
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
   "在埃斯玛利亚，河就是路。丁香战争打了几十年，争王位的两边一边叫月党，一边叫玫瑰党。仗打完的头一年，这儿的人办起了荆月船会，两党的人家各出几条船，并排拴在河心。大家戴着面具，隔着船舷比谁的衣裳好看。",
   "你们上的是一条租来的平底船，船头挂着一弯褪了色的月牙，船尾插着一枝干玫瑰，两边都不得罪。船上的女人穿的都是露肩的裙子，男人一律是高筒靴。",
   "伊斯特拉洛尔的女公爵奥坎娜坐在船尾。她没戴面具，穿着一件扈从的短外套，正拿匕首削梨。",
   {
    "if": "party.tan",
    "text": "天刚亮，阿坦就在甲板上做起了晨祷。船一晃，他旁边三个戴面具的公子哥一齐扶着栏杆吐了起来。他念到第二十句停下了，等他们吐完才接着念。"
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
    "text": "凑到席上，说几句好听的",
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
     "text": "你夸起一位月党夫人的袖口，才夸到第三句，她就叫人给你添了把椅子，还替你倒了一杯李子白兰地。",
     "effects": [
      "flag a3_seated"
     ],
     "goto": "a3_04b"
    },
    "fail": {
     "text": "他们把你当成了请来唱曲的，赏了你两个铜子，叫你站到桅杆边上去。你也算留下来了，只不过得站着。",
     "effects": [
      "rep moon -1"
     ],
     "goto": "a3_04b"
    }
   },
   {
    "text": "不凑热闹，径直去船尾找奥坎娜",
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
   "太阳偏西了，两边的船上开始挂灯。灯绳从桅杆一直拉到船舷，纸灯笼一串一串的，都还没点上。",
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
    "text": "奥坎娜看了你一眼，过一会儿又看了一眼，后来就不看了。她当扈从的时候见过的怪事多了。"
   }
  ],
  "choices": [
   {
    "text": "看看席上都是些什么人",
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
    "text": "由着他们看你的银月徽",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "flag a3_spotted"
    ],
    "result": "有个戴面具的盯着你领口的银月徽看了半天，然后跟另外两个人使了个眼色。这三个人的面具都是新的，靴子却都是旧的。"
   },
   {
    "text": "去摸那个公子手里的请柬",
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
    "text": "编个故事，哄他把请柬送你",
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
     "text": "你说你有个舅舅死在了丁香战争里，生前最想进一回皇宫。他听得哭了起来，把帖子塞给了你，还塞给你一块手帕。",
     "effects": [
      "item +jubilee_invite"
     ]
    },
    "fail": {
     "text": "他听完拍了拍你的肩膀，说他也有个死了的舅舅，接着叫你请他喝了三杯。帖子他揣回了怀里。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "问奥坎娜：还想不想为阿登再打一场丁香战争",
    "if": "!flag.a3_aucanna_talked",
    "once": true,
    "effects": [
     "flag a3_aucanna_talked",
     "rep moon -1"
    ],
    "result": [
     "她手里的梨皮一下子削断了。",
     {
      "speaker": "奥坎娜",
      "text": "我给阿登大公牵过马。你要是来劝我再打一仗的，就请回吧。"
     }
    ]
   },
   {
    "text": "告诉奥坎娜：你们要去把阿登的尸骨请出来",
    "if": "!flag.a3_aucanna_talked",
    "once": true,
    "effects": [
     "flag a3_aucanna_talked",
     "flag a3_aucanna_told",
     "rep moon +1"
    ],
    "result": [
     "她把匕首插回了靴子里，梨搁在膝盖上，半天没吃一口。",
     {
      "speaker": "奥坎娜",
      "text": "我十九岁给他当扈从。那年开春他把我打发回了家，我父亲和我哥哥却留在宫里替他战死了。你们要是找着了他，先来告诉我一声。"
     }
    ]
   },
   {
    "text": "等着掌灯",
    "goto": "a3_04c"
   }
  ]
 },
 "a3_04c": {
  "id": "a3_04c",
  "title": "掌灯",
  "loc": "埃斯玛利亚 · 一条游船",
  "text": [
   "灯笼才点到一半，隔壁那条玫瑰党的船上有三个人翻过船舷跳了过来，落地一点声音都没有。他们面具都没摘，刀已经拿在手里了。",
   "他们不看奥坎娜，也不看谁的衣裳。领头的那个拿刀尖挑开了你们堆在舱口的油布，油布底下是装着德利安那封信的匣子和你们的铺盖卷。",
   {
    "speaker": "领头的面具",
    "text": "把德利安的信交出来，你们接着喝你们的酒。"
   },
   "两边船上的人还在比衣裳。有人朝这边举了举杯，以为是请来的班子在演戏。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "价都不开就动刀子？规矩第三条，碰上这种人用不着讲规矩。"
   },
   {
    "if": "flag.a3_spotted",
    "text": "这三双旧靴子你认得。奥坎娜身边坐着两个伊斯特拉洛尔的女兵，这会儿正看着你。"
   }
  ],
  "choices": [
   {
    "text": "朝奥坎娜的女兵递个眼色",
    "if": "flag.a3_spotted",
    "combat": {
     "title": "游船上的刀",
     "intro": "先动手的是奥坎娜的人。有个戴面具的还没站稳，就叫两个女兵架起来扔进了河里。剩下那两个一时愣住了。",
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
       "desc": "一整串纸灯笼掉进河里，这层甲板就全黑了。",
       "check": {
        "skill": "sleight",
        "dc": 13
       },
       "success": {
        "text": "刀子一过，灯笼一串一串栽进了河里。他们本来就慌了手脚，这下更是找不着北了。",
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
       "desc": "栏杆是雕花的，好看是好看，可不结实。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "栏杆一断，两个戴面具的跟着翻进了河里，过了好一会儿才爬上来，面具都不见了。",
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
    "text": "护住舱口",
    "combat": {
     "title": "游船上的刀",
     "intro": "来的是三个人，面具都没摘。领头的那个拿着一把很短的刀，刀身涂黑了，照不出灯光。",
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
       "desc": "一整串纸灯笼掉进河里，这层甲板就全黑了。",
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
       "desc": "栏杆是雕花的，好看是好看，可不结实。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "栏杆一断，两个戴面具的跟着翻进了河里，过了好一会儿才爬上来，面具都不见了。",
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
   "阿德蕾西娅堡的仓房比礼拜堂还大。德利安是在仓房里见的你们，手里还拿着一本出入库的册子。他今年七十三岁，脸上横着一道旧疤，那是三十多年前在威斯达姆打仗落下的。",
   {
    "speaker": "德利安",
    "text": "长剑四百一十二把，在册的也是四百一十二把。锁甲三百零七领，在册的是三百零九领，少的那两领借给厨房当筛子了。你们坐。"
   },
   "合上册子以后，他才说出要请的是谁。那人叫阿登·天枪，是达梅里亚的大公，也是蓝牙的外祖父。七年前他死在皇宫的王座厅里，就埋在花圃底下。",
   {
    "if": "flag.a3_name_early",
    "text": "这个名字你在门板桌边上就听骑士说过了。可从德利安嘴里说出来，到底不一样。"
   },
   {
    "speaker": "德利安",
    "text": "1444 年深秋我进宫当值，过了几个礼拜，看见花圃里的郁金香换了一茬。那会儿还没到种花的时候，土却是新翻的。我就知道他埋在那底下了。后来我把差事交给副手，自己回了堡里。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "堡门口的骑士把路条翻来覆去看了三遍。直到德利安出来说这几位是他请的，骑士才把剑收了回去。"
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
    "text": "问他为什么等了七年",
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
      "text": "七年，在我们精灵那儿不算久。可在你们这儿，够一个人把主意改上三回了。"
     }
    ]
   },
   {
    "text": "问他那匣子信",
    "once": true,
    "effects": [
     "approval nixee +1"
    ],
    "result": [
     "桌角上放着一只黑木匣子，锁扣已经磨得发亮了。你一问，他就把手按在了匣子上。",
     {
      "speaker": "德利安",
      "text": "这个不能给你们看。里头都是我这些年写给他的信，一封也没寄出去。他还没看过，别人不能先看。"
     },
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "没寄出去的信不值钱，也不欠谁的钱。这个我不打听了。"
     }
    ]
   },
   {
    "text": "看他摊开的那张花园图",
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
     "text": "图是他凭记性画的，花畦都照仓位编了号，第七畦上画着一个小圈。他把图卷起来递给了你，别的什么也没说。"
    }
   },
   {
    "text": "问他十六岁那年的事",
    "tag": "贵族",
    "if": "is.noble",
    "once": true,
    "effects": [
     "rep moon +1"
    ],
    "result": [
     "他看了你好一会儿，大概是从你的站相认出了你的出身。",
     {
      "speaker": "德利安",
      "text": "他十六岁那年偷偷跑到洛伦特去看比武会，是我替他牵的马。他把洛伦特国王挑下了马。国王有个私生子，喝醉了带人来找他算账，我替他挡了一拳。就挡了那么一拳，他记了我一辈子。"
     }
    ]
   },
   {
    "text": "答应跟校场上那个年轻骑士比一场",
    "tag": "试炼派",
    "if": "faction == 'tried'",
    "once": true,
    "result": [
     "校场上有个年轻骑士一直盯着你们看。这会儿他走了过来，说想跟东边来的收尸人比试比试。德利安叹了口气。",
     {
      "speaker": "德利安",
      "text": "照规矩来，点到为止。我见了血会晕，就不看了。"
     }
    ],
    "goto": "a3_05b"
   },
   {
    "text": "揣好图，动身去安本科斯特",
    "goto": "a3_06"
   }
  ]
 },
 "a3_05b": {
  "id": "a3_05b",
  "title": "照规矩比一场",
  "loc": "阿德蕾西娅堡 · 校场",
  "text": [
   "校场上的沙子，东半边是新铺的，西半边早就踩实了。几个白胡子的老骑士抱着胳膊靠在木栏上看。",
   "年轻骑士先报了自己的名字，又报了骑士团的誓词：不领地，不受衔，不娶不嫁，不留子嗣。报完，他问你有没有誓词要报。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "有。抬起来的要放下，放下了的不许再起来。"
   },
   {
    "if": "is.martial",
    "text": "他起手用的是阿德蕾西娅的路数，剑尖压得很低，好腾出工夫念咒。可他念咒的时候哪儿有破绽，你一眼就看得出来。"
   },
   "德利安背过身去，数起了墙根底下的草料捆。"
  ],
  "combat": {
   "title": "照骑士团的规矩",
   "intro": "年轻骑士把剑举到眉前，剑身上亮起一行淡蓝色的字，转眼又灭了。照规矩，先见血的算输。",
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
     "desc": "校场东半边昨天下过雨，沙子是新铺上去的，滑。",
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
   "blurb": "这是矮人开的铺子，门口挂的牌子上写着：金冠买得到的最好的家伙。",
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
   "安本科斯特，人称“世人所欲之城”。四百五十年前，精灵残存的舰队就是在这儿靠的岸，城名也是他们起的。七八年前威克斯的兵在这儿抢了三天，也有人说抢了几个月。如今它是个自由市，市政厅门口站的是民兵，可隔着半个岛就是威克斯的驻军。",
   "城里分成好几块。神殿区有钟声，锻炉街有锤子声，精灵码头的宅子都架在搁浅的方舟上，帝国区围着高墙。舱底区是穷人住的地方，占了全城的四分之一，城里的差役进去过好几回，有几回就没再出来。",
   {
    "if": "is.caster && !is.god",
    "text": "城门口贴着一张告示：凡施法者，入城三日内到魔导院分署登记，立誓约，领牌子。不登记就在城里施法的，会招来一队武卫。"
   },
   {
    "if": "is.god",
    "text": "魔导院的人比你们先到了城门口。领头的法师捧着一本 1348 年的旧例，翻到折了角的那一页。上头记的是莉安农女皇，她五岁那年拿一道法术罩住了整座城，后来死在了自己的护卫手里。法师照着书念道：立誓约，或者离岛。"
   },
   {
    "if": "is.god && party.garaele",
    "speaker": "加莱尔",
    "text": "他们真正怕的是一百年前的那位女皇，不见得是怕你。只是这两样，他们自己也分不清了。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "每过一道城门都要验一回文书。守门的先看脸，再看纸，看完纸还要再看一回脸。"
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
    "text": "去神殿区，交信条，找编年史家会",
    "once": true,
    "goto": "a3_06c"
   },
   {
    "text": "去舱底区，城里最穷的人住的地方",
    "goto": "a3_06b"
   },
   {
    "text": "去锻炉街的酒馆，打听一个喝了七年的威克斯老兵",
    "once": true,
    "goto": "a3_09"
   },
   {
    "text": "去精灵码头，找加莱尔的姑祖母",
    "once": true,
    "goto": "a3_07"
   },
   {
    "text": "去帝国区，威克斯的公事房",
    "once": true,
    "goto": "a3_10"
   },
   {
    "text": "看乌什卡在木签上刻新的一条",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "quest q_ushka stage 3",
     "approval ushka +1"
    ],
    "result": [
     "她拿刀尖在第十一条底下又刻了一道短的，刻完吹了吹木屑。",
     {
      "speaker": "乌什卡",
      "text": "这是帝国的规矩：先递文书，后说话。这一条不是骑士的规矩，不算第十二条。"
     }
    ]
   },
   {
    "text": "在城北找家客栈，睡个整觉",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "客栈的床是带床腿的。这样的床你们已经很久没睡过了。"
   },
   {
    "text": "去阿斯拉银行的分号",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge'",
    "once": true,
    "effects": [
     "flag a3_bank",
     "gold +80"
    ],
    "result": [
     "柜台后头的矮人看了一眼你的账页，转身从后屋抱出来一本更厚的。原来兵团在这家分号存着一笔银子，你签了字，取走了你的一份。",
     {
      "speaker": "账房",
      "text": "还有一件事。皇宫今年换了花匠，新花匠正好是我们放过款的那一家。花匠夜里几点收工，我这儿有数。"
     }
    ]
   },
   {
    "text": "去魔导院分署登记",
    "tag": "施法者",
    "if": "is.caster && !is.god",
    "once": true,
    "effects": [
     "flag a3_registered",
     "gold -10"
    ],
    "result": "登记要交十个金冠。武卫拿一根绳子量了量你的手腕，问你会几种法术。你一样一样说了，他只记了一半。最后你领到一块铜牌，上头刻着你的名字，还刻错了一个字。"
   },
   {
    "text": "当场烧了他的封条和誓约信物",
    "tag": "神",
    "if": "is.god && !flag.a3_god_measured",
    "once": true,
    "effects": [
     "flag a3_god_burned",
     "rep throne -2",
     "rep temples -1"
    ],
    "result": "封条和铜牌在他手里烧成了一撮灰，他的手一点也没伤着。城门口的人散得比来的时候还快。当天夜里，各座法师塔都收到了大魔导师的通函，上头画着你的长相。"
   },
   {
    "text": "由着魔导院的人把你量一遍",
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
    "text": "庆典前夜，进宫",
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
   "blurb": "铺子开在一条船的底舱里，卖的东西都装在海螺壳里。",
   "stock": [
    "healing_potion",
    "antidote",
    "heroism_draught",
    "gnomish_smoke_bomb",
    "bandage"
   ]
  },
  "text": [
   "舱底区的房子都是拿旧船板钉的，一层压着一层，越往下越黑。码头边有一排木架子，底下躺着十几具没人认领的尸首，都拿帆布裹着。有的已经放了一个月，潮水一涨，帆布就要湿到半腰。",
   "这儿的药婆说，舱底区的人死了没地方埋。进坟地要钱，进神殿也要钱。扔进海里，第二天潮水又给送回来。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "泡了一个月的不好烧，得埋。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "一共十四个。我数过了。"
   },
   {
    "if": "is.greenskin || party.ushka || party.nixee",
    "text": "药婆的柜台底下压着一沓路条，印是真的，上头的字是假的。"
   },
   {
    "if": "flag.bilge_graves",
    "text": "码头背后那片坡上有十四个新土包，一个挨着一个。有人在上头插了野花，花已经蔫了。"
   }
  ],
  "choices": [
   {
    "text": "出六十金冠，花两天给那排无名尸立坟",
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
     "坟地选在码头背后一片没人要的坡上，那儿石头多，土少。你们挖了两天，乌什卡一个人就挖了六个。没有名字可刻，阿坦就在每块石头上划了一道。划完第十四道，他念了晨祷的头四句。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "埋得够深了，潮水够不着。"
     }
    ]
   },
   {
    "text": "挨家敲门，凑份子立坟",
    "tag": "无冕派",
    "if": "faction == 'crownless' && !flag.bilge_graves",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "舱底区的人没有钱，可是有力气。头一天来了九个人帮着挖，第二天来了二十个，还有个老头扛来一块门板当碑。到头来你们只出了买石灰的钱。",
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
     "text": "你们敲了一下午的门，只凑到九个铜子，剩下的是你自己掏的。坟还是立起来了。",
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
    "text": "从药婆那儿买一张路条",
    "if": "(is.greenskin || party.ushka || party.nixee) && !item.safe_conduct",
    "once": true,
    "cost": {
     "gold": 80
    },
    "effects": [
     "item +safe_conduct"
    ],
    "result": "名字是她当着你的面填的。墨还没干，她吹了吹，塞进一只海螺壳里递给了你。"
   },
   {
    "text": "回城里",
    "goto": "a3_06"
   }
  ]
 },
 "a3_06c": {
  "id": "a3_06c",
  "title": "神殿区",
  "loc": "安本科斯特 · 神殿区",
  "text": [
   "安本科斯特的神殿区里挤着十几座神殿。钟是一刻钟敲一回，可各家敲各家的，谁也不让谁。人类信的这一众神合称摄政王庭，每一位在这儿都有自己的一扇门。阿德安的门最高，月神的门最旧，卡斯特洛斯的门最宽，进出的人却最少。",
   "编年史家会的楼就在钟楼背后，门口挂着一块悬赏的木牌，上头写着：收第一手的见闻，按件付钱。",
   {
    "if": "flag.notebook_order",
    "speaker": "编年史家",
    "text": "守昔者家的那本拓片我们收到了，眼下存在三楼，钱也早就付过了。有两位先生每个礼拜都来借，借回去看不懂，只好再送回来。"
   },
   {
    "if": "flag.notebook_kept",
    "speaker": "编年史家",
    "text": "守昔者小姐还留着那本拓片？会里出的价一直算数，她哪天想通了，尽管来。"
   },
   {
    "if": "flag.notebook_sold",
    "speaker": "编年史家",
    "text": "那本拓片，阿斯拉银行出过一个价，会里没跟上。可惜了。"
   },
   {
    "if": "flag.notebook_sold && party.garaele",
    "text": "加莱尔那会儿正站在门口看那块悬赏牌，这句话她没听见。"
   },
   {
    "if": "flag.names_filed",
    "text": "会里的人还记得你们报上来的那两个名字。账本上写的是“存疑，待复核”。"
   },
   {
    "if": "origin == 'corintar'",
    "text": "你一进神殿区，后头就跟上了两个穿灰袍的，是阿德安神殿的人。你一停下，他们也跟着停下。"
   },
   {
    "if": "flag.creed_delivered",
    "text": "多米尼克的信条已经交上去了。你路过阿德安神殿门口的时候往里看了一眼，那本书压在一摞请愿书的最底下。"
   }
  ],
  "choices": [
   {
    "text": "把多米尼克的信条交给神殿",
    "if": "flag.creed_carried && !flag.creed_delivered && origin != 'corintar'",
    "effects": [
     "flag creed_delivered",
     "world scale +1",
     "rep corintar +1",
     "rep temples -1",
     "item -corinite_creed"
    ],
    "result": [
     "接书的祭司翻开第一页，看了老半天。",
     {
      "speaker": "祭司",
      "text": "《剑与盾》？就这么几页？"
     },
     "话是这么说，他还是收下了，在簿子上添了一行：“东边送来的，科琳信众的说法，一册”。"
    ],
    "goto": "a3_06"
   },
   {
    "text": "当着那两个灰袍，把信条交上去",
    "tag": "科琳的队伍",
    "if": "flag.creed_carried && !flag.creed_delivered && origin == 'corintar'",
    "check": {
     "skill": "religion",
     "dc": 14
    },
    "ok": {
     "text": "你把科琳死的那一下原原本本讲给他们听，讲她怎么挡在蓝牙前头，盾是怎么裂的，从头到尾说得平平静静。当天晚上就有两个年轻祭司把信条借走了，第二天还回来的时候，两人手里各多了一本抄本。",
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
     "text": "你刚一开口，那两个灰袍就驳上了，一句接着一句，驳得你说不出话来。信条倒是收下了，只是给压在了一摞请愿书的最底下。",
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
    "text": "把舱底区那十四座坟报给编年史家会",
    "if": "flag.bilge_graves",
    "once": true,
    "effects": [
     "gold +15"
    ],
    "result": "编年史家在账上记了一行，付给你们十五个金冠，又问知不知道那些人的名字。你们说不知道，他就把这一栏空着了。"
   },
   {
    "text": "回城里",
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
   "精灵码头上的宅子都是拿方舟改的。四百五十年前残存舰队在这儿靠了岸，船一条条拖上滩，从此再没下过水。船身上开了窗，桅杆截下来做了房梁，甲板上还搭起了葡萄架。",
   "加莱尔的姑祖母住在最老的那条船上。她是“舰生”的，也就是生在海上的那一辈，登岸那年已经会走路了。算到今年她四百五十多岁，在精灵里头也称得上高寿。这会儿她正坐在船头的藤椅上剥豆子，嘴里哼着一支摇篮曲。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "姑祖母，我带了几位朋友来看您。他们是收尸的，不过您放心，我让他们在外头把鞋擦过了。"
   },
   {
    "if": "!party.garaele",
    "text": "加莱尔不在。老太太肯见你们，是因为你们捎来了她侄孙女父母的消息。听完以后，她把剥好的豆子又倒回了豆荚堆里。"
   },
   {
    "speaker": "姑祖母",
    "text": "这支曲子是我娘当年在船上哼的。里头有个词，后来船上不许唱了。我那时候小，不懂事，还照着唱，为这个挨过一回打。"
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
    "text": "跟她学那支摇篮曲",
    "once": true,
    "check": {
     "skill": "performance",
     "dc": 12
    },
    "ok": {
     "text": "你跟着她哼了三遍。哼到那个不许唱的词，她停住了，你也跟着停住了。她点了点头，说你停得对。",
     "effects": [
      "flag a3_lullaby"
     ]
    },
    "fail": {
     "text": "调子你学会了，词一个也没记住。老太太说，她当年养的那只猫也是这么唱的。"
    }
   },
   {
    "text": "问她登岸那晚的事",
    "tag": "精灵",
    "if": "is.elf",
    "once": true,
    "effects": [
     "flag a3_auntie_kin"
    ],
    "result": [
     {
      "speaker": "姑祖母",
      "text": "那天晚上的月亮是弯的。船底刚一碰着沙子，我娘就把我举了起来，让我头一个下去。我是脚先着的地，沙子是凉的。这四百多年，我一直记得那沙子是凉的。"
     },
     "她是拿你当自家晚辈看的。临了她还告诉你，阁楼上有个天窗，一直通到龙骨上面，她小时候就是从那儿往外爬的。"
    ]
   },
   {
    "text": "告诉她你父亲那边是哪条船上的",
    "tag": "半精灵",
    "if": "race == 'half_elf'",
    "once": true,
    "effects": [
     "flag a3_auntie_kin"
    ],
    "result": "你报了个船名。她想了老半天才说，那条船上的人爱吃鱼干，也爱吵架，靠岸那年吵得最凶。她又说阁楼上有个天窗，通到龙骨上面，你要是用得着，尽管去用。"
   },
   {
    "text": "上阁楼，让加莱尔念当年船上的航海志",
    "if": "party.garaele",
    "result": "加莱尔领着你们上了阁楼。她念精灵文跟念通用语一样快，只有念到死人数目的地方才慢下来。",
    "goto": "a3_07b"
   },
   {
    "text": "上阁楼，自己试着读当年船上的航海志",
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
   "阁楼里堆着十二口樟木箱子，航海志压在最底下那一口里。这是精灵舰队在海上漂流那些年的日志，一年一册，由值夜的人轮流写。每一夜都是先记风，再记星，然后记死了几个人，最后把值夜的祷词照抄一遍。",
   "头三十九年的祷词一个字都不差，把舰队供的神一位一位列下来。可到了第四十年那一册，还是那个位置，有一位神的名字叫人用墨涂掉了，旁边用小字注着“天空”。从那以后的祷词里，就再也没有这位神了。",
   "最后几页记的是一行方位，前后量了三个晚上。量的是一座神殿的位置。舰队离开故土那天，回过头去还望得见它的屋顶。",
   {
    "if": "flag.a3_log_slow",
    "text": "姑祖母一页一页地替你们念。她念得慢，一页要歇上三回，等到念完，天早就黑透了。"
   },
   {
    "speaker": "姑祖母",
    "text": "第四十年，船上一个月就死了一百多口人。怎么祷告他都不应，大伙儿就不拜他了，改拜祖宗。祖宗好歹是自家人。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "墨迹底下还看得出头一个字母。我在竖井口拓过一个一模一样的。"
   },
   {
    "if": "party.tan && flag.castellar_seen",
    "speaker": "阿坦",
    "text": "“天上的卡斯特拉尔”，井壁上就是这么刻的。这儿写的是同一位神，只是给人涂掉了。"
   },
   {
    "if": "party.tan && !flag.castellar_seen",
    "speaker": "阿坦",
    "text": "卡斯特拉尔……这听着像是王的名字，只是念歪了一点。"
   },
   {
    "if": "flag.a3_lullaby",
    "text": "楼下，老太太又哼起了那支曲子。给涂掉的那个词，她唱出来是“卡斯塔”，后半截咽下去了。"
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
   "第二天一大早，码头上来了一队魔导院的武卫，个个穿着灰外套，提着包铁的短棍，胸前挂着一块立誓用的铜牌。这些人自己不会法术，可都立过誓，专门对付会法术的人。领队身后还跟着个法师，手里拿着一卷封条。",
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
    "text": "那行方位我已经背下来了，昨晚背了九遍。眼下该怎么办，你们别问我，我只管记。"
   },
   {
    "if": "!party.garaele && party.tan",
    "text": "那行方位，阿坦昨晚掐着手指头背了九遍。"
   },
   {
    "if": "!party.garaele && !party.tan",
    "text": "那行方位你昨晚背了九遍，还写在了手心里。"
   },
   {
    "if": "is.caster && !flag.a3_registered",
    "text": "领队一看见你，就在本子上画了个记号。没登记过的施法者，他们一眼就认得出来。"
   },
   {
    "if": "flag.a3_god_burned",
    "text": "武卫本该来六个，这回来了八个。大魔导师的通函已经到了，上头写着，车上那位烧过封条。"
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
    "text": "抢在他们上楼前，把那几页抄下来",
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
     "text": "楼梯响到第九级的时候，你正好抄完最后一个数。你把抄页塞进靴筒，把册子摆回原处，由着他们贴上了封条。",
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
    "text": "抱着册子，从屋顶走",
    "check": {
     "skill": "stealth",
     "dc": 15,
     "party": true,
     "adv": "flag.a3_auntie_kin"
    },
    "ok": {
     "text": "天窗外头就是方舟的龙骨，弯弯的，长满了青苔。你们顺着它一路爬到船尾，跳上了隔壁的屋顶。武卫还在楼梯上撞门，足足撞了一刻钟。",
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
    "text": "照规矩办：陪着册子去神殿区，两边都登记",
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
    "text": "让他们封",
    "effects": [
     "approval nixee +1",
     "approval garaele -1"
    ],
    "result": [
     "法师在册子上贴了三道封条，贴得仔仔细细。贴完，武卫抱起箱子就走了。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "规矩第一条，先活着再说！册子是没了，可方位还在脑子里，脑子他们封不了。"
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
   "你们脚底下踩的是方舟的龙骨，又弯又湿，长着青苔，往下三丈就是码头的石板地。武卫已经上了隔壁那条船的屋脊，短棍上的铁箍让早上的太阳照得发亮。",
   {
    "speaker": "武卫领队",
    "text": "把册子放下！我们立过誓，不伤人，只打施法的手。"
   },
   "随队的法师站在后头，指尖已经亮起来了。码头上看热闹的越聚越多，底下还有人押起了注。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "他们的铜牌就挂在胸口上。往那儿砸。"
   }
  ],
  "choices": [
   {
    "text": "站稳了，迎上去",
    "if": "!(is.caster && !flag.a3_registered) && !flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫们一字排开，踩着龙骨一步步往这边挪。随队的法师也抬起了手，指尖上亮着一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓的时候挂上去的。牌子一碎，誓约的效力也要打折扣。",
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
       "name": "在湿青苔上踹他们一脚",
       "desc": "龙骨是弯的，又长满了青苔，脚下不稳的人站不住。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前头那个的膝盖上。他往下一滑，抱住了后头那人的腿，两个人一块儿趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在底下直叫好。",
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
    "text": "站稳了，迎上去",
    "if": "(is.caster && !flag.a3_registered) && !flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫们一字排开，踩着龙骨一步步往这边挪。随队的法师也抬起了手，指尖上亮着一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓的时候挂上去的。牌子一碎，誓约的效力也要打折扣。",
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
       "name": "在湿青苔上踹他们一脚",
       "desc": "龙骨是弯的，又长满了青苔，脚下不稳的人站不住。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前头那个的膝盖上。他往下一滑，抱住了后头那人的腿，两个人一块儿趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在底下直叫好。",
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
    "text": "站稳了，迎上去",
    "if": "!(is.caster && !flag.a3_registered) && flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫们一字排开，踩着龙骨一步步往这边挪。随队的法师也抬起了手，指尖上亮着一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓的时候挂上去的。牌子一碎，誓约的效力也要打折扣。",
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
       "name": "在湿青苔上踹他们一脚",
       "desc": "龙骨是弯的，又长满了青苔，脚下不稳的人站不住。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前头那个的膝盖上。他往下一滑，抱住了后头那人的腿，两个人一块儿趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在底下直叫好。",
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
    "text": "站稳了，迎上去",
    "if": "(is.caster && !flag.a3_registered) && flag.a3_god_burned",
    "combat": {
     "title": "屋脊上的武卫",
     "intro": "武卫们一字排开，踩着龙骨一步步往这边挪。随队的法师也抬起了手，指尖上亮着一点白光。",
     "specials": [
      {
       "id": "token",
       "name": "打碎领队胸前的誓约信物",
       "desc": "铜牌是立誓的时候挂上去的。牌子一碎，誓约的效力也要打折扣。",
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
       "name": "在湿青苔上踹他们一脚",
       "desc": "龙骨是弯的，又长满了青苔，脚下不稳的人站不住。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "你一脚踹在最前头那个的膝盖上。他往下一滑，抱住了后头那人的腿，两个人一块儿趴在了青苔上。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "滑下去的是你自己。好在你抓住了一根晾衣绳，挂在了半空里，码头上的人在底下直叫好。",
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
   "册子到底让他们收走了，你们在魔导院分署的地牢里蹲了一夜。地牢是干的，比舱底区的客栈还干净些。隔壁关着个偷改天象记录的学徒，哭了半宿。",
   "天亮以后来了个书记收罚金，一共一百金冠。收据倒是开了，上头盖了三个印。",
   {
    "if": "flag.tilda_with",
    "speaker": "蒂尔达",
    "text": "收据请交给我，我替你们找巴兹伍德先生报销。多半报不了，可我总得试试。"
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
   "锻炉街整条街都是矮人开的铺子，锤子从天亮敲到天黑。你们要找的酒馆夹在两家铁匠铺中间，墙摸上去都是热的。",
   "桥屯的奥托格坐在最里头那张桌子边上，面前摆着一壶李子白兰地。他当过威克斯三卫的大剑手，骨架还在，人却瘦了。他端杯子的手一直在抖，酒洒在袖口上，袖口早就结得硬邦邦的。",
   {
    "if": "origin != 'wex'",
    "text": "七年前他在板车边上抬过杜坎森的尸首，后来一纸调令把他叫回了西边。这回他先认出了板车的轮子，然后才认出你们。"
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
    "text": "那一夜你也在花园里。你挖东头，他挖西头，中间隔着一畦郁金香，两个人谁也没跟谁说话。"
   },
   {
    "if": "is.greenskin",
    "text": "酒馆里的矮人看了你一眼，又接着喝自己的酒。锻炉街只认钱和手艺，不管你的脸是什么颜色。"
   }
  ],
  "choices": [
   {
    "text": "坐到他对面，给你们俩各倒一杯",
    "if": "flag.dug_the_pit",
    "effects": [
     "flag digger_talked",
     "item +digger_oath",
     "flag a3_two_prints"
    ],
    "result": [
     "你们俩喝完了一壶，谁也没问谁什么。喝到第二壶，是他先开的口。他说那晚的土底下有石子，铲子磕得直响。你说，你那头也有。"
    ],
    "goto": "a3_09b"
   },
   {
    "text": "劝他把那晚的事说出来",
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
    "text": "陪他喝，喝到他先开口",
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
    "text": "拿军令压他",
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
    "text": "那天晚上我守在王座厅门外。里头先是有剑响，后来没声了，再后来轰的一声，门缝里直往外冒热风。"
   },
   {
    "speaker": "奥托格",
    "text": "上头叫我们进去抬，一共抬出来三具。一具是烧死的，认不出是谁。一具是个骑士。还有一具是银头发的，背上有个口子，是从后头扎进去的，很窄。我拿袖子给他擦过。"
   },
   {
    "speaker": "奥托格",
    "text": "上头跟我说，你什么也没看见。这句话我说了七年。"
   },
   "你们让他在口供上按手印。他手抖得厉害，头一个按歪了，只好又按了一个。",
   {
    "if": "flag.a3_two_prints",
    "text": "他的手印底下还有一个，是你的。那一夜你也在场。"
   },
   {
    "if": "flag.a3_ordered",
    "text": "按完手印，他又朝你立了一回正，然后坐下，再也不往你这边看了。"
   },
   {
    "if": "flag.tilda_with",
    "text": "隔着两张桌子，蒂尔达的笔停住了。她在等着看你们怎么处置他。"
   }
  ],
  "choices": [
   {
    "text": "当着蒂尔达，托东去的商队把他带走",
    "if": "flag.tilda_with",
    "cost": {
     "gold": 50
    },
    "effects": [
     "flag digger_safe"
    ],
    "result": "商队的车夫收了五十金冠，把奥托格藏进了一车麻袋中间。蒂尔达在本子上记下了车号，抬头看了你一眼，又低下头去了。",
    "goto": "a3_06"
   },
   {
    "text": "瞒着蒂尔达，夜里把他送上东去的车",
    "if": "flag.tilda_with",
    "cost": {
     "gold": 50
    },
    "effects": [
     "flag digger_safe",
     "flag tilda_blindsided"
    ],
    "result": "后半夜，你们把他扶上了一辆运铁锭的车。第二天一早，蒂尔达问奥托格上哪儿去了，你说不知道。她把“不知道”三个字也记了下来。",
    "goto": "a3_06"
   },
   {
    "text": "托东去的商队把他带走",
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
    "text": "由他接着喝",
    "effects": [
     "flag a3_ottog_drinks"
    ],
    "result": "你们走的时候，他又要了一壶。他的手不抖了。",
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
   "威克斯的公事房在帝国区一条死胡同的尽头，门口站着两个大剑手，屋里堆满了纸。乔恩·巴兹伍德替皇帝管着密探，坐在一张加高的椅子上。他今年七十八岁，在侏儒里头正当壮年。他面前摆着一盘小饼，一块都没动过。",
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
    "text": "蒂尔达站在他椅子后头，个头跟椅背一般高，手里一直在记。"
   },
   {
    "if": "origin == 'wex'",
    "text": "他看你的眼神跟看别人不一样。你是他的人，这一点屋里谁都清楚。"
   },
   {
    "if": "origin == 'wex' && var.false_reports >= 2",
    "text": "你写回来的那几封假报告就摊在他手边，上头压着一块镇纸。"
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
    "text": "你的文书蒂尔达已经验过了。能走进这扇门的绿皮，你是第二个。头一个是来送煤的。"
   }
  ],
  "first": [
   "codex bardswood",
   "codex dove_throne"
  ],
  "choices": [
   {
    "text": "先听他的价",
    "once": true,
    "effects": [
     "flag a3_heard_price"
    ],
    "result": [
     {
      "speaker": "巴兹伍德",
      "text": "一共三样。头一样，东坎诺那份城约，我给它盖上帝国的印，当然得先有城约才行。第二样是罗吉尔的赦令。第三样是给东坎诺氏族的一纸特许，让兽人走在帝国的地界上不用挨棍子。"
     },
     {
      "speaker": "巴兹伍德",
      "text": "要不然就给钱。给钱最省事。"
     }
    ]
   },
   {
    "text": "那张给氏族的特许，现在就要，当定金",
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
     "text": "他笑了，说定金应该由先出手的一方给，这回该先出手的是你们。接着他叫蒂尔达记下一笔：东边的人许了一件东西。",
     "effects": [
      "flag a3_charter_fail",
      "rep throne -1"
     ]
    }
   },
   {
    "text": "问他：皇上说阿登死于决斗，他信不信",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 16,
     "dis": "origin == 'wex' && var.false_reports >= 2"
    },
    "ok": {
     "text": "他平时说话很快，这一回慢了下来。他说他疑心了好多年，可一回也没问过皇上，因为一旦问了，就得听人家怎么答。",
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
    "text": "答应他，不当众说皇上不是化身",
    "tag": "神",
    "if": "is.god && !flag.a3_god_refused",
    "once": true,
    "effects": [
     "flag a3_god_promised"
    ],
    "result": "他把那份空着头衔的文书收回了抽屉，说既然你不填，他就先替你收着。"
   },
   {
    "text": "不答应他",
    "tag": "神",
    "if": "is.god && !flag.a3_god_promised",
    "once": true,
    "effects": [
     "flag a3_god_refused",
     "rep throne -1"
    ],
    "result": "他点了点头，拿起一块饼咬了一口，又放下了。蒂尔达手里的笔尖断了。"
   },
   {
    "text": "告辞",
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
   "花始月到了。明天就是皇帝登基三十年的庆典，宫里的花匠得连夜换花。郁金香一车接一车地从侧门推进去，推车的人打着灯笼，嘴里不住地骂。",
   "照德利安那张图，第七畦在西边那堵矮墙底下。墙外是条运泔水的小巷，臭得很，巡夜的都不爱往这边走。",
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
    "text": "你用不着看图。七年前的那一夜，你就是在这堵墙底下挖的坑。"
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
    "text": "我也去。我就站在篱笆外头，不进去。一进去，我就得把自己也记上，我可不想记我自己。"
   }
  ],
  "choices": [
   {
    "text": "把手按在矮墙上，拆那道警戒术",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 15
    },
    "ok": {
     "text": "这道法术织得很密，是老手布下的。你一点一点地拆，拆完最后一处，指尖总算不麻了。",
     "effects": [
      "flag a3_ward_off"
     ]
    },
    "fail": {
     "text": "你只拆开了一半。剩下的那一半还在，而且已经察觉到有人碰过它了。"
    }
   },
   {
    "text": "先一个人翻进巷子，把侧门的门闩拨开",
    "tag": "游荡者",
    "if": "class == 'rogue'",
    "once": true,
    "effects": [
     "flag a3_gate_open"
    ],
    "result": "门闩是木头的，你拿铁丝从门缝里挑了三下就挑开了。门轴上过油，那是花匠自己上的，为的是推车进出没有声响。"
   },
   {
    "text": "带着蒂尔达，摸进去",
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
     "text": "你们跟在一辆推车后头混进了侧门。蒂尔达留在篱笆外，蹲在一丛黄杨后面，本子摊在膝盖上。",
     "goto": "a3_11b"
    },
    "fail": {
     "text": "翻墙的时候不知是谁碰倒了一只花盆。墙那头的灯笼停了一停，又走开了。蒂尔达在篱笆外头把时辰记了下来。",
     "effects": [
      "flag a3_sneak_bad"
     ],
     "goto": "a3_11b"
    }
   },
   {
    "text": "把蒂尔达留在客栈，你们自己摸进去",
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
     "text": "你们跟在一辆推车后头混进了侧门。客栈那边，蒂尔达屋里的灯还亮着，她只当你们都睡下了。",
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
    "text": "摸进去",
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
     "text": "你们跟在一辆推车后头混进了侧门，没人多看你们一眼。",
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
   "第七畦的郁金香是新栽的，根还没扎稳，一拔就起来了。底下的土松得不对劲。别的畦一铲下去都是硬土，这一畦却翻过好几回。",
   "花园里很静。矮墙那头，换岗的骑士正跟花匠讨水喝，说明天得站一整天，今晚要先歇歇腿。",
   {
    "if": "party.ushka",
    "text": "乌什卡挖得最快，从头到尾一句话也没说。每挖出一铲土，她都拍平了堆在一边，好赶在天亮以前填回去。"
   },
   {
    "if": "!party.ushka",
    "text": "你们几个轮着来，一个挖，一个拿衣裳兜土，一个盯着墙头。"
   },
   {
    "if": "flag.a3_sneak_bad",
    "text": "墙那头的灯笼又转回来一回，这回停得比上回久。"
   },
   {
    "if": "is.caster && !flag.a3_ward_off",
    "text": "铲子每往土里进一回，你的指尖就麻一下。那道警戒术还在。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "挖别人家的花园，按件算是三倍的价！这一单我不给你们加价了，你们可得记着。"
   }
  ],
  "choices": [
   {
    "text": "赶在换岗前挖开",
    "if": "flag.a3_sneak_bad || (is.caster && !flag.a3_ward_off)",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "离三更一刻还差一点儿的时候，铲子碰到了布。",
     "goto": "a3_11c"
    },
    "fail": {
     "text": "铲子磕在一块石头上，当的一声，整个花园都听得见。灯笼一下子全朝这边转了过来。",
     "combat": {
      "title": "花园里的灯笼",
      "intro": "灯笼从矮墙那头绕了过来，先是一盏，再是两盏，转眼成了四盏。领头的骑士没有喊人，先把剑拔了出来。",
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
        "desc": "那是一排三层的花架，上头摆满了明天要用的郁金香。",
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
    "text": "赶在换岗前挖开",
    "if": "!(flag.a3_sneak_bad || (is.caster && !flag.a3_ward_off))",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "离三更一刻还差一点儿的时候，铲子碰到了布。",
     "goto": "a3_11c"
    },
    "fail": {
     "text": "土底下全是碎瓦，你们一直挖到天边发白才见着布，手上磨得全是血泡。巡夜的从墙外走过去两回，都没往里看。",
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
   "坑里一共三具，是挨着埋的，裹尸布早就烂了。一具是烧过的，骨头发黑，缩成了一团。一具穿着阿德蕾西娅骑士团的锁甲，甲上的徽记叫人锉掉了。还有一具头发是银的，埋了七年多还是银的。这就是阿登。",
   "他是脸朝下埋的。背上左边的肩胛骨底下有一道口子，从后往前，很窄，整个扎透了。",
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
    "text": "阿坦跪在坑边上，念了晨祷的头一句就停住了。天还没亮，还不到念的时辰。"
   },
   {
    "if": "is.greenskin",
    "text": "你们扛着尸首往外走的时候，墙根底下有个绿皮杂役看见了你。他把脸转过去，对着墙。"
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
   "德利安备下的仓房在城外的盐田边上，原先是堆盐袋的，墙根白了一圈。三具尸首摆在三张门板上，旁边点着两盏灯。",
   "德利安是一个人骑马来的。他进门只看了一眼，就扶着门框坐了下去，坐在门槛上，过了很久才开口。",
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
    "text": "德利安看见你蹲在门板边上，没问你是谁，只问了一句，你们那边人死了，是不是也这样摆着。"
   }
  ],
  "first": [
   "quest q_duke stage 3",
   "codex throne_room"
  ],
  "choices": [
   {
    "text": "把蜡模再修一遍",
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
     "text": "蜡模边上起了泡。你修了半宿，修完了还是看得出修过。"
    }
   },
   {
    "text": "留神仓房外头的动静",
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
     "text": "外头只有风，吹得盐袋哗哗响。"
    }
   },
   {
    "text": "出去，跟门外缝东西的那个人说话",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "flag daras_seen"
    ],
    "result": [
     "门外的盐堆背后坐着个人，正就着月光缝东西，针脚又密又匀。军士长那只骨灰袋就是这么缝出来的。",
     "是达拉斯。北城那条世家住的街，你们俩一块儿守过，他守东口，你守西口。他抬头看了你一眼，手里的针没停。",
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
    "text": "答：算数",
    "tag": "承嗣派",
    "if": "faction == 'heirs' && (party.garaele || party.tan) && !flag.a3_heirs_no",
    "once": true,
    "effects": [
     "flag a3_heirs_yes"
    ],
    "result": "你说算数。问你的那个人点了点头，什么也没记。"
   },
   {
    "text": "答：不算，谱就是谱",
    "tag": "承嗣派",
    "if": "faction == 'heirs' && (party.garaele || party.tan) && !flag.a3_heirs_yes",
    "once": true,
    "effects": [
     "flag a3_heirs_no"
    ],
    "result": "你说不算，谱要是改了一回，往后就得一直改下去。问你的那个人看了看门板上的三具尸首，没有再问。"
   },
   {
    "text": "告诉德利安：不疼，一下就过去了",
    "effects": [
     "var lies +1"
    ],
    "result": [
     "他点了点头，像是早就等着你这一句。",
     {
      "speaker": "德利安",
      "text": "那就好，那就好。他这人怕疼，小时候摔一跤能哭上半天，哭完了又跑去爬树。"
     }
    ],
    "goto": "a3_13"
   },
   {
    "text": "照实说：从背后，一下，扎透了",
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
    "text": "说不知道，没人知道",
    "effects": [
     "approval garaele +1"
    ],
    "result": [
     "他看了看你，又看了看门板。",
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
   "三十年庆典摆在皇宫的大厅里，一溜排开四十张长桌。洛萨恩三世坐在最上头，今年五十一岁，头发已经灰白，胸前挂着一颗紫宝石。皇后艾莉萨坐在他旁边。这么多年了，这两个人还是头一回同席。皇后吃得很少，眼睛一直看着桌上的郁金香。",
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
   "奥坎娜坐在选帝侯那一排，穿的还是那件扈从外套。巴兹伍德只顾吃他的饼。",
   "上菜的队伍从过道里走过来，每人托着一只银盘子。走在第九个的那人，号衣的袖口是补过的，补得很好，针脚又密又匀。",
   {
    "if": "flag.daras_seen",
    "text": "这针脚你认得，是达拉斯。他走到离皇后还有三张桌子的地方停了一下，把托盘换到了左手上。"
   },
   {
    "if": "origin == 'sons'",
    "text": "是达拉斯。他始终没往你这边看一眼。"
   },
   "紧接着他拔出了一把很窄的刀，朝皇后扑了过去。"
  ],
  "choices": [
   {
    "text": "扑上去拦他",
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
     "text": "你慢了半步。刀扎进去的时候，皇后手里还捏着一片郁金香叶子。卫兵拿你当同伙，把你死死按在地上。亏得巴兹伍德一边喊一边从桌子底下钻过来，才把你捞了出去。",
     "effects": [
      "rep throne -1",
      "flag a3_empress_dead",
      "world peace -1"
     ],
     "goto": "a3_14"
    }
   },
   {
    "text": "坐着不动",
    "effects": [
     "world peace -1",
     "flag a3_empress_dead"
    ],
    "result": "刀扎进去的时候，皇后手里还捏着一片郁金香叶子。满厅的人都站了起来，又一个个坐了回去，谁也不知道该干什么。只有皇帝一动没动，他在看那把刀。",
    "goto": "a3_14"
   },
   {
    "text": "替他挡开卫兵，让他跑",
    "req": "origin == 'sons' || rep.moon >= 3",
    "reqText": "你跟月党的交情不到这一步",
    "effects": [
     "flag daras_fled",
     "world peace -1",
     "rep moon +1",
     "rep throne -3",
     "flag a3_empress_dead"
    ],
    "result": "刀已经扎进去了。你撞翻了一张长桌，横在过道当中。达拉斯从你身边跑过去，看都没看你，从上菜的那扇门出去了。等卫兵踩着桌子追过来，你早已混进了人堆里。",
    "goto": "a3_14"
   },
   {
    "text": "喊他的名字",
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
      "他脚下停了半步。就这半步的工夫，卫兵已经扑上来了。给按倒之前他看了你一眼，眼里没有恨，也没有别的什么。"
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
      "他没有停。刀扎进去的时候，皇后手里还捏着一片郁金香叶子。过后他回过头，在人堆里找着了你，冲你点了一下头。"
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
    "text": "抬一下手，让刀停住",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag empress_saved",
     "flag god_sided_throne",
     "world peace +2",
     "rep moon -3"
    ],
    "result": [
     "刀停在了半空里，离皇后的喉咙只有一掌远。满厅的人都朝着你跪了下去，盘子碎了一地。只有皇帝还站着。",
     "达拉斯也站着。他松开了刀柄，刀还悬在那儿。",
     {
      "speaker": "达拉斯",
      "text": "连这个你都要管。那年在王座厅里，你怎么不管？"
     },
     {
      "if": "party.tan",
      "text": "阿坦跪到一半，又站了起来。后来他说，他那会儿不知道该冲着谁跪。"
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
   "达拉斯给你压在身子底下，一只手还攥着刀柄，刀仍旧钉在桌面上。他不挣扎，也不出声。",
   "卫兵从四面往这边挤，有人已经拔出剑来，嚷着要当场砍了他。皇后还坐在那儿没动，袖子上破了一道口子。",
   "满厅的人有的往外挤，有的往这边挤，乱成一团。巴兹伍德站到椅子上喊别砍，一连喊了三遍，没人听他的。皇帝仍旧坐在原处，看着你。",
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
    "text": "松手，交给卫兵",
    "effects": [
     "flag a3_daras_cut"
    ],
    "result": "你刚一松手，四把剑就一齐砍了下去。他倒在了地上，压着自己缝补过的那只袖口。",
    "goto": "a3_14"
   },
   {
    "text": "按住不放，等卫兵的绳子",
    "combat": {
     "title": "按住他",
     "intro": "达拉斯的手还攥着刀柄。他不看你，眼睛只盯着皇后坐的那张椅子。",
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
       "desc": "桌布足有一丈长，上头还摆着银盘子。",
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
        "text": "桌布是扯下来了，可他不在底下。他的刀在你胳膊上划了一道。",
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
   "庆典已经过去三天了。蜡模和那三具尸首的清单都在你们手里，这件事已经有四家知道了。",
   {
    "if": "flag.empress_saved",
    "text": "皇后活了下来，帝国跟洛伦特的联姻也就保住了。帝国区门口贴出了告示，通缉刺客的同党。告示上没有你们。"
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
    "text": "乌什卡去乱葬岗看过一回达拉斯，回来以后什么也没说。"
   },
   "第三天夜里，盐田边那间仓房的门口停下了一匹马，骑马的人没带随从。洛萨恩三世自己推门进来，先看了一眼门板上的三具尸首，又转过来看你。",
   {
    "speaker": "洛萨恩三世",
    "text": "证据你带来了。很好。"
   },
   {
    "speaker": "洛萨恩三世",
    "text": "这回屋里没有第三个人，只有你和我。你要不要跟我比一场？"
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
    "text": "照三卫的规矩，比到见血为止",
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
    "result": "同伴们都退到了门外。他解下披风叠好，搁在一袋盐上，然后把大剑从背上取了下来。",
    "combat": {
     "title": "三卫的规矩",
     "intro": "他双手握住大剑，剑尖朝下在地上点了点。这是三卫的起手式，照规矩要比到见血为止。",
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
       "name": "把灯踢到他脚底下",
       "desc": "仓房里只点着两盏灯，有一盏正在他背后。",
       "check": {
        "skill": "acrobatics",
        "dc": 15
       },
       "success": {
        "text": "灯油泼在盐地上烧了起来。他往后让了半步，剑尖一偏，露出了破绽。",
        "applyAll": {
         "cond": "exposed",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯滚到墙根底下就灭了，他连看都没看一眼。",
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
    "text": "应战",
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
     "巴兹伍德不知什么时候站到了门口，手里还拿着一块没吃完的饼。刚才的事他全看见了。从那以后，皇帝说的话，鸽座的朝廷上上下下都只信一半。"
    ],
    "goto": "a3_14b"
   },
   {
    "text": "不跟他比",
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
    "text": "先见血的是你。他看着你胳膊上那道口子点了点头，把剑擦干净了。"
   },
   {
    "if": "faction == 'tried' && !flag.a3_declined_duel",
    "text": "等他走了你才想起来，照你自己的道理，他那把椅子也是凭本事坐上去的。只不过那一晚，屋里还有第三个人帮他。"
   },
   "到了第二天，四家都派人来了。",
   "巴兹伍德叫蒂尔达送来一张字条，上头只写着“抽屉空着”。奥坎娜是亲自来的，靴子上全是泥。编年史家会的人带来了一个泰卢姆的喊报人，那人一到就站在门口试起了嗓子。只有德利安坐在门槛上，什么也没要。",
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
    "text": "“只有威克斯说了算”，这句话你在信里抄过很多遍。这一回轮到你自己掂量了。"
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
    "text": "卖给巴兹伍德，锁进他的抽屉",
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
    "text": "交给奥坎娜",
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
     "她接过蜡模，拿拇指去量那道口子有多宽，来回量了两遍。",
     {
      "if": "origin == 'wex'",
      "speaker": "奥坎娜",
      "text": "你是替威克斯办事的，把这个给了我，回去怎么交代是你的事。我只告诉你一件事：我不会马上开战，我要等一个好日子。"
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
    "text": "交给喊报人和编年史家会，印出去",
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
      "text": "可是没有口供，蜡模又修得不干净，满城有一半人说这是诽谤，连月党自己家里也有人这么说。"
     }
    ],
    "goto": "a3_14d"
   },
   {
    "text": "谁也不给，带走",
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
   "巴兹伍德把蜡模放进抽屉锁好，钥匙挂回了脖子上。他又拉开另一只抽屉，里头摆着几张写好的纸。",
   {
    "speaker": "巴兹伍德",
    "text": "挑一样吧。只能挑一样，挑两样我可给不起。"
   },
   "桌上摆的还是那盘小饼，只是少了一块。蒂尔达站在他椅子后头，这一回她没有记。",
   {
    "if": "flag.a3_heard_price",
    "text": "抽屉里的东西跟上回说的一样，一张没多，一张也没少。"
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
    "text": "给东坎诺氏族的特许",
    "if": "!flag.clan_charter",
    "effects": [
     "flag clan_charter",
     "item +clan_charter",
     "world room +1",
     "world embers -1",
     "rep clans +1"
    ],
    "result": "他一共写了七行，盖上了印。写到“氏族”两个字的时候，他停下来问你，兽人那边认不认印。你说认，只要印是真的就认。",
    "goto": "a3_14d"
   },
   {
    "text": "罗吉尔的赦令",
    "effects": [
     "flag rogier_pardoned",
     "rep moon +1"
    ],
    "result": "赦令是早就写好的，只差盖印。他盖完了才说，皇上本来打算派人去塔兰顿杀罗吉尔，现在不派了。",
    "goto": "a3_14d"
   },
   {
    "text": "给城约盖帝国的印",
    "if": "(flag.compact_league || flag.compact_corintar || flag.compact_free) && !flag.compact_sealed",
    "effects": [
     "flag compact_sealed",
     "world peace +1"
    ],
    "result": "你把城约的抄本递了过去。他从头看完，说写得不好，不过印照盖。",
    "goto": "a3_14d"
   },
   {
    "text": "八百金冠",
    "effects": [
     "gold +800",
     "approval nixee +1"
    ],
    "result": [
     "给的是阿斯拉银行的票子，一共八张，每张一百。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "八百，这一单我认了！规矩第二条，先落袋再说。"
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
    "text": "蒂尔达的床空了。账本、底稿、密码本全带走了，连那块薰衣草饼都没留下。床头只压着一张字条，上面原本写着“目前可靠”四个字，“可靠”两个字给划掉了。"
   },
   {
    "if": "flag.tilda_blindsided",
    "text": "后来听说，她搭头一班船回了威克斯堡。她到那儿的第三天，黑犬佣兵团就接到了一桩活，要来追你们手里的东西。"
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
    "text": "把字条收起来，上路",
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
    "text": "让她照实写",
    "if": "!flag.tilda_blindsided",
    "effects": [
     "flag tilda_true",
     "rep throne +1"
    ],
    "result": "她点点头，把撕掉的那两页捡回来抹平，夹进了报告里。",
    "goto": "a3_15"
   },
   {
    "text": "请她照你的意思写",
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
    "text": "劝她把密码本烧了，留在东边",
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
     "text": "她摇了摇头，说这三十年她就学会了一件事，报告得按时交。她照实写了，封好，交给了驿站。",
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
   "航海志上记着那座神殿的方位，可那方位在海的另一头。精灵码头上的人都说，往西去的船，还没有哪一条回来过。",
   {
    "if": "party.garaele",
    "text": "加莱尔把整个码头都问遍了。十七个船老大里头，十六个说不去。第十七个肯去，可他开的价是一整条船的钱，外加他老婆往后的口粮。"
   },
   {
    "if": "!party.garaele",
    "text": "你们把整个码头都问遍了。十七个船老大里头，十六个说不去，剩下那一个喝醉了。"
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
    "text": "舱底区的药婆听说你们要往西去，从柜台底下摸出一块树皮来。她说她年轻的时候认识一个森林地精，听那地精讲，深林里有一扇门，能通到很远的地方。要敲门得先写信，信要塞在一圈蘑菇的中间。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "卡斯特拉尔就是王。精灵在第四十年把他从祷词里划掉了，可我们人类一直拜到了今天，拜的是同一位。"
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
    "text": "问妮克西，她东家到底是谁",
    "if": "party.nixee",
    "once": true,
    "effects": [
     "codex prince_of_fools",
     "codex verdant_veil"
    ],
    "result": [
     {
      "speaker": "妮克西",
      "text": "是愚者亲王，妖精善庭的一位王。他不爱打架，就爱改东西，改的是什么他从来不说。深林上头盖着一层帷幕，帷幕那头就是他的地方。"
     },
     {
      "speaker": "妮克西",
      "text": "从他的门过去，人会落在哪儿、落在哪一年，都由不得自己，全凭他说了算。"
     }
    ]
   },
   {
    "text": "把方位对到旧海图上",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "码头的海图铺子里有一张四百年前的旧图，图边上画着精灵故土的海岸。你把方位对上去，正落在一条河的上游。那条河叫塞拉。",
     "effects": [
      "flag a3_sella_known"
     ]
    },
    "fail": {
     "text": "旧海图上那一片是空白的，只画了一条吐泡泡的鱼。"
    }
   },
   {
    "text": "让妮克西写信",
    "if": "party.nixee",
    "effects": [
     "flag door_letter_sent",
     "quest q_door start",
     "codex prince_of_fools",
     "codex verdant_veil"
    ],
    "result": [
     "她在一块树皮上写好了你们出的价钱，又写了落款，还叫你们按了手印。出城往东走，到了头一片林子边上，她找着一圈蘑菇，把树皮塞在了正当中。",
     {
      "speaker": "妮克西",
      "text": "规矩第九条，敲门的人不许催。"
     }
    ],
    "goto": "a3_16"
   },
   {
    "text": "照药婆说的，自己写那封信",
    "if": "!party.nixee",
    "effects": [
     "flag door_letter_sent",
     "quest q_door start",
     "codex prince_of_fools",
     "codex verdant_veil"
    ],
    "result": "你在树皮上写明了你们要去哪儿，为什么去，付得起什么。出城往东走，头一片林子边上就有一圈蘑菇，你把树皮塞在了正当中。",
    "goto": "a3_16"
   }
  ]
 },
 "a3_16": {
  "id": "a3_16",
  "title": "大公埋哪儿",
  "art": "ev_excalibur",
  "loc": "月神之耳的一处坡地 · 花始月的月夜",
  "text": [
   "月神之耳东边有一片朝海的坡地。德利安说，阿登小时候在这儿放过风筝，风筝挂在了那棵歪脖子橡树上，是他爬上去摘下来的。今晚有月亮。",
   "大公躺在车上，身上裹着新缝的布。有三个人要他去三个地方。德利安要的是一座能立碑的坟。罗吉尔要的是别拿他当旗子。皇帝要他躺回花圃里去。",
   {
    "if": "item.sergeant_urn",
    "text": "你包里还有一只骨灰袋，是达拉斯缝的，里头是军士长。他生前说过想葬在月神之耳，还得是个有月亮的晚上。"
   },
   {
    "if": "flag.parents_carried",
    "text": "车底下还放着两口小匣子，里头是守昔者夫妇的遗骨，从山底下一路带出来的。"
   },
   {
    "if": "flag.a3_duel_won",
    "text": "你腰上挂着阿德蕾西娅的那把练习剑。德利安看见了，没说什么。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "挖在哪儿，你说了算。挖多深，我说了算。"
   },
   {
    "if": "party.garaele && flag.parents_carried",
    "speaker": "加莱尔",
    "text": "我父母不挑地方。只要有人记下来他们埋在了哪儿，就够了。"
   },
   {
    "if": "is.greenskin",
    "text": "坡下的渔村里有人举着火把上来看了一眼，一看见你，又下去了。"
   }
  ],
  "choices": [
   {
    "text": "先把军士长埋了",
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
     "你在橡树底下挖了个小坑。袋子放进去的时候，月亮刚好从云里出来了。他要的就是这个。",
     {
      "if": "!flag.urn_promised && party.tan",
      "speaker": "阿坦",
      "text": "当初他求你，你没答应，现在你倒把他埋了。那当初为什么不答应？"
     }
    ]
   },
   {
    "text": "把守昔者夫妇埋在一处",
    "if": "flag.parents_carried",
    "once": true,
    "effects": [
     "world unburied -1",
     "var rites +1",
     "approval garaele +2",
     "log 守昔者夫妇，月神之耳东坡，挨着。"
    ],
    "result": [
     "两口匣子并排放了下去。加莱尔拿炭笔在一块平石头上写了他们的名字，写了日子，连坑有多深也写上了。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "三尺二寸。我记下了。"
     }
    ]
   },
   {
    "text": "埋在这片坡上，石头上不刻字",
    "effects": [
     "flag adenn_damesear",
     "world unburied -1",
     "var rites +1",
     "log 阿登·天枪，月神之耳东坡，石头上没刻字。"
    ],
    "result": [
     "坑挖了足足一个时辰。石头是从坡上滚下来的一块，面是平的，你们把它立在了头那一边。上面没有刻字。德利安说不要紧，他认得。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "五尺深，狗刨不到。石头上没字，人也不会来刨。"
     }
    ],
    "goto": "a3_16b"
   },
   {
    "text": "装车，送去东边交给罗吉尔",
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
    "text": "送回花圃，栽上新的郁金香",
    "effects": [
     "flag adenn_left",
     "rep throne +1",
     "world unburied +1",
     "approval ushka -2",
     "approval tan -1"
    ],
    "result": [
     "你们把他抬回了第七畦，把土填平，又把新的郁金香一株一株栽了回去。等到天亮，谁也看不出那一畦给人动过。",
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
   "活刚干完，坡底下的树林里就亮起了一排火把。",
   "拉车的骡子拴在橡树上，是它先听见了动静。它两只耳朵竖起来，一个劲儿往后退，把缰绳都绷直了。",
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
    "text": "火把后头还站着个穿长袍的，手里捏着一张纸，正对着纸上的画像找你。蒂尔达把你画得很像。"
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
    "text": "守住坡顶",
    "if": "flag.emperor_duel_won && !flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "坡上只有你们带来的两盏马灯，月亮又正在你们背后。",
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
        "text": "你吹灭了一盏，另一盏叫风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "老坟上的墓石立了上百年，根早就松了。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "头一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
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
     "intro": "散兵们举着火把往坡上冲，嘴里喊着圣骨，其实谁也不知道圣骨长什么样。",
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
    "text": "守住坡顶",
    "if": "flag.emperor_duel_won && flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "坡上只有你们带来的两盏马灯，月亮又正在你们背后。",
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
        "text": "你吹灭了一盏，另一盏叫风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "老坟上的墓石立了上百年，根早就松了。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "头一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
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
     "intro": "散兵们举着火把往坡上冲。他们后头那个穿长袍的是专门来找你的，跟圣骨没什么关系。",
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
    "text": "守住坡顶",
    "if": "!flag.emperor_duel_won && flag.proof_bardswood && !flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "坡上只有你们带来的两盏马灯，月亮又正在你们背后。",
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
        "text": "你吹灭了一盏，另一盏叫风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "老坟上的墓石立了上百年，根早就松了。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "头一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
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
     "intro": "领头的老队长举着一面新缝的月牙旗。他说大公得回到弟兄们中间去。",
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
    "text": "守住坡顶",
    "if": "!flag.emperor_duel_won && flag.proof_bardswood && flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "坡上只有你们带来的两盏马灯，月亮又正在你们背后。",
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
        "text": "你吹灭了一盏，另一盏叫风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "老坟上的墓石立了上百年，根早就松了。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "头一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
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
     "intro": "领头的老队长举着一面月牙旗。他身后那个穿长袍的还在对着画像找你。",
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
    "text": "守住坡顶",
    "if": "!flag.emperor_duel_won && !flag.proof_bardswood && !flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "坡上只有你们带来的两盏马灯，月亮又正在你们背后。",
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
        "text": "你吹灭了一盏，另一盏叫风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "老坟上的墓石立了上百年，根早就松了。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "头一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
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
     "intro": "黑犬队长一举手，弩手们的弦就一齐响了。他是按人头结账的，不留活口。",
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
    "text": "守住坡顶",
    "if": "!flag.emperor_duel_won && !flag.proof_bardswood && flag.tilda_blindsided",
    "combat": {
     "title": "坡上的火把",
     "specials": [
      {
       "id": "lights",
       "name": "灭掉所有的灯",
       "desc": "坡上只有你们带来的两盏马灯，月亮又正在你们背后。",
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
        "text": "你吹灭了一盏，另一盏叫风一吹反倒更旺了，正好照着你的脸。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stones",
       "name": "推倒坡上那排墓石",
       "desc": "老坟上的墓石立了上百年，根早就松了。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "头一块倒下去，把第二块也砸倒了。一整排墓石顺着坡滚下去，滚进了火把堆里。",
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
     "intro": "黑犬队长一举手，弩手们的弦就一齐响了。他身后那个穿长袍的还在对着画像找你。",
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
    "text": "那一夜你们没能守住。天亮的时候，坡上只剩下一个空坑，车辙一路往西，是往皇宫去的。后来听人说，第七畦的郁金香又换过一茬。"
   },
   "阿德蕾西娅堡外的路口立着一块界石，一面刻着堡名，另一面刻着到安本科斯特的里数。德利安在界石边上等你们，手里拿着一本账和一只钱袋，胳膊底下夹着那只黑木匣子。",
   {
    "if": "!flag.adenn_left && !flag.a3_no_deposit",
    "speaker": "德利安",
    "text": "余款六百，我点过两遍了。"
   },
   {
    "if": "!flag.adenn_left && flag.a3_no_deposit",
    "speaker": "德利安",
    "text": "定金一百五，余款六百，加起来七百五。你们当初没收定金，我一块儿结了，也点过两遍了。"
   },
   {
    "if": "flag.adenn_left",
    "text": "他只付了一半的钱，把钱袋搁在界石上，一句话也没说。账本上的那一行，他没有画勾。"
   },
   "他打开匣子，从一摞信里抽出一封来。信没拆过，封皮上写着阿登的名字。",
   {
    "speaker": "德利安",
    "text": "你把它放进坟里也行，替我留着也行。这一封是写得最长的，写的是那年他故意输给我的那一场比武。"
   },
   {
    "if": "!flag.tilda_blindsided && !flag.tilda_burned",
    "text": "蒂尔达在路口跟你们分了手。她骑上驿站的骡子，账本绑在鞍子后头，走出去十几步又回过头来，冲你们喊了一声“目前可靠”。"
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
    "text": "我都记下了。1452 年花始月，阿登·天枪第二回下葬。"
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
    "text": "写这一幕的报告：照实写",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.a3_report_done",
    "once": true,
    "effects": [
     "flag a3_report_done",
     "var honest_reports +1",
     "rep throne +1"
    ],
    "result": "你写了花圃，写了那三具尸首，也写了背上的那个口子。写到最后你停了一会儿，又添了一句：皇上本人知道。"
   },
   {
    "text": "写这一幕的报告：写一份假的",
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
    "text": "这一幕的报告：不写",
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
    "text": "把信放进坟里",
    "effects": [
     "item -delian_letter",
     "flag a3_letter_to_grave",
     "approval ushka +1"
    ],
    "result": [
     {
      "if": "flag.adenn_damesear",
      "text": "你们又绕回月神之耳的东坡，把信压在了那块没刻字的石头底下。"
     },
     {
      "if": "flag.adenn_rogier",
      "text": "你把信塞进了裹尸布里，贴着他的胸口放好。等到了塔兰顿，信就跟他一块儿进龛。"
     },
     {
      "if": "flag.adenn_left",
      "text": "你托那个年轻骑士夜里去了一趟皇宫西墙，把信埋进了第七畦的土里，就在郁金香底下。"
     },
     "德利安合上匣子。里头如今空了一格，他照旧把它锁好了。"
    ],
    "goto": "a3_18"
   },
   {
    "text": "替他留着这封信",
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
   "往东的路比往西的好走。路边的木桩都还在，只是上头的里数得倒着数了。",
   "路过弗里塞斯提尔的时候，镇口那根木桩旁边多了一捆柴，不知道是谁放的。镇上的磨坊又添了一盘磨，喊报人也换了个人，单子上罗吉尔的赏格还是一千。",
   {
    "if": "flag.god_shrine",
    "text": "木桩边上那座神龛里供着的石头，不知谁给它披了一块红布。来往的车夫路过，都要伸手摸一下。"
   },
   {
    "if": "party.nixee",
    "text": "走到深林边上那天，妮克西领着你们去看她塞信的那圈蘑菇。蘑菇早烂了，烂成了一圈黑泥。树皮还在原处，上头的字也还在，没有人来取过。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "东家回话从来不按日子。他说早，那就是早。"
   },
   {
    "if": "!party.nixee",
    "text": "走到深林边上那天，你们去看了那圈蘑菇。蘑菇早烂了，烂成了一圈黑泥。树皮还在原处，没有人来取过。"
   },
   {
    "if": "party.tan",
    "text": "阿坦在林子边上做晨祷。念到第四十句，他停了下来，看了看林子，又看了看天。第四十一句“愿银龙再临”，他还是没念。"
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
