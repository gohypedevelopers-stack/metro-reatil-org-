"use client";

import { motion } from 'motion/react';
import React from 'react';

const AboutSummary = () => {
  return (
    <section className="py-20 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-8 block">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12 uppercase leading-tight text-white" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Precision in Every <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Square Foot</span>
            </h2>
            <div className="space-y-8 text-neutral-400 font-light leading-relaxed text-lg">
              <p>
                Metro Retail Solutions has established itself as a beacon of excellence in the Middle East's fit-out industry. We don't just execute blueprints; we understand the commercial pulse of retail and the ergonomic needs of modern workplaces.
              </p>
              <p>
                Our journey is defined by a commitment to quality that transcends standard industry practices. From our 20,000 sq.ft state-of-the-art joinery to our elite team of on-site engineers, every element of our operation is tuned to deliver turnkey perfection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] overflow-hidden rounded-sm relative z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Founder"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/30 z-0" />
              </div>
              <div className="col-span-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-6 block">The Visionary</span>
                <p className="text-white/80 text-sm font-light italic leading-relaxed mb-8">
                  "Design is not just what it looks like and feels like. Design is how it works. My goal was to create a bridge between artistic vision and technical precision."
                </p>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Founder Name</h4>
                <p className="text-brand-gold text-[9px] uppercase tracking-[0.3em] font-medium mt-1">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
