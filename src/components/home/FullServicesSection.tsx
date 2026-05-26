"use client";

import { motion } from 'motion/react';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICE_IMAGES = [
  // DESIGN
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600", // Interior Design
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600", // 3D Visualization
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", // Space Planning
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600", // Moodboards
  
  // FIT-OUT
  "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=600", // Joinery Works
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600", // Flooring
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", // Partition Systems
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=600", // Acoustic Solutions
  
  // SYSTEMS
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600", // Electro-Mechanical
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600", // Lighting Design
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600", // Wall Covering
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"  // Automation
];

const FullServicesSection = () => {
  const services = [
    // DESIGN
    { title: "Interior Design", image: SERVICE_IMAGES[0], category: "DESIGN", id: "retail-design" },
    { title: "3D Visualization", image: SERVICE_IMAGES[1], category: "DESIGN", id: "retail-design" },
    { title: "Space Planning", image: SERVICE_IMAGES[2], category: "DESIGN", id: "retail-design" },
    { title: "Moodboards", image: SERVICE_IMAGES[3], category: "DESIGN", id: "retail-design" },
    
    // FIT-OUT
    { title: "Joinery Works", image: SERVICE_IMAGES[4], category: "FIT-OUT", id: "bespoke-joinery" },
    { title: "Flooring", image: SERVICE_IMAGES[5], category: "FIT-OUT", id: "turnkey-execution" },
    { title: "Partition Systems", image: SERVICE_IMAGES[6], category: "FIT-OUT", id: "turnkey-execution" },
    { title: "Acoustic Solutions", image: SERVICE_IMAGES[7], category: "FIT-OUT", id: "turnkey-execution" },
    
    // SYSTEMS
    { title: "Electro-Mechanical", image: SERVICE_IMAGES[8], category: "SYSTEMS", id: "technical-infrastructure" },
    { title: "Lighting Design", image: SERVICE_IMAGES[9], category: "SYSTEMS", id: "technical-infrastructure" },
    { title: "Wall Covering", image: SERVICE_IMAGES[10], category: "SYSTEMS", id: "turnkey-execution" },
    { title: "Automation", image: SERVICE_IMAGES[11], category: "SYSTEMS", id: "technical-infrastructure" }
  ];

  return (
    <section className="py-20 bg-white border-y border-neutral-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-8 md:gap-10">
          <div>
            <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR COMPLETE RANGE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>of Services</span>
            </h2>
          </div>
          <a href="/contact" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">
            Get a Custom Quote
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16">
          {services.map((s, i) => (
            <motion.a
              key={i}
              href={`/solutions/${s.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex flex-col h-full bg-neutral-50/50 hover:bg-white p-4 border border-neutral-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden w-full mb-6 bg-neutral-100">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Category Tag Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest text-brand-dark shadow-sm">
                  {s.category}
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 bg-brand-dark text-white p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight size={14} className="text-brand-gold" />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-grow">
                <span className="text-[7.5px] font-bold text-brand-gold uppercase tracking-[0.3em] mb-1.5">
                  Service Sector
                </span>
                <h4 className="text-brand-dark font-bold text-xs uppercase tracking-[0.15em] leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-2.5 flex items-center gap-1 group-hover:text-neutral-500 transition-colors">
                  Learn More <span>→</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullServicesSection;
