import Image from "next/image";
import Link from "next/link";
import CareerForm from "@/components/careers/CareerForm";
import CareersGrid from "@/components/careers/CareersGrid";
import BenefitsSection from "@/components/careers/BenefitsSection";

export const metadata = {
  title: "Careers | Metro Retail Solutions",
  description: "Join the Metro Retail Solutions team. Explore career opportunities in interior design, project management, operations, and more.",
};

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
    category: "Carpentry",
    location: "Factory",
    title: "Carpentry & Manufacturing",
    description: "Factory and installation roles for bespoke carpentry, cabinetry, CNC production, finishing, and technical shop drawings.",
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 uppercase font-light tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            Join the <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Metro Team</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-sans leading-relaxed">
            Future openings at Metro Retail Solutions will be posted soon. Explore the teams behind our premium fitout, joinery and interior design work.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <BenefitsSection />

      {/* Open Roles */}
      <section className="py-24 bg-neutral-50 text-brand-dark" id="open-positions">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-12 md:items-end mb-16">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Careers Will Be <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Posted Soon</span>
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-neutral-600 text-lg text-center md:text-left">
                We are preparing the next set of vacancies for Metro Retail Solutions. Use the search and filters below to explore the career areas most relevant to our design, fitout, carpentry and project delivery teams.
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
            <a href="#apply" className="shrink-0 px-8 py-3 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors">
              Apply Now
            </a>
          </div>

          <CareersGrid initialRoles={roles} />
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-12 md:items-end mb-16">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Our Hiring <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Process</span>
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-neutral-600 text-lg text-center md:text-left">
                While current roles are being prepared, here is the process candidates can expect once openings are published.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center md:items-start">
                <div className="text-5xl md:text-7xl font-bold text-neutral-100 mb-6 font-serif tracking-wide uppercase">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif tracking-wide uppercase text-brand-dark">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-center md:text-left">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Application */}
      <section className="py-24 bg-brand-dark text-white" id="apply">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white uppercase font-light tracking-tight leading-[1] mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Join the <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Metro Legacy</span>
              </h2>
              <p className="text-neutral-400 text-base mb-8 leading-relaxed">
                If your experience aligns with Metro Retail Solutions, submit your profile here. We hire exceptional designers, detail-oriented project managers, expert carpenters, and technical engineers.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-brand-gold shrink-0 mt-0.5 font-sans font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Private CNC & Manufacturing Workshop</h4>
                    <p className="text-neutral-400 text-xs mt-1">State-of-the-art machinery and in-house wood fabrication.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-brand-gold shrink-0 mt-0.5 font-sans font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Turnkey Authority-Ready Operations</h4>
                    <p className="text-neutral-400 text-xs mt-1">Full compliance, structural, civil & MEP team under one roof.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-8">
                <div>
                  <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1.5">Direct Careers Email</h3>
                  <a href="mailto:careers@metroretailsolutions.com" className="text-sm font-serif tracking-wide uppercase hover:text-brand-gold transition-colors">careers@metroretailsolutions.com</a>
                </div>
                <div>
                  <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1.5">Careers Hotline</h3>
                  <a href="tel:8800607967" className="text-sm font-serif tracking-wide uppercase hover:text-brand-gold transition-colors whitespace-nowrap">+91 8800607967</a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gold text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-serif tracking-wide uppercase mb-6">
            Ready to Discuss a Project?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            For project enquiries, book a site visit with our fitout and joinery specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/8800607967" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-brand-gold hover:bg-neutral-50 font-semibold rounded-sm transition-colors">
              WhatsApp Now
            </a>
            <Link href="/contact" className="px-8 py-3 bg-black/20 hover:bg-black/30 text-white font-semibold rounded-sm transition-colors border border-white/20">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
