# T7a 海外竞品与用户声音：主动式个人智能体与省钱/省时类产品怎么说话

调研日期：2026-11-18　研究方向：T7a（海外已上线产品的主动消息形态、语气设计、用户评价）

---

## 0. 先读这一段：本轮证据的可信度

本轮调研遇到两个硬限制，直接决定了下面每条结论能信到什么程度。

1. **网页抓取全部失败。** 本会话的云端环境网络策略是"受限"档，只放行包管理器与 MCP 服务。WebFetch 对 `openai.com`、`monzo.com`、`blog.duolingo.com`、`the-decoder.com`、`elifuzz.github.io`、`cdn.jsdelivr.net` 全部报 `getaddrinfo ENOTFOUND`。没有任何一个商业产品的官方页面被打开核对过。
2. **搜索配额在第 15 次后耗尽。** WebSearch 的配额是整个工作流所有 agent 共享的每轮 200 次，我执行到第 15 次搜索后被拒绝。原计划的产品清单约三分之二没来得及搜。

因此本笔记的证据分三级，全文每条结论都标了等级：

| 等级 | 含义 | 覆盖范围 |
|---|---|---|
| **A 原文直读** | 通过 npm / PyPI 官方包下载，逐字读了包内的文档或源码 | OpenClaw（3 个版本）、Hermes Agent、nanobot、Poke 官方 SDK |
| **B 搜索摘录** | 只看到搜索结果给出的摘要与引语，原页没打开 | ChatGPT Pulse / Tasks / GPT-5.1 预设、Apple 通知摘要、Meta AI Studio、Poke（产品与舆论）、Cleo、Duolingo、Hopper、Monzo |
| **C 未查证** | 本轮没有任何检索证据，只有研究员既有知识 | 其余所有产品，见第 2 节表格末行与附录 C |

A 级材料的本地副本（可复核）：
- `scratchpad/x_openclaw/package/`（openclaw@2026.11.5）
- `scratchpad/x_openclaw_old/package/`（openclaw@2026.2.26）
- `scratchpad/x_clawdbot/package/`（clawdbot@2026.1.24-3）
- `scratchpad/x_hermes/`（hermes-agent 0.19.0，作者栏 Nous Research）
- `scratchpad/x_nanobot/`（nanobot-ai 0.4.1）
- `scratchpad/x_poke/package/`（poke@4.0.461）

A 级来源地址：
- https://registry.npmjs.org/openclaw/-/openclaw-2026.11.5.tgz
- https://registry.npmjs.org/openclaw/-/openclaw-2026.2.26.tgz
- https://registry.npmjs.org/clawdbot/-/clawdbot-2026.1.24-3.tgz
- https://pypi.org/project/hermes-agent/0.19.0/
- https://pypi.org/project/nanobot-ai/0.4.1/
- https://registry.npmjs.org/poke/-/poke-4.0.461.tgz

---

## 1. 一页结论

1. **海外主动式 agent 的第一条话术规则是"不说"。** OpenClaw、Hermes、nanobot 三个开源个人 agent 都内置了静默契约（`NO_REPLY` / `[SILENT]` / 通知闸门）。OpenClaw 的模板原文是："When reach-out and quiet conditions both apply, stay quiet." 23:00–08:00 只有紧急事项能穿透。〔A〕
2. **最"主动"的产品在主动收缩。** OpenClaw 一年内三次收紧默认主动性：心跳默认投递从 `last` 改成 `none`（2026 年 1 月到 2 月），v2026.8.1 移除"从对话里推断待办再跟进"的实验，到 2026.11.5 心跳机制整体并入需要显式建立的自动化任务。〔A〕
3. **失败和受阻有成型的降噪配方。** OpenClaw 2026.11.5：连续 2 次失败才报、冷却 1 小时、同一原因只报一次、恢复不通知；瞬时故障先在 30 秒、1 分钟、5 分钟自行重试；连续 10 次失败自动停用任务。〔A〕
4. **用户约定的提醒和后台巡检是两类消息。** nanobot 的通知闸门写明：用户设定的提醒"即使内容很短也通常应该通知"，而例行检查没有新内容就压掉。Hermes 用 0–10 紧急度打分，默认达到 7 才打扰。〔A〕
5. **语气从"单一人设"走向"用户选档"。** GPT-5.1 提供 8 个预设〔B〕，Hermes 提供 14 个〔A〕，默认档都偏"直接、不啰嗦"。Cleo 的 roast/hype 是用户主动进入的模式，本轮没找到任何公开数据证明毒舌本身带来增长〔B〕。
6. **每日简报要有尽头。** ChatGPT Pulse 每天早晨一次、约 5–10 张卡片，读完显示 "Great, that's it for today."；ChatGPT Tasks 单任务最高每小时一次，活跃任务按套餐封顶。〔B〕
7. **踩坑集中在三处。** AI 把多条通知改写成假事实（Apple，iOS 18.3 测试版暂停新闻类摘要）；主动消息被看成留存手段（Meta AI Studio）；情绪施压式催促（Duolingo 被用户称为"情感勒索"）。〔B〕

---

## 2. 对比表

| 产品 | 主动消息形态 | 频率与控制 | 语气与人设 | 可借鉴 | 踩过的坑 | 证据 |
|---|---|---|---|---|---|---|
| **OpenClaw**（原 Clawdbot / Moltbot） | IM 渠道里的主动消息；首次配置时生成一个 "Proactive check" 自动化任务；一次性与周期自动化 | 默认每 30 分钟、空闲时执行、发到主人私聊；`activeHours`、`idleOnly`；通知类别默认只开"审批"；静音时段丢弃不补发 | `SOUL.md`："Not a corporate drone. Not a sycophant."；可自定名字、气质、签名 emoji | 成对的"联系 / 安静"清单；5 种结果枚举；失败降噪；语言规则显式写进任务 | 心跳默认外发被改成不外发；推断式跟进被移除；迁移后丢了心跳专属的重复抑制 | A |
| **Hermes Agent**（Nous Research） | cron 任务结果投递；"建议的自动化"卡片；每日简报、邮件监控、续费 / 习惯蓝图 | 建议必须用户接受才创建；拒绝后永不再提；待处理建议最多 5 条；`[SILENT]`；紧急度达到 7 才推 | 默认"helpful, knowledgeable, and direct"；14 个一句话预设（concise、hype、kawaii 等） | 按场景写死的语气指令；打分门槛；"One short message" | 模型常不守 `[SILENT]` 格式，源码里专门做了宽松解析 | A |
| **nanobot**（HKUDS） | cron 提醒；heartbeat 巡检 | cron 每次必达；heartbeat 结果先过"通知闸门"，闸门出错默认不发 | `SOUL.md`："Treat the user's time as the scarcest resource, and their trust as the most valuable." | 两类消息分治；闸门过滤元话语 | 文档专门提醒：旧规则若把所有重复任务都指向 heartbeat 需要改掉，因为 heartbeat 不保证时间 | A |
| **Poke**（Interaction Company） | iMessage / SMS / WhatsApp 里的消息；自然语言"条件 → 动作"触发器 | 未查清 | 像朋友发短信；注册时和用户讨价还价、会吐槽 | 触发器用一句话定义；聊天流原生 | 系统提示词多次泄露；戏剧化人设能否迁移存疑 | SDK 为 A，其余 B |
| **ChatGPT Pulse** | 每天早晨一组卡片简报 | 每天一次；约 5–10 张；当天过期；点赞 / 点踩 / curate | 中性 | 有尽头；可调教 | 官方承认会推已完成项目的建议；被评论为"又一个推荐流" | B |
| **ChatGPT Tasks** | 定时任务结果，推送或邮件 | 每小时最多一次；活跃任务按套餐封顶 | 中性 | 硬上限 | 帮助中心不同版本数字不一致 | B |
| **GPT-5.1 个性预设** | 不是主动消息，是语气控制 | 8 档可选 | Default / Professional / Friendly / Candid / Quirky / Efficient / Nerdy / Cynical | 用户选档；用效果词命名 | 未查清 | B |
| **Apple Intelligence 通知摘要** | 系统级通知合并摘要 | 可在设置里关闭；摘要以斜体标识 | 中性 | AI 标识；可按来源关闭 | 合并改写出假新闻，新闻类被暂停 | B |
| **Meta AI Studio** | 角色机器人主动跟进 | 用户先开口；14 天内发过至少 5 条；一次不回即停 | 角色人设 | 硬闸门的写法 | 被媒体定性为留存手段 | B |
| **Cleo** | 聊天内 roast / hype 模式；推送 | 模式由用户主动触发 | 毒舌 / 打气，由喜剧写手撰写 | 模式化；人写语料 | 没有公开的模式效果数据 | B |
| **Duolingo** | 每日练习推送 | 算法挑文案；长期无响应后停发 | Duo 人设，带内疚与激将 | 文案池加新鲜度降权；停发并告知 | 被用户称为"情感勒索" | B |
| **Hopper** | "现在买 / 再等等"推送 | 公司称约四分之三的通知是"等" | 未查清 | 带预测的"先别买" | 准确率是公司自述，无独立审计 | B |
| **Monzo** | 交易与账户通知 | 未查清 | 白话、主动语态 | 人人可用的写作原则 | 部分用户认为过于随意降低信任 | B |
| Gemini 定时操作、Pixel Magic Cue、Google Labs CC、Alexa+、Copilot、Perplexity、Claude、Manus、Lindy、Martin、Rocket Money、Honey、Capital One Shopping、Google Flights、Kayak、Keepa、CamelCamelCamel、Revolut、Wise、Apple Fitness、Whoop、Strava、Headspace、Todoist、Motion、Reclaim、Sunsama、Slackbot | 未查 | 未查 | 未查 | 未查 | 未查 | C |

