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
          className="relative z-20 text-white section-title tracking-[0.12em] md:tracking-widest text-center px-6"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          {title}
        </motion.h2>
      )}
    </section>
  );
};

export default VideoSeparator;
