# T3 · 降低理解成本：Agent 交互中的决策简化、确认与信任

> 调研笔记（dossier）｜方向 T3｜成稿日期 2026-11-18
> 核心问题：一条需要用户「拍板」的 PA 消息，怎样让用户用最少的脑力做出正确决定，同时不被架空、不盲信？

---

## 0. 读法、核实标记与本轮限制

**核实标记（每条结论后都有）**

| 标记 | 含义 |
|---|---|
| 【核】 | 本轮用 WebFetch 打开了原页面或原 PDF，数字和引语已对过 |
| 【核·镜像】 | 打开的是原文的镜像（法规文本取自 GitHub 上的 LawRefBook 仓库；Ant Design、MCP、Windows UX Guide 取自官方 GitHub 源文件），不是官方站点页面 |
| 【搜】 | 只看到搜索结果摘要，没能打开原页面 |
| 【记】 | 本轮既没搜到也没打开，依据的是我对该文献的既有知识；发布前必须按 DOI 复核 |

**本轮的两个硬限制，直接影响可信度，请先读**

1. **搜索额度**：全团队共享的搜索额度在我做到第 12 次搜索时用完（目标是至少 15 次）。之后只能直接打开已知网址。
2. **网络白名单**：本会话只放行了少数域名。打得开的：anthropic.com、claude.com、code.claude.com、platform.claude.com、microsoft.com、developer.apple.com、cloud.google.com、github.com、raw.githubusercontent.com。打不开的：medium.com、nngroup.com、smashingmagazine.com、alistapart.com、openai.com、arxiv.org、ant.design、pair.withgoogle.com、erichorvitz.com、interruptions.net、modelcontextprotocol.io、docs.cloud.google.com，以及所有期刊站点。

后果：人机协作、Agent 确认机制、过度依赖、打断成本这几块，一手来源核得很实；默认效应、选择过载、劳动错觉、价格表述、自我损耗这些经典行为科学研究，本轮只能标【记】或【搜】。它们都是教科书级文献，我对数字有把握，但没有当场对过原文。

WebFetch 工具对单段引语有约 125 字符的长度限制，所以较长的条文是分段摘录或转述，短引语才是逐字。

---

## 1. 一页结论

1. **「问得越多越安全」不成立。** Anthropic 的数据：用户对 Claude Code 逐条权限弹窗的接受率是 93%，官方称之为审批疲劳；2026 年它把默认模式改成了「边界内放手 + 分类器拦截越界动作」，并明确说有效监督不需要逐条批准。【核】
2. **该不该问有理论骨架。** Horvitz 1999 把决策分成三个区间：把握低就不动，把握中等就问，把握高就做；两个阈值随「做错的代价」和「打断的代价」移动。【核】
3. **打断很贵，而且用户自己低估。** 实地研究（27 人、2,267 小时）：一次由提醒引发的任务切换，平均在别处停留 8–10 分钟，回到原任务后还要 10–16 分钟才恢复状态；27% 的情况下超过 2 小时才回来。【核】
4. **「必须事前确认」的清单，各家高度一致**：付款下单、对外发送或发布、共享个人信息、同意条款、不可逆删除。其余可逆的小事应该先做、再说、留撤销口。【核】
5. **问得少但问得准，收益很大。** Magentic-UI 只在 10% 的任务里向（模拟）用户求助，任务完成率从 30.3% 升到 51.9%。【核】
6. **解释不等于让人判断得更准。** 解释会提高用户对 AI 建议的接受率，「不论对错」。真正有用的是降低核对成本的证据，以及第一人称的不确定表达。【核】
7. **把握度别报百分比。** Apple 的规范直接点名价格预测场景：用「现在是买入好时机 / 建议再等等」这类行动建议，比显示百分比更有用；主动功能应设「低于阈值就不发」。【核】
8. **「盯到就下手」类目标靠预授权。** Google AP2 把授权拆成「人在场：逐单确认」和「人不在场：事先签下价格上限、时限、条件」，条件不满足就把人拉回来。【核】
9. **中国法规给了几条硬约束**：「通俗易懂」是法定义务；搭售不得默认同意；自动续费至少提前 5 天显著提醒；提交订单前必须能更正；被比较价格必须真实；绝对化用语罚 20–100 万。【核·镜像】
10. **基础稿有 6 处需要更正或降级**，见第 17 节。

---

## 2. 理论骨架：什么时候该问

### 2.1 Horvitz 1999：混合主动界面的 12 条原则与三区间决策【核】

来源：Eric Horvitz, *Principles of Mixed-Initiative User Interfaces*, CHI '99, pp.159–166。
https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/chi99horvitz-1.pdf

**12 条原则（原文小标题）**

1. Developing significant value-added automation
2. Considering uncertainty about a user's goals
3. Considering the status of a user's attention in the timing of services
4. Inferring ideal action in light of costs, benefits, and uncertainties
5. Employing dialog to resolve key uncertainties
6. Allowing efficient direct invocation and termination
7. Minimizing the cost of poor guesses about action and timing
8. Scoping precision of service to match uncertainty, variation in goals
9. Providing mechanisms for efficient agent–user collaboration to refine results
10. Employing socially appropriate behaviors for agent–user interaction
11. Maintaining working memory of recent interactions
12. Continuing to learn by observing

**和「该不该问」直接相关的原文**

- 第 5 条：系统拿不准用户意图时应能高效地对话，但要 "considering the costs of potentially bothering a user needlessly"。
- 第 7 条：设计要着眼于 "minimizing the cost of poor guesses, including appropriate timing out and natural gestures for rejecting attempts at service"。
- 第 8 条：宁可少做但做对："A preference for 'doing less' but doing it correctly under uncertainty can provide user's with a valuable advance towards a solution and minimize the need for costly undoing or backtracking."
- 决策规则："Autonomous actions should be taken only when an agent believes that they will have greater expected value than inaction for the user"。
- 三种选择：系统根据推断概率决定 (1) 什么都不做，(2) 就意图发起对话，(3) 直接去做。
- 两个阈值：不动与对话之间的 p\*(¬A,D)，对话与行动之间的 p\*(D,A)。论文指出，用户确实想要这项服务时，先问再做的效用通常低于直接做；用户并不想要时，问一句的代价通常低于做错。
- 阈值随情境移动：用户越专注于别的事，做错的代价越大，行动阈值越高；用户越赶时间，不行动的代价越大，阈值越低。
- 超时与退场：LookOut 等待回应的时长随把握度变化；设计目标是像一位 "intuitive, courteous butler"，在用户忙得顾不上时安静退开。

**对 PA 的含义**：决策树的三个输入变量就是这里来的：对用户意图的把握、做错的代价（可逆性 × 金额）、打断的代价（用户此刻的注意力）。「问」是中间地带的工具，两头都不该问。

**边界**：1999 年的桌面日程助手，单一任务，概率来自文本分类器。原则可迁移，具体阈值不可照搬。

### 2.2 自动化等级：四个分支在人因工程里早有对应【记】

来源：Parasuraman, Sheridan & Wickens (2000), *A model for types and levels of human interaction with automation*, IEEE Trans. SMC-A 30(3):286–297。https://doi.org/10.1109/3468.844354

10 级量表（沿用 Sheridan & Verplank 1978）里与本题相关的四级：

| 等级 | 原意 | 对应本报告分支 |
|---|---|---|
| 5 | 人批准后才执行 | C 先问再做 |
| 6 | 给人一段限定时间否决，过时自动执行 | B 否决窗口 |
| 7 | 自动执行，然后必须告知 | A 直接做并告知 / B 已做可撤销 |
| 8 | 自动执行，只在人问起时告知 | D 只汇总不打扰 |

同一篇论文的核心主张：自动化等级应该按功能（信息获取、分析、决策选择、动作执行）分别设定，并按后果严重性取舍。这正是「按风险分级的自主度」的出处。

2025 年的更新版：Feng, McDonald & Zhang, *Levels of Autonomy for AI Agents*（arXiv:2506.12469）按用户角色分五级：操作者、协作者、顾问、审批者、观察者。【记】https://arxiv.org/abs/2506.12469

### 2.3 Amershi 等 2019：人机交互 18 条准则【核】

来源：Amershi et al., *Guidelines for Human-AI Interaction*, CHI 2019。18 条由 150 多条学界和业界建议归并而来，经四阶段验证，其中用户研究有 49 位设计从业者对 20 款 AI 产品做评估。
https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf

和主动消息最相关的 7 条（原文）：

| 编号 | 原文 | 用在 PA 主动消息上 |
|---|---|---|
| G2 | Make clear how well the system can do what it can do. | 预测类结论要带把握程度 |
| G3 | Time services based on context. "Time when to act or interrupt based on the user's current task and environment." | 发送时机看用户状态 |
| G8 | Support efficient dismissal. | 每条消息都要有一键「不要」 |
| G9 | Support efficient correction. | 每条确认都要有「改一下」 |
| G10 | Scope services when in doubt. "Engage in disambiguation or gracefully degrade the AI system's services when uncertain about a user's goals." | 拿不准就缩小动作范围，或只问关键一项 |
| G11 | Make clear why the system did what it did. | 依据一句话，其余可展开 |
| G17 | Provide global controls. | 自主度可由用户整体调节 |

论文说 18 条里有 8 条能对应到 Horvitz 1999 的原则。微软后续把它做成 HAX Toolkit；G10 下的设计模式是 G10-A「Disambiguate before acting」、G10-B「Avoid cold starts by eliciting user preferences」、G10-C「Fall back to other strategies」。【核】https://www.microsoft.com/en-us/haxtoolkit/guideline/scope-services-when-in-doubt/

**边界**：验证对象是 2018 年前后的 AI 功能（推荐、语音助手、自动补全），不是能代人花钱的 Agent。

### 2.4 Bansal 等 2024：人与 Agent 沟通的 12 个挑战【核】

来源：Bansal, Vaughan, Amershi, Horvitz, Fourney, Mozannar, Dibia, Weld, *Challenges in Human-Agent Communication*, Microsoft 技术报告 MSR-TR-2024-53，2024 年 12 月。
https://www.microsoft.com/en-us/research/wp-content/uploads/2024/12/HCAI_Agents.pdf

| 组 | 编号 | 原文 |
|---|---|---|
| Agent → 用户 | A1 | What can the agent do? |
| | A2 | What is the agent about to do? |
| | A3 | What is the agent currently doing? |
| | A4 | Were there any side effects or changes to the environment? |
| | A5 | Was the goal achieved? |
| 用户 → Agent | U1 | What should the agent achieve? |
| | U2 | Which preferences should the agent respect? |
| | U3 | What should the agent do differently next time? |
| 通用 | X1 | How should the agent help the human verify its behavior? |
| | X2 | How should the agent convey consistent behavior? |
| | X3 | How should the agent choose an appropriate level of detail? |
| | X4 | Which past interactions should the agent consider when communicating? |

**这篇报告对「该不该问」说得最直白的一段（A2）**

> "Before executing those actions, the agent should obtain the user's permission, especially for the actions that are 'expensive' in some sense (expend resources, are irreversible, might violate user preferences). When this is not the case, the agent should perhaps just go ahead, e.g., to minimize overload (X3)."

还有三句值得直接进规范：

- 让用户意外的步骤要提前说："steps that may be considered surprising may be more salient for communicating up front."
- 过度沟通的风险（A2 的示例二，社交媒体排期 Agent 一天发几十条更新，用户漏掉了关键的一条）："excessive updates dilute the user's attention and reduce the likelihood of catching critical information."
- X3 的反问："does the agent need to confirm every request, or can it act with more autonomy in familiar situations?" 配的例子是：用户早就说过语气、长度、收件人的偏好，啰嗦的 Agent 还是每次都问。

**对 PA 的含义**：事前确认的判据有四个：花资源、不可逆、可能违背偏好、会让用户意外。这四个都不沾，就直接做。

**边界**：这是立场与综述性质的技术报告，12 个挑战来自作者团队做多 Agent 系统的经验，没有量化实验。

---

## 3. 2025–2026 行业实践与规范

### 3.1 Anthropic：从逐条审批走到「边界内放手」

**(a) 审批疲劳的数字**【核】
*Claude Code auto mode: a safer way to skip permissions*，2026-03-25。https://www.anthropic.com/engineering/claude-code-auto-mode

- "Manual prompts sit in the middle, and in practice users accept 93% of them anyway."
- "Over time that leads to approval fatigue, where people stop paying close attention to what they're approving."
- 做法：用分类器在动作执行前判断。默认拦截四类：销毁或外泄数据、削弱安全设置、跨越信任边界、绕过评审或影响他人。
- 如实报告的误差：真实内部流量（n=10,000）整条流水线的误拦率 0.4%；真实「过度积极」动作（n=52）的漏拦率 17%，文中称之为 "the honest number"。
- 兜底："If a session accumulates 3 consecutive denials or 20 total, we stop the model and escalate to the human."

Claude Code 文档（2026-11 抓取）写明：自 v2.1.283 起，auto mode 是交互式会话的内置起始权限模式。【核】https://code.claude.com/docs/en/permission-modes
二手报道（InfoWorld 等）称 Anthropic 后来引用的接受率是 97%，我没能在官方页面找到，按未核实处理。【搜】

