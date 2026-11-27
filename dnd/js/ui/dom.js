// Tiny DOM helpers. All text goes through textContent, never innerHTML.

export function h(tag, attrs, ...children) {
  const el = document.createElement(tag);
  if (attrs) {
    for (const k of Object.keys(attrs)) {
      const v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else if (k === 'value' || k === 'checked' || k === 'disabled' || k === 'selected') el[k] = v;
      else el.setAttribute(k, v === true ? '' : String(v));
    }
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    if (Array.isArray(c)) append(el, c);
    else if (c instanceof Node) el.appendChild(c);
    else el.appendChild(document.createTextNode(String(c)));
  }
}

export function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }

/** Inline emphasis for story prose: **strong**, *em*. Returns DOM nodes. */
export function rich(text) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m;
  const s = String(text);
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(document.createTextNode(s.slice(last, m.index)));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(h('strong', null, tok.slice(2, -2)));
    else out.push(h('em', null, tok.slice(1, -1)));
    last = m.index + tok.length;
  }
  if (last < s.length) out.push(document.createTextNode(s.slice(last)));
  return out;
}

const SVG_NS = 'http://www.w3.org/2000/svg';
const ICONS = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6L6 18',
  back: 'M15 5l-7 7 7 7',
  next: 'M9 5l7 7-7 7',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4.5 20.5c1-4 4-6 7.5-6s6.500 2 7.5 6',
  bag: 'M6 8h12l1.2 12H4.800L6 8zM9 8V6.500a3 3 0 016 0V8',
  party: 'M8 11a3 3 0 100-6 3 3 0 000 6zM16.500 11a2.500 2.500 0 100-5 2.500 2.500 0 000 5zM2.500 19.500c.6-3 2.800-5 5.500-5s4.900 2 5.500 5M14.500 14.800c2.800-.4 5.400 1.200 6.500 4.700',
  scroll: 'M7 4h11a2 2 0 012 2v1H9M7 4a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1H9v1M7 4a2 2 0 012 2v11M12 9h5M12 12.500h5',
  book: 'M5 4.500A1.500 1.500 0 016.500 3H19v15H6.500A1.500 1.500 0 005 19.500v-15zM5 19.500A1.500 1.500 0 006.500 21H19M9 7.500h6',
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.800 2.600 4 5.600 4 9s-1.200 6.400-4 9c-2.800-2.600-4-5.600-4-9s1.200-6.400 4-9z',
  gear: 'M12 15.500a3.500 3.500 0 100-7 3.500 3.500 0 000 7zM19 12a7 7 0 00-.1-1.300l2-1.500-2-3.400-2.300.9a7 7 0 00-2.200-1.300L14 3h-4l-.4 2.400a7 7 0 00-2.200 1.300l-2.300-.9-2 3.400 2 1.500A7 7 0 005 12c0 .4 0 .9.1 1.300l-2 1.500 2 3.400 2.300-.9a7 7 0 002.200 1.300L10 21h4l.4-2.400a7 7 0 002.200-1.300l2.300.9 2-3.400-2-1.500c.1-.4.1-.9.1-1.300z',
  save: 'M5 4h11l3 3v13H5V4zM8 4v5h7V4M8 20v-6h8v6',
  dice: 'M12 2.500l8.500 4.800v9.400L12 21.500l-8.500-4.800V7.300L12 2.500zM12 2.500v6.500M3.500 7.300L12 9l8.500-1.700M12 9l-5 8M12 9l5 8M7 17h10',
  sword: 'M14.500 3H21v6.500L9.500 21 3 14.500 14.500 3zM6 17.500l-3 3M13 5l6 6',
  shield: 'M12 3l8 3v6c0 4.500-3.200 7.800-8 9-4.800-1.200-8-4.500-8-9V6l8-3z',
  heart: 'M12 20.500C6.500 16.700 3.500 13.500 3.500 9.800A4.300 4.300 0 0112 7.500a4.300 4.300 0 018.500 2.300c0 3.700-3 6.900-8.500 10.700z',
  spark: 'M12 3l1.800 5.700L19.500 10l-5.700 1.800L12 17.500l-1.800-5.700L4.500 10l5.700-1.300L12 3zM18.500 16l.7 2.300 2.300.700-2.300.700-.7 2.300-.7-2.300-2.300-.700 2.300-.700.7-2.300z',
  flask: 'M9 3h6M10 3v6l-5 9.500A1.500 1.500 0 006.300 21h11.400a1.500 1.500 0 001.300-2.500L14 9V3M7.500 15h9',
  run: 'M13.500 5.500a1.500 1.500 0 100-3 1.500 1.500 0 000 3zM6 11l3.500-3 3.500 1 2 3 3 1M9.500 8l-1 5 3.500 2.500 1 5M8.500 13l-1.500 3-3.500 1',
  undo: 'M8 5L3.500 9.500 8 14M3.500 9.500H14a6 6 0 010 12h-3',
  eye: 'M2.500 12S6 5.500 12 5.500 21.500 12 21.500 12 18 18.500 12 18.500 2.500 12 2.500 12zM12 15a3 3 0 100-6 3 3 0 000 6z',
  star: 'M12 3l2.700 5.800 6.300.800-4.600 4.400 1.200 6.300L12 17.200 6.400 20.300l1.200-6.300L3 9.600l6.300-.800L12 3z',
  wand: 'M4 20L15 9M13 7l4 4M17.500 3v3M16 4.500h3M20 9v2M19 10h2M10 3.500v2M9 4.500h2',
  flag: 'M5 21V4M5 4.500c5-2.500 8 2.500 14 0v9c-6 2.500-9-2.500-14 0',
  coin: 'M12 20a8 8 0 100-16 8 8 0 000 16zM12 8v8M9.500 10.500c0-1.200 1-2 2.500-2s2.500.800 2.500 2-1 1.700-2.500 1.700-2.500.600-2.500 1.800 1 2 2.500 2 2.500-.800 2.500-2',
  skull: 'M12 3a8 8 0 00-8 8c0 2.800 1.500 5.200 3.500 6.500V20h9v-2.500c2-1.300 3.500-3.700 3.500-6.500a8 8 0 00-8-8zM9 12.500a1.500 1.500 0 100-3 1.500 1.500 0 000 3zM15 12.500a1.500 1.500 0 100-3 1.500 1.500 0 000 3zM10.500 20v-2M13.500 20v-2',
  lock: 'M7 11V8a5 5 0 0110 0v3M5.500 11h13v9.500h-13V11z',
  check: 'M5 12.500l4.500 4.500L19 7.500',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  info: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 11v6M12 7.500v.500',
  map: 'M3.500 6.500l5.500-2 6 2 5.500-2v13l-5.500 2-6-2-5.500 2v-13zM9 4.500v13M15 6.500v13',
  moon: 'M20 14.500A8.500 8.500 0 019.500 4a8.500 8.500 0 1010.500 10.500z',
};

