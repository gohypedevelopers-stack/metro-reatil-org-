const fs = require('fs');
const path = require('path');

// 1. Update globals.css
const globalsPath = path.join(__dirname, 'src/app/globals.css');
if (fs.existsSync(globalsPath)) {
  let globals = fs.readFileSync(globalsPath, 'utf8');
  
  // Update hero-title-1
  globals = globals.replace(
    /@apply text-3xl xs:text-4xl md:text-5xl lg:text-6xl leading-\[0\.98\] md:leading-\[0\.95\];/,
    '@apply text-2xl xs:text-3xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[0.95];'
  );
  
  // Update hero-title-2
  globals = globals.replace(
    /@apply text-2xl sm:text-4xl md:text-5xl lg:text-6xl;/,
    '@apply text-xl sm:text-3xl md:text-5xl lg:text-6xl;'
  );

  // Update section-title
  globals = globals.replace(
    /@apply text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif uppercase tracking-tight leading-tight;/,
    '@apply text-xl sm:text-2xl md:text-4xl xl:text-5xl font-serif uppercase tracking-tight leading-[1.1] md:leading-tight;'
  );

  // Update hero-btn-text
  globals = globals.replace(
    /@apply text-\[9px\] sm:text-\[10px\];/,
    '@apply text-[8px] sm:text-[9px];'
  );
  
  fs.writeFileSync(globalsPath, globals, 'utf8');
  console.log('Updated globals.css');
}

// 2. Update inline typography in all pages
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
    
    // Replace text-4xl md:text-5xl -> text-2xl md:text-5xl
    content = content.replace(/text-4xl md:text-5xl/g, 'text-2xl md:text-5xl');
    
    // Replace text-3xl sm:text-4xl -> text-xl sm:text-3xl
    content = content.replace(/text-3xl sm:text-4xl/g, 'text-xl sm:text-3xl');
    
    // Replace text-2xl sm:text-3xl md:text-4xl -> text-xl sm:text-2xl md:text-4xl
    content = content.replace(/text-2xl sm:text-3xl md:text-4xl/g, 'text-xl sm:text-2xl md:text-4xl');
    
    // Replace description text-lg font-light -> text-sm md:text-lg font-light
    content = content.replace(/className="text-lg font-light/g, 'className="text-sm md:text-lg font-light');
    content = content.replace(/text-neutral-300 text-lg font-light/g, 'text-neutral-300 text-sm md:text-lg font-light');
    content = content.replace(/text-neutral-300 text-\[18px\] font-light/g, 'text-neutral-300 text-sm md:text-[18px] font-light');
    
    // Replace text-lg md:text-xl font-light -> text-sm md:text-xl font-light
    content = content.replace(/text-lg md:text-xl font-light/g, 'text-sm md:text-xl font-light');
    content = content.replace(/text-neutral-400 text-lg md:text-xl font-light/g, 'text-neutral-400 text-sm md:text-xl font-light');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
