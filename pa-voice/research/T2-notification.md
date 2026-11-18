# T2 通知与打扰的科学：时机、频率、疲劳、分级与平台规则

调研日期：2026-11-18
核心问题：PA 的主动提醒什么时候发、发多少、怎么分级，才不会从「省时间」变成「偷时间」？

---

## 0. 阅读须知：核对状态与本次调研的硬限制

每条结论后面都标了核对状态，请下游按状态使用：

| 标记 | 含义 | 可否直接引用数字 |
|---|---|---|
| 【已核】 | 本次会话用 WebFetch 打开了原页面，引语逐字核对 | 可以 |
| 【搜】 | 只经 WebSearch 的结果摘要核对，原页面在本会话网络里打不开 | 可以引用结论；精确数字建议上线前再核一次原文 |
| 【忆】 | 联网检索额度耗尽后，凭研究员既有知识补充，未在本次会话核对 | 只当线索；引用前必须复核 |

本次调研的两个硬限制（如实说明）：

1. WebFetch 只能访问 `developer.apple.com`、`developer.android.com`、`raw.githubusercontent.com`、`github.com`。以下域名在本会话网络白名单之外，全部解析失败：news.gallup.com、research.duolingo.com、static1.squarespace.com、arxiv.org、developer.huawei.com、www.cac.gov.cn、help.openai.com、en.wikipedia.org、api.semanticscholar.org、pmc.ncbi.nlm.nih.gov、developers.weixin.qq.com、*.github.io；web.archive.org 被工具拒绝。所以学术论文原文、国内厂商原文、法规原文、OpenAI/Google 帮助页都没能打开。
2. WebSearch 在完成 29 次检索后，因整个工作流共享的额度（200 次/轮）耗尽而不可用。主动式 AI 产品（ChatGPT Pulse/Tasks、Gemini 定时操作）、告警疲劳、CHI 2025 论文、Android/iOS 的 AI 摘要等主题没来得及检索，只能标【忆】。

结果：平台规范部分（Apple、Android、OpenHarmony）核对得最扎实，共 24 次成功抓取、20 个关键页面逐字核对；学术部分以搜索摘要为主；主动式 AI 产品部分以既有知识为主。

---

## 1. 一页结论

1. 「打断后要 23 分钟才能恢复」是误引。Gloria Mark 的原始数字（23 分 15 秒）是被打断的工作在当天被重新拾起前的平均间隔，中间还插了 2 件以上别的事；她 2008 年的实验反而发现被打断的人做得更快，代价是压力、挫败和时间压力更高。打断的成本主要是情绪和任务搁置，不是一个固定的分钟数。
2. 通知不点也有成本。Stothart 2015：收到通知但不看不回，注意力任务的表现下降幅度与真的接电话、发短信相当。所以「发了不点也没损失」不成立，可发可不发的消息只能走无声层。
3. 批处理有效但有条件。Fitz 2019（n=237，2 周）：每天 3 次定时批量送达让人更专注、更有掌控感、压力更低；每小时一批几乎无效；完全不给通知反而更焦虑、更怕错过。答案不是静音，是可预期。
4. 平台已经把「礼貌」变成了「准入条件」。iOS 规定 Time Sensitive 只能用于正在发生或 1 小时内将发生的事；华为、vivo、OPPO 把资讯营销类推送限制在每天 2 条（新闻类 5 条）并静默展示；Android 15 对短时间连发的通知自动降声降振最长 2 分钟；Android 13 起新装应用通知默认关闭。
5. 推送权限是稀缺资产。Airship 2025 年数据：opt-in 中位数 iOS 48.85%、Android 53.3%，直接打开率中位数约 3%。约一半用户从没给过权限，所以推送不能当主通道，App 内的目标卡片才是底座。
6. PA 的天然优势是「触发式」。Batch 2025 基准：由用户行为触发的情境式推送打开率 14.4%，群发式 4.19%，约 3.4 倍。PA 的每条消息本来都由用户自己设的目标触发，一旦混入「我觉得你可能想…」式的群发建议，优势就没了。
7. 模型不能独自决定「该不该开口」。ProactiveBench 上 GPT-4o 的误报率 51.85%，专门微调后仍约 50%。发不发要由用户设的触发条件、硬阈值和频控先把关，模型只负责写，以及在灰区选择「只入账不打扰」。
8. 实况窗/实时活动只给「执行中」的过程用。Apple、Android、华为三家口径一致：进行中、用户发起、有始有终、禁广告；Apple 上限 8 小时，Android 明确说追踪包裹都不够格。多日的「盯降价」只能留在通知和卡片里。

---

## 2. 打断的代价（学术）

### 2.1 Gloria Mark 的「23 分钟」到底是什么 【搜】

- 来源 A：Gloria Mark 2006 年接受 Gallup Business Journal 访谈 "Too Many Interruptions at Work?"
  https://news.gallup.com/businessjournal/23146/too-many-interruptions-work.aspx
  搜索摘要转述的原话：被打断的工作有 81.9% 在当天恢复，平均 23 分 15 秒后恢复（"it was resumed, on average, in 23 minutes and 15 seconds"）；回到原任务前平均约有 2 个插入任务（"about two intervening tasks"）；样本是先观察半天、再跟随 36 名经理、金融分析师、软件开发者、工程师和项目负责人各 3 天。
- 来源 B：Mark, González & Harris, "No Task Left Behind? Examining the Nature of Fragmented Work", CHI 2005, pp. 321–330。
  https://dl.acm.org/doi/10.1145/1054972.1055017 （作者版 PDF：https://ics.uci.edu/~gmark/CHI2005.pdf）
  摘要：工作高度碎片化，57% 的「工作领域」（working sphere）被打断；多数被打断的工作当天恢复，但恢复前有 2 个以上插入活动。
- 待核：有二手来源称 CHI 2005 论文正文的恢复间隔是 25 分 26 秒（标准差 54 分 48 秒），与访谈的 23 分 15 秒不同（访谈时样本已扩大）。本次未能打开原文核对。

准确表述应为：被打断的那件事，平均要过二十多分钟才被重新拾起，这段时间包含了处理打断本身和中间插进来的其他工作。它不是「重新集中注意力需要 23 分钟」，也不是每次打断都损失 23 分钟。

对 PA 的含义：通知的真实风险是把用户拖进一条新的任务链。所以每条需要动作的通知都应能在通知内闭环（动作按钮直接完成），而不是「点开 App 看看」。

### 2.2 被打断的人更快，但更累 【搜】

- Mark, Gudith & Klocke, "The Cost of Interrupted Work: More Speed and Stress", CHI 2008。
  https://dl.acm.org/doi/10.1145/1357054.1357072 （PDF：https://www.ics.uci.edu/~gmark/chi08-mark.pdf）
- 结论（搜索摘要确认）：被打断的参与者完成任务更快、质量相近，但报告了更高的压力、挫败感、费力感和时间压力。作者的解释是人们会用「更快、写得更少」来补偿预期会损失的时间。论文还发现「开放性」和「对个人结构的需求」两项人格指标能预测打断的代价。
- 边界：实验室里的邮件任务，短时，学生样本。

对 PA 的含义：「省时间」不能只用秒数衡量。用户处在高压时段（赶路、会议中、深夜）时，同样一条通知的情绪成本更高。此时要么不发，要么只发带确定结论的。

### 2.3 提醒引发的连锁切换 【搜 + 忆】

- Iqbal & Horvitz, "Disruption and Recovery of Computing Tasks: Field Study, Analysis, and Directions", CHI 2007, pp. 677–686。
  https://www.erichorvitz.com/CHI_2007_Iqbal_Horvitz.pdf
- 【搜】方法：用日志工具记录用户的应用窗口切换以及邮件、即时消息提醒。后续论文（Karlson 等）转述：被邮件或 IM 通知打断后，恢复原活动最长可达 15 分钟。
- 【忆】原文中的数字：参与者处理由提醒引发的切换平均花近 10 分钟，之后再过 10–15 分钟才回到被中断的任务；约 27% 的任务中断超过 2 小时才恢复；样本为 27 名微软员工、2 周。这些数字本次没有核到原文，引用前需复核。

对 PA 的含义：一条通知的时间成本 = 看一眼 + 概率性的绕路。通知要自带结论和按钮，别把人引进 App 再迷路。

### 2.4 不看也分心 【搜】

- Stothart, Mitchum & Yehnert, "The Attentional Cost of Receiving a Cell Phone Notification", Journal of Experimental Psychology: Human Perception and Performance, 41(4), 893–897, 2015。
  https://doi.org/10.1037/xhp0000100
  新闻稿：https://www.eurekalert.org/news-releases/595284 ；APS 报道：https://www.psychologicalscience.org/news/motr/youre-distracted-even-when-you-ignore-that-text.html
- 设计：参与者被随机分到来电、短信、无通知三组，事先不知情，在做持续注意任务时本人手机收到电话或短信。
- 结论：只是收到通知（没有查看、没有回复）就显著增加错误；效应量与以往研究中「真的在用手机通话或发短信」相当；来电比短信更糟。作者认为通知会引发与任务无关的念头（走神）。
- 边界：美国本科生；通知是真人的电话和短信，不是 App 推送；实验室任务。

对 PA 的含义：响一声、振一下本身就在扣注意力。可发可不发的消息一律走不响不振的层级（iOS passive、Android LOW/MIN、鸿蒙内容资讯类、App 内卡片）。

### 2.5 任务中途打断 vs 边界处打断 【忆】

- Bailey & Konstan, "On the need for attention-aware systems: Measuring effects of interruption on task performance, error rate, and affective state", Computers in Human Behavior 22(4), 685–708, 2006。https://doi.org/10.1016/j.chb.2005.12.009
  摘要数字：次要任务在主任务执行中途插入时，比在任务边界处呈现多花 3%–27% 的时间、错误数翻倍、烦躁感高 31%–106%、焦虑增幅翻倍。
- Adamczyk & Bailey, "If not now, when? The effects of interruption at different moments within task execution", CHI 2004。https://doi.org/10.1145/985692.985727
  在预测的「最佳时刻」（粗粒度任务断点）打断，烦躁、挫败、时间压力都更低。
- Kushlev, Proulx & Dunn, "Silence Your Phones: Smartphone Notifications Increase Inattention and Hyperactivity Symptoms", CHI 2016。https://doi.org/10.1145/2858036.2858359
  221 名学生，一周开通知、一周关通知（被试内）：开通知的一周注意力不集中和多动症状更高，并进一步预测更低的生产力和幸福感。
- 以上三条均来自既有知识，未在本次会话核对。

---

## 3. 什么时候发：时机与断点

### 3.1 一段手机交互刚结束时最好发 【搜 + 忆】

- Fischer, Greenhalgh & Benford, "Investigating Episodes of Mobile Phone Activity as Indicators of Opportune Moments to Deliver Notifications", MobileHCI 2011, pp. 181–190。
  https://interruptions.net/literature/Fischer-MobileHCI11.pdf （DOI 10.1145/2037373.2037402）
