"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';

const CONTACT_INFO = [
  {
    title: "Visit Our Headquarters",
    details: ["Industrial Area 2,", "Sharjah, United Arab Emirates"],
    icon: MapPin
  },
  {
    title: "Direct Inquiries",
    details: ["+971 54 236 5212", "info@metroretail.ae"],
    icon: Phone
  },
  {
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    icon: Clock
  }
];

export default function ContactPage() {
  return (
    <div className="bg-white pt-32">
      {/* Header */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-8 leading-tight">
              Let's Discuss Your <span className="italic text-brand-gold">Next Project</span>
            </h1>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              Whether you have a specific project in mind or just want to learn more about our services, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-serif text-brand-dark mb-12">Send us a message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-4 outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-4 outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+971 -- --- ----" 
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-4 outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Subject</label>
                    <select className="w-full bg-neutral-50 border-b border-neutral-200 py-4 outline-none focus:border-brand-gold transition-colors text-sm">
                      <option>General Inquiry</option>
                      <option>Retail Fit-out</option>
                      <option>Commercial Design</option>
                      <option>Residential Project</option>
                      <option>Manufacturing Request</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Project Details</label>
                  <textarea 
                    rows={6} 
                    placeholder="Tell us about your project..." 
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-4 outline-none focus:border-brand-gold transition-colors text-sm resize-none"
                  />
                </div>

                <button className="px-12 py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-all rounded-full flex items-center gap-6 group">
                  Submit Request <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <h2 className="text-3xl font-serif text-brand-dark mb-12">Information</h2>
                <div className="space-y-12">
                  {CONTACT_INFO.map((info, i) => (
                    <div key={i} className="flex gap-8">
                      <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center shrink-0 border border-neutral-100">
                        <info.icon size={20} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-4">{info.title}</h4>
                        {info.details.map((line, j) => (
                          <p key={j} className="text-neutral-500 font-light text-sm leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-12 bg-brand-dark rounded-sm text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-serif mb-6">Social Connect</h3>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">Follow us for the latest project updates and design inspiration.</p>
                <div className="flex gap-6">
                  {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0143899753!2d55.263884843359375!3d25.320448000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sIndustrial%20Area%202%2C%20Sharjah%2C%20UAE!5e0!3m2!1sen!2sae!4v1715690000000!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
