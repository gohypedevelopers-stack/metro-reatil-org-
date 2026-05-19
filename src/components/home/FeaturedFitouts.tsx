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
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-12 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            EXPLORE OUR FEATURED <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Fitout Makeovers</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative group overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] border-[0.5px] border-white/5"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500" />

              {/* Luxury Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.4em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {p.category}
                </span>
                <h3 className="text-xl md:text-2xl text-white font-serif uppercase tracking-tight mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {p.name}
                </h3>
                <div className="w-12 h-[1px] bg-brand-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150" />
              </div>

              {/* View Project Link */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                <ArrowRight size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFitouts;
