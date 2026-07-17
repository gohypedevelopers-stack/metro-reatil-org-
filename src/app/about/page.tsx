"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Target, CheckCircle2, ChevronRight } from 'lucide-react';
import AboutSummary from '../../components/home/AboutSummary';

const STATS = [
  { label: "Years Excellence", value: "15+" },
  { label: "Projects Completed", value: "250+" },
  { label: "Expert Craftsmen", value: "120+" },
  { label: "Client Satisfaction", value: "99%" }
];

const VALUES = [
  {
    title: "Precision Engineering",
    desc: "We approach every project with mathematical accuracy and technical excellence.",
    icon: Target
  },
  {
    title: "Artisanal Craft",
    desc: "Blending traditional craftsmanship with modern manufacturing techniques.",
    icon: Award
  },
  {
    title: "Client-Centric",
    desc: "Your vision is our blueprint. We build spaces that reflect your unique identity.",
    icon: Users
  }
];

const TEAM = [
  {
    name: "James Sterling",
    role: "Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    desc: "Overseeing the strategic vision and ensuring our legacy of excellence continues."
  },
  {
    name: "Sarah Jenkins",
    role: "Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    desc: "Leading daily operations and ensuring seamless execution across all projects."
  },
  {
    name: "Michael Chen",
    role: "Lead Craftsman",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    desc: "Bringing artisanal precision and engineering excellence to every build."
  }
];

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = React.useRef(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          
          let start = 0;
          const end = numericValue;
          const duration = 3000; // 3 seconds
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing: easeOutCubic (slower and extremely smooth deceleration)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeProgress * (end - start) + start);

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numericValue]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white pt-[54px] md:pt-[62px]">
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[620px] md:h-[70vh] flex items-center overflow-hidden bg-brand-dark">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeOut" },
            scale: { duration: 8, ease: [0.25, 1, 0.5, 1] }
          }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="About Metro Retail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        </motion.div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block text-center"
            >
              Retail Excellence
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mobile-heading-balance text-[22px] md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight uppercase tracking-tighter xs:tracking-tight md:tracking-normal text-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              THE END-TO-END{" "}<span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Retail Partner</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-neutral-300 text-base font-light leading-relaxed max-w-xl mx-auto text-center"
            >
              Specializing in the execution of high-end retail environments. We deliver complete turnkey solutions so your brand is ready to operate from day one.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Sharpened */}
      <section className="py-20 md:py-32 lg:py-48 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">
            <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="mobile-heading-balance text-center lg:text-left text-[22px] md:text-6xl font-serif text-brand-dark mb-8 md:mb-12 uppercase tracking-tighter xs:tracking-tight md:tracking-normal" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                BUILDING SPACES <span className="text-brand-gold italic text-[22px] md:text-5xl lg:text-6xl font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>That Define Brands</span>
              </h2>
              <div className="space-y-6 md:space-y-8 mb-0 lg:mb-16 text-center lg:text-left">
                <p className="text-neutral-500 text-base leading-relaxed font-light">
                  Metro Retail Solutions specializes in creating world-class environments for global fashion, apparel, and lifestyle brands. From prestigious mall boutiques to specialized airport retail, our expertise covers every facet of the retail landscape.
                </p>
                <p className="text-neutral-500 text-base leading-relaxed font-light">
                  Our USP is total operational readiness. We handle in-house manufacturing, MEP works, and full civil execution. When we hand over the keys, you only need to bring your products.
                </p>
              </div>
              
              <div className="hidden lg:grid grid-cols-1 xs:grid-cols-2 gap-8 md:gap-12">
                {STATS.map((stat, i) => (
                  <div key={i} className="border-l border-neutral-200 pl-8">
                    <div className="text-4xl font-serif text-brand-dark mb-2">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-brand-dark p-12 text-white max-w-xs hidden xl:block shadow-2xl">
                <h3 className="text-xl font-serif mb-4 italic">"Precision is our standard."</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">Every joint, finish, and installation is a testament to our commitment to architectural excellence.</p>
              </div>

              {/* Stats displayed below the image on mobile */}
              <div className="grid grid-cols-4 gap-2 mt-12 lg:hidden text-center">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-2xl font-serif text-brand-dark mb-1">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[8px] font-bold uppercase tracking-wider text-brand-gold leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy and Visionary Section */}
      <AboutSummary />

      {/* Values Section - Sharpened */}
      <section className="py-20 md:py-32 lg:py-48 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-24 lg:mb-32">
            <h2 className="mobile-heading-balance text-[22px] md:text-6xl font-serif text-brand-dark mb-8 uppercase tracking-tighter xs:tracking-tight md:tracking-normal" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              THE PRINCIPLES <span className="text-brand-gold italic ml-2 text-[22px] md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>of Metro Retail</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light">Our culture is built on transparency, technical mastery, and an unwavering focus on our clients' success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white p-8 md:p-12 lg:p-16 hover:bg-neutral-50 transition-colors duration-500 group flex flex-col items-center text-center md:items-start md:text-left">
                <val.icon className="text-brand-gold mb-12 group-hover:translate-y-[-8px] transition-transform duration-500" size={48} strokeWidth={1} />
                <h3 className="text-2xl font-serif text-brand-dark mb-6">{val.title}</h3>
                <p className="text-neutral-500 text-base font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 lg:py-48 bg-white border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-24 lg:mb-32">
            <h2 className="mobile-heading-balance text-[22px] md:text-6xl font-serif text-brand-dark mb-8 uppercase tracking-tighter xs:tracking-tight md:tracking-normal" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR <span className="text-brand-gold italic ml-2 text-[22px] md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Professionals</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light">The dedicated experts who turn ambitious designs into reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {TEAM.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">{member.role}</div>
                  <h3 className="text-2xl font-serif text-brand-dark mb-4">{member.name}</h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sharpened */}
      <section className="py-20 md:py-32 lg:py-48 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-gold blur-[200px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="mobile-heading-balance text-4xl md:text-6xl font-serif text-white mb-8 md:mb-10 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            READY TO COLLABORATE <span className="text-brand-gold italic ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>with Metro Retail?</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-xl font-light max-w-2xl mx-auto mb-10 md:mb-16">
            Let's collaborate to build a space that defines your brand and exceeds your operational expectations.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 md:gap-4 px-8 md:px-10 py-3 md:py-3.5 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all duration-500 group"
          >
            Get in Touch <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
