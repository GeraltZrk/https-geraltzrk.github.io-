#!/usr/bin/env node
// 在 Claude 里打开时才有的两项能力（请 Claude 改写、保存文件），用一个本地替身把代码路径走一遍。
// 用法：node tools/smoke_claude.js [index.html 的路径]
// 替身只验证「页面这边的代码」：传了什么、成功和失败时界面怎么变。真实的授权弹窗和模型回答要在 Claude 里试。
const { chromium } = require('playwright');
const path = require('path');

const file = path.resolve(process.argv[2] || path.join(__dirname, '..', 'index.html'));
const results = [];
const check = (name, pass, extra) => results.push({ name, pass: !!pass, extra: extra === undefined ? '' : String(extra) });

// 注入到页面里的替身。mode：sample = ok / deny / hang；save = ok / decline；null = 能力不可用
function stub(mode) {
  window.__calls = { sample: [], save: [] };
  window.__mode = mode;
  const sample = function () { return Promise.reject({ code: 'unsupported' }); };
  sample.json = function (prompt, opts) {
    window.__calls.sample.push({ bytes: new Blob([String(prompt)]).size, cache: opts && opts.cache, hasSignal: !!(opts && opts.signal) });
    if (window.__mode.sample === 'deny') return Promise.reject({ code: 'not_granted', message: 'declined' });
    if (window.__mode.sample === 'hang') {
      return new Promise((_, reject) => { opts.signal.addEventListener('abort', () => reject({ code: 'cancelled', message: 'aborted' })); });
    }
    return new Promise((resolve) => setTimeout(() => resolve({
      title: '直飞降到 ¥2,360', body: '比你的目标价低 ¥40。出票后 24 小时内可免费退。',
      actions: ['订这班', '再等等'], changes: ['去掉了开场白和「全网最低」'], missing: ['数据来源和查询时间'],
    }), 150));
  };
  const downloads = {
    save: function (req) {
      const d = req.data;
      window.__calls.save.push({ filename: req.filename, kind: typeof d === 'string' ? 'string' : (d && d.constructor && d.constructor.name), size: typeof d === 'string' ? d.length : (d && d.size) });
      if (window.__mode.save === 'decline') return Promise.reject({ code: 'declined', message: 'no' });
      return Promise.resolve({ status: 'saved' });
    },
  };
  window.claude = { use: function (name) { return Promise.resolve(window.__mode.null ? null : ({ sample, downloads })[name] || null); } };
}

async function open(browser, mode) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  await page.addInitScript(stub, mode);
  await page.goto('file://' + file);
  await page.waitForTimeout(600);
  return { ctx, page, errors };
}
const visible = (page, sel) => page.$eval(sel, (n) => !n.hidden && n.offsetParent !== null).catch(() => false);
const text = (page, sel) => page.$eval(sel, (n) => n.textContent.trim()).catch(() => null);
const calls = (page) => page.evaluate(() => window.__calls);

