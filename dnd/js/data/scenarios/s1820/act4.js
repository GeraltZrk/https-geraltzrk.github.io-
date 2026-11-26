// s1820 / act4.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a4_01": {
  "id": "a4_01",
  "title": "报纸摘要三",
  "chapter": "第四幕 · 门牌",
  "art": "ev_castellos_is_dead",
  "loc": "安本科斯特 · 铸炉街 · 公司",
  "date": "1834年泰苏伦月",
  "text": [
   "这六年的剪报全摞在埃塔的铁箱上头，拿一个秤砣压着。她每个礼拜三剪一回报纸，用的那把剪刀还是 1744 年从老家带出来的。泰苏伦月的头一天，你坐下来，把这一摞从头翻到了底。",
   {
    "if": "flag.ruling_both",
    "text": "《康威尔通报》1829 年登过一条，说联盟巡回法庭一纸裁定管了两样事，一样是芯核，一样是镣铐。萨多克元首说联盟“差一票就散了”，差的那一票是谁的，报上没登。",
    "cls": "letter"
   },
   {
    "if": "flag.ruling_cores && !flag.ruling_both",
    "text": "《康威尔通报》1829 年登过一条，说联盟巡回法庭裁定醒着的芯核算人。地里戴着镣的那些奴隶，要留到下个会期再议。",
    "cls": "letter"
   },
   {
    "if": "flag.engine_licensed",
    "text": "《康威尔通报》1830 年登过一条，说文森顿的机房领到了执照，还配了一张照片，照片上一整条街的路灯都亮着，图注只有三个字：不烧煤。",
    "cls": "letter"
   },
   {
    "if": "flag.engine_burned",
    "text": "《康威尔通报》1829 年登过一条，说文森顿有座机房夜里失了火，没殃及邻舍。保险行不肯赔，拒赔的理由那一栏里填的是“炉膛里的东西”。",
    "cls": "letter"
   },
   {
    "if": "flag.rector_erudite",
    "text": "《泰卢姆时报》登过一条，说新任总院长把地窖的门打开了，排队看碎片的人绕着塔排了三圈。看完出来的人里头，有一半说那是个方块。",
    "cls": "letter"
   },
   {
    "if": "!flag.rector_erudite",
    "text": "《泰卢姆时报》登过一条，说教廷的船坞正在造一条船，船名叫“得救号”。捐册头一页上的头一个名字，就是新任总院长科尔班·灰磨。",
    "cls": "letter"
   },
   {
    "text": "《安本科斯特论坛报》上说，北方联盟和洛伦特相继试出了自家的频率，都能开漩涡下去了。卡拉桑尼又新下水了三条抽气船，船员一签就是十年。同一版上还有一条短讯，说有个代持账户在阳洲南岸买下了长长一条海岸，{?flag.report3_full:成交的日子就在迟到者公司回国前九天|成交的日期没有登}。",
    "cls": "letter"
   },
   {
    "text": "《斗兽场哨兵报》上说，各邦的公投一年推一年，一直推到了今年。各国已经约好了到阿兰蒂尔塔会商，史家会给这次会起的名字是“第二次大峰会”。",
    "cls": "letter"
   },
   {
    "if": "flag.wanted_concord",
    "text": "联盟悬赏捉拿你们公司的单子到现在还钉在新港的告示栏上，赏格已经涨过两回。这六年里，公司一趟海那边的活都没接过。"
   },
   {
    "if": "flag.pc_lost_year",
    "text": "这六年里头，有一年的事你怎么也记不起来。埃塔照着账本替你补上了，哪天出的门，花了几个金冠，回来的时候少了什么，一样一样都有。"
   },
   "{?flag.yamina_spent:雅米娜 1830 年去世了，听说是站着走的。|雅米娜已经一百零四岁了，照旧站着见客。}雷昂总统的酒喝得比从前更多了，法德伦今年也六十三了。{?party.guilhem:吉列姆的头发全白了，他自己说是让报纸给熏的。|}",
   {
    "if": "is.god",
    "text": "《哨兵报》把共和国明年的预算草案全文登了出来。第四十一页上有这么一行：“神迹，杂项”，数目那一栏还空着。",
    "cls": "letter"
   },
   {
    "if": "is.god && origin == 'unowned' && (flag.exit_ran || flag.exit_stolen)",
    "text": "法院的公告栏上贴着一张公告，说七号线的老厂主把迟到者公司告了，请求返还厂产，“计神一位”。这案子法院已经收了，排在明年开审。",
    "cls": "letter"
   },
   {
    "if": "is.immortal",
    "text": "照相馆还是那一家，椅子也还是那一把。第三张合影洗出来一看，别人前后换了三副样子，只有你一点没变。楼下的蜡烛铺如今是老板娘的女儿在管了。德鲁兹纳来过一封信，头一句写的是“好，总算又有一个看得见下一回彗星的”，下一句给他自己划掉了。"
   },
   {
    "speaker": "埃塔·斧砧",
    "text": "六年，四千二百金冠，一回都没迟过。如今你也知道合伙人是谁了。这钱往后还收不收，得你来签字。"
   }
  ],
  "first": [
   "world tears -1",
   "world dove -1",
   "world doors +1",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "choices": [
   {
    "text": "照收，记进今年的账",
    "effects": [
     "flag partner_paid_on",
     "rep partner +1",
     "gold +600"
    ],
    "result": [
     "埃塔把汇票一张一张贴进账本。贴到第六年那一张的时候，她手上停了一下。",
     {
      "speaker": "埃塔·斧砧",
      "text": "我不喜欢他，可我的账本喜欢他。到了今天，它还是喜欢。"
     }
    ],
    "goto": "a4_02"
   },
   {
    "text": "退回去，公司自己找活",
    "effects": [
     "flag partner_refused",
     "rep partner -2",
     "gold -150",
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     }
    ],
    "result": [
     "埃塔开了一张退款单，金额栏只写得下四位数，她只好在页边上接着写。这一来，公司这一年过冬的煤只买了半吨。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "（铰链咔的一声。）退他的钱，这是头一回有人干。我记下了，就记在欠饷那一页上。"
     }
    ],
    "goto": "a4_02"
   },
   {
    "text": "照收，分文不动，另立一个托管户头",
    "effects": [
     "flag partner_escrow",
     "rep partner -1"
    ],
    "result": [
     "{?faction == 'seal':照印条的规矩，钱只要收了，就得说清楚是替谁收的。你在户头的名目上写了“待议”两个字，埃塔看了点了点头。|这是埃塔的主意。她把户头的文书推到你面前，说只要你签三个字就行。你签了，她又在旁边加了一行小注：“队长同意，见证人埃塔”。}",
     {
      "speaker": "埃塔·斧砧",
      "text": "钱在，账在，主人待议。往后不管谁问起来，都有一页纸可以翻给他看。"
     }
    ],
    "goto": "a4_02"
   }
  ]
 },
 "a4_02": {
  "id": "a4_02",
  "title": "人人都想雇你",
  "art": "ev_adventurers_estate",
  "date": "1834年泰苏伦月",
  "shop": {
   "name": "铸炉街的矮人铺子",
   "blurb": "铺子在楼下往南数第三家，开了十四年了，到现在还是不讲价。",
   "stock": [
    "superior_healing_potion",
    "greater_healing_potion",
    "sparkdrive_mk2",
    "damestear_longsword",
    "rosemetal_breastplate",
    "hold_plate",
    "magebane_grenade",
    "scroll_dispel",
    "stoneskin_potion"
   ]
  },
  "text": [
   "公司的楼梯一共十九级，今天每一级上都站着人。门房把他们分成了四拨，一拨占一截楼梯，谁也不肯往下让一步。",
   "头一拨是雷昂总统的秘书，公文包里夹着一张调查庭的传票，抬头上写的是你的名字。第二拨是洛伦特林卫上将的副官，{?flag.gladeguard_refused:一张脸板得紧紧的，你在血林外海回绝过他的上将|帽檐上别着一朵白玫瑰}。",
   "第三拨只来了一个人，就是卡拉桑尼的格拉托·西尔卡拉斯，他脸上那道疤六年了也没见淡。第四拨是教廷的书记，手里捏着一封拿蜡封好的信。",
   "这四拨人要的是同一样东西：雇一家什么地方都去过的老公司，替自己在峰会上、在海上办事。",
   {
    "speaker": "埃塔·斧砧",
    "text": "雇主只能挑一家，挑定了再出门。楼下的铺子还开着，阁楼的床单我也换过了。"
   },
   {
    "if": "flag.m_dormant && !party.middlesday",
    "text": "墙角那只长木箱上贴着一张标签：“十四号，器材，暂存”。礼拜三就睡在里头，没再醒过来。埃塔每个礼拜都给它掸一回灰，掸完了，还要伸手摸一下箱盖。"
   },
   {
    "if": "is.god",
    "text": "楼梯底下另外还排着一队人，一直排到了蜡烛铺的门外，全是来求你这个神的。排在头一个的人怀里抱着一只鹅。鹅没病，有病的是抱鹅的人。"
   }
  ],
  "first": [
   "quest q_summit start",
   "quest q_partner stage 4",
   "codex c_fadlun"
  ],
  "choices": [
   {
    "text": "问埃塔，合伙人如今占几成",
    "once": true,
    "effects": [
     "gold +12"
    ],
    "result": [
     {
      "speaker": "埃塔·斧砧",
      "text": "五成一，这么些年从没欠过一笔钱。上个月他还多汇了十二个金冠来，附言上写的是“队长月钱，该涨了”。"
     },
     "她把那十二个金冠推到你面前。队长的月钱是 1446 年定下的数，这是头一回涨，涨的还是合伙人掏的钱。"
    ]
   },
   {
    "text": "请法德伦上楼坐坐",
    "once": true,
    "effects": [
     "rep union +1"
    ],
    "result": [
     "法德伦是自己一级一级爬上来的，爬到第十九级才歇了一回。进了屋，他把一张图纸摊在桌上，是工会会员证的样稿，“出生地”那一栏上拿笔画了个框。",
     {
      "speaker": "法德伦",
      "text": "十四年了，我琢磨的还是那一个问题：机器到底算不算工人？这事会上前前后后吵了九回，光是会议记录，摞起来都比会员证厚。"
     },
     {
      "if": "flag.union_card",
      "text": "他又从怀里掏出一张存根来，正是当年发出去的那一张，出生地一栏里填的是“七号线”。"
     }
    ]
   },
   {
    "text": "看礼拜三给代表团写的发言稿",
    "once": true,
    "if": "party.middlesday",
    "effects": [
     "approval middlesday +1"
    ],
    "result": [
     "稿子足有一百四十页，字写得比印出来的还齐。第一页上只有一行：“我们按礼拜几起名，因为厂里只记这个”。",
     {
      "speaker": "礼拜三",
      "text": "（不确定。）一百四十页全念完，要四个钟头。（陈述。）峰会给每一家的时间只有二十分钟。（礼貌。）你能帮我删一删吗？"
     }
    ]
   },
   {
    "text": "礼拜三来借公司的信笺，问它要几张",
    "once": true,
    "if": "flag.m_left && !party.middlesday",
    "effects": [
     "rep union +1"
    ],
    "result": [
     "它就站在门口，没有进来。肩上那块绿漆已经磨得一点都不剩了。",
     {
      "speaker": "礼拜三",
      "text": "（礼貌。）代表团自己没有带笺头的信纸。（陈述。）你们的笺头上写着“1446 年立”。（不确定。）用这种老笺头写信，他们大概会多看一眼。"
     },
     "你给了它一整刀。它当面数了一遍，正好一百张，说了一声“记账”就走了。"
    ]
   },
   {
    "text": "关了灯，看看别摇",
    "once": true,
    "effects": [
     "gold -1"
    ],
    "result": [
     "屋里一黑下来，罐子里才看得见一点光，{?world.tears <= 2:暗得像快烧尽的烟头|也就跟一只萤火虫差不多}。别摇抱着膝盖，坐在罐子底上。",
     {
      "speaker": "别摇",
      "text": "看完了？看一回一块糖。灯是你自己关的，这糖钱得你出。"
     }
    ]
   },
   {
    "text": "问布拉，她那张传票上写的什么",
    "once": true,
    "if": "party.bura",
    "effects": [
     "approval bura +1"
    ],
    "result": [
     {
      "speaker": "布拉",
      "text": "（铰链咔的一声。）上头写的是证人，前中士，林墙兽人，传我去讲康威尔那回的事。我去。可他们还欠着我十一个月的饷，一张传票抵不了饷。"
     }
    ]
   },
   {
    "text": "上阁楼睡一整夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "床单是新换的，硬得跟帆布一样。楼下排队的人到半夜才散，你一觉睡到了敲钟。"
   },
   {
    "text": "接共和国的活，收下传票",
    "effects": [
     "flag client_republic",
     "rep republic +1",
     "gold +500"
    ],
    "result": "秘书数出五百金冠摆在桌上，又把那张传票压在了钱上头，说：“部长说了，两样得一起收，才算收齐。”",
    "goto": "a4_03"
   },
   {
    "text": "接洛伦特的活",
    "effects": [
     "flag client_lorent",
     "rep wand +1",
     "gold +500"
    ],
    "result": "副官递过来一封火漆信，封口上压着一朵白玫瑰。{?flag.gladeguard_refused:他给你行了个礼，腰弯得比规矩少了一寸。|他给你行了个礼，帽子上那朵白玫瑰掉下来一片花瓣。}",
    "goto": "a4_03"
   },
   {
    "text": "接卡拉桑尼的活，签西尔卡拉斯的合同",
    "effects": [
     "flag client_charter",
     "rep charter +1",
     {
      "if": "flag.silcalas_refused",
      "then": [
       "gold +2000"
      ],
      "else": [
       "gold +1000"
      ]
     }
    ],
    "result": [
     {
      "speaker": "西尔卡拉斯",
      "text": "{?flag.silcalas_refused:十四年前你回绝过我一回，所以今天我出两千。|一千金冠，你一签字我就付。}合同的第二页，你不看也行，看了也是一样。"
     }
    ],
    "goto": "a4_03"
   },
   {
    "text": "接教廷的活，拆那封蜡封的信",
    "effects": [
     "flag client_church",
     "rep church +1",
     "gold +400"
    ],
    "result": "信里只有一句话：教廷愿意请本公司做它的耳目，酬劳从优，只是记录得归教廷先看。落款的那方印你认得，是新任总院长的。",
    "goto": "a4_03"
   },
   {
    "text": "谁也不跟，挂公司自己的牌子",
    "req": "gold >= 1500 || flag.partner_paid_on",
    "reqText": "要 1500 金冠，或者照收了合伙人的钱",
    "effects": [
     "flag client_none",
     "rep partner +1",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +1"
      ]
     }
    ],
    "result": [
     "你把这四拨人都请下了楼。埃塔在门口那块铜牌底下钉了一张纸，上面写着“本公司自理”。",
     {
      "speaker": "埃塔·斧砧",
      "text": "自理的意思就是，船钱、饭钱、棺材钱，全得自己出。{?flag.partner_paid_on:好在今年有人多汇了六百。|好在铁箱还没空。}"
     }
    ],
    "goto": "a4_03"
   }
  ]
 },
 "a4_03": {
  "id": "a4_03",
  "title": "开幕",
  "art": "ev_hre",
  "loc": "阿兰蒂尔塔 · 大厅",
  "date": "1834年泰苏伦月中",
  "text": [
   "阿兰蒂尔塔的大厅还是 1221 年开会的那一间，桌子也还是那一张，中间裂过一回，后来拿铜箍给箍上了。这回围着它坐的一共九家：共和国、洛伦特、北方联盟、侏儒议会、教廷、布西拉尔、三元议会、魔法领地和安卡迪亚。他们要商量的是，剩下的魔力和海底下那片新地方该怎么分。",
   "贾德教派来的观察员坐在窗户底下。他没有桌子，只好把本子摊在膝盖上。他开口的头一句话是冲着书记官说的：你们这是在分死人的钱包。书记官照原话记了下来。",
   "机械人代表团一共来了九台，礼宾官给他们排了三回座次，排一回撕一回。德鲁兹纳抱着他那只箱子坐在过道上，发言名单上根本没有他的名字。",
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "坐在魔法领地席上的是吉列姆。他头发全白了，胸前挂着一枚你从没见过的徽章。他朝你点了一下头，就又低下头去念他的稿子，念着念着还念出了声。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "speaker": "吉列姆",
    "text": "席位，第三席。职务……职务这一栏，他们给我留了三指宽的地方，理论上是够写的。"
   },
   {
    "if": "flag.m_left && !party.middlesday",
    "text": "领着机械人代表团来的是礼拜三。它朝你这边转了一下头，先报了一声“（礼貌。）”，后面一句话也没有跟上来。"
   },
   {
    "if": "flag.m_dormant && !party.middlesday",
    "text": "代表团在最边上留出了一把空椅子，椅背上拴着一块铜牌，牌子上刻的是“十四号”。"
   },
   {
    "if": "flag.warpattern_spared || flag.cores_saved",
    "text": "{?flag.warpattern_spared:四条胳膊的那一台站在代表团的最后头，胸口的芯核已经不叫了。|}{?flag.cores_saved:从炉膛里抢出来的那十二颗芯核头一回有了身子，坐成了一排，手都搁在膝盖上，正学着人的样子坐。|}"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（紧张。）我们来了九台，礼宾官已经撕掉了三张座次表。（陈述。）第四张在我兜里，是我自己画的。"
   },
   {
    "if": "is.god",
    "text": "礼宾官把你排在了机械人代表团旁边，那一头坐着的，都是谁也不知道该怎么排的。大厅角上有块传音石一直嗡嗡地响，第十二次泛神会议正隔着它开会，这在三百年里是头一回，议的就是你。会上的动议有三条：头一条是追认你为升格者，等你身故以后再生效。第二条是把你认作某一位神的化身。第三条是照阿拉莉亚的先例，不予受理。"
   },
   {
    "if": "is.god && var.cult >= 3",
    "text": "塔外头有一小群人举着你的画像，画得不怎么像。"
   },
   {
    "if": "is.god",
    "text": "贾德教的观察员朝你这边看了一眼，低头在本子上写了三个字：又一个。"
   }
  ],
  "first": [
   "codex c_summit",
   {
    "if": "is.god",
    "then": [
     "flag council_called"
    ]
   }
  ],
  "choices": [
   {
    "text": "去档案室翻 1221 年那回的议事规则",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "faction == 'lantern'",
       "n": 1,
       "why": "灯条，史家会的朋友"
      },
      {
       "if": "is.scholar",
       "n": 1,
       "why": "你翻惯了旧卷"
      }
     ]
    },
    "ok": {
     "text": "议事规则抄在一卷羊皮上，压在一箱蜡烛底下。其中第九条说，每家发言的时候，可以请别家让出一刻钟来。你照着抄了一份，揣进了怀里。",
     "effects": [
      "flag summit_procedure"
     ]
    },
    "fail": {
     "text": "你翻了整整一下午，翻出来的却是 1402 年塔里的伙食账。就连这个，档案员也当着一屋子书记的面把它收了回去，说教廷的东西不外借。",
     "effects": [
      "rep church -1"
     ]
    }
   },
   {
    "text": "在走廊里转一圈，看谁跟谁已经谈妥了",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "北方联盟的秘书和布西拉尔的副使躲在楼梯拐角，两个人分着抽一支雪茄。安卡迪亚的人见了谁都握手，偏偏不跟魔法领地的人握。这一圈转下来，你在心里记了三笔。",
     "effects": [
      "flag a4x_corridor"
     ]
    },
    "fail": {
     "text": "你在一扇门外头站得太久了。门开了，出来的是雷昂的秘书，他把你的脸记住了。",
     "effects": [
      "rep republic -1"
     ]
    }
   },
   {
    "text": "告诉礼宾官，机械人代表团按与会一方排",
    "tag": "无主者",
    "once": true,
    "if": "origin == 'unowned' && !flag.a4x_seated",
    "effects": [
     "flag a4x_seated",
     "flag seat_delegation",
     "rep union +2",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +2"
      ]
     }
    ],
    "result": [
     "礼宾官问你凭什么。{?is.mechanim:你说，就凭我也是从七号线出来的。他把你上下看了看，在单子上把“器材”两个字划掉了。|你把那张卖契往桌上一拍，告诉他上面写着它们的出厂编号，跟写人的生辰是一个写法。他这才在单子上把“器材”两个字划掉了。}",
     "九把椅子就这么搬到了桌边。北方联盟的代表往旁边挪了一挪，没说什么。"
    ]
   },
   {
    "text": "告诉礼宾官，按观察员排",
    "tag": "无主者",
    "once": true,
    "if": "origin == 'unowned' && !flag.a4x_seated",
    "effects": [
     "flag a4x_seated",
     "rep republic +1",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -1"
      ]
     }
    ],
    "result": "九台机器坐到了窗户底下，就挨着贾德教的观察员。观察员把自己的本子往它们那边推了推，好让它们也看得见。"
   },
   {
    "text": "告诉礼宾官，算三元议会的随行器材",
    "tag": "无主者",
    "once": true,
    "if": "origin == 'unowned' && !flag.a4x_seated",
    "effects": [
     "flag a4x_seated",
     "rep charter +1",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -3"
      ]
     }
    ],
    "result": [
     "礼宾官松了一口气，单子上又省了一行。{?is.mechanim:三元议会的狗头人看了看你，又看了看单子，问你是不是也该算在这一栏里。|代表团领头的那一台把头转过来对着你，对了很久。}",
     {
      "if": "party.middlesday",
      "speaker": "礼拜三",
      "text": "（陈述。）单子上写的是器材，随行。（愤怒。）我数过了，这已经是第十一回。"
     }
    ]
   },
   {
    "text": "替联盟代表团在人头条款上发言三分钟",
    "tag": "巨魔湾",
    "if": "origin == 'concord'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.bought_free",
       "n": 1,
       "why": "你的名字在镇议会的赎身簿上"
      },
      {
       "if": "rep.union >= 3",
       "n": 1,
       "why": "暗线的人在旁听席"
      }
     ]
    },
    "ok": {
     "text": "三分钟你只用了两分半，讲的是货单第十四行的那九十金冠，还有把它划掉的那支笔。联盟代表团吵了四天都没吵出结果的事，到了那天下午，总算有人带头鼓了掌。",
     "effects": [
      "flag concord_speech",
      "rep union +1"
     ]
    },
    "fail": {
     "text": "你才讲到第二分钟，种植园那一派的代表就站起来喊，说外人没有表决权。你说你是镇上的人。他回了一句：镇上欠的那四百金冠，可还是外人的钱。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "去魔法领地的席上，问那人认不认得你",
    "tag": "长寿",
    "if": "is.longlived",
    "once": true,
    "effects": [
     "rep wand +1"
    ],
    "result": [
     "那人是一位老巫师的学徒，如今自己也七十岁了。他还认得你八十年前的样子，说那会儿你正在卡斯托纳斯的城门口，跟人抢一只烤鹅。",
     "他把你介绍给了席上的人，只说了一句“老交情”。从这以后，魔杖那一方对你客气了一点。"
    ]
   },
   {
    "text": "对着传音石说一句：你们别投了",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "rep church -2",
     "rep wand +1",
     "var cult +1"
    ],
    "result": [
     "传音石足足静了一刻钟。等它再响起来的时候，三条动议已经重新排过了次序，原先的第三条给提到了最前头，也就是照阿拉莉亚的先例，不予受理。票还是照投，只是票数比先前咬得更紧了。",
     "教廷的书记把你这句话记进了鉴定的第二卷，还加了一条附注：神要求不受表决，可这个要求本身也还有待表决。"
    ]
   },
   {
    "text": "落座，听书记官念开幕词",
    "goto": "a4_04"
   }
  ]
 },
 "a4_04": {
  "id": "a4_04",
  "title": "条款",
  "art": "ev_female_spy",
  "loc": "阿兰蒂尔塔 · 走廊和三间委员会室",
  "date": "1834年伊什达月",
  "shop": {
   "name": "塔下的书铺",
   "blurb": "这是教廷许可的铺子，只卖卷轴，开出来的收据上要盖两个章。",
   "stock": [
    "scroll_dispel",
    "scroll_hold_person",
    "scroll_mass_healing"
   ],
   "markup": 1.2
  },
  "text": [
   "大厅要休会三天。三间委员会室一间挨着一间，门都只开着一条缝，走廊里的地毯是新铺的，踩上去一点声音也没有。真正的会是在走廊里开的。",
   "书记官贴出了要表决的三份草约，都是讲黑弹和剩下的魔力怎么办的，分别叫配给、禁令和特许。另外还有人头和门户两条附款，名目底下还空着，谁想提，谁就得自己去拉票。",
   "埃塔的铁箱也跟着来了，就搁在你房里的床底下，钥匙在你手上。这些年锁进去的东西都在里头，拿出来一件就少一件。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "三份草约我都替他们算过了。配给那一份，理论上能撑过这个世纪。实际上，领晶体得排队，排在头一个的就是我。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回这条走廊这么热闹，还是 1666 年选总院长的时候。那一回的地毯也是新铺的。"
   }
  ],
  "first": [
   "quest q_summit stage 2"
  ],
  "choices": [
   {
    "text": "去找拉姆斯盖特谈上限",
    "once": true,
    "effects": [
     "flag ramsgate_cap"
    ],
    "result": [
     {
      "speaker": "拉姆斯盖特",
      "text": "给黑弹定个上限，我不反对。可共和国民兵手里的库存谁也别动，那是我的老主顾。你替我把这一句写进去，我就不在大厅里当着大伙儿的面骂你。"
     }
    ]
   },
   {
    "text": "去听西尔卡拉斯开价",
    "once": true,
    "effects": [
     "flag silcalas_share",
     "rep charter +1"
    ],
    "result": [
     {
      "speaker": "西尔卡拉斯",
      "text": "禁令我也赞成。不过你得先告诉我，圣阿拉莉亚医院该从哪个病区先熄灯？……至于特许状，里头有百分之二，我已经记在贵公司名下了，不用谢。"
     }
    ]
   },
   {
    "text": "去找莉安娜，问魔杖肯不肯替禁令作保",
    "once": true,
    "if": "flag.lianne_freed || flag.lianne_supplied",
    "effects": [
     "flag wand_pledge",
     "rep wand +1"
    ],
    "result": [
     {
      "speaker": "莉安娜",
      "text": "我们没要过什么特权，我们要的是统治。这两样的区别在于，统治这件事我们会。只要禁令过了，魔杖就替它作保。"
     },
     "她肩膀里那三粒寇拉希还嵌在里头，今天赶上的正是她施不出法的日子。可她说起话来，照样句句都像在下定论。"
    ]
   },
   {
    "text": "拆莉安娜从狱里寄来的信",
    "once": true,
    "if": "flag.lianne_arrested && !flag.lianne_freed && !flag.lianne_supplied",
    "effects": [
     "flag wand_pledge",
     "rep wand +1"
    ],
    "result": [
     {
      "text": "信上说，只要禁令过了，魔杖就替它作保，反正她在牢里也用不上魔杖。末了她托你替她看一看，今年天上还有几颗流星。",
      "cls": "letter"
     },
     "这封信是拿铅笔写的，只有三行。审查官在第三行底下画了一道杠，没有涂掉。"
    ]
   },
   {
    "text": "去找魔法领地的代表",
    "once": true,
    "if": "!flag.lianne_freed && !flag.lianne_supplied && !flag.lianne_arrested",
    "effects": [
     "flag wand_pledge",
     "rep wand +1"
    ],
    "result": "{?flag.guilhem_stayed && !party.guilhem:魔法领地的代表就是吉列姆。他说魔杖愿意替禁令作保，说完又补上一句：理论上。|代表是站着见你的，话也跟雅米娜一样短，只说禁令过了，魔杖作保。}"
   },
   {
    "text": "去见新任总院长",
    "once": true,
    "effects": [
     {
      "if": "flag.phrase_kept || flag.phrase_signed",
      "then": [
       "rep church +1"
      ],
      "else": [
       "rep church -1"
      ]
     }
    ],
    "result": [
     {
      "if": "flag.rector_erudite",
      "text": "伊莲·西纳·阿尔科在一间没有窗户的屋子里见了你，桌上摊着的是碎片鸣声记录的抄本。"
     },
     {
      "if": "!flag.rector_erudite",
      "text": "科尔班·灰磨在走廊尽头等着你，手里捏着一串念珠。他不管跟谁说话，张口都是“我们”。"
     },
     {
      "if": "flag.phrase_kept || flag.phrase_signed",
      "text": "台座那两个词的记录，你上一回是怎么处置的，总院长都还记得。所以教会到底站哪一份草约，你的话能算一半的数。"
     },
     {
      "if": "!flag.phrase_kept && !flag.phrase_signed",
      "text": "台座那两个词的记录，你上一回是怎么处置的，总院长都还记得。你们谈了一刻钟，到头来总院长也没说教会站哪一份。"
     }
    ]
   },
   {
    "text": "坐到窗下，跟贾德教的观察员说两句",
    "once": true,
    "effects": [
     "flag a4x_jadd",
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "贾德教观察员",
      "text": "我什么也不要。我只想问一句，你们打算怎么跟死了的人交代？"
     },
     "你说照着账本交代。他点了点头，在本子上记了一笔，说今天问了这么多人，这是头一个不绕弯子的回答。"
    ]
   },
   {
    "text": "从铁箱里拿出那封十三个字的电报，当众念",
    "once": true,
    "if": "flag.box_skiplist",
    "effects": [
     "var box_used +1",
     "world press +1",
     "world dove -1",
     "rep republic -1"
    ],
    "result": "你念得很慢。刚念到“暂缓施术”这四个字，共和国的席上就有人咳嗽起来，埃斯玛利亚的观察员站起身，走了出去。"
   },
   {
    "text": "把德鲁兹纳的底片抄件拿出来，请他上台",
    "once": true,
    "if": "flag.box_plates",
    "effects": [
     "var box_used +1",
     "world press +1"
    ],
    "result": [
     {
      "speaker": "德鲁兹纳",
      "text": "1699 年，我亲眼看着那颗彗星来。1810 年，我亲眼看着它碎了。收到过我那封信的国家一共十一个，在座的占了九个，剩下那两个今天没来。"
     },
     "他总算上了台，前后一共讲了四分钟，没有一个人打断他。"
    ]
   },
   {
    "text": "把地窖的血账摊在委员会的桌上",
    "once": true,
    "if": "flag.box_blood",
    "effects": [
     "var box_used +1",
     "world press +1",
     "world chains -1",
     "rep wand -1"
    ],
    "result": "账上每一页都记着日子和品脱数，还有一个学徒的名字。魔法领地的代表一眼也没去看那本账，只管扭头看着窗外。"
   },
   {
    "text": "把鸣声记录拿出来",
    "once": true,
    "if": "flag.box_phrase",
    "effects": [
     "var box_used +1",
     "world press +1",
     "rep church -2",
     {
      "if": "party.narwen",
      "then": [
       "approval narwen -3"
      ]
     }
    ],
    "result": [
     "你把台座说的那两个词念给了委员会听。教廷的席上一下子就空了一半。",
     {
      "if": "party.narwen",
      "speaker": "娜尔雯",
      "text": "这回你没先问过我。上回有人不问我一声就这么办，还是 1666 年，那人后来当上了总院长。我不走，我接着数我的。"
     }
    ]
   },
   {
    "text": "把“损耗”卷的卷号当众报出来",
    "once": true,
    "if": "flag.wastage_ref && (flag.box_plates || flag.plates_printed)",
    "effects": [
     "flag wastage_read",
     "world press +1",
     "quest q_wastage done"
    ],
    "result": "卷号一共九个字，是 1811 年立的卷，立卷人那一栏签的是个矮人的名字。德鲁兹纳在过道上把手举了起来，说那就是他。共和国的书记手里的笔停住了。"
   },
   {
    "text": "提人头条款：签约各方不得把人记成财物",
    "once": true,
    "if": "(flag.ruling_cores || flag.ruling_both || flag.seat_delegation || rep.union >= 3) && !flag.a4x_heads_tried",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.concord_speech",
       "n": 2,
       "why": "联盟代表团鼓过掌"
      },
      {
       "if": "flag.cores_1810",
       "n": 2,
       "why": "1810 年的芯核有人作证"
      },
      {
       "if": "flag.ruling_both",
       "n": 2,
       "why": "联盟的裁定在先"
      },
      {
       "if": "flag.box_blood",
       "n": 2,
       "why": "血账还摊在桌上"
      },
      {
       "if": "flag.summit_procedure",
       "n": 1,
       "why": "1221 年的议事规则"
      }
     ]
    },
    "ok": {
     "text": "委员会一表决，五比四过了。书记官在附款的名目上写下了“人头”两个字。礼拜三那份一百四十页的稿子，后来也给抄进了附录里。",
     "effects": [
      "flag a4x_heads_tried",
      "flag article_heads",
      "world chains -2",
      {
       "if": "party.middlesday",
       "then": [
        "approval middlesday +2"
       ]
      }
     ]
    },
    "fail": {
     "text": "就差了一票。这时候有人顺手递上来一个改写本，把机械人和“同类”都列成了由法师监护的“被监护人”。这个改写本倒是通过了，谁也没去细看。",
     "effects": [
      "flag a4x_heads_tried",
      "flag article_wards",
      {
       "if": "party.middlesday",
       "then": [
        "approval middlesday -3"
       ]
      }
     ]
    }
   },
   {
    "text": "提门户条款：门口的人在委员会里有席位",
    "once": true,
    "if": "rep.south >= 2 || origin == 'karshyr'",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "origin == 'karshyr'",
       "n": 2,
       "why": "门开在你家的海上"
      },
      {
       "if": "flag.summit_procedure",
       "n": 1,
       "why": "1221 年的议事规则"
      }
     ]
    },
    "ok": {
     "text": "布西拉尔的副使足足反对了二十分钟，可到了表决的时候，他弃了权。附款里于是写明：各处门户都设一个共管委员会，门口那片海上的本地人在里头占一席。",
     "effects": [
      "flag article_doors",
      "world doors -1",
      "rep south +1"
     ]
    },
    "fail": {
     "text": "布西拉尔的副使问了一句：门口的人到底是谁，又由谁来替他们签字？屋里连一个阳洲人都没有。这条附款只好压到下一次再议。",
     "effects": [
      "rep south -1"
     ]
    }
   },
   {
    "text": "回房里歇一个钟头",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "隔壁屋里有两个代表在吵运费，每回一吵到“每吨”两个字，就把嗓子压低了。你枕着铁箱，不知不觉睡着了。"
   },
   {
    "text": "回大厅，表决黑弹条款",
    "goto": "a4_05"
   }
  ]
 },
 "a4_05": {
  "id": "a4_05",
  "title": "面包师的儿子",
  "art": "ev_hre",
  "loc": "阿兰蒂尔塔 · 大厅",
  "text": [
   "大厅里坐得满满的，连过道上都站着人。头一个上台的是拉姆斯盖特，他手里没拿稿子。",
   {
    "speaker": "拉姆斯盖特",
    "text": "面包师的儿子凭什么敢对巫师说个不字？就凭我的子弹，除了它再没有别的！你们要禁它也行，可得先想好了，拿什么来顶上。"
   },
   "掌声先是从北方联盟和共和国的席上响起来的，安卡迪亚那边也跟着拍了两下。接着上台的是西尔卡拉斯，他讲的是特许状，讲到气态晶体的运费，还掏出了一张船期表。",
   "{?flag.lianne_freed || flag.lianne_supplied:替魔杖那一方上台说话的是莉安娜，她要的是禁令，外加托管，底下没有一个人敢打断她。|魔法领地的代表上台念了一份稿子，要的是禁令外加托管，念得很慢。}",
   "德鲁兹纳算出来的那些数字，每一张桌上都摆着一份。九家都算明白了，魔力越来越少，这个会正是因为这样才开得起来。书记官看了一眼钟，念到了你的名字。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）那个卖子弹的说得在理。我就烦他说得在理。"
   }
  ],
  "first": [
   "quest q_summit done",
   "codex c_ramsgate",
   "codex c_silcalas",
   {
    "if": "!flag.wastage_read",
    "then": [
     "quest q_wastage fail"
    ]
   }
  ],
  "choices": [
   {
    "text": "把底片、账本和秤的读数按年份排成一张表，挂在大厅里",
    "tag": "灯",
    "if": "faction == 'lantern'",
    "once": true,
    "effects": [
     "flag a4x_table",
     "world press +1"
    ],
    "result": "这张表足有一人高，从 1809 年一直排到 1834 年。代表们进门，都得从它底下过。报馆的人就站在表跟前抄，抄得比书记官还快。"
   },
   {
    "text": "请工棚、码头和暗线上来的人坐进旁听席",
    "tag": "盾",
    "if": "faction == 'shield'",
    "once": true,
    "effects": [
     "rep union +1",
     "rep charter -1"
    ],
    "result": "来了四十来个人，鞋上都还带着泥。北方联盟的代表捂着鼻子换了个座位。旁听席上有人认出了拉姆斯盖特，还朝他点了点头，说是在厂里见过。"
   },
   {
    "text": "借旁听席的人气，补提人头条款",
    "tag": "盾",
    "if": "faction == 'shield' && !flag.a4x_heads_tried",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.concord_speech",
       "n": 2,
       "why": "联盟代表团鼓过掌"
      },
      {
       "if": "flag.cores_1810",
       "n": 2,
       "why": "1810 年的芯核有人作证"
      },
      {
       "if": "flag.ruling_both",
       "n": 2,
       "why": "联盟的裁定在先"
      }
     ]
    },
    "ok": {
     "text": "旁听席上的人一个接一个站起来，报自己的工号。报到第三十个的时候，主席敲了槌，说附款照提，名目就叫人头。",
     "effects": [
      "flag a4x_heads_tried",
      "flag article_heads",
      "world chains -2"
     ]
    },
    "fail": {
     "text": "主席说旁听席上的人不得发言。趁这工夫，有人递上来一个改写本，名目是“魔杖的被监护人”。这个本子通过了，旁听席上没有一个人听得懂那几个字是什么意思。",
     "effects": [
      "flag a4x_heads_tried",
      "flag article_wards",
      {
       "if": "party.middlesday",
       "then": [
        "approval middlesday -3"
       ]
      }
     ]
    }
   },
   {
    "text": "替配给那份说话：按人头配，晶体挂表",
    "req": "world.press >= 5",
    "reqText": "见报要到 5：世人得先知道这本账",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "adv": "flag.a4x_table",
     "mods": [
      {
       "if": "flag.plates_understood",
       "n": 2,
       "why": "你看懂了底片"
      },
      {
       "if": "flag.yamina_ledger_read",
       "n": 2,
       "why": "雅米娜的账你读过"
      },
      {
       "if": "flag.ramsgate_cap",
       "n": 2,
       "why": "拉姆斯盖特不反对上限"
      },
      {
       "if": "var.box_used >= 1",
       "n": 1,
       "why": "铁箱里的东西"
      },
      {
       "if": "var.box_used >= 2",
       "n": 1,
       "why": "铁箱里的东西"
      },
      {
       "if": "var.box_used >= 3",
       "n": 1,
       "why": "铁箱里的东西"
      },
      {
       "if": "(rep.republic >= 3 && rep.church >= 3 && rep.union >= 3) || (rep.republic >= 3 && rep.church >= 3 && rep.south >= 3) || (rep.republic >= 3 && rep.union >= 3 && rep.south >= 3) || (rep.church >= 3 && rep.union >= 3 && rep.south >= 3)",
       "n": 2,
       "why": "三方都当你是自己人"
      },
      {
       "if": "flag.summit_procedure",
       "n": 1,
       "why": "1221 年的议事规则"
      },
      {
       "if": "flag.a4x_corridor",
       "n": 1,
       "why": "你知道谁跟谁谈妥了"
      },
      {
       "if": "flag.a4x_jadd",
       "n": 1,
       "why": "借了观察员那句话"
      },
      {
       "if": "faction == 'seal'",
       "n": 2,
       "why": "条文由你起草"
      }
     ]
    },
    "ok": {
     "text": "你把贾德教观察员的那句话借来开了头，问大家怎么跟死了的人交代。表决下来是六比三，配给那一份成了草约。拉姆斯盖特朝你抬了一下帽子，不过没有摘下来。",
     "effects": [
      "flag article_ration",
      "world tears +1",
      "item +draft_treaty"
     ],
     "goto": "a4_06"
    },
    "fail": {
     "text": "差了两票。你刚要坐下，西尔卡拉斯就已经站起来了。",
     "effects": [
      {
       "if": "rep.charter >= 2",
       "then": [
        "flag article_charter",
        "item +draft_treaty"
       ]
      }
     ],
     "goto": "a4_06"
    }
   },
   {
    "text": "替禁令那份说话：禁黑弹，剩下的交魔杖托管",
    "req": "rep.wand >= 3 || rep.church >= 3",
    "reqText": "要王冠与魔杖或者揭秘教会当你是自己人（≥3）",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "adv": "flag.a4x_table",
     "mods": [
      {
       "if": "flag.wand_pledge",
       "n": 2,
       "why": "魔杖替禁令作保"
      },
      {
       "if": "flag.hoard_sealed",
       "n": 1,
       "why": "卡斯托纳斯的窖藏封着"
      },
      {
       "if": "flag.ramsgate_cap",
       "n": -2,
       "why": "你答应过拉姆斯盖特"
      },
      {
       "if": "flag.summit_procedure",
       "n": 1,
       "why": "1221 年的议事规则"
      },
      {
       "if": "flag.a4x_corridor",
       "n": 1,
       "why": "你知道谁跟谁谈妥了"
      },
      {
       "if": "faction == 'seal'",
       "n": 2,
       "why": "条文由你起草"
      }
     ]
    },
    "ok": {
     "text": "表决下来是五比四。拉姆斯盖特既没鼓掌，也没走，只是把帽子扣回了头上。北方联盟的席上，已经有人在算民兵的库存还能撑几年了。",
     "effects": [
      "flag article_ban",
      "world tears +1",
      "rep republic -2",
      "rep union -1",
      "item +draft_treaty"
     ],
     "goto": "a4_06"
    },
    "fail": {
     "text": "共和国和北方联盟一齐举手反对。你刚要坐下，西尔卡拉斯就已经站起来了。",
     "effects": [
      {
       "if": "rep.charter >= 2",
       "then": [
        "flag article_charter",
        "item +draft_treaty"
       ]
      }
     ],
     "goto": "a4_06"
    }
   },
   {
    "text": "替特许那份说话：海归肯出船的人",
    "req": "rep.charter >= 3",
    "reqText": "要特许商当你是自己人（≥3）",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "flag.silcalas_share",
       "n": 2,
       "why": "百分之二记在你名下"
      },
      {
       "if": "flag.summit_procedure",
       "n": 1,
       "why": "1221 年的议事规则"
      },
      {
       "if": "faction == 'seal'",
       "n": 2,
       "why": "条文由你起草"
      }
     ]
    },
    "ok": {
     "text": "表决下来是七比二，投反对票的是教廷和魔法领地。西尔卡拉斯走过来跟你握了握手，他的手很干。",
     "effects": [
      "flag article_charter",
      "world doors +1",
      "rep charter +2",
      "item +draft_treaty"
     ],
     "goto": "a4_06"
    },
    "fail": {
     "text": "你讲到运费的时候，底下有人笑出了声。笑归笑，大家还是照特许那一份投了票。西尔卡拉斯根本用不着你来帮腔。",
     "effects": [
      {
       "if": "rep.charter >= 2",
       "then": [
        "flag article_charter",
        "item +draft_treaty"
       ]
      }
     ],
     "goto": "a4_06"
    }
   },
   {
    "text": "站起来说：本公司不表态",
    "effects": [
     {
      "if": "rep.charter >= 2",
      "then": [
       "flag article_charter",
       "item +draft_treaty"
      ]
     },
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem -1"
      ]
     }
    ],
    "result": "{?rep.charter >= 2:你刚坐下，西尔卡拉斯就站了起来。他讲了七分钟，特许那一份就这么过了，七比二。|大厅里一直吵到天黑，三份草约一份也没通过，各家只好揣着各家的草约散了会。}",
    "goto": "a4_06"
   }
  ]
 },
 "a4_06": {
  "id": "a4_06",
  "title": "地窖",
  "art": "load_7",
  "loc": "阿兰蒂尔塔 · 地下",
  "text": [
   "{?flag.rector_erudite:地窖的门是开着的。有个地精在台阶口支了个小摊，卖锡打的小方块，一个金冠两只，还说这是“碎片原样”。|地窖的门是封着的，封条上盖着灰磨的章。码头上的“得救号”正在装货，装的是一箱一箱的蜡烛。}",
   "下了台阶是一间圆屋，墙上挂着一块记录板。碎片就悬在屋子的正当中，离地有一人高，底下是一方石台，它跟石台并不挨着。它只有拳头大小，是个菱形，当中嵌着一块方方的黑东西，一明一暗地闪着。",
   "记录板上有三行粉笔字，记的是它每年响几声：1809 年是四十，1820 年是十一，1834 年是四。",
   {
    "if": "item.torrieth_rubbing >= 1",
    "text": "你兜里揣着一张拓片，是从托丽丝的刻痕上拓下来的，上面画着海底那扇天门的钥匙孔。你把它举起来对着碎片比了比，一样大，也一样方。碎片当中那块黑东西就是钥匙。"
   },
   {
    "if": "party.narwen && !is.god",
    "speaker": "娜尔雯",
    "text": "我听它听了一百六十八年，今年是四声。我没说它要停，我只说我数到了四。"
   },
   {
    "if": "flag.narwen_left && !party.narwen",
    "text": "台阶底下站着的是娜尔雯。她穿着教廷代表团的灰袍子，眼镜也换了一副，朝你点了一下头，眼睛始终没离开碎片。"
   },
   {
    "if": "flag.narwen_left && !party.narwen && !is.god",
    "speaker": "娜尔雯",
    "text": "我听它听了一百六十八年。上回你们来的时候，它还响了十一声。"
   },
   {
    "if": "is.god",
    "text": "你刚一下台阶，它就停了。光还在，声音没有了。守在记录板旁边的修士吓得粉笔都掉了，在地上摔成了三截。"
   },
   {
    "if": "is.god && (party.narwen || flag.narwen_left)",
    "speaker": "娜尔雯",
    "text": "我听它听了一百六十八年，它从来没为谁停过。"
   }
  ],
  "first": [
   {
    "if": "is.god",
    "then": [
     "flag fragment_hushed"
    ]
   }
  ],
  "choices": [
   {
    "text": "请娜尔雯出面，向教会借它上船",
    "if": "rep.church >= 4 && party.narwen && !is.god",
    "effects": [
     "flag fragment_aboard",
     "approval narwen +1"
    ],
    "result": [
     "娜尔雯在借据上签了自己的名字，接着又在保人那一栏里签了一遍。",
     {
      "speaker": "娜尔雯",
      "text": "上回它出远门，还是 1585 年从诺鲁因运过来的那一趟，路上走了十一个月。这一回，我陪着它去。"
     }
    ],
    "goto": "a4_07"
   },
   {
    "text": "照博学派的规矩，办一回“借展”",
    "if": "flag.rector_erudite && rep.church >= 3 && world.press >= 5",
    "effects": [
     "flag fragment_aboard",
     {
      "if": "!party.narwen && flag.narwen_left",
      "then": [
       "flag narwen_custodian"
      ]
     }
    ],
    "result": [
     "伊莲·西纳·阿尔科批了下来，批的是借展一次，展地天门，归期不定，只是批文上要求有一位保管人随行。{?!party.narwen && flag.narwen_left:保管人那一栏，她填上的是娜尔雯·望月。|保管人那一栏还空着，她说让你来填。}",
     "在台阶口卖锡方块的那个地精，当天就涨了价。"
    ],
    "goto": "a4_07"
   },
   {
    "text": "跟“得救号”一道走，让灰磨的人捧着它",
    "if": "flag.rector_zealot && rep.church >= 2",
    "effects": [
     "flag fragment_aboard",
     "flag salvation_sails",
     "rep church +1"
    ],
    "result": "灰磨亲手把它装进了一只铅匣子，匣子里头衬着天鹅绒。他说，等到了门跟前，话由我们来说，你们只管开船。",
    "goto": "a4_07"
   },
   {
    "text": "看看守在地窖口的结界几时换班",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "effects": [
     "flag a4x_wards"
    ],
    "result": "结界一共有三层，是一层挨着一层换的，每回换的时候，中间都会空出半口气的工夫。{?world.tears <= 2:咒才念到一半，你手心里的光也只亮了一半，好在够你看清楚了，|}你前后数了三遍，回回都是半口气。"
   },
   {
    "text": "认一认地窖铁门上那把锁",
    "tag": "奇械",
    "if": "is.artificer",
    "once": true,
    "effects": [
     "flag a4x_lock"
    ],
    "result": "这把锁是侏儒议会出的货，1790 年代的式样，铭牌上还刻着厂名。这一款锁的第三颗销子是装反了的，因为图纸上画的就是反的。"
   },
   {
    "text": "等夜里，摸下去偷",
    "check": {
     "skill": "stealth",
     "dc": 17,
     "party": true,
     "adv": "flag.a4x_wards || flag.a4x_lock",
     "mods": [
      {
       "if": "flag.cloakmen_fought",
       "n": -2,
       "why": "披风卫认得你们"
      }
     ]
    },
    "ok": {
     "text": "换班的灯笼从你头顶上晃过去了。你贴着墙根一路下到圆屋里，碎片就悬在一人高的地方，一明一暗地闪着。",
     "goto": "a4_06b"
    },
    "fail": {
     "text": "台阶底下多出了一盏灯笼。三个披风卫客客气气地请你们上楼，一路把你们请到了塔门外头。",
     "effects": [
      "rep church -2"
     ],
     "goto": "a4_07"
    }
   },
   {
    "text": "不带它，让它留在这儿数",
    "effects": [
     "rep church +1",
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     }
    ],
    "result": "{?party.narwen:娜尔雯在记录板上添了一行，写的是“1834 年，四。有人来过，没带走”。|修士在记录板上添了一行，写的是“1834 年，四”。}",
    "goto": "a4_07"
   }
  ]
 },
 "a4_06b": {
  "id": "a4_06b",
  "title": "一人高的地方",
  "art": "ev_god_fragment",
  "text": [
   "圆屋里一个人也没有。记录板旁边那把椅子还是热的，修士是换灯油去了，一来一回要一刻钟。",
   "碎片就悬在你头顶上，踮起脚来够得着。它周围的空气比别处凉，把指尖伸过去，就像伸进了一口井里。底下那方石台上落着一层灰，灰上连一个手印也没有，已经有一百多年没人碰过它了。",
   "当中那个黑方块亮了一下，又暗了下去。你站在那儿，等着它再亮。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "你要是伸手，就当我不在这儿。我在楼上，替你们数着披风卫的脚步。"
   }
  ],
  "choices": [
   {
    "text": "踮起脚，把它从半空里摘下来",
    "check": {
     "skill": "sleight",
     "dc": 16,
     "party": true,
     "adv": "flag.a4x_lock"
    },
    "ok": {
     "text": "它比看上去要沉，攥在手里像攥着一块冰。你把它塞进衬了毡子的饭盒里，盖上了盖子。没多久，修士端着灯油回到了楼梯口。他在记录板跟前站了很久，一声也没出。",
     "effects": [
      "flag fragment_aboard",
      "flag fragment_stolen",
      "rep church -3",
      {
       "if": "party.narwen",
       "then": [
        "approval narwen -3"
       ]
      }
     ],
     "goto": "a4_07"
    },
    "fail": {
     "text": "你的指尖刚碰着它，它就响了一声，这是今年的第五声，紧跟着全塔的灯一齐亮了。你们是让人请出去的，没有给扔出去，因为扔人动静太大，会吵着它。",
     "effects": [
      "rep church -2"
     ],
     "goto": "a4_07"
    }
   },
   {
    "text": "不碰它，原路退回去",
    "effects": [
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     },
     "rep church +1"
    ],
    "result": "你退到台阶口，又回头看了它一眼，它没有响。修士端着灯油从你身边走了过去，还以为你是来排队的。",
    "goto": "a4_07"
   }
  ]
 },
 "a4_07": {
  "id": "a4_07",
  "title": "签令之夜",
  "art": "ev_far_and_wide",
  "loc": "安本科斯特 · 旧斗兽场外",
  "date": "1834年伊什达月底",
  "text": [
   "峰会休会了。共和国的代表团连夜坐火车回了首都，你们也跟着回来了。旧斗兽场外头的广场上站满了要公投的人，有的举着各邦的旗子，有的举着锅盖，当当地敲个不停。",
   {
    "if": "world.dove <= 3",
    "text": "东站的告示栏上贴出了戒严令，墨都还没干。共和国要不要散，就看今晚了。"
   },
   {
    "if": "world.dove > 3",
    "text": "人群里有那么几个人穿得太整齐了，专门往前头挤，手一直揣在怀里。这几个人不举旗子，是专门来把事闹大的。"
   },
   "雷昂的弟弟约瑟普·西尔·提鲁费尔德带的兵已经开到了街口，一共两排，都上着刺刀。听说拘捕令和“黎明执行”的名单今晚就要在斗兽场里头签。签字的那间屋子亮着灯，整间屋只有一扇窗。",
   {
    "if": "flag.bura_alone && world.chains <= 5 && !party.bura",
    "text": "巷子口站着一队老兵，身上穿的是 1810 年的旧呢子军服，领章都拆掉了。领头的那个下巴是黄铜的，是布拉。她朝你点了一下头，铰链跟着响了一声。"
   },
   {
    "if": "flag.bura_alone && world.chains <= 5 && !party.bura",
    "speaker": "布拉",
    "text": "四十个人，三十二条枪。这一回，枪不替老爷们开了。"
   },
   {
    "if": "flag.bura_alone && world.chains > 5 && !party.bura",
    "text": "有个报童塞给你一封信，这信已经转了三道手。信封上是布拉的字，里头写的是“我在南边，饷还没发，别等我”。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）对面那队伍里头，有三个是我带过的兵。第二排左数第四个，还欠着我两包烟。"
   },
   {
    "if": "is.god",
    "text": "有人把你认了出来，人群一下子全往你这边挤。挤得最凶的是前头那几排，可他们离刺刀也最近。"
   }
  ],
  "first": [
   "codex c_broken_empire"
  ],
  "choices": [
   {
    "text": "让布拉的老兵堵住东边的巷口",
    "once": true,
    "if": "flag.bura_alone && world.chains <= 5 && !party.bura && !flag.a4x_veterans",
    "effects": [
     "flag a4x_veterans",
     "rep union +1"
    ],
    "result": "布拉一句话也没回，只抬手比了两个手势。老兵们立刻排成两列钻进了巷子，脚步齐得像是一个人在走。"
   },
   {
    "text": "再站一回，站到两排人中间",
    "effects": [
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     },
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "你从人群里挤了出来，走到刺刀和锅盖中间的那块空地上。两边的人都看着你，谁也没有往后让一步。",
    "goto": "a4_07b"
   },
   {
    "text": "从后门把调查庭的证人护送出去",
    "effects": [
     "flag a4x_witness",
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     }
    ],
    "result": "证人一共是五个，年纪最大的是康威尔税关的门房，今年七十一了。你们刚出后门，巷子那一头就亮起了火把。",
    "goto": "a4_07b"
   },
   {
    "text": "去找约瑟普，帮他清场",
    "effects": [
     "rep republic +2",
     "rep union -3",
     {
      "if": "party.bura",
      "then": [
       "approval bura -3"
      ]
     },
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -1"
      ]
     }
    ],
    "result": [
     "约瑟普骑在马上，鼻子长得跟他哥哥一模一样。他看了你一眼，说：“迟到者公司，部里付钱的那一家。去台阶那边，那儿有人带了家伙。”",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "（铰链咔的一声。）行。合同上写的是“协助维持秩序”。那你过来指给我看看，这里头哪一个是秩序。"
     }
    ],
    "goto": "a4_07c"
   }
  ]
 },
 "a4_07b": {
  "id": "a4_07b",
  "title": "两排人中间",
  "loc": "安本科斯特 · 旧斗兽场外",
  "text": [
   "{?flag.a4x_witness:举火把的是约瑟普的骑兵。他们是冲着证人来的，要的就是名单上画了圈的那五个。|你脚下站的这块地方，十四年前也有人站过。}",
   "鼓点停了一下，又敲了起来。头一排的刺刀放平了。后头有人喊口令，喊得太早，有半排人没跟上。斗兽场的墙根底下有个消防栓，红漆已经掉了一半，水龙带锁在旁边的岗亭里。",
   "领队的军官骑着一匹灰马，鬓角全白了，肩章是少校的。{?origin == 'anbennar':你认得这个人，他叫奥德里克·马洛，1820 年元旦的时候，他还是那一排的中尉。|人群里有人喊出了他的名字，他叫马洛。}",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "我能放出一道墙来，挡得住十轮齐射，理论上是这样。实际上，今年我顶多只放得出半道。"
   },
   {
    "if": "is.god",
    "text": "前排有个卖烤栗子的老太太，把栗子筐挡在胸口，她站的那个地方，正好夹在两排枪的中间。"
   }
  ],
  "choices": [
   {
    "text": "迎上去",
    "if": "flag.a4x_veterans",
    "combat": {
     "title": "旧斗兽场外",
     "intro": "鼓点停了。头一排的刺刀放平了，后头的骑兵也勒住了马。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "marlowe",
       "name": "冲领队的军官喊他的名字",
       "desc": "领队的是马洛少校，1820 年那会儿他就在康威尔",
       "check": {
        "skill": "persuasion",
        "dc": 16,
        "adv": "origin == 'anbennar'",
        "mods": [
         {
          "if": "flag.ny_stood_between",
          "n": 2,
          "why": "1820 年元旦你站过一回中间"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "马洛少校的鬓角已经全白了。你问他还记不记得康威尔的那块砖。他看了你很久，才抬起手来喊：“枪口朝天，退后十步！”那一排兵往后退得比他喊得还快。",
        "effects": [
         "flag night_bloodless",
         "world dove +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "马洛少校认出了你，却把脸转了过去，喊了一声：“装弹。”"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +120"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "secret_police",
       "n": 4,
       "name": "便衣"
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "部里的战斗法师"
      },
      {
       "id": "dragoon",
       "n": 3,
       "name": "约瑟普的骑兵"
      }
     ],
     "allies": [
      {
       "id": "line_rifleman",
       "n": 3,
       "name": "布拉的老兵"
      }
     ]
    }
   },
   {
    "text": "迎上去",
    "if": "!flag.a4x_veterans && partysize >= 5",
    "combat": {
     "title": "旧斗兽场外",
     "intro": "鼓点停了。头一排的刺刀放平了，后头的骑兵也勒住了马。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "marlowe",
       "name": "冲领队的军官喊他的名字",
       "desc": "领队的是马洛少校，1820 年那会儿他就在康威尔",
       "check": {
        "skill": "persuasion",
        "dc": 16,
        "adv": "origin == 'anbennar'",
        "mods": [
         {
          "if": "flag.ny_stood_between",
          "n": 2,
          "why": "1820 年元旦你站过一回中间"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "马洛少校的鬓角已经全白了。你问他还记不记得康威尔的那块砖。他看了你很久，才抬起手来喊：“枪口朝天，退后十步！”那一排兵往后退得比他喊得还快。",
        "effects": [
         "flag night_bloodless",
         "world dove +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "马洛少校认出了你，却把脸转了过去，喊了一声：“装弹。”"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +120"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "secret_police",
       "n": 4,
       "name": "便衣"
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "部里的战斗法师"
      },
      {
       "id": "dragoon",
       "n": 3,
       "name": "约瑟普的骑兵"
      }
     ]
    }
   },
   {
    "text": "迎上去",
    "if": "!flag.a4x_veterans && partysize == 4",
    "combat": {
     "title": "旧斗兽场外",
     "intro": "鼓点停了。头一排的刺刀放平了，后头的骑兵也勒住了马。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "marlowe",
       "name": "冲领队的军官喊他的名字",
       "desc": "领队的是马洛少校，1820 年那会儿他就在康威尔",
       "check": {
        "skill": "persuasion",
        "dc": 16,
        "adv": "origin == 'anbennar'",
        "mods": [
         {
          "if": "flag.ny_stood_between",
          "n": 2,
          "why": "1820 年元旦你站过一回中间"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "马洛少校的鬓角已经全白了。你问他还记不记得康威尔的那块砖。他看了你很久，才抬起手来喊：“枪口朝天，退后十步！”那一排兵往后退得比他喊得还快。",
        "effects": [
         "flag night_bloodless",
         "world dove +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "马洛少校认出了你，却把脸转了过去，喊了一声：“装弹。”"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +120"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "secret_police",
       "n": 3,
       "name": "便衣"
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "部里的战斗法师"
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "约瑟普的骑兵"
      }
     ]
    }
   },
   {
    "text": "迎上去",
    "if": "!flag.a4x_veterans && partysize == 3",
    "combat": {
     "title": "旧斗兽场外",
     "intro": "鼓点停了。头一排的刺刀放平了，后头的骑兵也勒住了马。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "marlowe",
       "name": "冲领队的军官喊他的名字",
       "desc": "领队的是马洛少校，1820 年那会儿他就在康威尔",
       "check": {
        "skill": "persuasion",
        "dc": 16,
        "adv": "origin == 'anbennar'",
        "mods": [
         {
          "if": "flag.ny_stood_between",
          "n": 2,
          "why": "1820 年元旦你站过一回中间"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "马洛少校的鬓角已经全白了。你问他还记不记得康威尔的那块砖。他看了你很久，才抬起手来喊：“枪口朝天，退后十步！”那一排兵往后退得比他喊得还快。",
        "effects": [
         "flag night_bloodless",
         "world dove +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "马洛少校认出了你，却把脸转了过去，喊了一声：“装弹。”"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +120"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "secret_police",
       "n": 3,
       "name": "便衣"
      },
      {
       "id": "war_mage",
       "name": "部里的战斗法师"
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "约瑟普的骑兵"
      }
     ]
    }
   },
   {
    "text": "迎上去",
    "if": "!flag.a4x_veterans && partysize <= 2",
    "combat": {
     "title": "旧斗兽场外",
     "intro": "鼓点停了。头一排的刺刀放平了，后头的骑兵也勒住了马。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "marlowe",
       "name": "冲领队的军官喊他的名字",
       "desc": "领队的是马洛少校，1820 年那会儿他就在康威尔",
       "check": {
        "skill": "persuasion",
        "dc": 16,
        "adv": "origin == 'anbennar'",
        "mods": [
         {
          "if": "flag.ny_stood_between",
          "n": 2,
          "why": "1820 年元旦你站过一回中间"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "马洛少校的鬓角已经全白了。你问他还记不记得康威尔的那块砖。他看了你很久，才抬起手来喊：“枪口朝天，退后十步！”那一排兵往后退得比他喊得还快。",
        "effects": [
         "flag night_bloodless",
         "world dove +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "马洛少校认出了你，却把脸转了过去，喊了一声：“装弹。”"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +120"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "secret_police",
       "n": 2,
       "name": "便衣"
      },
      {
       "id": "dragoon",
       "name": "约瑟普的骑兵"
      }
     ]
    }
   }
  ]
 },
 "a4_07c": {
  "id": "a4_07c",
  "title": "斗兽场的台阶",
  "loc": "安本科斯特 · 旧斗兽场外",
  "text": [
   "台阶上的人眼看着你从当兵的那边走过来。有人认出了公司的铜牌，朝地上啐了一口。",
   "前头那几个穿得太整齐的人已经把家伙掏出来了，有短管枪，有撬棍，还有一个手里攥着一根点着了的引信。站在他们后头的，有举锅盖的，有举旗子的，也有什么都没举的。台阶最上面那一级，有个弗恩老头抱着他那面旗，怎么也不肯撒手。",
   "墙根底下那个消防栓，红漆已经掉了一半。约瑟普在后头大声喊：“别让他们进门！”",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）前排带着家伙的有十一个。（担心。）后面还有四百多个，什么都没带。（不确定。）我们要打的是哪一种？"
   },
   {
    "if": "is.god",
    "text": "台阶底下挤着一群孩子，都是跟着大人来看热闹的，最小的那个还骑在他爹的脖子上。"
   }
  ],
  "choices": [
   {
    "text": "上台阶",
    "if": "partysize >= 5",
    "combat": {
     "title": "斗兽场的台阶",
     "intro": "人群前头那几个穿得太整齐的人，先从怀里掏出了家伙。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "flag",
       "name": "把各邦的旗插回台阶上",
       "desc": "旗手们是来投票的，本来就没打算砸门",
       "check": {
        "skill": "performance",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你捡起一面给人踩脏了的弗恩旗，把它插回了台阶的石缝里。后头的人愣了一下，有几个开始伸手把前头的人往回拽。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "旗杆是断的，你举起来的只有半截。有人朝你扔过来一只鞋。"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +60"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "revolutionary",
       "n": 5,
       "name": "举旗的"
      },
      {
       "id": "secret_police",
       "n": 3,
       "name": "穿得太整齐的"
      },
      {
       "id": "striker",
       "n": 4,
       "name": "抄撬棍的"
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "还施得出法的老兵"
      }
     ]
    }
   },
   {
    "text": "上台阶",
    "if": "partysize == 4",
    "combat": {
     "title": "斗兽场的台阶",
     "intro": "人群前头那几个穿得太整齐的人，先从怀里掏出了家伙。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "flag",
       "name": "把各邦的旗插回台阶上",
       "desc": "旗手们是来投票的，本来就没打算砸门",
       "check": {
        "skill": "performance",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你捡起一面给人踩脏了的弗恩旗，把它插回了台阶的石缝里。后头的人愣了一下，有几个开始伸手把前头的人往回拽。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "旗杆是断的，你举起来的只有半截。有人朝你扔过来一只鞋。"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +60"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "revolutionary",
       "n": 4,
       "name": "举旗的"
      },
      {
       "id": "secret_police",
       "n": 3,
       "name": "穿得太整齐的"
      },
      {
       "id": "striker",
       "n": 3,
       "name": "抄撬棍的"
      },
      {
       "id": "war_mage",
       "name": "还施得出法的老兵"
      }
     ]
    }
   },
   {
    "text": "上台阶",
    "if": "partysize == 3",
    "combat": {
     "title": "斗兽场的台阶",
     "intro": "人群前头那几个穿得太整齐的人，先从怀里掏出了家伙。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "flag",
       "name": "把各邦的旗插回台阶上",
       "desc": "旗手们是来投票的，本来就没打算砸门",
       "check": {
        "skill": "performance",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你捡起一面给人踩脏了的弗恩旗，把它插回了台阶的石缝里。后头的人愣了一下，有几个开始伸手把前头的人往回拽。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "旗杆是断的，你举起来的只有半截。有人朝你扔过来一只鞋。"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +60"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "revolutionary",
       "n": 3,
       "name": "举旗的"
      },
      {
       "id": "secret_police",
       "n": 2,
       "name": "穿得太整齐的"
      },
      {
       "id": "striker",
       "n": 2,
       "name": "抄撬棍的"
      },
      {
       "id": "war_mage",
       "name": "还施得出法的老兵"
      }
     ]
    }
   },
   {
    "text": "上台阶",
    "if": "partysize <= 2",
    "combat": {
     "title": "斗兽场的台阶",
     "intro": "人群前头那几个穿得太整齐的人，先从怀里掏出了家伙。",
     "specials": [
      {
       "id": "hose",
       "name": "接上消防水龙",
       "desc": "斗兽场墙根底下有个消防栓，水龙带锁在岗亭里",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "岗亭的锁一脚就踹开了。你把水龙带拖到两排人中间，拧开了阀门。一道水柱横着扫过去，火把浇灭了一半，刺刀和撬棍也全湿透了，谁都不想再往前挪一步。",
        "effects": [
         "flag night_bloodless"
        ],
        "end": "win"
       },
       "fail": {
        "text": "阀门早就锈死了。你使劲拧到第三圈，阀杆断在了手里，弹回来砸了你自己。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "flag",
       "name": "把各邦的旗插回台阶上",
       "desc": "旗手们是来投票的，本来就没打算砸门",
       "check": {
        "skill": "performance",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你捡起一面给人踩脏了的弗恩旗，把它插回了台阶的石缝里。后头的人愣了一下，有几个开始伸手把前头的人往回拽。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "旗杆是断的，你举起来的只有半截。有人朝你扔过来一只鞋。"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +60"
      ],
      "goto": "a4_08"
     },
     "lose": {
      "effects": [
       "world dove -1",
       "heal 2d8+4"
      ],
      "goto": "a4_08"
     },
     "enemies": [
      {
       "id": "revolutionary",
       "n": 2,
       "name": "举旗的"
      },
      {
       "id": "secret_police",
       "name": "穿得太整齐的"
      },
      {
       "id": "striker",
       "n": 2,
       "name": "抄撬棍的"
      }
     ]
    }
   }
  ]
 },
 "a4_08": {
  "id": "a4_08",
  "title": "调查庭",
  "loc": "安本科斯特 · 旧斗兽场 · 东看台底下",
  "text": [
   "调查庭设在东看台底下，这里原先是关狮子的地方，铁栏杆都还在，只是刷上了白漆。庭上坐着七个法官和一个书记官。旁听席用的是从看台上拆下来的木条凳，早就坐满了，连过道里都站着报馆的人。",
   "调查庭问的是十四年前康威尔广场上的那一声枪。他们先把你当年交上去的那份事件报告念了一遍。书记官念得平平的，念完了，把纸往桌上一扣。",
   {
    "if": "flag.blame_crowd",
    "text": "起因那一栏，你当年填的是“人群”。"
   },
   {
    "if": "flag.blame_officer",
    "text": "起因那一栏，你当年填的是“带队军官”。"
   },
   {
    "if": "!flag.blame_crowd && !flag.blame_officer",
    "text": "起因那一栏，你当年填的是“不明”。"
   },
   {
    "if": "flag.volleys",
    "text": "旁听席上坐着七户人家，都是当年死者的家属，每户都带着一张照片。这些照片全是在同一家照相馆拍的。"
   },
   {
    "if": "flag.square_miracle",
    "text": "书记官翻到 1820 年的那一页，停了很久。记录上写着有四十来发子弹停在了半空里，这一条该记在哪一栏，他拿不准。"
   },
   {
    "if": "flag.night_bloodless",
    "text": "昨天夜里没有死人。庭上的人不管是谁，开口之前都要先把这句话说上一遍。"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "既穿过那身制服、又在广场上待过的证人，只有你一个。法官们看你的时候，头一眼看的是你的铜扣子。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）枪响在前，砖头在后，中间差了两拍，我数过。（不确定。）他们大概会问我是不是器材。"
   },
   {
    "if": "is.god",
    "speaker": "书记官",
    "text": "按照章程，神不得出庭作证。本庭记录在案的证人，是 1820 年在场的那一位。请证人以那一位的身份答话。"
   },
   {
    "if": "is.god",
    "text": "你得把十四年前那个人的嗓子找回来，用它说话。那个人是会害怕的，也会记错，还会让人问住。"
   }
  ],
  "first": [
   "quest q_konwell done",
   "codex c_rean"
  ],
  "choices": [
   {
    "text": "照实说：枪响在砖头之前",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "origin == 'anbennar'",
       "n": 3,
       "why": "你穿过那身制服"
      },
      {
       "if": "flag.ny_predated",
       "n": 2,
       "why": "1820 年元旦你就说过"
      },
      {
       "if": "flag.square_reported",
       "n": 2,
       "why": "你交过笔记"
      },
      {
       "if": "flag.saw_shooter_window",
       "n": 2,
       "why": "你看见过那扇窗"
      },
      {
       "if": "flag.wastage_read",
       "n": 2,
       "why": "“损耗”卷报过了"
      },
      {
       "if": "flag.a4x_witness",
       "n": 2,
       "why": "证人活着到了庭"
      },
      {
       "if": "flag.bribed_whiterose",
       "n": -2,
       "why": "白玫瑰王庭那笔钱被翻了出来"
      },
      {
       "if": "is.god",
       "n": -2,
       "why": "神不得作证，你只能用当年那个人的嗓子说"
      }
     ]
    },
    "ok": {
     "text": [
      "你说枪是在砖头之前响的，{?flag.saw_shooter_window:烟是从税关楼上那扇窗户里冒出来的，那层楼上住的正是部里的观察员，|}{?flag.shot_counted:前后差了两拍，是礼拜三数出来的，|}法官们听完，互相看了一眼。",
      "结论当天就贴了出来：康威尔一事，陆军部负有责任。这件事总算有人担了责。"
     ],
     "effects": [
      "flag inquiry_truth",
      "world dove +2",
      "world press +1",
      "rep republic -1",
      {
       "if": "party.bura",
       "then": [
        "approval bura +1"
       ]
      }
     ],
     "goto": "a4_08b"
    },
    "fail": {
     "text": [
      "你才说到一半就给问住了。他们问你当时站在第几排，从那儿看不看得见税关的窗户。你说你记得。他们说，记得不等于看见。",
      "结论还是贴了出来，上面只有四个字：无从认定。"
     ],
     "effects": [
      "flag inquiry_cover",
      "world press +1"
     ],
     "goto": "a4_08b"
    }
   },
   {
    "text": "替部里遮过去：人群里先开的枪",
    "effects": [
     "flag inquiry_cover",
     "rep republic +2",
     "world dove -1",
     {
      "if": "party.bura",
      "then": [
       "approval bura -3"
      ]
     },
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -2"
      ]
     }
    ],
    "result": [
     "书记官记得飞快。旁听席上有个女人站了起来，又叫旁边的人拉着坐了回去。",
     {
      "if": "party.middlesday",
      "speaker": "礼拜三",
      "text": "（陈述。）是两拍。（愤怒。）我数出来的明明是两拍。"
     }
    ],
    "goto": "a4_08b"
   },
   {
    "text": "说是那个外国酒商干的",
    "effects": [
     "flag inquiry_blame_lorent",
     "world dove +1",
     "rep wand -2",
     {
      "if": "origin == 'lorent'",
      "then": [
       "rep wand -2"
      ]
     }
    ],
    "result": [
     "你说的是一个洛伦特来的酒商，1820 年就住在税关对面的客栈里，人早就回洛伦泰内去了。庭上对这个说法很满意。这一枪总算有了主，而且这个主还不在国内。",
     {
      "if": "origin == 'lorent'",
      "text": "第二天，使馆把你写去的信退了回来，连封都没拆。信封上盖着一个章：“查无此人”。"
     }
    ],
    "goto": "a4_08b"
   }
  ]
 },
 "a4_08b": {
  "id": "a4_08b",
  "title": "换了你怎么办",
  "art": "ev_mages_estate",
  "text": [
   "休庭以后，雷昂总统没有走。他在狮笼隔壁的小屋里等着你，桌上摆着一瓶埃斯玛利亚的白兰地和两只杯子，其中一只已经喝空了。",
   "外头的天快要亮了。签字的那间屋子还亮着灯，桌上那叠拘捕名单到现在还没有人签。",
   {
    "speaker": "雷昂",
    "text": "公投是我亲口答应过他们的。可投出什么结果来，我从来没答应过。这两句话，我每天早上都对着镜子各说一遍，看看哪一句先说不下去。要是换了你，你怎么办？"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "他给你倒酒的时候，手很稳。他还记得你，1810 年你就在他那一排里，那会儿他还不喝酒。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "我就说一句。我老家那个区，1820 年就在暂缓名单上。当然，理论上这跟今晚的事没有关系。"
   }
  ],
  "choices": [
   {
    "text": "陪他喝第二杯",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar'",
    "once": true,
    "effects": [
     "rep republic +1"
    ],
    "result": [
     {
      "speaker": "雷昂",
      "text": "暂缓名单是我签的。一共十三个字，我口述，秘书替我拍出去的。"
     },
     {
      "if": "flag.skiplist_obeyed",
      "speaker": "雷昂",
      "text": "你们后来照办了，照理我该谢谢你。这一声谢我说了，可你千万别接。"
     },
     {
      "if": "!flag.skiplist_obeyed",
      "speaker": "雷昂",
      "text": "你们没照办，这事我当年就知道。我没追究，是因为我自己心里头也盼着有人不照办。"
     }
    ]
   },
   {
    "text": "让十一个邦在同一夜梦见同一只鸽子",
    "tag": "神",
    "if": "is.god && !flag.dove_by_miracle",
    "once": true,
    "effects": [
     "flag dove_by_miracle",
     "world dove +3",
     "rep union -2",
     "var cult +1",
     {
      "if": "party.narwen",
      "then": [
       "approval narwen -2"
      ]
     },
     {
      "if": "party.bura",
      "then": [
       "approval bura -2"
      ]
     }
    ],
    "result": [
     "就在那一夜，从梅尼博尔到康威尔，十一个邦的人都梦见了同一只白鸽，落在自家的窗台上。到了第二天，议会里再没有一个人提分家的事。",
     "第三天，洛伦特的旗舰上送来了一封火漆信，是王冠里那一位写的，口气熟得很：“恭喜。手法干净。我们这一行，头一回都有点手抖”。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "你叫他们梦见的那个，跟他们自己心里想的是一回事吗？科琳教的书上写着，上头的人要是走歪了，底下的人有权起来。这一条，也管得着你。"
     },
     {
      "if": "party.narwen",
      "speaker": "娜尔雯",
      "text": "上回有人这么叫一整座城做梦，还是 1348 年。你知道那一位后来怎么样了吗？死在了自己人手里。"
     }
    ]
   },
   {
    "text": "兑现各邦的议会",
    "if": "flag.inquiry_truth || flag.night_bloodless || world.dove >= 4",
    "effects": [
     "flag dove_honoured",
     "world dove +2",
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     }
    ],
    "result": [
     "雷昂把那叠名单推到一边，另外拿过一张白纸，在上面写了三行字，答应让各邦自己开议会。写完他看了看杯子，这回没有再倒。",
     {
      "speaker": "雷昂",
      "text": "你知道办这件事得花多少钱吗？算了，不知道也好。"
     }
    ],
    "goto": "a4_09"
   },
   {
    "text": "兑现各邦的议会",
    "if": "!flag.inquiry_truth && !flag.night_bloodless && world.dove < 4",
    "effects": [
     "rep republic -1",
     {
      "if": "world.dove <= 3",
      "then": [
       "flag artheta"
      ]
     }
    ],
    "result": [
     {
      "speaker": "雷昂",
      "text": "晚了。昨天夜里的事没有一个人出来担责，到了今天，说什么也没人肯信了。"
     },
     "{?world.dove <= 3:他拿起笔，在那叠名单上签了字，签完把笔一放，又给自己倒了一杯。|他把名单推回抽屉里，上了锁。这件事就这么又往后推了一年。}"
    ],
    "goto": "a4_09"
   },
   {
    "text": "劝他签令",
    "effects": [
     "flag artheta",
     "rep republic +2",
     "rep union -3",
     {
      "if": "party.bura",
      "then": [
       "approval bura -2"
      ]
     },
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem -1"
      ]
     }
    ],
    "result": "他到底还是签了。黎明的时候，东站那边响了一排枪，响得很整齐。雷昂没有出门，在小屋里一直坐到了中午。",
    "goto": "a4_09"
   },
   {
    "text": "劝他放手，让各邦自己走",
    "effects": [
     "flag dove_released",
     "world dove -2",
     "rep republic -2"
    ],
    "result": [
     {
      "speaker": "雷昂",
      "text": "放手……好，那就放手。安本纳尔这个名字，本来的意思是“合”。传到我这儿，字典得改一版了。"
     },
     "他把名单烧了，是一张一张烧的，烧得很慢。"
    ],
    "goto": "a4_09"
   },
   {
    "text": "不答，把杯子放下就走",
    "effects": [
     {
      "if": "world.dove <= 3",
      "then": [
       "flag artheta"
      ],
      "else": [
       "world dove -1"
      ]
     }
    ],
    "result": "{?world.dove <= 3:你走到门口的时候，听见身后笔尖在纸上划了一下。天亮的时候，东站那边响了一排枪。|你走到门口的时候，听见身后抽屉上了锁。这件事又往后推了一年。}",
    "goto": "a4_09"
   }
  ]
 },
 "a4_09": {
  "id": "a4_09",
  "title": "旗舰",
  "art": "ev_mages_estate_mad",
  "loc": "月河口外 · 洛伦特旗舰",
  "date": "1834年花终月",
  "text": [
   "洛伦特的旗舰就停在月河口外头，是一条三层炮甲板的大船。女王这回是亲自来开峰会的，可她的船不肯进港。你们只好坐小艇过去，舷梯是新漆过的，扶手摸上去还粘手。",
   "她的舱在船尾，窗子比别处的大了一倍。卡斯蒂娜女王坐在一张画桌后头，桌上铺着一张还没画完的水彩，画的是河口。王冠就搁在她手边，她没有戴。",
   {
    "speaker": "卡斯蒂娜",
    "text": "您请坐。"
   },
   "说着，她伸手碰了一下王冠。",
   {
    "speaker": "卡斯蒂娜",
    "text": "不必坐了，站着回话。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "她盯着你看了一会儿。1820 年新年朝会那天，你就站在第三根柱子旁边，这个她还记得。你也还记得她那天说话的嗓子。"
   },
   {
    "if": "is.god && flag.ioriel_noticed",
    "speaker": "另一个声音",
    "text": "我们见过。"
   },
   {
    "if": "is.god && !flag.ioriel_noticed",
    "text": "第二句话还没出口，她就先换了称呼，起先叫的是“孩子”，停了一下，又改口叫了“阁下”。"
   }
  ],
  "first": [
   "codex c_castine",
   "codex c_ioriel"
  ],
  "choices": [
   {
    "text": "盯着她的手，看清楚眼下开口的是哪一位",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.saw_first_contact",
       "n": 2,
       "why": "你听过新年朝会上那一嗓子"
      }
     ]
    },
    "ok": {
     "text": "你看出来了。她每回一碰王冠，左手的小指就会翘起来。只要那根小指翘着，开口说话的就不是她本人，是王冠里那一位。",
     "effects": [
      "flag a4x_voice"
     ]
    },
    "fail": {
     "text": "你盯得太久了。女王把画笔放了下来，问你是不是也想给她画一张。",
     "effects": [
      "rep wand -1"
     ]
    }
   },
   {
    "text": "上前一步回话",
    "check": {
     "abil": "wis",
     "dc": 15,
     "save": true
    },
    "ok": {
     "text": "她说话的时候，你脑子里有个地方痒了一下，像有人在往里伸手。你忍住了，没有让它进来。",
     "goto": "a4_09b"
    },
    "fail": {
     "text": "后来你出了舱，走到舷梯上才想起来，你已经答应了替她带一封信去贾赫港。自己是什么时候答应的，你一点也不记得。",
     "effects": [
      "flag charmed_once",
      "rep wand +1"
     ],
     "goto": "a4_09b"
    }
   }
  ]
 },
 "a4_09b": {
  "id": "a4_09b",
  "title": "两个声音",
  "art": "ev_mages_estate_mad",
  "text": [
   "另一个声音开出了价码，一个字一个字说得清清楚楚，听着就像在口述给后人。她要的是第三次法师和平，也就是禁掉黑弹，剩下的魔法交给魔杖托管，各家贵族照旧配一位魔导师，换来坎诺三十年没有战争。",
   {
    "speaker": "另一个声音",
    "text": "在座的各位，都是替别人说话，只有我是替自己说，所以也只有我不会改口。孩子，你又是替谁说话呢？"
   },
   "这句话说完，卡斯蒂娜就低下头去看那张水彩，拿画笔在河口添了一条船，添得很小很小。",
   {
    "if": "is.god",
    "speaker": "另一个声音",
    "text": "阁下与我算是同行，这一屋子人里头，只有你我二位用不着睡觉。我有一个提议，明年春天，卡斯蒂娜由您来加冕，往后这一百年，我们合伙。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "她说“只有我不会改口”，是吧？上回有人这么说，还是 1666 年的事，说这话的人第二年就改了口。"
   }
  ],
  "choices": [
   {
    "text": "把 1820 年新年朝会上看见的，原样告诉她",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "effects": [
     "flag crown_castine",
     "rep wand -2"
    ],
    "result": [
     "你从托里谢赫那份特权案说起，说到她那天那副只有画像上才有的口气，又说到散朝以后三拨人各自塞给你的条子，卡斯蒂娜听完了，把王冠拿起来放进了画箱，压在颜料底下。",
     "王冠里的那一位一句话也没有说，可打那以后，你寄去洛伦泰内的信都有回信，回信的笔迹回回一样，只是口气有的时候不大一样。"
    ],
    "goto": "a4_10"
   },
   {
    "text": "对女王本人说话，劝她走自己的路",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.a4x_voice",
       "n": 2,
       "why": "你分得清是哪一位"
      },
      {
       "if": "flag.heard_old_formula",
       "n": 2,
       "why": "你听出过那套老话"
      },
      {
       "if": "flag.lorent_patron_queen",
       "n": 1,
       "why": "女王是你的东家"
      },
      {
       "if": "var.embassy_gap >= 2",
       "n": -2,
       "why": "你给使馆的报告写得太薄"
      },
      {
       "if": "flag.gladeguard_refused",
       "n": -1,
       "why": "你回绝过林卫上将"
      },
      {
       "if": "flag.charmed_once",
       "n": -1,
       "why": "大咒的余劲"
      }
     ]
    },
    "ok": {
     "text": "你只挑小指不翘的那个人说话，说到第三句，她把画笔放下，自己开了口，她说：“那就谈。谈出来的，才算我的。”",
     "effects": [
      "flag crown_castine"
     ],
     "goto": "a4_10"
    },
    "fail": {
     "text": "她一边听一边点头，可听着听着，小指又翘了起来，嘴里说的是：“孩子，你说得很好。”等你出舱的时候，什么事也没有定下来。",
     "effects": [
      "rep wand -1"
     ],
     "goto": "a4_10"
    }
   },
   {
    "text": "对另一位说话，接下她的和约",
    "effects": [
     "flag crown_ioriel",
     "rep wand +2",
     "rep union -1"
    ],
    "result": [
     {
      "speaker": "另一个声音",
      "text": "好孩子。三十年，我说话算话。"
     },
     "卡斯蒂娜在那条小船旁边又添了一条，添完了去洗笔，洗出来的水是红的。"
    ],
    "goto": "a4_10"
   },
   {
    "text": "答应她：卡斯蒂娜由你加冕",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag crown_ioriel",
     "rep wand +3",
     "rep republic -2",
     "world dove -1",
     "var cult +1",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem -2"
      ]
     }
    ],
    "result": [
     "伊奥瑞尔笑了，只不过她用来笑的是女王的嘴，她说加冕礼就定在明年春分，阁下的座位安排在她右手边，比教廷的还要高一级。",
     "消息第二天就上了《洛伦特日报》的头版，共和国的议会连夜开会，辩论的题目是一位神给敌国的女王加冕，到底算不算宣战。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "魔法交给魔杖托管，女王由神来加冕，理论上我该高兴才对。我是个法师嘛，我该高兴的。"
     }
    ],
    "goto": "a4_10"
   },
   {
    "text": "劝她把王冠摘了，换艾莉丝来戴",
    "if": "flag.met_eilis || flag.lorent_patron_eilis || origin == 'lorent'",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "mods": [
      {
       "if": "flag.a4x_voice",
       "n": 2,
       "why": "你分得清是哪一位"
      },
      {
       "if": "flag.met_eilis",
       "n": 1,
       "why": "你见过艾莉丝"
      },
      {
       "if": "flag.charmed_once",
       "n": -1,
       "why": "大咒的余劲"
      }
     ]
    },
    "ok": {
     "text": "你刚说出“艾莉丝”三个字，女王的手就抖了一下，接着她自己把王冠推到了桌子的那一头，说：“姐姐十六岁就听见过它，我那年才十三。”",
     "effects": [
      "flag crown_off",
      "rep wand -1"
     ],
     "goto": "a4_10"
    },
    "fail": {
     "text": "“孩子，你累了。”话音刚落舱门就开了，进来了六个军官，个个眼神都很客气。",
     "goto": "a4_09c"
    }
   },
   {
    "text": "不表态，告退",
    "effects": [
     "rep wand -1"
    ],
    "result": "你行过礼就退了出来。小艇划出去有一链远了，你回头看了一眼，船尾那扇大窗里的灯已经灭了一半。",
    "goto": "a4_10"
   }
  ]
 },
 "a4_09c": {
  "id": "a4_09c",
  "title": "无人反对",
  "art": "ev_mages_estate_mad",
  "text": [
   "军官们站成半个圈，把舱门堵了个严实。领头的上尉冲你点了点头，就跟在走廊里碰见熟人似的，可昨天晚饭桌上，骂大咒是哄小孩的把戏的也正是他。到了今天，他刮了脸，靴子擦得锃亮，自己骂过什么已经一点都不记得了。",
   "卡斯蒂娜还坐在画桌后头，左手按着王冠，按得指头都发了白。舱壁上挂着一口船钟，钟绳一直垂到桌角边上。",
   "这些人明天还得出去见人，所以动起手来，可别往人家脸上打。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）一共六个，都给我拿刀背招呼啊。谁要是敲断了人家的鼻梁，我就扣谁一个月的饷。"
   }
  ],
  "choices": [
   {
    "text": "用刀背迎上去",
    "if": "partysize >= 5",
    "combat": {
     "title": "女王的舱",
     "intro": "军官们看你的眼神都客客气气的，连拔刀的时候也是客客气气的。",
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲响船钟",
       "desc": "钟声能把人从别人的念头里拽出来",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 15
       },
       "success": {
        "text": "你够着了钟绳，一口气连敲了八下，有两个军官停了手，眨巴着眼睛看看自己手里的刀，又互相问这是在干什么。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "钟绳上抹了油，你一把抓了个空。王冠里那位笑了一声，那可不是女王的嗓子。"
       }
      },
      {
       "id": "queen",
       "name": "冲卡斯蒂娜喊：您自己摘",
       "desc": "只有她自己的手碰得到那顶王冠",
       "check": {
        "skill": "persuasion",
        "dc": 17,
        "mods": [
         {
          "if": "origin == 'lorent'",
          "n": 2,
          "why": "她认得你"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "女王的手在王冠上停了一停，接着就把它从桌上推了下去。王冠骨碌碌滚到舱板上，军官们一齐松了手。",
        "end": "win"
       },
       "fail": {
        "text": "她的手已经伸出去了，可又缩了回来。只听她开口说：“孩子，坐下。”说这话的并不是她。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag crown_off"
      ],
      "goto": "a4_10"
     },
     "lose": {
      "effects": [
       "rep wand -2",
       "heal 1d6+2"
      ],
      "goto": "a4_10"
     },
     "enemies": [
      {
       "id": "enthralled_officer",
       "n": 5
      },
      {
       "id": "war_mage",
       "name": "船上的宫廷法师"
      }
     ]
    }
   },
   {
    "text": "用刀背迎上去",
    "if": "partysize == 4",
    "combat": {
     "title": "女王的舱",
     "intro": "军官们看你的眼神都客客气气的，连拔刀的时候也是客客气气的。",
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲响船钟",
       "desc": "钟声能把人从别人的念头里拽出来",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 15
       },
       "success": {
        "text": "你够着了钟绳，一口气连敲了八下，有两个军官停了手，眨巴着眼睛看看自己手里的刀，又互相问这是在干什么。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "钟绳上抹了油，你一把抓了个空。王冠里那位笑了一声，那可不是女王的嗓子。"
       }
      },
      {
       "id": "queen",
       "name": "冲卡斯蒂娜喊：您自己摘",
       "desc": "只有她自己的手碰得到那顶王冠",
       "check": {
        "skill": "persuasion",
        "dc": 17,
        "mods": [
         {
          "if": "origin == 'lorent'",
          "n": 2,
          "why": "她认得你"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "女王的手在王冠上停了一停，接着就把它从桌上推了下去。王冠骨碌碌滚到舱板上，军官们一齐松了手。",
        "end": "win"
       },
       "fail": {
        "text": "她的手已经伸出去了，可又缩了回来。只听她开口说：“孩子，坐下。”说这话的并不是她。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag crown_off"
      ],
      "goto": "a4_10"
     },
     "lose": {
      "effects": [
       "rep wand -2",
       "heal 1d6+2"
      ],
      "goto": "a4_10"
     },
     "enemies": [
      {
       "id": "enthralled_officer",
       "n": 4
      },
      {
       "id": "court_mage",
       "name": "船上的宫廷法师"
      }
     ]
    }
   },
   {
    "text": "用刀背迎上去",
    "if": "partysize == 3",
    "combat": {
     "title": "女王的舱",
     "intro": "军官们看你的眼神都客客气气的，连拔刀的时候也是客客气气的。",
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲响船钟",
       "desc": "钟声能把人从别人的念头里拽出来",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 15
       },
       "success": {
        "text": "你够着了钟绳，一口气连敲了八下，有两个军官停了手，眨巴着眼睛看看自己手里的刀，又互相问这是在干什么。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "钟绳上抹了油，你一把抓了个空。王冠里那位笑了一声，那可不是女王的嗓子。"
       }
      },
      {
       "id": "queen",
       "name": "冲卡斯蒂娜喊：您自己摘",
       "desc": "只有她自己的手碰得到那顶王冠",
       "check": {
        "skill": "persuasion",
        "dc": 17,
        "mods": [
         {
          "if": "origin == 'lorent'",
          "n": 2,
          "why": "她认得你"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "女王的手在王冠上停了一停，接着就把它从桌上推了下去。王冠骨碌碌滚到舱板上，军官们一齐松了手。",
        "end": "win"
       },
       "fail": {
        "text": "她的手已经伸出去了，可又缩了回来。只听她开口说：“孩子，坐下。”说这话的并不是她。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag crown_off"
      ],
      "goto": "a4_10"
     },
     "lose": {
      "effects": [
       "rep wand -2",
       "heal 1d6+2"
      ],
      "goto": "a4_10"
     },
     "enemies": [
      {
       "id": "enthralled_officer",
       "n": 3
      }
     ]
    }
   },
   {
    "text": "用刀背迎上去",
    "if": "partysize <= 2",
    "combat": {
     "title": "女王的舱",
     "intro": "军官们看你的眼神都客客气气的，连拔刀的时候也是客客气气的。",
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲响船钟",
       "desc": "钟声能把人从别人的念头里拽出来",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 15
       },
       "success": {
        "text": "你够着了钟绳，一口气连敲了八下，有两个军官停了手，眨巴着眼睛看看自己手里的刀，又互相问这是在干什么。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "钟绳上抹了油，你一把抓了个空。王冠里那位笑了一声，那可不是女王的嗓子。"
       }
      },
      {
       "id": "queen",
       "name": "冲卡斯蒂娜喊：您自己摘",
       "desc": "只有她自己的手碰得到那顶王冠",
       "check": {
        "skill": "persuasion",
        "dc": 17,
        "mods": [
         {
          "if": "origin == 'lorent'",
          "n": 2,
          "why": "她认得你"
         },
         {
          "if": "flag.charmed_once",
          "n": -1,
          "why": "大咒的余劲"
         }
        ]
       },
       "success": {
        "text": "女王的手在王冠上停了一停，接着就把它从桌上推了下去。王冠骨碌碌滚到舱板上，军官们一齐松了手。",
        "end": "win"
       },
       "fail": {
        "text": "她的手已经伸出去了，可又缩了回来。只听她开口说：“孩子，坐下。”说这话的并不是她。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag crown_off"
      ],
      "goto": "a4_10"
     },
     "lose": {
      "effects": [
       "rep wand -2",
       "heal 1d6+2"
      ],
      "goto": "a4_10"
     },
     "enemies": [
      {
       "id": "enthralled_officer"
      },
      {
       "id": "court_mage",
       "name": "船上的宫廷法师"
      }
     ]
    }
   },
   {
    "text": "不打，翻窗跳上小艇",
    "effects": [
     "rep wand -2",
     "damage 2d6"
    ],
    "result": "窗子离水面有两丈高，你落进小艇的时候磕着了膝盖，船夫一声没吭，抄起桨就划，你回头再看，大窗里的灯正一盏接一盏地灭掉。",
    "goto": "a4_10"
   }
  ]
 },
 "a4_10": {
  "id": "a4_10",
  "title": "贾赫港",
  "art": "ev_damestear_core",
  "loc": "布西拉尔 · 贾赫港 · 金库",
  "text": [
   "贾赫港的金库凿在港口北面的石崖里，门口蹲着两头青铜狮子，狮军团的卫兵四个人一班轮着守。原来各个位面的音叉频率全锁在里头，一个频率一把叉，一把叉占一个格子，格子上只编号，不写名字。",
   "阿尔瓦·西尔·阿蒙在会客厅里等你，身后还站着两个看守。他头上的角已经顶出了帽子，帽顶那两个洞是他自己拿剪子剪的。布西拉尔把他当国宝一样看着，可他心里只有一件事，就是再下去一回。",
   {
    "speaker": "阿尔瓦",
    "text": "十四年啦！那只罐子还是你们在看着吧？她好不好呀？还有那底下的海，我跟你说，我连做梦都在数那儿的浪头呢……"
   },
   {
    "if": "!flag.jar_sold",
    "speaker": "别摇",
    "text": "你把我引见给他吧。当年他抓我的时候，连我叫什么都没问过一声。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "一把叉就是一个世界啊，理论上，这间屋子比整个魔导院还值钱。实际上呢，门口那四个兵的饷是按天发的。"
   }
  ],
  "first": [
   "level 9",
   "codex c_root",
   "codex c_fork"
  ],
  "choices": [
   {
    "text": "把别摇引见给阿尔瓦",
    "once": true,
    "effects": [
     "flag a4x_introduced",
     "xp 300"
    ],
    "result": [
     "你把罐子摆到他面前，拧开了盖子，阿尔瓦弯下腰来看，帽子上那两只角差点碰着罐口。",
     {
      "speaker": "别摇",
      "text": "我叫别摇，就是罐子标签上那两个字，还是你亲手写的呢。"
     },
     "阿尔瓦张着嘴愣了半天，末了才说出一声“幸会”，跟着又补了一句“对不住”。别摇说，后头这一句，她要记上一笔。"
    ]
   },
   {
    "text": "劝阿尔瓦跟你走，当领航",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "flag.alvar_friend",
       "n": 3,
       "why": "他认你这个朋友"
      },
      {
       "if": "flag.charmed_once",
       "n": -1,
       "why": "大咒的余劲"
      }
     ]
    },
    "ok": {
     "text": "你话还没说完，他就满口答应了，当天夜里他从厨房的窗户爬了出来，手里拎着一只皮箱，里头塞满了海图。等布西拉尔的人追到码头，船早已离了岸。",
     "effects": [
      "flag alvar_pilot",
      "rep charter -1"
     ]
    },
    "fail": {
     "text": "他倒是答应了，谁知第二天看守就把他挪进了内院，窗子上还加了铁条，后来他托厨子捎出来一张纸条，上头只写着“下回”两个字。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "照阿兰蒂尔塔草约的门户条款，调阅频率",
    "if": "flag.article_doors",
    "effects": [
     "flag freq_treaty",
     "item +tuning_fork",
     "rep south +1"
    ],
    "result": "金库的司库把条款念了两遍，第二遍念得格外慢，念完他打开一个格子，取出一把音叉，叫书记记上一笔，写的是“借出，共管委员会，一把”。",
    "goto": "a4_11"
   },
   {
    "text": "拿收条跟金库打官司",
    "tag": "印",
    "if": "faction == 'seal' && flag.fork_receipt && !flag.article_doors",
    "effects": [
     "flag freq_bought",
     "item +tuning_fork"
    ],
    "result": "1820 年那把音叉是在阿迪诺诺西的地界上收走的，当时什么手续也没走，好在收条还在你手里。司库看了看收条，又看了看你，叫人抄了一份频率给你，他说这官司真打起来得打上十年，他宁可抄。",
    "goto": "a4_11"
   },
   {
    "text": "买一份频率",
    "if": "rep.charter >= 4 || flag.fork_receipt",
    "req": "gold >= 1000",
    "reqText": "要 1000 金冠",
    "cost": {
     "gold": 1000
    },
    "effects": [
     "flag freq_bought",
     "item +tuning_fork"
    ],
    "result": "司库给你打了个折，说是看在老主顾的份上。音叉装在一只丝绒盒子里，盒盖里面烫着一行金字，“布西拉尔王国，版权所有”。",
    "goto": "a4_11"
   },
   {
    "text": "买一份频率",
    "if": "!(rep.charter >= 4 || flag.fork_receipt)",
    "req": "gold >= 2000",
    "reqText": "要 2000 金冠",
    "cost": {
     "gold": 2000
    },
    "effects": [
     "flag freq_bought",
     "item +tuning_fork"
    ],
    "result": "一共两千金冠，司库一枚一枚地数，数到一半还换了个人接着数。音叉装在一只丝绒盒子里，盒盖里面烫着一行金字，“布西拉尔王国，版权所有”。",
    "goto": "a4_11"
   },
   {
    "text": "等夜里，摸进金库",
    "check": {
     "skill": "stealth",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "flag.fork_sketch",
       "n": 2,
       "why": "你画过那把音叉"
      }
     ]
    },
    "ok": {
     "text": "卫兵换班的时候，狮子底下有半刻钟的空当，你趁这工夫贴着崖壁溜进了门，只见里头的格子一排接着一排，一直排到看不见的地方。",
     "goto": "a4_10b"
    },
    "fail": {
     "text": "你一脚踩响了一块松动的石板，铜锣当当当响了三下，两头的门里都出来了人。",
     "goto": "a4_10c"
    }
   },
   {
    "text": "不要他们的，回头问罐子",
    "effects": [
     {
      "if": "!flag.jar_sold",
      "then": [
       "rep charter -1"
      ]
     }
    ],
    "result": "司库一直把你送到门口，说金库的门一直开着，价钱也一直开着。",
    "goto": "a4_11"
   }
  ]
 },
 "a4_10b": {
  "id": "a4_10b",
  "title": "一把叉一个格子",
  "art": "ev_damestear_core",
  "text": [
   "格子都是黄铜的，一排四十个，每个上头钉着一块铜牌，只刻编号，不刻地方，只有最里头那一排的铜牌是新的，都是 1820 年以后才刻上去的。",
   "你找到的那个格子上刻着“一号”。锁是转盘锁，要拨三圈，每圈十二个刻度。格子缝里透出一点青蓝的光，还听得见一点嗡嗡声，跟别摇翅膀扇得最快的时候是一个音。",
   "走廊尽头有脚步声，走得不紧不慢，每隔一刻钟过来一趟。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）转盘里的齿轮少了一颗齿，拨到第二圈会多走一格。（礼貌。）让我来数吧。"
   }
  ],
  "choices": [
   {
    "text": "拨开转盘，取出那把音叉",
    "check": {
     "skill": "sleight",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "flag.fork_sketch",
       "n": 2,
       "why": "你画过那把音叉"
      },
      {
       "if": "party.middlesday",
       "n": 1,
       "why": "礼拜三替你数齿"
      }
     ]
    },
    "ok": {
     "text": "第三圈拨到了头，格子门弹开了半寸，里头那把音叉凉得扎手，你把它揣进怀里，顺着原路退了出来，好在狮子底下还是那半刻钟的空当。",
     "effects": [
      "flag freq_stolen",
      "item +tuning_fork",
      "world doors +1",
      "rep charter -2"
     ],
     "goto": "a4_11"
    },
    "fail": {
     "text": "第二圈偏偏多走了一格，格子里头叮的响了一声铃，紧跟着整个金库的格子全都响了起来。",
     "goto": "a4_10c"
    }
   },
   {
    "text": "什么都不碰，原路出去",
    "effects": [
     "xp 200"
    ],
    "result": "退出来的时候你数了数，一排四十个格子，一共七排，哪一排通到哪儿你全不知道，不过这件事你记在心里了。",
    "goto": "a4_11"
   }
  ]
 },
 "a4_10c": {
  "id": "a4_10c",
  "title": "狮军团",
  "art": "ev_damestear_core",
  "text": [
   "铜锣还在响，狮军团的卫兵从两头的门里出来，四个人一排，手里的火驱枪擦得能照见人影，枪托上还刻着各人的编号。领头的军士吹了一声哨子。",
   "金库正当中那尊青铜守像抬起了头，它是个狮子头的武士，在那儿当了两百年的摆设，脚底下的石板都磨出了一圈亮印子。这会儿它往前迈了一步，那圈亮印子就裂开了。",
   "靠墙的架子上挂着试音用的音叉，一把拴一个标签，其中有一把的标签是红的，上头写着“错，勿用”。",
   {
    "speaker": "狮军团军士",
    "text": "东西放下，人跪下，手搁在脑袋上！布西拉尔的牢饭一天管两顿，说实在的，不难吃。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）牢饭可不算饷。"
   }
  ],
  "choices": [
   {
    "text": "拔枪",
    "if": "partysize >= 5",
    "combat": {
     "title": "贾赫港的金库",
     "intro": "铜锣响了三下，狮军团的人从两头的门里出来了，手里的火驱枪擦得能照见人。",
     "specials": [
      {
       "id": "note",
       "name": "拿金库的音叉敲一个错音",
       "desc": "架子上的音叉都标着频率，连错的那一把也标着",
       "check": {
        "skill": "arcana",
        "dc": 15
       },
       "success": {
        "text": "音叉嗡的一声，屋子当中的石板上转出一个澡盆大的漩涡，水是从别处来的，还是咸的，守像的半截腿陷了进去，卫兵们也都站不稳了。",
        "dmgAll": "2d8",
        "type": "force"
       },
       "fail": {
        "text": "你敲得太准了，架子上另外十几把音叉一齐跟着响，震得你耳朵直往外淌血。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "flag freq_stolen",
       "item +tuning_fork",
       "world doors +1",
       "rep charter -2"
      ],
      "goto": "a4_11"
     },
     "lose": {
      "effects": [
       "gold -500",
       "heal 2d8+4"
      ],
      "goto": "a4_11"
     },
     "enemies": [
      {
       "id": "lion_legionary",
       "n": 4
      },
      {
       "id": "challumata",
       "n": 2,
       "name": "金库的青铜守像"
      }
     ]
    }
   },
   {
    "text": "拔枪",
    "if": "partysize == 4",
    "combat": {
     "title": "贾赫港的金库",
     "intro": "铜锣响了三下，狮军团的人从两头的门里出来了，手里的火驱枪擦得能照见人。",
     "specials": [
      {
       "id": "note",
       "name": "拿金库的音叉敲一个错音",
       "desc": "架子上的音叉都标着频率，连错的那一把也标着",
       "check": {
        "skill": "arcana",
        "dc": 15
       },
       "success": {
        "text": "音叉嗡的一声，屋子当中的石板上转出一个澡盆大的漩涡，水是从别处来的，还是咸的，守像的半截腿陷了进去，卫兵们也都站不稳了。",
        "dmgAll": "2d8",
        "type": "force"
       },
       "fail": {
        "text": "你敲得太准了，架子上另外十几把音叉一齐跟着响，震得你耳朵直往外淌血。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "flag freq_stolen",
       "item +tuning_fork",
       "world doors +1",
       "rep charter -2"
      ],
      "goto": "a4_11"
     },
     "lose": {
      "effects": [
       "gold -500",
       "heal 2d8+4"
      ],
      "goto": "a4_11"
     },
     "enemies": [
      {
       "id": "lion_legionary",
       "n": 3
      },
      {
       "id": "challumata",
       "n": 2,
       "name": "金库的青铜守像"
      }
     ]
    }
   },
   {
    "text": "拔枪",
    "if": "partysize == 3",
    "combat": {
     "title": "贾赫港的金库",
     "intro": "铜锣响了三下，狮军团的人从两头的门里出来了，手里的火驱枪擦得能照见人。",
     "specials": [
      {
       "id": "note",
       "name": "拿金库的音叉敲一个错音",
       "desc": "架子上的音叉都标着频率，连错的那一把也标着",
       "check": {
        "skill": "arcana",
        "dc": 15
       },
       "success": {
        "text": "音叉嗡的一声，屋子当中的石板上转出一个澡盆大的漩涡，水是从别处来的，还是咸的，守像的半截腿陷了进去，卫兵们也都站不稳了。",
        "dmgAll": "2d8",
        "type": "force"
       },
       "fail": {
        "text": "你敲得太准了，架子上另外十几把音叉一齐跟着响，震得你耳朵直往外淌血。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "flag freq_stolen",
       "item +tuning_fork",
       "world doors +1",
       "rep charter -2"
      ],
      "goto": "a4_11"
     },
     "lose": {
      "effects": [
       "gold -500",
       "heal 2d8+4"
      ],
      "goto": "a4_11"
     },
     "enemies": [
      {
       "id": "lion_legionary",
       "n": 3
      },
      {
       "id": "challumata",
       "name": "金库的青铜守像"
      }
     ]
    }
   },
   {
    "text": "拔枪",
    "if": "partysize <= 2",
    "combat": {
     "title": "贾赫港的金库",
     "intro": "铜锣响了三下，狮军团的人从两头的门里出来了，手里的火驱枪擦得能照见人。",
     "specials": [
      {
       "id": "note",
       "name": "拿金库的音叉敲一个错音",
       "desc": "架子上的音叉都标着频率，连错的那一把也标着",
       "check": {
        "skill": "arcana",
        "dc": 15
       },
       "success": {
        "text": "音叉嗡的一声，屋子当中的石板上转出一个澡盆大的漩涡，水是从别处来的，还是咸的，守像的半截腿陷了进去，卫兵们也都站不稳了。",
        "dmgAll": "2d8",
        "type": "force"
       },
       "fail": {
        "text": "你敲得太准了，架子上另外十几把音叉一齐跟着响，震得你耳朵直往外淌血。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "flag freq_stolen",
       "item +tuning_fork",
       "world doors +1",
       "rep charter -2"
      ],
      "goto": "a4_11"
     },
     "lose": {
      "effects": [
       "gold -500",
       "heal 2d8+4"
      ],
      "goto": "a4_11"
     },
     "enemies": [
      {
       "id": "lion_legionary"
      },
      {
       "id": "challumata",
       "name": "金库的青铜守像"
      }
     ]
    }
   },
   {
    "text": "把手搁在脑袋上",
    "effects": [
     "gold -500",
     "rep charter -1"
    ],
    "result": "牢饭确实不难吃，鱼汤里还真有鱼。你们给关了一夜，第二天交了五百金冠的罚款，司库亲自把你们送出门，还说欢迎再来。",
    "goto": "a4_11"
   }
  ]
 },
 "a4_11": {
  "id": "a4_11",
  "title": "别摇开价",
  "loc": "贾赫港外 · 船上",
  "date": "1834年泪落月初",
  "text": [
   "贾赫港的灯火落到了船尾后头，布西拉尔的小艇追上来过一回，递上一封信，又退到一链开外，挂着灯等你回话。",
   {
    "text": "交回罐中之物，则频率、领航、护航，概由本王国承担。另付一千五百金冠，见物即付。",
    "cls": "letter"
   },
   "舱里只有你一个人，别人都睡下了，连埃塔的门缝里也没了亮光。罐子搁在海图桌上，别摇坐在盖子边上，翅膀收着，{?world.tears <= 2:身上那点光暗得只照得见她自己的脚|身上那点光正好照着海图的一角}。",
   "这件事她十四年里一次也没提过，原来你们那把音叉，就是照着她的翅音调出来的。",
   {
    "speaker": "别摇",
    "text": "阿尔瓦那年在海上听见的那个音，就是我呀。他连我叫什么都没问，就照着那个音做了一把叉。{?flag.a4x_introduced:今天他总算问了，可惜迟了十四年，我给他记上一笔。|}"
   },
   {
    "speaker": "别摇",
    "text": "现在你都知道了，信上开的那个价，你也看见了。接下来要么你开价，要么我开价。"
   },
   {
    "if": "is.lizardfolk",
    "text": "你一直管她叫“勿摇”，都十四年了，她一回也没纠正过你。"
   }
  ],
  "first": [
   "quest q_jar stage 3"
  ],
  "choices": [
   {
    "text": "把罐子交给小艇上的人",
    "effects": [
     "flag jar_sold",
     "var jar_trust =0",
     "world doors +1",
     "gold +1500",
     "rep charter +1",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     "小艇靠了过来，有个戴手套的人接过罐子，两手捧着，像捧着一碗汤，临走给你留下了一只钱箱和一只丝绒盒子。",
     "别摇一路都没回头，小艇上的灯越划越远，海上就只剩你这一条船还亮着灯了。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "等她睡着，把罐子贴在桅杆上定音",
    "effects": [
     "flag jar_used_unasked",
     "var jar_trust =0",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     "到了后半夜，她身上的光暗了下去，你把罐子拿上甲板，贴在桅杆上，拿一把空白的音叉去对她的翅音，前前后后对了三十四回，总算对准了。",
     "天亮的时候，罐子已经回到了海图桌上，跟原先摆的地方只差了一指宽。她什么也没说。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "问她要什么，你自己付",
    "effects": [
     "flag jar_asked",
     "flag jar_price_self",
     "var jar_trust +2",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     {
      "speaker": "别摇",
      "text": "{?flag.jar_snubbed:一个名字，一段记忆，这两样我都要。谁叫你当年让我等过呢。|一个名字，或者一段记忆，你自己挑一样吧。我拿走以后，你不会觉得少了什么的。}"
     },
     "你说了一样，她把它收进了罐底，就跟收起一块糖似的，然后扇了一下翅膀，桌上一把空白的音叉自己就响了。",
     "打那以后，她再也没叫过你的名字，至于为什么，只有她自己知道。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "叫醒布拉，问她肯不肯替你付",
    "if": "party.bura",
    "effects": [
     "flag jar_asked",
     "flag jar_price_companion",
     "var jar_trust +2",
     "approval bura +1",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     "布拉披着军大衣进来了，听你把话说完，下巴上的铰链咔的响了一声。",
     {
      "speaker": "布拉",
      "text": "下巴上挨的那一下，1810 年，就是那道咒。你拿去吧。我记了它二十四年，够本了。"
     },
     "别摇收下了，布拉摸了摸自己的下巴，摸到的是黄铜，她愣了一下，像是想不起来这东西是怎么来的了。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "叫醒礼拜三，问它肯不肯替你付",
    "if": "party.middlesday",
    "effects": [
     "flag jar_asked",
     "flag jar_price_companion",
     "var jar_trust +2",
     "approval middlesday +1",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     {
      "speaker": "礼拜三",
      "text": "（陈述。）我说的头一句话，是“今天礼拜几”。（不确定。）给了你以后，我还会知道今天是礼拜几吗？（礼貌。）你拿去吧。"
     },
     "别摇收下了。礼拜三站了一会儿，问舱里的人今天礼拜几，你告诉它，今天礼拜三。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "叫醒吉列姆，问他肯不肯替你付",
    "if": "party.guilhem",
    "effects": [
     "flag jar_asked",
     "flag jar_price_companion",
     "var jar_trust +2",
     "approval guilhem +1",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     {
      "speaker": "吉列姆",
      "text": "那就拿咖啡的味道吧。大夫三十年前就不让我喝了，理论上我早该忘干净了。拿去吧，也省得我老惦记着。"
     },
     "别摇收下了，第二天早上，吉列姆端着一杯咖啡站在甲板上，闻了老半天，说这东西怎么一股煤灰味儿。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "叫醒娜尔雯，问她肯不肯替你付",
    "if": "party.narwen",
    "effects": [
     "flag jar_asked",
     "flag jar_price_companion",
     "var jar_trust +2",
     "approval narwen +1",
     {
      "if": "item.tuning_fork < 1",
      "then": [
       "item +tuning_fork"
      ]
     }
    ],
    "result": [
     {
      "speaker": "娜尔雯",
      "text": "1666 年那盏灯有多沉，我替她举了整整一夜。你要的是这个吗？好啊，别的我都还记得，那就行了。"
     },
     "别摇收下了。娜尔雯伸出手，在空中掂了掂，像是在掂一样已经没有了的东西。"
    ],
    "goto": "a4_12"
   },
   {
    "text": "告诉她：金库的频率在手里，用不着你的翅膀",
    "if": "flag.freq_treaty || flag.freq_bought || flag.freq_stolen",
    "effects": [
     "var jar_trust +1"
    ],
    "result": [
     "别摇看了你好一会儿，看得很仔细，像在看一笔怎么也对不上的账。",
     {
      "speaker": "别摇",
      "text": "这也算一笔。至于记在哪一边嘛，我还没想好呢。"
     }
    ],
    "goto": "a4_12"
   }
  ]
 },
 "a4_12": {
  "id": "a4_12",
  "title": "石狮灯塔",
  "art": "load_2",
  "loc": "特弗海峡",
  "date": "1834年泪落月",
  "text": [
   "特弗海峡最窄的地方，两岸各立着一座灯塔，塔基雕成狮子的样子，脸都朝着外海。这会儿海峡里可不止你们一条船，有一艘侏儒议会的铁甲舰冒着黑烟往北开，炮窗里亮着一排青光，谁也不搭理。",
   "你们后头还缀着一条卡拉桑尼的抽气船，船头架着一样东西，拿帆布蒙着。{?flag.client_charter:船长打旗语说他们是来护航的，可护航的船哪有跟得这么近的。|它既不打旗语，也不肯让道。}",
   "天上那艘飞艇是上午才出现的，吊篮上漆着一只怀表，那是准点公司的船，这家同行向来从不迟到。没雇到你的那几家合起来雇了他们，要的是罐子，要不就是频率，要不就两样都要。",
   {
    "if": "flag.jar_sold",
    "text": "罐子其实已经不在船上了，可准点公司的人并不知道，飞艇照样压了下来。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）飞艇上有八个，抽气船上还不知道有几个呢。上风在西边。"
   }
  ],
  "choices": [
   {
    "text": "抢上风，把船头掉过来对着飞艇",
    "check": {
     "skill": "survival",
     "alt": [
      "athletics"
     ],
     "dc": 15,
     "party": true,
     "adv": "is.sailor"
    },
    "ok": {
     "text": "帆吃满了风，船头一偏，飞艇抛下来的锚钩落了个空，准点公司的陆战队有两个人还挂在钩子上，又叫上头给拉了回去。",
     "effects": [
      "flag a4x_windward"
     ],
     "goto": "a4_12b"
    },
    "fail": {
     "text": "偏偏风向转了半个罗盘，飞艇的锚钩落在了你们的后桅上，钩得又稳又准，果真是从不迟到。",
     "goto": "a4_12b"
    }
   },
   {
    "text": "站到船头，跟对面的队长按老规矩单挑",
    "tag": "武人",
    "if": "is.martial",
    "check": {
     "skill": "athletics",
     "alt": [
      "acrobatics"
     ],
     "dc": 17
    },
    "ok": {
     "text": "队长顺着锚缆滑了下来，先把合同第七条念了一遍，说的是两家队长决斗，以胜者为准，结果他的转轮枪打空了三发，你的刀已经架在了他脖子上。他从胸甲里抽出合同，在第七条底下签了字，带着人走了。",
     "effects": [
      "gold +200",
      "xp 600"
     ],
     "goto": "a4_13"
    },
    "fail": {
     "text": "他比你快了半拍，剑尖先挑开了你的袖子，又在你肋下拉了一道口子，然后他收了剑，念起第七条第二款来：“决斗不分胜负的，各凭本事。”",
     "effects": [
      "damage 2d8"
     ],
     "goto": "a4_12b"
    }
   },
   {
    "text": "迎上去",
    "goto": "a4_12b"
   }
  ]
 },
 "a4_12b": {
  "id": "a4_12b",
  "title": "准点公司",
  "art": "load_2",
  "loc": "特弗海峡",
  "text": [
   "飞艇一直压到了桅顶，吊篮里探出四支枪管来，准点公司的队长站在吊篮边上，胸甲擦得发亮，正从胸甲里头抽出了一页纸。",
   {
    "speaker": "准点公司的队长",
    "text": "受托取回活体一件，装于玻璃器内，或频率一份。本公司定于泪落月十一日午时整交货。现在是十一点四十。"
   },
   "右舷那座石狮灯塔上的大镜子正对着你们，镜框上的铁环已经生了锈。飞艇的锚缆是麻芯钢丝拧的，一头拴在吊篮底下，另一头钩在你们的桅杆上。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "对面那个法师是帝国学院 1819 届的，催生术还是我教的呢。理论上，他该叫我一声老师。"
   }
  ],
  "choices": [
   {
    "text": "开打",
    "if": "!flag.a4x_windward && partysize >= 5",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_captain"
      },
      {
       "id": "rival_blade",
       "n": 3,
       "name": "准点公司的剑手"
      },
      {
       "id": "rival_mage",
       "n": 2,
       "name": "准点公司的法师"
      },
      {
       "id": "airship_marine",
       "n": 3
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "!flag.a4x_windward && partysize == 4",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_captain"
      },
      {
       "id": "rival_blade",
       "n": 3,
       "name": "准点公司的剑手"
      },
      {
       "id": "rival_mage",
       "n": 2,
       "name": "准点公司的法师"
      },
      {
       "id": "airship_marine",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "!flag.a4x_windward && partysize == 3",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_captain"
      },
      {
       "id": "rival_blade",
       "name": "准点公司的剑手"
      },
      {
       "id": "airship_marine",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "!flag.a4x_windward && partysize <= 2",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_blade",
       "name": "准点公司的剑手"
      },
      {
       "id": "rival_mage",
       "name": "准点公司的法师"
      },
      {
       "id": "airship_marine"
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "flag.a4x_windward && partysize >= 5",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_captain"
      },
      {
       "id": "rival_blade",
       "n": 3,
       "name": "准点公司的剑手"
      },
      {
       "id": "rival_mage",
       "n": 2,
       "name": "准点公司的法师"
      },
      {
       "id": "airship_marine"
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "flag.a4x_windward && partysize == 4",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_captain"
      },
      {
       "id": "rival_blade",
       "n": 3,
       "name": "准点公司的剑手"
      },
      {
       "id": "rival_mage",
       "n": 2,
       "name": "准点公司的法师"
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "flag.a4x_windward && partysize == 3",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_captain"
      },
      {
       "id": "rival_blade",
       "name": "准点公司的剑手"
      }
     ]
    }
   },
   {
    "text": "开打",
    "if": "flag.a4x_windward && partysize <= 2",
    "combat": {
     "title": "特弗海峡",
     "intro": "准点公司的队长从胸甲里抽出一页合同，把第三条第二款念了一遍，念完才拔枪。",
     "specials": [
      {
       "id": "lamp",
       "name": "转石狮灯塔的灯",
       "desc": "灯塔的大镜子能晃瞎飞艇舵手的眼",
       "check": {
        "skill": "perception",
        "dc": 15
       },
       "success": {
        "text": "你算准了飞艇转过来的那一下，把镜子扳了半圈，舵手两手捂住了眼睛，飞艇一头撞在桅杆上，吊篮里的人滚了一甲板。",
        "dmgAll": "3d6"
       },
       "fail": {
        "text": "镜子是转过去了，可照着的是你们自己的船头。"
       }
      },
      {
       "id": "anchor",
       "name": "砍断飞艇的锚缆",
       "desc": "锚缆一断，上头的人就下不来了",
       "check": {
        "skill": "athletics",
        "dc": 15
       },
       "success": {
        "text": "锚缆是麻芯钢丝的，你一连砍了六下，最后一下砍断的时候，飞艇猛地往上一蹿，正顺着缆往下滑的两个人就这么挂在了半空，上不去也下不来。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "钢丝没断，斧头倒先卷了刃。缆绳一甩，结结实实抽在你的肋条上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "gold +300"
      ],
      "goto": "a4_13"
     },
     "lose": {
      "effects": [
       {
        "if": "!flag.jar_sold",
        "then": [
         "var jar_trust -1"
        ]
       },
       "heal 2d8+4"
      ],
      "goto": "a4_13"
     },
     "enemies": [
      {
       "id": "rival_blade",
       "name": "准点公司的剑手"
      },
      {
       "id": "rival_mage",
       "name": "准点公司的法师"
      }
     ]
    }
   }
  ]
 },
 "a4_13": {
  "id": "a4_13",
  "title": "卡尔希尔",
  "art": "load_22",
  "loc": "阳洲南海 · 卡尔希尔 · 水术师行会",
  "text": [
   "卡尔希尔是阳洲南边海上的一个岛，隔着一道水就是盛夏群岛，眼下雨季刚过，码头的石板缝里还长着青苔。水术师行会的会堂是一间圆顶的大屋子，屋顶开着天窗，天窗底下是一池水，池边摆着一圈石凳，凳面上都给尾巴留了槽。",
   "当年跟着游学团去坎诺的那批学生，如今有三个当上了部长，其中一个穿着坎诺式的燕尾服来见你，燕尾当中剪开了一道口子，好让尾巴伸出来。",
   "行会的老水术师坐在池边，跟你说了一件事。罐子从港外经过的那天夜里，海岸上那座尖碑响了，那可不是打雷，是从石头里头响出来的，足足响了一刻钟，跟罐子过港的时辰一刻也不差。",
   {
    "if": "flag.karshyr_message",
    "text": "你把伊索贝尔港那句话带到了。老水术师听完，在池边的石头上刻了一道。"
   },
   {
    "if": "!flag.jar_sold",
    "speaker": "别摇",
    "text": "这儿的水倒有点味儿，咸的，还带着铁，比你们那儿强。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）那天夜里，我的芯核也响了一刻钟。（不确定。）我还以为是我坏了呢。"
   }
  ],
  "first": [
   "codex c_spires",
   "codex c_karshyr",
   {
    "if": "flag.karshyr_message",
    "then": [
     "rep south +1"
    ]
   }
  ],
  "choices": [
   {
    "text": "对一对尖碑的响和音叉的光",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 16,
     "party": true,
     "adv": "is.lizardfolk",
     "mods": [
      {
       "if": "flag.saw_fork_light",
       "n": 2,
       "why": "1820 年你看过那把音叉的光"
      }
     ]
    },
    "ok": {
     "text": "你把行会记下的时辰和响声，拿去跟音叉的频率对了一遍，一个音正好对一种颜色，可见尖碑跟音叉是同一类东西。它也是一扇门，至于门那边接着哪儿，墙上兴许刻着。",
     "effects": [
      "xp 400"
     ]
    },
    "fail": {
     "text": "你对了半夜也没对上，还叫池水溅了一脸，凉得扎人，到头来还是老水术师告诉你的，碑跟叉本是一家，都是门。",
     "effects": [
      "damage 1d6"
     ]
    }
   },
   {
    "text": "先告诉家里，由本国政府拿着这件事去峰会",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "effects": [
     "flag spires_told",
     "flag karshyr_at_summit",
     "rep south +3",
     "world doors +1",
     {
      "if": "!flag.article_doors",
      "then": [
       "flag article_doors"
      ]
     }
    ],
    "result": [
     "部长听完，把燕尾服的扣子扣上了，当天下午，卡尔希尔就给阿兰蒂尔塔的秘书处拍了一封电报，电文是：“本国请以一方之名列席。门开在我们的海上。”",
     "{?flag.article_doors:门户条款上本来就给门口的人留着一席，这下那一席总算有了名字。|门户条款当初没通过，秘书处收到电报以后补了一款，写明门口的人有席位。}"
    ],
    "goto": "a4_14"
   },
   {
    "text": "把尖碑的用途写成公文，交给峰会的秘书处登公报",
    "effects": [
     "flag spires_told",
     "world press +1",
     "world doors +1",
     "rep south +1"
    ],
    "result": "公报登在泪落月十五日那一期的第三版上，标题叫“阳洲古迹之用途考”。北方联盟的副使当天就订了船票。",
    "goto": "a4_14"
   },
   {
    "text": "把这件事卖给出价最高的",
    "effects": [
     "flag spires_sold",
     "gold +2000",
     "rep charter +2",
     "world doors +2",
     "rep south -3",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -1"
      ]
     }
    ],
    "result": [
     "出价最高的是一个代持户头，这户头的名目你以前见过，写的是“阳洲南岸，一长条海岸”，两千金冠当天就到了账。",
     "你走出会堂的时候，那位穿燕尾服的部长就站在门口，他没有跟你握手。"
    ],
    "goto": "a4_14"
   },
   {
    "text": "谁也不说，只告诉行会你知道了",
    "effects": [
     "flag spires_kept",
     "rep south +1"
    ],
    "result": "老水术师点了点头，说行会也打算谁都不告诉，反正他们不说，已经不说了一千多年了。",
    "goto": "a4_14"
   }
  ]
 },
 "a4_14": {
  "id": "a4_14",
  "title": "尖碑",
  "art": "load_28",
  "loc": "卡尔希尔海岸 · 尖碑脚下",
  "text": [
   "尖碑立在一道海岬上，通体是黑石头，足有九十丈高，石面上走着一道道金线，看着跟星图一样，底座十二丈见方，有半截埋在沙里。行会的人领着你们，带上罐子，从北面的一道裂缝钻了进去。",
   "里头的台阶是修给长尾巴的人走的，一级宽，一级窄，往上爬了三十来丈，台阶忽然断了一截，断口齐得像刀切的，底下黑咕隆咚，看不见底。",
   "{?flag.jar_sold:罐子已经不在了。行会的人举着火把照了照，墙上的金线一点动静也没有。|别摇在罐子里每扇一下翅膀，墙上的金线就亮起一格，一直亮到断口那儿才停住。}",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回我爬这么高的台阶，还是在阿兰蒂尔塔的钟楼，1702 年的事了。那回呀，也是断了一截。"
   }
  ],
  "choices": [
   {
    "text": "扒着墙缝爬过断了的那一截",
    "check": {
     "skill": "athletics",
     "alt": [
      "acrobatics"
     ],
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "墙缝里的金线是凸出来的，正好能下脚，你爬了过去，从上头放下绳子，后头的人一个接一个都上来了。",
     "goto": "a4_14b"
    },
    "fail": {
     "text": "爬到一半，脚下一段金线崩了，你往下滑了一丈，拿膝盖和手肘死死抵住才刹住，皮都磨掉了一层。好在绳子最后还是放下来了。",
     "effects": [
      "hp -8"
     ],
     "goto": "a4_14b"
    }
   },
   {
    "text": "走检修道，只有小个子钻得进去",
    "tag": "小个子",
    "if": "is.small",
    "effects": [
     "flag a4x_duct",
     "damage 1d4"
    ],
    "result": "断口旁边有个一尺见方的口子，里头是一条斜着往上去的石槽，槽壁上刻满了小字，你在里头钻了一刻钟，膝盖都磨破了，才从上头钻出来，把绳子放了下去。槽里那些小字，你一路都在读。",
    "goto": "a4_14b"
   }
  ]
 },
 "a4_14b": {
  "id": "a4_14b",
  "title": "应声",
  "art": "load_28",
  "text": [
   "断口上面是一间四四方方的屋子，四面墙上全是纹路，有蜥蜴人的老字，还有一种比那更老的线，屋子当中立着一根石柱，柱顶空着一个凹槽，大小正好放得下一只果酱罐。",
   "{?flag.jar_sold:凹槽是空的。你就站在那儿，墙上一格也没亮。|你把罐子放进了凹槽。别摇扇了一下翅膀，四面墙上的线一齐亮了，嗡的一声，从脚底下一路往上走。}",
   {
    "if": "is.caster",
    "text": "墙里头走的是什么，你一摸就摸出来了，跟你念咒的时候手心里过的是同一种东西。"
   },
   {
    "if": "is.artificer",
    "text": "你看出来了，这原来是一台机器。不知是谁把说明书刻在了墙上，从左往右排过去，一共九页。"
   },
   {
    "if": "is.mechanim",
    "text": "你的芯核也跟着墙一块儿响了起来，响得倒不疼，只是你怎么也没法叫它停下。"
   },
   {
    "if": "is.mechanim && party.middlesday",
    "speaker": "礼拜三",
    "text": "（担心。）你那颗在响呢。（陈述。）我这颗也在响。（不确定。）你疼不疼啊？"
   },
   {
    "if": "party.middlesday && !is.mechanim",
    "speaker": "礼拜三",
    "text": "（陈述。）我的芯核在跟着墙响。（害怕。）这个响法，很像七号线那天夜里。"
   }
  ],
  "choices": [
   {
    "text": "读墙上的老纹",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 15,
     "party": true,
     "adv": "is.lizardfolk"
    },
    "ok": {
     "text": "最老的那一行说的是“出口”，底下还有一行是后来补刻的，字体要新一些，说的是“不要从这儿出去，回不来的人太多”。补刻这一行的人没有留下名字。",
     "effects": [
      "xp 300"
     ]
    },
    "fail": {
     "text": "你只认出了三个字，一个是门，一个是海，还有一个是数目，一千二百。可这一千二百说的是什么，你就不知道了。",
     "effects": [
      "rep south -1"
     ]
    }
   },
   {
    "text": "照墙上的说明，把它调到应声",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "item.spire_chip >= 1",
       "n": 1,
       "why": "你兜里那片石头是从这种碑上掉下来的"
      },
      {
       "if": "flag.a4x_duct",
       "n": 2,
       "why": "检修道里的小字你读过"
      },
      {
       "if": "is.artificer",
       "n": 1,
       "why": "你看懂了说明书"
      },
      {
       "if": "flag.jar_sold",
       "n": -4,
       "why": "没有罐子，墙上的线不亮"
      }
     ]
    },
    "ok": {
     "text": "你照着墙上第七页的图，把石柱转了半圈，屋顶上开出了一个圆口，可外头并不是天，是一片夜里的海，海面还亮着。这扇门，可不归布西拉尔管。",
     "effects": [
      "flag spire_tuned",
      "rep south +1"
     ]
    },
    "fail": {
     "text": "你转过了头，石柱咔的一声卡死了，墙上的线一格一格暗了下去。行会的人叹了口气，说这座碑上一回卡住，还是七百年前的事。",
     "effects": [
      "hp -6"
     ]
    }
   },
   {
    "text": "摸一摸墙，跟咒语比一比",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "effects": [
     "xp 200",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": [
     "墙是凉的，线却是热的，你念了一句最简单的照明咒，墙上的线居然跟着你的嘴亮了起来，比你手里那一点光还要足。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "它比我们在行啊。理论上，这事不该叫人高兴才对，可我还挺高兴的。"
     }
    ]
   },
   {
    "text": "数一数说明书有几页，抄下来",
    "tag": "奇械",
    "if": "is.artificer",
    "once": true,
    "effects": [
     "world press +1"
    ],
    "result": "一共九页。你抄了整整一夜，抄到第九页的最后一行，那儿刻的是一张图，画着一根柱子，一只罐子，还有一个人站在旁边，只是那个人的样子刻得很潦草。"
   },
   {
    "text": "下塔，往北去阿拉莫莱",
    "goto": "a4_15"
   }
  ]
 },
 "a4_15": {
  "id": "a4_15",
  "title": "一万盏灯",
  "art": "ev_sarhel_mengi_temple",
  "loc": "哈赫普拉 · 阿拉莫莱 · 阿赫特大宫",
  "text": [
   "阿赫特大宫盖得跟城里的要塞一般高，这儿每个礼拜开一回流水席，不管谁来都有肉吃，烤羊、椰枣管够，米饭是一大盆一大盆端上来的。大殿后头是库房，里头的兵器堆得比人还高，全是献给祂的。",
   "一到黄昏就点灯，整整一万盏，一盏也不少，照着大殿正当中一张空着的王座，阿赫特派的兵站在王座两边，盔甲擦得发亮。王座上落着薄薄一层灰，每天早上都有人来掸，可掸完了还是照样落。",
   "贾内比萨·奥希瑟德坐在主位的下首，穿着一件洛伦特式的军装。她客客气气地给你倒了一杯椰枣酒，然后问你，见过祂没有。",
   {
    "if": "is.lizardfolk",
    "text": "席上没有一个人给你递盘子，阿赫特派的祭司都拿你当卡塔拉什亚派来的探子，眼睛一直盯着你的手，直到贾内比萨亲手给你递了一回，才有人跟着递。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "说是一万盏，我数过了，是九千九百九十八盏。还有两盏在库房门口，那两盏算不算呢？我拿不准。"
   },
   {
    "if": "is.god",
    "text": "两个祭司端着一只铜盆走了过来，盆里盛着清水，他们要你把手搁进去，再问你一句只有祂才会答的话，萨拉哈德那一仗，到底算谁赢。"
   }
  ],
  "first": [
   "codex c_janebisa",
   "codex c_hakhepra"
  ],
  "choices": [
   {
    "text": "答：没见过",
    "effects": [
     "rep partner +1"
    ],
    "result": [
     {
      "speaker": "贾内比萨",
      "text": "人家也问过我是不是祂，我说我只是个凡人。可传说里祂也是这么答的呀，所以你答什么都一样。"
     },
     "她又给你添了酒，添酒的那只手稳得很。"
    ],
    "goto": "a4_16"
   },
   {
    "text": "答：见过，他穿着共和国的将军制服",
    "effects": [
     "flag partner_exposed",
     "flag partner_to_hakhepra",
     "rep partner -3",
     "rep south +2"
    ],
    "result": "大殿里先是一点声音也没有，接着一万盏灯底下所有的人同时嚷了起来，贾内比萨放下酒壶，叫人去备马，不过她嘴里叫的是“仪仗”。",
    "goto": "a4_16"
   },
   {
    "text": "反问她：大统帅想听哪一个答案",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 16,
     "mods": [
      {
       "if": "flag.a4x_jb_kin",
       "n": 2,
       "why": "她跟你说过两头不认的滋味"
      }
     ]
    },
    "ok": {
     "text": "她没有回答，只看了一眼那张王座，又看了一眼库房的门，看来她想听的并不是祂在哪儿，她想知道的是这个国家能不能不再等下去了。",
     "effects": [
      "flag a4x_jb_read"
     ]
    },
    "fail": {
     "text": "她笑了，说你们坎诺人问话，问来问去总要绕回自己身上。这话席上的祭司全听见了。",
     "effects": [
      "rep south -1"
     ]
    }
   },
   {
    "text": "只告诉她一个人：他活着，你们别等了",
    "if": "flag.a4x_jb_read",
    "effects": [
     "flag janebisa_told",
     "rep south +1"
    ],
    "result": [
     "你凑到她跟前说了。她听完点了一下头，就跟听完一份军报一样。",
     {
      "speaker": "贾内比萨",
      "text": "谢谢你。这句话我等了三十一年，到头来告诉我的却是个外人。不过嘛，这种事在我们的军事史上倒是常有的。"
     }
    ],
    "goto": "a4_16"
   },
   {
    "text": "把瓦伦盖尔特在鱼馆里那句话，原样说给大殿听",
    "tag": "灯",
    "if": "faction == 'lantern'",
    "effects": [
     "flag lamps_told",
     "flag partner_exposed",
     "world press +1",
     "rep south -1"
    ],
    "result": [
     "你站起来对着大殿说，洇河上那位讲过，他到现在还喘着气，兴许只是因为你们每天黄昏都给他点灯。",
     "当场就有人跑去吹灯，也有人跑去拦。拦的人比吹的人多，可灯还是灭了一小半。"
    ],
    "goto": "a4_16"
   },
   {
    "text": "自己伸手去够那盘烤羊",
    "tag": "蜥蜴人",
    "if": "is.lizardfolk",
    "once": true,
    "effects": [
     "rep south +1"
    ],
    "result": "你够着了，撕下一条羊腿，吃得吧唧吧唧直响。席上的祭司愣了一会儿，有一个忍不住笑出了声，卡塔拉什亚的探子可不会这么吃饭。"
   },
   {
    "text": "答她：两头都不认，滋味你也知道",
    "tag": "精灵血",
    "if": "is.elfblood",
    "once": true,
    "effects": [
     "flag a4x_jb_kin",
     "rep south +1"
    ],
    "result": [
     "她父亲是前任大统帅，母亲是洛伦特的半精灵公主。听你说完，她把那件洛伦特式军装的领口解开了一颗扣子。",
     {
      "speaker": "贾内比萨",
      "text": "在鲁本奈尔，同学管我叫“沙漠来的”，到了这儿，人家又管我叫“祂的新脸”。你那边呢？"
     }
    ]
   },
   {
    "text": "把手搁进铜盆，答：平手",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "var cult +1",
     "rep south +1"
    ],
    "result": "两个祭司对看了一眼，一个说这正是祂的答法，另一个说这是谁都会的答法。两个人一直吵到后半夜，铜盆里的水都凉了。"
   },
   {
    "text": "走上台阶，坐上那张空王座",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag throne_sat",
     "rep south +2",
     "rep partner -4",
     "var cult +2",
     {
      "if": "party.bura",
      "then": [
       "approval bura -1"
      ]
     }
    ],
    "result": [
     "王座比看上去要窄。你一坐下，灰就落了你一身，一万盏灯齐齐晃了一下，然后又接着亮。",
     "当天夜里，阿拉莫莱的灯就改了名字，祭司们分成了两派，一派点一盏，一派点两盏。哈赫普拉又有神了，只是已经不是原来那一位。",
     "贾内比萨一句话也没说，只叫书记把时辰记了下来。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "（铰链咔的一声。）那把椅子是人家给另一位留的，你倒坐上去了。我就站在这儿，眼看着你坐的。"
     }
    ],
    "goto": "a4_16"
   }
  ]
 },
 "a4_16": {
  "id": "a4_16",
  "title": "他没用飞的",
  "art": "ev_aakhet_dragon_smug",
  "loc": "阿拉莫莱城外 · 湖边的驿舍",
  "text": [
   "驿舍就在湖边，上下两层，楼下是一间饭堂，湖对岸是卡塔拉什亚的炮台，到了夜里，连炮口上的灯都看得见。德希尔德将军坐在饭堂最里头，穿着一身熨过的便服，他是辞了差事来的，先坐火车到海边，再换船，最后一段路骑的是骡子。",
   "骡子就拴在门口，正嚼着草。他没用飞的。",
   {
    "if": "flag.partner_refused",
    "text": "他一上来先把一叠退款单拍在桌上，整整六年的，一张也不少，拿一根铜丝穿着。"
   },
   {
    "if": "flag.lamps_told",
    "text": "他是一路数着灯进门的，城里的灯灭了一小半，他报了个数，精确到了个位，报完喝了一口凉水。"
   },
   {
    "if": "flag.throne_sat",
    "text": "他进门先看你坐得有没有个坐相，看完了自己才坐下。"
   },
   {
    "speaker": "德希尔德",
    "text": "那一仗是平手。报上爱怎么写我不管，我当时在场，写报的人可不在。坐吧，咱们来谈生意。"
   },
   "桌上摆着一份文件，写的是公司以自己的名义跟彼岸签约，签完再把那片海转让给大股东，底下签名的地方还空着，空了两行。",
   {
    "if": "flag.partner_knows_lie",
    "speaker": "德希尔德",
    "text": "你那几份报告里，哪几份掺了水，我可是一份一份都记着呢。我对钱是守信的，对报告可不。"
   },
   {
    "if": "flag.report3_named_bronze",
    "speaker": "德希尔德",
    "text": "鱼馆那条消息，我收到了。拍得可真够贵的啊，一个字一个铜板。"
   },
   {
    "if": "is.god",
    "speaker": "德希尔德",
    "text": "这是我第二回问你了。我叫人拜了三千年，也没成，你呢，只点了一下。你到底是怎么办到的？"
   }
  ],
  "first": [
   "item +partner_paper"
  ],
  "choices": [
   {
    "text": "看他的手，看他怕的是什么",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 17,
     "party": true
    },
    "ok": {
     "text": "他每说上三句话就要绕回自己身上，可一说到“还剩多久”就停住了，原来他不知道自己还剩多久，三千年来，这是他头一件不知道的事。",
     "effects": [
      "xp 500"
     ]
    },
    "fail": {
     "text": "他发觉你在看他，笑了笑，把袖口往下拽了拽，盖住了手背上一块青铜色的皮。",
     "effects": [
      "rep partner -1"
     ]
    }
   },
   {
    "text": "在他的文件上签字",
    "if": "!flag.partner_to_hakhepra",
    "effects": [
     "flag signed_partner_paper",
     "rep partner +2",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -1"
      ]
     }
    ],
    "result": [
     "你签了。他把文件上的墨迹吹干，叠成三折揣进怀里，还隔着衣服按了一下。",
     {
      "speaker": "德希尔德",
      "text": "好。这一单嘛，就记在平手那一栏里。"
     }
    ],
    "goto": "a4_17"
   },
   {
    "text": "在他留下的文件上签字",
    "if": "flag.partner_to_hakhepra",
    "effects": [
     "flag signed_partner_paper",
     "rep partner +2"
    ],
    "result": [
     "谈到一半，城里来接他的仪仗到了门口，鼓打得震天响。他是从后门走的，文件就留在了桌上。",
     "你签了。第二天一早有个骡夫来取文件，说是将军吩咐的。"
    ],
    "goto": "a4_17"
   },
   {
    "text": "不签，把文件推回去",
    "effects": [
     "rep partner -1",
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     }
    ],
    "result": "{?flag.partner_to_hakhepra:谈到一半，城里的仪仗到了门口。他从后门走了，文件也没拿。|他看了一眼文件，并没有收回去，只说：“那就留着吧，船上冷，可以拿来生火。”}",
    "goto": "a4_17"
   },
   {
    "text": "让人去湖对岸，给卡塔拉什亚的炮台报个信",
    "if": "!flag.partner_exposed",
    "effects": [
     "flag partner_exposed",
     "flag partner_to_guns",
     "rep partner -5",
     {
      "if": "party.narwen",
      "then": [
       "approval narwen -1"
      ]
     }
    ],
    "result": [
     "到了半夜，头一颗炮弹落在驿舍的后院里，把骡棚削掉了一半。他站起身来，掸了掸袖子上的土。",
     {
      "speaker": "德希尔德",
      "text": "那一仗也是平手。"
     },
     "他是走着离开的，牵着那匹骡子沿着湖边走，一次也没回头。"
    ],
    "goto": "a4_17"
   }
  ]
 },
 "a4_17": {
  "id": "a4_17",
  "title": "团务会：五成一",
  "art": "ev_multi_racial_merc",
  "loc": "湖边的驿舍 · 后半夜",
  "text": [
   "到了后半夜，饭堂里只剩下一盏灯，埃塔把股东名册摊在桌上，翻到第一页，上头写着“1810 年，五成一，代持”。她说她不投票，只说清楚哪几条路她肯走。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "他一回饷也没欠过，这可比共和国强。我讨厌的就是这句话偏偏是真的。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）他把我们都记成了数目。（愤怒。）我也给他记了一个，五成一。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "照章程，他是有这个权的，理论上。可章程是 1446 年写的呀，那会儿谁想得到，股东里头会有一头龙呢。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "活得久的人到底该怎么办呢？这件事我自己也没想明白。我问了一百六十八年了，还没有谁回答过我。"
   },
   {
    "speaker": "埃塔·斧砧",
    "text": "买断，我肯。开会把他投出去，我也肯。改名册、烧章程，我不肯，你们哪天动手，我哪天走。{?flag.signed_partner_paper:不过我得先问一句，那张纸还作不作数？|}"
   },
   {
    "if": "!flag.jar_sold",
    "speaker": "别摇",
    "text": "我也开个价吧。不管你们打算怎么办，办完了告诉我一声就行。他还欠着我一句问候呢，都欠了十四年了。"
   }
  ],
  "first": [
   "quest q_partner stage 5"
  ],
  "choices": [
   {
    "text": "用他自己那六年的钱，把他的股买断",
    "if": "flag.partner_escrow",
    "effects": [
     "flag partner_bought_out",
     "rep partner -1",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": [
     "埃塔把托管户头的账翻了出来，一分不差，正好够数，她在名册上他那一行划了一道，用的是红墨水。",
     {
      "speaker": "埃塔·斧砧",
      "text": "拿他的钱，买他的股。我的账本今天高兴得很哪。"
     }
    ],
    "goto": "a4_18"
   },
   {
    "text": "拿特许状那百分之二顶一部分账，买断他",
    "if": "flag.silcalas_share && !flag.partner_escrow",
    "req": "gold >= 1000",
    "reqText": "还差 1000 金冠",
    "cost": {
     "gold": 1000
    },
    "effects": [
     "flag partner_bought_out",
     "rep partner -1",
     "rep charter -1",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "埃塔把西尔卡拉斯那张百分之二的凭证折了价，另外又数出一千金冠，名册上那一行就这么用红墨水划掉了，西尔卡拉斯知道以后说，这笔生意他也赚了。",
    "goto": "a4_18"
   },
   {
    "text": "出钱买断他的股",
    "if": "!flag.partner_escrow && !flag.silcalas_share",
    "req": "gold >= 3000",
    "reqText": "要 3000 金冠",
    "cost": {
     "gold": 3000
    },
    "effects": [
     "flag partner_bought_out",
     "rep partner -1",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "一共三千金冠，埃塔数了两遍，然后拿红墨水把名册上那一行划掉了，她又把划掉的那一页撕下来叠好，说要寄给他，让他手里也有一页可翻。",
    "goto": "a4_18"
   },
   {
    "text": "引章程条文：他从没按着任何一条起过誓",
    "tag": "印",
    "if": "faction == 'seal' && partysize >= 2",
    "effects": [
     "flag partner_voted_out",
     "rep partner -2",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +1"
      ]
     }
    ],
    "result": [
     "1446 年的章程，第一条底下有一行小字：“入伙者须按其中一条起誓，秘书记于名后。”可他的名字后面是空的。",
     "在场的有三个人以上，于是照章开会，照章表决。埃塔记下了结果，把名册上他那一行划掉了。"
    ],
    "goto": "a4_18"
   },
   {
    "text": "照章程开会，把他投出去",
    "if": "faction != 'seal' && partysize >= 2",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.charmed_once",
       "n": -1,
       "why": "大咒的余劲"
      },
      {
       "if": "partysize >= 4",
       "n": 1,
       "why": "人多，票多"
      }
     ]
    },
    "ok": {
     "text": "你把章程第一条底下那行小字念了一遍，说的是入伙者须按一条起誓，可他从来没起过。大家举了手，过了，埃塔把名册上那一行划掉了，这回没用红墨水，用的是黑的。",
     "effects": [
      "flag partner_voted_out",
      "rep partner -2",
      {
       "if": "party.middlesday",
       "then": [
        "approval middlesday +1"
       ]
      },
      {
       "if": "party.bura",
       "then": [
        "approval bura +1"
       ]
      }
     ],
     "goto": "a4_18"
    },
    "fail": {
     "text": "举手的少了一个，会一直开到天亮，什么也没定下来，谁知第二天早上他的电报就到了，上头写着“听说你们开了会”。",
     "effects": [
      "rep partner -1"
     ],
     "goto": "a4_18"
    }
   },
   {
    "text": "趁埃塔睡了，改股东名册",
    "check": {
     "skill": "sleight",
     "dc": 17
    },
    "ok": {
     "text": "你把“五成一”改成了“一成五”，改得干干净净，可第二天早上埃塔翻开名册，看了很久很久，然后把自己那支笔收进了箱子。",
     "effects": [
      "flag register_forged",
      "flag etta_left",
      {
       "if": "party.narwen",
       "then": [
        "approval narwen -1"
       ]
      }
     ],
     "goto": "a4_18"
    },
    "fail": {
     "text": "原先的墨水是 1810 年的，跟新墨的颜色差着一层，埃塔一眼就看出来了，她什么也没说，只把自己那支笔收进了箱子。",
     "effects": [
      "flag etta_left"
     ],
     "goto": "a4_18"
    }
   },
   {
    "text": "把章程烧了，公司从头再来",
    "effects": [
     "flag charter_burned",
     "flag etta_left",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem -2"
      ]
     },
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     }
    ],
    "result": [
     "羊皮纸烧得慢，还一股焦毛味儿。章程一共三条，“先护人”那一条是最后才烧着的。",
     "埃塔一直看着它烧完，然后收拾好账本，下楼雇了一匹骡子。临走之前，她把铜牌摘下来搁在了桌上。"
    ],
    "goto": "a4_18"
   },
   {
    "text": "什么都不动，他还是五成一",
    "effects": [
     "rep partner +1",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "埃塔·斧砧",
      "text": "五成一，一笔钱也没欠过。可我就是不喜欢他。"
     },
     "她合上名册，在上头压了一块秤砣。"
    ],
    "goto": "a4_18"
   }
  ]
 },
 "a4_18": {
  "id": "a4_18",
  "title": "托拉普里亚卡",
  "art": "ev_far_and_wide",
  "loc": "西尔·伯肯之地 · 托拉普里亚卡港",
  "date": "1834年泪落月下旬",
  "shop": {
   "name": "码头边的船具店",
   "blurb": "这家店是佐赫比迪半身人开的，一进门就是一股桐油和椰子的味儿。",
   "stock": [
    "superior_healing_potion",
    "greater_healing_potion",
    "scroll_banishment",
    "scroll_mass_healing",
    "haste_potion",
    "gas_mask",
    "elven_longbow",
    "ebonsteel_greatsword"
   ]
  },
  "text": [
   "十四年前，有人从这片海里划了上来，手里举着一只罐子。码头还是当年那个码头，石墩都叫缆绳磨出了沟，只是如今多了一座布西拉尔的税关，红瓦的顶。上个月还有三条抽气船在这儿加过水，水桶上都烙着卡拉桑尼的印。",
   "领航员诺罗·数浪今年三十四岁了，皮肤晒成了栗子色，脚指头上套着铜环，她家的账上，到现在还欠着这片海七条船。",
   {
    "speaker": "诺罗",
    "text": "你们又来啦。上回我说这片海从来不往外吐东西，结果它后来就吐了。所以这回呀，我什么也不说了。"
   },
   "港外那片海平得发亮，连一只鸟也不往那边飞。",
   {
    "if": "flag.etta_left",
    "text": "埃塔已经走了。账本还留在桌上，最后一页只写了个日期，别的什么也没写。"
   },
   {
    "if": "!flag.jar_sold",
    "text": "越往南走，别摇就越亮，到了这儿，不用关灯也看得见她了。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "码头还是当年那个码头，你当年那条船也还在，只是船帮换过了木头，船上的老水术师还活着，正坐在船头补网呢。"
   }
  ],
  "choices": [
   {
    "text": "把“阿迪诺诺西人领航”写进草约",
    "tag": "印",
    "if": "faction == 'seal'",
    "once": true,
    "effects": [
     "flag pilots_paid",
     "rep south +1"
    ],
    "result": "你在草约的附页上添了一行，签上名字，又请诺罗按了个手印，她按得很用力，纸背上都透出了一个指头印。"
   },
   {
    "text": "给诺罗现付领航钱",
    "if": "faction != 'seal'",
    "once": true,
    "req": "gold >= 300",
    "reqText": "要 300 金冠",
    "cost": {
     "gold": 300
    },
    "effects": [
     "flag pilots_paid",
     "rep south +1"
    ],
    "result": [
     {
      "speaker": "诺罗",
      "text": "三百。我祖母那辈人领一条船，拿的才是一筐鱼呢。好吧，这钱我收下，反正鱼我自己有。"
     }
    ]
   },
   {
    "text": "去税关，看港务员的簿子",
    "once": true,
    "effects": [
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +1"
      ]
     },
     "world press +1"
    ],
    "result": [
     "簿子上一栏挨着一栏，船名、船主、出港、货物。港务员蘸好了墨，等着你开口。",
     "你告诉他，迟到者公司，出港，货物那一栏就填“人”。他照着写了，写完问你是几个人，你报了数，他也照着写了，倒没问是哪一种人。"
    ]
   },
   {
    "text": "跟布拉坐一会儿",
    "if": "party.bura",
    "once": true,
    "effects": [
     "approval bura +1"
    ],
    "result": [
     {
      "speaker": "布拉",
      "text": "（铰链咔的一声。）我今年五十，兽人能活到七十上下。这一趟回来我还能剩几年，你算算。算了，别算了，我自己算过，够发一回饷的。"
     }
    ]
   },
   {
    "text": "问礼拜三，出了海它打算记什么",
    "if": "party.middlesday",
    "once": true,
    "effects": [
     "approval middlesday +1"
    ],
    "result": [
     {
      "speaker": "礼拜三",
      "text": "（陈述。）我记日子。外头过了一年，船上才过几个礼拜，账会对不上的。（礼貌。）对不上的那几行，我来替你们记吧。"
     }
    ]
   },
   {
    "text": "给吉列姆倒一杯白水",
    "if": "party.guilhem",
    "once": true,
    "effects": [
     "approval guilhem +1"
    ],
    "result": [
     {
      "speaker": "吉列姆",
      "text": "梨林今年的收成，我是没看见哪。等回来的时候，理论上，梨树应该还在。"
     },
     "他把水喝完了，杯子却一直没放下。"
    ]
   },
   {
    "text": "陪娜尔雯在码头上站一会儿",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     {
      "speaker": "娜尔雯",
      "text": "上回我离开阿兰蒂尔塔这么远是什么时候？没有上回，从来没有过。这句话呀，我还是头一回说。"
     }
    ]
   },
   {
    "text": "拆一封从卡斯托纳斯寄来的信",
    "if": "flag.guilhem_stayed && !party.guilhem",
    "once": true,
    "effects": [
     "item +scroll_mass_healing"
    ],
    "result": [
     {
      "text": "伊萨已经学会第三道咒了。塔里冷。随信附上卷轴一张，理论上管用。吉列姆。",
      "cls": "letter"
     }
    ]
   },
   {
    "text": "拆一封盖着教廷火漆的信",
    "if": "flag.narwen_left && !party.narwen && !flag.narwen_custodian",
    "once": true,
    "effects": [
     "rep church +1"
    ],
    "result": [
     {
      "text": "今年是四声。我还在数。你们走的那天它要是响了，我会在信里告诉你们。娜尔雯。",
      "cls": "letter"
     }
    ]
   },
   {
    "text": "拆一封用公司信笺写的信",
    "if": "flag.m_left && !party.middlesday",
    "once": true,
    "effects": [
     "rep union +1"
    ],
    "result": [
     {
      "text": "（陈述。）代表团的席位保住了。（礼貌。）信笺还剩三十一张，我没有用完。（不确定。）等回来，我还给你们。礼拜三。",
      "cls": "letter"
     }
    ]
   },
   {
    "text": "把那篇论文交给船头的老水术师",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "rep south +1"
    ],
    "result": "论文的题目改过三回，最后一回改成了“一家有限责任的冒险公司，及其所欠”，老水术师翻到最后一页，问你结论在哪儿，你说等回来再写。"
   },
   {
    "text": "在码头的客栈睡一整夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "客栈里睡的是吊床，窗外就是那片海。你睡到半夜醒了一回，看见海上一点浪也没有。"
   },
   {
    "text": "坐公司自己的“迟到号”出海",
    "if": "flag.client_none",
    "effects": [
     "flag ship_own",
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     }
    ],
    "result": "“迟到号”是一条三桅船，船龄比埃塔的岁数小一点，船头那块铜牌是照着铸炉街的旧牌子拓下来的，旧牌子上的字磨掉了一半，新牌子也照样缺着那一半。",
    "goto": "a4_19"
   },
   {
    "text": "买下一条船，挂公司的牌子",
    "if": "!flag.client_none",
    "req": "gold >= 1000",
    "reqText": "要 1000 金冠",
    "cost": {
     "gold": 1000
    },
    "effects": [
     "flag ship_own",
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     }
    ],
    "result": "船是从一个布西拉尔船主手里买下来的，你给它改了个名字，叫“迟到号”，船主收了钱，问你们这是要去哪儿，你指了指那片平得发亮的海，他就把钱又数了一遍。",
    "goto": "a4_19"
   },
   {
    "text": "坐雇主的船",
    "if": "!flag.client_none",
    "effects": [
     "flag ship_client"
    ],
    "result": [
     {
      "if": "flag.client_republic",
      "text": "共和国派来了一艘炮舰，舰长是个年轻的上尉，一路上都在埋头写日记。"
     },
     {
      "if": "flag.client_lorent",
      "text": "洛伦特的护卫舰下了锚，帆上绣着白玫瑰。"
     },
     {
      "if": "flag.client_charter",
      "text": "卡拉桑尼派来的是抽气船“红利号”，船头那样东西还拿帆布蒙着。"
     },
     {
      "if": "flag.client_church && flag.salvation_sails",
      "text": "教廷的“得救号”靠了岸，甲板上码满了一箱箱蜡烛。"
     },
     {
      "if": "flag.client_church && !flag.salvation_sails",
      "text": "教廷的快船靠了岸，桅杆上挂着分形修会的旗子。"
     }
    ],
    "goto": "a4_19"
   },
   {
    "text": "坐卡尔希尔的船",
    "if": "flag.spires_told && rep.south >= 3",
    "effects": [
     "flag ship_karshyr",
     "rep south +1"
    ],
    "result": "卡尔希尔的船过了三天才到，船上有一半人是水术师，船长是当年游学团里的学生，见了你先鞠了一躬，鞠得十足的坎诺派头。",
    "goto": "a4_19"
   }
  ]
 },
 "a4_19": {
  "id": "a4_19",
  "title": "第四份报告",
  "loc": "托拉普里亚卡 · 电报房",
  "text": [
   "电报房就在税关隔壁，只有一间屋、一台机器，报务员是个半精灵，左耳朵上夹着一支铅笔。按公司的规矩，每做完一单，都得给合伙人拍一份报告。",
   "{?flag.partner_bought_out || flag.partner_voted_out || flag.register_forged || flag.charter_burned:名册上他那一行已经划掉了。不过规矩还在，收报的信箱也还在，银行并没有注销。|收报的信箱还是安本科斯特那家银行，上头没有人名。}可他本人眼下就在南岸，离这儿只有六天的路。",
   "这么一来，电报该拍给谁，倒成了个问题。",
   "这一单能往上写的事有这么几件，峰会上那几份草约，旗舰上的两个声音，贾赫港的格子，尖碑屋顶上开出来的那片海，还有湖边驿舍里的那份文件。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）要是写全，一共三百零九个字。（不确定。）这一回，他还读得出哪几个字是新的吗？"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔·斧砧",
    "text": "电报费由公司出，就算是说谎的电报，公司也照出。我呀，只管记数。"
   }
  ],
  "choices": [
   {
    "text": "另抄一份，寄给老连队的文书",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep republic +1"
    ],
    "result": "老连队的文书换了人，新来的是当年那位的徒弟。你在信封上写了“存档”两个字，他会往上递的，不过这一回你没拦着。"
   },
   {
    "text": "用密码本给使馆照抄一份",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a4x_embassy_done",
    "once": true,
    "effects": [
     "flag a4x_embassy_done",
     "var home_copies +1",
     "rep wand +1"
    ],
    "result": "密码本的书脊又拆了一回。使馆的回条上只有一个“悉”字，笔迹是女王的，口气{?flag.crown_ioriel:却不是|也是}。"
   },
   {
    "text": "给使馆写一份薄的：只报行程",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a4x_embassy_done",
    "once": true,
    "effects": [
     "flag a4x_embassy_done",
     "var embassy_gap +1"
    ],
    "result": "你只写了两行。回条隔了九天才到，也是两行，第二行问的是：“阁下此去，几时回来。”"
   },
   {
    "text": "另抄一份，寄给镇议会",
    "tag": "巨魔湾",
    "if": "origin == 'concord'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep charter +1"
    ],
    "result": "这封信镇议会要两个月才收得到，表决拆不拆又要两个礼拜。那四百金冠的账，你在信尾提了一句，利息照算。"
   },
   {
    "text": "托一个司炉，把报告带回去念给法德伦的工会听",
    "tag": "无主者",
    "if": "origin == 'unowned'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep union +1"
    ],
    "result": "这司炉是个地精，记性好，报告背了两遍就背下来了。他问你，“人头条款”那几个字，念的时候要不要念得大声一点。"
   },
   {
    "text": "把这一单写进游学团的考察报告",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep south +1"
    ],
    "result": "在“共和国如何议事”那一章里，你添了一节，题目叫“门口的人”。"
   },
   {
    "text": "写全，一个字不省",
    "cost": {
     "gold": 6
    },
    "effects": [
     "flag report4_full",
     "rep partner +1",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +1"
      ]
     }
    ],
    "result": [
     "报务员足足拍了半个钟头，拍到“湖边驿舍”那几个字，他抬起头看了你一眼。",
     "回电第二天就到了，只有五个字：“收悉，平手的。”"
    ],
    "goto": "a4_20"
   },
   {
    "text": "写，把尖碑和那份文件删掉",
    "cost": {
     "gold": 3
    },
    "effects": [
     "flag report4_edited"
    ],
    "result": "删完剩下来的，是一份很体面的峰会纪要。回电只有“收悉”两个字，比平常晚到了一天。",
    "goto": "a4_20"
   },
   {
    "text": "写一份太平无事的：在港候船",
    "effects": [
     "flag report4_lie",
     "rep partner -1",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday -1"
      ]
     }
    ],
    "check": {
     "skill": "deception",
     "dc": 16,
     "mods": [
      {
       "if": "faction == 'seal'",
       "n": -1,
       "why": "你不惯在纸上撒谎"
      },
      {
       "if": "flag.partner_knows_lie",
       "n": -2,
       "why": "他抓到过你一回"
      }
     ]
    },
    "ok": {
     "text": "报告一共四个字，报务员说这是他拍过的最短的一份。回电也只有两个字，“收悉”。",
     "goto": "a4_20"
    },
    "fail": {
     "text": [
      "报告一共四个字。回电当天下午就到了，用的不是埃塔拟的那种格式。",
      {
       "text": "在港候船，看见湖了吗。",
       "cls": "letter"
      }
     ],
     "effects": [
      "flag partner_knows_lie"
     ],
     "goto": "a4_20"
    }
   },
   {
    "text": "不拍了，把报告念给公司的人听",
    "effects": [
     "flag report4_to_company",
     "rep partner -1",
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     },
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +1"
      ]
     },
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     },
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     }
    ],
    "result": [
     "你是站在电报房门口念的，念了足有半个钟头。报务员也跟着听了，没收你的钱。",
     "{?flag.etta_left:没有人把它订进账本。念完以后，你把稿子折起来，揣进了怀里。|埃塔把它订进了账本，还在页眉上写了“第四份，念的”几个字。}"
    ],
    "goto": "a4_20"
   }
  ]
 },
 "a4_20": {
  "id": "a4_20",
  "title": "数流星",
  "art": "ev_big_star_in_sky",
  "loc": "托拉普里亚卡 · 甲板",
  "date": "1834年泪落月最后一夜",
  "text": [
   "泪落月的最后一夜是个晴天，甲板上铺了油布，所有的人都上来了，照老规矩，这个月要上屋顶数流星，没有屋顶，就上甲板。",
   {
    "if": "world.tears >= 6",
    "text": "数到后半夜，本子上记了二百来颗。"
   },
   {
    "if": "world.tears == 5",
    "text": "数到后半夜，本子上记了一百五十出头。"
   },
   {
    "if": "world.tears == 4",
    "text": "数到后半夜，本子上记了九十几颗。"
   },
   {
    "if": "world.tears == 3",
    "text": "数到后半夜，本子上记了五十颗上下。"
   },
   {
    "if": "world.tears == 2",
    "text": "数到后半夜，本子上记了二十几颗。"
   },
   {
    "if": "world.tears == 1",
    "text": "数到后半夜，本子上记的数一只手就数得过来。"
   },
   {
    "if": "world.tears <= 0",
    "text": "数到后半夜，本子上记的数是零。"
   },
   "1809 年的历书上，这一栏印的是四个字，“数不过来”。诺罗是拿她自己的话数的，佐赫比迪人的数，一个数只有一个音节。数完她说，她祖母那辈人是不数的，因为太多了。",
   {
    "if": "!flag.jar_sold",
    "text": "别摇坐在桅杆顶上，比哪一颗流星都亮。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "十一个月的饷，我到现在还是拿它来比。流星倒比它少了。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）我数完了。（不确定。）我数出来的数，跟诺罗的对不上。（礼貌。）我把她的记上吧。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "下一回要等到 1921 年了，理论上。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "1666 年那一夜，我数到了四百一十二颗，托丽丝说够用了。今年这个数呢，她是不会说够用的。"
   },
   {
    "if": "is.god",
    "text": "再也没人来问你，能不能让它多落几颗了。他们都当你办得到。"
   },
   "再过两个月，到卡斯坦月一日，就要出海了。"
  ],
  "first": [
   "level 10"
  ],
  "choices": [
   {
    "text": "跟诺罗学那几个数",
    "effects": [
     "rep south +1"
    ],
    "result": "一念作“啊”，二念作“咿”，三是咂一下嘴。学到十的时候，诺罗说十以上就不用数了，看一眼就知道是多还是少。",
    "goto": "f_01"
   },
   {
    "text": "把数报给记历书的人",
    "effects": [
     "world press +1"
    ],
    "result": "记历书的是税关的书记，他在本子上写下那个数，在旁边画了一道，接着又画了一道，说明年他还得接着画。",
    "goto": "f_01"
   },
   {
    "text": "什么也不说，数到天亮",
    "effects": [
     "rest short"
    ],
    "result": "到了后半夜，一颗也没有了。你一直数到天边发白，海还是平的，平得发亮。",
    "goto": "f_01"
   }
  ]
 }
};
