# T1 以人为维度的阅读习惯与注意力（含中文阅读特性与各通知表面的可见字数）

调研日期：2026-11-18
核心问题：人在手机上「看」一条 PA 主动消息时，眼睛和注意力实际怎么走？中文有哪些特殊性？每个表面到底能露出几个汉字？一条推送「前 N 个字」必须说完什么？

---

## 0. 阅读须知：核对状态与本次调研的硬限制

每条结论后都标了核对状态，下游请按状态使用。

| 标记 | 含义 | 可否直接引用数字 |
|---|---|---|
| 【已核】 | 本次会话用 WebFetch 打开了原页面（或其官方数据源），引语逐字核对 | 可以 |
| 【搜】 | 只经 WebSearch 结果摘要核对，原页面在本会话网络里打不开 | 可引用结论；精确数字上线前再核原文 |
| 【忆】 | 凭研究员既有知识写入，本次没能联网核对 | 只当线索；引用前必须复核 |
| 【算】 | 研究员用【已核】的官方参数做的推算，写明了假设 | 当估计值用；必须实机校准 |
| 【邻】 | 同项目其他方向笔记（T2、T7b）里已有的记载，本人未核 | 以对应笔记的状态为准 |

两个硬限制，如实说明：

1. **联网检索只成功了 2 次。** 整个工作流共享的 WebSearch 额度（每轮 200 次）在我发出第 3 批检索时已耗尽。任务要求的「至少 15 次搜索」没有做到。
2. **WebFetch 只能访问少数域名。** 本会话的网络策略是「limited」，实测可达：`developer.apple.com`、`developer.android.com`、`raw.githubusercontent.com`、`github.com`、`www.microsoft.com`。实测解析失败：`www.nngroup.com`、`ic.unicamp.br`。工具在第二个域名失败后要求停止试探其他站点，所以 ACM、PMC、微信开放文档、国内厂商开发者站、工信部和 CNNIC 都没有去试。

结果是：**平台规范这一半核得很扎实**（48 次成功抓取，另有 6 次 404、3 次域名解析失败；覆盖 Apple HIG 与开发文档、WWDC 讲稿、Android 设计与开发文档、AOSP 源码、Ant Design、W3C 中文排版需求、WCAG、微软文风指南等约 40 个页面）；**学术文献这一半几乎全是【忆】**。学术部分的 DOI 也是凭记忆写的，个别可能有误，文中已逐条标出。请把第 2–4 节的学术数字当作「待复核的线索」，把第 5 节的官方数字当作「可直接用的约束」。

后续若要补核，需要在会话网络设置里放行第 14 节列出的域名。

---

## 1. 一页结论

1. **官方给的预算比基础稿更紧。** Apple 对通知标题的官方要求是 "usually only a couple of words"，并说明 Apple Watch 的 short look 只显示这一行【已核】。Android 设计规范要求标题不超过 30 个字符、正文不超过 40 个字符，而且标题「即使展开也只有一行」【已核】。这两个数字按拉丁字符给出，折算成汉字约是 15 字和 20 字。
2. **默认字号下，一行大约只有 17–20 个汉字；调大字号后降到 12–14 个，最大无障碍字号只剩 5–6 个。** 这是用 Apple 的 Dynamic Type 字号表和 AOSP 通知模板尺寸推算的【算】，不是实测。它直接决定了「前 12 个字必须说完一个完整命题」。
3. **最紧的容器只有 3–6 个字。** Android 16 Live Update 的状态栏胶囊最宽 96dp，官方只保证「少于 7 个字符」的文本完整显示【已核】；灵动岛紧凑态每侧 52.33×36.67pt，最小态要塞进直径 28pt 的圆【已核】，折算约 3–4 个汉字或 5–6 个半角数字【算】。
4. **一次注意大约只有 2–5 秒。** Apple 设计团队公开说过，Apple Watch 的内部交互指标是「约 5 秒或更短」【已核】；Wear OS 的说法是「几秒内完成」【已核】。按成人默读中文约每秒 7 个字估算【忆+算】，2 秒读 14 字，5 秒读 35 字。基础稿的「1.5–3 秒」量级不离谱，但没有出处。
5. **通知到达后要「几分钟」才被看到，不是几秒。** Pielot 等 2014 年的实地研究：15 人、1 周、日均 63.5 条，通常几分钟内被查看【搜】。所以回应窗口短于 5 分钟的事（抢号、抢票）不能发「待确认」，只能事前授权、事后告知。
6. **人把通知当「知晓」用，不当「指令」用。** Iqbal 与 Horvitz 的两周实地研究发现，用户主要把通知当作被动保持知晓的手段，而不是切换任务的信号【已核摘要】。Apple HIG 也明确反对发「去 App 里做某事」的通知，理由是「人划走通知之后很难记住这种指示」【已核】。所以一条消息要么看完即知，要么在通知上就能点完。
7. **中文的三个特殊点。** 一次注视只覆盖注视点左 1 字、右 2–3 字【忆】；没有词间空格，交集型歧义串会引起回视【忆】；阿拉伯数字在汉字里天然是视觉「斑点」，Ant Design 规范直接写了「用户对于数字的感知速度更快」【已核】。
8. **字数预算建议（详见第 8 节）：前 6 个字宽给出结果词和数字；前 12 个字宽说完一个完整命题；标题建议 14 字宽以内、硬上限 20 字；正文首句 18 字宽以内且能独立看懂，全文硬上限 50 字。** 字宽口径：全角算 1，半角算 0.5。

---

## 2. 人怎么「看」一条主动消息：扫读、首词、斑点

### 2.1 扫读是默认行为，但证据来自网页，不是通知

- NN/g 1997 年 "How Users Read on the Web"：79% 的测试用户总是扫读新页面，只有 16% 逐字读；把同一个网站改写成简洁版、可扫读版、客观语气版，实测可用性分别提高 58%、47%、27%，三者合一提高 124%。【忆】 https://www.nngroup.com/articles/how-users-read-on-the-web/
  - 边界：1997 年、桌面网页、改写的是一个旅游网站、样本约 51 人（样本量凭记忆）。它量的是「整页网站的可用性」，不是通知。基础稿引用的数字本身没错，但把它说成「该场景（PA 通知）可用性提升 124%」是越界外推。
- NN/g 2008 年 "How Little Do Users Read?"：平均一次页面访问里，用户最多有时间读 28% 的字，更可能是 20%。【忆】 https://www.nngroup.com/articles/how-little-do-users-read/
- Apple 在 WWDC22 "Writing for interfaces" 里的说法与此一致："We know people don't always read the text on screen in order, so make sure your headers and buttons are clear."【已核】 https://developer.apple.com/videos/play/wwdc2022/10037/

对 PA 的含义：默认用户不会把一条消息读完。写作目标不是「写通顺」，而是「只读到一半也够用」。

### 2.2 F 型在手机上仍然成立，但它描述的是「没有线索时的退化态」

- NN/g 2017 年复查 F 型扫视，标题就叫 "Misunderstood, But Still Relevant (Even on Mobile)"。结论是 F 型在桌面和手机上都还存在，并且它是「没有强视觉线索把眼睛引向有意义信息时的默认模式」；好的排版会减弱 F 型。【搜】 https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- 同一篇文章列出的其他模式【忆】：
  - 斑点型（spotted）：眼睛跳过大段文字，只落在数字、链接、加粗词、特殊形状的词上。
  - 千层饼型（layer-cake）：只扫标题和小标题。
  - 投入型（commitment）：逐字读完，只在动机很强时出现。
  - **绕过型（bypassing）：当一列文字的每一行都以相同的词开头时，人会故意跳过每行开头的几个词。**
  - 标记型（marking）：手指滑动时眼睛盯住一个位置不动，手机上比桌面更常见。
  - 来源：https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/ 【忆，未能打开】

对 PA 的含义，有两点和基础稿不同：

1. **F 型对一两行的短消息基本用不上。** F 型说的是多行文本里「越往下、越往右，看得越少」。一条推送只有 1–4 行，真正起作用的是它的两个局部规律：第一行得到的注视最多；每行最左边的几个词得到的注视最多。基础稿把 F 型写成「通知缺小标题时的最差退化态」，NN/g 研究的对象是网页，不是通知。
2. **绕过型是通知列表里最该防的模式。** 如果 PA 的每条消息都以「【PA】」「温馨提示：」「你关注的」开头，用户在通知中心看到一摞消息时会学会跳过开头，标题里最值钱的位置就作废了。系统已经在标题上方显示了 App 图标和名称，Android 规范明说标题要「Excludes the app's name, which already appears in the header」【已核】，Apple 也说「Avoid including your app name or icon」【已核】。

### 2.3 首词效应：扫读者只看开头两三个词

- NN/g 2009 年 "First 2 Words: A Signal for the Scanning Eye"：用户扫列表时，通常只看每一项的前 2 个词；研究用「前 11 个字符」测试用户能否猜出链接指向什么。【忆】 https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/
  - 换算：11 个拉丁字符的宽度约等于 5–6 个汉字【算】。
- Apple 开发文档对通知标题的原话："Title strings should be short, usually only a couple of words describing the reason for the notification. In watchOS, the system displays the title string as part of the short look notification interface, which has limited space."【已核】 https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/title
- APNs 文档对 `title` 键的描述："Apple Watch displays this string in the short look notification interface. Specify a string that's quickly understood by the user."【已核】 https://developer.apple.com/documentation/usernotifications/generating-a-remote-notification
- 把最重要的信息放最前，是四家规范的共识【全部已核】：
  - Apple HIG Writing："Pay attention to the order of elements on a screen, and put the most important information first." https://developer.apple.com/design/human-interface-guidelines/writing
  - Ant Design 文案规范：「在有限的空间内将重要的信息放在最前面（或通过高亮、留白等方式突出重要信息）。」反例说明：「用户最关心的信息内容藏在段落中，不易搜寻。」 https://ant.design/docs/spec/copywriting-cn/ （本次从 GitHub 源文件核对）
  - Microsoft Writing Style Guide："Lead with what's most important."，以及 "Shorter is always better." https://github.com/MicrosoftDocs/microsoft-style-guide/blob/main/styleguide/top-10-tips-style-voice.md
  - Android 通知设计规范：好的标题要 "Contains the most important information"。 https://developer.android.com/design/ui/mobile/guides/home-screen/notifications

对 PA 的含义：标题的前两个词（中文约 4–6 个字）决定这条消息会不会被继续读。这是第 8 节「前 6 个字宽」预算的第一条依据。

### 2.4 倒金字塔与 BLUF：有实证，但没有针对通知的实证

- BLUF（bottom line up front）最常被引用的实证是 Suchan 与 Colucci 1989 年对美国海军军官的实验：把官样文章改成「结论先行」的高影响力写法后，阅读时间少 17%–23%，理解也更好。【忆】 Management Communication Quarterly 2(4)，DOI 凭记忆为 10.1177/0893318989002004002。
  - 边界：1989 年、英文、纸面备忘录、海军军官。不是手机，不是通知。
