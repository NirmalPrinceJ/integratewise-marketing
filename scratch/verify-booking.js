const { chromium } = require('playwright');

async function main() {
  const url = 'https://embed-booking.integratewise-marketing.pages.dev/request-access';
  console.log(`Verifying embedded calendar at: ${url}...`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`[Console Error]: ${msg.text()}`);
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    console.error(`[Page Error]: ${err.message}`);
    consoleErrors.push(err.message);
  });

  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    console.log(`Page load status: ${response.status()}`);

    // Check if title is correct
    const title = await page.title();
    console.log(`Page title: "${title}"`);

    // Verify if iframe is present
    const iframeExists = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      return iframe !== null && iframe.src.includes('calendar.google.com');
    });

    console.log(`Calendar Iframe exists: ${iframeExists}`);

    if (!iframeExists) {
      throw new Error('Google Calendar iframe was not found on the page!');
    }

    // Take a screenshot to visually verify it
    const screenshotPath = 'scratch/screenshots/request-access-embedded.png';
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved to ${screenshotPath}`);

    if (consoleErrors.length > 0) {
      console.log(`⚠️ Page loaded but encountered ${consoleErrors.length} console errors.`);
    } else {
      console.log('🎉 Success! Embedded calendar page loaded and verified with no errors.');
    }

  } catch (err) {
    console.error('❌ Verification failed:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
