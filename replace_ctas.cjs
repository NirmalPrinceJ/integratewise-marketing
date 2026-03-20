const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/app/components/pages');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Header desktop links
  content = content.replace(/Log In/g, 'Book a Demo');
  content = content.replace(/to="\/"([^>]*)>\s*Book a Demo/g, 'to="/contact"$1>\n              Book a Demo');
  
  // Header mobile links
  content = content.replace(/>Log in</g, '>Book a Demo<');
  content = content.replace(/to="\/"([^>]*)>Book a Demo</g, 'to="/contact"$1>Book a Demo<');

  // Start free workspace
  content = content.replace(/Start free workspace/g, 'Open App');
  
  // Replace the signup link logic ensuring it only converts to external link where it was /signup
  content = content.replace(/to="\/signup"/g, 'to="https://app.integratewise.com" target="_blank" rel="noreferrer"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(directoryPath);