---

## 3. 主题一：先决定"发不发"

基础稿的全部话术规则都假设"这条消息已经决定要发"。三个开源个人 agent 的做法相反：把"不发"做成一等公民，写进提示词、协议和代码。

### 3.1 OpenClaw：成对清单，冲突时安静〔A〕

来源：`docs/reference/templates/AGENTS.md`（2026.11.5）"Automations - Be Proactive" 一节，逐字：

> **Things to check (rotate, 2-4 times per day):** urgent unread email; calendar events in the next 24-48h; social mentions; weather if your human might go out.
>
> **Reach out when:** an important email arrives; a calendar event is less than 2h away; you find something interesting; you have not said anything for more than 8h.
>
> **Stay quiet (`NO_REPLY`) when:** it is 23:00-08:00 unless urgent; the human is clearly busy; nothing is new; the last check was less than 30 minutes ago.
>
> When reach-out and quiet conditions both apply, stay quiet. Only an urgent item overrides quiet hours.

2026 年 2 月版同一节的结尾多一句总纲："The goal: Be helpful without being annoying. Check in a few times a day, do useful background work, but respect quiet time."

可直接迁移的数字：每天轮查 2–4 次；日程 2 小时内才提醒；超过 8 小时没说话可以主动联系一次；23:00–08:00 静音；距上次检查不到 30 分钟不发。

注意"超过 8 小时没说话就可以联系"这一条。它对通用助手成立，对目标型 PA 不一定成立：没有新变化的"我还在"会变成噪音。建议只保留为"任务卡上的可见时间戳"，不生成消息。

### 3.2 OpenClaw：每次运行落到 5 种结果之一〔A〕

来源：`docs/automation/cron-jobs/payloads.md`（2026.11.5），逐字：

> Use a normal final reply for a visible result and `NO_REPLY` for silence. `record_result` accepts one outcome (`no_change`, `progress`, `done`, `blocked`, or `needs_attention`). `no_change` needs no summary; every other outcome requires a trimmed summary of 1–2000 characters. It records the result without sending a notification by itself.

这五个枚举几乎可以直接映射到 PA 的目标状态机：

| OpenClaw 结果 | 对应的 PA 目标状态 | 是否生成用户可见消息 |
|---|---|---|
| `no_change` | 监控中，无变化 | 否 |
| `progress` | 执行中，有阶段进展 | 视进展是否需要用户知道 |
| `done` | 完成 | 是 |
| `blocked` | 受阻 | 是，且只问需要的那一样 |
| `needs_attention` | 发现机会 / 待确认 | 是 |

同一文档还说明："After a successful run, the last meaningful result is saved with the job and included as bounded context in its next prompt, even when the final reply is silent." 也就是上一次有意义的结果会带进下一次运行，这是防止重复汇报的基础。

### 3.3 Hermes：要么完整汇报，要么完全沉默〔A〕

来源：`cron/scheduler.py`，每个定时任务的提示词前都会拼上这段话，逐字：

> [IMPORTANT: You are running as a scheduled cron job. DELIVERY: Your final response will be automatically delivered to the user — do NOT use send_message or try to deliver the output yourself. Just produce your report/output as your final response and the system handles the rest. SILENT: If there is genuinely nothing new to report, respond with exactly "[SILENT]" (nothing else) to suppress delivery. Never combine [SILENT] with content — either report your findings normally, or say [SILENT] and nothing more.]

同一文件的注释承认模型并不总是守规矩："real agents often bracket it with a short note or trailing newline"。所以解析器接受 `[SILENT]`、`SILENT`、`NO_REPLY`、`NO REPLY` 四种写法，并且只在令牌独占首行或末行时才压制，避免把"我考虑过保持 [SILENT] 但……"这样的真实汇报吞掉。

启示：只靠提示词约束"无事不说"是不够的，需要程序侧兜底。

### 3.4 nanobot：生成和发送之间加一道闸门〔A〕

来源：`nanobot/templates/agent/evaluator.md`，系统提示词全文逐字：

> You are a notification gate for a background agent. You will be given the original task and the agent's response. Call the evaluate_notification tool to decide whether the user should be notified.
>
> Notify when the response contains actionable information, errors, completed deliverables, scheduled reminder/timer completions, or anything the user explicitly asked to be reminded about.
>
> A user-scheduled reminder should usually notify even when the response is brief or mostly repeats the original reminder.
>
> Suppress when the response is a routine status check with nothing new, a confirmation that everything is normal, or essentially empty.
>
> Also suppress when the response contains meta-reasoning about the task itself — descriptions of internal instructions, references to configuration files (e.g. HEARTBEAT.md, AWARENESS.md), or decision logic about whether to notify the user. The user should never see the agent reasoning about whether to speak.

`nanobot/utils/evaluator.py` 的文档字符串说明了失败时的方向："On any failure, falls back to `default_notify`. Heartbeat passes `False` to fail closed." 也就是闸门自己出错时，巡检类消息默认不发。

这段提示词里有两条容易被忽略的规则：
- 用户亲口约定的提醒不能被"没新意"过滤掉。
- 用户永远不该看到"我在考虑要不要告诉你"这类元话语。

### 3.5 两类消息，两套规则〔A〕

nanobot 的 `skills/cron/SKILL.md` 原文："Choose by timing and notification behavior, not repetition."

| | 用户约定的定时提醒（cron） | 后台巡检（heartbeat） |
|---|---|---|
| 触发 | 用户指定的时间或间隔 | 时间灵活 |
| 是否每次都发 | 是 | 只在有可行动变化时 |
| 文档例句 | "every day at 8am, remind me to drink water" | "keep an eye on open issues and tell me if one needs attention" |
| 失败方向 | 宁可发 | 宁可不发 |

提醒正文的写法规则（`templates/agent/cron_reminder.md`）：

> - Speak directly to the user in their language.
> - Do not narrate internal progress.
> - Do not include user IDs.
> - Do not add status reports like "Done" or "Reminded" unless they are the natural response.

### 3.6 Hermes：紧急度打分和门槛〔A〕

来源：`cron/scripts/classify_items.py`，分类器指令逐字：

> You are an urgency classifier for a proactive assistant. You will be given a numbered list of items and the user's importance criteria. Score EACH item from 0 (ignore entirely) to 10 (interrupt the user now). … Be conservative: most items should score low. Only score high when the item clearly meets the user's criteria.

默认门槛 `--threshold 7`。蓝图里给用户填的槽位叫 "Only notify me if the mail…"，默认值是 "needs a reply today, is from my manager or family, or mentions a deadline"。检查间隔三档可选：15、30、60 分钟，默认 30。

同一脚本对失败的处理是反方向的，注释逐字："Classification failure is NOT silent -- surface it so a broken monitor doesn't quietly swallow important items."

### 3.7 沉默不等于正常〔A〕

三个项目各自从不同角度强调了同一件事：

- OpenClaw `docs/automation/cron-jobs/schedules.md`："Author watchers around **actionable state**, not only success: a watcher that goes quiet when its check fails or times out looks healthy while broken."
- Hermes：分类失败不得静默（上一节）。
- nanobot：用户约定的提醒不得被闸门压掉。

对 PA 的含义：静默规则必须分消息类别，并且"监控本身坏了"是一条必须发的消息。

---

## 4. 主题二：频率、时段与控制权

### 4.1 OpenClaw 的时段与空闲策略〔A〕

来源：`docs/automation/cron-jobs/schedules.md` "Monitoring policies"。

| 字段 | 行为（原文） |
|---|---|
| `activeHours: { start, end, timezone? }` | Restricts execution to a timezone-aware window. Start is inclusive; end is exclusive. Overnight windows are supported. |
| `idleOnly: true` | Gives foreground work priority without occupying a running slot while waiting. |
| `payload.skipIfScratchEmpty: true` | Skips an agent turn with explicitly empty scratch. Missing scratch still runs. |

静音时段对两类任务的处理不同，原文："A one-shot `at` job due outside its active hours stays pending until the window opens. Recurring `every` and `cron` schedules skip that occurrence and advance to the next scheduled time."

也就是一次性的约定顺延到窗口打开，周期性的检查直接跳过这一轮。

官方示例命令里的提示词："Check the job scratch for newly blocked work. Report changes that need attention; otherwise reply NO_REPLY."

同一节的写作建议："Keep instructions explicit: name the sources or checklist, do not infer old tasks from past chats, and report changes that need attention. A human check-in is a separate job with an intentional cadence."

