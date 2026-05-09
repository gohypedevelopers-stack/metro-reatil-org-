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

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const phrases = [
    ["Hello,", "we", "are"],
    ["Metro", "Retail"]
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < phrases.length - 1) {
        setStep(step + 1);
      } else {
        onComplete();
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [step, onComplete]);

  const containerVars: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
    }
  };

  const wordVars: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center"
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={containerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex gap-x-1.5 md:gap-x-2 flex-wrap justify-center px-10 items-center"
          >
            {step === 1 && (
              <motion.img
                variants={wordVars}
                src="/logo.png"
                alt="Logo"
                className="h-10 md:h-14 w-auto"
              />
            )}
            {phrases[step].map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className="text-white text-base md:text-lg font-bold tracking-widest"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-brand-gold opacity-50"
      />
    </motion.div>
  );
};

const Navbar = () => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Metro Retail Solutions Logo"
            className={`h-20 md:h-32 w-auto transition-all duration-500 hover:scale-110 ${isScrolled ? 'h-16 md:h-24' : ''}`}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark z-40 md:hidden flex flex-col items-center justify-center gap-12"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-white">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center text-white">
              <a href="#" className="text-4xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Expertise</a>
              <a href="#projects" className="text-4xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
              <a href="#about" className="text-4xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Methods</a>
              <a href="#contact" className="text-4xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      className="sticky top-0 h-screen flex items-center overflow-hidden bg-brand-dark z-0"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsHovering(true);
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image - High quality interior fit-out */}
      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={isLoaded ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")' }}
      >
        {/* Static Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Dynamic Light Spot */}
        <motion.div
          className="absolute w-[150px] h-[150px] pointer-events-none z-10 rounded-full"
          animate={{
            x: mousePos.x - 75,
            y: mousePos.y - 75,
            opacity: isHovering ? 1 : 0
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            mixBlendMode: "overlay",
            filter: "blur(35px)",
          }}
        />

        {/* Subtle Reveal Mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: isHovering
              ? `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, black 100%)`
              : 'none',
            WebkitMaskImage: isHovering
              ? `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, black 100%)`
              : 'none',
          }}
        />
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center md:items-end justify-center md:justify-end h-full pb-24 text-center md:text-right">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-signature text-brand-gold text-4xl md:text-7xl mb-0 translate-y-4 md:translate-y-8 select-none"
          >
            Perfection is a
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl md:text-[140px] font-sans font-thin leading-none mb-4 tracking-tight uppercase"
          >
            STATE OF MIND
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-xs md:text-sm max-w-2xl ml-auto font-medium leading-relaxed opacity-90 drop-shadow-md"
          >
            Our expert team brings your vision to life, transforming interiors into environments that inspire and impress.
          </motion.p>
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-12 left-6 md:left-12"
        >
          <a href="#about" className="flex items-center gap-3 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] group border-l-2 border-brand-gold pl-4 hover:border-white transition-all">
            Find out more about us <ChevronRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left Column: Editorial Content */}
          <div className="lg:w-[55%] space-y-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-12 block"
              >
                ABOUT US
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="select-none mb-6 leading-[0.85]"
              >
                <div
                  className="text-4xl md:text-6xl uppercase tracking-[0.05em] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  <span className="text-brand-gold">
                    <span
                      className="font-normal"
                      style={{ fontFamily: 'var(--font-great-vibes), cursive', textTransform: 'none' }}
                    >
                      D
                    </span>
                    esign
                  </span>
                  <span className="text-brand-dark"> with</span>
                </div>
                <div
                  className="text-4xl md:text-6xl uppercase tracking-[0.05em] -mt-2 md:-mt-4 text-brand-dark"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Intention
                </div>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md font-light"
              >
                At Metro Retail Solutions, we believe that interior design is not just about how a space looks – it's about how it makes you feel. We approach each project as a layered composition of light, form, and purpose, where clarity meets quiet beauty.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#" className="inline-flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark border-b border-brand-dark/20 pb-2 group hover:border-brand-gold transition-all">
                LEARN MORE
                <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image Composition */}
          <div className="lg:w-[55%] flex items-start gap-6 md:gap-10">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Organic Interior Design"
                className="w-full h-full object-cover transition-all duration-1000 scale-110 hover:scale-100"
              />
            </motion.div>

            {/* Smaller Image */}
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-1/3 relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Interior Detail"
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      title: "CONCEPTION",
      desc: "Interior design and furniture crafting",
      icon: <Paintbrush className="w-8 h-8 text-brand-gold" strokeWidth={1} />,
    },
    {
      title: "RESEARCH",
      desc: "Curating materials, furniture and accessories",
      icon: <Coffee className="w-8 h-8 text-brand-gold" strokeWidth={1} />,
    },
    {
      title: "VISUALIZATION",
      desc: "Developing realistic 3D models",
      icon: <Monitor className="w-8 h-8 text-brand-gold" strokeWidth={1} />,
    },
    {
      title: "PLANNING",
      desc: "Technical plans and construction details",
      icon: <Home className="w-8 h-8 text-brand-gold" strokeWidth={1} />,
    },
    {
      title: "CONSTRUCTION",
      desc: "Managing specialized and general labor",
      icon: <HardHat className="w-8 h-8 text-brand-gold" strokeWidth={1} />,
    },
    {
      title: "COORDINATION",
      desc: "Directing work and monitoring sites",
      icon: <CheckCircle className="w-8 h-8 text-brand-gold" strokeWidth={1} />,
    },
  ];

  return (
    <section className="bg-brand-dark relative overflow-hidden py-32 md:py-48">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Left Column: Content */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 mb-12 block"
            >
              OUR METHODS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white select-none mb-20 leading-[0.85]"
            >
              <div
                className="text-4xl md:text-6xl uppercase tracking-[0.05em] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                <span
                  className="font-normal"
                  style={{ fontFamily: 'var(--font-great-vibes), cursive', textTransform: 'none' }}
                >
                  O
                </span>
                ur Design
              </div>
              <div
                className="text-4xl md:text-6xl uppercase tracking-[0.05em] -mt-2 md:-mt-4"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Protocol
              </div>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full group-hover:border-brand-gold group-hover:bg-brand-gold/5 transition-all duration-500">
                      {step.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold tracking-widest text-[11px] uppercase group-hover:text-brand-gold transition-colors">{step.title}</h4>
                      <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[180px] group-hover:text-neutral-300 transition-colors">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 w-full sticky top-32"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                alt="Architecture Studio"
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

              {/* Floating Stat/Detail */}
              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm">
                <p className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">ESTABLISHED 2018</p>
                <p className="text-white/80 text-xs leading-relaxed font-light italic">
                  "Architecture should speak of its time and place, but yearn for timelessness."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ solution, index }: { solution: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 1.5, delay: 0.1 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer relative bg-white min-h-[550px] overflow-hidden rounded-sm shadow-sm hover:shadow-2xl transition-all duration-700"
    >
      {/* Image Container - Animates based on isHovered state */}
      <motion.div
        layout
        className="absolute z-10 overflow-hidden rounded-sm"
        animate={{
          top: isHovered ? '32px' : '0px',
          right: isHovered ? '32px' : '0px',
          width: isHovered ? '50%' : '100%',
          height: isHovered ? '35%' : '100%',
          bottom: isHovered ? 'auto' : '0px',
          left: isHovered ? '0px' : '0px',
          x: isHovered ? '50%' : '0%', // Move to right side
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <img
          src={solution.img}
          alt={solution.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      </motion.div>

      {/* Editorial Text - Fades in behind the image area */}
      <div className="relative z-0 p-8 h-full flex flex-col justify-between h-[550px]">
        <div className={`flex justify-between items-start transition-opacity duration-700 delay-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs font-bold text-neutral-400 tracking-[0.3em] font-sans">
            {solution.id}
          </span>
        </div>

        <div className={`mt-auto space-y-6 transition-opacity duration-700 delay-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h4
            className="text-2xl md:text-3xl text-brand-dark leading-tight"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            {solution.title}
          </h4>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-[90%]">
            {solution.desc}
          </p>
          <div className="flex justify-between items-center pt-8 border-t border-neutral-100">
            <span className="text-neutral-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              {solution.price}
            </span>
            <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-brand-dark text-white' : ''}`}>
              <ArrowRight size={14} className={`transform transition-transform ${isHovered ? 'rotate-0' : '-rotate-45'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Background Color Reveal */}
      <div className={`absolute inset-0 bg-white transition-opacity duration-700 z-[-1] ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      id: "01",
      title: "INTERIOR DESIGN",
      desc: "Full design package with plans, moodboards, and drawings – crafted for your lifestyle and spatial identity.",
      price: "from 120 $/m²",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "INTERIOR FIT-OUT",
      desc: "Execution of turnkey projects with precision and speed, transforming shells into sophisticated spaces.",
      price: "from 450 $/m²",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "ELECTRO-MECHANICAL",
      desc: "Integrating invisible systems that power your space efficiently, from lighting to climate control.",
      price: "custom quote",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "JOINERY WORKS",
      desc: "Bespoke furniture and woodwork crafted by artisans to fit your unique spatial requirements.",
      price: "from 200 $/m²",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "LIGHTING",
      desc: "Atmospheric and functional lighting design that defines the mood and highlights architectural details.",
      price: "from 80 $/m²",
      img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block"
          >
            <h2 className="relative text-brand-dark select-none leading-[0.85]">
              {/* Top Line: TAILORED (Gold) */}
              <div
                className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-gold flex justify-center items-center"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {"TAILORED".split("").map((char, i) => (
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

              {/* Bottom Line: S (Cursive) + OLUTIONS (Black) */}
              <div
                className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-normal"
                  style={{ fontFamily: 'var(--font-great-vibes), cursive', textTransform: 'none' }}
                >
                  S
                </motion.span>
                {"olutions".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.8 + (i * 0.05), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {solutions.map((solution, index) => (
            <ServiceCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }: { project: any, index: number }) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // Balanced glide from off-screen into position
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 600 : -600, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ x: xTranslate, opacity }}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-7/12 relative group overflow-hidden rounded-sm shadow-2xl">
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:opacity-0 transition-opacity duration-700 z-10" />
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={project.img}
          alt={project.title}
          className="w-full aspect-[16/10] object-cover"
        />
        {/* Floating Label */}
        <div className="absolute top-8 left-8 z-20">
          <span className="bg-white/90 backdrop-blur-md px-6 py-2 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full">
            {project.title.split("'")[0]}
          </span>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-5/12 flex flex-col items-start">
        <span className="text-[100px] md:text-[160px] font-bold text-neutral-100/50 leading-none select-none">
          {project.id}
        </span>
        <div className="relative -mt-12 md:-mt-24">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark mb-6 uppercase" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            {project.title}
          </h3>
          <p className="text-neutral-500 text-base md:text-lg leading-relaxed font-light max-w-md">
            {project.desc}
          </p>
          <div className="pt-8">
            <a href="#" className="inline-flex items-center gap-6 text-xs font-bold tracking-[0.3em] uppercase text-brand-gold group border-b border-brand-gold/20 pb-2 hover:border-brand-gold transition-all">
              VIEW CASE STUDY
              <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      id: "01",
      title: "ZINA'S LOUNGE",
      desc: "A boutique hospitality space designed with ontological precision, featuring bespoke lighting and material palettes that define a new standard in luxury.",
      img: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "QUANTUM OFFICES",
      desc: "Transforming corporate environments into cognitive spaces that foster innovation and architectural synergy.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "03",
      title: "THE ATRIUM CAFE",
      desc: "A fusion of traditional aesthetics and modern functionality, creating a harmonious environment for social interaction.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section id="projects" className="py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-48 relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block select-none leading-[0.85]"
          >
            {/* Top Line: S (Cursive) + ELECTED (Gold) */}
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
                S
              </motion.span>
              {"elected".split("").map((char, i) => (
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
              className="text-4xl md:text-8xl uppercase tracking-tight -mt-1 md:-mt-2 flex justify-center items-center text-black"
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
        </div>

        <div className="space-y-64">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
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
    { name: "KFC", img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=2067&auto=format&fit=crop" },
    { name: "DOMINOS PIZZA", img: "https://images.unsplash.com/photo-1620174645265-05820da4ff20?q=80&w=2062&auto=format&fit=crop" },
    { name: "COSTA COFFEE", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" },
    { name: "PAPA JOHNS", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2070&auto=format&fit=crop" },
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const hasVisited = sessionStorage.getItem('metro-visited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('metro-visited', 'true');
  };

  return (
    <div className="font-sans">
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero isLoaded={!isLoading} />

        {/* Content Wrapper for Sticky Reveal */}
        <div className="relative z-10 bg-white">
          <AboutSection />
          <ProcessSection />
          <SolutionsSection />
          <PortfolioSection />
          <Testimonials />
          <ClientsSection />
          <LatestProjectsSection />
          <Footer />
        </div>

      </motion.div>
    </div>
  );
}