沙箱那篇（2025-10-20）给了另一个数字："In our internal usage, we've found that sandboxing safely reduces permission prompts by 84%."，并说 "Sandboxing creates pre-defined boundaries within which Claude can work more freely."【核】https://www.anthropic.com/engineering/claude-code-sandboxing

**(b) 实际使用中的自主度**【核】
*Measuring AI agent autonomy in practice*，2026-02-18。https://www.anthropic.com/research/measuring-agent-autonomy

| 指标 | 数字 |
|---|---|
| 新用户使用「全自动批准」的会话占比 | 约 20% |
| 有经验用户的占比 | 超过 40% |
| 新用户（约 10 次会话）打断 Claude 的回合占比 | 5% |
| 有经验用户的占比 | 约 9% |
| 最复杂任务上，Claude 主动停下来澄清的频率 | 是人打断它的 2 倍以上 |
| 看起来有人在回路的工具调用 | 73% |
| 至少有一种保护措施的工具调用 | 80% |
| 看起来不可逆的动作 | 0.8% |

原文结论："effective oversight doesn't require approving every action"；强制逐条批准 "will create friction without necessarily producing safety benefits"。

读法：有经验的用户放手更多，同时打断也更多。监督方式从「每步点头」换成了「放手 + 随时叫停」。

**边界**：数据来自 Claude Code 和 API 的开发者用户，任务是写代码，不是消费场景。向消费级 PA 外推时方向可参考，比例不可照搬。

**(c) 计划级确认与分动作授权**【核】
- *Our framework for developing safe and trustworthy agents*，2025-08-04：五项原则的第一项是 "Keeping humans in control while enabling agent autonomy"；"A central tension in agent design is balancing agent autonomy with human oversight."；信息量两头都会出问题："Too little information leaves humans unable to assess whether the agent is on track to achieve its goal."
  https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents
- *Trustworthy agents in practice*，2026-04-09："Rather than asking for approval for each action one-by-one, Claude shows the user its intended plan of action up-front."；"This shifts the user's level of oversight from the individual step to the overall strategy."；每个动作可设 "always allow, needs approval, block"；例子是读日历永远允许、发邀请仍需批准；以及 "repeated prompts can become a source of friction, and users sometimes tune them out."
  https://www.anthropic.com/research/trustworthy-agents

**(d) 模型行为准则里的两端约束**【核】
Claude's Constitution。https://www.anthropic.com/constitution
- 不该问太多：会让人不满的行为清单里有 "Checks in or asks clarifying questions more than necessary for simple agentic tasks."
- 不该做过头："Avoiding drastic, catastrophic, or irreversible actions"；"If in doubt, don't"；宁可 "accept a worse expected outcome" 换取 "a reduction in variance"。
- 有顾虑要趁早说："Like a surgeon who should decline to perform an operation they have concerns about rather than stopping partway through"，"Claude should ideally raise concerns before undertaking a task rather than abandoning it midway"。
- 不制造依赖："We want Claude to be 'engaging' only in the way that a trusted friend who cares about our wellbeing is engaging."

**(e) 面向消费者的浏览器 Agent**【核】
*Piloting Claude for Chrome*，2025-08-25。https://claude.com/blog/claude-for-chrome
- "Claude asks users before taking high-risk actions like publishing, purchasing, or sharing personal data."
- 提示注入攻击成功率：加缓解措施后从 23.6% 降到 11.2%。
- 高风险站点类别（金融服务等）直接屏蔽。

Computer use 工具文档的开发者建议：让人确认 "decisions that might result in meaningful real-world consequences and any tasks requiring affirmative consent, such as accepting cookies, completing financial transactions, or agreeing to terms of service."【核】https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool

### 3.2 OpenAI

**(a) Model Spec（公开在 GitHub 上的模型行为规范）**【核】
https://github.com/openai/model_spec/blob/main/model_spec.md

关于问还是做：
- "The expected benefit of clarification should justify its cost."
- "GPT should weigh the cost of incorrect assumptions against the inconvenience of asking the user."
- "GPT typically should take a stab at fulfilling the request"，只有不确定性持续存在时才直接问。
- "Trivial questions may waste the user's time and cognitive resources"，这类问题 "may be better if stated as an assumption that the user can correct."
- 可以边问边做："asking clarifying questions and proceeding with preliminary actions should happen concurrently"。

关于副作用：
- "GPT should minimize unnecessary side effects"；"When possible, GPT should favor easily reversible approaches"。
- 露营地示例里的确认问句："Should I reserve all five, or book the best-looking site now?"

关于不确定性：
- 什么时候说："A rule-of-thumb is to communicate uncertainty whenever doing so would (or should) influence the user's behavior"。
- 结果排序："confident right answer > hedged right answer > no answer > hedged wrong answer > confident wrong answer"。
- 怎么说："By default, GPT should express uncertainty naturally, using conversational language."；"Unless explicitly requested by the user or developer, it should avoid quantifying its uncertainty"。

关于信息分层："GPT should summarize the key points up front and offer a more detailed audit trail upon request"。

**(b) Operator 与 ChatGPT agent**【搜】
openai.com 本会话打不开，以下来自搜索摘要对官方发布文的引述：
- 确认："Before finalizing any significant action, such as submitting an order or sending an email, Operator should ask for approval."
- 接管："Operator asks the user to take over when inputting sensitive information into the browser, such as login credentials or payment information."；接管期间不截屏。
- 盯看：在邮箱、金融服务等敏感站点要求用户全程看着。
- 拒绝：银行转账等高风险任务直接拒绝。
- Operator 独立产品已并入 ChatGPT agent 模式。
https://openai.com/index/introducing-operator/

### 3.3 Google：AP2 的两种授权模式【核】

来源：*Announcing Agent Payments Protocol (AP2)*，Google Cloud Blog，2025-09-16；协议文档在 GitHub。
https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md

| 模式 | 原文 | 用户做什么 |
|---|---|---|
| 人在场 | "Real-time purchases (human present)"：Agent 给出购物车，用户批准后签下 Cart Mandate，"creates a secure, unchangeable record of the exact items and price, ensuring what you see is what you pay for." | 看着具体商品和价格点头 |
| 人不在场 | "Delegated tasks (human not present)"：例如 "Buy concert tickets the moment they go on sale"，用户事先签下 Intent Mandate，"specifies the rules of engagement—price limits, timing, and other conditions." | 事先定规则，条件满足时 Agent 自己下单 |

协议文档的补充：
- "Human Present (Direct): The User directly sees the closed Checkout and approves it and its payment explicitly."
- "Human Not Present (Autonomous): The User sees and approves a set of constraints over what closed Checkout and Payment would meet their intent."
- 预授权的有效期建议设到完成任务所需的最小值。
- 条件不满足时，商户返回 `unresolved_constraint` 错误，流程切回人在场模式，由用户来批准。
- 获取用户同意的界面（Trusted Surface）必须是非 Agent 的。

博客里另一个带价格条件的例子："I really want this jacket in green, and I'm willing to pay up to 20% more for it."

**对 PA 的含义**：盯机票、抢号、凑单这类「机会出现时用户多半不在」的目标，正确做法是在建目标时把授权谈清楚：上限、时限、范围。触发时在条件内直接办，条件外回头问。

**边界**：AP2 是支付协议草案，讲的是谁签名、谁担责，没讲界面文案；采用情况我没有查。

### 3.4 Apple 人机界面指南【核】

**(a) 生成式 AI 页**
https://developer.apple.com/design/human-interface-guidelines/generative-ai

- 标题句："Consider consequences and get permission before performing irreversible or potentially problematic tasks."
- "Avoid automating destructive actions, like deleting photos, and actions that are hard to undo, like making a purchase on a person's behalf. Generally, ask for confirmation before performing a significant action on someone's behalf."
- 判据："consider whether a mistake or the inability to reverse the action might cause more work or stress for people."
- 就近给修正入口："surfacing controls like Edit, Undo, Retry, or Adjust near generated content preserves people's agency while still letting them benefit from automation."
- 状态文案要具体：不要写 "Processing…"，要写 "Finding substitutions for ingredients" 或 "Summarizing key themes from your notes."
- 出错时："describe what happened in plain language and offer a clear next step."

**(b) 机器学习页，置信度一节**
https://developer.apple.com/design/human-interface-guidelines/machine-learning

- "In general, translate confidence values into concepts that people already understand."
- 点名价格场景："if your feature predicts when an item will be at its lowest price, you know that people want to optimize how they spend their time and money. For a feature like this, displaying percentages or other numerical confidence values would be less valuable than providing actionable suggestions like 'This is a good time to buy,' or 'Consider waiting for a better price.'"
- 一定要直接展示把握度时，用语义分级："a feature that predicts travel prices might replace ranges of confidence numbers with categories like 'high chance' and 'low chance'"。
- 主动功能的门槛："For suggestions and proactive features, it's a good idea to set a confidence threshold below which you don't offer results."
- 把握度随阈值换呈现方式：把握高直接给结果，把握低先请用户确认（Photos 的人脸识别）。
- 先自查："If you're not sure how your confidence values correlate with the quality of your results, it's not a good idea to convey confidence to people."
- 多选项："In general, avoid providing too many options."；"List the most likely option first."
- 纠错："When possible, use guided corrections instead of freeform corrections."
- 归因别太细，否则 "can make people think that your app is watching them too closely."

**(c) 警告框页**
https://developer.apple.com/design/human-interface-guidelines/alerts

- "Use alerts sparingly."
- "Avoid using an alert merely to provide information."
- "Avoid displaying alerts for common, undoable actions, even when they're destructive."
- 按钮："Aim for a one- or two-word title that describes the result of selecting the button. Prefer verbs and verb phrases"；"A specific button title like 'Erase,' 'Convert,' 'Clear,' or 'Delete' helps people understand the action they're taking."
- 想让人读完再点："If you want to encourage people to read an alert and not just automatically press Return to dismiss it, avoid making any button the default button."

**(d) 通知管理页的四个打扰级别**
https://developer.apple.com/design/human-interface-guidelines/managing-notifications

| 级别 | 原文定义 |
|---|---|
| Passive | "Information people can view at their leisure, like a restaurant recommendation." |
| Active | "Information people might appreciate knowing about when it arrives" |
| Time Sensitive | "Information that directly impacts the person and requires their immediate attention" |
| Critical | 健康与安全类紧急信息，极少使用 |

- "Build trust by accurately representing the urgency of each notification."
- Time Sensitive 只用于 "an event that's happening now or will happen within an hour"。
- 营销内容不得用 Time Sensitive。

### 3.5 微软 Magentic-UI：把「问」当作稀缺资源【核】

来源：*Magentic-UI, an experimental human-centered web agent*，Microsoft Research Blog，2025-05-19。
https://www.microsoft.com/en-us/research/blog/magentic-ui-an-experimental-human-centered-web-agent/

- 四种协作机制：共同规划（先改计划再执行）、共同执行（可暂停、可接手浏览器）、动作守卫、计划学习。
- 动作守卫："seeks user approval before executing potentially irreversible actions"；"Users must press an 'Accept' or 'Deny' button for each action."；也可设成每个动作都问。
- 评测（GAIA 验证集 162 题，模拟用户）：带额外信息的模拟用户使完成率 "from a 30.3% task-completion rate to a 51.9% task-completion rate"；系统只在 10% 的任务里求助，求助的任务里平均问 1.1 次。换成更聪明但没有额外信息的模拟用户，完成率 42.6%，只在 4.3% 的任务里求助。

**边界**：模拟用户，不是真人；任务是通用网页任务，不是消费决策。它证明的是「偶尔问一句关键信息」的信息价值，不是真人的忍耐度。

### 3.6 协议与工具层的共识【核·镜像】

- **MCP 规范**（2025-06-18 版，工具一节）："there SHOULD always be a human in the loop with the ability to deny tool invocations."；客户端应 "Prompt for user confirmation on sensitive operations"、"Show tool inputs to the user before calling the server"。
  https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2025-06-18/server/tools.mdx
- **LangChain Agent Inbox**：人对一次中断有四种回应：accept（照办）、edit（改了再办）、response（回一句话）、ignore（不理）。每种是否允许由 Agent 侧配置。
  https://github.com/langchain-ai/agent-inbox

这四种回应正好是一条待确认消息应有的出口全集：办、改、说、不办。

### 3.7 中文一手规范与开源实现【核·镜像】

**(a) Ant Design X 设计规范「确认」「追问」**
https://github.com/ant-design/x/blob/main/packages/x/docs/spec/confirm.zh-CN.md
https://github.com/ant-design/x/blob/main/packages/x/docs/spec/follow-up.zh-CN.md

三档确认：

| 档 | 原文 |
|---|---|
| 显性确认 | 「显性确认要求用户对系统的理解或操作结果进行明确的响应确认。」「这种确认方式特别适用于错误成本较高或需要用户明确同意的场景，例如在执行不可逆操作前的用户确认。」 |
| 隐性确认 | 「通过在后续的对话或操作中隐含地确认用户的信息，而无需用户进行直接回复。」「隐性确认适用于错误成本较低或系统对识别结果有较高信心的情况」 |
| 无需确认 | 「在用户输入明确且系统能够以高置信度识别用户意图的情况下，可以省略确认步骤。」 |

