"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { PencilRuler, Hammer, Settings, ArrowRight, ChevronRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import FullServicesSection from '../../../components/home/FullServicesSection';

const SERVICES_DATA: Record<string, {
  title: string;
  tagline: string;
  heroImage: string;
  desc: string;
  stats: { label: string; value: string; icon: any }[];
  subcategories: {
    title: string;
    desc: string;
    image: string;
    link: string;
  }[];
  gallery: string[];
}> = {
  "bespoke-joinery": {
    title: "Bespoke Joinery & Carpentry",
    tagline: "High-End Woodwork & Custom Millwork Manufactured In-House",
    heroImage: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80",
    desc: "Our private state-of-the-art production facilities allow us to maintain total control over quality, timelines, and costs for all custom wood elements. From luxury corporate bar counters to residential kitchens and bespoke vanity spaces, we bring premium craftsmanship to the GCC region.",
    stats: [
      { label: "Years of Experience", value: "12+ Years", icon: Award },
      { label: "Custom Projects Delivered", value: "340+", icon: CheckCircle2 },
      { label: "Technical Craftsmen", value: "85+", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "Bar Counters",
        desc: "Premium, functional custom bars for fine dining and commercial lounges.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Vanities & Cabinetry",
        desc: "Exquisite bathroom vanities and dressing units with marble and timber detailing.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Feature Walls",
        desc: "Acoustic wood paneling, decorative grids, and textured veneer feature installations.",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Kitchen Cabinets",
        desc: "High-capacity modular and custom luxury kitchen joinery systems.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
        link: "/portfolio/residential/kitchens"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&q=80"
    ]
  },
  "retail-design": {
    title: "Retail Design & Spatial Planning",
    tagline: "Immersive & Brand-Aligned Spatial Layouts",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    desc: "End-to-end execution and design for shopping mall boutiques, standalone street setups, and airport kiosks. We map the ideal path to purchase by pairing optimized visual merchandising with detailed 3D spatial planning.",
    stats: [
      { label: "Boutiques Designed", value: "185+", icon: Award },
      { label: "Design Approvals", value: "100%", icon: CheckCircle2 },
      { label: "Creative Designers", value: "18 Architects", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "Mall Stores",
        desc: "Striking storefronts and interior layouts designed to mall specifications.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80",
        link: "/portfolio/retail"
      },
      {
        title: "High-Street Retail",
        desc: "Standalone setups with grand facades and optimized customer flow.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
        link: "/portfolio/retail"
      },
      {
        title: "Airport Retail",
        desc: "Highly-secure, lightweight, dynamic fit-outs matching strict aviation guidelines.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
        link: "/portfolio/retail"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
    ]
  },
  "turnkey-execution": {
    title: "Turnkey Execution & Fit-outs",
    tagline: "Seamless Transition from Shell Core to Handover",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    desc: "We manage every single phase of your space construction in-house: tiling, custom partitions, plastering, decorative plaster, bespoke joinery installation, and painting. Avoid multi-vendor coordination headaches.",
    stats: [
      { label: "Space Completed", value: "2.8M Sq.Ft.", icon: Award },
      { label: "Turnkey Handovers", value: "220+ Stores", icon: CheckCircle2 },
      { label: "On-Time Handover", value: "100%", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "Partition Systems",
        desc: "Glass partitions, acoustic boards, drywalls, and security steel panel dividers.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Flooring & Tiling",
        desc: "Large format porcelain, marble floor patterns, premium timber parquet, and vinyl.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Civil Work & Ceilings",
        desc: "Structural civil remediation, decorative false ceilings, and bulkheads.",
        image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80",
        link: "#gallery"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    ]
  },
  "technical-infrastructure": {
    title: "Technical Infrastructure & MEP",
    tagline: "Rigorous Mechanical, Electrical, and Plumbing Systems",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    desc: "A beautiful interior requires flawless infrastructure. We deliver certified MEP engineering including custom HVAC ducting, smoke management, structural wiring, backup energy systems, and high-spec lighting design.",
    stats: [
      { label: "HVAC Installed", value: "48,000 TR", icon: Award },
      { label: "Civil Defense Cleared", value: "100%", icon: CheckCircle2 },
      { label: "Safety Audits Passed", value: "Zero Failures", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "AC & HVAC Works",
        desc: "Clean ducting, industrial ventilation, heat exhaust hoods, and smart multi-zone climate nodes.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Fire Safety Systems",
        desc: "Certified fire alarms, wet sprinkler layouts, and smoke exhaust fans built to safety codes.",
        image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "MEP Engineering",
        desc: "High-load electrical grids, grease trap plumbing, structural server racks, and safety panels.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        link: "#gallery"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80"
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const data = SERVICES_DATA[id] || SERVICES_DATA["bespoke-joinery"];

  return (
    <div className="bg-white pt-20">
      {/* 1. Common Hero Banner */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden flex items-center bg-brand-dark">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600"
          alt="Metro Services"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-brand-dark/60" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl text-left">
            <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block">Metro Professional Services</span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Our Services
            </h1>
            <p
              className="text-neutral-200 text-base md:text-lg font-light max-w-2xl leading-relaxed"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Exceptional design, in-house joinery manufacturing, turnkey execution, and certified engineering systems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Second Section: Dynamic Service Content (Split Image & Content) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Specific Service Image */}
            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden group shadow-2xl rounded-sm">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/15 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Right Column: Specific Service Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] block">Active Service</span>
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
              <p className="text-neutral-500 text-lg leading-relaxed font-light">
                {data.desc}
              </p>

              {/* Stats / Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {data.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col p-5 bg-neutral-50/50 border border-neutral-100 rounded-sm">
                      <div className="text-brand-gold mb-3">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div className="text-xl font-serif text-brand-dark leading-tight">{stat.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Delivered Project Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                {data.title} Project Gallery
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.gallery.map((img, i) => (
              <div key={i} className="relative group aspect-square overflow-hidden bg-neutral-200 shadow-sm rounded-sm">
                <img
                  src={img}
                  alt={`Delivered project ${i + 1}`}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/10 opacity-100 group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Range of Services (Looping Section) */}
      <div className="relative border-t border-neutral-100 bg-white">
        <FullServicesSection />
      </div>
    </div>
  );
}
