"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, ChevronRight, PenTool, Award, ShieldCheck } from 'lucide-react';
import { STYLE_DETAIL_DATA } from './data';

export default function DesignStyleDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const data = STYLE_DETAIL_DATA[id] || STYLE_DETAIL_DATA["contemporary"];

  return (
    <div className="bg-white">

      {/* HERO — dark banner */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center justify-center bg-brand-dark">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full h-full flex flex-col items-center justify-center pt-16 md:pt-24">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-2">
              <PenTool size={12} /> Design Execution Style
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* LEFT: hero image — sticky */}
            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden group shadow-2xl lg:sticky lg:top-28">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* RIGHT: title, tagline, description, stats */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] block">Aesthetic Overview</span>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark uppercase tracking-tight"
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
              </div>

              <div className="w-16 h-[2px] bg-brand-gold" />

              {/* Description paragraphs */}
              <div className="space-y-4">
                {data.desc.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-neutral-500 text-base leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 pt-4">
                {data.stats.map((stat: any, i: number) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col p-5 bg-neutral-50/70 border border-neutral-100">
                      <div className="text-brand-gold mb-3">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div className="text-xl font-serif text-brand-dark leading-tight">{stat.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
              >
                Request a Consultation <ChevronRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* PAGE INTRO SECTION */}
      {data.pageIntro && (
        <section className="py-16 md:py-24 bg-white border-b border-neutral-100">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark uppercase tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {data.pageIntro.heading}
            </h2>
            <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto">
              {data.pageIntro.text}
            </p>
          </div>
        </section>
      )}

      {/* SUB-SERVICES GRID */}
      {data.subServices && (
        <section className="py-20 md:py-28 bg-neutral-50 border-b border-neutral-100">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-dark uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {data.title} <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Elements We Create</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.subServices.map((service: any, idx: number) => (
                <a 
                  href={`https://wa.me/918800607967?text=Hi, I want to get a quote on ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx} 
                  className="group cursor-pointer bg-white border border-neutral-100 hover:shadow-xl transition-all duration-500 block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8 text-center md:text-left">
                    <h3 className="text-xl font-serif text-brand-dark mb-4">{service.title}</h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed">{service.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      

      {/* KEY ELEMENTS / METODOLOGY */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Execution</span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-dark uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              How We Deliver This Style
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((p: any, i: number) => (
              <div key={i} className="relative p-8 border border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 group">
                <div
                  className="absolute top-4 right-5 text-6xl font-serif text-neutral-100 group-hover:text-brand-gold/10 transition-colors select-none"
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



    </div>
  );
}
