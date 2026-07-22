"use client";

import { motion } from 'motion/react';
import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <section className="py-20 bg-brand-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-10 md:mb-12 uppercase leading-tight"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          READY TO TRANSFORM <br /> <span className="text-white italic block mt-2 text-xl sm:text-2xl md:text-4xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Your Property?</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <a href="https://wa.me/918800607967" className="bg-white text-brand-gold px-7 md:px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.16em] md:tracking-[0.2em] flex items-center justify-center gap-3 md:gap-4 hover:bg-brand-dark hover:text-white transition-all shadow-xl group">
            <Phone size={18} /> WhatsApp Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a href="tel:+918800607967" className="bg-brand-dark text-white px-7 md:px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.16em] md:tracking-[0.2em] flex items-center justify-center gap-3 md:gap-4 hover:bg-white hover:text-brand-dark transition-all shadow-xl group">
            Call Us Today <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
