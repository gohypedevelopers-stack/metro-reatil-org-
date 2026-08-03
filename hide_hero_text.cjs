const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let original = fs.readFileSync(filePath, 'utf8');
    let content = original;
    
    // Pattern to find <p className="..."> just below the hero titles
    // Often they have "text-neutral-300", "text-neutral-400" inside the hero
    // Let's replace "text-neutral-300" with "hidden md:block text-neutral-300" 
    // where it's not already hidden.
    
    // Let's specifically target the paragraphs that contain the tagline/description 
    // in the hero sections. The prompt image text: "Book a free consultation..."
    
    // We can just look for className="text-neutral-300 text-sm md:text-lg font-light...
    content = content.replace(/className="text-neutral-300 /g, 'className="hidden md:block text-neutral-300 ');
    
    // Also cover single quotes if any
    content = content.replace(/className='text-neutral-300 /g, 'className=\'hidden md:block text-neutral-300 ');

    // Also text-neutral-400 might be used in some hero sub-texts, let's only do it if it's italic or max-w-2xl
    content = content.replace(/className="text-neutral-400 text-sm md:text-xl font-light/g, 'className="hidden md:block text-neutral-400 text-sm md:text-xl font-light');
    
    // Clean up if we double added hidden md:block
    content = content.replace(/hidden md:block hidden md:block/g, 'hidden md:block');
    content = content.replace(/hidden md:block md:block/g, 'hidden md:block');
    content = content.replace(/hidden hidden md:block/g, 'hidden md:block');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
