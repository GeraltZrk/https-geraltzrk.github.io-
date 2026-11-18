#!/usr/bin/env python3
"""把各调研方向的结构化结果（research/*.json）汇成网页用的证据台账 src/data/evidence.json。

每条证据保留：结论、类型、来源、原始数据、把握程度、边界，以及「核对方式」：
  fetch    —— 打开了原页面或论文全文逐字核对
  local    —— 对照下载到本地的一手文件（官方仓库、安装包内文档）核对
  abstract —— 论文只读到出版方登记的摘要，摘要里没有的数字没法核
  search   —— 只见于搜索结果摘要，原页面在当时的网络环境里打不开
  memory   —— 检索额度用尽后凭研究员既有知识补充，未核对

后来单独复核过的条目，在 research/*.json 里用 check_override 写明做到了哪一层。
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "research"
OUT = ROOT / "src" / "data" / "evidence.json"

# 调研方向 → 默认归属的章节
TRACK_CH = {
    "T1": ["read"], "T2": ["timing"], "T3": ["cost"], "T4": ["life", "cost", "timing", "tone"],
    "T5": ["wording"], "T6": ["humor"], "T7a": ["timing", "tone", "skill"], "T7b": ["wording", "tone", "cost"],
    "T8": ["tone"], "T9": ["skill"],
}
MEMORY = re.compile(r"凭记忆|既有知识|【忆】|未检索|未联网|记忆补充|背景知识|\[M\]|研究员记忆")
LOCAL = re.compile(r"原文直读|本地副本|本地一手|\[L\]|〔A〕")


def clean_url(raw: str) -> str:
    """只保留能公开访问的链接；本地文件路径一律不进台账。"""
    u = raw.strip().split(" ")[0].split("；")[0]
    return u if u.startswith("http://") or u.startswith("https://") else ""


def check_of(f: dict) -> str:
    # 后来又单独复核过的条目，以复核时做到的程度为准
    if f.get("check_override") in ("fetch", "local", "abstract", "search", "memory"):
        return f["check_override"]
    # 本轮自己动手做的测量（没有外部链接、出处写明是自测或自采）算「对照本地原文」
    src = f.get("source_title", "") + f.get("source", "")
    if ("自测" in src or "自采" in src) and not clean_url(f.get("source_url", "")):
        return "local"

    cav = f.get("caveat") or ""
    if f.get("verified_by_fetch"):
        return "fetch"
    if LOCAL.search(cav) and "未能打开" not in cav:
        return "local"
    if MEMORY.search(cav) or "未能打开原文" in cav:
        return "memory"
    return "search"


def main() -> None:
    items, seen = [], set()
    for p in sorted(SRC.glob("T*.json")):
        d = json.loads(p.read_text(encoding="utf-8"))
        track = p.stem.split("-")[0]
        for f in d.get("findings", []):
            fid = f.get("id", "").strip()
            if not fid or fid in seen:
                continue
            seen.add(fid)
            items.append({
                "id": fid,
                "track": track,
                "chapters": TRACK_CH.get(track, []),
                "claim": f.get("claim", "").strip(),
                "kind": f.get("evidence_type", "专家观点"),
                "source": f.get("source_title", "").strip(),
                "url": clean_url(f.get("source_url", "")),
                "year": str(f.get("year", "") or ""),
                "data": (f.get("key_data") or "").strip(),
                "check": check_of(f),
                "verified": check_of(f) in ("fetch", "local"),
                "confidence": f.get("confidence", "medium"),
                "caveat": (f.get("caveat") or "").strip(),
                "so": (f.get("pa_implication") or "").strip(),
            })

    def key(x):
        m = re.match(r"T(\d+)([ab]?)-(\d+)", x["id"])
        return (int(m.group(1)), m.group(2), int(m.group(3))) if m else (99, "", 0)

    items.sort(key=key)
    OUT.write_text(json.dumps(items, ensure_ascii=False, indent=1), encoding="utf-8")
    by = {}
    for x in items:
        by[x["check"]] = by.get(x["check"], 0) + 1
    print(f"{len(items)} 条证据 -> {OUT}")
    print("核对方式：", by)


if __name__ == "__main__":
    main()
