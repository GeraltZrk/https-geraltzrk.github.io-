// s1820 / finale.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "f_01": {
  "id": "f_01",
  "title": "音叉",
  "chapter": "终章 · 敲门",
  "art": "load_2",
  "loc": "西尔·伯肯之地外海 · 寰宇之根上方",
  "text": [
   "十五年前的今天，阿尔瓦就是在这片海上往桅杆上敲了那么一下。如今你们的船也停在了老地方，从托拉普里亚卡港往南走几里就到，海床到了船底下猛地塌下去，深得量不到底。领航员诺罗·数浪蹲在船头，把一截打了结的绳子往水里放，绳子直直地往下走，一截放完了还没着底，只好又接上一截。",
   {
    "if": "flag.noro_warned",
    "speaker": "诺罗",
    "text": "上回我话才说了一半，你就听懂了，这回我索性给你说全了吧。它张嘴之前，海面要先平下来，等海一平，你就赶紧找个东西抓牢。"
   },
   {
    "if": "!flag.noro_warned",
    "speaker": "诺罗",
    "text": "我爷爷是绕着这儿走的，我爹也绕着走，到了我这一辈呢，倒收了人家的钱往里头开。你们坎诺人管这个叫进步，是吧？"
   },
   {
    "if": "flag.jar_asked",
    "text": "别摇自己从罐子里钻了出来，飞到桅顶上扇了三下翅膀，那个音就出来了，十五年前在史家会的讲堂里，她开口纠正标签的时候，用的也是这个调门。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "你把罐子贴在了桅杆上。里头那位一个字也没说，可翅膀自己在响，响得还很准。"
   },
   {
    "if": "(flag.freq_treaty || flag.freq_bought || flag.freq_stolen) && !flag.jar_asked && !flag.jar_used_unasked",
    "text": "音叉从匣子里取出来的时候冰凉冰凉的，拿手怎么焐也焐不热，叉柄上还刻着贾赫港金库的编号，你拿它朝桅杆上敲了一下。"
   },
   {
    "if": "flag.jar_sold",
    "text": "布西拉尔的领航艇走在前头，那一下由艇上的人替你们敲，你们船上的罐子已经不在了，埃塔的账本上，那一栏写的是“已交付”。"
   },
   {
    "if": "flag.spire_tuned",
    "text": "往东半里的海面上立着一道水，既不倒，也不流，那是卡尔希尔调过音的尖碑在应声，要走那边也行。"
   },
   {
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned)",
    "text": "船上既没有音叉，也没有罐子，更没有调过音的石头。领航艇倒是有一条，是布西拉尔的，船头挂着价牌，上头写着五百金冠，现付。"
   },
   "海面平了下来，平得都照得见桅杆上的铆钉，紧接着船底下一空，整条船往左一歪，四周的水一下子竖了起来，竖成了一口井。",
   {
    "if": "origin == 'karshyr'",
    "text": "上回你看这个漩涡的时候，脚底下踩的是托拉普里亚卡码头的条石，手里还拎着一筐别人的草药，这回你可是在它嘴里了。"
   },
   {
    "if": "is.god",
    "text": "漩涡还没张开，海面倒先朝你这边低下去一截。诺罗把绳子收了回来，看了你一眼，挪到桅杆另一边去了。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）十一个月的饷到现在还没补给我。我要是掉下去了，这笔账就归你了。"
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
     "text": "帆收了一半，舵打到了底，船顺着水墙转了三圈，转到第四圈，底下亮了，诺罗这才松开缆绳，手心里勒出了一道白印。",
     "effects": [
      "xp 300"
     ],
     "goto": "f_02"
    },
    "fail": {
     "text": "转到第二圈，一道浪迎头拍过来，拴舢板的缆绳断了，舢板抢在你们前头掉了下去，再也没见着，你也一头撞在绞盘上，满嘴都是铁腥味。",
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
     "text": "船头刚一碰上那道水，水就往两边让开了，没起浪，也没一点声音，帆还鼓着呢，船已经到了另一边。",
     "effects": [
      "rep south +1",
      "xp 300"
     ],
     "goto": "f_02"
    },
    "fail": {
     "text": "那道水认得尖碑，却不认得你们的舵。船在里头打了个横，左舷的栏杆给绞成了麻花。",
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
    "result": "领航艇上的人收了钱，数了两遍，开好收据，这才替你们敲了那一下。",
    "goto": "f_02"
   },
   {
    "text": "打借据，先欠着",
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned) && gold < 500",
    "effects": [
     "rep charter -1"
    ],
    "result": "领航员看了看公司的借据，又看了看你，提笔在借据背面添了一行利息，九分。",
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
    "result": "水踩在你脚底下是硬的，漩涡自己张开了，这一张开就再也没合上。你们的船跟着你下去了，一直等在海峡口的三条船也跟了下来，一条挂的是卡拉桑尼的旗，另外两条的旗你不认得，诺罗在船尾数了数，用佐赫比迪话骂了一句。",
    "goto": "f_02"
   }
  ]
 },
 "f_02": {
  "id": "f_02",
  "title": "把魔法当天气的海",
  "loc": "妖精界 · 一片没有岸的海",
  "text": [
   "出来的时候是白天，天上没有太阳，可天是亮的。海平得发黑，四面都望不见岸，只有船底下有一条颜色浅些的水带，诺罗管它叫“径”，船只能在这上头走，要是偏出去一步，外头就过去一年了。",
   "这儿的魔法跟天气是一回事，起风的时候，厨子划根火柴，灶膛里能腾起一人高的火，等到没风了，{?is.caster:你把一整段咒念完|船上的法师把一整段咒念完}，指尖上还是什么也没有。空气里有股味道，像刚切开的青苹果，吸多了舌头会发麻。",
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "text": "罐子里起了雾，别摇浑身都在发亮，亮得甲板上的人只能眯着眼睛看她。"
   },
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "speaker": "别摇",
    "text": "看什么看呀，这才叫空气呢！你们那边的那个，都是人家喘剩下的。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "罐子里亮着，亮得很足，可别摇背对着你，一句话也不说。"
   },
   {
    "if": "flag.jar_sold",
    "text": "甲板上原先搁罐子的地方，木头上还留着一圈浅色的印子。"
   },
   {
    "if": "flag.doors_flung",
    "text": "锚地那头多出了两面旗，是跟着你下来的船，人家已经在往下放小艇了。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "今天几号了？"
   },
   {
    "if": "!flag.etta_left",
    "text": "谁也答不上来，埃塔只好在账本的页眉上写了“日期不详”四个字，写完盯着看了老半天，打 1744 年起，这四个字她还是头一回写。"
   },
   {
    "if": "is.god",
    "text": "风是跟着你走的，你站到哪一边，哪一边的帆就鼓起来，水手们也开始往你脚边放东西了，有人放了一枚铜扣子，有人放了半块饼。"
   }
  ],
  "first": [
   "codex c_feyrealm",
   "codex c_aerated"
  ],
  "shop": {
   "name": "事务长",
   "blurb": "管着船上的药和酒，账记得比埃塔还细，概不赊账。",
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
     "text": "你们盯了一天一夜，盯得眼睛都酸了，好在船一回也没偏出去。",
     "effects": [
      "flag fx_path_held",
      "xp 200"
     ]
    },
    "fail": {
     "text": "后半夜起了一阵风，船头往外偏了半步，马上又拨了回来，可管缆的老水手第二天早上一起来，胡子已经白了一半，他摸着下巴问今年是哪一年，谁也答不上来。",
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
    "result": "径边上其实有两种颜色，在坎诺人眼里却都是一样的绿。你指给诺罗看，诺罗拿炭笔在船舷上描了两道。{?flag.jar_sold:|罐子里那位说，“勿摇”这个叫法她已经记下了，这一笔还没跟你算呢。}"
   },
   {
    "text": "陪吉列姆在船头站一会儿",
    "if": "party.guilhem",
    "once": true,
    "effects": [
     "approval guilhem +1"
    ],
    "result": "他的头发全白了，往风里一站格外显眼。“气态的晶体就是这东西，理论上是，”他又吸了一口，“实际上呢，我这会儿正喘着它，大夫要是知道了，非把我的咖啡票也收回去不可。”"
   },
   {
    "text": "问布拉在擦什么",
    "if": "party.bura",
    "once": true,
    "effects": [
     "approval bura +1"
    ],
    "result": "她在擦枪，其实枪在这儿是打不响的，她试过了，火药潮得很古怪。“（铰链咔的一声。）照样得擦，科琳可不挑地方。”"
   },
   {
    "text": "问礼拜三胸口为什么在响",
    "if": "party.middlesday",
    "once": true,
    "effects": [
     "approval middlesday +1"
    ],
    "result": "“（不确定。）芯核在吃这儿的空气。（陈述。）我比平常快了百分之四。（担心。）我不知道该不该让它停下来。”它把手按在胸口上按了好一会儿，没有停。"
   },
   {
    "text": "看娜尔雯带的海图",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": "热忱派探过两回险，各有一张海图，她抄的是第二回的那张。“上回有人照着这张图走，还是 1712 年的事，回去的人都说门是锁着的，”她把眼镜往上推了推，“我倒想看看，那把锁是什么样子的。”"
   },
   {
    "text": "问别摇这片海上有什么规矩",
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "once": true,
    "effects": [
     "flag fx_asked_rules"
    ],
    "result": "她数了三条给你听，头一条是别跟人道谢，第二条是别报真名，第三条是答应了的事回头别改口，数完又添了一句：“就数这第三条，你们最做不到。”"
   },
   {
    "text": "跟埃塔对一对账",
    "if": "!flag.etta_left",
    "once": true,
    "effects": [
     "gold +150"
    ],
    "result": "埃塔翻到 1789 年那一页，里头夹着一张单子，上头写着“出海不归，备用”，四十六年了从来没动过，她把单子撕下来交给你，说这一趟算得上出海。"
   },
   {
    "text": "在舱里睡一整觉",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "你睡了一觉，醒来的时候天还是那么亮，怀表停在三点十分上，上了弦也不走。"
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
   "船走了三天，前头冒起了烟。原来是三条铁壳船在那儿下了锚，船身漆着卡拉桑尼的灰蓝两色，每条船顶上都竖着一根管子，比桅杆还高，一直通到天上去。泵咚、咚地响着，一下接着一下，从舱里压出来的晶体就码在甲板上，一块有拳头那么大，还冒着凉气。",
   "船员干上一会儿就要咳，咳出来的痰是蓝的，啐在铁板上还要亮一下才暗下去，他们管这毛病叫蓝肺，管自己叫抽工，一班干八个钟头，工钱是岸上的三倍。",
   "远处的水面上站着几点光，既不动，也不往这边靠。{?flag.jar_sold:诺罗说，那东西打你们一进来就跟着了。|别摇说那是她家里的人，在看你们怎么对付先来的这一批。}",
   {
    "if": "flag.gauge_burned",
    "text": "当中那条船叫红利号，船头架着一台东西，包着铜皮，接着三根导管，这样子你是见过的，就是魂秤，只不过是倒过来接的。蒂尔妲蹲在旁边，手里捏着图纸，图纸第三页上写的还是个“秤”字。"
   },
   {
    "if": "flag.ship_client && flag.client_charter",
    "text": "你脚底下踩的正是红利号的甲板。船队的总办端着两杯酒朝你走过来，雇你们的就是他的东家。"
   },
   {
    "if": "is.god",
    "text": "泵停了一下，总办抬头看了看管子，又看了看你，叫人去把保单拿来，要是泵是神给弄停的，那就算不可抗力，保险行得赔。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）那台东西跟秤用的是同一张图。（不舒服。）它一响，我的胸口就往那边偏。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "工钱是三倍，一班八个钟头，咳出来的是蓝的。这笔买卖算下来，不亏的只有船东一个。"
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
    "result": "你看了一刻钟就看明白了，撞锤和魂秤用的是同一张图，只是导管倒过来接，读数的针换成了吸口，管子根上还有一道阀，把它拧下来，这东西就只是一台秤了。"
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
    "result": "你领下来七个人，个个都是咳出了血丝的，总办倒没拦着，只在本子上把这七个名字勾了，工钱给算到当天中午。"
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
     "text": "她听你说完，把图纸翻到第三页，指着上头那个“秤”字看了很久，然后爬上撞锤，把那道阀拧了下来。撞锤咣的一声停了，船上的人等了老半天，也没等来下一声。",
     "effects": [
      "flag siphon_taken",
      "var jar_trust +1",
      "approval middlesday +1",
      "xp 600"
     ],
     "goto": "f_04"
    },
    "fail": {
     "text": "“这是秤（好吧，倒过来接就是炉子，这个我画的时候就知道（第三页上写着呢））。可汇票不等人哪。”她把图纸一卷，朝舱口招了招手。",
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
     "text": "总办听完，把两杯酒都自己喝了，叫人把三条船的泵全关掉。“就三天，三天以后庭上要是还没个说法，我照旧开泵。”",
     "effects": [
      "flag fx_pumps_paused",
      "rep south +1"
     ],
     "goto": "f_04"
    },
    "fail": {
     "text": "总办听你说完，只问了一句，这三天的工钱谁来出。你答不上来，泵也就接着响下去了。",
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
    "result": "你们的船从三条铁壳船旁边绕了过去，离得最近的时候，听得见泵后头那一声长长的抽气，水面上那几点光也跟着暗了一下。",
    "goto": "f_04"
   }
  ]
 },
 "f_03f": {
  "id": "f_03f",
  "title": "登船",
  "text": [
   "你们是顺着舷梯上去的，一路没人拦，可一上甲板，管泵的奇械师就丢下扳手换了短枪，戴面罩的人也从舱口一个接一个冒了出来。",
   "撞锤在船头转了个向，{?party.guilhem:吉列姆的咒才念到一半，就觉得手里的东西叫那根管子抽走了，气得骂了一句条例编号。|它一吸气，你袖子里的东西就往那边飘。}抽工们都缩在绞盘后头，没有一个上来帮忙的，也没有一个走开的。",
   {
    "if": "flag.ship_client && flag.client_charter",
    "text": "这一仗是在你雇主的甲板上打的，总办就站在舱楼上看着，手里还端着那杯酒。"
   }
  ],
  "choices": [
   {
    "text": "动手",
    "if": "partysize >= 4",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队从舱口一个接一个冒出来，人人戴着皮面罩，面罩上安着个铜嘴，撞锤也在船头转了个向，吸口对准了你们。",
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
       "desc": "管子从撞锤根上一直通到天上，砍断了它，抽进去的气就会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了，抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤用的是同一张图，把那道阀拧下来，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风也停了。管泵的人愣在原地，直瞪着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "谁知这阀是反丝的，你拧的那半圈反倒把它拧得更紧了，撞锤趁势抽了你一口，袖子里的东西全飘了过去。",
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
     "intro": "陆战队从舱口一个接一个冒出来，人人戴着皮面罩，面罩上安着个铜嘴，撞锤也在船头转了个向，吸口对准了你们。",
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
       "desc": "管子从撞锤根上一直通到天上，砍断了它，抽进去的气就会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了，抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤用的是同一张图，把那道阀拧下来，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风也停了。管泵的人愣在原地，直瞪着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "谁知这阀是反丝的，你拧的那半圈反倒把它拧得更紧了，撞锤趁势抽了你一口，袖子里的东西全飘了过去。",
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
     "intro": "陆战队从舱口一个接一个冒出来，人人戴着皮面罩，面罩上安着个铜嘴，撞锤也在船头转了个向，吸口对准了你们。",
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
       "desc": "管子从撞锤根上一直通到天上，砍断了它，抽进去的气就会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了，抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤用的是同一张图，把那道阀拧下来，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风也停了。管泵的人愣在原地，直瞪着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "谁知这阀是反丝的，你拧的那半圈反倒把它拧得更紧了，撞锤趁势抽了你一口，袖子里的东西全飘了过去。",
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
     "intro": "陆战队从舱口一个接一个冒出来，人人戴着皮面罩，面罩上安着个铜嘴，撞锤也在船头转了个向，吸口对准了你们。",
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
       "desc": "管子从撞锤根上一直通到天上，砍断了它，抽进去的气就会倒灌回来",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了，抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外头包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤和魂秤用的是同一张图，把那道阀拧下来，它就只是一台秤",
       "check": {
        "skill": "sleight",
        "alt": [
         "investigation"
        ],
        "dc": 16,
        "adv": "flag.fx_ram_read"
       },
       "success": {
        "text": "阀门转了半圈，撞锤咣的一声没了动静，吸口里的风也停了。管泵的人愣在原地，直瞪着自己手里的扳手。",
        "applyAll": {
         "cond": "dazed",
         "turns": 2
        }
       },
       "fail": {
        "text": "谁知这阀是反丝的，你拧的那半圈反倒把它拧得更紧了，撞锤趁势抽了你一口，袖子里的东西全飘了过去。",
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
   "到了第五天，潮水停了。海面平得能搁住一碗水，船不晃，帆不响，连船底下那条径都不流了。水面上站着一圈光，凑近了看才知道是人，只有巴掌大，穿着树叶缝的衣裳，一个挨着一个，足足站满了半里地。",
   {
    "if": "!flag.jar_sold",
    "text": "他们冲着罐子行礼，嘴里叫的是一个你从没听过的官衔，量潮使，别摇从罐子里出来，掸了掸翅膀上的雾，站到他们那边去了。原来她是给派去让人抓的，彼岸想看看马上要来的这批人说话算不算数。"
   },
   {
    "if": "flag.jar_sold",
    "text": "他们冲着你们的船行了礼，行完才发现罐子不在，有个穿灰叶子的往前飞了一步，手里捧着一卷东西，那是别摇留在贾赫港金库里的口供，一个字一个字记下来的。"
   },
   "庭上先念各家的草约。{?flag.article_ration:配给条款念了一遍，|}{?flag.article_ban:禁令念了一遍，|}{?flag.article_charter:特许条款念了两遍，念的人一直皱着眉头，|}{?flag.silcalas_share:念到卡拉桑尼那份分成的时候，有人笑出了声，|}{?flag.signed_partner_paper:你签过字的那份合伙人文件也念了，念到你的名字，停了一下，|}草约念完，接着念她那本账。",
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
    "text": "“1834 年。取音之前问过，价是主家自己付的。”别摇当庭把收下的东西摆了出来，是一小团光，那是你的一段记忆，可到底是哪一段，你自己也认不出来了。"
   },
   {
    "if": "flag.jar_asked && flag.jar_price_companion",
    "text": "“1834 年。取音之前问过，价是主家的同伴付的。”她把收下的那样东西摆了出来，是一小团光，付账的那位看了它一眼，怎么也想不起那是什么。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "“1834 年。没问，取音一次。”别摇抬起手来，指着你。"
   },
   {
    "if": "flag.jar_sold",
    "text": "“1834 年。交付布西拉尔金库。”念的人把口供卷起来，朝你指了指。"
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
    "text": "账念完了，别摇报了个总数，比你料想的要多。庭上的人你看看我，我看看你，都把手里的叶子放下了。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "她记得比我还细。我可不喜欢这样。"
   },
   {
    "if": "is.god",
    "text": "念账的老仙子念完了，转过身来对着你。照大妖精公约，像你这么大个头的，算不得签约的一方。"
   },
   {
    "if": "is.god",
    "speaker": "念账的",
    "text": "你签了是不算数的。你身边随便哪一个会死的来签，那就算数。"
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
    "result": "价开出来了，份额可以给，得拿人情、节日和真名来换，金冠一个也不收，别摇把空罐子还给了你，说这东西你们那边还用得着。",
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
     "text": "你没道谢，也没报真名，答应过的事一样一样都认了下来。念账的老仙子在账尾添了一笔，把账合上了，别摇也把空罐子还给了你。",
     "effects": [
      "flag court_signs",
      "item +jam_jar",
      "quest q_jar done"
     ],
     "goto": "f_05"
    },
    "fail": {
     "text": "你才说到第三句，老仙子就抬手止住了你，说：“你们那边的话，一说出口就变，我们这边不收。”潮水又动了起来。",
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
    "result": "庭散了，潮水重新动了起来，那一圈光一盏接一盏地灭了。往后能走的，只剩下用强的那几条路。",
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
    "result": "你说公司不拿真名做买卖，老仙子点了点头，看样子早就料到了。别摇没留你，也没送你，把空罐子往你脚边一搁就走了。",
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
    "text": "庭上的人还没散尽，海那头的云就裂开了一道口子，有样青铜色的东西从里头掉出来，掉到半道上，张开了翅膀。"
   },
   {
    "if": "!flag.partner_to_hakhepra",
    "text": "他比传说里的要小，翼展也就三条船那么长，左边那只翅膀一扇一顿，每扇三下就要歪一回，自从在泽拉特挨了那一炮，他这还是头一回飞。"
   },
   {
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "text": "他在你们桅杆顶上兜了两圈，然后落到水上，水只没到他胸口，周围直冒白汽。"
   },
   {
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "speaker": "阿赫特",
    "text": "十五年的报告我全看过了，字写得是难看，数目倒都对。那帮小东西呢，不肯跟我签，说是嫌我个头太大。我活了三千岁，还是头一回有人嫌我大！"
   },
   {
    "if": "flag.partner_to_guns",
    "text": "他身上带着新伤，鳞片一道一道翻着，都是炮弹犁出来的，他没有往下落，就停在半空里吸了一口气，胸口亮了起来。"
   },
   {
    "if": "flag.partner_to_hakhepra",
    "text": "傍晚来了一条小船，船头点着一盏灯，送信的人穿着哈赫普拉的袍子。信是贾内比萨写的，字很工整，说祂回家了，进宫那天走了一圈，嫌宫殿修得小，信尾问了公司好，没提钱的事。"
   },
   {
    "if": "is.god && !flag.partner_to_hakhepra && !flag.partner_to_guns",
    "text": "他谁也不看，只看着你。“我叫人拜了三千年，你呢，点了一下就成了。”他停了停，又说，“我问你一句话，你得照实说，等到没人拜你了，你打算怎么办？”"
   },
   {
    "if": "party.bura && !flag.partner_to_hakhepra",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）将军，1810 年我们团的花名册是你签的字，欠饷的那一栏也是你签的。"
   },
   {
    "if": "party.guilhem && !flag.partner_to_hakhepra",
    "speaker": "吉列姆",
    "text": "龙是会飞的，理论上是这样。实际上会飞的，我今天还是头一回见着。"
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
    "result": "你答了，他听完直摇头，说：“你要么是在骗我，要么是连你自己也不知道。”他说后一样比骗人还糟，说完就等着你往下讲。"
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
     "text": "你给他算了一笔账，一头三千岁的龙，对上一条只载着二十几个人的船，打赢了算得了什么，万一打输了，报上又会怎么写。他听完哼了一声，把翅膀收了起来，只说了两个字：“平手。”",
     "effects": [
      "flag partner_draw",
      "rep partner +1"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "“将军”两个字你才刚出口，他就笑了，说：“我当将军那会儿，你爷爷还没断奶呢。”说着他往后一仰，从水里飞了起来。",
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
     "text": "“瓦伦盖尔特问您好，他还问，没人拜您以后，您睡得着吗？”他一动也没动，过了很久才开口，问的是阿拉莫莱每天几点钟点灯，可谁也答不上来。他转过身往南飞走了，左边那只翅膀还是一扇一顿的。",
     "effects": [
      "flag partner_draw",
      "flag partner_goes_home"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "他才听到一半，喉咙里就响了一声，海面上的白汽一下子浓了。“洇河里的那条泥鳅！”他飞了起来。",
     "goto": "f_05f"
    }
   },
   {
    "text": "请他以股东的身份上船列席",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns && flag.signed_partner_paper",
    "effects": [
     "rep partner +1"
    ],
    "result": "他变回了人样，从水里走上船来，身上那套将军制服居然是干的，他在甲板上找了把椅子坐下，翘起腿，说他只是来听听。",
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
     "text": "你喊的是他的名字，旧的那一个，他胸口的光暗了下去，身子落到了水上，呛了一口白汽。“平手，”他说，“这一仗也算平手。”",
     "effects": [
      "flag partner_draw"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "他没听见，要不就是听见了也不在乎。",
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
    "result": "你把信折好，夹进了埃塔的账本里。送信的人没有马上走，在船头坐了一会儿，临走把那盏灯留下了。",
    "goto": "f_05b"
   }
  ]
 },
 "f_05f": {
  "id": "f_05f",
  "title": "泽拉特以后",
  "art": "ev_dragon_attack",
  "text": [
   "他一飞起来，底下的水就塌出了一个坑，头一口吐出来的是雷，打在海面上，水炸开了花，一船人的头发全竖了起来。",
   "他飞得不稳，左边那只翅膀一扇一顿的，{?flag.partner_to_guns:新伤都在他肚皮底下，一道一道还冒着烟。|毕竟是三千岁的龙了，又有四十五年没飞过。}每回往下扑之前，他都要先看一眼船上有没有炮。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）他的左翼每扇三下就歪一回。（建议。）趁第三下打。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人跟一位神动手，还是在画上，画上的那些人后来都死了。我也就是说一声。"
   }
  ],
  "choices": [
   {
    "text": "迎上去",
    "if": "partysize >= 4",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "他一飞起来，底下的水就塌出了一个坑，先是胸口亮了，接着就是雷。",
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
       "desc": "1790 年，就是专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这两个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，看样子是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口气冲着你就来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，每扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得准准的，就是第三下。你一声喊，全船的枪和咒都朝他左肋底下打了过去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到了第三下，他偏偏又扇了第四下，尾巴跟着扫过来，扫得你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股的日子和数目",
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
        "text": "你从 1820 年的头一张汇票念起，一直念到血的股，念到机房的代持账户，他在半空里愣住了，大概是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他替你纠正过来，纠正完了就朝你喷了一口。",
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
     "intro": "他一飞起来，底下的水就塌出了一个坑，先是胸口亮了，接着就是雷。",
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
       "desc": "1790 年，就是专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这两个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，看样子是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口气冲着你就来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，每扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得准准的，就是第三下。你一声喊，全船的枪和咒都朝他左肋底下打了过去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到了第三下，他偏偏又扇了第四下，尾巴跟着扫过来，扫得你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股的日子和数目",
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
        "text": "你从 1820 年的头一张汇票念起，一直念到血的股，念到机房的代持账户，他在半空里愣住了，大概是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他替你纠正过来，纠正完了就朝你喷了一口。",
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
     "intro": "他一飞起来，底下的水就塌出了一个坑，先是胸口亮了，接着就是雷。",
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
       "desc": "1790 年，就是专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这两个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，看样子是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口气冲着你就来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，每扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得准准的，就是第三下。你一声喊，全船的枪和咒都朝他左肋底下打了过去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到了第三下，他偏偏又扇了第四下，尾巴跟着扫过来，扫得你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股的日子和数目",
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
        "text": "你从 1820 年的头一张汇票念起，一直念到血的股，念到机房的代持账户，他在半空里愣住了，大概是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他替你纠正过来，纠正完了就朝你喷了一口。",
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
     "intro": "他一飞起来，底下的水就塌出了一个坑，先是胸口亮了，接着就是雷。",
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
       "desc": "1790 年，就是专打龙鳞的炮把他从天上轰进了湖里",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这两个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，看样子是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口气冲着你就来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "一扇一顿，每扇三下要歪一回",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得准准的，就是第三下。你一声喊，全船的枪和咒都朝他左肋底下打了过去。",
        "applyAll": {
         "cond": "exposed",
         "turns": 3
        }
       },
       "fail": {
        "text": "你数到了第三下，他偏偏又扇了第四下，尾巴跟着扫过来，扫得你在甲板上滚了两圈。",
        "selfDmg": "1d10"
       }
      },
      {
       "id": "ledger",
       "name": "念他这十五年的账",
       "desc": "每一笔汇票、每一份入股的日子和数目",
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
        "text": "你从 1820 年的头一张汇票念起，一直念到血的股，念到机房的代持账户，他在半空里愣住了，大概是头一回听见有人把他的事一笔一笔念出来。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个年份。他替你纠正过来，纠正完了就朝你喷了一口。",
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
   "他掉进了海里，落水的地方水都开了锅，等再浮上来，他已经是人的样子了，穿着那身共和国的将军制服，浑身湿透，左边的袖子空了半截。",
   {
    "speaker": "阿赫特",
    "text": "平手。"
   },
   "他扒着你们的船舷，却不往上爬，青铜色的指甲一根一根都抠进了木头里。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）把他拉上来。不管是死的还是活的，总得有人签收。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "对他客气一点吧。他活了三千年，我们当中可没有谁活过这么久。"
   },
   {
    "if": "is.god",
    "text": "他看着你，并没有求你。“你点一下就行了，”他说，“你连这个都用不着学。”"
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
    "result": "他在甲板上坐了一会儿，把袖子拧干，说这一仗是平手，你最好也这么写，说完他就下了水，往南游出去一段才飞起来，飞得很低。",
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
    "result": "他在船舷上又扒了一会儿，手指一根一根松开，沉了下去，那片海是很深的。阿拉莫莱今天黄昏照样会点灯，不会有人去告诉他们。",
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
    "text": "他把庭冲散了，那一圈光四下里飞开，有几点再也没亮起来。他落到你们的桅杆顶上，变回了人样，制服是干的，翘着腿，就等你签字了。"
   },
   "过了平潮庭那片水再往外，海的颜色就变了，先从黑绿变成铅灰，再往外就是白的，诺罗说，那边连自家爷爷的爷爷都没去过。要往外走，总得有个认路的。",
   {
    "if": "flag.alvar_pilot",
    "text": "阿尔瓦站在船头，两只山羊角已经从帽子里顶了出来，他说那边有一座城、一片浅滩，还有一扇门，一样比一样有意思，说完自己先笑了起来。"
   },
   {
    "if": "flag.pilots_paid",
    "text": "诺罗手下的人拿到了领航权，往外的水路他们也认得，只是开船之前得先拜上一拜。"
   },
   {
    "if": "party.narwen || flag.narwen_custodian",
    "text": "娜尔雯摊开热忱派第二回探险的海图，拿指甲顺着一条线划过去，一直划到了纸边上。"
   },
   {
    "if": "flag.salvation_sails",
    "text": "得救号已经起锚往外走了，船尾挂着一盏灯，你们只管跟着那盏灯走就行。"
   },
   {
    "if": "is.god",
    "text": "你往外望去，看得见那条径一直通到什么地方。船上的人都不看海图了，全看着你。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "往外走，账上我就记“远洋”，往回走，就记“返航”。这两样我都写得动，你来挑吧。"
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
    "result": "船掉了头，回锚地的路上，你们在甲板上睡了半天。",
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
   "又走了十一天，雾里冒出一座城来。这是卡斯托纳斯，十二年前你们去过的那一座，可眼前这座足足大了三倍，城墙齐齐整整，塔也一座不少，还是巨龙苏醒以前的老样子，街上连盏煤气灯都没有。城墙外头一圈一圈的，全是后来的人盖的房子，哪朝哪代的都有。",
   "满街都是排队的人，人人手里捏着一张纸条，上头写着号，穿红袍的办事员沿着队伍走，肩上扛着镰刀，刀口朝外。队伍的最前头摆着一排桌子，可桌子后头一个人也没有，听队尾的人说，这条队已经有一百多年没往前挪过了。",
   "活人也可以在这儿住下，只要肯守红衣的规矩，规矩就贴在城门口，一共四条，头一条是不许插队。所以在这儿想问哪个死人一句话，得先让办事员放你到前头去。",
   {
    "if": "is.immortal",
    "text": "红衣的审计在那排空桌子上摆了一份卷宗，厚厚的一本，封皮上写的是你的名字。他们带不走你，就当着你的面，把同船每一个人的名字挨个抄了一遍，办事员抄完抬起头来看你，那眼神分明是在看一笔呆账。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "对他们客气一点吧。他们都排了一百年了，我们可是连一天也没排过。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "一百年都不挪窝。（铰链咔的一声。）比陆军部补饷还慢。"
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
     "text": "他还是十四五岁的样子，手里还攥着那块砖。你问他那一枪是谁开的，他说：“我没看见，”说着把砖翻了个面，“我那会儿正看着手里这个呢。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "办事员不肯放你过去，你只好隔着三条街喊，他听见了，也喊回来一句，可你只听全了后半截：“……手里这个。”暗影位面的寒气从脚底往上爬，已经爬到了膝盖。",
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
     "text": "她站着，死了也还是站着。你问她账本最后一栏是多少，她说：“八个席位，空着六个，这儿也得排队。年轻人，我的队你可插不了。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着一片人头喊她。她转过脸来，冲你说了一个数，那个数太长，你只记住了头两位。寒气已经爬上了膝盖。",
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
     "text": "老人坐在队伍里，手里捧着一本祈祷书。你问他，当年咽回去的那半句到底是什么，他想了很久才说：“门。当时我们都当它是‘把门关上’。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着三条街喊他。他抬了一下手，也不知是在给你祝福，还是叫你别嚷嚷。寒气已经爬上了膝盖。",
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
     "text": "她在队伍里站得笔直，下巴上的铰链锈住了，嘴张不开，只能冲你比手势，先比了个十一，又竖起一根指头。饷还欠着，而且又多欠了一个月。",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着人头只看见了她的后脑勺，她没有回头，办事员说她排的这一队归另一张桌子管，那张桌子后头也没有人。",
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
     "text": "队尾是个穿短褂的男人，看不出是哪朝哪代的，你还没开口，他倒先问了一句：“今年是哪一年？”你告诉了他，他点点头，往前挪了半步，可他前头的人并没有动。",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "他问你今年是哪一年。你答了，他没听清，又问了一遍，这时候办事员过来把你请出了队伍。",
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
    "result": "你找了老半天，总算找着一个，是八十年前在{?is.dwarf:矮人之路|月河}上跟你同坐过一条船的人，还是当年那副样子。他认出了你，头一句就问你是不是也来排队了，你说不是，他说那就好，这儿的队太长了。",
    "goto": "f_07"
   },
   {
    "text": "谁也不问，从队伍边上走过去",
    "effects": [
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "你从队伍边上走了过去，没有人拦你。走到另一头的城门口，你回头看了一眼，队伍还是那么长。",
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
   "再往外走，雾散了，脚底下是齐膝深的水，温温的，水底铺着白沙。有一道墙沿着水伸出去，往左望不到头，往右也望不到头，墙根下扎着一顶顶帆布帐篷，打满了补丁。",
   "住帐篷的都围了上来，他们个子很高，翅膀收在背后，羽毛已经脏了。他们不问你是谁，先问老家那边有没有消息，原来他们也迷了路。他们都说造他们的那一位已经死了，也都记得有个回不去的地方，可那地方在哪儿，谁也说不上来。",
   "其中个子最高的一位，翅膀断过一回，接得有些歪，他说他是最后见过托丽丝的，那是一百多年前的事了，她提着一盏灯从这儿蹚水过去，往那边走了。他说着抬起手，指了个方向。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "1666 年的那份报告，就是从这片水里传回去的。（她把眼镜摘下来擦了擦。）那盏灯是我点的，我替她一路举到门口，她接过去就走了。"
   },
   {
    "if": "is.divine",
    "text": "有个天使拉住你的袖子，问你祷告的时候，有没有谁应过你。"
   },
   {
    "if": "is.god",
    "text": "他们围着你，可是没有跪。断过翅膀的那位凑到跟前闻了闻你，问：“你是从里头出来的吗？”"
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
    "result": "他听完，把这句话刻在一块木片上，挂到了帐篷门口，那底下已经挂着十几块了。"
   },
   {
    "text": "在墙根下歇一歇",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "你们在墙根下睡了一觉，天使替你们守夜，守得非常认真，一整夜都没坐下过。"
   },
   {
    "text": "跟他们说实话：门锁着，里头有谁，不知道",
    "effects": [
     "flag angels_truth",
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "他们听完，倒也没吵。只有一位回到帐篷里，把一件叠好了的袍子又打开了。",
    "goto": "f_08"
   },
   {
    "text": "说两句宽心话",
    "effects": [
     "heal 4d8",
     "approval narwen -1"
    ],
    "result": "你说门那边有人在等着，他们高兴起来，捧着水给你们洗伤口，伤口合得很快。{?party.narwen:娜尔雯站在旁边，没有帮你说话。|}",
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
     "text": "断过翅膀的那位想了一整夜，第二天早上带来了四十一个，每人背着一卷帆布。",
     "effects": [
      "flag angels_follow",
      "rep church +1"
     ],
     "goto": "f_08"
    },
    "fail": {
     "text": "他们说还要等。有一位跟着你们蹚了半里水，又一步一步走了回去。{?party.narwen:娜尔雯说你问得太急了。|}",
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
   "浅滩走到头是一道坡，门就立在坡顶上，是一扇石头门，高得很，上头既没有把手，也没有门环，只在当中开着一个方方的钥匙孔。那孔的大小和形状你都见过，碎片当中那块忽明忽暗的黑东西，正是这个模样。",
   "坡底下拖着一条小船，船底朝天扣在那儿，船帮上密密麻麻刻满了道道，五道一捆，一直刻了一百六十八年，刻到某一天就停了。船底下并没有尸骨，只有一个油布包，里头包着一本拓本，拓的全是船帮上这些刻痕。",
   "门后有声音，说来说去还是“他们”。照那声音自己的说法，这扇门是里头的人在头一回大偷之后闩上的，天国是这东西最大的一处存货，门要是一开，外头的亏空能补上一千年，可里头的人也就成了矿。",
   {
    "if": "party.narwen || flag.narwen_custodian",
    "speaker": "娜尔雯",
    "text": "是神在说话，用的是我们受得了的嗓子。"
   },
   {
    "if": "!party.narwen && !flag.narwen_custodian && !flag.jar_sold",
    "speaker": "别摇",
    "text": "是主人家呗。主人家要闩门，做客人的就别多问了。"
   },
   {
    "if": "party.middlesday && !flag.m_dormant",
    "speaker": "礼拜三",
    "text": "（肯定。）是人。箱子里装着人的时候是什么声音，我是知道的。"
   },
   {
    "if": "is.mechanim",
    "text": "你用不着译码，门后的话你直接就听得懂，七号线夜班的机器在停机前都会响那么一声，门后的声音跟它是一个调子。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "要我说，这是一段留声，理论上还挺有礼貌的。"
   },
   {
    "if": "!party.guilhem && !flag.etta_left",
    "speaker": "埃塔",
    "text": "是一段留声。留声的那位很有礼貌，可有礼貌的人，我一个都不信。"
   },
   {
    "if": "flag.m_dormant",
    "text": "你们把礼拜三的箱子抬到了门前，门后那一声刚响起来，箱子里头也跟着响了一下，紧接着它坐了起来，把周围看了一圈，很客气地问：“（礼貌。）请问各位是谁。”"
   },
   {
    "if": "party.narwen || flag.narwen_custodian",
    "text": "娜尔雯把灯放在门槛前，跪了下去，可又站了起来。她是想跟碎片立契，好问门后一句话，可分形修会里立契的人，多半就死在这一步上。"
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
    "result": "你贴着听了一会儿，里头有人在数数，数得很慢，数到四十就停了，又从一数起。"
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
     "text": "她听你把话说完，提起灯退回了船上，只说了一句“下回吧”。这句话她已经说了一百六十九年了。",
     "effects": [
      "flag narwen_talked_down",
      "quest q_narwen done"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "她听完，说你说得对，可说完还是跪了下去。",
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
     "text": "你把手按在门上，门那边的东西就顺着你的手往里走，一直走到胸口才停住。你问了一句话，答你的只有一个词，你记住了，可跟谁也没说。",
     "effects": [
      "flag pc_pact",
      "xp 600"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "那东西走过了胸口也没停，一直走到了头顶。等你醒过来，人已经躺在船底了，有人正往你嘴里灌水，后来一照镜子，左边鬓角白了一绺。话你也问到了，可惜只记得半个词。",
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
    "result": "{?party.narwen:娜尔雯把灯留在门槛前，跟着你回了船，一路上一句话也没说。|你们退回了船上，门后的声音一直没停。}",
    "goto": "f_09"
   }
  ]
 },
 "f_08b": {
  "id": "f_08b",
  "title": "立契",
  "art": "ev_priest_phantom",
  "text": [
   "她跪在门槛前，把额头贴在了门上，灯就搁在手边，火苗一个劲儿往门缝那边歪。",
   "门后的声音都停了，过了一会儿，才有一个声音单独响起来，比别的都高，也慢。{?party.middlesday:礼拜三胸口也跟着亮了一下。|}{?flag.fragment_aboard:船上匣子里的碎片也跟着响了。|}",
   "她的肩膀抖了起来。她等了一百六十九年，等的就是这一声。"
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
     "text": "等她站起来，脸上全是湿的。话她问到了，可只转述了一句：“它说，上回有人问这个，是 1666 年。”",
     "effects": [
      "flag narwen_pact_done",
      "quest q_narwen done",
      "approval narwen +2"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "先灭的是灯，她再也没站起来。你们把她抬到坡下，放在那条小船旁边，门口从此多了一盏灯，是你们点的。",
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
    "result": "你一把将她拽了回来，灯也带倒了。她盯着你看了很久，倒没骂你，只说了一句：“你们都这样。”",
    "goto": "f_09"
   }
  ]
 },
 "f_09": {
  "id": "f_09",
  "title": "敲不敲",
  "art": "load_3",
  "text": [
   "门还是那扇门，能用得上的东西都摆到了甲板上，有一只手，{?flag.fragment_aboard:一块拳头大的晶体，|}{?flag.siphon_taken:一台倒过来接的撞锤，|}再就是这一船人，都在等你开口。",
   {
    "if": "flag.fragment_aboard",
    "text": "碎片在匣子里响了一声。今年它统共才响过四声，这是第五声。"
   },
   {
    "if": "flag.salvation_sails",
    "text": "得救号在你们后头下了锚，船头站着热忱派的通神者，披风卫排成了一排。他们手里捧着碎片，眼下在等你先动，你要是不用它，他们就自己用。"
   },
   {
    "if": "party.middlesday || is.mechanim",
    "text": "{?is.mechanim:你胸口|礼拜三胸口}那颗芯核正跟着门后的声音走，一下一下的，比平常慢。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "你想起了七号线。那一夜要是有人去把厂门敲上一敲，七八三会不会抬起头来呢？"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "撞门这种事我不干，敲门倒行。要是敲了不开，我就在这儿站一夜岗。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "拿钥匙开门，理论上是最体面的。可实际上呢，这把钥匙不是我们的。"
   },
   {
    "if": "is.god",
    "text": "你往前走近一步，这才看见门在你这一侧是有把手的，铜的，磨得发亮，像是常有人握，可别人谁也看不见它。{?party.narwen:娜尔雯问你在看什么。|}"
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
    "result": "你转身下了坡，门后的声音没有停，也没有高起来。",
    "goto": "f_10"
   },
   {
    "text": "不碰它，回去",
    "if": "flag.salvation_sails",
    "effects": [
     "flag fx_intent_leave"
    ],
    "result": "你刚一转身，得救号上的披风卫就跳下了水。",
    "goto": "f_09z"
   },
   {
    "text": "敲门",
    "if": "!flag.salvation_sails",
    "effects": [
     "flag gate_knock",
     "approval bura +1"
    ],
    "result": "你敲了三下，门没开，里头倒是有人答了一声，只是听不清答的什么。浅滩那边的天使，一个个全都转过了身。",
    "goto": "f_10"
   },
   {
    "text": "敲门",
    "if": "flag.salvation_sails",
    "effects": [
     "flag fx_intent_knock"
    ],
    "result": "你抬起手，还没等落下去，得救号上的披风卫已经跳下了水。",
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
    "result": "{?flag.fragment_aboard:你把碎片按进了钥匙孔。|通神者把碎片按进了钥匙孔，你就站在旁边，没有拦。}只听很轻的一声，门开了一掌宽。",
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
   "披风卫蹚着水上来了，个个左肩搭着披风，剑上的咒亮着，通神者走在最后头，两手捧着碎片，那碎片亮得刺眼。",
   {
    "speaker": "通神者",
    "text": "先驱精灵偷过一回，后来法师们又把它锁了八百年，我们呢，只不过是来把门打开罢了。朋友，你挡着的，可是穷人街上的路灯啊。"
   },
   "他这话说得很和气，跟灰磨在文森顿讲道是一个调子，而且他是真心这么想的。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人拿碎片的话去开门是什么时候？没有这个上回，从来没有人这么干过。院长令上写得明白，不许。"
   }
  ],
  "choices": [
   {
    "text": "挡在门前",
    "if": "partysize >= 4",
    "combat": {
     "title": "得救号",
     "intro": "披风卫蹚着水上来了，个个左肩搭着披风，剑上的咒亮着，通神者捧着碎片走在最后头。",
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
       "desc": "碎片一出声，他们剑上的咒就跟着响。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音给闷在了里头，披风卫剑上的咒一下子暗了三分，好几个人都低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫得很，你刚一缩手，碎片就叫了一声，耳朵里像是灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝立下的规矩，碎片的话不许拿来开门。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头去看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你还熟。",
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
     "intro": "披风卫蹚着水上来了，个个左肩搭着披风，剑上的咒亮着，通神者捧着碎片走在最后头。",
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
       "desc": "碎片一出声，他们剑上的咒就跟着响。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音给闷在了里头，披风卫剑上的咒一下子暗了三分，好几个人都低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫得很，你刚一缩手，碎片就叫了一声，耳朵里像是灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝立下的规矩，碎片的话不许拿来开门。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头去看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你还熟。",
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
     "intro": "披风卫蹚着水上来了，个个左肩搭着披风，剑上的咒亮着，通神者捧着碎片走在最后头。",
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
       "desc": "碎片一出声，他们剑上的咒就跟着响。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音给闷在了里头，披风卫剑上的咒一下子暗了三分，好几个人都低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫得很，你刚一缩手，碎片就叫了一声，耳朵里像是灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝立下的规矩，碎片的话不许拿来开门。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头去看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你还熟。",
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
     "intro": "披风卫蹚着水上来了，个个左肩搭着披风，剑上的咒亮着，通神者捧着碎片走在最后头。",
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
       "desc": "碎片一出声，他们剑上的咒就跟着响。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音给闷在了里头，披风卫剑上的咒一下子暗了三分，好几个人都低头去看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫得很，你刚一缩手，碎片就叫了一声，耳朵里像是灌进了一壶开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝立下的规矩，碎片的话不许拿来开门。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头去看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完了，念得比你还熟。",
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
   "披风卫退回了得救号，通神者是叫人抬上船的，抬的时候嘴里还在念，念的是碎片那两个词里的头一个。碎片还在他们船上，门也还关着。",
   "浅滩那边的天使从头看到尾，谁也没过来帮哪一边，只有断过翅膀的那位冲你举了举手，也不知道是道喜，还是道别。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）跟教会的人动手，我这辈子还是头一回。这一笔该记在谁头上？"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "记在公司头上。三百八十九年了，这是头一笔。"
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
    "result": "你敲了三下，门没开，里头倒是有人答了一声，只是听不清答的什么。浅滩那边的天使，一个个全都转过了身。",
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
    "result": "你们收了锚。得救号没有跟上来，就在门前泊着，一直泊到你们再也看不见它。",
    "goto": "f_10"
   }
  ]
 },
 "f_09f": {
  "id": "f_09f",
  "title": "撞",
  "text": [
   "撞锤顶上去，头一下门没动，第二下门槛裂了一道缝，到第三下门就开了，开得比钥匙开的还宽。光从里头往外淌，一直淌到浅滩上，连水都亮了。",
   "跟着光出来的是一队红衣的人，一个审计带着几个办事员，袍子拖在水里也不湿。审计手里拿着一本账，开口头一句问的是谁让开的这扇门，第二句问的是船上有谁赖过一死。",
   {
    "if": "is.god",
    "text": "审计一看见你，就在账上划了一道。“呆账。”他说，“先办别人的。”"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我说过，撞门的事我不干。（铰链咔的一声。）可他们这是冲着人来的。"
   }
  ],
  "choices": [
   {
    "text": "站到撞锤前头",
    "if": "partysize >= 4",
    "combat": {
     "title": "查账",
     "intro": "审计合上账本，把镰刀从肩上放了下来，办事员们散开，把撞锤围在了当中。",
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
       "desc": "公司的章程、船籍、出港的签证，只要盖着章的都算。",
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
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜来，审计也凑过来一起看，他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀也顺手划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝辞任那天签的最后一道令。照教会的说法，这些人是天使。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就往后退了半步，红袍的下摆头一回沾了水，办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行，审计就在账上记了一笔，写的是“冒用院长令，一次”。",
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
     "intro": "审计合上账本，把镰刀从肩上放了下来，办事员们散开，把撞锤围在了当中。",
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
       "desc": "公司的章程、船籍、出港的签证，只要盖着章的都算。",
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
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜来，审计也凑过来一起看，他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀也顺手划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝辞任那天签的最后一道令。照教会的说法，这些人是天使。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就往后退了半步，红袍的下摆头一回沾了水，办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行，审计就在账上记了一笔，写的是“冒用院长令，一次”。",
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
     "intro": "审计合上账本，把镰刀从肩上放了下来，办事员们散开，把撞锤围在了当中。",
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
       "desc": "公司的章程、船籍、出港的签证，只要盖着章的都算。",
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
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜来，审计也凑过来一起看，他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀也顺手划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝辞任那天签的最后一道令。照教会的说法，这些人是天使。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就往后退了半步，红袍的下摆头一回沾了水，办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行，审计就在账上记了一笔，写的是“冒用院长令，一次”。",
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
     "intro": "审计合上账本，把镰刀从肩上放了下来，办事员们散开，把撞锤围在了当中。",
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
       "desc": "公司的章程、船籍、出港的签证，只要盖着章的都算。",
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
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜来，审计也凑过来一起看，他们看得很仔细，一个章一个章地对。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给了你，镰刀也顺手划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "这是托丽丝辞任那天签的最后一道令。照教会的说法，这些人是天使。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就往后退了半步，红袍的下摆头一回沾了水，办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行，审计就在账上记了一笔，写的是“冒用院长令，一次”。",
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
    "text": "回程的船上，团务会就开在底舱里，旁边挨着压舱的石头，梁上挂着一盏马灯，船一晃它也跟着晃。"
   },
   {
    "if": "!flag.went_beyond",
    "text": "团务会开在平潮庭外的锚地上，这儿的船不晃，桌子平平的，放上一碗水都不会洒。"
   },
   {
    "if": "flag.fx_crew_taken",
    "text": "桌边空了三把椅子，撞锤的船员叫红衣人带走了，你的名字也记在了审计那本账上。"
   },
   {
    "if": "flag.partner_draw && !flag.partner_signed",
    "text": "桌上压着一张字条，是拿青铜色的墨写的，上头只有“平手”两个字。"
   },
   {
    "if": "flag.narwen_pact_done",
    "text": "娜尔雯坐在桌角，门前问来的那句话她还攥在手里，谁来问，她也不肯多说一个字。"
   },
   {
    "if": "flag.narwen_talked_down",
    "text": "娜尔雯的灯搁在桌上，没有点，她说等下回再点。"
   },
   {
    "if": "flag.pc_pact",
    "text": "你鬓角那块地方还在发凉。门后答你的那个词，你没往账上写。"
   },
   {
    "if": "var.overruled >= 3",
    "text": "你推门进去才发现，会已经开完了，章程摊在桌上，第一页添了一行新字，写的是本公司不签《他的帝国》，也不撞门，底下有好几个人的签名。你要是还想签这两样，就得先在章程上把自己的名字划掉。"
   },
   {
    "if": "var.overruled < 3 && party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）签哪一份都行，就是别签把人当井使的那一份。"
   },
   {
    "if": "var.overruled < 3 && party.middlesday && !flag.m_rewoken",
    "speaker": "礼拜三",
    "text": "（陈述。）十一份草约里，有三份写到了我们。（请求。）请签那三份里的一份。"
   },
   {
    "if": "var.overruled < 3 && flag.m_rewoken",
    "speaker": "礼拜三",
    "text": "（礼貌。）各位我都不认识，可账上说我是成员。那我就投一票，投给写到了我们的那一份。"
   },
   {
    "if": "var.overruled < 3 && party.guilhem",
    "speaker": "吉列姆",
    "text": "配给是最糟的办法，理论上是这样。可实际上呢，别的办法只会更糟，我算过三遍了。"
   },
   {
    "if": "var.overruled < 3 && party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人替那扇门签字是什么时候？没有上回，你们是头一回。所以别急，慢慢来吧。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "迟到者公司开到今天，是三百八十九年。照规矩，一百金冠以上的单子得由队长签字，这是最后一张了。"
   },
   {
    "if": "flag.etta_left",
    "text": "埃塔的椅子空着。账本还在桌上，翻在最后一页，可没人记账了。"
   },
   {
    "if": "!flag.jar_sold",
    "speaker": "别摇",
    "text": "这回我就不开价啦，这是你们自己的账嘛。"
   },
   {
    "if": "!flag.etta_left && world.doors <= 2 && !flag.article_ban",
    "speaker": "埃塔",
    "text": "还有一样，我先提出来，把音叉沉了吧。门开得不大，禁令也没通过，这时候沉了它，谁也不欠谁的。"
   },
   {
    "if": "is.god",
    "text": "照公约，你落的笔是不算数的，约得由凡人来签，你只能说签哪一份。{?flag.etta_left:|埃塔把笔摆到了你手边，想了想，又挪回她自己手边去了。}"
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
    "result": "你在配给条款底下签了名。{?flag.etta_left:墨是你自己吹干的。|埃塔替你吹干了墨，在账上写了一行“配给，已签，没有酒”。}",
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
    "result": "{?flag.court_refused:彼岸不肯签，你签下的只是一张“先占先得”的备忘录，抬头印着卡拉桑尼的灰蓝两色。|你签了特许状。}{?flag.article_charter && rep.charter >= 4:起草人那一栏写的也是你的名字。|}",
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
    "result": "{?item.tuning_fork:音叉在水里亮了一下就往下沉，沉了很久都还看得见。|你手里没有音叉，就把罐子的盖子扔了下去，诺罗说这也算数。}",
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
    "result": "你签了。和约的封皮是红的，上头压着一朵干玫瑰。{?party.bura:布拉站起身，出去了。|}",
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
    "result": "{?var.overruled >= 3:你先在章程上把自己的名字划了一道，然后才签了他那份。|你签了他那份。}文件上的青铜印还是热的，他那一栏早就签好了。",
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
    "result": "娜尔雯接过笔，先在纸边上试了试墨。“上回有人留下，是托丽丝。”她一边说一边签了名，“这回是我。”",
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
    "result": "你签了，在“留驻”一栏里写上了自己的名字。{?flag.etta_left:|埃塔看了一眼，顺手把你那一栏的工钱改成了按年算。}",
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
    "result": "状子是拿红绳捆着的，头一页上写着，里头的要跟外头的谈。你签了收，落的是公司的全名。",
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
    "result": "{?var.overruled >= 3:你先把自己的名字从章程上划掉，然后|你}在见证栏上签了名。墨是蓝的，是拿晶体磨出来的。",
    "goto": "f_12"
   }
  ]
 },
 "f_11": {
  "id": "f_11",
  "title": "把手",
  "art": "load_17",
  "text": [
   "那个把手别人都看不见。你握住它往下一压，门就往里开了一条缝，刚够一个人侧着身子进去。",
   "里头没有殿，没有光，也没有人出来迎你，只有一把木头椅子空着，摆在正当中。椅背上的漆磨掉了一块，看得出是有人常年靠出来的。",
   "门后的那些声音原来都在这儿，一个挨一个站在椅子后头的暗处，没有一个抬头，也没有一个请你坐。",
   "门外，{?party.narwen:娜尔雯提着灯|你的人}在门槛那边等着，从那儿只看得见你的背。"
  ],
  "choices": [
   {
    "text": "坐下",
    "effects": [
     "flag seat_sat",
     "world tears =9"
    ],
    "result": "你坐下了，椅子比看上去要暖和。暗处站着的那些里头，有一个头一回抬起了头。",
    "goto": "end_seat"
   },
   {
    "text": "进去，从里面把门闩上",
    "effects": [
     "flag seat_locked"
    ],
    "result": "你回头看了一眼门外的人，把门推上，又在里头摸到了门闩，闩是木头的，沉得很。",
    "goto": "end_seat"
   },
   {
    "text": "把椅子扛出来",
    "effects": [
     "flag seat_carried",
     "world doors +2",
     "world dove -1"
    ],
    "result": "椅子倒不沉，你扛着它侧身出了门，门外的人往后退了一步，给你让出一条道来。",
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
   "港务员翻了翻簿子，翻到一页，拿指甲点着念道：“迟到者公司，出港是三年零十个月以前。”念完他抬头看看你们，又低头看看簿子，也难怪，船上才过了几个礼拜，{?flag.fx_sailor_aged:除了那个老水手，|}谁的胡子都没见长。{?flag.fx_boat_lost:至于丢掉的那条舢板，港务员在簿子上另记了一行，叫你们照赔。|}",
   {
    "if": "is.immortal",
    "text": "三年零十个月过去了，这一回船上人人都跟你一样，一天也没老，总算头一回有人懂你了。港务员倒是换了人，是 1820 年那位的儿子{?flag.saw_the_boat:，他父亲你是认得的|}。"
   },
   "他递过来一摞旧报纸，拿麻绳捆着，最上面一张是《泰卢姆时报》，标题占了半个版面，写的是“可再生达姆斯塔尔的终结？”，署名是暗望所的德鲁兹纳。",
   "那天夜里，你们在码头上最后数了一回流星，{?world.tears >= 7:多得数不过来，就跟 1809 年的历书上写的一样|}{?world.tears == 6:数下来有二百来颗|}{?world.tears == 5:数下来是一百五十颗|}{?world.tears == 4:数下来有九十多颗|}{?world.tears == 3:数下来五十上下|}{?world.tears == 2:数下来只有二十几颗|}{?world.tears == 1:一只手就数得过来|}{?world.tears <= 0:可一颗也没有|}。",
   {
    "if": "flag.went_beyond || flag.dead_asked || flag.doors_flung",
    "text": "{?flag.went_beyond:去过门前的人，下船的时候都不大说话。|}{?flag.dead_asked:你把崩塌之城的那句答话又想了一遍。|}{?flag.doors_flung:港里的船比你记得的多出了三倍。|}"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "港务所里压着一封给你的信，盖着陆军部的戳，已经压了两年，你没有当着人拆。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "洛伦泰内来的信也在，封口上是一朵白玫瑰。你先看了笔迹，再去看信里的口气。"
   },
   {
    "if": "origin == 'concord'",
    "text": "镇议会寄来了一张单子，是 1789 年的，四百金冠，后头一栏还空着，等着你填上“清讫”，或者填点别的。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "铸炉街七号线托人带来了一句话，说器材账上的十四号，有人来问过。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "你那份考察报告还压在箱子底，题目已经改过三次了，{?flag.karshyr_at_summit:峰会的签字页上有卡尔希尔一栏，报告里还得添上一段，|}这会儿你在码头上又改了一次。"
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
    "result": "这是《斗兽场哨兵报》，三年的头版都叠在了一起。{?flag.artheta:“破晓”过后，光是行刑队的名单，就登了两版。|}{?flag.dove_honoured:到了鸽之日，军饷补发下来了，队伍排了三条街。|}{?flag.dove_released:鸽子放走了，没过多久，沿岸就多出来六面新旗。|}{?flag.dove_by_miracle:有十一个邦的人梦见了同一只鸽子，为这件事，议会吵了三天。|}{?world.dove >= 4 && world.dove <= 6:公投又往后推了一年，这一年里，谁也没开枪。|}"
   },
   {
    "text": "翻调查庭那一版",
    "once": true,
    "effects": [
     "codex c_konwell"
    ],
    "result": "调查庭那件事也见了报，登在第三版上。{?flag.inquiry_truth:笔录是照着全文登的，一个字没删，光你那一段就占了半版。|}{?flag.inquiry_cover:结论登出来了，只有一行，说是起因不明。|}{?flag.inquiry_blame_lorent:结论也登出来了，照上头的说法，那一枪是洛伦特人放的。|}{?flag.ny_passed_order || flag.ny_held_order || flag.ny_stood_between:旁边一栏里，登着新年那天旧斗兽场的照片。|}"
   },
   {
    "text": "翻外国版",
    "once": true,
    "effects": [
     "codex c_comet"
    ],
    "result": "再往后翻，外国版在第四页。{?flag.crown_castine:洛伦特颁了宪法，颁布那天，是女王亲口念的。|}{?flag.crown_ioriel:洛伦特又下了诏书，一道接着一道，口气越来越老。|}{?flag.crown_off:洛伦特的那顶王冠，如今锁进了柜子。|}{?flag.rector_erudite:阿兰蒂尔塔的地窖开了，来看碎片的人排着队，绕了塔三圈。|}{?flag.rector_zealot:教廷那边只登了一条消息，短短一句，“得救号未归”。|}"
   },
   {
    "text": "翻东坎诺那一版",
    "once": true,
    "effects": [
     "codex c_castonath_line"
    ],
    "result": "东坎诺的消息不多，零零碎碎的，都挤在广告中间。{?flag.line_castonath:卡斯托纳斯那边，煤气灯已经通上了。|}{?flag.line_ancardia:东坎诺那边，兵车一礼拜跑两趟。|}{?flag.line_none:阿斯拉银行那边，到现在还在清盘。|}{?flag.hoard_sealed:卡斯托纳斯的窖藏还封着，三道印都在，没人动过。|}{?flag.hoard_milled:窖藏已经磨完了，那座磨坊，如今改成了纺纱厂。|}{?flag.rite_given:王家巫师的名单上，伊萨那一席的后头，添了个“正”字。|}"
   },
   {
    "text": "翻港里的小报",
    "once": true,
    "effects": [
     "codex c_spires"
    ],
    "result": "这是港里自己印的小报，纸都是黄的。{?flag.spires_told:卡尔希尔成了共和国，为这个，港口还立了块牌子。|}{?flag.spires_sold:尖碑卖掉了，报上只登了价钱，没登买主。|}{?flag.spires_kept:尖碑还是石头，报上没人提起。|}{?flag.ruling_both:巨魔湾下了一纸裁定，一口气管了两样，联盟差一点散伙。|}{?flag.ruling_cores:巨魔湾的机器算人了，戴镣的呢，还不算。|}{?flag.engine_licensed:文森顿的机房，又盖起了一座。|}"
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
   "定稿那天，阿兰蒂尔塔的大厅里摆开了四十张桌子，每张桌子上都放着一支笔、一瓶墨和一块吸墨的毡子。签字的人从早上排起，一直排到大厅外头，又顺着台阶排了下去。",
   "签完字的人往门口走，可门口并没有酒，有个侏儒代表问了一句，礼宾官翻了翻文本，说条约里没写这个。",
   {
    "if": "flag.article_heads",
    "text": "念到第七款“机械人算人头”，{?party.middlesday:礼拜三|旁听席上一台机器}站了起来，就这么站着听完，坐下，接着又站起来，排登记的队去了。"
   },
   {
    "if": "!flag.article_heads",
    "text": "第七款最后写的是“另议”。{?party.middlesday:礼拜三在旁听席上数着，|旁听席上有台机器在数，}这一款前前后后另议了十一回。"
   },
   {
    "if": "party.guilhem",
    "text": "配给局当天就挂了牌，头一任总稽核是吉列姆，在任命书上签字的时候他说，这是他这辈子最恨的一份差事，说完就把袖子挽了起来。"
   },
   {
    "if": "is.god",
    "text": "份额表上有一行写着你的神号，后头的数目空着，礼宾官拿着那一页来问你怎么填，你说不用填。"
   },
   "回到蜡烛铺，那只空果酱罐就摆在窗台上，里头插着一枝薄荷，{?flag.etta_left:你一天浇一回水。|埃塔一天浇一回水。}"
  ],
  "ending": "ration"
 },
 "end_charter": {
  "id": "end_charter",
  "title": "《特许状》",
  "art": "load_2",
  "loc": "安本科斯特 · 塔厄尔",
  "text": [
   "塔厄尔的天文钟底下新挂了一块行情牌，黑漆的底，白粉的字，一个钟头擦一回。",
   "头一行是晶价，比 1809 年还低，第二行是到港的船，写着“红利号，十二舱，气态，压砖”，第三行是保险，后头还注着一行小字，“蓝肺另计”。",
   {
    "if": "flag.article_charter && rep.charter >= 4",
    "text": "特许状印了五百份，起草人一栏是你的名字，印在第二页上，字比别人的大一号。"
   },
   {
    "if": "!flag.partner_dead",
    "text": "德希尔德将军在《论坛报》上登了一则退役启事，一共三行字，启事登出来的第二天，他人就不见了。"
   },
   {
    "if": "is.god",
    "text": "擦牌子的伙计认得你，他问你要不要也上一行，要的话他好给你留个位子。"
   },
   "下午三点，伙计踩着梯子，在牌子最底下添了一行新的，写的是“位面，按吨”。"
  ],
  "ending": "charter"
 },
 "end_quiet": {
  "id": "end_quiet",
  "title": "《静世纪》",
  "art": "ev_big_star_in_sky",
  "loc": "托拉普里亚卡港",
  "text": [
   "港务员把簿子转过来，让你自己写。你写了四个字，“返港，无货”。",
   "音叉沉在了根上头的那片海里，诺罗说那地方量不到底，谁要是想捞，得先把绳子接到明年去。往后几十年，一直没人去接。",
   "诺罗问你后不后悔，你说这件事说得通，他想了想，说他爷爷也是这个道理，什么事都绕着走，一辈子没出过事。",
   {
    "if": "is.god",
    "text": "回程的船上，有个水手半夜来敲你的舱门，问你能不能把那根叉子捞回来。你说能，他等了一会儿，见你没有要动的意思，就回去睡了。"
   },
   "回到蜡烛铺，{?flag.etta_left:你把公司的账本|埃塔把账本}翻到了最后一页，那儿贴着一张旧标签，是从罐子上揭下来的，上头写着“别摇”两个字。"
  ],
  "ending": "quiet"
 },
 "end_rose": {
  "id": "end_rose",
  "title": "《玫瑰和约》",
  "art": "ev_mages_estate",
  "loc": "阿兰蒂尔塔",
  "text": [
   "闭幕那天，阿兰蒂尔塔的大厅里点了一千根蜡烛，煤气灯一盏也没有。魔杖托管会的人坐在前三排，袍子都是新做的，袖口上绣着各家的家纹。",
   {
    "if": "flag.crown_castine",
    "text": "文本是卡斯蒂娜自己念的，念到第九条，她停下来喝了口水，抬手碰了一下王冠，然后接着往下念，口气一点没变。"
   },
   {
    "if": "flag.crown_ioriel",
    "text": "闭幕前一个钟头，女王开了口，用的是十一世纪的口气。等到散会，大厅里已经没有一个代表记得自己反对过了，只有你还记得，因为当时你正在门外抽烟。{?flag.charmed_once:可你中过一回大咒，记得的也不全。|}"
   },
   "黑弹按条约禁掉了，各国的兵站把库存运到月河边上，一箱一箱往下沉，登记的人数到第四百箱，换了一支笔。",
   {
    "if": "is.god",
    "text": "托管会给你留了一个座位，名牌上写的是“阁下”，可你没有去坐，到散会的时候，那把椅子上已经落了一层蜡油。"
   },
   "{?party.middlesday:礼拜三|铸炉街的机器}每个礼拜三都要去托管会领一张许可。许可是张蓝纸，盖着三个章，有效期七天。"
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
    "text": "约是在船上签的，他那一栏的字写得很大，写完他把笔还给了你，笔杆上留下了一道牙印。"
   },
   "到了黄昏，阿拉莫莱的一万盏灯一盏接一盏地点了起来，点灯的人沿着大殿的台阶一路往上走，走到顶上，那张王座上如今坐着人了。",
   "进宫那天他走了一圈，说这宫殿修得小了，祭司们把这话记了下来，第二天就开始量地。",
   "他签的那份约你也签了，约上有一条，写明他得回信，头一个月，他就回了四百封。",
   {
    "if": "flag.struck_own_name",
    "text": "公司的章程上，你的名字上划着一道。{?flag.etta_left:没人去涂它。|埃塔没把它涂掉，她说账上的东西是不许涂的。}"
   },
   {
    "if": "is.god",
    "text": "他的头一封信是写给你的，问的还是那一句，你是怎么办到的。"
   },
   "回到安本科斯特，{?flag.etta_left:公司|埃塔}收到了头一封盖着青铜印的公函，信写得很长，谈的全是天气。"
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
    "text": "门开了一掌宽就停在那儿了，再也推不动，可也关不上，从门缝里递出来的头一样东西是一叠状子，拿红绳捆着。"
   },
   {
    "if": "flag.gate_key",
    "text": "那一季魔法野了起来，舱底区的井水自己往上冒，一直冒到三楼，梨林的梨树一夜之间开了两回花。再往后，它就稳下来了。"
   },
   {
    "if": "flag.gate_forced",
    "text": "撞锤就留在了门槛上，门开得比钥匙开的宽，淌出来的东西倒是一样多，只是名目叫采矿特许权。"
   },
   {
    "if": "flag.gate_forced",
    "text": "红衣的人也跟着出来了，一家一家地敲门，查的是赖掉一死的人。{?flag.dainuich_noticed:马利安德那户天黑了才上菜的人家，门口停了一辆红篷车。|}"
   },
   "七号线的夜班上，所有的芯核在同一夜醒了过来，七八三醒的那天正好是礼拜三，它放下扳手，问今天礼拜几。",
   {
    "if": "is.god",
    "text": "蜡烛铺门口排起了队，排队的人都想问你门那边到底是什么，你说你没进去，可他们不信，接着排。"
   },
   "{?flag.gate_key:门口那盏灯还亮着，那是托丽丝的灯。|门槛上的那道印子，有人拿粉笔给描了一圈。}"
  ],
  "ending": "gate"
 },
 "end_keeper": {
  "id": "end_keeper",
  "title": "《守门人》",
  "art": "ev_priest_phantom",
  "loc": "天门前",
  "text": [
   "约是隔着钥匙孔立的，门这边念一句，门那边答一句，由{?party.narwen:娜尔雯|你}来记，一共记了九天。",
   "门这边提的头一条是门不开，门那边提的头一条也只有一句，说外头得有人守着，守的人还得记数。",
   {
    "if": "flag.keeper_narwen",
    "text": "娜尔雯留下了，她把那条小船翻过来，让船底朝下，自己坐了进去，又从袖子里摸出一把新刻刀。"
   },
   {
    "if": "flag.keeper_self",
    "text": "留下来的是你。公司的人上船的时候，{?flag.etta_left:有人|埃塔}在名册上你那一栏里写了“驻外”两个字。"
   },
   {
    "if": "flag.angels_follow",
    "text": "回去的船上多了一舱天使，一共四十一个，每人背着一卷帆布。"
   },
   {
    "if": "is.god",
    "text": "门后的声音认得你，它们每回开口，总是先叫你的神号，然后才说别的。"
   },
   "船开出去半里地，回头还看得见坡底下那条小船，船帮上已经新刻了头一道。"
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
    "text": "公司的人在门外等了整整一夜，天亮的时候，浅滩上的水涨了一寸，水还是暖的。断过翅膀的那位天使头一个跪了下去，跪完站起来，问你今天有什么吩咐。"
   },
   {
    "if": "flag.seat_sat",
    "text": "回到安本科斯特以后，你头一回出门买烟，舱底区的路灯就暗了一格，卖烟的老太太看了看灯，又看了看你，把找给你的零钱多数了一遍。"
   },
   {
    "if": "flag.seat_locked",
    "text": "门在你身后合上了，到第二天早上，外头那一侧的钥匙孔就没了，只剩下一块平平的石头。"
   },
   {
    "if": "flag.seat_locked",
    "text": "{?party.narwen:娜尔雯守在门槛前数碎片的声音，一直数到了零，这才合上本子。|碎片在匣子里彻底黑了，再也没亮过。}门槛前的那盏灯还留着，没有人去吹它。"
   },
   {
    "if": "flag.seat_carried",
    "text": "旧斗兽场的正当中摆着一把木头椅子，漆掉了一块，议会挪到侧厅去开了，正厅就留给了它。"
   },
   {
    "if": "flag.seat_carried",
    "text": "每天都有人来看，也有人坐上去试试，可坐不了一会儿就下来了，说是硌得慌。治安军在椅子边上派了一班岗，岗哨的登记簿上写的是“神座，空”。"
   },
   {
    "if": "flag.council_called",
    "text": "第十二次泛神会议是隔着传音石开的，一连开了七天，开到第四天，有两座神殿的传音石裂了，后头的票只好派人骑马去送。"
   },
   "会议的结果贴在了圣奥琪大教堂的门上，只有一句公文，贴出来的那天，门口卖果酱罐的摊子多了三个。"
  ],
  "ending": "seat"
 }
};
