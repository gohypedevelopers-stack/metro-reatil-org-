const fs = require('fs');

const pageFile = 'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

const replacements = {
  'marble-installation': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  'gypsum-works': 'https://images.unsplash.com/photo-1600607687931-cebf667c1328?auto=format&fit=crop&q=80',
  'property-audits': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  'authority-approvals': 'https://images.unsplash.com/photo-1520697830682-89b21f37e199?auto=format&fit=crop&q=80',
  'stretch-ceiling': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
  'property-inspection': 'https://images.unsplash.com/photo-1541888086925-0c13d3906da7?auto=format&fit=crop&q=80',
  'mep-hvac': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
  'project-management': 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80',
  'feature-walls': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80',
  'artistic-finishes': 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80',
  'custom-furniture': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
  'air-quality': 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80'
};

for (const [id, newImage] of Object.entries(replacements)) {
  const regex = new RegExp(`(id: "${id}",[\\s\\S]*?image: ")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${newImage}$2`);
}

// Replace hero images
content = content.replace(/https:\/\/halo\.ae\/images\/LUXURY-MANSION1-copy\.jpg/g, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80');

fs.writeFileSync(pageFile, content);
console.log('Update complete');
