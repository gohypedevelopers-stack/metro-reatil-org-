"use client";

import { motion } from 'motion/react';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
  const services = [
    { title: "Retail Store Design", image: SERVICE_IMAGES[0], id: "retail-design" },
    { title: "Mall Store Fit-Outs", image: SERVICE_IMAGES[1], id: "turnkey-execution" },
    { title: "High-Street Retail Setup", image: SERVICE_IMAGES[2], id: "turnkey-execution" },
    { title: "Airport Retail Spaces", image: SERVICE_IMAGES[3], id: "retail-design" },
    { title: "Furniture Manufacturing", image: SERVICE_IMAGES[4], id: "bespoke-joinery" },
    { title: "In-House Joinery", image: SERVICE_IMAGES[5], id: "bespoke-joinery" },
    { title: "AC & HVAC Work", image: SERVICE_IMAGES[6], id: "technical-infrastructure" },
    { title: "Fire Safety Systems", image: SERVICE_IMAGES[7], id: "technical-infrastructure" },
    { title: "Tiling & Civil Work", image: SERVICE_IMAGES[8], id: "turnkey-execution" },
    { title: "End-to-End Turnkey Solutions", image: SERVICE_IMAGES[9], id: "turnkey-execution" },
    { title: "MEP Engineering", image: SERVICE_IMAGES[10], id: "technical-infrastructure" },
    { title: "Project Management", image: SERVICE_IMAGES[11], id: "turnkey-execution" }
  ];

  return (
    <section className="py-20 bg-white border-y border-neutral-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-8 md:gap-10">
          <div>
            <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR COMPLETE RANGE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>of Services</span>
            </h2>
          </div>
          <a href="/contact" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">
            Get a Custom Quote
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16">
          {services.map((s, i) => (
            <motion.a
              key={i}
              href={`/solutions/${s.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex flex-col h-full bg-neutral-50/50 hover:bg-white p-4 border border-neutral-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden w-full mb-6 bg-neutral-100">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-brand-dark shadow-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 bg-brand-dark text-white p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight size={14} className="text-brand-gold" />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-grow">
                <h4 className="text-brand-dark font-bold text-xs uppercase tracking-[0.15em] leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-2 flex items-center gap-1 group-hover:text-neutral-500 transition-colors">
                  Learn More <span>→</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullServicesSection;
