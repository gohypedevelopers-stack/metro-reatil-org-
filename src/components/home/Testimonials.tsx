"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "I wanted to take a moment to express my gratitude for the exemplary effort and dedication that you and your team put into completing our project (Gerard Cafe at Adnoc station - Ajman) successfully and efficiently. Your attention to detail, creativity, and design truly shone through every step of the way.",
      name: "Ahmad Masarani",
      role: "Gerard Cafe",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      logo: "https://mattermind.ae/wp-content/uploads/2023/06/gerard-logo.png"
    },
    {
      text: "Collaborating with Metro Retail Solutions has been truly seamless. Their expertise, attention to detail, and deep understanding of our vision have consistently stood out. Their professionalism and ease of working together make every project a delightful experience.",
      name: "Naseem Abdul Khader",
      role: "Al Rumooz Central Kitchen Equipment Installation LLC",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    },
    {
      text: "Metro Retail Solutions truly exceeded our expectations with their impeccable execution of the full fit out project of our new restaurant at Khalidiyah Mall. Their professionalism, creative approach, and timely completion showcased their commitment.",
      name: "Haris Kunnumpurath",
      role: "Tandooriya Dhaba",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    }
  ];

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-8 md:mb-32 relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.95] md:leading-[0.85] mobile-heading-balance"
          >
            {/* Top Line: WHAT OUR CLIENTS (Black) */}
            <div
              className="text-2xl sm:text-3xl md:text-6xl uppercase tracking-[0.06em] md:tracking-[0.1em] text-brand-dark flex justify-center items-center font-light mb-4 flex-wrap"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {"WHAT OUR CLIENTS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.2 + (i * 0.04), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block whitespace-pre"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Bottom Line: Say About Us (Gold, Italic) */}
            <div
              className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-brand-gold italic flex justify-center items-center flex-wrap"
              style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
            >
              {"Say About Us".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.8 + (i * 0.04), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block whitespace-pre font-normal"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:divide-x divide-brand-gold/30">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 flex flex-col items-start"
            >
              {/* Quote Mark */}
              <div className="mb-6 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-gold">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>

              <p className="text-brand-dark/80 text-sm leading-relaxed mb-12 text-left h-full italic">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-brand-gold/10 w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 shrink-0">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-brand-gold font-bold text-sm leading-tight">{t.name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div 
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="px-5 sm:px-6 py-8 flex flex-col items-center bg-neutral-50/50 rounded-lg border border-neutral-100"
            >
              <div className="mb-6 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-gold">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>
              <p className="text-brand-dark/80 text-sm leading-relaxed mb-10 text-center italic">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex flex-col items-center gap-4 mt-auto w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 shrink-0">
                  <img src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h5 className="text-brand-gold font-bold text-sm leading-tight">{testimonials[currentIndex].name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-medium mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 md:mt-8 flex justify-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-brand-gold w-6' : 'bg-brand-gold/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
