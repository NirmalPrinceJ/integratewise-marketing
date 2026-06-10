# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> IntegrateWise Marketing Site >> Features Page >> has stats section
- Location: tests/site.spec.ts:95:9

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
  5   | test.describe('IntegrateWise Marketing Site', () => {
  6   |   
  7   |   test.describe('Navigation', () => {
  8   |     test('all pages load with 200 status', async ({ page }) => {
  9   |       const pages = ['/', '/features', '/how-it-works', '/pricing', '/about', '/contact'];
  10  |       for (const path of pages) {
  11  |         const response = await page.goto(`${BASE_URL}${path}`);
  12  |         expect(response?.status()).toBe(200);
  13  |       }
  14  |     });
  15  | 
  16  |     test('nav links work correctly', async ({ page }) => {
  17  |       await page.goto(BASE_URL);
  18  |       
  19  |       // Click Features link
  20  |       await page.click('a[href="/features"]');
  21  |       await expect(page).toHaveURL(/\/features/);
  22  |       
  23  |       // Click How It Works link
  24  |       await page.click('a[href="/how-it-works"]');
  25  |       await expect(page).toHaveURL(/\/how-it-works/);
  26  |       
  27  |       // Click Pricing link
  28  |       await page.click('a[href="/pricing"]');
  29  |       await expect(page).toHaveURL(/\/pricing/);
  30  |       
  31  |       // Click logo to go home
  32  |       await page.click('.nav-logo');
  33  |       await expect(page).toHaveURL(/\/$/);
  34  |     });
  35  |   });
  36  | 
  37  |   test.describe('Homepage', () => {
  38  |     test('has correct title and hero', async ({ page }) => {
  39  |       await page.goto(BASE_URL);
  40  |       await expect(page).toHaveTitle(/IntegrateWise/);
  41  |       await expect(page.locator('h1')).toContainText('OWN YOUR AI');
  42  |     });
  43  | 
  44  |     test('displays logo correctly', async ({ page }) => {
  45  |       await page.goto(BASE_URL);
  46  |       const logo = page.locator('.nav-logo img');
  47  |       await expect(logo).toBeVisible();
  48  |       await expect(logo).toHaveAttribute('src', '/images/logo-dark.svg');
  49  |     });
  50  | 
  51  |     test('has 4 Cs features section', async ({ page }) => {
  52  |       await page.goto(BASE_URL);
  53  |       await expect(page.locator('.card h3:has-text("Integrate Once, Authorize Anything")')).toBeVisible();
  54  |       await expect(page.locator('.card h3:has-text("Your Memory. Your Continuity.")')).toBeVisible();
  55  |       await expect(page.locator('.card h3:has-text("Stable Contracts. Swappable Brains.")')).toBeVisible();
  56  |       await expect(page.locator('.card h3:has-text("One Audit Trail")')).toBeVisible();
  57  |     });
  58  | 
  59  |     test('has pricing section with 4 tiers', async ({ page }) => {
  60  |       await page.goto(BASE_URL);
  61  |       await expect(page.locator('.price-card')).toHaveCount(4);
  62  |     });
  63  | 
  64  |     test('CTA buttons are visible', async ({ page }) => {
  65  |       await page.goto(BASE_URL);
  66  |       await expect(page.locator('text=Start Free').first()).toBeVisible();
  67  |       await expect(page.locator('text=Watch Demo').first()).toBeVisible();
  68  |     });
  69  |   });
  70  | 
  71  |   test.describe('Features Page', () => {
  72  |     test('has N+M transformation section', async ({ page }) => {
  73  |       await page.goto(`${BASE_URL}/features`);
  74  |       await expect(page.locator('.nm-visual')).toBeVisible();
  75  |       await expect(page.locator('.nm-box.nm-bad')).toBeVisible();
  76  |       await expect(page.locator('.nm-box.nm-good')).toBeVisible();
  77  |     });
  78  | 
  79  |     test('has bento grid with 6 features', async ({ page }) => {
  80  |       await page.goto(`${BASE_URL}/features`);
  81  |       await expect(page.locator('.bento-item')).toHaveCount(6);
  82  |     });
  83  | 
  84  |     test('has all 6 feature deep dives', async ({ page }) => {
  85  |       await page.goto(`${BASE_URL}/features`);
  86  |       await expect(page.locator('.feature-deep')).toHaveCount(6);
  87  |       await expect(page.locator('.fd-num:has-text("01")')).toBeVisible();
  88  |       await expect(page.locator('.fd-num:has-text("02")')).toBeVisible();
  89  |       await expect(page.locator('.fd-num:has-text("03")')).toBeVisible();
  90  |       await expect(page.locator('.fd-num:has-text("04")')).toBeVisible();
  91  |       await expect(page.locator('.fd-num:has-text("05")')).toBeVisible();
  92  |       await expect(page.locator('.fd-num:has-text("06")')).toBeVisible();
  93  |     });
  94  | 
  95  |     test('has stats section', async ({ page }) => {
> 96  |       await page.goto(`${BASE_URL}/features`);
      |                  ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8788/features
  97  |       await expect(page.locator('.stats-grid')).toBeVisible();
  98  |       await expect(page.locator('.stat')).toHaveCount(4);
  99  |       await expect(page.locator('.stat-num').first()).toBeVisible();
  100 |     });
  101 |   });
  102 | 
  103 |   test.describe('How It Works Page', () => {
  104 |     test('has N×M to N+M diagrams', async ({ page }) => {
  105 |       await page.goto(`${BASE_URL}/how-it-works`);
  106 |       await expect(page.locator('text=N×M CHAOS')).toBeVisible();
  107 |       await expect(page.locator('text=N+M ELEGANCE')).toBeVisible();
  108 |     });
  109 | 
  110 |     test('has 6-step technical flow', async ({ page }) => {
  111 |       await page.goto(`${BASE_URL}/how-it-works`);
  112 |       const steps = page.locator('.step-card');
  113 |       await expect(steps).toHaveCount(6);
  114 |     });
  115 | 
  116 |     test('has comparison table', async ({ page }) => {
  117 |       await page.goto(`${BASE_URL}/how-it-works`);
  118 |       await expect(page.locator('.compare-table')).toBeVisible();
  119 |     });
  120 |   });
  121 | 
  122 |   test.describe('Pricing Page', () => {
  123 |     test('has 4 pricing tiers', async ({ page }) => {
  124 |       await page.goto(`${BASE_URL}/pricing`);
  125 |       await expect(page.locator('.price-card')).toHaveCount(4);
  126 |     });
  127 | 
  128 |     test('Pro tier is featured', async ({ page }) => {
  129 |       await page.goto(`${BASE_URL}/pricing`);
  130 |       await expect(page.locator('.price-card.featured')).toBeVisible();
  131 |       await expect(page.locator('.price-card.featured')).toContainText('Pro');
  132 |     });
  133 | 
  134 |     test('has feature comparison table', async ({ page }) => {
  135 |       await page.goto(`${BASE_URL}/pricing`);
  136 |       await expect(page.locator('.compare-table')).toBeVisible();
  137 |     });
  138 | 
  139 |     test('has FAQ section', async ({ page }) => {
  140 |       await page.goto(`${BASE_URL}/pricing`);
  141 |       await expect(page.locator('.faq-item')).toHaveCount(10);
  142 |     });
  143 |   });
  144 | 
  145 |   test.describe('About Page', () => {
  146 |     test('has founder section', async ({ page }) => {
  147 |       await page.goto(`${BASE_URL}/about`);
  148 |       await expect(page.locator('.founder-card')).toBeVisible();
  149 |       await expect(page.locator('.founder-info h3')).toContainText('Nirmal');
  150 |     });
  151 | 
  152 |     test('has link to founder website', async ({ page }) => {
  153 |       await page.goto(`${BASE_URL}/about`);
  154 |       const founderLink = page.locator('a[href="https://nirmalprince.com/"]');
  155 |       await expect(founderLink).toBeVisible();
  156 |     });
  157 | 
  158 |     test('has 4 values', async ({ page }) => {
  159 |       await page.goto(`${BASE_URL}/about`);
  160 |       await expect(page.locator('.value-card')).toHaveCount(4);
  161 |     });
  162 |   });
  163 | 
  164 |   test.describe('Contact Page', () => {
  165 |     test('has contact form', async ({ page }) => {
  166 |       await page.goto(`${BASE_URL}/contact`);
  167 |       await expect(page.locator('form#contact-form')).toBeVisible();
  168 |     });
  169 | 
  170 |     test('form has required fields', async ({ page }) => {
  171 |       await page.goto(`${BASE_URL}/contact`);
  172 |       await expect(page.locator('input#name')).toBeVisible();
  173 |       await expect(page.locator('input#email')).toBeVisible();
  174 |       await expect(page.locator('textarea#challenge')).toBeVisible();
  175 |     });
  176 | 
  177 |     test('has contact info sidebar', async ({ page }) => {
  178 |       await page.goto(`${BASE_URL}/contact`);
  179 |       await expect(page.locator('text=hello@integratewise.ai')).toBeVisible();
  180 |       await expect(page.locator('text=connect@integratewise.ai')).toBeVisible();
  181 |     });
  182 |   });
  183 | 
  184 |   test.describe('Footer', () => {
  185 |     test('footer is present on all pages', async ({ page }) => {
  186 |       const pages = ['/', '/features', '/how-it-works', '/pricing', '/about', '/contact'];
  187 |       for (const path of pages) {
  188 |         await page.goto(`${BASE_URL}${path}`);
  189 |         await expect(page.locator('footer.footer').first()).toBeVisible();
  190 |       }
  191 |     });
  192 | 
  193 |     test('footer has all sections', async ({ page }) => {
  194 |       await page.goto(BASE_URL);
  195 |       await expect(page.locator('footer h4:has-text("Product")')).toBeVisible();
  196 |       await expect(page.locator('footer h4:has-text("Developers")')).toBeVisible();
```