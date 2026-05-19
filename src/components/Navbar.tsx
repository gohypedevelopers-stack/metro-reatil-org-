"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, ArrowRight, Instagram, Linkedin, Facebook, ChevronRight } from 'lucide-react';


const SOLUTIONS = [
  {
    category: "Design",
    items: ["Interior Design", "3D Visualization", "Space Planning", "Moodboards"]
  },
  {
    category: "Fit-Out",
    items: ["Joinery Works", "Flooring", "Partition Systems", "Acoustic Solutions"]
  },
  {
    category: "Systems",
    items: ["Electro-Mechanical", "Lighting Design", "Wall Covering", "Automation"]
  }
];

const PROJECTS = [
  { name: "Retail", desc: "Showrooms and luxury boutiques" },
  { name: "Commercial", desc: "Corporate offices and workspaces" },
  { name: "Residential", desc: "Luxury villas and apartments" },
  { name: "Hospitality", desc: "Restaurants, Cafes and Hotels" }
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? 'bg-white/98 backdrop-blur-md py-4 border-b border-neutral-100 shadow-sm'
          : 'bg-transparent py-8'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
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
              <button className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMenu('portfolio')}
            >
              <button className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>
                Portfolio <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'portfolio' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <a href="/contact" className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors hover:text-brand-gold ${isSolid ? 'text-brand-dark' : 'text-white'}`}>Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-8">
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
                            <a href="/solutions" className="text-neutral-400 hover:text-brand-gold text-[11px] font-bold uppercase tracking-widest transition-colors block">{item}</a>
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
                <div className="col-span-8 grid grid-cols-2 gap-6">
                  {PROJECTS.map((proj, i) => (
                    <a key={i} href="/portfolio" className="group p-8 border border-neutral-100 hover:border-brand-gold/30 hover:bg-neutral-50 transition-all duration-500 flex justify-between items-center">
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
              className="absolute right-0 top-0 w-[85%] h-full bg-white p-12 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-24">
                <img src="/logo.png" alt="Metro Retail" className="h-[30px] w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-[9px] font-bold uppercase tracking-widest border border-neutral-200 px-6 py-3">Close</button>
              </div>

              <div className="flex flex-col gap-10">
                {['Home', 'About', 'Solutions', 'Portfolio', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-5xl font-serif text-brand-dark hover:text-brand-gold transition-colors flex items-center justify-between group"
                  >
                    {item}
                    <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-brand-gold" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-16 border-t border-neutral-100 space-y-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-400">Get in touch</span>
                  <a href="tel:+919999999999" className="text-xl font-bold text-brand-dark">+91 XXXXX XXXXX</a>
                  <a href="mailto:info@metroretail.ae" className="text-sm text-neutral-500">info@metroretail.ae</a>
                </div>
                <div className="flex gap-8">
                  {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="text-neutral-400 hover:text-brand-gold transition-colors">
                      <Icon size={20} />
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
