"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Target, CheckCircle2 } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="About Metro Retail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Retail Excellence</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              The End-to-End <span className="italic text-brand-gold">Retail Fit-Out</span> Partner
            </h1>
            <p className="text-neutral-300 text-lg font-light leading-relaxed max-w-xl">
              Specializing in end-to-end retail space execution. We deliver complete turnkey solutions so your brand is ready to start operations immediately upon handover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-serif text-brand-dark mb-12">Turnkey Execution for Leading Retail Brands</h2>
              <div className="space-y-8">
                <p className="text-neutral-500 leading-relaxed">
                  Metro Retail Solutions specializes in creating world-class environments for fashion, apparel, luggage, and lifestyle brands. From prestigious mall boutiques to specialized airport retail spaces, our expertise covers every inch of the retail landscape.
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  Our USP is complete turnkey readiness. We handle everything: in-house furniture manufacturing, AC work, fire safety, tiling, and civil works. When we hand over the keys, your brand only needs to place its products to start selling.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-16">
                {STATS.map((stat, i) => (
                  <div key={i} className="border-l-2 border-brand-gold/20 pl-6">
                    <div className="text-3xl font-serif text-brand-dark mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-white p-12 shadow-2xl max-w-xs hidden xl:block">
                <h3 className="text-xl font-serif text-brand-dark mb-4 italic">"Quality is not an act, it is a habit."</h3>
                <p className="text-neutral-400 text-sm">Every joint, every finish, and every installation is a testament to our commitment to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Values</span>
            <h2 className="text-4xl font-serif text-brand-dark mb-6">The Principles that Guide Us</h2>
            <p className="text-neutral-500">Our culture is built on transparency, technical mastery, and an unwavering focus on our clients' success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white p-12 border border-neutral-100 hover:border-brand-gold/30 transition-all group">
                <val.icon className="text-brand-gold mb-8 group-hover:scale-110 transition-transform" size={40} strokeWidth={1} />
                <h3 className="text-xl font-serif text-brand-dark mb-4">{val.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-12">
            Let's collaborate to build a space that defines your brand and exceeds your expectations.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-6 px-12 py-5 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all rounded-full group"
          >
            Get in Touch <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