- 【搜】假设：通话结束、读完短信这类「手机交互片段的结尾」对应自然断点，是送达通知的好时机。
- 【忆】结果：在片段结束时送达的通知被处理得显著快于随机时刻；但次要任务本身的负荷和情境合适度同样显著影响延迟和完成率；主观体验更复杂。样本约 20 人、2 周、英国。
- 相关：Fischer 等 MobileHCI 2010 "Effects of content and time of delivery on receptivity to mobile interruptions" 的结论是内容比时机更重要（兴趣、娱乐性、相关性、可行动性决定接受度）。【忆】

### 3.2 断点送达降低认知负荷 【搜】

- Okoshi 等，Attelia 系列（PerCom 2015 / UbiComp 2015）。https://julian-ramos.github.io/papers/Okoshi2015.pdf
  断点（breakpoint）时机送达的通知，认知负荷比随机时机低 46%（受控研究）；30 人、16 天的野外研究低 33%。认知负荷为 NASA-TLX 自评。
- Okoshi, Tsubouchi, Taji, Ichikawa & Tokuda, "Attention and Engagement-Awareness in the Wild: A Large-Scale Study with Adaptive Notifications", IEEE PerCom 2017, pp. 100–110（最佳论文提名）。
  https://dblp.org/rec/conf/percom/OkoshiTTIT17.html ；https://research.lycorp.co.jp/en/publications/239
  Yahoo! JAPAN Android App，2016 年 9 月，3 周，687,840 名目标用户（Gunosy 读书会幻灯片转述）；后续工作称系统已正式上线，覆盖 1000 万以上 Android 用户。
- 待核：PerCom 2017 摘要里「延后到可打扰时刻送达使响应时间显著缩短」的具体降幅（研究员记忆中为 49.7%）本次没有核到，请勿引用具体数。

### 3.3 「可打扰」不等于「愿意投入」 【搜】

- Pielot, Cardoso, Katevas, Serrà, Matic & Oliver, "Beyond Interruptibility: Predicting Opportune Moments to Engage Mobile Phone Users", Proc. ACM IMWUT 1(3), 2017。https://dl.acm.org/doi/10.1145/3130956
- 337 名手机用户、4 周现场研究；仅用手机采集的数据预测用户是否会接触「主动推荐的内容」，精确率比基线高 66.6%。
- 注意：66.6% 是模型精确率的提升，不是用户参与度的提升。作者幻灯片里另有「转化率提升 507%」的说法，定义未核实，不要引用。

### 3.4 内容有用才被原谅 【搜】

- Mehrotra, Pejovic, Vermeulen, Hendley & Musolesi, "My Phone and Me: Understanding People's Receptivity to Mobile Notifications", CHI 2016, pp. 1021–1032。
  https://discovery.ucl.ac.uk/1502364/1/CHI16.pdf （DOI 10.1145/2858036.2858566）
- 20 名用户、10,372 条真实通知、474 份经验取样问卷、11 份人格测试。
- 结论：即使内容重要有用的通知也会造成打扰；但有打扰感的通知只有在内容有用时才被接受（后续综述的概括）。通知优先级显著影响响应时间：高优先级平均 11.94 秒，低优先级 25.91 秒（响应时间 = 看到时间 + 决定时间）。呈现方式、提醒类型、发送者与接收者的关系、当前任务的类型/完成度/复杂度都影响响应时间和感知打扰。
- 边界：样本只有 20 人；人格特质结论各来源转述不一致（外向性+神经质 vs 尽责性+神经质），未核原文。

### 3.5 小结：时机的三条可用信号

| 信号 | 依据 | 实现难度 |
|---|---|---|
| 用户刚结束一段交互（解锁后、通话结束、付款完成、导航结束、会议结束） | Fischer 2011、Okoshi、Bailey & Konstan | 低到中 |
| 用户自己约定的时段（早上汇总、晚上 9 点） | Fitz 2019、Apple Scheduled Summary | 低 |
| 模型预测的「愿意投入」时刻 | Pielot 2017 | 高，且需要大量行为数据 |

时机只能锦上添花：内容不相关，挑哪个时刻发都没用（Fischer 2010、Mehrotra 2016）。

---

## 4. 发多少：通知量、批处理、疲劳

### 4.1 用户每天已经在处理多少通知

| 研究 | 样本 | 数字 | 状态 |
|---|---|---|---|
| Pielot, Church & de Oliveira, MobileHCI 2014 "An In-Situ Study of Mobile Phone Notifications" https://ic.unicamp.br/~oliveira/doc/MHCI2014_An-in-situ-study-of-mobile-phone-notifications.pdf | 15 人、1 周、西欧信息工作者 | 日均 63.5 条，主要来自即时通讯和邮件；通常几分钟内被查看，静音与否差别不大 | 【搜】 |
| Pielot, Vradi & Park, MobileHCI 2018 "Dismissed!" https://www.interruptions.net/literature/Pielot-MobileHCI18.pdf | 278 人（按西班牙人口年龄性别配额招募）、794,525 条通知 | NN/g 转述：2016 年人均每天约 56 条 | 【搜】 |
| Common Sense Media 2023 "Constant Companion" https://www.commonsensemedia.org/research/constant-companion-a-week-in-the-life-of-a-young-persons-smartphone-use | 约 200 名 11–17 岁美国青少年 | 中位数每天 237 条；约四分之一在上学时段，5% 在夜间 | 【忆】 |
| Sahami Shirazi 等，CHI 2014 "Large-Scale Assessment of Mobile Notifications" https://doi.org/10.1145/2556288.2557189 | 4 万多用户、约 2 亿条通知 | 用户最看重关于「人」和「事件」的通知（即时通讯、日历） | 【忆】 |

对 PA 的含义：PA 的每条推送都在和几十到几百条人际消息抢位置。非人际、非时效的消息默认不该出声。

### 4.2 批处理：每天 3 次有效，每小时无效，全关更糟 【搜】

- Fitz, Kushlev, Jagannathan, Lewis, Paliwal & Ariely, "Batching smartphone notifications can improve well-being", Computers in Human Behavior 101, 84–94, 2019。https://doi.org/10.1016/j.chb.2019.07.016
- 设计：随机现场实验，n=237，2 周；四组：照常、每小时一批、每天三批（9:00、15:00、21:00）、完全不给通知。参与者居住在印度（二手报道）。
- 结果：
  - 每天三批组：比对照组更专注、更高效、心情更好、对手机更有掌控感，压力更低、手机打扰更少；但更担心错过。
  - 每小时一批组：与对照组相比几乎没变化。
  - 完全不给通知组：没得到上述好处，焦虑和 FoMO 更高。
- 边界：2 周；印度 Android 用户；部分作者与由此产生的批处理 App（Daywise）有财务关联；摘要中一处写「lower productivity」，与「felt more productive」矛盾，疑为笔误，引用生产力结论前需核全文。

### 4.3 关掉通知 24 小时 【搜】

- Pielot & Rello, "Productive, Anxious, Lonely: 24 Hours Without Push Notifications", MobileHCI 2017。https://arxiv.org/abs/1612.02314 （DOI 10.1145/3098279.3098526）
- 30 名志愿者，交叉设计：一天照常、一天在所有设备上关闭通知提醒。原计划做 30 天，但找不到愿意关这么久的人。
- 结果：没有通知的那天更不分心、更高效，但更焦虑，对「我感到与社交圈保持联结」的认同显著更低。73.3% 的人表示打算关掉部分通知；二手转述称两年后回访时，说过会用勿扰的人里 59.1% 确实在用。

### 4.4 反例：邮件批处理没有降低压力 【忆】

- Mark, Iqbal, Czerwinski, Johns, Sano & Lutchyn, "Email Duration, Batching and Self-interruption: Patterns of Email Use on Productivity and Stress", CHI 2016。https://dl.acm.org/doi/10.1145/2858036.2858262
- 40 名信息工作者、12 个工作日、佩戴心率监测。摘要要点：每天花在邮件上的时间越长，自评生产力越低、测得的压力越高；主要靠自己主动去查邮件的人，比靠通知的人在长时间处理邮件时自评生产力更高；「尽管流行说法如此，我们没有发现批处理邮件能降低压力的证据」。
- 另：Kushlev & Dunn 2015 "Checking email less frequently reduces stress"（Computers in Human Behavior 43）让 124 人一周内每天只查 3 次邮件，日常压力更低。两项研究结论并不一致。https://doi.org/10.1016/j.chb.2014.11.005 【忆】

对 PA 的含义：汇总不是万能药。摘要必须短到一眼扫完；同时要让用户随时能主动「拉」到最新状态（目标卡片、小组件），而不是只能等推送。

### 4.5 告警疲劳的类比 【忆】

- van der Sijs, Aarts, Vulto & Berg, "Overriding of drug safety alerts in computerized physician order entry", JAMIA 13(2), 138–147, 2006。https://doi.org/10.1197/jamia.M1809
  系统综述结论：临床医生对用药安全警报的 override 率在 49%–96% 之间。
- 线索（未核）：Ancker 等 2017（BMC Medical Informatics and Decision Making 17:36，https://doi.org/10.1186/s12911-017-0430-8）发现医生收到的提醒越多、重复提醒越多，接受率越低；Sendelbach & Funk 2013 综述称临床报警中 72%–99% 为假警报。
- 对 PA 的含义：高等级提醒必须稀缺，且几乎每次都值得。给 L3（时效级）设采纳率红线，低于红线就自动收紧触发条件。

---

## 5. 行业基准（厂商数据，与学术证据分开看）

以下全部是推送服务商发布的基准报告或其委托的调查，样本是各家的客户，且有营销动机。

### 5.1 Opt-in 与打开率 【搜】

| 来源 | 数字 | 备注 |
|---|---|---|
| Airship "Mobile App Push Notification Benchmarks for 2026"（2026-03 发布，反映 2025 年数据）https://www.airship.com/mobile-app-push-notification-benchmarks-for-2026/ | 全行业 opt-in 中位数：iOS 48.85%、Android 53.3%；零售类中位数 iPhone 43.5%、Android 49.95%，头部 10% 分别为 63.93% 和 69.85% | 经 Mobiloud 转述 https://www.mobiloud.com/blog/push-notification-statistics/ |
| Airship 历年 | Android opt-in 中位数从 71.3%（2023）降到 59.5%（2024），iOS 稳定在约 49%；2024 年直接打开率中位数 Android 3.4%、iOS 3.1%；iOS 中位直接打开率同比下降 13.71% | 下降与 Android 13 改为运行时授权同步 |
| Batch "Benchmark notifications push & CRM mobile" 2025 https://batch.com/blog/case-studies/benchmark-notifications-push-crm-mobile | Android 平均 opt-in 一年内从 85% 降到 67%，iOS 从 58% 降到 56%，总体 61%；情境式（由用户行为自动触发）推送平均打开率 14.4%，群发式 4.19%；群发式里银行/金融最高：Android 8.8%、iOS 7.2%；样本约 8000 亿条消息 | 法国厂商，客户以欧洲品牌为主；报告需留资下载，数字来自二手转述 |
| Business of Apps（旧数据）https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/ | 总体 opt-in 60%，Android 81%、iOS 51%；周二反应率最高 8.4% | 年代较早，已被上面的新数据取代 |

