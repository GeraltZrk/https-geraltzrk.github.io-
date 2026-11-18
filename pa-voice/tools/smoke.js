#!/usr/bin/env node
// 把页面上的每个交互点一遍，检查有没有报错、有没有横向溢出、链接和角标有没有悬空。
// 用法：node tools/smoke.js [index.html 的路径]        需要本机有 playwright 和 Chromium
const { chromium } = require('playwright');
const path = require('path');

const file = path.resolve(process.argv[2] || path.join(__dirname, '..', 'index.html'));
const results = [];
const check = (name, pass, extra) => results.push({ name, pass: !!pass, extra: extra === undefined ? '' : String(extra) });

async function suite(browser, width, scheme, full) {
  const tag = `[${width}px ${scheme}] `;
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: scheme });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  await page.goto('file://' + file);
  await page.waitForTimeout(700);
  const T = (sel) => page.$eval(sel, (n) => n.textContent.trim()).catch(() => null);
  const N = (sel) => page.$$eval(sel, (ns) => ns.length);
  const overflow = async (label) => {
    const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    check(tag + '没有横向溢出' + (label ? '（' + label + '）' : ''), o.sw <= o.cw, `${o.sw} / ${o.cw}`);
  };

  await overflow('初始');

  // 链接、角标、占位数字
  const dangling = await page.evaluate(() => Array.from(document.querySelectorAll('a[href^="#"]'))
    .map((a) => a.getAttribute('href').slice(1)).filter((id) => id && !/^T\d/.test(id) && !document.getElementById(id)));
  check(tag + '页内链接都有落点', dangling.length === 0, [...new Set(dangling)].join(','));
  const ev = await page.evaluate(() => { const a = Array.from(document.querySelectorAll('.ev[data-ev]')); return { n: a.length, missing: a.filter((x) => x.hidden).map((x) => x.getAttribute('data-ev')) }; });
  check(tag + '证据角标都能在台账里找到', ev.n > 100 && ev.missing.length === 0, `${ev.n} 个角标，缺 ${[...new Set(ev.missing)].join(',') || 0}`);
  const stats = await page.$$eval('[data-stat], [data-rule-count]', (ns) => ns.map((n) => n.textContent.trim()));
  check(tag + '统计数字都已填上', stats.length > 0 && stats.every((s) => /^\d+$/.test(s)), stats.join(' '));
  const d = await page.evaluate(() => ({ rules: window.PA_DATA.rules.length, cards: document.querySelectorAll('article.rule').length,
    scenarios: (window.PA_DATA.scenarios || []).length, hasEval: !!window.PA_DATA.eval, hasReview: !!window.PA_DATA.review, skill: Object.keys(window.PA_SKILL).length }));
  check(tag + '规则卡数量与规则表一致', d.rules === d.cards, `${d.cards} / ${d.rules}`);

  if (full) {
    // 开篇样本
    const s1 = await T('#heroSpecimen .stamp');
    await page.click('#heroSeg button[value="before"]');
    const s2 = await T('#heroSpecimen .stamp');
    check(tag + '开篇：切换两种写法，结论会变', s1 && s2 && s1 !== s2, `${s1} → ${s2}`);
    await page.click('#heroSeg button[value="after"]');

    // 体检器
    await page.fill('#lintTitle', '温馨提示：您好');
    await page.fill('#lintBody', '全网最低价，手慢无！请问需要我帮您预订吗？');
    const f1 = await N('#lintOut .finding');
    check(tag + '体检器：坏话术能查出问题', f1 >= 4, f1 + ' 条');
    check(tag + '体检器：出现「别发」', (await T('#lintOut .stamp')) === '别发', await T('#lintOut .stamp'));
    const presets = await N('#lintPresets button');
    for (let i = 0; i < presets; i++) await page.click(`#lintPresets button:nth-child(${i + 1})`);
    check(tag + '体检器：预设都能载入', presets >= 6 && !!(await T('#lintOut .stamp')), presets + ' 个');
    for (const v of await page.$$eval('#lintSurface option', (os) => os.map((o) => o.value))) await page.selectOption('#lintSurface', v);
    check(tag + '体检器：切换容器不报错', true);

    // 容器演示
    const surfaces = await N('#surfaceSeg button');
    let okS = surfaces >= 5;
    for (let i = 0; i < surfaces; i++) { await page.click(`#surfaceSeg button:nth-child(${i + 1})`); okS = okS && (await N('#surfaceView > *')) > 0 && /\d/.test(await T('#surfaceInfo')); }
    check(tag + '容器演示：每个容器都能渲染', okS, surfaces + ' 个');

    // 目标的一生
    const nodes = await page.$$('#lifeNodes .life-node');
    let okL = nodes.length === 14;
    for (const n of nodes) { await n.click(); const name = await n.$eval('b', (b) => b.textContent); okL = okL && (await T('#lifeDetail h4')).includes(name); }
    check(tag + '目标的一生：14 个状态都能点开', okL, nodes.length);

    // 决策树：每个问题的每个选项
    const steps = await page.$$('#treeSteps .tree-step');
    let okT = steps.length >= 6, outs = new Set();
    for (const st of steps) for (const b of await st.$$('.seg button')) { await b.click(); const h = await T('#treeOut h4'); okT = okT && !!h; outs.add(h); }
    check(tag + '决策树：任何组合都有结论', okT, `${steps.length} 个问题，出现过 ${outs.size} 种结论`);

    // 词表
    const all = await N('#lexBody tr');
    await page.fill('#lexQ', '您');
    const some = await N('#lexBody tr');
    await page.fill('#lexQ', '');
    const cats = await N('#lexCats button');
    await page.click('#lexCats button:nth-child(2)');
    const cat = await N('#lexBody tr');
    await page.click('#lexCats button:nth-child(1)');
    check(tag + '词表：检索和分类都生效', all > 40 && some > 0 && some < all && cat > 0 && cat < all, `全部 ${all}，搜「您」${some}，第一类 ${cat}，${cats - 1} 类`);

    // 语气调音台
    let okC = true, codes = new Set();
    for (const seg of await page.$$('#toneControls .seg')) for (const b of await seg.$$('button')) {
      await b.click();
      const c = await T('#toneCode'); codes.add(c);
      okC = okC && /^F\d W\d H\d V\d A\d C\d E\d$/.test(c) && (await N('#toneSample .noti')) === 1;
    }
    check(tag + '调音台：每个选项都给出档位和示例', okC, codes.size + ' 种档位组合');

    // 幽默阶梯与自检
    const lad = await N('#humorLadder button');
    let okH = lad === 5;
    for (let i = 0; i < lad; i++) { await page.click(`#humorLadder button:nth-child(${i + 1})`); okH = okH && (await T('#humorDetail h4')).startsWith('H' + i); }
    for (const c of await page.$$('#jokeChecks input')) await c.check();
    check(tag + '幽默阶梯：五级都能看，自检全勾为「可以开」', okH && (await T('#jokeVerdict .stamp')) === '可以开', await T('#jokeVerdict .stamp'));

    // 场景话术库
    if (d.scenarios) {
      const list = await N('#scnList button');
      let okSc = list === d.scenarios, msgs = 0;
      for (let i = 0; i < list; i++) {
        await page.click(`#scnList button:nth-child(${i + 1})`);
        for (const m of ['rushed', 'relaxed', 'neutral']) { await page.click(`#scnMood button[value="${m}"]`); const n = await N('#scnThread .thread-item .noti'); okSc = okSc && n >= 4; msgs += n; }
      }
      await page.click('#scnView button[value="diff"]');
      const items = await N('#scnThread .thread-item'), cards = await N('#scnThread .scn-diff .noti');
      okSc = okSc && cards === items * 3;
      await page.click('#scnView button[value="one"]');
      await overflow('场景库');
      const title = await T('#scnThread .thread-item .noti-title');
      await page.click('#scnThread .scn-lint');
      const inLinter = await page.inputValue('#lintTitle');
      check(tag + '场景库：每个场景、每种状态都有话术；并排视图是三倍；能送进体检器', okSc && title === inLinter, `${list} 个场景，点过 ${msgs} 条`);
    } else check(tag + '场景库：没有数据时整块隐藏', await page.$eval('#scenarios .tool', (n) => n.hidden));

    // 基础稿自测
    const chips = await N('#baseChips button');
    let okB = chips === 6;
    for (let i = 0; i < chips; i++) { await page.click(`#baseChips button:nth-child(${i + 1})`); okB = okB && (await N('#baseBefore .noti')) === 1 && (await N('#baseAfter .receipt')) === 1; }
    check(tag + '基础稿自测：六条都能对照', okB && (await N('#baseTable tbody tr')) === 6);

    // Skill 文件
    const files = await page.$$('#skillFiles .files-list button');
    let okF = files.length === d.skill;
    for (const b of files) { await b.click(); const nm = await b.textContent(); okF = okF && (await T('#skillFiles .files-bar .name')).includes(nm) && (await page.$eval('#skillFiles pre.code', (p) => p.textContent.length)) > 50; }
    check(tag + 'Skill 文件：每个都能打开', okF, files.length + ' 个');

    // 评测
    if (d.hasEval) {
      const opts = await page.$$eval('#evalCase option', (os) => os.map((o) => o.value));
      let okE = opts.length >= 10;
      for (const v of opts) { await page.selectOption('#evalCase', v); for (const r of ['2', '1']) { await page.click(`#evalRun button[value="${r}"]`); okE = okE && (await N('#evalBase > *')) === 1 && (await N('#evalSkill > *')) === 1; } }
      check(tag + '评测：每个情境两遍都能对照', okE && (await N('#evalDims tbody tr')) === 7 && (await N('#evalSummary .split-row')) >= 2, opts.length + ' 个情境');
    }

    // 注意力账本
    await page.fill('#calcMsgs', '0');
    const v0 = await T('#calcOut .stamp');
    await page.fill('#calcMsgs', '80');
    const v1 = await T('#calcOut .stamp');
    await page.fill('#calcMsgs', '6');
    check(tag + '注意力账本：改数字，结论会变', v0 === '没发' && v1 && v1 !== v0 && (await T('#calcOut .stamp')) === '借得值', `${v0} / ${v1}`);

    // 证据台账
    const total = await page.evaluate(() => window.PA_DATA.evidence.length);
    const rows0 = await N('#ledgerList .ledger-row');
    await page.fill('#ledgerQ', '续费');
    const rowsQ = await N('#ledgerList .ledger-row');
    await page.fill('#ledgerQ', '');
    await page.click('#ledgerCheck button[value="memory"]');
    const rowsM = await N('#ledgerList .ledger-row');
    await page.click('#ledgerCheck button[value="all"]');
    await page.click('#ledgerMore');
    const rows1 = await N('#ledgerList .ledger-row');
    check(tag + '台账：分页、检索、按核对程度筛选', rows0 === 60 && rowsQ > 0 && rowsQ < 60 && rowsM > 0 && rows1 === 120, `共 ${total}；首屏 ${rows0}；搜「续费」${rowsQ}；未核 ${rowsM}；再显示后 ${rows1}`);
    const chip = await page.$('#verdicts .ev[data-ev]');
    const id = await chip.getAttribute('data-ev');
    await chip.click();
    const pop = await N('.pop');
    await page.click('.pop [data-ledger-jump]');
    await page.waitForTimeout(200);
    check(tag + '角标：点开有来源卡片，能跳到台账对应的一行', pop === 1 && (await N(`#${id}.ledger-row.flash`)) === 1, id);

    // 深浅色切换（独立网页）
    const before = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    await page.evaluate(() => document.getElementById('themeToggle').click());
    const after = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    check(tag + '深浅色可以切换', before !== after && ['light', 'dark'].includes(after), `${before} → ${after}`);
  }

  await overflow('操作之后');
  check(tag + '控制台没有报错', errors.length === 0, errors.slice(0, 3).join(' | '));
  await ctx.close();
}

(async () => {
  const browser = await chromium.launch();
  await suite(browser, 1280, 'light', true);
  await suite(browser, 390, 'light', true);
  await suite(browser, 820, 'dark', false);
  await browser.close();
  const bad = results.filter((r) => !r.pass);
  for (const r of results) console.log((r.pass ? '  通过 ' : '  失败 ') + r.name + (r.extra ? '  ·  ' + r.extra : ''));
  console.log(`\n${results.length} 项检查，${bad.length} 项失败`);
  process.exit(bad.length ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
