// s1820 / finale.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "f_01": {
  "id": "f_01",
  "title": "音叉",
  "chapter": "终章 · 敲门",
  "art": "load_2",
  "loc": "西尔·伯肯之地外海 · 寰宇之根上方",
  "text": [
   "十五年前的今天，阿尔瓦在这片海上敲了一下桅杆。今天你们的船停在同一个地方：托拉普里亚卡港往南几里，海床在船底下塌下去，量不到底。诺罗·数浪蹲在船头，把一截打了结的绳子放下去。绳子直直地走，走完了，他又接上一截。",
   {
    "if": "flag.noro_warned",
    "speaker": "诺罗",
    "text": "上回我话说一半你就懂了。这回我说全：它张嘴以前，海先平。平了，就抓住东西。"
   },
   {
    "if": "!flag.noro_warned",
    "speaker": "诺罗",
    "text": "我爷爷绕着这儿走，我爹也绕着走。到我这辈，收了钱往里开。你们坎诺人管这个叫进步。"
   },
   {
    "if": "flag.jar_asked",
    "text": "别摇自己从罐子里钻出来，飞上桅顶，扇了三下翅膀。那个音出来了。十五年前在史家会的讲堂里，她纠正标签的时候也是这个调门。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "你把罐子贴在桅杆上。里头那位一个字没说，翅膀自己在响，响得很准。"
   },
   {
    "if": "(flag.freq_treaty || flag.freq_bought || flag.freq_stolen) && !flag.jar_asked && !flag.jar_used_unasked",
    "text": "音叉从匣子里取出来，冰凉，拿手焐不热。叉柄上刻着贾赫港金库的编号。你朝桅杆敲了一下。"
   },
   {
    "if": "flag.jar_sold",
    "text": "布西拉尔的领航艇走在前头，艇上的人替你们敲。你们船上那只罐子已经不在了，埃塔的账上那一栏写着“已交付”。"
   },
   {
    "if": "flag.spire_tuned",
    "text": "往东半里，海面上立着一道水，不倒，也不流。那是卡尔希尔调过音的尖碑在应声。走那边也行。"
   },
   {
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned)",
    "text": "船上没有音叉，没有罐子，也没有调过音的石头。领航艇倒是有，布西拉尔的，船头挂着价牌：五百金冠，现付。"
   },
   "海平了，平得照得见桅杆上的铆钉。接着船底下一空，整条船往左一歪，水在四周竖起来，竖成一口井。",
   {
    "if": "origin == 'karshyr'",
    "text": "上回你看这个漩涡，脚底下是托拉普里亚卡码头的条石，手里拎着一筐别人的草药。这回你在它嘴里。"
   },
   {
    "if": "is.god",
    "text": "漩涡还没张开，海先朝你这边低下去一截。诺罗把绳子收回来，看了你一眼，挪到桅杆另一边去了。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）十一个月的饷还没补。我要是掉下去，那笔账归你。"
   }
  ],
  "first": [
   "world tears -1",
   "world doors +1",
   "date 1835年卡斯坦月1日",
   "quest q_knock start"
  ],
  "choices": [
   {
    "text": "把船贴着漩涡壁往下放",
    "if": "flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned",
    "check": {
     "skill": "athletics",
     "alt": [
      "survival"
     ],
     "dc": 16,
     "party": true,
     "adv": "is.sailor",
     "mods": [
      {
       "if": "flag.noro_warned",
       "n": 2,
       "why": "诺罗那句话你听全了"
      },
      {
       "if": "flag.alvar_pilot",
       "n": 1,
       "why": "阿尔瓦下去过一回"
      }
     ]
    },
    "ok": {
     "text": "帆收了一半，舵打死。船顺着水墙转了三圈，第四圈底下亮了。诺罗松开缆绳，手心勒出一道白印。",
     "effects": [
      "xp 300"
     ],
     "goto": "f_02"
    },
    "fail": {
     "text": "第二圈上一道浪拍过来，舢板的缆断了，舢板先你们一步下去，再没见着。你撞在绞盘上，嘴里一股铁味。",
     "effects": [
      "hp -10",
      "flag fx_boat_lost"
     ],
     "goto": "f_02"
    }
   },
   {
    "text": "改走尖碑立起来的那道水",
    "if": "flag.spire_tuned",
    "check": {
     "skill": "nature",
     "alt": [
      "arcana"
     ],
     "dc": 15,
     "party": true,
     "adv": "origin == 'karshyr'",
     "mods": [
      {
       "if": "is.lizardfolk",
       "n": 2,
       "why": "你看得见那道水里的两种颜色"
      }
     ]
    },
    "ok": {
     "text": "船头一碰那道水，水往两边让，没有浪，也没有声。帆还鼓着，船已经在另一边了。",
     "effects": [
      "rep south +1",
      "xp 300"
     ],
     "goto": "f_02"
    },
    "fail": {
     "text": "水认得尖碑，不认得你们的舵。船在里头横了一下，左舷的栏杆被绞成了麻花。",
     "effects": [
      "rep south +1",
      "hp -6"
     ],
     "goto": "f_02"
    }
   },
   {
    "text": "雇布西拉尔的领航艇",
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned)",
    "req": "gold >= 500",
    "reqText": "要 500 金冠",
    "cost": {
     "gold": 500
    },
    "result": "领航艇的人收了钱，数了两遍，开了收据，替你们敲了那一下。",
    "goto": "f_02"
   },
   {
    "text": "打借据，先欠着",
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned) && gold < 500",
    "effects": [
     "rep charter -1"
    ],
    "result": "领航员看了看公司的借据，又看了看你，在借据背面添了一行利息，九分。",
    "goto": "f_02"
   },
   {
    "text": "不用音叉，从船舷上迈下去",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag doors_flung",
     "world doors +3",
     "rep south -1",
     "rep charter +1",
     "var cult +1"
    ],
    "result": "水在你脚底下是硬的。漩涡自己张开了，张开以后再没合上。船跟着你下去，一直等在海峡口的三条船也跟着下去了，一条挂卡拉桑尼的旗，两条的旗你不认得。诺罗在船尾数了数，骂了一句佐赫比迪话。",
    "goto": "f_02"
   }
  ]
 },
 "f_02": {
  "id": "f_02",
  "title": "把魔法当天气的海",
  "loc": "妖精界 · 一片没有岸的海",
  "text": [
   "出来是白天。没有太阳，天是亮的。海平得发黑，四面看不见岸。船底下有一条颜色浅一点的水带，诺罗管它叫“径”，船得在上头走。偏出去一步，外头就过去一年。",
   "这儿的魔法是天气。起风的时候，厨子划一根火柴，灶膛里腾起一人高的火；没风的时候，{?is.caster:你念完一整段咒|船上的法师念完一整段咒}，指尖上什么也没有。空气有股味儿，青苹果刚切开那种，吸多了舌头发麻。",
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "text": "罐子里起了雾。别摇浑身发亮，亮得甲板上的人都眯着眼看她。"
   },
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "speaker": "别摇",
    "text": "看什么看。这才叫空气。你们那边的是人家喘剩下的。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "罐子里亮着，亮得很足。别摇背对着你，一句话也没有。"
   },
   {
    "if": "flag.jar_sold",
    "text": "甲板上原先放罐子的地方，木头上留着一圈浅色的印子。"
   },
   {
    "if": "flag.doors_flung",
    "text": "锚地那头多出两面旗，是跟着你下来的船。人家已经在放小艇了。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "今天几号。"
   },
   {
    "if": "!flag.etta_left",
    "text": "没人答得上来。埃塔在账本页眉上写了“日期不详”，写完盯着这四个字看了半天。从 1744 年起，她头一回写这个。"
   },
   {
    "if": "is.god",
    "text": "风跟着你走。你站到哪边，哪边的帆就鼓。水手们开始往你脚边放东西：一枚铜扣子，半块饼。"
   }
  ],
  "first": [
   "codex c_feyrealm",
   "codex c_aerated"
  ],
  "shop": {
   "name": "事务长",
   "blurb": "管船上的药和酒，账记得比埃塔还细，赊账不收。",
   "stock": [
    "healing_potion",
    "greater_healing_potion",
    "superior_healing_potion",
    "scroll_mass_healing",
    "haste_potion",
    "heroism_draught",
    "antidote",
    "bandage"
   ],
   "markup": 1.2
  },
  "choices": [
   {
    "text": "替诺罗盯着径",
    "if": "!flag.fx_path_held",
    "once": true,
    "check": {
     "skill": "survival",
     "alt": [
      "arcana"
     ],
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.pilots_paid",
       "n": 2,
       "why": "诺罗的人认得这条水"
      }
     ]
    },
    "ok": {
     "text": "你们盯了一天一夜，盯得眼睛发酸。船一回也没偏。",
     "effects": [
      "flag fx_path_held",
      "xp 200"
     ]
    },
    "fail": {
     "text": "后半夜起了一阵风，船头往外让了半步，马上又拨了回来。管缆的老水手第二天早上起来，胡子白了一半。他摸着下巴问今年是哪年，没人答得上。",
     "effects": [
      "flag fx_sailor_aged",
      "hp -4"
     ]
    }
   },
   {
    "text": "替诺罗看径边上的颜色",
    "tag": "蜥蜴人",
    "if": "is.lizardfolk && !flag.fx_path_held",
    "once": true,
    "effects": [
     "flag fx_path_held",
     "rep south +1"
    ],
    "result": "径边上有两种颜色，坎诺人眼里都是一样的绿。你指给诺罗看，他拿炭笔在船舷上描了两道。{?flag.jar_sold:|罐子里那位说，“勿摇”这个叫法她记下了，还没跟你算。}"
   },
   {
    "text": "陪吉列姆在船头站一会儿",
    "if": "party.guilhem",
    "once": true,
    "effects": [
     "approval guilhem +1"
    ],
    "result": "他的头发全白了，站在风里很显眼。“气态的晶体就是这个。理论上。”他又吸了一口，“实际上我正在喘它。大夫要是知道，得把我的咖啡票也收回去。”"
   },
   {
    "text": "问布拉在擦什么",
    "if": "party.bura",
    "once": true,
    "effects": [
     "approval bura +1"
    ],
    "result": "她在擦枪。枪在这儿打不响，她试过，火药受潮受得很怪。“（铰链咔的一声。）擦着。科琳不挑地方。”"
   },
   {
    "text": "问礼拜三胸口为什么在响",
    "if": "party.middlesday",
    "once": true,
    "effects": [
     "approval middlesday +1"
    ],
    "result": "“（不确定。）芯核在吃这儿的空气。（陈述。）我比平常快了百分之四。（担心。）我不知道该不该停。”它把手按在胸口上，按了一会儿，没停。"
   },
   {
    "text": "看娜尔雯带的海图",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": "热忱派两回探险的海图，她抄的是第二回的。“上回有人照这张图走，是 1712 年。回去的人说门是锁着的。”她把眼镜往上推了推，“我想看看锁是什么样的。”"
   },
   {
    "text": "问别摇这片海上有什么规矩",
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "once": true,
    "effects": [
     "flag fx_asked_rules"
    ],
    "result": "她数了三条：别跟人道谢；别报真名；答应了的事，回头别改口。“第三条你们最不行。”"
   },
   {
    "text": "跟埃塔对一对账",
    "if": "!flag.etta_left",
    "once": true,
    "effects": [
     "gold +150"
    ],
    "result": "埃塔翻到 1789 年那一页，里头夹着一张单子：“出海不归，备用”。四十六年没动过。她撕下来交给你，说这一趟算出海。"
   },
   {
    "text": "在舱里睡一整觉",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "你睡了一觉。醒来天还是那么亮，怀表停在三点十分，上了弦也不走。"
   },
   {
    "text": "起锚，顺着径往前走",
    "goto": "f_03"
   }
  ]
 },
 "f_03": {
  "id": "f_03",
  "title": "抽气船",
  "art": "ev_damestear_core",
  "loc": "妖精界的海 · 卡拉桑尼的锚地",
  "text": [
   "走了三天，前头起了烟。三条铁壳船下着锚，船身漆着卡拉桑尼的灰蓝两色。每条船顶上竖着一根管子，比桅杆还高，直通到天上去。泵在响，咚，咚，一下一下。舱里压出来的晶体码在甲板上，拳头大一块，还冒着凉气。",
   "船员干一会儿就咳，咳出来的痰是蓝的，啐在铁板上亮一下才暗。他们管这个叫蓝肺，管自己叫抽工。一班八个钟头，工钱是岸上的三倍。",
   "远处的水面上站着几点光，不动，也不靠近。{?flag.jar_sold:诺罗说那东西从你们一进来就跟着。|别摇说那是她家里的人，在看你们怎么对付先来的。}",
   {
    "if": "flag.gauge_burned",
    "text": "中间那条叫红利号。船头架着一台东西，铜皮，三根导管，样子你见过：魂秤，倒过来接的。蒂尔妲蹲在旁边，手里捏着图纸。图纸第三页上写的还是“秤”。"
   },
   {
    "if": "flag.ship_client && flag.client_charter",
    "text": "你脚底下踩的就是红利号的甲板。船队的总办正朝你走过来，手里端着两杯酒，雇你们的就是他东家。"
   },
   {
    "if": "is.god",
    "text": "泵停了一下。总办抬头看了看管子，又看了看你，叫人去拿保单：要是神让泵停的，算不可抗力，保险行得赔。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）那台东西跟秤是一张图。（不舒服。）它一响，我胸口就往那边偏。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "三倍工钱，八个钟头，咳蓝的。这买卖不亏的只有船东。"
   }
  ],
  "choices": [
   {
    "text": "看撞锤是怎么接的",
    "tag": "奇械",
    "if": "is.artificer",
    "once": true,
    "effects": [
     "flag fx_ram_read"
    ],
    "result": "你看了一刻钟就看明白了：撞锤和魂秤是同一张图，导管倒过来接，读数的针换成了吸口。管子根上有一道阀，拧下来，它就只是一台秤。"
   },
   {
    "text": "先把咳得最凶的几个抽工领下船",
    "tag": "盾",
    "if": "faction == 'shield'",
    "once": true,
    "effects": [
     "rep union +1",
     "rep charter -1",
     "approval bura +1"
    ],
    "result": "你领下来七个人，都是咳出了血丝的。总办没拦，他在本子上把七个名字勾了，工钱算到当天中午。"
   },
   {
    "text": "先去船头找蒂尔妲",
    "if": "flag.gauge_burned",
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "mods": [
      {
       "if": "flag.fx_ram_read",
       "n": 2,
       "why": "你看得懂她那张图"
      },
      {
       "if": "party.middlesday",
       "n": 1,
       "why": "礼拜三就站在你旁边"
      }
     ]
    },
    "ok": {
     "text": "她听你说完，把图纸翻到第三页，指着上头那个“秤”字看了很久。然后她爬上撞锤，拧下了那道阀。撞锤咣的一声停了，船上的人等了半天，没等到下一声。",
     "effects": [
      "flag siphon_taken",
      "var jar_trust +1",
      "approval middlesday +1",
      "xp 600"
     ],
     "goto": "f_04"
    },
    "fail": {
     "text": "“这是秤（好吧，倒过来接就是炉子，这我画的时候就知道（第三页写着呢））。可汇票不等人。”她把图纸卷起来，朝舱口招了招手。",
     "goto": "f_03f"
    }
   },
   {
    "text": "登船，把泵停了",
    "effects": [
     {
      "if": "flag.ship_client && flag.client_charter",
      "then": [
       "flag contract_broken"
      ]
     },
     "approval bura +1"
    ],
    "goto": "f_03f"
   },
   {
    "text": "找船队的总办谈",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "flag.silcalas_share",
       "n": 2,
       "why": "峰会走廊里谈成过那一笔"
      },
      {
       "if": "flag.client_charter",
       "n": 2,
       "why": "他是你雇主的人"
      }
     ]
    },
    "ok": {
     "text": "总办听完，把两杯酒都喝了，叫人把三条船的泵关了。“三天。三天以后庭上还没说法，我照开。”",
     "effects": [
      "flag fx_pumps_paused",
      "rep south +1"
     ],
     "goto": "f_04"
    },
    "fail": {
     "text": "总办听你说完，只问了一句：这三天的工钱谁出。你答不上来。泵接着响。",
     "effects": [
      "rep charter -1"
     ],
     "goto": "f_04"
    }
   },
   {
    "text": "不管它，绕过去",
    "effects": [
     "var jar_trust -1"
    ],
    "result": "船从三条铁壳船旁边绕过去。离得最近的时候，听得见泵后头那一声长长的抽气。水面上那几点光暗了一下。",
    "goto": "f_04"
   }
  ]
 },
 "f_03f": {
  "id": "f_03f",
  "title": "登船",
  "text": [
   "你们是从舷梯上去的，没人拦。上到甲板，管泵的奇械师把扳手换成了短枪，舱口一个接一个冒出戴面罩的人。",
   "撞锤在船头转了个向。{?party.guilhem:吉列姆的咒念到一半，觉得手里的东西被那根管子抽走了，骂了一句条例编号。|它一吸，你袖子里的东西就往那边飘。}抽工们缩在绞盘后头，没有一个上来帮忙，也没有一个走。",
   {
    "if": "flag.ship_client && flag.client_charter",
    "text": "这一仗是在你雇主的甲板上打的。总办站在舱楼上看着，手里还端着那杯酒。"
   }
  ],
  "choices": [
   {
    "text": "动手",
    "if": "partysize >= 4",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队从舱口一个接一个冒出来，皮面罩上一个铜嘴。撞锤在船头转了个向，吸口对准了你们。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "siphon_ram",
       "hpMult": 1.3
      },
      {
       "id": "airship_marine",
       "n": 4,
       "name": "抽工陆战队"
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "船队雇的法师"
      },
      {
       "id": "artificer_engineer",
       "name": "管泵的奇械师"
      }
     ],
     "specials": [
      {
       "id": "pipe",
       "name": "砍断抽气管",
       "desc": "管子从撞锤根上通到天上，砍断了，抽进去的气会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子下去第三下，管子断了。抽进去的气从断口倒喷出来，带着冰碴子，甲板上的人全被掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮。斧子弹回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤是一张图，拧下那道阀，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风停了。管泵的人愣在原地，看着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "阀是反丝的。你拧的那半圈把它拧得更紧了，撞锤抽了你一口，袖子里的东西全飘了过去。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "flag siphon_taken",
       "var jar_trust +1",
       "xp 800"
      ],
      "goto": "f_04"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_04"
     }
    }
   },
   {
    "text": "动手",
    "if": "partysize == 3",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队从舱口一个接一个冒出来，皮面罩上一个铜嘴。撞锤在船头转了个向，吸口对准了你们。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "siphon_ram"
      },
      {
       "id": "airship_marine",
       "n": 4,
       "name": "抽工陆战队"
      },
      {
       "id": "war_mage",
       "name": "船队雇的法师"
      }
     ],
     "specials": [
      {
       "id": "pipe",
       "name": "砍断抽气管",
       "desc": "管子从撞锤根上通到天上，砍断了，抽进去的气会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子下去第三下，管子断了。抽进去的气从断口倒喷出来，带着冰碴子，甲板上的人全被掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮。斧子弹回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤是一张图，拧下那道阀，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风停了。管泵的人愣在原地，看着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "阀是反丝的。你拧的那半圈把它拧得更紧了，撞锤抽了你一口，袖子里的东西全飘了过去。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "flag siphon_taken",
       "var jar_trust +1",
       "xp 800"
      ],
      "goto": "f_04"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_04"
     }
    }
   },
   {
    "text": "动手",
    "if": "partysize == 2",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队从舱口一个接一个冒出来，皮面罩上一个铜嘴。撞锤在船头转了个向，吸口对准了你们。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "siphon_ram"
      },
      {
       "id": "airship_marine",
       "n": 3,
       "name": "抽工陆战队"
      }
     ],
     "specials": [
      {
       "id": "pipe",
       "name": "砍断抽气管",
       "desc": "管子从撞锤根上通到天上，砍断了，抽进去的气会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子下去第三下，管子断了。抽进去的气从断口倒喷出来，带着冰碴子，甲板上的人全被掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮。斧子弹回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤是一张图，拧下那道阀，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风停了。管泵的人愣在原地，看着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "阀是反丝的。你拧的那半圈把它拧得更紧了，撞锤抽了你一口，袖子里的东西全飘了过去。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "flag siphon_taken",
       "var jar_trust +1",
       "xp 800"
      ],
      "goto": "f_04"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_04"
     }
    }
   },
   {
    "text": "动手",
    "if": "partysize <= 1",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队从舱口一个接一个冒出来，皮面罩上一个铜嘴。撞锤在船头转了个向，吸口对准了你们。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "siphon_ram",
       "hpMult": 0.7
      },
      {
       "id": "airship_marine",
       "n": 2,
       "name": "抽工陆战队"
      }
     ],
     "allies": [
      {
       "id": "airship_marine",
       "name": "船上的水手"
      }
     ],
     "specials": [
      {
       "id": "pipe",
       "name": "砍断抽气管",
       "desc": "管子从撞锤根上通到天上，砍断了，抽进去的气会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子下去第三下，管子断了。抽进去的气从断口倒喷出来，带着冰碴子，甲板上的人全被掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮。斧子弹回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤是一张图，拧下那道阀，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风停了。管泵的人愣在原地，看着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "阀是反丝的。你拧的那半圈把它拧得更紧了，撞锤抽了你一口，袖子里的东西全飘了过去。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "flag siphon_taken",
       "var jar_trust +1",
       "xp 800"
      ],
      "goto": "f_04"
     },
     "lose": {
      "effects": [
       "hp 1"
      ],
      "goto": "f_04"
     }
    }
   }
  ]
 },
 "f_04": {
  "id": "f_04",
  "title": "平潮庭",
  "art": "load_20",
  "loc": "妖精界 · 潮水停住的地方",
  "text": [
   "第五天，潮停了。海面平得能搁一碗水，船不晃，帆不响，连船底那条径都不流了。水面上站着一圈光，近看是人，巴掌大，穿着叶子缝的衣裳，一个挨一个，站满了半里地。",
   {
    "if": "!flag.jar_sold",
    "text": "他们冲着罐子行礼，叫的是一个你没听过的官衔：量潮使。别摇从罐子里出来，掸了掸翅膀上的雾，站到他们那边去了。她是被派去让人抓的。彼岸想看看马上要来的这批人，说话算不算数。"
   },
   {
    "if": "flag.jar_sold",
    "text": "他们冲着你们的船行礼，然后发现罐子不在。一个穿灰叶子的往前飞了一步，手里捧着一卷东西：别摇留在贾赫港金库里的口供，一个字一个字记的。"
   },
   "庭上先念各家的草约。{?flag.article_ration:配给条款念了一遍。|}{?flag.article_ban:禁令念了一遍。|}{?flag.article_charter:特许条款念了两遍，念的人皱着眉。|}{?flag.silcalas_share:念到卡拉桑尼那份分成，有人笑了。|}{?flag.signed_partner_paper:你签过字的那份合伙人文件，念到你名字的时候停了一下。|}然后念她那本账。",
   {
    "if": "flag.jar_snubbed",
    "text": "“1820 年花始月，史家会讲堂。要开盖子，回了一句回头再说。记一笔。”"
   },
   {
    "if": "flag.silcalas_refused",
    "text": "“同年。有人出五百金冠，没卖。记一笔。”"
   },
   {
    "if": "flag.jar_asked && flag.jar_price_self",
    "text": "“1834 年。取音之前问过。价是主家自己付的。”别摇当庭把收下的东西摆出来：一小团光，是你的一段记忆。你认不出是哪一段。"
   },
   {
    "if": "flag.jar_asked && flag.jar_price_companion",
    "text": "“1834 年。取音之前问过。价是主家的同伴付的。”她把那样东西摆出来，一小团光。付账的那位看了它一眼，想不起是什么。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "“1834 年。没问，取音一次。”别摇抬起手，指着你。"
   },
   {
    "if": "flag.jar_sold",
    "text": "“1834 年。交付布西拉尔金库。”念的人把口供卷起来，指了指你。"
   },
   {
    "if": "flag.siphon_taken",
    "text": "“抽气船上，停了一台撞锤。记一笔。”"
   },
   {
    "if": "flag.fx_pumps_paused",
    "text": "“抽气船上，说动人停泵三天。记半笔。”"
   },
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked && var.jar_trust >= 3",
    "text": "账念完，别摇报了个总数，比你以为的多。庭上的人互相看了看，把手里的叶子放下了。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "她记得比我细。我不喜欢这样。"
   },
   {
    "if": "is.god",
    "text": "念账的老仙子念完，转过来对着你。照大妖精公约，你这个个头的，不算签约的一方。"
   },
   {
    "if": "is.god",
    "speaker": "念账的",
    "text": "你签了不算。你身边随便哪一个会死的签，算。"
   }
  ],
  "first": [
   "quest q_knock stage 2",
   "codex c_slack_tide"
  ],
  "choices": [
   {
    "text": "听她把彼岸的价开完",
    "if": "!flag.jar_sold && !flag.jar_used_unasked && var.jar_trust >= 3",
    "effects": [
     "flag court_signs",
     "item +jam_jar",
     "quest q_jar done"
    ],
    "result": "价开出来了：份额可以给，拿人情、节日、真名来换，一个金冠也不收。别摇把空罐子还给你，说这东西你们那边还用得着。",
    "goto": "f_05"
   },
   {
    "text": "替公司把这本账说圆",
    "if": "!flag.jar_sold && !flag.jar_used_unasked && var.jar_trust < 3",
    "check": {
     "skill": "persuasion",
     "dc": 18,
     "mods": [
      {
       "if": "var.jar_trust >= 1",
       "n": 1,
       "why": "账上有一笔"
      },
      {
       "if": "var.jar_trust >= 2",
       "n": 1,
       "why": "账上又有一笔"
      },
      {
       "if": "faction == 'seal' && !flag.contract_broken",
       "n": 2,
       "why": "印条：公司三百八十九年没毁过约，彼岸认这个"
      },
      {
       "if": "flag.fx_asked_rules",
       "n": 1,
       "why": "你照她说的规矩说话"
      }
     ]
    },
    "ok": {
     "text": "你没道谢，没报真名，答应过的一样一样认了。念账的老仙子在账尾添了一笔，合上了。别摇把空罐子还给你。",
     "effects": [
      "flag court_signs",
      "item +jam_jar",
      "quest q_jar done"
     ],
     "goto": "f_05"
    },
    "fail": {
     "text": "你说到第三句，老仙子抬手止住了你。“你们那边的话，说出来就变。我们这边不收。”潮水又动了。",
     "effects": [
      "flag court_refused",
      {
       "if": "!flag.jar_sold",
       "then": [
        "item +jam_jar"
       ]
      },
      "quest q_jar fail"
     ],
     "goto": "f_05"
    }
   },
   {
    "text": "听她念完",
    "if": "flag.jar_sold || flag.jar_used_unasked",
    "effects": [
     "flag court_refused",
     {
      "if": "!flag.jar_sold",
      "then": [
       "item +jam_jar"
      ]
     },
     "quest q_jar fail"
    ],
    "result": "庭散了。潮水重新动起来，那一圈光一盏一盏灭了。往后只剩用强的几条路。",
    "goto": "f_05"
   },
   {
    "text": "不要彼岸的价，起身走人",
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "effects": [
     "flag court_refused",
     {
      "if": "!flag.jar_sold",
      "then": [
       "item +jam_jar"
      ]
     },
     "quest q_jar fail",
     "approval narwen -1"
    ],
    "result": "你说公司不拿真名做买卖。老仙子点了点头，好像早料到了。别摇没留你，也没送你，把空罐子搁在你脚边就走了。",
    "goto": "f_05"
   }
  ]
 },
 "f_05": {
  "id": "f_05",
  "title": "青铜的翅膀",
  "art": "ev_dragon_fly",
  "text": [
   {
    "if": "!flag.partner_to_hakhepra",
    "text": "庭上的人还没散尽，海那头的云裂开一道口子。一样青铜色的东西从里头掉出来，掉到一半，张开了翅膀。"
   },
   {
    "if": "!flag.partner_to_hakhepra",
    "text": "他比传说里小，翼展也就三条船长。左边那只翅膀一扇一顿，扇三下要歪一回。泽拉特那一炮以后，他这是头一回飞。"
   },
   {
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "text": "他在你们桅杆上头兜了两圈，落在水上，水没到他胸口，冒着白汽。"
   },
   {
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "speaker": "阿赫特",
    "text": "十五年的报告我都看了。字写得难看，数是对的。那帮小东西不跟我签，说我个头太大。我三千岁了，头一回有人嫌我大。"
   },
   {
    "if": "flag.partner_to_guns",
    "text": "他身上带着新伤，鳞片翻着，一道一道是炮弹犁过去的。他没往下落。他在半空里吸了一口气，胸口亮了。"
   },
   {
    "if": "flag.partner_to_hakhepra",
    "text": "傍晚来了一条小船，船头点着一盏灯。送信的人穿着哈赫普拉的袍子。信是贾内比萨写的，字很工整：祂回家了，进宫那天走了一圈，嫌宫殿修得小。信尾问公司好，没提钱。"
   },
   {
    "if": "is.god && !flag.partner_to_hakhepra && !flag.partner_to_guns",
    "text": "他没看别人，只看你。“我被人拜了三千年。你点了一下。”他停了停，“我问你一句，你照实说：没人拜你以后，你打算怎么办。”"
   },
   {
    "if": "party.bura && !flag.partner_to_hakhepra",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）将军。1810 年我们团的花名册是你签的。欠饷那一栏也是。"
   },
   {
    "if": "party.guilhem && !flag.partner_to_hakhepra",
    "speaker": "吉列姆",
    "text": "理论上，龙是会飞的。我头一回见着实际上的。"
   }
  ],
  "choices": [
   {
    "text": "照实答他",
    "tag": "神",
    "if": "is.god && !flag.partner_to_hakhepra && !flag.partner_to_guns",
    "once": true,
    "effects": [
     "rep partner -2",
     "var cult +1"
    ],
    "result": "你答了。他听完，摇头。“你要么是在骗我，要么是自己也不知道。”他说后一样比骗人还糟，然后等你接着开口。"
   },
   {
    "text": "跟他算一笔账",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "check": {
     "skill": "persuasion",
     "alt": [
      "history"
     ],
     "dc": 18,
     "mods": [
      {
       "if": "rep.partner >= 4",
       "n": 2,
       "why": "他信你们的报告"
      },
      {
       "if": "flag.partner_bought_out",
       "n": 2,
       "why": "他的股是照章程买断的"
      },
      {
       "if": "flag.report4_full",
       "n": 1,
       "why": "最后一份报告写全了"
      },
      {
       "if": "flag.partner_knows_lie",
       "n": -2,
       "why": "他抓到过你说谎"
      }
     ]
    },
    "ok": {
     "text": "你跟他算：一头三千岁的龙，对一条载着二十几个人的船，打赢了算什么，打输了报上怎么写。他听完哼了一声，把翅膀收了。“平手。”",
     "effects": [
      "flag partner_draw",
      "rep partner +1"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "你刚说到“将军”两个字，他就笑了。“我当将军的时候，你爷爷还没断奶。”他往后一仰，从水里飞了起来。",
     "goto": "f_05f"
    }
   },
   {
    "text": "把瓦伦盖尔特那句话当面说给他",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns && flag.partner_known",
    "check": {
     "skill": "persuasion",
     "alt": [
      "history"
     ],
     "dc": 18,
     "mods": [
      {
       "if": "rep.partner >= 4",
       "n": 2,
       "why": "他信你们的报告"
      },
      {
       "if": "flag.partner_bought_out",
       "n": 2,
       "why": "他的股是照章程买断的"
      },
      {
       "if": "flag.report4_full",
       "n": 1,
       "why": "最后一份报告写全了"
      },
      {
       "if": "true",
       "n": -2,
       "why": "这话不好听"
      }
     ]
    },
    "ok": {
     "text": "“瓦伦盖尔特问您好。他问，没人拜您以后，您睡得着吗。”他没动。过了很久，他问阿拉莫莱每天几点点灯。没人答得上来。他转过身往南飞了，左边那只翅膀还是一扇一顿。",
     "effects": [
      "flag partner_draw",
      "flag partner_goes_home"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "他听到一半，喉咙里响了一声，海面上的白汽一下子厚了。“洇河里那条泥鳅。”他飞了起来。",
     "goto": "f_05f"
    }
   },
   {
    "text": "请他以股东的身份上船列席",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns && flag.signed_partner_paper",
    "effects": [
     "rep partner +1"
    ],
    "result": "他变回人样，从水里走上来，那身将军制服是干的。他在甲板上找了把椅子坐下，翘起腿，说他只是来听听。",
    "goto": "f_05b"
   },
   {
    "text": "动手",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "goto": "f_05f"
   },
   {
    "text": "冲他喊停",
    "if": "flag.partner_to_guns",
    "check": {
     "skill": "intimidation",
     "alt": [
      "persuasion"
     ],
     "dc": 20,
     "mods": [
      {
       "if": "rep.partner >= 4",
       "n": 2,
       "why": "他还认你这个队长"
      }
     ]
    },
    "ok": {
     "text": "你喊的是他的名字，旧的那个。他胸口的光暗下去，落在水上，呛了一口白汽。“平手。”他说，“这一仗也算平手。”",
     "effects": [
      "flag partner_draw"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "他没听见，或者听见了不在乎。",
     "goto": "f_05f"
    }
   },
   {
    "text": "迎上去",
    "if": "flag.partner_to_guns",
    "goto": "f_05f"
   },
   {
    "text": "把信收好",
    "if": "flag.partner_to_hakhepra",
    "effects": [
     "rep south +1"
    ],
    "result": "你把信折好，夹进埃塔的账本。送信的人没走，在船头坐了一会儿，把那盏灯留下了。",
    "goto": "f_05b"
   }
  ]
 },
 "f_05f": {
  "id": "f_05f",
  "title": "泽拉特以后",
  "art": "ev_dragon_attack",
  "text": [
   "他飞起来，水往下塌了一个坑。头一口气是雷，打在海面上，水开了花，一船人的头发全竖起来了。",
   "他飞得不稳，左边那只翅膀一扇一顿。{?flag.partner_to_guns:新伤在他肚皮底下，一道一道还在冒烟。|三千岁的龙，四十五年没飞过。}他每回往下扑，都先看一眼船上有没有炮。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）左翼，每扇三下歪一回。（建议。）打第三下。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人跟一位神动手，是在画上。画上的人后来都死了。我只是说一声。"
   }
  ],
  "choices": [
   {
    "text": "迎上去",
    "if": "partysize >= 4",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "他飞起来，水往下塌了一个坑。胸口先亮，然后是雷。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "aakhet_bronze"
      }
     ],
     "specials": [
      {
       "id": "zerat",
       "name": "冲他喊“泽拉特”",
       "desc": "1790 年，专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他听见那两个字，翅膀收了一下，没敢往上飞。他在水面上低低地兜了一圈，像是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声是雷。“泽拉特是平手。”下一口气就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数准了：第三下。你一喊，全船的枪和咒都往他左肋底下去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到第三下，他偏偏扇了第四下，尾巴扫过来，你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股，日子和数目",
       "check": {
        "skill": "history",
        "alt": [
         "investigation"
        ],
        "dc": 17,
        "adv": "flag.court_signs",
        "mods": [
         {
          "if": "!flag.etta_left",
          "n": 2,
          "why": "埃塔的账本就在手边"
         }
        ]
       },
       "success": {
        "text": "从 1820 年的头一张汇票念起，念到血的股、机房的代持账户。他在半空里愣住了，像是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他纠正了你，纠正完喷了你一口。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_05w"
     },
     "lose": {
      "effects": [
       "flag fx_dragon_won",
       {
        "if": "flag.court_signs",
        "then": [
         "unflag court_signs",
         "flag court_refused"
        ]
       }
      ],
      "goto": "f_05b"
     }
    }
   },
   {
    "text": "迎上去",
    "if": "partysize == 3",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "他飞起来，水往下塌了一个坑。胸口先亮，然后是雷。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "aakhet_bronze",
       "hpMult": 0.8
      }
     ],
     "specials": [
      {
       "id": "zerat",
       "name": "冲他喊“泽拉特”",
       "desc": "1790 年，专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他听见那两个字，翅膀收了一下，没敢往上飞。他在水面上低低地兜了一圈，像是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声是雷。“泽拉特是平手。”下一口气就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数准了：第三下。你一喊，全船的枪和咒都往他左肋底下去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到第三下，他偏偏扇了第四下，尾巴扫过来，你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股，日子和数目",
       "check": {
        "skill": "history",
        "alt": [
         "investigation"
        ],
        "dc": 17,
        "adv": "flag.court_signs",
        "mods": [
         {
          "if": "!flag.etta_left",
          "n": 2,
          "why": "埃塔的账本就在手边"
         }
        ]
       },
       "success": {
        "text": "从 1820 年的头一张汇票念起，念到血的股、机房的代持账户。他在半空里愣住了，像是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他纠正了你，纠正完喷了你一口。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_05w"
     },
     "lose": {
      "effects": [
       "flag fx_dragon_won",
       {
        "if": "flag.court_signs",
        "then": [
         "unflag court_signs",
         "flag court_refused"
        ]
       }
      ],
      "goto": "f_05b"
     }
    }
   },
   {
    "text": "迎上去",
    "if": "partysize == 2",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "他飞起来，水往下塌了一个坑。胸口先亮，然后是雷。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "aakhet_bronze",
       "hpMult": 0.6
      }
     ],
     "allies": [
      {
       "id": "airship_marine",
       "n": 2,
       "name": "船上的枪手"
      }
     ],
     "specials": [
      {
       "id": "zerat",
       "name": "冲他喊“泽拉特”",
       "desc": "1790 年，专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他听见那两个字，翅膀收了一下，没敢往上飞。他在水面上低低地兜了一圈，像是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声是雷。“泽拉特是平手。”下一口气就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数准了：第三下。你一喊，全船的枪和咒都往他左肋底下去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到第三下，他偏偏扇了第四下，尾巴扫过来，你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股，日子和数目",
       "check": {
        "skill": "history",
        "alt": [
         "investigation"
        ],
        "dc": 17,
        "adv": "flag.court_signs",
        "mods": [
         {
          "if": "!flag.etta_left",
          "n": 2,
          "why": "埃塔的账本就在手边"
         }
        ]
       },
       "success": {
        "text": "从 1820 年的头一张汇票念起，念到血的股、机房的代持账户。他在半空里愣住了，像是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他纠正了你，纠正完喷了你一口。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_05w"
     },
     "lose": {
      "effects": [
       "flag fx_dragon_won",
       {
        "if": "flag.court_signs",
        "then": [
         "unflag court_signs",
         "flag court_refused"
        ]
       }
      ],
      "goto": "f_05b"
     }
    }
   },
   {
    "text": "迎上去",
    "if": "partysize <= 1",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "他飞起来，水往下塌了一个坑。胸口先亮，然后是雷。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "aakhet_bronze",
       "hpMult": 0.4
      }
     ],
     "allies": [
      {
       "id": "airship_marine",
       "n": 4,
       "name": "船上的枪手"
      }
     ],
     "specials": [
      {
       "id": "zerat",
       "name": "冲他喊“泽拉特”",
       "desc": "1790 年，专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他听见那两个字，翅膀收了一下，没敢往上飞。他在水面上低低地兜了一圈，像是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声是雷。“泽拉特是平手。”下一口气就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数准了：第三下。你一喊，全船的枪和咒都往他左肋底下去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到第三下，他偏偏扇了第四下，尾巴扫过来，你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股，日子和数目",
       "check": {
        "skill": "history",
        "alt": [
         "investigation"
        ],
        "dc": 17,
        "adv": "flag.court_signs",
        "mods": [
         {
          "if": "!flag.etta_left",
          "n": 2,
          "why": "埃塔的账本就在手边"
         }
        ]
       },
       "success": {
        "text": "从 1820 年的头一张汇票念起，念到血的股、机房的代持账户。他在半空里愣住了，像是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他纠正了你，纠正完喷了你一口。",
        "selfDmg": "2d6"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_05w"
     },
     "lose": {
      "effects": [
       "flag fx_dragon_won",
       {
        "if": "flag.court_signs",
        "then": [
         "unflag court_signs",
         "flag court_refused"
        ]
       }
      ],
      "goto": "f_05b"
     }
    }
   }
  ]
 },
 "f_05w": {
  "id": "f_05w",
  "title": "水里的龙",
  "text": [
   "他掉进海里，掉下去的地方水开了锅。再浮上来的时候是人样，穿着那身共和国的将军制服，湿透了，左边袖子空了半截。",
   {
    "speaker": "阿赫特",
    "text": "平手。"
   },
   "他扒着你们的船舷，没往上爬。指甲是青铜色的，一根一根扣在木头里。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）拉他上来。死的活的，都得有人签收。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "对他客气点。他活了三千年，我们谁也没活过。"
   },
   {
    "if": "is.god",
    "text": "他看着你，没求你。“你点一下就行，”他说，“你连这个都不用学。”"
   }
  ],
  "choices": [
   {
    "text": "伸手把他拉上来，放他走",
    "effects": [
     "flag partner_draw",
     "approval narwen +1",
     "approval bura +1"
    ],
    "result": "他在甲板上坐了一会儿，拧干袖子，说这一仗是平手，你最好也这么写。然后他下了水，往南游了一段，飞起来，飞得很低。",
    "goto": "f_05b"
   },
   {
    "text": "不伸手",
    "effects": [
     "flag partner_dead",
     "approval narwen -1",
     "rep south -1",
     "rep partner -3"
    ],
    "result": "他在船舷上扒了一会儿，手指一根一根松开，沉了下去。那片海很深。阿拉莫莱今天黄昏照样会点灯，没人去告诉他们。",
    "goto": "f_05b"
   }
  ]
 },
 "f_05b": {
  "id": "f_05b",
  "title": "再往外",
  "text": [
   {
    "if": "flag.fx_dragon_won",
    "text": "他把庭冲散了。那一圈光四下飞开，有几点再没亮。他落在你们的桅杆顶上，变回人样，制服干的，翘着腿，等你签字。"
   },
   "平潮庭那片水再往外，海的颜色变了，从黑绿到铅灰，再往外是白的。诺罗说他爷爷的爷爷也没去过那边。往外走，得有人认路。",
   {
    "if": "flag.alvar_pilot",
    "text": "阿尔瓦站在船头，帽子上顶出两只山羊角。他说那边有一座城、一片浅滩、一扇门，一样比一样有意思，说完自己先笑了。"
   },
   {
    "if": "flag.pilots_paid",
    "text": "诺罗的人拿到了领航权，往外的水他们也认，只是开船前要先拜一拜。"
   },
   {
    "if": "party.narwen || flag.narwen_custodian",
    "text": "娜尔雯摊开热忱派第二回探险的海图，拿指甲顺着一条线划过去，划到了纸边上。"
   },
   {
    "if": "flag.salvation_sails",
    "text": "得救号已经起锚往外走了，船尾挂着一盏灯。你跟着那盏灯走就行。"
   },
   {
    "if": "is.god",
    "text": "你往外看，看得见那条径一直通到哪儿。船上的人不看海图了，都看着你。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "往外走，账上记“远洋”。回去，记“返航”。两样我都写得动，你挑。"
   }
  ],
  "first": [
   "quest q_partner done"
  ],
  "choices": [
   {
    "text": "往外走",
    "req": "flag.alvar_pilot || flag.pilots_paid || party.narwen || flag.narwen_custodian || flag.salvation_sails || is.god",
    "reqText": "要有人认路：阿尔瓦、拿到领航权的诺罗、娜尔雯的海图，或者得救号",
    "effects": [
     "flag went_beyond"
    ],
    "goto": "f_06"
   },
   {
    "text": "掉头，回平潮庭外的锚地",
    "effects": [
     "rest short"
    ],
    "result": "船掉了头。回锚地的路上，你们在甲板上睡了半天。",
    "goto": "f_10"
   }
  ]
 },
 "f_06": {
  "id": "f_06",
  "title": "崩塌之城",
  "art": "ev_looming_death",
  "loc": "暗影位面 · 归寂领",
  "text": [
   "走了十一天，雾里冒出一座城。是卡斯托纳斯，十二年前你们去过的那座，可大了三倍，城墙齐整，塔一座不少，样子停在巨龙苏醒以前。街上没有煤气灯。城墙外头一圈一圈全是后来人盖的房子，哪朝哪代的都有。",
   "满街是排队的人，一人手里一张纸条，纸条上写着号。穿红袍的办事员沿着队伍走，镰刀扛在肩上，刀口朝外。队伍头上摆着一排桌子，桌子后头没有人。照队尾的人说，这队一百多年没往前挪过。",
   "活人也能住下，认红衣的规矩就行。城门口贴着规矩，一共四条，头一条是不许插队。在这儿问一个死人一句话，得先让办事员放你到前头去。",
   {
    "if": "is.immortal",
    "text": "红衣的审计在那排空桌子上摆了一份卷宗，很厚，封皮上是你的名字。他们带不走你，就当着你的面，把同船每个人的名字一个一个抄了一遍。办事员抄完抬头看你，那眼神是在看一笔呆账。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "对他们客气点。他们排了一百年，我们一天也没排。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "一百年不挪窝。（铰链咔的一声。）比陆军部补饷还慢。"
   }
  ],
  "first": [
   "codex c_crumbling_city",
   "codex c_red_reapers",
   {
    "if": "is.immortal",
    "then": [
     "flag reaper_file"
    ]
   }
  ],
  "choices": [
   {
    "text": "去找康威尔那个扔砖的孩子",
    "if": "flag.volleys",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "faction == 'lantern'",
       "n": 2,
       "why": "灯条：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      },
      {
       "if": "origin == 'anbennar'",
       "n": 2,
       "why": "你穿过那身制服，他认得"
      }
     ]
    },
    "ok": {
     "text": "他还是十四五岁，手里还攥着那块砖。你问他那一枪是谁开的。“我没看见。”他把砖翻了个面，“我在看手里这个。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "办事员没放你过去。你隔着三条街喊，他听见了，喊回来一句，你只听全了后半截：“……手里这个。”暗影位面的冷从脚底往上爬，爬到了膝盖。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "去找雅米娜",
    "if": "flag.yamina_spent",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "faction == 'lantern'",
       "n": 2,
       "why": "灯条：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      }
     ]
    },
    "ok": {
     "text": "她站着。死了也站着。你问她账本最后一栏是多少。“八个席位，空着六个。”她说，“这儿也排队。年轻人，你插不了我的队。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着人头喊她。她转过来，冲你说了一个数，数太长，你只记住了头两位。冷气爬上了膝盖。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "去找贝尔纳二世",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "faction == 'lantern'",
       "n": 2,
       "why": "灯条：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      },
      {
       "if": "flag.bernal_confided",
       "n": 2,
       "why": "病榻前那半句，你听出来过"
      }
     ]
    },
    "ok": {
     "text": "老人坐在队伍里，手里捧着一本祈祷书。你问他当年咽回去的那半句是什么。他想了很久。“门。”他说，“当时我们都当它是‘把门关上’。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着三条街喊他。他抬了一下手，像是在给你祝福，又像是叫你别嚷。冷气爬上了膝盖。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "去找布拉",
    "if": "flag.bura_alone && world.chains >= 6",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "faction == 'lantern'",
       "n": 2,
       "why": "灯条：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      }
     ]
    },
    "ok": {
     "text": "她在队伍里站得笔直，下巴上的铰链锈住了，张不开。她冲你比了个手势：十一，又竖起一根指头。饷还欠着，又多了一个月。",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着人头看见她的后脑勺。她没回头。办事员说她排的这一队归另一张桌子管，那张桌子也没人。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "问队尾那个人",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 17,
     "mods": [
      {
       "if": "faction == 'lantern'",
       "n": 2,
       "why": "灯条：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      }
     ]
    },
    "ok": {
     "text": "队尾是个穿短褂的男人，看不出是哪朝的。你还没开口，他先问了：“今年是哪一年？”你告诉他。他点点头，往前挪了半步。前头的人没动。",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "他问你今年是哪一年。你答了，他没听清，又问了一遍。办事员把你请出了队伍。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "在队伍里找一张认得的脸",
    "tag": "长寿",
    "if": "is.longlived",
    "effects": [
     "flag dead_asked",
     "xp 300"
    ],
    "result": "你找了半天，找着一个。八十年前在{?is.dwarf:矮人之路|月河}上跟你同过一条船的人，还是那副样子。他认出你，头一句问的是：你也来排了？你说不是。他说那就好，这儿的队太长。",
    "goto": "f_07"
   },
   {
    "text": "谁也不问，从队伍边上走过去",
    "effects": [
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "你从队伍边上走过去，没人拦你。走到另一头的城门口，你回头看了一眼，队伍还是那么长。",
    "goto": "f_07"
   }
  ]
 },
 "f_07": {
  "id": "f_07",
  "title": "天界浅滩",
  "art": "load_10",
  "loc": "天界位面 · 齐膝深的水",
  "text": [
   "再往外，雾散了。脚底下是水，齐膝深，温的，底下是白沙。一道墙沿着水走，往左看不到头，往右也看不到头。墙根下扎着帐篷，帆布的，打满了补丁。",
   "住帐篷的围了上来，个子高，翅膀收在背后，羽毛脏了。他们不问你是谁，先问老家有没有消息。他们也迷了路。他们都说造他们的那位死了，都记得有个回不去的地方，说不出在哪儿。",
   "有一位个子最高，翅膀断过一回，接歪了。他说他最后见过托丽丝，一百多年前，她从这儿蹚水过去，提着一盏灯，往那边走了。他抬手指了个方向。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "1666 年那份报告，就是从这片水里传回去的。（她把眼镜摘下来擦。）那盏灯是我点的。我替她举到门口，她接过去就走了。"
   },
   {
    "if": "is.divine",
    "text": "一个天使拉住你的袖子，问你祷告的时候，有没有人应过。"
   },
   {
    "if": "is.god",
    "text": "他们围着你，没跪。断过翅膀的那位凑近了闻了闻你，问：“你是从里头出来的吗？”"
   }
  ],
  "choices": [
   {
    "text": "回答他：应过一回，也许",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "他听完，把这句话刻在一块木片上，挂在帐篷门口。底下已经挂着十几块了。"
   },
   {
    "text": "在墙根下歇一歇",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "你们在墙根下睡了一觉。天使替你们守夜，守得很认真，一夜没坐下。"
   },
   {
    "text": "跟他们说实话：门锁着，里头有谁，不知道",
    "effects": [
     "flag angels_truth",
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "他们听完，没吵。有一位回到帐篷里，把一件叠好的袍子又打开了。",
    "goto": "f_08"
   },
   {
    "text": "说两句宽心话",
    "effects": [
     "heal 4d8",
     "approval narwen -1"
    ],
    "result": "你说门那边有人在等。他们高兴了，捧着水给你们洗伤口，伤口合得很快。{?party.narwen:娜尔雯在旁边没帮腔。|}",
    "goto": "f_08"
   },
   {
    "text": "问他们肯不肯跟船走",
    "check": {
     "skill": "religion",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "is.divine",
       "n": 2,
       "why": "你也是祷告的人"
      },
      {
       "if": "flag.angels_truth",
       "n": 1,
       "why": "你先跟他们说了实话"
      }
     ]
    },
    "ok": {
     "text": "断过翅膀的那位想了一夜。第二天早上他带来四十一个，每人背着一卷帆布。",
     "effects": [
      "flag angels_follow",
      "rep church +1"
     ],
     "goto": "f_08"
    },
    "fail": {
     "text": "他们说要等。有一位跟着你们蹚了半里水，又一步一步走回去了。{?party.narwen:娜尔雯说你问得太急。|}",
     "effects": [
      "approval narwen -1",
      "xp 200"
     ],
     "goto": "f_08"
    }
   }
  ]
 },
 "f_08": {
  "id": "f_08",
  "title": "没有把手的门",
  "art": "load_3",
  "loc": "天门前",
  "text": [
   "浅滩到头是一道坡，坡上是门。门很高，石头的，没有把手，也没有门环。门当中一个钥匙孔，方的。大小和形状你都见过：碎片当中那块忽明忽暗的黑东西。",
   "坡底下拖着一条小船，船底朝天。船帮上刻满了道道，五道一捆，一百六十八年，刻到某一天停了。船底下没有尸骨，只有一个油布包，包着一本拓本，拓的全是这些刻痕。",
   "门后有声音，说的还是“他们”。照那声音自己的说法：门是里头的人在头一回大偷之后闩上的；天国是这东西最大的一处存货；门一开，外头的亏空能补上一千年，里头的人就成了矿。",
   {
    "if": "party.narwen || flag.narwen_custodian",
    "speaker": "娜尔雯",
    "text": "是神。用我们受得了的嗓子说话。"
   },
   {
    "if": "!party.narwen && !flag.narwen_custodian && !flag.jar_sold",
    "speaker": "别摇",
    "text": "是主人家。主人家闩门，客人别问。"
   },
   {
    "if": "party.middlesday && !flag.m_dormant",
    "speaker": "礼拜三",
    "text": "（肯定。）是人。装着人的箱子是什么声，我知道。"
   },
   {
    "if": "is.mechanim",
    "text": "你不用译码。门后的话你直接听得懂，跟七号线夜班的机器停机前那一声，是一个调子。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "是一段留声。理论上，很有礼貌。"
   },
   {
    "if": "!party.guilhem && !flag.etta_left",
    "speaker": "埃塔",
    "text": "是一段留声。留声的人很有礼貌。有礼貌的我一个都不信。"
   },
   {
    "if": "flag.m_dormant",
    "text": "你们把礼拜三的箱子抬到门前。门后那一声响起来的时候，箱子里头跟着响了一下。它坐起来，看了一圈，很客气地问：“（礼貌。）请问各位是谁。”"
   },
   {
    "if": "party.narwen || flag.narwen_custodian",
    "text": "娜尔雯把灯放在门槛前，跪下，又站起来。她要跟碎片立契，问门后一句话。分形修会立契的人，多半死在这一步。"
   }
  ],
  "first": [
   "quest q_knock stage 3",
   "item +torrieth_tally",
   "codex c_gate",
   {
    "if": "flag.m_dormant",
    "then": [
     "flag m_rewoken",
     "companion +middlesday",
     "quest q_middlesday done"
    ]
   }
  ],
  "choices": [
   {
    "text": "把耳朵贴在钥匙孔上",
    "tag": "机械人",
    "if": "is.mechanim",
    "once": true,
    "effects": [
     "approval middlesday +1",
     "xp 200"
    ],
    "result": "你贴了一会儿。里头有人在数数，数得很慢，数到四十停了，又从一数起。"
   },
   {
    "text": "劝住她",
    "if": "party.narwen || flag.narwen_custodian",
    "check": {
     "skill": "persuasion",
     "dc": 17,
     "mods": [
      {
       "if": "approval.narwen >= 6",
       "n": 2,
       "why": "她信你"
      },
      {
       "if": "flag.angels_truth",
       "n": 1,
       "why": "你对天使说了实话，她看见了"
      }
     ]
    },
    "ok": {
     "text": "她听你说完，把灯提起来，退回了船上。“下回吧。”她说。这句话她说了一百六十九年。",
     "effects": [
      "flag narwen_talked_down",
      "quest q_narwen done"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "她听完，说你说得对。然后她跪下了。",
     "goto": "f_08b"
    }
   },
   {
    "text": "自己去跟门立契",
    "tag": "施法者",
    "if": "is.caster",
    "check": {
     "abil": "con",
     "dc": 17,
     "save": true,
     "mods": [
      {
       "if": "rep.church >= 3",
       "n": 2,
       "why": "教会认你"
      }
     ]
    },
    "ok": {
     "text": "你把手按在门上。门那边的东西顺着你的手往里走，走到胸口停了。你问了一句话，答你的是一个词。你记住了，没告诉任何人。",
     "effects": [
      "flag pc_pact",
      "xp 600"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "那东西走过了胸口，一直走到头顶。你醒过来的时候躺在船底，有人往你嘴里灌水。镜子里你左边鬓角白了一绺。你也问到了，只记得半个词。",
     "effects": [
      "flag pc_pact",
      "hp 1"
     ],
     "goto": "f_09"
    }
   },
   {
    "text": "让她去",
    "if": "party.narwen || flag.narwen_custodian",
    "goto": "f_08b"
   },
   {
    "text": "谁也不立契，先回船上",
    "effects": [
     {
      "if": "party.narwen || flag.narwen_custodian",
      "then": [
       "approval narwen -1"
      ]
     }
    ],
    "result": "{?party.narwen:娜尔雯把灯留在了门槛前，跟着你回了船。一路上她一句话没说。|你们退回船上。门后的声音没停。}",
    "goto": "f_09"
   }
  ]
 },
 "f_08b": {
  "id": "f_08b",
  "title": "立契",
  "art": "ev_priest_phantom",
  "text": [
   "她跪在门槛前，把额头贴在门上。灯在她手边，火苗往门缝那边歪。",
   "门后的声音停了。停了一会儿，有一个声音单独响起来，比别的高，也慢。{?party.middlesday:礼拜三胸口跟着亮了一下。|}{?flag.fragment_aboard:船上匣子里的碎片也响了。|}",
   "她的肩膀在抖。一百六十九年，她等的就是这一声。"
  ],
  "choices": [
   {
    "text": "守在她身边，替她扶着灯",
    "check": {
     "skill": "religion",
     "dc": 17,
     "party": true,
     "mods": [
      {
       "if": "rep.church >= 3",
       "n": 2,
       "why": "教会认这份契"
      },
      {
       "if": "approval.narwen >= 6",
       "n": 2,
       "why": "她信你"
      },
      {
       "if": "flag.fragment_aboard",
       "n": 1,
       "why": "碎片在船上"
      }
     ]
    },
    "ok": {
     "text": "她站起来的时候脸是湿的。她问到了，只转述了一句：“它说，上回有人问这个，是 1666 年。”",
     "effects": [
      "flag narwen_pact_done",
      "quest q_narwen done",
      "approval narwen +2"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "灯先灭的。她没再站起来。你们把她抬到坡下，放在那条小船旁边。门口多了一盏灯，是你们点的。",
     "effects": [
      "flag narwen_dead",
      "companion -narwen gone",
      "quest q_narwen fail"
     ],
     "goto": "f_09"
    }
   },
   {
    "text": "把她从门槛上拽回来",
    "effects": [
     "flag narwen_talked_down",
     "quest q_narwen done",
     "approval narwen -2"
    ],
    "result": "你把她拽回来，灯倒了。她看着你看了很久，没骂你。“你们都这样。”",
    "goto": "f_09"
   }
  ]
 },
 "f_09": {
  "id": "f_09",
  "title": "敲不敲",
  "art": "load_3",
  "text": [
   "门还是那扇门。能用上的东西都摆在了甲板上：一只手，{?flag.fragment_aboard:一块拳头大的晶体，|}{?flag.siphon_taken:一台倒过来接的撞锤，|}还有一船人，等你开口。",
   {
    "if": "flag.fragment_aboard",
    "text": "碎片在匣子里响了一声。今年它统共响过四声，这是第五声。"
   },
   {
    "if": "flag.salvation_sails",
    "text": "得救号在你们后头下了锚。船头站着热忱派的通神者，披风卫排成一排。他们捧着碎片，等你先动。你要是不用它，他们就自己用。"
   },
   {
    "if": "party.middlesday || is.mechanim",
    "text": "{?is.mechanim:你胸口|礼拜三胸口}那颗芯核在跟着门后的声音走，一下一下，比平常慢。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "你想起七号线。那一夜要是有人把厂门敲一敲，七八三会不会抬头。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "撞门的事我不干。敲门行。敲了不开，我站一夜岗。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "用钥匙开，理论上最体面。实际上，钥匙不是我们的。"
   },
   {
    "if": "is.god",
    "text": "你走近一步，看见了：门在你这一侧有把手，铜的，磨得发亮，像是常有人握。别人都看不见。{?party.narwen:娜尔雯问你在看什么。|}"
   }
  ],
  "choices": [
   {
    "text": "不碰它，回去",
    "if": "!flag.salvation_sails",
    "effects": [
     {
      "if": "party.narwen",
      "then": [
       "approval narwen -1"
      ]
     },
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "你转身下了坡。门后的声音没有停，也没有高起来。",
    "goto": "f_10"
   },
   {
    "text": "不碰它，回去",
    "if": "flag.salvation_sails",
    "effects": [
     "flag fx_intent_leave"
    ],
    "result": "你刚转身，得救号上的披风卫就跳下了水。",
    "goto": "f_09z"
   },
   {
    "text": "敲门",
    "if": "!flag.salvation_sails",
    "effects": [
     "flag gate_knock",
     "approval bura +1"
    ],
    "result": "你敲了三下。门没开。里头有人答了一声，听不清答的什么。浅滩那边，每一个天使都转过了身。",
    "goto": "f_10"
   },
   {
    "text": "敲门",
    "if": "flag.salvation_sails",
    "effects": [
     "flag fx_intent_knock"
    ],
    "result": "你抬起手，还没落下，得救号上的披风卫已经跳下了水。",
    "goto": "f_09z"
   },
   {
    "text": "用碎片当钥匙",
    "if": "flag.fragment_aboard || flag.salvation_sails",
    "effects": [
     "flag gate_key",
     "flag mass_awakening",
     "world tears +3",
     "world doors +2",
     "approval middlesday +1"
    ],
    "result": "{?flag.fragment_aboard:你把碎片按进钥匙孔。|通神者把碎片按进钥匙孔，你站在旁边，没拦。}一声，很轻。门开了一掌宽。",
    "goto": "f_10"
   },
   {
    "text": "拿撞锤撞",
    "if": "flag.siphon_taken || (flag.ship_client && flag.client_charter)",
    "effects": [
     "flag gate_forced",
     "flag mass_awakening",
     "world tears +3",
     "world doors +3",
     "approval bura -2",
     "approval narwen -2"
    ],
    "goto": "f_09f"
   },
   {
    "text": "伸手去握把手",
    "tag": "神",
    "if": "is.god",
    "goto": "f_11"
   }
  ]
 },
 "f_09z": {
  "id": "f_09z",
  "title": "得救号",
  "text": [
   "披风卫蹚着水上来，左肩搭着披风，剑上的咒亮着。通神者走在最后，手里捧着碎片，碎片亮得刺眼。",
   {
    "speaker": "通神者",
    "text": "先驱精灵偷过一回，法师又锁了八百年。我们只是把门打开。你挡着的，是穷人街上的路灯。"
   },
   "他说得很和气，跟灰磨在文森顿讲道一个调子。他是真心的。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人拿碎片的话去开门，是没有人。院长令写着不许。"
   }
  ],
  "choices": [
   {
    "text": "挡在门前",
    "if": "partysize >= 4",
    "combat": {
     "title": "得救号",
     "intro": "披风卫蹚着水上来，左肩搭着披风，剑上的咒亮着。通神者捧着碎片走在最后。",
     "fleeable": false,
     "enemies": [
      {
       "id": "zealot_theurge"
      },
      {
       "id": "cloakman",
       "n": 3
      },
      {
       "id": "archmage",
       "name": "得救号的分形修士"
      }
     ],
     "specials": [
      {
       "id": "box",
       "name": "把碎片的匣子扣上",
       "desc": "碎片一出声，他们的咒就跟着响",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音闷在里头。披风卫剑上的咒一下子暗了三分，好几个人低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手。你缩手的工夫，碎片叫了一声，耳朵里像灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝立下的规矩：碎片的话，不许拿来开门",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也停了一下，才接着念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你熟。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "rep church -2",
       "xp 1000"
      ],
      "goto": "f_09y"
     },
     "lose": {
      "effects": [
       "flag gate_key",
       "flag mass_awakening",
       "world tears +3",
       "world doors +2"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "挡在门前",
    "if": "partysize == 3",
    "combat": {
     "title": "得救号",
     "intro": "披风卫蹚着水上来，左肩搭着披风，剑上的咒亮着。通神者捧着碎片走在最后。",
     "fleeable": false,
     "enemies": [
      {
       "id": "zealot_theurge"
      },
      {
       "id": "cloakman",
       "n": 3
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "分形修会的修士"
      }
     ],
     "specials": [
      {
       "id": "box",
       "name": "把碎片的匣子扣上",
       "desc": "碎片一出声，他们的咒就跟着响",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音闷在里头。披风卫剑上的咒一下子暗了三分，好几个人低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手。你缩手的工夫，碎片叫了一声，耳朵里像灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝立下的规矩：碎片的话，不许拿来开门",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也停了一下，才接着念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你熟。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "rep church -2",
       "xp 1000"
      ],
      "goto": "f_09y"
     },
     "lose": {
      "effects": [
       "flag gate_key",
       "flag mass_awakening",
       "world tears +3",
       "world doors +2"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "挡在门前",
    "if": "partysize == 2",
    "combat": {
     "title": "得救号",
     "intro": "披风卫蹚着水上来，左肩搭着披风，剑上的咒亮着。通神者捧着碎片走在最后。",
     "fleeable": false,
     "enemies": [
      {
       "id": "zealot_theurge"
      },
      {
       "id": "cloakman",
       "n": 2
      }
     ],
     "specials": [
      {
       "id": "box",
       "name": "把碎片的匣子扣上",
       "desc": "碎片一出声，他们的咒就跟着响",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音闷在里头。披风卫剑上的咒一下子暗了三分，好几个人低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手。你缩手的工夫，碎片叫了一声，耳朵里像灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝立下的规矩：碎片的话，不许拿来开门",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也停了一下，才接着念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你熟。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "rep church -2",
       "xp 1000"
      ],
      "goto": "f_09y"
     },
     "lose": {
      "effects": [
       "flag gate_key",
       "flag mass_awakening",
       "world tears +3",
       "world doors +2"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "挡在门前",
    "if": "partysize <= 1",
    "combat": {
     "title": "得救号",
     "intro": "披风卫蹚着水上来，左肩搭着披风，剑上的咒亮着。通神者捧着碎片走在最后。",
     "fleeable": false,
     "enemies": [
      {
       "id": "zealot_theurge",
       "hpMult": 0.6
      },
      {
       "id": "cloakman"
      }
     ],
     "allies": [
      {
       "id": "airship_marine",
       "n": 2,
       "name": "船上的水手"
      }
     ],
     "specials": [
      {
       "id": "box",
       "name": "把碎片的匣子扣上",
       "desc": "碎片一出声，他们的咒就跟着响",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音闷在里头。披风卫剑上的咒一下子暗了三分，好几个人低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手。你缩手的工夫，碎片叫了一声，耳朵里像灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝立下的规矩：碎片的话，不许拿来开门",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也停了一下，才接着念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你熟。",
        "selfDmg": "1d8"
       }
      }
     ],
     "win": {
      "effects": [
       "rep church -2",
       "xp 1000"
      ],
      "goto": "f_09y"
     },
     "lose": {
      "effects": [
       "flag gate_key",
       "flag mass_awakening",
       "world tears +3",
       "world doors +2"
      ],
      "goto": "f_10"
     }
    }
   }
  ]
 },
 "f_09y": {
  "id": "f_09y",
  "title": "门前",
  "text": [
   "披风卫退回了得救号。通神者被抬上船的时候还在念，念的是碎片那两个词里的头一个。碎片在他们船上，门还关着。",
   "浅滩那边的天使一直看着，谁也没过来帮哪一边。断过翅膀的那位冲你举了举手，不知道是道喜，还是道别。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）跟教会的人动手，我这辈子头一回。这一笔记谁头上？"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "记公司头上。三百八十九年，头一笔。"
   }
  ],
  "choices": [
   {
    "text": "回到门前，敲三下",
    "if": "flag.fx_intent_knock",
    "effects": [
     "flag gate_knock",
     "approval bura +1"
    ],
    "result": "你敲了三下。门没开。里头有人答了一声，听不清答的什么。浅滩那边，每一个天使都转过了身。",
    "goto": "f_10"
   },
   {
    "text": "收锚，回去",
    "if": "flag.fx_intent_leave || !flag.fx_intent_knock",
    "effects": [
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "你们收了锚。得救号没跟上来，在门前一直泊到你们看不见。",
    "goto": "f_10"
   }
  ]
 },
 "f_09f": {
  "id": "f_09f",
  "title": "撞",
  "text": [
   "撞锤顶上去的头一下，门没动。第二下，门槛裂了一道。第三下，门开了，开得比钥匙开的宽，里头往外淌光，淌到浅滩上，水都亮了。",
   "跟着光出来的是红衣的人：一个审计，几个办事员，袍子拖在水里不湿。审计手里拿着一本账，头一句问的是谁让这扇门开的，第二句问船上谁赖过一死。",
   {
    "if": "is.god",
    "text": "审计看见你，在账上划了一道。“呆账。”他说，“先办别人的。”"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我说过撞门的事我不干。（铰链咔的一声。）可他们是冲着人来的。"
   }
  ],
  "choices": [
   {
    "text": "站到撞锤前头",
    "if": "partysize >= 4",
    "combat": {
     "title": "查账",
     "intro": "审计合上账本，镰刀从肩上放下来。办事员散开，把撞锤围在当中。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "reaper_auditor"
      },
      {
       "id": "reaper_clerk",
       "n": 5
      }
     ],
     "specials": [
      {
       "id": "papers",
       "name": "把通行文书递过去",
       "desc": "公司的章程、船籍、出港的签证，盖着章的都算",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "印条的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑过来看。他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀顺手划过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任那天签的最后一道令，教会说这些人是天使",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "念到托丽丝的名字，审计往后退了半步，红袍的下摆第一回沾了水。办事员们回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上记了一笔：冒用院长令，一次。",
        "selfDmg": "1d10",
        "type": "necrotic"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_10"
     },
     "lose": {
      "effects": [
       "flag fx_crew_taken"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "站到撞锤前头",
    "if": "partysize == 3",
    "combat": {
     "title": "查账",
     "intro": "审计合上账本，镰刀从肩上放下来。办事员散开，把撞锤围在当中。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "reaper_auditor"
      },
      {
       "id": "reaper_clerk",
       "n": 3
      }
     ],
     "specials": [
      {
       "id": "papers",
       "name": "把通行文书递过去",
       "desc": "公司的章程、船籍、出港的签证，盖着章的都算",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "印条的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑过来看。他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀顺手划过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任那天签的最后一道令，教会说这些人是天使",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "念到托丽丝的名字，审计往后退了半步，红袍的下摆第一回沾了水。办事员们回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上记了一笔：冒用院长令，一次。",
        "selfDmg": "1d10",
        "type": "necrotic"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_10"
     },
     "lose": {
      "effects": [
       "flag fx_crew_taken"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "站到撞锤前头",
    "if": "partysize == 2",
    "combat": {
     "title": "查账",
     "intro": "审计合上账本，镰刀从肩上放下来。办事员散开，把撞锤围在当中。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "reaper_auditor",
       "hpMult": 0.85
      },
      {
       "id": "reaper_clerk"
      }
     ],
     "allies": [
      {
       "id": "airship_marine",
       "name": "撞锤的船员"
      }
     ],
     "specials": [
      {
       "id": "papers",
       "name": "把通行文书递过去",
       "desc": "公司的章程、船籍、出港的签证，盖着章的都算",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "印条的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑过来看。他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀顺手划过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任那天签的最后一道令，教会说这些人是天使",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "念到托丽丝的名字，审计往后退了半步，红袍的下摆第一回沾了水。办事员们回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上记了一笔：冒用院长令，一次。",
        "selfDmg": "1d10",
        "type": "necrotic"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_10"
     },
     "lose": {
      "effects": [
       "flag fx_crew_taken"
      ],
      "goto": "f_10"
     }
    }
   },
   {
    "text": "站到撞锤前头",
    "if": "partysize <= 1",
    "combat": {
     "title": "查账",
     "intro": "审计合上账本，镰刀从肩上放下来。办事员散开，把撞锤围在当中。",
     "noAwe": true,
     "fleeable": false,
     "enemies": [
      {
       "id": "reaper_auditor",
       "hpMult": 0.5
      },
      {
       "id": "reaper_clerk"
      }
     ],
     "allies": [
      {
       "id": "airship_marine",
       "n": 3,
       "name": "撞锤的船员"
      }
     ],
     "specials": [
      {
       "id": "papers",
       "name": "把通行文书递过去",
       "desc": "公司的章程、船籍、出港的签证，盖着章的都算",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "印条的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑过来看。他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀顺手划过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任那天签的最后一道令，教会说这些人是天使",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "念到托丽丝的名字，审计往后退了半步，红袍的下摆第一回沾了水。办事员们回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上记了一笔：冒用院长令，一次。",
        "selfDmg": "1d10",
        "type": "necrotic"
       }
      }
     ],
     "win": {
      "effects": [
       "xp 1200"
      ],
      "goto": "f_10"
     },
     "lose": {
      "effects": [
       "flag fx_crew_taken"
      ],
      "goto": "f_10"
     }
    }
   }
  ]
 },
 "f_10": {
  "id": "f_10",
  "title": "最后一次团务会",
  "art": "ev_multi_racial_merc",
  "text": [
   {
    "if": "flag.went_beyond",
    "text": "回程的船上，团务会开在底舱，挨着压舱的石头。灯是马灯，挂在梁上，船一晃它就晃。"
   },
   {
    "if": "!flag.went_beyond",
    "text": "团务会开在平潮庭外的锚地上。船不晃，桌子是平的，放一碗水都不洒。"
   },
   {
    "if": "flag.fx_crew_taken",
    "text": "桌边空了三把椅子。撞锤的船员被红衣带走了，你的名字记在审计那本账上。"
   },
   {
    "if": "flag.partner_draw && !flag.partner_signed",
    "text": "桌上压着一张字条，青铜色的墨，两个字：“平手。”"
   },
   {
    "if": "flag.narwen_pact_done",
    "text": "娜尔雯坐在桌角，手里还攥着门前那句话，谁问她也不多说一个字。"
   },
   {
    "if": "flag.narwen_talked_down",
    "text": "娜尔雯的灯搁在桌上，没点。她说下回再点。"
   },
   {
    "if": "flag.pc_pact",
    "text": "你鬓角那块地方还在发凉。门后答你的那个词，你没往账上写。"
   },
   {
    "if": "var.overruled >= 3",
    "text": "你推门进去，会已经开完了。章程摊在桌上，第一页添了一行新字，底下有几个人的签名：本公司不签《他的帝国》，不撞门。你要签这两样，得先在章程上把自己的名字划掉。"
   },
   {
    "if": "var.overruled < 3 && party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）签哪个都行。别签把人当井使的那个。"
   },
   {
    "if": "var.overruled < 3 && party.middlesday && !flag.m_rewoken",
    "speaker": "礼拜三",
    "text": "（陈述。）十一份草约里，有三份写了我们。（请求。）签那三份里的一份。"
   },
   {
    "if": "var.overruled < 3 && flag.m_rewoken",
    "speaker": "礼拜三",
    "text": "（礼貌。）我不认识各位。账上说我是成员。那我投一票，投写了我们的那一份。"
   },
   {
    "if": "var.overruled < 3 && party.guilhem",
    "speaker": "吉列姆",
    "text": "配给是最糟的办法。理论上。实际上别的办法更糟，我算过三遍。"
   },
   {
    "if": "var.overruled < 3 && party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人替那扇门签字，是没有人。你们是头一回。别急。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "迟到者公司，三百八十九年。一百金冠以上的单子要队长签字。这是最后一张。"
   },
   {
    "if": "flag.etta_left",
    "text": "埃塔的椅子空着。账本在桌上，翻在最后一页，没人记账。"
   },
   {
    "if": "!flag.jar_sold",
    "speaker": "别摇",
    "text": "这回我不开价。这是你们自己的账。"
   },
   {
    "if": "!flag.etta_left && world.doors <= 2 && !flag.article_ban",
    "speaker": "埃塔",
    "text": "还有一样，我先提：把音叉沉了。门开得不大，禁令也没过。沉了，谁也不欠谁。"
   },
   {
    "if": "is.god",
    "text": "照公约，你落的笔不算数。约得由凡人签，你只能说签哪一份。{?flag.etta_left:|埃塔把笔摆在你手边，想了想，又挪回她自己手边。}"
   }
  ],
  "first": [
   {
    "if": "flag.went_beyond",
    "then": [
     "loc 回程的船上"
    ],
    "else": [
     "loc 平潮庭外的锚地"
    ]
   }
  ],
  "choices": [
   {
    "text": "签《配给本》",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.article_ration && flag.court_signs && world.press >= 7 && world.chains <= 4 && ((rep.republic >= 3) + (rep.wand >= 3) + (rep.charter >= 3) + (rep.church >= 3) + (rep.union >= 3) + (rep.south >= 3) + (rep.partner >= 3)) >= 3 && (!is.god || partysize >= 1 || !flag.etta_left)",
    "reqText": "要配给条款、平潮庭肯签、见报 7、枷锁不过 4、三方声望 3；神落笔不算，身边得有个凡人",
    "effects": [
     "flag sign_ration",
     "approval guilhem +1",
     "approval bura +1",
     {
      "if": "flag.article_heads",
      "then": [
       "approval middlesday +2"
      ]
     },
     "quest q_knock done"
    ],
    "result": "你在配给条款底下签了名。{?flag.etta_left:墨是你自己吹干的。|埃塔吹干了墨，在账上写：配给，已签，没有酒。}",
    "goto": "f_12"
   },
   {
    "text": "签《特许状》",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "effects": [
     "flag sign_charter",
     "rep charter +2",
     "approval bura -1",
     "approval middlesday -1",
     "quest q_knock done"
    ],
    "result": "{?flag.court_refused:彼岸没签，你签的是一张“先占先得”的备忘录，抬头印着卡拉桑尼的灰蓝两色。|你签了特许状。}{?flag.article_charter && rep.charter >= 4:起草人那一栏也是你的名字。|}",
    "goto": "f_12"
   },
   {
    "text": "把音叉沉进海里",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "effects": [
     "flag sign_quiet",
     "flag fork_sunk",
     "item -tuning_fork",
     "world doors =0",
     "approval guilhem -2",
     "approval middlesday -1",
     "quest q_knock done"
    ],
    "result": "{?item.tuning_fork:音叉在水里亮了一下，往下走，走了很久还看得见。|手里没有音叉。你把罐子的盖子扔了下去，诺罗说这也算数。}",
    "goto": "f_12"
   },
   {
    "text": "签《玫瑰和约》",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.article_ban && rep.wand >= 4 && (flag.crown_castine || flag.crown_ioriel) && (!is.god || partysize >= 1 || !flag.etta_left)",
    "reqText": "要禁令条款、王冠与魔杖 4、洛伦特有人拿主意；神落笔不算，身边得有个凡人",
    "effects": [
     "flag sign_rose",
     "rep wand +2",
     "approval guilhem +1",
     "approval bura -2",
     "quest q_knock done"
    ],
    "result": "你签了。和约的封皮是红的，压着一朵干玫瑰。{?party.bura:布拉站起来，出去了。|}",
    "goto": "f_12"
   },
   {
    "text": "在他那份文件上签字",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "rep.partner >= 4 && !flag.partner_exposed && flag.signed_partner_paper && !flag.partner_dead",
    "reqText": "要合伙人 4、没揭穿他、签过他的文件、他还活着",
    "effects": [
     "flag sign_dragon",
     "flag partner_signed",
     "approval bura -2",
     "approval narwen -1",
     {
      "if": "var.overruled >= 3",
      "then": [
       "flag struck_own_name"
      ]
     },
     "quest q_knock done"
    ],
    "result": "{?var.overruled >= 3:你先在章程上把自己的名字划了一道，然后签了他那份。|你签了他那份。}文件上的青铜印是热的，他那一栏早签好了。",
    "goto": "f_12"
   },
   {
    "text": "签《守门人》，请娜尔雯留下",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.gate_knock && world.press >= 6 && world.chains <= 3 && (party.narwen || flag.narwen_custodian) && !flag.narwen_dead",
    "reqText": "要敲过门、见报 6、枷锁不过 3、娜尔雯在",
    "effects": [
     "flag sign_keeper",
     "flag keeper_narwen",
     "approval narwen +2",
     "quest q_knock done"
    ],
    "result": "娜尔雯接过笔，先在纸边上试了试墨。“上回有人留下，是托丽丝。”她签了名，“这回是我。”",
    "goto": "f_12"
   },
   {
    "text": "签《守门人》，你自己留下",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.gate_knock && world.press >= 6 && world.chains <= 3",
    "reqText": "要敲过门、见报 6、枷锁不过 3",
    "effects": [
     "flag sign_keeper",
     "flag keeper_self",
     "approval bura +1",
     "quest q_knock done"
    ],
    "result": "你签了，在“留驻”一栏写了自己的名字。{?flag.etta_left:|埃塔看了一眼，没说话，把你那一栏的工钱改成了按年算。}",
    "goto": "f_12"
   },
   {
    "text": "在门缝里递出来的那份状子上签收",
    "if": "flag.gate_key",
    "effects": [
     "flag sign_gate",
     "approval middlesday +1",
     "quest q_knock done"
    ],
    "result": "状子拿红绳捆着，头一页写着：里头的要跟外头的谈。你签了收，写的是公司的全名。",
    "goto": "f_12"
   },
   {
    "text": "在采矿特许权的见证栏上签字",
    "if": "flag.gate_forced && !flag.gate_key",
    "effects": [
     "flag sign_gate",
     {
      "if": "var.overruled >= 3",
      "then": [
       "flag struck_own_name"
      ]
     },
     "approval bura -1",
     "quest q_knock done"
    ],
    "result": "{?var.overruled >= 3:你先把自己的名字从章程上划掉，然后|你}在见证栏上签了名。墨是蓝的，拿晶体磨的。",
    "goto": "f_12"
   }
  ]
 },
 "f_11": {
  "id": "f_11",
  "title": "把手",
  "art": "load_17",
  "text": [
   "别人看不见那个把手。你握住，往下一压，门往里开了一条缝，够一个人侧身进去。",
   "里头没有殿，没有光，没有人迎你。只有一把椅子，木头的，空着，摆在正当中。椅背上的漆磨掉了一块，是有人常年靠出来的。",
   "门后那些声音都在这儿，站在椅子后头的暗处，一个挨一个。没有一个抬头，也没有一个请你坐。",
   "门外，{?party.narwen:娜尔雯提着灯|你的人}在门槛那边等着，只看得见你的背。"
  ],
  "choices": [
   {
    "text": "坐下",
    "effects": [
     "flag seat_sat",
     "world tears =9"
    ],
    "result": "你坐下了。椅子比看上去暖和。暗处有一个头一回抬起了头。",
    "goto": "end_seat"
   },
   {
    "text": "进去，从里面把门闩上",
    "effects": [
     "flag seat_locked"
    ],
    "result": "你回头看了一眼门外的人，把门推上，在里头摸到了闩。闩是木头的，很沉。",
    "goto": "end_seat"
   },
   {
    "text": "把椅子扛出来",
    "effects": [
     "flag seat_carried",
     "world doors +2",
     "world dove -1"
    ],
    "result": "椅子不沉。你扛着它侧身出了门，门外的人往后让了一步，给你让出一条道。",
    "goto": "end_seat"
   }
  ]
 },
 "f_12": {
  "id": "f_12",
  "title": "今年是哪一年",
  "art": "ev_big_star_in_sky",
  "loc": "托拉普里亚卡港",
  "text": [
   "港务员翻了翻簿子，翻到一页，拿指甲点着念：“迟到者公司。出港是三年零十个月以前。”他抬头看看你们，又看看簿子。船上只过了几个礼拜，{?flag.fx_sailor_aged:除了那个老水手，|}谁的胡子都没长长。{?flag.fx_boat_lost:丢的那条舢板，港务员在簿子上另记了一行，叫你们赔。|}",
   {
    "if": "is.immortal",
    "text": "三年零十个月，这一回船上人人都跟你一样，一天没老。头一回有人懂你。港务员换了人，是 1820 年那位的儿子{?flag.saw_the_boat:，你认得他父亲|}。"
   },
   "他递过来一摞旧报纸，拿麻绳捆着。最上面一张是《泰卢姆时报》，标题占了半版：“可再生达姆斯塔尔的终结？”署名是暗望所的德鲁兹纳。",
   "那天夜里，你们在码头上最后数了一回流星。{?world.tears >= 7:数不过来，跟 1809 年的历书上写的一样。|}{?world.tears == 6:二百来颗。|}{?world.tears == 5:一百五十颗。|}{?world.tears == 4:九十多颗。|}{?world.tears == 3:五十上下。|}{?world.tears == 2:二十几颗。|}{?world.tears == 1:一只手数得过来。|}{?world.tears <= 0:一颗也没有。|}",
   {
    "if": "flag.went_beyond || flag.dead_asked || flag.doors_flung",
    "text": "{?flag.went_beyond:去过门前的人下船的时候都不大说话。|}{?flag.dead_asked:你把崩塌之城那句答话又想了一遍。|}{?flag.doors_flung:港里的船比你记得的多了三倍。|}"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "港务所压着一封给你的信，盖着陆军部的戳，压了两年。你没当着人拆。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "洛伦泰内来的信也在，封口是白玫瑰。你先看笔迹，再看口气。"
   },
   {
    "if": "origin == 'concord'",
    "text": "镇议会寄来一张单子：四百金冠，1789 年的。后头一栏空着，等你填“清讫”，或者填别的。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "铸炉街七号线托人带来一句话：器材账上的十四号，有人来问过。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "你的考察报告还压在箱子底，题目改过三次。{?flag.karshyr_at_summit:峰会签字页上有卡尔希尔一栏，报告里得添一段。|}你在码头上又改了一次。"
   }
  ],
  "first": [
   "date 1838年泪落月",
   "world press +2",
   {
    "if": "flag.ship_client && flag.client_charter && !flag.sign_charter",
    "then": [
     "rep charter -2"
    ]
   },
   {
    "if": "flag.ship_client && flag.client_republic && !flag.sign_ration",
    "then": [
     "rep republic -2"
    ]
   },
   {
    "if": "flag.ship_client && flag.client_lorent && !flag.sign_rose",
    "then": [
     "rep wand -2"
    ]
   },
   {
    "if": "flag.ship_client && flag.client_church && !flag.sign_keeper && !flag.sign_gate",
    "then": [
     "rep church -2"
    ]
   },
   {
    "if": "flag.ship_karshyr",
    "then": [
     "rep south +1"
    ]
   }
  ],
  "choices": [
   {
    "text": "翻共和国的头版",
    "once": true,
    "effects": [
     "codex c_broken_empire"
    ],
    "result": "《斗兽场哨兵报》，三年的头版叠在一起。{?flag.artheta:“破晓”，行刑队的名单登了两版。|}{?flag.dove_honoured:鸽之日，补发的军饷排了三条街。|}{?flag.dove_released:鸽子放了，沿岸多出六面新旗。|}{?flag.dove_by_miracle:十一个邦梦见过同一只鸽子，议会吵了三天。|}{?world.dove >= 4 && world.dove <= 6:公投又推了一年，谁也没开枪。|}"
   },
   {
    "text": "翻调查庭那一版",
    "once": true,
    "effects": [
     "codex c_konwell"
    ],
    "result": "调查庭那件事登在第三版。{?flag.inquiry_truth:笔录照登了全文，你那一段占半版。|}{?flag.inquiry_cover:结论只有一行：起因不明。|}{?flag.inquiry_blame_lorent:结论说那一枪是洛伦特人放的。|}{?flag.ny_passed_order || flag.ny_held_order || flag.ny_stood_between:旁边一栏登着新年那天旧斗兽场的照片。|}"
   },
   {
    "text": "翻外国版",
    "once": true,
    "effects": [
     "codex c_comet"
    ],
    "result": "外国版在第四页。{?flag.crown_castine:洛伦特颁了宪法，女王自己念的。|}{?flag.crown_ioriel:洛伦特的诏书口气越来越老。|}{?flag.crown_off:洛伦特的王冠锁进了柜子。|}{?flag.rector_erudite:阿兰蒂尔塔的地窖开了，看碎片的人绕塔三圈。|}{?flag.rector_zealot:教廷只登了一条：得救号未归。|}"
   },
   {
    "text": "翻东坎诺那一版",
    "once": true,
    "effects": [
     "codex c_castonath_line"
    ],
    "result": "东坎诺的消息挤在广告中间。{?flag.line_castonath:卡斯托纳斯通了煤气灯。|}{?flag.line_ancardia:东坎诺的兵车一礼拜两趟。|}{?flag.line_none:阿斯拉银行还在清盘。|}{?flag.hoard_sealed:卡斯托纳斯的窖藏三印封着，没人动过。|}{?flag.hoard_milled:窖藏磨完了，磨坊改了纺纱厂。|}{?flag.rite_given:王家巫师的名单上，伊萨那一席后头添了个“正”字。|}"
   },
   {
    "text": "翻港里的小报",
    "once": true,
    "effects": [
     "codex c_spires"
    ],
    "result": "港里印的小报，纸是黄的。{?flag.spires_told:卡尔希尔成了共和国，港口立了块牌子。|}{?flag.spires_sold:尖碑卖了，只登了价，没登买主。|}{?flag.spires_kept:尖碑还是石头，没人提。|}{?flag.ruling_both:巨魔湾一纸裁定管两样，联盟差点散伙。|}{?flag.ruling_cores:巨魔湾的机器算人了，戴镣的还不算。|}{?flag.engine_licensed:文森顿的机房又盖了一座。|}"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_ration",
    "goto": "end_ration"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_charter || !(flag.sign_ration || flag.sign_quiet || flag.sign_rose || flag.sign_dragon || flag.sign_gate || flag.sign_keeper)",
    "effects": [
     {
      "if": "!flag.sign_charter",
      "then": [
       "flag sign_charter"
      ]
     }
    ],
    "goto": "end_charter"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_quiet && !flag.sign_ration",
    "goto": "end_quiet"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_rose && !flag.sign_ration && !flag.sign_quiet",
    "goto": "end_rose"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_dragon && !flag.sign_ration && !flag.sign_quiet && !flag.sign_rose",
    "goto": "end_dragon"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_gate && !flag.sign_ration && !flag.sign_quiet && !flag.sign_rose && !flag.sign_dragon",
    "goto": "end_gate"
   },
   {
    "text": "走下跳板",
    "if": "flag.sign_keeper && !flag.sign_ration && !flag.sign_quiet && !flag.sign_rose && !flag.sign_dragon && !flag.sign_gate",
    "goto": "end_keeper"
   }
  ]
 },
 "end_ration": {
  "id": "end_ration",
  "title": "《配给本》",
  "art": "ev_hre",
  "loc": "阿兰蒂尔塔",
  "text": [
   "定稿那天，阿兰蒂尔塔的大厅里摆了四十张桌子。每张桌子上一支笔、一瓶墨、一块吸墨的毡子。签字的人从早上排起，排到大厅外头，又排下了台阶。",
   "签完的人往门口走，门口没有酒。有一个侏儒代表问了一句，礼宾官翻了翻文本，说条约里没写。",
   {
    "if": "flag.article_heads",
    "text": "念到第七款，{?party.middlesday:礼拜三|旁听席上一台机器}站了起来：机械人算人头。它站着听完，坐下，又站起来，去排登记的队了。"
   },
   {
    "if": "!flag.article_heads",
    "text": "第七款写的是“另议”。{?party.middlesday:礼拜三在旁听席上数着，|旁听席上有台机器在数，}这一款前后另议了十一回。"
   },
   {
    "if": "party.guilhem",
    "text": "配给局当天就挂了牌。头一任总稽核是吉列姆。他在任命书上签字的时候说，这是他这辈子最恨的一份差事，说完把袖子挽了起来。"
   },
   {
    "if": "is.god",
    "text": "份额表上有一行写着你的神号，后头的数空着。礼宾官拿着那一页来问你，你说不用填。"
   },
   "回到蜡烛铺，窗台上摆着那只空果酱罐。里头插着一枝薄荷，{?flag.etta_left:你一天浇一回水。|埃塔一天浇一回水。}"
  ],
  "ending": "ration"
 },
 "end_charter": {
  "id": "end_charter",
  "title": "《特许状》",
  "art": "load_2",
  "loc": "安本科斯特 · 塔厄尔",
  "text": [
   "塔厄尔的天文钟底下新挂了一块行情牌，黑漆底，白粉字，一个钟头擦一回。",
   "头一行是晶价，比 1809 年还低。第二行是到港的船：红利号，十二舱，气态，压砖。第三行是保险，后头注着一行小字：蓝肺另计。",
   {
    "if": "flag.article_charter && rep.charter >= 4",
    "text": "特许状印了五百份，起草人一栏是你的名字，在第二页，字比别人大一号。"
   },
   {
    "if": "!flag.partner_dead",
    "text": "德希尔德将军在《论坛报》上登了一则退役启事，三行字。启事登出来的第二天，他就不见了。"
   },
   {
    "if": "is.god",
    "text": "擦牌子的伙计认得你。他问你要不要也上一行，他好留个位子。"
   },
   "下午三点，伙计踩着梯子，在牌子最底下添了一行新的：位面，按吨。"
  ],
  "ending": "charter"
 },
 "end_quiet": {
  "id": "end_quiet",
  "title": "《静世纪》",
  "art": "ev_big_star_in_sky",
  "loc": "托拉普里亚卡港",
  "text": [
   "港务员把簿子转过来，让你自己写。你写了四个字：返港，无货。",
   "音叉沉在根上头那片海里。诺罗说那地方量不到底，谁要捞，得先把绳子接到明年。往后几十年，没人去接。",
   "诺罗问你后不后悔。你说这件事说得通。他想了想，说他爷爷也是这个道理：绕着走，一辈子没出过事。",
   {
    "if": "is.god",
    "text": "回程的船上，有个水手半夜来敲你的舱门，问你能不能把那根叉子捞回来。你说能。他等了一会儿，见你不动，回去睡了。"
   },
   "回到蜡烛铺，{?flag.etta_left:你把公司的账本|埃塔把账本}翻到最后一页。那儿贴着一张旧标签，是从罐子上揭下来的，上头写着两个字：别摇。"
  ],
  "ending": "quiet"
 },
 "end_rose": {
  "id": "end_rose",
  "title": "《玫瑰和约》",
  "art": "ev_mages_estate",
  "loc": "阿兰蒂尔塔",
  "text": [
   "闭幕那天，阿兰蒂尔塔的大厅里点了一千根蜡烛，一盏煤气灯也没有。魔杖托管会的人坐前三排，袍子是新做的，袖口绣着家纹。",
   {
    "if": "flag.crown_castine",
    "text": "卡斯蒂娜自己念的文本。念到第九条，她停下来喝了口水，碰了一下王冠，接着念，口气没变。"
   },
   {
    "if": "flag.crown_ioriel",
    "text": "闭幕前一个钟头，女王开了口，口气是十一世纪的。散会的时候，大厅里没有一个代表记得自己反对过。你记得，因为你当时在门外抽烟。{?flag.charmed_once:可你中过一回大咒，记得的也不全。|}"
   },
   "黑弹按条约禁了。各国的兵站把库存运到月河边上，一箱一箱沉下去，登记的人数到第四百箱，换了一支笔。",
   {
    "if": "is.god",
    "text": "托管会给你留了一个座，名牌上写着“阁下”。你没去坐，散会的时候那把椅子上落了一层蜡油。"
   },
   "{?party.middlesday:礼拜三|铸炉街的机器}每个礼拜三去托管会领一张许可。许可是蓝纸，盖三个章，有效七天。"
  ],
  "ending": "rose"
 },
 "end_dragon": {
  "id": "end_dragon",
  "title": "《他的帝国》",
  "art": "ev_aakhet_dragon_smug",
  "loc": "阿拉莫莱",
  "text": [
   {
    "if": "flag.partner_signed",
    "text": "约是在船上签的。他那一栏的字写得很大，写完把笔还给了你，笔杆上留着一道牙印。"
   },
   "阿拉莫莱的黄昏，一万盏灯一盏一盏点起来。点灯的人沿着大殿的台阶往上走，走到顶，那张王座上坐着人了。",
   "他进宫那天走了一圈，说宫殿修得小。祭司们记下来，第二天就开始量地。",
   "他签的那份约你也签了，约上有一条写着他得回信。头一个月，他回了四百封。",
   {
    "if": "flag.struck_own_name",
    "text": "公司的章程上，你的名字划着一道。{?flag.etta_left:没人去涂它。|埃塔没把它涂掉，她说账上的东西不许涂。}"
   },
   {
    "if": "is.god",
    "text": "他头一封信是写给你的，问的还是那一句：你是怎么办到的。"
   },
   "回到安本科斯特，{?flag.etta_left:公司|埃塔}收到头一封盖着青铜印的公函。信很长，谈的是天气。"
  ],
  "ending": "dragon"
 },
 "end_gate": {
  "id": "end_gate",
  "title": "《开门》",
  "art": "load_3",
  "loc": "天门前",
  "text": [
   {
    "if": "flag.gate_key",
    "text": "门开了一掌宽，就停在那儿，再推不动，也关不上。门缝里递出来的头一样东西是一叠状子，拿红绳捆着。"
   },
   {
    "if": "flag.gate_key",
    "text": "那一季，魔法野了。舱底区的井水自己往上冒，冒到三楼；梨林的梨树一夜开了两回花。然后稳了下来。"
   },
   {
    "if": "flag.gate_forced",
    "text": "撞锤留在了门槛上。门开得比钥匙开的宽，淌出来的东西一样多，名目是采矿特许权。"
   },
   {
    "if": "flag.gate_forced",
    "text": "红衣的人跟着出来了，一家一家敲门，查赖掉一死的。{?flag.dainuich_noticed:马利安德那家天黑才上菜的，门口停了一辆红篷车。|}"
   },
   "七号线的夜班，所有芯核在同一夜醒了。七八三醒的那天是礼拜三。它放下扳手，问今天礼拜几。",
   {
    "if": "is.god",
    "text": "蜡烛铺门口排起了队，排队的人都想问你门那边是什么。你说你没进去。他们不信，接着排。"
   },
   "{?flag.gate_key:门口那盏灯还亮着，是托丽丝的。|门槛上那道印子，有人拿粉笔描了一圈。}"
  ],
  "ending": "gate"
 },
 "end_keeper": {
  "id": "end_keeper",
  "title": "《守门人》",
  "art": "ev_priest_phantom",
  "loc": "天门前",
  "text": [
   "约是隔着钥匙孔立的。门这边念一句，门那边答一句，{?party.narwen:娜尔雯|你}记，记了九天。",
   "门这边的头一条是门不开。门那边的头一条只有一句：外头得有人守着，守的人得记数。",
   {
    "if": "flag.keeper_narwen",
    "text": "娜尔雯留下了。她把那条小船翻过来，船底朝下，坐进去，从袖子里摸出一把新刻刀。"
   },
   {
    "if": "flag.keeper_self",
    "text": "留下的是你。公司的人上船的时候，{?flag.etta_left:有人|埃塔}在名册上你那一栏写了两个字：驻外。"
   },
   {
    "if": "flag.angels_follow",
    "text": "回去的船上多了一舱天使，四十一个，每人背着一卷帆布。"
   },
   {
    "if": "is.god",
    "text": "门后的声音认得你。它们每回开口，先叫你的神号，再说别的。"
   },
   "船开出去半里，回头还看得见坡底下那条小船。船帮上新刻了头一道。"
  ],
  "ending": "keeper"
 },
 "end_seat": {
  "id": "end_seat",
  "title": "《空座》",
  "art": "load_17",
  "text": [
   {
    "if": "flag.seat_sat",
    "text": "公司的人在门外等了一夜。天亮的时候，浅滩上的水涨了一寸，水是暖的。断过翅膀的那位天使头一个跪下，跪完站起来，问你今天有什么吩咐。"
   },
   {
    "if": "flag.seat_sat",
    "text": "回到安本科斯特，你头一回出门买烟，舱底区的路灯暗了一格。卖烟的老太太看了看灯，又看了看你，把找的零钱多数了一遍。"
   },
   {
    "if": "flag.seat_locked",
    "text": "门在你身后合上了。外头那一侧的钥匙孔，第二天早上没了，只剩一块平平的石头。"
   },
   {
    "if": "flag.seat_locked",
    "text": "{?party.narwen:娜尔雯在门槛前守着，数碎片的声音，数到零，合上了本子。|碎片在匣子里彻底黑了，再没亮过。}门槛前的灯留着，没人去吹。"
   },
   {
    "if": "flag.seat_carried",
    "text": "旧斗兽场的正当中摆着一把木椅子，漆掉了一块。议会挪到了侧厅开，正厅留给它。"
   },
   {
    "if": "flag.seat_carried",
    "text": "每天都有人来看。有人坐上去试试，坐一会儿就下来了，说硌得慌。治安军在椅子边上站了一班岗，岗哨的登记簿上写的是“神座，空”。"
   },
   {
    "if": "flag.council_called",
    "text": "第十二次泛神会议隔着传音石开了七天，开到第四天，有两座神殿的传音石裂了，后头的票是派人骑马送的。"
   },
   "会议的结果贴在圣奥琪大教堂的门上，只有一句公文。贴出来那天，门口卖果酱罐的摊子多了三个。"
  ],
  "ending": "seat"
 }
};
