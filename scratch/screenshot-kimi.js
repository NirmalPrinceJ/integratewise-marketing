const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://oksaldpojstje.kimi.page', { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 1440, height: 2000 });
  await page.screenshot({ path: 'scratch/screenshot-kimi.png', fullPage: true });
  await browser.close();
})();
