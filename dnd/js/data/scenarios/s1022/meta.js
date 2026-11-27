// s1022 / meta.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const META = {
 "id": "s1022",
 "era": 1022,
 "title": "无冕之年",
 "coin": "金冠",
 "startDate": "1022年卡斯坦月1日",
 "intro": [
  "灰元 1022 年，卡斯坦月一日。术士王死去一年多，交战各方终于签下《安本科斯特条约》。旧斗兽场的拱廊里，书记官守着登记册和一锅热蜡，等监誓人来领印。",
  "你的差事，是去各国见证他们履行和约。在条约上签字的有五家：两家打赢，一家战败，一家不想入伙，还有一家夹在中间拿不定主意。你是其中哪一家派出的监誓人？",
  "南方沼地里，每晚还有人推车出门。去时空车，回来总载着死人。仗已经打完了，这些遗体又是从哪里来的？"
 ],
 "tracks": [
  {
   "key": "unburied",
   "name": "未葬亡者",
   "desc": "数值越高，没能安葬的人越多。1040 年以前统计阵亡者，之后统计病故者。",
   "start": 6,
   "min": 0,
   "max": 10,
   "labels": [
    "各归其墓",
    "坟比人少",
    "沟里有人",
    "村村挂白",
    "死人当家"
   ]
  },
  {
   "key": "communion",
   "name": "人类与精灵",
   "desc": "表示人类与精灵的关系。数值越高，两族越愿意一起生活。",
   "start": 5,
   "min": 0,
   "max": 10,
   "labels": [
    "各回各船",
    "隔墙而居",
    "同城分桌",
    "同桌吃饭",
    "骨血相连"
   ]
  },
  {
   "key": "mantle",
   "name": "帝位之争",
   "desc": "数值越高，试炼山上就越有可能迎来一位新皇帝。",
   "start": 3,
   "min": 0,
   "max": 10,
   "labels": [
    "山已封死",
    "没人敢提",
    "有人惦记",
    "群雄问山",
    "新皇在位"
   ]
  },
  {
   "key": "writ",
   "name": "法师权势",
   "desc": "表示法师凭令状能干预多少事务。数值越高，他们的管辖权越大。",
   "start": 2,
   "min": 0,
   "max": 10,
   "labels": [
    "各管各的",
    "宫廷顾问",
    "持令看守",
    "法师断案",
    "杖下太平"
   ]
  },
  {
   "key": "feud",
   "name": "两国宿怨",
   "desc": "表示洛伦特西洛瑞尔家与达梅里亚西尔穆纳家的积怨。数值越高，两家仇怨越深。",
   "start": 4,
   "min": 0,
   "max": 10,
   "labels": [
    "结成亲家",
    "面上客气",
    "各记各账",
    "已经见血",
    "世代为仇"
   ]
  }
 ],
 "reputations": [
  {
   "key": "moon",
   "name": "月庭",
   "desc": "达梅里亚的宫廷，白银大队的老兵，还有月神神殿。",
   "start": 0
  },
  {
   "key": "rose",
   "name": "玫瑰摄政",
   "desc": "洛伦特的伊奥瑞尔太后和她手下的人，恩特本的纯血派不算在里面。",
   "start": 0
  },
  {
   "key": "escann",
   "name": "东坎诺诸王",
   "desc": "北王国，南王国，刀锋边区，再加上蓝宝石之眼骑士团。",
   "start": 0
  },
  {
   "key": "dragon",
   "name": "黑龙",
   "desc": "乌霜边区，黑卡斯塔诺的老兵，还有那些至今认乌霜家的白湾人。",
   "start": 0
  },
  {
   "key": "wex",
   "name": "威克斯与大墓地",
   "desc": "小公爵的朝廷，还有边境地的收殓人。",
   "start": 0
  },
  {
   "key": "elders",
   "name": "船上长老",
   "desc": "伊贝瓦尔和残存舰队里那些不肯改名换姓的精灵。",
   "start": 0
  },
  {
   "key": "wise",
   "name": "贤者会",
   "desc": "加里昂、玛希尔达和他们带出来的学生。1040 年以后，指的就是瓦洛森。",
   "start": 0
  }
 ],
 "origins": [
  {
   "id": "dameria",
   "name": "达梅里亚 · 月庭",
   "region": "达梅斯海德",
   "flag": "A58",
   "nationName": "达梅里亚王国",
   "blurb": "你在达梅里亚宫里当差。二十岁的半精灵国王刚办完婚礼，一名老兵却拿着切肉刀朝国王走去。你离得最近。",
   "tags": [
    "赢家",
    "宫廷",
    "初盟"
   ],
   "startScene": "p_dameria_01",
   "start": {
    "rep": {
     "moon": 2,
     "wise": 1,
     "dragon": -1
    },
    "world": {},
    "flags": [],
    "items": {
     "moon_badge": 1
    },
    "gold": 40
   }
  },
  {
   "id": "lorent",
   "name": "洛伦特 · 玫瑰摄政",
   "region": "伦瑟诺",
   "flag": "A01",
   "nationName": "洛伦特王国",
   "blurb": "洛伦特国王还不满两岁。摄政的伊奥瑞尔太后八十三岁，在精灵眼里仍未成年。她把监誓印交给你，另外还托你办一件和约上没有的事。",
   "tags": [
    "赢家",
    "旧怨",
    "摄政"
   ],
   "startScene": "p_lorent_01",
   "start": {
    "rep": {
     "rose": 2,
     "moon": -1
    },
    "world": {},
    "flags": [],
    "items": {
     "ioriel_letter": 1
    },
    "gold": 50
   }
  },
  {
   "id": "ebonmarck",
   "name": "乌霜边区 · 黑龙",
   "region": "东坎诺",
   "flag": "Z34",
   "nationName": "乌霜边区",
   "blurb": "乌霜领是战败方，围城军每夜都在逼近。加雷克请你带话出去：肯停手最好，至少也该让守城的人先把话说完。",
   "tags": [
    "输家",
    "遗民",
    "军团"
   ],
   "startScene": "p_ebonmarck_01",
   "start": {
    "rep": {
     "dragon": 3,
     "escann": -1,
     "moon": -1,
     "wex": -1
    },
    "world": {},
    "flags": [],
    "items": {
     "legion_token": 1
    },
    "gold": 15
   }
  },
  {
   "id": "ibevar",
   "name": "伊贝瓦尔 · 船上长老",
   "region": "凄苦谷",
   "flag": "A32",
   "nationName": "伊贝瓦尔精灵国",
   "blurb": "你的族人在海上漂泊千年，上岸才二十二年。有些人取了人类名字，拜起人类的神。亲王仍留着没打开的行李。他派你去看，这份和约能不能让精灵安心定居。",
   "tags": [
    "外人",
    "长命",
    "纯血"
   ],
   "startScene": "p_ibevar_01",
   "start": {
    "rep": {
     "elders": 2,
     "wise": 1,
     "rose": -1
    },
    "world": {},
    "flags": [],
    "items": {
     "ibenion_writ": 1
    },
    "gold": 30
   }
  },
  {
   "id": "wex",
   "name": "威克斯 · 幼主之家",
   "region": "边境地",
   "flag": "A30",
   "nationName": "威克斯丘陵公国",
   "blurb": "威克斯失去王冠已三十年。如今八岁的公爵原是私生子，刚获正式承认。摄政们都想掌握监誓印，只有小公爵拉着你问，去当监誓人会不会发匹马。",
   "tags": [
    "夹缝",
    "幼主",
    "坟场"
   ],
   "startScene": "p_wex_01",
   "start": {
    "rep": {
     "wex": 2,
     "dragon": -2
    },
    "world": {},
    "flags": [],
    "items": {
     "ledger_page": 1
    },
    "gold": 25
   }
  }
 ],
 "factions": [
  {
   "id": "sapphire",
   "name": "蓝宝石之眼（剑）",
   "motto": "先留人一条命，再来论理。",
   "blurb": "你信奉凯伦·长枪留下的规矩：赢了要饶人，两家争地就各派一人决斗。骑士团去年才成立，最早立誓的人已有半数死在试炼山。",
   "tags": [
    "骑士",
    "骑士裁决",
    "留人"
   ],
   "art": "ev_adeanic_war",
   "origins": [
    "dameria",
    "lorent",
    "ebonmarck",
    "wex"
   ],
   "start": {
    "rep": {
     "escann": 2,
     "dragon": 1
    },
    "world": {},
    "flags": [
     "f_sapphire"
    ]
   }
  },
  {
   "id": "rites",
   "name": "旧礼（冠）",
   "motto": "王冠是神给的，可总得有人替神递一下。",
   "blurb": "和约准许各神殿为国王加冕，各家都觉得这次该轮到自己。你守的是神殿的旧职责：为君王行礼，给死者下葬，让来避难的人吃上一顿饭。",
   "tags": [
    "祭司",
    "下葬",
    "涂油",
    "庇护"
   ],
   "art": "ev_piety",
   "start": {
    "rep": {
     "wex": 1,
     "moon": 1
    },
    "world": {},
    "flags": [
     "f_rites"
    ]
   }
  },
  {
   "id": "staff",
   "name": "贤者门下（杖）",
   "motto": "法师得有人看着，最好是法师来看。",
   "blurb": "法术可以操纵人的心智，受操纵的人却未必知情。你师从加里昂，学的就是辨别一个决定究竟出自谁的意愿。你的同门还主张由法师监督法师。",
   "tags": [
    "法师",
    "验心",
    "疫令"
   ],
   "art": "ev_mages_estate",
   "origins": [
    "dameria",
    "lorent",
    "ibevar",
    "wex"
   ],
   "start": {
    "rep": {
     "wise": 2,
     "dragon": -1
    },
    "world": {
     "writ": 1
    },
    "flags": [
     "f_staff"
    ]
   }
  }
 ],
 "premades": [
  {
   "id": "pm_rianna",
   "name": "精灵码头的莉安娜",
   "gender": "f",
   "race": "half_elf",
   "cls": "sorcerer",
   "background": "urchin",
   "abil": {
    "str": 8,
    "dex": 15,
    "con": 13,
    "int": 10,
    "wis": 12,
    "cha": 17
   },
   "profs": [
    "deception",
    "insight",
    "sleight",
    "stealth"
   ],
   "portrait": "sun_elf_court_mage_f",
   "origins": [
    "dameria"
   ],
   "tags": [
    "半精灵",
    "天生施法"
   ],
   "blurb": "莉安娜属于最早出生的那一代半精灵，也天生就会魔法。她走到宫廷哪里，人们的目光就跟到哪里。",
   "bio": "她 1004 年生在精灵上岸时扎下的营地里，也就是如今精灵码头那一带。父亲是白银大队的弓手，母亲是卖鱼的。十四岁那年她发了一回脾气，灶上的汤锅自己就烧开了。如今她在王宫里当侍童，宫廷法师一直想验一验她的血。"
  },
  {
   "id": "pm_aucan",
   "name": "奥坎·海月",
   "gender": "m",
   "race": "elf",
   "subrace": "moon_elf",
   "cls": "ranger",
   "background": "soldier",
   "abil": {
    "str": 12,
    "dex": 17,
    "con": 13,
    "int": 9,
    "wis": 14,
    "cha": 10
   },
   "profs": [
    "perception",
    "stealth",
    "survival",
    "athletics",
    "intimidation"
   ],
   "portrait": "sun_elf_commandant",
   "origins": [
    "dameria"
   ],
   "tags": [
    "老兵",
    "长命"
   ],
   "blurb": "奥坎曾在白银大队服役。穆纳斯劝他取个人类名字，他选了先王后的名字。",
   "bio": "他本名叫阿多里安，880 年生在海上。后来跟着穆纳斯上了岸，在月神之牙那一仗里丢了半只耳朵。打完仗，他改名叫奥坎，是把先王后“奥琪”的名字改成了男人用的。族里的长老到今天还是只肯叫他的旧名。"
  },
  {
   "id": "pm_alain",
   "name": "大奥尔丁的阿兰",
   "gender": "m",
   "race": "human",
   "subrace": "lorentish",
   "cls": "paladin",
   "background": "squire",
   "abil": {
    "str": 16,
    "dex": 10,
    "con": 14,
    "int": 8,
    "wis": 12,
    "cha": 15
   },
   "profs": [
    "persuasion",
    "religion",
    "athletics",
    "animal"
   ],
   "portrait": "gen_human_knight_m",
   "origins": [
    "lorent"
   ],
   "tags": [
    "平民",
    "骑士",
    "简单上手"
   ],
   "blurb": "阿兰出身平民，如今给独角兽骑士当扈从。他很当真地信奉凯伦的规矩，赢了决斗，就给败者一条活路。",
   "bio": "他今年十九岁，父亲是养马的，他自己从十四岁起就给奥尔丁的莫冈大人牵马。打仗他没赶上，只赶上了埋人。太后挑中他，正是因为恩特本的老爷们看不上他。"
  },
  {
   "id": "pm_barila",
   "name": "巴丽拉·钢臂",
   "gender": "f",
   "race": "dwarf",
   "subrace": "ruby_dwarf",
   "cls": "artificer",
   "background": "artisan",
   "abil": {
    "str": 12,
    "dex": 10,
    "con": 16,
    "int": 15,
    "wis": 13,
    "cha": 9
   },
   "profs": [
    "arcana",
    "history",
    "sleight",
    "investigation"
   ],
   "portrait": "dwarven_artist_f",
   "origins": [
    "lorent"
   ],
   "tags": [
    "符文匠",
    "长命"
   ],
   "blurb": "巴丽拉在红宝石关的门上刻下符文，两次帮守军保住了关口。第三次来敌，上面却请来精灵法师，没再请她。",
   "bio": "她是红宝石领的符文匠，今年一百三十一岁。1001 年红宝石关那一仗，她刻过符的那扇门没让人攻破。可是仗一打完，她这门手艺倒成了别人嘴里的“土办法”。如今族人都在装箱子准备搬走，只有她还没动身。"
  },
  {
   "id": "pm_hilde",
   "name": "希尔德·半牌",
   "gender": "f",
   "race": "human",
   "subrace": "gerudian",
   "cls": "fighter",
   "background": "soldier",
   "abil": {
    "str": 16,
    "dex": 14,
    "con": 15,
    "int": 10,
    "wis": 12,
    "cha": 8
   },
   "profs": [
    "perception",
    "survival",
    "athletics",
    "intimidation"
   ],
   "portrait": "gen_human_knight_f",
   "origins": [
    "ebonmarck"
   ],
   "tags": [
    "军团",
    "简单上手"
   ],
   "blurb": "希尔德曾是黑卡斯塔诺的军团兵。皇帝下令放下武器，她便照办。如今随身的军团牌只剩半块。",
   "bio": "她今年三十四岁。沼泽堡那天她就在中军，皇帝下令停手，她就停了手。紧跟着术士王的火烧了过来，把她的军团牌熔成了两半，丢的那一半到现在还埋在泥里。如今她替加雷克守城门。"
  },
  {
   "id": "pm_marcan",
   "name": "万神道的马尔坎修士",
   "gender": "m",
   "race": "human",
   "subrace": "escanni",
   "cls": "cleric",
   "background": "acolyte",
   "abil": {
    "str": 13,
    "dex": 9,
    "con": 13,
    "int": 14,
    "wis": 16,
    "cha": 10
   },
   "profs": [
    "history",
    "persuasion",
    "religion",
    "insight"
   ],
   "portrait": "gen_human_mage_m",
   "origins": [
    "ebonmarck"
   ],
   "tags": [
    "祭司",
    "失势"
   ],
   "blurb": "马尔坎侍奉神王卡斯特洛斯，一生未给任何人加冕。可人们谈起那位傀儡皇帝，仍向他追问神殿的责任。",
   "bio": "他今年三十五岁，是卡斯托纳斯万神道的祭司。当年给傀儡皇帝加冕的是他的上司，可和约罚起来，凡是穿这身袍子的一个都没放过。如今只有乌霜边区还肯请他去主持葬礼。"
  },
  {
   "id": "pm_galindel",
   "name": "加琳德尔·夜枝",
   "gender": "f",
   "race": "elf",
   "subrace": "moon_elf",
   "cls": "wizard",
   "background": "scholar",
   "abil": {
    "str": 8,
    "dex": 16,
    "con": 12,
    "int": 16,
    "wis": 13,
    "cha": 10
   },
   "profs": [
    "insight",
    "investigation",
    "arcana",
    "history"
   ],
   "portrait": "sun_elf_philosopher_f",
   "origins": [
    "ibevar"
   ],
   "tags": [
    "法师",
    "长命"
   ],
   "blurb": "加琳德尔照料月火号上的排钟。她不看好两族通婚，精灵活得更久，迟早要替爱人服丧。",
   "bio": "她 801 年生在月火号上，守了整整一百年的排钟。那些钟很脆，只有法师才护得住。后来钟搬去了瓦多塞德，她也跟着去了。上岸这二十二年里，她已经送走了三个人类朋友。"
  },
  {
   "id": "pm_wren",
   "name": "文达尔·金箭",
   "gender": "m",
   "race": "elf",
   "subrace": "moon_elf",
   "cls": "rogue",
   "background": "sailor",
   "abil": {
    "str": 10,
    "dex": 17,
    "con": 12,
    "int": 14,
    "wis": 8,
    "cha": 14
   },
   "profs": [
    "stealth",
    "sleight",
    "acrobatics",
    "persuasion",
    "athletics",
    "perception"
   ],
   "portrait": "sun_elf_spymaster",
   "origins": [
    "ibevar"
   ],
   "tags": [
    "年少",
    "长命"
   ],
   "blurb": "战友喊他“鹪鹩”。他六十一岁，按精灵的年纪还算孩子。他乐意和人类交朋友，这一点时常让亲王皱眉。",
   "bio": "他生在海上，四十岁才上岸，那时才第一次见到会结冰的河。后来他在精灵码头混了二十年，学了一口达梅里亚的粗话。亲王这次派他出门，其实是想让他离酒馆远一点。"
  },
  {
   "id": "pm_ottrac",
   "name": "威克斯人奥特拉克",
   "gender": "m",
   "race": "human",
   "subrace": "alenic",
   "cls": "barbarian",
   "background": "miner",
   "abil": {
    "str": 16,
    "dex": 12,
    "con": 15,
    "int": 8,
    "wis": 14,
    "cha": 10
   },
   "profs": [
    "intimidation",
    "perception",
    "athletics",
    "nature"
   ],
   "portrait": "gen_human_rogue_m",
   "origins": [
    "wex"
   ],
   "tags": [
    "正史人物",
    "简单上手"
   ],
   "blurb": "奥特拉克参加过 1020 年的试炼山远征，却在半山腰掉了头。两年过去，旁人还爱当着他的面提起这件事。",
   "bio": "他是丘陵矿上出来的大个子，今年三十三岁。当年他在比武会上挣到了上山的资格，走到半路却陪着马里昂下了山，留在山上的人后来死了九个。从去年泪落月起，他就在马里昂的宫里吃饷。威克斯的几位摄政谁也不放心谁，干脆把印托给了他，一来各方都认得他，二来没人敢从他手里抢。"
  },
  {
   "id": "pm_primrose",
   "name": "普丽姆萝丝·花足",
   "gender": "f",
   "race": "halfling",
   "cls": "cleric",
   "background": "acolyte",
   "abil": {
    "str": 8,
    "dex": 14,
    "con": 13,
    "int": 10,
    "wis": 15,
    "cha": 15
   },
   "profs": [
    "medicine",
    "persuasion",
    "religion",
    "insight"
   ],
   "portrait": "gnome_theologian_f",
   "origins": [
    "wex"
   ],
   "tags": [
    "收殓人"
   ],
   "blurb": "普丽姆萝丝跟福尔卡德大祭司学收殓。她习惯先量一量来人的肩宽，再问家里由谁继承。",
   "bio": "她是个半身人，今年二十四岁，十二岁就进科塞顿学给死人束腰。屠夫原的账如今归她管。四百零六座坟她一座一座都对过，结果有十六座是空的。师父叫她出去找找，看到底是谁挖的。"
  }
 ],
 "races": [
  "human",
  "elf",
  "half_elf",
  "dwarf",
  "halfling",
  "gnome",
  "harpy"
 ],
 "companions": {
  "liv": {
   "id": "liv",
   "name": "卡斯坦“五十四世”",
   "gender": "f",
   "race": "harpy",
   "cls": "barbarian",
   "abil": {
    "str": 15,
    "dex": 14,
    "con": 14,
    "int": 8,
    "wis": 10,
    "cha": 14
   },
   "profs": [
    "performance",
    "athletics",
    "intimidation"
   ],
   "equip": {
    "weapon": "greataxe",
    "armor": "hide",
    "offhand": null,
    "trinket": null
   },
   "portrait": "harpy_commandant_f",
   "blurb": "雅恩珂洛部的鹰身女妖，乌翼兵团的队长。她是卡斯坦五十三世没有写进家谱的女儿。平时她让人喊队长，酒后就爱自称“五十四世”。"
  },
  "barry": {
   "id": "barry",
   "name": "巴里·月华",
   "gender": "m",
   "race": "elf",
   "subrace": "moon_elf",
   "cls": "bard",
   "abil": {
    "str": 8,
    "dex": 12,
    "con": 13,
    "int": 13,
    "wis": 14,
    "cha": 15
   },
   "profs": [
    "persuasion",
    "insight",
    "performance",
    "history"
   ],
   "equip": {
    "weapon": "rapier",
    "armor": "leather",
    "offhand": null,
    "trinket": null
   },
   "portrait": "sun_elf_diplomat",
   "blurb": "巴里是定居威克斯的精灵，也是琥珀溪男爵。八岁的小公爵身边，最像父亲的人就是他。巴里出门的篮子里，永远替旁人多留一份吃的。"
  },
  "vezina": {
   "id": "vezina",
   "name": "薇齐娜·马尔尼德",
   "gender": "f",
   "race": "human",
   "subrace": "escanni",
   "cls": "wizard",
   "abil": {
    "str": 9,
    "dex": 14,
    "con": 12,
    "int": 15,
    "wis": 15,
    "cha": 10
   },
   "profs": [
    "arcana",
    "investigation",
    "insight",
    "history"
   ],
   "equip": {
    "weapon": "quarterstaff",
    "armor": null,
    "offhand": null,
    "trinket": null
   },
   "portrait": "gen_human_mage_f",
   "blurb": "薇齐娜来自科尔巴里德，在渡鸦先知会外圈学习预言。她说起未来总留有余地，你常听她用“要是”起头。从她眼前飞过去的渡鸦，她一只也不会漏数。"
  },
  "valeran": {
   "id": "valeran",
   "name": "恩特本的瓦勒兰爵士",
   "gender": "m",
   "race": "human",
   "subrace": "lorentish",
   "cls": "fighter",
   "subclass": "fighter_knight",
   "abil": {
    "str": 16,
    "dex": 13,
    "con": 15,
    "int": 8,
    "wis": 10,
    "cha": 13
   },
   "profs": [
    "athletics",
    "animal",
    "history",
    "insight"
   ],
   "equip": {
    "weapon": "longsword",
    "armor": "chain_mail",
    "offhand": "shield",
    "trinket": null
   },
   "portrait": "gen_human_knight_m",
   "blurb": "瓦勒兰是阿瑟利斯家的骑士，见面就坦承受命监视你。他守信，也直率，话常说得不中听。"
  }
 },
 "quests": {
  "witness": {
   "title": "监誓人的印",
   "desc": "和约签下后，你得亲赴各国，见证各方履行誓言。",
   "stages": [
    "带上印章，见证各国宣誓。",
    "往东去，听听战败的一方如何宣誓。",
    "查明死者为何从坟中起身。",
    "为十字军找到愿意领军的人。",
    "度过这场出现在差事尽头的寒冬。"
   ],
   "doneText": "印还给了书记官。轮到他登记归还日期，那本册子却再也找不到了。"
  },
  "sleepers": {
   "title": "持刀的老兵",
   "desc": "婚宴上，一名老兵提刀走向国王。他醒来后，只记得自己出门打水。",
   "stages": [
    "查出是谁控制了老兵。",
    "到阿克罗姆顿，寻找还记得旧口令的人。"
   ],
   "doneText": "驯师是亚科布的学生，买刀的钱来自阿克罗米斯。至于谁动了那些坟，驯师始终否认和自己有关。"
  },
  "sixteen_graves": {
   "title": "十六座空坟",
   "desc": "屠夫原记着四百零六座坟，发给死者的束腰只有三百九十副。",
   "stages": [
    "替福尔卡德核对坟数和束腰数。",
    "入夜后，去看谁在墓地干活。",
    "循着无人驾驶的车留下的辙印往南走。",
    "进入大墓地，查看转过头来的遗体。"
   ],
   "doneText": "你在书里找齐了四百零六人的姓名。"
  },
  "lance": {
   "title": "比武场上的一枪",
   "desc": "太后怀疑克雷格·达梅里斯在比武时受人控制，要你查清那一枪。",
   "stages": [
    "调查克雷格出枪时是否出于本意。",
    "回到比武场，检查仍在原地的围栏。",
    "把查到的事告诉太后。"
   ],
   "doneText": "你把答案告诉了太后。她打算如何看待当年的那一枪，只有她自己知道。"
  },
  "edith": {
   "title": "帐篷城的女孩",
   "desc": "帐篷城里有个孩子，她开口讨什么，别人就给什么。连对方自己都说不清为什么。",
   "stages": [
    "去帐篷城，看看女孩是怎样向人讨东西的。",
    "替她物色一位老师。",
    "再去见她，看她长大后过得怎样。"
   ],
   "doneText": "街口那晚，她一直望着你，等你点头。"
  },
  "dyren": {
   "title": "八岁的公爵",
   "desc": "威克斯公爵只有八岁。替他执政的几个人，至今没能好好坐下一起谈。",
   "stages": [
    "决定要把监誓印盖给哪位摄政。",
    "十八年后，再去听听公爵本人的话。"
   ],
   "doneText": "如今看着公爵，你能认出当年照顾他的人留下的影响。"
  },
  "emperor_body": {
   "title": "皇帝的棺材",
   "desc": "加雷克托你寻回父亲的遗体。他想知道，哪一天可以送父亲下葬。",
   "stages": [
    "替加雷克寻找父亲的遗体。",
    "按沼泽堡的线索，去林中驿站打听。",
    "检查中空的地砖。"
   ],
   "doneText": "皇帝的遗体终于有了安置。守砖人也终于放下值守，把勺子洗净。"
  },
  "mountain": {
   "title": "试炼山的诅咒",
   "desc": "一道诅咒封住了试炼山，想上山的人都被挡在山下。",
   "stages": [
    "登山查看诅咒留下的痕迹。",
    "弄清誓石上那半句咒语。",
    "寻找誓石缺失的一角，石片在半身人国王手里。"
   ],
   "doneText": "试炼山往后如何处置，这一次终于定了下来。"
  },
  "canrec_trail": {
   "title": "没药的气味",
   "desc": "一个身带没药香味的人抢在你前面，打听过皇帝遗体的下落。",
   "stages": [
    "追查先来询问遗体的访客。",
    "翻查实验室里从 980 年开始记的账。",
    "查明他为何等着活人修复试炼山。"
   ],
   "doneText": "你见到了寄信的人。他和信里一样，还在抱怨后脑勺发痒。"
  },
  "white_year": {
   "title": "白年",
   "desc": "1040 年卡斯坦月 3 日，渡鸦山上，一具刚入土的遗体自己爬出了坟。",
   "stages": [
    "去渡鸦山查看那座尚未回填的坟。",
    "取得太阳王的印，才好让外军进入科乌里亚。",
    "弄清瓦洛森愿意用什么条件收下样本。"
   ],
   "doneText": "第一锅只配出了三剂药。你把三剂都分了出去。"
  },
  "crusade": {
   "title": "渡鸦山远征",
   "desc": "最后一路十字军将从瓦洛森开赴渡鸦山。",
   "stages": [
    "去瓦洛森与十字军会合。",
    "见一见守在门口的老熟人。"
   ],
   "doneText": "进军渡鸦山的代价，最终有人承担了。"
  },
  "liv_claim": {
   "title": "第五十四位",
   "desc": "卡斯坦想走一趟试炼山。她愿意让誓石来判定自己能否继承帝位。",
   "stages": [
    "陪她去见父亲。",
    "查明第九道试炼的石像会承认谁。",
    "告诉她，石上的结是否已经解开。"
   ],
   "doneText": "关于帝位，卡斯坦终于等到了自己的答复。"
  },
  "barry_boy": {
   "title": "巴里担保的孩子",
   "desc": "八岁的威克斯公爵尚不能立誓，巴里决定代他按下手印。",
   "stages": [
    "见证巴里替年幼的公爵作保。",
    "公爵如今签发了驱逐精灵的命令，去看看巴里的打算。"
   ],
   "doneText": "当年的承诺和如今的驱逐令摆在一起，巴里终究作出了选择。"
  },
  "vezina_eye": {
   "title": "先知的鸦眼",
   "desc": "薇齐娜想进入先知会内圈。她盼着自己也能换上一只能预见将来的鸦眼。",
   "stages": [
    "寻访那棵树，薇齐娜的师门已在那里守了十九年。"
   ],
   "doneText": "关于要不要那只眼，薇齐娜已经有了决定。"
  },
  "valeran_oath": {
   "title": "监视你的骑士",
   "desc": "恩特本派瓦勒兰同行，为的是随时知道你在做什么。",
   "stages": [
    "与瓦勒兰同行，留意他替谁办事。",
    "“碎玫瑰”的旗已在恩特本升起，去见瓦勒兰。"
   ],
   "doneText": "不管他如今站在哪边，瓦勒兰已经答复了当初向你立下的誓。"
  }
 },
 "chapters": [
  {
   "title": "序章 · 达梅里亚",
   "note": "达梅里斯堡，王室婚礼后第七天。",
   "scene": "p_dameria_01",
   "if": "origin == 'dameria'",
   "effects": [
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    }
   ]
  },
  {
   "title": "序章 · 洛伦特",
   "note": "洛伦泰内，国王两岁生日的前三天。",
   "scene": "p_lorent_01",
   "if": "origin == 'lorent'",
   "effects": [
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    }
   ]
  },
  {
   "title": "序章 · 乌霜边区",
   "note": "乌霜领，围城第九十一天。",
   "scene": "p_ebonmarck_01",
   "if": "origin == 'ebonmarck'",
   "effects": [
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    }
   ]
  },
  {
   "title": "序章 · 伊贝瓦尔",
   "note": "瓦多塞德，两条命。",
   "scene": "p_ibevar_01",
   "if": "origin == 'ibevar'",
   "effects": [
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    }
   ]
  },
  {
   "title": "序章 · 威克斯",
   "note": "去科塞顿的大路，一车尸首翻进了路沟。",
   "scene": "p_wex_01",
   "if": "origin == 'wex'",
   "effects": [
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    }
   ]
  },
  {
   "title": "第一幕 · 谁的手",
   "note": "1022 年埃斯玛月，安本科斯特旧斗兽场。2 级，领过印。",
   "scene": "a1_01",
   "effects": [
    "level 2",
    {
     "if": "item.witness_seal < 1",
     "then": [
      "item +witness_seal"
     ]
    },
    "quest witness start",
    {
     "if": "origin == 'dameria'",
     "then": [
      "flag saw_sleeper",
      "flag met_edith",
      "flag p_knife_hanged"
     ]
    },
    {
     "if": "origin == 'lorent'",
     "then": [
      "flag saw_empty_graves",
      "flag p_hall_denied",
      "flag p_met_valeran",
      "quest lance start",
      {
       "if": "item.lance_ledger < 1",
       "then": [
        "item +lance_ledger"
       ]
      }
     ]
    },
    {
     "if": "origin == 'ebonmarck'",
     "then": [
      "flag saw_sleeper",
      "flag p_old_coin",
      "flag met_liv_early"
     ]
    },
    {
     "if": "origin == 'ibevar'",
     "then": [
      "flag saw_sleeper",
      "flag p_ibevar_blood",
      {
       "if": "item.lunatein_plank < 1",
       "then": [
        "item +lunatein_plank"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "flag saw_empty_graves",
      "companion +barry",
      "quest sixteen_graves start"
     ]
    },
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    }
   ]
  },
  {
   "title": "第二幕 · 地砖下的皇帝",
   "note": "1023 年花始月，卡斯托纳斯西门。4 级，卡斯坦、巴里、薇齐娜在队。阿克罗米斯的事悄悄了结了，小公爵由男爵们带大。",
   "scene": "a2_01",
   "effects": [
    "level 2",
    {
     "if": "item.witness_seal < 1",
     "then": [
      "item +witness_seal"
     ]
    },
    "quest witness start",
    {
     "if": "origin == 'dameria'",
     "then": [
      "flag saw_sleeper",
      "flag met_edith",
      "flag p_knife_hanged"
     ]
    },
    {
     "if": "origin == 'lorent'",
     "then": [
      "flag saw_empty_graves",
      "flag p_hall_denied",
      "flag p_met_valeran",
      "quest lance start",
      {
       "if": "item.lance_ledger < 1",
       "then": [
        "item +lance_ledger"
       ]
      }
     ]
    },
    {
     "if": "origin == 'ebonmarck'",
     "then": [
      "flag saw_sleeper",
      "flag p_old_coin",
      "flag met_liv_early"
     ]
    },
    {
     "if": "origin == 'ibevar'",
     "then": [
      "flag saw_sleeper",
      "flag p_ibevar_blood",
      {
       "if": "item.lunatein_plank < 1",
       "then": [
        "item +lunatein_plank"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "flag saw_empty_graves",
      "companion +barry",
      "quest sixteen_graves start"
     ]
    },
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    },
    "level 4",
    "companion +liv",
    "companion +barry",
    "companion +vezina",
    {
     "if": "item.ledger_page < 1",
     "then": [
      "item +ledger_page"
     ]
    },
    "flag knows_watchword",
    "flag knows_iacob_name",
    "flag guardian_barons",
    "flag acromis_quiet",
    "flag melcor_dead",
    "quest sleepers start",
    "quest sleepers done",
    "quest edith start",
    "quest edith stage 2",
    "quest witness stage 2",
    "quest dyren start",
    "quest dyren stage 2",
    "quest barry_boy start",
    "quest sixteen_graves stage 3",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 2"
     ]
    }
   ]
  },
  {
   "title": "第三幕 · 白年",
   "note": "间幕《十六年》开头。6 级，瓦勒兰入队。加雷克死了，皇帝的遗体没人收，亚科布被赦。",
   "scene": "a3_01",
   "effects": [
    "level 2",
    {
     "if": "item.witness_seal < 1",
     "then": [
      "item +witness_seal"
     ]
    },
    "quest witness start",
    {
     "if": "origin == 'dameria'",
     "then": [
      "flag saw_sleeper",
      "flag met_edith",
      "flag p_knife_hanged"
     ]
    },
    {
     "if": "origin == 'lorent'",
     "then": [
      "flag saw_empty_graves",
      "flag p_hall_denied",
      "flag p_met_valeran",
      "quest lance start",
      {
       "if": "item.lance_ledger < 1",
       "then": [
        "item +lance_ledger"
       ]
      }
     ]
    },
    {
     "if": "origin == 'ebonmarck'",
     "then": [
      "flag saw_sleeper",
      "flag p_old_coin",
      "flag met_liv_early"
     ]
    },
    {
     "if": "origin == 'ibevar'",
     "then": [
      "flag saw_sleeper",
      "flag p_ibevar_blood",
      {
       "if": "item.lunatein_plank < 1",
       "then": [
        "item +lunatein_plank"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "flag saw_empty_graves",
      "companion +barry",
      "quest sixteen_graves start"
     ]
    },
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    },
    "level 4",
    "companion +liv",
    "companion +barry",
    "companion +vezina",
    {
     "if": "item.ledger_page < 1",
     "then": [
      "item +ledger_page"
     ]
    },
    "flag knows_watchword",
    "flag knows_iacob_name",
    "flag guardian_barons",
    "flag acromis_quiet",
    "flag melcor_dead",
    "quest sleepers start",
    "quest sleepers done",
    "quest edith start",
    "quest edith stage 2",
    "quest witness stage 2",
    "quest dyren start",
    "quest dyren stage 2",
    "quest barry_boy start",
    "quest sixteen_graves stage 3",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 2"
     ]
    },
    "level 6",
    "companion +valeran",
    "flag siege_certified",
    "flag garrec_dead",
    "flag body_left",
    "flag liv_saw_body",
    "flag knows_myrrh",
    "flag golem_none",
    "flag iacob_pardoned",
    "flag lucan_alva",
    "flag edith_none",
    "world unburied 7",
    "quest valeran_oath start",
    "quest emperor_body start",
    "quest emperor_body fail",
    "quest liv_claim start",
    "quest mountain start",
    "quest canrec_trail start",
    "quest witness stage 3",
    "quest edith stage 3",
    "quest mountain stage 2",
    "quest liv_claim stage 2",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 3"
     ]
    }
   ]
  },
  {
   "title": "第四幕 · 玫瑰与月的婚礼",
   "note": "1040 年泰苏伦月，维斯沃尔。8 级。逐精灵令缓行，巴里离队。渡鸦山封了，当众谁也没怪。",
   "scene": "a4_01",
   "effects": [
    "level 2",
    {
     "if": "item.witness_seal < 1",
     "then": [
      "item +witness_seal"
     ]
    },
    "quest witness start",
    {
     "if": "origin == 'dameria'",
     "then": [
      "flag saw_sleeper",
      "flag met_edith",
      "flag p_knife_hanged"
     ]
    },
    {
     "if": "origin == 'lorent'",
     "then": [
      "flag saw_empty_graves",
      "flag p_hall_denied",
      "flag p_met_valeran",
      "quest lance start",
      {
       "if": "item.lance_ledger < 1",
       "then": [
        "item +lance_ledger"
       ]
      }
     ]
    },
    {
     "if": "origin == 'ebonmarck'",
     "then": [
      "flag saw_sleeper",
      "flag p_old_coin",
      "flag met_liv_early"
     ]
    },
    {
     "if": "origin == 'ibevar'",
     "then": [
      "flag saw_sleeper",
      "flag p_ibevar_blood",
      {
       "if": "item.lunatein_plank < 1",
       "then": [
        "item +lunatein_plank"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "flag saw_empty_graves",
      "companion +barry",
      "quest sixteen_graves start"
     ]
    },
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    },
    "level 4",
    "companion +liv",
    "companion +barry",
    "companion +vezina",
    {
     "if": "item.ledger_page < 1",
     "then": [
      "item +ledger_page"
     ]
    },
    "flag knows_watchword",
    "flag knows_iacob_name",
    "flag guardian_barons",
    "flag acromis_quiet",
    "flag melcor_dead",
    "quest sleepers start",
    "quest sleepers done",
    "quest edith start",
    "quest edith stage 2",
    "quest witness stage 2",
    "quest dyren start",
    "quest dyren stage 2",
    "quest barry_boy start",
    "quest sixteen_graves stage 3",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 2"
     ]
    },
    "level 6",
    "companion +valeran",
    "flag siege_certified",
    "flag garrec_dead",
    "flag body_left",
    "flag liv_saw_body",
    "flag knows_myrrh",
    "flag golem_none",
    "flag iacob_pardoned",
    "flag lucan_alva",
    "flag edith_none",
    "world unburied 7",
    "quest valeran_oath start",
    "quest emperor_body start",
    "quest emperor_body fail",
    "quest liv_claim start",
    "quest mountain start",
    "quest canrec_trail start",
    "quest witness stage 3",
    "quest edith stage 3",
    "quest mountain stage 2",
    "quest liv_claim stage 2",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 3"
     ]
    },
    "level 8",
    "flag years_court",
    "flag quarantine_held",
    "flag vezina_stopped",
    "flag knows_ravens_watched",
    "flag sun_terms",
    "flag edict_softened",
    "companion -barry",
    "flag blame_silent",
    "flag law_limited",
    "flag knows_roster",
    "flag doses_split",
    "world unburied 5",
    "world communion 6",
    {
     "if": "flag.f_staff",
     "then": [
      "world writ 4"
     ],
     "else": [
      "world writ 3"
     ]
    },
    "quest white_year start",
    "quest white_year done",
    "quest vezina_eye start",
    "quest vezina_eye done",
    "quest dyren done",
    "quest barry_boy done",
    "quest edith done",
    "quest witness stage 4",
    "quest sixteen_graves stage 4",
    "quest canrec_trail stage 2"
   ]
  },
  {
   "title": "终章 · 最后一个冬天",
   "note": "间幕《十二个冬天》开头。10 级。克雷格派人代战，十字军是自由会盟，卡斯坦知道缰绳的事。",
   "scene": "f_01",
   "effects": [
    "level 2",
    {
     "if": "item.witness_seal < 1",
     "then": [
      "item +witness_seal"
     ]
    },
    "quest witness start",
    {
     "if": "origin == 'dameria'",
     "then": [
      "flag saw_sleeper",
      "flag met_edith",
      "flag p_knife_hanged"
     ]
    },
    {
     "if": "origin == 'lorent'",
     "then": [
      "flag saw_empty_graves",
      "flag p_hall_denied",
      "flag p_met_valeran",
      "quest lance start",
      {
       "if": "item.lance_ledger < 1",
       "then": [
        "item +lance_ledger"
       ]
      }
     ]
    },
    {
     "if": "origin == 'ebonmarck'",
     "then": [
      "flag saw_sleeper",
      "flag p_old_coin",
      "flag met_liv_early"
     ]
    },
    {
     "if": "origin == 'ibevar'",
     "then": [
      "flag saw_sleeper",
      "flag p_ibevar_blood",
      {
       "if": "item.lunatein_plank < 1",
       "then": [
        "item +lunatein_plank"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "flag saw_empty_graves",
      "companion +barry",
      "quest sixteen_graves start"
     ]
    },
    {
     "if": "flag.f_rites && item.holy_oil < 1",
     "then": [
      "item +holy_oil"
     ]
    },
    "level 4",
    "companion +liv",
    "companion +barry",
    "companion +vezina",
    {
     "if": "item.ledger_page < 1",
     "then": [
      "item +ledger_page"
     ]
    },
    "flag knows_watchword",
    "flag knows_iacob_name",
    "flag guardian_barons",
    "flag acromis_quiet",
    "flag melcor_dead",
    "quest sleepers start",
    "quest sleepers done",
    "quest edith start",
    "quest edith stage 2",
    "quest witness stage 2",
    "quest dyren start",
    "quest dyren stage 2",
    "quest barry_boy start",
    "quest sixteen_graves stage 3",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 2"
     ]
    },
    "level 6",
    "companion +valeran",
    "flag siege_certified",
    "flag garrec_dead",
    "flag body_left",
    "flag liv_saw_body",
    "flag knows_myrrh",
    "flag golem_none",
    "flag iacob_pardoned",
    "flag lucan_alva",
    "flag edith_none",
    "world unburied 7",
    "quest valeran_oath start",
    "quest emperor_body start",
    "quest emperor_body fail",
    "quest liv_claim start",
    "quest mountain start",
    "quest canrec_trail start",
    "quest witness stage 3",
    "quest edith stage 3",
    "quest mountain stage 2",
    "quest liv_claim stage 2",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance stage 3"
     ]
    },
    "level 8",
    "flag years_court",
    "flag quarantine_held",
    "flag vezina_stopped",
    "flag knows_ravens_watched",
    "flag sun_terms",
    "flag edict_softened",
    "companion -barry",
    "flag blame_silent",
    "flag law_limited",
    "flag knows_roster",
    "flag doses_split",
    "world unburied 5",
    "world communion 6",
    {
     "if": "flag.f_staff",
     "then": [
      "world writ 4"
     ],
     "else": [
      "world writ 3"
     ]
    },
    "quest white_year start",
    "quest white_year done",
    "quest vezina_eye start",
    "quest vezina_eye done",
    "quest dyren done",
    "quest barry_boy done",
    "quest edith done",
    "quest witness stage 4",
    "quest sixteen_graves stage 4",
    "quest canrec_trail stage 2",
    "level 10",
    "flag crege_champions",
    "flag valeran_stayed",
    "flag wedding_blood",
    "flag charter_league",
    "flag knows_canrec_plan",
    "flag liv_told",
    {
     "if": "item.jaher_letter < 1",
     "then": [
      "item +jaher_letter"
     ]
    },
    "quest valeran_oath done",
    "quest mountain done",
    "quest liv_claim done",
    "quest witness stage 5",
    "quest canrec_trail stage 3",
    {
     "if": "origin == 'lorent'",
     "then": [
      "quest lance done"
     ]
    }
   ]
  }
 ],
 "flagNotes": {
  "f_sapphire": "阵营：蓝宝石之眼",
  "f_rites": "阵营：旧礼",
  "f_staff": "阵营：贤者门下",
  "saw_sleeper": "序章撞见过沉睡者",
  "saw_empty_graves": "序章撞见过少掉的尸首",
  "met_edith": "序章见过伊迪丝",
  "p_knife_hanged": "达梅里亚：三个老兵绞了",
  "p_knife_held": "达梅里亚：三个老兵押着",
  "p_knife_released": "达梅里亚：三个老兵放了",
  "p_hall_denied": "洛伦特：对大厅说没这回事",
  "p_hall_truth": "洛伦特：对大厅说了实话",
  "p_hall_inquiry": "洛伦特：答应大厅彻查",
  "p_met_valeran": "洛伦特：在空棺材边见过瓦勒兰",
  "p_old_coin": "乌霜边区：听说有人拿旧金币打听皇帝",
  "p_gave_legionary": "乌霜边区：把申辩“受慑”的老兵交了出去",
  "p_used_watchword": "乌霜边区：用旧口令使唤过沉睡者",
  "met_liv_early": "乌霜边区：序章里卡斯坦救过你",
  "p_laid_arms": "乌霜边区：沼泽堡那天放下了兵器",
  "p_fought_on": "乌霜边区：沼泽堡那天没放下兵器",
  "p_ibevar_blood": "伊贝瓦尔：两条命按血偿判",
  "p_ibevar_weregild": "伊贝瓦尔：两条命按命价判",
  "p_ibevar_held": "伊贝瓦尔：两条命押后再判",
  "p_wex_buried_legionary": "威克斯：第十二具尸首埋了",
  "p_wex_cast_out": "威克斯：第十二具尸首扔出了屠夫原",
  "exam_precedent": "验心进了案卷，成了前例",
  "knows_watchword": "听得懂、念得出那句旧口令",
  "lance_asked": "洛伦特：当面问过克雷格",
  "plumwall_plea": "收下了普卢姆沃尔的“受慑”申辩",
  "plumwall_duel": "普卢姆沃尔的事用骑士裁决了结",
  "aria_anoints": "判词由月神神殿涂油作保",
  "alaria_for": "泛神会议上替阿拉莉亚作证",
  "alaria_blocked": "泛神会议上拦下了阿拉莉亚",
  "emil_struck": "删掉了埃米尔排挤精灵的条款",
  "field_done": "屠夫原的迁葬做完了",
  "guardian_barry": "巴里带大戴伦",
  "guardian_crovan": "克洛万带大戴伦",
  "guardian_marion": "马里昂做戴伦的监护人",
  "guardian_barons": "男爵们带大戴伦",
  "melcor_dead": "驯师梅尔科尔死了",
  "melcor_wise": "驯师梅尔科尔交给了贤者会",
  "knows_iacob_name": "知道驯师的师父是亚科布",
  "acromis_exposed": "揭发了阿克罗米斯",
  "acromis_quiet": "阿克罗米斯的事悄悄了结",
  "acromis_traded": "拿阿克罗米斯的把柄换了令状",
  "iacob_favor": "收过亚科布的通行文书",
  "siege_certified": "围城：你给加雷克作了保",
  "siege_hearing": "围城：你给加雷克争到了听证",
  "siege_duel": "围城：用一场单挑了结",
  "garrec_king": "加雷克称王，黑龙留在东坎诺",
  "garrec_dead": "加雷克死了，寒行军北上",
  "garrec_exile": "加雷克流亡",
  "elrac_debt_paid": "威克斯：讨回了“屠夫”那笔债",
  "knows_myrrh": "知道有个一身没药味的人先打听过遗体",
  "keeper_hostile": "守砖人不信你",
  "liv_saw_body": "卡斯坦看过她爹",
  "body_westgate": "皇帝葬在西门",
  "body_citadel": "皇帝葬在北要塞",
  "body_pantheon": "皇帝葬在万神道",
  "body_quiet": "皇帝悄悄埋了",
  "body_burned": "皇帝火化了",
  "body_left": "皇帝留在地砖下没人收",
  "calindal_named": "告诉了克拉丽蒙德卡林达尔是谁家的手艺",
  "clarimonde_pact": "答应帮克拉丽蒙德毁阶",
  "lance_truth": "洛伦特：在比武场找到了凭据",
  "map_drawn": "在石桌上画过“将来的疆界”",
  "vow_liv": "在山上答应过让卡斯坦试",
  "golem_pc": "魔像向你缴了械",
  "golem_liv": "魔像向卡斯坦缴了械",
  "golem_none": "谁也没缴下魔像的械",
  "iacob_hanged": "亚科布绞死了",
  "iacob_pardoned": "亚科布被赦了",
  "iacob_wise": "亚科布交给了贤者会",
  "knows_word": "你知道那个字（至少一半）",
  "mended": "试炼动工修了",
  "knot_alarian": "请阿拉里安解结",
  "knot_ravens": "请渡鸦先知会解结",
  "knot_iacob": "请亚科布解结",
  "stair_down": "第二幕就把石阶毁了",
  "mountain_sealed": "试炼山的石阶毁了",
  "ravens_trust": "先知会内圈把你当自己人",
  "lucan_alva": "卢坎跟着母亲阿尔瓦",
  "lucan_garrec": "卢坎跟着舅舅加雷克",
  "lucan_marion": "卢坎交给马里昂养",
  "lucan_iacob": "卢坎交给亚科布养",
  "edith_alarian": "伊迪丝跟阿拉里安学",
  "edith_wise": "伊迪丝跟贤者会学",
  "edith_ravens": "伊迪丝跟渡鸦先知会学",
  "edith_iacob": "伊迪丝跟亚科布学",
  "edith_none": "伊迪丝没有先生",
  "years_watch": "十六年：在古塔办“守望”",
  "years_court": "十六年：回本国当差",
  "years_wards": "十六年：带大被监护的孩子",
  "years_graves": "十六年：跟着收殓人埋人",
  "edith_trusts": "彗星之夜你对伊迪丝说了实话",
  "arrel_with_you": "达梅里亚：阿雷尔王子跟着你",
  "quarantine_held": "渡鸦山封了",
  "quarantine_open": "渡鸦山放人出城",
  "knows_ravens_watched": "知道先知会十九年前就看见了白年",
  "vezina_eye": "薇齐娜受了鸦眼",
  "vezina_stopped": "你拦住了薇齐娜",
  "vezina_left": "薇齐娜离队了",
  "cure_early": "先知会早交出了实验室的位置",
  "plague_samples": "从白旗船上取过样本",
  "harpies_freed": "放了锡亚丹的鹰身女妖",
  "sun_terms": "接了太阳王宫廷的条件",
  "sun_refused": "没接太阳王宫廷的条件",
  "edict_upheld": "逐精灵令照准",
  "edict_overruled": "逐精灵令推翻",
  "edict_softened": "逐精灵令缓行",
  "edith_mob": "让伊迪丝慑住了暴民",
  "blame_canrec": "当众怪坎雷克",
  "blame_elves": "当众怪精灵",
  "blame_ravens": "当众怪渡鸦先知会",
  "blame_silent": "当众谁也没怪",
  "law_full": "疫令全给",
  "law_limited": "疫令限期",
  "law_refused": "疫令不给",
  "knows_roster": "知道那本书是花名册",
  "doses_moon": "三剂药都给了达梅里亚",
  "doses_rose": "三剂药都给了洛伦特",
  "doses_split": "三剂药两家各一，剩的给了孩子",
  "doses_children": "三剂药都给了车上的孩子",
  "viswall_safe": "两国使者在芬尼克那间屋里许过诺",
  "finnic_chip": "誓石碎片到了你手里",
  "dwarves_thanked": "有人谢过管闸的红宝石矮人",
  "lance_told_truth": "洛伦特：告诉太后那一枪是他自己的",
  "lance_told_thrall": "洛伦特：告诉太后那一枪是受慑",
  "crege_penance": "克雷格行了忏悔礼",
  "crege_champions": "克雷格派人代战",
  "crege_given": "克雷格交给了太后",
  "valeran_champion": "瓦勒兰替精灵出战",
  "valeran_released": "你解了瓦勒兰的誓",
  "valeran_purist": "瓦勒兰跟纯血派走了",
  "valeran_stayed": "瓦勒兰留在你身边",
  "enteben_stopped": "恩特本的逼宫被拦下了",
  "wedding_blood": "婚礼上见了血",
  "charter_emperor": "十字军章程：奉皇帝",
  "charter_league": "十字军章程：自由会盟",
  "charter_writ": "十字军章程：凭瓦洛森令状",
  "charter_muster": "十字军章程：各国出兵",
  "wex_crown_promised": "威克斯：答应过替戴伦要王号",
  "larthan_open": "拉尔桑防线说开了",
  "knows_canrec_plan": "知道坎雷克在等活人修山",
  "knows_why_watched": "知道先知会为什么坐着看",
  "palehand_saluted": "对苍手行过旧礼",
  "bridle_public": "把缰绳的事对诸王摊开讲了",
  "liv_told": "卡斯坦知道缰绳的全部",
  "knot_cut": "山上的结解成了",
  "iacob_loop": "亚科布留了活扣",
  "castan_crowned": "山上立过皇帝",
  "castan_alive": "那位皇帝还活着",
  "castan_garrec": "皇帝是加雷克",
  "castan_lucan": "皇帝是卢坎",
  "castan_liv": "皇帝是卡斯坦",
  "castan_pc": "皇帝是你",
  "liv_bridled": "卡斯坦不知情立了誓，被套上了",
  "liv_north": "卡斯坦往北飞了",
  "liv_dead": "卡斯坦死了",
  "winters_crusade": "十二个冬天：跟着十字军打",
  "winters_varlosen": "十二个冬天：守在瓦洛森",
  "winters_home": "十二个冬天：回了本国",
  "winters_squire": "十二个冬天：带阿德蕾西娅",
  "temple_dug": "让人挖了苏雷尔神庙下面",
  "temple_guarded": "派人守住了苏雷尔神庙",
  "pyre_stopped": "拦下了沼地里的火刑",
  "vezina_freed": "从笼子里放出了薇齐娜",
  "bridle_pc": "缰绳在你手里",
  "bridle_wise": "缰绳在贤者门下手里",
  "price_aldresia": "付账的是阿德蕾西娅",
  "price_pc": "付账的是你",
  "price_companion": "付账的是同伴",
  "price_emperor": "付账的是被牵的皇帝",
  "price_names": "一页一页念名字",
  "price_valeran": "替你付账的是瓦勒兰",
  "price_liv": "替你付账的是卡斯坦",
  "book_locked": "书封进了骑士团的库",
  "book_wise": "书交给了加里昂",
  "book_kept": "你接过了书上的记号",
  "order_founder": "骑士团是你建的",
  "god_camp": "神：在帐篷城治过人",
  "god_on_agenda": "神：泛神会议把你排进了议程",
  "god_truce": "神：乌霜领的仗是你一句话停的",
  "golem_forever": "神：魔像向不会死的人下了跪",
  "god_half_sentence": "神：你在的屋里没人撒得了谎",
  "god_healed": "神：在渡鸦山治了病人",
  "god_herald": "神：认下了“苏雷尔的使者”",
  "god_promise_viswall": "神：在芬尼克那间屋里许过诺",
  "god_wed": "神：那桩婚事是你证的",
  "god_crusade": "神：十字军奉你的名出征",
  "god_unseated": "神：哪张椅子都没坐"
 },
 "endings": {
  "unseated": {
   "title": "不肯落座的神",
   "subtitle": "仗打完了，人人给你搬椅子",
   "divine": true,
   "text": [
    "东坎诺的国王们请你上试炼山登基，祭司请你加入众神。连坎雷克山宅里的椅子都换了新垫子。三个地方你都没去。",
    "这可难倒了祭司。中断了三十年的第七次泛神会议重新开门，先议阿德蕾西娅是哪位神的化身，再议你。十一天后，他们决定下次再议。各国倒先写好了接待章程，连神来了要不要搬走王座都有专条。",
    "只要你在，坐在王座上的人就做不了最后的主。各国盼你早些离开，又怕你再也不来。从此，谁想做下一位卡斯坦，登山前都得先问问你。你家门外，那个半精灵孩子还在追鸡。"
   ]
  },
  "quiet": {
   "title": "寂静之冠",
   "subtitle": "你叫死人躺下，他们都躺下了",
   "text": [
    "你接过书主的记号。当晚，从渡鸦山到艾伦河，所有被唤起的死者都躺下了。瘟疫也随之止息，再没复发。",
    "书里的亡魂如今听你号令。坎雷克也在里面，偶尔抱怨后脑勺发痒。边境地和科乌里亚都敬畏你这位守墓人。阿德蕾西娅活了下来。她创立骑士团，定下的第一条誓约就是监视你。",
    "骑士团没能将魔典封存。四百年后，想读这本书的人依然得先找到你。"
   ]
  },
  "bridle": {
   "title": "缰绳",
   "subtitle": "山上有皇帝，皇帝脖子上有绳",
   "text": [
    "试炼山终于有了皇帝。他从未违誓。每道誓言都系在一个活人手里，轮不到他反悔。",
    "从山上发下的敕令，没有一个国王敢违抗。当年术士王尼奇默就是这样统治他们的。如今掌权的人说，这么做是为了所有人。",
    "到了 1221 年，各国连开会商量的必要都没了。阿兰蒂尔大峰会再也不会召开。"
   ]
  },
  "fiftyfourth": {
   "title": "第五十四位",
   "subtitle": "结解了，山修了，有人立了誓",
   "text": [
    "绳结解开了。新君走完十道试炼，站在誓石前宣誓。四周没有见证人。只有石头热了起来，让宣过的誓烙进了皮肤。",
    "东坎诺提前三百年迎来了统一。等到 1424 年，兽人的绿潮越过边界，迎战的是整个卡斯泰利尔帝国。",
    "达梅斯海德诸国当年开战，就是为了阻止东边再出一个皇帝。消息传到西边，各家当晚就开始清点兵力，商议结盟。"
   ]
  },
  "parting": {
   "title": "各回各船",
   "subtitle": "杀停了，因为精灵走了",
   "text": [
    "伊贝瓦尔封闭了拉尔桑，月港拉起吊桥。凯尔马尔多的白港一向空着，这次真有几条小船从那里驶回了海上。",
    "迫害终止了。两族之间也几乎断了往来。国王马里昂哪边都不被接纳。半精灵的孩子十几岁就得决定，往后要跟哪一边生活。",
    "后来还有人说“安本纳尔”。这个词原本指的是人们同桌吃饭，如今说出口，多半是在讥讽谁。"
   ]
  },
  "table": {
   "title": "同席",
   "subtitle": "主位空着，轮流管饭",
   "text": [
    "没人登基，也没人被谁牵着走。各族都留下了。每年兰斯日，他们回到安本科斯特的旧斗兽场，围桌而坐。主位一直空着，饭菜轮流做。",
    "各国认定坎雷克应独自为瘟疫负责。瓦洛森的令状每十年续一次，续约时须请外人见证。洛伦特和达梅里亚结了亲，两家有意见，还能坐在一张饭桌前争。",
    "有事得一家一家去谈，自然办得慢。这套规矩倒也一直传了下去。后来史家只在一个问题上谈不拢，1221 年究竟是帝国建立的年份，还是它改名的年份？"
   ]
  },
  "ledger": {
   "title": "监誓人的账",
   "subtitle": "十三年，一字不差",
   "text": [
    "1053 年冬，瓦洛森配出解药，瘟疫终于平息。{?flag.book_wise:魔典留在加里昂的塔里|骑士团把魔典封进库房}。{?flag.mountain_sealed:试炼山依旧封闭|试炼山上依然没有皇帝}。往后的史书就这样记下了这几年。",
    "史书没记下的是那些因你而活下来的人。你留了一张名单。{?(flag.price_pc || (flag.price_emperor && flag.castan_pc)) && is.mortal:阿德蕾西娅从你的行李里找到了它，照着名字挨个拜访。|一直没人来领，名单就留在了你手里。}",
    "也没人写过监誓人这份差事。连登记册都散失了。还记得你去报到那天吗？新的一页上，第一个名字写了两遍，第一遍错了一笔。"
   ]
  }
 },
 "endingScenes": {
  "unseated": "end_unseated",
  "quiet": "end_quiet",
  "bridle": "end_bridle",
  "fiftyfourth": "end_fiftyfourth",
  "parting": "end_parting",
  "table": "end_table",
  "ledger": "end_ledger"
 },
 "epilogues": [
  {
   "title": "未葬者",
   "text": [
    {
     "if": "world.unburied <= 3",
     "text": "白疫止步于边境地。阿雷尔王子活到老年，常在瓦洛森的饭堂吃饭，吃完自己洗碗。克雷格也活着，看着儿女相继成家。卡奈特因此一直独立，没有并入达梅里亚。"
    },
    {
     "if": "world.unburied >= 4 && world.unburied <= 6",
     "text": "死的还是史书上记的那几位。1050 年死的是卡奈特的克雷格和他的儿女{?flag.doses_rose || flag.doses_split:。|，还有洛伦特的雷安四世。}{?flag.doses_moon || flag.doses_split:|马里昂的长子阿雷尔也没能熬过去。}1053 年是加韦德的戈德拉克十一世，那年他才六岁。"
    },
    {
     "if": "world.unburied >= 4 && world.unburied <= 6",
     "text": "大墓地的账本上，这几行字写得比别的都大一号。"
    },
    {
     "if": "world.unburied >= 7",
     "text": "死者的名单又长了一截。克雷格一家{?flag.doses_moon || flag.doses_split:|，阿雷尔王子}{?flag.doses_rose || flag.doses_split:|，雷安四世}，六岁的戈德拉克十一世都在上面，后面还跟着整整一页小地方的人。"
    },
    {
     "if": "world.unburied >= 7",
     "text": "边境地的村名换了一半，新来的垦户说的是罗尔萨德话，见了路边的老坟，就管它叫“前面那家人的”。"
    }
   ]
  },
  {
   "title": "艾伦纳斯的那条街",
   "text": [
    {
     "if": "world.communion <= 5",
     "text": "1042 年，艾伦纳斯精灵街东头的面包房起火。大火烧了两天。瘟疫过后，土地空出来，白银家族才一个接一个兴起。"
    },
    {
     "if": "world.communion >= 6 && world.communion <= 7",
     "text": "艾伦纳斯那条精灵街还是烧了。好在街上的人前一天夜里就从后巷走了，连锅都带走了，只留下门牌。"
    },
    {
     "if": "world.communion >= 8",
     "text": "艾伦纳斯那条精灵街到了十五世纪还在。街口卖的点心是两族的做法掺在一起的，人类嫌太淡，精灵嫌太甜。可两边都照买。"
    }
   ]
  },
  {
   "if": "world.mantle <= 2 || flag.mountain_sealed || !(flag.castan_crowned && flag.castan_alive)",
   "title": "试炼山",
   "text": [
    {
     "if": "world.mantle <= 2 || flag.mountain_sealed",
     "text": "试炼山一直封到十五世纪以后。1339 年，南北两国合并为卡斯泰利尔。到了 1424 年绿潮入境，东坎诺仍然没有皇帝。"
    },
    {
     "if": "!(world.mantle <= 2 || flag.mountain_sealed)",
     "text": "每一代都有人去爬那座山。下来的人里面有几个从此再也撒不了谎。后来都成了很好的法官，只是没人愿意请他们吃饭。"
    }
   ]
  },
  {
   "title": "法师之权",
   "text": [
    {
     "if": "world.writ <= 3",
     "text": "法师无人管束，讨伐他们的人也不受约束。达拉万之愚留下了一排烧黑的柱子，卢西安则剿灭了渡鸦先知会。一百八十年后，法师们还记着这笔仇。1221 年，他们联合起来，逼各国建立了帝国。"
    },
    {
     "if": "world.writ >= 4 && world.writ <= 6",
     "text": "瓦洛森的令状有期限，还有外人在旁边看着。后来的魔导院就是照着这张纸立的规矩。1221 年的阿兰蒂尔大峰会开得很顺，更像是大家凑在一起签个字。"
    },
    {
     "if": "world.writ >= 7",
     "text": "法师管着一切，天下太平。街上没人闹事，因为闹事的念头还没到嘴边，就已经被法师从脑子里拿走了。"
    }
   ]
  },
  {
   "title": "玫瑰与月",
   "text": [
    {
     "if": "world.feud <= 3",
     "text": "西洛瑞尔家与西尔穆纳家结了亲。往后紫丁香战争打起来，领兵的是表兄弟。两家没打多久，停战后还能同桌吃饭。"
    },
    {
     "if": "world.feud >= 4 && world.feud <= 6",
     "text": "伊奥瑞尔先是替孙子当家，后来又替重孙当家，面具戴了十年。再往后，就是打了一百年的紫丁香战争。"
    },
    {
     "if": "world.feud >= 7",
     "text": "婚礼上流的血没能擦干净。那场战争早来了两代人，第一仗就打在洛伦泰内城外的葡萄园里。"
    }
   ]
  },
  {
   "title": "史书怎么写那场瘟疫",
   "text": [
    {
     "if": "flag.blame_canrec",
     "text": "后世讲这场瘟疫，多半从一个人的名字讲起。瓦洛森的教习先在黑板上写“坎雷克”，才转身向学生解释病是怎么来的。"
    },
    {
     "if": "flag.blame_elves",
     "text": "仗打得很快，可“瘟疫是精灵带来的”这句话，人们记了很久。1162 年以后加韦德出了位专杀精灵的国王。他引的就是你那年在瓦洛森说的话，一个字都没改。"
    },
    {
     "if": "flag.blame_ravens",
     "text": "先知会在瘟疫那些年里就垮了。往后再也没有人能预见什么了。"
    },
    {
     "if": "flag.blame_silent",
     "text": "那一年你一个字也没说。瘟疫该怪谁，各个村子只好自己编，一个编得比一个圆，四百年后还在用。"
    },
    {
     "if": "flag.doses_children",
     "text": "车上那十一个孩子里，有一个后来在渡鸦山开了间铁匠铺。她打的第一样东西是一口钟。"
    },
    {
     "if": "flag.doses_moon",
     "text": "阿雷尔王子喝下了那剂药。后来每年一到苏伦月，他都要往瓦洛森送一车柴，一直送到自己走不动为止。"
    },
    {
     "if": "flag.doses_rose",
     "text": "雷安国王喝下了那剂药，可他那次到底是不是只着了点凉。直到他死也没人说得准。"
    },
    {
     "if": "flag.doses_split",
     "text": "两剂药一家一剂，都进了王宫。剩下的一剂给了车上最小的那个孩子。她长大以后在瓦洛森刷锅，刷的正是当年熬药的那口锅。"
    }
   ]
  },
  {
   "if": "flag.price_aldresia || flag.price_pc || flag.price_companion || flag.price_emperor || flag.price_names",
   "title": "谁付了账",
   "text": [
    {
     "if": "flag.price_aldresia",
     "text": "阿德蕾西娅算准了只需去一个人。她去了，再没回来。如今新骑士入团的第一顿饭都在瓦洛森吃。抬头就能看见她的剑挂在墙上。"
    },
    {
     "if": "flag.price_pc && is.mortal",
     "text": "拿命去换的是你。书记官在登记册上替你补了一行。你的印由阿德蕾西娅收着，她从来不拿出来盖。"
    },
    {
     "if": "flag.price_pc && !is.mortal",
     "text": "去撕那一页的是你，可你没死成。阿德蕾西娅只说了一句“我说过您不算数”，就转身埋别人去了。"
    },
    {
     "if": "flag.price_companion && flag.price_liv",
     "text": "卡斯坦临死前要了一口酒，喝了一半。剩下的一半留给了你。史书上没有她的名字，瓦洛森的饭堂里有。"
    },
    {
     "if": "flag.price_companion && !flag.price_liv",
     "text": "瓦勒兰临死前说了一句“恕我直言”，后半句没能说完。史书上没有他的名字，瓦洛森的饭堂里有。"
    },
    {
     "if": "flag.price_emperor",
     "text": "那位皇帝挣回来半口气，亲手撕了那一页，跟五十三世当年在沼泽堡喊“放下兵器”的时候一样。后来北要塞给他立了块碑，碑上只刻了这一件事。"
    },
    {
     "if": "flag.price_names",
     "text": "你没有毁书，只是一页页念上面的名字，念一个就放走一个魂，全念完用了二十年。这二十年里，巫妖坎雷克一直关在书里，偶尔还要插一句嘴。"
    }
   ]
  },
  {
   "title": "皇帝和他的儿子",
   "text": [
    {
     "if": "flag.body_westgate || flag.body_citadel || flag.body_pantheon",
     "text": "五十三世终于有了坟，每年都有人去看他{?flag.body_westgate:。西门外常来的，是提着酒的卡斯托纳斯老兵|}{?flag.body_citadel:。北要塞的守军交接完岗哨，会顺路向他敬礼|}{?flag.body_pantheon:。万神道先是祭司来看他，后来也来了些不认识他的香客|}。"
    },
    {
     "if": "flag.body_quiet || flag.body_left",
     "text": "那一年，他就坐在坎雷克的左边。事后总算有人把他埋了，埋的地方没有立碑，只插了一根勺柄。"
    },
    {
     "if": "flag.body_burned",
     "text": "守砖人把骨灰撒进了艾伦河。从那以后，黑龙的老兵见了你都要说一句：你欠我们一座坟。"
    },
    {
     "if": "flag.garrec_dead",
     "text": "加雷克死在了突围北上的路上。乌尔维克带着残部走完了寒行军，乌霜家就在乌尔维克斯滕的雪里待了四百年。"
    },
    {
     "if": "flag.garrec_king",
     "text": "东坎诺的北边一直有个姓乌霜的王国。他们的钱币上刻着一口棺材。"
    },
    {
     "if": "flag.garrec_exile",
     "text": "加雷克流亡去了格鲁迪亚，活到了很老。他每年都给东坎诺写一封信，信里只问一件事：坟修好了没有。"
    }
   ]
  },
  {
   "if": "met.vezina || flag.edith_none || flag.edith_wise || flag.edith_alarian || flag.edith_ravens || flag.edith_iacob",
   "title": "伊迪丝",
   "text": [
    {
     "if": "flag.edith_alarian",
     "text": "伊迪丝后来在塞纳蒂尔教唱歌。她的学生要练一门少见的本事，唱悲伤的歌时，让听众自己决定要不要哭。"
    },
    {
     "if": "flag.edith_wise",
     "text": "伊迪丝后来做了瓦洛森的典狱，管的是那些慑过人的法师。她自己那间屋子，门是不上锁的。"
    },
    {
     "if": "flag.edith_ravens",
     "text": "伊迪丝后来成了渡鸦先知会的最后一位长老。卢西安带兵来剿的那一天，她一句话，就让一整队兵放下了兵器。"
    },
    {
     "if": "flag.edith_iacob",
     "text": "伊迪丝后来站到了某位国王的身后。史书上没有她的名字，可那位国王的每一道诏令都是她的意思。"
    },
    {
     "if": "flag.edith_none",
     "text": "伊迪丝后来在科塞顿开了间面包铺，客人从来不赊账。她也从来没开口要过。"
    },
    {
     "if": "flag.edith_mob",
     "text": "威克斯堡那条街口的人，一直到老也没想起来。那一夜自己手里为什么会拿着火把。"
    }
   ]
  },
  {
   "title": "威克斯必须统治",
   "text": [
    "威克斯复国，史称第四威克斯王国。四百年后，人们还说着那句“威克斯必须统治”。",
    {
     "if": "flag.guardian_barry",
     "text": "威克斯复国后的第一位国王是巴里带大的。他吃饭慢，判案也慢，判完了总要问一句大家吃了没有。"
    },
    {
     "if": "flag.guardian_crovan",
     "text": "威克斯复国后的第一位国王是克洛万带大的。他说话向来只说一半，另一半留给别人去猜。猜错了的人，后来都不在朝里了。"
    },
    {
     "if": "flag.guardian_marion",
     "text": "威克斯复国后的第一位国王是在达梅斯海德长大的，威克斯的老男爵们一直念叨他口音不对。"
    },
    {
     "if": "flag.guardian_barons",
     "text": "威克斯复国后的第一位国王是几位摄政轮流带大的。他学会的第一件事是谁也别信。第二件是这话千万别说出口。"
    },
    {
     "if": "flag.edict_upheld",
     "text": "他签过的那道逐精灵令，史书上记了一行。他自己一辈子也没再提过。"
    },
    {
     "if": "flag.edict_overruled",
     "text": "那道逐精灵令是你推翻的，他后来复了国，却一直没请你去吃过一顿饭。"
    },
    {
     "if": "flag.edict_softened",
     "text": "那道逐精灵令缓了又缓，缓到后来，都没人记得还有这么一道令了。"
    }
   ]
  },
  {
   "if": "flag.iacob_hanged || flag.iacob_pardoned || flag.iacob_wise",
   "title": "背叛者亚科布",
   "text": [
    {
     "if": "flag.iacob_hanged",
     "text": "亚科布在卡斯托纳斯西门外被绞死。临刑前他要了杯茶，喝罢把杯子交还刽子手。福阿哈尔此后换了三任公爵，论算账，都比不上他。"
    },
    {
     "if": "flag.iacob_pardoned",
     "text": "亚科布活到了九十一岁，死在自己床上，床头的茶具摆得整整齐齐。最后那几年他在替谁办事，谁也说不准。"
    },
    {
     "if": "flag.iacob_wise",
     "text": "亚科布在瓦洛森的塔里关了一辈子，也替贤者会讲了一辈子的课。他讲缰绳的那一课，学生都抢着坐前排，可一下课，就没人敢同他说话了。"
    }
   ]
  },
  {
   "if": "(flag.lucan_alva || flag.lucan_garrec || flag.lucan_marion || flag.lucan_iacob) && !(flag.castan_lucan && flag.castan_crowned)",
   "title": "卢坎",
   "text": [
    {
     "if": "flag.lucan_alva",
     "text": "卢坎随母亲长大，后来做了乌里昂马尔公爵。南王国仍有人盯着他的精灵耳朵。他从没和谁谈起试炼山。"
    },
    {
     "if": "flag.lucan_garrec",
     "text": "卢坎是舅舅加雷克带大的，学会的第一件事就是乌霜家的军礼。后来他做了乌里昂马尔的公爵，府里挂着一面黑龙旗，旗边镶着银。"
    },
    {
     "if": "flag.lucan_marion",
     "text": "卢坎在达梅斯海德长大，同马里昂的孩子们在一张桌上吃饭。后来他做了乌里昂马尔的公爵，口音一辈子没改过来，南王国的人都管他叫“西边来的”。"
    },
    {
     "if": "flag.lucan_iacob",
     "text": "卢坎是亚科布一手教出来的。后来他做了乌里昂马尔的公爵，倒茶的时候手跟他先生一样稳。东坎诺从此又多了一个亚科布。"
    }
   ]
  },
  {
   "if": "flag.crege_penance || flag.crege_champions || flag.crege_given",
   "title": "那一枪",
   "text": [
    {
     "if": "flag.crege_penance",
     "text": "忏悔礼过后，克雷格安稳地过了几年。每年泪落月 27 日，他都把自己关在家中。门厅里的断枪从未取下。"
    },
    {
     "if": "flag.crege_champions",
     "text": "克雷格的血债是在沙地上拿钝枪了结的。卡奈特的人说他这是还了一笔，洛伦特的人说他这是赖了一笔，这笔账也就一直挂着。"
    },
    {
     "if": "flag.crege_given",
     "text": "克雷格给交到了太后手里。往后的事，洛伦泰内的人不提，卡奈特的人也不问。"
    }
   ]
  },
  {
   "if": "flag.temple_dug || flag.temple_guarded",
   "title": "苏雷尔神庙下面",
   "text": [
    {
     "if": "flag.temple_dug",
     "text": "西奥多的人用油布裹着一样东西，离开了苏雷尔神庙的地下。没有人见过包里装着什么。此后，科乌里亚的贵族便很少再晒太阳。"
    },
    {
     "if": "flag.temple_guarded",
     "text": "苏雷尔神庙下面的那样东西又多睡了一阵子。西奥多爵士只好另找门路，这一来就晚了一代人。"
    }
   ]
  },
  {
   "if": "flag.book_locked || flag.book_wise",
   "title": "那本书",
   "text": [
    {
     "if": "flag.book_locked",
     "text": "骑士团把魔典锁进库房，三个人分管钥匙。四百年后，还是有一位法师动了借阅它的心思。"
    },
    {
     "if": "flag.book_wise",
     "text": "魔典交到了加里昂手里。瓦洛森的塔里从此多了一间不点灯的屋子，学生路过都绕着走。加里昂每年进去一回，出来以后一句话也不说。"
    }
   ]
  },
  {
   "if": "flag.finnic_chip && item.oathstone_chip < 1",
   "title": "誓石碎片",
   "text": [
    "誓石碎片送回山上那天，维斯沃尔议会终于又有人敢直说，开口就骂了国王。芬尼克听完，让人再给那位议员添一块饼。"
   ]
  },
  {
   "title": "拉尔桑",
   "text": [
    {
     "if": "flag.larthan_open",
     "text": "拉尔桑的墙比从前矮了。后来墙根下开了集，精灵支摊卖船板，人类就在隔壁卖腌菜。"
    },
    {
     "if": "!flag.larthan_open",
     "text": "拉尔桑的墙又立了几百年。墙那边的人记得是谁关的门，墙这边的人记得是谁没开门。"
    }
   ]
  },
  {
   "if": "met.liv",
   "title": "卡斯坦“五十四世”",
   "text": [
    {
     "if": "!flag.price_liv && flag.castan_liv && flag.castan_alive && !flag.liv_bridled",
     "text": "鹰身女妖坐上了屠兽者的座位。为这件事，东坎诺诸殿争了四十年。她自己倒添了第十一道试炼，得喝酒喝赢她。还没有人过关。"
    },
    {
     "if": "!flag.price_liv && flag.liv_bridled && !flag.liv_dead",
     "text": "她照常嚷着要酒，照常见了谁都封官，可只要牵绳的人让她停，她就停。这件事乌翼兵团的人谁也不提，提了要挨揍，只是动手的不会是她了。"
    },
    {
     "if": "!flag.price_liv && flag.liv_dead",
     "text": "她死在了山上。乌翼兵团把她埋在北要塞脚下，坟头上插了一只空酒壶。"
    },
    {
     "if": "!flag.price_liv && flag.liv_north && !flag.liv_dead",
     "text": "1053 年以前，有人在格鲁迪亚的雪山里见过一个灰翅膀的老鹰身女妖，正在教小的打架，教的第一句话是：先把账算清楚。"
    },
    {
     "if": "flag.price_liv",
     "text": "她替你去撕了那一页。乌翼兵团在北要塞脚下给她立了块碑，碑上刻着“五十四世”，没人敢改。"
    },
    {
     "if": "!flag.price_liv && !flag.castan_liv && !flag.liv_bridled && !flag.liv_dead && !flag.liv_north",
     "text": "她把乌翼兵团交给了副手，自己在北要塞脚下开了间酒馆，招牌上画着一顶冠，冠是歪的。"
    }
   ]
  },
  {
   "if": "met.barry",
   "title": "巴里·月华",
   "text": [
    "1058 年，巴里满一百岁，船上的长老终于肯承认他成年。庆生的宴席摆了三天，第三天端上来的还是第一天的剩菜。",
    {
     "if": "world.communion <= 2",
     "text": "精灵走的那一年，巴里是少数没走的。他留下来守着戴伦的坟，每年到了戴伦生日那天，都往坟前放一块三道卫的乳酪。"
    },
    {
     "if": "world.communion >= 3",
     "text": "1221 年阿兰蒂尔大峰会的席上，有个两百六十三岁的胖精灵带来了一篮子吃的，一进门先分给了门口的卫兵。"
    }
   ]
  },
  {
   "if": "met.vezina",
   "title": "薇齐娜·马尔尼德",
   "text": [
    {
     "if": "flag.vezina_eye",
     "text": "卢西安护国公剿灭先知会前一天，薇齐娜就离开了。后来史书偶尔记下一位独眼女人在国王梦里说话。她还是习惯用“要是”开头。"
    },
    {
     "if": "flag.vezina_left && !flag.vezina_eye && (flag.vezina_freed || world.unburied <= 6)",
     "text": "薇齐娜从狱里出来，第一件事就是数数门口的渡鸦。往后她在瓦洛森教预言，一直教到六十八岁。"
    },
    {
     "if": "flag.vezina_left && !flag.vezina_eye && !flag.vezina_freed && world.unburied >= 7",
     "text": "薇齐娜死在山上那座宅子的一只笼子里。坎雷克的书上有她的名字，排在第十一页，笔迹很工整。"
    },
    {
     "if": "!flag.vezina_left && !flag.vezina_eye",
     "text": "薇齐娜在瓦洛森教预言，一直教到六十八岁。学生问她预言到底准不准，她说准，说完总要再补一句“理论上”。"
    }
   ]
  },
  {
   "if": "met.valeran",
   "title": "恩特本的瓦勒兰爵士",
   "text": [
    {
     "if": "flag.valeran_purist && world.communion <= 5",
     "text": "瓦勒兰投向纯血派。1042 年，他死在艾伦纳斯着火的精灵街上。人们找到他时，他还抱着别人家的孩子。"
    },
    {
     "if": "flag.valeran_purist && world.communion >= 6",
     "text": "瓦勒兰跟着纯血派走了。可是到了艾伦纳斯烧街的那一夜，是他替精灵开了后巷的门。恩特本的人到今天也不知道该怎么记他。"
    },
    {
     "if": "!flag.valeran_purist && flag.price_valeran",
     "text": "瓦勒兰替你去撕了那一页。阿瑟利斯家的族谱上，他那一行旁边多了一句小注，只有“守誓”两个字。"
    },
    {
     "if": "!flag.valeran_purist && !flag.price_valeran && !flag.order_founder",
     "text": "后来有人建了阿德蕾西娅骑士团，却没留下名字。恩特本的人都说那就是瓦勒兰。他听了只说这话不好听，就不再往下说了。"
    },
    {
     "if": "!flag.valeran_purist && !flag.price_valeran && flag.order_founder",
     "text": "瓦勒兰在你建的骑士团里当了二十年教头，从没撒过一句谎。新人最怕听他讲评，因为他句句是实话。"
    }
   ]
  },
  {
   "title": "故土",
   "text": [
    {
     "if": "origin == 'dameria'",
     "text": "马里昂活到九十六岁，晚年常讲婚宴上那把切肉刀的事。{?flag.p_knife_hanged:讲到绞架，他总会停下来喝口水。|讲到三个老兵后来回家种地，他总会笑。}"
    },
    {
     "if": "origin == 'lorent'",
     "text": "洛伦特的王座后面，拿主意的还是那位太后。{?flag.lance_told_truth:你说的那句“是他自己刺的，是失手”，太后一直记到了她死的那一年|}{?flag.lance_told_thrall:你说克雷格那一枪是中了慑心术，太后点点头。往后再也没提过他的名字|}{?!flag.lance_told_truth && !flag.lance_told_thrall:她问的那句话你始终没有回，她也始终没有再问|}。"
    },
    {
     "if": "origin == 'ebonmarck'",
     "text": "“黑卡斯塔诺人”这个词，{?flag.garrec_king:后来成了一支军团的番号。|后来成了骂人话，再后来又成了一个姓。}"
    },
    {
     "if": "origin == 'ibevar'",
     "text": "1084 年，伊贝瓦尔的亲王伊贝尼昂退了位。他那些行李{?flag.larthan_open && world.communion >= 6:打开了一大半，剩下的几只箱子他舍不得开|始终没有打开，箱子跟着他一起进了坟}。"
    },
    {
     "if": "origin == 'wex'",
     "text": "四百年后，在那些说“威克斯必须统治”的人家里，{?flag.guardian_barry:供的是一尊胖精灵的像。|供的是一位小公爵的像，像下面还压着一张发马的单子。}"
    }
   ]
  },
  {
   "if": "flag.f_sapphire || flag.f_rites || flag.f_staff",
   "title": "剑、冠、杖",
   "text": [
    {
     "if": "flag.f_sapphire && flag.pyre_stopped",
     "text": "圣武士在沼地烧人的那几年，骑士团公开否认行刑者是凯伦的门徒。达拉万之愚还立着你当年拦下的那根柱子。柱子始终空着。"
    },
    {
     "if": "flag.f_sapphire && !flag.pyre_stopped",
     "text": "圣武士在沼地里烧人的那几年，骑士团一直没说认不认他们。后来总算开口了，可已经晚了一代人。"
    },
    {
     "if": "flag.f_rites && flag.temple_guarded",
     "text": "阿德蕾西娅给认作了神的化身。奈拉特和阿德安两边的祭司坐在一张桌上吵了整整一天。最后还是一起签了字。"
    },
    {
     "if": "flag.f_rites && !flag.temple_guarded",
     "text": "阿德蕾西娅到底没能给认作神的化身。奈拉特和阿德安两边的祭司都说她是自己这一家的，会议怎么也定不下来。"
    },
    {
     "if": "flag.f_staff && world.writ >= 4",
     "text": "你那张令状有个抄本，1221 年有人把它带进了阿兰蒂尔的会场，只是抄本上你的名字拼错了一个字。"
    },
    {
     "if": "flag.f_staff && world.writ <= 3",
     "text": "你那张令状的抄本，没有人带进阿兰蒂尔的会场。它一直压在瓦洛森的一只箱子下面，箱子上面还放着腌菜。"
    }
   ]
  },
  {
   "if": "is.god",
   "title": "容后再议",
   "text": [
    "第七次泛神会议为你重开，议题是该不该承认你的神格。议了十一天，结论仍是以后再议。四十页会议记录提到你三百一十一次，每次用的称呼都不同。"
   ]
  },
  {
   "if": "is.god && var.god_acts >= 4",
   "title": "鼻子都不一样",
   "text": [
    "各国都为你立了像，雕出来的鼻子却没两尊一样。巴里出钱立在威克斯的那尊，手里还多拎着一篮食物。"
   ]
  },
  {
   "if": "is.god && flag.god_half_sentence",
   "title": "当着神的面",
   "text": [
    "在你跟前谁也撒不了谎。各国只好专门给你修个偏厅，再把议事地点挪到隔壁。“当着神的面说”从此成了一句俗话，指把话说得毫不留情。"
   ]
  },
  {
   "if": "is.god && flag.god_crusade",
   "title": "柱子上的字",
   "text": [
    "沼地烧人的那些年，每根柱子都刻着你的神号。骑士团花了两代人去凿，至今还能辨出几个字。"
   ]
  },
  {
   "if": "is.god && flag.god_herald",
   "title": "日轮旁边那颗小的",
   "text": [
    "布勒瓦尔的祭司在苏雷尔的日轮旁添了一颗小太阳，代表你。贾赫始终未归，倒从东方寄过一封信，问墙上那颗小的是谁。"
   ]
  },
  {
   "if": "is.god && flag.god_promise_viswall",
   "title": "请神吃饭",
   "text": [
    "小人国每遇到自己解决不了的事就请你回去。芬尼克的孙子称之为“请神吃饭”。四百年共请了十一回，每次端上来的都是派。"
   ]
  },
  {
   "if": "is.god && flag.golem_forever",
   "title": "跪着的石像",
   "text": [
    "第九道试炼的石像至今跪着，手托一颗头。北要塞的孩子们往头上摆过果子和帽子。有次竟放上去一只猫，那猫在上面睡了一下午。"
   ]
  },
  {
   "if": "is.god && flag.god_wed",
   "title": "神证的婚",
   "text": [
    "由神见证的婚事，后来谁也不敢解除。但凡婚后出了岔子，西洛瑞尔和西尔穆纳两家都说，当初是对方坚持请你来证婚的。"
   ]
  },
  {
   "if": "is.god && flag.price_names",
   "title": "一夜念完",
   "text": [
    "一夜之间，你念完了书里所有名字，也放出了所有亡魂。边境地三年无人敢走夜路。第四年，才有人试着在门口点起一盏灯。"
   ]
  },
  {
   "if": "is.god && flag.castan_pc && flag.castan_crowned && flag.castan_alive && flag.knot_cut",
   "title": "不会死的卡斯坦",
   "text": [
    "你成了试炼山上永生的卡斯坦。誓词原说“至我寿终之日”，这一天却永远不会到来。坎雷克想找到的那位皇帝，最后成了你。"
   ]
  },
  {
   "if": "is.immortal",
   "title": "欠一死",
   "text": [
    "奈拉特的收殓人给你立了一笔账，账上写“欠一死”。大墓地每换一位大祭司，都要来信问这笔债还在不在。你回了每一封信。"
   ]
  },
  {
   "if": "is.immortal && flag.price_pc",
   "title": "后脑勺",
   "text": [
    "魔典留下的白印始终没有褪色。逢着阴天，你就会听到远处有人抱怨后脑勺发痒。"
   ]
  },
  {
   "if": "is.immortal",
   "title": "两百年前的蜡印",
   "text": [
    "1221 年，阿兰蒂尔大峰会门口来了个拿旧蜡印的人。卫兵一问，蜡印已有两百年。书记官翻了半天，还是没能翻出那本登记册。"
   ]
  }
 ]
};
