const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // H2 Replacements
    content = content.replace(/mobile-heading-balance([^"]*)text-2xl([^"]*)xl:text-5xl([^"]*)font-serif([^"]*)(uppercase|leading-tight|tracking-tight|tracking-tighter)?([^"]*)/g, (match) => {
        const classes = match.split(/\s+/);
        const toKeep = classes.filter(c => {
            return !c.startsWith('text-2xl') && 
                   !c.startsWith('sm:text-') &&
                   !c.startsWith('md:text-') &&
                   !c.startsWith('lg:text-') &&
                   !c.startsWith('xl:text-') &&
                   !c.startsWith('text-[') &&
                   c !== 'font-serif' &&
                   c !== 'uppercase' &&
                   c !== 'tracking-tight' &&
                   c !== 'tracking-tighter' &&
                   c !== 'leading-tight' &&
                   c !== 'mobile-heading-balance' &&
                   c !== 'md:tracking-normal' &&
                   c !== 'xs:tracking-tight';
        });
        // We only add section-title if it was successfully matched as a heading block
        if (!toKeep.includes('section-title')) {
            toKeep.unshift('section-title');
        }
        return toKeep.join(' ');
    });

    // H3 Replacements
    content = content.replace(/text-xl([^"]*)xl:text-3xl([^"]*)font-serif([^"]*)/g, (match) => {
        const classes = match.split(/\s+/);
        const toKeep = classes.filter(c => {
            return !c.startsWith('text-xl') && 
                   !c.startsWith('sm:text-') &&
                   !c.startsWith('md:text-') &&
                   !c.startsWith('xl:text-') &&
                   c !== 'font-serif' &&
                   c !== 'uppercase' &&
                   c !== 'tracking-tight' &&
                   c !== 'leading-tight';
        });
        if (!toKeep.includes('section-subtitle')) {
            toKeep.unshift('section-subtitle');
        }
        return toKeep.join(' ');
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'src/components'));
walkDir(path.join(__dirname, 'src/app'));
console.log('Headings replaced successfully!');
