const fs = require('fs');

function unhideParagraphs(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.name === 'node_modules' || file.name === '.git') continue;
    
    const fullPath = dir + '/' + file.name;
    if (file.isDirectory()) {
      unhideParagraphs(fullPath);
    } else if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.ts'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      content = content.replace(/className="hidden md:block text-neutral-300(.*?text-center.*?)"/g, 'className="text-neutral-300$1"');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

unhideParagraphs('./src/app');
