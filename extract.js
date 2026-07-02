import fs from 'fs';
const content = fs.readFileSync('C:/Users/GHM/.gemini/antigravity-ide/brain/e0b3280c-5d70-47df-8b1b-77d2529b4cbe/.system_generated/steps/52/content.md', 'utf8');
const urls = content.match(/\/images\/joinery-portraits\/[^\"\'\s]+\.(jpg|webp)/g);
console.log([...new Set(urls)]);
