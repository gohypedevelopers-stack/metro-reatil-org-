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
      <section className="relative min-h-[60vh] flex flex-col justify-end pt-32 md:pt-40 pb-16 bg-brand-dark overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale-[40%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full text-center">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-3 flex items-center justify-center gap-2">
            <PenTool size={12} /> Design Execution Style
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-tight leading-[1.1] text-center"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            {data.title}
          </h1>
          <p
            className="text-neutral-300 text-lg md:text-xl font-light italic mt-2 max-w-2xl mx-auto text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {data.tagline}
          </p>
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
                  className="text-4xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight"
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
              <div className="grid grid-cols-3 gap-5 pt-4">
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

      {/* KEY ELEMENTS / METODOLOGY */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Execution</span>
            <h2
              className="text-3xl md:text-4xl font-serif text-brand-dark uppercase tracking-tight"
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
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                    {p.step}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-14 md:w-2/3">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
            <h2
              className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Featured {data.title} Work
            </h2>
            <p className="text-neutral-400 font-light text-base">
              Examine the precision and quality of our completed style installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gallery.map((imgUrl: string, i: number) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group border border-neutral-800 bg-black">
                <img
                  src={imgUrl}
                  alt={`${data.title} Example`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
