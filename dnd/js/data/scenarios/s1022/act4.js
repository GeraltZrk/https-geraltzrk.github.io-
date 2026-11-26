// s1022 / act4.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a4_01": {
  "id": "a4_01",
  "title": "彩城关门",
  "chapter": "第四幕 · 玫瑰与月的婚礼",
  "loc": "小人国 · 维斯沃尔城外",
  "date": "1040年泰苏伦月",
  "text": [
   "你们赶到小人国的维斯沃尔时，城门关得严严实实。城墙里头冒上来七八股烟，红的蓝的黄的都有，原来是染坊的大缸还烧着，风一转过来，满鼻子都是碱水和煮布的味儿。阿德蕾西娅数了数城头上晾着的布，一共四十二匹，全是白的，每匹都有一人来长，她说渡鸦山的裹尸布也是这个尺寸。",
   "城外扎着两座营，上游那座是洛伦特的，帐子一色的玫瑰色，下游那座是加韦德的，帐子都是铁灰的。两边的使者都说自己是来“保护”小人国的，可两座营中间只隔着一块萝卜地，偏偏谁也不朝对面看一眼。",
   "过了一会儿，城头上探出个卷毛脑袋，接着又放下来一只篮子，吊篮子的绳上每隔一尺就打着一个结。篮子里搁着半张饼，还烫着呢，另外半张留在城头上，那人正拿在手里嚼。",
   {
    "speaker": "芬尼克",
    "text": "我就是国王。开门的事嘛，得问议会，可议会都三年没出过声啦。你先把饼吃了吧，我们这儿的规矩，一张桌上分过饼的人就不许动手了，你不许，我也不许，这就叫分饼礼。"
   },
   "他今年三十九岁，当年从试炼山上活着下来的一共六个人，里头就有他。从城头到篮子的这一段墙，在他嘴里就算是“同桌”了。",
   {
    "if": "is.halfling",
    "text": "守门的半身人隔着门缝往外瞧，头一眼瞧的是你的脚。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "不就一道墙嘛！我飞过去把门闩一拔，也就喝一口酒的工夫。"
   },
   {
    "if": "party.liv",
    "text": "阿德蕾西娅说城头上架着十一张弩，她已经数过了。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，上游那座营里有三面旗是恩特本的。他们大老远跑这一趟，总不会是为了半身人吧。"
   },
   {
    "if": "is.god",
    "text": "城头上的半身人盯着你看了一会儿，回头朝里面喊，说那个不用吃饭的来了，饼还放不放，里头有人答他：“放，规矩就是规矩。”"
   }
  ],
  "first": [
   "codex viswall",
   "codex finnic",
   "codex halflings"
  ],
  "choices": [
   {
    "text": "吃了饼，隔着城墙同他讲理",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "item.witness_seal >= 1",
       "n": 2,
       "why": "监誓印"
      },
      {
       "if": "flag.doses_children",
       "n": 1,
       "why": "渡鸦山那车孩子的事传到了这里"
      }
     ]
    },
    "ok": {
     "text": "等你说到“我谁也不替，也不来保护你们”，他在城头上笑出了声，没多久城门就开了一条缝，刚够一个人侧着身子挤进去。",
     "goto": "a4_02"
    },
    "fail": {
     "text": "他听完就把篮子收了上去，说话倒是好话，可上游下游那两位讲的也都是好话。你们最后是从染坊的排水口爬进城的，出来的时候从头到脚染了一身靛蓝。",
     "effects": [
      "flag a4x_blue"
     ],
     "goto": "a4_02"
    }
   },
   {
    "text": "把脚伸到门缝前头",
    "tag": "半身人",
    "if": "is.halfling",
    "effects": [
     "item +halfling_pie"
    ],
    "result": "守门的只看了一眼你脚背上的卷毛，门闩就哗啦一声拉开了，他嘴里说着“自家人怎么不早说呀”，一边往你手里塞了一块派，拿油纸包着，还烫手。",
    "goto": "a4_02"
   },
   {
    "text": "让卡斯坦带着酒飞上城头",
    "if": "party.liv",
    "cost": {
     "gold": 20
    },
    "effects": [
     "approval liv +1"
    ],
    "result": "她一飞起来，十一张弩就跟着她转了半圈，她落在垛口上，自己先喝了一口，才把酒囊递给离得最近的那个弩手。过了半个钟头城门开了，来开门的人走路都有点斜，这顿酒钱自然是记在你账上的。",
    "goto": "a4_02"
   }
  ]
 },
 "a4_02": {
  "id": "a4_02",
  "title": "芬尼克的那块石头",
  "loc": "维斯沃尔 · 议会厅",
  "text": [
   "议会厅在北岸，大门正对着河那边的王宫，厅里四十张矮椅子坐得满满当当，却没有一个人出声。有人从门槛底下塞进来一张纸条，书记官捡起来举给全场看，上头写的是*提议修东门的闸*，四十只手举起来又放下去，这件事就算议过了。",
   "芬尼克坐在最上头，两只脚搭在桌沿上，脚背上的毛梳成了一个个小卷。他从坎肩兜里摸出一块灰石头搁在桌上，只有指甲盖那么大。",
   {
    "speaker": "芬尼克",
    "text": "这是我下山那天顺手拿的，揣惯了也就一直揣着。后来我才发现，这石头搁在哪间屋里，谁在那间屋里许了愿，就都得兑现。前年有位议员说，他要是撒了谎，就把自己的帽子吃了。"
   },
   "墙上挂着一只玻璃匣子，里头摆着半顶毡帽，帽檐上还留着牙印。",
   {
    "speaker": "芬尼克",
    "text": "城外那两位天天隔着墙喊，说要保护我。你是监誓人，看人发誓是你的本行嘛，要不要把他们请进这间屋里来，叫他们把话再说一遍？"
   },
   {
    "if": "flag.a4x_blue",
    "text": "你们一行人从头到脚都是蓝的，议员们看一眼，低下头，忍不住又看一眼。可是没有一个人笑，在这间屋里，连笑一笑都得先掂量掂量。"
   },
   {
    "if": "flag.god_half_sentence",
    "text": "芬尼克盯着你看了老半天，问了一句“你也是？”，又拿指甲弹了弹那块石头。石头到了你旁边，就不响了。"
   },
   {
    "if": "is.god",
    "text": "他把脚从桌上放了下来，头一回坐得端端正正。"
   },
   {
    "if": "is.god",
    "speaker": "芬尼克",
    "text": "像您这样的，许一个诺能顶他们十个。“维斯沃尔永不陷落”，您看这句话长不长呀？"
   }
  ],
  "choices": [
   {
    "text": "把话挑明，请两国使者进屋立誓",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.a4x_blue",
       "n": -1,
       "why": "一张蓝脸"
      },
      {
       "if": "rep.rose >= 3",
       "n": 2,
       "why": "太后的人信你"
      }
     ]
    },
    "ok": {
     "text": "洛伦特的使者一进门，先说了句客套话，说洛伦特从来没打算动小人国一根草，话刚出口，他的脸就白了。加韦德那位干脆一个字也不肯说，芬尼克递给他一块饼，问他是不是也是这个意思，他点了点头。在这间屋里，点头也是算数的。",
     "effects": [
      "flag viswall_safe",
      "rep rose -1"
     ],
     "goto": "a4_02b"
    },
    "fail": {
     "text": "两位使者走到门槛外头就站住了，洛伦特那位看了看墙上的半顶帽子，说他站在这儿也听得见，加韦德那位更是连台阶都没上。",
     "goto": "a4_02b"
    }
   },
   {
    "text": "只说国王请两位进来喝茶",
    "if": "!flag.god_half_sentence",
    "check": {
     "skill": "deception",
     "dc": 15,
     "mods": [
      {
       "if": "flag.a4x_blue",
       "n": -1,
       "why": "一张蓝脸"
      }
     ]
    },
    "ok": {
     "text": "茶倒是真的茶。洛伦特的使者端起杯子，刚说了句“洛伦特与小人国世代交好，绝无二心”，杯子就停在了半空里，加韦德那位站起来要走，可芬尼克已经把饼塞到他手里了。",
     "effects": [
      "flag viswall_safe",
      "rep rose -1"
     ],
     "goto": "a4_02b"
    },
    "fail": {
     "text": "“喝茶？”洛伦特的使者往屋里瞧了一眼，瞧见了那半顶帽子，便说：“替我谢过国王吧，我这个人一喝茶就爱说话。”结果两位都没进门，第二天洛伦特的营里就传开了一句话，说监誓人请人喝茶，茶里泡着誓。",
     "effects": [
      "rep rose -1"
     ],
     "goto": "a4_02b"
    }
   },
   {
    "text": "应他的请：许维斯沃尔永不陷落",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_promise_viswall",
     "flag viswall_safe",
     "rep rose -2",
     "var god_acts +1"
    ],
    "result": [
     "你照着说了，石头没有响，它也用不着响。芬尼克掰了半张饼递给你，说：“往后小人国一有事，您就得回来一趟，我们管这个叫分饼礼的加长版。”当天夜里，城外两座营各拔走了一半帐子，洛伦特的使者临走也没来辞行，只托人捎了一句话，说太后会记得是谁替小人国作的保。",
     {
      "if": "party.liv",
      "speaker": "卡斯坦",
      "text": "我在这屋里许上一句，石头能记我一辈子，你许一句呢，它连响都懒得响一下。这也太不公道了吧！"
     },
     {
      "if": "party.vezina",
      "text": "薇齐娜把这句话记在了本子上，记完又把本子往离你远的那头挪了挪。"
     }
    ],
    "goto": "a4_02b"
   },
   {
    "text": "不请使者，直接谈这块石头",
    "goto": "a4_02b"
   }
  ]
 },
 "a4_02b": {
  "id": "a4_02b",
  "title": "石头归谁",
  "text": [
   "这里散会是没人喊的，议员们看着日头差不多了就自己起身走，一直走到门外才敢咳嗽一声。屋里只剩下你们和芬尼克，他把石头朝你这边推了一寸，手指头却还按在上面。",
   {
    "speaker": "芬尼克",
    "text": "说实在的，我巴不得你把它拿走。都三年了，我连一句“明天请你吃饭”都不敢说出口。可议会舍不得呀，有它在，城外那两位要进这道门就得先掂量掂量。"
   },
   {
    "if": "flag.viswall_safe",
    "text": "如今那两位已经掂量过了，话也撂在这间屋里了，他这才把手指头抬了起来。"
   },
   {
    "if": "!flag.viswall_safe",
    "text": "他的手指头一直按着没抬。"
   },
   "北要塞的石匠说过，誓石上缺了一个角，是早年间就缺了的。看大小，正好对得上。",
   {
    "if": "is.caster",
    "text": "你把手搁在石头边上，觉出里头有一股细细的流，同试炼山誓石裂缝里的那一股是一路的，看来它还认得自己是从哪儿掉下来的。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "那我要是在这屋里说一句“我要当五十四世”，算不算数啊？"
   },
   {
    "if": "party.liv",
    "speaker": "芬尼克",
    "text": "算哪。不过要是办不到，你可得先想好拿什么赔，上一位就赔了半顶帽子。"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "我的本子也跟着进了这间屋，里头记着你许过的每一句话，一共四十七句。要是它们全都得算数（我说的是要是），那你最好现在就走。"
   }
  ],
  "first": [
   "quest mountain stage 3"
  ],
  "choices": [
   {
    "text": "开口讨这块石头，说清它该回哪儿去",
    "if": "flag.viswall_safe",
    "effects": [
     "flag finnic_chip",
     "item +oathstone_chip"
    ],
    "result": "他把石头放进你手心里，又替你把手指头合上，说：“拿稳了，揣着它的时候，你许的诺也都得兑现，到时候可别怪我没说。”说完他往椅背上一靠，大声来了一句“明天我请全城吃饭”，话音没落，自己先笑了。",
    "goto": "a4_03"
   },
   {
    "text": "开口讨这块石头，说清它该回哪儿去",
    "if": "!flag.viswall_safe",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.a4x_blue",
       "n": -1,
       "why": "一张蓝脸"
      },
      {
       "if": "is.halfling",
       "n": 2,
       "why": "自家人"
      }
     ]
    },
    "ok": {
     "text": "你讲了誓石上的那个缺口，又讲了那半句话，书记官出去转了一圈，带回来四十张纸条，其中三十一张写着“给”。芬尼克把石头放进你手心里，说：“揣着它的时候，你许的诺都得兑现，可别怪我没说。”",
     "effects": [
      "flag finnic_chip",
      "item +oathstone_chip"
     ],
     "goto": "a4_03"
    },
    "fail": {
     "text": "门外头四十个人一齐开了口，三年没用过的嗓子全是哑的，喊的是“不给”。芬尼克耸了耸肩，等人都走光了才把石头塞给你，只是要你留下一百金冠修东门的闸，省得议会说国王白送。",
     "effects": [
      "gold -100",
      "flag finnic_chip",
      "item +oathstone_chip"
     ],
     "goto": "a4_03"
    }
   },
   {
    "text": "趁他转身倒茶，顺手拿走",
    "tag": "游荡者",
    "if": "class == 'rogue' || is.criminal",
    "check": {
     "skill": "sleight",
     "dc": 17,
     "mods": [
      {
       "if": "flag.a4x_blue",
       "n": -1,
       "why": "手指头是蓝的"
      }
     ]
    },
    "ok": {
     "text": "石头进了你的袖子，桌上连灰印都没动一下，谁知第二天有人往你铺盖里塞了张纸条，上头写着：“手艺不错，当年我拿它的时候，比你多碰倒了一只杯子。芬。”",
     "effects": [
      "flag finnic_chip",
      "item +oathstone_chip",
      "xp 150"
     ],
     "goto": "a4_03"
    },
    "fail": {
     "text": "你的手才碰到桌面，他已经把石头递到你手里了，茶倒是一滴没洒。“下回别费这么大劲，开口要就行了。”",
     "effects": [
      "flag finnic_chip",
      "item +oathstone_chip"
     ],
     "goto": "a4_03"
    }
   },
   {
    "text": "把石头留给他",
    "effects": [
     "item +halfling_pie 2"
    ],
    "result": "他把石头揣回坎肩兜里，还拍了两下，说：“那我就接着当我的哑巴国王吧。”他叫人给你们包了两块派，包的时候一句客气话也没敢说。",
    "goto": "a4_03"
   }
  ]
 },
 "a4_03": {
  "id": "a4_03",
  "title": "去洛伦泰内的路",
  "loc": "伦瑟诺 · 去洛伦泰内的大路",
  "date": "1040年真霜月",
  "text": [
   "洛伦特的请柬追着你们改了三回日子，先是为瘟疫改了一回，后来新娘的嫁妆船停在港外验疫，又改了一回。等你们真动身，已经是真霜月了。",
   "大路上两股人挤着一条道走，去赴婚礼的坐着车，车顶上捆着酒桶和帽盒，往南逃难的靠两条腿，背上捆着锅。车夫嫌走路的挡了道，走路的偏不肯让。",
   "路边停着一辆大车，上头盖着帆布，拉车的牲口已经没有了，车主蹲在轮子边上，手里还攥着鞭子。帆布底下有东西在动，动得很轻。",
   {
    "if": "party.valeran",
    "text": "进了恩特本的地界，有人朝瓦勒兰爵士行礼，可每隔一个村子，也总有人朝他脚边吐唾沫。行礼的他点点头，吐唾沫的他也照样点点头。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，恩特本的人要是在婚礼上闹起来，您打算站在哪一边？我问这个，是想知道到时候我该站在您的哪一侧。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "我在上头转了一圈，往南四十里路上全是这样的车。哎哟，翅膀根疼死了，今天可别再叫我飞啦。"
   },
   {
    "if": "party.barry",
    "text": "巴里的篮子从维斯沃尔出来的时候还是满的，可他一路上见着一个背锅的就递一块乳酪，走到这儿，篮子里只剩一块垫底的布了。"
   }
  ],
  "first": [
   {
    "if": "party.valeran",
    "then": [
     "quest valeran_oath stage 2"
    ]
   }
  ],
  "next": "a4_04",
  "choices": [
   {
    "text": "掀开帆布，给车上的人分拣",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.plague_samples",
       "n": 1,
       "why": "白旗船上见过这病"
      },
      {
       "if": "is.divine",
       "n": 1,
       "why": "你常给人送终"
      }
     ]
    },
    "ok": {
     "text": "帆布底下躺着十一个人，有九个已经发白了，你把没发白的两个抱下了车，一个是六岁的丫头，另一个是她一直搂在怀里的弟弟。车主没有道谢，只把赶车的鞭子递给了你，自己又坐回轮子边上去了。",
     "effects": [
      "approval valeran +1",
      "approval barry +1"
     ]
    },
    "fail": {
     "text": "你才掀开帆布的一个角，鞭梢就抽在了你手背上，车主嚷着“又来一个抢尸首的”，挡在车前头不让你靠近，路上走着的人也都停下来看你。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "离开大路，抄田埂的近道",
    "once": true,
    "check": {
     "skill": "survival",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "田埂走到头是一条干了的水渠，顺着渠走，能少绕两座验疫的桥，这一来，你们比赴宴的车队早了两天看见洛伦泰内的红墙。",
     "effects": [
      "xp 120"
     ]
    },
    "fail": {
     "text": "田埂走到头是一条水渠，偏偏渠里的水还没干，骡子一脚陷下去，泥一直没到肚子。你们折腾了半天，又花了十个金冠，才请种萝卜的把它拽了出来。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "在路边的空谷仓歇半天",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "谷仓的主人已经往南走了，门没上锁，灶上还扣着一只锅。阿德蕾西娅把锅刷干净了，又照原样扣了回去。"
   },
   {
    "text": "答他：谁先掀桌子，你就站在谁对面",
    "if": "party.valeran",
    "effects": [
     "flag a4x_ans_fair",
     "approval valeran +1"
    ],
    "result": "他念了一声“公道”，把这两个字掂量了一下，才接着说：“恕我直言，公道话是最难站的，到时候我倒要看看您怎么站。”",
    "goto": "a4_04"
   },
   {
    "text": "答他：你站太后和新人那一边",
    "if": "party.valeran",
    "effects": [
     "flag a4x_ans_rose",
     "approval valeran -1"
    ],
    "result": "他点了点头，把手套戴上了，说：“我回去会照实禀报。”过了一会儿他又添了一句：“至于禀报给谁，我还得想想。”",
    "goto": "a4_04"
   },
   {
    "text": "反问他：你自己站哪边",
    "if": "party.valeran",
    "effects": [
     "flag a4x_ans_ask"
    ],
    "result": "他一声不响地走了二十步，最后才开口：“恕我直言，我要是答得出来，也就不来问您了。”",
    "goto": "a4_04"
   },
   {
    "text": "继续赶路",
    "if": "!party.valeran",
    "goto": "a4_04"
   }
  ]
 },
 "a4_04": {
  "id": "a4_04",
  "title": "洛伦泰内",
  "art": "ev_lilac_wars",
  "loc": "洛伦特 · 洛伦泰内",
  "text": [
   "洛伦泰内的红墙上挂满了白玫瑰，墙根底下每隔五十步就烧着一盆醋，进城的人得排成两队，一队验请柬，一队验指甲。血酒河上新搭了三座桥，全是为了这场婚礼修的。",
   "太后伊奥瑞尔今年一百零二岁了，脸还是十九年前的那张脸，船上的长老们到今年总算改了口，不再管她叫孩子了。新郎雷安二十岁，书读了不少，可从来没自己拿过一回主意，新娘奥坎娜才十七，倒比她丈夫敢说话。",
   "离行礼还有六天。光是一个早上，客房的门缝底下就塞进来九张帖子，三张请吃饭，两张请喝酒，还有四张没署名。",
   {
    "if": "is.immortal",
    "text": "全城的人见了你都躲着眼神，只有太后不躲。她的样子一点没变，你也一样。"
   },
   {
    "if": "is.immortal",
    "speaker": "伊奥瑞尔",
    "text": "长老们总算是不叫我孩子了。你呢，你打算等到哪一年呀？"
   },
   {
    "if": "is.longlived && is.mortal",
    "text": "城门口的老卫兵盯着你看了老半天，问你是不是十九年前那位监誓人的{m:儿子|f:女儿}。"
   },
   {
    "if": "!is.longlived && is.mortal",
    "text": "城门口的台阶比十九年前高了，至少你的膝盖是这么说的。"
   },
   {
    "if": "flag.god_half_sentence",
    "text": "你走到哪儿，哪儿的店家报的就是实价，媒人讲的也是实话，城东有两桩亲事就这么当场黄了。"
   },
   {
    "if": "origin == 'dameria'",
    "text": "马里昂隔着半条街就喊起了你的名字，他都快四十了，嗓门还是切肉刀那年的嗓门，这回带来的贺礼足足装了六条船。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，城门上那些白玫瑰是从恩特本的园子里剪来的，一共拉了十一车，一个子儿也没给。"
   }
  ],
  "first": [
   "codex ioriel",
   "codex marion"
  ],
  "shop": {
   "name": "王城的铺子",
   "blurb": "玫瑰钢是粉的，价钱可是红的，掌柜的说婚礼这个月概不讲价。",
   "stock": [
    "rosemetal_rapier",
    "rose_knight_lance",
    "rosemetal_breastplate",
    "rose_knight_halfplate",
    "elven_longbow",
    "superior_healing_potion",
    "greater_healing_potion",
    "heroism_draught",
    "rubenaire_red"
   ]
  },
  "choices": [
   {
    "text": "去见太后，回她十九年前交代的那件事",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "once": true,
    "goto": "a4_04b"
   },
   {
    "text": "去见新郎和新娘",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "雷安给你背了一段《月歌者法典》里讲初盟的话，背得一字不差，奥坎娜等他背完了才开口：“监誓人，这门亲事，有谁问过我们两个吗？”确实没人问过，不过两个人倒也都不反对，他们的手一直握着没松开，你是从这上头看出来的。",
     "effects": [
      "rep moon +1"
     ]
    },
    "fail": {
     "text": "雷安同你谈了半个钟头洛伦特的桥税，等你出来，只弄明白了一件事，过血酒河是一个人三个铜子。奥坎娜起先还看了你一会儿，后来也就不看了。"
    }
   },
   {
    "text": "提一桶酒，去谢管水闸的红宝石矮人",
    "if": "!is.dwarf && !flag.dwarves_thanked",
    "once": true,
    "cost": {
     "gold": 20
    },
    "effects": [
     "flag dwarves_thanked"
    ],
    "result": "红宝石矮人替王室管了几百年水闸，如今城里只剩下这一家，一共五口，最小的也八十岁了。老闸官拍了拍酒桶，却没有打开，只说：“上回有人来道谢，还是鲁本二世，那是 1019 年的事了，你是第二个。”他把你的名字记进了闸门的检修簿，就排在“换铰链”后面。"
   },
   {
    "text": "用矮人话同管水闸的那一家打招呼",
    "tag": "矮人",
    "if": "is.dwarf && !flag.dwarves_thanked",
    "once": true,
    "effects": [
     "flag dwarves_thanked"
    ],
    "result": [
     "你隔着闸房的门，用矮人话问了一句闸好不好使，里头静了一会儿，接着一家五口全都出来了。老闸官说，城里上回有人同他讲矮人话还是 1022 年，讲的是“装箱”两个字。",
     {
      "if": "is.ruby_dwarf",
      "text": "他听出你的口音是红宝石领的，一把将你拉进闸房，从柜子底下翻出一本族谱，非要查清楚你们俩隔了几代不可。一直查到第十一代，总算对上了，他当场就把绞盘的钥匙分了一把给你。"
     }
    ]
   },
   {
    "text": "穿过广场，去同罗恩·阿瑟利斯说话",
    "once": true,
    "effects": [
     "flag a4x_met_roen"
    ],
    "result": [
     "恩特本的主人头发已经全白了，人还是站得像一杆枪。",
     {
      "speaker": "罗恩",
      "text": "监誓人阁下气色真好啊。您这些年盖过的印，我书房里收着一整套，装订得还很讲究呢。"
     },
     "说着他朝王宫那边抬了抬下巴。",
     {
      "speaker": "罗恩",
      "text": "那上头坐着一位尖耳朵的国王，要娶的是一位尖耳朵的王后，替他们两个当家的那一位，耳朵最尖。您管这个叫洛伦特，我可不敢这么叫。"
     }
    ]
   },
   {
    "text": "陪卡斯坦去金匠铺试冠",
    "if": "party.liv",
    "once": true,
    "cost": {
     "gold": 10
    },
    "effects": [
     "approval liv +1"
    ],
    "result": "金匠铺里的冠都是照着人的脑袋打的，她试到第七顶，冠卡在羽冠上怎么也摘不下来，最后赔了十个金冠的修理钱。她对着铜镜说：“不合适，合适的那一顶在山上呢。”"
   },
   {
    "text": "去后厨看巴里掌勺",
    "if": "party.barry",
    "once": true,
    "effects": [
     "approval barry +1",
     "item +rubenaire_red 2"
    ],
    "result": "三百人的席面，十二口灶，巴里站在一只倒扣的木桶上指挥，嘴里还喊着：“对不住，对不住，鹅还得再烤一刻钟！”他往你嘴里塞了一勺酱汁，又往你怀里塞了两瓶红酒，说是留着路上喝。"
   },
   {
    "text": "在王宫的客房睡一觉",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "床是鹅绒的，枕头里还缝了干玫瑰。你一觉睡到第二天晌午，梦里老有人在数东西，醒过来才发现是阿德蕾西娅守在门外，正数着走过去的侍从。"
   },
   {
    "text": "去白玫瑰庭：克雷格的案子开审了",
    "goto": "a4_05"
   }
  ]
 },
 "a4_04b": {
  "id": "a4_04b",
  "title": "太后的问话",
  "loc": "洛伦泰内 · 太后的小花厅",
  "text": [
   "太后在小花厅里见你，没有叫人上茶，窗台上摆着一排白玫瑰，刺都剪掉了。她先问你，那封玫瑰色封蜡的信还留着没有，你说留着，她点了点头，也没往回要。",
   {
    "speaker": "伊奥瑞尔",
    "text": "我儿子过几天就要成亲了，杀他父亲的人到时候就坐在第三排。那一枪到底是不是克雷格自己的，都十九年了，你现在总可以说了吧。"
   },
   {
    "if": "flag.p_hall_truth",
    "speaker": "伊奥瑞尔",
    "text": "你就照直说吧。当年在大厅里，你就是这么不给人留面子的，我可都记着呢。"
   },
   {
    "if": "flag.lance_truth",
    "text": "你怀里揣着凭据，是当年从试炼山脚下的比武场带回来的。"
   },
   {
    "if": "!flag.lance_truth",
    "text": "你手里没有凭据，有的只是一句话。"
   },
   {
    "if": "flag.god_half_sentence",
    "text": "在你跟前谁也撒不了谎，连你自己也不行。她清楚得很，所以才特地挑了今天来问。"
   }
  ],
  "choices": [
   {
    "text": "照实说：是他自己的手，是失手",
    "effects": [
     "flag lance_told_truth",
     {
      "if": "flag.lance_truth",
      "then": [
       "world feud -1"
      ],
      "else": [
       "world feud +1"
      ]
     },
     "quest lance done"
    ],
    "result": [
     {
      "if": "flag.lance_truth",
      "text": "她把凭据看了两遍，折起来收进了袖子，说：“失手，就这两个字，我等了二十年才肯念出声来。”"
     },
     {
      "if": "!flag.lance_truth",
      "text": "她听完了才说：“没有凭据的话，月家的人二十年前就同我说过了，说得比你还顺。”这句空口白话，她记在了月家的账上。"
     }
    ],
    "goto": "a4_04"
   },
   {
    "text": "告诉她：他当时被慑住了",
    "if": "!flag.god_half_sentence",
    "effects": [
     "flag lance_told_thrall",
     "world feud -1",
     "world writ +1",
     "approval valeran -2",
     "quest lance done"
    ],
    "result": "她看了你很久，才说：“是叫人慑住的，那就谁也不用恨谁了。”她叫人去请宫廷法师，要补一份验心的文书。{?party.valeran:瓦勒兰爵士就站在门外，一个字不落地全听见了。|门外的侍从把这句话带出了宫。}",
    "goto": "a4_04"
   },
   {
    "text": "看着窗台上那排剪了刺的玫瑰，不答",
    "effects": [
     "world feud +1",
     "quest lance done"
    ],
    "result": "她说了句“那就是不肯说了”，叫人上了茶，亲手把杯子推到你面前，又说：“不说也算是一种说法，监誓人，我会把它当成最坏的那一种。”",
    "goto": "a4_04"
   }
  ]
 },
 "a4_05": {
  "id": "a4_05",
  "title": "克雷格的血债",
  "art": "ev_piety",
  "loc": "洛伦泰内 · 白玫瑰庭",
  "text": [
   "白玫瑰庭的大殿里供着阿德安和米娜拉，一位持枪，一位捧杯。两尊像当中停着鲁本二世的石棺，棺盖上刻的是他比武那天穿的那身甲，二十年了，棺前的蜡烛从没断过。",
   "卡奈特的国王克雷格·达梅里斯今年四十二岁，他是自己走进来的，一个卫兵也没带，走到石棺前三步远的地方就站住了，再往前得有人准许才行。太后坐在侧席上，两只手里什么也没拿。",
   {
    "speaker": "克雷格",
    "text": "那一枪是我的，枪杆是我自己挑的，马也是我自己勒的。可二十年了，没有一位肯告诉我这笔债该怎么还。监誓人，请您给我一个数吧。"
   },
   {
    "speaker": "伊奥瑞尔",
    "text": "他要的是一个数，我要的是一个说法。你打算给哪一个呢？"
   },
   {
    "if": "origin == 'lorent' && flag.lance_asked",
    "text": "克雷格看见了你，朝你点了一下头。十九年前在马里昂身边，你曾经当面问过他那一枪的事。"
   },
   {
    "if": "is.god",
    "text": "克雷格绕过太后的席位，直接跪在了你跟前，求你罚他。太后坐着没动，只说：“他跪错人了，神罚的不算数，得是我点了头的那一份才算。”"
   },
   {
    "if": "is.god && flag.god_on_agenda",
    "text": "白玫瑰庭的主祭凑了过来，问你如今算是哪一家的。泛神会议还没给你名分，而没有名分的神，在这座殿里是涂不了油的。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，先王的棺材在这儿停了二十年，凶手今天才头一回进这个门。恩特本的人都在外头数着呢，看他能待多久。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "欠钱还钱，欠一枪就还一枪嘛，让他也挨上一下不就结了？你们人类办个事可真费蜡！"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "对不住，我多句嘴啊。我们威克斯有句老话，说坟要挖得比恨深。这一位都埋了二十年了，坟还是浅的呀。"
   }
  ],
  "first": [
   "codex rose_and_moon"
  ],
  "choices": [
   {
    "text": "判忏悔礼：当众卸甲，在先王棺前守一夜",
    "effects": [
     "flag crege_penance",
     "world feud -2",
     "rep moon -1"
    ],
    "result": "他当着众人卸了甲，一件一件码在殿门口，只穿着衬衣在石棺前跪到了天亮，太后在侧席上陪了一整夜，却一眼也没看他，天亮的时候才说了句“行了”。月庭的人倒有话说，他们觉得卡奈特的国王不该去跪洛伦特的棺材。",
    "goto": "a4_06"
   },
   {
    "text": "判忏悔礼，并亲手给他涂油",
    "tag": "旧礼",
    "if": "faction == 'rites'",
    "effects": [
     "flag crege_penance",
     "world feud -2",
     "rep moon -1",
     {
      "if": "flag.aria_anoints || (is.god && flag.god_on_agenda)",
      "then": [
       "rep rose -1"
      ],
      "else": [
       "world feud -1",
       {
        "if": "item.holy_oil >= 1",
        "then": [
         "item -holy_oil"
        ]
       }
      ]
     }
    ],
    "result": [
     "他当着众人卸了甲，只穿着衬衣在石棺前跪到了天亮，太后在侧席上陪了一整夜。",
     {
      "if": "flag.aria_anoints && !(is.god && flag.god_on_agenda)",
      "text": "你才拔开油瓶的塞子，白玫瑰庭的主祭就伸手挡住了，他说月神神殿担保过的手，在这座殿里涂的油不算数。忏悔礼照样行完了，只是他的额头始终是干的。"
     },
     {
      "if": "is.god && flag.god_on_agenda",
      "text": "主祭伸手挡住了你的油瓶，说会议还没给你名分。忏悔礼照样行完了，只是他的额头始终是干的。"
     },
     {
      "if": "!flag.aria_anoints && !(is.god && flag.god_on_agenda)",
      "text": "天亮的时候，你把油抹在了他额头上，忏悔一涂过油，往后谁再提这笔债，就是同殿里供的这两位过不去。太后看着那一点油光，过了很久才点了头。"
     }
    ],
    "goto": "a4_06"
   },
   {
    "text": "判骑士裁决：两家各出一人，见血为止",
    "effects": [
     "flag crege_champions",
     "world feud -1"
    ],
    "goto": "a4_05c"
   },
   {
    "text": "把他交给太后",
    "effects": [
     "flag crege_given",
     "world feud +2",
     "rep rose +2",
     "rep moon -3",
     "approval valeran -1"
    ],
    "result": "克雷格把剑解下来放在石棺上，跟着太后的人从侧门出去了，头也没回。当天晚上马里昂来敲你的门，敲了三下，没等你来开就走了。",
    "goto": "a4_06"
   }
  ]
 },
 "a4_05c": {
  "id": "a4_05c",
  "title": "见血为止",
  "loc": "洛伦泰内 · 白玫瑰庭的前院",
  "text": [
   "殿前的院子里铺了一层沙，白玫瑰庭派出来的是个二十出头的骑士，枪旗上是一朵白玫瑰，他父亲当年是鲁本二世的掌旗官。规矩一共三条，用钝枪，见血为止，不许追击。",
   "克雷格在场边解自己的臂甲，解到一半忽然停了手，抬头看着你。按规矩，欠债的一方可以自己上场，也可以请人替。",
   {
    "if": "faction == 'sapphire'",
    "text": "司仪把裁决用的白手套递给了你。这本是蓝宝石之眼的规矩，洛伦特人学过来才二十年。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "钝枪？你们管这个也叫打架啊？行吧行吧，我在边上押十个金冠。"
   }
  ],
  "choices": [
   {
    "text": "替克雷格出场",
    "if": "partysize == 0",
    "combat": {
     "title": "白玫瑰庭的裁决",
     "intro": "号角响了一声，对面的年轻骑士把枪旗压低，朝先王的石棺点了一下。",
     "enemies": [
      {
       "id": "lorentish_knight",
       "name": "白玫瑰庭的斗士",
       "hpMult": 1.5
      }
     ],
     "pcMustStand": true,
     "fleeable": false,
     "specials": [
      {
       "id": "flag",
       "name": "挑落他的枪旗",
       "desc": "枪旗一落地，他非低头去看不可",
       "check": {
        "skill": "athletics",
        "alt": [
         "acrobatics"
        ],
        "dc": 15,
        "mods": [
         {
          "if": "faction == 'sapphire'",
          "n": 2,
          "why": "骑士裁决是你的本行"
         }
        ]
       },
       "success": {
        "text": "白玫瑰的枪旗落在了沙地上，他忍不住低头看了一眼，这一眼就够了。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "你的枪尖擦着旗杆滑了过去，人也跟着往前栽了半步。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a4x_duel_won",
       "rep rose -1"
      ],
      "goto": "a4_05d"
     },
     "lose": {
      "effects": [
       "rep rose +1"
      ],
      "goto": "a4_05d"
     }
    }
   },
   {
    "text": "替克雷格出场，同伴作副手",
    "if": "partysize > 0",
    "combat": {
     "title": "白玫瑰庭的裁决",
     "intro": "洛伦特的规矩许带副手，不过副手只许同副手打。号角响了一声。",
     "enemies": [
      {
       "id": "lorentish_knight",
       "name": "白玫瑰庭的斗士",
       "hpMult": 1.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "斗士的副手"
      }
     ],
     "pcMustStand": true,
     "fleeable": false,
     "specials": [
      {
       "id": "flag",
       "name": "挑落他的枪旗",
       "desc": "枪旗一落地，他非低头去看不可",
       "check": {
        "skill": "athletics",
        "alt": [
         "acrobatics"
        ],
        "dc": 15,
        "mods": [
         {
          "if": "faction == 'sapphire'",
          "n": 2,
          "why": "骑士裁决是你的本行"
         }
        ]
       },
       "success": {
        "text": "白玫瑰的枪旗落在了沙地上，对面三个人都低头看了一眼，这一眼就够了。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "你的枪尖擦着旗杆滑了过去，人也跟着往前栽了半步。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a4x_duel_won",
       "rep rose -1"
      ],
      "goto": "a4_05d"
     },
     "lose": {
      "effects": [
       "rep rose +1"
      ],
      "goto": "a4_05d"
     }
    }
   },
   {
    "text": "把钝枪递给克雷格，让他自己上",
    "effects": [
     "rep moon +1",
     "approval liv +1",
     "approval valeran +1"
    ],
    "result": "他自己上了场，打到第三合，他把盾放低了一寸，在场的骑士个个都看出来了，可没有一个人说破。钝枪结结实实戳在他肩窝里，血从锁甲的环眼里一点一点往外渗，下场的时候他没让人扶，先走到石棺跟前，把那根沾了血的钝枪靠在棺脚上，这才去找人包扎。",
    "goto": "a4_06"
   }
  ]
 },
 "a4_05d": {
  "id": "a4_05d",
  "title": "沙上的血",
  "text": [
   {
    "if": "flag.a4x_duel_won",
    "text": "流血的是白玫瑰庭那位年轻骑士，伤在左肩，不算深。他拿手套按住伤口，朝你点了点头，太后的人随后把沙地扫平了。"
   },
   {
    "if": "flag.a4x_duel_won",
    "text": "恩特本那一席上有人说了一句，说洛伦特的血又叫月家的人放了一回，声音并不大，可也够半个院子的人听见了。"
   },
   {
    "if": "!flag.a4x_duel_won",
    "text": "流血的是你，伤在眉骨上，血一直流进了眼睛里。年轻骑士收了枪，往后退了三步，照规矩没有追上来。"
   },
   {
    "if": "!flag.a4x_duel_won",
    "text": "太后看着沙地上那一小块红，说了声“够了”。她身后的侍女捧着先王比武那天戴的头盔，从早上一直捧到这会儿，到这时候才放回了匣子里。"
   },
   "克雷格还站在场边，臂甲也还是解到一半的样子。他把它重新扣上，扣了三回才扣好。"
  ],
  "next": "a4_06"
 },
 "a4_06": {
  "id": "a4_06",
  "title": "碎玫瑰",
  "loc": "洛伦泰内 · 城外 · 恩特本的营地",
  "text": [
   "恩特本的营扎在红墙外头的葡萄坡上，有四十来顶帐子，马比人还多，每顶帐子前都插着一面旗，旗上是一朵从当中劈成两半的红玫瑰，他们管这个叫“碎玫瑰”。这些人已经打算好了，等婚宴上到第三道菜的时候就一齐站起来。",
   "罗恩·阿瑟利斯坐在一只卸下来的马鞍上喝汤，见你来了也没起身。他的父亲和兄弟都埋在莫尔班平原，那一仗打完已经二十六年了，可他讲起来还像是上个月的事。",
   {
    "speaker": "罗恩",
    "text": "太后是精灵，国王算半个，新娘也算半个。照这样再过上两代，洛伦特的王座上还能剩下几分是我们的？监誓人，我只问您这一句。"
   },
   {
    "if": "flag.a4x_met_roen",
    "speaker": "罗恩",
    "text": "是广场上那一位啊。锅里还有汤，坐吧。"
   },
   {
    "if": "is.god",
    "text": "营里有一半人摘了帽子，另一半人把手按在了剑上。罗恩说，尖耳朵之后是女祭司，女祭司之后又是神，照这样下去，恩特本的桌上快没有恩特本人的位子了。"
   },
   {
    "if": "party.valeran",
    "text": "他朝瓦勒兰爵士抬了抬勺子。当年瓦勒兰的父亲就是跟着老罗恩去冲的阵，再也没回来。"
   },
   {
    "if": "party.valeran && flag.blame_elves",
    "speaker": "瓦勒兰",
    "text": "恕我直言，今年在瓦洛森，您当着各国的面说这病是精灵带来的。打那天起，您就已经替我选好了。"
   },
   {
    "if": "party.valeran && flag.blame_elves",
    "text": "他解下佩剑，把剑柄朝你递了过来。照恩特本的规矩，你只要碰一下，他对你发的誓就算是还清了。"
   },
   {
    "if": "party.valeran && !flag.blame_elves && flag.a4x_ans_fair",
    "speaker": "瓦勒兰",
    "text": "路上您说过，谁先掀桌子，您就站在谁的对面。恕我直言，先掀桌子的会是我的乡亲。到那时候我算是哪一边的人，请您现在就定下来。"
   },
   {
    "if": "party.valeran && !flag.blame_elves && flag.a4x_ans_rose",
    "speaker": "瓦勒兰",
    "text": "路上您说过，您站在太后那一边。恕我直言，这么说您现在就站在我乡亲的对面了，可我还站在您身旁。这件事总得有个说法。"
   },
   {
    "if": "party.valeran && !flag.blame_elves && !flag.a4x_ans_fair && !flag.a4x_ans_rose",
    "speaker": "瓦勒兰",
    "text": "路上您反过来问我站在哪边。恕我直言，我想了一路也没想出来，所以只好来请您定。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "四十顶帐子，一顶里头住一位老爷。酒桶我可都数过啦，就他们带的这点酒，根本闹不到第三道菜！"
   },
   {
    "if": "party.barry",
    "text": "巴里往罗恩的汤锅里添了一把自己带来的干蘑菇，罗恩就这么看着他添，也没拦。"
   }
  ],
  "next": "a4_07",
  "choices": [
   {
    "text": "碰一下他的剑柄，看着他走过去",
    "if": "party.valeran && flag.blame_elves",
    "effects": [
     "flag valeran_purist",
     "flag wedding_blood",
     "companion -valeran",
     "quest valeran_oath done"
    ],
    "result": "他把剑挂了回去，朝你欠了欠身，欠得同十七年前在卡斯托纳斯城门口递信的时候一样深。然后他走到了罗恩的火堆边上，有人给他让出一个位子，又递过去一碗汤。",
    "goto": "a4_07"
   },
   {
    "text": "提出骑士裁决，点瓦勒兰替精灵一方出战",
    "if": "party.valeran && !flag.blame_elves",
    "combat": {
     "title": "葡萄坡上的裁决",
     "intro": "罗恩把汤碗放下了，说：“阿瑟利斯家出两个人，用钝枪，输了的就得认。”瓦勒兰爵士在拉下面甲之前也说了一句，恕我直言，我是替誓打的，可不是替耳朵打的。",
     "enemies": [
      {
       "id": "lorentish_knight",
       "n": 2,
       "name": "阿瑟利斯家的斗士",
       "hpMult": 1.4
      }
     ],
     "fleeable": false,
     "specials": [
      {
       "id": "vines",
       "name": "把他们引进葡萄架",
       "desc": "葡萄架矮，马钻不过去，长枪也转不开",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "survival"
        ],
        "dc": 15
       },
       "success": {
        "text": "两匹马一头扎进了葡萄架，枪杆也叫老藤给别住了。",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "你自己先叫藤绊了一跤，膝盖磕在了架桩上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "horses",
       "name": "惊了坡上拴的马",
       "desc": "四十匹马一乱起来，谁也顾不上出枪",
       "check": {
        "skill": "animal",
        "alt": [
         "intimidation"
        ],
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "四十匹马一齐挣起缰绳来，坡上尘土飞扬，两位斗士只顾得上勒住自己的坐骑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "离你最近的那匹马尥了个蹶子，正好踢在你胯上。",
        "selfDmg": "1d10"
       }
      }
     ],
     "win": {
      "effects": [
       "flag valeran_champion",
       "flag enteben_stopped",
       "quest valeran_oath done"
      ],
      "goto": "a4_07"
     },
     "lose": {
      "effects": [
       "flag valeran_champion",
       "flag wedding_blood",
       "quest valeran_oath done"
      ],
      "goto": "a4_07"
     }
    }
   },
   {
    "text": "解了他对你的誓，放他回去拦",
    "if": "party.valeran && !flag.blame_elves",
    "effects": [
     "flag valeran_released",
     {
      "if": "world.feud <= 4",
      "then": [
       "flag enteben_stopped"
      ],
      "else": [
       "flag wedding_blood"
      ]
     },
     "companion -valeran",
     "quest valeran_oath done"
    ],
    "result": "你碰了一下他的剑柄，他说：“恕我直言，我这还是头一回不知道该怎么直言。”说完他朝那四十顶帐子走了过去，走得并不快，至于拦不拦得住，要等到第三道菜才见分晓。",
    "goto": "a4_07"
   },
   {
    "text": "告诉他：这是恩特本自己的事，你不插手",
    "if": "party.valeran && !flag.blame_elves",
    "effects": [
     "flag valeran_stayed",
     "flag wedding_blood",
     "approval valeran -2",
     "quest valeran_oath done"
    ],
    "result": "有人递给瓦勒兰爵士一碗汤，他接过去又放下了，一口也没喝。回城的路上，他一直走在你身后三步远的地方，不多也不少。",
    "goto": "a4_07"
   },
   {
    "text": "坐下喝汤，同罗恩把话说开",
    "if": "!party.valeran",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "flag.a4x_met_roen",
       "n": 2,
       "why": "广场上打过照面"
      },
      {
       "if": "flag.blame_elves",
       "n": 2,
       "why": "你在瓦洛森说过的话"
      }
     ]
    },
    "ok": {
     "text": "你没有劝他认下精灵，只问了他一句，令尊冲阵的那一天，身后站着的是不是自己的国王。他把汤喝完了才说：“第三道菜的时候，我的人坐着不动，不过只这一回。”",
     "effects": [
      "flag valeran_stayed",
      "flag enteben_stopped"
     ],
     "goto": "a4_07"
    },
    "fail": {
     "text": "他听你把话说完，拿勺子在锅沿上磕了磕，说：“监誓人看了二十年的誓，竟没看出来有的誓是叫人逼着发的，汤钱就不要您的了。”",
     "effects": [
      "flag valeran_stayed",
      "flag wedding_blood"
     ],
     "goto": "a4_07"
    }
   },
   {
    "text": "看一眼就走，不插手",
    "if": "!party.valeran",
    "effects": [
     "flag valeran_stayed",
     "flag wedding_blood",
     "rep rose -1"
    ],
    "result": "你下坡的时候，营里有人在磨餐刀，磨得很慢，反正离第三道菜还有好几天呢。",
    "goto": "a4_07"
   }
  ]
 },
 "a4_07": {
  "id": "a4_07",
  "title": "婚礼",
  "art": "ck3_barry",
  "loc": "洛伦泰内 · 王宫大厅",
  "text": [
   "婚期定在了年关，真霜月的最后一夜行礼，席面要一直摆到新年，新郎再过四天就满二十一岁了。大厅里坐了三百人，西坎诺的每一顶冠都到齐了，洛伦特那顶红宝石冠上有一百多颗石头，雷安戴着它，连头都不敢低一下。",
   {
    "if": "flag.crege_given",
    "text": "光是座次就排了三天。卡奈特的席位空着，椅子倒没有撤掉。"
   },
   {
    "if": "!flag.crege_given",
    "text": "光是座次就排了三天。克雷格坐在第三排，同先王的画像之间隔着两根柱子。"
   },
   {
    "if": "flag.wedding_blood",
    "text": "上到第三道菜的时候，恩特本那一桌的人一齐站了起来，桌子是罗恩亲手掀翻的，有人拔出了餐刀，也有人拔出来的是别的家伙。等卫兵把两边分开，白桌布上已经拖出了一道红，从主桌一直拖到门口。"
   },
   {
    "if": "flag.wedding_blood && flag.valeran_champion",
    "text": "葡萄坡上的那场裁决是恩特本赢的，赢了的人自然不用认账。"
   },
   {
    "if": "flag.wedding_blood && flag.valeran_purist",
    "text": "瓦勒兰爵士就站在那一桌人后头，手没有去碰刀，可也没有拦人。"
   },
   {
    "if": "flag.wedding_blood",
    "text": "誓词是等血擦干净以后才说的，奥坎娜的声音比雷安的稳。"
   },
   {
    "if": "!flag.wedding_blood",
    "text": "上到第三道菜的时候，恩特本那一桌没有人动，他们把菜吃完了，只是一口酒也没敬。新郎新娘是握着手说的誓词，中间奥坎娜还替雷安提了一个字。"
   },
   {
    "if": "flag.doses_moon",
    "text": "太后那一桌的人隔着烛台，谁也不朝你这边看，因为今年那三剂药，你全给了月家。"
   },
   {
    "if": "flag.doses_rose",
    "text": "月庭那一桌没有一个人同你碰杯，因为今年那三剂药，你全给了洛伦特。"
   },
   {
    "if": "is.halfelf",
    "text": "新郎新娘都是半精灵，你也是。满厅的人都在看他们的耳朵，顺带着也看看你的。"
   },
   {
    "if": "is.god",
    "text": "该把神排在哪儿，司礼官足足想了三天，排得比诸王高不行，比诸王低也不行，昨天晚上他干脆把差事辞了。你坐的这把椅子是临时从厨房搬来的，椅背上还沾着一块油。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "对不住，对不住，第四道菜我多做了六十份。逃到城根底下的那些人也得过年呀。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "我可是五十四世，五十四世哪能坐下席啊！你去同那个拿名册的说一声，要不然我就自己去说了。"
   }
  ],
  "first": [
   {
    "if": "flag.wedding_blood",
    "then": [
     "world feud +1"
    ],
    "else": [
     "world feud -1"
    ]
   }
  ],
  "choices": [
   {
    "text": "把卡斯坦排到主桌",
    "if": "party.liv && !flag.a4x_liv_seated",
    "once": true,
    "effects": [
     "flag a4x_liv_seated",
     "approval liv +2",
     "rep rose -1"
    ],
    "result": "她坐在加韦德国王和一位月神女祭司当中，翅膀怎么也收不拢，一下扫翻了两只杯子，太后隔着七个座位看了你一眼，那一眼分明是记了账的。"
   },
   {
    "text": "请卡斯坦去下席",
    "if": "party.liv && !flag.a4x_liv_seated",
    "once": true,
    "effects": [
     "flag a4x_liv_seated",
     "approval liv -1"
    ],
    "result": "下席是同乌翼兵团的老兵坐一桌。她喝得很凶，敬酒敬的都是“山上那位”，一回也没敬你。"
   },
   {
    "text": "起身敬酒",
    "if": "!flag.wedding_blood",
    "once": true,
    "check": {
     "skill": "performance",
     "alt": [
      "persuasion"
     ],
     "dc": 15
    },
    "ok": {
     "text": "你说，十九年前你看着各国发誓，可直到今天，才头一回看见有人发誓发得这么高兴。雷安的脸红了，太后也笑了一下，头一个举杯的是月家那一桌。",
     "effects": [
      "rep rose +1",
      "rep moon +1"
     ]
    },
    "fail": {
     "text": "你敬到一半，把“西洛瑞尔”念成了“西尔穆纳”，两家的人都盯着你看。好在奥坎娜站了起来，替你把那杯酒喝了。",
     "effects": [
      "rep rose -1"
     ]
    }
   },
   {
    "text": "举着监誓印，站到两桌人当中去",
    "if": "flag.wedding_blood",
    "once": true,
    "check": {
     "skill": "intimidation",
     "alt": [
      "persuasion"
     ],
     "dc": 16,
     "mods": [
      {
       "if": "item.witness_seal >= 1",
       "n": 1,
       "why": "监誓印"
      }
     ]
    },
    "ok": {
     "text": "你把印举过头顶，告诉他们这座厅里今晚发的是婚誓，谁要是再拔刀，你就把他的名字盖在背誓那一栏里。还没等卫兵赶到，两边已经各自退了三步。",
     "effects": [
      "rep rose +1",
      "rep moon +1"
     ]
    },
    "fail": {
     "text": "你才把印举起来，后脑勺就挨了一只银盘子。盘子是哪一家扔的，事后谁也说不清楚，两家倒是都派人来赔了不是，只是赔得很敷衍。",
     "effects": [
      "hp -6"
     ]
    }
   },
   {
    "text": "看席上谁在同谁咬耳朵",
    "once": true,
    "check": {
     "skill": "insight",
     "alt": [
      "perception"
     ],
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "瓦洛森的法师正同加韦德的人说话，说的是“令状”，东坎诺的几位王挨着坐在一起，刀叉都没动，看样子是在等人。马里昂朝你使了个眼色，意思是帐子里见。",
     "effects": [
      "flag a4x_insight_wed"
     ]
    },
    "fail": {
     "text": "你看了一个晚上，只看出上菜的侍从里有两个是太后的耳目，偏偏他们也看出来你在看了，打那以后每道菜都先上你这一桌。"
    }
   },
   {
    "text": "站起来，替新人证婚",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag god_wed",
     "world feud -1",
     "rep moon -1",
     "rep rose -1",
     "var god_acts +1"
    ],
    "result": [
     "为了谁先开口，月神神殿的大女祭司同白玫瑰庭的主祭已经争了半个月，你站起来的时候，两个人都还张着嘴。等你把话说完，他们一齐坐下了，脸色一模一样。司礼官的徒弟在婚书上找“证婚”那一栏，找是找到了，可他又在旁边另画了一格，空在那里。",
     {
      "if": "party.valeran",
      "speaker": "瓦勒兰",
      "text": "恕我直言，神证过的婚，往后谁也解不开了。新娘才十七岁，我替她多想了这一步。"
     },
     {
      "if": "party.barry",
      "speaker": "巴里",
      "text": "对不住……那往后小两口要是吵了架，该找谁去评理呀？"
     }
    ]
   },
   {
    "text": "散席，去婚宴厅外的大帐",
    "goto": "a4_08"
   }
  ]
 },
 "a4_08": {
  "id": "a4_08",
  "title": "帐子里的议事",
  "art": "ev_mages_estate",
  "loc": "洛伦泰内 · 婚宴外的大帐",
  "text": [
   "婚宴厅外的草地上支着一顶军帐，里头摆了一张长桌，桌上放着四份章程，每份的角上都压着一只酒杯。十字军要开进科乌里亚去打坎雷克，可这支兵归谁统领，今晚就得定下来，监誓人的印落在哪一份上，哪一份就算数。",
   {
    "speaker": "北王国的温斯坦",
    "text": "我们要皇帝。东坎诺得有一位卡斯坦，得有一面旗，要是没有这面旗，光是谁走在前头，我们三家的兵就得先打上一架。"
   },
   {
    "speaker": "伊奥瑞尔",
    "text": "我看还是同盟。自由诸国打过一回术士王，章程都是现成的。再说，等这件事完了，我们也还在嘛。"
   },
   {
    "speaker": "瓦洛森的法师",
    "text": "我们主张令状。封路的是我们，验尸的是我们，熬药的也是我们，至于兵该归谁管，诸位自己掂量吧。"
   },
   {
    "speaker": "马里昂",
    "text": "要我说就会盟！愿意来的就来，不愿意来的，我也不拿刀架着他。自己愿意来的人才靠得住嘛。"
   },
   "压在角上的四只酒杯，到现在没有一只有人碰过。",
   {
    "if": "flag.a4x_insight_wed",
    "text": "谁同谁事先通过气，你在席上就已经看清楚了。"
   },
   {
    "if": "flag.acromis_traded",
    "text": "瓦洛森的法师从袖子里抽出一张旧令状，正是十八年前你拿阿克罗米斯的把柄，从加里昂手里换来的那一张，他说：“这是有先例的。”"
   },
   {
    "if": "flag.map_drawn",
    "text": "温斯坦摊开了一张图，上头那条线你认得，是当年你在试炼山的石桌上画的“将来的疆界”，不知是谁上山去抄了下来。"
   },
   {
    "if": "origin == 'wex'",
    "text": "戴伦公爵今年二十七岁，坐在末席上。他托人递过来一张条子，说威克斯这一票要换一个王号。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "皇帝那份好啊！人选都是现成的，这不就坐在这儿嘛，还带着翅膀呢。"
   },
   {
    "if": "party.liv && party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，队长，上一位卡斯坦的兵烧过恩特本三个庄子，那三个庄子的名字我到现在都背得出来。"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "要是印落在令状上（我说的是要是），那十年以后，坐在这顶帐子里的就全是法师了。理论上是这样。"
   }
  ],
  "first": [
   "codex wise_council"
  ],
  "choices": [
   {
    "text": "落印之前，先请四家答应：落在哪份都认",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "adv": "flag.a4x_insight_wed",
     "mods": [
      {
       "if": "rep.moon >= 3 && rep.rose >= 3",
       "n": 2,
       "why": "两家都信你"
      }
     ]
    },
    "ok": {
     "text": "四家都点了头，马里昂点得最慢，温斯坦点完了还添上一句“看在监誓人的面上”，书记官把这四个头一一记了下来。",
     "effects": [
      "flag a4x_table_won"
     ]
    },
    "fail": {
     "text": "温斯坦说，认不认，还得看印落在哪一份上。帐子里一下子凉了半截，有人把自己那份章程往怀里拢了拢。",
     "effects": [
      "rep escann -1"
     ]
    }
   },
   {
    "text": "朝末席点头：替威克斯要回王号",
    "tag": "威克斯",
    "if": "origin == 'wex'",
    "once": true,
    "effects": [
     "flag wex_crown_promised",
     "rep wex +2"
    ],
    "result": "戴伦把那张条子收了回去，凑到烛火上烧掉了，威克斯已经五十年没有王了，这种事他不想留下字据。{?item.oathstone_chip >= 1:你兜里那块石头热了一下。|}"
   },
   {
    "text": "拿起印",
    "goto": "a4_08b"
   }
  ]
 },
 "a4_08b": {
  "id": "a4_08b",
  "title": "落印",
  "text": [
   "书记官把印泥盒打开了，四份章程在桌上排成一排，四家的人各自站在自己那一份后头。阿德蕾西娅替你托着印，用的是两只手。",
   {
    "if": "origin == 'dameria'",
    "text": "马里昂站在“会盟”那一份后头，朝你挤了挤眼。你是从他宫里出来的人，这一点满帐子的人都记得。"
   },
   {
    "if": "origin == 'ebonmarck' && flag.garrec_king",
    "text": "加雷克·乌霜就站在“皇帝”那一份后头，他如今已经是东坎诺北边的一位王了，眼睛看的却是你腰上的军团牌。"
   },
   {
    "if": "origin == 'ebonmarck' && !flag.garrec_king",
    "text": "“皇帝”那一份后头站着的是东坎诺的使者，里头没有一个姓乌霜的，如今还能替黑龙一系开口的，只剩下你腰上那块军团牌了。"
   },
   {
    "if": "faction == 'staff'",
    "text": "瓦洛森的法师把笔递给了你，意思是令状的条文可以由你来起草。"
   },
   {
    "if": "flag.stair_down && !party.liv",
    "text": "石阶十六年前就毁了，如今谁也上不了那座山，所以“皇帝”那一份只是一张空纸。"
   },
   {
    "if": "is.god",
    "text": "帐角上有人清了清嗓子，提出了第五份，说不打哪一家的旗，就奉着神的名出征。满帐子没有一个人笑。"
   },
   {
    "if": "is.god && flag.god_herald",
    "speaker": "马里昂",
    "text": "我先问一句啊。听说您在布勒瓦尔认了个差事，那您如今是替太阳王说话呢，还是替您自己？"
   }
  ],
  "choices": [
   {
    "text": "把印落在“皇帝”上",
    "req": "!flag.stair_down || party.liv",
    "reqText": "石阶已经毁了，没人上得去",
    "effects": [
     "flag charter_emperor",
     "world mantle +3",
     "approval liv +1",
     {
      "if": "origin == 'ebonmarck' && flag.garrec_king",
      "then": [
       "rep dragon +2"
      ]
     },
     {
      "if": "flag.a4x_table_won",
      "then": [
       "rep moon +1"
      ]
     }
    ],
    "result": "印落了下去，东坎诺的使者当场就摘了帽子，克拉丽蒙德却没有摘，她把椅子往后挪了一尺，起身出帐去了。",
    "goto": "a4_09"
   },
   {
    "text": "把印落在“同盟”上",
    "effects": [
     "flag charter_league",
     "rep rose +3",
     {
      "if": "!flag.a4x_table_won",
      "then": [
       "rep moon -1"
      ]
     }
    ],
    "result": "印落了下去，太后没有笑，只是把自己那只酒杯从章程角上拿开了，反正也用不着再压着了。马里昂说，当年打术士王的时候他就在这面旗底下，那年他才十二岁，在莫尔班平原叫人俘了去，也没见谁问过他排第几。",
    "goto": "a4_09"
   },
   {
    "text": "把印落在“令状”上",
    "effects": [
     "flag charter_writ",
     "world writ +3",
     "approval vezina -1",
     "approval valeran -1"
    ],
    "result": "印落了下去，瓦洛森的法师把章程卷了起来，卷得很紧。从今天起，哪条路要封，哪个村的尸首归谁收，哪一路兵往哪儿走，全凭塔里发出来的一张纸。",
    "goto": "a4_09"
   },
   {
    "text": "亲手起草令状，写上十年的期限再落印",
    "tag": "贤者门下",
    "if": "faction == 'staff'",
    "effects": [
     "flag charter_writ",
     "world writ +2",
     "rep wise +1"
    ],
    "result": "你把条文从头重写了一遍，末尾添上一行“此令十年为期，期满由各国监誓人会同复核”。瓦洛森的法师盯着那一行看了很久，到底还是签了。",
    "goto": "a4_09"
   },
   {
    "text": "把印落在“会盟”上",
    "effects": [
     "flag charter_muster",
     "world communion +2",
     "world unburied +1",
     "approval barry +1",
     {
      "if": "origin == 'dameria'",
      "then": [
       "rep moon +2"
      ]
     }
    ],
    "result": "印落了下去，这一来既没有总旗，也没有总帅，愿意来的自己带粮。{?origin == 'dameria':马里昂当着满帐子的人管你叫“我的监誓人”，|马里昂朝你举了举杯，}瓦洛森的法师却在一旁小声算了一笔账，说照这样凑兵，要慢上一个春天。",
    "goto": "a4_09"
   },
   {
    "text": "点头：奉你的名出征",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag charter_muster",
     "flag god_crusade",
     "world communion +2",
     "world mantle +1",
     "var god_acts +1"
    ],
    "result": [
     "你点了头，满帐子的人一齐站了起来，那四份章程再也没人去看。头三天来报名的兵，比会盟一个月凑的还多，其中有一半是不敢不来，书记官把名册重抄了一遍，抬头的那一行写的是你的神号。",
     {
      "if": "party.vezina",
      "speaker": "薇齐娜",
      "text": "要是他们烧错了人（我说的是要是），本子上该记谁的名字呢？"
     },
     {
      "if": "party.liv",
      "speaker": "卡斯坦",
      "text": "神的旗插在最前头，那我那面插哪儿啊，插你屁股后头？"
     }
    ],
    "goto": "a4_09"
   }
  ]
 },
 "a4_09": {
  "id": "a4_09",
  "title": "拉尔桑来的使者",
  "loc": "洛伦泰内 · 使者的住处",
  "text": [
   "伊贝瓦尔的使者住在城西一间没生火的屋子里，三只箱子摞在门边，一只都没打开。他是个三百来岁的月精灵，同人说话的时候眼睛总看着窗外。",
   {
    "speaker": "使者",
    "text": "我是来知会诸位一声的，谈不上商量。拉尔桑那一线，从上个月起已经对人类关上了。行尸过不去，逃难的也一样过不去，因为到了夜里，我们的弓手分不清这两样。"
   },
   "他把一张单子推了过来，原来线外头有多少人，他们是一个一个数着的，一共三千四百，都在林子边上搭了棚子住，每天夜里要少掉几个。阿德蕾西娅把单子上的数从头加了一遍，说他们少算了十一个孩子。",
   {
    "if": "origin == 'ibevar'",
    "text": "他是你母亲那一支的表亲，上回见面还是在月火号的甲板上。他开口先问你，人类的面包吃得惯吃不惯。"
   },
   {
    "if": "is.god",
    "text": "他见了你也没有起身。伊贝瓦尔的精灵早就把神戒了，这一点你是清楚的。"
   },
   {
    "if": "flag.blame_elves",
    "text": "你在瓦洛森说的那句话，他抄在了单子的背面，一个字也没改。"
   },
   {
    "if": "flag.edict_upheld",
    "text": "他还提了一句威克斯，说逐精灵的那道令上盖的是你的印。"
   },
   {
    "if": "flag.calindal_named",
    "text": "长老们还托他问一句，卡林达尔是先驱精灵的手艺，这话是你自己说的，那么那把剑打算什么时候还？"
   },
   {
    "if": "flag.alaria_blocked",
    "text": "他还记得你。当年在泛神会议上把阿拉莉亚封神的事拦下来的，就是你。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "对不住，我插一句啊。我是在船上叫大伙儿轮流带大的，从来没人问过我是谁家的孩子，有饭就给我一口。墙外头那三千四百个人，你们就当他们是我吧。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，贵国的墙修得很好。家父那一辈人要是也会修墙，我们今天也就用不着来求人开门了。"
   }
  ],
  "first": [
   "codex larthan"
  ],
  "choices": [
   {
    "text": "劝他把线说开：验过没发病的，白天放过去",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "flag.alaria_blocked",
       "n": 2,
       "why": "你拦过阿拉莉亚封神"
      },
      {
       "if": "flag.p_ibevar_blood",
       "n": 2,
       "why": "你替死去的精灵讨过命"
      },
      {
       "if": "rep.elders >= 3",
       "n": 2,
       "why": "长老们信你"
      },
      {
       "if": "origin == 'ibevar'",
       "n": 2,
       "why": "使者是你的族亲"
      },
      {
       "if": "is.elf && origin != 'ibevar'",
       "n": 1,
       "why": "你同他说的是精灵话"
      },
      {
       "if": "item.lunatein_plank >= 1",
       "n": 1,
       "why": "月火号的船板"
      },
      {
       "if": "flag.blame_elves",
       "n": -4,
       "why": "你说过病是精灵带来的"
      },
      {
       "if": "flag.edict_upheld",
       "n": -2,
       "why": "逐精灵令上有你的印"
      },
      {
       "if": "flag.calindal_named",
       "n": -1,
       "why": "长老们想要回那把剑"
      }
     ]
    },
    "ok": {
     "text": "他把单子翻了过来，在背面写了一行精灵字，折好了才说：“没发白的，验过舌头的，白天可以过，夜里照旧。”他说亲王是不会高兴的，说完却把门边的头一只箱子打开了。",
     "effects": [
      "flag larthan_open",
      "world communion +2",
      "rep elders -1"
     ],
     "goto": "a4_10"
    },
    "fail": {
     "text": "他把你的话一句一句记了下来，说会带回去。十二天以后亲王的回信到了，信上只有一行字：“上回也有人劝我们开门。”",
     "goto": "a4_10"
    }
   },
   {
    "text": "收下单子，告诉他墙是他们的，线也是",
    "effects": [
     "rep elders +1",
     "approval barry -1"
    ],
    "result": "他头一回正眼看了看你，说：“我会同亲王说，人类那边倒有一位没来劝我们。”阿德蕾西娅把那张单子收了起来，没有还给他。",
    "goto": "a4_10"
   },
   {
    "text": "把亲王的手令放在桌上",
    "tag": "伊贝瓦尔",
    "if": "origin == 'ibevar'",
    "req": "item.ibenion_writ >= 1",
    "reqText": "需要亲王的手令",
    "effects": [
     "flag larthan_open",
     "world communion +2",
     "rep elders -3"
    ],
    "result": "那张折了三折的船帆布一放到桌上，他马上就站了起来，见了手令是得站着的，嘴里却说：“这是亲王写给你出门用的，你倒拿它来开他自己的门。”线到底是开了，不过他也告诉你，瓦多塞德的城门，你往后就不用再回去敲了。",
    "goto": "a4_10"
   }
  ]
 },
 "a4_10": {
  "id": "a4_10",
  "title": "河里上来的",
  "art": "ev_undead_army",
  "loc": "洛伦泰内 · 血酒河岸 · 夜",
  "text": [
   "半夜里，三座新桥当中那一座的桥头忽然有人喊了起来。血酒河是从东边流过来的，往上游走四十里，就有没人收尸的村子，那些死人顺着水一路漂进了城，正漂到办婚礼的这一区，这会儿挂着一身水草，在河边的石阶上一个接一个站了起来。",
   "守桥头的是两个卫兵，身上穿的还是婚礼用的礼服甲，胸口别着白玫瑰。好在上游有一道水闸，闸房里的灯还亮着，只要把闸打开，就能把这一段河岸冲个干净。",
   "阿德蕾西娅数了数，说石阶上是七个，水里还有，一边说一边把你的盾递了过来。",
   {
    "if": "flag.dwarves_thanked",
    "text": "闸房的窗口探出一把红胡子来，原来是老闸官，他朝你举了举那桶还没开封的酒，手早就搭在绞盘上了。"
   },
   {
    "if": "!flag.dwarves_thanked",
    "text": "闸房的窗口有人往外看了一眼，随手就把窗板合上了，看来绞盘得你自己去摇。"
   },
   {
    "if": "is.divine",
    "text": "你念了半句送葬的祷词，走在最前头的那两个到了桥栏边上，居然停了一停。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "河里爬上来的可不算军功啊，打完了你得请酒！"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "七个，刚才还是六个呢。水里还有一个背着信匣的，要是他也上来了，我说的是要是啊，那只匣子可得留着。"
   }
  ],
  "combat": {
   "title": "桥头",
   "intro": "头一个死人踩上桥板的时候，卫兵胸口那朵白玫瑰掉进了河里。",
   "enemies": [
    {
     "id": "pestilent_zombie",
     "n": 4
    },
    {
     "id": "ghoul",
     "n": 2
    },
    {
     "id": "wight",
     "name": "背信匣的死人"
    }
   ],
   "allies": [
    {
     "id": "man_at_arms",
     "n": 2,
     "name": "婚礼的卫兵"
    }
   ],
   "noAwe": true,
   "xp": 700,
   "specials": [
    {
     "id": "sluice",
     "name": "开闸",
     "desc": "把上游的水放下来，把石阶冲干净",
     "check": {
      "skill": "athletics",
      "dc": 16,
      "mods": [
       {
        "if": "flag.dwarves_thanked",
        "n": 20,
        "why": "矮人已经把手搭在绞盘上了"
       }
      ]
     },
     "success": {
      "text": "闸门一提起来，一人高的水头就冲了下来，把石阶上的东西全卷走了。",
      "dmgAll": "4d6",
      "type": "bludgeoning"
     },
     "fail": {
      "text": "绞盘卡死了，摇柄猛地弹回来，结结实实抽在你肋上。",
      "selfDmg": "2d6"
     }
    },
    {
     "id": "rite",
     "name": "念送葬的祷词",
     "desc": "照规矩送过葬的死人，脚步会慢下来",
     "check": {
      "skill": "religion",
      "dc": 15,
      "mods": [
       {
        "if": "is.divine",
        "n": 20,
        "why": "这是你的本行"
       }
      ]
     },
     "success": {
      "text": "你把祷词从头念完了，桥板上那几个都站住不动，像是在等谁叫他们的名字。",
      "applyAll": {
       "cond": "stunned",
       "turns": 1
      }
     },
     "fail": {
      "text": "你念错了一句，它们一步也没停。"
     }
    }
   ],
   "win": {
    "goto": "a4_11"
   },
   "lose": {
    "effects": [
     "world unburied +1",
     "world feud +1"
    ],
    "goto": "a4_11"
   }
  }
 },
 "a4_11": {
  "id": "a4_11",
  "title": "那个字",
  "art": "ev_looming_death",
  "loc": "洛伦泰内 · 河边的停尸棚",
  "text": [
   "天亮以后，捞上来的尸首都摆在河边的棚子里，一共二十三具，脚一律朝着河。第九具披着信差的短斗篷，腰上拴着一只铜信匣，匣口拿黑蜡封着，里头倒没进水。再看他那双靴子，靴底早就走穿了，连脚掌都磨得见了骨头。",
   {
    "if": "flag.iacob_pardoned",
    "text": "匣子里装的是一封回信，字写得很小，一行挤着一行，纸边上还有指甲来回刮过的印子，抬头写的是“福阿哈尔公爵亚科布阁下”。"
   },
   {
    "if": "!flag.iacob_pardoned",
    "text": "匣子里装的是一封回信，字写得很小，一行挤着一行，纸边上还有指甲来回刮过的印子，抬头只有“阁下”两个字，没写名字。"
   },
   {
    "cls": "letter",
    "text": "“来信收到了。阁下问我急不急，我不急，活人自己会把山修好的，修好了，自己还会请一位上去，我都等了二十年了，也不差这几个冬天。誓词是现成的，*至我寿终之日*，这一句归我来念。又及，我后脑勺痒得厉害，劳驾阁下往后别在信里提维纳克了。”"
   },
   {
    "if": "flag.knows_myrrh",
    "text": "信纸上有一股没药味，当初来打听皇帝遗体的那个人，身上也是这个味儿。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "他说活人自己会请一位上去，那要是请上去的那一位是我呢？"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，这封信要是真的，那帐子里那四份章程当中，就有一份是替写信的这个人拟的啊。"
   }
  ],
  "first": [
   "flag knows_canrec_plan",
   "quest canrec_trail stage 3",
   "codex the_word_2",
   {
    "if": "flag.ravens_trust || party.vezina",
    "then": [
     "flag knows_why_watched",
     "codex ravenseers_2"
    ]
   }
  ],
  "next": "a4_12",
  "choices": [
   {
    "text": "查这封信是哪年发出来的",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 16,
     "party": true
    },
    "ok": {
     "text": "蜡封上压着年份，是1024年，{?flag.mended:北要塞的石匠上试炼山动工，也是在那一年。|你头一回从试炼山上下来，也是在那一年。}这么说来，这个信差是死了以后还接着往下送的，一送就是十六年，难怪靴底都走穿了。",
     "effects": [
      "xp 120"
     ]
    },
    "fail": {
     "text": "你把信对着光看了半天，只看出这纸很贵，还是阿德蕾西娅把信匣翻过来指给你看，蜡封上压着四个数，1024。她又去数靴底的破洞，数到第九个就不数了。"
    }
   },
   {
    "text": "凑近闻一闻信纸",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 16,
     "adv": "is.caster",
     "mods": [
      {
       "if": "flag.knows_roster",
       "n": 2,
       "why": "你见过那本名册"
      }
     ]
    },
    "ok": {
     "text": "信纸上有没药味，有旧皮面的味儿，还有实验室里那些陶罐上的味儿，原来这张纸是从那本名册上裁下来的纸边。写信的人撕的是自己的账本，而且撕得很随手。",
     "effects": [
      "xp 120"
     ]
    },
    "fail": {
     "text": "你先闻到了没药，接着又闻到了些别的，这一闻闻得你眼前发白，扶着棚柱站了足足一刻钟才缓过来。",
     "effects": [
      "hp -4"
     ]
    }
   },
   {
    "text": "把那句誓词从头想一遍",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "历代卡斯坦立誓，头一句都押在“寿终之日”上，沼泽堡的那个字，就是叫这一天当场到了，而写这封信的人也会念。这一来，山上的结只要一天不解，谁在石头前立了誓，谁的这一天就捏在他手里。",
     "effects": [
      "xp 120"
     ]
    },
    "fail": {
     "text": "你想了半天，还是卡在“寿终”两个字上。阿德蕾西娅把那句誓词数了一遍，一共六个字，然后很认真地问你：“大人，这一天要是有人替他定呢？”"
    }
   },
   {
    "text": "给这二十三具办一场正经葬礼",
    "tag": "旧礼",
    "if": "faction == 'rites'",
    "once": true,
    "effects": [
     "world unburied -1"
    ],
    "result": "你叫人把棚子里的二十三具尸首一具一具擦干净，头都朝东摆好，手边没有束腰，就拿婚宴上撤下来的白桌布代替。名字能问到的，你都念了，问不到的就念“某村某人”，等你全念完了，洛伦泰内的收尸人才敢上来抬。"
   },
   {
    "text": "把信收进印匣",
    "if": "flag.ravens_trust || party.vezina",
    "goto": "a4_11b"
   },
   {
    "text": "把信收进印匣",
    "if": "!flag.ravens_trust && !party.vezina",
    "goto": "a4_12"
   }
  ]
 },
 "a4_11b": {
  "id": "a4_11b",
  "title": "烤鹅上的渡鸦",
  "text": [
   "棚子外头的长凳上摆着婚宴撤下来的剩席，那是留给抬尸首的人吃的。有只渡鸦落在半只烤鹅上，一口也没啄，歪着头等你出来，等它开了口，那声音听着就像在念别人的遗嘱。",
   {
    "speaker": "渡鸦",
    "text": "德基南长老问监誓人好。你想知道我们为什么光坐着看吧？凡是白年早早就给掐灭了的年头，后头接着的，都是人类把精灵赶下海。"
   },
   {
    "speaker": "渡鸦",
    "text": "有太平日子的那些年头呢，都得先有一个精灵，同一个女先知的女儿坐下来一块儿熬药。我们挑的是后一种，所以才在那棵树上蹲了十九年。"
   },
   "说完，它在鹅背上蹭了蹭喙，叼起一块鹅皮飞走了。今年瓦洛森塔里熬出了头一锅药，一共三剂，熬药的是加里昂和玛希尔达，一个正是精灵，一个正是女先知的女儿。",
   {
    "if": "party.vezina && flag.vezina_eye",
    "speaker": "薇齐娜",
    "text": "这一句我早就见过了。没告诉你，是因为不仁从来不说哪一句才是要紧的呀。"
   },
   {
    "if": "party.vezina && !flag.vezina_eye",
    "speaker": "薇齐娜",
    "text": "是他的声音。他从来没同我说过这么长的话……我可是跟了他二十年啊。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "十九年哪，他们眼看着我家那孩子长大，眼看着坟一座一座地空，可连一口热饭都没给谁送过。对不住，这个理我实在咽不下去。"
   }
  ],
  "next": "a4_12"
 },
 "a4_12": {
  "id": "a4_12",
  "title": "面甲",
  "art": "ev_adeanic_war",
  "loc": "洛伦泰内 · 婚礼比武场",
  "text": [
   "今天是比武会的最后一天。最后一轮的号角明明已经吹过了，东门却又开了一回，有个骑士骑着马进了场，既不报名字，也不举旗，面甲是拉下来的，马蹄踩在霜上连一点声音都没有。马后头跟着两个扈从，走起路来膝盖都不打弯。",
   "头一个上去拦他的是洛伦特的掌旗官，只一合就落了马，枪尖在他喉咙上停了一下，又收了回去。看台上有个东坎诺来的老兵一下子站了起来。",
   {
    "speaker": "老兵",
    "text": "你们看那个起手，再看那个收枪，是净手啊，埃德蒙·净手！可他今年开春就死在梅雷斯克了，棺材还是我抬的呢。"
   },
   "骑士拨转马头，朝看台最上头那一层走了过去，那一层坐的全是戴冠的。",
   {
    "if": "faction == 'sapphire'",
    "text": "他进场时行的那个礼你认得，先拿枪尖点一下地，再抬到眉心，这是蓝宝石之眼的旧礼，当年是他同凯伦两个人一起定下来的。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，那个礼我认得。家父教过我，说那是东边的骑士才用的，洛伦特人要是学了，是要挨人笑话的。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "他是凯伦的人！凯伦吃着我爹的饷，掉过头来就打我爹。都给我让开，这一个归我！"
   },
   {
    "if": "party.liv && party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，队长，凯伦还杀了家父呢，可他定的规矩我照样学。规矩是规矩，人是人，这是两回事。"
   },
   {
    "if": "is.god",
    "text": "他并不怕你，还朝你行了半个礼，面甲里头传出声音来，听着像隔了一口井：“凯伦说，赢了要留人，神留不留？”"
   }
  ],
  "first": [
   "codex edmund",
   "codex death_knight"
  ],
  "choices": [
   {
    "text": "对他行旧礼，请他一对一",
    "tag": "蓝宝石之眼",
    "if": "faction == 'sapphire'",
    "effects": [
     "flag palehand_saluted"
    ],
    "combat": {
     "title": "旧礼",
     "intro": "他把枪竖了起来，等着你把礼行完。两个扈从退到了场边，一动不动地站着，活像两根木桩子。",
     "enemies": [
      {
       "id": "edmund_palehand"
      }
     ],
     "noAwe": true,
     "xp": 900,
     "rounds": 8,
     "roundsOutcome": "win",
     "specials": [
      {
       "id": "visor",
       "name": "掀他的面甲",
       "desc": "让全场都看看面甲里头是什么",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "面甲掀开了，里头是什么，全场都看得清清楚楚。他抬手想把它合上，可到底慢了一拍。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手指头刚抠住面甲的边，他的盾就砸过来了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "creed",
       "name": "喊凯伦的规矩",
       "desc": "赢了要留人",
       "check": {
        "skill": "performance",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "“赢了要留人！”你这一喊，他的枪尖低下去一寸。",
        "applyAll": {
         "cond": "weakened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你喊岔了气，他也许没听见，也许听见了却不认。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a4x_palehand_won"
      ],
      "goto": "a4_12b"
     },
     "lose": {
      "goto": "a4_12b"
     }
    }
   },
   {
    "text": "学着瓦勒兰的样子，对他行那个礼",
    "if": "party.valeran && faction != 'sapphire'",
    "check": {
     "skill": "performance",
     "alt": [
      "history"
     ],
     "dc": 16
    },
    "ok": {
     "text": "你拿枪尖点了地，再往眉心抬，瓦勒兰爵士在身后小声提醒了一句“是眉心，不是鼻梁”，你赶紧又抬高了一寸。骑士勒住马，把枪竖了起来，两个扈从也退到了场边。",
     "effects": [
      "flag palehand_saluted"
     ],
     "combat": {
      "title": "旧礼",
      "intro": "他等你把礼行完了，才把枪放平。",
      "enemies": [
       {
        "id": "edmund_palehand"
       }
      ],
      "noAwe": true,
      "xp": 900,
      "rounds": 8,
      "roundsOutcome": "win",
      "specials": [
       {
        "id": "visor",
        "name": "掀他的面甲",
        "desc": "让全场都看看面甲里头是什么",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "面甲掀开了，里头是什么，全场都看得清清楚楚。他抬手想把它合上，可到底慢了一拍。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "你的手指头刚抠住面甲的边，他的盾就砸过来了。",
         "selfDmg": "2d6"
        }
       }
      ],
      "win": {
       "effects": [
        "flag a4x_palehand_won"
       ],
       "goto": "a4_12b"
      },
      "lose": {
       "goto": "a4_12b"
      }
     }
    },
    "fail": {
     "text": "你的枪尖点了地，却只抬到了鼻梁，就差那么一寸。骑士看了你一会儿，把枪放平了，两个扈从也跟着往前走。",
     "combat": {
      "title": "面甲",
      "intro": "礼行错了，他就当你没行过礼，照那样打。",
      "enemies": [
       {
        "id": "edmund_palehand"
       },
       {
        "id": "wight",
        "n": 2,
        "name": "苍手的扈从"
       }
      ],
      "noAwe": true,
      "xp": 900,
      "rounds": 8,
      "roundsOutcome": "win",
      "specials": [
       {
        "id": "visor",
        "name": "掀他的面甲",
        "desc": "让全场都看看面甲里头是什么",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "面甲掀开了，里头是什么，全场都看得清清楚楚。他抬手想把它合上，可到底慢了一拍。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "你的手指头刚抠住面甲的边，他的盾就砸过来了。",
         "selfDmg": "2d6"
        }
       }
      ],
      "win": {
       "effects": [
        "flag a4x_palehand_won"
       ],
       "goto": "a4_12b"
      },
      "lose": {
       "goto": "a4_12b"
      }
     }
    }
   },
   {
    "text": "走进沙场，拦在他和看台当中",
    "combat": {
     "title": "面甲",
     "intro": "他并没有催马，马是一步一步走过来的，枪端得平平的，两个扈从一左一右散开了。",
     "enemies": [
      {
       "id": "edmund_palehand"
      },
      {
       "id": "wight",
       "n": 2,
       "name": "苍手的扈从"
      }
     ],
     "noAwe": true,
     "xp": 900,
     "rounds": 8,
     "roundsOutcome": "win",
     "specials": [
      {
       "id": "visor",
       "name": "掀他的面甲",
       "desc": "让全场都看看面甲里头是什么",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "面甲掀开了，里头是什么，全场都看得清清楚楚。他抬手想把它合上，可到底慢了一拍，两个扈从也跟着停住了。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手指头刚抠住面甲的边，他的盾就砸过来了。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "creed",
       "name": "喊凯伦的规矩",
       "desc": "赢了要留人",
       "check": {
        "skill": "performance",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "“赢了要留人！”你这一喊，他的枪尖低下去一寸。",
        "applyAll": {
         "cond": "weakened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你喊岔了气，他也许没听见，也许听见了却不认。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a4x_palehand_won"
      ],
      "goto": "a4_12b"
     },
     "lose": {
      "goto": "a4_12b"
     }
    }
   }
  ]
 },
 "a4_12b": {
  "id": "a4_12b",
  "title": "他没追任何人",
  "text": [
   {
    "if": "flag.a4x_palehand_won",
    "text": "他的枪断在了你的盾上。他看了看手里剩下的半截，把它往沙地上一插，拨转马头就走了，走的还是进来时的那道门，他谁也没去追，也没有谁敢追他，两个扈从跟在后头，膝盖照旧不打弯。"
   },
   {
    "if": "!flag.a4x_palehand_won",
    "text": "你仰面摔在了沙地上，枪尖抵着你的喉咙停了一下，近得连上头的霜花都数得清，然后它收了回去。他拨转马头走了，谁也没去追。"
   },
   {
    "if": "flag.palehand_saluted",
    "text": "出门之前他勒住马，朝你回了一个礼，枪尖点地，再抬到眉心，这一回是整个的。"
   },
   "阿德蕾西娅说，他进场以后一共出了九枪，九枪全都收住了。看台上那位东坎诺的老兵也坐了回去，嘴里还念着一句话：“凯伦说，赢了要留人。”",
   "看台最上头那一层已经空了，戴冠的各自回了各家的偏厅，灯一间接一间地亮了起来。",
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，刚才看台上有人往场里扔了一把匕首，扔的是南王国的一位伯爵。死人没去捡，我倒是捡回来了。"
   }
  ],
  "choices": [
   {
    "text": "朝着那道门答他：神也留人",
    "if": "is.god && flag.a4x_palehand_won",
    "effects": [
     "rep escann +1"
    ],
    "result": "门洞里的马蹄声停了一步，接着又走远了。看台上有人把你这句话记了下来，当天晚上就传出了三个版本，其中一个版本里，你答的是“看心情”。",
    "goto": "a4_13"
   },
   {
    "text": "朝着那道门答他：神不留",
    "if": "is.god && flag.a4x_palehand_won",
    "effects": [
     "rep escann -1",
     {
      "if": "faction == 'sapphire'",
      "then": [
       "rep escann -1"
      ]
     }
    ],
    "result": "马蹄声没有停。看台上蓝宝石之眼的几个老骑士把帽子戴了回去，一个跟着一个走了，走的也是那道门，东坎诺的人后来都说，死人还守着凯伦的规矩，神倒不守。",
    "goto": "a4_13"
   },
   {
    "text": "去偏厅，诸王在等",
    "goto": "a4_13"
   }
  ]
 },
 "a4_13": {
  "id": "a4_13",
  "title": "每位国王都想要一个皇帝",
  "art": "ev_hre",
  "loc": "洛伦泰内 · 各家的偏厅",
  "text": [
   "死人骑进了婚礼的比武场，还占了上风，这一来，当天夜里王宫的偏厅没有一间是黑着的，每一间里都有一位国王在说同样的话，说得有一面大旗，得有个皇帝。那封信就揣在你兜里，信上那句“修好了自己会请一位上去”，你今晚隔着墙听了十几回，只是口音各不相同。",
   "人选一个接一个摆上了桌，跟上菜似的。头一个是卢坎·西卢里昂，今年二十一岁，是乌霜家的外孙，偏又长着一对精灵的耳朵，他们都管他叫“银龙”。",
   {
    "speaker": "卢坎",
    "text": "我舅舅是黑龙，我父亲是精灵，我娘说我们兄妹六个是照着一颗星星生的。山到底认哪一样？我想上去问问它。"
   },
   {
    "if": "flag.lucan_iacob",
    "text": "卢坎身后站着个七十九岁的老人，替他拿着斗篷，那是亚科布。"
   },
   {
    "if": "flag.lucan_marion",
    "text": "卢坎是月庭带大的，说话满口达梅里亚腔，管马里昂叫叔叔。"
   },
   {
    "if": "flag.garrec_king && !flag.god_truce",
    "text": "加雷克·乌霜也摆在桌上，他四十出头，是黑龙，手里有自己的兵，可他只说要先给父亲补办一场葬礼。"
   },
   {
    "if": "flag.garrec_king && flag.god_truce",
    "text": "也有人提了加雷克，满屋子的人笑了一声，说：“神保的那位？”谁也没把他当成正经人选。"
   },
   {
    "if": "flag.golem_pc",
    "text": "还有人提了你，说第九道的石像可是向你下过跪的。"
   },
   {
    "if": "party.liv",
    "text": "卡斯坦正在走廊里嚷嚷，说名单上少写了一位。"
   },
   "克拉丽蒙德今年四十二岁，把卡林达尔横放在膝上，满屋子的人说了一个晚上，她却只说了两个字：“毁阶。”",
   "嗓门最大的那几位，你挨个仔细看了过去，倒没有哪一个眼睛后面是空的。",
   {
    "if": "flag.god_half_sentence",
    "text": "你一进屋，有三位国王话说到一半就改了口，改成了实话，还有一位干脆闭上了嘴。"
   }
  ],
  "first": [
   "codex clarimonde",
   "codex lucan"
  ],
  "choices": [
   {
    "text": "挨个看人选身后站着谁",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 16,
     "party": true
    },
    "ok": {
     "text": "最着急的人都站在后排，每位人选身后都有一个替他算过账的人，手指头缩在袖子里掐着日子。{?flag.lucan_iacob:卢坎每说一句话都要停上半拍，等身后那位老人在斗篷上敲一下。|满屋子只有卢坎没人替他算账，所以他说得最慢。}",
     "effects": [
      "flag a4x_read_kings",
      "xp 120"
     ]
    },
    "fail": {
     "text": "你看了一圈，只看出人人都着急。南王国的一位伯爵还以为你在数他的随从，把手按到了剑上。",
     "effects": [
      "rep escann -1"
     ]
    }
   },
   {
    "text": "劝诸王：先让你上山看过，再定人",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.a4x_read_kings",
       "n": 2,
       "why": "你看清了谁在后头掐日子"
      },
      {
       "if": "rep.escann >= 3",
       "n": 2,
       "why": "东坎诺诸王信你"
      },
      {
       "if": "flag.clarimonde_pact",
       "n": 1,
       "why": "克拉丽蒙德替你说了一句"
      }
     ]
    },
    "ok": {
     "text": "他们答应等你从山上下来再说。克拉丽蒙德说她也去，要带着镐去，温斯坦说他也去，要带着冠去，说完两个人互相看了一眼。",
     "effects": [
      "rep escann +1"
     ]
    },
    "fail": {
     "text": "东坎诺的几位王不肯等。{?flag.charter_emperor:章程上盖的是你的印，他们就限你三个月之内让山上有人。|他们说，监誓人看监誓人的，他们找他们的。}",
     "effects": [
      {
       "if": "flag.charter_emperor",
       "then": [
        "flag a4x_rushed"
       ],
       "else": [
        "rep escann -1"
       ]
      }
     ]
    }
   },
   {
    "text": "把信念给他们听，把缰绳的事摊开讲",
    "effects": [
     "flag bridle_public",
     "world mantle -2",
     "world writ +1",
     "approval liv +1",
     "approval vezina +1"
    ],
    "result": "你念到“誓词是现成的”这一句，屋里一下子没人出声了，头一个开口的是温斯坦，他问结到底解没解，这事谁说了算。瓦洛森的法师咳了一声，没人看他，他只好又咳了一声，满屋子的国王这才一个接一个把头转了过去。",
    "goto": "a4_14"
   },
   {
    "text": "不讲，把信收好",
    "effects": [
     "approval liv -1"
    ],
    "result": "你一个字也没提，散的时候，温斯坦拍了拍你的肩膀，说了句山上见。{?party.liv:卡斯坦在走廊里等着你，她看了看你按着衣兜的那只手，什么也没问。|走廊里的灯一盏接一盏灭了。}",
    "goto": "a4_14"
   }
  ]
 },
 "a4_14": {
  "id": "a4_14",
  "title": "北上",
  "art": "ev_forge",
  "loc": "东坎诺 · 北要塞",
  "date": "1041年花始月",
  "text": [
   "北要塞脚下的雪才刚化，路上全是烂泥。岩石矮人石匠布洛克的工棚还在老地方，只是账本已经换到了第九本，他连头也没抬，开口就先报数。",
   {
    "if": "flag.stair_down",
    "speaker": "布洛克",
    "text": "十六年了。石阶是你们自己砸的，砸得倒很地道，我验过了。如今要上山只有两条路，要么飞上去，要么坐我吊石料的篮子上去。"
   },
   {
    "if": "flag.mended && !flag.stair_down",
    "speaker": "布洛克",
    "text": "十六年，用了石料四千二百车，折了两个徒弟，一个是摔死的，一个是老死的。十道试炼我修好了九道，就剩下誓石，那一块我可修不了，它缺着一角呢。"
   },
   {
    "if": "!flag.mended && !flag.stair_down",
    "speaker": "布洛克",
    "text": "十六年，没人给钱，我就一锤也没动。十道试炼坏了七道半，跟你上回来的时候一个样，那半道的零头我可没给你抹啊。"
   },
   {
    "if": "item.oathstone_chip >= 1",
    "text": "他一看见你手里的东西，笔就停了，说：“就是这一角。你看这断口是旧的，这二十年它是搁在谁的兜里了？”"
   },
   {
    "if": "is.dwarf",
    "text": "他同你讲的是矮人话，账也报得更细了，连哪一车石料里掺了砂子都报了出来。"
   },
   {
    "if": "is.god",
    "speaker": "布洛克",
    "text": "巴尔加尔是先把活干完，人死了，又过了几百年才封的神。像你这样活着就封了的，工期我可没法算哪。"
   },
   {
    "if": "flag.a4x_rushed",
    "text": "东坎诺的信使一天要来催两回，看来是没工夫歇了。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，我都快四十了，这座山还是第二回爬。上一回嘛，我还以为自己是来盯着您的呢。"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "第十一本本子我留在山下了，第十二本带着。山上说的话都得算数，照理说，那才是最该记下来的呀。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "我就不上去啦，对不住。屠夫原那桩事，就是从那座山上下来的人干的。汤我在山下给你们热着，你们一下来就有得喝。"
   },
   {
    "if": "party.liv",
    "text": "卡斯坦把酒囊递给了你，自己却没喝。她的翅根已经全灰了。"
   },
   {
    "if": "party.liv && !flag.liv_told",
    "speaker": "卡斯坦",
    "text": "你同我说句实话吧，山上的那个结，到底解了没有？"
   },
   {
    "if": "party.liv && flag.liv_told",
    "speaker": "卡斯坦",
    "text": "缰绳的事我都知道了，我就问你一句，那个结你是打算解呢，还是不打算解？"
   }
  ],
  "first": [
   "codex trialmount",
   "codex trials",
   {
    "if": "party.liv",
    "then": [
     "quest liv_claim stage 3"
    ]
   },
   {
    "if": "flag.bridle_public",
    "then": [
     "flag liv_told"
    ]
   }
  ],
  "shop": {
   "name": "石匠的库房",
   "blurb": "布洛克按斤报价，从不讲价，用的秤也是他自己校过的。",
   "stock": [
    "hold_plate",
    "hold_chain",
    "hold_warhammer",
    "ward_runestone",
    "vigor_runestone",
    "superior_healing_potion",
    "greater_healing_potion",
    "stoneskin_potion"
   ]
  },
  "choices": [
   {
    "text": "把缰绳的事从头到尾告诉她",
    "if": "party.liv && !flag.liv_told && !flag.a4x_liv_answered",
    "once": true,
    "effects": [
     "flag liv_told",
     "flag a4x_liv_answered",
     "approval liv +1"
    ],
    "result": "你从誓词讲到沼泽堡，又从那半句话讲到河里捞上来的那封信。她听完了，把酒囊拿回去喝了一大口，说了句“那我爹那三十七年，也是这么叫人牵着的”，就没再问别的。"
   },
   {
    "text": "只说：上去看了才清楚",
    "if": "party.liv && !flag.liv_told && !flag.a4x_liv_answered",
    "once": true,
    "effects": [
     "flag a4x_liv_answered",
     "approval liv -1"
    ],
    "result": "她看了你一会儿，说：“行，那就上去看。”这回酒囊她自己收起来了。"
   },
   {
    "text": "在工棚里歇半天",
    "if": "!flag.a4x_rushed",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "工棚里的炉子烧的是垫在碎石料底下的松木，烟大得很。布洛克的徒弟给你们每人盛了一碗肉，是架在松塔上炖出来的，至于是什么肉，他倒没报。"
   },
   {
    "text": "上山",
    "goto": "a4_15"
   }
  ]
 },
 "a4_15": {
  "id": "a4_15",
  "title": "第二次上山",
  "art": "ev_wex_precipice",
  "loc": "东坎诺 · 试炼山",
  "text": [
   {
    "if": "flag.mended && !flag.stair_down",
    "text": "石阶是新凿的，棱角还割手，前三道试炼得照规矩重新走一遍。"
   },
   {
    "if": "!flag.mended && !flag.stair_down && party.liv",
    "text": "石阶还是断的。卡斯坦先飞上去往下放绳子，跟十六年前一样，只是这一回她放得慢多了。"
   },
   {
    "if": "!flag.mended && !flag.stair_down && !party.liv",
    "text": "石阶还是断的。十六年前有人替你们放绳子，这一回可得自己搭了。"
   },
   {
    "if": "flag.stair_down && party.liv",
    "text": "石阶已经没了，只剩下一面崖。卡斯坦一趟带一个人上去，带了三趟，也骂了三趟。"
   },
   {
    "if": "flag.stair_down && !party.liv",
    "text": "石阶已经没了，只剩下一面崖。布洛克把吊石料的篮子借了出来，一回只能吊一个人，足足吊了一上午。"
   },
   "头一道试炼就在山脚那块岩石底下，要在这儿喊一嗓子，一直喊到北要塞的守军应声才算数。第二道是半坡上的石桌，桌面冰凉，手指头划过去就留下一条白线，第三道在山腰的洞里，洞里的炉火自己不会灭，得在这儿给矮人打一件礼物。",
   "誓石是第四道，立在更上头林子里的一块空地上。",
   {
    "if": "flag.iacob_pardoned",
    "text": "空地上已经坐着一个人了，是亚科布。他今年七十九岁，随身带着一包凿子，朝你们抬了抬手，就跟在自己家里招呼客人似的。"
   },
   {
    "if": "is.caster",
    "text": "越往上走，耳朵里越像有人在说话，回回都是说到一半就断了。你倒听得出那半句话是冲着什么去的，冲的是誓词里的“我的土地与我的子民”。"
   },
   {
    "if": "is.flyer",
    "text": "你有翅膀，绳子是留给别人用的。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "翅膀根疼啊，上回我可是一口气飞上来的。你也别笑，你那膝盖响了一路，我全听着呢！"
   }
  ],
  "choices": [
   {
    "text": "抓着绳子攀过那段断阶",
    "if": "!flag.mended && !flag.stair_down && !is.martial && !is.flyer",
    "once": true,
    "effects": [
     "flag a4x_t0"
    ],
    "check": {
     "skill": "athletics",
     "alt": [
      "acrobatics"
     ],
     "dc": 15
    },
    "ok": {
     "text": "绳子勒得手生疼，断阶底下空着四十丈，你硬是没往下看，一口气攀了过去。",
     "effects": [
      "var a4x_trials +1"
     ]
    },
    "fail": {
     "text": "你吊在半当中荡了三个来回，膝盖还撞在了崖壁上，最后是上头的人像拽水桶一样把你拽上去的。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "一个人把绳桥拉起来",
    "tag": "武艺",
    "if": "!flag.mended && !flag.stair_down && is.martial && !is.flyer",
    "once": true,
    "effects": [
     "flag a4x_t0",
     "var a4x_trials +1"
    ],
    "result": "你把绳头在腰上绕了两圈，一个人就把整座绳桥拽直了，又在石桩上拴死。后头的人是走着过来的，阿德蕾西娅走在桥上，还顺便数了数桥板。"
   },
   {
    "text": "自己飞过断阶",
    "tag": "有翅膀",
    "if": "!flag.mended && !flag.stair_down && is.flyer",
    "once": true,
    "effects": [
     "flag a4x_t0",
     "var a4x_trials +1"
    ],
    "result": "断阶底下空着四十丈，你扇了三下翅膀就过去了，又回过头来替后面的人把绳子拴牢。"
   },
   {
    "text": "头一道：朝北要塞喊阵",
    "once": true,
    "effects": [
     "flag a4x_t1"
    ],
    "check": {
     "skill": "performance",
     "alt": [
      "intimidation"
     ],
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.mended",
       "n": 2,
       "why": "北要塞这回有人守着"
      }
     ]
    },
    "ok": {
     "text": "{?flag.mended:北要塞的垛口上有人应声了，起先只有一个，后来成了一排，要知道十六年前，这里可是没人应的。|你的声音撞在北要塞空荡荡的垛口上，又弹了回来，好在山把回声也算作应声。}",
     "effects": [
      "var a4x_trials +1"
     ]
    },
    "fail": {
     "text": "你把嗓子喊劈了，山不认，还从崖上落了你一嘴石渣。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "第二道：在石桌上描疆界",
    "once": true,
    "effects": [
     "flag a4x_t2"
    ],
    "check": {
     "skill": "history",
     "dc": 15,
     "adv": "flag.map_drawn"
    },
    "ok": {
     "text": "{?flag.map_drawn:你当年画的那条线还留在桌上，白白的，一点也没淡，你照着它描了一遍，分毫不差。|眼下的疆界你画对了，轮到“将来的”那一条，你的手指头停了一下才落下去。}",
     "effects": [
      "var a4x_trials +1"
     ]
    },
    "fail": {
     "text": "你把乌霜边区画到南王国里去了。石桌冰了你一下，从指尖一直麻到了肩膀。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "第三道：在锻炉给矮人打一件礼物",
    "if": "!is.dwarf && class != 'artificer'",
    "once": true,
    "effects": [
     "flag a4x_t3"
    ],
    "check": {
     "skill": "athletics",
     "alt": [
      "sleight"
     ],
     "dc": 16
    },
    "ok": {
     "text": "你打了一只带盖的铁杯，盖子好歹合得上。布洛克后来看了看，说杯壁厚薄不匀，不过还是收下了。",
     "effects": [
      "var a4x_trials +1"
     ]
    },
    "fail": {
     "text": "你打出来的那件东西，连自己也叫不上名字，手背还叫火星燎了一下。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "第三道：给矮人打一件礼物",
    "tag": "矮人",
    "if": "is.dwarf",
    "once": true,
    "effects": [
     "flag a4x_t3",
     "var a4x_trials +1"
    ],
    "result": "矮人给矮人打礼物，这一道等于是白送的。你打了一把校秤用的小砝码，还在底下錾上了今年的年份。"
   },
   {
    "text": "第三道：给矮人打一件礼物",
    "tag": "奇械师",
    "if": "class == 'artificer' && !is.dwarf",
    "once": true,
    "effects": [
     "flag a4x_t3",
     "var a4x_trials +1"
    ],
    "result": "炉子还是一千年前的炉子，拉风箱却是你的老本行，你打了一只会自己合盖的铁杯，一合盖就咔的一声。布洛克后来把它拆开，又原样装了回去，什么也没说。"
   },
   {
    "text": "往上走，去誓石",
    "req": "flag.a4x_t1 && flag.a4x_t2 && flag.a4x_t3 && (flag.mended || flag.stair_down || flag.a4x_t0)",
    "reqText": "前头的路和三道试炼还没走完",
    "goto": "a4_16"
   }
  ],
  "next": "a4_16"
 },
 "a4_16": {
  "id": "a4_16",
  "title": "誓石前",
  "loc": "试炼山 · 誓石",
  "text": [
   "誓石立在林子里的一块空地上，有一人半高，一道裂缝从顶上一直劈到了根。历代卡斯坦的誓词一位挨着一位刻在上面，头一句全都一样，阿德蕾西娅数了数，一共五十三段，最底下还空着一行。",
   "石头的右下角缺了一块，只有指甲盖大，断口是旧的。",
   {
    "if": "!flag.knot_cut",
    "text": "裂缝里有东西在流，细细的一股，要贴近了才听得见，那是一句话的前半截。"
   },
   {
    "if": "flag.knot_cut",
    "text": "裂缝里是空的，那半句话早在十六年前就叫你亲手扯下来了。"
   },
   {
    "if": "flag.knot_alarian && !flag.knot_cut",
    "text": "十六年前，阿拉里安·歌堡在裂缝两边各钉了一根银弦，那半句话顺着弦绕了十六年，如今只剩最后一股还没松开。"
   },
   {
    "if": "flag.knot_ravens && !flag.knot_alarian && !flag.knot_cut",
    "text": "十六年前，先知会的人在石根底下埋了一圈鸦骨，那半句话叫他们一股一股地引了出去，如今只剩下最后一股。"
   },
   {
    "if": "flag.knot_iacob && !flag.knot_alarian && !flag.knot_ravens && !flag.knot_cut",
    "text": "亚科布的凿痕沿着裂缝排了一路，间距分毫不差。{?flag.iacob_pardoned:他|他是贤者会的人押上来的，}说只剩最后一股了，只要把缺角放回去，剩下的由他来收尾。"
   },
   {
    "if": "!flag.knot_alarian && !flag.knot_ravens && !flag.knot_iacob && !flag.knot_cut",
    "text": "这十六年里没人动过那半句话，它还原封不动地挂在上头。"
   },
   {
    "if": "flag.iacob_pardoned",
    "speaker": "亚科布",
    "text": "监誓人哪，我这辈子背叛过一个人，也修过一座山，您给看看，这后一样抵不抵得了前一样呢？"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "十一只，在山下还是十二只呢。少了的那一只要么是死了，要么就是已经蹲在石头后面听着了。"
   }
  ],
  "first": [
   "codex oathstone",
   "codex bridle"
  ],
  "next": "a4_16b",
  "choices": [
   {
    "text": "把碎片按回缺口",
    "if": "item.oathstone_chip >= 1 && !flag.knot_cut && (flag.knot_alarian || flag.knot_ravens)",
    "effects": [
     "flag knot_cut",
     "item -oathstone_chip"
    ],
    "result": "碎片自己吸了上去，合得严丝合缝，连指甲都插不进去。石头里那股细流顿了一下，最后一股也松开了，就像有人把一句说了二十年的话又咽了回去，空地上有只鸟叫了一声。",
    "goto": "a4_16b"
   },
   {
    "text": "把碎片按回缺口",
    "if": "item.oathstone_chip >= 1 && !flag.knot_cut && flag.knot_iacob && !flag.knot_alarian && !flag.knot_ravens && ((party.vezina && flag.vezina_eye) || flag.knows_word)",
    "effects": [
     "flag knot_cut",
     "item -oathstone_chip"
    ],
    "result": "碎片吸了上去，亚科布下最后一凿的时候，{?flag.knows_word:你认出了那半个字的走向|薇齐娜的那只眼转了过去}，原来他留了一个活扣。你一把按住他的手腕，他看了你一会儿，把凿子倒过来递给了你，说：“手艺人的毛病，总想给自己留个线头。”这一回才是真解了。",
    "goto": "a4_16b"
   },
   {
    "text": "把碎片按回缺口",
    "if": "item.oathstone_chip >= 1 && !flag.knot_cut && flag.knot_iacob && !flag.knot_alarian && !flag.knot_ravens && !((party.vezina && flag.vezina_eye) || flag.knows_word)",
    "effects": [
     "item -oathstone_chip"
    ],
    "check": {
     "skill": "insight",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "var.a4x_trials >= 3",
       "n": 2,
       "why": "这座山今天认你"
      }
     ]
    },
    "ok": {
     "text": "碎片吸了上去，亚科布下最后一凿的时候，手腕多转了半圈，你一把按住了他。他看了你一会儿，把凿子倒过来递给了你，说：“手艺人的毛病，总想给自己留个线头。”这一回才是真解了。",
     "effects": [
      "flag knot_cut"
     ],
     "goto": "a4_16b"
    },
    "fail": {
     "text": "碎片吸了上去，亚科布收了最后一凿，吹了吹石粉，石头里那股细流顿了一下，就没声了。他说了句“解完了”，把凿子一把一把包了起来，空地上有只鸟叫了一声。",
     "effects": [
      "flag iacob_loop"
     ],
     "goto": "a4_16b"
    }
   },
   {
    "text": "把碎片按回缺口",
    "if": "item.oathstone_chip >= 1 && (flag.knot_cut || (!flag.knot_alarian && !flag.knot_ravens && !flag.knot_iacob))",
    "effects": [
     "item -oathstone_chip"
    ],
    "result": "碎片自己吸了上去，石头合上了，{?flag.knot_cut:可里头本来就是空的，合上了也还是空的，布洛克拿指节敲了敲，说了声“实心”。|可没人解过那半句话，它自己是不会走的，所以它还挂在上头，只是如今挂在一块整石头上了。}",
    "goto": "a4_16b"
   },
   {
    "text": "不放回去，把碎片揣回兜里",
    "if": "item.oathstone_chip >= 1",
    "effects": [
     "rep escann -1"
    ],
    "result": "你把手从缺口边上收了回来，布洛克在账本上划了一道，记的是“缺角，仍缺”。温斯坦的人看在眼里，脸色很不好看。",
    "goto": "a4_16b"
   },
   {
    "text": "摸一摸那个缺口",
    "if": "item.oathstone_chip < 1",
    "effects": [
     "xp 50"
    ],
    "result": "缺口摸上去是凉的，边上磨得很滑，想来这二十年里上山的人都摸过这一处。少的那一角不在你手上，这块石头今天是合不上了。",
    "goto": "a4_16b"
   }
  ]
 },
 "a4_16b": {
  "id": "a4_16b",
  "title": "第五十四位",
  "text": [
   {
    "if": "!party.liv",
    "text": "空地上没有卡斯坦。石头底下的泥里还留着一圈爪印，那是十六年前踩下的，叫雨水泡得都发圆了，今天并没有添新的。"
   },
   {
    "if": "party.liv",
    "text": "卡斯坦在誓石前头站住了，把酒囊解下来搁在地上，你还是头一回见她上山身上不带酒味。她收翅膀的时候，得拿手扶一下才收得拢。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "这块石头我等了二十六年啦。它可是谁也收买不了的，光凭这一点，就比你们哪个都强！"
   },
   {
    "if": "party.liv && (flag.knot_cut || flag.iacob_loop)",
    "speaker": "卡斯坦",
    "text": "结解了，我听见了。那我就上去问它一句，行，还是不行！"
   },
   {
    "if": "party.liv && !flag.knot_cut && !flag.iacob_loop && flag.liv_told",
    "text": "缰绳的事她全都知道。她盯着裂缝里那半句话，既不往前走，也不回头。"
   },
   {
    "if": "party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told",
    "text": "石头上还挂着什么东西，她并不知道。她正在背誓词，嘴唇一动一动的，已经背到了“至我寿终之日”那一句。"
   },
   {
    "if": "party.liv && flag.vow_liv",
    "text": "十六年前就在这座山上，你答应过让她试一试，而山上说过的话是得算数的。"
   },
   {
    "if": "party.liv && is.god",
    "speaker": "卡斯坦",
    "text": "你可别替它答啊。你一开口，我这二十六年就算白等了。"
   }
  ],
  "next": "a4_16c",
  "choices": [
   {
    "text": "让开，让她把手按上去",
    "if": "party.liv && (flag.knot_cut || flag.iacob_loop) && (flag.golem_liv || world.mantle >= 6)",
    "effects": [
     "flag a4x_liv_passed",
     "approval liv +2"
    ],
    "result": "规矩是这样的，石头认不认，手心自己知道。她把手按了上去，石头是烫的，满空地都闻得见羽毛烧焦的味儿，等她回过头来，那张脸你从来没见过，她不嚷了。",
    "goto": "a4_16c"
   },
   {
    "text": "让开，让她把手按上去",
    "if": "party.liv && (flag.knot_cut || flag.iacob_loop) && !(flag.golem_liv || world.mantle >= 6)",
    "effects": [
     "approval liv +1"
    ],
    "result": "规矩是这样的，石头认不认，手心自己知道。她把手按了上去，石头是凉的，她等了一会儿，又等了一会儿，然后笑了起来，笑得林子里的鸟全都惊飞了。“它不要我，行啊，老娘问过了。”她说着捡起酒囊，这一回是真喝了。",
    "goto": "a4_16c"
   },
   {
    "text": "退开三步，等她自己拿主意",
    "if": "party.liv && !flag.knot_cut && !flag.iacob_loop && flag.liv_told",
    "effects": [
     "flag a4x_liv_stood",
     "approval liv +3"
    ],
    "result": "她在石头前头站了一整夜，没坐下，也没喝酒。天亮的时候她走了回来，从地上捡起酒囊，说了句“老娘不给人当马”，灌了一大口，又把酒囊递给你：“你早早就告诉了我，这笔账得记你一功啊，掌玺大臣。”",
    "goto": "a4_16c"
   },
   {
    "text": "现在把缰绳的事全告诉她",
    "if": "party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told",
    "effects": [
     "flag liv_told",
     "flag a4x_liv_stood",
     "approval liv +1"
    ],
    "result": "你从誓词讲到沼泽堡，又从那半句话讲到河里捞上来的那封信。她听完给了你一翅膀，打得倒不重，说了句“这话你憋了一路啊”，然后在石头前头站了一整夜，天亮了才回来捡酒囊，说：“老娘不给人当马。”",
    "goto": "a4_16c"
   },
   {
    "text": "什么也不说，看着她走上去",
    "if": "party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told && (flag.golem_liv || approval.liv >= 5)",
    "effects": [
     "flag castan_crowned",
     "flag castan_alive",
     "flag castan_liv",
     "flag liv_bridled",
     "world mantle =10",
     "unflag mountain_sealed",
     "companion -liv"
    ],
    "result": "这段誓词她背了二十六年，念得一个字都不错，念到“至我寿终之日”的时候，石头烫了起来，那股细流顺着她的手腕往上爬，钻进羽毛里不见了，可她什么也没觉出来。她回过头冲着你喊：“五十四世，这回是真的啦！”",
    "goto": "a4_17"
   },
   {
    "text": "什么也不说，看着她走上去",
    "if": "party.liv && !flag.knot_cut && !flag.iacob_loop && !flag.liv_told && !(flag.golem_liv || approval.liv >= 5)",
    "effects": [
     "flag liv_dead",
     "companion -liv"
    ],
    "result": "她刚念到“至我寿终之日”，石头亮了一下，当场就把这一句兑了。她是站着死的，手还按在石头上，翅膀张开了一半，阿德蕾西娅走过去捡起酒囊，把塞子塞好，放在了她脚边。",
    "goto": "a4_16c"
   },
   {
    "text": "拦在她和石头当中，不让她试",
    "if": "party.liv",
    "req": "!flag.vow_liv",
    "reqText": "你在山上答应过她",
    "effects": [
     "flag liv_north",
     "companion -liv"
    ],
    "result": "她盯着你看了很久，比哪一回都久，然后说：“掌玺大臣，你给革职了。”她直接从空地上飞了起来，往北去了，连酒囊都没回头拿。",
    "goto": "a4_16c"
   }
  ]
 },
 "a4_16c": {
  "id": "a4_16c",
  "title": "山",
  "text": [
   "空地上的人越聚越多。克拉丽蒙德是带着镐上来的，一把鹤嘴镐，同卡林达尔一起背在背上，卢坎站得离石头最近，两只手背在身后，布洛克则抱着他的账本。",
   {
    "speaker": "克拉丽蒙德",
    "text": "我砍下去的时候，他的话才说到一半。你们要是再请一位上来，那后半句早晚会有人替他说完的。"
   },
   {
    "speaker": "布洛克",
    "text": "立人，一句话的事。毁阶，得四十个人干上三天。下山嘛，不要钱。这三样的价我都给你们报过了。"
   },
   {
    "if": "flag.knot_cut || flag.iacob_loop",
    "text": "结已经解了，今天不管谁立誓，誓都归他自己。"
   },
   {
    "if": "!flag.knot_cut && !flag.iacob_loop",
    "text": "那半句话还挂在石头上。这时候谁要是上去立誓，就等于把脖子伸进了一根绳套里，眼下是还没人来牵，可等着来牵的那一位写的信，你是读过的。"
   },
   {
    "if": "flag.garrec_king && !flag.stair_down",
    "text": "加雷克站在林子边上，没有往前走。他说他等得起，反正他父亲等得更久。"
   },
   {
    "if": "flag.a4x_liv_passed && party.liv",
    "text": "卡斯坦的手心还烫着，她一句话也不说，只看着你到底选谁。"
   },
   {
    "if": "flag.liv_dead",
    "text": "卡斯坦躺在石头底下，身上盖着乌翼兵团的旗，她手按过的那一处，谁也不敢去碰。"
   },
   {
    "if": "flag.golem_forever",
    "text": "第九道的石像还跪在上头的石阶上，它跪的是你。别人想过那一道，得由你当着众人的面叫它起来才行。"
   },
   {
    "if": "flag.charter_emperor",
    "text": "章程上盖的是你的印，东坎诺的兵眼下就在山下等着一位皇帝。"
   },
   {
    "if": "flag.stair_down",
    "text": "石阶十六年前就没了，今天能站到这块空地上来的人选，只剩下飞得上来的，再就是你。"
   }
  ],
  "choices": [
   {
    "text": "立加雷克·乌霜",
    "if": "flag.garrec_king && !flag.stair_down",
    "effects": [
     "flag castan_crowned",
     "flag castan_alive",
     "flag castan_garrec",
     "world mantle =10",
     "unflag mountain_sealed",
     "rep dragon +2",
     "rep moon -1",
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ]
     }
    ],
    "result": "加雷克把手按上去的时候，就像是按在他父亲的棺盖上。{?flag.golem_forever:你先上去叫第九道的石像起来，它果然起来了，从此人人都说这位皇帝是你给的。|}他念到“至我寿终之日”停了一下，还是念完了，石头跟着发起烫来，{?flag.knot_cut || flag.iacob_loop:烫的是他自己立的誓。|那股细流也顺着他的手腕爬了上去，他还以为立誓本来就是这个滋味。}",
    "goto": "a4_17"
   },
   {
    "text": "立卢坎·西卢里昂",
    "if": "!flag.stair_down",
    "effects": [
     "flag castan_crowned",
     "flag castan_alive",
     "flag castan_lucan",
     "world mantle =10",
     "unflag mountain_sealed",
     "rep escann +1",
     "rep moon +1",
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ]
     }
    ],
    "result": "卢坎把背在身后的手拿了出来，手心里全是汗。{?flag.golem_forever:你先上去叫第九道的石像起来，它果然起来了，从此人人都说这位皇帝是你给的。|}誓词他念了两遍，人类的话念一遍，精灵的话又念一遍，两遍石头都认了，{?flag.knot_cut || flag.iacob_loop:念完了，他回过头去找他娘站的地方。|那股细流也顺着他的手腕爬了上去，他回过头去找他娘站的地方，脸上还带着笑。}",
    "goto": "a4_17"
   },
   {
    "text": "立卡斯坦",
    "if": "flag.a4x_liv_passed && party.liv",
    "effects": [
     "flag castan_crowned",
     "flag castan_alive",
     "flag castan_liv",
     "world mantle =10",
     "unflag mountain_sealed",
     "rep dragon +1",
     "rep escann -1",
     {
      "if": "!flag.knot_cut",
      "then": [
       "flag liv_bridled"
      ]
     },
     "companion -liv"
    ],
    "result": "这段誓词她背了二十六年，从头念到尾，一个字都不错。{?item.ebonsteel_crown >= 1:乌钢冠是你从地砖底下带出来的，冠圈里侧磨得发亮，她戴上去不大不小正合适。|冠是布洛克拿铁条现箍出来的，箍大了一指，她说就这么戴着吧。}温斯坦的脸都青了，她还冲他举了举酒囊，问他要不要喝一口。",
    "goto": "a4_17"
   },
   {
    "text": "自己把手按上去",
    "if": "flag.golem_pc && is.mortal",
    "effects": [
     "flag castan_crowned",
     "flag castan_alive",
     "flag castan_pc",
     "world mantle =10",
     "unflag mountain_sealed",
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ]
     }
    ],
    "result": "别人发誓，你已经看了十九年，可轮到自己，头一句就卡了一下。石头发起烫来，把誓词一个字一个字烙在了你身上，{?flag.knot_cut || flag.iacob_loop:阿德蕾西娅在一旁数着你念了多少个字。|那股细流也顺着你的手腕爬了上来，是凉的，那封信你是读过的，可你还是念完了。}",
    "goto": "a4_17"
   },
   {
    "text": "自己立誓",
    "tag": "神",
    "if": "flag.golem_pc && is.god",
    "effects": [
     "flag castan_crowned",
     "flag castan_alive",
     "flag castan_pc",
     "world mantle =10",
     "unflag mountain_sealed",
     "var god_acts +1",
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ]
     }
    ],
    "result": "誓词里说的是“至我寿终之日”，你念出这一句的时候，满空地的人都在心里算着同一笔账，{?flag.knot_cut || flag.iacob_loop:这可是一位不会死的卡斯坦。|这可是一位不会死的卡斯坦，偏偏又立在没解开的结上，要知道那个字管的是誓，它才不管你是不是神。有人找这样一个人，已经找了三十年了。}布洛克把账本合上了。",
    "goto": "a4_17"
   },
   {
    "text": "朝克拉丽蒙德点头：毁阶",
    "if": "!flag.stair_down && (flag.clarimonde_pact || rep.escann >= 3)",
    "effects": [
     "flag mountain_sealed",
     "world mantle =0",
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ]
     }
    ],
    "result": "克拉丽蒙德把卡林达尔解下来交给扈从，头一镐是她自己抡的。“我砍过一位自封的王，”她说，“有了这一镐，往后的人就用不着再砍了。”石屑落在卢坎的靴面上，他只是看着，也不躲。",
    "goto": "a4_17"
   },
   {
    "text": "出两百金冠，雇布洛克的人毁阶",
    "if": "!flag.stair_down && !(flag.clarimonde_pact || rep.escann >= 3)",
    "cost": {
     "gold": 200
    },
    "effects": [
     "flag mountain_sealed",
     "world mantle =0",
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ]
     }
    ],
    "result": "克拉丽蒙德信不过你，她的镐不肯借。布洛克收下两百金冠，在账本上写了一笔“拆，工期三天，零头抹了”，头一镐是他徒弟抡的，克拉丽蒙德在边上从头看到了尾，一镐也没帮。",
    "goto": "a4_17"
   },
   {
    "text": "下山，什么都不动",
    "effects": [
     {
      "if": "party.liv && flag.a4x_liv_passed",
      "then": [
       "flag liv_north",
       "companion -liv"
      ],
      "else": [
       "rep escann -1"
      ]
     }
    ],
    "result": "你转过身往山下走，身后有人喊了你一声监誓人，你也没回头。石头还在，石阶还在，空着的那一行也还空在那里。",
    "goto": "a4_17"
   }
  ]
 },
 "a4_17": {
  "id": "a4_17",
  "title": "下山",
  "loc": "东坎诺 · 北要塞山脚",
  "text": [
   "消息比你们先下了山，北要塞一口气放出去十一只信鸽，这数是阿德蕾西娅数的。",
   {
    "if": "flag.castan_crowned && flag.castan_garrec",
    "text": "皇帝加雷克的头一道敕令只有一行，说要给他父亲补办一场国葬，日子就定在今年的真霜月十四，也就是沼泽堡的那一天。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_lucan",
    "text": "皇帝卢坎的头一道敕令用了两种文字，人类的写一遍，精灵的写一遍。抄写的人说这还是头一回，一连抄错了三张。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_liv",
    "text": "皇帝卡斯坦的头一道敕令是这么说的，往后的卡斯坦过完了十道试炼，还得再加一道，那就是喝酒喝赢她。她嚷得整座山都听得见。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_liv && flag.liv_bridled && !flag.iacob_loop",
    "text": "她自己什么也没觉出来。可你是读过那封信的，看得出她手腕上多了点什么。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_pc",
    "text": "头一道敕令还等着你落笔呢。书记官举着印泥站了半个钟头，问你皇帝的印和监誓人的印，到底用哪一枚。"
   },
   {
    "if": "flag.castan_crowned",
    "text": "立了誓的人还得接着往上走，把后六道走完。先要往“人类之冠”上添一块石头，再去劝和两个吵了三百年的林中精怪，然后同一头双足飞龙交上朋友。接下来得绕着一块石头跳十圈，当年坎雷克的师父也跳过，谁也不知道他跳的时候心里在想什么。跳完了就是第九道的石像，最后还要进林子猎一头兽，拿它身上的东西亲手做一件器物，做什么都行，只是得让布洛克验过。"
   },
   {
    "if": "flag.castan_crowned && flag.golem_forever && !flag.castan_pc",
    "text": "第九道的石像是你当着众人的面叫起来的，它起身的时候，膝盖底下的石阶已经跪出了两个坑。"
   },
   {
    "if": "!flag.castan_crowned && flag.mountain_sealed && !flag.stair_down",
    "text": "石阶是从上往下一级一级敲掉的，整整敲了三天，最后一级是克拉丽蒙德亲手敲的，敲完她把镐留在了山脚。"
   },
   {
    "if": "!flag.castan_crowned && flag.stair_down",
    "text": "山还是十六年前你们封起来的那个样子，一面崖，一块石头，没有路。"
   },
   {
    "if": "!flag.castan_crowned && !flag.mountain_sealed",
    "text": "山还是老样子，石阶在，誓石也在，就是没人上去立誓。诸王各回各的帐子，走的时候谁也没同谁道别。"
   }
  ],
  "first": [
   "quest mountain done",
   {
    "if": "flag.liv_north || flag.liv_dead",
    "then": [
     "quest liv_claim fail"
    ],
    "else": [
     "quest liv_claim done"
    ]
   },
   {
    "if": "flag.charter_emperor && !flag.castan_crowned",
    "then": [
     "unflag charter_emperor",
     "flag charter_league",
     "world mantle -3",
     "flag a4x_charter_fell"
    ]
   }
  ],
  "choices": [
   {
    "text": "绕着那块石头跳十圈",
    "if": "flag.castan_crowned && flag.castan_pc",
    "once": true,
    "check": {
     "skill": "acrobatics",
     "dc": 12
    },
    "ok": {
     "text": "你跳了十圈，一圈不多，一圈不少，阿德蕾西娅在边上替你数着。可怪人卡斯坦当年到底图个什么，你跳完了也没弄清。",
     "effects": [
      "xp 100"
     ]
    },
    "fail": {
     "text": "跳到第七圈，你踩着了自己的斗篷，照规矩得从头再跳。全队的人都在看着，布洛克还把这件事记进了账本，写的是“皇帝，十七圈”。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "下到山脚",
    "goto": "a4_17b"
   }
  ]
 },
 "a4_17b": {
  "id": "a4_17b",
  "title": "山脚",
  "text": [
   {
    "if": "flag.a4x_charter_fell",
    "text": "章程上写的那位“皇帝”到头来没有着落。消息送到洛伦泰内，太后笑了一下，叫人把“同盟”那一份重新誊了一遍，盖的还是你的印。"
   },
   {
    "if": "flag.liv_north",
    "text": "卡斯坦往北飞之前，先在山顶上绕了一圈，绕得很低，北要塞的人全都看见了，绕完她就走了。"
   },
   {
    "if": "flag.liv_north && flag.harpies_freed",
    "text": "后来有人说，布勒瓦尔兽苑里放出来的那几个锡亚丹姐妹，就是跟着她一道往北去的。"
   },
   {
    "if": "party.liv && is.god && flag.castan_pc",
    "speaker": "卡斯坦",
    "text": "你上去了，那我算什么呢？"
   },
   {
    "if": "party.liv && is.god && !flag.castan_pc",
    "speaker": "卡斯坦",
    "text": "你连这个都不要啊？那你到底想要什么！"
   },
   {
    "if": "party.liv && is.mortal",
    "speaker": "卡斯坦",
    "text": "我已经问过它啦。往后谁再同我提这座山，我先请他喝酒，喝完了再揍他一顿！"
   },
   {
    "if": "party.valeran && is.mortal",
    "speaker": "瓦勒兰",
    "text": "恕我直言，山上说的话都得算数，这条规矩要是搬到山下来啊，恩特本的老爷怕是有一半得改行了。"
   },
   {
    "if": "party.valeran && is.god",
    "speaker": "瓦勒兰",
    "text": "恕我直言，阁下，我向人发过誓，可从没向神发过。今天在山上我总算想通了一半，您说的话是算数的，可天底下没有哪一块石头管得着您。"
   },
   {
    "if": "party.vezina && is.god",
    "text": "薇齐娜在本子上写了一行字，又划掉了。你瞥见划掉的那两个字是“神立”，旁边改成了“要是”。"
   },
   {
    "if": "party.barry",
    "text": "巴里的汤已经热过三回了。山上的事他一句没问，先给每人盛了一碗，连卡斯坦坐过的那只凳子上也搁了一碗。"
   },
   {
    "if": "is.god",
    "speaker": "阿德蕾西娅",
    "text": "大人，石头上一共五十三段誓词，没有哪一段是神立的，我都数过了。"
   },
   "阿德蕾西娅把你的印匣擦了一遍，放下了，又拿起来擦了一遍。她今年已经十五岁了。",
   {
    "speaker": "阿德蕾西娅",
    "text": "大人，扈从的誓词我背了一年了，一共四十一个字，今天能不能就让我立了？"
   }
  ],
  "choices": [
   {
    "text": "答应，就在山脚听她立誓",
    "effects": [
     "flag a4x_squire_sworn",
     "xp 100"
    ],
    "result": "四十一个字，她一个也没念错，立完了她问你：“现在我说的话，是不是也得算数了？”你告诉她，在这座山脚下，谁说的话都算数，她点了点头，把这一句也记了下来。",
    "goto": "a4_18"
   },
   {
    "text": "叫她再等一年",
    "effects": [
     "rest short"
    ],
    "result": "她点了点头，掰着指头算了算，说：“三百六十五天，我数着。”说完就去给你们铺铺盖了，铺得同往常一样平整。",
    "goto": "a4_18"
   }
  ]
 },
 "a4_18": {
  "id": "a4_18",
  "title": "1041 年花始月",
  "art": "ev_blank",
  "loc": "东坎诺 · 北要塞 · 大路口",
  "date": "1041年花始月",
  "text": [
   "十字军的头一路，是在花始月的最后一个礼拜出发的。",
   {
    "if": "flag.god_crusade",
    "text": "旗上绣的是你的神号。绣工赶得太急，有两面把字都绣错了，可也照样打着上了路。"
   },
   {
    "if": "!flag.god_crusade && flag.charter_emperor",
    "text": "打的是卡斯坦的旗，乌钢色的，在北要塞的库房里压了二十六年，一抖开就是一股樟脑味。"
   },
   {
    "if": "!flag.god_crusade && flag.charter_league",
    "text": "打的是自由诸国同盟的旧旗。洛伦特的玫瑰排在头一面，至于第二面该是谁家的，后头的人一直吵到了开拔。"
   },
   {
    "if": "!flag.god_crusade && flag.charter_writ",
    "text": "走在最前头的是瓦洛森的法师，手里拿的是令状，并没有拿旗，后头的兵隔着十步远跟着。"
   },
   {
    "if": "!flag.god_crusade && flag.charter_muster",
    "text": "没有总旗，各家打各家的旗，走到路口互相让了老半天，谁也不肯走在前头，可谁也不肯落在后头。"
   },
   "贾赫的回信也是这个礼拜到的，晚了足有半年，叠得只有巴掌大，上头盖着日轮的印。",
   {
    "cls": "letter",
    "text": "“收到信的时候我人在东边。尼奇默上山那天我在场，他是自己往上走的，没有人会往山上逃。科乌里亚的事我回不来了，谁管用，就让谁去管吧。”"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "恕我直言，这封信比帐子里那四份章程加在一起还短，可也比它们都管用啊。"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "要是这一路真能打到渡鸦山，我说的是要是啊，我师门那棵树还在不在，我想自己去看一眼。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "我多带了一车乳酪来。打仗的人吃不上一口热的，这可不成啊。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "等打完这一仗，我就在这山脚下开间酒馆，招牌上画一顶冠。到时候你可得来啊，记账！"
   },
   {
    "if": "flag.a4x_squire_sworn",
    "text": "头一路的最后一辆车过了路口。阿德蕾西娅站在你左手边半步远的地方，那是扈从该站的位置，她量过的，车她也数了，一共一百零六辆。"
   },
   {
    "if": "!flag.a4x_squire_sworn",
    "text": "头一路的最后一辆车过了路口。阿德蕾西娅站在你身后，嘴里数着日子，顺带把车也数了，一共一百零六辆。"
   }
  ],
  "first": [
   "level 10",
   "rest long",
   "quest witness stage 5",
   "item +jaher_letter",
   "codex jaher"
  ],
  "next": "f_01"
 }
};
