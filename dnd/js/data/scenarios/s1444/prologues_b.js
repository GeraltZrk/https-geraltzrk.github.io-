// s1444 / prologues_b.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "p_grudge_01": {
  "id": "p_grudge_01",
  "title": "巴尔加尔盖的城",
  "chapter": "序章 · 负怨者兵团",
  "art": "ev_far_and_wide",
  "loc": "南卡斯托纳斯",
  "date": "1444年奈拉月11日午后",
  "text": [
   "你效力的矮人兵团叫负怨者。兵团逐笔记录血债，确认仇人身死才肯销账。1424 年玛瑙之门那一笔，债主们记在绿潮大酋长科尔古斯·杜坎森名下。半个时辰前有人报信，他和杀他的红发女人一同倒在了下城。",
   "兵团销账，必须有人亲眼验过遗体。你得穿过南城去下城。眼前这座石城是矮人巴尔加尔为人类建的，从河边层层升到山顶。峭壁区的五层楼把街道遮得终日不见太阳。",
   "你边走边替两侧的墙估价。矮人砌的石缝连指甲都塞不进，重砌一丈要四百金冠。人类后来补的那段，灰浆早已松了，白送给你还嫌占地。",
   "同在兵团里的布罗克扛着铲子跟在你身后。营里也发过一把，他掂掂分量便还回去了。这把是他从家里带来的。",
   {
    "speaker": "布罗克",
    "text": "人类做的铲子太轻。你等着看，没挖几下，刃就该卷了。"
   },
   "排水口没了盖板，脚下传来水声。地下通道也是巴尔加尔挖的，从来没人画出过全图。循水流找闸门，倒是能摸清通道大致的走向。",
   {
    "speaker": "布罗克",
    "text": "这里的矮人排水口每四十步一个，都通往银瀑。下城的人喊它粪瀑，倒也贴切。往后人类补修的那段，每三十步一个，还没修直。"
   }
  ],
  "first": [
   "codex greentide"
  ],
  "choices": [
   {
    "text": "蹲下辨听水流的方向",
    "tag": "矮人",
    "if": "is.dwarf",
    "effects": [
     "flag knows_underpass"
    ],
    "result": "你蹲下将手贴在沟沿，听出水往东北流。三个水口汇入一条干渠，尽头该有水闸。这是矮人用了两千年的修法。",
    "goto": "p_grudge_02"
   },
   {
    "text": "沿水声寻找水闸",
    "if": "!is.dwarf",
    "check": {
     "skill": "history",
     "alt": [
      "investigation"
     ],
     "dc": 10
    },
    "ok": {
     "text": "三条水路在东北汇成一条。按矮人的造法，合流处一定有闸，你记住了它的方位。",
     "effects": [
      "flag knows_underpass"
     ],
     "goto": "p_grudge_02"
    },
    "fail": {
     "text": [
      "你伸手探进沟里。水流的方向没摸准，手里倒碰到了一只耗子。",
      {
       "speaker": "布罗克",
       "text": "问错人了。我会挖坑，这修沟的活我可没学过。"
      }
     ],
     "effects": [
      "hp -2"
     ],
     "goto": "p_grudge_02"
    }
   },
   {
    "text": "到排水口里查看",
    "tag": "小个子",
    "if": "is.small",
    "effects": [
     "flag knows_underpass"
    ],
    "result": "你独自爬进排水沟，前行二十步便遇见铁闸，闸轮比你整个人还大。等你退回街上，布罗克闻了闻，悄悄向旁边让出三步。",
    "goto": "p_grudge_02"
   },
   {
    "text": "请布罗克解释玛瑙之门的血债",
    "once": true,
    "effects": [
     "flag p_grudge_carts"
    ],
    "result": [
     "玛瑙之门被围九年，直到 1424 年才陷落。兽人用车装上山堡中死去的矮人，逼活着的俘虏拉着，逐镇示众。他们给下一座镇子带去的口信是：“这只是开头。”",
     {
      "speaker": "布罗克",
      "text": "那年我叔去玛瑙之门收货款。他在第三辆车上。拉车的人认出了他穿的靴子。"
     },
     {
      "speaker": "布罗克",
      "text": "所以后来我出门，总随身带自己的铲子。"
     }
    ]
   },
   {
    "text": "抄近路，抢在各营前下坡",
    "effects": [
     "flag p_grudge_early"
    ],
    "result": "你们抄陡峭的石阶下城。一路上，布罗克肩头的铲子不时磕着石面。",
    "goto": "p_grudge_02"
   }
  ]
 },
 "p_grudge_02": {
  "id": "p_grudge_02",
  "title": "龙炉的渣",
  "art": "ev_forge",
  "loc": "南卡斯托纳斯 · 龙炉",
  "text": [
   "南城最高处的石龙头就是龙炉，炉底直通地火。巴尔加尔建城时，是照着矮人堡的熔炉造它的。",
   "如今龙头塌了半边。绿潮进城那年，炉匠们不想让炉子落到兽人手里，自己把炉芯砸了。炉渣从山顶一直淌到院墙根，凉了快二十年，上面都长了草。",
   "铁锤兵团比你们先到了一步。这是另一支矮人兵团，七八个人正在渣里刨铁板，已经码了半车。下坡的近路要从这院子里穿过去，路当中横着一根撬棍。",
   {
    "speaker": "布罗克",
    "text": "拿人类打的铲子刨巴尔加尔的炉子，亏你们干得出来。"
   },
   {
    "speaker": "铁锤兵团的工头",
    "text": "先到先得。我们队长是巴尔加尔的后人，这堆渣该归谁，你自己算。红宝石领来的，绕路走吧。"
   },
   {
    "if": "is.god",
    "text": "工头说完这话，自己倒退后半步。他低头看了看脚，不明白它怎么就退了，又站了回来。"
   }
  ],
  "choices": [
   {
    "text": "举账页主张炉子归负怨者兵团管",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "is.dwarf",
       "n": 1,
       "why": "说的是矮人话"
      },
      {
       "if": "flag.p_grudge_early",
       "n": 1,
       "why": "到得早，他们的人还没到齐"
      },
      {
       "if": "rep.companies >= 3",
       "n": 1,
       "why": "冒险团里有人替你们说过话"
      }
     ]
    },
    "ok": {
     "text": [
      "你把账页摊在他那块铁板上，跟他讲道理。巴尔加尔是玛瑙之门出来的，玛瑙之门的账如今都在负怨者兵团手里，所以这堆渣里出去的每一块铁，都得过秤、记数。工头盯着那行字看了半天。",
      {
       "speaker": "铁锤兵团的工头",
       "text": "行，过秤就过秤，秤你们出。"
      }
     ],
     "effects": [
      "flag p_grudge_hammers",
      "rep companies +1"
     ],
     "goto": "p_grudge_03"
    },
    "fail": {
     "text": [
      {
       "speaker": "铁锤兵团的工头",
       "text": "不就是一张纸。"
      },
      "他把账页从铁板上拂了下去。布罗克的铲子已经举起来了。"
     ],
     "combat": {
      "title": "龙炉的院子",
      "intro": "工头把撬棍戳进矿渣。两个刨渣工放下铲子，往手心啐了口唾沫。",
      "enemies": [
       {
        "id": "thug",
        "n": 2,
        "name": "铁锤兵团的刨渣工"
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "布罗克"
       }
      ],
      "specials": [
       {
        "id": "cart",
        "name": "踹掉手推车的垫石",
        "desc": "半车铁板停在渣坡上方。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "垫石一松，半车铁板顺着渣坡哗啦啦滑了下去，拦腰撞上了那两位。",
         "dmgAll": "2d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "垫石纹丝没动，倒把你的脚趾头踢疼了。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "ash",
        "name": "扬一铲炉灰",
        "desc": "矿灰已经冷了近二十年，扬起来仍会遮眼。成功时，所有敌人陷入「目盲」，持续 1 回合。",
        "check": {
         "skill": "sleight",
         "alt": [
          "acrobatics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一铲灰扬了出去，两个人捂着眼睛直骂。",
         "applyAll": {
          "cond": "blinded",
          "turns": 1
         }
        },
        "fail": {
         "text": "偏偏风向不对，灰全吹回了你自己脸上。"
        }
       }
      ],
      "xp": 50,
      "win": {
       "effects": [
        "rep companies -1"
       ],
       "goto": "p_grudge_03"
      },
      "lose": {
       "effects": [
        "flag p_grudge_thrown"
       ],
       "goto": "p_grudge_03"
      },
      "fled": {
       "effects": [
        "flag p_grudge_thrown"
       ],
       "goto": "p_grudge_03"
      }
     }
    }
   },
   {
    "text": "以兵团名义警告挡路者将被记账",
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "mods": [
      {
       "if": "flag.p_grudge_early",
       "n": 1,
       "why": "到得早，他们的人还没到齐"
      }
     ]
    },
    "ok": {
     "text": [
      "你告诉他，在负怨者兵团的账本上，拦路的要另记一条，一直记到孙子辈。工头骂了一句，把撬棍挪开了，又从围裙兜里数出八个金冠，拍在你手上。",
      {
       "speaker": "铁锤兵团的工头",
       "text": "红宝石领的讨债鬼！拿去喝酒，别往本子上记了。"
      }
     ],
     "effects": [
      "gold +8"
     ],
     "goto": "p_grudge_03"
    },
    "fail": {
     "text": [
      {
       "speaker": "铁锤兵团的工头",
       "text": "记吧。我孙子还没生呢，你先记我好了。"
      },
      "说完他朝身后招招手。"
     ],
     "combat": {
      "title": "龙炉的院子",
      "intro": "工头把撬棍戳进矿渣。两个刨渣工放下铲子，往手心啐了口唾沫。",
      "enemies": [
       {
        "id": "thug",
        "n": 2,
        "name": "铁锤兵团的刨渣工"
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "布罗克"
       }
      ],
      "specials": [
       {
        "id": "cart",
        "name": "踹掉手推车的垫石",
        "desc": "半车铁板停在渣坡上方。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "垫石一松，半车铁板顺着渣坡哗啦啦滑了下去，拦腰撞上了那两位。",
         "dmgAll": "2d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "垫石纹丝没动，倒把你的脚趾头踢疼了。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "ash",
        "name": "扬一铲炉灰",
        "desc": "矿灰已经冷了近二十年，扬起来仍会遮眼。成功时，所有敌人陷入「目盲」，持续 1 回合。",
        "check": {
         "skill": "sleight",
         "alt": [
          "acrobatics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一铲灰扬了出去，两个人捂着眼睛直骂。",
         "applyAll": {
          "cond": "blinded",
          "turns": 1
         }
        },
        "fail": {
         "text": "偏偏风向不对，灰全吹回了你自己脸上。"
        }
       }
      ],
      "xp": 50,
      "win": {
       "effects": [
        "rep companies -1"
       ],
       "goto": "p_grudge_03"
      },
      "lose": {
       "effects": [
        "flag p_grudge_thrown"
       ],
       "goto": "p_grudge_03"
      },
      "fled": {
       "effects": [
        "flag p_grudge_thrown"
       ],
       "goto": "p_grudge_03"
      }
     }
    }
   },
   {
    "text": "赌五金冠，先撬起板的人处置渣堆",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "check": {
     "skill": "athletics",
     "dc": 12
    },
    "ok": {
     "text": "那块铁板足有一扇门那么大，是你先撬起来的。矮人认赌服输，工头把撬棍从路上拿开，说这堆渣怎么办听你的。",
     "effects": [
      "flag p_grudge_hammers"
     ],
     "goto": "p_grudge_03"
    },
    "fail": {
     "text": "是他先撬起来的。你数了五个金冠给他，他一个一个咬过，让开了路，别的事就不提了。",
     "effects": [
      "gold -5"
     ],
     "goto": "p_grudge_03"
    }
   },
   {
    "text": "趁争执拿走未熔的炉铭",
    "tag": "游荡者",
    "if": "class == 'rogue'",
    "once": true,
    "effects": [
     "gold +15",
     "flag p_grudge_plate"
    ],
    "result": "手推车最下面压着一块巴掌大的铜板，是龙炉的炉铭，上面的字还是全的。你把它顺进了袖子，谁也没发现少了一块。这是巴尔加尔亲手凿的，拿到红宝石领的铜匠那里能卖十五个金冠。"
   },
   {
    "text": "绕到渣堆背面下坡，不与他们争",
    "effects": [
     "rep companies -1"
    ],
    "result": [
     "你们绕了小半个山头才下去。那半车铁板到底没过秤就被拉走了，布罗克一路上回头看一眼，骂一句。",
     {
      "speaker": "布罗克",
      "text": "半车，少说三十块板，一块都没过秤！回了营，这笔我要记在你名下。"
     }
    ],
    "goto": "p_grudge_03"
   }
  ]
 },
 "p_grudge_03": {
  "id": "p_grudge_03",
  "title": "炉子还点得着吗",
  "loc": "龙炉 · 渣堆下面",
  "text": [
   {
    "if": "flag.p_grudge_thrown",
    "text": "你被两个人抬着扔出了院墙，正落在渣堆下坡的那一头。布罗克跟着也翻出来，铲子倒没丢。"
   },
   "三声敲击，停一下，又是三声。布罗克最先听见。你们循声找到一根烧黑的斜梁。下面压着个系皮围裙的老矮人，半边胡子已经烧光。",
   "他脚腕上套着铁箍，链子另一头锁在渣里的铁环上。兽人把他拴在这里拴了十八年，逼他把龙炉重新点起来。今天午后监工听见撤退的喊声就跑了。紧接着山下的炮一响，这根梁就塌了下来。",
   {
    "speaker": "老炉匠",
    "text": "别刨了。梁压着的地方我自己摸过，腰往下早就没知觉了。"
   },
   {
    "speaker": "老炉匠",
    "text": "十八年，前后换了六个监工，个个都问我炉子什么时候能点着。我每次都说快了，说到最后，连我自己也拿不准了。"
   },
   {
    "speaker": "老炉匠",
    "text": "你是兵团的人，懂行。你跟我说句实话，这炉子到底还点不点得着？"
   },
   {
    "if": "flag.p_grudge_hammers",
    "text": "铁锤兵团的人也跟过来了，围着站成半圈。工头把帽子摘了下来。"
   }
  ],
  "first": [
   "codex balgar"
  ],
  "choices": [
   {
    "text": "回答换炉膛后仍可点火",
    "effects": [
     "var lies +1",
     "flag p_lied"
    ],
    "result": [
     {
      "speaker": "老炉匠",
      "text": "换个炉膛。我跟第三个监工也是这么说的，一个字都不差。"
     },
     "他听出来你是在哄他，笑了一下，没有再问，手从梁上松开了。布罗克把铲子往渣里一插，看都没看你。"
    ],
    "goto": "p_grudge_04"
   },
   {
    "text": "指出炉芯已裂，无法再点火",
    "effects": [
     "flag p_truth"
    ],
    "result": [
     {
      "speaker": "老炉匠",
      "text": "从龙嘴往下数第三道箍，当年那一锤是我抡的。"
     },
     {
      "speaker": "老炉匠",
      "text": "这么说是砸透了。十八年了，我就怕当年没砸透，让兽人把它修好。"
     },
     "说完，他的手从梁上松开了。"
    ],
    "goto": "p_grudge_04"
   },
   {
    "text": "先搬开横梁再回答",
    "check": {
     "skill": "athletics",
     "dc": 12,
     "adv": "flag.p_grudge_hammers"
    },
    "ok": {
     "text": [
      "梁总算抬起来一拃，布罗克赶紧把铲子垫了进去。{?flag.p_grudge_hammers:铁锤兵团的人抓着他的围裙把他拖了出来。|你抓着他的围裙把他拖了出来。}到了渣堆外面，他又多活了一顿饭的时间。",
      {
       "speaker": "老炉匠",
       "text": "炉铭上只有一句话，是巴尔加尔自己凿的。火是跟山借的，手艺是自己的。炉子毁了，山还在。"
      }
     ],
     "effects": [
      "flag p_truth",
      "flag p_grudge_motto"
     ],
     "goto": "p_grudge_04"
    },
    "fail": {
     "text": "梁才起来半寸就又落了回去，压得比刚才还实，烧黑的木头蹭掉了你手掌上一层皮。他张了张嘴，有句话到底没能说出来。",
     "effects": [
      "flag p_truth",
      "hp -2"
     ],
     "goto": "p_grudge_04"
    }
   },
   {
    "text": "看清炉渣来处再作答",
    "tag": "匠人",
    "if": "class == 'artificer' || bg in ['artisan', 'miner']",
    "effects": [
     "flag p_truth",
     "flag p_grudge_motto"
    ],
    "result": [
     "炉渣是从龙嘴往下第三道箍那里淌出来的，只有一条线。你照实告诉他，这座炉子是废了，炉芯就裂在第三道箍上。可山下的地火还在。",
     {
      "speaker": "老炉匠",
      "text": "第三道箍，你还真看得出来。那我告诉你炉铭上凿的是什么。火是跟山借的，手艺是自己的。"
     }
    ],
    "goto": "p_grudge_04"
   },
   {
    "text": "把藏在袖中的炉铭交给他",
    "tag": "游荡者",
    "if": "flag.p_grudge_plate",
    "effects": [
     "gold -15",
     "flag p_truth",
     "flag p_grudge_motto"
    ],
    "result": [
     "他拿拇指把那行字从头摸到尾。他问的话你没有答，他也不再问了。",
     {
      "speaker": "老炉匠",
      "text": "火是跟山借的，手艺是自己的。这东西你是从哪里撬来的，我不问了，就让它跟我走吧。"
     }
    ],
    "goto": "p_grudge_04"
   },
   {
    "text": "伸手按住他的腰",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine",
     "rep companies -1"
    ],
    "result": [
     "那根梁自己挪开了。他的脚趾先动了一下，接着是膝盖，脚上的铁箍也自己开了。",
     "才一炷香的时间，半条街的伤兵都抬到了渣堆下面，有铁锤兵团的，有边区的，还有叫不出营号的。人太多，你治不完，没轮上的那些人都记住了你的脸。有个抬担架的问你，下城还躺着两位，你去不去救？",
     {
      "speaker": "布罗克",
      "text": "兵团的账本上可没有这一栏。回了营我得去问问，该把你记在哪一页。"
     },
     "老炉匠在渣堆背阴的地方垒了三块石头，说这就算是供你的神龛了。后来他跟着板车走了三天，怎么赶都赶不走，见人就讲这件事。"
    ],
    "goto": "p_grudge_04"
   }
  ]
 },
 "p_grudge_04": {
  "id": "p_grudge_04",
  "title": "验明正身",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月11日傍晚",
  "text": [
   {
    "if": "!flag.god_shrine",
    "text": "布罗克用自己的铲子在渣堆背阴处挖了个坑，把老炉匠埋了。那条链子他一铲剁断了，没让老人带着它下葬。"
   },
   "旧集市旁的空地上，科琳和杜坎森相隔七八步，仍躺在倒下的位置。一名半身人守着科琳，士兵在外面围成一圈。她上一次死后三个时辰就醒了，眼下人人都在默数时辰。",
   "杜坎森这边没人围着。他仰面躺着，比你估的还大一圈，满身是祭礼留下的疤，两只拳头攥得紧紧的。有个兽人女人蹲在他右边，拿一根打了结的皮绳量他的手指骨节。没人拦她，科琳的队伍里本来就有兽人。谁也说不准她是不是自己人。",
   "你也在尸首旁边蹲了下来。",
   "账页背面得添一行字，写明验过了，是他本人。照兵团的规矩，这行字得有凭据。兽人都说他掌心有一块烙印，叫杜坎印记，是从山下带出来的。你得亲眼看见这块印才算数。"
  ],
  "choices": [
   {
    "text": "问兽人丈量尸体的用意",
    "once": true,
    "effects": [
     "flag p_grudge_asked"
    ],
    "result": [
     {
      "speaker": "量指节的兽人",
      "text": "算这副骨头要磨几天。磨成了粉，就没人能再把他拉起来。"
     },
     "她头也没抬，又量了两节，才添了一句。",
     {
      "speaker": "量指节的兽人",
      "text": "你要看他的手心，别硬掰，从小指往回推。掰断了的骨头不好磨。"
     }
    ]
   },
   {
    "text": "打开他的右手查找印记",
    "check": {
     "skill": "medicine",
     "alt": [
      "investigation"
     ],
     "dc": 11,
     "adv": "flag.p_grudge_asked"
    },
    "ok": {
     "text": "你照她说的，从小指一节一节往回推。掌心里果然有一块旧烙疤，铜钱大小，烙的是一只捆着链子的拳头。你在账页背面写下一行字，验明正身，掌心有印。",
     "effects": [
      "flag body_verified"
     ],
     "goto": "p_grudge_05"
    },
    "fail": {
     "text": "他的食指咔地响了一声，拳头还是攥着不放。那个兽人抬头看了你一眼。你没办法，只好写上，据在场者称，是他本人。",
     "effects": [
      "flag p_grudge_broke"
     ],
     "goto": "p_grudge_05"
    }
   },
   {
    "text": "检查遗体是否被人动过",
    "tag": "施法者",
    "if": "is.caster",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 12
    },
    "ok": {
     "text": "他耳朵后面有一道新画的粉笔记号，一个圈套着一横。只有收死人的法师验货的时候才画这个，意思是这一具已经有人订下了。你没去擦它，只是记了下来。",
     "effects": [
      "flag p_grudge_marked"
     ]
    },
    "fail": {
     "text": "你刚凑到他耳边，一根矛杆就敲在了你肩上。边区兵当你是要割什么东西。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "要他自己说出名字",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag body_verified",
     "flag god_revealed",
     "flag ushka_wary"
    ],
    "result": [
     "你叫了他一声。尸首的嘴竟然动了，喉咙里滚出来几个字，科尔古斯，杜坎之子。说完嘴又合上了。",
     {
      "speaker": "量指节的兽人",
      "text": "你再来一次，我就先磨你。"
     },
     "她的手已经放在了锤柄上，空地那头围着的兵也站起来一半。你在账页背面写下，验明正身，本人自述。"
    ],
    "goto": "p_grudge_05"
   },
   {
    "text": "不碰遗体，按旁人证词记录",
    "effects": [
     "flag p_grudge_hearsay"
    ],
    "result": "你问了三个边区兵和一个科琳塔尔的弩手，四个人都说是他。可谁也没走到五步以内去看过。你只好写上据在场者称。",
    "goto": "p_grudge_05"
   }
  ]
 },
 "p_grudge_05": {
  "id": "p_grudge_05",
  "title": "头砍了不好认",
  "loc": "下卡斯托纳斯 · 空地旁边",
  "date": "1444年奈拉月11日夜",
  "text": [
   "人们在空地另一头围着火，等科琳醒来。六名边区兵却带着斧头和长杆来到你这一边，要取走杜坎森的头。",
   {
    "speaker": "边区军士",
    "text": "让开！这颗头天亮以前要挂上城门。"
   },
   "你说头砍下来就不好认了，兵团的账也就划不成了。他问什么账，你把账页举给他看。他不识字，可“欠债”两个字他听得懂。",
   {
    "speaker": "边区军士",
    "text": "去年在血腐阶梯，加韦德的乔恩王子被人从马上拽下来，就是这个兽人亲手砍的头。一颗头换一颗头，这也是账吧？"
   },
   {
    "if": "flag.god_revealed",
    "text": "军士认得你，下午的事早就传开了。他把斧子换到左手，右手想在胸口画个祈祷的手势，画了一半又停住了。他拿不准该向哪一位神画。"
   },
   {
    "if": "flag.god_revealed",
    "speaker": "边区军士",
    "text": "这颗头我们照砍不误。你要是想拦，就显个灵给我们看。"
   },
   {
    "if": "is.god && !flag.god_revealed",
    "text": "军士说话时一直不敢看你的眼睛。他身后那五个人里，有两个不知不觉退到了后面。"
   }
  ],
  "choices": [
   {
    "text": "指出砍头后将难以确认身份",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "flag.body_verified",
       "n": 2,
       "why": "你验过印，说得出凭据"
      },
      {
       "if": "flag.p_grudge_marked",
       "n": 2,
       "why": "有人给这具尸首画了记号"
      },
      {
       "if": "flag.p_grudge_carts",
       "n": 1,
       "why": "玛瑙之门的车你说得上来"
      }
     ]
    },
    "ok": {
     "text": "你告诉他，头挂上去三天就烂了，到时候谁都能说那不是杜坎森。真到了那一天，满东坎诺的兽人都会说他没死，只是回山里去了。军士想想，把斧子收了起来。",
     "goto": "p_grudge_06"
    },
    "fail": {
     "text": [
      "他听完，说你讲得有道理，可还是割走了一只右耳。",
      {
       "speaker": "边区军士",
       "text": "少只耳朵，不耽误你认人。"
      }
     ],
     "effects": [
      "rep companies -1",
      "flag p_grudge_ear"
     ],
     "goto": "p_grudge_06"
    }
   },
   {
    "text": "用兵团欠账警告干扰验尸的人",
    "check": {
     "skill": "intimidation",
     "dc": 13
    },
    "ok": {
     "text": "你把账页翻到背面，问他叫什么，是哪个营的，祖上是哪个村的。他报到一半就停住了，退后半步，说红宝石领的讨债鬼惹不起。",
     "goto": "p_grudge_06"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区军士",
       "text": "记吧！我叫什么你听好了，一个字都别写错。"
      },
      "他一边报名字，一边割走了一只右耳。"
     ],
     "effects": [
      "rep companies -1",
      "flag p_grudge_ear"
     ],
     "goto": "p_grudge_06"
    }
   },
   {
    "text": "查明他取头要向谁复命",
    "check": {
     "skill": "insight",
     "dc": 12
    },
    "ok": {
     "text": "他回头看了两次身后那五个人。你看出来了，他要的只是给营里一个交代。你把账页翻到背面，请他按个手印，上面写的是某营某人亲眼见证，是杜坎森本人。他用力按了手印，带着人走了。",
     "effects": [
      "rep companies +1"
     ],
     "goto": "p_grudge_06"
    },
    "fail": {
     "text": [
      "你盯着他看了很久，没看出什么名堂，倒把他看烦了。",
      {
       "speaker": "边区军士",
       "text": "看什么看！"
      },
      "他割下一只右耳，拿布包好，揣进了怀里。"
     ],
     "effects": [
      "rep companies -1",
      "flag p_grudge_ear"
     ],
     "goto": "p_grudge_06"
    }
   },
   {
    "text": "主张由杜坎森的儿子决定",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "军士骂你替兽人讲名分，可骂完了并没有动手。他自己也有儿子，不想哪天有人这么处置他的尸首。你说的这句话，当天晚上就传到了没撤干净的兽人耳朵里。",
     "effects": [
      "rep clans +1"
     ],
     "goto": "p_grudge_06"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区军士",
       "text": "他儿子要是来了，就一起挂上去。"
      },
      "斧子没砍在脖子上，只割走了一只右耳。"
     ],
     "effects": [
      "rep companies -1",
      "flag p_grudge_ear"
     ],
     "goto": "p_grudge_06"
    }
   },
   {
    "text": "主张请科琳的部下决定",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "军士回头看了一眼那圈火。火圈里跪着科琳的团长，那个半兽人，一下午都没人敢过去跟他说话。军士把斧子夹回了胳膊下面。",
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_grudge_06"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区军士",
       "text": "她不是还躺着嘛。等她起来了，我当面还给她。"
      },
      "他割走了一只右耳，拿布包好，揣进了怀里。"
     ],
     "effects": [
      "rep companies -1",
      "flag p_grudge_ear"
     ],
     "goto": "p_grudge_06"
    }
   },
   {
    "text": "要求各营等队长议定再动刀",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "空地当中，十几个队长正围着两只酒桶吵个不停。军士朝那边看看，他的队长也在里面，嗓门最大的那个就是。他啐了一口，站在那里等着。",
     "effects": [
      "rep companies +1"
     ],
     "goto": "p_grudge_06"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区军士",
       "text": "等他们吵完，这颗头都该长蘑菇了。"
      },
      "他割走了一只右耳，说是先收个定钱。"
     ],
     "effects": [
      "rep companies -1",
      "flag p_grudge_ear"
     ],
     "goto": "p_grudge_06"
    }
   },
   {
    "text": "付十金冠，请他等到天亮",
    "cost": {
     "gold": 10
    },
    "result": [
     "军士接过钱，分给了身后那五个人，一人两个，自己一个也没留。",
     {
      "speaker": "边区军士",
      "text": "行，等到天亮。天亮以后就得另算了。"
     }
    ],
    "goto": "p_grudge_06"
   }
  ]
 },
 "p_grudge_06": {
  "id": "p_grudge_06",
  "title": "上车",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "天亮了，火还烧着，科琳仍未醒来。没人提下葬，也没人肯先离开。",
   "各营的队长在空地当中拿两只酒桶架起一扇门板当桌子，吵到天亮只定下一件事，各营出一个人，把这场仗里没人认领的死人都收殓了。军令抄了一份，有人拿去钉在了万神道一座庙的门上。",
   "负怨者兵团出的人就是你。门板角上有人拿炭条写了你的名字和差事，{pc}，验明正身。{?flag.body_verified:他掌心那块印你是验过的，已经记在账页背面了。|可你那行字写的还是“据在场者称”。}{?flag.p_grudge_ear:尸首少了一只右耳，这个你也记下了，记在边区兵的名下。|}",
   {
    "if": "flag.p_grudge_motto",
    "text": "账页背面还有一行字是你自己添的，火是跟山借的，手艺是自己的。"
   },
   {
    "if": "flag.god_revealed",
    "text": "为了你到底算哪一营的，队长们又吵了一刻钟。有个随军祭司挤到桌边，问你是哪一位神的化身。倒没有人问你是不是神。"
   },
   {
    "if": "is.god",
    "text": "这一夜你没合过眼，也不觉得困。布罗克打了三次盹，每次醒过来都先看你一眼，再去看尸首。"
   },
   {
    "speaker": "布罗克",
    "text": "我回营交差去了，铲子留给你。用人类的那种铲子，挖一个兽人的坑得挖上半天。"
   },
   "运尸首的板车就停在咸鱼架子旁边，昨晚那个兽人女人已经在车上了。有人问她是哪个营的，她只报了个名字，说叫乌什卡。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "这副骨头粗，得磨上两天。"
   },
   {
    "if": "flag.ushka_wary",
    "text": "她说话时没看尸首，看的是你，右手一直搭在锤柄上。"
   },
   {
    "if": "party.ushka && flag.ushka_wary",
    "speaker": "乌什卡",
    "text": "不会死的我也见过。到头来，总得有人去把他放倒。"
   },
   "车边站着个提灯的男孩，十六七岁，身上的祭司袍子短了一截。天早就亮了，他却忘了把灯吹掉。",
   {
    "if": "flag.god_revealed",
    "text": "他昨晚就听说了，车上要来一位神。他把灯举高了一点，照了照你的脸。"
   },
   {
    "if": "flag.god_revealed",
    "speaker": "阿坦",
    "text": "那我先问您一句，王在哪里？"
   },
   {
    "if": "flag.god_revealed",
    "text": "他说的王，是众神之王卡斯特洛斯。你答不上来，他点点头，把灯放低了。"
   },
   {
    "speaker": "阿坦",
    "text": "军令钉在我的庙门上了。我叫阿坦，是守庙的。"
   },
   {
    "speaker": "阿坦",
    "text": "你们出城的时候，能不能顺路替我打听一件事？书上说，卡斯塔诺一有难，银龙就会来救。可这座城落在兽人手里二十年了，他一直没来。我想知道为什么？"
   }
  ],
  "first": [
   "level 2",
   "companion +ushka",
   "quest q_cart start",
   "quest q_dragon start",
   "codex standing_order",
   "codex truce_table",
   "rest short",
   "codex corin",
   "codex agrados",
   "quest q_o_grudge start",
   {
    "if": "flag.ushka_wary",
    "then": [
     "approval ushka -2"
    ]
   },
   {
    "if": "flag.p_grudge_broke",
    "then": [
     "approval ushka -1"
    ]
   },
   {
    "if": "flag.p_grudge_hearsay",
    "then": [
     "approval ushka +1"
    ]
   }
  ],
  "choices": [
   {
    "text": "应下男孩的托付，顺路打听",
    "effects": [
     "rep temples +1"
    ],
    "result": [
     {
      "speaker": "阿坦",
      "text": "问谁都行。问着了请告诉我，问不着也请告诉我。"
     }
    ],
    "goto": "a1_01"
   },
   {
    "text": "告诉他打听另收费",
    "effects": [
     "gold +2"
    ],
    "result": [
     "他从袖子里摸出两枚金冠，小心地递给你。",
     {
      "speaker": "阿坦",
      "text": "庙里只有这些了。不够的先欠着，你们兵团不是会记账吗？"
     }
    ],
    "goto": "a1_01"
   },
   {
    "text": "帮忙绑牢车上的遗体",
    "effects": [
     "approval ushka +1"
    ],
    "result": "乌什卡把皮绳的另一头扔给你。你们一起把尸首在车上捆牢了。",
    "goto": "a1_01"
   }
  ]
 },
 "p_tide_01": {
  "id": "p_tide_01",
  "title": "手背",
  "chapter": "序章 · 退潮的人",
  "art": "load_5",
  "loc": "下卡斯托纳斯 · 旧集市旁边",
  "date": "1444年奈拉月11日午后",
  "text": [
   "你随绿潮打到这里。去年在血腐阶梯，骑士从干河西岸冲下，光河床里就死了一万八千名兽人。酋长古拉德·碎心者当众顶撞大酋长杜坎森，次日便率全族往东南走了。",
   "今天是绿潮第二次受挫。杜坎森就倒在一条街外，晾咸鱼的一排架子遮住了你的视线。你没看见他怎么倒下，只听见对面先是寂静，随即有人高喊撤退。",
   {
    "if": "is.orc || is.halforc",
    "text": "三天前在矮人地道里，你的手还和洞壁一样黑。上到地面，皮肤开始发痒，一点点转绿。就在刚才对面安静的那一刻，痒停了。手背已经变绿，手指仍是黑的。"
   },
   {
    "if": "is.goblin",
    "text": "午后响起撤退的喊声，牵链的兽人撒手跑了，你终于挣脱铁链。你替地精书贩背过八年书箱。眼下书箱翻在街角，那本教你识字的缺页课本就躺在一地散书中。"
   },
   {
    "if": "!(is.orc || is.halforc || is.goblin)",
    "text": "午后有人撬开你颈上的铁箍，随即跑了。皮肤上留着一指宽的白印。它跟着你多少年，你就给这支军队当了多少年苦力。"
   },
   "撤退的喊声渐渐远去，一路向北。没有人留下来等你。"
  ],
  "first": [
   "codex greentide"
  ],
  "choices": [
   {
    "text": "爬上晾鱼架查看动静",
    "check": {
     "skill": "perception",
     "dc": 10
    },
    "ok": {
     "text": "杜坎森仰倒在咸鱼摊旁，剑还贯在身上。人类围着另一名倒地者，正是那个红发女人。再往南三条街，佐格和四名亲卫也都一动不动。嗜血者氏族失去了自己的酋长。",
     "effects": [
      "flag p_tide_saw_zog"
     ],
     "goto": "p_tide_02"
    },
    "fail": {
     "text": "咸鱼架轰然倒下。你和架上的鱼一同跌在石板路上，还没能看见街对面发生了什么。抬眼只剩浓烟。",
     "effects": [
      "hp -2"
     ],
     "goto": "p_tide_02"
    }
   },
   {
    "text": "回去捡起课本",
    "tag": "地精",
    "if": "is.goblin",
    "effects": [
     "item +scroll_magic_missile",
     "hp -2"
    ],
    "result": "你找到了课本。封皮多了个靴印，夹在里面的卷轴还在。弯腰捡书时，一块来路不明的石头砸中了你的背。",
    "goto": "p_tide_02"
   },
   {
    "text": "竖起衣领遮住箍印",
    "tag": "奴工",
    "if": "!is.greenskin",
    "effects": [
     "flag p_tide_hid"
    ],
    "result": "竖起衣领，能遮住大半圈铁箍印。从远处看，你像个跟军队搬东西的脚夫，哪边的人都有可能。",
    "goto": "p_tide_02"
   },
   {
    "text": "拿走死者的钱袋再跑",
    "effects": [
     "gold +4"
    ],
    "result": "袋口一开，里面是四枚金冠。",
    "goto": "p_tide_02"
   }
  ]
 },
 "p_tide_02": {
  "id": "p_tide_02",
  "title": "最后一个",
  "art": "ev_orc_with_axe",
  "loc": "下卡斯托纳斯 · 一条死巷",
  "text": [
   "你循着喊声追过两道弯，跑进一条死巷。三面石墙都有两人高。你爬不上去，喊声也辨不出了。",
   "巷口站着个嗜血者氏族的兽人，斧子扛在肩上。他听了听远处的喊声，看了你一眼，转身走了，没有等你。",
   "接着来的是两个人类兵，都穿着锁甲。",
   {
    "speaker": "抢功的兵",
    "text": "嘿，这里还有一个！"
   },
   {
    "speaker": "另一个兵",
    "text": "队长许了一桶酒，谁砍倒城里最后一个绿皮就归谁。这个归我，你上午那个不算。"
   },
   {
    "if": "!is.greenskin",
    "speaker": "抢功的兵",
    "text": "这个不是绿皮。可脖子上有箍印，是跟着他们走的，照样算数。"
   },
   {
    "if": "is.god",
    "text": "他们自己还没想明白是怎么回事，剑尖就先垂了下去。"
   },
   "墙根的门洞里站起来一个兽人老兵，左边的獠牙断了半截。他没去看那两个人，先看看你。",
   {
    "speaker": "马布格",
    "text": "就两个。你对付左边的，我对付右边的。要不你就把家伙扔了，挨两脚了事。怎么着我都行。"
   }
  ],
  "choices": [
   {
    "text": "和他并肩应战，你左他右",
    "combat": {
     "title": "死巷",
     "intro": "两面盾靠在一起，步步逼进窄巷。马布格拎起了墙边的斧头。",
     "enemies": [
      {
       "id": "man_at_arms",
       "n": 2,
       "name": "抢功的兵"
      }
     ],
     "allies": [
      {
       "id": "orc_raider",
       "name": "马布格"
      }
     ],
     "specials": [
      {
       "id": "shed",
       "name": "拽塌墙上的木棚",
       "desc": "石墙上的木棚由几根柱子支撑，搭得并不牢。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "柱子一歪，半条巷子的木板和瓦罐全砸在了那两面盾上。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "柱子比看上去结实，你没拽倒，还扭了手。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "horn",
       "name": "学一声回头的号",
       "desc": "用兽人语喊话，让巷口的人误以为大队已经折返。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "deception",
        "alt": [
         "performance",
         "intimidation"
        ],
        "dc": 11
       },
       "success": {
        "text": "两个兵一齐回头看巷口。巷口没有人，可他们的脚已经往后挪了。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你的嗓子喊劈了，其中一个兵还笑出了声。"
       }
      }
     ],
     "fleeable": false,
     "xp": 50,
     "win": {
      "goto": "p_tide_03"
     },
     "lose": {
      "effects": [
       "flag p_surrendered"
      ],
      "goto": "p_tide_03"
     }
    }
   },
   {
    "text": "放下兵器",
    "effects": [
     "flag p_surrendered",
     "hp -3"
    ],
    "result": [
     "你把家伙扔在了地上，肋上还是挨了一脚。马布格把斧子靠在墙边，自己蹲了下去，两只手放在膝盖上。",
     {
      "speaker": "另一个兵",
      "text": "这下是最后两个了，酒得分着喝了。"
     }
    ],
    "goto": "p_tide_03"
   },
   {
    "text": "质问他们这桶酒值不值得动手",
    "check": {
     "skill": "intimidation",
     "dc": 11,
     "mods": [
      {
       "if": "class == 'barbarian'",
       "n": 1,
       "why": "你吼惯了"
      },
      {
       "if": "is.small",
       "n": -1,
       "why": "个头不够"
      }
     ]
    },
    "ok": {
     "text": [
      "你吼的是冲锋的号子。两个人各退了一步，你看看我，我看看你。",
      {
       "speaker": "另一个兵",
       "text": "要不……上午那个算最后一个也行。"
      }
     ],
     "goto": "p_tide_03"
    },
    "fail": {
     "text": "你吼到一半就呛着了，两面盾立刻并到了一起。",
     "combat": {
      "title": "死巷",
      "intro": "两面盾靠在一起，步步逼进窄巷。马布格拎起了墙边的斧头。",
      "enemies": [
       {
        "id": "man_at_arms",
        "n": 2,
        "name": "抢功的兵"
       }
      ],
      "allies": [
       {
        "id": "orc_raider",
        "name": "马布格"
       }
      ],
      "specials": [
       {
        "id": "shed",
        "name": "拽塌墙上的木棚",
        "desc": "石墙上的木棚由几根柱子支撑，搭得并不牢。成功时，所有敌人受到 2d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "柱子一歪，半条巷子的木板和瓦罐全砸在了那两面盾上。",
         "dmgAll": "2d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "柱子比看上去结实，你没拽倒，还扭了手。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "horn",
        "name": "学一声回头的号",
        "desc": "用兽人语喊话，让巷口的人误以为大队已经折返。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
        "check": {
         "skill": "deception",
         "alt": [
          "performance",
          "intimidation"
         ],
         "dc": 11
        },
        "success": {
         "text": "两个兵一齐回头看巷口。巷口没有人，可他们的脚已经往后挪了。",
         "applyAll": {
          "cond": "frightened",
          "turns": 2
         }
        },
        "fail": {
         "text": "你的嗓子喊劈了，其中一个兵还笑出了声。"
        }
       }
      ],
      "fleeable": false,
      "xp": 50,
      "win": {
       "goto": "p_tide_03"
      },
      "lose": {
       "effects": [
        "flag p_surrendered"
       ],
       "goto": "p_tide_03"
      }
     }
    }
   },
   {
    "text": "举手让指尖亮起法术",
    "tag": "施法者",
    "if": "is.caster",
    "effects": [
     "rep companies -1"
    ],
    "result": [
     "一道光蹿起来一尺高。两个兵扭头就跑，一边跑一边喊绿潮里有萨满，到天黑时，半个营都知道了。",
     {
      "speaker": "马布格",
      "text": "是个把戏，不过管用。"
     }
    ],
    "goto": "p_tide_03"
   }
  ]
 },
 "p_tide_03": {
  "id": "p_tide_03",
  "title": "他还在打吗",
  "loc": "下卡斯托纳斯 · 空地北边的墙根",
  "text": [
   "{?flag.p_surrendered:他们把你们俩赶到了空地北边的墙根下，跟别的没撤走的兽人蹲成一排。|你们贴着墙根往北摸，摸到空地北边就过不去了。}",
   {
    "if": "is.orc || is.halforc",
    "text": "墙根下坐着一个你认得的人，跟你是同一个氏族的，去年在血腐阶梯还替你扛过东西。他胸口中了三颗铅弹，是侏儒的火枪打的。"
   },
   {
    "if": "!(is.orc || is.halforc)",
    "text": "墙根下坐着一个你认得的兽人，是拴你的那个氏族里的。这些年他踢过你，可也分过你半块饼。他胸口中了三颗铅弹，是侏儒的火枪打的。"
   },
   "他的目光还能追着人走，却听不到撤退的喊声。他想知道，是自己聋了，还是大家已经不喊了。",
   {
    "speaker": "垂死的同族",
    "text": "那边没动静了。杜坎森是不是还在打？"
   },
   {
    "speaker": "垂死的同族",
    "text": "他要是还在打，我就不算掉队。"
   },
   "{?flag.p_surrendered:马布格蹲在一边，两只手还放在膝盖上，不朝你看。|马布格蹲在一边试着斧刃，不朝你看。}"
  ],
  "choices": [
   {
    "text": "告诉他战斗还在继续，就要赢了",
    "effects": [
     "var lies +1",
     "flag p_lied"
    ],
    "result": [
     {
      "speaker": "垂死的同族",
      "text": "那就行。我很快就回去，碗给我留着。"
     },
     "他是咧着嘴死的。马布格等到他不动了，才朝你看了一眼，脸色沉了下来。"
    ],
    "goto": "p_tide_04"
   },
   {
    "text": "告诉他杜坎森已死，你的手印不再变色",
    "if": "is.orc || is.halforc",
    "effects": [
     "flag p_truth"
    ],
    "result": [
     "你告诉他杜坎森死了，就死在咸鱼摊旁边，从那一刻起。你手上的颜色就不再变了。{?flag.p_tide_saw_zog:你又说，佐格也死了。|}他没看你的手，低头看看他自己的手。",
     {
      "speaker": "垂死的同族",
      "text": "那我挨的这一下，算是替谁挨的？"
     },
     {
      "speaker": "马布格",
      "text": "算你自己的。"
     }
    ],
    "goto": "p_tide_04"
   },
   {
    "text": "告诉他杜坎森已死，奴工的锁链已经松开",
    "if": "!(is.orc || is.halforc)",
    "effects": [
     "flag p_truth"
    ],
    "result": [
     "他盯着你空了的脖子看了很久。{?flag.p_tide_saw_zog:你又说，佐格也死了。|}",
     {
      "speaker": "垂死的同族",
      "text": "连你的链子都松了，那就是真的了。"
     },
     {
      "speaker": "垂死的同族",
      "text": "那我挨的这一下，算是替谁挨的？"
     },
     {
      "speaker": "马布格",
      "text": "算你自己的。"
     }
    ],
    "goto": "p_tide_04"
   },
   {
    "text": "不出声，给他看你的手背",
    "if": "is.orc || is.halforc",
    "effects": [
     "flag p_truth"
    ],
    "result": "他盯着你的手指看。黑的地方还是黑的，绿的地方还是绿的，中间那道线一动不动。他看明白了，闭上了眼睛。",
    "goto": "p_tide_04"
   },
   {
    "text": "把断链放进他手里",
    "if": "!(is.orc || is.halforc)",
    "effects": [
     "flag p_truth"
    ],
    "result": [
     "他拿拇指去摸断口，断口是新的。",
     {
      "speaker": "垂死的同族",
      "text": "这是谁砸开的？"
     },
     "你说没人砸，是它自己松开的。他攥着那节链子咽了气。你把他的手指掰开，把链子拿了回来。"
    ],
    "goto": "p_tide_04"
   },
   {
    "text": "把斧柄递回他手中",
    "tag": "战士系",
    "if": "is.martial",
    "effects": [
     "flag p_truth",
     "rep clans +1"
    ],
    "result": [
     "斧子就压在他自己腿下面。你把它抽出来，把他的手指一根一根合在斧柄上。他没有再问什么。",
     {
      "speaker": "马布格",
      "text": "手里拿着家伙死的，就不算掉队。"
     },
     "这件事，马布格后来在俘虏队里讲过不止一回。"
    ],
    "goto": "p_tide_04"
   },
   {
    "text": "把手放在他胸口",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine",
     "rep companies -1"
    ],
    "result": [
     "三颗铅弹从他胸口里退了出来，掉在石板上。他坐直了身子，第一件事就是找自己的斧子。",
     "才一炷香的时间，墙根下爬得动的全都爬过来了，可人太多，你治不完。有个抬担架的人类兵站在十步开外看了很久，问你，空地上那两位，你怎么不去救？",
     {
      "speaker": "马布格",
      "text": "你治不完的。没治上的那些，到明天就该恨你了。"
     },
     "第一个让你救活的那个兽人，在墙根下垒了三块石头，在石头上放了一颗铅弹，算是供你的。后来他跟着板车走了三天，怎么赶都赶不走，逢人就讲这件事。"
    ],
    "goto": "p_tide_04"
   }
  ]
 },
 "p_tide_04": {
  "id": "p_tide_04",
  "title": "算俘虏还是算尸首",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月11日傍晚",
  "text": [
   "{?flag.p_surrendered:押你们的人换成了边区兵。|你们还没走出两条街，就被边区兵给堵住了。}一根矛尖顶在了你后腰上。",
   {
    "speaker": "边区兵",
    "text": "这个还喘着气。算俘虏，还是算尸首？"
   },
   {
    "speaker": "另一个边区兵",
    "text": "那个半兽人团长传过话，不许杀俘虏。"
   },
   {
    "speaker": "边区兵",
    "text": "他说的是俘虏，可没说尸首。"
   },
   {
    "if": "is.god",
    "text": "顶在你后腰上的矛尖断了。谁也没使劲，是它自己断的。边区兵低头看看手里剩下的半截杆子。"
   },
   {
    "if": "is.god",
    "speaker": "边区兵",
    "text": "那……这个算什么？"
   },
   "两个人把马布格按在地上。空地上众人围着一个红发女人。她上次死后三个时辰就醒了，今晚谁都想亲眼看看。",
   "圈外七八步远的地方，杜坎森仰面躺着，没有人围。他旁边停着一辆板车，有个兽人女人蹲在车边，拿皮绳量他的手指骨节。"
  ],
  "choices": [
   {
    "text": "告诉他们你能搬起他们抬不动的遗体",
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "mods": [
      {
       "if": "stat.str >= 15",
       "n": 1,
       "why": "块头摆在这里"
      },
      {
       "if": "flag.p_surrendered",
       "n": 1,
       "why": "你是自己扔的家伙"
      },
      {
       "if": "rep.companies <= -3",
       "n": -1,
       "why": "营里在传你的闲话"
      }
     ]
    },
    "ok": {
     "text": "你朝杜坎森那边偏了偏头。下午有四个边区兵去抬过他，没抬动，这事他们心里清楚。矛尖松开了。",
     "goto": "p_tide_05"
    },
    "fail": {
     "text": [
      "他们都笑了，接着矛杆抡圆了，抽在你腰上。",
      {
       "speaker": "边区兵",
       "text": "抬得动是吧？那你先把自己抬起来！"
      }
     ],
     "effects": [
      "hp -4"
     ],
     "goto": "p_tide_05"
    }
   },
   {
    "text": "说你和地鹰氏族的地精一样，追随科琳",
    "check": {
     "skill": "deception",
     "dc": 12,
     "adv": "flag.p_tide_hid",
     "mods": [
      {
       "if": "is.goblin",
       "n": 2,
       "why": "地鹰也是地精"
      }
     ]
    },
    "ok": {
     "text": "矛尖犹豫着垂了下去。科琳的队伍里本就有兽人，也有解开镣铐的奴工。谁也不想错杀自己人，再去向半兽人团长解释。",
     "goto": "p_tide_05"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区兵",
       "text": "跟着她的？她的人现在都在那圈里跪着，你怎么在圈外面？"
      },
      "你答不上来，腰眼上就挨了一矛杆。"
     ],
     "effects": [
      "hp -4"
     ],
     "goto": "p_tide_05"
    }
   },
   {
    "text": "质问他难道要给你重新上锁",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "adv": true
    },
    "ok": {
     "text": [
      "拿矛的那个兵是东坎诺口音，从小在西边的难民营里长大。被人圈起来当牲口数是什么滋味，他小时候尝过。",
      {
       "speaker": "边区兵",
       "text": "算俘虏吧。"
      }
     ],
     "effects": [
      "rep clans +1"
     ],
     "goto": "p_tide_05"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区兵",
       "text": "再拴一条？我连绳子都舍不得给你！"
      },
      "矛杆一下抽在了你腰眼上。"
     ],
     "effects": [
      "hp -4"
     ],
     "goto": "p_tide_05"
    }
   },
   {
    "text": "报出姓名和家族，要求登记为俘虏",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": [
      "{?is.greenskin:你报了自己的名字、氏族和头人，连头人的父亲也报了。|你报了自己的名字，又报了拴你的是哪个氏族、哪个头人。}俘虏一旦记了名字，再杀就得有人去跟那个半兽人团长交代。拿矛的那个兵识几个字，从怀里摸出了一截炭条。",
      {
       "speaker": "边区兵",
       "text": "你慢点说。第一个字怎么写？"
      }
     ],
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_tide_05"
    },
    "fail": {
     "text": [
      {
       "speaker": "边区兵",
       "text": "名字？杜坎森还有名字呢。"
      },
      "矛杆一下抽在了你腰眼上。"
     ],
     "effects": [
      "hp -4"
     ],
     "goto": "p_tide_05"
    }
   },
   {
    "text": "让他们挑最重的遗体，你独自抬",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "check": {
     "skill": "athletics",
     "dc": 12
    },
    "ok": {
     "text": [
      "他们挑的是杜坎森。你把他的上半身从地上搬起来一尺高，稳了稳，又放了回去。",
      {
       "speaker": "量指节的兽人",
       "text": "放的时候轻点。"
      }
     ],
     "goto": "p_tide_05"
    },
    "fail": {
     "text": "他们挑的是杜坎森。你才搬起来半尺，腰就先响了一声。边区兵笑着把矛杆抽了下来。",
     "effects": [
      "hp -4"
     ],
     "goto": "p_tide_05"
    }
   },
   {
    "text": "一言不发",
    "effects": [
     "hp -4",
     "flag p_tide_silent"
    ],
    "result": [
     {
      "speaker": "边区兵",
      "text": "不说话的就算尸首。"
     },
     "矛杆抽下来时，你没有躲。车边那个兽人女人站起身。"
    ],
    "goto": "p_tide_05"
   },
   {
    "text": "承认自己是神",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed",
     "world embers +1"
    ],
    "result": [
     "他们都退开了，接着就有人跑去找祭司。",
     "还没到天黑，没撤走的兽人里面就传开了，{?is.greenskin:说杜坎神又派来了一个绿皮。|说杜坎神又派来了一个，这次不是绿皮。}"
    ],
    "goto": "p_tide_05"
   }
  ]
 },
 "p_tide_05": {
  "id": "p_tide_05",
  "title": "抬得动兽人的",
  "loc": "下卡斯托纳斯 · 板车边",
  "date": "1444年奈拉月11日夜",
  "text": [
   "兽人女人腰里别着短刀和锤子，稳稳地走到你面前。她没看那几个边区兵，只从头到脚把你打量了一遍。",
   {
    "speaker": "兽人女人",
    "text": "板车上还缺一个抬得动兽人的。这个我要了。"
   },
   {
    "speaker": "边区兵",
    "text": "你又是哪个营的？"
   },
   {
    "speaker": "兽人女人",
    "text": "这车是拉死人的。死人不分营。"
   },
   "边区兵你看看我，我看看你。车上要抬的那一位，他们下午四个人都没抬动，于是把矛收了起来。",
   {
    "if": "is.goblin",
    "text": "到这时她才看清你的个头，皱了皱眉。"
   },
   {
    "if": "flag.god_revealed",
    "text": "从走过来到现在，她的手一直搭在锤柄上。"
   },
   {
    "if": "flag.god_revealed",
    "speaker": "兽人女人",
    "text": "不会死的我也见过，到头来总得有人去把他放倒。你上车吧，我会看着你。"
   },
   {
    "if": "is.god && !flag.god_revealed",
    "text": "她弯腰捡起地上那半截矛尖，看了看断口，又看看你，把它揣进了怀里。"
   },
   {
    "speaker": "马布格",
    "text": "去吧。抬死人的活，哪一边都缺人干。"
   }
  ],
  "first": [
   "quest q_o_tide start"
  ],
  "choices": [
   {
    "text": "问她为谁做事",
    "once": true,
    "effects": [
     "codex rotcleaver",
     "flag p_tide_asked"
    ],
    "result": [
     {
      "speaker": "乌什卡",
      "text": "我叫乌什卡，烂刀氏族的。我是来给杜坎森做归尘礼的，把他的骨头磨成粉，免得有人把他拉起来。"
     },
     "你问她是谁请来的。",
     {
      "speaker": "乌什卡",
      "text": "没人请。"
     }
    ]
   },
   {
    "text": "起身抬起车把",
    "effects": [
     {
      "if": "!flag.p_tide_asked",
      "then": [
       "flag p_tide_noask"
      ]
     }
    ],
    "result": "你站起身，走到了车把那头。她把绳子的另一头扔给你，没有再说什么。",
    "goto": "p_tide_06"
   },
   {
    "text": "先问干完活能否有饭吃",
    "effects": [
     "hp +4"
    ],
    "result": [
     "她从车板下面摸出一条干鱼扔给你，硬得很。",
     {
      "speaker": "兽人女人",
      "text": "先吃。抬的时候别吐出来。"
     }
    ],
    "goto": "p_tide_06"
   },
   {
    "text": "说明自己力气不大，但识字",
    "tag": "地精",
    "if": "is.goblin",
    "effects": [
     "flag p_tide_reads"
    ],
    "result": [
     {
      "speaker": "兽人女人",
      "text": "车上也缺个认字的。死人的名字总得有人记。"
     },
     "她把一块刮平了的木板和半截炭条塞到了你手里。"
    ],
    "goto": "p_tide_06"
   }
  ]
 },
 "p_tide_06": {
  "id": "p_tide_06",
  "title": "没有队长的人",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "人类围火守了一夜，红发女人终究没醒。兽人这边没人守着杜坎森。他们相信，死者要是起身，必是有法师在背后操纵。",
   "各营的队长在空地当中拿两只酒桶架了一扇门板当桌子，定下各营出一个人上车收尸。每出一个，那一营的队长就在门板上签个字。轮到绿潮这边，门板上写着{pc}，队长那一栏却空着，桌边没有一个人替你说话。",
   {
    "if": "flag.god_revealed",
    "text": "为了你到底算哪一营的，队长们又吵了一刻钟。有个随军祭司挤到桌边，问你是哪一位神的化身。倒没有人问你是不是神。"
   },
   "马布格给编进了俘虏队，跟别人拴成一串，要押到北城去。从你身边经过时，他把半块干粮塞进了你手里。",
   {
    "speaker": "马布格",
    "text": "抬死人的活，就别问是哪一边的了。"
   },
   {
    "if": "is.god",
    "text": "俘虏队里有个人一路回头看你，押队的兵拿矛杆把他的头拨了回去。"
   },
   "板车上，那个兽人女人还在量骨节。{?flag.p_tide_asked:|有人问她是哪个营的，她只报了个名字，说叫乌什卡。}{?flag.p_tide_reads:记名字的那块木板归你背着。|}",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "这副骨头粗，得磨上两天。"
   },
   "车边站着个提灯的男孩，十六七岁，身上的祭司袍子短了一截。天已经亮了，他却忘了把灯吹掉。{?is.greenskin:他看见你是绿皮，没有往后退。|}",
   {
    "speaker": "阿坦",
    "text": "军令钉在我的庙门上了。我叫阿坦，是守庙的。庙顶是二十年前被绿潮掀掉的，不过这不怪你。"
   },
   {
    "speaker": "阿坦",
    "text": "我想托你们一件事。你们出城的时候，能不能顺路替我打听打听，银龙为什么没有再来？书上说，卡斯塔诺一有难他就会来救，可这二十年他一次也没来。"
   }
  ],
  "first": [
   "level 2",
   "companion +ushka",
   "quest q_cart start",
   "quest q_dragon start",
   "codex standing_order",
   "codex truce_table",
   "rest short",
   "codex corin",
   "codex agrados",
   {
    "if": "flag.p_tide_noask || flag.p_tide_silent",
    "then": [
     "approval ushka +1"
    ]
   }
  ],
  "choices": [
   {
    "text": "在空栏按下手印",
    "effects": [
     "rep clans +1"
    ],
    "result": "你把手按进炭灰里，再按到了门板上。{?is.greenskin:灰印子看不出颜色，可在场的人都知道那是一只绿手。|在场的人都知道这一栏是替谁按的。}队长们看着那只手印，没有人去擦。",
    "goto": "a1_01"
   },
   {
    "text": "在空栏签上名字",
    "tag": "地精",
    "if": "is.goblin",
    "effects": [
     "gold +5",
     "rep companies +1"
    ],
    "result": [
     "门板太高，你是踩着酒桶写的，写的是通用语，一笔也没写错。",
     {
      "speaker": "苔藓滩的冈瑟",
      "text": "哟，会写字的地精！那车上记数的活就归你了。我先给你垫上五个金冠，利钱回头再谈。"
     }
    ],
    "goto": "a1_01"
   },
   {
    "text": "在空栏画一截断链",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "rep clans +1",
     "rep companies +1"
    ],
    "result": "你把怀里那节断链按在门板上，拿炭条照着描了一圈。先锋行会的人看了一会儿，在旁边按了个手印，算是给你做了见证。",
    "goto": "a1_01"
   },
   {
    "text": "留下空栏，帮忙抬车",
    "effects": [
     "approval ushka +1"
    ],
    "result": "你什么也没写，径直走到了车把那头。乌什卡把绳子的另一头扔给你。",
    "goto": "a1_01"
   },
   {
    "text": "先答应替男孩沿途打听",
    "effects": [
     "rep temples +1"
    ],
    "result": [
     {
      "speaker": "阿坦",
      "text": "问谁都行。问着了请告诉我，问不着也请告诉我。"
     }
    ],
    "goto": "a1_01"
   }
  ]
 }
};
