const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://be511c81.integratewise-marketing.pages.dev/', { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 1440, height: 2000 });

  // Click Digital Twin
  await page.click('text=Digital Twin');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot-twin.png', fullPage: true });

  // Click Governance
  await page.click('text=Governance');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot-gov.png', fullPage: true });

  await browser.close();
})();