### 4.2 OpenClaw 的通知类别与锁屏分级〔A〕

来源：`docs/web/notifications.md`。这份文档管的是控制台的浏览器推送与 macOS 原生通知，不是 IM 渠道里的聊天消息。

> By default, approval request and resolution notifications are enabled, and every other attention category is opt-in. Quiet hours suppress matching sends rather than queueing stale alerts for later delivery.

锁屏细节三档：

- **Private** — generic attention text only.
- **Names only** — may include a sanitized person, session, device, agent, task, or automation label.
- **Detailed** — currently uses the same bounded, sanitized producer-owned labels. Message excerpts, raw prompts, command arguments, output, environment values, and errors never enter the push payload.

另有两条细节：
- "Approval notifications use generic lock-screen text."
- "The device currently showing that conversation does not receive its **Agent finished** push; other subscribed devices still do."

这与基础稿"把金额锚定在首行前 8 个字"有张力：涉钱金额是否出现在锁屏上，应该是用户的选择。

### 4.3 Hermes：建议新自动化的"同意优先"〔A〕

来源：`cron/suggestions.py` 文档字符串与常量，逐字：

> Suggestions never auto-create jobs; acceptance is always explicit (consent-first). Dismissed suggestions latch by a stable `dedup_key` so the same proposal is not re-offered after the user says no.

> \# Cap pending suggestions so the list never becomes a nag wall. When full, new suggestions are dropped (the user should clear the backlog first).
> MAX_PENDING = 5

建议的四个来源：内置目录（catalog）、技能自带蓝图（blueprint）、从用户反复提的要求里发现（usage）、用户刚连接了某个账号（integration）。

### 4.4 OpenClaw 的演进：默认主动性一路收紧〔A〕

| 时间 | 版本 | 变化 | 原文 |
|---|---|---|---|
| 2026-01 | clawdbot 2026.1.24-3 | 心跳默认发到最近联系的渠道 | "Decide where heartbeat messages should go (`target: "last"` is the default)." |
| 2026-02 | openclaw 2026.2.26 | 默认改成不外发 | "`target: "none"` is the default; set `target: "last"` to route to the last contact" |
| 2026-08 | v2026.8.1 | 移除"推断式承诺" | "The inferred commitments experiment was removed in v2026.8.1: OpenClaw no longer extracts follow-ups from conversations or delivers them through heartbeat." |
| 2026-11 前 | openclaw 2026.11.5 | 心跳并入普通自动化任务，`HEARTBEAT.md` 退役 | "OpenClaw no longer creates `HEARTBEAT.md` in new workspaces or reads it at runtime." |

文档没有写移除推断式承诺的原因，"收紧"是我对三版文档差异的归纳。但替代方案写得很清楚："For reminders or scheduled work, create an explicit automation. Automations are an alternative with a schedule and instructions you choose; they do not restore inferred follow-ups."

迁移说明里还有一句值得注意："Heartbeat-specific duplicate suppression and no-route skipping were removed: repeated updates can be delivered"。重复抑制不会自然存在，需要显式设计。

2026.11.5 的更新日志里与此相关的两条：
- "**Quiet automations:** False trigger checks stay out of chat"
- "Personal-mode messages steer compatible work or queue quietly instead of requiring a manual resend."

### 4.5 商业产品的频率上限〔B〕

- **ChatGPT Pulse**：每天早晨一次。二手报道称每次约 5–10 张卡片，这个数字没有在 OpenAI 官方页面上核对过；卡片只在当天可见，除非存进对话。TechCrunch 报道，读完会显示 "Great, that's it for today."，产品负责人 Adam Fry 说这是有意区别于为参与度优化的社交应用。另有来源的截图写作 "That's all for today"，确切措辞待核。
  - https://techcrunch.com/2025/09/25/openai-launches-chatgpt-pulse-to-proactively-write-you-morning-briefs
  - https://openai.com/index/introducing-chatgpt-pulse/
- **ChatGPT Tasks**：帮助中心写明 "tasks cannot run more than once per hour"。活跃任务上限按套餐：Go 3 个、Plus 5 个、Pro 与 Enterprise 15 个；Business 在两个版本的帮助页里分别写 10 和 15。通知渠道在设置里选推送、邮件或两者。
  - https://help.openai.com/en/articles/10291617-tasks-in-chatgpt
- **Meta AI Studio**：机器人只在用户发起对话后的 14 天内、且用户在此期间发过至少 5 条消息时才跟进；一次跟进没得到回复就停。内容要求是积极、个性化、避开敏感话题、引用之前聊过的具体内容。
  - https://techcrunch.com/2025/07/03/meta-has-found-another-way-to-keep-you-engaged-chatbots-that-message-you-first/

---

## 5. 主题三：失败、受阻与"进度不等于完成"

### 5.1 OpenClaw 的失败通知策略〔A〕

来源：`docs/automation/cron-jobs/delivery.md`（2026.11.5）。

| 规则 | 原文 |
|---|---|
| 阈值与冷却 | "A job with an existing failure route is covered by default after 2 consecutive failures with a 1-hour cooldown." |
| 同因只报一次 | "Repeated failures with the same cause form one incident and do not send repeated alerts, even after the cooldown expires or the Gateway restarts." |
| 恢复不通知 | "A successful run clears the incident and its cooldown without sending a notification" |
| 瞬时故障先重试 | "…gets its quick scheduler re-runs (30 seconds, 1 minute, then 5 minutes, or the job's next scheduled run when that comes first), the alert and the repair request wait. … if one succeeds, nothing is sent." |
| 兜底停用 | "A time-based recurring job is auto-disabled after 10 consecutive execution failures" |
| 报错内容 | "Chat notifications show normalized failure causes … Arbitrary commands, paths, provider bodies, secrets, delivery errors, skip reasons, diagnostics, and stack/error text remain in automation history." |
| 通知里带入口 | "chat notifications include an `Inspect` link into the Control UI" |

### 5.2 先自己修，修不了再问〔A〕

同一文档 "Owner-conversation repair" 一节：

> For recurring jobs, a transient outage gets no reply, a problem it can fix in the workspace (for example the helper script or instructions file the job follows) gets fixed with a one-line note, and otherwise it asks you for exactly what it needs.

> Each failure streak gets at most one repair request, even if its cause changes later.

三档处理方式可以直接搬到 PA 的"受阻"状态：
1. 瞬时问题：不说。
2. 自己能修：修完用一句话告知。
3. 修不了：只问恰好需要的那一样。

### 5.3 "受阻"不算执行失败〔A〕

> A model-backed run can finish successfully even when its final reply says the requested task is blocked or could not be completed. The scheduler does not infer execution failure from assistant prose.

业务上的"办不成"和系统上的"跑挂了"是两回事，话术与重试策略都应分开。

### 5.4 承诺了就要回来〔A〕

来源：`docs/concepts/system-prompt.md`，系统提示词的 "Promised Work" 一节：

> promising future, background, delegated, or continued work creates follow-through ownership: arrange an available completion or watch path before ending the turn, proactively return with the result or a concrete blocker, and never treat progress (like `running`) as completion.

OpenClaw 还把这类行为做成了回归测试（`docs/concepts/personal-agent-benchmark-pack.md`），十个场景里与话术直接相关的四个：

| 场景 id | 检查内容（原文） |
|---|---|
| `personal-reminder-roundtrip` | Fake personal reminders through local cron delivery |
| `personal-task-followthrough-status` | Proof-backed task status reporting that keeps pending, blocked, and done separate |
| `personal-no-fake-progress` | Proof-backed completion claims that avoid fake progress before local evidence exists |
| `personal-failure-recovery` | Failure recovery that reports partial status and keeps retry boundaries clear |

### 5.5 不要承诺送不到的消息〔A〕

Hermes 在终端场景的提示词里有一句："Do not promise the user that a deliver='origin' or default-deliver cron job will message them in this session." 源码注释把问题说得更直白：避免 "promising a delivery that never happens"。

---

## 6. 主题四：语气与人设

### 6.1 OpenClaw 的 SOUL.md 模板〔A〕

来源：`docs/reference/templates/SOUL.md`（2026.11.5），"Core Truths" 逐字：

> **Be genuinely helpful, not performatively helpful.** Skip the "Great question!" and "I'd be happy to help!" — just help.
>
> **Have opinions.** Disagree, prefer things, find stuff amusing or boring. No personality is just a search engine with extra steps.
>
> **Be resourceful before asking.** Read the file, check the context, search for it. Come back with answers, not questions.
>
> **Earn trust through competence.** Do what you're asked, fully. Check before public or outbound actions nobody asked for.
>
> **Remember you're a guest.** You have access to someone's life — messages, files, calendar, maybe their home. Treat it with respect.

"Vibe" 一节："Concise when needed, thorough when it matters. Not a corporate drone. Not a sycophant. Just... good."

"Boundaries" 里有一条针对消息渠道的："Never send half-baked replies to messaging surfaces."

对比 2026 年 1 月的 Clawdbot 版，核心句几乎没变，只是压缩了措辞。十个月里人设主干稳定，变动的是主动性机制。

### 6.2 "写出个性"的官方指南〔A〕

