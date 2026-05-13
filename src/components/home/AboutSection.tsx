"use client";

import { motion } from 'motion/react';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-[#fdfdfb] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square rounded-full overflow-hidden border-[1px] border-brand-gold/20 p-4"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Corporate Design Excellence"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-brand-dark/10" />
              </div>
            </motion.div>
            
            {/* Circular Text Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-32 h-32 hidden md:block"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-gold">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[8px] uppercase tracking-[0.2em] font-bold">
                  <textPath xlinkHref="#circlePath">
                    Metro Retail Solutions • Excellence • Innovation •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          <div className="lg:pl-12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
                The Foundation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl text-brand-dark mb-12 leading-[1.1] uppercase font-light"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Designing <br />
              <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Tomorrow's Spaces</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-neutral-500 text-lg font-light leading-relaxed">
                At Metro Retail Solutions, we don't just build spaces; we architect experiences. Our approach to interior design is rooted in the fusion of brand identity and spatial ergonomics—ensuring every boutique, office, and lounge we create is as functional as it is visually arresting.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="group">
                  <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-150 transition-transform" />
                    Vision
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed border-l border-neutral-100 pl-4">
                    To redefine the standard of luxury interiors across the GCC and beyond.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-150 transition-transform" />
                    Mission
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed border-l border-neutral-100 pl-4">
                    Delivering turnkey excellence through innovation and artisan craft.
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
