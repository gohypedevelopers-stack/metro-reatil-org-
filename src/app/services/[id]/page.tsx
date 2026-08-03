"use client";

import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, ChevronRight, PenTool, Award, ShieldCheck } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import FullServicesSection from '../../../components/home/FullServicesSection';
import JoineryTeamSection from '../../../components/services/JoineryTeamSection';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

import { SUBCATEGORY_DATA } from './data';

function AnimatedNumber({ value }: { value: string }) {
  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.substring(0, numericMatch ? value.indexOf(numericMatch[0]) : 0);
  const suffix = value.substring(numericMatch ? value.indexOf(numericMatch[0]) + numericMatch[0].length : value.length);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [numericValue, count]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function SubcategoryDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  console.log("Current ID:", id);

  const data = SUBCATEGORY_DATA[id] || SUBCATEGORY_DATA["interior-design"];

  // Carousel setup for mobile gallery
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="bg-white">

      {/* HERO — dark banner */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center justify-center bg-brand-dark">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="hero-overlay" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full h-full flex flex-col items-center justify-center pt-16 md:pt-24">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center text-center">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-2">
              <PenTool size={12} /> Specialized Capability
            </span>
            <h1
              className="mobile-heading-balance hero-title-1 font-serif text-white uppercase tracking-tight text-center break-words hyphens-auto w-full"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {data.title}
            </h1>
            <p
              className="text-neutral-300 text-[18px] font-light italic mt-2 max-w-2xl mx-auto text-center px-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION — image left, content + stats right */}
      <section className="pt-6 pb-12 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          {/* MOBILE ONLY: Title Block above image */}
          <div className="flex lg:hidden flex-col items-center text-center space-y-3 mb-8">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] block">Active Service</span>
            <h2
              className="mobile-heading-balance text-xl sm:text-2xl font-serif text-brand-dark uppercase tracking-tight break-words hyphens-auto"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {data.title}
            </h2>
            <p
              className="text-neutral-400 text-lg font-light italic"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {data.tagline}
            </p>
            <div className="w-16 h-[2px] bg-brand-gold mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT: hero image — sticky on desktop */}
            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden group shadow-2xl lg:sticky lg:top-28">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* RIGHT: content + stats */}
            <div className="lg:col-span-6 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">

              {/* DESKTOP ONLY: Title Block */}
              <div className="hidden lg:flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 w-full">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] block">Active Service</span>
                <h2
                  className="mobile-heading-balance hero-title-1 font-serif text-brand-dark uppercase tracking-tight break-words hyphens-auto"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {data.title}
                </h2>
                <p
                  className="text-neutral-400 text-lg md:text-xl font-light italic"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {data.tagline}
                </p>
                <div className="w-16 h-[2px] bg-brand-gold mt-4 mx-auto lg:mx-0" />
              </div>

              {/* Description paragraphs */}
              <div className="space-y-4">
                {data.desc.map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-500 text-base leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-row justify-center lg:justify-start items-stretch gap-2 sm:gap-4 pt-4 w-full lg:max-w-[90%] xl:max-w-[80%]">
                {data.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col items-center justify-center p-3 sm:p-5 lg:py-3 lg:px-2 xl:px-4 bg-neutral-50/70 border border-neutral-100 flex-1 text-center min-w-[30%] lg:min-w-0">
                      <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-2">
                        <div className="text-brand-gold shrink-0 flex items-center justify-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4" strokeWidth={1.5} />
                        </div>
                        <div className="text-sm sm:text-base lg:text-sm font-serif text-brand-dark leading-tight">
                          <AnimatedNumber value={stat.value} />
                        </div>
                      </div>
                      <div className="text-[7px] sm:text-[9px] lg:text-[7.5px] xl:text-[8.5px] font-bold uppercase tracking-wider text-neutral-400 mt-1 sm:mt-1.5 lg:mt-1 whitespace-nowrap">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center lg:justify-start w-full">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-dark text-white px-5 py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
                >
                  Request a Consultation <ChevronRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTION PROCESS */}
      <section className="py-12 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Methodology</span>
            <h2
              className="mobile-heading-balance text-xl sm:text-3xl md:text-4xl font-serif text-brand-dark uppercase tracking-tight break-words hyphens-auto"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Our Execution Process
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
            {data.process.map((p, i) => (
              <div key={i} className="relative p-3 sm:p-6 md:p-8 border border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 group flex flex-col justify-center min-h-[140px] sm:min-h-[200px]">
                <div
                  className="absolute top-2 right-2 sm:top-4 sm:right-5 text-3xl sm:text-6xl font-serif text-neutral-100 group-hover:text-brand-gold/10 transition-colors select-none"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {i + 1}
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-[9px] sm:text-sm font-bold text-brand-dark uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-3 flex items-center justify-center gap-1 sm:gap-2">
                    <CheckCircle2 size={12} className="text-brand-gold shrink-0 sm:w-3.5 sm:h-3.5 w-[10px] h-[10px]" />
                    <span>{p.step}</span>
                  </h3>
                  <p className="text-neutral-500 text-[9px] sm:text-sm leading-snug sm:leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 md:py-28 bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-14 md:w-2/3 mx-auto text-center">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
            <h2
              className="mobile-heading-balance text-[19px] sm:text-3xl md:text-5xl font-serif text-white uppercase tracking-tight mb-4 break-words hyphens-auto"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Featured {data.title} Work
            </h2>
            <p className="text-neutral-400 font-light text-base">
              Examine the precision and quality of our completed installations.
            </p>
          </div>

          <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
            <div className="flex md:grid -ml-4 md:ml-0 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {data.gallery.map((item, i) => {
                const isObject = typeof item === 'object';
                const img = isObject ? item.img : item;
                const title = isObject && item.title ? item.title : `${data.title} Expertise`;
                const description = isObject && item.description ? item.description : "Premium execution delivered with absolute precision, high-quality materials, and unmatched craftsmanship.";
                const tags = isObject && item.tags && item.tags.length > 0 ? item.tags : ["Premium Quality", "Expert Execution"];
                const bullets = isObject && item.bullets && item.bullets.length > 0 ? item.bullets : ["Turnkey bespoke solutions", "In-house master craftsmen"];
                const buttonText = isObject && item.buttonText ? item.buttonText : 'VIEW DETAILS →';

                return (
                  <div key={i} className="flex-[0_0_85%] min-w-0 pl-4 md:pl-0 md:flex-none">
                    {item.slug ? (
                      <Link href={`/services/${id}/${item.slug}`} className="relative aspect-[4/5] overflow-hidden group border border-neutral-800 block cursor-pointer">
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Dark Gradient Overlay for readability on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Hover Content */}
                        <div className="absolute inset-0 px-3 pt-3 pb-3 sm:p-4 md:p-6 flex flex-col justify-end translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 text-white z-10 pointer-events-none">

                          <div className="hidden md:block">
                            <h3 className="text-[18px] lg:text-[15px] xl:text-lg 2xl:text-xl font-serif text-white uppercase tracking-tight mb-1 lg:mb-2 leading-snug">
                              {title}
                            </h3>

                            <p className="text-[9px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium mb-1.5 sm:mb-3 lg:mb-4 leading-relaxed text-neutral-200">
                              {description}
                            </p>

                            <div className="flex flex-row gap-1 sm:gap-2 mb-1.5 sm:mb-4 overflow-hidden">
                              {tags.map((tag, idx) => (
                                <span key={idx} className="whitespace-nowrap border border-white/30 bg-black/40 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[6px] sm:text-[9px] md:text-xs font-bold tracking-wider">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <ul className="mb-2 sm:mb-6 space-y-1 sm:space-y-1.5">
                              {bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-center text-[9px] sm:text-[10px] md:text-xs font-bold text-neutral-300">
                                  <span className="mr-1.5 sm:mr-2 w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-brand-gold rounded-full flex-shrink-0" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-1 sm:mt-2 w-full flex justify-start">
                            <span className="bg-[#111] px-3 py-2 sm:px-5 sm:py-3 text-[8px] sm:text-[9px] md:text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 flex items-center gap-1 sm:gap-2 group-hover:bg-brand-dark group-hover:text-brand-gold">
                              <span className="md:hidden line-clamp-1">{title}</span>
                              <span className="hidden md:inline">
                                {buttonText.replace(' →', '').replace('→', '')}
                                {buttonText.includes('→') && <span className="hidden md:inline">→</span>}
                              </span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <a href="https://wa.me/918800607967" target="_blank" rel="noopener noreferrer" key={i} className="relative block aspect-[4/5] overflow-hidden group border border-neutral-800 cursor-pointer">
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Dark Gradient Overlay for readability on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Hover Content */}
                        <div className="absolute inset-0 px-3 pt-3 pb-3 sm:p-4 md:p-6 flex flex-col justify-end translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 text-white z-10 pointer-events-none">

                          <div className="hidden md:block">
                            <h3 className="text-[18px] lg:text-[15px] xl:text-lg 2xl:text-xl font-serif text-white uppercase tracking-tight mb-1 lg:mb-2 leading-snug">
                              {title}
                            </h3>

                            <p className="text-[9px] sm:text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium mb-1.5 sm:mb-3 lg:mb-4 leading-relaxed text-neutral-200">
                              {description}
                            </p>

                            <div className="flex flex-row gap-1 sm:gap-2 mb-1.5 sm:mb-4 overflow-hidden">
                              {tags.map((tag, idx) => (
                                <span key={idx} className="whitespace-nowrap border border-white/30 bg-black/40 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[6px] sm:text-[9px] md:text-xs font-bold tracking-wider">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <ul className="mb-2 sm:mb-6 space-y-1 sm:space-y-1.5">
                              {bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-center text-[9px] sm:text-[10px] md:text-xs font-bold text-neutral-300">
                                  <span className="mr-1.5 sm:mr-2 w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] bg-brand-gold rounded-full flex-shrink-0" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-1 sm:mt-2 w-full flex justify-start">
                            <span className="bg-[#111] px-3 py-2 sm:px-5 sm:py-3 text-[8px] sm:text-[9px] md:text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 flex items-center gap-1 sm:gap-2 group-hover:bg-brand-dark group-hover:text-brand-gold">
                              <span className="md:hidden line-clamp-1">{title}</span>
                              <span className="hidden md:inline">
                                {buttonText.replace(' →', '').replace('→', '')}
                                {buttonText.includes('→') && <span className="hidden md:inline">→</span>}
                              </span>
                            </span>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Carousel Dots */}
          <div className="flex md:hidden justify-center items-center gap-1.5 sm:gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? 'bg-brand-gold w-4 sm:w-5'
                    : 'bg-neutral-300 w-1.5 hover:bg-brand-gold/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES */}
      <FullServicesSection forceCarousel={true} hideViewAllButton={true} title="RECOMMENDED" subtitle="Services" showTabs={true} />

      {/* JOINERY TEAM SECTION */}
      <JoineryTeamSection />
    </div>
  );
}
