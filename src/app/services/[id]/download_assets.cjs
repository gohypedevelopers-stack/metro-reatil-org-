const fs = require('fs');
const path = require('path');
const https = require('https');

const dataFilePath = path.join(__dirname, 'data.ts');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Regex to find all halo.ae image URLs
const urlRegex = /https:\/\/halo\.ae\/images\/[^"\']+/g;
const matches = fileContent.match(urlRegex) || [];

// Extract unique clean URLs and their target paths
const uniqueUrls = [];
const urlMap = new Map();

for (const match of matches) {
  // Replace HTML entity amp; if present
  const cleanMatch = match.replace(/&amp;/g, '&');
  // Get base URL without query parameters for local saving
  const urlObj = new URL(cleanMatch);
  const cleanUrl = urlObj.origin + urlObj.pathname;
  
  if (!urlMap.has(cleanUrl)) {
    urlMap.set(cleanUrl, cleanMatch);
    uniqueUrls.push({
      originalUrl: cleanMatch,
      cleanUrl: cleanUrl,
      relativePath: urlObj.pathname.substring(1) // e.g. "images/fitout_dubai_r2/structural.webp"
    });
  }
}

console.log(`Found ${uniqueUrls.length} unique image URLs to download.`);

// Helper function to download a file
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // delete partial file on error
      reject(err);
    });
  });
}

// Download all images sequentially or with concurrency limit
async function main() {
  const publicDir = path.join(__dirname, '../../../../public');
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < uniqueUrls.length; i++) {
    const item = uniqueUrls[i];
    const dest = path.join(publicDir, item.relativePath);
    
    // Check if file already exists to avoid duplicate downloads
    if (fs.existsSync(dest)) {
      console.log(`[${i+1}/${uniqueUrls.length}] Already exists: ${item.relativePath}`);
      successCount++;
      continue;
    }
    
    console.log(`[${i+1}/${uniqueUrls.length}] Downloading ${item.originalUrl} to ${item.relativePath}...`);
    try {
      await downloadFile(item.originalUrl, dest);
      successCount++;
    } catch (err) {
      console.error(`Failed to download ${item.originalUrl}:`, err.message);
      failCount++;
    }
  }
  
  console.log(`Downloads finished. Success: ${successCount}, Failed: ${failCount}`);
  
  // Now replace all URLs in data.ts!
  let newContent = fileContent;
  
  // Replace each matched URL string with its local equivalent
  for (const match of matches) {
    const cleanMatch = match.replace(/&amp;/g, '&');
    const urlObj = new URL(cleanMatch);
    const localPath = urlObj.pathname; // e.g. "/images/fitout_dubai_r2/structural.webp"
    
    // Escape special characters in regex
    const escapedMatch = match.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const matchRegex = new RegExp(escapedMatch, 'g');
    newContent = newContent.replace(matchRegex, localPath);
  }
  
  fs.writeFileSync(dataFilePath, newContent, 'utf8');
  console.log('Successfully updated data.ts references to local images!');
}

main();
