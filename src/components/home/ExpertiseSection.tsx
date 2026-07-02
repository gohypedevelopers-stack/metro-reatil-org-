"use client";

import { motion } from 'motion/react';
import React from 'react';
import { HardHat, Paintbrush, Building2, CheckCircle } from 'lucide-react';
import { CircularTestimonials } from '../ui/circular-testimonials';

const ExpertiseSection = () => {
  const expertise = [
    { title: "Retail-First Design", desc: "Specialized layouts for fashion, lifestyle, and high-end retail brands.", icon: <Paintbrush className="w-8 h-8 text-brand-gold" /> },
    { title: "In-House Manufacturing", desc: "Custom furniture and carpentry produced in our own specialized facilities.", icon: <Building2 className="w-8 h-8 text-brand-gold" /> },
    { title: "Turnkey Execution", desc: "Complete setup from tiling to fire safety, ready for product placement.", icon: <CheckCircle className="w-8 h-8 text-brand-gold" /> },
    { title: "Technical Excellence", desc: "Integrated AC, electrical, and civil works managed by one elite team.", icon: <HardHat className="w-8 h-8 text-brand-gold" /> }
  ];

  const carouselTestimonials = expertise.map(e => ({
    name: e.title,
    quote: e.desc,
    designation: "EXPERTISE",
    icon: e.icon
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            OUR CORE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Technical Expertise</span>
          </h2>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {expertise.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-12 border border-neutral-100 hover:border-brand-gold transition-colors group text-center"
            >
              <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform">{e.icon}</div>
              <h3 className="text-lg font-serif text-brand-dark mb-4 uppercase tracking-widest">{e.title}</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Circular Carousel */}
        <div className="block md:hidden w-full overflow-hidden">
          <CircularTestimonials
            testimonials={carouselTestimonials}
            autoplay={true}
            colors={{
              name: "#111111",
              designation: "#f39c12", // brand-gold
              testimony: "#666666",
              arrowBackground: "#111111", // brand-dark
              arrowForeground: "#ffffff",
              arrowHoverBackground: "#f39c12", // brand-gold
            }}
            fontSizes={{
              name: "1.25rem",
              designation: "0.75rem",
              quote: "1rem",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