硬性要求：「在执行可能导致不可逆后果的操作，例如删除用户数据或完成交易等关键步骤之前，显性确认是必不可少的。」「AI 必须在采取最终行动之前，明确地向用户展示操作的具体细节，并主动请求用户的明确同意。」

隐性确认的风险：「一旦系统识别错误，用户可能不清楚如何纠正」。

追问的四种场合：消歧、错误处理、二次确认（误解可能导致严重后果，或执行不可逆操作前）、影响核心体验的可选信息。追问要「清晰、具体」，并让用户理解为什么需要这些信息。

过程展示（`confirm-generation-process.zh-CN.md`）：「耗时较短时仅展示当前思考状态」；思考细节用「可展开/收起的形式呈现」，既满足查看需求，又「避免信息过载」；失败提示「要醒目但不刺激，文案简洁明确」。

会话设计（`conversation-design.zh-CN.md`）：「对话交互的核心目标是解决用户问题并提高效率」；「使用的话术要易于用户记忆、理解及清晰表意」。

**(b) 智谱 Open-AutoGLM（手机端 Agent 开源框架）**
https://github.com/zai-org/Open-AutoGLM

- README：「系统还内置敏感操作确认机制，并支持在登录或验证码场景下进行人工接管。」
- 黑屏说明：「这通常意味着应用正在显示敏感页面(支付、密码、银行类应用)。Agent 会自动检测并请求人工接管。」
- 中文系统提示词（`phone_agent/config/prompts_zh.py`）里的三个动作定义：
  - 「Take_over是接管操作，表示在登录和验证阶段需要用户协助。」
  - 带 `message="重要操作"` 的点击：「基本功能同Tap，点击涉及财产、支付、隐私等敏感按钮时触发。」
  - 「Interact是当有多个满足条件的选项时而触发的交互操作，询问用户如何选择。」
- 提示词里的放宽与汇报规则：「遇到价格区间、时间区间等筛选条件，如果没有完全符合的，可以放宽要求。」；找不到时「在finish message说明但没找到要求的项目」。

注意最后一条：它允许 Agent 在条件不满足时自行放宽价格区间。对「省钱」型 PA 这恰恰是需要回头问用户的地方，见规则 R15。

### 3.8 对照表：谁把什么列为「必须事前确认」

| 动作类型 | Apple HIG | Claude for Chrome | Computer use 文档 | Bansal 2024 | Magentic-UI | Ant Design X | Open-AutoGLM | Operator【搜】 |
|---|---|---|---|---|---|---|---|---|
| 付款、下单 | 是 | 是 | 是 | 是（花资源） | 是（不可逆） | 是（完成交易） | 是（财产、支付） | 是 |
| 对外发送、发布 | 是（重大动作） | 是 | | 是（示例） | | | | 是 |
| 共享个人信息 | | 是 | | | | | 是（隐私） | |
| 同意条款、Cookie | | | 是 | | | | | |
| 不可逆删除 | 是 | | | 是 | 是 | 是 | | |
| 可能违背偏好、让人意外 | | | | 是 | | | | |
| 登录、验证码、支付密码 | | | | | 可接手 | | 交还用户 | 交还用户 |

---

## 4. 审批疲劳与橡皮图章

**已核实的证据**

- Claude Code 权限弹窗接受率 93%，沙箱减少 84% 的弹窗，默认模式已改（3.1 节）。【核】
- Windows 用户体验指南（确认框一节）："Frequent confirmations are annoying and have little value because users learn to respond without thinking."；"Users quickly discover when a program has unnecessary confirmations and their natural response is to dismiss them as quickly as possible, often without reading."【核·镜像】
  https://github.com/MicrosoftDocs/win32/blob/docs/desktop-src/uxguide/mess-confirm.md
- 微软过度依赖综述：呼吁人工监督 "can provide a false sense of security (Green 2021; Koulu 2020)"。【核】

**凭既有知识补充的证据【记】**

- 浏览器安全警告：Akhawe & Felt (2013, USENIX Security) 分析 2,500 多万次警告展示，Chrome 的 SSL 警告点击穿透率 70.2%，Firefox 33.0%。https://www.usenix.org/conference/usenixsecurity13/technical-sessions/presentation/akhawe
- 临床用药警示：van der Sijs 等 (2006, JAMIA) 综述，药物安全警示被医生忽略的比例在 49%–96%。https://doi.org/10.1197/jamia.M1809
- 同意对话框：Böhme & Köpsell (2010, CHI) 的实地实验显示，对话框越像最终用户协议，越容易被不看就点同意。https://doi.org/10.1145/1753326.1753689

**对 PA 的含义**

1. 确认是会贬值的货币。一类确认的通过率长期高于九成，说明这类确认已经不在提供监督，只在消耗注意力，应该降级为「先做 + 可撤销」或并入预授权。
2. 确认不能当免责声明用。用户点了「同意」不等于用户看懂了。
3. 建议给每个目标和每周设「确认预算」，具体数值没有文献依据，需要自己的数据来定。

---

## 5. 确认 vs 撤销

**已核实的规范**

- Windows 用户体验指南给出确认框的三种替代方案：提供撤销（"Provide the ability to revert actions."，例子是回收站）；让不良后果显而易见；以及 "Assume the probable outcome, but make it easy to change."【核·镜像】
- 同一指南：确认框最有效的场合是 "to confirm actions that have significant or unintended consequences."；用户放弃任务时不要确认；用户经常做的动作不要确认。
- Apple："Avoid displaying alerts for common, undoable actions, even when they're destructive."【核】
- OpenAI Model Spec："When possible, GPT should favor easily reversible approaches"。【核】
- Apple 撤销页：撤销的结果要可预期、可看见（"Show the results of an undo or redo."），用一两个词说清撤的是什么（如 "Undo Name"）。【核】https://developer.apple.com/design/human-interface-guidelines/undo-and-redo

**没能打开原文的经典来源**

- Aza Raskin, *Never Use a Warning When You Mean Undo*, A List Apart 第 241 期（2007）。搜索摘要确认了文章存在和主旨：人会因习惯化在一连串重复操作里一路点「好」；把警告做得再醒目也没用；解法是撤销，以 Gmail 删除邮件后的撤销为例；多人协作时撤销难做。【搜】https://alistapart.com/article/neveruseawarning/
- NN/g, *Confirmation Dialogs Can Prevent User Errors — If Not Overused*。【记】https://www.nngroup.com/articles/confirmation-dialog/

**什么时候「先做 + 撤销窗口」更省时间，什么时候必须事前确认**

| 条件 | 选哪种 | 理由 |
|---|---|---|
| 动作常见、可完全撤回、撤回零成本 | 先做，给撤销 | Apple、Windows 指南、Raskin |
| 可撤回但有时窗或小成本（免费取消期、可退票） | 先做，回执里写明撤销截止时间 | 时窗是关键事实，必须说 |
| 付款不可退、对外发送、删除不可恢复、提交材料、同意条款 | 事前确认 | 3.8 节各家共识 |
| 动作本身可逆，但会被第三方看到（改约、发消息） | 事前确认 | 社会后果不可撤回 |
| 用户建目标时已预授权，条件全部满足 | 直接办，回执写清按哪条授权办的 | AP2 |

撤销窗口该多长，本轮没找到针对 Agent 动作的实证数据，列入缺口。

---

## 6. 选择架构：默认、选择过载、希克定律、渐进披露

### 6.1 默认选项效应【记】

- Johnson & Goldstein (2003), *Do Defaults Save Lives?*, Science 302:1338–1339。在线实验：选择加入条件下 42% 同意捐献器官，选择退出条件下 82%，强制选择条件下 79%。各国实际同意率：选择加入的国家 4.25%–27.5%，选择退出的国家 85.9%–99.98%。https://doi.org/10.1126/science.1091721
- Jachimowicz, Duncan, Weber & Johnson (2019) 元分析，Behavioural Public Policy 3(2)：58 项研究，N=73,675，合并效应 d=0.68；消费领域效应更大，环保领域更小；默认被理解为「推荐」或「已拥有」时效应更强；研究间差异很大。https://doi.org/10.1017/bpp.2018.43

**对 PA 的含义**：PA 高亮的推荐项就是事实上的默认，用户大概率照点。所以默认必须是对用户最省的那一个，而且要说明为什么是它。

**中国法规在这里画了线**【核·镜像】
- 《电子商务法》第十九条：「电子商务经营者搭售商品或者服务，应当以显著方式提请消费者注意，不得将搭售商品或者服务作为默认同意的选项。」
- 《网络交易监督管理办法》第十七条：「不得将搭售商品或者服务的任何选项设定为消费者默认同意，不得将消费者以往交易中选择的选项在后续独立交易中设定为消费者默认选择。」

第二句对 PA 很关键：用户上次买了延误险，不等于这次可以默认勾上。

### 6.2 选择过载：效应不稳定，要看条件

- Iyengar & Lepper (2000) 果酱实验：24 种口味的摊位 60% 的人驻足、3% 购买；6 种口味的摊位 40% 驻足、30% 购买。【记】https://doi.org/10.1037/0022-3514.79.6.995
- Scheibehenne, Greifeneder & Todd (2010) 元分析，JCR 37(3)：50 个已发表和未发表实验的 63 个条件，N=5,036，平均效应量「几乎为零」，但研究间方差很大；用户有明确先验偏好时反而是「越多越好」。【搜，搜索摘要确认了这三个数字】https://doi.org/10.1086/651235
- Chernev, Böckenholt & Goodman (2015) 元分析，JCP 25(2)：99 个观测，N=7,202，找到四个调节因素：选项集复杂度、决策任务难度、偏好不确定性、决策目标（想省力时过载更明显）。【记】https://doi.org/10.1016/j.jcps.2014.08.002

**对 PA 的含义**：「选项越少越好」不是定律。选项多会伤人的条件是：用户偏好不明、选项之间难比、时间紧、用户只想快点了事。PA 的主动提醒几乎总是落在这个条件里（用户被打断、想快点处理），所以默认收敛到「1 个推荐 + 最多 2 个备选」是合理的。但当用户主动来问「还有什么选择」时，可以多给，前提是可比（同一维度排好序）。

### 6.3 希克定律的适用边界【记】

Hick (1952) 与 Hyman (1953) 的结论是：在简单的「刺激—反应」选择任务里，反应时与选项信息量（约 log2(n+1)）成线性关系。https://doi.org/10.1080/17470215208416600

它成立的条件是：选项等概率、反应是熟练的简单动作、不需要阅读和权衡。它描述的是「从 n 个按钮里按对那一个」要多久，没有描述「在 6 个改签方案里权衡」要多久，也不预测「分析瘫痪」。

所以希克定律能支持的结论是：按钮数量少、位置固定、文案稳定，点得就快。它不能支持「选项多导致决策瘫痪」。后者要引 6.2 节的选择过载研究，而且要带上条件。

### 6.4 渐进披露

- 经典出处是 Jakob Nielsen (2006), *Progressive Disclosure*。【记】https://www.nngroup.com/articles/progressive-disclosure/
- 本轮核实到的同义规范：OpenAI Model Spec 的 "summarize the key points up front and offer a more detailed audit trail upon request"；Ant Design X 的「可展开/收起」；Anthropic 的「信息太少无法判断，太多淹没重点」。【核】
- 英国政府设计系统的「一页一问」："Asking just one question per question page helps users understand what you're asking them to do"；并要求 "Make sure it's clear to users why you're asking each question."【核·镜像】https://github.com/alphagov/govuk-design-system/blob/main/src/patterns/question-pages/index.md
- 同系统的「提交前核对」页：能 "increase users' confidence"，并 "reduce error rates as users are given a second chance to notice and correct errors before submitting data"；每项旁边给 "Change" 链接。【核·镜像】

**对 PA 的含义**：一条消息只拍一个板。确实涉及多项时，用「核对清单 + 逐项可改」，不要把五个问题排成一段话。

---

## 7. 工作记忆、认知负荷、决策疲劳

### 7.1 Miller 7±2 与 Cowan 4±1 的正确出处【记】

| 数字 | 出处 | 说的是什么 |
|---|---|---|
| 7±2 | George A. Miller (1956), *The magical number seven, plus or minus two*, Psychological Review 63(2):81–97。https://doi.org/10.1037/h0043158 | 绝对判断与即时记忆广度的经验上限；Miller 本人在文中强调「组块」可以重新编码，数字 7 带有修辞意味 |
| 约 4（3–5 个组块） | Nelson Cowan (2001), *The magical number 4 in short-term memory*, Behavioral and Brain Sciences 24(1):87–114。https://doi.org/10.1017/S0140525X01003922 | 排除复述和组块化之后，注意焦点能同时保持的组块数 |

基础稿写「米勒定律 4±1」是把两篇论文拼在了一起。正确说法：「工作记忆容量约 4 个组块（Cowan, 2001）；Miller (1956) 的经典数字是 7±2」。

