"use client";

import { motion } from 'motion/react';
import React from 'react';
import { HardHat, Paintbrush, Building2, CheckCircle } from 'lucide-react';

const ExpertiseSection = () => {
  const expertise = [
    { title: "Retail-First Design", desc: "Specialized layouts for fashion, lifestyle, and high-end retail brands.", icon: <Paintbrush className="w-8 h-8 text-brand-gold" /> },
    { title: "In-House Manufacturing", desc: "Custom furniture and joinery produced in our own specialized facilities.", icon: <Building2 className="w-8 h-8 text-brand-gold" /> },
    { title: "Turnkey Execution", desc: "Complete setup from tiling to fire safety, ready for product placement.", icon: <CheckCircle className="w-8 h-8 text-brand-gold" /> },
    { title: "Technical Excellence", desc: "Integrated AC, electrical, and civil works managed by one elite team.", icon: <HardHat className="w-8 h-8 text-brand-gold" /> }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-6 block">Our Core</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {expertise.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border border-neutral-100 hover:border-brand-gold transition-colors group text-center"
            >
              <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform">{e.icon}</div>
              <h3 className="text-lg font-serif text-brand-dark mb-4 uppercase tracking-widest">{e.title}</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default ExpertiseSection;
