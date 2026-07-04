const fs = require('fs');

const pageFile = 'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

// 1. Remove microcement
content = content.replace(/  \{\n    id: "microcement",[\s\S]*?href: "\/services\/microcement",\n  \},\n/, '');

// 2. Remove landscaping
content = content.replace(/  \{\n    id: "landscaping",[\s\S]*?href: "\/services\/landscaping",\n  \},\n/, '');

// 3. Remove halo-shield
content = content.replace(/  \{\n    id: "halo-shield",[\s\S]*?href: "\/services\/halo-shield",\n  \},\n/, '');

// 4. Replace images
const replacements = {
  'fitout': '/images/services/fitout.png',
  'carpentry': '/images/services/carpentry.png',
  'decorative-paint': '/images/services/decorative_paint.png',
  'terrazzo': '/images/services/terrazzo.png',
  'automation': '/images/services/automation.png',
  'contracting': '/images/services/contracting.png',
  'window-glazing': '/images/services/window_glazing.png',
  'tile-installation': '/images/services/tile_installation.png'
};

for (const [id, newImage] of Object.entries(replacements)) {
  const regex = new RegExp(`(id: "${id}",[\\s\\S]*?image: ")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${newImage}$2`);
}

fs.writeFileSync(pageFile, content);
console.log('Update complete');
