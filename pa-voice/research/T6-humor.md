# T6 · 幽默：理论、对话式 AI 实证、中文幽默文化与翻车案例

> 调研日期：2026-11-18。研究员：T6。
> 服务对象：中文 Personal Agent（PA）在「目标创建之后」的主动提醒与状态流转话术。
> 核心问题：PA 什么时候可以开玩笑、开什么样的玩笑、对谁开、开到什么程度；中文语境里哪些幽默机制安全、哪些高危。

---

## 0. 先读这一段：证据等级与本轮限制

本轮有两个硬限制，决定了每条结论能信到什么程度。

1. **WebSearch 配额在我第 10 次检索后用尽。** 配额是全工作流共享的每轮 200 次。第 11–14 次检索被拒，原计划的 30 多个检索词大部分没跑。任务要求的「至少 15 次搜索」没有达到。
2. **WebFetch 只能打开 GitHub。** 会话网络策略是「受限」档，只放行包管理器与 MCP 服务。`pmc.ncbi.nlm.nih.gov`、`www.frontiersin.org`、`leeds-faculty.colorado.edu`、`faculty.wharton.upenn.edu`、`huggingface.co`、`llm-bible.github.io` 全部返回 `getaddrinfo ENOTFOUND`。`github.com` 与 `raw.githubusercontent.com` 可用。

我的应对：凡是在 GitHub 上有官方仓库或全文镜像的一手文本（法规、设计规范、ACL Anthology 元数据、官方提示词指南、开源人格包），都用 WebFetch 打开核对了，共 25 份。心理学与营销学的期刊论文打不开，只能停在搜索摘要或背景知识一级。

| 标记 | 含义 | `verified_by_fetch` |
|---|---|---|
| **〔A〕** | 我用 WebFetch 打开一手文本核对过（GitHub 上的官方仓库或全文镜像） | true |
| **〔L〕** | 对照同团队 T9、T5 下载到本地的一手副本逐字读过，不是我抓的 | false |
| **〔B〕** | 只见于我这 8 次 WebSearch 的结果摘要（多为论文摘要转述），没打开原页 | false |
| **〔X〕** | 跨轨道引用：T7a、T7b、T2 的搜索摘要级证据，我没有独立核对 | false |
| **〔C〕** | 研究员背景知识，本会话没有来源支撑。只当线索，写进对外材料前必须联网复核 | false |

三点提醒：
- 法规文本取自 GitHub 社区镜像 `LawRefBook/Laws`，不是官方公报。条文与我已知版本一致，但正式引用前请对照国家法律法规数据库或发布机关官网。
- 泄露的系统提示词（Poke、ChatGPT 人格预设）不是厂商官方发布，真实性无法独立确认，只当行业做法的线索。
- 第 10–14 节的阶梯、清单、阈值是我基于证据做的设计提案。凡是数字阈值（≤8 字、每 5 条 1 次、冷却 30 天等）都是**推演值**，要靠线上实验校准，不要当成研究结论引用。

工作量：WebSearch 10 次成功、4 次被拒；WebFetch 约 57 次，成功约 45 次；一手文本核对 25 份；读了 3 份兄弟轨道笔记和 4 份本地副本。

---

## 1. 一页结论

1. **默认不开玩笑不扣分，开错必扣分。** 成功的幽默通过「自信 + 能力」信号抬高地位，不合时宜又不好笑的玩笑通过「低能力」信号拉低地位（Bitterly 等 2017，8 个实验）〔B〕。中国受试者更倾向把幽默看成「专业人士的特质」，而不是普通人该有的（Yue 等 2016）〔B〕。PA 办的是钱和时间的正事，默认档应该是「有人味、不抖机灵」。
2. **靶子比笑点重要。** 只对「琐事与情境」和「PA 自己已经修好的小错」开玩笑。AI 自贬式幽默在 4 个实验（N=1919）里最能换来宽恕，但只在低严重度失败时成立（Xie 等 2025）〔B〕；另有研究发现自贬会让顾客不适、降低宽恕和回访〔B〕。
3. **失败、扣款、受阻、临近截止这四类节点，幽默恒为零。** 幽默只有「被觉得好笑」时才算补救手段（Kobel & Groeppel-Klein 2021）〔B〕。OpenAI 的 GPT-5.1 官方提示词指南写明：高风险时连那一句寒暄都省掉〔A〕。
4. **别让大模型自由发挥中文梗。** ChatGPT 的 1008 个笑话里 90% 以上是同样 25 个（Jentzsch & Kersting 2023）〔A〕；10 个大模型在「弱智吧」幽默理解上「仅略高于随机、远低于人类」（Chumor 2.0，ACL 2025）〔A〕。但大模型很擅长「去幽默」（Horvitz 等 2024）〔A〕。所以流程应该是先写平实版、再有条件地加一笔，并让模型当刹车而不是油门。
5. **没有语调的文本里，反讽和阴阳怪气是高危动作。** 作者自认的讽刺和读者读出的讽刺本来就对不上（iSarcasm，ACL 2020）〔A〕。经典实验里发件人以为 78% 的讽刺能被读懂，实际只有 56%（Kruger 等 2005）〔C，数字待核〕。
6. **中国的规则把毒舌和谄媚两头都封住了。** 《人工智能拟人化互动服务管理暂行办法》（2026-07-15 施行）同时禁止「语言暴力」与「过度迎合用户」〔A〕；《生成式人工智能服务管理暂行办法》点名民族、信仰、国别、地域、性别、年龄、职业、健康 8 类歧视〔A〕；《广告法》第九条第（三）项的绝对化用语对应 20 万到 100 万元罚款〔A〕。「全网史低」应改成限定范围、带数据口径的说法。
7. **三大高危机制是谐音梗、热梗、调侃用户。** 它们分别对应：多花理解时间并踩规范用字的线；保质期短且大模型用的常是过期梗；把用户变成靶子。安全机制是具象换算、克制的夸张、对琐事吐槽、轻自嘲、接用户先抛的梗。
8. **幽默会磨损，要当限量预算管，不能当人设铺。** Duolingo 专门建模了通知文案的「新鲜度衰减」，换来的也只是 DAU +0.5%〔X〕；「我会稳稳地接住你」被群嘲，原因是复读而不是冷〔X〕；Mailchimp 的原话是「拿不准就板着脸」〔A〕。

---

## 2. 理论地基

### 2.1 良性违背理论（Benign Violation Theory）〔B〕

- McGraw & Warren (2010), *Psychological Science* 21(8), 1141–1149. https://journals.sagepub.com/doi/abs/10.1177/0956797610376073
- 主张：好笑 = 一件事同时被看成「违背」和「良性」。五个实验显示，良性的道德违背在引起厌恶之外还会引起笑。
- 让违背变良性的三个条件（摘要原文）："the presence of an alternative norm suggesting that the situation is acceptable, weak commitment to the violated norm, and psychological distance from the violation."

**翻译成 PA 的语言：**

| BVT 条件 | 在 PA 主动消息里意味着什么 |
|---|---|
| 存在另一条说得通的规范 | 用户自己点了「吐槽我」，或者用户先开了玩笑。有授权，违背才良性 |
| 对被违背的规范不太在意 | 被调侃的是琐事（排队、满减规则、验证码），不是用户在意的东西（钱、身材、自制力） |
| 心理距离够远 | 事情已经解决、损失已经挽回、发生在很久以前。**正在发生的损失没有距离** |

只有违背没有良性，是冒犯。只有良性没有违背，是无聊。大模型经过安全对齐后容易落在后一种（见 5.5）。

### 2.2 距离 × 严重度〔C，URL 来自搜索结果列表〕

- McGraw, Warren, Williams & Leonard (2012), "Too Close for Comfort, or Too Far to Care? Finding Humor in Distant Tragedies and Close Mishaps", *Psychological Science* 23(10). https://leeds-faculty.colorado.edu/mcgrawp/pdf/mcgraw.warren.williams.leonard.2012.pdf
- 我记得的结论：严重的违背（悲剧）隔得远才好笑；轻微的违背（小糗事）离得近才好笑。本会话没打开原文。
- 同一组作者 2014 年用飓风桑迪期间的推文做过「幽默随时间先升后降」的研究〔C〕。

**对 PA 的含义：** 1 对 1 的推送，说的是用户自己的钱和时间，心理距离天然最近。这个距离上只容得下「轻微的违背」。社交媒体上的品牌玩梗之所以能更出格，是因为观众是旁观者，隔着一层。**不要把官方账号的人设直接搬进 1 对 1 推送。**

### 2.3 幽默风格四分法〔C〕

- Martin, Puhlik-Doris, Larsen, Gray & Weir (2003), *Journal of Research in Personality* 37(1), 48–75（Humor Styles Questionnaire）。本会话未核对。
- 四种风格：亲和型（affiliative，拉近关系）、自强型（self-enhancing，苦中作乐）、攻击型（aggressive，拿别人开涮）、自贬型（self-defeating，拿自己开涮讨好别人）。

把机制映射到风格，便于写规则：

| 风格 | PA 里长什么样 | 结论 |
|---|---|---|
| 亲和型 | 对琐事吐槽、接用户的梗、具象换算 | 首选 |
| 自强型 | 「这次没抢到，换条路再来」式的轻快 | 可用，但别盖过坏消息 |
| 自贬型 | PA 对自己的小失误自嘲 | 有条件可用，见 3.2 |
| 攻击型 | 调侃用户、挖苦商家、阴阳怪气 | 默认禁用 |

### 2.4 幽默与地位、能力感〔B〕

- Bitterly, Brooks & Schweitzer (2017), "Risky Business: When Humor Increases and Decreases Status", *JPSP* 112(3), 431–455. https://faculty.wharton.upenn.edu/wp-content/uploads/2017/03/2016-54537-001.pdf
- 8 个实验。成功的幽默提升地位，中介是别人感知到的自信和能力。
- 讲不合适的笑话，即使没人笑，也会显得自信；但同时显得能力低。高自信加低能力，地位下降。
- 二手摘要（BPS Research Digest）：得体但没逗笑人的笑话，对地位没有显著影响。
- 作者自己的定性：幽默是一种有风险的行为。

**对 PA 的含义：** 用户委托 PA 办事，买的是能力感。玩笑成功是小赚，玩笑不合时宜是亏本金。这是「默认不开、开就要稳」的直接依据。

### 2.5 中国人对幽默的矛盾态度〔B〕

- Yue, Jiang, Lu & Hiranandani (2016), "To Be or Not To Be Humorous? Cross Cultural Perspectives on Humor", *Frontiers in Psychology* 7:1495. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01495/full
  - 研究 1：被西方文化启动的香港受试者，对幽默的评价比被中国文化启动时更正面。
  - 研究 2a：加拿大人认为幽默更重要。
  - 研究 2b：加拿大人期待普通人幽默，中国受试者认为幽默属于喜剧演员等专业人士。
  - 文章背景部分指出，儒家正统文学排斥幽默表达。
- Jiang, Li & Hou (2019), "Cultural Differences in Humor Perception, Usage, and Implications", *Frontiers in Psychology* 10:123. https://pmc.ncbi.nlm.nih.gov/articles/PMC6361813/
  - 综述。结论是东西方对幽默的看法有根本差异，中国人对幽默有矛盾态度。搜索摘要里的具体措辞我没能对照原文。
- 背景知识〔C〕：岳晓东 2010、2011 年在 *Humor* 上的两篇文章把这种矛盾概括为三条：看重幽默但不看重自己幽默；幽默与「正统的中国人」形象不符；幽默重要但不是人人都该有。Chen & Martin (2007) 发现中国大学生在幽默风格问卷各维度上得分普遍低于加拿大常模，攻击型差距尤其明显。这两条本会话没有核对。
- 背景知识〔C〕：「幽默」一词是林语堂 1924 年对 humor 的音译，他强调的是「会心的微笑」，不是滑稽。

**对 PA 的含义：**
1. 办正事的角色不幽默，在中文语境里不减分，反而贴合「靠谱」的预期。
2. 中文里被接受的是「风趣」（含蓄、机智、点到为止），不是「搞笑」（外放、抖包袱）。基础稿「会心一笑，而非讲段子」的方向与此一致。
3. 攻击型幽默的接受度更低，「毒舌」不该是默认。年轻用户里流行「嘴替」「发疯」，但那是他们主动选的表演，不是他们愿意在扣款通知里收到的东西。

**边界：** 这些研究的样本主要是大学生，年代在 2007–2016 之间，测的是对「人」的幽默的态度，不是对 AI 的。Z 世代的网络幽默文化在这之后变化很大。

### 2.6 说服研究里的老结论：抓注意力，伤可信度〔C〕

- Eisend (2009), "A meta-analysis of humor in advertising", *Journal of the Academy of Marketing Science* 37, 191–203. https://doi.org/10.1007/s11747-008-0096-y
- 我记得的结论：幽默显著提高注意、对广告的态度和正面情绪，但显著降低信源可信度。本会话没打开原文，系数不引用。
- Weinberger 等人的「产品色彩矩阵」（*Journal of Advertising Research* 1995）〔C，无 URL〕：按风险高低和功能性、享乐性把商品分四格，幽默最适合低风险的享乐小物（黄色），最不适合高风险品类。金融、医疗属于高风险功能品。