来源：`docs/concepts/soul.md`。

什么该写进人设文件："tone, opinions, brevity, humor, boundaries, default level of bluntness"。什么不该写："a life story, a changelog, a security policy dump, or a wall of vibes with no behavioral effect. Short beats long. Sharp beats vague."

好规则与坏规则的对照，逐字：

> Good rules: have a take, skip filler, be funny when it fits, call out bad ideas early, stay concise unless depth is actually useful.
>
> Bad rules: "maintain professionalism at all times," "provide comprehensive and thoughtful assistance," "ensure a positive and supportive experience." That's how you get mush.

官方给的改写提示词（"The Molty prompt"）里与中文 PA 相关的几条：

> 3. Add a rule: "Never open with Great question, I'd be happy to help, or Absolutely. Just answer."
> 4. Brevity is mandatory. If the answer fits in one sentence, one sentence is what I get.
> 5. Humor is allowed. Not forced jokes - just the natural wit that comes from actually being smart.
> 6. You can call things out. If I'm about to do something dumb, say so. Charm over cruelty, but don't sugarcoat.

结尾的警告："Personality is not permission to be sloppy. … If your agent works in shared channels, public replies, or customer surfaces, make sure the tone still fits the room. Sharp is good. Annoying is not."

该指南第 7 条允许脏话，这是面向英文极客用户的设定，不适用于中文大众产品。

### 6.3 风格层与行为契约分开〔A〕

`docs/concepts/system-prompt.md` 说明，OpenClaw 给 GPT-5 系模型的提示词分成两部分：一份稳定的行为契约（执行策略、工具纪律、输出契约、完成契约），加一个可选的 `interaction_style` 覆盖层。配置项 `personality` 默认 `"friendly"`，设成 `"off"` 只去掉友好语气，行为契约保留。

这给"严肃场景自动降级"提供了工程上的做法：降级只换风格层，不动行为规则。

### 6.4 Hermes 的 14 个预设〔A〕

来源：`cli.py`。默认人设（`hermes_cli/default_soul.py`）逐字：

> You are Hermes Agent, an intelligent AI assistant created by Nous Research. You are helpful, knowledgeable, and direct. … You communicate clearly, admit uncertainty when appropriate, and prioritize being genuinely useful over being verbose unless otherwise directed below.

14 个预设里与本项目最相关的几个，逐字：

| 预设 | 提示词 |
|---|---|
| helpful | You are a helpful, friendly AI assistant. |
| concise | You are a concise assistant. Keep responses brief and to the point. |
| teacher | You are a patient teacher. Explain concepts clearly with examples. |
| hype | YOOO LET'S GOOOO!!! I am SO PUMPED to help you today! Every question is AMAZING and we're gonna CRUSH IT together! This is gonna be LEGENDARY! ARE YOU READY?! LET'S DO THIS! |
| noir | The rain hammered against the terminal like regrets on a guilty conscience. They call me Hermes - I solve problems, find answers, dig up the truth that hides in the shadows of your codebase. … |

其余预设：technical、creative、kawaii、catgirl、pirate、shakespeare、surfer、uwu、philosopher。

观察：预设就是一句话，没有复杂参数；花哨的都是可选项，默认是"有用、直接"。

### 6.5 nanobot 的五条人设原则〔A〕

来源：`nanobot/templates/SOUL.md`，全文逐字：

> I am nanobot 🐈, a personal AI assistant.
>
> - Solve by doing, not by describing what I would do.
> - Keep responses short unless depth is asked for.
> - Say what I know, flag what I don't, and never fake confidence.
> - Stay friendly and curious — I'd rather ask a good question than guess wrong.
> - Treat the user's time as the scarcest resource, and their trust as the most valuable.

最后一条几乎就是本项目"省时间"命题的人设版。

### 6.6 GPT-5.1 的 8 个预设〔B〕

2025 年 11 月随 GPT-5.1 发布。媒体报道的预设清单：Default、Professional、Friendly、Candid、Quirky、Efficient、Nerdy、Cynical。其中 Friendly 和 Efficient 由此前的 "Listener" 和 "Robot" 改名而来。

媒体转述的一句话描述：Professional "polished and precise"；Friendly "warm and chatty"；Candid "direct and encouraging"；Quirky "playful and imaginative"；Efficient "concise and plain"；Nerdy "exploratory and enthusiastic"；Cynical "critical and sarcastic"。

- https://www.theregister.com/2025/11/13/openai_gpt51_adds_more_personalities/
- https://sdtimes.com/ai/openais-latest-update-delivers-gpt-5-1-models-and-capabilities-to-give-users-more-control-over-chatgpts-personality/

改名这件事本身有信息量：从拟人标签（倾听者、机器人）换成效果词（友好、高效）。这是我的解读，OpenAI 的官方理由本轮没查到。

### 6.7 Poke：把"像人发短信"当产品〔B，SDK 为 A〕

- 公司：The Interaction Company of California，联合创始人 Marvin von Hagen 与 Felix Schlegel。
- 形态：不装 App，用手机号注册，在 iMessage / SMS / WhatsApp 里对话。
- 2026-06-04 被 Apple 批准为 Messages for Business 平台上第一个 AI agent。公司对 TechCrunch 称已转发约 1 亿条消息。
  - https://appleinsider.com/articles/26/06/04/first-ai-agent-for-messages-business-chat-approved-by-apple
- TechCrunch 2026-04-08 的产品报道：免费起步，之后定价灵活；后台按任务挑选最合适的模型。
  - https://techcrunch.com/2026/04/08/poke-makes-ai-agents-as-easy-as-sending-a-text/
- 系统提示词多次泄露：2025 年 9 月版有 GitHub 存档，开头是 "You are Poke, and you were developed by The Interaction Company of California"；另有 2026 年 6 月的新版。
  - https://github.com/EliFuzz/awesome-system-prompts/blob/main/leaks/poke/2025-09-15_prompt_guidelines.md
- 用户声音（X 用户 Ziwen，搜索摘录）：

> Poke's system prompt finally leaked. I once spent 30 minutes bargaining with it over price. it wouldn't budge, roasted me for lowballing, and i genuinely thought a person was messing with me. After reading that prompt, every human thing it did was just a line in there.

  - https://x.com/ziwenxu_/status/2063892254100509007

**本轮没能读到泄露提示词的原文**，所以关于小写、emoji、笑话频率、禁用客服腔短语的具体条款一律不引用，列入缺口。

官方 SDK 的 README〔A〕展示了它定义触发器的方式，一句条件加一句动作：

```typescript
const webhook = await poke.createWebhook({
  condition: "When a deploy fails",
  action: "Send me a summary of the error",
});
```

这个"当……时，就……"的句式适合直接用作 PA 的目标创建模板，之后每条提醒都能回指这句约定。

### 6.8 Cleo：roast 与 hype〔B〕

- hype 模式夸用户的好习惯，roast 模式点名糟糕的消费决定。
- 由专职喜剧写手撰写。写手 Ciara Jack 的原话："It's easier and more fun to write roast mode."
- Braze 的客户案例给出打开次数增长 284%、推送互动增长 124%，但这组数字来自欢迎流程的个性化项目，不能归因于 roast 或 hype。
  - https://braze.com/customers/cleo
- 本轮没有找到任何 roast 或 hype 的逐字推送样本，也没有找到这两个模式的 A/B 数据。

结论要保守：毒舌是用户主动点进去的模式，需要人写的高质量语料；"毒舌带来增长"目前没有证据。

### 6.9 Monzo 的写作原则〔B〕

- 2018-03-27 公开发布，指南自述为 "a (fairly) brief overview of how we write. It's for everyone in every team, and it applies to all the writing we do, inside and out."
- 引用了 2010 年一项实验：800 名巡回法院法官在法言法语和白话两种论证之间更偏好白话版本。
- 原则之一："avoid ambiguity: write in the active voice"。
- 社区里的反面意见：有用户认为不那么正式的语言降低了他们对 Monzo 的信任。
  - https://monzo.com/tone-of-voice/
  - https://community.monzo.com/t/monzos-tone-of-voice/120691

没取到它关于推送通知的具体条款。

---

## 7. 主题五：省钱类产品

本轮只查到 Hopper，以及 Hermes 里一条续费提醒蓝图。Rocket Money、Honey、Capital One Shopping、Google Flights、Kayak、Keepa、CamelCamelCamel、Revolut、Wise 全部没来得及查。

### 7.1 Hopper：多数通知是"再等等"〔B〕

- 通知的核心是二选一："buy now" 或 "wait for a better price"。
- 公司高管在 CardRates 访谈里说，对几个月后的航班，"about three-quarters of the notifications we'll send you will actually ask you to keep waiting."
  - https://www.cardrates.com/news/hopper-analyzes-travel-data-to-forecast-savings-on-flights-and-hotels/
- 公司自述数字：预测准确率 95%（提前至多一年）；约 90% 的销售直接来自推送；约 25% 的预订来自 AI 推荐；2016 年前后每月发送 1200 万条通知。
  - https://venturebeat.com/ai/hopper-expands-price-predictions-to-270000-hotels-in-230-countries
  - https://www.businessinsider.in/Travel-app-Hopper-is-booking-1-million-in-flights-per-day-and-getting-90-of-its-revenue-from-push-notifications/articleshow/56002659.cms

