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
    // Ensure the container is text-center
    content = content.replace(/className=['"](max-w-4xl mx-auto(?! text-center)[^'"]*)['"]/g, 'className="$1 text-center"');
    content = content.replace(/className=['"](max-w-4xl mx-auto text-center[^'"]*)['"]/g, 'className="$1 text-center"'); // to not double add, just to check
    // If we have hero-title-1, add text-center
    content = content.replace(/className=['"](hero-title-1[^'"]*)['"]/g, (match, p1) => {
      if (!p1.includes('text-center')) {
        return `className="${p1} text-center"`;
      }
      return match;
    });

    // Make sure we replace any duplicate text-center text-center
    content = content.replace(/text-center text-center/g, 'text-center');

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed alignment', file);
    }
  }
});