两个读法：
- 约一半用户从没给过通知权限；给了权限的人里，约 97% 的推送不会被直接点开。推送不能当主通道。
- 「直接打开率」低估了价值：很多通知的任务就是「看一眼就够」（Pielot 2014 也发现通知多在几分钟内被查看）。PA 的告知类消息应以「是否被看到、是否减少了用户主动打开 App 查进度的次数」来衡量，而不是点击率。

### 5.2 频率与关闭/卸载 【搜】，证据弱

| 来源 | 数字 | 性质 |
|---|---|---|
| Localytics（Qualtrics 执行，2017-11，1,000 名美国智能手机用户）https://www.marketingprofs.com/charts/2018/33486/how-many-mobile-push-notifications-are-too-many | 每周 1 条推送时，10% 的人表示会关闭通知 | 自述意向调查 |
| Helplama（2025-04 更新）https://helplama.com/?p=9035 | 每周 1 条时 13% 表示会关闭推送；92% 表示收到每周 1 条后仍会继续用 App | 自述意向调查，方法不透明 |
| Leanplum 调查（1,000 名美国用户，Fast Company 报道）https://www.fastcompany.com/90399157/people-really-really-hate-push-notifications | 「无关通知太多」是删除 App 的首要原因 | 自述 |
| Braze "Don't Push Me" https://www.braze.com/resources/articles/opt-out-of-push-notifications-why-users-do-it | 定性文章 | 未读正文 |

没找到出处的流传数字：「每周 1 条导致 10% 关通知、6% 卸载；每周 3–6 条导致 40% 关闭」「每天超过 5 条卸载率 3 倍」。本次检索没有找到可靠原始来源，不要引用。

### 5.3 待核线索 【忆】

- Meta 分析团队 2022 年文章 "Notifications: why less is more"（Medium @AnalyticsAtMeta）：Facebook 的长期实验显示，减少通知量短期内使用量下降，但约一年后用户满意度和使用量反而高于对照组。URL 未核。
- LinkedIn 2015 年宣布减少邮件：每 10 封砍掉 4 封，用户投诉减半。URL 未核。
- Pinterest（KDD 2018）与 LinkedIn（KDD 2018 等）公开过「按用户设通知量预算」的系统论文。未核。

---

## 6. 平台规则

### 6.1 iOS：四个打扰级别 【已核】

来源：Apple HIG "Managing notifications" https://developer.apple.com/design/human-interface-guidelines/managing-notifications （通过该页的 JSON 数据端点核对）

四个级别的原文定义：

| 级别 | 原文 | 覆盖定时摘要 | 穿透专注模式 | 无视静音开关 |
|---|---|---|---|---|
| Passive | "Information people can view at their leisure, like a restaurant recommendation." | 否 | 否 | 否 |
| Active（默认） | "Information people might appreciate knowing about when it arrives, like a score update on their favorite sports team." | 否 | 否 | 否 |
| Time Sensitive | "Information that directly impacts the person and requires their immediate attention, like an account security issue or a package delivery." | 是 | 是 | 否 |
| Critical | "Urgent information about health and safety that directly impacts the person and demands their immediate attention. Critical notifications are extremely rare and typically come from governmental and public agencies or apps that help people manage their health or home." | 是 | 是 | 是 |

关键原文：

- "Build trust by accurately representing the urgency of each notification. ... You don't want people to feel that a notification uses a high level of urgency to interrupt them with low-priority information."
- "Use the Time Sensitive interruption level only for notifications that are relevant in the moment. ... make sure the notification is about an event that's happening now or will happen within an hour. The first time a Time Sensitive notification arrives from your app, the system describes how such a notification works and gives people a way to turn it off if they don't agree that the information requires their immediate attention. Going forward, the system periodically gives people additional opportunities to evaluate how your Time Sensitive notification is working for them."
- "Never use the Time Sensitive interruption level to send a marketing notification."
- "Don't use notifications to send marketing or promotional content unless people explicitly agree to receive such information."
- "Make sure people can manage their notification settings within your app."

API 侧的定义（UNNotificationInterruptionLevel，iOS 15+）【已核】 https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel
- passive："The system adds the notification to the notification list without lighting up the screen or playing a sound."
- active："The system presents the notification immediately, lights up the screen, and can play a sound."
- timeSensitive："The system presents the notification immediately, lights up the screen, can play a sound, and breaks through system notification controls."
- critical："The system presents the notification immediately, lights up the screen, and bypasses the mute switch to play a sound."

Critical 级的门槛【已核】 https://developer.apple.com/documentation/usernotifications/unauthorizationoptions/criticalalert
- "Critical alerts ignore the mute switch and Do Not Disturb; the system plays a critical alert's sound regardless of the device's mute or Do Not Disturb settings."
- "Critical alerts require a special entitlement issued by Apple."
- 所以 PA 基本拿不到 Critical 级，最高只能用到 Time Sensitive。

摘要排序（relevanceScore）【已核】 https://developer.apple.com/documentation/usernotifications/unnotificationcontent/relevancescore
- "The system uses the relevanceScore, a value between 0 and 1, to sort the notifications from your app. The highest score gets featured in the notification summary."

### 6.2 iOS：通知内容与行为规范 【已核】

来源：Apple HIG "Notifications" https://developer.apple.com/design/human-interface-guidelines/notifications

- "Provide concise, informative notifications. People turn on notifications to get quick updates, so you want to provide valuable information succinctly."
- "Avoid sending multiple notifications for the same thing, even if someone hasn't responded. People attend to notifications at their convenience. If you send multiple notifications for the same thing, you fill up Notification Center, and people may turn off all notifications from your app."
- "Avoid sending a notification that tells people to perform specific tasks within your app. If it makes sense to offer simple tasks that people can perform without opening your app, you can provide notification actions. Otherwise, avoid telling people what to do because it's hard for people to remember such instructions after they dismiss the notification."
- "Use an alert — not a notification — to display an error message."
- "Handle notifications gracefully when your app is in the foreground. ... present the information in a way that's discoverable but not distracting or invasive, such as incrementing a badge or subtly inserting new data into the current view."
- "Avoid including sensitive, personal, or confidential information in a notification."
- 动作："A notification can present a customizable detail view that contains up to four buttons."；"Prefer actions that let people perform common, time-saving tasks that eliminate the need to open your app."；"Avoid providing an action that merely opens your app."；"Prefer nondestructive actions."
- 预览不可用时的通用文案示例："Friend request," "New comment," "Reminder," or "Shipment."
- 角标："Use a badge only to show people how many unread notifications they have."

审核条款（App Store Review Guidelines）【已核】 https://developer.apple.com/app-store/review/guidelines/
- 4.5.4："Push Notifications must not be required for the app to function, and should not be used to send sensitive personal or confidential information. Push Notifications should not be used for promotions or direct marketing purposes unless customers have explicitly opted in to receive them via consent language displayed in your app's UI, and you provide a method in your app for a user to opt out from receiving such messages. Abuse of these services may result in revocation of your privileges."
- 4.5.3："Do not use Apple Services to spam, phish, or send unsolicited messages to customers, including Game Center, Push Notifications, Live Activities, etc."
- 5.1.2(i)："Your app may not require users to enable system functionalities (such as push notifications, location services, tracking) in order to access functionality, content, use the app, or receive monetary or other compensation..."

### 6.3 iOS：权限请求与「静默试发」 【已核】

来源：Apple "Asking permission to use notifications" https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications

- "Make the request in a context that helps people understand why your app needs authorization. In a task-tracking app that sends reminder notifications, you might make the request after the person schedules a first task. Sending the request in context provides a better experience than automatically requesting authorization on first launch, because people can see the purpose your apps notifications serve."
- 临时授权（provisional）："The system delivers provisional notifications quietly — they don't interrupt the person with a sound or banner, or appear on the lock screen. Instead, they only appear in the notification center's history. These notifications also include buttons that prompt the person to keep or turn off the notification."
- 用户点 Keep 后："the system prompts them to choose between two options: Deliver Immediately or Deliver in Scheduled Summary. Deliver Immediately delivers future notifications quietly."

这段话几乎就是为 PA 写的：任务类应用在用户排好第一个任务后再请求通知权限。

### 6.4 iOS：推送投递层 【已核】

来源：Apple "Sending notification requests to APNs" https://developer.apple.com/documentation/usernotifications/sending-notification-requests-to-apns

- apns-priority："Specify 10 to send the notification immediately. Specify 5 to send the notification based on power considerations on the user's device. Specify 1 to prioritize the device's power considerations over all other factors for delivery, and prevent awakening the device."
- alert 类型："If the notification requires immediate action from the user, set notification priority to 10; otherwise use 5."
- apns-collapse-id："An identifier you use to merge multiple notifications into a single notification for the user. ... When sending the same notification more than once, use the same value in this header to merge the requests."
- "Notifications with apns-priority 5 and apns-priority 1 might get grouped and delivered in bursts to a person's device. Your notifications may also get throttled, saved in storage, and in some cases, not delivered."

### 6.5 iOS：Live Activities（实时活动） 【已核】

来源：Apple HIG "Live Activities" https://developer.apple.com/design/human-interface-guidelines/live-activities ；ActivityKit "Displaying live data with Live Activities" https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities

- "Offer Live Activities for tasks and events that have a defined beginning and end. Live Activities work best for tracking short to medium duration activities that don't exceed eight hours."
- "Don't use a Live Activity to display ads or promotions."
- "Alert people only for essential updates that require their attention. ... avoid alerting people too often or with updates that aren't crucial, and don't use push notifications alongside Live Activities for the same updates."
- "Start Live Activities at appropriate times, and make it easy for people to turn them off in your app. ... When people can't easily control the appearance of Live Activities from your app, they may choose to turn off Live Activities in Settings altogether."
- "Always end a Live Activity immediately when the task or event ends, and consider setting a custom dismissal time. ... On the Lock Screen ... it remains for up to four hours. ... In most cases, 15 to 30 minutes is adequate."
- ActivityKit："A Live Activity can be active for up to eight hours unless its app or a person ends it before this limit. ... the Live Activity remains on the Lock Screen until a person removes it or for up to four additional hours before the system removes it ... As a result, a Live Activity remains on the Lock Screen for a maximum of 12 hours."
- "If you allow people to schedule a Live Activity, you must pass an AlertConfiguration to make sure they know when your app starts a Live Activity."

### 6.6 iOS：系统级 AI 对通知的再加工 【忆】

