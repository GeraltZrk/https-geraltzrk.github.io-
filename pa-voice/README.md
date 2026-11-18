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
| `tools/build_eval.mjs` | 把一轮 Skill 评测的原始结果整理进页面用的数据（可多轮并存），并做代码判定的几项检查 |

## 评测做过两轮

`skill/pa-voice-zh/evals/` 里有 30 条用例和评审量表。第一轮（Skill 1.0）带 Skill 的一方在盲评里输了：照规范写出的标题为了压字数省掉了「说的是哪件事」。据此把规范改到 1.1，再加 12 条改规范时没见过的用例测了第二轮。两轮的输出、投票和理由都在手册第 9 章，可以逐条对照。评审是模型扮演的，不能替代真人评审。

## 证据的核对程度

台账里每条证据都标了核对到哪一步：打开并核对了原文、只在搜索摘要里见到、或凭既有知识未核。调研时的网络环境只放行了少数站点，所以平台规范、法规条文和开源项目核得最扎实，学术论文和媒体报道多数停在摘要一级。引用标为「未核」或「仅见搜索摘要」的条目之前，请自己查一遍原文。
