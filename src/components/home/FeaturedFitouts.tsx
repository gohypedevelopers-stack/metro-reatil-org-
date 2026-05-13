"use client";

import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedFitouts = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const projects = [
    { name: "ROLEX BOUTIQUE", category: "RETAIL", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" },
    { name: "ZEN RESIDENCE", category: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
    { name: "METRO HEADQUARTERS", category: "OFFICE", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" },
    { name: "NOIR BRASSERIE", category: "F&B", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" },
    { name: "APPLE INNOVATION", category: "RETAIL", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { name: "LUMINA CAFE", category: "F&B", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" },
  ];

  const filtered = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-12 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            Explore Our Featured <br /> <span className="text-brand-gold italic" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Fitout Makeovers</span>
          </h2>
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            {['ALL', 'RESIDENTIAL', 'OFFICE', 'RETAIL', 'F&B'].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative pb-2 ${activeFilter === f ? 'text-brand-dark' : 'text-neutral-300 hover:text-neutral-500'}`}
              >
                {f}
                {activeFilter === f && (
                  <motion.div layoutId="filterUnderline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-dark" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-0 space-y-0">
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative group overflow-hidden break-inside-avoid"
            >
              <img src={p.img} alt={p.name} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-6 right-6">
                <div className="bg-black/60 backdrop-blur-md px-6 py-3 flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">{p.name}</span>
                  <ArrowRight size={14} className="text-brand-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFitouts;
