"use client";

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-32 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-4">
            <img src="/logo.png" alt="Metro Retail Solutions" className="h-10 mb-12" />
            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-10 max-w-sm">
              Pioneering excellence in retail and commercial fit-outs across the GCC. We deliver turnkey environments through architectural precision and technical mastery.
            </p>
            <div className="flex gap-8">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-brand-dark/30 hover:text-brand-gold transition-colors duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark mb-10 border-b border-neutral-100 pb-4">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed group-hover:text-brand-dark transition-colors">Sharjah, <br />United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <span className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest group-hover:text-brand-dark transition-colors">+971 54 236 5212</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark mb-10 border-b border-neutral-100 pb-4">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Solutions', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest hover:text-brand-gold hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-500">
                    <div className="w-0 h-[1px] bg-brand-gold group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark mb-10 border-b border-neutral-100 pb-4">Newsletter</h4>
            <p className="text-neutral-400 text-sm font-light mb-10 font-light">Join our circle for exclusive design insights and architectural project updates.</p>
            <div className="flex border-b border-neutral-200 focus-within:border-brand-gold transition-colors pb-3">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-[10px] font-bold tracking-[0.2em] w-full outline-none placeholder:text-neutral-300" 
              />
              <button className="text-brand-dark hover:text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] transition-colors flex items-center gap-4 group whitespace-nowrap">
                Subscribe <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.5em] text-neutral-400">
          <p>© 2026 Metro Retail Solutions. All Rights Reserved.</p>
          <div className="flex gap-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
