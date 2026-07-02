import fs from 'fs';

const pages = [
  'src/app/blog/page.tsx',
  'src/app/design-styles/page.tsx'
];

pages.forEach(page => {
  if (!fs.existsSync(page)) return;
  
  let content = fs.readFileSync(page, 'utf8');

  // Replace colors
  content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-brand-dark');
  content = content.replace(/bg-gray-900/g, 'bg-brand-dark');
  content = content.replace(/text-gray-900/g, 'text-brand-dark');
  content = content.replace(/text-gray-800/g, 'text-brand-dark');
  content = content.replace(/text-gray-700/g, 'text-neutral-700');
  content = content.replace(/bg-gray-50/g, 'bg-neutral-50');
  content = content.replace(/bg-gray-100/g, 'bg-neutral-100');
  content = content.replace(/text-gray-600/g, 'text-neutral-600');
  content = content.replace(/text-gray-500/g, 'text-neutral-500');
  content = content.replace(/text-gray-400/g, 'text-neutral-400');
  content = content.replace(/text-gray-300/g, 'text-neutral-300');
  content = content.replace(/text-gray-200/g, 'text-neutral-200');
  content = content.replace(/text-gray-100/g, 'text-neutral-100');
  content = content.replace(/border-gray-200/g, 'border-neutral-200');
  content = content.replace(/border-gray-100/g, 'border-neutral-100');
  
  content = content.replace(/bg-\[\#E8A020\]/g, 'bg-brand-gold');
  content = content.replace(/text-\[\#E8A020\]/g, 'text-brand-gold');
  content = content.replace(/ring-\[\#E8A020\]/g, 'ring-brand-gold');
  content = content.replace(/hover:bg-\[\#d6931d\]/g, 'hover:bg-yellow-600');
  content = content.replace(/hover:text-\[\#E8A020\]/g, 'hover:text-brand-gold');

  // Replace roundings
  content = content.replace(/rounded-2xl/g, 'rounded-sm');
  content = content.replace(/rounded-xl/g, 'rounded-sm');
  content = content.replace(/rounded-lg/g, 'rounded-sm');
  
  // Clean up fonts to match Cinzel if it was standard serif
  content = content.replace(/font-serif(?! style)/g, 'font-serif uppercase tracking-wide');
  content = content.replace(/<h3 className="text-2xl font-bold mb-2 font-serif uppercase tracking-wide">/g, '<h3 className="text-2xl font-bold mb-2 uppercase tracking-tight" style={{ fontFamily: \'var(--font-cinzel), serif\' }}>');

  fs.writeFileSync(page, content);
  console.log(`Updated ${page}`);
});
