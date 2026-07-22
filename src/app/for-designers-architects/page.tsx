import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Factory, Building, FileCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "For Designers & Architects | Metro Retail Solutions",
  description: "Partner with Metro Retail Solutions for flawless execution of your design projects. Expert joinery, MEP coordination, technical drawings support, and turnkey fitout services.",
};

const services = [
  {
    title: "Complete Design Execution",
    description: "Turnkey execution of your design vision with structural modifications, wall partitions, and space reconfiguration to exact specifications.",
    image: "/images/phase_01_site_audit.png"
  },
  {
    title: "Flooring Solutions",
    description: "Tile, marble, wood, microcement, and terrazzo flooring installation with precision and quality.",
    image: "/images/phase_02_prefabrication.png"
  },
  {
    title: "Ceiling Works & Lighting",
    description: "Ceiling works with integrated lighting solutions to enhance ambiance and functionality.",
    image: "/images/phase_03_installation.png"
  },
  {
    title: "MEP & HVAC Coordination",
    description: "Full MEP and HVAC coordination including plumbing, electrical rewiring, and DB upgrades.",
    image: "/images/phase_04_handover.png"
  },
  {
    title: "Joinery Installation",
    description: "Seamless installation of custom joinery including kitchens, wardrobes, and furniture.",
    image: "/images/phase_02_prefabrication.png"
  },
  {
    title: "Decorative Finishes",
    description: "Textured walls, decorative paints, and final finishing touches for a premium look.",
    image: "/images/phase_03_installation.png"
  },
  {
    title: "Technical Drawings & Approvals",
    description: "Authority-approved technical drawings, shop drawings, and full authority approval coordination for your projects.",
    image: "/images/phase_01_site_audit.png"
  },
  {
    title: "Project Management",
    description: "End-to-end project management with detailed scheduling, transparent reporting, and seamless coordination.",
    image: "/images/phase_04_handover.png"
  }
];

export default function DesignersArchitectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center bg-brand-dark">
        <Image
          src="/redtape_hero.png"
          alt="Metro Retail Solutions Partnership"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/70" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block text-center"
            >
              Partnership
            </span>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 uppercase tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Ready to Partner With{" "}
              <span
                className="text-brand-gold italic font-normal normal-case block md:inline mt-1 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Metro?
              </span>
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-base md:text-lg font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Book a partnership consultation and let's discuss collaboration opportunities. We'll provide detailed information about our services for designers and architects.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white text-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-dark uppercase font-light tracking-tight leading-[1] mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            Flawless Execution <span className="text-brand-gold italic font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>for Interior Designers & Architects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Metro Retail Solutions is the trusted execution partner for interior designers and architects. With approved engineers, in-house manufacturing, MEP coordination, and technical expertise, we bring your design vision to life with precision and quality. From concept to completion, we handle the complex technical execution while you focus on design.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Services for <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Designers & Architects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <a 
                key={index}
                href={`https://wa.me/8800607967?text=I am interested in ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-80 rounded-2xl overflow-hidden block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-[#E8A020] transition-colors">
                    {service.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-[#E8A020] text-sm font-bold uppercase tracking-wider">
                      Request Quote <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Certifications Section */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white uppercase font-light tracking-tight leading-[1] mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Portfolio & <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Certifications</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We bring proven expertise and certified credentials to every project. Our portfolio showcases successful collaborations with designers and architects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold font-serif mb-8 border-b border-white/10 pb-4">Certifications & Approvals</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[#E8A020]/20 rounded-full flex items-center justify-center text-[#E8A020]">
                    <FileCheck size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Authority Approved Engineers</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Approved structural and civil engineers for all technical works, mall management coordination, and authority submissions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[#E8A020]/20 rounded-full flex items-center justify-center text-[#E8A020]">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">MEP Certified</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Certified electrical and MEP professionals for all related works and safety approvals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[#E8A020]/20 rounded-full flex items-center justify-center text-[#E8A020]">
                    <Building size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Full Contracting License</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Full contracting capabilities for retail, commercial, and large-scale manufacturing projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Highlights */}
            <div>
              <h3 className="text-2xl font-bold font-serif mb-8 border-b border-white/10 pb-4">Portfolio Highlights</h3>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#E8A020]/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">500+ Projects Delivered</h4>
                    <span className="bg-[#E8A020] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Completed</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Commercial offices, retail spaces, high-end boutiques, and F&B outlets across the region.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#E8A020]/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">Designer Collaborations</h4>
                    <span className="bg-[#E8A020] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Ongoing</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Trusted execution partner for leading interior designers and architects, delivering their vision with precision.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#E8A020]/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">In-House Manufacturing</h4>
                    <span className="bg-[#E8A020] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Facility</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Large-scale facility producing custom retail displays, joinery, and fixtures with zero outsourcing of critical works.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/portfolio" className="inline-block px-8 py-4 border border-white hover:border-[#E8A020] hover:text-[#E8A020] text-white font-semibold rounded-lg transition-colors">
                    View Our Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E8A020] text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-dark uppercase font-light tracking-tight leading-[1] mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Let's Build Something <span className="text-brand-dark italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Extraordinary</span>
            </h2>
            <p className="text-white/90 text-lg mb-10 leading-relaxed">
              Book a free site visit and let our experts assess your space. We'll provide a detailed consultation and transparent quote for your property transformation project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/8800607967" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#E8A020] hover:bg-gray-50 font-semibold rounded-lg transition-colors shadow-sm">
                WhatsApp Now
              </a>
              <Link href="/contact" className="px-8 py-4 bg-black/20 hover:bg-black/30 text-white border border-white/20 font-semibold rounded-lg transition-colors shadow-sm">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
