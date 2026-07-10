"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Filter } from 'lucide-react';
import { FeaturedFitout } from '../../data/featuredFitouts';

const MAIN_CATEGORIES = ["All", "Commercial", "Residential", "Retail"];

const SUB_CATEGORIES: Record<string, string[]> = {
  "Residential": [
    "OVERVIEW",
    "LIVING & DINING",
    "BEDROOMS",
    "KITCHENS",
    "BATHROOMS",
    "WALK-IN WARDROBES",
    "VANITIES",
    "BAR UNITS",
    "HOME OFFICE",
    "FAMILY LOUNGE / MAJLIS",
    "KIDS ROOMS",
    "OUTDOOR LIVING"
  ],
  "Commercial": [
    "OVERVIEW",
    "OFFICES",
    "CLINICS",
    "GYMS",
    "SALONS"
  ],
  "Retail": [
    "OVERVIEW",
    "KIOSKS",
    "F & B",
    "CAFES",
    "RESTAURANTS"
  ]
};

// Map original data category keys to the portfolio sectors
const getPortfolioSector = (category: string): string => {
  if (!category) return "All";
  const catUpper = category.toUpperCase();
  if (catUpper === "OFFICE") return "Commercial";
  if (catUpper === "RESIDENTIAL") return "Residential";
  if (catUpper === "RETAIL" || catUpper === "F&B") return "Retail";
  return category;
};

