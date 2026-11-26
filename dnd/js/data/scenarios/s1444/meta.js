// s1444 / meta.js：数据文件。正文按 docs/STYLE_GUIDE.md（第二版）重写过，由 tools/rewrite-apply.mjs 写回。
export const META = {
 "id": "s1444",
 "era": 1444,
 "title": "送神",
 "coin": "金冠",
 "startDate": "1444年奈拉月11日",
 "intro": [
  "灰元 1444 年奈拉月 11 日午后，就在下卡斯托纳斯旧集市边上的一块空地上，科琳和杜坎森同归于尽了。仗是打赢了，可尸首到这会儿还没人去收。",
  "当天晚上，各营的队长找来两只酒桶，架上一扇门板当桌子，围着它一直吵到半夜，吵来吵去只定下了一件事，就是各营出一个人，把这一仗里没人认领的死者都收殓了，收完为止。头一个要收的就是杜坎森，偏偏边区兵想把他挂到城门上去，他儿子想把他抬回去，连死灵法师都已经开过价了。",
  "如今板车上一共搭着五只手，你这一只，是哪个营借出来的？"
 ],
 "tracks": [
  {
   "key": "embers",
   "name": "余烬",
   "desc": "杜坎森是死了，可跟过他的人都还在，这把火到底灭没灭，得看灰里还剩下多少。",
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
   "name": "容身",
   "desc": "兽人和地精在东坎诺到底有没有一块能站住脚的地方。",
   "start": 2,
   "min": 0,
   "max": 10,
   "labels": [
    "见绿就杀",
    "墙根底下",
    "划地而居",
    "同街不同灶",
    "一口锅里吃饭"
   ]
  },
  {
   "key": "unburied",
   "name": "未葬",
   "desc": "东坎诺还有多少死人没入土，又有多少让人拉起来干活去了，这是收尸队自己要算的一笔账。",
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
   "name": "鸽座的太平",
   "desc": "丁香战争一打就是九十五年，直到去年才停下来，这点太平倒是真的，只是垫在它底下的那句话是假的。",
   "start": 6,
   "min": 0,
   "max": 10,
   "labels": [
    "第五场丁香战争",
    "各家磨刀",
    "面和心不和",
    "太平",
    "威克斯说了算"
   ]
  },
  {
   "key": "word",
   "name": "风声",
   "desc": "“诸神之王已经死了”这句话，如今已经传出去多远了。",
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
   "name": "天平",
   "desc": "天上那把椅子要是真空了出来，这架天平会往哪一头倒，一头是长子阿德安，另一头是科琳。",
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
   "desc": "科琳留下来的这些人，如今是蓝牙带兵，多米尼克立教，愚足管着耳目。",
   "start": 0
  },
  {
   "key": "companies",
   "name": "诸团",
   "desc": "东坎诺的十几支冒险团，再加上山底下那些打着探险队旗号的矮人，他们欠着饷，记着仇，不过账还是认的。",
   "start": 0
  },
  {
   "key": "league",
   "name": "旧东坎诺",
   "desc": "伯爵联盟、马尔霍德，还有卡斯托纳斯的那些世家，这儿的房子原本都是他们的。",
   "start": 0
  },
  {
   "key": "clans",
   "name": "氏族",
   "desc": "留在地面上没走的兽人和地精，他们当中有想种地的，也有想再来一回的。",
   "start": 0
  },
  {
   "key": "throne",
   "name": "鸽座",
   "desc": "皇帝、巴兹伍德，还有替威克斯数人头的那些人。",
   "start": 0
  },
  {
   "key": "moon",
   "name": "月党",
   "desc": "达梅里亚的旧部，有流亡在外的，有装聋作哑的，也有手里还握着枪杆的。",
   "start": 0
  },
  {
   "key": "temples",
   "name": "神殿",
   "desc": "摄政王庭各位神的祭司，再算上寄在魔导院名下的那些编年史家。",
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
   "blurb": "你跟着那个红头发的扈从，从血腐阶梯一路打到了卡斯托纳斯，今天她就死在你前头二十步远的地方。可她上回死了才三个时辰就又站起来了，所以今天晚上谁也不肯走。",
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
   "blurb": "西边那场仗你们打输了，大公死在了皇宫里，少主是躺进棺材装成尸首，才逃出帝国的。如今你们在东坎诺替别人收复家乡，皇帝悬的赏格到现在还挂着呢。",
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
   "blurb": "丁香战争是你们打赢的，如今巴兹伍德先生交给你一封信，叫你去数一数卡斯托纳斯有几座门，每座门各在谁手里，至于数完以后怎么办，信上一个字也没写。",
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
   "blurb": "兵团是红宝石领的老字号，替人讨旧账讨了几百年，向来按件收费，玛瑙之门那一笔是记在杜坎森名下的。所以兵团派你来看一眼尸首，看过了好把这一条划掉。",
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
   "blurb": "这二十年，你要么是跟着杜坎森打仗，要么是让他的人拴着。今天午后撤退的号吹响了，你却没赶上城门，手背上的颜色就这么停在了一块绿上，往后再也不会变了。",
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
   "blurb": "那把椅子该谁来坐，谱上都写着呢，凭血统也好，凭遗嘱也好，凭长子也好，哪一样都行，只要是事先说好的。说好了，就用不着每死一个人都打一仗了。",
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
   "blurb": "科琳不过是个扈从，杜坎森更是连氏族都没有，所以说谁能把事情办成，谁就该坐那把椅子，办砸了就下来。这一套兽人叫夺斗，卡斯塔诺人叫试炼。",
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
   "blurb": "东坎诺已经二十年没有国王了，活下来的人都是自己开会，自己立约，自己埋人。椅子可以先空着，空着的时候，谁也用不着下跪。",
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
   "blurb": "科琳出生的那个村子烧掉的那年，她才四岁，人也在村里。",
   "bio": "1424 年东墙起火，有人把她塞进了一辆往西去的粪车，后来她是在阿巴兰的难民营里长大的，在那儿学会了排队，也学会了抢饭。去年她跟着援军打了回来，路过自家的地，竟然没认出来。",
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
   "blurb": "科琳之环里大家公认最没意思的一位，别人当着他的面都会把他的名字叫错。",
   "bio": "他是法拉内安的贵族子弟，样样都会一点，可哪样都不出挑，家没了以后，他带着一营难民在维尔西尔的瓦砾堆里过日子，后来给科琳当过联络人，当过斥候，还当过伙夫。说起来，他写的诗倒比他这个人有名。",
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
   "blurb": "阿德安的随军祭司，给一口空棺材做过全套的葬礼。",
   "bio": "1443 年少主要装死逃出帝国，棺材总得有个祭司来送，于是他一路念着悼词走过了阿巴兰，后头还跟着威克斯的兵。躺在棺材里的那位后来活蹦乱跳的，那场葬礼到底算不算数，他到现在也没想好。",
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
   "blurb": "西尔穆纳学院的学生，书没念完，魔杖是赊来的，戒指进过当铺，后来又赎了回来。",
   "bio": "她父亲是个精灵，从来没露过面，只留给她一身不用学就会的法术。魔杖和戒指是学院教她使的，可城破那年学院停了课，欠她的津贴到现在也没发，她跟着达梅里亚之子，为的就是讨回这笔钱。",
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
   "blurb": "三卫出身的威克斯大剑手，打皇宫那一晚他排在后头，照他的说法是“什么也没看见”。",
   "bio": "1443 年攻打皇宫，他没轮上进王座厅，事后却给叫到花园里挖了一整夜的坑，上头还交代他，你什么也没看见。这句话他照着说了一年，说得连自己都快信了。",
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
   "blurb": "紫庭的公证人，管清点战利品，顺便也清点人。",
   "bio": "她的本行，是别人分赃的时候坐在旁边记数，记完了让各方按手印，巴兹伍德看中了她两样，一是字写得小，二是嘴闭得紧，她看中这趟差事的只有一样，津贴是按天算的。",
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
   "blurb": "负怨者兵团管账的祭司，吃饭的时候也要念账本，一顿饭念一页。",
   "bio": "她供奉的是祖先，而祖先留下来的东西里头，就数账最多，兵团的账本归她背着，足有四十斤重，外头包着油布。她亲手划掉的账只有三笔，每划掉一笔，她就给欠债那家的后人写一封信，告诉他们两清了。",
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
   "blurb": "从汤姆斯桥来的半身人，合同上写的工种是“开锁的”。",
   "bio": "地精挖的洞矮人钻不进去，兵团就照老规矩雇了个半身人。他家三代人都接这种活，传下来一套撬棍和一句话，叫先问清楚谁背你出来。干粮是他自己带的，带了很多。",
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
   "blurb": "嗜血者的狂战士，今天他吼到一半忽然醒了，这才发现自己落在撤退的队伍后头，差了一条街。",
   "bio": "他十六岁那年独个儿猎了一头野猪，喝了血，打那以后一上阵就什么都不记得了。今天午后也是这样，等他醒过来，斧子卡在一扇门上，满街说的全是人话。他的酋长就死在三条街外。",
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
   "blurb": "洞穴地精，给书贩子跑腿的，通用语的字，他认得的比多数骑士还多。",
   "bio": "兽人抢来的书没人要，地精书贩子就论斤收，他替东家跑了八年腿，一路上把货翻了个遍，照着一本缺页的课本学会了三样小法术。今天链子断了，他头一件事就是回去找那本书。",
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
   "blurb": "烂刀氏族出来巡游的年轻人，是来给杜坎森做归尘礼的，其实谁也没请她。她说起骨头来，就跟木匠说木料一样。"
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
   "blurb": "十六岁的小祭司，守着万神道上一座没了屋顶的庙，晨祷一共四十一句，他只念到第四十句。"
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
   "blurb": "地鹰氏族的寻誓者，长着一双黄眼睛，东家是愚者亲王，在她眼里什么都有个价，张口闭口就是“规矩第几条”。"
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
   "blurb": "编年史家，今年四十三岁，在精灵里只能算刚出门，她做什么都不着急，偏爱挑最不合适的时候提问，还问得很准。"
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
   "blurb": "科琳之环的旧人，是个红宝石矮人，他说话就像报账，先说数目，再说事情，最后说年份。"
  }
 },
 "quests": {
  "q_cart": {
   "title": "那道军令",
   "desc": "兹令各营各出一人，收殓此役无人认领之死者，事毕为止。",
   "stages": [
    "把杜坎森弄出城去，给他找个去处。",
    "山底下有人过了期限还没回来，去找找。",
    "帝国有一位还压在花圃底下，去把他请出来。",
    "等妖精的回信，然后去看最后一位。",
    "回卡斯托纳斯。"
   ],
   "doneText": "事毕。这两个字没有人来对你们说，也许你们自己说了，也许没说。"
  },
  "q_dragon": {
   "title": "银龙为什么没有再来",
   "desc": "阿坦托你们出城的时候，顺路替他打听一件事。",
   "stages": [
    "出城的时候顺路打听打听。",
    "有人说他是在生卡斯塔诺的气，再去问问。",
    "井壁上有个名字，把它记下来。",
    "原来是同一位，有两个名字，去找他的神殿。",
    "答案在墙上。"
   ],
   "doneText": "阿坦知道了，往后的晨祷念几句，那是他自己的事。"
  },
  "q_korgus": {
   "title": "没人肯埋的兽人",
   "desc": "杜坎森的尸首就在板车上，有四家出了价，可没有一家是来埋他的。",
   "stages": [
    "赶在天亮前把尸首弄出城。",
    "路上有人盯上了这辆车，把它看住。",
    "定下他的去向。"
   ],
   "doneText": "杜坎森有了去处，把他记进名册，或者给他留一个空格。"
  },
  "q_sightings": {
   "title": "三起银龙现身",
   "desc": "加莱尔照编年史家的悬赏付钱，请你们去查三起“银龙现身”。",
   "stages": [
    "去渔村看看那张“龙皮”。",
    "去蓝宝石望找那个仰着头的老太太。",
    "去焦塔顶上看看那道银光。"
   ],
   "doneText": "三起都不是银龙，加莱尔还是照价付了钱。"
  },
  "q_compact": {
   "title": "城归谁管",
   "desc": "各团就要走了，门板桌上却还剩着一件事没定。",
   "stages": [
    "赶在各团散伙之前，把这座城的事说定。"
   ],
   "doneText": "这座城有了个说法，或者没有。"
  },
  "q_debt": {
   "title": "欠地鹰的那块地",
   "desc": "科琳答应过地鹰氏族，要给他们一块能安生过日子的地，如今她死了，可债没死。",
   "stages": [
    "找一个还肯认这笔账的人。",
    "拿到盖了印的地契。",
    "保住康原。"
   ],
   "doneText": "账清了，妮克西把欠条撕成两半，分了一半给你。"
  },
  "q_ushka": {
   "title": "第十二条",
   "desc": "乌什卡的木签上刻着骑士的规矩，一共十一条。",
   "stages": [
    "问问她，木签上那十一条都是什么。",
    "在山里那五年，她又刻了几道，去看看。",
    "帝国的规矩是先递文书后说话，把这一条教给她。"
   ],
   "doneText": "第十二条是她自己拟的，起先她不肯给你看，后来还是给了。"
  },
  "q_parents": {
   "title": "逾期未归",
   "desc": "加莱尔的父母跟着阿斯拉探险队进了山，过了期限还没回来。",
   "stages": [
    "去问问探险队，他们走的是哪条线。",
    "往交轨大厅找。",
    "去泵房。"
   ],
   "doneText": "守昔者夫妇找到了，数目也对得上。"
  },
  "q_list": {
   "title": "三百一十二条",
   "desc": "贝尔格拉克那份名单，头一条是议会之门，灰前五千八百八十八年的事。",
   "stages": [
    "照着名单走，把人带回来。"
   ],
   "doneText": "他划掉了一条，或者是你把他背出来了。"
  },
  "q_duke": {
   "title": "郁金香底下的大公",
   "desc": "德利安来信说，皇宫花圃底下躺着几位，他心里有数。",
   "stages": [
    "去阿德蕾西娅堡，见见写信的人。",
    "庆典前夜，去第七畦。",
    "定下来手里的东西交给谁，人埋在哪儿。"
   ],
   "doneText": "德利安结了账。"
  },
  "q_door": {
   "title": "有扇门",
   "desc": "妮克西说她东家管着一扇门，他不收钱，收的是别的东西。",
   "stages": [
    "等回信。",
    "九个冬天以后，去敲门。"
   ],
   "doneText": "过去了，回头一看，来路已经看不见了。"
  },
  "q_wall": {
   "title": "诸神之王",
   "desc": "月焰号的航海志上记着天空神殿的方位，从林子里走得通，海路不通。",
   "stages": [
    "过林子。",
    "沿着塞拉河往上走。",
    "看完那面墙。",
    "定下来带什么回去。"
   ],
   "doneText": "出来了，外头已经是 1472 年。"
  },
  "q_southgate": {
   "title": "卡斯托纳斯，又一次",
   "desc": "熊心带着氏族，已经到了白墙南边。",
   "stages": [
    "熊心六日到南门，早做准备。",
    "守南门。",
    "十一日，去那块空地。"
   ],
   "doneText": "仗打完了，这回尸首有人收了。"
  },
  "q_o_corintar": {
   "title": "那截皮带",
   "desc": "它是抬她的时候崩断的。",
   "stages": [
    "决定那截盾带还不还。",
    "会上他们要你出来作证。",
    "她升的到底是谁的天，去墙前头想清楚。"
   ],
   "doneText": "皮带有了去处。"
  },
  "q_o_sons": {
   "title": "有月亮的晚上",
   "desc": "军士长要埋在月神之耳，还得挑个有月亮的晚上。",
   "stages": [
    "军士长的骨灰在你包里，带好它。",
    "少主来信说，别让他父亲给人当旗子。"
   ],
   "doneText": "他到了月神之耳，或者没到。"
  },
  "q_o_wex": {
   "title": "数门的人",
   "desc": "巴兹伍德先生信上说，去数一数卡斯托纳斯有几座门，各在谁手里。",
   "stages": [
    "巴兹伍德先生还等着你的信。",
    "回去述职。"
   ],
   "doneText": "最后一封报告总算有了收信人。"
  },
  "q_o_grudge": {
   "title": "玛瑙之门，1424",
   "desc": "账页上那一条是记在杜坎森名下的，得先验明正身，才能划账。",
   "stages": [
    "验明正身。",
    "把那一条划掉，或者划不了。",
    "跟着兵团自己的远征走一趟。"
   ],
   "doneText": "账本合上了。"
  },
  "q_o_tide": {
   "title": "三条路",
   "desc": "古拉德要种地，阿罗莎要跟科琳的人走，古尔赞要再来一回。",
   "stages": [
    "先活过今晚。",
    "你在火边选了一条路，走下去。"
   ],
   "doneText": "路走到头了。"
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
   "note": "2 级；乌什卡在队。序章里对那个快死的人说了实话。",
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
   "note": "4 级；乌什卡、阿坦、妮克西在队。尸首沉了湖，城没人管。",
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
   "title": "第三幕 · 郁金香底下的大公",
   "note": "6 级；加莱尔入队。贝尔格拉克再没人见过。",
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
   "note": "8 级；九年过去。证据没动，皇后死了，大公埋在月神之耳。",
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
   "note": "10 级；出林，外头是 1472 年。门砌上了，杖放回了神龛。",
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
  "sons_knelt": "达梅里亚之子去那块空地上跪过她",
  "dug_the_pit": "你去年在皇宫花园里挖过那个坑",
  "rogier_spotted": "在桥上认出了罗吉尔，还数了他的人",
  "letter_shown": "亮过巴兹伍德的信",
  "report1_true": "头一只信鸽写的是真话",
  "report1_false": "头一只信鸽写的是假话",
  "knows_underpass": "知道地下通道的水闸在哪儿",
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
  "ushka_warned": "乌什卡说过“第二回我走”",
  "entry_struck": "玛瑙之门那一条划掉了",
  "roll_seen": "看过萨什卷",
  "roll_told": "在会上念了卷子里那句话",
  "morningstar_hint": "知道元老会里有晨星会的人",
  "spirits_heard": "听到了树灵说“银的那位”",
  "shout_answered": "在试炼山上喊过，北要塞有人应",
  "avatar_carleon": "替卡莱昂作过化身的保",
  "avatar_gryf": "替小格里夫作过化身的保",
  "sightings_exposed": "当众抖出了三起现身的底",
  "has_vote": "你在第十次泛神会议上有一票",
  "testimony_hers": "作证：那一下是她自己选的",
  "testimony_host": "作证：功劳在全军",
  "testimony_king": "作证时替阿坦问了“王在哪儿”",
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
  "road_gurzan": "你在火边选了古尔赞的路：再来一回",
  "khug_goblins_out": "把玛瑙之门的地精住户撵了",
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
  "adenn_left": "大公留在了花圃底下",
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
  "rite_done": "头一场丧事办了",
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
  "tan_forced": "逼阿坦照旧宣讲银龙必再临",
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
  "skyking_slur": "“他们的神杀了咱们的王”传开了",
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
  "god_revealed": "头一回当众显了身份",
  "god_tried_raise": "试过让科琳起来",
  "god_shrine": "路边有人给你立了龛",
  "ushka_wary": "乌什卡头一面就防着你",
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
  "god_answered_for_him": "在墙前头替那位应了一声",
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
    "那年冬天的会开到最后，只议定了一件事，就是他确实死了。至于那把椅子往后由谁来坐，大家是有意撇开不议的。",
    "王庭没有改名字，摄政的照旧摄政，只是打那以后人人都明白他们替的是谁了。往后君王加冕，权杖也只搁在一边，谁都不去拿它。",
    "裂教到底还是来了，只是晚了一代人，声势也小了一圈。多米尼克当时也在场，没争到什么，可也说不上输。"
   ]
  },
  "sword": {
   "title": "剑上天",
   "subtitle": "天位无主，科琳以功继之",
   "art": "load_8",
   "text": [
    "东坎诺从此只剩下一个信仰，兽人里头肯向她低头的，自家的灶总算保住了。",
    "西边的神殿却不肯认。“失德之君可逐”这句话一路往西传，偏偏传进了一个皇帝刚死两年的帝国，这一来教战早到了整整一代人，洛朗这样的人手里也多了一本经。",
    "后来有人捧着一顶冠去找蓝牙，他只看了一眼，就叫人原样拿回去了。"
   ]
  },
  "eldest": {
   "title": "长子",
   "subtitle": "王倦勤，长子摄事",
   "art": "ev_adeanic_war",
   "text": [
    "几顶王冠都还好好地戴着，往后谁坐上鸽座，谁头上就有天上盖的印，至于那把椅子当初是怎么坐上去的，再也没有人问了。",
    "科琳塔尔成了王庭里的一个教派，脾气大得很，“反抗的权利”这句话还没等有人写出来，就先给否掉了。"
   ]
  },
  "standing": {
   "title": "军令未撤",
   "subtitle": "贾哈尼克正史里是这样",
   "text": [
    "1490 年，恩德拉尔的船走海路到了阿伦蒂尔，到 1518 年，小册子已经撒得满街都是，至于加莱尔，她这一辈子既没承认过，也没否认过。",
    "古尔赞也好，皮克精之墓也好，鸽座也好，往后各按各的数走，阿坦的晨祷，从此每天念四十句。"
   ]
  },
  "mantle": {
   "title": "卡斯坦的披风",
   "subtitle": "喊一嗓子，有人应",
   "text": [
    "开春，城里有了王法、粮价和巡夜的。誓词里那句“并永说真话”，新朝头一年就兑了现，满城的人都知道了墙上的事。",
    {
     "if": "flag.claimant_kalista",
     "text": "最后戴上冠的是卡莉斯塔·黑塔，伯爵联盟的人头一回在誓石底下站成了一排，各家的旧账就留到明年再算。"
    },
    {
     "if": "flag.claimant_arosha",
     "text": "最后戴上冠的是阿罗莎·伐橡者，两族从此共戴一主，连城门口的告示都用两种话写。"
    },
    "一代人之内，这个国会想起自己从前有多大。帝国那边已经在整军了。"
   ]
  },
  "dookansday": {
   "title": "杜坎之日",
   "subtitle": "奈拉月 11 日，银瀑边",
   "art": "ev_orc_with_axe",
   "text": [
    "他们的理由二十八年来就没变过，凡是试过讲和的氏族，到头来都叫人拴上链子卖掉了。",
    "往后那几年，卡斯托纳斯成了氏族的城，下城的地精坊也头一回把门把手装在了自己够得着的地方。"
   ]
  },
  "fourth": {
   "title": "第四个人选",
   "subtitle": "血统，功劳，空着；还有一个是活的",
   "divine": true,
   "text": [
    {
     "if": "flag.fourth_sat",
     "text": "王庭头一回有了一位待在地上的主人，“摄政”这个词再也没人用了，往后君王加冕，都得你点了头才算数。东坎诺一夜之间有了秩序，帝国呢，一夜之间多了一个它管不了的东坎诺。"
    },
    {
     "if": "flag.fourth_sat",
     "text": "科琳塔尔从此不进万神道，照诏令，神是不该待在地上的，所以西边的神殿一半骂你是僭主，另一半已经动手改经文了。这支队伍二十八年里埋下去的每一位，都压在一把椅子底下，如今坐在椅子上的是你。"
    },
    {
     "if": "flag.fourth_declined && world.scale >= 3",
     "text": "会就照凡人的路数接着往下开，开到开春，多米尼克那边的人多了一倍，那把椅子也跟着往科琳那头歪了过去。"
    },
    {
     "if": "flag.fourth_declined && world.scale <= -3",
     "text": "会就照凡人的路数接着往下开，各殿的主祭当晚就关起门来商量，嘴里说的全是阿德安的名字。"
    },
    {
     "if": "flag.fourth_declined && world.scale > -3 && world.scale < 3",
     "text": "会就照凡人的路数接着往下开，一直吵到开春也没吵出个结果，椅子就这么空着，两边都说是自己让出来的。"
    },
    {
     "if": "flag.fourth_declined",
     "text": "万神道上到底还是给你留了一座龛，虽说你从来没答应过。"
    },
    {
     "if": "flag.fourth_undertaker",
     "text": "王庭里本来就有一位殓神者，叫瓦伊洛科尔，专替奈拉特看着那些入了殓的神，一千年来从没有人问过他殓的是谁。如今这份差事有了第二个人干，往后你抬的每一位，都是你认识的。"
    },
    {
     "if": "!flag.fourth_sat && !flag.fourth_declined && !flag.fourth_undertaker",
     "text": "那把椅子一直空着，帐子里的人等了整整一夜，你既没有坐上去，也没有走。"
    },
    "军令上写的是“事毕为止”。对一个不会死的人，这四个字没有头。"
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
   "title": "{?world.embers <= 3:长者郡的集|第二回}",
   "text": [
    {
     "if": "world.embers <= 3",
     "text": "第二次潮没有来。银现月 4 日的聚会一年比一年像牲口集，到后来干脆就成了牲口集，只是每年到了奈拉月 11 日，艾伦河上照旧漂着断链和蘑菇。"
    },
    {
     "if": "world.embers <= 3 && flag.gurzan_treaty",
     "text": "古尔赞搁在门板桌上的那节断链，后来一直没有人来收走。"
    },
    {
     "if": "world.embers >= 4 && world.embers <= 7",
     "text": "1472 年那一仗，{?flag.arosha_at_table:阿罗莎|蓝牙}砍掉了他的手。{?flag.laurens_stopped:洛朗那只空罐子到底还是没装上东西。|洛朗收了他的魂，装魂的罐子挂在腰上，排在第三个。}嗜血者没过两代人就散了个干净，只剩个名字留下来吓唬小孩。"
    }
   ]
  },
  {
   "if": "world.embers >= 8 && flag.southgate_held",
   "title": "守住了",
   "text": [
    "南门是守住了，可守得很惨，城外的坑前后填了三回才填平。往后三十年，边区兵都不肯跟绿皮的同桌吃饭，就连在一个灶上烧饭也不行。"
   ]
  },
  {
   "title": "{?world.room >= 7:一口锅|皮克精之墓}",
   "text": [
    {
     "if": "world.room <= 2 && !visited.end_sword",
     "text": "1467 年，灰烬玫瑰和马尔霍德把皮克精之墓洗劫了一遍，古拉德带着伤往西走，第二年就让了位。到了 1520 年代，维特斯克的码头上已经在按人头卖兽人，价钱就贴在门口。"
    },
    {
     "if": "(world.room >= 3 && world.room <= 6) || (world.room <= 2 && visited.end_sword)",
     "text": "皮克精之墓没有烧掉，可康原还是丢了。1470 年代灰烬玫瑰来夺地，亏得蓝牙出面保人，地鹰才一家一家迁进了科琳塔尔的地界，那张地契就压在一只木匣子底下。"
    },
    {
     "if": "world.room >= 7",
     "text": "皮克精之墓没有烧掉，城里的歌一路往外传，下城也有了地精坊，坊里每扇门上都装着两个把手，一高一低。"
    }
   ]
  },
  {
   "title": "{?world.unburied >= 7:白骨有价|坟}",
   "text": [
    {
     "if": "world.unburied <= 2",
     "text": "东坎诺的坟后来比村子还多，每一座都有名字，也难怪埃斯蒂尔晚了一代人才成气候，瓦丽娜还老是抱怨找不到料。"
    },
    {
     "if": "world.unburied >= 3 && world.unburied <= 6",
     "text": "洛朗后来成了东坎诺最早的几个巫师王之一，瓦丽娜拿死人去修城墙，还管这个叫节省。"
    },
    {
     "if": "world.unburied >= 7",
     "text": "{?flag.bones_at_gate:南门是靠死人守住的。|东坎诺的死人比活人还好使唤，拉车、垒墙、守夜，一概不要饷。}那年冬天，卡斯托纳斯没有一个人挨饿。铁杖骑士团读了你们带回来的东西，得出的结论是椅子既然空着，有本事的就该去坐。"
    },
    {
     "if": "flag.bilge_graves",
     "text": "安本科斯特舱底区的那排无名坟，后来年年都有人去扫，只是扫坟的人也不知道里头埋的是谁。"
    }
   ]
  },
  {
   "title": "{?world.peace <= 3:第五场|鸽座}",
   "text": [
    {
     "if": "world.peace <= 3",
     "text": "奥坎娜 1467 年就病死了，上马出征的是她儿子奥坎，手里提着母亲留下的那杆断枪。罗吉尔都六十多岁了，还带着兵往西走。阿登总算有了一场配得上他的仗，西坎诺却没有。"
    },
    {
     "if": "world.peace >= 4 && world.peace <= 6",
     "text": "1468 年新任大魔导师行就职礼，西尔加里昂家的法师当场用预言术把王座厅那一晚演了出来。到 1470 年，皇帝中风死了，当选的是珍珠边地的人，没过几年，威克斯就叫人一块一块拆掉了。"
    },
    {
     "if": "world.peace >= 7",
     "text": "那句话始终没叫人戳穿，太平日子多撑了二十年，鸽座也越看越像威克斯家的祖产了。"
    }
   ]
  },
  {
   "if": "world.word >= 3 && world.word <= 6 && visited.end_standing",
   "title": "走漏",
   "text": [
    "等不到 1518 年。先是神殿区的酒馆，后是泰卢姆喊报人，站在桶上一口气报完。",
    {
     "if": "flag.blackbranch_deal",
     "text": "最早把这事讲开的是黑枝亲王的骑士，就在深林边上讲的，一个字都没改。"
    },
    "加莱尔照旧不承认，也不否认。"
   ]
  },
  {
   "if": "flag.korgus_rite || flag.korgus_son || flag.korgus_spike || flag.korgus_sold || flag.korgus_lake || flag.korgus_carver",
   "title": "杜坎森",
   "text": [
    {
     "if": "flag.korgus_rite",
     "text": "死齿给他备过一副新躯体，1452 年叫坚定大队的冒险者给捣毁了，其实就算没人去捣，那里头也凑不出他的一块骨头。乌什卡的木签上又多刻了一道。"
    },
    {
     "if": "flag.korgus_son",
     "text": "1472 年竖在南门外的那面骨旗就是他，古尔赞败了以后，那副骨头该归谁，氏族里又吵了一回。"
    },
    {
     "if": "flag.korgus_spike",
     "text": "人头在白墙的门上挂了三年，掉下来那天也没有人去捡，倒是兽人小孩学会的头一句人话，就是那座门的名字。"
    },
    {
     "if": "flag.korgus_sold",
     "text": "那箱金冠拿去发了三个营的抚恤，可这一来，1452 年斯劳手里拿的就是真货了，坚定大队多死了四十个人，才把它毁掉。"
    },
    {
     "if": "flag.korgus_lake",
     "text": "每年奈拉月 11 日，都有人往银池湖里扔蘑菇，湖边的渔民说，那一天的网特别沉。"
    },
    {
     "if": "flag.korgus_carver",
     "text": "阿祖科尔一雕就是九年，雕完那天他当众宣布，杜坎森的魂已经上路了，氏族上下如今都在等着认一个孩子。"
    },
    {
     "if": "flag.ghost_taken",
     "text": "他的鬼魂关在死语者的罐子里，叫人问了二十年的话。"
    }
   ]
  },
  {
   "if": "flag.compact_league || flag.compact_corintar || flag.compact_free || flag.compact_none",
   "title": "城",
   "text": [
    {
     "if": "flag.compact_none",
     "text": "这座城一直没有人管，直到 1479 年真霜月 17 日，先锋行会才把南城收了回来。"
    },
    {
     "if": "flag.compact_league",
     "text": "黑塔家管收税，世家管巡夜，门板桌后来搬进了北城的一间库房，桌腿底下还垫着两块砖。"
    },
    {
     "if": "flag.compact_corintar",
     "text": "城归科琳塔尔管，城里的孩子都是听着她的歌长大的，巡夜的人盾上个个画着红底的剑。连门板桌也搬进了军团广场，可谁也不敢去坐。"
    },
    {
     "if": "flag.compact_free",
     "text": "城约一年议一回，各团、世家和氏族各出一个人。门板桌呢，还留在那块空地上，门板前后换过七扇，酒桶倒一直是原来那两只。"
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
     "text": "皇后活了下来，威克斯和洛伦特的联姻也就多撑了几年。{?flag.daras_fled:达拉斯跑了，后来有人在塔兰顿见过他，说他在给人缝寿衣。|达拉斯在牢里缝了八年寿衣。}"
    },
    {
     "if": "!flag.empress_saved",
     "text": "皇后死在了三十年庆典上，联姻也就作废了。皇帝随后派人去杀罗吉尔，没杀成，不过罗吉尔从那以后走路就有点偏。"
    }
   ]
  },
  {
   "if": "flag.proof_bardswood || flag.proof_moon || flag.proof_published || flag.proof_kept",
   "title": "那个窟窿",
   "text": [
    {
     "if": "flag.proof_bardswood",
     "text": "巴兹伍德把蜡模锁进了抽屉，钥匙就挂在自己脖子上，那只抽屉他后来一直没打开过，蜡模也一直没扔。"
    },
    {
     "if": "flag.proof_moon",
     "text": "奥坎娜把那张口供钉在了帐子里，正对着床，每天早上一起来就先看它一眼。"
    },
    {
     "if": "flag.proof_published",
     "text": "满帝国的酒馆里都有人在比划那一刀，说是从后往前捅的，用的是窄刃，只是说书的越比划，那把刀就越长。"
    },
    {
     "if": "flag.proof_kept",
     "text": "证据一直压在你们车上没动，到了 1468 年，倒是有人替你们当着众人说了出来。"
    }
   ]
  },
  {
   "if": "flag.adenn_damesear || flag.adenn_rogier || flag.adenn_left",
   "title": "大公的坟",
   "text": [
    {
     "if": "flag.adenn_damesear",
     "text": "月神之耳的山坡上有块没刻字的石头，一到有月亮的晚上，就会有人在那儿放上一枝郁金香。"
    },
    {
     "if": "flag.adenn_rogier",
     "text": "塔兰顿城堡里多了一座龛，罗吉尔每天从那儿经过都要停一停，有时候就站在那儿看兵书。"
    },
    {
     "if": "flag.adenn_left",
     "text": "皇宫的花圃里新栽了郁金香，是红的。德利安是叫人刺死的，他死前到底见没见着这些花，各人说法不一。"
    }
   ]
  },
  {
   "if": "flag.belgrak_lost || flag.belgrak_saved || flag.belgrak_struck",
   "title": "名单",
   "text": [
    {
     "if": "flag.belgrak_lost",
     "text": "贝尔格拉克从此再也没人见过，雷萨格打那以后绝口不提这个名字，谁提他就跟谁急。"
    },
    {
     "if": "flag.belgrak_saved",
     "text": "1475 年玛瑙之门重立的那天，贝尔格拉克也到场了，他坐在最后一排，手里攥着那份名单，上头三百一十二条，他一条也没去讨。"
    },
    {
     "if": "flag.belgrak_struck",
     "text": "账本上头一回有人划掉了自家的一条，兵团里有一半人从此不认他，他倒也不在乎。"
    },
    {
     "if": "flag.belgrak_struck_by_god",
     "text": "兵团里的说法是，那一笔是神按着他的手划下去的，他回了红宝石领以后，就再也没碰过账本。"
    }
   ]
  },
  {
   "if": "flag.wall_sealed || flag.wall_defaced || flag.wall_rubbed",
   "title": "那面墙",
   "text": [
    {
     "if": "flag.wall_sealed",
     "text": "1490 年以后，总会有人找到那扇门，门是从外头砌上的，砌得规规矩矩。"
    },
    {
     "if": "flag.wall_defaced",
     "text": "后来的人只看得出最后一幅叫人凿过，凿的人显然是不想让谁知道点什么，结果反倒人人都在猜。"
    },
    {
     "if": "flag.wall_rubbed",
     "text": "拓片一共四张纸，{?visited.end_funeral:收在万神道那座庙的供桌底下|收在一只樟木箱子里}，边上还压着石头。"
    }
   ]
  },
  {
   "if": "flag.staff_home || flag.staff_returned || flag.staff_fey",
   "title": "那根杖",
   "text": [
    {
     "if": "flag.staff_home && flag.staff_to_dominic",
     "text": "断杖落在了多米尼克手里，他拿着它主持过许多场礼，可一回也没拄过。"
    },
    {
     "if": "flag.staff_home && flag.staff_to_temples",
     "text": "断杖收进了神殿的库房，登记的时候写的名目是“来历待考”。"
    },
    {
     "if": "flag.staff_home && !flag.staff_to_dominic && !flag.staff_to_temples",
     "text": "{?visited.end_funeral:断杖横放在那张空台子上，后来再也没人拿起来过。|断杖一直搁在板车上，压着别的东西。}"
    },
    {
     "if": "flag.staff_returned",
     "text": "断杖放回了神龛，神龛前头照旧有人来供贝珠，供的人并不知道它出过一趟远门。"
    },
    {
     "if": "flag.staff_fey",
     "text": "断杖如今在愚者亲王的宫里，听说妖精们拿它当门闩用，倒是挺合适。"
    }
   ]
  },
  {
   "if": "met.ushka",
   "title": "{?party.ushka:锤子|罐子}",
   "text": [
    {
     "if": "party.ushka",
     "text": "乌什卡回了烂刀氏族，把巡游的规矩教了三十年，轮到她自己做归尘礼的时候，是徒弟动的手，磨了两天。"
    },
    {
     "if": "!party.ushka && world.unburied >= 5",
     "text": "洛朗的架子上多了一只罐子，罐口的蜡封上压着一枚兽人的指印。"
    },
    {
     "if": "!party.ushka && world.unburied <= 4",
     "text": "洛朗少了一只手，剑之誓约的人说，那是叫一个兽人女人砍掉的，砍完她还把那只手磨成了粉。"
    }
   ]
  },
  {
   "if": "met.tan",
   "title": "阿坦",
   "text": [
    {
     "if": "flag.tan_told",
     "text": "1520 年开了第十一次泛神会议，或者说是它在这条线上的替身。会上有人问他，神都死了，你怎么不难过呢？他说：我早就难过过了，比你们早了大半辈子。"
    },
    {
     "if": "flag.tan_morningstar",
     "text": "他把第四十一句改了，改成了求另一位，至于有没有回音，没有人敢问。"
    },
    {
     "if": "flag.tan_stayed",
     "text": "1490 年，恩德拉尔的人在林子边上遇见一个老头，说的是坎诺话，他先问今年是哪一年，接着又问卡斯托纳斯那座庙的屋顶修上了没有。"
    },
    {
     "if": "!flag.tan_told && !flag.tan_morningstar && !flag.tan_stayed",
     "text": "1520 年，会上终于有人把那句话说了出来，后排坐着一位东坎诺口音的老祭司，听完松了一口气。他的晨祷已经念了七十多年，每天四十句。"
    }
   ]
  },
  {
   "if": "met.nixee",
   "title": "{?flag.toll_nixee:傻子|欠条}",
   "text": [
    {
     "if": "flag.toll_nixee",
     "text": "在深林里迷了路的人，有时候会莫名其妙地走出来，手里还多了一张树皮，上头写着价钱。"
    },
    {
     "if": "!flag.toll_nixee && visited.end_dookansday",
     "text": "妮克西带着地精先走了一步，规矩第一条本来就是活着。"
    },
    {
     "if": "!flag.toll_nixee && !visited.end_dookansday",
     "text": "康原{?world.room >= 6:保住了，她成了地鹰头一个跟人类签约没吃亏的人|还是丢了，她把地契折成小方块，塞进了鞋里}。她还给氏族立了规矩第一千条，说的是跟人类签约之前，先看看对方埋不埋自己的死人。"
    }
   ]
  },
  {
   "if": "met.garaele",
   "title": "{?flag.garaele_left:不承认，也不否认|1802 年冬}",
   "text": [
    {
     "if": "flag.garaele_left",
     "text": "加莱尔回了月山，往后三百年里，不时有人问起她那面墙的事，她既不承认，也不否认。"
    },
    {
     "if": "!flag.garaele_left",
     "text": "1802 年冬天，加莱尔死在安本科斯特，屋里堆的全是纸，遗稿里有一页只写了一个日期，是 1472 年奈拉月 11 日。{?visited.end_standing:日期下面是空的。|日期下面写得满满的，字很小，署名排在最后。}"
    }
   ]
  },
  {
   "if": "origin == 'corintar'",
   "title": "那截皮带",
   "text": [
    {
     "if": "item.shield_strap && visited.end_sword",
     "text": "那截盾带后来成了圣物，装在玻璃匣子里，就摆在她倒下的那块空地边上，皮子上的铆钉孔有人数过，一共两个。"
    },
    {
     "if": "item.shield_strap && !visited.end_sword",
     "text": "那截盾带你一直带在身上，皮子都磨得发亮了，你死的时候，照你的意思拿它陪了葬。"
    },
    {
     "if": "!item.shield_strap",
     "text": "那截盾带早就不在你手里了，它后来去了哪儿，你打听过两回，都没问出来。"
    }
   ]
  },
  {
   "if": "origin == 'sons'",
   "title": "那顶王冠",
   "text": [
    "1473 年罗吉尔死了。旧部把王冠递给蓝牙，蓝牙没接，他大儿子也没接。",
    {
     "if": "flag.f_crown_yes",
     "text": "递冠的人里头有你，你双手捧着它进了蓝牙的帐子，又双手捧着它出来了。"
    },
    {
     "if": "flag.f_crown_no",
     "text": "递冠的人里头没有你，这件事你是在塔兰顿的城门外头听说的。"
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
     "text": "最后一封报告{?var.honest_reports > var.false_reports:写的是实话|写得很好看}，也寄到了。巴兹伍德活到了 1609 年，那封信他一直收在抽屉里，跟别的信分开放着。"
    },
    {
     "if": "flag.f_report_clerk",
     "text": "最后一封报告钉在了旧集市的告示板上，叫雨泡烂了，后来又有人抄了三回。巴兹伍德活到了 1609 年，这一份他是从别人的信里读到的。"
    },
    {
     "if": "flag.f_report_burned",
     "text": "最后一封报告烧掉了，巴兹伍德活到了 1609 年，这封信他等过，后来也就不等了。"
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
    "账本上玛瑙之门的那一页，{?flag.entry_struck:已经划掉了，旁边签着你的名字|还留着，背面添了一行小字}。1475 年，那座堡又有了主人。"
   ]
  },
  {
   "if": "origin == 'tide'",
   "title": "手背",
   "text": [
    "手背上还是那块绿。",
    {
     "if": "flag.road_ghurad",
     "text": "你跟着古拉德种地去了，头一年的麦子叫雹子打了，好在第二年有了收成。"
    },
    {
     "if": "flag.road_arosha",
     "text": "你跟了阿罗莎，在林木之墙上站过岗，墙那边的人后来都管你叫邻居。"
    },
    {
     "if": "flag.road_gurzan",
     "text": "你走的是古尔赞那条路，一直走到了头，可路的尽头并没有人等你。"
    }
   ]
  },
  {
   "if": "faction == 'heirs'",
   "title": "谱",
   "text": [
    "谱上没写的那些事，后来有人给补上了，补的那一笔你认还是不认，从来没人来问过你。"
   ]
  },
  {
   "if": "faction == 'tried'",
   "title": "应声",
   "text": [
    "喊一嗓子，有人应了就算数，那天应声的人里头，有几个是冲着你来的，你自己数过。"
   ]
  },
  {
   "if": "faction == 'crownless'",
   "title": "空椅子",
   "text": [
    "椅子空着的那些年，头一个想坐上去的是晨星会。{?flag.southgate_held:你们把他们拦住了，只是拦得不大好看。|谁也没能拦住他们。}"
   ]
  },
  {
   "if": "is.god",
   "title": "多一座龛",
   "text": [
    "万神道上给你留了位置。香火钱归谁，各殿吵了三年。你自己去旁听过一回，坐在最后一排，没人认出来。",
    {
     "if": "flag.god_faked_dragon",
     "text": "蓝宝石望的那座塔如今成了朝圣的地方，墙上刻着“银龙于此再临”，阿坦每回路过，从来不进去。"
    }
   ]
  },
  {
   "if": "is.god",
   "title": "多米尼克的问题",
   "text": [
    "他都九十多岁了，还在问你跟她到底是什么关系，你每回答得都不一样，他每回都照样记下来，前前后后记了四本。"
   ]
  },
  {
   "if": "is.god",
   "title": "收尸的神",
   "text": [
    "守在板车边上的还是你，乌什卡管这个叫浪费，她说一个死不了的人，偏偏学了一身埋人的手艺。"
   ]
  },
  {
   "if": "is.god",
   "title": "诏令",
   "text": [
    "各殿把经文翻了三年，就为了查“神不得亲临”那一条，查到最后分成了两派，一派说你算不上神，另一派说立诏的那位自己都不在了，这诏还算不算数呢。两派都请你去作证，你也去了，结果两派都不满意。"
   ]
  },
  {
   "if": "is.god",
   "title": "第三百一十三条",
   "text": [
    "红宝石领的账本上有一条怎么也划不掉，写的是“某神，玛瑙之门，一四二四，未到”。{?flag.entry_313:那行字是贝尔格拉克的亲笔。|那行字是后来管账的人补记的。}",
    "每一任管账的都来问过，这一条能不能勾销，得到的答复回回一样，欠债的还在，账就在。"
   ]
  },
  {
   "if": "is.god && (flag.fourth_sat || flag.god_answered_for_him)",
   "title": "晨祷",
   "text": [
    {
     "if": "flag.fourth_sat",
     "text": "阿坦活到了九十多岁，他每天早上都在你的座位底下念晨祷，念四十句还是四十一句，要看当年你是怎么答他的。他死的那天，你听见他念到一半就停了。"
    },
    {
     "if": "!flag.fourth_sat",
     "text": "每天天一亮，你都听得见，起先是一个人的声音，后来成了两个人，再后来换成了一个年轻的，只是第四十一句始终没有人念。"
    }
   ]
  },
  {
   "if": "is.god && flag.owes_fey_miracle",
   "title": "敲门",
   "text": [
    "愚者亲王已经来敲过门了。他要走的到底是什么，各地说法不一，东坎诺倒是有个村子，一夜之间人人都只会说实话了，一说就是三年。"
   ]
  },
  {
   "if": "is.god && flag.god_held_city",
   "title": "仇神",
   "text": [
    "氏族的孩子学会的头一个人类词还是那座门的名字，第二个就是你的名字。每年奈拉月 11 日，他们照旧往河里扔断链和蘑菇，如今还要多扔一样东西，是个草扎的人，扎的就是那个不会死的。"
   ]
  },
  {
   "if": "is.immortal",
   "title": "1530 年，那块空地",
   "text": [
    "蓝牙死了，活了一百零五岁。照他的意思，尸首是在她倒下的那块空地上烧的。当年围着门板桌坐过的人，到场的只剩下你和加莱尔了。她看了看你，说：又是咱们俩。"
   ]
  },
  {
   "if": "is.immortal",
   "title": "待收",
   "text": [
    "奈拉特的名册上，你那一行一直空着。每年奈拉月 11 日，巷子口都站着个穿红袍的，有人说他是来收账的，也有人说是来讨饭的，可他从来不走过来，到头来谁也没能证明什么。"
   ]
  },
  {
   "title": "名册",
   "text": [
    "那道军令底下，这些年添上去的名字，{?var.rites >= 6:写满了半扇门|一共没几行}。",
    {
     "if": "flag.korgus_rite || flag.korgus_lake",
     "text": "科尔古斯·杜坎森。"
    },
    {
     "if": "!flag.korgus_rite && !flag.korgus_lake",
     "text": "头一行空着一格，旁边写着“杜坎森，去向见别处”。"
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
     "text": "最后一行写的是卡斯特洛斯，底下有人添了两个字，事毕。"
    },
    {
     "if": "!visited.end_funeral",
     "text": "最后一行空着。"
    }
   ]
  }
 ]
};
