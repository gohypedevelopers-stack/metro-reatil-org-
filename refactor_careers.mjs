import fs from 'fs';

let content = fs.readFileSync('src/app/careers/page.tsx', 'utf8');

// Replace colors
content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-brand-dark');
content = content.replace(/text-gray-900/g, 'text-brand-dark');
content = content.replace(/text-gray-800/g, 'text-brand-dark');
content = content.replace(/bg-gray-50/g, 'bg-neutral-50');
content = content.replace(/bg-gray-100/g, 'bg-neutral-100');
content = content.replace(/text-gray-600/g, 'text-neutral-600');
content = content.replace(/text-gray-500/g, 'text-neutral-500');
content = content.replace(/text-gray-400/g, 'text-neutral-400');
content = content.replace(/text-gray-300/g, 'text-neutral-300');
content = content.replace(/text-gray-200/g, 'text-neutral-200');
content = content.replace(/border-gray-200/g, 'border-neutral-200');
content = content.replace(/border-gray-100/g, 'border-neutral-100');
content = content.replace(/bg-\[\#E8A020\]/g, 'bg-brand-gold');
content = content.replace(/text-\[\#E8A020\]/g, 'text-brand-gold');
content = content.replace(/ring-\[\#E8A020\]/g, 'ring-brand-gold');
content = content.replace(/hover:bg-\[\#d6931d\]/g, 'hover:bg-yellow-600');
content = content.replace(/bg-\[\#E8A020\]\/20/g, 'bg-brand-gold/20');
content = content.replace(/border-\[\#E8A020\]/g, 'border-brand-gold');
content = content.replace(/hover:text-\[\#E8A020\]/g, 'hover:text-brand-gold');

// Replace roundings
content = content.replace(/rounded-2xl/g, 'rounded-sm');
content = content.replace(/rounded-xl/g, 'rounded-sm');
content = content.replace(/rounded-lg/g, 'rounded-sm');
// content = content.replace(/rounded-full/g, 'rounded-sm'); // keep rounded-full for circles if any, but let's change it for buttons
content = content.replace(/rounded-full/g, 'rounded-sm'); 

// Replace specific fonts
content = content.replace(/font-serif/g, 'font-serif tracking-wide uppercase');

// Update banner h3 inline style
content = content.replace(/<h3 className="text-2xl font-bold font-serif tracking-wide uppercase mb-2">/g, '<h3 className="text-2xl font-bold mb-2 uppercase tracking-tight" style={{ fontFamily: \'var(--font-cinzel), serif\' }}>');

fs.writeFileSync('src/app/careers/page.tsx', content);
console.log('Updated careers/page.tsx');
