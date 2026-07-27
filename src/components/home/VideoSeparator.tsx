"use client";

import { motion } from 'motion/react';
import React from 'react';

const VideoSeparator = ({ src, title }: { src: string, title?: string }) => {
  return (
    <section className="h-[420px] md:h-[60vh] relative overflow-hidden flex items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-10" />
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-20 text-white text-2xl sm:text-3xl md:text-5xl font-serif uppercase tracking-[0.12em] md:tracking-widest text-center px-6 mobile-heading-balance"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          {title}
        </motion.h2>
      )}
    </section>
  );
};

export default VideoSeparator;
