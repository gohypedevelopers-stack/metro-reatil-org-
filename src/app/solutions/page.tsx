"use client";

import React from 'react';
import { motion } from 'motion/react';
import FullServicesSection from '../../components/home/FullServicesSection';

export default function SolutionsPage() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mobile-heading-balance text-4xl md:text-6xl lg:text-7xl font-serif text-brand-dark mb-8 leading-tight uppercase"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              ENGINEERING EXCELLENCE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Into Every Square Meter</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-500 text-lg font-light leading-relaxed"
            >
              We provide integrated design and build services that bridge the gap between architectural vision and operational reality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Complete Range of Services */}
      <FullServicesSection />

      {/* Expertise Banner - Sharpened */}
      <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full border-[100px] border-white/20 scale-150 rotate-12" />
        </div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>In-House Manufacturing Facility</h3>
              <p className="text-neutral-400 text-lg font-light leading-relaxed">
                Our private production facilities allow us to maintain total control over quality, timelines, and costs for all custom elements, from joinery to technical components.
              </p>
            </div>
            <a href="/about" className="w-full sm:w-auto text-center px-8 md:px-12 py-5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all duration-500">
              Learn More About Our Facility
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
