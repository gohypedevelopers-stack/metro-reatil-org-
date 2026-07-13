"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, Hammer, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const PROCESS_PHASES = [
  {
    phase: "01",
    title: "Site Audit & Mobilization",
    subtitle: "Shell & Core Clearance & Approvals",
    icon: <HardHat className="w-6 h-6" />,
    img: "/images/phase_01_site_audit.png",
    desc: "Before laying a single brick, our technical engineering division conducts a multi-point site laser survey and MEP audit. We directly coordinate and obtain all required regulatory clearances—including Municipality, Civil Defense, and Mall Management—while building structural safety dust barriers and mobilizing specialized on-site machinery.",
    highlights: [
      "Laser-guided dimensional surveying",
      "Civil Defense & Municipality permits",
      "AC load & electrical distribution audits",
      "Dust-free safety hoarding & site setup"
    ],
    stats: {
      duration: "5 - 7 Days",
      officers: "3 Engineering Leads",
      compliance: "100% Certified"
    }
  },
  {
    phase: "02",
    title: "Off-Site Prefabrication",
    subtitle: "State-of-the-Art Carpentry Manufacture",
    icon: <Hammer className="w-6 h-6" />,
    img: "/images/phase_02_prefabrication.png",
    desc: "Parallel to site preparations, our private 9,000 sq.ft state-of-the-art carpentry workshop begins manufacturing bespoke elements. Master artisans fabricate custom wooden panels, luxury store counters, specialized showcases, and metal racks using precision German machinery. This offsite prefabrication slashes on-site construction timelines by over 45%.",
    highlights: [
      "9,000 sq.ft private carpentry unit",
      "Premium FSC lumber & custom veneer selection",
      "Heavy metalwork & custom brass detailing",
      "Pre-assembly testing & quality vetting"
    ],
    stats: {
      duration: "14 - 21 Days",
      artisans: "80+ Joiners & CNC Operators",
      precision: "Sub-millimeter scale"
    }
  },
  {
    phase: "03",
    title: "On-Site Civil & MEP Installation",
    subtitle: "Flawless Technical Execution",
    icon: <Wrench className="w-6 h-6" />,
    img: "/images/phase_03_installation.png",
    desc: "Our multi-disciplinary on-site crews install HVAC ducting, plumbing arrays, high-load electrical grids, fire suppression networks, and structural glass/drywall partition systems. By retaining all civil trades under a single master foreman, we eliminate the scheduling conflicts and quality drops associated with sub-contracting.",
    highlights: [
      "Certified HVAC ducting & grease traps",
      "High-load distribution board installations",
      "Double-glazed acoustic partitions",
      "Large-format porcelain & parquet floor laying"
    ],
    stats: {
      duration: "15 - 25 Days",
      crew: "25+ Specialized Installers",
      inspections: "Third-party audited"
    }
  },
  {
    phase: "04",
    title: "Detailing & Handover",
    subtitle: "Pristine, Brand-Ready Handover",
    icon: <ShieldCheck className="w-6 h-6" />,
    img: "/images/phase_04_handover.png",
    desc: "The final phase focuses on aesthetic detailing, prism architectural light testing, and strict internal snag clearance. We perform extensive electrical load tests and HVAC balance audits before executing a deep clinical sanitization. Your boutique or office is handed over fully powered and ready to load inventory immediately.",
    highlights: [
      "Comprehensive internal snag list clearing",
      "Architectural lighting lux testing",
      "HVAC balancing & smart controls setup",
      "Deep clinical sanitation & key handover"
    ],
    stats: {
      duration: "3 - 5 Days",
      snags: "Zero-tolerance standard",
      ready: "Product loading in 2 hours"
    }
  }
];

