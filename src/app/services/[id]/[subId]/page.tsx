"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ChevronRight, PenTool } from 'lucide-react';
import FullServicesSection from '../../../../components/home/FullServicesSection';

import { NESTED_SERVICE_DATA } from '../data';

export default function NestedServiceDetailPage() {
  const params = useParams();
  const subId = params?.subId as string;

  const data = NESTED_SERVICE_DATA[subId] || NESTED_SERVICE_DATA["default"];

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
            <PenTool size={12} /> Specialized Solution
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

      {/* INTRO CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <h2
            className="text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            {data.contentTitle}
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed font-light mb-10">
            {data.contentDesc}
          </p>
          <div className="w-24 h-[2px] bg-brand-gold mx-auto" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.gallery.map((item: any, i: number) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                {/* Dark Gradient Overlay for readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white z-10">
                  <h3 className="text-xl font-serif text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-sm md:text-base font-medium mb-4 leading-relaxed text-neutral-200">
                      {item.description}
                    </p>
                  )}
                  
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] md:text-xs font-bold tracking-wider text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="self-end mt-2">
                    <a
                      href={`https://wa.me/971559693009?text=Hi, I want to get a quote on ${item.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#111] px-5 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 group-hover:bg-brand-dark text-white group-hover:text-brand-gold"
                    >
                      Get a Quote <ChevronRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES */}
      <FullServicesSection forceCarousel={true} />
    </div>
  );
}
