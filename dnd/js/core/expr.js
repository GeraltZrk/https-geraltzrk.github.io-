// Condition expressions used by story content, e.g.
//   "flag.met_corin && rep.empire >= 2 && class in ['wizard','sorcerer']"
// Parsed with a small hand-written parser (no eval), so content stays data.

const cache = new Map();

function tokenize(src) {
  const out = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (c === ' ' || c === '\t' || c === '\n' || c === '\r') { i++; continue; }
    if (c === "'" || c === '"') {
      let j = i + 1, s = '';
      while (j < n && src[j] !== c) { s += src[j]; j++; }
      if (j >= n) throw new Error(`unterminated string in "${src}"`);
      out.push({ t: 'str', v: s });
      i = j + 1;
      continue;
    }
    if (/[0-9]/.test(c)) {
      let j = i;
      while (j < n && /[0-9.]/.test(src[j])) j++;
      out.push({ t: 'num', v: parseFloat(src.slice(i, j)) });
      i = j;
      continue;
    }
    if (/[A-Za-z_一-鿿]/.test(c)) {
      let j = i;
      while (j < n && /[A-Za-z0-9_.一-鿿]/.test(src[j])) j++;
      const word = src.slice(i, j);
      if (word === 'true') out.push({ t: 'bool', v: true });
      else if (word === 'false') out.push({ t: 'bool', v: false });
      else if (word === 'in') out.push({ t: 'op', v: 'in' });
      else if (word === 'and') out.push({ t: 'op', v: '&&' });
      else if (word === 'or') out.push({ t: 'op', v: '||' });
      else if (word === 'not') out.push({ t: 'op', v: '!' });
      else out.push({ t: 'id', v: word });
      i = j;
      continue;
    }
    const two = src.slice(i, i + 2);
    if (['&&', '||', '==', '!=', '>=', '<='].includes(two)) { out.push({ t: 'op', v: two }); i += 2; continue; }
    if ('<>!()[],+-'.includes(c)) { out.push({ t: 'op', v: c }); i++; continue; }
    throw new Error(`unexpected character "${c}" in "${src}"`);
  }
  return out;
}

const BIN_PREC = { '||': 1, '&&': 2, '==': 3, '!=': 3, '<': 4, '>': 4, '<=': 4, '>=': 4, 'in': 4, '+': 5, '-': 5 };

function parse(src) {
  const toks = tokenize(src);
  let p = 0;
  const peek = () => toks[p];
  const next = () => toks[p++];
  const expectOp = (v) => {
    const t = next();
    if (!t || t.t !== 'op' || t.v !== v) throw new Error(`expected "${v}" in "${src}"`);
  };
  function primary() {
    const t = next();
    if (!t) throw new Error(`unexpected end of "${src}"`);
    if (t.t === 'num' || t.t === 'str' || t.t === 'bool') return { k: 'lit', v: t.v };
    if (t.t === 'id') return { k: 'id', v: t.v };
    if (t.t === 'op' && t.v === '(') { const e = expr(0); expectOp(')'); return e; }
    if (t.t === 'op' && t.v === '[') {
      const items = [];
      if (peek() && !(peek().t === 'op' && peek().v === ']')) {
        items.push(expr(0));
        while (peek() && peek().t === 'op' && peek().v === ',') { next(); items.push(expr(0)); }
      }
      expectOp(']');
      return { k: 'list', v: items };
    }
    if (t.t === 'op' && t.v === '!') return { k: 'not', v: unary() };
    if (t.t === 'op' && t.v === '-') return { k: 'neg', v: unary() };
    throw new Error(`unexpected token "${t.v}" in "${src}"`);
  }
  function unary() { return primary(); }
  function expr(minPrec) {
    let left = unary();
    for (;;) {
      const t = peek();
      if (!t || t.t !== 'op' || !(t.v in BIN_PREC)) break;
      const prec = BIN_PREC[t.v];
      if (prec < minPrec) break;
      next();
      const right = expr(prec + 1);
      left = { k: 'bin', op: t.v, l: left, r: right };
    }
    return left;
  }
  const ast = expr(0);
  if (p < toks.length) throw new Error(`trailing tokens in "${src}"`);
  return ast;
}

export function compile(src) {
  if (typeof src !== 'string') throw new Error('condition must be a string');
  let ast = cache.get(src);
  if (!ast) { ast = parse(src); cache.set(src, ast); }
  return ast;
}

function evalNode(n, get) {
  switch (n.k) {
    case 'lit': return n.v;
    case 'id': return get(n.v);
    case 'list': return n.v.map((x) => evalNode(x, get));
    case 'not': return !truthy(evalNode(n.v, get));
    case 'neg': return -num(evalNode(n.v, get));
    case 'bin': {
      if (n.op === '&&') return truthy(evalNode(n.l, get)) && truthy(evalNode(n.r, get));
      if (n.op === '||') return truthy(evalNode(n.l, get)) || truthy(evalNode(n.r, get));
      const a = evalNode(n.l, get), b = evalNode(n.r, get);
      switch (n.op) {
        case '==': return eq(a, b);
        case '!=': return !eq(a, b);
        case '<': return num(a) < num(b);
        case '>': return num(a) > num(b);
        case '<=': return num(a) <= num(b);
        case '>=': return num(a) >= num(b);
        case '+': return num(a) + num(b);
        case '-': return num(a) - num(b);
        case 'in': return Array.isArray(b) && b.some((x) => eq(a, x));
      }
    }
  }
  throw new Error('bad expression node');
}

function truthy(v) { return !(v === undefined || v === null || v === false || v === 0 || v === ''); }
function num(v) { if (v === true) return 1; if (v === undefined || v === null || v === false) return 0; const x = Number(v); return Number.isNaN(x) ? 0 : x; }
function eq(a, b) {
  if (typeof a === 'string' || typeof b === 'string') return String(a ?? '') === String(b ?? '');
  return num(a) === num(b);
}

/** Evaluate a condition string against a lookup function. Empty/undefined conditions are true. */
export function evaluate(src, get) {
  if (src === undefined || src === null || src === '' || src === true) return true;
  if (src === false) return false;
  return truthy(evalNode(compile(src), get));
}

/** Evaluate to a raw value (number/string) rather than a boolean. */
export function evaluateValue(src, get) {
  return evalNode(compile(src), get);
}

/** List identifiers referenced by a condition (used by the content validator). */
export function identifiers(src) {
  const ids = [];
  (function walk(n) {
    if (!n) return;
    if (n.k === 'id') ids.push(n.v);
    else if (n.k === 'list') n.v.forEach(walk);
    else if (n.k === 'not' || n.k === 'neg') walk(n.v);
    else if (n.k === 'bin') { walk(n.l); walk(n.r); }
  })(compile(src));
  return ids;
}
