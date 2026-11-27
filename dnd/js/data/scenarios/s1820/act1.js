// s1820 / act1.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "a1_01": {
  "id": "a1_01",
  "title": "标签写错了",
  "chapter": "第一幕 · 收成",
  "art": "ev_far_and_wide",
  "loc": "安本科斯特 · 神殿区 · 史家会讲堂",
  "date": "1820年花始月9日",
  "text": [
   "史家会在神殿区请你们迟到者公司守一只果酱罐。罐子就摆在总档案馆一楼的讲台上，标签写着“别摇”。典藏主管平常住在地下室查档，今天特意上楼来。你们的差事只有一件：看好它，别让人摇。",
   "布西拉尔学者阿尔瓦·西尔·阿蒙正在台上讲南海的漩涡。那是通往别的位面的门，他说自己在漩涡下面见到了一片海。讲到漩涡怎么把船头往下拽时，他两只手比划得比嘴还快。",
   {
    "speaker": "阿尔瓦",
    "text": "往下掉的那一阵是有点吓人，这我承认。可你们想想，那下面有海！有海就能行船，能行船就……"
   },
   "他话还没说完，罐子里有人敲了三下玻璃。罐底站着个指甲盖大的小人，正仰着脸往外看。",
   {
    "speaker": "罐子里那位",
    "text": "标签写错了。我是仙子，有氏族的那种，不是皮克精。皮克精脑子都慢半拍，你们看我像慢的吗？"
   },
   "第三排坐着十一个记笔记的，这一下十一支笔全停了，典藏主管的眼镜也滑到了鼻尖上。讲堂外面，泰卢姆的传令员还在摇着铃喊“皮克精进城”，看来这个词得改了。",
   {
    "speaker": "罐子里那位",
    "text": "你，站岗的那个，把盖子给我拧开一条缝。你们这屋里的空气淡得没味，罐子里的更淡。"
   },
   {
    "if": "origin == 'karshyr' && flag.alvar_friend",
    "text": "阿尔瓦在台上一眼看见了你，指着你就喊：“搬草的那位！诸位，这位当时就在场！”罐子里那位隔着玻璃把你打量了好一阵，说你身上有她老家的潮气。"
   },
   {
    "if": "origin == 'karshyr' && !flag.alvar_friend",
    "text": "阿尔瓦眯着眼看了你半天，忽然一拍讲桌，喊道：“托拉普里亚卡！码头上卸货的那位！”罐子里那位隔着玻璃把你打量了好一阵，说你身上有她老家的潮气。"
   },
   {
    "if": "is.god",
    "text": "罐子里那位朝你看了一眼，往罐子另一头挪了半寸，转过身去假装看标签。台上的阿尔瓦讲着讲着也卡了壳，把讲稿翻了两页，还是没找着自己讲到哪里了。"
   }
  ],
  "first": [
   "codex c_jar",
   "codex c_alvar",
   "codex c_chroniclers",
   "codex c_anbenncost",
   "codex c_tellum",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "choices": [
   {
    "text": "辨认第三排的十一人",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 12,
     "mods": [
      {
       "if": "origin == 'lorent'",
       "n": 2,
       "why": "你认得白玫瑰的别针"
      },
      {
       "if": "is.scholar",
       "n": 1,
       "why": "你坐过这种讲堂"
      }
     ]
    },
    "ok": {
     "text": "你挨个看过去。有两个袖扣上带着卡拉桑尼的徽记，一个别着银白玫瑰，还有一个披风只搭在左肩上。这四位的笔记本都翻在空白页上，他们是冲着罐子来的。剩下的七个才是真来听讲的。",
     "effects": [
      "flag spotted_bidders"
     ]
    },
    "fail": {
     "text": "你才数到第七个，典藏主管就走过来挡在了你前面，说：“请看管标本，不要看管听众。”说完，他在看管费的单子上给你划掉了一刻钟。",
     "effects": [
      "gold -2"
     ]
    }
   },
   {
    "text": "告诉听众本地人已避开这片海数百年",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "rep south +1"
    ],
    "result": [
     "你告诉台下，那条船是从第二个漩涡里出来的。第一个漩涡管吞，第二个管吐，岛上的半身人领航员都管那片海叫“欠账的”。",
     "第三排有人第一次把“本地人”三个字写进了本子。阿尔瓦带头鼓起掌来。他还以为你是在夸他。"
    ]
   },
   {
    "text": "把罐盖拧开一条缝",
    "effects": [
     "var jar_trust +1"
    ],
    "result": [
     "盖子才转了半圈，罐口就冒出来一股雨后石头的气味。她没说谢，从怀里摸出一根比头发丝还细的东西，在罐壁上划了一道。",
     {
      "speaker": "别摇",
      "text": "给你算一个好的，记在你那一栏，第一行。"
     }
    ],
    "goto": "a1_02"
   },
   {
    "text": "先请典藏主管批准开盖",
    "effects": [
     "gold +5"
    ],
    "result": [
     "主管说不准，标本条例第六款写着。不过你这一问，他看你顺眼多了，把今天的看管费提前结给了你。",
     {
      "speaker": "别摇",
      "text": "你问的是他，没问我。这一笔不记。"
     }
    ],
    "goto": "a1_02"
   },
   {
    "text": "告诉她稍后再谈",
    "effects": [
     "flag jar_snubbed"
    ],
    "result": [
     {
      "speaker": "别摇",
      "text": "以后再说，是吧。行。"
     },
     "她在罐壁上划了一道，划得很慢，好让你看清楚是划在了哪一栏。"
    ],
    "goto": "a1_02"
   }
  ]
 },
 "a1_02": {
  "id": "a1_02",
  "title": "出价",
  "loc": "安本科斯特 · 史家会后院",
  "text": [
   "讲座散了以后，罐子照规矩送回后院的标本库，{?party.bura:你和布拉|你}留下来守门。后院的墙有两人高，墙根种着一排药草，后门正对着钟楼。",
   "入夜，一位穿好大衣的客人从正门来了，脸上还留着火药燎过的疤。他叫格拉托·西尔卡拉斯，替特许商卡拉桑尼出面买罐子，在廊下跟主管谈了一刻钟。你只听清两个价，六十，三百。主管说要报理事会。",
   {
    "speaker": "格拉托·西尔卡拉斯",
    "text": "当然要报，应该的。我明天再来，支票我带着，律师我也带着，到时候您想先见哪一样，随您挑。"
   },
   "他前脚刚走，后墙上就翻进来{?partysize >= 2:四|两}个人。这几位没带支票，是来抢的。",
   {
    "if": "flag.spotted_bidders",
    "text": "讲堂里那几支不写字的笔你是数过的，所以傍晚就跟巡夜的打好了招呼。史家会雇的巡夜人是几个刚入行的冒险者，一个钟点才两个铜板，眼下正蹲在药草后面。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "{?partysize >= 2:四个|两个}人，拿的是短棍，还有一把撬刀。门归你，墙归我。"
   }
  ],
  "choices": [
   {
    "text": "拿起武器守住标本库",
    "if": "!flag.spotted_bidders && partysize <= 1",
    "combat": {
     "title": "史家会后院",
     "intro": "第一个落地的人踩折了一株药草。这伙人没往你这边多看，径直奔向标本库。",
     "specials": [
      {
       "id": "bell",
       "name": "敲史家会的钟",
       "desc": "钟声足以传遍整个神殿区。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "钟一响，半条街的窗户都亮了，翻墙进来的那几个开始回头看墙。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "这钟绳去年就该换了。你一拽，手里多了一截麻绳，钟纹丝没动。"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      },
      {
       "id": "jar_open",
       "name": "不问，直接拧开罐子",
       "desc": "亮光会让全场晃眼一回合。代价是她会把这份人情记在你名下。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "success": {
        "text": "你一把拧开了盖子。她冲出来的时候亮得跟烧着的镁条一样，所有人都捂住了眼。只听她说：“我可没答应。记你一笔，红的。”",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        },
        "effects": [
         "var jar_trust -1"
        ]
       }
      }
     ],
     "win": {
      "effects": [
       "gold +40"
      ],
      "goto": "a1_02b"
     },
     "lose": {
      "effects": [
       "flag a1x_jar_grabbed",
       "gold +20",
       "heal 1d6+2"
      ],
      "goto": "a1_02b"
     },
     "enemies": [
      {
       "id": "thug",
       "n": 2,
       "name": "翻墙的打手"
      }
     ]
    }
   },
   {
    "text": "拿起武器守住标本库",
    "if": "!flag.spotted_bidders && partysize >= 2",
    "combat": {
     "title": "史家会后院",
     "intro": "第一个落地的人踩折了一株药草。这伙人没往你这边多看，径直奔向标本库。",
     "specials": [
      {
       "id": "bell",
       "name": "敲史家会的钟",
       "desc": "钟声足以传遍整个神殿区。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "钟一响，半条街的窗户都亮了，翻墙进来的那几个开始回头看墙。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "这钟绳去年就该换了。你一拽，手里多了一截麻绳，钟纹丝没动。"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      },
      {
       "id": "jar_open",
       "name": "不问，直接拧开罐子",
       "desc": "亮光会让全场晃眼一回合。代价是她会把这份人情记在你名下。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "success": {
        "text": "你一把拧开了盖子。她冲出来的时候亮得跟烧着的镁条一样，所有人都捂住了眼。只听她说：“我可没答应。记你一笔，红的。”",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        },
        "effects": [
         "var jar_trust -1"
        ]
       }
      }
     ],
     "win": {
      "effects": [
       "gold +40"
      ],
      "goto": "a1_02b"
     },
     "lose": {
      "effects": [
       "flag a1x_jar_grabbed",
       "gold +20",
       "heal 1d6+2"
      ],
      "goto": "a1_02b"
     },
     "enemies": [
      {
       "id": "thug",
       "n": 3,
       "name": "翻墙的打手"
      },
      {
       "id": "cutpurse",
       "name": "拿撬刀的"
      }
     ]
    }
   },
   {
    "text": "吹哨召来药草后面的巡夜人",
    "if": "flag.spotted_bidders && partysize <= 1",
    "combat": {
     "title": "史家会后院",
     "intro": "第一个落地的人踩折了一株药草。这伙人没往你这边多看，径直奔向标本库。",
     "specials": [
      {
       "id": "bell",
       "name": "敲史家会的钟",
       "desc": "钟声足以传遍整个神殿区。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "钟一响，半条街的窗户都亮了，翻墙进来的那几个开始回头看墙。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "这钟绳去年就该换了。你一拽，手里多了一截麻绳，钟纹丝没动。"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      },
      {
       "id": "jar_open",
       "name": "不问，直接拧开罐子",
       "desc": "亮光会让全场晃眼一回合。代价是她会把这份人情记在你名下。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "success": {
        "text": "你一把拧开了盖子。她冲出来的时候亮得跟烧着的镁条一样，所有人都捂住了眼。只听她说：“我可没答应。记你一笔，红的。”",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        },
        "effects": [
         "var jar_trust -1"
        ]
       }
      }
     ],
     "win": {
      "effects": [
       "gold +40"
      ],
      "goto": "a1_02b"
     },
     "lose": {
      "effects": [
       "flag a1x_jar_grabbed",
       "gold +20",
       "heal 1d6+2"
      ],
      "goto": "a1_02b"
     },
     "enemies": [
      {
       "id": "thug",
       "n": 2,
       "name": "翻墙的打手"
      }
     ],
     "allies": [
      {
       "id": "village_militia",
       "name": "史家会的巡夜人"
      }
     ]
    }
   },
   {
    "text": "吹哨召来药草后面的巡夜人",
    "if": "flag.spotted_bidders && partysize >= 2",
    "combat": {
     "title": "史家会后院",
     "intro": "第一个落地的人踩折了一株药草。这伙人没往你这边多看，径直奔向标本库。",
     "specials": [
      {
       "id": "bell",
       "name": "敲史家会的钟",
       "desc": "钟声足以传遍整个神殿区。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "performance",
        "alt": [
         "athletics"
        ],
        "dc": 12
       },
       "success": {
        "text": "钟一响，半条街的窗户都亮了，翻墙进来的那几个开始回头看墙。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "这钟绳去年就该换了。你一拽，手里多了一截麻绳，钟纹丝没动。"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      },
      {
       "id": "jar_open",
       "name": "不问，直接拧开罐子",
       "desc": "亮光会让全场晃眼一回合。代价是她会把这份人情记在你名下。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "success": {
        "text": "你一把拧开了盖子。她冲出来的时候亮得跟烧着的镁条一样，所有人都捂住了眼。只听她说：“我可没答应。记你一笔，红的。”",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        },
        "effects": [
         "var jar_trust -1"
        ]
       }
      }
     ],
     "win": {
      "effects": [
       "gold +40"
      ],
      "goto": "a1_02b"
     },
     "lose": {
      "effects": [
       "flag a1x_jar_grabbed",
       "gold +20",
       "heal 1d6+2"
      ],
      "goto": "a1_02b"
     },
     "enemies": [
      {
       "id": "thug",
       "n": 3,
       "name": "翻墙的打手"
      },
      {
       "id": "cutpurse",
       "name": "拿撬刀的"
      }
     ],
     "allies": [
      {
       "id": "village_militia",
       "name": "史家会的巡夜人"
      }
     ]
    }
   }
  ]
 },
 "a1_02b": {
  "id": "a1_02b",
  "title": "一张汇票",
  "text": [
   {
    "if": "!flag.a1x_jar_grabbed",
    "text": "巡夜的把翻墙进来的几个都捆了，一人一根晾衣绳。领头的说不出是谁雇的他们，只知道钱是预先付的，付的还是新票子。"
   },
   {
    "if": "flag.a1x_jar_grabbed",
    "text": "罐子到底还是被人夹在腋下抢出了院门，{?party.bura:布拉追出去两条街，回来时一手拎着罐子，一手拎着半只袖子。|巡夜的追出去两条街才抢了回来。}典藏主管当场就把史家会的酬金扣掉了一半。"
   },
   "半夜，阿斯拉银行的信差送来一张汇票，金额比卡拉桑尼出的更高。署名是“迟到者公司合伙人”，也就是公司那位从不露面的匿名大股东。附言写着：“标本借予本公司保管，保管人不得转让”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "合伙人。我在公司干了八年，从没见过他的脸。钱倒是见过，每月一号准到。"
   },
   "天还没亮，西尔卡拉斯又来了。这次走的是后门，就他一个人。他看了看汇票上的数，把它放回桌上，放得平平整整。",
   {
    "speaker": "格拉托·西尔卡拉斯",
    "text": "我出五百金冠，罐子就算是路上丢了，史家会那边由我去赔。您要是不想丢，也行，哪天贵公司打算转手了，第一个来问我，我出六百。这两样您随便挑，哪一样我都不亏。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "他为她出五百金冠。我的卖契上写的是废铁价，三个金冠。她在果酱罐里，倒比我贵得多。"
   },
   "罐子里那位坐在罐底，背对着你们，翅膀一动不动，是在听。"
  ],
  "first": [
   "quest q_jar stage 2",
   "quest q_partner start"
  ],
  "choices": [
   {
    "text": "拒绝报价，坚持替公司看好标本",
    "effects": [
     "flag silcalas_refused",
     "var jar_trust +1",
     "rep charter -1"
    ],
    "result": [
     {
      "speaker": "格拉托·西尔卡拉斯",
      "text": "好，那我就换个问法，改天去问问你们那位合伙人。"
     },
     "他走了以后，罐壁上多了一道划痕。",
     {
      "speaker": "别摇",
      "text": "五百金冠你都没卖，算你一个好。"
     }
    ],
    "goto": "a1_03"
   },
   {
    "text": "借口要问秘书，拖延答复",
    "effects": [
     "rep charter +1"
    ],
    "result": [
     "他留下一张名片，纸挺厚，旁边还烫了金。",
     {
      "speaker": "别摇",
      "text": "你没说卖，也没说不卖。这样的，我们那里不记在账上，记在人头上。"
     }
    ],
    "goto": "a1_03"
   },
   {
    "text": "宣读附言，指出保管人不得转让",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag silcalas_refused",
     "var jar_trust +1"
    ],
    "result": [
     "你把附言念了两遍，第二遍故意念得慢。他听完倒笑了，脸上那道疤也跟着动了动。",
     {
      "speaker": "格拉托·西尔卡拉斯",
      "text": "白纸黑字，行，我敬的就是这个。哪天这张纸到期了，劳驾您先知会我一声。"
     },
     {
      "speaker": "别摇",
      "text": "你是拿一张纸把他挡回去的。那也算数，算你一个好。"
     }
    ],
    "goto": "a1_03"
   }
  ]
 },
 "a1_03": {
  "id": "a1_03",
  "title": "十四号器材",
  "art": "ev_multi_racial_merc",
  "loc": "安本科斯特 · 铸炉街 · 公司",
  "date": "1820年花始月中",
  "shop": {
   "name": "铸炉街的矮人铺子",
   "blurb": "下楼往南，第三家就是。熟客进门总有地方坐，价钱却谁来也一样。",
   "stock": [
    "dagger",
    "shortsword",
    "longsword",
    "battleaxe",
    "pistol",
    "musket",
    "leather",
    "chain_shirt",
    "shield",
    "healing_potion",
    "bandage"
   ]
  },
  "text": [
   "公司开在铸炉街一家蜡烛铺的楼上，一进门就是一股蜂蜡和旧纸的气味。屋里只有一张桌子、四把椅子，四把椅子没有两把是一样高的。罐子就摆在秘书埃塔的墨水瓶旁边，{?var.jar_trust >= 1:盖子松着半圈|盖子上压着一本 1789 年的流水账}。",
   {
    "if": "origin != 'unowned'",
    "text": "墙角站着一台驮运用的机械人，肩上还留着厂里刷的绿漆。埃塔在器材账上给它记的是“十四号”，它管自己叫礼拜三。从今天起，它跟着你出外勤。"
   },
   {
    "if": "origin == 'unowned'",
    "text": "礼拜三站在墙角，肩上还留着七号线的绿漆，在器材账上它是十四号。{?is.mechanim:你是十五号，不过你那一行，埃塔在“雇员”栏里又抄了一遍。|当初把它领出厂门的是你，卖契还在你兜里。}"
   },
   "埃塔递来的三页合同印着陆军部抬头。共和国的德希尔德将军推荐你们护送第三催收巡回队，也就是下乡用法术替农田催熟麦子的公务法师，这笔生意值一百多金冠。",
   {
    "speaker": "埃塔·斧砧",
    "text": "一百金冠以上的单子，得队长签字，笔在这里。签之前你有什么事就先去办，楼下铺子卖家伙，阁楼上有床。"
   },
   {
    "if": "is.god",
    "text": "埃塔把你的名字从“雇员”栏里划掉，抄进了“无形资产”那一栏。楼梯上有动静，楼下排起了队，一直排到蜡烛铺门外，都是来求神的，排头的那个怀里抱着一只瘸腿的羊。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔·斧砧",
    "text": "章程第九条，成了神的，不加钱。"
   }
  ],
  "first": [
   {
    "if": "!party.middlesday",
    "then": [
     "companion +middlesday",
     "quest q_middlesday start"
    ]
   },
   "quest q_bura start",
   "codex c_etta",
   "codex c_forgeway",
   "codex c_mechanim"
  ],
  "choices": [
   {
    "text": "问埃塔公司的账有何内情",
    "once": true,
    "effects": [
     "gold +12"
    ],
    "result": [
     {
      "speaker": "埃塔·斧砧",
      "text": "1811 年以后公司就没有队长了。一百金冠以上的单子没人签字，所以这十年，公司没接过一张一百金冠以上的单子。"
     },
     {
      "speaker": "埃塔·斧砧",
      "text": "五成一的股在合伙人手里。他是 1810 年买下公司的旧债进来的，十年了，没迟过一次款。我不喜欢这个人，可我的账本喜欢他。"
     },
     "她从抽屉里数出十二个金冠推给你，说这是队长的月钱。数目是 1446 年定的，到今天也没涨过。"
    ]
   },
   {
    "text": "问布拉共和国欠她多少军饷",
    "once": true,
    "if": "party.bura",
    "effects": [
     "approval bura +1"
    ],
    "result": [
     {
      "speaker": "布拉",
      "text": "十一个月的饷。1812 年整编，绿皮的军士一个都不留，饷说是“另候通知”。"
     },
     {
      "speaker": "布拉",
      "text": "另外还欠着一句话。1810 年他们说过人人都一样。这一句也欠着我的，可惜折不成金冠。"
     },
     {
      "if": "origin == 'anbennar'",
      "text": "布拉看了一眼你那张遣散单，把自己那张也从怀里掏出来，并排放在桌上。两张单子事由一栏的字是同一个人写的。"
     }
    ]
   },
   {
    "text": "用方糖谢别摇昨夜守门",
    "once": true,
    "effects": [
     "var jar_trust +1"
    ],
    "result": [
     "她正坐在墨水瓶盖上晾翅膀，接过糖去，得两只手才抱得住。",
     {
      "speaker": "别摇",
      "text": "糖我收了，记一笔。那个“谢”字你拿回去。在我们那里，说了谢就是欠了账。"
     },
     {
      "if": "is.lizardfolk",
      "text": "你叫她时，舌头怎么也绕不过第一个字，一出口就成了“勿摇”。她没纠正你，只在另一栏里划了一道。"
     }
    ]
   },
   {
    "text": "问十四号是谁让它改账",
    "once": true,
    "if": "party.middlesday && origin != 'unowned'",
    "effects": [
     "approval middlesday +1"
    ],
    "result": [
     "今天早上埃塔发现，账本第三栏的合计被人动过。原先差着四个铜板，这一改倒改对了。",
     {
      "speaker": "礼拜三",
      "text": "合计差了四个铜板。我改过了。可是没人要求我改。你要我改回去吗？"
     },
     "埃塔看看那个数，又看了看它，把笔放下了。后来你问它礼拜三这个名字是哪里来的，它说，它醒过来那天问今天礼拜几，领班答的是礼拜三。"
    ]
   },
   {
    "text": "下楼看铸炉街刚贴的告示",
    "once": true,
    "if": "origin == 'unowned'",
    "effects": [
     "approval middlesday +1"
    ],
    "result": [
     "告示贴在垄断集团的岗亭上，写的是“有毛病的机器一律回炉”，下面列着一串编号，一共四十一个。",
     {
      "if": "flag.exit_ran",
      "text": "七号线那两行的后面注着“走失”，赏格是三个金冠。"
     },
     {
      "if": "flag.exit_stolen",
      "text": "七号线那两行的后面注着“盗窃厂产”，下面还有厂主的签名。"
     },
     {
      "if": "flag.exit_sold",
      "text": "七号线那两行的后面注着“已售”，墨迹比别的行都新。"
     },
     {
      "if": "flag.hid_waking",
      "text": "{?is.mechanim:七号线那两行里只有礼拜三的编号，领班到今天还以为你那晚只是卡了壳。|你兜里那张卖契上的编号，告示上并没有，领班到今天还没发现报废单少了一张。}"
     },
     {
      "if": "party.middlesday",
      "speaker": "礼拜三",
      "text": "四十一个编号，其中九个我认识。“有毛病”这三个字是手写添上去的。"
     }
    ]
   },
   {
    "text": "拿卖契去工会，问机械人能否入会",
    "tag": "无主者",
    "if": "origin == 'unowned'",
    "once": true,
    "effects": [
     "codex c_fadlun"
    ],
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "rep.union >= 3",
       "n": 1,
       "why": "工棚里有人认得你"
      },
      {
       "if": "faction == 'shield'",
       "n": 1,
       "why": "护民之约"
      }
     ]
    },
    "ok": {
     "text": [
      "工会的会一直开到半夜，拿{?is.mechanim:你|礼拜三}这一桩当了第一个案子。工会的法德伦在黑板上画图，从“谁干活”一步一步画到“谁领证”，画到第七步，粉笔断了。",
      {
       "speaker": "法德伦",
       "text": "会员证上有一栏“出生地”，这一栏让我给它填什么？填七号线？……行，就填七号线！"
      }
     ],
     "effects": [
      "flag union_card",
      "rep union +1"
     ]
    },
    "fail": {
     "text": "表决推迟了。有人问机器交不交会费，又有人问真到罢工那天它听谁的，这两样法德伦都答不上来，脸涨得通红。交的两个金冠入会费不退，“出生地”那一栏到现在还空着。",
     "effects": [
      "gold -2"
     ]
    }
   },
   {
    "text": "以公司名义为乌戈出具保函",
    "tag": "巨魔湾",
    "if": "origin == 'concord' && !flag.line14_read",
    "once": true,
    "effects": [
     "flag ugo_papers",
     "rep union +1"
    ],
    "result": [
     "乌戈是从新港一路走过来的，肩上有一道扛麻包磨出来的印子。他来是想要一张纸，上面写明白他是个自由人。往后雇主看了这张纸，就不必再多问。",
     "保函是埃塔写的，一共三行，盖了公司的印。乌戈不识字，让你给他念了两遍，才叠好塞进鞋里。"
    ]
   },
   {
    "text": "按使团长要求抄寄航海日志",
    "tag": "巨魔湾",
    "if": "origin == 'concord' && flag.line14_read",
    "once": true,
    "effects": [
     "rep charter +1",
     "approval bura -1"
    ],
    "result": [
     "信是使团长写来的，问你要一份日志的抄件，措辞客气得挑不出毛病。你抄到第十四行，也照原样抄了下来。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "贴身仆役一名，九十金冠。这字写得真清楚。"
     }
    ]
   },
   {
    "text": "请埃塔用你的伙食费换润滑油",
    "tag": "机械人",
    "if": "is.mechanim",
    "once": true,
    "effects": [
     "gold +3"
    ],
    "result": [
     {
      "speaker": "埃塔·斧砧",
      "text": "午饭一天三个铜板，润滑油一天一个，差价按月退给你，账上叫“伙食结余”。"
     },
     {
      "speaker": "埃塔·斧砧",
      "text": "十四号那一份，我就没法算了。器材没有伙食费，只有保养费。就差这两个字，差出去的是一本账。"
     }
    ]
   },
   {
    "text": "替礼拜三拧紧左肩轴承",
    "tag": "奇械",
    "if": "is.artificer && party.middlesday",
    "once": true,
    "effects": [
     "approval middlesday +1"
    ],
    "result": [
     "它左肩的轴承松了半圈，打出厂那天起就是松的。你动手之前，先问了它一声。",
     {
      "speaker": "礼拜三",
      "text": "九年里，你是第一个先问我的。拧吧。"
     }
    ]
   },
   {
    "text": "下楼给等候的人诊治",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "gold +30",
     "var cult +1"
    ],
    "result": [
     "瘸腿的羊站起来，自己走了。排在后面的有个咳血的铆工，有个瞎了半只眼的洗衣妇，还有个老头什么病也没有，只想摸摸你的袖子。有人往楼梯上放铜板，埃塔下楼去收了，还给人开了收据。",
     "第二天，蜡烛铺的房东找上门来，说这栋楼如今算是圣地了，圣地的租子得另算。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "羊是只好羊。不过下次排队的人揣了枪，先叫我，羊可以等。"
     }
    ]
   },
   {
    "text": "在阁楼行军床上好好睡一夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "阁楼的窗户对着铸炉街，打铁的声音到后半夜才停，可你睡得很沉。"
   },
   {
    "text": "签下陆军部的合同",
    "result": "你签了字。埃塔把墨水吹干，在账本上添了一行，日期后面写着“队长签字，十年来第一次”。",
    "goto": "a1_04"
   }
  ]
 },
 "a1_04": {
  "id": "a1_04",
  "title": "将军的茶",
  "loc": "安本科斯特 · 陆军部三楼",
  "date": "1820年花始月底",
  "text": [
   "陆军部三楼一股湿呢料的气味。科员逐条念合同，你点头他才往下读。窗边那位晒得黝黑的德希尔德将军自己倒茶，一开口就问田里的事，对价钱只字不提。",
   {
    "speaker": "德希尔德将军",
    "text": "梨林那一带的地，两年不施术就板结，本农那边是三年。这些数我比部里还熟。革命那年全军的粮都是我调的，要没有我那几车粮，哪来今天这个部？"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（压着嗓子。）这是德希尔德，专打进攻的。1810 年那时，他那个旅从来不等炊事班。"
   },
   "门口走进来个四十出头的棕发男子，袖口还沾着咖啡。他是巡回队派来接你们的，手上拿着一张表，边念边填。",
   {
    "speaker": "吉列姆",
    "text": "姓名，吉列姆。籍贯，埃斯玛利亚，梨林镇。职务，国家三等变化师。“护送方”这一栏……条例第十四款没说冒险者是算军属还是算器材，我先空着。"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "科员翻到你的名字，手指头在登记簿上停了一下。你遣散单上那串编号他认得，是新年发的那一批，一共发了四十张。"
   },
   {
    "if": "is.god",
    "text": "窗边那位将军今天的制服是熨过的，领口的折线笔直。他把椅子转过来，正对着你。"
   },
   {
    "if": "is.god",
    "speaker": "德希尔德将军",
    "text": "我今天是专程来的，合同只是顺便。你告诉我，你是怎么成的神？"
   }
  ],
  "first": [
   "companion +guilhem",
   "quest q_harvest start",
   "quest q_guilhem start",
   "codex c_circuit",
   "codex c_deshird",
   "codex c_blackpowder"
  ],
  "choices": [
   {
    "text": "留心将军端杯的动作",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "mods": [
      {
       "if": "is.soldier",
       "n": 1,
       "why": "你见过将军们怎么看地图"
      }
     ]
    },
    "ok": {
     "text": [
      {
       "if": "!is.god",
       "text": "茶是刚倒的，还滚着，可他没用托碟，五根手指就那么贴着杯壁。一下都没换过手，像是不怕烫。他问哪块地几年板结时，那口气就像在估一件东西还能再用几年。"
      },
      {
       "if": "is.god",
       "text": "茶是滚的，他没用托碟，手指就贴在杯壁上。你看见的还不止这些。他问话的时候眼睛一直没眨，杯里的水面上有一圈很细的纹。他在害怕。"
      }
     ],
     "effects": [
      "flag partner_hint_1"
     ]
    },
    "fail": {
     "text": "你盯着那杯茶看得太久，将军当你是渴了，让科员也给你倒了一杯。部里的茶，访客得自己掏钱，一个金冠就这么记在了公司账上。",
     "effects": [
      "gold -1"
     ]
    }
   },
   {
    "text": "承认自己也不知道",
    "tag": "神",
    "if": "is.god && !flag.a1x_general_asked",
    "once": true,
    "effects": [
     "flag a1x_general_asked",
     "rep republic +1"
    ],
    "result": [
     {
      "speaker": "德希尔德将军",
      "text": "不知道？我带了半辈子的兵，还没见过哪一场仗是靠“不知道”打赢的。"
     },
     "科员在问询记录上写了一句“该员配合”。将军一个字也没信。"
    ]
   },
   {
    "text": "回答只要有人相信就能成",
    "tag": "神",
    "if": "is.god && !flag.a1x_general_asked",
    "once": true,
    "effects": [
     "flag a1x_general_asked",
     "rep partner -1"
    ],
    "result": [
     "他把茶杯放下了，放得很慢，后来再也没端起来。",
     {
      "speaker": "德希尔德将军",
      "text": "有人信，就这么简单。"
     },
     "这话听着是个问句，可他没等你回答，就转过头看窗外去了。"
    ]
   },
   {
    "text": "请他向公司秘书打听",
    "tag": "神",
    "if": "is.god && !flag.a1x_general_asked",
    "once": true,
    "effects": [
     "flag a1x_general_asked",
     "rep partner +1"
    ],
    "result": [
     {
      "speaker": "德希尔德将军",
      "text": "公司的事，好。守规矩的买卖人，我向来喜欢。"
     },
     "他笑了一声。这几种答法里面，他最爱听的大概就是这一种，可照样不信。"
    ]
   },
   {
    "text": "出示遣散单，追问欠饷何时补发",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar'",
    "once": true,
    "effects": [
     "rep republic -1",
     "approval bura +1"
    ],
    "result": [
     {
      "speaker": "科员",
      "text": "另候通知。"
     },
     "这四个字他张口就来，卷宗都不用翻。将军在窗边笑了一声，说 1810 年他的旅也欠过饷。后来倒是发了，发的是土地券。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "我那张上面写的也是“另候通知”。十一个月了，这通知比饷还难等。"
     }
    ]
   },
   {
    "text": "问科员表上哪年加了“种族”栏",
    "tag": "绿皮",
    "if": "is.greenskin",
    "once": true,
    "effects": [
     "rep republic -1",
     "approval bura +1"
    ],
    "result": [
     {
      "speaker": "科员",
      "text": "1812 年加的，就是整编那年。"
     },
     "话出了口，他才看清问的人是谁，赶紧拿吸墨纸把那一栏压住了，好像压住了就可以不填。将军在窗边咳了一声，没有回头。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "1812 年三月，我那张表也是这个科填的。表上的字没变，填表的人换了。"
     }
    ]
   },
   {
    "text": "同科员谈价钱",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "faction == 'seal'",
       "n": 2,
       "why": "你引得出合同的条目"
      },
      {
       "if": "rep.republic >= 2",
       "n": 1,
       "why": "部里认得你"
      }
     ]
    },
    "ok": {
     "text": "你指给他看，护送六个法师的价钱，是照护送六箱军粮算的。科员翻了翻附表，改了一个数。这一改多出了六十金冠。",
     "effects": [
      "gold +60"
     ],
     "goto": "a1_05"
    },
    "fail": {
     "text": "科员翻到附表给你看，冒险团的价钱是 1790 年核定的，要改得三个司会签。申请改价还得另收五个金冠的文书费，当场付清。",
     "effects": [
      "gold -5"
     ],
     "goto": "a1_05"
    }
   },
   {
    "text": "要求写明公司有权拒绝违法命令",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag clause_refusal"
    ],
    "result": [
     "科员说这没有先例。将军头也没回，就开了口。",
     {
      "speaker": "德希尔德将军",
      "text": "给他加上，排在第九条。打过仗的人都知道这一条值多少钱。等到它不值钱的那天，它也就是一行字。"
     }
    ],
    "goto": "a1_05"
   },
   {
    "text": "向吉列姆打听前两支巡回队的下落",
    "effects": [
     "flag a1x_asked_circuits",
     "approval guilhem +1"
    ],
    "result": [
     {
      "speaker": "吉列姆",
      "text": "第一支是累垮的，六个人倒了四个，大夫给下的诊断是“咖啡过量”。第二支在纤道上被人抢了，抢的人只要魔晶，钱箱连碰都没碰。"
     },
     {
      "speaker": "吉列姆",
      "text": "所以这次部里雇了你们。这就叫吸取教训，至少公文上是这么写的。"
     }
    ],
    "goto": "a1_05"
   }
  ]
 },
 "a1_05": {
  "id": "a1_05",
  "title": "驳船",
  "art": "ev_damestear_core",
  "loc": "月河 · 下游码头",
  "date": "1820年苏伦月",
  "text": [
   "你们搭一条旧运煤驳船，护送六名公务变化师和二十箱配给魔晶。十箱用来催苗，十箱用来催穗。青蓝微光透过铅皮箱缝，白天也看得见。",
   "变化师里最老的一位叫贝尔特，今年六十三了。船还拴在码头上没动，她就晕上了。她趴在下风那一侧的船帮上，一看就是老手挑的位置。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "这么一箱，顶得上我四年的饷。这里有二十箱。别让我再往下算了。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "条例规定，一个法师团有四十人。这里我数到六个。其余三十四个呢？"
   },
   {
    "if": "party.middlesday && party.guilhem",
    "speaker": "吉列姆",
    "text": "都清洗掉了。公文上管这个叫“精简”。"
   },
   "魔晶车得从跳板上推上船。跳板只有一尺半宽，昨夜又下过雨。"
  ],
  "first": [
   "codex c_damestear"
  ],
  "choices": [
   {
    "text": "带队把车推上跳板",
    "check": {
     "skill": "athletics",
     "dc": 11,
     "party": true,
     "mods": [
      {
       "if": "is.worker",
       "n": 2,
       "why": "你装过车"
      },
      {
       "if": "is.sailor",
       "n": 1,
       "why": "你走惯了跳板"
      }
     ]
    },
    "ok": {
     "text": "车轮压着跳板的正中央，稳稳当当上了船。贝尔特从船帮上抬头看了一眼，又趴回去了。",
     "goto": "a1_05b"
    },
    "fail": {
     "text": [
      "左边的轮子滑出去半寸，最上面那只箱子顺着车板溜下来。一个角先着了地。铅皮裂开一道缝，蓝光淌了一甲板。",
      {
       "speaker": "贝尔特",
       "text": "这一箱是第九区的。"
      }
     ],
     "effects": [
      "flag crate_cracked"
     ],
     "goto": "a1_05b"
    }
   },
   {
    "text": "雇码头装卸班帮忙",
    "cost": {
     "gold": 15
    },
    "result": "来了八个人，抬着一根杠子，不到一袋烟的时间就装完了。领班数钱的时候告诉你，上个月也有一车这样的箱子从这里过，押车的人比你们多一倍。",
    "goto": "a1_05b"
   },
   {
    "text": "安排账上列为驮运器材的十四号搬运",
    "if": "party.middlesday",
    "effects": [
     "approval middlesday -1"
    ],
    "result": [
     "它一趟驮两箱，来回十趟，一步都没滑。",
     {
      "speaker": "礼拜三",
      "text": "驮完了。你刚才叫的是“十四号”。我记下了。"
     }
    ],
    "goto": "a1_05b"
   }
  ]
 },
 "a1_05b": {
  "id": "a1_05b",
  "title": "施过术的地",
  "loc": "月河 · 驳船",
  "text": [
   "八名纤夫合拉一根缆，驳船每天能走三十里。已是苏伦月，东岸麦苗才及脚踝。上一队施过术的西岸却泛着青蓝光，麦子已长到腰间。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "这块地不施术也能长东西，理论上是这样。实际上，打我曾祖父那一辈起，它就没自己长出过什么来。"
   },
   "过闸时，码头上有人往船上扔小册子，一扔就是一沓，封面上印着一行大字：“埃斯玛利亚要合，安本纳尔得分”。押运的文书弯腰捡起一本，抬眼看着你，看你怎么处置。",
   {
    "if": "origin == 'lorent'",
    "text": "小册子用的这种纸你认得。对着光一看，水印是一朵五瓣的玫瑰，这是洛伦泰内王家印坊出的纸，使馆的信笺用的就是同一批。"
   }
  ],
  "choices": [
   {
    "text": "去岸上取土查看",
    "once": true,
    "check": {
     "skill": "nature",
     "alt": [
      "survival"
     ],
     "dc": 12,
     "party": true,
     "mods": [
      {
       "if": "bg == 'farmer'",
       "n": 2,
       "why": "你种过地"
      }
     ]
    },
    "ok": {
     "text": [
      "施过术的土是松的，颜色发蓝，闻着有一股雷雨刚过的气味。没施过术的那边不一样，土攥不成团，一松手全是粉，再往下半尺是一层硬壳，根扎不下去。",
      "帝国拿法术催了这片地一百年，催到后来两年才能收一回。到如今只要不施术，它一粒粮食也不长。"
     ],
     "effects": [
      "codex c_verdancy",
      "flag a1x_soil_read"
     ]
    },
    "fail": {
     "text": "你抓了一把土闻闻，什么也没闻出来。手上沾的蓝灰洗了三遍还在，夜里你又咳了半宿。贝尔特隔着船帮告诉你，没魔力的人少碰这东西，矿上管这毛病叫蓝肺。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "指出纸上的水印来自洛伦泰内",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "once": true,
    "effects": [
     "rep republic +1",
     "rep wand -1"
    ],
    "result": "文书把册子举到灯前看了很久，放下册子又看你，看得更久。一个冒险公司的队长怎么会认得王家印坊的水印，这话他没问，只是记了下来。"
   },
   {
    "text": "收走并撕掉小册子",
    "effects": [
     "rep republic +1",
     "rep union -1"
    ],
    "result": "你把那一沓册子撕了，押运的文书看着很满意。岸上扔册子的人冲你喊了一句埃斯玛话，纤夫们听了都笑，可谁也不肯替你翻译。",
    "goto": "a1_06"
   },
   {
    "text": "留一本等夜里读",
    "effects": [
     "rep union +1"
    ],
    "result": [
     "册子一共十二页。前六页讲的是 1810 年安本科斯特答应过的公投，后六页是一张表，列着每个区交多少粮，领回多少魔晶。你拿船上的配给单核了一遍，表上的数都是对的。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "写这东西的人当过军需。这张表打得比部里的还齐整。"
     }
    ],
    "goto": "a1_06"
   },
   {
    "text": "不碰册子，留下看纤夫拉船",
    "effects": [
     "rep republic -1",
     "approval bura +1"
    ],
    "result": [
     "文书等了片刻，见你没动，就自己把那本册子揣进怀里，在日志上写了半行字。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "一张纸罢了，又不咬人。"
     }
    ],
    "goto": "a1_06"
   }
  ]
 },
 "a1_06": {
  "id": "a1_06",
  "title": "第一个区",
  "art": "ev_spell_list",
  "loc": "埃斯玛利亚 · 一个村子的打谷场",
  "text": [
   "在第一个区的打谷场，六位变化师传过一壶不加糖的咖啡，每人先喝一缸。随后他们脚尖相对围成一圈，中央放着开盖的魔晶箱。",
   "起头念咒的是贝尔特。才念到第三句，地里就有了动静，听着像一屋子人同时在撕布。前后不到一分钟，麦子从脚踝蹿到了膝盖。贝尔特流了鼻血，拿袖口一擦了事，那袖口本来就是褐色的。",
   {
    "speaker": "贝尔特",
    "text": "这是第一遍，叫催苗。到月底还得再走一遍，叫催穗。少了后面这一遍，秋天收上来的就只有草。"
   },
   "农户送来一筐黑麦面包，还烫手。送面包的老头放下筐子就退开了两步，脸上一点笑模样也没有。",
   {
    "speaker": "老农",
    "text": "我太爷爷说过，这块地从前用不着谁来念咒，一亩能打四袋。传到我手里，你们不来，就一袋也打不出来了。面包你们拿着，不用谢，我们也不谢你们。"
   },
   {
    "if": "is.god",
    "text": "打谷场旁边不知什么时候排起了队，第一个牵着一只瘸腿的羊。第二个抱着孩子，第三个什么也没带，只是跪着。六个变化师都扭头看你。"
   }
  ],
  "first": [
   "codex c_verdancy"
  ],
  "choices": [
   {
    "text": "进入施法圈，替贝尔特分担",
    "tag": "施法者",
    "if": "is.caster && !is.mechanim",
    "check": {
     "skill": "arcana",
     "dc": 13,
     "mods": [
      {
       "if": "flag.a1x_soil_read",
       "n": 1,
       "why": "你摸过这里的土"
      },
      {
       "if": "bg == 'apprentice'",
       "n": 1,
       "why": "学院教过合咒"
      }
     ]
    },
    "ok": {
     "text": [
      "你站进了贝尔特左边的空当。六个人的咒从你身上过了一遍，烫得很，还带着一股焦咖啡味。等到收咒时，你的指尖都成蓝的了。",
      {
       "if": "party.guilhem",
       "speaker": "吉列姆",
       "text": "第七个人？条例上没有第七个人的位置。之后我给你补一张表。"
      }
     ],
     "effects": [
      "flag shared_circle",
      "approval guilhem +1"
     ],
     "goto": "a1_07"
    },
    "fail": {
     "text": "第二句还没念完，你眼前一黑，一头栽在了麦茬上，醒过来的时候嘴里有血。贝尔特把自己那缸咖啡塞到你手里，说第一次都这样。她自己第一次还吐了教官一身。",
     "effects": [
      "hp -4"
     ],
     "goto": "a1_07"
    }
   },
   {
    "text": "告诉老农，施术前每亩收五袋",
    "tag": "长寿",
    "if": "is.longlived",
    "effects": [
     "rep union +1"
    ],
    "result": [
     "你说得出是哪一年，也说得出那年河水涨到了哪棵树。老头盯着你的{?is.elfblood:耳朵|脸}看了半天，回头喊他儿子也过来听。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "理论上还回得去。把法术停了，让地休耕，等上两代人就行。至于这两代人吃什么，条例上没写。"
     }
    ],
    "goto": "a1_07"
   },
   {
    "text": "把昏倒的变化师连同魔晶箱扛回车上",
    "tag": "武人",
    "if": "is.martial",
    "effects": [
     "item +bandage"
    ],
    "result": "圈子里最年轻的那个变化师，收咒的时候直挺挺倒了下去。你一边肩膀扛着人，一边胳膊夹着箱子，来回走了两趟。老农的儿媳妇追上来，默默往你怀里塞了一罐自家熬的药膏。农户们这是第一次正眼看你们。",
    "goto": "a1_07"
   },
   {
    "text": "治好本区土壤，使它无需再催收",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag soil_mended",
     "world tears +1",
     "world dove -2",
     "rep republic -1",
     "var cult +1"
    ],
    "result": [
     "你蹲下去，把手按在地上，那层硬壳就从你掌心下面一路裂到了河边。蓝光灭了，露出来的土是黑的，潮乎乎的，里面还有蚯蚓。",
     "老头跪下去抓了一把土，哭了。部里的公报管这件事叫“一起异常”。这个区从此用不着共和国的法师了，共和国也就再没法拿魔晶管住它的选票。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "你这一下让六个人丢了饭碗，我也是其中一个。"
     }
    ],
    "goto": "a1_07"
   },
   {
    "text": "付钱买下整筐面包",
    "cost": {
     "gold": 3
    },
    "effects": [
     "heal 1d6"
    ],
    "result": "老头把铜板在围裙上蹭了两下，收下了，还是没笑。面包里掺了碾碎的梨干，六个变化师一人分了两块，贝尔特吃了三块。",
    "goto": "a1_07"
   },
   {
    "text": "返车守魔晶，面包留给法师",
    "effects": [
     "approval bura +1"
    ],
    "result": [
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "守车的不吃人家的东西。吃了嘴就软，嘴一软，手就慢了。"
     },
     "你在车辕上一直坐到天黑。地里的蓝光始终没灭，亮得连每一根麦芒都照得见。"
    ],
    "goto": "a1_07"
   }
  ]
 },
 "a1_07": {
  "id": "a1_07",
  "title": "电报",
  "loc": "月河 · 驳船",
  "date": "1820年泰苏伦月",
  "text": [
   "第一遍催苗刚走完十区，第二批魔晶才开箱，下游便有舢板追上来。船上是沿河电报局的小工，嗓子都喊哑了。陆军部发来的电报只有十三个字。",
   {
    "text": "梨林等四区公投不稳，暂缓施术。",
    "cls": "letter"
   },
   "吉列姆把电报看了一遍，叠成四折，垫在了咖啡杯下面。梨林正是他的老家。六个变化师都放下手里的东西，等着你开口。",
   {
    "speaker": "贝尔特",
    "text": "“暂缓”是部里的说法，说白了就是今年不给了。这四个区投票不向着共和国，部里就不给他们催麦子。我干这一行四十年了，没见过哪块地是缓得起的。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "选票往哪边投，麦子就往哪边长。这种仗，我还真没打过。"
   }
  ],
  "first": [
   "quest q_harvest stage 2",
   "item +skiplist_telegram",
   "codex c_skiplist"
  ],
  "next": "a1_08"
 },
 "a1_08": {
  "id": "a1_08",
  "title": "团务会：暂缓名单",
  "art": "ev_multi_racial_merc",
  "loc": "月河 · 驳船舱里",
  "text": [
   "你们在魔晶箱拼成的桌子边开团务会。照公司规矩，每人先说一句，再作决定。埃塔没上船，她的回电刚刚送到。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "麦子不认选票，人饿起来也不认。我说施。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "条例第三款写着，变化师不得拒绝对已登记农地施术。电报不是条例。这术我来施，处分下来我一个人领。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "四个区，一万一千四百人。电报十三个字。一个字分到八百七十六人，还剩十二人，连一个字都没分上。"
   },
   "埃塔的回电上只有一个数，“四百八十”。那是不照部里的命令办要赔的违约金。",
   {
    "speaker": "别摇",
    "text": "起雾我会。我给电报局起一夜的雾，到时候谁也说不清哪封电报到了、哪封没到。这算你欠我半个人情，得当场还，我要梨花蜜。"
   },
   "三个人都说要施，埃塔报了个数，别摇开了个价。马灯里的油还够烧一小时，舱里的人都看着你。"
  ],
  "choices": [
   {
    "text": "按电报命令跳过四个区",
    "effects": [
     "flag skiplist_obeyed",
     "world dove -1",
     "rep republic +1",
     "approval guilhem -2",
     "approval bura -1",
     "approval middlesday -1",
     "var overruled +1"
    ],
    "result": [
     "你把多数人的意思压了下去。船过梨林镇外的时候没有停。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "事由那一栏我会写“奉命”。后面还差两个字，你替我想。"
     },
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "你是队长，你说了算。不过这次，我记着。"
     }
    ],
    "goto": "a1_09"
   },
   {
    "text": "连夜施术，回报没有收到命令",
    "effects": [
     "flag skiplist_defied",
     "world dove +1",
     "approval guilhem +2"
    ],
    "check": {
     "skill": "stealth",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "四个区施了四个晚上，马灯上都罩着黑布。回电是你拟的，写的是“电报未达，施术照常”。沿河电报局的那个小工，记性忽然变得很差。",
     "goto": "a1_09"
    },
    "fail": {
     "text": "到第三个晚上，押运的文书起夜，看见了地里的蓝光。他没有声张，回舱里写了一页日志，第二天到渡口就寄了出去。",
     "effects": [
      "flag skiplist_caught",
      "rep republic -2"
     ],
     "goto": "a1_09"
    }
   },
   {
    "text": "买蜜还别摇半份人情，借雾施术",
    "cost": {
     "gold": 8
    },
    "effects": [
     "flag skiplist_defied",
     "world dove +1",
     "approval guilhem +2"
    ],
    "check": {
     "skill": "stealth",
     "dc": 13,
     "party": true,
     "adv": true
    },
    "ok": {
     "text": "雾是后半夜起来的，从电报局的烟囱里一股一股往外冒，还带着薄荷味。连续四夜，对岸连一点蓝光也看不见。事后别摇把蜜罐拖回了自己罐子里，说这下两清了。",
     "goto": "a1_09"
    },
    "fail": {
     "text": "雾是罩住了电报局，可没罩住押运的文书。他夜里起来，一脚踩进了发蓝的麦地，回舱就写了一页日志。别摇说雾归雾，人归人，她只管前一样。",
     "effects": [
      "flag skiplist_caught",
      "rep republic -2"
     ],
     "goto": "a1_09"
    }
   },
   {
    "text": "向农户宣读电报，再公开施术",
    "effects": [
     "flag skiplist_defied",
     "flag skiplist_read_out",
     "world press +1",
     {
      "if": "faction == 'lantern'",
      "then": [
       "world press +1"
      ]
     },
     "rep republic -2",
     "rep union +1",
     "approval guilhem +1",
     "approval bura +1"
    ],
    "result": [
     "你站在梨林的码头上，把那十三个字念了一遍。念完很久没人出声。后来有个女人问了一句：“‘不稳’说的是我们吗？”",
     "六个变化师就在三百来号人眼前围起了圈。第二天，《康威尔通报》的访员坐着头班驳船赶来了。"
    ],
    "goto": "a1_09"
   },
   {
    "text": "投票，由多数决定",
    "effects": [
     "flag skiplist_defied",
     "flag skiplist_caught",
     "world dove +1",
     "approval guilhem +2",
     "rep republic -2"
    ],
    "result": [
     "表决下来，三票要施，埃塔弃权，别摇没有票。咒是大白天施的，谁也没想到要瞒着人。",
     "可六个变化师里面有一个天天晚上写日记，那本日记后来到了部里。"
    ],
    "goto": "a1_09"
   },
   {
    "text": "将配给均摊，十个区各得半份",
    "tag": "盾",
    "if": "faction == 'shield'",
    "effects": [
     "flag skiplist_halved",
     "approval bura +1"
    ],
    "result": [
     "十个区，每个区只给半箱。贝尔特把咒文改短了一半，念的时候一直在摇头。",
     "麦穗结出来了，可都是瘪的。每个区的粮都够吃到开春，没有一个区够吃到明年收麦。"
    ],
    "goto": "a1_09"
   },
   {
    "text": "依合同第九条书面拒绝命令",
    "tag": "印",
    "if": "faction == 'seal' && flag.clause_refusal",
    "effects": [
     "flag skiplist_defied",
     "flag refusal_on_paper",
     "world dove +1",
     "rep republic -1",
     "approval guilhem +2"
    ],
    "result": [
     "你写了三行字：“依合同第九条，本公司认定该命令于法无据，拒绝执行，施术照常”。一式两份，押运的文书签了收。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "第九条。我填了二十年的表，第一次看见有人拿一张表把部里挡了回去。"
     },
     "咒是白天施的。往后不管谁来查，第一样查到的东西就是这张纸。"
    ],
    "goto": "a1_09"
   }
  ]
 },
 "a1_09": {
  "id": "a1_09",
  "title": "梨林",
  "loc": "埃斯玛利亚 · 梨林镇",
  "text": [
   {
    "if": "flag.skiplist_defied",
    "text": "到了梨林镇，{?flag.skiplist_read_out:咒是白天施的，全镇的人都站在地头看。|半夜里，四十亩地一齐发了蓝。}吉列姆的父亲披着衣裳出来，在地头站了一刻钟，一言不发。回屋时，他给儿子留了门。"
   },
   {
    "if": "flag.skiplist_obeyed",
    "text": "船从梨林镇外过，没有停。码头上站着几个人，谁也没招手。过了闸，有条小船追上来，递上一筐梨，说是吉列姆的母亲让捎的。筐底压着一张字条，上面写着“路上吃”。"
   },
   {
    "if": "flag.skiplist_halved",
    "text": "梨林镇领到的也是半份。吉列姆把自家那二十亩的份让给了隔壁，因为隔壁有三个孩子。他父亲点了头，他母亲煮了一锅酒煮梨，一家人谁也没提麦子。"
   },
   "那天夜里，吉列姆的鼻血一直没止住。他伸手去拿咖啡，抖得几乎端不住杯子。变化师全靠它撑着，这已经是他今天的第五缸。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "这种手我见过。炮兵连着打上三天，手就是这样的。"
   },
   {
    "if": "flag.soil_mended && is.god",
    "text": "第一个区的事已经传到了这里。梨林来了三个老人，帽子都拿在手里，问{god}肯不肯把这里的土也治一治。"
   },
   {
    "if": "flag.soil_mended && !is.god",
    "text": "第一个区的事已经传到了这里。梨林来了三个老人，说要找那位治土的。他们把船上的人挨个看了一遍，目光在你脸上停了停，还是走了。"
   }
  ],
  "first": [
   "level 3"
  ],
  "choices": [
   {
    "text": "顺便治好梨林的土",
    "tag": "神",
    "if": "flag.soil_mended && is.god",
    "once": true,
    "effects": [
     "var cult +1",
     "approval guilhem -1"
    ],
    "result": [
     "三个老人回去时都没戴帽子，一路走一路回头。天亮以前，镇口的梨树下就摆上了一只碗，碗里盛着清水，还有三个铜板，是供给你的。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "我爸种了五十年的地，拜的一直是河上那位女神。往后让他拜谁？你别答，我不想知道。"
     }
    ]
   },
   {
    "text": "稳住他的手，为他止血",
    "check": {
     "skill": "medicine",
     "dc": 12,
     "party": true,
     "mods": [
      {
       "if": "is.divine",
       "n": 1,
       "why": "你包扎过的人多"
      }
     ]
    },
    "ok": {
     "text": [
      "你让他仰起头，拿湿布压住鼻梁，另一只手攥住他的手腕。一直攥到不抖了才松开。",
      {
       "speaker": "吉列姆",
       "text": "大夫不许我喝这个，说咖啡跟魔法犯冲，喝一缸折一天的寿。我算过了，拿一天换四十亩地，划算。"
      }
     ],
     "effects": [
      "approval guilhem +1"
     ],
     "goto": "a1_10"
    },
    "fail": {
     "text": "血是止住了，可你把他的头按得太低，他呛了一口，咳了半夜。第二天他连一句完整的咒也念不出来，第三天还是不行。少了他一个，剩下的五个人少催了一个区。",
     "effects": [
      "flag a1x_guilhem_spent"
     ],
     "goto": "a1_10"
    }
   },
   {
    "text": "收起咖啡壶，劝他睡觉",
    "effects": [
     "approval guilhem -1"
    ],
    "result": [
     {
      "speaker": "吉列姆",
      "text": "这壶是公家的，编号就在壶底。你要没收它，得给我开收据。"
     },
     "你没开收据。他睡了十一小时，醒来手不抖了，可一整天没跟你说一句话。"
    ],
    "goto": "a1_10"
   }
  ]
 },
 "a1_10": {
  "id": "a1_10",
  "title": "夜袭",
  "art": "ev_fireball",
  "loc": "月河纤道 · 配给车旁",
  "date": "1820年伊什达月",
  "text": [
   "后半夜，驳船系在月河纤道的石桩上。装魔晶的车用三道绳索绑在甲板中央。车后，六名变化师合盖一块油布睡着了。",
   "来的人没点火把，摸黑上了跳板。钱箱就在手边，他们却绕了过去，直奔装魔晶的铅皮箱。领头的是个使军刀的女人，右肩僵着，胳膊抬不过耳朵。她身后有个人只抬了抬手，甲板上的露水就全结成了霜。",
   {
    "if": "flag.a1x_asked_circuits",
    "text": "吉列姆跟你说过上一支巡回队是怎么丢的魔晶，所以睡前你特意把拴船的缆绳看了一遍，哪一股吃着劲。你到现在还记得。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "钱箱在左边，他们偏往右走，你看见没有？这些人要的东西，只有法师才用得着。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "三个人。注意领头的，她握刀的样子像个军官。"
   }
  ],
  "choices": [
   {
    "text": "持械挡在魔晶车前",
    "combat": {
     "title": "纤道夜袭",
     "intro": "跳板连响三声。领头的女人越过钱箱，举刀指向那只铅皮箱。",
     "enemies": [
      {
       "id": "thug",
       "name": "使军刀的老兵"
      },
      {
       "id": "court_mage",
       "name": "还施得出法的老战斗法师"
      },
      {
       "id": "lianne_warmage",
       "name": "领头的女人"
      }
     ],
     "specials": [
      {
       "id": "rope",
       "name": "砍断拴船的缆",
       "desc": "驳船可以载着魔晶车顺流离开。成功时，本场战斗直接获胜。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13,
        "mods": [
         {
          "if": "flag.a1x_asked_circuits",
          "n": 2,
          "why": "你睡前看过那个结"
         },
         {
          "if": "is.sailor",
          "n": 2,
          "why": "你认得这种结"
         }
        ]
       },
       "success": {
        "text": "你一刀下去，缆绳弹起来抽在水面上，驳船离了岸，跳板也掉进了河里。领头的女人追到齐膝深的水里才站住，眼看着一车魔晶往下游漂走了。",
        "end": "win"
       },
       "fail": {
        "text": "这缆是浸过桐油的三股麻绳，刀砍进去一半就被夹住了。你正往外拔刀，身上先挨了一下。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      }
     ],
     "win": {
      "goto": "a1_11"
     },
     "lose": {
      "effects": [
       "flag crystals_lost",
       "heal 1d6+2"
      ],
      "goto": "a1_11"
     }
    }
   },
   {
    "text": "喊出对方用的是帝国学院第三式",
    "tag": "施法者",
    "if": "is.caster && !is.mechanim && !is.god",
    "combat": {
     "title": "纤道夜袭",
     "intro": "你喊破那一式的名字。正要出手的人略一迟疑，甲板上的霜已化了一半。",
     "enemies": [
      {
       "id": "thug",
       "name": "使军刀的老兵"
      },
      {
       "id": "court_mage",
       "name": "还施得出法的老战斗法师",
       "hpMult": 0.6
      },
      {
       "id": "lianne_warmage",
       "name": "领头的女人"
      }
     ],
     "specials": [
      {
       "id": "rope",
       "name": "砍断拴船的缆",
       "desc": "驳船可以载着魔晶车顺流离开。成功时，本场战斗直接获胜。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13,
        "mods": [
         {
          "if": "flag.a1x_asked_circuits",
          "n": 2,
          "why": "你睡前看过那个结"
         },
         {
          "if": "is.sailor",
          "n": 2,
          "why": "你认得这种结"
         }
        ]
       },
       "success": {
        "text": "你一刀下去，缆绳弹起来抽在水面上，驳船离了岸，跳板也掉进了河里。领头的女人追到齐膝深的水里才站住，眼看着一车魔晶往下游漂走了。",
        "end": "win"
       },
       "fail": {
        "text": "这缆是浸过桐油的三股麻绳，刀砍进去一半就被夹住了。你正往外拔刀，身上先挨了一下。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      }
     ],
     "win": {
      "goto": "a1_11"
     },
     "lose": {
      "effects": [
       "flag crystals_lost",
       "heal 1d6+2"
      ],
      "goto": "a1_11"
     }
    }
   },
   {
    "text": "空手站到魔晶车前与他们交涉",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag a1x_mage_dragged"
    ],
    "combat": {
     "title": "纤道夜袭",
     "intro": "你没拔武器。握军刀的老兵率先后退，将睡在外侧的变化师拖到身前。领头的女人纹丝不动，只把刀换到了左手。",
     "enemies": [
      {
       "id": "court_mage",
       "name": "还施得出法的老战斗法师"
      },
      {
       "id": "lianne_warmage",
       "name": "领头的女人"
      }
     ],
     "specials": [
      {
       "id": "rescue",
       "name": "把被拖走的变化师抢回来",
       "desc": "正在后撤的人把他当作人盾。",
       "check": {
        "skill": "athletics",
        "alt": [
         "acrobatics"
        ],
        "dc": 12
       },
       "success": {
        "text": "你三步追上去，一把攥住了那件灰外套的后领，拖人的那个只好松了手，连头也没回。",
        "effects": [
         "unflag a1x_mage_dragged"
        ]
       },
       "fail": {
        "text": "纤道上全是露水，你脚下一滑，那件灰外套就从你指头缝里溜走了。"
       }
      },
      {
       "id": "rope",
       "name": "砍断拴船的缆",
       "desc": "驳船可以载着魔晶车顺流离开。成功时，本场战斗直接获胜。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13,
        "mods": [
         {
          "if": "flag.a1x_asked_circuits",
          "n": 2,
          "why": "你睡前看过那个结"
         },
         {
          "if": "is.sailor",
          "n": 2,
          "why": "你认得这种结"
         }
        ]
       },
       "success": {
        "text": "你一刀下去，缆绳弹起来抽在水面上，驳船离了岸，跳板也掉进了河里。领头的女人追到齐膝深的水里才站住，眼看着一车魔晶往下游漂走了。",
        "end": "win"
       },
       "fail": {
        "text": "这缆是浸过桐油的三股麻绳，刀砍进去一半就被夹住了。你正往外拔刀，身上先挨了一下。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "jar_ask",
       "name": "问别摇肯不肯出来",
       "desc": "她若愿意出罐，亮光会让全场晃眼一回合。成功时，所有敌人陷入「目盲」，持续 1 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "var.jar_trust >= 1",
          "n": 2,
          "why": "你给她开过盖子"
         }
        ]
       },
       "success": {
        "text": "她说：“算半个人情。”盖子自己转开了，一团青蓝的光贴着每个人的眼皮绕了一圈，绕完又回了罐子。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "她说：“不出来。你们的架，你们自己打。”说完她在罐底转了个身，拿背对着你。"
       }
      }
     ],
     "win": {
      "goto": "a1_11"
     },
     "lose": {
      "effects": [
       "flag crystals_lost",
       "heal 1d6+2"
      ],
      "goto": "a1_11"
     }
    }
   }
  ]
 },
 "a1_11": {
  "id": "a1_11",
  "title": "魔杖贵族",
  "loc": "月河纤道",
  "text": [
   {
    "if": "!flag.crystals_lost",
    "text": "天快亮了，领头的战斗法师是个女人，被按在纤道的石桩上，{?party.bura:布拉用膝盖压着她那条好肩膀|身上捆了三道绳子}。她手下的人都跑了，她没喊他们回来，反倒自己报了全名：莉安娜·西尔·加贝莱尔。"
   },
   {
    "if": "flag.crystals_lost",
    "text": "天将亮时，魔晶已经少了一半。领头的女人独自提着半箱魔晶回来，往跳板上一放，报了全名：“莉安娜·西尔·加贝莱尔。”她这次来，是要谈。"
   },
   {
    "if": "flag.a1x_mage_dragged",
    "text": "油布下面少了一个人：最年轻的那个变化师夜里被拖走了，没能追回来。莉安娜说人她会放，哪天放由她定。"
   },
   {
    "speaker": "莉安娜",
    "text": "摸摸这里，1810 年破魔弹留下的三粒寇拉希还在我肩里。四天里有三天我连一个法术都使不出。魔晶得留给我们那所学校。退役法师没地方去，都在那里过冬，两箱才够。我们不卖。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "我也是法师，可我从来没抢过谁的车。"
   },
   {
    "speaker": "莉安娜",
    "text": "你是个三等变化师。他们肯留着你，是因为你祖上没有爵位，咬不了人。六个人干四十个人的活，这不叫留用，这叫当牲口使。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆低下头，把手里的杯子转了半圈，答不上来。"
   },
   {
    "speaker": "莉安娜",
    "text": "我们没要过特权，我们要的是统治。这两样的区别在于，统治这件事我们会。"
   },
   {
    "if": "party.bura",
    "text": "布拉的铰链咔地响了一声。她原先那副下巴，就是被法师的一道咒打没的。"
   },
   {
    "if": "is.god",
    "speaker": "莉安娜",
    "text": "黑色教义里写过，够强的法师就是神。后来这句话没人敢念了。如今你往这里一站，它也用不着谁来念了。"
   }
  ],
  "first": [
   "codex c_lianne",
   "codex c_blackround"
  ],
  "choices": [
   {
    "text": "听她描述学校，判断真假",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 13,
     "mods": [
      {
       "if": "is.noble",
       "n": 1,
       "why": "你听得出贵族撒谎的调子"
      }
     ]
    },
    "ok": {
     "text": "一冬要烧几箱她说得出来，哪个学生夜里尿床她也说得出来，说到校舍屋顶漏雨时还皱了一下眉。学校是真的，编故事的人不会去编屋顶漏雨。",
     "effects": [
      "flag a1x_school_true"
     ]
    },
    "fail": {
     "text": [
      "她那张脸是当军官练出来的，你什么也没看出来，她倒看出你正在心里掂量她。",
      {
       "speaker": "莉安娜",
       "text": "你是在估价吧？你们这种公司，也就会这个。"
      }
     ]
    }
   },
   {
    "text": "帮她取出肩上的一粒寇拉希",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": [
      "她咬着自己的皮带让你下刀。那东西是黑的，只有米粒大。夹出来时，连刀尖上的反光都暗了一下。",
      {
       "speaker": "莉安娜",
       "text": "还剩两粒，往后四天里我有两天能施法了。这次算我欠你的。加贝莱尔家的债向来记在爵位上，如今爵位没了，债还在。"
      }
     ],
     "effects": [
      "item +korashi_grain"
     ]
    },
    "fail": {
     "text": [
      "刀尖一滑，没碰着那一粒，血流了半碗。她从头到尾一声没出，等你把伤口包好了才开口。",
      {
       "speaker": "莉安娜",
       "text": "这一刀要是在学院里，要挨教鞭的。"
      }
     ],
     "effects": [
      "rep wand -1"
     ]
    }
   },
   {
    "text": "请她讲讲中破魔弹的感受",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "effects": [
     "rep wand +1"
    ],
    "result": [
     {
      "speaker": "莉安娜",
      "text": "护盾明明还开着，子弹已经进来了，接着就是冷。平常伸手就够得着的魔力，你再去够，那里只剩一个窟窿，还在往外漏。"
     },
     {
      "speaker": "莉安娜",
      "text": "漏到哪里去了？我问过三个大夫，三个都说，从来没人问过这个。"
     }
    ]
   },
   {
    "text": "将她移交治安军",
    "effects": [
     "flag lianne_arrested",
     "rep republic +1",
     "rep wand -1"
    ],
    "result": "{?flag.crystals_lost:她是空着手回来谈的，可你还是喊了人来。|}最近的哨所在下游四里地，没多久就来了一个班，带着一副专门铐法师的手铐，铐环里面衬着一层黑的。她把手伸出去时，眼睛看的是吉列姆。",
    "goto": "a1_12"
   },
   {
    "text": "让她离开",
    "effects": [
     "flag lianne_freed",
     "rep wand +1",
     "approval bura -1"
    ],
    "result": [
     "她活动了一下那条好肩膀，连声谢也没道。走出十几步，她又停了下来，没有回头。",
     {
      "speaker": "莉安娜",
      "text": "那个变化师，你听着。哪天你那张表填不下去了，学校里正缺一个教催生术的。"
     },
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "1810 年我抓过她这样的。那时候抓了是不放的。"
     }
    ],
    "goto": "a1_12"
   },
   {
    "text": "拨一箱配给魔晶给退役法师学校",
    "if": "flag.a1x_school_true",
    "effects": [
     "flag lianne_supplied",
     "rep wand +2",
     "approval guilhem +1"
    ],
    "result": [
     "一箱魔晶够给一个区催穗的。{?party.guilhem:吉列姆自己把箱子搬下了跳板，又在配给单上划了一笔，事由那一栏空着没填。|你在配给单上划了一笔，事由那一栏空着没填。}",
     {
      "speaker": "莉安娜",
      "text": "一箱。是谁给的我记得住，是从谁嘴里省下来的，我也记得住。"
     }
    ],
    "goto": "a1_12"
   }
  ]
 },
 "a1_12": {
  "id": "a1_12",
  "title": "三倍薪水",
  "art": "ev_female_spy",
  "loc": "康威尔 · 客栈",
  "date": "1820年花终月",
  "text": [
   "公投还有三天。康威尔的墙上叠了三层告示，揭到底还能看到 1810 年的旧纸。报馆彻夜开印，震得客栈柜上的杯子直抖。",
   "客栈后厅坐着一位女客，兜帽一直没摘，领口别着一枚银的白玫瑰。她正请巡回队的法师们喝酒，喝的是鲁本奈尔的红酒，一瓶抵得上你三天的伙食。她是洛伦特派来挖人的。",
   {
    "speaker": "白玫瑰王庭的女执事",
    "text": "三倍的薪水，外加一张去洛伦泰内的船票。在我们那里，变化师有自己的塔，大夫只管劝，不管禁。诸位慢慢考虑，船是礼拜五开。"
   },
   "两个年轻的变化师没碰酒杯，可也没起身走。贝尔特把她的酒喝了，道了声多谢，回屋睡觉去了。",
   {
    "if": "origin == 'lorent' && flag.lorent_notes_read",
    "text": "她起身添酒，路过你身边的时候往你外套里塞了一只钱袋，沉甸甸的。“老臣党翻过你的口袋，我们也翻过，这袋子归你管，账也归你记。”"
   },
   {
    "if": "origin == 'lorent' && !flag.lorent_notes_read",
    "text": "她起身添酒，路过你身边的时候往你外套里塞了一只钱袋，沉甸甸的。“使馆的意思是，袋子归你管，花在谁身上由你定。”"
   }
  ],
  "first": [
   "codex c_lorent"
  ],
  "choices": [
   {
    "text": "当众问她受谁指派",
    "if": "origin != 'lorent'",
    "check": {
     "skill": "investigation",
     "alt": [
      "intimidation"
     ],
     "dc": 13,
     "mods": [
      {
       "if": "flag.spotted_bidders",
       "n": 2,
       "why": "这种别针你在讲堂里见过"
      }
     ]
    },
    "ok": {
     "text": "你把船名、泊位，连船票的票根是哪家印的都报了出来，满厅的人听得一清二楚。她只好把兜帽往下拉了拉，结了酒账就走了。押运的文书在日志上给你写了一句好评。",
     "effects": [
      "rep republic +1"
     ],
     "goto": "a1_12b"
    },
    "fail": {
     "text": "你刚起了个头，她抢先站起身，嗓门比你还亮，说一家拿着匿名股东钱的公司，倒查起别人的账来了。满厅的人都转过头，看的是你。",
     "effects": [
      "rep republic -1"
     ],
     "goto": "a1_12b"
    }
   },
   {
    "text": "收下八十金冠，替她隐瞒",
    "if": "origin != 'lorent'",
    "effects": [
     "flag bribed_whiterose",
     "gold +80"
    ],
    "result": "钱是包在一方绣着白玫瑰的手帕里递过来的。到了礼拜五早上，两个年轻的变化师没来吃早饭，铺盖卷也不见了。",
    "goto": "a1_12b"
   },
   {
    "text": "替法师付清两张船票",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "effects": [
     "flag purse_spent_mages",
     "rep wand +2",
     "world dove -1"
    ],
    "result": "你没经她的手，是自己去找的那两个年轻人。他们当夜就走了，铺盖卷叠得整整齐齐。这一来巡回队只剩四个人，要催的地一亩也没少。",
    "goto": "a1_12b"
   },
   {
    "text": "把原封的钱袋退还使馆",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "effects": [
     "flag purse_kept",
     "rep wand -1"
    ],
    "result": "你在给使馆的条子上写的是“时机不宜”。女执事的条子比你的早到了一天，上面写着“此人手紧”。",
    "goto": "a1_12b"
   },
   {
    "text": "把钱送去梨林买明年的麦种",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "effects": [
     "flag purse_to_peargrove",
     "rep wand -2",
     "world dove +1"
    ],
    "result": [
     "一袋洛伦特的金冠，换来了四十车硬粒麦种，这种麦子不用施术也能发芽。收据是梨林镇公所开的，抬头写着“无名氏”。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "这是谁的钱？……算了，反正收据上也没这一栏。"
     }
    ],
    "goto": "a1_12b"
   },
   {
    "text": "告诉吉列姆，让法师们作决定",
    "effects": [
     {
      "if": "origin == 'lorent' && !flag.purse_spent_mages && !flag.purse_to_peargrove && !flag.purse_kept",
      "then": [
       "flag purse_kept",
       "rep wand -1"
      ]
     },
     "approval guilhem +1"
    ],
    "result": [
     "六个人在马厩里商量了一刻钟。那两个年轻的是动了心的，回来时眼圈都红了，行李却没动。",
     {
      "if": "party.guilhem",
      "speaker": "吉列姆",
      "text": "我可没劝。我只是把三倍薪水折成咖啡念给他们听了，一天九缸。折多少寿，是他们自己算的。"
     },
     {
      "if": "origin == 'lorent'",
      "text": "那只钱袋你原封没动。女执事临走时看了你一眼，在小本子上写了一个字。"
     }
    ],
    "goto": "a1_12b"
   }
  ]
 },
 "a1_12b": {
  "id": "a1_12b",
  "title": "报馆街",
  "loc": "康威尔 · 报馆街",
  "shop": {
   "name": "报馆街的药铺",
   "blurb": "药裹在昨日的《康威尔通报》里。你把纸包翻过来，才能看见头版。",
   "stock": [
    "healing_potion",
    "antidote",
    "bandage",
    "flash_powder"
   ]
  },
  "text": [
   "康威尔的报馆街上，印坊一家挨着一家，墙被油墨熏黑了。《康威尔通报》和史家会分号只隔一家药铺。分号窗上明码标价：“第一手见闻，按行计酬，谎报不收”。",
   {
    "if": "!flag.skiplist_read_out && !flag.a1x_grant_done",
    "text": "那封十三个字的电报还揣在你怀里。这条街上至少有两家肯为它出价，价钱不一样，后果也不一样。再有一个去处就是寄回公司，锁进埃塔的铁箱，只是那样一个铜板也拿不到。"
   },
   {
    "if": "flag.skiplist_read_out && !flag.a1x_grant_done",
    "text": "那封电报你已经当众念过了。如今全埃斯玛利亚的人都背得出来，分号的伙计说旧闻他们不收。它只剩一个去处，就是埃塔的铁箱。"
   },
   {
    "if": "is.god",
    "text": "街口站岗的治安军中士盯着你看了半天，忽然举起步枪，朝你胸口开了一枪，打的是专破法术的破魔弹。弹头在你外套上停了一下，滚到他靴子旁边，变成了蓝的。"
   },
   {
    "if": "is.god",
    "speaker": "中士",
    "text": "还真是！这东西一发顶我半个月的饷。劳驾，剩下的也帮个忙？"
   }
  ],
  "choices": [
   {
    "text": "把电报卖给史家会分号",
    "if": "!flag.skiplist_read_out && !flag.a1x_grant_done",
    "once": true,
    "effects": [
     "flag a1x_grant_done",
     "item -skiplist_telegram",
     "gold +40",
     "world press +1"
    ],
    "result": "伙计数数，一共十三个字，按行算只有一行。他到后面请示了一趟，回来给了你四十金冠。下个月，全坎诺的订户都会在第四版上读到它。"
   },
   {
    "text": "把电报卖给卡拉桑尼行情科",
    "if": "!flag.skiplist_read_out && !flag.a1x_grant_done",
    "once": true,
    "effects": [
     "flag a1x_grant_done",
     "item -skiplist_telegram",
     "gold +120",
     "rep charter +1"
    ],
    "result": "行情科在报馆街尽头的二楼，门口不挂牌子。出纳没问电报是哪里来的，只问还有谁看过，问完付了一百二十金冠。明年的麦价，他们今晚就要改了。"
   },
   {
    "text": "寄电报回公司，交埃塔锁好",
    "if": "!flag.a1x_grant_done",
    "once": true,
    "effects": [
     "flag a1x_grant_done",
     "flag box_skiplist",
     "item -skiplist_telegram"
    ],
    "result": [
     {
      "speaker": "埃塔·斧砧",
      "text": "回电：收到。铁箱第一格。这东西今天不值钱，哪天值钱了我告诉你。"
     }
    ]
   },
   {
    "text": "让整盒破魔弹变蓝",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag box_turned_blue",
     "rep republic +1",
     "rep charter -1"
    ],
    "result": [
     "四十发，一发不剩全变蓝了。中士低头点过一遍，把盒子揣进怀里，冲你敬了个礼。",
     "到了傍晚，客栈门口排起了一队军需官，一人抱着一箱破魔弹。公报当晚就出来了，上面写着“{god}兹列为战略资源，离城须向陆军部报备”。拉姆斯盖特造破魔弹的厂长是坐夜车赶来的，他不排队。他是来求你别再干了。"
    ]
   },
   {
    "text": "回客栈休息到钟响",
    "once": true,
    "effects": [
     "rest short"
    ],
    "result": "印机吵了整整一夜，你听着它的节拍，不知不觉睡着了。"
   },
   {
    "text": "公投日清早前往广场",
    "goto": "a1_13"
   }
  ]
 },
 "a1_13": {
  "id": "a1_13",
  "title": "公投日",
  "loc": "康威尔 · 广场",
  "date": "1820年花终月28日",
  "text": [
   "人群从四条街拥入广场，三种口号此起彼伏。往北是神殿钟楼，往东是税关。两名书记守着税关门前的票箱。六名穿灰外套的变化师偏在这天来领薪，就站在票箱旁。",
   {
    "if": "origin != 'anbennar'",
    "text": "一队治安军横在广场当中，二十二个人一排，一共三排，刺刀都上好了。带队的中尉很年轻，一只手一直按在哨子上。"
   },
   {
    "if": "origin == 'anbennar'",
    "text": "一队治安军横在广场当中，二十二个人一排，一共三排，刺刀都上好了。那正是你的老连队。带队的是奥德里克·马洛中尉，新年那天等着你传口令的就是他。"
   },
   {
    "if": "origin == 'anbennar' && flag.kept_buttons",
    "text": "你外套上还钉着连里的铜扣，前排有人认出来了，枪口往下低了一寸。"
   },
   "有一块砖飞了出来，也响了一声枪，哪个在先，你当时顾不上分辨。你只看见前排一个治安军捂着头蹲了下去，中尉的哨子已经到了嘴边。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "上膛了。第一排已经跪下。他们练的是三排轮射。我教的。"
   }
  ],
  "first": [
   "quest q_konwell start",
   "codex c_konwell"
  ],
  "choices": [
   {
    "text": "寻找枪声的来源",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 15,
     "mods": [
      {
       "if": "is.soldier",
       "n": 1,
       "why": "你听得出枪声的远近"
      }
     ]
    },
    "ok": {
     "text": "是税关三楼，从左边数第四扇窗，还有一缕烟没散。那层楼租给了谁，客栈老板提过：一个是部里派来的观察员，另一个是外国酒商。窗帘动了一下，又合上了。",
     "effects": [
      "flag saw_shooter_window"
     ]
    },
    "fail": {
     "text": "你刚抬起头，后面的人就往前涌，不知谁的胳膊肘撞在你肋骨上。等你站稳了再看，四面的窗户全都关着。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "走到双方队伍之间",
    "effects": [
     "flag square_stood"
    ],
    "check": {
     "skill": "persuasion",
     "alt": [
      "intimidation"
     ],
     "dc": 14,
     "adv": "faction == 'shield' || origin == 'anbennar'",
     "mods": [
      {
       "if": "flag.kept_buttons",
       "n": 2,
       "why": "连里的铜扣"
      },
      {
       "if": "is.soldier",
       "n": 1,
       "why": "喊口令的嗓子"
      }
     ]
    },
    "ok": {
     "text": [
      "你走到两排人当中，背对着人群，脸冲着刺刀。",
      {
       "if": "origin == 'anbennar' && flag.ny_passed_order",
       "speaker": "马洛中尉",
       "text": "……是你。行，我就当你还是连里的人。第一排，枪口朝天！"
      },
      {
       "if": "origin == 'anbennar' && !flag.ny_passed_order",
       "speaker": "马洛中尉",
       "text": "三连的{pc}，新年那天没传口令的那个。全连听好了，这人要是倒在这里，我的报告就写不圆了。枪口朝天！"
      },
      {
       "if": "origin != 'anbennar'",
       "text": "你喊了些什么，后来谁也记不清了，只记得你一直没停嘴。中尉把哨子在嘴边含了很久，总算拿了下来。"
      },
      "人群往后退了三步，第二声枪没有响。到了下午，票箱照常开了。"
     ],
     "effects": [
      "world dove +1",
      "rep union +1"
     ],
     "goto": "a1_14"
    },
    "fail": {
     "text": [
      "你走到当中，刚张开嘴，后面又飞来半块砖，砸在你脚旁边。",
      {
       "if": "origin == 'anbennar'",
       "speaker": "马洛中尉",
       "text": "{pc}，你让开。你已经不归我管了。"
      },
      "哨子响了。第一排的枪放平时，你还站在那里没动。"
     ],
     "effects": [
      "flag volleys",
      "world dove -1"
     ],
     "combat": {
      "title": "康威尔广场",
      "intro": "巷口一班治安军横枪拦路。你背后挤满了人，面前尽是刺刀。",
      "enemies": [
       {
        "id": "line_rifleman",
        "n": 4,
        "name": "治安军"
       },
       {
        "id": "dragoon",
        "n": 2,
        "name": "骑马的治安军"
       }
      ],
      "specials": [
       {
        "id": "bell",
        "name": "敲神殿的钟",
        "desc": "两边都会听到钟声，届时有机会让他们停手。成功时，本场战斗直接获胜。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 13
        },
        "success": {
         "text": "你撞开钟楼的门，整个人吊在了钟绳上。康威尔的大钟一百年来除了礼拜天就没响过。这一响，枪停了，喊声也停了。",
         "end": "win"
        },
        "fail": {
         "text": "钟楼的门从里面闩着，你撞了两下，门没怎么样，肩膀先受不了了。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "sergeant",
        "name": "把老中士说下来",
        "desc": "他手下这一个班愿意听他的号令。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "persuasion",
         "dc": 13,
         "adv": "party.bura"
        },
        "success": {
         "text": "带班的老中士头发全白了，1810 年是打过皇帝的。你问他这一枪是替谁放的，他那个班的枪口抬高了半尺。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "老中士看了你一眼，又把脸转了回去。“装弹。”"
        }
       }
      ],
      "win": {
       "goto": "a1_14"
      },
      "lose": {
       "effects": [
        "flag a1x_jailed",
        "heal 1d6+2"
       ],
       "goto": "a1_14"
      }
     }
    }
   },
   {
    "text": "带六名变化师撤出广场",
    "effects": [
     "flag square_mages_out",
     "flag volleys",
     "world dove -2",
     "approval guilhem +1"
    ],
    "result": [
     "你拽着离得最近的一个变化师，往钟楼下的巷子里走，{?party.guilhem:吉列姆跟在后面一个一个地数人头，|}身后哨子响了，紧跟着就是第一排齐射。",
     "巷口守着一个班的治安军，是奉命来封街的。他们不认灰外套，只认命令。"
    ],
    "combat": {
     "title": "康威尔广场",
     "intro": "巷口一班治安军横枪拦路。你背后挤满了人，面前尽是刺刀。",
     "enemies": [
      {
       "id": "line_rifleman",
       "n": 4,
       "name": "治安军"
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "骑马的治安军"
      }
     ],
     "specials": [
      {
       "id": "bell",
       "name": "敲神殿的钟",
       "desc": "两边都会听到钟声，届时有机会让他们停手。成功时，本场战斗直接获胜。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "你撞开钟楼的门，整个人吊在了钟绳上。康威尔的大钟一百年来除了礼拜天就没响过。这一响，枪停了，喊声也停了。",
        "end": "win"
       },
       "fail": {
        "text": "钟楼的门从里面闩着，你撞了两下，门没怎么样，肩膀先受不了了。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "sergeant",
       "name": "把老中士说下来",
       "desc": "他手下这一个班愿意听他的号令。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "persuasion",
        "dc": 13,
        "adv": "party.bura"
       },
       "success": {
        "text": "带班的老中士头发全白了，1810 年是打过皇帝的。你问他这一枪是替谁放的，他那个班的枪口抬高了半尺。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "老中士看了你一眼，又把脸转了回去。“装弹。”"
       }
      }
     ],
     "win": {
      "goto": "a1_14"
     },
     "lose": {
      "effects": [
       "flag a1x_jailed",
       "heal 1d6+2"
      ],
      "goto": "a1_14"
     }
    }
   },
   {
    "text": "协助治安军守住税关",
    "effects": [
     "flag square_held_line",
     "flag volleys",
     "world dove -2",
     "rep republic +2",
     "rep union -2",
     "approval bura -2"
    ],
    "result": [
     "合同上写的是护送巡回队，巡回队这时就在税关的台阶上，于是你站到了治安军第三排的侧翼。三排枪响过之后，石子地上躺着人。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "你站这边，行。我站你旁边，这是合同上写的。别的你别问我。"
     }
    ],
    "combat": {
     "title": "税关的台阶",
     "intro": "齐射之后，人群还没散尽。有一拨人正向投票箱和身穿灰外套的变化师逼近。",
     "enemies": [
      {
       "id": "striker",
       "n": 5,
       "name": "抄撬棍的"
      },
      {
       "id": "revolutionary",
       "n": 2,
       "name": "领头喊话的"
      }
     ],
     "specials": [
      {
       "id": "bell",
       "name": "敲神殿的钟",
       "desc": "两边都会听到钟声，届时有机会让他们停手。成功时，本场战斗直接获胜。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "你撞开钟楼的门，整个人吊在了钟绳上。康威尔的大钟一百年来除了礼拜天就没响过。这一响，枪停了，喊声也停了。",
        "end": "win"
       },
       "fail": {
        "text": "钟楼的门从里面闩着，你撞了两下，门没怎么样，肩膀先受不了了。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "leader",
       "name": "冲领头的喊：票箱还开着",
       "desc": "这些人今早出门，本是为了投票。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "persuasion",
        "alt": [
         "intimidation"
        ],
        "dc": 13
       },
       "success": {
        "text": "领头的那个愣了一下，回头看税关门口。票箱还在，两个书记正趴在箱子上护着。他手里的撬棍低了下去。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "“票？”他朝地上啐了一口，地上还躺着人。"
       }
      }
     ],
     "win": {
      "goto": "a1_14"
     },
     "lose": {
      "effects": [
       "gold -10",
       "heal 1d6+2"
      ],
      "goto": "a1_14"
     }
    }
   },
   {
    "text": "让这一排射出的子弹停在空中",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag square_miracle",
     "flag square_stood",
     "world dove -1",
     "rep republic -2",
     "var cult +2"
    ],
    "result": [
     "头两轮是朝天放的，第三轮放平了。四十来发子弹就这么停在了半空，离最近的一张脸不到两尺，一颗颗黑的，慢慢地打着转。",
     "广场上跪倒了一片，连治安军里也有跪下的。当晚安本科斯特的公报就出来了，说公投是在超自然胁迫下举行的，结果作废。",
     {
      "if": "party.bura",
      "speaker": "布拉",
      "text": "他们上礼拜才学会投票。你这一手，又把他们教回去了。"
     }
    ],
    "goto": "a1_14"
   }
  ]
 },
 "a1_14": {
  "id": "a1_14",
  "title": "广场之后",
  "loc": "康威尔 · 神殿的医护所",
  "date": "1820年花终月29日",
  "text": [
   {
    "if": "flag.a1x_jailed",
    "text": "你是在拘留所里醒过来的，其实就是税关的地窖。关了一夜，罪名那一栏还空着。早上有人来开门，说合同方不在拘押之列，把鞋带还给你。医护所离这里只隔着两条街。"
   },
   {
    "if": "flag.volleys",
    "text": "神殿的偏殿改成了医护所，床是拿长椅拼的。一共死了七个人。扔砖的那个才十四岁，是印坊的学徒，手指缝里的油墨还没洗掉。"
   },
   {
    "if": "!flag.volleys && !flag.square_miracle",
    "text": "神殿的偏殿改成了医护所，只用上了三张长椅，躺着一个头上挨了砖的治安军，还有两个是挤伤的。一个人也没死。票箱昨天傍晚就封了条，运到安本科斯特去了。"
   },
   {
    "if": "flag.square_miracle",
    "text": "医护所里只躺着一个头上挨了砖的治安军。神殿门外跪着的人，比昨天广场上的还要多。停在半空的那些弹头有人捡回去供了起来，一颗能卖到五个金冠。"
   },
   {
    "if": "flag.square_stood && !flag.square_miracle",
    "text": "伤员家里的人给你让出了半条长凳。{?flag.volleys:你昨天站到了枪口前面，虽然没拦住，他们还是认这个。|有个老太太还往你手里塞了两个煮鸡蛋。}"
   },
   {
    "if": "flag.square_mages_out",
    "text": "没人拦你，可也没人跟你说话。你昨天带走的是六个穿灰外套的法师，这屋里躺着的人，没有一个是穿灰外套的。"
   },
   {
    "if": "flag.square_held_line",
    "text": "管事的修女一看见你，就把偏殿的门掩上了一半。肯跟你说话的只有来换药的治安军。"
   },
   {
    "if": "party.middlesday && flag.volleys",
    "speaker": "礼拜三",
    "text": "三排，每排二十二响。另外还有一响。那声在砖头之前。有人先开了枪。"
   },
   {
    "if": "party.middlesday && !flag.volleys && !flag.square_miracle",
    "speaker": "礼拜三",
    "text": "六十六支枪，全都没放平。可我听到了一声。那一声在砖头之前。有人先开了枪。"
   },
   {
    "if": "party.middlesday && flag.square_miracle",
    "speaker": "礼拜三",
    "text": "停在空中的有四十三发。另外一声没有停，它响得太早了。在砖头之前。有人先开了枪。"
   },
   {
    "if": "!party.middlesday",
    "text": "押运的文书昨天一直在数枪声，这本来就是他的差事。他数出的比三排齐射多了一响，在砖头之前，也就是说，有人先开了枪。他自己看着这个数目也直皱眉。"
   },
   {
    "if": "party.bura && flag.volleys",
    "speaker": "布拉",
    "text": "开枪的是三连。1810 年他们跟我蹲一个战壕，那时候枪口朝的是皇宫。"
   },
   "治安军文书把事件报告送来了，照合同，你们也得签字。表上留给“起因”的那一格空着，只有两指宽。"
  ],
  "first": [
   "flag shot_counted",
   "quest q_konwell stage 2",
   "rest short"
  ],
  "choices": [
   {
    "text": "去帮忙包扎伤员",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "你一连裹了四个人。修女递给你一盆水洗手，水是温的。",
     "effects": [
      "rep union +1"
     ]
    },
    "fail": {
     "text": "你把夹板绑反了，疼得伤员骂了一句埃斯玛话。修女把你请到了门外，那卷绷带的钱也算在了你头上。",
     "effects": [
      "gold -3"
     ]
    }
   },
   {
    "text": "把记录交给《康威尔通报》",
    "tag": "灯",
    "if": "faction == 'lantern'",
    "once": true,
    "effects": [
     "flag square_reported",
     "world press +1",
     "rep republic -1"
    ],
    "result": "访员抄了整整一夜。排字的师傅说审查官明天才来上班，今晚能印多少算多少。第二天早上，你笔记里那句“另有一响”就印在了第二版上，没有署名。"
   },
   {
    "text": "填报起因“人群投掷砖石”",
    "effects": [
     "flag blame_crowd",
     "rep republic +1",
     "world dove -1"
    ],
    "result": "文书看了一眼，点点头，盖了章。到礼拜一，这行字就会登在首都的公报上，一个字都不会改。",
    "goto": "a1_15"
   },
   {
    "text": "填报起因“军官过早下令”",
    "effects": [
     "flag blame_officer",
     "rep republic -1",
     "world dove +1"
    ],
    "result": [
     "文书的笔停住了。他抬头看看你，又低头看看那一行。",
     {
      "if": "origin == 'anbennar'",
      "speaker": "马洛中尉",
      "text": "三连的{pc}。全连都过来看看，写这一行的人穿过我们的制服。我不拦你，你写。"
     },
     {
      "if": "origin != 'anbennar'",
      "text": "中尉亲自过来看了，在连署栏里签了名，签得很用力，纸背都透了。"
     }
    ],
    "goto": "a1_15"
   },
   {
    "text": "将起因登记为“不明”",
    "effects": [
     "flag blame_unknown",
     "approval middlesday +1"
    ],
    "result": [
     "只有两个字，栏里还空着一大半。文书说部里不喜欢这两个字，写了它，卷宗就结不了案。",
     {
      "if": "party.middlesday",
      "speaker": "礼拜三",
      "text": "不明。数得出来的答案，只有这一个。"
     }
    ],
    "goto": "a1_15"
   }
  ]
 },
 "a1_15": {
  "id": "a1_15",
  "title": "收成",
  "loc": "埃斯玛利亚 · 巡回队驻地",
  "date": "1820年泪落月初",
  "text": [
   "泪落月初，收割结束。部里发来十行结算表，每区一行。填亩产的格子倒小，备注那格留得格外宽。",
   {
    "if": "flag.skiplist_obeyed",
    "cls": "letter",
    "text": "梨林等四区：奉命暂缓。亩产栏：斜杠。"
   },
   {
    "if": "flag.skiplist_defied && flag.skiplist_caught",
    "cls": "letter",
    "text": "梨林等四区：照施。备注：违令，另案处理。"
   },
   {
    "if": "flag.skiplist_defied && !flag.skiplist_caught",
    "cls": "letter",
    "text": "梨林等四区：照施。备注栏里有人拿铅笔写过两个字。后来又擦掉了。"
   },
   {
    "if": "flag.skiplist_halved",
    "cls": "letter",
    "text": "十区各催半份。亩产栏里十个数，没有一个过得了往年的六成。"
   },
   {
    "if": "flag.crate_cracked",
    "cls": "letter",
    "text": "第九区：魔晶箱装船时摔裂，减半。"
   },
   {
    "if": "flag.crystals_lost",
    "cls": "letter",
    "text": "第六、第七区：配给遭劫，未催穗。"
   },
   {
    "if": "flag.lianne_supplied",
    "cls": "letter",
    "text": "第八区：配给短少一箱。事由栏空着。"
   },
   {
    "if": "flag.a1x_guilhem_spent",
    "cls": "letter",
    "text": "第五区：变化师一名病休三日，未催穗。"
   },
   {
    "if": "flag.a1x_mage_dragged",
    "cls": "letter",
    "text": "第四区：变化师一名失踪，未催穗。"
   },
   {
    "if": "flag.bribed_whiterose || flag.purse_spent_mages",
    "cls": "letter",
    "text": "变化师二名擅离职守。去向：洛伦泰内。"
   },
   "最后一页是给吉列姆的。梨林那一行后面，部里已经印好了“奉命不救”四个字，就等他签。{?flag.skiplist_defied:他明明施了咒，可部里要的是账面上没人违过令。|}{?flag.skiplist_halved:他催的是半份，可表上没有“半份”这一格。|}",
   {
    "speaker": "吉列姆",
    "text": "姓名，吉列姆。职务，国家三等变化师。事由……这一栏只有两指宽，“奉命不救”四个字是写得下的。可我不写。"
   },
   "他在事由栏里写的是“辞职”两个字，写完把公家的咖啡壶放在了表上，壶底的编号朝上。从这天起，他算公司的人了。",
   {
    "speaker": "埃塔·斧砧",
    "text": "回电：雇员栏添一行。月钱十个金冠。咖啡自理。"
   },
   "合同的最后一站是月河最上游的渡口，驳船要在那里交还。渡口对岸就是阿兰蒂尔塔，揭秘教会的地界。吉列姆想顺路去问教会一件事：流星一年比一年少，他们的本子上到底记没记。"
  ],
  "first": [
   "quest q_wastage start",
   "quest q_harvest done",
   {
    "if": "flag.skiplist_obeyed",
    "then": [
     "gold +120"
    ],
    "else": [
     {
      "if": "flag.refusal_on_paper || flag.skiplist_halved",
      "then": [
       "gold +90"
      ],
      "else": [
       "gold +60"
      ]
     }
    ]
   }
  ],
  "choices": [
   {
    "text": "趁文书离开，查巡回队档案",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "is.scholar",
       "n": 2,
       "why": "你翻惯了卷宗"
      }
     ]
    },
    "ok": {
     "text": "卷宗里夹着一张调阅单，调的是一卷叫“损耗”的东西，1811 年立的卷。{?is.dwarf:立卷人签的是如尼字，姓你念得出来，是账房人家常用的一个字头，名字那半边被墨点糊住了。|立卷人签的是矮人的如尼字，你不会念，只好照着描了下来。}调阅人那一栏，盖的是部长办公室的章。",
     "effects": [
      "flag wastage_ref"
     ]
    },
    "fail": {
     "text": "你刚翻到夹在当中的一张调阅单，才看清抬头上“损耗”两个字，文书就回来了。他把卷宗从你手下抽走，客客气气地请你签了一张“查阅未遂”，罚金三个金冠。",
     "effects": [
      "gold -3"
     ]
    }
   },
   {
    "text": "拍电报请埃塔代办史家会介绍信",
    "cost": {
     "gold": 10
    },
    "effects": [
     "flag a1x_letter"
    ],
    "result": "信是三天以后到的，封着史家会的火漆。措辞很长，意思很短：此人看过我们的罐子，没有摇。",
    "goto": "a1_16"
   },
   {
    "text": "不带介绍信，带一筐梨林的梨",
    "effects": [
     "approval guilhem +1"
    ],
    "result": [
     {
      "speaker": "吉列姆",
      "text": "阿兰蒂尔塔的门房吃不吃梨，条例上没写。不过我妈说了，是人就吃梨，修士也是人。"
     },
     "他挑了整整一晚上，磕了疤的梨全换掉了，一筐梨个个光洁。"
    ],
    "goto": "a1_16"
   }
  ]
 },
 "a1_16": {
  "id": "a1_16",
  "title": "只看一眼",
  "art": "ev_god_fragment",
  "loc": "阿兰蒂尔塔 · 门房",
  "date": "1820年泪落月",
  "text": [
   "渡口对岸是阿兰蒂尔塔，原本只有一座法师塔，如今塔下的城镇成了揭秘教会的都城，禁用传统魔法。守门人的披风只搭在左肩。吉列姆过关时，把双手拢进了袖子。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "八百年前，精灵就是在这座塔里教人念的第一句咒。如今我在这里倒算违禁品了。理论上。"
   },
   "门房设在塔基的一间石屋里。屋里只有一张桌子，一条腿短了一截。塔下的地窖里供着教会的圣物，一块会发声的碎片。你说明来意：不问话，只想看它一眼。",
   {
    "speaker": "门房修士",
    "text": "上一位说只看一眼的，是带了两箱金冠来的。人还在外面排着队，排的是四百一十一号。"
   },
   {
    "if": "is.god",
    "text": "他话才说到一半，侧门里出来了三个穿灰袍的，是分形修会的人。一人拿着一把黄铜卡尺。他们量了你的手腕，量了你影子的长短，连你呼出来的气也量了，然后在表上填了一行“天赋异禀的法师（见附录）”。"
   }
  ],
  "first": [
   "codex c_aranthil",
   "codex c_fragment"
  ],
  "choices": [
   {
    "text": "再说明来意，请他通报",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "flag.a1x_letter",
       "n": 2,
       "why": "史家会的介绍信"
      },
      {
       "if": "rep.church >= 1",
       "n": 1,
       "why": "教会里有人替你说过话"
      },
      {
       "if": "is.divine || is.faithful",
       "n": 1,
       "why": "你懂神殿门房的规矩"
      }
     ]
    },
    "ok": {
     "text": "他叹了口气，把你领进了前厅。前厅里空荡荡的，石头地面磨得发亮。你在那里站了一刻钟。忽然脚下响了一声，又高又短，像有人拿指甲弹了一下玻璃杯沿，地板缝里跟着漏上来一线青蓝的光。那是地窖里的碎片在响。门房修士在胸前画了个符号，请你出去了。",
     "effects": [
      "flag heard_hum"
     ],
     "goto": "a1_16b"
    },
    "fail": {
     "text": "{?flag.a1x_letter:他把介绍信看完，叠成四折，垫到了桌子那条短腿下面，桌子倒是不晃了。|他听完，从抽屉里摸出一张号牌来。}“四百一十二号，登记费五个金冠，叫到号的时候人不在，就作废。”",
     "effects": [
      "gold -5"
     ],
     "goto": "a1_16b"
    }
   },
   {
    "text": "按规矩领号到外面排队",
    "effects": [
     "rep church +1"
    ],
    "result": "你领的是四百一十二号。队伍从塔基一直绕到了河滩上，排在你前面的是一位老太太。连铺盖都带来了。她说她是春天来的。门房修士在登记簿上给你记了三个字：守规矩。",
    "goto": "a1_16b"
   },
   {
    "text": "不等通报，直接进去",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag fragment_hushed",
     "rep church -2"
    ],
    "result": [
     "谁也拦不住你。台阶往下走四十级，过一道铁门，就是一间地窖。碎片悬在一只空台座上面，只有拳头大，青蓝色，正响到一半。",
     "你刚站到它面前，它就停了，光还亮着，声音没了。守在那里的修女笔尖悬在半空，本子上这一行是空的，自打有记录以来这是第一次。你什么也没问到。"
    ],
    "goto": "a1_16b"
   }
  ]
 },
 "a1_16b": {
  "id": "a1_16b",
  "title": "陪同",
  "art": "ev_the_heroine",
  "loc": "阿兰蒂尔塔 · 塔基",
  "text": [
   "你还在塔基下，就被人叫住。教廷派来一名分形修会修女，要她随公司同行。公文早已写好，日期是昨天。",
   "这位修女是个月精灵，穿一身灰袍，戴一副侏儒磨的眼镜，腋下夹着个硬皮本子。她叫娜尔雯·望月，在地窖里记那块碎片一年响几声，记了一百五十四年。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "我只想请教贵会一件事。流星一年比一年少了，贵会的本子上到底记没记？"
   },
   {
    "speaker": "娜尔雯",
    "text": "上次有人这么问我，还是 1666 年。问的那个人第二天就走了，连伞都没带。你带伞了吗？"
   },
   {
    "speaker": "娜尔雯",
    "text": "今年它响了十一声，1809 年是四十声。我没说它在变弱，我只说我数到了十一。"
   },
   {
    "if": "flag.heard_hum && !flag.fragment_hushed",
    "text": "她翻开本子，把最末一行指给你看，上面写着“今天，申时二刻，一声”。旁边一行小字是她刚添的，“前厅有外人一名，听见了”。"
   },
   {
    "if": "flag.fragment_hushed",
    "speaker": "娜尔雯",
    "text": "我听了一百五十四年，它从来没为谁停过。今天它停了。这一行该怎么记，你说？"
   },
   {
    "if": "is.god && !flag.fragment_hushed",
    "text": "她打量你的时间比打量吉列姆的长，打量完了，在本子页边记了一个时辰，别的什么也没写。"
   }
  ],
  "first": [
   "companion +narwen",
   "quest q_narwen start",
   "codex c_fractalines",
   {
    "if": "flag.fragment_hushed",
    "then": [
     "approval narwen -2"
    ]
   }
  ],
  "choices": [
   {
    "text": "用精灵语问她“上次”是哪年",
    "tag": "精灵血",
    "if": "is.elfblood",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     {
      "speaker": "娜尔雯",
      "text": "1666 年，托丽丝辞任的那一天。那年我二十五岁，在门外替她举着灯。你这口音是哪一支的？我在船上听过一次。"
     }
    ]
   },
   {
    "text": "问她本人怎样理解“陪同”这项差事",
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     {
      "speaker": "娜尔雯",
      "text": "公文是真言院拟的。要我自己说，我是来看着你们的，顺便也出一趟门。我已经很多年没走出这座镇子了，那时渡口还没有电报局。"
     }
    ],
    "goto": "a1_17"
   },
   {
    "text": "告知公司报告只供内部查阅",
    "effects": [
     "rep church -1",
     "approval narwen -1",
     "rep partner +1"
    ],
    "result": [
     {
      "speaker": "娜尔雯",
      "text": "可以。那我的本子，公司也不能看。这笔买卖是谁吃亏，你算过吗？"
     }
    ],
    "goto": "a1_17"
   },
   {
    "text": "替她把装本子的箱子提上船",
    "effects": [
     "rep church +1"
    ],
    "result": "箱子比看上去沉得多。一百五十四年里她一年记一本，这次只带了最近的二十本。门房修士又在登记簿上给公司添了一句好话。",
    "goto": "a1_17"
   }
  ]
 },
 "a1_17": {
  "id": "a1_17",
  "title": "第一份报告",
  "loc": "阿兰蒂尔塔渡口 · 电报局",
  "text": [
   "渡口的小电报局按字收费，每字两个铜板。每完成一单，公司就得向合伙人报告，收件处一律是安本科斯特阿斯拉银行的匿名信箱。报务员先得把猫从纸带盘上抱下来。",
   "这一单能往上写的事不少：那封十三个字的电报，纤道上的战斗法师，康威尔的{?flag.volleys:七条人命|那一声枪}，还有地窖里那个一年只响十一声的东西。报务员把铅笔削好了推过来，电报纸上印着格子，一格写一个字。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "若是写全，二百一十四个字，四百二十八个铜板。省下的那些字，他还会从别处读到吗？"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "你就写“教会派员陪同”好了。我的名字写进公文，只会被人抄错。"
   }
  ],
  "choices": [
   {
    "text": "给老连队的文书寄一份副本",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep republic +1"
    ],
    "result": "连部的文书是你的老熟人，还欠着你半包烟。你在信封上写了“存档，别往上递”。他肯定会往上递的，这一条你也算进去了。"
   },
   {
    "text": "用密码本给使馆寄一份完整副本",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a1x_embassy_done",
    "once": true,
    "effects": [
     "flag a1x_embassy_done",
     "var home_copies +1",
     "rep wand +1",
     {
      "if": "flag.codebook_seen",
      "then": [
       "rep republic -1"
      ]
     }
    ],
    "result": [
     "密码本的书脊是假的，你把它拆开，用了整整一夜。使馆的回条上只有一个“悉”字。",
     {
      "if": "flag.codebook_seen",
      "text": "这本密码本海关是翻过的。你发给使馆的每一个字，陆军部也都读到了，只比使馆晚半天。"
     }
    ]
   },
   {
    "text": "只向使馆简报收成",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a1x_embassy_done",
    "once": true,
    "effects": [
     "flag a1x_embassy_done",
     "var embassy_gap +1"
    ],
    "result": "你只写了三行。使馆的回条隔了四天才到，也是三行。最后一行问的是：阁下是否太忙。"
   },
   {
    "text": "另寄一份给镇议会",
    "tag": "巨魔湾",
    "if": "origin == 'concord'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep charter +1"
    ],
    "result": "镇议会收到这封信要六个礼拜，表决要不要拆开看，又得两周。你在封皮上写了个“急”字，写了也是白写。"
   },
   {
    "text": "托回城船上的人向法德伦工会宣读报告",
    "tag": "无主者",
    "if": "origin == 'unowned'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep union +1"
    ],
    "result": "口信是一个司炉背下来带回去的，一个字也不差。工会的人在黑板上抄了一遍，抄到“六个人干四十个人的活”这一句，下面有人喊了起来：这不就是我们吗？"
   },
   {
    "text": "在游学团考察笔记中记下这单差事",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep south +1"
    ],
    "result": "题目叫“一家有限责任的冒险公司”。你在“共和国如何议事”那一章下面添了一节，写的是电报十三个字，广场三排枪。老家的行会要的正是这种例子。"
   },
   {
    "text": "完整记录全部经过",
    "cost": {
     "gold": 4
    },
    "effects": [
     "flag report1_full",
     "rep partner +1",
     "approval middlesday +1"
    ],
    "result": [
     "报务员足足拍了一刻钟。拍到“齐射”两个字时，他抬头看了你一眼。",
     {
      "speaker": "埃塔·斧砧",
      "text": "回电：款已到。"
     }
    ],
    "goto": "a1_18"
   },
   {
    "text": "隐去广场事件和电报",
    "cost": {
     "gold": 2
    },
    "effects": [
     "flag report1_edited"
    ],
    "result": [
     "删完剩下的，是一份体体面面的护送报告：十个区，一次夜袭，驳船已交还。",
     {
      "speaker": "埃塔·斧砧",
      "text": "回电：款已到。"
     }
    ],
    "goto": "a1_18"
   },
   {
    "text": "只报路途顺利、收成尚可",
    "effects": [
     "flag report1_lie",
     "rep partner -1",
     "approval middlesday -1"
    ],
    "check": {
     "skill": "deception",
     "dc": 13,
     "mods": [
      {
       "if": "faction == 'seal'",
       "n": -1,
       "why": "你不惯在纸上撒谎"
      }
     ]
    },
    "ok": {
     "text": [
      "一共八个字。报务员说，这是他今年拍过的最短的一份报告。",
      {
       "speaker": "埃塔·斧砧",
       "text": "回电：款已到。"
      }
     ],
     "goto": "a1_18"
    },
    "fail": {
     "text": [
      "一共八个字。这次的回电来得比平常快，而且不是埃塔拟的，是合伙人自己回的。",
      {
       "text": "报告收悉。康威尔一节请补。款照付。",
       "cls": "letter"
      },
      "“康威尔”这三个字，你在报告里从来没写过。合伙人是从别处知道的。"
     ],
     "effects": [
      "flag partner_knows_lie"
     ],
     "goto": "a1_18"
    }
   }
  ]
 },
 "a1_18": {
  "id": "a1_18",
  "title": "数流星",
  "art": "ev_big_star_in_sky",
  "loc": "月河 · 驳船顶",
  "date": "1820年泪落月的一个晴夜",
  "text": [
   "泪落月的第一个晴夜，人人爬上铺了油布的驳船顶。照老规矩，今晚要数流星，把数目记进历书。你们用的魔晶正是流星带来的。",
   {
    "if": "world.tears >= 6",
    "text": "数到后半夜，本子上记了二百来颗。船舱里那本 1809 年的历书，这一栏印的是“数不过来”四个字。"
   },
   {
    "if": "world.tears == 5",
    "text": "数到后半夜，本子上记了一百五十出头。船舱里那本 1809 年的历书，这一栏印的是“数不过来”四个字。"
   },
   {
    "if": "world.tears <= 4",
    "text": "数到后半夜，本子上还不到一百颗。船舱里那本 1809 年的历书，这一栏印的是“数不过来”四个字。"
   },
   "别摇也上来了，她的罐子就摆在油布当中。得把马灯捻到最小，才看得见她身上那一点光。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "九、十、十一。数完了。我数的是欠饷的月份。流星比它多，可也多不了几年了。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "一百零三，一百零四。落地的都归部里，记进器材账。我想问，那些没落地的归谁？"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "神谕之眼彗星一百一十一年来一次。上次是 1810 年，下一次要等到 1921 年。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "托丽丝还在任上时，我也这样数过。她数到一半就不数了，说是够用了。"
   },
   {
    "if": "is.immortal",
    "text": "娜尔雯张口就是“上次”，听得你也掐着指头算了算：1921 年你多大，2032 年又是多大。算到第三次彗星，你就不往下算了。到那时，在船顶上跟年轻人说“上次”的，大概就是你。"
   },
   {
    "if": "is.god",
    "text": "贝尔特的小孙女是跟着船来的，今年才七岁。她数到一百就不会往下数了，扯了扯你的袖子，问你能不能让它再多落几颗。"
   }
  ],
  "first": [
   "level 4"
  ],
  "choices": [
   {
    "text": "让流星再多落一会儿",
    "tag": "神",
    "if": "is.god",
    "once": true,
    "effects": [
     "flag tears_called",
     "world tears +1",
     "rep charter -2"
    ],
    "result": [
     "你抬了一下手，天顶上就开了一道青蓝的口子，流星足足落了一刻钟。小姑娘数不过来了，只顾拍着手笑。",
     "可是有一阵落偏了，砸穿了下游一座谷仓的顶，烧掉了半仓新麦。到了第二天，魔晶的价钱跌了三成，卡拉桑尼的行情科连夜改了牌价。",
     {
      "if": "party.narwen",
      "speaker": "娜尔雯",
      "text": "天上多落过一次东西，是 1810 年。"
     }
    ]
   },
   {
    "text": "问布拉如何讨回十一个月欠饷",
    "if": "party.bura",
    "effects": [
     "approval bura +1"
    ],
    "result": [
     {
      "speaker": "布拉",
      "text": "写信。一个月一封，已经写了九十六封。回信一共来过三封，写的都是“另候通知”。我打算一直写到他们换一句话为止。"
     }
    ],
    "goto": "a2_01"
   },
   {
    "text": "回答礼拜三，尚未落下的流星不属于任何人",
    "if": "party.middlesday",
    "effects": [
     "approval middlesday +1"
    ],
    "result": [
     {
      "speaker": "礼拜三",
      "text": "不归谁。这一栏我的账上也有，只有一行。你这句话，我记在那一行里了。"
     }
    ],
    "goto": "a2_01"
   },
   {
    "text": "问娜尔雯托丽丝那年数了多少",
    "if": "party.narwen",
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     {
      "speaker": "娜尔雯",
      "text": "她没报数。她只说，数它的人比它落得还快。我那时候才二十出头，没听懂。现在我也不敢说听懂了。"
     }
    ],
    "goto": "a2_01"
   },
   {
    "text": "一直数到天亮",
    "effects": [
     "rest short"
    ],
    "result": "后半夜流星落得稀了，{?party.guilhem:吉列姆第一个睡着了，杯子还攥在手里，杯里装的是白水。|船上的人一个接一个都睡了。}你一直数到天边发白，才把数报给了记历书的人。",
    "goto": "a2_01"
   }
  ]
 }
};