const ProcessDetailContent = ({ phase }: { phase: typeof PROCESS_PHASES[0] }) => {
  return (
    <div className="space-y-8 flex-grow">
      {/* Visual Image Header */}
      <div className="relative aspect-[16/8] overflow-hidden rounded-sm bg-neutral-900 border border-white/5 shadow-inner">
        <img 
          src={phase.img} 
          alt={phase.title} 
          className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1500ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
        
        {/* Floating Icon Tag */}
        <div className="absolute bottom-6 left-6 bg-brand-gold text-white p-3.5 rounded-full shadow-lg border border-brand-gold/20 flex items-center justify-center">
          {phase.icon}
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">
            Detailed Execution Log
          </span>
          <h4 className="text-2xl font-serif text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            {phase.title}
          </h4>
        </div>
        <p className="text-neutral-400 text-sm font-light leading-relaxed">
          {phase.desc}
        </p>
      </div>

      {/* Scope Grid Checklist */}
      <div className="pt-4">
        <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-4">
          Key Architectural & Engineering Scope:
        </span>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
          {phase.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-3 text-neutral-200 text-xs font-medium">
              <CheckCircle2 size={15} className="text-brand-gold shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden sm:grid pt-8 border-t border-white/5 grid-cols-3 gap-6 text-left">
        <div>
          <span className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-1">Timeline</span>
          <span className="text-brand-gold font-serif text-sm uppercase tracking-wide font-medium">{phase.stats.duration}</span>
        </div>
        <div>
          <span className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-1">Human Resource</span>
          <span className="text-brand-gold font-serif text-sm uppercase tracking-wide font-medium">{phase.stats.crew || phase.stats.artisans || phase.stats.officers}</span>
        </div>
        <div>
          <span className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-1">Standard Vetted</span>
          <span className="text-brand-gold font-serif text-sm uppercase tracking-wide font-medium">{phase.stats.precision || phase.stats.compliance || phase.stats.inspections || phase.stats.snags}</span>
        </div>
      </div>
    </div>
  );
};

const ExecutionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-end md:text-left mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block text-center md:text-left">
              Rigorous Execution Blueprint
            </span>
            <h2 className="mobile-heading-balance text-center md:text-left text-4xl md:text-6xl font-serif text-white uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR TURNKEY FIT-OUT <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Execution Process</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-md text-center md:text-left">
            We handle everything from bare concrete to brand loading. Our rigorous 4-phase execution eliminates multi-vendor friction and guarantees flawless commercial Handover.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-4">
            {PROCESS_PHASES.map((p, idx) => {
              const isActive = activeStep === idx;
              return (
                <div key={p.phase} className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 md:p-8 rounded-sm transition-all duration-500 border flex gap-6 items-center outline-none relative overflow-hidden group ${
                      isActive 
                        ? 'bg-white/5 border-brand-gold/40 shadow-xl' 
                        : 'bg-transparent border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Left Golden Accent Line on Active */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeBorder" 
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-gold" 
                      />
                    )}

                    {/* Circle Number */}
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 tracking-wider transition-all duration-500 ${
                      isActive 
                        ? 'bg-brand-gold border-brand-gold text-white shadow-lg' 
                        : 'border-white/10 text-neutral-400 group-hover:border-white/30 group-hover:text-white'
                    }`}>
                      {p.phase}
                    </div>

                    {/* Title Info */}
                    <div className="flex-grow">
                      <span className={`text-[8.5px] font-bold uppercase tracking-[0.25em] block mb-1 transition-colors duration-500 ${isActive ? 'text-brand-gold' : 'text-neutral-500 group-hover:text-neutral-400'}`}>
                        {p.subtitle}
                      </span>
                      <h3 className={`text-base font-serif uppercase tracking-widest transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`} style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                        {p.title}
                      </h3>
                    </div>

                    {/* Arrow Indicator */}
                    <div className={`transition-all duration-300 shrink-0 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-40'}`}>
                      <ArrowRight size={18} className="text-brand-gold" />
                    </div>
                  </button>

                  {/* Mobile Detail Accordion (Only shows on mobile, directly under the active section button) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden overflow-hidden bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-sm shadow-xl"
                      >
                        <ProcessDetailContent phase={p} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Slide Panel Detail view */}
          <div className="hidden lg:flex lg:col-span-7 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl min-h-[580px] flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 flex-grow"
              >
                <ProcessDetailContent phase={PROCESS_PHASES[activeStep]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionProcess;
