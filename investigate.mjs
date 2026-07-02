import fs from 'fs';
import { JSDOM } from 'jsdom';

fetch('https://halo.ae/services/joinery', { headers: { 'User-Agent': 'Mozilla/5.0' } })
  .then(r => r.text())
  .then(html => {
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    
    // Find images and their containers
    const containers = Array.from(doc.querySelectorAll('.elementor-widget-container, .elementor-column, div, section'));
    
    // We are looking for text like "Custom bar counters and vanity units"
    const targets = Array.from(doc.querySelectorAll('*')).filter(el => 
      el.textContent && el.textContent.includes('Custom bar counters')
    );
    
    if (targets.length > 0) {
      // Find the common ancestor of the image and the text
      const target = targets[targets.length - 1]; // get deepest element
      console.log('Target found:', target.tagName, target.className);
      console.log('HTML:\n', target.parentElement.parentElement.outerHTML);
    } else {
      console.log('Target text not found.');
    }
  });