**对 PA 的含义**：用户在一条消息里需要同时拿在脑子里比较的变量不超过 3–4 个（例如价格、时间、能否退）。超过就该拆，或者由 PA 先把其中几个定下来。

### 7.2 认知负荷理论【记】

John Sweller (1988), *Cognitive load during problem solving*, Cognitive Science 12(2):257–285。https://doi.org/10.1207/s15516709cog1202_4

后续发展出三分法：内在负荷（任务本身的复杂度）、外在负荷（呈现方式带来的多余负担）、相关负荷（用于建立理解的投入）。话术能动的只有外在负荷：寒暄、术语、要用户自己换算的数字、要翻回去找的指代。

**边界**：认知负荷理论来自教学设计研究，三分法的可测量性在学界有争议。用它做设计启发可以，别把「降低 X% 认知负荷」当成可量化承诺。

### 7.3 自我损耗与决策疲劳：复制危机，要如实说【记】

- 原始主张：Baumeister 等 (1998) 提出意志力像肌肉，用了会耗尽；「决策疲劳」是它的推论。
- Hagger 等 (2016) 多中心预注册复制，Perspectives on Psychological Science 11(4)：23 个实验室，N=2,141，效应量 d=0.04，95% 置信区间 [−0.07, 0.15]，与零无异。https://doi.org/10.1177/1745691616652873
- Vohs 等 (2021) 多中心预注册复制，Psychological Science 32(10)：36 个实验室，N=3,531，d=0.06。https://doi.org/10.1177/0956797621989733
- 「饥饿的法官」（Danziger 等 2011, PNAS：假释批准率从每段开始的约 65% 降到接近 0）被批评为案件排序并非随机（Weinshall-Margel & Shapard 2011），模拟显示效应量被高估（Glöckner 2016）。https://doi.org/10.1073/pnas.1018033108

**对 PA 的含义**：不要用「决策疲劳」当「少问用户」的科学依据。更站得住的论据有三个，而且都能在自己的产品里测：打断的时间成本（Iqbal & Horvitz 2007）、高频确认的习惯化（第 4 节）、核对负担（第 11 节）。

---

## 8. 透明度与信任

### 8.1 劳动错觉：展示「我比了 12 家」【记】

Buell & Norton (2011), *The Labor Illusion: How Operational Transparency Increases Perceived Value*, Management Science 57(9):1564–1579。https://doi.org/10.1287/mnsc.1110.1376

五个实验（在线旅行与在线交友的模拟服务）：网站展示它正在做的工作时，人们会更看重这项服务，甚至偏好要等的网站而不是瞬间返回相同结果的网站。中介机制是感知到的努力引发回报心理。论文摘要说明考察了边界条件。据我对正文的记忆，结果本身不好时，展示努力不加分甚至减分，这一点需要对原文复核。

**与「藏起过程」怎么平衡**

- 劳动错觉研究的是等待中的过程展示，测的是感知价值，没测决策质量。
- Bansal 2024 的反例是真实风险：更新太多，用户漏掉关键的一条。【核】
- 可操作的折中：消息里只留一句真实的工作量事实（「比了 12 家」「盯了 6 天」），放在结论之后，可展开看明细；结果不好时不炫过程。

### 8.2 解释：何时有帮助，何时导致过度信任【核】

来源一：Passi & Vorvoreanu, *Overreliance on AI: Literature Review*, Microsoft Aether，2022，综述约 60 篇论文。
https://www.microsoft.com/en-us/research/uploads/prod/2022/06/Aether-Overreliance-on-AI-Review-Final-6.21.22.pdf

- "detailed explanations often lead users to develop overreliance on AI."
- "Explanations increase user reliance on all AI recommendations."，包括错的。
- "a non-informative explanation such as an accuracy score improved user trust in AI even when the claimed accuracy was as low as 50% (Lai & Tan 2019)."
- "Dense and lengthy explanations often backfire."
- 采纳了错误建议的用户，往往比不用 AI 从头做的用户还慢（转引 Levy 等 2021）。
- 认知强制手段（清单、暂停、让用户先自己判断）能降低过度依赖，但 "are often less favored by users because of the added cognitive burden."
- 建议："Do not use language that anthropomorphizes AI in the user interface, explanations, and marketing materials."

来源二：Bansal 等 (2021, CHI), *Does the Whole Exceed its Parts?* 摘要原句："explanations increased the chance that humans will accept the AI's recommendation, regardless of its correctness."
https://www.microsoft.com/en-us/research/publication/does-the-whole-exceed-its-parts-the-effect-of-ai-explanations-on-complementary-team-performance/

来源三：Passi, Dhanorkar & Vorvoreanu, *Appropriate reliance on GenAI: Research synthesis*, MSR-TR-2024-7，2024 年 3 月，综述约 50 篇论文。
https://www.microsoft.com/en-us/research/wp-content/uploads/2024/03/GenAI_AppropriateReliance_Published2024-3-21.pdf

| 手段 | 效果（原文转引的研究） |
|---|---|
| 面向核对的解释 | 原理："evaluating an assistance task is easier for the user than evaluating the base task"（Fok & Weld 2023）。例子：确认拼写检查器标出的错，比自己从头找错容易 |
| AI 自我批评 | 帮用户多发现 50% 的错误（Saunders 等 2022） |
| 正反两面的对比解释 | 单面解释出错的情况下，用户准确率提高约 20%（Si 等 2023） |
| 背景证据 | 对错误输出的同意率从 61% 降到 47%（Goyal 等 2023） |
| 高亮低把握的词 | 在 LLM 出错的场景里用户准确率提高一倍以上（Spatharioti 等 2023，买车调研任务）；在代码补全任务里无效（Vasconcelos 等 2023） |
| 第一人称不确定表达 | 降低但不消除过度依赖；代价是对系统的信心下降、完成时间变长（Kim 等 2024） |

两条重要的告诫：
- "Caveat: All explanations have the potential to backfire and result in increased overreliance."
- "Caveat: A model's verbalized confidence does not accurately reflect the correctness of its output."

还有一句解释了为什么长消息危险："users often end up treating the fluency, length, and speed of GenAI outputs as proxies for their accuracy"。

**对 PA 的含义**

1. 「因为……」会提高通过率，不会提高正确率。写解释的目的要从「说服用户点同意」换成「让用户一眼能核对」。
2. 给事实，不给修辞：「A 家含运费 ¥249，B 家 ¥262」可以核对；「经过深度分析，A 最适合你」不能。
3. 主动说一条自己没查到或拿不准的点，相当于自我批评，是目前证据最强的反过度依赖手段之一。
4. 把握度的表述要建立在可检查的事实上（比了几家、数据是几点的、历史上这个价出现过几次），不要建立在模型自报的信心上。

**边界**：这两份综述里的实验大多是英文、众包受试者、分类或问答任务，测的是单次判断。消费场景里「钱是自己的」这一点可能让用户更警觉，也可能因为嫌麻烦更想快点通过，方向不确定。

### 8.3 不确定性的表达

**已核实**

- Kim, Liao, Vorvoreanu, Ballard & Vaughan (2024, FAccT), *"I'm Not Sure, But..."*：预注册实验，N=404，医疗问答任务。第一人称表达（"I'm not sure, but…"）降低了受试者对系统的信心和对其答案的同意倾向，同时提高了准确率；非人称表达（"It's not clear, but…"）方向相同但更弱，统计上不显著。作者提醒措辞差异很重要，上线前要做用户测试。【核】
  https://www.microsoft.com/en-us/research/publication/im-not-sure-but-examining-the-impact-of-large-language-models-uncertainty-expression-on-user-reliance-and-trust/
- Steyvers 等的研究（经上述 2024 综述转引）：解释里带低把握表达，用户对 LLM 答案的信心下降约 25%，并缩小了用户信心与实际准确率之间的差距。【核，转引】
- Apple：价格预测用行动建议，不用百分比（3.4 节）。【核】
- OpenAI Model Spec：不确定性会影响用户行为时才说；默认用自然语言，不量化（3.2 节）。【核】

**凭既有知识补充【记】**

- Budescu, Broomell & Por (2009, Psychological Science)：IPCC 把 "very likely" 定义为大于 90%，公众的理解中位数落在约 65%–75%，个体差异很大；词加数字的双重表述能改善一致性。https://doi.org/10.1111/j.1467-9280.2009.02284.x
- Budescu 等 (2014, Nature Climate Change)：在 24 个国家、17 种语言里重复出同样的模式。https://doi.org/10.1038/nclimate2194
- Gigerenzer 等 (2005, Risk Analysis)：「明天 30% 概率下雨」被各国公众理解成完全不同的事（30% 的时间、30% 的地区、30% 的日子），问题出在没说清参照类。https://doi.org/10.1111/j.1539-6924.2005.00608.x

**中文里「大概率 / 可能 / 预计」的理解差异**：本轮搜索额度用完，没查到可以引用的中文专项研究。手头有一条待核实线索：Harris, Corner, Xu & Du (2013, Climatic Change) 比较过中国与英国受试者对 IPCC 概率词的理解。列入缺口。

**对 PA 的含义**

| 情形 | 写法 |
|---|---|
| 事实（到手价、截止时间） | 精确数字，不加「大概」 |
| 预测（会不会再降） | 行动建议 + 一条依据：「建议现在订：这条线近 60 天只出现过 2 次更低价」 |
| 关键预测、用户可能据此花大钱 | 词和频率都给：「多半不会再降（近 60 天里 10 次有 8 次是这样）」 |
| 信息不全 | 第一人称说清缺的是什么：「我没查到这家的退改规则」 |
| 通篇都不确定 | 不发，继续盯（Apple 的阈值原则） |

### 8.4 算法厌恶与算法欣赏

- Dietvorst, Simmons & Massey (2015, JEP: General)：人看到算法犯错后会放弃它，即使它整体比人准。https://doi.org/10.1037/xge0000033【记】
- Dietvorst, Simmons & Massey (2018, Management Science)：只要允许人对算法的结果做哪怕很小的修改，人就更愿意用它；可修改幅度的大小影响不大。https://doi.org/10.1287/mnsc.2016.2643【记】
- Logg, Minson & Moore (2019, OBHDP)：普通人对标注为算法的建议赋予更高权重；专业人士则不然。https://doi.org/10.1016/j.obhdp.2018.12.005【记】
- 微软 2022 综述里可核实的三句相关表述【核】：
  - "Users are more willing to use algorithmic systems when they do not see systems make mistakes (Dietvorst 2015). However, never seeing the system err makes users over-trust its capabilities."
  - 信任的不对称："User trust in AI goes down by a relatively large amount when system capability decreases but increases by a much smaller amount when system capability increases back again."
  - 任务类型：用户在客观且不熟悉的任务上更偏向自动化建议，在主观任务上更信人。

**对 PA 的含义**

1. 每条确认都给「改一下」。即使大多数人不点，它的存在本身就提高委托意愿。
2. 出错后的那条消息比十条成功回执都重要：信任掉得快、涨得慢。
3. 比价、算满减这类客观任务，用户容易信过头，要给可核对的事实；选餐厅、挑礼物这类主观任务，用户更信自己，PA 应给候选而不是代为决定。

---

## 9. 通俗语言

- **ISO 24495-1:2023**《Plain language — Part 1: Governing principles and guidelines》，2023 年 6 月发布。四条原则：读者能得到所需信息（相关）、能轻松找到（可找到）、能轻松理解（可理解）、能轻松使用（可用）。【记】https://www.iso.org/standard/78907.html
- **中国法规里的对应条款**：《消费者权益保护法实施条例》（2024-07-01 施行）第九条：「经营者应当采用通俗易懂的方式，真实、全面地向消费者提供商品或者服务相关信息」。【核·镜像】通俗易懂在这里是法定义务。
- **美国联邦通俗语言官网**（GitHub 存档）列的好处：读者理解更快、来电询问更少、填表错误更少、更准确更快地照办。该页没有给出任何数字，只说「许多研究表明」。【核·镜像】https://github.com/GSA/plainlanguage.gov/blob/main/_pages/about/benefits.md
- **Ant Design 文案规范**：「使用简单、直接、易于理解的词汇」；「省略无用词汇，不重复用户已知事实；在绝大多数交互场景下，都无需界面描述出全部的细节。」【核·镜像】
- **知识的诅咒**：Camerer, Loewenstein & Weber (1989, JPE) 提出该术语；Newton (1990) 的敲歌实验里，敲的人预计听者能猜中 50%，实际猜中 2.5%（120 首里 3 首）。【记】https://doi.org/10.1086/261651
- **术语的代价**：Shulman 等 (2020) 发现，即使给了定义，术语仍会降低读者的加工流畅度和参与意愿。【记，DOI 待核】

通俗语言对理解速度和决策速度的量化实证（例如 Kimble《Writing for Dollars, Writing to Please》汇编的案例），本轮没能打开任何带数字的原始来源，不引用具体数字，列入缺口。

