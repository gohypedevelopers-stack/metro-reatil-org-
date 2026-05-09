"use client";

import { motion, AnimatePresence } from 'motion/react';
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
import { useState, useEffect } from 'react';

// --- Components ---

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
        {/* Logo Section */}
        <a href="#" className="flex flex-col items-center group">
          <div className="flex flex-col items-center">
            <span className={`block text-xl md:text-2xl font-bold tracking-[0.4em] uppercase leading-tight transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>MATTER MIND</span>
            <span className={`block text-[6px] md:text-[8px] uppercase tracking-[0.3em] opacity-40 mt-1 transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>PERFECTION IS A STATE OF MIND</span>
          </div>
        </a>

        {/* Contact Info Desktop */}
        <div className={`hidden lg:flex items-center gap-8 xl:gap-12 ml-auto mr-12 text-[10px] xl:text-xs transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'border-brand-dark/10' : 'border-white/20'}`}>
              <Mail size={18} />
            </div>
            <div>
              <p className="opacity-60 uppercase font-bold text-[8px] mb-0.5 tracking-wider">EMAIL US ON</p>
              <p className="font-semibold tracking-tight hover:text-brand-gold transition-colors">sales@mattermind.ae</p>
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

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image - High quality interior fit-out */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center md:items-end justify-center md:justify-end h-full pb-24 text-center md:text-right">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-5xl"
        >
          <p className="font-signature text-brand-gold text-4xl md:text-7xl mb-0 translate-y-4 md:translate-y-8 select-none">
            Perfection is a
          </p>
          <h1 className="text-white text-5xl md:text-[140px] font-sans font-thin leading-none mb-4 tracking-tight uppercase">
            STATE OF MIND
          </h1>
          <p className="text-white text-xs md:text-sm max-w-2xl ml-auto font-medium leading-relaxed opacity-90 drop-shadow-md">
            Our expert team brings your vision to life, transforming interiors into environments that inspire and impress.
          </p>
        </motion.div>

        {/* Bottom Link */}
        <div className="absolute bottom-12 left-6 md:left-12">
          <a href="#about" className="flex items-center gap-3 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] group border-l-2 border-brand-gold pl-4 hover:border-white transition-all">
            Find out more about us <ChevronRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#FBF9F7] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="relative mb-12">
              <span className="font-signature text-brand-gold text-5xl md:text-7xl block mb-2 opacity-80">
                Transforming
              </span>
              <h2 className="text-4xl md:text-7xl font-sans font-medium tracking-[-0.05em] uppercase text-black leading-none">
                IDEAS INTO REALITY
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-brand-dark/80 text-sm leading-relaxed mb-12">
              <div className="space-y-4">
                <p>
                  Our company was founded with the core need of helping people fulfill a choice of having their dream commercial structures. We have started our new adventure as an interior designing firm where we explore the various aspects and infinite possibilities of interiors, architecture, and design.
                </p>
                <p>
                  A building is only as good as its interiors and we ardently believe that we can design the interiors of your work space. Whether it is an office, restaurant, or studio, we will make sure it looks exactly like how you pictured it.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  We are a recognized firm that solely focuses on designing unique, aesthetically pleasing, and most of all functional interiors that are incorporated by the authenticity of the traditional and the modern. We have everything you need and more for your workspace, including end-to-end interiors complete with decor, furniture, renovations, and modular solutions.
                </p>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-4 text-brand-gold font-medium border-b border-brand-gold pb-1 group">
                    Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="pt-12 border-t border-brand-dark/5">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-10">STATISTICS</span>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <h4 className="text-5xl md:text-7xl font-sans font-thin tracking-tighter text-black">02+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Years of Experience</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-5xl md:text-7xl font-sans font-thin tracking-tighter text-black">50+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Happy Clients</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-5xl md:text-7xl font-sans font-thin tracking-tighter text-black">50+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images Column */}
          <div className="lg:w-5/12 flex gap-4 h-[600px] md:h-[800px]">
            <div className="flex-1 rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-sm overflow-hidden pt-12">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                alt="Modern Cafe" 
                className="w-full h-full object-cover"
              />
            </div>
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
      icon: <Paintbrush className="w-10 h-10 text-white/90" strokeWidth={1} />,
    },
    {
      title: "RESEARCH",
      desc: "Curating materials, furniture and accessories",
      icon: <Coffee className="w-10 h-10 text-white/90" strokeWidth={1} />,
    },
    {
      title: "VISUALIZATION",
      desc: "Developing realistic 3D models",
      icon: <Monitor className="w-10 h-10 text-white/90" strokeWidth={1} />,
    },
    {
      title: "PLANNING",
      desc: "Technical plans and construction details",
      icon: <Home className="w-10 h-10 text-white/90" strokeWidth={1} />,
    },
    {
      title: "CONSTRUCTION",
      desc: "Managing specialized and general labor",
      icon: <HardHat className="w-10 h-10 text-white/90" strokeWidth={1} />,
    },
    {
      title: "COORDINATION",
      desc: "Directing work and monitoring construction sites",
      icon: <CheckCircle className="w-10 h-10 text-white/90" strokeWidth={1} />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background with skew */}
      <div className="absolute inset-0 bg-[#A1824A] transform -skew-y-2 origin-top-left -z-10 translate-y-12" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Grid */}
        <div className="lg:w-1/2 grid md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="shrink-0 p-3 bg-white/5 rounded-lg">
                {step.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-bold tracking-widest text-sm uppercase">{step.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative group"
        >
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
              alt="Office Process" 
              className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FBF9F7] transform -skew-y-2 origin-bottom-right translate-y-12" />
    </section>
  );
};