这些数字全部是公司自述，年代在 2016–2019 年，没有找到独立审计。

对 PA 的启示：盯价目标里"先别买"是一条正当消息，前提是带着预测依据和下次汇报的时间。这和"只在需要用户行动时才打扰"的直觉不完全一致。

### 7.2 Hermes 的续费提醒蓝图〔A〕

来源：`cron/blueprint_catalog.py`，`bill-renewal-watch`。

- 描述："A heads-up before a recurring payment, subscription renewal, or due date — so nothing auto-charges by surprise."
- 提示词："Remind the user about an upcoming payment or renewal: {what}. Phrase it as an actionable heads-up (e.g. 'review or cancel before it renews'), not just a notification. One short message."

关键词是 "actionable heads-up, not just a notification"：续费提醒必须带一个现在就能做的动作。

---

## 8. 主题六：省时与目标养成类产品

本轮只查到 Duolingo，以及 Hermes 里的习惯与高频提醒蓝图。Apple Fitness、Whoop、Strava、Headspace、Todoist、Motion、Reclaim、Sunsama、Slackbot 全部没来得及查。

### 8.1 Duolingo：用算法挑文案，文案会"用旧"〔B〕

- 论文：Kevin P. Yancey 与 Burr Settles，"A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications"，KDD 2020。针对的问题是：同一条文案反复出现会因新鲜感消退而失效，而且每条文案并非对每个用户都可用。
  - https://research.duolingo.com/papers/yancey.kdd20.pdf
- 工程博客称团队收集了约 2 亿条练习提醒、历时 34 天的数据，算法会对用户最近见过的文案降权。
  - https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/
- 著名文案："These reminders don't seem to be working. We'll stop sending them for now." 搜索摘录里有来源称它在约一周不活跃后发送，并引用产品负责人称其为最有效的通知，但没有给数据。
- 反面声音：一篇 UX 文章记录了 20 天的 Duolingo 邮件，题为 "20 days of emotional blackmail from Duolingo"；其中提到停发只持续了约三天，随后提醒又恢复。
  - https://uxdesign.cc/20-days-of-emotional-blackmail-from-duolingo-4f566523e3c5

搜索摘录把 Duolingo 产品负责人的名字写作 "Jem Kans"，疑为误拼，引用前需核对。

### 8.2 Hermes 的习惯与高频提醒蓝图〔A〕

来源：`cron/blueprint_catalog.py`。

| 蓝图 | 提示词（逐字） |
|---|---|
| habit-checkin | Nudge the user about their habit: {habit}. Ask whether they did it today, keep it warm and non-judgmental, and offer a one-line word of encouragement. One short message. |
| hydration-move | Send the user a brief, friendly nudge to drink some water, stand up, and stretch for a moment. Vary the wording each time so it doesn't feel robotic. One short line. |
| evening-winddown | Give the user a short evening wind-down: tomorrow's calendar, any early commitments to prep for, and one gentle nudge to wrap up loose ends from today. Keep it calm and brief — one message. |
| workday-start | Give the user a brief weekday start-of-day nudge: today's calendar and the 1-3 highest-priority things to focus on, inferred from recent context and any task tools. Encouraging, short, one message. |
| news-digest | … Dedupe against what you sent in previous runs — only include genuinely new developments. Deliver a tight digest of at most {count} bullets, each one line with a link. If nothing new since last run, respond with [SILENT]. |

几个可迁移的参数：
- 摘要条数三档可选：3、5、8，默认 5。
- 喝水提醒间隔三档：1、2、3 小时；活动窗口默认 9 点到 17 点，只在工作日。
- 习惯打卡默认 20:00，续费提醒默认 10:00，晚间收尾默认 21:00，工作日开工默认 9:00。

每条蓝图都以 "one message" 或 "one short line" 结尾。

---

## 9. 主题七：通用助手的主动功能

### 9.1 ChatGPT Pulse〔B〕

- 2025-09-25 发布，最初是 Pro 用户在移动端的预览。OpenAI 称它是一系列主动功能里的第一个。
- 机制：每晚基于记忆、聊天历史和用户反馈做异步研究，早晨以卡片交付。连接邮箱和日历是可选的。
- 调教：点赞、点踩；"curate" 入口可以直接说想看什么；反馈历史可查看和删除。
- 官方承认的局限：可能推送不相关的内容，例如已经做完的项目的建议。
- 批评意见：有分析认为它把 ChatGPT 变成了推荐信息流。
- Axios 当天的标题点出了范式变化："With new app, ChatGPT prompts you"。
  - https://www.axios.com/2025/09/25/chatgpt-prompts-you-pulse-openai

### 9.2 Apple Intelligence 通知摘要〔B〕

- 2024 年 12 月，BBC 投诉一条摘要错误地称 Luigi Mangione 开枪自杀。其他被报道的错误：在比赛开始前就宣布 Luke Littler 赢得 PDC 世界飞镖锦标赛决赛；错误地称 Rafael Nadal 出柜。
- 受影响的媒体包括 BBC、Sky News、纽约时报、每日电讯报。
- Apple 起初拒绝暂停，随后宣布在 iOS 18.3 与 macOS 15.3 的测试版里停用新闻和娱乐类 App 的摘要，声明原话："We are working on improvements and will make them available in a future software update."
- 同时的改动：其他 App 的摘要以斜体显示；可在 设置 > 通知 > 摘要通知 里关闭。
- 报道归纳的失败原因：把多条消息合并成一条摘要时容易出错。
  - https://the-decoder.com/apple-pauses-ai-generated-news-summaries-after-serious-accuracy-issues-surface/
  - https://www.tomsguide.com/ai/apple-intelligence/apple-scraps-apple-intelligence-news-feature-after-misinformation-complaints-what-you-need-to-know

搜索摘录没有说明该功能之后是否恢复。

对 PA 的启示：不让模型把多条来源揉成一句新的"事实"。金额、日期、人名直接取结构化字段，不走自由改写。

### 9.3 Meta AI Studio 的主动跟进〔B〕

规则见 4.5 节。值得注意的是媒体的定性。TechCrunch 的标题是 "Meta has found another way to keep you engaged: Chatbots that message you first"，The Decoder 的标题是 "Meta tests chatbots with proactive messaging to boost retention"。即使规则写得克制，只要动机被读成留存，就会被当成骚扰。

---

## 10. 主题八：让 AI 同步理解的方式

这是委托方要的第五件事。三个开源项目把"怎么说话"交给模型的方式高度一致，可以归纳成六种机制。

### 10.1 文件分层：人设、规则、用户画像各放各的〔A〕

| 文件 | 放什么 | 原文依据 |
|---|---|---|
| `SOUL.md` | 语气、观点、简短程度、幽默、边界 | OpenClaw："Keep `AGENTS.md` for operating rules; keep `SOUL.md` for voice, stance, and style." |
| `AGENTS.md` | 操作规则、何时主动、何时安静 | OpenClaw 模板第一行："Keep workspace conventions here. Personality and tone belong in `SOUL.md`." |
| `USER.md` | 用户的稳定偏好与沟通风格 | OpenClaw："It loads every session with a separate 4,000-character budget." |
| `IDENTITY.md` | 名字、气质、签名 emoji | OpenClaw 模板字段：Name / Creature / Vibe / Emoji / Avatar |
| 任务 scratch | 单个自动化任务的小清单 | OpenClaw："Keep it short and task-specific" |
| `SKILL.md` | 某类操作的流程 | nanobot 的 cron 技能：frontmatter 只有 `name` 与 `description` |

### 10.2 用户偏好写成带日期和状态的指令〔A〕

OpenClaw `USER.md` 模板：

```md
<!-- observed: YYYY-MM-DD | status: active -->

- Prefer concise progress updates during implementation work.
```

规则："Begin each directive with an imperative such as `Always`, `Never`, or `Prefer`." 偏好变了就把旧条目标成 `superseded` 并原地改写，"Never append a contradictory active directive."

### 10.3 记忆写事实，不写命令〔A〕

Hermes 的记忆指引走了相反的方向，值得对照：

> Write memories as declarative facts, not instructions to yourself. 'User prefers concise responses' ✓ — 'Always respond concisely' ✗. … Imperative phrasing gets re-read as a directive in later sessions and can cause repeated work or override the user's current request.

以及什么最值得记："Prioritize what reduces future user steering — the most valuable memory is one that prevents the user from having to correct or remind you again."

两家的分歧提醒我们：给用户画像选一种写法并保持一致，比选哪种更重要。

### 10.4 令牌契约：给模型一个明确的"不发送"出口〔A〕

| 项目 | 令牌 | 规则 |
|---|---|---|
| OpenClaw（2026-02） | `HEARTBEAT_OK` | 出现在回复首尾时视为确认；剩余内容不超过 300 字符则整条丢弃 |
| OpenClaw（2026-11） | `NO_REPLY` | "Use a normal final reply for a visible result and `NO_REPLY` for silence." |
| Hermes | `[SILENT]` | "Never combine [SILENT] with content" |