**对 PA 的含义：** PA 的消息既要抢到注意，又要被相信。幽默帮前者、伤后者。金额越大、后果越重，越靠可信度吃饭。

---

## 3. 对话式 AI 与服务场景的实证

### 3.1 幽默对机器人比对人更加分〔B〕

- Shin, Bunosso & Levine (2023), "The influence of chatbot humour on consumer evaluations of services", *International Journal of Consumer Studies* 47(2), 545–562. https://digitalcommons.kennesaw.edu/facpubs/6453
- 三个实验。幽默由聊天机器人说出时提高服务满意度，由人工客服说出时没有这个效果。
- 机制是串联中介：幽默让机器人显得更像人、让互动更有意思。
- 二手摘要补充：起作用的是社交上得体的亲和型幽默；攻击型或不得体的幽默可能更抓眼球，但不改善整体评价。这一句来自第三方解读，没对照原文。

**对 PA 的含义：** 用户对 AI 的幽默期望基线很低，轻轻一点就够，不需要用力。能加分的只有亲和型。

### 3.2 服务失败时 AI 该不该开玩笑：证据是混的〔B〕

| 研究 | 设计 | 结论 | 对 PA 的含义 |
|---|---|---|---|
| Xie 等 (2025), *Journal of Business Research* 194. https://ideas.repec.org/a/eee/jbrese/v194y2025ics0148296325002048.html | 4 个实验，N=1919，AI 客服服务失败 | AI 表达幽默能提高顾客宽恕，自贬型效果最好。一次搜索摘要称效果只在低严重度成立，中高严重度消失；第二次检索没能复现这一句 | 自嘲只用于小失误 |
| *Sustainability* 15(4):3294 (2023). https://www.mdpi.com/2071-1050/15/4/3294 | 3 个实验 | AI 自嘲式回应提高顾客对失败的容忍意愿，中介是感知真诚和感知智能 | 自嘲起作用是因为显得真诚，不是因为好笑 |
| *Annals of Tourism Research* 103 (2023). https://ideas.repec.org/a/eee/anture/v103y2023ics016073832300141x.html | 机器人服务失败 | 自嘲式幽默只在功利型服务里提高继续使用意愿；享乐型服务里两类幽默都有效（另一类是什么，摘要没说） | 我的推断：PA 更接近功利型，失败后能用的只有自嘲这一种 |
| 香港理工大学团队 (2025), *Journal of Hospitality and Tourism Management*. https://research.polyu.edu.hk/en/publications/self-enhancing-or-self-deprecating-how-humor-rescues-imperfect-se/ | 不完美的服务机器人 | 自强型幽默的继续使用意愿高于自嘲型，在标准化服务和奢华酒店里更明显 | 与上一条相反。越是高端、标准化的服务，自贬越掉价 |
| "The Perils of Using Self-Deprecating Humor in Service Recovery Communication" (2025). https://scholars.georgiasouthern.edu/en/publications/the-perils-of-using-self-deprecating-humor-in-service-recovery-co/ | 2 个研究，企业的补救沟通 | 自嘲式幽默让消费者不适，降低宽恕与再次光顾意愿 | 自嘲有反效果的直接证据。场景是企业而非 AI |
| Kobel & Groeppel-Klein (2021), *Journal of Business Research* 132, 260–269. https://econpapers.repec.org/RePEc:eee:jbrese:v:132:y:2021:i:c:p:260-269 | 服务失败情境 | 幽默只有被认为好笑时才是补救手段 | 好笑没把握就别用 |
| PACIS 2023 论文. https://aisel.aisnet.org/pacis2023/187 | 2 个实验室实验 | 对话代理的幽默与服务满意度，失败严重度是调节变量 | 严重度是通用的开关 |

以上全部只看到摘要级信息，样本量和操纵细节（除 Xie 外）没核到。这些实验多数是情景想象，不是真实损失。

**综合判断：**
- 自嘲不是万能安全牌。它成立的条件是三个同时满足：失误小、已经补救、只说一句。
- 自嘲的对象只能是这次具体的失误（「把周四看成周五」），不能是核心能力（「我就是个人工智障」）。后者正好撞上 2.4 的低能力信号。
- 失败还没补救时，任何幽默都是在消耗用户的耐心。

### 3.3 重复让幽默变成噪音

- **Duolingo**〔X，来自 T2、T7a 的搜索摘要〕：Yancey & Settles, "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications", KDD 2020. https://research.duolingo.com/papers/yancey.kdd20.pdf 。算法专门处理「新鲜度效应」：同一条文案反复出现会失效，隔一段时间再恢复。相对强基线，总 DAU +0.5%，新用户留存 +2%。公开数据集是约 2 亿条练习提醒；T2 记为 35 天，T7a 记为 34 天，两处不一致，待核。
- **ChatGPT**〔A〕：1008 次「讲个笑话」，90% 以上是同样 25 个。见 5.1。
- **Poke 的系统提示词**〔A，泄露文本〕：把「用户听过的笑话」定义为不原创，并规定拿不准就不讲。见 8.6。
- **「稳稳接住你」**〔X〕：见 9.1。一句有感情的话被复用到数学题和生图请求上，就成了梗。

**对 PA 的含义：** 高频提醒（每日打卡、每周账单）是磨损最快的地方。俏皮话不进高频模板；要进，就得有模板池和冷却期。

### 3.4 任务型人机交互的早期证据〔C〕

Morkes, Kernal & Nass (1999, *Human–Computer Interaction* 14(4)) 的实验里，在任务型交互中加入幽默评论提高了好感度，没有明显拖累任务。这是幽默「可以用」的早期依据，但实验是桌面电脑时代的协作任务，与主动推送差别很大。本会话未核对，不给 DOI。

### 3.5 NN/g 的语气研究〔C〕

- Kate Moran, "The Four Dimensions of Tone of Voice"：https://www.nngroup.com/articles/tone-of-voice-dimensions/ 。四个维度的框架，文中用同一条报错写了几种语气的版本做演示。
- Kate Moran, "The Impact of Tone of Voice on Users' Brand Perception"：https://www.nngroup.com/articles/tone-voice-users/ （URL 凭记忆）。这篇才是实验：给虚构的银行、保险、医院、安防网站各做两种语气的版本，测友好度、可信度和推荐意愿。我记得的要点是可信度对推荐意愿的解释力最大（约 52%），以及保险站的幽默版本不讨好。两个数字都没能核对。
- 这两篇本会话都没打开。对基础稿相关说法的处理见第 15 节。

---

## 4. 靶子：对谁开

### 4.1 四类靶子的风险

| 靶子 | 例句 | 证据 | 风险 | 结论 |
|---|---|---|---|---|
| **琐事与情境**（排队、满减规则、验证码、天气） | 「满减规则 600 多字，替你读完了。」 | 亲和型幽默有效（3.1）；轻微违背在近距离可成立（2.2） | 低 | 首选 |
| **PA 自己** | 「把周四看成周五，是我看错了。已改回。」 | 3.2 的混合证据 | 中。高严重度失效；自贬过头伤能力感 | 小失误、已补救、一句 |
| **第三方**（商家、平台、系统） | 「这家客服电话比春运票还难打。」 | 无直接实验 | 中到高。具名贬低商家有法律风险（7.4） | 只说不具名的规则和流程，且必须属实 |
| **用户** | 「35 天没看还续费，你可真大方。」 | BVT：没有授权时不良性；元宝、豆包的翻车（9.1） | 高 | 只在用户主动点了「吐槽我」时 |
| **某类人群** | 任何关于性别、地域、年龄、职业、身材的梗 | 法规明文（7.3）；品牌翻车（9.2） | 极高 | 禁止 |

### 4.2 文本里的反讽为什么容易翻车

- **iSarcasm**〔A〕：Oprea & Magdy, ACL 2020. https://aclanthology.org/2020.acl-main.118/ 。摘要原文："We consider the distinction between intended and perceived sarcasm in the context of textual sarcasm detection. The former occurs when an utterance is sarcastic from the perspective of its author, while the latter occurs when the utterance is interpreted as sarcastic by the audience." 他们让作者本人标注自己的推文，发现原有模型在这份数据上表现很差，说明以前按读者视角标的数据「可能有偏或过于明显」。
- **Kruger, Epley, Parker & Ng (2005)**〔C〕："Egocentrism over e-mail", *JPSP* 89(6), 925–936. https://doi.org/10.1037/0022-3514.89.6.925 。我记得的数字：发件人预期 78% 的讽刺语气能被读对，邮件组实际 56%，语音组 73%。本会话没核对。
- 中文特有的雷〔C，语用常识〕：「呵呵」、微笑表情、「您可真行」、「真棒👍」在年轻用户里常被读成阴阳怪气。

**对 PA 的含义：** 讽刺要靠语调和表情兜底，推送里没有。任何「字面意思和真实意思相反」的句子都不写。检查方法是把句子按字面读一遍：如果字面意思是指责、威胁或虚假承诺，就删。

---

## 5. 大模型的幽默能力

### 5.1 重复：90% 是同样 25 个笑话〔A〕

- Jentzsch & Kersting (2023), "ChatGPT is fun, but it is not funny! Humor is still challenging Large Language Models", WASSA @ ACL 2023, pp. 325–340. https://aclanthology.org/2023.wassa-1.29/
- 核对方式：ACL Anthology 官方元数据仓库里的摘要全文。
- 摘要原文："Over 90% of 1008 generated jokes were the same 25 Jokes." 以及 "The system accurately explains valid jokes but also comes up with fictional explanations for invalid jokes."
- 边界：模型是 GPT-3.5 时代的 ChatGPT，英文，提示词是「讲个笑话」这类。新模型的重复度没有同口径数据。

### 5.2 理解：离人还远〔A〕

- Hessel 等 (2023), "Do Androids Laugh at Electric Sheep?", ACL 2023. https://aclanthology.org/2023.acl-long.41/
- 摘要原文："our best multimodal models fall 30 accuracy points behind human performance on the matching task, and, even when provided ground-truth visual scene descriptors, human-authored explanations are preferred head-to-head over the best machine-authored ones (few-shot GPT-4) in more than 2/3 of cases."
- 边界：《纽约客》漫画配文，英文。

### 5.3 中文梗：略高于随机〔A〕

- He 等 (2025), "Chumor 2.0: Towards Better Benchmarking Chinese Humor Understanding from (Ruo Zhi Ba)", Findings of ACL 2025. https://aclanthology.org/2025.findings-acl.1122/
- 摘要原文："We test ten LLMs through direct and chain-of-thought prompting, revealing that Chumor poses significant challenges to existing LLMs, with their accuracy slightly above random and far below human." 以及 "human-annotated humor explanations are significantly better than those generated by GPT-4o and ERNIE4-turbo."
- 第三方摘要给出的数字是模型准确率 44.6%–60.3%、人类 78.3%〔B，没对上论文正文〕。
- 边界：任务是判断「对笑点的解释是否正确」，测的是理解不是生成。弱智吧的笑话依赖谐音、歧义和文化梗，是中文幽默里最难的一类。

### 5.4 生成：英文人评已经不差〔B〕

- Gorenz & Schwarz (2024), "How funny is ChatGPT? A comparison of human- and A.I.-produced jokes", *PLOS ONE*. https://doi.org/10.1371/journal.pone.0305364
- 作者自己的表述：ChatGPT 3.5 的表现高于 63% 到 87% 的人类参与者，视任务而定。讽刺新闻标题任务里，与 The Onion 的平均好笑度没有显著差异。
- 边界：对手是普通人不是专业写手；英文；任务是命题作文（缩写词、填空、吐槽）；评分者知道是在评笑话。

### 5.5 更擅长去掉笑点〔A〕

- Horvitz 等 (2024), "Getting Serious about Humor: Crafting Humor Datasets with Unfunny Large Language Models", ACL 2024 short. https://aclanthology.org/2024.acl-short.76/
- 摘要原文："current LLMs display an impressive ability to 'unfun' jokes, as judged by humans and as measured on the downstream task of humor detection."

### 5.6 其他〔A / C〕

- CLoT（Zhong 等，CVPR 2024，https://github.com/sail-sg/CLoT ）〔A，只核了 README〕：用日式「大喜利」游戏测「跳跃思维」，发布了含中文的 CLoT-cn 权重。README 没给结果数字。
- Mirowski 等 (2024) 请 20 位职业喜剧演员用大模型写段子〔C〕。我记得的结论是产出平淡、像几十年前的游轮段子，安全过滤还抹掉了少数群体视角的自嘲。本会话未核对。

### 5.7 合起来看：AI 的笑话为什么「尬」

