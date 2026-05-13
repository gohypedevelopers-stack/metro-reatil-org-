"use client";

import { motion } from 'motion/react';
import React from 'react';
import Magnetic from '../Magnetic';

const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background with Subtle Zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-detail-with-glass-and-steel-43444-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-8 block">
            Crafting Exceptional Environments
          </span>
          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl mb-12 tracking-[-0.02em] leading-[0.95]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            <div className="overflow-hidden block">
              {"Architectural".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={isLoaded ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.8 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-white uppercase font-light"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden block">
              {"Retail Design".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={isLoaded ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 1.2 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-brand-gold italic"
                  style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.h1>


          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Magnetic>
              <a href="#projects" className="px-12 py-5 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-full shadow-2xl">
                Explore Portfolio
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-brand-gold transition-all">
                Start a Conversation
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left translate-x-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