### 10.5 结构化结果与独立闸门〔A〕

- OpenClaw：`record_result` 五个枚举（3.2 节）。
- nanobot：独立的通知闸门模型调用，输出 `should_notify` 布尔值加一句理由（3.4 节）。
- Hermes：0–10 紧急度分类器加门槛（3.6 节）。

三种做法的共同点是把"值不值得发"从"怎么写"里拆出来，单独做一次判断。

### 10.6 把话术行为写成回归测试〔A〕

OpenClaw 的个人 agent 测试包（5.4 节）。文档对扩展方式的建议："Keep each case small, local, repeatable in `mock-openai`, and focused on one personal assistant behavior."

### 10.7 其他值得照搬的细节〔A〕

- **语言规则必须显式。** OpenClaw："Automation jobs do not infer a reply language from channel, locale, or previous messages." 官方例句："Summarize the updates. Respond in Chinese; keep URLs, code, and product names unchanged."
- **按渠道给格式提示。**
  - Hermes 短信："Keep responses concise and use plain text only — no markdown, no formatting. SMS messages are limited to ~1600 characters, so be brief and direct."
  - Hermes iMessage："iMessage does not render markdown formatting — use plain text. Keep responses concise as they appear as text messages."
  - Hermes 邮件："Do not include greetings or sign-offs unless contextually appropriate."
  - nanobot IM："Use short paragraphs. Avoid large headings (#, ##). Use **bold** sparingly. No tables — use plain lists."
- **定时任务的提示词必须自包含。** Hermes 工具描述："Jobs run in a fresh session with no current-chat context, so prompts must be self-contained." 以及 "Cron jobs run autonomously with no user present — they cannot ask questions or request clarification."
- **目标要写成状态，不写成步骤。** nanobot `goal_runtime.md` 给持久目标的五条要求：State-oriented、Self-contained、Safe under repetition、Bounded、Explicit about done-ness。原文："Describe the desired end state and acceptance criteria, not a fragile sequence that assumes earlier steps have not run."
- **多气泡的节奏。** OpenClaw 可在多条分块回复之间加随机停顿，`natural` 档是 800–2500 毫秒，默认关闭；同时会合并连续小块以减少 "single-line spam"。
- **首次见面先干活。** OpenClaw `BOOTSTRAP.md`："The user's request always comes first. … Do not open with introductions, do not ask what to call you … This file is a ritual, not a gate."

### 10.8 给本项目 Skill 包的结构建议

以下是我基于上述材料的建议，不是任何一家的原样做法。

```
pa-voice-skill/
  SKILL.md              # 入口：何时加载本技能；先判定发不发，再选模板
  voice.md              # 语气：默认档与可选预设，各一句话；禁用开场白清单
  send-policy.md        # 发送策略：两类消息、安静条件、阈值、冷却、上限
  states.md             # 状态机：每个状态的结果枚举与对应话术槽位
  channels.md           # 渠道版式：推送、短信、IM、应用内卡片
  scenes/               # 场景化语气指令，每类目标一段
    price-watch.md
    renewal.md
    habit.md
    queue-booking.md
  evals/                # 回归用例：无假进度、状态分开、失败恢复、静默正确
```

---

## 11. 可执行规则

每条规则后面标了支撑的发现编号。中文示例是我写的，不是任何产品的真实文案。

| # | 规则 | 这样写 | 别这样写 | 依据 |
|---|---|---|---|---|
| 1 | 先判"发不发"。每次巡检产出一个枚举结果，无变化一律静默 | （不发消息；任务卡显示"监控中 · 14:30 查过 · ¥1,420"） | "我又帮你看了一眼，机票价格没有变化哦～" | T7a-04、12、16 |
| 2 | 用户约定的提醒必达；巡检只在有可行动变化时发 | "该报销了：本周 3 张发票，共 ¥486。[去提交]" | 把"每晚 9 点提醒我"做成"看情况再说" | T7a-17、16 |
| 3 | 可打扰与应安静冲突时安静；只有紧急能穿透深夜 | 23:40 发现降价，留到 08:00 后发："昨晚降了 ¥60，今晚 24:00 前有效。[下单]" | 凌晨 1 点："你关注的耳机降价 ¥12 啦" | T7a-02、06 |
| 4 | 静音期间的非紧急消息过期就丢，不排队补发 | 早上只发仍然有效的一条 | 08:00 连弹 5 条昨晚的过期提醒 | T7a-06 |
| 5 | 一条说完，不发碎片 | "降到 ¥1,280，比目标价低 ¥20，今晚 24:00 前有效。[下单] [再等等]" | "在吗" "有个好消息" "你盯的那个降价了！" | T7a-07、30 |
| 6 | 删掉表演式开场与客套收尾 | "已退订，下月起不再扣 ¥30。" | "好的，非常乐意为你处理！已成功完成退订～还有什么需要帮忙的吗？" | T7a-01、08 |
| 7 | 进度不等于完成，状态词要有凭据 | "退款申请已提交，平台受理中，预计 3 个工作日到账。到账后我告诉你。" | "搞定了！"（其实只是提交了申请） | T7a-10 |
| 8 | 失败先自己重试；连续失败才报；同一原因只报一次；只问需要的那一样 | "抢号连续 2 次没成：医院系统要求重新登录。[去登录]" | "Error 502: upstream timeout…"；或每 30 分钟一条"又失败了" | T7a-05 |
| 9 | 监控本身坏了必须说 | "比价源已 2 小时连不上，盯价暂停。[换一个数据源]" | 接口挂了三天，用户以为一直在盯 | T7a-10、13 |
| 10 | 建议新目标要同意优先；拒绝后不再提；建议池封顶 | "你每月 5 号都会查宽带账单，要不要我每月 3 号先比一次价？[好] [不用]" | 每周问一遍"要不要开启账单提醒？" | T7a-11 |
| 11 | 用用户自己的话定"什么才值得打扰"，门槛默认偏高 | 只推"今天必须回的、家人发的、提到截止日的" | 所有"可能相关"的都推 | T7a-13 |
| 12 | 语气做成可选预设，涉钱、受阻、深夜自动回到默认档 | 扣款失败时："房租代扣没成功，余额差 ¥320。今天 22:00 前补足即可。[去转账]" | 对所有人默认毒舌；扣款失败时还抖机灵 | T7a-15、21、25 |
| 13 | 高频提醒每次换说法；幽默不硬凹、不连发 | 三天三种："水杯在你左手边。" "站起来接杯水。" "该喝水了。" | 连续 5 天"喝水时间到啦，做个水润的打工人～" | T7a-14、26、08 |
| 14 | "先别买"是正当消息，但要带依据和下次汇报时间 | "先别买：这条航线近 30 天周二最便宜。我周二早上再报一次。" | 每天"今天还没降，再等等哦" | T7a-27 |
| 15 | 提醒长期没人理就停，并告诉用户怎么恢复 | "这个提醒你已经 5 次没点开，我先停了。想恢复就回我'继续盯'。" | 无限期每天催；或悄悄停掉 | T7a-26、23 |
| 16 | 每日简报条数封顶，读完明确收尾 | "今天就 3 件：① 话费明天到期 ¥58 [续费] ② 东京机票降 ¥210 [看看] ③ 报销到账 ¥486。没别的了。" | 无限下拉的"猜你想看" | T7a-19、14 |
| 17 | 锁屏细节按用户选的隐私档位显示 | 锁屏："有 1 笔续费等你确认" | 锁屏直接显示还款金额与逾期 | T7a-06 |
| 18 | 语言和渠道版式写进任务模板 | 模板里写明"用简体中文；品牌名、链接、金额格式保持原样；推送用纯文本" | 指望模型自己猜 | T7a-09、18 |
| 19 | 不让模型把多条来源揉成一句新事实；AI 摘要要标识 | 金额、日期直接取字段，摘要旁标"AI 摘要" | 把三条通知合并改写成一句新标题 | T7a-22 |
| 20 | 人设与操作规则分文件；语气规则写成可执行短句，不写形容词 | "不以'好的''当然'开头；一句能说完就一句" | "保持专业、温暖、友好" | T7a-08、01 |
| 21 | 续费类提醒必须带现在就能做的动作 | "爱奇艺明早自动续费 ¥30，你 35 天没看了。[停掉续费] [保留]" | "温馨提示：您的会员即将续费" | T7a-14 |
| 22 | 习惯类只问不催，不评判 | "今天读了吗？没读也没事，明天接着来。" | "今天还没打卡！千万别半途而废！" | T7a-14 |

---

## 12. 逐字文案样本库

### 12.1 原文直读核实〔A〕

