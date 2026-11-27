// 出身背景。格式见 docs/DATA_GUIDE.md：{ id, name, short, desc, profs: [两项技能], tags }。
// 三个年代都能选；era 是这个背景在那一年的样子，一句话（引擎目前不读，留给建角界面和写剧情的人看）。en 是英文名，引擎不读。
// tags 只用这一组：noble soldier scholar faithful criminal commoner merchant sailor wanderer performer worker mage_trained sellsword。
// soldier 和 scholar 两个 id 有剧本在用，别改。

export const BACKGROUNDS = {
  noble: {
    id: 'noble', name: '贵族', en: 'Noble',
    short: '熟识纹章和宫廷礼数',
    desc: '你出身有封地的家庭，从小学认族谱、辨纹章，也知道宴会上怎样得体地回绝一个人。家业也许衰落了，姓氏仍能替你敲开一些门。',
    profs: ['history', 'persuasion'], tags: ['noble'],
    era: {
      1022: '术士王战争把各国的封地重划了一遍，新贵和旧家都抢着跟精灵结亲。',
      1444: '帝国的诸侯、洛伦特的酒爵，或者东坎诺丢了封地的流亡世家。',
      1836: '头衔还在，田租不够花了。有的进了议会，有的把姓氏借给公司当招牌。',
    },
  },
  squire: {
    id: 'squire', name: '骑士扈从', en: "Knight's Squire",
    short: '曾侍奉骑士，熟悉骑士团的规矩',
    desc: '十来岁起，你就跟着骑士喂马、擦甲、背誓词。你也曾盼着有一天轮到自己跪下受封。',
    profs: ['athletics', 'animal'], tags: ['noble', 'soldier'],
    era: {
      1022: '跟的是各国新封的骑士。阿德蕾西娅骑士团此时尚未成立。',
      1444: '可以是阿德蕾西娅骑士团的扈从，也可以是哪位边区领主手下的。',
      1836: '骑兵学校的士官生，或者守着老规矩的骑士团里最后几个扈从。',
    },
  },
  soldier: {
    id: 'soldier', name: '老兵', en: 'Soldier',
    short: '当过兵，熟悉军中号令',
    desc: '你在行伍中待过几年，听得懂号令，在泥地上也能入睡。军饷迟发时，你知道先去哪里打听。',
    profs: ['athletics', 'intimidation'], tags: ['soldier'],
    era: {
      1022: '打过术士王战争，或者是卡斯塔诺军团散下来的人。',
      1444: '紫丁香战争的老兵，或者从绿潮里活着退下来的。',
      1836: '列队放排枪的步兵。年纪大些的，在黑火药叛乱里站过队。',
    },
  },
  sellsword: {
    id: 'sellsword', name: '冒险团佣兵', en: 'Company Sellsword',
    short: '随佣兵队按契约办事',
    desc: '你跟着冒险团或佣兵队护过商队，清过洞穴，也替人打过仗。结清报酬时，你见过的欠条比现钱多。',
    profs: ['perception', 'survival'], tags: ['sellsword', 'wanderer'],
    era: {
      1022: '替诸侯清剿术士王的残部，按人头领赏。',
      1444: '东坎诺到处贴着“招募冒险者”的告示，冒险团一支接一支往里开。',
      1836: '殖民公司的护卫、矿主雇的枪手，或者还挂着老字号的冒险团。',
    },
  },
  scholar: {
    id: 'scholar', name: '学者', en: 'Scholar',
    short: '读得懂古字，认得出旧抄本',
    desc: '你在学院、神殿或一位老先生门下读过多年书。你能辨认古字，推断抄本的年代，和人争论时往往记得原文写在哪一页。',
    profs: ['arcana', 'history'], tags: ['scholar'],
    era: {
      1022: '书多半是精灵先生带来的，或者从卡斯塔诺的废墟里捡的。',
      1444: '魔导院、各地的学院和编年史家会都养着读书人。',
      1836: '大学里的讲师，或者揭秘学会的会员。',
    },
  },
  acolyte: {
    id: 'acolyte', name: '神殿侍祭', en: 'Temple Acolyte',
    short: '在神殿受教，熟悉仪式',
    desc: '你在神殿里点灯、扫地、抄经，也替人写过家信。不论自己如今信到什么程度，祭仪的规矩你总还记得。',
    profs: ['religion', 'insight'], tags: ['faithful'],
    era: {
      1022: '摄政王庭的神殿。月歌者穆纳斯才死了九年。',
      1444: '摄政王庭的神殿。东坎诺已经有人在拜刚战死的科琳。',
      1836: '摄政王庭、科琳教、揭秘教会三家并立，各有各的侍祭。',
    },
  },
  criminal: {
    id: 'criminal', name: '黑道', en: 'Criminal',
    short: '熟悉走私、销赃和收账的门路',
    desc: '你靠私下的买卖度日，也许经手过赃物，也许替人收过账。比起城里的规章，你更熟悉哪些门在夜里还开着。',
    profs: ['stealth', 'deception'], tags: ['criminal'],
    era: {
      1022: '半身人飞贼“影手”芬尼克刚成了传奇，学他的人不少。',
      1444: '东坎诺的地精窝棚、矮人垄断集团的打手、各港口的私货贩子。',
      1836: '垄断集团洗白了一半，剩下一半还干老本行。',
    },
  },
  sailor: {
    id: 'sailor', name: '水手', en: 'Sailor',
    short: '在船上干过活，熟悉各处港口',
    desc: '你爬得上桅杆，也能赶在风变之前收帆。靠岸时，无论想找熟人还是还酒钱，你都知道该进哪家店。',
    profs: ['athletics', 'perception'], tags: ['sailor', 'commoner'],
    era: {
      1022: '跑达梅斯海德和迪文哈尔海的商船。格鲁迪亚的掠袭船还在沿岸抢。',
      1444: '跑的还是坎诺沿岸。阿伦蒂尔要再过四十六年才有人找到。',
      1836: '汽船和飞艇都有了，远洋航线一直通到阿伦蒂尔和东洲。',
    },
  },
  merchant: {
    id: 'merchant', name: '行商', en: 'Merchant',
    short: '熟悉货价和商路',
    desc: '你经营过铺面，或是随商队跑过长途。哪里羊毛便宜，哪个关卡会多收费，你记得比账本还清楚。',
    profs: ['persuasion', 'insight'], tags: ['merchant'],
    era: {
      1022: '跑达梅斯海德沿岸的集市，路上要过的关卡比城还多。',
      1444: '月神之冠的商人、比佩克的半身人行会、布勒瓦尔的城邦巨商。',
      1836: '商行、交易所和殖民公司的股东。',
    },
  },
  artisan: {
    id: 'artisan', name: '行会匠人', en: 'Guild Artisan',
    short: '在行会学过一门手艺',
    desc: '你做过学徒，出师后在行会挂了名。别人看成品的样式，你先看接缝，那是师傅当年教你的。',
    profs: ['sleight', 'investigation'], tags: ['worker', 'commoner'],
    era: {
      1022: '城里的行会刚成气候，好手艺多半还攥在矮人和精灵手里。',
      1444: '各城的行会。最时兴的一行是尼姆斯科德传出来的奇械。',
      1836: '机器抢了一半的活，剩下的匠人做的是机器做不了的细活。',
    },
  },
  farmer: {
    id: 'farmer', name: '庄户人', en: 'Farmer or Herder',
    short: '懂农事，也会照料牲畜',
    desc: '你在田地或牧场长大，会替母牛接生，也能从云色看出天气。离家时，也许是田已经没了，也许是留下的地不够一家人分。',
    profs: ['animal', 'nature'], tags: ['commoner', 'worker'],
    era: {
      1022: '给领主交租的佃户。仗打完了，回来的人发现地界变了。',
      1444: '西边的佃户，或者从东坎诺逃出来的难民。',
      1836: '小人国和伦瑟诺的大田庄。年轻人一批批往城里的工厂走。',
    },
  },
  hunter: {
    id: 'hunter', name: '猎户', en: 'Hunter or Outlander',
    short: '在荒野靠狩猎维生',
    desc: '你能辨足迹、设陷阱，独自在野外过冬。真进了城，挤在一条人多的街上，反倒比在林里更容易迷路。',
    profs: ['survival', 'stealth'], tags: ['wanderer', 'commoner'],
    era: {
      1022: '深林旁边的猎户都知道，五年前有一整支精灵军队走进去，再没出来。',
      1444: '深林和蛇脊山的向导最抢手，带路的价钱一年一涨。',
      1836: '替护路队当向导，或者在阿伦蒂尔的林子里替殖民地探路。',
    },
  },
  entertainer: {
    id: 'entertainer', name: '卖艺人', en: 'Entertainer or Skald',
    short: '靠演出维持生计',
    desc: '唱歌、说书、翻跟头，只要能挣到饭钱，你都肯上台。每到一个新地方，先得弄清楚台下哪位听不得别人开他的玩笑。',
    profs: ['performance', 'acrobatics'], tags: ['performer', 'wanderer'],
    era: {
      1022: '格鲁迪亚的吟游诗人，或者唱术士王战争的游方歌手。',
      1444: '侏儒的戏班、洛伦特的游吟诗人、卡德斯特的说书人。',
      1836: '剧院、歌厅和巡回马戏。走红的演员会上报纸。',
    },
  },
  urchin: {
    id: 'urchin', name: '街头孤儿', en: 'Urchin',
    short: '在街巷里独自长大',
    desc: '你很早就得靠自己。哪家后门不上锁，哪名巡丁肯收钱，哪一位绝不能招惹，你在巷子里学得一清二楚。',
    profs: ['sleight', 'stealth'], tags: ['commoner', 'criminal'],
    era: {
      1022: '仗打完留下的孤儿，各城的神殿收不过来。',
      1444: '东坎诺的难民孩子挤在西边各城的墙根下。',
      1836: '工厂区的野孩子，卖报、擦鞋、掏兜。',
    },
  },
  pilgrim: {
    id: 'pilgrim', name: '朝圣者', en: 'Hermit or Pilgrim',
    short: '因信仰或誓愿远行',
    desc: '也许你为还愿、赎罪或寻找答案踏上旅程，也许曾在山中独居。路走得久了，自然学会辨认草药、处理跌伤。',
    profs: ['medicine', 'survival'], tags: ['faithful', 'wanderer'],
    era: {
      1022: '摄政王庭各位神的大神殿，一座一座拜过去。',
      1444: '有人往卡斯托纳斯走，去看科琳倒下的地方。',
      1836: '揭秘教的信徒去看神之碎片。老派的还走老路。',
    },
  },
  apprentice: {
    id: 'apprentice', name: '法师学徒', en: "Mage's Apprentice",
    short: '在法师门下学过本领',
    desc: '你略有天分，曾替师傅誊抄咒文、洗烧瓶。师傅桌上的东西不能乱碰，师傅写下的算式却值得再验一遍。',
    profs: ['arcana', 'investigation'], tags: ['mage_trained', 'scholar'],
    era: {
      1022: '还没有魔导院。师傅是宫廷法师，或者刚上岸的精灵。人人都怕再出一个术士王。',
      1444: '魔导院的学生，或者哪座法师塔里的学徒。',
      1836: '1810 年法师贵族倒了台。各国对法术有的捧、有的禁，学徒得先看清自己在哪国。',
    },
  },
  miner: {
    id: 'miner', name: '矿工', en: 'Miner or Hold-worker',
    short: '在矿井里工作过',
    desc: '你下过矿井，或在矮人的地下山堡做过工。岩石偶尔也会响。什么时候可以继续干活，什么时候得喊人撤，你听得出来。',
    profs: ['athletics', 'nature'], tags: ['worker', 'commoner'],
    era: {
      1022: '替矮人或者领主挖银、挖铁。山更深的地方不归人管。',
      1444: '矮人招人回蛇脊山清理旧山堡，工钱高，抚恤也高。',
      1836: '煤矿和魔晶矿，一班十二小时。',
    },
  },
  laborer: {
    id: 'laborer', name: '做工的', en: 'Workshop or Factory Hand',
    short: '靠作坊或码头上的日薪生活',
    desc: '作坊、码头或工厂都请过你。手上的茧是干活留下的，看工头脸色的本领也是。',
    profs: ['athletics', 'sleight'], tags: ['worker', 'commoner'],
    era: {
      1022: '磨坊、码头和领主工地上的短工。',
      1444: '行会作坊里的帮工，或者港口的搬运。',
      1836: '工厂里按钟点上工的工人，也许还入了工会。',
    },
  },
  scribe: {
    id: 'scribe', name: '笔杆子', en: 'Scribe, Clerk or Reporter',
    short: '替人写信、记账或拟状子',
    desc: '你写字快，也懂得追问细节。账目、诉状和家信经你的手落到纸上，往往也把旁人没察觉的事留在了你心里。',
    profs: ['investigation', 'insight'], tags: ['scholar', 'commoner'],
    era: {
      1022: '领主或者神殿的书记。一个村里可能只有你识字。',
      1444: '衙门的文书、公证人，或者替编年史家会抄录的。',
      1836: '报馆的访员，电报局和公司里的书记。',
    },
  },
};