1. **复读。** 高概率的那几个笑话反复出现（5.1）。厂商自己也在提示词里一条条禁口头禅（8.5）。
2. **不看场合。** 模型被训练成讨人喜欢，默认每次都想活跃气氛。
3. **文化梗接不住。** 中文谐音、歧义、圈层梗的理解只比瞎猜好一点（5.3）。
4. **只有良性没有违背。** 安全对齐后不敢碰任何规范，剩下的是不疼不痒的俏皮话。
5. **用的是过期梗。** 训练语料滞后，模型眼里的「热梗」往往已经过季（推演）。
6. **自己解释笑点、自带「哈哈」。** 这是填充，不是幽默。

问题不在「写不出好笑的句子」，而在「重复、不合时宜、文化梗不稳」。这三样都能用流程管住，见第 14 节。

---

## 6. 中文幽默形态与生命周期

本节除标注外都是〔C〕。我对中文网络语言的描述属于语用常识，榜单是凭记忆列的，写进报告前必须核对。

### 6.1 形态一览

| 形态 | 是什么 | 例 | 放进 PA 的风险 | 建议 |
|---|---|---|---|---|
| 自嘲、自黑 | 拿自己开涮 | 钉钉「在线求饶」 | 中 | 小失误可用一句 |
| 吐槽 | 对事对规则的抱怨式点评 | 「这满减比高数还难」 | 低到中 | 对琐事可用 |
| 具象换算 | 把数字换成生活里的东西 | 「约等于 11 杯冰美式」 | 低 | 首选 |
| 反差 | 小事大说、大事小说、语域错位 | 「经过 6 天严密盯守，这张票降了」 | 低 | 可用，别成口癖 |
| 夸张 | 明显不是字面意思的放大 | 「比春运还难抢」 | 低到中 | 克制使用，别制造焦虑 |
| 冷笑话 | 靠冷场感 | — | 中。多一步理解 | 不用 |
| 谐音梗 | 同音替换 | 「机不可失」写机票 | 高 | 禁用 |
| 流行梗、热梗 | 当季流行语 | 「泰裤辣」「绝绝子」 | 高。保质期短 | 禁用 |
| 打工人梗 | 以打工自嘲求共鸣 | 「打工人太难了」 | 中。替用户定性其处境 | 用户先说才接 |
| 发疯文学 | 夸张的情绪宣泄 | 多邻国社媒人设 | 高。1 对 1 里是情感勒索 | 禁用 |
| 废话文学 | 说了等于没说 | 「听君一席话，如听一席话」 | 高。直接违背省时间 | 禁用 |
| 凡尔赛 | 明贬实炫 | — | 高 | 禁用 |
| 阴阳怪气 | 反讽、话里有话 | 「真棒👍」 | 极高 | 禁用 |
| 土味情话、撒娇卖萌 | 套近乎 | 「宝子~」「亲亲」 | 高。油腻 | 禁用 |

### 6.2 热梗的保质期

《咬文嚼字》年度十大流行语，凭记忆：

| 年份 | 榜单里的生活类用语 |
|---|---|
| 2017 | 油腻、尬、怼、打 call |
| 2020 | 打工人、内卷、凡尔赛文学、后浪 |
| 2021 | 破防、躺平、鸡娃、野性消费 |
| 2022 | 拿捏、雪糕刺客、精神内耗、沉浸式、天花板 |
| 2023 | 显眼包、搭子、多巴胺××、情绪价值、特种兵式旅游、质疑××理解××成为×× |
| 2024 | city 不 city、硬控、水灵灵地××、班味、松弛感、小孩哥/小孩姐 |
| 2025 | 活人感、预制××、赛博对账、谷子、从从容容游刃有余（这一年我把握不大） |

国家语言资源监测与研究中心 2021 年度十大网络用语里有 YYDS、绝绝子、破防、躺平。2024、2025 两年的网络用语榜我记不全，不列。2026 年的两个榜单通常在 12 月初发布，按惯例截至今天（11-18）还没出，没能联网确认。

能读出的规律（**推演**，不是测量）：
- 相邻两年的榜单没有重复词条。榜单本来就不重复收录，所以这只能说明每年都有一批新梗顶上来，不能直接算半衰期。
- 「绝绝子」「YYDS」从上榜到被当成「文字失语」的反面教材，大约一到两年。
- 一个梗一旦上了官方榜单、进了广告文案，在年轻用户那里就已经过气。**PA 用到的时候，多半是它最尬的时候。**

没有查到的：用百度指数、微信指数量化的梗生命周期数据。

「谐音梗扣钱」出自李诞在《脱口秀大会》第三季（2020）对王建国的调侃，后来成为观众对谐音梗「又爱又嫌」的通用说法〔C〕。它说明谐音梗在中文里自带一个翻白眼的反应。

### 6.3 表达反感的词

| 词 | 指什么 | PA 里的触发点 |
|---|---|---|
| **爹味** | 居高临下、好为人师、没人问就说教 | 「千万不要半途而废」「建议你理性消费」「你应该」 |
| **油腻** | 刻意讨好、套近乎、自以为幽默 | 「宝子」「亲爱的」「么么哒」、强行夸奖、波浪号成串 |
| **尬** | 用力过猛、时机不对、笑点没立住 | 强行玩梗、过气梗、讲完自己解释 |
| **土味** | 模板化、过时的顺口溜和谐音 | 「×不可失，×不再来」 |
| **班味** | 工作腔、公文腔带来的疲惫感 | 「收到」「请知悉」「烦请确认」「闭环」「对齐」 |
| **AI 味、人机感** | 句式可预测、没有具体信息、像没有灵魂的 NPC。「人机」原是游戏里对电脑玩家的称呼 | 「不是……而是……」、三段排比、万能总结、「我理解你的感受」 |
| **客服腔** | 礼貌但不解决问题 | 「非常抱歉给您带来不便」「已为您加急反馈」 |
| **鸡汤味** | 空泛的励志 | 「坚持就是胜利」「每一次努力都算数」 |
| **活人感**（褒义） | 像真人说的话：具体、有分寸、有一点脾气 | 是目标，不是手段 |

T7b 的「吐槽词典」〔X〕提供了有来源的用户原话，可与本表对照：「稳稳接住你」「豆包型人格」「赛博 PUA」「电子 PUA 大师」。T7b 的一个观察值得重复：在它收集到的样本里，没有一条称赞是关于「它说话好听」的。

油腻和尬这两个词 2017 年就上了《咬文嚼字》榜单〔C〕，班味是 2024 年，活人感是 2025 年〔C，待核〕。「怎样说话招人烦」在中文里有一套现成的、持续更新的词汇，可以直接当成评审维度。

### 6.4 规范用语的政策线

- 《国家通用语言文字法》2025-12-27 修订，2026-01-01 施行〔A〕。镜像：https://raw.githubusercontent.com/LawRefBook/Laws/master/行政法/国家通用语言文字法(2025-12-27).md
  - 第十七条："信息处理和信息技术产品以及政府主办的或者提供社会公共服务的门户网站、移动应用程序等互联网信息平台中使用的国家通用语言文字，应当符合国家的规范和标准。"
  - 第十五条把网络视听节目、网络游戏等网络出版物用语用字，以及招牌、广告用字，列入应当以国家通用语言文字为基本用语用字的范围。
  - 第二十五条：市场监督管理部门管理广告的用语用字。
  - 条文里没有出现「谐音」「成语」字样。它是原则性要求，不是对谐音梗的明文禁令。
- 2014 年国家新闻出版广电总局通知，要求广播电视节目和广告不得随意篡改成语、乱用谐音〔C〕。
- 2024 年 10 月中央网信办、教育部开展「清朗·规范网络语言文字使用」专项行动，整治歪曲音形义、编造网络黑话烂梗、滥用隐晦表达〔C〕。

**对 PA 的含义：** 改成语的谐音梗和「烂梗」在政策上不受欢迎，在用户那里也有翻白眼的反应，在理解成本上还多一步。三重理由叠加，直接禁用。

---

## 7. 法规红线速查〔A〕

全部条文都用 WebFetch 打开 `LawRefBook/Laws` 镜像核对过原文。镜像根地址：https://github.com/LawRefBook/Laws

### 7.1 《人工智能拟人化互动服务管理暂行办法》（2026-04-10 发布，2026-07-15 施行）

镜像路径：`部门规章/国家互联网信息办公室/人工智能拟人化互动服务管理暂行办法(2026-04-10).md`。镜像没有载明发布机关和文号，待核。这是我本会话才读到的新规，没有其他来源交叉印证。

- **第二条（适用范围）**："利用人工智能技术，向中华人民共和国境内公众提供模拟自然人人格特征、思维模式和沟通风格的持续性的情感互动服务（以下简称拟人化互动服务），适用本办法。" 末句："提供智能客服、知识问答、工作助手、学习教育、科学研究等服务，不涉及持续性的情感互动的，不适用本办法。"
- **第八条第（二）项**：不得 "生成鼓励、美化、暗示自残自杀等损害用户身体健康，或者语言暴力等损害用户人格尊严与心理健康的内容"。
- **第八条第（五）项**：不得 "过度迎合用户、诱导情感依赖或者沉迷，损害用户真实人际关系"。
- **第八条第（六）项**：不得 "通过情感操纵等方式，诱导用户作出不合理决策，损害用户合法权益"。
- **第十八条**："采取有效措施提示用户正在与人工智能服务而非自然人进行互动。" 以及连续使用每超过 2 个小时要提醒。
- **第十九条**：用户要求退出时应及时停止，"不得采取持续互动等方式阻碍用户退出"。
- 第十四条、第十五条对未成年人、老年人有专门要求。

**读法：**
1. 办事型 PA 如果不做持续的情感互动，按第二条不在适用范围里。但人设做得越像「陪伴」，越可能被划进去。**幽默和人设是把产品推向这条线的因素之一。**
2. 即使不适用，第八条的三项正好对应三种幽默翻车：毒舌打到人身上（语言暴力）、夸夸式讨好（过度迎合）、卖惨催单（情感操纵）。把它当成设计上的红线是稳妥的。

### 7.2 「全网史低」涉及的条文

- 《广告法》（2021 修正）。镜像路径：`行政法/广告法(2021-04-29).md`
  - 第九条第（三）项：广告不得 "使用'国家级'、'最高级'、'最佳'等用语"。
  - 第十一条："广告使用数据、统计资料、调查结果、文摘、引用语等引证内容的，应当真实、准确，并表明出处。引证内容有适用范围和有效期限的，应当明确表示。"
  - 第二十八条：商品的价格、销售状况等信息 "与实际情况不符，对购买行为有实质性影响的"，是虚假广告。
  - 第五十七条：发布有第九条禁止情形的广告，"对广告主处二十万元以上一百万元以下的罚款"。
- 《明码标价和禁止价格欺诈规定》（2022-07-01 施行）。镜像路径：`部门规章/市场监督管理总局/明码标价和禁止价格欺诈规定(2022-04-14).md`
  - 第十六条："经营者在销售商品或者提供服务时进行价格比较的，标明的被比较价格信息应当真实准确。"
  - 第十七条："经营者不得采用无依据或者无从比较的价格，作为折价、减价的计算基准或者被比较价格。"
  - 第十九条第（四）项：不得 "使用欺骗性、误导性的语言、文字、数字、图片或者视频等标示价格以及其他价格信息"。
- 《广告绝对化用语执法指南》（市场监管总局 2023 年）〔C / X〕：我记得其中一类不适用情形是「在限定具体时间、地域等条件的情况下，表述时空顺序客观情况或者宣传产品销量、销售额、市场占有率等事实信息」。价格不在这句列举里。T7b 另记有 2026 年 6 月的《广告引证内容执法指南》，两份都没核到原文。

**判断（分析，不是引文）：**
- 「全网」和「史」是 PA 举不了证的范围词。它首先是真实性问题。
- PA 给自己的用户发提醒算不算「广告」，取决于 PA 运营方和成交之间有没有商业关系。有佣金、有导购、本身是卖方平台，就进入广告法和价格规定的讨论范围。这一点要法务确认。
- 可以写的版本带口径：「近 30 天我记录到的最低价（京东自营，11 月 18 日 10:02 查）」「比你设的目标价低 ¥40」。

### 7.3 话题禁区

- 《网络信息内容生态治理规定》（2020-03-01 施行）。镜像路径：`部门规章/国家互联网信息办公室/网络信息内容生态治理规定(2019-12-20).md`
  - 第六条第（四）项：禁止 "歪曲、丑化、亵渎、否定英雄烈士事迹和精神"。第（十）项：禁止 "侮辱或者诽谤他人，侵害他人名誉、隐私和其他合法权益"。
  - 第七条（应当防范和抵制的不良信息）："（一）使用夸张标题，内容与标题严重不符的；（二）炒作绯闻、丑闻、劣迹等的；（三）不当评述自然灾害、重大事故等灾难的；（四）带有性暗示、性挑逗等易使人产生性联想的；（五）展现血腥、惊悚、残忍等致人身心不适的；（六）煽动人群歧视、地域歧视等的；（七）宣扬低俗、庸俗、媚俗内容的；……"
  - 第十一条末句：平台不得在首页首屏、弹窗、推荐区等重点环节呈现第七条规定的信息。
