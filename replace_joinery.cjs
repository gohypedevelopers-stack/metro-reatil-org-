const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We want to replace Joinery with Carpentry, but be careful with URLs and image paths if we don't want to break them.
    // However, if we change the keys in data objects AND the hrefs, it should work seamlessly.
    
    content = content.replace(/Joinery Works/g, 'Carpentry Works');
    content = content.replace(/joinery works/gi, 'carpentry works');
    
    // Replace Bespoke Joinery
    content = content.replace(/Bespoke Joinery/g, 'Bespoke Carpentry');
    content = content.replace(/bespoke joinery/gi, 'bespoke carpentry');
    content = content.replace(/bespoke-joinery/g, 'bespoke-carpentry');
    
    // Remaining Joinery
    content = content.replace(/Joinery/g, 'Carpentry');
    content = content.replace(/joinery/g, 'carpentry');

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
        console.log('Updated:', file);
    }
});

console.log('Total files updated:', changedFiles);
