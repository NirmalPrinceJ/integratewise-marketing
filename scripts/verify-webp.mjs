import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const PORT = process.env.PORT || 3000;
const URL = `http://localhost:${PORT}`;

async function verifyWebP() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const requests = [];
  const responses = [];

  // Capture all network requests
  page.on('request', request => {
    requests.push({
      url: request.url(),
      method: request.method(),
    });
  });

  page.on('response', response => {
    const url = response.url();
    if (url.includes('.webp') || url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg') || url.includes('.svg')) {
      responses.push({
        url: url,
        status: response.status(),
        contentType: response.headers()['content-type'] || 'unknown',
      });
    }
  });

  console.log('🔍 Verifying WebP conversion and loading...\n');

  try {
    await page.goto(URL, { waitUntil: 'networkidle' });
    
    // Check page title
    const title = await page.title();
    console.log(`✓ Page loaded: ${title}\n`);

    // Wait for images to load
    await page.waitForTimeout(2000);

    // Get all image elements
    const images = await page.locator('img').all();
    console.log(`📸 Found ${images.length} images on page\n`);

    // Check each image
    let webpCount = 0;
    let pngCount = 0;
    let svgCount = 0;
    let otherCount = 0;

    for (const img of images) {
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      
      if (src) {
        if (src.includes('.webp')) {
          webpCount++;
        } else if (src.includes('.png')) {
          pngCount++;
        } else if (src.includes('.svg')) {
          svgCount++;
        } else {
          otherCount++;
        }
      }
    }

    console.log('📊 Image Format Breakdown:');
    console.log(`   ✓ WebP images: ${webpCount}`);
    console.log(`   ✓ PNG images: ${pngCount}`);
    console.log(`   ✓ SVG images: ${svgCount}`);
    if (otherCount > 0) {
      console.log(`   ⚠ Other formats: ${otherCount}`);
    }
    console.log();

    // Check network responses for image requests
    const imageResponses = responses.filter(r => 
      r.url.includes('.webp') || 
      r.url.includes('.png') || 
      r.url.includes('.jpg') || 
      r.url.includes('.jpeg') || 
      r.url.includes('.svg')
    );

    console.log(`📡 Network Requests for Images: ${imageResponses.length}\n`);
    
    if (imageResponses.length > 0) {
      console.log('Image Assets Loaded:');
      imageResponses.forEach((resp, idx) => {
        const fileName = resp.url.split('/').pop();
        const format = fileName.split('.').pop();
        const status = resp.status === 200 ? '✓' : '❌';
        console.log(`   ${status} ${fileName} (${format}) - Status: ${resp.status}`);
      });
    }

    console.log();

    // Check for conversion status
    const projectPath = '/vercel/share/v0-project';
    const ogImageWebP = path.join(projectPath, 'og-image.webp');
    const memoryViewWebP = path.join(projectPath, 'images', 'memory-view.webp');
    const faviconWebP = path.join(projectPath, 'favicon-32x32.webp');

    console.log('🔎 File Conversion Verification:\n');

    if (fs.existsSync(ogImageWebP)) {
      const size = fs.statSync(ogImageWebP).size;
      console.log(`   ✓ og-image.webp exists (${(size / 1024).toFixed(1)}KB)`);
    } else {
      console.log(`   ❌ og-image.webp NOT FOUND`);
    }

    if (fs.existsSync(memoryViewWebP)) {
      const size = fs.statSync(memoryViewWebP).size;
      console.log(`   ✓ memory-view.webp exists (${(size / 1024).toFixed(1)}KB)`);
    } else {
      console.log(`   ❌ memory-view.webp NOT FOUND`);
    }

    if (fs.existsSync(faviconWebP)) {
      const size = fs.statSync(faviconWebP).size;
      console.log(`   ✓ favicon-32x32.webp exists (${(size / 1024).toFixed(1)}KB)`);
    } else {
      console.log(`   ❌ favicon-32x32.webp NOT FOUND`);
    }

    console.log('\n✅ WebP Conversion Verification Complete!\n');

  } catch (error) {
    console.error('❌ Error during verification:', error.message);
  } finally {
    await browser.close();
  }
}

verifyWebP().catch(console.error);
