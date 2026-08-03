"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ChevronRight, LayoutGrid } from 'lucide-react';

const CATEGORY_DETAILS: Record<string, {
  title: string;
  tagline: string;
  desc: string;
  subcategories: {
    title: string;
    slug: string;
    image: string;
    desc: string;
  }[];
}> = {
  "residential": {
    title: "Residential Makeovers",
    tagline: "Custom-Tailored High-End Luxury Homes",
    desc: "We build bespoke residential sanctuaries. Taking visual and layout design cues from the best of minimalism and classical elegance, our teams manufacture and fit out custom solutions for premium villas and luxury apartments.",
    subcategories: [
      {
        title: "Living & Dining",
        slug: "living-dining",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        desc: "Transforming lounge and dining spaces into high-end comfort hubs with custom millwork."
      },
      {
        title: "Kitchens",
        slug: "kitchens",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
        desc: "Smart modern luxury kitchens featuring bespoke modular carpentry and integrated hardware."
      },
      {
        title: "Wardrobes & Closets",
        slug: "wardrobes",
        image: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&q=80&w=800",
        desc: "Bespoke walk-in closets, dressing cabinets, and timber wardrobe integrations."
      },
      {
        title: "Bathrooms",
        slug: "bathrooms",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
        desc: "Sleek marble vanity nodes and custom high-comfort storage setups."
      },
      {
        title: "Storage & Shelving",
        slug: "storage",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
        desc: "Intelligent hidden storage, floating oak bookshelves, and custom panels."
      }
    ]
  },
  "office": {
    title: "Corporate Workspaces",
    tagline: "High-Performance Work Environments",
    desc: "Optimized commercial hubs designed to inspire productivity, secure branding continuity, and integrate cutting-edge electro-mechanical and structural IT layouts.",
    subcategories: [
      {
        title: "Executive Suites",
        slug: "executive-suites",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
        desc: "Sleek modern desks, acoustic wooden wall treatments, and panoramic conference nodes."
      },
      {
        title: "Workstations & Hubs",
        slug: "workstations",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
        desc: "Collaborative dynamic desk layouts with seamless high-efficiency wire systems."
      },
      {
        title: "Boardrooms & Meeting Rooms",
        slug: "meeting-rooms",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        desc: "Highly soundproof meeting suites with integrated multimedia panels."
      },
      {
        title: "Reception & Lounges",
        slug: "reception",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        desc: "Stunning brand entryways with custom marble desks and feature lights."
      }
    ]
  },
  "retail": {
    title: "Retail & F&B Outlets",
    tagline: "High-Traffic Luxury Sales & Dining Environments",
    desc: "Leading turnkey visual layouts approved by all major GCC shopping complexes and municipal authorities. We construct stunning facades, boutiques, cafes, and custom dining lounges matching strict safety and design mandates.",
    subcategories: [
      {
        title: "Mall Boutiques",
        slug: "mall-boutiques",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
        desc: "Immersive luxury showrooms featuring custom brass details and safety panels."
      },
      {
        title: "Dining Halls",
        slug: "dining-halls",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
        desc: "Atmospheric dining rooms, custom leather banquettes, and specialized lighting systems."
      },
      {
        title: "Bar Counters",
        slug: "bar-counters",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
        desc: "Masterfully manufactured carpentry setups with brass fixtures and high-end marble tops."
      },
      {
        title: "High-Street Outlets",
        slug: "high-street",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
        desc: "Grand street-facing facades with highly optimized civil works."
      },
      {
        title: "Airport Kiosks",
        slug: "airport-kiosks",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
        desc: "Highly-secure, specialized, lightweight, airport boutique modules."
      }
    ]
  }
};

export default function CategoryLandingPage() {
  const params = useParams();
  const category = params?.category as string;

  const data = CATEGORY_DETAILS[category] || CATEGORY_DETAILS["residential"];

  return (
    <div className="bg-white pt-20">
      {/* Dynamic Header */}
      <section className="py-12 md:py-28 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block text-center">Metro Portfolio</span>
            <h1
              className="section-title text-brand-dark mb-4 text-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {data.title}
            </h1>
            <p
              className="text-neutral-500 text-lg font-light leading-relaxed mb-6 text-center mx-auto max-w-2xl"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              {data.tagline}
            </p>
            <div className="w-16 h-[2px] bg-brand-gold my-8" />
            <p className="text-neutral-500 text-base font-light leading-relaxed text-center mx-auto max-w-2xl">
              {data.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {data.subcategories.map((sub, i) => (
              <motion.a
                key={sub.slug}
                href={`/portfolio/${category}/${sub.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group block border border-neutral-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500" />

                  {/* Visual Indicator */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ChevronRight size={18} className="text-brand-dark" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-brand-gold text-[8px] font-bold uppercase tracking-[0.4em] mb-2 block">
                    Category Sub-sector
                  </span>
                  <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors duration-500 uppercase mb-4">
                    {sub.title}
                  </h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6">
                    {sub.desc}
                  </p>
                  <div className="w-8 h-[1px] bg-neutral-200 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
