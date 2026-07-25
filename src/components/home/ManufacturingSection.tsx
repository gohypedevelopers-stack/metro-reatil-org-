"use client";

import { motion, useInView } from 'motion/react';
import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // Use easeOutQuad for smoother counting
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ManufacturingSection = () => {
  return (
    <section className="py-12 md:py-12 bg-[#f9f9f8]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mobile-heading-balance text-center lg:text-left text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-4 md:mb-10 uppercase leading-tight w-full" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              VISIT OUR IN-HOUSE <br /> <span className="text-brand-gold italic block mt-2 text-xl sm:text-2xl md:text-4xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Manufacturing Unit</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light leading-relaxed mb-8 md:mb-12 max-w-xl text-center lg:text-left">
              India's Most trusted Fitout and In-house manufacturing specialist. Our 9,000 sq.ft facility is equipped with the latest machinery to bring complex designs to life.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-8 text-center lg:text-left w-full">
              <div>
                <span className="text-2xl md:text-4xl font-serif text-brand-gold mb-2 block"><CountUp end={28} suffix="+" /></span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-dark">Years of Experience</span>
              </div>
              <div>
                <span className="text-2xl md:text-4xl font-serif text-brand-gold mb-2 block"><CountUp end={9} suffix="K+" /></span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-dark">Square Feet</span>
              </div>
              <div>
                <span className="text-2xl md:text-4xl font-serif text-brand-gold mb-2 block"><CountUp end={100} suffix="+" /></span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-dark">Master Artisans</span>
              </div>
            </div>
            <div className="mt-8 md:mt-12 self-center lg:self-auto">
              <a href="/manufacturing" className="inline-flex items-center gap-4 px-8 py-3 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-all rounded-full">
                Learn More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-6 mt-8 md:mt-0">
            <div className="space-y-2 md:space-y-6">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-[3/4] object-cover rounded-sm" />
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-sm" />
            </div>
            <div className="pt-0 md:pt-12 space-y-2 md:space-y-6">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-sm" />
              <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-[3/4] object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