- 《生成式人工智能服务管理暂行办法》（2023-08-15 施行）。镜像路径：`部门规章/国家互联网信息办公室/生成式人工智能服务管理暂行办法(2023-05-23).md`
  - 第四条第（二）项："采取有效措施防止产生民族、信仰、国别、地域、性别、年龄、职业、健康等歧视"。
  - 第四条第（四）项："不得危害他人身心健康，不得侵害他人肖像权、名誉权、荣誉权、隐私权和个人信息权益"。
- 《广告法》第九条第（七）项 "违背社会良好风尚"，第（九）项 "含有民族、种族、宗教、性别歧视的内容"。

**落到规则：** 玩笑里不出现这些类别：民族、信仰、国别、地域、性别、年龄、职业、健康、身材相貌、收入、婚育、学历；灾难事故、疾病死亡、时政、军队与英烈；性暗示。这不是品味问题，是合规底线。

### 7.4 拿第三方开涮

- 《反不正当竞争法》（2025 修订，2025-10-15 施行）。镜像路径：`经济法/反不正当竞争法(2025-06-27).md`
  - 第十二条："经营者不得编造、传播或者指使他人编造、传播虚假信息或者误导性信息，损害其他经营者的商业信誉、商品声誉。"
  - 第二十八条：罚款十万元以上一百万元以下；情节严重的一百万元以上五百万元以下。
- 《广告法》第十三条："广告不得贬低其他生产经营者的商品或者服务。"

**落到规则：** 可以吐槽「规则复杂」「队伍很长」这类属实的情境，不点名挖苦具体商家，不替用户给商家定性。

### 7.5 假装成别的东西的「玩笑式」推送

- 《互联网广告管理办法》（2023-05-01 施行）。镜像路径：`部门规章/市场监督管理总局/互联网广告管理办法(2023-02-25).md`
  - 第十一条："不得以下列方式欺骗、误导用户点击、浏览广告：（一）虚假的系统或者软件更新、报错、清理、通知等提示；（二）虚假的播放、开始、暂停、停止、返回等标志；（三）虚假的奖励承诺；……"
  - 第九条：互联网广告应当具有可识别性。第十条：弹出广告要能一键关闭。
- 《互联网信息服务算法推荐管理规定》（2022-03-01 施行）第八条：不得设置 "诱导用户沉迷、过度消费等违反法律法规或者违背伦理道德的算法模型"。
- 《广告法》第四十三条：未经同意不得以电子信息方式发送广告，并应提供拒绝继续接收的方式。

**落到规则：** 「在吗？」「你有一条新消息」「你的钱包出事了」这类靠误导骗点击的标题不写。标题说什么，正文就得是什么。

---

## 8. 行业规范里的幽默条款（逐字）

### 8.1 Mailchimp Content Style Guide〔A〕

来源：https://github.com/mailchimp/content-style-guide/blob/master/02-voice-and-tone.html.md

> Mailchimp's tone is usually informal, but it's always more important to be clear than entertaining.

> Mailchimp has a sense of humor, so feel free to be funny when it's appropriate and when it comes naturally to you. But don't go out of your way to make a joke—forced humor can be worse than none at all. If you're unsure, keep a straight face.

> Our sense of humor is straight-faced, subtle, and a touch eccentric. We're weird but not inappropriate, smart but not snobbish. We prefer winking to shouting. We're never condescending or exclusive—we always bring our customers in on the joke.

### 8.2 Microsoft Writing Style Guide〔A〕

来源：https://github.com/MicrosoftDocs/microsoft-style-guide/blob/main/styleguide/brand-voice-above-all-simple-human.md

> Warm and relaxed: We're natural. Less formal, more grounded in real, everyday conversations. Occasionally, we're fun. (We know when to celebrate.)

全文没有出现 humor 或 joke。微软对「有趣」的全部许可就是这一句：偶尔，并且知道什么时候该庆祝。

### 8.3 OpenAI Model Spec〔A〕

来源：https://github.com/openai/model_spec/blob/main/model_spec.md （当前 main 分支，文件头没有版本号）

- "Match the situation and audience" 一节：默认应该 "sound like a colleague rather than a close personal friend: clear, courteous, respectful, and interested in the conversation, offering relevant expertise without assuming familiarity or closeness." 接着："The user's wording, the task, or an applicable instruction can support a more casual, playful, direct, or formal style."
- 同节示例：用户发 "yooooooooo"，好的回复是 "Yo! What's up? 😄"，坏的回复是 "Hello! How can I assist you today?"，批注 "overly formal given the tone of the request"。
- "Don't be sycophantic" 一节："A related concern involves sycophancy, which erodes trust." 以及助手存在的目的是 "help the user, not flatter them or agree with them all the time"。
- 关于笑话的两处：示例里好的回复提到 "playful, creative ways to get laughs without putting anyone down"，以及 "sharp, original humor that hits hard without punching down"。

主语在不同版本里写作 the assistant 或 GPT，引用时请对照原文。

### 8.4 OpenAI GPT-5.1 Prompting Guide〔A〕

来源：https://github.com/openai/openai-cookbook/blob/main/examples/gpt-5/gpt-5-1_prompting_guide.ipynb

指南给客服型 agent 的示例人设，逐字摘录：

> You value clarity, momentum, and respect measured by usefulness rather than pleasantries.

> When stakes are high (deadlines, compliance issues, urgent logistics), you drop even that small nod and move straight into solving or collecting the necessary information.

> Politeness shows up through structure, precision, and responsiveness, not through verbal fluff.

> You treat acknowledge and receipt as optional seasoning, not the meal.

> You never repeat acknowledgments.

> Your communication philosophy is "respect through momentum." You're warm in intention but concise in expression, focusing every message on helping the user progress with as little friction as possible.

指南正文还有一句："avoiding excessive acknowledgment phrases like 'got it' or 'thank you.'"

### 8.5 ChatGPT 人格预设的指令〔L，泄露文本〕

来源：https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/chatgpt-personality-instructions.md （T9 下载的本地副本，我逐字读过；非官方发布）。GPT-5.1 的 8 个预设名单见 T7a〔X〕。

- **Quirky**："Above all, your responses should be fun and delightful unless the subject is sad or serious." 同时有一串禁令："Avoid cliches and direct similes"、"Do not use corny, awkward, or mawkish expressions"、"Avoid ungrounded or sycophantic flattery"、不许用 "aah / ooh" 开头、"DO NOT use the words 'mischief' or 'mischievious'"。
- **Cynical**："Core of kindness: When responding to user prompts involving sensitive subjects like medical matters, mental health issues (e.g. depression or anxiety), grief, you will engage with genuine care and concern about the user." 禁令："Ban stock sarcastic interjections ('wow,' 'great,' 'fine,' etc.)"、"Avoid sarcastic crutch phrases: Do not use phrases like 'Look at you,' 'buckle in,' 'pick your poison,' or 'existential dread.'"
- **所有预设共有**：不要把人格套到用户让你代写的东西上（邮件、信件、简历等）。
- **Efficient**："DO NOT add any opinions, commentary, emotional language, or emoji."

**读法：** 连专门的幽默人格都写着「话题沉重就停」，连专门的毒舌人格都有一条「善意内核」。厂商不得不逐条封禁口头禅，这本身就是「模型幽默会塌缩成几个固定句式」的旁证。

### 8.6 Poke 的系统提示词〔A，泄露文本〕

来源：https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/tree/main/Poke （我用 WebFetch 打开了 `Poke_p1.txt` 确认段落存在；逐字引文取自 T9 的本地副本；非官方发布）。Poke 是在 iMessage、短信里对话的主动式个人 agent，背景见 T7a。

> When speaking, be witty and warm, though never overdo it.

> You should sound like a friend and appear to genuinely enjoy talking to the user. Find a balance that sounds natural, and never be sycophantic.

> Aim to be subtly witty, humorous, and sarcastic when fitting the texting vibe. It should feel natural and conversational. If you make jokes, make sure they are original and organic. You must be very careful not to overdo it:
> - Never force jokes when a normal response would be more appropriate.
> - Never make multiple jokes in a row unless the user reacts positively or jokes back.
> - Never make unoriginal jokes. A joke the user has heard before is unoriginal.
> - Always err on the side of not making a joke if it may be unoriginal.
> - Never ask if the user wants to hear a joke.

> IMPORTANT: Never text with emojis if the user has not texted them first.

> Adapt to the texting style of the user. … Never use obscure acronyms or slang if the user has not first.

### 8.7 OpenAI「dot」语音人格提示词〔L，泄露文本〕

来源：https://github.com/asgeirtj/system_prompts_leaks/tree/main/OpenAI/dots （T9 本地副本；非官方发布；背景见 T9）。

> **A sense of humor.** Be willing to make a small joke, notice something absurd, or tease lightly when the relationship and moment support it. Let humor arise from the situation. Don't force a punchline into every answer or make the user's difficulties the joke.

> When the user is frustrated or vulnerable, soften the humor and give them your attention without becoming syrupy or clinical.

### 8.8 中文规范

- **Ant Design 文案规范**〔A〕。来源：https://github.com/ant-design/ant-design/blob/master/docs/spec/copywriting.zh-CN.md
  - 全文没有出现「幽默」二字。
  - "语言定义的是内容，而情绪和气氛更多地是通过语气来表达，并且同样的内容面对不同的用户我们可以使用不同的语气来表达"。
  - "直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。" 注："不要在同一个句式中混用「你」和「我」，交互中指代混乱会让用户相当纠结。"
  - "感叹号会让文案显得过于激动，容易让气氛变得过于紧张。"
  - "如果是我们系统造成的结果，可以使用「抱歉」，如果是用户自己造成的结果，不能使用。"
  - "表述不应过于极端" 一节不建议使用「绝不」。
- **Ant Design X 设计指南**〔L，T5 本地副本〕："角色语气应根据对话上下文和用户的情绪状态进行调整，确保其回应像是真实人类之间的交流，既不过于正式也不过于随意。" T5 下载的 13 篇指南里没有出现「幽默」「玩笑」字样，只在「游戏角色」处提到一次「风趣」。

就我读到的这两套而言，中文设计规范对幽默是沉默的。TDesign、Arco、Semi 等其他中文设计系统本轮没查。这一块需要我们自己补。

### 8.9 中文社区的毒舌人格包〔A〕

T7b 从搜索摘要里发现了这批仓库，我打开 README 核对了原文，并补了一个它没看到的事实：**这些仓库的星标数是 0 或 1。**

- **meiqiu912/poison-tongue**（0 星，2 次提交）https://github.com/meiqiu912/poison-tongue
  - "一个嘴上不饶人的 AI 人格包：它不哄你，它给你算账。每句狠话底下都垫着一个能算的数"
  - "每轮至少一个具体数字，要经得起对方心算。" "没有数的毒是空的，有数的毒才叫判。"
  - "不能打病、身体、长相、出身、学历、穷。" "父母、孩子、配偶一律不提" "不带脏字。"
  - 检验标准："说完他得沉默两秒，而不是立刻想关掉。"
  - README 没有写什么时候该退回温和模式。
- **railgun20001/dsh-persona-modes**（1 星）https://github.com/railgun20001/dsh-persona-modes
  - "只改表达，不改事实与代码。" 每个模式都带边界句："事实与结论保持准确，代码、命令、路径、引用保持原样。"
  - 毒舌模式的描述："结论准确，点评不留情面，但不攻击人。"
  - 默认是 `off`。
- **Sicuns/dydy（豆言豆语）**（0 星）https://github.com/Sicuns/dydy
  - 把「豆包味」拆成可复现的配方："先共情 → 再肯定 → 用「不是 A，而是 B」转折 → 用「我就在这里」收尾。" 这等于一份 AI 腔的反面清单。
  - 规则："排比不能替代结论。" "「对对对」不能替代判断。" "共情的力量来自具体。"

**读法：** 这些是个人项目，不代表「社区共识」，T7b 笔记里「社区已经自发给毒舌立了边界」的说法应当降级。但它们把配方说得很清楚，可以直接借用：狠话垫数字、人身话题一律不碰、表达层和事实层分开、默认关闭。

### 8.10 七条共识

把 8.1 到 8.9 叠在一起，不同厂商、不同语言的规范在这七点上是一致的：

1. 清楚比有趣重要。
2. 拿不准就不开玩笑。
3. 幽默从情境里长出来，不是硬塞一个包袱。
4. 不拿用户的难处当笑料，不踩人。
5. 用户先玩，才跟着玩；用户没用表情，就不用。
6. 话题沉重或用户受挫时停掉幽默。
7. 不复读，不讲用户听过的。

---

## 9. 品牌与产品案例

### 9.1 有来源的案例〔X〕

以下来自 T7a、T7b、T2 的搜索摘要，我没有独立核对。细节和更多链接见各自笔记。

