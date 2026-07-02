import Image from "next/image";
import Link from "next/link";
import { TrendingUp, BookOpen, Users, Building, ShieldCheck, Cpu, Search } from "lucide-react";

export const metadata = {
  title: "Careers | Metro Retail Solutions",
  description: "Join the Metro Retail Solutions team. Explore career opportunities in interior design, project management, operations, and more.",
};

const benefits = [
  {
    title: "Career Growth",
    description: "Clear pathways for advancement and professional development opportunities within a growing company.",
    icon: TrendingUp,
  },
  {
    title: "Training & Development",
    description: "Access to training programs and skill development to help you excel in your role.",
    icon: BookOpen,
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside industry experts in a supportive, team-oriented environment.",
    icon: Users,
  },
  {
    title: "Prestigious Projects",
    description: "Work on high-profile residential, commercial, and retail projects across premier locations.",
    icon: Building,
  },
  {
    title: "Competitive Benefits",
    description: "Attractive salary packages with comprehensive benefits including health insurance and annual leave.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Facility",
    description: "Work with the latest equipment and technologies in our state-of-the-art manufacturing facility.",
    icon: Cpu,
  },
];

const roles = [
  {
    category: "Design",
    location: "Studio",
    title: "Interior Design",
    description: "Concept design, space planning, material palettes, FF&E coordination and presentation work for retail and commercial interiors.",
  },
  {
    category: "Projects",
    location: "Sites",
    title: "Project Management",
    description: "End-to-end delivery roles covering fitout planning, client coordination, approvals, scheduling, budgeting and site progress control.",
  },
  {
    category: "Operations",
    location: "Sites",
    title: "Site Operations",
    description: "Site supervision, quality checks, subcontractor coordination, health and safety, handover support and daily execution.",
  },
  {
    category: "Joinery",
    location: "Factory",
    title: "Joinery & Manufacturing",
    description: "Factory and installation roles for bespoke joinery, cabinetry, CNC production, finishing, and technical shop drawings.",
  },
  {
    category: "Engineering",
    location: "Office & Sites",
    title: "MEP & Engineering",
    description: "Mechanical, electrical and plumbing coordination, technical review, authority compliance and engineering support.",
  },
  {
    category: "Procurement",
    location: "Office",
    title: "Procurement & Estimation",
    description: "Supplier coordination, quotation analysis, cost planning, BOQ preparation, purchasing and material availability.",
  },
  {
    category: "Sales",
    location: "Office",
    title: "Sales & Client Relations",
    description: "Client enquiry handling, consultation follow-up, proposal coordination and relationship management.",
  },
  {
    category: "Admin",
    location: "Office",
    title: "Administration & Finance",
    description: "Administrative, HR, accounts, documentation and office coordination roles that support the wider teams.",
  },
];

const processSteps = [
  { step: "01", title: "Watch for Openings", desc: "Published roles will appear on this page with the department, location and application details." },
  { step: "02", title: "Send Your Profile", desc: "Candidates can submit a CV and portfolio to careers@metroretailsolutions.com for current or future consideration." },
  { step: "03", title: "Team Review", desc: "Relevant applications are reviewed by HR and the department lead for experience, fit and availability." },
  { step: "04", title: "Interview & Offer", desc: "Shortlisted candidates meet the team before final selection, offer and onboarding." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/high_res_mall_hero.png"
          alt="Metro Retail Solutions Team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            Join the <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Metro Team</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-sans leading-relaxed">
            Future openings at Metro Retail Solutions will be posted soon. Explore the teams behind our premium fitout, joinery and interior design work.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl text-white uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Build Your Career <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>With Us</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-neutral-400 text-lg">
                At Metro Retail Solutions, our team brings together designers, project managers, engineers, craftsmen and operations specialists working across high-end spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-sm flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-cinzel), serif' }}>{benefit.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-neutral-50 text-brand-dark" id="open-positions">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Careers Will Be <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Posted Soon</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-neutral-600 text-lg">
                We are preparing the next set of vacancies for Metro Retail Solutions. Use the search and filters below to explore the career areas most relevant to our design, fitout, joinery and project delivery teams.
              </p>
            </div>
          </div>

          {/* Banner */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-semibold rounded-sm mb-4">
                No live vacancies yet
              </span>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>Current openings will be announced soon.</h3>
              <p className="text-neutral-600">Until then, you can review the types of roles we usually hire for and send your CV for future consideration.</p>
            </div>
            <a href="mailto:careers@metroretailsolutions.com?subject=Future career opportunities at Metro Retail Solutions" className="shrink-0 px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors">
              Send Your CV
            </a>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input 
                type="search" 
                placeholder="Search career areas..." 
                className="w-full pl-12 pr-4 py-3 rounded-sm border border-neutral-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-white"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Design', 'Projects', 'Operations', 'Joinery', 'Engineering', 'Procurement', 'Sales', 'Admin'].map((filter, i) => (
                <button 
                  key={filter}
                  className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors ${
                    i === 0 ? 'bg-brand-gold text-white' : 'bg-white border border-neutral-200 text-neutral-600 hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-sm border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:border-brand-gold/30 group">
                <div className="flex justify-between items-start mb-6 text-sm font-medium">
                  <span className="text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-sm">{role.category}</span>
                  <span className="text-neutral-400">{role.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif tracking-wide uppercase group-hover:text-brand-gold transition-colors">{role.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {role.description}
                </p>
                <div className="text-sm font-semibold text-neutral-400 pt-4 border-t border-neutral-100">
                  Roles coming soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Our Hiring <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Process</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-neutral-600 text-lg">
                While current roles are being prepared, here is the process candidates can expect once openings are published.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl md:text-7xl font-bold text-neutral-100 mb-6 font-serif tracking-wide uppercase">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif tracking-wide uppercase text-brand-dark">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Application */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
                <Image
                  src="/images/phase_03_installation.png"
                  alt="Metro Retail Solutions Team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl text-white uppercase font-light tracking-tight leading-[1] mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Send a Speculative <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Application</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                If your experience fits Metro Retail Solutions, send your CV and portfolio for future roles in design, project delivery, joinery, engineering, operations or support teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-12">
                <div>
                  <h3 className="text-brand-gold font-semibold mb-2">Email Us</h3>
                  <a href="mailto:careers@metroretailsolutions.com" className="text-xl font-serif tracking-wide uppercase hover:text-brand-gold transition-colors">careers@metroretailsolutions.com</a>
                </div>
                <div>
                  <h3 className="text-brand-gold font-semibold mb-2">Call Us</h3>
                  <a href="tel:+97100000000" className="text-xl font-serif tracking-wide uppercase hover:text-brand-gold transition-colors">+971 (0) 4 123 4567</a>
                </div>
              </div>

              <a href="mailto:careers@metroretailsolutions.com?subject=Future career opportunities at Metro Retail Solutions" className="inline-block px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors">
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gold text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-wide uppercase mb-6">
            Ready to Discuss a Project?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            For project enquiries, book a site visit with our fitout and joinery specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/97100000000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-brand-gold hover:bg-neutral-50 font-semibold rounded-sm transition-colors">
              WhatsApp Now
            </a>
            <Link href="/contact" className="px-8 py-4 bg-black/20 hover:bg-black/30 text-white font-semibold rounded-sm transition-colors border border-white/20">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
