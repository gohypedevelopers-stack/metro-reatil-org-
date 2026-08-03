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
    <section id="services-slider" className="pt-4 pb-12 md:pt-4 md:pb-16 bg-white overflow-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="section-title text-brand-dark" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            OUR CORE <span className="text-brand-gold italic font-normal ml-2 whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Services</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-12 mb-8 md:mb-10">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-[7px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.5em] pb-4 transition-all relative ${activeTab === i ? 'text-brand-dark' : 'text-neutral-400 hover:text-brand-dark'}`}
            >
              {s.title}
              {activeTab === i && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-dark" />
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 md:gap-10 xl:gap-16 items-center"
            >
              <div className="lg:col-span-7 aspect-video md:aspect-[16/10] overflow-hidden rounded-sm shadow-lg md:shadow-2xl">
                <img src={services[activeTab].img} alt={services[activeTab].title} className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-5 lg:pl-6 xl:pl-10 mt-6 md:mt-0">
                <h3 className="section-subtitle text-brand-dark mb-3 md:mb-6 xl:mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                  {services[activeTab].title}
                </h3>
                <p className="text-neutral-500 text-sm xl:text-base font-light leading-relaxed mb-6 md:mb-8 xl:mb-12">
                  {services[activeTab].desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 xl:gap-6 mb-8 md:mb-8 xl:mb-12">
                  {services[activeTab].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 xl:gap-3 text-brand-dark text-[10px] xl:text-xs font-bold uppercase tracking-widest">
                      <CheckCircle size={14} className="text-brand-gold w-3 h-3 xl:w-4 xl:h-4 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={services[activeTab].link} className="inline-flex items-center gap-2 md:gap-3 xl:gap-4 px-4 py-2 sm:px-6 md:px-8 sm:py-2.5 md:py-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest bg-brand-dark text-white hover:bg-brand-gold transition-all rounded-full w-[max-content]">
                  Learn More <ArrowRight size={14} className="w-3 h-3 xl:w-4 xl:h-4" />
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
