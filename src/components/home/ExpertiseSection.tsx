"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef } from 'react';
import { HardHat, Paintbrush, Building2, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const expertise = [
  {
    title: "Retail-First Design",
    desc: "Specialized layouts for fashion, lifestyle, and high-end retail brands that drive footfall and conversion.",
    icon: <Paintbrush className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "01",
  },
  {
    title: "In-House Manufacturing",
    desc: "Custom furniture and carpentry produced in our own 9,000 sq.ft specialized facilities with master artisans.",
    icon: <Building2 className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "02",
  },
  {
    title: "Turnkey Execution",
    desc: "Complete setup from tiling to fire safety, handed over ready for product placement — on time, every time.",
    icon: <CheckCircle className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "03",
  },
  {
    title: "Technical Excellence",
    desc: "Integrated AC, electrical, and civil works designed and managed by one elite multi-discipline team.",
    icon: <HardHat className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "04",
  },
];

/* ─── Vertical Slider (desktop) ─── */
const VerticalSlider = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); // 1 = down, -1 = up

  const go = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setActive((next + expertise.length) % expertise.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((prev) => (prev + 1) % expertise.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (d: number) => ({ y: d > 0 ? 60 : -60, opacity: 0 }),
    center: () => ({ y: 0, opacity: 1 }),
    exit: (d: number) => ({ y: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const card = expertise[active];

  return (
    <div className="flex flex-col h-full w-full gap-6">

      {/* Animated card */}
      <div className="flex-1 overflow-hidden" style={{ minHeight: '320px' }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="h-full rounded-2xl p-10 flex flex-col justify-between"
            style={{
              backgroundColor: '#2A1E17',
              border: '1px solid rgba(232,160,32,0.2)',
              minHeight: '320px',
            }}
          >
            {/* top: number + icon */}
            <div className="flex items-start justify-between">
              <span
                className="text-5xl font-serif leading-none select-none"
                style={{ color: 'rgba(232,160,32,0.15)', fontFamily: 'var(--font-cinzel), serif' }}
              >
                {card.num}
              </span>
              <div
                className="p-3 rounded-full"
                style={{ backgroundColor: 'rgba(232,160,32,0.1)', boxShadow: '0 0 0 1px rgba(232,160,32,0.25)' }}
              >
                {card.icon}
              </div>
            </div>

            {/* bottom: divider + title + desc */}
            <div>
              <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: '#E8A020' }} />
              <h3
                className="text-xl uppercase tracking-widest mb-4 font-serif"
                style={{ color: '#ffffff', fontFamily: 'var(--font-cinzel), serif' }}
              >
                {card.title}
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {card.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between mt-2 px-2">
        <button
          onClick={() => go(active - 1, -1)}
          className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
          style={{ borderColor: 'rgba(232,160,32,0.4)', color: '#E8A020' }}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center justify-center gap-3">
          {expertise.map((e, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              className="group flex flex-col items-center gap-1"
              aria-label={`Go to ${e.title}`}
            >
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  height: '8px',
                  width: i === active ? '32px' : '8px',
                  backgroundColor: i === active ? '#E8A020' : 'rgba(232,160,32,0.25)',
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => go(active + 1, 1)}
          className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
          style={{ borderColor: 'rgba(232,160,32,0.4)', color: '#E8A020' }}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </div>
  );
};

/* ─── Mobile Horizontal Swipe Slider ─── */
const MobileSlider = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const go = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setActive((next + expertise.length) % expertise.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((prev) => (prev + 1) % expertise.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      dx < 0 ? go(active + 1, 1) : go(active - 1, -1);
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: () => ({ x: 0, opacity: 1 }),
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const card = expertise[active];

  return (
    <div className="relative w-full select-none">
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ touchAction: 'pan-y' }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center text-center rounded-2xl shadow-2xl px-8 py-12 mx-2"
            style={{ backgroundColor: '#2A1E17', border: '1px solid rgba(232,160,32,0.25)' }}
          >
            <div className="mb-6 p-4 rounded-full" style={{ backgroundColor: 'rgba(232,160,32,0.12)', boxShadow: '0 0 0 1px rgba(232,160,32,0.3)' }}>
              {card.icon}
            </div>
            <div className="w-8 h-[1px] mb-5" style={{ backgroundColor: '#E8A020' }} />
            <h3 className="text-base font-serif uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-cinzel), serif', color: '#ffffff' }}>
              {card.title}
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-[260px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {card.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {expertise.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > active ? 1 : -1)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === active ? '#E8A020' : 'rgba(232,160,32,0.3)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const ExpertiseSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* ── Desktop / Laptop: split layout ── */}
        <div className="hidden md:grid lg:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* Left: heading block */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif text-brand-dark uppercase leading-tight mb-8"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              OUR CORE <br />
              <span
                className="block mt-2"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none', color: '#E8A020' }}
              >
                <em>Technical Expertise</em>
              </span>
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500 max-w-md" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
              Over 25 years of fitout mastery, fused with in-house manufacturing and end-to-end project management — delivered by a single elite team.
            </p>

            {/* progress bar */}
            <div className="mt-10 space-y-3">
              {expertise.map((e, i) => (
                <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold"
                  style={{ color: '#2A1E17', opacity: 0.35 }}>
                  <span>{e.num}</span>
                  <span>{e.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: vertical slider */}
          <div className="lg:col-span-7" style={{ minHeight: '420px' }}>
            <VerticalSlider />
          </div>
        </div>

        {/* ── Mobile: heading + horizontal slider ── */}
        <div className="block md:hidden">
          <div className="text-center mb-6">
            <h2
              className="text-2xl font-serif text-brand-dark uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              OUR CORE <br />
              <span
                className="block mt-1 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none', color: '#E8A020' }}
              >
                <em>Technical Expertise</em>
              </span>
            </h2>
          </div>
          <MobileSlider />
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
