#!/usr/bin/env python3
"""Convert Anbennar mod art into web assets and write js/data/art.js.

    python3 -I tools/build-art.py --src <dir with eu4/ ck3/ vic3/ checkouts> [--extra <dir>] [--config tools/art-config.json]

Sources are the public Anbennar mod repositories (art by the Anbennar team and contributors).
Loading screens are cropped to the picture band; event pictures and advisor portraits are kept as drawn.
"""
import argparse, glob, json, os, re, struct, sys, io
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def open_dds(path):
    """PIL cannot read a few DXGI variants; decode the uncompressed ones by hand and patch sRGB block formats."""
    try:
        im = Image.open(path); im.load(); return im
    except Exception:
        data = bytearray(open(path, 'rb').read())
        if data[:4] != b'DDS ' or data[84:88] != b'DX10':
            raise
        h, w = struct.unpack_from('<II', data, 12)
        fmt = struct.unpack_from('<I', data, 128)[0]
        if fmt in (87, 91, 88, 93, 28, 29):  # uncompressed 32-bit
            raw = bytes(data[148:148 + w * h * 4])
            mode = 'BGRA' if fmt in (87, 91) else 'BGRX' if fmt in (88, 93) else 'RGBA'
            return Image.frombuffer('RGBA', (w, h), raw, 'raw', mode, 0, 1)
        remap = {72: 71, 75: 74, 78: 77, 99: 98}
        if fmt not in remap:
            raise RuntimeError(f'unsupported DXGI format {fmt}')
        struct.pack_into('<I', data, 128, remap[fmt])
        im = Image.open(io.BytesIO(bytes(data))); im.load(); return im

