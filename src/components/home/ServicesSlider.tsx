"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveTab((prev) => (prev + 1) % services.length);
    }
    if (isRightSwipe) {
      setActiveTab((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  const services = [
    {
      title: "Carpentry",
      desc: "Our state-of-the-art carpentry facility delivers bespoke wooden solutions with artisan precision.",
      features: ["Custom Furniture", "Wall Paneling", "High-End Cabinetry", "Premium Wood Finishes"],
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
      link: "/services/carpentry"
    },
    {
      title: "Turnkey Fit-out",
      desc: "Comprehensive project management from shell-and-core to final handover.",
      features: ["Spatial Planning", "Material Sourcing", "On-site Supervision", "Quality Assurance"],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      link: "/services/fitout"
    },
    {
      title: "MEP Services",
      desc: "Precision engineering for electrical, plumbing, and mechanical systems.",
      features: ["HVAC Systems", "Electrical Engineering", "Fire Safety Systems", "Smart Automation"],
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      link: "/services/mep-hvac"
    },
    {
      title: "Design Hub",
      desc: "Where creative vision meets technical feasibility.",
      features: ["3D Visualization", "Mood Boards", "Technical Drafting", "Concept Development"],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop",
      link: "/services/artistic-finishes"
    }
  ];

  return (
    <section id="services-slider" className="py-12 md:py-20 bg-white overflow-hidden border-t border-neutral-100">
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="section-title text-brand-dark" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            OUR CORE <span className="text-brand-gold italic font-normal ml-2 whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Services</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar whitespace-nowrap gap-1.5 sm:gap-4 md:gap-8 mb-8 md:mb-12 border-b border-neutral-200 w-full pb-0.5">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`shrink-0 whitespace-nowrap px-2.5 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all relative ${
                activeTab === i ? 'text-brand-gold' : 'text-neutral-400 hover:text-brand-dark'
              }`}
            >
              {s.title}
              {activeTab === i && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-gold" />
              )}
            </button>
          ))}
        </div>

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="touch-pan-y"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 md:gap-10 xl:gap-16 items-center"
            >
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-sm shadow-xl md:shadow-2xl border border-neutral-100">
                <img src={services[activeTab].img} alt={services[activeTab].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-dark uppercase tracking-wider mb-3 md:mb-4" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                  {services[activeTab].title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                  {services[activeTab].desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-8 w-full text-left">
                  {services[activeTab].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 sm:gap-2.5 text-neutral-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                      <CheckCircle size={15} className="text-brand-gold shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={services[activeTab].link} className="inline-flex items-center gap-2.5 px-6 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark transition-all rounded-full shadow-md hover:shadow-lg">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
