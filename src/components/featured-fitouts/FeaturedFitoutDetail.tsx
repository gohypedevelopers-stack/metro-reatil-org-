"use client";

import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import type { FeaturedFitout } from '../../data/featuredFitouts';

type FeaturedFitoutDetailProps = {
  project: FeaturedFitout;
  suggestedProjects: FeaturedFitout[];
};

const FeaturedFitoutDetail = ({ project, suggestedProjects }: FeaturedFitoutDetailProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex === null ? null : project.gallery[activeImageIndex];

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
    <main className="bg-white pt-20">
      <section className="border-b border-neutral-100 bg-neutral-50 py-8">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 md:px-12">
          <a
            href="/#featured-fitouts"
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:text-brand-dark"
          >
            <ArrowLeft size={14} /> Back to featured
          </a>
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold sm:block">
            Metro / Featured Fitouts / {project.slug}
          </span>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-8">
            {/* Interactive Main Project Image */}
            <button
              type="button"
              onClick={() => setActiveImageIndex(0)}
              className="w-full relative aspect-[16/10] overflow-hidden bg-neutral-100 group border border-neutral-100 shadow-xl rounded-sm cursor-pointer block outline-none focus-visible:ring-2 focus-visible:ring-brand-gold text-left"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Tap to View Overlay */}
              <div className="absolute bottom-4 right-4 bg-brand-dark/80 backdrop-blur-md px-3.5 py-2 text-[9px] font-bold uppercase tracking-widest text-brand-gold border border-brand-gold/20 shadow-lg group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                Click to Expand Detailed View ⤢
              </div>
            </button>

            <div>
              <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.5em] text-brand-gold">
                {project.category}
              </span>
              <h1
                className="text-4xl font-serif uppercase leading-tight tracking-tight text-brand-dark md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {project.name}
              </h1>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <p
              className="mb-5 text-lg font-light italic leading-relaxed text-neutral-500"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {project.intro}
            </p>
            <div className="mb-5 h-[2px] w-16 bg-brand-gold" />
            <p className="text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              {project.description}
            </p>

            {/* Turnkey Fit-out Execution Specifications Card */}
            {(project.executionTime || project.scopeOfWork) && (
              <div className="bg-neutral-50 border border-neutral-100 p-6 rounded-sm mt-8 space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
                  <span className="w-1.5 h-6 bg-brand-gold rounded-sm animate-pulse" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                    Turnkey Execution Specs
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-left">
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

                {project.scopeOfWork && (
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 block mb-2.5">Scope of Execution Works</span>
                    <ul className="space-y-2">
                      {project.scopeOfWork.map((scope, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5 text-xs text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
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

      <section className="bg-neutral-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.35em] text-neutral-400">
                Project Photos
              </span>
              <h2 className="text-3xl font-serif uppercase text-brand-dark md:text-5xl">
                10 Detailed Views
              </h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-relaxed text-neutral-500">
              Select any project image to view it in a focused gallery with navigation and thumbnails.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <button
                key={`${project.slug}-gallery-${index}`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden bg-neutral-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <img
                  src={image}
                  alt={`${project.name} view ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-dark shadow-sm">
                  View {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.35em] text-brand-gold">
                Suggested Products
              </span>
              <h2 className="text-3xl font-serif uppercase text-brand-dark md:text-5xl">
                Continue Exploring
              </h2>
            </div>
            <ArrowRight className="hidden text-brand-gold sm:block" size={28} strokeWidth={1.5} />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {suggestedProjects.map((suggested) => (
              <a
                key={suggested.slug}
                href={`/featured-fitouts/${suggested.slug}`}
                className="group block text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img
                    src={suggested.img}
                    alt={suggested.name}
                    className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 transition-colors group-hover:bg-brand-dark/30" />
                </div>
                <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.3em] text-brand-gold">
                  {suggested.category}
                </span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-brand-dark transition-colors group-hover:text-brand-gold">
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

            <div className="relative z-20 flex min-h-screen items-center justify-center px-5 py-16">
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

                <div className="mt-4 flex justify-center gap-2 overflow-x-auto px-2 pb-2">
                  {project.gallery.map((image, index) => (
                    <button
                      key={`${project.slug}-thumb-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`h-12 w-16 shrink-0 overflow-hidden border transition-all ${
                        index === activeImageIndex ? 'border-white opacity-100' : 'border-white/20 opacity-45 hover:opacity-80'
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
    </main>
  );
};

export default FeaturedFitoutDetail;
