"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      title: "Carpentry & Joinery",
      desc: "Our state-of-the-art joinery facility delivers bespoke wooden solutions with artisan precision.",
      features: ["Custom Furniture", "Wall Paneling", "High-End Cabinetry", "Premium Wood Finishes"],
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Turnkey Fit-out",
      desc: "Comprehensive project management from shell-and-core to final handover.",
      features: ["Spatial Planning", "Material Sourcing", "On-site Supervision", "Quality Assurance"],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "MEP Services",
      desc: "Precision engineering for electrical, plumbing, and mechanical systems.",
      features: ["HVAC Systems", "Electrical Engineering", "Fire Safety Systems", "Smart Automation"],
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Design Hub",
      desc: "Where creative vision meets technical feasibility.",
      features: ["3D Visualization", "Mood Boards", "Technical Drafting", "Concept Development"],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services-slider" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] pb-4 transition-all relative ${activeTab === i ? 'text-brand-dark' : 'text-neutral-300 hover:text-neutral-500'}`}
            >
              {s.title}
              {activeTab === i && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-dark" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
              <img src={services[activeTab].img} alt={services[activeTab].title} className="w-full h-full object-cover" />
            </div>
            <div className="lg:pl-10">
              <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                {services[activeTab].title}
              </h3>
              <p className="text-neutral-500 text-lg font-light leading-relaxed mb-12">
                {services[activeTab].desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {services[activeTab].features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4 text-brand-dark text-xs font-bold uppercase tracking-widest">
                    <CheckCircle size={16} className="text-brand-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-4 px-8 py-4 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-all rounded-full">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSlider;
