const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const targetUrl = process.argv[2] || 'http://localhost:3000';
  console.log(`Navigating to target URL: ${targetUrl}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Hide the sticky CTA banner using a persistent global style rule
    await page.addStyleTag({ content: '.fixed { display: none !important; }' });

    // Ensure the page has fully loaded
    await page.waitForSelector('.twin-section');
    await page.waitForSelector('.surfaces-section');

    // Screenshot of twin section
    const twinSection = await page.$('.twin-section');
    if (twinSection) {
      await twinSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await twinSection.screenshot({ path: 'scratch/screenshots/twin-section-after.png' });
      console.log('Saved twin-section-after.png');
    }

    const surfacesSection = await page.$('.surfaces-section');
    if (surfacesSection) {
      await surfacesSection.scrollIntoViewIfNeeded();

      // Click "Your Data" tab and take screenshot
      const yourDataTab = await page.$('button:has-text("Your Data")');
      if (yourDataTab) {
        await yourDataTab.click();
        await page.waitForTimeout(500);
      }
      await surfacesSection.screenshot({ path: 'scratch/screenshots/surfaces-data-after.png' });
      console.log('Saved surfaces-data-after.png');

      // Click "Digital Twin" tab and take screenshot
      const twinTab = await page.$('button:has-text("Digital Twin")');
      if (twinTab) {
        await twinTab.click();
        await page.waitForTimeout(500);
      }
      await surfacesSection.screenshot({ path: 'scratch/screenshots/surfaces-twin-after.png' });
      console.log('Saved surfaces-twin-after.png');

      // Click "Governance" tab and take screenshot
      const govTab = await page.$('button:has-text("Governance")');
      if (govTab) {
        await govTab.click();
        await page.waitForTimeout(500);
      }
      await surfacesSection.screenshot({ path: 'scratch/screenshots/surfaces-gov-after.png' });
      console.log('Saved surfaces-gov-after.png');
    }

  } catch (error) {
    console.error('Error during screenshot capture:', error);
  } finally {
    await browser.close();
  }
})();
