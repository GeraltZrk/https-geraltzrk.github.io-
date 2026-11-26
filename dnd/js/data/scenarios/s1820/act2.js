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
   "转眼到了 1823 年的苏伦月，这三年里，公司押过四趟晶体车，替史家会搬过一回库房，别摇的罐子照旧搁在窗台上，三年都没挪过窝。埃塔把这三年的剪报一条一条钉在了账房的北墙上，一条一颗钉子，钉子是跟楼下蜡烛铺借的，借了多少她都记了账。",
   {
    "cls": "letter",
    "text": "头一条是《安本科斯特论坛报》的，说埃斯玛利亚的公投{?flag.volleys:“因故中止”，重办日期待议|已经计票完毕，结果“供议会参考”}。议会这一参考，就参考了三年。"
   },
   {
    "if": "flag.blame_crowd",
    "cls": "letter",
    "text": "《斗兽场哨兵报》登过一条，说康威尔那件事定成了“滋事”，凭的是当时在场的一家冒险公司写的报告。"
   },
   {
    "if": "flag.blame_officer",
    "cls": "letter",
    "text": "《康威尔通报》登过一条，说马洛中尉“另有任用”，其实是调到北边看仓库去了，法庭一回也没开过。"
   },
   {
    "if": "flag.blame_unknown",
    "cls": "letter",
    "text": "《康威尔通报》登过一条，说康威尔事件的起因“不明”，全卷已经归档。"
   },
   {
    "if": "flag.square_stood && !flag.square_miracle",
    "cls": "letter",
    "text": "《康威尔通报》给“站到两排人中间的那位队长”留了半栏的地方，只可惜名字拼错了一个字，埃塔拿红笔给改了过来。"
   },
   {
    "if": "flag.square_mages_out",
    "cls": "letter",
    "text": "《论坛报》第四版上有一句，说康威尔出事那天，“公务法师均已安全撤离”。"
   },
   {
    "if": "flag.square_held_line",
    "cls": "letter",
    "text": "陆军部寄来过一封嘉奖函，抬头写的是“协助维持秩序”，埃塔照规矩把它归了档，没往墙上钉。"
   },
   {
    "if": "flag.skiplist_obeyed",
    "cls": "letter",
    "text": "《泰卢姆时报》说，梨林等四个区歉收，救济粮要按户登记，登记表的最后一栏填的是“上次投票意向”。"
   },
   {
    "if": "flag.skiplist_defied",
    "cls": "letter",
    "text": "《康威尔通报》说，梨林等四个区的收成“意外良好”，{?flag.refusal_on_paper:部里那封申斥信倒是写好了，可一直没寄出来。|部里的申斥信寄到了公司，埃塔拿它垫了茶壶。}"
   },
   {
    "if": "flag.skiplist_halved",
    "cls": "letter",
    "text": "十个区都只收了半季，好在都撑到了开春。事后没有一个区来信道谢，倒也没有一个区来信骂人。"
   },
   {
    "if": "flag.skiplist_read_out",
    "cls": "letter",
    "text": "那封只有十三个字的电报，让《泰卢姆传声报》编成了顺口溜，传令员满街喊了整整一个冬天。"
   },
   {
    "if": "flag.skiplist_caught",
    "cls": "letter",
    "text": "陆军部重印了一份“可靠承包人”名录，比原先少了一行，埃塔就在那一行原来的位置上画了个框。"
   },
   {
    "if": "flag.lianne_arrested",
    "cls": "letter",
    "text": "《哨兵报》说，前战斗法师加贝莱尔判了七年，在哪儿服刑不公开，说是“以防劫狱”。"
   },
   {
    "if": "flag.lianne_freed",
    "cls": "letter",
    "text": "《论坛报》说，加贝莱尔至今在逃，赏格已经涨到了三百金冠。"
   },
   {
    "if": "flag.lianne_supplied",
    "cls": "letter",
    "text": "有一条不是从报上剪的，是从吉列姆旧同事的来信上抄下来的，说康威尔以西有所不挂牌的学校，今年多收了四个学生。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆站在墙跟前，一条一条地念出声来。三年前他的头发还是棕的，如今成了铁灰色，念到自己老家那一条的时候，他把眼镜往上推了推。"
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
    "text": "《论坛报》说，法德伦的工会给一台机器发了会员证，出生地那一栏填的是“七号线”。"
   },
   {
    "if": "!flag.union_card",
    "cls": "letter",
    "text": "《论坛报》说，工会就“机器能否入会”表决了第五回，结果还是推迟。"
   },
   {
    "cls": "letter",
    "text": "《加韦顿观察》说，北方的布拉斯兰斯将军渡了河，自己给自己加了冕。配的那幅木刻像想必刻得太急，底下的说明写着“左三”，可左边一共只刻了两个人。"
   },
   {
    "cls": "letter",
    "text": "《泰卢姆传声报》说，布西拉尔又下了第二回、第三回漩涡，船都回来了，人数却没登。报上还说，卡尔希尔的游学团已经回国，带走了四箱议事规则。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "游学团走的时候没带上你，团长只给你留了一句话，说题目没写完的，就接着写。"
   },
   {
    "if": "flag.report1_full",
    "cls": "letter",
    "text": "《哀恸日评论》第六版说，陆军部“为屯垦计”，在埃斯玛利亚低价收了一批死地，经办的是某位将军的副官。"
   },
   {
    "if": "!flag.report1_full",
    "text": "至于那位合伙人，这三年没有一个字见过报，钱倒是照到不误。"
   },
   {
    "if": "origin == 'lorent' && flag.purse_spent_mages",
    "cls": "letter",
    "text": "《洛伦特日报》说，有两位“自安本纳尔来投”的变化师，受聘去了鲁本奈尔大学。"
   },
   {
    "if": "origin == 'lorent' && flag.purse_to_peargrove",
    "cls": "letter",
    "text": "梨林来了封信，说你那袋钱买的种子出了苗，一道咒也没用。使馆到现在还不知道这笔钱去了哪儿。"
   },
   {
    "if": "is.god",
    "cls": "letter",
    "text": "《传声报》说，舱底区多了一座供{god}的小龛，可香钱该归谁，两拨人打了一年的官司，法官要求“当事神”到庭。"
   },
   {
    "if": "flag.soil_mended",
    "cls": "letter",
    "text": "那个区一连三年没请过巡回队，施术捐也没缴，部里正在研究怎么给一块好地开罚单。"
   },
   {
    "if": "flag.box_turned_blue",
    "cls": "letter",
    "text": "军需处那盒变蓝的子弹总算结了案，结论是“储存不当”。"
   },
   {
    "if": "flag.square_miracle",
    "cls": "letter",
    "text": "康威尔广场上停住过的弹头有四十来颗，都让人捡去当护身符卖了，一颗两个金冠，可如今市面上流通的，已经有三百多颗了。"
   },
   {
    "if": "flag.tears_called",
    "cls": "letter",
    "text": "那座谷仓的主人把天文台告上了法庭，败诉以后，又改告“不明人士”。"
   },
   {
    "if": "is.immortal",
    "text": "埃塔把你的养老金重算了一遍，算到一半停了笔，在页边画了个问号。账本上你那一栏的签名，拿三年前的来描，一笔都不差。楼下蜡烛铺老板娘的女儿，倒已经开始站柜台了。"
   },
   "墙上最后一颗钉子钉的不是剪报，是一张汇票。",
   {
    "speaker": "埃塔",
    "text": "三百金冠，是三年的预付款，一年一百，一次汇到的。这位合伙人十三年了，没迟过一回款。队长，您是签收呢，还是另说个办法？"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）共和国还欠着我十一个月的饷呢，这位倒好，一给就先给三年。"
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
    "result": "埃塔吹干了墨水，把汇票夹进账本里。“收讫了，往后这三年，他问什么，咱们就答什么。”",
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
    "result": "埃塔另起了一页，在页眉上写了“外活”两个字，合伙人的回电也只有两个字：“知悉。”她把这两个字看了很久，到底没看出别的意思来。",
    "goto": "a2_02"
   },
   {
    "text": "拿这笔钱替布拉跟共和国打欠饷的官司",
    "effects": [
     "flag backpay_suit",
     "rep republic -1",
     "approval bura +2"
    ],
    "result": "状子递进去那天，书记官问被告是谁，埃塔回答说：“共和国，地址你们有。”{?party.bura:布拉在法院门外站了一上午，用的是站岗的姿势。|状纸上原告那一栏，写的是“铁颌，中士，1810”。}",
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
   "阿斯拉银行的总号是 1410 年挂的牌，四百多年下来，门槛都让矮人的靴子磨出了两道槽。银团的人在长桌那头坐了一排，可开口的只有一个，他的胡子编成三股，每股底下坠着一枚砝码。",
   {
    "speaker": "银行的矮人",
    "text": "是这么一条线，从玛瑙之门山底下的矮人之路接出来，往西一直修进东坎诺。本行想请贵公司办三样事，勘测，护卫，签字，三样合在一起，算一个价。"
   },
   "这条线要过两个国家，偏偏安卡迪亚禁巫师，魔法领地禁机器。铁路到底走哪一边，合同上写的是“以测量方队长签字认定为准”，那一行底下留了两指宽的空。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "两指宽哪。我上回见着这么宽的栏，里头填的是“奉命不救”。"
   },
   "你们出门的时候，隔壁《论坛报》的门房正把一个矮人往外请，那矮人怀里抱着一只包了铁角的木箱，胡子上还沾着粉笔灰。",
   {
    "speaker": "门房",
    "text": "老先生，您这都跑到第七家了吧？我们这儿真的不登星星。"
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
     "text": "你把沿线两国的哨卡数、一趟工程车的煤钱和四个人的抚恤一样一样报给他听，他把胡子上的砝码拨了三回，总算添了一百五十金冠，还补了一句：“抚恤那一项，本行希望用不上。”",
     "effects": [
      "gold +150"
     ]
    },
    "fail": {
     "text": "你刚说到“风险”两个字，他就把这两个字记了下来，偏偏记在了“承包方”那一栏底下，预付款一个铜子也没添。",
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
     "text": "他嘴上报着数，眼睛看的却是你身后那扇金库门，桌角还压着两封退股的信，落的都是上个月的日子。看来这条线要是修不成，这家银行就过不了冬。",
     "effects": [
      "flag bank_thin"
     ]
    },
    "fail": {
     "text": "你盯得太久了，他把茶杯挪到了你够不着的地方。"
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
    "result": "他愣了一下才开始解释，解释到第三句自己停住了，砝码在胡子上直晃。你把这三句话原样记进了考察笔记，又在旁边加了个注，说他没说完。"
   },
   {
    "text": "在合同里添一条：罢工、战事视为不可抗力",
    "tag": "印",
    "if": "faction == 'seal'",
    "once": true,
    "effects": [
     "flag clause_force_majeure"
    ],
    "result": "合同一共十一页，他逐页签了缩写，签得很慢。“贵公司三百七十七年没毁过约，守约的人先给自己留门，本行还是头一回见。”"
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
   "公司的工程车停在东站的三号站台，一共三节，一节客车，一节棚车，还有一节装仪器的平板。四号站台停的是另一列车，车窗里望过去全是灰蓝色的军帽。",
   "那是安卡迪亚的兵，照月神之冠条约借道过境的，站长手里举着一面小旗，从他们进站到现在，那面旗子就没动过。",
   "抱箱子的矮人也到了这儿，他把一张银团的聘书拍给检票的看，然后回过头想找个人帮他抬箱子，可站台上谁也不肯跟他对上眼。",
   {
    "if": "origin == 'anbennar'",
    "text": "那列兵车走的是月河支线，明天中午就要过你老家的站。站台上有个卖烟丝的，认出了你身上那件没领章的旧制服。"
   },
   {
    "if": "origin == 'anbennar'",
    "speaker": "卖烟丝的",
    "text": "你是穿过那身皮的。那你跟我说句实在的，共和国答应过的事，到底还算不算数啊？"
   },
   {
    "if": "origin == 'lorent'",
    "text": "使馆的听差在车门口等着你，递上来一张对折的便条，上头没有抬头，只有一句话：“此线若归安卡迪亚，于我不利。”"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）一列车，四百条枪，借的还是咱们的道。我就想知道，这车票钱是谁出的。"
   }
  ],
  "choices": [
   {
    "text": "帮矮人把箱子抬上工程车",
    "once": true,
    "effects": [
     "flag a2x_helped_druznar"
    ],
    "result": "箱子沉得很，一点不像是装衣裳的。他把你上上下下打量了一遍，这才开口：“德鲁兹纳，暗望所的，箱子里是玻璃，脚底下看着点，年轻人。”"
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
    "result": "他点了点头，把烟丝包好了递给你，没收钱。“那我就再等等吧。我都等了十三年了，也不差这一列车。”"
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
    "result": "他笑了，笑着笑着就咳了起来：“穿这身皮的肯跟我说实话，这还是头一回。”半个站台的脚夫都朝这边看了一眼。"
   },
   {
    "text": "让听差带回一句：知道了",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "once": true,
    "effects": [
     "rep wand +1"
    ],
    "result": "听差把这三个字默念了两遍才走。使馆向来会把“知道了”读成“照办”，这是他们的老习惯，你也没去纠正。"
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
   "安卡迪亚的哨卡说来简单，就是一道横木，外加一间刷了石灰的板房。这儿的哨兵不看证件，他从怀里摸出一块拇指大的达姆斯塔尔，举到每个人的鼻子跟前晃一晃。",
   {
    "if": "party.guilhem",
    "text": "晶体晃到吉列姆跟前的时候，他的眼珠子跟着走了半圈。哨兵一看就笑了，朝板房里吹了声口哨。"
   },
   {
    "if": "!party.guilhem && is.caster && !is.artificer",
    "text": "晶体晃到你跟前的时候，你的眼珠子自己就跟了过去，拦都拦不住。哨兵一看就笑了，朝板房里吹了声口哨。"
   },
   {
    "if": "!party.guilhem && !(is.caster && !is.artificer)",
    "text": "他挨个晃了一圈，没有谁的眼珠子跟着走。哨兵不大甘心，可还是朝板房里吹了声口哨。"
   },
   "从板房里出来的是个上尉，领口敞着，手里拿着一沓表格，表格上还压着半只咬过的苹果。",
   {
    "speaker": "奥托",
    "text": "我是莫雷塞德的奥托，这段边境归我管饭。规矩是这样的，法师登记费一个金冠，瞒报呢，罚十二个。我给你开十二个的那张，咱俩一人落六个，反正有银团报销嘛，谁也不吃亏。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "这地方得当过兵才有票，这规矩我挑不出毛病。（铰链响了一声。）可挑不出毛病，我心里就不痛快。"
   },
   {
    "if": "is.god",
    "text": "晶体举到你跟前，一下子亮成了白的，亮得连哨兵手背里的骨头都照得见。他翻出罚十二个金冠的那张表，可笔悬在“种族”一栏上，半天落不下去。"
   },
   {
    "if": "is.god",
    "speaker": "奥托",
    "text": "神迹眼下是个什么行市啊？我这人不贪，只抽一成。军需处那边我去说，就说是“特种晶源”。"
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
     "text": "奥托把你们挨个看了一遍，在表上打了个勾：“测量员，行吧，你们这一行的，眼珠子倒都挺灵。”他把剩下的苹果啃完，核扔进了装表格的筐里。",
     "goto": "a2_04"
    },
    "fail": {
     "text": "“测量员。”奥托把晶体往桌上一搁，{?party.guilhem:吉列姆的手不听使唤，自己伸了过去|队里有只手不听使唤，自己伸了过去}。“那就十二个金冠，名字我替你们填，每月初七到兵站镇去，记得带上胳膊。”",
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
    "result": "你把姓名、师承、每日施术次数一栏一栏都填满了，奥托接过表去，却是一脸的失望：“自己往里走的，我还是头一回见，真没意思。每月初七到兵站镇去，记得带上胳膊。”",
    "goto": "a2_04"
   },
   {
    "text": "让他开十二个的那张",
    "effects": [
     "flag registered_mages",
     "flag a2x_oto_deal",
     "gold +6"
    ],
    "result": "你实付六个，收据上写的是十二个，等银团报销下来，公司还能净落六个。奥托把两份钱分开装进了两个口袋，说：“合作愉快，每月初七，兵站镇，别忘了。”埃塔拿着那张收据，看了很久。",
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
    "result": "握过枪的手他认得出来，话也就多了：“议会上礼拜又动了拳头，砸坏了两把椅子，法案还是没过。老达利昂办事一板一眼，一仗都不肯打，可我就要这条线，有了它一天能运两个团哪。到那时候，军需处的账总得有自己人看着吧？”说完他朝你挤了挤眼，意思是你也算一个。"
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
   "blurb": "贩子的药论瓶卖，可以讲价，工具车的铁论斤两卖，不讲价。",
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
   "车队在一片卵石河滩上扎了营，工程车顶上支起了三脚架，棚车门口晾着测绳。从这一趟起，埃塔带着她的铁箱随队走，她自己就坐在箱子上。",
   "银团雇来修测量仪的是个侏儒，叫蒂尔妲·双扳，她两天就把仪器修好了，第三天开始拆别的东西。至于那个抱箱子的矮人，天一黑就爬上车顶，谁也不理。",
   {
    "speaker": "别摇",
    "text": "你们这儿的空气比城里的还淡。昨天夜里那一口是什么味儿啊，煤烟吧？记上半笔，就算我替你们尝过了。"
   },
   {
    "if": "race == 'lizardfolk'",
    "text": "你管她叫勿摇，一叫就是三年。她到现在也没纠正过你，只是在罐子盖的内侧又划了一道。"
   },
   "{?world.tears <= 3:她的罐子挂在车辕上，那点光得拿手拢着才看得见。|她的罐子挂在车辕上，光比三年前暗了一档，好在夜里还够照亮一页账。}",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "听说轨头上那些筑路工，一多半是林墙来的。我有个表侄就在那儿扛枕木，上回见他的时候，他才到我腰这么高。"
   },
   {
    "if": "flag.a2x_runner_saved",
    "text": "那个没登记的孩子在工程车里睡了半夜，天亮前就走了。临走他留下一句话，说罐子都是往西去的，进了卡斯托纳斯的西门，去找旧锻炉后头那扇新铁皮门。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "精算表上没有你这一行，我给你划了一行。可保费那一栏还空着，全城的保险行，没有一家敢填。"
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
      "text": "1699 年，我看见它来。1810 年，我看见它碎。你多大了，年轻人？……那你是一回也没赶上啊。"
     },
     "{?is.dwarf:他照样管你叫年轻人，不过倒是把目镜的盖子拧开了，朝你偏了偏头。|他不让你碰镜子，就连三脚架的影子都不许你踩。}"
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
    "result": "“往里（再往里（过了过了，回来半指））好，就是这颗。”等你满手机油地爬出来，她已经在给车顶的望远镜画新支架了，图上还留了个检修口，正好是你这么大。"
   },
   {
    "text": "问娜尔雯今年数到几声了",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     "她把本子翻到那一页给你看，上头画着九道竖线，每道底下记着一个日期。",
     {
      "speaker": "娜尔雯",
      "text": "今年是九声，1820 年是十一声。我可没说它在变少。上回有人替它下结论，还是 1666 年的事，那位第二天就走了。"
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
     "信是他父亲写来的，一共才四行，说今年巡回队没来，梨收了五成，麦子只有三成。最后一行是问他的，问他头发白了没有。",
     {
      "speaker": "吉列姆",
      "text": "不施术，就是三成。理论上呢，地是在慢慢缓过来的。可实际上，我爹今年都六十九了。"
     }
    ]
   },
   {
    "text": "扎营过夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "夜里的哨是大家轮着站的。河对岸安卡迪亚的巡逻队一夜走了四趟，每趟都提着马灯朝这边把车数一遍，数目回回都对，他们回回都像是有点失望。"
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
   "秤就摆在棚车的折叠桌上，说是秤，其实只有一根黄铜梁和一只玻璃罩，罩里悬着一根头发丝那么细的针。它没有砝码，也没有秤盘，只有一个朝外的铜口。",
   {
    "speaker": "蒂尔妲",
    "text": "拿颜色验晶体，那是我奶奶那辈人的办法（她倒没错，可她只说得出一句“挺蓝”）。我这个量的是口子开了多大（倒过来接就是炉子，不过那是另一张图，你别管）。来，看着啊。"
   },
   "她先把一块用空了的晶体凑到铜口上，针一动不动，再换上一发黑弹，针一下子往左甩到了底，颤了十来下才停住。她在本子上记了一行，左，满格，回零四十秒。",
   {
    "if": "is.god",
    "text": "她顺手把铜口对准了你，针一下打到了头，罩里“叮”的一声，游丝断了。一刻钟以后你收到一张账单，分了七项，最后一项是“精神损失（仪器的）”，合计四十金冠。"
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
      "text": "（意外。）先问我的人，这是头一个。（同意。）量吧。"
     },
     "针往左走，停在了七格上，没有回零，蒂尔妲等了两分钟，只好把“回零”那一栏划掉，改成了“不回”。黑弹叫针往哪边摆，礼拜三也叫针往哪边摆。"
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
     "针往左走到七格，停住不回了。礼拜三把手里的箱子放了下来。",
     {
      "speaker": "礼拜三",
      "text": "（平静。）你量了我。（陈述。）你没有先问我。这件事我记下了，埃塔怎么记账，我就怎么记。"
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
    "result": "针往左走了三格，颤个不停，蒂尔妲凑到跟前去看：“这是在人身上待过的（三年？四年？），到现在还没吃饱呢，得记上一笔。”"
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
    "result": "针往左走到七格，不回，你把手拿开了，它还停在那儿。蒂尔妲看看针，又看看你，头一回接不上话了。"
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
   "往下游走了半里地，只见一辆篷车停在卵石坡上，车辕上挂着马灯。三个戴宽檐帽的人围着一个孩子，那孩子也就十四五岁，手腕上已经扣上了一只镣，另一只还开着。",
   "这几个宽檐帽腰上各挂着一串铁片，铁片上没打孔，一走路就哗哗响。领头的那个抬头看见了你们，先数了数人头，再看谁身上带着法器。",
   {
    "speaker": "收血的",
    "text": "这是野生的，没登记过，一品脱能卖到登记价的三倍。{?party.guilhem:你们队里那位戴眼镜的要是肯卖，我出双份。|你们队里要是有会念咒的，我出双份。}都是买卖嘛。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）{?partysize >= 4:七|}{?partysize == 3:六|}{?partysize <= 2:四|}个人，{?partysize <= 2:一|两}匹马，一副镣。镣归我。"
   },
   {
    "if": "is.god",
    "text": "那孩子头一个看见了你，整个人直往车轮后头缩。收血的顺着他的眼神看过来，价钱报到一半，硬是咽了回去。"
   }
  ],
  "choices": [
   {
    "text": "拔家伙，把孩子抢回来",
    "if": "partysize >= 4",
    "combat": {
     "title": "河滩上的灯",
     "intro": "戴宽檐帽的把那串铁片往腰里一塞，抽出了一副冷铁镣铐。",
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
       "desc": "安卡迪亚的巡逻队就在河对岸，这帮人最怕的就是兵",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "你吹了三短一长。河对岸有人应了一声，马灯朝这边转了过来，收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音，河对岸没人理你，这边的人倒都给逗笑了。"
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
        "text": "篷车顺着卵石坡往下溜，把站在车后头的人一路带进了河里，铁镣哗啦啦响了一路。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "绳子是浸过油的，一刀砍下去，只砍起了一层毛。"
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
     "intro": "戴宽檐帽的把那串铁片往腰里一塞，抽出了一副冷铁镣铐。",
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
       "desc": "安卡迪亚的巡逻队就在河对岸，这帮人最怕的就是兵",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "你吹了三短一长。河对岸有人应了一声，马灯朝这边转了过来，收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音，河对岸没人理你，这边的人倒都给逗笑了。"
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
        "text": "篷车顺着卵石坡往下溜，把站在车后头的人一路带进了河里，铁镣哗啦啦响了一路。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "绳子是浸过油的，一刀砍下去，只砍起了一层毛。"
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
     "intro": "戴宽檐帽的把那串铁片往腰里一塞，抽出了一副冷铁镣铐。",
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
       "desc": "安卡迪亚的巡逻队就在河对岸，这帮人最怕的就是兵",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "你吹了三短一长。河对岸有人应了一声，马灯朝这边转了过来，收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音，河对岸没人理你，这边的人倒都给逗笑了。"
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
        "text": "篷车顺着卵石坡往下溜，把站在车后头的人一路带进了河里，铁镣哗啦啦响了一路。",
        "dmgAll": "2d6",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "绳子是浸过油的，一刀砍下去，只砍起了一层毛。"
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
    "result": "收血的要了六十金冠，给你开了收据，品名那一栏写的是“辅助晶源，活，一”。埃塔把收据要了过去，夹在账本的最后一页，那一页她是从来不记账的。",
    "goto": "a2_04"
   },
   {
    "text": "掉头回营地",
    "effects": [
     "approval bura -1",
     "approval guilhem -1"
    ],
    "result": "篷车是天亮前走的。河滩上落下一只开着的镣，谁也没去捡。",
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
   "箱子里装的是玻璃底片，一格一张，底下都垫着羊毛。德鲁兹纳抽出一张来举到灯前，那上头是一片星，可星和星当中有指甲盖大的一块地方，是发灰的。",
   {
    "speaker": "德鲁兹纳",
    "text": "1699 年，它在这儿。1810 年，它就是在这儿碎的。打那以后，我每年泪落月都拍这一块天，一共拍了十三张，十三张全是灰的。"
   },
   {
    "if": "flag.wastage_ref",
    "text": "你跟他提起陆军部那卷“损耗”，说是 1811 年立的卷，立卷人是个矮人的名字。他的胡子动了一下。"
   },
   {
    "if": "flag.wastage_ref",
    "speaker": "德鲁兹纳",
    "text": "1811 年，我给十一个国家写过信，只回了两封，写的都是“来函收悉”。原来剩下的都归到那儿去了。这卷名起得倒不坏。"
   },
   {
    "if": "!flag.wastage_ref",
    "speaker": "德鲁兹纳",
    "text": "1811 年，我给十一个国家写过信，只回了两封，写的都是“来函收悉”。听说衙门里归这种信的卷，就叫“损耗”。"
   },
   {
    "speaker": "蒂尔妲",
    "text": "他不许我说“彗星没了”（他非要我说“观测不支持回归”（其实是一个意思（他也知道是一个意思）））。"
   },
   "他把底片放回格子里，又盖上了羊毛。",
   {
    "speaker": "德鲁兹纳",
    "text": "七家报馆，家家都说不登星星。可银团的聘书上写着，车上拍的东西归银团，怎么处置由测量方的队长定，这么算下来，你就是第八家了。我得活到它印出来的那一天啊。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆把那张底片要过去看了很久，末了只说出半句“下一回是 1921 年”，后头那三个字，他到底没有补上。"
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
     "text": "你把十三张叠起来对着灯看，那块灰一年比一年淡，到了 1820 年，已经淡得跟底色分不出来了。要是云，不会十三年都待在同一格里，要是尘，也不会散得这么匀，你把这两句话写进了笔记。",
     "effects": [
      "flag plates_understood"
     ]
    },
    "fail": {
     "text": "你看到第四张，就分不清哪块是灰、哪块是指纹了，蒂尔妲只好替你讲了一遍，括号足足套了四层，可你记住的只有最里头的那一层：“反正没了。”"
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
    "result": "装底片的箱子是德鲁兹纳亲手钉的，足足钉了四十分钟。史家酬金是六十金冠，他一个子儿都没要，只交代了一句：“排版的时候，把年份排在前头。”",
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
    "result": "银团的回电来得很快，出价四百金冠，要的是“全部底片及其复制权，妥为保管”。箱子抬走的时候，德鲁兹纳待在车顶上没下来，往后他有什么话都托蒂尔妲转达，转过来的每一句都比原话长。",
    "goto": "a2_06"
   },
   {
    "text": "请他另晒一套，锁进埃塔的铁箱",
    "effects": [
     "flag box_plates",
     "item +druznar_plates"
    ],
    "result": "埃塔给他开了收条，写的是玻璃底片抄件十三张，寄存，无期限。德鲁兹纳把收条叠好，放进了贴身的口袋，说：“比这更糟的出版社，我也见过。”",
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
   "到兵站镇这天正是初七，登记过的法师每个月都得来这儿一趟。屋子四面贴着白瓷砖，里头摆了十二张铁床，床头都钉着号牌。规矩是一人抽一品脱，收据一式三联，本人留一联，军需处留一联，至于第三联撕下来以后去了哪儿，管床的说这不归他问。",
   "血在这儿叫“蓝血”，到了账上，那一栏的名目却是“辅助晶源”。三号床上的人把袖子卷到了肩膀，胳膊弯里的针眼排成了一行，他正在看一份上礼拜的《传声报》，看得很慢。",
   {
    "if": "flag.registered_mages && party.guilhem",
    "text": "这个月的单子上有吉列姆的名字，连一个字母都没拼错。"
   },
   {
    "if": "flag.registered_mages && party.guilhem",
    "speaker": "吉列姆",
    "text": "一品脱。附表第三项写着呢，三个礼拜就补得回来。可附表没写一年里有几个初七啊。"
   },
   {
    "if": "flag.registered_mages && !party.guilhem",
    "text": "这个月的单子上有公司的名字，后面还跟着一个床号。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "十二张床，一个钟头轮一回，从早上八点到下午四点。这是今天的数。你要的是哪一天的呢？我可以坐在这儿数上一个月。"
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
     "text": "收进来的品脱数和交上去的品脱数，每个月都差着一成，差的那一成底下签的是同一个缩写，日子也都是初八。你把那本账夹在测量图里带了出来。",
     "effects": [
      "flag ancardia_ledger",
      "item +ancardia_ledger"
     ]
    },
    "fail": {
     "text": "军需官客客气气地请你喝茶，一喝就是一个钟头，喝了四杯，账你一页也没翻着，茶钱倒记在了你头上。",
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
     "text": "后屋里正在装箱，用的是陶罐，拿蜡封了口，十二罐装一箱。那木箱的尺寸你在图纸上见过，横着码上六只，正好是一节棚车的宽，而那种棚车眼下还没造出来。",
     "effects": [
      "flag a2x_saw_bottling",
      "xp 60"
     ]
    },
    "fail": {
     "text": "门后头站着一个杂役，他等你已经等了有一会儿了：“参观费二十金冠，带讲解的四十。”你付了不带讲解的那一份。",
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
     "text": "他的脉搏有一百一，指甲也发白了，照这个抽法，他还能撑三回，到第四回就站不起来了。你把这话说给管床的听，他想了想，在号牌背面写了个“缓”字。",
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
     "text": "你说他还行。谁知他一站起来就栽倒了，连你带一只接血的罐子都给带倒了，罐子记在了你的账上。",
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
    "result": "{?party.guilhem:袖子是吉列姆自己卷的，卷得整整齐齐，|袖子是你自己卷的，}扎进去的针很粗。收据的第三联撕了下来，塞进了一只写着“转运”的信封。"
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
    "result": "管床的把四十个金冠数了两遍，分成了两摞。收据上的品脱数是真的，床号也是真的，至于躺在那张床上替你们抽血的是谁，你没见着。"
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
   "银团要的例行勘测报告是一个月一份，写的是路基、坡度、桥位和沿线治安。照规矩，报告要抄送全体股东，埃塔数过，一共十九份。",
   "工程车里只有一张折叠桌，蒂尔妲占了一半，正在画望远镜的新支架。墨水是在兵站镇买的，三个铜子一瓶，写出来的字发灰。",
   {
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "text": "初七已经过了，单子上那一品脱没人去缴。奥托托人捎来一句话，说他这个人记性好。"
   },
   "你写到了“沿线治安”这一栏。兵站镇的事放进去也好，不放进去也好，这一栏都填得满。",
   {
    "speaker": "埃塔",
    "text": "十九份，抄一份四个铜子。那件事你提也好，不提也好，抄写费都是一样的。"
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
    "result": "埃塔照着抄了十九份，一个字也没改。报告寄出去那天是这个月的十四号，她在存根上记下了日子。",
    "goto": "a2_07"
   },
   {
    "text": "只写路基、坡度和桥",
    "result": "报告写得干干净净。十九位股东读到的东坎诺，是一片坡度不超过千分之八的好地。",
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
   "全东坎诺的大城里，只有卡斯托纳斯还没通煤气。天刚擦黑，城墙上就有人举着长杆一盏一盏地点油灯，可城里那八座塔的窗子，亮得比灯还早。",
   "进了西门往下城走，石阶贴着瀑布一路往下拐，溅上来的水带着一股阴沟味，原来上城的沟都是往这儿排的。石阶底下嵌着一块铜牌，标的是科琳倒下的地方，铜牌让人摸得发亮，四个角上各压着一枚铜子。",
   {
    "if": "party.bura",
    "text": "布拉在铜牌跟前站了一会儿，没有伸手去摸，她从兜里找出一枚铜子，可四个角都让人占了，她就把它放在了正中间。"
   },
   "这儿的海关就是一张石桌，条例刻在桌沿上，只有一句：“奇械不得入境。”{?party.middlesday:关员看着礼拜三，礼拜三也看着关员。|关员拿指节敲了敲蒂尔妲的仪器箱，箱子里有什么东西嗡了一声。}",
   {
    "if": "is.mechanim",
    "text": "轮到你了，关员不问姓名，直接开了一张税单，上头写着“自动机，一台，二手”，要缴十五个金冠。埃塔跟他要了收据。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "关员翻到了你那张卖契，在“经手人”一栏里找到了你的名字，于是十四号的过境税就记在了你头上，一共十五个金冠。埃塔跟他要了收据。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "这座城里，连一间我们的礼拜堂都没有。教廷来问过三回，三回的回信我都见过，一封比一封短。"
   },
   {
    "if": "is.god",
    "text": "铜牌旁边候着三个科琳教的胫甲，都披着红披风，纸笔是自己带来的。"
   },
   {
    "if": "is.god",
    "speaker": "胫甲",
    "text": "{god}阁下，教区有一句话要问，还请您书面答复：您与科琳是什么关系？"
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
     "text": "关员在“行李”那一栏里落了笔，{?party.middlesday:写的是“铁箱一只，自行”。礼拜三一路都没出声，过了门洞才问你，“自行”算不算名字。|写的是“测绘器具一箱，不通电”。蒂尔妲想纠正他，你赶紧踩了她一脚。}",
     "goto": "a2_08"
    },
    "fail": {
     "text": [
      "{?party.middlesday:关员叫来四个脚夫，把礼拜三抬进了海关的地窖。第二天一早它自己走了上来，胸口多了一张封条。|仪器箱给扣下了，赎金要三十金冠，收据上写的却是“保管费”。}",
      {
       "if": "party.middlesday",
       "speaker": "礼拜三",
       "text": "（陈述。）底下还有四十一台，码成了垛。（愤怒。）我数了两遍。"
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
    "result": "表格一式三份，要盖两回印。关员头一回碰上有人把他的条例背得比他还熟，只好在“奇械”后面添了三个小字：“过境中”。",
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
    "result": "他问你打哪儿来，你答了，他咧开嘴笑了，又压低嗓子告诉你，城墙上的佣兵这半年领的不是钱，是罐子，每旬领一回，就在旧锻炉后头那扇新铁皮门那儿。"
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
    "result": "胫甲把这三个字誊了两份，一份带走，一份压在了铜牌的角上。{?party.bura:布拉朝那张纸看了一眼，把头盔戴正了。|到了第二天，铜牌上压着的铜子多了一圈。}"
   },
   {
    "text": "写：不认识",
    "tag": "神",
    "if": "is.god && !flag.a2x_corin_answered",
    "once": true,
    "effects": [
     "flag a2x_corin_answered"
    ],
    "result": "他们照原样记了下来，一个字也没评。走出去十来步，三个人里头有一个回了两次头。"
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
    "result": "胫甲的笔停住了，他把纸翻过来，在背面抄了一条教义的编号，那一条说的是在上者失道，在下者得起。{?party.bura:布拉的铰链响了一声，可她什么也没说。|门洞里的脚夫都不扛活了，站在那儿看着你。}"
   }
  ]
 },
 "a2_08": {
  "id": "a2_08",
  "title": "站着见客",
  "loc": "卡斯托纳斯 · 女导师长的塔",
  "text": [
   "女导师长住的是第三座塔，楼梯有一百九十级，连个扶手都没有。掌灯的学徒走在前头，才十二三岁，灯倒举得很稳。",
   "雅米娜·格拉科赛尔今年九十三岁了，她站在一张长桌后面，桌边一把椅子也没配。桌上摊着你们的线路图，不知是谁用红墨水在城里添了八个圈。",
   {
    "speaker": "雅米娜",
    "text": "八个席位，如今空着六个。你们的铁路，要从第三个和第四个中间穿过去。"
   },
   {
    "if": "party.guilhem",
    "text": "她转过去看着吉列姆，管他叫年轻人，问他教过几个学生。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "一个也没有，共和国不让教。条例第四十一款写着呢，公务法师不得私相授受。"
   },
   {
    "if": "party.guilhem",
    "text": "她没接话，只拿指甲在图上那两个圈的中间点了一下。"
   },
   {
    "if": "party.narwen",
    "text": "娜尔雯和她对了对年份，雅米娜是 1744 年入列的，而那一年，娜尔雯已经在地窖里数了七十八年。两个人谁也没有再往下算。"
   },
   {
    "if": "is.god",
    "text": "她把你打量了差不多一分钟，什么也没问，拉过一张纸来记了一页，记完就压在了砚台底下。"
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
     "text": "你先退了半步，这才开口：“女导师长阁下，第三席。”她的眉毛动了一下。“居然还有人教这个。”",
     "effects": [
      "rep wand +1"
     ]
    },
    "fail": {
     "text": "你称了她一声“陛下”。她当场纠正你，用的是 1744 年的老规矩，一共七条，她一条一条往下背，背到第五条的时候，掌灯的学徒憋笑憋得灯都跟着抖。"
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
     "text": "那只手就没离开过桌沿，她每说完一句，都要等气喘匀了才说下一句，窗外的雨已经下了一个礼拜了。屋里不摆椅子是她自己定的规矩，因为一摆上，她就非坐不可了。",
     "effects": [
      "flag yamina_tired"
     ]
    },
    "fail": {
     "text": "她的手稳得很。你看了半天，只看出墨水是红的。"
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
      "text": "八个。我最小，才十四岁，站在门边上。像你这个岁数的客人，如今可少了，年轻人。想坐就随你，只是这屋里没有椅子。"
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
   "书房在塔腰上，只有一扇窗、一盏油灯，账本就摊开在那儿，也没人拦着你看。左边一栏记的是 1810 年以来每道咒的产出，记到了小数点后两位，右边一栏记的是东坎诺各军每年开出去的黑弹数。",
   "左边的数一年比一年小，右边的数一年比一年大。蒂尔妲把秤的读数抄成了一条纸带，摆在两栏当中，这一来就看出来了，三行数字拐弯的地方都对得上。",
   {
    "speaker": "蒂尔妲",
    "text": "这就叫复式账（记账的都懂（我可不是记账的，我是说道理一样））。这边划走一笔，那边就必定记上一笔。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "这是损耗。柴烧了就是烧了，哪会跑进别人家的柴房里去呢？我管了二十年的催生术，账一向是这么记的。"
   },
   {
    "if": "!party.guilhem",
    "speaker": "埃塔",
    "text": "这账不平。不平的账只有两种，要么是有人拿了，要么是还有另一本。到底是哪一种，光凭这两栏看不出来。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "你们两位说的都是这一头。我想问的是那一头，是谁在收呢？"
   },
   {
    "if": "!party.narwen",
    "speaker": "别摇",
    "text": "你们账上少掉的那些，我老家的潮表上倒是有一栏，年年都多出来。我可没说是同一笔啊，我只说有这么一栏。"
   },
   "雅米娜一直站在门口，从头听到了尾，一个人也没有纠正。"
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
     "text": "对到 1816 年，你总算找着了规律，右栏每多出一万发，隔上一年，左栏就掉下去一个差不多的数。误差是不小，可方向十三年都没变过，你把那个数抄在了手背上。",
     "effects": [
      "flag yamina_ledger_read"
     ]
    },
    "fail": {
     "text": "数字从第六年起就开始打架了，你最后对出来的结论是东坎诺的黑弹能治咒，蒂尔妲笑得把纸带都扯断了。"
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
      "text": "抄吧。抄错一个数，我会知道的。"
     },
     "你一直抄到了后半夜。她叫学徒来添了两回灯油，却没叫他添一把椅子。"
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
     "text": "一共四页，两栏，你抄得比埃塔还快。等灯油添回来的时候，纸已经在你袖子里了。",
     "effects": [
      "flag ledger_copied",
      "item +yamina_copy"
     ],
     "goto": "a2_10"
    },
    "fail": {
     "text": "你抄到第三页的时候，灯亮了一点，原来她端着油壶就站在你身后，看了看你的字，一句话也没说，把壶放下就走了。你把第四页也抄完了。",
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
    "result": "雅米娜看着你把账本推回去，什么也没说。你下楼的时候，外头的雨又下大了。",
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
   "雨下到半夜也没停。白天那本账的右下角有一行小字，你当时没看懂，写的是“佣兵饷，以罐计，锻炉后门”。{?flag.a2x_porter_tip:城门口那个脚夫跟你提过的，就是这扇门。|}{?flag.a2x_runner_saved:河滩上那个孩子说的，也是这扇门。|}",
   "旧巨龙锻炉早在绿潮那年就毁了，龙头形的炉口塌了半边，偏偏后门的铁皮是新换的，推门进去是一道往下走的石阶，迎面一股药水味。",
   "头一层堆的全是海关没收来的自动机，一垛一垛码着，胳膊跟胳膊捆在一块儿，垛顶上落了一层灰。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（愤怒。）那一颗我认识，它是七号线的，用的是 1811 年三月的料。（请求。）一会儿从它旁边走过去，请别踩着它的手。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "垛脚那一台的肩膀上有你认得的铆印，那是七号线的锤子打的，一秒钟打一颗，其中有一颗还是你当年打歪的。"
   },
   {
    "if": "is.mechanim",
    "text": "垛里有一台，工位号只比你小一号，它的眼睛是关着的。"
   },
   "再往下一层有灯光，还听得见有人在报数，可楼梯口拦着一道铁栅，上头的锁是新的。"
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
    "result": "第二垛后面那堵墙原来是空的，礼拜三走在前头，脚步放得很轻，轻得一点不像一只铁箱子在走路。",
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
     "text": "第二垛后面的墙敲上去是空的。当年巴尔加尔修的那些暗道，到今天也没人能画全，不过这一段的门轴，有人新上过油。",
     "effects": [
      "flag a2x_cellar_quiet"
     ],
     "goto": "a2_10b"
    },
    "fail": {
     "text": "你摸到的那扇“暗门”，其实是一台自动机的背板，这一摸，垛塌了半边，一条铁胳膊结结实实砸在你肩膀上，楼下的报数声也跟着停了。",
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
     "text": "栅条之间的宽窄是照着成年人的肩膀定的，你们只好侧着身子挤，底下每报一个数，你们就挤过去一个，等最后一个人挤过来，底下刚好数到四十一。",
     "effects": [
      "flag a2x_cellar_quiet"
     ],
     "goto": "a2_10b"
    },
    "fail": {
     "text": "不知是谁的皮带扣挂在了栅条上，铁碰铁，当的一声，虽说只响了这一声，楼下已经有人在问了：“饷还没点完呢，谁在上头？”",
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
     "text": "锁还没撬开，合页倒先断了，你干脆把整扇铁栅端下来，靠在了墙上，楼下的人还在报数，报得专心得很。",
     "goto": "a2_10b"
    },
    "fail": {
     "text": "铁栅倒下去那一声响，怕是连上城都听得见，楼下先有人喊了一句“饷还没点完”，紧跟着就是枪上膛的声音。",
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
   "第二层的墙上贴着白瓷砖，跟兵站镇那边一个样，只是床小了一号，躺在床上的都是学徒，最大的也不过十六岁。罐子装满了，就拿蜡封好推到门口，门口排着城墙上下来的佣兵，一人领两罐，领完往怀里一揣，上楼换岗去了。",
   "管事的系着白围裙，耳朵上别着一支铅笔，人人都叫他“大夫”，这会儿他正往账上记数，每记一笔，嘴里还要念一遍。",
   "第三张床上的女孩才十二岁，叫伊萨，等着受礼的那个孩子就是她。外头的雨下大了，偏偏在这时候，她的溺亡来了，两眼往上翻，嘴角往外淌水，清清的，一股接着一股。",
   {
    "speaker": "大夫",
    "text": "别碰她！这个病谁也替不了，得她自己熬，熬过来了就是洪裔，熬不过来嘛，第三床就空出来了。{?flag.a2x_cellar_quiet:……哎，你们是哪个连的？|你们下来的动静可不小啊，饷不归你们领。}"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "她肺里的水还在往上涨。把人侧过来，垫高，再按住，就能多撑一阵子。我只要一分钟，这一分钟里，能不能别让人拿刀对着我？"
   },
   {
    "if": "is.god",
    "text": "这间屋里谁也伤不了你。可第三张床上那个孩子，撑不到你把他们一个一个放倒的时候。"
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
     "intro": "大夫把铅笔别回耳朵上，从围裙兜里摸出了一把手术刀，门口领饷的佣兵也都把罐子放下了。",
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
        "text": "她咳出了第一口水，接着又是一口，眼珠也转回来了。大夫把手术刀放下了，咳得出水的洪裔，他可不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又往下沉了半寸，水从鼻子里直往外冒。你正弯着腰，背后不知是谁趁机给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "把那一架子玻璃管和陶罐朝他们那边踹倒",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸了下去，蓝的溅了一墙。领饷的佣兵先心疼得叫了一声，然后才想起来喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子原来是拿铆钉铆死在地上的，它纹丝没动，你的脚倒先响了一声。",
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
     "intro": "大夫把铅笔别回耳朵上，从围裙兜里摸出了一把手术刀，门口领饷的佣兵也都把罐子放下了。",
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
        "text": "她咳出了第一口水，接着又是一口，眼珠也转回来了。大夫把手术刀放下了，咳得出水的洪裔，他可不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又往下沉了半寸，水从鼻子里直往外冒。你正弯着腰，背后不知是谁趁机给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "把那一架子玻璃管和陶罐朝他们那边踹倒",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸了下去，蓝的溅了一墙。领饷的佣兵先心疼得叫了一声，然后才想起来喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子原来是拿铆钉铆死在地上的，它纹丝没动，你的脚倒先响了一声。",
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
     "intro": "大夫把铅笔别回耳朵上，从围裙兜里摸出了一把手术刀，门口领饷的佣兵也都把罐子放下了。",
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
        "text": "她咳出了第一口水，接着又是一口，眼珠也转回来了。大夫把手术刀放下了，咳得出水的洪裔，他可不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又往下沉了半寸，水从鼻子里直往外冒。你正弯着腰，背后不知是谁趁机给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "把那一架子玻璃管和陶罐朝他们那边踹倒",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸了下去，蓝的溅了一墙。领饷的佣兵先心疼得叫了一声，然后才想起来喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子原来是拿铆钉铆死在地上的，它纹丝没动，你的脚倒先响了一声。",
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
    "result": "你把手放在她胸口，往上一提，水就整个出来了，清清的一捧，托在手里还是温的。大夫的铅笔从耳朵上掉了下来，佣兵们纷纷放下罐子，有两个当场跪下了，剩下的都在看那两个。",
    "goto": "a2_10d"
   },
   {
    "text": "退出去，上塔叫醒雅米娜",
    "effects": [
     "flag yamina_spent"
    ],
    "result": "一百九十级楼梯，你是一口气跑上去的。谁知她早就醒了，披着一件旧袍子站在楼梯口，也不问出了什么事，只问了一句：“第几床？”",
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
    "text": "伊萨睁开了眼，一声也没咳，那场溺亡她没有熬，是你替她拿走的。天还没亮，八座塔的钟就一齐敲响了，魔法领地宣布，{god}从此是本城的守护者，到了第三天，安卡迪亚发了动员令。"
   },
   {
    "if": "flag.isa_owes_company && !flag.demesne_patron",
    "text": "伊萨是自己坐起来的，吐了有半盆水，开口头一句话就问是谁按的她，{?party.narwen:娜尔雯说，是公司。|你说，是公司。}她点了点头，把这两个字又念了一遍，那口气跟记账似的。"
   },
   {
    "if": "flag.yamina_spent && !flag.isa_owes_company",
    "text": "雅米娜是自己走下来的，一百九十级楼梯，外加地窖这两层。她把手按在女孩胸口，一按就是一刻钟，水从伊萨嘴里一点一点退了回去，按完她四下看了看，在第四张床的床沿上坐下了，你还是头一回见她坐着。"
   },
   {
    "if": "!flag.a2x_cellar_lost",
    "text": "大夫的账本到了你手里，一共四十一页，一页记一个学徒，抽了多少品脱，哪天抽的，领罐子的佣兵是哪个连的，都写得明明白白。每一页的页脚都有大夫的签名，字很小，可一回也没漏过。"
   },
   {
    "if": "flag.demesne_patron && party.narwen",
    "speaker": "娜尔雯",
    "text": "上回有人当场把水从肺里拿出来，是……没有上回，我翻过了。（她把本子合上。）这一笔该记在哪一栏呢？我不知道。"
   },
   {
    "if": "flag.a2x_cellar_lost && party.middlesday",
    "text": "你们是让佣兵架着胳膊撵出门的，账本没能带出来。"
   },
   {
    "if": "flag.a2x_cellar_lost && party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）一共四十一页，我全看过了，都在我这里。（礼貌。）埃塔那里有纸吗？"
   },
   {
    "if": "flag.a2x_cellar_lost && !party.middlesday",
    "text": "你们是让佣兵架出门的，好在账本趁乱顺了出来，封皮上给踩了半个靴印，四十一页倒是一页没少。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "城墙上那些人领的原来是这个啊。（铰链响了一声。）欠条我领过，发了霉的面我也领过，就是没领过小孩的血，这一笔，我替他们记着。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "你瞧，拿学徒的血付佣兵的饷，佣兵守的又是教学徒的塔，这在条例上叫“自筹经费”。这一栏我也填过，不过我填的是卖梨。"
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
   "blurb": "这家铺子赊账的本子比货架还厚。要是拿现钱买，掌柜的会多给你一截绷带。",
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
   "从矮人之路接出来的头一段铁路铺了十一里，铺到这儿就断了，枕木码在路基边上，镐都插在枕木缝里，一把挨着一把，插得整整齐齐。",
   "工棚里住的是林墙兽人、半兽人和地精，有一节棚车改成了科琳教的小堂，他们的工钱已经欠了三个礼拜。坡上扎着安卡迪亚国民卫队的帐篷，说是照“护路协定”开来的，帐篷边上还蹲着一台蒸汽牵引机，锅炉一直没熄火。",
   "眼下三拨人各站一处，银团的监工守着账房的门，卫队的上尉在看怀表，工棚这边出来说话的是个兽人女人，缺了半只耳朵，手里没拿家伙。",
   {
    "speaker": "缺耳朵的女人",
    "text": "三个礼拜了。镐我们是放下了，可没扔。你呢，你是银团的人，还是光来看看的？"
   },
   {
    "if": "party.bura",
    "text": "布拉的表侄就在人堆里，如今比她还高出半个头，两个人对看了一眼，谁也没先开口。"
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
     "text": "账上有一笔“右翼勘测费”，是三个礼拜前支出去的，数目不多不少，正好是全棚的工钱，可右翼哪有什么勘测队，右翼就是一面崖。",
     "effects": [
      "flag wages_found"
     ]
    },
    "fail": {
     "text": "监工把账本抱在怀里，只肯让你看封面，你跟他磨了一阵，他索性写了一封投诉信，当着你的面封了口。",
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
    "result": "小堂里没有神像，只挂着一面红布，墙上钉着一把旧镐。你念你的，他们念他们的，念到末一句倒是齐的，出来的时候，有人给你让了路。"
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
     "text": "你一条一条摆给他们听，{?flag.wages_found:钱在哪儿，是谁支走的，|}工钱几时发，卫队退到哪条线。缺耳朵的女人听完，朝身后说了一句林墙话，镐还是没人去动，可人都往后退了三步，把账房的门让了出来。",
     "effects": [
      "flag strike_settled",
      "rep union +2",
      "approval bura +1"
     ],
     "goto": "a2_12b"
    },
    "fail": {
     "text": "你刚说到“请大家体谅银团的难处”，后排就有人笑出了声，上尉把怀表揣回了兜里：“谈完了？那今晚就照协定办。”",
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
     "text": "第九条你念了两遍，第二遍是念给上尉听的。监工翻了翻自己手里那份合同，第九条果然还在，工钱当晚就点清了，定在第二天一早发。",
     "effects": [
      "flag strike_settled",
      "rep union +2",
      "approval bura +1"
     ],
     "goto": "a2_12b"
    },
    "fail": {
     "text": "监工说第九条他认，可银行的钱没到，叫他拿什么认，上尉啪地合上怀表：“条文你们慢慢对，今晚照协定办。”",
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
    "result": "埃塔一边数钱，嘴里一边报数，报的全是应收，钱发到最后一个人手上的时候，工棚里有人把镐从枕木缝里拔了出来。",
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
    "result": "你把日期、数目和签字的人一样一样念了出来，监工的脸一下子白了，上尉合上怀表，说这一笔不归他管。工钱当晚就从监工的私箱里补了出来，定在第二天一早发。",
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
    "result": "卫队是半夜进的工棚，你在工程车里足足听了一个钟头。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12": {
  "id": "a2_12",
  "title": "机车库",
  "text": [
   "卫队嘴里的“照协定办”，原来是半夜两点动手，牵引机先动，拖着一节装沙袋的平板车朝工棚这边压过来，后头跟着两排兵，掷弹兵手腕上的火绳一点一点红着。",
   "工棚的人都退进了机车库，那是座还没盖完的砖棚，里头有两条检修沟，还停着一台待修的调车机。棚车小堂就停在库门口的岔线上，里头挤满了家眷，有孩子在哭，叫大人捂住了嘴。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链响了一声。）前头两排兵，十来条枪，外加一台铁家伙，后头是一车小孩。我站前头。"
   },
   {
    "if": "is.god",
    "text": "那台牵引机没长眼睛，认不出你是谁，当兵的倒认得出，可当兵的后头有军官，军官后头还有协定。"
   }
  ],
  "choices": [
   {
    "text": "守住库门",
    "if": "partysize >= 4",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞开了一扇库门，汽笛一拉到底，掷弹兵手腕上的火绳齐刷刷往上一抬。",
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
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去，牵引机一下子少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住，你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连底下的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀，库里的人都得挨烫，岔线上那节小堂也躲不掉",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库，对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了起来。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在了你手里，喷出来的那一股汽全浇在你一个人身上。",
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
     "intro": "牵引机撞开了一扇库门，汽笛一拉到底，掷弹兵手腕上的火绳齐刷刷往上一抬。",
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
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去，牵引机一下子少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住，你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连底下的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀，库里的人都得挨烫，岔线上那节小堂也躲不掉",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库，对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了起来。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在了你手里，喷出来的那一股汽全浇在你一个人身上。",
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
     "intro": "牵引机撞开了一扇库门，汽笛一拉到底。",
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
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去，牵引机一下子少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住，你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连底下的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀，库里的人都得挨烫，岔线上那节小堂也躲不掉",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库，对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了起来。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在了你手里，喷出来的那一股汽全浇在你一个人身上。",
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
     "text": "牵引机在你跟前三步远的地方刹住了，开车的是个当兵的，当兵的也不想轧人。上尉喊了两遍“继续”，第三遍还没喊出口，你身后又站出来四十个人。",
     "effects": [
      "flag strike_held",
      "rep union +2",
      "rep republic -1"
     ],
     "goto": "a2_12c"
    },
    "fail": {
     "text": "开车的没刹，你只好自己滚进了检修沟，肩膀先着的地，牵引机就从沟沿上轧了过去。",
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
    "result": "你们带出去三十来个人，一个也没少，回头再看，机车库的灯灭了一阵又亮了，亮起来的时候，门口已经换了人站岗。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12b": {
  "id": "a2_12b",
  "title": "钱箱",
  "text": [
   "工钱定在第二天一早发，钱箱当晚就锁在机车库里，上了两把锁，埃塔拿一把钥匙，缺耳朵的女人拿另一把。",
   "半夜两点，坡上那台牵引机动了，连灯都没点，开车的人穿的是便衣，脚上却是军靴。他们是冲着钱箱来的，工钱要是再丢一回，工棚就得再停一回工，这一来，“护路协定”又用得上了。",
   "棚车小堂就停在库门口的岔线上，守夜的家眷都睡在里头。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（警觉。）来了一台机器，人数我数不清，因为他们没点灯。（陈述。）那台机器里没有芯核，只有一张打孔卡，所以它不会停，我问过它了。"
   },
   {
    "if": "is.god",
    "text": "那台牵引机没长眼睛，认不出你是谁，穿便衣的那些人倒认得出，可他们领的是上尉另外发的一份饷。"
   }
  ],
  "choices": [
   {
    "text": "守住钱箱",
    "if": "partysize >= 4",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没点灯，从坡上直直地压了下来，跳下车的人穿的是便衣，可落地那一声，听得出是军靴。",
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
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去，牵引机一下子少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住，你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连底下的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀，库里的人都得挨烫，岔线上那节小堂也躲不掉",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库，对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了起来。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在了你手里，喷出来的那一股汽全浇在你一个人身上。",
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
     "intro": "牵引机没点灯，从坡上直直地压了下来，跳下车的人穿的是便衣，可落地那一声，听得出是军靴。",
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
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去，牵引机一下子少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住，你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连底下的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀，库里的人都得挨烫，岔线上那节小堂也躲不掉",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库，对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了起来。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在了你手里，喷出来的那一股汽全浇在你一个人身上。",
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
     "intro": "牵引机没点灯，从坡上直直地压了下来，跳下车的人穿的是便衣，可落地那一声，听得出是军靴。",
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
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去，牵引机一下子少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住，你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连底下的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "砸开调车机的泄压阀，库里的人都得挨烫，岔线上那节小堂也躲不掉",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库，对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下子高了起来。",
        "dmgAll": "3d6",
        "type": "fire",
        "selfDmg": "1d6",
        "effects": [
         "flag a2x_scalded"
        ]
       },
       "fail": {
        "text": "阀杆断在了你手里，喷出来的那一股汽全浇在你一个人身上。",
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
    "result": "他们拿了箱子就走，一枪也没放，第二天的工钱是埃塔从公司账上垫的，垫的时候她一个字也没说。",
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
    "text": "天亮的时候，卫队退回了坡上，那台牵引机歪在检修沟里，锅炉已经凉了。工棚的人没有欢呼，只是排着队去领镐，领完就坐在枕木上等工钱，到了中午，银团的电报来了，上头只有三个字：“款即汇。”"
   },
   {
    "if": "flag.strike_broken",
    "text": "天亮的时候，镐又回到了每个人手里，不过是卫队发的，发一把就记一个名字，棚车小堂那面红布叫人扯了下来，叠得整整齐齐，放在门口的台阶上。"
   },
   {
    "if": "flag.strike_settled",
    "text": "工钱是早上七点发的，缺耳朵的女人唱名，埃塔数钱，到了九点钟，铺轨的锤声响了起来，隔着山都听得见。坡上的帐篷倒没撤，上尉说协定上没写要撤。"
   },
   {
    "if": "flag.a2x_scalded",
    "text": "小堂那节车里烫伤了六个人，其中两个是孩子，{?party.narwen:娜尔雯给他们裹伤，裹了一上午。|你们把随队带的药膏全拿了出来。}没有人骂你，可也没有人跟你说话。"
   },
   {
    "if": "party.bura && flag.strike_broken",
    "speaker": "布拉",
    "text": "镐上还记名字呢。（铰链响了一声。）我们那时候记的是番号，发东西的人也说是为了我们好。"
   },
   {
    "if": "party.bura && !flag.strike_broken",
    "text": "布拉的表侄给她端来一碗麦糊，里头掺了肉皮，她吃完把碗还回去，说了一句林墙话，这是她今天说的唯一一句，表侄听了直笑，可没给你们翻。"
   },
   "你们在工程车里一觉睡到了中午。"
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
   "邮件是跟枕木一趟车运来的。银团每季都要寄一回最新的股东名册，埃塔照例从头对到尾，这回对到第十四页，她停住了。",
   {
    "speaker": "埃塔",
    "text": "“东坎诺辅助晶源信托”，新进来的股东，走的是代持账户，尾号四七一。1810 年把公司旧债买走的，就是这个账户。"
   },
   {
    "if": "flag.midreport_blood",
    "text": "她把你那份例行报告的存根拿过来，跟名册并排放在一起，报告是十四号寄出去的，入股的日子是二十三号。"
   },
   {
    "if": "flag.midreport_blood",
    "speaker": "埃塔",
    "text": "九天。信走到安本科斯特就得六天。这个人十三年没迟过一回款，可我不喜欢他。"
   },
   {
    "if": "!flag.midreport_blood",
    "text": "入股的日子比兵站镇那个初七晚了一个月，你那份报告里一个血字也没提，可见他是从银行那头听来的。"
   },
   {
    "if": "!flag.midreport_blood",
    "speaker": "埃塔",
    "text": "晚了一个月，照他的做派，这就算慢的了。这个人十三年没迟过一回款，可我不喜欢他。"
   },
   {
    "speaker": "别摇",
    "text": "替你们出钱的那位，这是买了一口井呀。在我老家，这就叫打听水有多深。"
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
     "text": "代持人是一家事务所，事务所的账单都寄到陆军部三楼，收件人是一位将军的副官。三年前，就在那层楼上，有位将军问过你，哪一区的土，几年不施术就会板结。",
     "effects": [
      "flag partner_is_general"
     ],
     "goto": "a2_14"
    },
    "fail": {
     "text": "回电花了十五个金冠，上头说该账户“在部里有人”，至于是哪个部、什么人，事务所劝你不要再问了。",
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
    "result": "回电隔天就到了，是埃塔念的：“是。报告甚佳。请继续。”念完她把电报纸翻过来看了看背面，背面什么也没有。",
    "goto": "a2_14"
   }
  ]
 },
 "a2_14": {
  "id": "a2_14",
  "title": "血账",
  "text": [
   "铁箱的盖子开着，里头放着地窖里那本账，四十一页。{?flag.ancardia_ledger:旁边是军需处的流水账，每个月初八都有一个缩写。|}",
   {
    "speaker": "埃塔",
    "text": "两本账。这一本四十一页，一页一个学徒。{?flag.ancardia_ledger:那一本每个月差一成，差的数都记在初八。|另一本在兵站镇，咱们手里没有。}两家都知道对方在干什么，可谁也不肯先开口，因为先开口的那一家，得把自己那本也交出来。"
   },
   "这条线要是修通了，罐子就用不着脚夫一趟一趟背了。{?flag.a2x_saw_bottling:兵站镇后屋那些木箱，尺寸就是照着棚车打的。|}",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "登报，两国的报纸都登。孩子的名字抹掉，连队的番号留着。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "真登出去，报上的标题不会写“血爵”，只会写“法师”。理论上，读者是分得清的。实际上呢，读者我见过。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "四十一页我都核过了，品脱数加得上，账是准的。准的东西，放在谁手里都一样准。你想好交给谁了吗？"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）第十九页和第三十页记的是同一个人，只是床号不一样。（不确定。）他们把一个人记成了两个数。这种记法我见过。"
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
    "result": "史家会在玛瑙之门山下有一间分号，稿子过了十天见报，标题叫《东坎诺的品脱》。{?flag.ancardia_ledger:奥托的缩写就印在第二栏。|}{?flag.a2x_oto_deal:那张十二金冠的收据也印上去了，上头有公司的名字。|}",
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
    "result": "安卡迪亚的军需官出四百，买地窖的那本账，{?flag.ancardia_ledger:魔法领地的管事出二百，买军需处的那一本。|另外二百是他后来添的，买的是你们不抄第二份。}两边付的都是现钱，谁也没要收据。",
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
    "result": "四十一页足足烧了一刻钟。{?party.middlesday:礼拜三看着火，说它还背得出来，你请它别背。|灰是埃塔扫的，她把灰扫进了一只信封，信封上什么也没写。}",
    "goto": "a2_15"
   },
   {
    "text": "只报给合伙人，别的谁也不给",
    "effects": [
     "flag blood_reported",
     "rep partner +1"
    ],
    "result": "埃塔抄了一份摘要，一共三页，挂号寄走了，回执上签收的是那位副官，字写得很用力，从纸背都摸得出来。",
    "goto": "a2_15"
   },
   {
    "text": "锁进埃塔的铁箱",
    "effects": [
     "flag box_blood"
    ],
    "result": "埃塔开了一张收条：“账册{?flag.ancardia_ledger:两|一}本，寄存。”她把钥匙挂回脖子上，说：“铁箱里的东西不生利息，可也不贬值。”",
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
   "团务会就开在棚车小堂里，红布底下拼了一张桌子，线路图摊在上头。图上画着两条红线，一条从第三座塔和第四座塔中间穿城而过，一条往南绕进安卡迪亚，签字栏还是只有两指宽。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "{?flag.strike_broken:（她是站着说的。）|}哪条都别签。这十一里路是拿三个礼拜的欠饷铺出来的，再铺一百里，欠的是谁的饷，我现在就算得出来。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "不能修。那座城是眼下唯一还教得出学生的地方。铁路从两座塔中间过，理论上只占四丈宽，实际上呢，占的是全部。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（坚持。）穿城。地窖里还有四十一台。（陈述。）铁路只要进了城，海关那张石桌上的条例就得改。我只知道这一个办法。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "穿城吧。教廷在那座城里连一间礼拜堂都没有，问过三回了，等路通了，第四回的回信大概会长一点。这只是我的理由，你得有你自己的。"
   },
   {
    "speaker": "埃塔",
    "text": "不修，银行就倒。违约金够把公司卖两回，可第二回没人买。我不投票，我只报数。"
   },
   {
    "speaker": "别摇",
    "text": "这条路通海吗？不通啊。那你们吵的是哪一段，我可听不出有什么两样。我问完了，你们要是答不上来，就算你们欠我半回。"
   },
   "两票对两票，埃塔把笔递给了你。",
   {
    "if": "is.god",
    "text": "缺耳朵的女人在车门口站着。她听说你一夜之间就能把线铺完，想先问你一句，没干的活，还算不算工钱。"
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
    "result": "天亮的时候，铁轨已经铺在那儿了，一百四十里，枕木上连露水都没沾。两国的兵一早醒来，发现凭空多了一条谁也没签过字的铁路，都开过去抢，工棚的人拿着镐站在路基上，已经没活可干了。{?party.bura:布拉从枕木上拔起一根道钉，掂了掂，又插了回去。|}至于线往哪边接，还是得你来签。"
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
    "result": "你在那两指宽的栏里写下“穿城”两个字，签了名。{?party.guilhem:吉列姆摘下眼镜，也没擦，又戴了回去。|}埃塔吹干墨水，在账上记了一笔，写的是“路权，已认定”。",
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
    "result": "你写了“南线”两个字，签了名，奥托的贺电比银团的回电还早到半天，头一句就问站台修多长，他要停得下四十节的兵车。",
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
    "result": "{?flag.clause_force_majeure:你引的是第十一页上那一条，罢工、战事，都算不可抗力，银团的律师读了三遍，愣是没找着缝。|合同上没有留退路，三百七十七年里公司头一回毁约，埃塔往账上写这一行的时候，特地换了一支笔。}{?flag.bank_thin:公司的存款，她上个月就取出来了。|阿斯拉银行停兑的那天，公司还有一百五十金冠存在里头。}",
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
   "泪落月，还是在塔顶，长桌也还是那一张。{?flag.yamina_spent:这回桌边多了一把椅子，雅米娜就坐在上头，满屋子没人敢朝那把椅子看。|雅米娜还站在老地方。}她左手边是第四代维纳克沃德领主，四十来岁，指甲剪得很短，右手边是伊萨，坐在一只书箱上，两只脚够不着地。",
   "桌上摆着三样东西，头一样是窖藏的清单，塔底下封着 1810 年以前攒下的晶体，一共四百一十箱，第二样是一只行礼用的铜盆，第三样是一封没封口的信，收信人是吉列姆。",
   {
    "speaker": "雅米娜",
    "text": "{?flag.line_castonath:铁路你们签了，要从我的第三席和第四席中间过。|}{?flag.line_ancardia:铁路绕了南边，兵车会比你们的测量队快。|}窖藏，这孩子，还有你们那位变化师，一共三件事，今天都得办完。年轻人，我可没有第二个雨季了。"
   },
   {
    "if": "flag.isa_owes_company && !flag.demesne_patron",
    "text": "伊萨朝你们点了点头，点得很郑重，欠着人家账的人就是这么点头的。"
   },
   {
    "if": "is.god",
    "speaker": "雅米娜",
    "text": "每道咒的产出，你给我报个数吧，我好往账上填。够强的法师就是神，这句话我们从前写过，后来又改了口。"
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
     "text": "领主一连驳了四条，正要驳第五条，雅米娜抬手把他止住了：“三枚印，我那一枚，传给这孩子。”火漆是当场化的，四百一十箱，一直封到半夜。",
     "effects": [
      "flag hoard_sealed",
      "world tears +1",
      "rep wand +1"
     ],
     "goto": "a2_16b"
    },
    "fail": {
     "text": "维纳克沃德领主问，教会那枚印凭什么给，你答了三条，他驳了四条。{?flag.line_ancardia:后来窖藏是兵车到的那天搬走的，四百一十箱，哪一枚印也没用上。|窖藏还是原样锁着，钥匙也还挂在雅米娜一个人的腰上。}",
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
     "text": "一共七条，你写得很短，每条只占一行，领主挑了半个钟头的毛病，最后只改掉了一个逗号。雅米娜看完说：“比我们自己的章程写得还清楚。”火漆是当场化的，四百一十箱，一直封到半夜。",
     "effects": [
      "flag hoard_sealed",
      "world tears +1",
      "rep wand +1"
     ],
     "goto": "a2_16b"
    },
    "fail": {
     "text": "文本挑不出毛病，领主挑的是执印的人，他问教会那一枚凭什么给。{?flag.line_ancardia:后来窖藏是兵车到的那天搬走的，四百一十箱，你那七条一条也没用上。|窖藏还是原样锁着，你那三份文本，她留下了一份。}",
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
    "result": "雅米娜把你报的数听完了，说：“四百一十箱，换城墙上的人从此不用再领罐子。”她在清单末尾签了字，把笔放下的时候放得很轻，银团给的经手费是五百金冠，汇到了公司账上。{?party.guilhem:吉列姆从头到尾都看着窗外。|}",
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
    "result": "{?flag.line_ancardia:你没有开口，窖藏是兵车到的那天搬走的，四百一十箱，押车的是奥托的人，收条上开的是“辅助晶源”。|你没有开口，她把清单折起来，压回了砚台底下，那串钥匙还挂在她一个人的腰上。}",
    "goto": "a2_16b"
   }
  ]
 },
 "a2_16b": {
  "id": "a2_16b",
  "title": "铜盆",
  "text": [
   "第二件事是那只铜盆。王家巫师入列要先过一道礼，过得去的才算得上一席，当年马德莱茵女皇在位的时候，一个岁数一个岁数地试过，试下来最合适的是刚抽条的年纪。伊萨今年十二岁，到下个雨季就十三了。",
   {
    "speaker": "伊萨",
    "text": "行礼到底疼不疼，谁也不肯告诉我。他们说，上一个问这话的人如今坐着第二席呢，可第二席明明是空的呀。"
   },
   {
    "if": "flag.isa_owes_company",
    "speaker": "伊萨",
    "text": "我欠你们一回。行礼的时候要是你们在，我就不怕了。记上吧，这算我又欠了半回。"
   },
   {
    "speaker": "维纳克沃德领主",
    "text": "这道礼要两个人主持，再要一个人在旁边护着。我们这边只凑得出两个半，我，女导师长，再加上她今天剩下的那点力气。贵公司要是肯出个人手，就凑齐了。"
   },
   {
    "if": "flag.demesne_patron",
    "text": "铜盆里的水一见你，自己起了一圈纹。领主皱起了眉头，这孩子的溺亡没有自己熬过去，这道礼认不认她，他可没有把握。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "护着的那个人我来当吧，催生术的圈我站过四百回，这个不过是小了一号。（他想了想。）不过小一号的我一回也没站过，这话得先说在前头。"
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
     "text": "水没过了她的手腕，先变成蓝的，又变回了清的，伊萨从头到尾一声没出，礼行完了才问能不能坐下。领主把名册翻到第二席，写上了一个名字，八个席位，如今还空着五个。",
     "effects": [
      "flag rite_given"
     ],
     "goto": "a2_16c"
    },
    "fail": {
     "text": "水刚没过手腕就浑了，领主一把将她的手提了出来，人倒是没事，只是指尖麻了三天。名册没有动，八个席位还是空着六个。",
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
    "result": "雅米娜看了你一会儿，说：“那就等。我教了她两年怎么等，也不差这一年。”伊萨从书箱上滑下来，把铜盆抱走了，抱得稳稳当当。",
    "goto": "a2_16c"
   }
  ]
 },
 "a2_16c": {
  "id": "a2_16c",
  "title": "那封信",
  "text": [
   "第三件事是那封信。雅米娜没有念，只把它推到了桌子中间，信上写的东西她自己说了一遍，一共三样，一是第五座塔，眼下正空着，二是学生，先教伊萨，往后的由她挑，三是头衔，王家巫师第五席护席。",
   {
    "if": "party.guilhem",
    "text": "吉列姆把信读出了声，读到“护席”两个字就停住了，摘下眼镜，拿袖口擦了起来。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "共和国给过我的，是一张表，半个月的咖啡票，还有一个“三等”。可这上头写的是一座塔啊。"
   },
   {
    "if": "party.guilhem",
    "text": "他抬起头来看着你，信还捏在手里，眼镜也没戴回去。"
   },
   {
    "if": "!party.guilhem",
    "text": "信是写给吉列姆的，可他人不在这儿，埃塔就把信收进了铁箱，在收条上写了“代收，待转”四个字。雅米娜看着她写完，说矮人的字比王家巫师的整齐，这一点三百年都没变过。"
   }
  ],
  "choices": [
   {
    "text": "“公司给不了你一座塔，只给得了一张桌子，还有几个吵架的人。”",
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
    "text": "他想了一整夜，早上来找你的时候，眼镜擦得干干净净。辞呈是填在公司的表上的，事由那一栏他写了两遍才写满。{?flag.a2x_left_to_him:他说，多亏你昨天没开口，这份辞呈他才写得下去。|}"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "speaker": "吉列姆",
    "text": "{?flag.hoard_milled:四百一十箱都磨成子弹了。|}{?flag.line_castonath:铁路要从第三席和第四席中间过。|}这地方再过十年，说不定就没了，可我要是不留下，它这十年里连一个人也教不出来。你别留我了，第四十一款管不到这儿。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "他把公司的钥匙放在埃塔桌上，自己提着箱子上了第五座塔，一百九十级楼梯，中间歇了两回。"
   },
   {
    "if": "party.guilhem",
    "text": "他想了一整夜。到早上回信已经写好了，只有三行，他念给你听。"
   },
   {
    "if": "party.guilhem && flag.a2x_left_to_him",
    "speaker": "吉列姆",
    "text": "念之前我先说一句啊，昨天你一个字也没说，谢谢你。"
   },
   {
    "if": "party.guilhem",
    "cls": "letter",
    "text": "“承蒙厚意。本人已有职守。依《国家变化师服务条例》第四十一款，在职者不得兼任教席。”"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "那一款从 1820 年起就管不着我了，我辞过职，这她也知道。{?flag.skiplist_defied:梨林那四十亩地是违了令才施的术，我得跟着违令的人走到头。|}{?flag.hoard_sealed:窖藏封住了，那孩子有东西可学，用不着我。|}所以这只是个体面的借口。理论上，两边的面子都保住了。"
   },
   {
    "if": "party.guilhem",
    "text": "信是他自己送上去的，下来的时候，口袋里多了一样东西，是伊萨抄给他的一页《入门八式》，字写得很大。"
   },
   {
    "if": "!party.guilhem && !flag.guilhem_stayed",
    "text": "那封信还在铁箱里躺着。伊萨下楼送你们，一直送到第一百级，问了一句那位变化师长什么样，你说，戴眼镜，填表的时候爱念出声。"
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
   "卡斯托纳斯没有电报，邮局是下城的一间石屋，信都走邮车，每礼拜二、礼拜六各发一班，到安本科斯特要走九天。",
   "又该给合伙人写报告了，这是第二份。埃塔把这一年的存根摊在邮局的长凳上，有底片的收条，有兵站镇的三联单，还有股东名册的第十四页，{?flag.partner_is_general:页边写着“陆军部三楼”。|页边写着“在部里有人”。}纸她已经裁好了，够写四页的。",
   {
    "speaker": "埃塔",
    "text": "写几页邮资都一样。他入了血的股，你写也好，不写也好，反正他都已经知道一半了。我就提醒这一句。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "使馆的条子比邮车先到，上头只问了一件事，塔底下那四百一十箱，如今在谁手里。"
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
    "result": "你把安卡迪亚兵车的节数、兵站镇的床数都抄了进去，文书会念给全连听，念完锁进连部的柜子里，那个柜子，你从前也锁过。"
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
    "result": "你照着密码本译了两页。{?flag.hoard_sealed:三枚印各在谁手里，你都写上了。|}{?flag.hoard_milled:四百一十箱磨成了子弹，买主是谁，你也写上了。|}参赞会比合伙人早两天读到。"
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
    "result": "“情况不明”只有四个字，译成密码是十一组数，参赞会在页边批一个问号，他的问号一向画得很大。"
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
    "result": "镇议会收到以后，得先表决要不要读，所以你在信封上添了一句“建议读”。"
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
    "result": "地窖里那四十一台，你一台一台写下了编号，念的人会念到七号线，念到 1811 年三月的料，而听的人里头，就有打过那批铆钉的。"
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
    "result": "题目你已经改了第二回，现在叫《一家有限责任的冒险公司，及其无限的责任》，水术师行会的审稿人不喜欢逗号，可那个逗号你还是留着了。"
   },
   {
    "text": "写全，四页",
    "effects": [
     "flag report2_full",
     "rep partner +1"
    ],
    "result": "一共四页，埃塔称过了，没超重，信去要九天，回来又是九天，回信只有一行：“收悉。款已汇。”",
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
    "result": "回信赶在你们出城之前到了，这还是头一封亲笔信，字很大，一行行往右上斜。通篇谈的都是天气，说安本科斯特今年泪落月雨水少，“于观星有利”，落款没写军衔。",
    "goto": "a2_18"
   },
   {
    "text": "删改：留下路权，拿掉血和那个账户",
    "effects": [
     "flag report2_edited"
    ],
    "result": "这一来只剩两页，埃塔把裁好没用上的那两页空纸收回了抽屉，说：“纸不能浪费。”回信只有一行：“收悉。款已汇。”",
    "goto": "a2_18"
   },
   {
    "text": "说谎：沿线无事，一切顺利",
    "check": {
     "skill": "deception",
     "dc": 14
    },
    "ok": {
     "text": "只写了一页，字写得很匀。回信也只有一行：“收悉。款已汇。”多一个字都没有。",
     "effects": [
      "flag report2_lie",
      "rep partner -1"
     ],
     "goto": "a2_18"
    },
    "fail": {
     "text": "你只写了一页，回信也是一页，上头抄着你上个月那份例行报告的日期和页数，底下添了一行：“两份文件出自同一支笔，请择一为准。”",
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
   "没有煤气灯的城里，看星星最清楚，点灯的人今晚歇工，城墙上坐满了人，都自己带着毯子，有一家还带来了一锅煮栗子。",
   {
    "if": "world.tears >= 6",
    "text": "数到后半夜，一共数出来二百来颗。有人数乱了，只好从头再数。"
   },
   {
    "if": "world.tears == 5",
    "text": "数到后半夜，一共数出来一百五十颗上下。"
   },
   {
    "if": "world.tears == 4",
    "text": "数到后半夜，一共数出来九十多颗。旁边那一家刚数到九十，就下城墙回去了。"
   },
   {
    "if": "world.tears == 3",
    "text": "数到后半夜，一共数出来五十颗上下，中间有一刻钟，天上一颗也没有。"
   },
   {
    "if": "world.tears == 2",
    "text": "数到后半夜，才数出来二十几颗，栗子倒比流星先吃完了。"
   },
   {
    "if": "world.tears == 1",
    "text": "整整一夜，落下来的流星一只手就数得过来。"
   },
   {
    "if": "world.tears <= 0",
    "text": "整整一夜，一颗也没有。城墙上的人一直坐到天亮才肯走。"
   },
   "在 1809 年的历书上，这一栏写的是“数不过来”，德鲁兹纳在工程车顶上架起了镜子，架完了却说用不着镜子。",
   {
    "speaker": "德鲁兹纳",
    "text": "肉眼就够了。再过十五年，连肉眼都嫌多。"
   },
   {
    "if": "party.bura && is.mortal",
    "speaker": "布拉",
    "text": "我数的是月份。三年前欠我十一个月，今年{?flag.backpay_suit:官司开了两回庭，|}还是十一个月。欠饷不长利息，就这一点比流星强。"
   },
   {
    "if": "party.bura && is.god",
    "speaker": "布拉",
    "text": "（她先敬了个礼，三年里这是头一回。）我跟了一辈子圣徒的教会，她好歹是死了的。"
   },
   {
    "if": "party.bura && is.god",
    "text": "说完她接着数，到了后半夜，你报错了一个数，差了有十来颗，她听见了，可没有纠正你。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（好奇。）落下来的晶体归拾到的人，登记成财物。（不确定。）没落下来的那些，归谁？"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "从前我总说下一回是 1921 年，后头还要加一句“理论上”。看过那箱底片以后，这三个字我不加了，再加就是骗人了。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "对面第五座塔的窗口亮着灯，窗边站着一个人，头发已经灰了。他看见你们了，可没有招手。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "碎片今年响了九声。流星的数我也记下来了，跟那九道竖线记在同一页上。我可没说它们有关系呀，只是纸不够用了。"
   }
  ],
  "first": [
   "level 6"
  ],
  "next": "a3_01"
 }
};
