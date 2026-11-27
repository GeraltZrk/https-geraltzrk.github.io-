// s1444 / finale.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "f_01": {
  "id": "f_01",
  "title": "十一年，一口气",
  "chapter": "终章 · 卡斯托纳斯，又一次",
  "loc": "东坎诺 · 往卡斯托纳斯的路上",
  "date": "1472年奈拉月1日",
  "text": [
   "板车出了深林，又往东走了九天，前面就是卡斯托纳斯城。你们进林子是十一年前的事了。卡斯塔诺帝国凿下的里程石仍立在路旁，兽人刮掉的刻字，又有人用炭描了回来。",
   {
    "if": "flag.garaele_left",
    "text": "走到第一个岔路口，编年史家加莱尔下了车。她把册子往胳膊下面一夹，一个人往西去了，没有回头。"
   },
   {
    "if": "flag.f_ushka_quit",
    "text": "过渡口时，乌什卡下了车。她把那根木签往车帮上一插，往南走了。"
   },
   "白墙外面最后一个岔路口支着个草棚，棚前倒扣着一只酒桶，桶上站着个穿蓝褂子的泰卢姆喊报人，嗓子早就喊哑了。他的规矩是一条消息一个铜板，先给钱再开口。你们数了十一个铜板给他，一年一个。",
   {
    "if": "!flag.pixiebury_warned",
    "speaker": "喊报人",
    "text": "六七年，皮克精之墓出事了！灰烬玫瑰兵团会同马尔霍德的狮鹫骑士，三天就把城烧了。碎心者的酋长古拉德腿上带着箭往西逃，第二年就让了位。"
   },
   {
    "if": "flag.pixiebury_warned",
    "speaker": "喊报人",
    "text": "六七年，灰烬玫瑰兵团跑去量皮克精之墓的城墙，才量到一半，碎心者氏族的人就站满了墙头，到底没打起来。古拉德如今还在，还种着他的地。"
   },
   {
    "if": "flag.proof_kept || (!flag.proof_bardswood && !flag.proof_moon && !flag.proof_published)",
    "speaker": "喊报人",
    "text": "六八年，新任大魔导师就职，西尔加里昂家的法师拿预言术把王座厅那一晚演了出来。阿登·天枪大公是被人从背后一刀捅死的，用的是窄刃！台下的选帝侯当场走了一半。"
   },
   {
    "if": "flag.proof_moon",
    "speaker": "喊报人",
    "text": "六八年，大魔导师就职，法师在台上拿预言术演了王座厅那一晚。伊斯特拉洛尔那边拿出一张按了手印的口供，跟台上演的一对，对上了！"
   },
   {
    "if": "flag.proof_bardswood",
    "speaker": "喊报人",
    "text": "六八年，大魔导师就职，西尔加里昂家的法师上台演了一场海战。台下有人说，原本排的不是这一出。"
   },
   {
    "if": "flag.proof_published",
    "speaker": "喊报人",
    "text": "六八年，大魔导师就职，台上演的是王座厅那一刀。台下有人直打哈欠。也难怪，这一出在酒馆里都比划了十六年了。"
   },
   {
    "speaker": "喊报人",
    "text": "七〇年银现月，皇上中了风，人没了。{?flag.god_duel_emperor:听说他临死前还跟人念叨，当年那次比剑是他让的。|}新皇是珍珠边地的人。威克斯眼下成了块肥肉，各家拆不拆它，就看今年了。"
   },
   {
    "speaker": "喊报人",
    "text": "最后一条不要钱。杜坎森的儿子、人称“熊心”的古尔赞，带着他的氏族到白墙南边了！六天之内就到南门。"
   },
   {
    "if": "is.god",
    "speaker": "喊报人",
    "text": "还有一条，也不要钱。都说十一年前有位坐在车上的神进了深林。有人说是死在里面了，也有人说，那位如今就是林子。"
   },
   {
    "if": "is.immortal",
    "text": "一队边区兵从路那头过来换岗，打头的那个头发全白了。{?party.ushka:乌什卡一直盯着他看。她认得那张脸，他年轻的时候在门板桌边抢过她的盐。|他年轻的时候在门板桌边抢过你们的盐。如今他已经认不出你们了。}"
   },
   {
    "if": "is.immortal && party.ushka",
    "speaker": "乌什卡",
    "text": "原来是这个滋味。你每次都是这样看着别人老的吗？"
   },
   {
    "if": "origin == 'wex'",
    "text": "你怀里还揣着那封没寄出去的报告，抬头写的是“呈陛下御览”。陛下已经死了两年。替他管密探的巴兹伍德先生倒还活着，今年九十九。"
   },
   {
    "if": "origin == 'sons'",
    "text": "少主罗吉尔今年六十六了，人在塔兰顿，入秋起就没下过床。{?flag.rogier_pardoned:赦令早就到了，可他一次也没往西走过。|}"
   }
  ],
  "first": [
   {
    "if": "flag.garaele_leaving",
    "then": [
     "companion -garaele",
     "flag garaele_left"
    ]
   },
   {
    "if": "party.ushka && approval.ushka <= -4",
    "then": [
     "companion -ushka",
     "flag ushka_left",
     "flag f_ushka_quit"
    ]
   },
   {
    "if": "flag.compact_none && !flag.pixiebury_warned",
    "then": [
     "world embers +1"
    ]
   },
   {
    "if": "!flag.pixiebury_warned",
    "then": [
     "world room -1"
    ]
   },
   {
    "if": "flag.pixiebury_warned",
    "then": [
     "rep clans +1"
    ]
   },
   {
    "if": "!flag.groundhawk_deed",
    "then": [
     "world room -1"
    ]
   },
   {
    "if": "flag.korgus_sold",
    "then": [
     "world unburied +1"
    ]
   },
   {
    "if": "flag.ghost_taken",
    "then": [
     "world unburied +1"
    ]
   },
   {
    "if": "var.rites < 4",
    "then": [
     "world unburied +1"
    ]
   },
   {
    "if": "flag.proof_kept",
    "then": [
     "world peace -2"
    ]
   },
   {
    "if": "flag.proof_moon",
    "then": [
     "world peace -1"
    ]
   },
   {
    "if": "flag.names_filed || flag.log_filed || flag.toll_story || flag.staff_fey",
    "then": [
     "world word +1"
    ]
   },
   {
    "if": "flag.blackbranch_deal",
    "then": [
     "world word +1"
    ]
   },
   {
    "if": "flag.compact_corintar",
    "then": [
     "world scale +1"
    ]
   },
   "rep throne -1",
   "quest q_southgate start"
  ],
  "choices": [
   {
    "text": "再付他一个铜板，问今年谁管卡斯托纳斯",
    "once": true,
    "effects": [
     "gold -1",
     "flag f_asked_city"
    ],
    "result": [
     {
      "if": "flag.compact_none",
      "speaker": "喊报人",
      "text": "没人管！北城三条街有三家收税的。南城谁拳头大就归谁。"
     },
     {
      "if": "flag.compact_league",
      "speaker": "喊报人",
      "text": "黑塔家管着。城门税十一年里涨了两次。夜里是世家的人巡街，巡得比税吏还勤快。"
     },
     {
      "if": "flag.compact_corintar",
      "speaker": "喊报人",
      "text": "科琳塔尔管着。巡夜的都披着红斗篷，盾上画着剑。城里的孩子个个会唱科琳的歌。"
     },
     {
      "if": "flag.compact_free",
      "speaker": "喊报人",
      "text": "归城约管。那张约还贴在旧集市的告示板上，书记都换到第五任了。"
     },
     {
      "if": "flag.digger_safe",
      "speaker": "喊报人",
      "text": "锻炉街的老奥托格去年冬天死在乡下了。到死他也没再说一句，谁去问都一样。"
     },
     {
      "if": "flag.digger_given",
      "speaker": "喊报人",
      "text": "锻炉街的老奥托格被威克斯紫庭的人接走了，从此就没人再见过他。"
     },
     {
      "if": "flag.rose_chain_freed && !flag.pixiebury_warned",
      "speaker": "喊报人",
      "text": "皮克精之墓烧起来的时候，灰烬玫瑰的队伍里少了一串仆役。听说是二十八年前在路上被人放了。"
     },
     {
      "speaker": "喊报人",
      "text": "六九年，死齿氏族的酋长斯劳死在了自己人手里，碎心者也帮了忙。{?flag.belgrak_saved:红宝石领那个被人从山里背出来的矮人，今年带了一队人往这边来了。|}{?flag.belgrak_lost:负怨者兵团进山的那一路人，二十二年了，一个也没回来。|}{?flag.belgrak_struck:负怨者兵团分了家，有一半人不认划过账的那一个。|}"
     }
    ]
   },
   {
    "text": "问他听没听过收尸队的消息",
    "once": true,
    "effects": [
     "flag f_rumor_dead"
    ],
    "result": [
     {
      "speaker": "喊报人",
      "text": "听过。都说那队人早就死在林子里了，那是十一年前的事。我喊过一次，没人肯给钱，后来就不喊了。"
     },
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "死了的人不还债，也收不了账。我们得赶紧进城露个脸！"
     }
    ]
   },
   {
    "text": "驾车入城",
    "goto": "f_02"
   }
  ]
 },
 "f_02": {
  "id": "f_02",
  "title": "没屋顶的神殿",
  "loc": "卡斯托纳斯 · 万神道",
  "date": "1472年奈拉月1日傍晚",
  "text": [
   "十一年过去，万神道上只修好了四座庙。小祭司阿坦守的那座神王庙在第七个门洞，至今没有屋顶。当年的军令仍钉在门上，纸已经黄脆，四枚钉子各锈出一个圆印。",
   "门槛上坐着个十六岁的姑娘，这些年是她在守庙，膝盖上放着一块叠好的抹布。门背面那四十一行粉笔写的祷词不知道描过多少遍了。前四十行磨得发亮，只有最后一行灰扑扑的，从来没人碰过。",
   {
    "if": "party.tan",
    "text": "阿坦在门口站了很久。姑娘先认出他手里那截权杖头，过了片刻才认出他这个人。"
   },
   {
    "speaker": "守庙的姑娘",
    "text": "一天四十句，念了十一年，一天也没断过。就是下雨天念得快一点。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "四十句。好。"
   },
   {
    "if": "!party.tan",
    "speaker": "守庙的姑娘",
    "text": "阿坦师傅呢？"
   },
   {
    "if": "party.tan && flag.tan_shielded",
    "text": "阿伦蒂尔那面壁画墙上的最后一幅，是你慢慢念给他听的。当时他只弄懂个大概，今晚他想从头听完。"
   },
   {
    "if": "flag.god_answered_for_him",
    "text": "回来的这一路上，每天天一亮，你都听见一个姑娘的声音在念晨祷，念到第四十句就停了。现在你知道那是谁了。"
   },
   {
    "if": "is.god",
    "text": "她看了你一眼，没有跪。十一年前她问过你是不是银龙，你说不是。这话她一直记着。"
   }
  ],
  "first": [
   {
    "if": "!flag.tan_stayed",
    "then": [
     "quest q_dragon done"
    ]
   }
  ],
  "choices": [
   {
    "text": "留意庙外还有谁在听",
    "once": true,
    "check": {
     "skill": "insight",
     "alt": [
      "perception"
     ],
     "dc": 15
    },
    "ok": {
     "text": "墙根下蹲着三个人，一个瘸腿的老兵，两个洗衣妇。姑娘念晨祷的时候他们天天都来，来了十一年，一次也没进过门。",
     "effects": [
      "flag f_listeners"
     ]
    },
    "fail": {
     "text": "你只看见一只猫。直到第二天早上你才发现，墙根下有一块土被人蹲得平平的。"
    }
   },
   {
    "text": "请阿坦告知信众神王已死，亲自为他送葬",
    "if": "party.tan",
    "effects": [
     "flag tan_told",
     "world word +1",
     "approval tan +2"
    ],
    "result": [
     {
      "if": "flag.tan_shielded",
      "text": "你先把最后那一幅壁画从头给他讲了一遍：那根杖，那条齐腕断了的胳膊，银披风，那团火，还有那两行字。他从头听到尾，一句也没打断。"
     },
     "他把权杖头放在门槛上，说明天一早就去找各殿的人。说完他进了门，把门背后最后一行字上的灰吹了吹。"
    ],
    "goto": "f_03"
   },
   {
    "text": "与阿坦约定，对神王死讯保密",
    "if": "party.tan",
    "effects": [
     "flag tan_silent"
    ],
    "result": [
     {
      "if": "flag.tan_shielded",
      "text": "最后那一幅你没有再讲，他也没有再问。"
     },
     {
      "speaker": "阿坦",
      "text": "好。那我接着念，还是四十句。"
     },
     "他从姑娘手里接过抹布去擦供桌。擦完了他把抹布叠成三折，跟她叠的一模一样。"
    ],
    "goto": "f_03"
   },
   {
    "text": "请阿坦继续传讲银龙必再临",
    "if": "party.tan",
    "effects": [
     "flag tan_forced",
     {
      "if": "approval.tan < 2",
      "then": [
       "flag tan_morningstar",
       "companion -tan"
      ],
      "else": [
       "approval tan -1"
      ]
     }
    ],
    "result": [
     {
      "if": "flag.tan_morningstar",
      "text": "他听完点点头。当天夜里他就走了，庙门没锁，只在门槛上留了一行炭字：“鸦王起码有回音”。他去投了拜鸦王的晨星会。"
     },
     {
      "if": "!flag.tan_morningstar",
      "text": "他照办了。第二天一早他就站在万神道口讲银龙必再临，讲得一字不差。可讲完第一个走开的也是他自己。"
     }
    ],
    "goto": "f_03"
   },
   {
    "text": "告诉她阿坦很快会回来",
    "if": "!party.tan && flag.tan_stayed",
    "effects": [
     "var lies +1"
    ],
    "result": "她点点头，把抹布放回膝盖上，说那她就再等等，反正她也等惯了。",
    "goto": "f_03"
   },
   {
    "text": "告诉她阿坦留在彼岸，守着那面壁画墙",
    "if": "!party.tan",
    "effects": [
     "flag f_girl_told"
    ],
    "result": [
     {
      "if": "flag.tan_stayed",
      "text": "她问那面墙上画着什么，你照实说了。她听完，回头看了一眼门背后的第四十一行。"
     },
     {
      "if": "!flag.tan_stayed",
      "text": "你说他走了，走得不远，只是不回这里来了。她没有再问，站起来扫门槛去了。"
     }
    ],
    "goto": "f_03"
   },
   {
    "text": "指给她看庙门背面的第四十一行",
    "if": "!party.tan",
    "effects": [
     "flag f_girl_shown"
    ],
    "result": "她踮起脚，拿袖子把那一行上的灰擦掉了。字还在，跟别的几行一样清楚，写的是“愿银龙再临”。她从头看完，没有念出声。",
    "goto": "f_03"
   }
  ]
 },
 "f_03": {
  "id": "f_03",
  "title": "门板桌，又一次",
  "art": "ev_multi_racial_merc",
  "loc": "下城 · 旧集市旁边的空地",
  "date": "1472年奈拉月2日至5日",
  "shop": {
   "name": "先锋行会与钴蓝兵团的合铺",
   "blurb": "两家合租这间铺子，各记各的账。收钱的是冈瑟的人，开口总先问：“你算几分利？”",
   "stock": [
    "plate",
    "hold_plate",
    "corintar_shield",
    "precursor_longsword",
    "superior_healing_potion",
    "scroll_mass_healing",
    "stoneskin_potion"
   ]
  },
  "text": [
   "十一年过去，旧集市旁的那块空地围起了矮墙，墙下靠着旧盾和干花。各家头领议事的门板桌还在，门板换过三扇，下面仍是原先那对酒桶，只换了铁箍。",
   "蓝牙还坐在东头，獠牙上那截蓝布洗得发了白。他今年四十七了，鬓角白了一片。阿罗莎坐在他旁边不说话。多米尼克的鬓角也白了，身后站着一排剃了头的科琳祭司。剑之誓约的头领洛朗腰上挂着一排罐子，罐口都拿蜡封着。卡莉斯塔是替她父亲卡莱昂·黑塔来坐这个位子的。小格里夫早就不小了，他的狮鹫拴在矮墙外面。",
   "古尔赞带着兽人氏族，六日就到南门。剩下这几天里，你想去见谁、告诉谁、求谁，都只能各走一趟。",
   {
    "if": "flag.f_rumor_dead",
    "text": "他们都听说你们死在林子里了。多米尼克第一个站起身，伸手捏捏你的袖子，看你是不是活人。"
   },
   {
    "if": "flag.goblins_armed",
    "text": "地下通道口站着两个地精，扛的还是二十八年前你们给的矛，只是矛杆截短了。他们说，这条通道他们自己守。"
   },
   {
    "if": "flag.tilda_burned",
    "text": "巴兹伍德的手下蒂尔达寄来了一封信。信上只有一行：“密码本烧了，我现在谁也不欠。”"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "古尔赞在南门外点了火，是按氏族一堆一堆排的。我数过了，十四堆。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "{?flag.tan_told:各殿的人我约在九日了。到时候能来几位，我也不知道。|庙门我锁上了，钥匙给了她。}"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "仗打起来以前得先把账收了！康原那张地契，就这几天办掉。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "上次这张桌子旁边坐着十九个人，今天只有十一个了。容我记一下，是哪几位没来。"
   },
   {
    "if": "is.god",
    "speaker": "蓝牙",
    "text": "南门你一个人就守得住。那我的人为什么还要去送死？"
   },
   {
    "if": "is.god",
    "text": "卡莉斯塔托人来问，请你给她加冕要什么价钱。她问得很客气，第一句先问你收不收金冠。奈拉特的老祭司把死者名册翻到中间，指着一行空格给你看，旁边注着“待收”两个字。那一格是留给你的。"
   },
   {
    "if": "flag.avatar_carleon",
    "text": "卡莉斯塔替她父亲向你问好。那年是你替卡莱昂作的保，保他当神王的化身。可直到今天，他的爪子和尾巴也没长出来。"
   },
   {
    "if": "flag.avatar_gryf",
    "text": "小格里夫冲你点了下头。那年阿德安的祭司相中过他，是你替他作的保。"
   },
   {
    "if": "flag.god_tried_raise",
    "text": "蓝牙到现在还是不肯跟你单独待在一起。今天他特意让阿罗莎坐在了你们俩中间。"
   },
   {
    "if": "flag.god_sided_throne",
    "text": "桌边有人小声说，这位神在安本科斯特替皇帝挡过刀。说完他朝旁边挪了一点。"
   }
  ],
  "first": [
   {
    "if": "flag.goblins_armed",
    "then": [
     "flag underpass_held"
    ]
   }
  ],
  "choices": [
   {
    "text": "告诉多米尼克：壁画上的神王早已死去",
    "once": true,
    "effects": [
     "flag told_dominic",
     "world word +1",
     "world scale +1",
     "rep corintar +1",
     {
      "if": "origin == 'corintar'",
      "then": [
       "rep corintar +1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "多米尼克",
      "text": "那墙上有没有科琳？"
     },
     "你说没有。他点点头，把这一句也记进了册子里。",
     {
      "if": "flag.testimony_hers",
      "text": "他把册子翻到二十七年前的那一页。你那天的证词是“她是自己选的那一下”。他拿指甲在这一行下面划了一道。"
     },
     {
      "if": "flag.testimony_host",
      "text": "他把册子翻到二十七年前的那一页。你那天的证词是“功在全军”。他盯着这一行看了很久，没有划。"
     },
     {
      "if": "flag.testimony_king",
      "text": "他把册子翻到二十七年前的那一页。那天你替一个小祭司问了一句“王在哪里”。他说这一句如今有答案了。那一页的批注他得改一改。"
     },
     {
      "if": "flag.creed_delivered",
      "text": "他说那本信条如今在安本科斯特的神殿区已经有人传抄了，只是抄错了一个字。他还没去改。"
     },
     {
      "if": "is.god",
      "text": "临走时，他照常问了一遍你和科琳是什么关系。你答完，他照常记了下来。"
     }
    ]
   },
   {
    "text": "先闭门向各殿主祭说明经过",
    "once": true,
    "effects": [
     "flag temples_first",
     "world word +1",
     "world scale -1",
     "rep temples +1"
    ],
    "result": "主祭们让你在偏殿里等了一个时辰。等门关上了，他们开口第一句问的是“还有谁知道”。"
   },
   {
    "text": "把神王已死的真相告诉蓝牙",
    "once": true,
    "effects": [
     "flag f_told_bluetusk",
     {
      "if": "origin == 'corintar'",
      "then": [
       "rep corintar +1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "蓝牙",
      "text": "别跟我讲谁升了谁的天。你就告诉我，南门还缺多少人。"
     },
     "你报了个数。他马上让人去北城喊边区老兵，又让人去烧水。"
    ]
   },
   {
    "text": "请乌什卡作白布使者，向古尔赞说明兽人的来历",
    "if": "flag.dookanil_known && party.ushka",
    "once": true,
    "effects": [
     "flag ushka_spoke",
     "world embers -2",
     "rep clans +1",
     "approval ushka +1"
    ],
    "result": [
     "她缠上白布，一个人出了南门，到半夜才回来。她袖子上沾着血，不是她自己的。",
     {
      "speaker": "乌什卡",
      "text": "话我说了：造我们的不是神，是个精灵，不配我们替他去死。有三堆火灭了。"
     }
    ]
   },
   {
    "text": "亲自以白布使者身份告诉古尔赞兽人的来历",
    "if": "flag.dookanil_known && !party.ushka",
    "once": true,
    "check": {
     "skill": "persuasion",
     "alt": [
      "intimidation"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "origin == 'tide'",
       "n": 2,
       "why": "火边有人认得你"
      },
      {
       "if": "is.greenskin",
       "n": 2,
       "why": "你是绿皮"
      },
      {
       "if": "flag.road_gurzan",
       "n": 1,
       "why": "你走过他那条路"
      }
     ]
    },
    "ok": {
     "text": "你说到“造我们的是个精灵”这一句，火边有个老兵把手里的骨头放下了。天亮以前，有三堆火灭了。",
     "effects": [
      "flag ushka_spoke",
      "world embers -2",
      "rep clans +1"
     ]
    },
    "fail": {
     "text": "你才刚开口，就被人拿火棍从火边捅了出去。回来的路上你才发觉，断了两根肋骨。",
     "effects": [
      "damage 5d8"
     ]
    }
   },
   {
    "text": "邀请阿罗莎入席，承认兽人有一席之地",
    "once": true,
    "req": "rep.clans >= 1",
    "reqText": "需要兽人氏族声望达到 1",
    "effects": [
     "flag arosha_at_table",
     "world room +1",
     "rep league -1"
    ],
    "result": "阿罗莎把凳子往门板旁边挪了一尺，就算是坐上来了。卡莉斯塔站起身，到别处喝水去了。"
   },
   {
    "text": "向死灵法师瓦丽娜借骷髅兵守南门",
    "once": true,
    "req": "world.unburied >= 7 || flag.korgus_sold",
    "reqText": "需要未葬遗骸达到 7，或曾把杜坎森的遗体卖给瓦丽娜",
    "effects": [
     "flag bones_at_gate",
     "world unburied +2",
     {
      "if": "party.ushka",
      "then": [
       "approval ushka -2"
      ]
     }
    ],
    "result": [
     {
      "speaker": "瓦丽娜",
      "text": "三百具，都是现成的，站得可直了！不吃饭，不要饷，理论上不咬人。"
     },
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "你们又要使唤死人。这是第二次了。"
     },
     {
      "if": "party.ushka && flag.ushka_warned",
      "text": "十一年前她就说过，再有第二次她就走。这次她没再往下说，只把锤子从腰上解了下来。"
     }
    ]
   },
   {
    "text": "请蓝牙盖印，替妮克西办妥康原的地契",
    "if": "(party.nixee || flag.toll_nixee) && flag.groundhawk_deed && world.room >= 4",
    "once": true,
    "effects": [
     "quest q_debt done",
     {
      "if": "party.nixee",
      "then": [
       "approval nixee +1"
      ]
     }
    ],
    "result": "{?party.nixee:蓝牙在地契上又盖了一次印，妮克西把欠条撕成两半，一半塞给你。|你把那张欠条拿给蓝牙看，他在地契上又盖了一次印。你把欠条撕成两半，一半塞进了车帮的缝里。}"
   },
   {
    "text": "替妮克西索取康原地契",
    "if": "(party.nixee || flag.toll_nixee) && !(flag.groundhawk_deed && world.room >= 4)",
    "once": true,
    "effects": [
     "quest q_debt stage 3",
     {
      "if": "party.nixee",
      "then": [
       "approval nixee -1"
      ]
     }
    ],
    "result": "地契还是没下来，灰烬玫瑰兵团今年又去量了一次地。{?party.nixee:妮克西在账本上划了一道，下手重得笔尖戳破了纸。|你在欠条背面写下“没办成”三个字。}"
   },
   {
    "text": "把断杖交给多米尼克",
    "if": "flag.staff_home && item.broken_scepter >= 1 && !flag.f_staff_done",
    "once": true,
    "effects": [
     "flag staff_to_dominic",
     "flag f_staff_done",
     "world scale +2",
     "item -broken_scepter"
    ],
    "result": "他双手接了过去，没有拄着，就那么横着抱在怀里。杖头的碴子在他袖子上勾出了一道线。"
   },
   {
    "text": "把断杖交由神殿保管",
    "if": "flag.staff_home && item.broken_scepter >= 1 && !flag.f_staff_done",
    "once": true,
    "effects": [
     "flag staff_to_temples",
     "flag f_staff_done",
     "world scale -2",
     "item -broken_scepter"
    ],
    "result": "主祭们派了四个人来抬。登记时，名目一栏写的是“来历待考”。"
   },
   {
    "text": "将断杖暂留在板车上",
    "if": "flag.staff_home && item.broken_scepter >= 1 && !flag.f_staff_done",
    "once": true,
    "effects": [
     "flag f_staff_done",
     "flag f_staff_kept"
    ],
    "result": "你拿油布把它又裹了一层，塞到了车板下面。车轴跟着往下沉了一指。"
   },
   {
    "text": "把科琳的断盾带交给多米尼克",
    "tag": "科琳的队伍",
    "if": "origin == 'corintar' && item.shield_strap >= 1 && !flag.f_strap_done",
    "once": true,
    "effects": [
     "item -shield_strap",
     "rep corintar +1",
     "quest q_o_corintar done",
     "flag f_strap_done"
    ],
    "result": "他把盾带托在掌心里，拿拇指摸过上面的两个铆钉孔，说要给它打一只匣子供起来。"
   },
   {
    "text": "由自己保管盾带",
    "tag": "科琳的队伍",
    "if": "origin == 'corintar' && item.shield_strap >= 1 && !flag.f_strap_done",
    "once": true,
    "effects": [
     "quest q_o_corintar done",
     "flag f_strap_done"
    ],
    "result": "多米尼克盯着那截皮子看了很久，到底没开口要。你把它缠回了手腕上。"
   },
   {
    "text": "答应罗吉尔的人，届时由你递冠",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons' && !flag.f_crown_yes && !flag.f_crown_no",
    "once": true,
    "effects": [
     "flag f_crown_yes",
     "rep moon +1",
     "quest q_o_sons done"
    ],
    "result": "来的人是特里斯坦的儿子。他说少主的意思是，达梅里亚的王冠先递给蓝牙，蓝牙要是不接，就递给蓝牙的大儿子。再不接该怎么办，他没说。"
   },
   {
    "text": "拒绝替他们递冠",
    "tag": "达梅里亚之子",
    "if": "origin == 'sons' && !flag.f_crown_yes && !flag.f_crown_no",
    "once": true,
    "effects": [
     "flag f_crown_no",
     "rep moon -1",
     "quest q_o_sons done"
    ],
    "result": "他没有争，只是把银月徽从胸口摘下来，又原样别了回去。"
   },
   {
    "text": "向巴兹伍德寄出最后一份报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.f_report_done",
    "once": true,
    "effects": [
     "flag f_report_done",
     "flag f_report_sent",
     "rep throne +1",
     "var honest_reports +1",
     "quest q_o_wex done"
    ],
    "result": "你把抬头的“陛下”两个字划掉，改成了“巴兹伍德先生”。送信的鸽子是先锋行会的，按里程收钱。"
   },
   {
    "text": "把报告交城约书记张贴",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.f_report_done",
    "once": true,
    "effects": [
     "flag f_report_done",
     "flag f_report_clerk",
     "rep companies +1",
     "rep throne -1",
     "quest q_o_wex done"
    ],
    "result": "书记当众念了一遍。念到“城门七座，各在谁手”那一段，围着看的人都自己掰起手指头数了起来。"
   },
   {
    "text": "烧掉报告",
    "tag": "皇帝的差事",
    "if": "origin == 'wex' && !flag.f_report_done",
    "once": true,
    "effects": [
     "flag f_report_done",
     "flag f_report_burned",
     "quest q_o_wex done"
    ],
    "result": "火漆是最后才化的，化的时候冒了一股紫烟。巴兹伍德先生等了十一年，往后还得接着等。"
   },
   {
    "text": "请兵团把守地下通道",
    "tag": "负怨者",
    "if": "origin == 'grudge' && (flag.belgrak_saved || flag.entry_struck) && !flag.f_grudge_done",
    "once": true,
    "effects": [
     "flag underpass_held",
     "flag f_grudge_done",
     "quest q_o_grudge done"
    ],
    "result": "{?flag.belgrak_saved:贝尔格拉克带来的人报了数，人二十二个，铲子二十二把。|基尔杜姆的人认你划过的那一笔账。}这本来就是一句话的事，他们当晚就下了通道。"
   },
   {
    "text": "说服兵团留下守通道",
    "tag": "负怨者",
    "if": "origin == 'grudge' && !flag.belgrak_saved && !flag.entry_struck && !flag.f_grudge_done",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "adv": "is.dwarf",
     "mods": [
      {
       "if": "rep.companies >= 3",
       "n": 2,
       "why": "冒险团认你们的账"
      }
     ]
    },
    "ok": {
     "text": "兵团的老兵把账本翻到最后一页，添了一行字：“卡斯托纳斯，地下通道，守一夜，不收钱”。",
     "effects": [
      "flag underpass_held",
      "flag f_grudge_done",
      "quest q_o_grudge done"
     ]
    },
    "fail": {
     "text": "他们说这笔账从来没人立过字据。你往外走时，背后有人把账本合上了。",
     "effects": [
      "rep companies -1",
      "flag f_grudge_done",
      "quest q_o_grudge done"
     ]
    }
   },
   {
    "text": "托马布格告诉古尔赞，你仍会跟他走",
    "tag": "退潮的人",
    "if": "origin == 'tide' && !flag.f_tide_done",
    "once": true,
    "effects": [
     "flag f_tide_done",
     "flag f_tide_kept",
     "rep clans +1",
     {
      "if": "flag.road_gurzan",
      "then": [
       "world embers +1"
      ]
     }
    ],
    "result": "{?flag.road_gurzan:马布格托人回了话，说熊心在火边给你留了个位子。|马布格托人回了话，只说知道了。}蓝牙那份名单上，你的名字后面多了一个记号。"
   },
   {
    "text": "托马布格转告古尔赞，你收回当年的承诺",
    "tag": "退潮的人",
    "if": "origin == 'tide' && !flag.f_tide_done",
    "once": true,
    "effects": [
     "flag f_tide_done",
     "flag f_tide_broke",
     "rep clans -1",
     "rep corintar +1"
    ],
    "result": "马布格没有回话。第二天，有人在车帮上放了一节断链，链环磨得发亮，一看就是他的。"
   },
   {
    "text": "修理地道入口的闸门",
    "tag": "矮人",
    "if": "is.dwarf && origin != 'grudge' && !flag.underpass_held",
    "once": true,
    "check": {
     "skill": "persuasion",
     "alt": [
      "athletics"
     ],
     "dc": 17,
     "adv": "is.dwarf"
    },
    "ok": {
     "text": "这闸是巴尔加尔的手艺，只是齿轮少了两个齿。你拿铅把齿补上了，又说动城约的书记派了人来守着。",
     "effects": [
      "flag underpass_held"
     ]
    },
    "fail": {
     "text": "齿轮是补上了，可守闸的人没找着。闸板落下来的时候还砸了你的手。",
     "effects": [
      "damage 2d6"
     ]
    }
   },
   {
    "text": "在车旁睡一夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "你们轮流守着车过了一夜。天亮时，矮墙根下多了两个面饼，不知道是谁放的。"
   },
   {
    "text": "结束会面",
    "goto": "f_04"
   }
  ]
 },
 "f_04": {
  "id": "f_04",
  "title": "来要这句话的人",
  "art": "ev_castellos_is_dead",
  "loc": "下城 · 板车边",
  "date": "1472年奈拉月5日夜",
  "text": [
   "神王已死的消息比你们先传遍了城里。天刚黑，五拨人就提着灯来到板车边，都是冲着你们亲眼所见的那句话来的：有的要你们讲，有的要你们别讲，有的想出钱买。",
   "第一拨是多米尼克的人，三个剃了头的，要你们明天就在那块空地上当众宣讲。第二拨是阿德安的祭司，一口洛伦特口音，要你们什么也别讲，等各殿议定了再说。编年史家会也来了人，背着一块拿布包好的印版。铁杖骑士团只来了个学徒，看着十五六岁，手腕上缠着一串指骨。",
   {
    "speaker": "铁杖的学徒",
    "text": "瓦丽娜导师让我来问一句：神王的椅子既然空着，那有本事的人坐上去，算不算僭越？按理说是不算的。"
   },
   "最后一位是世家的元老，手上戴着银镯子，一开口先说了句古卡斯塔诺语。几拨人里数他出的价最高，可他没说买去要做什么。",
   {
    "if": "flag.sightings_exposed",
    "text": "学徒说，城里人到现在还记得，那年你们当众揭穿了三起银龙显灵的把戏，所以大家都管你们叫“不收神迹钱的”。"
   },
   {
    "if": "flag.wall_rubbed",
    "text": "拓片摊在车板上，一共四张纸。{?flag.war_of_two_seen:兄弟打仗那一幅压在最下面，杜卡涅尔的名字朝着下面。|}几拨人都伸长了脖子，看最上面那一张。"
   },
   {
    "if": "flag.dookanil_mocked",
    "text": "学徒还说，山里那句话早就传开了，只不过传的是当笑话讲的那个版本，说兽人的神是个精灵。城里人笑过也就算了，不怎么当真。"
   },
   {
    "if": "is.god",
    "text": "五拨人都是先看你，再看车。几位祭司给你行的礼各不一样，腰弯得有深有浅。"
   }
  ],
  "choices": [
   {
    "text": "把壁画的见闻交编年史家会印行",
    "if": "!flag.f_refused",
    "once": true,
    "effects": [
     "flag told_printed",
     "world word +3",
     {
      "if": "world.word >= 7",
      "then": [
       "world peace -1"
      ]
     },
     {
      "if": "world.word >= 8",
      "then": [
       "world peace -1"
      ]
     },
     {
      "if": "world.word >= 9",
      "then": [
       "world peace -1"
      ]
     },
     {
      "if": "world.word >= 10",
      "then": [
       "world peace -1"
      ]
     }
    ],
    "result": "印版当天夜里就开了工，背面刻那一幅画，正面刻字。编年史家会的人说，泰卢姆的喊报人是按字收钱的，这一版他们包了。"
   },
   {
    "text": "把证物卖给出价最高的元老",
    "if": "!flag.f_refused",
    "once": true,
    "effects": [
     "flag sold_morningstar",
     "gold +1500",
     "world word +1",
     "rep temples -2",
     "approval tan -2",
     "approval garaele -2"
    ],
    "result": [
     "他付的是阿斯拉银行的票子，一共十五张，每张一百。他把东西收进袖子里，朝你点点头，跟刚买了一头骡子没什么两样。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "我只管记。这一笔我也照样记下来。"
     }
    ]
   },
   {
    "text": "谢绝各方，请他们回去",
    "if": "!flag.told_printed && !flag.sold_morningstar",
    "once": true,
    "effects": [
     "flag f_refused"
    ],
    "result": "五盏灯走了四盏。只有元老的那一盏在巷口停了片刻，然后才灭了。"
   },
   {
    "text": "留意元老的袖口，看他是哪一路人",
    "once": true,
    "check": {
     "skill": "insight",
     "alt": [
      "perception"
     ],
     "dc": 16,
     "mods": [
      {
       "if": "flag.morningstar_hint",
       "n": 20,
       "why": "你在萨什部见过这种做派"
      }
     ]
    },
    "ok": {
     "text": "他袖口的里衬是黑的，上面缝着一根乌鸦羽毛。他是晨星会的人：元老会里夜里偷偷拜鸦王的不多，他算一个。",
     "effects": [
      "flag f_crow_seen"
     ]
    },
    "fail": {
     "text": "他的袖口干干净净，银镯子也擦得发亮。你什么都没看出来，只记住了他身上有股樟脑味。"
    }
   },
   {
    "text": "去边区兵营火旁澄清，别把死讯传成兽人之神弑君",
    "if": "flag.dookanil_told && world.word >= 5",
    "once": true,
    "check": {
     "skill": "persuasion",
     "alt": [
      "intimidation"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "rep.corintar >= 3",
       "n": 2,
       "why": "科琳塔尔的人认你"
      },
      {
       "if": "flag.shout_answered",
       "n": 1,
       "why": "北要塞应过你"
      }
     ]
    },
    "ok": {
     "text": "你蹲在火边，把墙上那一幅从头讲了一遍，说画上画的是精灵，打仗的也是精灵，跟城外那些兽人没有关系。讲到第三遍，总算有人往火里吐了口痰，换了个话头。",
     "effects": [
      "flag f_slur_stopped"
     ]
    },
    "fail": {
     "text": "他们听你讲完了。有个人拍拍你的肩膀说：“说得好，所以是他们的神杀了我们的王。”第二天，这句话就传到了第三个火堆。",
     "effects": [
      "flag skyking_slur",
      "world embers +2",
      "rep clans -1"
     ]
    }
   },
   {
    "text": "去车尾会见最后一位来客",
    "effects": [
     {
      "if": "flag.dookanil_told && world.word >= 5 && !flag.f_slur_stopped && !flag.skyking_slur",
      "then": [
       "flag skyking_slur",
       "world embers +2",
       "rep clans -1"
      ]
     }
    ],
    "result": [
     {
      "if": "flag.skyking_slur",
      "text": "边区兵的火堆那边有人在嚷嚷一句新话，说兽人的神杀了我们的王。"
     }
    ],
    "goto": "f_04b"
   }
  ]
 },
 "f_04b": {
  "id": "f_04b",
  "title": "一页纸",
  "text": [
   "车尾坐着一位老妇人，膝上放着一张木面具，面具上没有脸，只开了两个眼洞。她是阿格拉多斯教团的人，信的是一位早已死去的战神。她在这里等了一晚上，没同别的几拨人说过一句话。",
   "她只带来一页羊皮纸，有一角烧焦了。上面是一则很老的预言，一共十二句：东墙的火，西去的车，回来的路，血腐阶梯上的三个时辰。科琳这一辈子，一步一步全都应了。最后一句写的是一把剑，别的什么也没写。",
   {
    "speaker": "老妇人",
    "text": "二十七年前，我们在帐篷里讲过半句，多米尼克就听进去了。这一页才是全的。我们的战神早就死了，祷告他听不见，可他留下的预言还灵。"
   },
   {
    "if": "party.garaele",
    "text": "加莱尔把那页纸凑到灯下看了很久，说这种鞣皮的法子是三百年前的。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "十二句，她一句也没落下。"
   },
   {
    "if": "is.god",
    "text": "老妇人看你的眼神，像在看一处抄错了的经文。"
   },
   {
    "if": "is.god",
    "speaker": "老妇人",
    "text": "这页纸上没有你。我从头到尾找过两遍。"
   }
  ],
  "first": [
   "flag prophecy_known",
   "codex agrados_prophecy",
   "codex cult_of_agrados"
  ],
  "choices": [
   {
    "text": "把预言交给神殿，公开宣读",
    "effects": [
     "flag prophecy_told",
     "world scale -2"
    ],
    "result": "神殿在万神道口贴出了一张告示，十二句，一句一行。第一个停下来念的是个科琳塔尔的兵。他念到第六句，伸手把告示撕掉了一个角。",
    "goto": "f_05"
   },
   {
    "text": "把预言交还老妇人，让教团决定",
    "effects": [
     "flag f_proph_back"
    ],
    "result": "她把纸卷起来，塞进了面具后面的夹层里。她说教团议事得先烧一堆大火，等火烧完了再说。",
    "goto": "f_05"
   },
   {
    "text": "当场烧掉这页预言",
    "effects": [
     "flag f_proph_burned",
     "approval garaele -2"
    ],
    "result": [
     "羊皮烧起来比纸慢，有一股焦毛味。老妇人一直看着它烧完，然后把灰拢在手心里带走了。",
     {
      "if": "party.garaele",
      "text": "加莱尔把已经抄下来的那十二句从册子上撕下，放进了自己的衣襟里。"
     }
    ],
    "goto": "f_05"
   }
  ]
 },
 "f_05": {
  "id": "f_05",
  "title": "晨星会的手",
  "loc": "下城 · 地下通道",
  "date": "1472年奈拉月5日深夜",
  "text": [
   "后半夜，车上少了东西。{?flag.wall_rubbed:拓片的油布包|装证物的木箱}被人割开了，割口很齐，用的是把好刀。{?item.broken_scepter >= 1:断杖倒还在，那东西太沉，扛不走。|}{?flag.sold_morningstar:卖出去的那一半他们早就拿到手了。这次是来拿剩下的。|}",
   "脚印穿过下城，在银瀑下面拐进排水沟。二十八年前，妮克西第一次冒出头来的就是这个地方。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "谁偷我的，我就追谁！这条沟我熟，左手第三个口子通地下通道，第五个口子是淹着水的。"
   },
   {
    "if": "is.god",
    "text": "他们明明知道车上坐的是一位神，可还是来了。晨星会的人入会都要过血门礼：光着身子、空着手走进一间屋子，最后一个还站着的才算数。所以他们怕的东西不多。"
   }
  ],
  "first": [
   "codex morningstar"
  ],
  "choices": [
   {
    "text": "钻入排水沟追赶",
    "check": {
     "skill": "athletics",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "party.nixee",
       "n": 2,
       "why": "妮克西认得路"
      }
     ]
    },
    "ok": {
     "text": "沟里的水没过了膝盖。你们赶在第一个岔口前面看见了他们的灯。",
     "goto": "f_05b"
    },
    "fail": {
     "text": "你在一段塌了顶的地方卡住了，只好退回去绕了一大圈。等绕出来，灯早就不见了。",
     "effects": [
      "var f_miss +1"
     ],
     "goto": "f_05b"
    }
   }
  ]
 },
 "f_05b": {
  "id": "f_05b",
  "title": "排水沟",
  "text": [
   "排水沟是巴尔加尔的工匠砌的，石缝里长着白霉。头顶的铁箅子外面，一阵飘来北城的灯油味，一阵是南城的马尿味。",
   "再往前，沟分成了三个口子。水面上漂着一片黑羽毛，只在原地打转。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "有鞋印，往左边那个口子拐进去了。踩得重，他们扛着东西。"
   }
  ],
  "choices": [
   {
    "text": "按水流和脚印选择岔口",
    "check": {
     "skill": "perception",
     "alt": [
      "survival"
     ],
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "左手第三个口子的沟壁上有一道新划的刀痕，跟车上那道割口一样齐。",
     "goto": "f_05c"
    },
    "fail": {
     "text": "你挑的那个口子，走到头是一面墙。往回走时，你听见远处有人在笑。",
     "effects": [
      "var f_miss +1"
     ],
     "goto": "f_05c"
    }
   }
  ]
 },
 "f_05c": {
  "id": "f_05c",
  "title": "地下通道",
  "text": [
   "出了排水沟就是地下通道，宽得能并排走两辆车。墙上的火把架全空着，唯一的灯挂在一扇铁门的拉环上。",
   "元老就在门口等你们，银镯子推到了胳膊肘上。三个刀手分站在他两边，刀都还没出鞘。",
   {
    "speaker": "晨星会的元老",
    "text": "神王的椅子空了，总得有人看着。你们已经看了二十八年，也该歇一歇了。"
   },
   {
    "if": "flag.tan_morningstar",
    "text": "阿坦就站在他们后面的台阶上。他没有动手，也没有看你。"
   },
   {
    "if": "var.f_miss >= 2",
    "text": "你们到得太晚了，他们已经排好了位置。"
   }
  ],
  "choices": [
   {
    "text": "跃过塌陷处，上前拦人",
    "if": "var.f_miss == 0",
    "check": {
     "skill": "acrobatics",
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "你落地的时候，离元老只剩三步远了。",
     "combat": {
      "title": "晨星会的手",
      "enemies": [
       {
        "id": "morningstar_elder"
       },
       {
        "id": "morningstar_bravo",
        "n": 3
       }
      ],
      "specials": [
       {
        "id": "sluice",
        "name": "扳开排水沟上面的旧水闸",
        "desc": "抬头就是银瀑。成功时，所有敌人受到 5d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 15,
         "party": true,
         "mods": [
          {
           "if": "flag.underpass_held",
           "n": 20,
           "why": "守通道的人替你开了闸"
          }
         ]
        },
        "success": {
         "text": "闸板一松，银瀑的水就从头顶上灌了下来，还带着下城攒了一礼拜的泔水。三个刀手都被冲倒在台阶上，只有元老抓着铁环没松手。",
         "dmgAll": "5d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "闸轮早就锈死了。你扳了两下，只磨掉了掌心一层皮。",
         "selfDmg": "1d6"
        }
       },
       {
        "id": "seat",
        "name": "当着他的人喊出他在元老会里坐第几席",
        "desc": "先弄清他的身份，这一招才有用。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "intimidation",
         "alt": [
          "persuasion"
         ],
         "dc": 14,
         "mods": [
          {
           "if": "!flag.morningstar_hint && !flag.f_crow_seen",
           "n": -20,
           "why": "你不知道他坐第几席"
          }
         ]
        },
        "success": {
         "text": "你报出了他在元老会里的席次，又报出了他祖父的名字。两个刀手对看了一眼，把刀插回了鞘里。他们没想到主子的身份会被人当众点穿。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你喊出来的席次差了两位。元老笑了一声，袖口一抖，几片黑羽毛落进了水里。"
        }
       },
       {
        "id": "counter",
        "name": "掐断元老的召唤",
        "desc": "他的法术来自袖中的乌鸦羽，懂法术的人可以干扰它。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点火焰伤害。",
        "check": {
         "skill": "arcana",
         "dc": 16,
         "adv": "is.caster",
         "mods": [
          {
           "if": "!is.caster",
           "n": -4,
           "why": "这得懂行"
          }
         ]
        },
        "success": {
         "text": "他袖口里的黑羽毛才刚冒头就蔫了，一根一根掉进了水里。元老低下头，看了看自己的手。",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "黑羽毛从你指缝里钻了过去，烫得很。",
         "selfDmg": "2d6",
         "type": "fire"
        }
       }
      ],
      "xp": 1500,
      "win": {
       "goto": "f_05d"
      },
      "lose": {
       "effects": [
        "flag f_robbed",
        "rep league -2",
        "gold -300",
        "hp 1"
       ],
       "goto": "f_05d"
      },
      "intro": "你们抢先赶到。那些刀手的兵器还没完全出鞘。"
     }
    },
    "fail": {
     "text": "你落在一摊烂泥里，还崴了脚。好在他们也没想到你们会来得这么快。",
     "combat": {
      "title": "晨星会的手",
      "enemies": [
       {
        "id": "morningstar_elder"
       },
       {
        "id": "morningstar_bravo",
        "n": 3
       }
      ],
      "specials": [
       {
        "id": "sluice",
        "name": "扳开排水沟上面的旧水闸",
        "desc": "抬头就是银瀑。成功时，所有敌人受到 5d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 15,
         "party": true,
         "mods": [
          {
           "if": "flag.underpass_held",
           "n": 20,
           "why": "守通道的人替你开了闸"
          }
         ]
        },
        "success": {
         "text": "闸板一松，银瀑的水就从头顶上灌了下来，还带着下城攒了一礼拜的泔水。三个刀手都被冲倒在台阶上，只有元老抓着铁环没松手。",
         "dmgAll": "5d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "闸轮早就锈死了。你扳了两下，只磨掉了掌心一层皮。",
         "selfDmg": "1d6"
        }
       },
       {
        "id": "seat",
        "name": "当着他的人喊出他在元老会里坐第几席",
        "desc": "先弄清他的身份，这一招才有用。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "intimidation",
         "alt": [
          "persuasion"
         ],
         "dc": 14,
         "mods": [
          {
           "if": "!flag.morningstar_hint && !flag.f_crow_seen",
           "n": -20,
           "why": "你不知道他坐第几席"
          }
         ]
        },
        "success": {
         "text": "你报出了他在元老会里的席次，又报出了他祖父的名字。两个刀手对看了一眼，把刀插回了鞘里。他们没想到主子的身份会被人当众点穿。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你喊出来的席次差了两位。元老笑了一声，袖口一抖，几片黑羽毛落进了水里。"
        }
       },
       {
        "id": "counter",
        "name": "掐断元老的召唤",
        "desc": "他的法术来自袖中的乌鸦羽，懂法术的人可以干扰它。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点火焰伤害。",
        "check": {
         "skill": "arcana",
         "dc": 16,
         "adv": "is.caster",
         "mods": [
          {
           "if": "!is.caster",
           "n": -4,
           "why": "这得懂行"
          }
         ]
        },
        "success": {
         "text": "他袖口里的黑羽毛才刚冒头就蔫了，一根一根掉进了水里。元老低下头，看了看自己的手。",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "黑羽毛从你指缝里钻了过去，烫得很。",
         "selfDmg": "2d6",
         "type": "fire"
        }
       }
      ],
      "xp": 1500,
      "win": {
       "goto": "f_05d"
      },
      "lose": {
       "effects": [
        "flag f_robbed",
        "rep league -2",
        "gold -300",
        "hp 1"
       ],
       "goto": "f_05d"
      },
      "intro": "刀手散开，灯下的你们已经被围住了。"
     }
    }
   },
   {
    "text": "跃过塌陷处，上前拦人",
    "if": "var.f_miss == 1",
    "check": {
     "skill": "acrobatics",
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "你落地的时候，离元老只剩五步远了。",
     "combat": {
      "title": "晨星会的手",
      "enemies": [
       {
        "id": "morningstar_elder"
       },
       {
        "id": "morningstar_bravo",
        "n": 3
       }
      ],
      "specials": [
       {
        "id": "sluice",
        "name": "扳开排水沟上面的旧水闸",
        "desc": "抬头就是银瀑。成功时，所有敌人受到 5d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 15,
         "party": true,
         "mods": [
          {
           "if": "flag.underpass_held",
           "n": 20,
           "why": "守通道的人替你开了闸"
          }
         ]
        },
        "success": {
         "text": "闸板一松，银瀑的水就从头顶上灌了下来，还带着下城攒了一礼拜的泔水。三个刀手都被冲倒在台阶上，只有元老抓着铁环没松手。",
         "dmgAll": "5d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "闸轮早就锈死了。你扳了两下，只磨掉了掌心一层皮。",
         "selfDmg": "1d6"
        }
       },
       {
        "id": "seat",
        "name": "当着他的人喊出他在元老会里坐第几席",
        "desc": "先弄清他的身份，这一招才有用。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "intimidation",
         "alt": [
          "persuasion"
         ],
         "dc": 14,
         "mods": [
          {
           "if": "!flag.morningstar_hint && !flag.f_crow_seen",
           "n": -20,
           "why": "你不知道他坐第几席"
          }
         ]
        },
        "success": {
         "text": "你报出了他在元老会里的席次，又报出了他祖父的名字。两个刀手对看了一眼，把刀插回了鞘里。他们没想到主子的身份会被人当众点穿。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你喊出来的席次差了两位。元老笑了一声，袖口一抖，几片黑羽毛落进了水里。"
        }
       },
       {
        "id": "counter",
        "name": "掐断元老的召唤",
        "desc": "他的法术来自袖中的乌鸦羽，懂法术的人可以干扰它。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点火焰伤害。",
        "check": {
         "skill": "arcana",
         "dc": 16,
         "adv": "is.caster",
         "mods": [
          {
           "if": "!is.caster",
           "n": -4,
           "why": "这得懂行"
          }
         ]
        },
        "success": {
         "text": "他袖口里的黑羽毛才刚冒头就蔫了，一根一根掉进了水里。元老低下头，看了看自己的手。",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "黑羽毛从你指缝里钻了过去，烫得很。",
         "selfDmg": "2d6",
         "type": "fire"
        }
       }
      ],
      "xp": 1500,
      "win": {
       "goto": "f_05d"
      },
      "lose": {
       "effects": [
        "flag f_robbed",
        "rep league -2",
        "gold -300",
        "hp 1"
       ],
       "goto": "f_05d"
      },
      "intro": "刀手散开，灯下的你们已经被围住了。"
     }
    },
    "fail": {
     "text": "你一脚落进了烂泥里，刀手们比你先站稳了。",
     "effects": [
      "damage 2d8"
     ],
     "combat": {
      "title": "晨星会的手",
      "enemies": [
       {
        "id": "morningstar_elder"
       },
       {
        "id": "morningstar_bravo",
        "n": 3
       }
      ],
      "specials": [
       {
        "id": "sluice",
        "name": "扳开排水沟上面的旧水闸",
        "desc": "抬头就是银瀑。成功时，所有敌人受到 5d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 15,
         "party": true,
         "mods": [
          {
           "if": "flag.underpass_held",
           "n": 20,
           "why": "守通道的人替你开了闸"
          }
         ]
        },
        "success": {
         "text": "闸板一松，银瀑的水就从头顶上灌了下来，还带着下城攒了一礼拜的泔水。三个刀手都被冲倒在台阶上，只有元老抓着铁环没松手。",
         "dmgAll": "5d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "闸轮早就锈死了。你扳了两下，只磨掉了掌心一层皮。",
         "selfDmg": "1d6"
        }
       },
       {
        "id": "seat",
        "name": "当着他的人喊出他在元老会里坐第几席",
        "desc": "先弄清他的身份，这一招才有用。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "intimidation",
         "alt": [
          "persuasion"
         ],
         "dc": 14,
         "mods": [
          {
           "if": "!flag.morningstar_hint && !flag.f_crow_seen",
           "n": -20,
           "why": "你不知道他坐第几席"
          }
         ]
        },
        "success": {
         "text": "你报出了他在元老会里的席次，又报出了他祖父的名字。两个刀手对看了一眼，把刀插回了鞘里。他们没想到主子的身份会被人当众点穿。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你喊出来的席次差了两位。元老笑了一声，袖口一抖，几片黑羽毛落进了水里。"
        }
       },
       {
        "id": "counter",
        "name": "掐断元老的召唤",
        "desc": "他的法术来自袖中的乌鸦羽，懂法术的人可以干扰它。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点火焰伤害。",
        "check": {
         "skill": "arcana",
         "dc": 16,
         "adv": "is.caster",
         "mods": [
          {
           "if": "!is.caster",
           "n": -4,
           "why": "这得懂行"
          }
         ]
        },
        "success": {
         "text": "他袖口里的黑羽毛才刚冒头就蔫了，一根一根掉进了水里。元老低下头，看了看自己的手。",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "黑羽毛从你指缝里钻了过去，烫得很。",
         "selfDmg": "2d6",
         "type": "fire"
        }
       }
      ],
      "xp": 1500,
      "win": {
       "goto": "f_05d"
      },
      "lose": {
       "effects": [
        "flag f_robbed",
        "rep league -2",
        "gold -300",
        "hp 1"
       ],
       "goto": "f_05d"
      },
      "intro": "对方先出手。第一刀便冲你的膝盖而来。"
     }
    }
   },
   {
    "text": "走到铁门边的灯下",
    "if": "var.f_miss >= 2",
    "effects": [
     "damage 2d8"
    ],
    "combat": {
     "title": "晨星会的手",
     "enemies": [
      {
       "id": "morningstar_elder"
      },
      {
       "id": "morningstar_bravo",
       "n": 3
      }
     ],
     "specials": [
      {
       "id": "sluice",
       "name": "扳开排水沟上面的旧水闸",
       "desc": "抬头就是银瀑。成功时，所有敌人受到 5d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "party": true,
        "mods": [
         {
          "if": "flag.underpass_held",
          "n": 20,
          "why": "守通道的人替你开了闸"
         }
        ]
       },
       "success": {
        "text": "闸板一松，银瀑的水就从头顶上灌了下来，还带着下城攒了一礼拜的泔水。三个刀手都被冲倒在台阶上，只有元老抓着铁环没松手。",
        "dmgAll": "5d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "闸轮早就锈死了。你扳了两下，只磨掉了掌心一层皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "seat",
       "name": "当着他的人喊出他在元老会里坐第几席",
       "desc": "先弄清他的身份，这一招才有用。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 14,
        "mods": [
         {
          "if": "!flag.morningstar_hint && !flag.f_crow_seen",
          "n": -20,
          "why": "你不知道他坐第几席"
         }
        ]
       },
       "success": {
        "text": "你报出了他在元老会里的席次，又报出了他祖父的名字。两个刀手对看了一眼，把刀插回了鞘里。他们没想到主子的身份会被人当众点穿。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你喊出来的席次差了两位。元老笑了一声，袖口一抖，几片黑羽毛落进了水里。"
       }
      },
      {
       "id": "counter",
       "name": "掐断元老的召唤",
       "desc": "他的法术来自袖中的乌鸦羽，懂法术的人可以干扰它。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点火焰伤害。",
       "check": {
        "skill": "arcana",
        "dc": 16,
        "adv": "is.caster",
        "mods": [
         {
          "if": "!is.caster",
          "n": -4,
          "why": "这得懂行"
         }
        ]
       },
       "success": {
        "text": "他袖口里的黑羽毛才刚冒头就蔫了，一根一根掉进了水里。元老低下头，看了看自己的手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "黑羽毛从你指缝里钻了过去，烫得很。",
        "selfDmg": "2d6",
        "type": "fire"
       }
      }
     ],
     "xp": 1500,
     "win": {
      "goto": "f_05d"
     },
     "lose": {
      "effects": [
       "flag f_robbed",
       "rep league -2",
       "gold -300",
       "hp 1"
      ],
      "goto": "f_05d"
     },
     "intro": "对方先出手。第一刀便冲你的膝盖而来。"
    }
   }
  ]
 },
 "f_05d": {
  "id": "f_05d",
  "title": "天亮以前",
  "text": [
   {
    "if": "!flag.f_robbed",
    "text": "元老倒在了铁门口，一把黑羽毛从他袖子里掉了出来。东西都还在，只是{?flag.wall_rubbed:拓片湿了一角|木箱泡了水}。刀手跑掉了一个，往通道深处去了。"
   },
   {
    "if": "flag.f_robbed",
    "text": "等你们醒过来，东西已经没了。天亮以前，奥特拉克元老的孙子拿一只柳条筐把它们送回来，一样都不少。他说赎金他先垫上了，回头再跟你们算。"
   },
   "你们爬回地面时天还没亮，银瀑下面已经有人在洗衣服。那人看了你们一眼，又低头搓洗起来。",
   {
    "if": "flag.tan_morningstar",
    "text": "台阶上一个人也没有，只在阿坦站过的地方留着两个干的鞋印。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "抓贼花的钱得算在贼头上！这一趟我记在晨星会的账上了。"
   }
  ],
  "choices": [
   {
    "text": "回答妮克西，空椅子该由谁照看",
    "tag": "无冕",
    "if": "faction == 'crownless' && party.nixee",
    "effects": [
     "approval nixee +1"
    ],
    "result": [
     {
      "speaker": "妮克西",
      "text": "你不是说椅子空着天也没塌吗？可今晚差一点就塌了！那我问你，下次谁来看着？"
     },
     "你说，你们来看着。她想了想，把笔放下了，没有往账本上写价钱。"
    ],
    "goto": "f_06"
   },
   {
    "text": "回答乌什卡，空椅子该由谁照看",
    "tag": "无冕",
    "if": "faction == 'crownless' && !party.nixee && party.ushka",
    "effects": [
     "approval ushka +1"
    ],
    "result": [
     {
      "speaker": "乌什卡",
      "text": "你看，椅子一空，第一个伸手的就是这种人。下次谁来看着？"
     },
     "你说，你们来看着。她把锤子上的泥擦干净了，说那还得多找几个人。"
    ],
    "goto": "f_06"
   },
   {
    "text": "回车上睡两个时辰",
    "effects": [
     "rest short"
    ],
    "goto": "f_06"
   }
  ]
 },
 "f_06": {
  "id": "f_06",
  "title": "南门",
  "loc": "卡斯塔诺白墙 · 南门",
  "date": "1472年奈拉月6日",
  "text": [
   "天还没亮，你们就到了南门，古尔赞的氏族今天要到。这道白墙是卡斯塔诺人修的，门洞宽得能并排过四辆车。铁闸三百年没落下来过，守门的边区兵昨天夜里才给绞盘上了油，足足抹了三遍。",
   "站在墙头上望得见南边氏族的营火。昨天夜里是十四堆，今天早上{?world.embers <= 3:只剩三堆，还都是灭了的|一堆也没少，反倒多出来两堆}。",
   {
    "if": "flag.bones_at_gate && world.embers >= 4",
    "text": "门洞里一排一排站着人，一点声音也没有。等你们走近了才看清，里面没有一个是活的。"
   }
  ],
  "first": [
   "quest q_southgate stage 2"
  ],
  "choices": [
   {
    "text": "登墙辨认来人",
    "if": "world.embers <= 3",
    "goto": "f_06c"
   },
   {
    "text": "进城门洞查看",
    "if": "world.embers >= 4 && flag.bones_at_gate",
    "goto": "f_06b"
   },
   {
    "text": "上城墙等号角",
    "if": "world.embers >= 4 && !flag.bones_at_gate",
    "goto": "f_06d"
   }
  ]
 },
 "f_06b": {
  "id": "f_06b",
  "title": "三排白骨",
  "art": "ev_undead_army",
  "text": [
   "门洞里站着的三排骷髅兵，是铁杖骑士团的死灵法师瓦丽娜带来的。矛是新的，骨头是旧的，有人类的也有兽人的，关节上都缠着两道铁丝。瓦丽娜自己坐在墙头的一张折凳上，膝盖上摊着账本。",
   "号角响过了三遍。氏族的人冲到门洞前面，第一排的看清了矛后面站的是什么，又都退了回去。从头到尾，没有一个活人上过墙。",
   {
    "if": "party.ushka",
    "text": "仗打完以后，乌什卡走进门洞。她从第一排第一具敲起，锤子落在头骨上，一下一具。两边墙头上的人都看着她敲。敲完最后一具，她把锤子插回腰里，出了南门，一直往南走了。她说过，再有第二次她就走。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "你们又要使唤死人。这是第二次了。"
   },
   {
    "if": "!party.ushka",
    "text": "瓦丽娜点完了数：三百具，折了七具。她说，这笔很划算。"
   }
  ],
  "first": [
   "flag southgate_held",
   "world unburied +2",
   "xp 1800",
   {
    "if": "party.ushka",
    "then": [
     "companion -ushka",
     "flag ushka_left"
    ]
   }
  ],
  "next": "f_07"
 },
 "f_06c": {
  "id": "f_06c",
  "title": "缠白布的使者",
  "text": [
   "中午，南边来了七名兽人使者，身上缠着白布，手里没有兵器。领头的马布格缺一根獠牙，二十八年前他替你们抬过尸体，从不问死者是哪边的人。",
   {
    "speaker": "马布格",
    "text": "熊心让我带一句话来：十一日那天，他要到那块空地上去坐一坐，不带刀。"
   },
   "话说完，他就站在原地等城门上回话。门洞里的边区兵把矛放低了一点，马上又抬起来。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "马布格，你还活着。"
   },
   {
    "if": "party.ushka",
    "speaker": "马布格",
    "text": "你不也活着。骨头还是你在磨？"
   }
  ],
  "first": [
   "flag southgate_held"
  ],
  "choices": [
   {
    "text": "请马布格入门喝热汤",
    "effects": [
     "rep clans +1",
     "rep league -1"
    ],
    "result": "他一连喝了两碗，把碗底舔干净了才还回来。边区兵的伙夫在旁边看着他喝，一声不响地又给他盛了半碗。",
    "goto": "f_07"
   },
   {
    "text": "接受对方口信，送使者回去",
    "effects": [
     "rep league +1"
    ],
    "result": "马布格点点头，领着人往南走。走出一箭地以后，他回过头来，冲车这边挥了一下手。",
    "goto": "f_07"
   }
  ]
 },
 "f_06d": {
  "id": "f_06d",
  "title": "南门之战",
  "art": "load_5",
  "text": [
   "正午，号角响了，三声长一声短。氏族的人从南边的坡上下来，不跑，一排一排地走。打头的是碎剑者氏族的先锋酋长，斧子上缠着红布。",
   "跟在他们后面的老兵，多半二十八年前都跟过杜坎森。他们见过刀枪不入的人，别的也就不大怕了。",
   {
    "if": "world.embers >= 8",
    "text": "坡上的旗多得数不过来。十四个氏族全都到了，另外还有几个氏族是你从没见过的。"
   },
   {
    "if": "flag.underpass_held",
    "text": "地下通道那头有人在墙上敲了三下。有一队人想从下面摸进城，被守通道的人堵在里面了。"
   },
   {
    "if": "flag.skyking_slur",
    "text": "墙头上有个边区兵冲下面喊：你们的神杀了我们的王！下面的人听懂了，喊回来的话比这还难听。"
   },
   {
    "if": "is.greenskin",
    "text": "对面第一排有人在喊你的名字，用的是氏族里的叫法。"
   },
   {
    "if": "origin == 'tide'",
    "text": "马布格就站在对面的第一排。他也看见你了。"
   },
   {
    "if": "is.god",
    "text": "对面的人都知道墙上站着的是一位神，可他们没有停下来。"
   }
  ],
  "choices": [
   {
    "text": "出声回应",
    "tag": "绿皮",
    "if": "is.greenskin",
    "once": true,
    "effects": [
     "rep clans +1",
     "rep league -1"
    ],
    "result": "你应了一声。对面那人愣了一下，把斧子换到了左手。墙头上的边区兵往旁边挪了一步，离你远了点。"
   },
   {
    "text": "独自走出南门",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag southgate_held",
     "flag god_held_gate",
     "world room -2",
     "rep clans -3",
     "unflag arosha_at_table"
    ],
    "result": [
     "你让他们把闸升起来，一个人走了出去。这一仗打到太阳偏西就打完了。城里一个人也没死。",
     "到了晚上，阿罗莎把凳子从门板旁边搬走了。她说南门外面的那些人，有一半是她小时候就认得的。",
     {
      "speaker": "蓝牙",
      "text": "守是守住了。可往后城里的人会觉得，守城不关他们的事。"
     }
    ],
    "goto": "f_07"
   },
   {
    "text": "与阿罗莎的人共守左侧垛口",
    "if": "world.embers >= 4 && world.embers <= 7 && !flag.underpass_held && flag.arosha_at_table",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "阿罗莎的部众守着左侧垛口，伐橡斧靠在墙边，锋刃朝外。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "allies": [
      {
       "id": "arosha"
      }
     ],
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_07"
     }
    }
   },
   {
    "text": "与阿罗莎的人共守左侧垛口",
    "if": "world.embers >= 4 && world.embers <= 7 && flag.underpass_held && flag.arosha_at_table",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "阿罗莎的部众守着左侧垛口，伐橡斧靠在墙边，锋刃朝外。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "arosha"
      }
     ],
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_07"
     }
    }
   },
   {
    "text": "与阿罗莎的人共守左侧垛口",
    "if": "world.embers >= 8 && !flag.underpass_held && flag.arosha_at_table",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "阿罗莎的部众守着左侧垛口，伐橡斧靠在墙边，锋刃朝外。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 5
      }
     ],
     "allies": [
      {
       "id": "arosha"
      }
     ],
     "lose": {
      "effects": [
       "hp 1",
       "flag f_city_fell"
      ],
      "goto": "f_09"
     }
    }
   },
   {
    "text": "与阿罗莎的人共守左侧垛口",
    "if": "world.embers >= 8 && flag.underpass_held && flag.arosha_at_table",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "阿罗莎的部众守着左侧垛口，伐橡斧靠在墙边，锋刃朝外。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "allies": [
      {
       "id": "arosha"
      }
     ],
     "lose": {
      "effects": [
       "hp 1",
       "flag f_city_fell"
      ],
      "goto": "f_09"
     }
    }
   },
   {
    "text": "和边区老兵堵住门洞",
    "if": "world.embers >= 4 && world.embers <= 7 && !flag.underpass_held && (flag.shout_answered || rep.corintar >= 3 || flag.f_told_bluetusk)",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "边区老兵把盾牌一面压一面地叠起来，堵住了门洞。领头的老人满头白发，嘴里一直低声数着数。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "allies": [
      {
       "id": "marcher_veteran",
       "n": 2,
       "name": "边区老兵"
      }
     ],
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_07"
     }
    }
   },
   {
    "text": "和边区老兵堵住门洞",
    "if": "world.embers >= 4 && world.embers <= 7 && flag.underpass_held && (flag.shout_answered || rep.corintar >= 3 || flag.f_told_bluetusk)",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "边区老兵把盾牌一面压一面地叠起来，堵住了门洞。领头的老人满头白发，嘴里一直低声数着数。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "marcher_veteran",
       "n": 2,
       "name": "边区老兵"
      }
     ],
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_07"
     }
    }
   },
   {
    "text": "和边区老兵堵住门洞",
    "if": "world.embers >= 8 && !flag.underpass_held && (flag.shout_answered || rep.corintar >= 3 || flag.f_told_bluetusk)",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "边区老兵把盾牌一面压一面地叠起来，堵住了门洞。领头的老人满头白发，嘴里一直低声数着数。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 5
      }
     ],
     "allies": [
      {
       "id": "marcher_veteran",
       "n": 2,
       "name": "边区老兵"
      }
     ],
     "lose": {
      "effects": [
       "hp 1",
       "flag f_city_fell"
      ],
      "goto": "f_09"
     }
    }
   },
   {
    "text": "和边区老兵堵住门洞",
    "if": "world.embers >= 8 && flag.underpass_held && (flag.shout_answered || rep.corintar >= 3 || flag.f_told_bluetusk)",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "边区老兵把盾牌一面压一面地叠起来，堵住了门洞。领头的老人满头白发，嘴里一直低声数着数。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "allies": [
      {
       "id": "marcher_veteran",
       "n": 2,
       "name": "边区老兵"
      }
     ],
     "lose": {
      "effects": [
       "hp 1",
       "flag f_city_fell"
      ],
      "goto": "f_09"
     }
    }
   },
   {
    "text": "由你们几人守绞盘",
    "if": "world.embers >= 4 && world.embers <= 7 && !flag.underpass_held",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "绞盘旁边只有你们几个人，新换的闸绳还带着一股麻油味。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_07"
     }
    }
   },
   {
    "text": "由你们几人守绞盘",
    "if": "world.embers >= 4 && world.embers <= 7 && flag.underpass_held",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "绞盘旁边只有你们几个人，新换的闸绳还带着一股麻油味。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_07"
     }
    }
   },
   {
    "text": "由你们几人守绞盘",
    "if": "world.embers >= 8 && !flag.underpass_held",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "绞盘旁边只有你们几个人，新换的闸绳还带着一股麻油味。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 5
      }
     ],
     "lose": {
      "effects": [
       "hp 1",
       "flag f_city_fell"
      ],
      "goto": "f_09"
     }
    }
   },
   {
    "text": "由你们几人守绞盘",
    "if": "world.embers >= 8 && flag.underpass_held",
    "combat": {
     "title": "南门",
     "noAwe": true,
     "xp": 1800,
     "specials": [
      {
       "id": "gate",
       "name": "落闸",
       "desc": "铁闸已有三百年没有放下，绞盘昨夜才上过油。成功时，所有敌人受到 4d6 点钝击伤害，并陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16,
        "party": true,
        "adv": "is.martial"
       },
       "success": {
        "text": "绞盘才转了半圈就卡住了。你拿肩膀顶上去，又硬推了半圈，铁闸轰的一声砸下来，震得地皮直跳。闸外那一截人进不来，闸里这一截也出不去了。",
        "dmgAll": "4d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "绞盘上的油抹得太多了。你手一滑，闸只落下来一半，正卡在你们自己人的头顶上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "shout",
       "name": "在阵前喊火边那句话",
       "desc": "若想让氏族听进去，得有人在营火边说过：“造我们的是个精灵，不配我们替他死。”成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.ushka_spoke",
          "n": 4,
          "why": "这句话在火边说过了"
         },
         {
          "if": "origin == 'tide'",
          "n": 2,
          "why": "对面认得你的嗓子"
         },
         {
          "if": "!flag.ushka_spoke && origin != 'tide'",
          "n": -20,
          "why": "对面没人听过这句话"
         }
        ]
       },
       "success": {
        "text": "对面第一排有一半人停下脚步。有的回过头去找是谁喊的，有的低下头看自己的手背。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "风是朝你这边刮的，你喊的话全被号角声盖住了。对面一个字也没听见。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag southgate_held"
      ],
      "goto": "f_07"
     },
     "intro": "绞盘旁边只有你们几个人，新换的闸绳还带着一股麻油味。",
     "enemies": [
      {
       "id": "clan_warcaller"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "lose": {
      "effects": [
       "hp 1",
       "flag f_city_fell"
      ],
      "goto": "f_09"
     }
    }
   },
   {
    "text": "留守原地，等对方撤退",
    "if": "world.embers < 4",
    "effects": [
     "flag southgate_held"
    ],
    "result": "他们到底没有攻城。天黑以前，坡上的火已经灭了一半。",
    "goto": "f_07"
   }
  ]
 },
 "f_07": {
  "id": "f_07",
  "title": "试炼山，夜里",
  "art": "ev_big_star_in_sky",
  "loc": "试炼山 · 誓石",
  "date": "1472年奈拉月8日夜",
  "text": [
   {
    "if": "flag.f_city_fell",
    "text": "城已经破了，北要塞里只剩下几个看门的。"
   },
   "出了北要塞的后门，就是上试炼山的路。山上有卡斯塔诺帝国留下的十道试炼，法术早在 1020 年就失效了，如今只剩些旧石头，第九关的无头石像还跪在原地。",
   {
    "if": "flag.spirits_heard",
    "text": "第六道试炼的那两位树灵还在吵。年长的那位说，银龙后来也上山来问过天。年轻的那位说是他记错了，过了片刻又改口，说记错的是自己。"
   },
   "誓石立在山顶上，还没有一个人高，顶上被人摸得发亮。从前卡斯塔诺的皇帝登基，都要来这里把手按在石头上立誓。誓词刻在背面，最后一句是：并永说真话。",
   "今晚有人想上山立誓，做卡斯托纳斯城的主人。你自己不能去立这个誓，这是规矩，也是你们这一行的本分：收尸队只在旁边看着。",
   {
    "if": "flag.compact_league",
    "speaker": "卡莉斯塔",
    "text": "我父亲卡莱昂说他不想要这座城，可我想要。他今年八十一了，这句话他已经说了三十年。"
   },
   {
    "if": "world.room >= 6",
    "speaker": "阿罗莎",
    "text": "我不想当王。我只想让兽人在这座城里有个说得上话的人。既然没人肯当，那就我来。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "卡斯坦就是在这座山上见到银龙的。他上来的那次，也是夜里。"
   }
  ],
  "first": [
   "rest short"
  ],
  "choices": [
   {
    "text": "谈那页预言：科琳照着它走，功劳算不算她的",
    "tag": "试炼派",
    "if": "faction == 'tried' && flag.prophecy_known",
    "once": true,
    "effects": [
     {
      "if": "party.tan",
      "then": [
       "approval tan +1"
      ],
      "else": [
       "rep corintar +1"
      ]
     }
    ],
    "result": [
     "{?party.tan:阿坦|年轻的那位树灵}问你：那页预言上一共十二句，科琳一句都没落下。可照着纸走完的路，到底算她的功劳，还是只算照本宣科？",
     "你说，路是别人写的，可腿是她自己的。{?party.tan:他想了一会儿，说这句话他记下了。|树灵说这话它上次也听过，那是一千年前的事了。}"
    ]
   },
   {
    "text": "陪卡莉斯塔上山立誓",
    "req": "flag.compact_league && rep.league >= 3",
    "reqText": "需要城约把城交给黑塔家，且东坎诺旧贵族声望达到 3",
    "effects": [
     "flag f_up_kalista"
    ],
    "goto": "f_07b"
   },
   {
    "text": "陪阿罗莎上山立誓",
    "req": "world.room >= 7 && rep.clans >= 3",
    "reqText": "需要绿皮处境达到 7，且兽人氏族声望达到 3",
    "effects": [
     "flag f_up_arosha"
    ],
    "goto": "f_07b"
   },
   {
    "text": "不陪候选人，带阿坦去看誓词",
    "if": "party.tan",
    "effects": [
     "approval tan +1"
    ],
    "result": [
     "阿坦把灯举到誓石背面，一个字一个字地往下念。念到最后一句他停了停，又念了一遍。",
     {
      "speaker": "阿坦",
      "text": "并永说真话。历代卡斯坦皇帝一个接一个，都在这里说过这句话。"
     }
    ],
    "goto": "f_08"
   },
   {
    "text": "独自上山触摸誓石",
    "if": "!party.tan",
    "effects": [
     "flag f_oath_touched"
    ],
    "result": "石头是凉的，顶上那一块磨得比别处都亮，那是一千多年里一只手一只手按出来的。你也按了一下，然后就下山了。",
    "goto": "f_08"
   }
  ]
 },
 "f_07b": {
  "id": "f_07b",
  "title": "第一道试炼",
  "text": [
   "人称“沉默者”的卡斯坦十三世设下了第一关，考的偏偏是喊话。朝北要塞喊一声，要有人肯回答，你才有资格往上走。",
   "{?flag.f_up_kalista:卡莉斯塔|阿罗莎}站在山腰的石台上，冲着山下喊了一声。山下的灯都亮着，却一点动静也没有。",
   {
    "if": "flag.shout_answered",
    "text": "二十七年前，你也在这里喊过一嗓子。那次北要塞是应了的。"
   }
  ],
  "choices": [
   {
    "text": "等山下有人回应",
    "if": "rep.league >= 3 || rep.corintar >= 3 || rep.clans >= 3",
    "result": [
     {
      "if": "rep.league >= 3",
      "text": "北要塞的箭楼上先有人应了一声。那是世家的人，声音拖得很长，照的是古礼。"
     },
     {
      "if": "rep.corintar >= 3",
      "text": "要塞西墙上应声的是科琳塔尔的兵，十几个人一齐喊，喊的是“剑与盾”。"
     },
     {
      "if": "rep.clans >= 3",
      "text": "要塞下面的棚户区里也有人应了，说的是兽人话，只有一个字：在。"
     },
     {
      "if": "flag.shout_answered",
      "text": "应声的人里面有一个后来上了山。他说二十七年前这山上也有人喊过一嗓子，那年他正好是看门的。"
     }
    ],
    "goto": "f_07c"
   },
   {
    "text": "帮她一起喊，直到山下有人回应",
    "if": "rep.league < 3 && rep.corintar < 3 && rep.clans < 3",
    "check": {
     "skill": "persuasion",
     "alt": [
      "performance",
      "intimidation"
     ],
     "dc": 18,
     "party": true,
     "mods": [
      {
       "if": "flag.shout_answered",
       "n": 2,
       "why": "北要塞应过你"
      }
     ]
    },
    "ok": {
     "text": "你喊到第二声，北要塞的门楼上有人举起了灯，晃了三下。跟着又亮起了第二盏、第三盏。",
     "goto": "f_07c"
    },
    "fail": {
     "text": "应声的只有你们自己的人。山下要塞里有人笑了起来，笑声顺着山坡一路传上来。到第二天，全城的人都听说了。",
     "effects": [
      "rep league -1"
     ],
     "goto": "f_07c"
    }
   }
  ]
 },
 "f_07c": {
  "id": "f_07c",
  "title": "誓石",
  "text": [
   "到山顶的时候已经过了半夜。{?flag.f_up_kalista:卡莉斯塔|阿罗莎}把手按在誓石上，你站在她身后。照规矩，你就是见证人。",
   "誓词起首是“我誓守我土我民，至死方休，不以不义之争加于世。”最后一句是“并永说真话。”",
   "山下上来了一些人，提着灯围成一圈站着。他们看的是她，可也在看你。见证人说的话算不算数，得看见证人自己从前说过多少谎话。",
   {
    "if": "var.lies >= 3",
    "text": "人群里有人认得你。他的嘴动了动，到底没出声。"
   }
  ],
  "choices": [
   {
    "text": "当众为她的誓言作证",
    "effects": [
     {
      "if": "flag.f_up_kalista",
      "then": [
       "flag claimant_kalista"
      ]
     },
     {
      "if": "flag.f_up_arosha",
      "then": [
       "flag claimant_arosha"
      ]
     }
    ],
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "party": false,
     "mods": [
      {
       "if": "var.lies >= 1 && !flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎"
      },
      {
       "if": "var.lies >= 2 && !flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎"
      },
      {
       "if": "var.lies >= 3 && !flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎"
      },
      {
       "if": "var.lies >= 4 && !flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎"
      },
      {
       "if": "var.lies >= 5 && !flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎"
      },
      {
       "if": "var.lies >= 6 && !flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎"
      },
      {
       "if": "var.lies >= 2 && flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎（已当众认过）"
      },
      {
       "if": "var.lies >= 4 && flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎（已当众认过）"
      },
      {
       "if": "var.lies >= 6 && flag.lies_confessed",
       "n": -1,
       "why": "你从前说过谎（已当众认过）"
      }
     ]
    },
    "ok": {
     "text": "你报了自己的名字和出身，又报了这二十八年里抬过的人，从头到尾没有人打断你。她念完誓词，在誓石上按了手印。",
     "goto": "f_08"
    },
    "fail": {
     "text": "你才说到一半，人群里就有人喊：“这个人自己就不说真话！”有几个人笑了，笑声不大。她还是把誓词念完，按了手印。",
     "effects": [
      "rep league -1"
     ],
     "goto": "f_08"
    }
   }
  ]
 },
 "f_08": {
  "id": "f_08",
  "title": "万神道上的会",
  "art": "ev_castellos_is_dead",
  "loc": "万神道 · 没屋顶的神殿前",
  "date": "1472年奈拉月9日至10日",
  "text": [
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4",
    "text": "万神道上那座没屋顶的庙里撑起了一顶大帐，是跟先锋行会借的，帐杆就插在庙墙里。各殿的祭司都挤在帐中：主张科琳凭功劳封神的多米尼克一派占了左边的长凳，神王长子阿德安的祭司坐在右边，教团的老妇人坐在门口，膝上仍放着面具。奥特拉克元老的孙子也来了，手上戴的还是那只银镯子。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4",
    "text": "{?party.garaele:加莱尔坐在最旁边执笔，墨是她自己磨的。|执笔的是编年史家会派来的书记，笔早就削好了。}会上要议的只有一句话，是一位老祭司问出来的：神死了，丧事该怎么办？"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && flag.tan_told && party.tan",
    "text": "阿坦站起来念晨祷，念到第四十句就停下了，坐了回去。帐篷里没有人催他。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && party.garaele",
    "speaker": "加莱尔",
    "text": "我先写上“据收尸队称”。等你们都说完了，我再看这个“据”字要不要划掉。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && flag.roll_told",
    "text": "有位老祭司还记得二十七年前会上念过的那份古卷，里面有银龙的一句话：“这五百年是我替他答的。”他把这一句又念了一遍。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && flag.rite_done",
    "text": "有人问第一场丧事办过了没有。办过了，是在精灵的故土办的，到场的有五个人，没有尸首。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && flag.god_held_gate",
    "text": "有位祭司提起了南门的那一天，说那天城里一个人也没死。说到这里，他就不往下说了。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && (flag.god_judged_council || flag.god_avatar_claimed)",
    "text": "{?flag.god_avatar_claimed:卡斯特洛斯的祭司还管你叫王的化身，只是叫得很小声。|}{?flag.god_judged_council:有人提起二十七年前的那次会，说那次是神自己开的。|}"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && is.god",
    "text": "议到神王的位子空了，满屋子的祭司都转过头看你。有人请你裁决灰元元年的事，可那一年你不在，你答不了。于是他们干脆把话摆到了桌面上，问这个位子你到底要不要。你可以晚些时候再答。"
   },
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && faction == 'heirs'",
    "speaker": "老祭司",
    "text": "谱上写的是长子继位。那谱上没写的事，到底算不算数？"
   },
   {
    "if": "!(flag.southgate_held && !flag.compact_none && world.word >= 4)",
    "text": "会没开成。帐篷才搭了一半，各殿的人吵到半截就散了，长凳上只剩一顶谁落下的帽子。庙门口坐着的只有你和{?party.tan:阿坦|守庙的姑娘}。"
   }
  ],
  "first": [
   {
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4",
    "then": [
     "flag conclave_held",
     {
      "if": "is.god",
      "then": [
       "flag fourth_offered"
      ]
     }
    ]
   }
  ],
  "choices": [
   {
    "text": "回答老祭司：谱上没有的人也算数",
    "tag": "承嗣",
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && faction == 'heirs' && !flag.f_heirs_ans",
    "once": true,
    "effects": [
     "flag f_heirs_ans",
     "rep temples +1"
    ],
    "result": "他点头说这样一来长子的事就好议了。左边长凳上有人咳嗽了一声。"
   },
   {
    "text": "回答老祭司：只认谱上有名的人",
    "tag": "承嗣",
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4 && faction == 'heirs' && !flag.f_heirs_ans",
    "once": true,
    "effects": [
     "flag f_heirs_ans",
     "rep corintar +1"
    ],
    "result": "他看了你很久，问你今天来到底是替谁说话的。你说，是替死了的那一位。"
   },
   {
    "text": "请会议只确认神王死讯，推迟讨论继位",
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4",
    "effects": [
     "rep temples +1"
    ],
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "dis": "flag.f_heirs_ans",
     "mods": [
      {
       "if": "flag.has_vote || is.divine",
       "n": 2,
       "why": "你在会上有一票"
      },
      {
       "if": "item.mural_rubbing >= 1",
       "n": 1,
       "why": "壁画的拓片"
      },
      {
       "if": "item.broken_scepter >= 1",
       "n": 1,
       "why": "断权杖"
      },
      {
       "if": "item.arun_notes >= 1 || item.sash_copy >= 1 || item.shaft_rubbing >= 1 || item.log_copy >= 1",
       "n": 1,
       "why": "笔记和抄本"
      },
      {
       "if": "flag.f_listeners",
       "n": 1,
       "why": "庙外听晨祷的那几个人也来了"
      }
     ]
    },
    "ok": {
     "text": "一直议到天黑，总算记下了一行：“卡斯特洛斯，诸神之王，殁。”至于他的位子由谁来接，今天不议。书记写完这一行，把笔放下了。",
     "effects": [
      "flag f_c_dead"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "会上只肯记一句“据收尸队称”，那个“据”字还写得比别的字都大。",
     "goto": "f_09"
    }
   },
   {
    "text": "提议让科琳凭战功继位",
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4",
    "effects": [
     "rep corintar +1"
    ],
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "flag.has_vote || is.divine",
       "n": 2,
       "why": "你在会上有一票"
      },
      {
       "if": "item.mural_rubbing >= 1",
       "n": 1,
       "why": "壁画的拓片"
      },
      {
       "if": "item.broken_scepter >= 1",
       "n": 1,
       "why": "断权杖"
      },
      {
       "if": "item.arun_notes >= 1 || item.sash_copy >= 1 || item.shaft_rubbing >= 1 || item.log_copy >= 1",
       "n": 1,
       "why": "笔记和抄本"
      },
      {
       "if": "flag.f_listeners",
       "n": 1,
       "why": "庙外听晨祷的那几个人也来了"
      }
     ]
    },
    "ok": {
     "text": "左边长凳上的人站起来一半，右边的人坐着没动。最后记下来的那一行是：“功可继位，待议。”",
     "effects": [
      "world scale +1"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "会上只肯记“据收尸队称”，后面的半句没有记。多米尼克的人拍了拍长凳，又坐下了。",
     "goto": "f_09"
    }
   },
   {
    "text": "提议由长子阿德安继承神位",
    "if": "flag.southgate_held && !flag.compact_none && world.word >= 4",
    "effects": [
     "rep temples +1"
    ],
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "adv": "flag.f_heirs_ans",
     "mods": [
      {
       "if": "flag.has_vote || is.divine",
       "n": 2,
       "why": "你在会上有一票"
      },
      {
       "if": "item.mural_rubbing >= 1",
       "n": 1,
       "why": "壁画的拓片"
      },
      {
       "if": "item.broken_scepter >= 1",
       "n": 1,
       "why": "断权杖"
      },
      {
       "if": "item.arun_notes >= 1 || item.sash_copy >= 1 || item.shaft_rubbing >= 1 || item.log_copy >= 1",
       "n": 1,
       "why": "笔记和抄本"
      },
      {
       "if": "flag.f_listeners",
       "n": 1,
       "why": "庙外听晨祷的那几个人也来了"
      }
     ]
    },
    "ok": {
     "text": "右边的祭司们你看看我、我看看你。最后记下来的那一行是：“长子当摄，待议。”多米尼克没有站起来，只是把手里的册子合上了。",
     "effects": [
      "world scale -1"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "会上只肯记“据收尸队称”。阿德安的祭司说，长子的事得回洛伦特去议。",
     "goto": "f_09"
    }
   },
   {
    "text": "在庙门前稍坐再走",
    "if": "!(flag.southgate_held && !flag.compact_none && world.word >= 4)",
    "effects": [
     {
      "if": "party.tan",
      "then": [
       "approval tan +1"
      ]
     }
    ],
    "result": "{?party.tan:阿坦说他明天照常念那四十句，说完就靠在门框上睡着了。|姑娘说她明天照常念那四十句。}",
    "goto": "f_09"
   }
  ]
 },
 "f_09": {
  "id": "f_09",
  "title": "十一月十一日",
  "art": "ev_orc_with_axe",
  "loc": "下城 · 旧集市旁边的空地",
  "date": "1472年奈拉月11日",
  "text": [
   "二十八年前，科琳和杜坎森倒在这里。如今四周砌起矮墙，咸鱼摊还在老地方，换了摊主，鱼却和当年一样咸。十一日这天，杜坎森的小儿子古尔赞答应来这块空地坐一坐，不带刀。",
   {
    "if": "world.embers <= 3",
    "text": "古尔赞是晌午到的，身边只带了十二个亲卫，谁都没披甲。他只剩一只眼、半条胳膊，肩上搭着灰吻的熊皮。他走到门板桌边坐下时，桌腿吱呀响了一声。"
   },
   {
    "if": "!flag.southgate_held && world.embers >= 8",
    "text": "城是昨天夜里破的。他的人没放火烧城，二十八年前他们也没烧过。古尔赞走在最前面，肩上搭着灰吻的熊皮，拿剩下的那只眼打量着这块空地。你们就站在矮墙边，没人过来管。"
   },
   {
    "if": "world.embers >= 4 && (flag.southgate_held || world.embers < 8)",
    "text": "到了晌午，号角声从南门一路响了进来，古尔赞到了。他只剩一只眼、半条胳膊，肩上搭着灰吻的熊皮，身后竖着{?flag.korgus_son:一面骨旗，杆头上挂的就是他父亲的骨头|嗜血者氏族的旗，一块红布，上面什么也没画}。"
   },
   {
    "speaker": "古尔赞",
    "text": "我父亲就死在那个卖咸鱼的摊子旁边。那年我二十岁，站在三条街外面。他活着的时候，没人敢拿链子拴兽人。他一倒下，就有人敢了。"
   },
   {
    "if": "flag.korgus_rite",
    "text": "他朝空地中间看了一眼，那里什么也没有。他身后的人也都跟着往那里看。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "{?flag.korgus_rite:他父亲的骨头是我磨的，磨了两天。这事他知道。|他父亲的骨头没有磨。这事他也知道。}"
   },
   {
    "if": "flag.road_gurzan",
    "speaker": "古尔赞",
    "text": "我等了你二十七年。"
   },
   {
    "if": "flag.gurzan_owes",
    "text": "他朝车边点点头。你们把他父亲送回去的那份情，他还记着。"
   },
   {
    "if": "flag.gurzan_grudge",
    "text": "他没往车边看。那笔仇他也还记着。"
   },
   {
    "if": "flag.god_named_korgus || flag.god_denied_korgus || flag.god_of_the_tide",
    "text": "{?flag.god_named_korgus:当年你当着众人说过，他父亲是杜坎的儿子。今天他把这句话带来了。|}{?flag.god_denied_korgus:当年你当着众人说过，他父亲不是杜坎的儿子。这话他到今天还记着。|}{?flag.god_of_the_tide:他父亲的那个位子你坐过一次。他想看看你如今还坐不坐。|}"
   },
   {
    "if": "is.god",
    "speaker": "古尔赞",
    "text": "我父亲当年也是刀枪不入的，直到他死的那一天。我今天来，就是想看看你会不会流血。"
   }
  ],
  "first": [
   "quest q_southgate stage 3",
   {
    "if": "origin == 'tide'",
    "then": [
     "quest q_o_tide done"
    ]
   }
  ],
  "choices": [
   {
    "text": "坐到门板桌边，同古尔赞谈判",
    "if": "world.embers <= 3",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.clan_charter",
       "n": 1,
       "why": "盖了帝国印的特许"
      },
      {
       "if": "flag.compact_free",
       "n": 1,
       "why": "城约里有氏族的位子"
      },
      {
       "if": "flag.arosha_at_table",
       "n": 1,
       "why": "阿罗莎坐在桌边"
      }
     ]
    },
    "ok": {
     "text": "你们一直谈到太阳落山。最后他从腰上解下一节断链放在门板上，起身走了。亲卫都在门口等着他，一行人谁也没回头。",
     "effects": [
      "flag gurzan_treaty",
      "world room +1"
     ],
     "goto": "f_10"
    },
    "fail": {
     "text": "他听你说完，摇摇头，起身走了，没有动手。门板上只留下他坐过的一块汗印。",
     "effects": [
      "flag f_gurzan_walked"
     ],
     "goto": "f_10"
    }
   },
   {
    "text": "留在矮墙旁，目送他走向银瀑",
    "if": "!flag.southgate_held && world.embers >= 8",
    "result": "他走到银瀑旁边，从腰上解下一节断链扔了下去，链子很快就沉了。他身后站着几千人，鸦雀无声。",
    "effects": [
     "flag f_chain_thrown"
    ],
    "goto": "f_10"
   },
   {
    "text": "走到古尔赞一边，和氏族并肩作战",
    "tag": "退潮的人",
    "if": "world.embers >= 4 && (flag.southgate_held || world.embers < 8) && (origin == 'tide' || rep.clans >= 4)",
    "effects": [
     "flag sided_gurzan"
    ],
    "combat": {
     "title": "站到另一边",
     "intro": "蓝牙看见你从对面走来，盾牌微微一抬，终于还是没有叫你的名字。",
     "enemies": [
      {
       "id": "marcher_veteran",
       "n": 3,
       "name": "边区老兵"
      },
      {
       "id": "bluetusk"
      }
     ],
     "allies": [
      {
       "id": "gurzan"
      }
     ],
     "xp": 2000,
     "win": {
      "effects": [
       "flag f_sided_won"
      ],
      "goto": "f_10"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "和蓝牙、阿罗莎并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 4 && world.embers < 8 && flag.arosha_at_table && flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      },
      {
       "id": "arosha"
      }
     ],
     "specials": [
      {
       "id": "banner",
       "name": "夺古尔赞阵前的骨旗",
       "desc": "杆头系着的是他父亲的遗骨。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 17,
        "party": true
       },
       "success": {
        "text": "你撞开两个擎旗的，把旗杆从泥里拔出来。杜坎森的骨头在杆头上哗啦一响。对面一整排人都回头看。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "老兵抡起旗杆，底部的铁箍重重撞上你的肩。旗依然举着。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "和蓝牙、阿罗莎并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 4 && world.embers < 8 && flag.arosha_at_table && !flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      },
      {
       "id": "arosha"
      }
     ],
     "specials": [
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子轰然塌了，三筐咸鱼滚满地。冲在前面的几人踩上鱼背，一起摔倒。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "与蓝牙并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 4 && world.embers < 8 && !flag.arosha_at_table && flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      }
     ],
     "specials": [
      {
       "id": "banner",
       "name": "夺古尔赞阵前的骨旗",
       "desc": "杆头系着的是他父亲的遗骨。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 17,
        "party": true
       },
       "success": {
        "text": "你撞开两个擎旗的，把旗杆从泥里拔出来。杜坎森的骨头在杆头上哗啦一响。对面一整排人都回头看。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "擎旗的是个老兵，抡起旗杆，拿下面的铁箍结结实实砸在你肩上。旗没倒。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "与蓝牙并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 4 && world.embers < 8 && !flag.arosha_at_table && !flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 2
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      }
     ],
     "specials": [
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "和蓝牙、阿罗莎并肩迎战古尔赞",
    "if": "!flag.southgate_held && world.embers >= 4 && world.embers < 8 && flag.arosha_at_table && flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      },
      {
       "id": "arosha"
      }
     ],
     "specials": [
      {
       "id": "banner",
       "name": "夺古尔赞阵前的骨旗",
       "desc": "杆头系着的是他父亲的遗骨。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 17,
        "party": true
       },
       "success": {
        "text": "你撞开两个擎旗的，把旗杆从泥里拔出来。杜坎森的骨头在杆头上哗啦一响。对面一整排人都回头看。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "擎旗的是个老兵，抡起旗杆，拿下面的铁箍结结实实砸在你肩上。旗没倒。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "和蓝牙、阿罗莎并肩迎战古尔赞",
    "if": "!flag.southgate_held && world.embers >= 4 && world.embers < 8 && flag.arosha_at_table && !flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      },
      {
       "id": "arosha"
      }
     ],
     "specials": [
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "与蓝牙并肩迎战古尔赞",
    "if": "!flag.southgate_held && world.embers >= 4 && world.embers < 8 && !flag.arosha_at_table && flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      }
     ],
     "specials": [
      {
       "id": "banner",
       "name": "夺古尔赞阵前的骨旗",
       "desc": "杆头系着的是他父亲的遗骨。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 17,
        "party": true
       },
       "success": {
        "text": "你撞开两个擎旗的，把旗杆从泥里拔出来。杜坎森的骨头在杆头上哗啦一响。对面一整排人都回头看。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "擎旗的是个老兵，抡起旗杆，拿下面的铁箍结结实实砸在你肩上。旗没倒。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "与蓝牙并肩迎战古尔赞",
    "if": "!flag.southgate_held && world.embers >= 4 && world.embers < 8 && !flag.arosha_at_table && !flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 3
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      }
     ],
     "specials": [
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "和蓝牙、阿罗莎并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 8 && flag.arosha_at_table && flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      },
      {
       "id": "arosha"
      }
     ],
     "specials": [
      {
       "id": "banner",
       "name": "夺古尔赞阵前的骨旗",
       "desc": "杆头系着的是他父亲的遗骨。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 17,
        "party": true
       },
       "success": {
        "text": "你撞开两个擎旗的，把旗杆从泥里拔出来。杜坎森的骨头在杆头上哗啦一响。对面一整排人都回头看。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "擎旗的是个老兵，抡起旗杆，拿下面的铁箍结结实实砸在你肩上。旗没倒。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "和蓝牙、阿罗莎并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 8 && flag.arosha_at_table && !flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      },
      {
       "id": "arosha"
      }
     ],
     "specials": [
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "与蓝牙并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 8 && !flag.arosha_at_table && flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      }
     ],
     "specials": [
      {
       "id": "banner",
       "name": "夺古尔赞阵前的骨旗",
       "desc": "杆头系着的是他父亲的遗骨。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 17,
        "party": true
       },
       "success": {
        "text": "你撞开两个擎旗的，把旗杆从泥里拔出来。杜坎森的骨头在杆头上哗啦一响。对面一整排人都回头看。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "擎旗的是个老兵，抡起旗杆，拿下面的铁箍结结实实砸在你肩上。旗没倒。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   },
   {
    "text": "与蓝牙并肩迎战古尔赞",
    "if": "flag.southgate_held && world.embers >= 8 && !flag.arosha_at_table && !flag.korgus_son",
    "combat": {
     "title": "第二次卡斯托纳斯之战",
     "noAwe": true,
     "xp": 2500,
     "win": {
      "goto": "f_09b"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag f_gurzan_fled"
      ],
      "goto": "f_10"
     },
     "intro": "号角声从南门传进下城。古尔赞徒步走在第一排，单手提斧。",
     "enemies": [
      {
       "id": "gurzan"
      },
      {
       "id": "tide_veteran",
       "n": 4
      }
     ],
     "allies": [
      {
       "id": "bluetusk"
      }
     ],
     "specials": [
      {
       "id": "stall",
       "name": "掀翻卖咸鱼的摊子，堵住空地的口子",
       "desc": "摊位的底座用石头砌成，上方却只是木棚。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "棚子哗啦一声塌了下来，三筐咸鱼滚了一地。冲在前面的几个一脚踩在鱼上，摔成了一堆。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "摊子的底是石头砌的，比你想的沉得多。棚顶倒是塌了，塌在你自己头上。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "call",
       "name": "朝古尔赞身后的人喊：他父亲的日子过完了",
       "desc": "这些人来纪念杜坎森的忌日，未必肯为古尔赞作战。成功时，所有敌人陷入「恐慌」，持续 1 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 16,
        "mods": [
         {
          "if": "flag.korgus_rite",
          "n": 3,
          "why": "杜坎森磨成了粉，他们都知道"
         },
         {
          "if": "flag.ushka_spoke",
          "n": 2,
          "why": "火边有人说过那句话"
         },
         {
          "if": "flag.gurzan_treaty || flag.moot_defused",
          "n": 1,
          "why": "他们见过谈得拢的时候"
         }
        ]
       },
       "success": {
        "text": "后排有个人放下了斧子。他没走，只是不肯往前了。旁边的人看了他一眼，也跟着停了下来。",
        "applyAll": {
         "cond": "frightened",
         "turns": 1
        }
       },
       "fail": {
        "text": "古尔赞替他们答了。他说今天就是他父亲的日子。话音刚落，号角又响了一遍。"
       }
      }
     ]
    }
   }
  ]
 },
 "f_09b": {
  "id": "f_09b",
  "title": "城门洞",
  "text": [
   "{?flag.arosha_at_table:阿罗莎的伐橡斧|蓝牙的剑}落在了古尔赞的右腕上。他一声没叫，把剩下的那半条胳膊抱在怀里，往城门那边退。他的人围上来，抬起他就走。",
   "洛朗已经守在城门洞里。他是剑之誓约的头领，能把亡魂收进罐子里审问。他腰间挂着一排罐子，手里另托着一只空罐，封口的蜡还是软的。",
   {
    "speaker": "洛朗",
    "text": "你们抬尸首，我问尸首话，说起来我们算是同行，只不过我比你们多走了一步。今天这一位，我想收他的魂。"
   },
   {
    "if": "is.god",
    "speaker": "洛朗",
    "text": "同行，我把最大的那只罐子也擦了一遍。那是给你留的。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡的手已经按在了锤子上。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "他的魂要是进了罐子，归尘礼就做不成了。"
   }
  ],
  "choices": [
   {
    "text": "让洛朗收走古尔赞的魂",
    "effects": [
     "flag gurzan_soul_taken",
     "world unburied +1",
     {
      "if": "party.ushka",
      "then": [
       "companion -ushka",
       "flag ushka_left",
       "flag f_ushka_chased"
      ]
     }
    ],
    "result": [
     "洛朗念了一句很短的话。古尔赞在担架上抽了一下就不动了，罐口的蜡自己合上了。",
     {
      "if": "flag.f_ushka_chased",
      "text": "乌什卡一言不发，跟在洛朗后面出了城门。此后，你们再也没在车边见过她。"
     }
    ],
    "goto": "f_10"
   },
   {
    "text": "守在担架前赶走洛朗",
    "check": {
     "skill": "intimidation",
     "dc": 18,
     "party": true,
     "mods": [
      {
       "if": "rep.corintar >= 3",
       "n": 2,
       "why": "科琳塔尔的人站在你后面"
      },
      {
       "if": "party.ushka",
       "n": 1,
       "why": "乌什卡的锤子"
      }
     ]
    },
    "ok": {
     "text": "洛朗看了你好一会儿，把空罐子挂回了腰上。他说同行之间不该动刀子，等下次吧。",
     "effects": [
      "flag laurens_stopped"
     ],
     "goto": "f_09c"
    },
    "fail": {
     "text": "他笑了笑，把罐子换到左手，右手拔出了剑。",
     "combat": {
      "title": "城门洞",
      "intro": "洛朗把空罐挂回腰际，抽出长剑。剑身和那只罐子一样，擦得一尘不染。",
      "enemies": [
       {
        "id": "laurens"
       }
      ],
      "noAwe": true,
      "xp": 1500,
      "specials": [
       {
        "id": "jars",
        "name": "砸洛朗腰上那一排罐子",
        "desc": "罐口全用蜡封住，每只里面都关着一个魂。成功时，所有敌人受到 3d8 点力场伤害，并陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d8 点心灵伤害。",
        "check": {
         "skill": "sleight",
         "alt": [
          "athletics"
         ],
         "dc": 16,
         "party": true
        },
        "success": {
         "text": "两只罐子摔碎在城门洞的石板上，里面的魂往四面散开了。洛朗低头看了一眼，第一次把剑握紧了。",
         "dmgAll": "3d8",
         "type": "force",
         "applyAll": {
          "cond": "dazed",
          "turns": 1
         }
        },
        "fail": {
         "text": "你的手刚碰到罐子，他就把罐口转过来对准了你。里面的魂冲你喊了一句什么，你没听清，只觉得耳朵里嗡嗡响了好一阵。",
         "selfDmg": "2d8",
         "type": "psychic"
        }
       }
      ],
      "win": {
       "effects": [
        "flag laurens_stopped"
       ],
       "goto": "f_09c"
      },
      "lose": {
       "effects": [
        "hp 1",
        "flag gurzan_soul_taken",
        "world unburied +1",
        {
         "if": "party.ushka",
         "then": [
          "companion -ushka",
          "flag ushka_left",
          "flag f_ushka_chased"
         ]
        }
       ],
       "goto": "f_10"
      }
     }
    }
   },
   {
    "text": "拔刀拦住洛朗",
    "combat": {
     "title": "城门洞",
     "intro": "洛朗把空罐挂回腰际，抽出长剑。剑身和那只罐子一样，擦得一尘不染。",
     "enemies": [
      {
       "id": "laurens"
      }
     ],
     "noAwe": true,
     "xp": 1500,
     "specials": [
      {
       "id": "jars",
       "name": "砸洛朗腰上那一排罐子",
       "desc": "罐口全用蜡封住，每只里面都关着一个魂。成功时，所有敌人受到 3d8 点力场伤害，并陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d8 点心灵伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 16,
        "party": true
       },
       "success": {
        "text": "两只罐子摔碎在城门洞的石板上，里面的魂往四面散开了。洛朗低头看了一眼，第一次把剑握紧了。",
        "dmgAll": "3d8",
        "type": "force",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你的手刚碰到罐子，他就把罐口转过来对准了你。里面的魂冲你喊了一句什么，你没听清，耳朵里嗡嗡响了半天。",
        "selfDmg": "2d8",
        "type": "psychic"
       }
      }
     ],
     "win": {
      "effects": [
       "flag laurens_stopped"
      ],
      "goto": "f_09c"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag gurzan_soul_taken",
       "world unburied +1",
       {
        "if": "party.ushka",
        "then": [
         "companion -ushka",
         "flag ushka_left",
         "flag f_ushka_chased"
        ]
       }
      ],
      "goto": "f_10"
     }
    }
   }
  ]
 },
 "f_09c": {
  "id": "f_09c",
  "title": "归谁",
  "text": [
   "古尔赞没能走出城门。血虽止住，他还是在日落前断了气。此刻，他的魂还留在自己身上。",
   "马布格从人群中挤了出来，站到担架旁边。",
   {
    "speaker": "马布格",
    "text": "长者郡有他杀的那头熊。他该回那里去。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "他要是回去了，就会有人拿他的骨头立旗，像他们拿他父亲的骨头立旗一样。给我两天，等我磨完了，谁也用不上。"
   }
  ],
  "choices": [
   {
    "text": "请乌什卡为古尔赞主持归尘礼",
    "if": "party.ushka",
    "effects": [
     "flag gurzan_buried",
     "var rites +1",
     "log 古尔赞·熊心。归尘礼，磨了两天。",
     "world unburied -1",
     "world embers -1",
     "approval ushka +1"
    ],
    "result": "她在空地旁边生起了火，把刀和锤摆在两边。两天以后，她把骨粉装进一只陶罐交给马布格，让他带回去撒在长者郡的蘑菇地里。",
    "goto": "f_10"
   },
   {
    "text": "亲自为古尔赞行归尘礼",
    "if": "!party.ushka",
    "effects": [
     "flag gurzan_buried",
     "var rites +1",
     "log 古尔赞·熊心。归尘礼，磨了两天。",
     "world unburied -1",
     "world embers -1"
    ],
    "result": "你照着乌什卡当年教的法子来，先拆，再烧，再磨。你手艺不精，足足磨了三天。马布格一直在旁边看着，最后伸手把陶罐接了过去。",
    "goto": "f_10"
   },
   {
    "text": "委托马布格送他回长者郡",
    "effects": [
     "flag gurzan_returned",
     "rep clans +2",
     {
      "if": "party.ushka",
      "then": [
       "approval ushka -1"
      ]
     }
    ],
    "result": "马布格让七个人轮流抬。出城门时，他们把灰吻的熊皮盖在了他身上。",
    "goto": "f_10"
   }
  ]
 },
 "f_10": {
  "id": "f_10",
  "title": "最后一件事",
  "loc": "下城 · 门板桌",
  "date": "1472年奈拉月11日天黑以后",
  "text": [
   "门板桌边只剩下你们几个，还有一盏烧兽油的灯，一股膻味。门板上的刀痕二十八年没人刨过，最深的那一道是停战那天晚上砍的，是谁砍的早就没人记得了。",
   {
    "if": "flag.f_gurzan_fled",
    "text": "你们是躺在自家的板车上，让骡子拉回来的。古尔赞守不住这座城，带着他的死人往南退走了。"
   },
   {
    "if": "!flag.southgate_held && world.embers >= 8",
    "text": "城如今是古尔赞的了。银瀑那边有人在点火，火堆旁边有人在唱歌，唱的是兽人话，调子很慢。"
   },
   {
    "if": "flag.sided_gurzan",
    "text": "你身上的血有一半是边区兵的。蓝牙最后那一下没砍下来。他走时，獠牙上那截蓝布沾了土。"
   },
   {
    "if": "flag.gurzan_treaty",
    "text": "古尔赞留下的那节断链还在门板上，没人收走。"
   },
   "那道军令上写着“收殓此役无人认领之死者，事毕为止”。二十八年了，从来没人来说过一声“事毕”。今晚该由你们自己来了结。",
   {
    "if": "flag.fourth_offered",
    "text": "万神道那顶帐篷里，神王的位子还空着。他们都在等你回话。"
   },
   {
    "if": "flag.blackbranch_deal",
    "text": "车帮上落着一只乌鸦，是从林子那边一路跟过来的，一直盯着你看。你们答应过黑枝亲王，要把壁画上的事一字不改地讲出去。"
   }
  ],
  "first": [
   "quest q_southgate done",
   "quest q_cart done"
  ],
  "choices": [
   {
    "text": "把你的断链也投入银瀑",
    "if": "!flag.southgate_held && world.embers >= 8",
    "result": [
     "{?item.chain_link >= 1:你也把你那节断链扔进了银瀑，它沉得比他那节慢。|你身上没有链子，就把拴板车的铁链解下一截，扔了下去。}",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_dookansday"
   },
   {
    "text": "夺回这座城",
    "tag": "神",
    "if": "is.god && !flag.southgate_held && world.embers >= 8",
    "effects": [
     "flag god_held_city",
     "flag southgate_held",
     "world room =0",
     "rep clans -5"
    ],
    "result": [
     "你一个人走到了银瀑旁边。等到天亮，城又是你们的了。氏族退出城去时，有人回过头冲你喊了一个名字。从那以后，他们就这么叫你。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_standing"
   },
   {
    "text": "为神王送葬，请阿坦念完第四十一句",
    "if": "(flag.southgate_held || world.embers < 8)",
    "req": "world.word >= 7 && world.peace >= 5 && world.scale >= -2 && world.scale <= 2 && flag.conclave_held && party.tan && flag.tan_told && (flag.wall_rubbed || flag.staff_home)",
    "reqText": "需要神王死讯传得够远，帝国和平还在，神位归属不偏向任何一方。还需要大帐会议开成，阿坦在场并开了口，你手里有壁画拓片或者那根断杖",
    "result": [
     "阿坦接过权杖头掂了掂，说明天一早就念。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_funeral"
   },
   {
    "text": "支持多米尼克，拥戴科琳继位",
    "if": "(flag.southgate_held || world.embers < 8) && world.scale >= 3 && world.word >= 6 && rep.corintar >= 3",
    "result": [
     "多米尼克就在矮墙外面等着，胳膊下面夹着册子。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_sword"
   },
   {
    "text": "把证据交主祭，让神殿闭门决定",
    "if": "(flag.southgate_held || world.embers < 8) && world.scale <= -3 && world.peace >= 6 && rep.temples >= 3 && flag.temples_first",
    "result": [
     "主祭们派来的车就停在巷口，车门上没有纹章。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_eldest"
   },
   {
    "text": "上试炼山为她作证，让城市迎来新主",
    "if": "(flag.claimant_kalista || flag.claimant_arosha) && flag.southgate_held",
    "result": [
     "{?flag.claimant_kalista:卡莉斯塔|阿罗莎}让人捎来了话，说明天在誓石，还是请你作见证。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_mantle"
   },
   {
    "text": "站在氏族一方，将断链投入银瀑",
    "if": "(flag.southgate_held || world.embers < 8) && flag.sided_gurzan",
    "result": [
     "{?item.chain_link >= 1:你从怀里摸出了那节断链。|你从板车上解下了一截拴车的铁链。}银瀑就在下城的那一头哗哗地响。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_dookansday"
   },
   {
    "text": "入大帐面对空缺的神位",
    "tag": "神",
    "if": "(flag.southgate_held || world.embers < 8) && is.god && flag.conclave_held",
    "goto": "f_10b"
   },
   {
    "text": "按手印，约定对壁画保密{?flag.blackbranch_deal:（有人记着你们这桩约定）|}",
    "if": "(flag.southgate_held || world.embers < 8)",
    "result": [
     "你把手掌按进灯油里，再按到门板上。",
     {
      "if": "party.ushka",
      "text": "乌什卡拿起锤子，在裤腿上蹭了两下，又插回了腰里。"
     },
     {
      "if": "party.tan",
      "text": "阿坦把那截权杖头放在门板上，手还按在上面，一直没松开。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西摸出一张欠条，压在灯座下面，压得平平整整。"
     },
     {
      "if": "party.garaele",
      "text": "加莱尔翻开册子，写下了日期，下面空出一行。"
     }
    ],
    "goto": "end_standing"
   }
  ]
 },
 "f_10b": {
  "id": "f_10b",
  "title": "那把空椅子",
  "loc": "万神道 · 大帐",
  "text": [
   "争了多日的三派第一次同时静下来。大帐里一百多人都看着你。多米尼克、各殿主祭和教团老妇在席，阿坦站在门边。",
   "帐篷正中摆着一把椅子，是从北城不知哪户世家的厅堂里搬来的，椅背上的漆掉了一块。它代表神王空出来的位子。这个位子该凭血统坐，凭功劳坐，还是干脆空着，这三样他们都议过了。可眼前站着一位活的神，这是第四个人选。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "王在哪里，我已经问过你了，你说不知道。那我只问一句：晨祷的词要不要改？"
   },
   {
    "if": "!party.tan",
    "text": "守庙的姑娘挤在门口，手里还攥着那块抹布。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "你要是坐上去了，将来谁来给你办丧事？"
   }
  ],
  "choices": [
   {
    "text": "坐上空椅",
    "effects": [
     "flag fourth_sat"
    ],
    "result": "你坐了下去，椅子腿在石板上吱地响了一声。蓝牙第一个站起来，从你面前走过去，出了帐篷。",
    "goto": "end_fourth"
   },
   {
    "text": "说明你无权让出神位，也无权就座",
    "effects": [
     "flag fourth_declined"
    ],
    "result": "你说完就往门口走。多米尼克在你身后站起身，把椅子都带倒了。",
    "goto": "end_fourth"
   },
   {
    "text": "告诉他们，你来这里只为收殓死者",
    "effects": [
     "flag fourth_undertaker",
     "var rites +1",
     "log 卡斯特洛斯，诸神之王。丧事是收尸队接的。"
    ],
    "result": "你碰都没碰那把椅子，只问主祭们丧事定在哪一天，要几个人抬，抬的是什么。",
    "goto": "end_fourth"
   }
  ]
 },
 "end_funeral": {
  "id": "end_funeral",
  "title": "送神",
  "art": "load_17",
  "loc": "万神道 · 没屋顶的神殿",
  "date": "1472年奈拉月12日",
  "text": [
   "奈拉月十二日清晨，万神道上那座没屋顶的庙前来了两百多人，来送诸神之王卡斯特洛斯。其中一半是当兵的，站得不成队列，盾牌就靠在腿上。多米尼克的人站在左边，阿德安的祭司站在右边，中间空出了一条路。",
   "阿坦念起了晨祷。念到第四十句他停了一下。下面的第四十一句是“愿银龙再临”，这一句他念得很慢，可到底念完了。随后他把{?flag.staff_home:那根断杖横放在空台子上，又把自己那截权杖头放在旁边|那截游行用的权杖头放在了空台子上}。",
   "给神办丧事到底该不该哭，谁也说不准。后来是一个卖烤饼的先哭了出来，哭完了又接着卖他的饼。",
   {
    "if": "party.ushka",
    "text": "乌什卡问你要不要磨骨头。你说没有骨头可磨，她就把锤子收了回去。"
   },
   {
    "if": "!party.ushka",
    "text": "守庙的姑娘问你要不要立块碑。你说没地方立，她就把抹布叠了三折，放在台子旁边。"
   },
   "没有人来谢你们。"
  ],
  "first": [
   "var rites +1",
   "log 卡斯特洛斯，诸神之王。万神道，没有尸首。"
  ],
  "ending": "funeral"
 },
 "end_sword": {
  "id": "end_sword",
  "title": "剑上天",
  "art": "load_8",
  "loc": "下城 · 那块空地",
  "date": "1472年奈拉月12日",
  "text": [
   "多米尼克站在科琳当年倒下的那块地上，脚边堆着二十八年来的干花。他用的是念判词的腔调，一条一条地往下念：天位无主，科琳以功继之。{?flag.prophecy_told:人群里有人喊起了那页预言，他就停下来，等那人喊完了才接着念。|}",
   "{?flag.staff_to_dominic:那根断杖横在他怀里。他一次也没拿来拄。|}{?flag.told_dominic:念到一半，他朝你看了一眼。阿伦蒂尔的壁画上没有科琳，这话当初是你告诉他的。|}蓝牙站在人群最外面，没有跪，也没有走。",
   {
    "if": "party.tan",
    "text": "阿坦把万神道上那座庙的钥匙交给了多米尼克的人，自己搬到了下城，在这块空地旁边租了一间漏雨的屋子。"
   },
   "老布兰多克领唱愚足写的歌。他五十岁开始做祭司，如今快八十，声音还很亮。第三段他唱错了一句，大家跟着唱过去，谁也没打断他。"
  ],
  "ending": "sword"
 },
 "end_eldest": {
  "id": "end_eldest",
  "title": "长子",
  "art": "ev_adeanic_war",
  "loc": "万神道 · 一间关着门的偏殿",
  "date": "1472年奈拉月至1473年花始月",
  "text": [
   "你们把东西都交出去，{?item.mural_rubbing >= 1:有拓片，|}{?flag.staff_to_temples:断杖早就进了库房，|}还有你们几人的证词。主祭们关起门来议了一整个冬天，偏殿里的炭盆一天要换三次，门一次也没开过。",
   "开春，各殿同时贴出盖有七方印的告示：“王倦勤，长子摄事。”公告只说神王倦于理事，由长子阿德安代管。没人告诉信众，神王已死。",
   {
    "if": "party.tan",
    "text": "阿坦成了万神道上辈分最老的卡斯特洛斯祭司。新来的小祭司不知道该怎么称呼他，有叫师伯的，也有叫老爷子的，他一概答应。"
   },
   "科琳塔尔的人来过一次，一言不发，摔了门就走。门框上的灰震了下来，落在门槛边的那张告示上，正好盖住了最后那方印。"
  ],
  "ending": "eldest"
 },
 "end_standing": {
  "id": "end_standing",
  "title": "军令未撤",
  "loc": "下城 · 门板桌",
  "date": "1472年奈拉月12日",
  "text": [
   "天还没亮，{?partysize >= 4:你们几个|剩下的这几个}就在门板上按了手印，一个挨着一个，都是拿灯油按的，黑乎乎的。按完以后，各人收拾各人的铺盖去了。",
   {
    "if": "flag.wall_sealed && world.word <= 2",
    "text": "壁画上的事谁也没往外说。那扇门是你们从外面砌死的，后来的人要是想去看，就得自己坐船去了。"
   },
   {
    "if": "world.word >= 3 && world.word <= 6",
    "text": "话到底还是漏出去了一些，漏得不多。神殿区的酒馆里有人在传，可连传话的人自己都不大相信。"
   },
   {
    "if": "world.word >= 7",
    "text": "话早就传开了，满大街都在说。只是你们几个既然按了手印，往后就不再提了。"
   },
   {
    "if": "flag.god_held_city",
    "text": "城是你拿回来的。氏族退出城门的时候喊的那个名字，就是你的名字。"
   },
   "万神道的庙门上仍钉着收尸军令。没人来撤令，你们也把它留在了原处。",
   {
    "if": "flag.tan_silent && party.tan",
    "text": "大家约好了不说，阿坦是第一个按手印的，按得很重。"
   },
   "第二天一早，{?party.tan:阿坦|守庙的姑娘}照常做晨祷，念到第四十句就停住了。"
  ],
  "first": [
   {
    "if": "flag.blackbranch_deal && world.word < 6",
    "then": [
     "world word =6"
    ]
   }
  ],
  "ending": "standing"
 },
 "end_mantle": {
  "id": "end_mantle",
  "title": "卡斯坦的披风",
  "loc": "试炼山 · 誓石",
  "date": "1472年奈拉月12日",
  "text": [
   "{?flag.claimant_kalista:卡莉斯塔|阿罗莎}又上了一次山。这次是大白天，全城的人都聚在山脚下。她冲着北要塞喊了一嗓子，要塞里的人应了，应得比那天夜里还要齐。",
   "誓词念到“并永说真话”那一句，她停了下来，当着山下所有人的面，把阿伦蒂尔壁画上的事从头到尾说了一遍：权杖，断了的胳膊，银披风，那团火，还有那两行字，一样也没落下。说完了，她才接着往下念。",
   {
    "if": "flag.claimant_kalista",
    "text": "人群里，卡莱昂拄着拐杖问旁边的人，爪子和尾巴这次该长在谁身上了。"
   },
   {
    "if": "flag.claimant_arosha",
    "text": "山脚下，有几个在血腐阶梯流过血的边区兵不肯认一个兽人当主人，卷起铺盖往西走了。其中一个走出去十几步，又折回来把盾靠在誓石下面，这才走了。"
   }
  ],
  "first": [
   "world word =10"
  ],
  "ending": "mantle"
 },
 "end_dookansday": {
  "id": "end_dookansday",
  "title": "杜坎之日",
  "art": "ev_orc_with_axe",
  "loc": "下城 · 银瀑边",
  "date": "1472年奈拉月11日夜",
  "text": [
   "奈拉月十一日夜，氏族的火堆从南城点到下城，没有一间屋子遭殃。二十八年前，这就是他们第一座舍不得烧的城。今夜仍是。",
   "{?flag.gurzan_soul_taken || flag.gurzan_buried || flag.gurzan_returned:古尔赞没能活到这天，是他的人替他把断链扔进了银瀑。|古尔赞站在银瀑旁边，把断链扔了下去。下城人管银瀑叫粪瀑，链子沉下去时，连水花都没溅起多少。}",
   {
    "if": "flag.dookanil_told && world.word >= 5",
    "text": "火堆旁边传着一句新话：造我们的那位，杀了他们的王。"
   },
   {
    "if": "flag.korgus_son",
    "text": "空地正中立着他父亲的那副骨头，拿铁丝一道一道缠着。"
   },
   {
    "if": "flag.korgus_rite",
    "text": "空地正中什么也没有。古尔赞的人往那里看了一眼，又回头看了你一眼。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西天还没黑就带着地下通道里的地精走了，临走时把账本塞给了你，说规矩第一条是活着。"
   },
   "第二天，西边来了信使，说帝国总算出兵了。1424 年兽人第一次打过来时，他们可没来。"
  ],
  "ending": "dookansday"
 },
 "end_fourth": {
  "id": "end_fourth",
  "title": "第四个人选",
  "loc": "万神道 · 大帐",
  "date": "1472年奈拉月",
  "text": [
   {
    "if": "flag.fourth_sat",
    "text": "你在那把掉了漆的椅子上坐了一整个冬天。各殿的主祭轮流来回话，回完了都是倒退着出去的。多米尼克来过三次，每次都问你跟科琳到底是什么关系。你怎么答的，他每次都记下来。"
   },
   {
    "if": "flag.fourth_sat",
    "text": "{?party.tan:阿坦问你晨祷的词要不要改，你告诉了他。|守庙的姑娘问你晨祷的词要不要改，你告诉了她。}第二天一早，就有人在椅子下面念起了新的晨祷。"
   },
   {
    "if": "flag.fourth_declined",
    "text": "你出了帐篷。多米尼克追了你整整三条街，问你凭什么。你明明坐得了那个位子却不肯坐，往后各派为它打起来，死的那些人该算在谁头上？你没有回答。他站在第三条街的路口，把这句话记在了册子上。"
   },
   {
    "if": "flag.fourth_undertaker",
    "text": "丧事定在了开春。抬的是一口杉木的空棺，由你们几个来抬，前后各两个人。{?party.ushka:乌什卡说这真是浪费，一个不会死的，倒学了一身埋人的手艺。|守庙的姑娘跟在棺材后面，跟了一路。}"
   },
   {
    "if": "!flag.fourth_sat && !flag.fourth_declined && !flag.fourth_undertaker",
    "text": "你站在那把空椅子前面，没坐下，也没走开。帐子里的人就这么等了一夜。"
   },
   "军令仍在庙门上。四颗钉子周围，铁锈的颜色又深了一层。"
  ],
  "ending": "fourth"
 }
};
