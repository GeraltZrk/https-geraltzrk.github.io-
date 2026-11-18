# PA 话术手册

Personal Agent（PA）在用户建好目标之后，怎么给用户发主动消息：什么时候发、说什么、怎么说。中文场景，围绕用户请 PA 的两个目的：省钱、省时间。

打开 `index.html` 就是手册本体，单文件，不依赖构建产物以外的任何东西（字体走 Google Fonts，离线时回退到系统字体）。

## 目录

| 路径 | 是什么 |
|---|---|
| `index.html` | 手册：12 章，含体检器、决策树、语气调音台、场景话术库、证据台账等交互 |
| `skill/pa-voice-zh/` | 给 AI 用的 Skill：规范正文、参考文件、消息结构定义、体检脚本、评测用例 |
| `research/` | 10 路调研的底稿（`.md`）和结构化发现（`.json`） |
| `src/` | 页面源文件：`ch/` 各章正文，`data/` 数据，`app.js` 交互，`lint-core.js` 体检引擎，`styles.css` |
| `tools/` | 生成与检查脚本 |
| `build.py` | 把 `src/` 拼成 `index.html` |

## 数据是唯一的源头

规则、词表、消息类型、语气档位、场景话术都在 `src/data/*.json` 里。页面读它们来渲染，Skill 的参考文件由它们生成，体检引擎在页面和命令行里是同一份代码。改一条规则只改一个地方：

```bash
# 1. 改 src/data/ 下对应的 JSON（规则在 rules.json，词表在 lexicon.json）
# 2. 重新生成 Skill 的参考文件
python3 tools/gen_skill.py
# 3. 把手册里所有示例话术过一遍体检，应当是 0 条有问题
node tools/lint_samples.mjs
# 4. 重新拼页面（同时把体检引擎同步进 Skill）
python3 build.py
# 5. 把页面上的交互都点一遍（需要 playwright）
node tools/smoke.js
# 6. 在 Claude 里才有的两项能力（请 Claude 改写、保存文件），用本地替身把代码路径走一遍
node tools/smoke_claude.js
```

## 单独使用体检脚本

```bash
node skill/pa-voice-zh/scripts/lint.mjs message.json          # 人读的报告
node skill/pa-voice-zh/scripts/lint.mjs message.json --json   # 给程序读
```

输入是一条消息或一组消息，字段见 `skill/pa-voice-zh/assets/message.schema.json`；最少只要 `type`、`title`、`body`、`actions`。退出码 0 表示没有必改项，1 表示有。

## 其他脚本

| 脚本 | 作用 |
|---|---|
| `tools/build_evidence.py` | 把 `research/*.json` 汇成证据台账 `src/data/evidence.json` |
| `tools/build_scenarios.py` | 把逐个场景的话术文件拼成 `src/data/scenarios.json`，并校验结构、称呼和星期 |
| `tools/build_review.py` | 汇总场景话术的评审记录 |
| `tools/eval_pairs.mjs` | 盲评的三步辅助：准备给模型看的情境、把两边的输出打乱配对（完整文字和锁屏视图各一套）、把评审结果对回两边。提示词在 `skill/pa-voice-zh/evals/prompts.md` |
| `tools/build_eval.mjs` | 把一轮 Skill 评测的原始结果整理进页面用的数据（可多轮并存），并做代码判定的几项检查 |

## 评测做过三轮

`skill/pa-voice-zh/evals/` 里有 46 条用例、评审量表，以及评测用的提示词和配对办法（`prompts.md`）。每一轮都是同一个模型带 Skill 和不带各写两遍，三位评审盲评。

| 轮次 | 用例 | 评审读完整文字 | 评审只看锁屏上显示得出来的部分 |
|---|---|---|---|
| 第一轮 · Skill 1.0 | 18 条 | 带 28，不带 46，差不多 33 | 没做 |
| 第二轮 · Skill 1.1 | 30 条（12 条新的） | 带 49，不带 49，差不多 75 | 没做 |
| 第三轮 · Skill 1.2 | 46 条（16 条新的） | 带 80，不带 82，差不多 113；新用例上 34 比 33 | 带 151，不带 45，差不多 80；新用例上 72 比 8 |

怎么读这张表：评审能把全文读完时，写得更全的一方不吃亏，两边打平；只看得到锁屏上那一截时，把决定装进那一截的一方赢。不带 Skill 的输出，第三轮 92 条里有 47 条在锁屏上显示不全，带 Skill 的 0 条。

每一轮都是照着输法改规范，改完补一批新用例再测；第三轮起新用例由没看过规范改动的模型出题。每轮的输出、投票和理由都在手册第 9 章，可以逐条对照。评审是模型扮演的，不能替代真人评审和线上数据。

## 证据的核对程度

台账里每条证据都标了核对到哪一步：打开并核对了原文、只在搜索摘要里见到、或凭既有知识未核。调研时的网络环境只放行了少数站点，所以平台规范、法规条文和开源项目核得最扎实，学术论文和媒体报道多数停在摘要一级。引用标为「未核」或「仅见搜索摘要」的条目之前，请自己查一遍原文。
