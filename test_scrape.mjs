import fs from 'fs';
import { JSDOM } from 'jsdom';

fetch('https://halo.ae/services/joinery', { headers: { 'User-Agent': 'Mozilla/5.0' } })
  .then(r => r.text())
  .then(html => {
    // Save html to a file to inspect locally
    fs.writeFileSync('joinery.html', html);
    
    // We can also try a regex to find the string "Custom bar counters and vanity units"
    const match = html.match(/.{0,100}Custom bar counters and vanity units.{0,100}/g);
    console.log("Regex matches for the text:");
    console.log(match);
  });
