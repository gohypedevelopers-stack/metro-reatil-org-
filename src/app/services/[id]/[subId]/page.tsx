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
              <PenTool size={12} /> Specialized Solution
            </span>
            <h1
              className="mobile-heading-balance hero-title-1 font-serif text-white uppercase tracking-tight text-center break-words hyphens-auto w-full"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {data.title}
            </h1>
            <p
              className="text-neutral-300 text-[18px] font-light italic mt-2 max-w-2xl mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <h2
            className="mobile-heading-balance hero-title-1 font-serif text-brand-dark uppercase tracking-tight mb-6 break-words hyphens-auto"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            {data.contentTitle}
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed font-light mb-6 md:mb-10">
            {data.contentDesc}
          </p>
          <div className="w-24 h-[2px] bg-brand-gold mx-auto" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {data.gallery.map((item: any, i: number) => (
              <a
                href={`https://wa.me/918800607967?text=Hi, I want to get a quote on ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="relative block aspect-[4/3] overflow-hidden group border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                {/* Permanent Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 pointer-events-none" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 pointer-events-none">
                  <h3 className="text-[18px] lg:text-[17px] xl:text-lg 2xl:text-xl font-serif text-white uppercase tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES */}
      <FullServicesSection forceCarousel={true} hideViewAllButton={true} title="RECOMMENDED" subtitle="Services" showTabs={true} />
    </div>
  );
}
