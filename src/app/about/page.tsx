"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Settings, Hammer, Paintbrush, Layers, CheckCircle2 } from 'lucide-react';
import AboutSummary from '../../components/home/AboutSummary';

const STATS = [
  { label: "Years Experience", value: "25+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Skilled Staff", value: "200+" },
  { label: "Client Satisfaction", value: "100%" }
];

const CAPABILITIES = [
  {
    title: "Metal Work",
    desc: "Complete setup including laser machines and advanced equipment for precise metal fabrication.",
    icon: Settings
  },
  {
    title: "Wooden Work",
    desc: "Complete setup for all bespoke carpentry and wooden modular fixtures.",
    icon: Hammer
  },
  {
    title: "Paint Work",
    desc: "Complete setup for high-quality finishing and painting of retail fixtures.",
    icon: Paintbrush
  },
  {
    title: "Powder Coating",
    desc: "Complete setup for durable and premium powder coating work.",
    icon: Layers
  }
];

const PROFESSIONALS = [
  {
    name: "John Doe",
    post: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Jane Smith",
    post: "Lead Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Michael Chen",
    post: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
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
      {count > 0 ? count : ''}
      {count > 0 ? suffix : value}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white pt-[54px] md:pt-[62px]">
      {/* Hero Section - Cinematic */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center bg-brand-dark">
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
          <div className="hero-overlay" />

        </motion.div>

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-gold hero-eyebrow mb-4 block text-center"
            >
              Metro Retail Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="hero-title-1 font-serif text-white mb-4 uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              TURNKEY FIT-OUT{" "}
              <span className="text-brand-gold hero-title-2 italic font-normal normal-case block md:inline mt-1 md:mt-0" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>
                Excellence
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="hidden md:block text-neutral-300 text-sm md:text-base font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Over 25+ years of experience handling complete MEP, civil, and interior works with in-house manufacturing of modular fixtures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Sharpened */}
      <section className="py-12 md:py-20 lg:py-24 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-center">
            <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="mobile-heading-balance text-center lg:text-left text-[22px] md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-serif text-brand-dark mb-4 md:mb-12 uppercase tracking-tighter xs:tracking-tight md:tracking-normal" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                EXCEPTIONAL <span className="text-brand-gold italic text-[18px] md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Retail Fixtures</span>
              </h2>
              <div className="space-y-6 md:space-y-8 mb-0 lg:mb-8 md:mb-16 text-center lg:text-left">
                <p className="text-neutral-500 text-base leading-relaxed font-light">
                  Metro Retail Solutions is a turnkey fit-out company handling complete MEP, civil, and interior works. We bring over 25+ years of experience and feature in-house manufacturing of complete modular fixtures including wooden, metal, and powder coat units.
                </p>
                <p className="text-neutral-500 text-base leading-relaxed font-light">
                  We have a manufacturing facility based in Delhi and Greater Noida with many skilled technical manpower (Carpenters, Painters, Electrician, Welders, etc.), and many more supporting staffs with full of all latest machineries and skilled/experienced manpower who works in many shift 24x7 days as per client's need and satisfaction.
                </p>
              </div>

              <div className="hidden lg:grid grid-cols-1 xs:grid-cols-2 gap-4 lg:gap-8 xl:gap-12">
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

            <div className="lg:col-span-6 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-brand-dark p-12 text-white max-w-xs hidden lg:block shadow-2xl">
                <h3 className="text-xl font-serif mb-4 italic">"In-house Manufacturing."</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">Handling complete MEP, civil, and interior works with dedicated facilities in Delhi & Greater Noida.</p>
              </div>

              {/* Stats displayed below the image on mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 lg:hidden text-center">
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

      {/* Capabilities Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="section-title 2xl:text-6xl text-brand-dark" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              EVERYTHING <span className="text-brand-gold italic ml-2 text-[18px] md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Under One Roof</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-lg font-light">Complete setups equipped with the latest machinery and skilled craftsmen for every requirement.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 md:p-12 hover:bg-neutral-50 transition-colors duration-500 group flex flex-col items-start text-left h-full">
                <div className="flex flex-row items-center gap-2 md:gap-4 mb-1 md:mb-2">
                  <cap.icon className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform duration-500 w-6 h-6 md:w-10 md:h-10" strokeWidth={1} />
                  <h3 className="text-[11px] xs:text-xs sm:text-sm md:text-2xl font-serif text-brand-dark">{cap.title}</h3>
                </div>
                <p className="text-neutral-500 text-[8px] xs:text-[9px] sm:text-xs md:text-base font-light leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="section-title 2xl:text-6xl text-brand-dark" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              OUR <span className="text-brand-gold italic ml-2 text-[18px] md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Professionals</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-lg font-light">Meet the experts behind our exceptional solutions.</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 lg:gap-12">
            {PROFESSIONALS.map((pro, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-full aspect-[3/4] overflow-hidden mb-2 md:mb-6 bg-neutral-100">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[10px] xs:text-xs sm:text-sm md:text-2xl font-serif text-brand-dark mb-1 md:mb-2" style={{ fontFamily: 'var(--font-cinzel), serif' }}>{pro.name}</h3>
                <p className="text-brand-gold text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base font-bold uppercase tracking-wider md:tracking-widest">{pro.post}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

