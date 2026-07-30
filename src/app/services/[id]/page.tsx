"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, ChevronRight, PenTool, Award, ShieldCheck } from 'lucide-react';
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

  return (
    <div className="bg-white">

      {/* HERO — dark banner */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center justify-center bg-brand-dark">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale-[40%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full h-full flex flex-col items-center justify-center pt-16 md:pt-24">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-2">
              <PenTool size={12} /> Specialized Capability
            </span>
            <h1
              className="mobile-heading-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-tight leading-[1.2] text-center break-words hyphens-auto w-full"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {data.title}
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-base sm:text-lg md:text-xl font-light italic mt-2 max-w-2xl mx-auto text-center px-4"
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
                  className="mobile-heading-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark uppercase tracking-tight break-words hyphens-auto"
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

              {/* Stats grid */}
              <div className="flex flex-row justify-center lg:justify-start items-center gap-2 sm:gap-4 pt-4 w-full">
                {data.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col items-center justify-center p-2 sm:p-4 bg-neutral-50/70 border border-neutral-100 flex-1 text-center min-w-[30%]">
                      <div className="text-brand-gold mb-1 sm:mb-2">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <div className="text-sm sm:text-base font-serif text-brand-dark leading-tight">
                        <AnimatedNumber value={stat.value} />
                      </div>
                      <div className="text-[7px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400 mt-1">{stat.label}</div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {data.process.map((p, i) => (
              <div key={i} className="relative p-4 sm:p-6 md:p-8 border border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 group">
                <div
                  className="absolute top-3 right-3 sm:top-4 sm:right-5 text-4xl sm:text-6xl font-serif text-neutral-100 group-hover:text-brand-gold/10 transition-colors select-none"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {i + 1}
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3 flex items-center justify-center gap-1.5 sm:gap-2">
                    <CheckCircle2 size={14} className="text-brand-gold shrink-0" />
                    <span>{p.step}</span>
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 md:py-28 bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-14 md:w-2/3">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
            <h2
              className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl font-serif text-white uppercase tracking-tight mb-4 break-words hyphens-auto"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Featured {data.title} Work
            </h2>
            <p className="text-neutral-400 font-light text-base">
              Examine the precision and quality of our completed installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((item, i) => {
              const isObject = typeof item === 'object';
              const img = isObject ? item.img : item;
              const title = isObject && item.title ? item.title : `${data.title} Expertise`;
              const description = isObject && item.description ? item.description : "Premium execution delivered with absolute precision, high-quality materials, and unmatched craftsmanship.";
              const tags = isObject && item.tags && item.tags.length > 0 ? item.tags : ["Premium Quality", "Expert Execution"];
              const bullets = isObject && item.bullets && item.bullets.length > 0 ? item.bullets : ["Turnkey bespoke solutions", "In-house master craftsmen"];
              const buttonText = isObject && item.buttonText ? item.buttonText : 'VIEW DETAILS →';

              return (
                item.slug ? (
                  <Link href={`/services/${id}/${item.slug}`} key={i} className="relative aspect-[4/5] overflow-hidden group border border-neutral-800 block cursor-pointer">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark Gradient Overlay for readability on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Hover Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 text-white z-10 pointer-events-none">

                      <div className="hidden md:block">
                        <h3 className="text-lg md:text-xl lg:text-[15px] xl:text-lg 2xl:text-xl font-serif text-white uppercase tracking-tight mb-1 lg:mb-2 leading-snug">
                          {title}
                        </h3>

                        <p className="text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium mb-3 lg:mb-4 leading-relaxed text-neutral-200">
                          {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.map((tag, idx) => (
                            <span key={idx} className="border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] md:text-xs font-bold tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <ul className="mb-6 space-y-1.5">
                          {bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center text-[11px] md:text-xs font-bold text-neutral-300">
                              <span className="mr-2 w-[3px] h-[3px] bg-brand-gold rounded-full flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="self-end mt-2">
                        <span className="bg-[#111] px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 flex items-center gap-2 group-hover:bg-brand-dark group-hover:text-brand-gold">
                          <span className="md:hidden truncate">{title}</span>
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
                    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 text-white z-10 pointer-events-none">

                      <div className="hidden md:block">
                        <h3 className="text-lg md:text-xl lg:text-[15px] xl:text-lg 2xl:text-xl font-serif text-white uppercase tracking-tight mb-1 lg:mb-2 leading-snug">
                          {title}
                        </h3>

                        <p className="text-xs md:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium mb-3 lg:mb-4 leading-relaxed text-neutral-200">
                          {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.map((tag, idx) => (
                            <span key={idx} className="border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] md:text-xs font-bold tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <ul className="mb-6 space-y-1.5">
                          {bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center text-[11px] md:text-xs font-bold text-neutral-300">
                              <span className="mr-2 w-[3px] h-[3px] bg-brand-gold rounded-full flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="self-end mt-2">
                        <span className="bg-[#111] px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 flex items-center gap-2 group-hover:bg-brand-dark group-hover:text-brand-gold">
                          <span className="md:hidden truncate">{title}</span>
                          <span className="hidden md:inline">
                            {buttonText.replace(' →', '').replace('→', '')}
                            {buttonText.includes('→') && <span className="hidden md:inline">→</span>}
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                )
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL SERVICES */}
      <FullServicesSection forceCarousel={true} hideViewAllButton={true} />

      {/* JOINERY TEAM SECTION */}
      <JoineryTeamSection />
    </div>
  );
}
