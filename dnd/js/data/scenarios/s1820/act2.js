// s1820 / act2.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a2_01": {
  "id": "a2_01",
  "title": "报纸摘要一",
  "chapter": "第二幕 · 路权",
  "art": "ev_castellos_is_dead",
  "loc": "安本科斯特 · 铸炉街",
  "date": "1823年苏伦月",
  "text": [
   "1823 年苏伦月。三年里公司押过四趟晶体车，替史家会搬过一回库房。别摇的罐子还在窗台上，三年没挪过窝。埃塔把这三年的剪报钉在账房北墙上，一条一颗钉子，钉子是跟楼下蜡烛铺借的，记了账。",
   {
    "cls": "letter",
    "text": "《安本科斯特论坛报》：埃斯玛利亚公投{?flag.volleys:“因故中止”，重办日期待议|计票完毕，结果“供议会参考”}。议会参考了三年。"
   },
   {
    "if": "flag.blame_crowd",
    "cls": "letter",
    "text": "《斗兽场哨兵报》：康威尔事件定为“滋事”，依据是在场一家冒险公司的报告。"
   },
   {
    "if": "flag.blame_officer",
    "cls": "letter",
    "text": "《康威尔通报》：马洛中尉调去北边看仓库，“另有任用”。没有开庭。"
   },
   {
    "if": "flag.blame_unknown",
    "cls": "letter",
    "text": "《康威尔通报》：康威尔事件起因“不明”，全卷归档。"
   },
   {
    "if": "flag.square_stood && !flag.square_miracle",
    "cls": "letter",
    "text": "《康威尔通报》给“站到两排人中间的那位队长”留了半栏。名字拼错了一个字，埃塔拿红笔改了。"
   },
   {
    "if": "flag.square_mages_out",
    "cls": "letter",
    "text": "《论坛报》第四版：康威尔当日，“公务法师均已安全撤离”。"
   },
   {
    "if": "flag.square_held_line",
    "cls": "letter",
    "text": "陆军部的嘉奖函，抬头是“协助维持秩序”。埃塔照规矩归了档，没往墙上钉。"
   },
   {
    "if": "flag.skiplist_obeyed",
    "cls": "letter",
    "text": "《泰卢姆时报》：梨林等四区歉收，救济粮按户登记。登记表末一栏是“上次投票意向”。"
   },
   {
    "if": "flag.skiplist_defied",
    "cls": "letter",
    "text": "《康威尔通报》：梨林等四区收成“意外良好”。{?flag.refusal_on_paper:部里那封申斥信写好了，一直没寄。|部里的申斥信寄到了公司，埃塔拿它垫了茶壶。}"
   },
   {
    "if": "flag.skiplist_halved",
    "cls": "letter",
    "text": "十个区都收了半季，都撑到了开春。没有一个区来信道谢，也没有一个区来信骂。"
   },
   {
    "if": "flag.skiplist_read_out",
    "cls": "letter",
    "text": "《泰卢姆传声报》把那封十三个字的电报编成了顺口溜，传令员喊了一个冬天。"
   },
   {
    "if": "flag.skiplist_caught",
    "cls": "letter",
    "text": "陆军部重印了“可靠承包人”名录，少了一行。埃塔在那一行的位置画了个框。"
   },
   {
    "if": "flag.lianne_arrested",
    "cls": "letter",
    "text": "《哨兵报》：前战斗法师加贝莱尔判七年。服刑地点不公开，“以防劫狱”。"
   },
   {
    "if": "flag.lianne_freed",
    "cls": "letter",
    "text": "《论坛报》：加贝莱尔仍在逃，赏格涨到三百金冠。"
   },
   {
    "if": "flag.lianne_supplied",
    "cls": "letter",
    "text": "这一条没登报，是从吉列姆旧同事的信上抄的：康威尔以西有所不挂牌的学校，今年多收了四个学生。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆站在墙跟前一条一条念出声。三年前他的头发是棕的，如今是铁灰色，念到自己老家那一条，他把眼镜往上推了推。"
   }
  ],
  "first": [
   "world tears -1",
   "world dove -1",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "next": "a2_01b"
 },
 "a2_01b": {
  "id": "a2_01b",
  "title": "北墙的下半截",
  "text": [
   {
    "if": "flag.union_card",
    "cls": "letter",
    "text": "《论坛报》：法德伦的工会给一台机器发了会员证。出生地一栏填的是“七号线”。"
   },
   {
    "if": "!flag.union_card",
    "cls": "letter",
    "text": "《论坛报》：工会就“机器能否入会”第五次表决。推迟。"
   },
   {
    "cls": "letter",
    "text": "《加韦顿观察》：北方的布拉斯兰斯将军渡了河，自己加了冕。配的木刻像刻得太急，说明写着“左三”，左边只刻了两个人。"
   },
   {
    "cls": "letter",
    "text": "《泰卢姆传声报》：布西拉尔第二回、第三回下了漩涡。船都回来了，人数没登。卡尔希尔的游学团已回国，带走议事规则四箱。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "游学团走的时候没带你。团长留了一句话：题目没写完的，接着写。"
   },
   {
    "if": "flag.report1_full",
    "cls": "letter",
    "text": "《哀恸日评论》第六版：陆军部“为屯垦计”，在埃斯玛利亚低价收了一批死地，经办人是某位将军的副官。"
   },
   {
    "if": "!flag.report1_full",
    "text": "合伙人这三年没有一个字见报。钱照到。"
   },
   {
    "if": "origin == 'lorent' && flag.purse_spent_mages",
    "cls": "letter",
    "text": "《洛伦特日报》：两位“自安本纳尔来投”的变化师获聘鲁本奈尔大学。"
   },
   {
    "if": "origin == 'lorent' && flag.purse_to_peargrove",
    "cls": "letter",
    "text": "梨林来信：你那袋钱买的种子出了苗，没用咒。使馆至今不知道这笔钱去了哪儿。"
   },
   {
    "if": "is.god",
    "cls": "letter",
    "text": "《传声报》：舱底区多了一座供{god}的小龛。香钱归谁，两拨人打了一年官司，法官要求“当事神”到庭。"
   },
   {
    "if": "flag.soil_mended",
    "cls": "letter",
    "text": "那个区连着三年没请巡回队，也没缴施术捐。部里在研究怎么给一块好地开罚单。"
   },
   {
    "if": "flag.box_turned_blue",
    "cls": "letter",
    "text": "军需处那盒变蓝的子弹结了案，结论是“储存不当”。"
   },
   {
    "if": "flag.square_miracle",
    "cls": "letter",
    "text": "康威尔广场上停过的四十来颗弹头被人捡去当护身符卖，一颗两个金冠。市面上流通的已有三百多颗。"
   },
   {
    "if": "flag.tears_called",
    "cls": "letter",
    "text": "那座谷仓的主人告了天文台，败诉，改告“不明人士”。"
   },
   {
    "if": "is.immortal",
    "text": "埃塔把你的养老金重算了一遍，算到一半停了笔，在页边画了个问号。账本上你那一栏的签名，跟三年前的描得上。楼下蜡烛铺老板娘的女儿开始站柜台了。"
   },
   "最后一颗钉子钉的是一张汇票。",
   {
    "speaker": "埃塔",
    "text": "三百金冠。三年的预付款，一年一百，一次到的。他十三年没迟过一回款。队长签收，或者队长说个别的办法。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）共和国欠我十一个月。这位倒先给三年。"
   }
  ],
  "choices": [
   {
    "text": "签收，三百金冠入账",
    "effects": [
     "flag retainer_taken",
     "rep partner +1",
     "gold +300"
    ],
    "result": "埃塔吹干墨水，把汇票夹进账本。“收讫。往后三年他问什么，咱们答什么。”",
    "goto": "a2_02"
   },
   {
    "text": "退一半，这三年公司也接外头的活",
    "effects": [
     "flag retainer_split",
     "rep partner -1",
     "gold +150",
     {
      "if": "faction == 'shield'",
      "then": [
       "rep union +1"
      ]
     },
     {
      "if": "faction == 'seal'",
      "then": [
       "rep charter +1"
      ]
     },
     {
      "if": "faction == 'lantern'",
      "then": [
       "rep church +1"
      ]
     }
    ],
    "result": "埃塔另起一页，页眉写“外活”。合伙人的回电只有两个字：“知悉。”她把这两个字看了很久，没看出别的。",
    "goto": "a2_02"
   },
   {
    "text": "拿这笔钱替布拉跟共和国打欠饷的官司",
    "effects": [
     "flag backpay_suit",
     "rep republic -1",
     "approval bura +2"
    ],
    "result": "状子递进去那天，书记官问被告是谁。埃塔答：“共和国。地址你们有。”{?party.bura:布拉在法院门外站了一上午，站的是岗哨的姿势。|状纸上原告一栏写的是“铁颌，中士，1810”。}",
    "goto": "a2_02"
   }
  ]
 },
 "a2_02": {
  "id": "a2_02",
  "title": "银团",
  "art": "ev_anb_global_trade",
  "loc": "安本科斯特 · 阿斯拉银行",
  "text": [
   "阿斯拉银行的总号 1410 年挂的牌，门槛让矮人的靴子磨出了两道槽。银团的人在长桌那头坐了一排，开口的只有一个，胡子编成三股，每股坠一枚砝码。",
   {
    "speaker": "银行的矮人",
    "text": "一条线。从玛瑙之门山下的矮人之路接出来，往西进东坎诺。贵公司勘测，护卫，签字。三样，一个价。"
   },
   "线上有两个国家。安卡迪亚禁巫师，魔法领地禁机器。铁路走哪边，合同上写的是“以测量方队长签字认定为准”，那一行底下留了两指宽的空。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "两指宽。我上回见这么宽的栏，填的是“奉命不救”。"
   },
   "出门的时候，隔壁《论坛报》的门房正把一个矮人往外请。矮人抱着一只包铁角的木箱，胡子上沾着粉笔灰。",
   {
    "speaker": "门房",
    "text": "第七家了，老先生。我们不登星星。"
   }
  ],
  "first": [
   "quest q_right_of_way start",
   "codex c_castonath_line"
  ],
  "choices": [
   {
    "text": "多要一笔预付款",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 13,
     "mods": [
      {
       "if": "rep.charter >= 2",
       "n": 2,
       "why": "特许商的名声"
      }
     ]
    },
    "ok": {
     "text": "你报了沿线两国的哨卡数、一趟工程车的煤钱和四个人的抚恤。他拨了三回砝码，添了一百五十金冠。“抚恤那一项，本行希望用不上。”",
     "effects": [
      "gold +150"
     ]
    },
    "fail": {
     "text": "你说到“风险”两个字，他把这两个字记了下来，记在“承包方”那一栏底下。预付款一个铜子没添。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "看他数钱的手",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14
    },
    "ok": {
     "text": "他报数的时候，眼睛看的是你身后那扇金库门。桌角压着两封退股的信，日子是上个月。这条线不成，这家银行过不了冬。",
     "effects": [
      "flag bank_thin"
     ]
    },
    "fail": {
     "text": "你盯得太久了。他把茶杯挪到了你够不着的地方。"
    }
   },
   {
    "text": "问他：有限责任，倒了谁赔",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr' && !flag.bank_thin",
    "once": true,
    "effects": [
     "flag bank_thin"
    ],
    "result": "他愣了一下，开始解释。解释到第三句自己停了，砝码在胡子上晃。你把这三句原样记进了考察笔记，旁边注：他没说完。"
   },
   {
    "text": "在合同里添一条：罢工、战事视为不可抗力",
    "tag": "印",
    "if": "faction == 'seal'",
    "once": true,
    "effects": [
     "flag clause_force_majeure"
    ],
    "result": "他逐页签了缩写，十一页，签得很慢。“贵公司三百七十七年没毁过约。头一回见守约的人先给自己留门。”"
   },
   {
    "text": "签字，去东站",
    "goto": "a2_02b"
   }
  ]
 },
 "a2_02b": {
  "id": "a2_02b",
  "title": "东站",
  "loc": "安本科斯特 · 东站",
  "text": [
   "东站三号站台停着公司的工程车：一节客车，一节棚车，一节装仪器的平板。四号站台停的是另一列，车窗里全是灰蓝色的军帽。",
   "安卡迪亚的兵，照月神之冠条约借道。站长举着一面小旗，从他们进站到现在，旗子没动过。",
   "抱箱子的矮人也在这儿。他把一张银团的聘书拍给检票的看，回头找人帮他抬箱子，站台上没人接他的眼神。",
   {
    "if": "origin == 'anbennar'",
    "text": "那列兵车走月河支线，明天中午过你老家的站。一个卖烟丝的认出了你身上那件没领章的旧制服。"
   },
   {
    "if": "origin == 'anbennar'",
    "speaker": "卖烟丝的",
    "text": "你穿过那身皮。你说句实在的，共和国答应过的事，还算不算？"
   },
   {
    "if": "origin == 'lorent'",
    "text": "使馆的听差在车门口等你，递上一张对折的便条，没有抬头：“此线若归安卡迪亚，于我不利。”"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）一列车，四百条枪，借的是咱们的道。车票钱谁出，我想知道。"
   }
  ],
  "choices": [
   {
    "text": "帮矮人把箱子抬上工程车",
    "once": true,
    "effects": [
     "flag a2x_helped_druznar"
    ],
    "result": "箱子沉得不像装衣裳的。他上下打量你一遍。“德鲁兹纳。暗望所。箱子里是玻璃。脚底下看着点，年轻人。”"
   },
   {
    "text": "告诉卖烟丝的：算",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar' && !flag.a2x_station_said",
    "once": true,
    "effects": [
     "flag a2x_station_said",
     "rep republic +1"
    ],
    "result": "他点点头，把烟丝包好递给你，没收钱。“那我再等等。我等了十三年，不差这一列车。”"
   },
   {
    "text": "告诉卖烟丝的：不知道",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar' && !flag.a2x_station_said",
    "once": true,
    "effects": [
     "flag a2x_station_said",
     "rep union +1"
    ],
    "result": "他笑了，笑得咳起来。“头一回有穿这身皮的跟我说实话。”半个站台的脚夫都往这边看了一眼。"
   },
   {
    "text": "让听差带回一句：知道了",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "once": true,
    "effects": [
     "rep wand +1"
    ],
    "result": "听差把这三个字默念了两遍才走。使馆会把“知道了”读成“照办”，这是他们的习惯，你没有纠正。"
   },
   {
    "text": "上车",
    "goto": "a2_03"
   }
  ]
 },
 "a2_03": {
  "id": "a2_03",
  "title": "哨卡",
  "loc": "安卡迪亚边境 · 哨卡",
  "text": [
   "安卡迪亚的哨卡是一道横木、一间刷了石灰的板房。哨兵不看证件。他从怀里摸出一块拇指大的达姆斯塔尔，举到每个人鼻子跟前晃。",
   {
    "if": "party.guilhem",
    "text": "晃到吉列姆，他的眼珠子跟着走了半圈。哨兵笑了，朝板房里吹了声口哨。"
   },
   {
    "if": "!party.guilhem && is.caster && !is.artificer",
    "text": "晃到你，你的眼珠子自己跟了过去，拦都拦不住。哨兵笑了，朝板房里吹了声口哨。"
   },
   {
    "if": "!party.guilhem && !(is.caster && !is.artificer)",
    "text": "晃了一圈，没有谁的眼珠子跟着走。哨兵不大甘心，还是朝板房里吹了声口哨。"
   },
   "出来的是个上尉，领口敞着，手里一沓表格，表格上压着半只咬过的苹果。",
   {
    "speaker": "奥托",
    "text": "莫雷塞德的奥托，这段边境归我管饭。法师登记费一个金冠，瞒报罚十二个。我给你开十二个的那张，咱俩一人六个。银团报销，谁也不亏。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "这地方当过兵的才有票。这规矩我挑不出毛病。（铰链响了一声。）挑不出毛病，我不痛快。"
   },
   {
    "if": "is.god",
    "text": "晶体举到你跟前，亮成了白的，哨兵的手背照得见骨头。他翻出十二个金冠的那张表，笔在“种族”一栏上悬了半天。"
   },
   {
    "if": "is.god",
    "speaker": "奥托",
    "text": "神迹眼下什么行市？我不贪，抽一成。军需处那边我去说，就说是“特种晶源”。"
   }
  ],
  "first": [
   "codex c_ancardia",
   "codex c_oto"
  ],
  "choices": [
   {
    "text": "说队里没有法师，只有测量员",
    "check": {
     "skill": "deception",
     "dc": 14,
     "party": true,
     "dis": "is.caster && !is.artificer"
    },
    "ok": {
     "text": "奥托把你们挨个看了一遍，在表上打了个勾。“测量员。行。你们这行眼珠子都挺灵。”他把苹果吃完了，核扔进了表格筐。",
     "goto": "a2_04"
    },
    "fail": {
     "text": "“测量员。”奥托把晶体往桌上一搁，{?party.guilhem:吉列姆的手自己伸了过去|队里有一只手自己伸了过去}。“十二个金冠。名字我替你们填，每月初七，兵站镇，带上胳膊。”",
     "effects": [
      "flag registered_mages",
      "gold -12"
     ],
     "goto": "a2_04"
    }
   },
   {
    "text": "照章登记，交一个金冠",
    "tag": "施法者",
    "if": "is.caster && !is.artificer",
    "effects": [
     "flag registered_mages",
     "gold -1",
     "rep republic +1"
    ],
    "result": "你把姓名、师承、每日施术次数一栏一栏填满。奥托接过表，很失望。“头一回见自己往里走的。没意思。每月初七，兵站镇，带上胳膊。”",
    "goto": "a2_04"
   },
   {
    "text": "让他开十二个的那张",
    "effects": [
     "flag registered_mages",
     "flag a2x_oto_deal",
     "gold +6"
    ],
    "result": "你付六个，收据上写十二个，等银团报销下来公司净落六个。奥托把两份钱分两个口袋装好。“合作愉快。每月初七，兵站镇。”埃塔把那张收据看了很久。",
    "goto": "a2_04"
   },
   {
    "text": "接过他的酒壶，聊两句军需",
    "tag": "武人",
    "if": "is.martial",
    "once": true,
    "effects": [
     "flag a2x_oto_talked"
    ],
    "result": "他认得出握过枪的手。“议会上礼拜又动了拳头，砸坏两把椅子，法案还是没过。老达利昂办事一板一眼，一仗不打。我要这条线，一天运两个团。到那时候军需处的账，得有自己人看着。”他朝你挤了挤眼，意思是你也算一个。"
   }
  ]
 },
 "a2_04": {
  "id": "a2_04",
  "title": "测量队的营地",
  "art": "ev_artifice_gear",
  "loc": "安卡迪亚 · 河滩营地",
  "date": "1823年苏伦月底",
  "shop": {
   "name": "随队的贩子和矮人工具车",
   "blurb": "贩子的药按瓶卖，能讲价。工具车的铁按斤两卖，不能。",
   "stock": [
    "healing_potion",
    "greater_healing_potion",
    "antidote",
    "bandage",
    "alchemist_fire",
    "hold_battleaxe",
    "hold_warhammer",
    "factory_rifle",
    "breastplate",
    "hold_shield",
    "ward_runestone"
   ]
  },
  "text": [
   "车队在一片卵石河滩上扎了营。工程车顶支着三脚架，棚车门口晾着测绳。从这一趟起埃塔带着铁箱随队，箱子上坐着她自己。",
   "银团雇来修测量仪的侏儒叫蒂尔妲·双扳，两天修好了仪器，第三天开始拆别的。那个抱箱子的矮人天一黑就上车顶，谁也不理。",
   {
    "speaker": "别摇",
    "text": "你们这儿的空气比城里还淡。昨天夜里那一口是什么，煤烟？记半笔，算我替你们尝过。"
   },
   {
    "if": "race == 'lizardfolk'",
    "text": "你管她叫勿摇，三年了。她还是没纠正，只在罐子盖内侧又划了一道。"
   },
   "{?world.tears <= 3:她的罐子挂在车辕上，光要拿手拢着才看得见。|她的罐子挂在车辕上，光比三年前暗了一档，夜里还够照亮一页账。}",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "听说轨头上的筑路工一多半是林墙来的。我有个表侄在那儿扛枕木，上回见他才到我腰。"
   },
   {
    "if": "flag.a2x_runner_saved",
    "text": "那个没登记的孩子在工程车里睡了半夜，天亮前走了。他留下一句话：罐子都往西去，进了卡斯托纳斯的西门，找旧锻炉后头那扇新铁皮门。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "精算表上没有你这一行。我划了一行。保费那一栏空着，全城的保险行没有一家敢填。"
   }
  ],
  "choices": [
   {
    "text": "去看蒂尔妲新做的那杆秤",
    "once": true,
    "goto": "a2_04b"
   },
   {
    "text": "下游的河滩上有灯在晃，过去看看",
    "once": true,
    "goto": "a2_04c"
   },
   {
    "text": "爬上车顶找那个矮人",
    "once": true,
    "effects": [
     "codex c_druznar",
     {
      "if": "is.dwarf",
      "then": [
       "flag a2x_eyepiece"
      ]
     }
    ],
    "result": [
     {
      "speaker": "德鲁兹纳",
      "text": "1699 年我看见它来。1810 年我看见它碎。你多大，年轻人？……那你一回也没赶上。"
     },
     "{?is.dwarf:他照样管你叫年轻人，可是把目镜的盖子拧开了，朝你偏了偏头。|他没让你碰镜子，连三脚架的影子都不许你踩。}"
    ]
   },
   {
    "text": "钻进仪器箱底下，替蒂尔妲拧那颗螺丝",
    "tag": "小个子",
    "if": "is.small",
    "once": true,
    "effects": [
     "flag a2x_screw"
    ],
    "result": "“往里（再往里（过了，回来半指））好，就这颗。”你满手机油爬出来。她已经在给车顶的望远镜画新支架了，图上留了一个你这么大的检修口。"
   },
   {
    "text": "问娜尔雯今年数到几声了",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     "她把本子翻到那一页给你看：九道竖线，每道底下一个日期。",
     {
      "speaker": "娜尔雯",
      "text": "九声。1820 年是十一声。我没说它在变少。上回有人替它下结论，是 1666 年，那位第二天就走了。"
     }
    ]
   },
   {
    "text": "看吉列姆手里那封梨林来的信",
    "if": "party.guilhem",
    "once": true,
    "effects": [
     "approval guilhem +1"
    ],
    "result": [
     "信是他父亲写的，一共四行。今年巡回队没来，梨收了五成，麦子三成。末一行问他：头发白了没有。",
     {
      "speaker": "吉列姆",
      "text": "不施术，三成。理论上地在慢慢缓过来。实际上我爹今年六十九。"
     }
    ]
   },
   {
    "text": "扎营过夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "哨是轮着站的。河对岸安卡迪亚的巡逻队一夜走了四趟，每趟都提着马灯朝这边数一遍车。数目每回都对，他们每回都像有点失望。"
   },
   {
    "text": "天黑以后上车顶，看那只箱子里是什么",
    "goto": "a2_05"
   }
  ]
 },
 "a2_04b": {
  "id": "a2_04b",
  "title": "魂秤",
  "art": "ev_damestear_core",
  "text": [
   "秤摆在棚车的折叠桌上：一根黄铜梁，一只玻璃罩，罩里悬着一根头发丝细的针。没有砝码，也没有秤盘，只有一个朝外的铜口。",
   {
    "speaker": "蒂尔妲",
    "text": "看颜色验晶体是我奶奶那辈的办法（她没错，可她只说得出“挺蓝”）。这个量的是口子开了多大（倒过来接就是炉子，那是另一张图，别管）。看着。"
   },
   "她把一块用空的晶体凑到铜口上，针不动。换上一发黑弹，针往左甩到底，颤了十来下才停。她在本子上记：左，满格，回零四十秒。",
   {
    "if": "is.god",
    "text": "她顺手把铜口对准了你。针打到头，罩里“叮”的一声，游丝断了。一刻钟后你收到一张账单，分七项，末一项是“精神损失（仪器的）”，合计四十金冠。"
   }
  ],
  "first": [
   "codex c_gauge",
   "codex c_tilda",
   {
    "if": "is.god",
    "then": [
     "gold -40"
    ]
   }
  ],
  "choices": [
   {
    "text": "先问礼拜三愿不愿意上秤",
    "if": "party.middlesday && !flag.gauge_tested_m",
    "once": true,
    "effects": [
     "flag gauge_tested_m",
     "approval middlesday +1"
    ],
    "result": [
     {
      "speaker": "礼拜三",
      "text": "（意外。）头一回有人先问。（同意。）量。"
     },
     "针往左走，停在七格，没有回零。蒂尔妲等了两分钟，把“回零”那一栏划掉，改成“不回”。黑弹往哪边摆，它就往哪边摆。"
    ]
   },
   {
    "text": "趁它在卸货，把铜口转过去",
    "if": "party.middlesday && !flag.gauge_tested_m",
    "once": true,
    "effects": [
     "flag gauge_tested_m",
     "approval middlesday -2"
    ],
    "result": [
     "针往左走到七格，不回。礼拜三把手里的箱子放下了。",
     {
      "speaker": "礼拜三",
      "text": "（平静。）你量了我。（陈述。）没问。我记下了，跟埃塔记账一个记法。"
     }
    ]
   },
   {
    "text": "把莉安娜肩上剜出来的那粒寇拉希放上去",
    "if": "item.korashi_grain >= 1",
    "once": true,
    "effects": [
     "flag a2x_grain_read"
    ],
    "result": "针往左，三格，颤个不停。蒂尔妲凑近了看。“在人身上待过的（三年？四年？）到现在还没吃饱。记一笔。”"
   },
   {
    "text": "把自己的手按到铜口上",
    "tag": "机械人",
    "if": "is.mechanim",
    "once": true,
    "effects": [
     "flag a2x_pc_weighed",
     {
      "if": "party.middlesday",
      "then": [
       "approval middlesday +1"
      ]
     }
    ],
    "result": "针往左，七格，不回。你把手拿开，它还停在那儿。蒂尔妲看看针，看看你，头一回没接上话。"
   },
   {
    "text": "回营地",
    "goto": "a2_04"
   }
  ]
 },
 "a2_04c": {
  "id": "a2_04c",
  "title": "河滩上的灯",
  "text": [
   "下游半里，一辆篷车停在卵石坡上，车辕上挂着马灯。三个戴宽檐帽的人围着一个孩子，孩子十四五岁，手腕上已经扣了一只镣，另一只还开着。",
   "宽檐帽的腰上各挂一串铁片，没打孔，一走路就响。领头的那个抬头看见你们，先数人头，再看谁身上带着法器。",
   {
    "speaker": "收血的",
    "text": "野生的，没登记，一品脱卖得出登记价的三倍。{?party.guilhem:你们队里那位戴眼镜的，我出双份。|你们队里要是有会念咒的，我出双份。}都是买卖。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）{?partysize >= 4:七|}{?partysize == 3:六|}{?partysize <= 2:四|}个人，{?partysize <= 2:一|两}匹马，一副镣。镣归我。"
   },
   {
    "if": "is.god",
    "text": "孩子先看见了你，整个人往车轮后头缩。收血的顺着他的眼神看过来，把报到一半的价钱咽了回去。"
   }
  ],
  "choices": [
   {
    "text": "拔家伙，把孩子抢回来",
    "if": "partysize >= 4",
    "combat": {
     "title": "河滩上的灯",
     "intro": "戴宽檐帽的把铁片串往腰里一塞，抽出一副冷铁镣铐。",
     "enemies": [
      {
       "id": "witch_hunter",
       "n": 3,
       "name": "收血的"
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "骑马的血贩子"
      },
      {
       "id": "sellsword",
       "n": 2,
       "name": "押车的"
      }
     ],
     "specials": [
      {
       "id": "whistle",
       "name": "吹巡逻队的哨音",
       "desc": "安卡迪亚的巡逻队就在河对岸，这帮人怕的是兵",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "三短一长。河对岸有人应了一声，马灯朝这边转了过来。收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音。河对岸没人理你，这边倒是都听笑了。"
       }
      },
      {
       "id": "cart",
       "name": "砍断篷车的挽绳",
       "desc": "车停在斜坡上，后面就是河",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "篷车顺着卵石坡往下溜，把站在车后的人一路带进了河里，铁镣哗啦啦响了一路。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "绳子是浸过油的，一刀下去只起了一层毛。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a2x_runner_saved",
       "rep union +1"
      ],
      "goto": "a2_04"
     },
     "lose": {
      "effects": [
       "gold -40"
      ],
      "goto": "a2_04"
     }
    }
   },
   {
    "text": "拔家伙，把孩子抢回来",
    "if": "partysize == 3",
    "combat": {
     "title": "河滩上的灯",
     "intro": "戴宽檐帽的把铁片串往腰里一塞，抽出一副冷铁镣铐。",
     "enemies": [
      {
       "id": "witch_hunter",
       "n": 2,
       "name": "收血的"
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "骑马的血贩子"
      },
      {
       "id": "sellsword",
       "n": 2,
       "name": "押车的"
      }
     ],
     "specials": [
      {
       "id": "whistle",
       "name": "吹巡逻队的哨音",
       "desc": "安卡迪亚的巡逻队就在河对岸，这帮人怕的是兵",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "三短一长。河对岸有人应了一声，马灯朝这边转了过来。收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音。河对岸没人理你，这边倒是都听笑了。"
       }
      },
      {
       "id": "cart",
       "name": "砍断篷车的挽绳",
       "desc": "车停在斜坡上，后面就是河",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "篷车顺着卵石坡往下溜，把站在车后的人一路带进了河里，铁镣哗啦啦响了一路。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "绳子是浸过油的，一刀下去只起了一层毛。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a2x_runner_saved",
       "rep union +1"
      ],
      "goto": "a2_04"
     },
     "lose": {
      "effects": [
       "gold -40"
      ],
      "goto": "a2_04"
     }
    }
   },
   {
    "text": "拔家伙，把孩子抢回来",
    "if": "partysize <= 2",
    "combat": {
     "title": "河滩上的灯",
     "intro": "戴宽檐帽的把铁片串往腰里一塞，抽出一副冷铁镣铐。",
     "enemies": [
      {
       "id": "witch_hunter",
       "name": "收血的"
      },
      {
       "id": "dragoon",
       "name": "骑马的血贩子"
      },
      {
       "id": "sellsword",
       "n": 2,
       "name": "押车的"
      }
     ],
     "specials": [
      {
       "id": "whistle",
       "name": "吹巡逻队的哨音",
       "desc": "安卡迪亚的巡逻队就在河对岸，这帮人怕的是兵",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "三短一长。河对岸有人应了一声，马灯朝这边转了过来。收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音。河对岸没人理你，这边倒是都听笑了。"
       }
      },
      {
       "id": "cart",
       "name": "砍断篷车的挽绳",
       "desc": "车停在斜坡上，后面就是河",
       "check": {
        "skill": "athletics",
        "dc": 12
       },
       "success": {
        "text": "篷车顺着卵石坡往下溜，把站在车后的人一路带进了河里，铁镣哗啦啦响了一路。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "绳子是浸过油的，一刀下去只起了一层毛。"
       }
      }
     ],
     "win": {
      "effects": [
       "flag a2x_runner_saved",
       "rep union +1"
      ],
      "goto": "a2_04"
     },
     "lose": {
      "effects": [
       "gold -40"
      ],
      "goto": "a2_04"
     }
    }
   },
   {
    "text": "照他的行市，把这个孩子买下来",
    "cost": {
     "gold": 60
    },
    "effects": [
     "flag a2x_runner_saved"
    ],
    "result": "六十金冠。收血的开了收据，品名一栏写的是“辅助晶源，活，一”。埃塔把收据要了过去，夹在账本最后一页，那一页她从来不记账。",
    "goto": "a2_04"
   },
   {
    "text": "掉头回营地",
    "effects": [
     "approval bura -1",
     "approval guilhem -1"
    ],
    "result": "篷车天亮前走的。河滩上留下一只开着的镣，没人去捡。",
    "goto": "a2_04"
   }
  ]
 },
 "a2_05": {
  "id": "a2_05",
  "title": "天文学家的箱子",
  "art": "ev_elven_constellation",
  "loc": "河滩营地 · 工程车顶",
  "text": [
   "箱子里是玻璃底片，一格一张，垫着羊毛。德鲁兹纳抽出一张举到灯前：一片星，星和星之间有指甲盖大的一块地方，发灰。",
   {
    "speaker": "德鲁兹纳",
    "text": "1699 年，它在这儿。1810 年，它在这儿碎的。从那以后我每年泪落月拍这一块天，拍了十三张。十三张都是灰。"
   },
   {
    "if": "flag.wastage_ref",
    "text": "你提起陆军部那卷“损耗”，1811 年立的，立卷人是个矮人名字。他的胡子动了一下。"
   },
   {
    "if": "flag.wastage_ref",
    "speaker": "德鲁兹纳",
    "text": "1811 年我给十一个国家写过信。回了两封，都是“来函收悉”。原来剩下的归在那儿。卷名起得不坏。"
   },
   {
    "if": "!flag.wastage_ref",
    "speaker": "德鲁兹纳",
    "text": "1811 年我给十一个国家写过信。回了两封，都是“来函收悉”。衙门里管这种信归的卷，听说叫“损耗”。"
   },
   {
    "speaker": "蒂尔妲",
    "text": "他不许我说“彗星没了”（他要我说“观测不支持回归”（一个意思（他知道是一个意思）））。"
   },
   "他把底片放回格子里，盖上羊毛。",
   {
    "speaker": "德鲁兹纳",
    "text": "七家报馆，都说不登星星。银团的聘书上写着，车上拍的东西归银团，怎么处置看测量方的队长。你是第八家。我要活到它印出来。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆把那张底片要过去看了很久，只说了半句“下一回是 1921 年”。后面那三个字他没有补。"
   }
  ],
  "first": [
   {
    "if": "!flag.wastage_ref",
    "then": [
     "quest q_wastage start"
    ]
   },
   "quest q_wastage stage 2",
   "codex c_druznar",
   "codex c_comet"
  ],
  "choices": [
   {
    "text": "借他的灯，把十三张从头看一遍",
    "once": true,
    "check": {
     "skill": "arcana",
     "alt": [
      "investigation"
     ],
     "dc": 14,
     "adv": "is.caster || flag.a2x_eyepiece",
     "mods": [
      {
       "if": "flag.a2x_screw",
       "n": 2,
       "why": "你拧过那颗螺丝"
      },
      {
       "if": "flag.a2x_helped_druznar",
       "n": 1,
       "why": "他肯让你碰箱子"
      }
     ]
    },
    "ok": {
     "text": "十三张叠起来对着灯看。那块灰一年比一年淡，到 1820 年淡得跟底色分不开。云不会十三年待在同一格里，尘也不会散得这么匀。你把这两句写进了笔记。",
     "effects": [
      "flag plates_understood"
     ]
    },
    "fail": {
     "text": "你看到第四张就分不清哪块是灰、哪块是指纹。蒂尔妲替你讲了一遍，括号套了四层，你记住的只有最里头那层：“反正没了。”"
    }
   },
   {
    "text": "寄给史家会，让他们印",
    "effects": [
     "flag plates_printed",
     "world press +2",
     "rep republic -1",
     "gold +60",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem +1"
      ]
     }
    ],
    "result": "箱子是德鲁兹纳亲手钉的，钉了四十分钟。史家酬金六十金冠，他一个没要。“排版的时候，把年份排在前头。”",
    "goto": "a2_06"
   },
   {
    "text": "拍电报，照聘书交给银团",
    "effects": [
     "flag plates_sold",
     "gold +400",
     "rep charter +2",
     "world press -1",
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem -1"
      ]
     }
    ],
    "result": "银团的回电来得很快：四百金冠，“全部底片及其复制权，妥为保管”。箱子抬走的时候德鲁兹纳在车顶上，没下来。往后他有话都托蒂尔妲转，转过来的每一句都比原话长。",
    "goto": "a2_06"
   },
   {
    "text": "请他另晒一套，锁进埃塔的铁箱",
    "effects": [
     "flag box_plates",
     "item +druznar_plates"
    ],
    "result": "埃塔开了收条：玻璃底片抄件十三张，寄存，无期限。德鲁兹纳把收条叠好，放进贴身的口袋。“我见过更糟的出版社。”",
    "goto": "a2_06"
   }
  ]
 },
 "a2_06": {
  "id": "a2_06",
  "title": "血税",
  "loc": "安卡迪亚 · 兵站镇",
  "date": "1823年泰苏伦月",
  "text": [
   "兵站镇，初七。登记法师每月来一趟的地方贴着白瓷砖，十二张铁床，床头钉着号牌。一人一品脱，收据一式三联：本人一联，军需处一联，第三联撕下来以后去了哪儿，管床的说不归他问。",
   "血在这儿叫“蓝血”，账上那一栏的名目是“辅助晶源”。三号床上的人袖子卷到肩膀，胳膊弯里的针眼排成了一行，他在看一份上礼拜的《传声报》，看得很慢。",
   {
    "if": "flag.registered_mages && party.guilhem",
    "text": "这个月的单子上有吉列姆的名字，一个字母没拼错。"
   },
   {
    "if": "flag.registered_mages && party.guilhem",
    "speaker": "吉列姆",
    "text": "一品脱。附表第三项：三个礼拜补得回来。附表没写一年有几个初七。"
   },
   {
    "if": "flag.registered_mages && !party.guilhem",
    "text": "这个月的单子上有公司的名字，后面跟着一个床号。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "十二张床，一个钟头轮一回，早上八点到下午四点。这是今天的数。你要哪一天的？我可以坐在这儿数一个月。"
   }
  ],
  "first": [
   "codex c_blueblood"
  ],
  "choices": [
   {
    "text": "翻军需处的流水账",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 14,
     "party": true,
     "adv": "flag.a2x_oto_deal",
     "mods": [
      {
       "if": "flag.a2x_oto_talked",
       "n": 2,
       "why": "奥托说漏的那句"
      },
      {
       "if": "origin == 'concord'",
       "n": 2,
       "why": "你抄过这种货单"
      }
     ]
    },
    "ok": {
     "text": "收进来的品脱数和交上去的品脱数，每月差着一成。差的那一成底下是同一个缩写，日子都是初八。你把那一本夹在测量图里带了出来。",
     "effects": [
      "flag ancardia_ledger",
      "item +ancardia_ledger"
     ]
    },
    "fail": {
     "text": "军需官请你喝茶。一个钟头，四杯，账一页没翻着，茶钱倒记在了你头上。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "绕到后屋看装罐",
    "once": true,
    "check": {
     "skill": "stealth",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "后屋在装箱。陶罐，蜡封，十二罐一箱。木箱的尺寸你在图纸上见过：横着码六只，正好是一节还没造出来的棚车的宽。",
     "effects": [
      "flag a2x_saw_bottling",
      "xp 60"
     ]
    },
    "fail": {
     "text": "门后站着一个杂役，他等你等了有一会儿了。“参观费二十金冠。带讲解的四十。”你付了不带讲解的。",
     "effects": [
      "gold -20"
     ]
    }
   },
   {
    "text": "看三号床上那个人还撑得了几回",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "脉搏一百一，指甲发白。照这个抽法还有三回，第四回他站不起来。你把这话说给管床的听，他想了想，在号牌背面写了个“缓”。",
     "effects": [
      {
       "if": "party.narwen",
       "then": [
        "approval narwen +1"
       ]
      },
      {
       "if": "party.guilhem",
       "then": [
        "approval guilhem +1"
       ]
      }
     ]
    },
    "fail": {
     "text": "你说他还行。他一站起来就栽了，带倒了你和一只接血的罐子。罐子记在你账上。",
     "effects": [
      "gold -8",
      "hp -2"
     ]
    }
   },
   {
    "text": "照单子去抽这一品脱",
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "once": true,
    "effects": [
     "flag a2x_tax_done",
     {
      "if": "is.caster && !is.artificer",
      "then": [
       "hp -5"
      ]
     },
     {
      "if": "party.guilhem",
      "then": [
       "approval guilhem -1"
      ]
     }
    ],
    "result": "{?party.guilhem:吉列姆自己卷的袖子，卷得很整齐。|袖子是你自己卷的。}针是粗的。收据第三联撕下来，塞进了一只写着“转运”的信封。"
   },
   {
    "text": "买一张“已缴”的收据",
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "once": true,
    "cost": {
     "gold": 40
    },
    "effects": [
     "flag a2x_tax_done"
    ],
    "result": "管床的把四十个金冠数了两遍，分成两摞。收据上的品脱数是真的，床号也是真的。躺在那张床上替你们抽的是谁，你没见着。"
   },
   {
    "text": "回车上，写这个月的例行报告",
    "goto": "a2_06b"
   }
  ]
 },
 "a2_06b": {
  "id": "a2_06b",
  "title": "例行报告",
  "text": [
   "银团要的例行勘测报告一月一份：路基、坡度、桥位、沿线治安。照规矩抄送全体股东，埃塔数过，十九份。",
   "工程车里只有一张折叠桌，蒂尔妲占了一半，在画望远镜的新支架。墨水是兵站镇买的，三个铜子一瓶，写出来发灰。",
   {
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "text": "初七过了，单子上那一品脱没人去缴。奥托托人捎来一句话：他记性好。"
   },
   "你写到“沿线治安”这一栏。兵站镇的事放不放进去，这一栏都填得满。",
   {
    "speaker": "埃塔",
    "text": "十九份。抄一份四个铜子。提不提那件事，抄写费一样。"
   }
  ],
  "first": [
   {
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "then": [
     "rep republic -1"
    ]
   }
  ],
  "choices": [
   {
    "text": "写上：兵站镇按月抽登记法师的血，名目“辅助晶源”",
    "effects": [
     "flag midreport_blood"
    ],
    "result": "埃塔照抄了十九份，一个字没改。寄出去那天是这个月的十四号，她在存根上记了日子。",
    "goto": "a2_07"
   },
   {
    "text": "只写路基、坡度和桥",
    "result": "报告很干净。十九位股东读到的东坎诺，是一片坡度不超过千分之八的好地。",
    "goto": "a2_07"
   }
  ]
 },
 "a2_07": {
  "id": "a2_07",
  "title": "没有煤气灯的城",
  "art": "load_8",
  "loc": "卡斯托纳斯 · 西门",
  "text": [
   "卡斯托纳斯是全东坎诺唯一没通煤气的大城。天擦黑，城墙上有人举着长杆一盏一盏点油灯，八座塔的窗子比灯先亮。",
   "进了西门往下城走，石阶贴着瀑布往下拐，溅上来的水带一股阴沟味：上城的沟都往这儿排。石阶底下嵌着一块铜牌，标着科琳倒下的地方。铜让人摸得发亮，四个角上各压着一枚铜子。",
   {
    "if": "party.bura",
    "text": "布拉在铜牌跟前站了一会儿，没摸。她从兜里找出一枚铜子，四个角都占了，她放在了正中间。"
   },
   "海关是一张石桌。条例刻在桌沿上，只有一句：奇械不得入境。{?party.middlesday:关员看着礼拜三，礼拜三看着关员。|关员拿指节敲了敲蒂尔妲的仪器箱，箱子里有东西嗡了一声。}",
   {
    "if": "is.mechanim",
    "text": "轮到你。关员不问姓名，开了一张税单：“自动机，一台，二手。”十五个金冠。埃塔要了收据。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "关员翻到你那张卖契，在“经手人”一栏找到了你的名字。十四号的过境税记在你头上，十五个金冠。埃塔要了收据。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "这座城里没有一间我们的礼拜堂。教廷问过三回。三回的回信我都见过，一封比一封短。"
   },
   {
    "if": "is.god",
    "text": "铜牌旁边候着三个科琳教的胫甲，红披风，自带纸笔。"
   },
   {
    "if": "is.god",
    "speaker": "胫甲",
    "text": "{god}阁下。教区要问一句，请书面答复：您与科琳是什么关系。"
   }
  ],
  "first": [
   "codex c_castonath",
   {
    "if": "is.mechanim || origin == 'unowned'",
    "then": [
     "gold -15"
    ]
   }
  ],
  "choices": [
   {
    "text": "告诉关员：这是公司的随身行李",
    "check": {
     "skill": "persuasion",
     "alt": [
      "deception"
     ],
     "dc": 14,
     "adv": "is.artificer",
     "mods": [
      {
       "if": "rep.wand >= 2",
       "n": 2,
       "why": "王冠与魔杖的名声"
      }
     ]
    },
    "ok": {
     "text": "关员在“行李”一栏落了笔。{?party.middlesday:“铁箱一只，自行。”礼拜三一路没出声，过了门洞才问你，“自行”算不算名字。|“测绘器具一箱，不通电。”蒂尔妲想纠正他，你踩了她一脚。}",
     "goto": "a2_08"
    },
    "fail": {
     "text": [
      "{?party.middlesday:关员叫来四个脚夫，把礼拜三抬下了海关的地窖。第二天一早它自己走上来，胸口多了一张封条。|仪器箱扣下了。赎金三十金冠，收据上写的是“保管费”。}",
      {
       "if": "party.middlesday",
       "speaker": "礼拜三",
       "text": "（陈述。）底下还有四十一台。码成垛。（愤怒。）我数了两遍。"
      }
     ],
     "effects": [
      {
       "if": "party.middlesday",
       "then": [
        "flag m_impounded"
       ],
       "else": [
        "gold -30"
       ]
      }
     ],
     "goto": "a2_08"
    }
   },
   {
    "text": "办一张保税过境单",
    "tag": "印",
    "if": "faction == 'seal'",
    "result": "表格一式三份，盖两回印。关员头一回见有人把他的条例背得比他熟，只好在“奇械”后面添了三个小字：“过境中”。",
    "goto": "a2_08"
   },
   {
    "text": "用林墙话回那个半兽人脚夫",
    "tag": "绿皮",
    "if": "is.greenskin",
    "once": true,
    "effects": [
     "flag a2x_porter_tip"
    ],
    "result": "他问你打哪儿来。你答了，他咧开嘴，压低嗓子：城墙上的佣兵这半年领的不是钱，是罐子，每旬一回，在旧锻炉后头那扇新铁皮门。"
   },
   {
    "text": "写：同路的",
    "tag": "神",
    "if": "is.god && !flag.a2x_corin_answered",
    "once": true,
    "effects": [
     "flag a2x_corin_answered",
     "approval bura +1"
    ],
    "result": "胫甲把这三个字誊了两份，一份带走，一份压在铜牌角上。{?party.bura:布拉看了那张纸一眼，把头盔戴正了。|第二天压着的铜子多了一圈。}"
   },
   {
    "text": "写：不认识",
    "tag": "神",
    "if": "is.god && !flag.a2x_corin_answered",
    "once": true,
    "effects": [
     "flag a2x_corin_answered"
    ],
    "result": "他们记下了，一个字没评。走出十来步，三个人里有一个回了两次头。"
   },
   {
    "text": "写：我比她大",
    "tag": "神",
    "if": "is.god && !flag.a2x_corin_answered",
    "once": true,
    "effects": [
     "flag a2x_corin_answered",
     "approval bura -2",
     "rep union -1"
    ],
    "result": "胫甲的笔停了。他把纸翻过来，在背面抄了一条教义的编号：在上者失道，在下者得起。{?party.bura:布拉的铰链响了一声。她什么也没说。|门洞里的脚夫都不扛活了，站着看你。}"
   }
  ]
 },
 "a2_08": {
  "id": "a2_08",
  "title": "站着见客",
  "loc": "卡斯托纳斯 · 女导师长的塔",
  "text": [
   "女导师长的塔是第三座。楼梯一百九十级，没有扶手。掌灯的学徒走在前头，十二三岁，灯举得很稳。",
   "雅米娜·格拉科赛尔九十三岁，站在一张没配椅子的长桌后面。桌上摊着你们的线路图，有人用红墨水在城里添了八个圈。",
   {
    "speaker": "雅米娜",
    "text": "八个席位，空着六个。你们的铁路要从第三个和第四个中间穿过去。"
   },
   {
    "if": "party.guilhem",
    "text": "她转向吉列姆，管他叫年轻人，问他教过几个学生。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "一个也没有。共和国不让。条例第四十一款，公务法师不得私相授受。"
   },
   {
    "if": "party.guilhem",
    "text": "她没接话，拿指甲在图上那两个圈中间点了一下。"
   },
   {
    "if": "party.narwen",
    "text": "娜尔雯和她对了对年份。雅米娜 1744 年入列；那一年，娜尔雯已经在地窖里数了七十八年。两个人都没有再往下算。"
   },
   {
    "if": "is.god",
    "text": "她打量了你大约一分钟，什么也没问，拉过一张纸记了一页，记完压在砚台底下。"
   }
  ],
  "first": [
   "quest q_right_of_way stage 2",
   "codex c_yamina",
   "codex c_royal_wizards"
  ],
  "choices": [
   {
    "text": "照老规矩行礼，称她的全衔",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 14,
     "adv": "is.noble"
    },
    "ok": {
     "text": "“女导师长阁下，第三席。”你退了半步才开口。她的眉毛动了一下。“还有人教这个。”",
     "effects": [
      "rep wand +1"
     ]
    },
    "fail": {
     "text": "你称了她一声“陛下”。她纠正你，用的是 1744 年的规矩，一共七条。背到第五条的时候，掌灯的学徒在憋笑，灯跟着抖。"
    }
   },
   {
    "text": "看她扶着桌沿的那只手",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15
    },
    "ok": {
     "text": "那只手没离开过桌沿。她每说完一句，要等气喘匀了才说下一句。窗外下了一礼拜的雨。屋里不摆椅子是她的规矩：摆了，她就得坐。",
     "effects": [
      "flag yamina_tired"
     ]
    },
    "fail": {
     "text": "她的手很稳。你看了半天，只看出墨水是红的。"
    }
   },
   {
    "text": "问她 1744 年这张桌子边上站着几个人",
    "tag": "长寿",
    "if": "is.longlived",
    "once": true,
    "effects": [
     "flag a2x_old_days"
    ],
    "result": [
     {
      "speaker": "雅米娜",
      "text": "八个。我最小，十四岁，站在门边上。你这个岁数的客人如今少了，年轻人。想坐随你，这屋里没有椅子。"
     }
    ]
   },
   {
    "text": "跟掌灯的学徒下楼，去书房",
    "goto": "a2_09"
   }
  ]
 },
 "a2_09": {
  "id": "a2_09",
  "title": "账本",
  "art": "ev_magic_study_and_relax",
  "loc": "卡斯托纳斯 · 塔腰的书房",
  "text": [
   "书房在塔腰，一扇窗，一盏油灯。账本是摊开的，没人拦着你看。左边一栏，1810 年以来每道咒的产出，记到小数点后两位；右边一栏，东坎诺各军每年开出去的黑弹数。",
   "左边一年比一年小，右边一年比一年大。蒂尔妲把秤的读数抄成一条纸带，摆在两栏中间。三行数字拐弯的地方对得上。",
   {
    "speaker": "蒂尔妲",
    "text": "这叫复式账（记账的都懂（我不是记账的，我是说道理一样））。这边划走一笔，那边必定记上一笔。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "这是损耗。柴烧了就是烧了，不会跑进别人家的柴房。我管了二十年催生术，账一向这么记。"
   },
   {
    "if": "!party.guilhem",
    "speaker": "埃塔",
    "text": "账不平。不平的账就两种：有人拿了，或者还有另一本。哪一种，这两栏看不出来。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "你们两位说的都是这一头。我问的是那一头：谁在收？"
   },
   {
    "if": "!party.narwen",
    "speaker": "别摇",
    "text": "你们账上少的那些，我老家的潮表上倒是有一栏年年多出来。我没说是同一笔。我只说有这么一栏。"
   },
   "雅米娜站在门口听完了，没有纠正任何一个人。"
  ],
  "first": [
   "level 5",
   "codex c_double_entry",
   "codex c_gauge",
   "codex c_tilda"
  ],
  "choices": [
   {
    "text": "把两栏和纸带从头对一遍",
    "once": true,
    "check": {
     "skill": "investigation",
     "alt": [
      "arcana"
     ],
     "dc": 14,
     "adv": "is.scholar",
     "mods": [
      {
       "if": "flag.a2x_grain_read",
       "n": 1,
       "why": "那粒寇拉希的读数"
      },
      {
       "if": "flag.gauge_tested_m || flag.a2x_pc_weighed",
       "n": 1,
       "why": "芯核的读数"
      },
      {
       "if": "flag.plates_understood",
       "n": 1,
       "why": "底片上那块灰"
      }
     ]
    },
    "ok": {
     "text": "对到 1816 年你找着了规律：右栏每多一万发，隔一年，左栏掉一个差不多的数。误差不小，可是方向十三年没变过。你把那个数抄在了手背上。",
     "effects": [
      "flag yamina_ledger_read"
     ]
    },
    "fail": {
     "text": "数字从第六年开始打架。你对出来的结论是东坎诺的黑弹能治咒。蒂尔妲笑得把纸带扯断了。"
    }
   },
   {
    "text": "开口向她借抄",
    "req": "rep.wand >= 1",
    "reqText": "王冠与魔杖的声望要到 1",
    "effects": [
     "flag ledger_copied",
     "item +yamina_copy"
    ],
    "result": [
     {
      "speaker": "雅米娜",
      "text": "抄。抄错一个数，我会知道。"
     },
     "你抄到后半夜。她让学徒添了两回灯油，没让他添椅子。"
    ],
    "goto": "a2_10"
   },
   {
    "text": "趁她去添灯油，抄下来",
    "check": {
     "skill": "sleight",
     "dc": 14
    },
    "ok": {
     "text": "四页，两栏，你抄得比埃塔还快。灯油添回来的时候，纸已经在你袖子里了。",
     "effects": [
      "flag ledger_copied",
      "item +yamina_copy"
     ],
     "goto": "a2_10"
    },
    "fail": {
     "text": "你抄到第三页，灯亮了一点。她端着油壶站在你身后，看了看你的字，没说话，把壶放下走了。你把第四页也抄完了。",
     "effects": [
      "flag ledger_copied",
      "item +yamina_copy",
      "rep wand -1"
     ],
     "goto": "a2_10"
    }
   },
   {
    "text": "把账本合上，推回桌子中间",
    "result": "雅米娜看着你推回去，什么也没说。下楼的时候，外头的雨又大了。",
    "goto": "a2_10"
   }
  ]
 },
 "a2_10": {
  "id": "a2_10",
  "title": "地窖",
  "art": "ev_forge",
  "loc": "卡斯托纳斯 · 旧巨龙锻炉底下",
  "text": [
   "雨下到半夜没停。账本右下角有一行小字，白天你没看懂：“佣兵饷，以罐计，锻炉后门。”{?flag.a2x_porter_tip:城门口那个脚夫说的是同一扇门。|}{?flag.a2x_runner_saved:河滩上那个孩子说的也是这扇门。|}",
   "旧巨龙锻炉绿潮那年就毁了，龙头炉口塌了半边。后门的铁皮倒是新换的。门里一道往下的石阶，一股药水味。",
   "头一层堆的是海关没收的自动机，码成垛，胳膊和胳膊捆在一起，垛顶落了灰。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（愤怒。）那一颗我认识。七号线，1811 年三月的料。（请求。）走过去的时候，别踩它的手。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "垛脚那一台的肩膀上有你认得的铆印。七号线的锤，一秒一颗，有一颗是你打歪的。"
   },
   {
    "if": "is.mechanim",
    "text": "垛里有一台的工位号比你小一。它的眼睛是关着的。"
   },
   "再往下有灯光，有人在报数。楼梯口拦着一道铁栅，锁是新的。"
  ],
  "first": [
   "quest q_blood start"
  ],
  "choices": [
   {
    "text": "让礼拜三带路，走它那天夜里走过的暗道",
    "if": "party.middlesday && flag.m_impounded",
    "effects": [
     "flag a2x_cellar_quiet"
    ],
    "result": "第二垛后面的墙是空的。礼拜三走在前头，脚步放得很轻，轻得不像一只铁箱。",
    "goto": "a2_10b"
   },
   {
    "text": "在自动机垛后面找暗门",
    "check": {
     "skill": "perception",
     "dc": 13,
     "party": true,
     "mods": [
      {
       "if": "flag.a2x_porter_tip || flag.a2x_runner_saved",
       "n": 2,
       "why": "有人指过路"
      }
     ]
    },
    "ok": {
     "text": "第二垛后面的墙敲着是空的。巴尔加尔修的暗道，到今天没人画全过，这一段的门轴有人新上了油。",
     "effects": [
      "flag a2x_cellar_quiet"
     ],
     "goto": "a2_10b"
    },
    "fail": {
     "text": "你摸到的那扇“暗门”是一台自动机的背板。垛塌了半边，一条铁胳膊砸在你肩上。楼下的报数声停了。",
     "effects": [
      "hp -3"
     ],
     "goto": "a2_10b"
    }
   },
   {
    "text": "等报数声盖住脚步，从铁栅的缝里挤过去",
    "check": {
     "skill": "stealth",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "栅条的间距是照成年人的肩膀定的。你们侧着身，一个报数挤过去一个，挤到最后一个，底下刚好数到四十一。",
     "effects": [
      "flag a2x_cellar_quiet"
     ],
     "goto": "a2_10b"
    },
    "fail": {
     "text": "有人的皮带扣挂住了栅条。铁碰铁，就一声。楼下有人说：“饷还没点完，谁在上头？”",
     "effects": [
      "hp -2"
     ],
     "goto": "a2_10b"
    }
   },
   {
    "text": "撬开铁栅",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "锁没撬开，合页先断了。你把整扇铁栅端下来靠在墙上。楼下的人还在报数，报得很专心。",
     "goto": "a2_10b"
    },
    "fail": {
     "text": "铁栅倒下去的那一声，上城都听得见。楼下先喊了一句“饷还没点完”，然后是上膛的声音。",
     "effects": [
      "hp -3"
     ],
     "goto": "a2_10b"
    }
   }
  ]
 },
 "a2_10b": {
  "id": "a2_10b",
  "title": "放血房",
  "text": [
   "第二层贴着白瓷砖，跟兵站镇一个样，床小一号。躺着的是学徒，最大的不过十六。罐子装满，蜡封，推到门口；门口排着城墙上的佣兵，一人两罐，领完往怀里一揣，上楼换岗。",
   "管事的系着白围裙，耳朵上别一支铅笔，人称“大夫”。他在往账上记数，记一笔，嘴里念一遍。",
   "第三张床上的女孩十二岁，叫伊萨，等着受礼的就是她。外头的雨下大了。她的眼睛翻了上去，嘴角往外淌水，清的，一股一股。溺亡是这时候来的。",
   {
    "speaker": "大夫",
    "text": "别碰她。这个病没人替得了，得她自己熬。熬过来是洪裔，熬不过来是第三床空了。{?flag.a2x_cellar_quiet:……你们是哪个连的？|你们下来的动静不小。饷不归你们领。}"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "她肺里的水在涨。把人侧过来，垫高，按住，能多撑一阵。我要一分钟，还要这一分钟里没人拿刀对着我。"
   },
   {
    "if": "is.god",
    "text": "这间屋里没有谁伤得了你。第三张床上那个，撑不到你把他们一个一个放倒。"
   }
  ],
  "first": [
   "codex c_floodborn"
  ],
  "choices": [
   {
    "text": "动手，抢到第三张床跟前",
    "if": "partysize >= 4",
    "combat": {
     "title": "放血房",
     "intro": "大夫把铅笔别回耳朵上，从围裙兜里摸出一把手术刀。门口领饷的佣兵放下了罐子。",
     "enemies": [
      {
       "id": "blood_baron"
      },
      {
       "id": "makata_ganger",
       "n": 3,
       "name": "看罐子的地精"
      },
      {
       "id": "merc_captain",
       "name": "来领饷的佣兵队长"
      },
      {
       "id": "sellsword",
       "n": 3,
       "name": "城墙上的佣兵"
      }
     ],
     "specials": [
      {
       "id": "isa",
       "name": "让伊萨喘上气",
       "desc": "把她侧过来垫高，按住，等她自己把水咳出来",
       "check": {
        "skill": "medicine",
        "dc": 14,
        "party": true,
        "adv": "party.narwen",
        "mods": [
         {
          "if": "flag.a2x_cellar_quiet",
          "n": 2,
          "why": "你们先到了床边"
         }
        ]
       },
       "success": {
        "text": "她咳出第一口水，接着是第二口，眼睛转了回来。大夫把手术刀放下了：咳得出水的洪裔，他不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又沉下去半寸，水从鼻子里往外冒。有人趁你弯着腰，从背后给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "一架子玻璃管和陶罐，朝他们那边倒",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸下去，蓝的溅了一墙。领饷的佣兵先心疼了一声，然后才喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子是拿铆钉铆在地上的。你的脚比它先响。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       {
        "if": "!flag.isa_owes_company",
        "then": [
         "flag yamina_spent"
        ]
       }
      ],
      "goto": "a2_10d"
     },
     "lose": {
      "effects": [
       "flag yamina_spent",
       "flag a2x_cellar_lost"
      ],
      "goto": "a2_10d"
     }
    }
   },
   {
    "text": "动手，抢到第三张床跟前",
    "if": "partysize == 3",
    "combat": {
     "title": "放血房",
     "intro": "大夫把铅笔别回耳朵上，从围裙兜里摸出一把手术刀。门口领饷的佣兵放下了罐子。",
     "enemies": [
      {
       "id": "blood_baron"
      },
      {
       "id": "makata_ganger",
       "n": 2,
       "name": "看罐子的地精"
      },
      {
       "id": "merc_captain",
       "name": "来领饷的佣兵队长"
      },
      {
       "id": "sellsword",
       "n": 2,
       "name": "城墙上的佣兵"
      }
     ],
     "specials": [
      {
       "id": "isa",
       "name": "让伊萨喘上气",
       "desc": "把她侧过来垫高，按住，等她自己把水咳出来",
       "check": {
        "skill": "medicine",
        "dc": 14,
        "party": true,
        "adv": "party.narwen",
        "mods": [
         {
          "if": "flag.a2x_cellar_quiet",
          "n": 2,
          "why": "你们先到了床边"
         }
        ]
       },
       "success": {
        "text": "她咳出第一口水，接着是第二口，眼睛转了回来。大夫把手术刀放下了：咳得出水的洪裔，他不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又沉下去半寸，水从鼻子里往外冒。有人趁你弯着腰，从背后给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "一架子玻璃管和陶罐，朝他们那边倒",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸下去，蓝的溅了一墙。领饷的佣兵先心疼了一声，然后才喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子是拿铆钉铆在地上的。你的脚比它先响。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       {
        "if": "!flag.isa_owes_company",
        "then": [
         "flag yamina_spent"
        ]
       }
      ],
      "goto": "a2_10d"
     },
     "lose": {
      "effects": [
       "flag yamina_spent",
       "flag a2x_cellar_lost"
      ],
      "goto": "a2_10d"
     }
    }
   },
   {
    "text": "动手，抢到第三张床跟前",
    "if": "partysize <= 2",
    "combat": {
     "title": "放血房",
     "intro": "大夫把铅笔别回耳朵上，从围裙兜里摸出一把手术刀。门口领饷的佣兵放下了罐子。",
     "enemies": [
      {
       "id": "blood_baron"
      },
      {
       "id": "makata_ganger",
       "name": "看罐子的地精"
      },
      {
       "id": "sellsword",
       "name": "城墙上的佣兵"
      }
     ],
     "specials": [
      {
       "id": "isa",
       "name": "让伊萨喘上气",
       "desc": "把她侧过来垫高，按住，等她自己把水咳出来",
       "check": {
        "skill": "medicine",
        "dc": 14,
        "party": true,
        "adv": "party.narwen",
        "mods": [
         {
          "if": "flag.a2x_cellar_quiet",
          "n": 2,
          "why": "你们先到了床边"
         }
        ]
       },
       "success": {
        "text": "她咳出第一口水，接着是第二口，眼睛转了回来。大夫把手术刀放下了：咳得出水的洪裔，他不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又沉下去半寸，水从鼻子里往外冒。有人趁你弯着腰，从背后给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "一架子玻璃管和陶罐，朝他们那边倒",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸下去，蓝的溅了一墙。领饷的佣兵先心疼了一声，然后才喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子是拿铆钉铆在地上的。你的脚比它先响。",
        "selfDmg": "1d4"
       }
      }
     ],
     "win": {
      "effects": [
       {
        "if": "!flag.isa_owes_company",
        "then": [
         "flag yamina_spent"
        ]
       }
      ],
      "goto": "a2_10d"
     },
     "lose": {
      "effects": [
       "flag yamina_spent",
       "flag a2x_cellar_lost"
      ],
      "goto": "a2_10d"
     }
    }
   },
   {
    "text": "把水从她肺里拿出来",
    "tag": "神",
    "if": "is.god",
    "effects": [
     "flag isa_owes_company",
     "flag demesne_patron",
     "rep wand +2",
     "rep republic -1",
     "world dove -1",
     "var cult +1"
    ],
    "result": "你把手放在她胸口，往上一提。水是整个出来的，一捧，清的，托在手里还是温的。大夫的铅笔从耳朵上掉了下来。佣兵们放下罐子，有两个跪了，剩下的在看那两个。",
    "goto": "a2_10d"
   },
   {
    "text": "退出去，上塔叫醒雅米娜",
    "effects": [
     "flag yamina_spent"
    ],
    "result": "一百九十级楼梯你是跑上去的。她已经醒着，站在楼梯口，披着一件旧袍子。她没问出了什么事，只问：“第几床？”",
    "goto": "a2_10d"
   }
  ]
 },
 "a2_10d": {
  "id": "a2_10d",
  "title": "第三张床",
  "text": [
   {
    "if": "flag.demesne_patron",
    "text": "伊萨睁开眼，一声没咳。那一场溺亡她没有熬，是你替她拿走的。天亮以前八座塔的钟一齐敲了：魔法领地宣布{god}为本城守护者。第三天，安卡迪亚发了动员令。"
   },
   {
    "if": "flag.isa_owes_company && !flag.demesne_patron",
    "text": "伊萨是自己坐起来的，吐了半盆水，头一句话是问谁按的她。{?party.narwen:娜尔雯说，是公司。|你说，是公司。}她点点头，把这两个字念了一遍，念得跟记账似的。"
   },
   {
    "if": "flag.yamina_spent && !flag.isa_owes_company",
    "text": "雅米娜是自己走下来的，一百九十级，外加地窖这两层。她把手按在女孩胸口，按了一刻钟，水从伊萨嘴里一点一点退了回去。然后她四下看了看，在第四张床的床沿上坐下了。你头一回见她坐着。"
   },
   {
    "if": "!flag.a2x_cellar_lost",
    "text": "大夫的账本到了你手里。四十一页，一页一个学徒：品脱数，日期，领罐子的佣兵是哪个连。每页页脚都有大夫的签名，字很小，一回没漏。"
   },
   {
    "if": "flag.demesne_patron && party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人当场把水从肺里拿出来，是……没有上回。我翻过了。（她把本子合上。）这一笔我不知道记在哪一栏。"
   },
   {
    "if": "flag.a2x_cellar_lost && party.middlesday",
    "text": "你们是让佣兵架出门的，账本没带出来。"
   },
   {
    "if": "flag.a2x_cellar_lost && party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）四十一页。我看过了，都在。（礼貌。）埃塔有纸吗。"
   },
   {
    "if": "flag.a2x_cellar_lost && !party.middlesday",
    "text": "你们是让佣兵架出门的。账本是乱里顺出来的，封皮上踩了半个靴印，四十一页一页没少。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "城墙上那些人领的是这个。（铰链响了一声。）我领过欠条，领过发霉的面。没领过小孩的血。这笔我替他们记着。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "学徒的血付佣兵的饷，佣兵守着教学徒的塔。条例上这叫“自筹经费”。我填过这一栏，填的是卖梨。"
   }
  ],
  "first": [
   "flag cellar_book",
   "item +cellar_book",
   {
    "if": "!flag.isa_owes_company && !flag.yamina_spent",
    "then": [
     "flag yamina_spent"
    ]
   },
   "rest short"
  ],
  "next": "a2_11"
 },
 "a2_11": {
  "id": "a2_11",
  "title": "轨头",
  "art": "ev_dwarven_rail",
  "loc": "玛瑙之门山下 · 轨头",
  "date": "1823年伊什达月",
  "shop": {
   "name": "轨头的杂货棚车",
   "blurb": "赊账的本子比货架厚。现钱买的，掌柜多给一截绷带。",
   "stock": [
    "healing_potion",
    "greater_healing_potion",
    "antidote",
    "bandage",
    "alchemist_fire",
    "krakzol_ale"
   ]
  },
  "text": [
   "从矮人之路接出来的头一段铺了十一里，到这儿断了。枕木码在路基边上，镐插在枕木缝里，一把挨一把，插得很齐。",
   "工棚里是林墙兽人、半兽人和地精，一节棚车改成了科琳教的小堂。工钱欠了三个礼拜。坡上是安卡迪亚国民卫队的帐篷，照“护路协定”开来的，帐篷边蹲着一台蒸汽牵引机，锅炉没熄。",
   "三拨人各站一处。银团的监工守着账房的门。卫队的上尉在看怀表。工棚这边出来说话的是个缺了半只耳朵的兽人女人，手里没拿家伙。",
   {
    "speaker": "缺耳朵的女人",
    "text": "三个礼拜。镐我们放下了，没扔。你是银团的人，还是来看的人？"
   },
   {
    "if": "party.bura",
    "text": "布拉的表侄在人堆里，如今比她高了半个头。两个人对了一眼，谁也没先开口。"
   }
  ],
  "first": [
   "codex c_navvies"
  ],
  "choices": [
   {
    "text": "查账房的工钱账",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "账上有一笔“右翼勘测费”，三个礼拜前支的，数目正好是全棚的工钱。右翼没有勘测队。右翼是一面崖。",
     "effects": [
      "flag wages_found"
     ]
    },
    "fail": {
     "text": "监工把账本抱在怀里，只让你看封面。你坚持了一阵，他写了一封投诉信，当着你的面封的口。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "进棚车小堂，跟他们一起做晚祷",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "rep union +1"
    ],
    "result": "小堂里没有神像，只有一面红布和一把钉在墙上的旧镐。你念你的，他们念他们的，末一句是齐的。出来的时候有人给你让了路。"
   },
   {
    "text": "替三方谈：工钱补发，卫队退回坡上",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "adv": "is.greenskin",
     "mods": [
      {
       "if": "flag.wages_found",
       "n": 2,
       "why": "那笔右翼勘测费"
      },
      {
       "if": "rep.union >= 3",
       "n": 2,
       "why": "互助社的名声"
      },
      {
       "if": "party.bura",
       "n": 1,
       "why": "布拉站在你旁边"
      },
      {
       "if": "is.worker",
       "n": 1,
       "why": "你手上的茧"
      }
     ]
    },
    "ok": {
     "text": "你一条一条摆：{?flag.wages_found:钱在哪儿，谁支的，|}工钱几时发，卫队退到哪条线。缺耳朵的女人听完，朝身后说了一句林墙话。镐没动，人往后退了三步，让出了账房的门。",
     "effects": [
      "flag strike_settled",
      "rep union +2",
      "approval bura +1"
     ],
     "goto": "a2_12b"
    },
    "fail": {
     "text": "你说到“请大家体谅银团的难处”，后排有人笑出了声。上尉把怀表揣回兜里。“谈完了？那今晚照协定办。”",
     "goto": "a2_12"
    }
   },
   {
    "text": "把合同第九条念给监工听：工钱为第一顺位债权",
    "tag": "印",
    "if": "faction == 'seal'",
    "check": {
     "skill": "persuasion",
     "dc": 12,
     "adv": "is.greenskin",
     "mods": [
      {
       "if": "flag.wages_found",
       "n": 2,
       "why": "那笔右翼勘测费"
      },
      {
       "if": "party.bura",
       "n": 1,
       "why": "布拉站在你旁边"
      }
     ]
    },
    "ok": {
     "text": "第九条你念了两遍，第二遍是念给上尉听的。监工翻了翻自己那份合同，第九条还在。工钱当晚点清，定在第二天一早发。",
     "effects": [
      "flag strike_settled",
      "rep union +2",
      "approval bura +1"
     ],
     "goto": "a2_12b"
    },
    "fail": {
     "text": "监工说第九条他认，可是银行的钱没到，他拿什么认。上尉合上怀表。“条文你们慢慢对。今晚照协定办。”",
     "goto": "a2_12"
    }
   },
   {
    "text": "拿公司的钱垫上这三个礼拜",
    "tag": "盾",
    "if": "faction == 'shield'",
    "cost": {
     "gold": 150
    },
    "effects": [
     "flag strike_settled",
     "rep union +2"
    ],
    "result": "埃塔数钱的时候嘴里一直在报数，报的是应收。发到最后一个人，工棚里有人把镐从枕木缝里拔了出来。",
    "goto": "a2_12b"
   },
   {
    "text": "当着三拨人的面，把那笔“右翼勘测费”念出来",
    "tag": "灯",
    "if": "faction == 'lantern' && flag.wages_found",
    "effects": [
     "flag strike_settled",
     "rep union +2",
     "rep charter -1"
    ],
    "result": "你念了日期、数目和签字的人。监工的脸白了。上尉把怀表合上，说这一笔不归他管。工钱是当晚从监工的私箱里补出来的，定在第二天一早发。",
    "goto": "a2_12b"
   },
   {
    "text": "回工程车，让银团和卫队自己办",
    "effects": [
     "flag strike_broken",
     "rep union -2",
     "rep charter +1",
     "approval bura -2"
    ],
    "result": "卫队是半夜进的棚。你在工程车里听了一个钟头。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12": {
  "id": "a2_12",
  "title": "机车库",
  "text": [
   "卫队说的“照协定办”是半夜两点。牵引机先动，拖着一节装沙袋的平板往工棚这边压，后面跟着两排兵，掷弹兵腕子上的火绳一点一点红。",
   "工棚的人退进了机车库：一座没盖完的砖棚，两条检修沟，一台待修的调车机。棚车小堂就停在库门口的岔线上，里头挤着家眷。有孩子在哭，让人捂住了嘴。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）前头两排，十来条枪，一台铁家伙。后头一车小孩。我站前头。"
   },
   {
    "if": "is.god",
    "text": "那台牵引机没有眼睛，认不出你是谁。兵认得出，可是兵后头有军官，军官后头有协定。"
   }
  ],
  "choices": [
   {
    "text": "守住库门",
    "if": "partysize >= 4",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞开了库门的一扇，汽笛拉到底。掷弹兵腕子上的火绳一齐往上一抬。",
     "enemies": [
      {
       "id": "steam_construct",
       "name": "蒸汽牵引机"
      },
      {
       "id": "grenadier",
       "n": 3,
       "name": "卫队掷弹兵"
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "卫队军士"
      },
      {
       "id": "line_rifleman",
       "n": 2,
       "name": "卫队列兵"
      }
     ],
     "specials": [
      {
       "id": "uncouple",
       "name": "摘钩",
       "desc": "拔掉牵引机和沙袋平板之间的销子，让平板自己溜下坡",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡往回溜，从他们自己的队列中间犁了过去。牵引机少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫手。你缩回来的工夫，活塞从你刚才蹲的地方扫了过去，带走你一块袖子和底下的皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀。库里的人都得烫着，岔线上那节小堂也在里头",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座库。对面在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在你手里，喷出来的那一股全归了你。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "win": {
      "effects": [
       "flag strike_held",
       "rep union +2",
       "rep republic -1"
      ],
      "goto": "a2_12c"
     },
     "lose": {
      "effects": [
       "flag strike_broken",
       "rep union -2",
       "rep charter +1",
       "approval bura -2"
      ],
      "goto": "a2_12c"
     }
    }
   },
   {
    "text": "守住库门",
    "if": "partysize == 3",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞开了库门的一扇，汽笛拉到底。掷弹兵腕子上的火绳一齐往上一抬。",
     "enemies": [
      {
       "id": "steam_construct",
       "name": "蒸汽牵引机"
      },
      {
       "id": "grenadier",
       "n": 3,
       "name": "卫队掷弹兵"
      },
      {
       "id": "dragoon",
       "name": "卫队军士"
      },
      {
       "id": "line_rifleman",
       "n": 2,
       "name": "卫队列兵"
      }
     ],
     "specials": [
      {
       "id": "uncouple",
       "name": "摘钩",
       "desc": "拔掉牵引机和沙袋平板之间的销子，让平板自己溜下坡",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡往回溜，从他们自己的队列中间犁了过去。牵引机少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫手。你缩回来的工夫，活塞从你刚才蹲的地方扫了过去，带走你一块袖子和底下的皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀。库里的人都得烫着，岔线上那节小堂也在里头",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座库。对面在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在你手里，喷出来的那一股全归了你。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "win": {
      "effects": [
       "flag strike_held",
       "rep union +2",
       "rep republic -1"
      ],
      "goto": "a2_12c"
     },
     "lose": {
      "effects": [
       "flag strike_broken",
       "rep union -2",
       "rep charter +1",
       "approval bura -2"
      ],
      "goto": "a2_12c"
     }
    }
   },
   {
    "text": "守住库门",
    "if": "partysize <= 2",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞开了库门的一扇，汽笛拉到底。",
     "enemies": [
      {
       "id": "steam_construct",
       "name": "蒸汽牵引机"
      },
      {
       "id": "line_rifleman",
       "n": 2,
       "name": "卫队列兵"
      }
     ],
     "specials": [
      {
       "id": "uncouple",
       "name": "摘钩",
       "desc": "拔掉牵引机和沙袋平板之间的销子，让平板自己溜下坡",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡往回溜，从他们自己的队列中间犁了过去。牵引机少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫手。你缩回来的工夫，活塞从你刚才蹲的地方扫了过去，带走你一块袖子和底下的皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀。库里的人都得烫着，岔线上那节小堂也在里头",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座库。对面在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在你手里，喷出来的那一股全归了你。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "win": {
      "effects": [
       "flag strike_held",
       "rep union +2",
       "rep republic -1"
      ],
      "goto": "a2_12c"
     },
     "lose": {
      "effects": [
       "flag strike_broken",
       "rep union -2",
       "rep charter +1",
       "approval bura -2"
      ],
      "goto": "a2_12c"
     }
    }
   },
   {
    "text": "一个人走到牵引机前头，站住",
    "tag": "盾",
    "if": "faction == 'shield'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "alt": [
      "intimidation"
     ],
     "dc": 16,
     "mods": [
      {
       "if": "rep.union >= 3",
       "n": 2,
       "why": "互助社的名声"
      }
     ]
    },
    "ok": {
     "text": "牵引机在你跟前三步刹住了。开车的是个兵，兵不想轧人。上尉喊了两遍“继续”。第三遍没喊出来，你身后又站出来四十个。",
     "effects": [
      "flag strike_held",
      "rep union +2",
      "rep republic -1"
     ],
     "goto": "a2_12c"
    },
    "fail": {
     "text": "开车的没刹。你是自己滚进检修沟的，肩膀先着的地。牵引机从沟沿上轧了过去。",
     "effects": [
      "hp -6"
     ]
    }
   },
   {
    "text": "不打。砸开小堂的后门，带家眷往山上撤",
    "effects": [
     "flag strike_broken",
     "rep union -2",
     "rep charter +1",
     "approval bura -2"
    ],
    "result": "你们带出去三十来个，一个没少。回头看，机车库的灯灭了又亮，亮的时候门口换了岗。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12b": {
  "id": "a2_12b",
  "title": "钱箱",
  "text": [
   "工钱定在第二天一早发。钱箱当晚锁在机车库里，两把锁，埃塔拿一把钥匙，缺耳朵的女人拿一把。",
   "半夜两点，坡上那台牵引机动了，没点灯。开它的人穿的是便衣，脚上是军靴。他们要的是钱箱：工钱再丢一回，工棚再停一回工，“护路协定”就又用得上了。",
   "棚车小堂停在库门口的岔线上，守夜的家眷睡在里头。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（警觉。）一台机器。人数我数不清，他们没点灯。（陈述。）机器里没有芯核，只有一张打孔卡。它不会停。我问过了。"
   },
   {
    "if": "is.god",
    "text": "那台牵引机没有眼睛，认不出你是谁。穿便衣的认得出，可他们领的是上尉的另一份饷。"
   }
  ],
  "choices": [
   {
    "text": "守住钱箱",
    "if": "partysize >= 4",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没点灯，从坡上直直压下来。跳下车的人穿便衣，落地的声音是军靴。",
     "enemies": [
      {
       "id": "steam_construct",
       "name": "蒸汽牵引机"
      },
      {
       "id": "secret_police",
       "n": 2,
       "name": "穿军靴的便衣"
      },
      {
       "id": "grenadier",
       "n": 3,
       "name": "没戴高帽的掷弹兵"
      }
     ],
     "specials": [
      {
       "id": "uncouple",
       "name": "摘钩",
       "desc": "拔掉牵引机和沙袋平板之间的销子，让平板自己溜下坡",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡往回溜，从他们自己的队列中间犁了过去。牵引机少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫手。你缩回来的工夫，活塞从你刚才蹲的地方扫了过去，带走你一块袖子和底下的皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀。库里的人都得烫着，岔线上那节小堂也在里头",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座库。对面在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在你手里，喷出来的那一股全归了你。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a2_12c"
     },
     "lose": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_12c"
     }
    }
   },
   {
    "text": "守住钱箱",
    "if": "partysize == 3",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没点灯，从坡上直直压下来。跳下车的人穿便衣，落地的声音是军靴。",
     "enemies": [
      {
       "id": "steam_construct",
       "name": "蒸汽牵引机"
      },
      {
       "id": "secret_police",
       "name": "穿军靴的便衣"
      },
      {
       "id": "grenadier",
       "n": 3,
       "name": "没戴高帽的掷弹兵"
      }
     ],
     "specials": [
      {
       "id": "uncouple",
       "name": "摘钩",
       "desc": "拔掉牵引机和沙袋平板之间的销子，让平板自己溜下坡",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡往回溜，从他们自己的队列中间犁了过去。牵引机少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫手。你缩回来的工夫，活塞从你刚才蹲的地方扫了过去，带走你一块袖子和底下的皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀。库里的人都得烫着，岔线上那节小堂也在里头",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座库。对面在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在你手里，喷出来的那一股全归了你。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a2_12c"
     },
     "lose": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_12c"
     }
    }
   },
   {
    "text": "守住钱箱",
    "if": "partysize <= 2",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没点灯，从坡上直直压下来。跳下车的人穿便衣，落地的声音是军靴。",
     "enemies": [
      {
       "id": "steam_construct",
       "name": "蒸汽牵引机"
      },
      {
       "id": "secret_police",
       "name": "穿军靴的便衣"
      }
     ],
     "specials": [
      {
       "id": "uncouple",
       "name": "摘钩",
       "desc": "拔掉牵引机和沙袋平板之间的销子，让平板自己溜下坡",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡往回溜，从他们自己的队列中间犁了过去。牵引机少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫手。你缩回来的工夫，活塞从你刚才蹲的地方扫了过去，带走你一块袖子和底下的皮。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀。库里的人都得烫着，岔线上那节小堂也在里头",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座库。对面在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在你手里，喷出来的那一股全归了你。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a2_12c"
     },
     "lose": {
      "effects": [
       "gold -100"
      ],
      "goto": "a2_12c"
     }
    }
   },
   {
    "text": "把钱箱推出去，护着小堂里的人撤",
    "effects": [
     "gold -100",
     "rep union -1"
    ],
    "result": "他们拿了箱子就走，一枪没放。第二天的工钱是埃塔从公司账上垫的。她垫的时候一个字没说。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12c": {
  "id": "a2_12c",
  "title": "天亮以后",
  "text": [
   {
    "if": "flag.strike_held",
    "text": "天亮的时候卫队退回了坡上，牵引机歪在检修沟里，锅炉凉了。工棚的人没有欢呼，排着队去领镐，领完坐在枕木上等工钱。银团的电报中午到的：“款即汇。”"
   },
   {
    "if": "flag.strike_broken",
    "text": "天亮的时候镐回到了每个人手里，是卫队发的，发一把记一个名字。棚车小堂的红布让人扯了下来，叠得很整齐，放在门口的台阶上。"
   },
   {
    "if": "flag.strike_settled",
    "text": "工钱是早上七点发的，缺耳朵的女人唱名，埃塔数钱。铺轨的锤声九点钟响起来，隔着山都听得见。坡上的帐篷没撤，上尉说协定没写撤。"
   },
   {
    "if": "flag.a2x_scalded",
    "text": "小堂那节车里烫着了六个，两个是孩子。{?party.narwen:娜尔雯给他们裹了一上午。|你们把随队的药膏全拿了出来。}没人骂你，也没人跟你说话。"
   },
   {
    "if": "party.bura && flag.strike_broken",
    "speaker": "布拉",
    "text": "记了名字的镐。（铰链响了一声。）我们那时候记的是番号。发的人也说是为我们好。"
   },
   {
    "if": "party.bura && !flag.strike_broken",
    "text": "布拉的表侄给她端来一碗掺了肉皮的麦糊。她吃完，把碗还回去，说了今天唯一一句林墙话。表侄笑了，没给你们翻。"
   },
   "你们在工程车里睡到了中午。"
  ],
  "first": [
   "rest short",
   {
    "if": "flag.a2x_scalded",
    "then": [
     "rep union -1"
    ]
   }
  ],
  "next": "a2_13"
 },
 "a2_13": {
  "id": "a2_13",
  "title": "九天",
  "loc": "轨头 · 工程车",
  "date": "1823年花终月",
  "text": [
   "邮件是跟枕木一趟车来的。银团每季寄一回最新的股东名册，埃塔照例从头对到尾，对到第十四页，停了。",
   {
    "speaker": "埃塔",
    "text": "“东坎诺辅助晶源信托”，新进的股东，代持账户，尾号四七一。1810 年买走公司旧债的，是同一个账户。"
   },
   {
    "if": "flag.midreport_blood",
    "text": "她把你那份例行报告的存根并排放上去。报告十四号寄出，入股的日子是二十三号。"
   },
   {
    "if": "flag.midreport_blood",
    "speaker": "埃塔",
    "text": "九天。信走到安本科斯特要六天。他十三年没迟过一回款。我不喜欢他。"
   },
   {
    "if": "!flag.midreport_blood",
    "text": "入股的日子比兵站镇那个初七晚了一个月。你那份报告里一个血字也没有。他是从银行那头听来的。"
   },
   {
    "if": "!flag.midreport_blood",
    "speaker": "埃塔",
    "text": "晚了一个月，在他算慢的。他十三年没迟过一回款。我不喜欢他。"
   },
   {
    "speaker": "别摇",
    "text": "替你们出钱的那位买了一口井。在我老家，这叫打听水有多深。"
   }
  ],
  "first": [
   "quest q_partner stage 2",
   "item +share_register"
  ],
  "choices": [
   {
    "text": "顺着尾号四七一往下查",
    "check": {
     "skill": "investigation",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.partner_hint_1",
       "n": 2,
       "why": "陆军部那杯茶"
      },
      {
       "if": "origin == 'lorent'",
       "n": 2,
       "why": "使馆交过底"
      }
     ]
    },
    "ok": {
     "text": "代持人是一家事务所。事务所的账单寄往陆军部三楼，收件人是一位将军的副官。三年前，那层楼上有位将军问过你：哪一区的土，几年不施术就板结。",
     "effects": [
      "flag partner_is_general"
     ],
     "goto": "a2_14"
    },
    "fail": {
     "text": "回电花了十五个金冠，内容是：该账户“在部里有人”。哪个部，什么人，事务所建议你不要再问。",
     "effects": [
      "gold -15"
     ],
     "goto": "a2_14"
    }
   },
   {
    "text": "给合伙人拍一封电报：贵方入股，可是据本公司报告",
    "effects": [
     "rep partner -1"
    ],
    "result": "回电隔天就到，埃塔念的：“是。报告甚佳。请继续。”她念完把电报纸翻过来看了看背面。背面什么也没有。",
    "goto": "a2_14"
   }
  ]
 },
 "a2_14": {
  "id": "a2_14",
  "title": "血账",
  "text": [
   "铁箱的盖开着。里头是地窖的那本账，四十一页。{?flag.ancardia_ledger:旁边是军需处的流水，每月初八一个缩写。|}",
   {
    "speaker": "埃塔",
    "text": "两本账。这本四十一页，一页一个学徒。{?flag.ancardia_ledger:那本每月差一成，差的都记在初八。|那一本在兵站镇，咱们没有。}两家都知道对方干的事，谁也不先开口。先开口的那家，得把自己那本也交出来。"
   },
   "这条线要是通了，罐子就不用脚夫背了。{?flag.a2x_saw_bottling:兵站镇后屋那些木箱，尺寸是照棚车打的。|}",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "登报。两国都登。孩子的名字抹掉，连队的番号留着。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "登出去，报上的标题不会是“血爵”，会是“法师”。理论上读者分得清。实际上我见过读者。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "四十一页我核过了，品脱数加得上。账是准的。准的东西放在谁手里都是准的。你想好交给谁了吗？"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）第十九页和第三十页是同一个人，两个床号。（不确定。）他们把一个人记成了两个数。我见过这种记法。"
   }
  ],
  "first": [
   "quest q_blood done"
  ],
  "choices": [
   {
    "text": "交给史家会，登出来",
    "effects": [
     "flag blood_published",
     "world press +2",
     "world chains -1",
     "rep wand -2",
     "rep charter -1",
     "gold +60",
     {
      "if": "flag.ancardia_ledger",
      "then": [
       "flag oto_exposed"
      ]
     },
     {
      "if": "flag.ancardia_ledger && flag.a2x_oto_deal",
      "then": [
       "rep republic -1"
      ]
     },
     {
      "if": "party.bura",
      "then": [
       "approval bura +1"
      ]
     },
     "item -cellar_book",
     {
      "if": "item.ancardia_ledger >= 1",
      "then": [
       "item -ancardia_ledger"
      ]
     }
    ],
    "result": "史家会在玛瑙之门山下有间分号。稿子十天后见报，标题是《东坎诺的品脱》。{?flag.ancardia_ledger:奥托的缩写印在第二栏。|}{?flag.a2x_oto_deal:那张十二金冠的收据也印上去了，上头有公司的名字。|}",
    "goto": "a2_15"
   },
   {
    "text": "卖：这一国的账，卖给那一国",
    "effects": [
     "flag blood_sold",
     "gold +600",
     "world chains +1",
     "approval narwen -1",
     "approval bura -2",
     "item -cellar_book",
     {
      "if": "item.ancardia_ledger >= 1",
      "then": [
       "item -ancardia_ledger"
      ]
     }
    ],
    "result": "安卡迪亚的军需官出四百，买地窖的账。{?flag.ancardia_ledger:魔法领地的管事出二百，买军需处的。|另外二百是他后添的，买你们不抄第二份。}两边付的都是现钱，都没要收据。",
    "goto": "a2_15"
   },
   {
    "text": "烧掉",
    "effects": [
     "flag blood_burned",
     "rep wand +1",
     "item -cellar_book",
     {
      "if": "item.ancardia_ledger >= 1",
      "then": [
       "item -ancardia_ledger"
      ]
     }
    ],
    "result": "四十一页烧了一刻钟。{?party.middlesday:礼拜三看着火，说它还背得出来。你请它别背。|灰是埃塔扫的，扫进一只信封，信封上她什么也没写。}",
    "goto": "a2_15"
   },
   {
    "text": "只报给合伙人，别的谁也不给",
    "effects": [
     "flag blood_reported",
     "rep partner +1"
    ],
    "result": "埃塔抄了一份摘要，三页，挂号寄走。回执上的签收人是那位副官，字写得很用力，纸背摸得出来。",
    "goto": "a2_15"
   },
   {
    "text": "锁进埃塔的铁箱",
    "effects": [
     "flag box_blood"
    ],
    "result": "埃塔开了收条：“账册{?flag.ancardia_ledger:两|一}本，寄存。”她把钥匙挂回脖子上。“铁箱里的东西不生利息。也不贬值。”",
    "goto": "a2_15"
   }
  ]
 },
 "a2_15": {
  "id": "a2_15",
  "title": "团务会：路权",
  "art": "ev_multi_racial_merc",
  "loc": "轨头 · 棚车小堂",
  "date": "1823年泪落月",
  "text": [
   "团务会开在棚车小堂里，红布底下拼了一张桌子。线路图摊着，两条红线：一条从第三座和第四座塔中间穿城，一条往南绕进安卡迪亚。签字栏还是那两指宽。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "{?flag.strike_broken:（她是站着说的。）|}哪条都别签。这十一里是拿三个礼拜的欠饷铺的。再铺一百里，欠的是谁的，我现在就算得出来。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "不修。那座城是眼下唯一还教得出学生的地方。铁路从两座塔中间过，理论上只占四丈宽。实际上占的是全部。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（坚持。）穿城。地窖里还有四十一台。（陈述。）铁路进了城，海关那张石桌就得改条例。我只知道这一个办法。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "穿城。教廷在那座城里连一间礼拜堂都没有，问过三回。路通了，第四回的回信会长一点。这是我的理由。你得有你自己的。"
   },
   {
    "speaker": "埃塔",
    "text": "不修，银行倒。违约金够把公司卖两回，第二回卖不出去。我不投票，我报数。"
   },
   {
    "speaker": "别摇",
    "text": "这条路通海吗？不通。那你们吵的是哪一段，我听不出差别。问完了。你们答不上来，算你们欠我半回。"
   },
   "两票对两票。埃塔把笔递给了你。",
   {
    "if": "is.god",
    "text": "缺耳朵的女人在车门口站着。她听说你一夜之间能把线铺完，想先问一句：没干的活，算不算工钱。"
   }
  ],
  "choices": [
   {
    "text": "一夜之间把线铺完",
    "tag": "神",
    "if": "is.god && !flag.line_overnight",
    "once": true,
    "effects": [
     "flag line_overnight",
     "rep charter +3",
     "world dove -1",
     "rep union -2",
     "approval bura -2",
     "var cult +1"
    ],
    "result": "天亮的时候铁轨已经在那儿了，一百四十里，枕木上连露水都没有。两国的兵一早醒来，发现多了一条谁也没签过字的铁路，都开过去抢。工棚的人拿着镐站在路基上，没有活了。{?party.bura:布拉从枕木上拔起一根道钉，掂了掂，又插了回去。|}线往哪边接，还是得你签。"
   },
   {
    "text": "签：穿城",
    "effects": [
     "flag line_castonath",
     "world tears -1",
     "rep charter +2",
     "rep wand -2",
     "approval bura -1",
     "approval guilhem -1",
     "quest q_right_of_way done"
    ],
    "result": "你在那两指宽的栏里写了“穿城”，签了名。{?party.guilhem:吉列姆把眼镜摘了，没擦，又戴上了。|}埃塔吹干墨水，在账上记：路权，已认定。",
    "goto": "a2_16"
   },
   {
    "text": "签：绕行安卡迪亚",
    "effects": [
     "flag line_ancardia",
     "world dove -1",
     "rep charter +1",
     "rep republic +1",
     "rep wand -2",
     "approval middlesday -1",
     "approval narwen -1",
     "quest q_right_of_way done"
    ],
    "result": "你写了“南线”，签了名。奥托的贺电比银团的回电早到半天，头一句是问站台修多长：他要停得下四十节的兵车。",
    "goto": "a2_16"
   },
   {
    "text": "不签。线不修",
    "if": "!flag.line_overnight",
    "effects": [
     "flag line_none",
     "rep charter -3",
     "rep union +1",
     "approval middlesday -1",
     "approval narwen -1",
     {
      "if": "flag.strike_held",
      "then": [
       "rep union +1"
      ]
     },
     {
      "if": "!flag.clause_force_majeure",
      "then": [
       "flag contract_broken"
      ]
     },
     {
      "if": "!flag.bank_thin",
      "then": [
       "gold -150"
      ]
     },
     "quest q_right_of_way done"
    ],
    "result": "{?flag.clause_force_majeure:你引的是第十一页那一条：罢工、战事，不可抗力。银团的律师读了三遍，没找着缝。|合同上没有退路。三百七十七年里公司头一回毁约，埃塔往账上写这一行的时候换了一支笔。}{?flag.bank_thin:公司的存款，她上个月就取出来了。|阿斯拉银行停兑那天，公司还有一百五十金冠存在里头。}",
    "goto": "a2_16"
   }
  ]
 },
 "a2_16": {
  "id": "a2_16",
  "title": "空席",
  "art": "ev_fat_loot",
  "loc": "卡斯托纳斯 · 第三座塔顶",
  "text": [
   "泪落月，塔顶。长桌还是那一张。{?flag.yamina_spent:这回桌边多了一把椅子，雅米娜坐在上头，屋里没人敢朝那把椅子看。|雅米娜站在老地方。}她左手边是第四代维纳克沃德领主，四十来岁，指甲剪得很短。右手边是伊萨，坐在一只书箱上，脚够不着地。",
   "桌上三样东西。一张窖藏的清单：塔底下封着 1810 年以前攒的晶体，四百一十箱。一只行礼用的铜盆。一封没封口的信，收信人是吉列姆。",
   {
    "speaker": "雅米娜",
    "text": "{?flag.line_castonath:铁路你们签了，从我的第三席和第四席中间过。|}{?flag.line_ancardia:铁路绕了南边。兵车会比你们的测量队快。|}窖藏，这孩子，你们那位变化师。三件事，今天办完。我没有第二个雨季了。"
   },
   {
    "if": "flag.isa_owes_company && !flag.demesne_patron",
    "text": "伊萨朝你们点了点头，很郑重，是欠着账的人点头的那种点法。"
   },
   {
    "if": "is.god",
    "speaker": "雅米娜",
    "text": "每道咒的产出，你报个数，我好往账上填。够强的法师就是神。这句话我们写过，后来改了口。"
   }
  ],
  "choices": [
   {
    "text": "提议三印封存：魔法领地、教会、公司各执一枚",
    "if": "faction != 'seal'",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.yamina_tired",
       "n": 2,
       "why": "你看得出她累了"
      },
      {
       "if": "flag.ledger_copied",
       "n": 2,
       "why": "你手里有她那两栏账"
      },
      {
       "if": "rep.wand >= 2",
       "n": 1,
       "why": "王冠与魔杖的名声"
      },
      {
       "if": "flag.a2x_old_days",
       "n": 1,
       "why": "聊过 1744 年"
      }
     ]
    },
    "ok": {
     "text": "领主驳了四条，雅米娜抬手止住了第五条。“三枚印。我的那枚传给这孩子。”火漆是当场化的，四百一十箱，封到半夜。",
     "effects": [
      "flag hoard_sealed",
      "world tears +1",
      "rep wand +1"
     ],
     "goto": "a2_16b"
    },
    "fail": {
     "text": "维纳克沃德领主问：教会那枚印，凭什么。你答了三条，他驳了四条。{?flag.line_ancardia:窖藏是兵车到的那天搬走的，四百一十箱，没用上任何一枚印。|窖藏原样锁着，钥匙还在雅米娜一个人的腰上。}",
     "effects": [
      {
       "if": "flag.line_ancardia",
       "then": [
        "flag hoard_milled",
        "world tears -1"
       ]
      }
     ],
     "goto": "a2_16b"
    }
   },
   {
    "text": "起草三印封存的文本：一式三份，三方各执",
    "tag": "印",
    "if": "faction == 'seal'",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "party": true,
     "adv": true,
     "mods": [
      {
       "if": "flag.yamina_tired",
       "n": 2,
       "why": "你看得出她累了"
      },
      {
       "if": "flag.ledger_copied",
       "n": 2,
       "why": "你手里有她那两栏账"
      },
      {
       "if": "rep.wand >= 2",
       "n": 1,
       "why": "王冠与魔杖的名声"
      },
      {
       "if": "flag.a2x_old_days",
       "n": 1,
       "why": "聊过 1744 年"
      }
     ]
    },
    "ok": {
     "text": "七条，你写得很短，每条一行。领主挑了半个钟头，改掉一个逗号。雅米娜看完说：“比我们自己的章程写得清楚。”火漆是当场化的，四百一十箱，封到半夜。",
     "effects": [
      "flag hoard_sealed",
      "world tears +1",
      "rep wand +1"
     ],
     "goto": "a2_16b"
    },
    "fail": {
     "text": "文本没毛病，领主挑的是执印的人：教会那一枚，凭什么。{?flag.line_ancardia:窖藏是兵车到的那天搬走的，四百一十箱，你那七条一条也没用上。|窖藏原样锁着，你那三份文本，她留了一份。}",
     "effects": [
      {
       "if": "flag.line_ancardia",
       "then": [
        "flag hoard_milled",
        "world tears -1"
       ]
      }
     ],
     "goto": "a2_16b"
    }
   },
   {
    "text": "劝她卖给银团：磨成子弹，付清佣兵的饷",
    "effects": [
     "flag hoard_milled",
     "world tears -1",
     "rep charter +2",
     "gold +500",
     "approval guilhem -3"
    ],
    "result": "雅米娜听完了你的数。“四百一十箱，换城墙上的人不再领罐子。”她在清单末尾签了字，把笔放得很轻。银团的经手费五百金冠，汇到公司账上。{?party.guilhem:吉列姆从头到尾看着窗外。|}",
    "goto": "a2_16b"
   },
   {
    "text": "一句不插，看她自己怎么定",
    "effects": [
     {
      "if": "flag.line_ancardia",
      "then": [
       "flag hoard_milled",
       "world tears -1"
      ]
     }
    ],
    "result": "{?flag.line_ancardia:你没开口。窖藏是兵车到的那天搬走的，四百一十箱，押车的是奥托的人，收条开的是“辅助晶源”。|你没开口。她把清单折起来，压回砚台底下。那串钥匙还在她一个人的腰上。}",
    "goto": "a2_16b"
   }
  ]
 },
 "a2_16b": {
  "id": "a2_16b",
  "title": "铜盆",
  "text": [
   "第二件事是那只铜盆。王家巫师入列要过一道礼，过得了的才算一席。马德莱茵女皇那会儿一个岁数一个岁数试过，最合适的是刚抽条的年纪。伊萨十二岁，下个雨季十三。",
   {
    "speaker": "伊萨",
    "text": "行礼疼不疼，没人肯告诉我。他们说上一个问这话的人如今坐第二席。可第二席是空的。"
   },
   {
    "if": "flag.isa_owes_company",
    "speaker": "伊萨",
    "text": "我欠你们一回。行礼的时候你们在，我就不怕。记上，这算我又欠半回。"
   },
   {
    "speaker": "维纳克沃德领主",
    "text": "礼要两个人主持，一个人护着。我们有两个半：我，女导师长，和她今天剩下的力气。贵公司肯出人手，就凑得齐。"
   },
   {
    "if": "flag.demesne_patron",
    "text": "铜盆里的水见了你，自己起了一圈纹。领主皱了眉：这孩子的溺亡没有自己熬过去，礼认不认她，他没有把握。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "护着的那个我来。催生术的圈我站过四百回，这个小一号。（他想了想。）小一号的我一回也没站过，先说在前头。"
   }
  ],
  "choices": [
   {
    "text": "今天就行礼",
    "check": {
     "skill": "arcana",
     "dc": 15,
     "party": true,
     "adv": "is.caster && !is.mechanim && !flag.demesne_patron",
     "dis": "flag.demesne_patron",
     "mods": [
      {
       "if": "flag.shared_circle",
       "n": 1,
       "why": "你站过催生术的圈"
      },
      {
       "if": "flag.isa_owes_company",
       "n": 1,
       "why": "她信得过你们"
      }
     ]
    },
    "ok": {
     "text": "水没过她的手腕，变成蓝的，又变回清的。伊萨从头到尾没出声，完了以后问能不能坐下。领主把名册翻到第二席，写了一个名字。八个席位，空着五个。",
     "effects": [
      "flag rite_given"
     ],
     "goto": "a2_16c"
    },
    "fail": {
     "text": "水刚没过手腕就浑了。领主一把将她的手提了出来。人没事，指尖麻了三天。名册没有动，八个席位还是空着六个。",
     "effects": [
      "rep wand -1"
     ],
     "goto": "a2_16c"
    }
   },
   {
    "text": "再等一个雨季",
    "effects": [
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     }
    ],
    "result": "雅米娜看了你一会儿。“等。我教了她两年等，不差这一年。”伊萨从书箱上滑下来，把铜盆抱走了，抱得很稳。",
    "goto": "a2_16c"
   }
  ]
 },
 "a2_16c": {
  "id": "a2_16c",
  "title": "那封信",
  "text": [
   "第三件事是那封信。雅米娜没有念，把它推到桌子中间。信上的东西她说了一遍，一共三样：第五座塔，眼下空着；学生，先是伊萨，往后她挑；头衔，王家巫师第五席护席。",
   {
    "if": "party.guilhem",
    "text": "吉列姆把信读出了声，读到“护席”两个字停住，摘了眼镜，拿袖口擦。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "共和国给过我一张表，半个月的咖啡票，一个“三等”。这上头写的是一座塔。"
   },
   {
    "if": "party.guilhem",
    "text": "他抬头看你。信还捏在手里，眼镜没戴回去。"
   },
   {
    "if": "!party.guilhem",
    "text": "信是写给吉列姆的，他人不在这儿。埃塔把信收进铁箱，在收条上写：代收，待转。雅米娜看着她写完，说矮人的字比王家巫师的整齐，这一点三百年没变过。"
   }
  ],
  "choices": [
   {
    "text": "“公司给不了你塔。给得了你一张桌子，和几个吵架的人。”",
    "if": "party.guilhem",
    "effects": [
     "approval guilhem +1"
    ],
    "goto": "a2_16d"
   },
   {
    "text": "“去吧。这是你等了二十年的东西。”",
    "if": "party.guilhem",
    "effects": [
     "approval guilhem -1"
    ],
    "goto": "a2_16d"
   },
   {
    "text": "一句话也不说，等着",
    "effects": [
     {
      "if": "party.guilhem",
      "then": [
       "flag a2x_left_to_him"
      ]
     }
    ],
    "goto": "a2_16d"
   }
  ]
 },
 "a2_16d": {
  "id": "a2_16d",
  "title": "回信",
  "text": [
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "他想了一夜。早上他来找你，眼镜擦得很干净。辞呈填在公司的表上，事由一栏他写了两遍才写满。{?flag.a2x_left_to_him:他说，你昨天没开口，这份辞呈才写得下去。|}"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "speaker": "吉列姆",
    "text": "{?flag.hoard_milled:四百一十箱磨成了子弹。|}{?flag.line_castonath:铁路要从第三席和第四席中间过。|}这地方再过十年可能就没了。我不留下，它这十年也教不出一个人。别留我。第四十一款管不到这儿。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "他把公司的钥匙放在埃塔桌上，自己提着箱子上了第五座塔。一百九十级，中间歇了两回。"
   },
   {
    "if": "party.guilhem",
    "text": "他想了一夜。早上回信写好了，只有三行，他念给你听。"
   },
   {
    "if": "party.guilhem && flag.a2x_left_to_him",
    "speaker": "吉列姆",
    "text": "念之前先说一句：昨天你一个字也没说。谢谢。"
   },
   {
    "if": "party.guilhem",
    "cls": "letter",
    "text": "“承蒙厚意。本人已有职守。依《国家变化师服务条例》第四十一款，在职者不得兼任教席。”"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "那一款 1820 年就管不着我了，我辞过职，她也知道。{?flag.skiplist_defied:梨林那四十亩是违了令才施的。我得跟着违令的人走到头。|}{?flag.hoard_sealed:窖藏封住了，那孩子有东西可学，用不着我。|}这是个体面的借口。理论上，两边都保住了面子。"
   },
   {
    "if": "party.guilhem",
    "text": "信是他自己送上去的。下来的时候口袋里多了一样东西：伊萨抄给他的一页《入门八式》，字很大。"
   },
   {
    "if": "!party.guilhem && !flag.guilhem_stayed",
    "text": "那封信在铁箱里躺着。伊萨下楼送你们，送到第一百级，问了一句那位变化师长什么样。你说，戴眼镜，填表的时候爱念出声。"
   }
  ],
  "first": [
   {
    "if": "party.guilhem && (flag.line_castonath || flag.hoard_milled) && !(flag.skiplist_defied || flag.hoard_sealed || approval.guilhem >= 6)",
    "then": [
     "flag guilhem_stayed",
     "quest q_guilhem fail",
     "companion -guilhem"
    ],
    "else": [
     {
      "if": "party.guilhem",
      "then": [
       "quest q_guilhem stage 2"
      ]
     }
    ]
   }
  ],
  "next": "a2_17"
 },
 "a2_17": {
  "id": "a2_17",
  "title": "第二份报告",
  "loc": "卡斯托纳斯 · 邮局",
  "text": [
   "卡斯托纳斯没有电报。邮局是下城的一间石屋，信走邮车，每礼拜二、礼拜六各一班，到安本科斯特要九天。",
   "给合伙人的第二份报告。埃塔把这一年的存根摊在邮局的长凳上：底片的收条，兵站镇的三联单，股东名册第十四页，{?flag.partner_is_general:页边写着“陆军部三楼”。|页边写着“在部里有人”。}纸她已经裁好了，四页的量。",
   {
    "speaker": "埃塔",
    "text": "写几页，邮资一样。他入了血的股，你写不写，他都知道一半。我只提醒这一句。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "使馆的条子比邮车先到，只问一件事：塔底下那四百一十箱，如今在谁手里。"
   }
  ],
  "choices": [
   {
    "text": "另抄一份，寄给老连队的文书",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep republic +1"
    ],
    "result": "你把安卡迪亚兵车的节数、兵站镇的床数都抄了进去。文书会念给连里听，念完锁进连部的柜子，那个柜子你锁过。"
   },
   {
    "text": "给使馆的那一份照实写：窖藏的下落",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a2x_embassy_done",
    "once": true,
    "effects": [
     "flag a2x_embassy_done",
     "var home_copies +1",
     "rep wand +1"
    ],
    "result": "你用密码本译了两页。{?flag.hoard_sealed:三枚印，各在谁手里，你都写了。|}{?flag.hoard_milled:四百一十箱磨成了子弹，买主是谁，你也写了。|}参赞读到的会比合伙人读到的早两天。"
   },
   {
    "text": "给使馆的那一份写薄：窖藏“情况不明”",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a2x_embassy_done",
    "once": true,
    "effects": [
     "flag a2x_embassy_done",
     "var embassy_gap +1"
    ],
    "result": "四个字，译成密码是十一组数。参赞会在页边批一个问号，他的问号一向画得很大。"
   },
   {
    "text": "另抄一份，寄回镇议会",
    "tag": "巨魔湾",
    "if": "origin == 'concord'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep charter +1"
    ],
    "result": "镇议会收到以后，得先表决要不要读。你在信封上添了一句：建议读。"
   },
   {
    "text": "另抄一份寄给法德伦的工会，请他们当众念",
    "tag": "无主者",
    "if": "origin == 'unowned'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep union +1"
    ],
    "result": "地窖里那四十一台，你一台一台写了编号。念的人会念到七号线，1811 年三月的料。听的人里有打过那批铆钉的。"
   },
   {
    "text": "把这一年写进考察笔记，托商栈带回家",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep south +1"
    ],
    "result": "题目你改了第二回：《一家有限责任的冒险公司，及其无限的责任》。水术师行会的审稿人不喜欢逗号，你留着了。"
   },
   {
    "text": "写全，四页",
    "effects": [
     "flag report2_full",
     "rep partner +1"
    ],
    "result": "四页，埃塔称过，没超重。九天去，九天回。回信一行：“收悉。款已汇。”",
    "goto": "a2_18"
   },
   {
    "text": "写全，抬头写“将军阁下”",
    "if": "flag.partner_is_general",
    "effects": [
     "flag report2_full",
     "flag report2_named_general",
     "rep partner +2"
    ],
    "result": "回信赶在你们出城前到了，头一封亲笔的，字很大，往右上斜。通篇谈的是天气：安本科斯特今年泪落月雨水少，“于观星有利”。落款没有军衔。",
    "goto": "a2_18"
   },
   {
    "text": "删改：留下路权，拿掉血和那个账户",
    "effects": [
     "flag report2_edited"
    ],
    "result": "两页。埃塔把裁下来的那两页空纸收回了抽屉。“纸不浪费。”回信一行：“收悉。款已汇。”",
    "goto": "a2_18"
   },
   {
    "text": "说谎：沿线无事，一切顺利",
    "check": {
     "skill": "deception",
     "dc": 14
    },
    "ok": {
     "text": "一页，写得很匀。回信一行：“收悉。款已汇。”多一个字都没有。",
     "effects": [
      "flag report2_lie",
      "rep partner -1"
     ],
     "goto": "a2_18"
    },
    "fail": {
     "text": "一页。回信也是一页，抄的是你上个月那份例行报告的日期和页数，底下一行：“两份文件出自同一支笔，请择一为准。”",
     "effects": [
      "flag report2_lie",
      "flag partner_knows_lie",
      "rep partner -1"
     ],
     "goto": "a2_18"
    }
   }
  ]
 },
 "a2_18": {
  "id": "a2_18",
  "title": "数流星",
  "art": "ev_big_star_in_sky",
  "loc": "卡斯托纳斯 · 城墙",
  "text": [
   "没有煤气灯的城看星星最清楚。点灯的人今晚歇工，城墙上坐满了人，自带毯子，有一家带了一锅煮栗子。",
   {
    "if": "world.tears >= 6",
    "text": "到后半夜，数出来二百来颗。有人数乱了，从头再来。"
   },
   {
    "if": "world.tears == 5",
    "text": "到后半夜，数出来一百五十颗上下。"
   },
   {
    "if": "world.tears == 4",
    "text": "到后半夜，数出来九十多颗。旁边那一家数到九十就下城墙了。"
   },
   {
    "if": "world.tears == 3",
    "text": "到后半夜，数出来五十颗上下，中间有一刻钟一颗也没有。"
   },
   {
    "if": "world.tears == 2",
    "text": "到后半夜，数出来二十几颗。栗子比流星先吃完。"
   },
   {
    "if": "world.tears == 1",
    "text": "一整夜，一只手数得过来。"
   },
   {
    "if": "world.tears <= 0",
    "text": "一整夜，零。城墙上的人坐到天亮才肯走。"
   },
   "1809 年的历书上，这一栏写的是“数不过来”。德鲁兹纳在工程车顶上架了镜子，架完说用不着镜子。",
   {
    "speaker": "德鲁兹纳",
    "text": "肉眼够了。再过十五年，肉眼也嫌多。"
   },
   {
    "if": "party.bura && is.mortal",
    "speaker": "布拉",
    "text": "我数的是月份。三年前十一个月，今年{?flag.backpay_suit:官司开了两回庭，|}还是十一个月。欠饷不长利息，这一点比流星强。"
   },
   {
    "if": "party.bura && is.god",
    "speaker": "布拉",
    "text": "（她先敬了个礼，三年里头一回。）我跟了一辈子圣徒的教会。她好歹是死了的。"
   },
   {
    "if": "party.bura && is.god",
    "text": "说完她接着数。后半夜你报错了一个数，差了十来颗。她听见了，没纠正。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（好奇。）落下来的晶体归拾到的人，登记成财物。（不确定。）没落下来的那些，归谁。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "从前我说下一回是 1921 年，理论上。看过那箱底片，这三个字我不加了。加了是骗人。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "对面第五座塔的窗口亮着灯，窗边站着一个人，头发是灰的。他看见你们了，没有招手。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "碎片今年九声。流星的数我也记了，跟那九道竖线记在同一页上。我没说它们有关系。我只是纸不够了。"
   }
  ],
  "first": [
   "level 6"
  ],
  "next": "a3_01"
 }
};
