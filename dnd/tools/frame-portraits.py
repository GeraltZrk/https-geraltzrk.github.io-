#!/usr/bin/env python3
"""Put generated portraits into the same gilt/silver frames the mod's advisor portraits use.

    python3 -I tools/frame-portraits.py --src <dir with eu4 checkout> --gen <dir with *.png + meta.json> --out <dir>

The frame is recovered statistically: across many advisor portraits of one gender the frame pixels are
identical while the painted interior differs, so low-variance opaque pixels are the frame.
Writes framed 77x77 PNGs plus extra-meta.json (to merge into tools/art-config.json "extra").
"""
import argparse, glob, json, os, importlib.util
import numpy as np
from PIL import Image

here = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('ba', os.path.join(here, 'build-art.py'))
ba = importlib.util.module_from_spec(spec); spec.loader.exec_module(ba)

def frame_for(adv, female):
    # one race only: other races (mechanim, harpies...) use differently coloured frames
    files = [f for f in sorted(glob.glob(os.path.join(adv, 'dwarven_*.dds'))) if f[:-4].lower().endswith('_female') == female]
    stack = []
    for f in files:
        try:
            im = ba.open_dds(f).convert('RGBA')
            if im.size == (77, 77): stack.append(np.asarray(im).astype(np.float32))
        except Exception:
            pass
    arr = np.stack(stack)
    mean = arr.mean(axis=0)
    var = arr[..., :3].var(axis=0).sum(axis=2)
    yy, xx = np.mgrid[0:77, 0:77]
    edge = np.minimum(np.minimum(xx, 76 - xx), np.minimum(yy, 76 - yy))
    is_frame = (var < 60) & (edge < 13)
    frame = mean.copy()
    frame[..., 3] = np.where(is_frame, mean[..., 3], 0)
    return Image.fromarray(frame.clip(0, 255).astype(np.uint8), 'RGBA')

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', required=True); ap.add_argument('--gen', required=True); ap.add_argument('--out', required=True)
    a = ap.parse_args()
    adv = os.path.join(a.src, 'eu4', 'gfx', 'interface', 'advisors')
    frames = {'m': frame_for(adv, False), 'f': frame_for(adv, True)}
    meta = json.load(open(os.path.join(a.gen, 'meta.json'), encoding='utf-8'))
    os.makedirs(a.out, exist_ok=True)
    extra = {}
    for m in meta:
        src = os.path.join(a.gen, m.get('file') or (m['key'] + '.png'))
        if not os.path.exists(src):
            print('missing', src); continue
        im = Image.open(src).convert('RGB')
        w, h = im.size
        s = min(w, h)
        im = im.crop(((w - s) // 2, max(0, (h - s) // 2 - int(s * 0.04)), (w - s) // 2 + s, max(0, (h - s) // 2 - int(s * 0.04)) + s))
        inner = im.resize((71, 71), Image.LANCZOS)
        canvas = Image.new('RGBA', (77, 77), (28, 46, 54, 255))
        canvas.paste(inner, (3, 3))
        canvas.alpha_composite(frames['f' if m.get('gender') == 'f' else 'm'])
        key = 'gen_' + m['key']
        canvas.convert('RGB').save(os.path.join(a.out, key + '.png'))
        extra[key] = {'kind': 'portrait', 'race': m.get('race'), 'gender': m.get('gender'), 'role': m.get('role'), 'era': m.get('era', 'any')}
    json.dump(extra, open(os.path.join(a.out, 'extra-meta.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(len(extra), 'portraits framed')

if __name__ == '__main__':
    main()
