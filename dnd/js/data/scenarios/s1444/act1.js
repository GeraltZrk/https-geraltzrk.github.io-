// s1444 / act1.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "a1_01": {
  "id": "a1_01",
  "title": "第一夜的门板桌",
  "chapter": "第一幕 · 没人肯埋的兽人",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月12日夜",
  "text": [
   "下卡斯托纳斯入夜了，旧集市边的空地上，守夜的火还亮着。两只酒桶撑着一张门板桌，板车里躺着兽人大酋长杜坎森的尸首，身上盖着另一块门板，只露出一双脚。",
   "这一夜，来要这具尸首的一共有四拨人。第一拨是铁杖骑士团的死灵法师瓦丽娜·埃斯瑟，她带着两个学徒抬来了一箱金冠。第二拨是三个边区兵，拎着一把剁肉刀，要砍下他的头。第三拨是个缠着白布的老兽人，蹲在车轮旁边，说是替杜坎森的小儿子来领尸首。第四拨是雕骨者氏族的三个兽人，没带兵器，只扛来了一袋盐。管着这座城的伯爵联盟首领卡莱昂·黑塔也在场，但他不出价。",
   {
    "speaker": "瓦丽娜",
    "text": "一箱金冠，现在就付。让他烂在土里太可惜了。只要一道死灵术，这副身躯还能替东坎诺修三十年城墙。控制得当的话，他不会咬人。"
   },
   {
    "speaker": "卡莱昂",
    "text": "我只说一件事：天亮之前，这具尸体必须离开我的城。谁来运、运到哪里，我不过问。"
   },
   {
    "speaker": "冈瑟",
    "text": "运到哪里都行。不过下城的关卡归我钴蓝兵团管，过路钱照收，利息另算。"
   },
   "板车边还有几个人，是各营派来收尸的，手上各忙各的。{?origin != 'corintar':老布兰多克在擦一副护肩。|}{?origin != 'sons':达拉斯坐在车辕上低头缝着东西。|}{?origin != 'wex':奥托格抱着他那把大剑，手一直在抖。|}{?origin != 'grudge':布罗克扛着他自己带来的铲子。|}{?origin != 'tide':马布格靠在车帮上，他是个断了一根獠牙的兽人老兵。|}",
   "这时万神道那边过来了一盏灯。提灯的是小祭司阿坦，他守着诸神之王卡斯特洛斯的破庙，刚把庙门锁上，钥匙用麻绳拴着挂在脖子上。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "军令已经钉在门上了。我在不在庙里都一样。你们要出城，我跟你们一起走，正好打听银龙的事。"
   },
   {
    "if": "flag.god_revealed",
    "text": "你是神这件事，桌边的人都已经听说了，所以出价的人说话时不看尸首，都看着你。"
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
    "text": "乌什卡蹲在车尾量杜坎森的腕骨，一只手始终没离开腰后的锤子。她背对着尸首，脸一直朝你，她在防着你。"
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
     "log 乌什卡走了。她说再跟着你，迟早要替你行一次归尘礼。"
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
    "text": "听瓦丽娜报价，弄清她买遗体的用意",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "她说到“站起来”三个字时，两个学徒不约而同地看了一眼箱子下面画好的粉笔法阵。她买这具尸首，是要把杜坎森拉起来，当不死的苦力使唤。",
     "effects": [
      "flag a1_varina_read"
     ]
    },
    "fail": {
     "text": "你盯着那箱金冠多看了两眼，偏偏被乌什卡看见了。",
     "effects": [
      "approval ushka -1"
     ]
    }
   },
   {
    "text": "听边区兵开出的条件",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "领头的说要把头砍下来挂在北城门上，挂满一个月，让城外那些兽人天天看着。你听他说完，他就当你是自己人了。"
   },
   {
    "text": "听缠白布的老兽人说明来意",
    "once": true,
    "effects": [
     "rep clans +1"
    ],
    "result": "他说杜坎森的小儿子叫古尔赞，已经带着嗜血者氏族退到了长者郡，正在那边等着父亲的尸首回去。"
   },
   {
    "text": "询问雕骨者：带一袋盐来做什么",
    "once": true,
    "effects": [
     "flag a1_salt_known"
    ],
    "result": "他们说要把杜坎森的骨头拿回去刻上花纹，等刻满了，他就能转世再生。那袋盐是他们出的价钱，一袋够腌一冬的鱼。"
   },
   {
    "text": "询问乌什卡：兽人怎样安葬死者",
    "once": true,
    "if": "party.ushka",
    "effects": [
     "codex khak_bazi",
     "approval ushka +1"
    ],
    "result": "乌什卡竖起两根手指：要两天。先拆骨，再焚烧，最后把骨头磨成粉，这是兽人的归尘礼。城里找不到能生大火的空地，得出城去办。她说，等骨头磨成了粉，哪个死灵法师也别想再把他唤起来使唤。"
   },
   {
    "text": "找卡莱昂借一头骡子拉车",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "rep.league >= 2",
       "n": 2,
       "why": "东坎诺旧贵族认得你"
      }
     ]
    },
    "ok": {
     "text": "卡莱昂说那头骡子是他女儿的，让你们别把它累死了。过了片刻，家丁牵来了一头灰骡。",
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
    "text": "主张让杜坎森的儿子来收殓父亲",
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
    "text": "在出城单据上签字，担保遗体完整",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge'",
    "once": true,
    "effects": [
     "flag a1_signed_whole",
     "rep companies +1"
    ],
    "result": "书记把单子推过来，上面写着“尸首一具，完整”。你签了字，往后这具尸首哪怕少一根指头，都得算在你头上。"
   },
   {
    "text": "按住门板，禁止今晚再出价",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag a1_table_pressed",
     "rep league -1",
     "rep companies -1"
    ],
    "result": "门板往下沉了一指，下面的酒桶吱地响了一声。瓦丽娜合上了箱盖，边区兵把刀收了起来。只有冈瑟咂了咂嘴，看你的眼神像在重新估价。",
    "goto": "a1_02"
   },
   {
    "text": "先运遗体出城，路上再决定",
    "goto": "a1_02"
   }
  ]
 },
 "a1_02": {
  "id": "a1_02",
  "title": "这马生前穿靴子？",
  "loc": "下城 · 钴蓝兵团的哨卡 · 深夜",
  "text": [
   "要出城，得从银瀑下面的入口进地下通道，下城人管那里叫“粪瀑”。半路上，钴蓝兵团拿三道拒马设了一处哨卡，四个胳膊上扎蓝布条的守兵正围着一口锅煮豆子。",
   "尸首上盖了张草席，可草席短了一截，两只靴子还是露在外面。{?flag.a1_mule:灰骡子嫌车沉，走两步就要停一步。|骡子没借着，车只能你们自己拉。}",
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
    "text": "谎称车上是要运出城烧掉的病马肉",
    "check": {
     "skill": "deception",
     "dc": 13,
     "party": true,
     "adv": "flag.a1_table_pressed"
    },
    "ok": {
     "text": "他捂着鼻子退开两步，连连挥手让你们快走。",
     "goto": "a1_03"
    },
    "fail": {
     "text": "哨兵拿矛杆挑起草席一角，看见了那双靴子。“这马生前还穿靴子？”他把哨子塞进了嘴里。",
     "goto": "a1_02b"
    }
   },
   {
    "text": "绕后巷避开哨卡，从晾衣绳下穿过",
    "check": {
     "skill": "stealth",
     "dc": 12,
     "party": true,
     "dis": "flag.a1_pull"
    },
    "ok": {
     "text": "后巷窄得刚好够过一辆车。楼上有人往下倒了一盆水，没浇到你们。等你们出了巷口，哨卡已经落在身后。",
     "goto": "a1_03"
    },
    "fail": {
     "text": "车轮压翻了一只夜壶，整条巷子的狗都叫了起来，哨子也跟着响了。",
     "goto": "a1_02b"
    }
   },
   {
    "text": "付哨兵二十金冠买路",
    "req": "gold >= 20",
    "reqText": "需要 20 金冠",
    "cost": {
     "gold": 20
    },
    "result": "哨兵数了数钱，把拒马挪开了。",
    "goto": "a1_03"
   },
   {
    "text": "向哨兵出示巴兹伍德的火漆密信",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && item.bardswood_letter",
    "effects": [
     "flag letter_shown",
     "rep companies -1"
    ],
    "result": "哨兵不识字，可火漆上的纹样他认得。他叫来的伍长认得的更多，脸都吓白了，赶紧挥手放行。不等天亮，这件事就会传到钴蓝兵团的队长冈瑟耳朵里。",
    "goto": "a1_03"
   }
  ]
 },
 "a1_02b": {
  "id": "a1_02b",
  "title": "几分利",
  "text": [
   "一声哨响，半条街都推开了窗。有人喊了一句“杜坎森出城了”，喊完立刻缩了回去。不等天亮，半个下城都会知道你们车上载着谁、往哪里去。",
   "钴蓝兵团的队长冈瑟披着毯子跑来了，脚上只穿了一只靴子。他是苔藓滩来的老佣兵，加韦德王室赖过他一年的饷，此后他见了谁都先算利钱。",
   {
    "speaker": "冈瑟",
    "text": "杜坎森？拉出去好，省得放在城里招苍蝇。不过要过我的卡子，得交三十金冠。没有？没有就记账，一分五的利，我记性好得很。"
   },
   {
    "if": "flag.letter_shown",
    "speaker": "冈瑟",
    "text": "还有，替皇帝的密探头子巴兹伍德先生跑腿的那位，下次别把火漆往当兵的眼前亮。他们害怕。"
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
    "text": "付三十金冠过路钱",
    "req": "gold >= 30",
    "reqText": "需要 30 金冠",
    "cost": {
     "gold": 30
    },
    "result": "冈瑟把金冠一枚一枚咬过，才收了起来，说这年头不赊账的人可不多。",
    "goto": "a1_03"
   },
   {
    "text": "请冈瑟先记账，按一分五的利欠着",
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
   "巴尔加尔建城时挖了这条地下通道，从来没有人画出全图。你迈下去，积水刚好淹过脚踝。",
   "前面传来铁链的响声。四十来个洞穴地精被拴在一根长链子上，蹲在一处干台子上。他们是兽人大军绿潮留下的奴工。管着这串地精的是个嗜血者氏族的老兵，他把主链缠在腰上，手里提着一把斧子。撤退的喊声他听见了，可他舍不得这串苦力，想拉着他们一起往山里逃。",
   "这时，排水沟的铁栅后面冒出来一对黄眼睛。那是个森林地精，帽子上插着一根绿羽毛，两只手扒着栅栏。",
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
    "text": "水闸在哪里你记得，就在左手第三根柱子后面，只是闸轮锈死了一半。"
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
    "text": "抢先动手，打倒牵着链子的兽人老兵",
    "combat": {
     "title": "地下通道",
     "intro": "老兵把主链绕在臂上，用力一拽。拴在链上的地精接连跌进水里。",
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
       "desc": "上游一放水，站在低处的人便难以立足。成功时，所有敌人受到 3d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 12,
        "adv": "flag.knows_underpass"
       },
       "success": {
        "text": "闸门一抬，黑水卷着烂木头冲了下来。那个老兵和他的手下都站不住脚了。",
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
       "desc": "斩断铁链，地精就能逃走，对方也会失去人盾。成功时，所有敌人陷入「破绽」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
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
    "text": "扳住闸轮蓄水，放闸冲垮老兵一伙",
    "tag": "战士系",
    "if": "is.martial",
    "combat": {
     "title": "地下通道",
     "intro": "闸轮转了半圈就卡死了，你硬是又掰动半圈。水还没到，水声已经先到了。",
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
       "desc": "你正握着闸轮，只要松手便会放水。成功时，所有敌人受到 3d6 点钝击伤害。",
       "success": {
        "text": "你一松手，闸门被冲开，黑水把那一伙人冲出去三步远。",
        "dmgAll": "3d6",
        "type": "bludgeoning"
       }
      },
      {
       "id": "chain",
       "name": "砸开主链",
       "desc": "斩断铁链，地精就能逃走，对方也会失去人盾。成功时，所有敌人陷入「破绽」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
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
    "text": "钻排水沟，绕到兽人老兵身后偷袭",
    "tag": "矮个子",
    "if": "is.small",
    "check": {
     "skill": "stealth",
     "dc": 12,
     "adv": "party.nixee"
    },
    "ok": {
     "text": "沟里全是淤泥，宽窄正好够你钻过去。等你从他脚边冒出来时，他还在朝前面吼。",
     "combat": {
      "title": "地下通道",
      "intro": "你的刀已经到了，他还没来得及回头。",
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
        "desc": "他还背对着你。成功时，所有敌人受到 2d6 点穿刺伤害。",
        "success": {
         "text": "你一刀扎进他的膝弯，他跪进了水里，手里的链子也松了。",
         "dmgAll": "2d6",
         "type": "piercing"
        }
       },
       {
        "id": "chain",
        "name": "砸开主链",
        "desc": "斩断铁链，地精就能逃走，对方也会失去人盾。成功时，所有敌人陷入「破绽」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
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
     "text": "沟里卡着半截门栓，等你好不容易钻出来，浑身是泥。那个老兵正在外面等着你。",
     "combat": {
      "title": "地下通道",
      "intro": "老兵揪住你的衣领，把你从沟里提了出来。",
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
        "desc": "上游闸门还能放水。成功时，所有敌人受到 3d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
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
   "{?flag.a1_half_fled:你们是被地精从水里拖上岸的。那个老兵带着半串地精往深处逃了，剩下的只有二十来个。|那个老兵倒在水里，主链断成了三截。}得救的地精坐在出口的台阶上发愣，不知道该往哪里去。",
   "走出地道是一片烂菜地，再远些，边区兵的巡逻火把连成一线。天快亮了，不能让巡逻队看见这些地精。",
   "有个地精老太太会说通用语，她把断链子团成一团抱在怀里。",
   {
    "speaker": "地精老太太",
    "text": "这链子我留着，回头压腌菜坛子。人往哪里去，你们说吧。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "第一，活着。第二，别信长得高的。你们也算长得高的，这话我先说清楚。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我的庙里有个地窖，原先是存灯油的，能蹲下三十个人，挤一挤四十个也行。钥匙在我这里。"
   },
   {
    "if": "is.goblin",
    "text": "老太太看了你一眼，换成地精话又问了一遍。这次她问的是，你到底跟他们是一伙的，还是跟我们是一伙的。"
   }
  ],
  "choices": [
   {
    "text": "把地精藏进阿坦神庙的地窖",
    "effects": [
     "flag goblins_hidden",
     "world room +1",
     "gold -30",
     "approval tan +1",
     "approval nixee +1"
    ],
    "result": "阿坦打开地窖，把里面的半桶灯油搬走了。口粮是你们掏的钱，花了三十金冠买豆子和咸鱼。老太太第一个下去，把链子留在了台阶上。",
    "goto": "a1_05"
   },
   {
    "text": "分发监工的武器，让地精自守通道",
    "effects": [
     "flag goblins_armed",
     "world room +1",
     "rep league -1",
     "rep clans +1"
    ],
    "result": "分下去的是两把斧子、一捆矛和一面盾。个头最大的那个地精扛起了斧子，斧柄比他人还长。巡逻线那边有人看见了，边区兵不会忘了这件事。",
    "goto": "a1_05"
   },
   {
    "text": "藏进地窖，让地精推选自己的发言人",
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
    "result": "他们吵了一盏茶的时间，最后推了老太太。她把链子往你手里一塞，说下次有话要说，找她。",
    "goto": "a1_05"
   },
   {
    "text": "给地精武器守通道，由他们推选发言人",
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
    "text": "把地精交给边区兵换通行证",
    "effects": [
     "flag goblins_handed",
     "world room -1",
     "rep companies +1",
     "gold +40",
     "approval nixee -3",
     "approval tan -1"
    ],
    "result": "边区兵的伍长数过人头，给了你一张出城的路条，外加四十金冠。老太太被人推上大车时，连头也没回。",
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
   "blurb": "那个推货担的半身人追了你们一整天。等他赶上，饼还是热的，就是卖得贵。",
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
   "你们把车停在银池湖路边的一座空谷仓外。谷仓的木门早被人拆去当了柴，里面只剩几条破粮袋。入夜以后，堆粮袋的角落里一直有东西在啃咬。",
   "{?origin != 'grudge':火是布罗克生的，他嫌人类劈的柴太细。|火是乌什卡生的。}守着神王破庙的小祭司阿坦把灯挂在了车辕上。杜坎森的脚还露在草席外面，不知是谁往上面盖了件斗篷。",
   "天黑透以后，路上推过来一副货担。来的是半身人温斯顿·愚足，科琳的老伙伴。他追了你们一整天，说自己在城里待不住，手上闲得慌。",
   {
    "speaker": "愚足",
    "text": "先吃，先吃！肉饼、咸鱼、豆子，要哪样都有。车上那位不着急，饼凉了才叫人着急。"
   },
   {
    "if": "flag.p_lied && party.tan",
    "text": "阿坦往火里添了根柴，问起你在城里对那个快死的人说的话。他知道你哄了那个人，问得很平静，眼睛一直看着火。"
   },
   {
    "if": "flag.p_truth && party.ushka",
    "speaker": "乌什卡",
    "text": "城里那个快死的人，你没骗他。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "我再问一句，神王在哪里？……原来你也不知道。那我还是接着问他自己吧。"
   },
   {
    "if": "is.god && party.nixee",
    "speaker": "妮克西",
    "text": "神迹得按件算钱，不赊账。我先把行情告诉你，省得你被别人坑了。"
   },
   {
    "if": "is.god && origin != 'sons'",
    "text": "达拉斯拿了根线，从你的肩膀一直量到脚后跟。他说自己给死人做寿衣做惯了，神虽然死不了，先量一量，以防万一。"
   },
   {
    "if": "var.lies >= 3 && party.tan",
    "text": "你说过的那些哄人的话，阿坦都记在心里。数到第三句，他抬起头看了你一眼。"
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
    "text": "问乌什卡在木签上刻什么",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "quest q_ushka start",
     "approval ushka +1"
    ],
    "result": "木签上已经刻了十一道。她说这是骑士的规矩，是她跟着冒险团一条一条学来的，第一条是不杀投降的，第六条是吃饭先让伤员。第十二条她还没学到。"
   },
   {
    "text": "黎明时听阿坦念晨祷",
    "if": "party.tan",
    "once": true,
    "effects": [
     "codex dawn_office",
     "codex castellos",
     "codex regent_court",
     "item +petition_book"
    ],
    "result": "他朝东站着念晨祷。祷文本来有四十一句，他只念了四十句就停了，最后一句“愿银龙再临”他没有念。然后他把庙里那本祈愿簿给你看，上面记了二十年的祷告，神有没有回应的那一栏一直空着。"
   },
   {
    "text": "听妮克西讲她的规矩",
    "if": "party.nixee",
    "once": true,
    "effects": [
     "codex goblin_rules",
     "approval nixee +1"
    ],
    "result": "她的规矩条条都有编号，只是从来没写下来。背到第四十条她就打住了，说后面的得收钱。"
   },
   {
    "text": "问愚足科琳这次还能不能醒来",
    "once": true,
    "effects": [
     "rep corintar +1",
     "item +halfling_pie"
    ],
    "result": "愚足把饼掰成两半，分了一半给你。他说上次她死时，他脑子里一直有个声音说她没走，可这次他在她旁边坐了整整一夜，什么也没听见。说完他把另一半饼也塞给你，说自己不饿。"
   },
   {
    "text": "找老布兰多克聊聊",
    "if": "origin != 'corintar'",
    "once": true,
    "effects": [
     "rep corintar +1"
    ],
    "result": "他五十岁了，给人擦了半辈子的甲。他说科琳的甲就是他擦的，护肩上那道缝也是他去年补的，补得不好。说完他又擦了一遍。"
   },
   {
    "text": "看看达拉斯在缝什么",
    "if": "origin != 'sons'",
    "once": true,
    "effects": [
     "item +bandage 2"
    ],
    "result": "他缝的是一件寿衣，针脚又密又匀。你问他是给谁缝的，他朝车那边抬抬下巴。你要走时，他塞给你两卷包扎用的布条。"
   },
   {
    "text": "接替奥托格守前半夜",
    "if": "origin != 'wex'",
    "once": true,
    "effects": [
     "flag a1_ottog_owes"
    ],
    "result": "他的手抖得连杯子都握不住，你就替他守了前半夜。他没道谢，把大剑往膝盖上一横就睡着了。"
   },
   {
    "text": "问布罗克铲子的来历",
    "if": "origin != 'grudge'",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "那是红宝石领的铲子，七斤多重。他说人类的铲子是挖菜地用的，挖坟就得用这个。"
   },
   {
    "text": "问马布格抬过多少具遗体",
    "if": "origin != 'tide'",
    "once": true,
    "effects": [
     "rep clans +1"
    ],
    "result": "他想了想才说没数过。哪一边的他都抬，抬到地方放下就走。他说人死了都是一样沉。"
   },
   {
    "text": "给遗体抹盐防腐，换草席裹好",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 11,
     "party": true
    },
    "ok": {
     "text": "你们把愚足那半袋粗盐全用上了，席子外面又扎了三道绳，味道总算压下去不少。",
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
    "text": "安排今晚的哨位，防着啃粮袋的东西",
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
      "intro": "食尸鬼攀上车帮，伸手抓向草席裹的遗体。",
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
        "desc": "食尸鬼怕火。成功时，所有敌人受到 2d4 点火焰伤害。失败时，行动者受到 1d4 点钝击伤害。",
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
    "text": "守到天亮，迎上那个骑骡子的来客",
    "goto": "a1_05b"
   }
  ]
 },
 "a1_05b": {
  "id": "a1_05b",
  "title": "骑骡子的精灵",
  "loc": "银池湖路 · 次日清晨",
  "text": [
   "天亮时湖面起了雾。一个精灵女人骑着花骡子从路上过来，膝上摊着一个本子。她在车前勒住骡子，先看了看杜坎森露在草席外面的脚，才抬头看你们。",
   {
    "speaker": "加莱尔",
    "text": "我是加莱尔·守昔者，编年史家会的史官。你们抬稳一点。我多问一句，他倒下去的时候，脸是朝着哪一边的？"
   },
   "你们怎么答，她就怎么记，一个字都不改。记完，她从本子里抽出一张纸，上面列着三条线索：渔村的龙皮，蓝宝石望的老太太，焦塔顶上的银光。",
   {
    "speaker": "加莱尔",
    "text": "今年有三起传闻，说有人见着了银龙。这种事编年史家会按件付钱，只要亲眼查证的第一手消息。你们这辆车哪里都能去，路上也没人盘问，正合适。"
   },
   "她又想起一件事来。",
   {
    "speaker": "加莱尔",
    "text": "上次会里雇人查这种事，还是八十年前，是我祖母经手的。她说雇来的那几位都很守时。"
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
    "text": "接下调查银龙传闻的委托",
    "effects": [
     "quest q_sightings start",
     "rest long"
    ],
    "result": "她付了定钱，说剩下的按件结。你们在谷仓旁边睡了个整觉，出城后这还是第一次。",
    "goto": "a1_06"
   },
   {
    "text": "跟加莱尔讲价，多要些定钱",
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
     "text": "她又数出三十金冠加在定钱上，说这次算是雇主吃了亏。",
     "effects": [
      "quest q_sightings start",
      "gold +30",
      "rest long"
     ],
     "goto": "a1_06"
    },
    "fail": {
     "text": "她既不着急也不恼，只说了句“爱讲价”，照原价付了定钱。",
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
   "银池湖路上挤满了返乡的人，推车、背锅、牵羊的都有。有一家人找不到自家的田界，地界石早被兽人搬走了。村口倒是贴出了三张招募冒险者的告示。",
   "前面过来一队骑士，披风上都绣着灰玫瑰。马后面拴着一串兽人俘虏，一共十一个，脖子上都套着绳。领头的是个三十多岁的女人，说话是洛伦特口音。",
   {
    "speaker": "莫古妮娅",
    "text": "我是奥尔丁的莫古妮娅，灰烬玫瑰骑士团的团长。这几位是我的仆役，替我修路的。路修好了，诸位走起来也舒服些，不是吗？倒是诸位这车上盖得这么严实，拉的是什么好东西？"
   },
   "她朝草席下面露出来的靴子看了一眼，又去看乌什卡，看了很久。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "仆役。这个词从她嘴里说出来，跟奴隶是一个意思。"
   },
   {
    "if": "origin == 'tide'",
    "text": "那一串里的第四个你认得，去年冬天他分过你半块饼。他也看见你了，目光却立刻移开。"
   }
  ],
  "choices": [
   {
    "text": "拦住莫古妮娅，要她放了兽人俘虏",
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
     "text": "你先提了蓝牙定下的规矩，不许杀俘，又问她修路的工钱由谁来出。她骂了一句，到底还是把绳子割断了。十一个兽人拔腿就往湖边跑，有一个跑到半道又折回来，朝你点了下头。",
     "effects": [
      "flag rose_chain_freed",
      "world room +1",
      "rep clans +1"
     ],
     "goto": "a1_07"
    },
    "fail": {
     "text": "莫古妮娅很有耐心地听你说完，夸你口才好，说科琳在的时候想必很喜欢你这样的人。可惜科琳已经死了。她身后的骑士把手搭在了剑柄上。",
     "goto": "a1_06b"
    }
   },
   {
    "text": "拔刀动手，硬抢兽人俘虏",
    "combat": {
     "title": "湖路上",
     "intro": "灰玫瑰骑士掉转马头。绳子突然绷紧，把一名兽人拖倒在泥里。",
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
       "desc": "这些马比骑士更容易受惊。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "animal",
        "dc": 12
       },
       "success": {
        "text": "你朝马脸上甩了一把湖泥，领头那匹马人立起来，后面的马也跟着乱了。",
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
    "text": "付六十金冠，赎出两个兽人",
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
    "text": "把车停靠路旁，放她过去",
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
   "难民纷纷闪到路边。刚才还挤满人的湖路，一下子空了出来。",
   "莫古妮娅没有拔剑，她在等你先拔。她身后有四个人，两个披甲的老兵，两个扈兵。那一串兽人都低着头，只有一个抬眼看你。",
   {
    "speaker": "莫古妮娅",
    "text": "诸位是让路，还是拔剑？哪一样我都奉陪。不过我赶时间，诸位车上那位，闻着也不像是等得起的。"
   }
  ],
  "choices": [
   {
    "text": "拔剑迎战灰玫瑰骑士",
    "combat": {
     "title": "湖路上",
     "intro": "她等的正是这一刻。你的剑刚出鞘，她已策马上前。",
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
       "desc": "这些马比骑士更容易受惊。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "animal",
        "dc": 12
       },
       "success": {
        "text": "领头那匹马人立起来，后面的马也跟着乱了。",
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
    "text": "让到路边，放她带着俘虏过去",
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
    "result": "她点点头，好像早料到会这样。十一个人从你们车边走了过去，刚才抬眼看你的那个又把头低下了。",
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
   "渔村不过十几户，村口的棚子前却排起长队，多是刚返乡的人。加莱尔要查的第一起银龙传闻就出在这里：棚内挂着一张门板宽的兽皮，风一吹便闪银光。",
   {
    "speaker": "摊主",
    "text": "银龙蜕下来的皮！一个铜板看一眼，两个铜板摸一下！摸一下治风湿，摸两次管一年！"
   },
   "加莱尔站在队尾，摊开本子，一笔一笔地记排队的人数。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "书上说银龙的鳞是白的，在太阳下面会发蓝。可这一张是灰的，只是上面抹了一层亮粉。"
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
    "text": "付两枚铜板，亲手摸一摸那张龙皮",
    "check": {
     "skill": "investigation",
     "dc": 12,
     "alt": [
      "nature"
     ],
     "party": true
    },
    "ok": {
     "text": "你的指头上沾了一层银粉。再掀起一片鳞来看，鳞根是褐色的。这是一张双足飞龙的皮，上面刷了银粉。",
     "goto": "a1_07b"
    },
    "fail": {
     "text": "你看了半天也没看出名堂。摊主说想细看就得买一角，要十金冠。你买了，拿回去一刮，银粉下面是褐色的，这是一张刷了银粉的双足飞龙皮。",
     "effects": [
      "gold -10"
     ],
     "goto": "a1_07b"
    }
   },
   {
    "text": "靠近闻闻那张皮",
    "tag": "自然系",
    "if": "is.nature",
    "effects": [
     "flag a1_hide_smelled"
    ],
    "result": "银粉下面有一股松脂味，还混着火山灰的味道。这是试炼山那一带的双足飞龙，不是什么银龙。",
    "goto": "a1_07b"
   }
  ]
 },
 "a1_07b": {
  "id": "a1_07b",
  "title": "刷了银粉的皮",
  "text": [
   "摊主见瞒不过你，赶紧把你拉到棚子后面。他压低声音说，他表哥是随军祭司，皮是表哥从山上弄来的，银粉也是表哥给的，大家不过是图个念想。",
   "棚子前面的队还在排着，有个老头背着瘫了半边的老伴，已经排到第三个了。",
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
    "text": "当众刮去皮上的银粉",
    "effects": [
     "rep temples -1",
     "gold +20",
     "approval nixee +1"
    ],
    "result": "你刮了一道，下面的褐鳞露了出来，队伍当场散了一半。只有那个背着老伴的老头没走，又排了一会儿。摊主那个做随军祭司的表哥，把这件事算到了你头上。",
    "goto": "a1_08"
   },
   {
    "text": "私下劝摊主收摊",
    "effects": [
     "gold +20",
     "approval tan +1"
    ],
    "result": "他天黑以前就收了摊，把皮卷起来扛着走了，说要去下一个村子。",
    "goto": "a1_08"
   },
   {
    "text": "让摊主继续做生意",
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
   "蓝宝石之眼的骑士早已离开，蓝宝石望的塔也塌了一半。塔顶上守着一位老太太，裹着三条毯子，身边的炭盆早就冷了。她每天拿炭在墙上划一道，如今炭痕已经铺满了墙。",
   "村里人都说她见过银龙，加莱尔单子上的第二起传闻说的就是她。她自己说没有。二十年了，她每天都上来看天，等银龙来，可一次也没见着。",
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
    "text": "她不再看天了，转过身看着你，看了很久，才问了一句，是你吗？"
   }
  ],
  "first": [
   "quest q_sightings stage 3"
  ],
  "choices": [
   {
    "text": "观察老太太，弄清她想听什么",
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
    "text": "说银龙来过，大概是她错过了",
    "effects": [
     "var lies +1",
     "approval tan -1"
    ],
    "result": "她点点头，把那本记了二十年天象的簿子一页一页撕下来，喂进了炭盆里，说这下暖和了。墙上的那些道道，她没有擦。",
    "goto": "a1_09"
   },
   {
    "text": "告诉她银龙没有来，她没有错过",
    "effects": [
     "item +sky_tally",
     "approval tan +1"
    ],
    "result": "她把那本记了二十年的天象簿交给了阿坦，说你收着吧，你年轻，眼睛好。阿坦把簿子仔细揣进了怀里。",
    "goto": "a1_09"
   },
   {
    "text": "问她一直没见到，为何还守着",
    "effects": [
     "flag a1_she_watches",
     "rep temples +1"
    ],
    "result": "她说总得有人看着。她把毯子又裹紧了些，眼睛回到了天上。下楼时，阿坦在祈愿簿上写下了她的名字。",
    "goto": "a1_09"
   },
   {
    "text": "让她亲眼看见一道银光",
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
   "他们是死齿氏族的人，这个氏族会把死者的魂收进罐子里问话。他们不看车上的尸首，只盯着尸首上方的空处，好像那里还站着什么人。芦苇边另有一个瘦高的兽人，袖着手站在一旁看。",
   {
    "speaker": "死语者",
    "text": "尸首你们留着，我们只要他的魂，要他开口说话。等他说完了，你们照样把他拉走。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡把刀和锤一起抽出来。从城里走到这里，她还是第一次两样一起拿。"
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
    "text": "领头的回头问后面那个瘦高的，神到底有没有魂，罐子装不装得下。那人是缝尸者斯劳，他朝你比了比罐口的大小，摇摇头。"
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
    "text": "守住板车，不让死齿氏族收走亡魂",
    "if": "!flag.cart_known",
    "combat": {
     "title": "芦苇荡",
     "intro": "死语者拍掉罐口的封蜡。整片芦苇荡里的风停了。",
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
       "desc": "死语者要靠这只罐子招魂。成功时，所有敌人陷入「恐慌」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
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
       "desc": "食尸鬼到了岸边就会停住，不愿涉水。成功时，所有敌人陷入「迟缓」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "车轮一下水，食尸鬼就留在了岸上。它沿岸来回走，始终不肯涉水。",
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
    "text": "守住板车，不让死齿氏族收走亡魂",
    "if": "flag.cart_known",
    "combat": {
     "title": "芦苇荡",
     "intro": "死语者拍开封蜡，芦苇荡里的风顿时停歇。两侧都有兽人悄悄靠近板车。",
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
       "desc": "死语者要靠这只罐子招魂。成功时，所有敌人陷入「恐慌」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
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
       "desc": "食尸鬼到了岸边就会停住，不愿涉水。成功时，所有敌人陷入「迟缓」，持续 2 回合。失败时，行动者受到 1d4 点钝击伤害。",
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
   "湖边的碎石地很适合生火。你一停下车，跟了一路的几拨人也各自站定。你要在这里决定，把杜坎森的遗体交给谁。",
   "乌什卡的刀已经磨好了。她要做兽人的归尘礼：拆骨、焚烧，再把骨头磨成粉。古尔赞的使者蹲在车轮旁边，等着替杜坎森这个小儿子把尸首领回去。五个边区兵坐在路边吃干粮，剁肉刀就插在土里。他们要的是头。瓦丽娜的那箱金冠还开着，她自己坐在箱盖上。雕骨者的那袋盐放在车辕上，一直没人动过。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "湖里住着一位水里的神灵，渔民叫她银夫人，常往水里扔鱼头供她。要是给尸首绑上石头沉下去，也算是交给她了。"
   },
   {
    "if": "flag.ghost_taken",
    "text": "自从芦苇荡那一夜以后，尸首变轻了，抬的人个个都这么说。他的魂被死齿氏族装走了。"
   },
   {
    "if": "flag.a1_varina_read",
    "text": "瓦丽娜的学徒已经在湖岸上画好了粉笔法阵，尺寸量了又量。"
   },
   {
    "if": "flag.a1_heir_named",
    "text": "缠白布的使者认出了你，朝你点了下头。门板桌那天晚上是谁说尸首该归儿子，他一直记着。"
   },
   {
    "if": "is.god",
    "text": "使者站起身，当着所有人的面问你，杜坎森到底是不是兽人的神杜坎的儿子。问完他就站在那里等着，连边区兵也停了嘴。"
   }
  ],
  "first": [
   "level 3",
   "codex iron_sceptre"
  ],
  "choices": [
   {
    "text": "当众承认：杜坎森是杜坎的儿子",
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
    "text": "当众否认：杜坎森不是杜坎的儿子",
    "tag": "神",
    "if": "is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown",
    "once": true,
    "effects": [
     "flag god_denied_korgus",
     "world embers -1",
     "rep clans -2"
    ],
    "result": "使者站在原地听完，转身就走，再没有回头。从那以后，兽人氏族里就有人称你为仇神了。"
   },
   {
    "text": "坦言自己不知道他是不是杜坎的儿子",
    "tag": "神",
    "if": "is.god && !flag.god_named_korgus && !flag.god_denied_korgus && !flag.a1_god_unknown",
    "once": true,
    "effects": [
     "flag a1_god_unknown",
     "approval tan +1"
    ],
    "result": "使者看了你很久，才又蹲回车轮旁边。你是他见过的第一个肯说不知道的神。他不知道自己该失望还是该放心。"
   },
   {
    "text": "请乌什卡行归尘礼，将遗骨磨粉",
    "if": "party.ushka",
    "goto": "a1_10a"
   },
   {
    "text": "交给古尔赞的使者，由儿子领回",
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
    "result": "使者把门板连着尸首一起扛上了肩，又招呼了三个人过来帮着抬。{?origin == 'tide':临走他回过头来，称你一声亲族。|临走他回头看了一眼那辆车，说长者郡的兽人会记着这辆车。}乌什卡转过身去，不肯看。",
    "goto": "a1_10z"
   },
   {
    "text": "允许边区兵取头示众",
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
    "result": "剁肉刀一连落了三下。领头的把头提起来看看，拿麻袋装了。剩下的身子他们不要，乌什卡在湖边把它烧了，只是来不及磨。",
    "goto": "a1_10z"
   },
   {
    "text": "把遗体卖给瓦丽娜",
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
    "result": "瓦丽娜数出四百金冠，学徒把尸首抬进了粉笔法阵。当天夜里，乌什卡从尸首上砍下一只手，独自到湖边磨了一整夜，天亮才回来。她把一小包骨粉揣进怀里，只说了一句，再有第二次，她就走。",
    "goto": "a1_10z"
   },
   {
    "text": "给遗体绑上石头，沉进银池湖",
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
    "text": "收下盐，将遗体交给雕骨者",
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
   "乌什卡先动手拆骨，把关节一处一处卸开，卸下的骨头按大小排在席子上。她干活时只开过一次口，让你把火烧旺些。",
   "火得烧上一整夜，烧完的骨头要等它凉透，先拿锤子敲碎，再磨成粉。",
   {
    "speaker": "乌什卡",
    "text": "这副骨头比我说的还要粗。你守着火，我来磨。夜里别睡，火一灭就得从头再来。"
   },
   {
    "if": "flag.ghost_taken",
    "speaker": "乌什卡",
    "text": "我磨的只是骨头。他的魂已经不在里面了，被死齿的罐子装走了。可骨头也得磨。"
   },
   {
    "if": "flag.a1_salted",
    "text": "亏得盐抹得匀，席子也扎得紧，拆的时候省了不少事。乌什卡看了一眼绳结，微微点了点头。"
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
    "text": "整夜守着火堆，不让火灭",
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
     "text": "后半夜你打了个盹，是被火星燎醒的，手背上起了一溜泡，好在火没灭。",
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
   "次日中午，边区兵又来了，这次有八个。领头的人打量那三只皮袋，又低头看席上剩下的半堆骨头。",
   {
    "speaker": "边区兵",
    "text": "头呢？营里说好了的，要挂在北城门上，挂满一个月！你们倒好，把它磨成面了？"
   },
   "乌什卡头也没抬，锤子照常一下一下往下落。还没磨的那堆里，正好有头骨。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "跟带刀的讲道理，先站到他够不着的地方。"
   }
  ],
  "choices": [
   {
    "text": "劝边区兵别挂头：兽人来抢，城门下要死人",
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
       "why": "冒险团认你"
      }
     ]
    },
    "ok": {
     "text": "领头的听完，往皮袋上踢了一脚土，带着人走了。乌什卡磨完最后一块，把锤子拿到湖水里洗了洗。",
     "goto": "a1_10z"
    },
    "fail": {
     "text": "他听得不耐烦了，把剁肉刀从土里拔出来。",
     "combat": {
      "title": "湖边",
      "intro": "边区兵直奔草席上那半堆遗骨。",
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
        "desc": "火堆里还有余烬。成功时，所有敌人陷入「目盲」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "dc": 12
        },
        "success": {
         "text": "一把热灰扬过去，两人都捂着眼睛往后退。",
         "applyAll": {
          "cond": "blinded",
          "turns": 1
         }
        },
        "fail": {
         "text": "灰被风吹了回来，反倒迷了你自己的眼。",
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
    "text": "护住剩下的头骨，等乌什卡磨完",
    "effects": [
     "rep companies -1",
     "approval ushka +1"
    ],
    "result": "你们几个往席子前面一站，任他们怎么骂也不还嘴。边区兵骂了一刻钟，直到乌什卡把最后一块头骨敲碎，再没什么可抢的，才走了。临走时，领头的把你们几个的长相都记下了。",
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
    "text": "乌什卡把三袋骨粉分开处置：一袋撒进湖里，一袋迎风扬了，剩下一袋埋进碎石地，地面上没有留任何标记。"
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
    "text": "雕骨者的人已经走远了，盐粒撒了一路，引来一长串鸟跟在后面啄。"
   },
   "车上空了一半，拉起来轻多了。往后各营只要有人问起杜坎森的尸首到底在哪里，说法总有七八种，没有一种对得上。{?flag.korgus_son:长者郡那边的事，外人并不知道。|}{?flag.korgus_carver:雕骨者那边的事，外人也不知道。|}",
   {
    "if": "flag.korgus_sold && party.ushka",
    "speaker": "乌什卡",
    "text": "再有第二次，我就走。这话我早说过了，你记着吧。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "从城里走到这里，一共十一天。路上的事，我都写在祈愿簿的背面了。"
   },
   {
    "if": "origin == 'grudge'",
    "text": "那张账页还揣在你怀里，上面记着玛瑙之门那笔债，欠债的是杜坎森。要把这一条划掉，得写清楚他的尸首最后是怎么处置的。"
   }
  ],
  "choices": [
   {
    "text": "签字确认身份与处置结果",
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
    "text": "核对遗体标记，再签字确认",
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
    "text": "拒绝在账页上签字",
    "tag": "负怨者兵团",
    "if": "origin == 'grudge' && (flag.korgus_son || flag.korgus_carver)",
    "effects": [
     "quest q_o_grudge stage 2"
    ],
    "result": "尸首已经到了别人手里，“已处置”这三个字你没法写。你把账页折好收了起来，玛瑙之门那笔债还留在账上。",
    "goto": "a1_11"
   },
   {
    "text": "套车回城复命",
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
   "回城那天，正下着今冬第一场雪。北城有一座旧塔，当年被黑龙喷出的火熏得焦黑，人称焦塔。",
   "城里已经连着传了三个黄昏，说是太阳一落，焦塔顶上就有一圈银光绕着转，是银龙显灵。这是加莱尔要查的第三起传闻。",
   "塔脚下站着四个人，穿的是家丁的衣裳，可胳膊比哪家的家丁都粗。塔梯就在他们身后，塔身外面还有一溜枯藤，一直爬到塔顶。",
   {
    "speaker": "家丁",
    "text": "这是主人家的塔，不让看！要看银龙，去对面酒馆楼上看吧。两个铜板一位，还有热酒喝。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "你看他们的鞋，全是新的，鞋底连点泥都没有。谁家的家丁不用干活？"
   }
  ],
  "choices": [
   {
    "text": "自称受元老之邀，要家丁放行",
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
       "why": "东坎诺旧贵族认得你"
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
      "intro": "塔里的楼梯仅容一人通行。",
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
        "desc": "梯口堆着一批火里烧剩的旧房梁。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
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
    "text": "直接闯上塔去",
    "combat": {
     "title": "焦塔梯口",
     "intro": "家丁们连招呼都没打就扑了过来。",
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
       "desc": "梯口堆着一批火里烧剩的旧房梁。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
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
    "text": "从塔后攀枯藤上去",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "alt": [
      "acrobatics"
     ]
    },
    "ok": {
     "text": "这藤比看上去结实。等你翻上塔顶，那几个家丁还在下面守着梯口。",
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
   "焦塔顶上，一个瘦子跪在垛口边，面前支着一面铜镜，镜面对着西斜的太阳。他手里攥着一根线，线那头是一只蒙着银箔的风筝，正在风里一圈圈地盘旋。",
   "城里接连有人说看见传说中的银龙回来了，管这叫“银龙再临”，这是你们追查的第三起。从塔下望去，确实是一圈银光，爬上塔顶才看清，不过是一个人在放风筝。",
   {
    "speaker": "放风筝的",
    "text": "别打，别打！是有人出钱让我放的，一个黄昏五个铜板。那人还说，就算被人抓住也不要紧，被抓住了反倒更好！"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这下三起都查完了。一起是刷了银粉的兽皮，一起是那位天天望天、其实从没见过银龙的老太太，这一起是风筝。没有一起是真的。"
   }
  ],
  "choices": [
   {
    "text": "按住放风筝的人，逼问是谁雇的他",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true,
     "alt": [
      "intimidation"
     ]
    },
    "ok": {
     "text": "他全招了。雇他的是上城区一座宅子的主人，姓奥特拉克，是城里的世家。他还说，主人家巴不得有人来拆穿，你们找上门去，主人一定会请你们喝茶。",
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
    "text": "收起风筝，从线轴上找线索",
    "effects": [
     "quest q_sightings done",
     "gold +150",
     "rep temples +1",
     "quest q_compact start",
     "approval tan +1"
    ],
    "result": "你把风筝收了回来，线轴上缠着一张字条，写着上城区一座宅子的门牌。瘦子没有跑，你分了他一块干粮。事后，精灵编年史家加莱尔·守昔者把查这三起传闻的酬劳一并付了，一共一百五十金冠。她还说，下城各团议事的那张门板桌旁已经吵起来了，争的是这座城往后归谁管。",
    "goto": "a1_12"
   }
  ]
 },
 "a1_12": {
  "id": "a1_12",
  "title": "萨什卷",
  "loc": "上城区 · 奥特拉克的宅子",
  "text": [
   "奥特拉克的宅子建在上城区的崖边。雇人放风筝的奥特拉克元老六十岁上下，手腕上戴着一只发黑的旧银镯，用古卡斯塔诺语招呼你们。加莱尔替你们翻译：“请坐。”",
   {
    "if": "flag.a1_kite_man",
    "text": "放风筝的那个瘦子比你们先到了，正蹲在门房里捧着一碗热茶。一见你们进来，赶紧把脸埋进了碗里。"
   },
   "桌上只摆着一壶茶、一碟萝卜干。兽人占据这座城的二十年里，奥特拉克一直没有离开。城里传言世家那些年吃过兽人，这话他听到过，从来不辩解。",
   {
    "speaker": "奥特拉克",
    "text": "我要找的就是你们这样的人，赶着一辆车哪里都去，又不替哪一家说话。焦塔顶上那只风筝，本来就是放给你们看的。"
   },
   "他从一只锡筒里抽出一卷纸。这是一份古卷的抄本，用古卡斯塔诺语写成，一半的字如今已经没人认得。认得的那一半里有一句：“王从灰烬那年起没再说过话，这五百年是我替他答的。”这里的“王”，指的是诸神之王卡斯特洛斯。",
   {
    "speaker": "奥特拉克",
    "text": "这是银龙在灰元五百年说的，就在他最后一次出战之前。卷子可以给你们看。看完了还想问什么，到时候再问。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这么说，王是在生我们的气。准是卡斯塔诺当年烧了林子，造了孽，王才不理我们，这五百年都是银龙在替他回话。"
   },
   {
    "if": "is.god",
    "text": "奥特拉克问你，灰元五百年那一年你在不在。你说不在。他点点头，又问，那灰元元年呢？"
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
    "text": "辨认卷上的文字",
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
     "text": "你和加莱尔凑在一起，又认出了一行，是个日期：灰元五百年卡斯坦月。这么说，银龙说完这句话，当月就死了。",
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
    "text": "探问奥特拉克为什么请外人来看卷子",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你看明白了：这句话由外人带出去，世家就不必担干系。他还说漏了半句：元老会里有人夜里偷偷拜另一位神。是谁，他心里清楚，却不肯说。",
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
    "text": "请奥特拉克准许你们誊抄一份卷子带走",
    "effects": [
     "item +sash_copy"
    ],
    "result": "他让管事拿来纸笔，在一旁看着加莱尔抄。抄完，他又从头核对了一遍，才在末尾盖了一枚小印。",
    "goto": "a1_13"
   },
   {
    "text": "向奥特拉克承诺不把卷上的话外传",
    "effects": [
     "rep league +1"
    ],
    "result": "他把卷子收回了锡筒，说世家记得守信的人。",
    "goto": "a1_13"
   },
   {
    "text": "问奥特拉克，兽人占城的二十年里世家靠什么活下来",
    "effects": [
     "rep league -1",
     "approval ushka +1"
    ],
    "result": "奥特拉克端起茶来喝了一口，又放下，到底没有回答。同行的兽人乌什卡倒朝他点了下头。她朝一个人类贵族点头，这还是第一次。",
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
   "阿坦想去试炼山问一句话：古时那位卡斯坦皇帝，就是在这座山上见到银龙的。你们从北要塞脚下上山。山上有十道试炼，是历代留下来考验来人的，可山上的法术四百多年前就失效了，第二道试炼的石桌不再显字，第三道试炼的锻炉也冷了。",
   "第九道试炼的石像连头都没了，可还跪在那里。",
   "第六道试炼在半山腰上，是一棵橡树和一棵榛树，当中隔着一条小路，两棵树里各住着一位树灵。这道试炼考的是劝和，两位树灵从立试炼那时一直吵到现在。",
   {
    "speaker": "橡树里的那位",
    "text": "那条溪是我的！"
   },
   {
    "speaker": "榛树里的那位",
    "text": "溪是我的，你的是溪边那块石头！上次来劝架的那个也这么说。你看，他的靴子还留在那里。"
   },
   "石头旁边果然有一双烂得只剩鞋底的靴子。再往上走，伯爵联盟首领的女儿卡莉斯塔·黑塔带着两个随从，正拿一根绳子量上山的路。半山的空地上落着一头狮鹫，马尔霍德的王子小格里夫坐在它旁边啃苹果。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我只问一句，问完我们就走。"
   },
   {
    "if": "is.god",
    "text": "你一走近，两棵树都不吵了。橡树里的那位问榛树里的那位，这个算不算天上来的。榛树说不算，天上来的哪有自己走路的。"
   }
  ],
  "choices": [
   {
    "text": "劝橡树和榛树里的两位树灵别再争吵",
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
     "text": "你说溪水往下流，石头不会动，这两样谁也离不开谁。两棵树安静了很久。后来橡树说起“银的那位”，也就是银龙：“灰的那天”以后，他也上山来问过天，可天没有理他。榛树马上说，这件事它记得比橡树清楚。",
     "effects": [
      "flag spirits_heard",
      "codex trials_of_castan"
     ],
     "goto": "a1_13b"
    },
    "fail": {
     "text": "它们朝那双靴子指了指，再也不肯开口。阿坦蹲在两棵树中间听了一下午，总算从它们的争吵里听出半句：银龙来问过天，天没有理他。这么一耽搁，天也黑了。",
     "effects": [
      "flag spirits_heard",
      "flag a1_dark"
     ],
     "goto": "a1_13b"
    }
   },
   {
    "text": "在石下喊出第一道试炼的口号",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "once": true,
    "effects": [
     "flag shout_answered",
     "rep corintar +1"
    ],
    "result": "你喊完，山下静了好一阵，然后北要塞的墙头上有人应了一声，是科琳塔尔首领蓝牙手下的哨兵。第一道试炼考的就是这个：你喊一声，有人应你。"
   },
   {
    "text": "查看第三道试炼的锻炉",
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
    "text": "问卡莉斯塔用绳子在量什么",
    "once": true,
    "effects": [
     "rep league +1"
    ],
    "result": "她说她在量上山的路：总有一天得有人上山走这十道试炼，她得先知道要走多久。说到“有人”时，她一直望着山顶那块誓石。"
   }
  ]
 },
 "a1_13b": {
  "id": "a1_13b",
  "title": "第十道试炼的林子",
  "art": "ev_trails_basilisk",
  "text": [
   "下山得穿过松林。松针上留着一串爪印，每一个都有你的手掌宽。",
   "{?flag.a1_dark:天已经黑透了，林子里什么也看不清。|好在林子里还亮着。}有块石头后面传来喘气的声音。那是一头小石化蜥，身上的刺还没长全，可它的眼睛照样能把人看得僵住。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "千万别看它的眼睛，看它的脚！脚朝哪边，它就往哪边扑。"
   }
  ],
  "choices": [
   {
    "text": "绕到石化蜥的下风处，悄悄避开它",
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
      "intro": "石化蜥双眼一瞪，队伍最前面那人的两条腿顿时僵住了。",
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
        "desc": "石化蜥的眼睛受不了强光。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
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
         "text": "你晃盾的时候正好跟它对上了眼，膝盖一下就僵了。",
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
    "text": "拔刀迎敌",
    "combat": {
     "title": "松林",
     "intro": "石化蜥从岩石后面爬了出来，爪子踩到哪里，哪里的白霜就化开一片。",
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
       "desc": "石化蜥的眼睛受不了强光。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d6 点钝击伤害。",
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
        "text": "你晃盾的时候正好跟它对上了眼，膝盖一下就僵了。",
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
   "万神道上，各家神殿支起了十几顶帐篷。泛神会议是各神殿祭司共同议事的大会，这次要议的是科琳死后能不能封神。祭司们都想拉你们说句话：你们亲自查过三起银龙传闻，你们的证词有分量。",
   {
    "speaker": "卡斯特洛斯的老祭司",
    "text": "城破那天，卡莱昂大人身上出过异象。他是神王的化身。几位是查过银龙传闻的人，你们说上一句，比我们说十句都有用。"
   },
   {
    "speaker": "阿德安的祭司",
    "text": "马尔霍德的王子骑着狮鹫打进城来，这才是神的长子该有的样子！几位替他说句话，阿德安的神殿会记着你们。"
   },
   "伯爵联盟首领卡莱昂·黑塔被祭司们围在中间。他挨个反问：既然说他是神王的化身，银龙那样的爪子和尾巴什么时候长到他身上？没有一个人答得上来。会议的主持人多米尼克坐在角落里，膝盖上摊着本子，一字一句地记。",
   "帐篷后面还坐着个红宝石矮人，一个人在喝酒，面前摆着一张单子。",
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
    "text": "这化身是按年算钱，还是按件算？你问清楚了再点头。你一点头，往后谁家死了人都要来敲你的门。"
   },
   {
    "if": "flag.god_revealed",
    "text": "多米尼克抬起头，盯着你看了好一会儿，才把目光放回本子上。"
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
    "text": "打听认定化身需要什么条件",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你打听明白了：认定化身要经会议表决，得有足够的票，眼下卡莱昂和小格里夫谁的票都不够。两边都来拉你们，是想先把说法定下来。",
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
    "text": "试探卡莱昂愿不愿意被认作化身",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "每有人叫他一声“化身”，他就往帐篷门口挪一步，看来是真不想当。他女儿卡莉斯塔却一直站在门口，一步也没挪过。想让黑塔家出一位化身的，是她。"
    },
    "fail": {
     "text": "你看错了人，盯着卡莉斯塔瞧了半天。她察觉了，冷冷地回了你一眼。",
     "effects": [
      "rep league -1"
     ]
    }
   },
   {
    "text": "查阅黑塔家的家谱",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "once": true,
    "effects": [
     "flag a1_tree"
    ],
    "result": "神殿里存着黑塔家家谱的抄本。你查到他家祖上出过术士王的门徒，那是三代以前的事，如今没人提起。这一条拿来抬他也行，拿来压他也行。"
   },
   {
    "text": "请多米尼克把你列入祭司名册",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "flag has_vote"
    ],
    "result": "多米尼克问你给谁念过经、念过几场，问一样，记一样。记完，他给了你一根刻着你名字的木签。冒险者出身的祭司也算祭司，有了这根木签，你在会上就有一票。"
   },
   {
    "text": "去帐后找喝酒的矮人",
    "once": true,
    "effects": [
     "rep companies +1"
    ],
    "result": "这个矮人叫贝尔格拉克·穴居者，是科琳生前的老伙伴。他一开口先报数：祭司一共一百零三个，昨晚喝了酒的有六十一个。报完，他接着喝酒。你刚瞄了一眼他面前那张用矮人文写的单子，他就拿杯子把它压住了。"
   },
   {
    "text": "为卡莱昂作保，支持认他为神王的化身",
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
    "result": "老祭司握住你的手，很久都不肯放。卡莱昂隔着人群看了你一眼，那眼神像在看一个刚把他出卖了的人。",
    "goto": "a1_15"
   },
   {
    "text": "为小格里夫作保，支持认他为阿德安的化身",
    "effects": [
     "flag avatar_gryf",
     "world scale -1",
     "rep league +1"
    ],
    "result": "阿德安的祭司当场记下了你的名字。小格里夫在外面听说了，进来说他不要当什么化身，他要替科琳说话。祭司们说，这由不得他。",
    "goto": "a1_15"
   },
   {
    "text": "当众说出三起银龙传闻的真相",
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
    "result": "你把刷了银粉的兽皮、受雇放风筝的瘦子，还有那个望了二十年天、其实从没见过银龙的老太太，一样一样全说了出来。帐篷里先是一静，接着两边的祭司一起骂起你来。只有多米尼克没骂，他把你的话一字不落地记了下来。",
    "goto": "a1_15"
   },
   {
    "text": "不替任何人说话，直接进大帐",
    "effects": [
     "approval tan +1"
    ],
    "result": "你从两边的祭司中间挤了过去。阿坦跟在你后面，小声说了一个字：好。",
    "goto": "a1_15"
   },
   {
    "text": "接受“王的化身”身份",
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
   "第十次泛神会议在三顶军帐拼成的大帐里召开，多米尼克坐在主位。帐里挤着一百来名冒险者出身的祭司，有人还披着甲，有人连鞋都没穿。",
   "科琳的遗体是你们收尸队擦洗的，所以你们也被叫上去问话。问的是她身上的伤：正面几处，背后几处，还有致命的最后一击。她是被人推到前面去的，还是自己走上去的？这决定她算不算舍身，够不够资格封神。",
   {
    "speaker": "多米尼克",
    "text": "照死神奈拉特的规矩，人死了要过秤。我要的是秤上的数，不要诸位的念想。说吧，一处一处地说。"
   },
   "阿坦在后排举起了手，他想问神王的下落，可旁边的人把他的胳膊按了下去。",
   "蓝牙站在帐门边。科琳死后，追随她的科琳塔尔由他统领。跟着他的愚足坐在他脚边，手里捏着一块饼，一口也没吃。收尸队的老布兰多克站在最后一排。",
   {
    "if": "origin == 'corintar'",
    "text": "你当时就在盾墙里，亲眼看见了一切，满帐的人都知道。"
   },
   {
    "if": "flag.has_vote",
    "text": "你手里攥着那根刻着名字的木签，那是你的一票。"
   },
   {
    "if": "is.god",
    "text": "有个白胡子祭司站起来问你，灰元元年卡斯坦月一日发生了什么。你答不上来，那一年你不在。他坐下时，旁边两个祭司都往外挪了挪。"
   }
  ],
  "first": [
   "codex dominic",
   "codex tenth_council"
  ],
  "choices": [
   {
    "text": "作证说科琳是自己走上前去的",
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
       "why": "你懂会上的计票规矩"
      },
      {
       "if": "flag.vigil_knelt || flag.sons_knelt",
       "n": 1,
       "why": "多米尼克把你当自己人"
      }
     ]
    },
    "ok": {
     "text": "书记照你的原话记了下来。多米尼克当众把这句话念了一遍，帐里有人哭出了声。",
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
    "text": "作证说这场胜利属于全军",
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
       "why": "你懂会上的计票规矩"
      }
     ]
    },
    "ok": {
     "text": "帐里嗡的一声，好几个团的祭司都在点头，科琳塔尔的人脸色很难看。书记照你的原话记下了。",
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
     "text": "书记记成了“全军与她同心”，你那句话的意思被磨掉了一半。",
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
    "text": "替阿坦当众问一句：神王在哪里",
    "effects": [
     "flag testimony_king",
     "approval tan +2",
     "rep temples -1"
    ],
    "result": "帐里一下子没了声音。多米尼克看了你很久，才说这不是今天要议的事。后排的阿坦低下了头，再也没有举手。",
    "goto": "a1_15b"
   },
   {
    "text": "问完神王的下落，再念出萨什卷上的那句话",
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
    "text": "以神的身份宣布：科琳是自己挺身而出的",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_judged_council",
     "flag testimony_hers",
     "world scale +3",
     "rep temples -2"
    ],
    "result": "你一站起来，帐里所有人都跟着站了起来。等你说完，多米尼克合上了本子。后来人们提起这次会议，都说那是神亲自开的。",
    "goto": "a1_15b"
   },
   {
    "text": "以神的身份宣布：这是全军共同的功劳",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_judged_council",
     "flag testimony_host",
     "world scale -3",
     "rep temples -2"
    ],
    "result": "你一站起来，帐里所有人都跟着站了起来。蓝牙在门边听完，掀开帐帘出去了。后来人们提起这次会议，都说那是神亲自开的。",
    "goto": "a1_15b"
   }
  ]
 },
 "a1_15b": {
  "id": "a1_15b",
  "title": "剃了头的扈从",
  "text": [
   "会开到一半，几个戴木面具的老人挤了进来。他们侍奉的是已故的战神阿格拉多斯。领头的老妇人说，教团一直传着一则预言，科琳的经历一条一条全应验了。",
   "你们站在帐篷最后面，只听清了半句：说的是一个红头发的人，从东墙来。科琳正是红发。写着预言的那页纸，你们没能看到。",
   "最后举手表决，举起来的手多得不用数。科琳就这样封了神，接替了战神阿格拉多斯空了多年的神位。帐外的人一直欢呼到天黑。",
   {
    "if": "origin != 'corintar'",
    "text": "会一散，老布兰多克就去了河边，借来一把剃刀，把头剃得精光。他说往后不再擦甲了，要去当科琳的祭司。临走前，他把擦甲用的那块布叠好，留在了车上。"
   },
   {
    "if": "flag.god_tried_raise",
    "text": "蓝牙从你身边走了过去，没有停。"
   },
   {
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "text": "天黑后，蓝牙在拴马桩旁叫住了你，周围没有别人。科琳倒下之前，挡的正是砸向他的那一击。"
   },
   {
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "speaker": "蓝牙",
    "text": "你当时就在盾墙里。她倒下之前的最后那一刻，有没有看我？"
   }
  ],
  "first": [
   "codex corinite",
   {
    "if": "origin != 'corintar'",
    "then": [
     "log 老布兰多克离开了车队，剃了头，去当科琳的祭司。"
    ]
   }
  ],
  "choices": [
   {
    "text": "如实告诉他：她最后看了他一眼",
    "if": "origin == 'corintar' && !flag.god_tried_raise && flag.saw_her_look",
    "effects": [
     "rep corintar +1"
    ],
    "result": "他闭上眼睛，点了点头，转身走了。",
    "goto": "a1_16"
   },
   {
    "text": "告诉他她看了他，尽管你其实没看清",
    "if": "origin == 'corintar' && !flag.god_tried_raise && !flag.saw_her_look",
    "effects": [
     "var lies +1",
     "rep corintar +1"
    ],
    "result": "其实你并没有看清。他听完，低声道了句谢，转身走进了夜色里。",
    "goto": "a1_16"
   },
   {
    "text": "如实告诉他：当时你没看清",
    "if": "origin == 'corintar' && !flag.god_tried_raise",
    "effects": [
     "flag a1_bt_unsure"
    ],
    "result": "他站了一会儿，说了声“也好”，才转身走开。",
    "goto": "a1_16"
   },
   {
    "text": "回到搭在酒桶上的门板桌旁",
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
   "blurb": "店主替冈瑟看仓库，便宜处理战后收回来的余货。",
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
   "各团就要分道扬镳。科琳塔尔回昂特拉斯，达梅里亚之子向西，钴蓝兵团沿艾伦河往西北，想打下一块地来抵军饷。下城的空地上早已没了守夜的火，只剩那张搭在酒桶上的门板桌，各团一直在那里议事。",
   "桌边还剩最后一件事要吵：这座城往后归谁管。蓝牙坐在一头，伯爵联盟的卡莱昂和他女儿卡莉斯塔坐在另一头，钴蓝兵团的冈瑟夹在中间算账。世家的奥特拉克元老也来了。兽人阿罗莎·伐橡者是追随科琳的人，她站在一边不肯坐。碎心者氏族的酋长古拉德只派了个人来，蹲在桌腿旁边。",
   {
    "speaker": "冈瑟",
    "text": "这座城谁来管，我不在乎。加韦德的新国王说了，他父亲死在血腐阶梯那一仗里，欠我们的军饷也就跟着一笔勾销。这话我不认。一年零四个月的饷，利息另算！"
   },
   {
    "if": "flag.letter_shown",
    "speaker": "冈瑟",
    "text": "巴兹伍德先生的人也在，正好。帝国到底是什么意思，你替我们问一句。"
   },
   {
    "if": "origin != 'sons'",
    "text": "达梅里亚之子的罗吉尔天一亮就要带着纵队拔营往西。达拉斯把缝好的最后一件寿衣叠起来放在车上，背起包袱要跟着队伍走了。走到桌边，他停了一下。"
   },
   {
    "if": "origin != 'sons'",
    "speaker": "达拉斯",
    "text": "针脚我缝得密，到时候拆起来小心点。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "科琳答应过给我们地鹰氏族一块地，叫康原。可她死了，如今科琳塔尔做主的是蓝牙。你们帮我去开这个口，事成了我分你们一成！"
   },
   {
    "if": "flag.a1_bt_unsure",
    "text": "蓝牙从头到尾没有朝你看过一眼。"
   },
   {
    "if": "is.god",
    "text": "冈瑟问你，要是神来借钱，该算几分利。在场的没有一个人笑。他是真想知道。"
   },
   {
    "if": "var.lies >= 3 && party.tan",
    "text": "阿坦坐在车辕上，把你说过的那些哄人的话一句一句想了一遍，脸色越来越沉。"
   }
  ],
  "first": [
   "quest q_debt stage 2",
   "codex bluetusk",
   "rest short",
   {
    "if": "origin != 'sons'",
    "then": [
     "log 达拉斯离开了车队，跟着罗吉尔往西去了。"
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
    "text": "请蓝牙认下科琳许给妮克西的康原",
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
     "text": "蓝牙听完，让书记把印拿来，只说了一句“是她答应的”，就盖了印，把地契推给了妮克西。妮克西又把它推给了你，说她信不过自己的口袋。",
     "effects": [
      "flag groundhawk_deed",
      "item +groundhawk_deed",
      "world room +1",
      "approval nixee +2"
     ]
    },
    "fail": {
     "text": "蓝牙说这块地他认，可印留在昂特拉斯，文书还得等一等。妮克西说，“等”这个字她听过太多次了。",
     "effects": [
      "approval nixee -1"
     ]
    }
   },
   {
    "text": "替古拉德传话，请蓝牙担保碎心者氏族的落脚地",
    "once": true,
    "effects": [
     "flag pixiebury_warned",
     "world room +1",
     "rep clans +1"
    ],
    "result": "蹲在桌腿旁的那个人站了起来。蓝牙说，碎心者氏族落脚的皮克精之墓，科琳塔尔会派人去照看。那人把这句话反复念了几遍，记牢了才走。"
   },
   {
    "text": "请阿罗莎说说她对这座城的看法",
    "once": true,
    "effects": [
     "codex arosha"
    ],
    "result": "阿罗莎说，力气和脸面，兽人本来就有，科琳教她的是另外两样：本分和心软，这两样难学多了。说完她就闭上了嘴，像是嫌自己说多了。"
   },
   {
    "text": "问愚足今后去哪里",
    "once": true,
    "effects": [
     "item +halfling_pie 2"
    ],
    "result": "他说他跟着蓝牙走：蓝牙总是不吃饭，得有个人盯着。他塞给你两个肉饼，还是热的。"
   },
   {
    "text": "告诉罗吉尔你要留下完成收殓军令",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons'",
    "once": true,
    "effects": [
     "rep moon -1",
     "approval tan +1"
    ],
    "result": "罗吉尔合上兵书，点头准了。他拔营那天，你留在城里，没有去送行。"
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
    "result": "卡莱昂在文书上签了名。当天，下城的地精就被赶出了旧集市。",
    "goto": "a1_17"
   },
   {
    "text": "请科琳塔尔留下守城",
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
    "text": "订立共管城约，在下城设地精坊",
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
       "why": "地精推举了一个说话的人"
      }
     ]
    },
    "ok": {
     "text": "一直吵到半夜，各家总算都签了字。冈瑟签字时还在念叨他的军饷。地精坊那一条写在最末尾，只有短短三行。",
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
     "text": "卡莱昂第一个起身走了，冈瑟也跟着走了。门板桌边剩下的几个人谁也不服谁，没过多久也散了。",
     "effects": [
      "flag compact_none"
     ],
     "goto": "a1_17"
    }
   },
   {
    "text": "让各方分片管辖，谁占的地方谁管",
    "effects": [
     "flag compact_none",
     "rep companies +1"
    ],
    "result": "各团当天就拔了营。从此城里的事，谁占着哪座城门，那一片就归谁管。门板桌留在空地上，没有人来收。",
    "goto": "a1_17"
   }
  ]
 },
 "a1_16b": {
  "id": "a1_16b",
  "title": "凑份子的城",
  "text": [
   "城约抄成五份，五家各收一份。",
   "地精坊划在下城银瀑的下游，是全城最臭的几条街。有个地精老太太过来看了一眼，说臭不要紧，只要把门把手装得低一点，方便地精开门就行。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "就三行字。不过写下来的才算数。我先收着，往后谁不认，我就拿着这个找他去！"
   },
   {
    "if": "origin == 'wex'",
    "text": "卡莱昂问了一句，帝国认不认这纸城约。桌边的人都朝你看过来。"
   }
  ],
  "choices": [
   {
    "text": "请帝国为城约盖印",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.report1_false",
    "effects": [
     "flag compact_sealed",
     "world peace +1",
     "rep throne +1",
     "rep moon -1"
    ],
    "result": "你给巴兹伍德先生去了封信，二十天以后回信到了。城约的抄本上盖着他的印，旁边还有一行小字，只写了“暂且”两个字。",
    "goto": "a1_17"
   },
   {
    "text": "请帝国为城约盖印",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && flag.report1_false",
    "check": {
     "skill": "persuasion",
     "dc": 14
    },
    "ok": {
     "text": "巴兹伍德先生的回信很短。印还是盖了，旁边添了一行小字，问你这次写的是不是真话。",
     "effects": [
      "flag compact_sealed",
      "world peace +1",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "a1_17"
    },
    "fail": {
     "text": "回信上只有一句话，说你上次写的信他还没核完。印没有盖。",
     "effects": [
      "rep throne -1"
     ],
     "goto": "a1_17"
    }
   },
   {
    "text": "收好你的城约，准备上路",
    "effects": [
     "rep clans +1"
    ],
    "result": "你把抄本卷起来，塞进了车板下面。那个地精老太太在车边站了一会儿，往车上放了一小坛腌菜。",
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
   "车空了，人也少了。{?origin != 'wex':奥托格接到调令，回西边去了。|}{?origin != 'grudge':布罗克签完了字，扛着他的铲子回红宝石领交差去了。|}剩下的人跟着车往北，去长者郡。兽人大酋长杜坎森的小儿子古尔赞·熊心正在那里召集各个氏族。没有谁请你们去，只是那道收尸的军令一直没人来撤。",
   {
    "if": "flag.a1_ottog_owes && origin != 'wex'",
    "text": "奥托格临走前把他那瓶药水塞给你，说你替他守夜的那一班他记着。"
   },
   "河滩上躺着一头巨熊，站起来怕有两个人高。它的胸膛被剖开，心已经没了。旁边的泥里陷着半截兽人的小臂，断手还握着斧柄。",
   {
    "if": "origin != 'tide'",
    "speaker": "马布格",
    "text": "这熊叫灰吻。嗜血者氏族的规矩，要当头领的人得独自带一把斧子来杀它，杀完喝它的血。前面有他们的哨，不要紧，他们认得我这颗断牙。"
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
     "log 奥托格离开了车队，接了调令回西边去了。"
    ]
   },
   {
    "if": "origin != 'grudge'",
    "then": [
     "log 布罗克离开了车队，回红宝石领交差去了。"
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
    "text": "寻找浅水处过河",
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
     "text": "车轮陷进沙窝。你们在冰水里待了半个时辰才把车推出来，一袋干粮已经被冲走了。",
     "effects": [
      "damage 1d6",
      "gold -10"
     ]
    }
   },
   {
    "text": "查看巨熊是怎么死的",
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
     "text": "熊身上的伤口全是同一把双手斧砍的，出自一个人之手。那人在搏斗中先丢了一只眼睛，又丢了半条胳膊，最后还是杀了它。他只掏走了熊心，没有剥皮。这个人多半就是你们要去见的古尔赞。",
     "effects": [
      "codex gurzan",
      "flag a1_bear_read"
     ]
    },
    "fail": {
     "text": "你凑得太近，沾了一身熊毛里的虱子，痒了一下午。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "告诉哨兵你们送回过杜坎森的遗体，古尔赞欠这份情",
    "if": "flag.gurzan_owes",
    "effects": [
     "rep clans +1"
    ],
    "result": "哨上的人一听是送杜坎森遗体回来的那辆车，就收起了矛，还派了个半大的孩子给你们领路。",
    "goto": "a1_18"
   },
   {
    "text": "用兽人语自报氏族",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "effects": [
     "rep clans +1"
    ],
    "result": "哨上的人看看你手背上那块绿，问你杜坎森死的那天你在哪条街上。你照实说了，他让开了路。",
    "goto": "a1_18"
   },
   {
    "text": "让马布格去哨卡交涉",
    "if": "origin != 'tide'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "party": true,
     "mods": [
      {
       "if": "rep.clans >= 2",
       "n": 2,
       "why": "兽人氏族听说过你"
      }
     ]
    },
    "ok": {
     "text": "马布格去了很久，回来说可以过去了，只是让你们别去看哨上那几个人的眼睛。",
     "goto": "a1_18"
    },
    "fail": {
     "text": "马布格的话才说到一半，哨上的人就举起了斧子。他退了回来，说他们已经不认他这颗断牙了。",
     "combat": {
      "title": "嗜血者的前哨",
      "intro": "狂战士们像是喝了什么，连眼白都红了。",
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
        "desc": "这头熊分量极重，一旦从坡上滚下就很难拦住。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 13
        },
        "success": {
         "text": "死熊顺着坡滚下去，一头砸进了冲上来的人群中。",
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
    "text": "强行闯过哨卡",
    "combat": {
     "title": "嗜血者的前哨",
     "intro": "岗哨上的人连一句盘问都没有，先飞来一把斧头。",
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
       "desc": "这头熊分量极重，一旦从坡上滚下就很难拦住。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "死熊顺着坡滚下去，一头砸进了冲上来的人群中。",
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
   "长者郡的废墟里生着一堆大火，碎剑者、毒牙和雕骨者三个氏族的酋长围坐在火边。雕骨者氏族来的是酋长阿祖科尔本人，他看了一眼你们的板车，立刻认出了它。",
   "坐在火堆上风口的就是古尔赞，杜坎森的小儿子。他左眼缠着布，右边的袖管从胳膊肘往下是空的，河滩上那头熊就是他杀的。他比你想的年轻，才二十出头。",
   "这个日子是他自己挑的。二十一年前的银现月四日，杜坎森第一次带着兽人从山里杀出来。火边的酋长们个个都记得这个日子。",
   {
    "if": "flag.gurzan_owes",
    "text": "你们把他父亲的遗体送了回来，在这里算是客人。他让人给你们端来碗，碗里盛的是熊肉。"
   },
   {
    "if": "flag.gurzan_grudge",
    "text": "你们是被叫来对质的。他让你们站着，第一句就问：我父亲的遗体在哪里？"
   },
   {
    "if": "!flag.gurzan_owes && !flag.gurzan_grudge",
    "text": "在他眼里，你们不过是路过的收尸人。他既没让你们坐，也没让你们走。"
   },
   {
    "if": "flag.a1_dragged",
    "text": "你们是被人绑着拖进火圈的，到了火边，绳子才被割开。"
   },
   {
    "if": "flag.a1_kin",
    "text": "湖边那个缠白布的使者就站在古尔赞身后。他用兽人话说了一句什么，古尔赞便朝旁边挪了一点，给你让出半块石头坐。"
   },
   {
    "if": "flag.p_surrendered",
    "speaker": "古尔赞",
    "text": "你就是城里那个扔了刀的吧，我听说过你。扔刀不丢人。扔完了还不跑，那才丢人。"
   },
   {
    "speaker": "古尔赞",
    "text": "都说我父亲是兽人的神杜坎的儿子。是不是，我不知道。我只知道他活着的时候，没人敢拿链子拴兽人。"
   },
   {
    "if": "flag.god_named_korgus",
    "speaker": "古尔赞",
    "text": "你在湖边当众说过，他是杜坎的儿子。这句话比你们早到了半个月。我是该谢你，还是该问问你凭什么这么说？"
   },
   {
    "if": "flag.god_denied_korgus",
    "speaker": "古尔赞",
    "text": "在湖边说他不是杜坎儿子的那个，就是你吧。坐到那里去，我想看看神会不会流血。"
   },
   {
    "if": "is.god",
    "speaker": "古尔赞",
    "text": "我父亲也是刀枪不入的，一直到他死的那一天。"
   },
   {
    "if": "origin != 'tide'",
    "text": "马布格进了火圈就没再出来。古尔赞让人给他拿了一把新斧子，问他愿不愿意留下。"
   }
  ],
  "first": [
   "codex gurzan",
   {
    "if": "origin != 'tide'",
    "then": [
     "log 马布格离开了车队，留在了古尔赞的火边。"
    ]
   }
  ],
  "choices": [
   {
    "text": "观察古尔赞是否真信父亲是神之子",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "flag.a1_bear_read",
       "n": 2,
       "why": "你在河滩上看懂了那头熊的伤"
      }
     ]
    },
    "ok": {
     "text": "他说起父亲来，讲的全是自己亲眼见过的事，哪一天打的哪座城，吃的什么，骂过谁。可一句也没提杜坎神。看来他自己并不信父亲是神的儿子，只是他认定氏族需要这么信。",
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
    "text": "按兽人的夺斗规矩，挑战他手下最强的狂战士",
    "combat": {
     "title": "夺斗",
     "intro": "酋长们等着看谁先倒下。对方最强的狂战士脱掉上衣，往胸前抹上熊血，朝你们走来。",
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
       "desc": "烟正飘向对面，可以据此判断风向。成功时，所有敌人陷入「目盲」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
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
    "text": "劝酋长们各回地盘，告诉他们能拿到盖印作数的地契",
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
       "why": "地鹰氏族拿到了地契"
      },
      {
       "if": "flag.a1_gurzan_doubt",
       "n": 1,
       "why": "你看出古尔赞自己并不信"
      }
     ]
    },
    "ok": {
     "text": "你把城约和地契的事跟他们讲了一遍。碎剑者的酋长问能不能也给他一张。毒牙的酋长始终没表态，可第二天第一个拔营离开的就是她。这场聚会最终没能聚成一支大军。",
     "effects": [
      "flag moot_defused",
      "world embers -1"
     ],
     "goto": "a1_18b"
    },
    "fail": {
     "text": "酋长们听完，接着喝他们的酒，没有一个人理你。古尔赞让人往火里又添了一抱柴。",
     "effects": [
      "rep clans -1"
     ],
     "goto": "a1_18b"
    }
   },
   {
    "text": "在旁观望，暂不开口",
    "effects": [
     "rep clans +1"
    ],
    "result": "你在火边一直坐到天亮，始终没有开口。后半夜，古尔赞让人也给你端来了一碗熊肉汤。",
    "goto": "a1_18b"
   },
   {
    "text": "请乌什卡代表她的烂刀氏族发言",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "approval ushka +1",
     "rep clans -1",
     "flag a1_ushka_said"
    ],
    "result": "乌什卡站起身，以烂刀氏族的名义说，杜坎森是神的儿子这件事是假的，这场仗是建在谎话上的。火边一下子没了声音。古尔赞盯着她看了很久，像是要把她的脸记住。"
   },
   {
    "text": "以神的身份，坐上杜坎森在火边留下的首位",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_of_the_tide",
     "world embers +3",
     "rep clans +3",
     "rep corintar -3",
     "approval ushka -3"
    ],
    "result": "古尔赞站起身，把火边的首位让给了你，自己坐到下首。三个酋长见状，一个接一个跪了下去。只有乌什卡没有跪，她把腰后的锤子握在了手里。",
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
    "text": "你是被两个人架着扔出火圈的，脸先着地。那个狂战士回到了火边，酋长们忙着给他倒酒，再没人朝你们这边看一眼。{?party.ushka:乌什卡蹲下来，帮你把嘴里的灰清干净。|}"
   },
   "天快亮了，火堆只剩一摊红炭，酋长们各自去找自己的马。古尔赞站在炭堆边，用剩下的那只手托着两样东西：一截断链和几朵干蘑菇。",
   {
    "speaker": "古尔赞",
    "text": "往后每年的奈拉月十一，都要把这两样东西扔进河里。我父亲是那天死的，奴工的链子也是那天断的。这两件事，哪一件都不能忘。"
   },
   {
    "if": "is.god && !flag.god_of_the_tide",
    "speaker": "古尔赞",
    "text": "那个位子你不肯接，也好。不过这么一来，你迟早要站到我的对面去。"
   },
   {
    "if": "flag.a1_ushka_said && party.ushka",
    "text": "他从乌什卡身边走过时停了一下，看了她一眼，才继续往前走。"
   },
   {
    "if": "origin == 'tide'",
    "text": "你是以亲族的身份来的，所以火灭以前，你得说清楚自己往后跟谁走。跟碎心者氏族的酋长古拉德走，是去种地。跟阿罗莎走，是去投科琳的人。留在古尔赞这边，就是准备再打一仗。火边的人都在看着你。"
   }
  ],
  "choices": [
   {
    "text": "跟古拉德留下耕地",
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
    "text": "随阿罗莎加入科琳一方",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "effects": [
     "flag road_arosha",
     "quest q_o_tide stage 2",
     "rep corintar +1"
    ],
    "result": "你报了阿罗莎的名字。古尔赞把“伐橡者”这个名字慢慢念了一遍，碎剑者的酋长朝炭堆里啐了一口。",
    "goto": "a1_19"
   },
   {
    "text": "跟古尔赞留下，准备再打一仗",
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
    "text": "趁天亮前离开营火",
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
   "板车第一次彻底空了。你们在长者郡外生起火坐下，围着火一看，比出城那晚少了好几个人。",
   "那道收尸的军令始终没人来撤。当初签字的几个队长都忙着占地盘去了，没有一个回来说一声差事办完了。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这一趟，我们送走了一具遗体，给它找到了去处，还有一个问题没能问出口。"
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
    "text": "蓝宝石望的那位老太太，现在大概还在看天。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "车上其实还有一位神。我没有算进去，因为你不算一具尸首。"
   },
   "加莱尔走了，只留下一张条子压在车辕下面。条子上说她要回安本科斯特交稿，下次见面“不会太久”。背面还有一张速写，画的是你们几个围着火坐着的样子。",
   {
    "if": "is.immortal",
    "text": "加莱尔留下的那张速写上，你画得最细，旁边还有一行小字，说过几年再画一张，对一对。"
   }
  ],
  "first": [
   "level 4",
   "quest q_cart stage 2",
   "rest short",
   "log 第一幕：杜坎森的遗体有了归宿。车空了，军令仍未撤销。"
  ],
  "choices": [
   {
    "text": "给巴兹伍德如实汇报",
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
    "text": "给巴兹伍德挑他爱听的写",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var false_reports +1"
    ],
    "result": "你写的是东坎诺已经太平了，氏族都散了，各团也都听帝国的。天一亮，信鸽就放出去了。",
    "goto": "a2_01"
   },
   {
    "text": "压低火堆，休息",
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
    "result": "{?origin == 'wex':这次你没有写信，信鸽在笼子里叫了一夜。|前半夜是乌什卡守的。}",
    "goto": "a2_01"
   }
  ]
 }
};