- 新闻学里对倒金字塔的实验结果并不一致：有研究发现按时间顺序或叙事结构写的新闻，读完后的记忆和愉悦度不比倒金字塔差，有时更好。【忆，未取到具体出处，仅作提醒】
- NN/g 的 "Inverted Pyramid: Writing for Comprehension" 推荐倒金字塔，理由是用户随时可能停止阅读。【忆】 https://www.nngroup.com/articles/inverted-pyramid/

诚实的结论：倒金字塔的优势在于「读者随时会走」。通知正好是读者最容易走的场景，所以适用；但「结论先行能提高理解」这件事，在完整读完的条件下证据并不强。PA 的长消息（复盘、周报）不必机械套用。

### 2.5 手机上读东西更难吗：2011 年的结论在 2016 年没有被复现

- 2011 年 NN/g 转述阿尔伯塔大学 Singh 等人的研究：在 iPhone 大小的屏幕上读隐私政策，完形填空理解得分是 18.93%，桌面是 39.18%，于是有了「手机内容难两倍」的说法。【忆】 https://www.nngroup.com/articles/mobile-content-is-twice-as-difficult-2011/ （URL 凭记忆）
- 2016 年 NN/g 自己重做（Moran，"Reading Content on Mobile Devices"）：总体上手机与电脑的理解得分没有实质差别；只有难度高的内容在手机上更吃力。【忆】 https://www.nngroup.com/articles/mobile-content/

对 PA 的含义：不要用「手机上难两倍」来论证精简。更稳的论据是屏幕窗口小、注意时间短、而且是被打断时读的。难内容（退改签规则、满减算式）才是手机上真正吃亏的部分，应该折叠到二级页面。

---

## 3. 通知场景的「一瞥」：多久看到、看多久、怎么分诊

### 3.1 到达到被看见：分钟级

- Pielot、Church、de Oliveira，MobileHCI 2014，"An In-Situ Study of Mobile Phone Notifications"：15 名用户、1 周；人均每天处理 63.5 条通知，主要来自即时通讯和邮件；无论手机是否静音，通知通常在几分钟内被查看。【搜】 https://doi.org/10.1145/2628363.2628364
  - 边界：15 人、西欧信息工作者、2014 年。后续引用它的论文也强调样本小。
- Sahami Shirazi 等，CHI 2014，"Large-Scale Assessment of Mobile Notifications"：4 万多名用户、近 2 亿条通知；用户最看重即时通讯类通知，以及包含「人」和「事件」信息的通知。【忆】 https://doi.org/10.1145/2556288.2557189
- Pielot、Vradi、Park，MobileHCI 2018，"Dismissed!"：278 名用户、约 79 万条通知的真实日志。【忆，细节数字未核；T2 笔记有搜索级记载】

对 PA 的含义：

- 「几分钟」意味着任何需要 1–5 分钟内回应的节点都不能依赖推送加确认。抢号、抢票、秒杀这类目标要在创建时就拿到授权（「到号直接取」「低于 ¥2,000 直接下单」），推送只负责事后告知。
- PA 的消息在和几十条人际消息排队。非人际消息想被看重，只能靠「和我有关的事件」这个属性：写明是哪件事、现在变成了什么。

### 3.2 一次看多久：秒级

| 来源 | 原话或数字 | 状态 |
|---|---|---|
| Apple，WWDC15 "Designing for Apple Watch" | "Our internal metric for interaction times is about five seconds or less." "Interaction times on those devices [iPad/iPhone] could be in the minutes or even hours, whereas interaction times in Apple Watch are just a matter of seconds." | 【已核】 https://developer.apple.com/videos/play/wwdc2015/802/ |
| 同上，谈通知 | "The purpose of a notification is to communicate high value information clearly, quickly and succinctly. In order to accomplish this, you want to use as few words as possible and avoid any unnecessary details." "people don't want to read a lot of text on their Apple Watch. Get to the point quickly." | 【已核】 |
| Apple HIG，Designing for watchOS | "People glance at the Always On display many times throughout the day, performing concise app interactions that can last for less than a minute each." "Support quick, glanceable, single-screen interactions…" | 【已核】 https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos |
| Apple HIG，Notifications（watchOS） | "A short look appears only briefly, giving people just enough time to see what the notification is about and which app sent it." | 【已核】 https://developer.apple.com/design/human-interface-guidelines/notifications |
| Wear OS 设计原则 | "Help people complete tasks on the watch within seconds to avoid ergonomic discomfort or arm fatigue." | 【已核】 https://developer.android.com/design/ui/wear/guides/foundations/design-principles |
| Wear OS 通知 | "Glanceable: Use small pieces of information with clear hierarchy to enable users to rapidly scan and take in information." "Valuable: Ask yourself, is it worth buzzing the user's wrist for this?" | 【已核】 https://developer.android.com/design/ui/wear/guides/surfaces/notifications |
| Android 横幅通知 | "It disappears after a moment, but it remains visible in the notification drawer as usual." | 【已核】 https://developer.android.com/develop/ui/compose/notifications |
| Oulasvirta 等，CHI 2005，"Interaction in 4-Second Bursts" | 在走路、乘车等移动情境里，对手机的连续注意被切成 4–8 秒一段；实验室里是 16 秒以上 | 【忆】 https://doi.org/10.1145/1054972.1055101 |
| Pizza 等，CHI 2016，"Smartwatch in Vivo" | 一次看手表平均约 6.7 秒，约一半是看时间 | 【忆】 DOI 凭记忆 10.1145/2858036.2858522 |
| Ferreira 等，MobileHCI 2014，应用微使用 | 约 40% 的应用启动持续不到 15 秒 | 【忆】 DOI 凭记忆 10.1145/2628363.2628367 |
| Banovic 等，MobileHCI 2014，"ProactiveTasks" | 把手机使用分成 glance（只看锁屏）、review（60 秒内）、engage（更长）三类 | 【忆】，比例数字未核 |
| NHTSA 2013 驾驶分心指南 | 单次视线离路不超过 2 秒，完成一项任务累计不超过 12 秒 | 【忆】，联邦公报文号凭记忆 2013-09883 |

把这些放在一起看，可用的注意时间有三档：

- **2 秒：一次瞥视的上限。** 驾驶场景的安全上限，也大致是横幅通知在屏幕上被扫一眼的时间。
- **5 秒：一次完整的微交互。** Apple 的手表内部指标，也是移动情境下一段连续注意的下限（4–8 秒）。
- **15 秒：点进去之后愿意给的时间。** 微使用研究的口径。

对基础稿的校正：「注意力窗口通常只有 1.5 至 3 秒」没有给出处。量级和上面第一档接近，可以保留方向，但应改写为有出处的「2 秒 / 5 秒」两档，并标明 1.5–3 秒是推演。

### 3.3 人怎么分诊：通知是「知晓」，不是「切换」

- Iqbal 与 Horvitz，"Notifications and Awareness: A Field Study of Alert Usage and Preferences"（微软研究院技术报告 MSR-TR-2009-67，2010 年 2 月；后发表于 CSCW 2010）：记录了两周的真实软件使用，比较有通知和暂时关掉通知两种状态。用户主要把通知当作被动保持知晓的手段，而不是切换任务的信号；关掉通知后，一部分人反而更频繁地自己去查邮件，另一部分人更专注；用户承认通知有干扰，但因为看重知晓而保留它。【已核摘要】 https://www.microsoft.com/en-us/research/publication/notifications-and-awareness-a-field-study-of-alert-usage-and-preferences/
  - 边界：桌面邮件通知，2009 年前后，不是手机。
- Apple HIG："People attend to notifications at their convenience."【已核】
- Apple HIG 明确反对两种写法【已核】：
  - "Avoid sending multiple notifications for the same thing, even if someone hasn't responded." 理由是会塞满通知中心，用户可能把这个 App 的通知全关掉。
  - "Avoid sending a notification that tells people to perform specific tasks within your app." 理由是 "it's hard for people to remember such instructions after they dismiss the notification."，能在通知上完成的事就给操作按钮。

对 PA 的含义：

1. 「预览本身」就是产品。用户看一眼标题就决定不点开，这不是失败，是分诊成功。标题里要有足够的信息让用户做出「现在处理 / 稍后处理 / 不用管」的判断。
2. 「没回应就再发一遍」和平台规范冲突。未回应的待确认事项应该更新原通知，或者留在 App 内的目标卡片上，而不是重发。
3. 「去看看」「点击查看详情」不是合格的行动。合格的行动是通知上的按钮，或者一句不需要记忆的陈述。

### 3.4 系统也在替用户分诊（细节见 T2 笔记，这里只列与「怎么写」有关的）

- iOS 四个打扰级别里，Time Sensitive 只能用于「正在发生或一小时内将发生」的事件，营销内容绝不能用。【已核】 https://developer.apple.com/design/human-interface-guidelines/managing-notifications
- Android 默认把正文截成一行；同一 App 连发 4 条以上会被自动成组；Android 15 起短时间连发的通知会被降低展示、音量和振动，最长 2 分钟。【已核】
- Android 设计规范的「不要发通知」清单里有：没有直接价值、只为拉回访的消息，原文举例 "Haven't seen you in a while!"。【已核】

对 PA 的含义：连发三条等于后两条静音；口吻像营销等于被降级。这两件事都是「怎么写」能控制的。

---

## 4. 中文阅读特性

### 4.1 知觉广度：一次注视约 4 个字

- Inhoff 与 Liu 1998，"The perceptual span and oculomotor activity during the reading of Chinese sentences"：中文读者一次注视的有效视野是注视点左侧 1 个字、右侧 3 个字。【忆】 Journal of Experimental Psychology: Human Perception and Performance 24(1)，https://doi.org/10.1037/0096-1523.24.1.20
- 中文的眼跳幅度大约 2–3 个字，英文是 7–9 个字母；中文的平均注视时长与英文接近，在 200–260 毫秒之间。【忆，综述口径】
- 基础稿引的 SR Research 页面给的是「左 1 字、右 2–3 字」，和上面一致。该页面本次未能打开。

对 PA 的含义：一眼大约 4 个字。一秒钟大约 3–4 次注视。所以「一秒看到的东西」不是一句话，而是 2–3 个词。把结果词和数字挤进开头 4–6 个字里，才真的是「一眼」。

### 4.2 阅读速度：默读每秒约 7 个字，朗读每秒约 4 个字

