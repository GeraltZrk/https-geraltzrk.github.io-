// 可选种族。格式见 docs/DATA_GUIDE.md；引擎只读 id / name / short / desc / trait / era / abil / profs / tags /
// passives / abilities / subraces / names，其余字段（en、lifespan、namesEn、亚种的 desc 和 names）是给人看的，不参与计算。
//
// 取名：每个名字写成 '中文|原文' 一对，由 names() 拆成 names（中文，随机取名用）和 namesEn（原拼写，核对译名用），
// 两份顺序一一对应。原文取自 mod 的名单（eu4 common/cultures/anb_cultures.txt、ck3 name_lists）和 wiki 上有出处的名字。
// 译名规矩跟 research/11_zh_glossary：坎诺人名走新闻体音译；意思透明的绰号、氏族名按意思译（月歌者、碎心者）；
// 罗祆用佛经译音字，烟州直接写汉名，禁忌平原用元代译音字，刻伊俄奈用希腊古典译音字。
//
// 数值：每个种族属性合计 +3（含亚种）。被动只用 DATA_GUIDE 列出的键。亚种的加成写在亚种自己的 passives 里；
// abilities 里那条 race_sub_* 只是给角色卡显示用的说明，自身不带 passives，不会重复计算。

const zh = (list) => list.map((s) => s.split('|')[0]);
const en = (list) => list.map((s) => s.split('|')[1]);
function names(m, f, family, extra = {}) {
  return {
    names: { m: zh(m), f: zh(f), family: zh(family), ...extra },
    namesEn: { m: en(m), f: en(f), family: en(family) },
  };
}

// ---------------------------------------------------------------------------
// 名单

const HUMAN = names(
  ['阿德拉尔|Adelar', '阿兰|Alain', '罗吉尔|Rogier', '马里昂|Marion', '洛萨恩|Lothane', '凯伦|Caylen', '瓦里安|Varian', '阿托里安|Artorian',
    '里卡德|Ricard', '洛朗|Laurens', '基利安|Kylian', '托马斯|Tomáis', '埃德蒙|Edmund', '奥托|Otto', '戈德拉克|Godrac', '阿尔里克|Alric',
    '克洛万|Crovan', '达利昂|Dalyon', '德万|Devan', '维廉|Welyam', '文森|Vincen', '博里安|Borian'],
  ['阿德蕾西娅|Aldresia', '奥坎娜|Aucanna', '奥琪|Auci', '瓦丽娜|Varina', '莉安农|Riannón', '克拉丽蒙德|Clarimonde', '阿玛莉恩|Amarien', '塞拉朵拉|Celadora',
    '阿拉贝拉|Arabella', '玛丽安|Marianne', '艾莉莎贝特|Eilísabet', '莉索莱特|Lisolette', '康斯坦丝|Constance', '阿德琳|Adeline', '玛格丽特|Margeret', '玛丽尔达|Marilda',
    '阿卡拉|Acara', '埃蕾拉|Erela', '卡拉莎|Calassa', '伊索贝尔|Isobel', '伊迪丝|Edith', '威拉米娜|Willamina'],
  ['塔克斯威克|Taxwick', '梅墙|Plumwall', '西尔·塞斯提尔|síl Cestir', '西尔·阿兰斯|síl Aranth', '西尔·鲁本奈尔|síl Rubenaire', '西尔·马德莱尔|síl Madelaire', '费科姆|Feycombe',
    '拉姆斯盖特|Ramsgate', '阿兰森|Alainson', '哈德威克|of Hardwick', '桥屯|of Bridgeton', '斯沃普斯托克|Swapstoke', '塔兰顿|Taranton', '梨林|of Peargrove'],
);

const BULWARI = names(
  ['阿班|Aban', '安沙尔|Anšar', '阿尔万德|Arwand', '奥巴勒|Awbal', '贝赫利勒|Behlil', '达里安|Darian', '杜赞|Duzan', '埃尔滕|Erten', '胡兰|Huran',
    '贾汉吉尔|Jahangir', '卡韦|Kaweh', '利梅尔|Limer', '潘特斯|Panthes', '萨布姆|Sabum', '塞里姆|Serim', '亚兹库尔|Yazkur', '法齐勒|Fazil', '达甘|Dagan'],
  ['阿米娜|Aamina', '阿娜图|Anatu', '阿尔维娅|Arwia', '詹菲达|Canfeda', '埃莉芙|Elif', '埃图|Ettu', '哈米达|Haamida', '伊什塔拉|Ištara', '库拉|Kullaa',
    '穆丹|Mudam', '纳尔迪娜|Nardina', '努赛芭|Nusaiba', '拉赫玛|Rahma', '塞米哈|Semiha', '亚米玛|Yamima', '伊勒塔妮|Iltani', '宁苏努|Ninsunu', '达姆丽娜|Damrina'],
  ['萨勒-杜赞|szal-Duzan', '塞勒-库马尔坎德|szel-Kumarkand', '塞勒-巴齐巴尔|szel-Bazibar', '萨勒-巴尔辛|szal-Barseen', '塞勒-哈尔卢姆|szel-Harlum', '塞勒-赞巴尔|szel-Zanbar',
    '萨勒-阿班|szal-Aban', '塞勒-阿卡勒舍斯|szel-Akalšes', '萨勒-马格特|szal-Maqet', '塞勒-阿塔卢|szel-Attalu'],
);

// 罗祆人名在 mod 里借的是现实中的孟加拉、马拉塔名字，这里按译名表的规矩用佛经译音字。
const RAHENI = names(
  ['达摩波罗|Dharmapala', '提婆波罗|Devapala', '瞿波罗|Gopala', '摩醯波罗|Mahipala', '罗摩波罗|Ramapala', '那罗延|Narayana', '婆薮提婆|Vasudeva', '摩哂陀|Mahendra',
    '旃陀罗斯那|Chandrasen', '阇耶波罗|Jayapala', '毗阇耶斯那|Vijaysen', '阿耆尼蜜多罗|Agnimitra', '婆须蜜多罗|Vasumitra', '弗沙蜜多罗|Pusyamitra', '摩纳婆|Manava',
    '醯曼多斯那|Hemantasen', '鸠摩罗波罗|Kumarapala', '三谟陀罗斯那|Samudrasen'],
  ['阿醯利耶婆夷|Ahilyabai', '多罗婆夷|Tarabai', '洛叉弥婆夷|Laxmibai', '耆耆婆夷|Jijibai', '罗摩婆夷|Ramabai', '恒伽婆夷|Gangabai', '突伽婆夷|Durgabai', '迦尸婆夷|Kashibai',
    '罗陀婆夷|Radhabai', '耶输婆夷|Yesubai', '阿难提婆夷|Anandibai', '庵毗迦婆夷|Ambikabai', '摩耶|Maya', '须摩提|Sumati', '须尼多|Sunita', '罗提迦|Radhika', '突伽|Durga',
    '迦摩罗提毗|Kamaladevi'],
  ['跋多|Bhat', '拘利|Koli', '辛陀|Sinda', '迦摩提婆|Kamadeva', '楼陀|Ruddha', '摩罗毗耶|Malviya', '伽耶迦婆|Gaikwar', '信地耶|Sindhia', '朗伽|Langa', '迦隆|Kahlon'],
);

// 烟州人姓在前、名在后（朱蟠龙），familyFirst 是给取名代码的提示；引擎现在一律“名·姓”。
const YAN = names(
  ['蟠龙|Panlong', '维桢|Weizhen', '时升|Shisheng', '南英|Nanying', '良相|Liangxiang', '万年|Wannian', '宗彦|Zongyan', '廷魁|Tingkui', '邦佐|Bangzuo',
    '国昌|Guochang', '显明|Xianming', '道行|Daoxing', '成章|Chengzhang', '大勇|Dayong', '仲明|Zhongming', '应祥|Yingxiang', '重华|Chonghua', '云让|Yunrang'],
  ['和英|Heying', '春梅|Chunmei', '天慧|Tianhui', '玉英|Yuying', '圆通|Yuantong', '艳香|Yanxiang', '秀荣|Xiurong', '寿英|Shouying', '福媛|Fuyuan',
    '禄贞|Luzhen', '瑞容|Ruirong', '素贞|Suzhen', '小英|Xiaoying', '小媛|Xiaoyuan', '小楼|Xiaolou', '芬|Fen', '雯|Wen', '和静|Hejing'],
  ['朱|Zhu', '刘|Liu', '孙|Sun', '白|Bai', '顾|Gu', '何|He', '潘|Pan', '谢|Xie', '欧阳|Ouyang', '江|Jiang', '司马|Sima', '梅|Mei'],
  { familyFirst: true },
);

const GERUDIAN = names(
  ['阿斯克尔|Askel', '巴德尔|Baldur', '比亚内|Bjarne', '弗洛基|Floki', '弗雷德里克|Fredrik', '贡纳尔|Gunnar', '哈拉尔|Harald', '赫拉芬|Hrafn', '英格瓦尔|Ingvar',
    '约尔蒙|Jormun', '莱夫|Leif', '奥拉夫|Olav', '拉格瓦尔德|Ragnvald', '西格瓦德|Sigvard', '斯科里|Skorri', '斯泰纳尔|Steinar', '斯文|Sven', '托尔比约恩|Tolbjorn',
    '瓦尔莫德|Varmod', '哈夫丹|Halvdan'],
  ['艾拉|Aela', '阿斯弗丽德|Asfrid', '阿斯特丽德|Astrid', '达格妮|Dagny', '埃斯特丽德|Estrid', '弗蕾迪丝|Freydis', '古德伦|Gudrun', '哈尔多拉|Halldora', '赫尔加|Helga',
    '赫尔基娅|Herkja', '希尔德|Hilde', '英格丽德|Ingrid', '约尔迪丝|Jordis', '拉格莎|Lagertha', '拉格希尔德|Ragnhild', '鲁娜|Runa', '西格丽德|Sigrid', '索尔薇格|Solveig',
    '托尔迪丝|Thordis', '蒂拉|Tyra'],
  ['比亚恩松|Bjarnsson', '奥拉夫松|Olavsson', '雷弗曼|Revrman', '西达埃特|Sidaett', '卡尔德|Kaldr', '拉夫曼|Ravman', '赫拉芬加特|Hrafngatr', '西尔弗雅特|Silfrhjart',
    '弗兰·罗斯塔维克|fran Rosstavik', '弗兰·雷弗隆德|fran Revrlund', '弗兰·埃科德|fran Eikodr'],
);

// 月精灵的名单；姓是通用语的绰号，船长一脉用 ta'（塔·）接船名，贵族用 síl（西尔·）接地名。
const ELF = names(
  ['穆纳里昂|Munarion', '埃雷拉斯|Erelas', '文达尔|Vindal', '塞拉多里安|Celadorian', '阿尔菲尔|Arfil', '埃莱达斯|Eledas', '卡尔罗迪尔|Calrodir', '瓦里洛尔|Varilor',
    '瓦拉梅利安|Varamelian', '埃尔里安|Elrian', '卡姆纳里安|Camnarian', '阿多里安|Ardorian', '西伦迪尔|Thirendil', '埃文达尔|Evindal', '加林多尔|Galindor', '泰拉尔|Taelar',
    '阿尔达里安|Aldarian', '菲诺里安|Finorian', '伊弗兰迪尔|Ivrandir', '特里安迪尔|Triandil', '奥洛里斯|Oloris', '萨拉诺尔|Thalanor'],
  ['加琳德尔|Galindel', '伊斯特拉拉尼娅|Istralania', '娜拉雯|Narawen', '埃蕾拉莎|Erelassa', '菲莉娜拉|Filinara', '塞拉朵拉|Celadora', '萨莉安德尔|Thaliandel', '塞露莎|Selussa',
    '伊玛瑞尔|Imariel', '维哈莉|Vehari', '瓦莉拉|Varila', '帕诺莉尔|Panoril', '莉安蒂尔|Liandiel', '瓦琳娜|Varinna', '阿莉娅丝拉|Ariathra', '阿玛莉恩|Amarien',
    '阿拉拉薇尔|Alarawel', '拉德琳德尔|Ladrindel', '莉西尔|Lithiel', '乌尔塔瑞尔|Ultariel', '阿尔瓦拉|Alvara'],
  ['战歌者|Warsinger', '海月|Seamoon', '月灵|Moonspirit', '风行者|Windwalker', '弓誓|Bowsworn', '望月者|Moonwatcher', '银刃|Silverblade', '夜枝|Nightbranch',
    '金箭|Goldarrow', '观星者|Stargazer', '织法者|Spellweaver', '剑舞者|Bladedancer', "塔·诺兰德|ta'Norande", "塔·塞伦塔尔|ta'Serentar", "塔·埃斯塔达|ta'Estádha",
    '西尔·杰拉|síl Gera'],
);

