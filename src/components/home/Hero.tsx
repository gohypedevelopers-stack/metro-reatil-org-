"use client";

import { motion } from 'motion/react';
import React from 'react';
import Magnetic from '../Magnetic';

const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <section className="relative min-h-[680px] h-[100svh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background with Subtle Zoom */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{
          opacity: { duration: 1.8, ease: "easeOut" },
          scale: { duration: 8, ease: [0.25, 1, 0.5, 1] }
        }}
        className="absolute inset-0 z-0 bg-brand-dark"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/hero.webp"
          alt="Luxury Mall Retail Interior"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hidden md:block text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-8">
            Crafting Exceptional Environments
          </span>
          <motion.h1
            className="text-[2.45rem] xs:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-12 leading-[0.98] md:leading-[0.95]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            <div className="overflow-hidden block">
              <span className="whitespace-nowrap text-balance">
                {"Retail Fit-Out".split("").map((char, i) => (
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
              </span>
            </div>
            <div className="overflow-hidden block">
              <span className="whitespace-nowrap text-balance">
                {"Turnkey Excellence".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={isLoaded ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.2 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-brand-gold italic text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-normal"
                    style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </div>
          </motion.h1>


          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12 mt-8 md:mt-4">
            <Magnetic>
              <a href="/portfolio" className="inline-block whitespace-nowrap px-6 sm:px-8 md:px-10 py-3 md:py-3.5 bg-brand-gold text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-full shadow-2xl">
                Explore Portfolio
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/contact" className="inline-block whitespace-nowrap text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-brand-gold transition-all">
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
