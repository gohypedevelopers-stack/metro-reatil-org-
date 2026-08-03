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
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  if (content.includes('hero-overlay')) {
    // Replace standard h1 classes
    content = content.replace(/text-2xl sm:text-3xl md:text-4xl lg:text-5xl/g, 'hero-title-1');
    content = content.replace(/text-2xl sm:text-3xl md:text-3xl lg:text-4xl/g, 'hero-title-1'); // portfolio

    // Fix leading
    content = content.replace(/hero-title-1 font-serif text-white mb-4 uppercase tracking-tight leading-\[1\.1\]/g, 'hero-title-1 font-serif text-white mb-4 uppercase tracking-tight');
    content = content.replace(/hero-title-1 font-serif text-white uppercase tracking-tight leading-\[1\.2\]/g, 'hero-title-1 font-serif text-white uppercase tracking-tight');
    content = content.replace(/hero-title-1 font-serif text-white uppercase tracking-tight leading-\[1\.1\]/g, 'hero-title-1 font-serif text-white uppercase tracking-tight');

    // Make container consistent if needed (they are actually already consistent, but just in case, let's normalize 'items-center bg-brand-dark' vs 'items-center justify-center bg-brand-dark')
    // Wait, let's leave container as is since they are already 'h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px]' consistently everywhere.

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated', file);
    }
  }
});