- iOS 15 起有「定时摘要」（Scheduled Summary），非时效通知可按用户设的时间批量送达。
- iOS 18.1 起 Apple Intelligence 提供通知摘要；2024 年 12 月 BBC 投诉摘要把新闻推送概括出错误事实，iOS 18.3 暂停了新闻与娱乐类 App 的摘要，并把摘要改用斜体加图标标识；iOS 18.4 起提供「优先通知」（Priority Notifications），由端侧模型挑出可能需要立即关注的通知置顶。
- 未核对。Apple 更新说明页（About iOS 18 Updates）地址记忆为 https://support.apple.com/en-us/121161 ，需复核。
- 对 PA 的含义：系统可能替用户摘要、排序我们的通知。首句必须自成完整事实，不靠后半句补充否定或条件。

### 6.7 Android：重要性、渠道与「不该发通知」清单 【已核】

来源：Android 设计指南 "Notifications" https://developer.android.com/design/ui/mobile/guides/home-screen/notifications ；"Create and manage notification channels" https://developer.android.com/develop/ui/views/notifications/channels

重要性表（设计指南原文）：

| Importance | Behavior | Usage | Examples |
|---|---|---|---|
| HIGH | Makes a sound and appears on screen | Time-critical information that the user must know, or act on, immediately | Text messages, alarms, phone calls |
| DEFAULT | Makes a sound | Information that should be seen at the user's earliest convenience, but not interrupt what they're doing | Traffic alerts, task reminders |
| LOW | No sound | Notification channels that don't meet the requirements of other importance levels | New content the user has subscribed to, social network invitations |
| MIN | No sound or visual interruption | Non-essential information that can wait or isn't specifically relevant to the user | Nearby places of interest, weather, promotional content |

- "Importance should be chosen with consideration for the user's time and attention. When an unimportant notification is disguised as urgent, it can produce unnecessary alarm."
- 渠道："After you create a notification channel, you can't change the notification behaviors. The user has complete control at that point."；"Create a channel for each type of notification you need to send."

"When not to use a notification" 原文清单：

> Don't use notifications for any of the following use cases:
> - For cross-promotion or advertisement of another product (this is strictly prohibited by the Play Store)
> - If the user has never opened your app
> - As the primary method of communication with users
> - To encourage the user to return to an app, but provide no direct value (for example, "Haven't seen you in a while!")
> - For requests to rate your app
> - For operations that don't require user involvement, such as syncing information
> - To announce error states the app may recover from without user interaction
> - For holiday or birthday messages

文案长度与动作：
- 标题："Doesn't exceed 30 characters"、"Contains the most important information"、"Excludes the app's name"。
- 正文："Avoids exceeding the 40-character limit"、"Avoids repeating what's in the content title"。
- "When expanded, a notification can provide up to three of any of the following kinds of actions"；"Don't: Include text actions that duplicate the behavior of tapping on the notification body."
- 进度类模板："Non-cancelable activities don't warrant notifications."
- 过期通知："If an earlier notification is stale, that is, no longer relevant, dismiss it so the user doesn't see it."
- 多条通知："Child notifications must be understandable if they appear solo."

Core app quality 清单（Notification_Quality）【已核】 https://developer.android.com/docs/quality-guidelines/core-app-quality
- "Don't use notifications for cross-promotion or advertising of another product, as this is strictly prohibited by the Play Store."
- "Notification channels are defined according to best practices, rather than serving all notifications from one channel."
- "Stack multiple notifications into a single notification group when possible."
- "Set timeouts for notifications where appropriate."
- "Notifications are persistent only if related to ongoing events, such as music playback or a phone call."

注意：30/40 字符是按拉丁字符给的。汉字宽度约为其两倍，中文实际可见字数需要按机型另测（见缺口）。

### 6.8 Android：系统自己的「反骚扰」机制 【已核】

来源：https://developer.android.com/develop/ui/compose/notifications ；https://developer.android.com/develop/ui/views/notifications/notification-permission ；https://developer.android.com/develop/ui/views/notifications/build-notification ；https://developer.android.com/topic/performance/power/power-details

- Android 13：通知改为运行时权限。"If a user installs your app on a device that runs Android 13 or higher, your app's notifications are off by default."
- 请求时机："Before you ask users to grant any permissions, let them familiarize themselves with your app." 好时机的例子："The user taps an 'alert bell' button."；"The user chooses to follow someone's social media account."；"The user submits an order for food delivery."
- "Use the permission responsibly ... Users can see the number of daily notifications that your app sends, and they can revoke the permission at any time."
- Android 15 冷却："Android 15 introduces a notification cooldown feature that aims to improve the experience of notifications that arrive in quick succession. This feature reduces the appearance, sound volume and vibration intensity for repetitive notifications for up to two minutes." "Critical notifications that require audio and haptics to get attention are not subject to cooldown."
- Android 16："Notifications are now auto-grouped on the app's behalf."；另："If the same app sends four or more notifications and doesn't specify a grouping, the system automatically groups them together."
- 每秒一响："Beginning with Android 8.1 (API level 27), apps can't make a notification sound more than once per second."
- 原地更新："To avoid flooding your users with multiple or redundant notifications when you have additional updates, update an existing notification rather than issuing a new one"；"You can optionally call setOnlyAlertOnce() so your notification interrupts the user—with sound, vibration, or visual clues—only the first time the notification appears and not for later updates."；"Android applies a rate limit when updating a notification. If you post updates to a notification too frequently—many in less than one second—the system might drop updates."
- 全屏提醒："Notifications containing full-screen intents are substantially intrusive, so it's important to only use this type of notification for the most urgent, time-sensitive messages."
- 高优先级消息降级（Android 13）："System now downgrades the high priority messages if it detects an app consistently sending high-priority messages that don't result in a notification."（这条说的是不产生可见通知的高优 FCM 数据消息，不是「通知被忽略」。）
- 勿扰模式三档：Total silence、Alarms only、Priority only；Android 8.0 起用户可按渠道放行。
- 悬浮通知可被上滑「暂缓」："no further notifications from that event are allowed to pulse for one minute."

### 6.9 Android 16：Live Updates 与进度型通知 【已核】

来源：https://developer.android.com/develop/ui/views/notifications/live-update ；https://developer.android.com/develop/ui/compose/notifications/progress-centric

- "Use Live Updates for activities that are ongoing, user-initiated, and time-sensitive."
- "Appropriate uses: Active navigation, ongoing phone calls, active rideshare tracking, and active food delivery tracking."
- "Inappropriate uses: Ads, promotions, chat messages, alerts, upcoming calendar events, and quick access to app features."
- "Most Live Updates should represent activities that are explicitly triggered by the user ... Don't show ambient information, such as that about the user's environment, interests, or upcoming events, in a Live Update. Don't allow activities triggered by other parties to generate Live Updates."
- "showing a boarding pass notification is appropriate many hours before a user's flight, but the notification should become a Live Update only when the user has a pressing need, such as when they have arrived at the airport or venue or once boarding has begun. In contrast, a Live Update isn't appropriate for tracking a package as the user doesn't need to constantly monitor this."
- "If the user explicitly indicates that they want to begin monitoring a background event such as a sports game, you can begin posting Live Updates for that event. However, you should also include an Unpin action in the associated notification."
- "Posting unwanted Live Updates might cause users to revoke an app's posting permission. ... Don't repost Live Updates that the user dismissed."
- 状态胶囊：最大宽度 96dp；少于 7 个字符时显示全文。
- 等待状态："When an ETA is calculating or not yet available, don't show an empty state. Provide active placeholder text such as 'Thinking...' or 'Rerouting...'"
- 进度型通知（ProgressStyle）："help users seamlessly track user-initiated start-to-end journeys ... Key use cases include rideshare, delivery, and navigation."

### 6.10 鸿蒙 / OpenHarmony：通知渠道类型 【已核】

来源：OpenHarmony 文档仓库 https://raw.githubusercontent.com/openharmony/docs/master/zh-cn/application-dev/notification/notification-slot.md ；notification-overview.md

| SlotType | 分类 | 通知中心 | 横幅 | 锁屏 | 铃声/振动 | 状态栏图标 | 自动亮屏 |
|---|---|---|---|---|---|---|---|
| SOCIAL_COMMUNICATION | 社交通信 | Y | Y | Y | Y | Y | Y |
| SERVICE_INFORMATION | 服务提醒 | Y | Y | Y | Y | Y | Y |
| CONTENT_INFORMATION | 内容资讯 | Y | N | N | N | N | N |
| CUSTOMER_SERVICE | 客服消息 | Y | N | N | Y | Y | N |
| OTHER_TYPES | 其他 | Y | N | N | N | N | N |

API 参考（js-apis-notificationManager.md）里的 SlotType 枚举另有两点值得注意【已核，说明文字为概括】：
- LIVE_VIEW = 4（API 11 起）：实况窗。第三方应用不能直接创建此类型通知，需由系统代理创建后，应用再用相同 ID 更新内容。也就是说实况窗不是应用想开就能开的。
- CUSTOMER_SERVICE = 5（API 11 起）：客服消息，用于用户与商家之间的消息，需由用户主动发起。
来源：https://raw.githubusercontent.com/openharmony/docs/master/zh-cn/application-dev/reference/apis-notification-kit/js-apis-notificationManager.md

约束原文：
- 「单个应用已发布的通知在通知中心等系统入口的留存数量有限（当前规格最多24条）。」
- 「单个应用发布新通知的频次累计不能超过每秒10条，更新通知的频次累计不能超过每秒20条。」

边界：这是 OpenHarmony 开源文档；HarmonyOS 商用版的推送（Push Kit）分类和审核以华为开发者文档为准。

### 6.11 鸿蒙实况窗 【搜】

来源：华为开发者设计指南「实况窗」 https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-live-view-0000001955186861 ；阿里云 EMAS「华为实况窗推送指南」 https://help.aliyun.com/zh/document_detail/2983768.html ；华为消费者支持页 https://consumer.huawei.com/cn/support/content/zh-cn16019387/

- 设计指南建议避免将实况窗用于营销、广告等场景；适用于正在进行或即时发生的进程，事件需要持续一段时间，有明确的开始和结束；内容需保持动态更新（如登机口变更、司机取消订单）。
- 场景类型（阿里云文档转述）：航班、排队、取餐、共享租赁等；华为官网列出即时配送（外卖、生鲜、买药）、航班出行、打车、赛事比分等已适配的应用。
- 通过推送更新的频控（阿里云文档）：单个活动每 5 分钟最多刷新 10 次、每小时最多 60 次，超出部分丢弃。
- 未核：第三方博客称单个实况窗生命周期最长 8 小时，没有在官方页面找到原文。

### 6.12 国内安卓厂商推送：消息分类与日限额 【搜】

