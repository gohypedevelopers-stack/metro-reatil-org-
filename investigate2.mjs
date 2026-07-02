import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('joinery.html', 'utf8');
const dom = new JSDOM(html);
const doc = dom.window.document;

const cards = Array.from(doc.querySelectorAll('.res-justified-card'));
console.log(`Found ${cards.length} cards.`);

cards.forEach(card => {
  const img = card.querySelector('img')?.src;
  const title = card.querySelector('.res-justified-card__title')?.textContent;
  const description = card.querySelector('.res-justified-card__description')?.textContent;
  const tags = Array.from(card.querySelectorAll('.res-justified-card__tag')).map(t => t.textContent);
  const bullets = Array.from(card.querySelectorAll('.res-justified-card__list li')).map(l => l.textContent);
  const button = card.querySelector('.res-justified-card__link')?.textContent;
  
  console.log({
    img, title, description, tags, bullets, button
  });
});
