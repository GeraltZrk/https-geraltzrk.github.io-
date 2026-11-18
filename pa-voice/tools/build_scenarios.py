#!/usr/bin/env python3
"""把逐个场景的话术文件拼成 src/data/scenarios.json，并做结构校验。

用法：python3 tools/build_scenarios.py <场景文件目录> [--allow-draft]

目录里每个场景一个 <id>.json（定稿）。加 --allow-draft 时，缺定稿的场景退回用 <id>.draft.json。
校验不过的地方逐条打印；有结构性错误（缺字段、缺某种用户状态）时退出码为 1。
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
ORDER = ["flight", "subs", "cart", "delay", "clinic", "queue", "expense", "habit", "resale", "broadband", "parents", "visa"]
TYPES = ["ack", "need_info", "progress", "opportunity", "approval", "done", "deadline", "blocked", "nudge",
         "correction", "rescope", "pause", "milestone", "digest"]
MOODS = ["rushed", "neutral", "relaxed"]
# 2026 年 11–12 月用到的日期，星期对照
WEEKDAY = {(11, 15): "日", (11, 16): "一", (11, 17): "二", (11, 18): "三", (11, 19): "四", (11, 20): "五", (11, 21): "六",
           (11, 22): "日", (11, 23): "一", (11, 24): "二", (11, 25): "三", (11, 26): "四", (11, 27): "五", (11, 28): "六",
           (11, 29): "日", (11, 30): "一", (12, 1): "二", (12, 2): "三", (12, 3): "四", (12, 14): "一"}


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    src = pathlib.Path(sys.argv[1])
    allow_draft = "--allow-draft" in sys.argv
    life = json.loads((ROOT / "src/data/lifecycle.json").read_text(encoding="utf-8"))
    type_name = {t["id"]: t["name"] for t in life["types"]}

    out, errors, warns, used_draft = [], [], [], []
    for sid in ORDER:
        f = src / f"{sid}.json"
        if not f.exists() and allow_draft and (src / f"{sid}.draft.json").exists():
            f = src / f"{sid}.draft.json"
            used_draft.append(sid)
        if not f.exists():
            warns.append(f"{sid}: 没有文件，跳过")
            continue
        try:
            s = json.loads(f.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            errors.append(f"{sid}: JSON 解析失败 {e}")
            continue
        for k in ("id", "name", "kind", "stakes", "humorMax", "address", "goal", "thread"):
            if k not in s:
                errors.append(f"{sid}: 缺字段 {k}")
        if s.get("id") != sid:
            errors.append(f"{sid}: id 写成了 {s.get('id')}")
        other = "您" if s.get("address") == "你" else "你"
        for i, t in enumerate(s.get("thread", []), 1):
            where = f"{sid}#{i}"
            if t.get("type") not in TYPES:
                errors.append(f"{where}: 未知的消息类型 {t.get('type')}")
            else:
                t["typeName"] = type_name[t["type"]]  # 类型名以手册为准
            if t.get("surface") not in ("lock", "chat"):
                t["surface"] = "chat" if t.get("type") == "approval" else "lock"
            if "subject" in t and isinstance(t["subject"], str):
                t["subject"] = [t["subject"]]
            for k in ("stateName", "when", "why"):
                if not t.get(k):
                    warns.append(f"{where}: 缺 {k}")
            v = t.get("variants") or {}
            for m in MOODS:
                if m not in v:
                    errors.append(f"{where}: 缺 {m} 版本")
                    continue
                x = v[m]
                if not x.get("title"):
                    errors.append(f"{where}.{m}: 没有标题")
                x.setdefault("body", "")
                x.setdefault("actions", [])
                text = x["title"] + x["body"] + "".join(x["actions"])
                if other in text:
                    errors.append(f"{where}.{m}: 称呼混用，出现了「{other}」")
                if t.get("subject") and not any(k in x["title"] for k in t["subject"]):
                    warns.append(f"{where}.{m}: 标题里没有对象（{'/'.join(t['subject'])}）：{x['title']}")
                for mo, d, wd in re.findall(r"(\d{1,2})\s?月\s?(\d{1,2})\s?日（周([一二三四五六日])）", text):
                    want = WEEKDAY.get((int(mo), int(d)))
                    if want and want != wd:
                        errors.append(f"{where}.{m}: {mo} 月 {d} 日是周{want}，写成了周{wd}")
            if all(m in v for m in MOODS):
                if len(v["rushed"]["title"] + v["rushed"]["body"]) > len(v["neutral"]["title"] + v["neutral"]["body"]) + 4:
                    warns.append(f"{where}: 赶时间版比平常版还长")
        if len(s.get("thread", [])) != 6:
            warns.append(f"{sid}: 有 {len(s.get('thread', []))} 条消息（预期 6 条）")
        out.append(s)

    (ROOT / "src/data/scenarios.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    n_msg = sum(len(t.get("variants", {})) for s in out for t in s.get("thread", []))
    print(f"写入 {len(out)} 个场景，{n_msg} 条话术" + (f"（其中用了草稿：{', '.join(used_draft)}）" if used_draft else ""))
    for w in warns:
        print("  提示 " + w)
    for e in errors:
        print("  错误 " + e)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
