#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Try to dynamically load sharp
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (err) {
  // Sharp not available - will provide instructions
}

const imagesToConvert = [
  { src: 'og-image.png', dest: 'og-image.webp' },
  { src: 'memory-view.png', dest: 'memory-view.webp' },
  { src: 'images/memory-view.png', dest: 'images/memory-view.webp' },
  { src: 'apple-touch-icon.png', dest: 'apple-touch-icon.webp' },
  { src: 'favicon-128x128.png', dest: 'favicon-128x128.webp' },
  { src: 'favicon-16x16.png', dest: 'favicon-16x16.webp' },
  { src: 'favicon-192x192.png', dest: 'favicon-192x192.webp' },
  { src: 'favicon-256x256.png', dest: 'favicon-256x256.webp' },
  { src: 'favicon-32x32.png', dest: 'favicon-32x32.webp' },
  { src: 'favicon-48x48.png', dest: 'favicon-48x48.webp' },
  { src: 'favicon-64x64.png', dest: 'favicon-64x64.webp' },
];

console.log('🖼️  Converting images to WebP format...\n');

let converted = 0;
let skipped = 0;

for (const { src, dest } of imagesToConvert) {
  const srcPath = path.join(projectRoot, src);
  const destPath = path.join(projectRoot, dest);
  
  if (!fs.existsSync(srcPath)) {
    continue;
  }
  
  if (fs.existsSync(destPath)) {
    console.log(`⊘ ${src} already converted`);
    skipped++;
    continue;
  }
  
  if (!sharp) {
    console.log(`✗ ${src} - Sharp not available`);
    continue;
  }
  
  try {
    const inputSize = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .webp({ quality: 90 })
      .toFile(destPath);
    
    const outputSize = fs.statSync(destPath).size;
    const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    console.log(`✓ ${src} → ${path.basename(dest)} (${(inputSize/1024).toFixed(1)}KB → ${(outputSize/1024).toFixed(1)}KB, -${reduction}%)`);
    converted++;
  } catch (err) {
    console.log(`✗ Error converting ${src}: ${err.message}`);
  }
}

console.log(`\n✓ Converted: ${converted} | Skipped: ${skipped}`);

if (!sharp) {
  console.log('\n⚠️  Sharp library not found. Install with:');
  console.log('   npm install --save-dev sharp\n');
}
