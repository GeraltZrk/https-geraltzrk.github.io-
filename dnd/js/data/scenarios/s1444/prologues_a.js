// s1444 / prologues_a.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "p_corintar_01": {
  "id": "p_corintar_01",
  "title": "盾墙",
  "chapter": "序章 · 科琳的队伍",
  "art": "load_5",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月11日午后",
  "text": [
   "去年，三万人类联军在血腐阶梯迎战六万兽人，被兽人大军“绿潮”冲得溃不成军。你从河床的烂泥里爬出来，才捡回一条命。此后一年多，你跟着一个叫科琳的红发女扈从，一条街一条街地打回了卡斯托纳斯城。",
   "卡斯托纳斯城的巷战已经打了七天。追随科琳的人自称科琳塔尔。你站在盾墙第三排，脚下是集市上踩烂的咸鱼，又滑又腥。左手边的布兰多克五十岁了，还只是个扈从。",
   "二十步外，你们的团长倒在翻倒的鱼摊旁。他是半兽人，左边獠牙上常年系着一截蓝布，人称蓝牙。绿潮的兽人大酋长科尔古斯·杜坎森站在他跟前，手已经举了起来。",
   "科琳没戴头盔，红发从你左边一晃就冲了出去。她抢到蓝牙身前举盾去挡，杜坎森第一下劈裂了盾牌，第二下刚砸下来，她的剑已自下而上刺了出去。两人几乎同时倒地。你愣在原地，直到布兰多克在耳边吼了起来。",
   {
    "speaker": "老布兰多克",
    "text": "“盾！管好你手里的盾！听见没有？”"
   }
  ],
  "first": [
   "codex greentide"
  ],
  "choices": [
   {
    "text": "看清科琳倒在哪里",
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
     "text": "你看清了。科琳倒下去前转脸望向左边，蓝牙就躺在那里。隔着两排盾，别人未必看得见她这最后一眼。",
     "effects": [
      "flag saw_her_look"
     ],
     "goto": "p_corintar_02"
    },
    "fail": {
     "text": "你只来得及看见盾裂开。前排的人被撞得向后一仰，盔沿磕中你的鼻梁。等眼前的金星散去，科琳已经倒在杜坎森身旁。",
     "effects": [
      "hp -1"
     ],
     "goto": "p_corintar_02"
    }
   },
   {
    "text": "冲出去把蓝牙拖回盾墙",
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
     "text": "你和布兰多克一人架住蓝牙一只胳膊，把他从鱼堆里拖了回来。他始终望着科琳，手还朝她伸着。",
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_corintar_02"
    },
    "fail": {
     "text": "你刚去拖蓝牙就被他的分量带倒。布兰多克揪住你的后领，把你们两个一起拽回了盾墙。",
     "effects": [
      "hp -2"
     ],
     "goto": "p_corintar_02"
    }
   },
   {
    "text": "向左补上盾墙的缺口",
    "effects": [
     "flag pa_wall_held"
    ],
    "result": "你向左跨一步，盾沿和布兰多克的撞在一处。第二排跟上，科琳留下的缺口合拢了。",
    "goto": "p_corintar_02"
   }
  ]
 },
 "p_corintar_02": {
  "id": "p_corintar_02",
  "title": "没听见撤退的人",
  "art": "ev_orc_with_axe",
  "text": [
   "大酋长杜坎森一倒，兽人撤退的喊声从南边一路传远。空地上的兽人纷纷退走，有几个跑得连斧头都丢了。",
   "偏偏有两个没退。他们是嗜血者氏族的狂战士，杀红了眼，什么也听不进去，还在一斧一斧地砍你们这一段盾墙。",
   "布兰多克把盾往上提了提。你右边蹲着队里的一个弩手，正咬着弩弦往上挂。",
   "空地旁边还立着一个晒咸鱼的竹架子，又高又沉。",
   {
    "if": "flag.pa_wall_held",
    "text": "刚才那个缺口是你亲手补上的，眼下这面盾墙严严实实。第二排的人就贴在你后背上。"
   },
   {
    "speaker": "老布兰多克",
    "text": "就剩这两个了，赶紧打完，回头我还得擦甲呢。"
   }
  ],
  "choices": [
   {
    "text": "喊“合拢”，等盾墙合紧再推进",
    "tag": "战士系",
    "if": "is.martial && !flag.pa_wall_held",
    "result": "你喊的是操典上的口令，左右两面盾一齐靠了过来。第二排还有个人挤到了你身边。",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两名狂战士接连撞上盾墙。布兰多克顶住第一下，盾边的铜皮却崩掉了一块。",
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
       "desc": "摊上的竹架和咸鱼可以一起推倒。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "竹架子带着咸鱼哗啦一声砸了下去，一个兽人被压在了下面。另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，倒有一条咸鱼掉下来，正砸在你自己头上。",
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
    "text": "随合拢的盾墙向前推进",
    "if": "flag.pa_wall_held",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两名狂战士接连撞上盾墙。布兰多克顶住第一下，盾边的铜皮却崩掉了一块。",
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
       "desc": "摊上的竹架和咸鱼可以一起推倒。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "竹架子带着咸鱼哗啦一声砸了下去，一个兽人被压在了下面。另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，倒有一条咸鱼掉下来，正砸在你自己头上。",
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
    "text": "用兽人语喊撤退",
    "tag": "绿皮",
    "if": "is.greenskin",
    "result": "你这一嗓子喊得比南边那个兽人还响。靠后的那个愣了一下，朝你看看，扔下斧子就往南跑了。另一个却连头都没回。",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两名狂战士接连撞上盾墙。布兰多克顶住第一下，盾边的铜皮却崩掉了一块。",
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
       "desc": "摊上的竹架和咸鱼可以一起推倒。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "竹架子带着咸鱼哗啦一声砸了下去，一个兽人被压在了下面。另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，倒有一条咸鱼掉下来，正砸在你自己头上。",
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
    "text": "照听到的调子喊撤退",
    "if": "!is.greenskin",
    "check": {
     "skill": "performance",
     "alt": [
      "deception"
     ],
     "dc": 12
    },
    "ok": {
     "text": "那调子你学了个八成像。靠后的那个愣了一下，扭头往南看看，扔下斧子跑了。另一个却连头都没回。",
     "combat": {
      "title": "没听见撤退的人",
      "intro": "两名狂战士接连撞上盾墙。布兰多克顶住第一下，盾边的铜皮却崩掉了一块。",
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
        "desc": "摊上的竹架和咸鱼可以一起推倒。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "竹架子带着咸鱼哗啦一声砸了下去，一个兽人被压在了下面。另一个脚下一滑，跪进了鱼堆里。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "这架子比你想的结实，只晃了晃，倒有一条咸鱼掉下来，正砸在你自己头上。",
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
     "text": "这下两个都转过脸来了，一斧背磕在你盾上，震得你半边膀子都麻了。布兰多克事后才告诉你，你喊的那一声在兽人话里是“开饭”。",
     "effects": [
      "hp -2"
     ],
     "combat": {
      "title": "没听见撤退的人",
      "intro": "两名狂战士接连撞上盾墙。布兰多克顶住第一下，盾边的铜皮却崩掉了一块。",
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
        "desc": "摊上的竹架和咸鱼可以一起推倒。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "竹架子带着咸鱼哗啦一声砸了下去，一个兽人被压在了下面。另一个脚下一滑，跪进了鱼堆里。",
         "dmgAll": "1d6",
         "type": "bludgeoning",
         "applyAll": {
          "cond": "prone",
          "turns": 1
         }
        },
        "fail": {
         "text": "这架子比你想的结实，只晃了晃，倒有一条咸鱼掉下来，正砸在你自己头上。",
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
    "text": "举盾向前推进",
    "combat": {
     "title": "没听见撤退的人",
     "intro": "两名狂战士接连撞上盾墙。布兰多克顶住第一下，盾边的铜皮却崩掉了一块。",
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
       "desc": "摊上的竹架和咸鱼可以一起推倒。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "竹架子带着咸鱼哗啦一声砸了下去，一个兽人被压在了下面。另一个脚下一滑，跪进了鱼堆里。",
        "dmgAll": "1d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "prone",
         "turns": 1
        }
       },
       "fail": {
        "text": "这架子比你想的结实，只晃了晃，倒有一条咸鱼掉下来，正砸在你自己头上。",
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
  "title": "她这次还起来吗",
  "art": "ev_looming_death",
  "loc": "下卡斯托纳斯 · 空地北角的墙根",
  "text": [
   {
    "if": "flag.pa_dragged",
    "text": "你是让布兰多克拖到墙根下的，那两个兽人后来是怎么倒的，你没看见。他把你靠着墙放稳了，才转身看旁边那个人。"
   },
   {
    "if": "flag.pa_ran",
    "text": "那两个兽人最后是布兰多克和弩手放倒的。你刚才往后退的事，他一个字也没提。"
   },
   "十人队的伙头坐在墙根，背上还挂着行军锅。腹部那一斧伤得太重，他只好用双手按住伤口。",
   "他看见你们过来，先问布兰多克锅磕坏了没有，听说没坏，才问起他真正想问的事。",
   {
    "speaker": "伙头",
    "text": "上次在血腐阶梯，她也是这么倒下的。过了三个时辰，她自己站起来了，还跟我讨了口水喝。那三个时辰，我是一下一下数过来的。"
   },
   {
    "speaker": "伙头",
    "text": "那这次呢？她这次还起得来吗？"
   },
   "布兰多克答不上来，低下头去解水囊，解了很久也没解开。"
  ],
  "choices": [
   {
    "text": "安慰他，科琳上次就醒过来了",
    "effects": [
     "var lies +1",
     "flag p_lied"
    ],
    "result": "他说那他就等着。他把伤口又按紧了些，脸一直朝着空地那边，等了小半个时辰，人就没了。",
    "goto": "p_corintar_04"
   },
   {
    "text": "照实说你也不知道，上次等了三个时辰",
    "effects": [
     "flag p_truth"
    ],
    "result": "他想了想才说三个时辰他怕是等不到了，托你到时候替他看一眼。布兰多克把水囊塞到他手里，没再要回来。",
    "goto": "p_corintar_04"
   },
   {
    "text": "蹲下替他按住伤口",
    "effects": [
     "flag p_truth"
    ],
    "check": {
     "skill": "medicine",
     "dc": 12
    },
    "ok": {
     "text": "他多撑了一刻钟，把家里的住处告诉了你，在弗里塞斯提尔的难民营，北边第三排棚子。门口挂着半个车轮。他还说自己欠着房东两个月的柴火钱。",
     "effects": [
      "rep corintar +1"
     ],
     "goto": "p_corintar_04"
    },
    "fail": {
     "text": "血还是从你指缝里往外冒。他想把家里的住处告诉你，只说出“弗里塞斯提尔”和“第三排”，后面的话就没能说完。",
     "goto": "p_corintar_04"
    }
   },
   {
    "text": "按奈拉特的礼仪为他送行",
    "tag": "神职",
    "if": "is.divine",
    "effects": [
     "flag p_truth",
     "rep temples +1"
    ],
    "result": "念到“过秤”那一句，他插嘴问你，照这个规矩，她是不是也得过秤。你说人人都得过，他点点头，让你接着念。还剩两句没念完时，他咽了气。",
    "goto": "p_corintar_04"
   },
   {
    "text": "用手按住他的伤处",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine"
    ],
    "result": [
     "肠子自己缩了回去，伤口也合上了，连道疤都没留下。伙头低头看了好一会儿肚皮，问你这口锅往后还归不归他背。从这时起他就跟定了你，赶都赶不走，见人就讲墙根下这件事。",
     "才一炷香的时间，半条街的伤兵都被抬到了墙根下。你一直治到天黑也没治完。有个抬担架的问你，空地上躺着的那两位，你怎么不去救？"
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
   "你和另外三人合力把科琳从杜坎森身上抬开，轻放在披风上。她盾后的皮带早已开裂，这时终于断了。你低头一看，手里攥着半截皮带和两颗铆钉。",
   "守在她旁边的是温斯顿·愚足，一个从比佩克来的半身人行商，也是她身边的老伙伴。上次在血腐阶梯，守着她的尸首不让人碰的就是他。他看见了你手里那截盾带，却一句也没问。蓝牙站在十步开外，背对着这边。",
   "已经有三拨人来讨她的东西了，都想拿回去当圣物供着。第一批要一绺头发，第二拨要一片披风，第三拨是个边区兵，要的是那面盾。愚足说盾都裂了，那兵说裂的也行。",
   {
    "speaker": "温斯顿·愚足",
    "text": "坐吧。这是比佩克的蜂蜜腌肉，就剩这一块了，我们俩一人一半。吃完了帮我看着点，别让人动她的头发。"
   },
   {
    "speaker": "温斯顿·愚足",
    "text": "我问你，营里现在都怎么说？有没有人提要把她埋了？"
   },
   {
    "speaker": "讨头发的兵",
    "text": "我就要一绺，就一绺！我娘在阿巴兰的营里病着，让她贴身带着，或许能管用。"
   },
   {
    "if": "is.greenskin",
    "text": "要盾的那个边区兵一看见你的肤色，手先按到了刀把上。"
   },
   {
    "if": "is.greenskin",
    "speaker": "温斯顿·愚足",
    "text": "这位可是亲手抬过她的。你呢，你抬过谁？"
   },
   {
    "if": "flag.god_revealed",
    "text": "讨头发的那几个人里有人认出了你，说墙根下治伤的就是这一位。他们凑在一起商量了两句，改了口，问能不能要你的一绺头发。"
   },
   {
    "if": "flag.god_revealed",
    "speaker": "温斯顿·愚足",
    "text": "这位的头发也不给！都回去吃饭吧。"
   }
  ],
  "first": [
   "quest q_o_corintar start"
  ],
  "choices": [
   {
    "text": "问愚足这次还能不能听见那个声音",
    "once": true,
    "effects": [
     "flag pa_no_voice"
    ],
    "result": [
     {
      "speaker": "温斯顿·愚足",
      "text": "上次是有个声音，在我脑子里说她没走，让我别让人碰她。可这次我从晌午坐到现在，什么也没听见。"
     },
     "说完，他又把腌肉往你这边推了推。"
    ]
   },
   {
    "text": "挡在她身前，将几拨人劝退",
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
     "text": "你跟要盾的那个兵吵了起来，肋上还挨了他一肘子。趁这时候，有人从另一边伸手割走了一绺头发。愚足没去追，只把那人的长相记下了，左耳缺一块，说话是阿巴兰口音。",
     "effects": [
      "hp -2"
     ],
     "goto": "p_corintar_05"
    }
   },
   {
    "text": "把断带放回她的盾上",
    "if": "item.shield_strap",
    "effects": [
     "item -shield_strap",
     "rep corintar +1",
     "quest q_o_corintar done"
    ],
    "result": "你把皮带放回了那面裂盾上。愚足这才开口，说他刚才一直在等，你要是再不动，他就要自己开口跟你要了。",
    "goto": "p_corintar_05"
   },
   {
    "text": "收起断带，退出争执",
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
   "绞架峰的多米尼克带来一只验尸用的沙漏。他原是死神奈拉特的祭司，这只沙漏每次漏半个时辰。科琳上次死后三个时辰就醒了。沙漏翻到第六次，全军都望着她，她没有动。谁也不肯先走，于是又翻了六次。",
   "谁也没走，可也没人敢提下葬的事。到了后半夜，有人指着北边一颗亮星说那是兆头，布兰多克说那颗星每年这个月都在那里。他守了三十年的夜，认得。",
   "蓝牙在她旁边跪了整整一夜。天亮时，多米尼克把沙漏放倒，站起身。",
   {
    "if": "is.god",
    "text": "沙漏翻到第三次时，前排有人回头看你。后来回头的人越来越多。有个弩手小声跟旁边的人说，上次她是自己起来的。这次可有一位神在这里呢。"
   },
   {
    "speaker": "绞架峰的多米尼克",
    "text": "照奈拉特的规矩，人死了要过秤，看他这一辈子欠不欠。她的秤我替她看过了。她什么也不欠。"
   },
   {
    "speaker": "绞架峰的多米尼克",
    "text": "上次她是自己走回来的。这次她没有回来，是因为她往上去了，她升天了。"
   },
   "蓝牙站起身来，转身走了，没有回头。"
  ],
  "choices": [
   {
    "text": "随众人跪下",
    "effects": [
     "flag vigil_knelt",
     "rep corintar +1"
    ],
    "result": "你也跪了下去。前后左右的人一片接一片地跟着跪下，一直跪到了空地旁边。",
    "goto": "p_corintar_06"
   },
   {
    "text": "留在原地站着",
    "effects": [
     "rep companies +1"
    ],
    "result": "你站着没动。站着的不止你一个，钴蓝兵团那些佣兵就有大半没跪。他们的队长隔着人堆看见了你，朝你点点头。",
    "goto": "p_corintar_06"
   },
   {
    "text": "问多米尼克何以认定科琳升天",
    "check": {
     "skill": "insight",
     "dc": 12,
     "mods": [
      {
       "if": "flag.pa_no_voice",
       "n": 2,
       "why": "愚足说过，这次没有声音"
      },
      {
       "if": "is.divine",
       "n": 2,
       "why": "祭司这一行你也学过"
      }
     ]
    },
    "ok": {
     "text": "他答了一大套，说她的秤，又说阿格拉多斯欠下的债。可其中有一句他说得特别顺，像是背过一百遍，那就是“还可能起来的，不许下葬”。这是奈拉特验尸的老规矩。你听出来了，他不让埋，一半是因为信她升了天，另一半是给这条规矩捆住了手。",
     "effects": [
      "codex nerat_rule"
     ],
     "goto": "p_corintar_06"
    },
    "fail": {
     "text": "他没有回答，反过来问你那天站在第几排。你说第三排，他说那你看见的比他少。周围的人都转过脸来看你。",
     "effects": [
      "rep corintar -1"
     ],
     "goto": "p_corintar_06"
    }
   },
   {
    "text": "提出该让她下葬了",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "rep corintar -1",
     "rep companies +1",
     "codex nerat_rule"
    ],
    "result": [
     "你说该埋了，先让她入土，别的事往后再说。话一出口，前排好几个人回过头来瞪你。",
     {
      "speaker": "绞架峰的多米尼克",
      "text": "照奈拉特的规矩，还可能起来的不许下葬。你要是敢担保她起不来，这第一锹土就由你来铲。"
     },
     "你没有动，别人也没有动。"
    ],
    "goto": "p_corintar_06"
   },
   {
    "text": "说她凭自己挣来的功业无需旁人评判",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "effects": [
     "rep corintar +1",
     "rep temples -1"
    ],
    "result": "后排有人喊了一声好。多米尼克看了你一会儿，说挣来的也得过秤，秤总得有人看。他掏出一块蜡板，把你的话记了下来。",
    "goto": "p_corintar_06"
   },
   {
    "text": "试着唤她起身",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_tried_raise",
     "flag god_revealed",
     "rep corintar -2"
    ],
    "result": [
     "尸首真的坐了起来，眼睛是睁着的，可里面什么也没有。",
     "愚足扑上去，用整个身子把她按回地上，冲你喊“那不是她”。蓝牙的手已经握住了剑柄。从这天起，他再也不肯跟你单独待在一处。"
    ],
    "goto": "p_corintar_06"
   },
   {
    "text": "承认只有这件事你也做不到",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed"
    ],
    "result": "前排的人把脸转了回去。多米尼克掏出蜡板，把你这句话一个字一个字刻了上去，刻完才抬头问你：这一件是办不到，还是不许办？",
    "goto": "p_corintar_06"
   }
  ]
 },
 "p_corintar_06": {
  "id": "p_corintar_06",
  "title": "门板桌",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "各营队长争到天亮，只谈妥一件事。他们把旧集市的两只空酒桶滚过来，架起一块门板，就在科琳和杜坎森倒下的地方写了军令。",
   {
    "cls": "letter",
    "text": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。"
   },
   {
    "speaker": "科琳塔尔的队长",
    "text": "{pc}，你抬过她，就你去吧。"
   },
   {
    "if": "!flag.god_tried_raise",
    "text": "蓝牙隔着门板看了你一眼。{?flag.saw_her_look:你看见过她倒下之前朝他转过脸去，这件事他迟早要来问你。他多看了你一会儿，到底没有问。|只看了这一眼，他就把脸转开了。}"
   },
   {
    "if": "flag.god_tried_raise",
    "text": "蓝牙站在门板另一头，跟你隔着三个人。你往哪边挪一步，他就往另一边挪一步。"
   },
   {
    "if": "is.god",
    "text": "点到你时，桌边吵了起来。钴蓝兵团的队长冈瑟问，军令上写着各营出一人，神算一个人还是算一个营？要是算一个营，饷可得另算。大家吵了一刻钟也没吵出结果，书记照常在你名字后面记了个“一”。"
   },
   "运尸首的板车是从鱼贩子那里征来的，车板上还粘着鱼鳞。科琳那边围满了人，谁也不许动她，杜坎森这边却没人肯碰。只有一个兽人女人蹲在他旁边，拿一根打了结的皮绳量他的手指骨节。没人请她来，她是烂刀氏族的人，来给杜坎森做归尘礼的，也就是把骨头磨成粉，免得日后有人把他的尸首拉起来使唤。",
   {
    "speaker": "乌什卡",
    "text": "这副骨头粗，得磨上两天。"
   },
   {
    "if": "is.god",
    "text": "她量到一半停了手，盯着你看了一会儿。另一只手放到了腰后的锤子上。"
   },
   {
    "if": "is.god",
    "speaker": "乌什卡",
    "text": "不会死的我也见过。到头来，总得有人去把他放倒。"
   },
   "板车那头站着个小祭司，看样子只有十五六岁。天都亮了，他手里那盏灯还点着。",
   {
    "speaker": "阿坦",
    "text": "我叫阿坦，在万神道守着一座庙。这道军令就钉在我的庙门上，钉了四颗钉子。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "他们都说你是神。那我想问一句，王在哪里？"
   },
   {
    "if": "is.god",
    "text": "他说的王，是众神之王卡斯特洛斯。你答不上来。他等了片刻，点点头，像是早就料到了，然后说起他自己的事来。"
   },
   {
    "speaker": "阿坦",
    "text": "你们的车要出城，能不能顺路替我打听一件事？书上说，卡斯塔诺一有难，银龙就会来救。可兽人占了这座城二十年，他一次也没来。我想知道他为什么不来。"
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
    "text": "答应出城时替他打听",
    "effects": [
     "rep temples +1"
    ],
    "result": "他点点头，这才想起来把灯吹了。",
    "goto": "a1_01"
   },
   {
    "text": "说明自己只负责收殓死者",
    "effects": [
     "approval ushka +1"
    ],
    "result": "小祭司说这个他明白，所以才说是顺路。蹲着的那个兽人女人抬头看了你一眼，又低头量她的去了。",
    "goto": "a1_01"
   },
   {
    "text": "将断掉的盾带系上车辕",
    "if": "item.shield_strap",
    "effects": [
     "rep corintar +1",
     "approval ushka -1"
    ],
    "result": "你把盾带系在了车辕上。桌边有人朝它低下头。那个兽人女人看了看皮带，又看看你，低头继续量她的骨节。",
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
   "紫丁香战争是争夺鸽座（安本纳尔的皇位）的内战，在西边打了九十五年。你所在的达梅里亚之子站在月党一边，最终战败。你们的大公去年死在皇宫，少主罗吉尔装死躺进棺材，才逃出帝国。",
   "此刻，罗吉尔率流亡者守着北城的一条街，自己靠在门洞里翻兵书。这一带住着城里的世家。大门都用木板封住，门后却有人咳嗽，还有煮豆子的香味。",
   "达拉斯挨着你坐在台阶上补手套，针脚细得几乎看不出来。响了一上午的号角终于停了。特里斯坦夹着头盔跑进街口，带来了下城的战报。",
   {
    "speaker": "特里斯坦",
    "text": "下城有消息了！兽人大酋长杜坎森倒了，那个红头发的女扈从也没起来。她是替您外甥蓝牙挡的那一下。"
   },
   {
    "speaker": "流亡者罗吉尔",
    "text": "蓝牙呢？我外甥还活着吗？"
   },
   {
    "speaker": "特里斯坦",
    "text": "活着。他跪在她身边，谁劝也不起来。"
   },
   "罗吉尔合上了手里的兵书。"
  ],
  "first": [
   "codex greentide",
   "codex lilac_wars"
  ],
  "choices": [
   {
    "text": "贴近门板看看住着什么人",
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
     "text": "门楣上的第一个古字你认识。“萨什”，抄写的人。这家人世代修史，兽人占城的二十年也没离开。你隔着木板报出营号，告诉他们今晚有人守街。门下悄悄推出来半块豆饼。",
     "effects": [
      "codex patricians",
      "rep league +1",
      "flag pa_door_friend"
     ],
     "goto": "p_sons_02"
    },
    "fail": {
     "text": "那排古字你一个也认不出。正想凑近细看，木板缝里伸出一根烧火棍，戳中了你的肋骨。",
     "effects": [
      "hp -1"
     ],
     "goto": "p_sons_02"
    }
   },
   {
    "text": "报出家名，请主人相见",
    "tag": "贵族",
    "if": "is.noble",
    "effects": [
     "codex patricians",
     "rep league +1",
     "flag pa_door_friend"
    ],
    "result": "过了许久，门里才有个老太太用缓慢的通用语答道：“这条街上一次来客人，还是二十年前。”她没开正门。你听到后窗落闩，随即是搬东西上楼的声音。",
    "goto": "p_sons_02"
   },
   {
    "text": "问罗吉尔下一步的打算",
    "effects": [
     "gold +5"
    ],
    "result": [
     {
      "speaker": "流亡者罗吉尔",
      "text": "先给弟兄们找个过夜的地方。饷欠了三个月，我知道。今天先给五个金冠，余下的我再想办法。"
     },
     "罗吉尔说完，目光又落回手中的书页。"
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
   "傍晚来了几个散兵，穿着五六个团的号衣，袖标却都撕了。两个瘦子去撬第三户的门，一个提钉头棒的大个子留在街心望风。",
   "撬棍别进了门缝，木板吱的一声。门里有个小孩刚哭出半声，就被大人捂住了嘴。这条街上的人家在兽人眼前躲了二十年，这种事早就做熟了。",
   "达拉斯放下手套，悄悄站了起来。",
   {
    "if": "flag.pa_door_friend",
    "text": "第三家正是下午给你推豆饼的那一家，二楼的窗板后面有人在挪东西。"
   },
   {
    "speaker": "提钉头棒的",
    "text": "弟兄，咱们各发各的财。这条街上的东西，又没写着你们达梅里亚的名字。"
   }
  ],
  "choices": [
   {
    "text": "出示银月徽，以罗吉尔名义交涉",
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "mods": [
      {
       "if": "rep.companies >= 2",
       "n": 1,
       "why": "冒险团里有人认得你"
      }
     ]
    },
    "ok": {
     "text": "你只报了一句“达梅里亚之子，这是罗吉尔守的街”。大个子看了看徽，又看了看达拉斯手里那把窄刀，往地上啐了一口，带着人走了，撬棍就扔在门槛上。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "“罗吉尔？公文上不是说他死了吗？”大个子笑了起来，“死人的街，那就更用不着客气了。”",
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒拍在掌心，两个瘦子扔下撬棍，从腰后抽刀。",
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
        "desc": "街口停着一辆水车，下面正好是斜坡。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去。三个人被冲得东倒西歪，大个子的棒子也脱了手。",
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
        "name": "朝楼上喊：守街的在这里",
        "desc": "让躲在屋里的人听见，门外还有人愿意帮忙。成功时，所有敌人受到 2d4 点火焰伤害。",
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
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心泼了下来。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有。这条街上的人躲了二十年，不管谁在外面喊，都不会开窗。"
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
    "text": "报出姓名封号，询问他们的部队",
    "tag": "贵族",
    "if": "is.noble",
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "你把全名连着封号报了一遍，又问他们的队长是哪一位，说明天好登门拜访。三个人里有两个不由自主地站直了，走的时候还有一个回头行了半个礼。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "“爵爷。”大个子学着你的腔调鞠了一躬，可他一直起腰，棒子就抡过来了。",
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒拍在掌心，两个瘦子扔下撬棍，从腰后抽刀。",
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
        "desc": "街口停着一辆水车，下面正好是斜坡。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去。三个人被冲得东倒西歪，大个子的棒子也脱了手。",
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
        "name": "朝楼上喊：守街的在这里",
        "desc": "让躲在屋里的人听见，门外还有人愿意帮忙。成功时，所有敌人受到 2d4 点火焰伤害。",
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
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心泼了下来。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有。这条街上的人躲了二十年，不管谁在外面喊，都不会开窗。"
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
    "text": "在他们脚边放个响声法术",
    "tag": "施法者",
    "if": "is.caster",
    "check": {
     "skill": "arcana",
     "dc": 11
    },
    "ok": {
     "text": "撬棍头上炸开了一团蓝火，响得整条街的木板都在抖。他们撒腿就跑，连撬棍都没顾上拿。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "只冒出来几点火星。大个子低头看看，又抬头看看你，提着棒子走了过来。",
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒拍在掌心，两个瘦子扔下撬棍，从腰后抽刀。",
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
        "desc": "街口停着一辆水车，下面正好是斜坡。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去。三个人被冲得东倒西歪，大个子的棒子也脱了手。",
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
        "name": "朝楼上喊：守街的在这里",
        "desc": "让躲在屋里的人听见，门外还有人愿意帮忙。成功时，所有敌人受到 2d4 点火焰伤害。",
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
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心泼了下来。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有。这条街上的人躲了二十年，不管谁在外面喊，都不会开窗。"
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
    "text": "趁机从狗洞进去，在屋内顶住门",
    "tag": "矮个子",
    "if": "is.small",
    "check": {
     "skill": "stealth",
     "dc": 10
    },
    "ok": {
     "text": "门里的人先是吓了一跳，随后七八只手一齐上来帮你搬柜子顶门。外面撬了一刻钟也没撬动，只好骂骂咧咧地走了。门里有人往你手里塞了半块豆饼。",
     "effects": [
      "xp 25",
      "rep league +1"
     ],
     "goto": "p_sons_03"
    },
    "fail": {
     "text": "你钻到一半就卡住了，瘦的那个抓住你的脚，把你拽了出来。",
     "effects": [
      "hp -1"
     ],
     "combat": {
      "title": "撬门的",
      "intro": "大个子把钉头棒拍在掌心，两个瘦子扔下撬棍，从腰后抽刀。",
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
        "desc": "街口停着一辆水车，下面正好是斜坡。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 11
        },
        "success": {
         "text": "水车翻了，半车水带着木桶哗哗地冲下坡去。三个人被冲得东倒西歪，大个子的棒子也脱了手。",
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
        "name": "朝楼上喊：守街的在这里",
        "desc": "让躲在屋里的人听见，门外还有人愿意帮忙。成功时，所有敌人受到 2d4 点火焰伤害。",
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
         "text": "二楼的窗板开了一条缝，一锅滚水照着街心泼了下来。",
         "dmgAll": "2d4",
         "type": "fire"
        },
        "fail": {
         "text": "楼上一点动静也没有。这条街上的人躲了二十年，不管谁在外面喊，都不会开窗。"
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
    "text": "拔剑阻止劫掠",
    "combat": {
     "title": "撬门的",
     "intro": "大个子把钉头棒拍在掌心，两个瘦子扔下撬棍，从腰后抽刀。",
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
       "desc": "街口停着一辆水车，下面正好是斜坡。成功时，所有敌人受到 1d6 点钝击伤害，并陷入「倒地」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 11
       },
       "success": {
        "text": "水车翻了，半车水带着木桶哗哗地冲下坡去。三个人被冲得东倒西歪，大个子的棒子也脱了手。",
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
       "name": "朝楼上喊：守街的在这里",
       "desc": "让躲在屋里的人听见，门外还有人愿意帮忙。成功时，所有敌人受到 2d4 点火焰伤害。",
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
        "text": "二楼的窗板开了一条缝，一锅滚水照着街心泼了下来。",
        "dmgAll": "2d4",
        "type": "fire"
       },
       "fail": {
        "text": "楼上一点动静也没有。这条街上的人躲了二十年，不管谁在外面喊，都不会开窗。"
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
    "text": "你后脑勺上挨的那一棍到现在还在疼，钱袋也少了五个金冠。好在门没让人撬开，是达拉斯一个人守住的。"
   },
   "军士长在清街时腹部中斧，弟兄们抬他到街角的门廊，让他枕着自己的盾。廊那端躺着十七岁的旗手，一箭穿胸，已经没力气说话。",
   "达拉斯蹲在旁边，拿一根线绳量军士长的肩宽。队里的寿衣向来是他缝的，军士长人还醒着，就这么看着他量。",
   {
    "speaker": "军士长",
    "text": "量准点，我肩膀宽，上次发的号衣就窄了。"
   },
   {
    "speaker": "军士长",
    "text": "我求你一件事。把我埋回老家月神之耳去，得挑个有月亮的晚上埋，没月亮的不算。"
   },
   {
    "if": "subrace == 'damerian'",
    "text": "他听出了你的口音，又添了半句，说你也是那边的人，岸上那片坡你是知道的。"
   }
  ],
  "choices": [
   {
    "text": "应下他的请求",
    "effects": [
     "flag urn_promised",
     "flag p_truth",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": "“好，那我就不急了。”他说。可他没能撑到掌灯。弟兄们夜里在街心把他火化了，达拉斯缝了一只装骨灰的袋子，这只袋子归你带着。",
    "goto": "p_sons_04"
   },
   {
    "text": "安慰他等打回去就能自己走回家",
    "effects": [
     "var lies +1",
     "flag p_lied",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": "他笑了一下，说那可太好了，回去第一件事就是喝一壶家里的茶。可他没能撑到掌灯。弟兄们夜里在街心把他火化了，达拉斯缝了一只装骨灰的袋子，归你带着。",
    "goto": "p_sons_04"
   },
   {
    "text": "告诉他月神之耳已被威克斯和魔导院瓜分",
    "effects": [
     "flag p_truth",
     "item +sergeant_urn",
     "quest q_o_sons start"
    ],
    "result": "他过了很久才开口，说分给谁都行，坡还是那片坡，月亮也不归威克斯管。他没能撑到掌灯。弟兄们夜里在街心把他火化了，达拉斯缝了一只装骨灰的袋子，归你带着。",
    "goto": "p_sons_04"
   },
   {
    "text": "用手按住他的伤处",
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
      "text": "先治那个小的，旗手才十七。我这把岁数了，不跟他抢。"
     },
     "你把手放到那孩子的胸口上，箭自己退了出来，伤口也合上了。他坐了起来，从此就跟定了你，赶都赶不走，逢人就讲这件事。才一炷香的时间，半条街的伤兵都被抬到了门廊下面。",
     "你一直治到后半夜也没治完。等你再转回来，军士长已经死了，达拉斯把缝好的骨灰袋交到了你手里。抬担架的人问你，下城空地上那两位，你怎么不去救？"
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
   "一个四十来岁的威克斯人趁点灯时来到街口，灰斗篷下露出紫袍，颈间挂着帝国印信。他手持名册和炭笔，逢人先欠身行礼。",
   "他是替皇帝来清点人数的，数一个，画一道。麻烦的是罗吉尔就在三十步外的门洞里借着火把看书。帝国悬赏要他的脑袋，对外又说他已经死了，而他那头银发隔着半条街都认得出来。",
   {
    "speaker": "威克斯的书办",
    "text": "打扰了。贵部路过阿巴兰的时候，册子上登记的是一千一百四十人。我只数人头，不问名字，数完了好销册。"
   },
   {
    "speaker": "威克斯的书办",
    "text": "另外还有一位先生，公文上写的是去年过世了。照例我得问一句，他现在还是过世的吧？"
   },
   {
    "if": "is.god",
    "text": "数到你时，他的炭笔停住了。他翻回册子第一页，想找找该把神记在哪一栏，没找着，只好先空了一行。"
   }
  ],
  "choices": [
   {
    "text": "挡住他的目光，聊阿巴兰的马肉",
    "check": {
     "skill": "deception",
     "dc": 12
    },
    "ok": {
     "text": "你问他阿巴兰西边是不是真的吃马肉。他认真答了一刻钟。等他想起来还得接着数，门洞里早就没人了。",
     "effects": [
      "rep moon +1"
     ],
     "goto": "p_sons_05"
    },
    "fail": {
     "text": "他很有礼貌地听你说完，然后往左挪了一步，越过你的肩膀朝门洞看了一眼，在册子最后一页添了一道。罗吉尔还活着这件事，他记下了。",
     "effects": [
      "flag rogier_counted",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "p_sons_05"
    }
   },
   {
    "text": "明说这条街不欢迎清点人数",
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
     "text": "他看看你的手，又看了看达拉斯的手，把册子合上了，说那他明天白天再来。第二天他没有来。",
     "effects": [
      "rep moon +1",
      "flag pa_clerk_left"
     ],
     "goto": "p_sons_05"
    },
    "fail": {
     "text": "“欢不欢迎的，册子总得销啊。”他说这话的时候，已经把门洞里的人看在眼里了，临走还朝那边欠了欠身。罗吉尔还活着这件事，他记下了。",
     "effects": [
      "flag rogier_counted",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "p_sons_05"
    }
   },
   {
    "text": "指出公文上已死的人不该计入",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "check": {
     "skill": "persuasion",
     "dc": 10
    },
    "ok": {
     "text": "你请他把公文念一遍，念到“已故”两个字，你说既然公文上写的是已故，这一位就不归他这本册子管。他想了想才说在理，名分上的事不能乱，就在那一格里写上了“已故，不计”。",
     "effects": [
      "rep moon +1"
     ],
     "goto": "p_sons_05"
    },
    "fail": {
     "text": "他说公文是公文，人头是人头，这是两码事，说完就把门洞里那一位记进了人头册。",
     "effects": [
      "flag rogier_counted",
      "rep throne +1",
      "rep moon -1"
     ],
     "goto": "p_sons_05"
    }
   },
   {
    "text": "准许他清点人数",
    "effects": [
     "flag rogier_counted",
     "rep throne +1",
     "rep moon -1"
    ],
    "result": "他数完，向你道了谢，在最后一页添了一道，旁边注了“在世”两个小字。",
    "goto": "p_sons_05"
   }
  ]
 },
 "p_sons_05": {
  "id": "p_sons_05",
  "title": "跪不跪",
  "loc": "北卡斯托纳斯 · 世家的街",
  "text": [
   "军士长的柴堆在街心烧着。你隔着银瀑往下望，下城空地也有一圈火。全军都守在那里，等科琳像上次那样再站起来。",
   "柴是拆了一户空屋的门板劈的，门板背面还刻着给小孩量个子的道道，最上面那一道停在二十年前。",
   "罗吉尔合上书走了过来，在柴堆旁边站了一会儿。特里斯坦拿着斗篷跟在后面，他没接。",
   {
    "speaker": "流亡者罗吉尔",
    "text": "弟兄们里面有想下去跪她的，也有不想去的。可跪在她旁边的那个半兽人是我外甥。这个主意由我来拿，怎么拿都不合适。"
   },
   {
    "speaker": "流亡者罗吉尔",
    "text": "军士长不在了，这一队现在你说了算，你来定吧。"
   },
   {
    "if": "is.god",
    "speaker": "流亡者罗吉尔",
    "text": "还有一件事。弟兄们里有人来问我，到底该跪她，还是该跪你。这个我就更不好开口了。"
   }
  ],
  "choices": [
   {
    "text": "带所有弟兄下去",
    "effects": [
     "flag sons_knelt",
     "rep corintar +1"
    ],
    "result": "四十来个人排成两列下了坡，在火圈外面跪了一排。科琳塔尔的人往两边让了让，给你们腾出一块地方。",
    "goto": "p_sons_06"
   },
   {
    "text": "让弟兄们留下，把剑留给达梅里亚",
    "effects": [
     "rep moon +1"
    ],
    "result": "没有人争。有两个年轻的朝坡下望了很久，后来还是回到柴堆边添柴去了。特里斯坦把斗篷披到罗吉尔肩上，这次他没躲。",
    "goto": "p_sons_06"
   },
   {
    "text": "独自下去",
    "effects": [
     "item +halfling_pie"
    ],
    "result": "你在火圈最外面站了半个时辰。守在她旁边的那个半身人隔着三排人看见了你的蓝罩袍，托人传过来一块肉派，还捎了句话，说站着的也得吃东西。",
    "goto": "p_sons_06"
   },
   {
    "text": "告诉弟兄们蓝牙是大公外孙，跪的是自家人",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "effects": [
     "flag sons_knelt",
     "rep corintar +1",
     "rep moon +1"
    ],
    "result": "这话一说，连不想去的那几个也没话讲了。下坡的路上有人小声排起了辈分，排到最后才发现，论血缘，那个半兽人比在场的谁都更靠近西尔穆纳家的正支。",
    "goto": "p_sons_06"
   },
   {
    "text": "请弟兄们举手，各选去留",
    "tag": "无冕",
    "if": "faction == 'crownless'",
    "effects": [
     "flag sons_knelt",
     "rep corintar +1",
     "rep companies +1"
    ],
    "result": "举手的结果是二十三比十九。要去的下了坡，留下的替他们看着铺盖和柴堆。罗吉尔从头看到尾，说他父亲的营里可从来没举过手。",
    "goto": "p_sons_06"
   },
   {
    "text": "吩咐全队不必跪下",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed",
     "rep throne -1"
    ],
    "result": [
     "弟兄们你看看我，我看看你，都站着没动，也没人下坡。罗吉尔点点头，回门洞里看书去了。",
     "{?flag.pa_clerk_left:被你撵走的那个威克斯书办并没有走远，就蹲在坡顶的台阶上。|街口那个威克斯书办还没走。}他翻开册子，在最后一页添了一行字，写的是“神，一位，待核”。"
    ],
    "goto": "p_sons_06"
   }
  ]
 },
 "p_sons_06": {
  "id": "p_sons_06",
  "title": "门板桌",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "天亮，科琳仍躺在原处。各营队长在下城用酒桶和门板搭了张桌子。争了一夜，他们终于同意在一道军令上签字。",
   {
    "cls": "letter",
    "text": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。"
   },
   {
    "speaker": "流亡者罗吉尔",
    "text": "我这边出{pc}。{ta}身上本来就带着军士长的骨灰，再多收几位也是顺手。"
   },
   {
    "if": "flag.rogier_counted",
    "speaker": "流亡者罗吉尔",
    "text": "昨晚那本册子把我记成了活人。一千金冠的赏格，迟早有人来领。你走了也好，省得到时候连累你。"
   },
   "达拉斯留在队里。临走前，他把军士长的骨灰袋要了过去，在袋口又缝了一道。",
   {
    "if": "is.god",
    "text": "伯爵联盟的人问这位神算哪个营的，罗吉尔说算他的，昨晚替他守过一条街。这一来就没人再问了，书记在你的名字后面照常记了个“一”。"
   },
   "运尸首的板车就停在桌边，车板上还粘着鱼鳞。科琳那边围满了人，谁也不许动她，杜坎森这边却没人肯碰。只有一个兽人女人蹲在他旁边，拿一根打了结的皮绳量他的手指骨节。没人请她来，她是烂刀氏族的人，来给杜坎森做归尘礼的，也就是把骨头磨成粉，免得日后有人把他的尸首拉起来使唤。",
   {
    "speaker": "乌什卡",
    "text": "这副骨头粗，得磨上两天。"
   },
   {
    "if": "is.god",
    "text": "她抬头看见了你，手停住了。另一只手放到了腰后的锤子上。"
   },
   {
    "if": "is.god",
    "speaker": "乌什卡",
    "text": "不会死的我也见过。到头来，总得有人去把他放倒。"
   },
   "车边站着个小祭司，看样子只有十五六岁。天都亮了，他手里的灯还点着。",
   {
    "speaker": "阿坦",
    "text": "我叫阿坦，在万神道守着一座庙。他们把军令钉在了我的庙门上，钉子还是从我门框上拔的。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "街上都说你是神。那我想问一句，王在哪里？"
   },
   {
    "if": "is.god",
    "text": "他说的王，是众神之王卡斯特洛斯。你答不上来，他也没再追问。"
   },
   {
    "speaker": "阿坦",
    "text": "听说这辆车要出城，能不能顺路替我打听一件事？书上说，卡斯塔诺一有难，银龙就会来救。城破那年人人都求过他，可二十年了，他一直没来。我想知道为什么？"
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
    "text": "答应路上替他问问",
    "effects": [
     "rep temples +1"
    ],
    "result": "他道了谢，又说不会让你白问，往后车上的人到他庙里歇脚，一概不收香火钱。不过那座庙没有屋顶，他先跟你说明。",
    "goto": "a1_01"
   },
   {
    "text": "说明你还要送骨灰，神的事只能排后",
    "effects": [
     "approval ushka +1"
    ],
    "result": "小祭司看看你的包，说不急，顺路问问就行。量骨节的那个兽人女人抬头看了你一眼，又低下头去。",
    "goto": "a1_01"
   },
   {
    "text": "把银月徽固定在车辕上",
    "if": "item.moon_badge",
    "effects": [
     "rep moon +1",
     "rep throne -1"
    ],
    "result": "徽刚别上去，桌边钴蓝兵团的人就吹了声口哨，说西边的恩怨带到东边来了。罗吉尔远远看见了，没说行，也没说不行。",
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
   "紫丁香战争是争夺鸽座（安本纳尔的皇位）的内战，打了九十五年，最后是威克斯赢了。去年，你的皇帝在都城安本科斯特的王座厅亲口宣称，今后由威克斯说了算。你是替他办差的密探。",
   "皇帝的谋主巴兹伍德替他掌管密探，这次的差事就写在他的信里，封蜡上印着一只闭眼。命令只有一行。数完之后怎么办，他没有交代。",
   {
    "cls": "letter",
    "text": "查清卡斯托纳斯共有几座城门，每座门归谁守。"
   },
   "你趴在峭壁区一栋五层楼的屋顶上。奥托格在下面扶梯子。他是三卫出身的大剑手，口风很紧，一双手却抖得厉害。你脚下的梯子也跟着颤。",
   "从屋顶能看见下城旧集市。半兽人倒在地上，红头发的女人举盾护着他。盾裂了，她和兽人大酋长杜坎森一起倒下，再没起来。奥托格在下面问谁赢了。你说，谁也没赢。",
   {
    "speaker": "桥屯的奥托格",
    "text": "去年皇宫出事那一晚，你在哪里？这句话我一直没问。"
   }
  ],
  "first": [
   "codex greentide",
   "codex lilac_wars"
  ],
  "choices": [
   {
    "text": "说你当时排在后面，事后在花园挖了一夜的坑",
    "once": true,
    "if": "!flag.pa_palace_answered",
    "effects": [
     "flag dug_the_pit",
     "flag pa_palace_answered"
    ],
    "result": "梯子不抖了。过了好一会儿，他才从下面答你：“那你就什么也没看见。”去年上面交代你的，恰好也是这几个字。"
   },
   {
    "text": "说那晚你在紫庭清点人数",
    "once": true,
    "if": "!flag.pa_palace_answered",
    "effects": [
     "flag pa_palace_answered",
     "flag pa_clerk"
    ],
    "result": "“原来是来数门。那你继续，我扶稳点。”他显然松了口气。你脚下的梯子也没刚才抖得厉害了。"
   },
   {
    "text": "略过这段往事",
    "once": true,
    "if": "!flag.pa_palace_answered",
    "effects": [
     "flag pa_palace_answered",
     "rep throne +1"
    ],
    "result": "“不提也好。”后来向紫庭回话时，他也提到了你。评语只有四个字：“此人嘴严。”"
   },
   {
    "text": "清点南城和下城各门的旗帜",
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
     "text": "南城两门归钴蓝兵团。下城的水门无人把守，连门扇都早被兽人拆去烧了。离集市空地最近的门挂着科琳塔尔的旗。你一一记下。剩下北城那座，被焦塔遮住了，得到近处才能确认。",
     "effects": [
      "flag pa_gates_counted"
     ],
     "goto": "p_wex_02"
    },
    "fail": {
     "text": "烟遮住南城，你只数出个大概。你探身再看，瓦片一滑，幸好檐角的滴水兽钩住了你。北城那座门还得亲自去一趟。",
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
   "三楼拐角，三个逃兵凑着一截蜡烛分赃，抢来的一袋银器倒在地上。他们来自不同的团，袖上的识别标记都撕掉了。",
   "他们一抬头，看见了你和奥托格。奥托格的手不抖了，他这双手只有握着剑的时候才不抖。",
   {
    "speaker": "逃兵",
    "text": "楼上还有人？真晦气。弟兄，见者有份，一人拿一把汤匙，就当谁也没看见谁，行不行？"
   }
  ],
  "choices": [
   {
    "text": "出示火漆封缄的信",
    "effects": [
     "flag letter_shown"
    ],
    "check": {
     "skill": "intimidation",
     "dc": 12,
     "adv": true
    },
    "ok": {
     "text": "三个人里有一个认得火漆上那只闭着的眼睛，知道那是皇帝身边的人用的。他抓起烛台，想了想又放下了。三个人贴着墙根下了楼，银器一件也没敢带。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_wex_03"
    },
    "fail": {
     "text": "“眼睛？”领头的凑过来看了看火漆，“管它是谁的眼睛，这城里又没有皇帝。”说完他把蜡烛吹灭了。",
     "combat": {
      "title": "楼梯上的逃兵",
      "intro": "蜡烛一灭，只剩窗缝漏进的一线光，恰好照亮散在楼梯上的银器。",
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
        "desc": "楼梯上的逃兵更在意那袋银器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 10
        },
        "success": {
         "text": "袋子滚了下去，银盘子一级一级地响。三个逃兵全扭头去追，把后背亮给了你们。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "袋子比你想的沉，你这一脚还正踢在了烛台尖上。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "high",
        "name": "抢上两级台阶，居高往下踹",
        "desc": "楼梯很窄，每次只能上来一个人。成功时，所有敌人受到 1d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "acrobatics",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一起带了下去。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "你一脚踩在了银盘子上，自己先滑倒了。",
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
    "text": "摆出三卫剑馆的架势",
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
     "text": "双手握柄，剑尖朝后，这是威克斯三卫剑馆教的第一个架势。领头的在紫丁香战争里见过这个架势，也见过摆这个架势的人是怎么杀人的。三个人走得很快。",
     "effects": [
      "xp 25"
     ],
     "goto": "p_wex_03"
    },
    "fail": {
     "text": "架势是摆出来了，可楼梯太窄，剑尖磕在了墙上。三个人都看着你，有一个还笑出了声。",
     "combat": {
      "title": "楼梯上的逃兵",
      "intro": "蜡烛一灭，只剩窗缝漏进的一线光，恰好照亮散在楼梯上的银器。",
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
        "desc": "楼梯上的逃兵更在意那袋银器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 10
        },
        "success": {
         "text": "袋子滚了下去，银盘子一级一级地响。三个逃兵全扭头去追，把后背亮给了你们。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "袋子比你想的沉，你这一脚还正踢在了烛台尖上。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "high",
        "name": "抢上两级台阶，居高往下踹",
        "desc": "楼梯很窄，每次只能上来一个人。成功时，所有敌人受到 1d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "acrobatics",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一起带了下去。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "你一脚踩在了银盘子上，自己先滑倒了。",
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
    "text": "用银器换他们让路，承诺不揭发",
    "check": {
     "skill": "persuasion",
     "alt": [
      "deception"
     ],
     "dc": 11
    },
    "ok": {
     "text": "成交了。他们硬塞给你一把汤匙，说这是规矩，拿了才算同伙。奥托格的那一把，他没接。",
     "effects": [
      "gold +3"
     ],
     "goto": "p_wex_03"
    },
    "fail": {
     "text": "“没来过？”领头的看看你的靴子，“钉铁掌的，这是威克斯的官靴。今天放你下去，明天来的就是一队人了。”",
     "combat": {
      "title": "楼梯上的逃兵",
      "intro": "蜡烛一灭，只剩窗缝漏进的一线光，恰好照亮散在楼梯上的银器。",
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
        "desc": "楼梯上的逃兵更在意那袋银器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "athletics",
         "dc": 10
        },
        "success": {
         "text": "袋子滚了下去，银盘子一级一级地响。三个逃兵全扭头去追，把后背亮给了你们。",
         "applyAll": {
          "cond": "stunned",
          "turns": 1
         }
        },
        "fail": {
         "text": "袋子比你想的沉，你这一脚还正踢在了烛台尖上。",
         "selfDmg": "1d4"
        }
       },
       {
        "id": "high",
        "name": "抢上两级台阶，居高往下踹",
        "desc": "楼梯很窄，每次只能上来一个人。成功时，所有敌人受到 1d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
        "check": {
         "skill": "acrobatics",
         "alt": [
          "athletics"
         ],
         "dc": 11
        },
        "success": {
         "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一起带了下去。",
         "dmgAll": "1d6",
         "type": "bludgeoning"
        },
        "fail": {
         "text": "你一脚踩在了银盘子上，自己先滑倒了。",
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
    "text": "先吹灭照明的蜡烛",
    "tag": "夜视",
    "if": "is.darkvision",
    "result": "楼梯间一下黑了，你看得见他们，他们却看不见你，离你最近的那个还在摸刀，就已经被你放倒了。",
    "combat": {
     "title": "楼梯上的逃兵",
     "intro": "黑暗中有人踢翻烛台。余下两人背靠背站着，握刀四下探找。",
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
       "desc": "楼梯上的逃兵更在意那袋银器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 10
       },
       "success": {
        "text": "袋子滚了下去，银盘子一级一级地响。三个逃兵全扭头去追，把后背亮给了你们。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "袋子比你想的沉，你这一脚还正踢在了烛台尖上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "high",
       "name": "抢上两级台阶，居高往下踹",
       "desc": "楼梯很窄，每次只能上来一个人。成功时，所有敌人受到 1d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 11
       },
       "success": {
        "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一起带了下去。",
        "dmgAll": "1d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "你一脚踩在了银盘子上，自己先滑倒了。",
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
    "text": "拔剑对付楼梯上的逃兵",
    "combat": {
     "title": "楼梯上的逃兵",
     "intro": "蜡烛一灭，只剩窗缝漏进的一线光，恰好照亮散在楼梯上的银器。",
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
       "desc": "楼梯上的逃兵更在意那袋银器。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 10
       },
       "success": {
        "text": "袋子滚了下去，银盘子一级一级地响。三个逃兵全扭头去追，把后背亮给了你们。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "袋子比你想的沉，你这一脚还正踢在了烛台尖上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "high",
       "name": "抢上两级台阶，居高往下踹",
       "desc": "楼梯很窄，每次只能上来一个人。成功时，所有敌人受到 1d6 点钝击伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 11
       },
       "success": {
        "text": "你一脚蹬在领头那个的胸口上，他往后一倒，把后面两个也一起带了下去。",
        "dmgAll": "1d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "你一脚踩在了银盘子上，自己先滑倒了。",
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
    "text": "你是让奥托格架着下楼的。银器没了，逃兵也跑了。好在怀里的信还在，火漆也没碎。"
   },
   {
    "if": "flag.pa_silver",
    "text": "那袋银器找不到失主了，奥托格就照老规矩分了。你那一份折下来是十五个金冠。只有那把刻着古字的梳子他单独包了起来，没算进去。"
   },
   "楼下饮马槽旁靠着个伤兵，袖子有钴蓝兵团的标记，脚上却是威克斯铁掌靴。他把头盔按在腹部，血仍从盔沿渗出来。",
   "他先认出了奥托格身上那身威克斯的紫号衣。",
   {
    "speaker": "钴蓝兵团的佣兵",
    "text": "三卫的？我也是威克斯人。我出来给加韦德人当佣兵，结果他们新上来的小国王说，人是他爹雇的，饷不归他发。"
   },
   {
    "speaker": "钴蓝兵团的佣兵",
    "text": "你们是皇帝派来的吧？皇帝也是咱们威克斯自己的大公，他知不知道我们这些人在这里？"
   },
   {
    "if": "subrace == 'alenic'",
    "text": "他说的是艾伦河那边的土话，跟你小时候听惯的是一个调。"
   }
  ],
  "choices": [
   {
    "text": "告诉他皇帝知道，还问过他们营的事",
    "effects": [
     "var lies +1",
     "flag p_lied"
    ],
    "result": "“问起过？”他把头盔按得更紧了些，“那就不算白来。”他让奥托格替他把靴子摆正，靴尖朝西边，朝着威克斯。",
    "goto": "p_wex_04"
   },
   {
    "text": "告诉他皇帝不知情，你就是来调查的",
    "effects": [
     "flag p_truth"
    ],
    "result": "他笑了一声，笑得岔了气，说那你数吧，数清楚点，别把我数漏了。奥托格解下自己的斗篷给他盖上，手抖得连扣子都系不上。",
    "goto": "p_wex_04"
   },
   {
    "text": "问清他的姓名，写进报告",
    "effects": [
     "flag p_truth",
     "flag pa_name_taken",
     "rep companies +1"
    ],
    "result": "他把名字报了两遍，连村子和他父亲的名字都报了，生怕你写错。你一一记在了信纸背面，旁边两个钴蓝兵团的人一直看着你写完。",
    "goto": "p_wex_04"
   },
   {
    "text": "按奈拉特的礼仪为他送行",
    "tag": "神职",
    "if": "is.divine",
    "effects": [
     "flag p_truth",
     "rep temples +1"
    ],
    "result": "他才听了两句就打断你，问念这个要不要钱。你说不要，他说那你念慢点，整段的他还是第一次听。",
    "goto": "p_wex_04"
   },
   {
    "text": "用手按住他的伤处",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag p_truth",
     "flag god_revealed",
     "flag god_shrine"
    ],
    "result": [
     "头盔下面的伤口合上了。他坐起来，把头盔戴回头上，开口第一句话就问你归哪个营发饷。从这时起他就跟着你了，赶也赶不走，逢人就讲水槽边的事。",
     "才一炷香的时间，半条街的伤兵都被抬到了水槽边。你治到天快黑也没治完。抬担架的人问你，空地上那两位，你怎么不去救？"
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
   "要数清北城的门，得走到近前。唯一的路是银瀑上的石桥。全城的污水都流过这道瀑布，下城居民叫它“粪瀑”。",
   "桥由一队人把守，个个穿蓝罩袍，胸口别着银月徽。他们是达梅里亚之子，紫丁香战争里输给你们的那一边。领头的坐在桥栏上看书，没戴头盔，一头银发。你认得这张脸，帝国的告示上画过，下面写着“一千金冠，死活不论”。他是达梅里亚的少主罗吉尔，照公文上说，他去年就死了。",
   "他旁边站着个高个子骑士，手一直没离开过剑把。",
   {
    "if": "is.god",
    "text": "你一走上桥，桥栏上那位第一次从书上抬眼。高个子骑士的手也从剑柄上拿开了，一时不知道该往哪里放。"
   },
   {
    "speaker": "特里斯坦",
    "text": "过桥的先报营号！你是哪个团的？"
   }
  ],
  "choices": [
   {
    "text": "低头冒报别营番号过桥",
    "result": "你报了钴蓝兵团。高个子看了一眼你的靴子，倒也没拦。桥栏上那位从头到尾没抬头。他带了多少人，你也没敢回头去数。",
    "goto": "p_wex_05"
   },
   {
    "text": "告诉罗吉尔下城那个半兽人就是他活着的外甥",
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
      "你把在屋顶上看见的都讲了，那面盾，那把剑，还有那个半兽人后来自己坐了起来。他合上书听你讲完，然后告诉你，北边第二条巷子里没有乱兵，可以走。",
      {
       "speaker": "流亡者罗吉尔",
       "text": "替我问候巴兹伍德先生。你告诉他，我装死装得很像，他学生挂的那份赏格白挂了一年。"
      },
      "过桥时，你顺手数数他的人。他明明看见你在数，却没有拦。"
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
      "桥栏上那位只管翻他的书，没有替你说话。"
     ],
     "effects": [
      "gold -10"
     ],
     "goto": "p_wex_05"
    }
   },
   {
    "text": "边走边数他带的人和弓",
    "effects": [
     "flag rogier_spotted"
    ],
    "result": "一共四十二个人，十一张长弓，没有马。下了桥，高个子在后面叫住你，说你少数了一个，桥洞下面还蹲着一个。",
    "goto": "p_wex_05"
   },
   {
    "text": "向西尔穆纳家的人欠身行礼",
    "tag": "承嗣",
    "if": "faction == 'heirs'",
    "effects": [
     "rep moon +1"
    ],
    "result": [
     {
      "speaker": "流亡者罗吉尔",
      "text": "公文上我是个死人。你朝死人行礼，回去怕是不好交代。"
     },
     "话是这么说，他还是从桥栏上下来，还了你半个礼，高个子也让开了路。"
    ],
    "goto": "p_wex_05"
   },
   {
    "text": "问他为何身价千金却在粪瀑看桥",
    "tag": "试炼",
    "if": "faction == 'tried'",
    "effects": [
     "flag rogier_spotted"
    ],
    "result": [
     {
      "speaker": "流亡者罗吉尔",
      "text": "弟兄们总得有个地方睡觉。桥这头正好有三间不漏雨的屋子。"
     },
     "他把书签夹好，第一次正眼看看你，然后把自己带了多少人、几张弓，原原本本报了一遍，说省得你数错。"
    ],
    "goto": "p_wex_05"
   }
  ]
 },
 "p_wex_05": {
  "id": "p_wex_05",
  "title": "第一只信鸽",
  "art": "ev_hre",
  "loc": "峭壁区 · 屋顶的鸽笼",
  "date": "1444年奈拉月11日傍晚",
  "text": [
   "奥托格背进城的鸽笼还在五层楼顶，笼里有三只灰色信鸽。系在鸽腿上的纸条只有两指宽，你得把字写小些。",
   "紫庭的纸条有规矩，数目一律写成大写，免得路上淋了雨，把三洇成了八。",
   "天快黑了。从这里往下看，下城那块空地上点起了一圈火，全军都没走，都在等那个红头发的再站起来一次。她上次死了三个时辰就活了过来，这事连威克斯堡都听说过。",
   {
    "if": "flag.pa_name_taken",
    "text": "信纸背面还记着水槽边那个人的名字。"
   },
   {
    "if": "is.god",
    "text": "这次能写进信里的还多了一样，就是你自己成了神这件事。"
   },
   "奥托格把第一只鸽子捧了出来，等着你动笔。"
  ],
  "first": [
   "quest q_o_wex start"
  ],
  "choices": [
   {
    "text": "如实报告城门、各营旗帜和罗吉尔的位置",
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
    "result": "鸽子往西飞走了。用不了十天，巴兹伍德先生就会知道，那个公文上的死人坐在哪座桥上，身边带着多少人、几张弓。",
    "goto": "p_wex_06"
   },
   {
    "text": "只报城门和旗帜，隐去罗吉尔",
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
    "result": "{?flag.pa_gates_counted:哪座门插着谁的旗，你写得一清二楚，|门你只数了个大概，也就照着大概写了，}桥上的事却一个字也没提。奥托格看着你把纸条卷好，终究没有多问。",
    "goto": "p_wex_06"
   },
   {
    "text": "只报科琳塔尔已控制全城",
    "effects": [
     "flag report1_false",
     "var false_reports +1"
    ],
    "result": "就这么一行字，纸条还空着一半。这样的信巴兹伍德先生最爱看，可也最不信。",
    "goto": "p_wex_06"
   },
   {
    "text": "把信鸽关回笼里，不发信",
    "effects": [
     "rep throne -1"
    ],
    "result": "奥托格把鸽子塞回了笼里，又喂了一把麦粒。紫庭有条规矩，第一封信要是迟了，后面每一封都得多核对一遍。",
    "goto": "p_wex_06"
   },
   {
    "text": "如实报告，补上自己也是神",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag god_revealed",
     "flag report1_true",
     "var honest_reports +1",
     "world peace -1"
    ],
    "result": [
     "奥托格看见了末尾那一行，手一抖，差点把鸽子捏死。他把纸条又展开看了一遍，然后问你，“神”字要不要也写成大写，免得路上淋了雨看不清。",
     "你说不用。鸽子往西飞走了，威克斯堡收到这一封信，是要连夜点灯商量的。"
    ],
    "goto": "p_wex_06"
   }
  ]
 },
 "p_wex_06": {
  "id": "p_wex_06",
  "title": "报名",
  "art": "ev_multi_racial_merc",
  "loc": "下卡斯托纳斯 · 旧集市旁边的空地",
  "date": "1444年奈拉月12日清晨",
  "text": [
   "守到天亮，科琳也没起来。各营队长争了半夜，终于在那张用酒桶支起的门板桌上写下一道军令。",
   {
    "cls": "letter",
    "text": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。"
   },
   "威克斯在城里总共才十来个人，算不上一个营，桌边本来没有你们的位子。可你数了一天的门，发现这城里走到哪里都有人盘问，只有拉死人的车没人拦。于是你走到桌边，自己报了名。",
   {
    "speaker": "苔藓滩的冈瑟",
    "text": "威克斯的人也要上车？行啊，车归你拉，账找你们皇帝付。几分利，咱们另算。"
   },
   {
    "if": "flag.letter_shown",
    "text": "钴蓝兵团的这位队长说话时，眼睛一直看着你胸口揣信的地方。看来昨天楼梯上那几个逃兵嘴不严。"
   },
   {
    "if": "is.god",
    "text": "你报完了名，桌边好一阵没人开口。冈瑟第一次没有先问利钱，他问的是，神来拉车，工钱是按一个人算，还是另有个价。"
   },
   "奥托格被留在了营里。运尸首的板车停在桌边，车板上还粘着鱼鳞。科琳那边围满了人，谁也不许动她，杜坎森这边却没人肯碰。只有一个兽人女人蹲在他旁边，拿一根打了结的皮绳量他的手指骨节。没人请她来，她是烂刀氏族的人，来给杜坎森做归尘礼的，也就是把骨头磨成粉，免得日后有人把他的尸首拉起来使唤。",
   {
    "speaker": "乌什卡",
    "text": "这副骨头粗，得磨上两天。"
   },
   {
    "if": "is.god",
    "text": "她看了你一眼，手停住了。另一只手放到了腰后的锤子上。"
   },
   {
    "if": "is.god",
    "speaker": "乌什卡",
    "text": "不会死的我也见过。到头来，总得有人去把他放倒。"
   },
   "车边还站着个小祭司，看样子只有十五六岁，手里提着一盏还没吹灭的灯。",
   {
    "speaker": "阿坦",
    "text": "我叫阿坦，万神道上那座没屋顶的庙归我守。这道军令就钉在我的庙门上。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "冈瑟说你是神。那我想问一句，王在哪里？"
   },
   {
    "if": "is.god",
    "text": "他说的王，是众神之王卡斯特洛斯。你答不上来。"
   },
   {
    "if": "is.god",
    "speaker": "阿坦",
    "text": "我问过你了，你也不知道。那我还是接着去问他自己吧。"
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
   "codex agrados"
  ],
  "choices": [
   {
    "text": "答应帮他沿途打听",
    "effects": [
     "rep temples +1"
    ],
    "result": "他点点头，问了你的名字，说晚上要记在簿子上。",
    "goto": "a1_01"
   },
   {
    "text": "说明差事只限清点城门",
    "effects": [
     "approval ushka +1"
    ],
    "result": "小祭司说庙门他也数过，万神道上原先有十一座，眼下还关得上的只剩三座了。量骨节的那个兽人女人抬头看了你一眼，又低下头去。",
    "goto": "a1_01"
   },
   {
    "text": "出五金冠购置盐和草席",
    "cost": {
     "gold": 5
    },
    "effects": [
     "rep companies +1"
    ],
    "result": "桌边的人第一次看见威克斯人往外掏钱，好几个都伸长了脖子来看。冈瑟说这一笔他记着，不算利钱。",
    "goto": "a1_01"
   }
  ]
 }
};
