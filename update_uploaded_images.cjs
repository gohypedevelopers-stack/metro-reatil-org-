const fs = require('fs');

const pageFile = 'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

const replacements = {
  'artistic-finishes': '/service/artistic finishes.png',
  'feature-walls': '/service/feature walls.png',
  'gypsum-works': '/service/gypsum works.png',
  'marble-installation': '/service/marble installation.png',
  'mep-hvac': '/service/mep hvac.png',
  'property-inspection': '/service/property inspection.png',
  'stretch-ceiling': '/service/stretch cieling.png'
};

for (const [id, newImage] of Object.entries(replacements)) {
  // We look for the image property inside the object with the given id.
  // The image property might currently be an unsplash URL.
  const regex = new RegExp(`(id: "${id}",[\\s\\S]*?image: ")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${newImage}$2`);
}

fs.writeFileSync(pageFile, content);
console.log('Update complete');