| 来源 | 数字 | 条件 | 状态 |
|---|---|---|---|
| Trauzettel-Klosinski 与 Dietz 2012，IReST 国际阅读速度文本 | 中文 255±29 字/分钟（158±19 词/分钟）；英文 228±30 词/分钟；日文 357 字/分钟 | **朗读**，健康成人，17 种语言 | 【忆】 https://doi.org/10.1167/iovs.11-8284 |
| Sun、Morita、Stark 1985 | 中文约 386「等效词」/分钟，约 580 字/分钟；英文 382 词/分钟 | 默读，熟练读者，小样本，年代久 | 【忆】 DOI 凭记忆 10.3758/BF03204913 |
| Brysbaert 2019 元分析 | 英文默读：非虚构 238 词/分钟、虚构 260 词/分钟；朗读 183 词/分钟。基于 190 项研究、18,573 名被试。其他语言的阅读速率可以用「表达同样内容需要多少词」来预测 | 元分析 | 【忆】 https://doi.org/10.1016/j.jml.2019.104047 |
| Liversedge 等 2016 | 中文、英文、芬兰文读同样内容的句子，总阅读时间接近，尽管注视次数和时长的分布不同 | 眼动实验 | 【忆】 https://doi.org/10.1016/j.cognition.2015.10.013 |

- 任务书提到的「Brysbaert 2019 里的汉字/分钟」：我只记得摘要里的英文数字和「跨语言按信息量折算」这条原则，中文的具体数值没有把握，所以不写。请在补核时查原文表格。
- 我的工作估计【算】：成人默读连续中文约 400–600 字/分钟，取每秒 7 个字作为中位估计（由注视时长约 250 毫秒、眼跳约 2.5 字、回视约 15% 推出），每秒 10 个字作为熟练读者上限；朗读和语音播报按每秒 4–4.5 个字。

| 字数 | 默读（7 字/秒） | 默读上限（10 字/秒） | 语音播报（4.5 字/秒） |
|---|---|---|---|
| 6 | 0.9 秒 | 0.6 秒 | 1.3 秒 |
| 12 | 1.7 秒 | 1.2 秒 | 2.7 秒 |
| 14 | 2.0 秒 | 1.4 秒 | 3.1 秒 |
| 20 | 2.9 秒 | 2.0 秒 | 4.4 秒 |
| 35 | 5.0 秒 | 3.5 秒 | 7.8 秒 |
| 50 | 7.1 秒 | 5.0 秒 | 11.1 秒 |
| 70 | 10.0 秒 | 7.0 秒 | 15.6 秒 |

边界：这些速率来自实验室里读连续文本。被打断时读通知只会更慢。把上表当上限用。

对 PA 的含义：2 秒对应 14 个字，5 秒对应 35 个字。基础稿的「全文 40 字以内」对应约 5.7 秒，和 Apple 的 5 秒指标是同一个量级，方向正确。

### 4.3 无空格分词与歧义切分

- Bai、Yan、Liversedge、Zang、Rayner 2008，"Reading spaced and unspaced Chinese text"：给中文按词加空格，熟练读者读得不比无空格更快；按字加空格或在错误位置加空格，读得更慢。【忆】 https://doi.org/10.1037/0096-1523.34.5.1277
  - 含义：熟练读者不需要空格来分词，但错误的切分线索会伤害阅读。通知被系统在词中间折行或截断，就是一种错误的切分线索。
- 交集型歧义串（overlapping ambiguous strings，如 ABC 里 AB 和 BC 都成词）：Ma、Li、Rayner 2014 等研究发现，读者会先按一种切分走，切错了就要回视重读，注视时间和回视概率上升。【忆】 DOI 凭记忆 10.1037/a0035389
- 词长分布：现代汉语常用词表里，按词形算双字词约占 72%；按文本里实际出现的词次算，单字词约占 70%、双字词约占 27%。【忆，出自 Li 等 2014 及其引用的常用词表，数字待核】

PA 话术里容易出现的歧义串（以下例子是研究员构造的，用来说明现象）：

| 原句 | 歧义 | 改法 |
|---|---|---|
| 免费改签到 16:30 的航班 | 「改签 / 到」还是「改 / 签到」 | 免费改签至 16:30 航班 |
| 已取消订单保险 | 「取消 / 订单保险」还是「取消订单 / 保险」 | 这单的保险已取消，订单保留 |
| 已退款项 3 笔 | 「已退 / 款项」还是「已退款 / 项」 | 已退回 3 笔 |
| 本周日程已满 | 「本周 / 日程」还是「本周日 / 程」 | 这周的日程已满 |
| 下周到期日程 3 项 | 「到期 / 日程」还是「到期日 / 程」 | 下周有 3 项日程到期 |
| 机票降价了解一下 | 「降价了 / 解」「降价 / 了解」 | 机票降了 ¥420 |
| 请在 5 日前处理 | 「5 号之前」还是「5 天前」 | 请在 11 月 5 日 24:00 前处理 |
| 请在还款日前处理 | 「还款日 / 前」还是「还款 / 日前」 | 请在 5 日（还款日）24:00 前处理 |

其中「X 日前」是最值得进黑名单的一个：它在提醒场景里既可以是截止时间，也可以是「几天前」。

### 4.4 标点分块与句长

- Ant Design 文案规范的两句原话【已核】：「为了帮助用户更加高效地扫视文本内容，可以省略不必要的断句点。」「正确地使用标点符号会让句子看起来更清晰和具有可读性。」
  - 同一规范列出不用句号的四种情况：输入框下的提示；表格中的句子；句末为文字链；按钮和标题。
- Ren 与 Yang 2010 的眼动研究发现，中文句子里从句边界处的逗号能帮助读者切分，有逗号时读得更顺。【忆，细节待核】 Journal of Research in Reading 33(2)
- 中文句长与可读性：中文可读性公式普遍把平均句长和词语难度作为主要预测变量。具体阈值（例如「一句不超过多少字」）我没有可靠出处，列为缺口。

我的工作建议【推演】：把「两个标点之间的字数」控制在 12–15 个字宽以内。依据是一行约 17–20 字（第 5 节），一次瞥视约 14 字（4.2），一个标点句最好不跨行。这是设计推演，不是实证结论。

### 4.5 数字、货币符号、英文在汉字里的显著性

- Ant Design 文案规范「统计数据使用阿拉伯数字」一节原话：「这也是常见问题，用户对于数字的感知速度更快，使用数字而非文字表述会更加有效。」示例说明：「阿拉伯数字的信息传递效率更高」。【已核】
- NN/g 2007 年 "Show Numbers as Numerals When Writing for Online Readers"：眼动研究显示数字常常能让游走的视线停下来，写「23」比写「twenty-three」更容易被扫到。【忆】 https://www.nngroup.com/articles/web-writing-show-numbers-as-numerals/
- 机理【推演】：半角数字、¥、%、冒号的笔画密度和字宽都与方块汉字不同，在一行汉字里是天然的异质点。这就是 NN/g 说的斑点型扫视在中文里的落点。

边界与反面：

- 斑点靠「少」起作用。一条消息里有 5 个数字，就没有哪个是斑点。建议一条消息最多 2 个数字：一个金额或时长，一个时间。
- 约数用汉字更自然（「十几块」「三四天」），精确数、金额、时间用阿拉伯数字。《出版物上数字用法》（GB/T 15835-2011）是这个方向的国家标准。【忆】

### 4.6 中西文之间的空格（盘古之白）：规范支持，实证不足

- W3C《中文排版需求》横排中西文混排一节原话：「原则上，汉字与西文字母、数字间使用不多于四分之一个汉字宽的字距或空白。」英文版："…tracking or spacing between an adjacent Han character and a Western character or a European numerals of up to 1/4 em, except at the line start or end."【已核】 https://www.w3.org/TR/clreq/ （本次从 w3c/clreq 仓库的 gh-pages 分支核对）
- 《中文文案排版指北》【已核】 https://github.com/sparanoid/chinese-copywriting-guidelines
  - 中文与数字之间加空格。正确：「今天出去买菜花了 5000 元。」错误：「今天出去买菜花了5000元。」
  - 度数和百分比与数字之间不加空格。正确：「新 MacBook Pro 有 15% 的 CPU 性能提升。」
  - 全角标点与其他字符之间不加空格；数字用半角。
- Ant Design 文案规范：「全角字符和半角字符搭配时，需要添加空格，如：两个、2 个、50%。」【已核】

诚实的边界：这三份都是排版规范或社区约定，不是阅读实验。4.3 里的 Bai 等 2008 反而说明，熟练读者不靠空格分词。所以盘古之白的价值更可能在「让数字更像斑点」和「观感整齐」，而不是「读得更快」。我没有找到直接检验「汉字与数字之间加空格是否加快扫读」的研究。

落地建议：

- App 内卡片、推送：汉字与数字、英文之间加一个半角空格，全篇统一。
- 短信：每个空格都计入 70 字符，可以不加，但同一条里要统一。
- 微信模板字段：每个空格计入 20 字符上限，优先保内容。
- 货币符号紧贴数字（¥420），千分位用半角逗号（¥1,280）。

### 4.7 行长

- WCAG 2.x 成功准则 1.4.8 Visual Presentation（AAA 级）：行宽不超过 80 个字符或字形，CJK 为 40。【已核】理解文档原话："Lines should not exceed 80 characters or glyphs (40 if CJK)."，理由是 "CJK characters are approximately twice as wide as non-CJK characters"。 https://www.w3.org/TR/WCAG22/#visual-presentation （本次从 w3c/wcag 仓库核对）

对 PA 的含义：手机上一行 17–22 个汉字，远低于 40 字上限，行长不是问题。问题在行数：通知里超过 2 行就进入「不保证被读到」的区域。

---

## 5. 各表面可见字数

### 5.1 总表

读表须知：「官方硬限制」超了会被拒发或截断；「官方建议」超了不报错但会被截断；【算】是按默认字号推算的可见字数，各厂商系统皮肤差异很大，必须实机校准（方法见 5.6）。

