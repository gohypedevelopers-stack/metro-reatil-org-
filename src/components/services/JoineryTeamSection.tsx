"use client";

import React from 'react';

const JoineryTeamSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Our Joinery Team Is At Work
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed font-light max-w-4xl mx-auto">
            Master artisans are busy building wonderful items in our workshop. Joinery is an entire process, bringing your ideas to life. You can take a free, one-on-one meeting to talk with a designer, specify a wish list, and get a proposal detailing the scale of finishes and overall cost estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-200">
          
          {/* Card 1 */}
          <div className="relative group overflow-hidden bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-200 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://halo.ae/images/joinery-portraits/J1.jpg" 
              alt="Joinery craftsmanship" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl text-white font-serif tracking-tight leading-tight uppercase">
                ARTISANS OF <br /> REFINEMENT
              </h3>
            </div>
            
            <div className="absolute top-8 right-8 text-right">
               <span className="text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/30 px-3 py-1.5 backdrop-blur-sm">
                 THE HALO JOURNEY | 2024 FEATURE
               </span>
            </div>
            
            <div className="absolute bottom-8 left-8">
               <span className="text-white/50 font-serif text-xl tracking-widest uppercase">HALO <br/><span className="text-[10px] font-sans tracking-[0.3em]">INTERIORS LLC</span></span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-200 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://halo.ae/images/joinery-portraits/JOI19.webp" 
              alt="Curated Craft" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-8 left-8">
              <h3 className="text-3xl md:text-4xl text-white font-serif tracking-tight uppercase">
                CURATED <span className="opacity-0">CR</span>AFT
              </h3>
            </div>
            
            <div className="absolute top-1/3 left-8">
               <p className="text-white text-lg md:text-xl font-serif leading-snug">
                 The Art of Precision:<br/>Metin's Mastery
               </p>
            </div>
            
            <div className="absolute top-1/3 right-8 text-right">
               <p className="text-white text-lg md:text-xl font-serif leading-snug mb-2">
                 Sculptural Form<br/>vs. Function
               </p>
               <p className="text-white/80 text-xs italic font-serif">
                 Reimagining tools with<br/>craft-end materials
               </p>
            </div>
            
            <div className="absolute bottom-8 right-8 text-right">
               <span className="text-white text-sm md:text-base font-serif italic block mb-1">
                 Dubai's New Creative Wave
               </span>
               <span className="text-white/50 font-serif text-2xl tracking-widest uppercase">HALO</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden bg-neutral-900 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://halo.ae/images/joinery-portraits/JOI20.webp" 
              alt="Precision and Pattern" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 text-center">
              <h3 className="text-xl md:text-2xl text-white font-serif tracking-tight uppercase mb-4">
                PRECISION AND PATTERN:<br/>
                <span className="italic text-brand-gold capitalize">The HALO Collective</span>
              </h3>
              <p className="text-white/80 text-sm md:text-base font-serif italic">
                Master artisans redefining surfaces<br/>for modern spaces.
              </p>
            </div>
          </div>

        </div>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-t-0 border-neutral-200">
          {/* Card 4 */}
          <div className="relative group overflow-hidden bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-200 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://halo.ae/images/joinery-portraits/J4.jpg" 
              alt="Joinery workshop detail" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl text-white font-serif tracking-tight leading-tight uppercase">
                CRAFTING <br /> EXCELLENCE
              </h3>
            </div>
            
            <div className="absolute bottom-8 left-8">
               <span className="text-white/50 font-serif text-xl tracking-widest uppercase">HALO <br/><span className="text-[10px] font-sans tracking-[0.3em]">CRAFTSMANSHIP</span></span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative group overflow-hidden bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-200 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://halo.ae/images/joinery-portraits/J5.jpg" 
              alt="Joinery precision" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 text-center">
              <h3 className="text-xl md:text-2xl text-white font-serif tracking-tight uppercase mb-4">
                THE FINER <span className="italic text-brand-gold capitalize">Details</span>
              </h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative group overflow-hidden bg-neutral-900 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img 
              src="https://halo.ae/images/joinery-portraits/J6.jpg" 
              alt="Joinery tools" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-8 left-8">
              <h3 className="text-3xl md:text-4xl text-white font-serif tracking-tight uppercase">
                MASTER <span className="opacity-0">PI</span>ECE
              </h3>
            </div>
            
            <div className="absolute bottom-8 right-8 text-right">
               <span className="text-white text-sm md:text-base font-serif italic block mb-1">
                 Behind the scenes
               </span>
               <span className="text-white/50 font-serif text-2xl tracking-widest uppercase">HALO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoineryTeamSection;
