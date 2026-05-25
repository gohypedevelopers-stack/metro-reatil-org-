"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PencilRuler, Hammer, Settings, Layout, Lightbulb, Box, ChevronRight } from 'lucide-react';

const SOLUTIONS_DETAIL = [
  {
    id: "design",
    title: "Retail Design & Planning",
    desc: "End-to-end execution for retail spaces. We design layouts specifically for fashion, luggage, and lifestyle brands, optimizing for both customer flow and brand impact.",
    icon: PencilRuler,
    features: ["Mall Store Design", "High-Street Layouts", "Airport Retail Planning", "3D Brand Visualization"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
  },
  {
    id: "fitout",
    title: "Turnkey Execution",
    desc: "Our USP is a move-in ready space. We handle tiling, civil work, and furniture manufacturing in-house, ensuring your store is ready for products immediately.",
    icon: Hammer,
    features: ["Furniture Manufacturing", "Tiling & Civil Work", "Joinery & Millwork", "Turnkey Handover"],
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80"
  },
  {
    id: "systems",
    title: "Technical Infrastructure",
    desc: "Complete MEP solutions integrated into your retail space. From specialized AC ducting to certified fire safety systems.",
    icon: Settings,
    features: ["AC & HVAC Work", "Fire Safety Systems", "Electrical Engineering", "Security Systems"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
  }
];

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

      {/* Solutions Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-24 lg:space-y-48">
          {SOLUTIONS_DETAIL.map((sol, i) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-16 h-[1px] bg-brand-gold mb-8" />
                <sol.icon className="text-brand-gold mb-8" size={40} strokeWidth={1} />
                <h2 className="text-3xl font-serif text-brand-dark mb-8 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>{sol.title}</h2>
                <p className="text-neutral-500 text-lg leading-relaxed mb-12 font-light">{sol.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                  {sol.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-neutral-600">
                      <div className="w-1 h-1 bg-brand-gold" />
                      {feat}
                    </div>
                  ))}
                </div>

                <a href="/contact" className="inline-flex items-center gap-6 text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] group border-b border-transparent hover:border-brand-gold transition-all pb-2">
                  Inquire Now <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              <div className={`lg:col-span-7 w-full ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[16/9] lg:aspect-[4/3] overflow-hidden group relative">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