| 表面 | 位置 | 约束或可见字数 | 口径与状态 |
|---|---|---|---|
| iOS 锁屏、通知中心、横幅 | 标题 | 约 15–19 个汉字，1 行（393pt 宽机型约 17） | 【算】假设见 5.2 |
| | 正文 | 每行约 18–22 个汉字（393pt 宽机型约 19）；最多约 4 行，合计约 70–80 字 | 每行字数【算】；4 行是经验值【忆】 |
| | 副标题 | 不保证显示。"Subtitles aren't displayed in all cases." | 【已核】 |
| | 预览被隐藏时 | 0 个字。只显示 App 图标和默认标题「通知」，或开发者设的类别占位文案 | 【已核】HIG；Face ID 机型默认「解锁时才显示预览」是【忆】 |
| | 官方字数上限 | 没有。"don't truncate your message — the system does this automatically when necessary" | 【已核】 |
| | 传输上限 | 整个 payload 不超过 4096 字节 | 【已核】 |
| iOS 调大字号 | xxxLarge（标准档最大） | 标题约 12 字，正文每行约 14 字 | 【算】 |
| | AX1（无障碍第一档） | 标题约 10 字，正文每行约 11 字 | 【算】 |
| | AX5（最大） | 标题约 5 字，正文每行约 6 字 | 【算】 |
| Android 通知（AOSP 模板，折叠态） | 标题 | 恒为 1 行，约 14–19 个汉字。"Android truncates content titles to a single line (even when expanded)." | 单行【已核】；字数【算】 |
| | 正文 | 默认 1 行，约 17–22 个汉字。"By default, the notification's text content is truncated to fit on one line." | 单行【已核】；字数【算】 |
| | 官方建议 | 标题 "Doesn't exceed 30 characters"；正文 "Avoids exceeding the 40-character limit" | 【已核】按拉丁字符；约合 15 和 20 个汉字 |
| Android 展开态 | BigTextStyle | 多行。AOSP 模板 XML 里没有设 maxLines，实际行数由系统版本和厂商决定 | 模板【已核】；行数未取到 |
| | InboxStyle | 最多 6 行，每行截成 1 行 | 【已核】 |
| | 按钮 | 展开后最多 3 个 | 【已核】 |
| Android 调大字号 | 1.3 倍 | 标题约 10–14 字，正文约 13–17 字 | 【算】 |
| | 2.0 倍（Android 14 起的上限） | 标题约 7–9 字，正文约 8–11 字 | 上限 200%【已核】；字数【算】 |
| Apple Watch | short look | App 图标、App 名、标题。约 8–11 个汉字一行 | 结构【已核】；字数【算】 |
| | long look | 可滚动；最多 4 个自定义按钮；双指互点触发第一个非破坏性操作 | 【已核】 |
| 灵动岛 | 紧凑态 | 左右各 52.33×36.67pt（393pt 宽机型），62.33×36.67pt（430pt 宽机型）。约 3–4 个汉字或 5–6 个半角数字 | 尺寸【已核】；字数【算】 |
| | 最小态 | 要能放进直径 28pt 的圆。"Use a short abbreviation or graphic representation instead of a full text string." | 【已核】 |
| iOS 实时活动 | 锁屏卡片 | 371×84–160pt（393pt 宽机型），超过 160pt 高可能被截断；最长活动 8 小时，结束后在锁屏最多再留 4 小时 | 【已核】 |
| Android 16 Live Update | 状态栏胶囊 | 最宽 96dp；"If less than 7 characters, show the whole text."；显示不到一半就只显示图标。约合 4 个汉字 | 规则【已核】；汉字数【算】 |
| 鸿蒙实况窗 | 胶囊 | 2025-06 通用模板：主文本 1–3 个中文字符，副文本 1–6 个；另有一组口径是主文本 8–10 字、辅助文本 9–12 字 | 【邻】T7b 笔记，搜索级，两组口径待回官网核对 |
| 微信小程序订阅消息 | thing 字段 | 20 个字符以内，超长即发送失败 | 【忆】；T7b 笔记有搜索级佐证 |
| | 其他字段 | phrase 5 个汉字以内；name 10 个汉字或 20 个字母以内；character_string 32 位以内；number 32 位以内；amount 为 1 个币种符号加 10 位以内数字；time、date 为固定格式 | 【忆】 |
| 短信 | 单条 | 70 个字符，含签名和空格；超过后按每段 67 个字符拆分计费 | 67【已核】Twilio 开源计算器说明；70 是 UCS-2 短信的标准容量【忆】 |
| vivo 推送 | 标题、内容 | 标题最多 20 个汉字（40 个英文字符）；内容最多 50 个汉字（100 个英文字符） | 【忆】vivo 开放平台单推接口文档 |
| 小米推送 | title、description | title 长度小于 50，description 长度小于 128，中英文都按 1 计 | 【忆】 |
| OPPO 推送 | title、content | title 50 字以内，content 200 字以内，中英文都按 1 计 | 【忆】 |
| 魅族推送 | title、content | title 32 字以内，content 100 字以内 | 【忆】 |
| 华为、荣耀推送 | 消息体 | 总大小不超过 4096 字节 | 【忆】 |
| Android Auto | 非即时通讯类通知 | 不朗读；禁止自动滚动文字；通知必须与驾驶相关；禁止通知广告 | 【已核】质量准则 MF-5、ST-1、IN-1、NA-1 |
| CarPlay | 界面文字 | 没有字数规定。"easy to scan from the driver's seat" | 【已核】 |

读完这张表，有三个结论：

1. **跨表面的最小公共容量是 20 个字的标题、50 个字的正文。** 这来自 vivo 的硬上限【忆】和微信 thing 字段的 20 字符【忆】。如果 PA 想用一份文案覆盖国内主流安卓通道和微信服务通知，就得按这两个数写。
2. **默认字号下的「第一行」是 17–20 个字，调大字号后是 12–14 个字。** 所以「一个完整命题」要在 12 个字宽内说完，才能在大字号用户那里也不折行。
3. **最紧的容器是 3–6 个字。** 胶囊和岛只能放一个状态词或一个数字。

### 5.2 iOS 的推算过程【算】

已核参数：iOS Dynamic Type 字号表（HIG Typography，https://developer.apple.com/design/human-interface-guidelines/typography ）。

| 字号档 | Subhead 字号（pt） | Body 字号（pt） |
|---|---|---|
| Large（默认） | 15 | 17 |
| xLarge | 17 | 19 |
| xxLarge | 19 | 21 |
| xxxLarge | 21 | 23 |
| AX1 | 25 | 28 |
| AX3 | 36 | 40 |
| AX5 | 49 | 53 |

平台默认与最小字号：iOS 默认 17pt、最小 11pt；watchOS 默认 16pt、最小 12pt。【已核】

我的假设（未核，来自对系统界面的经验观察）：

- 通知标题和正文用 Subhead 文本样式，默认 15pt；标题是半粗体。
- 通知卡片左右各留 8pt；卡片内左侧是 38pt 的图标加两侧间距，共约 62pt；右侧内边距约 16pt。于是正文可用宽度约等于屏宽减 94pt。
- 标题行右侧还有时间戳，约占 44pt。
- 一个汉字的宽度等于字号。

按这些假设算出的每行汉字数：

| 屏宽 | 默认 15pt | xxxLarge 21pt | AX1 25pt | AX5 49pt |
|---|---|---|---|---|
| 375pt（小屏）标题 / 正文 | 15 / 18 | 11 / 13 | 9 / 11 | 4 / 5 |
| 393pt（标准）标题 / 正文 | 17 / 19 | 12 / 14 | 10 / 11 | 5 / 6 |
| 430pt（大屏）标题 / 正文 | 19 / 22 | 13 / 16 | 11 / 13 | 5 / 6 |

注意：无障碍字号下 iOS 的通知布局会变（图标位置、行数），上表只说明量级。带图片附件时正文宽度还要再减约 45pt，每行少 2–3 个字。

### 5.3 Android 的推算过程【算】

已核参数：AOSP `core/res/res/values/dimens.xml`（aosp-mirror 镜像的 master 分支）。

| 参数 | 值 |
|---|---|
| notification_title_text_size | 14sp |
| notification_text_size | 14sp |
| notification_big_title_text_size | 16sp |
| notification_subtext_size | 12sp |
| notification_content_margin_start | 52dp |
| notification_2025_content_margin_start | 72dp |
| notification_content_margin_end | 16dp |
| notification_heading_margin_end | 56dp |

来源：https://raw.githubusercontent.com/aosp-mirror/platform_frameworks_base/master/core/res/res/values/dimens.xml 【已核】

我的假设（未核）：通知栏左右各留 16dp；标题行右侧为展开箭头留 56dp；一个汉字宽度等于字号。

| 屏宽 | 字体 1.0 倍 标题 / 正文 | 1.3 倍 | 2.0 倍 |
|---|---|---|---|
| 360dp | 14–15 / 17–18 | 10–12 / 13–14 | 7 / 8–9 |
| 393dp | 16–18 / 19–20 | 12–13 / 15–16 | 8–9 / 9–10 |
| 412dp | 18–19 / 20–22 | 13–14 / 16–17 | 9 / 10–11 |

区间的两端分别对应新旧两套左边距（72dp 和 52dp）。

重要边界：这是原生 Android 的模板。HyperOS、ColorOS、OriginOS、HarmonyOS、MagicOS 都有自己的通知样式，折叠态显示 1 行还是 2 行正文、字号多大，各不相同。国内安卓的数字只能靠实测。

官方建议的 30 和 40 个字符按拉丁字母给出。拉丁字母平均宽度约为半个汉字，所以约合 15 个汉字的标题和 20 个汉字的正文，和上表的推算吻合。

### 5.4 手表、岛、实况

- Apple Watch：short look 只有标题这一行文字可控【已核】。41–49mm 表盘的屏宽约 176–205pt（凭记忆），扣除边距后一行约 8–11 个汉字【算】。给手表看的标题最好在 8 个字以内。
- 灵动岛紧凑态：每侧 52.33pt 宽【已核】。按 15–16pt 中等字重估算，放得下 3 个汉字，或「¥1280」这样的 5 个半角字符【算】。Apple 在 WWDC23 "Design dynamic Live Activities" 里的原话："Consider truncating or shrinking things like units, or maybe showing a less precise version of your data to avoid it getting too wide or unbalanced."【已核】 https://developer.apple.com/videos/play/wwdc2023/10194/
- Android 16 Live Update 胶囊：官方示例是「5min」这样的相对时间；ETA 还没算出来时不要留空，放 "Thinking..." 或 "Rerouting..." 这类占位【已核】。
- 资格限制（细节见 T2）：Live Update 明确不适用于「Ads, promotions, chat messages, alerts, upcoming calendar events」，并举例说追踪包裹不合适，因为用户不需要一直盯着【已核】。Apple 的说法是实时活动适合不超过 8 小时、有明确起止的事【已核】。所以多日的「盯降价」进不了岛，只有排队、抢号、改签处理中这类「执行中」状态可以。
- 实时活动与推送不要重复：Apple HIG 原话 "don't use push notifications alongside Live Activities for the same updates"【已核】。

### 5.5 微信、短信、厂商通道的计数口径不一样

| 通道 | 一个汉字算几 | 空格和标点 | 备注 |
|---|---|---|---|
| Android 官方建议（30 / 40） | 规范按拉丁字符写，没有给 CJK 口径 | — | 折算约 15 / 20 个汉字 |
| vivo | 1 个汉字等于 2 个英文字符 | 计入 | 标题 20 汉字、内容 50 汉字【忆】 |
| 小米、OPPO | 中英文都算 1 | 计入 | 【忆】 |
| 微信订阅消息 thing | 每个字符算 1 | 计入 | 20 字符【忆】 |
| 短信 | 每个字符算 1（UCS-2） | 计入，签名也计入 | 70 一条，超过后 67 一段 |
| APNs、华为、荣耀 | 按 UTF-8 字节，一个汉字 3 字节 | 计入 | 4096 字节，约 1,300 个汉字，不构成实际约束 |

