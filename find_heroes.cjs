const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = findFiles('./src/app', /\.tsx$/);
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('hero-overlay')) {
    console.log('\n--- ' + file + ' ---');
    
    // Find section with h-[...]
    const sectionMatch = content.match(/<section[^>]*className=['"]([^'"]*h-\[[^'"]*)['"][^>]*>/);
    if (sectionMatch) {
      console.log('Container:', sectionMatch[1]);
    } else {
      const motionMatch = content.match(/<motion\.div[^>]*className=['"]([^'"]*)['"][^>]*>[\s\S]*?hero-overlay/);
      if (motionMatch) console.log('Container (motion):', motionMatch[1]);
    }
    
    const h1Match = content.match(/<h1[^>]*className=['"]([^'"]*)['"]/);
    if (h1Match) console.log('H1:', h1Match[1]);
  }
});
