# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-verification.spec.ts >> Visual Verification >> features page bento grid layout is correct
- Location: tests/visual-verification.spec.ts:24:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8788/features
Call log:
  - navigating to "http://localhost:8788/features", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = 'http://localhost:8788';
  4   | 
  5   | test.describe('Visual Verification', () => {
  6   |   
  7   |   test('homepage renders correctly at different viewports', async ({ page }) => {
  8   |     await page.goto(BASE_URL);
  9   |     
  10  |     // Desktop
  11  |     await page.setViewportSize({ width: 1920, height: 1080 });
  12  |     await expect(page.locator('.hero h1')).toBeVisible();
  13  |     await expect(page.locator('.nav-links')).toBeVisible();
  14  |     
  15  |     // Tablet
  16  |     await page.setViewportSize({ width: 768, height: 1024 });
  17  |     await expect(page.locator('.hero h1')).toBeVisible();
  18  |     
  19  |     // Mobile
  20  |     await page.setViewportSize({ width: 375, height: 667 });
  21  |     await expect(page.locator('.hero h1')).toBeVisible();
  22  |   });
  23  | 
  24  |   test('features page bento grid layout is correct', async ({ page }) => {
> 25  |     await page.goto(`${BASE_URL}/features`);
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8788/features
  26  |     
  27  |     // Check bento grid exists and has correct structure
  28  |     const bentoGrid = page.locator('.bento');
  29  |     await expect(bentoGrid).toBeVisible();
  30  |     
  31  |     // Verify tall items
  32  |     const tallItems = page.locator('.bento-item.tall');
  33  |     await expect(tallItems).toHaveCount(2);
  34  |     
  35  |     // Verify span-2 items
  36  |     const span2Items = page.locator('.bento-item.span-2');
  37  |     await expect(span2Items).toHaveCount(2);
  38  |   });
  39  | 
  40  |   test('all CTAs are clickable and visible', async ({ page }) => {
  41  |     const pages = ['/', '/features', '/how-it-works', '/pricing', '/about'];
  42  |     
  43  |     for (const path of pages) {
  44  |       await page.goto(`${BASE_URL}${path}`);
  45  |       
  46  |       // Check primary CTA exists
  47  |       const ctaButtons = page.locator('.btn-gold, .btn-forest');
  48  |       const count = await ctaButtons.count();
  49  |       expect(count).toBeGreaterThan(0);
  50  |       
  51  |       // Verify first CTA is visible and has text
  52  |       const firstCTA = ctaButtons.first();
  53  |       await expect(firstCTA).toBeVisible();
  54  |       const text = await firstCTA.textContent();
  55  |       expect(text?.trim().length).toBeGreaterThan(0);
  56  |     }
  57  |   });
  58  | 
  59  |   test('images load correctly', async ({ page }) => {
  60  |     await page.goto(BASE_URL);
  61  |     
  62  |     // Check logo loads
  63  |     const logo = page.locator('.nav-logo img');
  64  |     await expect(logo).toBeVisible();
  65  |     
  66  |     // Verify logo has correct attributes
  67  |     await expect(logo).toHaveAttribute('alt', 'IntegrateWise');
  68  |     const src = await logo.getAttribute('src');
  69  |     expect(src).toBeTruthy();
  70  |   });
  71  | 
  72  |   test('color palette is consistent', async ({ page }) => {
  73  |     await page.goto(BASE_URL);
  74  |     
  75  |     const colors = await page.evaluate(() => {
  76  |       const root = getComputedStyle(document.documentElement);
  77  |       return {
  78  |         ink: root.getPropertyValue('--ink').trim(),
  79  |         paper: root.getPropertyValue('--paper').trim(),
  80  |         forest: root.getPropertyValue('--forest').trim(),
  81  |         gold: root.getPropertyValue('--gold').trim(),
  82  |       };
  83  |     });
  84  |     
  85  |     expect(colors.ink).toBe('#0C0C0C');
  86  |     expect(colors.paper).toBe('#F4F0E8');
  87  |     expect(colors.forest).toBe('#1A3A2A');
  88  |     expect(colors.gold).toBe('#B8943F');
  89  |   });
  90  | 
  91  |   test('navigation is sticky', async ({ page }) => {
  92  |     await page.goto(BASE_URL);
  93  |     
  94  |     const nav = page.locator('.nav');
  95  |     await expect(nav).toBeVisible();
  96  |     
  97  |     // Scroll down
  98  |     await page.evaluate(() => window.scrollTo(0, 1000));
  99  |     
  100 |     // Nav should still be visible (sticky)
  101 |     await expect(nav).toBeVisible();
  102 |   });
  103 | 
  104 |   test('footer links are accessible', async ({ page }) => {
  105 |     await page.goto(BASE_URL);
  106 |     
  107 |     // Check all footer links have href
  108 |     const footerLinks = page.locator('footer a[href]');
  109 |     const count = await footerLinks.count();
  110 |     expect(count).toBeGreaterThan(10);
  111 |     
  112 |     // Verify no empty hrefs
  113 |     for (let i = 0; i < Math.min(count, 20); i++) {
  114 |       const href = await footerLinks.nth(i).getAttribute('href');
  115 |       expect(href).toBeTruthy();
  116 |       expect(href).not.toBe('');
  117 |     }
  118 |   });
  119 | 
  120 |   test('forms have proper labels', async ({ page }) => {
  121 |     await page.goto(`${BASE_URL}/contact`);
  122 |     
  123 |     // Check name input has label
  124 |     const nameLabel = page.locator('label[for="name"]');
  125 |     await expect(nameLabel).toBeVisible();
```