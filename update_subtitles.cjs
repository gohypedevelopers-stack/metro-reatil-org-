const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  './src/app/services/[id]/page.tsx',
  './src/app/services/[id]/[subId]/page.tsx',
  './src/app/design-styles/[id]/page.tsx'
];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace text-base sm:text-lg md:text-xl with text-[18px]
    content = content.replace(/text-base sm:text-lg md:text-[xlg]+/g, 'text-[18px]');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
