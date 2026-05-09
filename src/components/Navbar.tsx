"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-1 shadow-sm' : 'bg-transparent py-2'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Metro Retail Solutions Logo"
            className={`h-12 md:h-16 w-auto transition-all duration-500 hover:scale-110 ${isScrolled ? 'h-10 md:h-12' : ''}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/logo.png';
            }}
          />
        </a>

        {/* Contact Info Desktop */}
        <div className={`hidden lg:flex items-center gap-8 xl:gap-12 ml-auto mr-12 text-[10px] xl:text-xs transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'border-brand-dark/10' : 'border-white/20'}`}>
              <Mail size={18} />
            </div>
            <div>
              <p className="opacity-60 uppercase font-bold text-[8px] mb-0.5 tracking-wider">EMAIL US ON</p>
              <p className="font-semibold tracking-tight hover:text-brand-gold transition-colors">sales@metroretail.solutions</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'border-brand-dark/10' : 'border-white/20'}`}>
              <Phone size={18} />
            </div>
            <div>
              <p className="opacity-60 uppercase font-bold text-[8px] mb-0.5 tracking-wider">WHATSAPPP ON</p>
              <p className="font-semibold tracking-tight hover:text-brand-gold transition-colors">+971 54 236 5212</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'border-brand-dark/10' : 'border-white/20'}`}>
              <Phone size={18} />
            </div>
            <div>
              <p className="opacity-60 uppercase font-bold text-[8px] mb-0.5 tracking-wider">CALL US</p>
              <p className="font-semibold tracking-tight hover:text-brand-gold transition-colors">+971 25653070</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block bg-brand-gold text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg active:scale-95 leading-none">
            SPEAK TO OUR TEAM
          </button>

          <button className="flex flex-col gap-1.5 group cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`w-10 h-0.5 transition-all group-hover:w-8 ${isScrolled ? 'bg-brand-dark' : 'bg-white'}`} />
            <div className={`w-10 h-0.5 ${isScrolled ? 'bg-brand-dark' : 'bg-white'}`} />
            <div className={`w-8 h-0.5 transition-all group-hover:w-10 ${isScrolled ? 'bg-brand-dark' : 'bg-white'}`} />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#EBE9E1] z-[100] flex flex-col justify-center overflow-y-auto"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 md:top-12 md:right-12 text-brand-dark hover:text-brand-gold transition-colors z-[110]">
              <X size={40} strokeWidth={1} />
            </button>

            <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 py-20 flex flex-col md:flex-row gap-16 md:gap-32">
              {/* Left Column - Main Links */}
              <div className="flex flex-col gap-6 md:gap-8 md:w-1/2 pt-4">
                {['HOME', 'ABOUT US', 'SERVICES', 'BLOG', 'PROJECTS', 'CONTACT US'].map((item) => (
                  <a
                    key={item}
                    href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-[0.1em] text-neutral-500 hover:text-brand-dark transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Right Column - Info */}
              <div className="md:w-1/2 flex flex-col gap-12 pt-6">
                {/* Our Services */}
                <div>
                  <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm md:text-base mb-6">OUR SERVICES</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-neutral-500 text-sm md:text-base font-light">
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Interior Design</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Flooring</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Interior Fit-Out</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Wall Covering</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Electro-Mechanical</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Office Furniture</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Raised Flooring</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Educational Furniture</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Joinery Works</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Acoustic</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Lighting</span>
                    <span className="hover:text-brand-dark cursor-pointer transition-colors">Partition</span>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm md:text-base mb-6">CONTACT</h4>
                  <div className="space-y-4 text-neutral-500 text-sm md:text-base font-light">
                    <div className="flex gap-4 items-start">
                      <MapPin size={18} className="text-brand-gold mt-1 shrink-0" strokeWidth={1.5} />
                      <div className="leading-relaxed">
                        <p>Metro Retail Solutions LLC</p>
                        <p>Office No: 3 Building: C 130</p>
                        <p>Akhayil St. Mohamed Bin Zayed City</p>
                        <p>ME-9 - Abu Dhabi, UAE</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Mail size={18} className="text-brand-gold shrink-0" strokeWidth={1.5} />
                      <a href="mailto:sales@metroretail.solutions" className="hover:text-brand-dark transition-colors">sales@metroretail.solutions</a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                      <div className="flex gap-4 items-center">
                        <Phone size={18} className="text-brand-gold shrink-0" strokeWidth={1.5} />
                        <a href="tel:+971542365212" className="hover:text-brand-dark transition-colors">+971 54 236 5212</a>
                      </div>
                      <div className="flex gap-4 items-center">
                        <Phone size={18} className="text-brand-gold shrink-0" strokeWidth={1.5} />
                        <a href="tel:+97125653070" className="hover:text-brand-dark transition-colors">+971 25653070</a>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Phone size={18} className="text-brand-gold shrink-0" strokeWidth={1.5} />
                      <a href="tel:+971502525180" className="hover:text-brand-dark transition-colors">+971 50 2525 180</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
