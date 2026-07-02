import fs from 'fs';

const data = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');
const keys = [...data.matchAll(/"([^"]+)":\s*\{/g)].map(m => m[1]);
console.log(keys);