(async () => {
  const browser = await chromium.launch();

  // 1. 两项能力都可用
  let { ctx, page, errors } = await open(browser, { sample: 'ok', save: 'ok' });
  check('在 Claude 里：显示改写面板，收起「这里用不了」，隐藏自带的深浅色按钮',
    (await visible(page, '#liveOn')) && !(await visible(page, '#liveOff')) && !(await visible(page, '#themeToggle')));
  check('改写：消息类型下拉已填好', (await page.$$eval('#liveType option', (o) => o.length)) === 14);
  await page.click('#liveRun');
  await page.waitForSelector('#liveOut .receipt', { timeout: 5000 });
  let c = await calls(page);
  check('改写：只调用一次，带了取消信号、关掉了缓存，提示词在 256 KiB 以内',
    c.sample.length === 1 && c.sample[0].hasSignal && c.sample[0].cache === false && c.sample[0].bytes < 256 * 1024, c.sample[0] && c.sample[0].bytes + ' 字节');
  check('改写：结果渲染成通知卡、账单和「缺的事实」，按钮恢复可点',
    (await page.$$eval('#liveOut .noti', (n) => n.length)) === 1 && (await text(page, '#liveOut .callout')).includes('数据来源') &&
    !(await page.$eval('#liveRun', (b) => b.disabled)) && !(await visible(page, '#liveStop')), await text(page, '#liveStatus'));
  await page.fill('#liveInput', '');
  await page.click('#liveRun');
  check('改写：没填草稿时不调用', (await calls(page)).sample.length === 1, await text(page, '#liveStatus'));

  await page.click('#skillZip');
  await page.waitForTimeout(200);
  await page.click('#skillSave');
  await page.waitForTimeout(100);
  await page.click('#skillFiles .files-list button:last-child');
  await page.click('#skillSave');
  await page.waitForTimeout(100);
  await page.click('#scnExport');
  await page.waitForTimeout(100);
  await page.click('#ledgerSave');
  await page.waitForTimeout(200);
  c = await calls(page);
  const names = c.save.map((s) => s.filename);
  check('保存：整套 Skill 是一个 zip（Blob）', c.save[0] && c.save[0].filename === 'pa-voice-zh-skill.zip' && c.save[0].kind === 'Blob' && c.save[0].size > 100000, c.save[0] && c.save[0].size + ' 字节');
  check('保存：脚本类文件名补了 .txt，其余原样', names[1] === 'SKILL.md' && /\.(mjs|cjs)\.txt$/.test(names[2]), names.slice(1, 3).join(', '));
  check('保存：场景话术和证据台账存成 json', names[3] === 'pa-voice-scenarios.json' && names[4] === 'pa-voice-evidence.json', names.slice(3).join(', '));
  check('两项能力可用时控制台没有报错', errors.length === 0, errors.slice(0, 2).join(' | '));
  await ctx.close();

  // 2. 用户拒绝
  ({ ctx, page, errors } = await open(browser, { sample: 'deny', save: 'decline' }));
  await page.click('#liveRun');
  await page.waitForTimeout(300);
  check('拒绝授权后：收起改写面板，换成说明', !(await visible(page, '#liveOn')) && (await visible(page, '#liveOff')), await text(page, '#liveStatus'));
  await page.click('#skillZip');
  await page.waitForTimeout(300);
  check('拒绝保存后：不重试，也不弹错误', (await calls(page)).save.length === 1 && !(await visible(page, '#toast')));
  check('拒绝时控制台没有报错', errors.length === 0, errors.slice(0, 2).join(' | '));
  await ctx.close();

  // 3. 中途停止
  ({ ctx, page, errors } = await open(browser, { sample: 'hang', save: 'ok' }));
  await page.click('#liveRun');
  await page.waitForTimeout(150);
  const stopShown = await visible(page, '#liveStop');
  await page.click('#liveStop');
  await page.waitForTimeout(200);
  check('停止：进行中能看到「停止」，点了之后状态复位', stopShown && (await text(page, '#liveStatus')) === '已停止。' && !(await page.$eval('#liveRun', (b) => b.disabled)));
  await ctx.close();

  // 4. 在 Claude 里但能力不可用
  ({ ctx, page, errors } = await open(browser, { null: true }));
  check('能力不可用：显示说明，不显示改写面板', (await visible(page, '#liveOff')) && !(await visible(page, '#liveOn')));
  await page.click('#skillZip');
  await page.waitForTimeout(300);
  check('能力不可用：点下载给出提示，不报错', (await text(page, '#toast')) !== null && errors.length === 0, await text(page, '#toast'));
  await ctx.close();

  await browser.close();
  const bad = results.filter((r) => !r.pass);
  for (const r of results) console.log((r.pass ? '  通过 ' : '  失败 ') + r.name + (r.extra ? '  ·  ' + r.extra : ''));
  console.log(`\n${results.length} 项检查，${bad.length} 项失败`);
  process.exit(bad.length ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
