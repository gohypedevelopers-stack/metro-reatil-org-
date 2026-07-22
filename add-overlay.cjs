const fs = require('fs');
const files = [
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/services/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/portfolio/PortfolioClient.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/manufacturing/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/for-designers-architects/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/design-styles/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/contact/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/careers/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/about/page.tsx',
  'c:/Users/GHM/Documents/Metro Retail/metro/src/app/blog/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /([ \t]+)<div className="absolute inset-0 bg-gradient-to-t from-brand-dark\/40 via-transparent to-brand-dark\/70" \/>/g,
    '$1<div className="absolute inset-0 bg-black/40" />\n$1<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/70" />'
  );
  fs.writeFileSync(file, content);
});

console.log('Done replacing overlays');