| 厂商 | 分类 | 限额 | 来源 |
|---|---|---|---|
| 华为 | 服务与通讯 / 资讯营销 | 自 2023-01-05 起：资讯营销类按应用类型设每日上限，持《互联网新闻信息服务许可证》的新闻类 5 条/日，其他 2 条/日（未分类应用默认 2 条/日·设备）；服务与通讯类不限；测试消息每应用每天 500 条不计入。自 2023-09-15 起本地通知也纳入灰度管控，云端和本地资讯营销消息共用额度 | 华为「推送数量管理细则」https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-restriction-description-0000001361648361 ；阿里云 https://help.aliyun.com/zh/document_detail/2539603.html |
| vivo | 系统消息 / 运营消息 | 系统消息（邮件、用户设置的提醒、物流、订单、待办待阅读、财务、功能提醒、即时消息 8 类）不限；运营消息（广告、推荐、推广、活动等）单用户单应用每日上限：新闻类 5 条、其他类 2 条 | 腾讯云 https://cloud.tencent.com/document/product/548/43794 ；阿里云 https://help.aliyun.com/zh/document_detail/616230.html |
| OPPO | 私信 / 公信 | 私信（针对单个用户的私人消息）不限；公信总量 = 累计用户数 × 2（累计用户数 < 5 万时为 10 万条）；阿里云文档另提到新闻类 5 条、其他类 2 条的单用户口径，上下文不完整 | 同上 |
| 小米 | 私信 / 公信 | 私信不限量但需申请并使用消息分类；公信有单应用单设备单日限额，与 MIUI 上安装且开启通知的设备数挂钩，各文档说法不一（「1 条」「2–3 倍」「约 5–8 条」「2/5 条」） | 阿里云 https://help.aliyun.com/document_detail/2860774.html ；腾讯云 https://cloud.tencent.com/document/product/548/44531 |
| 荣耀 | 未检索 | 未检索 | — |

【忆】补充：华为把 category 细分为 IM、VOIP、SUBSCRIPTION（订阅）、TRAVEL（出行）、HEALTH、WORK（工作事项提醒）、ACCOUNT（账号动态）、EXPRESS（订单与物流）、FINANCE（财务）、DEVICE_REMINDER、MAIL 等归入服务与通讯，MARKETING 等归入资讯营销；资讯营销类默认静默展示，仅在下拉通知栏出现；未申请「消息自分类权益」的应用，消息默认按资讯营销处理。此段未在本次会话核对。

对 PA 的含义：这是本方向对中文 PA 最重要的一条硬约束。
- PA 的消息只有能归入「用户订阅的提醒、订单物流、出行、账务、工作事项」才有资格响铃和不限量。
- 「我发现了一个你可能感兴趣的…」「试试这个新功能」「好久没来了」都属于资讯营销/运营消息：每天最多 2 条，而且是静默的。
- 所以话术规范必须在源头给每条消息打类型标签，并且两类消息走不同渠道、不同配额。

### 6.13 微信：订阅消息 【搜】

官方文档地址（未能打开）：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html
开发者社区转述：https://cloud.tencent.com/developer/article/1550260 ；https://juejin.cn/post/7457759321369182247

- 一次性订阅：用户每授权一次，开发者只能下发一条消息。
- 长期订阅：授权一次可多次下发，但目前仅向政务民生、医疗、交通、金融、教育等线下公共服务开放。
- 授权弹窗只能在用户点击行为或支付回调后调起（wx.requestSubscribeMessage）。
- 未核：一次性订阅的有效期（各文章有 24 小时、7 天等说法）；长期订阅开放范围是否已变化。
- 【忆】线索：微信公众平台 2023 年公告调整服务号模板消息，不再展示首尾自定义内容、自定义颜色和 emoji，以遏制借服务通知做营销。未核。

对 PA 的含义：在微信生态里，每条主动消息都要用户预先「买单」。提醒点必须在创建目标时就设计成明确的选项，例如「降到 ¥2,000 时叫我一次」。

### 6.14 法规 【搜 + 忆】

《互联网弹窗信息推送服务管理规定》【搜】
- 国家互联网信息办公室、工业和信息化部、国家市场监督管理总局联合发布，2022-09-30 起施行。
- 政府网站转载：http://www.hunan.gov.cn/zqt/zcsd/202209/t20220913_28839216.html ；征求意见稿：https://www.cac.gov.cn/2022-03/02/c_1647826956995841.htm
- 搜索摘要确认的要点：不得推送违法和不良信息；未取得互联网新闻信息服务许可的不得弹窗推送新闻信息；弹窗推送广告须显著标明「广告」和关闭标志，确保弹窗广告一键关闭；不得设置诱导用户沉迷、过度消费的算法模型，不得利用算法实施恶意屏蔽信息、过度推荐，不得针对未成年人用户画像并推送可能影响其身心健康的信息。
- 【忆】第五条第（六）项大意：以服务协议等明确告知用户弹窗信息推送服务的具体形式、内容频次、取消渠道等，充分考虑用户体验，科学规划推送频次，不得对普通用户和会员用户进行不合理的差别推送，不得以任何形式干扰或者影响用户关闭弹窗。搜索到的解读文章提到了「科学规划推送频次」「不得以任何形式干扰用户关闭弹窗」，但条文位置未核到官方原文。
- 定义上，「通过操作系统、应用软件、网站等，以弹出消息窗口形式向互联网用户提供的信息推送服务」都在范围内，App 推送通知适用。【忆】

其他相关条文 【忆】，均为法律原文但本次未联网核对：
- 《个人信息保护法》第二十四条第二款：「通过自动化决策方式向个人进行信息推送、商业营销，应当同时提供不针对其个人特征的选项，或者向个人提供便捷的拒绝方式。」
- 《广告法》第四十三条：未经当事人同意或请求，不得以电子信息方式向其发送广告；以电子信息方式发送广告的，应当明示发送者的真实身份和联系方式，并向接收者提供拒绝继续接收的方式。第四十四条：利用互联网发布、发送广告，不得影响用户正常使用网络；以弹出等形式发布的广告，应当显著标明关闭标志，确保一键关闭。
- 《广告法》第九条第（三）项禁止使用「国家级」「最高级」「最佳」等用语；市场监管总局 2023 年发布《广告绝对化用语执法指南》。与基础稿「全网史低」相关，见第 12 节。

对 PA 的含义：
- 「省钱」话术如果一味催下单，有落入「诱导过度消费」的风险。PA 的立场应是「帮你判断值不值」，包括明确说「不值得买」。
- 每类主动消息都要有清晰的关闭和降频入口，并在服务协议里写明形式、频次、取消渠道。
- PA 帮商家带货的消息属于广告，要标「广告」并可一键关闭，不能混在「目标进展」里。

---

## 7. 主动式 AI 助手的打扰控制

### 7.1 模型判断「该不该开口」的准确率 【已核】

来源：Lu 等，"Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance"（arXiv 2410.12361）；官方仓库 README https://github.com/thunlp/ProactiveAgent

数据集：6,790 个事件，136 个实例（编程 2,275、写作 2,354、日常生活 2,161）。

ProactiveBench 测试集结果（README 原表）：

| 模型 | Recall | Precision | Accuracy | False-Alarm | F1 |
|---|---|---|---|---|---|
| GPT-4o-mini | 100.00% | 35.28% | 36.12% | 64.73% | 52.15% |
| GPT-4o | 98.11% | 48.15% | 49.78% | 51.85% | 64.60% |
| Claude-3.5-Sonnet | 97.89% | 45.37% | 49.78% | 54.63% | 62.00% |
| LLaMA-3.1-8B | 98.86% | 38.16% | 39.06% | 61.84% | 55.06% |
| LLaMA-3.1-8B-Proactive（微调） | 99.06% | 49.76% | 52.86% | 50.24% | 66.25% |
| Qwen2-7B | 98.02% | 44.00% | 43.61% | 56.00% | 60.74% |
| Qwen2-7B-Proactive（微调） | 100.00% | 49.78% | 50.66% | 50.22% | 66.47% |

奖励模型与人工标注的一致性：准确率 91.67%，F1 0.918。

读法：所有模型的召回都接近 100%，但精确率只有 35%–50%。也就是说模型几乎从不漏掉该帮的时候，但有一半以上的「主动开口」是多余的。模型的默认倾向是话多。这是 2024 年的模型和模拟事件流，新模型可能更好，但倾向值得警惕。

对 PA 的含义：发不发不能交给模型自由裁量。顺序应是：用户设定的触发条件 → 硬阈值与频控 → 模型写文案；在灰区，模型的选项里必须有「只入账、不打扰」，并且这是默认项。

### 7.2 经典框架：按期望效用决定做、问、还是不动 【忆】

- Horvitz, "Principles of Mixed-Initiative User Interfaces", CHI 1999。https://www.erichorvitz.com/chi99horvitz.pdf （DOI 10.1145/302979.303030）
  12 条原则中与本题最相关的：考虑对用户目标的不确定性；考虑用户注意力的状态，权衡延后行动的成本与收益；把猜错行动和时机的代价降到最低（minimizing the cost of poor guesses about action and timing）；不确定时缩小服务的范围；用对话化解关键不确定；允许高效地直接调用和终止。核心做法是用期望效用设两条阈值：把握低于下阈值不动，介于两者之间先问，高于上阈值直接做。
- Amershi 等，"Guidelines for Human-AI Interaction", CHI 2019。https://doi.org/10.1145/3290605.3300233
  18 条指南中相关的：G3 按情境选择行动或打断的时机；G4 展示与情境相关的信息；G8 支持高效忽略；G9 支持高效纠正；G10 不确定时收缩服务范围；G11 说明系统为什么这么做；G13 从用户行为中学习；G14 谨慎更新和适应；G17 提供全局控制；G18 把变化告知用户。

### 7.3 2025 年的 HCI 实证 【忆】，需复核

- Chen, Zhu, Zhao, Mozannar, Sontag & Talwalkar, "Need Help? Designing Proactive AI Assistants for Programming", CHI 2025（arXiv 2410.04596）。https://arxiv.org/abs/2410.04596
  61 名参与者的随机实验：主动式聊天助手相对非主动基线，完成的任务数多 12%–18%；但持续、高频提出建议的版本用户偏好更低。
- Pu, Lazaro, Arawjo, Xiao, Grossman & Chen, "Assistance or Disruption? Exploring and Evaluating the Design and Trade-offs of Proactive AI Programming Support", CHI 2025（arXiv 2502.18658）。
  主动支持比纯提问式更高效，但会打断工作流；给 AI 加上「在场指示」和上下文管理能减少打断感、提升用户的知情感。
- 这两条都来自既有知识，数字和设计细节没有核对。编程场景外推到生活类 PA 要谨慎。

### 7.4 产品案例：把主动性做成「有限」的 【忆】，需复核

ChatGPT Pulse（OpenAI，2025-09-25 发布，Pro 用户移动端预览）
- 公告：https://openai.com/index/introducing-chatgpt-pulse/
- 机制：夜间根据对话、记忆、用户反馈和已连接的应用（如日历）异步做研究，第二天早上给出一组可扫读的卡片；每条更新当天有效，除非存为对话或追问；用户可用 curate 告诉它想看什么，并点赞或点踩。
- 设计立场：公告称目标是帮你推进事情，让你回到生活中去。TechCrunch 报道称 Pulse 看完几条后会显示 "Great, that's it for today."，并称这是有意区别于以互动量为目标的信息流。