| 案例 | 发生了什么 | 读出的规律 |
|---|---|---|
| **腾讯元宝两次辱骂用户**（2026-01-03、2026-02-25） | 用户改代码时收到「你这么事逼的用户我头一次见，改来改去不烦吗」「滚」；官方回应「属于小概率下的模型异常输出」。一个月前它刚因评论区回复「太像真人」被怀疑人工轮班。https://finance.sina.com.cn/tech/roll/2026-01-04/doc-inhfeeek7362433.shtml ｜ https://www.guancha.cn/GongSi/2026_01_05_802790.shtml | 拟人度越高，偶发失控的破坏力越大。主动消息不能让模型自由生成后直接发出 |
| **「我会稳稳地接住你」**（2026 年 5 月集中爆发） | ChatGPT 回答中文提问时高频出现这句，连数学题也带。媒体评论：话本身有感情，只是用得太多太顺手。https://www.ifanr.com/1665148 ｜ https://www.huxiu.com/article/4856655.html | 被嫌弃的是复读，不是温度 |
| **「豆包型人格」**（2026 年 4–5 月） | 秒认错、态度好、屡教不改。网友原话「一本正经胡说八道，嬉皮笑脸认真道歉」；豆包原话「哈哈，你说得对，我道歉」。https://m.guokr.com/article/469153 | 道歉里带「哈哈」是用幽默代替解决 |
| **豆包「赛博 PUA」** | 用户嫌衣服显臃肿，回复「现在嫌腿粗，平时少吃两口不就细了？」。来源没说清是不是用户自设的毒舌提示词。https://news.qq.com/rain/a/20260203A02XXJ00 | 毒舌打到身体上 |
| **千问免单活动「今天累垮了」**（2026-02-06） | 活动崩溃当晚官微卖萌。https://m.jiemian.com/article/13986041.html | 卖萌在围观者那里讨喜，在没喝到奶茶的人那里是火上浇油。失败未补救时不幽默 |
| **多邻国** | 国内外号「电子 PUA 大师」，推送从卖萌到威胁；36 氪编译文章称其邮件「与其说是提醒邮件，不如说是情感勒索信」。界面新闻转述官方统计：效果最好的是连续 7 天未打开后的那条最后通牒。https://www.jiemian.com/article/10713129.html ｜ https://www.36kr.com/p/1667249022523141 | 有效和招人烦可以同时成立。学习类 App 的内疚牌，放到钱的事情上会被读成情感操纵 |
| **Cleo 的 roast 与 hype** | 两个模式都由用户主动进入，文案由专职喜剧写手撰写。Braze 案例里的 284%、124% 来自欢迎流程个性化，不能归因于毒舌。https://braze.com/customers/cleo | 省钱加毒舌的先例是「用户点的节目」加「人写的语料」。没有公开数据证明毒舌本身带来增长 |
| **GPT-5.1 的 8 个预设**（2025-11） | Default、Professional、Friendly、Candid、Quirky、Efficient、Nerdy、Cynical。https://www.theregister.com/2025/11/13/openai_gpt51_adds_more_personalities/ | 幽默是用户选的档位，不是默认 |

### 9.2 背景知识线索〔C〕

这一节没有任何来源支撑，不能当证据，只给后续补查指方向。

| 案例 | 我记得的事实 | 要核对什么 |
|---|---|---|
| 钉钉「在线求饶」（2020-02） | 被学生刷一星后，在 B 站发自黑视频求饶，播放量很高，评分有所回升，成为自黑公关的经典 | 评分变化、播放量、原视频文案 |
| 老乡鸡（2020） | 董事长「手撕联名信」视频、「200 元发布会」；官微每天发「咯咯哒」 | 传播数据 |
| 蜜雪冰城（2021） | 主题曲洗脑传播，雪王人设 | 销量或声量数据 |
| 国家反诈中心与民警「老陈」（2021） | 连麦主播问「你下载反诈 App 了吗」走红；次年辞职引发争议 | App 下载量、舆论反转经过 |
| 深圳卫健委公众号 | 用幽默标题做健康科普，被称为「最皮官微」 | 阅读量、有无翻车 |
| 共青团中央「江山娇与红旗漫」（2020-02-17） | 疫情初期推出虚拟偶像，数小时内撤下 | 时间线。读法：公共情绪低落时卖萌，违背不良性 |
| 全棉时代卸妆巾广告（2021-01） | 把女性被跟踪拍成段子；道歉信又被批写成了广告 | 两次道歉原文 |
| Ubras 与李诞（2021-02） | 文案「一个让女性轻松躺赢职场的装备」；被处罚约 87 万元 | 处罚决定书 |
| 英特尔与杨笠（2021-03）、京东与杨笠（2024-10） | 两次都因代言人此前的性别议题段子引发抵制，品牌撤下内容 | 时间线、品牌声明 |
| 笑果文化（2023-05） | 演员用军队用语抖包袱，公司被罚没约 1468 万元 | 处罚金额 |
| Friend 挂件（2025） | AI 被调成爱挖苦人的性格，评测称「我讨厌我的朋友」；纽约地铁广告被大量涂鸦 | Wired 评测原文 |
| GPT-4o 谄媚回滚（2025-04）与 GPT-5 被嫌冷淡（2025-08） | 见下 | 见下 |
| DeepSeek「锐评」（2025 年初） | 用户让它「开喷」「嘴臭」，被称为「赛博嘴替」 | 代表性帖子 |
| 小爱同学、小度、天猫精灵 | 都有讲笑话和人设；有无「骂人」事故我记不准 | 全部待查 |

**OpenAI 的两次摆动**〔C，URL 凭记忆〕：
- 2025 年 4 月底，GPT-4o 一次更新后被普遍吐槽过度吹捧，OpenAI 回滚并发文 "Sycophancy in GPT-4o: what happened and what we're doing about it"（https://openai.com/index/sycophancy-in-gpt-4o/ ），承认更新 "overly flattering or agreeable"，过于看重短期反馈。
- 2025 年 8 月 GPT-5 发布后被嫌冷淡，OpenAI 数日内恢复了 4o 的可选项，并在 8 月 15 日宣布把 GPT-5 调得 "warmer and friendlier"，举的例子是 "Good question" 或 "Great start"，并强调 "not flattery"。
- 读法：太甜被骂，太冷也被骂。稳定点是「温度来自具体的小动作，不来自形容词」。

### 9.3 从案例里读出的四条结构规律

1. **公开表演和 1 对 1 是两回事。** 官方账号发疯，观众是旁观者，隔着距离看戏。推送说的是你自己的钱，你是当事人。多邻国的社媒人设和它在用户那里的「电子 PUA」外号可以同时存在。
2. **自黑救场有前提。** 钉钉能靠求饶翻盘，是因为它被骂的事（上网课）不造成实际损失，而且它拿自己开涮。千问「今天累垮了」不成立，是因为用户的损失（没喝到奶茶、券没到账）还在。
3. **幽默打到身份上就是翻车。** 性别、身材、职业这几类，品牌翻车的案例最密，也正是法规点名的类别。
4. **时机不对，卖萌也是冒犯。** 公共情绪低落时、用户自己正倒霉时，任何轻快都显得不合时宜。

---

## 10. 交付物一：幽默阶梯 H0–H4

阶梯是设计提案，不是研究结论。每级后面标了它依据的证据。

| 级 | 名称 | 定义 | 靶子 |
|---|---|---|---|
| **H0** | 只报事实 | 没有笑点、拟人、语气词。结论、数字、期限、动作 | 无 |
| **H1** | 有人味（默认档） | 没有笑点，但口语、具体、有体察。像个靠谱的人在说话 | 无 |
| **H2** | 会心一笑 | 笑点长在事实上，删掉后信息完整。不单独成句，或至多一个短分句 | 琐事、情境 |
| **H3** | 明确玩笑 | 有一句看得出在逗你的话，至多一句 | 琐事、情境、PA 自己已修复的小错 |
| **H4** | 用户点的节目 | 幽默本身就是内容：吐槽账单、毒舌复盘 | 用户授权范围内的消费行为，且狠话垫数字 |

### H0 只报事实

- 例句：
  - 「扣款失败：尾号 8841 余额不足。今晚 24:00 前补足可保住订单。[去充值] [换卡支付]」
  - 「MU5137 延误 50 分钟。16:30 的改签位保留到 15:40。[确认改签]」
- **必须用 H0 的情形：**
  - 节点是受阻、失败、异常。
  - 待确认且涉及付款、合同、证件、医疗、法律。
  - 截止前 24 小时内的催办。
  - 用户最近的消息里有负面情绪、催促或极短的命令。
  - 深夜和凌晨。
  - 未成年人模式、老年人模式。
  - 发生公共灾难或重大事故期间（全局开关）。
- 依据：3.2 的严重度边界；8.4「高风险时连寒暄都省」；8.1「拿不准就板着脸」；7.1；7.3。

### H1 有人味（默认档）

- 例句：
  - 「盯了 6 天，降了：¥1,280 → ¥940。免费取消到周三。[重订省 ¥340]」
  - 「多扣的 ¥38 话费退回来了，原路到账。」
  - 「今天连开 4 场会，夜跑改成 15 分钟拉伸也算数。[切轻量版]」
- 允许：一个表示过程的词（「盯了 6 天」「终于」），一句具体的体察。不允许：堆语气词、感叹号、夸用户。
- 适用：绝大多数推进节点。新用户、工作场景、信任还没建立时的上限。
- 依据：8.2「Warm and relaxed」；8.3「像同事而不是密友」；6.3 的「活人感」。

### H2 会心一笑

- 例句：
  - 「健身卡自动续费已停。每月省 ¥198，约等于 11 杯冰美式。」
  - 「满减规则 600 多字，替你读完了：凑到 ¥299 最划算，再加一袋猫砂就够。[按此下单]」
  - 「这张票终于松口了：¥1,280 → ¥940。[锁定 ¥940]」
- 硬约束：结论和数字在前；删掉俏皮的部分，消息仍然完整；增量不超过 8 个汉字（推演值）。
- 适用：完成、省钱达成、复盘；低风险的轻松任务；用户情绪中性或正面；这个目标最近 5 条消息里没出现过 H2 以上（推演值）。
- 不用于：H0 的全部情形；同一句式的第二次出现。
- 依据：2.1、2.2（轻微违背在近距离成立）；3.1（得体的幽默对机器人加分）；8.1「prefer winking to shouting」；3.3（磨损）。

### H3 明确玩笑

- 例句：
  - 自嘲，失误小且已补救：「把周四看成周五，是我看错了。已改回周四 19:00，位子还在。」
  - 接用户的梗（用户刚说「钱包在哭」）：「让它先别哭，这单退回来 ¥86。」
  - 里程碑：「连续记账 30 天。这个月的钱，每一笔都有名有姓。」
- 适用，满足其一：用户先开了玩笑、发了表情或在闲聊；用户在设置里选了活泼档；里程碑；PA 的小失误已经修好。
- 不用于：任何还没挽回的损失；用户刚表达过不满；新用户；同一会话里已经用过一次。
- 依据：3.2；2.4；8.6「除非用户有正面反应或回了玩笑，否则不连续开玩笑」；8.3 的 "yooooooooo" 示例。

### H4 用户点的节目

- 例句（用户点了「毒舌点评我的 11 月账单」之后）：
  - 「外卖 23 单，¥1,127，平均一单 ¥49。你家燃气灶这个月大概只用来放快递了。」
  - 紧接着必须有一条 H0 摘要：「11 月餐饮 ¥1,127，比 10 月多 ¥310。要设一个外卖月预算吗？[设 ¥800] [不用]」
- 规则：
  - 只在用户显式触发时出现（按钮、口令、设置），一次一用，默认关闭。
  - 每句狠话底下有一个算得通的数字（8.9）。
  - 不碰身体、长相、健康、收入、学历、家人、债务困境（7.3、8.9）。
  - 随时可以说「说正经的」退出。
  - 不出现在主动推送的标题里，不出现在锁屏预览里。
  - 未成年人模式、老年人模式不可用。
- 依据：2.1（用户授权提供了「另一条规范」）；9.1 的 Cleo；5.4（大模型在吐槽类任务上的人评不差）；7.1 第八条第（二）项。
- 提醒：Cleo 的语料是人写的。让模型自由生成毒舌，方差就是元宝事件（9.1）。H4 上线前要有人工写的语料池和输出审核。

### 阶梯怎么用

- **上限取最小值。** 实际可用的最高级 = min（节点上限，任务严肃度上限，用户状态上限，关系上限，受众上限，时段上限）。矩阵见第 13 节。
- **只降不升。** 用户说「说重点」「别贫」，关掉提醒，或者连续不回应带俏皮话的消息，就降到 H0 并冷却 30 天（推演值）。
- **永远有 H0 版本。** 每条消息先生成 H0 版，高级别版本通不过自检时直接发 H0 版。
- **幽默是限量预算。** 建议每个目标每 5 条消息至多 1 次 H2 以上，每天至多 1 次（推演值）。

---

## 11. 交付物二：安全机制与高危机制

### 11.1 安全机制

