#!/usr/bin/env python3
"""Wait until every writer in a write-workflow has finished and every editor that was
already running when this watcher started has finished, then print a line and exit.
Editors that start after that point are the ones the lead wants to cancel."""
import json, sys, time, os
J = sys.argv[1]
name = sys.argv[2]
def load():
    started, done = {}, set()
    for l in open(J):
        try: r = json.loads(l)
        except Exception: continue
        t = r.get('type')
        if t == 'started': started[r['agentId']] = r.get('label', '')
        elif t in ('result', 'failed'): done.add(r['agentId'])
        elif t in ('completed', 'finished', 'workflow_result'): done.add('__wf__')
    return started, done
started, done = load()
keep = {a for a, lab in started.items() if lab.startswith('edit:') and a not in done}
while True:
    started, done = load()
    parts = {}
    for a, lab in started.items():
        if not lab.startswith('write:'): continue
        base = lab.replace(':retry', '')
        st = parts.setdefault(base, {'ok': False, 'open': False})
        if a in done:
            # a finished retry, or a finished first attempt that was not followed by a retry
            if lab.endswith(':retry') or not any(l2 == base + ':retry' for l2 in started.values()):
                st['ok'] = True
        else:
            st['open'] = True
    writers_done = parts and all(p['ok'] and not p['open'] for p in parts.values())
    keep_done = all(a in done for a in keep)
    if writers_done and keep_done:
        late = [lab for a, lab in started.items() if lab.startswith('edit:') and a not in done and a not in keep]
        print(f'READY {name}: writers done; editors to cancel: {late}')
        sys.exit(0)
    time.sleep(30)
