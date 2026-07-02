import fs from 'fs';

const services = {
  "fitout": "https://halo.ae/services/fitout-dubai",
  "joinery": "https://halo.ae/services/joinery",
  "kitchens-wardrobes": "https://halo.ae/services/kitchens-wardrobes-dubai",
  "decorative-paint": "https://halo.ae/services/decorative-paint",
  "microcement": "https://halo.ae/services/microcement-dubai",
  "terrazzo": "https://halo.ae/services/terrazzo-dubai",
  "landscaping-pools": "https://halo.ae/services/landscaping-pools-dubai",
  "automation": "https://halo.ae/services/automation-dubai",
  "stretch-ceiling": "https://halo.ae/services/stretch-ceiling-dubai",
  "halo-shield": "https://halo.ae/services/halo-shield-dubai",
  "property-inspection": "https://halo.ae/services/property-inspection-dubai",
  "mep-hvac": "https://halo.ae/services/mep-hvac-dubai",
  "project-management": "https://halo.ae/services/project-management-dubai",
  "venetian-plasters": "https://halo.ae/services/decorative-paint/venetian-plasters",
  "feature-walls": "https://halo.ae/services/decorative-paint/feature-walls",
  "artistic-finishes": "https://halo.ae/services/decorative-paint/artistic-finishes",
  "customised-furniture": "https://halo.ae/services/customised-furniture-dubai",
  "air-quality": "https://halo.ae/services/air-quality-dubai",
  "contracting": "https://halo.ae/services/contracting-dubai",
  "window-glazing": "https://halo.ae/services/window-glazing-dubai",
  "tile-installation": "https://halo.ae/services/tile-installation-dubai",
  "marble-installation": "https://halo.ae/services/marble-installation-dubai",
  "gypsum-works": "https://halo.ae/services/gypsum-works-dubai",
  "property-audits": "https://halo.ae/services/property-audits-dubai",
  "authority-approvals": "https://halo.ae/services/authority-approvals-dubai"
};

const cleanText = (text) => {
  return text.replace(/Dubai|Halo/gi, '').replace(/\s+/g, ' ').trim();
};

async function run() {
  let scraped = {};
  
  for (const [slug, url] of Object.entries(services)) {
    console.log(`Scraping hover for ${url}...`);
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'text/html' } });
      const html = await res.text();
      
      const regex = /\{\\"title\\":\\"([^"\\]+)\\",\\"description\\":\\"([^"]+)\\",.*?\\"image\\":\\"([^"\\]+)\\"/g;
      const matches = [...html.matchAll(regex)];
      
      let galleryObjects = [];
      
      for (const m of matches) {
        if (galleryObjects.length >= 6) break;
        
        let title = m[1].replace(/\\u0026/g, '&');
        let fullDesc = m[2];
        let img = m[3];
        if (!img.startsWith('http')) img = 'https://halo.ae' + img;
        
        const decodedDesc = fullDesc.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n');
        
        const parts = decodedDesc.split('\n');
        const mainLine = parts[0];
        
        const tags = (mainLine.match(/#[\w-]+/g) || []).map(t => cleanText(t.substring(1)));
        const description = cleanText(mainLine.replace(/#[\w-]+/g, ''));
        
        const bullets = parts.slice(1)
          .filter(p => p.trim().startsWith('-'))
          .map(p => cleanText(p.trim().substring(1).trim()));
          
        title = cleanText(title);
        
        galleryObjects.push({
          img,
          title,
          description,
          tags,
          bullets,
          buttonText: title ? `${title.toUpperCase()} \u2192` : 'VIEW DETAILS \u2192'
        });
      }
      
      // Fallback for pages without hover content
      if (galleryObjects.length === 0) {
        const fallbackRegex = /<img[^>]+src=["'](\/images\/[^"']+)["'][^>]*>/g;
        const fallbackMatches = [...html.matchAll(fallbackRegex)];
        let count = 0;
        for (const m of fallbackMatches) {
          if (count >= 6) break;
          const src = m[1];
          if (src.includes('logo') || src.includes('svg') || src.includes('previews')) continue;
          
          galleryObjects.push({
            img: 'https://halo.ae' + src,
            title: '',
            description: '',
            tags: [],
            bullets: [],
            buttonText: 'VIEW DETAILS \u2192'
          });
          count++;
        }
      }
      
      scraped[slug] = galleryObjects;
    } catch (e) {
      console.log(`Failed to scrape ${url}:`, e.message);
    }
  }
  
  fs.writeFileSync('scraped_hover.json', JSON.stringify(scraped, null, 2));
  console.log('Done!');
}

run();
