#!/usr/bin/env python3
"""把 src/data/*.json 渲染成 Skill 的参考文件。

网页和 Skill 读的是同一份数据：改规则只改 src/data，然后重新运行本脚本和 build.py。
SKILL.md、references/send-policy.md、evals/ 是手写的，不由本脚本生成。
"""
import json
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data"
SKILL = ROOT / "skill" / "pa-voice-zh"
REF = SKILL / "references"
HEAD = "<!-- 本文件由 tools/gen_skill.py 根据 src/data 生成，请勿手改 -->\n\n"


def load(name):
    return json.loads((DATA / f"{name}.json").read_text(encoding="utf-8"))


def strip_html(text: str) -> str:
    return re.sub(r"<[^>]+>", "", text or "").strip()


def msg(m: dict) -> str:
    """把 {title, body, actions} 写成一行可读的话术。"""
    parts = [x for x in (m.get("title"), m.get("body")) if x]
    s = " ｜ ".join(parts)
    acts = [a for a in m.get("actions", []) if a]
    if acts:
        s += "  " + " ".join(f"[{a}]" for a in acts)
    return s


def split_example(text: str) -> str:
    return text.replace("｜", "  ")


def write(path: pathlib.Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")
    print(f"  {path.relative_to(ROOT)}  {len(text.encode('utf-8')) / 1024:.1f} KB")


def gen_message_types():
    life = load("lifecycle")
    types = {t["id"]: t for t in life["types"]}
    rows = {r["id"]: r["name"] for r in life.get("rows", [])}
    out = [HEAD + "# 14 种消息类型\n",
           "目标建好之后会经过 14 种状态，每种状态对应一种消息。先认清此刻该发哪一种，再写。\n",
           "「球在谁手里」决定了基本形态：PA 在跑时，消息的任务是让人放心，默认不响铃；等用户时，消息必须带一个决定，也只带一个。\n"]
    last_row = None
    for s in life["states"]:
        t = types[s["type"]]
        if s.get("row") != last_row:
            last_row = s.get("row")
            out.append(f"\n## {rows.get(last_row, '')}\n")
        out.append(f"### `{t['id']}` {t['name']}（状态：{s['name']}，{'等用户' if s['ball'] == 'user' else 'PA 在跑'}）\n")
        out.append(f"{s['desc']}\n")
        out.append(f"- 用户心里在问：{s['question']}")
        out.append(f"- 这条消息的任务：{t['job']}")
        out.append(f"- 必须包含：{t['must']}")
        out.append(f"- 怎么送达：{t['delivery']}")
        out.append(f"- 语气上限：{t['tone']}")
        out.append(f"- 最常见的错：{t['pitfall']}")
        if s.get("sample"):
            out.append(f"- 示例：{msg(s['sample'])}")
        out.append("")
    write(REF / "message-types.md", "\n".join(out))


def gen_tone():
    tone = load("tone")
    out = [HEAD + "# 语气：七个参数、信号表、预设\n",
           "声音不变，语气随情境变。不变的部分：是 AI 不装人；只站在用户一边；事实锁定；对事不对人；不施压；每条消息都让事情往前走一步；说完尊重用户的决定。\n",
           "## 七个参数\n",
           "全部是离散档位，每档都有可以判定的语言特征。默认：" + " ".join(d["codes"][d["base"]] for d in tone["dials"]) + "。\n"]
    for d in tone["dials"]:
        out.append(f"### {d['name']} {d['id']}\n")
        for i, (c, lv) in enumerate(zip(d["codes"], d["levels"])):
            out.append(f"- `{c}`{'（默认）' if i == d['base'] else ''}　{lv}")
        out.append("")
    out.append("""## 解析顺序

从高到低，冲突时取更克制的一档：幽默取低、表现力取低、正式度取高、主动度取低、长度按容器取短。把轻松误判成严肃，代价是有点无聊；把严肃误判成轻松，代价是信任。

1. 法规与红线
2. 用户的显式设置：预设、称呼、安静时段、「别开玩笑」「简短点」
3. 任务风险：金额超过用户阈值、不可逆、24 小时内截止、涉及他人、健康法律证件
4. 当下事件：失败、损失、延误、PA 出错、办成了
5. 关系阶段
6. 画像预设
7. 弱信号：时间段、日程密度、用户的措辞
8. 默认值

## 情境信号表

| 信号 | 可靠性 | 怎么调 | 误判后的兜底 |
|---|---|---|---|
| 用户的显式设置、原话 | 高 | 直接覆盖下面各层 | 任何消息上都可以说「简短点」「别开玩笑」「说详细点」，立即生效并记住 |
| 任务风险 | 高 | H0、E0；直率度不低于 C2；消息必须含金额、时点、撤销方式 | 拿不准按高风险处理 |
| 负面事件：失败、被拒、损失、延误 | 高 | H0、E0；温度 W1–W2（最多一句）；先方案后原因 | 不说「别担心」「没关系」 |
| PA 自己出错 | 高 | 道歉一次（8 个字以内）+ 已改正的事实 + 补救；进入修复期 | 不重复道歉，不解释技术原因 |
| 正面事件：达成、省到钱 | 高 | 可以 E1；轻松事可以 H2–H3；夸奖绑定数字 | 冷启动和长辈模式仍然不开玩笑 |
| 用户明说的情绪（「烦死了」「太好了」「算了」） | 中到高 | 负面：一句承认 + 压短；正面：允许放松一档 | 只回应说出口的内容，不延伸推断 |
| 用户的措辞风格：长短、表情、用你还是您 | 中 | 正式度、表现力、详略向用户靠拢，每次最多一档 | 不镜像粗口和敌意 |
| 容器：锁屏、手表、车载、语音 | 高 | 取一眼版；语音去掉符号、数字按读法写 | — |
| 时间段：深夜、通勤、工作时段、周末 | 中 | 深夜只发高优先级，一眼版，H0 | 以用户设的作息为准 |
| 日程密度（需要用户授权日历） | 中 | 忙：一眼版、合并提醒、降频 | 只调节，不评论；没授权就不用 |
| 回复延迟、已读未回 | 低 | 只调节频率和渠道，不推断情绪 | 连续 2 次没回应：降一级，并问一次「还要继续盯吗」 |
| 连续拒绝、撤销、关闭 | 中到高 | 主动度降一档；这一类建议减频 | 被拒后 30 天内不重复同一请求 |
| 同类建议连续被原样采纳 3 次以上 | 高 | 可以问一次「以后这类直接办？」，同意后该类目升 A3 | 用户拒绝后 30 天内不再问 |
| 文本情绪模型的输出 | 低到中 | 只允许触发「更克制」 | 不据此说「我感觉到你……」，不据此加热情 |
| 打字节奏、语音语调、面部等生物特征 | 不使用 | 禁用 | — |

## 关系阶段

由交付记录驱动，不由天数驱动。熟络只通过「更短、更自主」表达，不通过更亲密的称呼表达。

| 阶段 | 进入条件 | 语气与做法 | 示例 |
|---|---|---|---|
| 冷启动 | 前 3 个目标，或某类动作第一次做 | 多解释（V3）；每步确认；不开玩笑；先说清打扰规则 | 第一次帮你盯价，先说规则：只提醒，不下单；降到 ¥1,300 以下才打扰你。 |
| 建立期 | 同类任务办成 3 次以上，且没有被撤销 | 标准长度；解释缩成半句；可以问一次分类授权 | 和上次一样，降到目标价了：¥1,280。[订] [再等等] |
| 熟悉期 | 用户给过分类授权；最近 30 天没有严重失误 | 一眼版为主；授权类目先办后报 | 老规矩订了靠窗，¥1,280，30 分钟内可取消。 |
| 修复期 | PA 出过错，或用户连续撤销、关闭 | 退回逐步确认；只报事实；连续办成若干次后恢复 | 上次改错了时间，这次先跟你确认：周四 15:00 改到 17:00，对吗？ |

## 画像预设

由用户自选，或由长辈模式、未成年人模式这类显式开关决定。不从消费数据推断年龄、性别、收入。以下都是设计假设，上线前要用真实用户验证。

| 预设 | 参数要点 | 这样说 | 别这样说 |
|---|---|---|---|
| 打工人 | 工作时段一眼版；不闲聊；不评论对方忙不忙 | 15:00 的会和取件冲突，已把取件改到 19:00。[好] [改回去] | 亲爱的打工人，辛苦啦～记得照顾好自己哦！ |
| Z 世代 | 平视、短、可以轻快；不追热梗、不说教 | 凑单方案好了：加一包 ¥9.9 的纸巾，整单反而少付 ¥12。[按这个下单] | 年轻人要学会理财，别乱花钱。 |
| 家庭采购 | 到手价、单价、保质期算清；不用身份标签 | 纸尿裤 L 码 2 箱到手 ¥268，合 ¥1.4/片，比你上次买便宜 ¥0.2/片。[下单] [看明细] | 宝妈必囤！手慢无！ |
| 长辈模式 | 用「您」；完整句；一条一事；不设倒计时；大额二次确认；H1 封顶 | 您的燃气费这个月是 86 元，还没有交。需要我现在帮您交吗？交之前会再跟您确认一次。 | 燃气费待缴，戳这里秒办～ |
| 价格敏感 | 大白话；具体到几块钱；主动说没有附加条件 | 这单能便宜 15 块，不用拉人，不用做任务，点一下就行。[便宜 15 块下单] | 差 0.01 元即可提现，快邀请好友助力！ |
| 商务 | 结论 + 代价 + 默认方案；少请示 | 建议改签 16:30 东航直飞：能赶上 19:00 的晚宴，差价 ¥310。[改签] [维持原计划] | 要不您看看怎么选比较好呢？ |
| 未成年人模式 | 幽默不超过 H1；不用吐槽；不做虚拟亲密关系 | — | — |
""")
    out.append("## 同一事件的几种渲染\n")
    for ex in tone["examples"]:
        cond = "，".join(f"{k}={v}" for k, v in ex["when"].items())
        out.append(f"- `{cond}`　{msg(ex['msg'])}")
    write(REF / "tone.md", "\n".join(out))


def gen_humor():
    h = load("humor")
    out = [HEAD + "# 幽默\n",
           "只有当幽默档位 H ≥ 2 时才需要读这个文件。默认档是 H1：有人味，不开玩笑。\n",
           "不开玩笑不扣分，开错必扣分。每条消息先写一版只报事实的；想加一笔的时候，先过下面的自检，任何一项拿不准就发事实版。\n",
           "## 阶梯\n"]
    for i, lv in enumerate(h["levels"]):
        out.append(f"### H{i} {lv['name']}（{lv['short']}）\n")
        out.append(lv["desc"] + "\n")
        out.append(f"- 可以用在：{lv['ok']}")
        out.append(f"- 不能用在：{lv['no']}")
        out.append(f"- 机制：{lv['mech']}")
        for ex in lv["examples"]:
            note = f"（{ex['note']}）" if ex.get("note") else ""
            out.append(f"- {ex['label']}：{split_example(ex['text'])}{note}")
        out.append("")
    out.append("## 上限：消息节点 × 任务严肃度\n")
    caps = h["caps"]
    out.append("| 节点 | " + " | ".join(caps["cols"]) + " |")
    out.append("|---|" + "---|" * len(caps["cols"]))
    for r in caps["rows"]:
        out.append("| " + " | ".join(r) + " |")
    out.append("""
再叠加四个上限，取最小值：

- 用户状态：负面或很赶 → H0；不知道 → H2；用户先开了玩笑 → H3
- 关系：新用户 → H1；已建立 → H2；用户自己选了活泼档 → H3
- 受众：长辈模式、未成年人模式、可能被旁人看到 → H1
- 时段与大环境：23:00–07:00 → H0；发生公共灾难期间 → H0

只降不升：用户说「说重点」「别贫」，或者连续不回应带俏皮话的消息，就降到 H0 并保持 30 天。每个目标每 5 条消息里最多一句俏皮话，每天最多一句。
""")
    out.append("## 相对安全的机制\n")
    out.append("| 机制 | 例句 | 为什么 |")
    out.append("|---|---|---|")
    for s in h["safe"]:
        out.append(f"| {s['name']} | {s['example']} | {s['why']} |")
    out.append("\n## 高危机制（不用）\n")
    out.append("| 机制 | 反例 | 为什么 |")
    out.append("|---|---|---|")
    for s in h["risky"]:
        out.append(f"| {s['name']} | {s['example']} | {s['why']} |")
    out.append("\n## 发玩笑前的自检\n")
    out.append("标了「硬」的任何一项答不上「是」，就删掉玩笑；其余几项有一项拿不准，也默认不开。\n")
    for i, c in enumerate(h["checklist"], 1):
        out.append(f"{i}. {'【硬】' if c['kill'] else ''}{c['q']}。{c['why']}")
    write(REF / "humor.md", "\n".join(out))


def gen_lexicon():
    lex, legal = load("lexicon"), load("legal")
    out = [HEAD + "# 中文词表与红线\n",
           "词表是检查线索，不是黑名单：先保事实，再看语境。没有问题的句子不必为了避开某个词而改坏。\n"]
    cat = None
    for x in lex:
        if x["cat"] != cat:
            cat = x["cat"]
            out.append(f"\n## {cat}\n")
            out.append("| 别这样说 | 这样说 | 为什么 |")
            out.append("|---|---|---|")
        out.append(f"| {x['nosay']} | {x['say']} | {x['why']} |")
    out.append("\n## 法规红线 → 安全写法\n")
    out.append("PA 发给单个用户的消息是否构成广告，需要法务按商业模式判断。但举不出证的「最低」，无论合不合规，都会在用户发现更低价的那一刻毁掉信任。\n")
    out.append("| 红线说法或做法 | 依据 | 安全写法 |")
    out.append("|---|---|---|")
    for x in legal:
        out.append(f"| {x['bad']} | {x['law']} | {x['safe']} |")
    write(REF / "lexicon.md", "\n".join(out))


def gen_surfaces():
    notes = load("surfaces")
    js = "const L=require(process.argv[1]);console.log(JSON.stringify({s:L.SURFACES,d:L.DEFAULTS}))"
    core = json.loads(subprocess.check_output(["node", "-e", js, str(ROOT / "src" / "lint-core.js")], text=True))
    S, Dft = core["s"], core["d"]
    out = [HEAD + "# 各容器的字数预算\n",
           "字宽口径：汉字和全角符号算 1，数字、字母、¥ 和半角符号算 0.5，空格算 0.25。\n",
           f"通用检查点：前 {Dft['anchorIdeal']} 个字宽出现结果和数字；前 {Dft['anchorWithin']} 个字宽说完一件完整的事；一句不超过 {Dft['sentenceMax']} 字，一截不超过 {Dft['clauseMax']} 字。\n",
           "这些数是设计预算：一部分来自平台的官方建议，一部分按系统字号推算，都应当用实机和线上数据校准。\n",
           "| 容器 | 标题（建议 / 硬上限） | 正文（建议 / 硬上限） | 怎么写 | 依据 |",
           "|---|---|---|---|---|"]
    for k, s in S.items():
        n = notes.get(k, {})
        out.append(f"| {s['name']} | {s['title']} / {s['titleHard']} | {s['body']} / {s['bodyHard']} | {n.get('rule', '')} | {strip_html(n.get('basis', s.get('note', '')))} |")
    out.append("""
## 其他容器

- 语音播报：每句不超过 20 个字，最多 2 句。去掉符号，数字按读法写（「420 元」「今晚 12 点前」在播报里可以说，文字里不行）。
- 短信：单条 70 个字符，含签名。
- 展开层（`copy.detail`）：锁屏那一层装不下、但做决定用得上的事实放这里，展开通知或点开之后才显示。一行一个事实，最多 6 行；不重复正文，不删事实。
- 锁屏隐私：按用户选的档位显示。预览被隐藏时只露一句占位文案，例如「1 件事等你确认」。账户余额、订单总额、收款方默认不上锁屏。

## 按钮

- 两个按钮时每个约 6 个字，三个时约 4 个字。
- 动词开头，写点了之后会发生什么。
- 展开的通知最多放 3 个按钮；只会「打开 App」的按钮不要放。
""")
    write(REF / "surfaces.md", "\n".join(out))


def gen_rules():
    rules = load("rules")
    names = {"life": "先定类型", "read": "被看见", "cost": "被看懂", "timing": "发不发", "wording": "中文用词", "tone": "语气", "humor": "幽默", "skill": "让 AI 照着写"}
    out = [HEAD + f"# 全部规则（{len(rules)} 条）\n",
           "每条规则是三件套：一句规则、一句原因、一组正反例。改规范之前先把要解决的失败消息做成用例。\n"]
    ch = None
    for r in rules:
        if r["ch"] != ch:
            ch = r["ch"]
            out.append(f"\n## {names.get(ch, ch)}\n")
        out.append(f"### {r['id']} {r['title']}\n")
        out.append(strip_html(r["why"]) + "\n")
        if r.get("say"):
            out.append(f"- 这样说：{r['say']}")
        if r.get("nosay"):
            out.append(f"- 别这样：{r['nosay']}")
        if r.get("lint"):
            out.append(f"- 规则检查：`{r['lint']}`")
        out.append("")
    write(REF / "rules.md", "\n".join(out))


def gen_examples():
    p = DATA / "scenarios.json"
    if not p.exists():
        return
    scn = json.loads(p.read_text(encoding="utf-8"))
    flat = []
    for s in scn:
        for i, t in enumerate(s["thread"], 1):
            for mood, v in (t.get("variants") or {"neutral": t}).items():
                flat.append({
                    "id": f"{s['id']}.{i}.{t['type']}.{mood}",
                    "scenario": s["name"], "goal": s["goal"], "stakes": s["stakes"], "address": s.get("address", "你"),
                    "type": t["type"], "state": t["stateName"], "user_state": mood, "surface": t.get("surface", "lock"),
                    "title": v.get("title", ""), "body": v.get("body", ""), "actions": v.get("actions", []),
                    "why": v.get("why") or t.get("why", ""),
                })
    write(SKILL / "assets" / "examples.json", json.dumps(flat, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    print("生成 Skill 参考文件：")
    gen_message_types()
    gen_tone()
    gen_humor()
    gen_lexicon()
    gen_surfaces()
    gen_rules()
    gen_examples()