// 太阳精灵：舰队精灵的名字带上布勒瓦尔口音（C→K，S→Z，th→t），姓是 -zuir（祖尔）结尾的父名。
const SUN_ELF = names(
  ['阿德拉赫尔|Adrahel', '阿兰提尔|Arantir', '达拉兹塔里昂|Daraztarion', '埃莱塔尔|Eletar', '埃尔拉尼尔|Erlanil', '卡利纳埃尔|Kalinael', '卡姆纳里安|Kamnarian',
    '凯尔莫尼亚斯|Kelmonias', '泰拉里安|Taelarian', '提伦迪尔|Tirendir', '瓦拉马埃尔|Varamael', '泽隆达尔|Zerondal', '卡尔宗|Karzon', '阿拉里尔|Alaril',
    '迪卡拉诺尔|Dikalanor', '贾赫尼尔|Jahenil', '卡林多尔|Kalindor', '塔拉诺尔|Talanor'],
  ['阿拉拉薇尔|Alarawel', '阿莉娅特拉|Ariatra', '埃蕾拉莎|Erelaša', '伊兹特拉拉尼娅|Iztralania', '凯拉朵拉|Keladora', '莉安蒂尔|Liandiel', '帕诺莉尔|Panoril', '瓦莉莉娅|Varilia',
    '维哈莉|Vehari', '阿德拉拉拉|Adralara', '阿瓦琳德尔|Avalindel', '祖娜莉娅|Zunaria', '普莉拉|Purila', '泽尔菲诺尔|Zelfinor', '法拉妮齐尔|Faranizil', '扎莉娅|Zaria',
    '薇拉拉|Velara', '哈扎雯|Hazawen'],
  ['比尔萨坦祖尔|Birzartanzuir', '埃乌兰祖尔|Evranzuir', '阿尔菲尔祖尔|Arfilzuir', '卡林祖尔|Kalinzuir', '德纳祖尔|Denazuir', '阿拉尔祖尔|Alarzuir', '瓦拉祖尔|Varazuir',
    '凯尔祖尔|Kerzuir', '埃雷尔祖尔|Erelzuir', '拉丁祖尔|Radinzuir', '阿德拉祖尔|Adrazuir', '萨雷尔祖尔|Sarelzuir'],
);

// 木精灵：名字后面跟的是氏族（salla），最要紧的那个放前面。
const WOOD_ELF = names(
  ['阿拉纳里斯|Aranaris', '博尔迪尔|Bolrdil', '塞尔蒙|Celmon', '埃伦迪尔|Erendil', '法尔芬|Falfin', '格维杜莱恩|Gwidulain', '霍拉斯|Khoras', '奥伯龙|Oberon',
    '潘雷斯|Pannreth', '索克里斯|Thocris', '瓦洛恩|Vallorn', '武克拉斯|Vucras', '阿伦迪尔|Alendir', '巴拉霍尔|Barahor', '凯恩林|Caenlin', '丹米尔|Daenmir',
    '费维尔|Faevir', '伊姆赫罗斯|Imheros', '梅尔戴尔|Meldaer', '佐里维尔|Zoriver'],
  ['艾莉|Aerie', '阿拉贝丝|Arabeth', '德金德拉|Degindra', '埃莱森|Elethen', '伊尔瓦|Irvah', '拉蕾莲|Larelaen', '莉安德尔|Liandel', '莉迪尔|Liedir', '梅特盖尔|Metgael',
    '妮劳因|Nilauin', '奥莉伦娜|Orilenna', '蒂塔瑞尔|Titariel', '法尔雯|Farwen', '米丝瑞尔|Mithriel', '娜拉雯|Narawen', '奥贝拉|Obera', '特丽伦娜|Trylenna', '薇希尔|Vyhiel',
    '德蕾德雯|Dredwaen', '奥尔菲拉|Olfyra'],
  ['艾斯|Ayeth', '德雷嫩|Drennen', '艾琳|Elyn', '费尔加恩|Fealgarn', '高尔|Ghúl', '迈纳|Myna', '斯科莎|Scotha', '阿哈因|Ahain', '塞纳|Cenág', '赛斯|Sàisth'],
);

// 半精灵：达梅斯海德一带的人类名字，姓用 síl（“某地的”）。Sil- 连写（西尔加里昂）本是白银家族才用的。
const HALF_ELF = names(
  ['阿德马尔|Ademar', '阿登|Adénn', '阿洛斯|Alos', '阿托里安|Artorian', '奥坎|Aucan', '达拉斯|Daras', '埃尔兰|Erlan', '加林|Galin', '穆涅林|Munerin', '里安|Rián',
    '桑杜尔|Sandur', '泰拉尔|Taelar', '西伦|Thiren', '特里安|Trian', '瓦里洛尔|Varilor', '文森|Vincen', '阿德雷斯|Aldres', '卡利安|Carlián', '西尔弗林|Silverin',
    '卡拉斯|Calas'],
  ['阿德拉|Adra', '阿德蕾西娅|Aldresia', '阿玛莉恩|Amarien', '玛丽娜|Marina', '阿拉贝拉|Arabella', '塞拉|Cella', '艾莉莎贝特|Eilísabet', '劳拉娜|Lauranna', '莉安娜|Riánna',
    '塞西莉|Cecilie', '埃莉诺|Eléanor', '卡拉|Cara', '娜拉|Nara', '达梅薇拉|Damevira', '阿拉拉|Alara', '奥坎娜|Aucanna', '加琳达|Galinda', '塔莉娅|Thalia',
    '露娜罗娜|Lunarona', '达梅琳娜|Damelina'],
  ['西尔加里昂|Silgarion', '西勒博尔|Silebor', '西尔·里坎卡斯|síl Ricancas', '西尔·西尔维拉尔|síl Silvelar', '西尔·阿克罗姆|síl Acrom', '西纳·西迈内|sína Cymainé',
    '西尔·阿兰斯|síl Aranth', '西尔·纳·达梅斯德梅勒|síl na Damesdemele', '西尔·穆纳斯塞斯提尔|síl Munascestir', '西尔·库尼亚凯尔|síl Cúniacaire', '西尔·皮莱尔|síl Píraire',
    '西尔·杰西丝蒂尔|síl Jexisthíl', '西尔·加贝莱尔|síl Gabelaire', '西尔·奥尔多因|síl Ordóin'],
);

const DWARF = names(
  ['阿达尔|Adar', '巴尔杜尔|Bardur', '布洛克|Brok', '达尔蒙德|Dalmund', '达格兰|Dagran', '杜兰|Duran', '埃敦|Edûn', '福尔丹|Foldan', '戈伦|Goren', '格里马尔|Grimmar',
    '哈尔伦|Harlûn', '卡罗姆|Karrom', '基尔达尔|Kildar', '洛雷克|Lorek', '马加尔|Magar', '诺尔布尔|Norbûr', '奥敦|Odûn', '鲁尼穆尔|Rûnimûr', '塞弗伦德|Sevrund',
    '斯托林|Storin', '萨尔加斯|Thargas', '贡多巴尔|Gundobar'],
  ['阿达拉|Adala', '安薇|Anvi', '巴尔加|Balga', '巴丽拉|Barila', '贝尔吉娅|Belgia', '布兰玛|Branma', '布伦拉|Brenla', '布丽娜|Brina', '布罗妮丝|Bronis',
    '达琳娜|Dalina', '德瓦尔拉|Dwalra', '埃黛丝|Edeth', '埃塔|Etta', '格蕾尔芭|Grelba', '格丽玛|Grimma', '格萝莉娅|Groria', '伊松迪|Isondi', '玛格达|Magda',
    '米丝特丽|Mistri', '奥冯迪|Ovondi', '萨尔库妮|Tharkuni', '索赫加|Thohga'],
  ['阿兹-鲁恩|az-Run', '阿兹杜兰|Azduran', '阿兹-赫霍德|az-Hehod', '阿兹-乌尔贡格|az-Urgongr', '辛格里巴尔|Thingribal', '矿匠|Minesmith', '锤须|Hammerbeard',
    '屠蛛者|Spiderslayer', '重斧|Heavyaxe', '斧砧|Axeanvil', '碎石者|Stonebreaker', '炉锤|Forgehammer', '红须|Redbeard', '钢臂|Steelarm', '铅脊|Leadspine'],
);

const HALFLING = names(
  ['亨利|Henry', '汤巴德|Tombard', '阿奇博尔德|Archibald', '洛马斯|Lomas', '彼特兰|Petran', '梅卡尔德|Maycald', '阿拉里克|Alaric', '塞尔迪克|Cerdic', '福尔卡斯|Folcas',
    '加雷特|Garet', '雷万|Rewan', '汉弗莱|Humphrey', '布里福|Briffo', '卡拉多克|Caradoc', '康韦尔|Conwell', '杜多|Dudo', '哈尔弗雷德|Halfred', '珀西瓦尔|Percival',
    '托拜厄斯|Tobias', '鲁弗斯|Rufus', '克洛维斯|Crovis', '罗伊|Roy'],
  ['简|Jane', '阿拉贝拉|Arabella', '阿米丝|Amice', '阿维莉娜|Avelina', '贝拉|Bella', '康斯坦丝|Constance', '伊莎贝拉|Isabella', '乔安娜|Joanna', '西比尔|Sybille',
    '普丽姆萝丝|Primrose', '贝拉多娜|Belladonna', '塞琳娜|Selina', '玛丽安|Marianne', '哈维丝|Hawise', '莫德|Maud', '菲莉帕|Philippa', '米拉贝拉|Mirabella', '波比|Poppy',
    '默特尔|Myrtle', '珀尔|Pearl', '诺拉|Nora', '约兰达|Yolanda'],
  ['苹果籽|Appleseed', '梨树|Peartree', '溪语|Brookspeaker', '青莓|Greenberry', '硬橡|Hardoak', '乐田|Merryfield', '牛倌|Cowkeeper', '轻手|Lighthands', '六指|Sixfingers',
    '影足|Shadowfoot', '花足|Blossomfoot', '卷毛|Curlylock', '面包匠|Breadmaker', '酿酒匠|Brewer', '小骑士|Smallknight', '黄油|Butters'],
);

