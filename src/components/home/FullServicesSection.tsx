"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600", // Retail Store Design
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=600", // Mall Store Fit-Outs
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", // High-Street Retail Setup
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600", // Airport Retail Spaces
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600", // Furniture Manufacturing
  "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=600", // In-House Joinery
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600", // AC & HVAC Work
  "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80&w=600", // Fire Safety Systems
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600", // Tiling & Civil Work
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600", // End-to-End Turnkey Solutions
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600", // MEP Engineering
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"  // Project Management
];

const FullServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const allServices = [
    "Retail Store Design", "Mall Store Fit-Outs", "High-Street Retail Setup", "Airport Retail Spaces",
    "Furniture Manufacturing", "In-House Joinery", "AC & HVAC Work", "Fire Safety Systems",
    "Tiling & Civil Work", "End-to-End Turnkey Solutions", "MEP Engineering", "Project Management"
  ];

  return (
    <section 
      className="py-20 bg-white border-y border-neutral-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-8 md:gap-10">
          <div>
            <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR COMPLETE RANGE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>of Services</span>
            </h2>
          </div>
          <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">
            Get a Custom Quote
          </a>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-16">
          {allServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-neutral-300 text-3xl md:text-4xl font-serif mb-3 md:mb-4 block group-hover:text-brand-gold transition-colors duration-500">{i + 1}</span>
              <h4 className="text-brand-dark font-bold text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">{s}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Cursor Image Follow */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x + 25, 
              y: mousePos.y + 25 
            }}
            exit={{ opacity: 0, scale: 0.6, rotate: 5 }}
            transition={{ 
              type: "spring", 
              stiffness: 220, 
              damping: 22,
              mass: 0.6
            }}
            className="fixed top-0 left-0 w-72 h-48 pointer-events-none z-50 overflow-hidden shadow-2xl border border-white/20"
          >
            <img 
              src={SERVICE_IMAGES[hoveredIndex]} 
              alt="Service Preview" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FullServicesSection;
