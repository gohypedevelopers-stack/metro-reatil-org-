"use client";

import { motion } from 'motion/react';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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

const FullServicesSection = ({
  forceCarousel = false,
  hideViewAllButton = false,
  title = "OUR COMPLETE RANGE",
  subtitle = "of Services",
  showTabs = false
}: {
  forceCarousel?: boolean;
  hideViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
  showTabs?: boolean;
}) => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState<"office" | "retail" | "commercial">("office");

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const RECOMMENDED_SERVICES_MAP = {
    office: [
      { title: "Office Interior Design", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600", category: "OFFICE FITOUT", id: "office-fitout/office-interior-design" },
      { title: "Modern Office Interior Design", image: "https://images.unsplash.com/photo-1497211417189-d411553015ed?auto=format&fit=crop&q=80&w=600", category: "OFFICE FITOUT", id: "office-fitout/modern-office-interior-design" },
      { title: "Turnkey Office Fitout", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600", category: "OFFICE FITOUT", id: "office-fitout/turnkey-office-fitout" }
    ],
    retail: [
      { title: "Retail Store Design", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=600", category: "RETAIL FITOUT", id: "retail-fitout/retail-store-design" },
      { title: "Luxury Retail Interior Design", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600", category: "RETAIL FITOUT", id: "retail-fitout/luxury-retail-interior-design" },
      { title: "Store Fitout Company", image: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=600", category: "RETAIL FITOUT", id: "retail-fitout/store-fitout-company" }
    ],
    commercial: [
      { title: "Commercial Interior Design", image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80&w=600", category: "COMMERCIAL FITOUT", id: "commercial-contractors/commercial-interior-design" },
      { title: "Interior Design & Build", image: "https://images.unsplash.com/photo-1581452715108-014fea111204?auto=format&fit=crop&q=80&w=600", category: "COMMERCIAL FITOUT", id: "commercial-contractors/interior-design-build" },
      { title: "Turnkey Interior Solutions", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600", category: "COMMERCIAL FITOUT", id: "commercial-contractors/turnkey-interior-solutions" }
    ]
  };

  const defaultServices = [
    { title: "Retail Fitout", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600", category: "RETAIL FITOUT", id: "retail-fitout" },
    { title: "Office Fitout", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", category: "OFFICE FITOUT", id: "office-fitout" },
    { title: "Restaurant & F&B Fitout", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", category: "RESTAURANT FITOUT", id: "restaurant-fitout" },
    { title: "Commercial & Turnkey Solutions", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600", category: "COMMERCIAL FITOUT", id: "commercial-contractors" },
    { title: "Fitout", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600", category: "FITOUT EXECUTION", id: "fitout" },
    { title: "Carpentry", image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=600", category: "bespoke carpentry", id: "carpentry" },
    { title: "Kitchens & Wardrobes", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600", category: "KITCHEN WARDROBE", id: "kitchens-wardrobes" },
    { title: "Decorative Paints", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600", category: "DECORATIVE FINISHES", id: "decorative-paint" },

    { title: "Terrazzo Floors", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600", category: "TERRAZZO CRAFT", id: "terrazzo" },
    { title: "Landscaping & Pools", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600", category: "LANDSCAPE POOLS", id: "landscaping-pools" },
    { title: "Automation", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600", category: "SMART AUTOMATION", id: "automation" },
    { title: "Stretch Ceiling", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600", category: "CEILING SYSTEMS", id: "stretch-ceiling" },

    { title: "Property Inspection", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600", category: "PROPERTY INSPECTION", id: "property-inspection" },
    { title: "MEP & HVAC", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600", category: "MEP SYSTEMS", id: "mep-hvac" },
    { title: "Project Management", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", category: "PROJECT MANAGEMENT", id: "project-management" },
    { title: "Venetian Plasters", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600", category: "VENETIAN PLASTER", id: "venetian-plasters" },
    { title: "Feature Walls", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600", category: "FEATURE WALLS", id: "feature-walls" },
    { title: "Artistic Finishes", image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=600", category: "ARTISTIC FINISHES", id: "artistic-finishes" },
    { title: "Custom Furniture", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600", category: "CUSTOM FURNITURE", id: "customised-furniture" },
    { title: "Air Quality", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600", category: "AIR QUALITY SYSTEMS", id: "air-quality" },
    { title: "Contracting", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600", category: "GENERAL CONTRACTING", id: "contracting" },
    { title: "Window Glazing", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", category: "WINDOW GLAZING", id: "window-glazing" },
    { title: "Tile Installation", image: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&q=80&w=600", category: "TILE INSTALLATION", id: "tile-installation" },
    { title: "Marble Installation", image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=600", category: "MARBLE WORKS", id: "marble-installation" },
    { title: "Gypsum Works", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600", category: "GYPSUM WORKS", id: "gypsum-works" },
    { title: "Property Audits", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600", category: "PROPERTY AUDITS", id: "property-audits" },
    { title: "Authority Approvals", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600", category: "AUTHORITY APPROVALS", id: "authority-approvals" }
  ];

  const services = showTabs ? RECOMMENDED_SERVICES_MAP[activeTab] : defaultServices;

  return (
    <section className="pt-8 pb-0 md:pt-10 md:pb-0 bg-white border-b border-neutral-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-4 md:mb-6 gap-1 md:gap-2">
          <div className="flex flex-col items-center">
            <h2 className="section-title text-center text-brand-dark flex items-center justify-center flex-wrap gap-2 sm:gap-3" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              <span>{title}</span> <span className="text-brand-gold italic inline-block text-2xl md:text-3xl lg:text-4xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>{subtitle}</span>
            </h2>
          </div>
          
          {showTabs && (
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-12 mt-1 md:mt-2">
              {[
                { id: "office", label: "Office Fitout" },
                { id: "retail", label: "Retail Fitout" },
                { id: "commercial", label: "Commercial & Turnkey" }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)} 
                  className={`text-[7px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.5em] pb-4 transition-all relative ${activeTab === tab.id ? 'text-brand-dark' : 'text-neutral-400 hover:text-brand-dark'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="fullServicesTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-dark" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Grid */}
        {!forceCarousel && (
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
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
        )}

        {/* Mobile/Forced Carousel */}
        <div
          className={forceCarousel ? "block" : "block md:hidden"}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="py-10 -my-10">
              {services.map((s, i) => (
                <CarouselItem key={i} className={`pl-6 ${forceCarousel ? 'basis-full sm:basis-1/2 md:basis-1/3' : 'basis-[85%]'}`}>
                  <a
                    href={`/services/${s.id}`}
                    className="group flex flex-col h-full bg-neutral-50/50 hover:bg-white p-4 border border-neutral-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden w-full mb-6 bg-neutral-100">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
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

        {/* View All Services Button */}
        {!hideViewAllButton && (
          <div className="flex justify-center mt-8 md:mt-16 mb-8 md:mb-12">
            <a href="/services" className="text-[10px] font-bold uppercase tracking-wide border-b-2 border-brand-gold pb-2 hover:border-black transition-all text-black whitespace-nowrap">
              View All Services
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FullServicesSection;
