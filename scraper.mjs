import fs from 'fs';
import { JSDOM } from 'jsdom';

const services = [
  { url: 'https://halo.ae/services/fitout-dubai', slug: 'fitout' },
  { url: 'https://halo.ae/services/joinery', slug: 'carpentry' },
  { url: 'https://halo.ae/services/kitchens-wardrobes-dubai', slug: 'kitchens-wardrobes' },
  { url: 'https://halo.ae/services/decorative-paint', slug: 'decorative-paint' },
  { url: 'https://halo.ae/services/microcement-dubai', slug: 'microcement' },
  { url: 'https://halo.ae/services/terrazzo-dubai', slug: 'terrazzo' },
  { url: 'https://halo.ae/services/landscaping-pools-dubai', slug: 'landscaping-pools' },
  { url: 'https://halo.ae/services/automation-dubai', slug: 'automation' },
  { url: 'https://halo.ae/services/stretch-ceiling-dubai', slug: 'stretch-ceiling' },
  { url: 'https://halo.ae/services/halo-shield-dubai', slug: 'halo-shield' },
  { url: 'https://halo.ae/services/property-inspection-dubai', slug: 'property-inspection' },
  { url: 'https://halo.ae/services/mep-hvac-dubai', slug: 'mep-hvac' },
  { url: 'https://halo.ae/services/project-management-dubai', slug: 'project-management' },
  { url: 'https://halo.ae/services/decorative-paint/venetian-plasters', slug: 'venetian-plasters' },
  { url: 'https://halo.ae/services/decorative-paint/feature-walls', slug: 'feature-walls' },
  { url: 'https://halo.ae/services/decorative-paint/artistic-finishes', slug: 'artistic-finishes' },
  { url: 'https://halo.ae/services/customised-furniture-dubai', slug: 'customised-furniture' },
  { url: 'https://halo.ae/services/air-quality-dubai', slug: 'air-quality' },
  { url: 'https://halo.ae/services/contracting-dubai', slug: 'contracting' },
  { url: 'https://halo.ae/services/window-glazing-dubai', slug: 'window-glazing' },
  { url: 'https://halo.ae/services/tile-installation-dubai', slug: 'tile-installation' },
  { url: 'https://halo.ae/services/marble-installation-dubai', slug: 'marble-installation' },
  { url: 'https://halo.ae/services/gypsum-works-dubai', slug: 'gypsum-works' },
  { url: 'https://halo.ae/services/property-audits-dubai', slug: 'property-audits' },
  { url: 'https://halo.ae/services/authority-approvals-dubai', slug: 'authority-approvals' }
];

const cleanText = (text) => {
  if (!text) return '';
  return text
    .replace(/\bdubai\b/gi, '')
    .replace(/\bhalo\b/gi, 'Metro Retail')
    .replace(/\s+/g, ' ')
    .trim();
};

const resolveUrl = (url) => {
  if (url.startsWith('/')) {
    return `https://halo.ae${url}`;
  }
  return url;
};

async function scrape() {
  let newData = {};

  for (const service of services) {
    console.log(`Scraping ${service.url}...`);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(service.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      const html = await res.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;

      let title = document.querySelector('h1')?.textContent || '';
      if (!title) {
        title = document.querySelector('.page-header h2, .section-title h2')?.textContent || '';
      }
      title = cleanText(title) || service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      const pTags = Array.from(document.querySelectorAll('p')).map(p => cleanText(p.textContent)).filter(t => t.length > 30);
      let desc = pTags.slice(0, 3);
      if (desc.length === 0) {
        desc = [
          `Our expert ${title} services are designed to transform your spaces with precision and style.`,
          `With extensive experience in ${title}, we ensure that all our materials and installations meet the highest industry standards.`,
          `We manage the entire process seamlessly from initial concept through to final execution and handover.`
        ];
      }

      let images = Array.from(document.querySelectorAll('img')).map(img => img.src || img.getAttribute('data-src') || '');
      const bgElements = Array.from(document.querySelectorAll('[style*="background-image"]'));
      bgElements.forEach(el => {
        const bg = el.style.backgroundImage;
        if (bg) {
          const match = bg.match(/url\(['"]?(.*?)['"]?\)/);
          if (match && match[1]) images.push(match[1]);
        }
      });
      const preloads = Array.from(document.querySelectorAll('link[rel="preload"][as="image"]')).map(l => l.href);
      images = [...preloads, ...images];

      images = [...new Set(images)]
        .filter(src => src && !src.includes('logo') && !src.includes('svg') && !src.includes('data:image'))
        .map(resolveUrl);

      let heroImage = images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80';
      
      // Keep ALL images for the gallery, or at least everything but the hero image if there are multiple.
      let gallery = images;
      if (gallery.length === 0) {
        gallery = [heroImage];
      }

      newData[service.slug] = {
        title: title,
        tagline: `Premium ${title} Services`,
        heroImage: heroImage,
        desc: desc,
        stats: [
          { label: "Projects Completed", value: "300+", icon: "Award" },
          { label: "Client Satisfaction", value: "100%", icon: "CheckCircle2" },
          { label: "Expert Specialists", value: "25+", icon: "ShieldCheck" }
        ],
        process: [
          { step: "Initial Consultation", desc: `Understanding your specific requirements for ${title} and assessing the space.` },
          { step: "Design & Planning", desc: "Developing tailored solutions, material selection, and precise technical planning." },
          { step: "Execution Phase", desc: `Our expert technicians install and implement the ${title} with meticulous attention to detail.` },
          { step: "Final Handover", desc: "Comprehensive quality checks and final handover to ensure absolute perfection." }
        ],
        gallery: gallery
      };

    } catch (e) {
      console.error(`Failed to scrape ${service.url}: ${e.message}`);
    }
  }

  fs.writeFileSync('scraped.json', JSON.stringify(newData, null, 2));
  console.log('Scraped data written to scraped.json');
}

scrape();
