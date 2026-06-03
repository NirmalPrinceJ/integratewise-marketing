/**
 * Visual Review Script — captures screenshots and console errors for all pages
 * Requires: npx playwright install chromium (one-time setup)
 * Run: npx playwright test scratch/visual-review.js --config=scratch/playwright.config.js
 *   OR: node scratch/visual-review.js (uses direct Playwright API)
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE = 'https://google-analytics.integratewise-marketing.pages.dev';
const DIR = path.join(process.cwd(), 'scratch', 'screenshots');

const routes = [
  { path: '/', name: 'home' },
  { path: '/platform', name: 'platform' },
  { path: '/features', name: 'features' },
  { path: '/workbench', name: 'workbench' },
  { path: '/solutions', name: 'solutions' },
  { path: '/twin', name: 'twin' },
  { path: '/governance', name: 'governance' },
  { path: '/architecture', name: 'architecture' },
  { path: '/pricing', name: 'pricing' },
  { path: '/about', name: 'about' },
  { path: '/case-study', name: 'case-study' },
  { path: '/integrations', name: 'integrations' },
  { path: '/resources', name: 'resources' },
  { path: '/faq', name: 'faq' },
  { path: '/terms', name: 'terms' },
  { path: '/privacy', name: 'privacy' },
  { path: '/request-access', name: 'request-access' },
];

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

async function main() {
  const browser = await chromium.launch({ headless: true });

  // Desktop viewport
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  // Mobile viewport
  const mobile = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });

  const report = [];

  for (const route of routes) {
    const page = await desktop.newPage();
    const errors = [];
    const warnings = [];

    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
      if (msg.type() === 'warning') warnings.push(msg.text());
    });

    try {
      await page.goto(`${BASE}${route.path}`, { waitUntil: 'networkidle', timeout: 15000 });

      // Check if React rendered
      const rendered = await page.evaluate(() => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      });

      const title = await page.title();

      // Check for broken images
      const brokenImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).filter(
          img => !img.complete || img.naturalWidth === 0
        ).map(img => img.src);
      });

      // Full page screenshot
      await page.screenshot({
        path: path.join(DIR, `${route.name}-desktop.png`),
        fullPage: true,
      });

      report.push({
        route: route.path,
        name: route.name,
        title,
        rendered,
        errors,
        warnings: warnings.length,
        brokenImages,
        status: rendered && errors.length === 0 && brokenImages.length === 0 ? '✅' : '❌'
      });

      console.log(`${rendered && errors.length === 0 ? '✅' : '❌'} ${route.path} — Title: "${title}" | Rendered: ${rendered} | Errors: ${errors.length} | Broken imgs: ${brokenImages.length}`);

    } catch (err) {
      report.push({
        route: route.path, name: route.name, title: 'FAILED',
        rendered: false, errors: [err.message], warnings: 0, brokenImages: [], status: '❌'
      });
      console.log(`❌ ${route.path} — FAILED: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // Mobile screenshots for key pages
  console.log('\n--- Mobile Screenshots ---');
  for (const route of [routes[0], routes[8], routes[16]]) { // home, pricing, request-access
    const page = await mobile.newPage();
    try {
      await page.goto(`${BASE}${route.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      await page.screenshot({
        path: path.join(DIR, `${route.name}-mobile.png`),
        fullPage: true,
      });
      console.log(`📱 ${route.path} — mobile screenshot saved`);
    } catch (err) {
      console.log(`📱 ${route.path} — mobile FAILED: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  // Print summary
  console.log('\n=================== VISUAL REVIEW REPORT ===================');
  const passed = report.filter(r => r.status === '✅').length;
  const failed = report.filter(r => r.status === '❌').length;
  console.log(`Passed: ${passed}/${report.length} | Failed: ${failed}/${report.length}`);

  for (const r of report) {
    if (r.errors.length > 0) {
      console.log(`\n⚠️ ${r.route} errors:`);
      r.errors.forEach(e => console.log(`   ${e}`));
    }
    if (r.brokenImages.length > 0) {
      console.log(`\n🖼️ ${r.route} broken images:`);
      r.brokenImages.forEach(img => console.log(`   ${img}`));
    }
  }

  console.log('\n=============================================================');
  if (passed === report.length) {
    console.log('🎉 ALL PAGES PASSED — No console errors, no broken images, all rendered successfully.');
  }
}

main().catch(console.error);
