import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-[#FAFAFA] text-brand-dark relative overflow-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* Content Column */}
          <div className="lg:col-span-6 relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">


            <h2 className="section-title text-brand-dark w-full" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              EXECUTING <br />
              <span className="text-brand-gold italic block mt-2 whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Turnkey Fit-Outs</span>
            </h2>

            {/* Mobile Image (hidden on lg) */}
            <div className="w-full lg:hidden relative group mb-8 aspect-[4/5] overflow-hidden bg-neutral-200">
              <img
                src="/high_res_mall_hero.png"
                alt="Retail Design Excellence"
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
              Metro Retail Solutions is a turnkey fit-out company handling complete MEP, civil, and interior works, with over 25+ years of experience.
            </p>

            <p className="text-base text-neutral-500 leading-relaxed font-light">
              We feature in-house manufacturing of complete modular fixtures (wooden, metal, and powder coat units) at our dedicated facilities in Delhi and Greater Noida. Equipped with the latest machinery and a skilled technical workforce operating 24x7, we provide exceptional retail fixtures and everything under one roof.
            </p>


          </div>

          {/* Image Column */}
          <div className="hidden lg:block lg:col-span-6 relative group">
            <div className="absolute inset-0 bg-brand-gold/10 transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="w-full aspect-square relative overflow-hidden bg-neutral-200">
              <img
                src="/high_res_mall_hero.png"
                alt="Retail Design Excellence"
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-6 md:-left-12 bottom-12 bg-white p-6 shadow-2xl flex items-center gap-4 border-l-4 border-brand-gold hidden sm:flex">
              <div>
                <div className="text-3xl font-light" style={{ fontFamily: 'var(--font-playfair), serif' }}>25+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Years<br />Excellence</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

