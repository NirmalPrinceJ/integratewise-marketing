#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// List of PNG/JPG images to convert to WebP (excluding scratch and node_modules)
const imagesToConvert = [
  'og-image.png',
  'memory-view.png',
  'apple-touch-icon.png',
  'favicon-128x128.png',
  'favicon-16x16.png',
  'favicon-192x192.png',
  'favicon-256x256.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
];

const projectRoot = path.join(__dirname, '..');

console.log('Converting images to WebP format...\n');

// Try to use built-in tools
async function convertWithSharp() {
  try {
    const sharp = require('sharp');
    
    for (const filename of imagesToConvert) {
      const inputPath = path.join(projectRoot, filename);
      
      if (!fs.existsSync(inputPath)) {
        console.log(`⊘ Skipping ${filename} - not found`);
        continue;
      }
      
      const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      try {
        const inputSize = fs.statSync(inputPath).size;
        await sharp(inputPath)
          .webp({ quality: 90 })
          .toFile(outputPath);
        
        const outputSize = fs.statSync(outputPath).size;
        const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
        console.log(`✓ ${filename} → ${path.basename(outputPath)} (${inputSize}B → ${outputSize}B, -${reduction}%)`);
      } catch (err) {
        console.log(`✗ Error converting ${filename}: ${err.message}`);
      }
    }
  } catch (err) {
    console.log('Sharp not available, trying alternative methods...\n');
    return false;
  }
  return true;
}

// Fallback: create WebP stub files with recommendations
function createWebPStubs() {
  console.log('Unable to convert images automatically.');
  console.log('Recommendation: Convert PNG/JPG files to WebP using online tools or local tools:\n');
  console.log('Online: https://convertio.co/png-webp/ or https://ezgif.com/');
  console.log('Local tools:');
  console.log('  - MacOS: brew install webp');
  console.log('  - Ubuntu: sudo apt install webp');
  console.log('  - Then use: cwebp input.png -o output.webp\n');
  
  console.log('Images to convert:');
  imagesToConvert.forEach(img => {
    const inputPath = path.join(projectRoot, img);
    if (fs.existsSync(inputPath)) {
      console.log(`  - ${img}`);
    }
  });
}

// Run conversion
(async () => {
  const success = await convertWithSharp();
  if (!success) {
    createWebPStubs();
  }
})();
