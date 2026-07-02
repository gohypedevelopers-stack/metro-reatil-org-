"use client";

import { motion } from 'motion/react';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const SERVICE_IMAGES = [
  // DESIGN
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600", // Interior Design
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600", // 3D Visualization
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", // Space Planning
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600", // Moodboards

  // FIT-OUT
  "/images/phase_02_prefabrication.png", // Carpentry Works
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
    { title: "Fitout", image: "https://halo.ae/images/services_r2/retail_cafes_pantry_fitout.webp", category: "FITOUT EXECUTION", id: "fitout" },
    { title: "Carpentry", image: "https://halo.ae/images/services_r2/design_styles_ultra_luxury_high_end_bespoke_carpentry_leather_designs.webp", category: "bespoke carpentry", id: "carpentry" },
    { title: "Kitchens & Wardrobes", image: "https://halo.ae/images/services_r2/kitchen_surfaces.webp", category: "KITCHEN WARDROBE", id: "kitchens" },
    { title: "Decorative Paints", image: "https://halo.ae/images/services_r2/services_decorative_paint_brick_finishes_feature_wall_brick.webp", category: "DECORATIVE FINISHES", id: "decorative-paints" },
    { title: "Microcement", image: "https://halo.ae/images/services_r2/microcement-1.jpg", category: "MICROCEMENT FINISHES", id: "microcement" },
    { title: "Terrazzo Floors", image: "https://halo.ae/images/services_r2/terrazzo.png", category: "TERRAZZO CRAFT", id: "terrazzo" },
    { title: "Landscaping & Pools", image: "https://halo.ae/images/services_r2/pool_19.webp", category: "LANDSCAPE POOLS", id: "landscaping" },
    { title: "Automation", image: "https://halo.ae/images/services_r2/services_automation_dubai_ac_and_climate_control.webp", category: "SMART AUTOMATION", id: "automation" },
    { title: "Stretch Ceiling", image: "https://halo.ae/images/services_r2/services_stretch_ceiling_custom_designs.webp", category: "CEILING SYSTEMS", id: "stretch-ceiling" },
    { title: "Halo Shield", image: "https://halo.ae/images/services_r2/services_halo_shield_thermal_coating.webp", category: "THERMAL PROTECTION", id: "halo-shield" },
    { title: "Property Inspection", image: "https://halo.ae/images/services_r2/services_property_audits_pre_purchase_inspections.webp", category: "PROPERTY INSPECTION", id: "property-inspection" },
    { title: "MEP & HVAC", image: "https://halo.ae/images/services_r2/services_mep_hvac_hvac_installations.webp", category: "MEP SYSTEMS", id: "mep-hvac" },
    { title: "Project Management", image: "https://halo.ae/images/services_r2/services_project_management_communication.webp", category: "PROJECT MANAGEMENT", id: "project-management" },
    { title: "Venetian Plasters", image: "https://halo.ae/images/services_r2/textured_venetian.webp", category: "VENETIAN PLASTER", id: "venetian-plasters" },
    { title: "Feature Walls", image: "https://halo.ae/images/services_r2/services_decorative_paint_feature_walls_metallic_feature_walls.webp", category: "FEATURE WALLS", id: "feature-walls" },
    { title: "Artistic Finishes", image: "https://halo.ae/images/services_r2/artistic_patterns.webp", category: "ARTISTIC FINISHES", id: "artistic-finishes" },
    { title: "Custom Furniture", image: "https://halo.ae/images/services_r2/services_customized_furniture_dubai_ceiling_works_and_lighting.webp", category: "CUSTOM FURNITURE", id: "custom-furniture" },
    { title: "Air Quality", image: "https://halo.ae/images/services_r2/services_air_quality_hvac_cleaning_and_maintenance.webp", category: "AIR QUALITY SYSTEMS", id: "air-quality" },
    { title: "Contracting", image: "https://halo.ae/images/services_r2/services_contracting_dubai_structural_engineering_and_design.webp", category: "GENERAL CONTRACTING", id: "contracting" },
    { title: "Window Glazing", image: "https://halo.ae/images/services_r2/services_window_glazing_sliding_window_systems.webp", category: "WINDOW GLAZING", id: "window-glazing" },
    { title: "Tile Installation", image: "https://halo.ae/images/services_r2/services_tile_installation_ceramic_tile_installation.webp", category: "TILE INSTALLATION", id: "tile-installation" },
    { title: "Marble Installation", image: "https://halo.ae/images/services_r2/services_tile_installation_marble_tile_installation.webp", category: "MARBLE WORKS", id: "marble-installation" },
    { title: "Gypsum Works", image: "https://halo.ae/images/services_r2/gypsum_partitions.webp", category: "GYPSUM WORKS", id: "gypsum-works" },
    { title: "Property Audits", image: "https://halo.ae/images/services_r2/services_property_audits_technical_audits.webp", category: "PROPERTY AUDITS", id: "property-audits" },
    { title: "Authority Approvals", image: "https://halo.ae/images/services_r2/services_authority_approvals_utility_connections.webp", category: "AUTHORITY APPROVALS", id: "authority-approvals" }
  ];

  return (
    <section className="py-20 bg-white border-y border-neutral-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-8 md:gap-10">
          <div>
            <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR COMPLETE RANGE <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>of Services</span>
            </h2>
            <p className="mt-6 text-neutral-500 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
              From concept to completion, we deliver every aspect of interior design, fitout, and property services under one roof.
            </p>
          </div>
          <a href="/contact" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">
            Get a Custom Quote
          </a>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((s, i) => (
            <motion.a
              key={i}
              href={`/services/${s.id}`}
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

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {services.map((s, i) => (
                <CarouselItem key={i} className="basis-[85%] pl-6">
                  <a
                    href={`/services/${s.id}`}
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
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FullServicesSection;
