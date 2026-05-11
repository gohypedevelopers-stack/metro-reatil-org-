"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronDown, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';


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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


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
        className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || activeMenu
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-neutral-100 shadow-sm'
            : 'bg-transparent py-6'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Metro Retail"
              className={`h-10 md:h-12 w-auto transition-all duration-500 ${isScrolled || activeMenu ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a href="/" className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}>Home</a>
            <a href="/#about" className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}>About</a>

            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMenu('solutions')}
            >
              <button className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}>
                Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMenu('portfolio')}
            >
              <button className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}>
                Portfolio <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'portfolio' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <a href="/#contact" className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}>Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-8">
            <div className={`hidden xl:flex flex-col items-end ${isScrolled || activeMenu ? 'text-brand-dark' : 'text-white'}`}>
              <span className="text-[9px] font-bold opacity-50 tracking-widest uppercase mb-1">Inquiries</span>
              <a href="tel:+971542365212" className="text-xs font-bold tracking-tight hover:text-brand-gold transition-colors">+971 54 236 5212</a>
            </div>

            <button className={`hidden md:block px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${isScrolled || activeMenu
                ? 'bg-brand-gold text-white hover:bg-brand-dark'
                : 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white'
              }`}>
              Contact Us
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-8 h-0.5 transition-all ${isScrolled || activeMenu ? 'bg-brand-dark' : 'bg-white'}`} />
              <div className={`w-6 h-0.5 ml-auto transition-all ${isScrolled || activeMenu ? 'bg-brand-dark' : 'bg-white'}`} />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeMenu === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-xl py-16"
            >
              <div className="max-w-[1600px] mx-auto px-12 grid grid-cols-4 gap-12">
                <div className="col-span-1 border-r border-neutral-100">
                  <h3 className="text-2xl font-serif text-brand-dark mb-6">Our Expertise</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed pr-8">
                    Comprehensive design and build solutions tailored to elevate your spatial identity and functional performance.
                  </p>
                  <a href="/#services" className="inline-flex items-center gap-4 text-brand-gold text-[10px] font-bold uppercase tracking-widest mt-8 group">
                    View All Services <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
                {SOLUTIONS.map((cat, i) => (
                  <div key={i} className="col-span-1">
                    <h4 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">{cat.category}</h4>
                    <ul className="space-y-4">
                      {cat.items.map((item, j) => (
                        <li key={j}>
                          <a href="#" className="text-brand-dark hover:text-brand-gold text-sm transition-colors block py-1">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeMenu === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-xl py-16"
            >
              <div className="max-w-[1600px] mx-auto px-12 grid grid-cols-4 gap-12">
                <div className="col-span-1 border-r border-neutral-100">
                  <h3 className="text-2xl font-serif text-brand-dark mb-6">Selected Works</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed pr-8">
                    Discover how we transform visions into remarkable realities across various sectors in the GCC.
                  </p>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-8">
                  {PROJECTS.map((proj, i) => (
                    <a key={i} href="#" className="group p-6 border border-neutral-50 hover:border-brand-gold/20 hover:bg-neutral-50 transition-all rounded-sm flex justify-between items-center">
                      <div>
                        <h4 className="text-brand-dark font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-brand-gold transition-colors">{proj.name}</h4>
                        <p className="text-neutral-400 text-xs">{proj.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={16} className="text-brand-gold" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[150] lg:hidden p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <img src="/logo.png" alt="Metro Retail" className="h-10" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-[10px] font-bold uppercase tracking-widest border border-brand-dark/10 px-6 py-2 rounded-full">Close</button>
            </div>

            <div className="flex flex-col gap-8">
              {['Home', 'About', 'Solutions', 'Portfolio', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-4xl font-serif text-brand-dark hover:text-brand-gold transition-colors">{item}</a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-neutral-100 space-y-6">
              <div className="flex items-center gap-4 text-brand-dark">
                <Phone size={18} className="text-brand-gold" />
                <span className="font-bold">+971 54 236 5212</span>
              </div>
              <div className="flex items-center gap-4 text-brand-dark">
                <Mail size={18} className="text-brand-gold" />
                <span className="font-bold">sales@metroretail.solutions</span>
              </div>
              <div className="flex gap-6 pt-4">
                <Instagram size={20} className="text-neutral-400" />
                <Linkedin size={20} className="text-neutral-400" />
                <Facebook size={20} className="text-neutral-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