const SolutionsSection = () => {
  const solutions = [
    { title: "INTERIOR DESIGN", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" },
    { title: "INTERIOR FIT-OUT", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { title: "ELECTRO-MECHANICAL", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop" },
    { title: "JOINERY WORKS", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" },
    { title: "LIGHTING", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop" },
    { title: "FLOORING", img: "https://images.unsplash.com/photo-1581850518616-bcb8175c543a?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <section id="services" className="py-24 bg-[#FBF9F7] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 relative">
          <span className="font-signature text-brand-gold text-5xl md:text-8xl block mb-0 leading-none select-none">
            tailored
          </span>
          <h2 className="text-4xl md:text-8xl font-sans font-light tracking-[0.2em] uppercase text-brand-gold italic -mt-4">
            SOLUTIONS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-[3/5] overflow-hidden rounded-sm"
            >
              <img 
                src={solution.img} 
                alt={solution.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">{solution.title}</span>
              </div>
              {/* Permanent label like in the screenshot */}
              <div className="absolute inset-x-0 bottom-0 bg-black/40 p-4 text-center group-hover:opacity-0 transition-opacity">
                 <span className="text-white text-[10px] font-bold tracking-widest uppercase">{solution.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      id: "01",
      title: "ZINA'S LOUNGE",
      desc: "A boutique hospitality space designed with ontological precision, featuring bespoke lighting and material palettes that define a new standard in luxury.",
      img: "https://images.unsplash.com/photo-1550966842-28c46522fc07?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "QUANTUM OFFICES",
      desc: "Transforming corporate environments into cognitive spaces that foster innovation and architectural synergy.",
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "03",
      title: "THE ATRIUM CAFE",
      desc: "A fusion of traditional aesthetics and modern functionality, creating a harmonious environment for social interaction.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="font-signature text-brand-gold text-5xl md:text-7xl block mb-2 opacity-80">
            Selected
          </span>
          <h2 className="text-4xl md:text-7xl font-sans font-medium tracking-tight uppercase text-black leading-none">
            PROJECTS
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-7/12 relative group overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full aspect-[16/10] object-cover rounded-sm transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-8xl md:text-[140px] font-sans font-thin text-black/5 leading-none mb-4 block select-none">
                  {project.id}
                </span>
                <div className="relative -mt-12 md:-mt-20">
                  <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-black mb-6 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                    {project.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-4 text-brand-gold font-bold text-xs uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-black hover:border-black transition-all group">
                    View Case Study <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
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
      text: "Collaborating with Matter Mind has been truly seamless. Their expertise, attention to detail, and deep understanding of our vision have consistently stood out. Their professionalism and ease of working together make every project a delightful experience. We highly recommend Matter Mind for any endeavor.",
      name: "Naseem Abdul Khader",
      role: "Al Rumooz Central Kitchen Equipment Installation LLC",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    },
    {
      text: "Matter Mind truly exceeded our expectations with their impeccable execution of the full fit out project of our new restaurant at Khalidiyah Mall. Their professionalism, creative approach, and timely completion showcased their commitment. The team's attention to detail and dedication to bringing our vision to life were remarkable.",
      name: "Haris Kunnumpurath",
      role: "Tandooriya Dhaba",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
      logo: ""
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="font-signature text-black text-6xl md:text-9xl block mb-0 leading-none">
            What
          </span>
          <h2 className="text-4xl md:text-8xl font-sans font-light tracking-[0.1em] uppercase text-brand-gold -mt-4 md:-mt-8">
            CUSTOMERS SAYS
          </h2>
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
    { name: "Wendy's", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendys_full_logo_2012.svg/640px-Wendys_full_logo_2012.svg.png" },
    { name: "Popeyes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Popeyes_logo.svg/1280px-Popeyes_logo.svg.png" },
    { name: "Americana", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Americana_Group_logo.png" },
    { name: "Subway", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/1280px-Subway_2016_logo.svg.png" },
    { name: "Domino's", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png" },
    { name: "Wingstop", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Wingstop_logo.svg/1200px-Wingstop_logo.svg.png" },
    { name: "Baskin Robbins", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Baskin-Robbins_logo_2022.svg/1200px-Baskin-Robbins_logo_2022.svg.png" },
    { name: "Dunkin'", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dunkin%27_Donuts_logo.svg/1024px-Dunkin%27_Donuts_logo.svg.png" },
    { name: "Subway", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Century_logo.svg/1200px-Century_logo.svg.png" },
    { name: "Al Rumooz", logo: "https://mattermind.ae/wp-content/uploads/2023/06/al-rumooz.png" },
    { name: "Seashell", logo: "https://mattermind.ae/wp-content/uploads/2023/06/seashell-logo.png" },
    { name: "Coop", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Abu_Dhabi_Co-operative_Society_Logo.png" },
    { name: "Huna", logo: "https://mattermind.ae/wp-content/uploads/2023/06/huna-logo-01.png" },
    { name: "Galfar", logo: "https://mattermind.ae/wp-content/uploads/2023/06/galfar-logo.png" },
    { name: "Gerard", logo: "https://mattermind.ae/wp-content/uploads/2023/06/gerard-logo.png" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-gold/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-end mb-20">
          <div className="text-right">
            <span className="font-signature text-black text-6xl md:text-9xl block mb-0 leading-none">
              Our
            </span>
            <h2 className="text-4xl md:text-8xl font-sans font-light tracking-[0.2em] uppercase text-brand-gold -mt-4 md:-mt-8">
              CLIENTS
            </h2>
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
                className="max-w-full max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-signature text-black text-6xl md:text-9xl block mb-0 leading-none">
              Latest
            </span>
            <h2 className="text-4xl md:text-8xl font-sans font-light tracking-[0.2em] uppercase text-brand-gold -mt-4 md:-mt-8">
              PROJECTS
            </h2>
          </div>
          <a href="#" className="flex items-center gap-4 text-brand-gold font-medium border-b border-brand-gold pb-1 group hover:text-black hover:border-black transition-all">
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
            <a href="#" className="flex items-baseline gap-2 mb-10 group">
              <span className="text-3xl font-bold tracking-tighter">MATTER</span>
              <span className="text-3xl font-light text-neutral-400 tracking-widest italic">MIND</span>
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
          <p>© 2026 Mattermind. All protocols reserved.</p>
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
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProcessSection />
      <SolutionsSection />
      <PortfolioSection />
      <Testimonials />
      <ClientsSection />
      <LatestProjectsSection />
      <Footer />
      
      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer relative group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 border-2 border-white rounded-full text-[10px] flex items-center justify-center font-bold">1</span>
        </button>
      </div>
    </div>
  );
}
