const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = '/Users/nirmal/.gemini/antigravity/brain/45608d73-3ef8-4c9d-b878-b45e66df9063';
const publicDir = path.join(__dirname, '..', 'v64_source_temp', 'app', 'public', 'images');
const rootDir = path.join(__dirname, '..', 'images');

const imagesToConvert = [
  {
    src: path.join(brainDir, 'data_surface_mockup_1780501624560.png'),
    dest: ['portfolio-overview.webp', 'hero-banner.webp']
  },
  {
    src: path.join(brainDir, 'twin_surface_mockup_1780501646133.png'),
    dest: ['morning-brief.webp']
  },
  {
    src: path.join(brainDir, 'governance_surface_mockup_1780501674776.png'),
    dest: ['governance-view.webp']
  },
  {
    src: path.join(brainDir, 'twin_workbench_mockup_clean_1780501729241.png'),
    dest: ['twin-workbench.webp']
  }
];

async function convert() {
  console.log('Converting mockups to WebP...');

  for (const img of imagesToConvert) {
    if (!fs.existsSync(img.src)) {
      console.error(`Error: Source file does not exist: ${img.src}`);
      continue;
    }

    for (const filename of img.dest) {
      const publicPath = path.join(publicDir, filename);
      const rootPath = path.join(rootDir, filename);

      console.log(`Converting ${path.basename(img.src)} -> ${filename}`);
      
      // Convert to WebP and save to public assets folder
      await sharp(img.src)
        .webp({ quality: 90 })
        .toFile(publicPath);
      console.log(`Saved: ${publicPath}`);

      // Copy or write to root assets folder
      await sharp(img.src)
        .webp({ quality: 90 })
        .toFile(rootPath);
      console.log(`Saved: ${rootPath}`);
    }
  }

  console.log('Image conversion completed!');
}

convert().catch(console.error);
