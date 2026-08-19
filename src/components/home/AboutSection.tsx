import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-8 md:py-16 bg-[#FAFAFA] text-brand-dark relative overflow-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 xl:gap-16 items-center">

          {/* Image Column (Left, like ServicesSlider) */}
          <div className="hidden lg:block lg:col-span-7 relative group">
            <div className="w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-sm shadow-lg md:shadow-2xl">
              <img
                src="/hero/retail_mall_showroom_1785750848833.png"
                alt="Retail Design Excellence"
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-5 border-l-4 border-brand-gold hidden sm:flex transform transition-transform duration-700 group-hover:-translate-y-2">
              <div>
                <div className="text-4xl font-light text-brand-dark" style={{ fontFamily: 'var(--font-playfair), serif' }}>25+</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 mt-1">Years of<br />Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Column (Right, like ServicesSlider) */}
          <div className="lg:col-span-5 lg:pl-6 xl:pl-10 relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Mobile Heading */}
            <div className="block lg:hidden text-center mb-8 relative z-10">
              <h2 className="section-title text-brand-dark w-full" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                EXECUTING <span className="text-brand-gold italic font-normal ml-2 whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Turnkey Fit-Outs</span>
              </h2>
            </div>

            <h2 className="hidden lg:block section-title text-brand-dark w-full mb-6 md:mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              EXECUTING <br />
              <span className="text-brand-gold italic block mt-2 whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Turnkey Fit-Outs</span>
            </h2>

            {/* Mobile Image (hidden on lg) */}
            <div className="w-full lg:hidden relative group mb-8 aspect-video rounded-sm overflow-hidden shadow-lg">
              <img
                src="/hero/retail_mall_showroom_1785750848833.png"
                alt="Retail Design Excellence"
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>

            <p className="text-neutral-500 text-sm xl:text-base font-light leading-relaxed mb-6 md:mb-8 xl:mb-12">
              Metro Retail Solutions is a turnkey fit-out company handling complete MEP, civil, and interior works, with over 25+ years of experience.
              <br /><br />
              We feature in-house manufacturing of complete modular fixtures (wooden, metal, and powder coat units) at our dedicated facilities in Delhi and Greater Noida. Equipped with the latest machinery and a skilled technical workforce operating 24x7, we provide exceptional retail fixtures and everything under one roof.
            </p>

            <ul className="grid grid-cols-2 gap-3 md:gap-4 xl:gap-6 mb-8 md:mb-8 xl:mb-12 w-full text-left">
               <li className="flex items-start justify-start gap-2 xl:gap-3 text-brand-dark text-[8px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-widest">
                  <CheckCircle size={14} className="text-brand-gold w-3 h-3 xl:w-4 xl:h-4 shrink-0 mt-[1px] md:mt-0" />
                  <span>In-House Manufacturing</span>
               </li>
               <li className="flex items-start justify-start gap-2 xl:gap-3 text-brand-dark text-[8px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-widest">
                  <CheckCircle size={14} className="text-brand-gold w-3 h-3 xl:w-4 xl:h-4 shrink-0 mt-[1px] md:mt-0" />
                  <span>24x7 Operations</span>
               </li>
               <li className="flex items-start justify-start gap-2 xl:gap-3 text-brand-dark text-[8px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-widest">
                  <CheckCircle size={14} className="text-brand-gold w-3 h-3 xl:w-4 xl:h-4 shrink-0 mt-[1px] md:mt-0" />
                  <span>Pan India Presence</span>
               </li>
               <li className="flex items-start justify-start gap-2 xl:gap-3 text-brand-dark text-[8px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-widest">
                  <CheckCircle size={14} className="text-brand-gold w-3 h-3 xl:w-4 xl:h-4 shrink-0 mt-[1px] md:mt-0" />
                  <span>Complete MEP & Civil</span>
               </li>
            </ul>

            <a href="/about" className="inline-flex items-center justify-center gap-2 md:gap-3 xl:gap-4 px-4 py-2 sm:px-6 md:px-8 sm:py-2.5 md:py-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest bg-brand-dark text-white hover:bg-brand-gold transition-all rounded-full w-[max-content]">
              Discover Our Story <ArrowRight size={14} className="w-3 h-3 xl:w-4 xl:h-4 shrink-0" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

