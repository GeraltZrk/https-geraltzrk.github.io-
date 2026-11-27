// s1444 / act2.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "a2_01": {
  "id": "a2_01",
  "title": "五年以后，狼门",
  "chapter": "第二幕 · 再没人见过的矮人",
  "art": "ev_cave",
  "loc": "蛇脊山脉西麓 · 玛瑙之门外",
  "date": "1450年春",
  "text": [
   "五年过去。你们一直在路上，这时来到蛇脊山脉西麓的玛瑙之门外，打算从这里进矮人留下的故道。卡斯托纳斯的近况，只能从来往行人口中拼凑。",
   {
    "if": "flag.compact_league",
    "text": "如今管着卡斯托纳斯的是伯爵联盟，首领卡莱昂·黑塔在每道城门都收一个铜子的进城税。下城人说，他收得比兽人当年还准时。"
   },
   {
    "if": "flag.compact_corintar",
    "text": "如今守城的是追随科琳的科琳塔尔，蓝牙的兵轮班站岗。万神道上给科琳修的那座祠堂已经盖上了瓦，阿坦那座神王的庙却还是没有屋顶。"
   },
   {
    "if": "flag.compact_free",
    "text": "城约到现在还算数，各家每月凑一次份子钱，门板搭的那张桌子也还摆在下城的空地上。地精坊新打了一口井，井绳是从你们车上拆下来的。"
   },
   {
    "if": "flag.compact_none",
    "text": "城里还是没人管。三家各占着一道门，各收各的税，如今进一趟下城得交三次钱。"
   },
   {
    "if": "flag.korgus_rite",
    "text": "杜坎森那件事，说书的是这么讲的：有个兽人女人把他的骨头磨成粉，撒进了风里。每次讲到这里，听书的人都扭过头去看乌什卡。"
   },
   {
    "if": "flag.korgus_son",
    "text": "杜坎森的骨头如今放在长者郡。每年到了银现月，古尔赞的人就抬着它绕着火走一圈，来看的酋长一年比一年多。"
   },
   {
    "if": "flag.korgus_spike",
    "text": "杜坎森的头在城门上挂了两年，早被鸟啄干净了，后来不知被谁偷走，城门上只剩那颗钉子。"
   },
   {
    "if": "flag.korgus_sold",
    "text": "杜坎森的尸首卖给了铁杖骑士团，留在了银池湖边。有人说，骑士团那里有一具个头特别大的骷髅，天天扛着石头修墙。"
   },
   {
    "if": "flag.korgus_lake",
    "text": "杜坎森沉在银池湖里。打鱼的都说，开春的时候有人看见他在湖心游水。来买鱼的人就爱听这一段。"
   },
   {
    "if": "flag.korgus_carver",
    "text": "杜坎森的骨头落到了雕骨者氏族手里。如今东坎诺每个集上都有人卖“杜坎森的指骨”，三个金冠一根，卖出去的加起来够拼出十个他了。"
   },
   {
    "if": "party.tan",
    "text": "阿坦今年二十二了，下巴上长出了一圈软胡子。他说庙里没有镜子，没法刮。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西的账本已经换到第三本了，第一本早就拿去垫了车轴。"
   },
   "玛瑙之门是矮人留下的一道山门，开在山壁上，朝北，对着一片烧秃了的山坡。那片坡从前是林子，狼多，所以矮人也管它叫狼门。铁闸落到一半就锈死了，一直悬在那里。门洞下面搭着二十几顶帐篷，帐篷布上缝着阿斯拉银行的徽记，这家矮人银行出钱雇了一支探险队进山。",
   "精灵编年史家加莱尔·守昔者坐在门洞外面的界石上等你们，本子揣在怀里没有摊开。她父母都是编年史家，跟着探险队进山勘测，说好入冬以前回来。如今冬天过完又是一个多月了，人还没出来。",
   {
    "if": "is.immortal",
    "text": "车下那卷铺盖五年没晒，长了一层白毛。你的样子倒跟五年前一模一样。"
   },
   {
    "if": "is.immortal",
    "text": "加莱尔从本子里抽出一张纸，是五年前给你画的速写。她举着纸跟你的脸对了对，就把它撕了。"
   },
   {
    "if": "is.immortal",
    "speaker": "加莱尔",
    "text": "看来不用重画了。我就写“未见衰老”四个字，这么写没错吧？"
   },
   {
    "if": "is.immortal && party.ushka",
    "speaker": "乌什卡",
    "text": "五年了，你一点都没老。"
   },
   {
    "speaker": "加莱尔",
    "text": "我想雇你们进山找人。这是编年史家会出的悬赏，还是老价钱，路上的花销另算。"
   }
  ],
  "first": [
   {
    "if": "party.ushka && approval.ushka <= -4",
    "then": [
     "companion -ushka gone",
     "flag ushka_left",
     "log 乌什卡离开了队伍。她走前把那根木签插在了车辕上。"
    ]
   },
   "companion +garaele",
   "quest q_parents start",
   "codex khugdihr"
  ],
  "choices": [
   {
    "text": "询问她来找你们的缘由",
    "once": true,
    "effects": [
     "approval garaele +1"
    ],
    "result": [
     {
      "speaker": "加莱尔",
      "text": "你们进去几个人，出来还是几个人，一个不少。会里的记录我翻过，东坎诺这么多冒险团，做得到这一点的只有你们一家。"
     },
     "她停了一下，又说，她父母那一队进山的时候是十一个人。"
    ]
   },
   {
    "text": "等候后方骑骡追来的人",
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
     "来的是蓝牙派的信使，路上跑死了一头骡子。他递过来一个油布包，里面是康原的地契，蓝牙已经盖了印。地契背面还写着一行字：“欠她的，我先还一样。”",
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "你收着吧，我信不过自己的口袋。"
     }
    ]
   },
   {
    "text": "随她进入营地",
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
   "探险队长贾尔蒙·阿斯拉是个一百六十岁的矮人。他把胡子塞进腰带免得蘸到墨，摊开一份铜扣装订的章程，足有四十四页。闸口旁边，银行的出纳正在清点人数，每过一个人就在木棍上刻一道。",
   {
    "speaker": "贾尔蒙",
    "text": "这份章程一共四十四页，第一页就写明白了，先算账，后谈光荣。我活了一百六十年，光荣见过不少，账可从来没算平过。"
   },
   "山门的门楼里又住进了一窝地精。1444 年探险队第一次来的时候撵走过一窝，这几年他们又一家一家地搬了回来。矮人的门把手装在齐胸高的地方，地精够不着，就在每扇门上齐膝盖高的地方又凿了一个。",
   {
    "speaker": "贾尔蒙",
    "text": "门楼是这座堡的，堡归银行管，可住在里面的地精归谁管，章程上没写。你们是外人，替我说句公道话吧。外人说的，我才好往账上记。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "有人请你说公道话，得先问清楚是谁付钱。"
   },
   {
    "if": "flag.goblins_handed",
    "text": "门楼的窗口趴着个老地精。他看看你们的车，把窗板关上了。五年前你们在地下通道里交出去的那一车地精，里面有他认得的。"
   }
  ],
  "choices": [
   {
    "text": "查营地出入簿，找加莱尔父母走的路线",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你翻到了银现月初的那一页。上面记着守昔者夫妇一行十一人出闸，走旧线，往交轨大厅去了。两个名字旁边各画了一个小月牙。",
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
      "这簿子是按欠款多少排的，不是按日子排的。你翻了足足半个时辰也没找着，出纳在旁边看不下去了。",
      {
       "speaker": "出纳",
       "text": "翻簿子是按页收钱的。我直接告诉你吧，他们走旧线，往交轨大厅去了。这一句话收你五个金冠。"
      }
     ],
     "effects": [
      "gold -5",
      "quest q_parents stage 2"
     ]
    }
   },
   {
    "text": "帮探险队赶走门楼里的地精",
    "effects": [
     "flag khug_goblins_out",
     "world room -1",
     "rep companies +1",
     "approval nixee -2"
    ],
    "result": "探险队的人提着长柄锤上了门楼，地精们背着锅从侧门走了。最后出来的那个回头看了你一眼，把膝盖高的那个门把手掰下来，揣进了怀里。",
    "goto": "a2_03"
   },
   {
    "text": "请妮克西代地精商谈租约",
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
      "妮克西跟老地精蹲在门槛上谈了一顿饭的时间。谈完，贾尔蒙在章程后面添了第四十五页，写明门楼按月收租。一个月三筐蘑菇，也可以拿等价的铁钉来抵。",
      {
       "speaker": "妮克西",
       "text": "我只开了两筐的价，第三筐是那个老地精自己加上去的！"
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
     "text": "刚谈到第二筐蘑菇，出纳在旁边插了一句“利息另算”。老地精当场把窗板关上了，贾尔蒙也在章程旁边画了个叉。",
     "effects": [
      "rep companies -1"
     ],
     "goto": "a2_03"
    }
   },
   {
    "text": "亲自替地精谈租约",
    "if": "!party.nixee",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": "is.goblin",
     "dis": "flag.goblins_handed"
    },
    "ok": {
     "text": "你跟老地精蹲在门槛上，把每个月几筐蘑菇能抵多少租子来回算了三遍。贾尔蒙这才在章程后面添了第四十五页。",
     "effects": [
      "flag khug_goblins_lease",
      "world room +1"
     ],
     "goto": "a2_03"
    },
    "fail": {
     "text": "你刚说到“按月”，老地精就问你一个月是几天。地下不见太阳，一个月到底算几天，你答不上来。他把窗板关上了。",
     "effects": [
      "rep companies -1"
     ],
     "goto": "a2_03"
    }
   },
   {
    "text": "拒绝介入这场纠纷",
    "effects": [
     "approval nixee -1"
    ],
    "result": [
     {
      "speaker": "贾尔蒙",
      "text": "那我就记上：外人，无意见。也好，这样好记。"
     },
     "他合上章程。门楼的窗板开了一条缝，又合上了。"
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
   "午后，负怨者兵团到了。这是一支替矮人讨祖上旧债的佣兵团，两百来名矮人，多半是红胡子，车上除了撬棍和铅坠，还装着成捆的账页。三十岁的队长基尔杜姆·终怨者喊了三遍列队，老兵们连烟斗都没放下。",
   "走在最前面的是贝尔格拉克·穴居者，科琳生前的老伙伴。他手里拿着一卷名单，展开来有一人高。",
   {
    "speaker": "贝尔格拉克",
    "text": "这上面一共三百一十二笔债。第一笔是议会之门，那是灰前五千八百八十八年的事。我们从最后一笔往前讨。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "我想雇你们跟着走一趟。你们进去几个人，出来还是几个人，兵团可从来做不到这个。"
   },
   {
    "speaker": "基尔杜姆",
    "text": "我才是队长。名单是他的，兵团是我的，账本……账本算大家的。"
   },
   {
    "speaker": "布罗克",
    "text": "新铲子，在红宝石领打的。"
   },
   {
    "if": "origin != 'grudge'",
    "text": "五年前布罗克在你们车上待过一阵，签完字就回红宝石领交差去了。这次他认出了那辆板车，一声不响地走过来，拍了拍车辕。"
   },
   {
    "if": "origin == 'grudge'",
    "text": "基尔杜姆从车上搬下来一个油布包，足有四十斤重，塞到了你怀里。里面是兵团的账本。他说背账本的是你，划账的也是你，他只管喊列队。"
   },
   {
    "if": "is.god",
    "text": "贝尔格拉克把名单翻到最后一页，提笔添了一条：“第三百一十三，某神。一四二四年兽人打破玛瑙之门，未到。”写完他抬起头看着你。"
   },
   {
    "if": "is.god",
    "speaker": "贝尔格拉克",
    "text": "那一年你在哪里？"
   },
   {
    "if": "is.god",
    "text": "神能不能记成欠债的一方，基尔杜姆和几个老兵为这个吵了足足一刻钟，也没吵出结果。名单上添的那一条就先留着了。"
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
    "text": "询问贝尔格拉克：名单最后一笔是什么",
    "once": true,
    "effects": [
     "approval belgrak +1"
    ],
    "result": [
     {
      "speaker": "贝尔格拉克",
      "text": "玛瑙之门，一四二四年。兽人就是那一年从这道门打出去的。"
     },
     {
      "if": "flag.entry_struck",
      "text": "他把名单翻过来给你看，那一条已经划掉了，是你五年前亲手划的。他说红宝石领那边已经认了，只是账房先生还不大乐意。"
     }
    ]
   },
   {
    "text": "观察贝尔格拉克是否有所隐瞒",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13
    },
    "ok": {
     "text": "你留意到，他说“从后往前讨”时，一句也没提讨完了怎么回来。看样子他没打算回来。",
     "effects": [
      "flag a2_knows_belgrak"
     ]
    },
    "fail": {
     "text": [
      "他发觉你在盯着他看。",
      {
       "speaker": "贝尔格拉克",
       "text": "看什么，我牙上有菜叶？"
      }
     ],
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "认下“花仇”，付八十金冠",
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
     "紫丁香战争是达梅里亚人自家争王位的内战。打到第二十几年，达梅里亚向红宝石领买了一批戟头，钱一直没给。矮人管那场仗叫“花仇”，这笔账就记在了名单上。",
     {
      "speaker": "贝尔格拉克",
      "text": "八十金冠，收下了。这一条划掉。主动上门还债的，你是第一个。"
     }
    ]
   },
   {
    "text": "劝贝尔格拉克勾销“花仇”",
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
     "text": "你告诉贝尔格拉克，欠钱的大公至今还埋在花圃下，连坟也没有。他想了片刻，在那笔账上划了一道。",
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
       "text": "人死了，账没死。你们人类老是把这两样弄混。"
      },
      "贝尔格拉克没有划这一笔，旁边几个老兵倒都记住了你这张脸。"
     ],
     "effects": [
      "flag a2_flower",
      "rep companies -1",
      "codex lilac_wars"
     ]
    }
   },
   {
    "text": "装作没听见“花仇”",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons' && !flag.a2_flower",
    "once": true,
    "effects": [
     "flag a2_flower",
     "rep companies -1"
    ],
    "result": "贝尔格拉克念到那一条的时候停了一下，看了你一眼，又接着往下念。"
   },
   {
    "text": "在名单上查找自家姓氏",
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
     "贝尔格拉克连问都没问，直接翻到了第二百零七条。上面记的是你曾祖父，灰元一一九〇年欠了红宝石领一位酒馆老板娘两桶黑麦酒。",
     {
      "speaker": "贝尔格拉克",
      "text": "两桶酒，按今天的价是二十金冠。利息就不算了，老板娘都埋了一百年了。"
     },
     "你把钱付了，他在那一条上划了一道，又在旁边写上“曾孙还”三个字。"
    ]
   },
   {
    "text": "接受此次委托",
    "effects": [
     "quest q_list start",
     "gold +100"
    ],
    "result": [
     "定金是一百金冠，装在一只编了号的皮袋里，号码是三百一十二。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "那我父母的事，排在名单上第几条？"
     },
     {
      "if": "party.garaele",
      "speaker": "贝尔格拉克",
      "text": "他们不在名单上，在合同上。合同比名单好办多了。"
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
   "照矮人的老规矩，远征出发前要办四件事：重画路线图，封好粮食，摆一桌酒席，预发一个月的军饷。四件都办齐的队伍，回来时才有资格风风光光地游一趟街。",
   "贾尔蒙的军需官是个银矮人，鼻梁上架着两副眼镜，一副看货，一副看人。玛瑙之门的矮人从前替整座山记账，谁出门，背包里装了什么都要过秤。她照着这个老规矩，把你们的包一个一个倒在毡子上，绳子几尺、火绒几两，全记进了一本小册子。",
   "布罗克在一边磨他那把新铲子，磨几下就拿拇指试一试。",
   {
    "if": "party.ushka",
    "text": "乌什卡的包里只倒出来三样东西，一把刀，一把锤，一根木签。军需官在册子上写了三行，又盯着那根木签看看，没有多问。"
   },
   {
    "if": "party.tan",
    "text": "阿坦在一根蜡烛上刻了二十四道痕，一道算一个时辰。地下看不见太阳，他要靠这个算什么时候该做晨祷。他把蜡烛点着了，说烧到第六道就算天亮。"
   },
   {
    "if": "party.tan && (var.lies == 3 || var.lies == 6 || var.lies == 9)",
    "text": "阿坦盯着蜡烛，头也不抬地问你，上次你跟丧家说的那句话是不是真的。你还没开口，他又说算了，反正他都数着。"
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
   "blurb": "军需官架着两副眼镜，守着一册价目表。旁边有地精卖蘑菇，也来借她的秤用。",
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
    "text": "依旧图重绘路线",
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
     "text": "玛瑙之门的人到底是给整座山记账的，旧图上每一段铁道都标着里数，连哪个岔口有好井都记着。你拿红墨水把塌了的那几处一一补了上去。",
     "effects": [
      "var prep +1"
     ]
    },
    "fail": {
     "text": "这图是灰前的东西。你画到第三段才发觉自己把上下两层拼到一起去了，只好揉掉重画，这时天已经黑了。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "腌肉并封装口粮",
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
     "text": "肉抹了三遍盐，罐口拿蜡封上，罐底还垫了一层干苔。军需官换了第二副眼镜看看，点点头。",
     "effects": [
      "var prep +1"
     ]
    },
    "fail": {
     "text": "第二天早上，有一罐肉鼓了盖，你们只好把它埋了。乌什卡说埋得太浅。",
     "effects": [
      "gold -15"
     ]
    }
   },
   {
    "text": "摆酒席，席上给矮人唱几段歌",
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
     "text": "你唱到第三段，老兵们拿杯底敲着桌子给你打拍子。散席的时候基尔杜姆没喊列队，大家是自己站起来的。",
     "effects": [
      "flag a2_feast",
      "var prep +1",
      "rep companies +1"
     ]
    },
    "fail": {
     "text": "你唱的是人类的歌。矮人们客客气气地听完，又接着喝他们自己的去了。席钱照付。",
     "effects": [
      "flag a2_feast",
      "gold -10"
     ]
    }
   },
   {
    "text": "摆酒席，席上与老兵比酒量",
    "if": "!flag.a2_feast",
    "once": true,
    "check": {
     "abil": "con",
     "dc": 13,
     "save": true
    },
    "ok": {
     "text": "第七杯刚放下，对面那个老兵扶着桌子说：你肚子里有一口井。这话后来在兵团里传开了，在矮人那里算是夸人。",
     "effects": [
      "flag a2_feast",
      "var prep +1",
      "rep companies +1"
     ]
    },
    "fail": {
     "text": "才喝到第四杯，你就看见了两个基尔杜姆。第二天你头疼到了中午。",
     "effects": [
      "flag a2_feast",
      "hp -4"
     ]
    }
   },
   {
    "text": "预发一个月的军饷",
    "once": true,
    "req": "gold >= 80",
    "reqText": "需要 80 金冠",
    "effects": [
     "gold -80",
     "var prep +1"
    ],
    "result": [
     "出纳在木棍上刻了八十道。老兵们排着队领钱，领完都把钱袋系在腰带里侧。",
     {
      "speaker": "布罗克",
      "text": "先拿钱，再下井。这规矩比祖宗还老。"
     }
    ]
   },
   {
    "text": "查看乌什卡新刻的木签",
    "if": "party.ushka",
    "once": true,
    "effects": [
     "quest q_ushka stage 2",
     "approval ushka +1"
    ],
    "result": [
     "木签上刻着她自己攒的骑士规矩，原先有十一条。这五年她又刻了三条，后来划掉两条，留下的那一条是“先报名号，再动手”。",
     {
      "speaker": "乌什卡",
      "text": "划掉的那两条不对。骑士自己都不照着做。"
     }
    ]
   },
   {
    "text": "问阿坦在地下怎么判断天亮",
    "if": "party.tan",
    "once": true,
    "effects": [
     "approval tan +1"
    ],
    "result": [
     {
      "speaker": "阿坦",
      "text": "一根蜡烛烧一天，上面有二十四道。烧到第六道，外面天就亮了。我念四十句晨祷，念完正好烧到第六道半。"
     },
     {
      "speaker": "阿坦",
      "text": "要是山里的蜡烛烧得快，我就念早了。念早了应该不要紧，王不挑这个。"
     }
    ]
   },
   {
    "text": "和军需官掷两局骰子",
    "tag": "游荡者",
    "if": "class == 'rogue'",
    "once": true,
    "effects": [
     "item +greater_healing_potion"
    ],
    "result": "她的骰子灌过铅，你的也灌过。两个人对着看了一会儿，她换了一副干净的。最后你赢了一瓶大药水，她赢走了你半条腰带。"
   },
   {
    "text": "安睡一整夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "门洞里的风是从山里往外吹的，带着铁锈和凉水的味道。你一觉睡到出纳来点人头才醒。"
   },
   {
    "text": "动身上路",
    "goto": "a2_05",
    "result": [
     "兵团和探险队的人在闸口排成两排。出纳把人头点了一遍，在木棍上刻下了数。",
     {
      "if": "var.prep >= 4",
      "text": "四件事全办齐了。贾尔蒙说，回来时要是人数也齐，他自掏腰包请大家游街。"
     },
     {
      "if": "var.prep <= 1",
      "text": "贾尔蒙看看你们备下的东西，在账上多留了一页空白，那是留着记伤亡的。"
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
   "过了闸口就是矮人之路。脚下的铁轨是用达格银铺的，这种金属会自己生长，铁道六千年无人养护，断口上仍在长出温热的新茬。有几段至今带电，轨面上不时爬过一道蓝光，噼啪响一声。",
   "枕木之间每隔几步就躺着一具矮人的遗骨，有的还穿着甲，有的只剩一只靴子。他们的脸全都朝你们来的方向，朝着玛瑙之门。",
   {
    "speaker": "贝尔格拉克",
    "text": "这一具是灰前五千八百七十六年的，铁道就是那一年停的。那年玛瑙之门把这条道封了，封口就在你们身后。这些人是往门这边逃的，逃到了门前，门没给他们开。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "往前那一具晚了三百年，也是往这边走的。想回家的人，脸都朝着一个方向。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "躺了这么久也没人来动他们。这条道上的死人算是有福气的。"
   },
   {
    "if": "party.tan",
    "text": "阿坦每走过一具都要停一步，嘴唇无声地动着，一路上停了二十几次。"
   },
   "第三段尽头的桥塌了一半，只剩两根铁轨悬在半空。桥那头黑漆漆的，有什么东西正在嚼木头。"
  ],
  "first": [
   "codex dwarovrod"
  ],
  "choices": [
   {
    "text": "辨认带电的轨段",
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
     "text": "带电的那几段，轨面下面有一层很淡的纹路，一明一暗的。你拿粉笔在枕木上一一做了记号。",
     "effects": [
      "flag a2_live_known"
     ]
    },
    "fail": {
     "text": "你刚蹲下去看，打头的人已经一脚踩上了发亮的那一段。他的鞋钉上炸开一串火星，人倒在地上，半天说不出话。",
     "effects": [
      "damage 2d6"
     ]
    }
   },
   {
    "text": "踏着两根悬轨过桥",
    "check": {
     "skill": "acrobatics",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你张开两只胳膊走了过去，后面的人也一个接一个跟了上来。最后一个刚落脚，对面嚼木头的声音停了。",
     "combat": {
      "title": "断桥那头",
      "intro": "两头巨魔蹲在铁轨上。一头仍在啃枕木，另一头站了起来，头顶碰到了洞顶垂下的石笋。",
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
        "desc": "有几段铁轨仍带电，巨魔刚从水里上来。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
        "check": {
         "skill": "athletics",
         "alt": [
          "deception"
         ],
         "dc": 13,
         "adv": "flag.a2_live_known"
        },
        "success": {
         "text": "你踩着枕木往回跑，两头巨魔一路追上了带电的那一段。噼啪一声，洞里一股烧焦的毛味。",
         "dmgAll": "4d6",
         "type": "lightning"
        },
        "fail": {
         "text": "你没算准是哪一段，先挨电的是你自己。",
         "selfDmg": "2d6",
         "type": "lightning"
        }
       },
       {
        "id": "oil",
        "name": "泼灯油，点火",
        "desc": "巨魔能自行愈合，烧伤却好得慢。成功时，所有敌人受到 2d6 点火焰伤害，并陷入「燃烧」，持续 2 回合。失败时，行动者受到 1d6 点火焰伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "一罐灯油泼在了打头那头的胸口上，火绳一碰就着。它拿手去拍，越拍烧得越旺。",
         "dmgAll": "2d6",
         "type": "fire",
         "applyAll": {
          "cond": "burning",
          "turns": 2
         }
        },
        "fail": {
         "text": "罐子砸在铁轨上碎了，油顺着枕木淌开，烧起来的是你们自己这边的半截路。",
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
     "text": "走到一半你脚下一滑，抱着铁轨吊了好一会儿才爬上去。半袋粮食掉进了下面的黑暗里，对面那东西也被吵醒了。",
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
      "intro": "两头巨魔蹲在铁轨上。一头仍在啃枕木，另一头站了起来，头顶碰到了洞顶垂下的石笋。",
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
        "desc": "有几段铁轨仍带电，巨魔刚从水里上来。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
        "check": {
         "skill": "athletics",
         "alt": [
          "deception"
         ],
         "dc": 13,
         "adv": "flag.a2_live_known"
        },
        "success": {
         "text": "你踩着枕木往回跑，两头巨魔一路追上了带电的那一段。噼啪一声，洞里一股烧焦的毛味。",
         "dmgAll": "4d6",
         "type": "lightning"
        },
        "fail": {
         "text": "你没算准是哪一段，先挨电的是你自己。",
         "selfDmg": "2d6",
         "type": "lightning"
        }
       },
       {
        "id": "oil",
        "name": "泼灯油，点火",
        "desc": "巨魔能自行愈合，烧伤却好得慢。成功时，所有敌人受到 2d6 点火焰伤害，并陷入「燃烧」，持续 2 回合。失败时，行动者受到 1d6 点火焰伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 12
        },
        "success": {
         "text": "一罐灯油泼在了打头那头的胸口上，火绳一碰就着。它拿手去拍，越拍烧得越旺。",
         "dmgAll": "2d6",
         "type": "fire",
         "applyAll": {
          "cond": "burning",
          "turns": 2
         }
        },
        "fail": {
         "text": "罐子砸在铁轨上碎了，油顺着枕木淌开，烧起来的是你们自己这边的半截路。",
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
    "text": "把铁轨上的电引到众人的兵器上，再过桥",
    "tag": "施法者",
    "if": "is.caster",
    "combat": {
     "title": "断桥那头",
     "intro": "你按住带电的铁轨，电流沿着手臂传到了众人的兵器上。第一刀砍中巨魔，伤口当即冒烟。",
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
       "desc": "你们的武器还带着刚才的电光。成功时，所有敌人受到 2d6 点闪电伤害。",
       "success": {
        "text": "几把兵器同时落下，蓝光一闪，两头巨魔身上各添了一道焦口子。",
        "dmgAll": "2d6",
        "type": "lightning"
       }
      },
      {
       "id": "lure",
       "name": "把它们引到活轨上",
       "desc": "有几段铁轨仍带电，巨魔刚从水里上来。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "athletics",
        "alt": [
         "deception"
        ],
        "dc": 13,
        "adv": "flag.a2_live_known"
       },
       "success": {
        "text": "你踩着枕木往回跑，两头巨魔一路追上了带电的那一段。噼啪一声，洞里一股烧焦的毛味。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "你没算准是哪一段，先挨电的是你自己。",
        "selfDmg": "2d6",
        "type": "lightning"
       }
      },
      {
       "id": "oil",
       "name": "泼灯油，点火",
       "desc": "巨魔能自行愈合，烧伤却好得慢。成功时，所有敌人受到 2d6 点火焰伤害，并陷入「燃烧」，持续 2 回合。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "一罐灯油泼在了打头那头的胸口上，火绳一碰就着。它拿手去拍，越拍烧得越旺。",
        "dmgAll": "2d6",
        "type": "fire",
        "applyAll": {
         "cond": "burning",
         "turns": 2
        }
       },
       "fail": {
        "text": "罐子砸在铁轨上碎了，油顺着枕木淌开，烧起来的是你们自己这边的半截路。",
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
    "result": "你把手按在一段带电的轨上。电爬上你的胳膊，又顺着手指传到了每个人的兵器上。刃口嗡嗡直响，乌什卡的锤头上还跳着蓝火。"
   }
  ]
 },
 "a2_05b": {
  "id": "a2_05b",
  "title": "轨枕之间",
  "loc": "矮人之路 · 第三段",
  "text": [
   "巨魔啃过的枕木下面压着三具遗骨，骨头上也有牙印，还很新。",
   "一直到第三段尽头，你们一共数出来三十一具。贝尔格拉克一具一具地报年份，加莱尔一笔一笔地记。有两具是手握着手死的，已经分不清哪块骨头是谁的了。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "要带出去，就得一具一具地裹。车上挤一挤，装得下。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "一共三十一具。照矮人的规矩，名字要进账本，人要葬进石头里。账本我带着，可石头在红宝石领。"
   },
   {
    "if": "is.god",
    "text": "你脚下那段轨在嗡嗡地响。你往前走一步，前面那一段跟着亮了一下。你退回来，它又暗了。"
   }
  ],
  "choices": [
   {
    "text": "裹好每具遗骨，抬上车",
    "effects": [
     "flag rail_bones",
     "rep companies +1",
     "approval ushka +1"
    ],
    "result": "你们拆了两顶帐篷来裹骨头，布罗克拿炭笔在每个包上写了年份。装上去以后，车沉了不少。",
    "goto": "a2_06"
   },
   {
    "text": "标记地点，继续前进",
    "effects": [
     "approval belgrak +1"
    ],
    "result": [
     {
      "speaker": "贝尔格拉克",
      "text": "记下了，三十一具，第三段，左轨。账上欠他们的是一趟回家的车，不是把骨头拉走了事。"
     }
    ],
    "goto": "a2_06"
   },
   {
    "text": "让整条铁路恢复运转",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag rail_woken",
     "approval belgrak -1"
    ],
    "result": [
     "你把手掌贴在铁轨上，蓝光从你手下蹿了出去，一段接一段地亮起来，一直亮到看不见的地方。停了六千年的车皮自己动了。",
     "才一个时辰，你们就到了乔卡德枢纽。路过交轨大厅时，住在那里的地精全都爬上车顶来看，有一个还摔了下去。",
     "这一下，山里所有的东西都听见了。远处的黑暗里响起一声骨号，接着又是一声。",
     {
      "speaker": "贝尔格拉克",
      "text": "六千年，八十三段，你一个时辰就走完了。这一笔，账上没地方记。"
     },
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "交轨大厅住着好几百户地精，全睡在车皮里，现在车皮都跑起来了！他们醒了以后住哪里，你想过没有？"
     },
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "车是跑得快了，死人还是那么多。"
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
   "交轨大厅曾是矮人帝国“众矮人之国”的调车场，山里的车皮和邮件全在这里中转。贝尔格拉克一进门，就说起一张将近八千年前的军需单。",
   {
    "speaker": "贝尔格拉克",
    "text": "二十九门铜臼炮，七十六辆战车，四百一十三斗硬麦，说好正午送到。结果车都卸完了，离正午还差三分钟，麦子一粒没少！这是灰前六千五百三十八年的事。"
   },
   "讲完他把帽子摘下来，在手里攥了好一会儿，才又戴上。",
   "如今这大厅早就换了模样。转车台上一圈一圈停着几百节车皮，每一节都住着铁路潜伏者氏族的地精，家家晾着衣裳，冒着炊烟。头领布拉克坐在调度亭里守着一块账板，谁要从这里过，都得给他交钱。",
   {
    "speaker": "布拉克",
    "text": "兵团那两百号人，基尔杜姆已经按团价付过了。可你们不在那张单子上，得另算。我这里的规矩，一节车皮四十，一个人十五，拉着死人的话一具再加五个。你们这一车……给一百五吧。"
   },
   {
    "if": "flag.rail_bones",
    "speaker": "布拉克",
    "text": "车上那三十一包骨头我也看见了。照规矩得再加一百五十五。算了，都死了六千年了，这钱我不收。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "先别掏钱！做买卖得先讲价，让我来。"
   },
   {
    "if": "party.belgrak",
    "text": "贝尔格拉克的手一直放在斧柄上。他说账上记着铁路潜伏者氏族四笔债，最近的一笔是偷了一车皮铅锭。"
   }
  ],
  "choices": [
   {
    "text": "照布拉克的开价付一百五十金冠",
    "if": "!flag.a2_haggle_failed",
    "req": "gold >= 150",
    "reqText": "需要 150 金冠",
    "effects": [
     "gold -150",
     "flag a2_paid"
    ],
    "result": "布拉克在账板上划了一道，撕下一张车皮签递给你。签上画着一节车厢，车厢里还画了个躺着的小人。",
    "goto": "a2_07"
   },
   {
    "text": "照布拉克的新价付两百金冠",
    "if": "flag.a2_haggle_failed",
    "req": "gold >= 200",
    "reqText": "需要 200 金冠",
    "effects": [
     "gold -200",
     "flag a2_paid"
    ],
    "result": "布拉克收了钱，账板上划都没划，直接翻了一页。",
    "goto": "a2_07"
   },
   {
    "text": "请妮克西出面议价",
    "if": "party.nixee && !flag.a2_haggle_failed",
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "flag.khug_goblins_lease",
       "n": 2,
       "why": "玛瑙之门那份租约传到了这里"
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
      "妮克西和布拉克比着背地精的规矩，你一条我一条，背到第六十几条，布拉克认输了。最后只收六十金冠，还立了一张往后通行的约，一年一续。",
      {
       "speaker": "布拉克",
       "text": "回程不收钱了。签别丢了，丢了得按新客算。"
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
      "妮克西才背到第十九条，布拉克就报出了一条第二百二十二：身上要藏三把刀，一把给敌人，一把给朋友，还有一把捅自己，好把罪名赖到东家头上。这一条妮克西从没听过。",
      {
       "speaker": "布拉克",
       "text": "两百，不讲了。"
      }
     ],
     "effects": [
      "flag a2_haggle_failed"
     ]
    },
    "once": true
   },
   {
    "text": "亲自同布拉克讲价",
    "if": "!party.nixee && !flag.a2_haggle_failed",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "dis": "flag.khug_goblins_out"
    },
    "ok": {
     "text": "你把车上每样东西的重量都报给他听。他按斤两重新算了一遍，算出来是六十金冠，还跟你立了一张往后通行的约。",
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
       "text": "你讲价的样子倒像个矮人。两百。"
      }
     ],
     "effects": [
      "flag a2_haggle_failed"
     ]
    }
   },
   {
    "text": "用地精语讨个亲戚价",
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
     "你报了自己的氏族，又说了奴工断链那天你在哪条街上。布拉克听完，把账板翻到了背面，那一面的数小得多。",
     {
      "speaker": "布拉克",
      "text": "六十，签你拿着。往后你的车都按亲戚价算，不过车上那些大个子不算。"
     }
    ],
    "goto": "a2_07"
   },
   {
    "text": "划掉兵团账上的铅锭旧债，抵过路费",
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
     "账本翻到九百多页，上面记着灰元 1302 年，铁路潜伏者氏族偷铅锭一车皮。你当着布拉克的面把这一笔划了，在旁边写上“抵过路费，两清”。",
     {
      "speaker": "布拉克",
      "text": "一车皮铅换你们一趟来回，划算。那是我爷爷偷的，我认。"
     },
     "兵团里有几个老兵把脸扭到了一边。那一车铅当年是他们哪一家的，你没有问。"
    ],
    "goto": "a2_07"
   },
   {
    "text": "等到半夜，从机修棚偷偷绕过去，不交钱",
    "check": {
     "skill": "stealth",
     "dc": 14,
     "party": true,
     "adv": "is.small"
    },
    "ok": {
     "text": "机修棚里堆着拆下来的车轮，正好挡住你们。板车的轮子上缠了布，一点声音都没有。到天亮时，转车台已经落在身后了。",
     "goto": "a2_07"
    },
    "fail": {
     "text": "有只车轮倒了，骨碌碌滚出去好远，车顶上马上亮起了一排灯笼。",
     "combat": {
      "title": "转车台",
      "intro": "车顶上刚缩回一排脑袋，另一排便冒了出来。布拉克夹紧账板，退到转车台另一端。",
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
        "desc": "空车皮留在坡上，固定它的闸木已经松动。成功时，所有敌人受到 3d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 13
        },
        "success": {
         "text": "道岔咔哒一声扳了过去，空车皮顺着坡溜下来。地精纷纷往两边跳，没跳开的几个都被撞倒了。",
         "dmgAll": "3d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "道岔扳错了一格，空车皮停在了半坡上。地精们站在车顶上给你鼓掌。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "shout",
        "name": "冲布拉克喊一个价",
        "desc": "再打下去对方也会亏钱，可以让他自己算算。成功时，本场战斗直接获胜。",
        "check": {
         "skill": "persuasion",
         "alt": [
          "intimidation"
         ],
         "dc": 14
        },
        "success": {
         "text": "你喊了个数。布拉克在账板上划了两下，吹了声口哨，地精们就把刀收了。有一个还替你把掉在地上的火把捡了起来。",
         "end": "win"
        },
        "fail": {
         "text": "布拉克直摇头，说你喊的这个数连车皮的折旧都不够。"
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
    "text": "拒付，强行通过",
    "effects": [
     "world room -1"
    ],
    "combat": {
     "title": "转车台",
     "intro": "车顶上刚缩回一排脑袋，另一排便冒了出来。布拉克夹紧账板，退到转车台另一端。",
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
       "desc": "空车皮留在坡上，固定它的闸木已经松动。成功时，所有敌人受到 3d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "道岔咔哒一声扳了过去，空车皮顺着坡溜下来。地精纷纷往两边跳，没跳开的几个都被撞倒了。",
        "dmgAll": "3d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "道岔扳错了一格，空车皮停在了半坡上。地精们站在车顶上给你鼓掌。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "shout",
       "name": "冲布拉克喊一个价",
       "desc": "再打下去对方也会亏钱，可以让他自己算算。成功时，本场战斗直接获胜。",
       "check": {
        "skill": "persuasion",
        "alt": [
         "intimidation"
        ],
        "dc": 14
       },
       "success": {
        "text": "你喊了个数。布拉克在账板上划了两下，吹了声口哨，地精们就把刀收了。有一个还替你把掉在地上的火把捡了起来。",
        "end": "win"
       },
       "fail": {
        "text": "布拉克直摇头，说你喊的这个数连车皮的折旧都不够。"
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
    "text": "交了过路费的客人能吃上一顿饭。厨房设在一节旧邮车里，墙上分信用的格子如今成了碗架。锅里炖的是黄光蘑菇，这种蘑菇炖熟了还在发亮，连汤都是金色的。"
   },
   {
    "if": "flag.a2_paid",
    "text": "掌勺的地精说，这里的规矩是祭司先尝，尝了没事，别人才能动勺子。{?party.tan:阿坦尝了一口，说咸。|你们车上的祭司尝了一口，说咸。}一屋子地精这才低下头喝起汤来。"
   },
   {
    "if": "!flag.a2_paid",
    "text": "没交钱的客人没有饭吃。你们在铁道旁边扎了个冷营，啃着干饼。铁轨上偶尔跳过一道蓝光，你们就借着那点亮看看彼此的脸。"
   },
   {
    "if": "party.tan",
    "text": "阿坦看着那根刻了痕的蜡烛做晨祷。晨祷一共四十一句，他只念四十句，念得不快。{?flag.a2_paid:一屋子地精都端着碗看他，连勺子都停了。|铁道那头有几个放哨的地精，听着听着就坐下了。}念完第四十句，他停住了。"
   },
   {
    "if": "party.tan && flag.a2_paid",
    "speaker": "掌勺的地精",
    "text": "后面是不是还有一句？"
   },
   {
    "if": "party.tan && flag.a2_paid",
    "speaker": "阿坦",
    "text": "还有一句，是“愿银龙再临”。那一句我不念。"
   },
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "我跟雷萨格第一次下这条线，那是灰元一三九……"
   },
   {
    "if": "party.belgrak",
    "text": "雷萨格是谁，贝尔格拉克没有交代，只把烟斗在鞋底磕了磕。"
   },
   {
    "if": "party.garaele",
    "text": "加莱尔回来时手里攥着一张纸，是从一个地精手里买的。那地精说，三个月前有一对精灵夫妇路过这里，拿纸和墨付了过路费，后来往乔卡德枢纽去了。纸上是她母亲的字，写的是一张收条。"
   }
  ],
  "choices": [
   {
    "text": "尝一碗锅里的炖菜",
    "if": "flag.a2_paid",
    "once": true,
    "check": {
     "abil": "con",
     "dc": 12,
     "save": true,
     "adv": "is.goblin"
    },
    "ok": {
     "text": "汤有点辣，回味里带着一股土味。你一口气喝了两碗，嘴唇亮了一个晚上。",
     "effects": [
      "heal 2d4"
     ]
    },
    "fail": {
     "text": "过了半个时辰，你脸上起了一片紫点子。地精们说这叫紫热，喝不惯这汤的人都这样，明天早上就消了。他们笑了整整一晚上，第二天还在笑。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "观察布拉克私下与谁接触",
    "if": "flag.a2_paid",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "饭吃到一半，布拉克出去了一趟，回来时腰上多了一串黑石头珠子。那种石头只有山下的黑皮兽人才用。看来过路人的去向，他也拿去卖给黑皮兽人。",
     "effects": [
      "flag a2_brack_seen"
     ]
    },
    "fail": {
     "text": "你盯了他一个晚上，只看出来他饭量很大。临走时他拍拍你的肩膀，说盯人也是一门手艺，下次要按次收钱。",
     "effects": [
      "gold -2"
     ]
    }
   },
   {
    "text": "再付六十金冠，请布拉克别泄露你们的行踪",
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
      "text": "你们往哪边走，我不知道。你们来没来过，我也不知道。不过这个价钱只管一个月。"
     }
    ]
   },
   {
    "text": "提醒布拉克：你们签过通行的约",
    "if": "flag.a2_brack_seen && flag.rail_contract",
    "once": true,
    "effects": [
     "flag brack_bought"
    ],
    "result": [
     {
      "speaker": "布拉克",
      "text": "约上有这么一条，签了约的车算自家的车，自家的车往哪里走，不往外说。这一条还是我自己写的，差点忘了。"
     }
    ]
   },
   {
    "text": "睡到天亮",
    "effects": [
     "rest short"
    ],
    "result": "{?party.tan:你们轮流守夜。什么时候算天亮，由阿坦说了算，他说亮了，大家就起来。|你们轮流守夜，谁也不知道外面几时天亮，睡够了就起来。}",
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
   "在乔卡德枢纽以西的一座旧泵房里，你们找到了加莱尔父母的勘测营。泵房是胡尔-乔卡德的矮人修的，一人粗的铅管还嵌在墙里。墙角支着两张铺，两具遗体各躺一张，身上盖着自己的斗篷。他们已经死了三个月。",
   "屋里的东西没怎么翻动过，墨水瓶还立着，笔还插在里面。门是从里面拿一张桌子顶上的，桌子腿已经断了。",
   "桌上摊着一本勘测簿。最后一行是女人的笔迹，写的是“铅管内壁无锈，乔卡德的匠人不拿铅管走饮水，此说可信”。写到这里滴了一点墨，后面就没有了。",
   {
    "if": "party.ushka",
    "text": "乌什卡第一个进去看了伤口。看完她出来洗手，洗了很久。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "是黑石头的矛头，断在骨头里了，一共三处。是黑皮兽人干的。"
   },
   {
    "if": "is.god",
    "text": "加莱尔站在门口。你刚想说你能让他们活过来，她先开了口。"
   },
   {
    "if": "is.god",
    "speaker": "加莱尔",
    "text": "请别这么做。我要记下来的，是他们死了。"
   },
   {
    "if": "!is.god",
    "text": "加莱尔站在门口，把本子打开又合上，始终没有进去。"
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
    "text": "搜查泵房，找两位老人藏起来的东西",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "烟道口那几块砖上的灰是新抹的。你抽出两块砖，里面藏着一本拓片本，拿油布包了三层。看得出来，两位老人是先把本子藏好，才去顶的门。",
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
     "text": "你们拆了半面墙，才在烟道里摸到了那本拓片本。拆的时候有一块砖砸在了你的脚背上。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "查看两人的死因和经过",
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
     "text": "你看了半天，只看出他们是一起躺下的。你的手背还被铅管上的毛刺刮了一道。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "告诉加莱尔：她父母走得快，没受苦",
    "effects": [
     "var lies +1",
     "flag lied_to_garaele"
    ],
    "result": [
     "她点点头，低头在本子上写了几个字。她写得很慢，写完又把那几个字看了两遍。",
     {
      "if": "party.ushka",
      "text": "乌什卡在你身后哼了一声，转身去给遗体裹斗篷了。"
     }
    ],
    "goto": "a2_09"
   },
   {
    "text": "如实告诉加莱尔：她父母走得并不快",
    "effects": [
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +1"
      ]
     }
    ],
    "result": [
     "你把门、桌子和那三处伤一样一样告诉了她。她一边听一边记，中间只问了一句，桌子是谁顶上去的。",
     {
      "speaker": "加莱尔",
      "text": "准是我母亲顶的。她顶门从来顶不牢。"
     }
    ],
    "goto": "a2_09"
   },
   {
    "text": "把这个问题留给乌什卡回答",
    "if": "party.ushka",
    "effects": [
     "approval ushka +1"
    ],
    "result": [
     {
      "speaker": "乌什卡",
      "text": "不快。她先挨的。他爬回去，躺在她旁边。"
     },
     "加莱尔把这三句话一字不改地记了下来，又在后面添了个日子。"
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
   "加莱尔的父母信月神，该葬在月光下。你抬起头，头顶的岩层足有半座山厚。",
   {
    "speaker": "加莱尔",
    "text": "我们家上一次办丧事是在船上，把人放进海里。这是我祖母讲给我听的，那已经是四百多年前的事了。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "拿石头垒起来，谁也挖不动。埋在这里也行。"
   },
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "兵团里有个砌匠，三尺见方的活，四个时辰就能砌好。照我们矮人的规矩，人是要葬进石头里的。"
   },
   {
    "if": "party.tan",
    "text": "阿坦说他只会念神王的悼词，月神的不会。加莱尔说不要紧，神王的悼词她听过，句子都不长。"
   },
   "加莱尔问哪边是通往地面的方向，因为照规矩，死者的脸得朝着月亮升起来的那一边。贝尔格拉克拿斧柄在地上划了一道，说东偏北，往上两千尺。",
   {
    "if": "is.god && party.tan",
    "text": "阿坦把蜡烛举到你面前，问你知不知道外面这时是什么时辰。你当然知道，也告诉了他。可他听完，还是低头看了一眼蜡烛上的刻痕。"
   }
  ],
  "choices": [
   {
    "text": "就地垒石安葬，由阿坦致词",
    "effects": [
     "flag parents_buried_deep",
     "world unburied -1",
     "var rites +1",
     "log 守昔者夫妇，葬在乔卡德枢纽以西的泵房外，石垒三尺。"
    ],
    "result": "石头垒到了齐胸高。阿坦念了晨祷的头四句，念完看了加莱尔一眼。加莱尔在最上面那块石头上刻了个月牙，刻歪了，她没有改。",
    "goto": "a2_10"
   },
   {
    "text": "亲自主持月神葬礼",
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
    "result": "这段悼词各家神殿念的都差不多，只是月神这里多出一句，求她让死者认得回家的路。加莱尔跟着你念了那一句，声音比你低一些。",
    "goto": "a2_10"
   },
   {
    "text": "引月光入山，为两人下葬",
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
     "泵房外面亮了起来。一道白光从石缝里落下来，正好照在两个坑上。",
     {
      "speaker": "加莱尔",
      "text": "这不是月光，这是你。"
     },
     "可她还是让你们埋了。在那一页上，她写的是“入土，光自称为月”。"
    ],
    "goto": "a2_10"
   },
   {
    "text": "带走遗体，出山后在月下安葬",
    "effects": [
     "flag parents_carried",
     "log 守昔者夫妇，裹好上了车，等一个有月亮的晚上。"
    ],
    "result": "你们拿油布把遗体裹了三层，用绳子捆紧。车上多了两副担架，推起来沉了不少。加莱尔走在车边，一只手一直扶着担架。",
    "goto": "a2_10"
   }
  ]
 },
 "a2_10": {
  "id": "a2_10",
  "title": "兵团分家",
  "loc": "乔卡德枢纽 · 旧站台",
  "text": [
   "三条铁道在乔卡德枢纽交会，站台延伸半里。收税的铜牌仍钉在柱上，一排窗口后面却空无一人。",
   "兵团这一路下来，近处的几笔旧债都讨完了，讨回来一面家传的盾、一扇刻着名字的门，还有三个兽人头目的牙。合同上写的数目已经够了。",
   {
    "speaker": "基尔杜姆",
    "text": "合同上写的是讨十二笔，我们已经讨了十四笔，早就够数了。我说该回去了。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "名单上一共三百一十二条，才讨了十四条，回什么回？翻下一页。"
   },
   "老兵们当场分成了三堆。一堆要往胡尔-乔卡德去讨一批铅，说那是祖上被人抢走的。一堆要回交轨大厅去找叔公的一把斧子。剩下一堆干脆蹲着不动，等别人吵完再说。布罗克坐在自己的铲子上，哪一堆也不去。"
  ],
  "first": [
   "level 5"
  ],
  "choices": [
   {
    "text": "劝老兵们先讨近处的债，再回头找远的",
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
       "why": "冒险团里有你们的名声"
      }
     ]
    },
    "ok": {
     "text": "你说胡尔-乔卡德就在下一站，铅跑不了，斧子也跑不了，不如先去近的，回头再找远的。三堆人听着听着，慢慢并成了一堆。基尔杜姆趁机喊了一声列队，这次总算有人应了。",
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done"
     ]
    },
    "fail": {
     "text": "你才说到一半，要斧子的那堆人已经背上包走了。这一走就少了三分之一的人，站台上空出一大块。",
     "effects": [
      "flag a2_split_done"
     ]
    }
   },
   {
    "text": "翻开账本，按年份排出讨债的先后",
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
     "text": "你先翻到记着那批铅的一页，念了它是哪一年给抢走的，又翻到斧子那一页念了一遍。按年份是铅在前，斧子在后。照着祖宗记账的先后一笔一笔讨，老兵们没话说了。",
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done"
     ]
    },
    "fail": {
     "text": "你念错了一个年份，一差就是三百年。要斧子的那堆人笑着背上包走了。这一走就少了三分之一的人。",
     "effects": [
      "flag a2_split_done"
     ]
    }
   },
   {
    "text": "支持基尔杜姆，主张后人无权挑选祖债",
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
      "你站到年轻的队长身后，替他把合同和名单一条一条对了一遍。合同在前，名单在后，哪个先签就先算哪个。基尔杜姆的腰板一下直了，老兵们也一个一个站回了队里。",
      {
       "speaker": "贝尔格拉克",
       "text": "照你这么说，先签的先算，那就该先讨第一条。第一条可是议会之门。"
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
     "text": "你讲祖宗，老兵们听得直点头，可点完了头照样分家。走的那三分之一里，还有人临走拍了拍基尔杜姆的肩膀。",
     "effects": [
      "flag a2_split_done",
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "请愿意继续的人举手",
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
     "text": "站台上安静了片刻。第一个举手的是布罗克，他举的是铲子。后面稀稀拉拉跟上来一片，到最后连要斧子的那堆也举了手，说斧子回头再找也不迟。",
     "effects": [
      "flag company_whole",
      "rep companies +1",
      "flag a2_split_done"
     ]
    },
    "fail": {
     "text": "举手的还不到一半。没举手的那些人自己点了点数，觉得人够多了，背上包就往回走。",
     "effects": [
      "flag a2_split_done"
     ]
    }
   },
   {
    "text": "当众免去守昔者夫妇的护送费",
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
     "账本上有这么一条，守昔者夫妇欠兵团护送费四十金冠。你提笔把它划了，在旁边添了一行字：“人已故，两清”。",
     "有个老兵嘟囔了一句钱总归是钱。旁边那个拿胳膊肘捅了他一下，说{ta}连死人的账都肯划，你就少说两句吧。",
     "加莱尔把你写的那行字抄进了她自己的本子里。"
    ]
   },
   {
    "text": "不插手，由他们吵，自己去收拾板车",
    "if": "!flag.a2_split_done",
    "once": true,
    "effects": [
     "flag a2_split_done",
     "rep companies -1"
    ],
    "result": "吵到最后，要斧子的那堆人还是走了，兵团少了三分之一的人。基尔杜姆看了你一眼，意思是你本来可以帮着说两句的。"
   },
   {
    "text": "乘站台边的手摇车去胡尔-乔卡德",
    "if": "flag.a2_split_done && !flag.rail_woken",
    "goto": "a2_11"
   },
   {
    "text": "搭自行运转的列车去胡尔-乔卡德",
    "if": "flag.a2_split_done && flag.rail_woken",
    "result": "铁道还亮着，车皮载着你们一路往下滑，到了胡尔-乔卡德的站台自己就停了。站台上的灰被风吹开了一片，露出下面一排脚印。脚印是新踩的，都是光脚。",
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
   "手摇车是四个轮子上架一块铁板，中间竖一根压杠，两个人一上一下地压着就能走。你们刚把车推上轨道，背后的黑暗里便响起爪子刮石头的声音，一下接一下，不紧不慢。",
   "追来的是黑皮兽人的探子。他们自己走路不出声，出声的是他们牵着的钩爪怪。",
   "站台尽头的墙上刻着一张线路图，三条线在这里交会。从前胡尔-乔卡德的矮人就守着这个路口，每过一趟车收一次税。图上的下行线，有一段被人拿刀划掉了。",
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "前面有三个岔口，第一个往左，第二个往右。第三个岔口有一条线是断的，可到底是哪一条，我忘了。"
   }
  ],
  "first": [
   "codex black_orcs",
   "var a2_miss =0"
  ],
  "choices": [
   {
    "text": "用力压杠，加速前进",
    "if": "!flag.a2_c1",
    "once": true,
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "压杠一上一下，车轮越转越快，后面的爪子声一下远了。",
     "effects": [
      "flag a2_c1"
     ]
    },
    "fail": {
     "text": "压杠的两个人没对上拍子，车猛地颠了一下。后面的声音更近了，连喘气声都听得见。",
     "effects": [
      "flag a2_c1",
      "var a2_miss +1"
     ]
    }
   },
   {
    "text": "在第一个岔口扳道左转",
    "if": "flag.a2_c1 && !flag.a2_c2",
    "once": true,
    "check": {
     "skill": "sleight",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "你探出半个身子扳了道岔。车拐过去时，左边的轮子离了一下轨，又落了回去。",
     "effects": [
      "flag a2_c2"
     ]
    },
    "fail": {
     "text": "道岔锈死了，你扳了两下才扳动，车速一下掉了一半。后面飞来一支矛，扎在了车尾的铁板上。",
     "effects": [
      "flag a2_c2",
      "var a2_miss +1"
     ]
    }
   },
   {
    "text": "辨认前方断开的铁轨",
    "if": "flag.a2_c2 && !flag.a2_c3",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "右边那条线的轨面上没有蓝光，断的就是它。你喊了一声，车往左去了。",
     "effects": [
      "flag a2_c3"
     ]
    },
    "fail": {
     "text": "你看错了。车冲上了右边那条线，没跑多远铁轨就到头了。你们赶紧跳车，车一头翻进了黑暗里。",
     "effects": [
      "flag a2_c3",
      "var a2_miss +1",
      "hp -3"
     ]
    }
   },
   {
    "text": "停车迎战追兵",
    "if": "flag.a2_c3 && var.a2_miss >= 2",
    "combat": {
     "title": "下行线",
     "intro": "手摇车停了下来。后面爪子刮石头的声音还在响，一下比一下近。",
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
       "desc": "车身是铁的，这段轨道一路下坡。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "你一脚踹开了闸，空车顺着坡倒冲回去，正撞在钩爪怪的腿弯上。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "闸卡死了。你使劲一拽，只拽下来一根闸杆。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "switch",
       "name": "把道岔扳到断线上",
       "desc": "前面的铁轨已经断了，追兵并不知情。成功时，所有敌人陷入「倒地」，持续 1 回合。",
       "check": {
        "skill": "sleight",
        "dc": 14
       },
       "success": {
        "text": "道岔一动，冲在最前面的两个一脚踩空，连人带矛摔到了断轨下面。",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "道岔纹丝没动，你的手指头差点被夹在里面。"
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
    "text": "甩掉追兵，前往胡尔-乔卡德",
    "if": "flag.a2_c3 && var.a2_miss < 2",
    "effects": [
     "xp 200"
    ],
    "result": "后面的爪子声渐渐听不见了。车滑进胡尔-乔卡德的站台，停在了一排倒塌的澡堂柱子前面。",
    "goto": "a2_12"
   }
  ]
 },
 "a2_12": {
  "id": "a2_12",
  "title": "竖井口",
  "loc": "胡尔-乔卡德 · 通往最底层的竖井口",
  "text": [
   "胡尔-乔卡德是一座矮人旧堡，当年专管故道里的水道。水早就干了，澡堂的青白瓷砖却完整如初。通往底层的竖井口压着三尺厚的铅封，井下也已塌实，没法通行。",
   "井壁上刻着字，不是矮人的字。那是先驱精灵留下的。他们是最古老的一代精灵，当年有一支兵困在了这座堡里。刻的是一段值夜的祷词，把他们信的神一位一位列了出来，末尾是他们主将的名字。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "这一位是“天上的卡斯特拉尔”，跟你们人类的神王卡斯特洛斯只差一个音。主将的名字，应该念作杜卡涅尔。"
   },
   {
    "if": "!party.garaele",
    "text": "你照着字母一个一个往下拼，拼出来一位神叫“天上的卡斯特拉尔”，跟人类的神王卡斯特洛斯只差一个音。主将的名字叫杜卡涅尔。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡听了一会儿，哼出一句唱词来。她说这是小时候老萨满唱的，唱的是造出兽人的那位神，名字叫杜坎尼尔，跟墙上那个精灵主将只差一个音。"
   },
   {
    "if": "!party.ushka",
    "text": "塌方那头有人在唱歌，听嗓子是个老萨满。他唱的是造出兽人的那位神，名字叫杜坎尼尔，跟墙上那个精灵主将只差一个音。"
   },
   "塌方那头的人不唱了，骂起人来。他是破碎之冠氏族的，信奉的是兽人的神杜坎本人。他骂已死的大酋长杜坎森是假先知，说当年锁住杜坎的明明是矮人，杜坎森却把这笔账算到了人类头上。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "一共八位，第一位就是王。可他是刻在精灵墙上的，比我们的庙早了几千年。原来王是精灵的神，从来就不是我们的。"
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
    "text": "按刻痕手法判断年代",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "刻字用的是精灵的凿子，下刀从左往右，跟矮人正好相反。字下面还压着一层更老的矮人刻痕，已被人铲平。这确实是先驱精灵的手笔。",
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
     "text": "你凑得太近，袖口把拓片蹭糊了一角。加莱尔一句也没埋怨，自己又拓了一张。",
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
    "text": "核对祷词格式",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "祷词是先唤神的名字，再报时辰，最后一句求天明，跟阿坦的晨祷是一个格式。阿坦把两份对着念了一遍，念到最后才发现两边都少了末尾一句。",
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
     "text": "你认了半天也没认出名堂。塌方那头的萨满听见你嘀嘀咕咕，隔着石堆扔过来一块石头。",
     "effects": [
      "damage 1d4"
     ]
    }
   },
   {
    "text": "探查竖井底部",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "井底有一道法术留下的残迹，摊开来比整座堡还宽。铅封压了它六千年，它居然还没散。你把手收回来，手指尖都是凉的。"
    },
    "fail": {
     "text": "你刚往下一探，就有个东西把你顶了回来。你一屁股坐在地上，耳朵里嗡嗡响了很久。",
     "effects": [
      "damage 1d6"
     ]
    }
   },
   {
    "text": "清理坍塌的通道",
    "once": true,
    "effects": [
     "damage 1d8"
    ],
    "result": "你才搬开一块，上面就掉下来三块。贝尔格拉克说，胡尔-乔卡德的塌方是一层压着一层的，搬一块就要再塌一丈。"
   },
   {
    "text": "隔着塌方与老萨满对唱",
    "tag": "退潮的人",
    "if": "origin == 'tide' && !flag.a2_sang",
    "once": true,
    "effects": [
     "flag a2_sang"
    ],
    "result": "你起了个头，那边停了一下，接上了。他唱一句，你接一句，唱到杜坎尼尔的名字时，两边是一齐唱出来的。唱完，他问你是哪个氏族的。"
   },
   {
    "text": "替杜坎森回话",
    "tag": "退潮的人",
    "if": "origin == 'tide' && flag.a2_sang",
    "once": true,
    "check": {
     "skill": "intimidation",
     "dc": 14
    },
    "ok": {
     "text": "你说是杜坎森带着你们出了山，你们才见到了天。那边很久没有出声，后来回了一句：天上也没什么好看的。",
     "effects": [
      "rep clans +1"
     ]
    },
    "fail": {
     "text": "你吼了一句，那边吼回来一长串诅咒。那些话你听都没听过，里面还带着你的氏族名。",
     "effects": [
      "rep clans -1"
     ]
    }
   },
   {
    "text": "问是谁给杜坎戴上锁链",
    "tag": "退潮的人",
    "if": "origin == 'tide' && flag.a2_sang",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13
    },
    "ok": {
     "text": "他说老辈人是这么讲的：杜坎只想找块地方住，是矮人把他锁了起来。后来杜坎森改了口，把地面上的神也算成了仇人，好让你们出山去砸人类的庙。说完他就走了，脚步声渐渐往下去远了。",
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
     "text": "他听出你是杜坎森的人，只回了一句，让你去问你们那个假先知。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "跟乌什卡一起哼出那句唱词",
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
    "result": "你都不知道自己会这一句，可一张嘴它就出来了，调子跟你阿妈当年哄你睡觉时哼的一模一样。塌方那头的萨满不骂了。"
   },
   {
    "text": "念出儿时听过的那两个名字",
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
     "祷词里有两位神的名字，你小时候在摇篮曲里听过。那支曲子没有词，只有名字，一个接一个，唱到第七个你就睡着了。可墙上这一列有八个，多出来的那一个，你家的曲子里没有。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "原来你家也唱这一支。"
     }
    ]
   },
   {
    "text": "挪开落石，揭开铅封",
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
     "石头你挪得动，三尺厚的铅你也掀得动。可你才掀开一角，下面就有个东西应了一声。它很旧，很大，它应的并不是你。",
     "全队的人都喊你停手，你没停。井壁裂开了一道缝，转眼又自己合上了。到头来还是下不去。",
     "塌方那头的老萨满喊了起来，说造物主翻身了。喊完他又隔着石头问你是哪一位神，是替谁来开锁的。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "停手。下面那个东西应的不是你。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔低声念了一遍她在本子上记下的那行字：“某神开井，未开。”"
     }
    ]
   },
   {
    "text": "收好拓片，去上层闸口",
    "result": "拓片卷好塞进了竹筒，加莱尔把竹筒挂在自己脖子上。你们正往上走，后面的黑暗里响了一声骨号。",
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
   "上层闸口吊着一道一尺厚的铅闸，挂在两根铜链上。早年乔卡德湖涨水，矮人一夜要放三次闸，闸轮的把手都磨亮了。如今你们要靠它挡住的，是从后面追上来的黑皮兽人。",
   "骨号连响了三声，黑皮兽人的大队到了。他们不喊也不叫，矛头是黑曜石的，在灯下一点光也不反。走在前面吹号的那一个，手里的号是拿深渊鸦的腿骨做的。",
   {
    "if": "flag.company_whole",
    "text": "负怨者兵团两百人一个不少，背靠着铅闸站了三排。基尔杜姆站在最前面，这次是他自己站过去的。"
   },
   {
    "if": "!flag.company_whole",
    "text": "负怨者兵团剩下的人背靠着铅闸站了两排，第二排还没站满。"
   },
   {
    "if": "flag.rail_woken",
    "text": "来的比预想的多。铁道亮过那次，山里每一个窝都听见了。"
   },
   {
    "if": "is.god",
    "text": "吹号的那个越过兵团看见了你。黑皮兽人的规矩是先杀对面最强的那一个。他来回看了一圈，认准了是你。"
   },
   {
    "if": "party.belgrak",
    "speaker": "贝尔格拉克",
    "text": "来了四十个。闸轮在左边，得转一百二十圈才能把闸放下来。谁去转？"
   }
  ],
  "first": [
   "codex black_orcs"
  ],
  "choices": [
   {
    "text": "独守闸口，让同伴转闸轮",
    "tag": "战士系",
    "if": "is.martial && !flag.a2_held",
    "once": true,
    "effects": [
     "flag a2_held",
     "hp -6"
    ],
    "result": "你站到了闸口正中间。第一支矛扎在你脚前的地上，第二支扎进了你的肩膀。身后的闸轮已经响起来了，一圈，两圈。"
   },
   {
    "text": "背靠铅闸挡住来敌",
    "if": "!(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "!(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "(flag.brack_bought || flag.rail_contract) && !flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "!(flag.brack_bought || flag.rail_contract) && flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "!(flag.brack_bought || flag.rail_contract) && flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "(flag.brack_bought || flag.rail_contract) && flag.rail_woken && flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮终于转动，铅闸猛然落下，你脚底都震了一下。一尺厚的铅隔在中间，外面的号声顿时闷了。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
    "text": "背靠铅闸挡住来敌",
    "if": "(flag.brack_bought || flag.rail_contract) && flag.rail_woken && !flag.company_whole",
    "combat": {
     "title": "铅闸",
     "intro": "黑暗里响了三声骨号。兵团靠着铅闸站好，基尔杜姆喊了什么，没人听清。",
     "specials": [
      {
       "id": "drop",
       "name": "放下铅闸",
       "desc": "闸轮已有锈迹。一旦铅闸落下，就能把追兵留在外面。成功时，本场战斗直接获胜。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "闸轮转起来了，铅闸轰的一声砸下来，地都颤了一下。闸外面的号声隔着一尺厚的铅，一下闷了下去。",
        "end": "win"
       },
       "fail": {
        "text": "闸轮才转了半圈就卡住了。你的肩膀也使不上劲了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "spark",
       "name": "把活轨的电引到闸口",
       "desc": "闸口下方有一截通着电的旧轨。成功时，所有敌人受到 4d6 点闪电伤害。失败时，行动者受到 2d6 点闪电伤害。",
       "check": {
        "skill": "arcana",
        "dc": 14
       },
       "success": {
        "text": "你把那段轨上的电引了出来，一道蓝光贴着地面扫过去，闸口外面站着的全都被电得一跳。",
        "dmgAll": "4d6",
        "type": "lightning"
       },
       "fail": {
        "text": "电没听你的，顺着你自己的胳膊走了一遍。",
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
   "铅闸落下来，把黑皮兽人挡在了外面。可一尺厚的铅板也隔不住骨号声，一直响到后半夜才消停。",
   {
    "if": "flag.brok_lives",
    "text": "兵团的布罗克坐在闸旁边擦他的铲子。铲刃上崩了一个口子，他倒说崩得好，往后挖坑就有记号了。"
   },
   {
    "if": "!flag.brok_lives",
    "text": "布罗克死在了闸口，铲子还压在身子下面。兵团的人把他抬到墙根，跟另外几个战死的并排放在一起。他那把铲子，谁也没去拿。"
   },
   "贝尔格拉克摊开他那份名单，上面记着矮人祖上三百一十二笔没讨回的旧债。他给你们讲起了议会之门，那是矮人帝国当年的都城。他说那里的大厅有三层拱廊，每层点着一百二十盏灯，尽头坐着一尊石头的王，眼睛是琥珀做的。他自己并没有见过，这些灯是他爷爷数给他听的，可他讲的时候，两只眼睛是亮的。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我多问一句，灯是您爷爷数的，那他老人家自己见过吗？"
   },
   {
    "if": "party.garaele",
    "speaker": "贝尔格拉克",
    "text": "他也没见过。是他爷爷见过。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "明天我往深处去，愿意来的就跟着。照着名单一条一条讨，一直讨到议会之门。"
   },
   {
    "speaker": "基尔杜姆",
    "text": "合同到这里就完了。"
   },
   {
    "speaker": "贝尔格拉克",
    "text": "合同完了，名单还没完。"
   }
  ],
  "choices": [
   {
    "text": "留意他刻意跳过哪页名单",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14,
     "adv": "flag.a2_knows_belgrak"
    },
    "ok": {
     "text": "名单有一页的页边写着一行没编号的小字：“雷萨格·铁眉，欠一句话”。每次翻到这一页，他总是翻得飞快，翻过去以后嗓门还要大上一截。看来他欠这个叫雷萨格的人一句话，一直没说出口。",
     "effects": [
      "flag a2_rethag"
     ]
    },
    "fail": {
     "text": "你听了一晚上，只听出他念到第一百条就开始打哈欠。后来他发觉你在听，干脆把名单卷了起来。",
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "劝他当众勾销一笔旧债",
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
      "你说哪怕只划一条也好，让大家看看，账原来是可以划掉的。他盯着你看了很久，提笔在第一条上划了一道。那一条是议会之门，灰前五千八百八十八年。页边那行小字他没有划。",
      "{?is.god:兵团里有人说，那一笔不算他自己划的，是神按着他的手划的。乌什卡说，你替他划了，那笔债还是没人还。|老兵们盯着那道墨看了一会儿，有一半人站起来走开了。}"
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
     "text": "他听完，把名单折好揣回了怀里。他说三百一十二条，一条也不能少，少了一条就不是他的名单了。",
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "讲科琳释放三名降兵的往事，劝他勾销一笔",
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
      "你说科琳在血腐阶梯那天放走过三个投降的兽人，一个也没记账。他认得你，那一仗你们站在同一道盾墙里。他听完，在第一条上划了一道。那一条是议会之门，灰前五千八百八十八年。页边那行小字他没有划。",
      "{?is.god:兵团里有人说，那一笔不算他自己划的，是神按着他的手划的。乌什卡说，你替他划了，那笔债还是没人还。|老兵们盯着那道墨看了一会儿，有一半人站起来走开了。}"
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
     "text": "他说她是她，我是我，她放走的那些，在我账上一个也没少。说完他把名单揣回了怀里。",
     "effects": [
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "先划掉自己账上的玛瑙之门，再请他照做",
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
      "{?flag.entry_struck:你把五年前就划掉的那张账页举起来，给全团的人看。|你抽出那张账页，上面记的是玛瑙之门，一四二四年。你当着全团的面把它划了。}贝尔格拉克看了好一会儿，在自己的第一条上也划了一道。那一条是议会之门。",
      "{?is.god:兵团里有人说，那一笔不算他自己划的，是神按着他的手划的。乌什卡说，你替他划了，那笔债还是没人还。|老兵们盯着那两道墨看了一会儿，有一半人站起来走开了。}"
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
     "text": "你的那一条划掉了，他的没有。他说你划你的，我讨我的，兵团的规矩向来是一人一本账。",
     "effects": [
      "flag entry_struck",
      "approval belgrak -1"
     ]
    }
   },
   {
    "text": "同他握手，不加阻拦",
    "effects": [
     "flag belgrak_lost",
     "quest q_list fail",
     "approval belgrak +1"
    ],
    "result": [
     "他的手很硬，指节上全是老茧。握完手，他从腰上解下一盏矿灯塞给你，说他一个人提不了两盏。",
     {
      "speaker": "贝尔格拉克",
      "text": "你们那边人数对得上就好。我这边就不用对了。"
     }
    ],
    "goto": "a2_16"
   },
   {
    "text": "跟他下去，准备背他出来",
    "effects": [
     "approval belgrak +1"
    ],
    "result": "他哼了一声，说你们人类在下面连三天都走不了。话是这么说，他还是分了一盏灯给你们。",
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
   "第一天有三十人跟着贝尔格拉克往山腹深处走，第二天只剩十一人，到了第三天，陪着他的只有你们几个。路也越走越窄，最后一段只能侧身挤过。",
   "钩爪怪抓伤了贝尔格拉克的腿，他用布一扎，接着念名单。每念一条，他就指个方向，领你们往前走。",
   {
    "speaker": "贝尔格拉克",
    "text": "第二百九十一条。从这里往东三里有一座小堡，欠着一扇门。门早就没了，可账还在。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "他再走一天，就得我来抬他了。"
   },
   "头顶上有翅膀拍了一下。灯光照不到的地方有个东西，已经跟了你们一整天。"
  ],
  "combat": {
   "title": "没有名字的支线",
   "intro": "灯光尽头又传来一声振翅。贝尔格拉克的话停在半句。",
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
     "desc": "深渊鸦会追逐光亮。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
     "check": {
      "skill": "stealth",
      "dc": 14,
      "party": true
     },
     "success": {
      "text": "最后一盏灯一灭，头顶的翅膀声就乱了。它一头撞在石壁上，接着又撞了一次。",
      "applyAll": {
       "cond": "blinded",
       "turns": 2
      }
     },
     "fail": {
      "text": "有人的灯罩掉在了地上，灯又亮了。它第一个扑的就是那盏灯。",
      "selfDmg": "1d8"
     }
    },
    {
     "id": "pipe",
     "name": "拽倒头顶那截旧水管",
     "desc": "胡尔-乔卡德的铅管粗得有一个人那么宽。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
     "check": {
      "skill": "athletics",
      "dc": 13
     },
     "success": {
      "text": "锈死的卡箍一断，整截铅管带着六千年的泥垢砸了下来。",
      "dmgAll": "2d8",
      "type": "bludgeoning"
     },
     "fail": {
      "text": "水管只晃了晃，掉下来的只有泥垢，全落在了你头上。",
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
   "深渊鸦坠地，还在扑腾。贝尔格拉克坐着没动，腿上包的布已被血染透，手里仍握着那份名单。",
   {
    "speaker": "贝尔格拉克",
    "text": "这是第二百九十条。后面还有二百八十九条。"
   },
   "他站不起来了。往回走要三天，往前已经没有路了。",
   "你们折回到第二天那个岔口。当初掉队的十一个人里还有三个坐在那里，守着一盏快灭的灯。他们说他们等的是贝尔格拉克，不是你们。"
  ],
  "choices": [
   {
    "text": "背起他往回走",
    "check": {
     "skill": "athletics",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "你们几个轮流背他。他一路骂人，骂到第二天不骂了，改成报每一段路的年份。等到了闸口，他已经睡着了。",
     "effects": [
      "flag belgrak_saved",
      "quest q_list done",
      "xp 500"
     ],
     "goto": "a2_16"
    },
    "fail": {
     "text": "背到第二天，人人肩膀都磨破了，脚上全是泡。可你们还是把他背到了闸口。",
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
   "回到玛瑙之门的闸口，当初进山多少人，如今出来多少人，活的死的都要逐个点清。阿斯拉银行的出纳拿着出发那天的刻痕棍，点一个，就在旧刻痕旁边再刻一道。两排刻痕一样长，才算一个人也没落下。",
   {
    "if": "flag.belgrak_lost",
    "text": "点数的是基尔杜姆。贝尔格拉克那一格空着，他带着名单往深处去了，从那以后再也没人见过他。"
   },
   {
    "if": "!flag.belgrak_lost",
    "text": "点数的是贝尔格拉克，他点一个，基尔杜姆就在账本上记一个。"
   },
   {
    "if": "!flag.brok_lives",
    "text": "布罗克是被人抬出来的，他那把铲子就放在他胸口上。"
   },
   {
    "if": "flag.brok_lives",
    "text": "布罗克是自己走出来的，肩上扛着铲子，第一个过了闸。"
   },
   {
    "if": "flag.rail_bones",
    "text": "车上那三十一包遗骨，基尔杜姆也一包一包点过了，点完又给每一包添上名字。其中有九包查不出是谁，添的是“不知道”。"
   },
   {
    "if": "flag.parents_carried",
    "text": "轮到加莱尔父母的那两副担架，点数的人跳了过去。她说了一句“算上”，他们就算上了。"
   },
   {
    "if": "item.brack_token",
    "text": "过交轨大厅时，你们亮出了车皮签，地精们没收钱，还有一个从车顶上扔下来一袋蘑菇。"
   },
   "照矮人的规矩，名字要进账本，人要葬进石头里。兵团的砌匠在闸口外面的崖壁上凿了一排新龛。"
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
    "text": "把车推上闸外斜坡",
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
     "text": "那段坡是在石头上凿出来的台阶，一级有半尺高。你们喊着号子把车推了上去。到了坡顶，外面吹过来的风是暖的。",
     "goto": "a2_17"
    },
    "fail": {
     "text": "才推到一半，车轮断了一根辐条，车直往后溜。等你们搬石头把它垫住，车尾已经少了一具裹好的尸首。它滚下坡掉进了黑暗里，怎么也没找着。",
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
   "贾尔蒙在闸口外支了张桌子结账，兵团该拿多少尾款，探险队还欠多少租子，他一笔一笔地核。",
   "你们这边也有两件事要定，哪一件都说不上怎么办才算对。第一件是井壁上的两个名字，杜卡涅尔和杜坎尼尔。兵团里没有人认得先驱精灵的字，井壁上刻了什么，眼下只有你们几个知道：兽人拜的造物主，其实是古时候的一个精灵将军。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "造我们的不是神，是个精灵。他有间作坊，我们是在作坊里造出来的。我们不欠他的。这句话我想带回氏族去。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我只管记。可记下来的东西总得有人看，没人看的本子，跟没记一样。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "这种话最值钱的时候，就是还没人说过的时候。你说一次，价钱就掉一半。"
   },
   {
    "if": "party.tan",
    "text": "阿坦低头盯着手里的那根蜡烛，攥得太紧，蜡上都留下了指头印。"
   },
   {
    "if": "!party.ushka",
    "text": "闸口外面有个半大的兽人小子，已经等了你们三天。他是阿罗莎派来打听山里消息的，你们的车一到，他就认了出来。"
   }
  ],
  "choices": [
   {
    "text": "请乌什卡把话带回烂刀氏族",
    "if": "party.ushka",
    "effects": [
     "flag dookanil_told",
     "world embers -1",
     "approval ushka +2"
    ],
    "result": "她在木签的背面刻了一行字，刻完给你看了一眼。上面刻着“杜坎尼尔，杜卡涅尔，一个人”。她说烂刀氏族的年轻人会把这根木签传下去。",
    "goto": "a2_17b"
   },
   {
    "text": "托阿罗莎的信使带话回氏族",
    "if": "!party.ushka",
    "effects": [
     "flag dookanil_told",
     "world embers -1"
    ],
    "result": "你把那句话说了三遍，他跟着背了三遍，背到第三遍一个字也没错。他走的时候头也没回。",
    "goto": "a2_17b"
   },
   {
    "text": "把这件事当笑话讲给兵团听",
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
     "你说兽人的神原来是个精灵，兽人是他造出来使唤的。老兵们笑得直拍桌子，当晚就编出了一段顺口溜。回东坎诺的这一路上，他们会在每一家酒馆里唱一遍。",
     {
      "if": "party.ushka",
      "text": "乌什卡没笑。她把木签插回腰里，一个人到车那头去了。"
     }
    ],
    "goto": "a2_17b"
   },
   {
    "text": "请加莱尔把两人的名字报给编年史家会",
    "if": "party.garaele && !flag.names_filed",
    "once": true,
    "effects": [
     "flag names_filed",
     "world word +1",
     "approval garaele +1",
     "codex chroniclers"
    ],
    "result": "她写了一封短信，信里只有两个名字、一个地点和一个日子。她封上蜡，交给了探险队往外送信的骡队。她说会里的人看了信，光是为了格式就得先吵上一年。"
   },
   {
    "text": "向门外的地精住户和脚夫公开讲述",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "effects": [
     "flag dookanil_told",
     "world embers -1",
     "rep clans +1"
    ],
    "result": "你站在闸口外的石墩上讲，{?flag.khug_goblins_out:下面站着脚夫、骡夫，还有几个回来讨锅的地精。|下面站着脚夫、骡夫，还有从门楼里下来的一家地精。}讲完了，有个老脚夫说他不信。有个地精说他信，因为这么说对地精没什么坏处。你谁也没去劝。",
    "goto": "a2_17b"
   },
   {
    "text": "{?flag.names_filed:不再告诉其他人|保守秘密}",
    "effects": [
     {
      "if": "party.tan",
      "then": [
       "approval tan -1"
      ]
     }
    ],
    "result": "你把拓片卷好，塞回了竹筒。阿坦看着那个竹筒，嘴动了一下，终究把话咽了回去。",
    "goto": "a2_17b"
   }
  ]
 },
 "a2_17b": {
  "id": "a2_17b",
  "title": "本子归谁",
  "loc": "玛瑙之门 · 闸口外",
  "text": [
   "第二件事是加莱尔父母留下的那本拓片本。三十年里，他们拓过东坎诺的墓碑、卡斯塔诺老矿的门楣、地精刻在车皮上的氏族记号，最后几页是死铁道上的里程石。井壁上拓下来的那一张不在本子里，另装在竹筒里。",
   "银行的出纳在旁边站了一下午，只是把一张汇票掏出来又收回去。汇票上写的数是五百金冠，他想买这个本子。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "记下来的东西该归谁，我父母为这个吵了一辈子。我母亲说归会里，我父亲说归记的人。还没吵出结果，他们就进山了。"
   }
  ],
  "choices": [
   {
    "text": "把拓片本交给编年史家会",
    "effects": [
     "flag notebook_order",
     "rep temples +1"
    ],
    "result": "加莱尔把本子包好，写上了收件人，又在包上添了她母亲的名字。她说会里会把它锁进柜子，一锁就是一百年。",
    "goto": "a2_18"
   },
   {
    "text": "让加莱尔保管拓片本",
    "effects": [
     "flag notebook_kept",
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +2"
      ]
     }
    ],
    "result": "她把本子贴身揣着。夜里你看见她翻开本子，一直翻到最后一页空白，在上面写了两个字：泵房。",
    "goto": "a2_18"
   },
   {
    "text": "趁加莱尔熟睡，把本子卖给出纳",
    "if": "item.rubbing_book",
    "effects": [
     "flag notebook_sold",
     "gold +500",
     "item -rubbing_book"
    ],
    "result": "出纳把汇票换成了现钱，沉甸甸的一袋。第二天加莱尔把车上翻了三遍。最后她说，大概是丢在回程的那段坡上了。",
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
   "出山时，坡上的草已经黄了。来时那块烧焦的荒地冒出一层矮树苗，狼仍不见踪影。",
   {
    "if": "var.prep >= 4 && !flag.belgrak_lost",
    "text": "贾尔蒙说话算话，自己掏腰包办了一场游街。门洞里那二十几顶帐篷的人排成了两行，出纳敲着一口锅，游的就是你们这一车。路不长，只游了一圈。"
   },
   {
    "if": "var.prep < 4 || flag.belgrak_lost",
    "text": "贾尔蒙在章程的第四十六页上记下了这一趟，去了几人，回了几人，讨回几笔，花了多少。游街的事他没提，你们也没问。"
   },
   {
    "if": "flag.belgrak_lost",
    "text": "贝尔格拉克没有出来。你最后一次见他是在闸口内侧，跟他握了手。往后山里再也没人见过他。"
   },
   {
    "if": "flag.belgrak_saved",
    "text": "贝尔格拉克坐在兵团回红宝石领的车上，腿上绑着夹板，膝盖上摊着那份名单。车走远了，他也没抬过头。"
   },
   {
    "if": "flag.belgrak_struck && !flag.belgrak_struck_by_god",
    "text": "贝尔格拉克跟着兵团一起走。可有半个兵团的人不肯原谅他划掉了那一条，走路跟他隔着十步远，扎营的时候也背对着他。他并不在乎，名单上那道墨也还在。"
   },
   {
    "if": "flag.belgrak_struck_by_god",
    "text": "贝尔格拉克跟着兵团一起走。可兵团的人都说，那一笔不算是他自己划的。回到红宝石领以后，他再也没碰过账本。"
   },
   {
    "if": "flag.rail_woken",
    "text": "阿斯拉银行已经卖起了矮人之路头三段的股份，一股十金冠。交轨大厅的地精都被探险队赶了出去，转车台上的车皮也挂上了银行的牌子。"
   },
   {
    "if": "flag.rail_woken && party.nixee",
    "speaker": "妮克西",
    "text": "银行给每户都发了一张收条。规矩第一条是活着，可收条不能当饭吃！"
   },
   {
    "if": "party.tan",
    "text": "天亮时，阿坦在山外面念了晨祷，这次是对着真的太阳念的。念完，他还是低头看了一眼手里的蜡烛。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "烧到第六道半了。原来山里的蜡烛，烧得跟外面一样快。"
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
    "text": "给皇帝的密探头子巴兹伍德写一份如实报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var honest_reports +1",
     "rep throne +1"
    ],
    "result": "你把矮人认下的每一笔旧账都写上了，连他们管紫丁香战争叫“花仇”也没落下。送信的鸽子是探险队的，飞走之前还在门洞里绕了一圈。",
    "goto": "a3_01"
   },
   {
    "text": "给巴兹伍德报喜不报忧",
    "tag": "皇帝的差事",
    "if": "origin == 'wex'",
    "effects": [
     "var false_reports +1"
    ],
    "result": "你写的是矮人在山下只认祖宗的账，不认帝国的账。这话有一半是真的，剩下那一半，让巴兹伍德先生自己去琢磨吧。",
    "goto": "a3_01"
   },
   {
    "text": "{?origin == 'wex':不报信，直接西行|继续西行}",
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
      "text": "信鸽在笼子里又多待了一个月。这一个月你把它喂得很好。"
     },
     "加莱尔把本子摊开，在新的一页上写了日子，下面空着。她说下一页该写什么，等走到了再说。"
    ],
    "goto": "a3_01"
   }
  ]
 }
};
