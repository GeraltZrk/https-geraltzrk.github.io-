// s1444 / act1.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a1_01": {
  "id": "a1_01",
  "title": "头一夜的门板桌",
  "chapter": "第一幕 · 没人肯埋的兽人",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市边上的空地",
  "date": "1444年奈拉月12日夜",
  "text": [
   "天黑以后，空地边上守夜的那圈火还亮着，跪着的人已经换过一拨了。拿门板搭的那张桌子也照旧支在两只酒桶上，杜坎森的尸首就躺在鱼贩子的板车里，身上压着另一扇门板，两只脚露在外头，靴底上还磨穿了一个洞。",
   "来出价要这具尸首的一共有四拨人，头一拨是瓦丽娜·埃斯瑟，她带着两个学徒抬来一只铁箍木箱，箱盖敞着，里头的金冠码得整整齐齐。三个边区兵拎来的是一把剁肉刀，刀上还粘着葱花，车轮边上还蹲着个缠白布的老兽人，说是替杜坎森的小儿子来领人的。再就是雕骨者的三个兽人，手里什么也没拿，只在肩上扛了一袋盐。",
   {
    "speaker": "瓦丽娜",
    "text": "一箱金冠，当场结清。他躺着也是躺着，站起来还能替东坎诺修上三十年城墙呢，理论上不咬人。"
   },
   {
    "speaker": "卡莱昂",
    "text": "我只有一句话，天亮以前，这具尸首不能还留在我的城里。至于谁来拉走，拉到哪儿去，那我就不管啦。"
   },
   {
    "speaker": "冈瑟",
    "text": "拉去哪儿都行啊，不过下城的卡子是我钴蓝兵团的，过路钱照收不误。至于几分利嘛，咱们另算。"
   },
   "板车边上还有几个人，手上各忙各的，{?origin != 'corintar':老布兰多克在擦一副护肩，那护肩并不是他自己的，|}{?origin != 'sons':达拉斯坐在车辕上缝东西，一句话也不说。|}{?origin != 'wex':奥托格抱着他那把大剑，手一直在抖，|}{?origin != 'grudge':布罗克嫌营里的铲子太轻，肩上扛的是他自己那把。|}{?origin != 'tide':马布格靠在车帮上，断了的那根獠牙上还缠着麻绳。|}",
   "这时候万神道那边过来了一盏灯，提灯的是阿坦，他把庙门锁上了，钥匙用麻绳拴着挂在脖子上。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "军令已经钉在门上了，我在不在都是一样的。你们既然要出城，我正好顺路。"
   },
   {
    "if": "flag.god_revealed",
    "text": "你是什么来头，桌边的人都已经听说了，所以出价的人说话的时候眼睛并不看尸首，全都看着你。"
   },
   {
    "if": "is.god",
    "text": "瓦丽娜把箱盖往你这边推了推，问你本人卖不卖，要是不肯卖断，按天算也行。卡莱昂倒是换了个问法，他问你打算在他的城里住多久。"
   },
   {
    "if": "is.god && party.ushka",
    "speaker": "乌什卡",
    "text": "车上是多了一位神，可车还是那辆车。"
   },
   {
    "if": "flag.ushka_wary && party.ushka",
    "text": "乌什卡蹲在车尾量杜坎森的腕骨，有只手始终没离开腰后的锤子，她量的时候是背对着尸首的，脸一直朝着你。"
   },
   {
    "if": "origin == 'tide'",
    "text": "你手背上有块再也不会变的绿，缠白布的老兽人一眼就认出来了，他用兽人话问你是哪个氏族的，问完也就不再看你了。"
   }
  ],
  "first": [
   {
    "if": "approval.ushka <= -4 && party.ushka",
    "then": [
     "companion -ushka",
     "flag ushka_left",
     "log 乌什卡走了。她说跟着你，迟早要替你做一回礼。"
    ]
   },
   "companion +tan",
   "quest q_korgus start",
   "codex korgus",
   "codex castonath",
   "codex rotcleaver"
  ],
  "choices": [
   {
    "text": "听瓦丽娜把价钱说完",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "她说到“站起来”三个字的时候，两个学徒不约而同地朝箱子底下的粉笔圈看了一眼，看来她把尸首买回去，可不是为了摆着的。",
     "effects": [
      "flag a1_varina_read"
     ]
    },
    "fail": {
     "text": "你盯着那箱金冠多看了两眼，偏偏乌什卡也看见了。",
     "effects": [
      "approval ushka -1"
     ]
    }
   },
   {
    "text": "听边区兵要什么",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "领头的说要拿去挂北城门，挂满一个月，好让墙根底下那些绿的天天看着。你一直听他说完，他就当你是自己人了。"
   },
   {
    "text": "听缠白布的老兽人怎么说",
    "once": true,
    "effects": [
     "rep clans +1"
    ],
    "result": "他说杜坎森的小儿子叫古尔赞，已经带着嗜血者退到长者郡去了，如今正在那边等着，你问他等什么，他只朝门板底下那两只脚看了一眼。"
   },
   {
    "text": "问雕骨者那袋盐是干什么的",
    "once": true,
    "effects": [
     "flag a1_salt_known"
    ],
    "result": "他们说骨头要拿回去雕，等雕满了，他就能再生一回，至于那袋盐，是拿来换他的价钱，一袋够腌一冬的鱼了。"
   },
   {
    "text": "问乌什卡打算怎么办",
    "once": true,
    "if": "party.ushka",
    "effects": [
     "codex khak_bazi",
     "approval ushka +1"
    ],
    "result": "她伸出两根手指，说要两天，先拆开，再烧，烧完把骨头磨成粉。这得有一块能生火的平地，可城里找不出这样的地方。“等磨完了，谁也别想再用他。”"
   },
   {
    "text": "向卡莱昂借一头骡子",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "rep.league >= 2",
       "n": 2,
       "why": "旧东坎诺认得你"
      }
     ]
    },
    "ok": {
     "text": "卡莱昂说那头骡子是他女儿的，叫你们别给累死了，过了一会儿，家丁牵来一头灰骡，有只耳朵缺了一角。",
     "effects": [
      "flag a1_mule"
     ]
    },
    "fail": {
     "text": "卡莱昂说他的骡子不拉兽人，这一来，车辕只好你们自己扛了。",
     "effects": [
      "flag a1_pull"
     ]
    }
   },
   {
    "text": "说尸首该归他儿子，这是名分",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "once": true,
    "effects": [
     "rep clans +1",
     "rep league -1",
     "flag a1_heir_named"
    ],
    "result": "卡莱昂的脸沉了一下，老兽人抬起头来看了你好一会儿，把你的长相记住了。"
   },
   {
    "text": "在出城的单子上签字",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge'",
    "once": true,
    "effects": [
     "flag a1_signed_whole",
     "rep companies +1"
    ],
    "result": "书记把单子推了过来，上面写着“尸首一具，完整”，你签了字，往后这尸首哪怕少一根指头，都得算在你头上。"
   },
   {
    "text": "把手按在门板上：今晚谁也不许再出价",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag a1_table_pressed",
     "rep league -1",
     "rep companies -1"
    ],
    "result": "门板往下沉了一指，底下的酒桶吱地响了一声。瓦丽娜合上了箱盖，边区兵也把刀收了起来，只有冈瑟从耳朵上摘下半截炭笔，在门板边上画了一道，画完还看了你一眼。",
    "goto": "a1_02"
   },
   {
    "text": "今晚先出城，路上再说",
    "goto": "a1_02"
   }
  ]
 },
 "a1_02": {
  "id": "a1_02",
  "title": "这马生前穿靴子？",
  "loc": "下城 · 钴蓝兵团的哨卡 · 深夜",
  "text": [
   "去地下通道得从银瀑底下的口子进，下城人管那儿叫粪瀑，那味道倒也配得上这个名字。半路上有个卡子，横着三根拒马，支着一口煮豆子的锅，守卡的是四个胳膊上扎蓝布条的兵。",
   "尸首上盖了张草席，可惜草席短了一截，两只靴子还是露在外头。{?flag.a1_mule:灰骡子嫌车沉，走两步就要停一步。|骡子没借着，车辕只能压在你们自己肩上，走得一步一个脚印。}",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "别去看他们的锅。盯着锅看的人像是饿着的，饿着的人好欺负。"
   },
   {
    "if": "is.god",
    "text": "哨兵看见了你，先去看车上那两只靴子，又转回来看你，一时拿不准该先拦哪一样。"
   },
   {
    "speaker": "哨兵",
    "text": "站住！车上拉的什么？"
   }
  ],
  "choices": [
   {
    "text": "说是害了热病的马肉，拉出城去烧",
    "check": {
     "skill": "deception",
     "dc": 13,
     "party": true,
     "adv": "flag.a1_table_pressed"
    },
    "ok": {
     "text": "他捂着鼻子退开两步，连连挥手叫你们快走，连锅里的豆子都不想吃了。",
     "goto": "a1_03"
    },
    "fail": {
     "text": "哨兵拿矛杆挑起草席一角，看了看那双靴子。“这马生前穿靴子？”说完他就把哨子塞进了嘴里。",
     "goto": "a1_02b"
    }
   },
   {
    "text": "绕后巷，从晾衣绳底下钻过去",
    "check": {
     "skill": "stealth",
     "dc": 12,
     "party": true,
     "dis": "flag.a1_pull"
    },
    "ok": {
     "text": "后巷窄得刚好够过一根车轴，楼上有人倒了一盆水下来，好在没往下看，等你们出了巷口，卡子已经落在身后了。",
     "goto": "a1_03"
    },
    "fail": {
     "text": "车轮压翻了一只夜壶，整条巷子的狗都叫了起来，哨子也跟着响了。",
     "goto": "a1_02b"
    }
   },
   {
    "text": "往锅边放二十金冠",
    "req": "gold >= 20",
    "reqText": "需要 20 金冠",
    "cost": {
     "gold": 20
    },
    "result": "钱落在锅边的豆子堆里，哨兵数了数，把拒马挪开了半根。",
    "goto": "a1_03"
   },
   {
    "text": "亮出那封带火漆的信",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && item.bardswood_letter",
    "effects": [
     "flag letter_shown",
     "rep companies -1"
    ],
    "result": "哨兵不识字，可火漆上的纹样他认得，他叫来的伍长认得的就更多了，脸都吓白了，赶紧挥手放行。用不着等到天亮，这件事就会传到冈瑟的耳朵里。",
    "goto": "a1_03"
   }
  ]
 },
 "a1_02b": {
  "id": "a1_02b",
  "title": "几分利",
  "text": [
   "哨子一响，半条街的窗板都推开了，有人探出头来喊了一声“杜坎森出城了”，喊完又缩了回去。这一来，等不到天亮，下城就有一半的人知道这辆车是往哪边走的了。",
   "冈瑟是披着毯子跑来的，脚上只穿了一只靴子，嘴里还嚼着东西。这人是苔藓滩来的老兵，加韦德王室赖过他整整一年的饷，打那以后他不管见了谁都要先算利钱。",
   {
    "speaker": "冈瑟",
    "text": "杜坎森？拉出去好啊，省得搁在城里招苍蝇，不过要过我的卡子，得交三十金冠。没有？没有那就记账，按一分五的利算，我这人记性好着呢。"
   },
   {
    "if": "flag.letter_shown",
    "speaker": "冈瑟",
    "text": "还有啊，替巴兹伍德先生跑腿的那位，下回别把火漆往当兵的脸上怼了，他们会害怕的。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "一分五？你这是抢钱呀！"
   }
  ],
  "first": [
   "flag cart_known"
  ],
  "choices": [
   {
    "text": "付三十金冠",
    "req": "gold >= 30",
    "reqText": "需要 30 金冠",
    "cost": {
     "gold": 30
    },
    "result": "冈瑟把金冠一枚一枚咬过，才收进毯子底下。“这年头不赊账的人可难得啊。”",
    "goto": "a1_03"
   },
   {
    "text": "让他记账",
    "effects": [
     "rep companies -1"
    ],
    "result": "他从耳朵上摘下半截炭笔，在拒马上画了一道。“钴蓝兵团的账啊，跟石头一样，烧不烂的。”",
    "goto": "a1_03"
   }
  ]
 },
 "a1_03": {
  "id": "a1_03",
  "title": "地下通道",
  "loc": "巴尔加尔的地下通道",
  "date": "1444年奈拉月13日凌晨",
  "text": [
   "当年巴尔加尔盖这座城的时候，在城底下留了一条通道，从来没人给它画过图。里头的水没过脚踝，墙上一排排的凿痕是矮人的手艺，凿的地方比人的肩膀还高出一截。",
   "前头传来铁链响，原来是四十来个洞穴地精给拴在一根链子上，蹲在一处干台子上，有几个还在啃链环。管这串人的链头是个嗜血者老兵，他把主链缠在腰上，手里提着一把劈柴的斧子。撤退的号他是听见了的，可他舍不得这一串脚夫，打算拉着他们往山里走。",
   "就在这时候，排水沟的铁栅后头冒出来一对黄眼睛，是个森林地精，帽子上插着根绿羽毛，两只手扒着栅栏。",
   {
    "speaker": "妮克西",
    "text": "规矩第七条，先谈价，后救命！我来给你们带路，你们呢，把那条链子砸开，完了再算我一份，怎么样？哦对了，我是地鹰氏族的，叫妮克西。"
   },
   {
    "speaker": "妮克西",
    "text": "欠我们的那位是死了，可债没死呀。你们车上拉的那个嘛，跟这笔账也有点关系。"
   },
   {
    "if": "flag.knows_underpass",
    "text": "水闸在哪儿你是记得的，在左手第三根柱子后头，只是闸轮已经锈死了一半。"
   },
   {
    "if": "is.goblin",
    "text": "链子上有个老地精认出你是同类，用地精话骂了你一句，骂的是你来晚了。"
   }
  ],
  "first": [
   "companion +nixee",
   "quest q_debt start",
   "codex chainbreak",
   "codex groundhawk"
  ],
  "choices": [
   {
    "text": "冲上去，先把链头放倒",
    "combat": {
     "title": "地下通道",
     "intro": "链头把主链在胳膊上绕了两圈，一拽，一串地精全扑倒在水里。",
     "enemies": [
      {
       "id": "underpass_overseer"
      },
      {
       "id": "orc_raider",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把上游的水放下来，冲倒站在低处的人",
       "check": {
        "skill": "athletics",
        "dc": 12,
        "adv": "flag.knows_underpass"
       },
       "success": {
        "text": "闸门一抬，黑水卷着烂木头冲了下来，链头和他手下的人都站不住脚了。",
        "dmgAll": "3d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "闸轮卡死了，你白白磨掉了手掌上一层皮。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "chain",
       "name": "砸开主链",
       "desc": "链子一断，就没人替他挡着了",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "链环崩开了，三个地精抄起断链就往链头腿上抽，这下他身边再没人替他挡着了。",
        "applyAll": {
         "cond": "exposed",
         "turns": 2
        }
       },
       "fail": {
        "text": "锤子砸偏了，火星溅了你一脸。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 150"
      ],
      "goto": "a1_04"
     },
     "lose": {
      "effects": [
       "gold -20",
       "flag a1_half_fled"
      ],
      "goto": "a1_04"
     },
     "reward": [
      "gold +15"
     ]
    }
   },
   {
    "text": "掰住闸轮，让水一口气放下来",
    "tag": "战士系",
    "if": "is.martial",
    "combat": {
     "title": "地下通道",
     "intro": "闸轮在你手里转了半圈就卡住了，你硬是又把它掰过去半圈，水还没到，水声已经先到了。",
     "enemies": [
      {
       "id": "underpass_overseer"
      },
      {
       "id": "orc_raider",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "sluice",
       "name": "松开闸轮",
       "desc": "你一直掰着闸轮，一松手水就下来",
       "success": {
        "text": "你一松手，闸门就给砸开了，黑水把链头那一伙冲出去三步远。",
        "dmgAll": "3d6",
        "type": "bludgeoning"
       }
      },
      {
       "id": "chain",
       "name": "砸开主链",
       "desc": "链子一断，就没人替他挡着了",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "链环崩开了，三个地精抄起断链就往链头腿上抽。",
        "applyAll": {
         "cond": "exposed",
         "turns": 2
        }
       },
       "fail": {
        "text": "锤子砸偏了，火星溅了你一脸。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 150"
      ],
      "goto": "a1_04"
     },
     "lose": {
      "effects": [
       "gold -20",
       "flag a1_half_fled"
      ],
      "goto": "a1_04"
     },
     "reward": [
      "gold +15"
     ]
    }
   },
   {
    "text": "钻进排水沟，绕到链头背后",
    "tag": "矮个子",
    "if": "is.small",
    "check": {
     "skill": "stealth",
     "dc": 12,
     "adv": "party.nixee"
    },
    "ok": {
     "text": "沟里全是淤泥，宽窄正好够你这个头钻过去，等你从链头脚边冒出来的时候，他还在朝前头吼呢。",
     "combat": {
      "title": "地下通道",
      "intro": "链头还没来得及回头，你的刀已经到了。",
      "enemies": [
       {
        "id": "underpass_overseer"
       },
       {
        "id": "orc_raider",
        "n": 2
       }
      ],
      "specials": [
       {
        "id": "backstab",
        "name": "从背后下手",
        "desc": "趁他还没转身下手",
        "success": {
         "text": "你一刀扎进他的膝弯，他扑通跪进水里，手里的链子也松了。",
         "dmgAll": "2d6",
         "type": "piercing"
        }
       },
       {
        "id": "chain",
        "name": "砸开主链",
        "desc": "链子一断，就没人替他挡着了",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "链环崩开了，三个地精抄起断链就往链头腿上抽。",
         "applyAll": {
          "cond": "exposed",
          "turns": 2
         }
        },
        "fail": {
         "text": "锤子砸偏了，火星溅了你一脸。",
         "selfDmg": "1d4"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 150"
       ],
       "goto": "a1_04"
      },
      "lose": {
       "effects": [
        "gold -20",
        "flag a1_half_fled"
       ],
       "goto": "a1_04"
      },
      "reward": [
       "gold +15"
      ]
     }
    },
    "fail": {
     "text": "沟里卡着一只死耗子和半截门栓，等你好不容易钻出来，浑身上下全是泥，链头正在外头等着你呢。",
     "combat": {
      "title": "地下通道",
      "intro": "链头一把揪住你的领子，把你从沟里拎了出来。",
      "enemies": [
       {
        "id": "underpass_overseer"
       },
       {
        "id": "orc_raider",
        "n": 2
       }
      ],
      "specials": [
       {
        "id": "sluice",
        "name": "开水闸",
        "desc": "把上游的水放下来",
        "check": {
         "skill": "athletics",
         "dc": 12,
         "adv": "flag.knows_underpass"
        },
        "success": {
         "text": "闸门一抬，黑水卷着烂木头冲了下来。",
         "dmgAll": "3d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "闸轮卡死了，怎么也扳不动。",
         "selfDmg": "1d4"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 150"
       ],
       "goto": "a1_04"
      },
      "lose": {
       "effects": [
        "gold -20",
        "flag a1_half_fled"
       ],
       "goto": "a1_04"
      }
     }
    }
   }
  ]
 },
 "a1_04": {
  "id": "a1_04",
  "title": "四十个地精",
  "art": "ev_goblin_ambush",
  "loc": "地下通道的出口 · 天亮前",
  "text": [
   "{?flag.a1_half_fled:你们是让地精从水里拖上岸的。监工带着半串人往深处跑了，剩下的只有二十来个。|链头倒在水里，主链断成了三截。}地精们坐在出口的台阶上发愣，那台阶是照着人的腿修的，一级就有他们半条腿高。",
   "出口外头是一片烂菜地，再往外就是边区兵的巡逻线了，火把一字排开，眼看天也快亮了。",
   "有个地精老太太会说通用语，她把断链子团成一团抱在怀里，跟抱孩子似的。",
   {
    "speaker": "地精老太太",
    "text": "这链子我留着，回头压腌菜坛子用。至于人往哪儿去嘛，你们说吧。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "规矩第一条，活着。第二条呢，别信长得高的。你们也算长得高的，这话我可先说清楚啦。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "庙里有个地窖，原先是存灯油的，能蹲下三十个人，挤一挤的话四十个也行。钥匙就在我这儿。"
   },
   {
    "if": "is.goblin",
    "text": "老太太看了你一眼，换成地精话又问了一遍，这回问的是，你到底跟他们是一伙的，还是跟我们是一伙的。"
   }
  ],
  "choices": [
   {
    "text": "藏进万神道那座庙的地窖",
    "effects": [
     "flag goblins_hidden",
     "world room +1",
     "gold -30",
     "approval tan +1",
     "approval nixee +1"
    ],
    "result": "阿坦打开地窖，把里头的半桶灯油搬走了，口粮是你们掏的钱，买了三十金冠的豆子和咸鱼。老太太头一个下去，把链子留在了台阶上。",
    "goto": "a1_05"
   },
   {
    "text": "把监工一伙的兵器分给他们，让他们自己守通道",
    "effects": [
     "flag goblins_armed",
     "world room +1",
     "rep league -1",
     "rep clans +1"
    ],
    "result": "分下去的是两把斧子、一捆矛和一面盾，个头最大的那个地精扛起了斧子，斧柄比他人还长。巡逻线那边有人看见了，也记下了。",
    "goto": "a1_05"
   },
   {
    "text": "藏进地窖，先让他们推一个说话的人",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "flag goblins_hidden",
     "flag goblin_speaker",
     "world room +1",
     "gold -30",
     "rep clans +1",
     "approval tan +1",
     "approval nixee +1"
    ],
    "result": "他们吵了有一盏茶的工夫，最后推了老太太。她把链子往你手里一塞，说：“下回有话要说，找我。”",
    "goto": "a1_05"
   },
   {
    "text": "分了兵器让他们守通道，先推一个说话的人",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "flag goblins_armed",
     "flag goblin_speaker",
     "world room +1",
     "rep league -1",
     "rep clans +2"
    ],
    "result": "推出来的是扛斧子的那个，他把斧子换到另一边肩膀上，说往后通道口就归他管了，不管谁来都得先敲三下。",
    "goto": "a1_05"
   },
   {
    "text": "交给边区兵，换一张出城的路条",
    "effects": [
     "flag goblins_handed",
     "world room -1",
     "rep companies +1",
     "gold +40",
     "approval nixee -3",
     "approval tan -1"
    ],
    "result": "边区兵的伍长数过了人头，给了你一张路条，外加四十金冠，老太太给人推上大车的时候，连头也没回。",
    "goto": "a1_05"
   }
  ]
 },
 "a1_05": {
  "id": "a1_05",
  "title": "板车边的营火",
  "art": "ev_dmarvuks",
  "loc": "银池湖路 · 一座空谷仓外",
  "date": "1444年奈拉月13日夜",
  "shop": {
   "name": "温斯顿·愚足",
   "blurb": "这半身人推着货担追了你们整整一天，他的东西不便宜，不过饼是热的。",
   "stock": [
    "healing_potion",
    "bandage",
    "antidote",
    "halfling_pie",
    "holy_water",
    "shield",
    "leather"
   ]
  },
  "text": [
   "车停在湖路边上一座空谷仓的外头，谷仓的门板早让人拆去烧火了，里头只剩下几只破粮袋。入夜以后，粮袋那边有东西在啃，啃得一刻也不停。",
   "{?origin != 'grudge':火是布罗克生的，他嫌人类劈的柴太细。|火是乌什卡生的，她把柴劈得一般长。}阿坦把灯挂在了车辕上，杜坎森的脚还露在草席外头，不知是谁往上头盖了件斗篷。",
   "天黑透了以后，路上推过来一副货担，来的是温斯顿·愚足，他追了你们一整天，说自己在城里待不住，手上闲得慌。",
   {
    "speaker": "愚足",
    "text": "先吃，先吃！肉饼、咸鱼、豆子，要哪样都行。那边那位不着急的，可饼要是凉了，那才叫人着急呢。"
   },
   {
    "if": "flag.p_lied && party.tan",
    "text": "阿坦往火里添了根柴，问起你在城里跟那个快死的人说的那些话，他问得平平静静的，问完也就不再说什么了。"
   },
   {
    "if": "flag.p_truth && party.ushka",
    "speaker": "乌什卡",
    "text": "城里那个快死的人，你没骗他。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "我问一句，王在哪儿？……原来你也不知道啊。那我还是接着问他吧。"
   },
   {
    "if": "is.god && party.nixee",
    "speaker": "妮克西",
    "text": "神迹得按件算，不赊账的呀。我先把价钱报给你，省得你叫别人给坑啦。"
   },
   {
    "if": "is.god && origin != 'sons'",
    "text": "达拉斯拿了根打了结的线，从你的肩膀一直量到脚后跟，他说自己给死人做寿衣做惯了，先量一量，万一呢。"
   },
   {
    "if": "var.lies >= 3 && party.tan",
    "text": "你说过的那些好听话，阿坦一句一句数了数，数到三，抬起头来看了你一眼。"
   }
  ],
  "first": [
   "quest q_korgus stage 2",
   {
    "if": "flag.p_lied && party.tan",
    "then": [
     "approval tan -1"
    ]
   },
   {
    "if": "flag.p_truth && party.ushka",
    "then": [
     "approval ushka +1"
    ]
   }
  ],
  "enter": [
   {
    "if": "var.lies >= 3 && party.tan && !flag.a1_lies_asked",
    "then": [
     "approval tan -1",
     "flag a1_lies_asked"
    ]
   }
  ],
  "choices": [
   {
    "text": "看乌什卡刻那根木签",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "quest q_ushka start",
     "approval ushka +1"
    ],
    "result": "木签上已经刻了十一道，她说这是骑士的规矩，是跟冒险团学来的，头一条是“不杀投降的”，第六条是“吃饭先让伤号”，第十二道眼下还空着。"
   },
   {
    "text": "天快亮时，听阿坦做晨祷",
    "if": "party.tan",
    "once": true,
    "effects": [
     "codex dawn_office",
     "codex castellos",
     "codex regent_court",
     "item +petition_book"
    ],
    "result": "他朝东站着，一共念了四十句，念完就停了，然后把庙里那本祈愿簿塞给你看，上头记了二十年的祷告，回音那一栏却一直是空的。"
   },
   {
    "text": "听妮克西背她的规矩",
    "if": "party.nixee",
    "once": true,
    "effects": [
     "codex goblin_rules",
     "approval nixee +1"
    ],
    "result": "她的规矩条条都有编号，只是从来没写成文，背到第四十条她就打住了，说后面的得收钱。"
   },
   {
    "text": "问愚足，她这回还起不起来",
    "once": true,
    "effects": [
     "rep corintar +1",
     "item +halfling_pie"
    ],
    "result": "愚足把饼掰成两半，分了一半给你。“上回我脑子里一直有个声音，说她没走。这回我在她边上坐了整整一宿，一个字都没等着。”说着他把另一半也塞给了你，说自己不饿。"
   },
   {
    "text": "跟老布兰多克说话",
    "if": "origin != 'corintar'",
    "once": true,
    "effects": [
     "rep corintar +1"
    ],
    "result": "他都五十了，给人擦了半辈子的甲，他说她的甲就是他擦的，护肩上那道缝也是他去年补的。“补得不好啊。”说完他又擦了一遍。"
   },
   {
    "text": "看达拉斯缝东西",
    "if": "origin != 'sons'",
    "once": true,
    "effects": [
     "item +bandage 2"
    ],
    "result": "他缝的是一件寿衣，针脚又密又匀，你问他是给谁缝的，他抬了抬下巴，指了指那边的车，又低下头接着缝。等你要走的时候，他塞给你两卷布条，边都已经锁好了。"
   },
   {
    "text": "替奥托格守前半夜",
    "if": "origin != 'wex'",
    "once": true,
    "effects": [
     "flag a1_ottog_owes"
    ],
    "result": "他的手抖得连杯子都握不住，你就接了他的班。他也没道谢，把大剑往膝盖上一横就睡着了，睡着了手还在抖。"
   },
   {
    "text": "问布罗克那把铲子",
    "if": "origin != 'grudge'",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "那是红宝石领的铲子，七斤二两重，他说人类的铲子是挖菜地用的，挖坟就得用这个，你拿起来掂了掂，比你的刀还沉。"
   },
   {
    "text": "问马布格抬过多少人",
    "if": "origin != 'tide'",
    "once": true,
    "effects": [
     "rep clans +1"
    ],
    "result": "他想了想，说没数过，哪一边的他都抬，抬到地方放下就走。“人死了都是一样沉。”"
   },
   {
    "text": "给尸首抹盐，用席子重新裹一遍",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 11,
     "party": true
    },
    "ok": {
     "text": "你们把愚足那半袋粗盐全用上了，席子外头又扎了三道绳，味道总算压下去不少。",
     "effects": [
      "flag a1_salted"
     ]
    },
    "fail": {
     "text": "盐抹得不匀，席子也扎歪了，半袋盐就这么白搭了，愚足心疼得直咂嘴。",
     "effects": [
      "gold -5"
     ]
    }
   },
   {
    "text": "挑个守夜的地方",
    "once": true,
    "check": {
     "skill": "survival",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你把车挪到了谷仓背风的那一面，又拿火堆挡住门口，粮袋那边啃了一整夜，到底没过来。",
     "effects": [
      "xp 50"
     ]
    },
    "fail": {
     "text": "到了后半夜，啃粮袋的东西把粮袋啃完了，顺着味儿找到了车这边，一共两只，指甲比手指头还长。",
     "combat": {
      "title": "谷仓边",
      "intro": "食尸鬼扒着车帮往上爬，冲的是草席里裹着的那位。",
      "enemies": [
       {
        "id": "ghoul",
        "n": 2
       }
      ],
      "specials": [
       {
        "id": "fire",
        "name": "把火堆踢过去",
        "desc": "它们怕火",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "火炭溅了它们一身，两只都往后缩了回去。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "你一脚踢翻的是锅，豆子撒了一地。",
         "selfDmg": "1d4"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 100"
       ],
       "goto": "a1_05"
      },
      "lose": {
       "effects": [
        "gold -10"
       ],
       "goto": "a1_05"
      }
     }
    }
   },
   {
    "text": "天亮了，路上来了个骑骡子的",
    "goto": "a1_05b"
   }
  ]
 },
 "a1_05b": {
  "id": "a1_05b",
  "title": "骑骡子的精灵",
  "loc": "银池湖路 · 次日清晨",
  "text": [
   "天亮的时候湖面上起了雾。路上来了个精灵女人，骑着一头花骡子，膝盖上摊着个本子，墨水瓶拿绳子拴在骡鞍上。她在车前头勒住了骡子，先看了看杜坎森的脚，然后才看你们。",
   {
    "speaker": "加莱尔",
    "text": "我是加莱尔·守昔者，编年史家。你们抬稳一点。我多问一句啊，他倒下去的时候，脸是朝着哪一边的？"
   },
   "你们怎么答的，她就怎么记，一个字都不改。记完她从本子里抽出一张纸来，上面列着三条，头一条是渔村的龙皮，第二条是蓝宝石望的老太太，第三条是焦塔顶上的银光。",
   {
    "speaker": "加莱尔",
    "text": "今年有人说见着银龙了，一共三起。这种事编年史家会是按件付钱的，不过只要第一手的。你们这辆车哪儿都去，路上也没人盘问。"
   },
   "她把笔尖在墨水瓶口上刮了刮，又想起一件事来。",
   {
    "speaker": "加莱尔",
    "text": "上回会里雇人查这种事，还是八十年前，是我祖母经的手。她说雇来的那几位都很守时。后来他们都死了，死得也很守时。"
   },
   {
    "if": "is.immortal",
    "speaker": "加莱尔",
    "text": "另外，请问你是哪一年生的？我习惯先把这一栏填上。"
   },
   {
    "if": "is.god",
    "text": "你报了个数，她照着写了下来，又在后面添上了“自称”两个字。"
   }
  ],
  "first": [
   "codex chroniclers"
  ],
  "choices": [
   {
    "text": "接下这份差事",
    "effects": [
     "quest q_sightings start",
     "rest long"
    ],
    "result": "她付了定钱，说剩下的按件结，你们在谷仓边上睡了个整觉，出城以后这还是头一回。",
    "goto": "a1_06"
   },
   {
    "text": "先跟她讲定钱",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "party": true,
     "mods": [
      {
       "if": "party.nixee",
       "n": 2,
       "why": "妮克西在旁边帮腔"
      }
     ]
    },
    "ok": {
     "text": "她又数出三十金冠来，顺手在本子上记了一笔：“定钱，三十，雇主吃亏。”",
     "effects": [
      "quest q_sightings start",
      "gold +30",
      "rest long"
     ],
     "goto": "a1_06"
    },
    "fail": {
     "text": "她既不着急也不恼，只在本子上写了一行“爱讲价”，然后照原价付了定钱。",
     "effects": [
      "quest q_sightings start",
      "rep temples -1",
      "rest long"
     ],
     "goto": "a1_06"
    }
   }
  ]
 },
 "a1_06": {
  "id": "a1_06",
  "title": "银池湖路",
  "loc": "银池湖西岸",
  "date": "1444年奈拉月中",
  "text": [
   "湖路上全是回乡的人，有推独轮车的，有背着锅的，还有牵着一头羊的。有一家人正在路边认自家的田，可地界石早让兽人搬去垒灶了。村口的告示板上贴着三张“招募冒险者”，一张是招人打狼的，另外两张是招人收麦子的。",
   "前头过来一队骑士，披风上都绣着灰玫瑰，马后头拴着一串兽人，一共十一个，脖子上都套着绳。领头的是个女人，三十四五岁，胸甲擦得能照见人，一开口是洛伦特的口音。",
   {
    "speaker": "莫古妮娅",
    "text": "我是奥尔丁的莫古妮娅，灰烬玫瑰骑士团的。这几位是我的仆役，都是修路的，等路修好了，诸位走起来不也舒服些吗？倒是诸位这车上盖得这么严实，是什么好东西呀？"
   },
   "她朝草席底下露出来的靴子看了一眼，又去看乌什卡，这一眼看得比看靴子久多了。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "仆役。这个词从她嘴里说出来，跟拴链子是一个意思。"
   },
   {
    "if": "origin == 'tide'",
    "text": "那一串里的第四个你认得，去年冬天在南城，他分过你半块饼。他也看见你了，可是没出声。"
   }
  ],
  "choices": [
   {
    "text": "拦下她，要她放人",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "party": true,
     "alt": [
      "intimidation"
     ],
     "mods": [
      {
       "if": "rep.corintar >= 2",
       "n": 2,
       "why": "科琳塔尔的面子"
      }
     ]
    },
    "ok": {
     "text": "你先提了蓝牙定的那条“不许杀俘”，又问她修路的工钱该由谁来出，她骂了一句，到底还是把绳子割断了。十一个人拔腿就往湖边跑，有一个跑到半道又折回来，朝你点了一下头。",
     "effects": [
      "flag rose_chain_freed",
      "world room +1",
      "rep clans +1"
     ],
     "goto": "a1_07"
    },
    "fail": {
     "text": "莫古妮娅很有耐心地听你说完，夸你口才好，说科琳在的时候想必很喜欢你这样的人，只可惜科琳前几天死了。她这话一出口，身后的骑士就把手搭在了剑柄上。",
     "goto": "a1_06b"
    }
   },
   {
    "text": "拔刀，抢人",
    "combat": {
     "title": "湖路上",
     "intro": "灰玫瑰的骑士拨转了马头，有个兽人叫绳子一拽，倒在了泥里。",
     "enemies": [
      {
       "id": "marcher_veteran",
       "n": 2,
       "name": "灰玫瑰骑士"
      },
      {
       "id": "man_at_arms",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "horses",
       "name": "惊了她的马队",
       "desc": "马比人怕事",
       "check": {
        "skill": "animal",
        "dc": 12
       },
       "success": {
        "text": "你朝马脸上甩了一把湖泥，领头那匹马人立起来，后头的马也跟着乱了套。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "马没受惊，你倒挨了一蹄子。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "flag rose_chain_freed",
       "world room +1",
       "rep companies -1",
       "rep clans +1",
       "xp 150"
      ],
      "goto": "a1_07"
     },
     "lose": {
      "effects": [
       "gold -40",
       "flag rose_chain_bought"
      ],
      "goto": "a1_07"
     }
    }
   },
   {
    "text": "出钱，赎两个",
    "req": "gold >= 60",
    "reqText": "需要 60 金冠",
    "cost": {
     "gold": 60
    },
    "effects": [
     "flag rose_chain_bought"
    ],
    "result": "她挑了两个最瘦的给你，说这两个本来也修不了几天路了，剩下的九个还是跟着马走了。",
    "goto": "a1_07"
   },
   {
    "text": "把车往路边一靠，让她过去",
    "effects": [
     "flag rose_chain_ignored",
     "world room -1",
     "approval ushka -1",
     {
      "if": "origin == 'tide'",
      "then": [
       "approval ushka -1"
      ]
     }
    ],
    "result": "十一个人从你们车边上走了过去，绳子在泥里拖出一道沟来，乌什卡一直盯着他们看，直看到看不见了才罢。",
    "goto": "a1_07"
   }
  ]
 },
 "a1_06b": {
  "id": "a1_06b",
  "title": "剑柄上的手",
  "text": [
   "湖路上一下子就空了，推独轮车的把车推进了沟里，牵羊的抱着羊蹲到了告示板后头。",
   "莫古妮娅没有拔剑，她是在等你先拔。她身后有四个人，两个是披甲的老兵，两个是扈兵。那一串兽人都低着头，只有一个抬起眼来看你。",
   {
    "speaker": "莫古妮娅",
    "text": "诸位是打算让一让呢，还是拔剑？哪一样我都奉陪。只不过我赶时间，再说诸位车上那位，闻着也不像是等得起的。"
   }
  ],
  "choices": [
   {
    "text": "拔",
    "combat": {
     "title": "湖路上",
     "intro": "她早就等着这一下了，剑才出鞘，马已经冲了起来。",
     "enemies": [
      {
       "id": "marcher_veteran",
       "n": 2,
       "name": "灰玫瑰骑士"
      },
      {
       "id": "man_at_arms",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "horses",
       "name": "惊了她的马队",
       "desc": "马比人怕事",
       "check": {
        "skill": "animal",
        "dc": 12
       },
       "success": {
        "text": "领头那匹马人立起来，后头的也跟着乱了套。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "马没受惊，你倒挨了一蹄子。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "flag rose_chain_freed",
       "world room +1",
       "rep companies -1",
       "rep clans +1",
       "xp 150"
      ],
      "goto": "a1_07"
     },
     "lose": {
      "effects": [
       "gold -40",
       "flag rose_chain_bought"
      ],
      "goto": "a1_07"
     }
    }
   },
   {
    "text": "让路",
    "effects": [
     "flag rose_chain_ignored",
     "world room -1",
     "approval ushka -1",
     {
      "if": "origin == 'tide'",
      "then": [
       "approval ushka -1"
      ]
     }
    ],
    "result": "她点了点头，好像早料到会这样，十一个人从你们车边上走了过去，方才抬眼的那个又把头低下了。",
    "goto": "a1_07"
   }
  ]
 },
 "a1_07": {
  "id": "a1_07",
  "title": "第一起：银粉",
  "art": "ev_dragon_fly",
  "loc": "湖边的一个渔村",
  "text": [
   "这渔村只有十几户人家，晒网的竿子倒比房子还多。村口支着个棚子，棚里挂着一张皮，足有门板那么宽，在风里一闪一闪地发亮。棚子前头排着队，大半是刚回乡的人。",
   {
    "speaker": "摊主",
    "text": "银龙蜕下来的皮哟！一个铜板看一眼，两个铜板摸一下！摸一下治风湿，摸上两回管一年！"
   },
   "加莱尔站在队尾，摊开本子，一笔一笔地记排队的人数，她说得先记人，再记皮。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "书上说银龙的鳞是白的，到了太阳底下会发蓝。可这一张是灰的，只是上头抹了一层亮。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "两个铜板摸一下呀？比我们地精做买卖还黑，这个我得记下来。"
   }
  ],
  "first": [
   "quest q_sightings stage 2"
  ],
  "choices": [
   {
    "text": "掏两个铜板，凑近了摸一摸",
    "check": {
     "skill": "investigation",
     "dc": 12,
     "alt": [
      "nature"
     ],
     "party": true
    },
    "ok": {
     "text": "你的指头上沾了一层银粉，再掀起一片鳞来看，鳞根是褐色的，原来这是一头双足飞龙的皮，死了还不到两年。",
     "goto": "a1_07b"
    },
    "fail": {
     "text": "你看了半天也没看出什么名堂，摊主说想细看就得买一角，要十金冠，你只好买了，拿回去一刮，银粉底下是褐色的。",
     "effects": [
      "gold -10"
     ],
     "goto": "a1_07b"
    }
   },
   {
    "text": "凑上去闻一闻那张皮",
    "tag": "自然系",
    "if": "is.nature",
    "effects": [
     "flag a1_hide_smelled"
    ],
    "result": "银粉底下有一股松脂味，还混着火山灰的味道，可见这是试炼山那一带的双足飞龙，那边的松林就是这个味。",
    "goto": "a1_07b"
   }
  ]
 },
 "a1_07b": {
  "id": "a1_07b",
  "title": "刷了银粉的皮",
  "text": [
   "摊主看出你已经看出来了，赶紧把你拉到棚子后头，压着嗓子说他表哥是随军祭司，皮是表哥从山上弄来的，连银粉也是表哥给的。“大家伙儿不就图个念想嘛。”",
   "棚子前头的队还在排着，有个老头背着瘫了半边的老伴，已经排到第三个了。",
   {
    "speaker": "加莱尔",
    "text": "我是按件付钱的，你们打算怎么处置，我不管。不过你们是怎么处置的，我会记下来。"
   },
   {
    "if": "flag.a1_hide_smelled",
    "speaker": "加莱尔",
    "text": "试炼山的松脂，这一句我替你记上了，署的是你的名字。"
   }
  ],
  "choices": [
   {
    "text": "当着排队的人，把银粉刮下来",
    "effects": [
     "rep temples -1",
     "gold +20",
     "approval nixee +1"
    ],
    "result": "你刮了一道，底下的褐鳞就露出来了，队伍当场散了一半，只有那个老头背着老伴没走，又排了一会儿。摊主的表哥那边，也把这件事记到你头上了。",
    "goto": "a1_08"
   },
   {
    "text": "私下让他收摊",
    "effects": [
     "gold +20",
     "approval tan +1"
    ],
    "result": "他天黑以前就收了摊，把皮卷起来扛着走了，说要去下一个村子，至于是哪个村子，你没有问。",
    "goto": "a1_08"
   },
   {
    "text": "由他去",
    "effects": [
     "gold +10"
    ],
    "result": "加莱尔照样付了钱，只是少给了一半，她说“由他去”也算一种处置，值一半。",
    "goto": "a1_08"
   }
  ]
 },
 "a1_08": {
  "id": "a1_08",
  "title": "第二起：仰头的老太太",
  "art": "ev_big_star_in_sky",
  "loc": "蓝宝石望 · 一座塌了半边的塔",
  "text": [
   "蓝宝石望的塔已经塌了半边，从前蓝宝石之眼的骑士就住在这儿，四百年里一直替东坎诺的历代国王看比武、判输赢。如今楼梯还剩一百多级，塔顶上住着个老太太，身上裹着三层毯子，脚边摆着一只炭盆，盆里的炭早就灭了。墙上用炭条画满了道道，一天画一道，五道捆成一捆。",
   "村里人都说她见过银龙，她自己却说没有，二十年了，她每天都上来看一回天，可一回也没见着。",
   {
    "speaker": "老太太",
    "text": "你说，会不会是我哪天眨眼的时候，正好给错过了呀？"
   },
   {
    "if": "flag.a1_blink",
    "text": "她问完就盯着你的眼睛看，你眨一下，她的嘴唇就动一下，原来她是在数你眨眼。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "有七千二百多道。我才数了一面墙，还有两面没数呢。"
   },
   {
    "if": "is.god",
    "text": "她不再看天了，转过身来看着你，看了很久很久，才问了一句：“是你吗？”"
   }
  ],
  "first": [
   "quest q_sightings stage 3"
  ],
  "choices": [
   {
    "text": "看看她到底想听什么",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "她的手一直按在那本天象簿上，按得紧紧的，她要的只是一句准话，哪一句都行，只要是准的。",
     "effects": [
      "flag a1_blink"
     ]
    },
    "fail": {
     "text": "你看了半天，只看出来她冷，就从包里摸出五金冠，托人给她送一筐炭上来。",
     "effects": [
      "gold -5"
     ]
    }
   },
   {
    "text": "说大概是错过了，他来过",
    "effects": [
     "var lies +1",
     "approval tan -1"
    ],
    "result": "她点了点头，把那本簿子撕了，一页一页地喂进炭盆里，说这下可暖和了，墙上的那些道道，她没有擦。",
    "goto": "a1_09"
   },
   {
    "text": "说您没错过，他没来",
    "effects": [
     "item +sky_tally",
     "approval tan +1"
    ],
    "result": "她把天象簿交给了阿坦，说你收着吧，你年轻，眼睛好。阿坦把簿子揣进怀里，揣得仔仔细细的。",
    "goto": "a1_09"
   },
   {
    "text": "问她没见着，为什么还看",
    "effects": [
     "flag a1_she_watches",
     "rep temples +1"
    ],
    "result": "“总得有人看着啊。”她把毯子又裹紧了一层，眼睛重新回到了天上。下楼的时候，阿坦在祈愿簿上添了一行，写的是她的名字。",
    "goto": "a1_09"
   },
   {
    "text": "让天上过一道银光给她看",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_faked_dragon",
     "var lies +1",
     "approval tan -3",
     "rep temples +1"
    ],
    "result": "一道银光从天上划了过去，从塔顶一直拉到湖的那一边。她看见了，在墙上划下最后一道，划得很重，当天晚上她就走了。三天以后，神殿的人抬着“第四起银龙现身”的牌子在蓝宝石望游街，阿坦没有去看。",
    "goto": "a1_09"
   }
  ]
 },
 "a1_09": {
  "id": "a1_09",
  "title": "死齿的罐子",
  "art": "ev_priest_phantom",
  "loc": "湖路 · 芦苇荡 · 夜",
  "text": [
   "{?flag.a1_mule:到了半夜，先叫起来的是灰骡子。|到了半夜，先叫起来的是拴在车边的狗。}紧接着芦苇里站起来一排兽人，脸上都抹着白灰，白得发青，领头的提着一只陶罐，罐口拿蜡封着，蜡上还按了个手印。",
   "他们并不看车上的尸首，看的是尸首上头那块空着的地方，好像那儿还站着个什么人。再往后看，芦苇边上还有个瘦高的兽人，袖着手站在那儿一动不动，只管看着。",
   {
    "speaker": "死语者",
    "text": "肉你们留着，我们只要他开口说话。等他说完了，你们照样把他拉走。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡把刀和锤一块儿抽了出来，左手拿刀，右手拿锤，从城里一路走到这儿，她还是头一回两样一起拿。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "是死齿的人。他们拿罐子装人，装进去就不放出来了。"
   },
   {
    "if": "flag.cart_known",
    "text": "芦苇那头又站起来两个，看来城里那一声哨子，传得比你们走得还快。"
   },
   {
    "if": "is.god",
    "text": "领头的回过头去问后面那个瘦高的，神到底有没有魂，罐子又装不装得下。缝尸者斯劳把手从袖子里抽出来，朝你比了比罐口的大小，摇了摇头，又把手袖了回去。"
   },
   {
    "if": "is.god && party.ushka",
    "speaker": "乌什卡",
    "text": "死不了的我见过，到头来都得有人去放倒。今晚先放倒他们。"
   }
  ],
  "first": [
   "codex deadfang"
  ],
  "choices": [
   {
    "text": "守住车",
    "if": "!flag.cart_known",
    "combat": {
     "title": "芦苇荡",
     "intro": "死语者一掌拍开罐口的蜡，芦苇荡里的风一下子就停了。",
     "enemies": [
      {
       "id": "death_whisperer"
      },
      {
       "id": "orc_raider",
       "n": 3
      },
      {
       "id": "ghoul"
      }
     ],
     "specials": [
      {
       "id": "jar",
       "name": "砸罐子",
       "desc": "罐子一碎，他就叫不起人来了",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "罐子在石头上摔成了七八片，一股凉气贴着地皮散开了，抹白灰的那几个都愣了一下。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        },
        "effects": [
         "flag jar_broken",
         "world unburied -1"
        ]
       },
       "fail": {
        "text": "你扑了个空，罐子还在他手里，自己的膝盖倒磕在了石头上。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "water",
       "name": "把车推进浅水",
       "desc": "他们的死人不下水",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "车轮一进水，食尸鬼就在岸上停住了，只敢绕着水边打转。",
        "applyAll": {
         "cond": "slowed",
         "turns": 2
        }
       },
       "fail": {
        "text": "车陷进了淤泥里，推不动了。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 250",
       "item +goblin_bomb",
       {
        "if": "!flag.jar_broken",
        "then": [
         "flag ghost_taken",
         "world unburied +1"
        ]
       }
      ],
      "goto": "a1_10"
     },
     "lose": {
      "effects": [
       "flag ghost_taken",
       "world unburied +1"
      ],
      "goto": "a1_10"
     }
    }
   },
   {
    "text": "守住车",
    "if": "flag.cart_known",
    "combat": {
     "title": "芦苇荡",
     "intro": "死语者一掌拍开罐口的蜡，芦苇荡里的风一下子就停了，两边都有人朝车这边摸了过来。",
     "enemies": [
      {
       "id": "death_whisperer"
      },
      {
       "id": "orc_raider",
       "n": 5
      },
      {
       "id": "ghoul"
      }
     ],
     "specials": [
      {
       "id": "jar",
       "name": "砸罐子",
       "desc": "罐子一碎，他就叫不起人来了",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "罐子在石头上摔成了七八片，一股凉气贴着地皮散开了。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        },
        "effects": [
         "flag jar_broken",
         "world unburied -1"
        ]
       },
       "fail": {
        "text": "你扑了个空，膝盖磕在了石头上。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "water",
       "name": "把车推进浅水",
       "desc": "他们的死人不下水",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "车轮一进水，食尸鬼就在岸上停住了。",
        "applyAll": {
         "cond": "slowed",
         "turns": 2
        }
       },
       "fail": {
        "text": "车陷进了淤泥里，推不动了。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 250",
       "item +goblin_bomb",
       {
        "if": "!flag.jar_broken",
        "then": [
         "flag ghost_taken",
         "world unburied +1"
        ]
       }
      ],
      "goto": "a1_10"
     },
     "lose": {
      "effects": [
       "flag ghost_taken",
       "world unburied +1"
      ],
      "goto": "a1_10"
     }
    }
   }
  ]
 },
 "a1_10": {
  "id": "a1_10",
  "title": "尸首的去向",
  "art": "ev_excalibur",
  "loc": "银池湖边的一块平地",
  "date": "1444年奈拉月下旬",
  "text": [
   "湖边有一块铺着碎石的平地，正好能生火。车一停下，跟了一路的那几拨人也都到了，各自找地方站着。车轮底下垫了两块石头，可谁也没提要走的话。",
   "乌什卡的刀已经磨好了，搁在一块干净的石头上，古尔赞的使者蹲在车轮边上。边区兵来了五个，坐在路边吃干粮，那把剁肉刀就插在土里。瓦丽娜的箱子还开着，她自己坐在箱盖上，还有阿祖科尔的那袋盐放在车辕上，一直没人动过。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "湖里住着一位，叫银夫人，渔民们常往水里扔鱼头供她。要是绑上石头扔下去，也算是交给她了。"
   },
   {
    "if": "flag.ghost_taken",
    "text": "打芦苇荡那一夜以后，尸首就轻了，抬的人个个都这么说，可是上秤又称不出来。"
   },
   {
    "if": "flag.a1_varina_read",
    "text": "瓦丽娜身边的学徒在湖岸上画了个粉笔圈，光尺寸就量了三遍。"
   },
   {
    "if": "flag.a1_heir_named",
    "text": "缠白布的使者认出了你，朝你点了一下头，门板桌那天晚上是谁说的“归儿子”，他一直记着呢。"
   },
   {
    "if": "is.god",
    "text": "使者站了起来，当着所有人的面问你，他到底是不是杜坎的儿子，问完他就站在那儿等着，连边区兵也停了嘴不嚼了。"
   }
  ],
  "first": [
   "level 3",
   "codex iron_sceptre"
  ],
  "choices": [
   {
    "text": "当众说：是",
    "tag": "神",
    "if": "is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown",
    "once": true,
    "effects": [
     "flag god_named_korgus",
     "world embers +2"
    ],
    "result": "使者跪了下去，两只手按在地上，边区兵里有人往地上吐了口唾沫。用不着等到天黑，这句话就会顺着艾伦河往北传开。"
   },
   {
    "text": "当众说：不是",
    "tag": "神",
    "if": "is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown",
    "once": true,
    "effects": [
     "flag god_denied_korgus",
     "world embers -1",
     "rep clans -2"
    ],
    "result": "使者站着没动，脸上的白布叫风吹开了一角。他走的时候连声招呼都没跟你打，打那以后，氏族里就有人管你叫仇神了。"
   },
   {
    "text": "照实说：不知道",
    "tag": "神",
    "if": "is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown",
    "once": true,
    "effects": [
     "flag a1_god_unknown",
     "approval tan +1"
    ],
    "result": "使者看了你很久，才又蹲回车轮边上去，你是他见过的头一个说不知道的神，他也不知道自己是该失望还是该放心。"
   },
   {
    "text": "让乌什卡做归尘礼",
    "if": "party.ushka",
    "goto": "a1_10a"
   },
   {
    "text": "交给古尔赞的使者",
    "effects": [
     "flag korgus_son",
     "flag gurzan_owes",
     "world embers +2",
     "rep clans +2",
     "rep companies -1",
     "rep corintar -1",
     "approval ushka -2",
     {
      "if": "origin == 'tide'",
      "then": [
       "rep clans +1",
       "flag a1_kin"
      ]
     },
     "quest q_korgus done"
    ],
    "result": "使者把门板连着尸首一起扛上了肩，又另叫了三个人过来帮着抬，{?origin == 'tide':临走他回过头来，管你叫了一声亲族。|临走他回头看了一眼那辆车，说长者郡会记着这辆车的。}乌什卡转过身去，不肯看。",
    "goto": "a1_10z"
   },
   {
    "text": "让边区兵把头带回去挂门",
    "effects": [
     "flag korgus_spike",
     "flag gurzan_grudge",
     "world embers +1",
     "world room -1",
     "world unburied +1",
     "rep companies +2",
     "approval ushka -2",
     "quest q_korgus done"
    ],
    "result": "剁肉刀一连落了三下，领头的揪着头发把头提起来看了看，拿麻袋装了。剩下的他们不要，乌什卡就在湖边烧了，只是没有磨。",
    "goto": "a1_10z"
   },
   {
    "text": "把尸首卖给瓦丽娜",
    "effects": [
     "flag korgus_sold",
     "flag gurzan_grudge",
     "flag ushka_warned",
     "gold +400",
     "world unburied +3",
     "rep companies +1",
     "approval ushka -3",
     "quest q_korgus done"
    ],
    "result": "瓦丽娜数出四百金冠，学徒就把尸首抬进了粉笔圈。当天夜里，乌什卡从尸首上砍下一只手，独自走到湖边磨了一整宿，天亮的时候才回来，把一小包骨粉揣进了怀里，只说了一句“第二回我去”。",
    "goto": "a1_10z"
   },
   {
    "text": "绑上石头，沉进湖里",
    "effects": [
     "flag korgus_lake",
     "world embers +1",
     "world unburied +1",
     "approval ushka -1",
     "quest q_korgus done"
    ],
    "result": "你们跟渔民借了条船，划到湖心，给尸首绑上四块石头沉了下去，水面冒了一阵泡，也就平了，渔民说往后再不到这一片下网了。",
    "goto": "a1_10z"
   },
   {
    "text": "交给阿祖科尔的人，收下那袋盐",
    "effects": [
     "flag korgus_carver",
     "world embers +1",
     "rep clans +1",
     "item +bonecarver_salt",
     "approval ushka -1",
     "quest q_korgus done"
    ],
    "result": "雕骨者的三个人拿盐把尸首埋了个严严实实，抬着往东南去了，{?flag.a1_salt_known:那袋盐还真够腌一冬的鱼，|}乌什卡说，雕满了的骨头，过上三代就会有人拿去换酒喝。",
    "goto": "a1_10z"
   }
  ]
 },
 "a1_10a": {
  "id": "a1_10a",
  "title": "归尘礼",
  "text": [
   "乌什卡先动手拆，关节一处一处地卸开，就像木匠拆一张旧桌子，卸下来的骨头按大小码在席子上。她干活的时候不说话，只有一回开了口，是叫你把火再烧旺些。",
   "火得烧上一整夜，烧完的骨头还要等它凉透，凉透了再拿锤子敲碎，敲碎了再磨，偏偏湖边的风是朝你们这边吹的。",
   {
    "speaker": "乌什卡",
    "text": "这副骨头粗，比我说的还要粗。你守着火，我来磨。夜里别睡，火一灭就得从头再来。"
   },
   {
    "if": "flag.ghost_taken",
    "speaker": "乌什卡",
    "text": "我磨的只是料。他本人已经不在里头了，叫罐子装走了。可料也得磨。"
   },
   {
    "if": "flag.a1_salted",
    "text": "亏得盐抹得匀，席子也扎得紧，拆的时候省了不少事，乌什卡看了一眼绳结，什么也没讲，这就算是认了。"
   }
  ],
  "first": [
   "flag korgus_rite",
   "flag gurzan_grudge",
   "world embers -2",
   "world unburied -1",
   "var rites +1",
   "log 归尘礼：科尔古斯·杜坎森。银池湖边，两天。",
   "rep clans -1",
   "approval ushka +3",
   "quest q_korgus done"
  ],
  "choices": [
   {
    "text": "守着火堆熬过这一夜",
    "check": {
     "abil": "con",
     "dc": 12,
     "save": true,
     "adv": "flag.a1_salted"
    },
    "ok": {
     "text": "天亮的时候火还旺着，乌什卡已经磨完了一半，磨出来的粉装了三只皮袋。",
     "goto": "a1_10b"
    },
    "fail": {
     "text": "后半夜你打了个盹，是给火星燎醒的，半边眉毛没了，手背上也起了一溜泡，好在火没灭。",
     "effects": [
      "hp -5"
     ],
     "goto": "a1_10b"
    }
   }
  ]
 },
 "a1_10b": {
  "id": "a1_10b",
  "title": "第二天",
  "text": [
   "第二天晌午，边区兵又回来了，这回来了八个，领头的看了看那三只皮袋，又看了看席子上还没磨的那半堆骨头。",
   {
    "speaker": "边区兵",
    "text": "头呢？营里可是说好了的，要挂北城门，挂满一个月，少一天都不行！你们倒好，给磨成面了？"
   },
   "乌什卡连头也没抬，锤子照旧一下一下地往下落，还剩下没磨的，正是头骨。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "规矩第十九条，要跟带刀的讲道理，先得站到他够不着的地方去呀。"
   }
  ],
  "choices": [
   {
    "text": "跟他们讲，头挂上去一个月，城门底下要死多少人",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "party": true,
     "alt": [
      "intimidation"
     ],
     "mods": [
      {
       "if": "rep.companies >= 2",
       "n": 2,
       "why": "诸团认你"
      }
     ]
    },
    "ok": {
     "text": "领头的听完了，往皮袋上踢了一脚土，带着人走了。乌什卡磨完最后一块，把锤子拿到湖水里涮了涮。",
     "goto": "a1_10z"
    },
    "fail": {
     "text": "他听得不耐烦了，一把将剁肉刀从土里拔了出来。",
     "combat": {
      "title": "湖边",
      "intro": "边区兵直冲着席子上那半堆骨头去了。",
      "enemies": [
       {
        "id": "marcher_veteran",
        "n": 2,
        "name": "边区老兵"
       }
      ],
      "specials": [
       {
        "id": "ash",
        "name": "扬一把灰",
        "desc": "火堆还热着",
        "check": {
         "skill": "sleight",
         "dc": 12
        },
        "success": {
         "text": "一把热灰扬过去，两个人都捂着眼睛往后退。",
         "applyAll": {
          "cond": "blinded",
          "turns": 1
         }
        },
        "fail": {
         "text": "灰叫风吹了回来，反倒迷了你自己的眼。",
         "selfDmg": "1d4"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 150"
       ],
       "goto": "a1_10z"
      },
      "lose": {
       "effects": [
        "rep companies -1",
        "world unburied +1"
       ],
       "goto": "a1_10z"
      }
     }
    }
   },
   {
    "text": "把剩下的头骨护在身后，等乌什卡磨完",
    "effects": [
     "rep companies -1",
     "approval ushka +1"
    ],
    "result": "你们几个往席子前头一站，任他们怎么骂也不还嘴。边区兵足足骂了一刻钟，一直骂到乌什卡把最后一块敲碎，再没什么可抢的了，这才走。临走的时候，领头的把你们几个的长相都记下了。",
    "goto": "a1_10z"
   }
  ]
 },
 "a1_10z": {
  "id": "a1_10z",
  "title": "车上空了一半",
  "text": [
   {
    "if": "flag.korgus_rite",
    "text": "一共装了三只皮袋，乌什卡把一袋倒进了湖里，一袋迎着风扬了，剩下那一袋埋在平地的碎石底下，上头什么也没立。"
   },
   {
    "if": "flag.korgus_son",
    "text": "使者扛着门板往北去了，长者郡远在三百里外，可他说他走得到。"
   },
   {
    "if": "flag.korgus_spike",
    "text": "麻袋里那颗头跟着边区兵回城去了，北城门上早有一颗钉子在等着它。"
   },
   {
    "if": "flag.korgus_sold",
    "text": "瓦丽娜的学徒套了一辆大车，车上蒙着黑布，往湖东岸的营地去了。"
   },
   {
    "if": "flag.korgus_lake",
    "text": "湖心的水早就平了，可渔民的船到如今还是绕着那一片走。"
   },
   {
    "if": "flag.korgus_carver",
    "text": "雕骨者的人已经走远了，盐粒撒了一路，引来一长串鸟跟在后头啄。"
   },
   "车上空了一半，拉起来轻得发飘，往后各营各帐只要问起杜坎森到底在哪儿，说法总有七八种，可没有一种对得上。{?flag.korgus_son:至于长者郡那边的事，外人并不知道。|}{?flag.korgus_carver:雕骨者那边的事，外人也不知道。|}",
   {
    "if": "flag.korgus_sold && party.ushka",
    "speaker": "乌什卡",
    "text": "再有第二回，我就走。这话我早说过了，你记着吧。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "从城里走到这儿，一共是十一天，席子换了两回，绳子换了三回。我都记在祈愿簿的背面了，正面实在写不下。"
   },
   {
    "if": "origin == 'grudge'",
    "text": "那张账页还揣在你怀里，上头写的是玛瑙之门，1424，记在杜坎森名下，要划掉这一条，就得写清楚他的尸首最后到了哪儿。"
   }
  ],
  "choices": [
   {
    "text": "在账页上签“已验明，已处置”",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge' && flag.body_verified && !flag.korgus_son && !flag.korgus_carver",
    "effects": [
     "flag entry_struck",
     "quest q_o_grudge stage 2",
     "rep companies +1"
    ],
    "result": "印记你早在城里就验过了，这会儿只消写上一行字，画个押，那一条就从账上划下去了，墨还没干呢，乌什卡凑过来看了一眼，说你们矮人写字怎么跟刻碑一样慢。",
    "goto": "a1_11"
   },
   {
    "text": "把尸首的记号对一遍，再签“已验明，已处置”",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge' && !flag.body_verified && !flag.korgus_son && !flag.korgus_carver",
    "check": {
     "skill": "investigation",
     "dc": 12,
     "mods": [
      {
       "if": "flag.a1_signed_whole",
       "n": 1,
       "why": "出城时签过“完整”"
      }
     ]
    },
    "ok": {
     "text": "杜坎印记就在他左肩胛骨上，你照着描了一份，贴在账页背面，这才签了字，那一条总算划掉了。",
     "effects": [
      "flag entry_struck",
      "quest q_o_grudge stage 2"
     ],
     "goto": "a1_11"
    },
    "fail": {
     "text": "剩下的这点东西，怎么也对不上你要找的那几处记号，你到底没敢签，账页上那一条只好先留着。",
     "effects": [
      "quest q_o_grudge stage 2"
     ],
     "goto": "a1_11"
    }
   },
   {
    "text": "账页上那一条，签不出来",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge' && (flag.korgus_son || flag.korgus_carver)",
    "effects": [
     "quest q_o_grudge stage 2"
    ],
    "result": "尸首已经到了别人手里，“已处置”这三个字你实在没法往上写，你只好把账页折好收起来，玛瑙之门那一条还留在上头。",
    "goto": "a1_11"
   },
   {
    "text": "套车，回城交差",
    "goto": "a1_11"
   }
  ]
 },
 "a1_11": {
  "id": "a1_11",
  "title": "第三起：焦塔顶上的神迹",
  "art": "ev_dragon_fly",
  "loc": "卡斯托纳斯 · 焦塔",
  "date": "1444年真霜月",
  "text": [
   "你们回城那天，正赶上今年头一场雪。北城那座焦塔，是巨龙苏醒那些年叫一头黑龙烧黑的，后来术士王在里头住过一阵，也没想着把它刷白，如今雪落在上头，看着照样是黑的。",
   "城里已经连着传了三个黄昏，说是日头一落，塔顶上就有一圈银光绕着转。",
   "塔脚下站着四个人，穿的是家丁的衣裳，可袖子一挽，胳膊比哪家的家丁都粗，塔梯就在他们身后，塔身外头的石缝里还长着一溜枯藤，一直爬到了塔顶上。",
   {
    "speaker": "家丁",
    "text": "这是主人家的塔，不让看！要看银龙啊，上对面酒馆楼上看去，两个铜板一位，还有热酒喝呢。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "你瞧他们那鞋，全是新的，鞋底连点泥都没有。谁家的家丁不用干活呀？"
   }
  ],
  "choices": [
   {
    "text": "说你们是元老请来的",
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "party": true,
     "alt": [
      "deception"
     ],
     "mods": [
      {
       "if": "rep.league >= 2",
       "n": 2,
       "why": "旧东坎诺认得你"
      }
     ]
    },
    "ok": {
     "text": "领头的犹豫了一下，还是往旁边让了半步，嘴里说主人家可没交代过这个，出了事你们自己担着。",
     "goto": "a1_11b"
    },
    "fail": {
     "text": "领头的一听就笑了，问你：“元老？哪一位元老啊？”他身后那几个已经把门闩抄在了手里。",
     "combat": {
      "title": "焦塔梯口",
      "intro": "塔梯很窄，一次只容得下一个人上下。",
      "enemies": [
       {
        "id": "thug",
        "n": 2,
        "name": "家丁"
       },
       {
        "id": "cult_initiate",
        "n": 2,
        "name": "家丁"
       }
      ],
      "specials": [
       {
        "id": "beam",
        "name": "推倒梯口的焦木",
        "desc": "梯口堆着一垛烧剩下的房梁。",
        "check": {
         "skill": "athletics",
         "dc": 12
        },
        "success": {
         "text": "焦木轰隆隆滚下来，一下砸翻了两个。",
         "dmgAll": "2d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "焦木只滚了半截就停住了，偏偏压住了你的脚。",
         "selfDmg": "1d4"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 150"
       ],
       "goto": "a1_11b"
      },
      "lose": {
       "effects": [
        "gold -20"
       ],
       "goto": "a1_11b"
      }
     }
    }
   },
   {
    "text": "不跟他们废话，往上闯",
    "combat": {
     "title": "焦塔梯口",
     "intro": "家丁们连人都没喊，一声不吭就扑了上来。",
     "enemies": [
      {
       "id": "thug",
       "n": 2,
       "name": "家丁"
      },
      {
       "id": "cult_initiate",
       "n": 2,
       "name": "家丁"
      }
     ],
     "specials": [
      {
       "id": "beam",
       "name": "推倒梯口的焦木",
       "desc": "梯口堆着一垛烧剩下的房梁。",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "焦木轰隆隆滚下来，一下砸翻了两个。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "焦木只滚了半截就停住了，偏偏压住了你的脚。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 150"
      ],
      "goto": "a1_11b"
     },
     "lose": {
      "effects": [
       "gold -20"
      ],
      "goto": "a1_11b"
     }
    }
   },
   {
    "text": "绕到塔背后，顺着枯藤爬上去",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "alt": [
      "acrobatics"
     ]
    },
    "ok": {
     "text": "这藤比看上去结实多了，等你翻上塔顶，那几个家丁还在底下守着梯口呢。",
     "goto": "a1_11b"
    },
    "fail": {
     "text": "才爬到一半藤就断了，你在石棱上狠狠撞了一下，好在旁边还有一根，你抓着它总算爬了上去。",
     "effects": [
      "damage 1d6"
     ],
     "goto": "a1_11b"
    }
   }
  ]
 },
 "a1_11b": {
  "id": "a1_11b",
  "title": "铜镜和风筝",
  "text": [
   "塔顶上的雪早叫人踩实了，垛口边跪着个瘦子，面前支着一面铜镜，镜面正对着西边的日头，他手里还攥着一根线，线那头拴着一只蒙了银箔的风筝，在风里一圈一圈地转。",
   "从底下看是一圈银光，到了跟前一看，不过是个冻得直流鼻涕的人。",
   {
    "speaker": "放风筝的",
    "text": "别打别打！钱是人家给的呀，一个黄昏五个铜板。人家还说了，叫人逮着也不要紧，逮着了才好呢！"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这下三起都看完了，一起是银粉，一起是眨眼，这一起是风筝。"
   }
  ],
  "choices": [
   {
    "text": "把他按住，问是谁雇的",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true,
     "alt": [
      "intimidation"
     ]
    },
    "ok": {
     "text": "他一五一十全说了，雇他的是上城区萨什部的一座宅子，管事姓什么他不知道，只知道主人家姓奥特拉克，他还说主人家巴不得叫人拆穿，你们要是找上门去，准有茶喝。",
     "effects": [
      "flag a1_kite_man",
      "quest q_sightings done",
      "gold +150",
      "rep temples +1",
      "quest q_compact start"
     ],
     "goto": "a1_12"
    },
    "fail": {
     "text": "他把线一丢，从梯口一溜烟跑了，风筝倒是挂在了垛口上，你拿过来一看，竹骨上烙着个印，是“萨什部，上城区”几个字。",
     "effects": [
      "quest q_sightings done",
      "gold +150",
      "rep temples +1",
      "quest q_compact start"
     ],
     "goto": "a1_12"
    }
   },
   {
    "text": "收了他的线，顺着线头往下找",
    "effects": [
     "quest q_sightings done",
     "gold +150",
     "rep temples +1",
     "quest q_compact start",
     "approval tan +1"
    ],
    "result": "你把风筝收了回来，发现线轴上缠着一张字条，写的是上城区一座宅子的门牌。瘦子倒也没跑，就蹲在垛口边上吸鼻涕，你分了他一块干粮，阿坦又给添了一块。回头加莱尔把三起的钱一并付了，一共一百五十金冠，她还说门板桌那边已经吵起来了，吵的是这座城往后该归谁。",
    "goto": "a1_12"
   }
  ]
 },
 "a1_12": {
  "id": "a1_12",
  "title": "萨什卷",
  "loc": "上城区 · 奥特拉克的宅子",
  "text": [
   "上城区的宅子都是贴着崖壁盖的，屋里有一面墙干脆就是山。奥特拉克元老六十上下，手腕上戴着一只银镯子，旧得都发黑了，他一开口，先说了一句古卡斯塔诺语，加莱尔替你们翻了出来，意思是请坐，鞋不用脱。",
   {
    "if": "flag.a1_kite_man",
    "text": "放风筝的那个瘦子居然比你们先到，正蹲在门房里捧着一碗热茶，一见你们进来，赶紧把脸埋进了碗里。"
   },
   "桌上只摆着一壶茶，一碟盐腌的萝卜干。兽人占着这座城的二十年里，他一直没走，城里都传世家那些年吃过兽人，这话他不是没听见，可从来不辩。",
   {
    "speaker": "奥特拉克",
    "text": "我要找的就是你们这样的，赶着一辆车哪儿都去，又谁也不代表。焦塔顶上那只风筝嘛，本来就是放给你们看的。"
   },
   "他从一只锡筒里抽出一卷纸来，这是抄本的抄本，写的是古卡斯塔诺语，有一半的字如今已经没人认得了，认得的那一半里有这么一句，“王从灰烬那年起没再说过话，这五百年是我替他答的”。",
   {
    "speaker": "奥特拉克",
    "text": "这是银龙说的，灰元五百年，他最后一回出战之前。卷子可以给你们看，看完要是还想问，那时候再问。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "那就是在生气了。卡斯塔诺烧了林子，造了孽，王就不理我们了，是银龙替他担着，一担就是五百年。"
   },
   {
    "if": "is.god",
    "text": "奥特拉克问你，灰元五百年那一年你在不在。你说不在，他点了点头，接着又问，那灰元元年呢？"
   }
  ],
  "first": [
   "flag roll_seen",
   "quest q_dragon stage 2",
   "codex patricians",
   "codex sashite_roll",
   "codex ashen_skies"
  ],
  "choices": [
   {
    "text": "细看卷子上的字",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true,
     "adv": "is.scholar",
     "mods": [
      {
       "if": "level >= 1",
       "n": 2,
       "why": "加莱尔在旁边认字"
      }
     ]
    },
    "ok": {
     "text": "你和加莱尔凑在一块儿，又多认出来一行，是个日子，灰元五百年，卡斯坦月，这么说来，他说完这句话，当月人就没了。",
     "effects": [
      "codex silver_dragon"
     ]
    },
    "fail": {
     "text": "你把卷子拿倒了，奥特拉克伸手替你转了过来，顺手就把它收回了锡筒。",
     "effects": [
      "rep league -1"
     ]
    }
   },
   {
    "text": "看奥特拉克为什么要外人来看",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你看明白了，这句话要是由外人带出去，世家就不用担干系，他还说漏了半句，元老会里有人到了夜里另拜着一位，是谁他心里清楚，就是不肯说。",
     "effects": [
      "flag morningstar_hint"
     ]
    },
    "fail": {
     "text": "你盯着他看得太久了，他把镯子转了半圈，连茶也不给你们续了。",
     "effects": [
      "rep league -1"
     ]
    }
   },
   {
    "text": "请他让你抄一份带走",
    "effects": [
     "item +sash_copy"
    ],
    "result": "他叫管事拿来纸笔，自己在一旁看着加莱尔抄，抄完他又从头对了一遍，才在末尾盖了个小印。",
    "goto": "a1_13"
   },
   {
    "text": "答应他不外传",
    "effects": [
     "rep league +1"
    ],
    "result": "他把卷子收回锡筒里，说世家记得守信的人，加莱尔在本子上写了一行字，写完把那一页折了个角。",
    "goto": "a1_13"
   },
   {
    "text": "问他那二十年吃的什么",
    "effects": [
     "rep league -1",
     "approval ushka +1"
    ],
    "result": "奥特拉克端起茶来喝了一口，又放下，到底没有回答。乌什卡倒冲他点了一下头，她冲一个人类贵族点头，这还是头一回。",
    "goto": "a1_13"
   }
  ]
 },
 "a1_13": {
  "id": "a1_13",
  "title": "试炼山",
  "art": "ev_treants",
  "loc": "试炼山",
  "date": "1445年卡斯坦月",
  "text": [
   "阿坦想去试炼山问一句话，卡斯坦当年就是在那儿见到银龙的，你们便从北要塞底下上了山。山上的法术四百多年前就干了，第二道试炼的那张石桌，如今手指头摸上去已经不显线了，第三道试炼的锻炉也是凉的。",
   "第九道试炼的石像连头都没了，可还跪在那儿，照规矩，要等打赢它的那个人死了，它才能站起来，谁知法术一干，它就这么一直跪到了今天。",
   "第六道试炼在半山腰上，是一棵橡树和一棵榛树，当中隔着一条小路。立这一道试炼的是卡斯坦十四世，外号叫劝和者，这两棵树从他那会儿一直吵到现在，吵得叶子都黄了。",
   {
    "speaker": "橡树里的那位",
    "text": "那条溪是我的！"
   },
   {
    "speaker": "榛树里的那位",
    "text": "溪是我的，你的是溪边那块石头！上回来劝架的那个也是这么说的，你看，他的靴子还搁在那儿呢。"
   },
   "石头边上果然有一双靴子，烂得只剩下底了。再往上走，卡莉斯塔·黑塔带着两个随从，正拿一根打了结的绳子量上山的路，半山的空地上落着一头狮鹫，小格里夫就坐在它旁边啃苹果。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我就问一句，问完咱们就走。"
   },
   {
    "if": "is.god",
    "text": "你一走近，两棵树一下子都不吵了，橡树里的那位问榛树里的那位：“这个算不算天上来的？”榛树说不算，天上来的哪有自己走路的。"
   }
  ],
  "choices": [
   {
    "text": "劝两位树灵别吵了",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "alt": [
      "performance"
     ],
     "party": true,
     "adv": "is.elfblood"
    },
    "ok": {
     "text": "你说溪水是往下流的，石头是不动的，这两样谁也离不了谁。两棵树静了半晌，后来橡树说起了“银的那位”，说灰的那天以后，他也上这儿来问过天，可天没理他，榛树马上说，这件事它记得可比橡树清楚。",
     "effects": [
      "flag spirits_heard",
      "codex trials_of_castan"
     ],
     "goto": "a1_13b"
    },
    "fail": {
     "text": "它们朝那双靴子指了指，就什么也不肯说了，阿坦只好蹲在两棵树中间听了一下午，总算从吵架的话里拣出半句来：“银的那位来问过，天没理他。”这么一耽搁，天也黑了。",
     "effects": [
      "flag spirits_heard",
      "flag a1_dark"
     ],
     "goto": "a1_13b"
    }
   },
   {
    "text": "站在石下喊头一道试炼的口号",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "once": true,
    "effects": [
     "flag shout_answered",
     "rep corintar +1"
    ],
    "result": "你喊完以后，山下静了好一阵，然后北要塞的墙头上有人应了一声，是蓝牙的哨兵。头一道试炼说的就是这个，你喊一声，有人应你。"
   },
   {
    "text": "去看看第三道试炼的锻炉",
    "tag": "矮人",
    "if": "race == 'dwarf'",
    "once": true,
    "effects": [
     "codex balgar",
     "rep companies +1"
    ],
    "result": "炉膛是拿整块石头掏出来的，接缝的地方留着一道细槽，引的是山里的地热，这是巴尔加尔的手艺，他那凿法你一眼就认得出来，一凿子下去绝不回头。"
   },
   {
    "text": "问卡莉斯塔在量什么",
    "once": true,
    "effects": [
     "rep league +1"
    ],
    "result": "她把绳结又数了一遍，才说：“量上山的路。总有一天得有人走上这一趟，我得先知道要走多久。”说到“有人”两个字的时候，她眼睛一直望着山顶那块誓石。"
   }
  ]
 },
 "a1_13b": {
  "id": "a1_13b",
  "title": "第十道试炼的林子",
  "art": "ev_trails_basilisk",
  "text": [
   "下山的路要穿过一片松林，第十道试炼是打一头野兽，再拿它的皮和骨头做一件东西出来，眼下这林子里的松针上就印着爪印，一个印子足有你的手掌那么宽。",
   "{?flag.a1_dark:天已经黑透了，林子里什么也看不清。|好在林子里还亮着。}有块石头后面传来喘气的声音，那东西每喘一下，石头上的霜就化开一圈，原来是一头小石化蜥，身上的刺都还没长全。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "千万别看它的眼睛，看它的脚呀！脚朝哪边，它就往哪边扑。"
   }
  ],
  "choices": [
   {
    "text": "顺着风绕过去",
    "if": "!flag.a1_dark",
    "check": {
     "skill": "nature",
     "dc": 14,
     "alt": [
      "animal",
      "survival"
     ],
     "party": true
    },
    "ok": {
     "text": "你们贴着下风口悄悄地走，它从头到尾都没抬过头，出林子的时候，小格里夫的狮鹫在你们头顶上盘了一圈，飞走了。",
     "effects": [
      "xp 100"
     ],
     "goto": "a1_14"
    },
    "fail": {
     "text": "偏偏有人踩断了一根枯枝，它把头转过来了。",
     "combat": {
      "title": "松林",
      "intro": "石化蜥一瞪眼，走在最前头的那个人两条腿立刻就沉了。",
      "enemies": [
       {
        "id": "young_basilisk",
        "name": "小石化蜥"
       }
      ],
      "specials": [
       {
        "id": "shield",
        "name": "拿擦亮的盾晃它的眼",
        "desc": "它的眼睛怕光。",
        "check": {
         "skill": "sleight",
         "dc": 13
        },
        "success": {
         "text": "盾面一晃，它的眼睛眯成了一条缝，没头没脑地乱扑了一气。",
         "applyAll": {
          "cond": "blinded",
          "turns": 2
         }
        },
        "fail": {
         "text": "你晃盾的时候正好跟它对上了眼，膝盖一下子就僵了。",
         "selfDmg": "1d6"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 200",
        "item +cairn_stone"
       ],
       "goto": "a1_14"
      },
      "lose": {
       "effects": [
        "gold -15"
       ],
       "goto": "a1_14"
      }
     }
    }
   },
   {
    "text": "拔刀，迎上去",
    "combat": {
     "title": "松林",
     "intro": "石化蜥从石头后面爬了出来，爪子踩到哪儿，哪儿的霜就化开一片。",
     "enemies": [
      {
       "id": "young_basilisk",
       "name": "小石化蜥"
      }
     ],
     "specials": [
      {
       "id": "shield",
       "name": "拿擦亮的盾晃它的眼",
       "desc": "它的眼睛怕光。",
       "check": {
        "skill": "sleight",
        "dc": 13
       },
       "success": {
        "text": "盾面一晃，它的眼睛眯成了一条缝，没头没脑地乱扑了一气。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "你晃盾的时候正好跟它对上了眼，膝盖一下子就僵了。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 200",
       "item +cairn_stone"
      ],
      "goto": "a1_14"
     },
     "lose": {
      "effects": [
       "gold -15"
      ],
      "goto": "a1_14"
     }
    }
   }
  ]
 },
 "a1_14": {
  "id": "a1_14",
  "title": "抢化身",
  "art": "ev_piety",
  "loc": "万神道 · 会场外的帐篷",
  "date": "1445年花始月",
  "text": [
   "泛神会议还没开，各殿倒先抢起人来了，万神道上搭了十几顶帐篷，不管走到哪一顶门口，都有人拦住你们说话，原来你们查过那三起银龙现身的事，万神道上早就人人都知道了。",
   {
    "speaker": "卡斯特洛斯的老祭司",
    "text": "城破那天，卡莱昂大人身上是出过异象的。几位是查过现身的人，你们说上一句，可比我们说十句都管用啊。"
   },
   {
    "speaker": "阿德安的祭司",
    "text": "马尔霍德的王子骑着狮鹫打进城来，这才叫长子的样子嘛！几位替他说句话，阿德安的殿会记着你们的。"
   },
   "卡莱昂本人叫祭司们团团围在当中，他挨个问了一圈，说那爪子和尾巴什么时候长出来呀，结果没有一个人答得上来。多米尼克坐在角落里，膝盖上摊着本子，正一个字一个字地记。",
   "帐篷后头还坐着个红宝石矮人，一个人在那儿喝酒，面前摆着一张单子。",
   {
    "if": "is.god",
    "text": "卡斯特洛斯的老祭司一看见你，就把卡莱昂撇在了原地，三步并作两步赶过来，扑通一声跪下了，嘴里喊的是“王的化身”。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "你不是。"
   },
   {
    "if": "is.god && party.nixee",
    "speaker": "妮克西",
    "text": "哎，这化身是按年算呢，还是按件算呀？你可得问清楚了再点头。头一点下去，往后谁家死了人都要来敲你的门啦。"
   },
   {
    "if": "flag.god_revealed",
    "text": "多米尼克抬头看了你一眼，把本子翻到专门记你的那一页，又添了一行。"
   }
  ],
  "first": [
   {
    "if": "origin == 'corintar'",
    "then": [
     "quest q_o_corintar stage 2"
    ]
   }
  ],
  "choices": [
   {
    "text": "弄清认一个化身要过哪些关",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你打听明白了，认化身得过会，还得有足够的票，眼下卡莱昂和小格里夫谁也凑不齐，两边都来抢你们，无非是想先占住一个说法。",
     "effects": [
      "flag a1_votes_known"
     ]
    },
    "fail": {
     "text": "你问得太直了，阿德安的祭司当你是在讲价，一转身就去跟别人说你们要钱。",
     "effects": [
      "rep temples -1"
     ]
    }
   },
   {
    "text": "看看卡莱昂自己想不想当",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "每回有人叫他一声“化身”，他就往帐篷门口挪一步，看得出来他是真不想当，卡莉斯塔倒是一直站在门口，一步也没挪过，想当的是她。"
    },
    "fail": {
     "text": "你看错了人，盯着卡莉斯塔瞧了半天，她察觉了，冷冷地回了你一眼。",
     "effects": [
      "rep league -1"
     ]
    }
   },
   {
    "text": "去查黑塔家的谱",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "once": true,
    "effects": [
     "flag a1_tree"
    ],
    "result": "旧日庇护地的神殿里存着黑塔家家谱的抄本，你查到他家祖上出过术士王的门徒，那是三代以前的事了，如今没人提起，这一条拿来抬他也行，拿来压他也行。"
   },
   {
    "text": "找多米尼克，把你的名字登上祭司的名册",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "flag has_vote"
    ],
    "result": "多米尼克问你给谁念过经，念过几场，问一样记一样，记完了，他在你名字上划了个圈，又给了你一根刻了字的木签。冒险者祭司也算祭司，这一回人人手里都有一票。"
   },
   {
    "text": "去帐篷后头，看看那个喝酒的矮人",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "这矮人叫贝尔格拉克·穴居者，是科琳之环的老人了。他一开口先报数：“祭司一共一百零三个，昨晚喝了酒的六十一个，没喝的四十二个里头，有十个是装的，我请过他们，我知道。”报完他接着喝他的酒，那张单子上写的是矮人文，你才瞄了一眼，他就拿杯子把它压住了。"
   },
   {
    "text": "替卡莱昂作保",
    "effects": [
     "flag avatar_carleon",
     "world scale -1",
     "rep league +1",
     "rep temples +1",
     {
      "if": "flag.a1_tree",
      "then": [
       "rep league +1"
      ]
     }
    ],
    "result": "老祭司握住你的手，半天不肯放，卡莱昂隔着人群看了你一眼，那眼神分明是在看一个刚把他卖了的人。",
    "goto": "a1_15"
   },
   {
    "text": "替小格里夫作保",
    "effects": [
     "flag avatar_gryf",
     "world scale -1",
     "rep league +1"
    ],
    "result": "阿德安的祭司当场就把你的名字记下了，小格里夫在外头听说了这事，进来说他不要当，他要替科琳说话，可祭司们说这由不得他来定。",
    "goto": "a1_15"
   },
   {
    "text": "把三起现身的底当众抖出来",
    "effects": [
     "flag sightings_exposed",
     "world scale +1",
     "rep temples -1",
     {
      "if": "flag.a1_tree",
      "then": [
       "rep league -1"
      ]
     }
    ],
    "result": "你把银粉、风筝，还有那个看了二十年天的老太太一样一样全说了。说完帐篷里先是一静，接着两边的祭司一块儿骂起你来，只有多米尼克没骂，他都记下来了。",
    "goto": "a1_15"
   },
   {
    "text": "谁也不帮，进大帐",
    "effects": [
     "approval tan +1"
    ],
    "result": "你从两边祭司当中挤了过去，阿坦跟在你后头，小声说了一个字：“好。”",
    "goto": "a1_15"
   },
   {
    "text": "认下“王的化身”这个名分",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_avatar_claimed",
     "rep temples +2",
     "world scale -1",
     "approval tan -2"
    ],
    "result": "老祭司当场就给你披上了一条白布。卡莱昂长长地出了一口气，说化身这份差事总算有人顶了。阿坦站在门口，没有进来。",
    "goto": "a1_15"
   }
  ]
 },
 "a1_15": {
  "id": "a1_15",
  "title": "第十次泛神会议",
  "art": "load_8",
  "loc": "万神道 · 大帐",
  "text": [
   "大帐是拿三顶军帐拼起来的，当中那根柱子上还挂着别人家的旗，到会的冒险者祭司有一百来个，有披着甲的，也有光着脚的，多米尼克坐在正中间，面前摆着一张条凳，权当桌子用。",
   "科琳的尸首是收尸队擦洗的，所以你们也给叫上去问话，问的是她身上的伤，正面有几处，背后有几处，还有最后那一下，她是叫人推到前头去的，还是自己走过去的。",
   {
    "speaker": "多米尼克",
    "text": "照奈拉特的规矩，人死了是要过秤的。我要的是秤上的数，不要诸位的念想。说吧，一处一处地说。"
   },
   "阿坦在后排举起了手，可旁边的人把他的胳膊按了下去。",
   "蓝牙站在帐门边上，獠牙上还系着那截蓝布，愚足就坐在他脚边，手里捏着一块饼，一口也没吃，老布兰多克站在最后一排。",
   {
    "if": "origin == 'corintar'",
    "text": "你当时就站在那堵盾墙里，是亲眼看见的，这一点满帐的人都知道。"
   },
   {
    "if": "flag.has_vote",
    "text": "你手里攥着那根木签，上头刻着你的名字，那就是你的一票。"
   },
   {
    "if": "is.god",
    "text": "有个白胡子祭司站起来问你，灰元元年卡斯坦月一日出了什么事。你答不上来，那一年你也不在。他坐下去的时候，旁边两个祭司都往外挪了挪。"
   }
  ],
  "first": [
   "codex dominic",
   "codex tenth_council"
  ],
  "choices": [
   {
    "text": "说：是她自己走过去的",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "alt": [
      "religion"
     ],
     "mods": [
      {
       "if": "flag.has_vote",
       "n": 2,
       "why": "你有一票"
      },
      {
       "if": "flag.a1_votes_known",
       "n": 1,
       "why": "你知道票是怎么数的"
      },
      {
       "if": "flag.vigil_knelt || flag.sons_knelt",
       "n": 1,
       "why": "多米尼克把你算作自己人"
      }
     ]
    },
    "ok": {
     "text": "书记一个字也没改，照原话记了下来，多米尼克把这句话当众念了一遍，帐子里有人哭出了声。",
     "effects": [
      "flag testimony_hers",
      "world scale +2",
      "rep corintar +1",
      {
       "if": "origin == 'corintar'",
       "then": [
        "world scale +1"
       ]
      }
     ],
     "goto": "a1_15b"
    },
    "fail": {
     "text": "书记替你润了润色，记成了“她受了感召”，你的原话到底没写进文书里。",
     "effects": [
      "flag testimony_hers",
      "world scale +1",
      "rep corintar +1",
      {
       "if": "origin == 'corintar'",
       "then": [
        "world scale +1"
       ]
      }
     ],
     "goto": "a1_15b"
    }
   },
   {
    "text": "说：那一仗是整支军打下来的",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "alt": [
      "religion"
     ],
     "mods": [
      {
       "if": "flag.has_vote",
       "n": 2,
       "why": "你有一票"
      },
      {
       "if": "flag.a1_votes_known",
       "n": 1,
       "why": "你知道票是怎么数的"
      }
     ]
    },
    "ok": {
     "text": "帐子里嗡的一声，好几个团的祭司都在点头，科琳塔尔的人脸色却很难看，好在书记是照你的原话记的。",
     "effects": [
      "flag testimony_host",
      "world scale -1",
      "rep companies +1",
      "rep corintar -1",
      {
       "if": "origin == 'corintar'",
       "then": [
        "world scale -1"
       ]
      }
     ],
     "goto": "a1_15b"
    },
    "fail": {
     "text": "书记记成了“全军与她同心”，你那句话的棱角给磨掉了一半。",
     "effects": [
      "flag testimony_host",
      "rep companies +1",
      "rep corintar -1",
      {
       "if": "origin == 'corintar'",
       "then": [
        "world scale -1"
       ]
      }
     ],
     "goto": "a1_15b"
    }
   },
   {
    "text": "说：我替这位小祭司问一句，王在哪儿？",
    "effects": [
     "flag testimony_king",
     "approval tan +2",
     "rep temples -1"
    ],
    "result": "帐子里一下子没了声音，多米尼克看了你很久，在本子上写了一行，然后说这不是今天要议的事，阿坦站在后排，没有再举手。",
    "goto": "a1_15b"
   },
   {
    "text": "问完王在哪儿，接着念萨什卷上那句话",
    "if": "flag.roll_seen",
    "effects": [
     "flag testimony_king",
     "flag roll_told",
     "world word +1",
     "approval tan +2",
     "rep temples -1"
    ],
    "result": "你念的是：“王从灰烬那年起没再说过话。”刚念完，前排一个老祭司站起来就走了，书记的笔停了一停，又接着往下写。",
    "goto": "a1_15b"
   },
   {
    "text": "起身替会议裁决：是她自己走过去的",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_judged_council",
     "flag testimony_hers",
     "world scale +3",
     "rep temples -2"
    ],
    "result": "你一站起来，帐子里就没有人还坐着了。等你把话说完，多米尼克合上了条凳上的本子。往后只要提起这次会，人人都说那是神自己开的。",
    "goto": "a1_15b"
   },
   {
    "text": "起身替会议裁决：功在全军",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_judged_council",
     "flag testimony_host",
     "world scale -3",
     "rep temples -2"
    ],
    "result": "你一站起来，帐子里就没有人还坐着了。蓝牙在门边听完，转身出去了。往后只要提起这次会，人人都说那是神自己开的。",
    "goto": "a1_15b"
   }
  ]
 },
 "a1_15b": {
  "id": "a1_15b",
  "title": "剃了头的扈从",
  "text": [
   "会开到一半，帐门忽然叫人挤开了，进来几个戴木面具的老人，都是阿格拉多斯教团的长老，领头的老妇人当众说，他们教团有一则老预言，科琳一步一步全都应上了。",
   "收尸队站在帐篷最后头，只听见了半句：“……红发的，从东墙来……”至于写着预言的那页纸，你们没见着。",
   "最后是举手表决，多米尼克连数都没数，举起来的胳膊比帐杆还密，科琳就这么封了神，坐的是阿格拉多斯那个不知空了多少年的位子，管打仗。帐子外头的人一直喊到天黑，还有人拿木炭在帐杆上画了一把剑、一面盾，盾上有一道裂缝。",
   {
    "if": "origin != 'corintar'",
    "text": "会一散，老布兰多克就去了河边，跟人借了把剃刀，把头剃得精光，他说往后不擦甲了，要去当她的祭司，说完把擦甲的那块布叠得整整齐齐，放在了车上。"
   },
   {
    "if": "flag.god_tried_raise",
    "text": "蓝牙从你身边走了过去，中间只隔着三个人，可他没有停。"
   },
   {
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "text": "天黑以后，蓝牙在马桩边上叫住了你，旁边没有别人，他说话的声音很平。"
   },
   {
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "speaker": "蓝牙",
    "text": "你当时就在盾墙里。最后那一下，她看我了没有？"
   }
  ],
  "first": [
   "codex corinite",
   {
    "if": "origin != 'corintar'",
    "then": [
     "log 老布兰多克离了车，剃了头，去当科琳的祭司。"
    ]
   }
  ],
  "choices": [
   {
    "text": "照实说：看了",
    "if": "origin == 'corintar' && !flag.god_tried_raise && flag.saw_her_look",
    "effects": [
     "rep corintar +1"
    ],
    "result": "他点了点头，把獠牙上那截蓝布紧了紧，就走了。",
    "goto": "a1_16"
   },
   {
    "text": "告诉他：看了",
    "if": "origin == 'corintar' && !flag.god_tried_raise && !flag.saw_her_look",
    "effects": [
     "var lies +1",
     "rep corintar +1"
    ],
    "result": "其实你并没有看清。他点了点头，把獠牙上那截蓝布紧了紧，就走了。",
    "goto": "a1_16"
   },
   {
    "text": "说：我没看清",
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "effects": [
     "flag a1_bt_unsure"
    ],
    "result": "他站了一会儿，说了声也好，然后就走了，头也没回。",
    "goto": "a1_16"
   },
   {
    "text": "回门板桌",
    "goto": "a1_16"
   }
  ]
 },
 "a1_16": {
  "id": "a1_16",
  "title": "城约",
  "loc": "下城 · 门板桌",
  "shop": {
   "name": "钴蓝兵团的军需官",
   "blurb": "这人是冈瑟手下管仓库的，打完仗收来的东西卖得便宜，不过你要是问来历，得另外加钱。",
   "stock": [
    "longsword",
    "battleaxe",
    "longbow",
    "chain_shirt",
    "scale",
    "shield",
    "healing_potion"
   ]
  },
  "text": [
   "各团都要走了。科琳塔尔回昂特拉斯，达梅里亚之子往西去，钴蓝兵团往西北走，打算沿着艾伦河自己打下一块地来抵饷。空地上的守夜火早就撤了，只有门板桌还在，酒桶换了两只新的，门板还是原来那一扇。",
   "桌边还剩最后一件事要吵，就是这座城往后归谁管。蓝牙坐在一头，卡莱昂和卡莉斯塔坐在另一头，冈瑟夹在中间算账。奥特拉克元老也来了，手上还戴着那只银镯子，阿罗莎·伐橡者站在一边，就是不肯坐，碎心者的古拉德只派了个人来，蹲在桌腿边上。",
   {
    "speaker": "冈瑟",
    "text": "谁管这座城，我不在乎。加韦德那个小国王说了，他爹死在血腐阶梯，欠我们的饷也就跟着死了。这个话我可不认，一年零四个月的饷，利钱还得另算！"
   },
   {
    "if": "flag.letter_shown",
    "speaker": "冈瑟",
    "text": "哟，巴兹伍德先生的人也在啊，那正好。帝国到底是个什么意思，你替我们问一句吧。"
   },
   {
    "if": "origin != 'sons'",
    "text": "罗吉尔的纵队天一亮就要拔营往西。达拉斯把缝好的最后一件寿衣叠起来放在车上，背起包袱跟着队伍走了，走到桌边的时候又停了一下。"
   },
   {
    "if": "origin != 'sons'",
    "speaker": "达拉斯",
    "text": "针脚我缝得密，到时候拆起来可得小心点。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "欠我们的那位许过我们一块地，叫康原。可她死了呀，如今坐在那头的是蓝牙。你们帮我开这个口，事成了我分你们一成！"
   },
   {
    "if": "flag.a1_bt_unsure",
    "text": "蓝牙从头到尾没有往你这边看过一眼。"
   },
   {
    "if": "is.god",
    "text": "冈瑟问你，要是神来借钱，该算几分利。在场的没有一个人笑，他是真想知道。"
   },
   {
    "if": "var.lies >= 3 && party.tan",
    "text": "阿坦坐在车辕上，把你说过的那些好听话又从头数了一遍。"
   }
  ],
  "first": [
   "quest q_debt stage 2",
   "codex bluetusk",
   "rest short",
   {
    "if": "origin != 'sons'",
    "then": [
     "log 达拉斯离了车，跟着罗吉尔往西去了。"
    ]
   }
  ],
  "enter": [
   {
    "if": "var.lies >= 3 && party.tan && !flag.a1_lies_asked",
    "then": [
     "approval tan -1",
     "flag a1_lies_asked"
    ]
   },
   {
    "if": "var.lies >= 6 && party.tan && !flag.a1_lies_asked6",
    "then": [
     "approval tan -1",
     "flag a1_lies_asked6"
    ]
   }
  ],
  "choices": [
   {
    "text": "替妮克西找蓝牙认康原那块地",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "party": true,
     "mods": [
      {
       "if": "rep.corintar >= 2",
       "n": 2,
       "why": "科琳塔尔认你"
      }
     ]
    },
    "ok": {
     "text": "蓝牙听完，叫书记把印拿来，只说了一句“是她许的”，就盖了印，把地契推给了妮克西，妮克西又把它推给了你，说她信不过自己的口袋。",
     "effects": [
      "flag groundhawk_deed",
      "item +groundhawk_deed",
      "world room +1",
      "approval nixee +2"
     ]
    },
    "fail": {
     "text": "蓝牙说这块地他认，可印留在昂特拉斯，文书还得等一等，妮克西说“等”这个字她听过好多回了，头一回还是她奶奶跟她说的。",
     "effects": [
      "approval nixee -1"
     ]
    }
   },
   {
    "text": "替古拉德捎话，请蓝牙替碎心者作保",
    "once": true,
    "effects": [
     "flag pixiebury_warned",
     "world room +1",
     "rep clans +1"
    ],
    "result": "蹲在桌腿边上的那个人站了起来，蓝牙说皮克精之墓那边，科琳塔尔会派人过去看看，那人把这句话念了三遍，记牢了才走。"
   },
   {
    "text": "听阿罗莎说话",
    "once": true,
    "effects": [
     "codex arosha"
    ],
    "result": "阿罗莎说：“力气和脸面，我们本来就有。她教我的是另外两样，本分，心软，这两样可难学多了。”说完她就闭上了嘴，好像嫌自己说多了。"
   },
   {
    "text": "问愚足往后去哪儿",
    "once": true,
    "effects": [
     "item +halfling_pie 2"
    ],
    "result": "他说他跟着蓝牙走，蓝牙老是不吃饭，总得有个人盯着，说着他塞给你两个肉饼，拿叶子包着，还是热的。"
   },
   {
    "text": "告诉罗吉尔你留下，板车的差事在前头",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "rep moon -1",
     "approval tan +1"
    ],
    "result": "罗吉尔合上兵书，点了点头，说：“死人说话是不算数的，可他们等得起。”他拔营的时候，你没有去送。"
   },
   {
    "text": "把城交给伯爵联盟代管",
    "effects": [
     "flag compact_league",
     "rep league +2",
     "rep companies -1",
     "world room -1",
     "quest q_compact done",
     "item +compact_copy",
     "codex compact"
    ],
    "result": "卡莱昂在文书上签了名，印是卡莉斯塔替他按的，下城的地精当天就叫人赶出了旧集市。",
    "goto": "a1_17"
   },
   {
    "text": "把城交给科琳塔尔看守",
    "effects": [
     "flag compact_corintar",
     "rep corintar +2",
     "rep league -1",
     "world scale +1",
     "quest q_compact done",
     "item +compact_copy",
     "codex compact"
    ],
    "result": "蓝牙说城他可以守，可他不当城主，书记只好把“城主”那一栏空着，另填了“守城”两个字。",
    "goto": "a1_17"
   },
   {
    "text": "立一纸城约，各家凑份子，下城划出地精坊",
    "if": "!flag.goblins_handed",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": "faction == 'crownless'",
     "mods": [
      {
       "if": "flag.goblin_speaker",
       "n": 2,
       "why": "地精推了个说话的人"
      }
     ]
    },
    "ok": {
     "text": "一直吵到半夜，各家总算都签了，冈瑟签字的时候还在说利钱另算，阿罗莎签的时候一句话也没说。地精坊那一条写在最末尾，一共三行。",
     "effects": [
      "flag compact_free",
      "world room +2",
      "world embers -1",
      "rep clans +1",
      "rep league -2",
      "rep companies +1",
      "quest q_compact done",
      "item +compact_copy",
      "codex compact"
     ],
     "goto": "a1_16b"
    },
    "fail": {
     "text": "卡莱昂头一个起身走了，冈瑟也跟着走了，门板桌边上剩下的几个人谁也不服谁，没过多久也就散了。",
     "effects": [
      "flag compact_none"
     ],
     "goto": "a1_17"
    }
   },
   {
    "text": "谁也不服谁，那就散",
    "effects": [
     "flag compact_none",
     "rep companies +1"
    ],
    "result": "各团当天就拔了营，往后城里的事，谁占着哪座城门，那一片就归谁管。门板桌就这么留在空地上，也没人来收。",
    "goto": "a1_17"
   }
  ]
 },
 "a1_16b": {
  "id": "a1_16b",
  "title": "凑份子的城",
  "text": [
   "城约一共抄了五份，一家拿一份，纸是从奥特拉克家借来的，墨却不够用，最后一份只好兑了水写，颜色比别的淡一些。",
   "地精坊划在下城的银瀑底下，就是全城最臭的那几条街，有个地精老太太过来看了一眼，说臭倒不要紧，只要把门把手装低一点就行。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "就三行字呀。不过规矩第一百条说了，写下来的才算数。我先记着，往后谁要是不认，我就拿着这个找他去！"
   },
   {
    "if": "origin == 'wex'",
    "text": "卡莱昂问了一句：“帝国认不认？”桌边的人一下子都朝你看过来。"
   }
  ],
  "choices": [
   {
    "text": "请帝国在城约上盖个印",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.report1_false",
    "effects": [
     "flag compact_sealed",
     "world peace +1",
     "rep throne +1",
     "rep moon -1"
    ],
    "result": "你写了封信过去，二十天以后回信到了，城约的抄本上盖着巴兹伍德先生的印，旁边还有一行小字，只写了“暂且”两个字。",
    "goto": "a1_17"
   },
   {
    "text": "请帝国在城约上盖个印",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && flag.report1_false",
    "check": {
     "skill": "persuasion",
     "dc": 14
    },
    "ok": {
     "text": "巴兹伍德先生的回信很短，好在印还是给盖了，旁边添了一行小字：“这回写的是真的吧。”",
     "effects": [
      "flag compact_sealed",
      "world peace +1",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "a1_17"
    },
    "fail": {
     "text": "回信上只有一句话：“你上回写的信，我还没核完。”印没有盖。",
     "effects": [
      "rep throne -1"
     ],
     "goto": "a1_17"
    }
   },
   {
    "text": "把你那份收好，套车",
    "effects": [
     "rep clans +1"
    ],
    "result": "你把抄本卷起来，塞进了车板底下，那个地精老太太在车边站了一会儿，往车上放了一小坛腌菜。",
    "goto": "a1_17"
   }
  ]
 },
 "a1_17": {
  "id": "a1_17",
  "title": "往长者郡",
  "art": "ev_the_covenant",
  "loc": "艾伦河上游的路",
  "date": "1445年银现月初",
  "text": [
   "车空了，人也少了。{?origin != 'wex':奥托格接到调令要回西边去，走的时候大剑扛在肩上，手还在抖。|}{?origin != 'grudge':布罗克签完了字，扛着他那把七斤二两的铲子回红宝石领交差去了。|}剩下的人跟着车往北走，去长者郡，其实没有谁请你们去，只是那道军令也一直没人来撤。",
   {
    "if": "flag.a1_ottog_owes && origin != 'wex'",
    "text": "奥托格临走前把他那瓶配给的药水塞给了你，说那一班他记着呢，别的什么也没说。"
   },
   "河滩上躺着一头熊，大得出奇，站起来怕是有两个人那么高，它的胸口叫人掏开了，心没了，旁边的泥里还插着半条兽人的小臂，手里死死攥着斧柄。",
   {
    "if": "origin != 'tide'",
    "speaker": "马布格",
    "text": "这是灰吻。嗜血者的规矩，一个人带一把斧子来杀它，杀完回去喝它的血。前头有哨，不过不要紧，他们认得我这颗牙。"
   },
   {
    "if": "origin == 'tide'",
    "text": "这头熊你早就听说过，它叫灰吻，长者郡的人拿它吓唬小孩吓了几十年，嗜血者的规矩你也知道，得是一个人拿一把双手斧杀了它，再回去当着萨满的面喝它的血。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "一个人，一把双手斧。这熊没白死，他那条胳膊也没白丢。"
   }
  ],
  "first": [
   {
    "if": "origin != 'wex'",
    "then": [
     "log 奥托格离了车，接调令回了西边。"
    ]
   },
   {
    "if": "origin != 'grudge'",
    "then": [
     "log 布罗克离了车，回红宝石领交差。"
    ]
   },
   {
    "if": "flag.a1_ottog_owes && origin != 'wex'",
    "then": [
     "item +healing_potion"
    ]
   }
  ],
  "choices": [
   {
    "text": "找个浅处过河滩",
    "once": true,
    "check": {
     "skill": "survival",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你找到了一道碎石埂，车轮压着石头过去，水才刚刚没过脚背。",
     "effects": [
      "xp 50"
     ]
    },
    "fail": {
     "text": "车轮陷进了沙窝里，你们泡在冰水里推了足有半个时辰才推出来，还叫水冲走了一包干粮。",
     "effects": [
      "damage 1d6",
      "gold -10"
     ]
    }
   },
   {
    "text": "读一读这头熊",
    "once": true,
    "check": {
     "skill": "nature",
     "dc": 12,
     "alt": [
      "medicine"
     ],
     "party": true
    },
    "ok": {
     "text": "熊身上的伤口只有一种，全是同一把双手斧砍出来的，砍它的那个人丢了一只眼睛，血顺着熊的脊背一路淌下去，后来又丢了半条胳膊。他只掏走了心，皮连割都没割。",
     "effects": [
      "codex gurzan",
      "flag a1_bear_read"
     ]
    },
    "fail": {
     "text": "你凑得太近了，熊毛里的虱子全换了主人，害得你挠了一下午。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "报上古尔赞欠的那份情",
    "if": "flag.gurzan_owes",
    "effects": [
     "rep clans +1"
    ],
    "result": "哨上的人一听是送尸首回来的那辆车，就把矛收了，还派了个半大小子给你们领路。",
    "goto": "a1_18"
   },
   {
    "text": "用兽人话报上你的氏族",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "effects": [
     "rep clans +1"
    ],
    "result": "哨上的人看了看你手背上那块绿，问你那天是在哪条街上，你照实说了，他就让开了路。",
    "goto": "a1_18"
   },
   {
    "text": "让马布格去哨上说",
    "if": "origin != 'tide'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "party": true,
     "mods": [
      {
       "if": "rep.clans >= 2",
       "n": 2,
       "why": "氏族知道你"
      }
     ]
    },
    "ok": {
     "text": "马布格去了老半天，回来的时候嘴里叼着根草，说可以过去了，只是叫你们别去看哨上那几个人的眼睛。",
     "goto": "a1_18"
    },
    "fail": {
     "text": "马布格的话才说到一半，哨上的人就把斧子举了起来，他只好退回来，说他们已经不认他这颗牙了。",
     "combat": {
      "title": "嗜血者的前哨",
      "intro": "这些狂战士不知喝了什么东西，连眼白都是红的。",
      "enemies": [
       {
        "id": "orc_berserker",
        "n": 2
       },
       {
        "id": "orc_raider",
        "n": 2
       }
      ],
      "specials": [
       {
        "id": "bear",
        "name": "把死熊推下河坡",
        "desc": "这么大一头熊，滚下去谁也挡不住。",
        "check": {
         "skill": "athletics",
         "dc": 13
        },
        "success": {
         "text": "死熊顺着坡滚下去，一头砸进了冲上来的人堆里。",
         "dmgAll": "2d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "熊实在太沉，你只推动了它一条腿。",
         "selfDmg": "1d4"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 250"
       ],
       "goto": "a1_18"
      },
      "lose": {
       "effects": [
        "flag a1_dragged"
       ],
       "goto": "a1_18"
      }
     }
    }
   },
   {
    "text": "直接闯过去",
    "combat": {
     "title": "嗜血者的前哨",
     "intro": "哨上的人连话都没喊，先扔过来一把斧子。",
     "enemies": [
      {
       "id": "orc_berserker",
       "n": 2
      },
      {
       "id": "orc_raider",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "bear",
       "name": "把死熊推下河坡",
       "desc": "这么大一头熊，滚下去谁也挡不住。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "死熊顺着坡滚下去，一头砸进了冲上来的人堆里。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "熊实在太沉，你只推动了它一条腿。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 250"
      ],
      "goto": "a1_18"
     },
     "lose": {
      "effects": [
       "flag a1_dragged"
      ],
      "goto": "a1_18"
     }
    }
   }
  ]
 },
 "a1_18": {
  "id": "a1_18",
  "title": "银现月四日",
  "art": "ev_orc_with_axe",
  "loc": "长者郡的废墟 · 古尔赞的火",
  "date": "1445年银现月4日",
  "text": [
   "长者郡的废墟里生着一堆大火，火边围坐着三个氏族的酋长，分别是碎剑者、毒牙和雕骨者的，雕骨者那边来的是阿祖科尔本人，他一眼就认出了你们的车。",
   "古尔赞坐在火堆的上风口，左眼上缠着布，右边的袖管从胳膊肘往下是空的，掖在腰带里，那张熊皮他没要，只要了那颗心。他比你想的要年轻，才二十出头。",
   "这个日子是他自己挑的，二十一年前的银现月四日，杜坎森头一回带着人从山里出来，火边的酋长们个个都记得，只是谁也没提。",
   {
    "if": "flag.gurzan_owes",
    "text": "你们在这儿算是客人，他叫人给你们端来了碗，碗里盛的是熊肉。"
   },
   {
    "if": "flag.gurzan_grudge",
    "text": "你们是给叫来对质的。他让你们站着，头一句问的就是：“我父亲在哪儿？”"
   },
   {
    "if": "!flag.gurzan_owes && !flag.gurzan_grudge",
    "text": "在他眼里，你们不过是路过的收尸人，所以他既没叫你们坐，也没叫你们走。"
   },
   {
    "if": "flag.a1_dragged",
    "text": "你们是叫人绑着拖进火圈的，绳子一直到了火边才给割开。"
   },
   {
    "if": "flag.a1_kin",
    "text": "湖边那个缠着白布的使者就站在古尔赞身后，他用兽人话说了一句什么，古尔赞便往旁边挪了挪，给你让出半块石头来。"
   },
   {
    "if": "flag.p_surrendered",
    "speaker": "古尔赞",
    "text": "你就是城里那个扔了刀的吧，我听说过你。扔刀不丢人，扔完了也不跑，那才丢人。"
   },
   {
    "speaker": "古尔赞",
    "text": "我父亲到底是不是杜坎的儿子，我不知道。我只知道他活着的时候，没人敢拿链子拴兽人。"
   },
   {
    "if": "flag.god_named_korgus",
    "speaker": "古尔赞",
    "text": "你在湖边说过他是。这句话比你们早到了半个月。我是该谢你呢，还是该问问你凭什么这么说？"
   },
   {
    "if": "flag.god_denied_korgus",
    "speaker": "古尔赞",
    "text": "在湖边说他不是的那个，就是你吧。坐到那儿去，我想看看你会不会流血。"
   },
   {
    "if": "is.god",
    "speaker": "古尔赞",
    "text": "我父亲也是刀枪不入的，一直到那一天为止。"
   },
   {
    "if": "origin != 'tide'",
    "text": "马布格进了火圈以后就没再出来，古尔赞叫人给他拿了一把新斧子，问他愿不愿意留下。"
   }
  ],
  "first": [
   "codex gurzan",
   {
    "if": "origin != 'tide'",
    "then": [
     "log 马布格离了车，留在了古尔赞的火边。"
    ]
   }
  ],
  "choices": [
   {
    "text": "听古尔赞说话，看他自己信不信",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "flag.a1_bear_read",
       "n": 2,
       "why": "你在河滩上读过那头熊"
      }
     ]
    },
    "ok": {
     "text": "他说起父亲来，讲的全是自己亲眼见过的事，哪一天打的哪座城，吃的是什么，骂过谁，可从头到尾一句也没提杜坎，看来他自己并不信，只是他认定了氏族非信不可。",
     "effects": [
      "flag a1_gurzan_doubt"
     ]
    },
    "fail": {
     "text": "你盯着他那条空袖管看得太久了，火边有人重重地哼了一声。",
     "effects": [
      "rep clans -1"
     ]
    }
   },
   {
    "text": "照夺斗的规矩，向他的头号狂战士下战书",
    "combat": {
     "title": "夺斗",
     "intro": "熊血斗士脱了上衣，往胸口抹了一把熊血，照规矩这是单挑，所以他一个人朝着你们这一车人走了过来，酋长们只等着看谁先倒下。",
     "noAwe": true,
     "enemies": [
      {
       "id": "bloodgorger_champion"
      }
     ],
     "specials": [
      {
       "id": "smoke",
       "name": "把他引到火堆的下风口",
       "desc": "烟是往那边飘的。",
       "check": {
        "skill": "survival",
        "dc": 13
       },
       "success": {
        "text": "你退了三步，他跟着追了三步，一股浓烟正好糊在他脸上。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "谁知风向变了，烟全糊在了你自己脸上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       "flag moot_defused",
       "world embers -1",
       "rep clans +1",
       "xp 300",
       {
        "if": "faction == 'tried'",
        "then": [
         "rep clans +1"
        ]
       }
      ],
      "goto": "a1_18b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag a1_thrown_out",
       {
        "if": "faction != 'tried'",
        "then": [
         "rep clans -1"
        ]
       }
      ],
      "goto": "a1_18b"
     }
    }
   },
   {
    "text": "劝酋长们各回各的地，他们要的无非是盖了印的纸",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.compact_free",
       "n": 2,
       "why": "城约里有氏族的位子"
      },
      {
       "if": "flag.groundhawk_deed",
       "n": 2,
       "why": "地鹰拿到了地契"
      },
      {
       "if": "flag.a1_gurzan_doubt",
       "n": 1,
       "why": "你知道他自己不信"
      }
     ]
    },
    "ok": {
     "text": "你把城约和地契的事跟他们说了一遍，碎剑者的酋长问能不能也给他一张，毒牙的酋长虽然一句话没说，可第二天头一个拔营走的就是她。",
     "effects": [
      "flag moot_defused",
      "world embers -1"
     ],
     "goto": "a1_18b"
    },
    "fail": {
     "text": "酋长们听完了，接着喝他们的酒，没有一个人理你，古尔赞叫人往火里又添了一抱柴。",
     "effects": [
      "rep clans -1"
     ],
     "goto": "a1_18b"
    }
   },
   {
    "text": "只看，不说",
    "effects": [
     "rep clans +1"
    ],
    "result": "你在火边一直坐到天亮，一句话也没说，到了后半夜，古尔赞叫人给你也端来一碗熊肉汤，端碗的人把碗放下就走了，同样没说话。",
    "goto": "a1_18b"
   },
   {
    "text": "让乌什卡说烂刀氏族那句话",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "approval ushka +1",
     "rep clans -1",
     "flag a1_ushka_said"
    ],
    "result": "乌什卡站了起来，说：“这场仗是建在谎话上的。”火边一下子没了声音。古尔赞盯着她看了很久，把她的脸记住了。"
   },
   {
    "text": "接下他让出来的位子，那是他父亲的位子",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_of_the_tide",
     "world embers +3",
     "rep clans +3",
     "rep corintar -3",
     "approval ushka -3"
    ],
    "result": "古尔赞站起身，把火边的位子让给了你，自己坐到了下手。三个酋长一个接一个地跪了下去，只有乌什卡没跪，她把别在腰后的锤子拿到了手里。",
    "goto": "a1_18b"
   }
  ]
 },
 "a1_18b": {
  "id": "a1_18b",
  "title": "火边的路",
  "text": [
   {
    "if": "flag.a1_thrown_out",
    "text": "你是叫两个人架着胳膊扔出火圈的，脸先着的地，熊血斗士回到了火边，酋长们忙着给他倒酒，再没人朝你们这边看一眼。{?party.ushka:乌什卡蹲下来，把你嘴里的灰一点一点抠了出来。|}"
   },
   "天快亮了，火堆只剩下一摊红炭，酋长们各自找自己的马去了，古尔赞站在炭堆边上，用剩下的那只手掂着两样东西，是一截断链和几朵干蘑菇。",
   {
    "speaker": "古尔赞",
    "text": "往后每年的奈拉月十一，都要把这两样东西扔进河里。我父亲是那天死的，链子也是那天断的，这两件事哪一件都不能忘。"
   },
   {
    "if": "is.god && !flag.god_of_the_tide",
    "speaker": "古尔赞",
    "text": "那个位子你不肯接，也好。不过这么一来，你迟早要站到另一边去。"
   },
   {
    "if": "flag.a1_ushka_said && party.ushka",
    "text": "他从乌什卡身边走过的时候停了一下，可什么也没说。"
   },
   {
    "if": "origin == 'tide'",
    "text": "你是以亲族的身份来的，所以火灭以前，你得说清楚自己往哪边走。跟古拉德是去种地，跟阿罗莎是去投科琳的人，留在古尔赞这边，就是再打一回。火边的人全都在看着你。"
   }
  ],
  "choices": [
   {
    "text": "留下种地，跟古拉德走",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "effects": [
     "flag road_ghurad",
     "quest q_o_tide stage 2",
     "world embers -1"
    ],
    "result": "你报了古拉德的名字，古尔赞点点头，说种地也算一条路，就是慢了点，说完他没有再看你。",
    "goto": "a1_19"
   },
   {
    "text": "跟阿罗莎走，跟科琳的人走",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "effects": [
     "flag road_arosha",
     "quest q_o_tide stage 2",
     "rep corintar +1"
    ],
    "result": "古尔赞把“伐橡者”这个名字念了一遍，念得很慢，碎剑者的酋长朝炭堆里啐了一口唾沫。",
    "goto": "a1_19"
   },
   {
    "text": "跟古尔赞，再来一回",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "effects": [
     "flag road_gurzan",
     "quest q_o_tide stage 2",
     "rep clans +1",
     "rep corintar -1"
    ],
    "result": "古尔赞把一截断链放在你手里，说：“奈拉月十一，把它扔进河里，别忘了。”",
    "goto": "a1_19"
   },
   {
    "text": "天亮前离开火圈",
    "if": "origin != 'tide'",
    "effects": [
     "rep clans +1"
    ],
    "result": "你们走的时候没有人拦，倒是阿祖科尔追了上来，往车上扔了一小袋盐，说是给你们路上用的。",
    "goto": "a1_19"
   }
  ]
 },
 "a1_19": {
  "id": "a1_19",
  "title": "车空了",
  "loc": "长者郡外的营火 · 当夜",
  "text": [
   "车上什么都没有了，这还是头一回。车板上的鱼鳞早就磨光了，只有杜坎森躺过的那块地方颜色还深一些。你们在长者郡外头生了一堆火，围着火坐下来一数，比出城那天晚上少了好几个人。",
   "那道军令始终没人来撤，当初签字的几个队长都忙着占地盘去了，没有一个回来说一声“事毕”。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我数过了，一具尸首，一个去向，还有一个没问出来的问题。"
   },
   {
    "if": "party.tan",
    "text": "阿坦拿树枝拨了拨火，过了好一阵才又开口。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "王是在生卡斯塔诺的气。卷子上是那么写的，那我就先当它是这样吧。"
   },
   {
    "if": "party.tan && flag.a1_she_watches",
    "speaker": "阿坦",
    "text": "蓝宝石望的那位老太太，这会儿大概还在看天呢。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "车上其实还有一位神。我没有算进去，因为你不算一具。"
   },
   "加莱尔走了，只留下一张条子压在车辕底下，条子上说她要回安本科斯特交稿，下回见面“不会太久”。背面还画了一张速写，画的是你们几个围着火坐着的样子，画得很像。",
   {
    "if": "is.immortal",
    "text": "加莱尔留下的那张速写上，数你画得最细，旁边还有一行小字：“过几年再画一张，对一对。”"
   }
  ],
  "first": [
   "level 4",
   "quest q_cart stage 2",
   "rest short",
   "log 第一幕：杜坎森有了去处。车空了，军令没撤。"
  ],
  "choices": [
   {
    "text": "给巴兹伍德先生写这一幕的报告，照实写",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var honest_reports +1",
     "rep throne +1"
    ],
    "result": "你足足写了三页，尸首的去向、城约、古尔赞的火，一样也没漏。天一亮，信鸽就放出去了。",
    "goto": "a2_01"
   },
   {
    "text": "给巴兹伍德先生写报告，写点他爱看的",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var false_reports +1"
    ],
    "result": "你写的是东坎诺已经太平了，氏族都散了，各团也都听帝国的，写得十分顺手。天一亮，信鸽就放出去了。",
    "goto": "a2_01"
   },
   {
    "text": "把火压了，睡觉",
    "effects": [
     {
      "if": "origin == 'wex'",
      "then": [
       "rep throne -1"
      ]
     },
     {
      "if": "origin != 'wex'",
      "then": [
       "approval ushka +1"
      ]
     }
    ],
    "result": "{?origin == 'wex':这一回你没有写信，信鸽在笼子里叫了整整一夜。|前半夜是乌什卡守的，她把木签拿出来看了看，又收了回去。}",
    "goto": "a2_01"
   }
  ]
 }
};
