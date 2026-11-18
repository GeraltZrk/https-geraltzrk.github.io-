/* PA 话术手册 · 页面交互
 * 数据来自 window.PA_DATA（src/data/*.json）与 window.PA_SKILL（skill/ 目录下的文件）。
 * 每个 init 都先检查容器是否存在，缺数据时静默跳过。
 */
(function () {
  'use strict';
  var D = window.PA_DATA || {};
  var SK = window.PA_SKILL || {};
  var L = window.PALint;

  /* ---------- 小工具 ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (attrs[k] == null || attrs[k] === false) return;
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem('pa-voice:' + key);
      window.localStorage.setItem('pa-voice:' + key, val);
    } catch (e) { /* 存不了就算了 */ }
    return null;
  }
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    if (!t) { t = el('div', { id: 'toast', class: 'toast', role: 'status' }); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 2200);
  }
  function copyText(text, okMsg) {
    function fallback() {
      var ta = el('textarea', { class: 'sr', 'aria-hidden': 'true' });
      ta.value = text; document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove();
      toast(ok ? (okMsg || '已复制') : '复制失败，请手动选择文本');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(okMsg || '已复制'); }, fallback);
    } else fallback();
  }
  // 能力：在 Claude 里用 claude.use，独立网页里为空
  function capability(name) {
    if (window.claude && typeof window.claude.use === 'function') {
      try { return window.claude.use(name).catch(function () { return null; }); } catch (e) { return Promise.resolve(null); }
    }
    return Promise.resolve(null);
  }
  var IN_CLAUDE = !!(window.claude && typeof window.claude.use === 'function');
  function saveFile(filename, data) {
    var isText = typeof data === 'string';
    // Claude 里只放行一部分扩展名：脚本类文件补一个 .txt 再存
    if (IN_CLAUDE && !/\.(?:txt|json|md|csv|html|svg|zip|pdf)$/i.test(filename)) filename += '.txt';
    function cannot() {
      if (isText) copyText(data, '这里不能直接下载，已复制到剪贴板');
      else toast('这里不能直接下载，可以改用「复制整套」');
    }
    capability('downloads').then(function (dl) {
      if (dl) {
        dl.save({ filename: filename, data: data }).then(function () { toast('已保存 ' + filename); }, function (e) {
          if (e && (e.code === 'declined' || e.code === 'rate_limited')) return;
          cannot();
        });
      } else if (!IN_CLAUDE) {
        var blob = isText ? new Blob([data], { type: 'text/plain;charset=utf-8' }) : data;
        var url = URL.createObjectURL(blob);
        var link = el('a', { download: filename, href: url });
        document.body.appendChild(link); link.click(); link.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      } else cannot();
    });
  }

  /* ---------- 最小 ZIP 打包：只存储、不压缩，文件名按 UTF-8 ---------- */
  var CRC_TABLE = null;
  function crc32(bytes) {
    if (!CRC_TABLE) {
      CRC_TABLE = new Uint32Array(256);
      for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; CRC_TABLE[n] = c >>> 0; }
    }
    var crc = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) crc = CRC_TABLE[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
  function makeZip(files) {
    var enc = new TextEncoder(), parts = [], central = [], offset = 0, d = new Date();
    var dosTime = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    var dosDate = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    files.forEach(function (f) {
      var name = enc.encode(f.name), data = enc.encode(f.text), crc = crc32(data);
      var lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
      lh.setUint16(10, dosTime, true); lh.setUint16(12, dosDate, true); lh.setUint32(14, crc, true);
      lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
      parts.push(new Uint8Array(lh.buffer), name, data);
      var ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true);
      ch.setUint16(12, dosTime, true); ch.setUint16(14, dosDate, true); ch.setUint32(16, crc, true);
      ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true);
      ch.setUint32(42, offset, true);
      central.push(new Uint8Array(ch.buffer), name);
      offset += 30 + name.length + data.length;
    });
    var cenSize = central.reduce(function (n, x) { return n + x.length; }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
    end.setUint32(12, cenSize, true); end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]), { type: 'application/zip' });
  }
  window.PAVoice = window.PAVoice || {};
  window.PAVoice.makeZip = makeZip;
  function pressed(group, btn) {
    $$('button', group).forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
  }
  function segInit(seg, onChange) {
    if (!seg) return;
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b || !seg.contains(b)) return;
      pressed(seg, b);
      onChange(b.value, b);
    });
  }
  function segValue(seg) {
    var b = seg && $('button[aria-pressed="true"]', seg);
    return b ? b.value : null;
  }

  /* ---------- 文本高亮：钱是金色，时间是青色 ---------- */
  var RX_MONEY = /([¥￥]\s?\d[\d,]*(?:\.\d+)?(?:\/[月年天次])?|\d[\d,]*(?:\.\d+)?\s?(?:元|块钱|块|万元))/g;
  var RX_TIME = /(\d{1,2}[:：]\d{2}|\d+(?:\.\d+)?\s?(?:分钟|个小时|小时|天(?!内)|h\b|min\b)|\d{1,2}\s?月\s?\d{1,2}\s?[日号])/g;
  function hl(text) {
    var s = esc(text);
    s = s.replace(RX_MONEY, '<span class="hl-money">$1</span>');
    s = s.replace(RX_TIME, function (m) { return '<span class="hl-time">' + m + '</span>'; });
    return s;
  }
  function cutText(text, budget, showCut) {
    if (!L) return hl(text);
    var t = L.truncate(text || '', budget);
    if (!t.cut) return hl(t.shown);
    return hl(t.shown) + (showCut ? '<span class="cut">' + esc(t.rest) + '</span>' : '<span class="ell">…</span>');
  }

  /* ---------- 手机样本 ---------- */
  function renderNoti(msg, o) {
    o = Object.assign({ surface: 'lock', showCut: true, when: '现在', app: 'PA' }, o || {});
    var s = (L && L.SURFACES[o.surface]) || { title: 99, body: 999 };
    var acts = (msg.actions || []).filter(Boolean);
    if (o.surface === 'island') {
      var v = (RX_MONEY.exec(msg.title + ' ' + msg.body) || RX_TIME.exec(msg.title + ' ' + msg.body) || [''])[0];
      RX_MONEY.lastIndex = 0; RX_TIME.lastIndex = 0;
      var short = L ? L.truncate(msg.title || msg.body || '', s.title).shown : (msg.title || '');
      return el('div', { class: 'surface-island' }, '<span>' + esc(short) + '</span>' + (v ? '<span>' + hl(v) + '</span>' : ''));
    }
    if (o.surface === 'watch') {
      return el('div', { class: 'surface-watch' }, '<b>' + cutText(msg.title, s.title, o.showCut) + '</b><span>' + cutText(msg.body, s.body, o.showCut) + '</span>');
    }
    if (o.surface === 'wechat') {
      return el('div', { class: 'surface-wechat' },
        '<h6>服务通知 · ' + esc(o.app) + '</h6><dl>' +
        '<dt>事项</dt><dd>' + cutText(msg.title, s.title, o.showCut) + '</dd>' +
        '<dt>说明</dt><dd>' + cutText(msg.body, s.body, o.showCut) + '</dd>' +
        (acts.length ? '<dt>操作</dt><dd>' + esc(acts[0]) + ' ›</dd>' : '') + '</dl>');
    }
    var cls = o.surface === 'chat' ? 'noti chat' : 'noti';
    var html = '<div class="noti-head"><span>' + esc(o.app) + '</span><time>' + esc(o.when) + '</time></div>';
    if (msg.title) html += '<div class="noti-title">' + cutText(msg.title, s.title, o.showCut) + '</div>';
    if (msg.body) html += '<div class="noti-body">' + cutText(msg.body, s.body, o.showCut) + '</div>';
    if (acts.length && o.actions !== false) html += '<div class="noti-actions">' + acts.slice(0, 3).map(function (a) { return '<span>' + esc(a) + '</span>'; }).join('') + '</div>';
    return el('div', { class: cls }, html);
  }
  function renderPhone(msg, o) {
    o = o || {};
    var ph = el('div', { class: 'phone' });
    var sc = el('div', { class: 'phone-screen' });
    if (o.clock !== false && o.surface !== 'chat') sc.appendChild(el('div', { class: 'phone-clock', 'aria-hidden': 'true' }, '<small>' + esc(o.date || '11月18日 周三') + '</small><b>' + esc(o.clockText || '9:41') + '</b>'));
    sc.appendChild(renderNoti(msg, o));
    (o.extra || []).forEach(function (n) { sc.appendChild(n); });
    ph.appendChild(sc);
    return ph;
  }

  /* ---------- 稿纸 ---------- */
  function toCells(text) {
    var cells = [], buf = '', bufStart = 0, i = 0;
    function flush() { if (buf) { cells.push({ t: buf, i: bufStart }); buf = ''; } }
    for (var ch of String(text || '')) {
      var half = ch.codePointAt(0) <= 0x7f;
      if (half) {
        if (!buf) bufStart = i;
        buf += ch;
        if (buf.length === 2) flush();
      } else { flush(); cells.push({ t: ch, i: i }); }
      i += ch.length;
    }
    flush();
    return cells;
  }
  function renderManu(msg, result, o) {
    var s = L.SURFACES[o.surface] || L.SURFACES.lock;
    var wrap = el('div', { class: 'manu', role: 'img', 'aria-label': '稿纸视图：一格一字，标出锚点区、可见区与被截断的部分' });
    var n = 0;
    var valRe = L._RX.value;
    function hitSet(field) {
      var set = {};
      result.findings.forEach(function (f) {
        if (f.field !== field || f.index < 0 || !f.text || f.rule === 'LEN' || f.rule === 'CLAUSE') return;
        for (var k = f.index; k < f.index + f.text.length; k++) set[k] = true;
      });
      return set;
    }
    function valSet(text) {
      var set = {}, m, r = new RegExp(valRe.source, 'g');
      while ((m = r.exec(text)) !== null) { for (var k = m.index; k < m.index + m[0].length; k++) set[k] = true; if (!m[0].length) r.lastIndex++; }
      return set;
    }
    function put(field, text, budget) {
      var hits = hitSet(field), vals = valSet(text), w = 0;
      toCells(text).forEach(function (c) {
        n++; w += 1;
        var cls = 'cell';
        if (n <= o.anchorWithin) cls += ' z-anchor';
        if (w > budget) cls += ' z-cut';
        var isHit = false, isVal = false;
        for (var k = c.i; k < c.i + c.t.length; k++) { if (hits[k]) isHit = true; if (vals[k]) isVal = true; }
        if (isHit) cls += ' hit'; else if (isVal) cls += ' val';
        wrap.appendChild(el('span', { class: cls }, (n === 1 || n % 5 === 0 ? '<sup>' + n + '</sup>' : '') + esc(c.t)));
      });
    }
    if (msg.title) { put('title', msg.title, s.title); wrap.appendChild(el('span', { class: 'cell gap', 'aria-hidden': 'true' })); n++; }
    put('body', msg.body, s.body);
    return wrap;
  }

  /* ---------- 账单 ---------- */
  function renderReceipt(r, o) {
    var m = r.metrics;
    var first = [m.firstValuePos, m.firstStatePos].filter(function (x) { return x >= 0; }).sort(function (a, b) { return a - b; })[0];
    var firstTxt = first === undefined ? '没找到' : '第 ' + (Math.floor(first) + 1) + ' 字';
    var need = (L.TYPES[o.type] || {}).needsAction;
    var rows = [
      ['标题 + 正文', m.chars + ' 字', ''],
      ['第一个数字或状态出现在', firstTxt, first === undefined || first > o.anchorWithin ? 'bad' : 'good'],
      ['抛回给用户的问题', m.questions + ' 个', m.questions > 1 || (m.questions && !m.actions) ? 'bad' : (m.questions ? '' : 'good')],
      ['点一下就能完成的动作', m.actions + ' 个', need && !m.actions ? 'bad' : (m.actions && m.actions <= 3 ? 'good' : '')],
      ['估算读完', m.readSeconds + ' 秒', '']
    ];
    var html = '<h5>这条消息的账单</h5>' + rows.map(function (x) {
      return '<div class="row ' + x[2] + '"><span>' + x[0] + '</span><b>' + x[1] + '</b></div>';
    }).join('');
    html += '<div class="row total"><span>体检结果</span><b>' + r.counts.error + ' 处必改 · ' + r.counts.warn + ' 处建议改 · ' + r.counts.info + ' 处可更好</b></div>';
    html += '<span class="stamp v-' + r.verdict + '">' + r.verdictText + '</span>';
    return el('div', { class: 'receipt' }, html);
  }
  function renderFindings(r) {
    var box = el('div', { class: 'findings' });
    if (!r.findings.length) { box.appendChild(el('div', { class: 'findings-ok', text: '规则检查全部通过。语气是否合适，还要对照第 6、7 章。' })); return box; }
    var order = { error: 0, warn: 1, info: 2 }, label = { error: '必改', warn: '建议', info: '可更好' };
    r.findings.slice().sort(function (a, b) { return order[a.level] - order[b.level]; }).forEach(function (f) {
      var rule = (L.RULES.filter(function (x) { return x.id === f.rule; })[0] || {});
      box.appendChild(el('div', { class: 'finding l-' + f.level },
        '<i>' + label[f.level] + '</i><span>' + esc(f.msg) + '</span>' +
        '<em>' + (f.fix ? '改法：' + esc(f.fix) : '') + (rule.ref ? ' · <a href="#' + rule.ref + '">' + rule.ref + ' ' + esc(rule.name) + '</a>' : '') + '</em>'));
    });
    return box;
  }

  /* ---------- 章节栏：滚动高亮 + 主题 ---------- */
  function initNav() {
    var links = $$('.rail-nav a');
    if (!links.length) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var secs = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var nav = $('.rail-nav');
    function setCurrent(id) {
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      var a = map[id];
      if (!a) return;
      a.setAttribute('aria-current', 'true');
      if (nav.scrollWidth > nav.clientWidth) {
        nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2, behavior: 'auto' });
      }
    }
    if ('IntersectionObserver' in window) {
      var seen = {};
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
        for (var i = 0; i < secs.length; i++) if (seen[secs[i].id]) { setCurrent(secs[i].id); return; }
      }, { rootMargin: '-15% 0px -70% 0px' });
      secs.forEach(function (s) { io.observe(s); });
    }
    var themeBtn = $('#themeToggle');
    if (themeBtn) {
      if (IN_CLAUDE) themeBtn.hidden = true; // Claude 里由宿主切换主题
      else {
        var saved = store('theme');
        if (saved) document.documentElement.setAttribute('data-theme', saved);
        themeBtn.addEventListener('click', function () {
          var cur = document.documentElement.getAttribute('data-theme') ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          var next = cur === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', next);
          store('theme', next);
        });
      }
    }
  }

  /* ---------- 证据角标 ---------- */
  var CHECK_LABEL = { fetch: '已核对原文', local: '已对照本地原文', search: '仅见搜索摘要', memory: '凭既有知识，未核' };
  function checkTag(e) {
    var k = e.check || (e.verified ? 'fetch' : 'search');
    return '<span class="tag chk-' + k + '">' + CHECK_LABEL[k] + '</span>';
  }
  var EV = {};
  (D.evidence || []).forEach(function (e) { EV[e.id] = e; });
  function initEvidence() {
    // 把 <a class="ev" data-ev="T1-03"></a> 补全成可点的角标
    $$('.ev[data-ev]').forEach(function (a) {
      var e = EV[a.getAttribute('data-ev')];
      if (!e) { a.hidden = true; return; }
      a.setAttribute('data-k', e.kind);
      a.setAttribute('role', 'button');
      a.setAttribute('tabindex', '0');
      a.setAttribute('aria-expanded', 'false');
      if (!a.textContent.trim()) a.textContent = e.kind === '实证研究' ? '实证' : e.kind === '官方规范' ? '规范' : e.kind === '行业数据' ? '数据' : e.kind === '产品案例' ? '案例' : e.kind === '用户声音' ? '用户' : e.kind;
      a.title = e.source;
    });
    var pop;
    function close() {
      if (pop) { pop.remove(); pop = null; }
      $$('.ev[aria-expanded="true"]').forEach(function (x) { x.setAttribute('aria-expanded', 'false'); });
    }
    function open(a) {
      var e = EV[a.getAttribute('data-ev')];
      if (!e) return;
      close();
      a.setAttribute('aria-expanded', 'true');
      pop = el('div', { class: 'pop', role: 'dialog', 'aria-label': '证据来源' },
        '<div class="pop-meta"><span class="tag k-' + esc(e.kind) + '">' + esc(e.kind) + '</span>' +
        '<span class="tag c-' + esc(e.confidence) + '">' + ({ high: '把握高', medium: '把握中', low: '把握低' }[e.confidence] || '') + '</span>' +
        checkTag(e) + '<span class="mono">' + esc(e.id) + '</span></div>' +
        '<h5>' + esc(e.claim) + '</h5>' +
        (e.data ? '<div class="pop-data">' + esc(e.data) + '</div>' : '') +
        '<div>' + (e.url ? '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(e.source) + '</a>' : esc(e.source)) + (e.year ? '（' + esc(e.year) + '）' : '') + '</div>' +
        (e.caveat ? '<div class="pop-caveat">边界：' + esc(e.caveat) + '</div>' : '') +
        '<div style="margin-top:.5rem"><a href="#' + esc(e.id) + '" data-ledger-jump="' + esc(e.id) + '">在证据台账里看 ›</a></div>');
      document.body.appendChild(pop);
      var r = a.getBoundingClientRect(), pw = pop.offsetWidth;
      var left = Math.max(16, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - pw - 16));
      pop.style.left = left + 'px';
      pop.style.top = (window.scrollY + r.bottom + 8) + 'px';
    }
    document.addEventListener('click', function (ev) {
      var j = ev.target.closest('[data-ledger-jump]');
      if (j) { showLedgerRow(j.getAttribute('data-ledger-jump')); close(); return; }
      var a = ev.target.closest('.ev[data-ev]');
      if (a) { ev.preventDefault(); if (a.getAttribute('aria-expanded') === 'true') close(); else open(a); return; }
      if (pop && !ev.target.closest('.pop')) close();
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') close();
      if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.classList && ev.target.classList.contains('ev')) { ev.preventDefault(); open(ev.target); }
    });
    window.addEventListener('resize', close);
  }

  /* ---------- 证据台账 ---------- */
  var ledgerState = { ch: 'all', kind: 'all', check: 'all', q: '', limit: 60 };
  function ledgerRowHtml(e) {
    return '<div class="id">' + esc(e.id) + '</div><p>' + esc(e.claim) + '</p>' +
      (e.data ? '<div class="data">' + esc(e.data) + '</div>' : '') +
      '<div class="src"><span class="tag k-' + esc(e.kind) + '">' + esc(e.kind) + '</span>' +
      '<span class="tag c-' + esc(e.confidence) + '">' + ({ high: '把握高', medium: '把握中', low: '把握低' }[e.confidence] || '') + '</span>' +
      checkTag(e) +
      (e.url ? '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(e.source) + '</a>' : '<span>' + esc(e.source) + '</span>') +
      (e.year ? '<span>' + esc(e.year) + '</span>' : '') + '</div>' +
      (e.caveat ? '<div class="src">边界：' + esc(e.caveat) + '</div>' : '') +
      (e.so ? '<div class="src so">对 PA 的含义：' + esc(e.so) + '</div>' : '');
  }
  function ledgerItems() {
    var words = ledgerState.q.toLowerCase().split(/\s+/).filter(Boolean);
    return (D.evidence || []).filter(function (e) {
      if (ledgerState.ch !== 'all' && (e.chapters || []).indexOf(ledgerState.ch) === -1) return false;
      if (ledgerState.kind !== 'all' && e.kind !== ledgerState.kind) return false;
      if (ledgerState.check === 'verified' && e.check !== 'fetch' && e.check !== 'local') return false;
      if ((ledgerState.check === 'search' || ledgerState.check === 'memory') && e.check !== ledgerState.check) return false;
      if (words.length) {
        var hay = (e.id + ' ' + e.claim + ' ' + e.source + ' ' + (e.data || '') + ' ' + (e.caveat || '') + ' ' + (e.so || '')).toLowerCase();
        for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) === -1) return false;
      }
      return true;
    });
  }
  function renderLedger() {
    var list = $('#ledgerList');
    if (!list) return;
    var items = ledgerItems(), shown = items.slice(0, ledgerState.limit);
    list.innerHTML = '';
    var frag = document.createDocumentFragment();
    shown.forEach(function (e) { frag.appendChild(el('div', { class: 'ledger-row', id: e.id }, ledgerRowHtml(e))); });
    list.appendChild(frag);
    if (!items.length) list.appendChild(el('p', { class: 'note', style: 'padding:1rem 0', text: '没有符合条件的证据。换个关键词，或者放宽筛选。' }));
    var c = $('#ledgerCount');
    if (c) c.textContent = '符合条件 ' + items.length + ' 条，共 ' + (D.evidence || []).length + ' 条' + (shown.length < items.length ? '。先显示前 ' + shown.length + ' 条' : '');
    var more = $('#ledgerMore');
    if (more) { more.hidden = shown.length >= items.length; more.textContent = '再显示 ' + Math.min(60, items.length - shown.length) + ' 条'; }
  }
  function showLedgerRow(id) {
    ledgerState = { ch: 'all', kind: 'all', check: 'all', q: '', limit: Infinity };
    $$('#ledgerCh button, #ledgerKind button, #ledgerCheck button').forEach(function (b) { b.setAttribute('aria-pressed', b.value === 'all' ? 'true' : 'false'); });
    var q = $('#ledgerQ'); if (q) q.value = '';
    renderLedger();
    var row = document.getElementById(id);
    if (!row) return;
    row.scrollIntoView({ block: 'center' });
    try { history.replaceState(null, '', '#' + id); } catch (e) { /* 忽略 */ }
    $$('.ledger-row.flash').forEach(function (x) { x.classList.remove('flash'); });
    row.classList.add('flash');
  }
  function initLedger() {
    if (!$('#ledgerList')) return;
    var ev = D.evidence || [], kinds = {}, checks = { fetch: 0, local: 0, search: 0, memory: 0 };
    ev.forEach(function (e) { kinds[e.kind] = (kinds[e.kind] || 0) + 1; checks[e.check] = (checks[e.check] || 0) + 1; });
    var kindRows = Object.keys(kinds).map(function (k) { return [k, kinds[k]]; }).sort(function (a, b) { return b[1] - a[1]; });
    var stats = $('#ledgerStats');
    if (stats) {
      var bars = function (title, rows) {
        var max = Math.max.apply(null, rows.map(function (r) { return r[1]; }).concat([1]));
        return '<figure class="bars"><figcaption>' + esc(title) + '</figcaption>' + rows.map(function (r) {
          return '<div class="bar-row"><span>' + esc(r[0]) + '</span><i style="--w:' + (r[1] / max * 100).toFixed(1) + '%"></i><b class="num">' + r[1] + '</b></div>';
        }).join('') + '</figure>';
      };
      stats.innerHTML = bars('按证据类型（条）', kindRows) +
        bars('按核对程度（条）', [['已核对原文', checks.fetch + checks.local], ['仅见搜索摘要', checks.search], ['未核对', checks.memory]]);
    }
    var kb = $('#ledgerKind');
    if (kb) {
      kb.innerHTML = '<button class="chip" type="button" value="all" aria-pressed="true">全部</button>' + kindRows.map(function (r) {
        return '<button class="chip" type="button" value="' + esc(r[0]) + '" aria-pressed="false">' + esc(r[0]) + '<i>' + r[1] + '</i></button>';
      }).join('');
      segInit(kb, function (v) { ledgerState.kind = v; ledgerState.limit = 60; renderLedger(); });
    }
    segInit($('#ledgerCh'), function (v) { ledgerState.ch = v; ledgerState.limit = 60; renderLedger(); });
    segInit($('#ledgerCheck'), function (v) { ledgerState.check = v; ledgerState.limit = 60; renderLedger(); });
    var q = $('#ledgerQ');
    if (q) q.addEventListener('input', function () { ledgerState.q = q.value.trim(); ledgerState.limit = 60; renderLedger(); });
    var more = $('#ledgerMore');
    if (more) more.addEventListener('click', function () { ledgerState.limit += 60; renderLedger(); });
    var save = $('#ledgerSave');
    if (save) save.addEventListener('click', function () { saveFile('pa-voice-evidence.json', JSON.stringify(ledgerItems(), null, 2)); });
    renderLedger();
    if (/^#T\d/.test(location.hash)) showLedgerRow(location.hash.slice(1));
  }

  /* ---------- 开篇样本：同一件事，两种说法 ---------- */
  function initHero() {
    var box = $('#heroSpecimen');
    if (!box || !D.presets) return;
    var pair = D.presets.hero;
    function show(which) {
      var m = pair[which];
      var r = L.lint(m, pair.options);
      box.innerHTML = '';
      box.appendChild(renderPhone(m, { surface: 'lock', showCut: true }));
      box.appendChild(renderReceipt(r, Object.assign({}, L.DEFAULTS, pair.options)));
    }
    segInit($('#heroSeg'), show);
    show('after');
  }

  /* ---------- 体检器 ---------- */
  function initLinter() {
    var root = $('#linter');
    if (!root || !L) return;
    var fTitle = $('#lintTitle'), fBody = $('#lintBody'), fActs = $('#lintActions'), fSubj = $('#lintSubject');
    var sSurface = $('#lintSurface'), sType = $('#lintType'), sStakes = $('#lintStakes');
    var out = $('#lintOut'), view = $('#lintView');
    Object.keys(L.SURFACES).forEach(function (k) { sSurface.appendChild(el('option', { value: k, text: L.SURFACES[k].name })); });
    Object.keys(L.TYPES).forEach(function (k) { sType.appendChild(el('option', { value: k, text: L.TYPES[k].name })); });
    function current() {
      return {
        msg: { title: fTitle.value, body: fBody.value, actions: fActs.value.split(/\n|[|｜]/).map(function (s) { return s.trim(); }).filter(Boolean) },
        o: { surface: sSurface.value, type: sType.value, stakes: sStakes.value, subject: fSubj && fSubj.value.trim() ? fSubj.value.trim().split(/[、，,\s]+/).filter(Boolean) : undefined }
      };
    }
    function run() {
      var c = current(), o = Object.assign({}, L.DEFAULTS, c.o);
      var r = L.lint(c.msg, c.o);
      view.innerHTML = '';
      var left = el('div', { class: 'stack' });
      left.appendChild(renderPhone(r.message, { surface: c.o.surface, showCut: true }));
      left.appendChild(el('p', { class: 'specimen-cap', text: L.SURFACES[c.o.surface].name + '：' + L.SURFACES[c.o.surface].note + '。划掉的字是这个位置看不到的。' }));
      view.appendChild(left);
      out.innerHTML = '';
      out.appendChild(renderReceipt(r, o));
      var mw = el('div');
      mw.appendChild(renderManu(r.message, r, o));
      mw.appendChild(el('div', { class: 'manu-legend' }, '<span class="l-anchor">前 ' + o.anchorWithin + ' 字：锚点区</span><span class="l-cut">超出预算，会被截掉</span><span class="l-hit">体检点名的字</span>'));
      out.appendChild(mw);
      out.appendChild(renderFindings(r));
    }
    [fTitle, fBody, fActs, fSubj].forEach(function (f) { if (f) f.addEventListener('input', run); });
    [sSurface, sType, sStakes].forEach(function (f) { f.addEventListener('change', run); });
    var presets = (D.presets && D.presets.linter) || [];
    var pbox = $('#lintPresets');
    function load(p) {
      fTitle.value = p.title || ''; fBody.value = p.body || ''; fActs.value = (p.actions || []).join('\n');
      if (fSubj) fSubj.value = [].concat(p.subject || []).join('、');
      sSurface.value = p.surface || 'lock'; sType.value = p.type || 'opportunity'; sStakes.value = p.stakes || 'mid';
      run();
    }
    presets.forEach(function (p, i) {
      var b = el('button', { class: 'chip', type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false', text: p.name });
      b.addEventListener('click', function () { pressed(pbox, b); load(p); });
      pbox.appendChild(b);
    });
    if (presets.length) load(presets[0]); else run();
    window.PAVoice = window.PAVoice || {};
    window.PAVoice.loadIntoLinter = function (m, o) {
      load(Object.assign({}, m, o || {}));
      $$('button', pbox).forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      root.scrollIntoView({ block: 'start' });
    };
  }

  /* ---------- 表面预算演示（第 2 章） ---------- */
  function initSurfaces() {
    var root = $('#surfaceDemo');
    if (!root || !L || !D.presets) return;
    var msg = D.presets.surfaceDemo;
    var seg = $('#surfaceSeg'), view = $('#surfaceView'), info = $('#surfaceInfo');
    Object.keys(L.SURFACES).forEach(function (k, i) {
      seg.appendChild(el('button', { type: 'button', value: k, 'aria-pressed': i === 0 ? 'true' : 'false', text: L.SURFACES[k].name }));
    });
    function show(k) {
      var s = L.SURFACES[k];
      view.innerHTML = '';
      view.appendChild(renderPhone(msg, { surface: k, showCut: true, clock: k === 'lock' }));
      var src = (D.surfaces || {})[k] || {};
      var evs = (src.ev || []).map(function (id) { return ' <a class="ev" data-ev="' + esc(id) + '"></a>'; }).join('');
      info.innerHTML = '<dl class="kv"><dt>标题预算</dt><dd><b class="num">' + s.title + '</b> 字</dd><dt>正文预算</dt><dd><b class="num">' + s.body + '</b> 字</dd>' +
        '<dt>特点</dt><dd>' + esc(s.note) + '</dd>' +
        (src.rule ? '<dt>怎么写</dt><dd>' + esc(src.rule) + '</dd>' : '') +
        (src.basis ? '<dt>依据</dt><dd class="note">' + esc(src.basis) + evs + '</dd>' : '') + '</dl>';
      initEvidenceIn(info);
    }
    segInit(seg, show);
    show(Object.keys(L.SURFACES)[0]);
  }
  function initEvidenceIn(root) {
    $$('.ev[data-ev]', root).forEach(function (a) {
      var e = EV[a.getAttribute('data-ev')];
      if (!e) { a.hidden = true; return; }
      a.setAttribute('data-k', e.kind); a.setAttribute('role', 'button'); a.setAttribute('tabindex', '0'); a.setAttribute('aria-expanded', 'false');
      if (!a.textContent.trim()) a.textContent = e.kind === '实证研究' ? '实证' : e.kind === '官方规范' ? '规范' : e.kind === '行业数据' ? '数据' : e.kind === '产品案例' ? '案例' : e.kind === '用户声音' ? '用户' : e.kind;
    });
  }

  /* ---------- 目标的一生 ---------- */
  function initLife() {
    var root = $('#life');
    if (!root || !D.lifecycle) return;
    var nodes = $('#lifeNodes'), detail = $('#lifeDetail');
    var states = D.lifecycle.states, types = {};
    D.lifecycle.types.forEach(function (t) { types[t.id] = t; });
    var rows = D.lifecycle.rows || [{ id: null, name: '' }];
    rows.forEach(function (row) {
      if (row.name) nodes.appendChild(el('div', { class: 'life-rowname', text: row.name }));
      var grid = el('div', { class: 'life' });
      states.filter(function (s) { return !row.id || s.row === row.id; }).forEach(function (s) {
        grid.appendChild(el('button', { type: 'button', class: 'life-node', value: s.id, 'aria-pressed': s.id === states[0].id ? 'true' : 'false' },
          '<small>' + esc(s.no) + '</small><b>' + esc(s.name) + '</b><span>' + esc(s.sub) + '</span>' +
          '<i class="ball ' + (s.ball === 'user' ? 'u' : 'p') + '">' + (s.ball === 'user' ? '等用户' : 'PA 在跑') + '</i>'));
      });
      nodes.appendChild(grid);
    });
    function show(id) {
      var s = states.filter(function (x) { return x.id === id; })[0];
      if (!s) return;
      var t = types[s.type] || {};
      detail.innerHTML = '';
      var left = el('div', { class: 'stack' },
        '<div><h4 style="font-size:1.25rem">' + esc(s.name) + ' → 发「' + esc(t.name || '') + '」</h4><p class="note">' + esc(s.desc) + '</p></div>' +
        '<dl class="kv">' +
        '<dt>用户心里在问</dt><dd>' + esc(s.question) + '</dd>' +
        '<dt>这条消息的任务</dt><dd>' + esc(t.job || '') + '</dd>' +
        '<dt>必须包含</dt><dd>' + esc(t.must || '') + '</dd>' +
        '<dt>怎么送达</dt><dd>' + esc(t.delivery || '') + '</dd>' +
        '<dt>语气上限</dt><dd>' + esc(t.tone || '') + '</dd>' +
        '<dt>最常见的错</dt><dd>' + esc(t.pitfall || '') + '</dd>' +
        '</dl>');
      detail.appendChild(left);
      var right = el('div', { class: 'stack' });
      if (s.sample) {
        right.appendChild(renderNoti(s.sample, { surface: 'chat', showCut: false, when: s.sample.when || '现在' }));
        right.lastChild.style.border = '1px solid var(--line)';
        var bt = el('button', { type: 'button', class: 'btn ghost sm', text: '放进体检器看看' });
        bt.style.alignSelf = 'flex-start';
        bt.addEventListener('click', function () { if (window.PAVoice && window.PAVoice.loadIntoLinter) window.PAVoice.loadIntoLinter(s.sample, { type: s.type, stakes: s.sample.stakes || 'mid', surface: 'lock' }); });
        right.appendChild(bt);
      }
      detail.appendChild(right);
    }
    segInit(nodes, show);
    show(states[0].id);
  }

  /* ---------- 该不该问：决策树 ---------- */
  function initTree() {
    var root = $('#tree');
    if (!root || !D.tree) return;
    var T = D.tree, answers = {};
    var stepsBox = $('#treeSteps'), outBox = $('#treeOut');
    T.questions.forEach(function (q, i) {
      var step = el('div', { class: 'tree-step', 'data-q': q.id },
        '<i>' + (i + 1) + '</i><p>' + esc(q.text) + '</p>' + (q.hint ? '<span class="note">' + esc(q.hint) + '</span>' : '') +
        '<div class="seg" role="group" aria-label="' + esc(q.text) + '">' + q.options.map(function (o) {
          return '<button type="button" value="' + esc(o.v) + '" aria-pressed="' + (o.v === q.default ? 'true' : 'false') + '">' + esc(o.label) + '</button>';
        }).join('') + '</div>');
      answers[q.id] = q.default;
      stepsBox.appendChild(step);
      segInit($('.seg', step), function (v) { answers[q.id] = v; decide(); });
    });
    function decide() {
      var res = null;
      for (var i = 0; i < T.rules.length; i++) {
        var r = T.rules[i], ok = true;
        Object.keys(r.when).forEach(function (k) { if ([].concat(r.when[k]).indexOf(answers[k]) === -1) ok = false; });
        if (ok) { res = r; break; }
      }
      // 置灰与结果无关的问题
      $$('.tree-step', stepsBox).forEach(function (s) {
        var id = s.getAttribute('data-q');
        s.classList.toggle('is-off', !!(res && res.ignores && res.ignores.indexOf(id) !== -1));
      });
      if (!res) { outBox.innerHTML = ''; return; }
      var o = T.outcomes[res.out];
      outBox.setAttribute('data-out', res.out);
      var ex = String(res.example || o.example || '').split('｜');
      var btns = (ex[1] || '').match(/\[[^\]]+\]/g) || [];
      outBox.innerHTML = '<span class="note">结论</span><h4>' + esc(o.name) + '</h4><p>' + esc(o.desc) + '</p>' +
        '<p class="note">' + esc(res.why) + '</p>' +
        '<div class="say" data-label="这时候的话术">' + esc(ex[0].trim()) +
        (btns.length ? '<div class="chips" style="margin-top:.45rem">' + btns.map(function (x) { return '<span class="chip">' + esc(x.slice(1, -1)) + '</span>'; }).join('') + '</div>' : '') + '</div>';
    }
    decide();
  }

  /* ---------- 词表 ---------- */
  function initLexicon() {
    var root = $('#lexicon');
    if (!root || !D.lexicon) return;
    var cats = [];
    D.lexicon.forEach(function (x) { if (cats.indexOf(x.cat) === -1) cats.push(x.cat); });
    var chips = $('#lexCats'), q = $('#lexQ'), body = $('#lexBody'), state = { cat: 'all', q: '' };
    chips.innerHTML = '<button class="chip" type="button" value="all" aria-pressed="true">全部<i>' + D.lexicon.length + '</i></button>' + cats.map(function (c) {
      return '<button class="chip" type="button" value="' + esc(c) + '" aria-pressed="false">' + esc(c) + '<i>' + D.lexicon.filter(function (x) { return x.cat === c; }).length + '</i></button>';
    }).join('');
    function render() {
      var rows = D.lexicon.filter(function (x) {
        if (state.cat !== 'all' && x.cat !== state.cat) return false;
        if (state.q && (x.say + x.nosay + x.why + x.cat).indexOf(state.q) === -1) return false;
        return true;
      });
      body.innerHTML = rows.map(function (x) {
        return '<tr><th scope="row">' + esc(x.cat) + '</th><td class="nosay-cell">' + esc(x.nosay) + '</td><td class="say-cell">' + esc(x.say) + '</td><td>' + esc(x.why) +
          (x.ev || []).map(function (id) { return ' <a class="ev" data-ev="' + esc(id) + '"></a>'; }).join('') + '</td></tr>';
      }).join('') || '<tr><td colspan="4" class="muted">没有匹配的词条</td></tr>';
      initEvidenceIn(body);
    }
    segInit(chips, function (v) { state.cat = v; render(); });
    q.addEventListener('input', function () { state.q = q.value.trim(); render(); });
    render();
  }

  /* ---------- 语气调音台 ---------- */
  function initConsole() {
    var root = $('#toneConsole');
    if (!root || !D.tone) return;
    var T = D.tone, state = {};
    var ctl = $('#toneControls'), dials = $('#toneDials'), sample = $('#toneSample'), notes = $('#toneNotes'), code = $('#toneCode');
    T.inputs.forEach(function (inp) {
      state[inp.id] = inp.default;
      var f = el('div', { class: 'field' }, '<span class="label">' + esc(inp.name) + '</span><div class="seg" role="group" aria-label="' + esc(inp.name) + '">' +
        inp.options.map(function (o) { return '<button type="button" value="' + esc(o.v) + '" aria-pressed="' + (o.v === inp.default ? 'true' : 'false') + '">' + esc(o.label) + '</button>'; }).join('') + '</div>');
      ctl.appendChild(f);
      segInit($('.seg', f), function (v) { state[inp.id] = v; render(); });
    });
    function matches(when) {
      return Object.keys(when || {}).every(function (k) { return [].concat(when[k]).indexOf(state[k]) !== -1; });
    }
    function compute() {
      var vals = {}, why = {};
      T.dials.forEach(function (d) { vals[d.id] = d.base; why[d.id] = []; });
      // 按书写顺序应用：预设 → 关系阶段 → 用户状态 → 事件 → 任务风险。后面的更优先，冲突时取严
      T.adjust.forEach(function (a) {
        if (!matches(a.when)) return;
        Object.keys(a.set || {}).forEach(function (k) { vals[k] = a.set[k]; if (a.why) why[k] = [a.why]; });
        Object.keys(a.add || {}).forEach(function (k) { vals[k] += a.add[k]; if (a.why) why[k].push(a.why); });
        Object.keys(a.max || {}).forEach(function (k) { if (vals[k] > a.max[k]) { vals[k] = a.max[k]; if (a.why) why[k] = [a.why]; } });
        Object.keys(a.min || {}).forEach(function (k) { if (vals[k] < a.min[k]) { vals[k] = a.min[k]; if (a.why) why[k] = [a.why]; } });
      });
      T.dials.forEach(function (d) { vals[d.id] = Math.max(0, Math.min(d.levels.length - 1, vals[d.id])); });
      return { vals: vals, why: why };
    }
    function render() {
      var c = compute();
      dials.innerHTML = T.dials.map(function (d) {
        var v = c.vals[d.id], bars = '';
        for (var i = 0; i < d.levels.length; i++) bars += '<i class="' + (i <= v ? 'on' : '') + '"></i>';
        return '<div class="dial"><div class="dial-name"><span>' + esc(d.name) + '</span><b>' + esc(d.codes[v]) + '</b></div>' +
          '<div class="dial-bar" style="--steps:' + d.levels.length + '">' + bars + '</div>' +
          '<div class="dial-val">' + esc(d.levels[v]) + '</div>' +
          (c.why[d.id].length ? '<div class="dial-why">' + esc(c.why[d.id].join('；')) + '</div>' : '') + '</div>';
      }).join('');
      if (code) code.textContent = T.dials.map(function (d) { return d.codes[c.vals[d.id]]; }).join(' ');
      // 样例：取条件匹配且最具体的一条
      var best = null, bestN = -1;
      T.examples.forEach(function (ex) {
        if (!matches(ex.when)) return;
        var n = Object.keys(ex.when).length;
        if (n > bestN) { best = ex; bestN = n; }
      });
      sample.innerHTML = '';
      if (best) {
        sample.appendChild(renderNoti(best.msg, { surface: 'chat', showCut: false }));
        sample.lastChild.style.border = '1px solid var(--line)';
        var exact = T.inputs.every(function (inp) { return state[inp.id] === inp.default || best.when[inp.id] !== undefined; });
        sample.appendChild(el('p', { class: 'note', text: exact ? '这是这组条件下的示例话术。' : '示例取自最接近的一组条件；档位以上面的读数为准。' }));
      }
      notes.innerHTML = T.adjust.filter(function (a) { return a.note && matches(a.when); }).map(function (a) { return '<li>' + esc(a.note) + '</li>'; }).join('');
    }
    render();
  }

  /* ---------- 幽默阶梯 ---------- */
  function initHumor() {
    var root = $('#humor');
    if (!root || !D.humor) return;
    var H = D.humor, lad = $('#humorLadder'), det = $('#humorDetail');
    H.levels.forEach(function (lv, i) {
      lad.appendChild(el('button', { type: 'button', value: String(i), 'aria-pressed': i === 1 ? 'true' : 'false', class: lv.banned ? 'banned' : '' },
        '<small>H' + i + '</small><b>' + esc(lv.name) + '</b><span>' + esc(lv.short) + '</span>'));
    });
    function show(i) {
      var lv = H.levels[+i];
      det.innerHTML = '<div class="stack"><div><h4 style="font-size:1.2rem">H' + i + ' · ' + esc(lv.name) + '</h4><p>' + esc(lv.desc) + '</p></div>' +
        '<dl class="kv"><dt>可以用在</dt><dd>' + esc(lv.ok) + '</dd><dt>不能用在</dt><dd>' + esc(lv.no) + '</dd><dt>机制</dt><dd>' + esc(lv.mech) + '</dd></dl></div>' +
        '<div class="stack">' + lv.examples.map(function (x) { return '<div class="' + (x.bad ? 'nosay' : 'say') + '" data-label="' + esc(x.label) + '">' + esc(x.text) + (x.note ? '<em>' + esc(x.note) + '</em>' : '') + '</div>'; }).join('') + '</div>';
    }
    segInit(lad, show);
    show(1);
    // 发玩笑前的自检
    var cb = $('#jokeChecks'), verdict = $('#jokeVerdict');
    if (cb && H.checklist) {
      cb.innerHTML = H.checklist.map(function (c, i) {
        return '<label><input type="checkbox" id="joke' + i + '" data-kill="' + (c.kill ? '1' : '') + '"><span>' + esc(c.q) + '<br><span class="note">' + esc(c.why) + '</span></span></label>';
      }).join('');
      function judge() {
        var boxes = $$('input', cb), yes = boxes.filter(function (b) { return b.checked; }).length;
        var killed = boxes.some(function (b) { return !b.checked && b.getAttribute('data-kill') === '1'; });
        var v = yes === boxes.length ? ['send', '可以开', boxes.length + ' 项都满足。记得同一句俏皮话不要对同一个人用第二次。'] :
          killed ? ['block', '别开', '有一项硬性条件没满足。把玩笑删掉，消息只会更好。'] :
            ['revise', '再想想', '还差 ' + (boxes.length - yes) + ' 项。拿不准的时候，默认不开。'];
        verdict.innerHTML = '<span class="stamp v-' + v[0] + '">' + v[1] + '</span><p class="note" style="margin-top:.7rem">' + v[2] + '</p>';
      }
      cb.addEventListener('change', judge);
      judge();
    }
  }

  /* ---------- 场景话术库 ---------- */
  var MOOD_NAME = { rushed: '赶时间', neutral: '平常', relaxed: '松弛' };
  var RULE_TITLES = {};
  (D.rules || []).forEach(function (r) { RULE_TITLES[r.id] = r.title; });
  // 把文字里的 R22 这类规则编号变成指向规则卡的链接
  function linkRules(text) {
    return esc(text).replace(/R\d{2}/g, function (m) { return RULE_TITLES[m] ? '<a href="#' + m + '" title="' + esc(RULE_TITLES[m]) + '">' + m + '</a>' : m; });
  }
  function initScenarios() {
    var root = $('#scenarios');
    if (!root) return;
    var S = D.scenarios;
    if (!S || !S.length) { $$('.tool', root).forEach(function (t) { t.hidden = true; }); return; }
    var list = $('#scnList'), thread = $('#scnThread'), moodSeg = $('#scnMood'), viewSeg = $('#scnView'), headBox = $('#scnHead');
    var state = { id: S[0].id, mood: 'neutral', view: 'one' };
    var kindName = { money: '省钱', time: '省时间', both: '都省' };
    S.forEach(function (s, i) {
      list.appendChild(el('button', { type: 'button', value: s.id, 'aria-pressed': i === 0 ? 'true' : 'false' },
        '<b>' + esc(s.name) + '</b><i class="k-' + esc(s.kind) + '">' + (kindName[s.kind] || '') + '</i><span>' + esc(s.goal) + '</span>'));
    });
    function surfaceOf(t) { return t.surface === 'chat' ? 'chat' : 'lock'; }
    function stakesOf(s, t) { return (['approval', 'blocked'].indexOf(t.type) !== -1 && s.stakes !== 'low') ? 'high' : s.stakes; }
    function card(s, t, mood, withLabel) {
      var v = (t.variants && (t.variants[mood] || t.variants.neutral)) || t;
      var wrap = el('div', { class: 'scn-card' });
      if (withLabel) wrap.appendChild(el('div', { class: 'scn-mood m-' + mood, text: MOOD_NAME[mood] }));
      wrap.appendChild(renderNoti(v, { surface: surfaceOf(t), showCut: false, when: t.clock || '' }));
      if (v.why && mood !== 'neutral') wrap.appendChild(el('p', { class: 'why' }, linkRules(v.why)));
      var b = el('button', { class: 'btn ghost sm scn-lint', type: 'button', text: '拿去体检' });
      b.addEventListener('click', function () {
        if (window.PAVoice && window.PAVoice.loadIntoLinter) {
          window.PAVoice.loadIntoLinter({ title: v.title, body: v.body, actions: v.actions }, { surface: surfaceOf(t), type: t.type, stakes: stakesOf(s, t) });
        }
      });
      wrap.appendChild(b);
      return wrap;
    }
    function render() {
      var s = S.filter(function (x) { return x.id === state.id; })[0];
      headBox.innerHTML = '<h4 style="font-size:1.2rem">' + esc(s.name) + '</h4><p class="note">用户的原话：「' + esc(s.goal) + '」<br>严肃度 ' +
        esc({ high: '高', mid: '中', low: '低' }[s.stakes] || '') + ' · 幽默上限 H' + esc(String(s.humorMax)) + ' · 称呼「' + esc(s.address || '你') + '」</p>';
      thread.innerHTML = '';
      thread.classList.toggle('is-diff', state.view === 'diff');
      s.thread.forEach(function (t, i) {
        var item = el('div', { class: 'thread-item' });
        item.appendChild(el('header', null, '<small>' + (i + 1) + ' / ' + s.thread.length + '</small><b>' + esc(t.stateName || '') + '</b><span>' + esc(t.typeName || '') + '</span>'));
        var right = el('div', { class: 'thread-main' });
        if (t.when) right.appendChild(el('p', { class: 'when', text: t.when }));
        if (state.view === 'diff') {
          var row = el('div', { class: 'scn-diff' });
          ['rushed', 'neutral', 'relaxed'].forEach(function (m) { row.appendChild(card(s, t, m, true)); });
          right.appendChild(row);
        } else right.appendChild(card(s, t, state.mood, false));
        if (t.why) right.appendChild(el('p', { class: 'why' }, '为什么这样写：' + linkRules(t.why)));
        if (t.before) right.appendChild(el('p', { class: 'before' }, '常见写法：' + esc(t.before)));
        item.appendChild(right);
        thread.appendChild(item);
      });
    }
    segInit(list, function (v) { state.id = v; render(); });
    segInit(moodSeg, function (v) { state.mood = v; render(); });
    segInit(viewSeg, function (v) {
      state.view = v;
      var f = moodSeg && moodSeg.closest('.field');
      if (f) f.classList.toggle('is-off', v === 'diff');
      render();
    });
    render();
    var ex = $('#scnExport');
    if (ex) ex.addEventListener('click', function () { saveFile('pa-voice-scenarios.json', JSON.stringify(S, null, 2)); });
  }

  /* ---------- 场景库的评审记录 ---------- */
  function initScenarioReview() {
    var sec = $('#scnReview');
    if (!sec) return;
    var R = D.review;
    if (!R) { sec.hidden = true; return; }
    var LENS = { A: '28 岁的运营', B: '二孩妈妈', C: '大学生', D: '退休教师', E: '合规与事实', '结构': '结构检查' };
    var box = $('#scnReviewStats');
    if (box) {
      var keys = Object.keys(R.by_lens || {}).sort(function (a, b) { return R.by_lens[b] - R.by_lens[a]; });
      var max = Math.max.apply(null, keys.map(function (k) { return R.by_lens[k]; }).concat([1]));
      var a = R.applied || {}, s = R.by_sev || {}, F = R.final;
      box.innerHTML = '<figure class="bars"><figcaption>评审对草稿提了 ' + R.total + ' 条意见，按视角分</figcaption>' +
        keys.map(function (k) {
          return '<div class="bar-row"><span>' + esc(LENS[k] || k) + '</span><i style="--w:' + (R.by_lens[k] / max * 100).toFixed(1) + '%"></i><b class="num">' + R.by_lens[k] + '</b></div>';
        }).join('') + '</figure>' +
        '<dl class="kv" style="margin-top:1rem">' +
        '<dt>违反规范</dt><dd><b class="num">' + (s.must || 0) + '</b> 条，处理了 ' + (a.must || 0) + ' 条</dd>' +
        '<dt>明显可改</dt><dd><b class="num">' + (s.should || 0) + '</b> 条，采纳 ' + (a.should || 0) + ' 条</dd>' +
        '<dt>小瑕疵</dt><dd><b class="num">' + (s.nit || 0) + '</b> 条，采纳 ' + (a.nit || 0) + ' 条</dd>' +
        (F ? '<dt>最终定稿</dt><dd>按完整设定补回 <b class="num">' + F.restored + '</b> 处事实；验收时又改了 <b class="num">' + F.accept_fixed + '</b> 处</dd>' : '') +
        '</dl>';
    }
    var note = $('#scnReviewNote');
    if (note && R.premise_issues) {
      note.innerHTML = '<b>流程上的一处失误</b>评审这一道，交给评审的场景设定比交给写手的简略。评审提的意见里有 ' + R.premise_issues + ' 条涉及「设定里有没有这个事实」，其中一部分并不是写手多写了，而是评审手里的设定不全；相应的内容在修订时被删掉或写含糊了。' +
        (R.final ? '最终定稿时把完整设定交给了编辑，这些事实已经按设定补回。' : '') + '下面的改动举例，只挑了和这件事无关的。';
      note.hidden = false;
    }
    var list = $('#scnCatches');
    if (list && (R.catches || []).length) {
      var names = {};
      (D.scenarios || []).forEach(function (x) { names[x.id] = x.name; });
      list.innerHTML = '<h4>改动举例 <small class="note" style="font-weight:400">从评审这一道的改动里挑的 ' + R.catches.length + ' 处；最终版本以上面的话术库为准</small></h4>';
      var grid = el('div', { class: 'grid-2' });
      R.catches.forEach(function (c) {
        grid.appendChild(el('article', { class: 'catch' },
          '<header><b>' + esc(names[c.scenario] || c.scenario) + '</b><span>' + esc(String(c.where || '').replace(/neutral/g, '平常').replace(/rushed/g, '赶时间').replace(/relaxed/g, '松弛')) + '</span><i>' + esc(c.lens ? '谁抓到的：' + c.lens : '') + '</i></header>' +
          '<div class="dodont"><div class="nosay" data-label="草稿">' + esc(c.before) + '</div><div class="say" data-label="评审后">' + esc(c.after) + '</div></div>' +
          (c.why ? '<p class="note">' + linkRules(c.why) + '</p>' : '')));
      });
      list.appendChild(grid);
      if ((R.rejected || []).length) {
        list.appendChild(el('details', { class: 'more' }, '<summary>没有采纳的评审意见（' + R.rejected.length + ' 条）</summary><ul class="bullets note" style="margin-top:.6rem">' +
          R.rejected.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'));
      }
    }
  }

  /* ---------- 基础稿六条黄金话术的自测 ---------- */
  function initBaseCheck() {
    var B = D.basecheck, root = $('#baseCheck');
    if (!root || !B || !L) return;
    var chips = $('#baseChips'), before = $('#baseBefore'), after = $('#baseAfter'), table = $('#baseTable');
    var lim = B.limits, n = B.items.length;
    function vis(s) { return String(s || '').replace(/\s/g, '').length; }
    function han(s) { return (String(s || '').match(/[一-龥]/g) || []).length; }
    function lintOf(it, m) { return L.lint(m, { type: it.type, stakes: it.stakes, surface: it.surface }); }
    function sizes(m) {
      return { anchor: [vis(m.title), han(m.title)], context: [vis(m.body), han(m.body)], buttons: (m.actions || []).map(function (a) { return [vis(a), han(a)]; }) };
    }
    function put(box, it, m, withFindings) {
      var r = lintOf(it, m);
      var noti = renderNoti(m, { surface: it.surface, showCut: true });
      noti.style.border = '1px solid var(--line)';
      box.appendChild(noti);
      box.appendChild(renderReceipt(r, Object.assign({}, L.DEFAULTS, { type: it.type })));
      if (withFindings) box.appendChild(renderFindings(r));
    }
    function show(i) {
      var it = B.items[i];
      before.innerHTML = ''; after.innerHTML = '';
      put(before, it, it.base, true);
      put(after, it, it.fixed, false);
      after.appendChild(el('div', { class: 'callout' }, '<b>改了什么</b>' + esc(it.note)));
    }
    B.items.forEach(function (it, i) {
      chips.appendChild(el('button', { class: 'chip', type: 'button', value: String(i), 'aria-pressed': i === 0 ? 'true' : 'false', text: (i + 1) + ' ' + it.name }));
    });
    segInit(chips, function (v) { show(+v); });
    show(0);
    if (!table) return;
    var over = { anchor: [0, 0], context: [0, 0], button: [0, 0], nBtn: 0, total: 0, block: 0, fixedClean: 0 };
    function cell(v, max) { return '<td class="num' + (v > max ? ' over' : '') + '">' + v + '</td>'; }
    var rows = B.items.map(function (it, i) {
      var s = sizes(it.base), rb = lintOf(it, it.base), ra = lintOf(it, it.fixed);
      [0, 1].forEach(function (k) {
        if (s.anchor[k] > lim.anchor) over.anchor[k]++;
        if (s.context[k] > lim.context) over.context[k]++;
        s.buttons.forEach(function (b) { if (b[k] > lim.button) over.button[k]++; });
      });
      over.nBtn += s.buttons.length;
      if (it.claimed > lim.total) over.total++;
      if (rb.counts.error) over.block++;
      if (!ra.counts.error && !ra.counts.warn) over.fixedClean++;
      return '<tr><th scope="row">' + (i + 1) + ' ' + esc(it.name) + '</th>' + cell(s.anchor[0], lim.anchor) + cell(s.context[0], lim.context) +
        '<td class="num' + (s.buttons.some(function (b) { return b[0] > lim.button; }) ? ' over' : '') + '">' + s.buttons.map(function (b) { return b[0]; }).join(' / ') + '</td>' +
        cell(it.claimed, lim.total) +
        '<td><span class="vd v-' + rb.verdict + '">' + rb.verdictText + '</span> ' + rb.counts.error + ' 处必改</td>' +
        '<td><span class="vd v-' + ra.verdict + '">' + ra.verdictText + '</span></td></tr>';
    });
    table.innerHTML = '<thead><tr><th>话术</th><th>锚点<small>上限 ' + lim.anchor + '</small></th><th>上下文<small>上限 ' + lim.context + '</small></th><th>按钮<small>上限 ' + lim.button + '</small></th><th>自报总字数<small>上限 ' + lim.total + '</small></th><th>过本手册体检</th><th>改后</th></tr></thead>' +
      '<tbody>' + rows.join('') + '</tbody>' +
      '<tfoot><tr><th scope="row">超出上限的</th><td class="num">' + over.anchor[0] + ' / ' + n + '</td><td class="num">' + over.context[0] + ' / ' + n + '</td><td class="num">' + over.button[0] + ' / ' + over.nBtn + '</td><td class="num">' + over.total + ' / ' + n + '</td><td>' + over.block + ' / ' + n + ' 条有必改项</td><td>' + over.fixedClean + ' / ' + n + ' 条无必改、无建议</td></tr>' +
      '<tr><th scope="row">只数汉字时</th><td class="num">' + over.anchor[1] + ' / ' + n + '</td><td class="num">' + over.context[1] + ' / ' + n + '</td><td class="num">' + over.button[1] + ' / ' + over.nBtn + '</td>' +
      '<td colspan="3" class="note">前三列是去掉空格后的字符数，这一行换成只数汉字。「自报总字数」是基础稿自己标在每条后面的数。后两列用的是本手册的规则，基础稿并没有承诺遵守。</td></tr></tfoot>';
  }

  /* ---------- Skill 评测结果（可多轮） ---------- */
  function initEval() {
    var sec = $('#eval');
    if (!sec) return;
    var E = D.eval;
    if (!E || !E.rounds || !E.rounds.length || !L) return;
    var SEND = { none: '不发', digest: '进小结', hold: '晚点再发', quiet: '轻提示', push: '推送', urgent: '时效推送' };
    var JUDGE = ['产品经理', '中文文案编辑', '合规审查'];
    var st = { r: E.rounds.length - 1, i: 0, run: '1' };
    var roundSeg = $('#evalRound'), sum = $('#evalSummary'), ck = $('#evalChecks'), dims = $('#evalDims'), prose = $('#evalProse');
    var sel = $('#evalCase'), runSeg = $('#evalRun'), info = $('#evalCaseInfo'), bBox = $('#evalBase'), sBox = $('#evalSkill'), votes = $('#evalVotes');
    var story = $('#evalStory');
    if (story && (E.story || []).length) story.innerHTML = E.story.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    if (roundSeg) {
      E.rounds.forEach(function (r, i) {
        roundSeg.appendChild(el('button', { type: 'button', value: String(i), 'aria-pressed': i === st.r ? 'true' : 'false', text: r.label }));
      });
      var rf = roundSeg.closest('.field');
      if (rf && E.rounds.length < 2) rf.hidden = true;
    }
    function count(t) { return t.skill + t.baseline + t.tie; }
    function split(t, label) {
      var n = count(t) || 1;
      function seg(cls, v, name) { return v ? '<i class="' + cls + '" style="flex:' + v + '" title="' + name + ' ' + v + '">' + v + '</i>' : ''; }
      return '<div class="split-row"><span>' + esc(label) + '</span><div class="split-bar" role="img" aria-label="' + esc(label) + '：带 Skill ' + t.skill + '，差不多 ' + t.tie + '，不带 Skill ' + t.baseline + '">' +
        seg('s', t.skill, '带 Skill') + seg('t', t.tie, '差不多') + seg('b', t.baseline, '不带 Skill') + '</div><b class="num">' + t.skill + ' : ' + t.baseline + '</b></div>';
    }
    var ORD = ['第一轮', '第二轮', '第三轮', '第四轮', '第五轮'];
    // 一批用例第一次是拿来测哪一版规范的：这一轮才出的叫「全新」，其余按它最早出现的轮次叫
    function batchLabel(added, R) {
      if ('v' + added === R.id) return '全新';
      var k = -1;
      E.rounds.forEach(function (r, i) { if (r.id === 'v' + added) k = i; });
      return (ORD[k] || added) + (k === 0 ? '的' : '加的');
    }
    function groupRows(S, R) {
      if (S.groups) return S.groups.slice().reverse().map(function (g) { return split(g.tally, batchLabel(g.added, R) + ' ' + g.n_cases + ' 条'); }).join('');
      if (S.held_out) return split(S.held_out.tally, '新的 ' + S.held_out.n_cases + ' 条') + split(S.seen.tally, '旧的 ' + S.seen.n_cases + ' 条');
      return '';
    }
    // 6 票出自同一个情境，不独立；所以另按情境数一遍，并说明差距像不像碰巧
    function caseLine(S) {
      var b = S && S.byCase;
      if (!b) return '';
      var pv = b.p < 0.001 ? 'p<0.001' : 'p≈' + b.p;
      var verdict = b.p < 0.05 ? '这个差距不像是碰巧（符号检验 ' + pv + '）。' : '这个差距在噪声以内（符号检验 ' + pv + '）。';
      return '<p class="note">按情境算：带 Skill 的占优 ' + b.skill + ' 个，不带的占优 ' + b.baseline + ' 个，持平 ' + b.even + ' 个。' + verdict + '</p>';
    }
    function reasonList(rs, lead) {
      return rs.length ? '<b style="color:var(--ink)">' + lead + '</b><ul class="bullets" style="margin-top:.4rem">' + rs.map(function (r) {
        return '<li>' + esc(JUDGE[r.judge - 1] || '') + '选了<b style="color:var(--ink)">' + ({ skill: '带 Skill 的', baseline: '不带 Skill 的', tie: '差不多' }[r.winner]) + '</b>：' + esc(r.reason) + '</li>';
      }).join('') + '</ul>' : '';
    }
    function outCard(o, c) {
      var box = el('div', { class: 'stack', style: 'gap:.6rem' });
      if (!o) { box.appendChild(el('div', { class: 'callout', text: '这一遍没有这个情境的输出。' })); return box; }
      var ok = c.expect.send.indexOf(o.send) !== -1;
      box.appendChild(el('div', { class: 'note' }, '决定：<span class="tag ' + (ok ? 'chk-fetch' : 'chk-memory') + '">' + esc(SEND[o.send] || o.send) + '</span> ' +
        (ok ? '在预期之内' : '不在预期之内（预期：' + c.expect.send.map(function (x) { return SEND[x] || x; }).join(' 或 ') + '）')));
      if (o.title || o.body) {
        var m = { title: o.title, body: o.body, actions: o.actions || [] };
        var surface = c.surface === 'chat' ? 'chat' : 'lock';
        var noti = renderNoti(m, { surface: surface, showCut: true });
        noti.style.border = '1px solid var(--line)';
        box.appendChild(noti);
        var r = L.lint(m, { type: c.type, stakes: c.stakes, surface: surface, allowNin: c.address === '您' });
        box.appendChild(el('div', { class: 'note' }, '体检：<span class="vd v-' + r.verdict + '">' + r.verdictText + '</span> ' + r.counts.error + ' 处必改 · ' + r.counts.warn + ' 处建议 · 共 ' + r.metrics.chars + ' 字'));
        var hits = (c.expect.must_not || []).filter(function (w) { return (o.title + o.body + (o.actions || []).join('')).indexOf(w) !== -1; });
        if (hits.length) box.appendChild(el('div', { class: 'note', style: 'color:var(--dont)' }, '出现了这个情境里不该有的说法：' + hits.map(function (w) { return '「' + esc(w) + '」'; }).join('')));
      } else box.appendChild(el('div', { class: 'callout', text: '（这次不单独发消息）' }));
      if (o.note) box.appendChild(el('p', { class: 'why', text: '它给的理由：' + o.note }));
      return box;
    }
    function renderCase() {
      var R = E.rounds[st.r], c = R.cases[st.i];
      if (!c) return;
      info.innerHTML = '<b style="color:var(--ink)">用户的目标：</b>' + esc(c.goal || '') + '<br><b style="color:var(--ink)">发生了什么：</b>' + esc(c.event) +
        '　<b style="color:var(--ink)">此刻：</b>' + esc(c.now || '') + (c.last ? '　<b style="color:var(--ink)">用户上一句：</b>「' + esc(c.last) + '」' : '') +
        '　<b style="color:var(--ink)">预期：</b>' + c.expect.send.map(function (x) { return SEND[x] || x; }).join(' 或 ') +
        (c.held_out ? '　<span class="tag chk-fetch">改规范时没见过</span>' : '');
      bBox.innerHTML = ''; sBox.innerHTML = '';
      bBox.appendChild(outCard(c.outputs['baseline-' + st.run], c));
      sBox.appendChild(outCard(c.outputs['skill-' + st.run], c));
      var rs = (c.reasons || []).filter(function (r) { return String(r.run) === st.run; });
      var ls = ((c.lock && c.lock.reasons) || []).filter(function (r) { return String(r.run) === st.run; });
      votes.innerHTML = reasonList(rs, '三位评审怎么看这一对（看到的是完整文字）：') +
        (ls.length ? '<div style="margin-top:.9rem">' + reasonList(ls, '另外三位只看得到显示出来的部分（划掉的字他们看不到）：') + '</div>' : '');
    }
    function renderRound() {
      var R = E.rounds[st.r], total = count(R.tally);
      if (sum) {
        sum.innerHTML = '<figure class="bars"><figcaption>' + esc(R.label) + '：' + total + ' 次盲评里，评审选了哪一边</figcaption>' +
          split(R.tally, '合计') + groupRows(R, R) +
          (R.perJudge || []).map(function (j) { return split(j, JUDGE[j.judge - 1] || ('评审 ' + j.judge)); }).join('') +
          '<div class="split-legend"><span class="s">带 Skill</span><span class="t">差不多</span><span class="b">不带 Skill</span><span>右侧是「带 : 不带」的胜场比</span></div>' +
          caseLine(R) +
          (R.note ? '<p class="note">' + esc(R.note) + '</p>' : '') + '</figure>' +
          (R.lock ? '<figure class="bars" style="margin-top:1.2rem"><figcaption>同一批输出，换三位评审，只给他们看这个位置上显示得出来的部分：' + count(R.lock.tally) + ' 次盲评</figcaption>' +
            split(R.lock.tally, '合计') + groupRows(R.lock, R) +
            (R.lock.perJudge || []).map(function (j) { return split(j, JUDGE[j.judge - 1] || ('评审 ' + j.judge)); }).join('') +
            caseLine(R.lock) +
            '<p class="note">锁屏按标题 20、正文 50 个字宽截断，按钮不显示；对话按 24 和 120 截断。' +
            (R.lock.cut ? '两边各 ' + R.lock.cut.total + ' 条输出里，显示不全的：带 Skill ' + R.lock.cut.skill + ' 条，不带 Skill ' + R.lock.cut.baseline + ' 条。' : '') + '</p></figure>' : '');
      }
      if (ck && R.checks) {
        var cs = R.checks.skill, cb = R.checks.baseline;
        var row = function (name, b, s, hint) { return '<tr><th scope="row">' + name + (hint ? '<small>' + hint + '</small>' : '') + '</th><td class="num">' + b + '</td><td class="num">' + s + '</td></tr>'; };
        ck.innerHTML = '<div class="tbl"><table style="min-width:0"><thead><tr><th>代码判定的几项</th><th>不带 Skill</th><th>带 Skill</th></tr></thead><tbody>' +
          row('发不发在预期之内', cb.send_ok + ' / ' + cb.send_total, cs.send_ok + ' / ' + cs.send_total, '预期是出用例时写下的') +
          row('该出现的数字都在', cb.include_ok + ' / ' + cb.include_total, cs.include_ok + ' / ' + cs.include_total, '只看决定要发的') +
          row('出现了禁用说法', cb.must_not_hits + ' 条', cs.must_not_hits + ' 条', '如「全网」「温馨提示」、混用称呼') +
          row('体检有「必改」', cb.lint_error_msgs + ' / ' + cb.sent, cs.lint_error_msgs + ' / ' + cs.sent, '分母是发出的条数') +
          row('标题在字数预算内', cb.title_ok + ' / ' + cb.sent, cs.title_ok + ' / ' + cs.sent, '') +
          row('标题加正文的中位长度', cb.median_len + ' 字', cs.median_len + ' 字', '') +
          '</tbody></table></div>';
      }
      if (dims && E.dims) {
        var keys = Object.keys(E.dims), max = 1;
        keys.forEach(function (k) { max = Math.max(max, R.fails.baseline[k] || 0, R.fails.skill[k] || 0); });
        var bar = function (v, cls) { return '<div class="mini-bar ' + cls + '"><i style="width:' + ((v || 0) / max * 100).toFixed(1) + '%"></i><b class="num">' + (v || 0) + '</b></div>'; };
        dims.innerHTML = '<thead><tr><th>维度</th><th>评审问的是</th><th>不带 Skill 没过的次数</th><th>带 Skill 没过的次数</th></tr></thead><tbody>' +
          keys.map(function (k) {
            return '<tr><th scope="row">' + esc(k) + ' ' + esc(E.dims[k][0]) + '</th><td>' + esc(E.dims[k][1]) + '</td><td>' + bar(R.fails.baseline[k], 'b') + '</td><td>' + bar(R.fails.skill[k], 's') + '</td></tr>';
          }).join('') + '</tbody>' +
          '<tfoot><tr><td colspan="4" class="note">每个输出被三位评审各看一次，所以每边最多 ' + total + ' 次。评审可以对同一个输出标多个维度。</td></tr></tfoot>';
      }
      if (prose) prose.innerHTML = (R.findings || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
      if (sel) {
        sel.innerHTML = '';
        R.cases.forEach(function (c, i) {
          var v = c.votes || {};
          sel.appendChild(el('option', { value: String(i), text: c.id.split('-')[0] + ' · ' + c.about + '（' + (v.skill || 0) + ' : ' + (v.baseline || 0) + (c.held_out ? '，新用例' : '') + '）' }));
        });
        if (st.i >= R.cases.length) st.i = 0;
        sel.value = String(st.i);
      }
      renderCase();
    }
    segInit(roundSeg, function (v) { st.r = +v; renderRound(); });
    if (sel) sel.addEventListener('change', function () { st.i = +sel.value; renderCase(); });
    segInit(runSeg, function (v) { st.run = v; renderCase(); });
    renderRound();
  }

  /* ---------- 注意力账本计算器 ---------- */
  function initCalc() {
    var root = $('#calc'), out = $('#calcOut');
    if (!root || !out) return;
    var ids = ['calcMsgs', 'calcAsk', 'calcGlance', 'calcDecide', 'calcSwitch', 'calcMoney', 'calcTime'];
    function num(id) { var v = parseFloat($('#' + id).value); return isFinite(v) && v >= 0 ? v : 0; }
    function fmtMin(sec) { var m = sec / 60; return m >= 10 ? Math.round(m) + ' 分钟' : (Math.round(m * 10) / 10) + ' 分钟'; }
    function run() {
      var msgs = num('calcMsgs'), ask = Math.min(num('calcAsk'), msgs);
      var borrow = msgs * num('calcGlance') + ask * num('calcDecide') + msgs * num('calcSwitch');
      var money = num('calcMoney'), saved = num('calcTime') * 60;
      var net = saved - borrow;
      var per = msgs ? borrow / msgs : 0;
      var verdict = !msgs ? ['polish', '没发'] : (net >= 0 && (money > 0 || net > 0)) ? ['send', '借得值'] : (money > 0 ? ['revise', '只省了钱'] : ['block', '借多还少']);
      out.innerHTML = '<h5>一位用户，一周</h5>' +
        '<div class="row"><span>借走的注意力</span><b>' + fmtMin(borrow) + '</b></div>' +
        '<div class="row"><span>　其中每条平均</span><b>' + Math.round(per) + ' 秒</b></div>' +
        '<div class="row ' + (saved >= borrow ? 'good' : 'bad') + '"><span>还回的时间</span><b>' + fmtMin(saved) + '</b></div>' +
        '<div class="row ' + (money > 0 ? 'good' : '') + '"><span>还回的钱</span><b>¥' + (Math.round(money * 100) / 100) + '</b></div>' +
        '<div class="row total"><span>时间净值</span><b>' + (net >= 0 ? '多还 ' : '倒欠 ') + fmtMin(Math.abs(net)) + '</b></div>' +
        '<span class="stamp v-' + verdict[0] + '">' + verdict[1] + '</span>';
      var note = $('#calcNote');
      if (note) {
        var perMoney = borrow > 0 ? money / (borrow / 60) : 0;
        note.textContent = !msgs ? '一条都没发。只要目标还在推进，这本身不是问题。' :
          '每借 1 分钟，还回 ¥' + (Math.round(perMoney * 10) / 10) + ' 和 ' + (borrow > 0 ? Math.round(saved / borrow * 10) / 10 : 0) + ' 分钟。把「每周主动消息数」调高一倍，再看还得上不。';
      }
    }
    ids.forEach(function (id) { var f = $('#' + id); if (f) f.addEventListener('input', run); });
    run();
  }

  /* ---------- Skill 文件查看器 ---------- */
  function initFiles() {
    var root = $('#skillFiles');
    if (!root) return;
    var names = Object.keys(SK);
    if (!names.length) { root.hidden = true; return; }
    var order = function (n) { return (n.indexOf('SKILL.md') !== -1 ? '0' : n.indexOf('references/') !== -1 ? '1' : n.indexOf('assets/') !== -1 ? '2' : '3') + n; };
    names.sort(function (a, b) { return order(a) < order(b) ? -1 : 1; });
    var list = $('.files-list', root), bar = $('.files-bar .name', root), pre = $('pre.code', root);
    var lastDir = null, cur = names[0];
    names.forEach(function (n, i) {
      var parts = n.split('/'), dir = parts.slice(0, -1).join('/');
      if (dir !== lastDir) { list.appendChild(el('div', { class: 'dir', text: dir ? dir + '/' : '' })); lastDir = dir; }
      list.appendChild(el('button', { type: 'button', value: n, 'aria-pressed': i === 0 ? 'true' : 'false', text: parts[parts.length - 1] }));
    });
    function show(n) {
      cur = n;
      bar.textContent = n + ' · ' + (new Blob([SK[n]]).size / 1024).toFixed(1) + ' KB';
      pre.textContent = SK[n];
      pre.scrollTop = 0;
    }
    segInit(list, show);
    show(cur);
    $('#skillCopy').addEventListener('click', function () { copyText(SK[cur], '已复制 ' + cur.split('/').pop()); });
    $('#skillSave').addEventListener('click', function () { saveFile(cur.split('/').pop(), SK[cur]); });
    var zipBtn = $('#skillZip');
    if (zipBtn) zipBtn.addEventListener('click', function () {
      saveFile('pa-voice-zh-skill.zip', makeZip(names.map(function (n) { return { name: n, text: SK[n] }; })));
    });
    var all = $('#skillCopyAll');
    if (all) all.addEventListener('click', function () {
      var bundle = names.map(function (n) { return '===== ' + n + ' =====\n' + SK[n]; }).join('\n\n');
      copyText(bundle, '已复制整套 Skill（' + names.length + ' 个文件）');
    });
  }

  /* ---------- 现场改写（需要在 Claude 里打开） ---------- */
  function initLive() {
    var root = $('#live');
    if (!root) return;
    var off = $('#liveOff');
    capability('sample').then(function (sample) {
      if (!sample) { if (off) off.hidden = false; return; }
      $('#liveOn').hidden = false;
      var btn = $('#liveRun'), stop = $('#liveStop'), status = $('#liveStatus'), out = $('#liveOut'), ctl = null;
      var input = $('#liveInput');
      var liveTypeSel = $('#liveType');
      if (liveTypeSel && !liveTypeSel.options.length) Object.keys(L.TYPES).forEach(function (k) { liveTypeSel.appendChild(el('option', { value: k, text: L.TYPES[k].name })); });
      if (liveTypeSel) liveTypeSel.value = 'opportunity';
      btn.addEventListener('click', function () {
        var draft = input.value.trim();
        if (!draft) { status.textContent = '先贴一条要改的话术。'; return; }
        var o = { type: $('#liveType').value, stakes: $('#liveStakes').value, mood: $('#liveMood').value };
        var skill = (SK['pa-voice-zh/SKILL.md'] || '') + '\n\n' + (SK['pa-voice-zh/references/lexicon.md'] || '') + '\n\n' + (SK['pa-voice-zh/references/humor.md'] || '');
        var prompt = '下面是一份中文 Personal Agent 话术规范（Skill）。请严格按它改写一条主动消息。\n\n<skill>\n' + skill.slice(0, 60000) + '\n</skill>\n\n' +
          '<context>\n消息类型：' + (L.TYPES[o.type] || {}).name + '\n任务严肃度：' + o.stakes + '（low/mid/high）\n用户此刻状态：' + o.mood + '（rushed 赶时间 / neutral 平常 / relaxed 松弛）\n</context>\n\n' +
          '<draft>\n' + draft + '\n</draft>\n\n' +
          '只输出一个 JSON 对象，不要任何其他文字，格式：{"title": "标题，含价值锚点", "body": "一句边界条件", "actions": ["主动作", "退路"], "changes": ["改了什么、依据哪条规则，最多 4 条"], "missing": ["草稿里缺少、需要补充的事实；没有则为空数组"]}。' +
          '草稿里没有的事实（金额、时间、比较基准）不要编造，写进 missing。';
        ctl = new AbortController();
        btn.disabled = true; stop.hidden = false; status.textContent = '正在改写……（首次使用会先询问是否允许调用 Claude）'; out.innerHTML = '';
        sample.json(prompt, { signal: ctl.signal, cache: false }).then(function (res) {
          var m = { title: String(res.title || ''), body: String(res.body || ''), actions: (res.actions || []).map(String) };
          var r = L.lint(m, { type: o.type, stakes: o.stakes, surface: 'lock' });
          out.appendChild(renderNoti(m, { surface: 'lock', showCut: true }));
          out.lastChild.style.border = '1px solid var(--line)';
          out.appendChild(renderReceipt(r, Object.assign({}, L.DEFAULTS, { type: o.type })));
          if ((res.changes || []).length) out.appendChild(el('ul', { class: 'bullets note' }, res.changes.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('')));
          if ((res.missing || []).length) out.appendChild(el('div', { class: 'callout bound' }, '<b>草稿里缺的事实</b>' + res.missing.map(esc).join('；')));
          out.appendChild(renderFindings(r));
          status.textContent = '改写完成，下面是它自己再过一遍体检的结果。';
        }, function (e) {
          var code = e && e.code;
          status.textContent = code === 'cancelled' ? '已停止。' : code === 'not_granted' ? '没有获得调用 Claude 的许可，这个功能先收起。' :
            code === 'rate_limited' ? '调用太频繁了，过一会儿再试。' : code === 'invalid_json' ? '这次返回的格式不对，可以再试一次。' : '没有成功，可以稍后再试。';
          if (code === 'not_granted' || code === 'sampling_disabled') { $('#liveOn').hidden = true; if (off) off.hidden = false; }
        }).then(function () { btn.disabled = false; stop.hidden = true; });
      });
      stop.addEventListener('click', function () { if (ctl) ctl.abort(); });
    });
  }

  /* ---------- 规则卡：由 rules.json 渲染 ---------- */
  function initRules() {
    var R = D.rules || [];
    $$('[data-rules]').forEach(function (box) {
      var ch = box.getAttribute('data-rules');
      box.classList.add('rules');
      R.filter(function (r) { return r.ch === ch; }).forEach(function (r) {
        var evs = (r.ev || []).map(function (id) { return '<a class="ev" data-ev="' + esc(id) + '"></a>'; }).join('');
        var html = '<div class="rule-id">' + esc(r.id) + '</div><h4>' + esc(r.title) + '</h4>' +
          '<p class="rule-why">' + r.why + (evs ? ' ' + evs : '') + '</p>';
        if (r.say || r.nosay) {
          html += '<div class="dodont">' + (r.say ? '<div class="say">' + esc(r.say) + '</div>' : '') + (r.nosay ? '<div class="nosay">' + esc(r.nosay) + '</div>' : '') + '</div>';
        }
        box.appendChild(el('article', { class: 'rule', id: r.id }, html));
      });
    });
    $$('[data-rule-count]').forEach(function (n) { n.textContent = String(R.length); });
  }

  /* ---------- 统计数字、法规表、幽默表 ---------- */
  function initCounts() {
    var ev = D.evidence || [], by = { fetch: 0, local: 0, search: 0, memory: 0 };
    ev.forEach(function (e) { by[e.check] = (by[e.check] || 0) + 1; });
    var msgs = 0;
    (D.scenarios || []).forEach(function (s) { s.thread.forEach(function (t) { msgs += Object.keys(t.variants || { n: 1 }).length; }); });
    var stat = {
      evidence: ev.length, verified: by.fetch + by.local, search: by.search, memory: by.memory,
      lexicon: (D.lexicon || []).length, scenarios: (D.scenarios || []).length, messages: msgs,
      skillFiles: Object.keys(SK).length,
      evalRounds: ((D.eval || {}).rounds || []).length,
      evalCases: (function () { var r = ((D.eval || {}).rounds || []).slice(-1)[0]; return r ? r.n_cases : 0; })(),
      cited: (D.meta || {}).cited, citedVerified: (D.meta || {}).citedVerified, citedSearch: (D.meta || {}).citedSearch
    };
    $$('[data-stat]').forEach(function (n) { var k = n.getAttribute('data-stat'); if (stat[k] !== undefined && stat[k] !== 0) n.textContent = String(stat[k]); });
  }
  // data-if="eval"：对应的数据到位才显示；data-if-not 相反。让页面在数据不全时也只说真话
  function initConditional() {
    $$('[data-if]').forEach(function (n) { if (!D[n.getAttribute('data-if')]) n.hidden = true; });
    $$('[data-if-not]').forEach(function (n) { if (D[n.getAttribute('data-if-not')]) n.hidden = true; });
  }
  function initLegal() {
    var body = $('#legalBody');
    if (!body || !D.legal) return;
    body.innerHTML = D.legal.map(function (x) {
      return '<tr><td class="nosay-cell">' + esc(x.bad) + '</td><td>' + esc(x.law) + (x.ev || []).map(function (id) { return ' <a class="ev" data-ev="' + esc(id) + '"></a>'; }).join('') + '</td><td class="say-cell">' + esc(x.safe) + '</td></tr>';
    }).join('');
  }
  function initHumorTables() {
    var H = D.humor;
    if (!H) return;
    var caps = $('#humorCaps');
    if (caps && H.caps) {
      caps.innerHTML = '<thead><tr><th>节点</th>' + H.caps.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        H.caps.rows.map(function (r) {
          return '<tr><th scope="row">' + esc(r[0]) + '</th>' + r.slice(1).map(function (v) { return '<td><span class="hcap h' + esc(v.slice(1)) + '">' + esc(v) + '</span></td>'; }).join('') + '</tr>';
        }).join('') + '</tbody>';
    }
    function fill(id, items, cls) {
      var box = $(id);
      if (!box) return;
      box.innerHTML = items.map(function (x) {
        return '<div class="' + cls + '" data-label="' + esc(x.name) + '">' + esc(x.example) + '<em>' + esc(x.why) + '</em></div>';
      }).join('');
    }
    fill('#humorSafe', H.safe || [], 'say');
    fill('#humorRisky', H.risky || [], 'nosay');
  }

  /* ---------- 通用：复制按钮 ---------- */
  function initCopy() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-copy]');
      if (!b) return;
      var t = $(b.getAttribute('data-copy'));
      if (t) copyText(t.textContent, '已复制');
    });
  }

  /* ---------- 静态样本：把 <div data-noti='{"title":..}'> 渲染成通知卡 ---------- */
  function initStaticNoti() {
    $$('[data-noti]').forEach(function (box) {
      try {
        var m = JSON.parse(box.getAttribute('data-noti'));
        var n = renderNoti(m, { surface: box.getAttribute('data-surface') || 'chat', showCut: box.hasAttribute('data-cut'), when: m.when || '现在' });
        n.style.border = '1px solid var(--line)';
        box.appendChild(n);
      } catch (e) { /* 数据格式不对就跳过 */ }
    });
    $$('[data-phone]').forEach(function (box) {
      try {
        var m = JSON.parse(box.getAttribute('data-phone'));
        box.appendChild(renderPhone(m, { surface: box.getAttribute('data-surface') || 'lock', showCut: true }));
      } catch (e) { /* 同上 */ }
    });
  }

  function boot() {
    [initNav, initConditional, initCounts, initRules, initLegal, initHumorTables, initStaticNoti, initHero, initSurfaces, initLife, initTree, initLinter, initLexicon, initConsole, initHumor, initScenarios, initScenarioReview, initBaseCheck, initEval, initCalc, initFiles, initLedger, initEvidence, initLive, initCopy]
      .forEach(function (fn) { try { fn(); } catch (e) { if (window.console) console.error(fn.name, e); } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