export function icon(name, size = 20) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.6');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add('icon');
  const p = document.createElementNS(SVG_NS, 'path');
  p.setAttribute('d', ICONS[name] || ICONS.info);
  svg.appendChild(p);
  return svg;
}

export function button(label, onClick, opts = {}) {
  return h('button', { class: 'btn ' + (opts.class || ''), type: 'button', onclick: onClick, disabled: opts.disabled, title: opts.title, 'aria-label': opts.aria },
    opts.icon ? icon(opts.icon, opts.iconSize || 18) : null, label ? h('span', null, label) : null);
}

let toastHost = null;
export function toast(text, kind = 'info', ms = 2600) {
  if (!toastHost) { toastHost = h('div', { class: 'toast-host', 'aria-live': 'polite' }); document.body.appendChild(toastHost); }
  const el = h('div', { class: 'toast toast-' + kind }, text);
  toastHost.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 350); }, ms);
}

/** Modal dialog. Returns { close }. content may be a Node or a function(close) → Node. */
export function modal({ title, content, wide = false, onClose = null, className = '' }) {
  const close = () => { wrap.remove(); document.removeEventListener('keydown', onKey); if (onClose) onClose(); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  const body = h('div', { class: 'modal-body' });
  const box = h('div', { class: 'modal-box ' + (wide ? 'wide ' : '') + className, role: 'dialog', 'aria-modal': 'true', 'aria-label': title || '' },
    h('header', { class: 'modal-head' }, h('h2', null, title || ''), h('button', { class: 'icon-btn', type: 'button', onclick: close, 'aria-label': '关闭' }, icon('close'))),
    body);
  const wrap = h('div', { class: 'modal-wrap', onclick: (e) => { if (e.target === wrap) close(); } }, box);
  body.appendChild(typeof content === 'function' ? content(close) : content);
  document.body.appendChild(wrap);
  document.addEventListener('keydown', onKey);
  return { close, body, box };
}

export function confirmDialog(text, onYes, yesLabel = '确定', noLabel = '取消') {
  const m = modal({
    title: '确认',
    content: (close) => h('div', { class: 'confirm' }, h('p', null, text),
      h('div', { class: 'row end' }, button(noLabel, close, { class: 'ghost' }), button(yesLabel, () => { close(); onYes(); }, { class: 'primary' }))),
  });
  return m;
}

export function bar(cur, max, cls = '') {
  const pct = max > 0 ? Math.max(0, Math.min(100, (cur / max) * 100)) : 0;
  return h('div', { class: 'bar ' + cls, role: 'progressbar', 'aria-valuenow': cur, 'aria-valuemax': max }, h('i', { style: { width: pct + '%' } }));
}

export function field(label, control) { return h('label', { class: 'field' }, h('span', { class: 'field-label' }, label), control); }