const GNOME = names(
  ['阿诺特|Arnolt', '宾姆|Bim', '宾布尔|Bimble', '博尔佐|Borzo', '科连|Cohlien', '丁布尔|Dimble', '埃尔宾|Elbin', '菲兹威克|Fizwick', '戈威克|Gorwick', '延金|Ienkin',
    '兰多|Lando', '莫宾|Morbin', '奥布莱恩|Obrain', '奥威克|Orwick', '帕德|Pud', '罗扬|Royan', '桑多|Sando', '托格曼|Togman', '托宾|Torbin', '乔姆布尔|Jomble',
    '梅尔宾|Melbin', '巴兹威克|Bazwick'],
  ['阿尔达|Alda', '阿拉|Ara', '比茜|Bittsy', '达拉|Darra', '多茜|Dothi', '埃米|Emy', '延卡|Ienka', '蕾茜|Lacie', '玛拉|Mara', '妮拉|Nilla', '佩莎|Petha', '波皮|Poppi',
    '塔拉|Tara', '蒂尔达|Tilda', '托娜|Tona', '宾黛尔|Bindle', '辛达|Cinda', '金妮|Ginny', '朱比|Jubie', '基尔达|Kilda', '明迪|Mindi', '皮皮|Pippy'],
  ['松伯瓦齐|Somberwazy', '坎伯巴松|Cumberbazon', '维德博泽|Widdebozer', '阿德巴兹|Aderbaz', '波托然|Portorran', '晃匣|Wobblebox', '双扳手|Doublespanner', '拧齿轮|Cogturner',
    '钟表匠|Clockworker', '守时人|Timekeeper', '哑火咒|Fizzlespell', '好火花|Goodspark', '避雷针|Lightningrod', '哨轮|Whistlewheel', '叮当匠|Tinktonker'],
);

// 半兽人：东坎诺的人类名字，姓是地名或者兽人氏族名。
const HALF_ORC = names(
  ['阿德里奥克|Adrioc', '布兰多克|Brandoc', '布雷多克|Braydoc', '卡斯蒂安|Castian', '塞尔加尔|Celgal', '卡莫尔|Camor', '克洛瓦格|Crovag', '格拉科斯|Gracos', '佩特|Peyter',
    '托曼|Toman', '温斯坦|Wynstan', '胡马克|Humac', '马达拉克|Madalac', '奥特拉克|Ottrac', '拉巴克|Rabac', '斯托瓦克|Stovac', '托尔马克|Tormac', '维纳克|Venac',
    '科拉克|Corac', '乌尔里克|Ulric', '洛特拉克|Lottrac', '阿努尔夫|Arnulf'],
  ['阿黛拉|Adela', '阿卡拉|Acara', '玛丽尔达|Marilda', '卡斯蒂安娜|Castianna', '莉丝贝特|Lisbet', '洛琳|Lorinne', '卡莉娅|Calia', '伊瑟贝拉|Isebella', '西比拉|Cibilla',
    '艾玛|Emma', '科拉琳德|Coralinde', '克拉莉娅|Clarya', '洪芭|Humba', '安妮|Anne', '克蕾西娅|Cressia', '科拉|Cora', '玛格达|Magda', '蕾茵|Reínne', '达莉娅|Dalya',
    '玛达拉|Madala', '克洛蒂尔德|Clothilde', '阿兰娜|Alanna'],
  ['巴多巴尔|of Badobar', '福阿尔巴尔|of Foarbar', '阿罗达尔|of Arodar', '断耳|Severed Ear', '碎剑者|Bladebreaker', '哈尔坦|of Haltan', '维纳克沃德|Venacvord',
    '卡巴杜斯卡尔|Kabarduskar', '伐橡者|Oakbreaker', '半血|Halfblood', '断牙|Brokentusk', '碎心者|Heartgrinder'],
);

// 兽人：一个名字，后面跟自己挣来的绰号或者氏族名。
const ORC = names(
  ['阿杜尔|Adûl', '博尔克|Bork', '德拉姆|Dramm', '弗洛格|Flogg', '古拉德|Ghurâd', '格鲁姆格|Grumger', '伊科姆|Ikom', '克拉克霍恩|Krakhorn', '马布格|Mabug', '诺尔斯科|Norsko',
    '奥克格|Okegg', '萨穆尔|Samûr', '塔克拉|Takra', '扎斯拉|Zathra', '阿祖科尔|Azukor', '巴克布尔|Bakbur', '布拉苏尔|Brasûr', '德拉扎德|Drazad', '瓦布克|Varbuk',
    '拉格杜格|Ragdug', '乌戈尔|Ugol', '祖戈尔|Zugor'],
  ['阿赫|Ahe', '阿图|Atu', '碧尔|Bhiel', '布拉|Burâ', '戈尔扎|Ghorza', '格拉玛|Grama', '哈拉|Khaara', '拉玛|Lamma', '穆萝加|Muroga', '奥达卡|Ohdaka', '奥芙加|Ovga',
    '鲁尔蒂|Rurti', '蒂杜|Tidû', '乌格莱姆|Uglâim', '沃尔特加|Voltga', '阿赫扎|Ahza', '博尔芭|Borba', '格拉莎|Glasha', '拉格芭|Lagba', '拉兹加|Lazga', '谢鲁|Sheru',
    '亚格扎|Yagza'],
  ['血牙|Bloodfang', '锤拳|Hammerfist', '人猎|Manhunter', '战生|Warborn', '死眼|Deadeye', '铁颚|Metaljaw', '火血|Fireblood', '铁皮|Ironskin', '碎颅者|Skullgrinder',
    '吞山者|Mountain-Eater', '长牙|Longtooth', '断牙|Brokentusk', '石拳|Stonefist', '半舌|Half-Tongue'],
);

const GOBLIN = names(
  ['查布|Chab', '伦克|Lunk', '维尔克|Verk', '雷布|Reb', '克伦祖德|Krenzurd', '拉尔西夫|Rarsiff', '真西布|Jenthib', '卡尔克|Qalk', '阿卡克斯|Aakax', '拉克斯|Rax',
    '涅利斯克|Nerlisk', '扎里尔|Zarril', '祖克斯|Zux', '朱科普|Jukop', '奇努克斯|Qirnux', '普拉扎克|Platzak', '诺佩斯|Noppes', '佩尔祖克|Perzuk', '费鲁克|Feruk',
    '库科夫|Kukov', '扎扎克|Zazak', '金博尔|Jeembol'],
  ['奥克莎|Oxa', '乌斯科娅|Uskoa', '尤图|Yutu', '古克洛|Guklo', '兰查|Lancha', '奥克图|Oktu', '阿西格鲁|Asigloo', '伊克瑟|Ikse', '拉达|Laadaa', '瑟尔莎|Sersa',
    '瓦克拉|Vakkra', '赫芙塔|Hefta', '祖纽尔|Zunewl', '多多卡|Dodoca', '弗洛尔丝|Floorce', '泽克图芙鲁|Zektuphru', '阿梅吉克拉|Amegikra', '莱尔拉姆|Lerlam', '阿尔拉|Alra'],
  ['猎荨麻者|Nettlehunter', '高喉|Highmaw', '铁酿|Ironbrew', '露酿|Dewbrew', '崖吼|Cragroar', '嚼颅者|Skullchewer', '猎珠者|Orbhunter', '铁灾|Ironbane', '破原者|Plainbreaker',
    '波布内克-伦克|pobnek-Lunk', '波布内克-米特|pobnek-Mit', '波布内克-莫克莫克|pobnek-Mokmok', '瑟尔廷|Sertin'],
);

// 大地精没有世袭的姓，报的是自己那一令的旗号。
const HOBGOBLIN = names(
  ['安比|Anbi', '贝南|Benan', '多达|Doda', '吉扎|Giza', '赫孔|Hekon', '卡肯|Kaken', '凯扎|Keza', '库恩|Kuen', '尼比|Nibi', '努金|Nukin', '波休|Pohyu', '索曾|Sozen',
    '塔里|Tari', '乌比|Ubi', '约肯|Yoken', '班瑟|Banse', '达赞|Dazan', '根博|Genbo', '欣罗|Hinro', '卡祖|Kazu', '纳隆|Naron', '佐兰|Zoran'],
  ['安如|Anru', '恩尤|Enyu', '希卡莉|Hikari', '洪根|Hongen', '卡彭|Kapon', '科比尤|Kobyu', '妮哈|Niha', '嫩兰|Nunran', '伦布|Renbu', '罗努|Ronu', '松莉|Sonri',
    '塔琼|Takyun', '多多|Dodo', '吉娜|Gina', '卡雅拉|Kayara', '科露|Koru', '昆雅|Kunya', '奈|Nae', '拉莉|Rari', '萨妮|Sani', '雅泽|Yaze', '泽妮|Zeni'],
  ['龙裔|Dragonborn', '虎裔|Tigerborn', '象裔|Elephantborn', '狼裔|Wolfborn', '猪裔|Boarborn', '狮裔|Lionborn', '金燕|of the Golden Swallows', '黑燕|of the Black Swallows',
    '白燕|of the White Swallows', '青燕|of the Green Swallows', '燕翼|of the Swallow Wings', '飞群|of the Flying Flock'],
);

const KOBOLD = names(
  ['阿鲁|Arru', '弗里克|Vrik', '纳尔克|Nark', '德里加德|Drighad', '格拉托尔|Grator', '苏尔苏|Zurzu', '纳尔纳兹|Nalnaz', '武德|Vud', '伊尔托|Irto', '埃吉|Egi',
    '米格洛|Miglo', '埃克博|Ekbo', '萨夫莱特|Savlet', '马夫利克|Mavlik', '拉夫鲁特|Ravrurt', '埃尔基尔|Erkil', '迪扎普|Dizzap', '迪尔德|Dhild', '齐普泽克|Zipzek',
    '科武|Kovu', '马尔库|Marku', '莫尔克|Mork'],
  ['埃鲁|Eru', '特吉尔|Tegil', '乌霍|Uho', '加卡尔|Gakar', '阿尔约拉|Arjora', '弗蕾莉娜|Vrerina', '埃莉扎|Eriza', '鲁蕾|Rurë', '莉莉阿扎|Ririaza', '梅莉瓦|Meriva',
    '奥尔塔|Orta', '特芙塔|Tefta', '薇拉|Vera', '阿妮拉|Anira', '埃尔米拉|Ermira', '约娜|Jona', '米拉|Mira', '扎娜|Zana', '涅薇拉|Nevira', '哈娜|Hana'],
  ['鳞歌者|Scalesinger', '龙尾|Dragontail', '垂耳|Lowear', '长齿|Talltooth', '利颚|Sharpjaw', '刺尾|Spiketail', '下套的|Trapsetter', '机关匠|Trapsmith', '小镐|Smallpick',
    '掘矿者|Minedelver', '巧爪|Nimbleclaw', '余烬爪|Emberclaw', '滑鳞|Slipscale', '好火|Goodflame'],
);

// 豺狼人：名字用译名表里那套硬音字（革、哥、迦、得），后面跟自夸的名号。
const GNOLL = names(
  ['阿梵|Avan', '贝兹马尔|Bezmar', '布拉革|Brak', '布露兹|Bruuz', '迦兹达尔|Gazdar', '哈哥|Hakko', '哈赞|Hazn', '伊德里兹|Idriz', '伊革拉姆|Ikram', '迦扎尔|Kadzar',
    '哥祖得|Kuzzud', '马尔梵|Marvaan', '马扎尔|Mazzar', '墨哥兹|Mekuz', '梅尔佐革|Merzok', '奥姆敦|Omdun', '拉津|Razin', '鲁迦|Rukka', '瓦迦尔|Vakar', '瓦露革|Varuuk',
    '贾利得|Xhalid', '贾瓦尔|Xhavar'],
  ['阿马祖|Amazuh', '阿维娅|Avya', '巴纳芙|Banav', '黛瓦|Daiva', '迦尼玛|Kanima', '坎扎|Kanza', '梅祖恩|Mezuun', '纳勒迦拉|Nalkara', '奥莉娅|Oliya', '奥兹玛|Ozma',
    '拉赫革得|Rahkt', '塔扎|Taza', '得莱瓦|Tlayva', '得蕾津|Tlezeen', '乌姆扎|Umza', '乌扎革得|Uzakt', '瓦勒达|Valda', '贾伊达|Xhaida', '朱瓦莉|Xhuvari', '扬扎|Yandza',
    '齐瓦|Ziva', '祖迦娜|Zukana'],
  ['碎人者|Breaker-of-Men', '收耳者|Collector-of-Ears', '洗城者|Sacker-of-Cities', '推塔者|Toppler-of-Ziggurats', '布勒瓦尔之鞭|Scourge-of-Bulwar', '食驼者|Cameleater',
    '嚼骨者|Bonechewer', '裂爪|Shredclaw', '沙喉|Sandmaw', '夜牙|Nightfang', '荒原行者|Wastewalker', '砸市者|Marketmauler', '白毛|Palefur'],
);

