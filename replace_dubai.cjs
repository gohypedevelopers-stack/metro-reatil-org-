const fs = require('fs');
const path = require('path');

const files = [
  'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\[id]\\data.ts',
  'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\page.tsx'
];

let totalReplacements = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // First, fix instances of "Dubai & India" so they don't become "India & India"
  content = content.replace(/\bDubai & India\b/g, 'India');
  content = content.replace(/\bDubai and India\b/g, 'India');
  
  // Then replace the rest
  const matches = content.match(/\bDubai\b/g);
  if (matches) {
    totalReplacements += matches.length;
    content = content.replace(/\bDubai\b/g, 'India');
  }
  
  fs.writeFileSync(file, content, 'utf8');
}

console.log(`Successfully replaced Dubai with India. Total occurrences replaced: ${totalReplacements}`);
