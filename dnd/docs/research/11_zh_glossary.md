# 11 — Chinese terminology: the English→Chinese glossary

Companion data file: `research/11_zh_glossary.json` — an array of `{en, zh, category, source, confidence, note?}`.
3825 entries. By category: country 1564, city 745, culture 615, region 235, religion 125, person 80, event 69, place 44, title 42, creature 41, race 38, god 36, hold 33, organisation 29, magic 27, sea 21, calendar 18, world 17, era 13, dynasty 13, item 11, concept 9. By source: timeline 2328, ciku 1141, user_game 182, coined 166, fan_bible 7, web 1. By confidence: high 3415, medium 377, low 33.

`source` values: `user_game` (the user's earlier game, `zh/existing_game_zh.txt`), `ciku` (the Sogou dictionary Anbennar国名词库), `timeline` (the 哈兰历史地图 project: its decoded copy of the EU4 Chinese localisation, or its own prose), `fan_bible` (the 阿德蕾西娅骑士团 role-play card), `web` (search snippets), `coined` (no Chinese form found; built on the conventions in section 4).
`confidence`: `high` = the pair is explicit in a source (joined on a game key, or the user's own string); `medium` = assembled from established pieces, or one source only; `low` = free coinage or an uncertain match.

## 1. Overview

The single most useful discovery is that the Chinese community map project in `zh/timeline` ships a machine-decoded copy of the Chinese EU4 localisation that players actually use. Its `dist/data/names-zh.json` and `names-en.json` hold, keyed by game id, about 1,420 country names, 6,707 province names and some 1,700 area, region and superregion names in both languages; `country-identity-eu4.json` adds 622 cultures, 118 religions and 20 races with `nameZh` taken from `eu4-zh-localisation-…` files. `docs/ASSET_RIGHTS.md` credits the names to "Anbennar Chinese ver, Steam Workshop 2818493730", the standard Chinese localisation. The country matching the task asked for could therefore be done as an exact join on EU4 tags instead of by guessing from sound.

The glossary has two layers:

- A bulk layer (about 3,300 entries) joined mechanically on game keys: every EU4 country, 1444 capitals, provinces and areas that have a wiki page, all regions and superregions, all cultures, religions and races, plus the 1836-era (Victoria 3) country names that the map project translated itself.
- A curated layer (about 550 entries) for what the localisation data does not carry: world terms, gods, events, eras and calendar, organisations, titles, magic, items, people and houses. Each curated English name was checked against the wiki dump and the three mods' English localisation; five are labels rather than wiki page names and say so in their notes.

The user's own terms override everything else. Where the user's game uses a different root from the localisation (Aelantir, Dameshead, Deepwoods, fey, Magisterium and a few more), the bulk entries built on that root were rewritten to match, and each rewritten entry keeps the localisation form in its note.

## 2. Sources and how each was used

### 2.1 The ciku (`zh/anbennar_guoming_ciku.txt`)

1,160 lines of `中文名 <TAB> pinyin <TAB> number`. Script: `tools/zh11/match_ciku.py`, `ciku_order.py`.

- Exact string join against the tag-keyed Chinese names: 1,119 of 1,160 entries match a tag outright (only 凤凰帝国 maps to two tags, F38 and F97, both "Phoenix Empire").
- The numeric column is a position in reverse file order of the Chinese country localisation. For the first file it is exact: Lorent A01 = 1160, Deranne A02 = 1159, North Viswall A07 = 1154, Sorncóst A09 = 1152, Pearlsedge A11 = 1150, Beepeck A12 = 1149, Eilísin A15 = 1146, Arbaran A46 = 1115, Asheniande A60 = 1101, Arannen A72 = 1089, Orda Aldresia A77 = 1084, Adenica B58 = 1004. Over the whole list the correlation with line order in [eu4: localisation/anb_countries_l_english.yml] is only r = −0.69, because several descending runs are interleaved (numbers 1, 6 are B85, B84; 4 and 7 are U-tags; 5 is R97). Inside a run, neighbouring numbers are neighbouring tags.
- That ordering resolves the 41 entries with no exact match. They are older spellings of names the current localisation has since revised. Example: 伍德维尔 is #1073, between Aranmas A89 (#1072) and Saloren A87 (#1074), so it is A88 Woodwell, now 伍德威尔. Forty were resolved this way (three of them by sound plus neighbourhood: 埃罗阿纳迪塔里 = Airoa Naditari, 伊尼弗尤 = Inifoeyu, 绍尔拉格 = Saerraeg). One is unresolved: 塞戈维特 (#2).
- The task's test pairs all hold: 洛伦特 = Lorent, 阿巴兰 = Arbaran, 阿兰嫩 = Arannen, 阿德尼卡 = Adenica, 阿什尼安德 = Asheniande, 珍珠边地 = Pearlsedge, 北维斯沃尔 = North Viswall.
- Ruling on the 41: the glossary gives the current localisation form and records the ciku form in the note ("older ciku form …").

### 2.2 The map project (`zh/timeline`)

Two different things live here and they are labelled apart in the notes.

- Decoded localisation (`names-zh.json`, `country-identity-eu4.json`): authoritative for what Chinese EU4 players see. Joined on keys, so confidence is high.
- The project's own prose (`events.json`, `public-copy.json`, `endpoint-country-identities.json`): event titles and Victoria 3 country names translated by the project's maintainers, some marked 暂译. Useful for events (影月阴谋, 黑火药叛乱, 巨商起义, 维齐尔战争, 神谕之眼彗星) and for people (贾达尔, 卡米尔, 马罗什, 恩德拉尔). Its prose is not consistent with the localisation it ships: it writes 科武里亚 207 times against the localisation's 科乌里亚, 魔军 about a thousand times for The Command, 拉亨 beside 罗祆, 哥布林 beside 地精.

### 2.3 The user's earlier game (`zh/existing_game_zh.txt`)

About 1,500 strings, mostly interface text, but the long lore lines give over a hundred setting terms. Nearly all of its country and clan names agree with the localisation (绿原 = Khozrugan, 混眼 = Clouded Eye, 嗜血者 = Bloodgorger, 地鹰 = Groundhawk, 钴蓝兵团, 勇敢兄弟, 达梅里亚之子, 努尔塞斯提尔, 埃斯蒂尔, 罗吉尔利亚), so the user's game was evidently written against that localisation. The places where it departs are listed in section 6.

### 2.4 The fan bible (`zh/st/角色卡/安本纳尔_阿德蕾西娅骑士团/`)

A small alternate-history role-play card. Used only for naming habits: 先驱精灵, 遗迹精灵, 月党, 阿登·天枪, 选帝侯, 大团长, 吸血鬼, 狮鹫. It misspells several localisation names (洛林特, 阿德雷西娅, 科武里亚, 烟洲, 卡斯特罗斯, 威斯特克) and invents others (贾赫帝国 for the Jadd Empire, 婆罗多, 金德隆/银先令/铜便士); none of those were adopted.

### 2.5 Web search

See section 7. Search engines index little Chinese Anbennar text; the snippets confirmed a dozen core terms and nothing contradicted the local sources.

## 3. Order of authority

1. The user's game wins whenever it has the term.
2. The Chinese EU4 localisation (ciku and decoded names agree; where they differ the newer decoded form is used).
3. The map project's own prose, then the fan bible, then web snippets.
4. Coinage on the conventions below, marked `coined`.

One deliberate limit on rule 1: a user-game root is carried into compounds of the same word (Aelantir → North Aelantir; Deepwoods → West Deepwoods; fey → Fey Court), but not into different words that merely share an English element. Damescrown, Damesear and Damesteeth keep the localisation's 月神之冠 / 月神之耳 / 月神之牙 although the user's game transliterates Dameshead; see conflict 2.

## 4. Conventions: a transliteration style guide

The Chinese localisation does not use one scheme. It gives each culture area the register a Chinese reader associates with its real-world model. New names should be coined in the register of the region they belong to.

**4.1 Translate transparent English, transliterate everything else.**
Compound English names whose parts mean something are translated: Pearlsedge 珍珠边地, Moonhaven 月港, Wineport 葡萄酒港, Redglades 红林, Bluehart 蓝鹿, Cowskeep 牛堡, Eaglecrest 鹰冠, Silverforge 银锻炉, Coldmarket 寒市, Frostwall 霜墙, Horsegarden 马庭, Windtower 风塔. Opaque or half-opaque names go by sound: Lorent 洛伦特, Wex 威克斯, Gawed 加韦德, Beepeck 比佩克, Neckcliffe 内克利夫, Westmoors 威斯特摩尔, Woodwell 伍德威尔. Mixed cases keep the translatable half: Thomsbridge 汤姆斯桥, Elensbridge 埃伦斯桥, Greymill 灰磨镇, Appleton 苹果屯, Ravenhill 渡鸦山.

**4.2 Cannorian names use ordinary news-style transliteration.**
Dameria 达梅里亚, Arannen 阿兰嫩, Deranne 德冉恩, Istralore 伊斯特拉洛尔, Busilar 布西拉尔, Corvuria 科乌里亚, Verne 弗恩. Recurrent endings: -aire 莱尔/奈尔 (Madelaire 马德莱尔, Rubenaire 鲁本奈尔), -ande 安德 (Asheniande 阿什尼安德), -thíl 蒂尔 (Eborthíl 埃博蒂尔, Esthíl 埃斯蒂尔), -cóst 科斯特 (Anbenncóst 安本科斯特), -ainé 莱内/泰内 (Esmarainé 埃斯玛莱内, Lorentainé 洛伦泰内), -ton 顿 or 屯, -wick 威克. Accents are ignored.

**4.3 Generic words have fixed renderings.**
-march 边区 (Greatmarch 大边区, Ravenmarch 渡鸦边区); X Temple X神殿; Order of X X骑士团; X Company X兵团; Cartel 垄断集团; Expedition 探险队; Band 大队; Guild 行会; Salla X X氏族; X Command X令 (虎令, 龙令); "Bal X" and "Arca X" both X堡 (Bal Mire 沼泽堡, Arca Corvur 科乌尔堡); Citadel 要塞; New/Núr 新; Old 旧; Great 大; North/South/East/West prefixed as 北/南/东/西.

**4.4 The Dame is 月神.**
Every Dame- compound is translated with 月神: Damescrown 月神之冠, Damish Temple 月神神殿, Damesear 月神之耳, Damesteeth 月神之牙, Dameshead 月神之首, damestear 月神之泪. (The user's game transliterates two of these; see conflict 2.)

**4.5 Dwarven holds are translated by the meaning of the Dwarven.**
Amldihr 议会之门, Khugdihr 玛瑙之门, Shazstundihr 大理石门, Krakdhûmvror 冰霜锻炉, Er-Natvir 交轨大厅, Verkal Gulan 金堡, Verkal Kozenad 命运堡, Ovdal Tûngr 港口城, Ovdal Kanzad 火炮城, Gor Bûrad 火顶山, Hul-az-Krakazol 酒匠大厅, Aul-Dwarov 众矮人之国. Elements: -dihr 之门, Verkal 堡, Ovdal 城/居所, Gor 山, Hul 大厅, Orl 领主, Dhûm 地. Dwarovar itself is 矮人之地. A few stay phonetic (Hehodovar 赫霍多瓦尔, Hul-Jorkad 胡尔-乔卡德). The map project's prose often transliterates the same holds (塞格迪尔 for Seghdihr 南域之门); use the localisation form and give the Dwarven sound once in dialogue if a dwarf is speaking.

**4.6 Orc, goblin, ogre and centaur clan names are translated, tersely.**
Clouded Eye 混眼, Bloodgorger 嗜血者, Heartgrinder 碎心者, Bladebreaker 碎剑者, Frozenmaw 冻喉, Groundhawk 地鹰, Railskulker 铁路潜伏者, Wild Hunt 狂猎. Orcish-language state names are translated too when the meaning is known: Khozrugan 绿原, Unguldavor 林木之墙, Barumand 繁土, Karakhanbar 黑园之地; otherwise by sound (Grombar 格罗姆巴尔). A clan surname follows the clan: Gurzan Bloodgorger 古尔赞·嗜血者.

**4.7 Bulwar: Akkadian-flavoured names by sound, with š as 什/沙/舍.**
Birzartanšes 比尔萨坦舍斯, Akalšes 阿卡勒舍斯, Sareyand 萨雷扬德, Brasan 布拉桑, Azka-Sur 阿兹卡苏尔, Jaddari 贾达尔军团. Gnollish names use the harsher 革/哥/迦/得 set: Tluukt 得露革得, Viakkoc 维亚哥吉, Koggraffa 哥格拉法, Zokka 佐迦. Keep three look-alikes apart: Jaher 贾赫 (the conqueror), Jaddar 贾达尔 (the prophet), the Jadd 贾德 (his faith and empire).

**4.8 Rahen uses the vocabulary of Chinese Buddhist sutra translation.**
Rahen 罗祆, -raj 罗阇 (Rahenraj 罗祆罗阇, Harimraj 诃利秣罗阇), Dhenijanraj 提尼禅罗阇, Sarisung 娑梨孙伽, -pur 补罗, with 伽, 毗, 阇, 剌, 曷, 佉. Provinces of the same name are often given a meaning-name instead (Dhenijansar the state is 提尼禅娑罗, the city province is 雄流城).

**4.9 Yanshen and its neighbours are written as native Chinese names.**
Yanshen 烟州, Tianlou 天楼, Beikdugang 北渡港, Jiangdu 江都, Lingyuk 灵域, Xianjie 仙界; martial sects end in 门/寺/宗/庄 (Rang Nartak 舞虹门, Jinhusi 金虎寺). The Bom, Kai and Kelino lands get Sino-Vietnamese-looking forms (Thidinkai 盖邦, Bomdan 茫檀). Hobgoblin and harimari sub-cultures are compressed to two characters plus the race (敬虎人, 虎大地精).

**4.10 The Forbidden Plains and Triunic lakes mix two styles.**
Meaning-names in a classical register (Qorondulyuz 辅天魁, Vahjevgiiv 万仞岌, Qarshtuluu 双玉邦, Kalsyto 湖地联邦) and Yuan-dynasty style phonetics for steppe peoples (Irdaeos 亦儿歹斡思, Khüraen Ulaeg 呼兰兀剌, Teaghud 帖鹘惕, Altorzamh 安脱儿咱).

**4.11 Kheionai is transliterated like classical Greek.**
Kheionai 刻伊俄奈, Ameion 阿墨翁, Ormam 俄耳马谟, Eneion 厄涅翁, with 刻, 忒, 谟, 俄, 耳 as in Chinese editions of Homer.

**4.12 Other regions.**
Gerudia in ordinary Nordic transliteration (Bjarnrík 比亚恩国, Olavlund 奥拉夫隆德). The Ynn has its own characters: Ynn 洇河, -ynn 洇 (Arverynn 阿韦洇), Vels 蔚梓. Eordand, Sarhal and Taychend are plain phonetic.

**4.13 Personal names (mostly coined here; the sources have few).**
Given name and surname are joined by a middle dot: 科尔古斯·杜坎森, 卡米尔·西尔穆纳. The particle síl is kept as 西尔 and síl na as 西尔·纳 (阿德拉尔·西尔·纳·惠斯尔希尔), following the user's game. Sil- surnames start 西尔/西 (Silmuna 西尔穆纳, Siloriel 西洛瑞尔). Epithets are translated and placed as Chinese wants them: Lothane Bluetusk 洛萨恩·蓝牙, Arosha Oakbreaker 阿罗莎·伐橡者, Rogier the Exile 流亡者罗吉尔, Lorenan the Great 洛伦南大帝, Castan Beastbane 屠兽者卡斯坦. Regnal numbers follow the given name: 洛萨恩四世. Stems reuse the localisation wherever a place carries the name (Munas 穆纳斯 from 穆纳斯港, Lorenan 洛伦南, Daravan 达拉万, Dostan 多斯坦, Jexis 杰西丝, Nathalyne 纳撒琳, Kylian 基利安 from Kyliande 基利安德).

**4.14 Dates.**
Years are 灰元 (AA): 灰元1444年. Coined for before the Ashen Skies: 灰前. Months: Tearfall 泪落月 (user), Nerament 奈拉月 (map project); the other ten are coined in the JSON. EU4 opens on 11 Nerament 1444 = 灰元1444年奈拉月11日.

## 5. The top 200 terms


**World, continents, regions, seas**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Halann | 哈兰 | timeline | high | the world; the Chinese community map project is titled 哈兰历史地图; a Bilibili lore post uses the same form |
| Anbennar | 安本纳尔 | user_game | high | setting name and short name of the Empire; EU4 zh loc agrees |
| Cannor | 坎诺 | user_game | high | EU4 zh loc agrees |
| Western Cannor | 西坎诺 | user_game | high | EU4 zh loc agrees |
| Escann | 东坎诺 | user_game | high | EU4 zh loc agrees; translated by meaning ("East Cannor") |
| Haless | 东洲 | timeline | high | EU4 zh loc; the fan bible also writes 东洲大陆 |
| Sarhal | 阳洲 | timeline | high | EU4 zh loc |
| Aelantir | 阿伦蒂尔 | user_game | high | EU4 zh loc, Steam page and Bilibili use 埃兰提尔; the user-game form wins |
| Serpentspine | 蛇脊山脉 | user_game | high | EU4 zh loc and fan bible agree |
| Dwarovar | 矮人之地 | timeline | medium | loc translates by meaning (West/Middle Dwarovar = 西/中矮人之地); use 矮人之地 for the old dwarven underground realm |
| Deepwoods | 深林 | user_game | high | EU4 zh loc has 深木; user-game form wins |
| Gerudia | 格鲁迪亚 | timeline | high | EU4 zh loc |
| Bulwar | 布勒瓦尔 | ciku | high | EU4 zh loc (region and country) |
| Rahen | 罗祆 | timeline | high | EU4 zh loc (sutra-style transliteration); timeline prose also writes 拉亨 |
| Yanshen | 烟州 | ciku | high | EU4 zh loc; the fan bible writes 烟洲 |
| Forbidden Plains | 禁忌平原 | timeline | high | from loc East/West Forbidden Plains = 东/西禁忌平原 |
| The Salahad | 萨拉哈德沙漠 | timeline | medium | from loc 北/南/西萨拉哈德 |
| Dameshead | 达梅斯海德 | user_game | high | EU4 zh loc translates by meaning: 月神之首 (the Dame = 月神); user-game form wins, gloss once as 达梅斯海德（月神之首） |
| Damesear | 月神之耳 | timeline | high | island at the centre of the Dameshead; note the user's game writes 达梅斯海 inside one event name |
| Divenhal | 迪文哈尔海 | timeline | high | EU4 zh loc Divenhal Sea |
| Ruined Sea | 毁灭之海 | timeline | high | EU4 zh loc; the fan bible uses the same |
| Lencenor | 伦瑟诺 | timeline | high | EU4 zh loc |
| Esmaria | 埃斯玛利亚 | user_game | high | EU4 zh loc has 埃斯玛里亚 (one character differs); user-game form wins |
| Inner Castanor | 内卡斯塔诺 | user_game | high |  |
| West Castanor | 西卡斯塔诺 | user_game | high |  |
| South Castanor | 南卡斯塔诺 | user_game | high |  |
| Whistlevale | 哨音谷 | user_game | high | EU4 zh loc has 前哨谷; one of the five war-theatres of Escann in the user's game |
| Cursewood | 诅咒森林 | user_game | high | EU4 zh loc has 诅咒之木 |
| Kheterata | 赫特拉塔 | ciku | high | EU4 zh loc; fan bible agrees |
| Ynn | 洇河 | timeline | high | EU4 zh loc; the river-realm of north Aelantir |

**Countries, orders, companies, clans**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Empire of Anbennar | 安本纳尔帝国 | ciku | high |  |
| Lorent | 洛伦特 | ciku | high | EU4 tag A01 |
| Gawed | 加韦德 | ciku | high | EU4 tag A13 |
| Wex | 威克斯 | ciku | high | EU4 tag A30 |
| Dameria | 达梅里亚 | user_game | high | EU4 tag A58; also in the user's game; EU4 zh loc (ciku) agrees |
| Verne | 弗恩 | ciku | high | EU4 tag A33 |
| Busilar | 布西拉尔 | ciku | high | EU4 tag A29 |
| Istralore | 伊斯特拉洛尔 | ciku | high | EU4 tag A45 |
| Pearlsedge | 珍珠边地 | ciku | high | EU4 tag A11 |
| Arbaran | 阿巴兰 | ciku | high | EU4 tag A46 |
| Arannen | 阿兰嫩 | ciku | high | EU4 tag A72 |
| Corvuria | 科乌里亚 | ciku | high | EU4 tag A59 |
| Ibevar | 伊贝瓦尔 | ciku | high | EU4 tag A32 |
| Moonhaven | 月港 | ciku | high | EU4 tag A31 |
| Beepeck | 比佩克 | ciku | high | EU4 tag A12 |
| Damescrown | 月神之冠 | ciku | high | EU4 tag A25 |
| Wesdam | 威斯达姆 | ciku | high | EU4 tag A04 |
| Small Country | 小人国 | ciku | high | EU4 tag A97 |
| Gnomish Hierarchy | 侏儒议会 | ciku | high | fan bible agrees |
| Magisterium | 魔导院 | user_game | high | EU4 zh loc and timeline: 魔法师议会 |
| Orda Aldresia | 阿德蕾西娅骑士团 | ciku | high | the ciku's own sample entry; fan bible spells 阿德雷西娅 |
| Castanor | 卡斯塔诺 | user_game | high | EU4 tag B32; also in the user's game; EU4 zh loc (ciku) agrees |
| Black Castanor | 黑卡斯塔诺 | ciku | high | EU4 tag Z34 |
| Castellyr | 卡斯泰利尔 | ciku | high | EU4 tag B31 |
| Blademarches | 刀锋边区 | ciku | high | EU4 tag B33 |
| Marrhold | 马尔霍德 | ciku | high | EU4 tag B36 |
| Corintar | 科琳塔尔 | ciku | high | the user's game has both 科林塔尔 and 科琳塔尔; 科琳塔尔 matches the loc and 科琳 |
| Sons of Dameria | 达梅里亚之子 | user_game | high |  |
| Order of the Iron Sceptre | 铁杖骑士团 | user_game | high |  |
| Rogieria | 罗吉尔利亚 | user_game | high | EU4 tag B37; also in the user's game; EU4 zh loc (ciku) agrees |
| Núrcestir | 努尔塞斯提尔 | user_game | high | EU4 tag B53; also in the user's game; EU4 zh loc (ciku) agrees |
| Esthíl | 埃斯蒂尔 | user_game | high | EU4 tag B54; also in the user's game; EU4 zh loc (ciku) agrees |
| Khozrugan | 绿原 | user_game | high | EU4 tag Z51; also in the user's game; EU4 zh loc (ciku) agrees |
| Grombar | 格罗姆巴尔 | ciku | high | EU4 tag Z50 |
| Unguldavor | 林木之墙 | ciku | high | EU4 tag Z52 |
| Clouded Eye | 混眼 | user_game | high | EU4 tag B24; also in the user's game; EU4 zh loc (ciku) agrees |
| Flung Head | 飞颅 | user_game | high | EU4 tag B44; EU4 zh loc has 掷头; adjusted to the user-game root |
| Cyranvar | 西兰瓦尔 | ciku | high | EU4 tag I45 |
| Aul-Dwarov | 众矮人之国 | ciku | high | the reunited dwarven empire; loc translates by meaning |
| Amldihr | 议会之门 | ciku | high | EU4 tag I01 |
| Silverforge | 银锻炉 | ciku | high | EU4 tag A73 |
| Jaddari | 贾达尔军团 | ciku | high |  |
| Jadd Empire | 贾德帝国 | ciku | high | timeline prose also 贾达帝国; fan bible 贾赫帝国 |
| Phoenix Empire | 凤凰帝国 | ciku | high |  |
| Zokka | 佐迦 | ciku | high | EU4 tag F29 |
| The Command | 命令秩序 | ciku | high | fan bible agrees; the timeline project mostly nicknames it 魔军 |
| Rahenraj | 罗祆罗阇 | ciku | high |  |
| Black Demesne | 黑暗领域 | user_game | high |  |
| Royal Demesne | 王家领地 | user_game | high | Camir's kingdom; timeline: 皇域 |
| Magocratic Demesne | 魔法领地 | user_game | high | Vic3 1836 state around Castonath; timeline: 魔治皇域 |
| Blackpowder Anbennar | 黑火药安本纳尔 | user_game | high |  |

**Cities and sites**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Castonath | 卡斯托纳斯 | user_game | high | EU4 zh loc agrees |
| Anbenncóst | 安本科斯特 | user_game | high | EU4 tag A38; also in the user's game; EU4 zh loc (ciku) agrees |
| Lorentainé | 洛伦泰内 | timeline | high | EU4 zh loc (province 67) |
| Wexkeep | 威克斯堡 | timeline | high | EU4 zh loc |
| Gaweton | 加韦顿 | timeline | high | timeline event title 加韦顿宫廷政变 |
| Tianlou | 天楼 | ciku | high | EU4 tag Y19 |
| Trialmount | 试炼山 | user_game | high | EU4 zh loc agrees |
| The North Citadel | 北要塞 | timeline | high | EU4 zh loc |

**Races and creatures**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Elf | 精灵 | timeline | high |  |
| Dwarf | 矮人 | timeline | high |  |
| Human | 人类 | timeline | high |  |
| Halfling | 半身人 | timeline | high |  |
| Gnome | 侏儒 | timeline | high |  |
| Orc | 兽人 | user_game | high |  |
| Goblin | 地精 | user_game | high | EU4 zh loc agrees; fan bible and timeline prose often write 哥布林 |
| Hobgoblin | 大地精 | timeline | high |  |
| Gnoll | 豺狼人 | timeline | high |  |
| Kobold | 狗头人 | timeline | high |  |
| Harpy | 鹰身女妖 | timeline | high |  |
| Centaur | 半人马 | timeline | high |  |
| Ogre | 食人魔 | timeline | high |  |
| Troll | 巨魔 | timeline | high |  |
| Harimari | 虎人 | timeline | high | EU4 zh loc; fan bible agrees |
| Lizardfolk | 蜥蜴人 | timeline | high |  |
| Ruinborn | 遗迹精灵 | timeline | high | EU4 zh loc; fan bible agrees |
| Precursor Elves | 先驱精灵 | fan_bible | high | Steam Workshop description of the zh loc has 先驱精灵遗物; timeline prose also 先驱者 |
| Half-elf | 半精灵 | timeline | high |  |
| Half-orc | 半兽人 | timeline | high |  |
| Mechanim | 机械人 | timeline | high | EU4 zh loc |
| Floodborn | 洪裔 | user_game | high | children of the Crimson Deluge |
| Fey | 妖精 | user_game | medium | the user's game has 妖精边界; EU4 zh loc uses 仙灵 (Fey Court = 仙灵王庭) |
| Dragon | 巨龙 | timeline | high | loc Dragon Coast = 巨龙海岸; 龙 in compounds |
| Lich | 巫妖 | timeline | high | EU4 zh loc |

**Gods and religions**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Regent Court | 摄政王庭 | user_game | high | EU4 zh loc agrees; the timeline project also writes 摄政神庭 |
| Castellos | 卡斯特洛斯 | user_game | high | dead head of the Regent Court |
| Adean | 阿德安 | user_game | high | timeline prose writes 阿迪安派 for Adeanic |
| The Dame | 月神 | timeline | high | the loc renders every Dame- compound with 月神 (月神之冠, 月神神殿, 月神之耳, 月神之泪) |
| Corin | 科琳 | user_game | high | EU4 zh loc agrees (科琳教); timeline prose sometimes 科林 |
| Agrados | 阿格拉多斯 | user_game | high |  |
| Esmaryal | 埃斯玛尔雅 | timeline | medium | from loc Esmaryan Temple = 埃斯玛尔雅神殿 |
| Nerat | 奈拉特 | timeline | medium | from loc Neratica = 奈拉蒂卡 and the month 奈拉月 |
| Munas Moonsinger | 穆纳斯·月歌者 | timeline | medium | 穆纳斯 from loc Port Munas = 穆纳斯港; epithet coined |
| Surael | 苏雷尔 | timeline | high | from loc Surael's Respite = 苏雷尔缓步海 |
| Dookan | 杜坎 | user_game | high | from 杜坎森 / loc 大杜坎 |
| Corinite | 科琳教 | user_game | high | EU4 zh loc agrees |
| Ravelian | 揭秘教 | user_game | high | EU4 zh loc agrees |
| Adeanic | 阿德安派 | user_game | high | the Regent Court loyalists after 1520; timeline: 阿迪安派 |
| New Sun Cult | 新日崇拜 | timeline | high | EU4 zh loc |
| The Jadd | 贾德教 | timeline | high | EU4 zh loc |
| Black Doctrine | 黑色教义 | user_game | high | EU4 zh loc has 黑暗教义 |
| God Fragment | 神之碎片 | user_game | high | fan bible and timeline agree |
| The One God | 唯一之神 | user_game | high | Ravelian teaching |
| Ravelian Society | 揭秘学会 | user_game | high | timeline: 揭秘会 |

**Eras, calendar, events**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| AA (After Ashen Skies) | 灰元 | user_game | high | year style 灰元1444年; the fan bible writes 灰烬历 |
| Nerament | 奈拉月 | timeline | high | month 11; timeline prose 奈拉月第7日; EU4 starts on 11 Nerament 1444 |
| Tearfall | 泪落月 | user_game | high | month 10; the user's game has 泪落 (泪落之钟, 泪落之变) |
| Age of Monsters | 怪物时代 | timeline | high | EU4 age 1 |
| Age of Unraveling | 崩解时代 | user_game | high | EU4 age 2; the timeline project writes 揭秘时代 |
| Age of Witch-Kings | 巫师王时代 | user_game | high | EU4 age 3; timeline agrees |
| Age of Artificers | 奇械时代 | timeline | high | EU4 age 4 |
| Day of Ashen Skies | 灰烬之日 | user_game | high | fan bible and timeline: 灰烬天空之日 (the timeline marks it 暂译) |
| The Onslaught | 大侵攻 | coined | medium | the Deep Devils rising from the sea against the coastal empires, c. 1200–1134 BA |
| Dragonwake | 巨龙苏醒 | coined | medium | 470–500 AA; loc renders dragon as 巨龙 |
| The Landing | 大登陆 | coined | medium | the Remnant Fleet reaches Cannor, 1000 AA; the day is kept as Lansday/Landsday = 兰斯日 |
| War of the Sorcerer-King | 术士王战争 | coined | medium | 978–1020; see Sorcerer-King for the term choice |
| Lilac Wars | 紫丁香战争 | user_game | high | fan bible and most timeline prose: 丁香战争 (accepted short form) |
| Greentide | 绿潮 | user_game | high | EU4 zh loc agrees |
| Decades of Devastation | 浩劫年代 | coined | medium | collapse of the elven states of Bahar (Bulwar) in the early 15th century; no Chinese form found |
| Rediscovery of Aelantir | 阿伦蒂尔的重新发现 | user_game | high |  |
| Eleventh Pantheonic Council | 第十一次泛神会议 | user_game | high | 1520 |
| War of the Elensbridge | 埃伦斯桥战争 | user_game | high | 1535–1542 |
| Crimson Deluge | 绯红洪灾 | user_game | high | 1560–1580 |
| First Corinite War | 第一次科琳教战争 | user_game | high | 1620–1648; timeline also 科林战争 |
| Peace of Esmaria | 埃斯玛利亚和约 | user_game | high | 1648 |
| Escanni Wars of Consolidation | 东坎诺统一战争 | user_game | high |  |
| Mages' Peace | 法师和平 | user_game | high |  |
| Tearfall Teleportation Tragedy | 泪落之变 | user_game | high | 1810 |
| Blackpowder Rebellion | 黑火药叛乱 | user_game | high | 1810; timeline agrees |

**Organisations and titles**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Dove Throne | 鸽座 | user_game | high | the imperial throne |
| Elector | 选帝侯 | fan_bible | high |  |
| Adventurer | 冒险者 | user_game | high |  |
| Adventurer company | 冒险团 | user_game | high | loc renders Company as 兵团 in names (钴蓝兵团) |
| Marchers | 边区派 | user_game | high | adventurer faction |
| Pioneers | 先锋派 | user_game | high | adventurer faction |
| Fortune Seekers | 淘金者 | user_game | high | adventurer faction |
| Witch-King | 巫师王 | user_game | high | timeline prose sometimes 巫王 |
| Sorcerer-King | 术士王 | coined | medium | kept distinct from Witch-King; the user's game once wrote 巫师王 for the Black Demesne's ruler |
| Grand Magister | 大魔导师 | coined | medium | coined to match 魔导院 |
| Archmage | 大法师 | user_game | high |  |
| Moon Party | 月党 | fan_bible | high | fan bible |
| Salla | 氏族 | ciku | high | Deepwoods elf clan; loc Salla X = X氏族 |

**Magic and things**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Damestear | 达姆斯塔尔 | user_game | high | EU4 zh loc translates it 月神之泪 ("the Dame's tear"); user-game form wins, gloss once |
| Black Damestear | 黑达姆斯塔尔 | user_game | high | anti-magic mineral; fan bible: 黑月泪 |
| Artificery | 奇械术 | user_game | high | Steam page of the zh loc and fan bible agree |
| Artificer | 奇械师 | user_game | high |  |
| Precursor relic | 先驱精灵遗物 | web | high | Steam Workshop description of the zh loc |
| Chi | 气 | timeline | high | timeline 符文与气合作研究 |
| Necromancy | 死灵术 | user_game | high |  |
| Blackpowder | 黑火药 | user_game | high |  |
| Trials of Castan | 卡斯坦试炼 | user_game | high |  |
| Calindal | 卡林达尔 | coined | medium | "the Gleaming Blade", Precursor sword lost on Trialmount |
| The Drowning | 溺亡 | user_game | high | the Floodborn's killing sickness |

**People and houses**

| English | 中文 | source | conf. | note |
|---|---|---|---|---|
| Castan | 卡斯坦 | user_game | high | regnal name of Castanor's emperors |
| Korgus Dookanson | 科尔古斯·杜坎森 | user_game | high |  |
| Lothane Bluetusk | 洛萨恩·蓝牙 | user_game | high | Lothane "Bluetusk" Silmuna |
| Arosha Oakbreaker | 阿罗莎·伐橡者 | user_game | high |  |
| Rogier the Exile | 流亡者罗吉尔 | user_game | high | Rogier Silmuna |
| Camir Silmuna | 卡米尔·西尔穆纳 | user_game | high | timeline agrees on 卡米尔 |
| Lothane III síl Wex | 洛萨恩三世·西尔·威克斯 | user_game | medium | Emperor in 1444; 洛萨恩 from the user's game, the timeline writes 洛桑三世 |
| Adénn Skylance | 阿登·天枪 | fan_bible | high | last Grand Duke of Dameria; fan bible |
| Jaddar | 贾达尔 | timeline | high | timeline; loc Jaddari = 贾达尔军团 |
| Jaher | 贾赫 | timeline | high | loc 贾赫港 / 贾赫的典范 |
| Lorenan the Great | 洛伦南大帝 | timeline | medium | 洛伦南 from loc Lorenan's Reach |
| Aldresia | 阿德蕾西娅 | ciku | high | namesake of the Orda Aldresia |
| Nichmer | 尼奇默 | coined | medium | the Sorcerer-King |
| Kylian VI Siloriel | 基利安六世·西洛瑞尔 | coined | medium | 基利安 follows loc Kyliande = 基利安德 |
| Varina Escer | 瓦丽娜·埃斯瑟 | user_game | medium | 瓦丽娜 from the user's game; surname coined |
| Adelar síl na Whistlehill | 阿德拉尔·西尔·纳·惠斯尔希尔 | user_game | high | author of the Black Doctrine |
| House Silmuna | 西尔穆纳家族 | user_game | high |  |

## 6. Conflicts between sources, and the rulings

| # | Term | User's game | EU4 zh localisation / ciku | Map-project prose | Fan bible | Ruling |
|---|---|---|---|---|---|---|
| 1 | Aelantir | 阿伦蒂尔 | 埃兰提尔 | 埃兰提尔, 阿兰提尔 | 新大陆, 埃兰提尔斯 | 阿伦蒂尔; compounds follow (北阿伦蒂尔) |
| 2 | Dameshead | 达梅斯海德 | 月神之首 | 达姆斯海 | — | 达梅斯海德, glossed once as 月神之首. Damescrown/Damesear/Damesteeth stay 月神之冠/之耳/之牙 |
| 3 | Damestear | 达姆斯塔尔, 黑达姆斯塔尔 | 月神之泪 (Steam page) | — | 月神之泪, 黑月泪 | 达姆斯塔尔; 月神之泪 is the natural in-world gloss |
| 4 | Deepwoods | 深林 | 深木 | 深木 (282), 深林 (107) | 深木森林, 深林 | 深林 |
| 5 | Magisterium | 魔导院 | 魔法师议会 | 魔法师议会 | — | 魔导院; Grand Magister coined as 大魔导师 |
| 6 | Lilac Wars | 紫丁香战争 | not in the decoded files | 丁香战争 (mostly) | 丁香战争 | 紫丁香战争; 丁香战争 accepted as the short spoken form |
| 7 | Day of Ashen Skies | 灰烬之日 | not in the decoded files | 灰烬天空之日 (暂译) | 灰烬天空之日 | 灰烬之日 |
| 8 | Year style AA | 灰元 | — | — | 灰烬历 | 灰元 |
| 9 | Age of Unraveling | 崩解时代 | — | 揭秘时代 | — | 崩解时代 (keeps it apart from 揭秘教) |
| 10 | Black Doctrine | 黑色教义 | 黑暗教义 | — | — | 黑色教义 |
| 11 | Whistlevale / Cursewood | 哨音谷 / 诅咒森林 | 前哨谷 / 诅咒之木 | — | — | user forms |
| 12 | Flung Head | 飞颅 | 掷头 | — | — | 飞颅 |
| 13 | Esmaria | 埃斯玛利亚 | 埃斯玛里亚 | both | — | 埃斯玛利亚 |
| 14 | Lothane | 洛萨恩 | — | 洛桑 | — | 洛萨恩 |
| 15 | Adean, Adeanic | 阿德安, 阿德安派 | — | 阿迪安派 | — | 阿德安 |
| 16 | Corin | 科琳 | 科琳教, 科琳塔尔 | 科琳 and 科林 | 科琳 | 科琳 everywhere; Corintar 科琳塔尔 (the user's game has 科林塔尔 twice and 科琳塔尔 once) |
| 17 | Ravelian Society | 揭秘学会 | — | 揭秘会 | — | 揭秘学会 |
| 18 | Fey | 妖精 (once) | 仙灵 | 仙灵, 妖精 | — | 妖精; Fey Court 妖精王庭. Weakest user-game ruling: a single occurrence |
| 19 | Goblin | 地精 | 地精 | 哥布林, 地精 | 哥布林 | 地精 |
| 20 | Witch-King / Sorcerer-King | 巫师王 for both | — | 巫王, 巫师王时代 | — | Witch-King 巫师王; Sorcerer-King coined 术士王 so that Nichmer's war of 978–1020 is not confused with the 17th-century witch-kings |
| 21 | Acolyte (Black Demesne) | 侍从 | 侍祭 (第一侍祭…) | — | — | 侍从 in prose; the seven acolyte states keep 第一侍祭… as country names |
| 22 | Royal / Magocratic Demesne | 王家领地 / 魔法领地 | — | 皇域 / 魔治皇域 | — | user forms |
| 23 | The Command | — | 命令秩序 | 魔军 (≈1,000), 命令秩序 | 命令秩序 | 命令秩序; 魔军 is usable as what its enemies call it |
| 24 | Rahen, Raj | — | 罗祆, 罗阇 | 拉亨, 拉杰, 罗祆 | 婆罗多 | 罗祆, 罗阇 |
| 25 | Jadd Empire | — | 贾德帝国 | 贾达帝国 | 贾赫帝国 | 贾德帝国 |
| 26 | Corvuria | — | 科乌里亚 | 科武里亚 (207) | 科武里亚 | 科乌里亚 |
| 27 | Lorent | — | 洛伦特 | 洛伦特 | 洛林特 | 洛伦特 |
| 28 | Orda Aldresia | — | 阿德蕾西娅骑士团 | — | 阿德雷西娅 (mostly) | 阿德蕾西娅骑士团 |
| 29 | Castellos | 卡斯特洛斯 | — | 卡斯特洛斯 | 卡斯特罗斯 | 卡斯特洛斯 |
| 30 | Regent Court | 摄政王庭 | 摄政王庭 | 摄政神庭 (site label) | 摄政王庭 | 摄政王庭 |
| 31 | Dwarven holds | — | by meaning (南域之门) | by sound (塞格迪尔) | — | by meaning, as the localisation |
| 32 | Rahen states vs cities | — | 提尼禅娑罗 (state), 雄流城 (province) | — | — | both kept, under `country` and `city` |
| 33 | 41 ciku spellings | — | older vs current localisation | — | — | current form; ciku form in the note |
| 34 | Trollsbay Concord | — | — | 巨魔湾协约 (event), 巨魔湾联盟 (1836 state) | — | 协约 for the pact, 联盟 for the state |
| 35 | First Great Damesear Raid | 第一次达梅斯海大劫掠 | Damesear = 月神之耳 | — | — | user form kept, flagged: 达梅斯海 reads as a sea, the Damesear is an island |

## 7. Web search record

Searches were run on 24 November 2026 with the queries suggested in the brief ("安本纳尔 汉化 丁香战争", "Anbennar 汉化 译名 摄政王庭 月神之泪 奇械 揭秘教", and five variants restricted to Steam, Bilibili, Tieba and Zhihu). Results were thin; only snippets were read.

- Steam Workshop "Anbennar Chinese ver" (id 2818493730; snippets name Llywelyn as publisher with eleven translators credited, and 甜酵母 as maintainer of a public fork) and its multiplayer version: the descriptions and comments use 安本纳尔, 月神之泪, 先驱精灵遗物, 奇械术, 摄政王庭, 揭秘教, 埃兰提尔, 贾赫的典范, 雷赞坎德, 西坎诺, 东坎诺.
- Sub-mod pages in Chinese use 蛇脊山脉, 布勒瓦尔, 东坎诺, 奥尔丹德, 刻伊俄奈, 冒险者.
- A Bilibili lore article (opus 810776717528400053) names the world 哈兰 and its four continents 坎诺, 东洲, 阳洲, 埃兰提尔.
- Nothing was found for 丁香战争, 绿潮, 科琳 or 灰烬天空之日 through search; those rest on the local sources.

The snippets confirm the localisation forms and add no new terms. They also confirm that the wider community says 埃兰提尔 and 月神之泪 where the user's game says 阿伦蒂尔 and 达姆斯塔尔.

## 8. Uncertainties and open questions

- **Dame family.** The user's game transliterates Dameshead and damestear; the localisation translates the whole family with 月神. The glossary follows the user for those two words only. If the user would rather have the localisation's set (月神之首, 月神之泪) the change is a search-and-replace on two roots.
- **Fey = 妖精** rests on one user-game string. The localisation's 仙灵 is the safer community form.
- **Sorcerer-King = 术士王** is my coinage; the user's game wrote 巫师王 for the Black Demesne's ruler.
- **First Great Damesear Raid.** The user-game string 达梅斯海 looks like a slip for the island; the event may need renaming to 第一次月神之耳大劫掠.
- **贾哈尼克.** The user's game uses 贾哈尼克历史 / 贾哈尼克正史 fifteen times for "the fixed canon timeline". I could not find the English it renders, so it is not in the glossary.
- **绿河, 血腐阶梯.** Matched to Green River and Rottenstep by sense, not by an explicit pair.
- **Gods.** No Chinese source names Falah, Halanna, Wip, Ildran or Dagrin Everbeard; Esmaryal, Nerat, Ara, Balgar and Begga are reconstructed from temple and place names in the localisation. The localisation's own deity file was not available in decoded form, so these may differ from what players see in the deity picker.
- **People.** Outside the user's game and a handful of map-project titles, personal names are coined. The Victoria 3 character history files I checked name two ruler templates for Anbennar (Gratto Silcalas, Dalyon Vanbury) and none for Lorent, the Vivin Empire, the Northern League or Grombar, so almost no 1836 people are listed.
- **Months and weekdays** other than 泪落月 and 奈拉月 are coined.
- **Victoria 3 country names** come from the map project's own translation, not from a released Chinese localisation; the few it marks 暂译 or 推演 are `low` here.
- **One ciku entry**, 塞戈维特, could not be matched to any tag.
- The bulk layer includes every culture and country, including many a campaign will never touch. Writers should treat the top table and the curated categories as the working set and use the rest as a lookup.