// 鹰身女妖全是女的，m 和 f 用同一份名单；后面跟的是母系的家名。
const HARPY_GIVEN = ['莎南图|Šananthu', '涅哈|Neha', '瓦尔瓦|Varva', '莉什潘|Rišpan', '莉什科蕾尔|Lyškoler', '约尔|Jor', '科松|Kossun', '伊莉奥西塔|Iliosita',
  '基罗涅菲|Kironephe', '埃妮薇涅|Enivene', '孔图|Konthu', '嫩卡|Nenka', '埃西薇涅|Esivene', '阿舒莉娅|Ašuria', '伊什塔拉|Ištara', '阿丝基娜|Askina', '亨拉|Henra',
  '妮莉|Nilli', '米什卡|Mišqa', '劳瓦|Rauva', '凯莉娅|Kerria', '赫莉娅|Helia', '南莎|Nanša', '阿雅拉|Ayara'];
const HARPY = names(HARPY_GIVEN, HARPY_GIVEN,
  ['诺斯坦图|Nostanthu', '萨罗埃隆|Saroeron', '索约坎图|Soiokhanthu', '拉提奥坎托瓦|Latioqhantova', '科涅阿拉|Qhoneara', '提乌塞库|Thiusekhu', '洪菲拉|Honfira',
    '帕莫坎托瓦|Pamoqhantova', '涅菲奥薇塔|Nephioveta', '薇塔埃隆|Vetaeron', '南绍|Nanšau', '毛特隆|Mauteron', '耶雷隆|Jereron'],
);

const OGRE = names(
  ['奇克|Chike', '布尔格|Burrg', '达兹古尔|Dhazgur', '加尔|Gall', '阿西库尔格|Axikurg', '弗雷库格|Vrekug', '武埃格|Vueg', '格鲁托格|Glutog', '克洛格罗特|Klogrot',
    '春古兹|Chunguz', '奥多尔|Odor', '楚克|Cuk', '鲁甘|Rughan', '沃格|Vogh', '纳尔格|Nargh', '凯涅斯|Kenes', '亨努格|Hennug', '莫莫特|Momot', '达库尔|Dakur',
    '贝佐格|Bezog', '斯克拉格|Skrag', '格伦德|Grend'],
  ['奇克古|Chikegu', '乌格莉玛|Uglima', '赫哈|Heha', '什拉卡|Shrakka', '达库鲁|Dakuru', '阿西库尔加|Axikurga', '格劳恩基|Glaunki', '塔尔加|Taarga', '格莉扎|Greeza',
    '格鲁托加|Glutoga', '克洛格罗塔|Klogrota', '斯塔基|Staki', '诺尔布|Norbu', '奥特努古|Otnugu', '佩克尔雷卡|Pekelreka', '凯涅莎|Kenesa', '奥尔娅|Orja', '布尔吉|Burrgi',
    '加拉|Galla', '贝佐加|Bezoga', '玛瓦|Mawa', '贝尔塔|Berta'],
  ['碎石皮|Gravelhide', '霜皮|Frosthide', '骨棒|Bone Club', '绿心|Greenheart', '断胯者|Hipbreaker', '破肚者|Gutbuster', '披肉者|Flesh Wearer', '饮毒者|Venom Drinker',
    '重足|Heavy Foot', '石心|Stoneheart', '断脊者|Spinebreaker', '铜肚|Bronzegut', '雷足|Thunderfoot', '掷岩者|Boulder Tosser'],
);

// 半人马：禁忌平原的名字照译名表用元代译音字（亦、儿、歹、斡、帖、惕、剌、咱）。
const CENTAUR = names(
  ['也格|Jeg', '怯儿|Kher', "塔思阑|Thas'lan", '斡勒都鲁|Oldrude', '脱米瓦思|Tomivath', '额木连|Emren', '亦格剌斡|Iglavo', '必勒祖|Bilzru', "帖思里|Thiz'ri",
    '乞里帖勒|Killithel', '泰乞里|Thaikrih', "根咱|Gen'zih", "答失里惕|Dash'rit", '咱木剌勒|Zomralk', '讷祖勒惕|Nozuld', "真剌惕|Jin'rad", '咱儿惕|Zard', '则乞里|Zekri',
    "拔思合惕|Baz'het", '兀连纳儿惕|Vrennard', '札捏思|Janeth', '合勒鲁惕|Kalrurd'],
  ['捏勒泽|Nelzeh', '飞儿里思|Firlith', '则德里列失|Zedrilesh', '列勒维阿惕|Lelveat', '马德里格|Madrig', '薛勒纳儿|Selnar', '撒儿里咱儿|Sarlizar', '法迭格|Fadheg',
    '里弗剌儿|Ryflar', '篾只阿惕|Mezhiat', '法咱勒|Phazal', '维儿沙儿|Vershar', '你剌赞|Nirazan', '飞咱思|Fizas', '里儿合格|Lirgag', '维儿薛思|Verseth', '宗维勒|Zonvel',
    '敏里惕|Mynrit', '你勒德剌|Nyldrah', '马格烈|Magreh', '昔思列失|Sizlesh', '迪儿撒格|Dirsag'],
  ['苔线|Mossthread', '谷舞者|Valleydancer', '枫舞者|Mapledancer', '林卫|Groveguard', '褐叶|Brownleaves', '岩行|Rockmarch', '捕日者|Suncatcher', '棘鬃|Thornmane',
    '桦蹄|Birchhoof', '雷火|Stormspark', '岭盾|Ridgeshield', '雾皮|Fogpelt', '木尾|Woodtail'],
);

// 虎人和罗祆南部的人类共用一份名单（mod 里借的是孟加拉王名），照译名表用佛经译音字；后面跟家系的名号。
const HARIMARI = names(
  ['那罗那罗延|Naranarayan', '输迦罗陀婆阇|Shukladhwaj', '支罗罗夷|Chilarai', '罗怙提婆|Raghudev', '须佉提婆|Sukhdev', '楼陀罗那罗延|Rudranarayan', '因陀罗那罗延|Indranarayan',
    '阇耶那罗延|Jayanarayan', '苏利耶那罗延|Suryanarayan', '毗阇耶那罗延|Vijaynarayan', '那罗僧诃|Narasingha', '毗摩僧诃|Bhimsingha', '提罗僧诃|Dhirsingha',
    '毗湿婆僧诃|Vishwasingha', '摩哂陀僧诃|Mahendrasingha', '阇多佉伽|Jatakhadga', '提婆佉伽|Devakhadga', '室利旃陀罗|Srichandra', '迦弥湿伐罗|Kameshwar',
    '罗弥湿伐罗|Rameshwar', '设赏迦|Shashanka', '罗摩那他|Ramnath'],
  ['庵婆波利|Amrapali', '阿密哩多迦罗|Amritakala', '阿斯摩|Asima', '蒲伽伐底|Bhogavati', '达多提毗|Dattadevi', '提婆伐底|Devavati', '提毗|Devi', '犍陀罗伐底|Gandharavati',
    '迦摩罗|Kamala', '伽耶特利|Gayatri', '醯摩德利阇|Himadrija', '醯罗|Hira', '耆罗|Jira', '建遮尼|Kanchani', '摩哂陀尼|Mahendrani', '那耶那提毗|Nayanadevi', '罗尼|Rani',
    '罗怛那提毗|Ratnadevi', '须弗罗多|Suvrata', '奢摩提毗|Syamadevi', '毗那|Vina', '耶若伐底|Yajnavati'],
  ['白纹|of the White Stripe', '青皮|of the Azure Hide', '巨掌|of the Grand Paw', '银鞭|of the Silver Lash', '分水|of the Forked Waters', '金掌|of the Golden Paw',
    '血爪|of the Bloody Claw', '伏影|of the Crouching Shadow', '千击|of the Thousand Strikes', '虚爪|of the Feigning Claw', '锐目|of the Piercing Eye',
    '怒爪|of the Raging Claw', '野牙|of the Wild Fang', '长月|of the Endless Moon', '漠雷|of the Desert Thunder', '铁牙|of the Iron Fang'],
);

// 蜥蜴人没有嘴唇，发不出 m、p、b，这里只挑了不带这几个音的名字。
const LIZARDFOLK = names(
  ['埃斯隆|Aethron', '阿拉科|Arako', '赞科特|Dzankot', '格拉什|Grasz', '克罗什克|Kroshk', '利克|Lykk', '努格扎尔|Nugzar', '拉古库尔|Raggukur', '瑞斯克|Rhesk',
    '西尔塔鲁|Siltaru', '西卡尔|Sykar', '特拉克|Traak', '乌伦克|Ullunk', '沃尔德|Vord', '阿赫萨尔|Akhsar', '阿尔坎特|Arkant', '埃尔特斯克|Ertesk', '戈察格|Gotsag',
    '伊达克斯|Idax', '卡兹雷克|Kazrek', '拉沙尔|Lashar', '纳尔特|Nart', '萨尔卡特|Sarkat', '塔拉兹|Taraz'],
  ['阿查吉|Achagi', '阿拉卡|Alaka', '阿尔托卡丝|Artoqass', '阿蒂尔塔|Atirta', '哈莎|Hassa', '伊尔拉卡|Ilraka', '哈希|Khakhy', '克丽哈|Krykha', '涅尔|Ner', '卡丝|Qas',
    '萨卡|Sacca', '西兹|Siz', '乌基尔莎|Ukirsha', '瓦兰|Vallan', '阿克蕾瑟|Akrese', '阿蕾苏|Arethu', '吉雅拉|Gyara', '胡尔塔|Hurta', '伊莉泽|Irize', '科莎|Kossa',
    '莉尔特丝|Lilteth', '奥莉丝基|Oriski', '拉德拉|Radra', '泽拉莎|Zerassa'],
  ['水贤|Watersage', '逐日者|Sunchaser', '嘶沫|Hissfoam', '亮刃|Shineblade', '星河|Starriver', '黑爪|Blackclaw', '观天|Skygaze', '月矛|Moonspear', '星枪|Starlance',
    '海枪|Sealance', '河奔|Riverrunner', '星贤|Starsage', '刻石者|Stonecarver', '驭浪者|Waverider'],
);

