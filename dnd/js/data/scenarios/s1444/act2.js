// s1444 / act2.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a2_01": {
  "id": "a2_01",
  "title": "五年以后，狼门",
  "chapter": "第二幕 · 再没人见过的矮人",
  "art": "ev_cave",
  "loc": "蛇脊山脉西麓 · 玛瑙之门外",
  "date": "1450年春",
  "text": [
   "一晃就是五年，卡斯托纳斯城里后来的事，你们都是一路上零零碎碎听人说的。",
   {
    "if": "flag.compact_league",
    "text": "如今管着卡斯托纳斯的是伯爵联盟，卡莱昂在每道城门上都要收一个铜子，下城人说，他收得比兽人那会儿还准时。"
   },
   {
    "if": "flag.compact_corintar",
    "text": "如今守城的是科琳塔尔，蓝牙的兵轮着班站岗，万神道上给她修的那座祠堂也盖上了瓦，倒是阿坦那座庙，到今天还是没屋顶。"
   },
   {
    "if": "flag.compact_free",
    "text": "城约到现在还算数，各家每个月凑一回份子，门板搭的桌子照旧摆在下城那块空地上，地精坊还新打了一口井，井绳还是从你们车上拆下来的。"
   },
   {
    "if": "flag.compact_none",
    "text": "城里还是没人管，三家各占着一道门，各收各的税，如今进一趟下城，得交三回钱。"
   },
   {
    "if": "flag.korgus_rite",
    "text": "至于杜坎森那件事，说书的讲成了有个兽人女人把他磨成粉，撒进了风里，每回讲到这儿，听书的人都扭过头去看乌什卡。"
   },
   {
    "if": "flag.korgus_son",
    "text": "杜坎森的骨头如今放在长者郡，每年到了银现月，古尔赞的人就抬着它绕着火走上一圈，去的酋长一年比一年多。"
   },
   {
    "if": "flag.korgus_spike",
    "text": "杜坎森的头在城门上挂了两年，早叫鸟啄干净了，后来也不知道给谁偷走了，只有城门上那颗钉子还在。"
   },
   {
    "if": "flag.korgus_sold",
    "text": "杜坎森留在了银池湖边上，有人说，铁杖骑士团那儿有具个头特别大的骷髅，天天扛着石头修墙。"
   },
   {
    "if": "flag.korgus_lake",
    "text": "杜坎森沉在银池湖里，打鱼的都说，开春的时候有人看见他在湖心游水，来买鱼的人就爱听这一段。"
   },
   {
    "if": "flag.korgus_carver",
    "text": "杜坎森的骨头落到了雕骨者手里，如今东坎诺每个集上都有人卖“杜坎森的指骨”，三个金冠一根，卖出去的加起来够拼出十个他了。"
   },
   {
    "if": "party.tan",
    "text": "阿坦今年二十二了，下巴上冒出一圈软软的胡子，他说庙里没有镜子，没法刮。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西的账本已经换到第三本了，头一本早就拿去垫了车轴。"
   },
   "玛瑙之门是矮人留下的一道山门，开在一面山壁上，门脸朝北，对着一片烧秃了的山坡。那片坡从前是林子，狼多，所以矮人管这道门叫狼门。铁闸悬在半截，早就锈成了一整块，门洞底下搭着二十几顶帐篷，帐篷布上都缝着阿斯拉银行的徽记。",
   "加莱尔·守昔者正坐在门洞外头的界石上等你们，本子揣在怀里，没有摊开。她父母跟着探险队进山勘测，说好了入冬以前回来，可如今冬天都过完了，又过去了一个多月，人还是没出来。",
   {
    "if": "is.immortal",
    "text": "车底下那卷铺盖五年没晒，长了一层白毛，你身上倒是什么也没长。"
   },
   {
    "if": "is.immortal",
    "text": "加莱尔从本子里抽出一张纸来，是五年前给你画的速写，她举着纸跟你的脸对了对，然后把它撕了。"
   },
   {
    "if": "is.immortal",
    "speaker": "加莱尔",
    "text": "看来用不着再画了。我就写“未见衰老”四个字，这样写对吧？"
   },
   {
    "if": "is.immortal && party.ushka",
    "speaker": "乌什卡",
    "text": "都五年了，你连指甲都没长坏。"
   },
   {
    "speaker": "加莱尔",
    "text": "我想雇你们进山一趟。是编年史家出的悬赏，还照老价钱，路上的花销另算。"
   }
  ],
  "first": [
   {
    "if": "party.ushka && approval.ushka <= -4",
    "then": [
     "companion -ushka gone",
     "flag ushka_left",
     "log 乌什卡离了车。她走前把那根木签插在了车辕上。"
    ]
   },
   "companion +garaele",
   "quest q_parents start",
   "codex khugdihr"
  ],
  "choices": [
   {
    "text": "问她为什么找你们",
    "once": true,
    "effects": [
     "approval garaele +1"
    ],
    "result": [
     {
      "speaker": "加莱尔",
      "text": "你们进去几个人，出来还是几个人，数目对得上。会里的账我翻过了，东坎诺这么多冒险团，对得上数的只有你们一家。"
     },
     "她顿了一下，又补上一句，说她父母那一队出闸的时候是十一个人。"
    ]
   },
   {
    "text": "拦下后头骑骡子追上来的那个人",
    "if": "!flag.groundhawk_deed && rep.corintar >= 1",
    "once": true,
    "effects": [
     "flag groundhawk_deed",
     "item +groundhawk_deed",
     "world room +1",
     "quest q_debt stage 2",
     {
      "if": "party.nixee",
      "then": [
       "approval nixee +2"
      ]
     }
    ],
    "result": [
     "原来是蓝牙派来的信使，一路上跑死了一头骡子，他递过来一个油布包，里头是康原的地契，蓝牙已经盖了印，背面还写着一行“欠她的，我先还一样”。",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "你收着吧，我自己的口袋呀，我可信不过。"
     }
    ]
   },
   {
    "text": "跟她进营",
    "goto": "a2_02"
   }
  ]
 },
 "a2_02": {
  "id": "a2_02",
  "title": "四十四页的约",
  "art": "ev_anb_global_trade",
  "loc": "玛瑙之门 · 阿斯拉探险队的营地",
  "text": [
   "领着这支探险队的贾尔蒙·阿斯拉是个矮人，今年一百六十岁了，胡子掖在腰带里，免得蘸着墨，面前摊着探险队的章程，一共四十四页，拿铜扣钉成一册。银行派来的出纳蹲在门口，手里拿根刻痕棍点人头，点一个就刻一道。",
   {
    "speaker": "贾尔蒙",
    "text": "这份约一共四十四页，头一页就写明白了，先算账，后谈光荣。我今年一百六了，光荣我见过不少，账可是从来没平过。"
   },
   "门楼里又住进了一窝地精。1444 年探险队头一回来的时候撵散过一窝，可这几年他们又一家一家地摸了回来。矮人的门把手开在齐胸高的地方，他们就在每扇门上膝盖那么高的地方，又凿了一个把手。",
   {
    "speaker": "贾尔蒙",
    "text": "门楼是堡里的，堡归银行管，可地精归谁管，章程上没写。你们是外人，劳驾说句话吧，外人说的话，我才好往账上记。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "规矩第三十一条，有人请你说公道话，得先问清楚是谁付钱呀。"
   },
   {
    "if": "flag.goblins_handed",
    "text": "门楼的窗口趴着个老地精，他看了看你们的车，就把窗板关上了。五年前地下通道里那一车人，里头有他认得的。"
   }
  ],
  "choices": [
   {
    "text": "借勘测队的出入簿翻一翻",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你翻到了银现月初的那一页，上头记着守昔者夫妇，十一人出闸，走旧线，往交轨大厅，两个名字旁边还各画了一个小月牙。",
     "effects": [
      "quest q_parents stage 2",
      {
       "if": "party.garaele",
       "then": [
        "approval garaele +1"
       ]
      }
     ]
    },
    "fail": {
     "text": [
      "谁知这簿子是按欠款排的，不是按日子排的，你翻了足足半个时辰，出纳冲你伸出了两根指头。",
      {
       "speaker": "出纳",
       "text": "翻簿子是按页收钱的。他们往交轨大厅去了，走的是旧线，就这一句话，算你五个金冠。"
      }
     ],
     "effects": [
      "gold -5",
      "quest q_parents stage 2"
     ]
    }
   },
   {
    "text": "帮着把门楼里的地精撵出去",
    "effects": [
     "flag khug_goblins_out",
     "world room -1",
     "rep companies +1",
     "approval nixee -2"
    ],
    "result": "探险队的人提着长柄锤上了门楼，地精们背着锅从侧门走了，最后出来的那个回头看了你一眼，把膝盖高的那个门把手掰了下来，揣进怀里。",
    "goto": "a2_03"
   },
   {
    "text": "让妮克西替他们谈一份租约",
    "if": "party.nixee",
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "party": true,
     "adv": "is.goblin",
     "dis": "flag.goblins_handed",
     "mods": [
      {
       "if": "flag.groundhawk_deed",
       "n": 1,
       "why": "地契上有蓝牙的印"
      }
     ]
    },
    "ok": {
     "text": [
      "妮克西跟老地精蹲在门槛上，谈了足有一顿饭的工夫，末了贾尔蒙在第四十五页上添了一条，门楼按月收租，一个月三筐蘑菇，或者拿等价的铁钉来抵。",
      {
       "speaker": "妮克西",
       "text": "三筐哎！我本来只要两筐的，第三筐是他自己加上去的呀。"
      }
     ],
     "effects": [
      "flag khug_goblins_lease",
      "world room +1",
      "approval nixee +1"
     ],
     "goto": "a2_03"
    },
    "fail": {
     "text": "刚谈到第二筐蘑菇，出纳在旁边插了一句“利息另算”，老地精当场就把窗板关上了，贾尔蒙也在章程边上画了个叉。",
     "effects": [
      "rep companies -1"
     ],
     "goto": "a2_03"
    }
   },
   {
    "text": "你自己去替他们谈一份租约",
    "if": "!party.nixee",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": "is.goblin",
     "dis": "flag.goblins_handed"
    },
    "ok": {
     "text": "你跟老地精蹲在门槛上，把每个月几筐蘑菇能抵多少租子来回算了三遍，贾尔蒙这才在章程第四十五页上添了一条。",
     "effects": [
      "flag khug_goblins_lease",
      "world room +1"
     ],
     "goto": "a2_03"
    },
    "fail": {
     "text": "你刚说到“按月”，老地精就问你一个月是几天。地底下的一个月到底是几天，你答不上来，他就把窗板关上了。",
     "effects": [
      "rep companies -1"
     ],
     "goto": "a2_03"
    }
   },
   {
    "text": "说这事你们不掺和",
    "effects": [
     "approval nixee -1"
    ],
    "result": [
     {
      "speaker": "贾尔蒙",
      "text": "那就记上，外人，无意见。这样也好，好记。"
     },
     "他在账上写了一行字，门楼的窗板开了条缝，随后又合上了。"
    ],
    "goto": "a2_03"
   }
  ]
 },
 "a2_03": {
  "id": "a2_03",
  "title": "三百一十二条",
  "loc": "玛瑙之门 · 闸口",
  "text": [
   "午后，矮人的负怨者兵团到了，两百来号人，多半是红胡子，车上拉着撬棍和铅坠，还有一捆一捆的账页。队长基尔杜姆·终怨者今年三十岁，一连喊了三回“列队”，老兵们照旧蹲在地上抽烟斗。",
   "走在最前头的是贝尔格拉克·穴居者，他是科琳之环的旧人，手里拿着一卷名单，展开来有一人高。",
   {
    "speaker": "贝尔格拉克",
    "text": "一共三百一十二条。头一条是议会之门，灰前五千八百八十八年的事，咱们就从后往前一条一条讨。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "我想雇你们走一趟。你们进去几个，出来还是几个，数目对得上，兵团的数可是从来对不上。"
   },
   {
    "speaker": "基尔杜姆",
    "text": "我才是队长。名单是他的，兵团是我的，账本嘛……账本算大家的。"
   },
   {
    "speaker": "布罗克",
    "text": "新铲子，在红宝石领打的。"
   },
   {
    "if": "origin != 'grudge'",
    "text": "五年前布罗克在你们车上待过一阵，签完字就回红宝石领交差去了，这回他认出了那辆板车，一声不响地走过来，拍了拍车辕。"
   },
   {
    "if": "origin == 'grudge'",
    "text": "基尔杜姆从车上搬下来一个油布包，足有四十斤重，往你怀里一塞，里头是兵团的账本。他说背账本的是你，划账的也是你，他自己只管喊列队。"
   },
   {
    "if": "is.god",
    "text": "贝尔格拉克把名单翻到最后一页，提笔添了一条，第三百一十三，某神，玛瑙之门，一四二四，未到，添完他抬起头来看着你。"
   },
   {
    "if": "is.god",
    "speaker": "贝尔格拉克",
    "text": "那一年，你在哪儿呢？"
   },
   {
    "if": "is.god",
    "text": "基尔杜姆和几个老兵为了一件事吵了足足一刻钟，吵的是神能不能记成欠债的那一方，到头来也没吵出个结果，名单上添的那一条就先留着了。"
   }
  ],
  "first": [
   "companion +belgrak",
   "codex grudgebearers",
   {
    "if": "origin == 'grudge'",
    "then": [
     "item +grudge_book"
    ]
   },
   {
    "if": "is.god",
    "then": [
     "flag entry_313"
    ]
   }
  ],
  "choices": [
   {
    "text": "先问名单最末一条是什么",
    "once": true,
    "effects": [
     "approval belgrak +1"
    ],
    "result": [
     {
      "speaker": "贝尔格拉克",
      "text": "玛瑙之门，一四二四年。"
     },
     {
      "if": "flag.entry_struck",
      "text": "他把名单翻过来给你看，那一条已经划掉了，墨是你的墨，字也是你的字，他说红宝石领那边已经认了，就是账房先生还不大乐意。"
     }
    ]
   },
   {
    "text": "看他说话时的眼睛",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13
    },
    "ok": {
     "text": "你留意到，他说“从后往前讨”的时候，压根没提讨完了怎么回来。那张名单上只有往里走的路。",
     "effects": [
      "flag a2_knows_belgrak"
     ]
    },
    "fail": {
     "text": [
      "他发觉你在盯着他看。",
      {
       "speaker": "贝尔格拉克",
       "text": "看什么呢，我牙上有菜啊？"
      }
     ],
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "认下名单上“花仇”那一笔，付军械钱",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons' && !flag.a2_flower",
    "once": true,
    "req": "gold >= 80",
    "reqText": "需要 80 金冠",
    "effects": [
     "flag a2_flower",
     "gold -80",
     "rep companies +1",
     "codex lilac_wars"
    ],
    "result": [
     "丁香战争打到第二十几年，达梅里亚欠下了红宝石领一批戟头的钱。矮人管那场仗叫“花仇”，明明是你们自家人打的仗，账却记在了他们这儿。",
     {
      "speaker": "贝尔格拉克",
      "text": "八十，收下了。这一条划掉，主动上门来还的，你还是头一个。"
     }
    ]
   },
   {
    "text": "请贝尔格拉克把“花仇”那一笔划掉",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons' && !flag.a2_flower",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "item.moon_badge",
       "n": 1,
       "why": "银月徽"
      }
     ]
    },
    "ok": {
     "text": "你说欠钱的那位大公如今埋在花圃底下，连座坟都没有，贝尔格拉克想了一会儿，在那一条上划了一道。",
     "effects": [
      "flag a2_flower",
      "rep moon +1",
      "codex lilac_wars"
     ]
    },
    "fail": {
     "text": [
      {
       "speaker": "贝尔格拉克",
       "text": "人是死了，可账没死。你们人类哪，老是把这两样弄混。"
      },
      "旁边几个老兵都把你这张脸记住了。"
     ],
     "effects": [
      "flag a2_flower",
      "rep companies -1",
      "codex lilac_wars"
     ]
    }
   },
   {
    "text": "装没听见“花仇”这两个字",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons' && !flag.a2_flower",
    "once": true,
    "effects": [
     "flag a2_flower",
     "rep companies -1"
    ],
    "result": "贝尔格拉克念到那一条的时候停了停，看了你一眼，又接着往下念了。"
   },
   {
    "text": "在名单上找你家的姓",
    "tag": "矮人",
    "if": "is.dwarf",
    "once": true,
    "req": "gold >= 20",
    "reqText": "需要 20 金冠",
    "effects": [
     "gold -20",
     "rep companies +1",
     "approval belgrak +1"
    ],
    "result": [
     "贝尔格拉克连问都没问，直接翻到了第二百零七条，上头记的是你曾祖父，欠红宝石领一位酒馆老板娘两桶黑麦酒，灰元一一九〇年。",
     {
      "speaker": "贝尔格拉克",
      "text": "两桶酒，按今天的价是二十。利息我就不算了，老板娘都埋了一百年了。"
     },
     "你把钱付了，他在那一条上划了一道，又在旁边写上“曾孙还”三个字。"
    ]
   },
   {
    "text": "接下这趟活",
    "effects": [
     "quest q_list start",
     "gold +100"
    ],
    "result": [
     "定金是一百，装在一只编了号的皮袋里，袋子上的号码正是三百一十二。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "我父母那一页，排在第几条呢？"
     },
     {
      "if": "party.garaele",
      "speaker": "贝尔格拉克",
      "text": "他们不在名单上，在合同上。合同可比名单好讨多了。"
     }
    ],
    "goto": "a2_04"
   }
  ]
 },
 "a2_04": {
  "id": "a2_04",
  "title": "备远征",
  "art": "ev_cave",
  "loc": "玛瑙之门 · 营地",
  "text": [
   "照矮人远征的老规矩，出发以前得办四件事，图要重画一遍，粮要封好，席要办一桌，饷要先发。四件都办齐了的队伍，回来的时候是要游一趟街的。",
   "贾尔蒙的军需官是个银矮人，鼻梁上架着两副眼镜，一副看货，一副看你。玛瑙之门的矮人从前替整座山记账，谁出门，背包里装了什么都得过秤。她也照着这老规矩，把你们的包一个一个倒在毡子上，绳子几尺、火绒几两，全记进了一本小册子里。",
   "布罗克在一边磨他那把新铲子，磨一下，就拿拇指试一下。",
   {
    "if": "party.ushka",
    "text": "乌什卡的包倒出来只有三样东西，一把刀，一把锤，还有一根木签，军需官在册子上写了三行，又盯着那根木签看了看，到底没写什么。"
   },
   {
    "if": "party.tan",
    "text": "阿坦在一根蜡烛上刻了二十四道痕，一道算一个时辰，他把蜡烛点着了，盯着它看，说烧到第六道就算是天亮了。"
   },
   {
    "if": "party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)",
    "text": "阿坦盯着蜡烛，头也不抬地问你，上回跟丧家说的那一句是真的吗，你还没来得及张嘴，他又说，算了，我数着呢。"
   }
  ],
  "first": [
   {
    "if": "party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)",
    "then": [
     "approval tan -1"
    ]
   }
  ],
  "shop": {
   "name": "阿斯拉的军需官",
   "blurb": "军需官戴着两副眼镜，守着一本价目，地精的蘑菇摊也借她的秤用。",
   "stock": [
    "greater_healing_potion",
    "strong_antitoxin",
    "bandage",
    "hold_shield",
    "chain_mail",
    "splint",
    "warhammer",
    "heavy_crossbow",
    "ward_runestone",
    {
     "id": "troll_blood_tonic",
     "if": "flag.khug_goblins_lease"
    },
    {
     "id": "goblin_bomb",
     "if": "flag.khug_goblins_lease"
    }
   ],
   "markup": 1.2
  },
  "choices": [
   {
    "text": "照旧图把路重画一遍",
    "once": true,
    "check": {
     "skill": "investigation",
     "alt": [
      "history"
     ],
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "is.dwarf",
       "n": 1,
       "why": "矮人的图你看得懂"
      },
      {
       "if": "item.grudge_book",
       "n": 2,
       "why": "兵团的账本里夹着旧图"
      }
     ]
    },
    "ok": {
     "text": "玛瑙之门的人到底是给整座山记账的，旧图上每一段轨都标着里数，连哪个岔口有口好井都记着。你拿红墨把塌了的那几处一一补了上去。",
     "effects": [
      "var prep +1"
     ]
    },
    "fail": {
     "text": "这图还是灰前的东西，你画到第三段才发觉，自己把上下两层拼到一块儿去了，只好揉掉重来，这时候天已经黑了。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "腌肉、封粮",
    "once": true,
    "check": {
     "skill": "survival",
     "alt": [
      "medicine"
     ],
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "盐抹了三遍，封口用的是蜡，罐底还垫了一层干苔，军需官拿第二副眼镜看了看，点了点头。",
     "effects": [
      "var prep +1"
     ]
    },
    "fail": {
     "text": "到了第二天早上，有一罐肉鼓了盖，你们只好把它埋了，埋的时候乌什卡还说埋得太浅。",
     "effects": [
      "gold -15"
     ]
    }
   },
   {
    "text": "办一桌席，唱几段",
    "if": "!flag.a2_feast",
    "once": true,
    "check": {
     "skill": "performance",
     "alt": [
      "persuasion"
     ],
     "dc": 12
    },
    "ok": {
     "text": "你唱到第三段，老兵们拿杯底敲起了桌子，给你打拍子，基尔杜姆头一回没喊列队，大家是自己站起来的。",
     "effects": [
      "flag a2_feast",
      "var prep +1",
      "rep companies +1"
     ]
    },
    "fail": {
     "text": "可惜你唱的是人类的歌，矮人们客客气气地听完，又接着喝他们自己的去了。席钱还是得照付。",
     "effects": [
      "flag a2_feast",
      "gold -10"
     ]
    }
   },
   {
    "text": "不唱了，跟老兵们拼酒",
    "if": "!flag.a2_feast",
    "once": true,
    "check": {
     "abil": "con",
     "dc": 13,
     "save": true
    },
    "ok": {
     "text": "第七杯刚放下，对面那个老兵就扶着桌子说，你肚子里有一口井，这话后来在兵团里传开了，在他们那儿算是夸人的。",
     "effects": [
      "flag a2_feast",
      "var prep +1",
      "rep companies +1"
     ]
    },
    "fail": {
     "text": "才喝到第四杯，你眼前就有了两个基尔杜姆，第二天你头疼到了中午，布罗克替你多磨了一回铲子。",
     "effects": [
      "flag a2_feast",
      "hp -4"
     ]
    }
   },
   {
    "text": "给弟兄们先发一个月的饷",
    "once": true,
    "req": "gold >= 80",
    "reqText": "需要 80 金冠",
    "effects": [
     "gold -80",
     "var prep +1"
    ],
    "result": [
     "出纳在棍上刻了八十道，老兵们排着队领钱，领完了都把钱袋系在腰带里侧。",
     {
      "speaker": "布罗克",
      "text": "先拿钱，再下井，这规矩比祖宗还老呢。"
     }
    ]
   },
   {
    "text": "看看乌什卡的木签",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "quest q_ushka stage 2",
     "approval ushka +1"
    ],
    "result": [
     "木签上原先刻着十一条，这五年里她又刻了三道，划掉了两道，剩下的那一道刻的是“先报名号，再动手”。",
     {
      "speaker": "乌什卡",
      "text": "划掉的那两条不对，骑士自己也不照着做。"
     }
    ]
   },
   {
    "text": "听阿坦讲地底下怎么算天亮",
    "if": "party.tan",
    "once": true,
    "effects": [
     "approval tan +1"
    ],
    "result": [
     {
      "speaker": "阿坦",
      "text": "一根蜡烛烧一天，上头有二十四道，烧到第六道，外头天就亮了。我念四十句，念完它正好烧到第六道半。"
     },
     {
      "speaker": "阿坦",
      "text": "要是山里的蜡烛烧得快，那我就是提前念了。提前念应该不要紧的，王不挑这个。"
     }
    ]
   },
   {
    "text": "跟军需官玩两把骰子",
    "tag": "游荡者",
    "if": "class == 'rogue'",
    "once": true,
    "effects": [
     "item +greater_healing_potion"
    ],
    "result": "她的骰子是灌过铅的，你的也灌过，两个人大眼瞪小眼看了一会儿，她换了一副干净的出来。到头来你赢了一瓶大药水，她赢走了你半条腰带。"
   },
   {
    "text": "睡一整夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "门洞里的风是从山肚子里往外吹的，带着一股铁锈和凉水的味儿，你一觉睡到了出纳来点人头的时候。"
   },
   {
    "text": "出发",
    "goto": "a2_05",
    "result": [
     "兵团和探险队的人在闸口排成了两排，出纳把人头点了一遍，在刻痕棍上刻了个记号。",
     {
      "if": "var.prep >= 4",
      "text": "四件事全都办齐了，贾尔蒙说，回来的时候要是人数也齐，他自掏腰包请大家游街。"
     },
     {
      "if": "var.prep <= 1",
      "text": "贾尔蒙看了看你们准备的东西，什么也没说，只在账上多留了一页空白。"
     }
    ]
   }
  ]
 },
 "a2_05": {
  "id": "a2_05",
  "title": "死铁道",
  "art": "ev_dwarven_rail",
  "loc": "矮人之路 · 头三段",
  "date": "1450年夏初",
  "text": [
   "进了闸口就是矮人之路，脚底下的铁道是拿达格银打的，六千年没人修了，它自己却还在长，断口上冒出一层新茬，摸上去是温的。有几段到如今还带着电，轨面上隔一会儿就爬过一道蓝光，噼啪响一声。",
   "轨枕之间每隔几步就躺着一具矮人的遗骨，有的还穿着甲，有的只剩下一只靴子，可脸全都朝着你们来的方向，朝着玛瑙之门。",
   {
    "speaker": "贝尔格拉克",
    "text": "这一具是灰前五千八百七十六年的，就是铁道停的那一年。那年玛瑙之门把这条道封了，封口就在你们身后。这些人是往门这边逃的，逃到了跟前，门没开。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "往前那一具晚了三百年，也是往这边走的。往家走的人，朝向都是一个样。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "躺了这么久，也没人来动过。这条道上的死人算是有福气的。"
   },
   {
    "if": "party.tan",
    "text": "阿坦每走过一具都要停一步，嘴里并不出声，你数了数，他前前后后停了二十几回。"
   },
   "第三段尽头的桥塌了一半，只剩两根轨悬在半空里，桥那头黑漆漆的地方，有什么东西正在嚼木头。"
  ],
  "first": [
   "codex dwarovrod"
  ],
  "choices": [
   {
    "text": "看清哪几段轨是活的",
    "once": true,
    "check": {
     "skill": "arcana",
     "alt": [
      "investigation"
     ],
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "活的那几段，轨面底下有一层很淡的纹路，一明一暗的，跟喘气一样，你拿粉笔在枕木上一一做了记号。",
     "effects": [
      "flag a2_live_known"
     ]
    },
    "fail": {
     "text": "你刚蹲下去看，打头的人已经一脚踩上了发亮的那一段，鞋钉上炸开一串火星，他躺在地上，半天说不出话来。",
     "effects": [
      "damage 2d6"
     ]
    }
   },
   {
    "text": "踩着悬空的两根轨过桥",
    "check": {
     "skill": "acrobatics",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你张开两只胳膊走了过去，后头的人也一个接一个跟了上来，最后一个刚落脚，对面嚼木头的声音就停了。",
     "combat": {
      "title": "断桥那头",
      "intro": "两头巨魔蹲在轨上，一头还在啃一截枕木，另一头先站了起来，头顶都蹭到了洞顶的石笋。",
      "enemies": [
       {
        "id": "troll",
        "n": 2
       }
      ],
      "specials": [
       {
        "id": "lure",
        "name": "把它们引到活轨上",
        "desc": "那几段轨还带着电，巨魔的脚又是湿的。",
        "check": {
         "skill": "athletics",
         "alt": [
          "deception"
         ],
         "dc": 13,
         "adv": "flag.a2_live_known"
        },
        "success": {
         "text": "你踩着枕木往回跑，两头巨魔一路追上了那段亮着的轨，只听噼啪一声，洞里顿时一股烧毛的味儿。",
         "dmgAll": "4d6",
         "type": "lightning"
        },
        "fail": {
         "text": "你没算准是哪一段，结果电先找上了你自己的鞋钉。",
         "selfDmg": "2d6",
         "type": "lightning"
        }
       },
       {
        "id": "oil",
        "name": "泼灯油，点火",
        "desc": "巨魔的伤口会自己长好，可烧过的地方长得慢。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "一罐灯油泼在了打头那头的胸口上，火绳一碰就着，它扑腾着拿手去拍，谁知越拍越旺。",
         "dmgAll": "2d6",
         "type": "fire",
         "applyAll": {
          "cond": "burning",
          "turns": 2
         }
        },
        "fail": {
         "text": "罐子砸在轨上碎了，油顺着枕木淌开，烧起来的反倒是你们自己这边的半截路。",
         "selfDmg": "1d6",
         "type": "fire"
        }
       }
      ],
      "xp": 400,
      "win": {
       "goto": "a2_05b"
      },
      "lose": {
       "effects": [
        {
         "if": "var.prep >= 1",
         "then": [
          "var prep -1"
         ]
        },
        "hp 1"
       ],
       "goto": "a2_05b"
      },
      "fled": {
       "effects": [
        {
         "if": "var.prep >= 1",
         "then": [
          "var prep -1"
         ]
        }
       ],
       "goto": "a2_05b"
      },
      "reward": [
       "item +dagrite_shard 2"
      ]
     }
    },
    "fail": {
     "text": "走到一半你脚下一滑，抱着轨吊了好一会儿才爬上去，半袋粮掉进了底下的黑地里，对面那东西也给吵醒了。",
     "effects": [
      "hp -4",
      {
       "if": "var.prep >= 1",
       "then": [
        "var prep -1"
       ]
      }
     ],
     "combat": {
      "title": "断桥那头",
      "intro": "两头巨魔蹲在轨上，一头还在啃一截枕木，另一头先站了起来，头顶都蹭到了洞顶的石笋。",
      "enemies": [
       {
        "id": "troll",
        "n": 2
       }
      ],
      "specials": [
       {
        "id": "lure",
        "name": "把它们引到活轨上",
        "desc": "那几段轨还带着电，巨魔的脚又是湿的。",
        "check": {
         "skill": "athletics",
         "alt": [
          "deception"
         ],
         "dc": 13,
         "adv": "flag.a2_live_known"
        },
        "success": {
         "text": "你踩着枕木往回跑，两头巨魔一路追上了那段亮着的轨，只听噼啪一声，洞里顿时一股烧毛的味儿。",
         "dmgAll": "4d6",
         "type": "lightning"
        },
        "fail": {
         "text": "你没算准是哪一段，结果电先找上了你自己的鞋钉。",
         "selfDmg": "2d6",
         "type": "lightning"
        }
       },
       {
        "id": "oil",
        "name": "泼灯油，点火",
        "desc": "巨魔的伤口会自己长好，可烧过的地方长得慢。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "一罐灯油泼在了打头那头的胸口上，火绳一碰就着，它扑腾着拿手去拍，谁知越拍越旺。",
         "dmgAll": "2d6",
         "type": "fire",
         "applyAll": {
          "cond": "burning",
          "turns": 2
         }
        },
        "fail": {
         "text": "罐子砸在轨上碎了，油顺着枕木淌开，烧起来的反倒是你们自己这边的半截路。",
         "selfDmg": "1d6",
         "type": "fire"
        }
       }
      ],
      "xp": 400,
      "win": {
       "goto": "a2_05b"
      },
      "lose": {
       "effects": [
        {
         "if": "var.prep >= 1",
         "then": [
          "var prep -1"
         ]
        },
        "hp 1"
       ],
       "goto": "a2_05b"
      },
      "fled": {
       "effects": [
        {
         "if": "var.prep >= 1",
         "then": [
          "var prep -1"
         ]
        }
       ],
       "goto": "a2_05b"
      },
      "reward": [
       "item +dagrite_shard 2"
      ]
     }
    }
   },
   {
    "text": "把活轨的电引到大家的兵器上，再过桥",
    "tag": "施法者",
    "if": "is.caster",
    "combat": {
     "title": "断桥那头",
     "intro": "你把手按在活轨上，电顺着胳膊爬到了每个人的兵器上，头一刀砍下去，巨魔身上就冒了烟。",
     "enemies": [
      {
       "id": "troll",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "volt",
       "name": "放掉刃上的电",
       "desc": "趁刃上的电还没散，大家一齐砍下去。",
       "success": {
        "text": "几把兵器同时落下，蓝光一闪，两头巨魔身上都添了一道焦口子。",
        "dmgAll": "2d6",
        "type": "lightning"
       }
      },
      {
       "id": "lure",
       "name": "把它们引到活轨上",
       "desc": "那几段轨还带着电，巨魔的脚又是湿的。",
       "check": {
        "skill": "athletics",
        "alt": [
         "deception"
        ],
        "dc": 13,
        "adv": "flag.a2_live_known"
       },
       "success": {
        "text": "你踩着枕木往回跑，两头巨魔一路追上了那段亮着的轨，只听噼啪一声，洞里顿时一股烧毛的味儿。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "你没算准是哪一段，结果电先找上了你自己的鞋钉。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      },
      {
       "id": "oil",
       "name": "泼灯油，点火",
       "desc": "巨魔的伤口会自己长好，可烧过的地方长得慢。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "一罐灯油泼在了打头那头的胸口上，火绳一碰就着，它扑腾着拿手去拍，谁知越拍越旺。",
        "dmgAll": "2d6",
        "type": "fire",
        "applyAll": {
         "cond": "burning",
         "turns": 2
        }
       },
       "fail": {
        "text": "罐子砸在轨上碎了，油顺着枕木淌开，烧起来的反倒是你们自己这边的半截路。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "xp": 400,
     "win": {
      "goto": "a2_05b"
     },
     "lose": {
      "effects": [
       {
        "if": "var.prep >= 1",
        "then": [
         "var prep -1"
        ]
       },
       "hp 1"
      ],
      "goto": "a2_05b"
     },
     "fled": {
      "effects": [
       {
        "if": "var.prep >= 1",
        "then": [
         "var prep -1"
        ]
       }
      ],
      "goto": "a2_05b"
     },
     "reward": [
      "item +dagrite_shard 2"
     ]
    },
    "result": "你把手按在一段活轨上，电爬上胳膊，又顺着手指走到了每个人的刃上，刃口嗡嗡直响，乌什卡的锤头上还跳着蓝火。"
   }
  ]
 },
 "a2_05b": {
  "id": "a2_05b",
  "title": "轨枕之间",
  "loc": "矮人之路 · 第三段",
  "text": [
   "巨魔啃的那截枕木底下压着三具遗骨，骨头上有牙印，还是新的。",
   "再往前，一直数到第三段尽头，你们一共数出来三十一具。贝尔格拉克一具一具地报年份，加莱尔一笔一笔地记。其中有两具手攥着手，已经分不清哪块骨头是谁的了。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "要带出去，就得一具一具地裹。车上挤一挤，装得下。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "一共三十一具。名字要进账本，人要进石头，账本我这儿有，石头可在红宝石领。"
   },
   {
    "if": "is.god",
    "text": "你脚下站的那一段轨在嗡嗡地响，你往前走一步，前头那一段也跟着亮了一下，你退回来，它又暗了下去。"
   }
  ],
  "choices": [
   {
    "text": "把遗骨一具一具裹好，收上车",
    "effects": [
     "flag rail_bones",
     "rep companies +1",
     "approval ushka +1"
    ],
    "result": "你们拆了两顶帐篷来裹骨头，布罗克拿炭笔在每个包上都写了年份，装上去以后，车沉了一截。",
    "goto": "a2_06"
   },
   {
    "text": "记下位置，人先往前走",
    "effects": [
     "approval belgrak +1"
    ],
    "result": [
     {
      "speaker": "贝尔格拉克",
      "text": "记下了，三十一具，第三段，左轨。账上欠他们的是一趟车，可不是一车骨头。"
     }
    ],
    "goto": "a2_06"
   },
   {
    "text": "让整条铁道重新跑起来",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag rail_woken",
     "approval belgrak -1"
    ],
    "result": [
     "你把手掌贴在轨上，蓝光从你手底下蹿了出去，一段点亮一段，一直亮到看不见的地方，停了六千年的车皮自己滑动了起来。",
     "才一个时辰，你们就到了乔卡德枢纽。路上经过交轨大厅，转车台上的地精全都跑上车顶来看，还有一个摔了下去。",
     "这一下，山里所有的东西都听见了，远处的黑地里响起了一声骨号，接着又是一声。",
     {
      "speaker": "贝尔格拉克",
      "text": "六千年，八十三段，你只用了一个时辰。这一笔，账上没地方记啊。"
     },
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "交轨大厅住着好几百户呢，全睡在车皮里，车皮这会儿可都在跑呀！他们醒了以后住哪儿，你想过没有？"
     },
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "车是跑得快了，可死人还是那么多。"
     }
    ],
    "goto": "a2_08"
   }
  ]
 },
 "a2_06": {
  "id": "a2_06",
  "title": "交轨大厅的过路费",
  "art": "ev_goblin_ambush",
  "loc": "交轨大厅 · 转车台",
  "text": [
   "交轨大厅是当年众矮人之国的调车场，整座山里跑的车皮、送的信件，都要从这里过一道手。贝尔格拉克一进门，就没头没脑地讲起了一张快八千年前的军需单子。",
   {
    "speaker": "贝尔格拉克",
    "text": "二十九门铜臼炮，七十六辆战车，四百一十三斗硬麦，说好了正午送到的，你猜怎么着？车都卸完了，离正午还差着三分钟呢，麦子一粒都没少！这可是灰前六千五百三十八年的事啊。"
   },
   "讲完他把帽子摘下来，在手里攥了好一会儿，才又戴回去。",
   "可如今这大厅早就换了模样，转车台上一圈一圈停着几百节车皮，节节都住着铁路潜伏者氏族的地精，家家晾着衣裳，冒着炊烟。头领布拉克就坐在调度亭里守着一块账板，谁想从这儿过，都得按车皮给他交钱。",
   {
    "speaker": "布拉克",
    "text": "兵团那两百号人嘛，基尔杜姆早就按团价付过了，可你们不在那张单子上呀，得另算。我这儿的规矩是一节车皮四十，人头一个十五，要是拉着死人呢，另算，一具五个。我瞧瞧啊，你们这一车……就给一百五吧。"
   },
   {
    "if": "flag.rail_bones",
    "speaker": "布拉克",
    "text": "车上那三十一包骨头我也瞧见啦，照规矩还得再加一百五十五。唉，算了算了，都死了六千年了，我还收人家的钱干什么，这一笔就给你们抹了吧。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "哎，先别急着掏钱呀！规矩第七条，做买卖得先讲价，这个让我来。"
   },
   {
    "if": "party.belgrak",
    "text": "贝尔格拉克的手一直搁在斧柄上，他说账上记着铁路潜伏者四笔，最近的一笔是一车皮铅锭。"
   }
  ],
  "choices": [
   {
    "text": "照价付一百五",
    "if": "!flag.a2_haggle_failed",
    "req": "gold >= 150",
    "reqText": "需要 150 金冠",
    "effects": [
     "gold -150",
     "flag a2_paid"
    ],
    "result": "布拉克在账板上划了一道，撕下一张车皮签递给你，签上画着一节车厢，车厢里还画了个小人，是躺着的。",
    "goto": "a2_07"
   },
   {
    "text": "认了，付两百",
    "if": "flag.a2_haggle_failed",
    "req": "gold >= 200",
    "reqText": "需要 200 金冠",
    "effects": [
     "gold -200",
     "flag a2_paid"
    ],
    "result": "布拉克收了钱，账板上连划都没划，直接翻过去一页。",
    "goto": "a2_07"
   },
   {
    "text": "让妮克西跟他讲价",
    "if": "party.nixee && !flag.a2_haggle_failed",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "flag.khug_goblins_lease",
       "n": 2,
       "why": "玛瑙之门那份租约传到了这儿"
      },
      {
       "if": "rep.clans >= 2",
       "n": 1,
       "why": "氏族里有人替你们说过话"
      }
     ],
     "dis": "flag.khug_goblins_out"
    },
    "ok": {
     "text": [
      "妮克西和布拉克你一条我一条，把各自记得的规矩报了一遍，报到第六十几条，布拉克认输了。最后只收六十个金冠，外加一张往后通行的约，按年续。",
      {
       "speaker": "布拉克",
       "text": "回程就不收啦。签可别丢了啊，丢了得按新客算。"
      }
     ],
     "effects": [
      "gold -60",
      "flag rail_contract",
      "world room +1",
      "item +brack_token",
      "flag a2_paid",
      "approval nixee +1"
     ],
     "goto": "a2_07"
    },
    "fail": {
     "text": [
      "妮克西才报到第十九条，布拉克就报出了一条第二百二十二，说身上要藏三把刀，一把给敌人，一把给朋友，还有一把捅自己，好栽到东家头上。这一条妮克西从没听过。",
      {
       "speaker": "布拉克",
       "text": "两百，不讲了啊。"
      }
     ],
     "effects": [
      "flag a2_haggle_failed"
     ]
    },
    "once": true
   },
   {
    "text": "你自己跟他讲价",
    "if": "!party.nixee && !flag.a2_haggle_failed",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "dis": "flag.khug_goblins_out"
    },
    "ok": {
     "text": "你把车上每样东西的轻重都报给他听，他按斤两重新算了一遍，算出来是六十，外加一张往后通行的约。",
     "effects": [
      "gold -60",
      "flag rail_contract",
      "world room +1",
      "item +brack_token",
      "flag a2_paid"
     ],
     "goto": "a2_07"
    },
    "fail": {
     "text": [
      {
       "speaker": "布拉克",
       "text": "你这讲价的样子呀，倒像个矮人。两百吧。"
      }
     ],
     "effects": [
      "flag a2_haggle_failed"
     ]
    }
   },
   {
    "text": "跟他说地精话，按亲戚价算",
    "tag": "地精",
    "if": "is.goblin",
    "effects": [
     "gold -60",
     "flag rail_contract",
     "world room +1",
     "item +brack_token",
     "flag a2_paid"
    ],
    "result": [
     "你报了自己的氏族，又说了断链那天你在哪条街上，布拉克听完把账板翻到了背面，那一面的数可就小得多了。",
     {
      "speaker": "布拉克",
      "text": "六十，签你拿着。往后你的车都按亲戚价算，不过你车上那些大个子可不算啊。"
     }
    ],
    "goto": "a2_07"
   },
   {
    "text": "翻出兵团账本里铅锭那一笔，拿它抵过路费",
    "tag": "负怨者",
    "if": "origin == 'grudge' && item.grudge_book",
    "effects": [
     "flag rail_contract",
     "world room +1",
     "item +brack_token",
     "flag a2_paid",
     "rep companies -1"
    ],
    "result": [
     "账本翻到九百多页，上头记着铁路潜伏者偷铅锭一车皮，灰元 1302 年。你当着布拉克的面把这一笔划了，在旁边写上“抵过路费，两清”。",
     {
      "speaker": "布拉克",
      "text": "一车皮铅，换你们一趟来回，划算哪。那是我爷爷偷的，我认。"
     },
     "兵团里有几个老兵把脸别了过去，那一车铅当年是他们哪一家的，你没有问。"
    ],
    "goto": "a2_07"
   },
   {
    "text": "半夜从机修棚那边摸过去",
    "check": {
     "skill": "stealth",
     "dc": 14,
     "party": true,
     "adv": "is.small"
    },
    "ok": {
     "text": "机修棚里堆着拆下来的车轮，正好把你们挡住，板车的轮子上又缠了布，一声都没响，等到天亮，转车台已经落在身后了。",
     "goto": "a2_07"
    },
    "fail": {
     "text": "偏偏有只车轮倒了，骨碌碌滚出去好远，车顶上马上亮起了一排灯笼。",
     "combat": {
      "title": "转车台",
      "intro": "车皮顶上一排脑袋缩了下去，转眼又冒出来一排，布拉克把账板往胳肢窝底下一夹，退到转车台的另一头去了。",
      "enemies": [
       {
        "id": "goblin_tinker",
        "n": 2
       },
       {
        "id": "goblin_skirmisher",
        "n": 4
       }
      ],
      "specials": [
       {
        "id": "points",
        "name": "扳道岔，放一节空车下来",
        "desc": "坡上停着一节空车皮，闸木已经松了。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 13
        },
        "success": {
         "text": "道岔咔哒一声扳了过去，空车皮顺着坡溜了下来，铁轮子碾到哪儿，地精就往两边跳，没跳开的那几个都躺下了。",
         "dmgAll": "3d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "道岔扳错了一格，空车皮停在了半坡上，地精们站在车顶上冲你鼓起了掌。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "shout",
        "name": "冲布拉克喊一个价",
        "desc": "再打下去他也得亏本，让他自己算明白。",
        "check": {
         "skill": "persuasion",
         "alt": [
          "intimidation"
         ],
         "dc": 14
        },
        "success": {
         "text": "你喊了个数，布拉克在账板上划了两下，吹了声口哨，地精们就把刀收了，有一个还替你把掉在地上的火把捡了起来。",
         "end": "win"
        },
        "fail": {
         "text": "布拉克直摇头，你喊的这个数，连车皮的折旧都不够。"
        }
       }
      ],
      "xp": 250,
      "win": {
       "goto": "a2_07"
      },
      "lose": {
       "effects": [
        "gold -100",
        "hp 1"
       ],
       "goto": "a2_07"
      },
      "fled": {
       "effects": [
        "gold -50"
       ],
       "goto": "a2_07"
      }
     }
    }
   },
   {
    "text": "不给，硬闯",
    "effects": [
     "world room -1"
    ],
    "combat": {
     "title": "转车台",
     "intro": "车皮顶上一排脑袋缩了下去，转眼又冒出来一排，布拉克把账板往胳肢窝底下一夹，退到转车台的另一头去了。",
     "enemies": [
      {
       "id": "goblin_tinker",
       "n": 2
      },
      {
       "id": "goblin_skirmisher",
       "n": 4
      }
     ],
     "specials": [
      {
       "id": "points",
       "name": "扳道岔，放一节空车下来",
       "desc": "坡上停着一节空车皮，闸木已经松了。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "道岔咔哒一声扳了过去，空车皮顺着坡溜了下来，铁轮子碾到哪儿，地精就往两边跳，没跳开的那几个都躺下了。",
        "dmgAll": "3d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "道岔扳错了一格，空车皮停在了半坡上，地精们站在车顶上冲你鼓起了掌。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "shout",
       "name": "冲布拉克喊一个价",
       "desc": "再打下去他也得亏本，让他自己算明白。",
       "check": {
        "skill": "persuasion",
        "alt": [
         "intimidation"
        ],
        "dc": 14
       },
       "success": {
        "text": "你喊了个数，布拉克在账板上划了两下，吹了声口哨，地精们就把刀收了，有一个还替你把掉在地上的火把捡了起来。",
        "end": "win"
       },
       "fail": {
        "text": "布拉克直摇头，你喊的这个数，连车皮的折旧都不够。"
       }
      }
     ],
     "xp": 250,
     "win": {
      "goto": "a2_07"
     },
     "lose": {
      "effects": [
       "gold -100",
       "hp 1"
      ],
      "goto": "a2_07"
     },
     "fled": {
      "effects": [
       "gold -50"
      ],
      "goto": "a2_07"
     }
    }
   }
  ]
 },
 "a2_07": {
  "id": "a2_07",
  "title": "蘑菇宴",
  "art": "ev_fungrum",
  "loc": "交轨大厅 · 灶间",
  "text": [
   {
    "if": "flag.a2_paid",
    "text": "付了钱的客人能吃上一顿饭。灶间设在一节旧邮车里，邮格还钉在墙上，如今里头放的是碗。锅里炖的是黄光蘑菇，炖熟了也照样发亮，连汤都是金的。"
   },
   {
    "if": "flag.a2_paid",
    "text": "掌勺的地精说，这儿的规矩是祭司先尝，尝了没事，别人才能动勺子。{?party.tan:阿坦尝了一口，说咸。|你们车上的祭司尝了一口，说咸。}一屋子地精这才低下头喝起汤来。"
   },
   {
    "if": "!flag.a2_paid",
    "text": "没给钱的客人是没有饭吃的。你们只好在铁道边上扎了个冷营，啃着干饼，轨上偶尔跳一下蓝光，就借着那点亮看看彼此的脸。"
   },
   {
    "if": "party.tan",
    "text": "阿坦掐着那根刻了痕的蜡烛做晨祷，一共四十句，他念得不快。{?flag.a2_paid:一屋子地精都端着碗看他，连勺子都停了。|铁道那头有几个放哨的地精，听着听着就坐下了。}念完第四十句，他闭上了嘴。"
   },
   {
    "if": "party.tan && flag.a2_paid",
    "speaker": "掌勺的地精",
    "text": "后头还有呢？"
   },
   {
    "if": "party.tan && flag.a2_paid",
    "speaker": "阿坦",
    "text": "还有一句的，那一句我不念。"
   },
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "我跟雷萨格头一回下这条线，那是灰元一三九……"
   },
   {
    "if": "party.belgrak",
    "text": "他没再往下说，只是把烟斗磕了磕。"
   },
   {
    "if": "party.garaele",
    "text": "加莱尔回来的时候，手里攥着一张纸，是一个地精卖给她的。那地精说，三个月前有一对精灵夫妇打这儿路过，拿纸和墨付的过路费，后来往乔卡德枢纽去了。纸上是她母亲的字，写的是一张收条。"
   }
  ],
  "choices": [
   {
    "text": "喝那锅炖菜",
    "if": "flag.a2_paid",
    "once": true,
    "check": {
     "abil": "con",
     "dc": 12,
     "save": true,
     "adv": "is.goblin"
    },
    "ok": {
     "text": "汤有点辣，回味里带着一股土味儿，你一口气喝了两碗，嘴唇亮了一个晚上。",
     "effects": [
      "heal 2d4"
     ]
    },
    "fail": {
     "text": "过了半个时辰，你脸上起了一片紫点子。地精们说这叫紫热，喝错了锅的都这样，到明天早上就消了，他们笑了整整一晚上，第二天还在笑。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "看布拉克跟谁说话",
    "if": "flag.a2_paid",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "饭吃到一半，布拉克出去了一趟，回来的时候腰上多了一串黑石头珠子，那种石头只有黑皮兽人才用。原来过路人往哪边走，他也是拿来卖的。",
     "effects": [
      "flag a2_brack_seen"
     ]
    },
    "fail": {
     "text": "你盯了他一个晚上，只看出来他饭量很大，临走的时候他拍了拍你的肩膀，说盯人也算一门手艺，回头得按次收钱。",
     "effects": [
      "gold -2"
     ]
    }
   },
   {
    "text": "再塞他六十，把嘴堵上",
    "if": "flag.a2_brack_seen && !flag.rail_contract",
    "once": true,
    "req": "gold >= 60",
    "reqText": "需要 60 金冠",
    "effects": [
     "gold -60",
     "flag brack_bought"
    ],
    "result": [
     {
      "speaker": "布拉克",
      "text": "你们往哪边走，我可不知道，我连你们来没来过都不知道呀。不过这个价钱，只管一个月啊。"
     }
    ]
   },
   {
    "text": "提一句你们俩签过的那张约",
    "if": "flag.a2_brack_seen && flag.rail_contract",
    "once": true,
    "effects": [
     "flag brack_bought"
    ],
    "result": [
     {
      "speaker": "布拉克",
      "text": "约上有这么一条，签了约的车就算自家的车，自家的车往哪儿走，是不往外说的。这一条还是我自己写的呢，瞧我，差点给忘了。"
     }
    ]
   },
   {
    "text": "躺下，等蜡烛烧到第六道",
    "effects": [
     "rest short"
    ],
    "result": "{?party.tan:你们轮流守夜。什么时候算天亮，由阿坦说了算，他说亮了，大家就起来。|你们轮流守夜，谁也不知道外头几时天亮，睡够了就起来。}",
    "goto": "a2_08"
   }
  ]
 },
 "a2_08": {
  "id": "a2_08",
  "title": "勘测营",
  "art": "ev_dark_expedition",
  "loc": "乔卡德枢纽以西 · 一处泵房",
  "text": [
   "你们在乔卡德枢纽西边的一座泵房里找到了勘测营。泵房是胡尔-乔卡德的矮人修的，墙里走着一人粗的铅管，管口还挂着干了的水锈。墙角支着两张铺，铺上躺着两具遗体，各自盖着自己的斗篷，已经三个月了。",
   "屋里的东西没怎么翻动过，墨水瓶还立着，笔还插在里头，门是从里面拿一张桌子顶上的，桌子腿已经断了。",
   "桌上摊着一本勘测簿，最后一行是女人的笔迹，写的是“铅管内壁无锈，乔卡德的匠人不拿铅走饮水，此说可信”。写到这儿滴了一点墨，就没有再往下写了。",
   {
    "if": "party.ushka",
    "text": "乌什卡头一个进去看了伤，看完出来洗手，洗了很久。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "是黑石头的矛头，崩在骨头里了，一共三处。"
   },
   {
    "if": "is.god",
    "text": "加莱尔站在门口。你刚要开口，她倒先说话了。"
   },
   {
    "if": "is.god",
    "speaker": "加莱尔",
    "text": "请别。我要记下来的，是他们死了。"
   },
   {
    "if": "!is.god",
    "text": "加莱尔站在门口，把本子打开了又合上，始终没有进去。"
   },
   {
    "speaker": "加莱尔",
    "text": "他们走得快吗？"
   }
  ],
  "first": [
   "codex pastkeepers",
   "quest q_parents stage 3",
   "item +rubbing_book"
  ],
  "choices": [
   {
    "text": "找他们藏起来的东西",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "烟道口那几块砖上的灰是新抹的。你抽出两块砖，里面藏着一本拓片本，拿油布包了三层。看那灰干的样子，本子是先藏好的，桌子是后来才顶上的。",
     "effects": [
      {
       "if": "party.garaele",
       "then": [
        "approval garaele +1"
       ]
      }
     ]
    },
    "fail": {
     "text": "你们拆了半面墙，才在烟道里摸到了那本拓片本，拆的时候还有一块砖砸在了你脚背上。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "看他们是怎么走的",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "母亲的伤都在身子前面，一共三处，她是站着挨的。父亲伤在腿上，他是自己爬回铺上去的，爬了好一段。他们走得不快。"
    },
    "fail": {
     "text": "你看了半天，只看出他们是一块儿躺下的，手背还叫铅管上的毛刺刮了一道。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "告诉她走得快，没受什么罪",
    "effects": [
     "var lies +1",
     "flag lied_to_garaele"
    ],
    "result": [
     "她点了点头，在本子上写了一行字，写得很慢，写完了又把那一行看了两遍。",
     {
      "if": "party.ushka",
      "text": "乌什卡在你身后哼了一声，转身裹斗篷去了。"
     }
    ],
    "goto": "a2_09"
   },
   {
    "text": "照实说：走得不快",
    "effects": [
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +1"
      ]
     }
    ],
    "result": [
     "你把门、桌子和那三处伤一样一样跟她说了。她一边听一边记，中间只问了一句，桌子是谁顶上去的。",
     {
      "speaker": "加莱尔",
      "text": "是我母亲顶的。她顶门哪，从来都顶不牢。"
     }
    ],
    "goto": "a2_09"
   },
   {
    "text": "让乌什卡自己答",
    "if": "party.ushka",
    "effects": [
     "approval ushka +1"
    ],
    "result": [
     {
      "speaker": "乌什卡",
      "text": "不快。她先挨的。他爬回去，躺在她边上。"
     },
     "加莱尔把这三句话一个字不改地记了下来，又在后面添了个日子。"
    ],
    "goto": "a2_09"
   }
  ]
 },
 "a2_09": {
  "id": "a2_09",
  "title": "两口子的葬礼",
  "art": "ev_elven_constellation",
  "loc": "乔卡德枢纽以西 · 一处泵房",
  "text": [
   "拜月神的人，得在月光底下入土才行，可这地方跟月亮之间隔着半座山。",
   {
    "speaker": "加莱尔",
    "text": "上回我们家埋人是在船上，把人往海里放。这是我祖母讲给我听的，她说的上回，已经是四百多年前了。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "拿石头垒起来，底下的谁也挖不动。就埋在这儿，也行。"
   },
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "兵团里有个砌匠，三尺见方的活，四个时辰就能砌好。照我们的规矩，人是要进石头的。"
   },
   {
    "if": "party.tan",
    "text": "阿坦说他只会念王的词，月神的词不会。加莱尔说不要紧，王的词她听过，句子都不长。"
   },
   "加莱尔问哪边是往上、往地面去的方向，因为照规矩，脸得朝着月亮出来的那一边。贝尔格拉克拿斧柄在地上划了一道，说东偏北，往上两千尺。",
   {
    "if": "is.god && party.tan",
    "text": "阿坦把蜡烛举到你面前，问你知不知道外头这会儿是什么时辰。你自然答得上来，可他听完了，还是低头看了一眼蜡烛上的刻痕。"
   }
  ],
  "choices": [
   {
    "text": "就地垒石头埋了，阿坦念词",
    "effects": [
     "flag parents_buried_deep",
     "world unburied -1",
     "var rites +1",
     "log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。"
    ],
    "result": "石头垒到了齐胸高。阿坦念的是晨祷的头四句，念完看了加莱尔一眼。加莱尔在最上头那块石头上刻了个月牙，刻歪了，她也没有改。",
    "goto": "a2_10"
   },
   {
    "text": "你来主礼，念月神的词",
    "tag": "神职",
    "if": "is.divine",
    "effects": [
     "flag parents_buried_deep",
     "world unburied -1",
     "var rites +1",
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +1"
      ]
     },
     "log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。"
    ],
    "result": "这段词各家神殿念的大同小异，只是到了月神这里多出一句，求她认得回家的路。加莱尔跟着你念了那一句，声音比你低了半个调。",
    "goto": "a2_10"
   },
   {
    "text": "把月光从山顶上引下来，照着埋",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag parents_buried_deep",
     "world unburied -1",
     "var rites +1",
     {
      "if": "party.garaele",
      "then": [
       "approval garaele -2"
      ]
     },
     "log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。"
    ],
    "result": [
     "泵房外头亮了起来，一道白光从石缝里落下来，正好照在两个坑上。",
     {
      "speaker": "加莱尔",
      "text": "这不是月光，这是你。"
     },
     "可她还是让你们埋了。在那一页上，她写的是“入土，光自称为月”。"
    ],
    "goto": "a2_10"
   },
   {
    "text": "裹好带上车，出山找个有月亮的地方",
    "effects": [
     "flag parents_carried",
     "log 守昔者夫妇，裹好上了车，等一个有月亮的晚上。"
    ],
    "result": "你们拿油布裹了三层，又用绳子捆紧，车上多了两副担架，推起来沉了不少，加莱尔就走在车边上，一只手一直扶着。",
    "goto": "a2_10"
   }
  ]
 },
 "a2_10": {
  "id": "a2_10",
  "title": "兵团分家",
  "loc": "乔卡德枢纽 · 旧站台",
  "text": [
   "乔卡德枢纽是三条铁道碰头的地方，光站台就有半里长，柱子上还钉着当年收税的铜牌，一排一排的窗口都还在，只是窗口后头早就没人了。",
   "兵团这一路下来，近处的几笔旧账都讨完了，讨回来一面家传的盾、一扇刻着名字的门，还有三个兽人头目的牙，合同上写的数目也够了。",
   {
    "speaker": "基尔杜姆",
    "text": "合同上写的是十二笔，咱们已经讨了十四笔，早就够数了，我说该回头了。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "名单上一共三百一十二条，才讨了十四条，回什么头？翻下一页。"
   },
   "老兵们当场就分成了三堆。一堆要往胡尔-乔卡德去讨一堆铅，说那是祖上叫人抢走的，一堆要回交轨大厅去找叔公的一把斧子，剩下一堆干脆蹲着不动，等别人吵完了再说。只有布罗克坐在自己的铲子上，哪一堆也不去。"
  ],
  "first": [
   "level 5"
  ],
  "choices": [
   {
    "text": "站到站台中间，讲哪一笔离得最近、最该先讨",
    "if": "!flag.a2_split_done",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": "flag.a2_struck_survey",
     "mods": [
      {
       "if": "origin == 'grudge'",
       "n": 1,
       "why": "自己兵团的人"
      },
      {
       "if": "rep.companies >= 3",
       "n": 1,
       "why": "诸团里有你们的名声"
      }
     ]
    },
    "ok": {
     "text": "你说胡尔-乔卡德就在下一站，铅跑不了，斧子也跑不了，不如先去近的，回头再找远的。三堆人听着听着，慢慢并成了一堆，基尔杜姆趁机喊了一声列队，这回总算有人应了。",
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done"
     ]
    },
    "fail": {
     "text": "你才说到一半，要斧子的那一堆人已经背上包走了，这一走就走了三分之一，都顺着来路回去了，站台上一下子空出一大块。",
     "effects": [
      "flag a2_split_done"
     ]
    }
   },
   {
    "text": "翻出账上的里数，讲哪一笔最该先讨",
    "if": "!flag.a2_split_done",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true,
     "adv": "flag.a2_struck_survey",
     "mods": [
      {
       "if": "item.grudge_book",
       "n": 1,
       "why": "账本在你背上"
      }
     ]
    },
    "ok": {
     "text": "你先翻到记着那堆铅的一页，念了它是哪一年给抢走的，又翻到斧子那一页念了一遍。按年份是铅在前，斧子在后，照着祖宗的先后一笔一笔讨，老兵们这下没话说了。",
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done"
     ]
    },
    "fail": {
     "text": "偏偏你念错了一个年份，一差就差了三百年，要斧子的那一堆人笑着背上包走了，这一走就是三分之一。",
     "effects": [
      "flag a2_split_done"
     ]
    }
   },
   {
    "text": "站到基尔杜姆身后：账是祖宗传的，轮不到活人挑",
    "tag": "承嗣",
    "if": "faction == 'heirs' && !flag.a2_split_done",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true,
     "adv": "flag.a2_struck_survey",
     "mods": [
      {
       "if": "faction == 'heirs'",
       "n": 2,
       "why": "名分定了，刀才收得回去"
      }
     ]
    },
    "ok": {
     "text": [
      "你站到年轻的队长身后，替他把合同和名单一条一条对了一遍，合同在前，名单在后，哪个先签的就先算哪个。基尔杜姆的腰板一下子直了，老兵们也一个一个站回了队里。",
      {
       "speaker": "贝尔格拉克",
       "text": "照你这么说，先签的先算，那就该先讨头一条，头一条可是在议会之门。"
      }
     ],
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done",
      "approval belgrak -1"
     ]
    },
    "fail": {
     "text": "你讲祖宗，老兵们听得直点头，可点完了头照样分家。走的那三分之一里，还有人临走拍了拍基尔杜姆的肩。",
     "effects": [
      "flag a2_split_done",
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "喊一句：谁还想往前走，举手",
    "tag": "无冕",
    "if": "faction == 'crownless' && !flag.a2_split_done",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": "flag.a2_struck_survey",
     "mods": [
      {
       "if": "faction == 'crownless'",
       "n": 2,
       "why": "椅子空着，天也没塌"
      }
     ]
    },
    "ok": {
     "text": "站台上静了好一会儿，头一个举手的是布罗克，不过他举的是铲子。后头稀稀拉拉跟上来一片，到最后连要斧子的那一堆也举了手，说斧子回头再找也不迟。",
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done"
     ]
    },
    "fail": {
     "text": "举手的还不到一半，没举的那些人自己点了点数，觉得人也够多了，背上包就往回走了。",
     "effects": [
      "flag a2_split_done"
     ]
    }
   },
   {
    "text": "当场划掉勘测营那一条",
    "tag": "负怨者",
    "if": "origin == 'grudge' && item.grudge_book && !flag.a2_struck_survey && !flag.a2_split_done",
    "once": true,
    "effects": [
     "flag a2_struck_survey",
     "rep companies -1",
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +2"
      ]
     }
    ],
    "result": [
     "账本上有这么一条，守昔者夫妇欠兵团护送费四十金冠。你提笔把它划了，又在旁边添了一行字，写的是“人已入土，两清”。",
     "有个老兵嘟囔了一句钱总归是钱，旁边那个拿胳膊肘捅了他一下，说{ta}连死人的账都敢划，你那笔可得当心点。",
     "加莱尔把你写的那行字抄进了她自己的本子里。"
    ]
   },
   {
    "text": "由他们吵，你们收拾车",
    "if": "!flag.a2_split_done",
    "once": true,
    "effects": [
     "flag a2_split_done",
     "rep companies -1"
    ],
    "result": "吵到最后，要斧子的那一堆人还是走了，走了三分之一，基尔杜姆看了你一眼，那意思是你本来可以说上两句的。"
   },
   {
    "text": "上站台边那辆手摇车",
    "if": "flag.a2_split_done && !flag.rail_woken",
    "goto": "a2_11"
   },
   {
    "text": "坐那节自己会跑的车，往胡尔-乔卡德去",
    "if": "flag.a2_split_done && flag.rail_woken",
    "result": "好在铁道还亮着，车皮载着你们一路往下滑，滑到胡尔-乔卡德的站台，自己就停了。站台上的灰叫风吹开了一片，露出底下一排脚印，是新踩的，还都光着脚。",
    "goto": "a2_12"
   }
  ]
 },
 "a2_11": {
  "id": "a2_11",
  "title": "乔卡德枢纽的手摇车",
  "art": "ev_the_covenant",
  "loc": "乔卡德枢纽 · 下行线",
  "text": [
   "所谓手摇车，就是四个轮子上架一块铁板，中间竖一根压杠，两个人一上一下地压着走。你们刚把车推上轨道，后头的黑地里就有了动静，是爪子刮石头的声音，一下，又一下，不紧不慢的。",
   "黑皮兽人的探子走路是不出声的，出声的是他们牵着的钩爪怪。",
   "站台尽头的墙上刻着一张线路图，三条线在这儿交成了一个结，从前胡尔-乔卡德的矮人就替这个结看门，每过一趟车收一回税。图上的下行线，有一段叫人拿刀划掉了。",
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "前头有三个岔口，头一个往左，第二个往右，第三个有一条线是断的。到底断的是哪一条，我给忘了。"
   }
  ],
  "first": [
   "codex black_orcs",
   "var a2_miss =0"
  ],
  "choices": [
   {
    "text": "压杠，往前冲",
    "if": "!flag.a2_c1",
    "once": true,
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "杠子一上一下，车轮跟着唱了起来，后头的爪子声一下子远了一截。",
     "effects": [
      "flag a2_c1"
     ]
    },
    "fail": {
     "text": "压杠的两个人没对上拍子，车猛地颠了一下，后头的声音更近了，连喘气声都听得见。",
     "effects": [
      "flag a2_c1",
      "var a2_miss +1"
     ]
    }
   },
   {
    "text": "头一个岔口，扳道往左",
    "if": "flag.a2_c1 && !flag.a2_c2",
    "once": true,
    "check": {
     "skill": "sleight",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你探出半个身子去扳道岔，车拐过去的时候，左边的轮子离了一下轨，好在又落了回去。",
     "effects": [
      "flag a2_c2"
     ]
    },
    "fail": {
     "text": "道岔锈死了，你扳了两下才扳动，车速一下子掉了一半，后头飞来一支矛，扎在了车尾的铁板上。",
     "effects": [
      "flag a2_c2",
      "var a2_miss +1"
     ]
    }
   },
   {
    "text": "盯着前头，看哪条线是断的",
    "if": "flag.a2_c2 && !flag.a2_c3",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "右边那条线的轨面上没有蓝光，断的就是它，你喊了一声，车往左边去了。",
     "effects": [
      "flag a2_c3"
     ]
    },
    "fail": {
     "text": "你看错了。车冲上了右边那条线，没跑多远轨就到头了，你们赶紧一齐跳车，那车一头翻进了黑地里。",
     "effects": [
      "flag a2_c3",
      "var a2_miss +1",
      "hp -3"
     ]
    }
   },
   {
    "text": "停下来，跟追上来的打",
    "if": "flag.a2_c3 && var.a2_miss >= 2",
    "combat": {
     "title": "下行线",
     "intro": "手摇车停下了，可后头的爪子声没停，一下一下刮在石头上，越来越近。",
     "enemies": [
      {
       "id": "hook_horror",
       "n": 2
      },
      {
       "id": "black_orc_raider",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "roll",
       "name": "松开闸，让车往回撞",
       "desc": "这一段是下坡，车又是铁打的。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "你一脚踹开了闸，空车顺着坡倒冲回去，正好撞在钩爪怪的腿弯上。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "闸卡死了，你使劲一拽，只拽下来一根闸杆，还蹭了一手的锈。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "switch",
       "name": "把道岔扳到断线上",
       "desc": "前头那条线是断的，他们可不知道。",
       "check": {
        "skill": "sleight",
        "dc": 14
       },
       "success": {
        "text": "道岔一动，冲在最前头的两个一脚踩空，连人带矛摔到了断轨底下。",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "道岔纹丝没动，你的手指头倒差点给夹在里头。"
       }
      }
     ],
     "xp": 400,
     "win": {
      "goto": "a2_12"
     },
     "lose": {
      "effects": [
       {
        "if": "var.prep >= 1",
        "then": [
         "var prep -1"
        ]
       },
       "gold -40",
       "hp 1"
      ],
      "goto": "a2_12"
     },
     "fled": {
      "effects": [
       {
        "if": "var.prep >= 1",
        "then": [
         "var prep -1"
        ]
       }
      ],
      "goto": "a2_12"
     }
    }
   },
   {
    "text": "甩掉他们，往胡尔-乔卡德去",
    "if": "flag.a2_c3 && var.a2_miss < 2",
    "effects": [
     "xp 200"
    ],
    "result": "后头的爪子声一点一点听不见了，车滑进胡尔-乔卡德的站台，停在了一排倒塌的澡堂柱子前头。",
    "goto": "a2_12"
   }
  ]
 },
 "a2_12": {
  "id": "a2_12",
  "title": "竖井口",
  "loc": "胡尔-乔卡德 · 通往最底层的竖井口",
  "text": [
   "胡尔-乔卡德是座管水的堡，如今水道早就干了，澡堂的瓷砖倒还在，青的白的，一块都没碎。往下去的竖井口是拿铅封死的，封口足有三尺厚，再说底下也塌实了，根本下不去。",
   "井壁上刻着字，却不是矮人的字，是当年困在堡里的精灵兵刻的，刻得很深。那是一段值夜的祷词，把他们的神一位一位列了出来，末尾是主将的名字。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "这一位呢，是天上的卡斯特拉尔。至于主将的名字，应该念作杜卡涅尔。"
   },
   {
    "if": "!party.garaele",
    "text": "你照着拓片上的字母一个一个往下拼，拼出来一位天上的卡斯特拉尔，主将的名字叫杜卡涅尔。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡听了一会儿，随口哼出一句唱词来，说是她小时候老萨满唱的，唱的是造兽人的那一位，名字叫杜坎尼尔，跟墙上那个只差一个音。"
   },
   {
    "if": "!party.ushka",
    "text": "塌方那头有人在唱歌，听嗓子是个老萨满，唱的是造兽人的那一位，名字叫杜坎尼尔，跟墙上那个只差一个音。"
   },
   "塌方那头的嗓子又换了个腔调，这回是在骂人了。那是破碎之冠的人，信的是老一路的杜坎，他骂杜坎森是假先知，把矮人犯下的罪记到了人类头上。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "一共是八位，头一位就是王，可他是刻在精灵的墙上的。原来神都还活着呀，只是从来就不是我们的。"
   }
  ],
  "first": [
   "flag castellar_seen",
   "flag dookanil_known",
   "item +shaft_rubbing",
   "quest q_dragon stage 3",
   "codex hul_jorkad",
   "codex ducaniel",
   "codex dookan"
  ],
  "choices": [
   {
    "text": "看刻痕的手法，断个年代",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "刻字用的是精灵的凿子，下刀从左往右，跟矮人正好反着。字底下还压着一层更老的矮人刻痕，是叫人铲平了的，这准是先驱精灵的手笔，错不了。",
     "effects": [
      {
       "if": "party.garaele",
       "then": [
        "approval garaele +1"
       ]
      }
     ]
    },
    "fail": {
     "text": "你凑得太近，袖口把拓片蹭糊了一角，加莱尔一句也没埋怨，自己动手又拓了一张。",
     "effects": [
      {
       "if": "party.garaele",
       "then": [
        "approval garaele -1"
       ]
      }
     ]
    }
   },
   {
    "text": "对一对祷词的格式",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "祷词是先唤名字，再报时辰，最后一句求天明，跟阿坦的晨祷是一个格式。阿坦把两份对着念了一遍，念到最后一句才发现，两边都缺了一截。",
     "effects": [
      {
       "if": "party.tan",
       "then": [
        "approval tan +1"
       ]
      }
     ]
    },
    "fail": {
     "text": "你认了半天也没认出个名堂来，塌方那头的萨满听见你嘀嘀咕咕，隔着石堆扔过来一块石头。",
     "effects": [
      "damage 1d4"
     ]
    }
   },
   {
    "text": "探一探井底",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "底下有一道法术留下的残迹，摊开来比这整座堡还宽，铅封压了它六千年，居然没把它压死。你把手收回来，指甲缝里都是凉的。"
    },
    "fail": {
     "text": "你刚往下一探，就有个东西往回顶了你一下，顶得你一屁股坐在地上，耳朵里嗡嗡响了半天。",
     "effects": [
      "damage 1d6"
     ]
    }
   },
   {
    "text": "动手清开塌方",
    "once": true,
    "effects": [
     "damage 1d8"
    ],
    "result": "你才搬开头一块，上头就掉下来三块，贝尔格拉克说，胡尔-乔卡德的塌方是一层压着一层的，搬一块就要塌一丈。"
   },
   {
    "text": "隔着塌方，跟老萨满对唱",
    "tag": "退潮的人",
    "if": "origin == 'tide' && !flag.a2_sang",
    "once": true,
    "effects": [
     "flag a2_sang"
    ],
    "result": "你起了个头，那边停了一下，接上了，他唱一句，你接一句，唱到杜坎尼尔的名字，两边是一块儿唱出来的。唱完了，他问你是哪一家的。"
   },
   {
    "text": "替杜坎森回他一嘴",
    "tag": "退潮的人",
    "if": "origin == 'tide' && flag.a2_sang",
    "once": true,
    "check": {
     "skill": "intimidation",
     "dc": 14
    },
    "ok": {
     "text": "你说是杜坎森带着你们出了山，你们才看见了天。那边半天没出声，后来才回了一句，天上也没什么。",
     "effects": [
      "rep clans +1"
     ]
    },
    "fail": {
     "text": "你吼了一句，那边吼回来的是一长串诅咒，你听都没听过，里头还带着你的氏族名。",
     "effects": [
      "rep clans -1"
     ]
    }
   },
   {
    "text": "问他，杜坎手上的锁链是谁上的",
    "tag": "退潮的人",
    "if": "origin == 'tide' && flag.a2_sang",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13
    },
    "ok": {
     "text": "他说老辈人讲的是，杜坎只想找块地方住，是矮人把他锁起来的。后来是你们那个假先知改了口，把地面上的神也算了进去，好叫你们出山去砸人类的庙。说完他就走了，脚步声一路往底下去。",
     "effects": [
      {
       "if": "party.ushka",
       "then": [
        "approval ushka +1"
       ]
      }
     ]
    },
    "fail": {
     "text": "他听出你是杜坎森的人，只回了你一句，叫你问你那个假先知去。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "跟着乌什卡把那句唱词哼出来",
    "tag": "兽人",
    "if": "is.greenskin && !is.goblin",
    "once": true,
    "effects": [
     "rep clans +1",
     {
      "if": "party.ushka",
      "then": [
       "approval ushka +1"
      ]
     }
    ],
    "result": "你都不知道自己会这一句，可一张嘴它就出来了，调子跟你阿妈当年哄你睡觉时哼的一模一样，塌方那头的萨满不骂了。"
   },
   {
    "text": "念出墙上那两位你小时候听过的名字",
    "tag": "精灵",
    "if": "is.elf",
    "once": true,
    "effects": [
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +1"
      ]
     }
    ],
    "result": [
     "祷词里有两位的名字，你小时候在摇篮曲里听过。那支曲子没有词，只有名字，一个接着一个，唱到第七个你就睡着了。可墙上这一列有八个，多出来的那一个，你家的曲子里没有。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "原来你家也唱这一支啊。"
     }
    ]
   },
   {
    "text": "把塌方一块一块挪开，铅封也掀了",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag god_opened_shaft",
     "world embers +1",
     {
      "if": "party.ushka",
      "then": [
       "approval ushka -1"
      ]
     }
    ],
    "result": [
     "石头你挪得动，三尺厚的铅你也挪得动，可你才掀开一角，底下就有个东西应了你一下，它很旧，很大，可并不是冲着你来的。",
     "全队的人都喊你停手，你没停，结果井壁裂开了一道缝，转眼又自己合上了，到头来还是下不去。",
     "塌方那头的老萨满喊了起来，说造物主翻身了，喊完他又隔着石头问你，你是哪一位，是替谁来开锁的。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "停手。底下那个东西，它应的不是你。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔在本子上记了一行，写的是“某神开井，未开”。"
     }
    ]
   },
   {
    "text": "收好拓片，往上层的闸口走",
    "result": "拓片卷成一卷塞进了竹筒，加莱尔把竹筒挂在了自己脖子上，你们正往上走，后头的黑地里忽然响了一声骨号。",
    "goto": "a2_13"
   }
  ]
 },
 "a2_13": {
  "id": "a2_13",
  "title": "铅闸",
  "art": "ev_orc_with_axe",
  "loc": "胡尔-乔卡德 · 上层闸口",
  "text": [
   "上层闸口吊着一道铅闸，足有一尺厚，挂在两根铜链上。早年乔卡德湖涨水的时候，矮人一夜要放三回闸，闸轮上的把手都磨得发亮了。如今它要挡的，是别的东西。",
   "骨号一连响了三声，黑皮兽人的大队到了，他们不喊也不叫，矛头都是黑曜石的，在灯底下一点光也不反。走在前头吹号的那一个，手里的号是拿深渊鸦的腿骨做的。",
   {
    "if": "flag.company_whole",
    "text": "兵团两百人一个不少，背靠着铅闸站了三排，基尔杜姆站在最前头，这回是他自己站过去的。"
   },
   {
    "if": "!flag.company_whole",
    "text": "兵团剩下的人背靠着铅闸站了两排，第二排还有空当。"
   },
   {
    "if": "flag.rail_woken",
    "text": "来的比该来的多。铁道醒过一回，山里每一个窝就都听见了。"
   },
   {
    "if": "is.god",
    "text": "战号手的眼睛越过兵团，落到了你身上，他们的规矩是先杀对面最大的那一个，他来回看了一圈，认准了是你。"
   },
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "来了四十个。闸轮在左边，得转一百二十圈，谁去转？"
   }
  ],
  "first": [
   "codex black_orcs"
  ],
  "choices": [
   {
    "text": "一个人顶在闸口，让别人去转闸轮",
    "tag": "战士系",
    "if": "is.martial && !flag.a2_held",
    "once": true,
    "effects": [
     "flag a2_held",
     "hp -6"
    ],
    "result": "你站到了闸口正中间，头一支矛扎在你脚前的地上，第二支就扎进了你的肩膀。好在后头的闸轮已经响起来了，一圈，两圈。"
   },
   {
    "text": "背靠铅闸，守住",
    "if": "!(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 3
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "!(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 3
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 1
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 1
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 1
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 1
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "!(flag.brack_bought || flag.rail_contract) && flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 6
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "!(flag.brack_bought || flag.rail_contract) && flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 6
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 1
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "(flag.brack_bought || flag.rail_contract) && flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 4
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "背靠铅闸，守住",
    "if": "(flag.brack_bought || flag.rail_contract) && flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑地里有一支骨号响了三声，兵团的人背靠着铅闸站成一排，基尔杜姆喊了句什么，可谁也没听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮锈了一半，可只要转下来，闸外的就给关在闸外了。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "adv": "flag.a2_held",
        "mods": [
         {
          "if": "flag.parents_carried",
          "n": -1,
          "why": "车上多了两副担架"
         }
        ]
       },
       "success": {
        "text": "闸轮转起来了，铅闸轰的一声砸下来，震得地都颤了一下，闸外头的号声隔着一尺厚的铅，听上去像是在井底下吹的。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了，你的肩膀倒比它先松了劲。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口底下压着一段还亮着的轨。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电勾了出来，一道蓝光贴着地皮扫过去，闸口外头站着的全都跳了一下。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，反倒顺着你的胳膊走了一遍。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      }
     ],
     "xp": 600,
     "win": {
      "effects": [
       {
        "if": "var.prep >= 3",
        "then": [
         "flag brok_lives"
        ]
       }
      ],
      "goto": "a2_14"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "fled": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_14"
     },
     "enemies": [
      {
       "id": "black_orc_warcaller"
      },
      {
       "id": "black_orc_raider",
       "n": 4
      },
      {
       "id": "hook_horror",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "grudgebearer_vet",
       "n": 1
      }
     ]
    }
   }
  ]
 },
 "a2_14": {
  "id": "a2_14",
  "title": "贝尔格拉克的名单",
  "art": "load_18",
  "loc": "胡尔-乔卡德 · 闸口内侧",
  "date": "当夜",
  "text": [
   "闸总算落下了，可外头的号声隔着一尺厚的铅，一直响到了后半夜。",
   {
    "if": "flag.brok_lives",
    "text": "布罗克坐在闸边上擦他的铲子，铲刃上崩了一个口子，他倒说崩得好，往后挖坑就有个记号了。"
   },
   {
    "if": "!flag.brok_lives",
    "text": "布罗克倒在了闸口，铲子还压在身子底下，兵团的人把他抬到墙根，跟另外几个并排放在一起，他那把铲子谁也没去拿。"
   },
   "贝尔格拉克摊开名单，给你们讲起了议会之门。他说那座大厅有三层拱廊，每层点着一百二十盏灯，尽头坐着一尊石头的王，眼睛是琥珀的。这些灯是他爷爷数给他听的，他自己并没见过，可讲的时候，他两只眼睛都是亮的。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我多问一句啊，灯是您爷爷数的，那他老人家自己见过吗？"
   },
   {
    "if": "party.garaele",
    "speaker": "贝尔格拉克",
    "text": "他爷爷见过的。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "明天我往深处去，愿意来的就跟着。照着名单一条一条讨，一直讨到议会之门。"
   },
   {
    "speaker": "基尔杜姆",
    "text": "合同到这儿可就完了。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "合同是完了，名单还没完。"
   }
  ],
  "choices": [
   {
    "text": "听他报名单的时候，留心他先念谁",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14,
     "adv": "flag.a2_knows_belgrak"
    },
    "ok": {
     "text": "名单的页边上有一行没编号的小字，写的是“雷萨格·铁眉，欠一句话”。每回念到这一页，他总是翻得飞快，翻过去以后，嗓门还要大上一截。",
     "effects": [
      "flag a2_rethag"
     ]
    },
    "fail": {
     "text": "你听了整整一晚上，只听出他念到第一百条就开始打哈欠，后来他发觉你在听，干脆把名单卷了起来。",
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "劝他当着全团的面划掉一条",
    "if": "origin != 'corintar' && origin != 'grudge'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 18,
     "mods": [
      {
       "if": "flag.a2_rethag",
       "n": 1,
       "why": "你知道他要讨的是雷萨格"
      },
      {
       "if": "flag.company_whole",
       "n": 1,
       "why": "兵团还是一整个"
      }
     ]
    },
    "ok": {
     "text": [
      "你说哪怕只划一条也好，划给大伙儿看看，账原来是能划掉的。他盯着你看了半天，才提笔在头一条上划了一道，那一条是议会之门，灰前五千八百八十八年，至于页边那行小字，他没划。",
      "{?is.god:兵团里有人说，那一笔算不得他自己划的，是神按着他的手划的。乌什卡却说，你替他划了，那一笔还是没人还。|老兵们盯着那道墨看了一会儿，有一半人站起来走开了。}"
     ],
     "effects": [
      "flag belgrak_struck",
      "quest q_list done",
      {
       "if": "party.garaele",
       "then": [
        "approval garaele +1"
       ]
      },
      {
       "if": "is.god",
       "then": [
        "flag belgrak_struck_by_god",
        "rep companies -2"
       ],
       "else": [
        "rep companies -1"
       ]
      }
     ],
     "goto": "a2_16"
    },
    "fail": {
     "text": "他听完了，把名单折好揣回怀里，只说了一句，三百一十二条，一条也不能少，少了一条，那就不是我的名单了。",
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "讲科琳在血腐阶梯放走三个降兵的事，劝他划一条",
    "tag": "科琳的队伍",
    "if": "origin == 'corintar'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.a2_rethag",
       "n": 1,
       "why": "你知道他要讨的是雷萨格"
      },
      {
       "if": "flag.company_whole",
       "n": 1,
       "why": "兵团还是一整个"
      }
     ]
    },
    "ok": {
     "text": [
      "你说她在血腐阶梯那天放走过三个投降的，一个也没记账。他认得你，那一仗你们站的是同一道盾墙，听完便在头一条上划了一道，那一条是议会之门，灰前五千八百八十八年，至于页边那行小字，他没划。",
      "{?is.god:兵团里有人说，那一笔算不得他自己划的，是神按着他的手划的。乌什卡却说，你替他划了，那一笔还是没人还。|老兵们盯着那道墨看了一会儿，有一半人站起来走开了。}"
     ],
     "effects": [
      "flag belgrak_struck",
      "quest q_list done",
      {
       "if": "party.garaele",
       "then": [
        "approval garaele +1"
       ]
      },
      {
       "if": "is.god",
       "then": [
        "flag belgrak_struck_by_god",
        "rep companies -2"
       ],
       "else": [
        "rep companies -1"
       ]
      }
     ],
     "goto": "a2_16"
    },
    "fail": {
     "text": "他说她是她，我是我，她放走的那些人，在我账上可一个也没少。说完他就把名单揣回了怀里。",
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "先当众划掉你自己账页上的玛瑙之门，再劝他",
    "tag": "负怨者",
    "if": "origin == 'grudge'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "flag.a2_rethag",
       "n": 1,
       "why": "你知道他要讨的是雷萨格"
      },
      {
       "if": "flag.company_whole",
       "n": 1,
       "why": "兵团还是一整个"
      }
     ]
    },
    "ok": {
     "text": [
      "{?flag.entry_struck:你把五年前就划掉的那一页举起来，给全团的人看。|你抽出那张账页，上头记的是玛瑙之门，一四二四，你当着全团的面把它划了。}贝尔格拉克看了好一会儿，在自己的头一条上也划了一道，那一条是议会之门。",
      "{?is.god:兵团里有人说，那一笔算不得他自己划的，是神按着他的手划的。乌什卡却说，你替他划了，那一笔还是没人还。|老兵们盯着那两道墨看了一会儿，有一半人站起来走开了。}"
     ],
     "effects": [
      "flag entry_struck",
      "flag belgrak_struck",
      "quest q_list done",
      {
       "if": "party.garaele",
       "then": [
        "approval garaele +1"
       ]
      },
      {
       "if": "is.god",
       "then": [
        "flag belgrak_struck_by_god",
        "rep companies -2"
       ],
       "else": [
        "rep companies -1"
       ]
      }
     ],
     "goto": "a2_16"
    },
    "fail": {
     "text": "你的那一条是划掉了，他的却没有。他说你划你的，我讨我的，兵团的规矩向来是一人一本账。",
     "effects": [
      "flag entry_struck",
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "不拦他，跟他握手",
    "effects": [
     "flag belgrak_lost",
     "quest q_list fail",
     "approval belgrak +1"
    ],
    "result": [
     "他的手很硬，指节上全是老茧，握完了手，他从腰上解下一盏矿灯塞给你，说两盏他也提不过来。",
     {
      "speaker": "贝尔格拉克",
      "text": "你们那边数目对得上就好。我这边嘛，就不必对了。"
     }
    ],
    "goto": "a2_16"
   },
   {
    "text": "跟他下去，到时候把他背出来",
    "effects": [
     "approval belgrak +1"
    ],
    "result": "他哼了一声，说你们人类连三天都走不了，话是这么说，他还是把灯分了一盏给你们。",
    "goto": "a2_15"
   }
  ]
 },
 "a2_15": {
  "id": "a2_15",
  "title": "往深处",
  "art": "ev_dark_expedition",
  "loc": "中矮人之地 · 一条没有名字的支线",
  "text": [
   "这一走就是三天，头一天跟着走的有三十人，第二天剩了十一个，到第三天就只剩下你们和他了。路也越走越窄，最后一段得侧着身子才挤得过去。",
   "贝尔格拉克腿上挨了一钩，拿布绑了绑，嘴里还在念条目，念一条，比划一个方位，接着往前走。",
   {
    "speaker": "贝尔格拉克",
    "text": "第二百九十一条。从这儿往东三里有一座小堡，欠着一扇门。门是早没了，可账还在。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "他要是再走一天，就得我来抬他了。"
   },
   "头顶上有翅膀拍了一下，灯光照不到的地方有个东西，已经跟了你们一整天。"
  ],
  "combat": {
   "title": "没有名字的支线",
   "intro": "灯照不到的地方有翅膀拍了一下，贝尔格拉克本来还在念条目，念到一半停住了。",
   "enemies": [
    {
     "id": "deep_crow"
    },
    {
     "id": "black_orc_raider",
     "n": 2
    }
   ],
   "specials": [
    {
     "id": "dark",
     "name": "把灯全灭了",
     "desc": "深渊鸦是冲着光来的。",
     "check": {
      "skill": "stealth",
      "dc": 14,
      "party": true
     },
     "success": {
      "text": "最后一盏灯一灭，头顶的翅膀声就乱了，它一头撞在石壁上，接着又撞了一回。",
      "applyAll": {
       "cond": "blinded",
       "turns": 2
      }
     },
     "fail": {
      "text": "有人的灯罩掉在了地上，灯又亮了，它一看见，头一个扑的就是那盏灯。",
      "selfDmg": "1d8"
     }
    },
    {
     "id": "pipe",
     "name": "拽倒头顶那截旧水管",
     "desc": "这是胡尔-乔卡德的铅管，一截就有一人粗。",
     "check": {
      "skill": "athletics",
      "dc": 13
     },
     "success": {
      "text": "锈死的卡箍一断，整截铅管带着六千年的泥垢一块儿砸了下来。",
      "dmgAll": "2d8",
      "type": "bludgeoning"
     },
     "fail": {
      "text": "水管只晃了晃，掉下来的只有泥垢，还全掉在了你头上。",
      "selfDmg": "1d4"
     }
    }
   ],
   "xp": 500,
   "win": {
    "goto": "a2_15b"
   },
   "lose": {
    "effects": [
     "flag belgrak_lost",
     "quest q_list fail",
     "hp 1"
    ],
    "goto": "a2_16"
   },
   "fled": {
    "effects": [
     "flag belgrak_lost",
     "quest q_list fail"
    ],
    "goto": "a2_16"
   }
  }
 },
 "a2_15b": {
  "id": "a2_15b",
  "title": "背出来",
  "loc": "中矮人之地 · 一条没有名字的支线",
  "text": [
   "深渊鸦掉在地上还在扑腾，贝尔格拉克坐在一边，腿上的布已经全红了，手里却还攥着名单。",
   {
    "speaker": "贝尔格拉克",
    "text": "这是第二百九十条，后头还剩二百八十九条。"
   },
   "他是站不起来了。往回走要三天的路，往前呢，已经没有路了。",
   "你们折回到第二天那个岔口，当初掉队的十一个里还有三个坐在那儿，守着一盏快灭的灯。他们说，他们等的是贝尔格拉克，可不是你们。"
  ],
  "choices": [
   {
    "text": "把他背起来，往回走",
    "check": {
     "skill": "athletics",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "你们几个轮流背他，他一路骂人，骂到第二天总算不骂了，改成报起每一段路的年份来，等到了闸口，他已经睡着了。",
     "effects": [
      "flag belgrak_saved",
      "quest q_list done",
      "xp 500"
     ],
     "goto": "a2_16"
    },
    "fail": {
     "text": "背到第二天，人人肩膀都磨破了，脚上的泡连着泡，可你们还是把他背到了闸口。",
     "effects": [
      "flag belgrak_saved",
      "quest q_list done",
      "xp 500",
      "hp -6"
     ],
     "goto": "a2_16"
    }
   }
  ]
 },
 "a2_16": {
  "id": "a2_16",
  "title": "数目对得上",
  "art": "ev_dwarven_rail",
  "loc": "矮人之路 · 回程",
  "date": "1450年秋",
  "text": [
   "到了玛瑙之门的闸口，当初进去多少人，如今抬出来多少人，都要一个一个点清楚。银行的出纳拿着出发那天的刻痕棍，点一个，就在旧刻痕旁边再刻一道，两排刻痕得一样长才行。",
   {
    "if": "flag.belgrak_lost",
    "text": "点数的是基尔杜姆，贝尔格拉克那一格空着，他带着名单往深处去了，打那以后再也没人见过他。"
   },
   {
    "if": "!flag.belgrak_lost",
    "text": "点数的是贝尔格拉克，他点一个，基尔杜姆就在账本上记一个。"
   },
   {
    "if": "!flag.brok_lives",
    "text": "布罗克是叫人抬出来的，他那把铲子就放在他胸口上。"
   },
   {
    "if": "flag.brok_lives",
    "text": "布罗克是自己走出来的，肩上扛着铲子，头一个过了闸。"
   },
   {
    "if": "flag.rail_bones",
    "text": "车上那三十一包，基尔杜姆也一包一包点过了，点完又给每一包添了个名字，其中有九包，添的名字是“不知道”。"
   },
   {
    "if": "flag.parents_carried",
    "text": "轮到加莱尔父母的那两副担架，点数的人跳了过去，她只说了一句“算上”，他们就给算上了。"
   },
   {
    "if": "item.brack_token",
    "text": "过交轨大厅那道闸的时候，你们亮出了车皮签，地精们就没收钱，还有一个从车顶上扔下来一袋蘑菇。"
   },
   "矮人有个规矩，名字要进账本，人要进石头，所以闸口外头的崖壁上，兵团的砌匠凿了一排新龛。"
  ],
  "first": [
   "quest q_parents done",
   "gold +300",
   "world unburied -1",
   "var rites +1",
   {
    "if": "!flag.brok_lives",
    "then": [
     "log 布罗克，负怨者兵团，葬在玛瑙之门外的崖壁上。铲子跟着他。"
    ],
    "else": [
     "log 负怨者兵团战死的弟兄，葬在玛瑙之门外的崖壁上。"
    ]
   },
   {
    "if": "flag.rail_bones",
    "then": [
     "world unburied -1",
     "var rites +1",
     "log 死铁道上的三十一具，送去红宝石领入石。"
    ]
   }
  ],
  "choices": [
   {
    "text": "把车推上闸口外那段坡",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "flag.rail_bones",
       "n": -1,
       "why": "车上三十一包遗骨"
      },
      {
       "if": "flag.parents_carried",
       "n": -1,
       "why": "两副担架"
      }
     ]
    },
    "ok": {
     "text": "那段坡是在石头上凿出来的台阶，一级有半尺高，你们喊着号子把车推了上去，到了坡顶，外头吹过来的风是暖的。",
     "goto": "a2_17"
    },
    "fail": {
     "text": "才推到一半，车轮崩断了一根辐条，车直往后溜。等你们搬石头把它垫住，车尾已经少了一包，那一包滚下坡掉进了黑地里，怎么也没找着。",
     "effects": [
      "world unburied +1"
     ],
     "goto": "a2_17"
    }
   }
  ]
 },
 "a2_17": {
  "id": "a2_17",
  "title": "山里的话带不带出去",
  "loc": "玛瑙之门 · 闸口外",
  "text": [
   "闸口外头摆了一张桌子，贾尔蒙正坐在那儿结账，兵团的尾款，探险队的租子，一笔一笔地算，笔尖在纸上划得沙沙响。",
   "你们这边也有两件事要定下来，可哪一件都说不上怎么办才算对。头一件是井口那两个名字。兵团里没有人认得先驱精灵的字，井壁上到底刻了什么，眼下只有你们几个知道。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "造我们的，是个带着作坊的精灵，我们不欠他的。这句话我想带回去。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我是只管记的。可是记下来的东西总得有人看哪，没人看的本子，跟没记也没什么两样。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "这种话呀，最值钱的时候就是还没人说过的时候，你说一回，价钱就掉一半啦。"
   },
   {
    "if": "party.tan",
    "text": "阿坦什么也没说，他手里攥着那根蜡烛，攥得太紧了，蜡上都留下了指头印。"
   },
   {
    "if": "!party.ushka",
    "text": "闸口外头有个半大的兽人小子，已经等了你们三天，他是阿罗莎派来打听山里消息的，你们的车一到，他就认了出来。"
   }
  ],
  "choices": [
   {
    "text": "让乌什卡把那句话带回烂刀氏族",
    "if": "party.ushka",
    "effects": [
     "flag dookanil_told",
     "world embers -1",
     "approval ushka +2"
    ],
    "result": "她在木签的背面刻了一行字，刻完给你看了一眼，上头刻的是“杜坎尼尔，杜卡涅尔，一个人”。她说烂刀的年轻人会把这根签传下去的。",
    "goto": "a2_17b"
   },
   {
    "text": "托阿罗莎的信使把那句话带回氏族",
    "if": "!party.ushka",
    "effects": [
     "flag dookanil_told",
     "world embers -1"
    ],
    "result": "你把那句话说了三遍，他跟着背了三遍，背到第三遍一个字也没错，他走的时候，头也没回。",
    "goto": "a2_17b"
   },
   {
    "text": "当笑话讲给兵团的人听",
    "effects": [
     "flag dookanil_told",
     "flag dookanil_mocked",
     "world embers +1",
     "rep clans -2",
     "rep companies +1",
     {
      "if": "party.ushka",
      "then": [
       "approval ushka -2"
      ]
     }
    ],
    "result": [
     "你说兽人的神原来是个精灵，拿兽人当家伙使。老兵们笑得直拍桌子，当晚就编出了一段顺口溜，回东坎诺的这一路上，他们会在每一家酒馆里唱上一遍。",
     {
      "if": "party.ushka",
      "text": "乌什卡没笑，她把木签插回腰里，到车那头裹骨头去了。"
     }
    ],
    "goto": "a2_17b"
   },
   {
    "text": "让加莱尔把两个名字报给编年史家会",
    "if": "party.garaele && !flag.names_filed",
    "once": true,
    "effects": [
     "flag names_filed",
     "world word +1",
     "approval garaele +1",
     "codex chroniclers"
    ],
    "result": "她写了一封短信，信里只有两个名字、一个地方和一个日子，封上蜡，交给了探险队往外送信的骡队。她说会里的人看了信，光是格式就得先吵上一年。"
   },
   {
    "text": "当众讲给门外的地精住户和脚夫听",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "effects": [
     "flag dookanil_told",
     "world embers -1",
     "rep clans +1"
    ],
    "result": "你站在闸口外的石墩上讲，{?flag.khug_goblins_out:底下站着脚夫、骡夫，还有几个回来讨锅的地精。|底下站着脚夫、骡夫，还有从门楼里下来的一家地精。}讲完了，有个老脚夫说他不信，有个地精倒说他信，因为这么说对地精没什么坏处，你谁也没去劝。",
    "goto": "a2_17b"
   },
   {
    "text": "{?flag.names_filed:别的谁也不说|谁也不说}",
    "effects": [
     {
      "if": "party.tan",
      "then": [
       "approval tan -1"
      ]
     }
    ],
    "result": "你把拓片卷好，塞回了竹筒，阿坦看着那个竹筒，嘴动了一下，到底没出声。",
    "goto": "a2_17b"
   }
  ]
 },
 "a2_17b": {
  "id": "a2_17b",
  "title": "本子归谁",
  "loc": "玛瑙之门 · 闸口外",
  "text": [
   "第二件事是守昔者的那本拓片本。里头是三十年攒下来的拓片，一页一个地方，有东坎诺的墓碑，有一座卡斯塔诺老矿的门楣，有地精刻在车皮上的氏族记号，最后几页是死铁道上的里程石。井壁上拓下来的那一张在竹筒里，不在本子里。",
   "银行的出纳在边上站了一下午，一句话也不说，只是把一张汇票掏出来又收回去，那张汇票上写的数是五百。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我父母为这件事吵了一辈子，吵的就是记下来的东西该归谁。我母亲说归会里，我父亲说归记的人，还没吵出个结果来，他们就进山了。"
   }
  ],
  "choices": [
   {
    "text": "交给编年史家会",
    "effects": [
     "flag notebook_order",
     "rep temples +1"
    ],
    "result": "加莱尔把本子包好，写上了收件人，又在包上添了她母亲的名字，她说会里会把它锁进柜子，一锁就是一百年。",
    "goto": "a2_18"
   },
   {
    "text": "让加莱尔自己留着",
    "effects": [
     "flag notebook_kept",
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +2"
      ]
     }
    ],
    "result": "她把本子贴身揣着。夜里你看见她把本子翻开了，一直翻到最后一页，那一页是空的，她拿笔在上头写了一行字，写的是泵房。",
    "goto": "a2_18"
   },
   {
    "text": "趁她睡着，把本子卖给出纳",
    "if": "item.rubbing_book",
    "effects": [
     "flag notebook_sold",
     "gold +500",
     "item -rubbing_book"
    ],
    "result": "出纳把汇票换成了现钱，装了一袋，沉甸甸的。第二天加莱尔把车上翻了三遍，最后她说，大概是丢在回程的那段坡上了。",
    "goto": "a2_18"
   }
  ]
 },
 "a2_18": {
  "id": "a2_18",
  "title": "出山",
  "loc": "玛瑙之门外",
  "date": "1450年秋",
  "text": [
   "出山那天，坡上的草已经黄了，来的时候那片烧秃了的地上，如今长出了一层矮树苗，只是狼还没回来。",
   {
    "if": "var.prep >= 4 && !flag.belgrak_lost",
    "text": "贾尔蒙说话算话，自己掏腰包办了一场游街。门洞里那二十几顶帐篷的人排成了两行，出纳敲着一口锅，游的就是你们这一车，前后只游了一圈，路也不长。"
   },
   {
    "if": "var.prep < 4 || flag.belgrak_lost",
    "text": "贾尔蒙在章程的第四十六页上记下了这一趟，去了几人，回了几人，讨回几笔，花了多少。游街的事他没提，你们也没问。"
   },
   {
    "if": "flag.belgrak_lost",
    "text": "贝尔格拉克没有出来。你最后一回握他的手还是在闸口内侧，他的手很硬。往后山里再也没人见过他。"
   },
   {
    "if": "flag.belgrak_saved",
    "text": "贝尔格拉克坐在兵团回红宝石领的车上，腿上绑着夹板，膝盖上摊着那份名单，车都走远了，他也没抬过头。"
   },
   {
    "if": "flag.belgrak_struck && !flag.belgrak_struck_by_god",
    "text": "贝尔格拉克跟着兵团一起走，可有半个兵团的人走在他后头，跟他隔着十步远，扎营的时候也背对着他。他并不在乎，名单上那道墨也还在。"
   },
   {
    "if": "flag.belgrak_struck_by_god",
    "text": "贝尔格拉克跟着兵团一起走，可兵团的人都说，那一笔算不得是他划的。回到红宝石领以后，他再也没碰过账本。"
   },
   {
    "if": "flag.rail_woken",
    "text": "阿斯拉银行已经卖起了矮人之路头三段的股份，一股十金冠。交轨大厅的地精都叫探险队清了出去，转车台上的车皮也挂上了银行的牌子。"
   },
   {
    "if": "flag.rail_woken && party.nixee",
    "speaker": "妮克西",
    "text": "银行给每户都发了一张收条呢。规矩第一条是活着，第二条嘛，收条可不顶饭吃呀。"
   },
   {
    "if": "party.tan",
    "text": "天亮的时候，阿坦在山外头念了晨祷，这回是对着真太阳念的，念完了，他还是低头看了一眼手里的蜡烛。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "已经烧到第六道半了。原来山里的蜡烛，烧得跟外头的一样快。"
   }
  ],
  "first": [
   "level 6",
   {
    "if": "flag.belgrak_lost",
    "then": [
     "companion -belgrak gone"
    ],
    "else": [
     "companion -belgrak"
    ]
   },
   "quest q_cart stage 3",
   "rest short",
   {
    "if": "origin == 'grudge' && flag.entry_struck",
    "then": [
     "quest q_o_grudge stage 3"
    ]
   },
   {
    "if": "flag.rail_woken",
    "then": [
     "world room -1",
     "rep companies +2",
     "approval nixee -2"
    ]
   }
  ],
  "choices": [
   {
    "text": "给巴兹伍德写报告，照实写",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var honest_reports +1",
     "rep throne +1"
    ],
    "result": "你把矮人认的每一笔旧账都写上了，连他们管丁香战争叫“花仇”也没落下。送信的鸽子是探险队的，飞走之前还在门洞里绕了一圈。",
    "goto": "a3_01"
   },
   {
    "text": "给巴兹伍德写报告，挑好看的写",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var false_reports +1"
    ],
    "result": "你写的是矮人在山底下只认祖宗的账，不认帝国的账。这话有一半是真的，至于剩下那一半，巴兹伍德先生自己会去琢磨的。",
    "goto": "a3_01"
   },
   {
    "text": "{?origin == 'wex':不写报告，往西走|往西走}",
    "effects": [
     {
      "if": "origin == 'wex'",
      "then": [
       "rep throne -1"
      ]
     }
    ],
    "result": [
     {
      "if": "origin == 'wex'",
      "text": "信鸽在笼子里又多待了一个月，这一个月你把它喂得很好。"
     },
     "加莱尔把本子摊开，在新的一页上写了日子，底下空着没写，她说下一页该写什么，等走到了再说。"
    ],
    "goto": "a3_01"
   }
  ]
 }
};
