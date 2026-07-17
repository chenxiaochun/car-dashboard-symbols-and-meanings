#!/usr/bin/env python3
"""Fetch recent TC / wavy-lines Reddit posts via Pullpush."""
import json
import subprocess
import time
from datetime import datetime, timezone

QUERIES = [
    ("MechanicAdvice", "traction control light"),
    ("MechanicAdvice", "traction control"),
    ("MechanicAdvice", "wavy lines"),
    ("MechanicAdvice", "squiggly lines"),
    ("MechanicAdvice", "VSC light"),
    ("askcarguys", "traction control"),
    ("Cartalk", "traction control light"),
]


def fetch(subreddit: str, query: str) -> list:
    from urllib.parse import quote

    url = (
        "https://api.pullpush.io/reddit/search/submission/"
        f"?q={quote(query)}&subreddit={subreddit}&size=12&sort=desc"
    )
    raw = subprocess.check_output(
        ["curl", "-skL", "--max-time", "25", url],
        text=True,
    )
    data = json.loads(raw)
    return data.get("data", [])


def main() -> None:
    seen: set[str] = set()
    rows = []
    for sub, q in QUERIES:
        try:
            items = fetch(sub, q)
        except Exception as exc:
            print(f"ERR {sub} {q}: {exc}")
            continue
        for item in items:
            pid = item.get("id")
            if not pid or pid in seen:
                continue
            seen.add(pid)
            rows.append(item)
        time.sleep(0.5)

    rows.sort(key=lambda x: -(x.get("created_utc") or 0))
    print(f"unique={len(rows)}\n")
    for item in rows[:25]:
        created = item.get("created_utc") or 0
        dt = datetime.fromtimestamp(created, timezone.utc).strftime("%Y-%m-%d")
        title = item.get("title", "")
        ncom = item.get("num_comments", 0)
        text = (item.get("selftext") or "").replace("\n", " ").strip()
        print(f"[{dt}] comments={ncom} r/{item.get('subreddit')}")
        print(title)
        print("https://www.reddit.com" + item.get("permalink", ""))
        print(text[:260])
        print("---")


if __name__ == "__main__":
    main()
