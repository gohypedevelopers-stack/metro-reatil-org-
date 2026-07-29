"use client";

import { motion } from 'motion/react';
import React from 'react';

const AboutSummary = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-6 relative flex flex-col items-center text-center xl:items-start xl:text-left"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-8 block text-center xl:text-left">Our Legacy</span>
            <h2 className="mobile-heading-balance text-center xl:text-left text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif mb-8 md:mb-12 uppercase leading-tight text-white tracking-tighter xs:tracking-tight md:tracking-normal" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Precision in Every <br className="hidden lg:inline" /> <span className="text-brand-gold italic inline lg:block mt-0 lg:mt-2 ml-1.5 lg:ml-0 text-2xl md:text-3xl lg:text-4xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Square Foot</span>
            </h2>
            <div className="space-y-6 md:space-y-8 text-neutral-400 font-light leading-relaxed text-sm md:text-base lg:text-lg text-center xl:text-left" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
              <p>
                Metro Retail Solutions has established itself as a beacon of excellence in the Middle East's fit-out industry. We don't just execute blueprints; we understand the commercial pulse of retail and the ergonomic needs of modern workplaces.
              </p>
              <p>
                Our journey is defined by a commitment to quality that transcends standard industry practices. From our 9,000 sq.ft state-of-the-art carpentry to our elite team of on-site engineers, every element of our operation is tuned to deliver turnkey perfection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-6 relative mt-16 xl:mt-0"
          >
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
              <div className="xl:col-span-6 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] overflow-hidden rounded-sm relative z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    className="w-full h-full object-cover transition-all duration-1000"
                    alt="Founder"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/30 z-0" />
              </div>
              <div className="xl:col-span-6 flex flex-col items-center text-center xl:items-start xl:text-left mt-8 xl:mt-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.5em] text-brand-gold mb-4 lg:mb-6 block text-center xl:text-left">The Visionary</span>
                <p className="text-white/80 text-xs lg:text-sm font-light italic leading-relaxed mb-6 lg:mb-8 text-center xl:text-left">
                  "Design is not just what it looks like and feels like. Design is how it works. My goal was to create a bridge between artistic vision and technical precision."
                </p>
                <h4 className="text-white font-bold text-xs lg:text-sm uppercase tracking-widest text-center xl:text-left">Founder Name</h4>
                <p className="text-brand-gold text-[8px] lg:text-[9px] uppercase tracking-[0.3em] font-medium mt-1 text-center xl:text-left">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
