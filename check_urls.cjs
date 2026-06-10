const fs = require('fs');
const code = fs.readFileSync('c:/Users/GHM/Documents/Metro Retail/metro/src/data/featuredFitouts.ts', 'utf-8');
const urls = [...code.matchAll(/https:\/\/images\.unsplash\.com\/[^\"\'\\]+/g)].map(m => m[0]);
const uniqueUrls = [...new Set(urls)];

async function check() {
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        console.log('BROKEN:', url, res.status);
      }
    } catch (e) {
      console.log('ERROR:', url, e.message);
    }
  }
  console.log('Done checking ' + uniqueUrls.length + ' URLs.');
}
check();
