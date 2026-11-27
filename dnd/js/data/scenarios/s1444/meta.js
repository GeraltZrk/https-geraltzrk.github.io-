// s1444 / meta.js：数据文件。正文按 docs/STYLE_GUIDE.md（第三版）修订过。
export const META = {
 "id": "s1444",
 "era": 1444,
 "title": "送神",
 "coin": "金冠",
 "startDate": "1444年奈拉月11日",
 "intro": [
  "灰元 1444 年奈拉月十一日，午后。下卡斯托纳斯的旧集市旁，人类英雄科琳和兽人大酋长杜坎森在同一场战斗中身亡。战事告终，两具遗体还留在原地。",
  "当晚，各营队长用两只酒桶架起一扇门板当桌子，争到半夜才定下一道军令：每营出一人，收殓这一仗里所有无人认领的死者，事毕为止。第一位要收的就是杜坎森。边区兵要把他悬首示众，他的儿子要接他回家，连死灵法师都来开过价了。",
  "五个人扶着同一辆板车。来之前，你属于哪个营？"
 ],
 "tracks": [
  {
   "key": "embers",
   "name": "兽人战火",
   "desc": "杜坎森留下的氏族仍在东坎诺。数值越高，他们越可能重新集结开战。",
   "start": 5,
   "min": 0,
   "max": 10,
   "labels": [
    "冷灰",
    "余温",
    "暗火",
    "复燃",
    "燎原"
   ]
  },
  {
   "key": "room",
   "name": "绿皮处境",
   "desc": "表示兽人和地精在东坎诺能否定居。数值越高，他们越容易在城里获得住处和承认。",
   "start": 2,
   "min": 0,
   "max": 10,
   "labels": [
    "见绿就杀",
    "墙根下面",
    "划地而居",
    "同街不同灶",
    "一口锅里吃饭"
   ]
  },
  {
   "key": "unburied",
   "name": "未葬遗骸",
   "desc": "表示有多少死者尚未安葬，或被死灵法术驱使。数值越高，收尸队面前要办的事越多。",
   "start": 3,
   "min": 0,
   "max": 10,
   "labels": [
    "入土为安",
    "坟多野少",
    "白骨露野",
    "白骨有价",
    "死人当差"
   ]
  },
  {
   "key": "peace",
   "name": "帝国和平",
   "desc": "表示九十五年紫丁香战争后的帝国和平还能维持多久。数值低，各方更接近重新开战。数值高，威克斯皇帝仍控制着局面。",
   "start": 6,
   "min": 0,
   "max": 10,
   "labels": [
    "第五场紫丁香战争",
    "各家磨刀",
    "面和心不和",
    "太平",
    "威克斯说了算"
   ]
  },
  {
   "key": "word",
   "name": "神王死讯",
   "desc": "表示有多少人听过神王已死的消息。数值越高，消息传得越广。",
   "start": 0,
   "min": 0,
   "max": 10,
   "labels": [
    "没人知道",
    "几个人知道",
    "神殿里在传",
    "街上在传",
    "天下皆知"
   ]
  },
  {
   "key": "scale",
   "name": "神位归属",
   "desc": "表示神位归属偏向谁。数值低，偏向神王长子阿德安。数值高，偏向战功卓著的科琳。",
   "start": 0,
   "min": -5,
   "max": 5,
   "labels": [
    "长子当立",
    "偏向阿德安",
    "悬而未决",
    "偏向科琳",
    "剑上天"
   ]
  }
 ],
 "reputations": [
  {
   "key": "corintar",
   "name": "科琳塔尔",
   "desc": "科琳留下的人。如今蓝牙带兵，多米尼克立教，愚足管着耳目。",
   "start": 0
  },
  {
   "key": "companies",
   "name": "冒险团",
   "desc": "东坎诺的十几支冒险团，再加上山下那些打着探险队旗号的矮人。他们欠着饷，记着仇，不过账还是认的。",
   "start": 0
  },
  {
   "key": "league",
   "name": "东坎诺旧贵族",
   "desc": "伯爵联盟、马尔霍德，还有卡斯托纳斯的那些世家。这里的房子原本都是他们的。",
   "start": 0
  },
  {
   "key": "clans",
   "name": "兽人氏族",
   "desc": "留在地面上没走的兽人和地精。有想种地的，也有想再打一次的。",
   "start": 0
  },
  {
   "key": "throne",
   "name": "帝国朝廷",
   "desc": "皇帝、巴兹伍德，还有替威克斯当耳目的那些人。",
   "start": 0
  },
  {
   "key": "moon",
   "name": "月党",
   "desc": "达梅里亚的旧部。有流亡在外的，有装聋作哑的，也有手里还握着枪杆的。",
   "start": 0
  },
  {
   "key": "temples",
   "name": "神殿",
   "desc": "人类各位神的祭司，再算上挂在魔导院名下的编年史家。",
   "start": 0
  }
 ],
 "origins": [
  {
   "id": "corintar",
   "name": "科琳的队伍",
   "region": "东坎诺 · 卡斯托纳斯",
   "flag": "B02",
   "nationName": "科琳塔尔",
   "blurb": "你跟着红发扈从科琳，从血腐阶梯一路打到卡斯托纳斯。今天她倒在你前方二十步的地方。上次她死去，三个时辰后又醒了过来，所以你们决定守着她。",
   "tags": [
    "信众",
    "本地人",
    "亲历者"
   ],
   "startScene": "p_corintar_01",
   "start": {
    "rep": {
     "corintar": 2,
     "clans": -1,
     "temples": 1
    },
    "world": {},
    "flags": [],
    "items": {
     "shield_strap": 1
    },
    "gold": 15
   }
  },
  {
   "id": "sons",
   "name": "达梅里亚之子",
   "region": "东坎诺 · 卡斯托纳斯",
   "flag": "B07",
   "nationName": "达梅里亚之子",
   "blurb": "紫丁香战争里，达梅里亚一方输了。大公死在皇宫，少主罗吉尔躺进棺材装死，才逃出帝国。你们如今在东坎诺替别人收复失地，身后还挂着皇帝发的通缉令。",
   "tags": [
    "流亡者",
    "月党",
    "败军"
   ],
   "startScene": "p_sons_01",
   "start": {
    "rep": {
     "moon": 2,
     "throne": -2,
     "companies": 1
    },
    "world": {},
    "flags": [],
    "items": {
     "moon_badge": 1
    },
    "gold": 10
   }
  },
  {
   "id": "wex",
   "name": "皇帝的差事",
   "region": "东坎诺 · 卡斯托纳斯",
   "flag": "A30",
   "nationName": "威克斯",
   "blurb": "你效力于紫丁香战争的赢家威克斯皇帝。替他管密探的巴兹伍德交给你一封信，命你私下清点卡斯托纳斯的城门，查清每一道门掌握在谁手里。清点完之后怎么办，信上没有写。",
   "tags": [
    "帝国",
    "密探",
    "胜者"
   ],
   "startScene": "p_wex_01",
   "start": {
    "rep": {
     "throne": 2,
     "moon": -2,
     "league": 1
    },
    "world": {},
    "flags": [],
    "items": {
     "bardswood_letter": 1
    },
    "gold": 30
   }
  },
  {
   "id": "grudge",
   "name": "负怨者兵团",
   "region": "东坎诺 · 卡斯托纳斯",
   "flag": "H97",
   "nationName": "负怨者兵团",
   "blurb": "负怨者兵团替矮人追讨世仇，按件收费。你受派查验杜坎森的遗体。只有亲眼确认他死了，玛瑙之门那笔血债才销得掉。",
   "tags": [
    "矮人",
    "债主",
    "外人"
   ],
   "startScene": "p_grudge_01",
   "start": {
    "rep": {
     "companies": 2,
     "clans": -2
    },
    "world": {},
    "flags": [],
    "items": {
     "grudge_page": 1
    },
    "gold": 25
   }
  },
  {
   "id": "tide",
   "name": "退潮的人",
   "region": "东坎诺 · 卡斯托纳斯",
   "flag": "B01",
   "nationName": "绿潮",
   "blurb": "过去二十年，你或随绿潮打仗，或被掳去做工。撤退号响时你没能出城。如今你困在人类阵地，手背的绿色印记让人一眼便认出你的来历。",
   "tags": [
    "兽人",
    "败军",
    "非人"
   ],
   "startScene": "p_tide_01",
   "start": {
    "rep": {
     "clans": 2,
     "companies": -2,
     "corintar": -1
    },
    "world": {},
    "flags": [],
    "items": {
     "chain_link": 1
    },
    "gold": 0
   }
  }
 ],
 "factions": [
  {
   "id": "heirs",
   "name": "承嗣派",
   "motto": "名分定了，刀才收得回去。",
   "blurb": "血统、遗嘱、长子继承，都可以。你主张事先讲明谁来继位，免得上一任一死，众人就拔剑争位。",
   "tags": [
    "谱系",
    "名分"
   ],
   "origins": [
    "sons",
    "wex",
    "grudge",
    "tide"
   ],
   "start": {
    "rep": {
     "league": 1,
     "temples": 1
    },
    "world": {
     "scale": -1
    },
    "flags": []
   }
  },
  {
   "id": "tried",
   "name": "试炼派",
   "motto": "谁扛得动，谁来扛。",
   "blurb": "科琳曾是扈从，杜坎森连氏族都没有。你相信继承人得凭本领赢得位置，做不好也该退位。兽人称它为夺斗，卡斯塔诺人称它为试炼。",
   "tags": [
    "功劳",
    "比试"
   ],
   "start": {
    "rep": {
     "corintar": 1,
     "companies": 1
    },
    "world": {
     "scale": 1
    },
    "flags": []
   }
  },
  {
   "id": "crownless",
   "name": "无冕派",
   "motto": "椅子空着，天也没塌。",
   "blurb": "过去二十年，东坎诺的幸存者没有国王，也能开会、订约、安葬死者。你愿意让王位继续空着，大家有事坐下来商量。",
   "tags": [
    "立约",
    "砸链子"
   ],
   "origins": [
    "corintar",
    "sons",
    "grudge",
    "tide"
   ],
   "start": {
    "rep": {
     "clans": 1,
     "companies": 1
    },
    "world": {
     "room": 1
    },
    "flags": []
   }
  }
 ],
 "premades": [
  {
   "id": "gicela",
   "name": "东墙的吉塞拉",
   "gender": "f",
   "race": "human",
   "subrace": "escanni",
   "cls": "fighter",
   "background": "soldier",
   "abil": {
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 8,
    "wis": 13,
    "cha": 10
   },
   "profs": [
    "perception",
    "survival"
   ],
   "portrait": "gen_human_knight_f",
   "blurb": "科琳故乡遭焚时，吉塞拉也在那个村子里。那年她才四岁。",
   "bio": "1424 年东墙起火，有人把她塞进了一辆往西去的粪车。她是在阿巴兰的难民营里长大的，在那里学会了排队，也学会了抢饭。去年她跟着援军打了回来，路过自家的地，没认出来。",
   "tags": [
    "简单上手"
   ],
   "origins": [
    "corintar"
   ]
  },
  {
   "id": "aucan",
   "name": "奥坎·西尔·维尔西尔",
   "gender": "m",
   "race": "human",
   "subrace": "escanni",
   "cls": "bard",
   "background": "noble",
   "abil": {
    "str": 9,
    "dex": 15,
    "con": 13,
    "int": 10,
    "wis": 13,
    "cha": 15
   },
   "profs": [
    "performance",
    "insight",
    "perception"
   ],
   "portrait": "gen_human_rogue_m",
   "blurb": "在科琳身边，奥坎是最不引人注意的那一个。有人当着他的面，都能把他的名字叫错。",
   "bio": "他是法拉内安的贵族子弟，样样都会一点，哪样都不出挑。家没了以后，他带着一营难民在维尔西尔的瓦砾堆里过日子。后来给科琳当过联络人、斥候和伙夫。他写的诗倒比他这个人有名。",
   "tags": [
    "正史人物"
   ],
   "origins": [
    "corintar"
   ]
  },
  {
   "id": "ademar",
   "name": "阿德玛·西纳·丹瓦尔",
   "gender": "m",
   "race": "human",
   "subrace": "damerian",
   "cls": "cleric",
   "background": "squire",
   "abil": {
    "str": 13,
    "dex": 11,
    "con": 14,
    "int": 9,
    "wis": 15,
    "cha": 13
   },
   "profs": [
    "religion",
    "medicine"
   ],
   "portrait": "gen_human_knight_m",
   "blurb": "阿德玛是侍奉阿德安的随军祭司。有一次棺内没有遗体，他仍照规矩做完了整场葬礼。",
   "bio": "1443 年少主罗吉尔要装死逃出帝国，棺材总得有个祭司来送。他一路念着悼词走过了阿巴兰，后面还跟着威克斯的兵。躺在棺材里的那位后来活得好好的，那场葬礼到底算不算数，他到现在也没想好。",
   "tags": [
    "治疗"
   ],
   "origins": [
    "sons"
   ]
  },
  {
   "id": "cella",
   "name": "瑟拉·塔克斯威克",
   "gender": "f",
   "race": "half_elf",
   "cls": "sorcerer",
   "background": "apprentice",
   "abil": {
    "str": 8,
    "dex": 14,
    "con": 14,
    "int": 12,
    "wis": 10,
    "cha": 17
   },
   "profs": [
    "deception",
    "persuasion"
   ],
   "portrait": "sun_elf_court_mage_f",
   "blurb": "瑟拉还没从西尔穆纳学院毕业。手里的魔杖是赊的，那枚戒指倒是刚从当铺赎回来的。",
   "bio": "她父亲是个精灵，从来没露过面，只留给她一身不用学就会的法术。魔杖和戒指是学院教她使的。城破那年学院停了课，欠她的津贴到现在也没发。她跟着达梅里亚之子，为的就是讨回这笔钱。",
   "tags": [
    "施法"
   ],
   "origins": [
    "sons"
   ]
  },
  {
   "id": "carsten",
   "name": "哈德威克的卡斯滕",
   "gender": "m",
   "race": "human",
   "subrace": "alenic",
   "cls": "fighter",
   "background": "soldier",
   "abil": {
    "str": 16,
    "dex": 12,
    "con": 15,
    "int": 8,
    "wis": 14,
    "cha": 10
   },
   "profs": [
    "perception",
    "insight"
   ],
   "portrait": "gen_human_knight_m",
   "blurb": "三卫出身的威克斯大剑手。去年进攻皇宫那一夜，他排在队尾。要是谁问起，他一律答“什么也没看见”。",
   "bio": "1443 年攻打皇宫，他没轮上进王座厅，事后却被叫到花园里挖了一整夜的坑。上面交代他：你什么也没看见。这句话他照着说了一年，说得连自己都快信了。",
   "tags": [
    "简单上手"
   ],
   "origins": [
    "wex"
   ]
  },
  {
   "id": "rosamond",
   "name": "林伍德的罗莎蒙德",
   "gender": "f",
   "race": "human",
   "subrace": "alenic",
   "cls": "rogue",
   "background": "scribe",
   "abil": {
    "str": 9,
    "dex": 15,
    "con": 11,
    "int": 14,
    "wis": 13,
    "cha": 13
   },
   "profs": [
    "deception",
    "persuasion",
    "sleight",
    "perception"
   ],
   "portrait": "gen_human_rogue_f",
   "blurb": "紫庭派来的公证人，负责清点战利品。必要的时候，连人也在清点之列。",
   "bio": "她的本行，是别人分赃的时候坐在旁边记数，记完了让各方按手印。巴兹伍德看中了她两样，一是字写得小，二是嘴闭得紧。她看中这趟差事的只有一样，津贴是按天算的。",
   "tags": [
    "交涉"
   ],
   "origins": [
    "wex"
   ]
  },
  {
   "id": "thora",
   "name": "索拉·石账",
   "gender": "f",
   "race": "dwarf",
   "subrace": "ruby_dwarf",
   "cls": "cleric",
   "background": "acolyte",
   "abil": {
    "str": 13,
    "dex": 8,
    "con": 16,
    "int": 10,
    "wis": 15,
    "cha": 13
   },
   "profs": [
    "history",
    "medicine"
   ],
   "portrait": "dwarven_theologian_f",
   "blurb": "索拉是负怨者兵团的祭司，管账，也当真喜欢这些账。吃饭时她也要把账本摊开，每顿念一页。",
   "bio": "她供奉的是祖先，而祖先留下来的东西里面，就数账最多。兵团的账本归她背着，足有四十斤重，外面包着油布。她亲手划掉的账只有三笔，每划掉一笔，她就给欠债那家的后人写一封信，告诉他们两清了。",
   "tags": [
    "治疗"
   ],
   "origins": [
    "grudge"
   ]
  },
  {
   "id": "pip",
   "name": "皮普·枝下",
   "gender": "m",
   "race": "halfling",
   "cls": "rogue",
   "background": "criminal",
   "abil": {
    "str": 8,
    "dex": 17,
    "con": 12,
    "int": 10,
    "wis": 13,
    "cha": 15
   },
   "profs": [
    "sleight",
    "acrobatics",
    "perception",
    "investigation"
   ],
   "portrait": "gnome_spymaster",
   "blurb": "皮普是汤姆斯桥来的半身人。有人问起他的职业，他就请人看合同。上面写着“开锁的”。",
   "bio": "地精挖的洞矮人钻不进去，兵团就照老规矩雇了个半身人。他家三代人都接这种活，传下来一套撬棍和一句话：先问清楚谁背你出来。干粮是他自己带的，带了很多。",
   "tags": [
    "潜行"
   ],
   "origins": [
    "grudge"
   ]
  },
  {
   "id": "krug",
   "name": "克鲁格·半吼",
   "gender": "m",
   "race": "orc",
   "subrace": "green_orc",
   "cls": "barbarian",
   "background": "hunter",
   "abil": {
    "str": 17,
    "dex": 13,
    "con": 15,
    "int": 8,
    "wis": 12,
    "cha": 10
   },
   "profs": [
    "athletics",
    "intimidation"
   ],
   "portrait": "green_orc_grand_captain",
   "blurb": "克鲁格是嗜血者氏族的狂战士。今天他吼到半截突然清醒，才发现撤退的族人已经走出了一整条街。",
   "bio": "他十六岁那年独自猎了一头野猪，喝了血，从那以后一上阵就什么都不记得。今天午后也是这样。等他醒过来，斧子卡在一扇门上，满街说的全是人类的话。他的酋长死在三条街外。",
   "tags": [
    "简单上手"
   ],
   "origins": [
    "tide"
   ]
  },
  {
   "id": "snik",
   "name": "斯尼克·门把手",
   "gender": "m",
   "race": "goblin",
   "cls": "wizard",
   "background": "merchant",
   "abil": {
    "str": 8,
    "dex": 16,
    "con": 13,
    "int": 16,
    "wis": 12,
    "cha": 10
   },
   "profs": [
    "arcana",
    "history"
   ],
   "portrait": "exodus_goblin_court_mage",
   "blurb": "斯尼克曾给书贩跑腿。这个洞穴地精认得的通用语文字，比多数骑士都多。",
   "bio": "兽人抢来的书没人要，地精书贩子就论斤收。他替东家跑了八年腿，一路上把货翻了个遍，照着一本缺页的课本学会了三样小法术。今天奴工的链子断了。他第一件事就是回去找那本书。",
   "tags": [
    "施法"
   ],
   "origins": [
    "tide"
   ]
  }
 ],
 "races": [
  "human",
  "elf",
  "half_elf",
  "dwarf",
  "halfling",
  "gnome",
  "half_orc",
  "orc",
  "goblin",
  "kobold",
  "gnoll",
  "ogre"
 ],
 "companions": {
  "ushka": {
   "id": "ushka",
   "name": "乌什卡",
   "gender": "f",
   "race": "orc",
   "subrace": "green_orc",
   "cls": "fighter",
   "subclass": "fighter_company",
   "abil": {
    "str": 17,
    "dex": 13,
    "con": 15,
    "int": 8,
    "wis": 12,
    "cha": 10
   },
   "profs": [
    "athletics",
    "survival",
    "medicine"
   ],
   "equip": {
    "weapon": "blade_and_hammer",
    "armor": "chain_shirt",
    "offhand": null,
    "trinket": null
   },
   "portrait": "green_orc_commandant_f",
   "blurb": "烂刀氏族派年轻兽人外出巡游。乌什卡是自愿来的，要替杜坎森举行兽人的葬礼归尘礼。你若问她骨头该如何处理，她会像木匠谈起木料一样认真回答。"
  },
  "tan": {
   "id": "tan",
   "name": "阿坦",
   "gender": "m",
   "race": "human",
   "subrace": "escanni",
   "cls": "cleric",
   "subclass": "cleric_regent",
   "abil": {
    "str": 14,
    "dex": 11,
    "con": 14,
    "int": 8,
    "wis": 16,
    "cha": 12
   },
   "profs": [
    "religion",
    "history"
   ],
   "equip": {
    "weapon": "procession_head",
    "armor": "chain_shirt",
    "offhand": "shield",
    "trinket": null
   },
   "portrait": "gen_human_mage_m",
   "blurb": "阿坦十六岁，守着万神道上一座屋顶已经塌掉的神王庙。晨祷本有四十一句，他每天到第四十句就停下来。"
  },
  "nixee": {
   "id": "nixee",
   "name": "妮克西",
   "gender": "f",
   "race": "goblin",
   "cls": "warlock",
   "subclass": "warlock_archfey",
   "abil": {
    "str": 8,
    "dex": 15,
    "con": 14,
    "int": 11,
    "wis": 12,
    "cha": 15
   },
   "profs": [
    "deception",
    "persuasion",
    "nature"
   ],
   "equip": {
    "weapon": "dagger",
    "armor": "leather",
    "offhand": null,
    "trinket": null
   },
   "portrait": "exodus_goblin_trader_f",
   "blurb": "妮克西是地鹰氏族的地精，黄眼睛，替愚者亲王办事。在她看来，每件事都有价钱，也都有相应的规矩。若有疑问，她能给你报出条数。"
  },
  "garaele": {
   "id": "garaele",
   "name": "加莱尔·守昔者",
   "gender": "f",
   "race": "elf",
   "subrace": "moon_elf",
   "cls": "cleric",
   "subclass": "cleric_regent",
   "abil": {
    "str": 13,
    "dex": 12,
    "con": 14,
    "int": 9,
    "wis": 15,
    "cha": 12
   },
   "profs": [
    "history",
    "religion",
    "insight"
   ],
   "equip": {
    "weapon": "mace",
    "armor": "chain_shirt",
    "offhand": "shield",
    "trinket": null
   },
   "portrait": "sun_elf_natural_scientist_f",
   "blurb": "加莱尔是编年史家，四十三岁在精灵中还很年轻。她遇事不慌，偏爱在旁人最不想被打扰的时候，问出最要紧的那个问题。"
  },
  "belgrak": {
   "id": "belgrak",
   "name": "贝尔格拉克·穴居者",
   "gender": "m",
   "race": "dwarf",
   "subrace": "ruby_dwarf",
   "cls": "fighter",
   "subclass": "fighter_company",
   "abil": {
    "str": 15,
    "dex": 13,
    "con": 16,
    "int": 8,
    "wis": 12,
    "cha": 11
   },
   "profs": [
    "athletics",
    "history",
    "intimidation"
   ],
   "equip": {
    "weapon": "warhammer",
    "armor": "chain_mail",
    "offhand": "shield",
    "trinket": null
   },
   "portrait": "dwarven_commandant",
   "blurb": "科琳的老伙伴，一位红宝石矮人。听贝尔格拉克说一件往事，总是先听到数目，再听到发生了什么，最后才是年份。"
  }
 },
 "quests": {
  "q_cart": {
   "title": "收尸队的军令",
   "desc": "军令要求各营各出一人，收殓此役中无人认领的死者，直到差事办完。",
   "stages": [
    "把杜坎森的遗体运出城，决定如何安置。",
    "有人进山后逾期未归，去寻找他们。",
    "查清帝国花圃下埋的是谁，带回遗体。",
    "等待妖精回信，再去寻找最后一位死者。",
    "带队回到卡斯托纳斯。"
   ],
   "doneText": "没人来宣布军令已经完成。你们只能自己决定，什么时候可以停下。"
  },
  "q_dragon": {
   "title": "消失的银龙",
   "desc": "阿坦托你们出城时打听，这二十年里，银龙为何始终没有来救卡斯塔诺。",
   "stages": [
    "出城后向沿路的人打听银龙的消息。",
    "查证“神王在生卡斯塔诺的气”的传言。",
    "记下井壁上刻着的名字。",
    "精灵的卡斯特拉尔就是人类的卡斯特洛斯，去找他的神殿。",
    "亲眼看看神殿墙上留下的记录。"
   ],
   "doneText": "阿坦已经知道银龙的去向。明早的祷词念多少句，留给他自己决定。"
  },
  "q_korgus": {
   "title": "杜坎森的遗体",
   "desc": "杜坎森躺在板车上。四家都愿意出价，却没一家打算给他安葬。",
   "stages": [
    "天亮前将板车推出城。",
    "守住板车，有人在路上打它的主意。",
    "决定把杜坎森交给谁，或安葬在哪里。"
   ],
   "doneText": "杜坎森的遗体已有去处。名册上是写下他的名字，还是留一格空白，由你们决定。"
  },
  "q_sightings": {
   "title": "三起银龙目击",
   "desc": "加莱尔按编年史家的赏格付钱，请你们查证三次银龙现身的传闻。",
   "stages": [
    "到渔村查验所谓的“龙皮”。",
    "到蓝宝石望，找那位一直仰头看的老妇人。",
    "登上焦塔，查明银光来自哪里。"
   ],
   "doneText": "三次都没找到真龙。加莱尔还是把赏金如数付了。"
  },
  "q_compact": {
   "title": "卡斯托纳斯由谁治理",
   "desc": "各冒险团即将撤走。几位代表围着门板搭的桌子，还没谈妥由谁治理这座城。",
   "stages": [
    "趁各冒险团还在，决定如何处置卡斯托纳斯的管辖权。"
   ],
   "doneText": "各冒险团已经离席。这座城接下来怎么办，要看他们出门前谈成了多少。"
  },
  "q_debt": {
   "title": "地鹰的地契",
   "desc": "科琳答应给地鹰氏族一块可以安居的土地。她已经死了，氏族的人还在等。",
   "stages": [
    "找一位肯承认科琳承诺的人。",
    "取得盖印的地契。",
    "守住康原。"
   ],
   "doneText": "妮克西把欠条撕成两半，递了一半给你。这笔账终于清了。"
  },
  "q_ushka": {
   "title": "骑士的第十二条规矩",
   "desc": "乌什卡把骑士应守的十一条规矩，刻在随身的木签上。",
   "stages": [
    "请乌什卡讲讲木签上的十一条规矩。",
    "五年后，再看看她在山里新刻的内容。",
    "教她按帝国手续先递文书，再申辩。"
   ],
   "doneText": "第十二条由她自己拟定。乌什卡犹豫了许久，还是递给了你。"
  },
  "q_parents": {
   "title": "逾期未归的探险队",
   "desc": "加莱尔的父母随阿斯拉探险队进山，约定的归期已经过了。",
   "stages": [
    "向探险队打听他们进山的路线。",
    "到交轨大厅寻找线索。",
    "前往泵房。"
   ],
   "doneText": "你找到了守昔者夫妇。清点回来的人时，数目也终于对上了。"
  },
  "q_list": {
   "title": "兵团的三百一十二笔旧账",
   "desc": "贝尔格拉克的名单从议会之门记起。第一笔已是灰前五千八百八十八年的往事。",
   "stages": [
    "照着名单找人，设法把人带回来。"
   ],
   "doneText": "这趟进山，到此结束。划账也好，背人也好，你记得自己最后做的是哪一件事。"
  },
  "q_duke": {
   "title": "郁金香下的大公",
   "desc": "德利安写信说，皇宫花圃下面埋着几个人，他知道埋在哪里。",
   "stages": [
    "到阿德蕾西娅堡会见德利安。",
    "庆典前夜去花圃第七畦。",
    "决定将证据交给谁，以及大公的安葬地点。"
   ],
   "doneText": "花圃里的旧事，德利安终于有了交代。"
  },
  "q_door": {
   "title": "妖精的回信",
   "desc": "妮克西说她的东家守着一扇门。想让他开门，得拿金币以外的东西交换。",
   "stages": [
    "等妮克西东家回信。",
    "九个冬天后，去敲那扇门。"
   ],
   "doneText": "你们穿门而过。回身望去，已经找不到进来的路。"
  },
  "q_wall": {
   "title": "诸神之王的神殿",
   "desc": "精灵航海志记下了天空之神的神殿。海路已经断了，仍可穿过林子去找。",
   "stages": [
    "穿过树林。",
    "沿塞拉河向上游走。",
    "查看神殿壁画。",
    "选好要带回去的东西。"
   ],
   "doneText": "你们走出神殿。外面已是 1472 年。"
  },
  "q_southgate": {
   "title": "再守卡斯托纳斯",
   "desc": "熊心带着氏族，已到卡斯托纳斯白墙以南。",
   "stages": [
    "熊心预计六日抵达南门，在那之前做好准备。",
    "守住南门。",
    "十一日，到约定的空地去。"
   ],
   "doneText": "这一仗已经结束。这次，阵亡的人都有同伴来收殓。"
  },
  "q_o_corintar": {
   "title": "科琳的盾带",
   "desc": "抬起科琳的遗体时，她盾上的一截皮带绷断了。",
   "stages": [
    "决定是否交还盾带。",
    "应泛神会议之请，出面作证。",
    "到壁画前想清楚，科琳升入的是谁的天界。"
   ],
   "doneText": "那截盾带已有归处。它能证明什么，你也已经作了选择。"
  },
  "q_o_sons": {
   "title": "军士长的遗愿",
   "desc": "军士长想葬在月神之耳，特意嘱咐要选一个看得见月亮的晚上。",
   "stages": [
    "带好包里的骨灰。",
    "少主来信，请你阻止旁人利用父亲的遗骨号召旧部。"
   ],
   "doneText": "骨灰最后去了哪里，你心里清楚。军士长那封写着遗愿的嘱托，也可以收起来了。"
  },
  "q_o_wex": {
   "title": "清点城门",
   "desc": "巴兹伍德先生要你清点卡斯托纳斯的城门，记清每座门由谁控制。",
   "stages": [
    "将城门数目和守军情况写信报告巴兹伍德。",
    "回去当面述职。"
   ],
   "doneText": "你终于知道，最后一封报告该交到谁手里。"
  },
  "q_o_grudge": {
   "title": "玛瑙之门的旧账",
   "desc": "账上欠债的是杜坎森。兵团要求先确认死者身份，再谈勾销。",
   "stages": [
    "查验杜坎森的遗体。",
    "把查验结果带回去，决定这笔账能否勾销。",
    "参加兵团发起的远征。"
   ],
   "doneText": "查验和远征都已结束，兵团合上了账本。"
  },
  "q_o_tide": {
   "title": "氏族的三条路",
   "desc": "古拉德想留下种地，阿罗莎愿意追随科琳，古尔赞则要再打一场。",
   "stages": [
    "先设法活过今晚。",
    "按你在火边作的决定，跟下去看。"
   ],
   "doneText": "从那一夜的营火走到今天，你已经看见这条路通向哪里。"
  }
 },
 "chapters": [
  {
   "title": "序章 · 科琳的队伍",
   "note": "1 级，一个人。科琳刚倒下。",
   "scene": "p_corintar_01",
   "if": "origin == 'corintar'"
  },
  {
   "title": "序章 · 达梅里亚之子",
   "note": "1 级，一个人。北城一条世家的街。",
   "scene": "p_sons_01",
   "if": "origin == 'sons'"
  },
  {
   "title": "序章 · 皇帝的差事",
   "note": "1 级，一个人。峭壁区的屋顶。",
   "scene": "p_wex_01",
   "if": "origin == 'wex'"
  },
  {
   "title": "序章 · 负怨者兵团",
   "note": "1 级，一个人。南城，一路估价。",
   "scene": "p_grudge_01",
   "if": "origin == 'grudge'"
  },
  {
   "title": "序章 · 退潮的人",
   "note": "1 级，一个人。手背不再变色。",
   "scene": "p_tide_01",
   "if": "origin == 'tide'"
  },
  {
   "title": "第一幕 · 没人肯埋的兽人",
   "note": "2 级，乌什卡在队。序章里对那个快死的人说了实话。",
   "scene": "a1_01",
   "effects": [
    "level 2",
    "companion +ushka",
    "flag p_truth",
    "quest q_cart start",
    "quest q_dragon start",
    "codex greentide",
    "codex corin",
    "codex agrados",
    "codex standing_order",
    "codex truce_table",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar start"
     ]
    },
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons start",
      {
       "if": "item.sergeant_urn < 1",
       "then": [
        "item +sergeant_urn"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex start"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge start",
      "flag body_verified"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "quest q_o_tide start"
     ]
    }
   ]
  },
  {
   "title": "第二幕 · 再没人见过的矮人",
   "note": "4 级，乌什卡、阿坦、妮克西在队。尸首沉了湖，城没人管。",
   "scene": "a2_01",
   "effects": [
    "level 2",
    "companion +ushka",
    "flag p_truth",
    "quest q_cart start",
    "quest q_dragon start",
    "codex greentide",
    "codex corin",
    "codex agrados",
    "codex standing_order",
    "codex truce_table",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar start"
     ]
    },
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons start",
      {
       "if": "item.sergeant_urn < 1",
       "then": [
        "item +sergeant_urn"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex start"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge start",
      "flag body_verified"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "quest q_o_tide start"
     ]
    },
    "level 4",
    "companion +tan",
    "companion +nixee",
    "flag goblins_hidden",
    "flag korgus_lake",
    "flag roll_seen",
    "flag spirits_heard",
    "flag testimony_host",
    "flag compact_none",
    "quest q_korgus start",
    "quest q_korgus done",
    "quest q_sightings start",
    "quest q_sightings done",
    "quest q_compact start",
    "quest q_compact done",
    "quest q_debt start",
    "quest q_ushka start",
    "quest q_cart stage 2",
    "quest q_dragon stage 2",
    "codex castonath",
    "codex korgus",
    "codex khak_bazi",
    "codex castellos",
    "codex dawn_office",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar stage 2"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 2"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "flag road_ghurad",
      "quest q_o_tide stage 2"
     ]
    }
   ]
  },
  {
   "title": "第三幕 · 郁金香下面的大公",
   "note": "6 级，加莱尔入队。贝尔格拉克再没人见过。",
   "scene": "a3_01",
   "effects": [
    "level 2",
    "companion +ushka",
    "flag p_truth",
    "quest q_cart start",
    "quest q_dragon start",
    "codex greentide",
    "codex corin",
    "codex agrados",
    "codex standing_order",
    "codex truce_table",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar start"
     ]
    },
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons start",
      {
       "if": "item.sergeant_urn < 1",
       "then": [
        "item +sergeant_urn"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex start"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge start",
      "flag body_verified"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "quest q_o_tide start"
     ]
    },
    "level 4",
    "companion +tan",
    "companion +nixee",
    "flag goblins_hidden",
    "flag korgus_lake",
    "flag roll_seen",
    "flag spirits_heard",
    "flag testimony_host",
    "flag compact_none",
    "quest q_korgus start",
    "quest q_korgus done",
    "quest q_sightings start",
    "quest q_sightings done",
    "quest q_compact start",
    "quest q_compact done",
    "quest q_debt start",
    "quest q_ushka start",
    "quest q_cart stage 2",
    "quest q_dragon stage 2",
    "codex castonath",
    "codex korgus",
    "codex khak_bazi",
    "codex castellos",
    "codex dawn_office",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar stage 2"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 2"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "flag road_ghurad",
      "quest q_o_tide stage 2"
     ]
    },
    "level 6",
    "companion +garaele",
    "flag parents_buried_deep",
    "flag castellar_seen",
    "flag dookanil_known",
    "flag belgrak_lost",
    "flag notebook_kept",
    "quest q_parents start",
    "quest q_parents done",
    "quest q_list start",
    "quest q_list fail",
    "quest q_cart stage 3",
    "quest q_dragon stage 3",
    "quest q_ushka stage 2",
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 3"
     ]
    }
   ]
  },
  {
   "title": "第四幕 · 诸神之王",
   "note": "8 级，九年过去了。证据没动，皇后死了，大公埋在月神之耳。",
   "scene": "a4_01",
   "effects": [
    "level 2",
    "companion +ushka",
    "flag p_truth",
    "quest q_cart start",
    "quest q_dragon start",
    "codex greentide",
    "codex corin",
    "codex agrados",
    "codex standing_order",
    "codex truce_table",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar start"
     ]
    },
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons start",
      {
       "if": "item.sergeant_urn < 1",
       "then": [
        "item +sergeant_urn"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex start"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge start",
      "flag body_verified"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "quest q_o_tide start"
     ]
    },
    "level 4",
    "companion +tan",
    "companion +nixee",
    "flag goblins_hidden",
    "flag korgus_lake",
    "flag roll_seen",
    "flag spirits_heard",
    "flag testimony_host",
    "flag compact_none",
    "quest q_korgus start",
    "quest q_korgus done",
    "quest q_sightings start",
    "quest q_sightings done",
    "quest q_compact start",
    "quest q_compact done",
    "quest q_debt start",
    "quest q_ushka start",
    "quest q_cart stage 2",
    "quest q_dragon stage 2",
    "codex castonath",
    "codex korgus",
    "codex khak_bazi",
    "codex castellos",
    "codex dawn_office",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar stage 2"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 2"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "flag road_ghurad",
      "quest q_o_tide stage 2"
     ]
    },
    "level 6",
    "companion +garaele",
    "flag parents_buried_deep",
    "flag castellar_seen",
    "flag dookanil_known",
    "flag belgrak_lost",
    "flag notebook_kept",
    "quest q_parents start",
    "quest q_parents done",
    "quest q_list start",
    "quest q_list fail",
    "quest q_cart stage 3",
    "quest q_dragon stage 3",
    "quest q_ushka stage 2",
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 3"
     ]
    },
    "level 8",
    "flag log_read",
    "flag bearing_known",
    "flag wound_seen",
    "flag proof_kept",
    "flag tilda_true",
    "flag adenn_damesear",
    "flag door_letter_sent",
    "world peace -1",
    "quest q_duke start",
    "quest q_duke done",
    "quest q_door start",
    "quest q_cart stage 4",
    "quest q_dragon stage 4",
    "quest q_ushka stage 3",
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons stage 2"
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex stage 2"
     ]
    }
   ]
  },
  {
   "title": "终章 · 卡斯托纳斯，又一次",
   "note": "10 级。出林的时候外面是 1472 年。门砌上了，杖放回了神龛。",
   "scene": "f_01",
   "effects": [
    "level 2",
    "companion +ushka",
    "flag p_truth",
    "quest q_cart start",
    "quest q_dragon start",
    "codex greentide",
    "codex corin",
    "codex agrados",
    "codex standing_order",
    "codex truce_table",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar start"
     ]
    },
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons start",
      {
       "if": "item.sergeant_urn < 1",
       "then": [
        "item +sergeant_urn"
       ]
      }
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex start"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge start",
      "flag body_verified"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "quest q_o_tide start"
     ]
    },
    "level 4",
    "companion +tan",
    "companion +nixee",
    "flag goblins_hidden",
    "flag korgus_lake",
    "flag roll_seen",
    "flag spirits_heard",
    "flag testimony_host",
    "flag compact_none",
    "quest q_korgus start",
    "quest q_korgus done",
    "quest q_sightings start",
    "quest q_sightings done",
    "quest q_compact start",
    "quest q_compact done",
    "quest q_debt start",
    "quest q_ushka start",
    "quest q_cart stage 2",
    "quest q_dragon stage 2",
    "codex castonath",
    "codex korgus",
    "codex khak_bazi",
    "codex castellos",
    "codex dawn_office",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar stage 2"
     ]
    },
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 2"
     ]
    },
    {
     "if": "origin == 'tide'",
     "then": [
      "flag road_ghurad",
      "quest q_o_tide stage 2"
     ]
    },
    "level 6",
    "companion +garaele",
    "flag parents_buried_deep",
    "flag castellar_seen",
    "flag dookanil_known",
    "flag belgrak_lost",
    "flag notebook_kept",
    "quest q_parents start",
    "quest q_parents done",
    "quest q_list start",
    "quest q_list fail",
    "quest q_cart stage 3",
    "quest q_dragon stage 3",
    "quest q_ushka stage 2",
    {
     "if": "origin == 'grudge'",
     "then": [
      "quest q_o_grudge stage 3"
     ]
    },
    "level 8",
    "flag log_read",
    "flag bearing_known",
    "flag wound_seen",
    "flag proof_kept",
    "flag tilda_true",
    "flag adenn_damesear",
    "flag door_letter_sent",
    "world peace -1",
    "quest q_duke start",
    "quest q_duke done",
    "quest q_door start",
    "quest q_cart stage 4",
    "quest q_dragon stage 4",
    "quest q_ushka stage 3",
    {
     "if": "origin == 'sons'",
     "then": [
      "quest q_o_sons stage 2"
     ]
    },
    {
     "if": "origin == 'wex'",
     "then": [
      "quest q_o_wex stage 2"
     ]
    },
    "level 10",
    "flag toll_years",
    "flag contract_staff",
    "flag staff_seen",
    "flag war_of_two_seen",
    "flag tan_read_it",
    "flag rite_done",
    "flag wall_sealed",
    "flag staff_returned",
    "var rites =3",
    "quest q_door stage 2",
    "quest q_door done",
    "quest q_ushka done",
    "quest q_wall start",
    "quest q_wall done",
    "quest q_cart stage 5",
    "quest q_dragon stage 5",
    {
     "if": "origin == 'corintar'",
     "then": [
      "quest q_o_corintar stage 3"
     ]
    }
   ]
  }
 ],
 "flagNotes": {
  "p_truth": "序章里对那个快死的人说了实话",
  "p_lied": "序章里对那个快死的人说了好听的",
  "saw_her_look": "看清了科琳倒下前脸朝哪边",
  "vigil_knelt": "守夜时跟着跪了",
  "urn_promised": "答应过军士长，把他埋在月神之耳",
  "rogier_counted": "帝国的书办数到了罗吉尔",
  "sons_knelt": "达梅里亚之子到科琳倒下的空地上跪过",
  "dug_the_pit": "你去年在皇宫花园里挖过那个坑",
  "rogier_spotted": "在桥上认出了罗吉尔，还数了他的人",
  "letter_shown": "亮过巴兹伍德的信",
  "report1_true": "第一只信鸽写的是真话",
  "report1_false": "第一只信鸽写的是假话",
  "knows_underpass": "知道地下通道的水闸在哪里",
  "body_verified": "在尸首上验到了杜坎印记",
  "p_surrendered": "序章里扔过兵器",
  "cart_known": "出城时走漏了风声",
  "goblins_hidden": "地下通道的地精藏起来了",
  "goblins_armed": "地下通道的地精拿上了兵器",
  "goblins_handed": "地下通道的地精交给了边区兵",
  "goblin_speaker": "地精推了一个说话的人",
  "rose_chain_freed": "灰烬玫瑰那串“仆役”放了",
  "rose_chain_bought": "从灰烬玫瑰手里赎了两个“仆役”",
  "rose_chain_ignored": "给灰烬玫瑰的“仆役”队让了路",
  "jar_broken": "夜袭里砸了魂罐",
  "ghost_taken": "杜坎森的鬼魂被死语者带走了",
  "korgus_rite": "杜坎森做了归尘礼",
  "korgus_son": "杜坎森交给了古尔赞",
  "korgus_spike": "杜坎森的头挂上了城门",
  "korgus_sold": "杜坎森卖给了铁杖骑士团",
  "korgus_lake": "杜坎森沉了银池湖",
  "korgus_carver": "杜坎森交给了雕骨者",
  "gurzan_owes": "古尔赞欠你们一份情",
  "gurzan_grudge": "古尔赞记着你们一笔仇",
  "ushka_warned": "乌什卡说过“第二次我走”",
  "entry_struck": "玛瑙之门那一条划掉了",
  "roll_seen": "看过萨什卷",
  "roll_told": "在会上念了卷子里那句话",
  "morningstar_hint": "知道元老会里有晨星会的人",
  "spirits_heard": "听到了树灵说“银的那位”",
  "shout_answered": "在试炼山上喊过，北要塞有人应",
  "avatar_carleon": "替卡莱昂作过化身的保",
  "avatar_gryf": "替小格里夫作过化身的保",
  "sightings_exposed": "当众揭穿了三起银龙现身的真相",
  "has_vote": "你在第十次泛神会议上有一票",
  "testimony_hers": "作证：那一下是她自己选的",
  "testimony_host": "作证：功劳在全军",
  "testimony_king": "作证时替阿坦问了“王在哪里”",
  "groundhawk_deed": "蓝牙认了康原那块地",
  "pixiebury_warned": "给古拉德报过信，有人替碎心者作保",
  "compact_league": "城约：卡斯托纳斯归伯爵联盟",
  "compact_corintar": "城约：卡斯托纳斯归科琳塔尔",
  "compact_free": "城约：卡斯托纳斯自己管自己",
  "compact_none": "城约没谈成，城没人管",
  "compact_sealed": "城约上有帝国的印",
  "moot_defused": "银现月的聚会被搅散了，或者谈成了",
  "road_ghurad": "你在火边选了古拉德的路：留下来种地",
  "road_arosha": "你在火边选了阿罗莎的路：跟科琳的人走",
  "road_gurzan": "你在火边选了古尔赞的路：再来一次",
  "khug_goblins_out": "把玛瑙之门的地精住户赶走了",
  "khug_goblins_lease": "跟玛瑙之门的地精住户立了租约",
  "rail_bones": "收了死铁道上的遗骨",
  "rail_contract": "跟铁路潜伏者立了通行的约",
  "brack_bought": "堵了布拉克的嘴",
  "lied_to_garaele": "泵房那天对加莱尔说了好听的",
  "parents_buried_deep": "守昔者夫妇就地埋在了山里",
  "parents_carried": "守昔者夫妇被抬出了山",
  "company_whole": "负怨者兵团没散",
  "castellar_seen": "井壁上读到了“天上的卡斯特拉尔”",
  "dookanil_known": "知道了“杜坎尼尔”这个音",
  "brok_lives": "布罗克活着出了山",
  "belgrak_lost": "贝尔格拉克再没人见过",
  "belgrak_saved": "把贝尔格拉克背出来了",
  "belgrak_struck": "贝尔格拉克当众划了一条账",
  "dookanil_told": "山里那句话带出去了",
  "dookanil_mocked": "那句话是被人当笑话传出去的",
  "names_filed": "两个名字报给了编年史家会",
  "notebook_order": "拓片本交给了编年史家会",
  "notebook_kept": "拓片本加莱尔自己留着",
  "notebook_sold": "拓片本背着加莱尔卖了",
  "creed_carried": "接了多米尼克托带的信条",
  "creed_delivered": "信条送到了神殿区",
  "tilda_with": "蒂尔达跟着队伍",
  "bilge_graves": "给舱底区的无名尸立了坟",
  "log_read": "读了月焰号航海志",
  "log_copied": "抄了航海志",
  "log_stolen": "把航海志拿走了",
  "log_filed": "航海志两头登记，上交了",
  "bearing_known": "记下了神殿的方位",
  "digger_talked": "挖坑的人开口了",
  "digger_safe": "把挖坑的人送走了",
  "digger_given": "把挖坑的人交给了蒂尔达",
  "clan_charter": "拿到了给东坎诺氏族的特许",
  "tilda_blindsided": "瞒着蒂尔达办了要紧事",
  "garden_alarm": "在皇宫花园里惊动了守卫",
  "wound_seen": "验了伤：从后往前，窄刃",
  "daras_seen": "庆典前认出了达拉斯",
  "empress_saved": "皇后没死",
  "daras_fled": "帮达拉斯跑了",
  "proof_bardswood": "证据给了巴兹伍德",
  "proof_moon": "证据给了月党",
  "proof_published": "证据印出去了",
  "proof_kept": "证据留在了自己手里",
  "rogier_pardoned": "替罗吉尔讨到了赦令",
  "emperor_duel_won": "照三卫的规矩赢了皇帝一场",
  "tilda_true": "蒂尔达的最后一份报告照实写了",
  "tilda_false": "蒂尔达的最后一份报告照你的意思写了",
  "tilda_burned": "蒂尔达把密码本烧了",
  "door_letter_sent": "妮克西给东家写了信",
  "adenn_damesear": "大公埋在了月神之耳",
  "adenn_rogier": "大公交给了罗吉尔",
  "adenn_left": "大公留在了花圃下面",
  "urn_buried": "军士长下葬了",
  "arun_notes": "手里有阿鲁恩的笔记",
  "blackbranch_deal": "接了黑枝亲王的价：回去以后非说不可",
  "toll_nixee": "过路费：妮克西留在了愚者宫里",
  "toll_years": "过路费：再添十年",
  "toll_story": "过路费：先把这趟的故事讲给了亲王",
  "toll_staff": "过路费：答应回程把权杖留给亲王",
  "lies_cursed": "身上带着血律的霉运",
  "lies_confessed": "把每一句谎都当众说了",
  "garaele_leaving": "加莱尔决定出林后回月山",
  "contract_staff": "血约里还的是那根杖",
  "relic_given": "血约里还的是一件信物",
  "staff_seen": "见过断权杖",
  "war_of_two_seen": "看过二人之战那一幅",
  "tan_read_it": "最后一幅是阿坦自己看的",
  "tan_shielded": "最后一幅你替阿坦挡了",
  "rite_done": "第一场丧事办了",
  "wall_rubbed": "拓了壁画",
  "wall_sealed": "把壁画厅的门砌死了",
  "wall_defaced": "凿了最后一幅",
  "tan_stayed": "阿坦留在了阿伦蒂尔",
  "staff_home": "断权杖带回了坎诺",
  "staff_returned": "断权杖放回了神龛",
  "staff_fey": "断权杖给了愚者亲王",
  "contract_broken": "毁了血约",
  "garaele_left": "加莱尔回了月山",
  "ushka_left": "乌什卡离队了",
  "tan_told": "让阿坦去告诉拜王的人",
  "tan_silent": "跟阿坦约好不说",
  "tan_forced": "逼阿坦照常宣讲银龙必再临",
  "tan_morningstar": "阿坦去了晨星会",
  "told_dominic": "把真相告诉了多米尼克",
  "temples_first": "先关起门告诉了神殿",
  "ushka_spoke": "“造我们的人不配我们替他死”在古尔赞的火边说了",
  "arosha_at_table": "阿罗莎上了门板桌",
  "bones_at_gate": "借了白骨守南门",
  "underpass_held": "地下通道有人守",
  "staff_to_dominic": "断权杖交给了多米尼克",
  "staff_to_temples": "断权杖交给了神殿",
  "told_printed": "交给编年史家会刻了版",
  "sold_morningstar": "卖给了那位元老",
  "prophecy_known": "知道阿格拉多斯教团的那则预言",
  "prophecy_told": "把预言公开了",
  "skyking_slur": "“他们的神杀了我们的王”传开了",
  "southgate_held": "南门守住了",
  "claimant_kalista": "陪卡莉斯塔上了试炼山",
  "claimant_arosha": "陪阿罗莎上了试炼山",
  "conclave_held": "万神道上的会开成了",
  "gurzan_treaty": "跟古尔赞谈成了",
  "gurzan_soul_taken": "洛朗收了古尔赞的魂",
  "laurens_stopped": "拦下了洛朗",
  "gurzan_buried": "给古尔赞做了归尘礼",
  "gurzan_returned": "古尔赞交给氏族抬回去了",
  "sided_gurzan": "你站到了古尔赞那一边",
  "god_revealed": "第一次当众显了身份",
  "god_tried_raise": "试过让科琳起来",
  "god_shrine": "路边有人给你立了龛",
  "ushka_wary": "乌什卡第一次见面就防着你",
  "god_faked_dragon": "给老太太造了一回“银龙”",
  "god_named_korgus": "当众说杜坎森是杜坎的儿子",
  "god_denied_korgus": "当众说杜坎森不是杜坎的儿子",
  "god_avatar_claimed": "认了“卡斯特洛斯的化身”这个名分",
  "god_judged_council": "替第十次泛神会议裁决了",
  "god_of_the_tide": "接了杜坎森空出来的位子",
  "entry_313": "负怨者的名单上多了关于你的一条",
  "rail_woken": "让死铁道跑了一天",
  "god_opened_shaft": "硬撬过胡尔-乔卡德的竖井",
  "belgrak_struck_by_god": "贝尔格拉克那一笔是神按着他的手划的",
  "god_sided_throne": "当众替皇帝挡了刀",
  "god_duel_emperor": "应了皇帝的战，赢了",
  "owes_fey_miracle": "欠愚者亲王一次有求必应",
  "god_answered_for_him": "在墙前面替那位应了一声",
  "god_held_gate": "一个人守了南门",
  "god_held_city": "城破以后硬拿了回来",
  "fourth_offered": "会上把那把椅子摆到了你面前",
  "fourth_sat": "你在那把椅子上坐下了",
  "fourth_declined": "你说那把椅子不归你让，也不归你坐",
  "fourth_undertaker": "你说你是来收尸的"
 },
 "endings": {
  "funeral": {
   "title": "送神",
   "subtitle": "万神道，1472 年奈拉月",
   "art": "load_17",
   "text": [
    "那年冬天，会议只对一件事达成共识：诸神之王卡斯特洛斯已经死了。至于谁来继位，各方都同意暂且放下。",
    "人类信奉的众神仍叫“摄政王庭”。如今，人们总算知道他们替谁摄政了。每逢君王加冕，神王的权杖照常摆在一旁，再没人伸手去拿。",
    "教派仍然分裂了，只是比原先晚了一代人，波及的地方也少些。多米尼克亲历了那场会议，回顾起来，很难说赢了什么，或是输了什么。"
   ]
  },
  "sword": {
   "title": "剑上天",
   "subtitle": "天位无主，科琳以功继之",
   "art": "load_8",
   "text": [
    "从此东坎诺只奉科琳为神。愿意向她低头的兽人，终于可以留在自己的家里。",
    "西方诸殿拒绝承认科琳。她的信条允许百姓驱逐失德的君主，这话传进帝国时，那里的皇帝才死了两年。教派战争提前了一代。如今洛朗这样的人拿起武器，还有经书可引。",
    "有人把达梅里亚的王冠送到蓝牙面前。他看了一眼，让来人把它带回去。"
   ]
  },
  "eldest": {
   "title": "长子",
   "subtitle": "王倦勤，长子摄事",
   "art": "ev_adeanic_war",
   "text": [
    "各国的君主都保住了王冠。从此谁能坐上鸽座，神殿就承认谁有资格统治。至于王位是怎么到手的，再无人过问。",
    "科琳的信徒在王庭里自成一派，说话相当不客气。可一提到百姓能否反抗昏君，神殿便先堵住了他们的嘴。"
   ]
  },
  "standing": {
   "title": "军令未撤",
   "subtitle": "贾哈尼克正史里是这样",
   "text": [
    "1490 年，恩德拉尔率船抵达阿伦蒂尔。1518 年，宣称神王已死的小册子已随处可见。加莱尔一生都没有公开表态。",
    "古尔赞、皮克精之墓和鸽座各有各的去向，你们没有再插手。从那以后，阿坦每天早晨都要念完四十句祷词。"
   ]
  },
  "mantle": {
   "title": "卡斯坦的披风",
   "subtitle": "喊一嗓子，有人应",
   "text": [
    "开春后，城里有人巡夜，有人管粮价，百姓也知道该依哪条法律办事。新君誓言里说要“永说真话”。登基第一年，城墙上究竟发生了什么，全城都知道了。",
    {
     "if": "flag.claimant_kalista",
     "text": "戴上王冠的是卡莉斯塔·黑塔。伯爵联盟各家第一次并排站在誓石下，约好把旧账留到来年再算。"
    },
    {
     "if": "flag.claimant_arosha",
     "text": "阿罗莎·伐橡者戴上了王冠。人类和兽人有了同一位君主。城门口新贴的告示，每一张都用两种语言。"
    },
    "用不了一代人，新王国就会想起昔日的疆界。西边的帝国已经开始整军。"
   ]
  },
  "dookansday": {
   "title": "杜坎之日",
   "subtitle": "奈拉月 11 日，银瀑边",
   "art": "ev_orc_with_axe",
   "text": [
    "二十八年来，氏族不肯讲和，一直是同一个理由：先去求和的族人，最后都被拴上了奴隶贩子的铁链。",
    "接下来几年，氏族在卡斯托纳斯定居。下城的地精工匠第一次按自己的个头装门把手，回家终于够得着了。"
   ]
  },
  "fourth": {
   "title": "第四个人选",
   "subtitle": "血统，功劳，空着，还有一个是活的",
   "divine": true,
   "text": [
    {
     "if": "flag.fourth_sat",
     "text": "王庭第一次有了住在人间的主人。“摄政”两字从此废止。往后君王加冕，都得你点头。东坎诺一夜间有了自己的秩序，西边的帝国再也管不到这里。"
    },
    {
     "if": "flag.fourth_sat",
     "text": "科琳的信徒从此不走万神道。古时的诏令禁止神住在人间，西边的神殿一半称你为僭主，另一半已经动手修订经文。这支收尸队二十八年里安葬的每一位，都是为一把椅子送的命，如今坐在这把椅子上的是你。"
    },
    {
     "if": "flag.fourth_declined && world.scale >= 3",
     "text": "会议照凡人的办法接着开。到开春，支持多米尼克的人多了一倍，照这个势头，继任神王的很可能是科琳。"
    },
    {
     "if": "flag.fourth_declined && world.scale <= -3",
     "text": "会议照凡人的办法接着开。各殿主祭当晚就关起门来商量，提的都是同一个人选：阿德安。"
    },
    {
     "if": "flag.fourth_declined && world.scale > -3 && world.scale < 3",
     "text": "会议照凡人的办法接着开。他们争到开春，神王的座位依旧空着，两边都说是自己主动退让。"
    },
    {
     "if": "flag.fourth_declined",
     "text": "虽然你从未应允，万神道上终究还是有人给你立了一座神龛。"
    },
    {
     "if": "flag.fourth_undertaker",
     "text": "王庭原有一位殓神者。瓦伊洛科尔替死神奈拉特守着入殓的神，一千年来无人问起他们的姓名。如今这差事多了一个人分担。往后你抬走的每一位，你都曾认识。"
    },
    {
     "if": "!flag.fourth_sat && !flag.fourth_declined && !flag.fourth_undertaker",
     "text": "帐里的人等了一整夜。你守在那把空椅子旁，没有坐下，也没有离开。"
    },
    "你的军令上写着“事毕为止”。对一个不会死的人来说，这句话定不下归期。"
   ]
  }
 },
 "endingScenes": {
  "funeral": "end_funeral",
  "sword": "end_sword",
  "eldest": "end_eldest",
  "standing": "end_standing",
  "mantle": "end_mantle",
  "dookansday": "end_dookansday",
  "fourth": "end_fourth"
 },
 "epilogues": [
  {
   "if": "world.embers <= 3 || (world.embers <= 7 && flag.southgate_held)",
   "title": "{?world.embers <= 3:长者郡的集|第二次}",
   "text": [
    {
     "if": "world.embers <= 3",
     "text": "兽人的第二次大潮始终没来。银现月 4 日的氏族聚会逐渐成了牲口集。可到了每年奈拉月 11 日，艾伦河上照常漂满断链和蘑菇。"
    },
    {
     "if": "world.embers <= 3 && flag.gurzan_treaty",
     "text": "古尔赞放在门板桌上那节断链，一直没有人来收走。"
    },
    {
     "if": "world.embers >= 4 && world.embers <= 7",
     "text": "1472 年那一仗，{?flag.arosha_at_table:阿罗莎|蓝牙}砍掉了古尔赞的手。{?flag.laurens_stopped:洛朗那只空罐子到底没装上东西。|洛朗收了他的魂，装魂的罐子挂在腰上，排在第三个。}嗜血者氏族没过两代人就散了，只剩一个名字留下来吓唬小孩。"
    }
   ]
  },
  {
   "if": "world.embers >= 8 && flag.southgate_held",
   "title": "守住了",
   "text": [
    "南门守住了。城外的墓坑填土三次才填平。三十年后，仍有边区兵不肯和兽人同桌，连饭菜也要分开灶做。"
   ]
  },
  {
   "title": "{?world.room >= 7:一口锅|皮克精之墓}",
   "text": [
    {
     "if": "world.room <= 2 && !visited.end_sword",
     "text": "1467 年，灰烬玫瑰兵团和马尔霍德洗劫皮克精之墓。古拉德负伤西逃，次年让位。到 1520 年代，维特斯克码头已开始贩卖兽人，门口公然贴着价钱。"
    },
    {
     "if": "(world.room >= 3 && world.room <= 6) || (world.room <= 2 && visited.end_sword)",
     "text": "皮克精之墓没有烧掉，可康原还是丢了。1470 年代灰烬玫瑰兵团来夺地，亏得蓝牙出面保人，地鹰氏族才一家一家迁进了科琳塔尔的地界。那张地契压在一只木匣子下面，再没用上。"
    },
    {
     "if": "world.room >= 7",
     "text": "皮克精之墓没有烧掉，城里的歌一路往外传。卡斯托纳斯的下城也有了地精坊，坊里每扇门上都装着两个把手，一高一低。"
    }
   ]
  },
  {
   "title": "{?world.unburied >= 7:白骨有价|坟}",
   "text": [
    {
     "if": "world.unburied <= 2",
     "text": "东坎诺的坟比村庄还多，每座坟都记着死者的姓名。死灵法师找不到无人认领的尸体，埃斯蒂尔王国晚了一代才兴起。瓦丽娜仍抱怨手里没有材料。"
    },
    {
     "if": "world.unburied >= 3 && world.unburied <= 6",
     "text": "洛朗后来成了东坎诺最早的几个巫师王之一。瓦丽娜拿死人去修城墙，管这个叫节省。"
    },
    {
     "if": "world.unburied >= 7",
     "text": "{?flag.bones_at_gate:南门是靠死人守住的。|东坎诺的死人比活人还好使唤，拉车、垒墙、守夜，一概不要饷。}那年冬天，卡斯托纳斯没有一个人挨饿。铁杖骑士团读了你们带回来的东西，得出的结论是：神王的位子既然空着，有本事的就该去坐。"
    },
    {
     "if": "flag.bilge_graves",
     "text": "安本科斯特舱底区的那排无名坟，后来年年都有人去扫。扫坟的人也不知道里面埋的是谁。"
    }
   ]
  },
  {
   "title": "{?world.peace <= 3:第五场|鸽座}",
   "text": [
    {
     "if": "world.peace <= 3",
     "text": "1467 年，奥坎娜病逝。她的儿子奥坎带着她的断枪出征。罗吉尔已过六十，仍率军向西。阿登终于等到一场以他为名的战争，西坎诺却又过不上太平日子了。"
    },
    {
     "if": "world.peace >= 4 && world.peace <= 6",
     "text": "1468 年新任大魔导师行就职礼，西尔加里昂家的法师当场用预言术把王座厅那一晚演了出来。1470 年皇帝中风死了，当选的新皇是珍珠边地的人。没过几年，威克斯就派人把珍珠边地一块一块拆掉了。"
    },
    {
     "if": "world.peace >= 7",
     "text": "皇帝那句假话始终没有被人戳穿。太平日子多撑了二十年，鸽座也越来越像威克斯家的祖产。"
    }
   ]
  },
  {
   "if": "world.word >= 3 && world.word <= 6 && visited.end_standing",
   "title": "走漏",
   "text": [
    "消息没能保密到 1518 年。先是神殿区的酒馆里有人窃窃私语，后来泰卢姆的传令员直接站上木桶，当街把事情从头到尾说了出来。",
    {
     "if": "flag.blackbranch_deal",
     "text": "最早把神王已死这件事讲开的是黑枝亲王的骑士。他就在深林旁边讲，一个字都没改。"
    },
    "加莱尔照常不承认，也不否认。"
   ]
  },
  {
   "if": "flag.korgus_rite || flag.korgus_son || flag.korgus_spike || flag.korgus_sold || flag.korgus_lake || flag.korgus_carver",
   "title": "杜坎森",
   "text": [
    {
     "if": "flag.korgus_rite",
     "text": "死齿氏族准备过一副新躯体，想召回杜坎森的魂。1452 年，坚定大队毁掉了它。即使躯体完好，死灵法师也找不到他的一块骨头。乌什卡的木签又多了一道刻痕。"
    },
    {
     "if": "flag.korgus_son",
     "text": "1472 年竖在南门外的那面骨旗就是杜坎森的骨头。古尔赞败了以后，那副骨头该归谁，氏族里又吵了一次。"
    },
    {
     "if": "flag.korgus_spike",
     "text": "杜坎森的头在白墙的门上挂了三年，掉下来那天没有人去捡。兽人小孩学会的第一句人类的话，就是那座门的名字。"
    },
    {
     "if": "flag.korgus_sold",
     "text": "卖尸首得的那箱金冠拿去发了三个营的抚恤。可这一来，1452 年死齿的斯劳手里拿的就是杜坎森的真尸首了。坚定大队多死了四十个人，才把它毁掉。"
    },
    {
     "if": "flag.korgus_lake",
     "text": "每年奈拉月 11 日，都有人往银池湖里扔蘑菇。湖边的渔民说，那一天的网特别沉。"
    },
    {
     "if": "flag.korgus_carver",
     "text": "雕骨者的酋长阿祖科尔把那副骨头雕了九年。雕完那天他当众宣布，杜坎森的魂已经上路转世了。氏族上下如今都在等着认一个孩子。"
    },
    {
     "if": "flag.ghost_taken",
     "text": "杜坎森的鬼魂关在死语者的罐子里，被审问了二十年。"
    }
   ]
  },
  {
   "if": "flag.compact_league || flag.compact_corintar || flag.compact_free || flag.compact_none",
   "title": "城",
   "text": [
    {
     "if": "flag.compact_none",
     "text": "这座城长期无人治理。直到 1479 年真霜月 17 日，先锋行会才收复南城。"
    },
    {
     "if": "flag.compact_league",
     "text": "黑塔家管收税，世家管巡夜。门板桌后来搬进了北城的一间库房，桌腿下面垫着两块砖。"
    },
    {
     "if": "flag.compact_corintar",
     "text": "城归科琳塔尔管。城里的孩子都是听着科琳的歌长大的，巡夜的人盾上个个画着红底的剑。门板桌搬进了军团广场，可谁也不敢去坐。"
    },
    {
     "if": "flag.compact_free",
     "text": "城约一年议一次，各冒险团、世家和氏族各出一个人。门板桌还留在那块空地上，门板前后换过七扇，酒桶一直是原来那两只。"
    },
    {
     "if": "flag.compact_sealed",
     "text": "城约的抄本上盖着帝国的印，印泥是紫色的。"
    }
   ]
  },
  {
   "title": "{?flag.empress_saved:玫瑰与鸽子|庆典}",
   "text": [
    {
     "if": "flag.empress_saved",
     "text": "皇后活了下来，威克斯与洛伦特的婚盟因此又维持了几年。{?flag.daras_fled:达拉斯逃到了外地。后来有人在塔兰顿见过他，靠缝寿衣过活。|达拉斯在牢里做了八年的寿衣。}"
    },
    {
     "if": "!flag.empress_saved",
     "text": "皇后死在了三十年庆典上，联姻也就作废了。皇帝随后派人去杀罗吉尔，没杀成，罗吉尔却从此走路有点跛。"
    }
   ]
  },
  {
   "if": "flag.proof_bardswood || flag.proof_moon || flag.proof_published || flag.proof_kept",
   "title": "那个窟窿",
   "text": [
    {
     "if": "flag.proof_bardswood",
     "text": "巴兹伍德把蜡模收进抽屉，锁好，把钥匙挂上脖子。他从此没再开过抽屉，也一直没舍得扔掉蜡模。"
    },
    {
     "if": "flag.proof_moon",
     "text": "奥坎娜把那张口供钉在了帐子里，正对着床。她每天早上一起来就先看它一眼。"
    },
    {
     "if": "flag.proof_published",
     "text": "帝国各地的酒馆都有人比划那一刀，说是用窄刃从背后刺入的。故事每转一道手，那把刀就又长了几寸。"
    },
    {
     "if": "flag.proof_kept",
     "text": "证据一直压在你们车上没动。到了 1468 年，是别人替你们当众说了出来。"
    }
   ]
  },
  {
   "if": "flag.adenn_damesear || flag.adenn_rogier || flag.adenn_left",
   "title": "大公的坟",
   "text": [
    {
     "if": "flag.adenn_damesear",
     "text": "月神之耳的山坡上有块无字碑。只要夜里看得见月亮，碑前往往会多出一枝郁金香。"
    },
    {
     "if": "flag.adenn_rogier",
     "text": "塔兰顿城堡里多了一座龛。罗吉尔每天从那里经过都要停一停，有时候就站在那里看兵书。"
    },
    {
     "if": "flag.adenn_left",
     "text": "皇宫的花圃里新栽了郁金香，是红的。德利安后来被人刺死了。他死前见没见着这些花，各人说法不一。"
    }
   ]
  },
  {
   "if": "flag.belgrak_lost || flag.belgrak_saved || flag.belgrak_struck",
   "title": "名单",
   "text": [
    {
     "if": "flag.belgrak_lost",
     "text": "再没人见过贝尔格拉克。雷萨格从此不提他的名字，要是有人先提，他便立刻沉下脸。"
    },
    {
     "if": "flag.belgrak_saved",
     "text": "1475 年玛瑙之门重立的那天，贝尔格拉克也到场了。他坐在最后一排，手里攥着那份名单。上面三百一十二条，他一条也没再去讨。"
    },
    {
     "if": "flag.belgrak_struck",
     "text": "账本上第一次有人划掉了自家的一条。兵团里有一半人从此不认他，他也不在乎。"
    },
    {
     "if": "flag.belgrak_struck_by_god",
     "text": "兵团里的说法是，那一笔是神按着他的手划下去的。他回了红宝石领以后，再也没碰过账本。"
    }
   ]
  },
  {
   "if": "flag.wall_sealed || flag.wall_defaced || flag.wall_rubbed",
   "title": "那面墙",
   "text": [
    {
     "if": "flag.wall_sealed",
     "text": "1490 年以后，陆续有人找到那扇门。他们看到的，只是一个早已被人从外面一砖一砖砌死的入口。"
    },
    {
     "if": "flag.wall_defaced",
     "text": "后来的人只看得出最后一幅被人凿过。凿的人显然是不想让人知道什么，结果人人都在猜。"
    },
    {
     "if": "flag.wall_rubbed",
     "text": "拓片一共四张纸，{?visited.end_funeral:收在万神道那座庙的供桌下|收在一只樟木箱子里}，旁边压着石头。"
    }
   ]
  },
  {
   "if": "flag.staff_home || flag.staff_returned || flag.staff_fey",
   "title": "那根杖",
   "text": [
    {
     "if": "flag.staff_home && flag.staff_to_dominic",
     "text": "多米尼克得到了断杖。他拿它主持过许多次仪式，却一次也没把它当拐杖用。"
    },
    {
     "if": "flag.staff_home && flag.staff_to_temples",
     "text": "断杖收进了神殿的库房，登记的时候写的名目是“来历待考”。"
    },
    {
     "if": "flag.staff_home && !flag.staff_to_dominic && !flag.staff_to_temples",
     "text": "{?visited.end_funeral:断杖横放在那张空台子上，后来再也没人拿起来过。|断杖一直放在板车上，压着别的东西。}"
    },
    {
     "if": "flag.staff_returned",
     "text": "断杖放回了那座小龛，龛前照常有人来供贝珠。供的人并不知道它出过一趟远门。"
    },
    {
     "if": "flag.staff_fey",
     "text": "断杖如今在愚者亲王的宫里。听说妖精们拿它当门闩用。"
    }
   ]
  },
  {
   "if": "met.ushka",
   "title": "{?party.ushka:锤子|罐子}",
   "text": [
    {
     "if": "party.ushka",
     "text": "乌什卡回到烂刀氏族，教了三十年的巡游规矩。轮到她自己受归尘礼时，主持的是她的徒弟，磨骨足足用了两天。"
    },
    {
     "if": "!party.ushka && world.unburied >= 5",
     "text": "洛朗的架子上多了一只罐子，罐口的蜡封上压着一枚兽人的指印。乌什卡的魂在里面。"
    },
    {
     "if": "!party.ushka && world.unburied <= 4",
     "text": "洛朗少了一只手。剑之誓约的人说，那是被一个兽人女人砍掉的，砍完她还把那只手磨成了粉。"
    }
   ]
  },
  {
   "if": "met.tan",
   "title": "阿坦",
   "text": [
    {
     "if": "flag.tan_told",
     "text": "1520 年，第十一次泛神会议上，有人问阿坦，神死了，怎么不见他伤心？他说：“我伤心过了。比你们早大半辈子。”"
    },
    {
     "if": "flag.tan_morningstar",
     "text": "阿坦把第四十一句改了，改成了求鸦王。有没有回音，没有人敢问。"
    },
    {
     "if": "flag.tan_stayed",
     "text": "1490 年，恩德拉尔的人在林子旁边遇见一个老头，说的是坎诺话。他先问今年是哪一年，接着问卡斯托纳斯那座庙的屋顶修上了没有。"
    },
    {
     "if": "!flag.tan_told && !flag.tan_morningstar && !flag.tan_stayed",
     "text": "1520 年，会上终于有人把神王已死这句话说了出来。后排坐着一位东坎诺口音的老祭司，听完松了一口气。他的晨祷已经念了七十多年，每天四十句。"
    }
   ]
  },
  {
   "if": "met.nixee",
   "title": "{?flag.toll_nixee:傻子|欠条}",
   "text": [
    {
     "if": "flag.toll_nixee",
     "text": "有些人在深林里迷了路，却不知怎么又走了出来，摊开手，掌心多了一张写着价钱的树皮。树皮上是妮克西的笔迹。"
    },
    {
     "if": "!flag.toll_nixee && visited.end_dookansday",
     "text": "妮克西带着地精先走了一步。规矩第一条本来就是活着。"
    },
    {
     "if": "!flag.toll_nixee && !visited.end_dookansday",
     "text": "康原{?world.room >= 6:保住了，她成了地鹰氏族第一个跟人类签约没吃亏的人|还是丢了，她把地契折成小方块，塞进了鞋里}。她还给氏族立了新规矩：跟人类签约之前，先看看对方埋不埋自己的死人。"
    }
   ]
  },
  {
   "if": "met.garaele",
   "title": "{?flag.garaele_left:不承认，也不否认|1802 年冬}",
   "text": [
    {
     "if": "flag.garaele_left",
     "text": "加莱尔回了月山。三百年里不断有人登门，问她见没见过那面墙。她从来没有承认过，也没有否认过。"
    },
    {
     "if": "!flag.garaele_left",
     "text": "1802 年冬天，加莱尔死在安本科斯特。屋里堆的全是纸。遗稿里有一页只写了一个日期：1472 年奈拉月 11 日。{?visited.end_standing:日期下面是空的。|日期下面写得满满的，字很小，署名排在最后。}"
    }
   ]
  },
  {
   "if": "origin == 'corintar'",
   "title": "那截皮带",
   "text": [
    {
     "if": "item.shield_strap && visited.end_sword",
     "text": "科琳的盾带后来被奉为圣物，装在玻璃匣里，就陈列在她倒下的空地旁。隔着玻璃，还看得见皮上的两个铆钉孔。"
    },
    {
     "if": "item.shield_strap && !visited.end_sword",
     "text": "那截盾带你一直带在身上，皮子都磨得发亮了。你死时，照你的意思拿它陪了葬。"
    },
    {
     "if": "!item.shield_strap",
     "text": "那截盾带早就不在你手里了。它后来去了哪里，你打听过两次，都没问出来。"
    }
   ]
  },
  {
   "if": "origin == 'sons'",
   "title": "那顶王冠",
   "text": [
    "罗吉尔死于 1473 年。他的旧部把达梅里亚的王冠送到蓝牙面前。蓝牙没有接，蓝牙的大儿子也没接。",
    {
     "if": "flag.f_crown_yes",
     "text": "去递王冠的人里面有你。你双手捧着它进了蓝牙的帐子，又双手捧着它出来了。他没有接。"
    },
    {
     "if": "flag.f_crown_no",
     "text": "去递王冠的人里面没有你。蓝牙没接王冠的事，你是在塔兰顿的城门外面听说的。"
    },
    "后来戴上它的是蓝牙的小儿子，那年十八岁。"
   ]
  },
  {
   "if": "origin == 'wex'",
   "title": "最后一封报告",
   "text": [
    {
     "if": "flag.f_report_sent",
     "text": "最后一封报告{?var.honest_reports > var.false_reports:句句属实|修饰得十分漂亮}，顺利送到巴兹伍德手上。他活到 1609 年，始终把这封信单独收在抽屉里。"
    },
    {
     "if": "flag.f_report_clerk",
     "text": "最后一封报告钉在了旧集市的告示板上，被雨泡烂了。后来又有人抄了三次。巴兹伍德活到了 1609 年，这一份他是从别人的信里读到的。"
    },
    {
     "if": "flag.f_report_burned",
     "text": "最后一封报告烧掉了。巴兹伍德活到了 1609 年，这封信他等过，后来也就不等了。"
    },
    {
     "if": "!flag.f_report_sent && !flag.f_report_clerk && !flag.f_report_burned",
     "text": "最后一封报告{?var.honest_reports > var.false_reports:写的是实话|写得很好看}。巴兹伍德活到了 1609 年，那封信他一直收在抽屉里，跟别的信分开放着。"
    }
   ]
  },
  {
   "if": "origin == 'grudge'",
   "title": "账本",
   "text": [
    "账本翻到玛瑙之门那一页，{?flag.entry_struck:那笔债已经勾销，旁边是你的签名|那笔债仍在，页背多了一行小字}。1475 年，矮人重新回到山堡定居。"
   ]
  },
  {
   "if": "origin == 'tide'",
   "title": "手背",
   "text": [
    "你的手背上，那抹绿色始终没有褪去。",
    {
     "if": "flag.road_ghurad",
     "text": "你跟着古拉德种地去了。第一年的麦子被雹子打了，第二年有了收成。"
    },
    {
     "if": "flag.road_arosha",
     "text": "你跟了阿罗莎，在林木之墙上站过岗。墙那边的人后来都管你叫邻居。"
    },
    {
     "if": "flag.road_gurzan",
     "text": "你走的是古尔赞那条路，一直走到了头。路的尽头并没有人等你。"
    }
   ]
  },
  {
   "if": "faction == 'heirs'",
   "title": "谱",
   "text": [
    "后来有人把家谱上缺的事补了进去。补写的那一笔你是否承认，从来没人来问。"
   ]
  },
  {
   "if": "faction == 'tried'",
   "title": "应声",
   "text": [
    "只要喊出声，就有人应。那天究竟有几个人是为你而答应的，你心里有数。"
   ]
  },
  {
   "if": "faction == 'crownless'",
   "title": "空椅子",
   "text": [
    "神王的座位空着的那些年，第一个想坐上去的是晨星会，那个夜里拜鸦王的秘密会社。{?flag.southgate_held:你们拦住了他们，只是拦得不太体面。|最终谁也没能拦住他们。}"
   ]
  },
  {
   "if": "is.god",
   "title": "多一座龛",
   "text": [
    "万神道替你留了一座龛。各殿为香火钱的归属争了三年。你曾坐在最后一排听过一次，没有人认出你。",
    {
     "if": "flag.god_faked_dragon",
     "text": "蓝宝石望的那座塔如今成了朝圣的地方，墙上刻着“银龙于此再临”。那是你当年假扮的。阿坦每次路过，从来不进去。"
    }
   ]
  },
  {
   "if": "is.god",
   "title": "多米尼克的问题",
   "text": [
    "多米尼克年过九十，仍在追问你和科琳是什么关系。你的回答没有两次相同，他照样逐句记下，最后足足记满四本。"
   ]
  },
  {
   "if": "is.god",
   "title": "收尸的神",
   "text": [
    "你仍留在板车旁。乌什卡总说可惜，一个不会死的人，偏偏把埋葬死者的手艺学得这么好。"
   ]
  },
  {
   "if": "is.god",
   "title": "诏令",
   "text": [
    "各殿花三年查考禁止神亲临人间的诏令。一派认为你并非神，另一派追问，立诏的神王都死了，诏令还有效吗？双方都请你作证。听完你的证词，双方都不满意。"
   ]
  },
  {
   "if": "is.god",
   "title": "第三百一十三条",
   "text": [
    "红宝石领的账上还有一笔未清：“某神，玛瑙之门，一四二四，未到。”{?flag.entry_313:是贝尔格拉克亲手写下的。|是后来的账房补写的。}",
    "每一任管账的都来问过，这一条能不能勾销。得到的答复每次都一样：欠债的还在，账就在。"
   ]
  },
  {
   "if": "is.god && (flag.fourth_sat || flag.god_answered_for_him)",
   "title": "晨祷",
   "text": [
    {
     "if": "flag.fourth_sat",
     "text": "阿坦活到九十多岁。每天清早，他都在你座下念晨祷。四十句还是四十一句，要看你当年给他的回答。他去世那天，祷声在半途停了。"
    },
    {
     "if": "!flag.fourth_sat",
     "text": "每天天一亮，你都听得见晨祷。起先是一个人的声音，后来成了两个人，再后来换成了一个年轻的。第四十一句始终没有人念。"
    }
   ]
  },
  {
   "if": "is.god && flag.owes_fey_miracle",
   "title": "敲门",
   "text": [
    "愚者亲王来敲过门。他究竟带走了什么，各地说法不一。东坎诺有个村庄，某夜过后全村只会讲真话，如此过了三年。"
   ]
  },
  {
   "if": "is.god && flag.god_held_city",
   "title": "仇神",
   "text": [
    "氏族孩子学会的第一个人类词语是那座城门，第二个便是你的名字。每逢奈拉月 11 日，他们把断链和蘑菇扔进河里，如今还要多扔一个照你模样扎的草人。"
   ]
  },
  {
   "if": "is.immortal",
   "title": "1530 年，那块空地",
   "text": [
    "蓝牙去世时一百零五岁。他想在科琳倒下的地方火化，人们照办了。曾围坐门板桌的人，如今到场的只有你和加莱尔。她回头望着你：“又是我们俩。”"
   ]
  },
  {
   "if": "is.immortal",
   "title": "待收",
   "text": [
    "在死神奈拉特的名册里，你名下依旧空白。每年奈拉月 11 日，巷口总有个红袍人。有人猜他来收你，也有人猜他只想讨口饭。他从未朝你走过来。"
   ]
  },
  {
   "title": "名册",
   "text": [
    "军令下面，这些年添上的姓名{?var.rites >= 6:已经写满了半扇门|到头来也只有寥寥几行}。",
    {
     "if": "flag.korgus_rite || flag.korgus_lake",
     "text": "科尔古斯·杜坎森。"
    },
    {
     "if": "!flag.korgus_rite && !flag.korgus_lake",
     "text": "第一行空着一格，旁边写着“杜坎森，去向见别处”。"
    },
    {
     "if": "flag.urn_buried",
     "text": "军士长，月神之耳，有月亮的晚上。"
    },
    {
     "if": "flag.parents_buried_deep || flag.parents_carried",
     "text": "守昔者夫妇，两个人，一块碑。"
    },
    {
     "if": "!flag.brok_lives",
     "text": "布罗克，红宝石领，铲子留给了车上。"
    },
    {
     "if": "flag.adenn_damesear || flag.adenn_rogier",
     "text": "阿登·天枪。"
    },
    {
     "if": "flag.gurzan_buried",
     "text": "古尔赞·熊心，归尘礼，磨了两天。"
    },
    {
     "if": "visited.end_funeral",
     "text": "最后一行写的是卡斯特洛斯。下面有人添了两个字：事毕。"
    },
    {
     "if": "!visited.end_funeral",
     "text": "最后一行空着。"
    }
   ]
  }
 ]
};
