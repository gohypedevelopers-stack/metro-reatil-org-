const fs = require('fs');
const content = `"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Instagram, Linkedin, Facebook, ChevronRight } from 'lucide-react';

const MOBILE_NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
];

const RESIDENTIAL_LINKS = [
  { name: 'OVERVIEW', href: '#' },
  { name: 'LIVING & DINING', href: '#' },
  { name: 'BEDROOMS', href: '#' },
  { name: 'KITCHENS', href: '#' },
  { name: 'BATHROOMS', href: '#' },
  { name: 'WALK-IN WARDROBES', href: '#' },
  { name: 'VANITIES', href: '#' },
  { name: 'BAR UNITS', href: '#' },
  { name: 'HOME OFFICE', href: '#' },
  { name: 'FAMILY LOUNGE / MAJLIS', href: '#' },
  { name: 'KIDS ROOMS', href: '#' },
  { name: 'OUTDOOR LIVING', href: '#' }
];

const COMMERCIAL_LINKS = [
  { name: 'OVERVIEW', href: '#' },
  { name: 'OFFICES', href: '#' },
  { name: 'CLINICS', href: '#' },
  { name: 'GYMS', href: '#' },
  { name: 'SALONS', href: '#' }
];

const RETAIL_FB_LINKS = [
  { name: 'OVERVIEW', href: '#' },
  { name: 'F & B', href: '#' },
  { name: 'RETAIL', href: '#' },
  { name: 'KIOSKS', href: '#' }
];

const SERVICES_LINKS = [
  { name: 'ALL SERVICES', href: '#' },
  { name: 'FITOUT', href: '#' },
  { name: 'CARPENTRY', href: '#' },
  { name: 'HALO 3D STUDIO', href: '#' },
  { name: 'CUSTOMISED FURNITURE', href: '#' },
  { name: 'DECORATIVE PAINTS', href: '#' },
  { name: 'MICROCEMENT', href: '#' },
  { name: 'TERRAZZO FLOORS', href: '#' },
  { name: 'LANDSCAPING & POOLS', href: '#' },
  { name: 'AUTOMATION', href: '#' },
  { name: 'SPECIALITY SERVICES', href: '#' },
  { name: 'STRETCH CEILING', href: '#' },
  { name: 'VILLA WATERPROOFING', href: '#' },
  { name: 'AIR QUALITY', href: '#' },
  { name: 'WINDOW GLAZING', href: '#' },
  { name: 'TILE INSTALLATION', href: '#' },
  { name: 'MARBLE INSTALLATION', href: '#' },
  { name: 'GYPSUM WORKS', href: '#' },
  { name: 'CONTRACTING', href: '#' },
  { name: 'PROPERTY INSPECTION', href: '#' },
  { name: 'AUTHORITY APPROVALS', href: '#' },
  { name: 'MEP & HVAC', href: '#' },
  { name: 'PROJECT MANAGEMENT', href: '#' }
];

const STYLES_LINKS = [
  { name: 'ALL STYLES', href: '#' },
  { name: 'CONTEMPORARY', href: '#' },
  { name: 'MINIMALIST', href: '#' },
  { name: 'NEOCLASSICAL', href: '#' },
  { name: 'MEDITERRANEAN', href: '#' },
  { name: 'JAPANDI', href: '#' },
  { name: 'ARABIAN', href: '#' },
  { name: 'FARMHOUSE', href: '#' },
  { name: 'INDUSTRIAL', href: '#' },
  { name: 'ULTRA LUXURY', href: '#' },
  { name: 'BOHO CHIC', href: '#' },
  { name: 'WELLNESS', href: '#' }
];

const MORE_LINKS = [
  { name: 'ABOUT US', href: '/about' },
  { name: 'BLOG', href: '#' },
  { name: 'CAREERS', href: '#' },
  { name: 'FOR DESIGNERS & ARCHITECTS', href: '#' },
  { name: 'PROCUREMENT', href: '#' },
  { name: 'CONTACT', href: '/contact' }
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const isSolid = !isHome || isScrolled || activeMenu;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderDropdownContent = (title, links, cols = 2, showExplore = false) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 w-full bg-white text-brand-dark border-b border-neutral-100 shadow-2xl"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 min-h-[400px]">
        {/* Left Side Links */}
        <div className="col-span-8 p-12 lg:p-20 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase mb-16">{title}</h3>
          <div className={\`grid grid-cols-\${cols} gap-y-6 gap-x-12\`}>
            {links.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500 hover:text-brand-gold transition-colors block border-b border-neutral-100 pb-3">
                {link.name}
              </a>
            ))}
          </div>
          {showExplore && (
            <a href="#" className="mt-12 inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] uppercase text-brand-dark hover:text-brand-gold transition-colors">
              EXPLORE MORE <ChevronRight size={14} />
            </a>
          )}
        </div>
        {/* Right Side Image Placeholder */}
        <div className="col-span-4 bg-neutral-100 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2000&auto=format&fit=crop" 
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
        className={\`fixed w-full z-[100] transition-all duration-500 \${isSolid
          ? 'bg-white/98 backdrop-blur-md py-3 md:py-4 border-b border-neutral-100 shadow-sm'
          : 'bg-transparent py-5 md:py-8'
          }\`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Metro Retail"
              className={\`h-[30px] md:h-[30px] w-auto transition-all duration-500 \${isSolid ? 'brightness-100' : 'brightness-0 invert'}\`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            <a href="/" className={\`text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>Home</a>
            <a href="/portfolio" className={\`text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>Portfolio</a>

            <div className="relative py-2" onMouseEnter={() => setActiveMenu('residential')}>
              <a href="#" className={\`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>
                Residential <ChevronDown size={14} className={\`transition-transform duration-300 \${activeMenu === 'residential' ? 'rotate-180' : ''}\`} />
              </a>
            </div>

            <div className="relative py-2" onMouseEnter={() => setActiveMenu('commercial')}>
              <a href="#" className={\`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>
                Commercial <ChevronDown size={14} className={\`transition-transform duration-300 \${activeMenu === 'commercial' ? 'rotate-180' : ''}\`} />
              </a>
            </div>

            <div className="relative py-2" onMouseEnter={() => setActiveMenu('retail')}>
              <a href="#" className={\`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>
                Retail & F&B <ChevronDown size={14} className={\`transition-transform duration-300 \${activeMenu === 'retail' ? 'rotate-180' : ''}\`} />
              </a>
            </div>

            <div className="relative py-2" onMouseEnter={() => setActiveMenu('services')}>
              <a href="#" className={\`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>
                Services <ChevronDown size={14} className={\`transition-transform duration-300 \${activeMenu === 'services' ? 'rotate-180' : ''}\`} />
              </a>
            </div>

            <div className="relative py-2" onMouseEnter={() => setActiveMenu('styles')}>
              <a href="#" className={\`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>
                Styles <ChevronDown size={14} className={\`transition-transform duration-300 \${activeMenu === 'styles' ? 'rotate-180' : ''}\`} />
              </a>
            </div>

            <div className="relative py-2" onMouseEnter={() => setActiveMenu('more')}>
              <a href="#" className={\`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] uppercase transition-colors hover:text-brand-gold \${isSolid ? 'text-brand-dark' : 'text-white'}\`}>
                More <ChevronDown size={14} className={\`transition-transform duration-300 \${activeMenu === 'more' ? 'rotate-180' : ''}\`} />
              </a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="/contact" className={\`hidden md:block px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border \${isSolid
              ? 'bg-brand-dark text-white border-brand-dark hover:bg-brand-gold hover:border-brand-gold'
              : 'bg-white text-brand-dark border-white hover:bg-transparent hover:text-white'
              }\`}>
              Request Quote
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col gap-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={\`w-8 h-[1px] transition-all \${isSolid ? 'bg-brand-dark' : 'bg-white'}\`} />
              <div className={\`w-5 h-[1px] ml-auto transition-all \${isSolid ? 'bg-brand-dark' : 'bg-white'}\`} />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu === 'residential' && renderDropdownContent('RESIDENTIAL', RESIDENTIAL_LINKS, 2)}
          {activeMenu === 'commercial' && renderDropdownContent('COMMERCIAL', COMMERCIAL_LINKS, 1)}
          {activeMenu === 'retail' && renderDropdownContent('RETAIL & F&B', RETAIL_FB_LINKS, 1)}
          {activeMenu === 'services' && renderDropdownContent('SERVICES', SERVICES_LINKS, 3)}
          {activeMenu === 'styles' && renderDropdownContent('STYLES', STYLES_LINKS, 2)}
          {activeMenu === 'more' && renderDropdownContent('MORE', MORE_LINKS, 1, true)}
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

              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                {MOBILE_NAV_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-serif text-brand-dark hover:text-brand-gold transition-colors flex items-center justify-between gap-4 group"
                  >
                    {item.name}
                    <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-brand-gold" />
                  </a>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
`;

fs.writeFileSync('src/components/Navbar.tsx', content, 'utf8');
