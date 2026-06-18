# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-verification.spec.ts >> Visual Verification >> forms have proper labels
- Location: tests/visual-verification.spec.ts:120:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8788/contact
Call log:
  - navigating to "http://localhost:8788/contact", waiting until "load"

```

# Test source

```ts
  21  |     await expect(page.locator('.hero h1')).toBeVisible();
  22  |   });
  23  | 
  24  |   test('features page bento grid layout is correct', async ({ page }) => {
  25  |     await page.goto(`${BASE_URL}/features`);
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
> 121 |     await page.goto(`${BASE_URL}/contact`);
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8788/contact
  122 |     
  123 |     // Check name input has label
  124 |     const nameLabel = page.locator('label[for="name"]');
  125 |     await expect(nameLabel).toBeVisible();
  126 |     await expect(nameLabel).toContainText('Name');
  127 |     
  128 |     // Check email input has label
  129 |     const emailLabel = page.locator('label[for="email"]');
  130 |     await expect(emailLabel).toBeVisible();
  131 |     await expect(emailLabel).toContainText('Email');
  132 |   });
  133 | 
  134 |   test('no console errors on page load', async ({ page }) => {
  135 |     const errors: string[] = [];
  136 |     page.on('console', (msg) => {
  137 |       if (msg.type() === 'error') {
  138 |         errors.push(msg.text());
  139 |       }
  140 |     });
  141 |     
  142 |     await page.goto(BASE_URL);
  143 |     await page.waitForLoadState('networkidle');
  144 |     
  145 |     expect(errors).toHaveLength(0);
  146 |   });
  147 | 
  148 |   test('page titles are unique and descriptive', async ({ page }) => {
  149 |     const pages = [
  150 |       { path: '/', keyword: 'Own Your AI' },
  151 |       { path: '/features', keyword: 'Features' },
  152 |       { path: '/how-it-works', keyword: 'How It Works' },
  153 |       { path: '/pricing', keyword: 'Pricing' },
  154 |       { path: '/about', keyword: 'About' },
  155 |       { path: '/contact', keyword: 'Contact' },
  156 |     ];
  157 |     
  158 |     for (const { path, keyword } of pages) {
  159 |       await page.goto(`${BASE_URL}${path}`);
  160 |       const title = await page.title();
  161 |       expect(title).toContain('IntegrateWise');
  162 |       expect(title).toContain(keyword);
  163 |     }
  164 |   });
  165 | });
  166 | 
```