// Browser smoke test: drives a new game through the UI and saves screenshots.
// Usage: node tools/e2e-smoke.mjs [baseUrl] [outDir] [campaign index 0-2] [steps]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium, devices } = require('playwright');
import fs from 'node:fs';

const base = process.argv[2] || 'http://localhost:8765/';
const out = process.argv[3] || '/tmp/anb-shots';
const WHICH = parseInt(process.argv[4] || '0', 10);   // which campaign card to pick (0, 1, 2)
const STEPS = parseInt(process.argv[5] || '40', 10);  // how many steps to walk
fs.mkdirSync(out, { recursive: true });

async function run(name, contextOpts) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext(contextOpts);
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  const shot = (n) => page.screenshot({ path: `${out}/${name}-${n}.png` });
  await page.goto(base);
  await page.waitForSelector('.title-menu');
  await shot('01-title');
  await page.click('text=新的战役');
  await page.waitForSelector('.cards .card');
  await shot('02-scenario');
  await page.locator('.cards .card').nth(WHICH).click();
  await page.waitForSelector('.steps span.on:has-text("国家")');
  await shot('03-origin');
  await page.locator('.cards .card').first().click();
  await page.waitForTimeout(150);
  if (await page.locator('.steps span.on:has-text("阵营")').count()) { await shot('04-faction'); await page.locator('.cards .card').first().click(); }
  await page.waitForSelector('.steps span.on:has-text("人物")');
  await shot('05-character');
  // custom builder
  await page.click('text=自己捏一个');
  await page.waitForSelector('.pick-list');
  const panels = page.locator('.frame.panel');
  await panels.nth(0).locator('.pick').first().click();
  await panels.nth(1).locator('.pick').first().click();
  await panels.nth(2).locator('.pick').first().click();
  const sk = page.locator('.frame.panel:has(h3:has-text("技能熟练")) .pick:not([disabled])');
  await sk.nth(0).click();
  await page.locator('.frame.panel:has(h3:has-text("技能熟练")) .pick:not([disabled]):not(.sel)').first().click();
  await page.click('text=随机');
  await shot('06-custom');
  await page.locator('.sticky-foot .btn').click();
  await page.waitForSelector('text=开始冒险');
  await shot('07-confirm');
  await page.click('text=开始冒险');
  await page.waitForSelector('.event');
  await shot('08-scene');
  // panels
  const openNav = async (label) => {
    const side = page.locator('.side-btns .btn', { hasText: label });
    if (await side.count() && await side.first().isVisible()) await side.first().click();
    else await page.locator('.bottom-nav button', { hasText: label }).click();
  };
  await openNav('角色'); await page.waitForSelector('.modal-box'); await shot('09-sheet');
  for (const t of ['背包', '队伍', '任务', '图鉴', '局势', '记录']) { await page.locator('.modal-box .tabs button', { hasText: t }).evaluate((e) => e.click()); await page.waitForTimeout(60); }
  await shot('10-panel-log');
  await page.locator('.modal-head .icon-btn').click();
  await openNav('作弊'); await page.waitForSelector('.modal-box'); await shot('11-cheats');
  for (const t of ['开关', '角色', '物品', '世界', '队伍', '剧情']) { await page.locator('.modal-box .tabs button', { hasText: t }).evaluate((e) => e.click()); await page.waitForTimeout(60); }
  await shot('12-cheats-story');
  await page.locator('.modal-head .icon-btn').click();
  await openNav('系统'); await page.waitForSelector('.modal-box');
  for (const t of ['存档', '读档', '设置', '关于']) { await page.locator('.modal-box .tabs button', { hasText: t }).evaluate((e) => e.click()); await page.waitForTimeout(60); }
  await shot('13-system');
  await page.locator('.modal-head .icon-btn').click();
  // play: walk forward through whatever comes up (text, choices, rolls, fights, level-ups) for a number of steps
  let steps = 0, fights = 0, shots = { roll: false, combat: false, level: false, result: false };
  const levelUp = async () => {
    const lv = page.locator('.modal-box .btn.primary', { hasText: '确认升级' });
    if (!(await lv.count())) return false;
    const sub = page.locator('.modal-box .pick-list .pick');
    if (await sub.count() && !(await page.locator('.modal-box .pick-list .pick.sel').count())) { await sub.first().click(); await page.waitForTimeout(60); }
    for (let k = 0; k < 2; k++) { const plus = page.locator('.modal-box .abil .pm button:not([disabled])', { hasText: '+' }); if (await plus.count()) { await plus.first().click(); await page.waitForTimeout(40); } }
    if (!shots.level) { shots.level = true; await shot('19-levelup'); }
    await lv.click(); await page.waitForTimeout(100);
    return true;
  };
  for (; steps < STEPS; steps++) {
    if (await page.locator('.ending-head').count()) break;
    if (await levelUp()) continue;
    if (await page.locator('.modal-box').count()) { const x = page.locator('.modal-head .icon-btn'); if (await x.count()) { await x.first().click(); await page.waitForTimeout(60); continue; } }
    if (await page.locator('.combat').count()) {
      if (!shots.combat) { shots.combat = true; await shot('16-combat'); }
      fights++;
      for (let turn = 0; turn < 80; turn++) {
        if (await page.locator('.combat .continue-row .btn').count()) break;
        if (!(await page.locator('.combat').count())) break;
        const atk = page.locator('.actions .btn', { hasText: '攻击' }).first();
        if (await atk.count() && await atk.isEnabled()) { await atk.click(); await page.waitForTimeout(40); const tg = page.locator('.unit.target'); if (await tg.count()) await tg.first().click(); }
        else { const end = page.locator('.actions .btn', { hasText: '结束回合' }); if (await end.count()) await end.click(); }
        await page.waitForTimeout(40);
      }
      const done = page.locator('.combat .continue-row .btn');
      if (await done.count()) await done.first().click();
      await page.waitForTimeout(120);
      continue;
    }
    const up = page.locator('.event-body .btn', { hasText: '升级' });
    if (await up.count()) { await up.first().click(); await page.waitForTimeout(100); continue; }
    if (await page.locator('.rollbox').count() && !shots.roll) { shots.roll = true; await shot('15-roll'); }
    const cont = page.locator('.continue-row .btn');
    if (await cont.count()) { if (!shots.result) { shots.result = true; await shot('14-result'); } await cont.first().click(); await page.waitForTimeout(100); continue; }
    const opts = page.locator('.options .opt:not([disabled])');
    const n = await opts.count();
    if (n) { await opts.nth(steps % n).click(); await page.waitForTimeout(100); continue; }
    await page.waitForTimeout(150);
  }
  await shot('18-after');
  // godhood: switch it on from the cheat menu and make sure the scene still renders
  await openNav('作弊'); await page.waitForSelector('.modal-box');
  const asc = page.locator('.modal-box .btn', { hasText: '升格为神' });
  if (await asc.count()) { await asc.first().click(); await page.waitForTimeout(120); }
  await shot('21-ascended');
  if (await page.locator('.modal-head .icon-btn').count()) await page.locator('.modal-head .icon-btn').first().click();
  await page.waitForTimeout(100);
  console.log(`${name}: scenario ${WHICH}, ${steps} steps, ${fights} fight(s)`);
  await shot('20-end');
  await browser.close();
  return errors;
}

const results = {};
results.desktop = await run('desktop', { viewport: { width: 1366, height: 860 }, deviceScaleFactor: 1 });
results.mobile = await run('mobile', { ...devices['iPhone 13'] });
console.log(JSON.stringify(results, null, 1));
if (results.desktop.length || results.mobile.length) process.exitCode = 1;