对 PA 的含义：Skill 里的字数检查要按通道分别实现，不能只有一个「字数」概念。

### 5.6 实机校准方法（建议作为后续工作）

1. 标尺串：标题和正文都发「一二三四五六七八九十」重复 6 遍，每 10 个字后插一个「｜」。截图后数最后一个可见字的位置。
2. 机型：iPhone 小屏、标准、大屏各一台；Pixel 一台；HyperOS、ColorOS、OriginOS、HarmonyOS、MagicOS 各一台；Apple Watch 和一款国产手表各一块。
3. 字号：默认、系统标准档最大、无障碍第一档。
4. 状态：锁屏未解锁、锁屏已解锁、横幅、通知中心折叠、通知中心展开、同一 App 多条堆叠、带图片附件。
5. 记录：标题可见字数、正文每行字数、行数、截断符位置、副标题是否显示、长按或展开后的可见字数。
6. 产出：一份 `surface_limits.json`，供 Skill 的字数检查直接读取，替换本节的【算】值。

---

## 6. 排版因素

### 6.1 加粗与高亮：稀缺才有效

- Ant Design 把高亮和留白列为「突出重要信息」的手段。【已核】
- Apple 对实时活动的文字要求："Use large, heavier-weight text — a medium weight or higher."；对一般界面："avoid Ultralight, Thin, and Light font weights"。【已核】
- 认知心理学里的孤立效应（von Restorff 效应）：一组相似项目里与众不同的那个更容易被记住。【忆，教科书结论】前提是「与众不同」，高亮多了就没有孤立。
- Silvers 与 Kreiner 1997：别人预先画的、画错了重点的高亮会降低阅读理解。【忆】含义是高亮错地方比不高亮更糟。

通知里的现实：

- iOS 系统通知的正文是纯文本，不能局部加粗。Android 的 BigTextStyle 支持用 HTML 标记加粗【已核】，但走厂商通道的推送基本是纯文本。
- 所以在系统通知里，**标题就是唯一的加粗行**。数字要靠「位置」被看见，不是靠样式。
- 在 App 内卡片里，一张卡片只高亮一处，通常是金额或截止时间中的一个。

### 6.2 序列位置：开头最值钱，结尾第二，中间最差

- 自由回忆实验里的首因效应和近因效应（Murdock 1962）是教科书结论。【忆】
- 在短消息里的体现【推演】：
  - 会被截断的表面（锁屏、折叠通知）：只有首因，没有近因。结尾可能根本不显示。
  - 完整可见的短消息（两行以内的卡片、短信）：结尾是第二好的位置，适合放截止时间或「不处理会怎样」。
  - 中间是最差的位置，放限定条件和补充说明。
- 列表层面：通知中心按时间倒序排列，同一 App 的通知会堆叠，只露出最新一条【Android 自动成组已核；iOS 堆叠为忆】。所以每条消息都要能脱离上一条独立看懂，不能写成「接上条」。

### 6.3 标点和符号

- 冒号、逗号、¥、% 是低成本的视觉锚点。
- 方头括号【】在国内是短信签名的固定格式【忆】。在推送标题里用它，一是白占 2 个字宽，二是观感上向营销短信靠拢【推演】。
- 感叹号：Ant Design 原话「感叹号会让文案显得过于激动，容易让气氛变得过于紧张。」只在问候或祝贺时合理，例如「欢迎回到社区！」。【已核】
- 语气感叹词：Apple HIG Writing 原话 "Interjections like 'oops!' or 'uh-oh' are typically unnecessary and can sound insincere."【已核】对应中文的「哎呀」「糟糕」。

---

## 7. 人群差异

### 7.1 大字号用户：第一行只剩 12 个字

- Apple HIG Accessibility："Ideally, give people the option to enlarge text by at least 200 percent (or 140 percent in watchOS apps)."【已核】 https://developer.apple.com/design/human-interface-guidelines/accessibility
- Android 14："Starting in Android 14, the system supports font scaling up to 200%"【已核】 https://developer.android.com/about/versions/14/features
- Apple HIG Typography："Keep text truncation to a minimum as font size increases."【已核】
- 工信部《移动互联网应用（APP）适老化通用设计规范》（2021 年）：适老版界面主要文字不小于 18dp/pt；段落内行距至少 1.3 倍；主要可点击区域不小于 60×60dp/pt；文本对比度至少 4.5:1；禁止广告弹窗和诱导类按键。【忆，本次未能打开原文】
- 推算【算】：18pt 字号下一行约 16 个字；系统标准档最大字号下约 12–14 个字；无障碍字号下 5–11 个字。

对 PA 的含义：按「第一行 12 个字宽」来设计，才能让调大字号的人也在第一行看到完整命题。第二行在大字号下可能根本不显示。

### 7.2 自动消失的横幅对读得慢的人不公平

- Apple HIG Accessibility："Views and controls that auto-dismiss on a timer can be problematic for people who need longer to process information… Prefer dismissing views with an explicit action."【已核】
- 老年中文读者的眼动研究（Wang、Li 等 2018，Journals of Gerontology: Series B）：老年读者读得更慢，注视更多更长，回视更多，跳读更少。【忆】 DOI 凭记忆 10.1093/geronb/gbw036
- 另有研究报告老年读者的知觉广度更窄。【忆，具体数字没有把握，不写】

对 PA 的含义：横幅几秒后就消失，重要信息不能只活在横幅上。任何需要决定的事，都要在通知中心和 App 内的目标卡片上保留一份。

### 7.3 教育水平：按初中毕业写

- WCAG 2.x 成功准则 3.1.5 Reading Level（AAA 级）：当文本需要超过「lower secondary education level」的阅读能力时，应提供补充内容或更易读的版本。【已核】 https://www.w3.org/TR/WCAG22/#reading-level
- 第七次全国人口普查（2020 年）：15 岁及以上人口平均受教育年限 9.91 年；每 10 万人中具有大学文化程度的为 15,467 人。【忆】
- CNNIC 第 47 次报告（2020 年 12 月）的网民学历结构：小学及以下 19.3%，初中 40.3%，高中、中专、技校 20.6%，大学专科 10.5%，大学本科及以上 9.3%。【忆，较新的报告是否还公布这项指标未核】
- Ant Design：「使用用户熟悉的语言」「站在用户的角度，说用户熟悉的话。」【已核】

对 PA 的含义：平均受教育年限正好约等于初中毕业，和 WCAG 的口径重合。「候补」「兑现」「履约」「叠加」「核销」这类行业词要么换成日常说法，要么第一次出现时带半句解释。

### 7.4 语音播报：听比看慢一倍，而且不能跳读

已核的事实：

- Apple，WWDC21 "Send communication and Time Sensitive notifications"："Communication and Time Sensitive notifications will be announced by default."【已核】 https://developer.apple.com/videos/play/wwdc2021/10091/ 。也就是说，PA 一旦把某条消息标成 Time Sensitive，它在用户戴着耳机时默认会被念出来。
- Apple HIG Siri 的编辑准则【已核】 https://developer.apple.com/design/human-interface-guidelines/siri
  - "Keep responses as succinct as possible. People might interact with Siri frequently, so they may hear the same response multiple times… Avoid including unnecessary words or attempts at humor, because both can become irritating over time."
  - "Make sure the voice response can stand alone and that it doesn't depend on visual elements to fill in essential information."
  - "Omit your app name from responses. The system already provides verbal and visual attribution for your app when responding to people."
  - "Be aware that Siri may also respond aloud, and others nearby might hear the response."
- Android Auto：只有 MessagingStyle 的即时通讯消息会被朗读（"what Android Auto uses to read aloud each message in a conversation"）；质量准则 MF-5 明确把天气、股票、比分这类「通知服务」排除在外。【已核】 https://developer.android.com/training/cars/communication/notification-messaging 。所以 PA 的提醒在 Android Auto 上不会被念出来。
- Apple HIG Writing 的自检方法："When in doubt, read your writing out loud."【已核】

推算与推演：

- 播报按每秒 4–4.5 个字【算】，20 个字要 4–5 秒，50 个字要 11 秒。听的人不能跳读，前面的废话全部要听完。
- 符号的读法不可控：「¥312/年」「→」「·」「【】」在不同 TTS 引擎里读法不同。【推演，未实测】
- 旁人可能听见，金额和账户信息在播报版里要更克制。

对 PA 的含义：凡是可能被播报的消息（Time Sensitive 级别），都要有一个「念出来也通」的版本：一句 20 字以内，先说是什么事，再说数字；去掉括号和符号；金额写成「每年省 312 元」而不是「¥312/年」；不玩梗。

---

## 8. 字数预算建议：前 N 个字必须说完什么

### 8.1 三级预算

计数口径：全角字符（汉字、全角标点）算 1 个字宽；半角字符（数字、英文字母、¥、%、半角标点、空格）算 0.5 个字宽。

| 预算 | 必须说完什么 | 例子 |
|---|---|---|
| **前 6 个字宽** | 结果词加数字。用户只看到这里，也知道「发生了什么、值多少」 | 机票降 ¥420 |
| **前 12 个字宽** | 一个完整命题：对象、变化、量。用户只读到这里就能分诊 | 机票降 ¥420，现价 ¥1,280 |
| **标题不超过 14 个字宽（建议），硬上限 20 个字** | 整个标题不折行、不被厂商通道拒发 | 同上 |
| **正文首句不超过 18 个字宽** | 脱离标题也能独立看懂的补充：说清是哪一件 | 周四 08:05 直飞上海。 |
| **全文不超过 40 个字（建议），硬上限 50 个字** | 约 5–7 秒读完；第二句放截止时间或「不处理会怎样」 | 周四 08:05 直飞上海。今晚 24:00 前有效 |
| **按钮：3 个时每个不超过 4 个字，2 个时不超过 6 个字** | 动词开头，写结果 | 锁定这个价 / 再等等 |
| **胶囊和岛：目标 3 个字宽，上限 4 个字宽** | 一个状态词或一个数字；容器太窄，这里可以省掉汉字与数字之间的空格 | 排队中 / 前面12人 / ¥1280 / 5min |
| **播报版：每句不超过 20 个字，最多 2 句** | 念出来约 6–9 秒 | 你盯的周四去上海的机票降了 420 元。今晚 12 点前有效。 |

### 8.2 这个 N 的依据

「前 6 个字宽」的依据：

