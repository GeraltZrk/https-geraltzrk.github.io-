// s1444 / act4.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "a4_01": {
  "id": "a4_01",
  "title": "九个冬天以后",
  "art": "ev_castellos_is_dead",
  "chapter": "第四幕 · 诸神之王",
  "loc": "卡斯托纳斯 · 万神道",
  "date": "1461年秋",
  "shop": {
   "name": "先锋行会的铺子",
   "blurb": "万神道入口，店主在门板上写道：“概不赊账。神殿的人也一样。”",
   "stock": [
    "superior_healing_potion",
    "greater_healing_potion",
    "half_plate",
    "plate",
    "elven_cloak",
    "scroll_dispel",
    "haste_potion",
    "cold_iron_nails",
    "bandage",
    "antidote"
   ]
  },
  "text": [
   "九年间，车换过两次轴，骡子也换过一头。万神道那座没顶的庙门上，收尸军令已泛黄，四颗钉子四圈锈。始终没有人前来结案。",
   {
    "if": "flag.compact_league",
    "text": "这座城如今归伯爵联盟代管。城门口的税吏换了三茬，税单上盖的一直是黑塔家的印。下城人管这个叫“房东回来了”。"
   },
   {
    "if": "flag.compact_corintar",
    "text": "这座城如今归科琳塔尔看着，巡夜的都披着红斗篷。旧集市旁边那块空地砌了一圈矮墙，天天有人往里面放花，放旧盾牌。"
   },
   {
    "if": "flag.compact_free",
    "text": "城约就贴在旧集市的告示板上，书记已经换到第三任了。地精坊总算有了自己的一口井，只是井绳比别处的短一截。"
   },
   {
    "if": "flag.compact_none",
    "text": "这座城到今天还是没人管。北城三条街归了三家，从那里过一趟得交三次钱，交完，三家还都说没见过你。"
   },
   "西边的消息要隔上三个月才传得到。{?flag.empress_saved:听说皇后还在，一年里跟皇帝同席一次。|听说皇后死了九年了，洛伦特的使节从此再没进过威克斯堡。}{?flag.proof_bardswood:巴兹伍德那只抽屉一直没人打开过。|}{?flag.proof_moon:奥坎娜把蜡模钉在帐子里，磨了九年的刀，一刀也没砍出去。|}{?flag.proof_published:阿登背上挨的那一刀，满帝国的酒馆里都有人比划过，比划完了，大家照常纳税。|}{?flag.proof_kept:皇帝也还是那个决斗得胜的皇帝。|}",
   "{?flag.groundhawk_deed:康原的地鹰氏族种了九年豆子，地契的折痕都磨白了。|康原那块地，蓝牙嘴上一直认着，可地契始终没发下来，灰烬玫瑰兵团年年派人去量地。}今天蓝牙和阿罗莎来给你们送行。两个人站在车边，一个比一个话少。蓝牙今年三十六了。",
   "愚者亲王的回信是今年秋天到的。那是一块树皮，就放在庙门槛上，四周长了一圈蘑菇。树皮上只写着两句话。",
   {
    "text": "来早啦，小债主。九个冬天以后再来敲门吧。",
    "cls": "letter"
   },
   "落款的日子却是九年前。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "你看，他九年前就回信了，是这信自己在路上走了九年。我东家管这个叫刚刚好。"
   },
   "阿坦今年三十三了。他拿粉笔把四十一句晨祷抄在了庙门背面，一句一行，一直抄到门槛。他把庙门钥匙交给了一个五岁的小姑娘。她娘是个寡妇，平日替庙里扫地。",
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "一天念四十句，照着门上的念就行。最后那一行先不用管。"
   },
   {
    "if": "is.immortal",
    "text": "当年在门板桌边给你擦过靴子的那个小子，如今都带着自己的孩子来看车了。蓝牙的腰也粗了一圈。守庙的小姑娘盯着你看了很久，转头问阿坦：这个人怎么看着比你还年轻？"
   },
   {
    "if": "is.immortal && party.tan",
    "speaker": "阿坦",
    "text": "{ta}本来比我大四岁。那是从前了。"
   },
   {
    "if": "is.god",
    "text": "守庙的小姑娘仰起头问你，你是银龙吗？你说不是。她想想，又问，那你会不会飞？"
   },
   {
    "if": "flag.a4_ushka_walked",
    "text": "乌什卡没有来。车辕上横着她那根木签，已经折成了两截。"
   }
  ],
  "first": [
   {
    "if": "party.ushka && approval.ushka <= -4",
    "then": [
     "companion -ushka gone",
     "flag ushka_left",
     "flag a4_ushka_walked"
    ]
   },
   "quest q_door stage 2",
   "quest q_wall start",
   {
    "if": "var.lies >= 3",
    "then": [
     "flag a4_l3"
    ]
   },
   {
    "if": "var.lies >= 6",
    "then": [
     "flag a4_l6"
    ]
   },
   {
    "if": "var.lies >= 9",
    "then": [
     "flag a4_l9"
    ]
   }
  ],
  "choices": [
   {
    "text": "托蓝牙和阿罗莎向古拉德传话，为碎心者担保",
    "if": "!flag.pixiebury_warned && (flag.clan_charter || flag.groundhawk_deed || item.clan_charter >= 1)",
    "once": true,
    "effects": [
     "flag pixiebury_warned",
     "world room +1"
    ],
    "result": [
     {
      "speaker": "蓝牙",
      "text": "灰烬玫瑰兵团在量皮克精之墓的城墙，想把碎心者氏族赶走，这事我知道。我的人也量过他们的。既然你手里有盖了印的文书，这个保我就敢写。"
     },
     "阿罗莎把信接了过去，没让信使碰。",
     {
      "speaker": "阿罗莎",
      "text": "我去送。古拉德认得我这把斧子。"
     }
    ]
   },
   {
    "text": "托蓝牙和阿罗莎向古拉德传话，为碎心者担保",
    "if": "!flag.pixiebury_warned && !(flag.clan_charter || flag.groundhawk_deed || item.clan_charter >= 1)",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "rep.corintar >= 3",
       "n": 2,
       "why": "科琳塔尔信得过你"
      },
      {
       "if": "rep.clans >= 2",
       "n": 1,
       "why": "氏族里有人替你说话"
      },
      {
       "if": "origin == 'corintar'",
       "n": 1,
       "why": "你是她队伍里的人"
      }
     ]
    },
    "ok": {
     "text": [
      {
       "speaker": "蓝牙",
       "text": "科琳许过的话，每一句我都认。可保碎心者这一句，她没许过。"
      },
      "他想了一会儿，把獠牙上那截蓝布往里掖了掖。",
      {
       "speaker": "蓝牙",
       "text": "那就算是我许的。"
      },
      "当天下午，阿罗莎就带着信上路了。"
     ],
     "effects": [
      "flag pixiebury_warned",
      "world room +1"
     ]
    },
    "fail": {
     "text": [
      {
       "speaker": "蓝牙",
       "text": "我要是替他作了保，灰烬玫瑰的莫古妮娅明天就得来问我凭什么。你手里有文书吗？"
      },
      "你手里没有。阿罗莎答应替你把话带到，可光带话，算不上作保。"
     ]
    }
   },
   {
    "text": "问女孩能把祷词念到哪里",
    "once": true,
    "effects": [
     "approval tan +1"
    ],
    "result": [
     "她背着手从头念起，一口气念到第四十句才停下，一个字都没错。",
     {
      "speaker": "守庙的姑娘",
      "text": "最后一行他没教我。他说那一行得等人，等谁他没说。"
     }
    ]
   },
   {
    "text": "出城前往旧日庇护地",
    "goto": "a4_02"
   }
  ]
 },
 "a4_02": {
  "id": "a4_02",
  "title": "烧过的世界树",
  "art": "ev_feyforest",
  "loc": "旧日庇护地 · 世界树的旧址",
  "text": [
   "深林边缘有一圈寸草不生的黑土，要走近半个时辰才能绕完。两千年前，卡斯塔诺人在这里焚毁了一棵世界树。传说点火的是卡斯坦二世本人。",
   "板车进不了林子，只能寄在这里。管寄车的是个木精灵老头，在黑土旁边搭了个棚子。十八年前罩着深林的帷幕一撤，他就搬了出来，一直住到现在。谁在他这里寄了车，他就拿炭把名字记在一扇旧门板上。",
   {
    "speaker": "寄车的老头",
    "text": "车我给你们看着，骡子我也看着，人我不管。进去几个，出来几个，那是林子的事。"
   },
   "再往里就只能用担架了，两根杆子绷一块帆布。火生在黑土外面。这次车上是空的。"
  ],
  "first": [
   "rest short"
  ],
  "choices": [
   {
    "text": "坐到乌什卡身旁",
    "if": "party.ushka",
    "once": true,
    "effects": [
     {
      "if": "approval.ushka >= 3",
      "then": [
       "quest q_ushka done",
       "approval ushka +1"
      ]
     }
    ],
    "result": [
     {
      "speaker": "乌什卡",
      "text": "这次车上没人。我们是去抬谁？"
     },
     "你说，要是神王真的死在了那边，就去抬他。她听了，伸手拃了拃担架的杆子。",
     {
      "speaker": "乌什卡",
      "text": "担架六尺长。够不够我不知道，我没抬过神。"
     },
     {
      "if": "approval.ushka >= 3",
      "text": "她把木签递给你看。上面十一条旧的早就磨得发亮了，第十二条是新刻的，刀口还泛着白。"
     },
     {
      "if": "approval.ushka >= 3",
      "speaker": "乌什卡",
      "text": "这是第十二条，我自己拟的：死人不当差。"
     },
     {
      "if": "approval.ushka < 3",
      "text": "你看见她那根木签上多了一道新刻的。可她把木签翻了个面，扣在了膝盖上，不给你看。"
     },
     {
      "if": "is.god",
      "speaker": "乌什卡",
      "text": "死不了的东西我见过，到头来都得有人去放倒。这次是去看一个已经被放倒的。我想知道是怎么放倒的。"
     }
    ]
   },
   {
    "text": "看看阿坦怎么收拾行囊",
    "if": "party.tan",
    "once": true,
    "effects": [
     "flag a4_tan_lamp"
    ],
    "result": [
     "包里一共三样东西：那截游行用的权杖头，一把蜡烛，{?item.sky_tally >= 1:还有蓝宝石望那位老太太的天象簿。她等了银龙二十年，一天划一道，一天也没等着。|还有半截粉笔。}",
     {
      "speaker": "阿坦",
      "text": "王要是在那边，我就问他一句话。要是不在，我也得弄明白，他是怎么个不在法。"
     },
     {
      "speaker": "阿坦",
      "text": "到了地方，灯我想自己举。"
     },
     {
      "if": "is.god",
      "speaker": "阿坦",
      "text": "我已经问过你了，你说你不知道。那我就接着去问他。"
     }
    ]
   },
   {
    "text": "听妮克西说起她东家的门",
    "if": "party.nixee",
    "once": true,
    "effects": [
     "flag a4_fey_manners"
    ],
    "result": [
     {
      "speaker": "妮克西",
      "text": "规矩第一条，活着。到了我东家那里还得再加三条。席上的东西一口都别吃。别跟人道谢，谢了就等于认账。还有，他问你什么，千万别答“随便”！"
     },
     {
      "speaker": "妮克西",
      "text": "他那扇门不讲价钱，讲别的。上次有个寻誓者拿一个夏天跟他换了条近路，到现在都没再见过七月。"
     },
     {
      "if": "is.god",
      "speaker": "妮克西",
      "text": "还有你。我东家肯定想见你，你可别去。他请客，付账的是你。"
     }
    ]
   },
   {
    "text": "问加莱尔打算如何记录这段旅途",
    "if": "party.garaele",
    "once": true,
    "effects": [
     "flag a4_old_words"
    ],
    "result": [
     {
      "speaker": "加莱尔",
      "text": "我祖上是从那边坐船过来的，在海上漂了一千年。我家上次有人看见那片岸，还是灰烬之日那天站在船尾看见的。这样算下来，我是第一个走回去的。"
     },
     "她教了你五个老词：借、还、路、死人、谢谢。她又嘱咐你，最后一个到了妖精那里先别用。",
     {
      "if": "flag.lied_to_garaele",
      "speaker": "加莱尔",
      "text": "我多问一句。泵房那天，你说我父母走得快，乌什卡当时看了你一眼。这件事我记了十一年，记的就是那一眼。"
     },
     {
      "if": "is.god",
      "speaker": "加莱尔",
      "text": "至于你是不是神，我写的是“自称”两个字。请别介意，我写谁都是这两个字。"
     },
     {
      "if": "is.immortal && !is.god",
      "speaker": "加莱尔",
      "text": "九年了，你一点没变。这在我倒不算什么事，照我家的寿数。我还有三百多年，你慢慢来。"
     }
    ]
   },
   {
    "text": "告诉加莱尔泵房里真实的经过",
    "if": "party.garaele && flag.lied_to_garaele && flag.a4_old_words",
    "once": true,
    "effects": [
     "unflag lied_to_garaele",
     "approval garaele -1"
    ],
    "result": [
     "你照实说了：他们走得并不快，这一点乌什卡看得出来。你自己也看得出来。",
     {
      "speaker": "加莱尔",
      "text": "我知道。我要的是你亲口说。"
     },
     "她把本子翻到十一年前的那一页，改了三个字。"
    ]
   },
   {
    "text": "向老头要一包冷铁钉",
    "once": true,
    "cost": {
     "gold": 20
    },
    "effects": [
     "item +cold_iron_nails"
    ],
    "result": [
     "他从棚顶上摘下一个油纸包，在手里掂掂。",
     {
      "speaker": "寄车的老头",
      "text": "这钉子没淬过火，妖精一闻见就躲。城里要卖八十，我只收你二十。这是木精灵的价，我巴不得你们带着它进去。"
     }
    ]
   },
   {
    "text": "扛起担架进入森林",
    "goto": "a4_03"
   }
  ]
 },
 "a4_03": {
  "id": "a4_03",
  "title": "青道",
  "art": "load_27",
  "loc": "深林 · 青道上的德雷嫩聚落",
  "text": [
   "木精灵地界里只能沿青道走。路两旁每二十步有一根白桩。猎手指着桩外说，偏出三步，你可能走进另一片一模一样的林子，也可能回到七十五年前。",
   "德雷嫩这一支的聚落搭在荆棘丛里，房子都是拿活枝子编出来的。议事的拱廊下面摆着一张红木长桌，七八个长老围着桌子在吵，吵的是该不该放你们过去。女王娜拉雯坐在桌子那一头，今年五十一岁，在木精灵里还算年轻。她一直没有开口。",
   {
    "speaker": "长老",
    "text": "上次放外人进林子，还是 1443 年的事。来了个红头发的人类，结果把我们的帷幕都弄没了！"
   },
   {
    "speaker": "另一位长老",
    "text": "帷幕还在的时候，你可是嚷了三百年，说出不去。"
   },
   "拱廊口站着两个持矛的木精灵，兽人和地精一概不许进厅。1430 年有一支兽人就在这片荆棘丛外面，杀了德雷嫩的上一位主人和他的妻子，那两位正是娜拉雯的父母。",
   {
    "if": "is.greenskin",
    "text": "矛杆一横，拦在了你胸前。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "上次他们也是这样围着一张桌子吵，吵了一年多，才吵出一个盟约来。今天打算吵多久？"
   },
   {
    "if": "is.god",
    "speaker": "长老",
    "text": "上一位自称是这片林子的神的，是科琳带人杀掉的。它死了我们不心疼，对你也一样。"
   },
   {
    "if": "is.god",
    "text": "娜拉雯倒是很客气，还让人把你们的水囊全都灌满了。在木精灵这里，这是催客人上路的意思。"
   }
  ],
  "choices": [
   {
    "text": "报上自己支系的名称",
    "tag": "木精灵",
    "if": "subrace == 'wood_elf'",
    "once": true,
    "effects": [
     "flag a4_salla"
    ],
    "result": "木精灵报家门，是先报氏族，后报名字。你照这个规矩报了。桌边有两个长老互相看了一眼，其中一个把凳子朝旁边挪了一点。娜拉雯也第一次抬眼。"
   },
   {
    "text": "按当地规矩入厅，让绿皮同伴留在外面",
    "effects": [
     {
      "if": "party.ushka",
      "then": [
       "approval ushka -1"
      ]
     },
     {
      "if": "party.nixee",
      "then": [
       "approval nixee -1"
      ]
     },
     {
      "if": "is.greenskin",
      "then": [
       "flag a4_disarmed"
      ]
     }
    ],
    "result": [
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "我在外面等。正好数数他们门口挂了几块兽骨。"
     },
     {
      "if": "party.nixee",
      "speaker": "妮克西",
      "text": "被人关在门外的时候，先看清那扇门有多大。"
     },
     {
      "if": "is.greenskin",
      "text": "你把兵器解下来，交给了持矛的。两个猎手一左一右夹着你往里走，矛尖几乎抵着你的腰。"
     }
    ],
    "goto": "a4_03b"
   },
   {
    "text": "坚持全队一同进厅",
    "if": "party.ushka || party.nixee || is.greenskin",
    "effects": [
     "flag a4_together",
     "flag a4_no_escort"
    ],
    "result": "你说这支队伍进去几个就得出来几个，进这拱廊也是一样。持矛的回头看女王，娜拉雯抬了一下手指，矛杆收了回去。有三个长老站起来走了。",
    "goto": "a4_03b"
   }
  ]
 },
 "a4_03b": {
  "id": "a4_03b",
  "title": "树皮纸",
  "art": "ev_wood_elven_throne_room",
  "text": [
   "长老们散去喝水，娜拉雯带你们进了拱廊后的小屋。她让藤编高座空着，自己站在桌旁。桌上的树皮纸用草绳扎作一捆。",
   {
    "if": "flag.a4_disarmed",
    "text": "你腰上空荡荡的，身后还站着那两个猎手。"
   },
   {
    "speaker": "娜拉雯",
    "text": "这是我叔祖阿鲁恩的笔记。他找了一辈子，就想弄明白罩着这片林子的帷幕是打哪里来的。后来他找着了，可也搭进去一个徒弟，那孩子还是他的侄孙。林子里就判了他一个杀亲的罪。"
   },
   {
    "speaker": "娜拉雯",
    "text": "1443 年，他跟着那个红头发的科琳去杀了立帷幕的至长者，自己没能回来。这罪名到今天也没人去销，长老们提起他来，还管他叫“那个通缉犯”。"
   },
   "她没有去解那根草绳。笔记上的话她是背出来的。",
   {
    "text": "“帷幕是为了挡烧了天的那东西才立的。”",
    "cls": "letter"
   },
   {
    "speaker": "娜拉雯",
    "text": "至长者立帷幕的时候把自己都耗空了，科琳杀掉的只是一副空壳。有这一句，够你们上路了。笔记不能出这间屋。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "您说烧了天，那是哪一天的事？"
   },
   {
    "if": "party.tan",
    "speaker": "娜拉雯",
    "text": "灰烬之日往后的几天里。他是这么推算的。"
   }
  ],
  "first": [
   "codex eldest"
  ],
  "choices": [
   {
    "text": "劝她让你们带走笔记，交给人传阅",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": "flag.a4_salla",
     "dis": "flag.a4_disarmed",
     "mods": [
      {
       "if": "flag.a4_together",
       "n": -2,
       "why": "三个长老是被你气走的"
      },
      {
       "if": "flag.a4_old_words",
       "n": 1,
       "why": "加莱尔教的老词"
      },
      {
       "if": "faction == 'heirs'",
       "n": 2,
       "why": "你讲的是名分：谱上他还姓德雷嫩"
      }
     ]
    },
    "ok": {
     "text": [
      "你说，一个人找了一辈子才找着的东西，要是就这么锁在屋里，跟没找着也没什么两样。娜拉雯盯着那捆纸看了很久。",
      {
       "speaker": "娜拉雯",
       "text": "拿去吧。有人问起来，就说是德雷嫩的女王给的，别说是通缉犯留下的。"
      }
     ],
     "effects": [
      "item +arun_notes",
      "flag arun_notes",
      "unflag a4_no_escort",
      {
       "if": "flag.a4_together",
       "then": [
        "approval ushka +1",
        "approval nixee +1"
       ]
      }
     ],
     "goto": "a4_04"
    },
    "fail": {
     "text": [
      {
       "speaker": "娜拉雯",
       "text": "你们这一趟是去看一具尸首的。我叔祖也已经是一具尸首了。我不想让他再被人抬一次。"
      },
      "说完，她把草绳又紧了一扣。"
     ],
     "goto": "a4_04"
    }
   },
   {
    "text": "请加莱尔如实记录阿鲁恩的最后一天，交史家会存档",
    "if": "party.garaele",
    "effects": [
     "item +arun_notes",
     "flag arun_notes",
     "approval garaele +1"
    ],
    "result": [
     {
      "speaker": "加莱尔",
      "text": "他最后那一天，我照您说的记一份，再照笔记上的记一份，两份分开写，都存进编年史家会。往后谁来查都查得到。不过我只管记，销罪名的事我管不了。"
     },
     {
      "speaker": "娜拉雯",
      "text": "记下来就够了。罪名是长老们定的，长老总是会死的。"
     },
     "她把那捆树皮纸放进了加莱尔的包里，亲手系上了扣子。"
    ],
    "goto": "a4_04"
   },
   {
    "text": "趁她转身藏起那捆纸",
    "check": {
     "skill": "sleight",
     "dc": 16,
     "party": true,
     "adv": "class == 'rogue'"
    },
    "ok": {
     "text": "草绳一声都没响。可你一直走到出了聚落三里地，才敢伸手摸一摸怀里。",
     "effects": [
      "item +arun_notes",
      "flag arun_notes",
      "approval nixee +1"
     ],
     "goto": "a4_04"
    },
    "fail": {
     "text": [
      "娜拉雯连头都没回，只说了两个字：放下。",
      "你只好放下了。她没喊人，只是把门帘掀开，朝外面偏了偏头。从这里起，猎手不会再送你们了。"
     ],
     "effects": [
      "flag a4_no_escort",
      "approval garaele -1"
     ],
     "goto": "a4_04"
    }
   },
   {
    "text": "谢过她，只带走那一句话",
    "effects": [
     {
      "if": "party.garaele",
      "then": [
       "approval garaele +1"
      ]
     }
    ],
    "result": [
     "你说有这一句就够了。娜拉雯把那捆纸放回了高座下面，第一次朝你点了下头。",
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "我也背下来了，就一句。背下来的，总不能算是拿走吧。"
     }
    ],
    "goto": "a4_04"
   }
  ]
 },
 "a4_04": {
  "id": "a4_04",
  "title": "青道上的猎",
  "art": "ev_wood_elf_hunt",
  "loc": "深林 · 青道 · 入夜",
  "text": [
   "出聚落的时候，德雷嫩的六个猎手{?flag.a4_no_escort:只是远远地跟在后面，怎么也不肯走近|走在你们前面，矛尖都朝着地}。道边的树上挂着一串一串的兽骨，风一吹就互相磕得直响。",
   "入夜，三声号响越来越近，却没有一声来自青道。猎手们对望一眼，退进树影。来的东西连他们也不愿挡。",
   "跟着来的是四个红帽子。这是一种矮小的恶妖精，只到你的腰，脚上的铁靴踩在落叶上一点声音都没有，帽子湿漉漉的，还在往下滴血。它们并不往上扑，只是从两边往里挤，一步一步地要把你们赶到白桩外面去。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "千万别出桩子！它们这是在赶羊。羊圈在哪里我不知道，我也不想知道。"
   }
  ],
  "choices": [
   {
    "text": "守住白桩，不许任何人离开青道",
    "check": {
     "skill": "survival",
     "dc": 15,
     "party": true,
     "adv": "subrace == 'wood_elf' || is.nature",
     "mods": [
      {
       "if": "flag.a4_no_escort",
       "n": -2,
       "why": "没有猎手领路"
      }
     ]
    },
    "ok": {
     "text": "你们背靠着背往前挪，一根桩一根桩地数着走。数到第十九根时，红帽子总算不挤了，往两边让开了。",
     "goto": "a4_04b"
    },
    "fail": {
     "text": "你的右脚还是踩到了桩子外面。虽说只有一步，可等你收回来时，靴底沾的已经是另一种土了，灰白灰白的，还带着没化的雪。你半条腿都麻了。",
     "effects": [
      "hp -6",
      "flag a4_off_vyr"
     ],
     "goto": "a4_04b"
    }
   },
   {
    "text": "用担架杆连起白桩，逐段前进",
    "effects": [
     "hp -3"
    ],
    "result": "这法子很慢。杆子一头搭着这根桩，另一头得够着下一根，谁的手都不许离开杆子。你们就这样一直挪到后半夜，肩膀都磨破了皮。好在没有一个人踩出去。红帽子在两边跟了一路，后来也往两边让开了。",
    "goto": "a4_04b"
   }
  ]
 },
 "a4_04b": {
  "id": "a4_04b",
  "title": "焦树皮甲",
  "text": [
   "红帽子们退开，给一名骑士让路。它身披焦黑的树皮甲，每走一步就掉些炭屑。握在手里的剑是一根黑荆棘。",
   "它并不冲过来，只是站在青道正中央，报了一个名字。{?party.garaele:加莱尔说那是一棵树的名字，就是两千年前烧掉的那一棵世界树|那名字很长，听着是一棵树的名字}。四个红帽子跟着一齐举起了镰刀。",
   {
    "if": "flag.a4_off_vyr",
    "text": "你踩出去过的那条腿，到这时还是麻的。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "这东西身上没骨头，砍倒了也没东西可磨。白干一场。"
   }
  ],
  "choices": [
   {
    "text": "把冷铁钉撒在来路上",
    "if": "item.cold_iron_nails >= 1",
    "cost": {
     "item": "cold_iron_nails"
    },
    "combat": {
     "title": "青道上的猎",
     "enemies": [
      {
       "id": "blackened_knight",
       "name": "黑枝亲王的骑士"
      },
      {
       "id": "redcap",
       "n": 4
      }
     ],
     "xp": 900,
     "win": {
      "goto": "a4_05"
     },
     "lose": {
      "effects": [
       "flag a4_hunt_lost",
       "rest short"
      ],
      "goto": "a4_05"
     },
     "intro": "两根白桩之间撒着钉子，落叶一盖，路上看不出半点异样。",
     "specials": [
      {
       "id": "nails",
       "name": "把它们引到撒了钉子的那一段",
       "desc": "冷铁会伤及所有敌人，并使其迟缓一轮。",
       "success": {
        "text": "领头的红帽子一脚踩了上去，铁靴底当场冒了烟。后面三个也收不住脚，连那个骑士都退后半步。",
        "dmgAll": "3d6",
        "type": "piercing",
        "applyAll": {
         "cond": "slowed",
         "turns": 1
        }
       }
      },
      {
       "id": "horn",
       "name": "学那三声号角吹回去",
       "desc": "红帽子听从号角发出的命令。成功时，所有敌人陷入「晕眩」，持续 1 回合。",
       "check": {
        "skill": "performance",
        "dc": 14
       },
       "success": {
        "text": "你把手拢在嘴边吹了三声，调子差不离。四个红帽子一齐回头找吹号的。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你吹出来的声音跟一头害了喉病的骡子差不多。焦树皮的骑士第一次笑了，笑声像树枝折断。"
       }
      }
     ]
    }
   },
   {
    "text": "用两只旧马掌代替冷铁钉应战",
    "combat": {
     "title": "青道上的猎",
     "enemies": [
      {
       "id": "blackened_knight",
       "name": "黑枝亲王的骑士"
      },
      {
       "id": "redcap",
       "n": 4
      }
     ],
     "xp": 900,
     "win": {
      "goto": "a4_05"
     },
     "lose": {
      "effects": [
       "flag a4_hunt_lost",
       "rest short"
      ],
      "goto": "a4_05"
     },
     "intro": "马掌是淬过火的熟铁。要对付妖精，也只能拿它凑合。",
     "specials": [
      {
       "id": "horseshoe",
       "name": "把马掌砸进红帽子堆里",
       "desc": "旧铁虽非正宗冷铁，仍可暂时替代。成功时，所有敌人受到 2d6 点钝击伤害，并陷入「迟缓」，持续 1 回合。",
       "check": {
        "skill": "sleight",
        "dc": 15
       },
       "success": {
        "text": "马掌在两个红帽子中间弹了一下，碰着的地方立刻起了泡。它们尖叫着往后跳开了。",
        "dmgAll": "2d6",
        "type": "bludgeoning",
        "applyAll": {
         "cond": "slowed",
         "turns": 1
        }
       },
       "fail": {
        "text": "马掌飞出了白桩。你始终没听见它落地的声音。"
       }
      },
      {
       "id": "horn",
       "name": "学那三声号角吹回去",
       "desc": "红帽子听从号角发出的命令。成功时，所有敌人陷入「晕眩」，持续 1 回合。",
       "check": {
        "skill": "performance",
        "dc": 14
       },
       "success": {
        "text": "你把手拢在嘴边吹了三声，调子差不离。四个红帽子一齐回头找吹号的。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "你吹出来的声音跟一头害了喉病的骡子差不多。焦树皮的骑士第一次笑了，笑声像树枝折断。"
       }
      }
     ]
    }
   }
  ]
 },
 "a4_05": {
  "id": "a4_05",
  "title": "黑枝亲王的价",
  "art": "ev_dark_forest",
  "loc": "深林 · 影林",
  "text": [
   "{?flag.a4_hunt_lost:你们是被镰刀背一路赶到这里来的。|骑士散成了一堆炭，红帽子也拖着同伴跑了。可打完了你们才发现，自己早就被挤下了青道。}白桩已经不见了。头顶的叶子全是黑的，一片摞着一片，一点光都漏不下来。这里是影林。",
   "把你们赶到这里来的，是妖精贵族黑枝亲王。它坐在烧空的树桩中。直视它，你会看见灰斗篷下的高瘦人形。挪开目光再看，斗篷就成了满树枯叶。",
   {
    "speaker": "黑枝亲王",
    "text": "汝等要去看的是一具尸首。吾不收买路钱。吾只要汝回去以后，把看见的一字不改，讲给卡斯坦的子孙听。"
   },
   "它坐的那截树桩，就是两千年前烧掉的那棵世界树。里面的炭到今天还黑得发亮。说起当年点火的那个人，它把名字报得很熟，卡斯坦，第二个叫这个名字的。它恨的是烧树的卡斯塔诺人。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "别接！白走的路才是最贵的。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "它说的是“尸首”。这么说，它知道那边躺着的是什么。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "我们氏族里传过一件事。1439 年，有个谁也不认得的兽人，给三个氏族指了一条穿林子的近路。进去的都没出来。"
   },
   {
    "if": "party.ushka",
    "speaker": "黑枝亲王",
    "text": "那些兽人是吾的斧子。斧子不问往哪里砍。"
   },
   {
    "if": "is.god",
    "text": "它朝你躬了一下身，躬得很假。"
   },
   {
    "if": "is.god",
    "speaker": "黑枝亲王",
    "text": "又是一位天上来的。上一位烧了吾的树。汝的价钱另算：须汝本人去讲，用汝自己的嗓子，一个字也不许说软。"
   }
  ],
  "first": [
   "codex blackened_prince"
  ],
  "choices": [
   {
    "text": "试探它的目的",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15
    },
    "ok": {
     "text": "你们信不信在那边看见的东西，它并不在乎。它在乎的是听的人信不信。那些话到了卡斯坦的子孙耳朵里就是一把火。它等着看这把火烧起来。",
     "effects": [
      "xp 120"
     ]
    },
    "fail": {
     "text": "你盯得太久了。它把脸转了过来，那竟是你埋过的一个人的脸。你赶紧把眼睛挪开，后脖子上全是汗。",
     "effects": [
      "hp -5"
     ]
    }
   },
   {
    "text": "回想与大妖精订约的规矩",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 15,
     "adv": "is.pact"
    },
    "ok": {
     "text": "跟大妖精立约，条款由它说了算，毁约要付什么代价也由它定，而且是等你毁了约以后才定。所以只要接了，回去以后你们就非讲不可，一个字都不许改。",
     "effects": [
      "xp 120"
     ]
    },
    "fail": {
     "text": "你只想起来一句俗话：跟妖精握过手，回来得数数手指头。你真的数了一遍，十根都在，只是有一根的指甲黑了。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "接受条件，免费通行，回去据实讲述",
    "effects": [
     "flag blackbranch_deal",
     "approval nixee -2"
    ],
    "result": [
     "它把一根黑枝子折成两段，一段给了你，一段自己留着。断口还是湿的。",
     {
      "speaker": "黑枝亲王",
      "text": "吾的乌鸦为汝领路。到了卡斯坦的城，汝开口那一天，吾自然听得见。"
     },
     {
      "if": "is.god",
      "text": "你手里那半截枝子动了一下。从今往后，你就不能再跟谁约好不说了。"
     }
    ],
    "goto": "a4_07"
   },
   {
    "text": "另寻出路，不作交易",
    "result": [
     {
      "speaker": "黑枝亲王",
      "text": "那便去敲那傻子的门吧。他那里没有白走的路，到时候汝自会想起吾。"
     },
     "{?party.nixee:妮克西已经在往回数步子了。她说她东家的门离这里不远。|树桩里已经空了，地上留着一根乌鸦毛，毛尖朝着一个方向。}"
    ],
    "goto": "a4_06"
   }
  ]
 },
 "a4_06": {
  "id": "a4_06",
  "title": "缺一个傻子",
  "art": "ev_magical_forest_animated",
  "loc": "妖精界 · 林隙 · 愚者亲王的宫",
  "text": [
   "{?party.nixee:妮克西|地鹰氏族派来的一个寻誓者}走到两棵并生的榛树中间，对着空气敲了三下。你们从树中间迈过去，那边的天是亮的，却找不着太阳。",
   "愚者亲王的宫廷是一张望不到头的长桌。席间有长角的客人、长翅的客人，还有一位通身由水构成。上首空着一张三脚矮凳，座面已磨得发亮。",
   "亲王就坐在矮凳旁边。今天他是个穿补丁礼服的胖子，身上补丁的颜色比礼服的颜色还多。",
   {
    "speaker": "愚者亲王",
    "text": "来早啦，小债主，可也来晚啦。我这里缺一个逗乐的傻子，缺了有些年头了。你们那边管这个叫过路费，我们这边管这个叫入席。"
   },
   "他不收钱。他要的是有人留下来，坐到那把矮凳上给他当傻子。满桌子的菜都冒着热气，你一口也没敢动。",
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "他要的是那把凳子上坐个人。我去吧。规矩说活着就行，没说非得在哪里活。"
   },
   {
    "if": "faction == 'crownless'",
    "text": "亲王拿叉子指了指那把矮凳，问你，椅子空着可怎么办？你说空着就空着，天也没塌下来。他听了笑出了声，一桌子妖精也跟着笑。"
   },
   {
    "if": "is.pact",
    "text": "席上的话你能听懂一半，听懂的那一半全是在讲价。左手第三位刚拿一个夏天换了一句实话，这买卖他做亏了。"
   },
   {
    "if": "is.god",
    "speaker": "愚者亲王",
    "text": "年头对你可不算数。拿自己不心疼的东西来付账，那不叫付账。"
   },
   {
    "if": "is.god && party.nixee",
    "speaker": "妮克西",
    "text": "我早说过叫你别来！他请客，付账的是你。"
   }
  ],
  "choices": [
   {
    "text": "在席间讲笑话逗他",
    "once": true,
    "check": {
     "skill": "performance",
     "dc": 15,
     "adv": "is.performer",
     "mods": [
      {
       "if": "flag.a4_fey_manners",
       "n": 2,
       "why": "妮克西教过席上的规矩"
      },
      {
       "if": "is.pact",
       "n": 2,
       "why": "你听得懂他们在笑什么"
      }
     ]
    },
    "ok": {
     "text": [
      "你讲的是当年钴蓝兵团的那个哨兵，还有那一车穿着靴子的“马肉”。亲王笑得把身上一块补丁都崩飞了。",
      {
       "speaker": "愚者亲王",
       "text": "好，好。这个我要拿去讲给别人听，故意讲错三次，看看它最后变成个什么样。"
      },
      "他从礼服上揪下一枚木扣子递给你，正反两面都刻着一张笑脸。"
     ],
     "effects": [
      "item +fey_token"
     ]
    },
    "fail": {
     "text": [
      "没有一个人笑。只有水做的那一位替你鼓了掌，溅了你一身水。",
      {
       "speaker": "愚者亲王",
       "text": "这个笑话我收下啦。讲砸了的也有行情，三十。"
      },
      "后来，那个笑话的后半句你怎么也想不起来了。"
     ],
     "effects": [
      "gold -30"
     ]
    }
   },
   {
    "text": "替妮克西在矮凳上试坐三天",
    "tag": "地精",
    "if": "is.goblin && party.nixee",
    "once": true,
    "effects": [
     "approval nixee +2",
     "hp -4"
    ],
    "result": [
     {
      "speaker": "愚者亲王",
      "text": "你也是有东家的人吗？没有？那更好，没东家的傻子最贵。来，坐。"
     },
     "这一坐就是三天。席上的每一个笑话你都得笑，每一个谜语你都得猜错。到第三天夜里，妮克西来换你下去，往你手里塞了半块干粮。",
     {
      "speaker": "妮克西",
      "text": "这可不在我的规矩里。这次算我欠你的。"
     },
     "试是试过了，可凳子还空着，过路的账还是得结。"
    ]
   },
   {
    "text": "按宴席上的规矩还价",
    "tag": "邪术师",
    "if": "is.pact",
    "once": true,
    "effects": [
     "xp 100",
     "approval nixee +1"
    ],
    "result": [
     "价你没能还下来。不过你听出了一件事：他报的那几样价钱里面，有一样是他早就想要的。",
     {
      "speaker": "愚者亲王",
      "text": "那边有一根杖，白的，六尺长。你们还不知道吧？我可知道。回程的时候带来给我，这也算一种付法。"
     }
    ]
   },
   {
    "text": "同意妮克西坐上矮凳",
    "if": "party.nixee",
    "effects": [
     "flag toll_nixee"
    ],
    "result": [
     "妮克西爬上了矮凳，两只脚够不着地。一桌子妖精都为她鼓掌。",
     {
      "speaker": "妮克西",
      "text": "康原的欠条你拿着。蓝牙要是认，你就去讨，他要是不认，你就去跟他吵。平时我总说先讲价，这次得倒过来，先救命，后讲价。这次算我先付的。"
     },
     "她把一张叠得只有指甲盖大的纸塞进你手里，再也没看你一眼。"
    ],
    "goto": "a4_07"
   },
   {
    "text": "除过门的十一年外，每人再付十年寿命",
    "effects": [
     "flag toll_years",
     "approval ushka -1",
     "approval tan -1",
     "approval nixee -1",
     "approval garaele -1"
    ],
    "result": [
     {
      "speaker": "愚者亲王",
      "text": "拿年头付，这是老实人的付法。过一趟门要十一年，那是门的规矩。这十年才是给我的。出了宫门就开始算。"
     },
     "{?is.longlived:十年对你来说只是个零头，可对别人就不是了。|你点头时，连同伴的那一份也替他们点了。}"
    ],
    "goto": "a4_07"
   },
   {
    "text": "先给他讲你们要去寻找的故事",
    "effects": [
     "flag toll_story",
     {
      "if": "faction == 'crownless'",
      "then": [
       "world word +1"
      ],
      "else": [
       "world word +2"
      ]
     }
    ],
    "result": [
     "你从万神道那座没屋顶的庙讲起，一直讲到航海志上涂掉的那位神。他听得很规矩，一句嘴都没插。",
     {
      "speaker": "愚者亲王",
      "text": "好故事。我要讲给别人听，他们再讲给别的人听。等传到了头，天上那位是死是活、是男是女，我可就管不着啦。"
     },
     "满桌子的妖精已经在交头接耳了。"
    ],
    "goto": "a4_07"
   },
   {
    "text": "答应回程给他留一根杖",
    "effects": [
     "flag toll_staff"
    ],
    "result": [
     {
      "speaker": "愚者亲王",
      "text": "白的，六尺长，有一头是碎的。你们还没见着呢，我就先替你们惦记上啦。回程走秋门，我就在那里伸手等着。"
     },
     "原来他比你们还先知道那边有根杖。"
    ],
    "goto": "a4_07"
   },
   {
    "text": "拒绝付出代价",
    "if": "party.nixee",
    "effects": [
     "flag toll_nixee"
    ],
    "result": [
     "你说不付。亲王也没恼，只拿叉子敲了敲杯沿，等着。",
     "妮克西自己站起身，走到上首，爬上了那把矮凳。",
     {
      "speaker": "妮克西",
      "text": "别看我。康原的欠条在你左边兜里，我刚才塞进去的。"
     }
    ],
    "goto": "a4_07"
   },
   {
    "text": "由你独自承担这额外的十年",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag toll_years",
     "flag owes_fey_miracle",
     "approval nixee -2"
    ],
    "result": [
     {
      "speaker": "愚者亲王",
      "text": "成。你同伴的年头，我一天都不动。不过得添上一条：往后我每敲一次门，你就得应一次。至于是什么事，到时候我再说。"
     },
     "{?party.nixee:妮克西的脸一下白了。她张了张嘴，嗓子里只挤出半声气音。|满桌子的妖精第一次全都安静了。}"
    ],
    "goto": "a4_07"
   }
  ]
 },
 "a4_07": {
  "id": "a4_07",
  "title": "没有太阳的天",
  "art": "load_19",
  "loc": "妖精界 · 一条不肯直着走的路",
  "text": [
   "天光很亮，却找不到太阳，脚边的影子朝各个方向散开。前方明明是一条直路，你一眨眼，路就拐了弯。",
   {
    "if": "flag.blackbranch_deal",
    "text": "带路的是黑枝亲王的一只乌鸦，飞上三步就停一停，回头数一遍人。"
   },
   {
    "if": "!flag.blackbranch_deal && party.nixee",
    "text": "妮克西走在最前面，嘴里一直在数步子，用的是地精话。"
   },
   {
    "if": "!flag.blackbranch_deal && !party.nixee",
    "text": "带路的是愚者宫里派来的一个提灯小妖，灯里没有火，却照样亮着。{?flag.toll_nixee:回头已经看不见那张桌子了。你最后一眼看过去时，妮克西坐在矮凳上，正在数席上的盘子。|}"
   },
   {
    "if": "flag.toll_years && !flag.owes_fey_miracle",
    "text": "{?is.longlived:那十年在你身上一点也看不出来。|你的膝盖是出了宫门以后才开始响的。}{?party.tan:阿坦的鬓角白了一撮，他自己还没看见。|}"
   },
   {
    "if": "party.tan",
    "text": "阿坦第一次不知道该在什么时候念晨祷了。蜡烛在这里怎么烧也不见短。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "我来数脉搏吧，一个时辰大约是四千下。数到该天亮的时候，我就念。"
   },
   {
    "if": "party.tan",
    "text": "阿坦念了四十句。念到一半时，影子换了个方向。"
   },
   "路从一片下着雪的松林旁边擦了过去。雪地里有两拨人正在打仗。一边是个白头发的女人，蓝袍子上缀着星星，一抬手就是一道冰。另一边是整整一支军队，流出来的血都冻成了黑的。谁也没朝你们这边看一眼。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "那是道曼德劳德，精灵故土北边的一片林子，航海志上只留了个名字。我多问一句，他们打的是哪一年的仗？"
   },
   {
    "if": "party.garaele",
    "text": "带路的没有回答她。"
   },
   "路边每隔一段就挂着一盏灯，灯光暖暖的，灯里面有人在喊你的小名。"
  ],
  "first": [
   {
    "if": "flag.toll_nixee",
    "then": [
     "companion -nixee"
    ]
   }
  ],
  "choices": [
   {
    "text": "查看路边枝头的挂物",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": [
      "那是一顶地精戴的尖帽子，毡子做的，已经褪成了灰白色，帽尖上缝着一粒铜扣。看样子挂在这里有些年头了。",
      {
       "if": "party.nixee",
       "speaker": "妮克西",
       "text": "这是奥布利格的帽子！他是跟着科琳去打至长者的那个地精，1443 年打完那一仗人就没了。东家说他是掉回从前去了。我当时还以为东家又在打哑谜。"
      },
      {
       "if": "!party.nixee",
       "text": "帽子里塞着一张树皮欠条，落款是奥布利格，就是跟着科琳去打过至长者的那个地精。欠的是什么，字迹已经糊了。"
      }
     ],
     "effects": [
      "xp 100"
     ]
    },
    "fail": {
     "text": "原来是顶帽子。你伸手去够，帽子里有东西咬了你一口。接着那帽子自己走掉了。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "只看向导的脚跟，不看灯",
    "check": {
     "abil": "wis",
     "dc": 14,
     "save": true,
     "mods": [
      {
       "if": "is.fey_touched",
       "n": 2,
       "why": "你身上有这边的东西"
      }
     ]
    },
    "ok": {
     "text": "喊你小名的那个声音一直跟到了路的尽头。最后还骂了一句很难听的话。",
     "goto": "a4_08"
    },
    "fail": {
     "text": "你只看了一眼灯。等你醒过来，人已经躺在路边了，别人找了你大半天。你手里还攥着一张树皮，上面写着一个数目，可你不记得自己借过什么。",
     "effects": [
      "hp -6"
     ],
     "goto": "a4_08"
    }
   },
   {
    "text": "蒙眼，抓着前面人的腰带前进",
    "effects": [
     "hp -2"
    ],
    "result": "你什么也没看见，倒是摔了两跤，两边膝盖各青了一块。喊你小名的那个声音跟了一路。",
    "goto": "a4_08"
   }
  ]
 },
 "a4_08": {
  "id": "a4_08",
  "title": "红冬",
  "art": "load_14",
  "loc": "阿伦蒂尔 · 血林",
  "date": "红冬",
  "text": [
   "迈出树林时，迎面已经是冬天。你回身去看，两棵白树并立，树间的来路消失了。",
   "这里的树，树干是白的，叶子是红的，一片都没落。树皮的裂口往外渗着红树脂，顺着树干一道一道淌到雪上，闻起来有一股铁锈味。",
   "这里是精灵的故土阿伦蒂尔。就你们所知，灰烬之日以后第一批踏上这片土地的坎诺人，就是你们几个，而且是走着来的。这块地上有规矩，第一晚就得学会：取了要还。",
   {
    "if": "party.garaele",
    "text": "加莱尔蹲了下去，摘掉手套，把手按在雪下面的土上，按了很久。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "我祖上是从这里上的船，在海上漂了一千年才靠岸。我走回来，只用了一个冬天。回去以后，我得把这两个数写在同一行里。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "树在流血，也没人管。这地方的规矩我不懂，先别动刀。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "这里有太阳。我又能念了。"
   },
   {
    "if": "is.divine",
    "text": "你试了一个最小的神术，暖手用的那种。神术来了，只是慢了半拍，像是隔着一层水递过来的。"
   },
   "远处两棵白树中间站着个人，脸上画着红道，手里拿着一杆插了羽毛的矛。你再一抬头，人已经不见了。"
  ],
  "first": [
   "quest q_door done",
   "codex laws_by_blood"
  ],
  "choices": [
   {
    "text": "寻找食物和木柴，升起营火",
    "once": true,
    "check": {
     "skill": "survival",
     "dc": 14,
     "party": true,
     "adv": "is.nature"
    },
    "ok": {
     "text": "你们打到了两只白兔，捡了一捆枯枝，还砍了一棵手腕粗的小树当柴架。斧子砍下去时，树茬里冒出来的汁是红的。火生起来了，肉也烤熟了。",
     "effects": [
      "flag a4_took",
      "heal 2d6"
     ]
    },
    "fail": {
     "text": "雪太深了，折腾到天黑，只打着一只瘦兔子，砍了半捆湿柴。砍树时，红树脂溅了你一手，烫得很。",
     "effects": [
      "flag a4_took",
      "hp -4"
     ]
    }
   },
   {
    "text": "看看当地人靠什么生活",
    "once": true,
    "check": {
     "skill": "nature",
     "dc": 13,
     "adv": "is.nature"
    },
    "ok": {
     "text": "有人在这里砍过树，每个树桩边的雪里都埋着一颗橡子，一个桩一颗。一块平石上还留着半只冻硬了的兔子，人没动过，野兽也没动过。看来这里的规矩是取一样，还一样，再留一份。",
     "effects": [
      "flag a4_knows_return"
     ]
    },
    "fail": {
     "text": "你只看出雪地上有脚印，是光脚踩的，五个脚趾清清楚楚。别的什么也没看出来，手倒是冻木了。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "脱鞋赤脚走上去",
    "tag": "精灵",
    "if": "is.elf",
    "once": true,
    "effects": [
     "hp -3",
     "flag a4_knows_return",
     "approval garaele +1"
    ],
    "result": [
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "你要不要把鞋脱了？你祖上是从这里逃走的，我祖上也是。我刚才没敢脱。"
     },
     "雪一直没到脚踝，冷得直往骨头里钻。你走了十来步，脚下硌了一下，接着又是一下。是橡子，埋得很浅，一个树桩旁边一颗。有人在这里还东西。"
    ]
   },
   {
    "text": "埋一颗橡子在树桩旁，在平石上留下半只兔",
    "if": "flag.a4_took && flag.a4_knows_return",
    "once": true,
    "effects": [
     "flag a4_gave_back"
    ],
    "result": "橡子是在林子旁边捡的，冻得梆硬。你拿刀尖在树茬旁边凿了个坑，把它埋了进去。等你把半只兔子放上平石时，远处那杆插羽毛的矛动了一下，矛尖朝了下。"
   },
   {
    "text": "在此过夜",
    "effects": [
     {
      "if": "flag.a4_took && !flag.a4_gave_back",
      "then": [
       "hp -5",
       "flag a4_first_mark"
      ]
     },
     {
      "if": "!flag.a4_took",
      "then": [
       "hp -3"
      ]
     }
    ],
    "result": [
     {
      "if": "flag.a4_first_mark",
      "text": "半夜里你是被烫醒的。砍过树的那只手，手背上起了一道红痕，又细又直。同伴们的手上也有。"
     },
     {
      "if": "!flag.a4_took",
      "text": "这一夜没有生火。干粮冻得硬邦邦的，得含化了才咬得动。"
     },
     {
      "if": "flag.a4_gave_back",
      "text": "一夜平安无事。到了早上，平石上那半只兔子不见了，石头上多了一粒贝珠。"
     }
    ],
    "goto": "a4_09"
   }
  ]
 },
 "a4_09": {
  "id": "a4_09",
  "title": "血律",
  "art": "ev_elven_eye",
  "loc": "血林深处 · 一棵渗得最凶的树下",
  "text": [
   "又走三天，你们在一棵三人合抱的白树下扎营。树干齐人高处裂着口子，渗出的树脂把根下的雪染红。半夜，你们手背发起烫来。",
   "第一天见过的那个画红道的猎手从树后走了出来，矛尖朝着地。他挨个翻看你们的手，嘴里数着数。{?party.garaele:加莱尔听出了三个词：许了的，说了的，取了的。|他说的是磨掉了一半音的精灵语，你只听懂了数目。}这块地的律法是守诺、说真话。说过的每一句谎话，在这里都会变成手上的一道红痕。",
   {
    "if": "flag.a4_tier0",
    "text": "数到你时，他数出来的是零。他多看了你一眼，才把你的手放下。"
   },
   {
    "if": "flag.a4_tier1",
    "text": "你手背上有几道红痕，细细的，一句谎话一道。{?flag.p_lied:第一道在虎口上，是城破那天说给一个快死的人听的那一句。|}他数完，拿指甲在最长的那一道上掐了一下，很疼。"
   },
   {
    "if": "flag.a4_tier2",
    "text": "你两只手背上全是红痕，一句谎话一道，有几道已经爬过了手腕。{?flag.p_lied:第一道是城破那天说给一个快死的人听的那一句。|}他数到一半停了下来，换了一只手接着数，数完以后退后一步。"
   },
   {
    "if": "flag.a4_tier3",
    "text": "红痕从你的手背一路爬到了肘弯，新的压着旧的，指甲也从根上开始发黑了。猎手没有数完。他抬起矛尖对着你，又朝林子深处偏了偏头，意思是林子里那些吸血的怪物，当初都是这么开的头。"
   },
   {
    "if": "flag.lied_to_garaele && !flag.a4_tier0",
    "text": "有一道长在左手无名指根上，是泵房那天骗加莱尔的那一句。"
   },
   {
    "if": "flag.a4_urn_owed",
    "text": "还有一道是空心的。那是军士长的骨灰，你答应过他，却没有办。"
   },
   {
    "if": "flag.god_faked_dragon",
    "text": "最粗的一道是银白色的。那是你在蓝宝石望的塔顶假扮银龙，骗了那个仰着头的老太太。"
   },
   {
    "if": "party.ushka",
    "text": "乌什卡把两只手摊开来让他看，手上一道也没有。猎手朝她点了下头，这是他今晚第一次点头。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "烂刀氏族不对快死的人说好听的。这也不算什么规矩，就是嫌麻烦。"
   },
   {
    "if": "flag.notebook_sold",
    "text": "你右掌心里还有一道横的，那是取了没还才长的。{?party.garaele:加莱尔的手干干净净。她看看你的掌心，又看了看自己的包。那个本子在山里“丢”了已经十一年了。|那个拓片本，你卖了五百金冠。}"
   },
   {
    "if": "flag.notebook_sold && party.garaele",
    "speaker": "加莱尔",
    "text": "银行出的是什么价？"
   },
   {
    "if": "flag.notebook_sold && party.garaele",
    "text": "你照实答了。她点点头，记了下来。她说这一趟她会陪你们走完，等出了林子，她就回月山去。"
   },
   {
    "if": "is.god && !flag.a4_tier0",
    "text": "这块地不认你是神。你想让红痕消下去，它就是不消。"
   }
  ],
  "first": [
   "unflag a4_tan_counts",
   {
    "if": "flag.urn_promised && !flag.urn_buried",
    "then": [
     "flag a4_urn_owed"
    ]
   },
   {
    "if": "var.lies == 0 && !flag.a4_urn_owed",
    "then": [
     "flag a4_tier0",
     "approval tan +1",
     "approval ushka +1"
    ]
   },
   {
    "if": "(var.lies >= 1 && var.lies <= 2 && !flag.a4_urn_owed) || (var.lies <= 1 && flag.a4_urn_owed)",
    "then": [
     "flag a4_tier1",
     "hp -8"
    ]
   },
   {
    "if": "(var.lies >= 3 && var.lies <= 5 && !flag.a4_urn_owed) || (var.lies >= 2 && var.lies <= 4 && flag.a4_urn_owed)",
    "then": [
     "flag a4_tier2",
     "flag lies_cursed"
    ]
   },
   {
    "if": "(var.lies >= 6 && !flag.a4_urn_owed) || (var.lies >= 5 && flag.a4_urn_owed)",
    "then": [
     "flag a4_tier3",
     "flag lies_cursed",
     "damage 3d8"
    ]
   },
   {
    "if": "flag.notebook_sold",
    "then": [
     "approval garaele -4",
     "flag garaele_leaving"
    ]
   }
  ],
  "choices": [
   {
    "text": "当众说清你向谁说过哪些话",
    "if": "!flag.a4_tier0",
    "effects": [
     "flag lies_confessed",
     "unflag lies_cursed",
     "approval tan +1",
     {
      "if": "flag.lied_to_garaele",
      "then": [
       "approval garaele -2"
      ]
     }
    ],
    "result": [
     "你从第一句说起，是对谁说的，说了什么，当时为什么要说。{?flag.p_lied:城破那天，那个快死的人问的那一句。|}{?flag.lied_to_garaele:泵房里，那两位走得快不快。|}{?flag.a4_urn_owed:军士长的骨灰，答应了葬在月神之耳，却没办。|}{?flag.god_faked_dragon:蓝宝石望的塔顶，那道银光是你放的。|}说到最后，嗓子都哑了。",
     "红痕没有消，只是不烫了。猎手把矛靠在树上，蹲下来往火里添了一根柴。",
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "我也数了，跟他数的一样多。"
     },
     {
      "if": "party.nixee",
      "text": "妮克西把钱袋往自己那边挪了一寸，想想，又挪了回来。"
     },
     {
      "if": "flag.lied_to_garaele && party.garaele",
      "speaker": "加莱尔",
      "text": "泵房那一句，我记了十一年，现在可以划掉了。不过划掉的，我也会留着。"
     }
    ],
    "goto": "a4_10"
   },
   {
    "text": "把手藏回袖子继续走",
    "result": "{?flag.a4_tier0:你把手收了回来。猎手拿矛杆朝河的方向指了指，意思是跟他走。|猎手没有追问。他拿矛杆在雪上划了几道，跟你手背上的一样多，又拿脚抹掉了，然后朝河的方向指了指。你说过的谎，这片林子都替你记着。}",
    "goto": "a4_10"
   },
   {
    "text": "抹去手背上的痕迹",
    "tag": "神",
    "if": "is.god && !flag.a4_tier0",
    "effects": [
     "var lies +1",
     {
      "if": "var.lies >= 3",
      "then": [
       "flag lies_cursed"
      ]
     },
     {
      "if": "var.lies >= 3 && !flag.a4_l3",
      "then": [
       "flag a4_l3",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     },
     {
      "if": "var.lies >= 6 && !flag.a4_l6",
      "then": [
       "flag a4_l6",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     },
     {
      "if": "var.lies >= 9 && !flag.a4_l9",
      "then": [
       "flag a4_l9",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     }
    ],
    "result": [
     "你拿拇指一抹，红痕就没了。猎手往后跳了一步。",
     "可才过了一顿饭的时间，它们又长了出来，一道不少，还多了一道。猎手伸出手指头，替你把新的那一道也数上了。",
     {
      "if": "flag.a4_tan_counts && party.tan",
      "speaker": "阿坦",
      "text": "抹掉一次，也算一句谎话。这一句是说给这块地听的。"
     }
    ],
    "goto": "a4_10"
   }
  ]
 },
 "a4_10": {
  "id": "a4_10",
  "title": "塞拉河口的集",
  "art": "load_14",
  "loc": "血林 · 塞拉河口 · 奎内赫人的聚落",
  "shop": {
   "name": "河口的集",
   "blurb": "这里惯用货物交换。金冠也收，秤上只看重量，没人细认铸的是哪位君主。",
   "stock": [
    "kwineh_salve",
    "healing_potion",
    "antidote",
    "elven_longbow"
   ]
  },
  "text": [
   "猎手带你们沿河走了四天。河口缓滩扎着几百顶皮帐，帐间晾着玉米和烟叶。平时分散在岸边的各帮人一年聚一次，在这里用贝珠交易，也把上年未结的案子审完。",
   "他们管自己叫奎内赫，是当年留在故土没走的精灵的后代。身量和耳朵都跟月精灵差不多，只是鼻梁往上翘。{?party.garaele:加莱尔一进帐子，满帐子的人全站起身。有个老妇人还伸手摸摸她的耳朵尖。|}{?party.ushka:这里没人见过兽人，孩子们把乌什卡围了起来，胆大的还拿树枝去碰她的獠牙。|}",
   "这里管集市的是头人，管立约的叫伊什塔努姆，是他们的祭司。眼前这一位是个看不出岁数的女人，颧骨上画着三道树脂纹，贝珠串从手腕一直垂到膝盖。{?party.garaele:加莱尔学了四天他们的话，已经够用了。|她的徒弟会二十来个精灵词，剩下的全靠比划。}",
   {
    "speaker": "伊什塔努姆",
    "text": "往上游去的人，我见过回来的，可没见过空着手回来的。你们要路，这块地可以给你们指。只是指了以后，你们得还它一样东西。"
   },
   {
    "if": "is.god",
    "speaker": "伊什塔努姆",
    "text": "哭泣之母为死了的神流过泪。活着的神，她还没见过。你在这里只要守律，别的我不问。"
   },
   {
    "if": "flag.a4_tan_counts && party.tan",
    "speaker": "阿坦",
    "text": "又是一句谎话。我替你数着，每数到三的倍数，我就问你一次，这一句值不值。"
   }
  ],
  "first": [
   "rest long",
   "level 9",
   "quest q_wall stage 2",
   "codex kwineh"
  ],
  "enter": [
   {
    "if": "var.lies >= 3 && !flag.a4_l3",
    "then": [
     "flag a4_l3",
     {
      "if": "party.tan",
      "then": [
       "approval tan -1",
       "flag a4_tan_counts"
      ]
     }
    ]
   },
   {
    "if": "var.lies >= 6 && !flag.a4_l6",
    "then": [
     "flag a4_l6",
     {
      "if": "party.tan",
      "then": [
       "approval tan -1",
       "flag a4_tan_counts"
      ]
     }
    ]
   },
   {
    "if": "var.lies >= 9 && !flag.a4_l9",
    "then": [
     "flag a4_l9",
     {
      "if": "party.tan",
      "then": [
       "approval tan -1",
       "flag a4_tan_counts"
      ]
     }
    ]
   }
  ],
  "choices": [
   {
    "text": "在集会上当众坦白说过的谎话",
    "if": "flag.lies_cursed && !flag.lies_confessed",
    "once": true,
    "effects": [
     "flag lies_confessed",
     "approval tan +1"
    ],
    "result": [
     "集上有几百个人，一多半听不懂通用语，{?party.garaele:加莱尔就一句一句替你翻。|伊什塔努姆的徒弟就连猜带比划地替你翻。}你说完，没有人鼓掌，也没有人走开。只有个孩子问他娘，那个人的手为什么是红的。",
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "在树下你没说，到这里你说了。这也算数。"
     }
    ]
   },
   {
    "text": "请伊什塔努姆解除诅咒",
    "if": "flag.lies_cursed",
    "req": "flag.lies_confessed",
    "reqText": "得先把每一句当众说出来",
    "once": true,
    "cost": {
     "gold": 100
    },
    "effects": [
     "unflag lies_cursed"
    ],
    "result": [
     "一百金冠换成了铁锅、针和一把剪子，堆在她脚边。她拿起骨针，在你每一道红痕的头上都点了一下。",
     {
      "speaker": "伊什塔努姆",
      "text": "痕还留着，可它带来的背运，树收回去了。你要是再说一句谎话，它还会长出来，比这次的粗。"
     }
    ]
   },
   {
    "text": "用金冠向头人换东西",
    "once": true,
    "cost": {
     "gold": 40
    },
    "effects": [
     "item +kwineh_salve 2"
    ],
    "result": [
     "头人掂掂你的金冠，没去看上面的头像。他真正想要的是你腰上那把备用的小刀，你没给。",
     "你换来了两盒血树脂膏，外加一串贝珠。贝珠是他硬挂到你脖子上的，因为在集上空着脖子走路是件丢人的事。"
    ]
   },
   {
    "text": "和猎手按规矩摔跤，赌一份药膏",
    "tag": "试炼派",
    "if": "faction == 'tried'",
    "once": true,
    "check": {
     "skill": "athletics",
     "dc": 14,
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "他们的摔法不许抓头发，也不许碰耳朵。到第三回合，你把他按进了沙子里。他爬起来，把两盒药膏拍在你手上，又比划着说明年再来。",
     "effects": [
      "item +kwineh_salve 2",
      "xp 100"
     ]
    },
    "fail": {
     "text": "才第二回合，你的脸就进了沙子，围着看的一圈孩子笑得直打滚。药膏没赢着，照规矩你还得输给他一样东西。",
     "effects": [
      "hp -5",
      "gold -20"
     ]
    }
   },
   {
    "text": "听哭泣之母的故事",
    "once": true,
    "effects": [
     "codex weeping_mother"
    ],
    "result": [
     "{?party.garaele:加莱尔一边听一边转述给你|伊什塔努姆的徒弟来讲，一半靠手比划}。他们说这片林子就是哭泣之母。树上淌的是血，是很久以前那场大灾里死掉的人的血。她替他们一直哭到了今天。",
     "她哭归哭，却照样养活人。只是取东西只能取够用的，取一样就得谢一回。砍这里的树更是大忌。",
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "他们说她会回话。那我问她一句，行吗？"
     },
     {
      "if": "party.tan",
      "text": "伊什塔努姆听完，看了阿坦很久，才说他要问的那一位神不归她管。"
     }
    ]
   },
   {
    "text": "把航海志的方位和河道对照",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true,
     "adv": "flag.log_copied || flag.log_stolen || flag.log_filed || item.log_copy >= 1",
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "那行方位落在第三道白滩往北的地方。照河口人指的路走得绕一个大弯，照航海志走能省下两天。这还是一千四百多年前量的，居然差不到半里。",
     "effects": [
      "flag a4_shortcut"
     ]
    },
    "fail": {
     "text": "你把河画反了。{?party.garaele:加莱尔看了一眼，什么也没说，把图收了起来。|头人看了一眼你画在沙上的图，笑了。}"
    }
   },
   {
    "text": "与伊什塔努姆立约后上路",
    "effects": [
     "unflag a4_tan_counts"
    ],
    "goto": "a4_10b"
   }
  ]
 },
 "a4_10b": {
  "id": "a4_10b",
  "title": "血约",
  "loc": "塞拉河口 · 河滩尽头的一棵白树",
  "text": [
   "河滩尽头的白树是立约的地方。几十根草绳绕着树根，各拴着信物：骨梳、半个陶碗、长满铜绿的箭头。有些绳子才系上，有些碰一下就会断。",
   "河口的头人伊什塔努姆拿骨针在你左手虎口上扎了一下。血滴到树根上，把雪化出了一个小坑。",
   {
    "speaker": "伊什塔努姆",
    "text": "路由我来指。你们沿着河往上走，过了第三道白滩就离岸往北，再走两天。那地方我们的人不去住，可那里有一样东西，每年都有人去给它供贝珠。"
   },
   {
    "if": "flag.bearing_known",
    "text": "她手指的方向，跟航海志上记的那行方位差了还不到一指宽。"
   },
   {
    "speaker": "伊什塔努姆",
    "text": "至于拿什么来还，你们自己说。说出口了，这棵树就替你们记着。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "这个得先问清楚，要还的是旧东西，还是往后的东西？往后的东西利钱可高着呢。"
   },
   {
    "if": "party.nixee",
    "speaker": "伊什塔努姆",
    "text": "这块地上不放利钱。"
   }
  ],
  "choices": [
   {
    "text": "承诺只查看，事后把东西原样放回",
    "effects": [
     "flag contract_staff"
    ],
    "result": [
     {
      "speaker": "伊什塔努姆",
      "text": "那就别把它带走。看一看可以，拿起来也可以，只是你们走的时候，它得还在原处。"
     },
     "你虎口上的针眼慢慢收成了一个红点，只有针尖那么大。"
    ],
    "goto": "a4_11"
   },
   {
    "text": "把断盾带放在树根上",
    "tag": "科琳的队伍",
    "if": "item.shield_strap >= 1",
    "effects": [
     "flag relic_given",
     "item -shield_strap",
     "quest q_o_corintar done"
    ],
    "result": "这截皮子有十七年没上过油了，硬得跟木片差不多。它是科琳盾上的带子，当年抬她的时候崩断的。你把它放在雪坑边，树脂慢慢淌下来，盖住了一半。",
    "goto": "a4_11"
   },
   {
    "text": "在树根上留下银月徽",
    "tag": "达梅里亚之子",
    "if": "item.moon_badge >= 1",
    "effects": [
     "flag relic_given",
     "item -moon_badge"
    ],
    "result": "你把徽放下去时，月牙是朝上的。这里夜里也有月亮，跟月神之耳望见的是同一个。树脂淌下来，把银的染成了红的。",
    "goto": "a4_11"
   },
   {
    "text": "把火漆信压在树根下",
    "tag": "皇帝的差事",
    "if": "item.bardswood_letter >= 1",
    "effects": [
     "flag relic_given",
     "item -bardswood_letter"
    ],
    "result": "这封信在你怀里揣了十七年，四个角都磨圆了。你替巴兹伍德数城门的差事，就是从它开始的。你拿块石头把它压住。伊什塔努姆问上面写着什么，你说，上面写着让你去数一数。",
    "goto": "a4_11"
   },
   {
    "text": "将账页塞进树根间",
    "tag": "负怨者",
    "if": "item.grudge_page >= 1",
    "effects": [
     "flag relic_given",
     "item -grudge_page"
    ],
    "result": "账页上写着“玛瑙之门，一四二四”，{?flag.entry_struck:那一条早就划掉了，纸你倒一直留着。|那一条到今天也没划掉。}你把它折了三折，塞进了树缝。矮人的一笔账就这么交给了一棵树。兵团要是知道了，少说得开三天的会。",
    "goto": "a4_11"
   },
   {
    "text": "在树根下埋入断链",
    "tag": "退潮的人",
    "if": "item.chain_link >= 1",
    "effects": [
     "flag relic_given",
     "item -chain_link"
    ],
    "result": "这节链子是 1444 年奈拉月 11 日砸开的，断口到今天还扎手。你拿刀尖在冻土上凿了个坑，把它埋了下去。可埋完以后，手背上那块绿还在。",
    "goto": "a4_11"
   },
   {
    "text": "把神殿的祈愿簿放在树根上",
    "if": "item.petition_book >= 1 && item.shield_strap < 1 && item.moon_badge < 1 && item.bardswood_letter < 1 && item.grudge_page < 1 && item.chain_link < 1",
    "effects": [
     "flag relic_given",
     "item -petition_book"
    ],
    "result": [
     "簿子上记了二十年的祷告，“回音”那一栏一直空着。你把它放在了雪坑边。",
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "就放这里吧。他们说这棵树会回话。"
     }
    ],
    "goto": "a4_11"
   },
   {
    "text": "剪下一绺头发，再添值五十金冠的东西",
    "if": "item.petition_book < 1 && item.shield_strap < 1 && item.moon_badge < 1 && item.bardswood_letter < 1 && item.grudge_page < 1 && item.chain_link < 1",
    "effects": [
     "flag relic_given",
     "gold -50"
    ],
    "result": "你身上没有哪样东西是带了一路的。伊什塔努姆看看你的头发，又看看你的钱袋，两样各要了一点。",
    "goto": "a4_11"
   },
   {
    "text": "递上无关的物件，谎称一路带着它",
    "if": "item.shield_strap >= 1 || item.moon_badge >= 1 || item.bardswood_letter >= 1 || item.grudge_page >= 1 || item.chain_link >= 1",
    "effects": [
     "flag relic_given",
     "var lies +1",
     "flag lies_cursed",
     {
      "if": "var.lies >= 3 && !flag.a4_l3",
      "then": [
       "flag a4_l3",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     },
     {
      "if": "var.lies >= 6 && !flag.a4_l6",
      "then": [
       "flag a4_l6",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     },
     {
      "if": "var.lies >= 9 && !flag.a4_l9",
      "then": [
       "flag a4_l9",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     }
    ],
    "result": [
     "你递过去的是一只旧水囊。伊什塔努姆收下了，可树不收。雪坑里那滴血没有化开，自己滚到了一边。",
     "当天夜里，你虎口上的针眼烫了整整一宿。真东西还揣在你怀里。",
     {
      "if": "flag.a4_tan_counts && party.tan",
      "speaker": "阿坦",
      "text": "又是一句谎话，这一句是说给一棵树听的。值不值？"
     }
    ],
    "goto": "a4_11"
   }
  ]
 },
 "a4_11": {
  "id": "a4_11",
  "title": "饮血者",
  "art": "ev_the_covenant",
  "loc": "塞拉河上游 · 离岸两天的林子",
  "text": [
   "离开河岸已经两天了。{?flag.a4_shortcut:你们照着航海志抄了近道，省下了两天的口粮，走到这里人都还好好的。|没有近道可抄，只好多绕两天，夜里又不敢生火，走到这里人人眼底都是青的。}",
   "树脂在林中流成红色小溪。雪地上有四趾爪印，一道道拖行向前。河口的人就是为这个不肯再深入。",
   "你们先看见的是树上的那几只。它们倒挂着，脸贴在树干的裂口上舔树脂，皮是灰白的，鼻子往上翻，身上一道一道的树脂纹已经长进了肉里。这就是饮血者。它们原本是人，是犯了血律才变成这样的。",
   "先是一只回过头来，接着又是四只。落在最后面的那只最老，纹路从脸上一直爬到了胸口。没有一只出声。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "它们的耳朵是尖的。我多问一句，它们还记不记得自己叫什么名字？"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "记不记得都得先放倒。放倒了你再问。"
   },
   {
    "if": "flag.lies_cursed",
    "text": "你手背上的红痕跟着它们身上的纹路，一下一下地跳了起来。"
   },
   {
    "if": "is.god",
    "text": "没有一只朝你下跪，也没有一只掉头跑。它们只认血，而你身上有血。"
   }
  ],
  "first": [
   {
    "if": "!flag.a4_shortcut",
    "then": [
     "hp -8"
    ]
   },
   "codex bloodfeeders",
   "unflag a4_tan_counts"
  ],
  "combat": {
   "title": "饮血者",
   "intro": "它们纷纷从树上落下，四肢着地，悄无声息。",
   "enemies": [
    {
     "id": "bloodfeeder",
     "n": 4
    },
    {
     "id": "bloodfeeder_matriarch"
    }
   ],
   "noAwe": true,
   "xp": 1100,
   "specials": [
    {
     "id": "laws",
     "name": "高声念血律头三条",
     "desc": "它们生前也是人，听得懂你说的话。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
     "check": {
      "skill": "religion",
      "alt": [
       "persuasion"
      ],
      "dc": 15,
      "mods": [
       {
        "if": "flag.lies_cursed",
        "n": -15,
        "why": "你自己就犯着第一条"
       }
      ]
     },
     "success": {
      "text": "“许了的要守，话要说真的，取了的要还。”你念完，最老的那只停住了，歪着头，嘴唇也跟着动了两下。别的几只见她停了，也都停了下来。",
      "applyAll": {
       "cond": "frightened",
       "turns": 2
      }
     },
     "fail": {
      "text": "你念到“话要说真的”那一句，嗓子偏偏哑了。最老的那只歪了歪头，露出了牙。"
     }
    },
    {
     "id": "sapfire",
     "name": "点着树根边的红树脂，围一圈火",
     "desc": "树脂能烧起旺火。按这里的规矩，取用就要偿还。成功时，所有敌人受到 2d6 点火焰伤害，并陷入「燃烧」，持续 3 回合。失败时，行动者受到 1d6 点火焰伤害。",
     "check": {
      "skill": "survival",
      "dc": 14,
      "mods": [
       {
        "if": "flag.lies_cursed",
        "n": -2,
        "why": "血律记着你的话"
       }
      ]
     },
     "success": {
      "text": "树脂一点就着，火是暗红色的，贴着雪面跑了一圈。它们果然怕火。",
      "dmgAll": "2d6",
      "type": "fire",
      "applyAll": {
       "cond": "burning",
       "turns": 3
      },
      "effects": [
       "flag a4_burned_sap"
      ]
     },
     "fail": {
      "text": "火星溅到了你袖子上，你袖子上正好沾着树脂。",
      "selfDmg": "1d6",
      "type": "fire"
     }
    }
   ],
   "win": {
    "goto": "a4_11c"
   },
   "lose": {
    "goto": "a4_11b"
   }
  }
 },
 "a4_11b": {
  "id": "a4_11b",
  "title": "拖回河边",
  "loc": "塞拉河口",
  "text": [
   "你在河滩上醒来。伊什塔努姆的猎手忙了整夜，才把你们逐个拖回来。这一趟又耽搁了两天。",
   "断后的那个猎手没有回来。这是他们的老办法，留一个人把那些东西引开，好让其余的人走。头人没有解释，只把一串贝珠放进你手里，那是那个人的。",
   "等你们再进林子，树上已经少了两只。这次有两个猎手跟着你们，不肯再远远站着了。"
  ],
  "first": [
   "rest short"
  ],
  "combat": {
   "title": "饮血者，第二次",
   "intro": "最老的那只仍待在原地，脸上却多了新鲜的血。",
   "enemies": [
    {
     "id": "bloodfeeder",
     "n": 2
    },
    {
     "id": "bloodfeeder_matriarch"
    }
   ],
   "allies": [
    {
     "id": "ruinborn_warrior",
     "n": 2,
     "name": "河口的猎手"
    }
   ],
   "noAwe": true,
   "xp": 700,
   "specials": [
    {
     "id": "laws",
     "name": "高声念血律头三条",
     "desc": "它们生前也是人，听得懂你说的话。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
     "check": {
      "skill": "religion",
      "alt": [
       "persuasion"
      ],
      "dc": 15,
      "mods": [
       {
        "if": "flag.lies_cursed",
        "n": -15,
        "why": "你自己就犯着第一条"
       }
      ]
     },
     "success": {
      "text": "“许了的要守，话要说真的，取了的要还。”你念完，最老的那只停住了，歪着头，嘴唇也跟着动了两下。别的几只见她停了，也都停了下来。",
      "applyAll": {
       "cond": "frightened",
       "turns": 2
      }
     },
     "fail": {
      "text": "你念到“话要说真的”那一句，嗓子偏偏哑了。最老的那只歪了歪头，露出了牙。"
     }
    },
    {
     "id": "sapfire",
     "name": "点着树根边的红树脂，围一圈火",
     "desc": "树脂能烧起旺火。按这里的规矩，取用就要偿还。成功时，所有敌人受到 2d6 点火焰伤害，并陷入「燃烧」，持续 3 回合。失败时，行动者受到 1d6 点火焰伤害。",
     "check": {
      "skill": "survival",
      "dc": 14,
      "mods": [
       {
        "if": "flag.lies_cursed",
        "n": -2,
        "why": "血律记着你的话"
       }
      ]
     },
     "success": {
      "text": "树脂一点就着，火是暗红色的，贴着雪面跑了一圈。它们果然怕火。",
      "dmgAll": "2d6",
      "type": "fire",
      "applyAll": {
       "cond": "burning",
       "turns": 3
      },
      "effects": [
       "flag a4_burned_sap"
      ]
     },
     "fail": {
      "text": "火星溅到了你袖子上，你袖子上正好沾着树脂。",
      "selfDmg": "1d6",
      "type": "fire"
     }
    }
   ],
   "win": {
    "goto": "a4_11c"
   },
   "lose": {
    "effects": [
     "rest short",
     "flag a4_carried_past"
    ],
    "goto": "a4_12"
   }
  }
 },
 "a4_11c": {
  "id": "a4_11c",
  "title": "没名字的",
  "text": [
   "最后一只迎面倒在树根上，张开的嘴仍对着树皮裂口。",
   "最老的那只躺在雪地里。死了以后她身上的纹路退下去一点，这才看得出是个女人。她耳朵是尖的，左耳上穿着一粒贝珠，就是河口的人戴的那种。",
   "她腰上还系着半截草绳，绳头都磨秃了。那种搓法，跟河滩尽头那棵白树上拴的草绳是一样的。她也在那棵树下立过约。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "这一个要不要做归尘礼？没有名字，礼只能做一半。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "她犯的是哪一条律，已经没人记得了。可贝珠还在。"
   },
   {
    "if": "flag.a4_burned_sap",
    "text": "你点过的那一圈树脂，把三棵树的根都烧黑了。照律，取了的要还。"
   }
  ],
  "choices": [
   {
    "text": "在焦黑树根旁各埋一颗橡子",
    "if": "flag.a4_burned_sap",
    "once": true,
    "effects": [
     "unflag a4_burned_sap"
    ],
    "result": "橡子是在集上换来的，一把正好三颗，原本是预备在路上吃的。你挖了三个坑埋下去，雪一盖，什么也看不出来了。"
   },
   {
    "text": "安葬年长的那只，把贝珠留在她耳上",
    "once": true,
    "effects": [
     "approval ushka +1",
     "approval tan +1",
     "log 血林里一个犯了律的人。没有名字，埋了。"
    ],
    "result": [
     "冻土凿不深，你们只好拿石头垒，垒了有半人高。{?party.ushka:乌什卡没动她的锤子，石头却数她搬得最多。|}",
     {
      "if": "party.tan",
      "text": "阿坦念了四句就停住了。他说后面的词是求神王收留死者的，不知道用在这里合不合适。想想，他又把那四句从头念了一遍。"
     }
    ]
   },
   {
    "text": "继续前行",
    "effects": [
     {
      "if": "flag.a4_burned_sap",
      "then": [
       "hp -5"
      ]
     }
    ],
    "result": "{?flag.a4_burned_sap:走出去半里地，点过火的那只手烫了起来，手背上又多了一道痕，这次是黑红色的。|你们把担架扛上肩，朝北走去。}",
    "goto": "a4_12"
   }
  ]
 },
 "a4_12": {
  "id": "a4_12",
  "title": "断权杖",
  "loc": "塞拉河上游 · 一座石头垒的小龛",
  "text": [
   {
    "if": "flag.a4_carried_past",
    "text": "这一段路，你是让河口的猎手架着走过来的。最老的那只饮血者没有追出林子。"
   },
   "一座齐胸高的小石龛立在林间。砌龛的人用不起灰浆，就把石头紧紧叠住。一根杖横放在里面。",
   "杖有六尺长，是一整块白石雕出来的。一头嵌着个实心的蓝球，有拳头那么大。另一头原先是一大颗磨出了棱的宝石，如今碎了。只剩几粒碴子还嵌在托里。",
   "龛前的石板上摆着七八粒贝珠，上面没落灰，可见到现在还有人在供它。空地旁边站着个猎手，离这里有五十步。他不走近，也不走开。",
   {
    "if": "party.tan",
    "text": "阿坦把他那截游行用的权杖头掏出来，凑到龛边去比。白杆，蓝球，是一个样子的。只不过他手里那截是木头刷的漆，龛里这根比它大了三倍。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "神像手里的那根，顶上有一圈翅，这根没有。别的地方都对得上。这是王的杖。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "垒龛的人并不认得这是什么。要是认得，就不会垒得这么矮了。我记上一句：有人捡到了它，没舍得扔。"
   },
   {
    "if": "is.caster",
    "text": "用不着凑近，你就知道杖上有法术。是防护那一路的，很旧了，可劲还没散完。"
   }
  ],
  "first": [
   "flag staff_seen",
   "codex broken_scepter"
  ],
  "choices": [
   {
    "text": "触碰权杖，辨认上面的法术",
    "once": true,
    "check": {
     "skill": "arcana",
     "dc": 15,
     "party": true,
     "adv": "is.caster",
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "手一放上去就发麻。这是防护术，当年使得极重，重得连杖头的宝石都撑碎了。{?is.caster:这种架势你认得，劲是朝上使的，挡的是从天上落下来的东西。|别的你就探不出来了。}",
     "effects": [
      "xp 150"
     ]
    },
    "fail": {
     "text": "那股麻劲顺着胳膊一直窜到肩膀，你半边身子麻木了一顿饭的时间，什么也没探出来。",
     "effects": [
      "hp -4"
     ]
    }
   },
   {
    "text": "回想哪里见过同样式的杖",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "这东西坎诺的每座神殿里都有。神王卡斯特洛斯的像都是一手持杖，白杆蓝球。那些像立了一千多年了，可照着刻的人没有一个见过真的。",
     "effects": [
      "xp 100"
     ]
    },
    "fail": {
     "text": "你想起来的是安本科斯特一家当铺的招牌。{?party.nixee:妮克西说那家当铺她去过，利钱黑得很。|}",
     "effects": [
      "hp -1"
     ]
    }
   },
   {
    "text": "暂借权杖，带去神殿",
    "effects": [
     "item +broken_scepter"
    ],
    "result": [
     "杖比看上去要沉，你握着它走了十步，手就麻了。空地旁边那个猎手把矛换到了另一只手上，没有拦你。",
     {
      "if": "flag.contract_staff",
      "text": "你虎口上那个红点跳了一下。约上说的只是走的时候它得在原处，并没说不许借。"
     }
    ],
    "goto": "a4_13"
   },
   {
    "text": "留下权杖，前往神殿",
    "effects": [
     "approval ushka +1"
    ],
    "result": "你们绕着龛走了半圈，从贝珠旁边跨了过去。那个猎手朝你们点了下头。",
    "goto": "a4_13"
   }
  ]
 },
 "a4_13": {
  "id": "a4_13",
  "title": "守门的",
  "art": "ev_high_temple_in_distance",
  "loc": "壁画神殿 · 入口",
  "text": [
   "两天后，你们登上裸岩，望见林中的石塔。走近才发现，那只是神殿露出地面的部分。大半座殿都埋在树根下，腰粗的根已把石头勒裂。",
   "门口立着三尊石像，两小一大，小的也有一人半高。石像是整块石头雕的，身上没有接缝，也没有机关。大的那尊有一条胳膊颜色不对，是后来补上去的，补得很糙。",
   "你们走到离它们二十步的地方，大的那尊开口了。它只说了一句话，听调子是在问什么，可用的是谁也不会的语言。{?party.garaele:加莱尔的笔停住了。她一个词也没听懂，这在她还是第一次。|}它等了三息，然后三尊石像一起迈开了步。",
   {
    "if": "item.broken_scepter >= 1",
    "text": "大的那尊把头朝你背上那根杖偏了一下。"
   },
   {
    "if": "is.god",
    "text": "石头不认神。它们只认那一句话的答案。"
   }
  ],
  "choices": [
   {
    "text": "横持断杖迎敌",
    "if": "item.broken_scepter >= 1",
    "combat": {
     "title": "守门的",
     "intro": "三尊石像同时迈步。大地颤动，树根上的积雪纷纷落下。",
     "enemies": [
      {
       "id": "mural_warden"
      },
      {
       "id": "stone_votary",
       "n": 2
      }
     ],
     "noAwe": true,
     "xp": 1400,
     "win": {
      "goto": "a4_14"
     },
     "lose": {
      "effects": [
       {
        "if": "item.broken_scepter < 1",
        "then": [
         "item +broken_scepter",
         "flag a4_fetched_staff"
        ]
       }
      ],
      "goto": "a4_13b"
     },
     "specials": [
      {
       "id": "staff",
       "name": "把断权杖举过头顶",
       "desc": "它们认得你手里的权杖。成功时，本场战斗直接获胜。",
       "success": {
        "text": "大的那尊迈到一半就停住了，一只石头脚还悬在半空。随后三尊石像一齐退回原位，把脸转向了门里。",
        "end": "win"
       }
      },
      {
       "id": "answer",
       "name": "照门楣上的字，把它那句话答回去",
       "desc": "念对铭文，石像会停顿片刻。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点力场伤害。",
       "check": {
        "skill": "history",
        "dc": 16,
        "party": true,
        "mods": [
         {
          "if": "party.garaele",
          "n": 2,
          "why": "加莱尔替你对着门楣"
         },
         {
          "if": "flag.a4_old_words",
          "n": 1,
          "why": "加莱尔教的老词"
         },
         {
          "if": "flag.lies_cursed",
          "n": -2,
          "why": "血律记着你的话"
         }
        ]
       },
       "success": {
        "text": "门楣上刻着一行字，句式跟它问的那一句对得上。你照着字形硬念了出来，三尊石像果然顿住了，等着你往下说。可你没有下文了。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个音。大的那尊又问了一遍，这次问话是带着劲的，结结实实撞在你胸口上。",
        "selfDmg": "2d8",
        "type": "force"
       }
      }
     ]
    }
   },
   {
    "text": "独守门洞，请后方同伴举杖",
    "tag": "战士系",
    "if": "is.martial && item.broken_scepter >= 1",
    "combat": {
     "title": "守门的",
     "intro": "三尊石像同时迈步。大地颤动，树根上的积雪纷纷落下。",
     "enemies": [
      {
       "id": "mural_warden"
      },
      {
       "id": "stone_votary",
       "n": 2
      }
     ],
     "noAwe": true,
     "xp": 1400,
     "win": {
      "goto": "a4_14"
     },
     "lose": {
      "effects": [
       {
        "if": "item.broken_scepter < 1",
        "then": [
         "item +broken_scepter",
         "flag a4_fetched_staff"
        ]
       }
      ],
      "goto": "a4_13b"
     },
     "specials": [
      {
       "id": "door",
       "name": "一个人卡住门洞",
       "desc": "门洞每次只能通过一尊石像。成功时，所有敌人陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "mods": [
         {
          "if": "flag.lies_cursed",
          "n": -2,
          "why": "血律记着你的话"
         }
        ]
       },
       "success": {
        "text": "你退进门洞，拿肩膀顶住门框。门洞只容得下一尊，后面两尊只能挤在外面，石拳砸在门框上，够不着人。",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "你退慢了半步，先挨了一石拳，又撞在了门框上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "staff",
       "name": "把断权杖举过头顶",
       "desc": "它们认得你手里的权杖。成功时，本场战斗直接获胜。",
       "success": {
        "text": "大的那尊迈到一半就停住了，一只石头脚还悬在半空。随后三尊石像一齐退回原位，把脸转向了门里。",
        "end": "win"
       }
      },
      {
       "id": "answer",
       "name": "照门楣上的字，把它那句话答回去",
       "desc": "念对铭文，石像会停顿片刻。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点力场伤害。",
       "check": {
        "skill": "history",
        "dc": 16,
        "party": true,
        "mods": [
         {
          "if": "party.garaele",
          "n": 2,
          "why": "加莱尔替你对着门楣"
         },
         {
          "if": "flag.a4_old_words",
          "n": 1,
          "why": "加莱尔教的老词"
         },
         {
          "if": "flag.lies_cursed",
          "n": -2,
          "why": "血律记着你的话"
         }
        ]
       },
       "success": {
        "text": "门楣上刻着一行字，句式跟它问的那一句对得上。你照着字形硬念了出来，三尊石像果然顿住了，等着你往下说。可你没有下文了。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个音。大的那尊又问了一遍，这次问话是带着劲的，结结实实撞在你胸口上。",
        "selfDmg": "2d8",
        "type": "force"
       }
      }
     ]
    }
   },
   {
    "text": "独自守住门洞，让石像逐个进来",
    "tag": "战士系",
    "if": "is.martial && item.broken_scepter < 1",
    "combat": {
     "title": "守门的",
     "intro": "三尊石像同时迈步。大地颤动，树根上的积雪纷纷落下。",
     "enemies": [
      {
       "id": "mural_warden"
      },
      {
       "id": "stone_votary",
       "n": 2
      }
     ],
     "noAwe": true,
     "xp": 1400,
     "win": {
      "goto": "a4_14"
     },
     "lose": {
      "effects": [
       {
        "if": "item.broken_scepter < 1",
        "then": [
         "item +broken_scepter",
         "flag a4_fetched_staff"
        ]
       }
      ],
      "goto": "a4_13b"
     },
     "specials": [
      {
       "id": "door",
       "name": "一个人卡住门洞",
       "desc": "门洞每次只能通过一尊石像。成功时，所有敌人陷入「束缚」，持续 2 回合。失败时，行动者受到 2d6 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "mods": [
         {
          "if": "flag.lies_cursed",
          "n": -2,
          "why": "血律记着你的话"
         }
        ]
       },
       "success": {
        "text": "你退进门洞，拿肩膀顶住门框。门洞只容得下一尊，后面两尊只能挤在外面，石拳砸在门框上，够不着人。",
        "applyAll": {
         "cond": "restrained",
         "turns": 2
        }
       },
       "fail": {
        "text": "你退慢了半步，先挨了一石拳，又撞在了门框上。",
        "selfDmg": "2d6"
       }
      },
      {
       "id": "answer",
       "name": "照门楣上的字，把它那句话答回去",
       "desc": "念对铭文，石像会停顿片刻。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点力场伤害。",
       "check": {
        "skill": "history",
        "dc": 16,
        "party": true,
        "mods": [
         {
          "if": "party.garaele",
          "n": 2,
          "why": "加莱尔替你对着门楣"
         },
         {
          "if": "flag.a4_old_words",
          "n": 1,
          "why": "加莱尔教的老词"
         },
         {
          "if": "flag.lies_cursed",
          "n": -2,
          "why": "血律记着你的话"
         }
        ]
       },
       "success": {
        "text": "门楣上刻着一行字，句式跟它问的那一句对得上。你照着字形硬念了出来，三尊石像果然顿住了，等着你往下说。可你没有下文了。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个音。大的那尊又问了一遍，这次问话是带着劲的，结结实实撞在你胸口上。",
        "selfDmg": "2d8",
        "type": "force"
       }
      }
     ]
    }
   },
   {
    "text": "抽出武器",
    "combat": {
     "title": "守门的",
     "intro": "三尊石像同时迈步。大地颤动，树根上的积雪纷纷落下。",
     "enemies": [
      {
       "id": "mural_warden"
      },
      {
       "id": "stone_votary",
       "n": 2
      }
     ],
     "noAwe": true,
     "xp": 1400,
     "win": {
      "goto": "a4_14"
     },
     "lose": {
      "effects": [
       {
        "if": "item.broken_scepter < 1",
        "then": [
         "item +broken_scepter",
         "flag a4_fetched_staff"
        ]
       }
      ],
      "goto": "a4_13b"
     },
     "specials": [
      {
       "id": "answer",
       "name": "照门楣上的字，把它那句话答回去",
       "desc": "念对铭文，石像会停顿片刻。成功时，所有敌人陷入「震慑」，持续 1 回合。失败时，行动者受到 2d8 点力场伤害。",
       "check": {
        "skill": "history",
        "dc": 16,
        "party": true,
        "mods": [
         {
          "if": "party.garaele",
          "n": 2,
          "why": "加莱尔替你对着门楣"
         },
         {
          "if": "flag.a4_old_words",
          "n": 1,
          "why": "加莱尔教的老词"
         },
         {
          "if": "flag.lies_cursed",
          "n": -2,
          "why": "血律记着你的话"
         }
        ]
       },
       "success": {
        "text": "门楣上刻着一行字，句式跟它问的那一句对得上。你照着字形硬念了出来，三尊石像果然顿住了，等着你往下说。可你没有下文了。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "你念错了一个音。大的那尊又问了一遍，这次问话是带着劲的，结结实实撞在你胸口上。",
        "selfDmg": "2d8",
        "type": "force"
       }
      }
     ]
    }
   }
  ]
 },
 "a4_13b": {
  "id": "a4_13b",
  "title": "第二次",
  "text": [
   "三尊石像把你们挨个拎起，扔出二十步远。它们随即回到门前站定，丝毫没有追击的意思。",
   "{?flag.a4_fetched_staff:回神龛的那两天，大家都闷头赶路。那个猎手还站在空地旁边，你把杖从龛里请出来时，他把矛换了一只手。|你在雪地里躺了半天，才想起来背上还有一根杖，刚才大的那尊就朝它偏过头。}",
   "第二次，你把杖举在了最前面。大的那尊迈到一半就停住了，一只石头脚还悬着。随后三尊石像一齐退开，把脸转向了门里。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "它认的是杖，举杖的是谁它不问。看门的都这样。"
   }
  ],
  "first": [
   "rest short"
  ],
  "next": "a4_14"
 },
 "a4_14": {
  "id": "a4_14",
  "title": "壁画厅",
  "loc": "壁画神殿 · 地下的长厅",
  "text": [
   "台阶往下一共四十七级{?party.tan:，是阿坦数的|}。下面是一条长厅，宽得能并排走三辆板车。两面墙从头到脚刻满了画，还上了色，颜色到现在都在。拿灯一照，贴金的地方直晃眼。",
   "沿墙看去，壁画依次画着精灵被巨龙锁住、挣断锁链、巨龙倒下。再往深处，一支精灵大军正包围山堡。堡门是矮人的样式。",
   "再往里是一场仗。两军对阵，领头的两个人长得很像，刻工特意把他们刻成脸对着脸，下面题着两个名字。这些画一幅比一幅刻得精，到这里连箭羽都能一根一根数清楚。长厅最里面垂着一帘树根，树根后面还有墙。",
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "左边这位的名字念阿尔丹，右边这位念杜卡涅尔，他们是兄弟。可是船上带过海的那些故事里没有这一段，一个字都没有。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "杜卡涅尔，就是井口那个名字。{?flag.dookanil_known:跟老萨满唱的造物主只差一个音。|}他在这里跟亲兄弟打仗，又在山下造我们。一个人两头忙。"
   },
   {
    "if": "!party.ushka && party.garaele",
    "text": "加莱尔把竖井口那张拓片掏出来，按在墙上比比。是同一个名字，连写法都一样。"
   },
   {
    "if": "!party.ushka && !party.garaele",
    "text": "右边那个名字你见过。在胡尔-乔卡德的竖井口，它就刻在主将的位置上。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "贴的是真金，我可没刮。别人坟里的东西，先问价，再问是谁的坟。"
   },
   {
    "if": "flag.god_opened_shaft",
    "text": "围堡那一幅的最下面刻着一道往下去的竖线，线的尽头是空的。那口井你撬过一回，下面有东西应过你一声。画上没画那是什么。"
   }
  ],
  "first": [
   "flag war_of_two_seen",
   "codex war_of_two",
   "codex precursors",
   "quest q_wall stage 3"
  ],
  "choices": [
   {
    "text": "按顺序阅读壁画题字",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.a4_old_words",
       "n": 1,
       "why": "加莱尔教的老词"
      },
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "第一段的题字里你认出了三个词：锁链，断，自己。围堡那一幅下面还有一行小字，是个很大的数目，数目后面跟着的词是“还没回来的”。",
     "effects": [
      "xp 150"
     ]
    },
    "fail": {
     "text": "你把“龙”读成了“王”，整段读成了另一个故事。{?party.garaele:加莱尔纠正了你，头都没抬。|也没人纠正你。}你又凑得太近，墙上的防护术在你鼻尖上弹了一下。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "拨开缝隙，检查最深处的刻工",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 14,
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "这一幅刀口浅，线是抖的，题字也只刻了一半深。前面那些画是一个作坊干了几十年才干出来的。这一幅却是一个人赶出来的。刻它的人知道自己剩下的时间不多了。",
     "effects": [
      "flag a4_saw_hand",
      "xp 100"
     ]
    },
    "fail": {
     "text": "树根上长着带钩的刺。你什么也没看清，手背上倒多了三道口子。好在这次是白的，不是谎话招来的。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "寻找壁画中掌管天空的神",
    "once": true,
    "check": {
     "skill": "religion",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "他在前面的画里出现过四回，都跟别的神排在一处，手里拿着一根杖。四回都是两只手两只脚，一样不缺。",
     "effects": [
      "flag a4_whole_god",
      "xp 100"
     ]
    },
    "fail": {
     "text": "你找着的是管海的那一位，还对着他认真看了半天。",
     "effects": [
      "hp -1"
     ]
    }
   },
   {
    "text": "伸手触摸那个名字",
    "tag": "退潮的人",
    "if": "origin == 'tide'",
    "once": true,
    "effects": [
     "approval ushka +1",
     "xp 100"
    ],
    "result": [
     "石头是凉的。造你们的人就叫这个名字。在这面墙上，他只是个跟亲兄弟打仗的将军。这些画里没有一幅画着兽人。",
     {
      "if": "party.ushka",
      "speaker": "乌什卡",
      "text": "按完了吗？按完了就把手拿下来。我们不欠他的。"
     }
    ]
   },
   {
    "text": "在账页背面记下欠债者的相貌",
    "tag": "负怨者",
    "if": "origin == 'grudge'",
    "once": true,
    "effects": [
     "approval garaele +1",
     "xp 100"
    ],
    "result": [
     "就是围堡的那一幅。兵团账本上最老的那一条，欠债的人长什么样。你今天第一次见着了：尖耳朵，高个子，旗上绣的是一只手。",
     "{?item.grudge_page >= 1:你在账页背面添了一行，照规矩先写数目，再写事情。|账页已经交给那棵树了。你只好把这一行记在袖口的里子上，等回去再誊。}"
    ]
   },
   {
    "text": "观察山堡门楣",
    "tag": "矮人",
    "if": "race == 'dwarf'",
    "once": true,
    "effects": [
     "xp 100"
    ],
    "result": [
     "你认得。门楣上压着三道水纹，那是管铅和水道的那一家，胡尔-乔卡德。{?flag.castellar_seen:它的井口你还去过。|}",
     "族里的账上有这一笔：围了六十五年，城破在灰前 6210 年，到今天已经七千六百多年了。围城的精灵把这一仗刻在了自家的墙上，连堡门上的铆钉都没数错，看得出刻得很得意。"
    ]
   },
   {
    "text": "拨开树根进入内室",
    "goto": "a4_15"
   }
  ]
 },
 "a4_15": {
  "id": "a4_15",
  "title": "最后一幅",
  "art": "load_17",
  "loc": "壁画厅尽头 · 树根后面",
  "text": [
   "树根后面就是最后一面墙。{?flag.a4_saw_hand:刀口浅，线是抖的。|这一幅比前面的都粗，刀口浅，线是抖的。}你举着灯。{?party.tan:阿坦就站在你左边，离你半步远。|}",
   "壁画中央，大地腾起一团火，碎石和雷电飞散。一人持杖自云中降下，伸向火焰的手臂却断在腕处。银披风下，他还缺了一条腿。雷电全朝他劈去，他的身影比火小得多。",
   "题字有两处。人旁边的那一行是“卡斯特拉尔，天空之神”。火旁边只有一个字：“终”。",
   "神王死了。他死在一千四百多年前灰烬之日的那场大火里，死的时候正伸手去挡它。厅里只听得见灯芯燃烧的轻响。",
   {
    "if": "party.garaele",
    "text": "加莱尔把本子摊在膝盖上，照着墙抄了两行。抄完以后笔悬了半天，第三行一个字也没落下去。"
   },
   {
    "if": "flag.a4_whole_god",
    "text": "前面那四幅里，他还是两只手两只脚，一样不缺。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "缺的是左臂和左腿。庙里的那尊像，我擦了整整十七年。"
   },
   {
    "if": "flag.god_avatar_claimed && party.tan",
    "speaker": "阿坦",
    "text": "那年他们说你是王的化身，你认下了。我当时就说过，你不是。"
   },
   {
    "if": "is.god && party.tan",
    "text": "一位活着的神就站在这面墙面前。阿坦没有问你是不是真的神。"
   },
   {
    "if": "is.god && party.tan",
    "speaker": "阿坦",
    "text": "你怕不怕？"
   },
   {
    "if": "origin == 'corintar'",
    "text": "你想的是另一件事。多米尼克说科琳升了天，可天上那把椅子的主人已经死了，就画在这里。那她升的是谁的天？"
   },
   {
    "if": "origin == 'corintar' && party.tan",
    "speaker": "阿坦",
    "text": "那天她倒下去的时候，脸是朝着哪一边的？"
   },
   {
    "if": "origin == 'corintar' && party.tan",
    "text": "{?flag.saw_her_look:你答得出来。当时你就在盾墙里，看得清清楚楚，她没有朝天上看。|你没看清，也就照实说了没看清。}"
   }
  ],
  "first": [
   "quest q_dragon stage 5",
   "codex mural",
   "codex castellar",
   {
    "if": "origin == 'corintar'",
    "then": [
     "quest q_o_corintar stage 3"
    ]
   }
  ],
  "choices": [
   {
    "text": "递灯给阿坦，让他自己看完",
    "if": "party.tan",
    "effects": [
     "flag tan_read_it",
     "approval tan +2"
    ],
    "result": [
     {
      "if": "flag.a4_tan_lamp",
      "speaker": "阿坦",
      "text": "我说过，这盏灯我想自己举。"
     },
     "他从左看到右，又从右看到左，还数了数画上的雷电，一共十一道。看完他把灯放在地上，试了一个小法术，手心里亮了一下。神王死了一千四百多年，可向他求来的神术还管用。",
     {
      "speaker": "阿坦",
      "text": "还灵。"
     }
    ],
    "goto": "a4_16"
   },
   {
    "text": "替阿坦慢慢读出来",
    "if": "party.tan",
    "effects": [
     "flag tan_shielded"
    ],
    "result": [
     "你挡住了那条断臂，从题字念起，一个字一个字地往下念。他没有绕过你去看。等你念完，他在你背后试了一个小法术，手心里亮了一下。神王死了一千四百多年，可向他求来的神术还管用。",
     {
      "speaker": "阿坦",
      "text": "还灵。"
     }
    ],
    "goto": "a4_16"
   },
   {
    "text": "读给阿坦听，补一句也许是画错了",
    "if": "party.tan",
    "effects": [
     "flag tan_shielded",
     "var lies +1",
     "hp -5",
     {
      "if": "var.lies >= 3 && !flag.a4_l3",
      "then": [
       "flag a4_l3",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     },
     {
      "if": "var.lies >= 6 && !flag.a4_l6",
      "then": [
       "flag a4_l6",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     },
     {
      "if": "var.lies >= 9 && !flag.a4_l9",
      "then": [
       "flag a4_l9",
       {
        "if": "party.tan",
        "then": [
         "approval tan -1",
         "flag a4_tan_counts"
        ]
       }
      ]
     }
    ],
    "result": [
     "话刚出口，你手背上就烫了一下，又多了一道红痕。这块地算账是不过夜的。",
     {
      "speaker": "阿坦",
      "text": "画有没有画错，我自己看得见。你刚才那一句，我也数上了。"
     },
     {
      "if": "flag.a4_tan_counts",
      "speaker": "阿坦",
      "text": "到三的倍数了，我照例问一回：这一句值不值？"
     },
     "他绕过你，自己把题字看了一遍，然后试了一个小法术，手心里亮了一下。神王死了一千四百多年，可向他求来的神术还管用。",
     {
      "speaker": "阿坦",
      "text": "还灵。"
     }
    ],
    "goto": "a4_16"
   },
   {
    "text": "触摸墙面，答应今后听阿坦祷告",
    "tag": "神",
    "if": "is.god && party.tan",
    "effects": [
     "flag tan_read_it",
     "flag god_answered_for_him",
     "approval tan -2"
    ],
    "result": [
     {
      "speaker": "阿坦",
      "text": "银龙也是这么干的。他替王答应了五百年。"
     },
     "别的他没有再说，只试了一个小法术，手心里亮了一下。",
     {
      "speaker": "阿坦",
      "text": "还灵。"
     },
     "从这天起，不管你人在哪里，每天天一亮都听得见他念的那四十句晨祷。"
    ],
    "goto": "a4_16"
   },
   {
    "text": "举灯照明，让每人自己看",
    "effects": [
     "flag tan_read_it"
    ],
    "result": [
     "灯油烧下去了一指。画上的雷电你也数了，是十一道。",
     {
      "if": "party.tan",
      "text": "阿坦借着你的灯把题字看了三遍，然后试了一个小法术，手心里亮了一下。神王死了一千四百多年，可向他求来的神术还管用。"
     },
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "还灵。"
     }
    ],
    "goto": "a4_16"
   }
  ]
 },
 "a4_16": {
  "id": "a4_16",
  "title": "第一场丧事",
  "loc": "壁画厅",
  "text": [
   "诸神之王卡斯特洛斯已经死了一千四百多年，直到今天才有人来为他送葬。没有遗体，也没有坟，只有眼前这面墙。来的人各行各的丧礼。",
   {
    "if": "party.ushka",
    "text": "乌什卡在墙根蹲了一会儿，想找骨头，没找着。她把锤子横放在墙根下，锤头朝那条断臂。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "没有骨头，归尘礼就做不全。锤子先押在这里，算我欠他一场。"
   },
   {
    "if": "party.garaele",
    "text": "加莱尔在等月亮。月神的信徒下葬要有月光，这厅顶正好塌了一角，成了个天井。她一直等到半夜，月光才照进来一条，正好落在题字上。她什么也没念，只把那条光落在哪里记在了本子上。"
   },
   {
    "if": "party.nixee",
    "text": "妮克西往墙根放了一枚金冠，正面朝上。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "死人的账是不过夜的。他这一笔倒好，过了一千四百多年的夜。算了，利钱我不算了。"
   },
   {
    "if": "party.tan",
    "text": "阿坦念的是晨祷。天还没亮，可他照样念，四十句，不快也不慢。"
   },
   {
    "if": "is.god && party.ushka",
    "speaker": "乌什卡",
    "text": "你是死不了的，将来也不会有人给你办丧事。这一场你看仔细了。"
   },
   {
    "if": "origin == 'sons'",
    "text": "1443 年，你们抬着一口棺材走出了帝国。祭司一路念着悼词，威克斯的兵就跟在后面。棺材里躺的是少主，人还活着。这次正好反过来，人是真死了，棺材却没有。"
   },
   "轮到你了。"
  ],
  "first": [
   "unflag a4_tan_counts"
  ],
  "choices": [
   {
    "text": "亲自主持丧礼",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "flag a4_led_rite",
     "approval tan +1"
    ],
    "result": "{?party.tan:阿坦往旁边让了一步，把那截权杖头递给你拿着。他说：“你来吧。我念了十七年，到底是念给谁听的，今天才算看见了。”|你站到了墙的正前面。}"
   },
   {
    "text": "依阵亡者的礼节安葬",
    "effects": [
     "world scale +1",
     "flag rite_done",
     "var rites +1",
     "log 卡斯特拉尔，天空之神。没有尸首，办了一场。",
     "rest short"
    ],
    "result": [
     "战死的人，照规矩是脸朝着敌人埋的。他没有尸首可摆，你们就把灯挪了挪，让那条断臂冲着火的那一面亮着。",
     {
      "if": "faction == 'tried'",
      "text": "你还添了一句，说他是下场试过的，拦没拦住另说。"
     },
     {
      "if": "flag.a4_led_rite",
      "text": "悼词是你念的，照的是你那一殿的念法。念到该接神名的地方，你停了一下，接上去的是他自己的名字。"
     }
    ],
    "goto": "a4_17"
   },
   {
    "text": "按长子继承的规矩，请阿德安主丧",
    "effects": [
     "world scale -1",
     {
      "if": "faction == 'heirs'",
      "then": [
       "rep temples +1"
      ]
     },
     "flag rite_done",
     "var rites +1",
     "log 卡斯特拉尔，天空之神。没有尸首，办了一场。",
     "rest short"
    ],
    "result": [
     "照坎诺的规矩，父亲的丧事该由长子来主持。神王的长子是阿德安。你把阿德安的名字念了三遍，又替这个不在场的孝子磕了头。",
     {
      "if": "faction == 'heirs'",
      "text": "理由你是说给墙听的：名分定下来了，后面的人才不用为这把空椅子再打一回。这句话，回去以后神殿里自有人爱听。"
     },
     {
      "if": "flag.a4_led_rite",
      "text": "悼词是你念的，照的是你那一殿的念法。念到该接神名的地方，你停了一下，接上去的是他自己的名字。"
     }
    ],
    "goto": "a4_17"
   },
   {
    "text": "只办丧礼，暂不谈继位",
    "effects": [
     "approval tan +1",
     "flag rite_done",
     "var rites +1",
     "log 卡斯特拉尔，天空之神。没有尸首，办了一场。",
     "rest short"
    ],
    "result": [
     "你们只管送，谁来接没有提，空出来的位子没有提。往后的事也没有提。送完了，各人把自己带来的那样东西又看了一眼。",
     {
      "if": "faction == 'crownless'",
      "text": "神王的位子就那么空着，你没往上面放任何人的名字。"
     },
     {
      "if": "flag.a4_led_rite",
      "text": "悼词是你念的，照的是你那一殿的念法。念到该接神名的地方，你停了一下，接上去的是他自己的名字。"
     }
    ],
    "goto": "a4_17"
   },
   {
    "text": "立即收拾行装离开",
    "effects": [
     "approval ushka -2"
    ],
    "result": "你说灯油不够了。{?party.ushka:乌什卡把锤子从墙根捡回来别回腰上，没有看你。|}一千四百多年他都等了，也不差这一个晚上。等不了这一个晚上的是你们。",
    "goto": "a4_17"
   }
  ]
 },
 "a4_17": {
  "id": "a4_17",
  "title": "那面墙",
  "text": [
   "{?flag.rite_done:丧事办完了，还剩下一件事|眼下还剩下一件事}：这面墙该怎么办。四个人四个主张，一直吵到了半夜。",
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "把门封了，拿石头砌死，什么都不往外带。尸首要落到谁也用不上的地步才算完，墙也一样。你带出去一张纸，就会有人拿它当旗子打。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "得告诉拜他的人。每天早上有好几万人对着空屋子念那四十句。我就是其中一个，念了十七年才知道。不该让他们再念十七年。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "拓下来存档吧，也就是四张纸的事。至于记下来的东西该归谁，我父母吵了一辈子也没吵出结果。我只管记，这个别叫我来挑。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "拿去换东西！康原的地，城约的印，南门的粮，这面墙能值半个坎诺。你们打算白白扔了？手里有货，先别说不卖。"
   },
   "众人争了许久，该说的话各自都说过两遍了。现在他们在等你开口。灯里的油只够再烧一个时辰。",
   "万神道上那座没屋顶的庙，门背后还抄着那四十一句晨祷。拓片要是进了城，第一个看见它的就是那个守庙的姑娘，她今年该有十六了。门要是砌死了，往后再有人从林子里走过来，看见的就只是一面新墙。",
   {
    "if": "origin == 'wex'",
    "text": "你在灯下给一封报告起了个头，“呈陛下御览”。这五个字写完，后面你就不知道该怎么写了。"
   }
  ],
  "first": [
   "quest q_wall stage 4"
  ],
  "choices": [
   {
    "text": "拓下最后一幅画，带回坎诺",
    "effects": [
     "flag wall_rubbed",
     "item +mural_rubbing",
     "world word +2",
     "approval garaele +2",
     "approval tan +1",
     "approval nixee +1",
     "approval ushka -1"
    ],
    "result": "最后一幅足足拓了四张纸才拓全。{?party.garaele:加莱尔的手很稳。|你的手不大稳。}墨是在集上换的，里面掺了树脂，干了以后发红。",
    "goto": "a4_18"
   },
   {
    "text": "用石头封门，空手离开",
    "effects": [
     "flag wall_sealed",
     "approval ushka +2",
     "approval tan -1"
    ],
    "check": {
     "skill": "athletics",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": [
      "你们砌了一天一夜。石头用的是塌下来的厅顶，一块一块对着茬口码上去，码得规规矩矩。",
      {
       "if": "party.garaele",
       "speaker": "加莱尔",
       "text": "我答应不说。可有人问起，我也不会否认。"
      }
     ],
     "goto": "a4_18"
    },
    "fail": {
     "text": [
      "砌到一半塌了一回，还砸了你的脚。重码的那半边是歪的，缝里塞的都是碎石。往后来的人一眼就看得出这是新砌的。",
      {
       "if": "party.garaele",
       "speaker": "加莱尔",
       "text": "我答应不说，可有人问起，我也不会否认。再说，这扇门一看就是新砌的，它自己就会说。"
      }
     ],
     "effects": [
      "hp -6"
     ],
     "goto": "a4_18"
    }
   },
   {
    "text": "先制作拓片，再砌墙封门",
    "effects": [
     "flag wall_rubbed",
     "flag wall_sealed",
     "item +mural_rubbing",
     "world word +2",
     "approval garaele +1",
     "approval ushka +1"
    ],
    "check": {
     "skill": "athletics",
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "先拓，拓了四张纸。再砌，砌了一天一夜，石头都是对着茬口码的，码得规规矩矩。{?party.ushka:乌什卡看了一眼你怀里的纸筒，转身继续搬她的石头。|}",
     "goto": "a4_18"
    },
    "fail": {
     "text": "拓片是拓好了。可门砌到一半塌了一回，砸了你的脚，重码的那半边是歪的。往后来的人一眼就看得出这是新砌的。",
     "effects": [
      "hp -6"
     ],
     "goto": "a4_18"
    }
   },
   {
    "text": "凿去最后一幅壁画",
    "effects": [
     "flag wall_defaced",
     "flag tan_stayed",
     "flag garaele_leaving",
     "approval garaele -5",
     "approval ushka -1",
     "quest q_dragon done"
    ],
    "result": [
     "{?party.ushka:锤子是跟乌什卡借的，她给了，只是脸色不好看。|你用的是随身带的锤子。}先掉下来的是断臂，接着是杖，最后才是那两行字。前后凿了一个时辰，地上落了一层白渣。",
     {
      "if": "party.tan",
      "speaker": "阿坦",
      "text": "剩下的我来守着。前面那些画里，他还是全的。你们走吧。"
     },
     {
      "if": "party.tan",
      "text": "他没有跟你们争，只把权杖头从包里拿出来，摆在了凿过的墙根下。"
     },
     {
      "if": "party.garaele",
      "speaker": "加莱尔",
      "text": "这一趟我陪你们走完。等出了林子，我就回月山去。往后的事我不记了。"
     }
    ],
    "goto": "a4_18"
   }
  ]
 },
 "a4_18": {
  "id": "a4_18",
  "title": "那根杖，和回去的路",
  "loc": "塞拉河上游 · 石头垒的小龛",
  "text": [
   "回程先要经过那座小龛。{?item.broken_scepter >= 1:杖在你背上背了一路，肩膀都麻了。|杖还横在龛里，贝珠多了两粒。}那个猎手还站在空地旁边，这次他走近了十步。",
   "六尺长的白石杖足以让万神道的人相信你们的见闻。可龛前的贝珠是今年秋天才供的，这里的信众也还在用它祭拜。",
   {
    "if": "flag.tan_stayed",
    "text": "阿坦没有跟来。他在神殿门口拿三块石头垒了个灶，留下了。"
   },
   {
    "if": "flag.contract_staff",
    "text": "你虎口上那个红点还在。约上说的是，走的时候它得在原处。"
   },
   {
    "if": "flag.toll_staff",
    "text": "你还答应过愚者亲王，回程的时候把它留在秋门。约有两个，杖却只有一根。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "这是他的东西。他没留下骨头，就剩这个了。放回去吧。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "它在这里有人供着，带回万神道也会有人供。到底哪一头才算数，我不知道。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "还是那句话，手里有货，先别说不卖。"
   }
  ],
  "first": [
   {
    "if": "flag.tan_stayed",
    "then": [
     "companion -tan"
    ]
   }
  ],
  "choices": [
   {
    "text": "把权杖带回坎诺",
    "effects": [
     "flag staff_home",
     {
      "if": "item.broken_scepter < 1",
      "then": [
       "item +broken_scepter"
      ]
     },
     "world word +1",
     {
      "if": "flag.contract_staff",
      "then": [
       "flag contract_broken",
       "flag lies_cursed",
       "var lies +1",
       "damage 2d8",
       {
        "if": "var.lies >= 3 && !flag.a4_l3",
        "then": [
         "flag a4_l3",
         {
          "if": "party.tan",
          "then": [
           "approval tan -1",
           "flag a4_tan_counts"
          ]
         }
        ]
       },
       {
        "if": "var.lies >= 6 && !flag.a4_l6",
        "then": [
         "flag a4_l6",
         {
          "if": "party.tan",
          "then": [
           "approval tan -1",
           "flag a4_tan_counts"
          ]
         }
        ]
       },
       {
        "if": "var.lies >= 9 && !flag.a4_l9",
        "then": [
         "flag a4_l9",
         {
          "if": "party.tan",
          "then": [
           "approval tan -1",
           "flag a4_tan_counts"
          ]
         }
        ]
       }
      ]
     }
    ],
    "result": [
     "你拿帆布把杖裹了三层，捆在担架上。打进林子以来，这副担架还是第一次抬东西。",
     {
      "if": "flag.contract_broken",
      "text": "刚走出空地，你虎口上那个红点就裂开了。血是烫的，顺着手腕往下淌，淌过的地方起了一道新痕。猎手把矛尖抬起来，却没有追。你毁了跟这块地立的约。"
     },
     {
      "if": "flag.contract_broken && flag.a4_tan_counts && party.tan",
      "speaker": "阿坦",
      "text": "许了的没有办，这也算一句。我数上了。"
     }
    ],
    "goto": "a4_18b"
   },
   {
    "text": "将杖归还神龛",
    "effects": [
     "flag staff_returned",
     {
      "if": "item.broken_scepter >= 1",
      "then": [
       "item -broken_scepter"
      ]
     },
     "approval ushka +1",
     {
      "if": "flag.contract_staff",
      "then": [
       "heal 4d8"
      ]
     }
    ],
    "result": [
     "{?visited.a4_13b:你把它从背上解下来，横着放回龛里，蓝球朝东，跟原先一样。|杖还横在龛里，蓝球朝东，你们从贝珠旁边跨了过去。}那个猎手走过来，往石板上添了一粒贝珠。",
     {
      "if": "flag.contract_staff",
      "text": "虎口上那个红点不见了。当天夜里谁也没做梦，早上起来，一路上受的伤都轻了一半。跟这块地立的约，你守住了。"
     }
    ],
    "goto": "a4_18b"
   }
  ]
 },
 "a4_18b": {
  "id": "a4_18b",
  "title": "秋门",
  "loc": "血林 · 秋门",
  "text": [
   "秋门立在两棵黄叶树之间。满林的叶子都是红的，唯独这两棵颜色不同，树间的地面也没有积雪。",
   {
    "if": "flag.blackbranch_deal",
    "text": "黑枝亲王的乌鸦蹲在左边那棵树上，把人数了一遍{?flag.tan_stayed:，少了一个，它又数了一遍|}。"
   },
   {
    "if": "!flag.toll_staff && !flag.blackbranch_deal",
    "text": "过路的账进来的时候就付过了。门口没有人伸手。"
   },
   {
    "if": "flag.toll_staff",
    "text": "愚者亲王坐在两棵树中间的一把矮凳上。今天他是个瘦子，见了你就伸出一只手来，手心朝上。"
   },
   {
    "if": "flag.toll_staff",
    "speaker": "愚者亲王",
    "text": "那根杖呢？我们可是说好了的。我想拿去给几位朋友瞧瞧，看看他们能猜错成什么样子。不给也行，不给的话，每位留下十年。"
   },
   {
    "if": "flag.toll_staff && flag.staff_returned",
    "text": "你两手空空。杖已经放回龛里了。"
   },
   {
    "if": "flag.toll_staff && party.nixee",
    "speaker": "妮克西",
    "text": "还有第三种付法，他不说，我替他说：就是那把凳子。"
   }
  ],
  "choices": [
   {
    "text": "亲手把杖交给他",
    "if": "flag.toll_staff && flag.staff_home",
    "effects": [
     "flag staff_fey",
     "unflag staff_home",
     "item -broken_scepter",
     "world word +1"
    ],
    "result": [
     "他是用两只手接的，接得很小心。接过去他就拿它当拐棍，在地上拄了两下。",
     {
      "speaker": "愚者亲王",
      "text": "我先拿去给几位老朋友瞧瞧。黑枝那位见了，脸色一定好看得很。他们准要问这是谁的，我就说，你们猜呀。"
     }
    ],
    "goto": "a4_18c"
   },
   {
    "text": "让妮克西留下偿债",
    "if": "flag.toll_staff && party.nixee",
    "effects": [
     "unflag toll_staff",
     "flag toll_nixee"
    ],
    "result": [
     {
      "speaker": "妮克西",
      "text": "我就知道这笔账绕不过去。康原的欠条你拿好。蓝牙要是认，你就去讨，他要是不认，你就去跟他吵。"
     },
     "亲王站起来，把矮凳让给了她。她爬了上去，两只脚够不着地。"
    ],
    "goto": "a4_18c"
   },
   {
    "text": "穿过两棵树之间的门",
    "effects": [
     {
      "if": "flag.toll_staff",
      "then": [
       "unflag toll_staff",
       "flag toll_years",
       "flag a4_gate_years",
       "approval ushka -1",
       "approval tan -1",
       "approval nixee -1",
       "approval garaele -1"
      ]
     }
    ],
    "result": [
     {
      "if": "flag.a4_gate_years",
      "speaker": "愚者亲王",
      "text": "那就拿年头来付吧，每位十年，出去了再算。我不拦门，我只管记账。"
     },
     {
      "if": "flag.a4_gate_years",
      "text": "{?is.longlived:十年在你不过是个零头，在别人可不是。|迈过去的时候你的膝盖响了一声，以前是不响的。}"
     },
     {
      "if": "!flag.a4_gate_years",
      "text": "两棵树中间比外面要暖和一些。"
     }
    ],
    "goto": "a4_18c"
   }
  ]
 },
 "a4_18c": {
  "id": "a4_18c",
  "title": "回去的路",
  "art": "ev_magical_forest_animated",
  "loc": "妖精界 · 一条直路",
  "text": [
   "返程短得出奇。雪林和灯都不见了，一条直路两旁，树木等高、等粗、等距。数到第三十棵，你就放弃了。",
   "担架扛在肩上，{?flag.staff_home:帆布里裹着那根杖，压得杆子直往下弯。|上面是空的，帆布叠成一条捆在杆子上。}{?flag.wall_rubbed:拓片卷成了筒，塞在最干的那只包里。|}身后有人在喊你，喊一声就近一步。",
   "{?flag.blackbranch_deal:乌鸦飞在前面，这次它不再回头数人了。|带路的换了一个，是个不说话的小妖，背上背着一把空凳子。}",
   {
    "if": "party.tan",
    "text": "阿坦又数起了脉搏。数到两千下，他说不对，这一段路走得太快了，脉搏跟不上。"
   },
   {
    "if": "item.fey_token >= 1",
    "text": "你兜里那枚木扣子是热的，还一个劲地朝着一个方向拽。"
   }
  ],
  "first": [
   {
    "if": "flag.toll_nixee",
    "then": [
     "companion -nixee"
    ]
   }
  ],
  "choices": [
   {
    "text": "沿直路前行，不回头",
    "check": {
     "abil": "wis",
     "dc": 15,
     "save": true,
     "adv": "item.fey_token >= 1",
     "mods": [
      {
       "if": "flag.lies_cursed",
       "n": -2,
       "why": "血律记着你的话"
      }
     ]
    },
    "ok": {
     "text": "你没有回头。身后那人喊了你一路，喊的是你的全名，连你自己都快忘了的那个。",
     "goto": "a4_19"
    },
    "fail": {
     "text": "你回了一下头。就那么一下，出来的地方便偏了三十里，是一片沼泽，水有齐腰深。等你们绕回那圈黑土，靴子里的水都还没倒干净。",
     "effects": [
      "hp -8"
     ],
     "goto": "a4_19"
    }
   }
  ]
 },
 "a4_19": {
  "id": "a4_19",
  "title": "出林",
  "art": "ev_feyforest",
  "loc": "深林边缘 · 旧日庇护地以南",
  "date": "1472年奈拉月",
  "text": [
   "出林时依旧是秋天，黄叶和进去时几乎一模一样。黑土旁的小棚却换了屋顶，旁边还添了一座小坟。",
   "寄车的老头已经不在了，看车的换成了一个十来岁的男孩。板车还在，车轴上过油，骡子换了一头。那扇记名字的旧门板靠在棚柱上，上面的炭字描过好几回了。",
   {
    "speaker": "看车的男孩",
    "text": "这车是我爷爷留下的。他说了，寄车的人不回来，车就不许卖。你们就是门板上写的那几个人吧？"
   },
   "{?party.tan:阿坦|你}问他今年是哪一年。",
   {
    "speaker": "看车的男孩",
    "text": "1472 年，奈拉月。东边又在打仗了。"
   },
   "你们在里面只过了一个冬天，外面已经过去了十一年。",
   {
    "if": "is.immortal",
    "text": "男孩盯着你看了半天。他爷爷收下车的那天，你就是这副样子。爷爷跟他说过，里面有一个不会老的，不用怕，可也别信。"
   },
   {
    "if": "flag.toll_years && !flag.owes_fey_miracle",
    "text": "那十一年是林子拿走的，另外那十年是你们自己付给愚者亲王的。{?is.longlived:你只当是少了个零头。|你上车的时候得扶一把车帮了。}"
   },
   {
    "if": "flag.owes_fey_miracle",
    "text": "同伴们脸上只添了林子拿走的那十一年。另外那十年都记在你一个人头上，可你脸上一道纹也没多。男孩那块门板上，你的名字下面不知是谁添了一个小小的笑脸。"
   },
   {
    "if": "flag.a4_acorn",
    "text": "你兜里那枚木扣子变成了一颗橡子。"
   },
   {
    "if": "party.tan",
    "speaker": "阿坦",
    "text": "守庙的那个小姑娘，今年该十六了。门背后的粉笔字，也不知道还看不看得清。"
   },
   {
    "if": "party.ushka",
    "speaker": "乌什卡",
    "text": "十一年了。氏族里跟我同一年出门巡游的，该回去的都回去了。我是最后一个。"
   },
   {
    "if": "party.nixee",
    "speaker": "妮克西",
    "text": "十一年的利钱！规矩里可没有这一条，我得现拟一条。"
   },
   {
    "if": "party.garaele",
    "speaker": "加莱尔",
    "text": "{?flag.garaele_leaving:到了第一个岔路口，我就下车。|日期那一栏我打算写两个，林子里的写一个，外面的写一个。}"
   },
   {
    "if": "flag.toll_nixee",
    "text": "你左边兜里有一张纸，叠得只有指甲盖大，是康原的欠条。"
   },
   {
    "if": "flag.tan_stayed",
    "text": "车上少了一个人。他常坐的那个角落，谁也没去坐。"
   }
  ],
  "first": [
   "level 10",
   "quest q_wall done",
   "quest q_cart stage 5",
   "rest short",
   "unflag a4_tan_counts",
   {
    "if": "item.fey_token >= 1",
    "then": [
     "item -fey_token",
     "flag a4_acorn"
    ]
   }
  ],
  "next": "f_01"
 }
};
