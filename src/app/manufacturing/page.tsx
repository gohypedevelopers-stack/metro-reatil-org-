"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Settings, Ruler, Hammer, ShieldCheck, CheckCircle2 } from 'lucide-react';

const ManufacturingPage = () => {
  const machinery = [
    {
      title: "CNC Routing Machines",
      desc: "High-precision computer-controlled cutting for complex woodwork and panelling.",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Edge Banding Systems",
      desc: "Automated edge banding for seamless, durable finishes on cabinets and furniture.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Panel Saws",
      desc: "Heavy-duty cutting machinery ensuring perfectly straight edges and dimensions.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Veneer Pressing",
      desc: "Specialized hydraulic presses for high-quality veneer and laminate application.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center bg-brand-dark">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeOut" },
            scale: { duration: 8, ease: [0.25, 1, 0.5, 1] }
          }}
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
          alt="In-House Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/70" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block text-center"
            >
              Our Facility
            </span>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 uppercase tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              In-House{" "}
              <span
                className="text-brand-gold italic font-normal normal-case block md:inline mt-1 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Manufacturing
              </span>
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-base md:text-lg font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Our 9,000 sq.ft state-of-the-art facility is equipped with advanced machinery to bring complex designs to life with unmatched precision and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Precision Engineered</span>
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark uppercase tracking-tight mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Craftsmanship at Scale
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed font-light mb-8">
                Having our own manufacturing facility allows us to maintain strict quality control, optimize production timelines, and deliver bespoke carpentry that perfectly matches the design intent. We eliminate third-party dependencies to ensure your project is completed flawlessly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-brand-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-2">9,000 Sq.Ft</h4>
                    <p className="text-neutral-400 text-xs font-light">Dedicated production floor</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-brand-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-2">100+ Artisans</h4>
                    <p className="text-neutral-400 text-xs font-light">Master craftsmen & technicians</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:col-span-2">
                  <CheckCircle2 size={24} className="text-brand-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-2">45-Day Delivery</h4>
                    <p className="text-neutral-400 text-xs font-light">Pan-India coverage from East to West</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src={gallery[0]} alt="Factory Floor" className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg" />
                <img src={gallery[1]} alt="Machinery" className="w-full aspect-square object-cover rounded-sm shadow-lg" />
              </div>
              <div className="space-y-4">
                <img src={gallery[2]} alt="Woodworking" className="w-full aspect-square object-cover rounded-sm shadow-lg" />
                <img src={gallery[3]} alt="Craftsmen" className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Equipment</span>
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Advanced Machinery
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machinery.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-100 rounded-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-neutral-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section className="py-20 md:py-28 bg-brand-dark text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl font-serif uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Factory Tour
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="relative group aspect-[4/3] overflow-hidden bg-neutral-800 rounded-sm">
                <img
                  src={img}
                  alt={`Factory view ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;