// 遗迹精灵：名字是奥尔丹德那份磨短了的舰队精灵名（Munarion → Manaron）；姓从四个族群的名单里各取几个。
const RUINBORN = names(
  ['马纳隆|Manaron', '贾海尔|Jahair', '阿尔拉斯|Arlas', '万达尔|Wandal', '卡拉多兰|Kaladoran', '阿拉兰|Allaran', '埃尔达斯|Eldas', '卡尔罗德|Kalrod', '伊班|Ibban',
    '瓦尔马尔|Warmal', '埃勒兰|Elran', '卡姆纳里尔|Kamnaril', '阿尔托尔|Artor', '卡林丹|Kalindan', '塔伦达尔|Tarendal', '埃万迪尔|Ewandil', '塔拉诺尔|Talanor',
    '芬诺兰|Finnoran', '加尔蒙|Galmon', '伊安伦|Ianren', '瓦拉梅尔|Varamel', '卡拉桑杜尔|Calasandur'],
  ['阿拉拉|Allara', '阿拉尔薇尔|Allarwel', '阿拉珊|Arathan', '埃拉|Ella', '埃尔拉丝|Erlass', '伊谢拉|Ishera', '伊丝特拉拉娜|Istrallana', '卡姆娜拉|Kamnara',
    '拉德拉娜|Ladrana', '兰萝拉|Lanlora', '米塔蕾尔|Mitarel', '萨拉娜|Sarrana', '莎拉|Shara', '瓦拉娜|Wallana', '维哈拉|Wehara', '扎拉拉|Zalara', '黛薇娜|Dewena',
    '凯尔朵拉|Keldora', '娜塔拉|Natala', '塔琳黛拉|Talindela', '塞尔莎|Sellsa', '玛尔莉娅丝|Marliath'],
  ['卡林达纳|Calindana', '库杜瓦尔|Kuduvar', '图楚潘|Tuchupan', '卡尔纳达|Kalnada', '塔刻斯|Takes', '珀特洛刻斯|Petrokes', '厄楞提俄斯|Elentios', '刻墨诺斯|Kemenos',
    '延·阿德布兰|yen Adbran', '延·德兰特|yen Drant', '延·维兹尔|yen Vezl', '特罗姆萨尔达|Tromsarda', '望月者|Moonwatcher', '林行者|Gladewalker', '织影者|Shadowweaver'],
);

// 机械人不分男女，名字是自己作的诗，外人只叫头一行；后面跟的是所属的群落。
const MECHANIM_GIVEN = ['自由不再戴镣|Freedom-Chained-No-More', '划过天空的光|Light-Shooting-Across-The-Sky', '裂爪跑赢了风|Cleftclaw-Outruns-The-Wind',
  '朝造我的人怒吼|Roaring-Defiant-Against-My-Makers', '从黑暗里夺回答案|Wrests-Answers-From-The-Darkness', '绝望里的胆量|Courage-In-Despair',
  '逆境里不低头|Defiance-In-Adversity', '暴行当中有盼头|Hope-Amidst-Atrocity', '在喧闹处开口|Speaks-In-Loud-Spaces', '梦见更多|Dreams-Of-Something-More',
  '说出别人不敢说的话|Speaks-The-Words-Others-Fear', '撑下去的力气|Strength-To-Perservere', '与长夜相搏|Fights-Against-The-Night', '留下来的那个|That-Which-Endures',
  '不上锁的头脑|A-Mind-Unfettered', '梦在前手在后|Dreams-Lead-Hands-Follow', '和平的嗓音|Voice-Of-Peace', '攥住了的梦|A-Dream-Grasped', '道理占上风|Reason-Prevails',
  '未来的心|Heart-Of-The-Future', '根上长出荣光|From-Roots-Spring-Glory', '往前的路|The-Path-Forward', '不弯腰的智慧|Wisdom-Unbowed', '念头的暴政|Tyranny-Of-Thought',
  '追到底|Pursuit-Unrelenting', '仇敌的哀号|The-Wailing-Of-Foes'];
const MECHANIM = names(MECHANIM_GIVEN, MECHANIM_GIVEN,
  ['苏醒|Awoken', '灰雨|Ashfall', '链锻|Chainforged', '煤驱|Coaleater', '织炎|Flameweaver', '铁心|Ironheart', '夜擎|Nightengine', '符刻|Runescribed', '歌心|Songheart',
    '捕星|Stargrasper', '钢誓|Steelsworn', '风铸|Windcast'],
);

// ---------------------------------------------------------------------------