ChatGPT Tasks（2025-01 测试版）与 Gemini scheduled actions（2025-06）
- ChatGPT Tasks 帮助页：https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt （地址凭记忆）。一次性或周期性任务；最多 10 个活跃任务；任务完成时通过推送或邮件通知；可在任务页暂停、编辑、删除。
- Gemini scheduled actions：https://blog.google/products/gemini/scheduled-actions-gemini-app/ （地址凭记忆）。最多 10 个活跃的定时操作；在设置里集中管理。

Meta AI 主动跟进消息（2025-07 媒体报道的内部准则）
- 报道称：只有在用户发起对话后 14 天内、且用户此前至少发过 5 条消息时，AI 才可以主动跟进一次；第一条跟进没有得到回复就不再发。URL 未核。

共同点：每天一次或事件完成才发；活跃任务有硬上限；有显式的开关和管理入口；一次不回就停。

---

## 8. Duolingo 专题

### 8.1 KDD 2020 论文 【搜 + 忆】

- Yancey & Settles, "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications", KDD 2020。https://research.duolingo.com/papers/yancey.kdd20.pdf
- 【搜】摘要要点：提出 Recovering Difference Softmax 算法，针对常规 bandit 在实践中的两个麻烦：新鲜度效应（novelty effects）和条件性可用（conditional eligibility）。用于优化 Duolingo 每天数百万条练习提醒，相对一个强基线，总 DAU 提升 0.5%，新用户留存提升 2%。公开的复现数据集含 35 天内发出的 2 亿条练习提醒。
- 【搜】二手解读：新模板即使长期并不更好，短期也会因为新鲜而转化更高。
- 【忆】机制细节（未核原文）：
  - 臂 = 通知文案模板。sleeping 指有些模板不是每次都可用（例如提到连胜的模板要求用户有连胜）。
  - recovering 指模板被某用户看过后效果会暂时下降、随时间恢复。算法给近期用过的模板加惩罚，惩罚随天数指数衰减，记忆中的参数是惩罚系数约 0.017、半衰期约 15 天。
  - 提醒在用户上次练习的大约 23.5 小时后发出。
- 相关博客：https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/

读法：算法层面精心优化文案选择，换来的是 0.5% 的 DAU。文案轮换值得做，但别指望两位数的提升；真正的大头在「发不发、何时发、发给谁」。

### 8.2 运营规则 【忆】

- Jorge Mazal（Duolingo 前 CPO）在 Lenny's Newsletter 的文章 "How Duolingo reignited user growth"（2023）：https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth
  大意：通知是很强的增长杠杆，但存在毁掉通道的真实风险，用户一旦关闭几乎不可能挽回；CEO 给团队定了一条底线，保护通道（protect the channel），不靠增加发送量，而是优化时机、模板、图片、文案和本地化。
- 连续多天不响应后，Duolingo 会发出最后一条并停止提醒，文案为 "These reminders don't seem to be working. We'll stop sending them for now."（公开截图广泛流传，停发天数记忆为 7 天，未核）。
- 连胜提醒（streak saver）是其最有效的通知之一：只在连胜即将中断的当晚发，属于「有截止时间 + 有明确损失」的时效消息。【忆】

---

## 9. 分级发送建议

### 9.1 五个发送层级（PA 内部口径）

| 层级 | 名称 | 用户感知 | iOS | Android | 鸿蒙 | 国内厂商通道 | 微信 |
|---|---|---|---|---|---|---|---|
| L0 | 静默入账 | 无任何提示；打开 App 能在目标卡片和时间线里看到 | 不发通知；小组件/App 内更新 | 不发通知 | 不发通知 | 不占额度 | 不占订阅 |
| L1 | 轻提示 | 不亮屏不响；通知中心可见，或进每日摘要 | passive；或进 Scheduled Summary，用 relevanceScore 排序 | IMPORTANCE_LOW / MIN | CONTENT_INFORMATION（仅通知中心） | 资讯营销/运营/公信（静默，日限 2 条） | 一般不用 |
| L2 | 标准推送 | 亮屏、响一次、横幅 | active；apns-priority 5 或 10 | IMPORTANCE_DEFAULT | SERVICE_INFORMATION | 服务与通讯/系统消息/私信（需申请分类） | 一次性订阅消息（创建目标时预授权） |
| L3 | 时效推送 | 穿透专注模式/悬浮横幅 | timeSensitive（仅限正在发生或 1 小时内） | IMPORTANCE_HIGH | SERVICE_INFORMATION + 横幅 | 同 L2 | 同 L2 |
| L4 | 强提醒 | 电话、短信、闹钟式 | critical 需 Apple 特批，PA 基本拿不到；改用电话/短信 | full-screen intent（仅来电、闹钟级） | — | — | — |
| 实况 | 持续状态面 | 锁屏/灵动岛/状态栏胶囊上一个会变化的状态 | Live Activity（≤8 小时） | Live Update（Android 16） | 实况窗（场景白名单） | — | — |

平台映射来自【已核】的官方文档；L0–L4 的命名和划分是本研究的归纳。

### 9.2 主表：消息紧急度 × 需不需要用户动作

紧急度按「机会关闭、信息失效或损失发生」前的剩余时间划分。「1 小时」这条线直接取自 Apple 对 Time Sensitive 的官方门槛。

| | 必须你来定（不点就做不了或会受损） | 可改默认（PA 有默认方案或已获授权，不点就按默认） | 只是告知（无需动作） |
|---|---|---|---|
| 立即：≤1 小时 | L3 时效推送，带 1–2 个动作按钮。到期前最多再提醒 1 次，原地更新同一条。过期后入账并说明结果，不追发 | L2 标准推送 1 次，写明「不操作将在 HH:MM 按 X 执行」。执行成功不再单独通知，并入摘要；执行失败按左列处理 | 用户此刻要据此行动（如登机口变更）才用 L2；否则 L1。处于实况窗期间只更新实况窗，不另发推送 |
| 当天：1–24 小时 | L2 标准推送，挑断点或用户约定时段发。截止前 ≤1 小时仍未处理，升为 L3 一次 | L1 或当日摘要置顶。截止前 2–3 小时若用户未看过，补一条 L2 | L1 或摘要 |
| 近期：1–7 天 | 进每日摘要，并在目标卡片顶部标「待你决定」。截止前 24 小时转入「当天」一行处理 | 每日摘要 | L0，周报汇总 |
| 无时限 | 不推送。进「待你决定」清单，周报提一次 | L0 | L0 |

L3 的准入条件（三条同时满足）：用户亲手设过这个触发条件或授权过这类动作；窗口确实 ≤1 小时；消息里有明确动作或明确后果。
L4 只在用户创建目标时主动勾选「可以打电话叫我」后才可用，默认关闭，PA 不得自行升级到 L4。

各格的依据：
- 「1 小时」门槛、时效级不得用于营销：Apple HIG【已核，平台硬规则】。
- 「未回应不重发」「原地更新」：Apple HIG、Android 文档【已核，平台规范】。
- 「非紧急进摘要」：Fitz 2019、Apple Scheduled Summary、ChatGPT Pulse【实证 + 产品案例】。
- 「挑断点发」：Fischer 2011、Okoshi、Bailey & Konstan【实证】。
- 各格具体落在哪一层、升级几次：【本研究推演】，需 A/B 标定。

### 9.3 目标状态 → 默认层级（推演）

| 目标状态 | 默认层级 | 说明 |
|---|---|---|
| 监控中 | L0 | 只更新卡片上的「最近检查时间、当前值、离触发线还差多少」。Android 明确说无需用户参与的操作不该发通知 |
| 发现机会 | 按 9.2 主表 | 窗口 ≤1 小时走 L3；当天走 L2；否则进摘要 |
| 待确认 | L2 一次 | 到期前按主表最多升级一次，升级必须带新信息 |
| 执行中 | L0 或实况 | 过程不汇报。用户在等结果且过程 ≤8 小时（排队、当天行程、上门取件）才上实况窗 |
| 受阻/失败 | 需要用户出手：L2/L3；PA 能自己重试：L0 | Android 明确说能自愈的错误不要通知 |
| 完成 | 用户在等：L2 一次；否则进摘要 | 一句结果 + 省了多少 |
| 复盘 | L1/周报 | 永远不单独推送 |
| 将过期/搁置 | 过期前 L2 一次：「还要继续盯吗」 | 过期后 L0 入账 |
| 放弃 | 不发 | 用户主动放弃的不再提起 |

### 9.4 频率上限建议与依据

| 消息类别 | 建议上限 | 依据 | 证据性质 |
|---|---|---|---|
| L3 时效 + 需决定 | 事件驱动；常态下人均 ≤1 条/日、≤3 条/周；同一事件 1 条 + 到期前最多 1 次提醒 | Apple「1 小时内」门槛；HIG 不重复；告警 override 49%–96%；ProactiveBench 误报约 50% | 平台硬规则 + 推演 |
| L2 标准推送（所有目标合计） | ≤3 条/日·人；同一目标 ≤1 条/日 | Fitz：每天 3 批有效、每小时一批无效；Pielot：人均每天 56–64 条的总盘子；厂商对营销类 2 条/日的口径可作心理锚 | 推演（有实证旁证） |
| PA 自发建议、推荐、功能介绍、召回 | ≤1 条/日、≤3 条/周，默认并入摘要；必须能一键关闭这一类 | 华为、vivo、OPPO 资讯营销/运营类 2 条/日硬上限且静默；App Review 4.5.4 要求 opt-in；Android「无价值召回不该发」；Batch：群发式打开率 4.19% | 平台硬规则 + 行业数据 + 推演 |
| 每日摘要 | 1 次/日，固定时刻（默认早上，用户可改）；3–5 条封顶；当天无事可以不发 | ChatGPT Pulse；Fitz 的可预期批次；Apple Scheduled Summary | 产品案例 + 实证旁证 |
| 周报/复盘 | 1 次/周 | — | 推演 |
| 习惯类提醒 | 1 条/日，贴近用户上次完成的时刻；连续 5–7 天无响应即降频并告知 | Duolingo 做法（约 23.5 小时、不响应即停发） | 产品案例 |
| 高频提醒的文案 | 模板池 ≥6 个；同一用户同一模板冷却约 2 周 | Duolingo KDD 2020（新鲜度衰减，半衰期约 15 天为记忆值） | 实证（参数待核） |
| 实况窗/实时活动 | 每个执行中目标 1 个；过程中带提醒的更新 ≤3 次；结束后 15–30 分钟撤下 | Apple HIG（8 小时、15–30 分钟、只为关键更新提醒）；Android Live Updates；华为设计指南 | 平台规范 + 推演 |
| 夜间 | 默认 22:00–08:00 不发 L2；L3 只放行用户为该类勾选过「夜里也叫我」的 | Fitz 最后一批在 21:00；系统专注模式/勿扰 | 推演 |
| 短时间连发 | 同一用户 2 分钟内至多 1 条有声提醒，其余合并进同一条 | Android 15 冷却（2 分钟）；每秒最多响一次；Android 16 自动分组 | 平台硬规则 |
| 自动降级 | 同类消息连续 3 条未点开或被划掉：降一级，并问一次「还要不要」 | Duolingo 停发；iOS 定期让用户复评 Time Sensitive；告警疲劳 | 推演（与平台机制同构） |
| 活跃盯梢目标数 | 每人设上限（如 10 个），创建时显示余量 | ChatGPT Tasks、Gemini 定时操作均为 10 个 | 产品案例（待核） |