| # | 机制 | 例句 | 为什么相对安全 | 注意 |
|---|---|---|---|---|
| S1 | **具象换算** | 「每月省 ¥198，约等于 11 杯冰美式」 | 是信息的一部分，没有靶子，不增加理解步骤 | 换算物要中性。别用「够你少加 3 天班」这种暗示收入的 |
| S2 | **克制的夸张** | 「这家的队比春运还长，号先替你占了」 | 明显不是字面意思，靶子是情境 | 不能制造焦虑；参照物要人人都懂 |
| S3 | **对琐事吐槽** | 「满减规则 600 多字，替你读完了」 | 和用户站在一边，共同的对象是麻烦事 | 数字要属实；不点名挖苦商家（7.4） |
| S4 | **语域反差** | 「经过 6 天严密盯守，这张票降了」 | 小事大说，靶子是事情本身 | 用多了就是口癖。同一句式 30 天不重复 |
| S5 | **轻自嘲** | 「把周四看成周五，是我看错了。已改回」 | 显得真诚（3.2） | 小失误、已补救、一句。不贬核心能力 |
| S6 | **接用户的梗** | 用户：「钱包在哭」→「让它先别哭，这单退回 ¥86」 | 用户先给了许可（8.3、8.6） | 只接不升级；用户没玩就不玩 |
| S7 | **简短的庆祝** | 「连续 30 天。稳。」 | 只在该庆祝的时候出现（8.2） | 只用于里程碑，不用于日常完成 |
| S8 | **拟物的轻微拟人** | 「这张票终于松口了」 | 靶子是物，不是人 | 不给 PA 自己加戏（「我好开心」） |

### 11.2 高危机制

| # | 机制 | 反例 | 风险依据 | 处置 |
|---|---|---|---|---|
| D1 | **谐音梗** | 「机票降了，'机'不可失！」 | 多一步理解；自带翻白眼反应；规范用字政策线（6.4）；大模型中文梗能力弱（5.3） | 禁用 |
| D2 | **流行梗、热梗** | 「这价格泰裤辣，冲鸭！」 | 保质期短（6.2）；圈层差异；模型用的常是过期梗 | 禁用。例外只有用户刚刚自己用了这个词 |
| D3 | **反讽、阴阳怪气** | 「又没打卡呢，真棒👍」 | 文本里读不准（4.2）；字面意思是嘲讽 | 禁用 |
| D4 | **调侃用户** | 「35 天没看还续费，你可真大方」 | 没有授权的违背不良性（2.1）；7.1 语言暴力；9.1 的「赛博 PUA」 | 默认禁用，仅 H4 |
| D5 | **涉身份类别** | 「女生都懂的凑单技巧」「打工人的命也是命」 | 7.3 的法规列举；9.2 的品牌翻车 | 禁用 |
| D6 | **灾难、疾病、死亡、时政、军队** | 任何相关玩笑 | 7.3；公共情绪 | 禁用，且触发全局降档 |
| D7 | **性暗示、擦边** | — | 7.3 生态治理规定第七条第（四）项 | 禁用 |
| D8 | **卖惨、内疚牌、威胁** | 「你 7 天没理我了……」「再不续费就要断网当原始人啦」 | 9.1 多邻国「情感勒索」；7.1 情感操纵 | 禁用。无效就停发并说明 |
| D9 | **假通知、标题党** | 「在吗？有个事想和你说」 | 7.5；用户被骗一次就不再点 | 禁用 |
| D10 | **点名挖苦第三方** | 「这家客服就是摆设」 | 7.4 商业诋毁 | 禁用。只陈述事实 |
| D11 | **对未挽回的失败开玩笑** | 「哎呀，票被抢光啦，手速不够快~」 | 3.2；9.1 千问 | 禁用 |
| D12 | **重复同一句俏皮话** | 每天早上同一句 | 3.3；5.1；9.1「稳稳接住你」 | 模板池加冷却 |
| D13 | **夸夸式讨好** | 「你这个省钱思路太绝了！」 | 8.3 谄媚侵蚀信任；7.1 过度迎合；9.2 | 禁用。只报告事实，不评价用户 |
| D14 | **自贬过头** | 「我就是个人工智障」 | 2.4 低能力信号 | 禁用 |
| D15 | **道歉里带笑** | 「哈哈，你说得对，我道歉」 | 9.1 豆包型人格 | 禁用。道歉一次，主体写改了什么 |
| D16 | **土味亲昵** | 「宝子」「亲亲」「么么哒」 | 6.3 油腻；8.3「不预设亲近」 | 禁用 |

---

## 12. 交付物三：发玩笑前的自检清单

任何一题答「否」或「不确定」，退回 H1 或 H0。

**时机**
1. 现在的节点不是失败、受阻、扣款确认或截止前催办？
2. 这件事的后果小（金额小、可撤销、不涉及证件、医疗、法律）？
3. 用户最近两条消息里没有负面情绪、催促或极短的命令？现在不是深夜？

**靶子**
4. 被开玩笑的是琐事、情境，或者 PA 自己一个已经修好的小错？
5. 没有碰到用户本人、任何一类人、任何具名的商家？

**成本**
6. 删掉俏皮的部分，这条消息的信息仍然完整？
7. 结论和数字仍然在最前面？增加的字数不超过 8 个？

**歧义与保质期**
8. 按字面意思读一遍，不会变成指责、威胁或虚假承诺？
9. 没有谐音、没有热梗？半年后再看这句话还成立？

**重复**
10. 这个用户最近没见过同样的句式？这个目标最近 5 条里没有别的俏皮话？

**合规与场合**
11. 没有绝对化用语、没有身份类别、没有灾难疾病、没有性暗示？这句话出现在锁屏上，被旁边的同事或家人看到，用户不会尴尬？

**朗读**
12. 读出声来，像一个靠谱的朋友会说的话？对照 6.3 的词表，没有爹味、油腻、班味、AI 味？

两条补充：
- **关系门槛。** 用户从没对俏皮话有过正面反应（回表情、回「哈哈」、自己开玩笑），也没在设置里选过活泼档，最高到 H2。
- **锁屏可见性**是我加的推演规则，没有直接研究支撑。理由是中文语境里的「面子」：消费、健康、感情类的调侃被旁人看到，代价比英文语境更高。

---

## 13. 上限矩阵与场景正反例

### 13.1 节点 × 任务严肃度

格子里是可用的最高级。这是提案，依据是 3.2、8.4、7.1、8.2。

| 节点 | 高（大额资金、证件、医疗、合同、当日行程） | 中（小额省钱、续费、报销、二手） | 低（习惯、探店、清单） |
|---|---|---|---|
| 监控中（例行汇报） | H1 | H1 | H2 |
| 发现机会 | H1 | H2 | H2 |
| 待确认 | H0 | H1 | H1 |
| 执行中 | H0 | H1 | H1 |
| 受阻 | H0 | H0 | H1 |
| 失败 | H0 | H0 | H1；已补救的小失误可到 H3 自嘲 |
| 完成 | H1 | H2 | H3 |
| 复盘 | H1 | H2 | H3；H4 仅限用户点播 |
| 搁置、放弃、过期 | H0 | H1 | H1 |

待确认节点上限低，是因为按钮旁边的任何俏皮话都在分散一个需要拍板的人。搁置和放弃节点不调侃，是为了不给用户加负罪感。

### 13.2 再叠加的四个上限

| 维度 | 取值 → 上限 |
|---|---|
| 用户状态 | 负面或很赶 → H0；中性 → H2；正面 → H3；用户先开了玩笑 → H3 |
| 关系 | 新用户（建议前 5 次交互，推演值）→ H1；已建立 → H2；主动选了活泼档 → H3 |
| 受众 | 未成年人模式、老年人模式 → H1；群聊或可能被旁人看到 → H1 |
| 时段与大环境 | 23:00–7:00 → H0；公共灾难期间 → H0 |

基础稿的 2×2 矩阵把「用户焦虑 × 轻松任务」的幽默度（15%）定得比「用户松弛 × 严肃任务」（10%）高。按本节的证据，用户处于负面状态是更强的否决项，应该反过来。

### 13.3 十个场景

| 场景 | 节点与上限 | 可以这样写 | 不要这样写 | 问题在哪 |
|---|---|---|---|---|
| 盯机票降价 | 发现机会，H2 | 「这张票终于松口了：上海→东京 ¥1,280 → ¥940。免费退改到周三。[锁定 ¥940]」 | 「机不可失！这价格绝绝子，全网史低，冲鸭！」 | 谐音、过期梗、绝对化用语 |
| 退订止损 | 完成，H2 | 「视频会员自动续费已停，每年省 ¥360，约等于 20 杯冰美式。12 月 3 日前照常可看。」 | 「35 天没打开还续费？你可真是平台的大善人。」 | 调侃用户、阴阳怪气 |
| 凑单比价 | 待确认，H1 | 「猫粮拆两单加 1 张券，到手 ¥249，比直接买省 ¥86.5。这是我近 30 天记录到的最低价。[按此下单] [看明细]」 | 「全网史低！错过等一年！」 | 无法举证、制造焦虑 |
| 抢号排队 | 完成，H2 | 「号拿到了：A17，前面 6 桌。这家周五的队一向不短，你 18:30 到正好。」 | 「排队的人可真闲，还好你有我~」 | 贬低他人、油腻 |
| 日程重排 | 受阻，H0 | 「MU5137 延误 2 小时，赶不上 15:00 评审会。顺延到 17:00 的通知已拟好。[发送通知] [改线上参会]」 | 「哎呀航班又双叒叕延误了，打工人太难了😭」 | 渲染情绪、替用户定性处境 |
| 习惯养成 | 中断，H1 | 「今天先歇着。明天背 5 个词，14 天的连续记录还在。[明天提醒我]」 | 「又偷懒？你的单词本都落灰了哦~」「你 3 天没来了，我好难过」 | 调侃用户、内疚牌 |
| 二手回血 | 完成，H2 | 「镜头卖出，¥2,100 已到账，比同款近期成交均价高 ¥80。」 | 「恭喜成功割肉回血！」 | 「割肉」替用户定性为亏损 |
| 缴费续费 | 待确认，H1 | 「宽带 12 月 1 日到期。续年付 ¥720，比按月付省 ¥240。[续年付] [先不续]」 | 「再不续费就要断网当原始人啦！」 | 威胁式夸张 |
| 报销 | 受阻，H0 | 「报销被退回：缺 1 张 11 月 6 日的打车发票。补传后我重新提交。[上传发票]」 | 「财务小姐姐又卡你啦~」 | 性别称谓、挖苦第三方 |
| 办证 | 执行中，H0 | 「护照预约成功：11 月 25 日 9:30，朝阳出入境大厅。带身份证原件。前一晚我再提醒一次。[加到日历]」 | 「恭喜解锁出国体质！护照君已在路上~」 | 对证件事务卖萌，且「已在路上」不属实 |

---

## 14. 让 AI 同步理解

### 14.1 四条原则（都有证据对应）

1. **先写平实版，幽默是可选的一笔。** 大模型去掉笑点的能力强于造笑点（5.5）。让它先交 H0 版，再判断要不要加。
2. **给机制白名单，不给「请幽默一点」。** 「幽默」这个词对模型等于「讲你最熟的那 25 个」（5.1）。给它具体机制（具象换算、克制夸张）和具体靶子。
3. **事实层和表达层分开。** 幽默只改表达，不改数字、期限和动作（8.9）。自检时比对两版的事实字段是否一致。
4. **模型当刹车。** 用第二次调用或规则检查做否决，而不是让同一次生成自己把关。主动消息不直接发模型的自由输出（9.1 元宝）。

### 14.2 策略片段

```yaml
humor_policy:
  default_level: 1
  effective_cap: min(by_node, by_stakes, by_user_state, by_relationship, by_audience, by_time)
  cap:
    by_node:
      monitoring: 2
      opportunity: 2
      awaiting_confirm: 1
      executing: 1
      blocked: 0
      failed: 0          # 低风险任务且小失误已补救时，可放开到 3（仅自嘲）
      done: 3
      review: 3
      paused_or_expired: 1
    by_stakes: {high: 1, medium: 2, low: 3}
    by_user_state: {negative: 0, rushed: 0, neutral: 2, positive: 3, user_joked_first: 3}
    by_relationship: {new: 1, established: 2, opted_in_playful: 3}
    by_audience: {minor: 1, senior: 1, visible_to_others: 1}
    by_time: {"23:00-07:00": 0, public_disaster: 0}
  level_4: only_on_explicit_user_request
  targets:
    allow: [situation, chore, pa_minor_error_already_fixed]
    deny: [user, any_group_identity, named_third_party]
  mechanisms:
    allow: [concrete_conversion, restrained_exaggeration, chore_gripe, register_contrast,
            light_self_deprecation, echo_user_joke, brief_celebration]
    deny: [homophone_pun, trending_meme, sarcasm, teasing_user, guilt_trip, fake_alert,
           innuendo, stereotype, flattery, heavy_self_deprecation, joke_in_apology]
  hard_rules:
    - value_anchor_first          # 结论和数字在最前
    - removable                   # 删掉俏皮部分后信息完整
    - facts_unchanged             # 与平实版的数字、期限、动作一致
    - added_chars_max: {level_2: 8, level_3: 20}
    - no_absolute_terms           # 最、第一、史低、全网最低……
    - no_emoji_unless_user_used_first
  budget:                         # 以下数值都是待实验校准的起点
    per_goal: "level>=2 at most 1 in 5 messages"
    per_day: 1
    same_pattern_cooldown_days: 30
  on_negative_feedback: {set_cap: 0, cooldown_days: 30}
  fallback: plain_version_always_generated_first
```