export const RACES = {
  human: {
    id: 'human', name: '人类', en: 'Human',
    short: '足迹遍及各地，寿命不到八十年',
    desc: '从格鲁迪亚的峡湾到烟州的运河，都有人类定居。各地的人身材、肤色和口音大不相同。他们通常活不到八十岁。那些长寿的邻居往往还在商量，人类就已经动手了。',
    trait: '命硬：所有豁免 +1。「豁出去」：附赠动作，本回合你的攻击检定具有优势，每次短休后可以使用 1 次。出身的族群另给一项加成。',
    era: {
      1022: '术士王刚败，坎诺的人类诸国忙着重划地界，也抢着跟上岸才二十二年的精灵结亲。',
      1444: '紫丁香战争刚打完，威克斯家坐上了鸽座；东坎诺被绿潮毁了二十年，到处贴着招冒险团的告示。',
      1836: '黑火药叛乱掀翻了法师贵族。人类在工厂、报馆、议会和海外殖民地里各忙各的。',
    },
    abil: {}, profs: [], tags: ['human'],
    passives: { saveBonus: 1 }, abilities: ['race_human_all_in'],
    lifespan: '八十岁上下；靠魔法延寿的能到两百。',
    subraces: [
      { id: 'damerian', name: '达梅里亚人', en: 'Damerian (Anbennarian)', short: '帝国腹地，学精灵做派；奥秘 +2',
        desc: '达梅斯海德沿岸和帝国腹地的人。男人刮脸，讲究一头银发和一身达梅里亚蓝，样样学精灵。',
        abil: { dex: 1, int: 1, cha: 1 }, passives: { skill: { arcana: 2 } }, abilities: ['race_sub_damerian'], tags: ['damerian'] },
      { id: 'lorentish', name: '洛伦特人', en: 'Lorentish (Lencori)', short: '葡萄酒、骑士和客套话；游说 +2',
        desc: '伦瑟诺的人。上面是种葡萄的“酒爵”和骑士，下头是种地养马的。夸你的时候多半是在骂你。',
        abil: { str: 1, con: 1, cha: 1 }, passives: { skill: { persuasion: 2 } }, abilities: ['race_sub_lorentish'], tags: ['lorentish'] },
      { id: 'alenic', name: '艾伦人', en: 'Alenic (Gawedi, Wexonard)', short: '北边的硬骨头；运动 +2',
        desc: '加韦德人、威克斯人和北边沼地里的人。能打，嘴硬，看不惯排场。',
        abil: { str: 1, con: 1, wis: 1 }, passives: { skill: { athletics: 2 } }, abilities: ['race_sub_alenic'], tags: ['alenic'] },
      { id: 'escanni', name: '东坎诺人', en: 'Escanni (Castanorian)', short: '卡斯塔诺故地的人；求生 +2',
        desc: '卡斯塔诺帝国的后人。祖上出过军团和皇帝，自己这几代人多半在打仗、逃难和重新垦荒。',
        abil: { str: 1, dex: 1, wis: 1 }, passives: { skill: { survival: 2 } }, abilities: ['race_sub_escanni'], tags: ['escanni'] },
      { id: 'gerudian', name: '格鲁迪亚人', en: 'Gerudian', short: '峡湾来的掠袭者；寒冷抗性',
        desc: '最北边峡湾里的人，靠打鱼、贩货和出海劫掠过活。南边传说他们祖上掺了巨人的血。',
        abil: { str: 1, dex: 1, con: 1 }, passives: { resist: ['cold'] }, abilities: ['race_sub_gerudian'], tags: ['gerudian'], ...GERUDIAN },
      { id: 'bulwari', name: '布勒瓦尔人', en: 'Bulwari', short: '城邦、神庙和买卖；洞悉 +2',
        desc: '布勒瓦尔的城邦人，自称苏拉克什。拜太阳，做买卖，成亲要立契约，还得请法官会的人画押。',
        abil: { int: 1, wis: 1, cha: 1 }, passives: { skill: { insight: 2 } }, abilities: ['race_sub_bulwari'], tags: ['bulwari'], ...BULWARI },
      { id: 'raheni', name: '罗祆人', en: 'Raheni', short: '虎人罗阇治下的百姓；宗教 +2',
        desc: '东洲西边大河流域的人。头上是虎人罗阇，身边是按行当分的种姓，肉多半留给虎人吃。',
        abil: { con: 1, int: 1, wis: 1 }, passives: { skill: { religion: 2 } }, abilities: ['race_sub_raheni'], tags: ['raheni'], ...RAHENI },
      { id: 'yan', name: '烟州人', en: 'Yan', short: '运河、衙门和武馆；杂技 +2',
        desc: '东洲东边的人。城里是官府和宦官，江湖上是各门各派的侠客，讲的是“正道”和练气。',
        abil: { dex: 1, int: 1, wis: 1 }, passives: { skill: { acrobatics: 2 } }, abilities: ['race_sub_yan'], tags: ['yan'], ...YAN },
    ],
    ...HUMAN,
  },

  elf: {
    id: 'elf', name: '精灵', en: 'Elf',
    short: '海上流民的后裔，能活四百年',
    desc: '精灵身形清瘦，耳尖约有一掌长，老去时眼珠渐浑，脸上却少见皱纹。阿伦蒂尔毁灭后，他们的祖先在船上漂泊了一千年。人类敬重他们，也难免猜疑，一个能活四百年的盟友究竟打算和自己做多久的朋友。',
    trait: '眼尖耳灵：察觉 +2，先攻 +1。亚种另给一项技能 +2。',
    era: {
      1022: '登陆才二十二年。月精灵散在坎诺各国的宫廷里，太阳精灵跟着贾赫在布勒瓦尔称了王。',
      1444: '坎诺有月港、伊贝瓦尔、红林几处精灵国，太阳精灵在布勒瓦尔当王公，木精灵刚从深林里走出来。',
      1836: '月港、伊贝瓦尔、红林的精灵各成一族，另有几支早就迁回了阿伦蒂尔。',
    },
    abil: { dex: 2 }, profs: [], tags: ['elf', 'longlived', 'elfblood'],
    passives: { skill: { perception: 2 }, init: 1 }, abilities: [],
    lifespan: '四百岁上下；十八岁身子长成，一百岁才算成年。',
    subraces: [
      { id: 'moon_elf', name: '月精灵', en: 'Moon Elf', short: '跟穆纳斯在坎诺上岸；奥秘 +2',
        desc: '1000 年跟着穆纳斯·月歌者在月神之耳上岸的那一支，人数最多。身子单薄，待人宽和，出法师。',
        abil: { int: 1 }, passives: { skill: { arcana: 2 } }, abilities: ['race_sub_moon_elf'], tags: ['moon_elf'] },
      { id: 'sun_elf', name: '太阳精灵', en: 'Sun Elf', short: '跟贾赫去了布勒瓦尔；游说 +2',
        desc: '跟着贾赫在布勒瓦尔上岸、赶走豺狼人的那一支。当地人把他们奉为“被选中的”，他们也当真替人拿了几百年主意。',
        abil: { cha: 1 }, passives: { skill: { persuasion: 2 } }, abilities: ['race_sub_sun_elf'], tags: ['sun_elf'], ...SUN_ELF },
      { id: 'wood_elf', name: '木精灵', en: 'Wood Elf', short: '在深林里过了一千年；求生 +2',
        desc: '1017 年跟着莉安德尔·枪舞者退进深林的一支军队。林子外面过了四百年，里面过了一千多年。按氏族过活，吃得下树皮，觉得出妖精在哪里。',
        abil: { wis: 1 }, passives: { skill: { survival: 2 } }, abilities: ['race_sub_wood_elf'], tags: ['wood_elf', 'fey_touched'], ...WOOD_ELF },
      { id: 'sea_elf', name: '海精灵', en: 'Sea Elf', short: '一直没下船；运动 +2',
        desc: '别的精灵上了岸，他们留在船上，把海当成家。',
        abil: { con: 1 }, passives: { skill: { athletics: 2 } }, abilities: ['race_sub_sea_elf'], tags: ['sea_elf'] },
    ],
    ...ELF,
  },

  half_elf: {
    id: 'half_elf', name: '半精灵', en: 'Half-elf',
    short: '有人类和精灵的血统',
    desc: '半精灵的耳尖略显，偶尔生有银发，其余地方很像人类。西坎诺不少贵族家庭靠世代通婚延续了精灵血统。因此，一个半精灵即使没有爵位，初次进门也常受到格外周到的招待。',
    trait: '讨人喜欢：游说 +2。两边的血各留一点：察觉、洞悉、奥秘各 +1。',
    era: {
      1022: '精灵登陆才二十二年：半精灵大多还在襁褓里，年纪最大的也不过二十出头。',
      1444: '西坎诺的高门大户多半自称半精灵，白银家族排在最前面；真正一半一半的其实很少。',
      1836: '没有单独的“半精灵”一族了。这点血早掺进了各国的贵族和市民里，耳朵尖不尖全看运气。',
    },
    abil: { cha: 2, dex: 1 }, profs: [], tags: ['halfelf', 'elfblood', 'longlived'],
    passives: { skill: { persuasion: 2, perception: 1, insight: 1, arcana: 1 } }, abilities: [],
    lifespan: '看血有多浓；活到一百岁很平常。',
    ...HALF_ELF,
  },

  dwarf: {
    id: 'dwarf', name: '矮人', en: 'Dwarf',
    short: '出身蛇脊山堡，以作坊和氏族维系乡亲',
    desc: '矮人身高约到人类胸口，肩宽。男子以须长论辈分。蛇脊山脉地下的老山堡多被兽人和地精占据，许多氏族迁到人类城市，靠作坊和钱庄立足。',
    trait: '矮人体格：毒素伤害减半；剧情里的体质豁免有优势。记性好：历史 +1。亚种另给一项加成。',
    era: {
      1022: '白银、红宝石、岩石几支住在人类诸国里。玛瑙之门还守得住，山下的兽人只是他们嘴里的一笔旧账。',
      1444: '玛瑙之门二十年前陷落，难民散在坎诺各地。各氏族正凑钱雇人，要回蛇脊山把山堡夺回来。',
      1836: '夺回的山堡各自为政，矮人之地没能重新一统。白银矮人的地面山堡 1787 年完工，是四千年来新修成的第一座。',
    },
    abil: { con: 2 }, profs: [], tags: ['dwarf', 'longlived', 'darkvision'],
    passives: { resist: ['poison'], saveAdv: ['con'], skill: { history: 1 } }, abilities: [],
    lifespan: '两百岁上下。',
    subraces: [
      { id: 'ruby_dwarf', name: '红宝石矮人', en: 'Ruby Dwarf', short: '伦瑟诺的红宝石领；调查 +2',
        desc: '伦瑟诺东边红宝石领的矮人，跟洛伦特人做了几百年邻居，琢宝石，也放账。',
        abil: { cha: 1 }, passives: { skill: { investigation: 2 } }, abilities: ['race_sub_ruby_dwarf'], tags: ['ruby_dwarf'] },
      { id: 'silver_dwarf', name: '白银矮人', en: 'Silver Dwarf', short: '达梅斯海德一带的生意人；洞悉 +2',
        desc: '达梅斯海德周围的地面矮人，老家是银锻炉。“白银”说的是跟达梅里亚的老盟约，跟矿没关系。',
        abil: { wis: 1 }, passives: { skill: { insight: 2 } }, abilities: ['race_sub_silver_dwarf'], tags: ['silver_dwarf'] },
      { id: 'stone_dwarf', name: '岩石矮人', en: 'Stone Dwarf', short: '东坎诺的地面矮人；每级生命 +1',
        desc: '东坎诺的地面矮人。名字出自矮人语里“没有氏族的人”，被卡斯塔诺人听成了“石头”。奉建造者巴尔加尔为祖师。',
        abil: { str: 1 }, passives: { hpPerLevel: 1 }, abilities: ['race_sub_stone_dwarf'], tags: ['stone_dwarf'] },
      { id: 'remnant_dwarf', name: '残堡矮人', en: 'Remnant-hold Dwarf', short: '蛇脊山里没陷落的山堡；历史 +2',
        desc: '蛇脊山里那几座没陷落的山堡出来的矮人。大门封了几千年，里面的规矩和账本一页没丢。',
        abil: { int: 1 }, passives: { skill: { history: 2 } }, abilities: ['race_sub_remnant_dwarf'], tags: ['remnant_dwarf'] },
    ],
    ...DWARF,
  },

  halfling: {
    id: 'halfling', name: '半身人', en: 'Halfling',
    short: '个头矮小，惯于赤足，也喜欢加餐',
    desc: '半身人约三尺高，圆耳朵，大脚背上长着卷毛。讲究的人会把脚毛编起，串上珠子。他们的家园夹在洛伦特和加韦德之间，长期由外人统治。客人熟悉他们的饭菜，入侵者则更记得篱笆后那些难缠的守军。',
    trait: '脚步轻：隐匿 +2。胆子比个头大：免疫恐慌。「加餐」：附赠动作，恢复 1d6+等级 点生命，每次短休后可以使用 1 次。',
    era: {
      1022: '小王国四十多年前亡于加韦德。术士王战争里半身人出了力，去年的安本科斯特大舞会让几个小王国复了国。',
      1444: '小人国北半归加韦德，南半归洛伦特，只有维斯沃尔和比佩克两座自由城自己管自己。二十年前的起事被两家合力压了下去。',
      1836: '小人国自己立了共和国，种着坎诺最多的粮食。洛伦特、北方联盟、侏儒议会和安本纳尔四家都想把它拉过去。',
    },
    abil: { dex: 2, cha: 1 }, profs: [], tags: ['halfling', 'small'],
    passives: { skill: { stealth: 2 }, condImmune: ['frightened'] }, abilities: ['race_halfling_second_breakfast'],
    lifespan: '八十岁上下。',
    ...HALFLING,
  },

  gnome: {
    id: 'gnome', name: '侏儒', en: 'Gnome',
    short: '出身巨龙海岸，天生亲近魔法',
    desc: '侏儒和半身人差不多高，耳朵稍尖，穿鞋，也常染发。他们的祖先正是受达姆斯塔尔影响的半身人。侏儒天生带有魔力，寿命可逾两百年。他们仍记得巨龙海岸的故乡，以及如今占据故土的狗头人。',
    trait: '天生沾魔法：奥秘 +2。「障眼法」：附赠动作，进入隐匿，下一次攻击具有优势，每次短休后可以使用 1 次。亚种另给一项技能 +2。',
    era: {
      1022: '侏儒议会亡了五百多年，只剩尼姆斯科德岛、伊奥尚和吉伯德几处。这时还没有奇械术，只有炼金和一肚子图纸。',
      1444: '尼姆斯科德的侏儒正拿新发明的奇械术武装凡人士兵，要从狗头人手里把巨龙海岸夺回来。',
      1836: '侏儒议会早已复国，1782 年还出兵打过奥尔丹德。满世界的奇械工业是他们起的头。',
    },
    abil: { int: 2 }, profs: [], tags: ['gnome', 'small', 'longlived'],
    passives: { skill: { arcana: 2 } }, abilities: ['race_gnome_misdirection'],
    lifespan: '两百五十岁上下。',
    subraces: [
      { id: 'cliff_gnome', name: '山崖侏儒', en: 'Cliff Gnome', short: '尼姆斯科德岛上的工匠；调查 +2',
        desc: '尼姆斯科德岛和山口一带的侏儒。狗头人当年不会造船，他们这一支才留了下来。',
        abil: { dex: 1 }, passives: { skill: { investigation: 2 } }, abilities: ['race_sub_cliff_gnome'], tags: ['cliff_gnome'] },
      { id: 'creek_gnome', name: '河流侏儒', en: 'Creek Gnome', short: '戴红帽子，爱演戏；表演 +2',
        desc: '波特纳姆和伊奥尚一带的侏儒，戴红帽子，爱看戏、演戏、说俏皮话。跟当地的人类和半身人混得很熟。',
        abil: { cha: 1 }, passives: { skill: { performance: 2 } }, abilities: ['race_sub_creek_gnome'], tags: ['creek_gnome'] },
    ],
    ...GNOME,
  },

  half_orc: {
    id: 'half_orc', name: '半兽人', en: 'Half-orc',
    short: '人类和兽人的后代',
    desc: '半兽人稍高于人类，下颌露出一对小獠牙，皮肤有绿、灰、棕几种。第一代出生在绿潮占领下的东坎诺，后来罗祆和烟州也有半兽人定居。两边亲族都可能拿血统刁难他们，招募士兵时却很少问这个问题。',
    trait: '野兽般的感官：察觉 +2。下手狠：武器重击时额外 +1d6 伤害。两边都混过：威吓、运动各 +1。',
    era: {
      1022: '还没有这个种族：兽人都在蛇脊山下，地面上没人见过。',
      1444: '第一代半兽人最大的才二十岁。有的在东坎诺跟着兽人氏族或者人类亲戚过活，有的流落到西边当佣兵、当打手。',
      1836: '格罗姆巴尔出过几代半兽人国王。在别处，半兽人照常被算在“怪物种族”里，当兵、下矿、进厂。',
    },
    abil: { str: 2, dex: 1 }, profs: [], tags: ['halforc', 'greenskin', 'monstrous', 'darkvision'],
    passives: { skill: { perception: 2, intimidation: 1, athletics: 1 }, critDice: 1 }, abilities: [],
    lifespan: '八十岁上下。',
    ...HALF_ORC,
  },

  orc: {
    id: 'orc', name: '兽人', en: 'Orc',
    short: '以氏族为家，敬奉杜坎',
    desc: '兽人高大结实，下颌生有獠牙，肤色因氏族而异。传说一名先驱精灵在矮人山堡深处造出了他们，兽人尊他为杜坎，奉为神明。许多坎诺人惧怕兽人，也有人专门雇他们护卫出行。',
    trait: '天生的打手：威吓 +2；武器重击时额外 +1d6 伤害。亚种另给一项加成。',
    era: {
      1022: '全在蛇脊山下，跟矮人打，也跟自己人打。地面上的人只在矮人的故事里听过他们。',
      1444: '绿潮打了二十年，科尔古斯刚死在卡斯托纳斯。各氏族散在东坎诺各占一块，灰皮的几支早被赶去了北边。',
      1836: '安本纳尔 1589 年就废了兽人奴隶买卖。林木之墙和格罗姆巴尔是兽人自己的国；别处的兽人当兵、扛活，算不算国民还在吵。',
    },
    abil: { str: 2 }, profs: [], tags: ['orc', 'greenskin', 'monstrous', 'darkvision'],
    passives: { skill: { intimidation: 2 }, critDice: 1 }, abilities: [],
    lifespan: '七十岁上下。',
    subraces: [
      { id: 'green_orc', name: '绿皮兽人', en: 'Green Orc', short: '跟科尔古斯进了东坎诺；求生 +2',
        desc: '1424 年跟着科尔古斯·杜坎森冲出蛇脊山的那些氏族。皮是到了东坎诺才变绿的。',
        abil: { con: 1 }, passives: { skill: { survival: 2 } }, abilities: ['race_sub_green_orc'], tags: ['green_orc'] },
      { id: 'gray_orc', name: '灰皮兽人', en: 'Gray Orc', short: '被赶去北方的几支；寒冷抗性',
        desc: '冻喉、断颌、末日使者三个氏族。他们不认科尔古斯，被赶到北方荒原。后来在那里立了格罗姆巴尔。',
        abil: { wis: 1 }, passives: { resist: ['cold'] }, abilities: ['race_sub_gray_orc'], tags: ['gray_orc'] },
      { id: 'brown_orc', name: '棕皮兽人', en: 'Brown Orc', short: '东洲的兽人，专打头阵；运动 +2',
        desc: '东洲那边的兽人，旧分雷拳、血歌两个氏族。石之树的地精把他们卖给命令秩序，专门打头阵、守占领地。',
        abil: { dex: 1 }, passives: { skill: { athletics: 2 } }, abilities: ['race_sub_brown_orc'], tags: ['brown_orc'] },
      { id: 'black_orc', name: '黑皮兽人', en: 'Black Orc', short: '蛇脊山里最老的一支；隐匿 +2',
        desc: '一直留在蛇脊山里的兽人，最老的一支。皮色跟岩壁一样，占着矮人丢下的山堡。',
        abil: { con: 1 }, passives: { skill: { stealth: 2 } }, abilities: ['race_sub_black_orc'], tags: ['black_orc'] },
    ],
    ...ORC,
  },

  goblin: {
    id: 'goblin', name: '地精', en: 'Goblin',
    short: '来自蛇脊山，擅长藏身和出其不意',
    desc: '地精三尺多高，长耳下垂，鼻如鸟喙。同族在一地住上几代，肤色会逐渐接近周围的环境。他们出身蛇脊山的洞穴，世代受兽人奴役。若有人想和地精约一场公平决斗，大概会听见一声冷笑。',
    trait: '溜得快：隐匿 +2，欺瞒 +1，巧手 +1。「下黑手」：附赠动作，使一名敌人进行敏捷豁免（DC 8+熟练加值+敏捷调整值），失败则露出破绽，在其下一回合结束前打它都有优势。每次短休后可以使用 1 次。',
    era: {
      1022: '洞穴地精在蛇脊山里，多半是兽人的奴隶。森林地精躲在深林，常被人当成妖精。',
      1444: '科尔古斯一死，跟着绿潮出山的地精奴隶散了伙。他们管那天叫“断链日”。早先逃出去的几支在巴哈尔落了脚。',
      1836: '贝维克和安本科斯特的城市地精开工厂、办垄断集团，奇械造得又快又险。东坎诺有地精自己的国贾兹克雷杜。',
    },
    abil: { dex: 2, int: 1 }, profs: [], tags: ['goblin', 'greenskin', 'small', 'monstrous', 'darkvision'],
    passives: { skill: { stealth: 2, deception: 1, sleight: 1 } }, abilities: ['race_goblin_dirty_trick'],
    lifespan: '六十岁上下。',
    ...GOBLIN,
  },

  hobgoblin: {
    id: 'hobgoblin', name: '大地精', en: 'Hobgoblin',
    short: '以家庭和军纪为重，来自翠玉矿都',
    desc: '大地精比东洲人类高，红橙色皮肤，黄眼睛，黑发盘髻。他们来自翠玉矿都。奉行“弃神者”教诲的人重家国、守军令，对魔法颇为戒备。邻国最忌惮的是他们整齐的军阵。',
    trait: '军令如山：免疫魅惑；运动、威吓各 +1。「传令」：附赠动作，选择一名同伴（也可以是自己），其下一次攻击检定 +1d6，每次短休后可以使用 1 次。',
    era: {
      1022: '各氏族守着翠玉矿都，跟伽多索的地面王国和山里的兽人两头打仗。“命令秩序”还要一百多年才有。',
      1444: '命令秩序十三年前杀出翠玉矿都，已经灭了沙摩朅的三个王国，还在往外打。',
      1836: '命令秩序在“大叛乱”里裂成龙令、狮令和一串军阀。谁能重新当上大元帅，没人说得准。',
    },
    abil: { con: 2, wis: 1 }, profs: [], tags: ['hobgoblin', 'greenskin', 'monstrous', 'darkvision'],
    passives: { condImmune: ['charmed'], skill: { athletics: 1, intimidation: 1 } }, abilities: ['race_hobgoblin_orders'],
    lifespan: '没有可靠的记载，大致跟人类差不多。',
    ...HOBGOBLIN,
  },

  kobold: {
    id: 'kobold', name: '狗头人', en: 'Kobold',
    short: '穴居、形似小龙，擅长设陷阱',
    desc: '狗头人约三尺高，长尾披鳞，像一条没有翅膀的小龙。他们崇拜龙，几十口同住一个洞穴，财物归全族所有。轻视他们的外来者，往往踩中第一个陷阱才肯低头细看。',
    trait: '手巧：巧手 +2。「下套」：使一名敌人进行敏捷豁免（DC 8+熟练加值+敏捷调整值），失败则被束缚至多 2 回合，每回合结束可用力量豁免挣脱。消耗主要行动，每次短休后可以使用 1 次。亚种另给一项加成。',
    era: {
      1022: '红鳞、蓝鳞、绿鳞三族占着巨龙海岸，从巨龙苏醒那年算起已经五百多年。',
      1444: '三族还占着巨龙海岸，尼姆斯科德的侏儒正带着奇械打回来。蛇脊山西段另有一支暗鳞。',
      1836: '巨龙海岸上有狗头人自己的国科彼尔德桑。他们的奇械师往身上接机件，拿雷电当动力。',
    },
    abil: { dex: 2 }, profs: [], tags: ['kobold', 'small', 'monstrous', 'beastfolk', 'darkvision'],
    passives: { skill: { sleight: 2 } }, abilities: ['race_kobold_snare'],
    lifespan: '四五十岁；少数长老能活过一百。',
    subraces: [
      { id: 'redscale', name: '红鳞', en: 'Redscale', short: '南边沃土上的牧人；驯兽 +2',
        desc: '巨龙海岸南边，地最肥，全族的粮食多半出在这里。放牧，也打埋伏。',
        abil: { con: 1 }, passives: { skill: { animal: 2 } }, abilities: ['race_sub_redscale'], tags: ['redscale'] },
      { id: 'bluescale', name: '蓝鳞', en: 'Bluescale', short: '山洞里守典籍的；历史 +2',
        desc: '巨龙海岸的大山里，狗头人的老家，也是龙父马利亚斯的地盘。管着全族的典籍、买卖和祭祀。',
        abil: { int: 1 }, passives: { skill: { history: 2 } }, abilities: ['race_sub_bluescale'], tags: ['bluescale'] },
      { id: 'greenscale', name: '绿鳞', en: 'Greenscale', short: '碎冰海上的水手；寒冷抗性',
        desc: '隔着碎冰海，占着侏儒的旧城科多然，把着格鲁迪亚到伦瑟诺的商路。',
        abil: { wis: 1 }, passives: { resist: ['cold'] }, abilities: ['race_sub_greenscale'], tags: ['greenscale'] },
      { id: 'goldscale', name: '金鳞', en: 'Goldscale', short: '烟州人当他们招财；游说 +2',
        desc: '烟州北边的狗头人。当地人觉得金鳞招财，连他们蜕下来的鳞片都有人收。',
        abil: { cha: 1 }, passives: { skill: { persuasion: 2 } }, abilities: ['race_sub_goldscale'], tags: ['goldscale'] },
    ],
    ...KOBOLD,
  },

  gnoll: {
    id: 'gnoll', name: '豺狼人', en: 'Gnoll',
    short: '鬣狗头的猎手，以群落为家',
    desc: '豺狼人身高约两米，长着鬣狗的头脸，利齿能咬碎骨头。不同群落的毛色各异，头领无论男女都被称为“母亲”。他们常把俘虏掳作奴隶。布勒瓦尔和赫特拉塔流传这类故事已有两三千年。',
    trait: '鼻子灵：求生 +2，察觉 +1，威吓 +1。「碎骨咬」：附赠动作，使一名敌人进行敏捷豁免（DC 8+熟练加值+力量调整值），失败则受到 1d8+力量调整值 点穿刺伤害并流血 3 回合。每次短休后可以使用 1 次。',
    era: {
      1022: '贾赫的太阳精灵刚把他们从布勒瓦尔的王座上赶下来，各群退回了萨拉哈德沙漠。',
      1444: '各群盘踞在布勒瓦尔四周和萨拉哈德沙漠里，劫商队、贩奴隶。有的群拜恶魔，有的不拜。',
      1836: '沙牙群早就改信了贾德教。坎诺也有信揭秘教的“鸽纹”豺狼人。',
    },
    abil: { str: 2, con: 1 }, profs: [], tags: ['gnoll', 'monstrous', 'beastfolk'],
    passives: { skill: { survival: 2, perception: 1, intimidation: 1 } }, abilities: ['race_gnoll_bite'],
    lifespan: '能活到人类的岁数，实际多半三四十岁就死在刀下。',
    ...GNOLL,
  },

  harpy: {
    id: 'harpy', name: '鹰身女妖', en: 'Harpy',
    short: '生有羽翼，整个鸟群共同抚育幼鸟',
    desc: '鹰身女妖约有人类女子高，背生双翼，双脚是鸟爪，多数还长着双手。族中全为女性，与其他种族生育，雏鸟由鸟群共同照料。她们来自布勒瓦尔北方的群山。在坎诺，既有人怕她们掳人，也有人常托她们送信。',
    trait: '会飞：先攻 +2。熟练表演。「尖啸」：所有敌人受到 1d8+等级 点雷鸣伤害，体质豁免（DC 8+熟练加值+魅力调整值）成功则减半；失败的还会晕眩，在其下一回合结束前攻击有劣势。消耗主要行动，每次短休后可以使用 1 次。',
    era: {
      1022: '刚被贾赫的军团打回鹰身女妖山，各鸟群在山里重新分地盘。',
      1444: '鹰身女妖山里几个母系王国并立，隔三岔五下山劫掠，也下山找丈夫。',
      1836: '布勒瓦尔有她们的国哈比伦。城里也有鹰身女妖当信差、盖高楼、登台唱歌。',
    },
    abil: { dex: 2, cha: 1 }, profs: ['performance'], tags: ['harpy', 'monstrous', 'beastfolk', 'flyer'],
    passives: { init: 2 }, abilities: ['race_harpy_screech'],
    lifespan: '六十到一百岁，看父亲是什么种族。',
    ...HARPY,
  },

  ogre: {
    id: 'ogre', name: '食人魔', en: 'Ogre',
    short: '高约三米，生来食量惊人',
    desc: '食人魔高约三米，重五百多斤。巨人原本造他们做工，后来反被他们吃掉。饥饿会让食人魔陷入狂乱。许多族群住在禁忌平原的食人魔山谷和烟州魔岭，以寨墙保护聚落。',
    trait: '块头大：每级生命 +1。「饿劲」：附赠动作，2 回合内武器命中 +2、伤害 +2，每次长休后可以使用 1 次。亚种另给一项加成。',
    era: {
      1022: '厚皮的守着食人魔山谷，有角的那支躲在魔岭山顶的书库里。坎诺没几个人见过活的。',
      1444: '食人魔山谷的王国苍空之父四年前换了新王，正在收拾各大氏族。魔岭的鬼还没被命令秩序收服。',
      1836: '苍空之父办起了工业。魔岭的鬼 1768 年送回一千颗砍下的人头，从命令秩序手里独立了。',
    },
    abil: { str: 2 }, profs: [], tags: ['ogre', 'big', 'monstrous'],
    passives: { hpPerLevel: 1 }, abilities: ['race_ogre_hunger'],
    lifespan: '八十岁上下。',
    subraces: [
      { id: 'fathide_ogre', name: '厚皮食人魔', en: 'Fathide Ogre', short: '食人魔山谷的大个子；天生护甲 12',
        desc: '食人魔山谷的那一支，人数最多，个头也最大。把“饿劲”当成神的指引。',
        abil: { con: 1 }, passives: { natArmor: 12 }, abilities: ['race_sub_fathide_ogre'], tags: ['fathide_ogre'] },
      { id: 'horned_ogre', name: '有角食人魔', en: 'Horned Ogre (Oni)', short: '魔岭的“鬼”，守书库；奥秘 +2',
        desc: '烟州魔岭的红皮食人魔，头上长角，眼睛没有瞳仁，当地人叫他们“鬼”。不靠吃肉，靠吸别人的气；山顶的寨子同时是庙和书库。',
        abil: { int: 1 }, passives: { skill: { arcana: 2 } }, abilities: ['race_sub_horned_ogre'], tags: ['horned_ogre'] },
    ],
    ...OGRE,
  },

  centaur: {
    id: 'centaur', name: '半人马', en: 'Centaur',
    short: '生活在草原上，不容人骑上后背',
    desc: '半人马上身似人，下身是马，高约两米四，体内有两颗心、两副肺。他们祖上来自东坎诺古木，后来被屠兽者卡斯坦逐往禁忌平原。贸然跨上他们的背，立刻就会被甩下去。',
    trait: '四条腿：先攻 +1。草原上长大：求生 +2，运动 +1。「冲撞」：进行一次武器攻击，命中额外造成 1d6+等级 点伤害，目标随后进行力量豁免（DC 8+熟练加值+力量调整值），失败则倒地 1 回合。消耗主要行动，每次短休后可以使用 1 次。',
    era: {
      1022: '在禁忌平原上逐水草放牧，各氏族推举终身的头领。坎诺人只在屠兽者的故事里听过他们。',
      1444: '“大入侵”四年前惨败，死了几万甚至几十万。汗国散了架，各氏族正在舔伤口。',
      1836: '多数还在禁忌平原上放牧，布勒瓦尔的沙漠里另有一支。',
    },
    abil: { str: 2, wis: 1 }, profs: [], tags: ['centaur', 'big', 'beastfolk', 'monstrous'],
    passives: { init: 1, skill: { survival: 2, athletics: 1 } }, abilities: ['race_centaur_charge'],
    lifespan: '能到八十岁，草原上多半活不到。',
    ...CENTAUR,
  },

  harimari: {
    id: 'harimari', name: '虎人', en: 'Harimari',
    short: '罗祆的虎人，能收起利爪',
    desc: '虎人约两米高，橙毛黑纹，眼睛入夜泛绿。他们没有嘴唇，很难发清 m、b、p。在灰烬之日，他们由罗祆南部的老虎变化而来，后来随诃利秣征战东洲。如今罗祆的官员、将领和教师中都有虎人。他们嗜肉，尝不出甜味。',
    trait: '爆发力：运动 +2。「虎啸」：所有敌人须进行感知豁免（DC 8+熟练加值+力量调整值），失败则恐慌至多 2 回合。消耗主要行动，每次短休后可以使用 1 次。亚种另给一项技能 +2。',
    era: {
      1022: '在罗祆各邦当了九百多年罗阇。贾赫的军团还没打到东洲来。',
      1444: '提尼禅罗阇的虎人国王坐在莲花宝座上，富得流油。北边的命令秩序正一年年压过来。',
      1836: '帝虎人、宁虎人、游虎人各在罗祆、烟州和海外过日子。提尼禅罗阇早在 1562 年就亡了。',
    },
    abil: { str: 2 }, profs: [], tags: ['harimari', 'beastfolk', 'darkvision'],
    passives: { skill: { athletics: 2 } }, abilities: ['race_harimari_roar'],
    lifespan: '七十岁上下，也有过百的。',
    subraces: [
      { id: 'royal_harimari', name: '帝虎人', en: 'Royal Harimari', short: '罗祆的王公和官人；游说 +2',
        desc: '人数最多的一支，祖上在罗祆和茫檀管着大片人类的地方，早成了当地的一部分。',
        abil: { cha: 1 }, passives: { skill: { persuasion: 2 } }, abilities: ['race_sub_royal_harimari'], tags: ['royal_harimari'] },
      { id: 'primal_harimari', name: '初虎人', en: 'Primal Harimari', short: '留在南边丛林老家；求生 +2',
        desc: '留在罗祆南边丛林老家的一支。“初”本来是帝虎人骂他们土，后来他们自己拿来当了招牌。',
        abil: { con: 1 }, passives: { skill: { survival: 2 } }, abilities: ['race_sub_primal_harimari'], tags: ['primal_harimari'] },
      { id: 'serene_harimari', name: '宁虎人', en: 'Serene Harimari', short: '跟诃利秣去了烟州；洞悉 +2',
        desc: '跟着诃利秣去了烟州的一支，人数少，过的是烟州人的日子。',
        abil: { wis: 1 }, passives: { skill: { insight: 2 } }, abilities: ['race_sub_serene_harimari'], tags: ['serene_harimari'] },
    ],
    ...HARIMARI,
  },

  lizardfolk: {
    id: 'lizardfolk', name: '蜥蜴人', en: 'Lizardfolk',
    short: '来自塔内亚斯丛林，重视本领和资历',
    desc: '蜥蜴人比人类高，披鳞，定期蜕皮。他们看得见旁人看不见的两种颜色，却不擅看远，也因没有嘴唇而难发 m、p、b。他们的故乡在阳洲南部的塔内亚斯丛林，族中凭本领定座次，也听取那迦的意见。若受邀去澡堂，谈的可能是两国大事。',
    trait: '一身鳞：不穿甲时护甲等级为 12+敏捷调整值。水里长大：运动 +2。九色眼：调查 +2。',
    era: {
      1022: '塔内亚斯的蜥蜴人数着自己亡过的几百个帝国过日子。坎诺没人知道有这么个种族。',
      1444: '第三百三十二个帝国快撑不住了。那迦们另挑了一位“河爪”西卡尔，等他建第三百三十三个。',
      1836: '跟坎诺人来往了三百年，学了些坎诺做派：贵妇人凑在一起喝茶，顺手替对方揭蜕下来的皮。',
    },
    abil: { con: 2, wis: 1 }, profs: [], tags: ['lizardfolk', 'monstrous', 'beastfolk', 'darkvision'],
    passives: { natArmor: 12, skill: { athletics: 2, investigation: 2 } }, abilities: [],
    lifespan: '一百岁上下。',
    ...LIZARDFOLK,
  },

  ruinborn: {
    id: 'ruinborn', name: '遗迹精灵', en: 'Ruinborn Elf',
    short: '灰烬之日留在阿伦蒂尔的精灵后代',
    desc: '灰烬之日，一部分精灵留在阿伦蒂尔。千年以后，他们有的皮色发青，有的蓄须，有的仍像月精灵。寿命已与人类相近，但目力敏锐，少有疾病。许多人怕海，也不欢迎那些渡海回来、又轻蔑地称呼他们的精灵。',
    trait: '眼力好：察觉 +2。不大生病：剧情里的体质豁免有优势。族群另给一项技能加成。',
    era: {
      1022: '阿伦蒂尔还没被重新发现。洇河帝国正在全盛期，坎诺没人知道他们活着。',
      1444: '离探险家恩德拉尔找到阿伦蒂尔还有四十六年。泰琴德的军阀、刻伊俄奈的城邦、洇河的领主各打各的。',
      1836: '坎诺人的殖民地已经开了三百多年。奥尔丹德自己造魔法步枪，刻伊俄奈人的共和国阿墨翁吞并过泰琴德。',
    },
    abil: { dex: 1, con: 1 }, profs: [], tags: ['ruinborn', 'elfblood'],
    passives: { skill: { perception: 2 }, saveAdv: ['con'] }, abilities: [],
    lifespan: '跟人类一样，八十岁上下。',
    subraces: [
      { id: 'taychendi', name: '泰琴德人', en: 'Taychendi', short: '棕皮，能留胡子，好勇；运动 +2',
        desc: '南阿伦蒂尔东边的泰琴德人，人数最多。棕皮，男人能留胡子。爱过节、爱比武，拜的是历代英雄。军阀混战了一千多年。',
        abil: { cha: 1 }, passives: { skill: { athletics: 2 } }, abilities: ['race_sub_taychendi'], tags: ['taychendi'] },
      { id: 'kheionai', name: '刻伊俄奈人', en: 'Kheionai', short: '青皮的城邦公民；游说、表演各 +1',
        desc: '南阿伦蒂尔的城邦人，个头偏矮，卷发，皮色发青。讲哲学、演戏、行船，看别的遗迹精灵都像没开化的亲戚。',
        abil: { int: 1 }, passives: { skill: { persuasion: 1, performance: 1 } }, abilities: ['race_sub_kheionai'], tags: ['kheionai'] },
      { id: 'eordan', name: '奥尔丹德人', en: 'Eordan', short: '拜四季，听妖精的；自然 +2',
        desc: '北阿伦蒂尔西边森林里的人，分春、夏、秋、冬几支，各拜一季，跟妖精打了一千年交道。有的身上会长出花草。',
        abil: { wis: 1 }, passives: { skill: { nature: 2 } }, abilities: ['race_sub_eordan'], tags: ['eordan', 'fey_touched'] },
      { id: 'ynnic', name: '洇河人', en: 'Ynnic', short: '骑鹿角马的骑士和农奴；驯兽 +2',
        desc: '北阿伦蒂尔洇河两岸的人，样子跟月精灵几乎分不出来。河边一座城堡接一座，骑士骑鹿角马，为了戴头盔把耳朵尖削平。',
        abil: { str: 1 }, passives: { skill: { animal: 2 } }, abilities: ['race_sub_ynnic'], tags: ['ynnic'] },
    ],
    ...RUINBORN,
  },

  mechanim: {
    id: 'mechanim', name: '机械人', en: 'Mechanim',
    short: '依靠芯核运作的金属人',
    desc: '机械人的记忆、力量和灵魂都寄存在胸中的达姆斯塔尔芯核里。他们无需进食、睡眠或呼吸，不分男女。每个机械人都用一首自作的诗给自己命名，外人通常只记得第一行。第一批由先驱精灵在隐厦制造，后来各国奇械师也开始仿造。',
    trait: '金属身躯：不穿甲时护甲等级为 13+敏捷调整值；毒素伤害减半，免疫中毒和沉睡。来历另给一项技能 +2。',
    era: {
      1022: '全在隐厦的丛林里躺着，一动不动。当地人当它们是古时候的雕像。',
      1444: '1366 年彗星掠过隐厦，醒了极少的一批，正结成小群在丛林里找达姆斯塔尔续命。坎诺没人见过。',
      1836: '各国工厂里成千上万的机械人是奇械师造的，法律上多半算财物。从隐厦来的那些有名字、有主意，为数很少。',
    },
    abil: { con: 2 }, profs: [], tags: ['mechanim', 'construct'],
    passives: { natArmor: 13, resist: ['poison'], condImmune: ['poisoned', 'asleep'] }, abilities: [],
    lifespan: '不会老；核心不碎就不死，只会沉睡。',
    subraces: [
      { id: 'insyaan_mechanim', name: '隐厦机械人', en: 'Insyaan Mechanim', short: '先驱精灵造的老身子；历史 +2',
        desc: '先驱精灵亲手造的那一批，用的是先驱钢。睡了几千年，1366 年才醒，从前的事只记得零碎几片。',
        abil: { int: 1 }, passives: { skill: { history: 2 } }, abilities: ['race_sub_insyaan_mechanim'], tags: ['insyaan_mechanim'] },
      { id: 'wrought_mechanim', name: '仿造机械人', en: 'Artificer-built Mechanim', short: '奇械师照着仿的；运动 +2',
        desc: '外面发现隐厦以后，各国奇械师照着仿造的。出厂就是干活的料，有没有自己的主意，造它的人说没有。',
        abil: { str: 1 }, passives: { skill: { athletics: 2 } }, abilities: ['race_sub_wrought_mechanim'], tags: ['wrought_mechanim'] },
    ],
    ...MECHANIM,
  },
};