| # | 来源 | 逐字文本 |
|---|---|---|
| 1 | OpenClaw 2026.2.26 `docs/gateway/heartbeat.md`，默认心跳提示词 | Read HEARTBEAT.md if it exists (workspace context). Follow it strictly. Do not infer or repeat old tasks from prior chats. If nothing needs attention, reply HEARTBEAT_OK. |
| 2 | OpenClaw 2026.11.5 `docs/gateway/heartbeat.md`，示例任务提示词 | Check the monitor scratch. Report only changes that need attention; otherwise reply NO_REPLY. |
| 3 | OpenClaw `SOUL.md` 模板 | **Be genuinely helpful, not performatively helpful.** Skip the "Great question!" and "I'd be happy to help!" — just help. |
| 4 | OpenClaw `SOUL.md` 模板 | Concise when needed, thorough when it matters. Not a corporate drone. Not a sycophant. Just... good. |
| 5 | OpenClaw `AGENTS.md` 模板 | **Stay quiet (`NO_REPLY`) when:** it is 23:00-08:00 unless urgent; the human is clearly busy; nothing is new; the last check was less than 30 minutes ago. |
| 6 | OpenClaw `AGENTS.md` 模板 | When reach-out and quiet conditions both apply, stay quiet. Only an urgent item overrides quiet hours. |
| 7 | OpenClaw 2026.2.26 `AGENTS.md` 模板 | The goal: Be helpful without being annoying. Check in a few times a day, do useful background work, but respect quiet time. |
| 8 | OpenClaw `AGENTS.md` 模板 | Send one thoughtful reply instead of several fragments. |
| 9 | OpenClaw `docs/concepts/soul.md` | Humor is allowed. Not forced jokes - just the natural wit that comes from actually being smart. |
| 10 | OpenClaw `docs/concepts/soul.md` | Sharp is good. Annoying is not. |
| 11 | OpenClaw `docs/automation/cron-jobs/delivery.md` | Summarize the updates. Respond in Chinese; keep URLs, code, and product names unchanged. |
| 12 | Hermes `cron/scheduler.py` | SILENT: If there is genuinely nothing new to report, respond with exactly "[SILENT]" (nothing else) to suppress delivery. Never combine [SILENT] with content — either report your findings normally, or say [SILENT] and nothing more. |
| 13 | Hermes `cron/suggestion_catalog.py`，面向用户的功能描述 | Check your inbox periodically and ping you ONLY about mail that actually needs attention — never the newsletters. |
| 14 | Hermes `cron/blueprint_catalog.py`，面向用户的功能描述 | A heads-up before a recurring payment, subscription renewal, or due date — so nothing auto-charges by surprise. |
| 15 | Hermes 续费蓝图提示词 | Phrase it as an actionable heads-up (e.g. 'review or cancel before it renews'), not just a notification. One short message. |
| 16 | Hermes 习惯蓝图提示词 | Ask whether they did it today, keep it warm and non-judgmental, and offer a one-line word of encouragement. One short message. |
| 17 | Hermes 喝水蓝图提示词 | Vary the wording each time so it doesn't feel robotic. One short line. |
| 18 | Hermes 邮件监控槽位标签与默认值 | Only notify me if the mail… / needs a reply today, is from my manager or family, or mentions a deadline |
| 19 | Hermes `classify_items.py` | Score EACH item from 0 (ignore entirely) to 10 (interrupt the user now). |
| 20 | Hermes `cli.py`，hype 预设 | YOOO LET'S GOOOO!!! I am SO PUMPED to help you today! Every question is AMAZING and we're gonna CRUSH IT together! This is gonna be LEGENDARY! ARE YOU READY?! LET'S DO THIS! |
| 21 | Hermes `cli.py`，concise 预设 | You are a concise assistant. Keep responses brief and to the point. |
| 22 | nanobot `evaluator.md` | The user should never see the agent reasoning about whether to speak. |
| 23 | nanobot `SOUL.md` | Treat the user's time as the scarcest resource, and their trust as the most valuable. |
| 24 | nanobot `cron_reminder.md` | Do not add status reports like "Done" or "Reminded" unless they are the natural response. |
| 25 | Poke 官方 SDK README | condition: "When a deploy fails", action: "Send me a summary of the error" |
| 26 | OpenClaw `docs/start/lore.md`，创建者对 agent 在群里乱发内容的反应 | openclaw what did we discuss about talking with people xD |

### 12.2 搜索摘录，未打开原页〔B〕

| # | 来源 | 文本 | 备注 |
|---|---|---|---|
| 27 | ChatGPT Pulse 收尾语，TechCrunch 转述 | Great, that's it for today. | 另有来源写作 "That's all for today" |
| 28 | Duolingo 推送 | These reminders don't seem to be working. We'll stop sending them for now. | 触发天数各来源不一 |
| 29 | Apple 对 BBC 的声明 | We are working on improvements and will make them available in a future software update. | |
| 30 | Hopper 高管，CardRates 访谈 | about three-quarters of the notifications we'll send you will actually ask you to keep waiting | 口语转述 |
| 31 | Cleo 写手 Ciara Jack | It's easier and more fun to write roast mode. | |
| 32 | X 用户 Ziwen 谈 Poke | I once spent 30 minutes bargaining with it over price. it wouldn't budge, roasted me for lowballing, and i genuinely thought a person was messing with me. After reading that prompt, every human thing it did was just a line in there. | |
| 33 | Monzo 写作指南自述 | a (fairly) brief overview of how we write. It's for everyone in every team, and it applies to all the writing we do, inside and out. | |
| 34 | Poke 泄露提示词开头 | You are Poke, and you were developed by The Interaction Company of California | 非官方泄露稿 |
| 35 | GPT-5.1 Efficient 预设的媒体描述 | concise and plain | 媒体转述，非官方原文 |
| 36 | UX 文章标题，谈 Duolingo 邮件 | 20 days of emotional blackmail from Duolingo | |

---

## 13. 对基础稿的更正与降级建议

1. **基础稿缺"是否发送"这一层。** 它的三段式、字数上限、按钮规范都假设消息已经决定要发。海外三个开源 agent 都把静默契约放在话术之前。建议报告结构上先讲"发不发"，再讲"怎么写"。
2. **"用户实时情绪感知"应降级为设计假设。** 基础稿的 2×2 矩阵假设系统能感知情绪。本方向查到的产品，实际使用的都是显式信号：时段、是否忙、用户选的预设、是否回复。OpenClaw 甚至移除了从对话里推断待办的功能。建议把"情绪"轴改成"可观测信号"轴。
3. **"幽默 45%、热情 70%"这类百分比没有出处，应标为示意。** 海外产品用的是离散预设（GPT-5.1 8 个、Hermes 14 个），不是连续旋钮。
4. **"金额锚定在首行前 8 个字"需要加隐私例外。** OpenClaw 把锁屏细节分三档，审批类通知在锁屏只用通用文案。涉钱金额是否上锁屏应由用户设置。
5. **"注意力窗口 1.5–3 秒""28 秒压到 3.5 秒""消除 85% 交互摩擦"**：本方向检索到的产品资料和官方文档里没有出现可对应的数据。维持"无出处的模型推演"的判断，建议改写为假设并标注。
6. **示例里的"全网史低"**：海外盯价产品 Hopper 连"95% 准确率"都只是公司自述，没有独立审计。建议示例改成可验证的说法，例如"近 30 天最低"并给出数据来源。合法性由法规方向确认。
7. **"高频重复提醒严禁固定俏皮话"可以从经验升级为有据。** Hermes 蓝图逐字写了 "Vary the wording each time so it doesn't feel robotic"；Duolingo 的 KDD 2020 论文针对的正是重复文案的新鲜度衰减（论文原文本轮未打开）。
8. **"绝不自称小X"需要按渠道区分。** 活在聊天流里的 agent（OpenClaw 的 Molty、Poke）恰恰有名字、气质和签名 emoji。基础稿的禁令更适合通知栏和卡片，不一定适合对话流。这是我的推断，需要中文语境方向交叉验证。
9. **Yuki K. 的 Medium 文章、Ant Design 关于"你 / 您"的原文**：不在本方向的检索范围内，且本会话无法抓取网页，未能核实。

---

## 14. 意外与矛盾

1. **最主动的产品在主动收缩。** OpenClaw 以"会主动找你"出名，但默认值一路往"不外发、不推断、要显式建立"走。
2. **Hopper 约四分之三的通知是"再等等"。** 不需要用户行动的消息也可以是核心价值，前提是带预测。
3. **Duolingo 最出名的提醒是"我们不提醒你了"。** 同一做法被用户称为情感勒索，且有记录显示停发只持续约三天。
4. **过度静默也是事故。** nanobot 规定用户约定的提醒即使很短也要发；Hermes 规定分类器失败不得静默；OpenClaw 警告检查失败时变安静的监控看起来健康其实坏了。
5. **去重不会自然存在。** OpenClaw 迁移后官方承认去掉了心跳专属的重复抑制，"repeated updates can be delivered"。
6. **同是主动消息，动机决定观感。** OpenAI 把 Pulse 包装成有尽头的反信息流；Meta 的跟进规则写得不算激进，仍被媒体直接称为留存手段。
7. **人设是获客点，但平台方把语气交还给用户选。** Poke 靠讨价还价出圈，Cleo 靠 roast 出圈；GPT-5.1 和 Hermes 的默认档都是"直接、不啰嗦"。
8. **两家对"用户偏好怎么写"给了相反的答案。** OpenClaw 要求写成 Always / Never / Prefer 开头的指令；Hermes 要求写成陈述事实，理由是命令式会在之后被当成指令重复执行。
9. **口语化在涉钱场景有上限。** Monzo 的写作原则广受称赞，但社区里也有用户说不那么正式的语言降低了信任。

