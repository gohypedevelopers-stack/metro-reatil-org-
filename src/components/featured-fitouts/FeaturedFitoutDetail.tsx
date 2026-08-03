"use client";

import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { FeaturedFitout } from '../../data/featuredFitouts';

type FeaturedFitoutDetailProps = {
  project: FeaturedFitout;
  suggestedProjects: FeaturedFitout[];
};

// Maps raw project category to portfolio filter param (must match MAIN_CATEGORIES in PortfolioClient)
const getCategoryFilter = (category: string): string => {
  const cat = (category || '').toUpperCase();
  if (cat === 'OFFICE' || cat === 'COMMERCIAL') return 'Commercial';
  if (cat === 'RESIDENTIAL') return 'Residential';
  if (cat === 'RETAIL' || cat === 'F&B') return 'Retail';
  return 'All';
};

const FeaturedFitoutDetail = ({ project, suggestedProjects }: FeaturedFitoutDetailProps) => {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isNavigatingBack, setIsNavigatingBack] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !project.gallery || project.gallery.length <= 1) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const cardButton = el.querySelector('button');
        const cardWidth = cardButton ? cardButton.clientWidth : (el.clientWidth * 0.3);
        const gap = 12; // gap-3 = 12px
        const scrollStep = cardWidth + gap;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        if (el.scrollLeft >= maxScrollLeft - 15) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }, 3500);
    };

    startAutoScroll();

    const pauseScroll = () => clearInterval(intervalId);
    const resumeScroll = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    el.addEventListener('mouseenter', pauseScroll);
    el.addEventListener('mouseleave', resumeScroll);
    el.addEventListener('touchstart', pauseScroll, { passive: true });
    el.addEventListener('touchend', resumeScroll, { passive: true });

    return () => {
      clearInterval(intervalId);
      el.removeEventListener('mouseenter', pauseScroll);
      el.removeEventListener('mouseleave', resumeScroll);
      el.removeEventListener('touchstart', pauseScroll);
      el.removeEventListener('touchend', resumeScroll);
    };
  }, [project.gallery]);

  const activeImage = activeImageIndex === null ? null : project.gallery[activeImageIndex];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardButton = el.querySelector('button');
    const cardWidth = cardButton ? cardButton.clientWidth : (el.clientWidth * 0.3);
    const gap = 12; // gap-3 = 12px
    const scrollStep = cardWidth + gap;

    el.scrollBy({ left: direction === 'left' ? -scrollStep : scrollStep, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    const targetUrl = `/portfolio?filter=${getCategoryFilter(project.category)}#filter-section`;
    setIsNavigatingBack(true);
    // Let the fade-out animation play (350ms), then navigate
    setTimeout(() => {
      router.push(targetUrl);
    }, 350);
  };

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
      showNext();
    }
    if (isRightSwipe) {
      showPrevious();
    }
  };

  const showPrevious = () => {
    setActiveImageIndex((current) => {
      if (current === null) return current;
      return (current - 1 + project.gallery.length) % project.gallery.length;
    });
  };

  const showNext = () => {
    setActiveImageIndex((current) => {
      if (current === null) return current;
      return (current + 1) % project.gallery.length;
    });
  };

  useEffect(() => {
    if (activeImageIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, project.gallery.length]);

  return (
    <motion.main
      className="bg-white pt-16 lg:pt-20"
      animate={{ opacity: isNavigatingBack ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {/* Desktop-only breadcrumb bar */}
      <section className="hidden lg:flex border-b border-neutral-100 bg-neutral-50 py-3">
        <div className="mx-auto flex w-full w-full items-center justify-between gap-6 px-6 md:px-12">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:text-brand-dark"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </button>
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold sm:block">
            Metro / Featured Fitouts / {project.slug}
          </span>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 md:gap-10 px-6 md:px-12 lg:grid-cols-12 lg:items-start">

          {/* ── Mobile-only Title + Back Button (shows above image on mobile) ── */}
          <div className="block lg:hidden pt-4 md:pt-8 space-y-4">
            {/* Back button — left aligned */}
            <div className="text-left">
              <button
                onClick={handleBackClick}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-brand-dark transition-colors"
              >
                <ArrowLeft size={12} /> Back to Portfolio
              </button>
            </div>
            {/* Category + Title — centered */}
            <div className="text-center">
              <span className="block text-[9px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-2">
                {project.category}
              </span>
              <h1
                className="text-3xl font-serif uppercase leading-tight tracking-tight text-brand-dark"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {project.name}
              </h1>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-[84px] lg:self-start space-y-8 lg:pt-8 xl:pt-12">
            {/* Interactive Main Project Image */}
            <button
              type="button"
              onClick={() => setActiveImageIndex(0)}
              className="w-full relative aspect-[16/10] overflow-hidden bg-neutral-100 group border border-neutral-100 shadow-xl rounded-sm cursor-pointer block outline-none focus-visible:ring-2 focus-visible:ring-brand-gold text-left"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />

              {/* Tap to View Overlay */}
              <div className="absolute bottom-4 right-4 bg-brand-dark/80 backdrop-blur-md px-3.5 py-2 text-[9px] font-bold uppercase tracking-widest text-brand-gold border border-brand-gold/20 shadow-lg group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                Click to Expand Detailed View ⤢
              </div>
            </button>
          </div>
          <div className="lg:col-span-5 pt-0 md:pt-0 lg:pt-8 xl:pt-12 text-center lg:text-left">
            {/* Desktop-only title (hidden on mobile, shown on lg+) */}
            <div className="hidden lg:block lg:mb-2">
              <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.5em] text-brand-gold">
                {project.category}
              </span>
              <h1
                className="mobile-heading-balance text-2xl sm:text-3xl font-serif uppercase leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-4xl"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {project.name}
              </h1>
            </div>

            <p
              className="mb-5 text-lg font-light italic leading-relaxed text-neutral-500"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {project.intro}
            </p>
            <div className="mb-5 h-[2px] w-16 bg-brand-gold mx-auto lg:mx-0" />
            <p className="text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              {project.description}
            </p>

            {/* Turnkey Fit-out Execution Specifications Card */}
            {(project.executionTime || project.scopeOfWork) && (
              <div className="bg-neutral-50 border border-neutral-100 p-6 rounded-sm mt-8 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-center lg:justify-start gap-2 pb-3 border-b border-neutral-200">
                  <span className="w-1.5 h-6 bg-brand-gold rounded-sm animate-pulse" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                    Turnkey Execution Specs
                  </h3>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center lg:text-left">
                  {project.executionTime && (
                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">Timeframe</span>
                      <span className="text-xs font-serif uppercase text-brand-dark font-bold">{project.executionTime}</span>
                    </div>
                  )}
                  {project.projectScale && (
                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">Physical Scale</span>
                      <span className="text-xs font-serif uppercase text-brand-dark font-bold">{project.projectScale}</span>
                    </div>
                  )}
                </div>

                {/* Scope list */}
                {project.scopeOfWork && (
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 block mb-2.5 text-center lg:text-left">Scope of Execution Works</span>
                    <ul className="space-y-2">
                      {project.scopeOfWork.map((scope, sIdx) => (
                        <li key={sIdx} className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/60 py-6 md:py-10">
        <div className="mx-auto w-full px-6 md:px-12">
          <div className="mb-2 flex flex-col items-center justify-between gap-2 border-b border-neutral-200 pb-2 md:flex-row md:items-end md:text-left">
            <div className="text-center md:text-left">
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.35em] text-neutral-400">
                Project Photos
              </span>
              <h2 
                className="mobile-heading-balance text-2xl sm:text-3xl font-serif uppercase leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-4xl"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Detailed Views
              </h2>
            </div>
            <p className="whitespace-nowrap text-[10px] sm:text-sm font-light leading-relaxed text-neutral-500 text-center md:text-left">
              Swipe through project images or open the full gallery.
            </p>
          </div>

          {project.gallery && project.gallery.length > 0 ? (
            <div className="relative group/carousel">
              <button
                onClick={() => scrollCarousel('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-brand-dark p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity focus:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => scrollCarousel('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-brand-dark p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity focus:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.gallery.map((image, index) => (
                  <button
                    key={`${project.slug}-gallery-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className="group relative shrink-0 w-[75vw] sm:w-[45vw] md:w-[32vw] lg:w-[28vw] xl:w-[22vw] aspect-[4/3] overflow-hidden bg-neutral-200 snap-start outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <img
                      src={image}
                      alt={`${project.name} view ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-center rounded-sm border border-dashed border-neutral-300 bg-neutral-100/50 py-12 md:py-24 text-center">
              <span className="mb-2 text-2xl">📸</span>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                No Gallery Images Uploaded
              </p>
            </div>
          )}

          {/* View All button — below carousel */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={() => setActiveImageIndex(0)}
                className="inline-flex items-center gap-2 border border-brand-dark px-6 py-2.5 text-[9px] font-bold uppercase tracking-widest text-brand-dark transition-all hover:bg-brand-dark hover:text-white"
              >
                View All ({project.gallery.length})
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="pt-4 pb-12 md:pt-8 md:pb-24">
        <div className="mx-auto w-full px-6 md:px-12">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.35em] text-brand-gold">
              Suggested Products
            </span>
              <h2 
                className="mobile-heading-balance text-2xl sm:text-3xl font-serif uppercase leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Continue Exploring
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {suggestedProjects.map((suggested) => (
              <a
                key={suggested.slug}
                href={`/featured-fitouts/${suggested.slug}`}
                className="group block text-center md:text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img
                    src={suggested.img}
                    alt={suggested.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 transition-colors group-hover:bg-brand-dark/30" />
                </div>
                <span className="mt-3 block text-[7px] md:text-[8px] font-medium md:font-bold uppercase tracking-[0.3em] text-brand-gold">
                  {suggested.category}
                </span>
                <span className="mt-1 block text-[10px] md:text-xs font-medium md:font-bold uppercase tracking-[0.16em] text-brand-dark transition-colors group-hover:text-brand-gold">
                  {suggested.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage !== null && activeImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[120] bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} image viewer`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-0 opacity-25">
              <img src={activeImage} alt="" className="h-full w-full object-cover blur-sm" />
            </div>
            <div className="absolute inset-0 bg-black/75" />

            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white md:left-12"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white md:right-12"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            <div className="relative z-20 flex min-h-screen items-center justify-center px-5 py-12 md:py-16">
              <div className="w-full max-w-4xl">
                <div className="mb-4 text-center sm:text-left">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.35em] text-white/45">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold uppercase tracking-[0.12em] text-white">
                    {project.name}
                  </h3>
                </div>

                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={`${project.name} view ${activeImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="mx-auto max-h-[62vh] w-auto max-w-full object-contain shadow-2xl"
                />

                <div className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                  {activeImageIndex + 1} / {project.gallery.length}
                </div>

                <div className="mt-4 flex justify-center gap-2 overflow-x-auto px-2 pb-2" data-lenis-prevent>
                  {project.gallery.map((image, index) => (
                    <button
                      key={`${project.slug}-thumb-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`h-12 w-16 shrink-0 overflow-hidden border transition-all ${index === activeImageIndex ? 'border-white opacity-100' : 'border-white/20 opacity-45 hover:opacity-80'
                        }`}
                    >
                      <img src={image} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default FeaturedFitoutDetail;
