#!/usr/bin/env python3
"""把场景话术库的评审记录汇总成 src/data/review.json。

用法：python3 tools/build_review.py <工作流结果.json> [<工作流结果.json> ...]

每个结果文件形如 { "result": [ { pack, n_issues, by_lens, by_sev, revised: { stats, catches, lint, rejected } } ] }。
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
LENS_NAME = {"A": "28 岁的运营", "B": "二孩妈妈", "C": "大学生", "D": "退休教师", "E": "合规与事实", "结构": "结构检查"}


def lens_key(raw: str) -> str:
    raw = str(raw or "")
    m = re.search(r"[A-E]", raw)
    if m:
        return m.group(0)
    return "结构"


def main() -> int:
    packs = []
    for f in sys.argv[1:]:
        o = json.loads(pathlib.Path(f).read_text(encoding="utf-8"))
        packs += [p for p in (o.get("result") or []) if p]
    if not packs:
        print("没有可用的评审结果")
        return 1
    by_lens, by_sev = {}, {"must": 0, "should": 0, "nit": 0}
    applied = {"must": 0, "should": 0, "nit": 0}
    have_applied = True
    lint = {"errors": 0, "warns": 0}
    catches, rejected, total = [], [], 0
    for p in packs:
        total += p.get("n_issues", 0)
        for k, v in (p.get("by_lens") or {}).items():
            # 评审有时把一条意见同时记在两个视角上（如 "A/E"），按第一个算
            by_lens[lens_key(k)] = by_lens.get(lens_key(k), 0) + v
        for k, v in (p.get("by_sev") or {}).items():
            by_sev[k] = by_sev.get(k, 0) + v
        r = p.get("revised") or {}
        st = r.get("stats") or {}
        if not st:
            have_applied = False
        for k in ("must", "should", "nit"):
            applied[k] += st.get(k + "_applied", 0)
        lt = r.get("lint") or {}
        lint["errors"] += lt.get("errors", 0)
        lint["warns"] += lt.get("warns", 0)
        for c in r.get("catches") or []:
            c = dict(c)
            if c.get("lens"):
                ks = re.findall(r"[A-E]", str(c["lens"]))
                c["lens"] = "、".join(LENS_NAME[k] for k in dict.fromkeys(ks)) if ks else str(c["lens"])
            catches.append(c)
        rejected += r.get("rejected") or []
    out = {
        "packs": len(packs), "total": total, "by_lens": by_lens, "by_sev": by_sev,
        "applied": applied if have_applied else {}, "lint": lint, "catches": catches, "rejected": rejected,
    }
    (ROOT / "src/data/review.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(packs)} 个场景包，评审意见 {total} 条：{by_sev}；按视角 {by_lens}")
    print(f"采纳：{applied if have_applied else '（部分场景包没有给出采纳数）'}；定稿体检：{lint}；改动举例 {len(catches)} 处；未采纳 {len(rejected)} 条")
    return 0


if __name__ == "__main__":
    sys.exit(main())
