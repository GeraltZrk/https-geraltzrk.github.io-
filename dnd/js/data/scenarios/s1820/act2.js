// s1820 / act2.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const SCENES = {
 "a2_01": {
  "id": "a2_01",
  "title": "报纸摘要一",
  "chapter": "第二幕 · 路权",
  "art": "ev_castellos_is_dead",
  "loc": "安本科斯特 · 铸炉街",
  "date": "1823年苏伦月",
  "text": [
   "1823 年苏伦月，安本科斯特铸炉街，迟到者公司的账房。过去三年，公司押送过四次魔晶车，替史家会搬过一次库房，仙子别摇住的那只果酱罐一直放在窗台上。秘书埃塔把这三年的剪报逐条钉在了北墙上，钉子是向楼下蜡烛铺借的。",
   {
    "cls": "letter",
    "text": "第一条剪自《安本科斯特论坛报》，说埃斯玛利亚的公投{?flag.volleys:“因故中止”，重办日期待议|已经计票完毕，结果“供议会参考”}。议会这一参考，就参考了三年。"
   },
   {
    "if": "flag.blame_crowd",
    "cls": "letter",
    "text": "《斗兽场哨兵报》登过一条，说康威尔那件事定成了“滋事”，凭的是当时在场的一家冒险公司写的报告。"
   },
   {
    "if": "flag.blame_officer",
    "cls": "letter",
    "text": "《康威尔通报》登过一条，说马洛中尉“另有任用”，其实是调到北边看仓库去了。法庭一次也没开过。"
   },
   {
    "if": "flag.blame_unknown",
    "cls": "letter",
    "text": "《康威尔通报》登过一条，说康威尔事件的起因“不明”，全卷已经归档。"
   },
   {
    "if": "flag.square_stood && !flag.square_miracle",
    "cls": "letter",
    "text": "《康威尔通报》给“站到两排人中间的那位队长”留了半栏的篇幅，可惜名字拼错了一个字，埃塔用红笔改了过来。"
   },
   {
    "if": "flag.square_mages_out",
    "cls": "letter",
    "text": "《论坛报》第四版上有一句，说康威尔出事那天，“公务法师均已安全撤离”。"
   },
   {
    "if": "flag.square_held_line",
    "cls": "letter",
    "text": "陆军部寄来过一封嘉奖函，抬头写的是“协助维持秩序”。埃塔照规矩把它归了档，没往墙上钉。"
   },
   {
    "if": "flag.skiplist_obeyed",
    "cls": "letter",
    "text": "《泰卢姆时报》说，梨林等四个区歉收，救济粮要按户登记。登记表的最后一栏填的是“上次投票意向”。"
   },
   {
    "if": "flag.skiplist_defied",
    "cls": "letter",
    "text": "《康威尔通报》说，梨林等四个区的收成“意外良好”，{?flag.refusal_on_paper:部里那封申斥信倒是写好了，可一直没寄出来。|部里的申斥信寄到了公司，埃塔拿它垫了茶壶。}"
   },
   {
    "if": "flag.skiplist_halved",
    "cls": "letter",
    "text": "十个区都只收了半季，好在都撑到了开春。事后没有一个区来信道谢，也没有一个区来信骂人。"
   },
   {
    "if": "flag.skiplist_read_out",
    "cls": "letter",
    "text": "那封只有十三个字的电报，被《泰卢姆传声报》编成了顺口溜，传令员满街喊了整整一个冬天。"
   },
   {
    "if": "flag.skiplist_caught",
    "cls": "letter",
    "text": "陆军部重印了一份“可靠承包人”名录，比原先少了一行，少的就是你们公司。埃塔在那一行原来的位置上画了个框。"
   },
   {
    "if": "flag.lianne_arrested",
    "cls": "letter",
    "text": "《哨兵报》说，前战斗法师加贝莱尔判了七年，服刑地点不公开，说是“以防劫狱”。"
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
    "text": "吉列姆站在墙面前，一条一条地念出声。三年前他的头发还是棕的，如今成了铁灰色。念到自己老家那一条时，他把眼镜往上推了推。"
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
    "text": "《论坛报》说，工会就“机器能否入会”表决了第五次，结果还是推迟。"
   },
   {
    "cls": "letter",
    "text": "《加韦顿观察》说，北方的布拉斯兰斯将军渡了河，给自己加了冕。配的那幅木刻像刻得太急，下面的说明写着“左三”，可左边一共只刻了两个人。"
   },
   {
    "cls": "letter",
    "text": "《泰卢姆传声报》说，布西拉尔又下了第二次、第三次漩涡，船都回来了，回来多少人却没登。报上还说，卡尔希尔的游学团已经回国，带走了四箱议事规则。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "游学团走的时候没带上你。团长只给你留了一句话：题目没写完的，就接着写。"
   },
   {
    "if": "flag.report1_full",
    "cls": "letter",
    "text": "《哀恸日评论》第六版说，陆军部“为屯垦计”，在埃斯玛利亚低价收了一批种不出粮食的死地，经办的是某位将军的副官。"
   },
   {
    "if": "!flag.report1_full",
    "text": "至于那位匿名的合伙人，这三年没有一个字见过报，汇款却从不延误。"
   },
   {
    "if": "origin == 'lorent' && flag.purse_spent_mages",
    "cls": "letter",
    "text": "《洛伦特日报》说，有两位“自安本纳尔来投”的变化师，受聘去了鲁本奈尔大学。"
   },
   {
    "if": "origin == 'lorent' && flag.purse_to_peargrove",
    "cls": "letter",
    "text": "梨林来了封信，说你那袋钱买的种子出了苗，一道咒也没用。使馆到现在还不知道这笔钱去了哪里。"
   },
   {
    "if": "is.god",
    "cls": "letter",
    "text": "《传声报》说，舱底区多了一座供{god}的小龛。香钱该归谁，两拨人打了一年的官司，法官要求“当事神”到庭。"
   },
   {
    "if": "flag.soil_mended",
    "cls": "letter",
    "text": "你治好了土的那个区，一连三年没请过巡回队，施术捐也没缴。部里正在研究怎么给一块好地开罚单。"
   },
   {
    "if": "flag.box_turned_blue",
    "cls": "letter",
    "text": "军需处那盒变蓝的子弹总算结了案，结论是“储存不当”。"
   },
   {
    "if": "flag.square_miracle",
    "cls": "letter",
    "text": "康威尔广场上停住过的弹头有四十来颗，都被人捡去当护身符卖了，一颗两个金冠。如今市面上流通的，已经有三百多颗了。"
   },
   {
    "if": "flag.tears_called",
    "cls": "letter",
    "text": "被流星砸了谷仓的那位主人把天文台告上了法庭，败诉以后，又改告“不明人士”。"
   },
   {
    "if": "is.immortal",
    "text": "埃塔把你的养老金重算了一遍，算到一半停了笔，在页边画了个问号。你的模样跟三年前一点没变，账本上你那一栏的签名，拿三年前的来比，一笔都不差。楼下蜡烛铺老板娘的女儿，倒已经开始站柜台了。"
   },
   "你看到北墙最后一颗钉子，压在下面的是一张汇票，汇款人是公司那位从不露面的匿名合伙人。",
   {
    "speaker": "埃塔",
    "text": "三百金冠，是三年的预付款，一年一百，一次汇到的。十三年来，这位合伙人没迟过一次款。队长，您是签收，还是另说个办法？"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "共和国还欠着我十一个月的饷，这位倒好，一给就先给三年。"
   }
  ],
  "choices": [
   {
    "text": "签收三百金冠",
    "effects": [
     "flag retainer_taken",
     "rep partner +1",
     "gold +300"
    ],
    "result": "埃塔吹干了墨水，把汇票夹进账本里。“收讫了。往后这三年，他问什么，我们就答什么。”",
    "goto": "a2_02"
   },
   {
    "text": "因这三年另接外活，退还一半",
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
    "result": "埃塔另起了一页，在页眉上写了“外活”两个字。合伙人的回电也只有两个字：“知悉。”她把这两个字看了很久，没看出别的意思来。",
    "goto": "a2_02"
   },
   {
    "text": "用这笔钱帮布拉打欠饷官司",
    "effects": [
     "flag backpay_suit",
     "rep republic -1",
     "approval bura +2"
    ],
    "result": "状子递进去那天，书记官问被告是谁，埃塔回答：“共和国，地址你们有。”{?party.bura:布拉在法院门外站了一上午，用的是站岗的姿势。|状纸上原告那一栏，写的是“铁颌，中士，1810”。}",
    "goto": "a2_02"
   }
  ]
 },
 "a2_02": {
  "id": "a2_02",
  "title": "银行团",
  "art": "ev_anb_global_trade",
  "loc": "安本科斯特 · 阿斯拉银行",
  "text": [
   "阿斯拉银行的总号 1410 年开业，四百多年下来，门槛已被矮人的靴子磨出了两道沟。这家银行牵头的银行团派来的代表在长桌对面坐了一排，开口的只有一个。他的胡子编成三股，辫梢各坠着一枚砝码。",
   {
    "speaker": "银行的矮人",
    "text": "是这么一条铁路：从玛瑙之门山下的矮人之路接出来，向西一直修进东坎诺。本行想请贵公司办三件事：勘测，护卫，签字。三件合在一起，算一个价。"
   },
   "东坎诺是坎诺大陆东部被绿潮毁掉的故地，这条线要经过那里的两个国家：安卡迪亚禁巫师，魔法领地禁机器。铁路只能从其中一国过，走哪一边，合同上写的是“以测量方队长签字认定为准”，也就是由你来定。那一行下面留了两指宽的空，等你签。",
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "两指宽。我上次见到这么宽的栏，里面要我填的是“奉命不救”。"
   },
   "你们出门时，隔壁《论坛报》的门房正把一个矮人往外请。那矮人怀里抱着一只包了铁角的木箱，胡子上还沾着粉笔灰。",
   {
    "speaker": "门房",
    "text": "老先生，您这是跑到第七家了吧？我们这里真的不登星星的事。"
   }
  ],
  "first": [
   "quest q_right_of_way start",
   "codex c_castonath_line"
  ],
  "choices": [
   {
    "text": "要求增加预付款",
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
     "text": "你把沿线两国的哨卡数、一趟工程车的煤钱和四个人的抚恤逐项报给他听。他把胡子上的砝码拨了三次，总算添了一百五十金冠，还补了一句：“抚恤那一项，本行希望用不上。”",
     "effects": [
      "gold +150"
     ]
    },
    "fail": {
     "text": "你刚说到“风险”两个字，他就把这两个字写了下来，写在“承包方”那一栏下面。预付款一个铜子也没添。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "观察他清点钱的手",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 14
    },
    "ok": {
     "text": "他嘴上报着数，眼睛看的却是你身后那扇金库门。桌角压着两封退股的信，落的都是上个月的日子。这条线要是修不成，这家银行就过不了冬。",
     "effects": [
      "flag bank_thin"
     ]
    },
    "fail": {
     "text": "你盯得太久了，他把茶杯挪到了你够不着的地方。"
    }
   },
   {
    "text": "追问：有限责任之下，银行亏了钱由谁来赔",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr' && !flag.bank_thin",
    "once": true,
    "effects": [
     "flag bank_thin"
    ],
    "result": "他愣了一下才开始解释，解释到第三句自己停住了，砝码在胡子上直晃。你把这三句话原样记进了考察笔记，又在旁边加了个注：他没说完。"
   },
   {
    "text": "增列条款，把罢工和战争列为不可抗力",
    "tag": "印",
    "if": "faction == 'seal'",
    "once": true,
    "effects": [
     "flag clause_force_majeure"
    ],
    "result": "合同一共十一页，他逐页签了缩写，签得很慢。“贵公司三百七十七年没毁过约。守约的人先给自己留退路，本行还是第一次见。”"
   },
   {
    "text": "签约后赶往东站",
    "goto": "a2_02b"
   }
  ]
 },
 "a2_02b": {
  "id": "a2_02b",
  "title": "东站",
  "loc": "安本科斯特 · 东站",
  "text": [
   "东站三号站台停着公司的工程车。三节车厢分别载客、装货、运仪器。隔壁四号站台上，另一列车的窗后全是灰蓝色军帽。",
   "那是安卡迪亚的兵，照月神之冠条约借道过境的。站长手里举着一面小旗，从他们进站到现在，那面旗子就没动过。",
   "抱箱子的矮人也到了这里。他把一张银行团的聘书拍给检票员看，然后回头想找个人帮他抬箱子，站台上谁也不肯和他对上眼。",
   {
    "if": "origin == 'anbennar'",
    "text": "那列兵车走的是月河支线，明天中午就要过你老家的站。站台上有个卖烟丝的，认出了你身上那件没领章的旧制服。"
   },
   {
    "if": "origin == 'anbennar'",
    "speaker": "卖烟丝的",
    "text": "你是穿过那身皮的。那你跟我说句实在的，共和国答应过的事，到底还算不算数？"
   },
   {
    "if": "origin == 'lorent'",
    "text": "使馆的听差在车门口等你，递来一张对折的便条，上面没有抬头，只有一句话：“此线若归安卡迪亚，于我不利。”"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "一列车，四百条枪，借的还是我们的道。我就想知道，这车票钱是谁出的。"
   }
  ],
  "choices": [
   {
    "text": "帮矮人搬箱上工程车",
    "once": true,
    "effects": [
     "flag a2x_helped_druznar"
    ],
    "result": "箱子很沉，不像是装衣服的。他把你上下打量了一遍，这才开口：“德鲁兹纳，暗望所的。箱子里是玻璃。脚下留神，年轻人。”"
   },
   {
    "text": "回答烟贩“算”",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar' && !flag.a2x_station_said",
    "once": true,
    "effects": [
     "flag a2x_station_said",
     "rep republic +1"
    ],
    "result": "他点点头，把烟丝包好了递给你，没收钱。“那我就再等等。我都等了十三年了，不差这一列车。”"
   },
   {
    "text": "告诉烟贩你不清楚",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar' && !flag.a2x_station_said",
    "once": true,
    "effects": [
     "flag a2x_station_said",
     "rep union +1"
    ],
    "result": "他笑了，笑着笑着就咳了起来：“穿这身皮的肯跟我说实话，这还是第一次。”半个站台的脚夫都朝这边看了一眼。"
   },
   {
    "text": "托听差回话说已知悉",
    "tag": "洛伦特",
    "if": "origin == 'lorent'",
    "once": true,
    "effects": [
     "rep wand +1"
    ],
    "result": "听差把这三个字默念了两遍才走。使馆向来会把“知道了”读成“照办”，你也没去纠正。"
   },
   {
    "text": "登上列车",
    "goto": "a2_03"
   }
  ]
 },
 "a2_03": {
  "id": "a2_03",
  "title": "哨卡",
  "loc": "安卡迪亚边境 · 哨卡",
  "text": [
   "安卡迪亚的边境哨卡只有一道横木和一间刷了石灰的板房。这个国家禁巫师，所以哨兵不看证件，只掏出一块拇指大的魔晶，在每个人眼前晃一晃。魔晶本名达姆斯塔尔，是随流星落下、能储存魔力的晶体，法师的眼睛总会自己跟着它走。",
   {
    "if": "party.guilhem",
    "text": "魔晶晃到吉列姆面前时，他的眼珠跟着走了半圈。哨兵一看就笑了，朝板房里吹了声口哨。"
   },
   {
    "if": "!party.guilhem && is.caster && !is.artificer",
    "text": "魔晶晃到你面前时，你的眼珠自己就跟了过去，拦都拦不住。哨兵一看就笑了，朝板房里吹了声口哨。"
   },
   {
    "if": "!party.guilhem && !(is.caster && !is.artificer)",
    "text": "他挨个晃了一圈，没有谁的眼珠跟着走。哨兵不大甘心，还是朝板房里吹了声口哨。"
   },
   "从板房里出来的是个上尉，领口敞着，手里拿着一沓表格，表格上还压着半只咬过的苹果。",
   {
    "speaker": "奥托",
    "text": "我是莫雷塞德的奥托，这段边境归我管。规矩是这样的：法师登记费一个金冠，瞒报罚十二个。我给你开罚十二个的那张收据，你实付六个，回头银行团照十二个给你报销，多出来的六个归你。谁也不吃亏。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "在安卡迪亚，得当过兵才有投票权。这规矩我挑不出毛病。可是挑不出毛病，我心里就不痛快。"
   },
   {
    "if": "is.god",
    "text": "魔晶举到你面前，一下亮成了白色，亮得连哨兵手背里的骨头都照得见。他翻出罚十二个金冠的那张表，可笔悬在“种族”一栏上，迟迟落不下去。"
   },
   {
    "if": "is.god",
    "speaker": "奥托",
    "text": "神迹眼下是个什么行市？我这人不贪，只抽一成。军需处那边我去说，就说是“特种晶源”。"
   }
  ],
  "first": [
   "codex c_ancardia",
   "codex c_oto"
  ],
  "choices": [
   {
    "text": "声称全队都是测量员，没有法师",
    "check": {
     "skill": "deception",
     "dc": 14,
     "party": true,
     "dis": "is.caster && !is.artificer"
    },
    "ok": {
     "text": "奥托把你们挨个看了一遍，在表上打了个勾：“测量员，行。你们这一行的，眼珠子倒都挺灵。”他把剩下的苹果啃完，核扔进了装表格的筐里。",
     "goto": "a2_04"
    },
    "fail": {
     "text": "“测量员。”奥托把魔晶往桌上一放，{?party.guilhem:吉列姆的手不听使唤，自己朝魔晶伸了过去|队里有人的手不听使唤，自己朝魔晶伸了过去}。“那就十二个金冠，名字我替你们填。登记了的法师要缴血税，每月初七到兵站镇去抽一品脱血，记得带上胳膊。”",
     "effects": [
      "flag registered_mages",
      "gold -12"
     ],
     "goto": "a2_04"
    }
   },
   {
    "text": "照章登记，付一金冠",
    "tag": "施法者",
    "if": "is.caster && !is.artificer",
    "effects": [
     "flag registered_mages",
     "gold -1",
     "rep republic +1"
    ],
    "result": "你把姓名、师承、每日施术次数一栏一栏都填满了。奥托接过表去，一脸的失望：“自己往里走的，我还是第一次见，真没意思。登记了的法师要缴血税，每月初七到兵站镇去抽一品脱血，记得带上胳膊。”",
    "goto": "a2_04"
   },
   {
    "text": "实付六金冠，请他开十二金冠的收据",
    "effects": [
     "flag registered_mages",
     "flag a2x_oto_deal",
     "gold +6"
    ],
    "result": "你实付六个金冠，收据上写的是十二个，等银行团报销下来，公司还能净赚六个。奥托把两份钱分别装进两个口袋，说：“合作愉快。登记了的法师要缴血税，每月初七，兵站镇，抽一品脱，别忘了。”埃塔接过那张收据，眉头一直没松开。",
    "goto": "a2_04"
   },
   {
    "text": "接过酒壶，聊聊军需",
    "tag": "武人",
    "if": "is.martial",
    "once": true,
    "effects": [
     "flag a2x_oto_talked"
    ],
    "result": "握过枪的手他认得出来，话也就多了：“议会上周又动了拳头，砸坏了两把椅子，法案还是没过。老达利昂办事一板一眼，一仗都不肯打。我要这条铁路，有了它一天能运两个团。到那时，军需处的账总得有自己人看着。”说完他朝你挤了挤眼，意思是你也算一个。"
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
   "blurb": "药贩按瓶开价，你可以还。工具车上的铁按重量卖，一分不让。",
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
   "车队在一片卵石河滩上扎了营，测绳晾在棚车门口，三脚架支在工程车顶上。从这一趟起，埃塔带着她的铁箱随队走，坐也坐在箱盖上。",
   "银行团雇来修测量仪的是个侏儒奇械师，叫蒂尔妲·双扳。她两天就把仪器修好了，第三天开始拆别的东西。那个抱箱子的矮人德鲁兹纳，天一黑就爬上车顶，谁也不理。",
   {
    "speaker": "别摇",
    "text": "你们这里的空气比城里的还淡。昨天夜里那一口是什么味，煤烟吧？记上半笔，算我替你们尝过了。"
   },
   {
    "if": "race == 'lizardfolk'",
    "text": "你一直把她的名字念成“勿摇”，一念就是三年。她到现在也没纠正过你，只在罐子盖的内侧又划了一道。"
   },
   "{?world.tears <= 3:她的罐子挂在车辕上，那点光得拿手拢着才看得见。|她的罐子挂在车辕上，光比三年前暗了一档。好在夜里还够照亮一页账。}",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "听说轨头上那些筑路工，一多半是林墙来的兽人。我有个表侄就在那里扛枕木，上次见他的时候，他才到我腰这么高。"
   },
   {
    "if": "flag.a2x_runner_saved",
    "text": "那个没登记的孩子在工程车里睡了半夜，天亮前就走了。临走他留下一句话：装血的罐子都往西运，进了卡斯托纳斯的西门，去找旧锻炉后面那扇新铁皮门。"
   },
   {
    "if": "is.god",
    "speaker": "埃塔",
    "text": "精算表上没有你这一行，我给你添了一行。保费那一栏还空着，全城的保险行，没有一家敢填。"
   }
  ],
  "choices": [
   {
    "text": "查看蒂尔妲新做的秤",
    "once": true,
    "goto": "a2_04b"
   },
   {
    "text": "去下游河滩查探晃动的灯光",
    "once": true,
    "goto": "a2_04c"
   },
   {
    "text": "上车顶找那名矮人",
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
      "text": "1699 年，我看见那颗彗星来。1810 年，我看见它碎。你多大了，年轻人？……那你是一次也没赶上。"
     },
     "{?is.dwarf:他照样管你叫年轻人，不过把目镜的盖子拧开了，朝你偏了偏头，让你看。|他不让你碰镜子，连三脚架的影子都不许你踩。}"
    ]
   },
   {
    "text": "替蒂尔妲拧紧箱底的螺丝",
    "tag": "小个子",
    "if": "is.small",
    "once": true,
    "effects": [
     "flag a2x_screw"
    ],
    "result": "“往里，再往里，过了，回来半指。好，就是这颗。”等你满手机油地爬出来，她已经在给车顶的望远镜画新支架了，图上还留了个检修口，正好是你这么大。"
   },
   {
    "text": "问娜尔雯今年已听见几声",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": [
     "她把本子翻到那一页给你看，上面画着九道竖线，每道下面记着一个日期。",
     {
      "speaker": "娜尔雯",
      "text": "今年是九声，1820 年是十一声。我没说它在变少。上次有人替它下结论是在 1666 年，那位第二天就走了。"
     }
    ]
   },
   {
    "text": "看看吉列姆收到的梨林来信",
    "if": "party.guilhem",
    "once": true,
    "effects": [
     "approval guilhem +1"
    ],
    "result": [
     "信是他父亲写来的，一共才四行，说今年巡回队没来，梨收了五成，麦子只有三成。最后一行是问他的，问他头发白了没有。",
     {
      "speaker": "吉列姆",
      "text": "不施术，就是三成。理论上，地是在慢慢缓过来的。可实际上，我爹今年已经六十九了。"
     }
    ]
   },
   {
    "text": "在营地过夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "夜里的哨是大家轮着站的。河对岸安卡迪亚的巡逻队一夜走了四趟，每趟都提着马灯朝这边把车数一遍。数目每次都对，他们每次都像是有点失望。"
   },
   {
    "text": "天黑后上车顶检查箱中物件",
    "goto": "a2_05"
   }
  ]
 },
 "a2_04b": {
  "id": "a2_04b",
  "title": "魂秤",
  "art": "ev_damestear_core",
  "text": [
   "棚车的折叠桌上摆着蒂尔妲新做的魂秤。说是秤，其实只有一根黄铜梁和一只玻璃罩，罩里悬着一根细如发丝的指针。它没有砝码，也没有秤盘，只有一个朝外的铜口。",
   {
    "speaker": "蒂尔妲",
    "text": "拿颜色验魔晶，那是我奶奶那辈人的办法，她只说得出一句“挺蓝”。我这个量的是魔力往外漏的口子开了多大。来，看着。"
   },
   "她先把一块用空了的魔晶凑到铜口上，指针一动不动。再换上一发破魔弹，指针一下向左甩到了底，颤了好一阵才停住。破魔弹的弹头掺了黑魔晶粉末，专破法术护盾。她在本子上记了一行：左，满格，回零四十秒。",
   {
    "if": "is.god",
    "text": "她顺手把铜口对准了你。针一下打到了头，罩里“叮”的一声，游丝断了。一刻钟以后你收到一张账单，分了七项，最后一项是“精神损失（仪器的）”，合计四十金冠。"
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
    "text": "先征求礼拜三同意再称量",
    "if": "party.middlesday && !flag.gauge_tested_m",
    "once": true,
    "effects": [
     "flag gauge_tested_m",
     "approval middlesday +1"
    ],
    "result": [
     {
      "speaker": "礼拜三",
      "text": "动手之前先问过我的人，你是第一个。量吧。"
     },
     "指针往左走，停在了七格上，没有回零。蒂尔妲等了两分钟，只好把“回零”那一栏划掉，改成了“不回”。礼拜三让指针摆动的方向和破魔弹一样，它胸口的芯核也在吸魔力。"
    ]
   },
   {
    "text": "趁它卸货把秤的铜口转向它",
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
      "text": "你量了我。你没有先问我。我记下了。埃塔怎么记账，我就怎么记。"
     }
    ]
   },
   {
    "text": "把前战斗法师莉安娜肩上取出的寇拉希放上秤",
    "if": "item.korashi_grain >= 1",
    "once": true,
    "effects": [
     "flag a2x_grain_read"
    ],
    "result": "寇拉希是东洲人对黑魔晶的称呼。这一粒放上去，指针往左走了三格，颤个不停。蒂尔妲凑近了看：“它在人身上待过三四年，到现在还在吸，还没吸饱。这个读数得留着。”"
   },
   {
    "text": "亲自把手按上铜口",
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
    "result": "指针往左走到七格，不回。你把手拿开了，它还停在那里。蒂尔妲看看指针，又看看你，第一次接不上话。"
   },
   {
    "text": "返回营地",
    "goto": "a2_04"
   }
  ]
 },
 "a2_04c": {
  "id": "a2_04c",
  "title": "河滩上的灯",
  "text": [
   "往下游再走半里，一辆篷车停在卵石坡上，车辕上挂着马灯。三个戴宽檐帽的男人围着一个十四五岁的孩子，孩子的一只手腕已经被铐住，另一只镣环还敞着。",
   "这几个宽檐帽腰上各挂着一串铁片，一走路就哗哗响。领头的那个抬头看见了你们，先数了数人头，再看谁身上带着法器。",
   {
    "speaker": "收血的",
    "text": "这是野生的法师，没登记过，他的血一品脱能卖到登记价的三倍。{?party.guilhem:你们队里那位戴眼镜的要是肯卖，我出双份。|你们队里要是有会念咒的，我出双份。}都是买卖。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "{?partysize >= 4:七|}{?partysize == 3:六|}{?partysize <= 2:四|}个人，{?partysize <= 2:一|两}匹马，一副镣。镣归我。"
   },
   {
    "if": "is.god",
    "text": "那孩子第一个看见了你，整个人直往车轮后面缩。收血的顺着他的眼神看过来，价钱报到一半，咽了回去。"
   }
  ],
  "choices": [
   {
    "text": "拿起武器救回孩子",
    "if": "partysize >= 4",
    "combat": {
     "title": "河滩上的灯",
     "intro": "宽檐帽把一串铁片塞进腰间，从身上取出一副冷铁镣铐。",
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
       "desc": "安卡迪亚巡逻队就在对岸，对方最怕引来士兵。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "你吹了三短一长。河对岸有人应了一声，马灯朝这边转了过来。收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音，河对岸没人理你，这边的人倒被逗笑了。"
       }
      },
      {
       "id": "cart",
       "name": "砍断篷车的挽绳",
       "desc": "车后是河，脚下的路还有坡度。成功时，所有敌人受到 2d6 点钝击伤害。",
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
    "text": "拿起武器救回孩子",
    "if": "partysize == 3",
    "combat": {
     "title": "河滩上的灯",
     "intro": "宽檐帽把一串铁片塞进腰间，从身上取出一副冷铁镣铐。",
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
       "desc": "安卡迪亚巡逻队就在对岸，对方最怕引来士兵。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "你吹了三短一长。河对岸有人应了一声，马灯朝这边转了过来。收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音，河对岸没人理你，这边的人倒被逗笑了。"
       }
      },
      {
       "id": "cart",
       "name": "砍断篷车的挽绳",
       "desc": "车后是河，脚下的路还有坡度。成功时，所有敌人受到 2d6 点钝击伤害。",
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
    "text": "拿起武器救回孩子",
    "if": "partysize <= 2",
    "combat": {
     "title": "河滩上的灯",
     "intro": "宽檐帽把一串铁片塞进腰间，从身上取出一副冷铁镣铐。",
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
       "desc": "安卡迪亚巡逻队就在对岸，对方最怕引来士兵。成功时，所有敌人陷入「恐慌」，持续 2 回合。",
       "check": {
        "skill": "intimidation",
        "alt": [
         "performance"
        ],
        "dc": 12
       },
       "success": {
        "text": "你吹了三短一长。河对岸有人应了一声，马灯朝这边转了过来。收血的回头数了数自己的人。",
        "applyAll": {
         "cond": "frightened",
         "turns": 2
        }
       },
       "fail": {
        "text": "你吹出来的是换岗的哨音，河对岸没人理你，这边的人倒被逗笑了。"
       }
      },
      {
       "id": "cart",
       "name": "砍断篷车的挽绳",
       "desc": "车后是河，脚下的路还有坡度。成功时，所有敌人受到 2d6 点钝击伤害。",
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
    "text": "照对方开的价买下孩子",
    "cost": {
     "gold": 60
    },
    "effects": [
     "flag a2x_runner_saved"
    ],
    "result": "对方收了你六十金冠。收据的品名一栏没写孩子，写的是“辅助晶源，活，一”。埃塔接过收据，夹在账本最后一页。她从不往那一页记账。",
    "goto": "a2_04"
   },
   {
    "text": "放弃介入，返回营地",
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
   "箱子里装的是玻璃底片，每张单独卧在羊毛垫上。德鲁兹纳是暗望所的天文学家，他抽出一张举到灯前。底片上是一片星空，群星之间有指甲盖大的一块地方发灰。",
   {
    "speaker": "德鲁兹纳",
    "text": "1699 年，彗星在这里。1810 年，它就是在这里碎的。从那以后，我每年泪落月都拍这一块天，一共拍了十三张，十三张全是灰的。"
   },
   {
    "if": "flag.wastage_ref",
    "text": "你跟他提起陆军部那卷“损耗”，说是 1811 年立的卷，立卷人是个矮人的名字。他的胡子动了一下。"
   },
   {
    "if": "flag.wastage_ref",
    "speaker": "德鲁兹纳",
    "text": "1811 年，我给十一个国家写过信，说彗星碎了，往后流星和魔晶只会越来越少。只回了两封，写的都是“来函收悉”。原来剩下的都归到那一卷里去了。这卷名起得倒不坏。"
   },
   {
    "if": "!flag.wastage_ref",
    "speaker": "德鲁兹纳",
    "text": "1811 年，我给十一个国家写过信，说彗星碎了，往后流星和魔晶只会越来越少。只回了两封，写的都是“来函收悉”。听说衙门里归这种信的卷，就叫“损耗”。"
   },
   {
    "speaker": "蒂尔妲",
    "text": "他不许我说“彗星没了”，非要我说“观测不支持回归”。其实是一个意思，他也知道是一个意思。"
   },
   "他把底片放回格子里，又盖上了羊毛。",
   {
    "speaker": "德鲁兹纳",
    "text": "七家报馆，家家都说不登星星的事。可银行团的聘书上写着，车上拍的东西归银行团，怎么处置由测量方的队长定。这么算下来，你就是第八家。我得活到它印出来的那一天。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆把那张底片要过去看了很久，最后只说了一句“下一次是 1921 年”。往常他会在前面加上“理论上”三个字，这次没有加。"
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
    "text": "借他的灯看完十三张底片",
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
     "text": "你把十三张叠起来对着灯看。那块灰一年比一年淡，到了 1820 年，已经淡得跟底色分不出来了。要是云，不会十三年都待在同一格里。要是尘，也不会散得这么匀。彗星是真的没了，你把这两句话写进了笔记。",
     "effects": [
      "flag plates_understood"
     ]
    },
    "fail": {
     "text": "你看到第四张，就分不清哪块是灰、哪块是指纹了。蒂尔妲只好替你讲了一遍，绕了好几个弯。你记住的只有最后一句：“反正没了。”"
    }
   },
   {
    "text": "送交史家会公开刊印",
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
    "result": "装底片的箱子是德鲁兹纳亲手钉的，钉了四十分钟。史家酬金是六十金冠，他分文未取，只交代了一句：“排版时，把年份排在前面。”",
    "goto": "a2_06"
   },
   {
    "text": "依聘书拍电报，把底片交给银行团",
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
    "result": "银行团的回电来得很快，出价四百金冠，要的是“全部底片及其复制权，妥为保管”，也就是压着不发。箱子抬走时，德鲁兹纳待在车顶上没下来。往后他有什么话都托蒂尔妲转达，不再跟你说话。",
    "goto": "a2_06"
   },
   {
    "text": "请他加印一套，存进埃塔的铁箱",
    "effects": [
     "flag box_plates",
     "item +druznar_plates"
    ],
    "result": "埃塔给他开了收条：玻璃底片抄件十三张，寄存，无期限。德鲁兹纳把收条叠好，放进了贴身的口袋，说：“比这更糟的出版社，我也见过。”",
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
   "到兵站镇这天正是初七，登记过的法师每月都要来这里抽一次血，这就是安卡迪亚的血税。屋子四面贴着白瓷砖，摆着十二张铁床，床头都钉着号牌。每人抽一品脱，收据一式三联，本人留一联，军需处留一联。第三联撕下来以后去了哪里，管床的说这不归他过问。",
   "法师的血在这里叫“蓝血”，能当魔晶用，在账上的名目是“辅助晶源”。三号床上的人把袖子卷到了肩膀，臂弯里的针眼排成了一行。他正在看一份上周的《传声报》，看得很慢。",
   {
    "if": "flag.registered_mages && party.guilhem",
    "text": "这个月的单子上有吉列姆的名字，连一个字母都没拼错。"
   },
   {
    "if": "flag.registered_mages && party.guilhem",
    "speaker": "吉列姆",
    "text": "一品脱。附表第三项写着，三周就补得回来。可附表没写一年里有十二个初七。"
   },
   {
    "if": "flag.registered_mages && !party.guilhem",
    "text": "这个月的单子上有公司的名字，后面还跟着一个床号。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "十二张床，一小时轮一次，从早上八点到下午四点。这是今天的数。你要的是哪一天的？我可以坐在这里数上一个月。"
   }
  ],
  "first": [
   "codex c_blueblood"
  ],
  "choices": [
   {
    "text": "查阅军需处往来账",
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
     "text": "收进来的品脱数和交上去的品脱数，每个月都差一成。差的那一成下面签的是同一个缩写，是奥托的，日期都是初八。你把那本账夹在测量图里带了出来。",
     "effects": [
      "flag ancardia_ledger",
      "item +ancardia_ledger"
     ]
    },
    "fail": {
     "text": "军需官客客气气地请你喝茶，一喝就是一小时，喝了四杯。账你一页也没翻着，茶钱倒记在了你头上。",
     "effects": [
      "gold -10"
     ]
    }
   },
   {
    "text": "绕到后屋看他们装罐",
    "once": true,
    "check": {
     "skill": "stealth",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "后屋里正在装箱，用的是陶罐，拿蜡封了口，十二罐装一箱。那木箱的尺寸你在图纸上见过，横着码上六只，正好是一节棚车的宽。他们是打算等铁路修通了，用火车往外运血。",
     "effects": [
      "flag a2x_saw_bottling",
      "xp 60"
     ]
    },
    "fail": {
     "text": "门后面站着一个杂役，他已经等了你一会儿：“参观费二十金冠，带讲解的四十。”你付了不带讲解的那一份。",
     "effects": [
      "gold -20"
     ]
    }
   },
   {
    "text": "查看三号床的病人还能撑多久",
    "once": true,
    "check": {
     "skill": "medicine",
     "dc": 12,
     "party": true
    },
    "ok": {
     "text": "他的脉搏有一百一，指甲也发白了。照这个抽法，他还能撑三次，到第四次就站不起来了。你把这话告诉管床的，他想了想，在号牌背面写了个“缓”字。",
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
     "text": "你说他还行。他一站起来就栽倒了，把你和一只接血的罐子一起带倒在地，罐子的钱算在了你头上。",
     "effects": [
      "gold -8",
      "hp -2"
     ]
    }
   },
   {
    "text": "按要求抽一品脱血",
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
    "text": "花四十金冠买一张血税已缴凭据，免去抽血",
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "once": true,
    "cost": {
     "gold": 40
    },
    "effects": [
     "flag a2x_tax_done"
    ],
    "result": "管床的把四十个金冠点清，分成了两摞。收据上的品脱数是真的，床号也是真的。躺在那张床上替你们抽血的是谁，你没见到。"
   },
   {
    "text": "回车上起草本月报告",
    "goto": "a2_06b"
   }
  ]
 },
 "a2_06b": {
  "id": "a2_06b",
  "title": "例行报告",
  "text": [
   "银行团要的例行勘测报告每月一份，写路基、坡度、桥位和沿线治安。照规矩，报告要抄送全体股东，埃塔数过，一共十九份。",
   "工程车里只有一张折叠桌，蒂尔妲占了一半，正在画望远镜的新支架。墨水是在兵站镇买的便宜货，写出来的字发灰。",
   {
    "if": "flag.registered_mages && !flag.a2x_tax_done",
    "text": "初七已经过了，单子上那一品脱没人去缴。奥托托人捎来一句话，说他这个人记性好。"
   },
   "你写到了“沿线治安”这一栏。兵站镇抽血的事写进去也行，不写也行，这一栏都填得满。",
   {
    "speaker": "埃塔",
    "text": "十九份，抄一份四个铜子。那件事你提也好，不提也好，抄写费是一样的。"
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
    "text": "写明军方每月抽取登记法师的血作为“辅助晶源”",
    "effects": [
     "flag midreport_blood"
    ],
    "result": "埃塔照着抄了十九份，一个字也没改。报告在这个月十四号寄了出去。",
    "goto": "a2_07"
   },
   {
    "text": "只报告路基、坡度与桥位",
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
   "东坎诺的大城里，只有卡斯托纳斯还没通煤气，这座城归魔法领地管，机器不得入境。傍晚，点灯人举着长杆沿城墙一盏一盏地点油灯，城里八座法师塔的窗子却亮得比灯还早。",
   "进了西门往下城走，石阶贴着瀑布一路向下拐，溅上来的水带着一股阴沟味，上城的沟都往这里排。石阶尽头嵌着一块铜牌，标的是圣女科琳倒下的地方。铜牌被人摸得发亮，四个角上各压着一枚铜子。",
   {
    "if": "party.bura",
    "text": "布拉在铜牌面前站了一会儿，没有伸手去摸。她从兜里找出一枚铜子，四个角都被人占了，她就把它放在了正中间。"
   },
   "这里的海关就是一张石桌，条例刻在桌沿上，只有一句：“奇械不得入境。”{?party.middlesday:关员看着礼拜三，礼拜三也看着关员。|关员用指节敲了敲蒂尔妲的仪器箱，箱子里有什么东西嗡了一声。}",
   {
    "if": "is.mechanim",
    "text": "轮到你了。关员不问姓名，直接开了一张税单，上面写着“自动机，一台，二手”，要缴十五个金冠。埃塔跟他要了收据。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "关员翻到了你那张卖契，在“经手人”一栏里找到了你的名字，礼拜三的过境税就记在了你头上，一共十五个金冠。埃塔跟他要了收据。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "这座城里，连一间揭秘教会的礼拜堂都没有。教廷来问过三次，三次的回信我都见过，一封比一封短。"
   },
   {
    "if": "is.god",
    "text": "铜牌旁边候着三个科琳教的神职人员，教中称作“胫甲”，都披着红披风，纸笔是自己带来的。"
   },
   {
    "if": "is.god",
    "speaker": "胫甲",
    "text": "{god}阁下，教区有一句话要问，请您书面答复：您与科琳是什么关系？"
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
    "text": "向关员申报为公司随行行李",
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
     "text": "关员在“行李”那一栏里落了笔，{?party.middlesday:写的是“铁箱一只，自行”。礼拜三等过了门洞才问你，“自行”算不算名字。|写的是“测绘器具一箱，不通电”。蒂尔妲想纠正他，你赶紧踩了她一脚。}",
     "goto": "a2_08"
    },
    "fail": {
     "text": [
      "{?party.middlesday:关员叫来四个脚夫，把礼拜三抬进了海关的地窖。第二天一早它自己走了上来，胸口多了一张封条。|仪器箱被扣下了，赎金要三十金冠，收据上写的是“保管费”。}",
      {
       "if": "party.middlesday",
       "speaker": "礼拜三",
       "text": "（陈述。）下面还有四十一台机械人，像货一样码成了垛。（愤怒。）我一台一台数过。"
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
    "text": "申请保税过境凭单",
    "tag": "印",
    "if": "faction == 'seal'",
    "result": "表格一式三份，要盖两次印。关员第一次碰上有人把他的条例背得比他还熟，只好在“奇械”后面添了三个小字：“过境中”。",
    "goto": "a2_08"
   },
   {
    "text": "用林墙话答复半兽人脚夫",
    "tag": "绿皮",
    "if": "is.greenskin",
    "once": true,
    "effects": [
     "flag a2x_porter_tip"
    ],
    "result": "他问你从哪里来，你答了。他咧开嘴笑了，又压低嗓子告诉你，城墙上的佣兵这半年领的不是钱，是罐子，每旬领一次，就在旧锻炉后面那扇新铁皮门那里。"
   },
   {
    "text": "登记为“同路人”",
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
    "text": "填写“互不相识”",
    "tag": "神",
    "if": "is.god && !flag.a2x_corin_answered",
    "once": true,
    "effects": [
     "flag a2x_corin_answered"
    ],
    "result": "他们照原样记了下来，一个字也没评。走出去十来步，三人中有一个回了两次头。"
   },
   {
    "text": "填写“我年长”",
    "tag": "神",
    "if": "is.god && !flag.a2x_corin_answered",
    "once": true,
    "effects": [
     "flag a2x_corin_answered",
     "approval bura -2",
     "rep union -1"
    ],
    "result": "胫甲的笔停住了。他把纸翻过来，在背面抄了一条教义的编号，那一条说的是在上者失道，在下者得起。{?party.bura:布拉的铰链响了一声，她盯着你看了很久。|门洞里的脚夫都不扛活了，站在那里看着你。}"
   }
  ]
 },
 "a2_08": {
  "id": "a2_08",
  "title": "站着见客",
  "loc": "卡斯托纳斯 · 女导师长的塔",
  "text": [
   "女导师长住第三座塔。上去要爬一百九十级台阶，没有扶手。带路的学徒才十二三岁，手里的灯举得纹丝不动。",
   "雅米娜·格拉科赛尔是魔法领地的女导师长，今年九十三岁了。她站在一张长桌后面，桌边一把椅子也没摆。桌上摊着你们的线路图，有人用红墨水在城里添了八个圈，是八座法师塔。",
   {
    "speaker": "雅米娜",
    "text": "八个席位，如今空着六个。你们的铁路，要从第三座和第四座塔中间穿过去。"
   },
   {
    "if": "party.guilhem",
    "text": "她转过去看着吉列姆，管他叫年轻人，问他教过几个学生。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "一个也没有，共和国不让教。条例第四十一款写着，公务法师不得私相授受。"
   },
   {
    "if": "party.guilhem",
    "text": "她听完，只用指甲在图上那两个圈的中间点了一下。"
   },
   {
    "if": "party.narwen",
    "text": "娜尔雯和她对了对年份。雅米娜是 1744 年入列的，那一年，娜尔雯已经在揭秘教会的地窖里数了七十八年圣物碎片的鸣声。两个人谁也没再往下算。"
   },
   {
    "if": "is.god",
    "text": "她把你打量了差不多一分钟，一句也没有问，拉过一张纸写了满满一页，写完就压在了砚台下面。"
   }
  ],
  "first": [
   "quest q_right_of_way stage 2",
   "codex c_yamina",
   "codex c_royal_wizards"
  ],
  "choices": [
   {
    "text": "按旧礼称呼她的完整头衔",
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
     "text": "你称了她一声“陛下”。她当场纠正你，用的是 1744 年的老规矩，一共七条，她一条一条往下背。背到第五条时，掌灯的学徒憋笑憋得灯都跟着抖。"
    }
   },
   {
    "text": "留意她扶住桌沿的手",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15
    },
    "ok": {
     "text": "那只手始终没离开过桌沿，她每说完一句，都要等气喘匀了才说下一句。窗外的雨已经下了一个星期，她累了。屋里不摆椅子是她自己定的规矩，因为一摆上，她就非坐不可了。",
     "effects": [
      "flag yamina_tired"
     ]
    },
    "fail": {
     "text": "她的手稳得很。你看了半天，只看出墨水是红的。"
    }
   },
   {
    "text": "问她 1744 年有几个人站在这张桌旁",
    "tag": "长寿",
    "if": "is.longlived",
    "once": true,
    "effects": [
     "flag a2x_old_days"
    ],
    "result": [
     {
      "speaker": "雅米娜",
      "text": "八个。我最小，才十四岁，站在门边。像你这个岁数的客人，如今少了，年轻人。想坐就随你，只是这屋里没有椅子。"
     }
    ]
   },
   {
    "text": "随提灯学徒下楼去书房",
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
   "书房在塔的半腰，只有一扇窗、一盏油灯。雅米娜的账本就摊开在那里，没人拦着你看。左栏记的是 1810 年以来每道咒的产出，精确到小数点后两位。右栏记的是东坎诺各军每年打出去的破魔弹数。",
   "左边的数一年比一年小，右边的数一年比一年大。蒂尔妲把魂秤的读数抄成了一条纸带，摆在两栏中间。三列数字一对照，拐弯的年份都对得上：破魔弹打得越多，法术就越弱。",
   {
    "speaker": "蒂尔妲",
    "text": "这就是复式账：这边划走一笔，那边就必定记上一笔。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "这是损耗。柴烧了就是烧了，不会跑进别人家的柴房里去。我管了二十年的催生术，账一向是这么记的。"
   },
   {
    "if": "!party.guilhem",
    "speaker": "埃塔",
    "text": "这账不平。不平的账只有两种，要么是有人拿了，要么是还有另一本。是哪一种，光凭这两栏看不出来。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "你们两位说的都是这一头。我想问的是那一头：少掉的魔力，是谁在收？"
   },
   {
    "if": "!party.narwen",
    "speaker": "别摇",
    "text": "你们账上少掉的那些，我老家的潮表上倒是有一栏，年年都多出来。我没说是同一笔，我只说有这么一栏。"
   },
   "雅米娜一直站在门口，从头听到了尾，谁的话也没有纠正。"
  ],
  "first": [
   "level 5",
   "codex c_double_entry",
   "codex c_gauge",
   "codex c_tilda"
  ],
  "choices": [
   {
    "text": "逐项比对两栏记录和纸带",
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
     "text": "对到 1816 年，你找到了规律。右栏每多出一万发，隔一年，左栏就掉下去一个差不多的数。误差不小，可方向十三年都没变过。",
     "effects": [
      "flag yamina_ledger_read"
     ]
    },
    "fail": {
     "text": "数字从第六年起就对不上了。你最后对出来的结论是东坎诺的破魔弹能治咒，蒂尔妲笑得把纸带都扯断了。"
    }
   },
   {
    "text": "征求她同意，借账本誊抄",
    "req": "rep.wand >= 1",
    "reqText": "需要王冠与魔杖声望达到 1",
    "effects": [
     "flag ledger_copied",
     "item +yamina_copy"
    ],
    "result": [
     {
      "speaker": "雅米娜",
      "text": "抄吧。抄错一个数，我会知道的。"
     },
     "你一直抄到了后半夜。她让学徒来添了两次灯油，却没让他搬一把椅子来。"
    ],
    "goto": "a2_10"
   },
   {
    "text": "趁她添灯油抄下记录",
    "check": {
     "skill": "sleight",
     "dc": 14
    },
    "ok": {
     "text": "一共四页，两栏，你抄得比埃塔还快。等灯油添回来时，纸已经在你袖子里了。",
     "effects": [
      "flag ledger_copied",
      "item +yamina_copy"
     ],
     "goto": "a2_10"
    },
    "fail": {
     "text": "你抄到第三页时，灯亮了一点。她端着油壶就站在你身后，看了看你的字，放下油壶走了。你把第四页也抄完了。",
     "effects": [
      "flag ledger_copied",
      "item +yamina_copy",
      "rep wand -1"
     ],
     "goto": "a2_10"
    }
   },
   {
    "text": "合上账本，推回原位",
    "result": "雅米娜看着你把账本推回原位，没有挽留。你下楼时，外面的雨又下大了。",
    "goto": "a2_10"
   }
  ]
 },
 "a2_10": {
  "id": "a2_10",
  "title": "地窖",
  "art": "ev_forge",
  "loc": "卡斯托纳斯 · 旧巨龙锻炉下面",
  "text": [
   "卡斯托纳斯的雨下到半夜也没停。白天那本账的右下角有一行小字，你当时没看懂，写的是“佣兵饷，以罐计，锻炉后门”。{?flag.a2x_porter_tip:城门口那个脚夫跟你提过的，就是这扇门。|}{?flag.a2x_runner_saved:河滩上那个孩子说的，也是这扇门。|}",
   "旧巨龙锻炉早在兽人绿潮那年就毁了，龙头形的炉口塌了半边，后门的铁皮却是新换的。推门进去是一道向下的石阶，迎面一股药水味。",
   "第一层堆的全是海关没收来的自动机，一垛一垛码着，胳膊跟胳膊捆在一起，垛顶上落了一层灰。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "那一台我认识。它是七号线的，用的是 1811 年三月的料。一会儿从它旁边走过去，请别踩着它的手。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "垛脚那一台的肩上有你认得的铆印，那是七号线的锤子打的，其中有一颗还是你当年打歪的。"
   },
   {
    "if": "is.mechanim",
    "text": "垛里有一台，工位号只比你小一号，它的眼睛是关着的。"
   },
   "再往下一层有灯光，还听得见有人在报数。楼梯口拦着一道铁栅，上面的锁是新的。"
  ],
  "first": [
   "quest q_blood start"
  ],
  "choices": [
   {
    "text": "由礼拜三领路走旧暗道",
    "if": "party.middlesday && flag.m_impounded",
    "effects": [
     "flag a2x_cellar_quiet"
    ],
    "result": "第二垛后面那堵墙是空的，里面有暗道。礼拜三走在前面，脚步放得很轻，一点不像一台铁铸的机器在走路。",
    "goto": "a2_10b"
   },
   {
    "text": "在堆放的自动机后寻找暗门",
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
     "text": "第二垛后面的墙敲上去是空的。当年建城的巴尔加尔修的那些暗道，到今天也没人能画全。这一段的门轴，有人新上过油。",
     "effects": [
      "flag a2x_cellar_quiet"
     ],
     "goto": "a2_10b"
    },
    "fail": {
     "text": "你摸到的那扇“暗门”，其实是一台自动机的背板。这一摸，垛塌了半边，一条铁胳膊结结实实砸在你肩上。楼下的报数声停了。",
     "effects": [
      "hp -3"
     ],
     "goto": "a2_10b"
    }
   },
   {
    "text": "趁报数声掩住脚步，从栅缝钻过",
    "check": {
     "skill": "stealth",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "栅条之间的宽窄是照着成年人的肩膀定的，你们只好侧着身子挤。下面每报一个数，你们就挤过去一个。等最后一个人挤过来，下面刚好数到四十一。",
     "effects": [
      "flag a2x_cellar_quiet"
     ],
     "goto": "a2_10b"
    },
    "fail": {
     "text": "不知是谁的皮带扣挂在了栅条上，当的一声。只响了这一声，楼下已经有人在问了：“饷还没点完，谁在上面？”",
     "effects": [
      "hp -2"
     ],
     "goto": "a2_10b"
    }
   },
   {
    "text": "撬开拦路的栅门",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "锁还没撬开，合页先断了。你干脆把整扇铁栅端下来，靠在了墙上。楼下的人还在报数，报得很专心。",
     "goto": "a2_10b"
    },
    "fail": {
     "text": "铁栅倒下去那一声响，怕是连上城都听得见。楼下先有人喊了一句“饷还没点完”，紧跟着就是枪上膛的声音。",
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
   "地下二层是一间放血房，墙上贴着白瓷砖，和安卡迪亚兵站镇那间一样，只是铁床小了一号。躺在床上抽血的都是魔法领地的学徒，最大的才十六岁。法师的血能当魔晶用，血罐装满后用蜡封好推到门边，守城的佣兵排着队每人领两罐，这就是他们的军饷，领完再回城墙换岗。",
   "管事的系着白围裙，耳朵上别着一支铅笔，人人都叫他“大夫”。这时他正往账上记数，每记一笔，嘴里还要念一遍。",
   "第三张床上的女孩才十二岁，叫伊萨，是等着行王家巫师入列礼的那个孩子。外面雨下大了，就在这时，她的“溺亡”发作了。有洪裔血统的孩子都要过这一关，肺里会自己涨水。她两眼上翻，嘴角淌水，清亮的水一股接着一股。",
   {
    "speaker": "大夫",
    "text": "别碰她！这一关谁也替不了，得她自己熬。熬过来了就是洪裔，熬不过来，第三床就空出来了。{?flag.a2x_cellar_quiet:……你们是哪个连的？|你们下来的动静可不小。饷不归你们领。}"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "她肺里的水还在往上涨。把人侧过来，垫高，再按住，就能多撑一阵。我只要一分钟。这一分钟里，能不能别让人拿刀对着我？"
   },
   {
    "if": "is.god",
    "text": "这间屋里谁也伤不了你。可是第三张床上那个孩子，撑不到你把他们一个一个放倒。"
   }
  ],
  "first": [
   "codex c_floodborn"
  ],
  "choices": [
   {
    "text": "冲到第三张床前救伊萨",
    "if": "partysize >= 4",
    "combat": {
     "title": "放血房",
     "intro": "大夫把铅笔别回耳后，从围裙里掏出手术刀。门边等着领饷的佣兵也放下了罐子。",
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
       "desc": "先帮她缓过气，等她自己把水咳出来。成功时，本场战斗直接获胜。失败时，行动者受到 1d6 点钝击伤害。",
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
        "text": "她咳出了第一口水，接着又是一口，眼珠也转回来了。大夫把手术刀放下了。咳得出水的就是熬过来的洪裔，他不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又往下沉了半寸，水从鼻子里直往外冒。你正弯着腰，背后有人趁机给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "架上摆满易碎的玻璃管和陶罐。成功时，所有敌人受到 2d6 点挥砍伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸了下去，蓝血溅了一墙。领饷的佣兵先心疼得叫了一声，然后才想起来喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子是用铆钉铆死在地上的，纹丝没动，倒是你自己的脚骨响了一声。",
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
    "text": "冲到第三张床前救伊萨",
    "if": "partysize == 3",
    "combat": {
     "title": "放血房",
     "intro": "大夫把铅笔别回耳后，从围裙里掏出手术刀。门边等着领饷的佣兵也放下了罐子。",
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
       "desc": "先帮她缓过气，等她自己把水咳出来。成功时，本场战斗直接获胜。失败时，行动者受到 1d6 点钝击伤害。",
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
        "text": "她咳出了第一口水，接着又是一口，眼珠也转回来了。大夫把手术刀放下了。咳得出水的就是熬过来的洪裔，他不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又往下沉了半寸，水从鼻子里直往外冒。你正弯着腰，背后有人趁机给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "架上摆满易碎的玻璃管和陶罐。成功时，所有敌人受到 2d6 点挥砍伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸了下去，蓝血溅了一墙。领饷的佣兵先心疼得叫了一声，然后才想起来喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子是用铆钉铆死在地上的，纹丝没动，倒是你自己的脚骨响了一声。",
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
    "text": "冲到第三张床前救伊萨",
    "if": "partysize <= 2",
    "combat": {
     "title": "放血房",
     "intro": "大夫把铅笔别回耳后，从围裙里掏出手术刀。门边等着领饷的佣兵也放下了罐子。",
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
       "desc": "先帮她缓过气，等她自己把水咳出来。成功时，本场战斗直接获胜。失败时，行动者受到 1d6 点钝击伤害。",
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
        "text": "她咳出了第一口水，接着又是一口，眼珠也转回来了。大夫把手术刀放下了。咳得出水的就是熬过来的洪裔，他不敢碰。",
        "effects": [
         "flag isa_owes_company",
         "rep wand +1",
         "approval guilhem +1"
        ],
        "end": "win"
       },
       "fail": {
        "text": "她又往下沉了半寸，水从鼻子里直往外冒。你正弯着腰，背后有人趁机给了你一下。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "rack",
       "name": "踹翻放血架",
       "desc": "架上摆满易碎的玻璃管和陶罐。成功时，所有敌人受到 2d6 点挥砍伤害。失败时，行动者受到 1d4 点钝击伤害。",
       "check": {
        "skill": "athletics",
        "dc": 13
       },
       "success": {
        "text": "架子带着四十来根玻璃管砸了下去，蓝血溅了一墙。领饷的佣兵先心疼得叫了一声，然后才想起来喊疼。",
        "dmgAll": "2d6",
        "type": "slashing"
       },
       "fail": {
        "text": "架子是用铆钉铆死在地上的，纹丝没动，倒是你自己的脚骨响了一声。",
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
    "text": "取出她肺中的积水",
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
    "result": "你把手放在她胸口，往上一提，水就整个出来了，清清的一捧，托在手里还是温的。大夫的铅笔从耳朵上掉了下来。佣兵们纷纷放下罐子，有两个当场跪下了。剩下的都在看那两个。",
    "goto": "a2_10d"
   },
   {
    "text": "退回塔上，叫醒女导师长雅米娜来救伊萨",
    "effects": [
     "flag yamina_spent"
    ],
    "result": "一百九十级楼梯，你一口气跑了上去。雅米娜早就醒了，披着一件旧袍子站在楼梯口，没问出了什么事，只问了一句：“第几床？”",
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
    "text": "伊萨睁开了眼，一声也没咳。那场溺亡她没有自己熬，是你替她拿走的。天还没亮，八座塔的钟就一齐敲响了，魔法领地宣布，{god}从此是本城的守护者。到了第三天，安卡迪亚发了动员令。"
   },
   {
    "if": "flag.isa_owes_company && !flag.demesne_patron",
    "text": "伊萨是自己坐起来的，吐了有半盆水，开口第一句话就问是谁按的她。{?party.narwen:娜尔雯说，是公司。|你说，是公司。}她点点头，把这两个字又念了一遍，像是要刻进心里。"
   },
   {
    "if": "flag.yamina_spent && !flag.isa_owes_company",
    "text": "雅米娜独自下了一百九十级台阶，又走下两层地窖。她把手按在伊萨胸口，一刻钟后，水才慢慢从女孩口中退回去。做完这一切，她在第四张床边坐下。你还是第一次见她坐着。"
   },
   {
    "if": "!flag.a2x_cellar_lost",
    "text": "大夫的账本到了你手里，一共四十一页，一页记一个学徒，抽了多少品脱，哪天抽的，领罐子的佣兵是哪个连的，都写得明明白白。每一页的页脚都有大夫的签名，字很小，一页也没漏。"
   },
   {
    "if": "flag.demesne_patron && party.narwen",
    "speaker": "娜尔雯",
    "text": "上次有人当场把水从肺里拿出来，是……没有上次，我翻过了。（她把本子合上。）这一笔该记在哪一栏，我不知道。"
   },
   {
    "if": "flag.a2x_cellar_lost && party.middlesday",
    "text": "你们被佣兵架着胳膊赶出了门，账本没能带出来。"
   },
   {
    "if": "flag.a2x_cellar_lost && party.middlesday",
    "speaker": "礼拜三",
    "text": "一共四十一页，我全看过了，都在我这里。埃塔那里有纸吗？"
   },
   {
    "if": "flag.a2x_cellar_lost && !party.middlesday",
    "text": "你们是被佣兵架出门的，好在账本趁乱带了出来，封皮上被踩了半个靴印，四十一页一页没少。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "城墙上那些人领的原来是这个。欠条我领过，发了霉的面我也领过，就是没领过小孩的血。这一笔，我替他们记着。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "拿学徒的血付佣兵的饷，佣兵守的又是教学徒的塔。这在条例上叫“自筹经费”。这一栏我也填过，不过我填的是卖梨。"
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
   "blurb": "店里赊账的簿子比货架还厚。见你肯付现钱，掌柜就愿意多送一截绷带。",
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
   "从矮人之路接出来的这条铁路是银行团出钱修的，只铺了十一里，到轨头这里就停了。枕木码在路基旁，镐一把挨一把插在枕木缝里，插得整整齐齐。工人罢工了。",
   "工棚里住的是林墙兽人、半兽人和地精，有一节棚车改成了科琳教的小堂。他们的工钱已经欠了三周。坡上扎着安卡迪亚国民卫队的帐篷，说是照“护路协定”开来的，帐篷旁边还停着一台蒸汽牵引机，锅炉一直没熄火。",
   "眼下三方各站一处。银行团的监工守着账房的门，卫队的上尉在看怀表。工棚这边出来说话的是个兽人女人，缺了半只耳朵，手里没拿家伙。",
   {
    "speaker": "缺耳朵的女人",
    "text": "三周了。镐我们是放下了，可没扔。你是银行团的人，还是光来看看的？"
   },
   {
    "if": "party.bura",
    "text": "布拉的表侄就在人群中，如今比她还高出半个头。两人隔着人群对视了一眼，各自把目光移开了。"
   }
  ],
  "first": [
   "codex c_navvies"
  ],
  "choices": [
   {
    "text": "核查账房的工资记录",
    "once": true,
    "check": {
     "skill": "investigation",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "账上有一笔“右翼勘测费”，是三周前支出去的，数目正好是全棚的工钱。可右翼根本没有什么勘测队，右翼就是一面崖。工钱是被监工挪走了。",
     "effects": [
      "flag wages_found"
     ]
    },
    "fail": {
     "text": "监工把账本抱在怀里，只肯让你看封面。你跟他磨了一阵，他索性写了一封投诉信，当着你的面封了口。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "去棚车小堂参加晚祷",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "rep union +1"
    ],
    "result": "小堂里没有神像，只挂着一面红布，墙上钉着一把旧镐。你念你的，他们念他们的，念到最后一句倒是齐的。出来时，有人给你让了路。"
   },
   {
    "text": "召集三方谈判，要求补薪并让卫队撤回坡上",
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
     "text": "你一条一条摆给他们听，{?flag.wages_found:钱在哪里，是谁支走的，|}工钱几时发，卫队退到哪条线。缺耳朵的女人听完，朝身后说了一句林墙话。镐还是没人去动，可人都往后退了三步，把账房的门让了出来。",
     "effects": [
      "flag strike_settled",
      "rep union +2",
      "approval bura +1"
     ],
     "goto": "a2_12b"
    },
    "fail": {
     "text": "你刚说到“请大家体谅银行团的难处”，后排就有人笑出了声。上尉把怀表揣回了兜里：“谈完了？那今晚就照协定办。”",
     "goto": "a2_12"
    }
   },
   {
    "text": "向监工宣读合同第九条：工资须优先偿付",
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
     "text": "第九条你念了两遍，第二遍是念给上尉听的。监工翻了翻自己手里那份合同，第九条果然在。工钱当晚就点清了，定在第二天一早发。",
     "effects": [
      "flag strike_settled",
      "rep union +2",
      "approval bura +1"
     ],
     "goto": "a2_12b"
    },
    "fail": {
     "text": "监工说第九条他认，可银行的钱没到，他拿什么认。上尉啪地合上怀表：“条文你们慢慢对，今晚照协定办。”",
     "goto": "a2_12"
    }
   },
   {
    "text": "用公司资金垫付三周欠薪",
    "tag": "盾",
    "if": "faction == 'shield'",
    "cost": {
     "gold": 150
    },
    "effects": [
     "flag strike_settled",
     "rep union +2"
    ],
    "result": "埃塔一边点钱，一边念叨，念的全是公司的应收款。钱发到最后一个人手上时，工棚里有人把镐从枕木缝里拔了出来。",
    "goto": "a2_12b"
   },
   {
    "text": "当着三方念出“右翼勘测费”的账目",
    "tag": "灯",
    "if": "faction == 'lantern' && flag.wages_found",
    "effects": [
     "flag strike_settled",
     "rep union +2",
     "rep charter -1"
    ],
    "result": "你把日期、数目和签字的人一样一样念了出来。监工的脸一下白了，上尉合上怀表，说这一笔不归他管。工钱当晚就从监工的私箱里补了出来，定在第二天一早发。",
    "goto": "a2_12b"
   },
   {
    "text": "退回工程车，交银行团和卫队处理",
    "effects": [
     "flag strike_broken",
     "rep union -2",
     "rep charter +1",
     "approval bura -2"
    ],
    "result": "卫队是半夜进的工棚。你在工程车里听了一个小时。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12": {
  "id": "a2_12",
  "title": "机车库",
  "text": [
   "卫队所谓的“照协定办”，就是半夜两点动手清场。牵引机先动，拖着一节装沙袋的平板车朝工棚压过来，后面跟着两排士兵，掷弹兵手腕上的火绳一点一点红着。",
   "工棚的人都退进了机车库，那是座还没盖完的砖棚，里面有两条检修沟，还停着一台待修的调车机。棚车小堂就停在库门口的岔线上，里面挤满了家眷。有孩子在哭，被大人捂住了嘴。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "前面两排兵，十来条枪，外加一台铁家伙。后面是一车小孩。我站前面。"
   },
   {
    "if": "is.god",
    "text": "那台牵引机没长眼睛，认不出你是谁。当兵的认得出，可当兵的后面有军官，军官后面还有协定。"
   }
  ],
  "choices": [
   {
    "text": "守住机车库大门，挡住卫队",
    "if": "partysize >= 4",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞破库门，汽笛长鸣。掷弹兵一起举起了手腕上的火绳。",
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
       "desc": "牵引机后面挂着一节装满沙袋的平板车，这段轨道正在下坡。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去。牵引机一下少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住。你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连下面的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "锅炉的蒸汽一旦放出来，车库里的人和岔线上的小堂都会被波及。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库。对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下高了起来。",
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
    "text": "守住机车库大门，挡住卫队",
    "if": "partysize == 3",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞破库门，汽笛长鸣。掷弹兵一起举起了手腕上的火绳。",
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
       "desc": "牵引机后面挂着一节装满沙袋的平板车，这段轨道正在下坡。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去。牵引机一下少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住。你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连下面的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "锅炉的蒸汽一旦放出来，车库里的人和岔线上的小堂都会被波及。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库。对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下高了起来。",
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
    "text": "守住机车库大门，挡住卫队",
    "if": "partysize <= 2",
    "combat": {
     "title": "机车库",
     "noAwe": true,
     "intro": "牵引机撞开库门，紧跟着是一声长长的汽笛。",
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
       "desc": "牵引机后面挂着一节装满沙袋的平板车，这段轨道正在下坡。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去。牵引机一下少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住。你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连下面的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "锅炉的蒸汽一旦放出来，车库里的人和岔线上的小堂都会被波及。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库。对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下高了起来。",
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
    "text": "独自站到牵引机前拦车",
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
     "text": "牵引机在你面前三步远的地方刹住了。开车的是个当兵的，当兵的也不想轧人。上尉喊了两遍“继续”，第三遍还没喊出口，你身后又站出来四十个人。",
     "effects": [
      "flag strike_held",
      "rep union +2",
      "rep republic -1"
     ],
     "goto": "a2_12c"
    },
    "fail": {
     "text": "开车的没刹。你只好自己滚进了检修沟，肩膀先着的地，牵引机就从沟沿上轧了过去。",
     "effects": [
      "hp -6"
     ]
    }
   },
   {
    "text": "避开交战，破开小堂后门护送家属撤往山上",
    "effects": [
     "flag strike_broken",
     "rep union -2",
     "rep charter +1",
     "approval bura -2"
    ],
    "result": "你们带出去三十来个人，一个也没少。回头再看，机车库的灯灭了一阵又亮了，亮起来时，门口已经换成卫队的人站岗。",
    "goto": "a2_12c"
   }
  ]
 },
 "a2_12b": {
  "id": "a2_12b",
  "title": "钱箱",
  "text": [
   "工钱定在明早发。钱箱今晚放在机车库里，上了两把锁，公司秘书埃塔收一把钥匙，缺耳朵的女人收另一把。",
   "半夜两点，坡上那台牵引机动了，连灯都没点。开车的人穿的是便衣，脚上却是军靴。他们是冲着钱箱来的。工钱要是再丢一次，工棚就得再停一次工，“护路协定”就又用得上了。",
   "棚车小堂就停在库门口的岔线上，守夜的家眷都睡在里面。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "来了一台机器，人数我数不清，他们没点灯。那台机器里没有芯核，只有一张打孔卡。我问过它了，它不会停。"
   },
   {
    "if": "is.god",
    "text": "那台牵引机没长眼睛，认不出你是谁。穿便衣的那些人认得出，可他们领的是上尉另外发的一份饷。"
   }
  ],
  "choices": [
   {
    "text": "守住钱箱，不让他们抢走工钱",
    "if": "partysize >= 4",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没有亮灯，径直冲下斜坡。跳车的人穿着便服，落地时却响起军靴的声音。",
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
       "desc": "牵引机后面挂着一节装满沙袋的平板车，这段轨道正在下坡。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去。牵引机一下少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住。你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连下面的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "锅炉的蒸汽一旦放出来，车库里的人和岔线上的小堂都会被波及。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库。对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下高了起来。",
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
    "text": "守住钱箱，不让他们抢走工钱",
    "if": "partysize == 3",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没有亮灯，径直冲下斜坡。跳车的人穿着便服，落地时却响起军靴的声音。",
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
       "desc": "牵引机后面挂着一节装满沙袋的平板车，这段轨道正在下坡。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去。牵引机一下少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得你松了手。活塞随即擦过你刚才蹲下的位置，卷走一截袖子，也蹭破了下面的皮肉。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "锅炉的蒸汽一旦放出来，车库里的人和岔线上的小堂都会被波及。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库。对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下高了起来。",
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
    "text": "守住钱箱，不让他们抢走工钱",
    "if": "partysize <= 2",
    "combat": {
     "title": "钱箱",
     "noAwe": true,
     "intro": "牵引机没有亮灯，径直冲下斜坡。跳车的人穿着便服，落地时却响起军靴的声音。",
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
       "desc": "牵引机后面挂着一节装满沙袋的平板车，这段轨道正在下坡。成功时，所有敌人受到 2d8 点钝击伤害。失败时，行动者受到 1d6 点钝击伤害。",
       "check": {
        "skill": "sleight",
        "dc": 14,
        "adv": "is.artificer"
       },
       "success": {
        "text": "销子一拔，四吨沙袋顺着坡就往回溜，从他们自己的队列当中犁了过去。牵引机一下少了分量，轮子空转了半圈。",
        "dmgAll": "2d8",
        "type": "bludgeoning"
       },
       "fail": {
        "text": "销子烫得握不住。你刚把手缩回来，活塞就从你方才蹲的地方扫了过去，带走了你一块袖子，连下面的皮也带走了。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "vent",
       "name": "放锅炉的汽",
       "desc": "锅炉的蒸汽一旦放出来，车库里的人和岔线上的小堂都会被波及。成功时，所有敌人受到 3d6 点火焰伤害。失败时，行动者受到 1d6 点火焰伤害。",
       "check": {
        "skill": "athletics",
        "dc": 14
       },
       "success": {
        "text": "白汽灌满了半座车库。对面的人在喊，你自己人也在喊，岔线上那节棚车里的哭声一下高了起来。",
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
    "text": "交出钱箱，掩护小堂里的人撤离",
    "effects": [
     "gold -100",
     "rep union -1"
    ],
    "result": "他们拿了箱子就走，一枪也没放。第二天的工钱是埃塔从公司账上垫的，她一句抱怨也没有。",
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
    "text": "天亮时，卫队退回了坡上，那台牵引机歪在检修沟里，锅炉已经凉了。工棚的人没有欢呼，只是排着队去领镐，领完就坐在枕木上等工钱。到了中午，银行团的电报来了，上面只有三个字：“款即汇。”"
   },
   {
    "if": "flag.strike_broken",
    "text": "天亮时，镐又回到了每个人手里，不过是卫队发的，发一把就记一个名字。棚车小堂那面红布被人扯了下来，叠得整整齐齐，放在门口的台阶上。"
   },
   {
    "if": "flag.strike_settled",
    "text": "工钱是早上七点发的，缺耳朵的女人唱名，埃塔数钱。到了九点钟，铺轨的锤声响了起来，隔着山都听得见。坡上的帐篷没撤，上尉说协定上没写要撤。"
   },
   {
    "if": "flag.a2x_scalded",
    "text": "小堂那节车里烫伤了六个人，其中两个是孩子，{?party.narwen:娜尔雯给他们裹伤，裹了一上午。|你们把随队带的药膏全拿了出来。}没有人骂你，可也没有人跟你说话。"
   },
   {
    "if": "party.bura && flag.strike_broken",
    "speaker": "布拉",
    "text": "镐上还记名字。我们那时候记的是番号，发东西的人也说是为了我们好。"
   },
   {
    "if": "party.bura && !flag.strike_broken",
    "text": "布拉的表侄给她端来一碗麦糊，里面掺了肉皮。她吃完把碗还回去，说了一句林墙话，这是她今天说的唯一一句。表侄听了直笑，可没给你们翻译。"
   },
   "等你们在工程车里醒来，已经是中午了。"
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
   "邮件随枕木一道抵达。银行团每季寄来一份新股东名册，往常公司秘书埃塔都会核对到末页。这次翻到第十四页，她的手停了。",
   {
    "speaker": "埃塔",
    "text": "“东坎诺辅助晶源信托”，专做血的买卖。它新进来一个股东，走的是代持账户，尾号四七一。1810 年把公司旧债买走的就是这个账户，也就是我们那位不露面的合伙人。他入了血的股。"
   },
   {
    "if": "flag.midreport_blood",
    "text": "她把你那份例行报告的存根拿过来，跟名册并排放在一起。报告是十四号寄出去的，入股的日子是二十三号。"
   },
   {
    "if": "flag.midreport_blood",
    "speaker": "埃塔",
    "text": "九天。信走到安本科斯特就得六天。他是读了你的报告才入的股。这个人十三年没迟过一次款，可我不喜欢他。"
   },
   {
    "if": "!flag.midreport_blood",
    "text": "入股的日子比兵站镇那个初七晚了一个月。你那份报告里一个血字也没提，他是从银行那头听来的。"
   },
   {
    "if": "!flag.midreport_blood",
    "speaker": "埃塔",
    "text": "晚了一个月，照他的做派，这就算慢的了。这个人十三年没迟过一次款，可我不喜欢他。"
   },
   {
    "speaker": "别摇",
    "text": "替你们出钱的那位，这是买了一口井。在我老家，这叫打听水有多深。"
   }
  ],
  "first": [
   "quest q_partner stage 2",
   "item +share_register"
  ],
  "choices": [
   {
    "text": "追查尾号四七一的代持账户，找出合伙人是谁",
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
     "text": "代持人是一家事务所，事务所的账单都寄到陆军部三楼，收件人是一位将军的副官。三年前，就在那层楼上，有位将军问过你，哪一区的土几年不施术就会板结。合伙人就是德希尔德将军。",
     "effects": [
      "flag partner_is_general"
     ],
     "goto": "a2_14"
    },
    "fail": {
     "text": "回电花了十五个金冠，上面说该账户“在部里有人”。至于是哪个部、什么人，事务所劝你不要再问了。",
     "effects": [
      "gold -15"
     ],
     "goto": "a2_14"
    }
   },
   {
    "text": "拍电报问合伙人，入股是否依据公司报告",
    "effects": [
     "rep partner -1"
    ],
    "result": "回电隔天就到了，是埃塔念的：“是。报告甚佳。请继续。”念完，她把电报纸翻过来看了看背面，背面什么也没有。",
    "goto": "a2_14"
   }
  ]
 },
 "a2_14": {
  "id": "a2_14",
  "title": "血账",
  "text": [
   "公司铁箱的盖子开着，里面放着卡斯托纳斯地窖里那本血账，四十一页，记的是魔法领地抽学徒的血给佣兵发饷。{?flag.ancardia_ledger:旁边是安卡迪亚军需处的流水账，每个月初八都有一个缩写。|}",
   {
    "speaker": "埃塔",
    "text": "两本账。这一本四十一页，一页一个学徒。{?flag.ancardia_ledger:那一本每个月差一成，差的数都记在初八。|另一本在兵站镇，我们手里没有。}两国都在抽法师的血，都知道对方也在干，可谁也不肯先开口，因为先开口的那一家，得把自己那本也交出来。"
   },
   "这条铁路要是修通了，装血的罐子就用不着脚夫一趟一趟背了，可以成车成车地运。{?flag.a2x_saw_bottling:兵站镇后屋那些木箱，尺寸就是照着棚车打的。|}",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "送去登报。两国都登。孩子们的名字得删，连队番号一个也别删。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "真登出去，报上的标题不会写“血爵”，只会写“法师”。读者分不清这两样，我见识过他们是怎么读报的。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "四十一页我都核过了，品脱数加得上，账是准的。准的东西，放在谁手里都一样准。你想好交给谁了吗？"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "第十九页和第三十页记的是同一个人，只是床号不一样。他们把一个人记成了两个数。这种记法我见过。"
   }
  ],
  "first": [
   "quest q_blood done"
  ],
  "choices": [
   {
    "text": "把账目交给史家会登报，公开两国抽血的事",
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
    "result": "史家会在玛瑙之门山下有一间分号。稿子过了十天见报，标题叫《东坎诺的品脱》。{?flag.ancardia_ledger:奥托的缩写就印在第二栏。|}{?flag.a2x_oto_deal:那张十二金冠的收据也印上去了，上面有公司的名字。|}",
    "goto": "a2_15"
   },
   {
    "text": "把一国的账卖给另一国",
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
    "result": "安卡迪亚的军需官出四百，买地窖的那本账。{?flag.ancardia_ledger:魔法领地的管事出二百，买军需处的那一本。|另外二百是他后来添的，买的是你们不抄第二份。}两边付的都是现钱，谁也没要收据。",
    "goto": "a2_15"
   },
   {
    "text": "焚毁账目",
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
    "text": "只向合伙人报告",
    "effects": [
     "flag blood_reported",
     "rep partner +1"
    ],
    "result": "埃塔抄了一份摘要，一共三页，挂号寄走了。回执上签收的是那位副官，字写得很用力，从纸背都摸得出来。",
    "goto": "a2_15"
   },
   {
    "text": "交埃塔锁入铁箱",
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
   "棚车小堂的红布下面，几张桌子拼在一起，摊着线路图。铁路往下怎么走，图上画了两条线：一条红线从卡斯托纳斯的第三、第四座塔之间穿城而过，另一条从南面绕经安卡迪亚。团务会得选定一条，由你签字，签名栏仍旧只留了两指宽。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "{?flag.strike_broken:（她是站着说的。）|}哪条都别签。这十一里路是拿三周的欠饷铺出来的。再铺一百里，欠的是谁的饷，我现在就算得出来。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "不能修。那座城是眼下唯一还教得出法师学生的地方。铁路从两座塔中间过，图纸上只占四丈宽，可实际占掉的是整座城。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "穿城。地窖里还扣着四十一台机械人。铁路只要进了城，海关那张石桌上的条例就得改。我只知道这一个办法。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "穿城吧。教廷在那座城里连一间礼拜堂都没有，问过三次了。等路通了，第四次的回信大概会长一点。这只是我的理由，你得有你自己的。"
   },
   {
    "speaker": "埃塔",
    "text": "不修，银行就倒。违约金够把公司卖两次，可第二次没人买。我不投票，我只报数。"
   },
   {
    "speaker": "别摇",
    "text": "这条路通海吗？不通。那你们吵的是哪一段，我听不出有什么两样。我问完了。你们要是答不上来，就算你们欠我半回。"
   },
   "两票对两票，埃塔把笔递给你。",
   {
    "if": "is.god",
    "text": "缺耳朵的女人在车门口站着。她听说你一夜之间就能把线铺完，想先问你一句：没干的活，还算不算工钱。"
   }
  ],
  "choices": [
   {
    "text": "在一夜内铺完整条铁路",
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
    "result": "天亮时，铁轨已经铺在那里了，一百四十里，枕木上连露水都没沾。两国的兵一早醒来，发现凭空多了一条谁也没签过字的铁路，都开过去抢。工棚的人拿着镐站在路基上，已经没活可干了。{?party.bura:布拉从枕木上拔起一根道钉，掂了掂，又插了回去。|}线往哪边接，还是得你来签。"
   },
   {
    "text": "签字选穿城线，让铁路从两座塔之间过",
    "effects": [
     "flag line_castonath",
     "world tears -1",
     "rep charter +2",
     "rep wand -2",
     "approval bura -1",
     "approval guilhem -1",
     "quest q_right_of_way done"
    ],
    "result": "你在那两指宽的栏里写下“穿城”两个字，签了名。{?party.guilhem:吉列姆摘下眼镜，也没擦，又戴了回去。|}埃塔吹干墨水，在账页上写下“路权，已认定”。",
    "goto": "a2_16"
   },
   {
    "text": "签字选安卡迪亚绕行线",
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
    "result": "你写了“南线”两个字，签了名。奥托的贺电比银行团的回电还早到半天，第一句就问站台修多长。他要停得下四十节的兵车。",
    "goto": "a2_16"
   },
   {
    "text": "拒绝签字，停建铁路",
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
    "result": "{?flag.clause_force_majeure:你引的是第十一页上那一条：罢工、战事，都算不可抗力。银行团的律师读了三遍，没找着漏洞。|合同上没有留退路。三百七十七年里公司第一次毁约，埃塔往账上写这一行时，特地换了一支笔。}{?flag.bank_thin:公司的存款，她上个月就取出来了。|阿斯拉银行停兑的那天，公司还有一百五十金冠存在里面。}",
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
   "泪落月，还是在第三座塔顶，长桌也还是那一张。{?flag.yamina_spent:这次桌边多了一把椅子，女导师长雅米娜就坐在上面，满屋子没人敢朝那把椅子看。|女导师长雅米娜还站在老地方。}她左边是第四代维纳克沃德领主，四十来岁，指甲剪得很短。右边是伊萨，坐在一只书箱上，两只脚够不着地。",
   "雅米娜备了三样东西：记着塔下四百一十箱旧魔晶的库存单、供仪式使用的铜盆，以及写给吉列姆的一封信。魔晶是 1810 年以前攒的，信尚未封口。",
   {
    "speaker": "雅米娜",
    "text": "{?flag.line_castonath:铁路你们签了，要从我的第三席和第四席中间过。|}{?flag.line_ancardia:铁路绕了南边，兵车会比你们的测量队快。|}窖藏，这孩子，还有你们那位变化师，一共三件事，今天都得办完。年轻人，我没有第二个雨季了。"
   },
   {
    "if": "flag.isa_owes_company && !flag.demesne_patron",
    "text": "伊萨朝你们点点头，点得很郑重。她记着自己欠你们一回。"
   },
   {
    "if": "is.god",
    "speaker": "雅米娜",
    "text": "每道咒的产出，你给我报个数，我好往账上填。“够强的法师就是神”，这句话我们从前写过，后来又改了口。"
   }
  ],
  "choices": [
   {
    "text": "建议三方各持一印封存魔晶",
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
     "text": "领主一连驳了四条，正要驳第五条，雅米娜抬手把他止住了：“三枚印。我那一枚，传给这孩子。”火漆是当场化的，四百一十箱，一直封到半夜。",
     "effects": [
      "flag hoard_sealed",
      "world tears +1",
      "rep wand +1"
     ],
     "goto": "a2_16b"
    },
    "fail": {
     "text": "维纳克沃德领主问，教会那枚印凭什么给。你答了三条，他驳了四条。{?flag.line_ancardia:后来窖藏是兵车到的那天搬走的，四百一十箱，哪一枚印也没用上。|窖藏还是原样锁着，钥匙也还挂在雅米娜一个人的腰上。}",
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
    "text": "拟定三印封存协议，一式三份交各方",
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
     "text": "一共七条，你写得很短，每条只占一行。领主挑了半个钟头的毛病，最后只改掉了一个逗号。雅米娜看完说：“比我们自己的章程写得还清楚。”火漆是当场化的，四百一十箱，一直封到半夜。",
     "effects": [
      "flag hoard_sealed",
      "world tears +1",
      "rep wand +1"
     ],
     "goto": "a2_16b"
    },
    "fail": {
     "text": "文本挑不出毛病，领主挑的是执印的人。他问教会那一枚凭什么给。{?flag.line_ancardia:后来窖藏是兵车到的那天搬走的，四百一十箱。你那七条一条也没用上。|窖藏还是原样锁着，你那三份文本，她留下了一份。}",
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
    "text": "劝她把魔晶卖给银行团造破魔弹，拿钱结清佣兵军饷",
    "effects": [
     "flag hoard_milled",
     "world tears -1",
     "rep charter +2",
     "gold +500",
     "approval guilhem -3"
    ],
    "result": "雅米娜把你报的数听完，说：“四百一十箱，换城墙上的人从此不用再领罐子。”她在清单末尾签了字，把笔放下的时候放得很轻。银行团给的经手费是五百金冠，汇到了公司账上。{?party.guilhem:吉列姆从头到尾都看着窗外。|}",
    "goto": "a2_16b"
   },
   {
    "text": "不干预，由她决定",
    "effects": [
     {
      "if": "flag.line_ancardia",
      "then": [
       "flag hoard_milled",
       "world tears -1"
      ]
     }
    ],
    "result": "{?flag.line_ancardia:你没有开口。窖藏是兵车到的那天搬走的，四百一十箱，押车的是奥托的人，收条上开的是“辅助晶源”。|你没有开口。她把清单折起来，压回了砚台下，那串钥匙还挂在她一个人的腰上。}",
    "goto": "a2_16b"
   }
  ]
 },
 "a2_16b": {
  "id": "a2_16b",
  "title": "铜盆",
  "text": [
   "第二件事是那只铜盆。王家巫师入列要先过铜盆这道礼，过得去才算得上一席。马德莱茵女皇在位时一个岁数一个岁数地试过，行礼最合适的年纪是十二三岁。伊萨今年十二，到下个雨季就十三了。",
   {
    "speaker": "伊萨",
    "text": "行礼到底疼不疼，谁也不肯告诉我。他们说，上一个问这话的人如今坐着第二席。可第二席明明是空的。"
   },
   {
    "if": "flag.isa_owes_company",
    "speaker": "伊萨",
    "text": "我欠你们一回。行礼的时候要是你们在，我就不怕了。记上吧，这算我又欠了半回。"
   },
   {
    "speaker": "维纳克沃德领主",
    "text": "这道礼要两个人主持，再要一个人在旁边护着。我们这边只凑得出两个半：我，女导师长，再加上她今天剩下的那点力气。贵公司要是肯出个人手，就凑齐了。"
   },
   {
    "if": "flag.demesne_patron",
    "text": "铜盆里的水一见你，自己起了一圈纹。领主皱起了眉头。这孩子的溺亡不是自己熬过去的，这道礼认不认她，他没有把握。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "护着的那个人我来当。催生术的圈我站过四百次，这个不过是小了一号。（他想了想。）不过小一号的我一次也没站过，这话得说在前面。"
   }
  ],
  "choices": [
   {
    "text": "同意今天行礼，公司出一个人在旁护持",
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
     "text": "水没过了她的手腕，先变成蓝的，又变回了清的。伊萨从头到尾一声没出，礼行完了才问能不能坐下。领主把名册翻到第二席，写上了她的名字。八个席位，如今还空着五个。",
     "effects": [
      "flag rite_given"
     ],
     "goto": "a2_16c"
    },
    "fail": {
     "text": "水刚没过手腕就浑了，领主一把将她的手提了出来。人没事，只是指尖麻了三天。名册没有动，八个席位还是空着六个。",
     "effects": [
      "rep wand -1"
     ],
     "goto": "a2_16c"
    }
   },
   {
    "text": "劝他们把入列礼推迟到下个雨季",
    "effects": [
     {
      "if": "party.narwen",
      "then": [
       "approval narwen +1"
      ]
     }
    ],
    "result": "雅米娜看了你一会儿，说：“那就等。我教了她两年怎么等，不差这一年。”伊萨从书箱上滑下来，把铜盆抱走了，抱得稳稳当当。",
    "goto": "a2_16c"
   }
  ]
 },
 "a2_16c": {
  "id": "a2_16c",
  "title": "那封信",
  "text": [
   "第三件事是那封信。雅米娜没有念，只把它推到桌子中央，亲口把信上的意思说了一遍：她请吉列姆留下来。空着的第五座塔归他，学生先教伊萨，以后收谁由他挑，头衔是“王家巫师第五席护席”。",
   {
    "if": "party.guilhem",
    "text": "吉列姆把信读出了声，读到“护席”两个字就停住了，摘下眼镜，拿袖口擦了起来。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "共和国给过我的，是一张表，半个月的咖啡票，还有一个“三等”。这上面写的是一座塔。"
   },
   {
    "if": "party.guilhem",
    "text": "他抬起头看着你，信还捏在手里，眼镜也没戴回去。"
   },
   {
    "if": "!party.guilhem",
    "text": "信是写给吉列姆的，他人不在这里，埃塔就把信收进了铁箱，在收条上写了“代收，待转”四个字。雅米娜看着她写完，说矮人的字比王家巫师的整齐。这一点三百年都没变过。"
   }
  ],
  "choices": [
   {
    "text": "劝吉列姆留在公司：公司给不了塔，只有一张桌子和几个爱吵架的人",
    "if": "party.guilhem",
    "effects": [
     "approval guilhem +1"
    ],
    "goto": "a2_16d"
   },
   {
    "text": "劝吉列姆接下这座塔：这个机会他等了二十年",
    "if": "party.guilhem",
    "effects": [
     "approval guilhem -1"
    ],
    "goto": "a2_16d"
   },
   {
    "text": "由吉列姆自己作决定",
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
    "text": "吉列姆想了一整夜，早上来找你时，眼镜擦得干干净净。辞呈是填在公司的表上的，事由那一栏他写了两遍才写满。{?flag.a2x_left_to_him:他说，多亏你昨天没开口，这份辞呈他才写得下去。|}"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "speaker": "吉列姆",
    "text": "{?flag.hoard_milled:四百一十箱都磨成子弹了。|}{?flag.line_castonath:铁路要从第三席和第四席中间过。|}这地方再过十年，说不定就没了。可我要是不留下，它这十年里连一个人也教不出来。你别留我，第四十一款管不到这里。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "吉列姆把公司钥匙留在埃塔桌上，提箱登上第五座塔。一百九十级台阶，他中途歇了两回。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆想了一整夜。到了早上，回信已经写好，只有三行，他念给你听。"
   },
   {
    "if": "party.guilhem && flag.a2x_left_to_him",
    "speaker": "吉列姆",
    "text": "念之前我先说一句：昨天你一个字也没说，谢谢你。"
   },
   {
    "if": "party.guilhem",
    "cls": "letter",
    "text": "“承蒙厚意。本人已有职守。依《国家变化师服务条例》第四十一款，在职者不得兼任教席。”"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "那一款从 1820 年起就管不着我了，我辞过职，这她也知道。{?flag.skiplist_defied:梨林那四十亩地是违了令才施的术，我得跟着违令的人走到头。|}{?flag.hoard_sealed:窖藏封住了，那孩子有东西可学，用不着我。|}所以这只是个体面的借口，我是想留在公司。这样两边的面子都保住了。"
   },
   {
    "if": "party.guilhem",
    "text": "信是他自己送上去的。下来时，他口袋里多了一样东西，是伊萨抄给他的一页《入门八式》，字写得很大。"
   },
   {
    "if": "!party.guilhem && !flag.guilhem_stayed",
    "text": "那封信还在铁箱里躺着。伊萨下楼送你们，一直送到第一百级，问了一句那位变化师长什么样。你说，戴眼镜，填表的时候爱念出声。"
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
   "卡斯托纳斯还没通电报。下城石屋里的邮局每周二、周六各发一班邮车，信到安本科斯特要九天。",
   "又该给合伙人写报告了，这是第二份。埃塔把这一年的存根摊在邮局的长凳上，有底片的收条，有兵站镇的三联单，还有股东名册的第十四页，{?flag.partner_is_general:页边写着“陆军部三楼”。|页边写着“在部里有人”。}纸她已经裁好了，够写四页的。",
   {
    "speaker": "埃塔",
    "text": "写几页邮资都一样。他入了血的股，你写也好，不写也好，他都已经知道一半了。我只提醒这一句。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "洛伦特使馆的条子比邮车先到，上面只问了一件事：塔下面那四百一十箱魔晶，如今在谁手里。"
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
    "result": "你把安卡迪亚兵车的节数、兵站镇的床数都抄了进去。文书会念给全连听，念完锁进连部的柜子里。那个柜子，你从前也锁过。"
   },
   {
    "text": "向使馆如实报告窖藏去向",
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
    "text": "向使馆报告窖藏“情况不明”",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a2x_embassy_done",
    "once": true,
    "effects": [
     "flag a2x_embassy_done",
     "var embassy_gap +1"
    ],
    "result": "“情况不明”只有四个字，译成密码是十一组数。参赞会在页边批一个问号。他的问号一向画得很大。"
   },
   {
    "text": "给镇议会寄一份副本",
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
    "text": "请法德伦工会公开宣读副本",
    "tag": "无主者",
    "if": "origin == 'unowned'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep union +1"
    ],
    "result": "地窖里那四十一台，你一台一台写下了编号。念的人会念到七号线，念到 1811 年三月的料，听的人里面，就有打过那批铆钉的。"
   },
   {
    "text": "把全年见闻写入考察笔记，托商栈寄回家",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "var home_copies +1",
     "rep south +1"
    ],
    "result": "题目你已经改了第二次，现在叫《一家有限责任的冒险公司，及其无限的责任》。水术师行会的审稿人不喜欢逗号，那个逗号你还是留着了。"
   },
   {
    "text": "把一年的经过如实写满四页，寄给合伙人",
    "effects": [
     "flag report2_full",
     "rep partner +1"
    ],
    "result": "一共四页，埃塔称过了，没超重。信去要九天，回来又是九天，回信只有一行：“收悉。款已汇。”",
    "goto": "a2_18"
   },
   {
    "text": "写全经过，抬头称“将军阁下”",
    "if": "flag.partner_is_general",
    "effects": [
     "flag report2_full",
     "flag report2_named_general",
     "rep partner +2"
    ],
    "result": "回信赶在你们出城之前到了。这是第一封亲笔信，字很大，一行行往右上斜。通篇谈的都是天气，说安本科斯特今年泪落月雨水少，“于观星有利”。落款没写军衔。",
    "goto": "a2_18"
   },
   {
    "text": "只记路权，隐去血账和代持账户",
    "effects": [
     "flag report2_edited"
    ],
    "result": "这一来只剩两页。埃塔把裁好没用上的那两页空纸收回了抽屉，说：“纸不能浪费。”回信只有一行：“收悉。款已汇。”",
    "goto": "a2_18"
   },
   {
    "text": "谎报沿线一切顺利",
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
     "text": "你只写了一页。回信也是一页，上面抄着你上个月那份例行报告的日期和页数，下面添了一行：“两份文件出自同一支笔，说法不一，请择一为准。”",
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
   "今晚是数流星的日子，点灯人歇工。没有煤气灯的卡斯托纳斯，星星看得格外清楚。城里人带着毯子坐满了城墙，还有一家端来一锅热栗子。魔晶是随流星落下来的，今年还剩多少，大家都想亲眼数一数。",
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
    "text": "数到后半夜，才数出来二十几颗，栗子比流星先吃完。"
   },
   {
    "if": "world.tears == 1",
    "text": "整整一夜，落下来的流星一只手就数得过来。"
   },
   {
    "if": "world.tears <= 0",
    "text": "整整一夜，一颗也没有。城墙上的人一直坐到天亮才肯走。"
   },
   "在 1809 年的历书上，这一栏写的是“数不过来”。德鲁兹纳在工程车顶上架起了镜子，架完了却说用不着镜子。",
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
    "text": "（她先敬了个礼，三年里这是第一次。）我信了一辈子圣徒科琳的教会。她好歹是死了的。"
   },
   {
    "if": "party.bura && is.god",
    "text": "说完她接着数。到了后半夜，你报错了一个数，差了十来颗，她听见了，没有纠正你。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "落下来的魔晶归拾到的人，登记成财物。没落下的那些，归谁？"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "从前我总说下一次是 1921 年，后面还要加一句“理论上”。看过那箱底片以后，这三个字我不加了，再加就是骗人。"
   },
   {
    "if": "flag.guilhem_stayed && !party.guilhem",
    "text": "对面第五座塔的窗口亮着灯，窗边站着一个人，头发已经灰了，是吉列姆。他看见你们了，没有招手。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "碎片今年响了九声。流星的数我也记下来了，跟那九道竖线记在同一页上。我没说它们有关系，只是纸不够用了。"
   }
  ],
  "first": [
   "level 6"
  ],
  "next": "a3_01"
 }
};
