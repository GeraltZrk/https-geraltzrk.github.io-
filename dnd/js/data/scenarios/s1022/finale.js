// s1022 / finale.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "f_01": {
  "id": "f_01",
  "title": "十二个冬天",
  "chapter": "间幕 · 十二个冬天",
  "art": "ev_blank",
  "loc": "坎诺各地",
  "date": "1041—1053年",
  "text": [
   "1041 年花始月，讨伐坎雷克的第一路十字军从北要塞出发。这一仗打了十二个冬天，翻开你的账本，每年只占一两行。",
   {
    "if": "flag.cure_early",
    "text": "1042 年，第一批解药从瓦洛森运了出来，比玛希尔达自己算的日子还早了一年。可惜只救得了刚被咬的人。"
   },
   {
    "if": "!flag.cure_early",
    "text": "1043 年，第一批解药从瓦洛森运了出来，可惜只救得了刚被咬的人，车走到边境地的时候还洒了两罐。"
   },
   {
    "if": "world.communion <= 5",
    "text": "1042 年，艾伦纳斯的精灵街被人放火烧了。火是从街东端的面包房烧起来的，烧了两天。加韦德的国王事后罚了三个人，罪名是纵火。至于烧的是精灵，一个字也没提。"
   },
   {
    "if": "world.communion >= 6 && world.communion <= 7",
    "text": "1042 年，艾伦纳斯的精灵街被人放火烧了。好在第一天夜里有人挨家挨户敲过门，街上的人都从后巷走掉了。至于敲门的到底是谁，两边到今天还各说各的。"
   },
   {
    "if": "world.communion >= 8",
    "text": "1042 年，举着火把的人来到了艾伦纳斯的精灵街。城里的屠户和面包师早就排在街口，人手一根擀面杖。对峙到半夜，那伙人带着火把散了。"
   },
   {
    "if": "world.unburied <= 3",
    "text": "白疫到底没走出边境地。到了 1050 年，卡奈特的克雷格还在照常打猎，洛伦特的雷安四世正忙着给第二个孩子挑名字。大墓地这几年新添的账，连一页都写不满。"
   },
   {
    "if": "world.unburied >= 4 && world.unburied <= 6",
    "text": "1050 年，卡奈特的克雷格和他的几个儿女在一个礼拜里先后病死了。洛伦特的雷安四世也是这一年死的，才三十岁，留下的王子只有四岁。"
   },
   {
    "if": "world.unburied >= 7",
    "text": "1050 年，卡奈特的克雷格和他的几个儿女都病死了，洛伦特的雷安四世也死了，才三十岁。这一年，边境地有十一个村子从税册上划掉了，划的人连缘由都懒得写。"
   },
   {
    "if": "flag.doses_moon || flag.doses_split",
    "text": "阿雷尔王子喝了你分给他的那一剂药，活了下来。他今年三十岁了，左胳膊上落了道疤，一到阴天就发白。"
   },
   {
    "if": "!flag.doses_moon && !flag.doses_split && world.unburied <= 3",
    "text": "第一锅药没分到阿雷尔王子头上，他在隔离的帐子里躺了十九天，总算等到了第二锅。"
   },
   {
    "if": "!flag.doses_moon && !flag.doses_split && world.unburied >= 4",
    "text": "阿雷尔王子没等到药，1040 年苏伦月就死了，才十七岁。从那以后，马里昂再也不在席上讲笑话了。"
   }
  ],
  "first": [
   "level 10",
   {
    "if": "flag.cure_early",
    "then": [
     "world unburied -1"
    ]
   }
  ],
  "next": "f_01b"
 },
 "f_01b": {
  "id": "f_01b",
  "title": "十二个冬天",
  "art": "ev_castellos_is_dead",
  "text": [
   {
    "if": "flag.charter_emperor",
    "text": "十字军打的是皇帝的旗号。东坎诺的兵年年都来得齐，西边来的却一年比一年少，都说家里得留人防着东边。"
   },
   {
    "if": "flag.charter_league",
    "text": "十字军打的是同盟的旗号，军饷从洛伦泰内发，账也在洛伦泰内算。一笔一笔算得很细。"
   },
   {
    "if": "flag.charter_writ",
    "text": "十字军是跟着瓦洛森的令状走的，先封路，再进兵，一个冬天只往前挪三十里。不过他们身后的村子都还有人。"
   },
   {
    "if": "flag.charter_muster",
    "text": "十字军没有总旗，都是自愿来的，各打各的。每年开春来一批，秋收前走一批，肯留下来过冬的，都是家里没地可种的人。"
   },
   {
    "if": "flag.god_crusade",
    "text": "他们出阵之前喊的是你的神号。喊的人里面，有一半你从来没见过。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.castan_garrec",
    "text": "加雷克在山上发过三道敕令，一道是修北要塞的粮仓，一道是赦免放下兵器的军团兵，还有一道是西门外不许再吊人示众。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.castan_lucan",
    "text": "卢坎在山上发过几道敕令，第一道准许精灵在卡斯托纳斯置地，还有一道是请他母亲上山来住。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.castan_liv",
    "text": "卡斯坦在山上发过十一道敕令，其中九道跟酒有关。她还添了第十一道试炼，就是喝酒喝赢她，到今天也没人过得了。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.castan_pc",
    "text": "山上那把椅子如今是你的。北要塞的书记官说，历代卡斯坦里面，就数你批文书最慢，下山最勤。"
   },
   {
    "if": "flag.law_full",
    "text": "瓦洛森凭着疫令封过十一条路，征尸首的车进村连门都不用敲。这件事各村一直记到今天。"
   },
   {
    "if": "flag.law_limited",
    "text": "疫令是 1050 年到期的。续不续，各国的信使围着圆桌吵了一个冬天。最后还是续了。"
   },
   {
    "if": "flag.law_refused",
    "text": "疫令没有立起来，各村只好自己设卡。卡和卡之间总有几里路没人管，死人走的就是那几里。"
   },
   {
    "if": "flag.god_wed && world.unburied >= 4",
    "text": "雷安死了以后，奥坎娜没能改嫁。那桩婚事是你这个神证的，两家的祭司翻了半年书，也没找出谁有权解。"
   },
   {
    "if": "is.mortal && !is.longlived",
    "text": "你已经五十出头了，早上起来得先在床沿上坐一会儿，等两个膝盖缓过来才敢站。"
   },
   {
    "if": "is.mortal && is.longlived",
    "text": "这十二年没在你脸上留下什么。营里新来的人都拿你当同辈，认得你的老人见了你，反倒有点不自在。"
   },
   {
    "if": "is.immortal",
    "text": "这页账上每个名字后面都添了岁数，马里昂五十二，戴伦四十，伊迪丝四十三。只有你那一行，还是领印那天写的样子。"
   },
   {
    "if": "is.immortal && !is.god",
    "text": "大墓地这十二年里换了两任大祭司，每一任刚上来都要写信问你：你欠死神的那一死，到底还算不算数。"
   },
   "账本上还空着一处。这十二个冬天，你自己是在哪里过的？"
  ],
  "choices": [
   {
    "text": "随十字军度过接下来的冬天",
    "goto": "f_02",
    "effects": [
     "flag winters_crusade",
     "rep escann +1"
    ],
    "result": "十二个冬天打下来，你换了四匹马，磨穿了两副马镫。如今卢西安手下的人见了你，都会先把火堆旁边的位子让出来。"
   },
   {
    "text": "留守瓦洛森，替玛希尔达熬药",
    "goto": "f_02",
    "effects": [
     "flag winters_varlosen",
     "rep wise +2"
    ],
    "result": "你学会了看火候，也学会了在塔里不打听隔壁熬的是什么。玛希尔达把刷锅的差事分了一半给你。"
   },
   {
    "text": "回故国照顾那里的人",
    "goto": "f_02",
    "effects": [
     "flag winters_home",
     {
      "if": "origin == 'dameria'",
      "then": [
       "rep moon +2"
      ]
     },
     {
      "if": "origin == 'lorent'",
      "then": [
       "rep rose +2"
      ]
     },
     {
      "if": "origin == 'ebonmarck'",
      "then": [
       "rep dragon +2"
      ]
     },
     {
      "if": "origin == 'ibevar'",
      "then": [
       "rep elders +2"
      ]
     },
     {
      "if": "origin == 'wex'",
      "then": [
       "rep wex +2"
      ]
     }
    ],
    "result": "你回去守了十二年自家的路卡。认得你的人少了一半，新添的坟，你座座都叫得出名字。"
   },
   {
    "text": "带着阿德蕾西娅，教她落印前先清点人数",
    "goto": "f_02",
    "effects": [
     "flag winters_squire"
    ],
    "result": "她是十五岁那年正式立的誓。你教她数人头，数粮车，数回来的和没回来的。如今她数得比你还快。"
   }
  ]
 },
 "f_02": {
  "id": "f_02",
  "title": "谁没熬过来",
  "art": "ev_feyforest",
  "chapter": "终章 · 最后一个冬天",
  "loc": "科乌里亚 · 瓦洛森",
  "date": "1053年奈拉月",
  "text": [
   "1053 年奈拉月，你来到瓦洛森。雾里，那些石兵还站在林间，脚下陆续添了十三年的新坟。最后一路十字军已在塔下扎营。",
   "饭堂那张长桌已经坐不满了，阿德蕾西娅把缺了的人挨个数了一遍。",
   "福尔卡德是 1049 年死的，活了八十八岁。大墓地给他束了腰下葬，用的是他年轻时候自己缝的那一副。",
   {
    "if": "world.unburied >= 4",
    "text": "卡奈特的克雷格和他的几个儿女死了，洛伦特的雷安四世也死了。洛伦特的王座上坐的又是个孩子，鲁本三世今年才七岁，替他拿主意的还是他祖母，那位太后。"
   },
   {
    "if": "world.unburied >= 4",
    "text": "加韦德的戈德拉克十一世今年才六岁。北边来的信使说，他一入秋就咳上了。"
   },
   {
    "if": "world.unburied <= 3",
    "text": "克雷格来了信，说卡奈特的路卡今年撤掉了一半。雷安四世也来了信，不过信上是他母亲的笔迹。"
   },
   {
    "if": "flag.iacob_pardoned",
    "text": "亚科布去年死在了自己床上，活了九十一岁。福阿哈尔来报丧的人说，他床头的茶具还摆得整整齐齐。"
   },
   {
    "if": "flag.iacob_wise",
    "text": "亚科布九十二了，还关在塔顶那间屋里，每十天给学生讲一课。今天不是讲课的日子。"
   },
   {
    "if": "origin == 'lorent' && world.unburied >= 4",
    "text": "动身之前，你进过一趟洛伦泰内的王宫。王座还是那张王座，坐在上面的又是个孩子，两只脚够不着脚垫。太后已经一百一十五岁了，模样一点没变。"
   },
   {
    "if": "origin == 'lorent' && world.unburied <= 3",
    "text": "动身之前，你进过一趟洛伦泰内的王宫。雷安坐在王座上批文书。太后就坐在他斜后面。她已经一百一十五岁了，模样一点没变。"
   },
   {
    "if": "origin == 'lorent' && flag.lance_told_truth",
    "text": "太后说，你当年那句“是他自己刺的，是失手”，她每年一到泪落月就拿出来想一遍，一直想到了今年。"
   },
   {
    "if": "origin == 'lorent' && flag.lance_told_thrall",
    "text": "太后说，你当年说克雷格中了慑心术。她从一开始就没全信，只不过那句话她正好用得着。"
   },
   {
    "if": "origin == 'lorent' && !flag.lance_told_truth && !flag.lance_told_thrall",
    "text": "太后问你，三十一年前欠下的那句回答，你打算欠到哪一年。她说她等得起，在这一点上，她跟你们可不一样。"
   }
  ],
  "first": [
   "quest crusade start",
   "codex varlosen",
   "codex aldresia",
   "codex white_pestilence"
  ],
  "next": "f_02b"
 },
 "f_02b": {
  "id": "f_02b",
  "title": "来了的人",
  "text": [
   "{?partysize > 0:来了的人都挤在长桌的一头，还是原来那几张脸，只是都见老了。|来的人不多，长桌这一头只有你和阿德蕾西娅两个。她把空凳子一张一张摞到了墙边。}",
   {
    "if": "party.valeran && is.mortal && !is.longlived",
    "speaker": "瓦勒兰",
    "text": "我今年五十二了，您也不年轻了。可那位太后还是我第一次见她时的模样，这件事我琢磨了三十年。"
   },
   {
    "if": "party.valeran && is.mortal && is.longlived",
    "speaker": "瓦勒兰",
    "text": "我今年五十二了。您倒跟那位太后一样，还是我第一次见到时的模样，这件事我琢磨了三十年。"
   },
   {
    "if": "party.valeran && is.immortal",
    "speaker": "瓦勒兰",
    "text": "那位太后还是我第一次见她时的模样，您也是。这件事我琢磨了三十年，如今得琢磨两份了。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "六十一了！翅膀根早就不疼了，现在连知觉都没有了。掌玺大臣，趁我还飞得动，先把酒钱结了，三十一年的！"
   },
   {
    "if": "party.liv && is.immortal",
    "text": "她说这话时，眼睛看的是桌上的酒壶。要是在 1040 年以前，她跟你讲价钱，眼睛是死死盯着你的脸的。"
   },
   {
    "if": "flag.winters_home",
    "text": "你是从本国赶来的，路上换了三回路条，到得最晚。阿德蕾西娅翻着名册找你，找了好一阵。最后把你记在了“外来”那一栏。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "我家那孩子今年都四十了。上次我当着人这么叫他，他等议事厅的门关上了才敢答应。来，先垫一口，这乳酪是三道卫的。"
   },
   {
    "if": "party.vezina && flag.vezina_eye",
    "speaker": "薇齐娜",
    "text": "今晚要起风，第三顶帐子的桩得再钉一遍。我可没说“要是”。别问我是怎么知道的，我自己也不想知道。"
   },
   {
    "if": "party.vezina && !flag.vezina_eye",
    "speaker": "薇齐娜",
    "text": "这是第十七本了。前十六本我昨晚翻了一遍。这三十一年里，你改过口的裁断一共有四桩。照理说，这不算多。"
   },
   "十四岁那年，阿德蕾西娅在坟边问过你，为什么还要解开死人的束腰。如今她二十七岁，腰佩银歌，带来了最后一路十字军。",
   {
    "if": "is.immortal",
    "text": "她如今跟你一般高了。你却还是她十四岁那年看见的模样。她看了你一会儿，把这件事也记进了心里，跟她记的那些数目放在一处。"
   },
   {
    "if": "is.god",
    "text": "她那年还问过你，神用不用数人。你当时是怎么答的，她到今天还记着。"
   }
  ],
  "choices": [
   {
    "text": "听众人讲这十二年的经历",
    "goto": "f_03",
    "effects": [
     {
      "if": "party.liv",
      "then": [
       "approval liv +1"
      ]
     },
     {
      "if": "party.valeran",
      "then": [
       "approval valeran +1"
      ]
     },
     {
      "if": "party.barry",
      "then": [
       "approval barry +1"
      ]
     },
     {
      "if": "party.vezina",
      "then": [
       "approval vezina +1"
      ]
     }
    ],
    "result": "大家一直讲到了后半夜。{?party.liv:卡斯坦讲的每一件事，到头来都是她赢了。|}阿德蕾西娅说，没讲完的留到打完仗再讲，说完她第一个去睡了。"
   },
   {
    "text": "去塔后雾林看十三年间的新坟",
    "goto": "f_03",
    "effects": [
     "flag fx_walked"
    ],
    "result": "坟前的木牌都是瓦洛森的学生写的，字有好有坏。你走了一个时辰，认出来的名字有四十几个，其中有几个人，你一直以为还活着。"
   },
   {
    "text": "给太后回信，补上欠她的回答",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "goto": "f_03",
    "effects": [
     "rep rose +2"
    ],
    "result": "你写了三行。信使接过去掂掂，说太后回信很慢，上一封她过了十七年才回。"
   }
  ]
 },
 "f_03": {
  "id": "f_03",
  "title": "集结",
  "art": "ev_multi_racial_merc",
  "loc": "瓦洛森 · 十字军大营",
  "text": [
   "塔下营盘延伸三里。罗尔萨德人从洛伦特逃难而来，帐篷扎得最密。他们不讨军饷，却一定要弄清，打完仗谁能给他们开地契。",
   "统兵的卢西安·西尔·维文把点名册摊在一只倒扣的木桶上。一路一路往下点。到了的有{?flag.edict_softened:威克斯的长矛，|}{?flag.enteben_stopped:恩特本的枪骑，|}{?flag.garrec_king:黑龙的军团兵，|}{?flag.larthan_open:伊贝瓦尔的弓手，|}{?flag.sun_terms:太阳精灵的驻军，|}{?flag.viswall_safe:半身人的粮车，|}{?flag.winters_crusade:跟你打了十二年的老兵，|}还有瓦洛森自己的两百人。",
   "阿德蕾西娅在各营之间来回走，嘴里一直念着数目。",
   {
    "if": "is.god",
    "text": "每天早上都有人到你帐子前面磕头，磕完了留下一只鸡蛋，或者半块饼。也有人打水宁肯绕半个营，就是不从你门前过。"
   },
   {
    "if": "is.immortal",
    "speaker": "阿德蕾西娅",
    "text": "有句话我得说在前面。到了山上，要是非得有人拿命去换，您去不算数，您不会死。"
   }
  ],
  "first": [
   "var muster =0",
   {
    "if": "flag.edict_softened",
    "then": [
     "var muster +1"
    ]
   },
   {
    "if": "flag.enteben_stopped",
    "then": [
     "var muster +1"
    ]
   },
   {
    "if": "flag.garrec_king",
    "then": [
     "var muster +1"
    ]
   },
   {
    "if": "flag.larthan_open",
    "then": [
     "var muster +1"
    ]
   },
   {
    "if": "flag.sun_terms",
    "then": [
     "var muster +1"
    ]
   },
   {
    "if": "flag.viswall_safe",
    "then": [
     "var muster +1"
    ]
   },
   {
    "if": "flag.winters_crusade",
    "then": [
     "var muster +1"
    ]
   }
  ],
  "shop": {
   "name": "十字军的军需官",
   "blurb": "店主操罗尔萨德口音，手里的一杆秤倒很准。至于价格，城里眼下还按战时行情算。",
   "stock": [
    "ebonsteel_greatsword",
    "ebonsteel_greataxe",
    "ebonsteel_plate",
    "elven_mail",
    "superior_healing_potion",
    "blessed_water_jar",
    "scroll_mass_healing",
    "scroll_banishment",
    "nerat_candle"
   ]
  },
  "choices": [
   {
    "text": "陪卡斯坦喝最后一顿酒",
    "if": "party.liv",
    "once": true,
    "effects": [
     "approval liv +1"
    ],
    "result": [
     {
      "speaker": "卡斯坦",
      "text": "到时候要是得有人拿命去换，你先来问我。我都六十一了，鹰身女妖没有活过一百的。剩下那几年，我本来也是打算拿去喝酒的。"
     },
     "她把两只杯子都倒满，先干了自己那杯。接着把你那杯也干了。"
    ]
   },
   {
    "text": "帮瓦勒兰擦拭盔甲",
    "if": "party.valeran",
    "once": true,
    "effects": [
     "approval valeran +1"
    ],
    "result": [
     {
      "speaker": "瓦勒兰",
      "text": "洛伦特是家父拿一条命换来的，可如今替王座拿主意的，还是那位精灵太后。我跟了您三十年，到现在也没弄明白，自己到底算赢了还是输了。"
     },
     "他把护喉的皮带又收紧了一格，说这跟输赢不相干，是他自己瘦了。"
    ]
   },
   {
    "text": "去恩特本军营找瓦勒兰",
    "if": "!party.valeran && flag.valeran_released && flag.enteben_stopped",
    "once": true,
    "effects": [
     "approval valeran +1",
     "rep rose +1"
    ],
    "result": [
     {
      "speaker": "瓦勒兰",
      "text": "您是解了我的誓，可我自己并没有解。恩特本这次来了四十杆枪，全归阿德蕾西娅调遣。这是我跟他们讲好的，足足讲了三天。"
     }
    ]
   },
   {
    "text": "到威克斯营找巴里",
    "if": "party.barry || flag.edict_softened",
    "once": true,
    "effects": [
     "approval barry +1",
     "rep wex +1"
    ],
    "result": [
     "巴里正在给一排长矛手分乳酪。戴伦公爵四十岁的人了，就站在旁边等他分完。",
     {
      "speaker": "巴里",
      "text": "我家那孩子来了。来，站过来，让{pc}好好看看，你都长这么高了。"
     },
     "满营的人都听见了。公爵真的站了过去。"
    ]
   },
   {
    "text": "拜见威克斯公爵",
    "if": "!party.barry && !flag.edict_softened && !flag.edict_overruled",
    "once": true,
    "effects": [
     "rep wex +1"
    ],
    "result": [
     "戴伦今年四十岁了。{?flag.guardian_barry:见了面，他先问你吃了没有。|}{?flag.guardian_crovan:他说话总是只说一半。|}{?flag.guardian_marion:他一开口就是达梅里亚腔。|}{?flag.guardian_barons:他身后站着四个男爵，他一个也没回头看。|}",
     {
      "speaker": "戴伦",
      "text": "你当年在科塞顿问过我要不要马。我现在有四百匹了，可全都在拉尸首。等打完这一仗，我想让它们也拉点别的。"
     }
    ]
   },
   {
    "text": "请薇齐娜说说她预见的战况",
    "if": "party.vezina && flag.vezina_eye",
    "once": true,
    "effects": [
     "approval vezina +1",
     "flag fx_vezina_tip"
    ],
    "result": [
     {
      "speaker": "薇齐娜",
      "text": "进了前厅，从左边数第三排。要开笼子就开那一排，别的先别碰。我没说“要是”，你听出来了吧？"
     },
     "她那只好眼睛看着你，那只鸦眼却看着你身后。"
    ]
   },
   {
    "text": "请薇齐娜说说她预见的战况",
    "if": "party.vezina && !flag.vezina_eye",
    "once": true,
    "effects": [
     "approval vezina +1"
    ],
    "result": [
     {
      "speaker": "薇齐娜",
      "text": "要是我们都回得来，我说的是要是，这一本的最后一页我想让你来写。你自己的裁断，你自己落款。"
     }
    ]
   },
   {
    "text": "去塔顶与加里昂谈那本书",
    "once": true,
    "effects": [
     "rep wise +1"
    ],
    "result": [
     "加里昂已经两百一十三岁了，坐在窗边，空着的那只袖管别在胸口。",
     {
      "speaker": "加里昂",
      "text": "坎雷克那本书，我是不想要的。可它要是非得落到谁手里，我情愿它落到一个不想要它的人手里。只是，这样的事，你们当真打算就托付给一句“情愿”吗？"
     },
     {
      "speaker": "加里昂",
      "text": "还有一条得告诉你。谁撕了坎雷克自己的那一页，书里的魂就全松了绑。它们第一个要撕碎的就是撕书的人。照道理讲，这没有例外。"
     }
    ]
   },
   {
    "text": "会见持令而来的伊迪丝",
    "if": "world.writ >= 7",
    "once": true,
    "effects": [
     "rep wise +1"
    ],
    "result": [
     "伊迪丝今年四十三岁，手套一直没摘。她身后跟着一队人，站得整整齐齐，没有一个开口说话。",
     {
      "speaker": "伊迪丝",
      "text": "令状上写的是协助十字军。至于怎么协助，由持令的人来定，持令的人是我。"
     },
     {
      "if": "is.god",
      "speaker": "伊迪丝",
      "text": "你如今跟我一样了，说什么别人就照办。我花了三十年才学会不开口。你要是想听听心得，打完了来找我。"
     }
    ]
   },
   {
    "text": "与伊迪丝见面",
    "if": "world.writ >= 4 && world.writ <= 6",
    "once": true,
    "effects": [
     "rep wise +1"
    ],
    "result": [
     "她是一个人来的，今年四十三岁，手套一直没摘。瓦洛森只给她批了七天假。",
     {
      "speaker": "伊迪丝",
      "text": "我不上山。山上那位说的话，我怕我听得懂。{?flag.edith_trusts:你当年说过，往后要先问一声。我去问过他们了，他们说不去。|}"
     },
     {
      "if": "is.god",
      "speaker": "伊迪丝",
      "text": "你如今跟我一样了，说什么别人就照办。这是什么滋味，我比谁都清楚，所以我替你发愁。"
     }
    ]
   },
   {
    "text": "去达梅里亚营拜见马里昂",
    "tag": "达梅里亚",
    "if": "origin == 'dameria'",
    "once": true,
    "goto": "f_03m"
   },
   {
    "text": "跟卢西安核对进沼路线",
    "once": true,
    "check": {
     "skill": "history",
     "alt": [
      "survival"
     ],
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "你们俩把三条路一条一条对下来。最后只剩一条能走。卢西安在图上那条路旁边画了个酒壶，说上次他就是在那里丢的辎重。",
     "effects": [
      "flag fx_route"
     ]
    },
    "fail": {
     "text": "你把两条河的名字记混了。卢西安皱了皱眉，转头就让书记官另请了一个沼地向导，向导的钱记在了你账上。",
     "effects": [
      "gold -20"
     ]
    }
   },
   {
    "text": "休息一觉",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "营里一夜敲了三次更，你一次也没听见。"
   },
   {
    "text": "拔营前往科乌尔堡",
    "goto": "f_04"
   }
  ]
 },
 "f_03m": {
  "id": "f_03m",
  "title": "切肉刀那天",
  "art": "ck3_damesteeth",
  "text": [
   "达梅里亚营里仍挂着月牙旗。五十二岁的马里昂亲自来了，旧甲已经扣不上身，他换了一副新的。",
   {
    "speaker": "马里昂",
    "text": "切肉刀那天的事，我讲了三十一年，每次讲得都不一样。{?flag.p_knife_hanged:讲到绞架那一段，席上就没人接话了。|讲到那三个老兵回家种地，席上总有人不信。}"
   },
   {
    "speaker": "马里昂",
    "text": "你当时是在场的。你说，这事我到底该怎么讲？"
   }
  ],
  "choices": [
   {
    "text": "劝他如实讲出宿醉时受惊的经过",
    "goto": "f_03",
    "effects": [
     "rep moon +1",
     {
      "if": "party.valeran",
      "then": [
       "approval valeran +1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "马里昂",
      "text": "这个讲法我祖母最爱听。行，往后就讲这个，一直讲到我吓得钻桌子那一段！"
     }
    ]
   },
   {
    "text": "劝国王说是自己拦下了刀",
    "goto": "f_03",
    "effects": [
     "rep moon +2",
     {
      "if": "party.valeran",
      "then": [
       "approval valeran -1"
      ]
     }
    ],
    "result": "他想了想才说不行，那天满厅的人都看见他把酒洒在了裤子上。话是这么说，他还是让书记把这个讲法记了下来。"
   }
  ]
 },
 "f_04": {
  "id": "f_04",
  "title": "苏雷尔神庙",
  "art": "load_10",
  "loc": "科乌里亚 · 去科乌尔堡的路上",
  "text": [
   "通往科乌尔堡的小路旁有座苏雷尔神庙，白墙小院。七个太阳精灵修士轮流守着门口，给过路的兵舀水。",
   "骑士西奥多·西纳·特里纳斯把马拴在了庙门口。他手下十来个人正忙着卸车，卸下来的全是镐。",
   {
    "speaker": "西奥多",
    "text": "我听说这下面封着术士王的一个侍从，封进去的时候她还没老。我还听说里面有精灵的寿数。精灵能活一千年，我祖父才活了五十一岁，这当中差的岁数，总得找个地方补回来。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "爵士，寿数要是能从地里挖出来，恩特本早就连一块平地都没有了。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "下面要是封着酒，那我也挖！封着人就算了。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "对不住，我多句嘴。我们威克斯有句老话，坟要挖得比恨深，可从来没说过坟还要挖开来看。"
   },
   {
    "if": "is.god",
    "text": "修士们拜的那位“重生的苏雷尔”这时正在东边打仗。他们舀水舀到你面前，多看了你一眼，还是照样给你舀了一瓢。"
   }
  ],
  "choices": [
   {
    "text": "辨认庙后封门石上的刻字",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 16,
     "party": true
    },
    "ok": {
     "text": "石条上的祷文你只认得一半，不过看得出这是关人用的，葬人用的不是这一种。里面那位是被人关进去的，关她的人指望她永远出不来。",
     "effects": [
      "flag fx_temple_read"
     ]
    },
    "fail": {
     "text": "祷文用的是太阳精灵的旧体。你凑得太近，有个修士拿水瓢把你隔开了。西奥多在院子里看见，更相信下面有好东西了。",
     "effects": [
      "flag fx_temple_botched"
     ]
    }
   },
   {
    "text": "用精灵语问修士下面埋着谁",
    "tag": "精灵",
    "if": "is.elf",
    "once": true,
    "effects": [
     "flag fx_temple_read"
    ],
    "result": [
     "老修士看看你的耳朵，改用精灵坐船渡海那时的旧话跟你说。",
     {
      "speaker": "修士",
      "text": "是个照镜子的女人。封她的人把镜子朝里摆了。上次有人来问，还是十二年前，问的那个人后来再没来过。"
     }
    ]
   },
   {
    "text": "准许他们挖掘",
    "goto": "f_05",
    "effects": [
     "flag temple_dug",
     "var muster +1",
     {
      "if": "party.valeran",
      "then": [
       "approval valeran -1"
      ]
     },
     {
      "if": "party.barry",
      "then": [
       "approval barry -1"
      ]
     }
    ],
    "result": "修士们被请到了院子里，站成一排，没有一个出声。第一镐落下去，声音很闷。西奥多说，他的人会留下来打完这一仗再走。"
   },
   {
    "text": "劝他收起镐，派人守庙",
    "check": {
     "skill": "persuasion",
     "alt": [
      "intimidation"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "flag.fx_temple_read",
       "n": 2,
       "why": "你知道下面封的是什么"
      },
      {
       "if": "flag.fx_temple_botched",
       "n": -2,
       "why": "他看见修士赶你了"
      },
      {
       "if": "is.elf",
       "n": -2,
       "why": "他不爱听长命的人劝他认命"
      }
     ]
    },
    "ok": {
     "goto": "f_05",
     "effects": [
      "flag temple_guarded"
     ],
     "text": [
      "你把话讲完，他把镐拿在手里掂掂，还是放回了车上。你留下四个人守在庙后。",
      {
       "speaker": "西奥多",
       "text": "行。等这一仗打完了，我再来问一遍。到那时候，监誓人就未必管得着了。"
      }
     ]
    },
    "fail": {
     "goto": "f_05",
     "effects": [
      "flag temple_guarded",
      "var muster -1"
     ],
     "text": "他客客气气听你讲完了，当天夜里却带人摸到了庙后。好在你留的四个人正在那里等着。天亮时，西奥多的营盘已经空了。他带着人走了，镐没带走。"
    }
   }
  ]
 },
 "f_05": {
  "id": "f_05",
  "title": "科乌尔堡",
  "loc": "科乌里亚 · 科乌尔堡",
  "text": [
   "科乌尔堡立在半山腰，卡斯塔诺人砌的石墙上飘着太阳精灵的旗。附近老人仍然叫它多斯坦堡。",
   {
    "if": "flag.sun_terms",
    "text": "城门是开着的，总督德纳里昂就在门洞里等着，身后是他的驻军，甲擦得比你们的还亮。照十三年前谈好的条件，这一仗统兵的是他的人。"
   },
   {
    "if": "flag.sun_terms && flag.god_herald",
    "text": "城门上那面日轮旗旁边，新缝上去一颗小太阳，那是你的。德纳里昂朝你行的是见上官的礼，脸色却像见了债主。"
   },
   {
    "if": "flag.sun_terms",
    "speaker": "德纳里昂",
    "text": "上次我说把那座山烧了。你们说再等等。这一等就等到了今天，山上那座宅子里的笼子都添到一千只了。请进。"
   },
   {
    "if": "!flag.sun_terms",
    "text": "城门关着，城头上站了一排弓手，箭还没上弦。总督德纳里昂从垛口里探出了半个身子。"
   },
   {
    "if": "!flag.sun_terms",
    "speaker": "德纳里昂",
    "text": "上次我说把那座山烧了。你们说再等等。如今你们自己带着兵来敲门，倒要我别等了？科乌里亚的事，科乌里亚的兵自己会办。"
   },
   {
    "if": "flag.god_half_sentence",
    "text": "你一到，他嘴里那套客气话就接不下去了。他停了一停，只好说了实话：他原本打算把你们晾在城下，一直晾到开春。"
   },
   {
    "if": "party.valeran && flag.sun_terms",
    "speaker": "瓦勒兰",
    "text": "跟着精灵的旗子去打一场人类的仗，这事我回去没法禀报。仗我照打，只是得先跟您说一声。"
   },
   {
    "if": "origin == 'ibevar' && flag.larthan_open",
    "text": "伊贝瓦尔的弓手队长是你的族亲，隔着半个校场就喊你的船名。他告诉你，亲王的箱子已经打开了两只，其中一只装的是冬衣。"
   },
   {
    "if": "origin == 'wex'",
    "text": "从边境地到这里，十字军走的正是你老家的路。沿途哪个村子还有人，哪口井还能喝。你连图都不用看。"
   }
  ],
  "choices": [
   {
    "text": "领队进城",
    "if": "flag.sun_terms",
    "goto": "f_05b"
   },
   {
    "text": "隔着城门谈判",
    "if": "!flag.sun_terms",
    "check": {
     "skill": "persuasion",
     "dc": 18,
     "mods": [
      {
       "if": "item.jaher_letter >= 1",
       "n": 2,
       "why": "贾赫的回信"
      },
      {
       "if": "flag.god_half_sentence",
       "n": 3,
       "why": "他在你面前说不了场面话"
      },
      {
       "if": "item.lunatein_plank >= 1",
       "n": 1,
       "why": "月火号的船板"
      }
     ]
    },
    "ok": {
     "goto": "f_05b",
     "text": "{?item.jaher_letter >= 1:你把贾赫的回信从门缝里递了进去。他看了两遍，认出“谁管用就让谁管”那一句是太阳王的笔迹。|你把这十三年死在他辖地里的人数报给他听，一年一年地报。报到第九年，他不肯往下听了。}城门开了。"
    },
    "fail": {
     "goto": "f_05b",
     "effects": [
      "var muster -1",
      "world unburied +1"
     ],
     "text": "这一谈就是三天。第三天夜里他开了门，一个字也没解释。可是这三天里，山下的村子没人管，又死了不少人，有一路兵等不及，自己先走了。"
    }
   },
   {
    "text": "夜间牵马从山道绕行",
    "if": "!flag.sun_terms",
    "check": {
     "skill": "stealth",
     "dc": 17,
     "party": true,
     "adv": "origin == 'wex'"
    },
    "ok": {
     "goto": "f_05b",
     "text": "你们走的是放羊的小道，马嚼子上都缠了布。天亮时，科乌尔堡已经落在身后了，城头的弓手还朝北边望着。"
    },
    "fail": {
     "goto": "f_05b",
     "effects": [
      "var muster -1",
      "world unburied +1"
     ],
     "text": "有辆辎重车在半道上翻了，响动一直传到了城头。这一绕花了三天，还走散了一路人。"
    }
   }
  ]
 },
 "f_05b": {
  "id": "f_05b",
  "title": "头阵",
  "text": [
   "{?flag.sun_terms:校场上|城南的坡地上}，各路人马的旗子插成了一排。统兵的{?flag.sun_terms:太阳精灵|卢西安}把名册递过来，问你头阵点哪一路。",
   {
    "speaker": "阿德蕾西娅",
    "text": "大人，您选哪一路我就跟哪一路。定了就告诉我，我去清点人手。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "点我呀！我在天上飞，头阵也好尾阵也好，反正都是我先到。"
   }
  ],
  "choices": [
   {
    "text": "留在坡下半天，喂马包扎",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "马吃的是科乌里亚的干草，草里带着一股沼地的味道。你们一直歇到太阳偏西。"
   },
   {
    "text": "托族亲告诉亲王，可以再开一只箱子",
    "tag": "伊贝瓦尔",
    "if": "origin == 'ibevar' && flag.larthan_open",
    "once": true,
    "effects": [
     "rep elders +1"
    ],
    "result": "他把这句话在嘴里过了一遍，说亲王听了多半不会答话。不过在亲王那里，不答话就算是好兆头了。"
   },
   {
    "text": "选阿德蕾西娅的部队打头阵",
    "goto": "f_06",
    "effects": [
     {
      "if": "party.valeran",
      "then": [
       "approval valeran +1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "阿德蕾西娅",
      "text": "头阵一共四百二十人，其中有一个是伙夫。他说他也要去。"
     }
    ]
   },
   {
    "text": "派要地的罗尔萨德人开路",
    "goto": "f_06",
    "effects": [
     {
      "if": "party.liv",
      "then": [
       "approval liv +1"
      ]
     },
     {
      "if": "party.valeran",
      "then": [
       "approval valeran -1"
      ]
     },
     "rep rose -1"
    ],
    "result": "卢西安的人没有二话。只有他们的旗手问了一句：头阵战死的人，地契写给家里的谁。你答应他，写给寡妇。"
   }
  ]
 },
 "f_06": {
  "id": "f_06",
  "title": "达拉万之愚",
  "loc": "科乌里亚 · 达拉万之愚",
  "text": [
   "近四百年前，科尔巴里德国王达拉万想放水淹死豺狼人，连自己的兵也搭了进去。水至今未退，这里便叫达拉万之愚。赶路得认柳条路标，一步走偏就是深泥。",
   "沼里隔一阵就冒出一股火，带着硫磺味。马怎么也不肯走，只好蒙上眼睛牵着。",
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "渡鸦十四只，刚才还是十五只。少了的那一只，落到前面那排柱子上去了。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "我在上面飞，你们在下面蹚。这种地方，我只管看，不管捞！"
   }
  ],
  "choices": [
   {
    "text": "严格沿向导插的柳条行进",
    "check": {
     "skill": "survival",
     "dc": 16,
     "party": true,
     "adv": "flag.fx_route"
    },
    "ok": {
     "goto": "f_06b",
     "text": "走了整整一天，一辆车也没丢。向导数柳条数到三百就不肯数了，说再往下数不吉利。"
    },
    "fail": {
     "goto": "f_06b",
     "effects": [
      "hp -8",
      "gold -30"
     ],
     "text": "第二辆辎重车连车带骡子陷了下去。你赶过去拽缰绳，烂泥一下没到了胸口。亏得两个罗尔萨德人把你拔出来，靴子却留在了泥里。"
    }
   },
   {
    "text": "飞到前方为队伍指出硬地",
    "tag": "鹰身女妖",
    "if": "is.flyer",
    "goto": "f_06b",
    "result": "从天上往下看，硬地是一串发白的斑。你飞一段落一段，后面的人就照着你落脚的地方走。{?party.liv:卡斯坦在旁边陪你飞，说你落地的样子像只鸭子。|}"
   }
  ]
 },
 "f_06b": {
  "id": "f_06b",
  "title": "柱子",
  "text": [
   {
    "if": "world.writ <= 3",
    "text": "沼地中央有块石头垫起的硬地，上面立着十四根焦黑的柱子。第十五根刚立好，下面已经堆起干柴，还没点火。"
   },
   {
    "if": "world.writ <= 3",
    "text": "柱子旁边站着十来个披白罩袍的人，胸口都缝着一杆长枪的徽记。领头的正在念经，念的是凯伦说过的话。"
   },
   {
    "if": "world.writ <= 3 && (flag.edith_none || flag.edith_ravens)",
    "text": "绑在柱子上的是伊迪丝。她今年四十三岁了，嘴里塞着一团浸了油的麻，两只眼睛直直地看着你。"
   },
   {
    "if": "world.writ <= 3 && !flag.edith_none && !flag.edith_ravens",
    "text": "绑在柱子上的是个瓦洛森的学生，才二十出头，袍子下摆已经泼上了油。他认出了你们的旗子。"
   },
   {
    "if": "world.writ <= 3",
    "speaker": "火刑队长",
    "text": "凯伦说过，打赢了要留人。留的是人！背了誓的法师还算不算人，凯伦没说。那就由我们替他说。"
   },
   {
    "if": "world.writ <= 3 && flag.god_crusade",
    "text": "他们念完了凯伦，又念了一个名号，是你的神号。柱子朝外的那一面，也刻着同样的字。"
   },
   {
    "if": "world.writ <= 3 && party.valeran",
    "speaker": "瓦勒兰",
    "text": "凯伦这一辈子没烧过一个人。阁下念的这后半句，不知是哪座神殿教的？"
   },
   {
    "if": "world.writ <= 3 && party.liv",
    "speaker": "卡斯坦",
    "text": "这次我站骑士这边。凯伦是我爹手下的兵，他叛没叛另说，可他要是见了这帮人，准得吐出来！"
   },
   {
    "if": "world.writ >= 4",
    "text": "沼地当中有一片垫了石头的硬地，上面立着一排柱子，一共十四根，都空着。每根柱子上都钉了一张瓦洛森的令状，写的是“此地不得私刑”。"
   },
   {
    "if": "world.writ >= 4",
    "text": "令状只管得住活人。硬地那一头的烂泥里站起来一队死人，身上挂着水草，把路堵死了。"
   },
   {
    "if": "world.writ >= 4 && party.vezina",
    "speaker": "薇齐娜",
    "text": "柱子要是没空着，我说的是要是，那上面绑的该是我认得的人。这张纸我不喜欢，可我得认它。"
   }
  ],
  "choices": [
   {
    "text": "背出凯伦那句话的原文",
    "tag": "蓝宝石之眼",
    "if": "world.writ <= 3 && faction == 'sapphire'",
    "check": {
     "skill": "history",
     "alt": [
      "persuasion"
     ],
     "dc": 14
    },
    "ok": {
     "goto": "f_07",
     "effects": [
      "flag pyre_stopped",
      "xp 300"
     ],
     "text": "你把整句话背了出来，后半句是“留下的人，由赢的人养着”。队长身后先有两个人把火把插进了泥里。队长自己站了一会儿，也插了。"
    },
    "fail": {
     "text": "你背错了一个词。队长笑了一下，说骑士团如今连经都背不全了。他手下的人把柴堆围了起来。",
     "combat": {
      "title": "柴堆前",
      "intro": "白袍人围成半圈。队长高高举起手里的火把。",
      "enemies": [
       {
        "id": "witch_hunter",
        "n": 3,
        "name": "火刑队"
       },
       {
        "id": "pyre_captain"
       }
      ],
      "specials": [
       {
        "id": "kick",
        "name": "踢散柴堆",
        "desc": "燃着余火的劈柴会从高处滚落。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d8 点火焰伤害。",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "柴堆给你踢散了，带火星的劈柴滚到了他们脚下，有两件白罩袍的下摆烧着了。",
         "dmgAll": "3d6",
         "type": "fire"
        },
        "fail": {
         "text": "柴捆是拿湿藤扎死的，你一脚踢上去，柴没散，油倒溅了自己一腿。",
         "selfDmg": "1d8",
         "type": "fire"
        }
       },
       {
        "id": "rope",
        "name": "割断柱子上的绳",
        "desc": "柱子上的人若获救，围攻者就会分神。成功时，所有敌人陷入「晕眩」，持续 1 回合。",
        "check": {
         "skill": "sleight",
         "dc": 15
        },
        "success": {
         "text": "绳子断了，柱子上的人滚进泥里，还顺手抱走了队长脚边的那桶油。",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "绳子浸过油，刀口直打滑，只割开了一半。"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 900",
        "flag pyre_stopped"
       ],
       "goto": "f_07"
      },
      "lose": {
       "goto": "f_06c"
      }
     }
    }
   },
   {
    "text": "到柴堆前与众人交涉",
    "if": "world.writ <= 3 && faction != 'sapphire'",
    "check": {
     "skill": "persuasion",
     "alt": [
      "intimidation"
     ],
     "dc": 18,
     "party": true,
     "mods": [
      {
       "if": "party.valeran",
       "n": 2,
       "why": "瓦勒兰背得出凯伦的原话"
      },
      {
       "if": "rep.escann >= 3",
       "n": 2,
       "why": "东坎诺认你这枚印"
      }
     ]
    },
    "ok": {
     "goto": "f_07",
     "effects": [
      "flag pyre_stopped",
      "xp 300"
     ],
     "text": "你问他们：都烧到第十五根了，沼里的死人少了几个？队长答不上来。他身后有人把火把放低了，先是一支，跟着又是一支。"
    },
    "fail": {
     "text": "你刚说出“监誓人”三个字，队长就摆摆手，说印是蜡做的，火可是真的。",
     "combat": {
      "title": "柴堆前",
      "intro": "白袍人围成半圈。队长高高举起手里的火把。",
      "enemies": [
       {
        "id": "witch_hunter",
        "n": 3,
        "name": "火刑队"
       },
       {
        "id": "pyre_captain"
       }
      ],
      "specials": [
       {
        "id": "kick",
        "name": "踢散柴堆",
        "desc": "燃着余火的劈柴会从高处滚落。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d8 点火焰伤害。",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "柴堆给你踢散了，带火星的劈柴滚到了他们脚下，有两件白罩袍的下摆烧着了。",
         "dmgAll": "3d6",
         "type": "fire"
        },
        "fail": {
         "text": "柴捆是拿湿藤扎死的，你一脚踢上去，柴没散，油倒溅了自己一腿。",
         "selfDmg": "1d8",
         "type": "fire"
        }
       },
       {
        "id": "rope",
        "name": "割断柱子上的绳",
        "desc": "柱子上的人若获救，围攻者就会分神。成功时，所有敌人陷入「晕眩」，持续 1 回合。",
        "check": {
         "skill": "sleight",
         "dc": 15
        },
        "success": {
         "text": "绳子断了，柱子上的人滚进泥里，还顺手抱走了队长脚边的那桶油。",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "绳子浸过油，刀口直打滑，只割开了一半。"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 900",
        "flag pyre_stopped"
       ],
       "goto": "f_07"
      },
      "lose": {
       "goto": "f_06c"
      }
     }
    }
   },
   {
    "text": "拔剑迎战",
    "if": "world.writ <= 3",
    "combat": {
     "title": "柴堆前",
     "intro": "白袍人围成半圈。队长高高举起手里的火把。",
     "enemies": [
      {
       "id": "witch_hunter",
       "n": 3,
       "name": "火刑队"
      },
      {
       "id": "pyre_captain"
      }
     ],
     "specials": [
      {
       "id": "kick",
       "name": "踢散柴堆",
       "desc": "燃着余火的劈柴会从高处滚落。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d8 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "柴堆给你踢散了，带火星的劈柴滚到了他们脚下，有两件白罩袍的下摆烧着了。",
        "dmgAll": "3d6",
        "type": "fire"
       },
       "fail": {
        "text": "柴捆是拿湿藤扎死的，你一脚踢上去，柴没散，油倒溅了自己一腿。",
        "selfDmg": "1d8",
        "type": "fire"
       }
      },
      {
       "id": "rope",
       "name": "割断柱子上的绳",
       "desc": "柱子上的人若获救，围攻者就会分神。成功时，所有敌人陷入「晕眩」，持续 1 回合。",
       "check": {
        "skill": "sleight",
        "dc": 15
       },
       "success": {
        "text": "绳子断了，柱子上的人滚进泥里，还顺手抱走了队长脚边的那桶油。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "绳子浸过油，刀口直打滑，只割开了一半。"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900",
       "flag pyre_stopped"
      ],
      "goto": "f_07"
     },
     "lose": {
      "goto": "f_06c"
     }
    }
   },
   {
    "text": "命令他们停手",
    "tag": "神",
    "if": "world.writ <= 3 && (is.god || flag.god_crusade)",
    "goto": "f_07",
    "effects": [
     "flag pyre_stopped",
     "var god_acts +1",
     "rep wise -2",
     {
      "if": "party.valeran",
      "then": [
       "approval valeran -1"
      ]
     }
    ],
    "result": [
     "他们果然停了，火把一支接一支放低，放得整整齐齐。",
     {
      "speaker": "火刑队长",
      "text": "那该烧谁？您给个名字，我们换一根柱子就是了。"
     },
     {
      "if": "party.valeran",
      "speaker": "瓦勒兰",
      "text": "这些可都是您的人。"
     },
     "{?flag.god_crusade:你让他们把柱子上的神号凿掉。他们照办了，凿得很仔细，还把凿下来的石粉拿布包好，揣进了怀里。|他们跪下来问你，神号怎么写，好往柱子上刻。绑在柱子上的那个人是自己挣下来的，走出去老远才敢回头。}"
    ]
   },
   {
    "text": "列阵从正面推进",
    "if": "world.writ >= 4",
    "combat": {
     "title": "沼里的死人",
     "intro": "它们从泥里费力地拔出一条腿，又拔出另一条。每迈一步，泥里就响一声。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 3
      },
      {
       "id": "ghoul",
       "n": 2
      },
      {
       "id": "wight",
       "name": "挂着水草的骑士"
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "mud",
       "name": "把它们引到烂泥最深的那一段",
       "desc": "柳条圈外是深不见底的泥沼。成功时，所有敌人陷入「束缚」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "survival",
        "dc": 15
       },
       "success": {
        "text": "你倒退着走，脚踩在柳条里面。它们直愣愣地追过来，踩的是柳条外面，一个接一个陷到了腰。",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "你自己先踩空了一脚，烂泥灌了一靴筒。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 700"
      ],
      "goto": "f_07"
     },
     "lose": {
      "goto": "f_06c"
     }
    }
   },
   {
    "text": "熄掉火把，沿硬地边缘潜行",
    "if": "world.writ >= 4",
    "check": {
     "skill": "stealth",
     "dc": 16,
     "party": true
    },
    "ok": {
     "goto": "f_07",
     "effects": [
      "xp 200"
     ],
     "text": "它们是冲着火光来的。你们摸黑走了半里地，最近的一个离你的马镫不到一臂远，脸却朝着别处。"
    },
    "fail": {
     "effects": [
      "hp -6"
     ],
     "text": "有匹马打了个响鼻。最近的那个转过头，一把抓住了你的小腿。",
     "combat": {
      "title": "沼里的死人",
      "intro": "它们从泥里费力地拔出一条腿，又拔出另一条。每迈一步，泥里就响一声。",
      "enemies": [
       {
        "id": "pestilent_zombie",
        "n": 3
       },
       {
        "id": "ghoul",
        "n": 2
       },
       {
        "id": "wight",
        "name": "挂着水草的骑士"
       }
      ],
      "noAwe": true,
      "specials": [
       {
        "id": "mud",
        "name": "把它们引到烂泥最深的那一段",
        "desc": "柳条圈外是深不见底的泥沼。成功时，所有敌人陷入「束缚」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
        "check": {
         "skill": "survival",
         "dc": 15
        },
        "success": {
         "text": "你倒退着走，脚踩在柳条里面。它们直愣愣地追过来，踩的是柳条外面，一个接一个陷到了腰。",
         "applyAll": {
          "cond": "restrained",
          "turns": 2
         }
        },
        "fail": {
         "text": "你自己先踩空了一脚，烂泥灌了一靴筒。",
         "selfDmg": "1d8"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 700"
       ],
       "goto": "f_07"
      },
      "lose": {
       "goto": "f_06c"
      }
     }
    }
   }
  ]
 },
 "f_06c": {
  "id": "f_06c",
  "title": "泥里",
  "text": [
   {
    "if": "world.writ <= 3 && (flag.edith_none || flag.edith_ravens)",
    "text": "两个人把你按进泥里。你抬头只见柴堆起火，麻团烧断。伊迪丝隔着火说了句话，你没能听清。"
   },
   {
    "if": "world.writ <= 3 && (flag.edith_none || flag.edith_ravens)",
    "text": "火灭了。披白罩袍的人一个接一个放下火把，四下张望。有人问这是什么地方，谁也答不上来，他们就散了。伊迪丝自己把绳子解开了，手套烧没了一只。"
   },
   {
    "if": "world.writ <= 3 && !flag.edith_none && !flag.edith_ravens",
    "text": "你被两个人按在烂泥里，脸正朝着柴堆，眼看着火点着了。那个学生没喊多久。"
   },
   {
    "if": "world.writ <= 3 && !flag.edith_none && !flag.edith_ravens",
    "text": "他们把你们的兵器扔进泥里，就走了。从此，第十五根柱子也是黑的了。"
   },
   {
    "if": "world.writ >= 4",
    "text": "它们没有追。你们退回上一片硬地，丢了两辆车，天亮以后又多绕了十里路。绕过去时，它们还站在原地，脸朝着昨晚火把亮过的方向。"
   }
  ],
  "first": [
   {
    "if": "world.writ <= 3 && !flag.edith_none && !flag.edith_ravens",
    "then": [
     "rep wise -1"
    ]
   },
   {
    "if": "world.writ >= 4",
    "then": [
     "gold -40"
    ]
   }
  ],
  "next": "f_07"
 },
 "f_07": {
  "id": "f_07",
  "title": "山下的坟场",
  "art": "ev_undead_army",
  "loc": "科乌里亚 · 渡鸦山下的坟场",
  "date": "1053年真霜月",
  "text": [
   "渡鸦山城在坡上，围着木栅。坡下的坟场里，十三年前第一个死人从这里起身。那口坟仍敞着，一直没人敢填。",
   "阿德蕾西娅家的坟在第三排。她路过的时候没有停，只是嘴里念的数目断了一下，又接上了。",
   "栅门里面站满了死人，有穿寿衣的，有穿甲的，还有几个披着十字军的罩袍。钟楼上那口钟还在。",
   {
    "if": "flag.quarantine_open",
    "text": "前排有几张脸你认得。1040 年你开城门放出去的那些人里面，有几个到底还是走回来了。"
   },
   {
    "if": "var.muster >= 2",
    "text": "会师来的人在你身后排开了，{?var.muster >= 4:一共两队，一队是下了马的骑士，一队是张着弓的|只有一队骑士，都下了马}。"
   },
   {
    "if": "party.vezina && flag.vezina_eye",
    "speaker": "薇齐娜",
    "text": "第三排第七个先动，跟着是钟楼下那个穿祭司袍子的。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "打完了得有人回来填土，一座一座地填。这话我先说在这里，到时候你们别嫌我烦。"
   },
   {
    "if": "is.god",
    "text": "它们并不看你。魂拴在那本书上的东西，眼里是没有神的。"
   }
  ],
  "first": [
   "codex ravenhill"
  ],
  "choices": [
   {
    "text": "在栅门外念完安魂词再入内",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "flag fx_prayed"
    ],
    "result": "你念的是专给死人听的那一段。栅门里面前排那几个往后挪了半步，又站住了，钟楼上的绳子自己晃了两晃。"
   },
   {
    "text": "让援军先走，你的人守钟楼",
    "if": "var.muster >= 2",
    "goto": "f_08",
    "effects": [
     "var muster -1",
     "xp 300"
    ],
    "result": "他们上去了，一直打到后半夜，回来的比去的少了一队。阿德蕾西娅把数目报给你，声音平平的。"
   },
   {
    "text": "推门进入",
    "if": "var.muster < 2 && !flag.winters_squire",
    "combat": {
     "title": "山下的坟场",
     "intro": "有什么东西从里面推开栅门。钟楼上还挂着十三年前的钟，绳子倒是新的。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 4
      },
      {
       "id": "wight",
       "n": 2,
       "name": "穿甲的死人"
      },
      {
       "id": "ghoul",
       "n": 2
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲钟",
       "desc": "十三年前，钟声就曾把亡者从栅门引开。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "adv": "flag.fx_prayed"
       },
       "success": {
        "text": "钟响了，它们一齐朝钟楼转过头去，跟十三年前一模一样。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "钟绳是新换的，太滑，你被它带得双脚离了地，摔在了钟楼的台阶上。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "stones",
       "name": "推倒一排墓碑",
       "desc": "最前排的墓碑已经松动。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "adv": "is.martial"
       },
       "success": {
        "text": "墓碑连着底座一起倒了，一块砸一块，一直砸到第三排才停。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓碑没倒，倒是你的肩膀先响了一声。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900"
      ],
      "goto": "f_08"
     },
     "lose": {
      "effects": [
       "var muster -1"
      ],
      "goto": "f_07b"
     },
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      }
     ]
    }
   },
   {
    "text": "推门进入",
    "if": "var.muster < 2 && flag.winters_squire",
    "combat": {
     "title": "山下的坟场",
     "intro": "有什么东西从里面推开栅门。钟楼上还挂着十三年前的钟，绳子倒是新的。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 4
      },
      {
       "id": "wight",
       "n": 2,
       "name": "穿甲的死人"
      },
      {
       "id": "ghoul",
       "n": 2
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲钟",
       "desc": "十三年前，钟声就曾把亡者从栅门引开。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "adv": "flag.fx_prayed"
       },
       "success": {
        "text": "钟响了，它们一齐朝钟楼转过头去，跟十三年前一模一样。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "钟绳是新换的，太滑，你被它带得双脚离了地，摔在了钟楼的台阶上。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "stones",
       "name": "推倒一排墓碑",
       "desc": "最前排的墓碑已经松动。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "adv": "is.martial"
       },
       "success": {
        "text": "墓碑连着底座一起倒了，一块砸一块，一直砸到第三排才停。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓碑没倒，倒是你的肩膀先响了一声。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900"
      ],
      "goto": "f_08"
     },
     "lose": {
      "effects": [
       "var muster -1"
      ],
      "goto": "f_07b"
     },
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      }
     ]
    }
   },
   {
    "text": "推门进入",
    "if": "var.muster >= 2 && var.muster < 4 && !flag.winters_squire",
    "combat": {
     "title": "山下的坟场",
     "intro": "有什么东西从里面推开栅门。钟楼上还挂着十三年前的钟，绳子倒是新的。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 4
      },
      {
       "id": "wight",
       "n": 2,
       "name": "穿甲的死人"
      },
      {
       "id": "ghoul",
       "n": 2
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲钟",
       "desc": "十三年前，钟声就曾把亡者从栅门引开。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "adv": "flag.fx_prayed"
       },
       "success": {
        "text": "钟响了，它们一齐朝钟楼转过头去，跟十三年前一模一样。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "钟绳是新换的，太滑，你被它带得双脚离了地，摔在了钟楼的台阶上。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "stones",
       "name": "推倒一排墓碑",
       "desc": "最前排的墓碑已经松动。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "adv": "is.martial"
       },
       "success": {
        "text": "墓碑连着底座一起倒了，一块砸一块，一直砸到第三排才停。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓碑没倒，倒是你的肩膀先响了一声。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900"
      ],
      "goto": "f_08"
     },
     "lose": {
      "effects": [
       "var muster -1"
      ],
      "goto": "f_07b"
     },
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "推门进入",
    "if": "var.muster >= 2 && var.muster < 4 && flag.winters_squire",
    "combat": {
     "title": "山下的坟场",
     "intro": "有什么东西从里面推开栅门。钟楼上还挂着十三年前的钟，绳子倒是新的。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 4
      },
      {
       "id": "wight",
       "n": 2,
       "name": "穿甲的死人"
      },
      {
       "id": "ghoul",
       "n": 2
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲钟",
       "desc": "十三年前，钟声就曾把亡者从栅门引开。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "adv": "flag.fx_prayed"
       },
       "success": {
        "text": "钟响了，它们一齐朝钟楼转过头去，跟十三年前一模一样。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "钟绳是新换的，太滑，你被它带得双脚离了地，摔在了钟楼的台阶上。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "stones",
       "name": "推倒一排墓碑",
       "desc": "最前排的墓碑已经松动。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "adv": "is.martial"
       },
       "success": {
        "text": "墓碑连着底座一起倒了，一块砸一块，一直砸到第三排才停。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓碑没倒，倒是你的肩膀先响了一声。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900"
      ],
      "goto": "f_08"
     },
     "lose": {
      "effects": [
       "var muster -1"
      ],
      "goto": "f_07b"
     },
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "推门进入",
    "if": "var.muster >= 4 && !flag.winters_squire",
    "combat": {
     "title": "山下的坟场",
     "intro": "有什么东西从里面推开栅门。钟楼上还挂着十三年前的钟，绳子倒是新的。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 4
      },
      {
       "id": "wight",
       "n": 2,
       "name": "穿甲的死人"
      },
      {
       "id": "ghoul",
       "n": 2
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲钟",
       "desc": "十三年前，钟声就曾把亡者从栅门引开。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "adv": "flag.fx_prayed"
       },
       "success": {
        "text": "钟响了，它们一齐朝钟楼转过头去，跟十三年前一模一样。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "钟绳是新换的，太滑，你被它带得双脚离了地，摔在了钟楼的台阶上。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "stones",
       "name": "推倒一排墓碑",
       "desc": "最前排的墓碑已经松动。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "adv": "is.martial"
       },
       "success": {
        "text": "墓碑连着底座一起倒了，一块砸一块，一直砸到第三排才停。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓碑没倒，倒是你的肩膀先响了一声。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900"
      ],
      "goto": "f_08"
     },
     "lose": {
      "effects": [
       "var muster -1"
      ],
      "goto": "f_07b"
     },
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      }
     ]
    }
   },
   {
    "text": "推门进入",
    "if": "var.muster >= 4 && flag.winters_squire",
    "combat": {
     "title": "山下的坟场",
     "intro": "有什么东西从里面推开栅门。钟楼上还挂着十三年前的钟，绳子倒是新的。",
     "enemies": [
      {
       "id": "pestilent_zombie",
       "n": 4
      },
      {
       "id": "wight",
       "n": 2,
       "name": "穿甲的死人"
      },
      {
       "id": "ghoul",
       "n": 2
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "bell",
       "name": "敲钟",
       "desc": "十三年前，钟声就曾把亡者从栅门引开。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "adv": "flag.fx_prayed"
       },
       "success": {
        "text": "钟响了，它们一齐朝钟楼转过头去，跟十三年前一模一样。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "钟绳是新换的，太滑，你被它带得双脚离了地，摔在了钟楼的台阶上。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "stones",
       "name": "推倒一排墓碑",
       "desc": "最前排的墓碑已经松动。成功时，所有敌人受到 3d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "adv": "is.martial"
       },
       "success": {
        "text": "墓碑连着底座一起倒了，一块砸一块，一直砸到第三排才停。",
        "dmgAll": "3d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "墓碑没倒，倒是你的肩膀先响了一声。",
        "selfDmg": "1d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 900"
      ],
      "goto": "f_08"
     },
     "lose": {
      "effects": [
       "var muster -1"
      ],
      "goto": "f_07b"
     },
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      }
     ]
    }
   }
  ]
 },
 "f_07b": {
  "id": "f_07b",
  "title": "钟楼",
  "text": [
   "你们撤进钟楼，拆掉三阶楼梯。下面的东西够不着人，贴着墙抓挠了一整夜。",
   "天亮以后，它们各自散回坟里去了。阿德蕾西娅站在楼顶上数下面躺着的人，数完了说，少了一队。"
  ],
  "next": "f_08"
 },
 "f_08": {
  "id": "f_08",
  "title": "门",
  "art": "ev_adeanic_war",
  "loc": "渡鸦山 · 山上的宅子",
  "text": [
   "山顶的黑墙古堡，当地人叫它“山上的宅子”。渡鸦王曾经住在这里，如今的主人是坎雷克。有一扇大门开着。",
   "门洞里立着一匹马，马上的人拉着面甲，枪竖在马镫旁边。一左一右站着两个穿锈甲的扈从。这副坐姿，你们在洛伦泰内的比武场上见过。",
   "他就是凯伦的至交埃德蒙·净手。死了以后，人们都改口叫他苍手。",
   {
    "if": "flag.palehand_saluted",
    "text": "他认出了你，枪尖抬起来一寸，又放了回去，就这么等着。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "这一位，我得先行个礼再打。家父要是知道我没行礼，非从莫尔班平原的坟里爬回来不可。"
   },
   {
    "if": "party.liv && party.valeran",
    "speaker": "卡斯坦",
    "text": "你行你的礼去！凯伦到底算不算叛徒，我们俩吵了三十年了，今天正好，让他的朋友来评评理。"
   },
   {
    "if": "party.liv && !party.valeran",
    "speaker": "卡斯坦",
    "text": "那是凯伦的朋友，我爹手下的兵。人都死了还坐得这么直，比活着的都强！"
   }
  ],
  "first": [
   "quest crusade stage 2",
   "codex edmund",
   "codex death_knight"
  ],
  "choices": [
   {
    "text": "依骑士团旧礼独自上前",
    "tag": "蓝宝石之眼",
    "if": "faction == 'sapphire' || flag.palehand_saluted",
    "combat": {
     "title": "门",
     "intro": "他端平长枪，向身旁挥手。两个扈从听命退到门柱后。",
     "enemies": [
      {
       "id": "edmund_palehand"
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "visor",
       "name": "掀他的面甲",
       "desc": "他自己恐怕也不愿见到面甲下那张脸。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "面甲掀开了。他赶紧抬手去挡，挡的是自己那张死人的脸。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你刚够着面甲的边，他的盾就先到了。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1000"
      ],
      "goto": "f_08b"
     },
     "lose": {
      "effects": [
       "flag fx_ald_hurt"
      ],
      "goto": "f_08b"
     }
    }
   },
   {
    "text": "照骑士的礼节邀他单挑",
    "if": "!(faction == 'sapphire' || flag.palehand_saluted)",
    "check": {
     "skill": "history",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "party.valeran",
       "n": 3,
       "why": "瓦勒兰在后面小声提词"
      }
     ]
    },
    "ok": {
     "text": "你拿剑尖点了一下地，再抬到眉心，全做对了。他在马上给你还了半个礼。",
     "combat": {
      "title": "门",
      "intro": "他端平长枪，向身旁挥手。两个扈从听命退到门柱后。",
      "enemies": [
       {
        "id": "edmund_palehand"
       }
      ],
      "noAwe": true,
      "specials": [
       {
        "id": "visor",
        "name": "掀他的面甲",
        "desc": "他自己恐怕也不愿见到面甲下那张脸。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "面甲掀开了。他赶紧抬手去挡，挡的是自己那张死人的脸。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "你刚够着面甲的边，他的盾就先到了。",
         "selfDmg": "2d6"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 1000"
       ],
       "goto": "f_08b"
      },
      "lose": {
       "effects": [
        "flag fx_ald_hurt"
       ],
       "goto": "f_08b"
      }
     }
    },
    "fail": {
     "effects": [
      "hp -6"
     ],
     "text": "你把剑抬错了地方。他看看，没有还礼，枪尖直接就过来了。两个扈从也跟着动了。",
     "combat": {
      "title": "门",
      "intro": "他退了十步，压低枪尖。左右两名扈从同时跟上。",
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
      "allies": [
       {
        "id": "knight",
        "name": "阿德蕾西娅"
       }
      ],
      "noAwe": true,
      "specials": [
       {
        "id": "visor",
        "name": "掀他的面甲",
        "desc": "他自己恐怕也不愿见到面甲下那张脸。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "面甲掀开了。他赶紧抬手去挡，挡的是自己那张死人的脸。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "你刚够着面甲的边，他的盾就先到了。",
         "selfDmg": "2d6"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 1000"
       ],
       "goto": "f_08b"
      },
      "lose": {
       "effects": [
        "flag fx_ald_hurt"
       ],
       "goto": "f_08b"
      }
     }
    }
   },
   {
    "text": "不行礼，全队一起上",
    "combat": {
     "title": "门",
     "intro": "他退了十步，压低枪尖。左右两名扈从同时跟上。",
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
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "visor",
       "name": "掀他的面甲",
       "desc": "他自己恐怕也不愿见到面甲下那张脸。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "面甲掀开了。他赶紧抬手去挡，挡的是自己那张死人的脸。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你刚够着面甲的边，他的盾就先到了。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1000"
      ],
      "goto": "f_08b"
     },
     "lose": {
      "effects": [
       "flag fx_ald_hurt"
      ],
      "goto": "f_08b"
     }
    }
   }
  ]
 },
 "f_08b": {
  "id": "f_08b",
  "title": "门洞",
  "text": [
   {
    "if": "!flag.fx_ald_hurt",
    "text": "他是从马上慢慢歪下来的，落地的时候面甲磕开了。{?party.valeran:瓦勒兰蹲下去替他合上，合上之前看了很久。|是阿德蕾西娅替他合上的，她没往里面看。}"
   },
   {
    "if": "!flag.fx_ald_hurt",
    "speaker": "埃德蒙",
    "text": "凯伦说过，赢了要留人。这句话我照办了三十年。这道门归你们了。"
   },
   {
    "if": "flag.fx_ald_hurt",
    "text": "枪尖直奔你的喉咙。阿德蕾西娅用肩膀替你挡下，两块甲片应声碎裂。对手低头看了一眼血，重新竖起枪。"
   },
   {
    "if": "flag.fx_ald_hurt",
    "speaker": "埃德蒙",
    "text": "凯伦说过，赢了要留人。这句话我照办了三十年。至于留下的人往哪里走，我不管。"
   },
   {
    "if": "flag.fx_ald_hurt",
    "text": "他把马拨到一边，让出了半个门洞。"
   },
   {
    "if": "flag.fx_ald_hurt",
    "speaker": "阿德蕾西娅",
    "text": "伤的是左肩。剑还举得起来，就是举不了多久。大人往后数人的时候，我这一份只能算半个了。"
   }
  ],
  "choices": [
   {
    "text": "在门洞休息一刻钟，包扎伤口",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "门洞里背风，有人生了一小堆火，烧的是苍手那两个扈从的枪杆。"
   },
   {
    "text": "将长枪横放在他胸前",
    "if": "!flag.fx_ald_hurt",
    "once": true,
    "effects": [
     "rep escann +1",
     {
      "if": "party.valeran",
      "then": [
       "approval valeran +1"
      ]
     }
    ],
    "result": "那杆枪比看上去要轻。枪杆上刻着一行小字，是凯伦的名字，看得出刻字的人手不大稳。"
   },
   {
    "text": "走进门内",
    "goto": "f_09"
   }
  ]
 },
 "f_09": {
  "id": "f_09",
  "title": "笼子",
  "loc": "山上的宅子 · 前厅",
  "text": [
   "前厅足有四十步深。齐人高的铁笼一直摞到梁下，每个笼门都挂着一块写有数目的木牌。",
   "有的笼子里，人已经发白了，贴着栏杆站着，一声不出。有的还在说话，说自己是哪个村的，家里还剩下谁。地上的稻草有些日子没换了。",
   "里门口站着一个戴冠的人，背朝你们，后背的甲上有一道旧口子，是让人从后面捅的。他是达梅里亚的国王阿雷尔二世，人称“遭叛者”，994 年就死了。",
   {
    "if": "flag.vezina_left && !flag.vezina_eye && !flag.vezina_freed && world.unburied <= 6",
    "text": "左边数第三排有一只笼子，里面坐着薇齐娜。她瘦了很多，手指头在栏杆上一格一格地点，是在数笼子。"
   },
   {
    "if": "flag.vezina_left && !flag.vezina_eye && world.unburied >= 7",
    "text": "左边数第三排有一只笼子空着。木牌上的数目旁边多写了一个名字：薇齐娜·马尔尼德。字写得很工整，是她自己的笔迹。"
   },
   {
    "if": "is.elf",
    "text": "笼子里的人看见你的耳朵，有几个直往后缩，也有几个把手伸了出来。"
   },
   {
    "if": "party.barry",
    "text": "巴里把篮子里剩下的饼掰开，从栏杆缝里一块一块递进去。这次，他一句话也没说。"
   },
   {
    "if": "origin == 'dameria'",
    "text": "马里昂一路跟到了这里。他摘了头盔夹在胳膊下面，看着里门口那个背影。"
   },
   {
    "if": "flag.fx_cages",
    "text": "开过的那一排已经空了，笼门都朝外敞着。"
   }
  ],
  "first": [
   "codex ravenhill_2"
  ],
  "choices": [
   {
    "text": "找出笼里尚能救活的人，为他们开锁",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 16,
     "party": true,
     "adv": "flag.fx_vezina_tip || is.elf"
    },
    "ok": {
     "effects": [
      "flag fx_cages",
      "xp 300"
     ],
     "combat": {
      "title": "翻了一页",
      "intro": "一团灰白的影子钻出墙，脸拉得很长，嘴始终张着。你认出了坎雷克的号魂。",
      "enemies": [
       {
        "id": "bellowing_soul",
        "name": "号魂"
       }
      ],
      "noAwe": true,
      "specials": [
       {
        "id": "cage",
        "name": "推倒一摞空笼子压住它",
        "desc": "铁笼每个都有一人高，层层叠到了屋梁。成功时，所有敌人受到 4d8 点钝击伤害。失败时，行动者受到 1d8 点黯蚀伤害。",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "笼子一只带一只地倒了下去，铁栏从那团东西身上穿过去时，它的叫声都变了调。",
         "dmgAll": "4d8",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "最下面那只笼子里还有人，你收住了手，它可没收。",
         "selfDmg": "1d8",
         "type": "necrotic"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 500"
       ],
       "goto": "f_09"
      },
      "lose": {
       "goto": "f_09"
      }
     },
     "text": "木牌背面有针眼大的记号，发白了的画圈，没发白的画点。你照着画点的开了一排，放出来四十一个人，其中自己能走的有二十六个。这时，里门后面有人翻了一页书。"
    },
    "fail": {
     "effects": [
      "flag fx_cages",
      "hp -8"
     ],
     "combat": {
      "title": "翻了一页",
      "intro": "一团灰白的影子钻出墙，脸拉得很长，嘴始终张着。你认出了坎雷克的号魂。",
      "enemies": [
       {
        "id": "bellowing_soul",
        "name": "号魂"
       }
      ],
      "noAwe": true,
      "specials": [
       {
        "id": "cage",
        "name": "推倒一摞空笼子压住它",
        "desc": "铁笼每个都有一人高，层层叠到了屋梁。成功时，所有敌人受到 4d8 点钝击伤害。失败时，行动者受到 1d8 点黯蚀伤害。",
        "check": {
         "skill": "athletics",
         "dc": 16
        },
        "success": {
         "text": "笼子一只带一只地倒了下去，铁栏从那团东西身上穿过去时，它的叫声都变了调。",
         "dmgAll": "4d8",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "最下面那只笼子里还有人，你收住了手，它可没收。",
         "selfDmg": "1d8",
         "type": "necrotic"
        }
       }
      ],
      "win": {
       "effects": [
        "xp 500"
       ],
       "goto": "f_09"
      },
      "lose": {
       "goto": "f_09"
      }
     },
     "text": "你开到第五只，里面那个已经发白了。他扑出来时，阿德蕾西娅离你还有三步远。你胳膊上多了一排牙印。这时，里门后面有人翻了一页书。"
    }
   },
   {
    "text": "弄清木牌编号的顺序",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 16
    },
    "ok": {
     "effects": [
      "flag fx_tags_read"
     ],
     "text": "牌上的数目是页码，每只笼子都对着那本书里的一页。人还没死，页已经给他留好了，页眉上写着名字。"
    },
    "fail": {
     "effects": [
      "hp -5"
     ],
     "text": "你把手按在木牌上，想摸出法术是怎么走的。木牌冰得厉害，你半条胳膊一直麻到天黑。"
    }
   },
   {
    "text": "打开关着薇齐娜的笼子",
    "if": "flag.vezina_left && !flag.vezina_eye && !flag.vezina_freed && world.unburied <= 6",
    "once": true,
    "effects": [
     "flag vezina_freed",
     "approval vezina +2"
    ],
    "result": [
     {
      "speaker": "薇齐娜",
      "text": "九百九十六只。其中有四只是空的，这四只里面，有一只昨天还不是空的。你那年写给各国的那封信。我在里面背了很多遍，一遍也没背错。"
     },
     "她出来以后，先抬头去数房梁上的渡鸦，可房梁上一只也没有。她把你那页账要了过去，说往下由她来记。"
    ]
   },
   {
    "text": "补办迟了六十年的葬礼",
    "tag": "旧礼",
    "if": "faction == 'rites'",
    "goto": "f_10",
    "effects": [
     "world unburied -1",
     "xp 800"
    ],
    "result": [
     "没有棺材，也没有束腰，只有一小截奈拉特烛，还有他的全名。你把 994 年到今年的年份报给他听，一年一年地报。",
     "报到第五十九年，他把剑放在地上，自己躺了下去，两只手交叠在胸口，冠没有摘。{?origin == 'dameria':马里昂上前替他把冠扶正了。|}"
    ]
   },
   {
    "text": "请马里昂先说",
    "tag": "达梅里亚",
    "if": "origin == 'dameria'",
    "combat": {
     "title": "遭叛者",
     "intro": "马里昂喊了声“祖父”。门口的人停住，剑尖一垂。你们抢先动手。",
     "enemies": [
      {
       "id": "arrel_revenant",
       "hpMult": 0.75
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "马里昂一世",
       "hpMult": 1.5
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "back",
       "name": "绕到他背后那道旧口子",
       "desc": "994 年的那次袭击来自背后。成功时，所有敌人受到 5d8 点穿刺伤害。失败时，行动者受到 2d8 点挥砍伤害。",
       "check": {
        "skill": "acrobatics",
        "dc": 16
       },
       "success": {
        "text": "你的剑尖找着了甲上那道口子。六十年前有人从这里捅进去过，路是现成的。",
        "dmgAll": "5d8",
        "type": "piercing"
       },
       "fail": {
        "text": "谁想从他身边绕过去，他就先对谁出手。这一手他活着的时候就会。",
        "selfDmg": "2d8",
        "type": "slashing"
       }
      },
      {
       "id": "years",
       "name": "把今年是哪一年报给他听",
       "desc": "在他的记忆里，今年仍是 994 年。成功时，所有敌人陷入「震慑」，持续 1 回合。",
       "check": {
        "skill": "history",
        "alt": [
         "persuasion"
        ],
        "dc": 17
       },
       "success": {
        "text": "你报了今年的年份，又报了他孙子的岁数。他停了一停，剑尖垂下去半尺。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "他用六十年前的宫廷话回了你两个字：“退下。”"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 800"
      ],
      "goto": "f_10"
     },
     "lose": {
      "goto": "f_09b"
     }
    }
   },
   {
    "text": "试着从他身边过去，受阻就战",
    "combat": {
     "title": "遭叛者",
     "intro": "他转过身。六十年来一直有人替他扶正王冠，如今王冠仍端正，灰色却已爬上眼眶。",
     "enemies": [
      {
       "id": "arrel_revenant"
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "back",
       "name": "绕到他背后那道旧口子",
       "desc": "994 年的那次袭击来自背后。成功时，所有敌人受到 5d8 点穿刺伤害。失败时，行动者受到 2d8 点挥砍伤害。",
       "check": {
        "skill": "acrobatics",
        "dc": 16
       },
       "success": {
        "text": "你的剑尖找着了甲上那道口子。六十年前有人从这里捅进去过，路是现成的。",
        "dmgAll": "5d8",
        "type": "piercing"
       },
       "fail": {
        "text": "谁想从他身边绕过去，他就先对谁出手。这一手他活着的时候就会。",
        "selfDmg": "2d8",
        "type": "slashing"
       }
      },
      {
       "id": "years",
       "name": "把今年是哪一年报给他听",
       "desc": "在他的记忆里，今年仍是 994 年。成功时，所有敌人陷入「震慑」，持续 1 回合。",
       "check": {
        "skill": "history",
        "alt": [
         "persuasion"
        ],
        "dc": 17
       },
       "success": {
        "text": "你报了今年的年份，又报了他孙子的岁数。他停了一停，剑尖垂下去半尺。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "他用六十年前的宫廷话回了你两个字：“退下。”"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 800"
      ],
      "goto": "f_10"
     },
     "lose": {
      "goto": "f_09b"
     }
    }
   }
  ]
 },
 "f_09b": {
  "id": "f_09b",
  "title": "空笼子",
  "text": [
   "你在铁笼里醒来，门上的木牌还是空白。阿雷尔二世把你们关进来之后，又回门口站岗去了。",
   "阿德蕾西娅在外面用发簪替你们开了锁。你们趁他转身的空当推开了里门。他明明听见了，却没有回头。"
  ],
  "next": "f_10"
 },
 "f_10": {
  "id": "f_10",
  "title": "死去的国王们",
  "art": "ev_apostle",
  "loc": "山上的宅子 · 大厅",
  "text": [
   "长桌两旁的国王个个戴冠，全都已经死了。上首那位还在写字，写完一行才抬眼看你。屋里飘着没药的气味。",
   {
    "speaker": "坎雷克",
    "text": "请坐，请坐，就是椅子不大够。我正写到 1053 年真霜月，再写两页就该写到诸位进门了，劳驾稍等。后脑勺又痒了，这都得怪维纳克。"
   },
   "他右边那把椅子空着，原本坐在上面的阿雷尔二世这时正在门口站岗。左边{?flag.body_quiet || flag.body_left:坐的是卡斯坦五十三世皇帝，头上的冠歪了，没人替他扶|那把也空着}。",
   {
    "if": "!flag.body_quiet && !flag.body_left",
    "speaker": "坎雷克",
    "text": "左边这把椅子，原是留给先帝的。谁知有人抢在我前面把他安葬了，葬得还挺体面。为这事我三十年没睡过一个好觉，虽说我本来也用不着睡。"
   },
   {
    "if": "origin == 'ebonmarck' && (flag.body_quiet || flag.body_left)",
    "text": "五十三世的头慢慢转了过来，朝你胸口那块军团牌{?flag.p_laid_arms:，接着他拿起放在膝头的剑放到了桌上，剑柄朝着外面|}{?flag.p_fought_on:，又朝你点了一下头，手却没离开剑柄|}。"
   },
   {
    "if": "party.liv && flag.liv_saw_body && (flag.body_quiet || flag.body_left)",
    "speaker": "卡斯坦",
    "text": "爹。"
   },
   {
    "if": "party.liv && flag.liv_saw_body && (flag.body_quiet || flag.body_left)",
    "text": "她只叫了这一声。椅子上那位的脸还是朝着桌面。"
   },
   {
    "if": "is.god",
    "text": "他一点也不怕你，反倒从书里抽出一张单子，把你这些年显过的神迹一件一件念了出来，{?var.god_acts >= 4:足足念了半支蜡烛的时间，|好在单子不长，}那口气就像在念一封荐书。念完，他从桌子那头给你推过来一把椅子。"
   },
   {
    "if": "is.god",
    "speaker": "坎雷克",
    "text": "誓词上写的是“至我寿终之日”。所以我找了三十年，就想找一位不会寿终的皇帝。您请坐。"
   }
  ],
  "first": [
   "codex canrec",
   "codex book_of_canrec",
   "codex canrec_2",
   "codex bridle_3"
  ],
  "choices": [
   {
    "text": "追问缰绳究竟是什么",
    "once": true,
    "effects": [
     "xp 150"
    ],
    "result": [
     {
      "speaker": "坎雷克",
      "text": "是契约。誓词就是条款，“至我寿终之日”就是期限。我师父没碰过皇帝的脑子，他只是把契约上听誓的那一方换成了他自己。皇帝对着石头立誓，从此就得听他的。"
     },
     {
      "speaker": "坎雷克",
      "text": "亚科布跟你讲的是手艺，林子里那个老兵跟你讲的是罪，可他们俩谁也没读过契约的正文。{?flag.knows_why_watched:渡鸦山那帮看鸟的倒是读过，读完了。他们选的是坐着不动。|}"
     }
    ]
   },
   {
    "text": "问他收集死者的目的",
    "once": true,
    "effects": [
     "xp 150"
    ],
    "result": [
     {
      "speaker": "坎雷克",
      "text": "活人是会变卦的。一袋金子，一记闷棍，一个字，他就换了主子。死人不改口。"
     },
     {
      "speaker": "坎雷克",
      "text": "这本是花名册。在册的个个都在岗，没有开小差的，也没有欠饷的。至于当年往我这里送尸首的那道令，那是我师父下的，总不能怪到收货的头上。"
     },
     {
      "if": "flag.knows_canrec_plan",
      "speaker": "坎雷克",
      "text": "修山那一段，你们已经读过我的信了。我就不重讲了。一位死了也照样在位的皇帝，你们说说，这主意有什么不好？"
     }
    ]
   },
   {
    "text": "把守砖人的勺子摆到五十三世面前",
    "if": "item.stew_spoon >= 1 && (flag.body_quiet || flag.body_left)",
    "once": true,
    "effects": [
     "flag fx_spoon"
    ],
    "result": "五十三世朝勺子看了一眼。这一眼看了很久。坎雷克翻书的手停住了。这是他第一次露出没料到的样子。"
   },
   {
    "text": "坐进他递来的椅子，听他讲完",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "var god_acts +1",
     "flag knows_word",
     {
      "if": "party.liv",
      "then": [
       "approval liv -1"
      ]
     },
     {
      "if": "party.valeran",
      "then": [
       "approval valeran -1"
      ]
     },
     {
      "if": "party.barry",
      "then": [
       "approval barry -1"
      ]
     },
     {
      "if": "party.vezina",
      "then": [
       "approval vezina -1"
      ]
     }
    ],
    "result": [
     "椅子是硬的。你肯坐，他高兴得很，把那个字当见面礼念给你听了。字一出口，烛火齐齐往一边倒，前厅的笼子也一齐响了一声。",
     {
      "speaker": "阿德蕾西娅",
      "text": "大人，您坐下去的时候我数了一遍，屋里站着的活人少了一个。"
     },
     {
      "if": "party.liv",
      "speaker": "卡斯坦",
      "text": "神得排在皇帝后面！这把椅子是给皇帝坐的，你坐错地方了，快起来！"
     }
    ]
   },
   {
    "text": "等他把话讲完",
    "goto": "f_10b"
   }
  ]
 },
 "f_10b": {
  "id": "f_10b",
  "title": "那个字",
  "text": [
   {
    "if": "flag.castan_crowned && flag.castan_alive && !flag.castan_pc",
    "text": "坎雷克把笔搁下，朝你们身后看了过去。站在那里的是山上那位皇帝{?flag.castan_garrec:，加雷克，今年五十五岁了，手里的剑还是他父亲那一路的|}{?flag.castan_lucan:，卢坎，今年三十四岁，耳朵尖冻得发红|}{?flag.castan_liv:，卡斯坦，今年六十一岁了，嘴里还在嚼着东西|}。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive",
    "text": "坎雷克开口。只有一个字。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc",
    "text": "烛火齐齐往一边倒。前厅的笼子一齐响了一声，是关在里面的人同时抓住了栏杆。皇帝的左脚向前迈了一步，右脚也跟了上去。他的身子不听他的了，只有那双眼睛还是他自己的。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_liv",
    "speaker": "卡斯坦",
    "text": "我的脚！掌玺大臣，朕的脚不听朕的了！"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_pc",
    "text": "烛火齐齐往一边倒，前厅的笼子一齐响了一声。你的左脚向前迈了一步，可你并没有叫它迈。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.knot_cut",
    "text": "烛火晃了晃，又立直了，前厅那边一点动静也没有。{?flag.castan_pc:你的脚还好好地站在原地。|皇帝低头看了看自己的脚，又抬头看了看坎雷克。}"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.knot_cut",
    "speaker": "坎雷克",
    "text": "解了？这是谁给解的？"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && flag.knot_cut",
    "text": "他把那个字又念了一遍，这次念得很慢，就像在核一笔怎么也对不上的账。"
   },
   {
    "if": "!(flag.castan_crowned && flag.castan_alive)",
    "text": "坎雷克把笔搁下，朝你们身后看看，接着又看了一遍。"
   },
   {
    "if": "!(flag.castan_crowned && flag.castan_alive)",
    "speaker": "坎雷克",
    "text": "{?flag.mountain_sealed:山封了。|三十三年了，山上连一位皇帝也没有。}我备下了一个字，等了半辈子，如今竟没处念。也罢，那就照老办法点名。"
   },
   {
    "if": "!(flag.castan_crowned && flag.castan_alive)",
    "text": "他把书翻到中间，拿手指按住了一个名字。"
   },
   {
    "if": "party.vezina",
    "text": "薇齐娜把本子合上了。她上一次这么干，还是在试炼山的绳子下面。"
   }
  ],
  "enter": [
   "unflag fx_emp_foe",
   "unflag fx_emp_ally",
   "unflag fx_pc_dragged"
  ],
  "choices": [
   {
    "text": "接上你知道的半个字",
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc && flag.knows_word",
    "goto": "f_11",
    "effects": [
     "flag bridle_pc",
     {
      "if": "party.vezina",
      "then": [
       "approval vezina -1"
      ]
     }
    ],
    "result": "你只会前半个字，后半个他刚才已经替你念了。两半一合上，皇帝的脚就停了，绳子到了你手里。他回头看你，那眼神同刚才看坎雷克的时候没有两样。"
   },
   {
    "text": "向伊迪丝点头示意",
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc && world.writ >= 7",
    "goto": "f_11",
    "effects": [
     "flag bridle_wise",
     {
      "if": "party.vezina",
      "then": [
       "approval vezina -1"
      ]
     },
     {
      "if": "party.valeran",
      "then": [
       "approval valeran -1"
      ]
     }
    ],
    "result": [
     "伊迪丝摘下一只手套，只说了很短的一句话。皇帝的脚停了，他转过身去，面朝她站着。",
     {
      "speaker": "伊迪丝",
      "text": "我接住了。只要我不松手，他就不走。这话你听着耳熟吧？"
     }
    ]
   },
   {
    "text": "趁他没到桌边就动手",
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc",
    "combat": {
     "title": "被牵的皇帝",
     "intro": "皇帝转过来，平举着剑。看他的口型，他说的是“别留手”。",
     "enemies": [
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "name",
       "name": "喊他的本名",
       "desc": "他仍有自己的意识，只是无法控制身体。成功时，所有敌人陷入「震慑」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "alt": [
         "intimidation"
        ],
        "dc": 17
       },
       "success": {
        "text": "你喊的是他的名字，没带帝号。他挣回来一口气，剑停在了半空。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "他是听见了，可他的脚没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "unflag castan_alive",
       {
        "if": "flag.castan_liv",
        "then": [
         "flag liv_dead"
        ]
       },
       "xp 900"
      ],
      "goto": "f_11"
     },
     "lose": {
      "effects": [
       "flag fx_emp_foe"
      ],
      "goto": "f_11"
     }
    }
   },
   {
    "text": "先应对桌子另一端的人",
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.castan_pc",
    "goto": "f_11",
    "effects": [
     "flag fx_emp_foe"
    ],
    "result": "皇帝走到坎雷克的椅子后面，转过身拔了剑。他的嘴在动，却没出声，看口型是两个字：快点。"
   },
   {
    "text": "咬住半个字，稳住双脚",
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_pc && flag.knows_word",
    "goto": "f_11",
    "effects": [
     "flag bridle_pc"
    ],
    "result": "前后两半字在你嘴里合上了，脚也跟着停了。牵你的那根绳子，另一头如今攥在你自己手里。"
   },
   {
    "text": "竭力站稳",
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && flag.castan_pc && !flag.knows_word",
    "goto": "f_11",
    "effects": [
     "flag fx_pc_dragged"
    ],
    "result": [
     "你到底没站住。走到第四步，后脑勺上重重挨了一下，是阿德蕾西娅拿剑柄砸的。",
     {
      "speaker": "阿德蕾西娅",
      "text": "这是沼泽堡的土办法，砸一下能清醒一阵。大人，您这口气长不了，得省着用。"
     }
    ]
   },
   {
    "text": "说出解咒者的名字",
    "if": "flag.castan_crowned && flag.castan_alive && flag.knot_cut",
    "goto": "f_11",
    "effects": [
     {
      "if": "!flag.castan_pc",
      "then": [
       "flag fx_emp_ally"
      ]
     },
     "xp 150"
    ],
    "result": [
     "{?flag.god_half_sentence:你说是你自己，顺手就扯下来了，|}{?!flag.god_half_sentence && flag.knot_alarian:你说是塞纳蒂尔的阿拉里安，用的是一把竖琴，|}{?!flag.god_half_sentence && flag.knot_ravens:你说是渡鸦山那帮看鸟的，|}{?!flag.god_half_sentence && flag.knot_iacob:你说是亚科布，他是戴着罪干的这趟活，|}至于最后那一股，是一位半身人国王从兜里掏出来的。",
     {
      "speaker": "坎雷克",
      "text": "三十三年！我等活人修山等了三十三年，他们倒好，修山的时候顺手把我的字给拆了。这次后脑勺是真痒了。"
     }
    ]
   },
   {
    "text": "拔剑作答",
    "if": "flag.castan_crowned && flag.castan_alive && flag.knot_cut",
    "goto": "f_11",
    "effects": [
     {
      "if": "!flag.castan_pc",
      "then": [
       "flag fx_emp_ally"
      ]
     },
     {
      "if": "party.liv",
      "then": [
       "approval liv +1"
      ]
     }
    ],
    "result": "{?flag.castan_pc:你拔了剑。坎雷克把那个字念了第三遍，声音小了下去。|皇帝先拔了剑，站到了你左边。坎雷克把那个字念了第三遍，声音小了下去。}"
   },
   {
    "text": "问他指的是谁的名字",
    "if": "!(flag.castan_crowned && flag.castan_alive)",
    "goto": "f_11",
    "effects": [
     "xp 150"
    ],
    "result": [
     {
      "speaker": "坎雷克",
      "text": "屠夫原，四百零六座坟里的第三百九十一位。你们的账页上有他，我的名册上也有他。两本账对得上，这是我最得意的地方。"
     }
    ]
   },
   {
    "text": "拔剑应战",
    "if": "!(flag.castan_crowned && flag.castan_alive)",
    "goto": "f_11",
    "effects": [
     {
      "if": "party.liv",
      "then": [
       "approval liv +1"
      ]
     }
    ],
    "result": "他叹了口气，说他这辈子每次讲到要紧的地方，总有人拔剑。"
   }
  ]
 },
 "f_11": {
  "id": "f_11",
  "title": "谁付账",
  "art": "ev_priest_phantom",
  "text": [
   "坎雷克起身，袍摆拖在地上。离开高椅，他看起来更矮了。桌上摊着的书没人碰，纸页却一张张翻动。",
   {
    "speaker": "坎雷克",
    "text": "名册上还有空行，诸位可以自己挑一行。字由我来写，我的字比你们的好。"
   },
   {
    "if": "flag.fx_emp_foe",
    "text": "皇帝站在他椅子后面，{?flag.castan_liv:爪尖冲着地|剑已经出了鞘}，眼睛一直看着你。"
   },
   {
    "if": "flag.fx_emp_ally",
    "text": "皇帝站在你左边，烙着誓词的那只手按在{?flag.castan_liv:腰间的酒壶上|剑柄上}，说这一仗就算是山上欠山下的。"
   },
   {
    "if": "flag.bridle_pc && flag.castan_crowned && flag.castan_alive && !flag.castan_pc",
    "text": "皇帝站在你身后三步远的地方，一动也不动。只要你不开口，他就不会动。"
   },
   {
    "if": "flag.bridle_wise && flag.castan_crowned && flag.castan_alive",
    "text": "皇帝站在伊迪丝身后三步远的地方，一动也不动。"
   },
   {
    "if": "flag.fx_liii_up",
    "text": "左边的椅子响了一声，是五十三世在起身。他起得很慢，一只手先撑住了桌沿。阿德蕾西娅已经同书里出来的东西打上了，腾不出手来。"
   },
   {
    "if": "flag.fx_liii_done",
    "text": "五十三世倒在他那把椅子旁边，冠滚到了桌下。"
   },
   {
    "if": "flag.vezina_freed",
    "text": "薇齐娜站在门边，手里拿着你那页账，眼睛在书和账页之间来回地看。"
   },
   {
    "if": "var.muster >= 2",
    "text": "会师来的人已经把大厅的两扇门都堵住了。"
   }
  ],
  "enter": [
   "var fx_ald =1",
   {
    "if": "flag.winters_squire",
    "then": [
     "var fx_ald +1"
    ]
   },
   {
    "if": "flag.fx_ald_hurt",
    "then": [
     "var fx_ald -1"
    ]
   },
   {
    "if": "(flag.body_quiet || flag.body_left) && !(origin == 'ebonmarck' && flag.p_laid_arms) && !flag.fx_liii_done",
    "then": [
     "flag fx_liii_up"
    ],
    "else": [
     "unflag fx_liii_up"
    ]
   },
   "var fx_cfg =0",
   {
    "if": "flag.fx_emp_foe",
    "then": [
     "var fx_cfg +9"
    ]
   },
   {
    "if": "flag.fx_emp_ally && !flag.fx_emp_foe",
    "then": [
     "var fx_cfg +18"
    ]
   },
   {
    "if": "var.muster >= 2 && var.muster < 4",
    "then": [
     "var fx_cfg +3"
    ]
   },
   {
    "if": "var.muster >= 4",
    "then": [
     "var fx_cfg +6"
    ]
   },
   {
    "if": "var.fx_ald == 1",
    "then": [
     "var fx_cfg +1"
    ]
   },
   {
    "if": "var.fx_ald >= 2",
    "then": [
     "var fx_cfg +2"
    ]
   }
  ],
  "choices": [
   {
    "text": "举起军团牌，代他再下令一次",
    "tag": "乌霜边区",
    "if": "flag.fx_liii_up && origin == 'ebonmarck'",
    "check": {
     "skill": "persuasion",
     "alt": [
      "religion"
     ],
     "dc": 16,
     "mods": [
      {
       "if": "flag.fx_spoon",
       "n": 2,
       "why": "守砖人的勺子还在桌上"
      }
     ]
    },
    "ok": {
     "goto": "f_11",
     "effects": [
      "flag fx_liii_done",
      "xp 800"
     ],
     "text": "你用军团的喊法喊了一声“放下兵器”。他站了一会儿，把乌钢剑平放在桌上，又坐了回去。这次坐得比刚才还直。"
    },
    "fail": {
     "text": "他听见了，头朝你这边偏了偏。可坎雷克在那头咳了一声。他的手又握紧了。",
     "combat": {
      "title": "左手边那位",
      "intro": "五十三世挺直身子，从椅背后缓缓抽出乌钢剑。",
      "enemies": [
       {
        "id": "castan_liii_revenant"
       }
      ],
      "noAwe": true,
      "specials": [
       {
        "id": "order",
        "name": "把他最后那道令喊回给他",
        "desc": "沼泽堡那天，他下的命令是放下武器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点心灵伤害。",
        "check": {
         "skill": "intimidation",
         "alt": [
          "performance"
         ],
         "dc": 17,
         "adv": "item.legion_token >= 1"
        },
        "success": {
         "text": "“放下兵器！”他的手松了一下。这三十七年里，他自己做主下过的令只有这一道。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "他抬起一只手。你们还没来得及想，握兵器的手就先松了一下。",
         "selfDmg": "2d6",
         "type": "psychic"
        }
       }
      ],
      "win": {
       "effects": [
        "flag fx_liii_done",
        "xp 800"
       ],
       "goto": "f_11"
      },
      "lose": {
       "effects": [
        "flag fx_liii_done",
        "flag fx_ald_hurt"
       ],
       "goto": "f_11"
      }
     }
    }
   },
   {
    "text": "先拦住卡斯坦五十三世",
    "if": "flag.fx_liii_up && flag.fx_spoon",
    "combat": {
     "title": "左手边那位",
     "intro": "五十三世站起来，目光仍落在桌上那柄木勺上。剑拔了一半，他才想起该接着往外抽。",
     "enemies": [
      {
       "id": "castan_liii_revenant",
       "hpMult": 0.7
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "order",
       "name": "把他最后那道令喊回给他",
       "desc": "沼泽堡那天，他下的命令是放下武器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点心灵伤害。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 17,
        "adv": "item.legion_token >= 1"
       },
       "success": {
        "text": "“放下兵器！”他的手松了一下。这三十七年里，他自己做主下过的令只有这一道。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "他抬起一只手。你们还没来得及想，握兵器的手就先松了一下。",
        "selfDmg": "2d6",
        "type": "psychic"
       }
      }
     ],
     "win": {
      "effects": [
       "flag fx_liii_done",
       "xp 800"
      ],
      "goto": "f_11"
     },
     "lose": {
      "effects": [
       "flag fx_liii_done",
       "flag fx_ald_hurt"
      ],
      "goto": "f_11"
     }
    }
   },
   {
    "text": "先拦住卡斯坦五十三世",
    "if": "flag.fx_liii_up && !flag.fx_spoon",
    "combat": {
     "title": "左手边那位",
     "intro": "五十三世挺直身子，从椅背后缓缓抽出乌钢剑。",
     "enemies": [
      {
       "id": "castan_liii_revenant"
      }
     ],
     "noAwe": true,
     "specials": [
      {
       "id": "order",
       "name": "把他最后那道令喊回给他",
       "desc": "沼泽堡那天，他下的命令是放下武器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d6 点心灵伤害。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 17,
        "adv": "item.legion_token >= 1"
       },
       "success": {
        "text": "“放下兵器！”他的手松了一下。这三十七年里，他自己做主下过的令只有这一道。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "他抬起一只手。你们还没来得及想，握兵器的手就先松了一下。",
        "selfDmg": "2d6",
        "type": "psychic"
       }
      }
     ],
     "win": {
      "effects": [
       "flag fx_liii_done",
       "xp 800"
      ],
      "goto": "f_11"
     },
     "lose": {
      "effects": [
       "flag fx_liii_done",
       "flag fx_ald_hurt"
      ],
      "goto": "f_11"
     }
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 0",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 1",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 2",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 3",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 4",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 5",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 6",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 7",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 8",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 9",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 10",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 11",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 12",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 13",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 14",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 15",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你翻到屠夫原那一页，读出四百零六人中的前面三十个。每读到一个名字，书里就少一声惨叫，号魂的轮廓也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 16",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 17",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 18",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 19",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 20",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 21",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 22",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 23",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 24",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书中无人应你。回话的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 0.5
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 25",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅"
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   },
   {
    "text": "迎战坎雷克和死去的国王",
    "if": "!flag.fx_liii_up && var.fx_cfg == 26",
    "combat": {
     "title": "死去的国王们",
     "intro": "坎雷克翻开书，念出第一个名字。书页间传来一声应答。",
     "noAwe": true,
     "fleeable": false,
     "specials": [
      {
       "id": "names",
       "name": "照账页念名字",
       "desc": "魔典里每一页都记着名字。念对了，书里的亡魂就能松口气。成功时，所有敌人受到 6d8 点光耀伤害。失败时，行动者受到 2d8 点黯蚀伤害。",
       "once": false,
       "check": {
        "skill": "history",
        "alt": [
         "religion"
        ],
        "dc": 17,
        "adv": "flag.vezina_freed || flag.fx_tags_read",
        "mods": [
         {
          "if": "item.ledger_page < 1",
          "n": -8,
          "why": "手里没有账页"
         },
         {
          "if": "flag.fx_walked",
          "n": 2,
          "why": "雾林里那些木牌你走过一遍"
         }
        ]
       },
       "success": {
        "text": "你念的是屠夫原那一页，四百零六个里的头三十个。念到谁，书里就少一声叫，号魂也跟着淡了一圈。",
        "dmgAll": "6d8",
        "type": "radiant"
       },
       "fail": {
        "text": "你念错了一个姓。书里的人没答应，答应你的是别的东西。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "itch",
       "name": "抓他后脑勺",
       "desc": "三十年来，他始终够不到后脑勺上那处发痒的地方。成功时，所有敌人陷入「目盲」，持续 2 回合。失败时，行动者受到 2d10 点寒冷伤害。",
       "check": {
        "skill": "sleight",
        "dc": 18,
        "adv": "class == 'rogue'"
       },
       "success": {
        "text": "你的指甲刚碰到那块地方，他两只手就都顾不上书了，嘴里骂了一声“维纳克”。那是一个死了四十年的人。",
        "applyAll": {
         "cond": "blinded",
         "turns": 2
        }
       },
       "fail": {
        "text": "他偏了偏头，你只抓着一把袍领，领子下面是冰凉的。",
        "selfDmg": "2d10",
        "type": "cold"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1500"
      ],
      "goto": "f_11c"
     },
     "lose": {
      "effects": [
       "flag fx_lost"
      ],
      "goto": "f_11c"
     },
     "enemies": [
      {
       "id": "canrec_lich"
      },
      {
       "id": "bellowing_soul",
       "n": 2,
       "name": "号魂"
      }
     ],
     "allies": [
      {
       "id": "knight",
       "name": "阿德蕾西娅",
       "hpMult": 2
      },
      {
       "id": "knight",
       "n": 2,
       "name": "十字军骑士"
      },
      {
       "id": "archer",
       "n": 2,
       "name": "会师的弓手"
      },
      {
       "id": "war_priest",
       "name": "随军的收殓人"
      },
      {
       "id": "bridled_emperor",
       "name": "卡斯坦五十四世"
      }
     ]
    }
   }
  ]
 },
 "f_11c": {
  "id": "f_11c",
  "title": "谁付账",
  "text": [
   {
    "if": "!flag.fx_lost",
    "text": "坎雷克倒在桌腿旁边，袍子瘪下去一半，嘴还在动。号魂缩回了书里，撑得书页鼓鼓的，一下一下地往外顶。"
   },
   {
    "if": "flag.fx_lost",
    "text": "你们能爬起来，全靠阿德蕾西娅一个人在前面顶着。坎雷克倒在了桌腿旁边。她靠着桌子才站得住，左边的甲全裂开了，血顺着剑往下淌。"
   },
   {
    "speaker": "坎雷克",
    "text": "我死了，书还在。撕掉写着我名字的那页，这些人就自由了。他们脱身后，第一个撕的就是动手撕书的人。翻翻序言吧，我写得很清楚。"
   },
   {
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise && !flag.castan_pc",
    "text": "他歪过头，把那个字又念了一遍。这次念得清清楚楚，像是在教人。烛火朝你们这一边倒了过来。"
   },
   {
    "if": "flag.winters_squire",
    "speaker": "阿德蕾西娅",
    "text": "您教过我，盖印之前得先数人。我数过了，去一个人就够。"
   },
   {
    "if": "!flag.winters_squire",
    "speaker": "阿德蕾西娅",
    "text": "大人，十三年前在坟旁边是我数的，今天也该由我来数。我数过了，去一个人就够。"
   },
   {
    "if": "is.immortal",
    "speaker": "阿德蕾西娅",
    "text": "您别往前站。您去了不算数。您不会死，书里的魂撕不动您，这笔账就得一直挂着。"
   },
   {
    "if": "flag.fx_pc_dragged",
    "text": "你的脚又在往桌子那边挪了，后脑勺上挨的那一下顶不了多久。这口气够你走到书面前，可不够你再走回来。"
   },
   {
    "if": "flag.fx_lost && !flag.fx_pc_dragged",
    "text": "阿德蕾西娅已经把手按在书上了。屋里别的人这时都还没站稳。"
   }
  ],
  "first": [
   {
    "if": "item.book_of_canrec < 1",
    "then": [
     "item +book_of_canrec"
    ]
   },
   "quest crusade done",
   "quest sixteen_graves done",
   "quest canrec_trail done"
  ],
  "choices": [
   {
    "text": "让阿德蕾西娅撕下书页",
    "if": "!flag.fx_pc_dragged",
    "goto": "f_12",
    "effects": [
     "flag price_aldresia",
     "item +silversong",
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     "她把银歌解下来放到你手里，说剑用不着陪她去，说完就把那一页撕了。",
     "撕纸声不大。书里出来的东西只找她一个人，不多时，屋里就静了。"
    ]
   },
   {
    "text": "亲手撕下那一页",
    "if": "!flag.fx_pc_dragged && !flag.fx_lost",
    "goto": "f_12",
    "effects": [
     "flag price_pc",
     {
      "if": "is.mortal",
      "then": [
       "flag fx_pc_dead",
       {
        "if": "flag.castan_pc",
        "then": [
         "unflag castan_alive"
        ]
       }
      ]
     },
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     {
      "if": "is.mortal",
      "text": "你把印摘下来塞给阿德蕾西娅，她没接稳，印掉在了地上{?party.liv:，卡斯坦骂了很长的一句|}。那一页比看上去要厚，你撕了两下才撕下来。"
     },
     {
      "if": "is.mortal",
      "text": "再往后的事，你没能看见。"
     },
     {
      "if": "is.immortal",
      "text": "你把那一页撕了。书里的东西全扑到你身上，撕了很久，就是撕不动你。等它们停了手，你左手从腕子到肘弯多了一道白印。"
     },
     {
      "if": "is.immortal",
      "speaker": "阿德蕾西娅",
      "text": "我说过不算数的。您看，它们没走。它们拿您当自己人了。"
     }
    ]
   },
   {
    "text": "让主动站出来的瓦勒兰去",
    "if": "!flag.fx_pc_dragged && !flag.fx_lost && party.valeran && approval.valeran >= 6",
    "goto": "f_12",
    "effects": [
     "flag price_companion",
     "flag price_valeran",
     "companion -valeran",
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     {
      "speaker": "瓦勒兰",
      "text": "这一份该是我的。您还得回去交印，她才二十七岁，我已经五十二了。家父死在莫尔班平原那年，比我现在还小十岁。"
     },
     "撕那一页之前，他先把手套摘了，叠好了放在桌角上。"
    ]
   },
   {
    "text": "接下酒壶，让卡斯坦去",
    "if": "!flag.fx_pc_dragged && !flag.fx_lost && party.liv && approval.liv >= 6 && !flag.liv_bridled",
    "goto": "f_12",
    "effects": [
     "flag price_companion",
     "flag price_liv",
     "companion -liv",
     {
      "if": "flag.castan_liv",
      "then": [
       "unflag castan_alive",
       "flag liv_dead"
      ]
     },
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     {
      "speaker": "卡斯坦",
      "text": "五十四世批了，这笔账由朕来付！壶里还剩一半，你替我喝了，别洒了。"
     },
     "她是飞过去的，这是她最后一次飞，翅膀扫倒了桌上三支蜡烛。"
    ]
   },
   {
    "text": "叫出皇帝的名字，请他亲自撕",
    "goto": "f_12",
    "if": "flag.fx_emp_foe && !flag.fx_lost && flag.castan_crowned && flag.castan_alive && ((flag.castan_garrec && rep.dragon >= 3) || (flag.castan_lucan && (flag.lucan_marion || flag.lucan_garrec || (flag.lucan_alva && flag.years_wards))) || (flag.castan_liv && approval.liv >= 4))",
    "effects": [
     "flag price_emperor",
     "unflag castan_alive",
     {
      "if": "flag.castan_liv",
      "then": [
       "flag liv_dead"
      ]
     }
    ],
    "result": [
     "你喊的是他的名字，没带帝号。他挣回来半口气，同当年五十三世在沼泽堡喊“放下兵器”那次一样。这半口气他没拿来说话。",
     "他走到桌边，把那一页撕了。书里出来的东西只找他一个人。{?flag.castan_liv:撕之前她还回头冲你喊了一句，酒钱不用结了。|}"
    ]
   },
   {
    "text": "叫出皇帝的名字，请他亲自撕",
    "once": true,
    "if": "flag.fx_emp_foe && !flag.fx_lost && flag.castan_crowned && flag.castan_alive && !((flag.castan_garrec && rep.dragon >= 3) || (flag.castan_lucan && (flag.lucan_marion || flag.lucan_garrec || (flag.lucan_alva && flag.years_wards))) || (flag.castan_liv && approval.liv >= 4))",
    "effects": [
     "hp -5"
    ],
    "result": "他的眼睛朝你转过来了，嘴也张了张，脚却没动。你同他之间的那点交情，还不够换这半口气。书页在你手边掀了一下，生生掀掉你一层皮。"
   },
   {
    "text": "走到书前，亲手撕页",
    "if": "flag.fx_pc_dragged",
    "goto": "f_12",
    "effects": [
     "flag price_emperor",
     {
      "if": "is.mortal",
      "then": [
       "flag fx_pc_dead",
       "unflag castan_alive"
      ]
     },
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     {
      "if": "is.mortal",
      "text": "你走过去了。脚是别人牵着的，手还是你自己的，你就用这只手把那一页撕了。阿德蕾西娅在你身后数数，刚数到一就停了。"
     },
     {
      "if": "is.mortal",
      "text": "再往后的事，你没能看见。"
     },
     {
      "if": "is.immortal",
      "text": "你走过去，把那一页撕了。书里的东西扑上来撕了很久，就是撕不动你。从那以后，你烙着誓词的那只手上多了一道白印。"
     }
    ]
   },
   {
    "text": "保留书页，从第一个名字开始念",
    "if": "!flag.fx_pc_dragged && !flag.fx_lost && world.unburied <= 3 && item.ledger_page >= 1 && flag.knows_roster",
    "goto": "f_12",
    "effects": [
     "flag price_names",
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     "{?is.god:你只用一夜就念完。书里的魂在这一夜全出去了，大厅的窗纸破了一半。|你念了第一个名字，书页平下去一点。你又念第二个。阿德蕾西娅搬来一把椅子，这次你坐了。}",
     "坎雷克那一页留在最后。{?flag.fx_walked:雾林里那些木牌上的名字。你念得最顺口。|}他得先把前面所有的名字听完。"
    ]
   },
   {
    "text": "拦下众人，自己承接书主的记号",
    "if": "!flag.fx_pc_dragged && !flag.fx_lost",
    "goto": "f_12",
    "effects": [
     "flag book_kept",
     {
      "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
      "then": [
       {
        "if": "world.writ >= 7 || flag.fx_pc_dead",
        "then": [
         "flag bridle_wise"
        ],
        "else": [
         "flag bridle_pc",
         "flag knows_word"
        ]
       }
      ]
     }
    ],
    "result": [
     "你把手按在书脊上。书主的记号换到你手上时，一点声音也没有。坎雷克看着你，第一次没抱怨。",
     {
      "speaker": "坎雷克",
      "text": "这一招我可没想到。字还是我来写，你的字我看过，不行。"
     }
    ]
   }
  ]
 },
 "f_12": {
  "id": "f_12",
  "title": "那本书",
  "art": "ev_magic_study_and_relax",
  "loc": "渡鸦山 · 山上的宅子",
  "text": [
   "灰白晨光透过窗纸。长桌两侧的国王歪坐在椅子里，王冠散落一地。坎雷克的高椅空了，坐垫上还留着凹痕。",
   {
    "if": "flag.price_aldresia",
    "text": "阿德蕾西娅躺在长桌的另一头，十字军的人拿她自己的斗篷盖住了她的脸。银歌在你手里，剑柄还是热的。"
   },
   {
    "if": "flag.fx_pc_dead",
    "text": "他们把你抬到了长桌的另一头。阿德蕾西娅攥着你的印坐了一夜，到天亮时，指缝里全是蜡渣。"
   },
   {
    "if": "flag.price_pc && is.immortal",
    "text": "你左手那道白印到天亮也没褪。书倒是不往外顶了，只是隔一会儿就自己翻过去一页，像是在里面找你。"
   },
   {
    "if": "flag.price_emperor && !flag.castan_pc",
    "text": "皇帝躺在他亲手撕下来的那一页旁边，手背上烙的誓词到天亮也没褪色。"
   },
   {
    "if": "flag.price_emperor && flag.castan_pc && is.immortal",
    "text": "你手背上烙的誓词旁边多了一道白印。两道印紧挨着，一道是山给的，一道是书给的。"
   },
   {
    "if": "flag.price_valeran",
    "text": "瓦勒兰躺在长桌的另一头。他叠好的那副手套还在桌角上，谁也没去动。"
   },
   {
    "if": "flag.price_liv",
    "text": "卡斯坦躺在长桌上，翅膀收不拢，一直垂到了地上。她的酒壶挂在你腰上，里面还剩一半。"
   },
   {
    "if": "flag.price_names && !is.god",
    "text": "你还在念，账页摊在膝头上，已经念到了第一百一十二个。阿德蕾西娅换了三次蜡烛，每次都要问你喝不喝水。"
   },
   {
    "if": "flag.price_names && is.god",
    "text": "你只用一夜就念完。书里空了一大半，剩下的只有坎雷克那一页，薄得都透光了。"
   },
   {
    "if": "flag.book_kept",
    "text": "书主的记号到了你手背上，颜色同没药一样。这一夜，死人一个个躺下了，你坐在这里，一个一个都听得见。"
   },
   "卢西安·西尔·维文是踩着雪上山来的，靴子上却糊满了沼地的泥。他在门口数数桌边的椅子，把帽子摘了下来。",
   {
    "speaker": "卢西安",
    "text": "布勒瓦尔那边来了信，贾赫封我做科乌里亚的护国公。这信是半年前写的，那时候他连我们打不打得赢都不知道。"
   },
   {
    "if": "!flag.book_kept",
    "speaker": "卢西安",
    "text": "这本书怎么办？我的兵肯定要问，第一句就得问烧不烧得掉。"
   },
   {
    "if": "!flag.price_aldresia && !flag.fx_pc_dead",
    "speaker": "阿德蕾西娅",
    "text": "大人，桌边一共四十一把椅子，戴冠的是三十九个。我数了三遍，第三遍多出来一个，原来是我自己坐下了。"
   },
   {
    "if": "party.barry",
    "text": "巴里在厨房里找着了一口锅，正拿雪擦。"
   },
   {
    "if": "party.barry",
    "speaker": "巴里",
    "text": "对不住，这屋里没有一样能吃的，连盐罐里装的都是牙。那本书的事你们慢慢商量，我先去把锅烧上。"
   },
   {
    "if": "party.vezina",
    "speaker": "薇齐娜",
    "text": "七只。昨天窗外还有四十只渡鸦。要是它们不回来了，我说的是要是，这山上往后就清净了。"
   },
   {
    "if": "is.god",
    "text": "院子里跪了一大片十字军。领头的那个问你，大人往后打算坐在哪里。他们好把那把椅子抬下山去。"
   }
  ],
  "enter": [
   {
    "if": "flag.castan_crowned && flag.castan_alive && !flag.knot_cut && !flag.bridle_pc && !flag.bridle_wise",
    "then": [
     {
      "if": "world.writ >= 7 || flag.fx_pc_dead",
      "then": [
       "flag bridle_wise"
      ],
      "else": [
       "flag bridle_pc",
       "flag knows_word"
      ]
     }
    ]
   },
   {
    "if": "!flag.book_kept && !flag.book_locked && !flag.book_wise && item.book_of_canrec < 1",
    "then": [
     "item +book_of_canrec"
    ]
   }
  ],
  "choices": [
   {
    "text": "试着把书扔进壁炉",
    "if": "!flag.book_kept && !flag.fx_pc_dead",
    "once": true,
    "effects": [
     "flag fx_burn_tried",
     "hp -3"
    ],
    "result": [
     "炉火刚舔了书皮一下就自己灭了，炉膛里的灰往外一喷，糊了你一脸。书皮上连个焦印都没有。",
     {
      "speaker": "卢西安",
      "text": "那就是烧不掉了。我这就去跟兵说一声，省得他们一个个排着队来试。"
     }
    ]
   },
   {
    "text": "请卢西安推迟一天清剿先知会",
    "if": "party.vezina && !flag.fx_pc_dead",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "rep.wise >= 2",
       "n": 2,
       "why": "贤者会替你说过话"
      },
      {
       "if": "flag.fx_route",
       "n": 1,
       "why": "进沼的路是你同他对的"
      }
     ]
    },
    "ok": {
     "text": "他想了很久。“晚一天可以。晚两天，我的兵就要来问我了。”门边的薇齐娜听完，转身去收自己的笔记。",
     "effects": [
      "approval vezina +2"
     ]
    },
    "fail": {
     "text": "他说渡鸦山上那帮看鸟的是怎么回事，他心里有数，让你少管。薇齐娜在门边听见了，一整天都没同你说话。",
     "effects": [
      "approval vezina -1"
     ]
    }
   },
   {
    "text": "把书封存在骑士团库房",
    "if": "!flag.book_kept",
    "goto": "f_12b",
    "effects": [
     "flag book_locked",
     "item -book_of_canrec"
    ],
    "result": "卢西安让人找来一口装火药的铁箱，里面衬着铅{?flag.fx_burn_tried:，他看看你脸上的炉灰，让人又多衬了一层|}。书放进去以后，他上了三道锁，钥匙分给了三个人，自己一把也不拿。"
   },
   {
    "text": "封箱前请收殓人念出书中姓名",
    "tag": "旧礼",
    "if": "!flag.book_kept && faction == 'rites'",
    "goto": "f_12b",
    "effects": [
     "flag book_locked",
     "item -book_of_canrec",
     "rep wex +1",
     {
      "if": "party.barry",
      "then": [
       "approval barry +1"
      ]
     }
    ],
    "result": [
     "随军的收殓人是大墓地来的。她一直念到天黑，才把第一册念完，每念一个名字，就在箱盖上划一道。",
     "等到上锁时，箱盖已经划满了，划不下的那些就写在了箱底。"
    ]
   },
   {
    "text": "派人把书交给瓦洛森的加里昂",
    "if": "!flag.book_kept",
    "goto": "f_12b",
    "effects": [
     "flag book_wise",
     "item -book_of_canrec",
     "world writ +2",
     {
      "if": "party.vezina",
      "then": [
       "approval vezina -1"
      ]
     }
    ],
    "result": "书是十个人护送着走的。四天以后，加里昂的回信到了，上面只有一行字：“我说过我不想要”，下面盖着贤者会的印。"
   },
   {
    "text": "将书暂借瓦洛森，写明归还期限",
    "tag": "贤者门下",
    "if": "!flag.book_kept && faction == 'staff'",
    "goto": "f_12b",
    "effects": [
     "flag book_wise",
     "item -book_of_canrec",
     "world writ +1",
     "rep wise +1"
    ],
    "result": "借条上写明借阅三十年，到期交还骑士团，过期一天，就罚贤者会在兰斯日请全城的人吃一顿饭。加里昂回信说罚得太轻，可还是签了。"
   },
   {
    "text": "带着书下山",
    "if": "flag.book_kept",
    "goto": "f_12b",
    "effects": [
     "rep wex -1"
    ],
    "result": [
     "书比看上去要轻。卢西安眼看着你把它揣进怀里，又把帽子戴上了。",
     {
      "speaker": "卢西安",
      "text": "我的兵要是问起来，我就说书没了。他们会信的，他们巴不得信。"
     }
    ]
   }
  ]
 },
 "f_12b": {
  "id": "f_12b",
  "title": "骑士团",
  "art": "ev_excalibur",
  "loc": "渡鸦山 · 山下的坟场",
  "text": [
   "十字军回到山下，一队填坟，一队照着账页点名。念到谁，就为谁插块木牌。连栅门都拆来劈了，木牌还是不够。",
   {
    "if": "flag.price_aldresia",
    "text": "阿德蕾西娅的坟在第一排，木牌是卢西安亲手削的，削短了一截。骑士团还没立起来，十字军的人已经管它叫“阿德蕾西娅的”了。"
   },
   {
    "if": "flag.fx_pc_dead",
    "text": "你的坟就挨着阿德蕾西娅数过的那一排。她往木牌上刻你的名字，刻错了一笔，就又劈了一块重新刻。"
   },
   {
    "speaker": "卢西安",
    "text": "库得有人守，书得有人看，沼地里那帮烧人的也得有人管。这一摊子事，非得立个骑士团不可。规矩我已经想好了三条，就是没人肯出来领头。"
   },
   {
    "if": "!flag.price_aldresia && !flag.fx_pc_dead",
    "speaker": "阿德蕾西娅",
    "text": "名字别用我的。我才二十七，现在用上了，往后不好改。"
   },
   {
    "if": "party.valeran",
    "text": "瓦勒兰坐在一块碑上擦盾牌。盾面上是空的，原先的纹章已经被他自己刮掉了。"
   },
   {
    "if": "party.valeran",
    "speaker": "瓦勒兰",
    "text": "骑士团第一年，枪是够使的，缺的是记账的人。"
   },
   {
    "if": "party.liv",
    "speaker": "卡斯坦",
    "text": "立骑士团好！朕来给它定两条规矩。第一条，守库的不许喝酒。第二条，第一条管不着朕。"
   },
   {
    "if": "flag.book_kept",
    "text": "你怀里的书忽然沉了一下。挖坟的人谁也没抬头，可离你最近的那几个，手里的铲子都慢了下来。"
   }
  ],
  "choices": [
   {
    "text": "与十字军核对完整份坟场记录",
    "once": true,
    "check": {
     "skill": "investigation",
     "alt": [
      "medicine"
     ],
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "item.ledger_page >= 1",
       "n": 2,
       "why": "福尔卡德那页账还在"
      },
      {
       "if": "flag.fx_walked",
       "n": 1,
       "why": "雾林里的木牌你走过一遍"
      }
     ]
    },
    "ok": {
     "text": "四百零六座，一座不差。最后一块木牌插下去时，数的那一行里有人蹲在地上哭了，挖的那一行还在接着挖。",
     "effects": [
      "rep wex +1",
      "xp 300"
     ]
    },
    "fail": {
     "text": "对到第三百座，两本账对不上了，差在两个同名的人身上。你在雪地里跪了一下午，膝盖都没了知觉，账还是没对齐。",
     "effects": [
      "hp -4"
     ]
    }
   },
   {
    "text": "把四百零六个名字编成掘墓歌",
    "tag": "吟游诗人",
    "if": "class == 'bard' && !flag.fx_pc_dead",
    "once": true,
    "effects": [
     "rep wex +1",
     {
      "if": "party.barry",
      "then": [
       "approval barry +1"
      ]
     }
    ],
    "result": "调子用的是边境地的老调，一句唱一个名字，一铲子配一句。唱到第二遍，挖的那一行跟着唱了起来。唱到第三遍，数的那一行已经用不着看账页了。"
   },
   {
    "text": "担任团长，但不在誓词中署名",
    "if": "!flag.fx_pc_dead",
    "goto": "f_12c",
    "effects": [
     "flag order_founder"
    ],
    "result": "你在誓词下面画了一道，没有签名。卢西安看看，说这样也行，往后有人问起来，就说是一位没留名字的追随者建的。"
   },
   {
    "text": "依凯伦旧规写下首条：获胜后须饶人",
    "tag": "蓝宝石之眼",
    "if": "!flag.fx_pc_dead && faction == 'sapphire'",
    "goto": "f_12c",
    "effects": [
     "flag order_founder",
     "rep escann +1",
     {
      "if": "flag.pyre_stopped",
      "then": [
       "rep escann +1"
      ]
     }
    ],
    "result": [
     "你写的第一条是凯伦的老话。第二条是你在沼地里想好了自己加的：不许烧人。",
     {
      "speaker": "卢西安",
      "text": "第二条肯定有人不服。不服也好，让他们来同第一条讲理。"
     }
    ]
   },
   {
    "text": "委任瓦勒兰统领骑士团",
    "if": "party.valeran",
    "goto": "f_12c",
    "effects": [
     "approval valeran +2",
     "rep rose +1"
    ],
    "result": {
     "speaker": "瓦勒兰",
     "text": "恕我直言，三十年了，这是您第一次没问我愿不愿意。我愿意。名字就不留了，家父当年也没留下。"
    }
   },
   {
    "text": "由阿德蕾西娅担任团长",
    "if": "!flag.price_aldresia",
    "goto": "f_12c",
    "effects": [
     "rep escann +1"
    ],
    "result": "{?flag.book_kept:她写的第一条誓词是：盯着那个揣书下山的人。她把这一条念给你听，眼睛一直盯着你怀里的书。|她写的第一条誓词是：数清楚再动手。念完以后，她又把字数了一遍。}"
   },
   {
    "text": "留待后来者决定",
    "goto": "f_12c",
    "effects": [
     "rep escann -1"
    ],
    "result": "卢西安把誓词卷起来塞进了靴筒，说那就等一位肯来的人吧。后来果真来了一位，只是没留下名字。"
   }
  ]
 },
 "f_12c": {
  "id": "f_12c",
  "title": "交印",
  "loc": "去安本科斯特的路上",
  "date": "1054年花始月",
  "text": [
   {
    "if": "!flag.fx_pc_dead",
    "text": "印还挂在你脖子上，绳子已经换过四次了。蜡印的边早就磨圆了，压出来的纹也看不出是条约上的哪一枚。"
   },
   {
    "if": "flag.fx_pc_dead",
    "text": "印挂在阿德蕾西娅的脖子上。她说要替你把它送回安本科斯特，一路上谁问她都不摘，连睡觉也不摘。"
   },
   "你从瓦洛森向西走了十九天。路边的坟填平了，有些还立了新牌。艾伦河渡口恢复收费，每人三个铜子，抬棺人免费。",
   {
    "if": "flag.winters_varlosen && !flag.fx_pc_dead",
    "text": "路过瓦洛森塔下时，厨房里的人还认得你。这十二个冬天你在这里吃过多少顿饭，他们都记着。临走他们塞给你一袋硬饼，说先记在账上。"
   },
   {
    "if": "is.halfling && !flag.fx_pc_dead",
    "text": "第七间驿站的半身人老板娘只看了看你的脚就认出同乡。她在你的包里塞了整张苹果派，小声嘱咐：“留着路上吃，别让骑士们看见。”"
   },
   {
    "if": "is.immortal && !flag.fx_pc_dead",
    "text": "渡口有个老太太认出了你。她说她八岁那年在科塞顿见过你，那时你就是现在这个样子。她还问你是不是吃了什么药。"
   },
   {
    "if": "is.god",
    "text": "每到一个驿站都有人在等你。东坎诺的诸王请你上试炼山当皇帝，月神神殿请你进他们的神系，摄政王庭的祭司们干脆抬来一把镶金的椅子，绑在骡子背上，跟着你走了二十天。"
   },
   {
    "if": "party.barry && !flag.fx_pc_dead",
    "speaker": "巴里",
    "text": "对不住，我到了前面那个岔口就得往南走了。我家那孩子都四十了。他说议事厅的门不关上，就不许我叫他孩子。那我就在门外面叫。"
   },
   {
    "if": "party.valeran && !flag.fx_pc_dead",
    "speaker": "瓦勒兰",
    "text": "这一路上您没说几句话。等到了恩特本，我就把这身甲卖了，卖给精灵。他们出的价钱最公道，这一点我是认的。"
   },
   {
    "if": "party.liv && !flag.fx_pc_dead && !(flag.castan_liv && flag.castan_alive)",
    "speaker": "卡斯坦",
    "text": "掌玺大臣，印都交了。你这个官还算不算数啊？算的话，先给我打酒去！"
   },
   {
    "if": "party.liv && !flag.fx_pc_dead && flag.castan_liv && flag.castan_alive",
    "speaker": "卡斯坦",
    "text": "朕就在山上等你。印交了，掌玺大臣你照样当着，这个朕批了！"
   },
   {
    "if": "party.vezina && !flag.fx_pc_dead",
    "text": "薇齐娜把本子递过来，翻到最后一页。那一页是空的。"
   },
   {
    "if": "flag.fx_pc_dead && partysize > 0",
    "text": "跟着你的人都还在队里，只是走得比来的时候慢。{?party.barry:巴里在岔口往南拐之前，往阿德蕾西娅的包袱里塞了一块乳酪，说是给你的。她没告诉他你已经吃不着了。|}{?party.vezina:薇齐娜把你那一本的最后一页空着，谁也不让写。|}"
   }
  ],
  "choices": [
   {
    "text": "在薇齐娜笔记末页签名",
    "if": "party.vezina && !flag.fx_pc_dead",
    "once": true,
    "effects": [
     "approval vezina +2"
    ],
    "result": "你写上了日子和名字。她看了一眼就把本子合上了，说这一本到这里就算完了，下一本她自己写，谁也不给看。"
   },
   {
    "text": "在岔路口尝巴里煮的菜",
    "if": "party.barry && !flag.fx_pc_dead",
    "once": true,
    "effects": [
     "hp full",
     "approval barry +1"
    ],
    "result": "是一锅豆子炖腌肉，里面加了乳酪。他看着每个人都吃上了第二碗，自己才肯坐下来。"
   },
   {
    "text": "喝完卡斯坦的壶中酒",
    "if": "flag.price_liv",
    "once": true,
    "effects": [
     "hp -2",
     "rep dragon +1"
    ],
    "result": "壶里是乌霜领的黑麦酒，很冲。你喝到一半呛着了，咳完了接着喝。壶底刻着一行字：“五十四世御用，偷喝者斩”。"
   },
   {
    "text": "绕道瓦洛森归还银歌",
    "if": "flag.price_aldresia && item.silversong >= 1",
    "once": true,
    "effects": [
     "item -silversong",
     "rep wise +1"
    ],
    "result": "瓦洛森的人把它挂在了饭堂的东墙上，正对着那口锅。挂钩是现钉上去的，钉歪了，可谁也不肯重钉。"
   },
   {
    "text": "谢绝所有王座",
    "tag": "神",
    "if": "is.god && !flag.book_kept && !(flag.castan_crowned && flag.castan_alive)",
    "goto": "end_unseated",
    "effects": [
     "flag god_unseated",
     "var god_acts +1",
     "rep escann -2",
     "rep moon -1",
     "rep rose -1",
     {
      "if": "party.liv",
      "then": [
       "approval liv -1"
      ]
     },
     {
      "if": "party.valeran",
      "then": [
       "approval valeran +1"
      ]
     }
    ],
    "result": [
     "你让人把那把镶金的椅子从骡子背上卸下来，留在了驿站。后来驿站的人拿它当了柜台。",
     "东坎诺的使者在路边站了很久，回去报的是“神不肯来”。各国宫廷听说以后，第一件事就是把正殿里的王座往后挪了半丈，空出一块地方给你站。",
     {
      "if": "party.liv",
      "speaker": "卡斯坦",
      "text": "你不坐是吧？那这把镶金的就归朕了！朕坐上一次，在上面拉一泡，完了你们爱给谁就给谁。"
     },
     {
      "if": "party.valeran",
      "speaker": "瓦勒兰",
      "text": "您这一不坐，满坎诺的王座往后都得空出半边来防着您。不过我宁愿是这样。"
     },
     {
      "if": "party.barry",
      "text": "巴里没有劝你。他从驿站里搬来一只凳子，自己坐下了，把乳酪掰成两半，递了一半给你。你是站着接的。"
     },
     {
      "if": "party.vezina",
      "text": "薇齐娜在本子上写了几个字，划掉了，又重新写。你凑过去一看，新写的只有两个字：“要是”。"
     }
    ]
   },
   {
    "text": "{?flag.fx_pc_dead:请阿德蕾西娅代为归还监誓印|亲自交印，再回渡鸦山}",
    "if": "flag.book_kept",
    "goto": "end_quiet"
   },
   {
    "text": "{?flag.fx_pc_dead:请阿德蕾西娅代为归还监誓印|亲自交印，再登试炼山}",
    "if": "!flag.book_kept && (flag.castan_crowned && flag.castan_alive) && !flag.knot_cut",
    "goto": "end_bridle"
   },
   {
    "text": "{?flag.fx_pc_dead:请阿德蕾西娅代为归还监誓印|先去试炼山观礼，再交印}",
    "if": "!flag.book_kept && (flag.castan_crowned && flag.castan_alive) && flag.knot_cut",
    "goto": "end_fiftyfourth"
   },
   {
    "text": "{?flag.fx_pc_dead:请阿德蕾西娅代为归还监誓印|归还监誓印，绕道凯尔马尔多}",
    "if": "!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion <= 2",
    "goto": "end_parting"
   },
   {
    "text": "{?flag.fx_pc_dead:请阿德蕾西娅代为归还监誓印|归还监誓印，再赴兰斯日的饭局}",
    "if": "!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion > 2 && world.communion >= 8 && world.writ >= 4 && world.writ <= 6 && world.feud <= 3 && flag.blame_canrec && !flag.castan_crowned",
    "goto": "end_table"
   },
   {
    "text": "{?flag.fx_pc_dead:请阿德蕾西娅代为归还监誓印|去安本科斯特交印}",
    "if": "!flag.book_kept && !(flag.castan_crowned && flag.castan_alive) && world.communion > 2 && !(world.communion >= 8 && world.writ >= 4 && world.writ <= 6 && world.feud <= 3 && flag.blame_canrec && !flag.castan_crowned)",
    "goto": "end_ledger"
   }
  ]
 },
 "end_unseated": {
  "id": "end_unseated",
  "title": "不肯落座的神",
  "loc": "安本科斯特 · 旧斗兽场",
  "date": "1054年",
  "text": [
   "各家神殿议定谁算神的第七次泛神会议，只能在旧斗兽场复会，别处容不下这么多人。月神神殿、摄政王庭各殿和大墓地的祭司坐满看台。布勒瓦尔的两位太阳教士远远坐在一旁。",
   "议程贴在拱廊的柱子上，第一条是“阿德蕾西娅算哪一位神的化身”，第二条就是你算不算神。{?flag.god_on_agenda:你这一条三十二年前就排进去过，只是一直没轮上。|}",
   {
    "if": "flag.price_aldresia",
    "text": "吵第一条时，有人把阿德蕾西娅那把剑的空鞘抬上了台子。两边的祭司谁也不敢去碰。"
   },
   {
    "if": "flag.price_pc",
    "text": "你左手那道白印露在袖口外面。前排的收殓人一直盯着看，看完了低声同身旁的人说了几句。"
   },
   {
    "if": "flag.price_companion",
    "text": "{?flag.price_valeran:瓦勒兰|卡斯坦}的名字也在议程上，排在第三条，那是你让人添上去的。"
   },
   {
    "if": "flag.price_emperor",
    "text": "皇帝撕书的事倒没人提。死了的皇帝不归神殿管，那是史官的事。"
   },
   {
    "if": "flag.price_names",
    "text": "你一夜念完的那些名字，大墓地抄了一份挂在会场门口，足足抄了四十张纸。"
   },
   {
    "if": "flag.god_half_sentence",
    "text": "有你在场，谁也撒不了谎，所以会开得很短。第一天就有三位大祭司说出了本来没打算说的话。第二天这三位全都告了病。"
   },
   "午饭是巴里送来的，一篮子乳酪和腌鱼。他还在看台上拿帽子替你占了个座，可你是站着吃完的，那顶帽子一直没挪过地方。",
   "散会那天，书记官在拱廊下面把你拦住了。还是当年那张桌子，那锅蜡，他把登记册一直翻到了底，也没找着你的名字。",
   {
    "speaker": "书记官",
    "text": "神号怎么写？还有，要不要留个地址，往后有信也好寄。"
   }
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "unseated"
 },
 "end_quiet": {
  "id": "end_quiet",
  "title": "寂静之冠",
  "art": "ev_looming_death",
  "loc": "渡鸦山 · 山上的宅子",
  "text": [
   "交回监誓印后，你花十九天走回渡鸦山。宅里的铁笼已经拆除，长桌还在。你往坎雷克的空椅旁搬了张凳子，把书摊在自己膝上。",
   "死人是在你接过书主记号的那一夜躺下的。从渡鸦山一直到艾伦河，坟场里的，沼地里的，走在半路上的，全躺下了。山下的哨兵说，那一夜满山都是东西倒地的声音，像有人卸了一晚上的柴。可是书里的魂没有走，你不开口，它们就一直等着。",
   "第一个上山来的是阿德蕾西娅，她在门口站了一会儿，没有进来。",
   {
    "speaker": "阿德蕾西娅",
    "text": "骑士团的誓词我添了一条，排在最前面：盯着您。大人别多心，第二条是给您送饭。"
   },
   {
    "if": "flag.f_rites || name == '普丽姆萝丝·花足'",
    "text": "大墓地派来的收殓人一进门，先量了量书，又量了量你。"
   },
   {
    "if": "flag.f_rites || name == '普丽姆萝丝·花足'",
    "speaker": "收殓人",
    "text": "这些人是我们一个一个数过的。您把他们揣走了，账上就得记一个“偷”字，我只能照实记。"
   },
   {
    "if": "is.immortal",
    "text": "坎雷克为了不死，把自己变成了巫妖。这一步你用不着学，你本来就不会死。十字军的人听说了这一条，往后来送饭，都把碗放在门槛外面，敲两下门就走。"
   },
   {
    "if": "party.barry",
    "text": "巴里没走。他在厨房里生起了火，说死人是躺下了，可活人总得吃饭。"
   },
   "书里那个声音又响了一下。",
   {
    "speaker": "坎雷克",
    "text": "劳驾，后脑勺痒，这都得怪维纳克。"
   }
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "quiet"
 },
 "end_bridle": {
  "id": "end_bridle",
  "title": "缰绳",
  "art": "ev_mages_estate_mad",
  "loc": "试炼山 · 北要塞",
  "text": [
   "北要塞大厅又点起炉火。皇帝端坐上首，乌钢冠在他头上戴得端正。",
   {
    "if": "flag.castan_garrec",
    "text": "加雷克坐得笔直，同旧画像上他父亲的样子一模一样。黑龙的老兵站满了两边的廊子，没有一个人敢看他的眼睛。"
   },
   {
    "if": "flag.castan_lucan",
    "text": "卢坎的耳朵尖从冠下面露了出来。他读了一上午折子，每读完一份就抬起头，等着别人告诉他该怎么批。"
   },
   {
    "if": "flag.castan_liv",
    "text": "卡斯坦坐在上首，翅膀收得规规矩矩。她还是照常嚷着要酒。可是酒端来了，只要牵绳的人喊她停，她就停，杯子举在半空，一直停到那人说可以为止。"
   },
   {
    "if": "flag.castan_pc",
    "text": "坐在上首的是你。冠是你自己戴上的，誓也是你自己立的，可脚往哪边迈，还得看绳子那头的意思。"
   },
   {
    "if": "flag.bridle_wise",
    "text": "绳子攥在贤者门下的手里，伊迪丝就坐在皇帝左边，手套一直没摘。加里昂从瓦洛森来过一封信，上面只有一句“我反对”。信到时，敕令已经发下去了。"
   },
   {
    "if": "flag.bridle_pc && !flag.castan_pc",
    "text": "绳子攥在你手里，你不开口，他就不动。{?flag.iacob_loop:后来你才想起来，那个活扣是亚科布留下的，到头来他自己没攥着，攥着的是你。|}"
   },
   {
    "if": "flag.bridle_pc && flag.castan_pc",
    "text": "牵着你的那根绳子，另一头也在你自己手里。夜里醒过来，你常常要想上一会儿，刚才那个念头到底是谁的。"
   },
   "往后的敕令都是从这间屋子发出去的。第一道叫各国把欠十字军的饷补齐，第二道封了达拉万之愚。诸王一一照办，没有一家回嘴。",
   {
    "if": "flag.fx_pc_dead",
    "text": "这些你都没能看见，是阿德蕾西娅替你看的。回到瓦洛森以后，她只说了一句：他坐得很直，直得不像是他自己在坐。"
   },
   {
    "if": "flag.bridle_pc && flag.castan_garrec",
    "speaker": "加雷克",
    "text": "下一道敕令写什么？"
   },
   {
    "if": "flag.bridle_pc && flag.castan_lucan",
    "speaker": "卢坎",
    "text": "下一道敕令写什么？您说，我来写，我的字比您的好看。"
   },
   {
    "if": "flag.bridle_pc && flag.castan_liv",
    "speaker": "卡斯坦",
    "text": "掌玺大臣，下一道敕令写什么？写完了给朕倒杯酒。得你说倒，朕才喝得着。"
   },
   {
    "if": "flag.bridle_pc && flag.castan_pc",
    "text": "你提起笔来，先问了自己一句，下一道敕令写什么。"
   },
   {
    "if": "flag.bridle_wise && !flag.castan_pc",
    "text": "皇帝转过头去，问伊迪丝下一道敕令写什么。"
   },
   {
    "if": "flag.bridle_wise && flag.castan_pc",
    "speaker": "伊迪丝",
    "text": "下一道敕令，你想写什么？你先说说，我听听看。"
   }
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "bridle"
 },
 "end_fiftyfourth": {
  "id": "end_fiftyfourth",
  "title": "第五十四位",
  "art": "ev_wex_precipice",
  "loc": "试炼山",
  "text": [
   "山路的石阶已经修好，十道试炼全在。誓石缺掉的一角补了新石，浅些的颜色露出接缝。",
   {
    "speaker": "布洛克",
    "text": "补一角，用了三块料，废掉两块。颜色差着半成，再过一百年就看不出来了。"
   },
   {
    "if": "flag.castan_garrec",
    "text": "加雷克走完了十道试炼。他下山时，黑龙的老兵在山脚下跪了一地。西边的人却连夜数起了自己有多少条枪。"
   },
   {
    "if": "flag.castan_lucan",
    "text": "卢坎走完了十道试炼。他身上流的是乌霜家的血，长的却是精灵的耳朵。月神神殿和摄政王庭的祭司为了谁先下跪，在山下吵了四十天。"
   },
   {
    "if": "flag.castan_liv",
    "text": "卡斯坦走完了十道试炼，最后一道是爬上去的。立完了誓，她翅膀根上的灰毛掉了一大把。屠兽者的那把椅子她坐了，至于在上面拉一泡的事，她说留给五十五世去办。"
   },
   {
    "if": "flag.castan_pc",
    "text": "十道试炼是你自己走下来的，第九道的石像没有拦你。誓石烫了一下，誓词就烙在了你手背上。听誓的只有石头，没有别人。"
   },
   {
    "if": "flag.castan_pc && is.god",
    "text": "北要塞的守军都不知道该怎么给你行礼。一位不会死的卡斯坦，正是坎雷克找了三十年的那种人。如今这个人就是你。"
   },
   {
    "if": "flag.map_drawn",
    "text": "石桌上还留着你当年画的那条线，已经被人用油封住了。如今那条线成了真的疆界，北要塞的书记官照着它抄了十二份。"
   },
   "达梅斯海德诸国连夜结了盟。盟约第一条写的是，山上那位要是往西看，大家就一起看回去。",
   {
    "if": "flag.castan_liv",
    "text": "第十一道试炼是卡斯坦自己加的，就是在北要塞的酒桶旁边喝赢她。第一个来试的是布洛克，喝到第七碗就趴下了。{?flag.fx_pc_dead:卡斯坦把第八碗推到一张空凳子面前，说掌玺大臣的那一份先记着。|卡斯坦把第八碗推到了你面前。}"
   },
   {
    "if": "!flag.castan_liv",
    "text": "到了傍晚，山上照老规矩喊了一声阵，北要塞的守军第一次应了声。"
   }
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "fiftyfourth"
 },
 "end_parting": {
  "id": "end_parting",
  "title": "各回各船",
  "art": "ck3_landing",
  "loc": "凯尔马尔多 · 白港",
  "text": [
   {
    "if": "flag.larthan_open",
    "text": "白港的码头修了四十年，今天第一次挂满了帆。船都是从精灵码头拖过来的旧船，船板补过，帆倒是新的。"
   },
   {
    "if": "!flag.larthan_open",
    "text": "伊贝瓦尔的信是前一天到的，信上说拉尔桑的门洞已经填死了，墙又加了一截。如今来白港的，都是给关在墙外面的精灵。他们没别处可去了。"
   },
   "几百名精灵登船，多半已上了年纪。长老说这是回家。可船上的海图是五十多年前画的，谁也说不准家究竟在哪个方向。",
   {
    "if": "item.lunatein_plank >= 1 && !flag.fx_pc_dead",
    "text": "有个老水手认出了你兜里那块月火号的船板。他摸了摸上面的钉眼，说这块是左舷第三排的，当年就是他钉上去的。"
   },
   {
    "if": "flag.fx_pc_dead",
    "text": "阿德蕾西娅替你来了。她站在码头的缆桩旁边数帆，数到第十一面时，有人问她是谁家的。她说是监誓人家的。"
   },
   "巴里没走。他站在跳板旁边，挨个给上船的人塞乳酪，每塞一个就说一声对不住，还说他家那孩子在威克斯，所以他得留下。",
   "马里昂没来送行，只派人送来了一箱酒，箱子上没盖月庭的印，也没盖别家的。",
   {
    "if": "is.halfelf",
    "text": "几个十来岁的半精灵孩子站在跳板中央，一脚踩着船，一脚踏着岸。船上的人喊他们上来，岸上的人又喊他们下来。"
   },
   {
    "if": "name == '精灵码头的莉安娜'",
    "speaker": "莉安娜",
    "text": "那块板子我也站过，就站了一小会儿。后来我娘的鱼摊收了。我也就下来了。"
   },
   "有条小船解了缆，船尾有人回过头来，用威克斯话喊了一句：坟要挖得比恨深。"
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "parting"
 },
 "end_table": {
  "id": "end_table",
  "title": "同席",
  "art": "ck3_barry",
  "loc": "安本科斯特 · 旧斗兽场",
  "date": "1054年兰斯日",
  "text": [
   "旧斗兽场的沙地高低不平，一圈饭桌都得用砖垫脚。主位也摆了椅子，没人坐。",
   {
    "if": "origin == 'dameria'",
    "text": "今年轮到月庭管饭。马里昂五十二了，还亲自掌勺，使的是当年那把切肉刀。他说这把刀砍过人，如今也该回去切肉了。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "今年轮到洛伦特管饭。太后坐在离主位最近的那一桌，菜单是她亲自定的，每道菜下面都配着一句客气话，句句带刺。"
   },
   {
    "if": "origin == 'ebonmarck'",
    "text": "今年轮到乌霜边区管饭。黑卡斯塔诺人烤了一整头牛，军团的老兵排着队去切，每切一刀就报一声番号。"
   },
   {
    "if": "origin == 'ibevar'",
    "text": "今年轮到伊贝瓦尔管饭。精灵长老带来了腌鱼和海草饼，说这是当年船上的吃法。没有人爱吃，可大家还是都吃完。"
   },
   {
    "if": "origin == 'wex'",
    "text": "今年轮到威克斯管饭。戴伦公爵站在门口，挨个问来的人吃了没有，这是巴里教他的。"
   },
   "瓦洛森的人是带着令状来的，令状的期限还剩六年。他们旁边坐着两个专门盯着他们的外人，一个是精灵，一个是矮人。洛伦特和达梅里亚如今成了亲家，坐在一桌，为了谁先掰面包吵了半顿饭。",
   {
    "if": "is.god",
    "text": "你是站着吃的。你一坐下去，这张桌子就得散。这一点第一年大家就看出来了，所以再没有人劝你坐。"
   },
   {
    "if": "is.immortal && !is.god",
    "text": "坐在你对面的老伯爵说，他爷爷那一辈就见过你。他还问你明年来不来。他好提前占座。"
   },
   "有个第一次来的男爵问，主位是给谁留的。",
   {
    "speaker": "巴里",
    "text": "先吃吧。"
   }
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "table"
 },
 "end_ledger": {
  "id": "end_ledger",
  "title": "监誓人的账",
  "art": "ev_blank",
  "loc": "安本科斯特 · 旧斗兽场拱廊",
  "text": [
   {
    "if": "flag.price_aldresia",
    "text": "瘟疫是 1053 年冬天停的。阿德蕾西娅没能回来，瓦洛森的人把她的剑挂在了饭堂里。"
   },
   {
    "if": "flag.fx_pc_dead",
    "text": "瘟疫是 1053 年冬天停的。你没能回来，阿德蕾西娅把你的印揣了一路，一直揣到了安本科斯特。"
   },
   {
    "if": "flag.price_pc && !flag.fx_pc_dead",
    "text": "瘟疫是 1053 年冬天停的。书撕不动你，所以你回来了，只是左手多了一道白印。"
   },
   {
    "if": "flag.price_valeran",
    "text": "瘟疫是 1053 年冬天停的。瓦勒兰没能回来，恩特本的人把他的手套送回了家，叠得同他放在桌角那次一模一样。"
   },
   {
    "if": "flag.price_liv",
    "text": "瘟疫是 1053 年冬天停的。卡斯坦没能回来，乌翼兵团把她的空酒壶插在了北要塞脚下的坟头上。"
   },
   {
    "if": "flag.price_emperor && !flag.fx_pc_dead",
    "text": "瘟疫是 1053 年冬天停的。皇帝没能回来，他亲手撕下的那一页，史书上记成了他的最后一道敕令。"
   },
   {
    "if": "flag.price_names",
    "text": "瘟疫是 1053 年冬天停的。可那本书你念到第三年还没念完。这次是抽空下了一趟山。"
   },
   "解药出自瓦洛森。{?flag.book_wise:书在加里昂的塔上，借条就压在书下面。|书锁进了骑士团的库里。}试炼山上没有皇帝。",
   {
    "if": "flag.order_founder",
    "text": "骑士团是一位没留下名字的追随者建的，誓词下面的那一道，就是你画的。"
   },
   {
    "if": "!flag.order_founder",
    "text": "骑士团是一位没留下名字的追随者建的。"
   },
   {
    "if": "!flag.fx_pc_dead",
    "text": "你把监誓人的印交还给了安本科斯特。拱廊下面还是那张桌子，那锅蜡。书记官{?is.god:认出了你，手一抖，蜡洒了半张桌子。他|}翻了很久，也没找着三十一年前的那本登记册。"
   },
   {
    "if": "flag.fx_pc_dead",
    "text": "阿德蕾西娅把印交到了拱廊下面那张桌上。桌上还是那锅蜡。书记官翻了很久，也没找着三十一年前的那本登记册。"
   },
   {
    "speaker": "书记官",
    "text": "{?flag.fx_pc_dead:他叫什么？名字怎么写？|名字怎么写？}"
   },
   "他把册子翻到新的一页。门外，一个半精灵孩子追着鸡跑，一直追向精灵码头。"
  ],
  "first": [
   "quest witness done"
  ],
  "ending": "ledger"
 }
};
