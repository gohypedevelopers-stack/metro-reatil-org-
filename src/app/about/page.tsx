"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Target, CheckCircle2, ChevronRight } from 'lucide-react';

const STATS = [
  { label: "Years Excellence", value: "15+" },
  { label: "Projects Completed", value: "250+" },
  { label: "Expert Craftsmen", value: "120+" },
  { label: "Client Satisfaction", value: "99%" }
];

const VALUES = [
  {
    title: "Precision Engineering",
    desc: "We approach every project with mathematical accuracy and technical excellence.",
    icon: Target
  },
  {
    title: "Artisanal Craft",
    desc: "Blending traditional craftsmanship with modern manufacturing techniques.",
    icon: Award
  },
  {
    title: "Client-Centric",
    desc: "Your vision is our blueprint. We build spaces that reflect your unique identity.",
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-32">
      {/* Hero Section - Cinematic */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-brand-dark">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 opacity-50"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="About Metro Retail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        </motion.div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block"
            >
              Retail Excellence
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-5xl md:text-8xl font-serif text-white mb-10 leading-tight"
            >
              The End-to-End <br />
              <span className="italic text-brand-gold">Retail Partner</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-neutral-300 text-xl font-light leading-relaxed max-w-xl"
            >
              Specializing in the execution of high-end retail environments. We deliver complete turnkey solutions so your brand is ready to operate from day one.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Sharpened */}
      <section className="py-48 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-5xl font-serif text-brand-dark mb-12">Building Spaces That Define Brands</h2>
              <div className="space-y-8 mb-16">
                <p className="text-neutral-500 text-lg leading-relaxed font-light">
                  Metro Retail Solutions specializes in creating world-class environments for global fashion, apparel, and lifestyle brands. From prestigious mall boutiques to specialized airport retail, our expertise covers every facet of the retail landscape.
                </p>
                <p className="text-neutral-500 text-lg leading-relaxed font-light">
                  Our USP is total operational readiness. We handle in-house manufacturing, MEP works, and full civil execution. When we hand over the keys, you only need to bring your products.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12">
                {STATS.map((stat, i) => (
                  <div key={i} className="border-l border-neutral-200 pl-8">
                    <div className="text-4xl font-serif text-brand-dark mb-2">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-brand-dark p-12 text-white max-w-xs hidden xl:block shadow-2xl">
                <h3 className="text-xl font-serif mb-4 italic">"Precision is our standard."</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">Every joint, finish, and installation is a testament to our commitment to architectural excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Sharpened */}
      <section className="py-48 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-32">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Values</span>
            <h2 className="text-5xl font-serif text-brand-dark mb-8">The Principles of Metro</h2>
            <p className="text-neutral-500 text-lg font-light">Our culture is built on transparency, technical mastery, and an unwavering focus on our clients' success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white p-16 hover:bg-neutral-50 transition-colors duration-500 group">
                <val.icon className="text-brand-gold mb-12 group-hover:translate-y-[-8px] transition-transform duration-500" size={48} strokeWidth={1} />
                <h3 className="text-2xl font-serif text-brand-dark mb-6">{val.title}</h3>
                <p className="text-neutral-500 text-base font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sharpened */}
      <section className="py-48 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-gold blur-[200px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10">Ready to Start?</h2>
          <p className="text-neutral-400 text-xl font-light max-w-2xl mx-auto mb-16">
            Let's collaborate to build a space that defines your brand and exceeds your operational expectations.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-8 px-16 py-6 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-brand-dark transition-all duration-500 group"
          >
            Get in Touch <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