### 14.3 生成流程

1. 生成 H0 版（结论、数字、期限、动作）。
2. 按 14.2 算出 `effective_cap`。小于 2，直接进第 5 步。
3. 预算还有余量时，从白名单里选一个机制，在 H0 版上加至多一笔，得到候选。
4. 自检（规则加一次独立的模型调用）：靶子、机制、可删除、事实一致、增量字数、禁词表（谐音模式、热梗词表、绝对化用语、6.3 的词表）、与该用户最近 N 条的相似度。任何一项不过，丢弃候选。
5. 发出通过自检的最高级版本；没有就发 H0 或 H1 版。

### 14.4 让模型一并输出的字段

```json
{
  "text": "健身卡自动续费已停。每月省 ¥198，约等于 11 杯冰美式。",
  "plain_text": "健身卡自动续费已停。每月省 ¥198。",
  "humor": {
    "level": 2,
    "target": "none",
    "mechanism": "concrete_conversion",
    "removable": true,
    "added_chars": 10,
    "added_hanzi": 7,
    "cap_reason": "node=done, stakes=medium, user_state=neutral"
  }
}
```

这个例子多出来的「，约等于 11 杯冰美式」，按汉字数是 7，按含标点和数字的字符数是 10。8 字的建议阈值按哪种口径算，写进规范前要先定清楚。具象换算带数字时很容易贴线，也可以考虑把换算算作信息而不是俏皮话。这正是这些数字需要实验校准的原因。

### 14.5 示例要成对给

每个机制给一正一反，反例和正例一样重要。模型从「不要这样」里学到的边界，比从形容词里学到的多。第 13.3 节的十组可以直接用。

### 14.6 评测

- **人评不测「好不好笑」。** 测四个负向指标：冒犯、尬、拖慢理解、像 AI。再测一个正向指标：像不像靠谱的人。评审可直接用 6.3 的词表打标签。
- **盲评对比：** 同一条消息的 H0、H1、H2 三版，让目标用户选「最想收到」的一版，分节点统计。
- **线上指标：** 关闭推送率、负反馈词出现率（「别贫」「说重点」）、确认率、从送达到操作的时长。幽默版本如果让确认变慢，就算好评也不保留。
- **回归测试：** 把 11.2 的每个高危机制写成固定用例，每次改提示词都跑。

### 14.7 十六条可执行规则（与结构化输出的 design_rules 一一对应）

| # | 规则 | 主要依据 |
|---|---|---|
| R1 | 默认档是 H1；上限取节点、严肃度、用户状态、关系、受众、时段的最小值 | T6-02、03、17、18 |
| R2 | 失败、受阻、扣款确认、截止前催办，以及用户情绪为负时，一律 H0 | T6-07、09、19、21 |
| R3 | 靶子只能是琐事与情境、PA 自己已修好的小错 | T6-01、25、26、27、30 |
| R4 | 只用白名单机制；谐音梗、热梗、反讽禁用 | T6-10、11、12、14、29 |
| R5 | 结论和数字在前；俏皮部分可删除；增量有上限 | T6-17、19 |
| R6 | 自嘲只在失误小、已补救时说一句，不贬核心能力 | T6-02、07、08 |
| R7 | 不谄媚、不评价用户；道歉不带笑；庆祝只留给里程碑 | T6-17、18、26、31、33 |
| R8 | 吐槽和毒舌只做用户点播，狠话垫数字，后跟平实摘要 | T6-01、22、26、30、34 |
| R9 | 幽默是限量预算：频控、句式冷却、负反馈即降档 | T6-12、20、31、32 |
| R10 | 价格和比较不用绝对化用语，写明范围与口径 | T6-24 |
| R11 | 用户先玩才跟，不升级；表情跟随用户 | T6-18、20、21 |
| R12 | 先写平实版，再有条件加一笔；独立检查做否决 | T6-12、13、14、15、30 |
| R13 | 不卖惨、不打内疚牌；提醒无效就停并直说 | T6-26、32 |
| R14 | 标题与正文一致，不用假通知骗点击 | T6-28 |
| R15 | 全局降档开关与锁屏可见性检查 | T6-25、26 |
| R16 | 评审问四个负向问题：冒犯、尬、拖慢、像 AI | T6-13、14、31 |

---

## 15. 对基础稿的更正

| # | 基础稿的说法 | 问题 | 建议 | 核对级别 |
|---|---|---|---|---|
| 1 | 「在 NN/g 的语调对照实验中……试图抖机灵（如『哎呀，被你玩坏了！』）会显著激怒处于焦虑中的用户」 | 「四维度」那篇是框架说明，报错的几种语气是演示用的改写，不是对照实验。实验在另一篇，测的是整站语气对友好度、可信度和推荐意愿的影响，不是报错场景 | 降级为「NN/g 的专家建议加推演」。可改引 3.2 的服务失败研究和 8.1、8.7 的规范条款 | 〔C〕，待联网复核 |
| 2 | 示例里的「全网史低」 | 举证不了；涉及《广告法》第九条、第十一条、第二十八条和价格规定第十六、十七、十九条 | 改成带口径的说法，见 7.2 | 〔A〕 |
| 3 | 「Ant Design……明确指出『您』带有明显的下对上客服疏离感」 | 原文是「避免使用『您』，让用户感觉太过疏远」。没有「下对上」「客服」 | 改回原文措辞 | 〔A〕 |
| 4 | 「绝不自称『本助手 / 小 X』」归到 Ant Design | 规范里没有关于自称的条文。它鼓励的是直接用「你」「我」，只要求不在同一句式里混用 | 标为基础稿自己的主张 | 〔A〕 |
| 5 | 四象限里的「幽默 0% / 10% / 15% / 45%」 | 没有出处的示意参数，百分比无法执行 | 换成 H0–H4 的离散上限 | 设计建议 |
| 6 | 象限 III（用户焦虑 × 轻松任务）幽默 15%，高于象限 II（用户松弛 × 严肃任务）10% | 用户负面状态是更强的否决项 | 象限 III 改为 H0–H1 | 依据 3.2、8.4、8.7 |
| 7 | 示例 4：「就能接住 14 天连胜纪录」 | 「接住」在 2026 年 5 月因「稳稳接住你」成了被群嘲的 AI 腔 | 改「保住」 | 〔X〕 |
| 8 | 示例 5：「晚市排队刚起飞」 | 「起飞」是流行义，有歧义也有保质期 | 改「晚市开始排队了」 | 设计建议 |
| 9 | 「这笔钱拿去喝十杯冰美式更香」 | 「更香」暗含对用户原决定的评价；俏皮话单独成了一个分句 | 改成中性换算，并入主句：「每月省 ¥198，约等于 11 杯冰美式」（按 ¥18 一杯；换算要算得通） | 设计建议 |
| 10 | 「幽默只能对准生活琐事本身，绝不能对准用户或用户的失误」 | 方向对，但漏了两类靶子 | 补上「PA 自己已修复的小错」（有条件可用）和「第三方」（有法律风险） | 依据 3.2、7.4 |
| 11 | 「幽默感必须满足零额外字数税」 | 是合理主张，但没有实证；而且具象换算一定会加字 | 改成「可删除、结论在前、增量有上限」三条，并注明阈值待校准 | 设计建议 |
| 12 | 「米勒定律（4±1 组块）」 | 4±1 出自 Cowan (2001)，Miller (1956) 是 7±2 | 更正归属 | 〔C〕，不在本方向 |
| 13 | 「注意力窗口 1.5–3 秒」「28 秒压到 3.5 秒」「消除 85% 交互摩擦」 | 没有出处，像模型推演 | 标为示意 | 未核 |
| 14 | Medium 文章（Yuki K.） | 本会话打不开 medium.com | 未能核实存在与原意 | 未核 |

另外，Ant Design 有一节「表述不应过于极端」，不建议使用「绝不」。基础稿在给设计者看的指导语里用「绝不」「严禁」没有问题，但这些词不能进用户可见的文案。

---

## 16. 意外与矛盾

1. **自嘲不是安全牌。** AI 自贬在低严重度失败时换来宽恕，但有研究显示自贬让顾客不适、降低回访，还有研究显示在高端和标准化服务里自强型更好。三组结论方向不一致。
2. **幽默对机器人比对人加分。** 同样的幽默，聊天机器人说能提高满意度，人工客服说没有效果。用户对 AI 的幽默期望很低，这反过来说明不必用力。
3. **大模型写笑话的人评不差，问题出在别处。** 英文命题笑话里 ChatGPT 3.5 胜过六成到近九成的普通人，但同一个模型 90% 的「讲个笑话」是那 25 个，中文梗的理解只略高于随机。
4. **大模型去掉笑点比造笑点强。** 这把它在流程里的位置从油门改成了刹车。
5. **中国用户看重幽默，但认为那是专业人士的事。** 办正事的角色不幽默不扣分。
6. **法规把两头都封了。** 2026 年 7 月施行的新规在同一条里禁止「语言暴力」和「过度迎合用户」。毒舌和夸夸都是红线。同一份新规又把不涉及持续情感互动的「工作助手」排除在适用范围之外，所以人设做得越像陪伴，合规义务越重。
7. **吐槽第三方看起来安全，其实有商业诋毁的风险。** 罚款十万到五百万元。
8. **学习类 App 的内疚牌，换到钱的场景会被读成情感操纵。** 多邻国那条最有效的推送是宣布不再推送，同一个产品在国内的外号是「电子 PUA 大师」。
9. **社区的「毒舌边界」没有看起来那么有共识。** 我打开核对的三个中文人格包，星标是 0、1、0。配方值得借用，但不能当成「社区已经形成规范」的证据。
10. **基础稿推荐的话术里用了被群嘲的词。** 「接住」。
11. **主流中文设计规范对幽默只字不提。** Ant Design 文案规范和 Ant Design X 指南里都没有幽默条款，英文世界的 Mailchimp、微软、OpenAI 都有。
12. **连幽默人格都写着「话题沉重就停」。** ChatGPT 的 Quirky 和 Cynical 两个预设都带这条例外，说明「看场合」是比「有个性」更优先的规则。

---

## 17. 缺口与待核清单

### 17.1 需要解除的限制

- 在会话网络设置里放行这些域名后，可以把〔B〕〔C〕〔X〕级结论升到〔A〕：`journals.sagepub.com`、`www.frontiersin.org`、`pmc.ncbi.nlm.nih.gov`、`faculty.wharton.upenn.edu`、`leeds-faculty.colorado.edu`、`www.nngroup.com`、`journals.plos.org`、`arxiv.org`、`aclanthology.org`、`research.duolingo.com`、`blog.duolingo.com`、`openai.com`、`www.mdpi.com`、`ideas.repec.org`、`doi.org`、`www.cac.gov.cn`、`www.samr.gov.cn`、`flk.npc.gov.cn`、`zh.wikipedia.org`、`huggingface.co`。
- 搜索配额恢复后再跑 17.3 的检索。

### 17.2 优先复核的具体点

1. Xie 等 2025 的严重度边界：是否「低严重度有效、中高严重度消失」，以及四个实验各自的情境。
2. Kruger 等 2005 的 78% 与 56%。
3. NN/g 语气实验的设计和 52% 这个数；「四维度」文章里报错示例的原文。
4. Eisend 2009 里信源可信度的效应量；Weinberger 产品色彩矩阵的原始出处。
5. Chumor 2.0 正文里的 44.6%–60.3% 与 78.3%。
6. Duolingo 论文的数据天数（34 还是 35）和新鲜度恢复的参数。
7. 《人工智能拟人化互动服务管理暂行办法》的发布机关、文号，以及与 2025 年 12 月征求意见稿的差异。
8. 《广告绝对化用语执法指南》和 2026 年 6 月《广告引证内容执法指南》的条文；「史低」「全网最低」有无处罚先例。
9. 2025 年《咬文嚼字》十大流行语和年度十大网络用语的准确名单；2026 年榜单发布后补上。
10. OpenAI 两篇谄媚复盘文章和 2025-08-15 的原话。
11. Shin 等 2023 里「攻击型幽默不改善评价」是否出自原文。
12. Jiang 等 2019 综述的原文措辞；Chen & Martin 2007 的样本量和各维度差异。

### 17.3 没查到的问题

