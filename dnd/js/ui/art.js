// Art lookups. The registry (js/data/art.js) maps keys to files under assets/.
import { ART } from '../data/art.js';

export function sceneArt(key) {
  if (!key) return null;
  return ART.scenes[key] || null;
}

export function portrait(key) {
  if (!key) return null;
  return ART.portraits[key] || null;
}

export function flag(tag) {
  if (!tag) return null;
  return ART.flags[tag] || null;
}

export function cssUrl(src) { return src ? `url("${src}")` : 'none'; }

/** Apply art to an element as a background image; falls back to a painted gradient. */
export function paint(el, key, fallback = 'linear-gradient(135deg, #27404a, #142127 60%, #3a2d18)') {
  const a = sceneArt(key);
  if (a) {
    el.style.backgroundImage = cssUrl(a.src);
    if (a.pos) el.style.backgroundPosition = a.pos;
    if (a.sepia) el.classList.add('sepia');
  } else {
    el.style.backgroundImage = fallback;
  }
  return el;
}

export function paintPortrait(el, key) {
  const p = portrait(key);
  if (p) { el.style.backgroundImage = cssUrl(p.src); if (p.pos) el.style.backgroundPosition = p.pos; }
  else el.style.backgroundImage = 'linear-gradient(135deg, #35545f, #1c2e36)';
  return el;
}

export function paintFlag(el, tag) {
  const src = flag(tag);
  if (src) el.style.backgroundImage = cssUrl(src);
  else el.style.backgroundImage = 'linear-gradient(135deg, #8a6c33, #3a2d18)';
  return el;
}

let lastBackdrop = null;
export function setBackdrop(key) {
  const el = document.getElementById('backdrop');
  if (!el || key === lastBackdrop) return;
  const a = sceneArt(key);
  // sepia strips are too small to use as a backdrop — keep the previous one
  if (a && a.sepia) return;
  lastBackdrop = key;
  if (a) { el.style.backgroundImage = cssUrl(a.src); el.classList.toggle('blur', key !== 'title'); }
  else if (!el.style.backgroundImage) el.style.backgroundImage = 'linear-gradient(160deg, #1c2e36, #0c1418 70%)';
}

export function portraitsFor(race, gender) {
  const out = [];
  for (const key of Object.keys(ART.portraits)) {
    const p = ART.portraits[key];
    if (p.npc) continue;
    if (race && p.race !== race) continue;
    if (gender && p.gender && p.gender !== gender && gender !== 'x') continue;
    out.push(key);
  }
  return out;
}
