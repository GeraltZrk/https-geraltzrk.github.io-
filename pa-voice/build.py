#!/usr/bin/env python3
"""把 src/ 里的零件拼成两份成品：

  pa-voice/index.html              —— 可直接打开 / 托管的完整网页
  <out>/pa-voice-artifact.html     —— 给 Claude Artifact 用的片段（不带 doctype/html/head/body）

用法：python3 build.py [artifact 输出目录]
"""
import json
import os
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"
SKILL = ROOT / "skill"


def read(name: str) -> str:
    return (SRC / name).read_text(encoding="utf-8")


def js_safe(text: str) -> str:
    """防止内联脚本里的 </script> 提前结束标签。"""
    return text.replace("</", "<\\/")


def main() -> None:
    head = read("head.html").strip()
    css = read("styles.css")
    body = read("body.html")

    # 章节正文分文件写在 src/ch/，按 <!--NAME-->…<!--/NAME--> 标记嵌回骨架
    for p in sorted((SRC / "ch").glob("*.html")):
        name = p.stem.upper()
        marker = name if not name.isdigit() else "CH" + name
        start, end = f"<!--{marker}-->", f"<!--/{marker}-->"
        if start in body and end in body:
            a, b = body.index(start), body.index(end)
            body = body[: a + len(start)] + "\n" + p.read_text(encoding="utf-8").strip() + "\n" + body[b:]
        else:
            print(f"warning: no marker for {p.name}", file=sys.stderr)

    data = {}
    for p in sorted((SRC / "data").glob("*.json")):
        data[p.stem] = json.loads(p.read_text(encoding="utf-8"))

    # 体检引擎只有一份源码：同步一份给 Skill 的命令行脚本用
    # （评测进行中时设 PA_NO_SKILL_SYNC=1，保证被测的 Skill 不在中途变化）
    core_dst = SKILL / "pa-voice-zh" / "scripts" / "lint-core.cjs"
    if core_dst.parent.exists() and not os.environ.get("PA_NO_SKILL_SYNC"):
        core_dst.write_text(read("lint-core.js"), encoding="utf-8")

    skill_files = {}
    if SKILL.exists():
        for p in sorted(SKILL.rglob("*")):
            if p.is_file() and not p.name.startswith("."):
                skill_files[str(p.relative_to(SKILL))] = p.read_text(encoding="utf-8")

    data_js = (
        "window.PA_DATA = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n"
        "window.PA_SKILL = " + json.dumps(skill_files, ensure_ascii=False, separators=(",", ":")) + ";"
    )
    scripts = "<script>\n" + js_safe(data_js) + "\n</script>\n"
    for name in ("lint-core.js", "app.js"):
        scripts += "<script>\n" + js_safe(read(name)) + "\n</script>\n"

    style = "<style>\n" + css + "\n</style>\n"

    # 1) Artifact 片段：title / meta / 字体 / style 放在最前面
    fragment = head + "\n" + style + body + "\n" + scripts

    # 2) 独立网页：自己带骨架，复刻 Artifact 骨架的那一小段 reset
    reset = (
        ":root{color-scheme:light;padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}"
        "body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}"
    )
    standalone = (
        "<!doctype html>\n<html lang=\"zh-CN\">\n<head>\n<meta charset=\"utf-8\">\n"
        "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n"
        "<style>" + reset + "</style>\n" + head + "\n" + style + "</head>\n<body>\n" + body + "\n" + scripts + "</body>\n</html>\n"
    )

    (ROOT / "index.html").write_text(standalone, encoding="utf-8")
    out_dir = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "dist"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "pa-voice-artifact.html").write_text(fragment, encoding="utf-8")

    print(f"index.html            {len(standalone.encode('utf-8')) / 1024:.0f} KB")
    print(f"pa-voice-artifact.html {len(fragment.encode('utf-8')) / 1024:.0f} KB  -> {out_dir}")
    print(f"data sets: {', '.join(data) or '(none)'} | skill files: {len(skill_files)}")


if __name__ == "__main__":
    main()