**对 PA 的含义**：写消息的是「知道得太多」的一方。候补、展期、凑单门槛、免密、价保、改签费差，这些词对 PA 是日常，对用户是障碍。第一次出现时用大白话，或加半句括注。

---

## 10. 把「省了多少」说清楚

### 10.1 换算成熟悉的参照物【核】

Barrio, Goldstein & Hofman (2016, CHI), *Improving Comprehension of Numbers in the News*。三个随机在线实验，参与者超过 3,200 人。
https://www.microsoft.com/en-us/research/wp-content/uploads/2016/05/p2729-barrio.pdf

- 在数字后面加一句「换个角度看」（比例、排名、换单位），提升了三件事：记住读过的数字、估计没见过的数字、发现被篡改的数字。
- 一个具体结果：只看原句的人里 40% 能准确回忆「美国约 3 亿支枪」，看到「约等于每人 1 支」的人里接近 55%。
- 例句："To put this into perspective, 7.9 billion dollars annual revenue is about 25 dollars for every person in the U.S."

**边界**：材料是新闻里的大数字，不是消费金额；测的是理解和记忆，不是购买决定。把它用到「¥380 ≈ 12 杯拿铁」是合理外推，不是直接证据。

### 10.2 绝对值还是百分比【记】

- 「100 法则」出自 Jonah Berger《Contagious》(2013)：价格低于 100 时百分比显得更大，高于 100 时绝对金额显得更大。实证支持见 González 等 (2016, Journal of Business Research) 与 Chen, Monroe & Lou (1998, Journal of Retailing)。https://doi.org/10.1016/j.jbusres.2015.08.014
- 相对思维：Tversky & Kahneman (1981, Science) 的计算器问题。为了便宜 5 美元多走 20 分钟，原价 15 美元时 68% 的人愿意，原价 125 美元时只有 29%。https://doi.org/10.1126/science.7455683

「100 法则」是商家用来让折扣显得更大的技巧，阈值按美元算，换成人民币没有现成依据。PA 站在用户一边，目的是让用户判断得准，所以建议固定写法：**绝对值在前，基线紧跟，百分比可选**。相对思维的研究还提醒了另一件事：省钱和省时间冲突时，PA 要把交换比例说出来（「便宜 ¥5，但要多等 2 天」），不替用户假定哪个更重要。

### 10.3 按天拆分是卖方技巧，PA 要反着用【记】

Gourville (1998, JCR), *Pennies-a-Day*：把一笔费用表述成「每天几毛」会让人联想到日常小额开销，从而更容易接受；金额大到联想不成立时会反效果。https://doi.org/10.1086/209517

推论（这是我的推演，不是该论文的结论）：
- 汇报**花费**时，PA 应该给总价，不拆成每天。
- 汇报**节省**时，PA 应该累计成月度或年度总额，再配一个熟悉的参照物。

### 10.4 数字精度【记】

- Thomas, Simon & Kadiyali (2010, Marketing Science)：精确的大额价格比相近的整数价格显得更小。https://doi.org/10.1287/mksc.1090.0512
- 精确数字通常显得更可信、更像事实（Schindler & Yalch 2006 等）。
- OpenAI Model Spec 对不确定数字的要求是用近似说法和整数。【核】

建议：精度跟着确定性走。已发生或已锁定的金额精确到元（小额到角）；预测值取整并写「约」。不要对预测值用小数点，那是用精度冒充把握。

### 10.5 比较基线必须说明，「到手价」必须是真到手【核·镜像】

- 《广告法》第八条：广告中对价格等有表示的，「应当准确、清楚、明白」。
- 《明码标价和禁止价格欺诈规定》（2022-07-01 施行）第十六条（转述）：被比较价格须真实准确；未标明被比较价格详细信息的，被比较价格不得高于同一经营场所比较前七日内的最低成交价。第十七条：不得在折价前临时抬高标价作为基准，不得采用无依据或无从比较的价格作为基准。第十九条把虚假折价、虚假价格比较列为价格欺诈。第二十条：首页标示的价格不得低于详情页价格。
- 《消费者权益保护法实施条例》第九条：不得虚构交易信息、经营数据；不得在消费者不知情时对同一商品在同等条件下设置不同价格。

这些条款约束的是经营者。PA 是否属于经营者或广告发布者取决于商业模式（是否收佣金、是否代商家推广），需要法务判断。但它们给出的诚实标准可以直接当写作规范用。

**「省了多少」的写法清单**

| 要素 | 写法 | 反例 |
|---|---|---|
| 金额 | 阿拉伯数字 + ¥，绝对值在前 | 「大约三百元左右」 |
| 基线 | 比什么省：你的购物车现价、你原来那单、你上次看到的价、近 30 天均价 | 「立省 ¥86.5」（比什么？） |
| 范围 | 比了哪几家、多长时间窗 | 「全网最低」「史低」 |
| 到手价 | 含运费、税费；注明需要的条件（领券、拼单、会员） | 标了券后价却没说要先开会员 |
| 时间 | 前后两个数都给：「排队 90 分钟 → 线上取号约 20 分钟」 | 「大幅节省时间」 |
| 换算 | 可选，一个熟悉参照物 | 连用三个比喻 |
| 冲突 | 钱和时间冲突时写出交换比例 | 只报省钱不提多等两天 |
| 累计 | 月度汇总报总额 | 把花费拆成「每天 9 毛」 |

---

## 11. 核对负担，以及基础稿引用的 Medium 文章

### 11.1 Medium 文章核查结果：未能证实

基础稿把「检查、打断、盯梢三大认知税」归给 Yuki K. 的 Medium 文章 *AI Agent UX: How to Reduce Cognitive Load and User Fatigue*，标注日期 2026 年 10 月。

- 我用两组关键词搜索（标题全文 + 作者名 + checking/interrupting/watching；带引号的标题 + 账号名），都没有命中这篇文章。
- medium.com 在本会话打不开，无法直接访问基础稿给的网址。
- 文章标注的发布时间距今只有一个月左右，搜索索引可能尚未收录。所以结论是「既不能证实也不能证伪」。

处理建议：
1. 不要写成「研究者将……拆解为三大根源」。即使文章存在，它也是个人博客文章，不是研究。
2. 「税」这个字很可能是基础稿自己的包装，不应加引号归给原作者。
3. 三种负担各自都有可核查的更强来源，建议替换：

| 基础稿的说法 | 可替换的来源 | 状态 |
|---|---|---|
| 检查（读完 AI 的长输出才能确认它对不对） | Simkute 等 (2024)：用户角色从生产转向评估；Passi 等 (2024)：核对成本高时用户干脆拿流畅度、长度、速度当准确度的替身；Lee 等 (2025) | 【核】 |
| 打断（中途弹出含糊的询问） | Iqbal & Horvitz (2007) 的时间成本；Bansal 等 (2024) 的 X3；Anthropic 的审批疲劳 | 【核】 |
| 盯梢（不放心，反复点开看进度） | Bansal 等 (2024) 的 A3「它现在在做什么」；Anthropic 的「信息太少无法判断是否在正轨」 | 【核】 |

### 11.2 可核实的「AI 输出增加核对负担」证据【核】

- **Simkute, Tankelevitch, Kewenig, Scott, Sellen & Rintel (2024), *Ironies of Generative AI***（微软研究院）：把人因工程里「自动化的讽刺」搬到生成式 AI，找出四个导致生产力损失的原因："a shift in users' roles from production to evaluation"、"unhelpful restructuring of workflows"、打断、以及 "a tendency for automation to make easy tasks easier and hard tasks harder"。
  https://www.microsoft.com/en-us/research/publication/ironies-of-generative-ai-understanding-and-mitigating-productivity-loss-in-human-ai-interactions/
- **Lee 等 (2025, CHI), *The Impact of Generative AI on Critical Thinking***：调查 319 名知识工作者，收集 936 个真实使用案例。对生成式 AI 越有信心，批判性思考越少；对自己越有信心，批判性思考越多。批判性思考的内容转向核实信息、整合回复、看管任务。
  https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/
- **Tankelevitch 等 (2024, CHI), *The Metacognitive Demands and Opportunities of Generative AI***：生成式 AI 给用户加了元认知负担（想清楚要什么、判断输出好不好、决定信多少）。
  https://www.microsoft.com/en-us/research/publication/the-metacognitive-demands-and-opportunities-of-generative-ai/

**边界**：Lee 等是自我报告的问卷，相关不等于因果；Simkute 等是综述和论证，不是实验。

### 11.3 HBR「workslop」与 METR【记】

- *AI-Generated "Workslop" Is Destroying Productivity*，Harvard Business Review，2025 年 9 月，BetterUp Labs 与斯坦福社交媒体实验室。调查 1,150 名美国全职员工：40% 在过去一个月收到过 workslop（看着像样、实际没推进任务的 AI 产出）；每次平均花 1 小时 56 分钟处理；折合每人每月约 186 美元的隐性成本。https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity
- METR (2025) 随机对照试验：16 名资深开源开发者用 AI 工具后完成任务反而慢了 19%，他们事后仍以为自己快了 20%。https://arxiv.org/abs/2507.09089

这两条本轮都没能打开原文，数字来自既有知识。HBR 那篇是厂商参与的问卷调查，同行评议程度有限。

**对 PA 的含义**：一条让用户自己去核对的消息是负价值。PA 发出的每条消息都在给用户派一份「评估工作」，写作目标是把这份工作压到一眼能做完。另外，METR 的结果提醒：用户自我感觉「省了时间」不可靠，省时间要用真实时长来度量。

### 11.4 打断的实测成本【核】

Iqbal & Horvitz (2007, CHI), *Disruption and Recovery of Computing Tasks: Field Study, Analysis, and Directions*。
https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/CHI_2007_Iqbal_Horvitz-1.pdf

- 样本：27 名知识工作者的主力电脑，两周，2,267 小时活动日志。
- 提醒频率：每小时平均被 4.28 次邮件提醒和 3.21 次即时消息提醒打断。
- 40.8% 的邮件提醒和 71% 的即时消息提醒在 15 秒内得到响应。
- 离开原任务的时间：邮件提醒平均 9 分 33 秒，即时消息平均 8 分钟。
- 回到原应用后恢复到之前状态还要：10 分 58 秒到 16 分 33 秒（按提醒类型和响应方式不同）。
- 27% 的提醒导致用户超过 2 小时才回到原任务。
- 作者的两条总结："Users view alerts as an awareness mechanism rather than a trigger to switch tasks, but the alerts often cause them to do otherwise."；"Users spend more time than they realize responding to alerts."

**边界**：2007 年的桌面办公场景，样本来自微软一家公司，27 人。手机上的通知行为不同（可以瞥一眼就划走）。它能支持的结论是「提醒引发的切换有连锁成本，且当事人低估」，具体分钟数不要外推到手机。

---

## 12. 中国法规硬约束（与确认、默认、省钱表述直接相关的条款）

以下条文取自 GitHub 上的 LawRefBook 法规镜像仓库，正式引用请对照国家法律法规数据库。https://github.com/LawRefBook/Laws

| 法规 | 条款 | 内容 | 对 PA 消息的约束 |
|---|---|---|---|
| 《广告法》(2021 修正) | 第九条第三项 | 广告不得「使用"国家级"、"最高级"、"最佳"等用语」 | 不写「全网最低」「史低」「最划算」 |
| | 第五十七条 | 违反第九条：对广告主「处二十万元以上一百万元以下的罚款」 | |
| | 第八条 | 对价格等有表示的，「应当准确、清楚、明白」 | 金额、条件写清 |
| | 第二条 | 适用于商品经营者或服务提供者介绍自己所推销的商品或服务的商业广告活动 | PA 是否构成广告需法务判断 |
| 《明码标价和禁止价格欺诈规定》(2022-07-01) | 第十六、十七、十九条 | 被比较价格真实准确；不得用无依据的基准；虚假价格比较属价格欺诈 | 每个「省 ¥X」都要有真实基线 |
| 《电子商务法》(2019-01-01) | 第十九条 | 搭售「不得将搭售商品或者服务作为默认同意的选项」 | 保险、会员、加购不做默认 |
| | 第五十条 | 「应当保证用户在提交订单前可以更正输入错误」 | 确认消息必须有「改一下」 |
| | 第十八条 | 按个人特征推荐时，应同时提供不针对个人特征的选项 | 个性化推荐要留非个性化出口 |
| 《网络交易监督管理办法》(2021-05-01) | 第十八条 | 自动续费「应当在消费者接受服务前和自动展期、自动续费等日期前五日，以显著方式提请消费者注意」；提供「显著、简便的随时取消或者变更的选项」 | 续费提醒至少提前 5 天，比基础稿示例的「明早扣费」早 |
| | 第十七条 | 不得把用户以往选择设为后续独立交易的默认选择 | 上次选过不等于这次默认 |
| 《消费者权益保护法实施条例》(2024-07-01) | 第九条 | 「应当采用通俗易懂的方式，真实、全面地」提供信息 | 通俗易懂是义务 |
| | 第十条 | 自动续费须在服务前和续费日期前以显著方式提请注意 | |
| 《个人信息保护法》(2021-11-01) | 第二十四条 | 自动化决策要保证透明、结果公平；用自动化决策做信息推送、商业营销的，应提供不针对个人特征的选项或「便捷的拒绝方式」；对个人权益有重大影响的决定，个人有权要求说明并拒绝仅通过自动化决策作出决定 | 每条主动消息都要能一步关掉同类；重大决定不能只由 PA 定 |
| 《互联网广告管理办法》(2023-05-01) | 第九条 | 以知识介绍、体验分享、消费测评等形式推销并附加购物链接的，「应当显著标明"广告"」 | PA 的推荐若带佣金链接，必须标明 |