def save_webp(im, path, quality=80):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, 'WEBP', quality=quality, method=6)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', required=True)
    ap.add_argument('--extra', default=None, help='folder of extra images (png/jpg/webp); file stem becomes the art key')
    ap.add_argument('--config', default=os.path.join(ROOT, 'tools', 'art-config.json'))
    args = ap.parse_args()
    cfg = json.load(open(args.config, encoding='utf-8')) if os.path.exists(args.config) else {}
    out = os.path.join(ROOT, 'assets')
    reg = {'scenes': {}, 'portraits': {}, 'flags': {}}
    problems = []
    eu4 = os.path.join(args.src, 'eu4', 'gfx')

    # --- loading screens: 2048x1536 with a framed picture band
    titles = cfg.get('loadingTitles', {})
    for f in sorted(glob.glob(os.path.join(eu4, 'loadingscreens', 'load_*.dds'))):
        n = re.search(r'load_(\d+)', f).group(1)
        if n in cfg.get('skipLoading', ['0']):
            continue
        try:
            im = open_dds(f).convert('RGB')
        except Exception as e:
            problems.append(f'{os.path.basename(f)}: {e}'); continue
        w, h = im.size
        top, bottom = int(h * 0.1725), int(h * 0.8275)
        band = im.crop((0, top, w, bottom)).resize((1280, round(1280 * (bottom - top) / w)), Image.LANCZOS)
        key = f'load_{n}'
        save_webp(band, os.path.join(out, 'art', key + '.webp'), 78)
        entry = {'src': f'assets/art/{key}.webp'}
        if n in titles: entry['title'] = titles[n]
        reg['scenes'][key] = entry

    # --- event pictures: sepia strips (first 512 px of animated sheets)
    for f in sorted(glob.glob(os.path.join(eu4, 'event_pictures', '**', '*.dds'), recursive=True)):
        name = os.path.basename(f)[:-4]
        key = 'ev_' + re.sub(r'_eventpicture$', '', name.lower())
        key = re.sub(r'[^a-z0-9_]+', '_', key)
        try:
            im = open_dds(f).convert('RGBA')
        except Exception as e:
            problems.append(f'{name}: {e}'); continue
        w, h = im.size
        if w > h * 6 and w > 600:  # animated sprite strip: keep the first frame
            im = im.crop((0, 0, round(h * 512 / 132), h))
        if im.size[0] < 200 or im.size[1] < 60:
            continue
        bg = Image.new('RGBA', im.size, (222, 196, 150, 255)); bg.alpha_composite(im)
        save_webp(bg.convert('RGB'), os.path.join(out, 'ev', key + '.webp'), 84)
        reg['scenes'][key] = {'src': f'assets/ev/{key}.webp', 'sepia': True}

    # --- advisor portraits: <race>_<role>[_female].dds, 77x77 with their frames
    roles = cfg.get('portraitRoles', ['statesman', 'court_mage', 'commandant', 'spymaster', 'inquisitor', 'grand_captain', 'philosopher', 'trader', 'army_reformer', 'diplomat', 'navigator', 'artist', 'theologian', 'natural_scientist'])
    adv = os.path.join(eu4, 'interface', 'advisors')
    for f in sorted(glob.glob(os.path.join(adv, '*.dds'))):
        base = os.path.basename(f)[:-4]
        low = base.lower()
        female = low.endswith('_female')
        stem = low[:-7] if female else low
        role = next((r for r in sorted(roles, key=len, reverse=True) if stem.endswith('_' + r)), None)
        if not role:
            continue
        race = stem[:-(len(role) + 1)]
        if race in ('advisor', 'noadvisortype'):
            continue
        try:
            im = open_dds(f).convert('RGBA')
        except Exception as e:
            problems.append(f'{base}: {e}'); continue
        bg = Image.new('RGBA', im.size, (28, 46, 54, 255)); bg.alpha_composite(im)
        key = f'{race}_{role}' + ('_f' if female else '')
        save_webp(bg.convert('RGB'), os.path.join(out, 'portraits', key + '.webp'), 90)
        reg['portraits'][key] = {'src': f'assets/portraits/{key}.webp', 'race': race, 'gender': 'f' if female else 'm', 'role': role}

    # --- flags listed in the config (tag -> anything), 128x128 TGA
    for tag in cfg.get('flags', []):
        f = os.path.join(eu4, 'flags', tag + '.tga')
        if not os.path.exists(f):
            problems.append(f'flag {tag}: missing'); continue
        im = Image.open(f).convert('RGB').resize((96, 96), Image.LANCZOS)
        save_webp(im, os.path.join(out, 'flags', tag + '.webp'), 86)
        reg['flags'][tag] = f'assets/flags/{tag}.webp'

    # --- extra images (wiki maps, generated art): key = file stem
    if args.extra and os.path.isdir(args.extra):
        meta = dict(cfg.get('extra', {}))
        side = os.path.join(args.extra, 'extra-meta.json')
        if os.path.exists(side): meta.update(json.load(open(side, encoding='utf-8')))
        for f in sorted(glob.glob(os.path.join(args.extra, '*'))):
            stem, ext = os.path.splitext(os.path.basename(f))
            if ext.lower() not in ('.png', '.jpg', '.jpeg', '.webp'):
                continue
            m = meta.get(stem, {})
            try:
                im = Image.open(f).convert('RGB')
            except Exception as e:
                problems.append(f'{stem}: {e}'); continue
            maxw = m.get('maxWidth', 1280)
            if im.size[0] > maxw: im = im.resize((maxw, round(im.size[1] * maxw / im.size[0])), Image.LANCZOS)
            kind = m.get('kind', 'scene')
            if kind == 'portrait':
                if im.size != (77, 77): im = im.resize((154, 154), Image.LANCZOS)
                save_webp(im, os.path.join(out, 'portraits', stem + '.webp'), 84)
                entry = {'src': f'assets/portraits/{stem}.webp', 'race': m.get('race'), 'gender': m.get('gender'), 'role': m.get('role', 'extra')}
                if m.get('npc'): entry['npc'] = True
                if m.get('name'): entry['name'] = m['name']
                reg['portraits'][stem] = entry
            else:
                save_webp(im, os.path.join(out, 'art', stem + '.webp'), m.get('quality', 80))
                e = {'src': f'assets/art/{stem}.webp'}
                if m.get('pos'): e['pos'] = m['pos']
                reg['scenes'][stem] = e

    # --- aliases and per-key tweaks
    for key, target in cfg.get('aliases', {}).items():
        if target in reg['scenes']: reg['scenes'][key] = dict(reg['scenes'][target])
        else: problems.append(f'alias {key}: target {target} missing')
    for key, patch in cfg.get('patch', {}).items():
        if key in reg['scenes']: reg['scenes'][key].update(patch)

    with open(os.path.join(ROOT, 'js', 'data', 'art.js'), 'w', encoding='utf-8') as fh:
        fh.write('// Art registry — generated by tools/build-art.py. Do not edit by hand.\n')
        fh.write('// Images come from the public Anbennar mod repositories; see the in-game credits.\n')
        fh.write('export const ART = ' + json.dumps(reg, ensure_ascii=False, indent=1, sort_keys=True) + ';\n')
        fh.write('\n// Which mod portrait sets a playable race may use.\nexport const PORTRAIT_RACES = ' + json.dumps(cfg.get('portraitRaces', {}), ensure_ascii=False, indent=1) + ';\n')
    total = 0
    for dp, _, fs in os.walk(out):
        for f in fs: total += os.path.getsize(os.path.join(dp, f))
    print(f"scenes {len(reg['scenes'])}, portraits {len(reg['portraits'])}, flags {len(reg['flags'])}, assets {total/1e6:.1f} MB")
    for p in problems: print('  problem:', p)

if __name__ == '__main__':
    main()
