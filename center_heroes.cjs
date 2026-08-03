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
    // Add text-center to the H1 if it's missing (though if container has text-center it inherits, but H1 might override or not)
    // Actually, just append text-center if not present
    content = content.replace(/className=['"](hero-title-1[^'"]*)['"]/g, (match, p1) => {
      if (!p1.includes('text-center')) {
        return `className="${p1} text-center"`;
      }
      return match;
    });

    // Also let's check for <div className="max-w-4xl ... text-center">
    // and make sure the wrapper flex is centering
    // For the <section container, let's make sure it has 'justify-center'
    content = content.replace(/className=['"]([^'"]*h-\[35vh\][^'"]*)['"]/g, (match, p1) => {
      let newClasses = p1;
      if (!newClasses.includes('justify-center')) {
        newClasses = newClasses.replace('items-center', 'items-center justify-center');
      }
      return `className="${newClasses}"`;
    });

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated', file);
    }
  }
});
