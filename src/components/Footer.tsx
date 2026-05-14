"use client";

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-32 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-1">
            <img src="https://mattermind.ae/wp-content/uploads/2024/09/metro-logo.png" alt="Metro Retail Solutions" className="h-10 mb-12" />
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-10 max-w-xs">
              Pioneering excellence in retail and commercial fit-outs across the region through innovation and artisanal craft.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-brand-dark/40 hover:text-brand-gold transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin size={16} className="text-brand-gold mt-1" />
                <span className="text-neutral-500 text-sm font-light leading-relaxed group-hover:text-brand-dark transition-colors">Industrial Area 2, <br />Sharjah, UAE</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={16} className="text-brand-gold" />
                <span className="text-neutral-500 text-sm font-light group-hover:text-brand-dark transition-colors">+971 54 236 5212</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={16} className="text-brand-gold" />
                <span className="text-neutral-500 text-sm font-light group-hover:text-brand-dark transition-colors">info@metroretail.ae</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark mb-10">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Solutions', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-neutral-400 text-sm font-light hover:text-brand-gold hover:translate-x-2 inline-block transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark mb-10">Newsletter</h4>
            <p className="text-neutral-400 text-sm font-light mb-8">Join our circle for exclusive design insights and project updates.</p>
            <div className="flex border-b border-brand-dark/10 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full outline-none" />
              <button className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          <p>© 2026 Metro Retail Solutions. All protocols reserved.</p>
          <div className="flex gap-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-neutral-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-500 transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
