// 出身背景。格式见 docs/DATA_GUIDE.md：{ id, name, short, desc, profs: [两项技能], tags }。
// 三个年代都能选；era 是这个背景在那一年的样子，一句话（引擎目前不读，留给建角界面和写剧情的人看）。en 是英文名，引擎不读。
// tags 只用这一组：noble soldier scholar faithful criminal commoner merchant sailor wanderer performer worker mage_trained sellsword。
// soldier 和 scholar 两个 id 有剧本在用，别改。

export const BACKGROUNDS = {
  noble: {
    id: 'noble', name: '贵族', en: 'Noble',
    short: '有姓氏，有纹章，有人伺候',
    desc: '生在有封地的人家，从小学的是谱系、礼数和怎么不动声色地让人下不来台。家里未必有钱，名字还值几个钱。',
    profs: ['history', 'persuasion'], tags: ['noble'],
    era: {
      1022: '术士王战争把各国的封地重划了一遍，新贵和旧家都抢着跟精灵结亲。',
      1444: '帝国的诸侯、洛伦特的酒爵，或者东坎诺丢了封地的流亡世家。',
      1836: '头衔还在，田租不够花了。有的进了议会，有的把姓氏借给公司当招牌。',
    },
  },
  squire: {
    id: 'squire', name: '骑士扈从', en: "Knight's Squire",
    short: '替骑士牵马、擦甲、挨头一刀',
    desc: '十来岁就跟着一位骑士，喂马、擦甲、背誓词，等着哪天轮到自己受封。',
    profs: ['athletics', 'animal'], tags: ['noble', 'soldier'],
    era: {
      1022: '跟的是各国新封的骑士。阿德蕾西娅骑士团这时候还没影。',
      1444: '可以是阿德蕾西娅骑士团的扈从，也可以是哪位边区领主手下的。',
      1836: '骑兵学校的士官生，或者守着老规矩的骑士团里最后几个扈从。',
    },
  },
  soldier: {
    id: 'soldier', name: '老兵', en: 'Soldier',
    short: '打过仗，领过饷，埋过人',
    desc: '在队伍里待过几年，认得号令，睡得惯泥地，知道饷银总是晚到。',
    profs: ['athletics', 'intimidation'], tags: ['soldier'],
    era: {
      1022: '打过术士王战争，或者是卡斯塔诺军团散下来的人。',
      1444: '紫丁香战争的老兵，或者从绿潮里活着退下来的。',
      1836: '列队放排枪的步兵。年纪大些的，在黑火药叛乱里站过队。',
    },
  },
  sellsword: {
    id: 'sellsword', name: '冒险团佣兵', en: 'Company Sellsword',
    short: '认合同，不认旗',
    desc: '跟过一支冒险团或者佣兵队，按合同干活：清洞子、护商队、替人打仗。散伙的时候分到手的多半是欠条。',
    profs: ['perception', 'survival'], tags: ['sellsword', 'wanderer'],
    era: {
      1022: '替诸侯清剿术士王的残部，按人头领赏。',
      1444: '东坎诺到处贴着“招募冒险者”的告示，冒险团一支接一支往里开。',
      1836: '殖民公司的护卫、矿主雇的枪手，或者还挂着老字号的冒险团。',
    },
  },
  scholar: {
    id: 'scholar', name: '学者', en: 'Scholar',
    short: '读过书，也信书',
    desc: '在学院、神殿或者哪位老先生的书房里读了好些年书。认得古字，分得清抄本的年头，吵架爱引出处。',
    profs: ['arcana', 'history'], tags: ['scholar'],
    era: {
      1022: '书多半是精灵先生带来的，或者从卡斯塔诺的废墟里捡的。',
      1444: '魔导院、各地的学院和编年史家会都养着读书人。',
      1836: '大学里的讲师，或者揭秘学会的会员。',
    },
  },
  acolyte: {
    id: 'acolyte', name: '神殿侍祭', en: 'Temple Acolyte',
    short: '扫过神殿，背过祷词',
    desc: '在神殿里长大，或者半路投进去的。点灯、扫地、抄经、替人写家信。信得深不深是另一回事，规矩是熟的。',
    profs: ['religion', 'insight'], tags: ['faithful'],
    era: {
      1022: '摄政王庭的神殿。月歌者穆纳斯才死了九年。',
      1444: '摄政王庭的神殿。东坎诺已经有人在拜刚战死的科琳。',
      1836: '摄政王庭、科琳教、揭秘教会三家并立，各有各的侍祭。',
    },
  },
  criminal: {
    id: 'criminal', name: '黑道', en: 'Criminal',
    short: '走私、销赃、不走正门',
    desc: '吃的是见不得光的饭：夹带私货、替人销赃、收账，或者只是认得该认得的人。蹲没蹲过牢看运气。',
    profs: ['stealth', 'deception'], tags: ['criminal'],
    era: {
      1022: '半身人飞贼“影手”芬尼克刚成了传奇，学他的人不少。',
      1444: '东坎诺的地精窝棚、矮人垄断集团的打手、各港口的私货贩子。',
      1836: '垄断集团洗白了一半，剩下一半还干老本行。',
    },
  },
  sailor: {
    id: 'sailor', name: '水手', en: 'Sailor',
    short: '认得绳结、风向和酒价',
    desc: '在船上干过几年，爬桅杆、收帆、擦甲板。每个港口都有熟人，也都有欠着的酒账。',
    profs: ['athletics', 'perception'], tags: ['sailor', 'commoner'],
    era: {
      1022: '跑达梅斯海德和迪文哈尔海的商船。格鲁迪亚的掠袭船还在沿岸抢。',
      1444: '跑的还是坎诺沿岸。阿伦蒂尔要再过四十六年才有人找到。',
      1836: '汽船和飞艇都有了，远洋航线一直通到阿伦蒂尔和东洲。',
    },
  },
  merchant: {
    id: 'merchant', name: '行商', en: 'Merchant',
    short: '低买高卖，账比命清楚',
    desc: '赶过车队，开过铺面，知道哪里的羊毛贱、哪里的关卡黑。合同看得比谁都细。',
    profs: ['persuasion', 'insight'], tags: ['merchant'],
    era: {
      1022: '跑达梅斯海德沿岸的集市，路上要过的关卡比城还多。',
      1444: '月神之冠的商人、比佩克的半身人行会、布勒瓦尔的城邦巨商。',
      1836: '商行、交易所和殖民公司的股东。',
    },
  },
  artisan: {
    id: 'artisan', name: '行会匠人', en: 'Guild Artisan',
    short: '有手艺，有师傅，有行规',
    desc: '当过几年学徒，出师以后在行会里挂了名。活儿好不好，看一眼接缝就知道。',
    profs: ['sleight', 'investigation'], tags: ['worker', 'commoner'],
    era: {
      1022: '城里的行会刚成气候，好手艺多半还攥在矮人和精灵手里。',
      1444: '各城的行会。最时兴的一行是尼姆斯科德传出来的奇械。',
      1836: '机器抢了一半的活，剩下的匠人做的是机器做不了的细活。',
    },
  },
  farmer: {
    id: 'farmer', name: '庄户人', en: 'Farmer or Herder',
    short: '种地、放羊、看天吃饭',
    desc: '在地里或者草场上长大，会接生牛犊，会看云，知道一袋麦子该有多重。出门是因为地没了，或者地不够分。',
    profs: ['animal', 'nature'], tags: ['commoner', 'worker'],
    era: {
      1022: '给领主交租的佃户。仗打完了，回来的人发现地界变了。',
      1444: '西边的佃户，或者从东坎诺逃出来的难民。',
      1836: '小人国和伦瑟诺的大田庄。年轻人一批批往城里的工厂走。',
    },
  },
  hunter: {
    id: 'hunter', name: '猎户', en: 'Hunter or Outlander',
    short: '住在大路走不到的地方',
    desc: '在林子、荒原或者山里讨生活，认脚印，会下套，一个人过得了冬。进城反倒不自在。',
    profs: ['survival', 'stealth'], tags: ['wanderer', 'commoner'],
    era: {
      1022: '深林边上的猎户都知道，五年前有一整支精灵军队走进去，再没出来。',
      1444: '深林和蛇脊山的向导最抢手，带路的价钱一年一涨。',
      1836: '替护路队当向导，或者在阿伦蒂尔的林子里替殖民地探路。',
    },
  },
  entertainer: {
    id: 'entertainer', name: '卖艺人', en: 'Entertainer or Skald',
    short: '靠嗓子、手脚和脸皮吃饭',
    desc: '唱歌、说书、翻跟头、演戏，哪样能换一顿饭就干哪样。到哪儿都得先摸清谁不能拿来编段子。',
    profs: ['performance', 'acrobatics'], tags: ['performer', 'wanderer'],
    era: {
      1022: '格鲁迪亚的吟游诗人，或者唱术士王战争的游方歌手。',
      1444: '侏儒的戏班、洛伦特的游吟诗人、卡德斯特的说书人。',
      1836: '剧院、歌厅和巡回马戏。红了的角儿上报纸。',
    },
  },
  urchin: {
    id: 'urchin', name: '街头孤儿', en: 'Urchin',
    short: '在街上长大，全靠偷学',
    desc: '没爹没娘，或者有等于没有，在巷子里长大。知道哪家后门不上锁，哪个巡丁收钱，哪个不收。',
    profs: ['sleight', 'stealth'], tags: ['commoner', 'criminal'],
    era: {
      1022: '仗打完留下的孤儿，各城的神殿收不过来。',
      1444: '东坎诺的难民孩子挤在西边各城的墙根底下。',
      1836: '工厂区的野孩子，卖报、擦鞋、掏兜。',
    },
  },
  pilgrim: {
    id: 'pilgrim', name: '朝圣者', en: 'Hermit or Pilgrim',
    short: '走了很远的路去见一位神',
    desc: '为了还愿、赎罪或者求一个答案上的路，也可能在山里一个人住过几年。治跌打、认草药是路上学的。',
    profs: ['medicine', 'survival'], tags: ['faithful', 'wanderer'],
    era: {
      1022: '摄政王庭各位神的大神殿，一座一座拜过去。',
      1444: '有人往卡斯托纳斯走，去看科琳倒下的地方。',
      1836: '揭秘教的信徒去看神之碎片。老派的还走老路。',
    },
  },
  apprentice: {
    id: 'apprentice', name: '法师学徒', en: "Mage's Apprentice",
    short: '替师傅抄咒文、洗烧瓶',
    desc: '有那点天分，被一位法师收在门下。学到的头一件事是别乱碰桌上的东西，第二件是师傅也会算错。',
    profs: ['arcana', 'investigation'], tags: ['mage_trained', 'scholar'],
    era: {
      1022: '还没有魔导院。师傅是宫廷法师，或者刚上岸的精灵。人人都怕再出一个术士王。',
      1444: '魔导院的学生，或者哪座法师塔里的学徒。',
      1836: '1810 年法师贵族倒了台。各国对法术有的捧、有的禁，学徒得先看清自己在哪国。',
    },
  },
  miner: {
    id: 'miner', name: '矿工', en: 'Miner or Hold-worker',
    short: '在地底下干活，认石头',
    desc: '下过矿井，或者在矮人山堡里做过工。知道哪种响动是要塌，哪种只是石头在伸懒腰。',
    profs: ['athletics', 'nature'], tags: ['worker', 'commoner'],
    era: {
      1022: '替矮人或者领主挖银、挖铁。山更深的地方不归人管。',
      1444: '矮人招人回蛇脊山清理旧山堡，工钱高，抚恤也高。',
      1836: '煤矿和达姆斯塔尔矿，一班十二个钟头。',
    },
  },
  laborer: {
    id: 'laborer', name: '做工的', en: 'Workshop or Factory Hand',
    short: '卖力气，按天算钱',
    desc: '在作坊、码头或者厂子里卖力气，干一天算一天的钱。手上有茧，认得工头的脸色。',
    profs: ['athletics', 'sleight'], tags: ['worker', 'commoner'],
    era: {
      1022: '磨坊、码头和领主工地上的短工。',
      1444: '行会作坊里的帮工，或者港口的搬运。',
      1836: '工厂里按钟点上工的工人，也许还入了工会。',
    },
  },
  scribe: {
    id: 'scribe', name: '笔杆子', en: 'Scribe, Clerk or Reporter',
    short: '靠一支笔吃饭',
    desc: '字写得快，话问得细，替别人把事情落到纸上：账目、状子、消息。知道的总比该知道的多一点。',
    profs: ['investigation', 'insight'], tags: ['scholar', 'commoner'],
    era: {
      1022: '领主或者神殿的书记。一个村里可能只有你识字。',
      1444: '衙门的文书、公证人，或者替编年史家会抄录的。',
      1836: '报馆的访员，电报局和公司里的书记。',
    },
  },
};
