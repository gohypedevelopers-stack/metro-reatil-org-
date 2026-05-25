"use client";

import { motion } from 'motion/react';
import React from 'react';

const ManufacturingSection = () => {
  return (
    <section className="py-20 bg-[#f9f9f8]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-brand-dark mb-8 md:mb-10 uppercase leading-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              VISIT OUR IN-HOUSE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Manufacturing Unit</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light leading-relaxed mb-12 max-w-xl">
              India's Most trusted Fitout and In-house manufacturing specialist. Our 20,000 sq.ft facility is equipped with the latest machinery to bring complex designs to life.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-4xl font-serif text-brand-gold mb-2 block">20K+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Square Feet</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-brand-gold mb-2 block">100+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Master Artisans</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-[3/4] object-cover rounded-sm" />
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-sm" />
            </div>
            <div className="pt-12 space-y-6">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-sm" />
              <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-[3/4] object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
