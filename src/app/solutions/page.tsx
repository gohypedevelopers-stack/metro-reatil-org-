"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PencilRuler, Hammer, Settings, Layout, Lightbulb, Box } from 'lucide-react';

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
    <div className="bg-white pt-32">
      {/* Header */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Solutions</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-8 leading-tight">
              Engineering <span className="italic text-brand-gold">Excellence</span> Into Every Square Meter
            </h1>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              We provide integrated design and build services that bridge the gap between architectural vision and operational reality.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-32">
          {SOLUTIONS_DETAIL.map((sol, i) => (
            <div key={sol.id} className={`flex flex-col lg:flex-row gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <sol.icon className="text-brand-gold mb-8" size={48} strokeWidth={1} />
                <h2 className="text-4xl font-serif text-brand-dark mb-8">{sol.title}</h2>
                <p className="text-neutral-500 text-lg leading-relaxed mb-12">{sol.desc}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {sol.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      {feat}
                    </div>
                  ))}
                </div>

                <a href="/contact" className="inline-flex items-center gap-4 text-brand-gold text-[10px] font-bold uppercase tracking-widest group">
                  Inquire About This Solution <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              
              <div className="flex-1 w-full">
                <div className="aspect-video lg:aspect-square overflow-hidden rounded-sm group relative">
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-serif text-white mb-4">In-House Manufacturing</h3>
              <p className="text-neutral-400 max-w-xl">Our private production facilities allow us to maintain total control over quality, timelines, and costs for all custom elements.</p>
            </div>
            <a href="/about" className="px-10 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-full">
              Learn More About Our Facility
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
