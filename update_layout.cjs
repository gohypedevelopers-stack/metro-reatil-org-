const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx') || filePath.endsWith('.ts')) {
    let original = fs.readFileSync(filePath, 'utf8');
    let content = original;
    
    // Replace max-w-[1600px] mx-auto with w-full
    content = content.replace(/max-w-\[1600px\] mx-auto/g, 'w-full');
    content = content.replace(/max-w-\[1600px\]/g, 'w-full');
    
    // Replace max-w-[1200px] mx-auto with w-full
    content = content.replace(/max-w-\[1200px\] mx-auto/g, 'w-full');
    content = content.replace(/max-w-\[1200px\]/g, 'w-full');
    
    // Replace max-w-[1800px] mx-auto with w-full
    content = content.replace(/max-w-\[1800px\] mx-auto/g, 'w-full');
    content = content.replace(/max-w-\[1800px\]/g, 'w-full');
    
    // Replace container mx-auto with w-full
    content = content.replace(/\bcontainer mx-auto\b/g, 'w-full');
    
    // Also catch some instances where container doesn't have mx-auto directly next to it
    content = content.replace(/className="container /g, 'className="w-full ');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
      modifiedCount++;
    }
  }
});

console.log(`Total files modified: ${modifiedCount}`);
