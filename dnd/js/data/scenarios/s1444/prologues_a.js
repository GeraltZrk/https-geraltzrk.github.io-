// s1444 / prologues_a.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "p_corintar_01": {
  "id": "p_corintar_01",
  "title": "盾墙",
  "chapter": "序章 · 科琳的队伍",
  "art": "load_5",
  "loc": "下卡斯托纳斯 · 旧集市边上的空地",
  "date": "1444年奈拉月11日午后",
  "text": [
   "去年在血腐阶梯，三万人对上六万兽人，打到后来整支大军都给冲散了，散成二十来股各逃各的，你是从河床的烂泥里爬出来，才捡回了一条命。打那以后，你就跟着一个红头发的女扈从打仗，她叫科琳，这一跟就是一年多，一条街一条街地打过来，总算打进了卡斯托纳斯。",
   "巷战打到今天已经是第七天了，你们的盾墙堵在下城旧集市旁边的一块空地上，脚底下全是踩烂的咸鱼，又滑又腥。你站在第三排，左手边是老布兰多克，这老头都五十了还是个扈从，连盾牌上那圈铜包边都是自己一锤一锤敲上去的。",
   "就在前头二十来步远的地方，团长倒在一个掀翻了的鱼摊边上，他是个半兽人，左边那颗獠牙上总系着一截蓝布条，大伙儿都叫他蓝牙。站在他跟前的正是绿潮的大酋长杜坎森，一只手已经高高扬起来了。",
   "眼看那只手就要落下去，忽然有个人从你左边挤了出去，一头红发，连头盔都没戴，不是科琳还能是谁。她抢到蓝牙身前举盾就挡，头一下挡是挡住了，可盾牌从当中裂成了两半，杜坎森另一只手紧跟着又砸了下来，就在这当口，她的剑也从下往上捅了出去，两个人几乎是一块儿倒下的。你整个人都看呆了，直到老布兰多克在你耳朵边上吼了起来。",
   {
    "speaker": "老布兰多克",
    "text": "看盾！看好你自己的盾，别看她！听见没有！"
   }
  ],
  "first": [
   "codex greentide"
  ],
  "choices": [
   {
    "text": "盯着她倒下的地方看",
    "check": {
     "skill": "perception",
     "dc": 11,
     "mods": [
      {
       "if": "is.elfblood",
       "n": 1,
       "why": "精灵血，眼尖"
      }
     ]
    },
    "ok": {
     "text": "你看得真真切切，她倒下去之前把脸转向了左边，而蓝牙就躺在她左边，隔着两排盾牌，这一眼恐怕只有你站的这个位置才看得见。",
     "effects": [
      "flag saw_her_look"
     ],
     "goto": "p_corintar_02"
    },
    "fail": {
     "text": "你只看见那面盾裂成了两半，紧跟着前排有人往后一仰，盔沿结结实实磕在你鼻梁上，疼得你眼冒金星，等你再睁开眼，她已经倒在杜坎森身边了。",
     "effects": [
      "hp -1"
     ],
     "goto": "p_corintar_02"
    }
   },
   {
    "text": "冲出去，把蓝牙拖回盾墙里",
    "check": {
     "skill": "athletics",
     "dc": 11,
     "mods": [
      {
       "if": "race in ['orc', 'half_orc', 'ogre', 'gnoll']",
       "n": 2,
       "why": "力气大"
      },
      {
       "if": "is.small",
       "n": -2,
       "why": "他一条胳膊就比你重"
      }
     ]
    },
    "ok": {
     "text": "你和布兰多克一人架起一条胳膊，总算把他从鱼堆里拖了回来，可他看都不看你们一眼，一只手还一直朝她那边伸着。",
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_corintar_02"
    },
    "fail": {
     "text": "这半兽人比看上去沉得多，你没拖动他，反倒叫他带了个跟头，亏得布兰多克揪住你的后领，连你带他一块儿拽了回来。",
     "effects": [
      "hp -2"
     ],
     "goto": "p_corintar_02"
    }
   },
   {
    "text": "往左跨一步，补上她留下的缺口",
    "effects": [
     "flag pa_wall_held"
    ],
    "result": "你往左一跨，盾沿当的一声磕上了布兰多克的盾沿，第二排的人也跟着补了上来，盾墙又连成了一整面。",
    "goto": "p_corintar_02"
   }
  ]
 },
 "p_corintar_02": {
  "id": "p_corintar_02",
  "title": "没听见撤退的人",
  "art": "ev_orc_with_axe",
  "text": [
   "南边传来了撤退的号声，喊的是兽人话，一声比一声远，空地上的绿皮听见了，纷纷往后退，有的跑得急，连斧子都不要了。",
   "偏偏有两个没退，是嗜血者的狂战士，脸上抹着猪血，耳朵里大概只剩下自己的吼声了。他们还在一斧一斧地砍，砍的正好是你们这一段盾墙。",
   "布兰多克把盾往上提了提，你右手边还蹲着个科琳塔尔的弩手，正用牙咬着弩弦往上挂。",
   "空地边上，鱼摊的晾架倒还立着，是两丈长的竹竿搭的，上头挂着三排咸鱼，其中一条叫斧子劈成了两半。",
   {
    "if": "flag.pa_wall_held",
    "text": "刚才那个缺口是你亲手补上的，眼下这面墙连一条缝也没有，第二排的人就紧贴在你后背上。"
   },
   {
    "speaker": "老布兰多克",
    "text": "就剩这两个了，赶紧打完，回头我还得擦甲呢。"
   }
  ],
  "choices": [
   {
    "text": "喊一声“合拢”，等盾墙并紧了再顶上去",
    "tag": "战士系",
    "if": "is.martial && !flag.pa_wall_held",
    "result": "你喊的是操典上的口令，左右两面盾一齐靠了过来，第二排还有个人挤到了你身边。",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两个狂战士一前一后撞上了盾墙，头一下叫老布兰多克顶住了，可他盾沿上的铜包边也崩飞了一块。",
     "enemies": [
      {
       "id": "orc_raider",
       "n": 2,
       "name": "嗜血者的狂战士"
      }
     ],
     "allies": [
      {
       "id": "man_at_arms",
       "name": "老布兰多克"
      },
      {
       "id": "archer",
       "name": "科琳塔尔的弩手"
      },
      {
       "id": "man_at_arms",
       "name": "第二排的盾手"
      }
     ],
     "specials": [
      {
       "id": "rack",
       "name": "推倒鱼摊的晾架",
       "desc": "把两丈长的竹架子连着咸鱼一起压到他们身上",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "晾架带着三排咸鱼哗啦一声砸了下去，一个兽人给压在了底下，另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，掉下来一条咸鱼，偏偏砸在你自己头上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 50,
     "win": {
      "goto": "p_corintar_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag pa_dragged"
      ],
      "goto": "p_corintar_03"
     },
     "fled": {
      "effects": [
       "flag pa_ran",
       "rep corintar -1"
      ],
      "goto": "p_corintar_03"
     }
    }
   },
   {
    "text": "跟着合拢的盾墙一起压上去",
    "if": "flag.pa_wall_held",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两个狂战士一前一后撞上了盾墙，头一下叫老布兰多克顶住了，可他盾沿上的铜包边也崩飞了一块。",
     "enemies": [
      {
       "id": "orc_raider",
       "n": 2,
       "name": "嗜血者的狂战士"
      }
     ],
     "allies": [
      {
       "id": "man_at_arms",
       "name": "老布兰多克"
      },
      {
       "id": "archer",
       "name": "科琳塔尔的弩手"
      },
      {
       "id": "man_at_arms",
       "name": "第二排的盾手"
      }
     ],
     "specials": [
      {
       "id": "rack",
       "name": "推倒鱼摊的晾架",
       "desc": "把两丈长的竹架子连着咸鱼一起压到他们身上",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "晾架带着三排咸鱼哗啦一声砸了下去，一个兽人给压在了底下，另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，掉下来一条咸鱼，偏偏砸在你自己头上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 50,
     "win": {
      "goto": "p_corintar_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag pa_dragged"
      ],
      "goto": "p_corintar_03"
     },
     "fled": {
      "effects": [
       "flag pa_ran",
       "rep corintar -1"
      ],
      "goto": "p_corintar_03"
     }
    }
   },
   {
    "text": "用兽人话朝他们喊撤退号",
    "tag": "绿皮",
    "if": "is.greenskin",
    "result": "你这一嗓子喊得比南边那个号手还响，靠后的那个愣了一下，朝你这边看了看，扔下斧子就往南跑了，可另一个连头都没回。",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两个狂战士一前一后撞上了盾墙，头一下叫老布兰多克顶住了，可他盾沿上的铜包边也崩飞了一块。",
     "enemies": [
      {
       "id": "orc_raider",
       "name": "嗜血者的狂战士"
      }
     ],
     "allies": [
      {
       "id": "man_at_arms",
       "name": "老布兰多克"
      },
      {
       "id": "archer",
       "name": "科琳塔尔的弩手"
      }
     ],
     "specials": [
      {
       "id": "rack",
       "name": "推倒鱼摊的晾架",
       "desc": "把两丈长的竹架子连着咸鱼一起压到他们身上",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "晾架带着三排咸鱼哗啦一声砸了下去，一个兽人给压在了底下，另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，掉下来一条咸鱼，偏偏砸在你自己头上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 50,
     "win": {
      "goto": "p_corintar_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag pa_dragged"
      ],
      "goto": "p_corintar_03"
     },
     "fled": {
      "effects": [
       "flag pa_ran",
       "rep corintar -1"
      ],
      "goto": "p_corintar_03"
     }
    }
   },
   {
    "text": "学着那个调子，喊一嗓子撤退号",
    "if": "!is.greenskin",
    "check": {
     "skill": "performance",
     "alt": [
      "deception"
     ],
     "dc": 12
    },
    "ok": {
     "text": "那调子你学了个八成像，靠后的那个愣了一下，扭头往南边看了看，然后扔下斧子跑了，可另一个连头都没回。",
     "combat": {
      "title": "没听见撤退的人",
      "intro": "两个狂战士一前一后撞上了盾墙，头一下叫老布兰多克顶住了，可他盾沿上的铜包边也崩飞了一块。",
      "enemies": [
       {
        "id": "orc_raider",
        "name": "嗜血者的狂战士"
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "老布兰多克"
       },
       {
        "id": "archer",
        "name": "科琳塔尔的弩手"
       }
      ],
      "specials": [
       {
        "id": "rack",
        "name": "推倒鱼摊的晾架",
        "desc": "把两丈长的竹架子连着咸鱼一起压到他们身上",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "晾架带着三排咸鱼哗啦一声砸了下去，一个兽人给压在了底下，另一个脚下一滑，跪进了鱼堆里。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "这架子比你想的结实，只晃了晃，掉下来一条咸鱼，偏偏砸在你自己头上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 50,
      "win": {
       "goto": "p_corintar_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "flag pa_dragged"
       ],
       "goto": "p_corintar_03"
      },
      "fled": {
       "effects": [
        "flag pa_ran",
        "rep corintar -1"
       ],
       "goto": "p_corintar_03"
      }
     }
    },
    "fail": {
     "text": "这下两个都转过脸来了，斧背先到，一下磕在你盾上，震得你半边膀子都麻了。布兰多克事后才告诉你，你喊的那一声在兽人话里是“开饭”。",
     "effects": [
      "hp -2"
     ],
     "combat": {
      "title": "没听见撤退的人",
      "intro": "两个狂战士一前一后撞上了盾墙，头一下叫老布兰多克顶住了，可他盾沿上的铜包边也崩飞了一块。",
      "enemies": [
       {
        "id": "orc_raider",
        "n": 2,
        "name": "嗜血者的狂战士"
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "老布兰多克"
       },
       {
        "id": "archer",
        "name": "科琳塔尔的弩手"
       }
      ],
      "specials": [
       {
        "id": "rack",
        "name": "推倒鱼摊的晾架",
        "desc": "把两丈长的竹架子连着咸鱼一起压到他们身上",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "晾架带着三排咸鱼哗啦一声砸了下去，一个兽人给压在了底下，另一个脚下一滑，跪进了鱼堆里。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "这架子比你想的结实，只晃了晃，掉下来一条咸鱼，偏偏砸在你自己头上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 50,
      "win": {
       "goto": "p_corintar_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "flag pa_dragged"
       ],
       "goto": "p_corintar_03"
      },
      "fled": {
       "effects": [
        "flag pa_ran",
        "rep corintar -1"
       ],
       "goto": "p_corintar_03"
      }
     }
    }
   },
   {
    "text": "举盾，顶上去",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两个狂战士一前一后撞上了盾墙，头一下叫老布兰多克顶住了，可他盾沿上的铜包边也崩飞了一块。",
     "enemies": [
      {
       "id": "orc_raider",
       "n": 2,
       "name": "嗜血者的狂战士"
      }
     ],
     "allies": [
      {
       "id": "man_at_arms",
       "name": "老布兰多克"
      },
      {
       "id": "archer",
       "name": "科琳塔尔的弩手"
      }
     ],
     "specials": [
      {
       "id": "rack",
       "name": "推倒鱼摊的晾架",
       "desc": "把两丈长的竹架子连着咸鱼一起压到他们身上",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "晾架带着三排咸鱼哗啦一声砸了下去，一个兽人给压在了底下，另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，掉下来一条咸鱼，偏偏砸在你自己头上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 50,
     "win": {
      "goto": "p_corintar_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag pa_dragged"
      ],
      "goto": "p_corintar_03"
     },
     "fled": {
      "effects": [
       "flag pa_ran",
       "rep corintar -1"
      ],
      "goto": "p_corintar_03"
     }
    }
   }
  ]
 },
 "p_corintar_03": {
  "id": "p_corintar_03",
  "title": "她这回还起来吗",
  "art": "ev_looming_death",
  "loc": "下卡斯托纳斯 · 空地北角的墙根",
  "text": [
   {
    "if": "flag.pa_dragged",
    "text": "你是叫布兰多克拖到墙根底下的，那两个兽人后来是怎么倒的，你压根没看见。他先把你靠着墙放稳了，这才转身去看旁边那个人。"
   },
   {
    "if": "flag.pa_ran",
    "text": "那两个兽人最后是布兰多克和弩手放倒的。至于你刚才往后退的事，他一个字也没提。"
   },
   "墙根底下坐着你们十人队的伙头，行军锅还背在背上，他的肠子流出来了，自己拿两只手按着，按得仔仔细细，生怕漏掉哪一截。",
   "他看见你们过来，头一句先问布兰多克，锅磕坏了没有，布兰多克绕到他背后看了看，说没有，他这才问起第二件事。",
   {
    "speaker": "伙头",
    "text": "上回在河床里是三个时辰，我一直数着呢。后来她自己就站起来了，还跟我讨了口水喝。"
   },
   {
    "speaker": "伙头",
    "text": "那这回呢？她这回还起得来吗？"
   },
   "布兰多克低下头去解自己的水囊，解了老半天也没解开。"
  ],
  "choices": [
   {
    "text": "告诉他：起得来，上回不也起来了",
    "effects": [
     "var lies +1",
     "flag p_lied"
    ],
    "result": "“那我就等等吧。”他把手又按紧了些，脸一直朝着空地那边，就这么等了小半个时辰，后来手松开了。",
    "goto": "p_corintar_04"
   },
   {
    "text": "告诉他：不知道。上回等了三个时辰",
    "effects": [
     "flag p_truth"
    ],
    "result": "他想了想，说三个时辰他怕是等不到了，叫你到时候替他看上一眼。布兰多克把水囊塞到他手里，也没再往回要。",
    "goto": "p_corintar_04"
   },
   {
    "text": "什么也不说，蹲下去替他按住伤口",
    "effects": [
     "flag p_truth"
    ],
    "check": {
     "skill": "medicine",
     "dc": 12
    },
    "ok": {
     "text": "他多撑了一刻钟，总算把话说完了。他说的是弗里塞斯提尔的难民营，北边第三排棚子，门口挂着半个车轮，还说他欠着房东两个月的柴火钱。",
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_corintar_04"
    },
    "fail": {
     "text": "血还是从你指头缝里一股一股往外冒，他说了“弗里塞斯提尔”，又说了“第三排”，后面的话就没能说完。你这双手一直到天黑都是黏的。",
     "goto": "p_corintar_04"
    }
   },
   {
    "text": "照奈拉特的规矩，替他念送行的词",
    "tag": "神职",
    "if": "is.divine",
    "effects": [
     "flag p_truth",
     "rep temples +1"
    ],
    "result": "念到“过秤”那一句，他忽然插嘴问你，照这个规矩，她是不是也得过秤？你说人人都得过，他点了下头，叫你接着念，念到还剩两句的时候，他走了。",
    "goto": "p_corintar_04"
   },
   {
    "text": "把手按在他的伤口上",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine"
    ],
    "result": [
     "肠子自己缩了回去，口子也合上了，连道疤都没留下，伙头低头把肚皮看了老半天，问你这口锅往后还归不归他背。打这儿起他就跟定了你，赶都赶不走，见了人就讲墙根底下这件事。",
     "才一炷香的工夫，半条街的伤兵全给抬到了墙根底下，你一直治到天黑也没治完。有个抬担架的问你，那两位呢？空地上躺着的那两位，你怎么不去？"
    ],
    "goto": "p_corintar_04"
   }
  ]
 },
 "p_corintar_04": {
  "id": "p_corintar_04",
  "title": "不许割头发",
  "loc": "下卡斯托纳斯 · 两位倒下的地方",
  "text": [
   "抬她的时候你也搭了一把手，是四个人一起把她从杜坎森身上挪开，放到一领摊开的披风上。她那面裂盾的皮带就是这时候崩断的，半截留在了你手里，一头还连着两颗铆钉。",
   "坐在她旁边守着的是温斯顿·愚足，比佩克来的半身人行商，上回在血腐阶梯守着她的尸首不让人碰的就是他。他膝盖上摊着一块包干粮的布，也看见了你手里的东西，只是一句都没问。蓝牙站在十步开外，背对着这边。",
   "来讨东西的已经有三拨人了，头一拨要一绺头发，第二拨要一片披风，第三拨是个边区兵，要的是那面盾。愚足说盾都裂了，那个兵说裂的也行。",
   {
    "speaker": "温斯顿·愚足",
    "text": "坐，坐呀。比佩克的蜂蜜腌肉，就剩这一块啦，来，你一半我一半。吃完了替我盯着点她的头发。"
   },
   {
    "speaker": "温斯顿·愚足",
    "text": "我问你啊，营里现在都怎么说？有没有人提那个“埋”字呀？"
   },
   {
    "speaker": "讨头发的兵",
    "text": "我就要一绺，就一绺！我娘在阿巴兰的营里病着呢，让她贴身带着，兴许能管点用。"
   },
   {
    "if": "is.greenskin",
    "text": "要盾的那个边区兵一看见你的肤色，手先按到了刀把上。"
   },
   {
    "if": "is.greenskin",
    "speaker": "温斯顿·愚足",
    "text": "这位可是亲手抬过她的。你呢，你抬过谁呀？"
   },
   {
    "if": "flag.god_revealed",
    "text": "讨头发的那几个人里，有人认出了你，说墙根底下治伤的就是这一位，他们凑在一块儿商量了两句，改了口，问能不能要你的一绺。"
   },
   {
    "if": "flag.god_revealed",
    "speaker": "温斯顿·愚足",
    "text": "这位的也不给！去去去，回去吃你们的饭吧。"
   }
  ],
  "first": [
   "quest q_o_corintar start"
  ],
  "choices": [
   {
    "text": "问愚足：上回他脑子里的那个声音呢",
    "once": true,
    "effects": [
     "flag pa_no_voice"
    ],
    "result": [
     {
      "speaker": "温斯顿·愚足",
      "text": "上回是有个声音来着，说她没走，叫我别让人碰她。可这回呢，我从晌午一直坐到现在，一个字也没听着啊。"
     },
     "说着，他又把腌肉往你这边推了推。"
    ]
   },
   {
    "text": "站到她和那几拨人中间，叫他们回去",
    "check": {
     "skill": "intimidation",
     "alt": [
      "persuasion"
     ],
     "dc": 11,
     "mods": [
      {
       "if": "faction == 'tried'",
       "n": 2,
       "why": "试炼派：东西得自己挣"
      },
      {
       "if": "rep.corintar >= 4",
       "n": 1,
       "why": "营里认得你"
      },
      {
       "if": "flag.god_revealed",
       "n": 2,
       "why": "他们见过你治伤"
      }
     ]
    },
    "ok": {
     "text": "你往中间一站，只说了一句“她还没凉”。讨头发的先走了，要盾的那个又站了一会儿，朝她跪了一跪，也走了。",
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_corintar_05"
    },
    "fail": {
     "text": "你跟要盾的那个兵吵了起来，肋上还挨了他一肘子，就趁这工夫，有人从另一边伸过手来，割走了一绺头发。愚足没去追，只从包干粮的布上撕下一条来打了个结，嘴里念叨着“左耳缺一块，阿巴兰口音”。",
     "effects": [
      "hp -2"
     ],
     "goto": "p_corintar_05"
    }
   },
   {
    "text": "把那截盾带放回她的盾上",
    "if": "item.shield_strap",
    "effects": [
     "item -shield_strap",
     "rep corintar +1",
     "quest q_o_corintar done"
    ],
    "result": "你把皮带搁回裂盾的铆钉眼旁边，两颗铆钉也对齐了。愚足这才开了口，说他刚才一直在心里数数，要是数到六十你还不动，他就打算自己开口跟你要了。",
    "goto": "p_corintar_05"
   },
   {
    "text": "把盾带揣进怀里，走开，不掺和",
    "effects": [
     "rep corintar -1"
    ],
    "result": "你都走出二十步了，还听得见愚足一个人在跟那三拨人讲道理。到了第二天，营里就有人贴身带着一小片红披风了。",
    "goto": "p_corintar_05"
   }
  ]
 },
 "p_corintar_05": {
  "id": "p_corintar_05",
  "title": "守夜",
  "art": "ev_big_star_in_sky",
  "date": "1444年奈拉月11日入夜",
  "text": [
   "绞架峰的多米尼克带来了一只沙漏，是奈拉特的祭司验尸用的，翻一回半个时辰，他把沙漏摆在了她脚边的石板上。翻到第六回的时候，全军都盯着她看，可她没动，有人说上回也许不止三个时辰，于是又翻了六回。",
   "谁也没走，可也谁都不敢说那个“埋”字。到了后半夜，有人指着北边一颗亮星说那是兆头，布兰多克却说，那颗星每年奈拉月都在那儿挂着，他守了三十年的夜，认得。",
   "蓝牙在她旁边跪了整整一宿，獠牙上那截蓝布都叫露水打透了。天亮的时候，多米尼克把沙漏放倒，站了起来。",
   {
    "if": "is.god",
    "text": "沙漏翻到第三回的时候，前排有人回过头来看你，后来回头的人越来越多，有个弩手压着嗓子跟旁边的人说，上回她是自己起来的，这回可有那一位在呢，说完他又把脸转回去了。"
   },
   {
    "speaker": "绞架峰的多米尼克",
    "text": "照奈拉特的规矩，人死了是要过秤的。她的秤我已经替她看过了，她不欠什么。"
   },
   {
    "speaker": "绞架峰的多米尼克",
    "text": "上回她是自己走回来的。这回她没有回来，她是往上去了，这就叫升天。"
   },
   "蓝牙站起身来，一句话也没说就走了。"
  ],
  "choices": [
   {
    "text": "跟着跪下",
    "effects": [
     "flag vigil_knelt",
     "rep corintar +1"
    ],
    "result": "你也跪了下去，前后左右全是膝盖磕在石板上的声音，一片接一片地往外传，传到空地边上都还没停。",
    "goto": "p_corintar_06"
   },
   {
    "text": "站着",
    "effects": [
     "rep companies +1"
    ],
    "result": "你站着没动，好在站着的不止你一个，钴蓝兵团那一片就有大半没跪，他们的队长隔着人堆看见了你，朝你抬了抬下巴。",
    "goto": "p_corintar_06"
   },
   {
    "text": "问多米尼克：凭什么说她是往上去了",
    "check": {
     "skill": "insight",
     "dc": 12,
     "mods": [
      {
       "if": "flag.pa_no_voice",
       "n": 2,
       "why": "愚足说过，这回没有声音"
      },
      {
       "if": "is.divine",
       "n": 2,
       "why": "祭司这一行你也学过"
      }
     ]
    },
    "ok": {
     "text": "他答了一大套，又是秤，又是账，又是阿格拉多斯欠下的那一笔。可只有一句他说得特别顺溜，像是在庙里背过一百遍似的，那就是“还可能起来的，不许下葬”，这是奈拉特验尸的老条款。原来他不让埋，一半是因为信她，另一半是叫这一条捆住了手。",
     "effects": [
      "codex nerat_rule"
     ],
     "goto": "p_corintar_06"
    },
    "fail": {
     "text": "他没有答，反过来问你，那天你站在第几排？你说第三排，他就说，那你看见的比我少。周围的人全都转过脸来看你。",
     "effects": [
      "rep corintar -1"
     ],
     "goto": "p_corintar_06"
    }
   },
   {
    "text": "说出那个字：该埋了",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "rep corintar -1",
     "rep companies +1",
     "codex nerat_rule"
    ],
    "result": [
     "你说该埋了，先把人埋了，别的事往后放，话一出口，前排好几个人回过头来瞪你。",
     {
      "speaker": "绞架峰的多米尼克",
      "text": "照奈拉特的规矩，还可能起来的，不许下葬。你要是敢担保她起不来，那这头一锹就由你来动。"
     },
     "你没有动，别人也没有动。"
    ],
    "goto": "p_corintar_06"
   },
   {
    "text": "说：这是她自己挣的，用不着谁替她看秤",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "effects": [
     "rep corintar +1",
     "rep temples -1"
    ],
    "result": "后排有人喊了一声好。多米尼克看了你一会儿，说挣来的也得过秤，秤总得有人看着，说完他摸出一块蜡板，把你的话记了上去。",
    "goto": "p_corintar_06"
   },
   {
    "text": "试一试，叫她起来",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_tried_raise",
     "flag god_revealed",
     "rep corintar -2"
    ],
    "result": [
     "尸首真的坐起来了，眼睛倒是睁着的，可里头是空的。",
     "愚足扑了上去，拿整个身子把她按回地上，冲着你喊“那不是她”，蓝牙的手也已经攥住了剑把。从这天起，他再也不肯跟你单独待在一处。"
    ],
    "goto": "p_corintar_06"
   },
   {
    "text": "告诉他们：你办不到的就这一件",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed"
    ],
    "result": "前排的人把脸转了回去，多米尼克摸出蜡板，把你这句话一个字一个字刻了上去，刻完才抬起头问你，这一件，是办不到，还是不许办？",
    "goto": "p_corintar_06"
   }
  ]
 },
 "p_corintar_06": {
  "id": "p_corintar_06",
  "title": "门板桌",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市边上的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "队长们吵了半宿，到天亮也只定下来一件事，他们从旧集市滚来两只空酒桶，又卸了一扇门板架在上头，就架在两位倒下的这块空地上。",
   {
    "cls": "letter",
    "text": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。"
   },
   {
    "speaker": "科琳塔尔的队长",
    "text": "{pc}，你抬过她，就你了。"
   },
   {
    "if": "!flag.god_tried_raise",
    "text": "蓝牙隔着门板看了你一眼。{?flag.saw_her_look:你知道一件事，他迟早是要来问的，他多看了你一会儿，到底没有问。|只看了这一眼，他就把脸转开了。}"
   },
   {
    "if": "flag.god_tried_raise",
    "text": "蓝牙站在门板另一头，跟你中间隔着三个人，你往哪边挪一步，他就往另一边挪一步。"
   },
   {
    "if": "is.god",
    "text": "点到你的时候，桌边卡住了。苔藓滩的冈瑟问，军令上写的是各营出一人，那神是算一人呢，还是算一个营？要是算一个营，饷可得另算。大伙儿吵了一刻钟也没吵出个结果，书记照旧在你名字后头画了个“一”。"
   },
   "板车是从鱼贩子那儿征来的，车板上还粘着鱼鳞，她那边围满了人，谁也不许动她，杜坎森这边却没人肯动，只有个兽人女人蹲在他旁边，拿一根打了结的皮绳量他的指节，也没人请她来。",
   {
    "speaker": "乌什卡",
    "text": "骨头太粗，得磨上两天。"
   },
   {
    "if": "is.god",
    "text": "她量到一半停了手，盯着你看了一会儿，另一只手搁到了腰后的锤子上。"
   },
   {
    "if": "is.god",
    "speaker": "乌什卡",
    "text": "死不了的我也见过。到头来都得有人去把他放倒。"
   },
   "车那头站着个小祭司，看样子也就十五六岁，天都亮了，他手里那盏灯还没吹。",
   {
    "speaker": "阿坦",
    "text": "我叫阿坦，在万神道守庙。军令是钉在我门上的，用了四颗钉子。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "他们都说你是神。那我想问一句，王在哪儿呢？"
   },
   {
    "if": "is.god",
    "text": "你答不上来，他等了一会儿，点了点头，像是早就料到了，接着又说起他自己的事来。"
   },
   {
    "speaker": "阿坦",
    "text": "你们的车是要出城的，能不能顺路替我打听一件事，银龙为什么没有再来？书上说，卡斯塔诺一有难他就会来。可这回都二十年了，他没来。"
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
   "codex agrados"
  ],
  "choices": [
   {
    "text": "答应他：出城顺路打听",
    "effects": [
     "rep temples +1"
    ],
    "result": "他点了点头，这才想起来把灯吹了。",
    "goto": "a1_01"
   },
   {
    "text": "告诉他：你只管抬人，神的事不归你问",
    "effects": [
     "approval ushka +1"
    ],
    "result": "小祭司说他晓得，所以才说是顺路，蹲着的那个兽人女人头一回抬起眼来看你，看完又接着量她的。",
    "goto": "a1_01"
   },
   {
    "text": "把那截盾带系在车辕上",
    "if": "item.shield_strap",
    "effects": [
     "rep corintar +1",
     "approval ushka -1"
    ],
    "result": "铆钉磕在木头上，响了一声，桌边有人朝它低了低头。那个兽人女人看了看皮带，又看了看你，手上的皮绳多绕了一圈。",
    "goto": "a1_01"
   }
  ]
 },
 "p_sons_01": {
  "id": "p_sons_01",
  "title": "世家的街",
  "chapter": "序章 · 达梅里亚之子",
  "art": "ev_lilac_wars",
  "loc": "北卡斯托纳斯 · 一条萨什部的街",
  "date": "1444年奈拉月11日午后",
  "text": [
   "西边那场仗打了九十五年，你们是输的那一边。大公去年死在了皇宫里，少主是躺进一口棺材，由随军祭司一路念着悼词，才给送出了帝国。",
   "如今少主活得好好的，正靠在北城一条街的门洞里翻兵书。这条街是世家的，家家门上都钉着木板，可木板后头是有人的，你听见过咳嗽声，还闻见过煮豆子的味儿。",
   "达拉斯坐在你旁边的台阶上补一只手套，针脚细得都看不出来。南边的号角响了一上午，这会儿总算停了，没过多久，特里斯坦从街口跑了进来，头盔还夹在胳膊底下。",
   {
    "speaker": "特里斯坦",
    "text": "下城打出结果了！杜坎森倒了，那个红头发的扈从也倒了，她是替您外甥挡的那一下。"
   },
   {
    "speaker": "流亡者罗吉尔",
    "text": "我外甥呢？"
   },
   {
    "speaker": "特里斯坦",
    "text": "还活着。就跪在她边上，谁叫他也不起来。"
   },
   "罗吉尔把书合上了，连页角都没折。"
  ],
  "first": [
   "codex greentide",
   "codex lilac_wars"
  ],
  "choices": [
   {
    "text": "凑到门板跟前，看看里头是什么人家",
    "check": {
     "skill": "history",
     "dc": 10,
     "mods": [
      {
       "if": "faction == 'heirs'",
       "n": 2,
       "why": "承嗣派：认谱是本行"
      },
      {
       "if": "is.scholar",
       "n": 1,
       "why": "读过书"
      }
     ]
    },
    "ok": {
     "text": "门楣上刻着一行古卡斯塔诺字，头一个词你认得，是“萨什”，意思是抄写的人。原来这是世家里管修史的那一支，兽人占了这城二十年，这一家始终没走。你隔着木板报了营号，说今晚这条街有人守着，过了一会儿，门缝底下推出来半块豆饼。",
     "effects": [
      "codex patricians",
      "rep league +1",
      "flag pa_door_friend"
     ],
     "goto": "p_sons_02"
    },
    "fail": {
     "text": "门楣上刻的字你一个也不认得，你凑近了想看清楚些，谁知木板缝里捅出来一根烧火棍，正戳在你肋上。",
     "effects": [
      "hp -1"
     ],
     "goto": "p_sons_02"
    }
   },
   {
    "text": "隔着门报上家名，求见这一户的主人",
    "tag": "贵族",
    "if": "is.noble",
    "effects": [
     "codex patricians",
     "rep league +1",
     "flag pa_door_friend"
    ],
    "result": "门里静了好一阵，才有个老太太用很慢的通用语说，这条街上回来客人，还是二十年前的事。门到底没开，可你听见后窗的闩落下了，又听见有人在往楼上搬东西。",
    "goto": "p_sons_02"
   },
   {
    "text": "问罗吉尔：接下来怎么办",
    "effects": [
     "gold +5"
    ],
    "result": [
     {
      "speaker": "流亡者罗吉尔",
      "text": "先看看弟兄们今晚有没有地方睡吧。饷已经欠了三个月，今天先发五个金冠，剩下的，等我想出办法再说。"
     },
     "说完他又把书翻开了，翻到的还是刚才那一页。"
    ],
    "goto": "p_sons_02"
   }
  ]
 },
 "p_sons_02": {
  "id": "p_sons_02",
  "title": "抢东西的",
  "date": "1444年奈拉月11日傍晚",
  "text": [
   "天擦黑的时候来了一伙散兵，身上是五六个团的号衣，哪个也凑不出一身整的，袖标全撕掉了。两个瘦的拿撬棍去别第三家的门板，还有个提钉头棒的大个子站在街心望风。",
   "撬棍别进了门缝，木板吱的一声，门里头有个小孩才哭出半声，马上就叫人捂住了，捂嘴的那只手熟练得很，那是二十年练出来的。",
   "达拉斯把手套放下了，针还别在上头，他站起来的时候一点声音也没出。",
   {
    "if": "flag.pa_door_friend",
    "text": "第三家正是下午给你推豆饼的那一家，二楼的窗板后头有人在挪东西，听着像是一口锅。"
   },
   {
    "speaker": "提钉头棒的",
    "text": "我说弟兄，咱们各发各的财嘛。这条街上的东西，又没写着你们达梅里亚的名字。"
   }
  ],
  "choices": [
   {
    "text": "亮出银月徽，报罗吉尔的名号",
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "mods": [
      {
       "if": "rep.companies >= 2",
       "n": 1,
       "why": "诸团里有人认得你"
      }
     ]
    },
    "ok": {
     "text": "你只报了两句，“达梅里亚之子，罗吉尔的街”，大个子看了看徽，又看了看达拉斯手里那把窄刀，往地上啐了一口，带着人走了，撬棍就留在了门槛上。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "“罗吉尔？公文上不是说他死了吗？”大个子笑了起来，“死人的街，那就更用不着客气了。”",
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒往手心里一拍，两个瘦的也扔了撬棍，从后腰摸出刀来。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 2,
        "name": "撕了袖标的兵",
        "hpMult": 0.6
       },
       {
        "id": "thug",
        "name": "提钉头棒的",
        "hpMult": 0.75
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "达拉斯"
       },
       {
        "id": "archer",
        "name": "街口的长弓手"
       }
      ],
      "specials": [
       {
        "id": "cart",
        "name": "把街口的水车推倒",
        "desc": "让半车水连木桶一起冲下坡去",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去，三个人给冲得东倒西歪，大个子的棒子也脱了手。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "车轴早就锈死了，你推得满脸通红，车才挪了半尺，还轧了自己的脚。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "window",
        "name": "朝楼上喊：守街的在这儿",
        "desc": "木板后头的人家听得见",
        "check": {
         "skill": "persuasion",
         "dc": 12,
         "mods": [
          {
           "if": "flag.pa_door_friend",
           "n": 4,
           "why": "这家人下午给过你半块豆饼"
          }
         ]
        },
        "success": {
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心就泼了下来，在兽人眼皮底下熬过二十年的人家，这一手熟得很。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有，都二十年了，这条街上不管谁喊，也没人开窗。"
        }
       }
      ],
      "xp": 50,
      "win": {
       "goto": "p_sons_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "gold -5",
        "flag pa_clubbed"
       ],
       "goto": "p_sons_03"
      },
      "fled": {
       "effects": [
        "rep league -1"
       ],
       "goto": "p_sons_03"
      }
     }
    }
   },
   {
    "text": "报上全名和封号，问他们是谁家的兵",
    "tag": "贵族",
    "if": "is.noble",
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "你把全名连着封号报了一遍，又问他们的队长是哪一位，说明天好登门。三个人里倒有两个不由自主地立正了，走的时候，还有一个回头行了半个礼。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "“爵爷。”大个子学着你的腔调鞠了一躬，可等他直起腰来，棒子已经抡起来了。",
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒往手心里一拍，两个瘦的也扔了撬棍，从后腰摸出刀来。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 2,
        "name": "撕了袖标的兵",
        "hpMult": 0.6
       },
       {
        "id": "thug",
        "name": "提钉头棒的",
        "hpMult": 0.75
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "达拉斯"
       },
       {
        "id": "archer",
        "name": "街口的长弓手"
       }
      ],
      "specials": [
       {
        "id": "cart",
        "name": "把街口的水车推倒",
        "desc": "让半车水连木桶一起冲下坡去",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去，三个人给冲得东倒西歪，大个子的棒子也脱了手。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "车轴早就锈死了，你推得满脸通红，车才挪了半尺，还轧了自己的脚。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "window",
        "name": "朝楼上喊：守街的在这儿",
        "desc": "木板后头的人家听得见",
        "check": {
         "skill": "persuasion",
         "dc": 12,
         "mods": [
          {
           "if": "flag.pa_door_friend",
           "n": 4,
           "why": "这家人下午给过你半块豆饼"
          }
         ]
        },
        "success": {
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心就泼了下来，在兽人眼皮底下熬过二十年的人家，这一手熟得很。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有，都二十年了，这条街上不管谁喊，也没人开窗。"
        }
       }
      ],
      "xp": 50,
      "win": {
       "goto": "p_sons_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "gold -5",
        "flag pa_clubbed"
       ],
       "goto": "p_sons_03"
      },
      "fled": {
       "effects": [
        "rep league -1"
       ],
       "goto": "p_sons_03"
      }
     }
    }
   },
   {
    "text": "在他们脚边炸一声响的",
    "tag": "施法者",
    "if": "is.caster",
    "check": {
     "skill": "arcana",
     "dc": 11
    },
    "ok": {
     "text": "撬棍头上炸开了一团蓝火，响得整条街的木板都跟着抖，他们撒腿就跑，连那根撬棍都没顾上要。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "只冒出来几点火星，跟打不着的火镰差不多，大个子低头看了看，又抬头看了看你，提着棒子走了过来。",
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒往手心里一拍，两个瘦的也扔了撬棍，从后腰摸出刀来。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 2,
        "name": "撕了袖标的兵",
        "hpMult": 0.6
       },
       {
        "id": "thug",
        "name": "提钉头棒的",
        "hpMult": 0.75
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "达拉斯"
       },
       {
        "id": "archer",
        "name": "街口的长弓手"
       }
      ],
      "specials": [
       {
        "id": "cart",
        "name": "把街口的水车推倒",
        "desc": "让半车水连木桶一起冲下坡去",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去，三个人给冲得东倒西歪，大个子的棒子也脱了手。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "车轴早就锈死了，你推得满脸通红，车才挪了半尺，还轧了自己的脚。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "window",
        "name": "朝楼上喊：守街的在这儿",
        "desc": "木板后头的人家听得见",
        "check": {
         "skill": "persuasion",
         "dc": 12,
         "mods": [
          {
           "if": "flag.pa_door_friend",
           "n": 4,
           "why": "这家人下午给过你半块豆饼"
          }
         ]
        },
        "success": {
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心就泼了下来，在兽人眼皮底下熬过二十年的人家，这一手熟得很。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有，都二十年了，这条街上不管谁喊，也没人开窗。"
        }
       }
      ],
      "xp": 50,
      "win": {
       "goto": "p_sons_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "gold -5",
        "flag pa_clubbed"
       ],
       "goto": "p_sons_03"
      },
      "fled": {
       "effects": [
        "rep league -1"
       ],
       "goto": "p_sons_03"
      }
     }
    }
   },
   {
    "text": "趁他们没留神，钻狗洞进去把门从里头顶死",
    "tag": "矮个子",
    "if": "is.small",
    "check": {
     "skill": "stealth",
     "dc": 10
    },
    "ok": {
     "text": "门里头的人先是吓了一跳，随后七八只手一齐上来帮你搬柜子，外头撬了一刻钟也没撬动，只好骂骂咧咧地走了。门里有人往你手里塞了半块豆饼。",
     "effects": [
      "xp 25",
      "rep league +1"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "你钻到一半就卡住了，瘦的那个拎着你的脚，把你拔了出来。",
     "effects": [
      "hp -1"
     ],
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒往手心里一拍，两个瘦的也扔了撬棍，从后腰摸出刀来。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 2,
        "name": "撕了袖标的兵",
        "hpMult": 0.6
       },
       {
        "id": "thug",
        "name": "提钉头棒的",
        "hpMult": 0.75
       }
      ],
      "allies": [
       {
        "id": "man_at_arms",
        "name": "达拉斯"
       },
       {
        "id": "archer",
        "name": "街口的长弓手"
       }
      ],
      "specials": [
       {
        "id": "cart",
        "name": "把街口的水车推倒",
        "desc": "让半车水连木桶一起冲下坡去",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去，三个人给冲得东倒西歪，大个子的棒子也脱了手。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "车轴早就锈死了，你推得满脸通红，车才挪了半尺，还轧了自己的脚。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "window",
        "name": "朝楼上喊：守街的在这儿",
        "desc": "木板后头的人家听得见",
        "check": {
         "skill": "persuasion",
         "dc": 12,
         "mods": [
          {
           "if": "flag.pa_door_friend",
           "n": 4,
           "why": "这家人下午给过你半块豆饼"
          }
         ]
        },
        "success": {
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心就泼了下来，在兽人眼皮底下熬过二十年的人家，这一手熟得很。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有，都二十年了，这条街上不管谁喊，也没人开窗。"
        }
       }
      ],
      "xp": 50,
      "win": {
       "goto": "p_sons_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "gold -5",
        "flag pa_clubbed"
       ],
       "goto": "p_sons_03"
      },
      "fled": {
       "effects": [
        "rep league -1"
       ],
       "goto": "p_sons_03"
      }
     }
    }
   },
   {
    "text": "拔剑",
    "combat": {
     "title": "撬门的",
     "intro": "大个子把钉头棒往手心里一拍，两个瘦的也扔了撬棍，从后腰摸出刀来。",
     "enemies": [
      {
       "id": "vagrant_bandit",
       "n": 2,
       "name": "撕了袖标的兵",
       "hpMult": 0.6
      },
      {
       "id": "thug",
       "name": "提钉头棒的",
       "hpMult": 0.75
      }
     ],
     "allies": [
      {
       "id": "man_at_arms",
       "name": "达拉斯"
      },
      {
       "id": "archer",
       "name": "街口的长弓手"
      }
     ],
     "specials": [
      {
       "id": "cart",
       "name": "把街口的水车推倒",
       "desc": "让半车水连木桶一起冲下坡去",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "水车翻了，半车水带着木桶哗哗地冲下坡去，三个人给冲得东倒西歪，大个子的棒子也脱了手。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "车轴早就锈死了，你推得满脸通红，车才挪了半尺，还轧了自己的脚。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "window",
       "name": "朝楼上喊：守街的在这儿",
       "desc": "木板后头的人家听得见",
       "check": {
        "skill": "persuasion",
        "dc": 12,
        "mods": [
         {
          "if": "flag.pa_door_friend",
          "n": 4,
          "why": "这家人下午给过你半块豆饼"
         }
        ]
       },
       "success": {
        "text": "二楼的窗板开了一条缝，一锅滚水照着街心就泼了下来，在兽人眼皮底下熬过二十年的人家，这一手熟得很。",
        "dmgAll": "2d4",
        "type": "fire"
       },
       "fail": {
        "text": "楼上一点动静也没有，都二十年了，这条街上不管谁喊，也没人开窗。"
       }
      }
     ],
     "xp": 50,
     "win": {
      "goto": "p_sons_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "gold -5",
       "flag pa_clubbed"
      ],
      "goto": "p_sons_03"
     },
     "fled": {
      "effects": [
       "rep league -1"
      ],
      "goto": "p_sons_03"
     }
    }
   }
  ]
 },
 "p_sons_03": {
  "id": "p_sons_03",
  "title": "军士长",
  "art": "ev_looming_death",
  "loc": "北卡斯托纳斯 · 街角的门廊",
  "text": [
   {
    "if": "flag.pa_clubbed",
    "text": "你后脑勺上挨的那一棍到现在还嗡嗡地响，钱袋也轻了五个金冠。好在门没让人撬开，是达拉斯一个人守住的，至于怎么守的，他不肯说。"
   },
   "军士长是早上清这条街的时候挨的那一斧，正砍在肚子上，弟兄们把他抬到街角一户人家的门廊底下，拿他自己的盾给他枕着头。门廊另一头还躺着个旗手，才十七岁，胸口中了一箭，已经不说话了。",
   "达拉斯蹲在旁边，拿一根打了结的线绳量军士长的肩宽，队里的寿衣向来都是他缝，军士长人还醒着，就这么看着他量。",
   {
    "speaker": "军士长",
    "text": "量准点啊，我肩膀宽，上回发的号衣就窄了。"
   },
   {
    "speaker": "军士长",
    "text": "我求你一件事，把我埋回月神之耳去。得挑个有月亮的晚上埋，没月亮的可不算。"
   },
   {
    "if": "subrace == 'damerian'",
    "text": "他听出了你的口音，又添了半句，说你也是那边的人，岸上那片坡你是晓得的。"
   }
  ],
  "choices": [
   {
    "text": "答应他",
    "effects": [
     "flag urn_promised",
     "flag p_truth",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": "“好，那就不急了。”他说，可他到底没能等到掌灯。弟兄们说夜里就在街心烧，达拉斯已经缝起了装骨灰的袋子，这只袋子归你带。",
    "goto": "p_sons_04"
   },
   {
    "text": "告诉他：仗快打回去了，到时候他自己走回去",
    "effects": [
     "var lies +1",
     "flag p_lied",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": "他笑了一下，说那敢情好，回去头一件事就是喝一壶家里的茶。可他没能等到掌灯，达拉斯已经缝起了装骨灰的袋子，缝好了归你带。",
    "goto": "p_sons_04"
   },
   {
    "text": "告诉他：月神之耳如今叫威克斯和魔导院分了",
    "effects": [
     "flag p_truth",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": "他过了好半天才开口，说分给谁都行，坡还是那片坡，月亮也不归威克斯管。他没能等到掌灯，达拉斯缝的那只袋子归你带。",
    "goto": "p_sons_04"
   },
   {
    "text": "把手按在他的伤口上",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": [
     {
      "speaker": "军士长",
      "text": "先治小的吧，旗手才十七呢。我都这把岁数了，不占这个先。"
     },
     "你把手挪到那孩子的胸口上，箭自己退了出来，口子也合上了，他坐起来，从此就跟定了你，赶都赶不走，还逢人就讲这件事。才一炷香的工夫，半条街的伤兵全给抬到了门廊底下。",
     "你一直治到后半夜也没治完，等再转回来，军士长身子已经凉了，达拉斯把缝好的袋子交到了你手里。抬担架的人问你：“下城空地上那两位呢？”"
    ],
    "goto": "p_sons_04"
   }
  ]
 },
 "p_sons_04": {
  "id": "p_sons_04",
  "title": "点人头的",
  "art": "ev_hre",
  "loc": "北卡斯托纳斯 · 街口",
  "date": "1444年奈拉月11日入夜",
  "text": [
   "掌灯以后，街口来了个威克斯人，四十来岁，灰斗篷底下露出一截紫袍，脖子上挂着帝国的印信。他手里拿着一本册子、一支炭笔，见了人先欠一欠身。",
   "原来他是来数人的，数得不快，数一个画一道，五道算一捆。偏偏罗吉尔就在三十步外的门洞里借着火把看书，西尔穆纳家的那头银发，隔着半条街都认得出来。",
   {
    "speaker": "威克斯的书办",
    "text": "打扰了。贵部过阿巴兰的时候，册子上记的是一千一百四十人，我只数人头，不问名字，数完了也好销册。"
   },
   {
    "speaker": "威克斯的书办",
    "text": "另外还有一位先生，公文上写的是去年过世了。照例我得问一句，他眼下还过世着吧？"
   },
   {
    "if": "is.god",
    "text": "数到你的时候，他的炭笔停住了，他翻回册子头一页去找栏目，没找着合适的，只好先空了一行。"
   }
  ],
  "choices": [
   {
    "text": "挡住他的视线，跟他扯阿巴兰的马肉",
    "check": {
     "skill": "deception",
     "dc": 12
    },
    "ok": {
     "text": "你问他阿巴兰西边是不是真的吃马肉，他认认真真答了一刻钟，连哪家馆子不掺驴肉都告诉你了。等他想起来还得接着数，门洞里早就没人了。",
     "effects": [
      "rep moon +1"
     ],
     "goto": "p_sons_05"
    },
    "fail": {
     "text": "他很有礼貌地听你说完，然后往左挪了一步，越过你的肩膀朝门洞看了一眼，在册子最后一页添了一道，那一道画得比别的都直。",
     "effects": [
      "flag rogier_counted",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "p_sons_05"
    }
   },
   {
    "text": "直说：这条街不欢迎数数的",
    "check": {
     "skill": "intimidation",
     "dc": 13,
     "mods": [
      {
       "if": "is.martial",
       "n": 1,
       "why": "你的手按在剑上"
      }
     ]
    },
    "ok": {
     "text": "他看了看你的手，又看了看达拉斯的手，把册子合上了，说：“那我明天再来吧，白天来。”可第二天他并没有来。",
     "effects": [
      "rep moon +1",
      "flag pa_clerk_left"
     ],
     "goto": "p_sons_05"
    },
    "fail": {
     "text": "“欢不欢迎的，册子总得销啊。”他说这话的工夫，已经把门洞里的人看在眼里了，临走还朝那边欠了欠身，跟见了熟人一样。",
     "effects": [
      "flag rogier_counted",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "p_sons_05"
    }
   },
   {
    "text": "跟他对公文：过世的人不在点数之列",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "check": {
     "skill": "persuasion",
     "dc": 10
    },
    "ok": {
     "text": "你请他把公文念一遍，念到“已故”两个字，你就说，那这一位可不归你这本册子管，他想了想，说在理，名分上的事不能乱，就在那一格里写上了“已故，不计”。",
     "effects": [
      "rep moon +1"
     ],
     "goto": "p_sons_05"
    },
    "fail": {
     "text": "他说公文是公文，人头是人头，这是两本账，说完就把门洞里那一位记在了人头那本上。",
     "effects": [
      "flag rogier_counted",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "p_sons_05"
    }
   },
   {
    "text": "让他数",
    "effects": [
     "flag rogier_counted",
     "rep throne +1",
     "rep moon -1"
    ],
    "result": "他数完了，向你道了谢，在最后一页添了一道，旁边还注了“在世”两个小字。",
    "goto": "p_sons_05"
   }
  ]
 },
 "p_sons_05": {
  "id": "p_sons_05",
  "title": "跪不跪",
  "loc": "北卡斯托纳斯 · 世家的街",
  "text": [
   "街心架起了柴堆，军士长就在上头烧着。隔着银瀑往下看，下城那块空地上也围着一圈火，火圈当中留着一块黑，那边全军都没睡，都在等她再起来一回。",
   "柴是拆了一户人家的门板劈出来的，门板背面刻着给小孩量个子的道道，最上头那一道停在二十年前。",
   "罗吉尔合上书走了过来，在柴堆边上站了一会儿，特里斯坦跟在后头，手里拿着他的斗篷，可他没接。",
   {
    "speaker": "流亡者罗吉尔",
    "text": "弟兄们里头有想下去跪她的，也有不想去的。可跪在她边上的那个是我外甥，这话要是由我来说，怎么说都不对。"
   },
   {
    "speaker": "流亡者罗吉尔",
    "text": "军士长不在了，这一队现在是你说了算，你来定吧。"
   },
   {
    "if": "is.god",
    "speaker": "流亡者罗吉尔",
    "text": "还有一桩事。弟兄们里有人来问我，到底该跪她，还是该跪你，这个我就更不好开口了。"
   }
  ],
  "choices": [
   {
    "text": "带弟兄们都下去",
    "effects": [
     "flag sons_knelt",
     "rep corintar +1"
    ],
    "result": "四十来个人排成两列下了坡，达梅里亚的蓝罩袍在火圈外头跪了一排，科琳塔尔的人往两边让了让，给你们腾出一块石板地来。",
    "goto": "p_sons_06"
   },
   {
    "text": "告诉弟兄们：不下去，剑留着回达梅里亚用",
    "effects": [
     "rep moon +1"
    ],
    "result": "没有人争，有两个年轻的朝坡下望了很久，后来还是回到柴堆边添柴去了。特里斯坦把斗篷披到罗吉尔肩上，这回他没躲。",
    "goto": "p_sons_06"
   },
   {
    "text": "你一个人下去",
    "effects": [
     "item +halfling_pie"
    ],
    "result": "你在火圈最外头站了半个时辰，她旁边坐着个半身人，隔着三排人瞧见了你的蓝罩袍，就托人传过来一块肉派，还捎了句话，说站着的也得吃。",
    "goto": "p_sons_06"
   },
   {
    "text": "告诉弟兄们：蓝牙是大公的外孙，跪的是自家人",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "effects": [
     "flag sons_knelt",
     "rep corintar +1",
     "rep moon +1"
    ],
    "result": "这话一说，连不想去的那几个也没话讲了。下坡的路上有人小声排起了辈分，排到最后才发现，那个半兽人比在场的哪一个都更靠近西尔穆纳的正支。",
    "goto": "p_sons_06"
   },
   {
    "text": "让弟兄们举手：去的去，留的留",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "flag sons_knelt",
     "rep corintar +1",
     "rep companies +1"
    ],
    "result": "举手的结果是二十三只手对十九只手，要去的下了坡，留下的替他们看着铺盖和柴堆。罗吉尔从头看到尾，说他父亲的营里可从来没举过手。",
    "goto": "p_sons_06"
   },
   {
    "text": "告诉他们：谁也别跪",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed",
     "rep throne -1"
    ],
    "result": [
     "弟兄们你看看我、我看看你，都站着没动，也没人下坡，罗吉尔点了点头，回门洞里看书去了。",
     "{?flag.pa_clerk_left:原来叫你撵走的那个威克斯书办并没有走远，就蹲在坡顶的台阶上，|街口那个威克斯书办还没走，}他翻开册子，在最后一页添了一行字，写的是“神，一位，待核”。"
    ],
    "goto": "p_sons_06"
   }
  ]
 },
 "p_sons_06": {
  "id": "p_sons_06",
  "title": "门板桌",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市边上的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "天亮了，她没有起来。下城那块空地上，队长们拿两只空酒桶架起一扇门板当桌子，围着它吵来吵去，到最后只定下了一件事。",
   {
    "cls": "letter",
    "text": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。"
   },
   {
    "speaker": "流亡者罗吉尔",
    "text": "我这边出{pc}吧。这一队里头，只有{ta}身上已经背着一个了。"
   },
   {
    "if": "flag.rogier_counted",
    "speaker": "流亡者罗吉尔",
    "text": "昨晚那本册子上，我又活过来了。一千金冠的赏格，迟早有人来领，你走了也好，省得人家来领的时候你在边上。"
   },
   "达拉斯留在了纵队里，临走前，他把军士长那只袋子要了过去，在袋口又缝了一道，缝完咬断线头，一句话也没说。",
   {
    "if": "is.god",
    "text": "伯爵联盟的人问这一位算哪个营的，罗吉尔说算他的，昨晚替他守过一条街，这一来就没人再问了。书记在你的名字后头照旧画了个“一”。"
   },
   "板车就停在桌边，车板上还粘着鱼鳞。她那边围满了人，谁也不许动她，杜坎森这边呢，是没人肯动，只有一个兽人女人蹲在那儿，拿一根打了结的皮绳量他的指节，也没有谁请她来。",
   {
    "speaker": "乌什卡",
    "text": "这骨头太粗了，得磨上两天。"
   },
   {
    "if": "is.god",
    "text": "她抬头看见了你，量到一半的手就停住了，另一只手搁到了腰后的锤子上。"
   },
   {
    "if": "is.god",
    "speaker": "乌什卡",
    "text": "死不了的我见过，到头来都得有人去放倒。"
   },
   "车边站着个小祭司，看着也就十五六岁，天都亮了，灯还提在手里。",
   {
    "speaker": "阿坦",
    "text": "我是万神道上守庙的，叫阿坦。他们把军令钉在了我的门上，用的钉子还是从我门框上拔下来的。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "街上都说你是神。那我想问一句，王在哪儿呢？"
   },
   {
    "if": "is.god",
    "text": "你答不上来，他也没再追问，只把灯换到了另一只手上。"
   },
   {
    "speaker": "阿坦",
    "text": "听说这车要出城，能不能顺路替我问一件事呀？就问银龙为什么没有再来。城破那年人人都求过他，可二十年了，他一直没来。"
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
   "codex agrados"
  ],
  "choices": [
   {
    "text": "答应他：顺路问问",
    "effects": [
     "rep temples +1"
    ],
    "result": "他说了声谢，又说不会让你白问，往后车上的人到他庙里歇脚，一概不收香火钱，不过那庙没有屋顶，这一条他先跟你讲明了。",
    "goto": "a1_01"
   },
   {
    "text": "告诉他：你包里已经背着一个人了，神的事往后排",
    "effects": [
     "approval ushka +1"
    ],
    "result": "小祭司看了看你的包，说不急，顺路问问就行，量指节的那个兽人女人抬头看了你一眼，又低下头去了。",
    "goto": "a1_01"
   },
   {
    "text": "把银月徽别到车辕上",
    "if": "item.moon_badge",
    "effects": [
     "rep moon +1",
     "rep throne -1"
    ],
    "result": "徽刚别上去，桌边钴蓝兵团的人就吹了声口哨，说西边的账带到东边来了，罗吉尔远远看见了，没说行，也没说不行。",
    "goto": "a1_01"
   }
  ]
 },
 "p_wex_01": {
  "id": "p_wex_01",
  "title": "五层楼的屋顶",
  "chapter": "序章 · 皇帝的差事",
  "art": "load_21",
  "loc": "南卡斯托纳斯 · 峭壁区",
  "date": "1444年奈拉月11日午后",
  "text": [
   "丁香战争是你们威克斯打赢的。去年皇上在安本科斯特的王座厅里一边擦剑一边说了句话，说只有威克斯说了算，而你就是替说这句话的人办差的。",
   "差事装在一封信里，火漆上印着一只合着的眼睛，巴兹伍德先生统共只写了一行，至于数完以后怎么办，信上一个字也没提。",
   {
    "cls": "letter",
    "text": "数一数卡斯托纳斯有几座门，各在谁手里。"
   },
   "所以你这会儿正趴在峭壁区一栋五层楼的屋顶上，桥屯的奥托格在底下替你扶着梯子。他是三卫出身的大剑手，嘴严，就是手抖，梯子也跟着他一块儿抖。",
   "从这儿看得见下城，旧集市边上的一块空地上，有个半兽人倒了，一个红头发的举着盾挡上去，盾裂了，后来她和杜坎森两个都没再起来。奥托格在底下问谁赢了，你说都没赢，他“哦”了一声，梯子停了一会儿，又抖了起来。",
   {
    "speaker": "桥屯的奥托格",
    "text": "去年皇宫那一晚，你在哪儿啊？我一直没问过你。"
   }
  ],
  "first": [
   "codex greentide",
   "codex lilac_wars"
  ],
  "choices": [
   {
    "text": "说：我排在后头，事后被叫去花园挖了一夜的坑",
    "once": true,
    "if": "!flag.pa_palace_answered",
    "effects": [
     "flag dug_the_pit",
     "flag pa_palace_answered"
    ],
    "result": "梯子不抖了，他在底下过了好半天才说：“那你就什么也没看见。”这句话他是照着念的，跟去年上头交代你的一个字都不差。"
   },
   {
    "text": "说：我不在。那一晚我在紫庭记数",
    "once": true,
    "if": "!flag.pa_palace_answered",
    "effects": [
     "flag pa_palace_answered",
     "flag pa_clerk"
    ],
    "result": "“记数的啊。”他好像松了口气，“那你接着数吧，我给你扶稳点。”梯子果然抖得轻了些。"
   },
   {
    "text": "不提这件事",
    "once": true,
    "if": "!flag.pa_palace_answered",
    "effects": [
     "flag pa_palace_answered",
     "rep throne +1"
    ],
    "result": "“不提好。”他说，梯子照旧在抖。后来他给紫庭回话的时候提了你一句，统共就四个字，此人嘴严。"
   },
   {
    "text": "把南城和下城每座门上的旗数清楚",
    "check": {
     "skill": "perception",
     "dc": 11,
     "mods": [
      {
       "if": "flag.pa_clerk",
       "n": 2,
       "why": "记数是你的本行"
      },
      {
       "if": "is.elfblood",
       "n": 1,
       "why": "精灵血，眼尖"
      }
     ]
    },
    "ok": {
     "text": "南城两座门都归钴蓝兵团，下城临河的水门没人守，门扇早让兽人拆去烧了，离那块空地最近的一座插的是科琳塔尔的旗。你一座一座都记在了袖口里侧，只有北城那座叫焦塔挡着，得走到跟前才看得见。",
     "effects": [
      "flag pa_gates_counted"
     ],
     "goto": "p_wex_02"
    },
    "fail": {
     "text": "烟太大了，南城那一片你只数了个大概，你探出身子想再看一眼，谁知脚下的瓦一滑，亏得檐角的滴水兽把你挂住了。至于北城那座门，更得走到跟前去看了。",
     "effects": [
      "hp -2"
     ],
     "goto": "p_wex_02"
    }
   }
  ]
 },
 "p_wex_02": {
  "id": "p_wex_02",
  "title": "下楼",
  "loc": "峭壁区 · 楼梯间",
  "text": [
   "下到三楼，拐角蹲着三个逃兵，正就着一截蜡烛头分一袋银器。三个人的号衣是三个团的，袖标全撕掉了，地上摊着银盘子、银烛台，还有一把刻着古卡斯塔诺字的梳子。",
   "楼梯是石头的，一层二十一级，每一级当中都叫几百年的鞋底磨出了一道凹，越往下走，底下那条阴沟的味道就越重。",
   "他们一抬头，看见了你和奥托格。奥托格的手不抖了，他这双手只有握着剑的时候才不抖。",
   {
    "speaker": "逃兵",
    "text": "楼上还有人哪？真晦气。我说弟兄，见者有份，一人拿一把汤匙，就当谁也没看见谁，行不行？"
   }
  ],
  "choices": [
   {
    "text": "亮出那封带火漆的信",
    "effects": [
     "flag letter_shown"
    ],
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "三个人里头有一个认得那只合着的眼睛，他抓起烛台，想了想又放下了，末了三个人贴着墙根下了楼，银器一件也没敢带。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_wex_03"
    },
    "fail": {
     "text": "“眼睛？”领头的凑过来看了看火漆，“管它是谁的眼睛呢，这城里又没有皇上。”说完他把蜡烛吹了。",
     "combat": {
      "title": "楼梯上的逃兵",
      "intro": "蜡烛灭了，楼梯间里只剩下窗缝漏进来的一道光，照着满地的银器。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 3,
        "name": "逃兵",
        "hpMult": 0.5
       }
      ],
      "allies": [
       {
        "id": "wexonard_footman",
        "name": "奥托格"
       }
      ],
      "specials": [
       {
        "id": "sack",
        "name": "把那袋银器踢下楼梯",
        "desc": "银盘子会一路响到一楼",
        "check": {
         "skill": "athletics",
         "dc": 10
        },
        "success": {
         "text": "袋子滚了下去，银盘子一级一级地响，三个逃兵全扭头去追，把后背亮给了你们。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "袋子比你想的要沉，你这一脚正踢在了烛台尖上。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "high",
        "name": "抢上两级台阶，居高往下踹",
        "desc": "楼梯窄，他们一次只上得来一个",
        "check": {
         "skill": "acrobatics",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一块儿带了下去。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "你偏偏踩在了一只银盘子上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 50,
      "win": {
       "effects": [
        "gold +15",
        "flag pa_silver"
       ],
       "goto": "p_wex_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "flag pa_robbed"
       ],
       "goto": "p_wex_03"
      },
      "fled": {
       "effects": [
        "flag pa_robbed"
       ],
       "goto": "p_wex_03"
      }
     }
    }
   },
   {
    "text": "摆出三卫剑馆的起手式",
    "tag": "战士系",
    "if": "is.martial",
    "check": {
     "skill": "intimidation",
     "dc": 10,
     "mods": [
      {
       "if": "subrace == 'alenic'",
       "n": 1,
       "why": "这个架子你从小练"
      }
     ]
    },
    "ok": {
     "text": "双手握柄，剑尖朝后，这是三卫教的头一个架子。领头的在丁香战争里见过这个架子，也见过它后头跟着的是什么，三个人走得很快。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_wex_03"
    },
    "fail": {
     "text": "架子是摆出来了，可楼梯太窄，剑尖磕在了墙上，三个人都看着你，有一个还笑出了声。",
     "combat": {
      "title": "楼梯上的逃兵",
      "intro": "蜡烛灭了，楼梯间里只剩下窗缝漏进来的一道光，照着满地的银器。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 3,
        "name": "逃兵",
        "hpMult": 0.5
       }
      ],
      "allies": [
       {
        "id": "wexonard_footman",
        "name": "奥托格"
       }
      ],
      "specials": [
       {
        "id": "sack",
        "name": "把那袋银器踢下楼梯",
        "desc": "银盘子会一路响到一楼",
        "check": {
         "skill": "athletics",
         "dc": 10
        },
        "success": {
         "text": "袋子滚了下去，银盘子一级一级地响，三个逃兵全扭头去追，把后背亮给了你们。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "袋子比你想的要沉，你这一脚正踢在了烛台尖上。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "high",
        "name": "抢上两级台阶，居高往下踹",
        "desc": "楼梯窄，他们一次只上得来一个",
        "check": {
         "skill": "acrobatics",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一块儿带了下去。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "你偏偏踩在了一只银盘子上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 50,
      "win": {
       "effects": [
        "gold +15",
        "flag pa_silver"
       ],
       "goto": "p_wex_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "flag pa_robbed"
       ],
       "goto": "p_wex_03"
      },
      "fled": {
       "effects": [
        "flag pa_robbed"
       ],
       "goto": "p_wex_03"
      }
     }
    }
   },
   {
    "text": "跟他们讲价：让路，银器归他们，你没来过",
    "check": {
     "skill": "persuasion",
     "alt": [
      "deception"
     ],
     "dc": 11
    },
    "ok": {
     "text": "成交了，他们硬塞给你一把汤匙，说这是规矩，拿了才算一条船上的。奥托格的那一把，他没接。",
     "effects": [
      "gold +3"
     ],
     "goto": "p_wex_03"
    },
    "fail": {
     "text": "“没来过？”领头的看了看你的靴子，“钉铁掌的，这是威克斯的官靴啊。今天放你下去，明天来的就是一队人了。”",
     "combat": {
      "title": "楼梯上的逃兵",
      "intro": "蜡烛灭了，楼梯间里只剩下窗缝漏进来的一道光，照着满地的银器。",
      "enemies": [
       {
        "id": "vagrant_bandit",
        "n": 3,
        "name": "逃兵",
        "hpMult": 0.5
       }
      ],
      "allies": [
       {
        "id": "wexonard_footman",
        "name": "奥托格"
       }
      ],
      "specials": [
       {
        "id": "sack",
        "name": "把那袋银器踢下楼梯",
        "desc": "银盘子会一路响到一楼",
        "check": {
         "skill": "athletics",
         "dc": 10
        },
        "success": {
         "text": "袋子滚了下去，银盘子一级一级地响，三个逃兵全扭头去追，把后背亮给了你们。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "袋子比你想的要沉，你这一脚正踢在了烛台尖上。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "high",
        "name": "抢上两级台阶，居高往下踹",
        "desc": "楼梯窄，他们一次只上得来一个",
        "check": {
         "skill": "acrobatics",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一块儿带了下去。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "你偏偏踩在了一只银盘子上。",
         "selfDmg": "1d4"
        }
       }
      ],
      "xp": 50,
      "win": {
       "effects": [
        "gold +15",
        "flag pa_silver"
       ],
       "goto": "p_wex_03"
      },
      "lose": {
       "effects": [
        "hp 1",
        "flag pa_robbed"
       ],
       "goto": "p_wex_03"
      },
      "fled": {
       "effects": [
        "flag pa_robbed"
       ],
       "goto": "p_wex_03"
      }
     }
    }
   },
   {
    "text": "先吹灭那截蜡烛头",
    "tag": "夜视",
    "if": "is.darkvision",
    "result": "楼梯间一下子黑了，你看得见他们，他们却看不见你，离你最近的那个还在摸刀，就已经叫你放倒了。",
    "combat": {
     "title": "楼梯上的逃兵",
     "intro": "黑地里有人踢翻了烛台，剩下的两个背靠背站着，刀尖四下乱指。",
     "enemies": [
      {
       "id": "vagrant_bandit",
       "n": 2,
       "name": "逃兵",
       "hpMult": 0.5
      }
     ],
     "allies": [
      {
       "id": "wexonard_footman",
       "name": "奥托格"
      }
     ],
     "specials": [
      {
       "id": "sack",
       "name": "把那袋银器踢下楼梯",
       "desc": "银盘子会一路响到一楼",
       "check": {
        "skill": "athletics",
        "dc": 10
       },
       "success": {
        "text": "袋子滚了下去，银盘子一级一级地响，三个逃兵全扭头去追，把后背亮给了你们。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "袋子比你想的要沉，你这一脚正踢在了烛台尖上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "high",
       "name": "抢上两级台阶，居高往下踹",
       "desc": "楼梯窄，他们一次只上得来一个",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 11
       },
       "success": {
        "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一块儿带了下去。",
        "dmgAll": "1d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "你偏偏踩在了一只银盘子上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 50,
     "win": {
      "effects": [
       "gold +15",
       "flag pa_silver"
      ],
      "goto": "p_wex_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag pa_robbed"
      ],
      "goto": "p_wex_03"
     },
     "fled": {
      "effects": [
       "flag pa_robbed"
      ],
      "goto": "p_wex_03"
     }
    }
   },
   {
    "text": "拔剑",
    "combat": {
     "title": "楼梯上的逃兵",
     "intro": "蜡烛灭了，楼梯间里只剩下窗缝漏进来的一道光，照着满地的银器。",
     "enemies": [
      {
       "id": "vagrant_bandit",
       "n": 3,
       "name": "逃兵",
       "hpMult": 0.5
      }
     ],
     "allies": [
      {
       "id": "wexonard_footman",
       "name": "奥托格"
      }
     ],
     "specials": [
      {
       "id": "sack",
       "name": "把那袋银器踢下楼梯",
       "desc": "银盘子会一路响到一楼",
       "check": {
        "skill": "athletics",
        "dc": 10
       },
       "success": {
        "text": "袋子滚了下去，银盘子一级一级地响，三个逃兵全扭头去追，把后背亮给了你们。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "袋子比你想的要沉，你这一脚正踢在了烛台尖上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "high",
       "name": "抢上两级台阶，居高往下踹",
       "desc": "楼梯窄，他们一次只上得来一个",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 11
       },
       "success": {
        "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一块儿带了下去。",
        "dmgAll": "1d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "你偏偏踩在了一只银盘子上。",
        "selfDmg": "1d4"
       }
      }
     ],
     "xp": 50,
     "win": {
      "effects": [
       "gold +15",
       "flag pa_silver"
      ],
      "goto": "p_wex_03"
     },
     "lose": {
      "effects": [
       "hp 1",
       "flag pa_robbed"
      ],
      "goto": "p_wex_03"
     },
     "fled": {
      "effects": [
       "flag pa_robbed"
      ],
      "goto": "p_wex_03"
     }
    }
   }
  ]
 },
 "p_wex_03": {
  "id": "p_wex_03",
  "title": "皇上知道吗",
  "art": "ev_looming_death",
  "loc": "峭壁区 · 楼下的水槽边",
  "text": [
   {
    "if": "flag.pa_robbed",
    "text": "你是让奥托格架着下楼的，银器没了，逃兵也没影了，你摸了摸怀里，好在信还在，火漆也没碎。"
   },
   {
    "if": "flag.pa_silver",
    "text": "那袋银器是没法物归原主了，奥托格就照老规矩分了，你那一份折下来是十五个金冠，只有那把梳子他单独包了起来，没算进去。"
   },
   "楼下有个饮马的石槽，槽边靠着一个人，袖子上是钴蓝兵团的蓝标，罩袍底下露出来的却是威克斯的铁掌靴。他拿自己的头盔压着肚子，血还是从盔沿底下往外渗。",
   "他头一眼认出来的，是奥托格身上那身紫。",
   {
    "speaker": "钴蓝兵团的佣兵",
    "text": "三卫的？我也是威克斯人哪。出来替加韦德人卖命，结果他们新上来的那个小国王说了，人是他爹雇的，饷不归他结。"
   },
   {
    "speaker": "钴蓝兵团的佣兵",
    "text": "你们是皇上派来的吧？皇上可是咱们自己的大公啊，他知不知道我们这些人在这儿？"
   },
   {
    "if": "subrace == 'alenic'",
    "text": "他说的是艾伦河那边的土话，跟你小时候听惯的是一个调。"
   }
  ],
  "choices": [
   {
    "text": "告诉他：知道，还问起过你们营",
    "effects": [
     "var lies +1",
     "flag p_lied"
    ],
    "result": "“问起过？”他把头盔按得更紧了些，“那行，那就不算白来。”他让奥托格替他把靴子摆正，靴尖朝着西边。",
    "goto": "p_wex_04"
   },
   {
    "text": "告诉他：不知道。你就是来数这个的",
    "effects": [
     "flag p_truth"
    ],
    "result": "他笑了一声，把气都笑岔了，说：“那你数吧，数清楚点，可别把我数漏了。”奥托格解下自己的斗篷给他盖上，手抖得连扣子都系不上。",
    "goto": "p_wex_04"
   },
   {
    "text": "问他的名字，记进报告里",
    "effects": [
     "flag p_truth",
     "flag pa_name_taken",
     "rep companies +1"
    ],
    "result": "他把名字报了两遍，连村子带他父亲的名字都报了，就怕你写错，你一一记在了信纸背面，旁边两个钴蓝兵团的人一直看着，看到你写完。",
    "goto": "p_wex_04"
   },
   {
    "text": "照奈拉特的规矩，替他念送行的词",
    "tag": "神职",
    "if": "is.divine",
    "effects": [
     "flag p_truth",
     "rep temples +1"
    ],
    "result": "他才听了两句就打断你，问念这个要不要钱，你说不要，他就说那你念慢点，整段的他还是头一回听。",
    "goto": "p_wex_04"
   },
   {
    "text": "把手按在他的伤口上",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine"
    ],
    "result": [
     "头盔底下的口子合上了，他坐起来，把头盔戴回头上，开口头一句话就是问你归哪个营管饷。打这儿起他就跟着你了，赶也赶不走，逢人就讲水槽边的事。",
     "才一炷香的工夫，半条街的伤兵都给抬到了水槽边，你治到天快黑也没治完。抬担架的人问你：“空地上那两位呢？你怎么不去？”"
    ],
    "goto": "p_wex_04"
   }
  ]
 },
 "p_wex_04": {
  "id": "p_wex_04",
  "title": "桥",
  "art": "ev_lilac_wars",
  "loc": "银瀑上的石桥",
  "text": [
   "北城那座门得走到跟前才数得了，过去又只有一条路，就是银瀑上的石桥。下城人管这道瀑布叫粪瀑，你站到桥头就明白为什么了，原来全城的阴沟都往这儿淌。",
   "桥叫一队人把着，个个穿蓝罩袍，胸口别着银月徽，是达梅里亚之子的人。领头的坐在桥栏上看书，没戴头盔，一头银发，帝国的告示上画过这张脸，底下还有一行字，写的是“一千金冠，死活不论”。可照公文上说，他去年就过世了。",
   "他旁边站着个高个子骑士，手一直没离开过剑把。",
   {
    "if": "is.god",
    "text": "你一走上桥，桥栏上那位就头一回从书上抬起了眼睛，高个子骑士的手也从剑把上拿开了，一时竟不知道该往哪儿放。"
   },
   {
    "speaker": "特里斯坦",
    "text": "过桥的先报营号！你是哪个团的？"
   }
  ],
  "choices": [
   {
    "text": "低头报个别人的营号，过桥",
    "result": "你报了钴蓝兵团，高个子看了一眼你的靴子，倒也没拦。桥栏上那位从头到尾都没抬头，只翻了一页书，至于他带了多少人，你没敢回头去数。",
    "goto": "p_wex_05"
   },
   {
    "text": "告诉桥栏上那位：下城那个半兽人还活着",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "mods": [
      {
       "if": "is.noble",
       "n": 2,
       "why": "贵族之间好说话"
      },
      {
       "if": "flag.letter_shown",
       "n": -2,
       "why": "逃兵的嘴比你的腿快，桥上已经听说了那封信"
      }
     ]
    },
    "ok": {
     "text": [
      "你把在屋顶上看见的都讲了，那面盾，那把剑，还有那个半兽人后来自己坐了起来。他合上书听你讲完，然后告诉你，北边第二条巷子里没有乱兵。",
      {
       "speaker": "流亡者罗吉尔",
       "text": "替我问候巴兹伍德先生吧。你告诉他，我装死装得很像，他学生那份赏格算是白挂了一年。"
      },
      "过桥的时候，你顺手数了数他的人，他明明看见你在数，却没有拦。"
     ],
     "effects": [
      "flag rogier_spotted"
     ],
     "goto": "p_wex_05"
    },
    "fail": {
     "text": [
      {
       "speaker": "特里斯坦",
       "text": "这事我们已经知道了。过桥五个金冠，威克斯口音的加倍。"
      },
      "桥栏上那位只管翻他的书，没有替你讲价。"
     ],
     "effects": [
      "gold -10"
     ],
     "goto": "p_wex_05"
    }
   },
   {
    "text": "边走边数：他带了多少人，几张弓",
    "effects": [
     "flag rogier_spotted"
    ],
    "result": "一共四十二个人，十一张长弓，没有马。你一路数过去，下了桥才发觉自己的嘴唇一直在动，高个子在后头叫住了你，说你少数了一个，桥洞底下还蹲着一个呢。",
    "goto": "p_wex_05"
   },
   {
    "text": "照礼数，向一位西尔穆纳欠身",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "effects": [
     "rep moon +1"
    ],
    "result": [
     {
      "speaker": "流亡者罗吉尔",
      "text": "公文上我可是个死人，你朝死人行礼，回去怕是不好交代吧。"
     },
     "话是这么说，他还是从桥栏上下来，还了你半个礼，高个子也让开了路。"
    ],
    "goto": "p_wex_05"
   },
   {
    "text": "问他：值一千金冠的人，守一座粪瀑上的桥？",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "effects": [
     "flag rogier_spotted"
    ],
    "result": [
     {
      "speaker": "流亡者罗吉尔",
      "text": "弟兄们总得有个地方睡觉啊，桥这头正好有三间不漏雨的屋子。"
     },
     "他把书签夹好，头一回正眼看了看你，然后把自己带了多少人、几张弓，原原本本报了一遍，报完还说，省得你数错。"
    ],
    "goto": "p_wex_05"
   }
  ]
 },
 "p_wex_05": {
  "id": "p_wex_05",
  "title": "头一只信鸽",
  "art": "ev_hre",
  "loc": "峭壁区 · 屋顶的鸽笼",
  "date": "1444年奈拉月11日傍晚",
  "text": [
   "鸽笼是奥托格一路背进城来的，眼下就搁在那栋五层楼的屋顶上，里头三只灰鸽子，脚环上都烙着紫庭的号。纸条只有两指宽，字得写得很小才行。",
   "紫庭的纸条是有规矩的，先写日子，再写地名，数目一律写成大写，省得鸽子路上淋了雨，把一个三洇成了八。",
   "天快黑了，从这儿往下看，下城那块空地上点起了一圈火。全军都没走，都在等那个红头发的再起来一回，她上回死了三个时辰就起来了，这事连威克斯堡都听说过。",
   {
    "if": "flag.pa_name_taken",
    "text": "信纸背面还记着水槽边那个人的名字呢。"
   },
   {
    "if": "is.god",
    "text": "能写的还多出来一样，就是你自己。"
   },
   "奥托格把头一只鸽子捧了出来，等着你动笔。"
  ],
  "first": [
   "quest q_o_wex start"
  ],
  "choices": [
   {
    "text": "照实写：城门，各家的旗，连罗吉尔在哪座桥上",
    "req": "flag.rogier_spotted",
    "reqText": "得先在桥上数过他的人",
    "effects": [
     "flag report1_true",
     "var honest_reports +1",
     "world peace +1",
     "rep throne +1",
     "rep moon -1",
     {
      "if": "flag.pa_gates_counted",
      "then": [
       "rep throne +1"
      ]
     }
    ],
    "result": "鸽子往西飞走了，用不了十天，巴兹伍德先生就会知道，一个公文上的死人坐在哪座桥的桥栏上，身边带着多少人、几张弓。",
    "goto": "p_wex_06"
   },
   {
    "text": "只写城门和旗，不提桥上那位",
    "effects": [
     "flag report1_true",
     "var honest_reports +1",
     {
      "if": "flag.pa_gates_counted",
      "then": [
       "rep throne +1"
      ]
     }
    ],
    "result": "{?flag.pa_gates_counted:哪座门插着谁的旗，你写得一清二楚，|门你只数了个大概，也就照着大概写了，}桥上的事却一个字也没提。奥托格看着你把纸条卷好，什么也没问，他从来都不问。",
    "goto": "p_wex_06"
   },
   {
    "text": "写一行：城在科琳塔尔手里，稳了",
    "effects": [
     "flag report1_false",
     "var false_reports +1"
    ],
    "result": "就这么一行字，写完了纸条还空着一半，这样的信巴兹伍德先生最爱看，可也最不信。",
    "goto": "p_wex_06"
   },
   {
    "text": "不放。把鸽子关回笼里",
    "effects": [
     "rep throne -1"
    ],
    "result": "奥托格把鸽子塞回了笼里，又喂了一把麦粒。紫庭有条规矩，头一封要是迟了，后头每一封都得多核一遍。",
    "goto": "p_wex_06"
   },
   {
    "text": "照实写，末尾添一行：城里另有一位神，是我",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed",
     "flag report1_true",
     "var honest_reports +1",
     "world peace -1"
    ],
    "result": [
     "奥托格看见了末尾那一行，手一抖，差点把鸽子捏死，他把纸条又展开看了一遍，然后问你，“神”字要不要也写成大写，省得路上淋了雨。",
     "你说不用，鸽子就往西飞走了，威克斯堡收到这一封，是要连夜点灯的。"
    ],
    "goto": "p_wex_06"
   }
  ]
 },
 "p_wex_06": {
  "id": "p_wex_06",
  "title": "报名",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市边上的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "天亮了，她没有起来。队长们在那块空地上拿两只空酒桶架起一扇门板，吵来吵去，到最后只定下了一件事。",
   {
    "cls": "letter",
    "text": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。"
   },
   "威克斯在城里统共才十来个人，算不上一个营，桌边本来没有你们的位子。可你数了一天的门，倒数出一件事来，这城里走到哪儿都有人盘问，偏偏只有拉死人的车没人拦，于是你走到桌边，自己报了名。",
   {
    "speaker": "苔藓滩的冈瑟",
    "text": "威克斯的人也要上车？行啊！车归你拉，账找你们皇上付，至于几分利嘛，咱们另算。"
   },
   {
    "if": "flag.letter_shown",
    "text": "钴蓝兵团的这位队长说话的时候，眼睛看的是你胸口揣信的地方。看来昨天楼梯上那几个逃兵，嘴并不严。"
   },
   {
    "if": "is.god",
    "text": "你报完了名，桌边半天没有人开口，冈瑟头一回没有先问利钱，他问的是，神来拉车，工钱是按人头结呢，还是另有个价。"
   },
   "奥托格给留在了营里。板车停在桌边，车板上还粘着鱼鳞。她那边围满了人，谁也不许动她，杜坎森这边呢，是没人肯动，只有一个兽人女人蹲在那儿，拿打了结的皮绳量他的指节，每量完一节，就在皮绳上掐一下。",
   {
    "speaker": "乌什卡",
    "text": "这骨头太粗了，得磨上两天。"
   },
   {
    "if": "is.god",
    "text": "她看了你一眼，量到一半的手就停住了，另一只手搁到了腰后的锤子上。"
   },
   {
    "if": "is.god",
    "speaker": "乌什卡",
    "text": "死不了的我见过，到头来都得有人去放倒。"
   },
   "车边还站着个小祭司，看着也就十五六岁，手里提着一盏没吹的灯。",
   {
    "speaker": "阿坦",
    "text": "我叫阿坦，万神道上没屋顶的那座庙是归我看的，军令就钉在我的庙门上。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "冈瑟说你是神。那我想问一句，王在哪儿呢？"
   },
   {
    "if": "is.god",
    "text": "你答不上来。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "我问过你了，你也不知道，那我还是接着去问他吧。"
   },
   {
    "speaker": "阿坦",
    "text": "你们出城的时候，能不能顺路替我打听一件事？就是银龙为什么没有再来。卡斯塔诺有难，他本来就该来的，可是都二十年了。"
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
   "codex agrados"
  ],
  "choices": [
   {
    "text": "答应他：顺路打听",
    "effects": [
     "rep temples +1"
    ],
    "result": "他点了点头，把你的名字问了去，说晚上要记在簿子上，至于是什么簿子，他没说。",
    "goto": "a1_01"
   },
   {
    "text": "告诉他：你是来数门的，神的事不归你数",
    "effects": [
     "approval ushka +1"
    ],
    "result": "小祭司说门他也数过，万神道上原先有十一座庙门，眼下还关得上的只剩三座了，量骨节的那个兽人女人抬头看了你一眼，又低下头去了。",
    "goto": "a1_01"
   },
   {
    "text": "掏五个金冠，替车上置办盐和草席",
    "cost": {
     "gold": 5
    },
    "effects": [
     "rep companies +1"
    ],
    "result": "桌边的人头一回看见威克斯人往外掏钱，好几个都伸长了脖子来看，冈瑟说这一笔他记着，不算利钱。",
    "goto": "a1_01"
   }
  ]
 }
};
