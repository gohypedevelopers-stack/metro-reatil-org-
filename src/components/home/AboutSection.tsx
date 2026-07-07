"use client";

import { motion } from 'motion/react';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="pt-20 pb-20 md:pt-32 md:pb-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-end md:text-left mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6 justify-center md:justify-start"
            >
              <span className="w-16 h-[1px] bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                The Foundation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl text-brand-dark leading-[1] uppercase font-light tracking-tight text-center md:text-left"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Executing <br />
              <span className="text-brand-gold italic font-normal block mt-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Turnkey Fit-Outs</span>
            </motion.h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative shadow-2xl">
              <img
                src="/high_res_mall_hero.png"
                alt="Retail Design Excellence"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-gold/30 hidden md:block rounded-bl-[40px]" />
          </motion.div>

          {/* Right Column - Text & Stats */}
          <div className="lg:col-span-7 lg:pt-12 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <p className="text-neutral-600 text-xl md:text-2xl font-light leading-relaxed mb-12 text-center lg:text-left" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                At Metro Retail Solutions, we are master builders of turnkey physical environments. More than just design, our focus is absolute execution: transforming raw shell-and-core spaces into fully operational, premium brand showcases.
              </p>
              
              <p className="text-neutral-500 text-base md:text-lg font-light leading-relaxed mb-12 text-center lg:text-left">
                By managing every engineering trade—civil works, certified MEP systems, HVAC networks, and in-house bespoke carpentry fabrication—under a single command, we guarantee a flawless handover.
              </p>
              
              <div className="w-full h-[1px] bg-neutral-200 mb-12" />

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 text-center sm:text-left">
                <div className="relative pl-0 sm:pl-6 flex flex-col items-center sm:items-start">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-gold to-transparent hidden sm:block" />
                  <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-3">
                    Vision
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed text-center sm:text-left">
                    To redefine the standard of luxury interiors across the GCC and beyond.
                  </p>
                </div>
                <div className="relative pl-0 sm:pl-6 flex flex-col items-center sm:items-start">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-gold to-transparent hidden sm:block" />
                  <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-3">
                    Execution Mission
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed text-center sm:text-left">
                    Delivering high-performance, structurally certified commercial spaces on time and on budget.
                  </p>
                </div>
                <div className="relative pl-0 sm:pl-6 sm:col-span-2 xl:col-span-1 flex flex-col items-center sm:items-start">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-gold to-transparent hidden sm:block" />
                  <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-3">
                    Rapid Delivery
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed text-center sm:text-left">
                    Delivering projects within 45 days, providing comprehensive coverage across pan-India from East to West.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
