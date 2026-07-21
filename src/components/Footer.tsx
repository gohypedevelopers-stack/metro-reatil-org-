"use client";

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ChevronRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-24 lg:mb-32">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 flex flex-col justify-between">
            <div>
              <img src="/logo.png" alt="Metro Retail Solutions" className="h-[30px] w-auto mb-8 brightness-0 invert" />
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 max-w-sm">
                Pioneering excellence in retail and commercial fit-outs across the GCC. We deliver turnkey environments through architectural precision, bespoke carpentry, and technical MEP mastery.
              </p>
            </div>
            <div className="flex gap-6 mt-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-brand-gold transition-colors duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white mb-8 border-b border-white/10 pb-4">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Careers', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest hover:text-brand-gold transition-all duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white mb-8 border-b border-white/10 pb-4">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Retail Design', href: '/services/retail-design' },
                { name: 'Turnkey Execution', href: '/services/turnkey-execution' },
                { name: 'MEP Infrastructure', href: '/services/technical-infrastructure' },
                { name: 'Bespoke Carpentry', href: '/services/bespoke-carpentry' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest hover:text-brand-gold transition-all duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white mb-8 border-b border-white/10 pb-4">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin size={15} className="text-brand-gold shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=F-1,+SITE-5+KASNA,+Greater+Noida,+Uttar+Pradesh+201312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed hover:text-white transition-colors"
                >
                  F-1, SITE-5 KASNA, <br />Greater Noida (U.P.)
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={15} className="text-brand-gold shrink-0" />
                <a href="tel:+919999999999" className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={15} className="text-brand-gold shrink-0" />
                <a href="mailto:info@metroretail.ae" className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors lowercase">
                  info@metroretail.ae
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-brand-gold text-brand-gold text-[9px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 whitespace-nowrap"
                >
                  <MessageCircle size={12} /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white mb-8 border-b border-white/10 pb-4">Newsletter</h4>
            <p className="text-neutral-400 text-[11px] font-light mb-6 leading-relaxed">Join our circle for exclusive design insights and architectural project updates.</p>
            <div className="flex border-b border-white/20 focus-within:border-brand-gold transition-colors pb-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent text-[9px] font-bold tracking-[0.1em] w-full outline-none placeholder:text-neutral-600 text-white"
                suppressHydrationWarning
              />
              <button className="text-white/50 hover:text-brand-gold transition-colors" suppressHydrationWarning>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-10 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[9px] font-bold uppercase tracking-[0.25em] md:tracking-[0.5em] text-neutral-500 leading-relaxed">
          <p>© 2026 Metro Retail Solutions. All Rights Reserved.</p>
          <div className="flex gap-8 md:gap-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
