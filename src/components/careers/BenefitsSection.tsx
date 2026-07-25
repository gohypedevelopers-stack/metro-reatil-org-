"use client";

import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, BookOpen, Users, Building, ShieldCheck, Cpu } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const BENEFITS = [
  {
    title: "Career Growth",
    description: "Clear pathways for advancement and professional development opportunities within a growing company.",
    icon: TrendingUp,
  },
  {
    title: "Training & Development",
    description: "Access to training programs and skill development to help you excel in your role.",
    icon: BookOpen,
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside industry experts in a supportive, team-oriented environment.",
    icon: Users,
  },
  {
    title: "Prestigious Projects",
    description: "Work on high-profile residential, commercial, and retail projects across premier locations.",
    icon: Building,
  },
  {
    title: "Competitive Benefits",
    description: "Attractive salary packages with comprehensive benefits including health insurance and annual leave.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Facility",
    description: "Work with the latest equipment and technologies in our state-of-the-art manufacturing facility.",
    icon: Cpu,
  },
];

export default function BenefitsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-12 md:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-end mb-8 md:mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl text-white uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Build Your Career <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>With Us</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-neutral-400 text-lg">
              At Metro Retail Solutions, our team brings together designers, project managers, engineers, craftsmen and operations specialists working across high-end spaces.
            </p>
          </div>
        </div>

        {/* Desktop View: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-sm flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-cinzel), serif' }}>{benefit.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View: Swipeable Carousel */}
        <div className="block md:hidden">
          <Carousel
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {BENEFITS.map((benefit, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[60%]">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full min-h-[250px] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-brand-gold/20 rounded-sm flex items-center justify-center mb-6 text-brand-gold">
                        <benefit.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-cinzel), serif' }}>{benefit.title}</h3>
                      <p className="text-neutral-400 leading-relaxed text-xs">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => api?.scrollTo(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  current === idx ? 'bg-brand-gold w-6' : 'bg-white/20 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
