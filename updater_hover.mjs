import fs from 'fs';

const scraped = JSON.parse(fs.readFileSync('scraped_hover.json', 'utf8'));
let dataTs = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');

for (const [slug, gallery] of Object.entries(scraped)) {
  const galleryString = JSON.stringify(gallery, null, 4).replace(/"([^"]+)":/g, '$1:');
  
  // Find the block for this slug
  // The format is `"slug": { ... gallery: [ ... ] },`
  // We want to replace just the gallery part.
  const regex = new RegExp(`("${slug}":\\s*\\{[\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\](\\s*\\}(?:,|\\n))`);
  
  const match = dataTs.match(regex);
  if (match) {
    // Inject the new gallery string, making sure to indent it properly
    const replacement = match[1] + galleryString.replace(/\n/g, '\n    ') + match[2];
    dataTs = dataTs.replace(regex, replacement);
  } else {
    console.log(`Could not find block for slug: ${slug}`);
  }
}

fs.writeFileSync('src/app/services/[id]/data.ts', dataTs);
console.log('Updated data.ts with hover galleries!');
