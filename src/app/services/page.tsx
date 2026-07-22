import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FullServicesSection from "@/components/home/FullServicesSection";

const services = [
  {
    id: "fitout",
    title: "Fitout",
    description: "Fitout delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
    tags: ["Fitout Execution", "All Sectors"],
    href: "/services/fitout",
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description: "Carpentry delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=600",
    tags: ["Bespoke Carpentry", "Home"],
    href: "/services/carpentry",
  },
  {
    id: "decorative-paint",
    title: "Decorative Paints",
    description: "Decorative Paints delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600",
    tags: ["Decorative Finishes", "All Sectors"],
    href: "/services/decorative-paint",
  },

  {
    id: "terrazzo",
    title: "Terrazzo Floors",
    description: "Terrazzo Floors delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600",
    tags: ["Terrazzo Craft", "All Sectors"],
    href: "/services/terrazzo",
  },

  {
    id: "automation",
    title: "Automation",
    description: "Automation delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600",
    tags: ["Smart Automation", "Home"],
    href: "/services/automation",
  },
  {
    id: "stretch-ceiling",
    title: "Stretch Ceiling",
    description: "Stretch Ceiling delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    tags: ["Ceiling Systems", "Commercial"],
    href: "/services/stretch-ceiling",
  },

  {
    id: "property-inspection",
    title: "Property Inspection",
    description: "Property Inspection delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600",
    tags: ["Property Inspection", "All Sectors"],
    href: "/services/property-inspection",
  },
  {
    id: "mep-hvac",
    title: "MEP & HVAC",
    description: "MEP & HVAC delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
    tags: ["MEP Systems", "Commercial"],
    href: "/services/mep-hvac",
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Project Management delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    tags: ["Project Management", "All Sectors"],
    href: "/services/project-management",
  },
  {
    id: "venetian-plasters",
    title: "Venetian Plasters",
    description: "Venetian Plasters delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600",
    tags: ["Venetian Plaster", "Home"],
    href: "/services/venetian-plasters",
  },
  {
    id: "feature-walls",
    title: "Feature Walls",
    description: "Feature Walls delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600",
    tags: ["Feature Walls", "Retail"],
    href: "/services/feature-walls",
  },
  {
    id: "artistic-finishes",
    title: "Artistic Finishes",
    description: "Artistic Finishes delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=600",
    tags: ["Artistic Finishes", "Home"],
    href: "/services/artistic-finishes",
  },
  {
    id: "customised-furniture",
    title: "Custom Furniture",
    description: "Custom Furniture delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
    tags: ["Custom Furniture", "Home"],
    href: "/services/customised-furniture",
  },
  {
    id: "air-quality",
    title: "Air Quality",
    description: "Air Quality delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    tags: ["Air Quality Systems", "Offices"],
    href: "/services/air-quality",
  },
  {
    id: "contracting",
    title: "Contracting",
    description: "Contracting delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
    tags: ["General Contracting", "All Sectors"],
    href: "/services/contracting",
  },
  {
    id: "window-glazing",
    title: "Window Glazing",
    description: "Window Glazing delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    tags: ["Window Glazing", "Commercial"],
    href: "/services/window-glazing",
  },
  {
    id: "tile-installation",
    title: "Tile Installation",
    description: "Tile Installation delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&q=80&w=600",
    tags: ["Tile Installation", "All Sectors"],
    href: "/services/tile-installation",
  },
  {
    id: "marble-installation",
    title: "Marble Installation",
    description: "Marble Installation delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=600",
    tags: ["Marble Works", "All Sectors"],
    href: "/services/marble-installation",
  },
  {
    id: "gypsum-works",
    title: "Gypsum Works",
    description: "Gypsum Works delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    tags: ["Gypsum Works", "All Sectors"],
    href: "/services/gypsum-works",
  },
  {
    id: "property-audits",
    title: "Property Audits",
    description: "Property Audits delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    tags: ["Property Audits", "All Sectors"],
    href: "/services/property-audits",
  },
  {
    id: "authority-approvals",
    title: "Authority Approvals",
    description: "Authority Approvals delivered with precise execution and authority-ready planning.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    tags: ["Authority Approvals", "Commercial"],
    href: "/services/authority-approvals",
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-white text-center">
            <h1 className="mobile-heading-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight uppercase text-center" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Complete Fitout{" "}<span className="text-brand-gold italic font-normal normal-case whitespace-nowrap" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>& Interior Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mx-auto text-center">
              Book a free consultation and let our experts assess your project requirements. We'll provide a comprehensive proposal with transparent timelines and pricing for your transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-8 xl:px-16 max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-24 items-center">

            {/* Image Section (Left) */}
            <div className="lg:col-span-6 xl:col-span-7 order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/services_intro.png"
                  alt="Fitout Services Dubai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Section (Right) */}
            <div className="lg:col-span-6 xl:col-span-5 order-1 lg:order-2 lg:pr-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-brand-dark uppercase tracking-tight mb-3 text-center lg:text-left" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Complete Turnkey Fitout
              </h2>
              <div className="text-neutral-400 italic text-xl sm:text-2xl mb-8 font-light text-center lg:text-left" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>
                & Interior Transformation
              </div>

              <div className="w-12 h-[2px] bg-brand-gold mb-8"></div>

              <p className="text-neutral-500 leading-[1.8] text-base md:text-lg font-light mb-8 max-w-lg text-center lg:text-left">
                Metro Retail Solutions offers a comprehensive suite of services designed to cover every stage of property improvement — from initial inspection to the final coat of paint. Browse our full range of services for residential, commercial, and F&B spaces.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* Services Grid Section */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Services We <span className="text-brand-gold italic text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-[400px]">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative overflow-hidden block rounded-none h-full min-h-[400px]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for readability on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Hover Content */}
                <div className="absolute inset-x-0 top-0 bottom-[72px] p-5 md:p-6 flex flex-col justify-end translate-y-0 opacity-100 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                  <p className="text-neutral-200 text-[13px] md:text-sm font-light mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 border border-white/20 bg-black/50 text-white text-[9px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Title / Button */}
                <div className="absolute bottom-4 left-4 right-4 h-12 bg-[#222222] text-white px-4 flex items-center justify-between transition-all duration-300 z-20 group-hover:bg-[#111111]">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate mr-2">{service.title}</span>
                  <ChevronRight size={14} className="text-white opacity-80 shrink-0 group-hover:translate-x-1 group-hover:text-brand-gold transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Complete Range of Services */}
      <FullServicesSection forceCarousel={true} />
    </div>
  );
}
