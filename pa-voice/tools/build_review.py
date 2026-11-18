#!/usr/bin/env python3
"""把场景话术库的评审记录汇总成 src/data/review.json。

用法：python3 tools/build_review.py <评审结果.json> [...] [--final <定稿结果.json> [...]]

评审结果：{ "result": [ { pack, n_issues, by_lens, by_sev, issues: [...], revised: { stats, catches, lint, rejected } } ] }
定稿结果：{ "result": [ { pack, final: { restored, kept, lint }, accept: { fixed, remaining, lint, verdict } } ] }
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
LENS_NAME = {"A": "28 岁的运营", "B": "二孩妈妈", "C": "大学生", "D": "退休教师", "E": "合规与事实", "结构": "结构检查"}
# 评审说「设定里没有」的意见：一部分是真的多出了事实，一部分是因为评审拿到的设定比写手拿到的简略
PREMISE = re.compile(r"设定|编出来|是编的|编造|凭空|没有事实依据|没有事实支撑")


def lens_key(raw: str) -> str:
    m = re.search(r"[A-E]", str(raw or ""))
    return m.group(0) if m else "结构"


def load(paths):
    out = []
    for f in paths:
        o = json.loads(pathlib.Path(f).read_text(encoding="utf-8"))
        out += [p for p in (o.get("result") or []) if p]
    return out


def main() -> int:
    args = sys.argv[1:]
    fin_paths = []
    if "--final" in args:
        i = args.index("--final")
        args, fin_paths = args[:i], args[i + 1:]
    packs = load(args)
    if not packs:
        print("没有可用的评审结果")
        return 1
    by_lens, by_sev = {}, {"must": 0, "should": 0, "nit": 0}
    applied = {"must": 0, "should": 0, "nit": 0}
    catches, rejected, total, premise_n = [], [], 0, 0
    for p in packs:
        total += p.get("n_issues", 0)
        for x in p.get("issues") or []:
            by_lens[lens_key(x.get("lens"))] = by_lens.get(lens_key(x.get("lens")), 0) + 1
            by_sev[x.get("severity", "nit")] = by_sev.get(x.get("severity", "nit"), 0) + 1
            if PREMISE.search(x.get("issue", "")):
                premise_n += 1
        r = p.get("revised") or {}
        st = r.get("stats") or {}
        for k in ("must", "should", "nit"):
            applied[k] += st.get(k + "_applied", 0)
        for c in r.get("catches") or []:
            c = dict(c)
            ks = re.findall(r"[A-E]", str(c.get("lens", "")))
            c["lens"] = "、".join(LENS_NAME[k] for k in dict.fromkeys(ks)) if ks else ("结构检查" if c.get("lens") else "")
            c["premise"] = bool(PREMISE.search((c.get("why") or "") + (c.get("before") or "")))
            catches.append(c)
        rejected += r.get("rejected") or []
    out = {
        "packs": len(packs), "total": total, "by_lens": by_lens, "by_sev": by_sev, "applied": applied,
        "premise_issues": premise_n,
        # 展示时只挑和「设定全不全」无关的改动：那些才是写法本身的问题
        "catches": [c for c in catches if not c["premise"]],
        "rejected": rejected,
    }
    fins = load(fin_paths)
    if fins:
        restored = sum(len((p.get("final") or {}).get("restored") or []) for p in fins)
        fixed = [x for p in fins for x in ((p.get("accept") or {}).get("fixed") or [])]
        remaining = [x for p in fins for x in ((p.get("accept") or {}).get("remaining") or [])]
        out["final"] = {
            "packs": len(fins), "restored": restored,
            "restored_examples": [x for p in fins for x in ((p.get("final") or {}).get("restored") or [])][:8],
            "accept_fixed": len(fixed), "accept_fixed_examples": fixed[:8], "remaining": remaining,
            "verdicts": [(p.get("accept") or {}).get("verdict") for p in fins],
        }
    (ROOT / "src/data/review.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(packs)} 个场景包，评审意见 {total} 条：{by_sev}；按视角 {by_lens}；采纳 {applied}")
    print(f"其中说「设定里没有」的 {premise_n} 条；可展示的改动 {len(out['catches'])} 处（共 {len(catches)} 处）；未采纳 {len(rejected)} 条")
    if fins:
        print("定稿：", {k: v for k, v in out["final"].items() if not k.endswith("examples")})
    return 0


if __name__ == "__main__":
    sys.exit(main())