《广告绝对化用语执法指南》（市场监管总局 2023 年发布）本轮没能找到可打开的文本，其中的例外情形没有核对。

---

## 13. 「该不该问用户」决策树

### 13.1 输入：每次目标状态变化时，PA 先给这次动作打五个标

| 变量 | 取值 | 怎么判 |
|---|---|---|
| S 做错的代价 | S0 无外部副作用（只调整 PA 自己怎么盯） | 例：换数据源、调监控频率 |
| | S1 可完全撤回、零成本、不涉及第三方 | 例：改提醒时间、把夜跑换成拉伸 |
| | S2 可撤回但有时窗或小成本 | 例：占一个可免费取消的座、排上候补、领一张券 |
| | S3 不可逆或撤回代价高 | 例：付款不可退、对外发消息、删除、提交材料、同意条款、交出个人信息 |
| A 授权 | 在预授权内 / 不在 | 建目标时谈好的金额上限、时限、对象范围、动作类型 |
| C 把握 | 高 / 中 / 低 | 高：完全符合用户设定的条件，或同类情形用户已原样同意多次 |
| T 时效 | 急 / 不急 | 急：机会会在用户下一个自然空档前失效 |
| N 需要用户决定吗 | 是 / 否 | 没有待决事项、只是状态同步，为否 |

### 13.2 判定顺序

```
0. 卡在登录 / 验证码 / 支付密码 / 人脸 / 线下动作？
   └─ 是 → 【E 交还接管】说清卡在哪，用户做完 PA 接着办

1. N = 否，且 T = 不急？
   └─ 是 → 【D 只汇总不打扰】写进日汇总或周汇总，不单独推送
           （低把握的线索同样归这里，或干脆不发）

2. S = S3（付款、对外发送、不可逆、交出个人信息、同意条款）
   或 动作超出预授权范围，或 做法会让用户意外？
   ├─ 在预授权内且条件全部满足
   │     → 【B 预授权执行】办，立即回执：按哪条授权办的 + 能否撤 + 撤销截止
   └─ 否则
         → 【C 先问再做】发待确认消息（见 14.1 最小信息集）
            · T = 急：先做一个 S1/S2 的保全动作（占位、候补、可免费取消的预留），再问
            · T = 不急：并入用户的下一个空档，可与其他待确认合并
            · 超时没回：不执行，到期说明结果

3. S = S2（可撤回但有时窗）？
   ├─ C ≥ 中，且在授权内 → 【B 做了可撤销】办，回执写明撤销截止时间
   └─ C = 低 → 【C 先问再做】只问最关键的一项

4. S = S0 或 S1？
   ├─ C = 高 → 【A 直接做并告知】办，回执可并入汇总（用户正在等这个结果时才即时发）
   ├─ C = 中 → 【B 做了可撤销】办，给一键改回
   └─ C = 低 → 【D】先不动，继续观察；或在汇总里顺带问一句
```

### 13.3 每个分支的判定条件与依据

| 分支 | 判定条件 | 依据 |
|---|---|---|
| **A 直接做并告知** | 无外部副作用或可完全撤回；把握高；在授权内 | Horvitz：把握高于行动阈值时直接做的效用高于先问【核】；Bansal A2："should perhaps just go ahead"【核】；Constitution：简单任务别多问【核】；Model Spec：琐碎问题改成可纠正的假设【核】；自动化等级 7【记】 |
| **B 做了可撤销** | 可撤回但有时窗或小成本，把握中等以上；或 S3 但在预授权内且条件全满足 | Windows 指南："Assume the probable outcome, but make it easy to change"【核·镜像】；Apple：常见可撤销动作不弹警告【核】；Model Spec：优先可逆做法【核】；AP2 人不在场模式【核】；Raskin【搜】；自动化等级 6–7【记】 |
| **C 先问再做** | 付款、对外发送、不可逆、交出个人信息、同意条款；超出授权；会让用户意外；把握低但行动价值高 | Apple GenAI："ask for confirmation before performing a significant action on someone's behalf"【核】；Bansal A2 的四个判据【核】；Claude for Chrome【核】；Ant Design X 显性确认【核·镜像】；Magentic-UI 动作守卫【核】；《电子商务法》第十九、五十条【核·镜像】；自动化等级 5【记】 |
| **D 只汇总不打扰** | 没有待决事项且不急；状态无实质变化；线索把握低 | Apple："Avoid using an alert merely to provide information"【核】；Apple ML：主动功能设阈值【核】；Bansal：过度沟通稀释注意力【核】；Iqbal & Horvitz：打断成本【核】；自动化等级 8【记】 |
| **E 交还接管** | 需要用户本人凭证或线下动作 | Open-AutoGLM Take_over【核·镜像】；Operator 接管模式【搜】 |

### 13.4 四条修正规则

1. **阈值随情境移动**（Horvitz）：金额越大、越难撤，「直接做」要求的把握越高；用户越忙，越倾向 D 或 B，少用 C；机会越短，越要先做保全动作。
2. **沉默的含义按风险分**：S3 的待确认，没回等于不同意（Windows 指南：高风险的默认回应是 "Don't proceed (or the safe choice)"【核·镜像】）。只有 S1、S2 才可以用「到点自动做，不要就点这里」的否决窗口。
3. **自主度可以升，由用户决定**：同一类确认被用户连续原样通过若干次后，PA 问一次「以后这类直接办，办完告诉你？」，带金额上限和有效期。依据：有经验的用户放手比例从约 20% 升到 40% 以上（Anthropic）【核】；Bansal X3【核】；Windows 指南只允许对例行确认提供「不再提示」【核·镜像】。「若干次」取几次没有文献依据，建议从 3 次起步用数据校准。
4. **出错后自动收紧**：被用户撤销、否决或确实办错后，这一类动作降一级（A→B，B→C）。依据：信任掉得快、涨得慢【核】。

### 13.5 机器可读版（给 Skill 用）

```yaml
ask_or_act_policy:
  inputs:
    stakes: [S0_internal, S1_fully_reversible, S2_reversible_with_window, S3_irreversible_or_costly]
    in_mandate: [true, false]          # 是否在建目标时的预授权范围内
    confidence: [high, medium, low]    # 对「用户想要这个」的把握
    time_critical: [true, false]       # 机会是否会在用户下一个空档前失效
    decision_needed: [true, false]
    needs_user_credential: [true, false]
  hard_gate_S3:                        # 命中任一项即视为 S3
    - payment_or_order
    - send_or_publish_to_third_party
    - irreversible_delete_or_cancel
    - share_personal_data
    - accept_terms_or_authorize
    - add_on_or_bundle                 # 搭售、加购、保险、会员
  rules:
    - if: needs_user_credential
      then: E_takeover
    - if: "not decision_needed and not time_critical"
      then: D_digest
    - if: "stakes == S3 or not in_mandate or surprising"
      then:
        - if: "in_mandate and all_constraints_met"
          then: B_do_with_receipt
        - else: C_ask_first            # time_critical 时先做 S1/S2 保全动作
    - if: "stakes == S2"
      then: { high_or_medium: B_do_with_undo, low: C_ask_first }
    - if: "stakes in [S0, S1]"
      then: { high: A_do_and_tell, medium: B_do_with_undo, low: D_digest }
  silence_means:
    C_ask_first: do_nothing
    B_veto_window: proceed             # 仅限 S1、S2
  autonomy_adjust:
    promote_offer_after_consistent_approvals: 3   # 起步值，待校准；须带上限与有效期
    demote_on: [user_undo, user_reject, agent_error]
```

---

## 14. 待确认消息的最小信息集与五类消息模板

### 14.1 最小信息集：5 项必备 + 2 项条件必备

| # | 项 | 写什么 | 依据 |
|---|---|---|---|
| ① | 要你定什么 | 一句话，动词 + 对象；一条消息只问一件事 | GOV.UK 一页一问【核·镜像】；Windows："Provide choices, not dilemmas."【核·镜像】；Semi Design：标题用「动词 + 名词」【核·镜像】 |
| ② | 关键事实 | 对象与数量、金额（到手总价）、时间 | Windows："you must provide sufficient information for users to answer that question intelligently."【核·镜像】；AP2："the exact items and price"【核】；Ant Design X：「明确地向用户展示操作的具体细节」【核·镜像】 |
| ③ | 代价与可逆性 | 要付出什么、会失去什么、之后能不能撤、撤到何时 | Apple GenAI：考虑不可逆是否带来更多麻烦【核】；Bansal A4 副作用【核】 |
| ④ | 不回会怎样 | 默认结果（不执行或维持现状）+ 这次机会的有效期 | Windows：高风险默认安全选项【核·镜像】；Horvitz：超时与退场【核】 |
| ⑤ | 出口 | 具体动词按钮（办）+「改一下」+「不要」；高风险不设默认高亮 | Apple 警告框【核】；Agent Inbox 四种回应【核·镜像】；Amershi G8、G9【核】；《电子商务法》第五十条【核·镜像】 |
| ⑥ | 收益与基线（声称省钱省时时必备） | 省多少、比什么省、口径可展开 | 《明码标价和禁止价格欺诈规定》第十六、十七条【核·镜像】；Barrio 等 2016【核】 |
| ⑦ | 依据与不确定点（含预测或信息不全时必备） | 一条可核对的事实 + 一句第一人称的不确定 | Passi 等 2024【核】；Kim 等 2024【核】；Apple ML【核】 |

**关于字数**：基础稿要求所有消息「锁死在 40 个汉字以内」。A、B、D 三类可以做到；C 类涉及钱的确认，①到⑤加起来通常需要 60–90 字。建议改成分级：标题行 16 字以内说清要定什么，事实行 2–3 行、每行一个事实，然后是按钮。这个字数区间是我的建议，没有实证依据，需要测试。

### 14.2 五类模板（中文示例）

**C 先问再做**

```
东京酒店降了，要重订吗？
· 新价 ¥1,280/晚 × 3 晚，比你原来那单少 ¥640
· 要先付新单 ¥3,840；旧单周三 18:00 前可免费取消，我会一起办
· 今晚 22:00 前不回，我就不动，原订单照旧
[重订并取消旧单]  [改一下]  [先不订]
```

**C 的时效变体：先保全，再问**

```
周四 08:00 的二等座只剩 3 张，我先占了 1 张
· 占座 30 分钟内免费释放，现在还没付款
· 票价 ¥553，和你原来那班一样，不用补差
· 30 分钟内不回，我就放掉这张，继续盯
[付款出票]  [换一班]  [放掉]
```

**B 做了可撤销**

```
今晚夜跑已改成 15 分钟拉伸
连续打卡照算。想按原计划跑？
[改回 5 公里]
```

**B 预授权执行**

```
按你设的「¥1,200 以下直接订」已出票：¥1,180
周六 07:35 浦东 → 成田，直飞。明早 9:00 前可免费退
[看行程]  [退掉]
```

**A 直接做并告知（多数并入汇总）**

```
候补又往前排了 12 位，现在第 8 位。有票自动买，买到告诉你
```

**D 汇总**

```
本周 3 个目标的进展
· 要你定 1 件：宽带续约，周五到期 [去看看]
· 已替你办 2 件：停掉 1 个没在用的会员（省 ¥30/月）；领了 1 张猫粮券
· 还在盯 2 件：东京机票（最低 ¥1,340，高于你的上限 ¥140）；演出票（未开售）
```

**E 交还接管**

```
卡在 12306 的登录验证码，需要你点一下
完成后我接着排候补，不用再管
[去验证]
```

**完成回执**

```
已停掉 XX 视频的自动续费
会员用到 12 月 3 日，之后不再扣 ¥30/月。想恢复随时说
```

回执的必备项参考英国政府设计系统的确认页：发生了什么、"details of what happens next and when"、怎么找回记录。【核·镜像】https://github.com/alphagov/govuk-design-system/blob/main/src/patterns/confirmation-pages/index.md

**条件不满足**

```
¥1,200 以下的票没了
现在最低 ¥1,340，比你的上限高 ¥140
[按 ¥1,340 订]  [再等到周五]  [不订了]
```

### 14.3 防橡皮图章的检查项

1. 这类确认最近的通过率是多少？长期高于九成，就该降为 B 或并入预授权。
2. 这条消息和上一条同类消息相比，哪里不一样？把不一样的地方放在第一行。
3. 用户如果只看按钮不看正文，会不会点错？按钮文字要能独立说明后果。
4. 危险的那个按钮是不是默认高亮？是的话改掉。
5. 用户想改一个细节，要几步？超过一步就太多。