| 依据 | 数字 | 状态 |
|---|---|---|
| Android 16 Live Update 胶囊只保证少于 7 个字符的文本完整显示 | 少于 7 个字符，最宽 96dp | 【已核】 |
| Apple 对标题的要求是「通常只有两三个词」，手表 short look 只显示标题 | a couple of words | 【已核】 |
| 最大无障碍字号下第一行只剩 5–6 个汉字 | AX5：49pt | 字号【已核】，字数【算】 |
| 微信订阅消息的 phrase 字段只有 5 个汉字 | 5 | 【忆】 |
| NN/g：扫列表时只看前 2 个词，约 11 个字符 | 约合 5–6 个汉字宽 | 【忆】 |
| 中文一次注视约 4 个字，两次注视约 6–7 个字，约半秒到一秒 | 左 1 右 3 | 【忆】 |

「前 12 个字宽」的依据：

| 依据 | 数字 | 状态 |
|---|---|---|
| iOS 系统标准档最大字号下，标题一行约 12 个字，正文一行约 14 个字 | xxxLarge：21pt | 字号【已核】，字数【算】 |
| Android 字体 1.3 倍时标题约 10–14 个字 | 14sp × 1.3 | 尺寸【已核】，字数【算】 |
| Android 官方建议标题不超过 30 个拉丁字符 | 约合 15 个汉字 | 【已核】 |
| 一次 2 秒的瞥视按每秒 7 个字算是 14 个字 | 2 秒 | 时间【忆】，速率【算】 |
| 适老化规范的 18pt 字号下一行约 16 个字 | 18pt | 【忆】+【算】 |

「标题 20 字、正文 50 字硬上限」的依据：

| 依据 | 数字 | 状态 |
|---|---|---|
| vivo 推送标题最多 20 个汉字，内容最多 50 个汉字 | 20 / 50 | 【忆】 |
| 微信订阅消息 thing 字段 20 个字符 | 20 | 【忆】，T7b 有搜索级佐证 |
| 默认字号下 iOS 和 Android 的标题一行约 14–19 个汉字 | — | 【算】 |
| 5 秒按每秒 7 个字算是 35 个字，7 秒是 50 个字 | Apple 手表指标 5 秒 | 5 秒【已核】，速率【算】 |

和其他来源的关系：

- 基础稿的「价值锚点 10 字以内、上下文 22 字以内、按钮 5 字以内」与本节同一量级。区别在于本节给了「前 6」和「前 12」两个更靠前的检查点，并且每个数都挂了依据。
- T7b 笔记建议「通知标题 10 个汉字内」。10 个汉字加上 4–6 个半角数字和符号，约等于 12–13 个字宽，口径一致。
- 基础稿的「首行前 8 个汉字」没有出处，建议用「前 6 / 前 12」替换。

这些都是**建议起点**。其中 6、12 两个数主要靠推算，应当用实机校准（5.6）和线上 A/B（标题长度对点击率和关闭通知率的影响）来修正。

### 8.3 金额上不上锁屏

T7a 笔记指出「金额锚定在首行」和锁屏隐私有张力。结合本方向核到的两条平台事实：

- iOS 预览被隐藏时，锁屏只显示 App 图标和「通知」，或者开发者为该类别设的占位文案（`hiddenPreviewsBodyPlaceholder`，可以用 `%u` 表示条数）。【已核】 https://developer.apple.com/documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder
- Android 的 private 级别通知在安全锁屏上只显示 App 名和图标，开发者可以另给一个不泄露个人信息的公开版本，官方举例是 `2 new messages`。【已核】

建议：

- 给每一类消息都设一个占位文案，例如「1 条降价提醒」「1 件事等你确认」。这是预览隐藏时唯一能露出的字。
- 「省了多少」这类金额默认可以上锁屏；账户余额、订单总额、收款方这类信息默认不上，或交给用户开关。

### 8.4 目标状态与「前 12 个字宽」的句型（研究员构造，供 Skill 起草时参考）

| 状态 | 前 12 个字宽的句型 | 例子 | 正文 |
|---|---|---|---|
| 发现机会 | {对象}降 ¥{差额}，现价 ¥{现价} | 机票降 ¥420，现价 ¥1,280 | 周四 08:05 直飞上海。今晚 24:00 前有效 |
| 待确认（要花钱或有截止） | {时间}扣 ¥{金额}：{对象} | 明早扣 ¥30：视频会员续费 | 你已 35 天没看。不处理就照常扣 |
| 执行中 | 正在{动作}，约 {时长}出结果 | 正在改签，约 2 分钟出结果 | 有结果马上告诉你，不用等着 |
| 受阻 | {动作}没成：{原因} | 改签没成：16:30 航班已满 | 已改盯 18:10 那班，有座先问你 |
| 完成 | 已{动作}，{周期}省 ¥{金额} | 已退订，每月省 ¥30 | 会员用到 12 月 3 日，之后不再扣费 |
| 复盘 | {周期}共省 ¥{金额}、{时长} | 10 月共省 ¥1,280、3.5 小时 | 最大一笔是东京酒店重订，省 ¥640 |
| 搁置或过期 | {目标}已停：{原因} | 盯价已停：出发日已过 | 想继续盯别的日期，回一句就行 |

---

## 9. 可执行规则（带中文正反例）

**规则 1：前 6 个字宽给出结果词和数字。**
依据：8.2 的第一组。
- 正：机票降 ¥420，现价 ¥1,280
- 反：【小助手温馨提示】您关注的机票价格有新变化

**规则 2：前 12 个字宽说完一个完整命题，标题不超过 14 个字宽。**
依据：8.2 的第二组。
- 正：已退订，每月省 ¥30
- 反：关于您上周设置的视频会员自动续费管理目标的最新进展

**规则 3：不用固定前缀，不重复 App 名；每条消息的开头都不一样。**
依据：绕过型扫视【忆】；Android「Excludes the app's name」和 Apple「Avoid including your app name or icon」【已核】。
- 正：三条消息分别以「机票降」「明早扣」「改签没成」开头
- 反：三条消息都以「PA 提醒：」开头

**规则 4：数字用阿拉伯数字加单位，一条消息最多 2 个数字；汉字与数字之间留半角空格（短信和微信字段可省）。**
依据：Ant Design【已核】；中文排版需求【已核】；斑点型扫视【忆】。
- 正：周四 08:05 直飞，降 ¥420
- 反：周四早上八点零五分的直飞航班比原价一千七百元便宜了四百二十元，折合约七五折

**规则 5：两个标点之间不超过 12–15 个字宽；避开交集歧义串；截止时间写到具体时刻。**
依据：一行宽度与知觉广度【算】【忆】；歧义切分研究【忆】。
- 正：请在 11 月 5 日 24:00 前确认
- 反：请在 5 日前确认改签到新航班

**规则 6：不发「去 App 里做某事」的通知；能在通知上完成的，给 2–3 个按钮，第一个放最常用的非破坏性操作，按钮写结果。**
依据：Apple HIG【已核】；Android 最多 3 个按钮【已核】。
- 正：按钮「停掉续费」「照常续」
- 反：正文「请前往 App 我的 > 订阅管理 > 自动续费 中关闭」，按钮「查看详情」

**规则 7：同一件事只发一条；没回应就更新原通知，不重发；2 分钟内不连发。**
依据：Apple HIG「even if someone hasn't responded」【已核】；Android 15 冷却、自动成组【已核】。
- 正：把原通知更新为「机票再降 ¥60，现价 ¥1,220」
- 反：一小时内连发「机票降价了」「还没看吗」「再不看就涨回去了」

**规则 8：回应窗口短于 5 分钟的事，创建目标时拿授权，事后告知；不发待确认。**
依据：通知被看到是分钟级【搜】。
- 正（创建时）：到号后直接帮你取号，可以吗
- 正（事后）：已取到 A12 号，前面 3 桌
- 反：到你了，30 秒内确认是否取号

**规则 9：执行中的短时任务用岛、胶囊或实况窗，只放一个状态词或一个数字；同一更新不再发推送。**
依据：Apple、Android 官方【已核】；鸿蒙【邻】。
- 正：胶囊「前面12人」（4 个字宽；容器太窄时省掉空格）
- 反：胶囊「您的排队进度已更新，请点击查看」

**规则 10：按大字号设计第一行；需要决定的事不能只活在横幅上。**
依据：字号表【已核】与推算【算】；Apple 无障碍准则【已核】。
- 正：标题 12 个字宽内自成一句，App 内目标卡片保留同样的待办
- 反：关键条件写在正文第三行

**规则 11：会被播报的消息另备「念得通」的版本：每句 20 字以内，先说事再说数，去符号，不玩梗。**
依据：WWDC21、Siri 准则【已核】。
- 正：你盯的周四去上海的机票降了 420 元。今晚 12 点前有效。
- 反：【降价】机票 ↓¥420（-25%）→ ¥1,280，手慢无～

**规则 12：按容器分别检查字数：vivo 20 / 50 汉字；微信 thing 20 字符；短信 70 字符含签名。**
依据：5.5【忆为主】。
- 正：同一事件生成推送版、微信字段版、短信版三份
- 反：把 40 字的推送原文直接塞进微信模板字段

**规则 13：给每类消息设锁屏占位文案；金额是否上锁屏给用户开关。**
依据：Apple、Android 官方【已核】；T7a【邻】。
- 正：预览隐藏时显示「1 条降价提醒」
- 反：预览隐藏时只显示「通知」

**规则 14：用初中毕业能懂的词；行业词第一次出现时带半句解释。**
依据：WCAG 3.1.5【已核】；人口普查与 CNNIC【忆】；Ant Design【已核】。
- 正：排到你了（候补成功）
- 反：候补订单已兑现

**规则 15：系统通知里标题是唯一的加粗行；App 内卡片一张只高亮一处。**
依据：平台能力【已核】；孤立效应【忆】。
- 正：卡片里只有「¥420」加粗
- 反：金额、日期、航班号、按钮全部加粗标色

---

## 10. 可机检规则（给 Skill 的 lint 草案）

以下规则可以写成脚本，在模型生成话术后自动检查。阈值取自第 8 节，实机校准后应更新。

