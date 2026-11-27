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
   "天黑以后，空地边上守夜的那圈火还亮着。门板搭的那张桌子还支在两只酒桶上，杜坎森的尸首躺在板车里，身上压着另一扇门板，两只脚露在外头。",
   "这一夜，来要这具尸首的一共有四拨人。头一拨是铁杖骑士团的学徒瓦丽娜·埃斯瑟，她是个死灵法师，带着两个学徒抬来了一箱金冠。第二拨是三个边区兵，拎着一把剁肉刀，要砍他的头。第三拨是个缠着白布的老兽人，蹲在车轮边上，说是替杜坎森的小儿子来领尸首的。第四拨是雕骨者氏族的三个兽人，没带兵器，只扛来了一袋盐。管着这座城的伯爵联盟首领卡莱昂·黑塔也来了，他不出价。",
   {
    "speaker": "瓦丽娜",
    "text": "一箱金冠，当场结清。他躺着也是躺着，让他站起来，还能替东坎诺修上三十年城墙。理论上不咬人。"
   },
   {
    "speaker": "卡莱昂",
    "text": "我只有一句话。天亮以前，这具尸首不能还留在我的城里。谁来拉走，拉到哪儿去，我不管。"
   },
   {
    "speaker": "冈瑟",
    "text": "拉到哪儿去都行。不过下城的卡子归我钴蓝兵团管，过路钱照收。几分利，另算。"
   },
   "板车边上还有几个人，是各营派来收尸的，手上各忙各的。{?origin != 'corintar':老布兰多克在擦一副护肩。|}{?origin != 'sons':达拉斯坐在车辕上缝东西，一句话也不说。|}{?origin != 'wex':奥托格抱着他那把大剑，手一直在抖。|}{?origin != 'grudge':布罗克扛着他自己带来的铲子。|}{?origin != 'tide':马布格靠在车帮上，他是个断了一根獠牙的兽人老兵。|}",
   "这时候万神道那边过来了一盏灯。提灯的是小祭司阿坦，他把庙门锁上了，钥匙拴着麻绳挂在脖子上。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "军令已经钉在门上了，我在不在庙里都一样。你们要出城，我跟你们一起走，正好打听银龙的事。"
   },
   {
    "if": "flag.god_revealed",
    "text": "你是神这件事，桌边的人都已经听说了，所以出价的人说话的时候不看尸首，都看着你。"
   },
   {
    "if": "is.god",
    "text": "瓦丽娜把箱盖往你这边推了推，问你本人卖不卖，不肯卖断的话，按天租也行。卡莱昂问的是另一件事，他问你打算在他的城里住多久。"
   },
   {
    "if": "is.god && party.ushka",
    "speaker": "乌什卡",
    "text": "车上是多了一位神，可车还是那辆车。"
   },
   {
    "if": "flag.ushka_wary && party.ushka",
    "text": "乌什卡蹲在车尾量杜坎森的腕骨，一只手始终没离开腰后的锤子。她背对着尸首，脸一直朝着你，她在防着你。"
   },
   {
    "if": "origin == 'tide'",
    "text": "你手背上那块不再变色的绿，缠白布的老兽人一眼就认出来了。他用兽人话问你是哪个氏族的，问完就不再看你了。"
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
    "text": "听瓦丽娜把价钱说完，看看她买尸首想干什么",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "她说到“站起来”三个字的时候，两个学徒不约而同地看了一眼箱子底下画好的粉笔法阵。她买这具尸首，是要把杜坎森拉起来，当不死的苦力使唤。",
     "effects": [
      "flag a1_varina_read"
     ]
    },
    "fail": {
     "text": "你盯着那箱金冠多看了两眼，偏偏叫乌什卡看见了。",
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
    "result": "领头的说要把头砍下来挂在北城门上，挂满一个月，让城外那些兽人天天看着。你听他说完，他就当你是自己人了。"
   },
   {
    "text": "听缠白布的老兽人怎么说",
    "once": true,
    "effects": [
     "rep clans +1"
    ],
    "result": "他说杜坎森的小儿子叫古尔赞，已经带着嗜血者氏族退到了长者郡，正在那边等着父亲的尸首回去。"
   },
   {
    "text": "问雕骨者那袋盐是干什么的",
    "once": true,
    "effects": [
     "flag a1_salt_known"
    ],
    "result": "他们说要把骨头拿回去刻上花纹，等刻满了，他就能转世再生一回。那袋盐是他们出的价钱，一袋够腌一冬的鱼。"
   },
   {
    "text": "问乌什卡打算怎么处置",
    "once": true,
    "if": "party.ushka",
    "effects": [
     "codex khak_bazi",
     "approval ushka +1"
    ],
    "result": "她伸出两根手指，说要两天。先把尸首拆开，再烧，烧完把骨头磨成粉，这就是归尘礼。这得有一块能生火的平地，城里找不出这样的地方。她说等磨完了，谁也别想再把他拉起来用。"
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
     "text": "卡莱昂说那头骡子是他女儿的，叫你们别给累死了。过了一会儿，家丁牵来了一头灰骡。",
     "effects": [
      "flag a1_mule"
     ]
    },
    "fail": {
     "text": "卡莱昂说他的骡子不拉兽人。这一来，车只好你们自己拉了。",
     "effects": [
      "flag a1_pull"
     ]
    }
   },
   {
    "text": "说尸首该归他儿子，父亲的尸首由儿子来收是名分",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "once": true,
    "effects": [
     "rep clans +1",
     "rep league -1",
     "flag a1_heir_named"
    ],
    "result": "卡莱昂的脸沉了一下。老兽人抬起头看了你好一会儿，把你的长相记住了。"
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
    "result": "书记把单子推了过来，上面写着“尸首一具，完整”。你签了字，往后这具尸首哪怕少一根指头，都得算在你头上。"
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
    "result": "门板往下沉了一指，底下的酒桶吱地响了一声。瓦丽娜合上了箱盖，边区兵把刀收了起来。只有冈瑟掏出半截炭笔，在门板边上记了一笔，记完还看了你一眼。",
    "goto": "a1_02"
   },
   {
    "text": "今晚先把尸首拉出城，怎么处置路上再定",
    "goto": "a1_02"
   }
  ]
 },
 "a1_02": {
  "id": "a1_02",
  "title": "这马生前穿靴子？",
  "loc": "下城 · 钴蓝兵团的哨卡 · 深夜",
  "text": [
   "要出城，得走城底下的地下通道，入口在银瀑底下，下城人管那儿叫粪瀑。半路上有个钴蓝兵团的卡子，横着三根拒马，守卡的是四个胳膊上扎蓝布条的兵，正围着一口锅煮豆子。",
   "尸首上盖了张草席，可草席短了一截，两只靴子还是露在外头。{?flag.a1_mule:灰骡子嫌车沉，走两步就要停一步。|骡子没借着，车只能你们自己拉。}",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "别盯着他们的锅看。盯着锅看的人像是饿着的，饿着的人好欺负。"
   },
   {
    "if": "is.god",
    "text": "哨兵看见了你，又看了看车上那两只靴子，一时拿不准该先拦哪一个。"
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
     "text": "他捂着鼻子退开两步，连连挥手叫你们快走。",
     "goto": "a1_03"
    },
    "fail": {
     "text": "哨兵拿矛杆挑起草席一角，看见了那双靴子。“这马生前还穿靴子？”他把哨子塞进了嘴里。",
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
     "text": "后巷窄得刚好够过一辆车。楼上有人倒了一盆水下来，好在没往下看。等你们出了巷口，卡子已经落在身后了。",
     "goto": "a1_03"
    },
    "fail": {
     "text": "车轮压翻了一只夜壶，整条巷子的狗都叫了起来，哨子也跟着响了。",
     "goto": "a1_02b"
    }
   },
   {
    "text": "塞给哨兵二十金冠",
    "req": "gold >= 20",
    "reqText": "需要 20 金冠",
    "cost": {
     "gold": 20
    },
    "result": "哨兵数了数钱，把拒马挪开了。",
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
    "result": "哨兵不识字，可火漆上的纹样他认得。他叫来的伍长认得的更多，脸都吓白了，赶紧挥手放行。不等天亮，这件事就会传到冈瑟耳朵里。",
    "goto": "a1_03"
   }
  ]
 },
 "a1_02b": {
  "id": "a1_02b",
  "title": "几分利",
  "text": [
   "哨子一响，半条街的窗板都推开了。有人探出头来喊了一声“杜坎森出城了”，又缩了回去。这一来，不等天亮，下城就有一半的人知道这辆车拉的是谁、往哪边走了。",
   "钴蓝兵团的队长冈瑟披着毯子跑来了，脚上只穿了一只靴子。他是苔藓滩来的老佣兵，加韦德王室赖过他一年的饷，从那以后他见了谁都先算利钱。",
   {
    "speaker": "冈瑟",
    "text": "杜坎森？拉出去好，省得搁在城里招苍蝇。不过要过我的卡子，得交三十金冠。没有？没有就记账，一分五的利，我记性好得很。"
   },
   {
    "if": "flag.letter_shown",
    "speaker": "冈瑟",
    "text": "还有，替巴兹伍德先生跑腿的那位，下回别把火漆往当兵的脸上怼，他们害怕。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "一分五？你这是抢钱！"
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
    "result": "冈瑟把金冠一枚一枚咬过，才收了起来，说这年头不赊账的人可不多。",
    "goto": "a1_03"
   },
   {
    "text": "让他记账",
    "effects": [
     "rep companies -1"
    ],
    "result": "他掏出半截炭笔，在拒马上画了一道，说钴蓝兵团的账赖不掉。",
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
   "当年巴尔加尔建这座城的时候，在城底下挖了一条通道，从来没人画过全图。通道里的水没过脚踝。",
   "前头传来铁链的响声。四十来个洞穴地精给拴在一根长链子上，蹲在一处干台子上，他们是绿潮的奴工。管着这串地精的是个嗜血者氏族的老兵，他把主链缠在腰上，手里提着一把斧子。撤退的喊声他听见了，可他舍不得这串苦力，想拉着他们一起往山里逃。",
   "这时候，排水沟的铁栅后头冒出来一对黄眼睛。那是个森林地精，帽子上插着一根绿羽毛，两只手扒着栅栏。",
   {
    "speaker": "妮克西",
    "text": "规矩第七条，先谈价，后救命！我给你们带路出城，你们把那条链子砸开，把他们放了，完事再分我一份，怎么样？我叫妮克西，地鹰氏族的。"
   },
   {
    "speaker": "妮克西",
    "text": "科琳答应过给我们地鹰氏族一块地。她死了，可这笔债没死。你们车上拉的那个，跟这笔账也有关系。"
   },
   {
    "if": "flag.knows_underpass",
    "text": "水闸在哪儿你记得，就在左手第三根柱子后头，只是闸轮锈死了一半。"
   },
   {
    "if": "is.goblin",
    "text": "链子上有个老地精认出你是同类，用地精话骂了你一句，骂你来晚了。"
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
     "intro": "那个老兵把主链在胳膊上绕了两圈，一拽，一串地精全扑倒在水里。",
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
        "text": "闸门一抬，黑水卷着烂木头冲了下来，那个老兵和他的手下都站不住脚了。",
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
       "desc": "链子一断，地精就自由了，也没人替他挡着了",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "链环崩开了。三个地精抄起断链就往那个老兵腿上抽。",
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
    "text": "掰住闸轮，攒足了水再一口气放下来",
    "tag": "战士系",
    "if": "is.martial",
    "combat": {
     "title": "地下通道",
     "intro": "闸轮在你手里转了半圈就卡住了，你硬是又掰过去半圈。水还没到，水声已经先到了。",
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
        "text": "你一松手，闸门给冲开了，黑水把那一伙人冲出去三步远。",
        "dmgAll": "3d6",
        "type": "bludgeoning"
       }
      },
      {
       "id": "chain",
       "name": "砸开主链",
       "desc": "链子一断，地精就自由了，也没人替他挡着了",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "链环崩开了。三个地精抄起断链就往那个老兵腿上抽。",
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
     "text": "沟里全是淤泥，宽窄正好够你钻过去。等你从他脚边冒出来的时候，他还在朝前头吼。",
     "combat": {
      "title": "地下通道",
      "intro": "他还没来得及回头，你的刀已经到了。",
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
         "text": "你一刀扎进他的膝弯，他跪进了水里，手里的链子也松了。",
         "dmgAll": "2d6",
         "type": "piercing"
        }
       },
       {
        "id": "chain",
        "name": "砸开主链",
        "desc": "链子一断，地精就自由了，也没人替他挡着了",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "链环崩开了。三个地精抄起断链就往那个老兵腿上抽。",
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
     "text": "沟里卡着半截门栓，等你好不容易钻出来，浑身是泥，那个老兵正在外头等着你。",
     "combat": {
      "title": "地下通道",
      "intro": "他一把揪住你的领子，把你从沟里拎了出来。",
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
   "{?flag.a1_half_fled:你们是让地精从水里拖上岸的。那个老兵带着半串地精往深处逃了，剩下的只有二十来个。|那个老兵倒在水里，主链断成了三截。}得救的地精坐在出口的台阶上发愣，不知道该往哪儿去。",
   "出口外头是一片烂菜地，再往外就是边区兵的巡逻线，火把排成一排。天快亮了，这些地精要是给边区兵看见，没有好下场。",
   "有个地精老太太会说通用语，她把断链子团成一团抱在怀里。",
   {
    "speaker": "地精老太太",
    "text": "这链子我留着，回头压腌菜坛子。人往哪儿去，你们说吧。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "规矩第一条，活着。第二条，别信长得高的。你们也算长得高的，这话我先说清楚。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我的庙里有个地窖，原先是存灯油的，能蹲下三十个人，挤一挤四十个也行。钥匙在我这儿。"
   },
   {
    "if": "is.goblin",
    "text": "老太太看了你一眼，换成地精话又问了一遍。这回她问的是，你到底跟他们是一伙的，还是跟我们是一伙的。"
   }
  ],
  "choices": [
   {
    "text": "把他们藏进阿坦那座庙的地窖",
    "effects": [
     "flag goblins_hidden",
     "world room +1",
     "gold -30",
     "approval tan +1",
     "approval nixee +1"
    ],
    "result": "阿坦打开地窖，把里头的半桶灯油搬走了。口粮是你们掏的钱，花了三十金冠买豆子和咸鱼。老太太头一个下去，把链子留在了台阶上。",
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
    "result": "分下去的是两把斧子、一捆矛和一面盾。个头最大的那个地精扛起了斧子，斧柄比他人还长。巡逻线那边有人看见了，这件事他们记下了。",
    "goto": "a1_05"
   },
   {
    "text": "藏进地窖，并且让他们自己推一个领头说话的人",
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
    "result": "他们吵了一盏茶的工夫，最后推了老太太。她把链子往你手里一塞，说下回有话要说，找她。",
    "goto": "a1_05"
   },
   {
    "text": "分了兵器让他们守通道，并且让他们自己推一个领头说话的人",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "flag goblins_armed",
     "flag goblin_speaker",
     "world room +1",
     "rep league -1",
     "rep clans +2"
    ],
    "result": "推出来的是扛斧子的那个。他说往后通道口归他管，不管谁来都得先敲三下。",
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
    "result": "边区兵的伍长数过人头，给了你一张出城的路条，外加四十金冠。老太太给人推上大车的时候，连头也没回。",
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
   "blurb": "这个半身人推着货担追了你们一整天。他的东西不便宜，不过饼是热的。",
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
   "车停在湖路边一座空谷仓外头。谷仓的门板早让人拆去烧火了，里头只剩几只破粮袋。入夜以后，粮袋那边有东西在啃，啃个不停。",
   "{?origin != 'grudge':火是布罗克生的，他嫌人类劈的柴太细。|火是乌什卡生的。}阿坦把灯挂在了车辕上。杜坎森的脚还露在草席外头，不知是谁往上头盖了件斗篷。",
   "天黑透以后，路上推过来一副货担。来的是科琳的老伙伴温斯顿·愚足，他追了你们一整天，说自己在城里待不住，手上闲得慌。",
   {
    "speaker": "愚足",
    "text": "先吃，先吃！肉饼、咸鱼、豆子，要哪样都有。车上那位不着急，饼凉了才叫人着急。"
   },
   {
    "if": "flag.p_lied && party.tan",
    "text": "阿坦往火里添了根柴，问起你在城里对那个快死的人说的话。他知道你哄了那个人。他问得很平静，问完就不再说什么了。"
   },
   {
    "if": "flag.p_truth && party.ushka",
    "speaker": "乌什卡",
    "text": "城里那个快死的人，你没骗他。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "我再问一句，王在哪儿？……原来你也不知道。那我还是接着问他自己吧。"
   },
   {
    "if": "is.god && party.nixee",
    "speaker": "妮克西",
    "text": "神迹得按件算钱，不赊账。我先把行情告诉你，省得你叫别人坑了。"
   },
   {
    "if": "is.god && origin != 'sons'",
    "text": "达拉斯拿了根线，从你的肩膀一直量到脚后跟。他说自己给死人做寿衣做惯了，神虽然死不了，先量一量，以防万一。"
   },
   {
    "if": "var.lies >= 3 && party.tan",
    "text": "你说过的那些哄人的话，阿坦一句一句都记着数。数到第三句，他抬起头看了你一眼。"
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
    "result": "木签上已经刻了十一道。她说这是骑士的规矩，是她跟着冒险团一条一条学来的，头一条是不杀投降的，第六条是吃饭先让伤员。第十二条她还没学到。"
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
    "result": "他朝东站着念晨祷。祷文本来有四十一句，他只念了四十句就停了，最后一句“愿银龙再临”他没有念。然后他把庙里那本祈愿簿给你看，上头记了二十年的祷告，神有没有回应的那一栏一直空着。"
   },
   {
    "text": "听妮克西背她的规矩",
    "if": "party.nixee",
    "once": true,
    "effects": [
     "codex goblin_rules",
     "approval nixee +1"
    ],
    "result": "她的规矩条条都有编号，只是从来没写下来。背到第四十条她就打住了，说后面的得收钱。"
   },
   {
    "text": "问愚足：科琳这回还会不会活过来",
    "once": true,
    "effects": [
     "rep corintar +1",
     "item +halfling_pie"
    ],
    "result": "愚足把饼掰成两半，分了一半给你。他说上回她死的时候，他脑子里一直有个声音说她没走，可这回他在她边上坐了整整一夜，什么也没听见。说完他把另一半饼也塞给了你，说自己不饿。"
   },
   {
    "text": "跟老布兰多克说话",
    "if": "origin != 'corintar'",
    "once": true,
    "effects": [
     "rep corintar +1"
    ],
    "result": "他五十岁了，给人擦了半辈子的甲。他说科琳的甲就是他擦的，护肩上那道缝也是他去年补的，补得不好。说完他又擦了一遍。"
   },
   {
    "text": "看达拉斯缝东西",
    "if": "origin != 'sons'",
    "once": true,
    "effects": [
     "item +bandage 2"
    ],
    "result": "他缝的是一件寿衣，针脚又密又匀。你问他是给谁缝的，他朝车那边抬了抬下巴。你要走的时候，他塞给你两卷包扎用的布条。"
   },
   {
    "text": "替奥托格守前半夜",
    "if": "origin != 'wex'",
    "once": true,
    "effects": [
     "flag a1_ottog_owes"
    ],
    "result": "他的手抖得连杯子都握不住，你就替他守了前半夜。他没道谢，把大剑往膝盖上一横就睡着了。"
   },
   {
    "text": "问布罗克那把铲子",
    "if": "origin != 'grudge'",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "那是红宝石领的铲子，七斤多重。他说人类的铲子是挖菜地用的，挖坟就得用这个。"
   },
   {
    "text": "问马布格抬过多少人",
    "if": "origin != 'tide'",
    "once": true,
    "effects": [
     "rep clans +1"
    ],
    "result": "他想了想，说没数过。哪一边的他都抬，抬到地方放下就走。他说人死了都是一样沉。"
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
     "text": "盐抹得不匀，席子也扎歪了，半袋盐就这么白搭了。",
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
     "text": "你把车挪到了谷仓背风的一面，又拿火堆挡住门口。粮袋那边啃了一整夜，到底没过来。",
     "effects": [
      "xp 50"
     ]
    },
    "fail": {
     "text": "到了后半夜，啃粮袋的东西顺着味儿找到了车这边。是两只食尸鬼，指甲比手指头还长。",
     "combat": {
      "title": "谷仓边",
      "intro": "食尸鬼扒着车帮往上爬，冲的是草席里裹着的尸首。",
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
         "text": "火炭溅了它们一身，两只都缩了回去。",
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
    "text": "天亮了，路上来了个骑骡子的人，过去看看",
    "goto": "a1_05b"
   }
  ]
 },
 "a1_05b": {
  "id": "a1_05b",
  "title": "骑骡子的精灵",
  "loc": "银池湖路 · 次日清晨",
  "text": [
   "天亮的时候湖面上起了雾。路上来了个精灵女人，骑着一头花骡子，膝盖上摊着个本子。她在车前勒住骡子，先看了看杜坎森露在外头的脚，然后才看你们。",
   {
    "speaker": "加莱尔",
    "text": "我是加莱尔·守昔者，编年史家会的史官。你们抬稳一点。我多问一句，他倒下去的时候，脸是朝着哪一边的？"
   },
   "你们怎么答，她就怎么记，一个字都不改。记完，她从本子里抽出一张纸，上面列着三条线索，一是渔村的龙皮，二是蓝宝石望的老太太，三是焦塔顶上的银光。",
   {
    "speaker": "加莱尔",
    "text": "今年有三起传闻，说有人见着了银龙。这种事编年史家会按件付钱，只要亲眼查证的第一手消息。你们这辆车哪儿都能去，路上也没人盘问，正合适。"
   },
   "她又想起一件事来。",
   {
    "speaker": "加莱尔",
    "text": "上回会里雇人查这种事，还是八十年前，是我祖母经手的。她说雇来的那几位都很守时。"
   },
   {
    "if": "is.immortal",
    "speaker": "加莱尔",
    "text": "另外，请问你是哪一年生的？我习惯先把这一栏填上。"
   },
   {
    "if": "is.god",
    "text": "你报了个年份，她照着写了下来，又在后面添了“自称”两个字。"
   }
  ],
  "first": [
   "codex chroniclers"
  ],
  "choices": [
   {
    "text": "接下这份查银龙传闻的差事",
    "effects": [
     "quest q_sightings start",
     "rest long"
    ],
    "result": "她付了定钱，说剩下的按件结。你们在谷仓边上睡了个整觉，出城以后这还是头一回。",
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
     "text": "她又数出三十金冠来，在本子上记了一笔，定钱三十，雇主吃亏。",
     "effects": [
      "quest q_sightings start",
      "gold +30",
      "rest long"
     ],
     "goto": "a1_06"
    },
    "fail": {
     "text": "她既不着急也不恼，在本子上写了一行“爱讲价”，照原价付了定钱。",
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
   "湖路上全是回乡的难民，有推独轮车的，有背着锅的，还有牵着羊的。有一家人正在路边认自家的田，可地界石早让兽人搬走了。村口的告示板上贴着三张招募冒险者的告示。",
   "前头过来一队骑士，披风上都绣着灰玫瑰。马后头拴着一串兽人俘虏，一共十一个，脖子上都套着绳。领头的是个三十多岁的女人，说话是洛伦特口音。",
   {
    "speaker": "莫古妮娅",
    "text": "我是奥尔丁的莫古妮娅，灰烬玫瑰骑士团的团长。这几位是我的仆役，替我修路的。路修好了，诸位走起来也舒服些，不是吗？倒是诸位这车上盖得这么严实，拉的是什么好东西？"
   },
   "她朝草席底下露出来的靴子看了一眼，又去看乌什卡，看了很久。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "仆役。这个词从她嘴里说出来，跟奴隶是一个意思。"
   },
   {
    "if": "origin == 'tide'",
    "text": "那一串里的第四个你认得，去年冬天他分过你半块饼。他也看见你了，可是没出声。"
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
     "text": "你先提了蓝牙定下的规矩，不许杀俘，又问她修路的工钱由谁来出。她骂了一句，到底还是把绳子割断了。十一个兽人拔腿就往湖边跑，有一个跑到半道又折回来，朝你点了一下头。",
     "effects": [
      "flag rose_chain_freed",
      "world room +1",
      "rep clans +1"
     ],
     "goto": "a1_07"
    },
    "fail": {
     "text": "莫古妮娅很有耐心地听你说完，夸你口才好，说科琳在的时候想必很喜欢你这样的人，可惜科琳已经死了。她身后的骑士把手搭在了剑柄上。",
     "goto": "a1_06b"
    }
   },
   {
    "text": "拔刀，抢人",
    "combat": {
     "title": "湖路上",
     "intro": "灰玫瑰的骑士拨转了马头。有个兽人叫绳子一拽，倒在了泥里。",
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
       "desc": "马比人容易受惊",
       "check": {
        "skill": "animal",
        "dc": 12
       },
       "success": {
        "text": "你朝马脸上甩了一把湖泥，领头那匹马人立起来，后头的马也跟着乱了。",
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
    "text": "出钱，赎出两个",
    "req": "gold >= 60",
    "reqText": "需要 60 金冠",
    "cost": {
     "gold": 60
    },
    "effects": [
     "flag rose_chain_bought"
    ],
    "result": "她挑了两个最瘦的给你，说这两个本来也干不了几天活了。剩下的九个还是跟着马走了。",
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
    "result": "十一个人从你们车边走了过去。乌什卡一直盯着他们，直到看不见为止。",
    "goto": "a1_07"
   }
  ]
 },
 "a1_06b": {
  "id": "a1_06b",
  "title": "剑柄上的手",
  "text": [
   "湖路上一下子就空了，难民都躲到了路边。",
   "莫古妮娅没有拔剑，她在等你先拔。她身后有四个人，两个披甲的老兵，两个扈兵。那一串兽人都低着头，只有一个抬起眼来看你。",
   {
    "speaker": "莫古妮娅",
    "text": "诸位是让路，还是拔剑？哪一样我都奉陪。不过我赶时间，诸位车上那位，闻着也不像是等得起的。"
   }
  ],
  "choices": [
   {
    "text": "拔",
    "combat": {
     "title": "湖路上",
     "intro": "她早就等着这一下了，你的剑才出鞘，她的马已经冲了过来。",
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
       "desc": "马比人容易受惊",
       "check": {
        "skill": "animal",
        "dc": 12
       },
       "success": {
        "text": "领头那匹马人立起来，后头的马也跟着乱了。",
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
    "result": "她点了点头，好像早料到会这样。十一个人从你们车边走了过去，刚才抬眼看你的那个又把头低下了。",
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
   "这个渔村只有十几户人家。村口支着个棚子，棚里挂着一张门板那么宽的皮，在风里闪闪发亮。棚子前头排着队，大半是刚回乡的难民。",
   {
    "speaker": "摊主",
    "text": "银龙蜕下来的皮！一个铜板看一眼，两个铜板摸一下！摸一下治风湿，摸两回管一年！"
   },
   "加莱尔站在队尾，摊开本子，一笔一笔地记排队的人数。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "书上说银龙的鳞是白的，在太阳底下会发蓝。可这一张是灰的，只是上头抹了一层亮粉。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "两个铜板摸一下？比我们地精做买卖还黑。"
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
     "text": "你的指头上沾了一层银粉。再掀起一片鳞来看，鳞根是褐色的。这是一张双足飞龙的皮，上头刷了银粉。",
     "goto": "a1_07b"
    },
    "fail": {
     "text": "你看了半天也没看出名堂。摊主说想细看就得买一角，要十金冠。你买了，拿回去一刮，银粉底下是褐色的，这是一张刷了银粉的双足飞龙皮。",
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
    "result": "银粉底下有一股松脂味，还混着火山灰的味道。这是试炼山那一带的双足飞龙，不是什么银龙。",
    "goto": "a1_07b"
   }
  ]
 },
 "a1_07b": {
  "id": "a1_07b",
  "title": "刷了银粉的皮",
  "text": [
   "摊主看出你已经看穿了，赶紧把你拉到棚子后头。他压着嗓子说，他表哥是随军祭司，皮是表哥从山上弄来的，银粉也是表哥给的。他说大家伙儿不过是图个念想。",
   "棚子前头的队还在排着，有个老头背着瘫了半边的老伴，已经排到第三个了。",
   {
    "speaker": "加莱尔",
    "text": "我是按件付钱的，你们打算怎么处置，我不管。不过你们怎么处置的，我会照实记下来。"
   },
   {
    "if": "flag.a1_hide_smelled",
    "speaker": "加莱尔",
    "text": "试炼山的松脂，这一条我替你记上了，署你的名字。"
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
    "result": "你刮了一道，底下的褐鳞露了出来，队伍当场散了一半。只有那个背着老伴的老头没走，又排了一会儿。摊主的表哥是随军祭司，这笔账他记到了你头上。",
    "goto": "a1_08"
   },
   {
    "text": "私下让他收摊",
    "effects": [
     "gold +20",
     "approval tan +1"
    ],
    "result": "他天黑以前就收了摊，把皮卷起来扛着走了，说要去下一个村子。",
    "goto": "a1_08"
   },
   {
    "text": "由他去",
    "effects": [
     "gold +10"
    ],
    "result": "加莱尔照样付了钱，只是少给了一半。她说“由他去”也算一种处置，值一半的钱。",
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
   "蓝宝石望的塔已经塌了半边。从前蓝宝石之眼的骑士就住在这儿。如今塔顶上住着个老太太，身上裹着三层毯子，脚边的炭盆早就灭了。墙上用炭条画满了道道，一天画一道。",
   "村里人都说她见过银龙。她自己说没有。二十年了，她每天都上来看天，等银龙来，可一回也没见着。",
   {
    "speaker": "老太太",
    "text": "你说，会不会是我哪天眨眼的时候，正好错过了？"
   },
   {
    "if": "flag.a1_blink",
    "text": "她问完就盯着你的眼睛看。你看出来了，她想听的是一句实话。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "墙上有七千二百多道。我才数了一面墙，还有两面没数。"
   },
   {
    "if": "is.god",
    "text": "她不再看天了，转过身来看着你，看了很久，才问了一句，是你吗？"
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
     "text": "她的手一直紧紧按在那本记天象的簿子上。她要的是一句准话，哪一句都行，只要是真的。",
     "effects": [
      "flag a1_blink"
     ]
    },
    "fail": {
     "text": "你看了半天，只看出来她冷，就掏了五个金冠，托人给她送一筐炭上来。",
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
    "result": "她点了点头，把那本簿子一页一页撕下来，喂进了炭盆里，说这下暖和了。墙上的那些道道，她没有擦。",
    "goto": "a1_09"
   },
   {
    "text": "说您没错过，他没来",
    "effects": [
     "item +sky_tally",
     "approval tan +1"
    ],
    "result": "她把那本记了二十年的天象簿交给了阿坦，说你收着吧，你年轻，眼睛好。阿坦把簿子仔细揣进了怀里。",
    "goto": "a1_09"
   },
   {
    "text": "问她没见着，为什么还看",
    "effects": [
     "flag a1_she_watches",
     "rep temples +1"
    ],
    "result": "她说总得有人看着。她把毯子又裹紧了些，眼睛回到了天上。下楼的时候，阿坦在祈愿簿上添了一行，写的是她的名字。",
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
    "result": "一道银光从天上划了过去，从塔顶一直拉到湖的另一边。她看见了，在墙上重重划下了最后一道。当天晚上她就过世了。三天以后，神殿的人抬着“第四起银龙现身”的牌子在蓝宝石望游街，阿坦没有去看。",
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
   "{?flag.a1_mule:到了半夜，先叫起来的是灰骡子。|到了半夜，先叫起来的是拴在车边的狗。}紧接着芦苇里站起来一排兽人，脸上都抹着白灰。领头的提着一只陶罐，罐口拿蜡封着。",
   "他们是死齿氏族的人，这个氏族会把死人的魂收进罐子里问话。他们不看车上的尸首，看的是尸首上头的空处，好像那儿还站着什么人。芦苇边上还有个瘦高的兽人，袖着手站在那儿，只是看着。",
   {
    "speaker": "死语者",
    "text": "尸首你们留着，我们只要他的魂，要他开口说话。等他说完了，你们照样把他拉走。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡把刀和锤一块儿抽了出来。从城里走到这儿，她还是头一回两样一起拿。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "是死齿氏族的人。他们拿罐子装死人的魂，装进去就不放出来了。"
   },
   {
    "if": "flag.cart_known",
    "text": "芦苇那头又站起来两个。看来城里那一声哨子，传得比你们走得还快。"
   },
   {
    "if": "is.god",
    "text": "领头的回头去问后面那个瘦高的，神到底有没有魂，罐子装不装得下。那人是缝尸者斯劳，他朝你比了比罐口的大小，摇了摇头。"
   },
   {
    "if": "is.god && party.ushka",
    "speaker": "乌什卡",
    "text": "不会死的我见过，到头来总得有人去放倒。今晚先放倒他们。"
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
     "intro": "死语者一掌拍开罐口的蜡，芦苇荡里的风一下子停了。",
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
       "desc": "罐子一碎，他就没法招魂了",
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
       "desc": "他们的食尸鬼不敢下水",
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
     "intro": "死语者一掌拍开罐口的蜡，芦苇荡里的风一下子停了，两边都有兽人朝车这边摸了过来。",
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
       "desc": "罐子一碎，他就没法招魂了",
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
       "desc": "他们的食尸鬼不敢下水",
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
   "湖边有一块铺着碎石的平地，正好能生火。车一停下，跟了一路的那几拨人也都到了，各自找地方站着。杜坎森的尸首到底交给谁，得在这儿定下来。",
   "乌什卡的刀已经磨好了，她要做归尘礼。古尔赞的使者蹲在车轮边上，等着把尸首领回去。五个边区兵坐在路边吃干粮，剁肉刀就插在土里，他们要的是头。瓦丽娜的那箱金冠还开着，她自己坐在箱盖上。雕骨者的那袋盐放在车辕上，一直没人动过。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "湖里住着一位水里的神灵，渔民叫她银夫人，常往水里扔鱼头供她。要是给尸首绑上石头沉下去，也算是交给她了。"
   },
   {
    "if": "flag.ghost_taken",
    "text": "打芦苇荡那一夜以后，尸首变轻了，抬的人个个都这么说。他的魂给死齿氏族装走了。"
   },
   {
    "if": "flag.a1_varina_read",
    "text": "瓦丽娜的学徒已经在湖岸上画好了粉笔法阵，尺寸量了三遍。"
   },
   {
    "if": "flag.a1_heir_named",
    "text": "缠白布的使者认出了你，朝你点了一下头。门板桌那天晚上是谁说尸首该归儿子，他一直记着。"
   },
   {
    "if": "is.god",
    "text": "使者站了起来，当着所有人的面问你，杜坎森到底是不是兽人的神杜坎的儿子。问完他就站在那儿等着，连边区兵也停了嘴。"
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
    "result": "使者跪了下去，两只手按在地上。边区兵里有人往地上吐了口唾沫。不等天黑，这句话就会顺着艾伦河往北传开。"
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
    "result": "使者站着没动。他走的时候没跟你打招呼。打那以后，兽人氏族里就有人管你叫仇神了。"
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
    "result": "使者看了你很久，才又蹲回车轮边上。你是他见过的头一个肯说不知道的神，他不知道自己该失望还是该放心。"
   },
   {
    "text": "让乌什卡做归尘礼，把尸首磨成粉",
    "if": "party.ushka",
    "goto": "a1_10a"
   },
   {
    "text": "把尸首交给古尔赞的使者，让他儿子领回去",
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
    "result": "使者把门板连着尸首一起扛上了肩，又叫了三个人过来帮着抬。{?origin == 'tide':临走他回过头来，管你叫了一声亲族。|临走他回头看了一眼那辆车，说长者郡的兽人会记着这辆车。}乌什卡转过身去，不肯看。",
    "goto": "a1_10z"
   },
   {
    "text": "让边区兵把头砍下来，带回去挂城门",
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
    "result": "剁肉刀一连落了三下。领头的把头提起来看了看，拿麻袋装了。剩下的身子他们不要，乌什卡在湖边把它烧了，只是来不及磨。",
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
    "result": "瓦丽娜数出四百金冠，学徒把尸首抬进了粉笔法阵。当天夜里，乌什卡从尸首上砍下一只手，独自到湖边磨了一整夜，天亮才回来。她把一小包骨粉揣进怀里，只说了一句，再有第二回，她就走。",
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
    "result": "你们跟渔民借了条船，划到湖心，给尸首绑上四块石头沉了下去。水面冒了一阵泡，就平了。渔民说往后再不到这一片下网了。",
    "goto": "a1_10z"
   },
   {
    "text": "交给雕骨者的人，收下那袋盐",
    "effects": [
     "flag korgus_carver",
     "world embers +1",
     "rep clans +1",
     "item +bonecarver_salt",
     "approval ushka -1",
     "quest q_korgus done"
    ],
    "result": "雕骨者的三个人拿盐把尸首埋了个严严实实，抬着往东南去了。{?flag.a1_salt_known:那袋盐还真够腌一冬的鱼。|}乌什卡说，刻满了花纹的骨头，过上三代就会有人拿去换酒喝。",
    "goto": "a1_10z"
   }
  ]
 },
 "a1_10a": {
  "id": "a1_10a",
  "title": "归尘礼",
  "text": [
   "乌什卡先动手拆，把关节一处一处卸开，卸下来的骨头按大小码在席子上。她干活的时候不说话，只开过一回口，叫你把火烧旺些。",
   "火得烧上一整夜，烧完的骨头要等它凉透，再拿锤子敲碎，再磨成粉。",
   {
    "speaker": "乌什卡",
    "text": "这副骨头比我说的还要粗。你守着火，我来磨。夜里别睡，火一灭就得从头再来。"
   },
   {
    "if": "flag.ghost_taken",
    "speaker": "乌什卡",
    "text": "我磨的只是骨头。他的魂已经不在里头了，叫死齿的罐子装走了。可骨头也得磨。"
   },
   {
    "if": "flag.a1_salted",
    "text": "亏得盐抹得匀，席子也扎得紧，拆的时候省了不少事。乌什卡看了一眼绳结，没说什么，算是认可了。"
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
     "text": "天亮的时候火还旺着，乌什卡已经磨完了一半，骨粉装了三只皮袋。",
     "goto": "a1_10b"
    },
    "fail": {
     "text": "后半夜你打了个盹，是给火星燎醒的，手背上起了一溜泡，好在火没灭。",
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
   "第二天晌午，边区兵又回来了，这回来了八个。领头的看了看那三只皮袋，又看了看席子上还没磨的半堆骨头。",
   {
    "speaker": "边区兵",
    "text": "头呢？营里说好了的，要挂在北城门上，挂满一个月！你们倒好，给磨成面了？"
   },
   "乌什卡头也没抬，锤子照旧一下一下往下落。还没磨的那一堆里，正好有头骨。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "规矩第十九条，跟带刀的讲道理，先站到他够不着的地方。"
   }
  ],
  "choices": [
   {
    "text": "跟他们讲道理：头挂上去一个月，会招来多少兽人来抢，城门底下要死多少人",
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
     "text": "领头的听完了，往皮袋上踢了一脚土，带着人走了。乌什卡磨完最后一块，把锤子拿到湖水里洗了洗。",
     "goto": "a1_10z"
    },
    "fail": {
     "text": "他听得不耐烦了，把剁肉刀从土里拔了出来。",
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
    "result": "你们几个往席子前头一站，任他们怎么骂也不还嘴。边区兵骂了一刻钟，直到乌什卡把最后一块头骨敲碎，再没什么可抢的，才走了。临走的时候，领头的把你们几个的长相都记下了。",
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
   "车上空了一半，拉起来轻多了。往后各营只要有人问起杜坎森的尸首到底在哪儿，说法总有七八种，没有一种对得上。{?flag.korgus_son:长者郡那边的事，外人并不知道。|}{?flag.korgus_carver:雕骨者那边的事，外人也不知道。|}",
   {
    "if": "flag.korgus_sold && party.ushka",
    "speaker": "乌什卡",
    "text": "再有第二回，我就走。这话我早说过了，你记着吧。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "从城里走到这儿，一共十一天。席子换了两回，绳子换了三回。我都记在祈愿簿的背面了。"
   },
   {
    "if": "origin == 'grudge'",
    "text": "那张账页还揣在你怀里，上头记着玛瑙之门那笔债，欠债的是杜坎森。要把这一条划掉，得写清楚他的尸首最后是怎么处置的。"
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
    "result": "他掌心的印记你在城里就验过了。你在账页上写了一行字，画了押，玛瑙之门那笔债就从账上划掉了。",
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
     "text": "杜坎印记就在他左肩胛骨上。你照着描了一份贴在账页背面，签了字，玛瑙之门那笔债总算划掉了。",
     "effects": [
      "flag entry_struck",
      "quest q_o_grudge stage 2"
     ],
     "goto": "a1_11"
    },
    "fail": {
     "text": "剩下的这点东西，怎么也对不上你要找的记号。你没敢签字，账上那一条只好先留着。",
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
    "result": "尸首已经到了别人手里，“已处置”这三个字你没法写。你把账页折好收了起来，玛瑙之门那笔债还留在账上。",
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
   "你们回城那天，正赶上今年头一场雪。北城有一座焦塔，是早年间叫一头黑龙烧黑的。",
   "城里已经连着传了三个黄昏，说是太阳一落，焦塔顶上就有一圈银光绕着转，是银龙显灵。这是加莱尔要查的第三起传闻。",
   "塔脚下站着四个人，穿的是家丁的衣裳，可胳膊比哪家的家丁都粗。塔梯就在他们身后，塔身外头还有一溜枯藤，一直爬到塔顶。",
   {
    "speaker": "家丁",
    "text": "这是主人家的塔，不让看！要看银龙，上对面酒馆楼上看去，两个铜板一位，还有热酒喝。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "你瞧他们那鞋，全是新的，鞋底连点泥都没有。谁家的家丁不用干活？"
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
     "text": "领头的犹豫了一下，还是往旁边让了半步，说主人家可没交代过这个，出了事你们自己担着。",
     "goto": "a1_11b"
    },
    "fail": {
     "text": "领头的一听就笑了，问你是哪一位元老请来的。他身后那几个已经把门闩抄在了手里。",
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
     "text": "这藤比看上去结实。等你翻上塔顶，那几个家丁还在底下守着梯口。",
     "goto": "a1_11b"
    },
    "fail": {
     "text": "才爬到一半藤就断了，你在石棱上狠狠撞了一下。好在旁边还有一根，你抓着它总算爬了上去。",
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
   "塔顶的垛口边跪着个瘦子，面前支着一面铜镜，镜面对着西边的太阳。他手里攥着一根线，线那头拴着一只蒙了银箔的风筝，在风里一圈一圈地转。",
   "从底下看是一圈银光，到了跟前，不过是一个人在放风筝。",
   {
    "speaker": "放风筝的",
    "text": "别打，别打！是人家给钱叫我放的，一个黄昏五个铜板。人家还说了，叫人逮着也不要紧，逮着了更好！"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这下三起都查完了。一起是刷了银粉的皮，一起是没见过银龙的老太太，这一起是风筝。没有一起是真的。"
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
     "text": "他全说了。雇他的是上城区的一座宅子，主人家姓奥特拉克，是城里的世家。他还说主人家巴不得叫人拆穿，你们要是找上门去，准有茶喝。",
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
     "text": "他把线一丢，从梯口跑了。风筝挂在了垛口上，你拿过来一看，竹骨上烙着“萨什部，上城区”几个字。",
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
    "result": "你把风筝收了回来，线轴上缠着一张字条，写的是上城区一座宅子的门牌。瘦子没跑，你分了他一块干粮。回头加莱尔把三起传闻的钱一并付了，一共一百五十金冠。她还说，门板桌那边已经吵起来了，吵的是这座城往后该归谁管。",
    "goto": "a1_12"
   }
  ]
 },
 "a1_12": {
  "id": "a1_12",
  "title": "萨什卷",
  "loc": "上城区 · 奥特拉克的宅子",
  "text": [
   "上城区的宅子都是贴着崖壁盖的。奥特拉克元老六十上下，手腕上戴着一只发黑的旧银镯子。他一开口先说了一句古卡斯塔诺语，加莱尔替你们翻了出来，意思是请坐。",
   {
    "if": "flag.a1_kite_man",
    "text": "放风筝的那个瘦子比你们先到了，正蹲在门房里捧着一碗热茶，一见你们进来，赶紧把脸埋进了碗里。"
   },
   "桌上只摆着一壶茶，一碟萝卜干。兽人占着这座城的二十年里，他一直没走。城里都传世家那些年吃过兽人，这话他听见了，从来不辩。",
   {
    "speaker": "奥特拉克",
    "text": "我要找的就是你们这样的人，赶着一辆车哪儿都去，又不替哪一家说话。焦塔顶上那只风筝，本来就是放给你们看的。"
   },
   "他从一只锡筒里抽出一卷纸。这是一份古卷的抄本，写的是古卡斯塔诺语，有一半的字如今已经没人认得了。认得的那一半里有一句话，写的是“王从灰烬那年起没再说过话，这五百年是我替他答的”。",
   {
    "speaker": "奥特拉克",
    "text": "这是银龙说的，在灰元五百年，他最后一回出战之前。卷子可以给你们看，看完要是还想问，那时候再问。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这么说，王是在生我们的气。卡斯塔诺烧了林子，造了孽，王就不理我们了，是银龙替他回应了五百年。"
   },
   {
    "if": "is.god",
    "text": "奥特拉克问你，灰元五百年那一年你在不在。你说不在。他点了点头，又问，那灰元元年呢？"
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
     "text": "你和加莱尔凑在一块儿，又多认出来一行，是个日子，灰元五百年卡斯坦月。这么说来，银龙说完这句话，当月就死了。",
     "effects": [
      "codex silver_dragon"
     ]
    },
    "fail": {
     "text": "你把卷子拿倒了。奥特拉克伸手替你转了过来，顺手就把它收回了锡筒。",
     "effects": [
      "rep league -1"
     ]
    }
   },
   {
    "text": "看看奥特拉克为什么非要让外人来看这卷子",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你看明白了。这句话要是由外人带出去，世家就不用担干系。他还说漏了半句，元老会里有人夜里在偷偷拜另一位神，是谁他心里清楚，可他不肯说。",
     "effects": [
      "flag morningstar_hint"
     ]
    },
    "fail": {
     "text": "你盯着他看得太久了。他把镯子转了半圈，茶也不给你们续了。",
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
    "result": "他叫管事拿来纸笔，在一旁看着加莱尔抄。抄完他又从头对了一遍，才在末尾盖了个小印。",
    "goto": "a1_13"
   },
   {
    "text": "答应他不外传",
    "effects": [
     "rep league +1"
    ],
    "result": "他把卷子收回了锡筒，说世家记得守信的人。",
    "goto": "a1_13"
   },
   {
    "text": "问他：兽人占城的那二十年，你们是靠吃什么活下来的",
    "effects": [
     "rep league -1",
     "approval ushka +1"
    ],
    "result": "奥特拉克端起茶来喝了一口，又放下，到底没有回答。乌什卡倒朝他点了一下头，她朝一个人类贵族点头，这还是头一回。",
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
   "阿坦想去试炼山问一句话，古时候的卡斯坦就是在那儿见到银龙的。你们从北要塞底下上了山。山上有十道试炼，是历代立下来考验人的，可山上的法术四百多年前就失效了，第二道试炼的石桌不再显字，第三道试炼的锻炉也是凉的。",
   "第九道试炼的石像连头都没了，可还跪在那儿。",
   "第六道试炼在半山腰上，是一棵橡树和一棵榛树，当中隔着一条小路，两棵树里各住着一位树灵。这道试炼考的是劝和，两位树灵从立试炼那会儿一直吵到现在。",
   {
    "speaker": "橡树里的那位",
    "text": "那条溪是我的！"
   },
   {
    "speaker": "榛树里的那位",
    "text": "溪是我的，你的是溪边那块石头！上回来劝架的那个也这么说，你看，他的靴子还搁在那儿。"
   },
   "石头边上果然有一双烂得只剩鞋底的靴子。再往上走，伯爵联盟首领的女儿卡莉斯塔·黑塔带着两个随从，正拿一根绳子量上山的路。半山的空地上落着一头狮鹫，马尔霍德的王子小格里夫坐在它旁边啃苹果。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我就问一句，问完咱们就走。"
   },
   {
    "if": "is.god",
    "text": "你一走近，两棵树都不吵了。橡树里的那位问榛树里的那位，这个算不算天上来的。榛树说不算，天上来的哪有自己走路的。"
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
     "text": "你说溪水是往下流的，石头是不动的，这两样谁也离不了谁。两棵树静了半晌。后来橡树说起了“银的那位”，也就是银龙，说“灰的那天”以后，他也上这儿来问过天，可天没有理他。榛树马上说，这件事它记得比橡树清楚。",
     "effects": [
      "flag spirits_heard",
      "codex trials_of_castan"
     ],
     "goto": "a1_13b"
    },
    "fail": {
     "text": "它们朝那双靴子指了指，什么也不肯说了。阿坦蹲在两棵树中间听了一下午，总算从它们吵架的话里拣出半句来，说的是银龙来问过天，天没理他。这么一耽搁，天也黑了。",
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
    "result": "你喊完以后，山下静了好一阵，然后北要塞的墙头上有人应了一声，是蓝牙的哨兵。头一道试炼考的就是这个，你喊一声，有人应你。"
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
    "result": "炉膛是拿整块石头掏出来的，接缝处留着一道细槽，引的是山里的地热。这是巴尔加尔的手艺，你一眼就认得出来。"
   },
   {
    "text": "问卡莉斯塔在量什么",
    "once": true,
    "effects": [
     "rep league +1"
    ],
    "result": "她把绳结又数了一遍，才说她在量上山的路，总有一天得有人上山去走这十道试炼，她得先知道要走多久。说到“有人”的时候，她的眼睛一直望着山顶那块誓石。"
   }
  ]
 },
 "a1_13b": {
  "id": "a1_13b",
  "title": "第十道试炼的林子",
  "art": "ev_trails_basilisk",
  "text": [
   "下山的路要穿过一片松林。松针上印着爪印，一个印子有你的手掌那么宽。",
   "{?flag.a1_dark:天已经黑透了，林子里什么也看不清。|好在林子里还亮着。}有块石头后面传来喘气的声音。那是一头小石化蜥，身上的刺还没长全，可它的眼睛照样能把人看得僵住。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "千万别看它的眼睛，看它的脚！脚朝哪边，它就往哪边扑。"
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
     "text": "你们贴着下风口悄悄地走，它从头到尾没抬过头。",
     "effects": [
      "xp 100"
     ],
     "goto": "a1_14"
    },
    "fail": {
     "text": "有人踩断了一根枯枝，它把头转了过来。",
     "combat": {
      "title": "松林",
      "intro": "石化蜥一瞪眼，走在最前头的那个人两条腿立刻就僵了。",
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
         "text": "盾面一晃，它的眼睛眯成了一条缝，胡乱扑了一气。",
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
        "text": "盾面一晃，它的眼睛眯成了一条缝，胡乱扑了一气。",
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
   "泛神会议还没开，各座神殿倒先抢起人来了。这次会要议的是科琳死后算不算神。万神道上搭了十几顶帐篷，你们走到哪一顶门口都有人拦住说话，因为你们查过那三起银龙传闻，说的话有分量。",
   {
    "speaker": "卡斯特洛斯的老祭司",
    "text": "城破那天，卡莱昂大人身上出过异象，他是神王的化身。几位是查过银龙传闻的人，你们说上一句，比我们说十句都管用。"
   },
   {
    "speaker": "阿德安的祭司",
    "text": "马尔霍德的王子骑着狮鹫打进城来，这才是神的长子该有的样子！几位替他说句话，阿德安的神殿会记着你们。"
   },
   "卡莱昂本人给祭司们围在当中。他挨个问他们，既然说他是龙神的化身，那爪子和尾巴什么时候长出来，没有一个人答得上来。多米尼克坐在角落里，膝盖上摊着本子，一个字一个字地记。",
   "帐篷后头还坐着个红宝石矮人，一个人在喝酒，面前摆着一张单子。",
   {
    "if": "is.god",
    "text": "卡斯特洛斯的老祭司一看见你，就把卡莱昂撇在了原地，赶过来扑通一声跪下，喊你“王的化身”。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "你不是。"
   },
   {
    "if": "is.god && party.nixee",
    "speaker": "妮克西",
    "text": "这化身是按年算钱，还是按件算？你问清楚了再点头。头一点下去，往后谁家死了人都要来敲你的门。"
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
    "text": "打听清楚：认一个化身要过哪些关",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你打听明白了。认化身得经过会议表决，要有足够的票，眼下卡莱昂和小格里夫谁也凑不齐。两边都来拉你们，是想先占住一个说法。",
     "effects": [
      "flag a1_votes_known"
     ]
    },
    "fail": {
     "text": "你问得太直了，阿德安的祭司以为你是在讲价，一转身就去跟别人说你们要钱。",
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
     "text": "每回有人叫他一声“化身”，他就往帐篷门口挪一步，他是真不想当。他女儿卡莉斯塔倒是一直站在门口，一步也没挪过。想让黑塔家出一位化身的是她。"
    },
    "fail": {
     "text": "你看错了人，盯着卡莉斯塔瞧了半天。她察觉了，冷冷地回了你一眼。",
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
    "result": "神殿里存着黑塔家家谱的抄本。你查到他家祖上出过术士王的门徒，那是三代以前的事，如今没人提起。这一条拿来抬他也行，拿来压他也行。"
   },
   {
    "text": "找多米尼克，把你的名字登上祭司的名册",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "flag has_vote"
    ],
    "result": "多米尼克问你给谁念过经，念过几场，问一样记一样。记完了，他给了你一根刻着你名字的木签。冒险者祭司也算祭司，有了这根木签，会上你就有一票。"
   },
   {
    "text": "去帐篷后头，看看那个喝酒的矮人",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "这矮人叫贝尔格拉克·穴居者，是科琳身边的老伙伴。他一开口先报数，说祭司一共一百零三个，昨晚喝了酒的六十一个，没喝的四十二个里头有十个是装的。报完他接着喝酒。那张单子上写的是矮人文，你才瞄了一眼，他就拿杯子把它压住了。"
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
    "result": "老祭司握住你的手，半天不肯放。卡莱昂隔着人群看了你一眼，那眼神像是在看一个刚把他卖了的人。",
    "goto": "a1_15"
   },
   {
    "text": "替小格里夫作保",
    "effects": [
     "flag avatar_gryf",
     "world scale -1",
     "rep league +1"
    ],
    "result": "阿德安的祭司当场把你的名字记下了。小格里夫在外头听说了，进来说他不要当，他要替科琳说话。祭司们说这由不得他。",
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
    "result": "你把刷银粉的皮、放风筝的人和那个看了二十年天的老太太，一样一样全说了。帐篷里先是一静，接着两边的祭司一块儿骂起你来。只有多米尼克没骂，他都记了下来。",
    "goto": "a1_15"
   },
   {
    "text": "谁也不帮，进大帐",
    "effects": [
     "approval tan +1"
    ],
    "result": "你从两边祭司当中挤了过去。阿坦跟在你后头，小声说了一个字，好。",
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
    "result": "老祭司当场给你披上了一条白布。卡莱昂长出了一口气，说化身这份差事总算有人顶了。阿坦站在门口，没有进来。",
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
   "大帐是拿三顶军帐拼起来的。到会的冒险者祭司有一百来个，有披着甲的，也有光着脚的。牵头的多米尼克坐在正中间。",
   "科琳的尸首是你们收尸队擦洗的，所以你们也给叫上去问话。问的是她身上的伤，正面有几处，背后有几处，还有最后那一下，她是叫人推到前头去的，还是自己走过去的。这关系到她算不算舍身，够不够封神。",
   {
    "speaker": "多米尼克",
    "text": "照奈拉特的规矩，人死了要过秤。我要的是秤上的数，不要诸位的念想。说吧，一处一处地说。"
   },
   "阿坦在后排举起了手，他想问神王的事，可旁边的人把他的胳膊按了下去。",
   "蓝牙站在帐门边上，愚足坐在他脚边，手里捏着一块饼，一口也没吃。老布兰多克站在最后一排。",
   {
    "if": "origin == 'corintar'",
    "text": "你当时就站在盾墙里，是亲眼看见的，这一点满帐的人都知道。"
   },
   {
    "if": "flag.has_vote",
    "text": "你手里攥着那根刻着名字的木签，那是你的一票。"
   },
   {
    "if": "is.god",
    "text": "有个白胡子祭司站起来问你，灰元元年卡斯坦月一日出了什么事。你答不上来，那一年你不在。他坐下去的时候，旁边两个祭司都往外挪了挪。"
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
     "text": "书记照你的原话记了下来。多米尼克把这句话当众念了一遍，帐子里有人哭出了声。",
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
     "text": "书记替你润了色，记成了“她受了感召”。你的原话没能写进文书里。",
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
     "text": "帐子里嗡的一声，好几个团的祭司都在点头，科琳塔尔的人脸色很难看。书记是照你的原话记的。",
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
     "text": "书记记成了“全军与她同心”，你那句话的意思给磨掉了一半。",
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
    "result": "帐子里一下子没了声音。多米尼克看了你很久，在本子上写了一行，然后说这不是今天要议的事。阿坦站在后排，没有再举手。",
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
    "result": "你念的是“王从灰烬那年起没再说过话”。刚念完，前排一个老祭司站起来就走了。书记的笔停了一停，又接着往下写。",
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
    "result": "你一站起来，帐子里就没有人还坐着了。等你把话说完，多米尼克合上了本子。往后只要提起这次会，人人都说那是神亲自开的。",
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
    "result": "你一站起来，帐子里就没有人还坐着了。蓝牙在门边听完，转身出去了。往后只要提起这次会，人人都说那是神亲自开的。",
    "goto": "a1_15b"
   }
  ]
 },
 "a1_15b": {
  "id": "a1_15b",
  "title": "剃了头的扈从",
  "text": [
   "会开到一半，帐门叫人挤开了，进来几个戴木面具的老人。他们是阿格拉多斯教团的长老，阿格拉多斯是早已死去的战神。领头的老妇人当众说，教团里传着一则老预言，科琳一步一步全都应上了。",
   "你们站在帐篷最后头，只听见了半句，说的是红发的，从东墙来。写着预言的那页纸，你们没见着。",
   "最后是举手表决，举起来的胳膊多得不用数。科琳就这么封了神，接的是战神阿格拉多斯空了多年的位子。帐子外头的人一直喊到天黑。",
   {
    "if": "origin != 'corintar'",
    "text": "会一散，老布兰多克就去了河边，跟人借了把剃刀，把头剃得精光。他说往后不擦甲了，要去当她的祭司。他把擦甲的那块布叠得整整齐齐，放在了车上。"
   },
   {
    "if": "flag.god_tried_raise",
    "text": "蓝牙从你身边走了过去，没有停。"
   },
   {
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "text": "天黑以后，蓝牙在马桩边上叫住了你，旁边没有别人。"
   },
   {
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "speaker": "蓝牙",
    "text": "你当时就在盾墙里。最后那一下，她有没有看我？"
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
    "result": "他点了点头，就走了。",
    "goto": "a1_16"
   },
   {
    "text": "告诉他：看了",
    "if": "origin == 'corintar' && !flag.god_tried_raise && !flag.saw_her_look",
    "effects": [
     "var lies +1",
     "rep corintar +1"
    ],
    "result": "其实你并没有看清。他点了点头，就走了。",
    "goto": "a1_16"
   },
   {
    "text": "说：我没看清",
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "effects": [
     "flag a1_bt_unsure"
    ],
    "result": "他站了一会儿，说了声也好，就走了。",
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
   "blurb": "这人是冈瑟手下管仓库的，打完仗收来的东西卖得便宜。",
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
   "各团都要走了。科琳塔尔回昂特拉斯，达梅里亚之子往西去，钴蓝兵团往西北走，打算沿着艾伦河自己打下一块地来抵饷。空地上的守夜火早就撤了，只有门板桌还在。",
   "桌边还剩最后一件事要吵，就是这座城往后归谁管。蓝牙坐在一头，伯爵联盟的卡莱昂和他女儿卡莉斯塔坐在另一头，冈瑟夹在中间算账。世家的奥特拉克元老也来了。兽人阿罗莎·伐橡者站在一边不肯坐，她是跟着科琳的。碎心者氏族的酋长古拉德只派了个人来，蹲在桌腿边上。",
   {
    "speaker": "冈瑟",
    "text": "谁管这座城，我不在乎。加韦德那个小国王说了，他爹死在血腐阶梯，欠我们的饷也跟着死了。这话我不认，一年零四个月的饷，利钱另算！"
   },
   {
    "if": "flag.letter_shown",
    "speaker": "冈瑟",
    "text": "巴兹伍德先生的人也在，正好。帝国到底是什么意思，你替我们问一句。"
   },
   {
    "if": "origin != 'sons'",
    "text": "罗吉尔的纵队天一亮就要拔营往西。达拉斯把缝好的最后一件寿衣叠起来放在车上，背起包袱要跟着队伍走了。走到桌边，他停了一下。"
   },
   {
    "if": "origin != 'sons'",
    "speaker": "达拉斯",
    "text": "针脚我缝得密，到时候拆起来小心点。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "科琳答应过给我们地鹰氏族一块地，叫康原。可她死了，如今做主的是蓝牙。你们帮我去开这个口，事成了我分你们一成！"
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
    "text": "阿坦坐在车辕上，把你说过的那些哄人的话又从头数了一遍。"
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
     "text": "蓝牙听完，叫书记把印拿来，只说了一句“是她答应的”，就盖了印，把地契推给了妮克西。妮克西又把它推给了你，说她信不过自己的口袋。",
     "effects": [
      "flag groundhawk_deed",
      "item +groundhawk_deed",
      "world room +1",
      "approval nixee +2"
     ]
    },
    "fail": {
     "text": "蓝牙说这块地他认，可印留在昂特拉斯，文书还得等一等。妮克西说“等”这个字她听过好多回了。",
     "effects": [
      "approval nixee -1"
     ]
    }
   },
   {
    "text": "替古拉德捎话，请蓝牙替碎心者氏族作保",
    "once": true,
    "effects": [
     "flag pixiebury_warned",
     "world room +1",
     "rep clans +1"
    ],
    "result": "蹲在桌腿边上的那个人站了起来。蓝牙说碎心者氏族落脚的皮克精之墓，科琳塔尔会派人过去照看。那人把这句话念了三遍，记牢了才走。"
   },
   {
    "text": "听阿罗莎说话",
    "once": true,
    "effects": [
     "codex arosha"
    ],
    "result": "阿罗莎说，力气和脸面，兽人本来就有，科琳教她的是另外两样，本分和心软，这两样难学多了。说完她就闭上了嘴，好像嫌自己说多了。"
   },
   {
    "text": "问愚足往后去哪儿",
    "once": true,
    "effects": [
     "item +halfling_pie 2"
    ],
    "result": "他说他跟着蓝牙走，蓝牙老是不吃饭，总得有个人盯着。他塞给你两个肉饼，还是热的。"
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
    "result": "罗吉尔合上兵书，点了点头。他拔营的时候，你没有去送。"
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
    "result": "卡莱昂在文书上签了名。当天，下城的地精就叫人赶出了旧集市。",
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
    "result": "蓝牙说城他可以守，可他不当城主。书记只好把“城主”那一栏空着，另填了“守城”两个字。",
    "goto": "a1_17"
   },
   {
    "text": "立一纸城约：各家共管，下城划出一块地精坊",
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
     "text": "一直吵到半夜，各家总算都签了。冈瑟签字的时候还在说利钱另算。地精坊那一条写在最末尾，一共三行。",
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
     "text": "卡莱昂头一个起身走了，冈瑟也跟着走了。门板桌边上剩下的几个人谁也不服谁，没过多久也散了。",
     "effects": [
      "flag compact_none"
     ],
     "goto": "a1_17"
    }
   },
   {
    "text": "谁也不服谁，那就各管各的",
    "effects": [
     "flag compact_none",
     "rep companies +1"
    ],
    "result": "各团当天就拔了营。往后城里的事，谁占着哪座城门，那一片就归谁管。门板桌留在空地上，没人来收。",
    "goto": "a1_17"
   }
  ]
 },
 "a1_16b": {
  "id": "a1_16b",
  "title": "凑份子的城",
  "text": [
   "城约一共抄了五份，一家拿一份。",
   "地精坊划在下城的银瀑底下，是全城最臭的几条街。有个地精老太太过来看了一眼，说臭不要紧，把门把手装低一点就行。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "就三行字。不过规矩第一百条说了，写下来的才算数。我先收着，往后谁不认，我就拿着这个找他去！"
   },
   {
    "if": "origin == 'wex'",
    "text": "卡莱昂问了一句，帝国认不认这纸城约。桌边的人都朝你看过来。"
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
    "result": "你写了封信过去，二十天以后回信到了。城约的抄本上盖着巴兹伍德先生的印，旁边还有一行小字，只写了“暂且”两个字。",
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
     "text": "巴兹伍德先生的回信很短，印还是给盖了，旁边添了一行小字，问你这回写的是不是真的。",
     "effects": [
      "flag compact_sealed",
      "world peace +1",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "a1_17"
    },
    "fail": {
     "text": "回信上只有一句话，说你上回写的信他还没核完。印没有盖。",
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
    "result": "你把抄本卷起来，塞进了车板底下。那个地精老太太在车边站了一会儿，往车上放了一小坛腌菜。",
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
   "车空了，人也少了。{?origin != 'wex':奥托格接到调令，回西边去了。|}{?origin != 'grudge':布罗克签完了字，扛着他的铲子回红宝石领交差去了。|}剩下的人跟着车往北走，去长者郡，杜坎森的儿子古尔赞在那边聚集氏族。没有谁请你们去，只是那道收尸的军令一直没人来撤。",
   {
    "if": "flag.a1_ottog_owes && origin != 'wex'",
    "text": "奥托格临走前把他那瓶药水塞给了你，说你替他守夜的那一班他记着。"
   },
   "河滩上躺着一头大得出奇的死熊，站起来怕有两个人高。它的胸口叫人掏开了，心没了，旁边的泥里还插着半条兽人的小臂，手里死死攥着斧柄。",
   {
    "if": "origin != 'tide'",
    "speaker": "马布格",
    "text": "这熊叫灰吻。嗜血者氏族的规矩，要当头领的人得独自带一把斧子来杀它，杀完喝它的血。前头有他们的哨，不要紧，他们认得我这颗断牙。"
   },
   {
    "if": "origin == 'tide'",
    "text": "这头熊你早就听说过，它叫灰吻，长者郡的人拿它吓唬小孩吓了几十年。嗜血者氏族的规矩你也知道，要当头领的人得独自拿一把双手斧杀了它，再当着萨满的面喝它的血。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "一个人，一把双手斧。杀熊的那个人丢了一条胳膊，可他办到了。"
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
     "text": "你找到了一道碎石埂，车轮压着石头过去，水才没过脚背。",
     "effects": [
      "xp 50"
     ]
    },
    "fail": {
     "text": "车轮陷进了沙窝里，你们泡在冰水里推了半个时辰才推出来，还叫水冲走了一包干粮。",
     "effects": [
      "damage 1d6",
      "gold -10"
     ]
    }
   },
   {
    "text": "查看这头熊是怎么死的",
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
     "text": "熊身上的伤口全是同一把双手斧砍出来的，是一个人干的。那个人丢了一只眼睛，后来又丢了半条胳膊。他只掏走了熊心，皮没有割。这个人，多半就是你们要去见的古尔赞。",
     "effects": [
      "codex gurzan",
      "flag a1_bear_read"
     ]
    },
    "fail": {
     "text": "你凑得太近了，沾了一身熊毛里的虱子，挠了一下午。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "告诉他们：古尔赞欠着你们送还尸首的情",
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
    "result": "哨上的人看了看你手背上那块绿，问你杜坎森死的那天你在哪条街上。你照实说了，他让开了路。",
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
     "text": "马布格去了老半天，回来说可以过去了，只是叫你们别去看哨上那几个人的眼睛。",
     "goto": "a1_18"
    },
    "fail": {
     "text": "马布格的话才说到一半，哨上的人就把斧子举了起来。他退了回来，说他们已经不认他这颗牙了。",
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
         "text": "熊太沉了，你只推动了它一条腿。",
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
        "text": "熊太沉了，你只推动了它一条腿。",
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
   "长者郡的废墟里生着一堆大火，火边围坐着三个氏族的酋长，分别来自碎剑者、毒牙和雕骨者氏族。雕骨者那边来的是酋长阿祖科尔本人，他一眼就认出了你们的车。",
   "古尔赞坐在火堆的上风口。他左眼上缠着布，右边的袖管从胳膊肘往下是空的，那头熊就是他杀的。他比你想的年轻，才二十出头。",
   "这个日子是他自己挑的。二十一年前的银现月四日，杜坎森头一回带着兽人从山里杀出来。火边的酋长们个个都记得这个日子。",
   {
    "if": "flag.gurzan_owes",
    "text": "你们把他父亲的尸首送了回来，在这儿算是客人。他叫人给你们端来了碗，碗里盛的是熊肉。"
   },
   {
    "if": "flag.gurzan_grudge",
    "text": "你们是给叫来对质的。他让你们站着，头一句问的就是，我父亲的尸首在哪儿？"
   },
   {
    "if": "!flag.gurzan_owes && !flag.gurzan_grudge",
    "text": "在他眼里，你们不过是路过的收尸人。他既没叫你们坐，也没叫你们走。"
   },
   {
    "if": "flag.a1_dragged",
    "text": "你们是叫人绑着拖进火圈的，绳子到了火边才给割开。"
   },
   {
    "if": "flag.a1_kin",
    "text": "湖边那个缠白布的使者就站在古尔赞身后。他用兽人话说了一句什么，古尔赞便往旁边挪了挪，给你让出半块石头坐。"
   },
   {
    "if": "flag.p_surrendered",
    "speaker": "古尔赞",
    "text": "你就是城里那个扔了刀的吧，我听说过你。扔刀不丢人。扔完了还不跑，那才丢人。"
   },
   {
    "speaker": "古尔赞",
    "text": "我父亲到底是不是杜坎神的儿子，我不知道。我只知道他活着的时候，没人敢拿链子拴兽人。"
   },
   {
    "if": "flag.god_named_korgus",
    "speaker": "古尔赞",
    "text": "你在湖边当众说过，他是杜坎的儿子。这句话比你们早到了半个月。我是该谢你，还是该问问你凭什么这么说？"
   },
   {
    "if": "flag.god_denied_korgus",
    "speaker": "古尔赞",
    "text": "在湖边说他不是杜坎儿子的那个，就是你吧。坐到那儿去，我想看看神会不会流血。"
   },
   {
    "if": "is.god",
    "speaker": "古尔赞",
    "text": "我父亲也是刀枪不入的，一直到他死的那一天。"
   },
   {
    "if": "origin != 'tide'",
    "text": "马布格进了火圈就没再出来。古尔赞叫人给他拿了一把新斧子，问他愿不愿意留下。"
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
    "text": "听古尔赞说话，看他自己信不信父亲是神的儿子",
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
     "text": "他说起父亲来，讲的全是自己亲眼见过的事，哪一天打的哪座城，吃的什么，骂过谁，可一句也没提杜坎神。看来他自己并不信父亲是神的儿子，只是他认定氏族需要这么信。",
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
    "text": "照兽人夺斗的规矩，向他的头号狂战士下战书",
    "combat": {
     "title": "夺斗",
     "intro": "他的头号狂战士脱了上衣，往胸口抹了一把熊血，朝你们走了过来。酋长们等着看谁先倒下。",
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
        "text": "你退了三步，他追了三步，一股浓烟正好糊在他脸上。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "风向变了，烟全糊在了你自己脸上。",
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
    "text": "劝酋长们各回各的地盘：他们要的不过是一张盖了印、算数的地契",
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
     "text": "你把城约和地契的事跟他们说了一遍。碎剑者的酋长问能不能也给他一张。毒牙的酋长一句话没说，可第二天头一个拔营走的就是她。这场聚会没能聚成一支大军。",
     "effects": [
      "flag moot_defused",
      "world embers -1"
     ],
     "goto": "a1_18b"
    },
    "fail": {
     "text": "酋长们听完了，接着喝他们的酒，没有一个人理你。古尔赞叫人往火里又添了一抱柴。",
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
    "result": "你在火边一直坐到天亮，一句话也没说。到了后半夜，古尔赞叫人给你也端来了一碗熊肉汤。",
    "goto": "a1_18b"
   },
   {
    "text": "让乌什卡说出烂刀氏族想说的那句话",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "approval ushka +1",
     "rep clans -1",
     "flag a1_ushka_said"
    ],
    "result": "乌什卡站了起来，说杜坎森是神的儿子这件事是假的，这场仗是建在谎话上的。火边一下子没了声音。古尔赞盯着她看了很久，把她的脸记住了。"
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
    "result": "古尔赞站起身，把火边的位子让给了你，自己坐到了下手。三个酋长一个接一个地跪了下去。只有乌什卡没跪，她把腰后的锤子拿到了手里。",
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
    "text": "你是叫两个人架着扔出火圈的，脸先着的地。那个狂战士回到了火边，酋长们忙着给他倒酒，再没人朝你们这边看一眼。{?party.ushka:乌什卡蹲下来，帮你把嘴里的灰清干净。|}"
   },
   "天快亮了，火堆只剩下一摊红炭，酋长们各自找自己的马去了。古尔赞站在炭堆边上，用剩下的那只手掂着两样东西，一截断链和几朵干蘑菇。",
   {
    "speaker": "古尔赞",
    "text": "往后每年的奈拉月十一，都要把这两样东西扔进河里。我父亲是那天死的，奴工的链子也是那天断的，这两件事哪一件都不能忘。"
   },
   {
    "if": "is.god && !flag.god_of_the_tide",
    "speaker": "古尔赞",
    "text": "那个位子你不肯接，也好。不过这么一来，你迟早要站到我的对面去。"
   },
   {
    "if": "flag.a1_ushka_said && party.ushka",
    "text": "他从乌什卡身边走过的时候停了一下，什么也没说。"
   },
   {
    "if": "origin == 'tide'",
    "text": "你是以亲族的身份来的，所以火灭以前，你得说清楚自己往后跟谁走。跟古拉德走，是去种地。跟阿罗莎走，是去投科琳的人。留在古尔赞这边，就是准备再打一回。火边的人都在看着你。"
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
    "result": "你报了古拉德的名字。古尔赞点点头，说种地也算一条路，就是慢了点。",
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
    "result": "古尔赞把“伐橡者”这个名字慢慢念了一遍。碎剑者的酋长朝炭堆里啐了一口。",
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
    "result": "古尔赞把一截断链放在你手里，说到了奈拉月十一，把它扔进河里，别忘了。",
    "goto": "a1_19"
   },
   {
    "text": "天亮前离开火圈",
    "if": "origin != 'tide'",
    "effects": [
     "rep clans +1"
    ],
    "result": "你们走的时候没有人拦。阿祖科尔追了上来，往车上扔了一小袋盐，说是给你们路上用的。",
    "goto": "a1_19"
   }
  ]
 },
 "a1_19": {
  "id": "a1_19",
  "title": "车空了",
  "loc": "长者郡外的营火 · 当夜",
  "text": [
   "车上什么都没有了，这还是头一回。你们在长者郡外头生了一堆火，围着火坐下来一数，比出城那天晚上少了好几个人。",
   "那道收尸的军令始终没人来撤。当初签字的几个队长都忙着占地盘去了，没有一个回来说一声差事办完了。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我数过了。这一趟收了一具尸首，定了一个去向，还有一个问题没问出来。"
   },
   {
    "if": "party.tan",
    "text": "阿坦拿树枝拨了拨火，过了一阵才又开口。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "卷子上说，王是在生卡斯塔诺的气，所以不理我们。那我就先当它是这样吧。"
   },
   {
    "if": "party.tan && flag.a1_she_watches",
    "speaker": "阿坦",
    "text": "蓝宝石望的那位老太太，这会儿大概还在看天。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "车上其实还有一位神。我没有算进去，因为你不算一具尸首。"
   },
   "加莱尔走了，只留下一张条子压在车辕底下。条子上说她要回安本科斯特交稿，下回见面“不会太久”。背面还有一张速写，画的是你们几个围着火坐着的样子。",
   {
    "if": "is.immortal",
    "text": "加莱尔留下的那张速写上，你画得最细，旁边还有一行小字，说过几年再画一张，对一对。"
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
    "result": "你写了三页，尸首的去向、城约、古尔赞聚集氏族的事，一样也没漏。天一亮，信鸽就放出去了。",
    "goto": "a2_01"
   },
   {
    "text": "给巴兹伍德先生写报告，写点他爱看的",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var false_reports +1"
    ],
    "result": "你写的是东坎诺已经太平了，氏族都散了，各团也都听帝国的。天一亮，信鸽就放出去了。",
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
    "result": "{?origin == 'wex':这一回你没有写信，信鸽在笼子里叫了一夜。|前半夜是乌什卡守的。}",
    "goto": "a2_01"
   }
  ]
 }
};
