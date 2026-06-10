"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Instagram, Linkedin, Facebook, ChevronRight } from 'lucide-react';


const MOBILE_NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/solutions' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
];

const SOLUTIONS = [
  {
    category: "Design",
    items: [
      { name: "Interior Design", href: "/services/interior-design" },
      { name: "3D Visualization", href: "/services/3d-visualization" },
      { name: "Space Planning", href: "/services/space-planning" },
      { name: "Moodboards", href: "/services/moodboards" }
    ]
  },
  {
    category: "Fit-Out",
    items: [
      { name: "Joinery Works", href: "/services/joinery-works" },
      { name: "Flooring", href: "/services/flooring" },
      { name: "Partition Systems", href: "/services/partition-systems" },
      { name: "Acoustic Solutions", href: "/services/acoustic-solutions" }
    ]
  },
  {
    category: "Systems",
    items: [
      { name: "Electro-Mechanical", href: "/services/electro-mechanical" },
      { name: "Lighting Design", href: "/services/lighting-design" },
      { name: "Wall Covering", href: "/services/wall-covering" },
      { name: "Automation", href: "/services/automation" }
    ]
  }
];

const PROJECTS = [
  { name: "Retail", desc: "Showrooms and luxury boutiques" },
  { name: "Commercial", desc: "Corporate offices and workspaces" },
  { name: "Residential", desc: "Luxury villas and apartments" }
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${isSolid
          ? 'bg-white/98 backdrop-blur-md py-3 md:py-4 border-b border-neutral-100 shadow-sm'
          : 'bg-transparent py-5 md:py-8'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Metro Retail"
              className={`h-[30px] md:h-[30px] w-auto transition-all duration-500 ${isSolid ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <a href="/" className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>Home</a>
            <a href="/about" className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>About</a>

            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMenu('solutions')}
            >
              <a href="/solutions" className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMenu('portfolio')}
            >
              <a href="/portfolio" className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Portfolio <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'portfolio' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <a href="/contact" className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className={`hidden xl:flex flex-col items-end ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
              <span className="text-[8px] font-bold opacity-40 tracking-[0.3em] uppercase mb-1">Direct Line</span>
              <a href="tel:+919999999999" className="text-xs font-bold tracking-tight hover:text-brand-gold transition-colors">+91 XXXXX XXXXX</a>
            </div>

            <a href="/contact" className={`hidden md:block px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border ${isSolid
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

        {/* Mega Menu Dropdowns - Sharpened */}
        <AnimatePresence>
          {activeMenu === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-2xl py-20"
            >
              <div className="max-w-[1600px] mx-auto px-12 grid grid-cols-12 gap-16">
                <div className="col-span-4 border-r border-neutral-100 pr-16">
                  <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-6 block">Capabilities</span>
                  <h3 className="text-4xl font-serif text-brand-dark mb-8 leading-tight">Engineering <br />Future Spaces</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-10 font-light">
                    Comprehensive design and build solutions tailored to elevate your spatial identity and functional performance.
                  </p>
                  <a href="/solutions" className="inline-flex items-center gap-4 text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] group border-b border-brand-dark pb-1">
                    Explore All <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
                <div className="col-span-8 grid grid-cols-3 gap-12">
                  {SOLUTIONS.map((cat, i) => (
                    <div key={i}>
                      <h4 className="text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border-b border-neutral-100 pb-4">{cat.category}</h4>
                      <ul className="space-y-6">
                        {cat.items.map((item, j) => (
                          <li key={j}>
                            <a href={item.href} className="text-neutral-400 hover:text-brand-gold text-[11px] font-bold uppercase tracking-widest transition-colors block">{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-2xl py-20"
            >
              <div className="max-w-[1600px] mx-auto px-12 grid grid-cols-12 gap-16">
                <div className="col-span-4 border-r border-neutral-100 pr-16">
                  <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-6 block">Portfolio</span>
                  <h3 className="text-4xl font-serif text-brand-dark mb-8 leading-tight">Selected <br />Achievements</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-10 font-light">
                    Discover how we transform visions into remarkable realities across various sectors in the GCC.
                  </p>
                  <a href="/portfolio" className="inline-flex items-center gap-4 text-brand-dark text-[10px] font-bold uppercase tracking-[0.3em] group border-b border-brand-dark pb-1">
                    View Portfolio <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
                <div className="col-span-8 flex flex-col gap-4">
                  {PROJECTS.map((proj, i) => (
                    <a key={i} href={`/portfolio?filter=${proj.name.toLowerCase()}`} className="group p-8 border border-neutral-100 hover:border-brand-gold/30 hover:bg-neutral-50 transition-all duration-500 flex justify-between items-center">
                      <div>
                        <h4 className="text-brand-dark font-bold text-[11px] uppercase tracking-[0.2em] mb-2 group-hover:text-brand-gold transition-colors">{proj.name}</h4>
                        <p className="text-neutral-400 text-[11px] font-light">{proj.desc}</p>
                      </div>
                      <ChevronRight size={18} className="text-neutral-200 group-hover:text-brand-gold group-hover:translate-x-2 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu - Sharpened */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[150] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-[min(90vw,420px)] h-full bg-white p-6 sm:p-10 md:p-12 flex flex-col overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center gap-4 mb-12 sm:mb-20 md:mb-24">
                <img src="/logo.png" alt="Metro Retail" className="h-[30px] w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-[9px] font-bold uppercase tracking-widest border border-neutral-200 px-5 py-3">Close</button>
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

                {/* Collapsible More Section */}
                <div className="border-t border-neutral-100 pt-4">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="text-2xl sm:text-3xl font-serif text-brand-dark hover:text-brand-gold transition-colors flex items-center justify-between w-full text-left"
                  >
                    <span>More</span>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180 text-brand-gold' : 'text-neutral-400'}`} />
                  </button>
                  <AnimatePresence>
                    {isMoreOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 mt-4 flex flex-col gap-4"
                      >
                        {[
                          { name: 'Blog', href: '#' },
                          { name: 'Careers', href: '#' },
                          { name: 'Contact Information', href: '/contact' }
                        ].map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMoreOpen(false);
                            }}
                            className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-brand-gold transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Dedicated Contact Us Button & Info */}
              <div className="mt-auto pt-8 border-t border-neutral-100 space-y-6">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] bg-brand-dark text-white hover:bg-brand-gold transition-all duration-300 border border-brand-dark hover:border-brand-gold"
                >
                  Contact Us
                </a>

                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-400">Get in touch</span>
                  <a href="tel:+919999999999" className="text-lg font-bold text-brand-dark">+91 XXXXX XXXXX</a>
                  <a href="mailto:info@metroretail.ae" className="text-xs text-neutral-500">info@metroretail.ae</a>
                </div>
                <div className="flex gap-6">
                  {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="text-neutral-400 hover:text-brand-gold transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
