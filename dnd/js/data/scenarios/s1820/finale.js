// s1820 / finale.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "f_01": {
  "id": "f_01",
  "title": "音叉",
  "chapter": "终章 · 敲门",
  "art": "load_2",
  "loc": "西尔·伯肯之地外海 · 寰宇之根上方",
  "text": [
   "十五年前的今天，布西拉尔学者阿尔瓦就在托拉普里亚卡港南边的这片海上敲了一下桅杆，敲开了通往别的位面的漩涡。如今你们的船停在同一处，船身下方的海床陡然塌成断崖，你们要下去，也得敲出当年那个音。领航员诺罗·数浪往水里放量深绳，一段放完仍没触底，只好又接上一段。",
   {
    "if": "flag.noro_warned",
    "speaker": "诺罗",
    "text": "上次我话才说了一半，你就听懂了。这次我给你说全：漩涡张嘴之前，海面要先平下来。等海一平，你就赶紧找个东西抓牢。"
   },
   {
    "if": "!flag.noro_warned",
    "speaker": "诺罗",
    "text": "我爷爷是绕着这里走的，我爹也绕着走。到了我这一辈，倒收了人家的钱往里面开。你们坎诺人管这个叫进步，是吧？"
   },
   {
    "if": "flag.jar_asked",
    "text": "别摇自己从罐子里钻了出来，飞到桅顶上扇了三下翅膀。那个音就出来了。十五年前在史家会的讲堂里，她开口纠正标签时，用的也是这个调门。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "你没问一声，就把别摇的罐子贴在了桅杆上。她不肯开口，可翅膀自己在响，音很准。"
   },
   {
    "if": "(flag.freq_treaty || flag.freq_bought || flag.freq_stolen) && !flag.jar_asked && !flag.jar_used_unasked",
    "text": "音叉从匣子里取出来的时候是冰凉的，拿手怎么焐也焐不热，叉柄上还刻着贾赫港金库的编号。你拿它朝桅杆上敲了一下。"
   },
   {
    "if": "flag.jar_sold",
    "text": "布西拉尔的领航艇走在前面，那一下由艇上的人替你们敲。别摇连同罐子已经交给了布西拉尔，你们船上再没有能出那个音的东西。"
   },
   {
    "if": "flag.spire_tuned",
    "text": "往东半里的海面上立着一道水，既不倒，也不流。那是卡尔希尔调过音的尖碑在应声，你们也可以从那边下去。"
   },
   {
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned)",
    "text": "船上既没有音叉，也没有罐子，更没有调过音的尖碑。领航艇倒是有一条，是布西拉尔的，船头挂着价牌，上面写着五百金冠，现付。"
   },
   "海面平了下来，平得都照得见桅杆上的铆钉。紧接着船下一空，整条船往左一歪，四周的水一下竖了起来，竖成了一口井。",
   {
    "if": "origin == 'karshyr'",
    "text": "上次你看这个漩涡时，脚下踩的是托拉普里亚卡码头的条石。这次你是在它嘴里了。"
   },
   {
    "if": "is.god",
    "text": "漩涡还没张开，海面倒先朝你这边低下去一截。诺罗把绳子收了回来，看了你一眼，挪到桅杆另一边去了。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "共和国欠我的十一个月军饷到现在还没补。我要是掉下去了，这笔账就归你去讨。"
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
    "text": "贴着漩涡壁让船下行",
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
       "why": "阿尔瓦下去过一次"
      }
     ]
    },
    "ok": {
     "text": "帆收了一半，舵打到了底，船顺着水墙转了三圈。转到第四圈，下面亮了。诺罗这才松开缆绳，手心里勒出了一道白印。",
     "effects": [
      "xp 300"
     ],
     "goto": "f_02"
    },
    "fail": {
     "text": "转到第二圈，一道浪迎头拍过来，拴舢板的缆绳断了，舢板抢在你们前面掉了下去，再也没见着。你一头撞在绞盘上，满嘴都是血腥味。",
     "effects": [
      "hp -10",
      "flag fx_boat_lost"
     ],
     "goto": "f_02"
    }
   },
   {
    "text": "改走尖碑托起的水路",
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
     "text": "船头刚一碰上那道水，水就往两边让开了，没起浪，也没一点声音。帆还鼓着，船已经到了另一边。",
     "effects": [
      "rep south +1",
      "xp 300"
     ],
     "goto": "f_02"
    },
    "fail": {
     "text": "那道水认得尖碑，却不认得你们的舵。船在里面打了个横，左舷的栏杆被绞成了麻花。",
     "effects": [
      "rep south +1",
      "hp -6"
     ],
     "goto": "f_02"
    }
   },
   {
    "text": "雇布西拉尔的领航艇引路",
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned)",
    "req": "gold >= 500",
    "reqText": "需要 500 金冠",
    "cost": {
     "gold": 500
    },
    "result": "领航艇上的人收了钱，开好收据，这才替你们敲了那一下。",
    "goto": "f_02"
   },
   {
    "text": "向领航艇打公司借据，赊这五百金冠",
    "if": "!(flag.freq_treaty || flag.freq_bought || flag.freq_stolen || flag.jar_asked || flag.jar_used_unasked || flag.jar_sold || flag.spire_tuned) && gold < 500",
    "effects": [
     "rep charter -1"
    ],
    "result": "领航艇上的人收下公司的借据，看了看你，在背面写下了利息：九分。",
    "goto": "f_02"
   },
   {
    "text": "撇开音叉，直接从船边迈下去",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag doors_flung",
     "world doors +3",
     "rep south -1",
     "rep charter +1",
     "var cult +1"
    ],
    "result": "水踩在你脚下是硬的。漩涡自己张开了，这一张开就再也没合上。你们的船跟着你下去了，一直等在海峡口的三条船也跟了下来，一条挂的是卡拉桑尼的旗，另外两条的旗你不认得。诺罗在船尾数着跟下来的船，用佐赫比迪话骂了一句。",
    "goto": "f_02"
   }
  ]
 },
 "f_02": {
  "id": "f_02",
  "title": "把魔法当天气的海",
  "loc": "妖精界 · 一片没有岸的海",
  "text": [
   "船从漩涡的另一头出来，到了妖精界。这里是白昼，天很亮，却没有太阳，四周是望不到岸的黑水，只有船下一带水色较浅，诺罗管它叫“径”。船只能沿着径走，偏出去一步，外面就过去一年。",
   "在这里，魔法跟天气是一回事。起风时，厨子划根火柴，灶膛里能腾起一人高的火。等到没风了，{?is.caster:你把一整段咒念完|船上的法师把一整段咒念完}，指尖上还是什么也没有。空气里有股味道，像刚切开的青苹果，吸多了舌头会发麻。",
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "text": "罐子里起了雾，别摇浑身都在发亮，亮得甲板上的人只能眯着眼睛看她。"
   },
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "speaker": "别摇",
    "text": "看什么看，这才叫空气！你们那边的那个，都是人家喘剩下的。"
   },
   {
    "if": "flag.jar_used_unasked",
    "text": "罐子里亮着，亮得很足，可别摇背对着你，一句话也不说。"
   },
   {
    "if": "flag.jar_sold",
    "text": "甲板上原先放罐子的地方，木头上还留着一圈浅色的印子。"
   },
   {
    "if": "flag.doors_flung",
    "text": "锚地另一侧多出了两面旗，是跟着你下来的船，已经在往下放小艇了。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "今天几号了？"
   },
   {
    "if": "!flag.etta_left",
    "text": "谁也答不上来。埃塔只好在账本的页眉上写了“日期不详”四个字，写完盯着看了许久。自 1744 年起，这是她第一次写下这四个字。"
   },
   {
    "if": "is.god",
    "text": "风是跟着你走的，你站到哪一边，哪一边的帆就鼓起来。水手们开始往你脚边放供品了。有人放了一枚铜扣子，有人放了半块饼。"
   }
  ],
  "first": [
   "codex c_feyrealm",
   "codex c_aerated"
  ],
  "shop": {
   "name": "事务长",
   "blurb": "船上的药和酒都归这里管。掌柜记账比埃塔还细，也一律只收现钱。",
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
    "text": "替诺罗守望航径",
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
     "text": "你们盯了一天一夜，盯得眼睛都酸了，船一次也没偏出去。",
     "effects": [
      "flag fx_path_held",
      "xp 200"
     ]
    },
    "fail": {
     "text": "后半夜起了一阵风，船头往外偏了半步，马上又拨了回来。可是管缆的老水手第二天早上一起来，胡子已经白了一半。他摸着下巴问今年是哪一年，谁也答不上来。",
     "effects": [
      "flag fx_sailor_aged",
      "hp -4"
     ]
    }
   },
   {
    "text": "帮诺罗辨别航径边缘的水色",
    "tag": "蜥蜴人",
    "if": "is.lizardfolk && !flag.fx_path_held",
    "once": true,
    "effects": [
     "flag fx_path_held",
     "rep south +1"
    ],
    "result": "径旁边其实有两种颜色，在坎诺人眼里都是一样的绿。你指给诺罗看，诺罗拿炭笔在船舷上描了两道。{?flag.jar_sold:|罐子里那位说，“勿摇”这个叫法她已经记下了。这一笔还没跟你算。}"
   },
   {
    "text": "在船头陪吉列姆一会儿",
    "if": "party.guilhem",
    "once": true,
    "effects": [
     "approval guilhem +1"
    ],
    "result": "他的头发全白了，往风里一站格外显眼。“气态的魔晶就是这东西，理论上是，”他又吸了一口，“实际上，我现在正吸着它。大夫要是知道了，非把我的咖啡票也收回去不可。”"
   },
   {
    "text": "问布拉手里擦的是什么",
    "if": "party.bura",
    "once": true,
    "effects": [
     "approval bura +1"
    ],
    "result": "她在擦枪。枪在这里是打不响的，她试过了，火药潮得很古怪。“照样得擦。科琳不挑地方。”"
   },
   {
    "text": "问礼拜三：胸口里是什么在响",
    "if": "party.middlesday",
    "once": true,
    "effects": [
     "approval middlesday +1"
    ],
    "result": "“芯核在吃这里的空气。我比平常快了百分之四。我不知道该不该让它停下来。”它把手按在胸口上按了好一会儿，芯核没有停。"
   },
   {
    "text": "查看娜尔雯带来的海图",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": "热忱派探过两次险，各有一张海图，她抄的是第二次的那张。“上次有人照着这张图走，还是 1712 年。回去的人都说门是锁着的，”她把眼镜往上推了推，“我想看看，那把锁是什么样子。”"
   },
   {
    "text": "请别摇讲讲这片海的规矩",
    "if": "!flag.jar_sold && !flag.jar_used_unasked",
    "once": true,
    "effects": [
     "flag fx_asked_rules"
    ],
    "result": "她数了三条给你听。第一条是别跟人道谢，第二条是别报真名，第三条是答应了的事回头别改口。数完她又添了一句：“就数这第三条，你们最做不到。”"
   },
   {
    "text": "同埃塔核对账目",
    "if": "!flag.etta_left",
    "once": true,
    "effects": [
     "gold +150"
    ],
    "result": "埃塔翻到 1789 年那一页，里面夹着一张单子，上面写着“出海不归，备用”，四十六年了从来没动过。她把单子撕下来交给你，说这一趟算得上出海。"
   },
   {
    "text": "回舱睡一觉",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "你睡了一觉，醒来时天还是那么亮。怀表停在三点十分上，上了弦也不走。"
   },
   {
    "text": "拔锚，沿航径前进",
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
   "航行到第三天，前方升起了烟柱。三艘漆成灰蓝两色的铁船在这里下了锚，是特许商卡拉桑尼的船队。每艘船顶竖着一根比桅杆还高的管子，把妖精界的空气抽下来压成魔晶。泵声咚咚不停，刚压好的晶块码在甲板上，一块有拳头大，还冒着冷气。",
   "船员干上一会儿就要咳，咳出来的痰是蓝的，啐在铁板上还要亮一下才暗下去。他们管这毛病叫蓝肺，管自己叫抽工，一班干八小时，工钱是岸上的三倍。",
   "远处的水面上站着几点光，既不动，也不往这边靠。{?flag.jar_sold:诺罗说，那东西从你们一进来就跟着了。|别摇说那是她家里的人，在看你们这些后来的怎么对付先来的这一批。}",
   {
    "if": "flag.gauge_burned",
    "text": "当中那条船叫红利号，船头架着一台东西，包着铜皮，接着三根导管。这样子你见过，就是魂秤，只不过是倒过来接的，成了一台抽魔力的撞锤。公司的奇械师蒂尔妲蹲在旁边，手里捏着她画的图纸，第三页上写的还是个“秤”字。"
   },
   {
    "if": "flag.ship_client && flag.client_charter",
    "text": "你脚下踩的正是红利号的甲板。船队的总办端着两杯酒朝你走过来，雇你们的就是他的东家。"
   },
   {
    "if": "is.god",
    "text": "泵停了一下。总办抬头看了看管子，又看看你，派人去把保单拿来。要是泵是神弄停的，那就算不可抗力，保险行得赔。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "那台东西跟秤用的是同一张图。它一响，我的胸口就往那边偏。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "工钱是三倍，一班八个钟头，咳出来的是蓝的。这笔买卖算下来，不亏的只有船东一个。"
   }
  ],
  "choices": [
   {
    "text": "查看撞锤的连接处",
    "tag": "奇械",
    "if": "is.artificer",
    "once": true,
    "effects": [
     "flag fx_ram_read"
    ],
    "result": "你看了一刻钟就看明白了。撞锤和魂秤用的是同一张图，只是导管倒过来接，读数的针换成了吸口。管子根上还有一道阀，把它拧下来，这东西就只是一台秤了。"
   },
   {
    "text": "带咳得最重的抽工离船",
    "tag": "盾",
    "if": "faction == 'shield'",
    "once": true,
    "effects": [
     "rep union +1",
     "rep charter -1",
     "approval bura +1"
    ],
    "result": "你带下来的七个人都咳出了血。总办没有拦。他翻开名册，勾掉七个名字，工资只结到当天中午。"
   },
   {
    "text": "去船首劝蒂尔妲拆掉撞锤的阀",
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
     "text": "她听你说完，把图纸翻到第三页，指着上面那个“秤”字看了很久，然后爬上撞锤，把那道阀拧了下来。撞锤咣的一声停了。船上的人等了很久，也没等来下一声。",
     "effects": [
      "flag siphon_taken",
      "var jar_trust +1",
      "approval middlesday +1",
      "xp 600"
     ],
     "goto": "f_04"
    },
    "fail": {
     "text": "“这是秤。好吧，倒过来接就是炉子，这个我画的时候就知道。可汇票不等人。”她把图纸一卷，朝舱口招招手。",
     "goto": "f_03f"
    }
   },
   {
    "text": "登上抽气船，喝令停泵",
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
    "text": "与船队总办交涉",
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
     "text": "总办听完，把两杯酒都自己喝了，让人把三条船的泵全关掉。“就三天。三天以后仙子的庭上要是还没个说法，我照常开泵。”",
     "effects": [
      "flag fx_pumps_paused",
      "rep south +1"
     ],
     "goto": "f_04"
    },
    "fail": {
     "text": "总办听你说完，只问了一句：这三天的工钱谁来出。你答不上来，泵就接着响下去了。",
     "effects": [
      "rep charter -1"
     ],
     "goto": "f_04"
    }
   },
   {
    "text": "绕开船队，不插手",
    "effects": [
     "var jar_trust -1"
    ],
    "result": "你们的船从三条铁壳船旁边绕了过去。离得最近时，听得见泵后面那一声长长的抽气，水面上那几点光也跟着暗了一下。",
    "goto": "f_04"
   }
  ]
 },
 "f_03f": {
  "id": "f_03f",
  "title": "登船",
  "text": [
   "你们沿舷梯登船，没人阻拦。脚刚踏上甲板，管泵的奇械师就放下扳手，掏出了短枪。戴面罩的人也接连从舱口出来。",
   "撞锤在船头转了个向，{?party.guilhem:吉列姆的咒才念到一半，就觉得手里的魔力被那根管子抽走了，气得骂了一句条例编号。|它一吸气，你身上带的魔法物件就往那边飘。}抽工们都缩在绞盘后面，没有一个上来帮忙的，也没有一个走开的。",
   {
    "if": "flag.ship_client && flag.client_charter",
    "text": "这一仗是在你雇主的甲板上打的。总办就站在舱楼上看着，手里还端着那杯酒。"
   }
  ],
  "choices": [
   {
    "text": "迎战抽气船的护卫",
    "if": "partysize >= 4",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队员接连钻出舱口，每人脸上都扣着一具铜嘴的皮面罩。船首的撞锤也转了过来，吸口正对着你们。",
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
       "desc": "撞锤和空中的管道连在一起，气流有倒灌的危险。成功时，所有敌人受到 4d6 点力场伤害。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了。抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外面包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤与魂秤原出同一张图纸，两者的区别在那道阀门。成功时，所有敌人陷入「晕眩」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "这阀是反丝的，你拧的那半圈反倒把它拧得更紧了。撞锤趁势抽了你一口，你身上的魔法物件全飘了过去。",
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
    "text": "迎战抽气船的护卫",
    "if": "partysize == 3",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队员接连钻出舱口，每人脸上都扣着一具铜嘴的皮面罩。船首的撞锤也转了过来，吸口正对着你们。",
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
       "desc": "撞锤和空中的管道连在一起，气流有倒灌的危险。成功时，所有敌人受到 4d6 点力场伤害。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了。抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外面包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤与魂秤原出同一张图纸，两者的区别在那道阀门。成功时，所有敌人陷入「晕眩」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "这阀是反丝的，你拧的那半圈反倒把它拧得更紧了。撞锤趁势抽了你一口，你身上的魔法物件全飘了过去。",
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
    "text": "迎战抽气船的护卫",
    "if": "partysize == 2",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队员接连钻出舱口，每人脸上都扣着一具铜嘴的皮面罩。船首的撞锤也转了过来，吸口正对着你们。",
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
       "desc": "撞锤和空中的管道连在一起，气流有倒灌的危险。成功时，所有敌人受到 4d6 点力场伤害。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了。抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外面包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤与魂秤原出同一张图纸，两者的区别在那道阀门。成功时，所有敌人陷入「晕眩」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "这阀是反丝的，你拧的那半圈反倒把它拧得更紧了。撞锤趁势抽了你一口，你身上的魔法物件全飘了过去。",
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
    "text": "迎战抽气船的护卫",
    "if": "partysize <= 1",
    "combat": {
     "title": "抽气船",
     "intro": "陆战队员接连钻出舱口，每人脸上都扣着一具铜嘴的皮面罩。船首的撞锤也转了过来，吸口正对着你们。",
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
       "desc": "撞锤和空中的管道连在一起，气流有倒灌的危险。成功时，所有敌人受到 4d6 点力场伤害。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 16
       },
       "success": {
        "text": "斧子砍到第三下，管子断了。抽进去的气夹着冰碴子从断口倒喷出来，把甲板上的人全掀翻了。",
        "dmgAll": "4d6",
        "type": "force"
       },
       "fail": {
        "text": "管子外面包着三层铜皮，斧子弹了回来，在你自己腿上啃了一口。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "valve",
       "name": "拧掉撞锤根上的阀",
       "desc": "撞锤与魂秤原出同一张图纸，两者的区别在那道阀门。成功时，所有敌人陷入「晕眩」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "这阀是反丝的，你拧的那半圈反倒把它拧得更紧了。撞锤趁势抽了你一口，你身上的魔法物件全飘了过去。",
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
   "到了第五天，潮水停了，海面平得没有一丝波纹，连船下那条径也不再流动。前方水面上站着一圈光，近看是巴掌大的仙子，穿着树叶缝的衣服，一个挨一个排了半里。这是别摇的氏族开的庭：妖精界这片海跟不跟你们签约，由这一庭说了算。",
   {
    "if": "!flag.jar_sold",
    "text": "他们冲着罐子行礼，嘴里叫的是一个你从没听过的官衔：量潮使。别摇从罐子里出来，掸了掸翅膀上的雾，站到他们那边去了。她当年是故意让人抓走的，仙子们想看看马上要来的这批人说话算不算数。"
   },
   {
    "if": "flag.jar_sold",
    "text": "他们冲你们的船行了礼，行完才发现罐子不在。有个穿灰叶子的往前飞了一步，手里捧着一卷东西，那是别摇留在贾赫港金库里的口供，一个字一个字记下来的。"
   },
   "庭上先念各家的草约。{?flag.article_ration:配给条款念了一遍，|}{?flag.article_ban:禁令念了一遍，|}{?flag.article_charter:特许条款念了两遍，念的人一直皱着眉头，|}{?flag.silcalas_share:念到卡拉桑尼那份分成时，有人笑出了声，|}{?flag.signed_partner_paper:你签过字的那份合伙人文件也念了，念到你的名字，停了一下，|}草约念完，接着念别摇这十五年记你的那本账。",
   {
    "if": "flag.jar_snubbed",
    "text": "“1820 年花始月，史家会讲堂。要开盖子，回了一句回头再说。记一笔。”"
   },
   {
    "if": "flag.silcalas_refused",
    "text": "“同年。有人出五百金冠，没卖。”"
   },
   {
    "if": "flag.jar_asked && flag.jar_price_self",
    "text": "“1834 年。取音之前问过，价是主家自己付的。”别摇当庭把收下的东西摆了出来，是一小团光。那是你的一段记忆，到底是哪一段，你自己已经认不出来了。"
   },
   {
    "if": "flag.jar_asked && flag.jar_price_companion",
    "text": "“1834 年。取音之前问过，价是主家的同伴付的。”她把收下的那样东西摆了出来，是一小团光。付账的那位看了它一眼，怎么也想不起那是什么。"
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
    "text": "“抽气船上，停了一台撞锤。”"
   },
   {
    "if": "flag.fx_pumps_paused",
    "text": "“抽气船上，说动人停泵三天。记半笔。”"
   },
   {
    "if": "!flag.jar_sold && !flag.jar_used_unasked && var.jar_trust >= 3",
    "text": "账念完，别摇报了个总数，比你料想的要多。庭上的人互相看看，都把手里的叶子放下了。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "她记得比我还细。我不喜欢这样。"
   },
   {
    "if": "is.god",
    "text": "念账的老仙子念完，转过身对着你。照大妖精公约，神算不得签约的一方。"
   },
   {
    "if": "is.god",
    "speaker": "念账的",
    "text": "你签了不算数。你身边随便哪一个会死的来签，就算数。"
   }
  ],
  "first": [
   "quest q_knock stage 2",
   "codex c_slack_tide"
  ],
  "choices": [
   {
    "text": "听别摇开出仙子一方的价码",
    "if": "!flag.jar_sold && !flag.jar_used_unasked && var.jar_trust >= 3",
    "effects": [
     "flag court_signs",
     "item +jam_jar",
     "quest q_jar done"
    ],
    "result": "价开出来了：那片海的份额可以给，得拿人情、节日和真名来换，金冠一个也不收。仙子们只跟你们这一家签。别摇把空罐子还给你，说这东西你们那边还用得着。",
    "goto": "f_05"
   },
   {
    "text": "替公司解释这笔账的来龙去脉",
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
       "why": "守信之约：公司三百八十九年没毁过约，彼岸认这个"
      },
      {
       "if": "flag.fx_asked_rules",
       "n": 1,
       "why": "你照她说的规矩说话"
      }
     ]
    },
    "ok": {
     "text": "你没道谢，也没报真名，答应过的事一样一样都认了下来。念账的老仙子在账尾添了一笔，把账合上了，肯跟你们签。别摇把空罐子还给你。",
     "effects": [
      "flag court_signs",
      "item +jam_jar",
      "quest q_jar done"
     ],
     "goto": "f_05"
    },
    "fail": {
     "text": "你才说到第三句，老仙子就抬手止住了你：“你们那边的话，一说出口就变，我们这边不收。”潮水又动了起来。他们不跟你们签。",
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
    "text": "等庭上把账念完",
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
    "result": "账念完，仙子们不肯跟你们签。庭散了，潮水重新流动，那一圈光一盏接一盏地灭了。往后能走的，只剩下用强的那几条路。",
    "goto": "f_05"
   },
   {
    "text": "拒绝彼岸的条件，起身离场",
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
    "result": "你说公司不拿真名做买卖。老仙子点点头，看样子早就料到了。别摇没留你，也没送你，把空罐子往你脚边一放就走了。",
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
    "text": "庭上众人尚未散去，远处云层忽然裂开。有个青铜色的身影坠下来，半空展开了翅膀。他就是公司匿名的大股东，共和国的德希尔德将军，也就是青铜龙阿赫特。"
   },
   {
    "if": "!flag.partner_to_hakhepra",
    "text": "他比传说里的要小，翼展也就三条船那么长，左边那只翅膀每扇三下就要歪一次。1790 年在泽拉特，他被专打龙鳞的炮轰了下来，从那以后，这是他第一次飞。"
   },
   {
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "text": "他在你们桅杆顶上兜了两圈，然后落到水上。水只没到他胸口，周围直冒白汽。"
   },
   {
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "speaker": "阿赫特",
    "text": "十五年的报告我全看过了，字写得难看，数目倒都对。那帮小东西不肯跟我签，说是嫌我个头太大。我活了三千岁，第一次有人嫌我大！"
   },
   {
    "if": "flag.partner_to_guns",
    "text": "他身上带着新伤，鳞片一道一道翻着，都是炮弹犁出来的。他没有往下落，停在半空里吸了一口气，胸口亮了起来。"
   },
   {
    "if": "flag.partner_to_hakhepra",
    "text": "傍晚来了一条小船，船头点着一盏灯，送信的人穿着哈赫普拉的袍子。信是贾内比萨写的，字很工整，说青铜龙阿赫特回家了，就是公司那位匿名的大股东、哈赫普拉人拜的神。祂进宫那天走了一圈，嫌宫殿修得小。信尾问了公司好，没提钱的事。"
   },
   {
    "if": "is.god && !flag.partner_to_hakhepra && !flag.partner_to_guns",
    "text": "他谁也不看，只看着你。“我让人拜了三千年，也没成。你只点了下头就成了。”他停了停，又说，“我问你一句话，你得照实说：等到没人拜你了，你打算怎么办？”"
   },
   {
    "if": "party.bura && !flag.partner_to_hakhepra",
    "speaker": "布拉",
    "text": "将军，1810 年我们团的花名册是你签的字。欠饷的那一栏也是你签的。"
   },
   {
    "if": "party.guilhem && !flag.partner_to_hakhepra",
    "speaker": "吉列姆",
    "text": "龙是会飞的，这我早知道。亲眼见着，今天还是第一次。"
   }
  ],
  "choices": [
   {
    "text": "如实回答他的问题",
    "tag": "神",
    "if": "is.god && !flag.partner_to_hakhepra && !flag.partner_to_guns",
    "once": true,
    "effects": [
     "rep partner -2",
     "var cult +1"
    ],
    "result": "你答了。他听完直摇头：“你要么是在骗我，要么是连你自己也不知道。”他说后一样比骗人还糟，说完就等着你往下讲。"
   },
   {
    "text": "同他算账：这一仗打赢打输都不划算",
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
     "text": "你给他算了一笔账：一头三千岁的龙，对上一条只载着二十几个人的船，打赢了算不了什么，万一打输了，报上会怎么写。他听完哼了一声，把翅膀收了起来，只说了两个字：“平手。”",
     "effects": [
      "flag partner_draw",
      "rep partner +1"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "“将军”两个字你刚出口，他就笑了：“我当将军的时候，你爷爷还没断奶。”说着他向后一仰，从水里飞了起来。",
     "goto": "f_05f"
    }
   },
   {
    "text": "向他当面转述瓦伦盖尔特的话",
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
     "text": "“瓦伦盖尔特问您好。他还问，没人拜您以后，您睡得着吗？”他一动也没动，过了很久才开口，问的是阿拉莫莱每天几点钟点灯。船上没有人知道。他转过身往南飞走了，回家去了，左边那只翅膀还是一扇一歪的。",
     "effects": [
      "flag partner_draw",
      "flag partner_goes_home"
     ],
     "goto": "f_05b"
    },
    "fail": {
     "text": "他才听到一半，喉咙里就响了一声，海面上的白汽一下浓了。“洇河里的那条泥鳅！”他飞了起来。",
     "goto": "f_05f"
    }
   },
   {
    "text": "请他以公司股东身份上船旁听",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns && flag.signed_partner_paper",
    "effects": [
     "rep partner +1"
    ],
    "result": "他变回人形，从水里登上船，身上的将军制服却是干的。他在甲板上随手拉了把椅子坐下，翘起腿：“你们谈，我只是来听。”",
    "goto": "f_05b"
   },
   {
    "text": "向青铜龙出手",
    "if": "!flag.partner_to_hakhepra && !flag.partner_to_guns",
    "goto": "f_05f"
   },
   {
    "text": "喊他住手",
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
     "text": "你喊的是他的名字，旧的那一个。他胸口的光暗了下去，身子落到了水上，呛了一口白汽。“平手，”他说，“这一仗也算平手。”",
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
    "text": "迎战青铜龙",
    "if": "flag.partner_to_guns",
    "goto": "f_05f"
   },
   {
    "text": "妥善收起信件",
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
   "阿赫特腾空时，身下的海面猛地凹陷。第一声吐息带出雷电，水花炸开，船上每个人的头发都竖了起来。",
   "他飞得不稳，左边那只翅膀一扇一歪，{?flag.partner_to_guns:新伤都在他肚皮下面，一道一道还冒着烟。|毕竟是三千岁的龙了，又有四十五年没飞过。}每次往下扑之前，他都要先看一眼船上有没有炮。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "他的左翼每扇三下就歪一次。趁第三下打。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上一次有人跟神动手，我只在画上见过。画上的人后来都死了。我只是提醒一句。"
   }
  ],
  "choices": [
   {
    "text": "迎战青铜龙",
    "if": "partysize >= 4",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "阿赫特腾空而起，身下的水面塌出一个大坑。他胸口一亮，雷声紧跟着到了。",
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
       "desc": "1790 年泽拉特一战，他中过对付龙鳞的炮，落进了湖中。成功时，所有敌人陷入「束缚」，持续 1 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这三个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口吐息就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "他左翼有旧伤，每扇三下就会歪一次。成功时，所有敌人陷入「破绽」，持续 3 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得很准，就是第三下。你一声喊，全船的枪和咒都朝他左肋下面打了过去。",
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
       "desc": "你手边有历次汇票和入股的日期、金额。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "你从 1820 年的第一张汇票念起，一直念到血的股，念到机房的代持账户。他在半空里愣住了，这是第一次有人把他干的事一笔一笔念出来。",
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
    "text": "迎战青铜龙",
    "if": "partysize == 3",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "阿赫特腾空而起，身下的水面塌出一个大坑。他胸口一亮，雷声紧跟着到了。",
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
       "desc": "1790 年泽拉特一战，他中过对付龙鳞的炮，落进了湖中。成功时，所有敌人陷入「束缚」，持续 1 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这三个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口吐息就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "他左翼有旧伤，每扇三下就会歪一次。成功时，所有敌人陷入「破绽」，持续 3 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得很准，就是第三下。你一声喊，全船的枪和咒都朝他左肋下面打了过去。",
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
       "desc": "你手边有历次汇票和入股的日期、金额。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "你从 1820 年的第一张汇票念起，一直念到血的股，念到机房的代持账户。他在半空里愣住了，这是第一次有人把他干的事一笔一笔念出来。",
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
    "text": "迎战青铜龙",
    "if": "partysize == 2",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "阿赫特腾空而起，身下的水面塌出一个大坑。他胸口一亮，雷声紧跟着到了。",
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
       "desc": "1790 年泽拉特一战，他中过对付龙鳞的炮，落进了湖中。成功时，所有敌人陷入「束缚」，持续 1 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这三个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口吐息就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "他左翼有旧伤，每扇三下就会歪一次。成功时，所有敌人陷入「破绽」，持续 3 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得很准，就是第三下。你一声喊，全船的枪和咒都朝他左肋下面打了过去。",
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
       "desc": "你手边有历次汇票和入股的日期、金额。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "你从 1820 年的第一张汇票念起，一直念到血的股，念到机房的代持账户。他在半空里愣住了，这是第一次有人把他干的事一笔一笔念出来。",
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
    "text": "迎战青铜龙",
    "if": "partysize <= 1",
    "combat": {
     "title": "青铜的翅膀",
     "intro": "阿赫特腾空而起，身下的水面塌出一个大坑。他胸口一亮，雷声紧跟着到了。",
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
       "desc": "1790 年泽拉特一战，他中过对付龙鳞的炮，落进了湖中。成功时，所有敌人陷入「束缚」，持续 1 回合。失败时，行动者受到 2d8 点钝击伤害。",
       "check": {
        "skill": "intimidation",
        "dc": 18
       },
       "success": {
        "text": "他一听见这三个字，翅膀就收了一下，不敢再往高处飞，只贴着水面低低地兜了一圈，是在找炮口。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "他笑了，笑声就是雷。“泽拉特那一仗是平手。”下一口吐息就冲着你来了。",
        "selfDmg": "2d8"
       }
      },
      {
       "id": "wing",
       "name": "盯住他左边那只翅膀",
       "desc": "他左翼有旧伤，每扇三下就会歪一次。成功时，所有敌人陷入「破绽」，持续 3 回合。失败时，行动者受到 1d10 点钝击伤害。",
       "check": {
        "skill": "perception",
        "dc": 16
       },
       "success": {
        "text": "你数得很准，就是第三下。你一声喊，全船的枪和咒都朝他左肋下面打了过去。",
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
       "desc": "你手边有历次汇票和入股的日期、金额。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点钝击伤害。",
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
        "text": "你从 1820 年的第一张汇票念起，一直念到血的股，念到机房的代持账户。他在半空里愣住了，这是第一次有人把他干的事一笔一笔念出来。",
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
   "阿赫特落进海里，水在周围翻滚。再浮上来时，他已变回人形，湿透的共和国将军制服贴在身上，左袖空了半截。",
   {
    "speaker": "阿赫特",
    "text": "平手。"
   },
   "他扒着你们的船舷，不往上爬，青铜色的指甲一根一根都抠进了木头里。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "把他拉上来。不管是死的还是活的，总得有人签收。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "对他客气一点吧。他活了三千年，我们当中没有谁活过这么久。"
   },
   {
    "if": "is.god",
    "text": "他看着你，并没有求你。“你点一下头就行了，”他说，“你连这个都用不着学。”"
   }
  ],
  "choices": [
   {
    "text": "拉他上船，再放他走",
    "effects": [
     "flag partner_draw",
     "approval narwen +1",
     "approval bura +1"
    ],
    "result": "他在甲板上坐了一会儿，把袖子拧干，说这一仗是平手，你们的报告最好也这么写。说完他就下了水，往南游出去一段才飞起来，飞得很低。",
    "goto": "f_05b"
   },
   {
    "text": "不伸手拉他",
    "effects": [
     "flag partner_dead",
     "approval narwen -1",
     "rep south -1",
     "rep partner -3"
    ],
    "result": "他在船舷上又扒了一会儿，手指一根一根松开，沉了下去。那片海很深。阿拉莫莱今天黄昏照样会点灯，不会有人去告诉他们。",
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
    "text": "青铜龙阿赫特把仙子的庭冲散了。那一圈光四下里飞开，有几点再也没亮起来。他落到你们的桅杆顶上，变回人形，制服是干的，翘着腿，等你签字。"
   },
   "过了平潮庭，海水由黑绿转成铅灰，再远处是一片白。诺罗说，家里往上数好几代，也没有人到过那边。再往外走，船上得有个认路的人。",
   {
    "if": "flag.alvar_pilot",
    "text": "阿尔瓦站在船头，两只角已经从帽子里顶了出来。他说那边有一座城、一片浅滩，还有一扇门，一样比一样有意思，说完自己先笑了起来。"
   },
   {
    "if": "flag.pilots_paid",
    "text": "诺罗手下的人拿到了领航权，往外的水路他们也认得，只是开船之前得先拜一拜。"
   },
   {
    "if": "party.narwen || flag.narwen_custodian",
    "text": "娜尔雯摊开热忱派第二次探险的海图，拿指甲顺着一条线划过去，一直划到纸边。"
   },
   {
    "if": "flag.salvation_sails",
    "text": "得救号已经起锚往外走了，船尾挂着一盏灯。你们只管跟着那盏灯走就行。"
   },
   {
    "if": "is.god",
    "text": "你往外望去，看得见那条径一直通到什么地方。船上的人都不看海图了，全看着你。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "往外走，账上我就记“远洋”。往回走，就记“返航”。这两样我都写得动，你来挑。"
   }
  ],
  "first": [
   "quest q_partner done"
  ],
  "choices": [
   {
    "text": "驶向更远的海域",
    "req": "flag.alvar_pilot || flag.pilots_paid || party.narwen || flag.narwen_custodian || flag.salvation_sails || is.god",
    "reqText": "需要有人认路：阿尔瓦、拿到领航权的诺罗、娜尔雯的海图，或者得救号",
    "effects": [
     "flag went_beyond"
    ],
    "goto": "f_06"
   },
   {
    "text": "调头回平潮庭外抛锚",
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
   "又走了十一天，雾里现出一座城。这里是暗影位面的归寂领，死者待的地方。城的样子是卡斯托纳斯，你们十二年前去过的那一座，眼前这座却足足大了三倍，城墙完整，高塔一座不少，还是巨龙苏醒以前的模样，街上连一盏煤气灯也没有。城墙外面一圈一圈全是后人盖的房子，哪个年代的都有。",
   "满街都是排队的死人，人人手里捏着一张纸条，上面写着号。穿红袍的办事员沿着队伍走，肩上扛着镰刀，刀口朝外。队伍最前面摆着一排桌子，桌子后面一个人也没有。听队尾的人说，这条队已经有一百多年没往前挪过了。",
   "活人也可以在这里住下，只要肯守红衣的规矩。规矩就贴在城门口，一共四条，第一条是不许插队。在这里想问哪个死人一句话，得先让办事员放你到前面去。",
   {
    "if": "is.immortal",
    "text": "红衣的审计在那排空桌上摆了一份卷宗，厚厚的一本，封皮上写的是你的名字。你不会死，他们带不走你，就当着你的面，把同船每一个人的名字挨个抄了一遍。办事员抄完抬起头看你，像在看一笔收不回来的账。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "他们排了一百年，我们连一天也没排过。别催他们。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "一百年都不挪窝。比陆军部补饷还慢。"
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
    "text": "找康威尔广场扔砖的孩子，问那一枪是谁开的",
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
       "why": "求真之约：去看，回来说"
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
     "text": "他还是十四五岁的样子，手里还攥着那块砖。你问他那一枪是谁开的。他说：“我没看见，”说着把砖翻了个面，“我那时正看着手里这个。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "办事员不肯放你过去。你只好隔着三条街喊。他听见了，也喊回来一句，你只听全了后半截：“……手里这个。”这地方的寒气从脚底往上爬，已经爬到了膝盖。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "找雅米娜，问她账本最后一栏的数",
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
       "why": "求真之约：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      }
     ]
    },
    "ok": {
     "text": "她站着，死了也还是站着。你问她账本最后一栏是多少。她说：“八个席位，空着六个，这里也得排队。年轻人，我的队你插不了。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着一片人头喊她。她转过脸来，冲你说了一个数。那个数太长，你只记住了头两位。寒气已经爬上了膝盖。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "找贝尔纳二世，问他病榻前咽回去的半句话",
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
       "why": "求真之约：去看，回来说"
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
     "text": "老人坐在队伍里，手里捧着一本祈祷书。你问他，当年咽回去的那半句到底是什么。他想了很久才说：“门。当时我们都当它是‘把门关上’。”",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着三条街喊他。他抬了一下手，不知是在给你祝福，还是让你别嚷。寒气已经爬上了膝盖。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "在排队的死者里找布拉",
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
       "why": "求真之约：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      }
     ]
    },
    "ok": {
     "text": "她在队伍里站得笔直，下巴上的铰链锈住了，嘴张不开，只能冲你比手势，先比了个十一，又竖起一根指头。饷还欠着，又多欠了一个月。",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "你隔着人头只看见了她的后脑勺，她没有回头。办事员说她排的这一队归另一张桌子管。那张桌子后面也没有人。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "询问排在队尾的人",
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
       "why": "求真之约：去看，回来说"
      },
      {
       "if": "flag.reaper_file",
       "n": -2,
       "why": "红衣给你立过案"
      }
     ]
    },
    "ok": {
     "text": "队尾是个穿短褂的男人，看不出是哪朝哪代的。你还没开口，他先问了一句：“今年是哪一年？”你告诉了他。他点点头，往前挪了半步，可他前面的人并没有动。",
     "effects": [
      "flag dead_asked",
      "xp 300"
     ],
     "goto": "f_07"
    },
    "fail": {
     "text": "他问你今年是哪一年。你答了，他没听清，又问了一遍。这时办事员过来把你请出了队伍。",
     "effects": [
      "flag dead_asked",
      "hp -5"
     ],
     "goto": "f_07"
    }
   },
   {
    "text": "在队伍里寻找熟人",
    "tag": "长寿",
    "if": "is.longlived",
    "effects": [
     "flag dead_asked",
     "xp 300"
    ],
    "result": "你找了很久，总算找着一个，是八十年前在{?is.dwarf:矮人之路|月河}上跟你同坐过一条船的人，还是当年那副样子。他认出了你，第一句就问你是不是也来排队了。你说不是。他说那就好，这里的队太长了。",
    "goto": "f_07"
   },
   {
    "text": "从队旁经过，不向任何人打听",
    "effects": [
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "你从队伍旁边走了过去，没有人拦你。走到另一头的城门口，你回头看了一眼，队伍还是那么长。",
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
   "再往外，雾散了，船进了天界的浅滩：水只有齐膝深，是温的，水底铺着白沙。一道长墙沿着浅滩伸出去，两头都望不到尽头，墙脚下扎着一顶顶打满补丁的帆布帐篷。",
   "住帐篷的都围了上来。他们是天使，个子很高，翅膀收在背后，羽毛已经脏了。他们不问你是谁，先问老家那边有没有消息。他们也迷了路：都说造他们的那一位已经死了，也都记得有个回不去的地方，却谁也说不出它在哪里。",
   "其中个子最高的一位，翅膀断过一次，接得有些歪。他说他是最后一个见过托丽丝的人，那是一百多年前的事了。她提着一盏灯从这里蹚水过去，往那边走了。他抬起手，指了个方向。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "1666 年的那份报告，就是从这片水里传回去的。（她把眼镜摘下来擦了擦。）那盏灯是我点的，我替她一路举到门口。她接过去就走了。"
   },
   {
    "if": "is.divine",
    "text": "有个天使拉住你的袖子，问你祷告时，有没有谁应过你。"
   },
   {
    "if": "is.god",
    "text": "他们围着你，没有跪。断过翅膀的那位凑到你面前闻了闻，问：“你是从门里面出来的吗？”"
   }
  ],
  "choices": [
   {
    "text": "告诉他：也许有过一次回应",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "他听完，把这句话刻在一块木片上，挂到了帐篷门口。那下面已经挂着十几块了。"
   },
   {
    "text": "在长墙脚下歇息",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "你们在墙根下睡了一觉。天使替你们守夜，守得非常认真，一整夜都没坐下过。"
   },
   {
    "text": "照实告诉他们：门锁着，里面是谁还不知道",
    "effects": [
     "flag angels_truth",
     "approval narwen +1",
     "rep church +1"
    ],
    "result": "他们听完，没有吵。只有一位回到帐篷里，把一件叠好了的袍子又打开了。",
    "goto": "f_08"
   },
   {
    "text": "宽慰他们：门那边有人在等",
    "effects": [
     "heal 4d8",
     "approval narwen -1"
    ],
    "result": "你说门那边有人在等着他们。他们高兴起来，捧着水给你们洗伤口，伤口合得很快。{?party.narwen:娜尔雯站在旁边，没有帮你说话。|}",
    "goto": "f_08"
   },
   {
    "text": "问他们愿不愿意随船离开",
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
     "text": "断过翅膀的那位想了一整夜，第二天早上带来了四十一个天使，每人背着一卷帆布，要跟你们走。",
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
   "天界浅滩尽头的坡顶上立着天门，也就是天国的门。高大的石门上没有把手和门环，正中只有一个方形钥匙孔。那个轮廓你认得：揭秘教会的圣物碎片当中，那块忽明忽暗的黑方块正是这个形状。",
   "坡下扣着一条船底朝天的小船，是托丽丝的。她就是 1666 年辞任的那位院长，后来留在了这扇门前。船帮上密密麻麻刻满了刻痕，五道一组，刻了很多年，到某一天就停了。船下没有尸骨，只有一个油布包，里面包着一本拓本，拓的全是船帮上这些刻痕。",
   "门后有声音，翻来覆去说的还是“他们”。照那声音自己的说法，这扇门是里面的人在魔力第一次被偷走之后闩上的。天国是魔力最大的一处存货。门一开，外面缺的魔力能补上一千年，可里面的人也就成了被人开采的矿。",
   {
    "if": "party.narwen || flag.narwen_custodian",
    "speaker": "娜尔雯",
    "text": "是神在说话，用的是我们受得了的嗓子。"
   },
   {
    "if": "!party.narwen && !flag.narwen_custodian && !flag.jar_sold",
    "speaker": "别摇",
    "text": "是主人家。主人家要闩门，做客人的就别多问了。"
   },
   {
    "if": "party.middlesday && !flag.m_dormant",
    "speaker": "礼拜三",
    "text": "是人。箱子里装着人的时候是什么声音，我知道。"
   },
   {
    "if": "is.mechanim",
    "text": "你用不着译码，门后的话你直接就听得懂。七号线夜班的机器在停机前都会响那么一声，门后的声音跟它是一个调子。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "要我说，这是一段留声。录的人还挺有礼貌。"
   },
   {
    "if": "!party.guilhem && !flag.etta_left",
    "speaker": "埃塔",
    "text": "是一段留声。留声的那位很有礼貌，可有礼貌的人，我一个都不信。"
   },
   {
    "if": "flag.m_dormant",
    "text": "你们把礼拜三睡着的那只箱子抬到了门前。门后那一声刚响起来，箱子里也跟着响了一下。紧接着它坐了起来，把周围看了一圈，很客气地问：“请问各位是谁？”它醒了，可不记得你们了。"
   },
   {
    "if": "party.narwen || flag.narwen_custodian",
    "text": "娜尔雯把灯放在门槛前，跪了下去，又站起身。她是想跟碎片立契，好问门后一句话。分形修会里立契的人，多半就死在这一步上。"
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
    "text": "贴近钥匙孔听一听",
    "tag": "机械人",
    "if": "is.mechanim",
    "once": true,
    "effects": [
     "approval middlesday +1",
     "xp 200"
    ],
    "result": "你贴着听了一会儿。里面有人在数数，数得很慢，数到四十就停了，又从一数起。"
   },
   {
    "text": "劝娜尔雯先别立契",
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
     "text": "她听你把话说完，提起灯退回了船上，只说了一句“下次吧”。这句话她已经说了一百六十九年了。",
     "effects": [
      "flag narwen_talked_down",
      "quest q_narwen done"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "她听完，说你说得对。说完她还是跪了下去。",
     "goto": "f_08b"
    }
   },
   {
    "text": "亲自立契，向门后问一句话",
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
     "text": "你把手按在门上，门那边的东西就顺着你的手往里走，一直走到胸口才停住。你问了一句话，答你的只有一个词。你记住了，跟谁也没说。",
     "effects": [
      "flag pc_pact",
      "xp 600"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "那东西走过了胸口也没停，一直走到了头顶。等你醒过来，人已经躺在船底了，有人正往你嘴里灌水。后来一照镜子，左边鬓角白了一绺。话你问到了，可惜只记得半个词。",
     "effects": [
      "flag pc_pact",
      "hp 1"
     ],
     "goto": "f_09"
    }
   },
   {
    "text": "让娜尔雯去立契",
    "if": "party.narwen || flag.narwen_custodian",
    "goto": "f_08b"
   },
   {
    "text": "不立契，先回船",
    "effects": [
     {
      "if": "party.narwen || flag.narwen_custodian",
      "then": [
       "approval narwen -1"
      ]
     }
    ],
    "result": "{?party.narwen:娜尔雯把灯留在门槛前，跟着你回了船。|你们退回了船上，门后的声音一直没停。}",
    "goto": "f_09"
   }
  ]
 },
 "f_08b": {
  "id": "f_08b",
  "title": "立契",
  "art": "ev_priest_phantom",
  "text": [
   "娜尔雯在门槛前跪下，额头轻贴门板。手边那盏灯的火苗始终朝门缝歪着。",
   "门后的声音都停了。过了片刻，才有一个声音单独响起来，比别的都高，也慢。{?party.middlesday:礼拜三胸口也跟着亮了一下。|}{?flag.fragment_aboard:船上匣子里的碎片也跟着响了。|}",
   "她的肩膀抖了起来。她等了一百六十九年，等的就是这一声。"
  ],
  "choices": [
   {
    "text": "留在娜尔雯身旁，替她扶住灯",
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
     "text": "等她站起来，脸上全是泪。话她问到了，只转述了一句：“它说，上次有人问这个，是 1666 年。”",
     "effects": [
      "flag narwen_pact_done",
      "quest q_narwen done",
      "approval narwen +2"
     ],
     "goto": "f_09"
    },
    "fail": {
     "text": "先灭的是灯。她再也没站起来。你们把她抬到坡下，放在那条小船旁边。门口从此多了一盏灯，是你们点的。",
     "effects": [
      "flag narwen_dead",
      "companion -narwen gone",
      "quest q_narwen fail"
     ],
     "goto": "f_09"
    }
   },
   {
    "text": "把她从门槛上拉回来",
    "effects": [
     "flag narwen_talked_down",
     "quest q_narwen done",
     "approval narwen -2"
    ],
    "result": "你一把将她拽了回来，灯也带倒了。她盯着你看了很久，没骂你，只说了一句：“你们都这样。”",
    "goto": "f_09"
   }
  ]
 },
 "f_09": {
  "id": "f_09",
  "title": "敲不敲",
  "art": "load_3",
  "text": [
   "门还是那扇门。能用得上的东西都摆到了甲板上：一只敲门的手，{?flag.fragment_aboard:一块拳头大的碎片，|}{?flag.siphon_taken:一台倒过来接的撞锤，|}再就是这一船人，都在等你开口。",
   {
    "if": "flag.fragment_aboard",
    "text": "匣子里的碎片轻轻响了一声。今年它只响过四次，这是第五次。"
   },
   {
    "if": "flag.salvation_sails",
    "text": "得救号在你们后面下了锚。那是揭秘教会热忱派的船，船头站着他们的通神者，披风卫在甲板上排成了一排。他们手里捧着碎片，眼下在等你先动：你要是不拿碎片开门，他们就自己开。"
   },
   {
    "if": "party.middlesday || is.mechanim",
    "text": "{?is.mechanim:你胸口|礼拜三胸口}那颗芯核正跟着门后的声音走，一下一下的，比平常慢。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "你想起了七号线。那一夜要是有人去敲一敲厂门，七八三会不会抬起头？"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "撞门这种事我不干，敲门行。要是敲了不开，我就在这里站一夜岗。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "拿钥匙开门，是最体面的。可这把钥匙不是我们的。"
   },
   {
    "if": "is.god",
    "text": "你往前走近一步，这才看见门在你这一侧是有把手的，铜的，磨得发亮，像是常有人握。别人谁也看不见它。{?party.narwen:娜尔雯问你在看什么。|}"
   }
  ],
  "choices": [
   {
    "text": "不碰门，返回船上",
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
    "text": "不碰门，返回船上",
    "if": "flag.salvation_sails",
    "effects": [
     "flag fx_intent_leave"
    ],
    "result": "你刚一转身，得救号上的披风卫就跳下了水。",
    "goto": "f_09z"
   },
   {
    "text": "叩响石门",
    "if": "!flag.salvation_sails",
    "effects": [
     "flag gate_knock",
     "approval bura +1"
    ],
    "result": "你敲了三下。门没开，里面有人答了一声，听不清答的什么。浅滩那边的天使，一个个全都转过了身。",
    "goto": "f_10"
   },
   {
    "text": "叩响石门",
    "if": "flag.salvation_sails",
    "effects": [
     "flag fx_intent_knock"
    ],
    "result": "你抬起手，还没等落下去，得救号上的披风卫已经跳下了水。",
    "goto": "f_09z"
   },
   {
    "text": "用碎片开门",
    "if": "flag.fragment_aboard || flag.salvation_sails",
    "effects": [
     "flag gate_key",
     "flag mass_awakening",
     "world tears +3",
     "world doors +2",
     "approval middlesday +1"
    ],
    "result": "{?flag.fragment_aboard:你把碎片按进了钥匙孔。|通神者把碎片按进了钥匙孔，你站在旁边，没有拦。}只听很轻的一声，门开了一掌宽。",
    "goto": "f_10"
   },
   {
    "text": "用撞锤撞门",
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
    "text": "试着握住门把手",
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
   "得救号上的披风卫蹚着水朝石门走来，左肩垂着披风，剑上的咒文发亮。热忱派的通神者走在最后，双手捧着亮得刺眼的碎片。",
   {
    "speaker": "通神者",
    "text": "魔法先是被先驱精灵偷过一次，后来又被法师们锁了八百年。我们只是来把门打开。朋友，你挡着的是穷人街上的路灯。"
   },
   "他这话说得很和气，跟灰磨在文森顿讲道是一个调子。他是真心这么想的。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "从来没有人凭着碎片的那几个词去开门。院长令上写得明白：不许。"
   }
  ],
  "choices": [
   {
    "text": "守住石门，拦下披风卫",
    "if": "partysize >= 4",
    "combat": {
     "title": "得救号",
     "intro": "披风卫踏水而来，左肩披风，剑上咒文亮着。通神者双手捧着碎片，走在队尾。",
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
       "desc": "碎片鸣响时，披风卫剑上的咒文也会回应。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点雷鸣伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音被闷在了里面。披风卫剑上的咒文一下暗了三分，好几个人都低头看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手，你一缩手，碎片就尖叫了一声，震得你耳朵里像灌进了开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝明令禁止把碎片说的话当作开门的理由。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完，念得比你还熟。",
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
    "text": "守住石门，拦下披风卫",
    "if": "partysize == 3",
    "combat": {
     "title": "得救号",
     "intro": "披风卫踏水而来，左肩披风，剑上咒文亮着。通神者双手捧着碎片，走在队尾。",
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
       "desc": "碎片鸣响时，披风卫剑上的咒文也会回应。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点雷鸣伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音被闷在了里面。披风卫剑上的咒文一下暗了三分，好几个人都低头看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手，你一缩手，碎片就尖叫了一声，震得你耳朵里像灌进了开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝明令禁止把碎片说的话当作开门的理由。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完，念得比你还熟。",
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
    "text": "守住石门，拦下披风卫",
    "if": "partysize == 2",
    "combat": {
     "title": "得救号",
     "intro": "披风卫踏水而来，左肩披风，剑上咒文亮着。通神者双手捧着碎片，走在队尾。",
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
       "desc": "碎片鸣响时，披风卫剑上的咒文也会回应。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点雷鸣伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音被闷在了里面。披风卫剑上的咒文一下暗了三分，好几个人都低头看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手，你一缩手，碎片就尖叫了一声，震得你耳朵里像灌进了开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝明令禁止把碎片说的话当作开门的理由。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完，念得比你还熟。",
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
    "text": "守住石门，拦下披风卫",
    "if": "partysize <= 1",
    "combat": {
     "title": "得救号",
     "intro": "披风卫踏水而来，左肩披风，剑上咒文亮着。通神者双手捧着碎片，走在队尾。",
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
       "desc": "碎片鸣响时，披风卫剑上的咒文也会回应。成功时，所有敌人陷入「晕眩」，持续 1 回合。失败时，行动者受到 2d6 点雷鸣伤害。",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 17
       },
       "success": {
        "text": "匣盖扣上了，碎片的声音被闷在了里面。披风卫剑上的咒文一下暗了三分，好几个人都低头看自己的剑。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "匣子烫手，你一缩手，碎片就尖叫了一声，震得你耳朵里像灌进了开水。",
        "selfDmg": "2d6",
        "type": "thunder"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝明令禁止把碎片说的话当作开门的理由。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d8 点钝击伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "披风卫里有两个年轻的停了手，回头看通神者。通神者也顿了一下，才接着往下念。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "通神者替你把下一句念完，念得比你还熟。",
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
   "披风卫退回得救号。通神者由人抬上船，口中反复念着碎片给出的两个词里的第一个。碎片随他们走了，门仍关着。",
   "浅滩那边的天使从头看到尾，没有帮哪一边。只有断过翅膀的那位冲你举了举手，不知是道喜，还是道别。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "跟教会的人动手，我这辈子还是第一次。这一笔该记在谁头上？"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "记在公司头上。三百八十九年了，这是第一笔。"
   }
  ],
  "choices": [
   {
    "text": "返回石门前敲三下",
    "if": "flag.fx_intent_knock",
    "effects": [
     "flag gate_knock",
     "approval bura +1"
    ],
    "result": "你敲了三下。门没开，里面有人答了一声，听不清答的什么。浅滩那边的天使，一个个全都转过了身。",
    "goto": "f_10"
   },
   {
    "text": "起锚返航",
    "if": "flag.fx_intent_leave || !flag.fx_intent_knock",
    "effects": [
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "你们收了锚。得救号没有跟上来，就泊在门前，一直到你们再也看不见它。",
    "goto": "f_10"
   }
  ]
 },
 "f_09f": {
  "id": "f_09f",
  "title": "撞",
  "text": [
   "撞锤第一下没能撼动石门。第二下，门槛裂开。第三下，门被撞得比用钥匙开启时还宽，光一直漫到浅滩，水面也亮了。",
   "跟着光出来的是一队穿红袍的人，一个审计带着几个办事员，袍子拖在水里也不湿。审计手里拿着一本账，第一句问是谁让开的这扇门，第二句问船上有谁是该死没死的。",
   {
    "if": "is.god",
    "text": "审计一看见你，就在账上划了一道。“呆账，”他说，“先办别人的。”"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我说过，撞门的事我不干。可他们这是冲着人来的。"
   }
  ],
  "choices": [
   {
    "text": "挡在撞锤前，护住操锤的船员",
    "if": "partysize >= 4",
    "combat": {
     "title": "查账",
     "intro": "审计合起账本，放低肩上的镰刀。办事员们各走几步，将撞锤围在中间。",
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
       "desc": "公司章程、船籍和出港签证都能作为凭据，前提是盖过印。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点黯蚀伤害。",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "守信之约的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑了过来，两个人一个章一个章地对，看得很仔细。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给你，顺手一镰刀划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任当日签下了这道最后的命令。按教会的说法，被查问的是天使。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d10 点黯蚀伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就退后半步，红袍的下摆第一次沾了水。办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上划了一道：“冒用院长令，一次”。",
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
    "text": "挡在撞锤前，护住操锤的船员",
    "if": "partysize == 3",
    "combat": {
     "title": "查账",
     "intro": "审计合起账本，放低肩上的镰刀。办事员们各走几步，将撞锤围在中间。",
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
       "desc": "公司章程、船籍和出港签证都能作为凭据，前提是盖过印。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点黯蚀伤害。",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "守信之约的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑了过来，两个人一个章一个章地对，看得很仔细。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给你，顺手一镰刀划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任当日签下了这道最后的命令。按教会的说法，被查问的是天使。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d10 点黯蚀伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就退后半步，红袍的下摆第一次沾了水。办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上划了一道：“冒用院长令，一次”。",
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
    "text": "挡在撞锤前，护住操锤的船员",
    "if": "partysize == 2",
    "combat": {
     "title": "查账",
     "intro": "审计合起账本，放低肩上的镰刀。办事员们各走几步，将撞锤围在中间。",
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
       "desc": "公司章程、船籍和出港签证都能作为凭据，前提是盖过印。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点黯蚀伤害。",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "守信之约的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑了过来，两个人一个章一个章地对，看得很仔细。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给你，顺手一镰刀划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任当日签下了这道最后的命令。按教会的说法，被查问的是天使。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d10 点黯蚀伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就退后半步，红袍的下摆第一次沾了水。办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上划了一道：“冒用院长令，一次”。",
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
    "text": "挡在撞锤前，护住操锤的船员",
    "if": "partysize <= 1",
    "combat": {
     "title": "查账",
     "intro": "审计合起账本，放低肩上的镰刀。办事员们各走几步，将撞锤围在中间。",
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
       "desc": "公司章程、船籍和出港签证都能作为凭据，前提是盖过印。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点黯蚀伤害。",
       "check": {
        "skill": "persuasion",
        "dc": 18,
        "mods": [
         {
          "if": "faction == 'seal'",
          "n": 4,
          "why": "守信之约的人递的文书，他们认"
         }
        ]
       },
       "success": {
        "text": "办事员接过文书，放下镰刀，从袖子里摸出一副眼镜。审计也凑了过来，两个人一个章一个章地对，看得很仔细。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "办事员只看了一眼，说缺一个章，把文书撕成两半还给你，顺手一镰刀划了过来。",
        "selfDmg": "2d8",
        "type": "necrotic"
       }
      },
      {
       "id": "decree",
       "name": "念 1666 年的院长令",
       "desc": "托丽丝辞任当日签下了这道最后的命令。按教会的说法，被查问的是天使。成功时，所有敌人陷入「恐慌」，持续 2 回合。失败时，行动者受到 1d10 点黯蚀伤害。",
       "check": {
        "skill": "religion",
        "dc": 17,
        "adv": "party.narwen || flag.narwen_custodian"
       },
       "success": {
        "text": "刚念到托丽丝的名字，审计就退后半步，红袍的下摆第一次沾了水。办事员们都回头看他。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你念串了一行。审计在账上划了一道：“冒用院长令，一次”。",
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
    "text": "返航途中，你们挨着压舱石，在底舱开最后一次团务会。梁上仅有一盏马灯，随着船身轻轻来回摆动。"
   },
   {
    "if": "!flag.went_beyond",
    "text": "团务会开在平潮庭外的锚地上。这里的船不晃，桌子是平的，放一碗水都不会洒。"
   },
   {
    "if": "flag.fx_crew_taken",
    "text": "桌边空了三把椅子：操撞锤的三个船员被红衣人带走了。你的名字也记进了审计那本账。"
   },
   {
    "if": "flag.partner_draw && !flag.partner_signed",
    "text": "桌上压着一张字条，是拿青铜色的墨写的，上面只有“平手”两个字。"
   },
   {
    "if": "flag.narwen_pact_done",
    "text": "娜尔雯坐在桌角。门前问来的那句话，她还是只肯转述那一句，谁来问也不多说一个字。"
   },
   {
    "if": "flag.narwen_talked_down",
    "text": "娜尔雯的灯放在桌上，没有点，她说等下次再点。"
   },
   {
    "if": "flag.pc_pact",
    "text": "你鬓角那块地方还在发凉。门后答你的那个词，你没往账上写。"
   },
   {
    "if": "var.overruled >= 3",
    "text": "你推门进去才发现，会已经开完了。章程摊在桌上，第一页多了一条新规：本公司不签《他的帝国》，也不撞门。下面有好几个人的签名。你要是还想干这两样，就得先在章程上把自己的名字划掉。"
   },
   {
    "if": "var.overruled < 3 && party.bura",
    "speaker": "布拉",
    "text": "签哪一份都行，就是别签把人当井使的那一份。"
   },
   {
    "if": "var.overruled < 3 && party.middlesday && !flag.m_rewoken",
    "speaker": "礼拜三",
    "text": "十一份草约里，有三份写到了我们。请签那三份里的一份。"
   },
   {
    "if": "var.overruled < 3 && flag.m_rewoken",
    "speaker": "礼拜三",
    "text": "各位我都不认识，可账上说我是成员。那我就投一票，投给写到了我们的那一份。"
   },
   {
    "if": "var.overruled < 3 && party.guilhem",
    "speaker": "吉列姆",
    "text": "理论上，配给是最糟的办法。实际上，别的办法更糟，我算过三遍了。"
   },
   {
    "if": "var.overruled < 3 && party.narwen",
    "speaker": "娜尔雯",
    "text": "还没有人替那扇门签过字，你们是第一批。所以别急，慢慢来。"
   },
   {
    "if": "!flag.etta_left",
    "speaker": "埃塔",
    "text": "迟到者公司开到今天，三百八十九年了。照规矩，一百金冠以上的单子得由队长签字。这是最后一张。"
   },
   {
    "if": "flag.etta_left",
    "text": "埃塔的椅子空着。账本还在桌上，翻在最后一页，没人记账了。"
   },
   {
    "if": "!flag.jar_sold",
    "speaker": "别摇",
    "text": "这次我不开价。这是你们自己的账。"
   },
   {
    "if": "!flag.etta_left && world.doors <= 2 && !flag.article_ban",
    "speaker": "埃塔",
    "text": "还有一条路，我先提出来：把音叉沉了。位面之门开得还不大，禁令也没通过，趁这时把开门的音叉沉进海里，谁也不欠谁的。"
   },
   {
    "if": "is.god",
    "text": "照公约，你落的笔不算数，约得由凡人来签。你只能说签哪一份。{?flag.etta_left:|埃塔把笔摆到了你手边，想想，又挪回了她自己手边。}"
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
    "text": "签《配给本》，按份额分配魔力",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.article_ration && flag.court_signs && world.press >= 7 && world.chains <= 4 && ((rep.republic >= 3) + (rep.wand >= 3) + (rep.charter >= 3) + (rep.church >= 3) + (rep.union >= 3) + (rep.south >= 3) + (rep.partner >= 3)) >= 3 && (!is.god || partysize >= 1 || !flag.etta_left)",
    "reqText": "需要草约里有配给条款、平潮庭肯签、公众知情达到 7、奴役不超过 4、三方声望达到 3。你若是神，身边还得有凡人落笔",
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
    "result": "你在配给条款下面签了名。{?flag.etta_left:墨是你自己吹干的。|埃塔替你吹干了墨，在账上写下“配给，已签，没有酒”。}",
    "goto": "f_12"
   },
   {
    "text": "签《特许状》，准许特许公司去彼岸开采",
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
    "text": "将音叉沉海，断绝再次通航",
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
    "text": "签《玫瑰和约》，禁用破魔弹，由托管会管理魔法",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.article_ban && rep.wand >= 4 && (flag.crown_castine || flag.crown_ioriel) && (!is.god || partysize >= 1 || !flag.etta_left)",
    "reqText": "需要草约里有禁令条款、王冠与魔杖声望达到 4、洛伦特有人拿主意。你若是神，身边还得有凡人落笔",
    "effects": [
     "flag sign_rose",
     "rep wand +2",
     "approval guilhem +1",
     "approval bura -2",
     "quest q_knock done"
    ],
    "result": "你签了。和约的封皮是红的，上面压着一朵干玫瑰。{?party.bura:布拉站起身，出去了。|}",
    "goto": "f_12"
   },
   {
    "text": "签合伙人拟定的《他的帝国》",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "rep.partner >= 4 && !flag.partner_exposed && flag.signed_partner_paper && !flag.partner_dead",
    "reqText": "需要合伙人声望达到 4、没揭穿过他、签过他的文件、他还活着",
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
    "text": "签《守门人》，请娜尔雯留下守住关闭的门",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.gate_knock && world.press >= 6 && world.chains <= 3 && (party.narwen || flag.narwen_custodian) && !flag.narwen_dead",
    "reqText": "需要敲过门、公众知情达到 6、奴役不超过 3、娜尔雯在队里",
    "effects": [
     "flag sign_keeper",
     "flag keeper_narwen",
     "approval narwen +2",
     "quest q_knock done"
    ],
    "result": "娜尔雯接过笔，先在纸旁边试了试墨。“上次有人留下，是托丽丝。”她一边说一边签了名，“这次是我。”",
    "goto": "f_12"
   },
   {
    "text": "签《守门人》，由自己留下守住关闭的门",
    "if": "!(flag.gate_key || flag.gate_forced)",
    "req": "flag.gate_knock && world.press >= 6 && world.chains <= 3",
    "reqText": "需要敲过门、公众知情达到 6、奴役不超过 3",
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
    "text": "签收门缝里递出的状子",
    "if": "flag.gate_key",
    "effects": [
     "flag sign_gate",
     "approval middlesday +1",
     "quest q_knock done"
    ],
    "result": "状子是拿红绳捆着的，第一页上写着：里面的要跟外面的谈。你签了收，落的是公司的全名。",
    "goto": "f_12"
   },
   {
    "text": "以见证人身份签署采矿特许状",
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
    "result": "{?var.overruled >= 3:你先把自己的名字从章程上划掉，然后|你}在见证栏上签了名。墨是蓝的，是拿魔晶磨出来的。",
    "goto": "f_12"
   }
  ]
 },
 "f_11": {
  "id": "f_11",
  "title": "把手",
  "art": "load_17",
  "text": [
   "只有你看得见门把手。你握住往下一压，石门向内让出一道窄缝，恰够一人侧身通过。",
   "里面没有殿堂，没有光，也没有人出来迎你。正中央摆着一把木头椅子，空着。椅背上的漆磨掉了一块，是有人常年靠出来的。",
   "门后的那些声音原来都在这里，一个挨一个站在椅子后面的暗处。没有一个抬头，也没有一个请你坐。",
   "门外，{?party.narwen:娜尔雯提着灯|你的人}在门槛那边等着，从那里只能看见你的背。"
  ],
  "choices": [
   {
    "text": "坐上那把椅子",
    "effects": [
     "flag seat_sat",
     "world tears =9"
    ],
    "result": "你坐下了，椅子比看上去要暖和。暗处站着的那些里面，有一个第一次抬起了头。",
    "goto": "end_seat"
   },
   {
    "text": "进门，从里面上闩",
    "effects": [
     "flag seat_locked"
    ],
    "result": "你回头看了一眼门外的人，把门推上了。门闩在里面，是木头的，很沉。",
    "goto": "end_seat"
   },
   {
    "text": "把椅子搬出门带回去",
    "effects": [
     "flag seat_carried",
     "world doors +2",
     "world dove -1"
    ],
    "result": "椅子不沉。你扛着它侧身出了门。门外的人退后一步，给你让出一条道。",
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
   "回到托拉普里亚卡港，港务员翻开簿子，拿指甲点着其中一页念：“迟到者公司，出港是三年零十个月以前。”念完他抬头看看你们，又低头看看簿子。也难怪他，船上才过了几个礼拜，{?flag.fx_sailor_aged:除了那个老水手，|}谁的胡子都没见长。{?flag.fx_boat_lost:丢掉的那条舢板，港务员在簿子上另记了一行，要你们照价赔。|}",
   {
    "if": "is.immortal",
    "text": "外面过了三年零十个月，船上的人却一天也没老。这滋味你尝了很多年，他们是第一次。港务员换了人，是 1820 年那位的儿子{?flag.saw_the_boat:，他父亲你认得|}。"
   },
   "他递给你一捆旧报。最上面的《泰卢姆时报》用半版印着“可再生达姆斯塔尔的终结？”，署名是暗望所的德鲁兹纳。",
   "那天夜里，你们在码头上最后数了一次流星，{?world.tears >= 7:多得数不过来，就跟 1809 年的历书上写的一样|}{?world.tears == 6:数下来有二百来颗|}{?world.tears == 5:数下来是一百五十颗|}{?world.tears == 4:数下来有九十多颗|}{?world.tears == 3:数下来五十上下|}{?world.tears == 2:数下来只有二十几颗|}{?world.tears == 1:一只手就数得过来|}{?world.tears <= 0:可一颗也没有|}。",
   {
    "if": "flag.went_beyond || flag.dead_asked || flag.doors_flung",
    "text": "{?flag.went_beyond:去过门前的人，下船时都不大说话。|}{?flag.dead_asked:你把崩塌之城的那句答话又想了一遍。|}{?flag.doors_flung:港里的船比你记得的多出了三倍。|}"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "港务所里压着一封给你的信，盖着陆军部的戳，已经压了两年。你没有当着人拆。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "洛伦泰内来的信也在，封口上是一朵白玫瑰。你先看了笔迹，再去看信里的口气。"
   },
   {
    "if": "origin == 'concord'",
    "text": "镇议会寄来了一张单子，是 1789 年的，四百金冠。后面一栏还空着，等你填上“清讫”，或者填点别的。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "铸炉街七号线托人带来一句话：器材账上的十四号，有人来问过。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "你那份考察报告还压在箱子底，题目已经改过三次了。{?flag.karshyr_at_summit:峰会的签字页上有卡尔希尔一栏，报告里还得添上一段。|}这时你在码头上又改了一次。"
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
    "text": "读共和国头版",
    "once": true,
    "effects": [
     "codex c_broken_empire"
    ],
    "result": "这是《斗兽场哨兵报》，三年的头版都叠在了一起。{?flag.artheta:“破晓”过后，光行刑队的名单就登了两版。|}{?flag.dove_honoured:鸽之日那天补发了军饷，领饷的队伍排了三条街。|}{?flag.dove_released:鸽子放走后没多久，沿岸就多出了六面新旗。|}{?flag.dove_by_miracle:十一个邦的人梦见了同一只鸽子，议会为此吵了三天。|}{?world.dove >= 4 && world.dove <= 6:公投又推迟了一年，这一年里谁也没开枪。|}"
   },
   {
    "text": "读调查庭的报道",
    "once": true,
    "effects": [
     "codex c_konwell"
    ],
    "result": "调查庭查康威尔广场那一枪的事也见了报，登在第三版。{?flag.inquiry_truth:笔录全文照登，一个字没删，光你那一段就占了半版。|}{?flag.inquiry_cover:结论只登了一行：起因不明。|}{?flag.inquiry_blame_lorent:结论也登了出来：那一枪是洛伦特人放的。|}{?flag.ny_passed_order || flag.ny_held_order || flag.ny_stood_between:旁边一栏登着新年那天旧斗兽场的照片。|}"
   },
   {
    "text": "读国际版",
    "once": true,
    "effects": [
     "codex c_comet"
    ],
    "result": "再往后翻，国际版在第四页。{?flag.crown_castine:洛伦特颁布了宪法，是女王亲口念的。|}{?flag.crown_ioriel:洛伦特又接连下了几道诏书，口气一道比一道老。|}{?flag.crown_off:洛伦特的那顶王冠如今锁进了柜子。|}{?flag.rector_erudite:阿兰蒂尔塔的地窖开放了，来看碎片的人排的队绕了塔三圈。|}{?flag.rector_zealot:教廷那边只登了一句话：“得救号未归”。|}"
   },
   {
    "text": "读东坎诺版",
    "once": true,
    "effects": [
     "codex c_castonath_line"
    ],
    "result": "东坎诺的消息不多，零零碎碎挤在广告中间。{?flag.line_castonath:卡斯托纳斯已经通上了煤气灯。|}{?flag.line_ancardia:东坎诺那边的兵车一礼拜跑两趟。|}{?flag.line_none:阿斯拉银行到现在还在清盘。|}{?flag.hoard_sealed:卡斯托纳斯的窖藏还封着，三道印都在，没人动过。|}{?flag.hoard_milled:窖藏已经磨完了，那座磨坊如今改成了纺纱厂。|}{?flag.rite_given:王家巫师的名单上，伊萨那一席后面添了个“正”字。|}"
   },
   {
    "text": "读港口小报",
    "once": true,
    "effects": [
     "codex c_spires"
    ],
    "result": "这是港里自己印的小报，纸都是黄的。{?flag.spires_told:卡尔希尔成了共和国，港口为此立了块牌子。|}{?flag.spires_sold:尖碑卖掉了，报上只登了价钱，没登买主。|}{?flag.spires_kept:尖碑还是石头，报上没人提起。|}{?flag.ruling_both:巨魔湾下了一纸裁定，一口气管了两样，联盟差一点散伙。|}{?flag.ruling_cores:巨魔湾判了机器算人，戴镣的还不算。|}{?flag.engine_licensed:文森顿的机房又盖起了一座。|}"
   },
   {
    "text": "沿跳板下船",
    "if": "flag.sign_ration",
    "goto": "end_ration"
   },
   {
    "text": "沿跳板下船",
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
    "text": "沿跳板下船",
    "if": "flag.sign_quiet && !flag.sign_ration",
    "goto": "end_quiet"
   },
   {
    "text": "沿跳板下船",
    "if": "flag.sign_rose && !flag.sign_ration && !flag.sign_quiet",
    "goto": "end_rose"
   },
   {
    "text": "沿跳板下船",
    "if": "flag.sign_dragon && !flag.sign_ration && !flag.sign_quiet && !flag.sign_rose",
    "goto": "end_dragon"
   },
   {
    "text": "沿跳板下船",
    "if": "flag.sign_gate && !flag.sign_ration && !flag.sign_quiet && !flag.sign_rose && !flag.sign_dragon",
    "goto": "end_gate"
   },
   {
    "text": "沿跳板下船",
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
   "条约定稿当天，阿兰蒂尔塔大厅摆下四十张桌子，笔、墨、吸墨毡一应俱全。从早起，等着签字的人就已排出大厅，沿台阶一直往下站。",
   "签完字，众人往门口走，却没找到庆祝用的酒。一个侏儒代表问起来，礼宾官把文本又翻了一遍，答道：“条约里没写。”",
   {
    "if": "flag.article_heads",
    "text": "念到第七款“机械人算人头”，{?party.middlesday:礼拜三|旁听席上一台机器}站起身，就这么站着听完。坐下以后它又站起来，排登记的队去了。"
   },
   {
    "if": "!flag.article_heads",
    "text": "第七款最后写的是“另议”。{?party.middlesday:礼拜三在旁听席上数着，|旁听席上有台机器在数，}这一款前前后后另议了十一次。"
   },
   {
    "if": "party.guilhem",
    "text": "配给局当天就挂了牌，第一任总稽核是吉列姆。在任命书上签字时，他说这是他这辈子最恨的一份差事，说完就把袖子挽了起来。"
   },
   {
    "if": "is.god",
    "text": "份额表上有一行写着你的神号，后面的数目空着。礼宾官拿着那一页来问你怎么填，你说不用填。"
   },
   "回到蜡烛铺，那只空果酱罐就摆在窗台上，里面插着一枝薄荷，{?flag.etta_left:你每天浇一次水。|埃塔每天浇一次水。}"
  ],
  "ending": "ration"
 },
 "end_charter": {
  "id": "end_charter",
  "title": "《特许状》",
  "art": "load_2",
  "loc": "安本科斯特 · 塔厄尔",
  "text": [
   "安本科斯特的塔厄尔天文钟下多了一块黑漆行情牌，白粉写的价格每个钟头擦掉重写一遍。",
   "第一行是魔晶的价钱，比 1809 年还低。第二行是到港的船，写着“红利号，十二舱，气态，压砖”。第三行是保险，后面注着一行小字：“蓝肺另计”。",
   {
    "if": "flag.article_charter && rep.charter >= 4",
    "text": "特许状印了五百份，起草人一栏是你的名字，印在第二页上，字比别人的大一号。"
   },
   {
    "if": "!flag.partner_dead",
    "text": "德希尔德将军在《论坛报》上登了一则退役启事，一共三行字。启事登出来的第二天，他人就不见了。"
   },
   {
    "if": "is.god",
    "text": "擦牌子的伙计认得你。他问你要不要也上一行，要的话他给你留个位子。"
   },
   "下午三点，伙计踩着梯子，在牌子最下面续了新的一条，写的是“位面，按吨”。"
  ],
  "ending": "charter"
 },
 "end_quiet": {
  "id": "end_quiet",
  "title": "《静世纪》",
  "art": "ev_big_star_in_sky",
  "loc": "托拉普里亚卡港",
  "text": [
   "港务员把登记簿转到你面前。你接过笔，填了四个字：“返港，无货”。",
   "音叉沉在了寰宇之根上面的那片海里。诺罗说那地方量不到底，谁要是想捞，得先把绳子接到明年去。往后几十年，一直没人去接。",
   "诺罗问你后不后悔，你说这件事说得通。诺罗想了想，说自家爷爷也是这个道理，什么事都绕着走，一辈子没出过事。",
   {
    "if": "is.god",
    "text": "回程的船上，有个水手半夜来敲你的舱门，问你能不能把那根叉子捞回来。你说能。他等了片刻，见你没有要动的意思，就回去睡了。"
   },
   "回到蜡烛铺，{?flag.etta_left:你把公司的账本|埃塔把账本}翻到了最后一页，那里贴着一张旧标签，是从罐子上揭下来的，上面写着“别摇”两个字。"
  ],
  "ending": "quiet"
 },
 "end_rose": {
  "id": "end_rose",
  "title": "《玫瑰和约》",
  "art": "ev_mages_estate",
  "loc": "阿兰蒂尔塔",
  "text": [
   "大峰会闭幕时，阿兰蒂尔塔没开煤气灯，点了一千支蜡烛。魔杖托管会占了前三排，代表们穿着新做的袍子，袖口各绣自家的纹章。",
   {
    "if": "flag.crown_castine",
    "text": "文本是洛伦特女王卡斯蒂娜亲自念的。念到第九条，她停下来喝了口水，抬手碰了一下王冠，然后接着往下念，口气一点没变。"
   },
   {
    "if": "flag.crown_ioriel",
    "text": "闭幕前一小时，女王开了口，用的是十一世纪的口气。等到散会，大厅里已经没有一个代表记得自己反对过。只有你还记得，因为当时你正在门外抽烟。{?flag.charmed_once:可你中过一次大咒，记得的也不全。|}"
   },
   "破魔弹按条约禁掉了。各国的兵站把库存运到月河边，一箱一箱往下沉。登记的人数到第四百箱，换了一支笔。",
   {
    "if": "is.god",
    "text": "托管会给你留了一个座位，名牌上写着“阁下”。你没有去坐，到散会时，那把椅子上已经落了一层蜡油。"
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
    "text": "约是在船上签的，阿赫特那一栏的字写得很大。写完他把笔还给你，笔杆上留着一道牙印。"
   },
   "黄昏，阿拉莫莱的一万盏灯依次亮起。点灯人沿大殿台阶一路走到最高处。那里原本空着的王座上，如今已有了主人。",
   "进宫那天，阿赫特把宫里走了一圈，说这宫殿修得小了。祭司们把这话记了下来，第二天就开始量地。",
   "他签的那份约你也签了。约上有一条，写明他得回信。第一个月，他就回了四百封。",
   {
    "if": "flag.struck_own_name",
    "text": "公司的章程上，你的名字上划着一道。{?flag.etta_left:没人去涂它。|埃塔没把它涂掉，她说账上的东西是不许涂的。}"
   },
   {
    "if": "is.god",
    "text": "他的第一封信是写给你的，问的还是那一句：你是怎么办到的。"
   },
   "回到安本科斯特，{?flag.etta_left:公司|埃塔}收到了第一封盖着青铜印的公函，信写得很长，谈的全是天气。"
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
    "text": "门开到一掌宽便卡住了，推不开，也没法再合上。门缝里先伸出一叠诉状，用红绳扎着。"
   },
   {
    "if": "flag.gate_key",
    "text": "那一季魔法野了起来。舱底区的井水自己往上冒，一直冒到三楼，梨林的梨树一夜之间开了两回花。再往后，它就稳下来了。"
   },
   {
    "if": "flag.gate_forced",
    "text": "撞锤就留在了门槛上。门开得比拿钥匙开的宽，淌出来的东西倒是一样多，只是换了个名目，叫采矿特许权。"
   },
   {
    "if": "flag.gate_forced",
    "text": "红衣的人也跟着出来了，一家一家地敲门，查的是该死没死的人。{?flag.dainuich_noticed:马利安德那户天黑了才上菜的人家，门口停了一辆红篷车。|}"
   },
   "七号线上，夜班的芯核在同一晚醒了。七八三放下扳手，开口问：“今天礼拜几？”那天恰好是礼拜三。",
   {
    "if": "is.god",
    "text": "蜡烛铺门口排起了队，排队的人都想问你门那边到底是什么。你说你没进去，他们不信，接着排。"
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
   "门两边各提了一个条件。这边坚持门要关着，那边要求门外有人值守，还得把数目记下来。",
   {
    "if": "flag.keeper_narwen",
    "text": "娜尔雯留下了。她把那条小船翻过来，让船底朝下，自己坐了进去，又从袖子里摸出一把新刻刀。"
   },
   {
    "if": "flag.keeper_self",
    "text": "留下来的是你。公司的人上船时，{?flag.etta_left:有人|埃塔}在名册上你那一栏里写了“驻外”两个字。"
   },
   {
    "if": "flag.angels_follow",
    "text": "回去的船上多了一舱天使，一共四十一个，每人背着一卷帆布。"
   },
   {
    "if": "is.god",
    "text": "门后的声音认得你。它们每次开口，总是先叫你的神号，然后才说别的。"
   },
   "船开出去半里地，回头还看得见坡下面那条小船，船帮上已经新刻了第一道。"
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
    "text": "公司的人在门外等了整整一夜。天亮时，浅滩上的水涨了一寸，还是暖的。断过翅膀的那位天使第一个跪了下去，跪完站起来，问你今天有什么吩咐。"
   },
   {
    "if": "flag.seat_sat",
    "text": "回到安本科斯特以后，你第一次出门买烟，舱底区的路灯就暗了一格。卖烟的老太太看了看灯，又看看你，把找给你的零钱多数了一遍。"
   },
   {
    "if": "flag.seat_locked",
    "text": "门在你身后合上了。到第二天早上，外面那一侧的钥匙孔没了，只剩一块平平的石头。"
   },
   {
    "if": "flag.seat_locked",
    "text": "{?party.narwen:娜尔雯守在门槛前数碎片的声音，一直数到了零，这才合上本子。|碎片在匣子里彻底黑了，再也没亮过。}门槛前的那盏灯还留着，没有人去吹它。"
   },
   {
    "if": "flag.seat_carried",
    "text": "旧斗兽场的正中央摆着一把木头椅子，漆掉了一块。议会挪到侧厅去开了，正厅就留给了它。"
   },
   {
    "if": "flag.seat_carried",
    "text": "每天都有人来看，也有人坐上去试试，可坐不了一会儿就下来了，说是硌得慌。治安军在椅子旁边派了一班岗，岗哨的登记簿上写着“神座，空”。"
   },
   {
    "if": "flag.council_called",
    "text": "第十二次泛神会议是隔着传音石开的，一连开了七天。开到第四天，有两座神殿的传音石裂了，后面的票只好派人骑马去送。"
   },
   "会议决议只有一句，贴在圣奥琪大教堂门上。告示贴出当天，门口就多了三个兜售果酱罐的摊子。"
  ],
  "ending": "seat"
 }
};