| 编号 | 检查 | 级别 |
|---|---|---|
| L1 | 标题字宽（全角 1、半角 0.5）大于 14 | 警告 |
| L2 | 标题字符数大于 20 | 错误 |
| L3 | 标题前 6 个字宽内没有数字，也没有结果词（降、省、已、退、抢到、改签、延误、到期、扣、没成、已停） | 警告 |
| L4 | 标题以这些开头：【、温馨提示、好消息、您好、亲、尊敬的、提醒您、小助手、产品名 | 错误 |
| L5 | 同一批次里两条以上标题的前 4 个字相同 | 警告 |
| L6 | 标题加正文里的数字串超过 3 个 | 警告 |
| L7 | 出现「\d+ ?日前」「\d+ ?日内」「日前」 | 错误，改成「X 月 X 日 HH:MM 前」 |
| L8 | 任意两个标点之间的字宽大于 15 | 警告 |
| L9 | 正文首句字宽大于 18，或首句以「它」「该」「上述」等指代开头 | 警告 |
| L10 | 正文字符数大于 50（走 vivo 通道时为错误，其他为警告） | 错误或警告 |
| L11 | 出现歧义串：改签到、取消订单保险、已退款项、本周日程、到期日程、降价了解 | 警告 |
| L12 | 出现感叹词：哎呀、糟糕、哦豁、天呐；或非祝贺类消息里出现感叹号 | 警告 |
| L13 | 按钮：3 个时任一超过 4 个字；2 个时任一超过 6 个字；不以动词开头；唯一按钮是「查看详情」「去看看」 | 警告 |
| L14 | 正文含「请前往」「请打开 App」「在…中设置」这类指路句 | 警告 |
| L15 | 同一目标 2 分钟内的第二条消息 | 合并 |
| L16 | 打扰级别为 Time Sensitive，但事件时间距现在超过 60 分钟 | 错误 |
| L17 | Time Sensitive 消息缺播报版；播报版含【】、→、·、/、括号，或单句超过 20 字 | 错误 |
| L18 | 微信字段：thing 超过 20 字符；phrase 超过 5 个汉字 | 错误 |
| L19 | 短信：签名加正文超过 70 字符；前 20 个字里没有结果和数字 | 警告 |
| L20 | 胶囊或岛文本字宽大于 4（大于 3 时警告） | 错误 |

---

## 11. 真实文案样本（逐字，全部来自本次打开的官方页面）

说明：受网络限制，没能采集国内产品的真实推送样本。国内样本请看 T7b 笔记。

| 来源 | 原文 | 说明 |
|---|---|---|
| Apple HIG Notifications | "Friend request," "New comment," "Reminder," or "Shipment" | 预览隐藏时的占位正文示例 |
| Apple HIG Writing | "Unable to load content" | 推荐写法；对照的反例是 "We're having trouble loading this content." |
| Apple HIG Writing | "Choose a password with at least 8 characters" | 推荐写法；反例是 "That password is too short" |
| Apple HIG Writing（Apple Watch 截图说明） | "you set a personal record for your longest daily Move streak, 35 days!" | 祝贺类消息里的感叹号 |
| Apple HIG Siri | "Which soup?" | 推荐；反例是 "Which one?" |
| Apple HIG Siri | "Sorry, we're out of chicken noodle soup" | 推荐；反例是 "Sorry, we can't complete your order." |
| Apple WWDC15 讲稿 | "Thirty-three minutes ago, which meeting? Today. 4:30 to 5:30. Not this." | 设计师口述的日历通知例子，语境是删掉对用户没用的细节；完整上下文没有取到，引用前请回看讲稿 |
| Apple WWDC15 讲稿 | "No one in their right mind wants to read a thousand word article on their wrist." | 设计师口述 |
| Apple WWDC21 示例代码 | title: "Passive"；body: "I’m a passive notification, so I won’t interrupt you." | 被动级别示例 |
| Android 通知设计规范 | "Haven't seen you in a while!" | 官方列为不该发的通知 |
| Android 展开通知文档示例 | 标题 "5 New mails from Frank"，正文 "Check them out" | InboxStyle 示例 |
| Android Live Update 文档 | "5min"；"Thinking..."；"Rerouting..." | 胶囊文本与占位文本示例 |
| Android 时效通知文档示例代码 | 标题 "HIGH PRIORITY"，正文 "Check this dog puppy video NOW!" | 官方示例代码里的占位文案，全大写加感叹号，恰好是话术上的反面教材 |
| Ant Design 文案规范 | 我们将会审核你的申诉 | 可以用「我们」的语境 |
| Ant Design 文案规范 | 欢迎回到社区！ | 可以用感叹号的语境 |
| 中文文案排版指北 | 今天出去买菜花了 5000 元。 | 中文与数字之间加空格的正例 |

---

## 12. 对基础稿的核查与更正（本方向范围内）

1. **把 4±1 组块归给 Miller 是错的。** Miller 1956 是「7±2」；「约 4 个组块」出自 Cowan 2001（Behavioral and Brain Sciences 24(1)，https://doi.org/10.1017/S0140525X01003922 ）。【忆，教科书级，置信度高】表里的「Miller's Law (4±1 Chunks)」应改为「工作记忆容量约 4 个组块（Cowan 2001）」。基础稿引的 LogRocket 页面本次未能打开，不清楚错在哪一环。
2. **「注意力窗口通常只有 1.5 至 3 秒」没有出处，应降级为推演。** 可以换成有出处的两档：2 秒（单次瞥视上限）和 5 秒（Apple 的手表交互内部指标，已核）。
3. **「28 秒压到 3.5 秒」「节省 87.5%」「消除约 85% 交互摩擦」都是模型推演，不是测量。** 按第 4.2 节的速率粗算：62 个字约 9 秒读完，31 个字约 4.4 秒，光靠删字能省的是一半左右。其余的节省要靠「用按钮代替打字」，这部分没有数据。图表应标注「示意」。
4. **79% / 16% / +124% 数字本身没错，但语境被换了。** 原研究是 1997 年的桌面网页。「可将该场景可用性提升 124%」里的「该场景」应删去，并写明年代和对象。
5. **F 型不是「通知的最差退化态」。** NN/g 研究的是网页；它自己的说法是 F 型是没有强视觉线索时的默认模式【搜】。对一两行的短消息，起作用的是首词效应和绕过型。
6. **「金额锚定在首行前 8 个汉字」的 8 没有依据。** 建议改为「前 6 个字宽给结果和数字，前 12 个字宽说完命题」，并加上锁屏隐私例外（8.3）。
7. **「严格锁死在 40 个汉字以内」要按容器拆。** Android 官方的 30 / 40 是拉丁字符，约合 15 / 20 个汉字【已核】；Apple 不给字数【已核】；vivo 是 20 / 50 个汉字【忆】；微信字段是 20 字符【忆】；胶囊只有 3–6 个字。
8. **Ant Design 关于「你 / 您」的原文**是：「直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。」以及「注：不要在同一个句式中混用「你」和「我」，交互中指代混乱会让用户相当纠结。」【已核】
   - 基础稿说的「下对上客服疏离感」是加工过的说法，原文只有「太过疏远」。
   - 「绝不自称本助手 / 小 X」不在这份规范里。
   - 规范其实鼓励用「你」和「我」对话，只是不要在同一句式里混用。「隐去主语」是基础稿自己的延伸。
   - 这份规范面向企业级中后台产品，照搬到面向大众的 PA 上，尤其是老年用户和金融场景，是否仍然成立没有证据。
9. **「遵循 Ant Design 按钮规范，用精准动词加结果名词」在文案规范里找不到。** 该规范关于操作名称只有一句「操作的名称和目标页面标题的名称保持一致」。更贴切的出处是 Apple HIG："use a short, title-case term or phrase that clearly describes the result of the action"，以及 HIG Writing 的 "it's almost always best to use a verb"【已核】。
10. **「全网史低」**：Ant Design 同一份规范里有「表述不应过于极端」一节，反例说明是「「绝不」过于绝对，让用户感到不适」【已核】。《广告法》第九条第（三）项禁止「国家级」「最高级」「最佳」等用语【忆】。「全网」「史低」既绝对又难以举证，建议换成可验证的范围，例如「近 30 天最低（我盯的 5 个平台）」。
11. **Medium 文章（Yuki K.，标注 2026 年 10 月）**：medium.com 不在可访问范围，检索额度也已用完，**没能确认这篇文章是否存在、原意如何**。在核实之前，「检查、打断、盯梢三大认知税」只能当作一个框架性观点，不能当实证引用。
12. **SR Research 页面**同样未能打开。它给的「左 1 字、右 2–3 字」与 Inhoff 和 Liu 1998 一致【忆】，可以保留，但建议把出处换成原始论文。
13. **「Layer-cake 是除逐字精读外最有效的扫视模式」**：NN/g 原文未能打开，没有核到这句话的原始措辞。

---

## 13. 与常识或基础稿相反的发现

1. **Apple 官方对标题的要求是「两三个词」，比基础稿的「10 个字」还短；而 Apple 从不给字数上限。** 平台的态度是「你写短，截断交给系统」。
2. **Android 官方明说「追踪包裹」不够格用 Live Update**，提醒类、日历事件也不够格。PA 的「盯价」「监控中」进不了岛。
3. **Apple 明确反对「没回应就再发」。** 很多产品的做法正好相反。
4. **Apple 明确反对在通知里指路**（「去 App 里做某事」）。常见的「点击查看」「去完成」都属于这一类。
5. **通知是「知晓」不是「指令」。** 用户看一眼不点开，在实地研究里是常态【已核摘要】。用点击率衡量 PA 消息的好坏会误判，更合适的指标是「看完后是否还需要再打开 App 确认」。
6. **「手机上读东西难两倍」没有被复现。** 2016 年 NN/g 自己重做，总体没有实质差别【忆】。
7. **F 型扫视对短通知基本不适用**，该防的是绕过型：固定前缀会让用户学会跳过开头。
8. **给中文加词间空格并不让熟练读者读得更快**【忆】。盘古之白有规范支持，但没有找到「加快扫读」的实证。
9. **语音场景里，Apple 直接写了「不要尝试幽默」**，理由是重复听会烦【已核】。这和基础稿「高频重复提醒严禁固定俏皮话」方向一致，而且给了官方出处。
10. **Time Sensitive 消息默认会被念出来**【已核】。把一条消息标成高优先级，等于同时选择了「可能在地铁上被耳机读出来」。
11. **锁屏上可能一个字都露不出来。** 预览隐藏时只有图标和「通知」两个字【已核】。「锁屏可见字数」的下限是 0，占位文案是唯一能控制的东西。
12. **Android 官方示例代码自己用了 "HIGH PRIORITY" 和 "Check this dog puppy video NOW!"。** 官方文档里的占位文案不等于官方推荐的话术，引用样本时要分清。

---

## 14. 缺口与后续补查

需要放行后补核的域名：www.nngroup.com、doi.org 与 dl.acm.org、pmc.ncbi.nlm.nih.gov、psycnet.apa.org、developers.weixin.qq.com、dev.vivo.com.cn、dev.mi.com、open.oppomobile.com、developer.huawei.com、developer.honor.com、www.miit.gov.cn、www.gov.cn、www.cnnic.cn、www.stats.gov.cn、www.sr-research.com、medium.com、blog.logrocket.com、www.interruptions.net、ic.unicamp.br。

具体缺口：