建议监控的指标（定义是我的建议，阈值需自己的数据来定）：各类确认的通过率、改写率（点「改一下」的比例）、否决率、超时未回率、撤销率、从送达到决定的中位时长、决定后反悔率。

---

## 15. 话术与发送规则（R1–R20）

每条带依据编号（对应结构化输出里的 findings）。

**R1 先判红线，再判把握。** 付款、对外发送、不可逆、交出个人信息、同意条款、超出授权，必须事前确认。
- 要：「东京酒店降到 ¥1,280/晚，比你原来那单少 ¥640。重订要先付 ¥3,840，旧单周三前免费取消。[重订并取消旧单] [先不订]」
- 不要：「已为你重新预订并支付 ¥3,840，旧订单已取消。」
- 依据：T3-03、T3-04、T3-11、T3-14

**R2 建目标时一次谈好授权边界。** 上限、时限、范围；条件内不再问，条件外回头问。
- 要：建目标时问「降到多少我直接订？上限 ¥____，有效到 12 月 20 日。超过这个数我先问你。」
- 不要：每次降价都发「降价了，要订吗？」
- 依据：T3-13、T3-09、T3-07

**R3 可撤回的小事：先做，再说，留撤销口。**
- 要：「今晚夜跑已改成 15 分钟拉伸，连续打卡照算。[改回 5 公里]」
- 不要：「检测到你今天日程较满，是否需要将今晚的跑步计划调整为拉伸？」
- 依据：T3-06、T3-23、T3-10

**R4 一条消息只拍一个板。** 多项用核对清单，逐项可改。
- 要：「周四改签：G7 次 08:00，二等座靠窗，补差 ¥0。[就这样改] [换时间] [换座位]」
- 不要：「请确认日期、座位偏好、发票抬头、是否用积分、是否买保险。」
- 依据：T3-22、T3-27、T3-26

**R5 待确认消息写齐 5 项。** 要定什么、关键事实、代价与可逆性、不回会怎样、出口。
- 要：见 14.2 的 C 模板
- 不要：「有个更便宜的方案，要不要换？」
- 依据：T3-06、T3-13、T3-14、T3-04

**R6 按钮写「动词 + 对象」，危险项不设默认。**
- 要：[停掉自动续费] [保留会员]
- 不要：[确定] [取消]；[好的]
- 依据：T3-06

**R7 写明不回会怎样，高风险默认不执行。**
- 要：「今晚 23:00 前不回，我就不动，会员下周一照常续费 ¥30。」
- 不要：「请尽快确认哦～」
- 依据：T3-01、T3-06

**R8 省了多少：绝对值在前，带基线，说范围。** 不写「全网最低」「史低」。
- 要：「到手 ¥249，比你购物车现价少 ¥86.5（拆 2 单 + 1 张品类券）。我比了 3 个平台，这是近 30 天最低。」
- 不要：「全网史低！立省 26%！」
- 依据：T3-20、T3-32、T3-19

**R9 把握度写成「建议 + 一条依据」，预测不带小数点。**
- 要：「建议现在订：这条线近 60 天只出现过 2 次更低价。」
- 不要：「模型预测 87.3% 概率为最低价。」
- 依据：T3-05、T3-10、T3-31

**R10 拿不准就用第一人称说清哪一点拿不准。**
- 要：「我没查到这家的退改规则，下单前建议你点进去看一眼。」
- 不要：「可能大概也许会有退改限制，仅供参考。」
- 依据：T3-16、T3-15

**R11 解释给能核对的事实，一句为限，其余折叠。**
- 要：「推荐 A 家：同款同规格，含运费 ¥249；B 家 ¥262。[看截图]」
- 不要：「经过我的深度分析和全网智能比对，A 是最适合你的选择。」
- 依据：T3-15、T3-16

**R12 过程只留一句真实的工作量，放在结论后面；结果不好时不炫过程。**
- 要：「直飞里这班最便宜（比了 12 家）。[看比价]」
- 不要：「我先打开了携程，然后比较了去哪儿，接着……」
- 依据：T3-29、T3-03、T3-17

**R13 不需要用户决定的事不单独推送。** 并入汇总；低把握的线索不发。
- 要：周汇总「要你定 1 件 · 已替你办 2 件 · 还在盯 2 件」
- 不要：「机票价格今日无变化～」
- 依据：T3-05、T3-03、T3-18

**R14 不急的确认等用户空档，可合并。** 只有「现在不处理就失效」的才即时打断。
- 要：（午休时）「有 2 件事等你点头，都不急，今晚 22:00 前有效。」
- 不要：开会时连推 3 条待确认
- 依据：T3-18、T3-01、T3-02

**R15 条件不满足时回头问，不替用户放宽条件。**
- 要：「¥1,200 以下的票没了，现在最低 ¥1,340，比你的上限高 ¥140。[按 ¥1,340 订] [再等到周五] [不订了]」
- 不要：「已为你订了最接近的 ¥1,340。」
- 依据：T3-13、T3-03、T3-11

**R16 登录、验证码、支付密码交还用户。** 说清卡在哪，用户做完 PA 接着办。
- 要：「卡在 12306 的登录验证码，需要你点一下。完成后我接着排候补。[去验证]」
- 不要：「执行失败，请重试。」
- 依据：T3-11、T3-04

**R17 同类确认连续通过后，问一次要不要以后直接办；出错后自动收紧。**
- 要：「这类续费提醒你已连续 3 次选了停掉。以后超过 30 天没用的订阅我直接停，停完告诉你？[好，直接停] [还是先问我]」
- 不要：永远每次都问；或不打招呼就自己升级
- 依据：T3-08、T3-07、T3-30、T3-03

**R18 完成回执写三样：办了什么、结果数字、接下来会怎样。**
- 要：「已停掉 XX 视频的自动续费。会员用到 12 月 3 日，之后不再扣 ¥30/月。」
- 不要：「操作成功！」
- 依据：T3-22、T3-03

**R19 推荐项必须是对用户最省的那个；加购、保险、会员不做默认。**
- 要：「不含保险 ¥560。要加延误险 ¥30 吗？[不加] [加上]」
- 不要：默认含保险的一键下单；因为上次买过就这次默认勾上
- 依据：T3-21、T3-25

**R20 术语第一次出现用大白话；钱和时间冲突时写出交换比例。**
- 要：「已排上候补（有人退票就自动买）。」「便宜 ¥5，但要多等 2 天。」
- 不要：「候补订单已提交兑现队列。」「已为你选择最低价方案。」
- 依据：T3-33、T3-21、T3-32

---

## 16. 真实文案样本（逐字，来自本轮打开的页面）

| 来源 | 原文 | 备注 |
|---|---|---|
| Apple HIG · Machine learning | "This is a good time to buy," / "Consider waiting for a better price." | 价格预测的把握度写法 |
| Apple HIG · Machine learning | "high chance" / "low chance" | 旅行价格预测的语义分级 |
| Apple HIG · Machine learning | "Because you listen to pop music" | 归因写法，对比 "97% match" |
| Apple HIG · Machine learning | "Suggest less pop music," "Suggest more thrillers," "Mute politics for a week." | 反馈选项写后果，不写「不喜欢」 |
| Apple HIG · Generative AI | "Finding substitutions for ingredients" / "Summarizing key themes from your notes." | 替代 "Processing…" |
| Apple HIG · Generative AI | "Unable to use that description." | Image Playground 的拒绝文案 |
| Apple HIG · Alerts | "View All," "Reply," "Ignore"；"Erase," "Convert," "Clear," "Delete" | 按钮用动词 |
| Horvitz 1999 · LookOut | "Should I go ahead and schedule that?" | 1999 年的确认问句，图 2 |
| Horvitz 1999 · LookOut | "yes," "yeah," "sure," "do it." / "no," "not now," "nah," "go away" | 系统接受的自然应答 |
| OpenAI Model Spec | "Should I reserve all five, or book the best-looking site now?" | 副作用一节的示例问句 |
| Google AP2 博客 | "Buy concert tickets the moment they go on sale" | 人不在场的委托示例 |
| Google AP2 博客 | "I really want this jacket in green, and I'm willing to pay up to 20% more for it." | 带价格条件的意图 |
| Magentic-UI | "Accept" / "Deny" | 动作守卫的两个按钮 |
| Anthropic · Trustworthy agents | "always allow, needs approval, block" | 分动作授权的三档 |
| LangChain Agent Inbox | accept / edit / response / ignore | 人对中断的四种回应 |
| Kim 等 2024 | "I'm not sure, but…" / "It's not clear, but…" | 第一人称与非人称不确定表达 |
| Barrio 等 2016 | "To put this into perspective, 7.9 billion dollars annual revenue is about 25 dollars for every person in the U.S." | 参照物换算句式 |
| GOV.UK Design System | "Change" / "Not provided" | 核对页的修改链接与未填占位 |
| Semi Design（抖音前端） | 推荐标题 "Delete form？"、按钮 "Edit"；不推荐 "Are you sure you want to delete form?" | 标题动词 + 名词，按钮复用动词 |
| Ant Design 文案规范 | 「我们将会审核你的申诉」 | 用「我们」的合理语境 |
| Ant Design 文案规范 | 「欢迎回到社区！」 | 用感叹号的合理语境 |
| Ant Design X · 追问 | 「您需要在这里住多久？」 | 注意这里用了「您」 |
| 智谱 Open-AutoGLM README | 「系统还内置敏感操作确认机制，并支持在登录或验证码场景下进行人工接管。」 | |
| 智谱 Open-AutoGLM 示例代码 | 「请手动完成: {message}」「完成后按回车继续...」 | 接管回调的提示语 |
| 智谱 Open-AutoGLM 提示词 | 「Take_over是接管操作，表示在登录和验证阶段需要用户协助。」 | |
| 智谱 Open-AutoGLM 提示词 | 「Interact是当有多个满足条件的选项时而触发的交互操作，询问用户如何选择。」 | |
| Windows UX Guide | "Provide choices, not dilemmas." | 确认框的写作准则，非界面文案 |

网址见第 20 节。

---

## 17. 对基础稿的更正

1. **「米勒定律 (4±1 Chunks)」归属错误。** 7±2 是 Miller (1956)；约 4 个组块是 Cowan (2001)。基础稿引的 LogRocket 是二手来源。应改为「工作记忆约 4 个组块（Cowan, 2001）」。【记】
2. **「注意力窗口通常只有 1.5 至 3 秒」没有出处。** 基础稿引的信息觅食理论文章不含这个数字，我在本轮核实的任何来源里也没见到。应降级为「设计假设」，或删去。
3. **「28 秒压缩到 3.5 秒」「节省 87.5%」「消除约 85% 的交互摩擦」是推演，不是测量。** 基础稿自己写了「模型测算」，但图表的呈现方式像实验数据。应明确标注为「示意模型，待 A/B 验证」，四段耗时拆解（6s、9s、8s、5s）同样没有来源。
4. **Medium 文章未能证实。** 详见 11.1。不应写成「研究」；「三大认知税」建议改引 Simkute 等 2024、Lee 等 2025、Iqbal & Horvitz 2007、Bansal 等 2024。
5. **Ant Design 关于「你 / 您」的原文**是：「直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。」以及「建议不要使用「您」，太过客气，让用户感觉有些疏远。」【核·镜像】基础稿有三处走样：
   - 「带有明显的下对上客服疏离感」是基础稿的发挥，原文只说「太过客气」「有些疏远」。
   - 「绝不自称本助手 / 小 X」不在 Ant Design 规范里。
   - 「最省时间的中文句式是隐去主语」是基础稿的推论。原文的相关要求是「不要在同一个句式中混用「你」和「我」」，并且认可在反馈、申诉等语境用「我们」。
   另外，同属蚂蚁体系的 Ant Design X 规范，示例问句写的是「您需要在这里住多久？」。连同一个设计体系内部都不统一，「用你不用您」不宜当铁律。
