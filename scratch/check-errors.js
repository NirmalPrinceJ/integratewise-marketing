const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Listen to console events
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] [${msg.type()}] ${msg.text()}`);
  });

  // Listen to page errors
  page.on('pageerror', err => {
    console.log(`[BROWSER ERROR] ${err.message}`);
  });

  // Navigate to the preview URL's request-access page
  console.log("Navigating to request-access page...");
  try {
    await page.goto('https://preview.integratewise-marketing.pages.dev/request-access', {
      waitUntil: 'networkidle',
      timeout: 15000
    });
    
    console.log("Page loaded. Inspecting iframe...");
    
    // Check if iframe exists and get its src
    const iframeSrc = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      return iframe ? iframe.src : 'No iframe found';
    });
    console.log(`Iframe Source: ${iframeSrc}`);

    // Wait 5 seconds to capture any lazy-loaded console errors
    await page.waitForTimeout(5000);
  } catch (e) {
    console.error(`Navigation failed or timed out: ${e.message}`);
  }

  await browser.close();
})();
