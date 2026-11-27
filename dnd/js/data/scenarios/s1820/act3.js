// s1820 / act3.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const SCENES = {
 "a3_01": {
  "id": "a3_01",
  "title": "报纸摘要二",
  "chapter": "第三幕 · 货单",
  "art": "ev_castellos_is_dead",
  "loc": "安本科斯特 · 铸炉街",
  "date": "1828年银现月",
  "text": [
   "埃塔把这五年攒下的剪报全钉在了账房的墙上，一条剪报一枚图钉。图钉是论斤买的，她嫌贵，所以每条只钉一个角。楼下那家蜡烛铺换了招牌，字还是原来那几个字，只是漆是新刷的。",
   {
    "if": "flag.line_castonath",
    "text": "《泰卢姆时报》1825 年登过一条，说卡斯托纳斯通上了煤气灯，城里那八座塔租出去了三座，租客里头还有一家是卖帽子的。",
    "cls": "letter"
   },
   {
    "if": "flag.line_ancardia",
    "text": "《斗兽场哨兵报》1825 年登过一条，说安卡迪亚的兵车开进了卡斯托纳斯，车头上挂的是阿斯拉银行的旗。东坎诺就这么叫安卡迪亚的兵车统一了。",
    "cls": "letter"
   },
   {
    "if": "flag.line_none",
    "text": "《安本科斯特论坛报》1824 年登过一条，说阿斯拉银行停兑了三天，在门口排队的人里头，有两个还是公司的老主顾。",
    "cls": "letter"
   },
   {
    "if": "flag.hoard_sealed",
    "text": "也是那一年，魔法领地的窖藏贴上了三道封印，钥匙分给了三家。",
    "cls": "letter"
   },
   {
    "if": "flag.hoard_milled",
    "text": "也是那一年，窖藏全给磨成了子弹，军需处开的收条上写的是“旧料再用”。",
    "cls": "letter"
   },
   {
    "if": "flag.rite_given",
    "text": "伊萨受了礼，王家巫师名册上的空席也就从六个变成了五个。",
    "cls": "letter"
   },
   {
    "if": "!flag.rite_given",
    "text": "伊萨没有受礼，王家巫师名册上的空席还是六个。",
    "cls": "letter"
   },
   {
    "if": "flag.plates_printed",
    "text": "德鲁兹纳的底片印成了小册子，四个铜子一本，退回来的比卖出去的还多。",
    "cls": "letter"
   },
   {
    "if": "flag.plates_sold",
    "text": "底片归了银团，银团后来出的年报里，一个字也没提到彗星。",
    "cls": "letter"
   },
   {
    "if": "flag.box_plates",
    "text": "底片还锁在埃塔的铁箱里，就压在 1789 年那张欠条底下。",
    "cls": "letter"
   },
   {
    "if": "flag.blood_published",
    "text": "血账登了报，东坎诺那两国互相递了抗议书，两封抗议书写得一般长。",
    "cls": "letter"
   },
   {
    "if": "flag.blood_sold",
    "text": "血账卖出去了，买主没留姓名，付的是一张汇票。",
    "cls": "letter"
   },
   {
    "if": "flag.blood_burned",
    "text": "血账烧掉了，埃塔在账上只记了一笔“纸，一册，自然损耗”。",
    "cls": "letter"
   },
   {
    "if": "flag.blood_reported",
    "text": "血账交上去了，上头回了一封信，信上只有“已阅”两个字。",
    "cls": "letter"
   },
   {
    "if": "flag.box_blood",
    "text": "血账也锁在铁箱里，跟底片挨着放。",
    "cls": "letter"
   },
   {
    "if": "flag.oto_exposed",
    "text": "莫雷塞德的奥托给调去管马料了，听说他还嫌马吃得太多。",
    "cls": "letter"
   },
   {
    "text": "合伙人入了血的股，过了十一个月又撤了出来。{?flag.report2_full:比起别的股东，他还早撤了一个月。|}",
    "cls": "letter"
   },
   {
    "text": "《洛伦特日报》上说，洛伦特在境内把寇拉希黑弹给禁了。那天的社论通篇只有一句话：“洛伦泰内有人会算账”。",
    "cls": "letter"
   },
   {
    "text": "去年冬天的《加韦顿观察》上说，在布西拉尔以外，头一回有人自己试出了一个能打开漩涡的频率。报上没说这人是谁，只配了一张糊得厉害的照片。",
    "cls": "letter"
   },
   {
    "if": "flag.backpay_suit",
    "text": "欠饷的官司判下来了，只判给一半。布拉还是把判词裱了起来挂在床头，比她那张科琳像还大一圈。",
    "cls": "letter"
   },
   {
    "if": "flag.guilhem_stayed",
    "text": "还有吉列姆寄来的一封信，信纸上印着塔的徽记，正文一共三页，有两页是在讲学生的作业。",
    "cls": "letter"
   },
   {
    "speaker": "埃塔",
    "text": "十一个月。合伙人在血上头的股一共就入了这么久。他那位代理人的原话是两个字：嫌浅。这两个字我记在“备注”那一栏里了。"
   },
   {
    "if": "party.guilhem",
    "text": "吉列姆的头发全灰了，他自己说是咖啡喝出来的，大夫说不是。"
   },
   {
    "if": "is.immortal",
    "text": "埃塔把你的养老金又从头算了一遍。算完以后，她把那一页撕下来团成一团，扔进了炉子。你不会老，这笔账她算不出来。"
   },
   {
    "if": "is.immortal && party.bura",
    "speaker": "布拉",
    "text": "再过一百年，你还记不记得我叫什么？（铰链咔的一声。）别跟我说记得，给我个数。"
   },
   {
    "if": "is.immortal",
    "text": "也是那个礼拜，信箱里多出来一张名片，是维文帝国某位“夜间恩主”的，上头没写地址，只在背面有一行字：“幸会，同道”。"
   },
   "压在最底下的是蒂尔妲的信，盖的是加韦顿的邮戳。信上说，卡拉桑尼出八百金冠要买魂秤的专利，可图纸上得有公司副署才行，因为那杆秤当初是拿公司的十四号器材校准的。",
   {
    "speaker": "蒂尔妲（信）",
    "text": "签还是不签？汇票可不等人。第三页上我已经签好名了，第四页给你们留着地方。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）十四号器材说的就是我。（礼貌。）他们要买的那杆秤，前后量过我三回。"
   }
  ],
  "first": [
   "world tears -1",
   "world dove -1",
   "world doors +1",
   {
    "if": "is.god",
    "then": [
     "codex c_apotheosis"
    ]
   }
  ],
  "choices": [
   {
    "text": "把图纸送去专利局公开备案，谁都能抄",
    "effects": [
     "flag gauge_open",
     "unflag gauge_sold",
     "unflag gauge_burned",
     "world press +1",
     "rep union +1"
    ],
    "result": "专利局的书记员一连问了三遍，“谁都能抄”这几个字是不是写错了。没有写错。才到第二个月，铸炉街上就有人照着图纸做出了一杆。",
    "goto": "a3_02"
   },
   {
    "text": "副署，卖给卡拉桑尼",
    "effects": [
     "flag gauge_sold",
     "unflag gauge_open",
     "unflag gauge_burned",
     "gold +800",
     "rep charter +2",
     "world chains +1",
     "approval middlesday -2"
    ],
    "result": "汇票第二天就兑出来了。礼拜三翻开器材账，在它自己那一行旁边拿铅笔添上了一个价钱。",
    "goto": "a3_02"
   },
   {
    "text": "把图纸烧了",
    "effects": [
     "flag gauge_burned",
     "unflag gauge_open",
     "unflag gauge_sold",
     "approval middlesday +1"
    ],
    "result": "图纸扔进炉子里，先卷了边才烧起来。蒂尔妲的回信只有一句话：秤在她脑子里还有一杆，不过下一杆就不叫秤了。",
    "goto": "a3_02"
   }
  ]
 },
 "a3_02": {
  "id": "a3_02",
  "title": "病榻",
  "art": "ev_piety",
  "loc": "阿兰蒂尔塔 · 总院长的卧房",
  "text": [
   "总院长的卧房在三楼，窗户正对着月河。贝尔纳二世躺在一张窄床上，被子盖到胸口，床头柜上放着一杯水，还有一本没合上的祈祷书。他当了二十七年的总院长，这间屋里连一样金的东西都找不出来。",
   "守在床边的是真言师伊莲·西纳·阿尔科。她手里拿着一本小册子，老人每说一句话，她就往上记一笔。文森顿的灰磨大监院人没有来，只来了一封信，足足十一页，就搁在水杯旁边，到现在还没拆。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回我进这间屋子，还是 1666 年。那一回屋里的人是站着的，第二天他就走了，连伞都没带。"
   },
   {
    "speaker": "贝尔纳二世",
    "text": "修女，你把你那个本子带上，一直带到真理之路的尽头，带到碎片原先待的那个地方去。到了那儿，你听一回。"
   },
   "说到这儿他停了一下，嘴唇又动了动，还是把后半句咽了回去。",
   {
    "if": "!party.narwen",
    "text": "他要找的那位修女不在，他只好把话说给你听，叫你替他转告。伊莲在册子上记了一笔：“口信，经俗人转交”。"
   },
   {
    "if": "is.god",
    "text": "他一看见你，就撑着身子坐起来了一点，伊莲伸手去扶，却没扶住。"
   },
   {
    "if": "is.god",
    "speaker": "贝尔纳二世",
    "text": "您是祂的一个面相吗？我想趁着还没走，把这一栏给填上。"
   },
   {
    "if": "is.god",
    "text": "伊莲翻开了一本新册子，封面上写着“鉴定，卷一”。"
   },
   "你们出门的时候，埃塔的电报一路追到了塔底下。电报上说，马利安德的种植园财团雇了“这家出了名的老公司”去追回走失的财物。合同她已经签了，定金给得很厚。"
  ],
  "first": [
   "quest q_bill start",
   "quest q_phrase start",
   "codex c_ravelian_church"
  ],
  "choices": [
   {
    "text": "答他：是",
    "tag": "神",
    "if": "is.god && !flag.a3x_bernal_asked",
    "once": true,
    "effects": [
     "flag a3x_bernal_asked",
     "rep church +1",
     "var cult +1"
    ],
    "result": "他闭上眼睛点了一下头。到了第二个礼拜，热忱派的小报上就多了一面旗，旗上印的是你的侧脸，只是鼻子给画大了。"
   },
   {
    "text": "答他：不是",
    "tag": "神",
    "if": "is.god && !flag.a3x_bernal_asked",
    "once": true,
    "effects": [
     "flag a3x_bernal_asked",
     "approval narwen +1",
     "rep church -1"
    ],
    "result": "伊莲在册子上写的是“天赋异禀的法师，见附录”。博学派当天就把这一卷归了档，热忱派说归得太早了。"
   },
   {
    "text": "反问他：您觉得呢",
    "tag": "神",
    "if": "is.god && !flag.a3x_bernal_asked",
    "once": true,
    "effects": [
     "flag a3x_bernal_asked",
     "approval narwen -1"
    ],
    "result": "他笑了，笑着笑着就咳了起来，咳了好半天停不下来。伊莲只好把你请到了门外。"
   },
   {
    "text": "听他咽回去的那半句",
    "check": {
     "skill": "insight",
     "alt": [
      "religion"
     ],
     "dc": 14,
     "mods": [
      {
       "if": "flag.heard_hum",
       "n": 1,
       "why": "隔着地板听过它一声"
      }
     ]
    },
    "ok": {
     "text": "他咽回去的那半句是：“这些年，碎片翻来覆去只说一句话。”说完他看了伊莲一眼。伊莲的笔停在纸上，这一句她没有记。",
     "effects": [
      "flag bernal_confided"
     ],
     "goto": "a3_03"
    },
    "fail": {
     "text": "你只听见他在咳嗽。伊莲合上册子之前，把你的名字记了下来，连你站在哪儿也一块儿记上了。",
     "effects": [
      "rep church -1"
     ],
     "goto": "a3_03"
    }
   },
   {
    "text": "替娜尔雯举着灯，等他睡着",
    "if": "party.narwen",
    "effects": [
     "approval narwen +1"
    ],
    "result": "他睡着以前，娜尔雯一直在数他的呼吸，一共数了一百一十二下。为什么要数，她没有说。",
    "goto": "a3_03"
   },
   {
    "text": "把灰磨那封信拆开，念给他听",
    "effects": [
     "flag a3x_greymill_letter",
     "rep church +1"
    ],
    "result": "信里写的是文森顿穷人街上的路灯，一共四百一十盏，一盏一盏都写上了地址。老人听到第二百盏就睡着了。",
    "goto": "a3_03"
   }
  ]
 },
 "a3_03": {
  "id": "a3_03",
  "title": "一件活，两份合同",
  "art": "ev_high_temple_city",
  "loc": "巨魔湾 · 伊索贝尔港",
  "date": "1828年哈兰娜月",
  "text": [
   "伊索贝尔港的海关设在码头尽头，是一栋刷成白色的木楼，门口立着两根旗杆。一根挂的是联盟的旗，另一根挂的是昨天的表决结果。表决的是码头税，赞成四十一票，反对三十九票。",
   "柜台后面的关员戴着袖套，面前堆着一摞表格。兽人他要看身份文书，机器他要看卖契。{?party.bura:布拉把文书递了过去，关员不急着接，先盯着她的下巴看了看。|}",
   {
    "speaker": "关员",
    "text": "我们联盟什么事都要投票，码头税要投，路灯要投，连礼拜天酒馆开不开门也得投。只有谁算财物这一条不用投，那是早就定下来的。"
   },
   {
    "if": "is.greenskin",
    "text": "他也朝你伸出手来要文书。你是来办事的，可在这张柜台上，你先得是个要查的兽人。"
   },
   {
    "if": "flag.bought_free",
    "text": "你从怀里掏出镇议会给的那张赎身契。关员念了两遍，第二遍还念出了声，后头排队的人全都听见了。"
   },
   {
    "if": "is.mechanim",
    "text": "他推过来两张“随行器材”表，一张是给礼拜三的，另一张是给你的，表上有一栏叫“用途”。"
   },
   {
    "if": "party.middlesday && !is.mechanim",
    "text": "礼拜三那张表上有一栏叫“用途”。它对着这一栏看了很久，一直没有动笔。"
   }
  ],
  "first": [
   "codex c_concord"
  ],
  "choices": [
   {
    "text": "递上阿斯拉银行开的保税单",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "rep charter +1"
    ],
    "result": "保税单上盖着阿斯拉银行的章。关员一看见那个章，就把两张表一块儿收进了抽屉，文书也不再要了。",
    "goto": "a3_03b"
   },
   {
    "text": "把镇议会的赎身契拍在柜台上",
    "tag": "绿皮",
    "if": "flag.bought_free",
    "effects": [
     "approval bura +1"
    ],
    "result": "关员又念了一遍，念到“全镇摊付”这四个字就停住了。随后他给你们三个人都盖了章，每一个都盖得很用力。",
    "goto": "a3_03b"
   },
   {
    "text": "在“用途”一栏写：本人",
    "tag": "机械人",
    "if": "is.mechanim",
    "effects": [
     "gold -100",
     "approval middlesday +2"
    ],
    "result": "关员看了很久，在旁边批了“待议”两个字，意思是下个月再表决。这个月得先交一百金冠的保证金。",
    "goto": "a3_03b"
   },
   {
    "text": "跟关员讲道理，或者讲点别的",
    "check": {
     "skill": "persuasion",
     "alt": [
      "deception"
     ],
     "dc": 14,
     "party": true,
     "mods": [
      {
       "if": "rep.charter >= 3",
       "n": 2,
       "why": "特许商那边的熟面孔"
      }
     ]
    },
    "ok": {
     "text": "他总算在表上盖了章。章盖歪了，他也没有重盖。",
     "goto": "a3_03b"
    },
    "fail": {
     "text": "他收了一百金冠的保证金，还另外附了一条：兽人上街须由雇主陪同。",
     "effects": [
      "gold -100",
      "flag a3x_escorted"
     ],
     "goto": "a3_03b"
    }
   }
  ]
 },
 "a3_03b": {
  "id": "a3_03b",
  "title": "炸鱼",
  "loc": "伊索贝尔港 · 码头边的客栈",
  "text": [
   "当天晚上有人来敲客栈的门，先敲三下，停一停，再敲一下。来的人穿着一件旧黑袍，身上没戴教会的徽章，手里拎着一包热的炸鱼，包鱼的纸都叫油浸透了。",
   "这人就是伊索贝尔港的大监院莫里斯·安德克利夫。他站在讲台上，能把一整座教堂讲得没有一个人咳嗽。进了屋，他说的全是短话。",
   {
    "speaker": "莫里斯·安德克利夫",
    "text": "我说的也是种植园要你们追的那一批人，二十三个，外加九台机器。我要你们把他们悄悄送到洇河口去。那地方插着两面旗，谁的拘票拿过去都不好使。"
   },
   {
    "speaker": "莫里斯·安德克利夫",
    "text": "靠着你才得来的自由，你一走也就没了。所以我不要你去解放谁，我只要你送一趟货。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）安德克利夫，这个姓翻成我们的话就是“崖下”。崖下的兽人在砍甘蔗，姓崖下的老爷在讲道。"
   },
   {
    "if": "party.bura",
    "text": "大监院把炸鱼往她那边推了推，她就吃了。这个玩笑，她后来再也没有开过。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "他是废奴派的人。文森顿那位大监院是他的老对头，两家已经吵了好几代人。我们这一趟，走的正是文森顿。"
   }
  ],
  "first": [
   "codex c_undercliffe"
  ],
  "choices": [
   {
    "text": "收下他手抄的渡口单子",
    "effects": [
     "flag a3x_ferrylist",
     "rep church +1"
    ],
    "result": "单子上列了七个渡口，每个渡口后面都写着船家的名字，还有一句暗号。暗号全是晚祷词里的句子，挑的是平常不大有人念的那几句。",
    "goto": "a3_04"
   },
   {
    "text": "告诉他公司已经签了另一份",
    "effects": [
     "rep charter +1"
    ],
    "result": "他点了点头，把单子留在桌上，炸鱼也留下了，临走只说了一句：“签了的合同，也有办法不照着办。”",
    "goto": "a3_04"
   },
   {
    "text": "问他教会出不出这趟的船钱",
    "effects": [
     "flag a3x_ferrylist",
     "gold +150",
     "rep union -1"
    ],
    "result": "他从袍子里数出一百五十金冠，全是零钱，说这是三个礼拜天收上来的捐款。第二天暗线上就传开了，说迟到者公司是收了教会的钱才办事的。",
    "goto": "a3_04"
   }
  ]
 },
 "a3_04": {
  "id": "a3_04",
  "title": "商栈",
  "art": "ev_anb_global_trade",
  "loc": "伊索贝尔港 · 卡尔希尔商栈",
  "text": [
   "这里有隔离法管着。肯把屋子租给一个兽人、一台机器外加一个装在罐子里的仙子的，整个伊索贝尔港只有卡尔希尔商栈这一家。商栈的后院晾着鱼干，墙角码着从盛夏群岛运来的椰壳。账房是个蜥蜴人，一天要换两回水。",
   "伊索贝尔港有个外号叫不夜城。荆棘道的戏院要到半夜才散场，桥区的酒馆要到天亮才关门。商栈后院的墙矮，外头的灯光照得进来，连晾着的鱼干都照出了影子。",
   {
    "if": "is.lizardfolk",
    "text": "账房听出了你的口音，往你碗里多舀了一勺鱼汤，没多收钱。罐子里那位从这以后就管他叫“勿摇的同乡”，你也没去纠正她。"
   },
   {
    "if": "origin == 'karshyr'",
    "text": "商栈的老掌柜认出你是游学团的人，先请你喝了茶，等茶喝完才说起正事。他想托你捎一句话回家。"
   },
   {
    "if": "origin == 'concord'",
    "text": "塞斯提尔边区离这儿不过两天的路。码头上果然有人认出了你，还问你那笔四百金冠的账还清了没有。"
   },
   {
    "if": "flag.a3x_escorted && party.bura",
    "text": "布拉每回出门都得有人跟着。她一共出了三回门，三回去的都是码头后面的奴隶区。"
   }
  ],
  "shop": {
   "name": "卡尔希尔商栈",
   "blurb": "这里卖鱼干、卖药，也卖火驱枪，柜台上刻着“不赊账”三个字。",
   "stock": [
    "greater_healing_potion",
    "healing_potion",
    "antidote",
    "strong_antitoxin",
    "gnomish_smoke_bomb",
    "sparkdrive_rifle",
    "rosemetal_saber",
    "breastplate",
    "elven_cloak"
   ],
   "markup": 1.1
  },
  "choices": [
   {
    "text": "把十四号器材的事拿到团里表决",
    "if": "!flag.m_member && !flag.a3x_member_no",
    "goto": "a3_04m"
   },
   {
    "text": "去见蒂尔妲",
    "if": "!flag.gauge_burned",
    "once": true,
    "effects": [
     "flag a3x_tilda_calibrated",
     "approval middlesday +1"
    ],
    "result": "蒂尔妲是大监院请来的鉴定人。那杆秤她也带来了，秤盘上还缠着胶布。她说开庭以前，可以先给礼拜三校一回。"
   },
   {
    "text": "拆开蒂尔妲的信",
    "if": "flag.gauge_burned",
    "once": true,
    "effects": [
     "approval middlesday -1"
    ],
    "result": "信纸是卡拉桑尼的，抬头印着金字，正文只有一行：“你们把图纸烧了，我只好去给烧图纸的人画图了。别回信，他们会拆信的。”"
   },
   {
    "text": "坐下来，陪布拉擦枪",
    "if": "party.bura",
    "once": true,
    "effects": [
     "approval bura +1"
    ],
    "result": "码头后面的奴隶区她已经去看过了。这一整晚她只说了一个数，四十。你问她四十个什么，她不说，只管接着擦枪。"
   },
   {
    "text": "替娜尔雯回塔里的信",
    "if": "party.narwen",
    "once": true,
    "effects": [
     "approval narwen +1"
    ],
    "result": "塔里来信说老人还撑着，今天喝下去半碗汤。她的回信一共写了三行，三行全是数字。"
   },
   {
    "text": "问别摇晚上睡不睡得着",
    "once": true,
    "effects": [
     "flag a3x_jar_light"
    ],
    "result": "她说这儿的夜里太亮了，而且亮得不对劲。“城北那一片的路灯，光是发白的，那是芯核的光，是从我老家那边借过来的。”她数出来七盏，还说文森顿那边更多。"
   },
   {
    "text": "去码头找乌戈",
    "if": "flag.ugo_papers",
    "once": true,
    "effects": [
     "flag a3x_met_ugo",
     "approval bura +1"
    ],
    "result": "乌戈如今在暗线上当列车员，专门带逃出来的人走。他把你领到一张旧海图跟前，洇河口往南的每一个渡口，他都拿指甲在图上掐过一道印子。"
   },
   {
    "text": "答应替老掌柜带那句话回家",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr'",
    "once": true,
    "effects": [
     "flag karshyr_message",
     "rep south +1"
    ],
    "result": "老掌柜要捎的那句话是：“他们管会说话的货叫器材，管不会说话的叫人手。你记清楚了，千万别弄反。”"
   },
   {
    "text": "去找在种植园当账房的表亲",
    "tag": "巨魔湾",
    "if": "origin == 'concord'",
    "once": true,
    "effects": [
     "flag cousin_tip"
    ],
    "result": "你这位表亲在戴纽奇家管了十一年的账。他压低了嗓门告诉你，文森顿那座机房的股东名册，就锁在机房账房左手边第二个柜子里。说完，他要你保证就当从来没见过他。"
   },
   {
    "text": "在后院的吊床上睡一整夜",
    "once": true,
    "effects": [
     "rest long"
    ],
    "result": "鱼干的气味一整夜都没散。等你醒过来，账房那个蜥蜴人已经换过一回水了。"
   },
   {
    "text": "动身去塞斯提尔边区",
    "goto": "a3_05"
   }
  ]
 },
 "a3_04m": {
  "id": "a3_04m",
  "title": "十四号",
  "loc": "伊索贝尔港 · 卡尔希尔商栈",
  "text": [
   "跟埃塔打电报，一来一回走了两天。头一封是她照着账本抄来的：十四号，驮运用，二手，1820 年入账，每年折旧一成。八年下来折掉了八成，眼下在账面上，礼拜三只值二十几个金冠了。",
   {
    "speaker": "埃塔（电报）",
    "text": "划入成员栏，须全团表决。划过去以后，不得再提折旧。八年已提折旧一百九十二金冠，退给谁？"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（不确定。）退给我吧。（礼貌。）有了这笔钱，我可以去买一把伞。"
   },
   {
    "if": "party.bura",
    "text": "布拉头一个举起了手，举得老高，下巴上的铰链也跟着响了一下。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "成员登记表的第四栏要填“出生地”。七号线，理论上也算一个地方。"
   }
  ],
  "choices": [
   {
    "text": "举手：划",
    "effects": [
     "flag m_member",
     "unflag a3x_member_no",
     "world chains -1",
     "approval middlesday +2"
    ],
    "result": "举起来的那些手里头，有一只是礼拜三自己的。埃塔回电说，礼拜三已经登成了成员，1811 年生，出生地七号线，折旧款也记到了它名下。买不买伞，电报上没提。",
    "goto": "a3_04"
   },
   {
    "text": "不划，账先放着",
    "effects": [
     "flag a3x_member_no",
     "approval middlesday -1"
    ],
    "result": "埃塔的回电只有一个“存”字。礼拜三把行李码整齐了背到背上，先下楼去等你们了。",
    "goto": "a3_04"
   }
  ]
 },
 "a3_05": {
  "id": "a3_05",
  "title": "镇议会",
  "loc": "塞斯提尔边区 · 一个小镇",
  "text": [
   "这个镇子的名字地图上有，路牌上却没有，路牌三年前就让一次表决给拆掉了。镇议会开在教堂的地下室里，一张长桌边上坐着十一个人，桌上摆着一壶凉茶。桌子那头挂着一块黑板，写的是本月的议题，其中第四条是“某冒险公司旧账（1789）”。",
   {
    "if": "origin == 'concord'",
    "text": "这就是你老家的镇子，黑板上那笔账抵的就是你。坐在桌头做记录的是你小时候的先生。他抬头看了你一眼，在纸上写下你的名字，接着又划掉，改成了“债务本人”。"
   },
   "暗线上的人要在镇上的谷仓里住三夜，照规矩镇议会得先表决。头一个发言的议员却提议先成立一个委员会，专门研究这件事该怎么表决。",
   {
    "speaker": "议员",
    "text": "收留我是不反对的，我反对的是不按程序收留。我们比种植园强的地方，说到底就只有程序这一条。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "他这话也不全错。程序是慢，可程序记得住事情。人记得住吗？"
   }
  ],
  "choices": [
   {
    "text": "站起来，提请当场表决",
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "origin == 'concord'",
       "n": 2,
       "why": "这是你老家，你有权提请表决"
      },
      {
       "if": "rep.church >= 3",
       "n": 1,
       "why": "教会那边有人替你说过话"
      },
      {
       "if": "flag.log_amended",
       "n": -2,
       "why": "对面翻出了你 1820 年那页航海日志"
      }
     ]
    },
    "ok": {
     "text": "表决结果是七比四，通过了。谷仓的钥匙交到你手里的时候，摸着还是热的。",
     "effects": [
      "flag town_shelters",
      "world chains -1",
      "rep union +1"
     ],
     "goto": "a3_06"
    },
    "fail": {
     "text": "议案给搁到了下个月。委员会倒是成立了，一共三个人，头一回开会定在雨季以后。那三夜，暗线上的人只好睡在河边的芦苇丛里，霍布的脚都泡烂了。",
     "effects": [
      "rep union -1"
     ],
     "goto": "a3_06"
    }
   },
   {
    "text": "不等表决，先把人领进谷仓",
    "tag": "巨魔湾",
    "if": "origin == 'concord'",
    "effects": [
     "flag town_shelters",
     "flag town_vote_skipped",
     "world chains -1",
     "rep charter -1"
    ],
    "result": "人是进了谷仓，表决到第二天才开。从那以后，镇上有一半的人不跟你说话了，另外一半见了你，也要先看看左右有没有人。",
    "goto": "a3_06"
   },
   {
    "text": "找镇上的科琳教小堂借地方",
    "if": "party.bura",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "小堂的执事是个独眼的半兽人。他听布拉念完一段科琳的祷词，就去开了后门，只嘱咐了一句别点灯。",
     "effects": [
      "world chains -1",
      "approval bura +1"
     ],
     "goto": "a3_06"
    },
    "fail": {
     "text": "执事说小堂归镇议会管，要借地方也得先表决。布拉向他道了谢，出门的时候照着门槛踢了一脚。",
     "effects": [
      "approval bura -1"
     ],
     "goto": "a3_06"
    }
   }
  ]
 },
 "a3_06": {
  "id": "a3_06",
  "title": "第二道菜底下",
  "loc": "马利安德 · 戴纽奇庄园",
  "text": [
   "马利安德的庄园向来以门廊深、树荫厚出名，戴纽奇家的门廊宽得能并排停下四辆马车。太阳落山以前，一直没有人请你们进屋，只有管家端来了柠檬水。",
   "等到天黑了才开席。长桌上点着二十四根蜡烛，摆的是银盘子，光汤就上了三道。威廉·戴纽奇坐在主位上，袖口熨得笔直，面前那副刀叉摆得端端正正，一整晚都没有动过。上菜的人都是戴着镣的奴隶，镣子上裹了布，碰着盘子也不出声。",
   {
    "speaker": "威廉·戴纽奇",
    "text": "请用，请用。我光是看着各位吃，心里就很高兴。合同就压在第二道菜底下，不着急。"
   },
   "第二道菜是烤鸭，盘子底下果然压着一张清单，上面是二十三个人名，外加九个编号，都是要你们追回来的。{?party.bura:这一整晚，布拉的铰链一声都没有响过。|}",
   {
    "if": "is.god",
    "speaker": "威廉·戴纽奇",
    "text": "恕我冒昧问一句，红衣收割者那些人，归不归您管？"
   },
   {
    "if": "is.god",
    "text": "他问得客客气气，就像在打听你住的那家客栈让不让带狗。"
   },
   {
    "if": "is.immortal",
    "speaker": "威廉·戴纽奇",
    "text": "他们已经给您立过案了。那种卷宗的封皮是红颜色的，我认得出来。"
   }
  ],
  "first": [
   "quest q_bill stage 2",
   "codex c_dainuich",
   "codex c_undercliff_orcs",
   {
    "if": "is.immortal",
    "then": [
     "flag reaper_file"
    ]
   }
  ],
  "choices": [
   {
    "text": "盯着他的刀叉，看他吃不吃",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15
    },
    "ok": {
     "text": "你数过了，这一整晚没有人给他斟过一回酒，可他的杯子始终是满的，一滴都没少。他一口没吃，一口没喝。",
     "effects": [
      "flag dainuich_noticed"
     ]
    },
    "fail": {
     "text": "你盯得太久了。他笑着问你是不是嫌银器不够亮，还叫人换了一套上来。换的时候，他多看了你两眼。",
     "effects": [
      "rep charter -1"
     ]
    }
   },
   {
    "text": "数清屋里屋外有多少人手",
    "once": true,
    "check": {
     "skill": "perception",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "屋里有六个，门廊上有四个，马厩那边还有两条狗。他们十一点换岗，换岗的人照例要先去厨房喝一碗汤。",
     "effects": [
      "flag a3x_counted"
     ]
    },
    "fail": {
     "text": "你数到第九个就数乱了，因为有一个人进进出出走了两回。第二回他手里什么也没端，眼睛看的是你。",
     "effects": [
      "flag a3x_alarm"
     ]
    }
   },
   {
    "text": "照规矩回敬主人一杯",
    "tag": "贵族",
    "if": "is.noble",
    "once": true,
    "effects": [
     "flag a3x_engine_hint",
     "rep charter +1"
    ],
    "result": "他很满意，又多留你喝了一杯，你喝着，他在旁边看着。临走的时候他说漏了一句：文森顿那座不烧煤的机房，他也有股份。"
   },
   {
    "text": "在清单上签收",
    "effects": [
     "flag planter_list_signed",
     "rep charter +1"
    ],
    "result": "他把笔递了过来。笔杆是热的，有人一直握着它，就等着你来签。",
    "goto": "a3_07"
   },
   {
    "text": "说要先看看那几台“有毛病的”轧棉机",
    "effects": [
     "flag a3x_invited"
    ],
    "result": "他叫管事提上灯带你们过去，说那些机器都在轧棉房里，夜里也不停工。",
    "goto": "a3_07"
   },
   {
    "text": "把清单折好揣进怀里，不签",
    "effects": [
     "approval bura +1"
    ],
    "result": "他眼看着你把清单揣进怀里，只叫人上了第三道菜。第三道是甜的，他照样没动。",
    "goto": "a3_07"
   }
  ]
 },
 "a3_07": {
  "id": "a3_07",
  "title": "轧棉机报人名",
  "art": "ev_mechanim_awakening",
  "loc": "戴纽奇庄园 · 轧棉房",
  "text": [
   "轧棉房就在甘蔗地边上，到了后半夜还亮着一盏灯。九台轧棉机械人站成一排，全锁在同一根梁上，每台胸口都钉着一块铜牌，从七号排到十五号。地上铺着草席，二十三个兽人坐的坐、躺的躺，其中有一个正在补鞋。清单上的人和机器都在这间屋里。",
   "机器和人一直在互相打掩护。管事过来查的时候，机器就转得响一些，把说话声盖住。人就拿布把机器出了毛病的齿轮包起来，免得它们给拉去回炉。十一号嘴里一直在背名字，跟它锁在同一根梁上的每一个人，它一个都不落下。",
   {
    "speaker": "十一号",
    "text": "内莉。老科尔。阿萨。霍布。马蒂。托比，不在。……"
   },
   {
    "speaker": "内莉",
    "text": "我们走。可我儿子托比还在隔壁那家庄园里，他才九岁。不带上他，我不走。"
   },
   {
    "speaker": "老科尔",
    "text": "我六十一了，走不动了。我留在这儿，等追的人来了，我给他们指路，指那条错的。"
   },
   "阿萨从前撑过船，洇河口前头那三个渡口，他认得其中两个。霍布的脚踝叫镣子磨烂了，上头裹着烟叶。马蒂今年才十四岁，已经会数数了，替十一号把编号都记在了鞋底上。他们要问你的只有一句话：你站在哪一边。",
   {
    "if": "origin == 'unowned' && is.mechanim",
    "text": "你用机器的语速说了一句话，在人听来就像是一声哨子。九台机器一齐停了工，十一号也不背名字了，转过头来看着你。"
   },
   {
    "if": "origin == 'unowned' && !is.mechanim",
    "text": "你蹲下去看芯核座上的厂印，是七号线出的，用的是 1811 年的料。这种座子你当年在那条线上拧过，一个班要拧四十个。"
   },
   {
    "if": "is.mechanim && origin != 'unowned'",
    "text": "九台机器先朝你转过头来，问你今天是礼拜几。"
   },
   {
    "if": "is.greenskin",
    "text": "屋里的人先开口跟你说话。他们问你在这家公司里是干什么的，你说是队长。他们不怎么相信，又问了一遍。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（高兴。）十一号跟我是同一炉的料。（担心。）它一直背名字，是因为怕自己忘了。"
   }
  ],
  "choices": [
   {
    "text": "压低声音，别让管事听见",
    "once": true,
    "check": {
     "skill": "stealth",
     "dc": 14,
     "party": true,
     "adv": "flag.a3x_invited"
    },
    "ok": {
     "text": "管事提着灯来回走过两趟，什么也没看见，走第二趟的时候还打了个哈欠。"
    },
    "fail": {
     "text": "草席底下压着一只空罐头，叫你一脚踩响了。管事连吹了三声哨子，马厩那边的狗也跟着叫了起来。",
     "effects": [
      "flag a3x_alarm"
     ]
    }
   },
   {
    "text": "看看它们芯核的料",
    "once": true,
    "check": {
     "skill": "arcana",
     "alt": [
      "investigation"
     ],
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "纹路是新刻上去的，晶体的底子却发青，是 1810 年彗星碎的那年落下的那一批。醒过来的机器，用的都是这一批料。",
     "effects": [
      "flag cores_1810"
     ]
    },
    "fail": {
     "text": "纹路太细，灯又太暗，你看得眼睛都酸了，只看出这九颗是同一个厂出的。十一号再背名字的时候，把你也背了进去。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "答应内莉，先去隔壁庄园接托比",
    "once": true,
    "effects": [
     "flag a3x_toby",
     "rep charter -1",
     "approval bura +1"
    ],
    "result": "隔壁庄园的狗认得内莉，没有叫。托比就睡在马槽里，把他抱出来的时候他还没醒。第二天，隔壁那位主人给戴纽奇写了一封信，抱怨自家走失了一个孩子。"
   },
   {
    "text": "告诉他们你站哪边，回去开会",
    "goto": "a3_08"
   }
  ]
 },
 "a3_08": {
  "id": "a3_08",
  "title": "团务会：两份合同",
  "art": "ev_multi_racial_merc",
  "loc": "马利安德城外 · 河边的空货栈",
  "date": "1828年苏伦月",
  "text": [
   "河边有一座空货栈，原先是堆棉包的，地上到现在还积着一层棉絮，走一步就扬起来一片。公司的团务会就在这儿开，一只空箱子翻过来当桌子，埃塔的电报摆在上面，拿一块石头压着。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "合同上写的是“追回财物”。你过来，指给我看看，这里头哪一个是财物。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）屋里一共三十二个。（更正。）是三十三个，我刚才忘了数我自己。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "我站在大监院那一边。不过这件事得悄悄地办。动静一闹大，教会就得出来表态，表态这种事，一拖就是二十年。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "最糟的办法就是骗。两头都骗，理论上是两倍的糟。实际上……实际上我没算过。"
   },
   {
    "text": "埃塔在电报里说，这三百八十二年，公司没有毁过一回约。",
    "cls": "letter"
   },
   {
    "speaker": "别摇",
    "text": "我问一句，在你们这儿，说话不算数的人，后来都落了个什么下场？"
   },
   "多数人都主张走暗线，把人送走。剩下的就看你了。"
  ],
  "choices": [
   {
    "text": "照种植园的合同办，把人追回来",
    "effects": [
     "flag contract_planters",
     "unflag contract_line",
     "unflag contract_fraud",
     "world chains +2",
     "rep charter +2",
     "rep union -3",
     "var overruled +1",
     "approval bura -1",
     "approval middlesday -1",
     "approval narwen -1"
    ],
    "result": "你在合同背面签了字。布拉把枪又擦了一遍，头都没抬。",
    "goto": "a3_09"
   },
   {
    "text": "走暗线，把人送去洇河口",
    "if": "faction != 'seal' && !(faction == 'shield' && party.bura)",
    "effects": [
     "flag contract_line",
     "unflag contract_planters",
     "unflag contract_fraud",
     "flag contract_broken",
     "world chains -2",
     "rep charter -2",
     "rep union +2"
    ],
    "result": "埃塔的回电只有“收到”两个字，后面跟着一笔违约金的数目，比定金整整多出一倍。",
    "goto": "a3_09"
   },
   {
    "text": "走暗线，布拉要拿欠饷抵违约金，收下",
    "tag": "盾",
    "if": "faction == 'shield' && party.bura",
    "effects": [
     "flag contract_line",
     "unflag contract_planters",
     "unflag contract_fraud",
     "flag contract_broken",
     "world chains -2",
     "rep charter -2",
     "rep union +2",
     "approval bura +2"
    ],
    "result": "布拉从包袱里抽出那张裱好的判词，一巴掌拍在箱子上，问她那一半的饷够不够赔违约金。埃塔的回电只有一个“够”字。",
    "goto": "a3_09"
   },
   {
    "text": "引合同：在共和国地界上签的约，不得以人为标的",
    "tag": "印",
    "if": "faction == 'seal'",
    "effects": [
     "flag contract_line",
     "unflag contract_planters",
     "unflag contract_fraud",
     "world chains -2",
     "rep charter -1",
     "rep union +2"
    ],
    "result": "这份合同是在安本科斯特签的，共和国的地界上人不能当买卖的标的，所以追人的那一条从一开头就无效，公司算不上毁约。机器那一条还有效，得等法庭来判。埃塔回电说，第六款她早就看见了，就等着你自己看见。",
    "goto": "a3_09"
   },
   {
    "text": "两头都办：给财团交一叠假的报废单和死亡登记",
    "effects": [
     "flag contract_fraud",
     "unflag contract_planters",
     "unflag contract_line",
     "world chains -1",
     "var overruled +1",
     "approval guilhem -1"
    ],
    "result": "头一张假的死亡登记是吉列姆替你拟的。写完他把笔放下，说自己的手在抖。",
    "goto": "a3_09"
   },
   {
    "text": "举手表决",
    "effects": [
     "flag contract_line",
     "unflag contract_planters",
     "unflag contract_fraud",
     "flag contract_broken",
     "world chains -2",
     "rep charter -2",
     "rep union +2",
     "approval bura +1",
     "approval middlesday +1"
    ],
    "result": "你也举了手。礼拜三把它自己那只手举得笔直，然后把举起来的手数了一遍，又数了一遍。",
    "goto": "a3_09"
   }
  ]
 },
 "a3_09": {
  "id": "a3_09",
  "title": "布拉的枪",
  "art": "ev_corinite_war",
  "loc": "马利安德 · 奴隶区后墙",
  "text": [
   "奴隶区的后墙是土坯砌的，墙根底下长着蓖麻。墙下摆着四只长木箱，其中一只已经撬开了，里面是拿油纸包着的枪，一共四十条，枪托上都烙着拉姆斯盖特军火的字号。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "共和国欠着我十一个月的饷，我欠着科琳一条命。今天，我先还这一笔。我要把枪发给里头的人。"
   },
   {
    "if": "!party.bura",
    "text": "布拉不在这儿，箱盖上留着一行粉笔字：“先还这一笔”。粉笔是从教堂里拿来的，写到最后一个字的时候断了。"
   },
   "墙那边有人在唱晚祷，词是揭秘教的词，调子却慢了一半。奴隶跟主人进的是同一座教堂，走的不是同一扇门。",
   {
    "if": "flag.contract_planters && party.bura",
    "text": "你签过种植园的合同，这件事她是知道的。她把箱盖扣上了一半，等着你先开口。"
   }
  ],
  "first": [
   "quest q_bura stage 2"
  ],
  "choices": [
   {
    "text": "拦住她，照雇主的合同办",
    "if": "party.bura",
    "effects": [
     "flag bura_alone",
     "unflag bura_armed",
     "unflag bura_line",
     "companion -bura",
     "quest q_bura fail"
    ],
    "result": "她把枪一条一条码回箱子里，码得整整齐齐，然后扛起一箱，一个人走了，头也没回。铰链只响了一声。",
    "goto": "a3_10"
   },
   {
    "text": "帮她把枪发下去",
    "if": "party.bura",
    "effects": [
     "flag bura_armed",
     "unflag bura_alone",
     "unflag bura_line",
     "world chains -2",
     "rep charter -2",
     "flag wanted_concord",
     "approval bura +2",
     "quest q_bura done",
     {
      "if": "flag.contract_planters",
      "then": [
       "flag contract_broken"
      ]
     }
    ],
    "result": "四十条枪发下去，一人一条。教会是怎么教人唱诗的，她就怎么教他们装弹，一句一句地来，错了就从头再来。天亮以前，墙那边的歌声停了。",
    "goto": "a3_10"
   },
   {
    "text": "劝她把人带上暗线，枪留给不肯走的",
    "tag": "盾",
    "if": "party.bura && !flag.contract_planters && faction == 'shield'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "approval.bura >= 6",
       "n": 2,
       "why": "她信你"
      }
     ]
    },
    "ok": {
     "text": "她想了很久，铰链响了两回。最后她撬开第二只箱子，只从里头拿出来十条。“不肯走的，给他们这个。肯走的，跟我走。”",
     "effects": [
      "flag bura_line",
      "unflag bura_alone",
      "unflag bura_armed",
      "world chains -1",
      "approval bura +1",
      "quest q_bura done"
     ],
     "goto": "a3_10"
    },
    "fail": {
     "text": "“你说得对，”她说，“可惜你晚说了十一个月。”她站在那儿，等你在剩下的两条路里头挑一条。",
     "effects": [
      "approval bura -1"
     ],
     "goto": "a3_09"
    }
   },
   {
    "text": "劝她把人带上暗线，枪留给不肯走的",
    "if": "party.bura && !flag.contract_planters && faction != 'shield' && approval.bura >= 6",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15
    },
    "ok": {
     "text": "她想了很久，铰链响了两回。最后她撬开第二只箱子，只从里头拿出来十条。“不肯走的，给他们这个。肯走的，跟我走。”",
     "effects": [
      "flag bura_line",
      "unflag bura_alone",
      "unflag bura_armed",
      "world chains -1",
      "approval bura +1",
      "quest q_bura done"
     ],
     "goto": "a3_10"
    },
    "fail": {
     "text": "“你说得对，”她说，“可惜你晚说了十一个月。”她站在那儿，等你在剩下的两条路里头挑一条。",
     "effects": [
      "approval bura -1"
     ],
     "goto": "a3_09"
    }
   },
   {
    "text": "把箱子留在墙根，去追她",
    "if": "!party.bura",
    "effects": [
     "flag bura_alone",
     "unflag bura_armed",
     "unflag bura_line",
     "quest q_bura fail"
    ],
    "result": "你一直追到河边，只看见泥地上有一串脚印往北去了。脚印踩得很深，她肩上扛着一箱枪。",
    "goto": "a3_10"
   }
  ]
 },
 "a3_10": {
  "id": "a3_10",
  "title": "河堤",
  "loc": "马利安德以北 · 河堤",
  "text": [
   "河堤比甘蔗地高出一人多，堤顶窄得只容得下两匹马并排走。追奴队来了九个人，带着四条狗和一盏防风灯。领头的把悬赏单举到灯底下，一个字一个字地往下念。",
   {
    "speaker": "追奴队长",
    "text": "……走失财物，兽人二十三口，机械九具。送回者每口赏四十金冠，机械另议……"
   },
   {
    "if": "party.middlesday",
    "text": "一听他念到“财物”两个字，礼拜三就把背上的行李一件一件卸到地上，码得整整齐齐。它是要腾出手来打架。"
   },
   "你们身后的甘蔗地里蹲着那二十三个人。{?flag.a3x_toby:内莉怀里抱着托比，一只手捂着他的嘴。|内莉把脸埋在膝盖上。}老科尔没有跟来，他留在了庄园里，好给追的人指一条错路。",
   {
    "if": "flag.contract_planters",
    "text": "这一回你站在追奴队这一边。堤下的芦苇丛里有东西在动，那是暗线的人，他们是来劫人的。追奴队长把悬赏单塞进怀里，冲你点了点头，意思是该你们上了。"
   },
   {
    "if": "flag.a3x_alarm && !flag.contract_planters",
    "text": "庄园那边的哨子还在吹。这时候又赶来了一个骑马的，人在马上一边跑一边装弹。"
   },
   {
    "if": "is.god",
    "text": "先是狗不叫了。接着追奴队的马直往后退，一直退到堤边上，有一只前蹄都踩空了。"
   }
  ],
  "choices": [
   {
    "text": "把报废单和死亡登记递给追奴队长",
    "if": "flag.contract_fraud",
    "once": true,
    "check": {
     "skill": "deception",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.planter_list_signed",
       "n": -2,
       "why": "清单上有你的签收"
      }
     ]
    },
    "ok": {
     "text": "他凑在灯底下看了半天，看到第七张的时候骂了一句，把手下的两个人和那个骑马的都打发回去了。“剩下的这些，我得亲眼看看尸首才行。”",
     "effects": [
      "flag a3x_light"
     ]
    },
    "fail": {
     "text": "他才翻到第三张就笑了。那张死亡登记上填的日子是个礼拜天，马利安德的公证所礼拜天是不开门的。他把单子收好，说回头要寄给联盟的法庭。",
     "effects": [
      "flag wanted_concord"
     ]
    }
   },
   {
    "text": "先去把堤上最窄那段的木栅推倒",
    "tag": "武人",
    "if": "is.martial && !flag.contract_planters",
    "once": true,
    "check": {
     "skill": "athletics",
     "dc": 14
    },
    "ok": {
     "text": "木栅整个倒进了河里。这一来，最窄的那一段只剩下一人宽，马过不来，骑马的只好下马。",
     "effects": [
      "flag a3x_light"
     ]
    },
    "fail": {
     "text": "木栅是倒了，可你也跟着滑下去半截，膝盖结结实实磕在了石头上。",
     "effects": [
      "hp -6"
     ]
    }
   },
   {
    "text": "趁十一点换岗，先摸掉放哨的两个",
    "if": "flag.a3x_counted && !flag.contract_planters",
    "once": true,
    "check": {
     "skill": "stealth",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "换岗的人这会儿还在厨房里喝汤。放哨的那两个叫你们捆在了柳树上，嘴里塞的是他们自己的帽子。",
     "effects": [
      "flag a3x_light"
     ]
    },
    "fail": {
     "text": "放哨的那个回了头。他没喊，可他吹响了哨子。",
     "effects": [
      "flag a3x_alarm"
     ]
    }
   },
   {
    "text": "让乌戈先带甘蔗地里的人下渡口",
    "if": "flag.a3x_met_ugo && !flag.contract_planters",
    "once": true,
    "effects": [
     "flag a3x_ford",
     "approval bura +1"
    ],
    "result": "乌戈打了一声唿哨，甘蔗地里的人就弯着腰走了，一个跟着一个，霍布是让阿萨背着走的。剩下的事，归你们了。"
   },
   {
    "text": "站到堤上，说一句：谁也不许过",
    "tag": "神",
    "if": "is.god && !flag.contract_planters",
    "effects": [
     "flag levee_sanctuary",
     "world chains -3",
     "rep charter -3",
     "rep church -1",
     "var cult +1"
    ],
    "goto": "a3_10s"
   },
   {
    "text": "上堤",
    "if": "!flag.contract_planters",
    "goto": "a3_10b"
   },
   {
    "text": "跟追奴队一起下堤，堵住芦苇",
    "if": "flag.contract_planters",
    "goto": "a3_10p"
   },
   {
    "text": "站着别动，让暗线的人把人带走",
    "if": "flag.contract_planters",
    "effects": [
     "world chains -1",
     "rep charter -2",
     "rep union +1",
     "approval narwen +1"
    ],
    "result": "你把枪背回了肩上。追奴队长看了你一眼，在本子上记了一笔。暗线的人从你身边走过去，其中有一个停下脚步，跟你说了一声谢谢。",
    "goto": "a3_11"
   }
  ]
 },
 "a3_10b": {
  "id": "a3_10b",
  "title": "堤上",
  "loc": "马利安德以北 · 河堤",
  "text": [
   "防风灯已经挂到了堤边的柳树上。追奴队长把马刀抽出来，又插了回去，换成了一根套索。他是按人头领钱的，死的不值钱。",
   {
    "if": "flag.a3x_light && !flag.a3x_alarm",
    "text": "对面少了几个人，剩下的那几个自己也看得出来，往身后瞄了好几回。"
   },
   {
    "if": "flag.a3x_ford",
    "text": "甘蔗地里已经没有人了。乌戈的唿哨从下游传了过来，又短又急，意思是还要一刻钟。"
   },
   {
    "speaker": "追奴队长",
    "text": "我不想打死谁，打死了就不值钱了。你们把路让开，我就少记你们一笔。"
   },
   {
    "if": "party.middlesday || is.mechanim",
    "text": "九台轧棉机械人也跟着你们上了堤，镣子还拖在脚后头。十一号这会儿不背名字了，它在数对面一共有几个人。"
   }
  ],
  "choices": [
   {
    "text": "叫九台机器排成一排，一起上",
    "if": "(party.middlesday || is.mechanim) && partysize >= 2 && flag.a3x_light && !flag.a3x_alarm",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "n": 2,
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 3
      },
      {
       "id": "dragoon",
       "name": "骑马的追奴"
      }
     ],
     "allies": [
      {
       "id": "striker",
       "n": 2,
       "name": "轧棉机械人"
      }
     ]
    }
   },
   {
    "text": "叫九台机器排成一排，一起上",
    "if": "(party.middlesday || is.mechanim) && partysize >= 2 && !(flag.a3x_light && !flag.a3x_alarm)",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "n": 3,
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 3
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "骑马的追奴"
      }
     ],
     "allies": [
      {
       "id": "striker",
       "n": 2,
       "name": "轧棉机械人"
      }
     ]
    }
   },
   {
    "text": "叫九台机器排成一排，一起上",
    "if": "(party.middlesday || is.mechanim) && partysize <= 1",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain",
       "hpMult": 0.55
      },
      {
       "id": "catch_hound"
      }
     ],
     "allies": [
      {
       "id": "striker",
       "n": 2,
       "name": "轧棉机械人"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize >= 4 && flag.a3x_light && !flag.a3x_alarm",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "n": 2,
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 3
      },
      {
       "id": "dragoon",
       "name": "骑马的追奴"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize >= 4 && !(flag.a3x_light && !flag.a3x_alarm)",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "n": 3,
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 3
      },
      {
       "id": "dragoon",
       "n": 2,
       "name": "骑马的追奴"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 3 && flag.a3x_light && !flag.a3x_alarm",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 3 && !(flag.a3x_light && !flag.a3x_alarm)",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "n": 2,
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 3
      },
      {
       "id": "dragoon",
       "name": "骑马的追奴"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 2 && flag.a3x_light && !flag.a3x_alarm",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "catch_hound",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 2 && !(flag.a3x_light && !flag.a3x_alarm)",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain"
      },
      {
       "id": "makata_ganger",
       "name": "追奴队的打手"
      },
      {
       "id": "catch_hound",
       "n": 2
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize <= 1",
    "combat": {
     "title": "河堤",
     "intro": "防风灯挂在柳树上，只照得亮堤顶上的一小块地方。头一个扑上来的是狗。",
     "noAwe": false,
     "specials": [
      {
       "id": "sluice",
       "name": "开水闸",
       "desc": "把堤上的闸门摇开，让河水灌进他们那半边",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "闸门的铁轮才转了半圈就卡住了。你再使劲一推，河水整片整片地翻了上来。马站不住，人也站不住，对面那半边堤一下子成了一条水沟。",
        "dmgAll": "3d6",
        "end": "win"
       },
       "fail": {
        "text": "铁轮早就锈死了，你推得手心都起了泡，闸门也只往下滴了几滴水。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "narrow",
       "name": "堵住最窄的那一段",
       "desc": "堤顶只容两匹马并排，有一段更窄，只容得下一匹",
       "check": {
        "skill": "athletics",
        "alt": [
         "intimidation"
        ],
        "dc": 15
       },
       "success": {
        "text": "你站到了最窄的那一段上，后头的马挤成了一团，前头的人又退不回去。",
        "applyAll": {
         "cond": "restrained",
         "turns": 1
        }
       },
       "fail": {
        "text": "马比你想的要高，你叫它一下撞下了堤坡，滚了两圈才停住。",
        "selfDmg": "1d8"
       }
      },
      {
       "id": "lantern",
       "name": "打翻防风灯",
       "desc": "那盏灯就挂在柳树上，狗认的是气味，人认的是灯",
       "check": {
        "skill": "sleight",
        "alt": [
         "acrobatics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯掉进了芦苇丛里，追奴队的人什么也看不见了。狗还在叫，可叫的方向全都不对。",
        "applyAll": {
         "cond": "blinded",
         "turns": 1
        }
       },
       "fail": {
        "text": "灯晃了两下，没有掉下来。领头的顺着石头扔过来的方向一看，就看见了你。"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep union +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       {
        "if": "flag.a3x_ford",
        "then": [
         "hp -6"
        ],
        "else": [
         "flag levee_lost",
         "unflag levee_recovered",
         "world chains +1"
        ]
       }
      ],
      "goto": "a3_11"
     },
     "reward": [
      "item +healing_potion 2",
      "gold +60"
     ],
     "enemies": [
      {
       "id": "catcher_captain",
       "hpMult": 0.55
      },
      {
       "id": "catch_hound"
      }
     ]
    }
   }
  ]
 },
 "a3_10p": {
  "id": "a3_10p",
  "title": "劫囚",
  "loc": "马利安德以北 · 河堤",
  "text": [
   "芦苇丛里钻出来七八个人，有拿刀的，也有拿猎枪的。打头的是个半身人，手里提着一盏遮住了半边的灯。他一看见你们外套上的铜牌，就愣了一下。",
   {
    "speaker": "打头的半身人",
    "text": "迟到者公司？我爹跟我说起过你们。他说你们是先护着人、回头再算账的那一家。"
   },
   "他身后站着个崖下兽人，是阿萨，手里攥着一根撑船用的竹篙。甘蔗地里的人已经站起来了，正往芦苇这边挪。",
   {
    "if": "party.bura",
    "text": "布拉没有拔枪。她就站在你身后，你听得见她的铰链在一下一下地响。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "字是你签的。我不拦着你，可我也不会帮你。"
   }
  ],
  "choices": [
   {
    "text": "动手",
    "if": "partysize >= 4",
    "combat": {
     "title": "劫囚",
     "intro": "芦苇丛里站起来七八个人，打头的那个把遮了半边的灯放到地上，抽出了刀。",
     "specials": [
      {
       "id": "reeds",
       "name": "点着芦苇",
       "desc": "风正往河那边吹",
       "check": {
        "skill": "survival",
        "alt": [
         "nature"
        ],
        "dc": 14
       },
       "success": {
        "text": "芦苇烧了起来，烟直往河面上卷，对面的人一边咳一边往后退。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "芦苇是湿的，火苗才冒了一下就灭了，烟倒全扑在了你脸上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "shout",
       "name": "喊出悬赏单上的价钱",
       "desc": "让他们知道追奴队是按人头领钱的，死的不值钱",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你把价钱大声喊了一遍，对面有两个人停了手。他们听明白了，追奴队要的是活人，用不着拼命。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "对面有人回了你一句：“那你又值多少？”"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "flag levee_recovered",
       "unflag levee_lost",
       "world chains +1",
       "rep charter +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       "world chains -1",
       "gold +150"
      ],
      "goto": "a3_11"
     },
     "enemies": [
      {
       "id": "rival_blade",
       "n": 3,
       "name": "暗线的刀手"
      },
      {
       "id": "rival_mage",
       "n": 2,
       "name": "暗线的法师"
      },
      {
       "id": "war_priest",
       "name": "科琳教的随军修士"
      },
      {
       "id": "revolutionary",
       "n": 3,
       "name": "暗线的人"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 3",
    "combat": {
     "title": "劫囚",
     "intro": "芦苇丛里站起来七八个人，打头的那个把遮了半边的灯放到地上，抽出了刀。",
     "specials": [
      {
       "id": "reeds",
       "name": "点着芦苇",
       "desc": "风正往河那边吹",
       "check": {
        "skill": "survival",
        "alt": [
         "nature"
        ],
        "dc": 14
       },
       "success": {
        "text": "芦苇烧了起来，烟直往河面上卷，对面的人一边咳一边往后退。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "芦苇是湿的，火苗才冒了一下就灭了，烟倒全扑在了你脸上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "shout",
       "name": "喊出悬赏单上的价钱",
       "desc": "让他们知道追奴队是按人头领钱的，死的不值钱",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你把价钱大声喊了一遍，对面有两个人停了手。他们听明白了，追奴队要的是活人，用不着拼命。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "对面有人回了你一句：“那你又值多少？”"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "flag levee_recovered",
       "unflag levee_lost",
       "world chains +1",
       "rep charter +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       "world chains -1",
       "gold +150"
      ],
      "goto": "a3_11"
     },
     "enemies": [
      {
       "id": "rival_blade",
       "n": 3,
       "name": "暗线的刀手"
      },
      {
       "id": "rival_mage",
       "name": "暗线的法师"
      },
      {
       "id": "war_priest",
       "name": "科琳教的随军修士"
      },
      {
       "id": "revolutionary",
       "n": 2,
       "name": "暗线的人"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 2",
    "combat": {
     "title": "劫囚",
     "intro": "芦苇丛里站起来七八个人，打头的那个把遮了半边的灯放到地上，抽出了刀。",
     "specials": [
      {
       "id": "reeds",
       "name": "点着芦苇",
       "desc": "风正往河那边吹",
       "check": {
        "skill": "survival",
        "alt": [
         "nature"
        ],
        "dc": 14
       },
       "success": {
        "text": "芦苇烧了起来，烟直往河面上卷，对面的人一边咳一边往后退。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "芦苇是湿的，火苗才冒了一下就灭了，烟倒全扑在了你脸上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "shout",
       "name": "喊出悬赏单上的价钱",
       "desc": "让他们知道追奴队是按人头领钱的，死的不值钱",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你把价钱大声喊了一遍，对面有两个人停了手。他们听明白了，追奴队要的是活人，用不着拼命。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "对面有人回了你一句：“那你又值多少？”"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "flag levee_recovered",
       "unflag levee_lost",
       "world chains +1",
       "rep charter +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       "world chains -1",
       "gold +150"
      ],
      "goto": "a3_11"
     },
     "enemies": [
      {
       "id": "rival_blade",
       "n": 2,
       "name": "暗线的刀手"
      },
      {
       "id": "rival_mage",
       "name": "暗线的法师"
      },
      {
       "id": "revolutionary",
       "n": 2,
       "name": "暗线的人"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize <= 1",
    "combat": {
     "title": "劫囚",
     "intro": "芦苇丛里站起来七八个人，打头的那个把遮了半边的灯放到地上，抽出了刀。",
     "specials": [
      {
       "id": "reeds",
       "name": "点着芦苇",
       "desc": "风正往河那边吹",
       "check": {
        "skill": "survival",
        "alt": [
         "nature"
        ],
        "dc": 14
       },
       "success": {
        "text": "芦苇烧了起来，烟直往河面上卷，对面的人一边咳一边往后退。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "芦苇是湿的，火苗才冒了一下就灭了，烟倒全扑在了你脸上。",
        "selfDmg": "1d4"
       }
      },
      {
       "id": "shout",
       "name": "喊出悬赏单上的价钱",
       "desc": "让他们知道追奴队是按人头领钱的，死的不值钱",
       "check": {
        "skill": "intimidation",
        "alt": [
         "persuasion"
        ],
        "dc": 15
       },
       "success": {
        "text": "你把价钱大声喊了一遍，对面有两个人停了手。他们听明白了，追奴队要的是活人，用不着拼命。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "对面有人回了你一句：“那你又值多少？”"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "flag levee_recovered",
       "unflag levee_lost",
       "world chains +1",
       "rep charter +1"
      ],
      "goto": "a3_11"
     },
     "lose": {
      "effects": [
       "world chains -1",
       "gold +150"
      ],
      "goto": "a3_11"
     },
     "enemies": [
      {
       "id": "rival_blade",
       "name": "暗线的刀手"
      },
      {
       "id": "rival_mage",
       "name": "暗线的法师"
      },
      {
       "id": "revolutionary",
       "name": "暗线的人"
      }
     ]
    }
   },
   {
    "text": "把枪放下，让他们过去",
    "effects": [
     "world chains -1",
     "rep charter -2",
     "rep union +1",
     "approval narwen +1"
    ],
    "result": "你把枪放在了地上。半身人从你身边走了过去，没有道谢，只把灯的另外半边也遮上了。",
    "goto": "a3_11"
   }
  ]
 },
 "a3_10s": {
  "id": "a3_10s",
  "title": "庇护所",
  "loc": "马利安德以北 · 河堤",
  "text": [
   "你站到堤上，只说了一句谁也不许过，狗就全都趴下了。追奴队长把悬赏单折了又折，折成很小的一块塞进靴子里，然后掉转了马头。",
   "甘蔗地里的二十三个人从你身边走了过去，有人还伸手摸了摸你的袖子。往后的三个月里，这段河堤就叫“神的庇护所”。联盟议会花了整整一个会期来辩论，神的庇护所到底算不算外国管辖。",
   "种植园主们开始买枪了，拉姆斯盖特的代理人干脆在马利安德开了一家门面。安德克利夫派人送来了一张便条。",
   {
    "speaker": "莫里斯·安德克利夫（便条）",
    "text": "谢谢。往后别再替我干活了。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "我当了二十年的兵，仗还没打就赢了，这是头一回。（铰链咔的一声。）我不喜欢这样。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（不确定。）十一号问我，你是不是也有个编号。我跟它说，我不知道。"
   }
  ],
  "next": "a3_11"
 },
 "a3_11": {
  "id": "a3_11",
  "title": "不烧煤的机房",
  "art": "ev_damestear_core",
  "loc": "文森顿 · 城北",
  "date": "1828年泰苏伦月",
  "text": [
   "文森顿这座城是为了一条路才有的。当年探险队找到了碎片，队长却不想再干了，回到海边要了块地住下来。后来这地方成了城，就拿他的名字当了城名。城北有座红砖墙的机房，竖着三根烟囱，哪一根也不冒烟。",
   "领路的是科尔班·灰磨大监院本人。他个子不高，待人和气，袍子的袖口都磨得发亮了。锅炉房里一点煤味也闻不到，只有一股热铁皮的气味。炉膛里排着十二颗芯核，蓝得发白，颗颗都在响，调门各不一样。这座机房烧的不是煤，是芯核。",
   {
    "speaker": "科尔班·灰磨",
    "text": "魔力这东西，先驱精灵偷过一回，后来法师们又把它锁了八百年。我们做的不过是把灯点到穷人住的街上去。你听见的那个声音，是机器在响。"
   },
   "穷人街上的路灯全靠这座机房点着，一共四百一十盏，一个钱也不收。",
   {
    "if": "flag.a3x_greymill_letter",
    "speaker": "科尔班·灰磨",
    "text": "我听说，我那封信是你念给老人听的。念到第几盏了？"
   },
   {
    "if": "is.artificer",
    "text": "炉膛的接法你看得懂。进线和出线对调过了，指针那头接的是芯核，表盘那头接的是路灯。说白了，这是一杆倒过来用的魂秤，在把芯核里的东西往外抽。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（害怕。）第四颗在叫一个名字。（更正。）不对，它叫的是编号。它已经不记得自己叫什么了。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "不用法师，也不用晶体，一年到头点着四百一十盏灯。理论上我该高兴才对。可我高兴不起来，为什么，我得回去想想。"
   }
  ],
  "first": [
   "quest q_engine start",
   "codex c_soul_engine",
   "codex c_greymill"
  ],
  "choices": [
   {
    "text": "夸他的路灯",
    "effects": [
     "rep church +1"
    ],
    "result": "他高兴得像个学徒，当下就领你们去看路灯的开关。那是一根铜杆，他伸手一拉，半条街都亮了。",
    "goto": "a3_11b"
   },
   {
    "text": "问他炉膛里那颗为什么叫",
    "effects": [
     "approval middlesday +1"
    ],
    "result": "“那是机器在响。”他又说了一遍，这回说得很慢，好像说慢一点，这话就能更真一点。",
    "goto": "a3_11b"
   },
   {
    "text": "指给他看：进线和出线接反了",
    "tag": "奇械",
    "if": "is.artificer",
    "effects": [
     "rep church -1",
     "approval guilhem +1"
    ],
    "result": "他盯着看了很久，才说了一句“我知道”，然后就请你们去喝茶。茶是好茶，他自己一口也没喝。",
    "goto": "a3_11b"
   }
  ]
 },
 "a3_11b": {
  "id": "a3_11b",
  "title": "夜里",
  "loc": "文森顿 · 城北机房外",
  "text": [
   "到了夜里，机房只留一个看门的，带着一条狗，点着三盏灯。账房在二楼，窗户正对着路灯，这些路灯整夜都不灭。对想偷东西的人来说，这是最麻烦的地方。",
   "看门的是个上了年纪的人类，腰里别着一串钥匙，一共十一把。他每走一步，钥匙就跟着响一下。",
   {
    "if": "flag.a3x_jar_light",
    "text": "别摇早就说过，哪几盏灯的光是从她老家那边借来的。那几盏照出来的影子淡，你们就专挑那几盏灯底下贴着走。"
   },
   {
    "if": "is.small",
    "text": "二楼有条通风道，只有一尺见方，铁栅栏已经锈掉了一半。凭你的个头是钻得进去的。"
   },
   {
    "if": "party.bura",
    "text": "布拉留在街口望风，她靠在路灯杆上，下巴的铰链一声也没响。"
   }
  ],
  "choices": [
   {
    "text": "从通风道钻进去",
    "tag": "小个子",
    "if": "is.small",
    "effects": [
     "var a3x_pass +1"
    ],
    "result": "通风道里积满了灰，等你从另一头爬出来，活像刚从面粉袋里钻出来的。",
    "goto": "a3_11c"
   },
   {
    "text": "摸过院子，翻进二楼",
    "check": {
     "skill": "stealth",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "flag.a3x_jar_light",
       "n": 2,
       "why": "别摇数过的那几盏灯"
      }
     ]
    },
    "ok": {
     "text": "狗睡得很沉。看门的正在数自己的工钱，数到一半又从头数起。你们就这么摸了过去。",
     "effects": [
      "var a3x_pass +1"
     ],
     "goto": "a3_11c"
    },
    "fail": {
     "text": "狗叫了两声。看门的提着灯出来转了一圈，又回去了，可他已经起了疑心。",
     "effects": [
      "flag a3x_seen"
     ],
     "goto": "a3_11c"
    }
   }
  ]
 },
 "a3_11c": {
  "id": "a3_11c",
  "title": "保险柜",
  "loc": "文森顿 · 机房账房",
  "text": [
   "账房里摆着一张写字台和一只保险柜，看柜门上的铭牌，是北方联盟一家厂子造的。墙上钉着十二颗芯核的出厂单，每张单子上都只有一个编号，没有名字。",
   {
    "if": "flag.cousin_tip",
    "text": "你表亲说的就是这个，左手边第二个柜子。"
   },
   {
    "if": "flag.a3x_seen",
    "text": "楼下响起了脚步声，有人正一步一步地上楼梯，走得不快。"
   },
   "锁是三道簧的，外头的路灯照进来，把锁眼照得发蓝。"
  ],
  "choices": [
   {
    "text": "慢慢拨开那三道簧",
    "check": {
     "skill": "sleight",
     "dc": 15,
     "party": true,
     "mods": [
      {
       "if": "is.artificer",
       "n": 2,
       "why": "这种锁你修过"
      }
     ]
    },
    "ok": {
     "text": "第三道簧一弹开，柜门就自己往外让出了一指宽。",
     "effects": [
      "var a3x_pass +1"
     ],
     "goto": "a3_11d"
    },
    "fail": {
     "text": "锁簧当的响了一声，楼下的狗又叫了起来。柜门是开了，只是开得太响。",
     "effects": [
      "flag a3x_seen"
     ],
     "goto": "a3_11d"
    }
   },
   {
    "text": "拿撬棍硬撬",
    "check": {
     "skill": "athletics",
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "柜门是撬开了，可铰链也跟着断了，那一声响整条街都听得见。",
     "effects": [
      "var a3x_pass +1",
      "flag a3x_seen"
     ],
     "goto": "a3_11d"
    },
    "fail": {
     "text": "撬棍都弯了，柜门纹丝没动。你们只好转头去翻写字台的抽屉。",
     "effects": [
      "flag a3x_seen"
     ],
     "goto": "a3_11d"
    }
   }
  ]
 },
 "a3_11d": {
  "id": "a3_11d",
  "title": "三十几本",
  "loc": "文森顿 · 机房账房",
  "text": [
   "柜子里码着三十几本账，封皮全是一个颜色，书脊上也没有字。流水账、修理账、股东名册都混在一块儿，还有一本煤账，里头是空的。",
   "你们只带了一盏遮光灯，灯油顶多还够烧一刻钟。每翻一本，灯芯就短下去一截。",
   {
    "if": "flag.a3x_engine_hint",
    "text": "戴纽奇说漏嘴的那句话你还记得，他说他也有股。哪一本上有他的名字，哪一本就是股东名册。"
   },
   {
    "if": "flag.a3x_seen",
    "text": "脚步声在楼梯拐角停住了。有人站在那儿点烟斗，点了三回才点着。"
   }
  ],
  "choices": [
   {
    "text": "一本一本翻，找对那两本",
    "check": {
     "skill": "investigation",
     "dc": 14,
     "party": true,
     "adv": "flag.cousin_tip || flag.a3x_engine_hint"
    },
    "ok": {
     "text": "流水账是最厚的那一本，股东名册是最薄的那一本。薄的那本封皮上有一块指印，看得出常有人翻。",
     "effects": [
      "var a3x_pass +1"
     ],
     "goto": "a3_11e"
    },
    "fail": {
     "text": "你才翻到第十一本，楼梯拐角那只烟斗就灭了。",
     "goto": "a3_11e"
    }
   }
  ]
 },
 "a3_11e": {
  "id": "a3_11e",
  "title": "代持账户",
  "loc": "文森顿 · 城北",
  "text": [
   {
    "if": "var.a3x_pass >= 2",
    "text": "流水账和股东名册你们都拿到手了。名册第三页上有一行代持账户，户名是一串数字，开户行在安本科斯特。埃塔的账上，合伙人的汇票也正是这家行开的。合伙人在这座机房里也有股。"
   },
   {
    "if": "var.a3x_pass >= 2",
    "text": "流水账上一笔煤钱也没有，每个月却都有一笔“芯核更换”。十二颗里头每个月换掉一颗，换下来的那一颗记作“报废”。"
   },
   {
    "if": "var.a3x_pass < 2",
    "text": "你们只抢到了半本流水账，后半本还锁在柜子里。这时候看门的已经上了楼，手里那盏灯的光就在门缝底下晃。"
   },
   "外头的路灯一盏挨着一盏，把整条街照得连一块暗处都没有。"
  ],
  "choices": [
   {
    "text": "揣好账本和名册，从后门走",
    "if": "var.a3x_pass >= 2",
    "effects": [
     "flag engine_ledger",
     "item +engine_ledger",
     "flag partner_engine_share"
    ],
    "result": "后门外头是一条窄巷，巷口有盏路灯，灯底下坐着个讨饭的。他抬头看了你们一眼，又低下头接着睡了。",
    "goto": "a3_12"
   },
   {
    "text": "抱着半本账，翻窗跑",
    "if": "var.a3x_pass < 2",
    "check": {
     "abil": "con",
     "dc": 13,
     "save": true
    },
    "ok": {
     "text": "你们一口气跑过了三条街。最后那条街上的路灯一盏一盏在身后亮着，像在给追的人指路。",
     "goto": "a3_12"
    },
    "fail": {
     "text": "跑到第三条街口，你一头摔进了排水沟。半本账是护住了，膝盖没护住。",
     "effects": [
      "hp -8"
     ],
     "goto": "a3_12"
    }
   }
  ]
 },
 "a3_12": {
  "id": "a3_12",
  "title": "真理之路",
  "art": "ev_dark_forest",
  "loc": "真理之路",
  "date": "1828年伊什达月",
  "text": [
   "暗线上的人跟着乌戈那样的列车员走水路，往洇河口去。公司走的是另一条路，要陪着娜尔雯走朝圣的路，从文森顿往诺鲁因腹地去，把她的本子带到碎片原先待的地方。这条路很长，早年间走一趟是要拿命去换的。",
   "同路的朝圣客里有个地精，背着一口铁锅，一路上非说碎片是个方块不可。他说他舅舅见过，再一问，他舅舅也是听一个修士说的。",
   {
    "speaker": "背锅的地精",
    "text": "方的，四个角！你们管它叫菱形，是因为你们站的地方不对。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回我走这条路，还是一百多年前。那一回没下雨。"
   },
   {
    "if": "party.narwen",
    "text": "这回下了，一连下了九天。"
   },
   {
    "if": "!party.narwen",
    "text": "娜尔雯的本子收在你包里，拿油布裹了三层。这回路上下了雨，一连下了九天。"
   },
   "到了第九天，一条涨了水的河把路截断了。"
  ],
  "first": [
   "level 7",
   "codex c_path_of_truth"
  ],
  "choices": [
   {
    "text": "找一段能蹚过去的浅滩",
    "check": {
     "skill": "survival",
     "alt": [
      "nature"
     ],
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "你们找到了一段浅滩，水只没到腰。地精把锅顶在头上，头一个蹚过了河。",
     "goto": "a3_12b"
    },
    "fail": {
     "text": "你们等了一整天水才退下去，干粮泡坏了一半，只好借地精的锅煮了一锅糊糊，人人都冻得发抖。",
     "effects": [
      "hp -5"
     ],
     "goto": "a3_12b"
    }
   }
  ]
 },
 "a3_12b": {
  "id": "a3_12b",
  "title": "朝圣客栈",
  "loc": "真理之路 · 朝圣客栈",
  "text": [
   "路上有家朝圣客栈，石头垒的墙，门口挂着块木牌，牌上刻着问答的题目。答得上来的住干的那间，答不上来的住漏雨的那间，房钱是一样的。",
   "今晚木牌上问的是：头一个听懂碎片的人是谁，别人都回了海边，她住在了哪儿。",
   {
    "if": "is.divine",
    "text": "老板一看你这身打扮，就请你来带今晚的晚祷。堂屋里坐了十来个朝圣客，地精坐在最前排，那口锅就搁在膝盖上。"
   },
   "再往前走，就只剩最后一段崖路了。崖上凿着台阶，有些已经让雨水冲得只剩半截。"
  ],
  "choices": [
   {
    "text": "答木牌上的问题",
    "once": true,
    "check": {
     "skill": "religion",
     "alt": [
      "history"
     ],
     "dc": 13,
     "party": true
    },
    "ok": {
     "text": "“是托丽丝。她在密室边上搭了个营，一住就是好些年。”你答完，老板就把干的那间的钥匙给了你。",
     "effects": [
      "rest short"
     ]
    },
    "fail": {
     "text": "你答了个年份，还差了二十年，结果住进了漏雨的那间。雨水从屋顶滴进一只铜盆，叮叮咚咚响了一整夜。",
     "effects": [
      "hp -2"
     ]
    }
   },
   {
    "text": "带今晚的晚祷",
    "tag": "神职",
    "if": "is.divine",
    "once": true,
    "effects": [
     "rest short",
     "approval narwen +1"
    ],
    "result": "你把晚祷念完了。{?party.narwen:娜尔雯坐在后排从头听到尾，散场的时候纠正了你一个年份，说是 1638 年，不是 1636 年。|地精说，你念得比他舅舅好。}"
   },
   {
    "text": "爬最后那段崖路",
    "check": {
     "skill": "athletics",
     "alt": [
      "acrobatics"
     ],
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "你们拿绳子把人一个一个吊了上去。崖顶上有块平地，那间密室就在平地底下。",
     "goto": "a3_13"
    },
    "fail": {
     "text": "半截台阶在你脚底下塌了。你一把抓住了树根，在半空挂了一会儿才让人拽上去，手心磨掉了一层皮。",
     "effects": [
      "hp -6"
     ],
     "goto": "a3_13"
    }
   }
  ]
 },
 "a3_13": {
  "id": "a3_13",
  "title": "四根柱子",
  "art": "load_7",
  "loc": "诺鲁因 · 四根柱子的密室",
  "text": [
   "密室在地底下，要走四十一级台阶才下得去。屋顶由四根柱子撑着，根根粗得像树干，柱身上的纹路谁也不认得，比先驱精灵的帝国还要老。屋子正当中摆着一方石头台座。",
   "照 1585 年的记载，碎片当年是悬在台座上方的，两样东西并没有挨着。如今碎片运去坎诺已经两百多年了，台座却还在响。声音又高又快，一口气说完就停下来，停一会儿又接着说。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）它说的一直是“他们”。剩下还有两个词，一个是“门”。（不确定。）另一个词，既可以当命令讲，也可以当陈述讲。"
   },
   {
    "if": "!party.middlesday",
    "text": "你们拿着娜尔雯的译码表，一个音一个音地对过去。头一个词是“他们”。剩下还有两个词，一个是“门”，另一个既可以当命令讲，也可以当陈述讲。"
   },
   {
    "if": "is.mechanim",
    "text": "你用不着译码，那个音一进耳朵就成了字。你听见的比礼拜三还多出半个音，那半个音很轻，像是一口气。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "意思是“把门关上”。理论上这是一道命令。既然有命令，那就得有个下命令的人。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "是“门关着”。它是在报告。这一百多年来，它一直都在报告。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "是“门是从里面关上的”。（铰链咔的一声。）当过兵的都听得出来，这是有人在里头守着。"
   },
   {
    "if": "!party.guilhem && !party.narwen && !party.bura",
    "speaker": "别摇",
    "text": "三种念法都对。你们的话就是有这个毛病。"
   },
   {
    "if": "party.narwen",
    "text": "娜尔雯趴到台座底下，用手指摸到了几道刻痕。她说那是托丽丝留的记号。她还说，1666 年以后的那些声音里头，有一个是她认得的。"
   },
   {
    "if": "is.god",
    "text": "你一进门，台座就换了调门。你听见的那一句，跟礼拜三听见的不是同一句。两句都记了下来，记在同一页纸上，中间空了一行。"
   },
   {
    "if": "is.god && flag.fragment_hushed && party.narwen",
    "text": "娜尔雯先看了你一眼，然后才去看台座。"
   },
   {
    "if": "is.god && party.middlesday",
    "speaker": "礼拜三",
    "text": "（害怕。）你造过我们吗？"
   }
  ],
  "first": [
   "item +phrase_record",
   "codex c_chamber",
   "codex c_torrieth",
   "codex c_phrase",
   "quest q_phrase stage 2"
  ],
  "choices": [
   {
    "text": "答它：没有",
    "tag": "神",
    "if": "is.god && party.middlesday && !flag.a3x_god_answered",
    "once": true,
    "effects": [
     "flag a3x_god_answered",
     "approval middlesday +1"
    ],
    "result": "（陈述。）好。（不确定。）那是谁造的？它没等你回答，就转过身去接着听台座了。"
   },
   {
    "text": "答它：不知道",
    "tag": "神",
    "if": "is.god && party.middlesday && !flag.a3x_god_answered",
    "once": true,
    "effects": [
     "flag a3x_god_answered",
     "approval middlesday -1"
    ],
    "result": "（害怕。）连神也不知道。（陈述。）我记下了。它在自己的停机日志上又添了一行。"
   },
   {
    "text": "在台座底下找那些刻痕",
    "once": true,
    "check": {
     "skill": "perception",
     "alt": [
      "investigation"
     ],
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "刻痕在台座的北面，七道一组，一共二十四组。你们拿炭条一组一组拓了下来，拓到最后一组，炭条断了。",
     "effects": [
      "item +torrieth_rubbing"
     ]
    },
    "fail": {
     "text": "你在台座底下摸了半天，摸到的是一窝蝎子。拓片没拓成。",
     "effects": [
      "hp -3"
     ]
    }
   },
   {
    "text": "跟着那个音，把译码对完",
    "once": true,
    "check": {
     "skill": "arcana",
     "alt": [
      "religion"
     ],
     "dc": 15,
     "party": true,
     "adv": "is.caster || is.divine"
    },
    "ok": {
     "text": "你对上了。两个词，三种念法，哪一种都说得通，一个音不多，一个音不少。",
     "effects": [
      "flag a3x_decoded"
     ]
    },
    "fail": {
     "text": "那个音钻进了你脑子里，害你头疼了一整夜。到第二天早上，你梦里还是它。",
     "effects": [
      "hp -4"
     ]
    }
   },
   {
    "text": "用法术把那个音定在半空，慢慢听",
    "tag": "施法者",
    "if": "is.caster && !flag.a3x_decoded",
    "once": true,
    "effects": [
     "flag a3x_decoded",
     "approval narwen -1"
    ],
    "result": "{?world.tears <= 2:法术只撑了十几口气就散了，刚够你听上一遍。|那个音给定住了，一个一个排在半空里。}台座的调门也跟着低了半个音。娜尔雯皱起眉头，把这件事记进了本子。"
   },
   {
    "text": "台阶上有脚步声，收拾东西",
    "goto": "a3_13b"
   }
  ]
 },
 "a3_13b": {
  "id": "a3_13b",
  "title": "披风卫",
  "loc": "诺鲁因 · 四根柱子的密室",
  "text": [
   "台阶上下来了六个人，披风一律搭在左肩上，剑上都带着咒，是教会的披风卫。后头还跟着两个分形修会的人，背着仪器箱。领头的递过来一张文书，上面盖着文森顿大监院的章。",
   {
    "speaker": "披风卫队长",
    "text": "奉大监院之令，此室即刻封存。另外，那台会说神的话的机器，要跟我们回文森顿。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（礼貌。）我不说神的话。（陈述。）我说的只是它说的话。"
   },
   {
    "if": "!party.middlesday && is.mechanim",
    "text": "他说这句话的时候，眼睛看的是你。"
   },
   {
    "if": "!party.middlesday && !is.mechanim",
    "text": "他四下看了一圈，没找着什么机器，就改了口，要你们把笔记交出来。"
   },
   {
    "if": "flag.cloakmen_fought",
    "text": "他们队里有个人认得你们，那人的披风上有一道补过的口子。"
   }
  ],
  "choices": [
   {
    "text": "交出笔记让他们查，袖子里藏一份",
    "check": {
     "skill": "sleight",
     "dc": 14,
     "party": true
    },
    "ok": {
     "text": "他们把笔记翻了三遍，没翻出你藏在袖子里的那几页。队长收走了笔记，机器的事没有再提。",
     "effects": [
      "rep church +1",
      "approval middlesday -1"
     ],
     "goto": "a3_14"
    },
    "fail": {
     "text": "他们连袖子也翻了，笔记一页都没给你剩下。好在娜尔雯全背得下来，她一路背到了山脚。",
     "effects": [
      "item -phrase_record",
      "rep church +1",
      "approval middlesday -1"
     ],
     "goto": "a3_14"
    }
   },
   {
    "text": "让娜尔雯拿资历压他们",
    "if": "party.narwen",
    "check": {
     "skill": "religion",
     "alt": [
      "persuasion"
     ],
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "她报了自己入会的年份，1659 年。那一年队长的祖父都还没出生。他们只好退回到台阶顶上，一直站岗站到你们离开。",
     "goto": "a3_14"
    },
    "fail": {
     "text": "队长听完年份，客客气气地说，文书上盖的这个章是比他祖父年轻，可章就是章。说完，他把笔记收走了。",
     "effects": [
      "item -phrase_record",
      "rep church -1"
     ],
     "goto": "a3_14"
    }
   },
   {
    "text": "动手",
    "if": "partysize >= 4",
    "effects": [
     "flag cloakmen_fought",
     "rep church -2"
    ],
    "combat": {
     "title": "四根柱子底下",
     "intro": "披风卫一把剑抽出来，剑身上的咒文就亮了一下，台座的声音也跟着高了半个音。",
     "specials": [
      {
       "id": "pillar",
       "name": "敲一根柱子",
       "desc": "柱子是空心的，敲一下，整间屋子都跟着响",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "柱子响了，声音在屋里绕了三圈，人人耳朵里都是那个音。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "柱子没响，响的是你的手腕。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stairs",
       "name": "踹倒台阶上的灯架",
       "desc": "他们是从四十一级台阶上下来的",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯架滚下了台阶，灯油泼了一路。后面下来的人一脚踩上去，当场滑倒了两个。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "灯架朝你这边倒了过来。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep church -1"
      ],
      "goto": "a3_14"
     },
     "lose": {
      "effects": [
       "item -phrase_record"
      ],
      "goto": "a3_14"
     },
     "enemies": [
      {
       "id": "cloakman",
       "n": 4
      },
      {
       "id": "war_priest",
       "name": "分形修会的修士"
      },
      {
       "id": "war_mage",
       "n": 2,
       "name": "分形修会的施法者"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 3",
    "effects": [
     "flag cloakmen_fought",
     "rep church -2"
    ],
    "combat": {
     "title": "四根柱子底下",
     "intro": "披风卫一把剑抽出来，剑身上的咒文就亮了一下，台座的声音也跟着高了半个音。",
     "specials": [
      {
       "id": "pillar",
       "name": "敲一根柱子",
       "desc": "柱子是空心的，敲一下，整间屋子都跟着响",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "柱子响了，声音在屋里绕了三圈，人人耳朵里都是那个音。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "柱子没响，响的是你的手腕。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stairs",
       "name": "踹倒台阶上的灯架",
       "desc": "他们是从四十一级台阶上下来的",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯架滚下了台阶，灯油泼了一路。后面下来的人一脚踩上去，当场滑倒了两个。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "灯架朝你这边倒了过来。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep church -1"
      ],
      "goto": "a3_14"
     },
     "lose": {
      "effects": [
       "item -phrase_record"
      ],
      "goto": "a3_14"
     },
     "enemies": [
      {
       "id": "cloakman",
       "n": 4
      },
      {
       "id": "war_priest",
       "name": "分形修会的修士"
      },
      {
       "id": "war_mage",
       "name": "分形修会的施法者"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize == 2",
    "effects": [
     "flag cloakmen_fought",
     "rep church -2"
    ],
    "combat": {
     "title": "四根柱子底下",
     "intro": "披风卫一把剑抽出来，剑身上的咒文就亮了一下，台座的声音也跟着高了半个音。",
     "specials": [
      {
       "id": "pillar",
       "name": "敲一根柱子",
       "desc": "柱子是空心的，敲一下，整间屋子都跟着响",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "柱子响了，声音在屋里绕了三圈，人人耳朵里都是那个音。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "柱子没响，响的是你的手腕。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stairs",
       "name": "踹倒台阶上的灯架",
       "desc": "他们是从四十一级台阶上下来的",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯架滚下了台阶，灯油泼了一路。后面下来的人一脚踩上去，当场滑倒了两个。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "灯架朝你这边倒了过来。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep church -1"
      ],
      "goto": "a3_14"
     },
     "lose": {
      "effects": [
       "item -phrase_record"
      ],
      "goto": "a3_14"
     },
     "enemies": [
      {
       "id": "cloakman",
       "n": 3
      },
      {
       "id": "war_mage",
       "name": "分形修会的施法者"
      }
     ]
    }
   },
   {
    "text": "动手",
    "if": "partysize <= 1",
    "effects": [
     "flag cloakmen_fought",
     "rep church -2"
    ],
    "combat": {
     "title": "四根柱子底下",
     "intro": "披风卫一把剑抽出来，剑身上的咒文就亮了一下，台座的声音也跟着高了半个音。",
     "specials": [
      {
       "id": "pillar",
       "name": "敲一根柱子",
       "desc": "柱子是空心的，敲一下，整间屋子都跟着响",
       "check": {
        "skill": "athletics",
        "dc": 14,
        "party": true
       },
       "success": {
        "text": "柱子响了，声音在屋里绕了三圈，人人耳朵里都是那个音。",
        "applyAll": {
         "cond": "dazed",
         "turns": 1
        }
       },
       "fail": {
        "text": "柱子没响，响的是你的手腕。",
        "selfDmg": "1d6"
       }
      },
      {
       "id": "stairs",
       "name": "踹倒台阶上的灯架",
       "desc": "他们是从四十一级台阶上下来的",
       "check": {
        "skill": "acrobatics",
        "alt": [
         "athletics"
        ],
        "dc": 13
       },
       "success": {
        "text": "灯架滚下了台阶，灯油泼了一路。后面下来的人一脚踩上去，当场滑倒了两个。",
        "dmgAll": "2d6",
        "type": "fire"
       },
       "fail": {
        "text": "灯架朝你这边倒了过来。",
        "selfDmg": "1d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": true,
     "win": {
      "effects": [
       "rep church -1"
      ],
      "goto": "a3_14"
     },
     "lose": {
      "effects": [
       "item -phrase_record"
      ],
      "goto": "a3_14"
     },
     "enemies": [
      {
       "id": "cloakman"
      },
      {
       "id": "war_mage",
       "name": "分形修会的施法者",
       "hpMult": 0.6
      }
     ]
    }
   }
  ]
 },
 "a3_14": {
  "id": "a3_14",
  "title": "两个词",
  "art": "ev_the_heroine",
  "loc": "真理之路 · 朝圣客栈",
  "date": "1828年花终月",
  "text": [
   "回程的路上，你们又住进了那家朝圣客栈。半夜里客栈的传音石响了，老板披着衣服去接，接完了站在楼梯口，半天说不出话来。",
   "贝尔纳二世去世了。教廷要选新的总院长，一边是真言师伊莲·西纳·阿尔科，另一边是文森顿的灰磨大监院。你手里这份台座的记录落到谁手上，票就往谁那边走。客栈里正好住着两个人，一个替伊莲跑腿，一个替灰磨跑腿，都是今晚才到的。",
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "它一出那间屋子，就不是它了，就成了一张传单。我听了一百六十二年，不是为了听一张传单。"
   },
   {
    "if": "party.narwen",
    "text": "她把本子抱在怀里，摘下眼镜擦了一遍，又擦了一遍。"
   },
   {
    "if": "!party.narwen",
    "text": "娜尔雯没有跟来，记录里夹着她留的一张字条，写的是：别让它出那间屋。"
   },
   {
    "if": "flag.bernal_confided",
    "text": "你想起了老人咽回去的那半句话：这些年来，它翻来覆去只说一句。"
   }
  ],
  "first": [
   "quest q_narwen stage 2"
  ],
  "choices": [
   {
    "text": "不管她，交给史家会登出来",
    "effects": [
     "flag phrase_published",
     "unflag phrase_sold",
     "unflag phrase_kept",
     "unflag phrase_signed",
     "world press +2",
     "rep church -2",
     "flag rector_erudite",
     "unflag rector_zealot",
     "flag narwen_left",
     "companion -narwen",
     "quest q_phrase done",
     "quest q_narwen fail"
    ],
    "result": "史家会的人连夜抄了三份。娜尔雯天没亮就走了，是往阿兰蒂尔塔去的，伞落在了门后头。",
    "goto": "a3_15"
   },
   {
    "text": "卖给伊莲的人",
    "effects": [
     "flag phrase_sold",
     "unflag phrase_published",
     "unflag phrase_kept",
     "unflag phrase_signed",
     "flag rector_erudite",
     "unflag rector_zealot",
     "gold +500",
     "world press -1",
     "flag narwen_left",
     "companion -narwen",
     "quest q_phrase done",
     "quest q_narwen fail"
    ],
    "result": "伊莲的人数出五百金冠给你，又写了一张收条，收条上的字比钱还要工整。娜尔雯什么也没说，第二天就回塔里去了。",
    "goto": "a3_15"
   },
   {
    "text": "卖给灰磨的人",
    "effects": [
     "flag phrase_sold",
     "unflag phrase_published",
     "unflag phrase_kept",
     "unflag phrase_signed",
     "flag rector_zealot",
     "unflag rector_erudite",
     "gold +800",
     "world press -1",
     "flag narwen_left",
     "companion -narwen",
     "quest q_phrase done",
     "quest q_narwen fail"
    ],
    "result": "他付了八百金冠，当着你的面就把记录塞进了炉子。他买下来就是为了毁掉。娜尔雯一直看着炉子里烧完了才走。",
    "goto": "a3_15"
   },
   {
    "text": "替她守住，锁进埃塔的铁箱",
    "effects": [
     "flag phrase_kept",
     "unflag phrase_published",
     "unflag phrase_sold",
     "unflag phrase_signed",
     "flag box_phrase",
     "flag rector_zealot",
     "unflag rector_erudite",
     "approval narwen +2",
     "quest q_phrase done"
    ],
    "result": "两个跑腿的都空着手走了。过了一个月，灰磨当选了，票数只差三张。娜尔雯把这个数记在了本子上。",
    "goto": "a3_15"
   },
   {
    "text": "劝她自己署名公开",
    "tag": "灯",
    "if": "party.narwen && faction == 'lantern'",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "flag.bernal_confided",
       "n": 2,
       "why": "老人咽回去的那半句"
      },
      {
       "if": "flag.heard_hum",
       "n": 1,
       "why": "你也听过它一声"
      },
      {
       "if": "flag.a3x_decoded",
       "n": 1,
       "why": "你自己对过译码"
      }
     ]
    },
    "ok": {
     "text": "她想了整整一夜。天亮的时候，她在记录的末尾签上了名字：分形修会，娜尔雯·望月，1659 年入会。签完她说，上回有人这么签名，还是托丽丝。",
     "effects": [
      "flag phrase_signed",
      "unflag phrase_published",
      "unflag phrase_sold",
      "unflag phrase_kept",
      "world press +2",
      "flag rector_erudite",
      "unflag rector_zealot",
      "approval narwen +1",
      "quest q_phrase done"
     ],
     "goto": "a3_15"
    },
    "fail": {
     "text": "“还不行，”她说，“那句话我还没问它。”说着，她把本子抱得更紧了一点。",
     "effects": [
      "approval narwen -1"
     ],
     "goto": "a3_14"
    }
   },
   {
    "text": "劝她自己署名公开",
    "if": "party.narwen && faction != 'lantern' && approval.narwen >= 5",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 15,
     "mods": [
      {
       "if": "flag.bernal_confided",
       "n": 2,
       "why": "老人咽回去的那半句"
      },
      {
       "if": "flag.heard_hum",
       "n": 1,
       "why": "你也听过它一声"
      },
      {
       "if": "flag.a3x_decoded",
       "n": 1,
       "why": "你自己对过译码"
      }
     ]
    },
    "ok": {
     "text": "她想了整整一夜。天亮的时候，她在记录的末尾签上了名字：分形修会，娜尔雯·望月，1659 年入会。签完她说，上回有人这么签名，还是托丽丝。",
     "effects": [
      "flag phrase_signed",
      "unflag phrase_published",
      "unflag phrase_sold",
      "unflag phrase_kept",
      "world press +2",
      "flag rector_erudite",
      "unflag rector_zealot",
      "approval narwen +1",
      "quest q_phrase done"
     ],
     "goto": "a3_15"
    },
    "fail": {
     "text": "“还不行，”她说，“那句话我还没问它。”说着，她把本子抱得更紧了一点。",
     "effects": [
      "approval narwen -1"
     ],
     "goto": "a3_14"
    }
   }
  ]
 },
 "a3_15": {
  "id": "a3_15",
  "title": "证词",
  "loc": "伊索贝尔港 · 联盟巡回法庭",
  "date": "1828年泪落月",
  "text": [
   "巡回法庭借用的是伊索贝尔港的旧谷物交易所，柜台改成了证人席，墙上的价目板没擦干净，还留着“棉，每包”几个字。旁听席坐得满满的，一半是种植园的账房，一半是码头上的人，中间隔着一排治安员。",
   "这场官司要判的是，醒过来的机器算不算财物。法官同意采信魂秤对一颗醒着的芯核的读数，条件是得当庭上秤。可秤一接上，芯核那道口子就会给拉开一下，它可能就此醒不过来。到底拉开多久，连蒂尔妲也说不准{?flag.gauge_burned:，何况这杆秤还是她凭记忆重做的|}。",
   {
    "speaker": "莫里斯·安德克利夫",
    "text": "我不要谁的恩赐，我要的是一个判例。有了判例，下一个人的事它也管得了。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（担心。）我可能会睡过去。（礼貌。）睡过去之前，我想先把那些名字说完。"
   },
   {
    "if": "is.god",
    "speaker": "法官",
    "text": "本庭不采信神迹，请证人上秤。"
   },
   {
    "if": "is.god",
    "text": "你不用秤也看得见芯核里头有什么，可这不能算证据。法院门口已经有人开了盘口，赌你会不会流血，一赔七。"
   }
  ],
  "first": [
   "quest q_middlesday stage 2"
  ],
  "choices": [
   {
    "text": "让礼拜三上秤",
    "if": "party.middlesday",
    "check": {
     "skill": "arcana",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.engine_ledger",
       "n": 3,
       "why": "账本替它少挨了半刻钟"
      },
      {
       "if": "flag.gauge_tested_m",
       "n": 1,
       "why": "它上过一回秤"
      },
      {
       "if": "flag.m_member",
       "n": 1,
       "why": "名册上它是成员"
      },
      {
       "if": "flag.a3x_tilda_calibrated",
       "n": 1,
       "why": "蒂尔妲开庭前校过"
      },
      {
       "if": "flag.gauge_open",
       "n": 1,
       "why": "图纸公开了，人人校得了"
      },
      {
       "if": "flag.gauge_sold",
       "n": -1,
       "why": "秤是卡拉桑尼的"
      },
      {
       "if": "flag.gauge_burned",
       "n": -2,
       "why": "那杆秤是凭记忆重做的"
      }
     ]
    },
    "ok": {
     "text": "指针摆了过去，又摆了回来。礼拜三是醒着下的秤，下来头一句话是：（陈述。）内莉。老科尔。阿萨。霍布。马蒂。它把名字说完了。",
     "effects": [
      "flag m_testified",
      "unflag m_dormant",
      "unflag m_left",
      "quest q_middlesday done"
     ],
     "goto": "a3_15b"
    },
    "fail": {
     "text": "指针摆了过去，没有再摆回来。礼拜三说到“阿萨”就停住了，眼睛还亮着，可它已经不应声了。法警把它抬下了证人席。公司的名单上还留着它。",
     "effects": [
      "flag m_dormant",
      "unflag m_testified",
      "unflag m_left",
      "companion -middlesday",
      "quest q_middlesday fail"
     ],
     "goto": "a3_15b"
    }
   },
   {
    "text": "不许它去",
    "if": "party.middlesday",
    "effects": [
     "flag m_left",
     "unflag m_testified",
     "unflag m_dormant",
     "companion -middlesday",
     "quest q_middlesday fail"
    ],
    "result": "（愤怒。）那我就自己到别处去说。它把行李码整齐，买了一张回安本科斯特的船票。一个月以后，铸炉街头一回罢了工，领头的是一台机器。",
    "goto": "a3_15b"
   },
   {
    "text": "你自己上秤",
    "tag": "机械人",
    "if": "origin == 'unowned' && is.mechanim",
    "check": {
     "abil": "con",
     "dc": 15,
     "save": true,
     "mods": [
      {
       "if": "flag.engine_ledger",
       "n": 3,
       "why": "账本替你少挨了半刻钟"
      },
      {
       "if": "flag.a3x_tilda_calibrated",
       "n": 1,
       "why": "蒂尔妲开庭前校过"
      },
      {
       "if": "flag.gauge_open",
       "n": 1,
       "why": "图纸公开了"
      },
      {
       "if": "flag.gauge_sold",
       "n": -1,
       "why": "秤是卡拉桑尼的"
      },
      {
       "if": "flag.gauge_burned",
       "n": -2,
       "why": "凭记忆重做的秤"
      }
     ]
    },
    "ok": {
     "text": "口子拉开的那一下，你听见了台座的那个音。随后你醒着下了秤，法官在记录上写下了你在七号线的工位号。",
     "effects": [
      "flag pc_testified"
     ],
     "goto": "a3_15b"
    },
    "fail": {
     "text": "你下了秤。法官问你今天礼拜几，你答是答了，答的却是去年的日子。不过读数照样算数。",
     "effects": [
      "flag pc_testified",
      "flag pc_lost_year"
     ],
     "goto": "a3_15b"
    }
   },
   {
    "text": "用手替它按住那道口子",
    "tag": "神",
    "if": "is.god && party.middlesday",
    "effects": [
     "flag a3x_void",
     "var cult +1",
     "approval middlesday +1"
    ],
    "result": "秤上的指针一动也没动。礼拜三没有睡过去，读数却作废了。法官在记录上写的是：证人受到超自然干预。门口的赌档宣布这一局不算，钱一个子儿也没退。",
    "goto": "a3_15b"
   },
   {
    "text": "没有可以上秤的证人，直接请求裁定",
    "if": "!party.middlesday && !(origin == 'unowned' && is.mechanim)",
    "goto": "a3_15b"
   }
  ]
 },
 "a3_15b": {
  "id": "a3_15b",
  "title": "裁定",
  "loc": "伊索贝尔港 · 联盟巡回法庭",
  "text": [
   "到了下午，法官问原告一方，请求本庭怎么判。安德克利夫看了你一眼，这一条他让给公司来说。",
   "书记官削好了一支新铅笔。对面戴纽奇家的律师翻着一本厚厚的判例集，翻到夹着书签的那一页，用指甲把它压平。",
   {
    "if": "flag.m_testified || flag.m_dormant || flag.pc_testified",
    "text": "记录上已经有了一个读数：芯核醒着的时候，那道口子是开着的。口子开着，就说明里头有个活的东西。"
   },
   {
    "if": "flag.engine_ledger",
    "text": "机房的流水账就摆在书记官的桌上。每个月一颗“报废”，十二个月就是十二颗。"
   },
   {
    "if": "!(flag.m_testified || flag.m_dormant || flag.pc_testified) && !flag.engine_ledger",
    "text": "记录上什么证据也没有。戴纽奇家的律师就坐在对面，指甲修得干干净净。"
   },
   "判法有三种。不管哪一种，都得留下一样东西不判。"
  ],
  "choices": [
   {
    "text": "把机房的流水账当庭念出来",
    "tag": "灯",
    "if": "faction == 'lantern' && flag.engine_ledger",
    "once": true,
    "effects": [
     "world press +1"
    ],
    "result": "你把十二个月的“报废”一笔一笔念了出来。念到第九个月，旁听席上有人站起来走了，是戴纽奇家的账房。"
   },
   {
    "text": "只请求判芯核：醒着的芯核不是财物",
    "if": "flag.m_testified || flag.m_dormant || flag.pc_testified || flag.engine_ledger",
    "effects": [
     "flag ruling_cores",
     "unflag ruling_both",
     "unflag engine_licensed",
     "world chains -1",
     "world press +1"
    ],
    "result": "法官判了：醒着的芯核不得登记为财物。可是散庭的时候，码头上的人都往大门外走，戴着镣的那几个兽人还得走后门。这一判没管到他们。",
    "goto": "a3_16"
   },
   {
    "text": "把芯核和戴镣的人写进同一张裁定",
    "if": "(flag.m_testified || flag.m_dormant || flag.pc_testified) && flag.engine_ledger && faction != 'seal'",
    "req": "world.press >= 4 || rep.church >= 3",
    "reqText": "要见报到 4，或者教会的声望到 3",
    "effects": [
     "flag ruling_both",
     "unflag ruling_cores",
     "unflag engine_licensed",
     "world chains -2",
     "world press +1",
     "rep charter -2"
    ],
    "result": "法官判了，一张纸管了两样。当天晚上联盟议会紧急开会，马利安德的议员退了席，退到一半又回来了。联盟差一点就为这件事散了伙。",
    "goto": "a3_16"
   },
   {
    "text": "由你写结案陈词：芯核和戴镣的人一并裁定",
    "tag": "印",
    "if": "(flag.m_testified || flag.m_dormant || flag.pc_testified) && flag.engine_ledger && faction == 'seal'",
    "req": "world.press >= 3 || rep.church >= 3",
    "reqText": "要见报到 3，或者教会的声望到 3",
    "effects": [
     "flag ruling_both",
     "unflag ruling_cores",
     "unflag engine_licensed",
     "world chains -2",
     "world press +1",
     "rep charter -2"
    ],
    "result": "你的陈词只有一页纸，引的全是联盟自己的法条，法官就照着判了。当天晚上马利安德的议员退了席，联盟差一点就为这件事散了伙。",
    "goto": "a3_16"
   },
   {
    "text": "和解：给机房发执照，换它不再收醒过的芯核",
    "effects": [
     "flag engine_licensed",
     "unflag ruling_cores",
     "unflag ruling_both",
     "world chains +1",
     "rep charter +2"
    ],
    "result": "执照第二天就发下来了，一张纸上盖着三个章。文森顿穷人街上那四百一十盏路灯，当天晚上照常亮了。",
    "goto": "a3_16"
   }
  ]
 },
 "a3_16": {
  "id": "a3_16",
  "title": "机房起火",
  "art": "ev_damestear_core",
  "loc": "文森顿 · 城北机房",
  "text": [
   {
    "if": "flag.engine_licensed",
    "text": "裁定下来的当天夜里，机房就起了火。放火的是暗线上那些气不过的人，照他们的说法，发了执照就等于是许可它接着烧芯核。"
   },
   {
    "if": "!flag.engine_licensed",
    "text": "裁定下来的当天夜里，机房就起了火。火是从账房烧起来的，放火的人穿着财团的号衣，是专门来烧账的。"
   },
   "炉膛里那十二颗芯核还在响，火一烧近，调门就全往高处走。挡在炉门前头的是一台四条胳膊的战争型机械人，胸口那颗芯核叫得最响。它还在执行最后一道命令：守住炉门。",
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（愤怒。）那一颗我认识，是七号线 1811 年三月的料。别打它的胸口。"
   },
   {
    "if": "!party.middlesday",
    "text": "它胸口的铜牌叫火烤得发红，上头的编号还看得清：七号线，1811。"
   },
   "街上的路灯一盏接一盏暗了下去，是从机房这头往外暗的。穷人街上的人都端着盆出来看火。"
  ],
  "choices": [
   {
    "text": "冲进炉房",
    "if": "partysize >= 4",
    "combat": {
     "title": "炉门",
     "intro": "四条胳膊一齐抬了起来。它胸口那颗芯核叫了一声，炉膛里那十二颗也跟着叫了起来。",
     "noAwe": true,
     "specials": [
      {
       "id": "governor",
       "name": "拔掉调速器",
       "desc": "它背上有一根铜杆，连着炉子",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "铜杆一拔出来，带出了一串火星，四条胳膊同时停在了半空。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "铜杆烫得握不住，你一松手，掌心已经留下了一道印子。",
        "selfDmg": "1d8",
        "type": "fire"
       }
      },
      {
       "id": "steam",
       "name": "放锅炉的汽",
       "desc": "锅炉上有三个阀门，其中一个是放汽的",
       "check": {
        "skill": "athletics",
        "alt": [
         "investigation"
        ],
        "dc": 14
       },
       "success": {
        "text": "白汽从炉膛边上喷了出来，一整排扫了过去。",
        "dmgAll": "3d6",
        "type": "fire"
       },
       "fail": {
        "text": "你拧开的是进水的阀门，地上多了一摊水，别的什么也没变。"
       }
      },
      {
       "id": "number",
       "name": "念出它的编号，问它今天礼拜几",
       "desc": "它胸口铜牌上的编号还看得清",
       "check": {
        "skill": "persuasion",
        "alt": [
         "insight"
        ],
        "dc": 16,
        "adv": "party.middlesday || is.mechanim"
       },
       "success": {
        "text": "它的四条胳膊慢慢放了下来。“礼拜三。”它说。那天其实是礼拜四，可谁也没去纠正它。",
        "effects": [
         "flag warpattern_spared"
        ],
        "end": "win"
       },
       "fail": {
        "text": "编号它是听见了，后半句没听见。胸口那颗芯核叫得更响了。"
       }
      },
      {
       "id": "cores",
       "name": "把炉膛里那十二颗抢出来",
       "desc": "炉膛的门开着一条缝",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "十二颗芯核一颗一颗夹了出来，放进一只铁皮桶里，桶底垫着一件外套，外套给烧出了一个洞。",
        "effects": [
         "flag cores_saved",
         "world chains -1"
        ]
       },
       "fail": {
        "text": "炉膛口的火舌一下卷了出来，你赶紧缩手。手是缩回来了，手套没了。",
        "selfDmg": "2d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": false,
     "win": {
      "effects": [
       {
        "if": "flag.engine_licensed",
        "then": [],
        "else": [
         "flag engine_burned"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       "flag engine_burned",
       {
        "if": "flag.cores_saved",
        "then": [
         "unflag cores_saved",
         "world chains +1"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "enemies": [
      {
       "id": "war_pattern_screamer"
      },
      {
       "id": "artificer_engineer",
       "name": "财团的奇械师"
      },
      {
       "id": "secret_police",
       "name": "特殊案件预防局的人"
      }
     ]
    }
   },
   {
    "text": "冲进炉房",
    "if": "partysize == 3",
    "combat": {
     "title": "炉门",
     "intro": "四条胳膊一齐抬了起来。它胸口那颗芯核叫了一声，炉膛里那十二颗也跟着叫了起来。",
     "noAwe": true,
     "specials": [
      {
       "id": "governor",
       "name": "拔掉调速器",
       "desc": "它背上有一根铜杆，连着炉子",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "铜杆一拔出来，带出了一串火星，四条胳膊同时停在了半空。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "铜杆烫得握不住，你一松手，掌心已经留下了一道印子。",
        "selfDmg": "1d8",
        "type": "fire"
       }
      },
      {
       "id": "steam",
       "name": "放锅炉的汽",
       "desc": "锅炉上有三个阀门，其中一个是放汽的",
       "check": {
        "skill": "athletics",
        "alt": [
         "investigation"
        ],
        "dc": 14
       },
       "success": {
        "text": "白汽从炉膛边上喷了出来，一整排扫了过去。",
        "dmgAll": "3d6",
        "type": "fire"
       },
       "fail": {
        "text": "你拧开的是进水的阀门，地上多了一摊水，别的什么也没变。"
       }
      },
      {
       "id": "number",
       "name": "念出它的编号，问它今天礼拜几",
       "desc": "它胸口铜牌上的编号还看得清",
       "check": {
        "skill": "persuasion",
        "alt": [
         "insight"
        ],
        "dc": 16,
        "adv": "party.middlesday || is.mechanim"
       },
       "success": {
        "text": "它的四条胳膊慢慢放了下来。“礼拜三。”它说。那天其实是礼拜四，可谁也没去纠正它。",
        "effects": [
         "flag warpattern_spared"
        ],
        "end": "win"
       },
       "fail": {
        "text": "编号它是听见了，后半句没听见。胸口那颗芯核叫得更响了。"
       }
      },
      {
       "id": "cores",
       "name": "把炉膛里那十二颗抢出来",
       "desc": "炉膛的门开着一条缝",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "十二颗芯核一颗一颗夹了出来，放进一只铁皮桶里，桶底垫着一件外套，外套给烧出了一个洞。",
        "effects": [
         "flag cores_saved",
         "world chains -1"
        ]
       },
       "fail": {
        "text": "炉膛口的火舌一下卷了出来，你赶紧缩手。手是缩回来了，手套没了。",
        "selfDmg": "2d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": false,
     "win": {
      "effects": [
       {
        "if": "flag.engine_licensed",
        "then": [],
        "else": [
         "flag engine_burned"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       "flag engine_burned",
       {
        "if": "flag.cores_saved",
        "then": [
         "unflag cores_saved",
         "world chains +1"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "enemies": [
      {
       "id": "war_pattern_screamer",
       "hpMult": 0.7
      },
      {
       "id": "secret_police",
       "name": "特殊案件预防局的人"
      }
     ]
    }
   },
   {
    "text": "冲进炉房",
    "if": "partysize == 2",
    "combat": {
     "title": "炉门",
     "intro": "四条胳膊一齐抬了起来。它胸口那颗芯核叫了一声，炉膛里那十二颗也跟着叫了起来。",
     "noAwe": true,
     "specials": [
      {
       "id": "governor",
       "name": "拔掉调速器",
       "desc": "它背上有一根铜杆，连着炉子",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "铜杆一拔出来，带出了一串火星，四条胳膊同时停在了半空。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "铜杆烫得握不住，你一松手，掌心已经留下了一道印子。",
        "selfDmg": "1d8",
        "type": "fire"
       }
      },
      {
       "id": "steam",
       "name": "放锅炉的汽",
       "desc": "锅炉上有三个阀门，其中一个是放汽的",
       "check": {
        "skill": "athletics",
        "alt": [
         "investigation"
        ],
        "dc": 14
       },
       "success": {
        "text": "白汽从炉膛边上喷了出来，一整排扫了过去。",
        "dmgAll": "3d6",
        "type": "fire"
       },
       "fail": {
        "text": "你拧开的是进水的阀门，地上多了一摊水，别的什么也没变。"
       }
      },
      {
       "id": "number",
       "name": "念出它的编号，问它今天礼拜几",
       "desc": "它胸口铜牌上的编号还看得清",
       "check": {
        "skill": "persuasion",
        "alt": [
         "insight"
        ],
        "dc": 16,
        "adv": "party.middlesday || is.mechanim"
       },
       "success": {
        "text": "它的四条胳膊慢慢放了下来。“礼拜三。”它说。那天其实是礼拜四，可谁也没去纠正它。",
        "effects": [
         "flag warpattern_spared"
        ],
        "end": "win"
       },
       "fail": {
        "text": "编号它是听见了，后半句没听见。胸口那颗芯核叫得更响了。"
       }
      },
      {
       "id": "cores",
       "name": "把炉膛里那十二颗抢出来",
       "desc": "炉膛的门开着一条缝",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "十二颗芯核一颗一颗夹了出来，放进一只铁皮桶里，桶底垫着一件外套，外套给烧出了一个洞。",
        "effects": [
         "flag cores_saved",
         "world chains -1"
        ]
       },
       "fail": {
        "text": "炉膛口的火舌一下卷了出来，你赶紧缩手。手是缩回来了，手套没了。",
        "selfDmg": "2d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": false,
     "win": {
      "effects": [
       {
        "if": "flag.engine_licensed",
        "then": [],
        "else": [
         "flag engine_burned"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       "flag engine_burned",
       {
        "if": "flag.cores_saved",
        "then": [
         "unflag cores_saved",
         "world chains +1"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "enemies": [
      {
       "id": "war_pattern_screamer",
       "hpMult": 0.5
      },
      {
       "id": "secret_police",
       "name": "特殊案件预防局的人"
      }
     ]
    }
   },
   {
    "text": "冲进炉房",
    "if": "partysize == 1",
    "combat": {
     "title": "炉门",
     "intro": "四条胳膊一齐抬了起来。它胸口那颗芯核叫了一声，炉膛里那十二颗也跟着叫了起来。",
     "noAwe": true,
     "specials": [
      {
       "id": "governor",
       "name": "拔掉调速器",
       "desc": "它背上有一根铜杆，连着炉子",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "铜杆一拔出来，带出了一串火星，四条胳膊同时停在了半空。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "铜杆烫得握不住，你一松手，掌心已经留下了一道印子。",
        "selfDmg": "1d8",
        "type": "fire"
       }
      },
      {
       "id": "steam",
       "name": "放锅炉的汽",
       "desc": "锅炉上有三个阀门，其中一个是放汽的",
       "check": {
        "skill": "athletics",
        "alt": [
         "investigation"
        ],
        "dc": 14
       },
       "success": {
        "text": "白汽从炉膛边上喷了出来，一整排扫了过去。",
        "dmgAll": "3d6",
        "type": "fire"
       },
       "fail": {
        "text": "你拧开的是进水的阀门，地上多了一摊水，别的什么也没变。"
       }
      },
      {
       "id": "number",
       "name": "念出它的编号，问它今天礼拜几",
       "desc": "它胸口铜牌上的编号还看得清",
       "check": {
        "skill": "persuasion",
        "alt": [
         "insight"
        ],
        "dc": 16,
        "adv": "party.middlesday || is.mechanim"
       },
       "success": {
        "text": "它的四条胳膊慢慢放了下来。“礼拜三。”它说。那天其实是礼拜四，可谁也没去纠正它。",
        "effects": [
         "flag warpattern_spared"
        ],
        "end": "win"
       },
       "fail": {
        "text": "编号它是听见了，后半句没听见。胸口那颗芯核叫得更响了。"
       }
      },
      {
       "id": "cores",
       "name": "把炉膛里那十二颗抢出来",
       "desc": "炉膛的门开着一条缝",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "十二颗芯核一颗一颗夹了出来，放进一只铁皮桶里，桶底垫着一件外套，外套给烧出了一个洞。",
        "effects": [
         "flag cores_saved",
         "world chains -1"
        ]
       },
       "fail": {
        "text": "炉膛口的火舌一下卷了出来，你赶紧缩手。手是缩回来了，手套没了。",
        "selfDmg": "2d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": false,
     "win": {
      "effects": [
       {
        "if": "flag.engine_licensed",
        "then": [],
        "else": [
         "flag engine_burned"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       "flag engine_burned",
       {
        "if": "flag.cores_saved",
        "then": [
         "unflag cores_saved",
         "world chains +1"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "enemies": [
      {
       "id": "war_pattern_screamer",
       "hpMult": 0.3
      }
     ]
    }
   },
   {
    "text": "冲进炉房",
    "if": "partysize <= 0",
    "combat": {
     "title": "炉门",
     "intro": "四条胳膊一齐抬了起来。它胸口那颗芯核叫了一声，炉膛里那十二颗也跟着叫了起来。",
     "noAwe": true,
     "specials": [
      {
       "id": "governor",
       "name": "拔掉调速器",
       "desc": "它背上有一根铜杆，连着炉子",
       "check": {
        "skill": "sleight",
        "alt": [
         "athletics"
        ],
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "铜杆一拔出来，带出了一串火星，四条胳膊同时停在了半空。",
        "applyAll": {
         "cond": "stunned",
         "turns": 1
        }
       },
       "fail": {
        "text": "铜杆烫得握不住，你一松手，掌心已经留下了一道印子。",
        "selfDmg": "1d8",
        "type": "fire"
       }
      },
      {
       "id": "steam",
       "name": "放锅炉的汽",
       "desc": "锅炉上有三个阀门，其中一个是放汽的",
       "check": {
        "skill": "athletics",
        "alt": [
         "investigation"
        ],
        "dc": 14
       },
       "success": {
        "text": "白汽从炉膛边上喷了出来，一整排扫了过去。",
        "dmgAll": "3d6",
        "type": "fire"
       },
       "fail": {
        "text": "你拧开的是进水的阀门，地上多了一摊水，别的什么也没变。"
       }
      },
      {
       "id": "number",
       "name": "念出它的编号，问它今天礼拜几",
       "desc": "它胸口铜牌上的编号还看得清",
       "check": {
        "skill": "persuasion",
        "alt": [
         "insight"
        ],
        "dc": 16,
        "adv": "party.middlesday || is.mechanim"
       },
       "success": {
        "text": "它的四条胳膊慢慢放了下来。“礼拜三。”它说。那天其实是礼拜四，可谁也没去纠正它。",
        "effects": [
         "flag warpattern_spared"
        ],
        "end": "win"
       },
       "fail": {
        "text": "编号它是听见了，后半句没听见。胸口那颗芯核叫得更响了。"
       }
      },
      {
       "id": "cores",
       "name": "把炉膛里那十二颗抢出来",
       "desc": "炉膛的门开着一条缝",
       "check": {
        "skill": "athletics",
        "dc": 15,
        "party": true
       },
       "success": {
        "text": "十二颗芯核一颗一颗夹了出来，放进一只铁皮桶里，桶底垫着一件外套，外套给烧出了一个洞。",
        "effects": [
         "flag cores_saved",
         "world chains -1"
        ]
       },
       "fail": {
        "text": "炉膛口的火舌一下卷了出来，你赶紧缩手。手是缩回来了，手套没了。",
        "selfDmg": "2d6",
        "type": "fire"
       }
      }
     ],
     "fleeable": false,
     "win": {
      "effects": [
       {
        "if": "flag.engine_licensed",
        "then": [],
        "else": [
         "flag engine_burned"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "lose": {
      "effects": [
       "flag engine_burned",
       {
        "if": "flag.cores_saved",
        "then": [
         "unflag cores_saved",
         "world chains +1"
        ]
       },
       "quest q_engine done",
       "rest short"
      ],
      "goto": "a3_17"
     },
     "enemies": [
      {
       "id": "war_pattern_screamer",
       "hpMult": 0.1
      }
     ]
    }
   }
  ]
 },
 "a3_17": {
  "id": "a3_17",
  "title": "洇河口",
  "loc": "洇河口 · 码头",
  "text": [
   "洇河口飘着两面旗，设着两座税关，联盟的在南岸，萨尔达的在北岸，中间隔着一条河，河上漂的是运棺材的驳船和收过路钱的小艇。博克人的王庭在河心的岛上，两家都说归自己管，结果哪一家的拘票都递不进去。",
   {
    "if": "flag.engine_burned",
    "text": "文森顿的那场火烧了两天，烟顺着河往下游飘，飘到洇河口已经看不见了，只剩下一股热铁皮的气味。"
   },
   {
    "if": "!flag.engine_burned",
    "text": "文森顿的机房保住了，听说穷人街上的路灯第二天就亮了，比先前还亮了一点。"
   },
   {
    "if": "flag.contract_planters",
    "text": "你是一路追到这儿来的。他们踩上码头的时候，你站在船头，一步也跟不过去。码头上的人都看着你，像在看一条靠错了岸的船。"
   },
   {
    "if": "!flag.contract_planters && flag.levee_lost",
    "text": "下了船的只有十四个。另外九个在河堤上给抓了回去，霍布就在这九个里头，他那双脚走不快。"
   },
   {
    "if": "!flag.contract_planters && !flag.levee_lost",
    "text": "二十三个人全都下了船。{?flag.a3x_toby:托比是第二十四个，他该不该算在清单上，谁也不知道。|}最后那一段水路是阿萨替船家撑的。内莉一上岸，先去找了一口井。"
   },
   {
    "if": "flag.town_shelters",
    "text": "塞斯提尔边区的那个镇子，让他们在谷仓里住了三夜。马蒂在谷仓墙上刻了个记号，说下一拨人看得懂。"
   },
   {
    "if": "flag.levee_sanctuary",
    "text": "他们是从“神的庇护所”那段堤上走过来的，有人到现在还留着你袖口上的一根线头，拿布包着。"
   },
   {
    "if": "flag.bura_alone && world.chains <= 5",
    "text": "码头上有人捎来了布拉的消息，说她带着一队人往北走了。有多少人没说，只说她走在最后头。"
   },
   {
    "if": "flag.bura_alone && world.chains > 5",
    "text": "布拉的消息，码头上没有一个人说得清。有人说在北边见过一个黄铜下巴的兽人，也有人说那是去年的事了。"
   },
   {
    "if": "flag.bura_armed",
    "text": "下船的人里头有三个背着拉姆斯盖特的枪，枪托上的字号都拿泥糊住了。"
   },
   {
    "if": "flag.bura_line",
    "text": "布拉站在码头上数人，数一个，就在那人肩上拍一下。"
   },
   {
    "if": "origin == 'lorent'",
    "text": "血林外海停着三条洛伦特的船，是林卫上将的分舰队。他们放下一条小艇靠到了码头上，艇上的人说要见你。"
   },
   {
    "if": "origin != 'lorent'",
    "text": "天边停着几条船，挂的是洛伦特的旗，一直没有靠过来。"
   }
  ],
  "first": [
   "quest q_bill done"
  ],
  "choices": [
   {
    "text": "去河心的王庭，请他们把“不认拘票”写成一句明文",
    "once": true,
    "check": {
     "skill": "persuasion",
     "dc": 16,
     "party": true,
     "mods": [
      {
       "if": "flag.town_shelters",
       "n": 1,
       "why": "塞斯提尔边区开过先例"
      },
      {
       "if": "rep.south >= 3",
       "n": 1,
       "why": "南岸的人替你说话"
      },
      {
       "if": "flag.ruling_both",
       "n": 1,
       "why": "伊索贝尔港的裁定刚登了报"
      }
     ]
    },
    "ok": {
     "text": "博克人的老王听完，叫书记写下了一句话：本岛不认两岸拘票。他盖上章，说这句话两岸都要骂的。果然，联盟和萨尔达为了这句话又吵了六年。",
     "effects": [
      "flag ynns_free_soil",
      "world chains -1"
     ]
    },
    "fail": {
     "text": "老王收下了你们带去的礼，说这事得先问问河神。河神的意思是，等雨季过了再说。",
     "effects": [
      "gold -50"
     ]
    }
   },
   {
    "text": "上小艇见林卫上将",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a3x_glade_done",
    "goto": "a3_17b"
   },
   {
    "text": "去萨尔达税关隔壁的鱼馆吃饭",
    "goto": "a3_18"
   }
  ]
 },
 "a3_17b": {
  "id": "a3_17b",
  "title": "林卫上将",
  "loc": "洇河口外 · 洛伦特的小艇",
  "text": [
   "坐在小艇上的是埃雷拉斯·林卫本人。他是个 1449 年出生的精灵，比他封锁的哪一块殖民地都要老，制服上的金线已经磨白了，帽子搁在膝盖上。",
   {
    "speaker": "埃雷拉斯·林卫",
    "text": "那枚别针我认得，是女王的侍从才戴的。你们船上有几个人是从血林那边跑出来的。这些人我要带走，照名单来。"
   },
   "他递过来一张名单，上面有两个名字，都不在那二十三个人里头，可人确实都在你们船上。{?party.bura:布拉在码头上盯着这条小艇，一只手搭在枪套上。|}"
  ],
  "choices": [
   {
    "text": "回绝他",
    "effects": [
     "flag a3x_glade_done",
     "flag gladeguard_refused",
     "rep wand -2",
     "rep union +1"
    ],
    "result": "他把名单折好收回口袋，又把帽子戴上。“女王会知道的，”他说，“女王什么都知道。”",
    "goto": "a3_17"
   },
   {
    "text": "交两个人给他，做做样子",
    "effects": [
     "flag a3x_glade_done",
     "rep wand +1",
     "world chains +1",
     "approval bura -3"
    ],
    "result": "那两个人上了小艇，头也没回。林卫上将向你敬了个礼，一丝不苟。",
    "goto": "a3_17"
   },
   {
    "text": "拿白玫瑰别针唬他：这两个是使馆要的人",
    "check": {
     "skill": "deception",
     "dc": 16,
     "adv": "item.whiterose_pin"
    },
    "ok": {
     "text": "他盯着别针看了很久，又盯着你看了很久，才说：“使馆的事，我不过问。”小艇划走了，那两个人还留在你们船上。",
     "effects": [
      "flag a3x_glade_done"
     ],
     "goto": "a3_17"
    },
    "fail": {
     "text": "“使馆上个月的公文里没有这两个人。”他说。人他没要，可你的名字给他记进了航海日志。",
     "effects": [
      "flag a3x_glade_done",
      "rep wand -1"
     ],
     "goto": "a3_17"
    }
   }
  ]
 },
 "a3_18": {
  "id": "a3_18",
  "title": "穿好料子的客人",
  "art": "ev_dragon_fly",
  "loc": "洇河口 · 萨尔达税关隔壁的鱼馆",
  "text": [
   "鱼馆就在萨尔达税关的隔壁，门口挂着一串晒干的鲶鱼。你们刚坐下，就从上游来了一位客人，衣裳料子很好，耳朵是尖的，脸色白里透青，看样子是个遗迹精灵。他自己找过来跟你们拼桌，把全店的鱼都点了一遍。",
   {
    "speaker": "穿好料子的客人",
    "text": "你身上有股青铜味，是青铜龙的味道。回头替我向他问个好。"
   },
   "他叫瓦伦盖尔特，今年三百八十四岁，洇河上游有人把他当神供着，身体好得很。他拿同行的口气跟你聊起当神这门买卖来：什一税该怎么收，节庆排在哪个月，头一回歉收那年该说些什么。",
   {
    "speaker": "瓦伦盖尔特",
    "text": "什一税得在秋天收，那时候人家手里有粮。你要是春天去收，他们就要问你了：你到底保佑了我们什么？"
   },
   "接着他说起了你们的合伙人。他说，没人拜的老家伙是会累的。阿赫特到今天还喘着气，兴许只是因为有个让他扔下不管的帝国，每天黄昏还给他点灯，一点就是一万盏。",
   {
    "speaker": "瓦伦盖尔特",
    "text": "他就是阿赫特，一头青铜龙，现在穿的是你们共和国的将军制服。泽拉特那一仗打完，他就再也没飞过。他还说那一仗是平手。告诉你吧，凡是他打输的仗，他都管它叫平手。"
   },
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "醉话。龙喝多了，说的也是醉话。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "他没撒谎。他什么都往外说，所以才没人信他。我信一半。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "将军是给我们写过推荐信的。理论上，龙也是会签字的。实际上，我得回去把笔迹对一对。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）合伙人的汇票是安本科斯特一家银行开的。（不确定。）龙也用银行吗？"
   },
   {
    "if": "!party.bura && !party.narwen && !party.guilhem && !party.middlesday",
    "speaker": "别摇",
    "text": "他说的都是真话。真话最不值钱，所以他才到处送人。"
   },
   {
    "if": "!party.bura && !party.narwen && !party.guilhem && !party.middlesday",
    "text": "第二天，埃塔的回电到了：一头龙？账上没这一栏。我添一栏。"
   },
   {
    "if": "is.god",
    "text": "他一看见你，就又叫了一壶酒，还换了个座位，坐到了你的正对面。"
   },
   {
    "if": "is.god",
    "speaker": "瓦伦盖尔特",
    "text": "香火钱你是怎么入账的？我这儿是三七开，三成归庙里，七成拿去修堤。洇河上有两个节，我可以让给你，日子随你挑。条件只有一个，你别在我的地界上显灵。"
   }
  ],
  "first": [
   "flag partner_known",
   "quest q_partner stage 3",
   "codex c_varlengeilt",
   "codex c_aakhet",
   "codex c_hakhepra"
  ],
  "choices": [
   {
    "text": "跟他提萨拉哈德沙漠那一仗",
    "once": true,
    "check": {
     "skill": "history",
     "dc": 15,
     "party": true
    },
    "ok": {
     "text": "他笑得开心极了，拍着桌子说：“平手！他到今天还说是平手！”笑完，他又多送了你一句：泽拉特那门炮是卡塔拉什亚造的，专打龙鳞，他是给打得掉进湖里去的。",
     "effects": [
      "flag a3x_zerat"
     ]
    },
    "fail": {
     "text": "你把泽拉特和萨拉哈德说反了。他耐着性子给你纠正过来，顺手又加了两条鱼，账记在你们这一桌上。",
     "effects": [
      "gold -30"
     ]
    }
   },
   {
    "text": "看他说的是不是真话",
    "once": true,
    "check": {
     "skill": "insight",
     "dc": 15
    },
    "ok": {
     "text": "他没撒谎。他说话的时候手上一直在剔鱼刺，一根也没落下，说到阿赫特的时候也没停。",
     "effects": [
      "approval narwen +1"
     ]
    },
    "fail": {
     "text": "你看不出来。他不管说什么都是同一副笑脸，说自己的生日也好，说别人的死期也好，都是一样高兴。",
     "effects": [
      "approval bura +1"
     ]
    }
   },
   {
    "text": "收下那两个节",
    "tag": "神",
    "if": "is.god && !flag.a3x_festivals && !flag.a3x_fest_no",
    "once": true,
    "effects": [
     "flag a3x_festivals",
     "var cult +1",
     "rep south +1",
     "rep church -1"
    ],
    "result": "他把两个节的日子写在餐巾上，推到你面前。从今往后，洇河上游的人每年有两天要朝着你那个方向烧香。揭秘教的院长听说了这件事，写了一封很长的信。"
   },
   {
    "text": "回绝他",
    "tag": "神",
    "if": "is.god && !flag.a3x_festivals && !flag.a3x_fest_no",
    "once": true,
    "effects": [
     "flag a3x_fest_no",
     "rep south -1"
    ],
    "result": "“随你。”他耸了耸肩，“头一回歉收他们会原谅你，到了第二回，他们就换神了。”说完他把餐巾揉成一团，擦了擦手。"
   },
   {
    "text": "结账，去电报房",
    "goto": "a3_19"
   }
  ]
 },
 "a3_19": {
  "id": "a3_19",
  "title": "第三份报告",
  "loc": "洇河口 · 电报房",
  "text": [
   "洇河口的电报房在联盟税关的二楼，只有一根线，先通到伊索贝尔港，再转安本科斯特。报务员是个半身人，按字数收钱，标点另算，其中问号最贵。",
   "这一回，你已经知道读报告的人是谁了：一头穿将军制服的青铜龙。埃塔的回电先到了，只有一行字：照常写，我照常记。",
   {
    "if": "flag.partner_engine_share",
    "speaker": "埃塔（电报）",
    "text": "另：机房的股，他上个月也撤了。代理人原话：供不起。"
   },
   {
    "if": "flag.report2_named_general",
    "text": "上一回你在报告的抬头写了“将军阁下”，他给你回过一封亲笔信，信里谈的是天气。"
   },
   {
    "if": "flag.a3x_zerat",
    "text": "你手里还有鱼馆那位客人多送的一句话：泽拉特那门炮是专打龙鳞的。"
   },
   {
    "if": "origin == 'concord'",
    "text": "镇议会也来了电报，点名要一份抄件。电报的落款是“全体议员”，底下还列着表决的结果，十一比零。"
   }
  ],
  "choices": [
   {
    "text": "另抄一份，寄给老连队的文书",
    "tag": "安本纳尔",
    "if": "origin == 'anbennar' && !flag.a3x_home_done",
    "once": true,
    "effects": [
     "flag a3x_home_done",
     "var home_copies +1",
     "rep republic +1"
    ],
    "result": "老连队的文书给你回了一张明信片，正面印着旧斗兽场，背面写着：收到，别再惹事。"
   },
   {
    "text": "给使馆的那份照实写",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a3x_home_done",
    "once": true,
    "effects": [
     "flag a3x_home_done",
     "var home_copies +1",
     "rep wand +1"
    ],
    "result": "你拿使馆的密码本把报告译了一遍。译到“青铜”两个字，密码本里没有，只好一个字母一个字母硬拼出来。"
   },
   {
    "text": "给使馆的那份写薄一点",
    "tag": "洛伦特",
    "if": "origin == 'lorent' && !flag.a3x_home_done",
    "once": true,
    "effects": [
     "flag a3x_home_done",
     "var home_copies +1",
     "var embassy_gap +1",
     {
      "if": "flag.codebook_seen",
      "then": [
       "rep republic +1"
      ]
     }
    ],
    "result": "给使馆的那一份，你只写了吃鱼。{?flag.codebook_seen:共和国海关早就把那本密码抄去了，他们读到的也只有吃鱼。|}"
   },
   {
    "text": "照镇议会的要求抄一份",
    "tag": "巨魔湾",
    "if": "origin == 'concord' && !flag.a3x_home_done",
    "once": true,
    "effects": [
     "flag a3x_home_done",
     "var home_copies +1",
     "rep charter +1"
    ],
    "result": "抄件寄走了。过了一个月，镇议会回电说：已阅，下月表决是否存档。"
   },
   {
    "text": "念给法德伦的工会听",
    "tag": "无主者",
    "if": "origin == 'unowned' && !flag.a3x_home_done",
    "once": true,
    "effects": [
     "flag a3x_home_done",
     "var home_copies +1",
     "rep union +1"
    ],
    "result": "你把稿子寄到了铸炉街，工会的人在礼拜天的会上念了一遍。法德伦听完只问了一句：机器那一条到底判了没有。"
   },
   {
    "text": "写进考察笔记",
    "tag": "卡尔希尔",
    "if": "origin == 'karshyr' && !flag.a3x_home_done",
    "once": true,
    "effects": [
     "flag a3x_home_done",
     "var home_copies +1",
     "rep south +1"
    ],
    "result": "考察笔记已经写到第三本了。题目先前改过两回，这一回又改了，改成《一家有限责任的冒险公司，和它的股东》。"
   },
   {
    "text": "写全",
    "effects": [
     "flag report3_full",
     "unflag report3_edited",
     "unflag report3_lie",
     "rep partner +1"
    ],
    "result": "报务员数了数，字是三百一十一个，标点四十二个。他问你要不要省掉几个标点，你说不用。",
    "goto": "a3_20"
   },
   {
    "text": "写全，末尾加一句：鱼馆里有人问您好",
    "effects": [
     "flag report3_full",
     "flag report3_named_bronze",
     "unflag report3_edited",
     "unflag report3_lie",
     "rep partner -1"
    ],
    "result": "报务员把这句话念了一遍，问你要不要加标点。{?flag.report2_named_general:这已经是你第二回在纸上点破他了。|}这一回，读报告的那位没有回电。",
    "goto": "a3_20"
   },
   {
    "text": "删掉鱼馆那一段",
    "effects": [
     "flag report3_edited",
     "unflag report3_full",
     "unflag report3_lie"
    ],
    "result": "删完只剩下一百零四个字。埃塔回电说：短了。可短在哪儿，电报上没说。",
    "goto": "a3_20"
   },
   {
    "text": "编一份：货送到了，别的一切照常",
    "check": {
     "skill": "deception",
     "dc": 15
    },
    "ok": {
     "text": "电报写得平平整整，读起来像一张收据。汇票照常寄到了，一分钱也没少。",
     "effects": [
      "flag report3_lie",
      "unflag report3_full",
      "unflag report3_edited",
      "rep partner -1"
     ],
     "goto": "a3_20"
    },
    "fail": {
     "text": "汇票照常到了，只是多附了一行字：“洇河口的鱼好吃吗。”你从没跟他说过，你在洇河口吃过鱼。",
     "effects": [
      "flag report3_lie",
      "unflag report3_full",
      "unflag report3_edited",
      "rep partner -1",
      "flag partner_knows_lie"
     ],
     "goto": "a3_20"
    }
   }
  ]
 },
 "a3_20": {
  "id": "a3_20",
  "title": "数流星",
  "art": "ev_big_star_in_sky",
  "loc": "洇河口 · 鱼馆的屋顶",
  "text": [
   "鱼馆的屋顶是平的，上头晒着渔网。每到泪落月的夜里，洇河口的人都要上房顶，带上一张草席、一壶酒。河上的两座税关也都熄了灯。一年到头，两家说得拢的事就只有这一件。",
   {
    "if": "world.tears >= 7",
    "text": "那一夜落了三百多颗。有人数着数着就乱了，只好从头再数。"
   },
   {
    "if": "world.tears == 6",
    "text": "那一夜落了二百来颗。"
   },
   {
    "if": "world.tears == 5",
    "text": "那一夜落了一百五十颗上下。"
   },
   {
    "if": "world.tears == 4",
    "text": "那一夜落了九十多颗。"
   },
   {
    "if": "world.tears == 3",
    "text": "那一夜落了五十颗上下。"
   },
   {
    "if": "world.tears == 2",
    "text": "那一夜落了二十几颗。"
   },
   {
    "if": "world.tears == 1",
    "text": "那一夜落下来的，一只手就数得过来。"
   },
   {
    "if": "world.tears <= 0",
    "text": "那一夜一颗也没落。屋顶上的人坐到了后半夜，把酒喝完，就下楼去了。"
   },
   "1809 年的历书上，这一栏写的是“数不过来”。",
   {
    "if": "party.bura",
    "speaker": "布拉",
    "text": "（铰链咔的一声。）比去年少，比明年多。"
   },
   {
    "if": "!party.bura",
    "text": "布拉不在，草席上放着一颗她的铰链螺丝，是她走的那天落在行李里的。"
   },
   {
    "if": "party.middlesday",
    "speaker": "礼拜三",
    "text": "（陈述。）我数完了。（礼貌。）要我把数报给埃塔吗？"
   },
   {
    "if": "flag.m_left",
    "text": "礼拜三不在，它的行李码在屋角，最小的一件放在最上头。"
   },
   {
    "if": "flag.m_dormant",
    "text": "礼拜三坐在屋顶上，脸朝着南边，眼睛亮着。它没有数。"
   },
   {
    "if": "party.guilhem",
    "speaker": "吉列姆",
    "text": "我小时候在梨林也数过一回，数到一千就睡着了。那一年落下来的还不止这些。"
   },
   {
    "if": "party.narwen",
    "speaker": "娜尔雯",
    "text": "上回我在屋顶上数，是 1810 年。那一回实在数不过来，我就改数天上空着的地方了。"
   },
   {
    "if": "flag.narwen_left",
    "text": "娜尔雯不在，她那副备用眼镜搁在烟囱上，镜片朝着天。"
   },
   {
    "if": "world.tears <= 2",
    "text": "罐子里，别摇的光已经暗得只剩一个小点了。"
   },
   {
    "if": "is.god",
    "speaker": "别摇",
    "text": "现在我欠你的，这辈子都还不清了。这件事，我不原谅你。"
   }
  ],
  "first": [
   "level 8"
  ],
  "next": "a4_01"
 }
};
