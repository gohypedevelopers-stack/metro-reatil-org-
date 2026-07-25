"use client";

import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredFitouts } from '../../data/featuredFitouts';

const filterCategories = ['RETAIL', 'OFFICE', 'RESIDENTIAL'];

const FeaturedFitouts = () => {
  const [activeFilter, setActiveFilter] = useState('RETAIL');
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const filtered = activeFilter === 'ALL'
    ? filterCategories.flatMap((category) =>
        featuredFitouts.filter((project) => project.category === category).slice(0, 3)
      )
    : featuredFitouts.filter((project) => project.category === activeFilter);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCount = mounted ? visibleCount : 3;
  const shouldShowCarousel = filtered.length > currentCount;

  useEffect(() => {
    if (!shouldShowCarousel) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % filtered.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [filtered.length, shouldShowCarousel]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + filtered.length) % filtered.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % filtered.length);
  };

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
      showNext();
    }
    if (isRightSwipe) {
      showPrevious();
    }
  };

  const visibleItems = [];
  if (filtered.length > 0) {
    for (let i = 0; i < Math.min(currentCount, filtered.length); i++) {
      const itemIndex = (activeIndex + i) % filtered.length;
      if (filtered[itemIndex]) {
        visibleItems.push(filtered[itemIndex]);
      }
    }
  }

  return (
    <section id="featured-fitouts" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-4 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            OUR TURNKEY FITOUT <br /> <span className="text-brand-gold italic block mt-2 text-xl sm:text-2xl md:text-4xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Executions</span>
          </h2>
          
          <div className="flex justify-center gap-x-6 gap-y-4 md:gap-12 flex-wrap">
            {['ALL', ...filterCategories].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative pb-2 ${activeFilter === filter ? 'text-brand-dark' : 'text-neutral-400 hover:text-brand-dark'}`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.span layoutId="filterUnderline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-dark" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative w-full">
          {!shouldShowCarousel ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filtered.map((project) => (
                <a
                  key={project.slug}
                  href={`/featured-fitouts/${project.slug}`}
                  className="relative group block aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden border border-neutral-100 shadow-lg rounded-sm text-left bg-neutral-900"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.4em] mb-2.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl text-white font-serif uppercase tracking-tight mb-4 leading-tight">
                      {project.name}
                    </h3>
                    <div className="w-12 h-[1px] bg-brand-gold group-hover:w-20 transition-all duration-500" />
                  </div>

                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <>
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {visibleItems.map((project, idx) => (
                    <motion.a
                      key={project.slug + '-' + idx}
                      layout
                      initial={{ opacity: 0, scale: 0.95, x: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -50 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      href={`/featured-fitouts/${project.slug}`}
                      className="relative group block aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden border border-neutral-100 shadow-lg rounded-sm text-left bg-neutral-900"
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <span className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.4em] mb-2.5">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl text-white font-serif uppercase tracking-tight mb-4 leading-tight">
                          {project.name}
                        </h3>
                        <div className="w-12 h-[1px] bg-brand-gold group-hover:w-20 transition-all duration-500" />
                      </div>

                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                        <ArrowRight size={16} className="text-white" />
                      </div>
                    </motion.a>
                  ))}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous projects"
                className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 z-30 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-dark shadow-xl transition-all hover:bg-brand-dark hover:text-white hover:border-brand-dark active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next projects"
                className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 z-30 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-dark shadow-xl transition-all hover:bg-brand-dark hover:text-white hover:border-brand-dark active:scale-95"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}
        </div>

        {shouldShowCarousel && (
          <div className="mt-8 md:mt-12 flex items-center justify-center gap-3">
            {Array.from({ length: filtered.length }).map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show project set starting at ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-dark/20 hover:bg-brand-dark/40'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedFitouts;
