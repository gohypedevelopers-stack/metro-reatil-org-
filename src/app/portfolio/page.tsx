"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Filter, ChevronRight } from 'lucide-react';

const CATEGORIES = ["All", "Mall Stores", "High-Street", "Airport Retail", "Boutiques"];

const PROJECTS = [
  {
    title: "Vogue Boutique",
    category: "Mall Stores",
    location: "Dubai Mall, UAE",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80",
    desc: "A high-end fashion boutique featuring custom joinery and integrated lighting systems."
  },
  {
    title: "Urban Travel Luggage",
    category: "Airport Retail",
    location: "DXB Terminal 3, UAE",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    desc: "Specialized airport retail fit-out for a global luggage brand with high-security display systems."
  },
  {
    title: "Elegance Apparel",
    category: "High-Street",
    location: "Jumeirah Road, Dubai",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    desc: "Turnkey execution for a lifestyle brand, including full civil and MEP works."
  },
  {
    title: "Classic Couture",
    category: "Boutiques",
    location: "Galleria Mall, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1550966842-2849a2220822?auto=format&fit=crop&q=80",
    desc: "Bespoke interior design and execution for a luxury couture brand."
  },
  {
    title: "Zenith Offices",
    category: "Commercial",
    location: "DIFC, Dubai",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    desc: "Minimalist executive suite with panoramic views and seamless tech integration."
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-white pt-32">
      {/* Header */}
      <section className="py-24 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-8 leading-tight">
                Selected <span className="italic text-brand-gold">Works</span>
              </h1>
              <p className="text-neutral-500 text-lg font-light leading-relaxed">
                A showcase of our commitment to excellence across retail, commercial, and residential sectors.
              </p>
            </div>
            
            {/* Filter - Sharpened */}
            <div className="flex flex-wrap gap-2 pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${
                    filter === cat 
                    ? 'bg-brand-dark text-white border-brand-dark' 
                    : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-brand-gold hover:text-brand-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, index) => (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-8">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Sharpened Overlay */}
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                      <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">{proj.category}</span>
                        <h3 className="text-2xl font-serif text-white mb-6">{proj.title}</h3>
                        <div className="w-12 h-[1px] bg-white/30 mb-6" />
                        <button className="flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-widest">
                          View Project <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                    {/* Category Tag - Sharpened */}
                    <div className="absolute top-0 right-0 bg-white px-6 py-3 text-[9px] font-bold uppercase tracking-widest text-brand-dark group-hover:opacity-0 transition-opacity">
                      {proj.category}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors duration-500">{proj.title}</h3>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">{proj.location}</span>
                    </div>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed line-clamp-2">
                      {proj.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-neutral-400 font-serif text-2xl italic">More projects coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner - Sharpened */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Retail Spaces", value: "85+" },
              { label: "Corporate Offices", value: "120+" },
              { label: "Luxury Residences", value: "40+" },
              { label: "Hospitality Outlets", value: "25+" }
            ].map((stat, i) => (
              <div key={i} className="text-left border-l border-neutral-200 pl-8">
                <div className="text-5xl font-serif text-brand-dark mb-4">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold leading-loose">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