1. **所有【忆】标记的学术数字都要回原文核对**，特别是：Brysbaert 2019 里中文的阅读速率；Sun 等 1985 的 580 字/分钟；Pizza 等 2016 的 6.7 秒；Pielot 等 2018 的细节；Suchan 与 Colucci 1989 的 17%–23%；老年中文读者的知觉广度。
2. **各表面的可见中文字数没有实测。** 第 5 节的每行字数全部是推算。国内安卓各家系统皮肤的折叠态行数、字号、锁屏样式完全没有数据。需要按 5.6 的方法做一轮实机测量。
3. **国内厂商的岛和实况（鸿蒙实况窗、小米超级岛、vivo 原子岛、OPPO 流体云、荣耀胶囊）的文本规范**没有核到一手文档。T7b 记了鸿蒙的两组口径，互相不一致。
4. **厂商推送的长度限制（vivo 20 / 50、小米 50 / 128、OPPO 50 / 200、魅族 32 / 100）和微信订阅消息的字段限制**都是凭记忆写的，文档可能已更新。
5. **没有找到针对中文手机通知的眼动研究。** 中文知觉广度、歧义切分的研究都是在实验室里读整句做的，推到通知场景是外推。
6. **中文句长与可读性的阈值**没有可靠出处。「一个标点句 12–15 字」是设计推演。
7. **数字在汉字中的显著性、汉字与数字之间加空格的效果**，都没有找到直接的中文实验。
8. **iOS 和 Android 的系统级 AI 摘要**会不会改写或重排 PA 的消息、对「首句」有什么影响，没有检索。T2 笔记有记忆级线索。
9. **语音播报的实际行为**没有实测：播报时念不念 App 名、念不念标题、各 TTS 引擎怎么读「¥」「/」「【】」。
10. **车载场景的字数规范**：记得日本汽车工业会（JAMA）的车载显示指南把行驶中一次显示的文字限制在约 30 个字（30 还是 31 没有把握），这是我知道的唯一一个针对汉字假名的「瞥视安全字数」，值得核对。
11. **行业数据**：记得 Localytics 2016 年前后有「10 个词以内的推送点击率最高」的统计，未核，没有写入结论。
12. **2025–2026 年的新研究和新规范没有检索到**，因为检索额度耗尽。
13. **基础稿的 Medium 文章和 LogRocket 文章**未能核实。

---

## 15. 来源清单与核对状态

### 本次打开并核对的页面【已核】

| 来源 | 地址 |
|---|---|
| Apple HIG：Notifications | https://developer.apple.com/design/human-interface-guidelines/notifications |
| Apple HIG：Managing notifications | https://developer.apple.com/design/human-interface-guidelines/managing-notifications |
| Apple HIG：Live Activities | https://developer.apple.com/design/human-interface-guidelines/live-activities |
| Apple HIG：Designing for watchOS | https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos |
| Apple HIG：Writing | https://developer.apple.com/design/human-interface-guidelines/writing |
| Apple HIG：Typography | https://developer.apple.com/design/human-interface-guidelines/typography |
| Apple HIG：Accessibility | https://developer.apple.com/design/human-interface-guidelines/accessibility |
| Apple HIG：Siri | https://developer.apple.com/design/human-interface-guidelines/siri |
| Apple HIG：CarPlay | https://developer.apple.com/design/human-interface-guidelines/carplay |
| Apple 开发文档：通知标题 | https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/title |
| Apple 开发文档：通知副标题 | https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent/subtitle |
| Apple 开发文档：生成远程通知 | https://developer.apple.com/documentation/usernotifications/generating-a-remote-notification |
| Apple 开发文档：隐藏预览占位文案 | https://developer.apple.com/documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder |
| Apple 开发文档：实时活动 | https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities |
| Apple App Store 审核指南（4.5.4、4.5.3、2.5.18） | https://developer.apple.com/app-store/review/guidelines/ |
| WWDC15：Designing for Apple Watch | https://developer.apple.com/videos/play/wwdc2015/802/ |
| WWDC21：Send communication and Time Sensitive notifications | https://developer.apple.com/videos/play/wwdc2021/10091/ |
| WWDC22：Writing for interfaces | https://developer.apple.com/videos/play/wwdc2022/10037/ |
| WWDC23：Design dynamic Live Activities | https://developer.apple.com/videos/play/wwdc2023/10194/ |
| Android：通知设计规范 | https://developer.android.com/design/ui/mobile/guides/home-screen/notifications |
| Android：通知概览 | https://developer.android.com/develop/ui/compose/notifications |
| Android：展开式通知 | https://developer.android.com/develop/ui/compose/notifications/expanded |
| Android：Live Update | https://developer.android.com/develop/ui/compose/notifications/live-update |
| Android：时效通知 | https://developer.android.com/develop/ui/views/notifications/time-sensitive |
| Android 14 功能（200% 字体缩放） | https://developer.android.com/about/versions/14/features |
| Wear OS 设计原则 | https://developer.android.com/design/ui/wear/guides/foundations/design-principles |
| Wear OS 通知 | https://developer.android.com/design/ui/wear/guides/surfaces/notifications |
| Android 车载应用质量准则 | https://developer.android.com/docs/quality-guidelines/car-app-quality |
| Android Auto 消息通知 | https://developer.android.com/training/cars/communication/notification-messaging |
| AOSP 通知尺寸 | https://raw.githubusercontent.com/aosp-mirror/platform_frameworks_base/master/core/res/res/values/dimens.xml |
| AOSP 大文本通知模板 | https://raw.githubusercontent.com/aosp-mirror/platform_frameworks_base/master/core/res/res/layout/notification_template_material_big_text.xml |
| Ant Design 文案规范（源文件） | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/copywriting.zh-CN.md |
| W3C 中文排版需求（源文件） | https://raw.githubusercontent.com/w3c/clreq/gh-pages/index.html |
| WCAG 1.4.8、3.1.5 及理解文档（源文件） | https://raw.githubusercontent.com/w3c/wcag/main/guidelines/sc/20/visual-presentation.html |
| 中文文案排版指北 | https://raw.githubusercontent.com/sparanoid/chinese-copywriting-guidelines/master/README.zh-Hans.md |
| Microsoft Writing Style Guide：十条建议 | https://raw.githubusercontent.com/MicrosoftDocs/microsoft-style-guide/main/styleguide/top-10-tips-style-voice.md |
| Iqbal 与 Horvitz：Notifications and Awareness（摘要） | https://www.microsoft.com/en-us/research/publication/notifications-and-awareness-a-field-study-of-alert-usage-and-preferences/ |
| Twilio 短信分段计算器说明（UCS-2 每段 67 字符） | https://raw.githubusercontent.com/TwilioDevEd/message-segment-calculator/main/README.md |
| MixPush 说明（国内厂商推送配额，年代较早） | https://raw.githubusercontent.com/taoweiji/MixPush/master/README.md |

MixPush 说明里的原话（第三方开源项目，写作年代不详，数字可能已过时，现行口径看 T2 笔记）：「用户单应用每日运营消息接收条数`上限5条`，系统消息无限制。」「目前vivo手机接收的消息为7:00-23:00，服务器允许推送时间为7:00-22:00，系统消息不受此时间限制。」

### 只经搜索摘要核对【搜】

| 来源 | 地址 |
|---|---|
| Pielot、Church、de Oliveira 2014 | https://doi.org/10.1145/2628363.2628364 |
| NN/g：F 型扫视复查（2017） | https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ |

### 未能核对、凭既有知识写入【忆】

NN/g 的其余文章；Shirazi 2014；Pielot 2018；Ferreira 2014；Banovic 2014；Oulasvirta 2005；Pizza 2016；Inhoff 与 Liu 1998；Bai 等 2008；Ma、Li、Rayner 2014；Li 等 2014；Liversedge 等 2016；Sun 等 1985；IReST 2012；Brysbaert 2019；Wang 等 2018；Ren 与 Yang 2010；Suchan 与 Colucci 1989；Cowan 2001；NHTSA 2013；微信订阅消息字段限制；vivo、小米、OPPO、魅族、华为推送限制；适老化规范；人口普查与 CNNIC 数据；GB/T 15835-2011。

---

## 附：结构化摘要里的 findings 与本笔记章节对照

| ID | 主题 | 状态 | 章节 |
|---|---|---|---|
| T1-01 | Android 标题 30 字符、正文 40 字符，标题恒一行 | 已核 | 5.1、5.3 |
| T1-02 | AOSP 模板尺寸与每行汉字数推算 | 已核 + 算 | 5.3 |
| T1-03 | Apple 标题「两三个词」，手表 short look 只显示标题 | 已核 | 2.3、5.1 |
| T1-04 | Apple 不给字数上限；预览隐藏时的锁屏 | 已核 | 5.1、8.3 |
| T1-05 | 动态字体字号表与每行汉字数推算 | 已核 + 算 | 5.2、7.1 |
| T1-06 | Apple 手表交互指标约 5 秒 | 已核 | 3.2 |
| T1-07 | 灵动岛与实时活动的尺寸和时长 | 已核 + 算 | 5.1、5.4 |
| T1-08 | Android 16 Live Update 胶囊 | 已核 | 5.1、5.4 |
| T1-09 | 不重复发、不在通知里指路 | 已核 | 3.3 |
| T1-10 | 最重要的信息放最前（四家规范） | 已核 | 2.3 |
| T1-11 | Ant Design：数字、标点、「您」、感叹号 | 已核 | 4.5、6.3、12 |
| T1-12 | 中西文间距 | 已核 | 4.6 |
| T1-13 | WCAG：CJK 行长与阅读水平 | 已核 | 4.7、7.3 |
| T1-14 | 语音播报 | 已核 | 7.4 |
| T1-15 | 通知是知晓不是指令（Iqbal 与 Horvitz） | 已核摘要 | 3.3 |
| T1-16 | 日均 63.5 条、几分钟内查看（Pielot 2014） | 搜 | 3.1 |
| T1-17 | F 型在手机上仍存在 | 搜 | 2.2 |
| T1-18 | 79% 扫读、+124% | 忆 | 2.1 |
| T1-19 | 首 2 词、绕过型 | 忆 | 2.2、2.3 |
| T1-20 | 中文知觉广度 | 忆 | 4.1 |
| T1-21 | 中文阅读速度与每秒字数估计 | 忆 + 算 | 4.2 |
| T1-22 | 分词与歧义切分 | 忆 | 4.3 |
| T1-23 | 微使用与注意爆发 | 忆 | 3.2 |
| T1-24 | 人和事件类通知最被看重 | 忆 | 3.1 |
| T1-25 | 手机阅读理解：2011 对 2016 | 忆 | 2.5 |
| T1-26 | BLUF 实证 | 忆 | 2.4 |
| T1-27 | 微信订阅消息字段上限 | 忆 | 5.1、5.5 |
| T1-28 | 国内厂商推送长度上限 | 忆 | 5.1、5.5 |
| T1-29 | 短信分段 | 已核（67）+ 忆（70） | 5.1、5.5 |
| T1-30 | 适老化、教育水平、老年读者 | 忆 | 7.1–7.3 |
