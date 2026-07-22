"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Instagram, Linkedin, Facebook, ChevronRight } from 'lucide-react';


const RESIDENTIAL_LINKS = [
  { name: 'OVERVIEW', href: '/portfolio?filter=Residential' },
  { name: 'LIVING & DINING', href: '/portfolio?filter=Residential&subFilter=LIVING%20%26%20DINING' },
  { name: 'BEDROOMS', href: '/portfolio?filter=Residential&subFilter=BEDROOMS' },
  { name: 'KITCHENS', href: '/portfolio?filter=Residential&subFilter=KITCHENS' },
  { name: 'BATHROOMS', href: '/portfolio?filter=Residential&subFilter=BATHROOMS' },
  { name: 'WALK-IN WARDROBES', href: '/portfolio?filter=Residential&subFilter=WALK-IN%20WARDROBES' },
  { name: 'VANITIES', href: '/portfolio?filter=Residential&subFilter=VANITIES' },
  { name: 'BAR UNITS', href: '/portfolio?filter=Residential&subFilter=BAR%20UNITS' },
  { name: 'HOME OFFICE', href: '/portfolio?filter=Residential&subFilter=HOME%20OFFICE' },
  { name: 'FAMILY LOUNGE / MAJLIS', href: '/portfolio?filter=Residential&subFilter=FAMILY%20LOUNGE%20%2F%20MAJLIS' },
  { name: 'KIDS ROOMS', href: '/portfolio?filter=Residential&subFilter=KIDS%20ROOMS' },
  { name: 'OUTDOOR LIVING', href: '/portfolio?filter=Residential&subFilter=OUTDOOR%20LIVING' }
];

const COMMERCIAL_LINKS = [
  { name: 'OVERVIEW', href: '/portfolio?filter=Commercial' },
  { name: 'OFFICES', href: '/portfolio?filter=Commercial&subFilter=OFFICES' },
  { name: 'CLINICS', href: '/portfolio?filter=Commercial&subFilter=CLINICS' },
  { name: 'GYMS', href: '/portfolio?filter=Commercial&subFilter=GYMS' },
  { name: 'SALONS', href: '/portfolio?filter=Commercial&subFilter=SALONS' }
];

const RETAIL_LINKS = [
  { name: 'OVERVIEW', href: '/portfolio?filter=Retail' },
  { name: 'KIOSKS', href: '/portfolio?filter=Retail&subFilter=KIOSKS' },
  { name: 'F & B', href: '/portfolio?filter=Retail&subFilter=F%20%26%20B' },
  { name: 'CAFES', href: '/portfolio?filter=Retail&subFilter=CAFES' },
  { name: 'RESTAURANTS', href: '/portfolio?filter=Retail&subFilter=RESTAURANTS' }
];

const SERVICES_LINKS = [
  { name: 'ALL SERVICES', href: '/services' },
  { name: 'FITOUT', href: '/services/fitout' },
  { name: 'CARPENTRY', href: '/services/carpentry' },
  { name: 'CUSTOMISED FURNITURE', href: '/services/customised-furniture' },
  { name: 'DECORATIVE PAINTS', href: '/services/decorative-paint' },
  { name: 'MICROCEMENT', href: '/services/microcement' },
  { name: 'TERRAZZO FLOORS', href: '/services/terrazzo' },
  { name: 'LANDSCAPING & POOLS', href: '/services/landscaping-pools' },
  { name: 'AUTOMATION', href: '/services/automation' },
  { name: 'SPECIALITY SERVICES', href: '/services/interior-design' },
  { name: 'STRETCH CEILING', href: '/services/stretch-ceiling' },
  { name: 'VILLA WATERPROOFING', href: '/services/halo-shield' },
  { name: 'AIR QUALITY', href: '/services/air-quality' },
  { name: 'WINDOW GLAZING', href: '/services/window-glazing' },
  { name: 'TILE INSTALLATION', href: '/services/tile-installation' },
  { name: 'MARBLE INSTALLATION', href: '/services/marble-installation' },
  { name: 'GYPSUM WORKS', href: '/services/gypsum-works' },
  { name: 'CONTRACTING', href: '/services/contracting' },
  { name: 'PROPERTY INSPECTION', href: '/services/property-inspection' },
  { name: 'AUTHORITY APPROVALS', href: '/services/authority-approvals' },
  { name: 'MEP & HVAC', href: '/services/mep-hvac' },
  { name: 'PROJECT MANAGEMENT', href: '/services/project-management' }
];

