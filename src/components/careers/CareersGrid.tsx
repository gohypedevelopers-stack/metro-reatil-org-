"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Role {
  category: string;
  location: string;
  title: string;
  description: string;
}

interface CareersGridProps {
  initialRoles: Role[];
}

export default function CareersGrid({ initialRoles }: CareersGridProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Dynamically extract unique categories from the roles that were fetched
  const uniqueCategories = Array.from(new Set(initialRoles.map(role => role.category))).filter(Boolean);
  const filterCategories = ['All', ...uniqueCategories];

  // Filtering Logic
  const filteredRoles = initialRoles.filter((role) => {
    const matchesFilter = activeFilter === 'All' || role.category.toLowerCase() === activeFilter.toLowerCase();
    
    const matchesSearch = 
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Sync Carousel Dots when api or filtered list changes
  useEffect(() => {
    if (!api) return;

    // We wrap in a short timeout to let Embla update its DOM nodes first
    const timer = setTimeout(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    }, 50);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      clearTimeout(timer);
      api.off("select", onSelect);
    };
  }, [api, filteredRoles]);

  return (
    <div>
      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-start mb-6 md:mb-12">
        {/* Search Bar */}
        <div className="relative w-full lg:w-96 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input 
            type="search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search career areas..." 
            className="w-full pl-12 pr-4 py-3 rounded-sm border border-neutral-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-white text-sm font-light text-brand-dark"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex overflow-x-auto gap-2 pb-4 md:pb-0 justify-start lg:justify-end md:flex-wrap snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full lg:max-w-[620px] -mx-6 md:mx-0">
          {filterCategories.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 snap-start px-4 py-2.5 md:px-4 md:py-3 rounded-sm text-xs md:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 ${
                activeFilter === filter 
                  ? 'bg-brand-gold text-white shadow-sm' 
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-brand-gold hover:text-brand-gold shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Roles Grid / Carousel */}
      {filteredRoles.length > 0 ? (
        <>
          {/* Desktop View: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:border-brand-gold/30 group flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-6 text-sm font-medium">
                    <span className="text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-sm text-xs font-semibold">{role.category}</span>
                    <span className="text-neutral-400 text-xs">{role.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif tracking-wide uppercase group-hover:text-brand-gold transition-colors">{role.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>
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
                {filteredRoles.map((role, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[60%]">
                    <div className="bg-white p-6 rounded-sm border border-neutral-100 shadow-sm h-full min-h-[250px] flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6 text-sm font-medium">
                          <span className="text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-sm text-xs font-semibold">{role.category}</span>
                          <span className="text-neutral-400 text-xs">{role.location}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 font-serif tracking-wide uppercase">{role.title}</h3>
                        <p className="text-neutral-600 text-xs leading-relaxed mb-6">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Pagination Dots */}
            {count > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: count }).map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      current === idx ? 'bg-brand-gold w-6' : 'bg-neutral-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="bg-white border border-neutral-100 rounded-sm p-12 text-center max-w-md mx-auto my-8 shadow-sm">
          <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
            No career areas found matching "{searchQuery}" under the category "{activeFilter}".
          </p>
          <button
            onClick={() => {
              setActiveFilter('All');
              setSearchQuery('');
            }}
            className="text-brand-gold font-bold text-xs uppercase tracking-widest hover:text-brand-dark transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