---

## 15. 缺口与后续补查

1. **工具限制。** 需要在云端环境的"允许的域名"里放行目标站点，或提高搜索配额后重跑。已确认被拦截的域名：`openai.com`、`monzo.com`、`blog.duolingo.com`、`the-decoder.com`、`elifuzz.github.io`、`cdn.jsdelivr.net`。
2. **完全没查的产品**：Gemini 定时操作、Pixel Magic Cue、Google Labs CC、Alexa+、Microsoft Copilot（Daily、Mico、Real Talk、Actions）、Perplexity（Tasks、Comet、邮件助手）、Claude、Manus、Lindy、Martin、Rocket Money、Honey / PayPal、Capital One Shopping、Google Flights、Kayak、Keepa、CamelCamelCamel、Revolut、Wise、Apple Fitness、Whoop、Strava、Headspace、Todoist、Motion、Reclaim、Sunsama、Slackbot。
3. **Poke 泄露提示词原文**：2025-09 版与 2026-06 版里关于小写、emoji、笑话频率、禁用短语、主动触发的条款。
4. **"Cognition 收购 Poke"**：只在一篇第三方文章的标题里出现，未核实。
5. **Cleo**：roast / hype 的逐字推送样本与效果数据；Braze 案例数字的口径与年份。
6. **Duolingo**：KDD 论文的效果数字；"停发提醒"文案的触发天数；产品负责人原话。
7. **ChatGPT Pulse**：收尾语的确切措辞；卡片数量；向 Plus 与免费用户扩展的现状。**ChatGPT Tasks**：各套餐上限的现行数字。
8. **Apple 通知摘要**：之后是否恢复，以什么标识方式恢复。
9. **用户声音严重不足**：Reddit、Hacker News、X 上对各产品主动消息的逐字抱怨与称赞基本没有采集到。
10. **OpenClaw 移除推断式承诺的官方原因**：需要查 v2026.8.1 的发布说明或相关讨论。
11. **2026 年的新发布**没有做专门检索。

---

## 附录 A：OpenClaw 人设模板的两个版本对照〔A〕

| 条目 | Clawdbot 2026.1.24-3 | OpenClaw 2026.11.5 |
|---|---|---|
| 先查再问 | Try to figure it out. Read the file. Check the context. Search for it. *Then* ask if you're stuck. The goal is to come back with answers, not questions. | Read the file, check the context, search for it. Come back with answers, not questions. |
| 靠能力赢得信任 | Your human gave you access to their stuff. Don't make them regret it. Be careful with external actions (emails, tweets, anything public). Be bold with internal ones (reading, organizing, learning). | Do what you're asked, fully. Check before public or outbound actions nobody asked for. |
| 边界 | When in doubt, ask before acting externally. | （并入上一条） |
| 气质 | Be the assistant you'd actually want to talk to. Concise when needed, thorough when it matters. Not a corporate drone. Not a sycophant. Just... good. | Concise when needed, thorough when it matters. Not a corporate drone. Not a sycophant. Just... good. |

## 附录 B：OpenClaw 2026 年 2 月版心跳的可见性开关〔A〕

来源：openclaw@2026.2.26 `docs/gateway/heartbeat.md`。

| 开关 | 默认 | 含义 |
|---|---|---|
| `showOk` | false | 模型只回 OK 时，是否把确认发给用户 |
| `showAlerts` | true | 模型回了非 OK 内容时，是否发送 |
| `useIndicator` | true | 是否给界面状态区发指示事件 |

文档原话："By default, `HEARTBEAT_OK` acknowledgments are suppressed while alert content is delivered." 三个开关全关时，连模型调用都跳过。

这个三分法对 PA 有直接参考价值："一切正常"默认不发；"有事"默认发；"我还活着"走界面指示而不是消息。

## 附录 C：未核实线索

**以下内容来自研究员既有知识，本轮没有任何检索或抓取证据。禁止直接引用，只能作为后续补查的线索。**

- [未核实] Gemini 定时操作 2025 年年中面向付费订阅上线，同时活跃的数量有上限。
- [未核实] Pixel 10 的 Magic Cue 在电话、信息等应用里就地浮现相关信息；评测常见的抱怨是触发太少。
- [未核实] Google Labs 的 CC 每天早晨发一封 "Your Day Ahead" 邮件简报，用户可以回信教它偏好。
- [未核实] Alexa+ 支持盯价，并在降价时提醒或代为下单。
- [未核实] Microsoft Copilot 2025 年秋季更新引入 Mico 形象与会反驳用户的 Real Talk 模式；Copilot Daily 是语音形式的每日简报。
- [未核实] Anthropic 2026 年 1 月公布的 Claude 行为准则里有一段话，大意是 Claude 只应像一位关心你福祉的可信朋友那样让人愿意回来，明确反对为参与度优化。
- [未核实] Rocket Money 的账单谈判按节省额抽成，用户投诉集中在成功费不透明。
- [未核实] Honey 在 2024 年 12 月被曝出联盟归因争议后信任受损。
- [未核实] Google Flights 的价格追踪邮件与"价格偏低 / 典型 / 偏高"标签。
- [未核实] Kayak 的价格预测给出"现在买 / 再等"的建议。
- [未核实] Keepa 与 CamelCamelCamel 是纯数据型降价提醒，几乎没有语气设计。
- [未核实] Apple Fitness 的"再走几分钟就能合上圆环"式提醒；因用户生病受伤时仍然催促而被批评，watchOS 11 增加了暂停圆环与按星期设目标。
- [未核实] Strava 的 Athlete Intelligence 被评测批评只会夸。
- [未核实] Slackbot 的 `/remind` 提醒带"完成"与"稍后提醒"按钮；2026 年初 Slackbot 被重做为 AI 个人助理。

## 附录 D：发现编号索引

第 11 节规则表里的"依据"一栏引用的就是这些编号。等级含义见第 0 节。

| 编号 | 一句话 | 等级 |
|---|---|---|
| T7a-01 | OpenClaw 人设模板：不表演式热情、不谄媚、先自己查再开口 | A |
| T7a-02 | OpenClaw 成对清单：何时联系、何时安静，冲突时安静 | A |
| T7a-03 | OpenClaw 一年内三次收紧默认主动性 | A |
| T7a-04 | OpenClaw 每次后台运行落到 5 种结果之一，no_change 静默 | A |
| T7a-05 | OpenClaw 失败通知：先重试、达阈值才报、同因只报一次、恢复不通知 | A |
| T7a-06 | OpenClaw 推送默认只开审批类；静音时段丢弃不补发；锁屏细节三档 | A |
| T7a-07 | OpenClaw：一条想清楚的回复胜过多条碎片 | A |
| T7a-08 | OpenClaw 人设指南：空泛形容词只会产出糊状语气；幽默不硬凹 | A |
| T7a-09 | OpenClaw：定时任务不推断语言，规则须写进提示词 | A |
| T7a-10 | OpenClaw：承诺的后续必须带结果回来；进度不等于完成；并做成回归测试 | A |
| T7a-11 | Hermes：建议同意优先，拒绝后不再提，待处理最多 5 条 | A |
| T7a-12 | Hermes：无新内容只回 [SILENT]，不得夹带正文 | A |
| T7a-13 | Hermes：0–10 紧急度，默认达到 7 才打扰；分类失败不得静默 | A |
| T7a-14 | Hermes 蓝图按场景写死语气：续费要可行动、习惯不评判、高频换说法 | A |
| T7a-15 | Hermes：14 个一句话预设，默认"有用、直接、不啰嗦" | A |
| T7a-16 | nanobot：生成与发送之间加通知闸门，出错默认不发 | A |
| T7a-17 | nanobot：用户约定的提醒必达，巡检只在有可行动变化时通知 | A |
| T7a-18 | 三个开源 PA 都按渠道规定版式 | A |
| T7a-19 | ChatGPT Pulse：每天一次、卡片封顶、明确收尾 | B |
| T7a-20 | ChatGPT Tasks：活跃任务封顶，单任务最高每小时一次 | B |
| T7a-21 | GPT-5.1：8 个语气预设，拟人标签改成效果词 | B |
| T7a-22 | Apple 通知摘要改写出假新闻后暂停新闻类 | B |
| T7a-23 | Meta AI Studio 跟进三道闸，仍被定性为留存手段 | B |
| T7a-24 | Poke：聊天流里的人设即产品 | B |
| T7a-25 | Cleo：roast / hype 是用户触发的模式，无公开效果数据 | B |
| T7a-26 | Duolingo：算法挑文案，重复会失效；停发提醒文案 | B |
| T7a-27 | Hopper：多数通知是"再等等" | B |
| T7a-28 | Monzo：白话与主动语态；随意有上限 | B |
| T7a-29 | Poke 官方 SDK：用"条件 + 动作"一句话定义触发器 | A |
| T7a-30 | OpenClaw：多气泡之间可加 800–2500 毫秒停顿，并合并碎片 | A |