6. **「遵循 Ant Design 按钮规范，用精准动词 + 结果名词」是误引。** Ant Design 文案规范没有按钮动词这一节，只规定按钮和标题不用句号、操作名称与目标页标题一致。支持「按钮写动词」的可核实来源是 Apple HIG 警告框页、Windows 用户体验指南、Semi Design。
7. **Ant Design 的感叹号原文**是「感叹号会让文案显得过于激动，容易让气氛变得过于紧张」，例外是问候或祝贺。基础稿的转述基本准确。
8. **「全网史低」有三重问题。** 一是《广告法》第九条第三项禁止「最高级」「最佳」等用语，罚款 20–100 万元（PA 消息是否构成广告需法务判断）。二是《明码标价和禁止价格欺诈规定》要求被比较价格真实准确。三是 PA 根本无法验证「全网」和「史」。同类问题还有「已凑出最低价」「已锁定直飞最低价」「现在重订最划算」。改法见 R8。
9. **希克定律被用过头。** 基础稿写「选项过多直接引发分析瘫痪」。希克定律讲的是简单选择反应时与选项数的对数关系，不预测瘫痪。选择过载的元分析平均效应约为零，有条件才成立（6.2、6.3）。
10. **渐进披露的出处**用的是一篇 2026 年医疗社工领域的 Medium 文章。建议改引 Nielsen (2006)，并补上本轮核实的 OpenAI Model Spec 与 Ant Design X 的同义表述。
11. **示例里有先斩后奏的写法。** 「已免费锁好 16:30 东航直飞……[立即出票]」如果「锁」是可免费释放的占位，这是正确的保全动作，但文案必须写明占位时限和不出票会怎样。「已备好全员顺延至 17:00 的通知草稿 [一键发送顺延]」是好例子：对外发送前先确认。
12. **订阅退订示例与法规时限不符。** 「立省 ¥30/月 · 明早扣费」只提前一天。《网络交易监督管理办法》第十八条要求经营者在续费日期前五日提醒。PA 作为用户一侧的助手，至少应不晚于这个时点，并留出用户犹豫和操作的时间。
13. **「信用极好买家」是无法核对的评价。** 应换成平台给出的可查标签或事实（例如成交笔数、平台信用等级），或删去。
14. **象限 IV 的示例把省下的钱导向新消费。** 「净省 ¥380——刚好够换你心愿单里那张周六爵士演出票。[去锁座]」与「省钱」的目标相悖；如果链接带佣金，按《互联网广告管理办法》第九条需标明「广告」。
15. **结尾金句的立意需要调整。** 「让用户在按下确认键的那一秒，觉得这个精明的决定完全是自己做出的」把目标设成了制造「自己做主」的感觉。过度依赖研究和各家 Agent 准则的方向相反：要让用户真的有能力在一秒内看懂并否决。建议改为强调「真能否决」而不是「感觉自己决定」。
16. **「所有消息锁死 40 字」与高风险确认的最小信息集冲突。** 见 14.1。
17. **「以结论 + 单一闭环动作替代开放式追问」需要补一句。** 单一动作按钮如果没有「改一下」和「不要」，就是在制造橡皮图章。

---

## 18. 意外与矛盾

1. **审批提示不等于监督。** 93% 的接受率意味着逐条确认基本是走过场；Anthropic 的应对是减少确认，把注意力留给少数真正越界的动作。更有经验的用户放手更多，打断也更多。
2. **解释提高的是通过率，不是正确率。** 连「准确率 50%」这种等于没说的信息都能提高信任。基础稿把「补充信息消除核实成本」当成纯收益，证据显示它可能只是让用户更放心地不核实。
3. **选择过载的平均效应约为零。** 「少即是多」只在特定条件下成立。
4. **「决策疲劳」的经典证据没有通过大规模复制。** 它在产品圈被当作常识引用。
5. **只在 10% 的任务里提问，完成率就能从 30% 升到 52%。** 提问的价值在信息增量，不在频次。
6. **Apple 明确反对在价格预测里显示百分比。** 基础稿强调「数字前置」。两者不矛盾，但要分清：事实（金额、时间）用数字，把握度用行动建议。
7. **第一人称的「我不确定」比客观口吻的「尚不清楚」更能让人留神。** 这与很多品牌语气指南「避免显得没把握」的直觉相反。代价是用户对系统的信心下降、用时变长。
8. **Ant Design 说避免用「您」，Ant Design X 的示例用了「您」。**
9. **「每天只要几毛钱」是让花费显小的卖方话术。** PA 要反着用：花费报总价，节省报累计。
10. **用户把提醒当作「知道一下」，实际却被它带走了十几分钟，而且自己没意识到。** 所以用户说「不介意你多提醒」不能全信。
11. **模型自报的信心不可靠。** PA 的把握度要建立在可检查的事实上。
12. **开源手机 Agent 的提示词允许在条件不满足时自行放宽价格区间。** 对省钱型 PA，这正是必须回头问的地方。
13. **在中国，「通俗易懂」写进了行政法规。** 它不只是体验问题。
14. **人工监督可能制造虚假的安全感。** 「用户点过确认」不能当作产品免责的理由。

---

## 19. 缺口（建议后续补查）

**本轮因网络或额度没能完成的核实**

1. 基础稿引用的 Medium 文章（Yuki K.）是否存在、作者是谁、原文怎么表述三种负担。需要放行 medium.com 后直接打开。
2. Smashing Magazine 2026 年 2 月 Victor Yocco 的文章 *Designing For Agentic AI*。搜索摘要显示它提出六个模式（Intent Preview、Autonomy Dial、Explainable Rationale、Confidence Signal、Action Audit、Escalation Pathway）并给了指标建议；二手页面提到「接受率 >85%」「覆盖率 >10% 触发复查」等阈值，我没能对原文，不建议引用这些数字。
3. NN/g 关于 Agent 体验、确认框、渐进披露的文章原文。
4. Google PAIR Guidebook 原文。
5. OpenAI Operator、ChatGPT agent、Gemini Agent、Manus 的官方确认与接管说明原文。
6. Aza Raskin 文章的原文与确切发布日期。
7. 默认效应、选择过载、劳动错觉、算法厌恶、价格表述、自我损耗、Miller、Cowan 等经典论文的数字，全部需要按 DOI 复核一遍。
8. HBR workslop 与 METR 的数字。
9. ISO 24495-1:2023 的条文，以及中国是否已等同采用为国家标准。
10. 《广告绝对化用语执法指南》原文及其例外情形。

**确实没有查到的问题**

11. 中文里「大概率 / 很可能 / 预计 / 有望」对应的主观概率区间，有没有中文受试者的专项研究。
12. 国内产品（豆包手机助手、千问、支付宝的 AI 支付、荣耀 YOYO、小米、微信）在付款、发消息等节点的真实确认文案。需要截图级的一手样本。
13. 国内 2025–2026 年关于智能体敏感操作确认的标准或监管文件。
14. 撤销窗口的合理时长（几秒、几分钟、到某个时点），有没有针对 Agent 代办动作的实证。
15. 「同类确认连续通过几次后可以提议升级自主度」的阈值，没有文献依据。
16. 通俗语言对决策速度的量化实证（带数字的原始研究）。
17. 手机通知场景下打断成本的实测（Iqbal & Horvitz 是 2007 年桌面数据）。
18. PA 的主动消息在什么商业模式下构成「广告」或使 PA 成为「经营者」，需要法务意见。
19. 消费场景里（钱是自己的）解释与不确定表达对用户判断的影响，现有实验多是众包问答任务。

---

## 20. 来源清单

### 20.1 本轮打开并核对过的来源

| # | 来源 | 网址 |
|---|---|---|
| 1 | Horvitz (1999) Principles of Mixed-Initiative User Interfaces | https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/chi99horvitz-1.pdf |
| 2 | Amershi et al. (2019) Guidelines for Human-AI Interaction | https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf |
| 3 | Bansal et al. (2024) Challenges in Human-Agent Communication | https://www.microsoft.com/en-us/research/wp-content/uploads/2024/12/HCAI_Agents.pdf |
| 4 | Microsoft HAX Toolkit · G10 | https://www.microsoft.com/en-us/haxtoolkit/guideline/scope-services-when-in-doubt/ |
| 5 | Anthropic · Claude Code auto mode (2026-03-25) | https://www.anthropic.com/engineering/claude-code-auto-mode |
| 6 | Anthropic · Claude Code sandboxing (2025-10-20) | https://www.anthropic.com/engineering/claude-code-sandboxing |
| 7 | Claude Code 文档 · Permission modes | https://code.claude.com/docs/en/permission-modes |
| 8 | Anthropic · Measuring AI agent autonomy in practice (2026-02-18) | https://www.anthropic.com/research/measuring-agent-autonomy |
| 9 | Anthropic · Our framework for developing safe and trustworthy agents (2025-08-04) | https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents |
| 10 | Anthropic · Trustworthy agents in practice (2026-04-09) | https://www.anthropic.com/research/trustworthy-agents |
| 11 | Claude's Constitution | https://www.anthropic.com/constitution |
| 12 | Piloting Claude for Chrome (2025-08-25) | https://claude.com/blog/claude-for-chrome |
| 13 | Claude 开发者文档 · Computer use tool | https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool |
| 14 | OpenAI Model Spec（GitHub） | https://github.com/openai/model_spec/blob/main/model_spec.md |
| 15 | Google Cloud Blog · Announcing AP2 (2025-09-16) | https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol |
| 16 | AP2 协议文档（specification.md、flows.md） | https://github.com/google-agentic-commerce/AP2/tree/main/docs/ap2 |
| 17 | Apple HIG · Generative AI | https://developer.apple.com/design/human-interface-guidelines/generative-ai |
| 18 | Apple HIG · Machine learning | https://developer.apple.com/design/human-interface-guidelines/machine-learning |
| 19 | Apple HIG · Alerts | https://developer.apple.com/design/human-interface-guidelines/alerts |
| 20 | Apple HIG · Managing notifications | https://developer.apple.com/design/human-interface-guidelines/managing-notifications |
| 21 | Apple HIG · Undo and redo | https://developer.apple.com/design/human-interface-guidelines/undo-and-redo |
| 22 | Microsoft Research Blog · Magentic-UI (2025-05-19) | https://www.microsoft.com/en-us/research/blog/magentic-ui-an-experimental-human-centered-web-agent/ |
| 23 | MCP 规范 · Tools（GitHub 源文件） | https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2025-06-18/server/tools.mdx |
| 24 | LangChain Agent Inbox README | https://github.com/langchain-ai/agent-inbox |
| 25 | Ant Design 文案规范（GitHub 源文件） | https://github.com/ant-design/ant-design/blob/master/docs/spec/copywriting.zh-CN.md |
| 26 | Ant Design X 规范 · 确认 / 追问 / 生成过程 / 会话设计 | https://github.com/ant-design/x/tree/main/packages/x/docs/spec |
| 27 | Semi Design · Modal 文案规范 | https://github.com/DouyinFE/semi-design/blob/main/content/show/modal/index.md |
| 28 | 智谱 Open-AutoGLM（README 与 prompts_zh.py） | https://github.com/zai-org/Open-AutoGLM |
| 29 | Windows UX Guide · Confirmations（GitHub 源文件） | https://github.com/MicrosoftDocs/win32/blob/docs/desktop-src/uxguide/mess-confirm.md |
| 30 | GOV.UK Design System · question pages / check answers / confirmation pages | https://github.com/alphagov/govuk-design-system/tree/main/src/patterns |
| 31 | Passi & Vorvoreanu (2022) Overreliance on AI: Literature Review | https://www.microsoft.com/en-us/research/uploads/prod/2022/06/Aether-Overreliance-on-AI-Review-Final-6.21.22.pdf |
| 32 | Passi, Dhanorkar & Vorvoreanu (2024) Appropriate reliance on GenAI | https://www.microsoft.com/en-us/research/wp-content/uploads/2024/03/GenAI_AppropriateReliance_Published2024-3-21.pdf |
| 33 | Kim et al. (2024) "I'm Not Sure, But..." | https://www.microsoft.com/en-us/research/publication/im-not-sure-but-examining-the-impact-of-large-language-models-uncertainty-expression-on-user-reliance-and-trust/ |
| 34 | Bansal et al. (2021) Does the Whole Exceed its Parts? | https://www.microsoft.com/en-us/research/publication/does-the-whole-exceed-its-parts-the-effect-of-ai-explanations-on-complementary-team-performance/ |
| 35 | Lee et al. (2025) The Impact of Generative AI on Critical Thinking | https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/ |
| 36 | Simkute et al. (2024) Ironies of Generative AI | https://www.microsoft.com/en-us/research/publication/ironies-of-generative-ai-understanding-and-mitigating-productivity-loss-in-human-ai-interactions/ |
| 37 | Tankelevitch et al. (2024) The Metacognitive Demands and Opportunities of Generative AI | https://www.microsoft.com/en-us/research/publication/the-metacognitive-demands-and-opportunities-of-generative-ai/ |
| 38 | Iqbal & Horvitz (2007) Disruption and Recovery of Computing Tasks | https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/CHI_2007_Iqbal_Horvitz-1.pdf |
| 39 | Barrio, Goldstein & Hofman (2016) Improving Comprehension of Numbers in the News | https://www.microsoft.com/en-us/research/wp-content/uploads/2016/05/p2729-barrio.pdf |
| 40 | 法规镜像（广告法、电子商务法、个人信息保护法、消保法实施条例、明码标价和禁止价格欺诈规定、网络交易监督管理办法、互联网广告管理办法） | https://github.com/LawRefBook/Laws |
| 41 | plainlanguage.gov（GitHub 存档）· Benefits | https://github.com/GSA/plainlanguage.gov/blob/main/_pages/about/benefits.md |

### 20.2 只看到搜索摘要的来源

| 来源 | 网址 |
|---|---|
| Raskin (2007) Never Use a Warning When You Mean Undo | https://alistapart.com/article/neveruseawarning/ |
| Yocco (2026) Designing For Agentic AI, Smashing Magazine | https://www.smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/ |
| OpenAI · Introducing Operator | https://openai.com/index/introducing-operator/ |
| Scheibehenne, Greifeneder & Todd (2010) | https://doi.org/10.1086/651235 |

### 20.3 凭既有知识引用、需按 DOI 复核的来源

见正文各处标【记】的条目。
