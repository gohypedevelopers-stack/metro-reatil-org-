"use client";

import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
  ArrowUpRight,
  Monitor,
  Home,
  Coffee,
  Building2,
  HardHat,
  Paintbrush,
  CheckCircle
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- Components ---



const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background with Subtle Zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
          alt="Interior Design Process"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-8 block">
            Crafting Exceptional Environments
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl lg:text-8xl mb-12 tracking-[-0.02em] leading-[0.95]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            <span className="text-white uppercase font-light">Architectural</span> <br />
            <span className="text-brand-gold italic" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Retail Design</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="#projects" className="px-10 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-full">
              Explore Portfolio
            </a>
            <a href="#contact" className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-brand-gold transition-all">
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left translate-x-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Corporate Design Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark text-[8px] font-bold uppercase tracking-[0.2em] rounded-full shadow-sm">
                  Case Study: Corporate HQ
                </span>
              </div>
            </motion.div>
            <div className="absolute -bottom-12 -right-12 w-1/2 aspect-square bg-brand-dark p-8 hidden md:flex flex-col justify-end">
              <span className="text-brand-gold text-4xl font-serif mb-4">01</span>
              <p className="text-white text-xs font-light leading-relaxed">
                Architecting the future of high-performance retail and corporate environments.
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-8 block"
            >
              The Foundation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl text-brand-dark mb-10 leading-tight uppercase"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Defining the <br />
              <span className="text-brand-gold font-light italic" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Interior Narrative</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-neutral-500 text-base md:text-lg font-light leading-relaxed mb-12"
            >
              At Metro Retail Solutions, we don't just build spaces; we architect experiences. Our approach to interior design is rooted in the fusion of brand identity and spatial ergonomics—ensuring every boutique, office, and lounge we create is as functional as it is visually arresting.
            </motion.p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">Vision</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">To redefine the standard of luxury interiors across the GCC.</p>
              </div>
              <div>
                <h4 className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-4">Mission</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Delivering turnkey excellence through innovation and artisan craft.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Consultation", desc: "Understanding your vision and spatial objectives." },
    { title: "Strategy", desc: "Meticulous planning and material curation." },
    { title: "Creation", desc: "Execution with uncompromising precision." },
    { title: "Curatorship", desc: "Final refinement and seamless handover." }
  ];

  return (
    <section className="py-24 bg-white border-y border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-neutral-100 font-serif text-8xl absolute -top-8 -left-4 z-0 select-none">
                0{i + 1}
              </span>
              <div className="relative z-10 pt-10">
                <h3 className="text-lg font-serif text-brand-dark mb-4 uppercase tracking-widest">{step.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const SolutionsSection = () => {
  const categories = [
    {
      title: "Retail Excellence",
      desc: "Boutique storefronts and high-end retail environments.",
      items: ["Concept Stores", "Flagship Fit-outs", "Display Systems", "Technical Lighting"],
      img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop"
    },
    {
      title: "Corporate Innovation",
      desc: "High-performance office and commercial environments.",
      items: ["Open Workspaces", "Executive Suites", "Acoustic Solutions", "Smart Boardrooms"],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Hospitality & F&B",
      desc: "Luxury lounges and bespoke restaurant interiors.",
      items: ["Bespoke Joinery", "Kitchen Systems", "Atmospheric Lighting", "Furniture Curation"],
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-neutral-50">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-6 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-brand-dark uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Our Solutions
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-700 group border border-neutral-100 flex flex-col h-full"
            >
              <div className="aspect-video mb-10 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-brand-dark/80 text-white text-[7px] font-bold uppercase tracking-widest">
                    {i === 0 ? "Visualizing High-Traffic Flow" : i === 1 ? "Ergonomic System Integration" : "Material Curation Field"}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">{cat.title}</h3>
              <p className="text-neutral-400 text-sm mb-8 font-light">{cat.desc}</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-brand-dark text-xs font-medium border-b border-neutral-50 pb-2">
                    <span className="w-1 h-1 bg-brand-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-gold transition-colors">
                Discover More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: "01",
      category: "Retail",
      title: "The Vogue Gallery",
      desc: "A flagship retail experience designed for a premium luxury brand.",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: "02",
      category: "Commercial",
      title: "Axis Headquarters",
      desc: "Transforming corporate environments into high-performance cognitive spaces.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "03",
      category: "Hospitality",
      title: "Zina's Lounge",
      desc: "A boutique hospitality space designed with precision and luxury.",
      img: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold mb-6 block"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-brand-dark uppercase leading-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Excellence in <br />
              <span className="text-neutral-300 font-light italic" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Execution</span>
            </motion.h2>
          </div>
          <div className="flex gap-4">
            {["All", "Commercial", "Residential", "F&B"].map((tab, i) => (
              <button 
                key={i} 
                onClick={() => setActiveFilter(tab)}
                className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2 border rounded-full transition-all ${activeFilter === tab ? 'bg-brand-dark text-white border-brand-dark' : 'text-neutral-400 border-neutral-100 hover:border-brand-gold hover:text-brand-gold'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {(activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)).map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 shadow-sm">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-brand-dark rounded-full w-fit">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-brand-gold/90 text-white text-[7px] font-bold uppercase tracking-widest w-fit rounded-sm shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      Visual Insight: Architectural Curation
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-brand-dark mb-3 group-hover:text-brand-gold transition-colors uppercase tracking-wider">{project.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">{project.desc}</p>
                <a href="#" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark border-b border-neutral-100 pb-1 group-hover:border-brand-gold group-hover:text-brand-gold transition-all">
                  Case Study <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// --- Main App ---

const Testimonials = () => {
  const testimonials = [
    {
      text: "I wanted to take a moment to express my gratitude for the exemplary effort and dedication that you and your team put into completing our project (Gerard Cafe at Adnoc station - Ajman) successfully and efficiently. Your attention to detail, creativity, and design truly shone through every step of the way.",
      name: "Ahmad Masarani",
      role: "Gerard Cafe",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      logo: "https://mattermind.ae/wp-content/uploads/2023/06/gerard-logo.png"
    },
    {
      text: "Collaborating with Metro Retail Solutions has been truly seamless. Their expertise, attention to detail, and deep understanding of our vision have consistently stood out. Their professionalism and ease of working together make every project a delightful experience.",
      name: "Naseem Abdul Khader",
      role: "Al Rumooz Central Kitchen Equipment Installation LLC",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    },
    {
      text: "Metro Retail Solutions truly exceeded our expectations with their impeccable execution of the full fit out project of our new restaurant at Khalidiyah Mall. Their professionalism, creative approach, and timely completion showcased their commitment.",
      name: "Haris Kunnumpurath",
      role: "Tandooriya Dhaba",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-32 relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.85]"
          >
            {/* Top Line: W (Cursive) + HAT (Gold) */}
            <div
              className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-gold flex justify-center items-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-normal"
                style={{ fontFamily: 'var(--font-great-vibes), cursive', textTransform: 'none' }}
              >
                W
              </motion.span>
              {"hat".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Bottom Line: CUSTOMERS SAY (Black) */}
            <div
              className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {"CUSTOMERS SAY".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.7 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block whitespace-pre"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-gold/30">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-12 md:py-0 flex flex-col items-center md:items-start"
            >
              {/* Quote Mark */}
              <div className="mb-6 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-brand-gold">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>

              <p className="text-brand-dark/80 text-sm leading-relaxed mb-12 text-center md:text-left h-full italic">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-brand-gold/10 w-full">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 shrink-0">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-brand-gold font-bold text-sm leading-tight">{t.name}</h5>
                  <p className="text-brand-dark/60 text-[10px] uppercase tracking-wider font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const clients = [
    { name: "Client 01", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-01.png" },
    { name: "Client 02", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-02.png" },
    { name: "Americana", logo: "https://mattermind.ae/wp-content/themes/meiveda/images/americana-logo-1.png" },
    { name: "Client 03", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-03.png" },
    { name: "Client 04", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-04.png" },
    { name: "Client 05", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-05.png" },
    { name: "Client 07", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-07.png" },
    { name: "Client 19", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-19.png" },
    { name: "Client 21", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-21.png" },
    { name: "CA Logo", logo: "https://mattermind.ae/wp-content/uploads/2024/12/ca-logo.png" },
    { name: "Client 17", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-17.png" },
    { name: "Client 18", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-18.png" },
    { name: "Client 08", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-08.png" },
    { name: "Client 13", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-13.png" },
    { name: "Client 14", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-14.png" },

  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-gold/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-center mb-32 relative">
          <div className="text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block select-none leading-[0.85]"
            >
              {/* Top Line: O (Cursive) + UR (Gold) */}
              <div
                className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-gold flex justify-center items-center"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-normal"
                  style={{ fontFamily: 'var(--font-great-vibes), cursive', textTransform: 'none' }}
                >
                  O
                </motion.span>
                {"ur".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Bottom Line: CLIENTS (Black) */}
              <div
                className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {"CLIENTS".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.7 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-brand-dark/5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-8 md:p-12 border-r border-b border-brand-dark/5 hover:bg-brand-gold/[0.02] transition-colors group h-48"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-16 object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f9f9f8&color=c29d59&size=128`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestProjectsSection = () => {
  const projects = [
    { name: "ROLEX BOUTIQUE", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" },
    { name: "APPLE INNOVATION CENTER", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" },
    { name: "MINIMALIST DESIGN STUDIO", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { name: "COSTA COFFEE", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative gap-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.85]"
          >
            {/* Top Line: L (Cursive) + ATEST (Gold) */}
            <div
              className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-gold flex justify-start items-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-normal"
                style={{ fontFamily: 'var(--font-great-vibes), cursive', textTransform: 'none' }}
              >
                L
              </motion.span>
              {"atest".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Bottom Line: PROJECTS (Black) */}
            <div
              className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-start items-center text-black"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {"PROJECTS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, delay: 0.7 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h2>

          <a href="#" className="flex items-center gap-4 text-brand-gold font-medium border-b border-brand-gold pb-1 group hover:text-black hover:border-black transition-all mb-4">
            View All Projects <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-x-0 bottom-8 text-center">
                <span className="text-white text-xs font-bold tracking-[0.3em] uppercase drop-shadow-lg">{project.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PMCSection = () => {
  const steps = [
    { title: 'Project Strategy', desc: 'Comprehensive feasibility and fiscal planning.' },
    { title: 'Procurement', desc: 'Direct sourcing from an elite global network of artisans.' },
    { title: 'Technical Oversight', desc: 'Rigorous quality control and engineering precision.' }
  ];

  return (
    <section id="pmc" className="py-32 md:py-48 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-gold mb-10 block"
            >
              Consultancy Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl mb-12 uppercase leading-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              The Science <br />
              <span className="text-neutral-500 font-light italic" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>of Execution</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-16 max-w-xl"
            >
              Our Project Management Consultancy provides a singular point of accountability. we orchestrate every technical detail, ensuring your vision is realized without compromise.
            </motion.p>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-8 pb-8 border-b border-white/5 hover:border-brand-gold transition-colors duration-500"
                >
                  <span className="text-brand-gold font-serif text-2xl opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <div>
                    <h4 className="text-white text-lg font-serif mb-2 uppercase tracking-widest">{step.title}</h4>
                    <p className="text-neutral-500 text-sm font-light">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop"
              alt="Engineering Precision"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-brand-dark/20" />
            <div className="absolute top-10 right-10 flex flex-col items-end">
              <span className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.4em] mb-2">Technical Detail</span>
              <div className="h-[1px] w-12 bg-brand-gold/50" />
              <p className="text-white/60 text-[8px] mt-2 max-w-[120px] text-right leading-relaxed">
                Meticulous blueprinting and engineering oversight for complex retail fit-outs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-brand-dark py-24 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-sm">
            <a href="#" className="flex items-center mb-10 group">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto hover:scale-105 transition-transform" />
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-10 font-light">
              Architecting the future of corporate and residential high-performance environments
              across the GCC.
            </p>
            <div className="flex gap-8">
              <Instagram size={18} className="text-neutral-400 hover:text-brand-gold cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-neutral-400 hover:text-brand-gold cursor-pointer transition-colors" />
              <Facebook size={18} className="text-neutral-400 hover:text-brand-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Registry</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Methods</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Inquiry</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-dark">Hubs</h5>
              <ul className="space-y-4 text-neutral-500 text-[10px] uppercase tracking-widest">
                <li>Abu Dhabi</li>
                <li>Dubai</li>
                <li>London</li>
              </ul>
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

// --- Main Page ---
export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="font-sans">
      <Hero isLoaded={true} />

      {/* Content Wrapper for Sticky Reveal */}
      <div className="relative z-10 bg-white">
        <AboutSection />
        <ProcessSection />
        <SolutionsSection />
        <PMCSection />
        <PortfolioSection />
        <Testimonials />
        <ClientsSection />
        <LatestProjectsSection />
        <Footer />
      </div>
    </div>
  );
}
