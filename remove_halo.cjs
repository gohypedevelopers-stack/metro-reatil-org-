const fs = require('fs');

const dataFile = 'c:\\Users\\GHM\\Documents\\Metro Retail\\metro\\src\\app\\services\\[id]\\data.ts';
let content = fs.readFileSync(dataFile, 'utf8');

// The block starts with `  "halo-shield": {` and ends with `  },\n  "property-inspection": {`
// Let's use a regex to match it.
const regex = /  "halo-shield": \{\s+title:[\s\S]*?  \},\n(?=  "property-inspection":)/;
content = content.replace(regex, '');

fs.writeFileSync(dataFile, content);
console.log('Removed halo-shield from data.ts');