const STYLES_LINKS = [
  { name: 'ALL STYLES', href: '/design-styles' },
  { name: 'CONTEMPORARY', href: '/design-styles/contemporary' },
  { name: 'MINIMALIST', href: '/design-styles/minimalist' },
  { name: 'NEOCLASSICAL', href: '/design-styles/neoclassical' },
  { name: 'MEDITERRANEAN', href: '/design-styles/mediterranean' },
  { name: 'JAPANDI', href: '/design-styles/japandi' },
  { name: 'ARABIAN', href: '/design-styles/arabian' },
  { name: 'FARMHOUSE', href: '/design-styles/farmhouse' },
  { name: 'INDUSTRIAL', href: '/design-styles/industrial' },
  { name: 'ULTRA LUXURY', href: '/design-styles/ultra-luxury' },
  { name: 'BOHO CHIC', href: '/design-styles/boho-chic' },
  { name: 'WELLNESS', href: '/design-styles/wellness' }
];

const MORE_LINKS = [
  { name: 'ABOUT US', href: '/about' },
  { name: 'BLOG', href: '/blog' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'CONTACT', href: '/contact' }
];

const MOBILE_NAV_LINKS = [
  { name: 'Home', href: '/' },
  {
    name: 'Portfolio', href: '/portfolio',
    children: [
      {
        group: 'Retail',
        href: '/portfolio?filter=Retail',
        links: RETAIL_LINKS,
      },
      {
        group: 'Commercial',
        href: '/portfolio?filter=Commercial',
        links: COMMERCIAL_LINKS,
      },
      {
        group: 'Residential',
        href: '/portfolio?filter=Residential',
        links: RESIDENTIAL_LINKS,
      },
    ],
  },
  {
    name: 'Services', href: '/services',
    links: SERVICES_LINKS,
  },
  {
    name: 'Styles', href: '/design-styles',
    links: STYLES_LINKS,
  },
  {
    name: 'More', href: '/about',
    links: MORE_LINKS,
  },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  const toggleMobileMenu = (name: string) =>
    setOpenMobileMenu(prev => { setOpenMobileGroup(null); return prev === name ? null : name; });
  const toggleMobileGroup = (group: string) =>
    setOpenMobileGroup(prev => prev === group ? null : group);

  const isSolid = !isHome || isScrolled || activeMenu;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderDropdownContent = (title, links, cols = 2, showExplore = false, imageSrc = "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2000&auto=format&fit=crop") => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 w-full bg-white text-brand-dark border-b border-neutral-100 shadow-2xl max-h-[calc(100vh-110px)] overflow-y-auto"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 min-h-[300px]">
        {/* Left Side Links */}
        <div className="col-span-8 py-8 px-12 lg:py-10 lg:px-16 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-6 lg:mb-8">{title}</h3>
          <div className={`grid grid-cols-${cols} gap-y-3.5 lg:gap-y-4 gap-x-8 lg:gap-x-12`}>
            {links.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[10px] lg:text-[11px] font-bold tracking-[0.15em] lg:tracking-[0.2em] uppercase text-neutral-500 hover:text-brand-gold transition-colors block border-b border-neutral-100 pb-2">
                {link.name}
              </a>
            ))}
          </div>
          {showExplore && (
            <a href="#" className="mt-6 lg:mt-8 inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] uppercase text-brand-dark hover:text-brand-gold transition-colors">
              EXPLORE MORE <ChevronRight size={14} />
            </a>
          )}
        </div>
        {/* Right Side Image Placeholder */}
        <div className="col-span-4 bg-neutral-100 relative overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" 
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${isSolid
          ? 'bg-white/98 backdrop-blur-md py-3 md:py-4 border-b border-neutral-100 shadow-sm'
          : 'bg-transparent py-5 md:py-8'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Metro Retail"
              className={`h-[30px] md:h-[30px] w-auto transition-all duration-500 ${isSolid ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-3 xl:gap-6 2xl:gap-8 whitespace-nowrap">
            <a href="/" className={`shrink-0 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>Home</a>
            <a href="/portfolio" className={`shrink-0 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>Portfolio</a>

            <div className="relative py-2 shrink-0" onMouseEnter={() => setActiveMenu('retail')}>
              <a href="/portfolio?filter=Retail" className={`flex items-center gap-1 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Retail <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'retail' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div className="relative py-2 shrink-0" onMouseEnter={() => setActiveMenu('commercial')}>
              <a href="/portfolio?filter=Commercial" className={`flex items-center gap-1 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Commercial <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'commercial' ? 'rotate-180' : ''}`} />
              </a>
            </div>



            <div className="relative py-2 shrink-0" onMouseEnter={() => setActiveMenu('residential')}>
              <a href="/portfolio?filter=Residential" className={`flex items-center gap-1 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Residential <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'residential' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div className="relative py-2 shrink-0" onMouseEnter={() => setActiveMenu('services')}>
              <a href="/services" className={`flex items-center gap-1 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div className="relative py-2 shrink-0" onMouseEnter={() => setActiveMenu('styles')}>
              <a href="/design-styles" className={`flex items-center gap-1 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Styles <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'styles' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div className="relative py-2 shrink-0" onMouseEnter={() => setActiveMenu('more')}>
              <a href="/about" className={`flex items-center gap-1 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                More <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'more' ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-8 shrink-0">
            <a href="/contact" className={`hidden md:block shrink-0 px-5 py-2.5 xl:px-6 xl:py-3 text-[9px] font-bold uppercase tracking-[0.25em] transition-all duration-500 border ${isSolid
              ? 'bg-brand-dark text-white border-brand-dark hover:bg-brand-gold hover:border-brand-gold'
              : 'bg-white text-brand-dark border-white hover:bg-transparent hover:text-white'
              }`}>
              Request Quote
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col gap-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-8 h-[1px] transition-all ${isSolid ? 'bg-brand-dark' : 'bg-white'}`} />
              <div className={`w-5 h-[1px] ml-auto transition-all ${isSolid ? 'bg-brand-dark' : 'bg-white'}`} />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu === 'retail' && renderDropdownContent('RETAIL', RETAIL_LINKS, 1, false, "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2000&auto=format&fit=crop")}
          {activeMenu === 'commercial' && renderDropdownContent('COMMERCIAL', COMMERCIAL_LINKS, 1, false, "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop")}
          {activeMenu === 'residential' && renderDropdownContent('RESIDENTIAL', RESIDENTIAL_LINKS, 2, false, "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop")}
          {activeMenu === 'services' && renderDropdownContent('SERVICES', SERVICES_LINKS, 3, false, "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop")}
          {activeMenu === 'styles' && renderDropdownContent('STYLES', STYLES_LINKS, 2, false, "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")}
          {activeMenu === 'more' && renderDropdownContent('MORE', MORE_LINKS, 1, true, "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop")}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-[150] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-[min(90vw,420px)] h-full bg-white p-6 sm:p-10 md:p-12 flex flex-col overflow-y-auto border-l border-neutral-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center gap-4 mb-12 sm:mb-20 md:mb-24">
                <img src="/logo.png" alt="Metro Retail" className="h-[30px] w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-[9px] font-bold uppercase tracking-widest border border-neutral-200 px-5 py-3 hover:bg-neutral-50 transition-colors">Close</button>
              </div>

              <div className="flex flex-col">
                {MOBILE_NAV_LINKS.map((item: any) => {
                  const hasChildren = !!item.children;
                  const hasLinks = !!item.links;
                  const isOpen = openMobileMenu === item.name;

                  if (!hasChildren && !hasLinks) {
                    // Plain link
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl sm:text-3xl font-serif text-brand-dark hover:text-brand-gold transition-colors flex items-center justify-between gap-4 py-4 border-b border-neutral-100"
                      >
                        {item.name}
                        <ChevronRight size={18} className="text-neutral-300" />
                      </a>
                    );
                  }

                  return (
                    <div key={item.name} className="border-b border-neutral-100">
                      {/* Parent row */}
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-2xl sm:text-3xl font-serif text-brand-dark hover:text-brand-gold transition-colors py-4 flex-1"
                        >
                          {item.name}
                        </a>
                        <button
                          onClick={() => toggleMobileMenu(item.name)}
                          className="p-3 text-brand-dark hover:text-brand-gold transition-colors"
                          aria-label={`Toggle ${item.name}`}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Accordion content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4">
                              {/* Portfolio: nested group accordions */}
                              {hasChildren && item.children.map((child: any) => {
                                const isGroupOpen = openMobileGroup === child.group;
                                return (
                                  <div key={child.group} className="mb-1">
                                    <div className="flex items-center justify-between py-2">
                                      <a
                                        href={child.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-gold transition-colors"
                                      >
                                        {child.group}
                                      </a>
                                      <button
                                        onClick={() => toggleMobileGroup(child.group)}
                                        className="p-2 text-neutral-400 hover:text-brand-gold transition-colors"
                                      >
                                        <ChevronDown
                                          size={14}
                                          className={`transition-transform duration-300 ${isGroupOpen ? 'rotate-180 text-brand-gold' : ''}`}
                                        />
                                      </button>
                                    </div>
                                    <AnimatePresence initial={false}>
                                      {isGroupOpen && (
                                        <motion.div
                                          key="group-content"
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                          className="overflow-hidden pl-3"
                                        >
                                          <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-2 border-l border-brand-gold/30 pl-4">
                                            {child.links.map((link: any, i: number) => (
                                              <a
                                                key={i}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 hover:text-brand-gold transition-colors"
                                              >
                                                {link.name}
                                              </a>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}

                              {/* Single-level links (Services, Styles, More) */}
                              {hasLinks && (
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 border-l border-brand-gold/30 pl-4">
                                  {item.links.map((link: any, i: number) => (
                                    <a
                                      key={i}
                                      href={link.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 hover:text-brand-gold transition-colors"
                                    >
                                      {link.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
