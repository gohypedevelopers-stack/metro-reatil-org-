"use client";

import { motion } from 'motion/react';
import React from 'react';

const FullServicesSection = () => {
  const allServices = [
    "Commercial Fit-out", "Retail Design", "Joinery & Millwork", "MEP Solutions",
    "Project Management", "3D Rendering", "Civil Works", "Glass & Metal Work",
    "Flooring Solutions", "Lighting Design", "Kitchen Equipment", "Acoustic Solutions"
  ];

  return (
    <section className="py-32 bg-white border-y border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-6 block">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Our Complete Range <br /> of Services
            </h2>
          </div>
          <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">
            Get a Custom Quote
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
          {allServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <span className="text-neutral-100 text-4xl font-serif mb-4 block group-hover:text-brand-gold/20 transition-colors">{i + 1}</span>
              <h4 className="text-brand-dark font-bold text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">{s}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullServicesSection;
