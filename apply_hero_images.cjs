const fs = require('fs');

const mappings = {
  'src/app/about/page.tsx': '/hero/elegant_cafe_interior_1785750878309.png',
  'src/app/services/page.tsx': '/hero/modern_office_space_1785750868176.png',
  'src/app/portfolio/PortfolioClient.tsx': '/hero/contemporary_commercial_fitout_1785750899227.png',
  'src/app/design-styles/page.tsx': '/hero/luxury_fashion_boutique_1785750858524.png',
  'src/app/blog/page.tsx': '/hero/fine_dining_restaurant_1785750888145.png',
  'src/app/manufacturing/page.tsx': '/hero/premium_cosmetic_store_1785750909676.png',
  'src/app/contact/page.tsx': '/hero/minimalist_jewelry_store_1785750921653.png',
  'src/app/careers/page.tsx': '/hero/retail_mall_showroom_1785750848833.png' // re-use
};

for (const [file, image] of Object.entries(mappings)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the first src="/..." or src="https://..." 
    // Usually the hero image is the first one in the file.
    // We'll replace it carefully.
    content = content.replace(/src=["'](?:[^"']+)["']/, `src="${image}"`);
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  } else {
    console.log('Not found: ' + file);
  }
}
