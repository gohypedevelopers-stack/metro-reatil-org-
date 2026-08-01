"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const JoineryTeamSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

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
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-white border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-[19px] sm:text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Our Joinery Team Is At Work
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-4xl mx-auto">
            Master artisans are busy building wonderful items in our workshop. Joinery is an entire process, bringing your ideas to life. You can take a free, one-on-one meeting to talk with a designer, specify a wish list, and get a proposal detailing the scale of finishes and overall cost estimates.
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                  <div className="relative group aspect-[4/3] overflow-hidden bg-black rounded-sm">
                    <img
                      src={`/working of metro retail/METRO RETAIL SOLUTIONS ${i}.png`}
                      alt={`Joinery team at work ${i + 1}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-brand-gold w-4 sm:w-5'
                    : 'bg-neutral-300 w-1.5 hover:bg-brand-gold/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoineryTeamSection;
