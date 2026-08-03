const fs = require('fs');
const files = [
  'src/components/contact/ContactForm.tsx',
  'src/components/home/ManufacturingSection.tsx',
  'src/components/home/WhatsAppCTA.tsx',
  'src/components/home/ServicesSlider.tsx',
  'src/app/portfolio/[category]/[subcategory]/page.tsx',
  'src/app/services/[id]/page.tsx',
  'src/app/design-styles/[id]/page.tsx'
];

const newClasses = "px-4 py-2 sm:px-6 md:px-8 sm:py-2.5 md:py-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest";

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // ContactForm
    if (file.includes('ContactForm.tsx')) {
      content = content.replace(/px-8 py-3 bg-brand-gold text-white text-\[10px\] font-bold uppercase tracking-\[0\.2em\]/g, 
        `${newClasses} bg-brand-gold text-white`);
    }
    // ManufacturingSection
    if (file.includes('ManufacturingSection.tsx')) {
      content = content.replace(/px-8 py-3 bg-brand-dark text-white text-\[10px\] font-bold uppercase tracking-widest/g, 
        `${newClasses} bg-brand-dark text-white`);
    }
    // WhatsAppCTA
    if (file.includes('WhatsAppCTA.tsx')) {
      content = content.replace(/px-7 md:px-12 py-5 rounded-full text-\[8px\] sm:text-\[10px\] font-bold uppercase tracking-\[0\.3em\]/g, 
        `${newClasses} rounded-full`);
    }
    // ServicesSlider
    if (file.includes('ServicesSlider.tsx')) {
      content = content.replace(/px-5 md:px-6 xl:px-8 py-2 md:py-3 bg-brand-dark text-white text-\[9px\] xl:text-\[10px\] font-bold uppercase tracking-widest/g, 
        `${newClasses} bg-brand-dark text-white`);
    }
    // portfolio subcategory
    if (file.includes('portfolio')) {
      content = content.replace(/py-4 text-center text-\[10px\] font-bold uppercase tracking-\[0\.3em\] bg-brand-dark text-white/g, 
        `text-center ${newClasses} bg-brand-dark text-white`);
    }
    // services/[id]
    if (file.includes('services')) {
      content = content.replace(/px-5 py-2\.5 text-\[9px\] sm:text-\[10px\] font-bold uppercase tracking-widest/g, 
        newClasses);
    }
    // design-styles/[id]
    if (file.includes('design-styles')) {
      content = content.replace(/px-8 py-3 text-\[10px\] font-bold uppercase tracking-widest/g, 
        newClasses);
    }
    
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