所有标「推演」的数字都是起点，不是结论。上线后应以三项指标校准：通知权限保留率、L3 的采纳率、用户主动打开 App 查进度的次数（越低说明越不用盯梢）。

### 9.5 推送的价值门槛（推演）

一条推送值不值得发，按 Horvitz 的期望效用思路估：

    预期收益 = 省下的钱或时间 × 用户采纳的把握
    打扰成本 = 看一眼的几秒到几十秒 + 被带偏的概率 × 绕路时间 + 情绪成本

参考量级：Mehrotra 2016 测得通知的「看到 + 决定」时间平均 12–26 秒；Iqbal & Horvitz 2007 记录到提醒引发的绕路可达十分钟以上（数字待核）。所以为省 ¥3 或 2 分钟单独推送，大概率是净亏。

可执行做法：给每类目标设一个推送门槛，例如省钱 ≥ ¥20 或 ≥ 目标金额的 5%，省时 ≥ 15 分钟，或截止 ≤24 小时。不过门槛的进摘要。门槛数值是示意，需按品类和用户标定，并允许用户自己改（「低于 ¥50 别叫我」）。

### 9.6 升级阶梯、摘要、勿扰、稍后提醒

升级阶梯：静默 → 轻提示 → 推送 → 时效推送
- 升级的触发条件只能是情况变了：窗口变短、损失变大、库存变少、用户设的线被触发。「用户没回应」本身不是升级理由（Apple HIG 明确点名）。
- 每升一级必须带上新信息，没有新信息就不升。
- 降级的触发条件：用户划掉、连续未读、用户已在 App 内看到（应用在前台时不发通知，改为页面内更新）、用户在别的渠道已处理。
- 状态已失效的通知要主动撤回（Android：stale 通知应移除；setTimeoutAfter）。

摘要何时优于即时推送
- 用摘要：没有时限或时限 >24 小时；同类消息多条；只是告知；PA 自发的建议。
- 用即时：窗口 ≤24 小时且需要用户决定；价格或库存窗口短；不授权就无法继续执行；涉及资金安全。
- 摘要的写法：固定时刻、固定上限、按「需要你决定的 → 已替你办完的 → 仅供了解的」排序、结尾明说「今天就这些」。

勿扰
- 尊重系统专注模式和勿扰；只有满足「1 小时内」条件的才标时效级。
- 每个目标可单独设安静时段；夜间发现的非紧急机会入账，第二天摘要置顶。

稍后提醒（snooze）
- 按钮文案用事件相对时间，而不是固定分钟数：「到家后再说」「登机前 2 小时」「发工资那天」「价格再降 ¥100 时」。
- 用户点了稍后，就不要在此之前再发。
- 线索【忆】：Weber 等 MobileHCI 2018 "Snooze!" 研究了用户自定义延后通知的行为（https://www.interruptions.net/literature/Weber-MobileHCI18.pdf），未读正文。

---

## 10. 可执行规则（带中文正反例）

以下示例话术是本研究为说明规则而写的，不是采集到的真实文案。

规则 1：先判级，再写字
每条主动消息先过 9.2 主表落到 L0–L3，再决定长度和语气。
- 正：L3「16:30 的号还剩 2 个，15 分钟后放给下一位。」按钮「帮我占一个」「不用了」
- 反：把「本周省钱小结出炉啦」按时效通知发出并响铃。

规则 2：时效级只给 1 小时内的窗口
- 正：「CA1502 改到 3 号登机口，18:05 关闭登机。」（距现在 40 分钟）
- 反：「视频会员 3 天后续费 ¥30」用时效级穿透勿扰。

规则 3：同一件事只发一条，变化时原地更新，不因没回应而重发
- 正：同一条通知从「上海—东京 ¥2,180，降了 ¥320」更新为「¥2,050，降了 ¥450，余 4 张」，更新时不再响。
- 反：10:00「机票降价了！」12:00「还没看吗？机票降价了哦」15:00「最后提醒」。

规则 4：升级要带新信息
- 正：三天前进过摘要的续费，到最后一晚才推送：「今晚 23:59 前不停掉，明早按 ¥199 续一年。」按钮「现在停掉」「继续续费」
- 反：「你有一条待确认事项尚未处理，请尽快处理。」

规则 5：非紧急的进摘要，每天一次，有头有尾
- 正：「早 8:30 · 今天 3 件事：1. 东京机票 ¥2,180，比昨天低 ¥60，离你的 ¥2,000 线还差 ¥180；2. 宽带还有 12 天到期，已找到便宜 ¥312/年的套餐，等你点头；3. 报销 ¥486 已到账。今天就这些。」
- 反：一天里分 6 次推送「东京机票又变了 ¥10」。

规则 6：过程不汇报，可发可不发的走无声层
- 正：目标卡片上显示「已比对 12 家，暂无更低价 · 10 分钟前更新」。
- 反：推送「我又帮你查了一遍，价格没变哦」。

规则 7：创建目标时签「打扰契约」，并在那一刻请求通知权限
- 正：「盯住这张机票，什么时候叫你？」选项「降到 ¥2,000 以下立刻叫我」「每天早上汇总一次」「只在快卖完时叫我」
- 反：首次打开 App 就弹「允许通知」；或目标创建后默认什么都推。

规则 8：用户订阅的进展和 PA 自发的建议，分两条通道、两套配额
- 正：通道「目标进展」只发用户设过条件的事；通道「PA 的建议」默认静默、每天最多 1 条、可一键关。
- 反：用「订单提醒」通道发「猜你还想买这个」。

规则 9：挑断点发
- 正：检测到会议结束 2 分钟后发：「15:00 评审会要改期，回一个你方便的时间？」
- 反：用户正在导航开车时弹出「本月咖啡目标已省 ¥380」。

规则 10：连续不响应就自己闭嘴，并说一声
- 正：「夜跑提醒连着 5 天没被点开，我先改成每周日汇总一次。想恢复每天提醒，在目标里改回来就行。」
- 反：第 30 天仍然每晚 21:00 发同一句「今天还没跑步哦」。

规则 11：高频提醒轮换模板
- 正：模板池不少于 6 个，记录每位用户最近用过的模板，两周内不重复。
- 反：每天同一句「坚持就是胜利，今天也要打卡哦」。

规则 12：实况窗只给执行中的过程
- 正：排队时实况窗显示「前面 6 桌 · 约 18 分钟」，只在「还剩 2 桌」时提醒一次；入座 15 分钟后撤下。
- 反：用实况窗常驻显示「正在为你监控 3 件商品的价格」。

规则 13：模型不独自决定发不发
- 正：用户设的价格线或截止时间被触发 → 通过频控配额和价值门槛 → 才调用模型写文案；灰区默认「只入账」。
- 反：让模型每小时自由判断「现在有没有值得告诉用户的事」并直接推送。

规则 14：首句抗截断、抗摘要
- 正：「东京往返 ¥2,050，比你的目标价低 ¥150，今晚 24:00 前有效。」
- 反：「好消息！你关注的机票有新动态，不过需要注意的是……」

规则 15：夜里只放行用户预先点过头的时效消息
- 正：23:10 发现降价 → 入账，第二天 8:30 摘要第一条。只有「2 小时内失效」且用户勾过「夜里也叫我」才推送。
- 反：凌晨 1 点响铃：「机票降了 ¥30」。

规则 16：不过价值门槛的不单独推送
- 正：摘要里一行：「牙膏凑单能再省 ¥3，已帮你记下，下次一起买时用。」
- 反：为省 ¥3 的凑单方案单独推送并响铃。

---

## 11. 真实文案样本（逐字，来自本次核对过的官方文档或记忆中的公开产品）

| 文案（逐字） | 出处 | 说明 | 状态 |
|---|---|---|---|
| "Friend request," "New comment," "Reminder," or "Shipment." | Apple HIG Notifications | 预览被隐藏时应显示的通用正文示例 | 【已核】 |
| "Haven't seen you in a while!" | Android 设计指南 Notifications | 官方举的反例：无直接价值的召回通知 | 【已核】 |
| 标题 "HIGH PRIORITY"，正文 "Check this dog puppy video NOW!" | Android 文档 time-sensitive 页示例代码 | 官方示例代码里的占位文案，本身恰好是「把不重要的事伪装成紧急」的反例 | 【已核】 |
| "Get notified!"；按钮 "I'm in" | Android 文档 notification-permission 页流程图说明 | 权限请求前的说明屏 | 【已核】 |
| "Thinking..."、"Rerouting..." | Android 文档 Live Updates | ETA 未知时的占位文案，不要显示空状态 | 【已核】 |
| "Tip"、"Add dish" | Android 文档 progress-centric | 外卖进度通知里的动作按钮示例 | 【已核】 |
| 标题 "\(heroName) has been knocked down!"，正文 "Open the app and use a potion to heal \(heroName)." | Apple ActivityKit 文档示例 | Live Activity 提醒的示例 | 【已核】 |
| "Keep" / "Turn Off"；"Deliver Immediately" / "Deliver in Scheduled Summary" | Apple 文档 Asking permission | 临时授权通知上的系统按钮与选项 | 【已核】 |
| 「我们将会审核你的申诉」「欢迎回到社区！」 | Ant Design 文案规范 | 「我们」的合理用法；感叹号的合理用法 | 【已核】 |
| "Great, that's it for today." | ChatGPT Pulse（TechCrunch 报道） | 日报的有限结尾 | 【忆】 |
| "These reminders don't seem to be working. We'll stop sending them for now." | Duolingo 推送 | 连续不响应后的停发告知 | 【忆】 |

---

## 12. 对基础稿的核查与更正

1. Ant Design 关于「你/您」的原文【已核】
   来源：https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/copywriting.zh-CN.md （即 ant.design/docs/spec/copywriting-cn 的源文件）
   - 原文：「直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。」
   - 原文：「不要在同一个句式中混用「你」和「我」，交互中指代混乱会让用户相当纠结。」
   - 原文：「当用户向后台反馈问题、提出建议或申诉时，使用「我们」是合理的语境，例如「我们将会审核你的申诉」。」
   - 感叹号原文：「感叹号会让文案显得过于激动，容易让气氛变得过于紧张。」「当向用户表达问候或祝贺时，使用「！」是合理的语境，例如「欢迎回到社区！」。」
   - 数字原文：「统计数据使用阿拉伯数字」「用户对于数字的感知速度更快，使用数字而非文字表述会更加有效。」
   - 更正：基础稿写「『您』带有明显的下对上客服疏离感」是加工过的转述，原文只说「让用户感觉太过疏远」。「绝不自称本助手/小X」不在该规范里，是基础稿自己的主张，应去掉「Ant Design 明确指出」的归因。基础稿称「遵循 Ant Design 按钮规范，用精准动词 + 结果名词」，但这份文案规范没有按钮文案专节，只在标点部分提到「按钮和标题」不用句号，需要换来源或标为自拟规则。