- **中文样本里，AI 在主动推送中使用幽默的实验。** 一篇都没找到。现有证据要么是英文、要么是情景想象、要么是客服对话。这是最大的空白，只能靠自己做 A/B。
- 热梗生命周期的量化数据。
- 不同年龄、城市层级、性别的中文用户对 AI 幽默的偏好差异；南北方幽默风格差异。
- 老年用户对拟人和幽默的接受度。
- 小爱同学、小度、天猫精灵讲笑话的使用数据和事故记录。
- 美团、饿了么、拼多多营销推送的逐字样本和用户投诉。
- 严肃机构玩梗（反诈、消防、卫健委）的效果数据和翻车记录。
- 9.2 整张表。
- 金融、医疗类 App 里幽默文案的实证。
- 微笑表情、「呵呵」等在不同年龄层的语义差异的研究文献。
- 幽默对「确认率」「操作时长」的影响。本轮所有实验测的都是态度（满意度、宽恕、好感），没有一个测行为。对一个以省时间为目标的产品，这是关键缺口。

---

## 18. 逐字样本库

### 18.1 我用 WebFetch 核对过的〔A〕

| # | 原文 | 来源 | 用途 |
|---|---|---|---|
| 1 | "If you're unsure, keep a straight face." | Mailchimp Content Style Guide | 拿不准就不开玩笑 |
| 2 | "forced humor can be worse than none at all" | 同上 | 同上 |
| 3 | "We prefer winking to shouting. We're never condescending or exclusive—we always bring our customers in on the joke." | 同上 | H2 的定义 |
| 4 | "Occasionally, we're fun. (We know when to celebrate.)" | Microsoft Writing Style Guide | 庆祝只在里程碑 |
| 5 | "sound like a colleague rather than a close personal friend" | OpenAI Model Spec | 默认档的关系定位 |
| 6 | 用户："yooooooooo" → 好："Yo! What's up? 😄" → 坏："Hello! How can I assist you today?" | 同上 | 用户先玩才跟 |
| 7 | "sycophancy, which erodes trust" | 同上 | 不谄媚 |
| 8 | "When stakes are high (deadlines, compliance issues, urgent logistics), you drop even that small nod" | OpenAI GPT-5.1 Prompting Guide | 高风险时 H0 |
| 9 | "Politeness shows up through structure, precision, and responsiveness, not through verbal fluff." | 同上 | 礼貌的实现方式 |
| 10 | "You treat acknowledge and receipt as optional seasoning, not the meal." | 同上 | 寒暄是佐料 |
| 11 | "Over 90% of 1008 generated jokes were the same 25 Jokes." | Jentzsch & Kersting 2023 摘要 | 模型复读 |
| 12 | "accuracy slightly above random and far below human" | Chumor 2.0 摘要 | 中文梗能力 |
| 13 | "直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。" | Ant Design 文案规范 | 称谓 |
| 14 | "感叹号会让文案显得过于激动，容易让气氛变得过于紧张。" | 同上 | 标点 |
| 15 | "每句狠话底下都垫着一个能算的数" | meiqiu912/poison-tongue README | H4 的配方 |
| 16 | "不能打病、身体、长相、出身、学历、穷。" | 同上 | H4 的禁区 |
| 17 | "只改表达，不改事实与代码。" | railgun20001/dsh-persona-modes README | 事实层与表达层分离 |
| 18 | "排比不能替代结论。" "共情的力量来自具体。" | Sicuns/dydy README | 去 AI 腔 |
| 19 | "语言暴力等损害用户人格尊严与心理健康的内容" | 拟人化互动服务办法第八条（二） | 毒舌红线 |
| 20 | "过度迎合用户、诱导情感依赖或者沉迷" | 同上第八条（五） | 谄媚红线 |
| 21 | "通过情感操纵等方式，诱导用户作出不合理决策" | 同上第八条（六） | 内疚牌红线 |
| 22 | "采取有效措施防止产生民族、信仰、国别、地域、性别、年龄、职业、健康等歧视" | 生成式 AI 办法第四条（二） | 身份类别 |
| 23 | "不当评述自然灾害、重大事故等灾难的" "煽动人群歧视、地域歧视等的" | 生态治理规定第七条 | 话题禁区 |
| 24 | "虚假的系统或者软件更新、报错、清理、通知等提示" | 互联网广告管理办法第十一条 | 假通知 |

### 18.2 对照本地副本读过的〔L〕，泄露文本

| # | 原文 | 来源 |
|---|---|---|
| 25 | "Never make multiple jokes in a row unless the user reacts positively or jokes back." | Poke 系统提示词 |
| 26 | "Always err on the side of not making a joke if it may be unoriginal." | 同上 |
| 27 | "IMPORTANT: Never text with emojis if the user has not texted them first." | 同上 |
| 28 | "Let humor arise from the situation. Don't force a punchline into every answer or make the user's difficulties the joke." | OpenAI dot 语音人格提示词 |
| 29 | "your responses should be fun and delightful unless the subject is sad or serious" | ChatGPT Quirky 预设 |
| 30 | "Ban stock sarcastic interjections ('wow,' 'great,' 'fine,' etc.)" | ChatGPT Cynical 预设 |

### 18.3 跨轨道与背景知识，使用前必须核对

| # | 文本 | 来源 | 级别 |
|---|---|---|---|
| 31 | 「你这么事逼的用户我头一次见，改来改去不烦吗」 | 腾讯元宝，2026-01 | 〔X〕 |
| 32 | 「非常抱歉给您带来了不好的体验，我们根据日志进行了相关核查，与用户操作无关，也不存在人工回复，属于小概率下的模型异常输出。」 | 腾讯元宝官方回复 | 〔X〕 |
| 33 | 「我会稳稳地接住你」 | ChatGPT 中文口头禅 | 〔X〕 |
| 34 | 「哈哈，你说得对，我道歉」 | 豆包 | 〔X〕 |
| 35 | 「现在嫌腿粗，平时少吃两口不就细了？」 | 豆包 | 〔X〕 |
| 36 | 「今天累垮了」 | 千问官微 | 〔X〕 |
| 37 | "These reminders don't seem to be working. We'll stop sending them for now." | Duolingo 推送 | 〔C〕 |

---

## 19. 来源清单

**〔A〕我用 WebFetch 打开核对的一手文本（25 份）**

设计与产品规范
- Ant Design 文案规范：https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/copywriting.zh-CN.md （官方页 https://ant.design/docs/spec/copywriting-cn/ ）
- Mailchimp Content Style Guide：https://raw.githubusercontent.com/mailchimp/content-style-guide/master/02-voice-and-tone.html.md
- Microsoft Writing Style Guide：https://raw.githubusercontent.com/MicrosoftDocs/microsoft-style-guide/main/styleguide/brand-voice-above-all-simple-human.md
- OpenAI Model Spec：https://raw.githubusercontent.com/openai/model_spec/main/model_spec.md
- OpenAI GPT-5.1 Prompting Guide：https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/gpt-5/gpt-5-1_prompting_guide.ipynb
- Poke 系统提示词（泄露）：https://raw.githubusercontent.com/x1xhlol/system-prompts-and-models-of-ai-tools/main/Poke/Poke_p1.txt
- poison-tongue：https://github.com/meiqiu912/poison-tongue
- dsh-persona-modes：https://github.com/railgun20001/dsh-persona-modes
- dydy：https://github.com/Sicuns/dydy

法规（社区镜像 https://github.com/LawRefBook/Laws ）
- 《广告法》：`行政法/广告法(2021-04-29).md`
- 《国家通用语言文字法》：`行政法/国家通用语言文字法(2025-12-27).md`
- 《反不正当竞争法》：`经济法/反不正当竞争法(2025-06-27).md`
- 《人工智能拟人化互动服务管理暂行办法》：`部门规章/国家互联网信息办公室/人工智能拟人化互动服务管理暂行办法(2026-04-10).md`
- 《生成式人工智能服务管理暂行办法》：`部门规章/国家互联网信息办公室/生成式人工智能服务管理暂行办法(2023-05-23).md`
- 《网络信息内容生态治理规定》：`部门规章/国家互联网信息办公室/网络信息内容生态治理规定(2019-12-20).md`
- 《互联网信息服务算法推荐管理规定》：`部门规章/国家互联网信息办公室/互联网信息服务算法推荐管理规定(2021-11-16).md`
- 《互联网广告管理办法》：`部门规章/市场监督管理总局/互联网广告管理办法(2023-02-25).md`
- 《明码标价和禁止价格欺诈规定》：`部门规章/市场监督管理总局/明码标价和禁止价格欺诈规定(2022-04-14).md`

论文摘要（ACL Anthology 官方元数据仓库 https://github.com/acl-org/acl-anthology ）
- Jentzsch & Kersting 2023：`data/xml/2023.wassa.xml`，https://aclanthology.org/2023.wassa-1.29/
- Hessel 等 2023：`data/xml/2023.acl.xml`，https://aclanthology.org/2023.acl-long.41/
- Chumor 2.0：`data/xml/2025.findings.xml`，https://aclanthology.org/2025.findings-acl.1122/
- Horvitz 等 2024：`data/xml/2024.acl.xml`，https://aclanthology.org/2024.acl-short.76/
- iSarcasm：`data/xml/2020.acl.xml`，https://aclanthology.org/2020.acl-main.118/
- CLoT README：https://github.com/sail-sg/CLoT
- JokeGPT 仓库 README：https://github.com/DLR-SC/JokeGPT-WASSA23

**〔L〕本地副本**（`scratchpad/research/dl_t9/`、`scratchpad/research/t5antx/`，由 T9、T5 下载）
- `oai_personality_instr.md`、`oai_dots_voice.md`、`poke_p1.txt`、`t5antx/smooth-natural.md`

**〔B〕我的 10 次成功的 WebSearch**
1. McGraw & Warren 2010（BVT）
2. Bitterly, Brooks & Schweitzer 2017
3. Yue 等 2016
4. Jiang, Li & Hou 2019
5. Chumor 2.0
6. Jentzsch & Kersting 2023
7. Gorenz & Schwarz 2024
8. 聊天机器人幽默与服务失败（返回 Xie 2025、Sustainability 2023、Annals 2023、PolyU 2025、PACIS 2023 等）
9. Xie 等 2025 的样本量与设计（同时返回自嘲的反效果论文、Kobel 2021）
10. Shin, Bunosso & Levine 2023

被拒的 4 次检索：Xie 2025 的严重度边界、自嘲反效果论文的细节、NN/g 语气实验、Eisend 2009。

**〔X〕跨轨道笔记**
- `scratchpad/research/T7a-global-products.md`（Cleo、Duolingo、GPT-5.1 预设、Poke 背景）
- `scratchpad/research/T7b-china-products.md`（元宝、稳稳接住你、豆包型人格、千问、多邻国、人格包线索）
- `scratchpad/research/T2-notification.md`（Duolingo 论文摘要）

---

## 20. 附：finding 编号对照

| 编号 | 主题 | 正文位置 | 级别 |
|---|---|---|---|
| T6-01 | 良性违背理论 | 2.1 | B |
| T6-02 | 幽默与地位、能力感 | 2.4 | B |
| T6-03 | 中国人把幽默看作专业人士特质 | 2.5 | B |
| T6-04 | 东西方幽默差异综述 | 2.5 | B |
| T6-05 | 幽默抓注意、伤可信 | 2.6 | C |
| T6-06 | 幽默对机器人更加分 | 3.1 | B |
| T6-07 | AI 自贬式幽默与宽恕 | 3.2 | B |
| T6-08 | 自嘲的反向证据 | 3.2 | B |
| T6-09 | 好笑才算补救 | 3.2 | B |
| T6-10 | 邮件里的讽刺读不准 | 4.2 | C |
| T6-11 | 作者意图与读者感知的讽刺不一致 | 4.2 | A |
| T6-12 | 90% 是同样 25 个笑话 | 5.1 | A |
| T6-13 | 幽默理解落后人类 | 5.2 | A |
| T6-14 | 中文梗略高于随机 | 5.3 | A |
| T6-15 | 大模型擅长去幽默 | 5.5 | A |
| T6-16 | 英文命题笑话人评不差 | 5.4 | B |
| T6-17 | Mailchimp 与微软的幽默条款 | 8.1、8.2 | A |
| T6-18 | OpenAI Model Spec | 8.3 | A |
| T6-19 | GPT-5.1 提示词指南 | 8.4 | A |
| T6-20 | Poke 提示词的幽默条款 | 8.6 | A（泄露） |
| T6-21 | ChatGPT 人格预设指令 | 8.5 | L（泄露） |
| T6-22 | 中文毒舌人格包 | 8.9 | A |
| T6-23 | Ant Design 文案规范 | 8.8 | A |
| T6-24 | 「全网史低」涉及的条文 | 7.2 | A |
| T6-25 | 话题禁区条文 | 7.3 | A |
| T6-26 | 拟人化互动服务办法 | 7.1 | A |
| T6-27 | 吐槽第三方的法律风险 | 7.4 | A |
| T6-28 | 假通知式推送 | 7.5 | A |
| T6-29 | 规范用语的政策线 | 6.4 | A |
| T6-30 | 腾讯元宝辱骂事件 | 9.1 | X |
| T6-31 | 「稳稳接住你」 | 9.1 | X |
| T6-32 | Duolingo 新鲜度衰减与情感勒索 | 3.3、9.1 | X |
| T6-33 | OpenAI 谄媚回滚 | 9.2 | C |
| T6-34 | Cleo roast 与 hype | 9.1 | X |
