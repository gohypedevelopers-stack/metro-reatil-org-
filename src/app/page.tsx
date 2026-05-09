"use client";

import { motion } from 'motion/react';
import React from 'react';

export default function SplashPage() {
  return (
    <div className="font-sans">
      <section className="h-screen w-full bg-white flex flex-col items-center justify-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <img 
            src="/logo.png" 
            alt="Metro Retail Solutions Logo" 
            className="h-32 md:h-48 w-auto"
          />
          <div className="text-brand-dark text-xs md:text-sm tracking-[0.4em] font-medium mt-2 flex items-center gap-4">
            <a href="/home#about" className="hover:text-brand-gold transition-colors cursor-pointer">DESIGN</a>
            <span className="text-brand-gold">|</span>
            <a href="/home#services" className="hover:text-brand-gold transition-colors cursor-pointer">BUILD</a>
            <span className="text-brand-gold">|</span>
            <a href="/home#pmc" className="hover:text-brand-gold transition-colors cursor-pointer">PMC</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
