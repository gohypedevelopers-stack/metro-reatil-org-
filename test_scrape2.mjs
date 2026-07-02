import fs from 'fs';

const html = fs.readFileSync('joinery.html', 'utf8');

const regex = /\\"title\\":\\"(.*?)\\",\\"description\\":\\"(.*?)\\".*?\\"image\\":\\"(.*?)\\"/g;
const matches = [...html.matchAll(regex)];

console.log(`Found ${matches.length} matches`);
console.log(matches.slice(0, 2).map(m => ({
  title: m[1],
  desc: m[2],
  img: m[3]
})));
