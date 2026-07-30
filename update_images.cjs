const fs = require('fs');
const path = require('path');

const dataFile = 'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\[id]\\data.ts';
let content = fs.readFileSync(dataFile, 'utf8');

// Mapping of sub-service slugs or titles to Unsplash photo IDs.
const imageMap = {
  // Retail
  "retail-store-design": "1567401893414-76b7b1e5a7a5",
  "luxury-retail-interior-design": "1441986300917-64674bd600d8",
  "store-fitout-company": "1555529902-5261145633bf",
  "retail-fitout-services": "1581373449483-374456832f05",
  "boutique-interior-design": "1441984904996-e0b6ba687e04",
  "shop-interior-design-company": "1604719312366-02e0c707d81a",
  "flagship-store-design": "1558769132-cb1fac08b14b",
  "pop-up-store-design-services": "1579298245158-33e8f568f7d3",
  "retail-space-design-experts": "1556740738-f6a46e114ece",
  "retail-commercial-fitout": "1560264280-88b68371db39",
  
  // Office
  "office-interior-design": "1497366754035-f200968a6e72",
  "modern-office-interior-design": "1497211417189-d411553015ed",
  "commercial-office-design": "1524758631624-e2822e304c36",
  "corporate-office-interior": "1504384308090-c894fdcc538d",
  "turnkey-office-fitout": "1497366811353-6870744d04b2",
  "office-renovation-services": "1531973486364-5fa64260d752",
  "luxury-office-design": "1517502884422-41eaead166d4",
  "office-space-planning": "1522071820081-009f0129c71c",
  "workspace-interior-solutions": "1582653291997-059a56958d4a",
  
  // Restaurant
  "restaurant-interior-design": "1517248135467-4c7edcad34c4", 
  "cafe-interior-design-services": "1509042239860-f550ce710b93",
  "restaurant-fitout-company": "1555396273-367ea4eb4db5",
  "fine-dining-interior-design": "1550966871-3ed3cdb5ed0c",
  "luxury-restaurant-design": "1544148103-0773bf10d330",
  "fast-food-restaurant-design": "1552566626-52f8b828add9",
  "food-court-interior-design": "1525648199593-ce5cafe386d8",
  "restaurant-renovation-experts": "1564834724105-918b73d1b9e0",
  "f-b-interior-design": "1551632436-421b5b4cc601",
  "turnkey-restaurant-fitout": "1528605248644-14bf524458f3",
  
  // Commercial Contractors
  "commercial-interior-design": "1497366858526-0766cadbe8fa",
  "commercial-fitout-company": "1504307651254-35680f356dfd",
  "interior-design-build": "1581452715108-014fea111204",
  "turnkey-interior-solutions": "1503387762-592deb58ef4e",
  "commercial-interior-contractors": "1582268611958-ebfd161ef9cf",
  
  // Microcement
  "microcement-flooring-services": "1612404730960-5c71577fca11"
};

let matchCount = 0;

for (const [slug, photoId] of Object.entries(imageMap)) {
  const galleryRegex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?img:\\s*")[^"]+(")`, 'g');
  content = content.replace(galleryRegex, (match, p1, p2) => {
    matchCount++;
    return `${p1}https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&q=80&w=800${p2}`;
  });

  const blockRegex = new RegExp(`("${slug}":\\s*{[\\s\\S]*?)(heroImage:\\s*")[^"]+(")`, 'g');
  content = content.replace(blockRegex, (match, p1, p2, p3) => {
    matchCount++;
    return `${p1}${p2}https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&q=80&w=1200${p3}`;
  });
  
  const nestedGalleryRegex = new RegExp(`("${slug}":\\s*{[\\s\\S]*?gallery:\\s*\\[\\s*{\\s*img:\\s*")[^"]+(")`, 'g');
  content = content.replace(nestedGalleryRegex, (match, p1, p2) => {
    matchCount++;
    return `${p1}https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&q=80&w=800${p2}`;
  });
}

fs.writeFileSync(dataFile, content, 'utf8');
console.log(`Replaced images. Matched occurrences: ${matchCount}`);
