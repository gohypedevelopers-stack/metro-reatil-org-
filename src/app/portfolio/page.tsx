"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';
import { featuredFitouts } from '../../data/featuredFitouts';

const MAIN_CATEGORIES = ["All", "Commercial", "Residential", "F&B"];

const SUB_CATEGORIES: Record<string, string[]> = {
  "Residential": [
    "OVERVIEW",
    "LIVING & DINING",
    "BEDROOMS",
    "KITCHENS",
    "BATHROOMS",
    "WALK-IN WARDROBES",
    "VANITIES",
    "BAR UNITS",
    "HOME OFFICE",
    "FAMILY LOUNGE / MAJLIS",
    "KIDS ROOMS",
    "OUTDOOR LIVING"
  ],
  "Commercial": [
    "OVERVIEW",
    "OFFICES",
    "CLINICS",
    "GYMS",
    "SALONS"
  ],
  "F&B": [
    "OVERVIEW",
    "F & B",
    "RETAIL",
    "KIOSKS"
  ]
};

// Map original data category keys to the portfolio sectors
const getPortfolioSector = (category: string): string => {
  const catUpper = category.toUpperCase();
  if (catUpper === "OFFICE") return "Commercial";
  if (catUpper === "RESIDENTIAL") return "Residential";
  if (catUpper === "RETAIL" || catUpper === "F&B") return "F&B";
  return category;
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("OVERVIEW");

  // Reset sub-filter when main filter changes
  useEffect(() => {
    setSubFilter("OVERVIEW");
  }, [filter]);

  const filteredProjects = featuredFitouts.filter(proj => {
    const sector = getPortfolioSector(proj.category);
    
    // 1. Filter by main sector
    if (filter !== "All") {
      if (sector.toLowerCase() !== filter.toLowerCase()) return false;
    }

    // 2. Filter by subcategory point
    if (subFilter !== "OVERVIEW") {
      const matchSub = proj.subcategory && proj.subcategory.toUpperCase() === subFilter.toUpperCase();
      if (!matchSub) return false;
    }

    return true;
  });

  return (
    <div className="bg-white pt-20">
      {/* Header & Filter Controls */}
      <section className="py-16 md:py-24 border-b border-neutral-100 bg-neutral-50/50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-10">
            {/* Header Content */}
            <div className="max-w-2xl">
              <h1 className="mobile-heading-balance text-4xl md:text-6xl lg:text-7xl font-serif text-brand-dark mb-6 leading-tight uppercase" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                SELECTED <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Works Showcase</span>
              </h1>
              <p className="text-neutral-500 text-lg font-light leading-relaxed">
                A showcase of our commitment to excellence across commercial, residential, and F&B sectors.
              </p>
            </div>
            
            {/* Main Sector Filters */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-3 pb-2 w-full border-b border-neutral-200/60 pb-6">
                {MAIN_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 sm:px-8 py-3 md:py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                      filter === cat 
                      ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                      : 'bg-white text-neutral-400 border-neutral-200 hover:border-brand-gold hover:text-brand-dark'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Dynamic Secondary "Points" (Subcategories) */}
              {filter !== "All" && SUB_CATEGORIES[filter] && (
                <div className="flex flex-wrap gap-2.5 items-center">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-neutral-400 mr-2">
                    <Filter size={10} className="text-brand-gold" /> Filter Points:
                  </div>
                  {SUB_CATEGORIES[filter].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSubFilter(sub)}
                      className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full border ${
                        subFilter === sub 
                        ? 'bg-brand-gold text-white border-brand-gold shadow-sm' 
                        : 'bg-white text-neutral-500 border-neutral-200 hover:border-brand-gold/60 hover:text-brand-dark'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, index) => (
                <motion.div
                  key={proj.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <a href={`/featured-fitouts/${proj.slug}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-neutral-100 cursor-pointer">
                      <img 
                        src={proj.img} 
                        alt={proj.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">{proj.subcategory || "OVERVIEW"}</span>
                          <h3 className="text-2xl text-white font-serif uppercase tracking-tight mb-6 leading-snug">{proj.name}</h3>
                          <div className="w-12 h-[1px] bg-white/30 mb-6" />
                          <button className="flex items-center gap-4 text-white text-[9px] font-bold uppercase tracking-widest">
                            Explore Detailed Views ({proj.gallery.length}) <ChevronRight size={14} className="text-brand-gold" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Subcategory Tag */}
                      <div className="absolute top-0 right-0 bg-white px-5 py-2.5 text-[8px] font-bold uppercase tracking-widest text-brand-dark group-hover:opacity-0 transition-opacity duration-300">
                        {proj.subcategory || "OVERVIEW"}
                      </div>
                    </div>
                  </a>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                      <a href={`/featured-fitouts/${proj.slug}`} className="block">
                        <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors duration-500 uppercase">{proj.name}</h3>
                      </a>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">{proj.location || "UAE"}</span>
                    </div>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed line-clamp-2">
                      {proj.intro}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="py-32 text-center max-w-md mx-auto border border-dashed border-neutral-200 rounded-lg p-10 bg-neutral-50/50">
              <p className="text-neutral-400 font-serif text-xl italic mb-3">Custom executions coming soon.</p>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Our spatial designers are in the process of cataloging beautiful new turnkey fit-out projects for this point. Let us bring your vision to life today.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 md:py-32 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
