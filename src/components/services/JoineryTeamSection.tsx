"use client";

import React from 'react';

const JoineryTeamSection = () => {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-white border-t border-neutral-100">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative group aspect-[4/3] overflow-hidden bg-black rounded-sm">
              <img
                src={`/working of metro retail/METRO RETAIL SOLUTIONS ${i}.png`}
                alt={`Joinery team at work ${i + 1}`}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoineryTeamSection;
