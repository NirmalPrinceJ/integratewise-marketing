const fs = require('fs');
const path = require('path');

const targetUrl = 'https://calendar.app.google/EcRkSqxwtchuF4Qf6';
const replacementUrl = '/request-access';
const srcDir = path.join(__dirname, '..', 'v64_source_temp', 'app', 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

console.log(`Starting URL replacement in ${srcDir}...`);

let count = 0;
walkDir(srcDir, filePath => {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetUrl)) {
      console.log(`Found match in: ${filePath}`);
      content = content.split(targetUrl).join(replacementUrl);
      fs.writeFileSync(filePath, content, 'utf8');
      count++;
    }
  }
});

console.log(`Completed replacement. Modified ${count} files.`);
