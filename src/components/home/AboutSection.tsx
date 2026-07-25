import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-32 bg-[#FAFAFA] text-brand-dark relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">

          {/* Content Column */}
          <div className="lg:col-span-5 lg:col-start-2 relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">


            <h2 className="mobile-heading-balance text-center lg:text-left text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 md:mb-10 uppercase leading-tight w-full" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              EXECUTING <br />
              <span className="text-brand-gold italic block mt-2 text-xl sm:text-2xl md:text-4xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Turnkey Fit-Outs</span>
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

            <p className="text-base md:text-xl text-neutral-800 mb-6 md:mb-8 leading-relaxed font-light">
              At Metro Retail Solutions, we are master builders of turnkey physical environments. More than just design, our focus is absolute execution: transforming raw shell-and-core spaces into fully operational, premium brand showcases.
            </p>

            <p className="text-sm md:text-base text-neutral-500 mb-8 md:mb-12 leading-relaxed">
              By managing every engineering trade—civil works, certified MEP systems, HVAC networks, and in-house bespoke carpentry fabrication—under a single command, we guarantee a flawless handover.
            </p>


          </div>

          {/* Image Column */}
          <div className="hidden lg:block lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-gold/10 transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200">
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
                <div className="text-3xl font-light" style={{ fontFamily: 'var(--font-playfair), serif' }}>45</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Days<br />Delivery</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