const CompanyProfile = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
          Metro Retail Solutions
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl font-light leading-relaxed mb-12">
          We are a turnkey fit-out company handling complete MEP, civil, and interior works, with over 25+ years of experience and having in-house manufacturing of complete modular fixtures (wooden, metal, powder coat units, etc.).
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-12">
          {/* Under One Roof */}
          <div>
            <h3 className="text-brand-dark font-bold mb-2 md:mb-4 tracking-widest uppercase text-[10px] md:text-sm border-b border-neutral-200 pb-2 text-center md:text-left">
              Under One Roof
            </h3>
            <ul className="space-y-2 md:space-y-3 text-neutral-600 text-[9px] md:text-base font-light">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Complete setup of Metal Work including laser machines
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Complete setup of Wooden Work
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Complete setup of Paint Work
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Complete setup of Powder Coating Work
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-brand-dark font-bold mb-2 md:mb-4 tracking-widest uppercase text-[10px] md:text-sm border-b border-neutral-200 pb-2 text-center md:text-left">
              Core Capabilities
            </h3>
            <ul className="space-y-2 md:space-y-3 text-neutral-600 text-[9px] md:text-base font-light">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Retail Fixtures & Turnkey Solutions
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Custom Furniture & 3D Signages
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                Display Counters & POP Displays
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2 font-bold">✓</span>
                LIT / Non-LIT Branding & Acrylics
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 border border-neutral-100 shadow-sm rounded-sm">
          <h3 className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-4 text-center">
            Our Manufacturing Facility & Team
          </h3>
          <p className="text-neutral-500 text-center leading-relaxed text-sm">
            Based in Delhi and Greater Noida, our state-of-the-art facilities are equipped with the latest machinery.
            Our highly skilled technical manpower—including carpenters, painters, electricians, and welders—works across
            multiple shifts 24x7 to ensure client satisfaction and timely delivery.
          </p>
        </div>

        <div className="mt-16 text-center overflow-hidden w-full relative">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 20s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />
          <h3 className="text-brand-dark font-bold uppercase tracking-[0.2em] text-xs mb-8">
            Trusted By Renowned Brands
          </h3>
          <div className="relative w-full overflow-hidden">
            {/* Fade gradients on sides for premium look */}
            <div className="absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee gap-4 md:gap-8 py-2">
              {['Safari', 'Uppercase', 'IT Luggage', 'Peach Mode', 'Cashify', 'Van Heusen', 'Safari', 'Uppercase', 'IT Luggage', 'Peach Mode', 'Cashify', 'Van Heusen'].map((brand, idx) => (
                <span 
                  key={`${brand}-${idx}`} 
                  className="px-6 py-3 bg-neutral-100 text-neutral-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-sm shrink-0 whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

interface CountUpNumberProps {
  end: number;
  duration?: number;
}

function CountUpNumber({ end, duration = 1500 }: CountUpNumberProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function PortfolioClient({ initialProjects }: { initialProjects: FeaturedFitout[] }) {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  const subFilterParam = searchParams.get('subFilter');

  const [filter, setFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("OVERVIEW");

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setSubFilter("OVERVIEW");
    
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (cat === "All") {
        params.delete("filter");
      } else {
        params.set("filter", cat);
      }
      params.delete("subFilter");
      const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  const handleSubFilterChange = (sub: string) => {
    setSubFilter(sub);
    
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (sub === "OVERVIEW") {
        params.delete("subFilter");
      } else {
        params.set("subFilter", sub);
      }
      const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  // Sync state with URL search params reactively
  useEffect(() => {
    let matchedFilter = "All";
    if (filterParam) {
      const matched = MAIN_CATEGORIES.find(c => c.toLowerCase() === filterParam.toLowerCase());
      if (matched) {
        matchedFilter = matched;
        setFilter(matched);
      } else {
        setFilter("All");
      }
    } else {
      setFilter("All");
    }

    if (subFilterParam && matchedFilter !== "All") {
      const subCats = SUB_CATEGORIES[matchedFilter];
      if (subCats) {
        const matchedSub = subCats.find(s => s.toLowerCase() === subFilterParam.toLowerCase());
        if (matchedSub) {
          setSubFilter(matchedSub);
          return;
        }
      }
    }
    setSubFilter("OVERVIEW");
  }, [filterParam, subFilterParam]);

  // Scroll to filter section when filter changes from the URL (navbar navigation)
  useEffect(() => {
    if (filterParam && filterParam.toLowerCase() !== 'all') {
      const scrollToSection = () => {
        const element = document.getElementById('filter-section');
        if (element) {
          const navbarHeight = 100; // Offset for fixed navbar + breathing room
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Try scrolling after a short delay to allow layout and lenis to settle
      const timer = setTimeout(scrollToSection, 400);
      return () => clearTimeout(timer);
    }
  }, [filterParam, subFilterParam]);

  const filteredProjects = initialProjects.filter(proj => {
    const sector = getPortfolioSector(proj.category);

    // 1. Filter by main sector
    if (filter !== "All") {
      if (sector.toLowerCase() !== filter.toLowerCase()) return false;
    }

    // 2. Filter by subcategory point
    if (subFilter !== "OVERVIEW") {
      const matchSub = proj.subcategory && proj.subcategory.toUpperCase() === subFilter.toUpperCase();
      if (!matchSub) return false;
    }

    return true;
  });

  return (
    <div className="bg-brand-dark pt-20">

      {/* ── Hero Banner ── */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden flex items-center bg-brand-dark">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeOut" },
            scale: { duration: 8, ease: [0.25, 1, 0.5, 1] }
          }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
          alt="Metro Portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/70" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            <span
              className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block"
            >
              Metro Portfolio
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Selected <br />
              <span
                className="text-brand-gold italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Works Showcase
              </span>
            </h1>
            <p
              className="text-neutral-300 text-base md:text-lg font-light max-w-2xl leading-relaxed mx-auto md:mx-0"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              A premium showcase of our completed turnkey fit-out projects, delivered with absolute civil, MEP, and bespoke carpentry execution.
            </p>
          </div>
        </div>
      </section>

      {/* ── Company Profile Section ── */}
      <CompanyProfile />

      {/* ── Filter Controls ── */}
      <section id="filter-section" className="py-2.5 md:py-6 border-b border-neutral-100 bg-white sticky top-20 z-20 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">

            {/* Main Sector Pills */}
            <div className="flex flex-row justify-center lg:justify-start gap-1.5 sm:gap-3 w-full lg:w-auto">
              {MAIN_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-3 sm:px-8 py-1.5 md:py-2.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border shrink-0 ${filter === cat
                    ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                    : 'bg-white text-neutral-400 border-neutral-200 hover:border-brand-gold hover:text-brand-dark'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dynamic Subcategory Points */}
            {filter !== "All" && SUB_CATEGORIES[filter] && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2.5 lg:border-l lg:border-neutral-200 lg:pl-8">
                <div className="hidden sm:flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-neutral-400 mr-2 shrink-0">
                  <Filter size={10} className="text-brand-gold" /> Filter Points:
                </div>
                {SUB_CATEGORIES[filter].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => handleSubFilterChange(sub)}
                    className={`px-3 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full border shrink-0 ${subFilter === sub
                      ? 'bg-brand-gold text-white border-brand-gold shadow-sm'
                      : 'bg-white text-neutral-500 border-neutral-200 hover:border-brand-gold/60 hover:text-brand-dark'
                      }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-8 gap-y-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, index) => (
                <motion.div
                  key={proj.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <a href={`/featured-fitouts/${proj.slug}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden mb-3 sm:mb-6 bg-neutral-100 cursor-pointer">
                      <img
                        src={proj.img}
                        alt={proj.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">{proj.subcategory || "OVERVIEW"}</span>
                          <h3 className="text-2xl text-white font-serif uppercase tracking-tight mb-2 leading-snug">{proj.name}</h3>

                          {proj.executionTime && (
                            <span className="text-white/70 text-[8px] uppercase tracking-[0.15em] block mb-4 font-bold">
                              Executed: <span className="text-brand-gold">{proj.executionTime}</span> • Scale: {proj.projectScale}
                            </span>
                          )}

                          <div className="w-12 h-[1px] bg-white/30 mb-6" />
                          <button className="flex items-center gap-4 text-white text-[9px] font-bold uppercase tracking-widest">
                            Explore Detailed Views <ChevronRight size={14} className="text-brand-gold" />
                          </button>
                        </div>
                      </div>

                      {/* Subcategory Tag */}
                      <div className="absolute top-0 right-0 bg-white px-2 py-1 sm:px-5 sm:py-2.5 text-[6px] sm:text-[8px] font-bold uppercase tracking-widest text-brand-dark group-hover:opacity-0 transition-opacity duration-300">
                        {proj.subcategory || "OVERVIEW"}
                      </div>
                    </div>
                  </a>

                  <div className="space-y-1.5 sm:space-y-3 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-2">
                      <a href={`/featured-fitouts/${proj.slug}`} className="block">
                        <h3 className="text-xs sm:text-lg md:text-xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors duration-500 uppercase">{proj.name}</h3>
                      </a>
                      <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-neutral-400">{proj.location || "UAE"}</span>
                    </div>
                    <p className="text-neutral-500 text-[10px] sm:text-sm font-light leading-relaxed line-clamp-2">
                      {proj.intro}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center max-w-md mx-auto border border-dashed border-neutral-200 rounded-lg p-10 bg-neutral-50/50">
              <p className="text-neutral-400 font-serif text-xl italic mb-3">Custom executions coming soon.</p>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Our spatial designers are in the process of cataloging beautiful new turnkey fit-out projects for this point. Let us bring your vision to life today.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 md:py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-12">
            {[
              { label: "Retail Spaces", value: 85 },
              { label: "Corporate Offices", value: 120 },
              { label: "Luxury Residences", value: 40 },
              { label: "Hospitality Outlets", value: 25 }
            ].map((stat, i) => (
              <div key={i} className="text-left border-l border-neutral-200 pl-2 sm:pl-4 md:pl-8">
                <div className="text-2xl sm:text-3xl md:text-5xl font-serif text-brand-dark mb-2 md:mb-4">
                  <CountUpNumber end={stat.value} />+
                </div>
                <div className="text-[7px] sm:text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold leading-tight md:leading-loose">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
