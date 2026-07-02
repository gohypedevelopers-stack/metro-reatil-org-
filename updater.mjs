import fs from 'fs';

const scraped = JSON.parse(fs.readFileSync('scraped.json', 'utf8'));
let dataTs = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');

const wallCoveringEnd = dataTs.indexOf('  "fitout": {');
if (wallCoveringEnd !== -1) {
  dataTs = dataTs.substring(0, wallCoveringEnd).trim();
  if (dataTs.endsWith(',')) dataTs = dataTs.slice(0, -1);
} else {
  dataTs = dataTs.replace(/};\s*$/, '').trim();
}

let newContent = ',\n';
for (const [slug, item] of Object.entries(scraped)) {
  const statsString = item.stats.map(s => `{ label: "${s.label}", value: "${s.value}", icon: ${s.icon} }`).join(', ');
  const processString = JSON.stringify(item.process);
  const galleryString = JSON.stringify(item.gallery);
  const descString = JSON.stringify(item.desc);
  
  newContent += `  "${slug}": {
    title: "${item.title}",
    tagline: "${item.tagline}",
    heroImage: "${item.heroImage}",
    desc: ${descString},
    stats: [
      ${statsString}
    ],
    process: ${processString},
    gallery: ${galleryString}
  },\n`;
}

newContent = newContent.trim().slice(0, -1);
newContent += '\n};\n';

fs.writeFileSync('src/app/services/[id]/data.ts', dataTs + newContent);
console.log('Updated data.ts!');