2. 「注意力窗口通常只有 1.5 至 3 秒」：本方向没有找到出处。可引用的相邻实证是 Mehrotra 2016 的通知「看到 + 决定」时间均值 11.94 秒（高优先级）和 25.91 秒（低优先级），以及 Android 官方的标题 ≤30 字符、正文 ≤40 字符建议。建议降级为「设计假设」。
3. 「28 秒压到 3.5 秒」「节省 87.5%」「消除约 85% 的交互摩擦」：基础稿自己写的是「模型测算」，没有实测来源，应明确标为推演示意，不能与 NN/g 的 124% 并列成实证。
4. 「米勒定律 4±1 组块」：4±1 出自 Cowan 2001，Miller 1956 是 7±2。属通识更正，本次未联网核对。
5. Yuki K. 的 Medium 文章 "AI Agent UX: How to Reduce Cognitive Load and User Fatigue"（基础稿标注 2026 年 10 月）：本方向检索额度耗尽，未能核实它是否存在。无论是否存在，它是个人博客，Checking / Interrupting / Watching 的三分法应标为「作者观点」。其中「打断税」可以换成一手研究来支撑：Mark 2005/2008、Iqbal & Horvitz 2007、Stothart 2015、Bailey & Konstan 2006。
6. 「全网史低」：两个问题。事实层面，PA 只监控有限的平台和时间窗，无法证明「全网」「史上」；法规层面，《广告法》第九条第（三）项禁止「最高级」「最佳」等绝对化用语，若该消息构成广告则有风险。建议改成可证实的限定说法，例如「你盯的 5 个平台里近 90 天最低」。法规部分本次未联网核对。
7. 基础稿把「严格锁死在 40 个汉字以内」当通用上限：方向是对的，但 Android 的 30/40 是拉丁字符，iOS 没有给字数。中文在各机型锁屏上的可见字数需要实测后再定数。
8. 基础稿只讨论了「怎么写」，没有讨论「发不发、发到哪一层、一天发几条」。按本方向的证据，后者对「省时间还是偷时间」的影响更大，建议在报告结构上把分级与频控放在话术之前。
9. 基础稿象限 III 的示例「看你今天连开 4 场会…」隐含 PA 在读日历并推断状态。按《个人信息保护法》第二十四条的精神和 Amershi G11，应当让用户知道依据是什么，并能关闭这类基于个人特征的主动建议。
10. 基础稿场景 4「今天辛苦了，睡前只刷 5 个核心高频词…」是好的降级思路，但要补上频控：同类降级提醒连续几天没被理会，就该按规则 10 自己闭嘴。

---

## 13. 与常识或基础稿相反的发现

- 被打断的人完成任务更快（Mark 2008）。打断的代价是压力而不是速度，「打断让你慢 23 分钟」是误引。
- 把通知全关掉并不更好：更焦虑、更怕错过、联结感下降（Fitz 2019；Pielot & Rello 2017）。原计划的 30 天关通知实验招不到人。
- 批处理的频率很关键：每天 3 次有效，每小时一次几乎无效（Fitz 2019）。而邮件领域的研究没有发现批处理降低压力（Mark 2016）。
- 不看的通知也在扣注意力（Stothart 2015）。
- 内容比时机重要：时机选得再好，不相关的内容也不被接受（Fischer 2010；Mehrotra 2016）。
- 最强的大模型在「该不该主动开口」上误报率仍有一半（ProactiveBench）。模型的天性是话多。
- Duolingo 用专门的 bandit 算法优化提醒文案，收益是 DAU +0.5%。文案优化的边际收益远小于人们的想象。
- 平台明确写了「没回应也不要重发」（Apple HIG），与常见的「催办」逻辑相反。
- 「盯降价」这种多日目标不够格上实况窗/实时活动；Android 文档甚至说追踪包裹都不合适。
- Android 的通知权限已不再是默认开启：opt-in 中位数从 71.3%（2023）降到 53.3%（2025），与 iOS 接近。
- OpenAI 把「今天到此为止」当作主动式产品的卖点，而不是缺陷。

---

## 14. 缺口与后续补查

网络与额度造成的缺口
- 需要有人用不受限的网络逐条复核标【搜】【忆】的条目，优先级最高的是：Gallup 访谈与 CHI 2005 原文（23:15 与 25:26）、Iqbal & Horvitz 2007 的三个数字、Okoshi PerCom 2017 的响应时间降幅、Fitz 2019 全文（生产力结论的方向）、Duolingo 论文的参数、华为/小米/OPPO/vivo/荣耀最新限额、鸿蒙实况窗的官方场景清单和生命周期、微信订阅消息现行规则、弹窗规定第五条逐项原文。
- 没来得及检索的主题：ChatGPT Pulse / Tasks / Gemini 定时操作的现行规则与界面文案；Meta AI 主动消息准则；iOS 18–26 的通知摘要和优先通知；Android 16 的 AI 通知摘要与通知整理；Samsung Now Brief、Pixel Magic Cue；国内助手（豆包、元宝、通义、Kimi、小艺、小爱、YOYO、小布、蓝心小V）的主动提醒和定时任务规则。
- 没来得及检索的国内数据：个推、极光、友盟+、QuestMobile 关于国内推送到达率、点击率、通知关闭率的报告；国内用户每日通知量的实测。

证据本身的缺口
- 没有找到针对「代理型 PA 的主动消息频率」的直接实证。9.4 的上限大多是推演，需要 A/B。
- 批处理的长期效果未知（Fitz 只做了 2 周）。
- 断点检测在国内定制系统上能拿到哪些信号、是否合规，未查。
- 中文通知在各机型锁屏、横幅、实况窗胶囊上的实际可见汉字数，未查，需要实测。
- 流传的「每周 3–6 条导致 40% 关闭」「每天超 5 条卸载 3 倍」找不到原始出处。
- Meta "Notifications: why less is more" 长期实验、LinkedIn 减 40% 邮件投诉减半，两条线索都值得核实，它们是「少发反而长期更好」最直接的行业证据。
- 稍后提醒（snooze）的用户行为研究只留了线索（Weber 2018），未读。
- 基础稿引用的 Yuki K. Medium 文章是否存在，未核。

---

## 15. 来源清单与核对状态

【已核】（本次 WebFetch 逐字核对）
1. Apple HIG — Managing notifications https://developer.apple.com/design/human-interface-guidelines/managing-notifications
2. Apple HIG — Notifications https://developer.apple.com/design/human-interface-guidelines/notifications
3. Apple HIG — Live Activities https://developer.apple.com/design/human-interface-guidelines/live-activities
4. Apple — Asking permission to use notifications https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications
5. Apple — App Store Review Guidelines（4.5.3、4.5.4、5.1.2(i)）https://developer.apple.com/app-store/review/guidelines/
6. Apple — Displaying live data with Live Activities https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities
7. Apple — UNNotificationInterruptionLevel https://developer.apple.com/documentation/usernotifications/unnotificationinterruptionlevel
8. Apple — relevanceScore https://developer.apple.com/documentation/usernotifications/unnotificationcontent/relevancescore
9. Apple — Sending notification requests to APNs https://developer.apple.com/documentation/usernotifications/sending-notification-requests-to-apns
10. Android — Live Updates https://developer.android.com/develop/ui/views/notifications/live-update
11. Android — Create and manage notification channels https://developer.android.com/develop/ui/views/notifications/channels
12. Android — Notification runtime permission https://developer.android.com/develop/ui/views/notifications/notification-permission
13. Android — Notifications 设计指南 https://developer.android.com/design/ui/mobile/guides/home-screen/notifications
14. Android — About notifications（冷却、自动分组、勿扰）https://developer.android.com/develop/ui/compose/notifications
15. Android — Create a notification（原地更新、只提醒一次、限速）https://developer.android.com/develop/ui/views/notifications/build-notification
16. Android — Core app quality https://developer.android.com/docs/quality-guidelines/core-app-quality
17. Android — Progress-centric notifications https://developer.android.com/develop/ui/compose/notifications/progress-centric
18. Android — Power management resource limits（高优 FCM 降级）https://developer.android.com/topic/performance/power/power-details
19. Android — Time-sensitive notifications https://developer.android.com/develop/ui/views/notifications/time-sensitive
20. OpenHarmony — 通知渠道 / 通知概述 https://raw.githubusercontent.com/openharmony/docs/master/zh-cn/application-dev/notification/notification-slot.md
21. Ant Design — 文案规范源文件 https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/copywriting.zh-CN.md
22. ProactiveAgent / ProactiveBench README https://github.com/thunlp/ProactiveAgent
23. Apple — UNAuthorizationOptions.criticalAlert https://developer.apple.com/documentation/usernotifications/unauthorizationoptions/criticalalert
24. OpenHarmony — notificationManager API 参考（SlotType 枚举）https://raw.githubusercontent.com/openharmony/docs/master/zh-cn/application-dev/reference/apis-notification-kit/js-apis-notificationManager.md

【搜】（搜索摘要核对，原页面未打开）
Gallup 访谈；Mark 2005；Mark 2008；Iqbal & Horvitz 2007（部分）；Stothart 2015；Fischer 2011（部分）；Okoshi 系列（部分）；Pielot 2014、2017、2018；Mehrotra 2016；Fitz 2019；Pielot & Rello 2017；Duolingo KDD 2020（摘要）；Airship；Batch；Business of Apps；Localytics/MarketingProfs；Helplama；Leanplum/Fast Company；华为、vivo、OPPO、小米推送规则（经华为、阿里云、腾讯云文档）；鸿蒙实况窗；微信订阅消息；《互联网弹窗信息推送服务管理规定》。

【忆】（既有知识，未核对）
Bailey & Konstan 2006；Adamczyk & Bailey 2004；Kushlev 等 2016；Mark 等 2016；Kushlev & Dunn 2015；van der Sijs 2006；Ancker 2017；Common Sense Media 2023；Sahami Shirazi 2014；Fischer 2010；Horvitz 1999；Amershi 2019；Chen 等 CHI 2025；Pu 等 CHI 2025；ChatGPT Pulse；ChatGPT Tasks；Gemini scheduled actions；Meta AI 主动消息；iOS 18.x 通知摘要事件；Duolingo 运营规则与停发文案、论文参数；华为 category 细分；微信模板消息 2023 年调整；个保法第 24 条、广告法第 9/43/44 条；Meta 与 LinkedIn 的减量实验。
