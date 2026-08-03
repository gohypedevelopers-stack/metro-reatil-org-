import Image from "next/image";
import Link from "next/link";
import CareerForm from "@/components/careers/CareerForm";
import CareersGrid from "@/components/careers/CareersGrid";
import BenefitsSection from "@/components/careers/BenefitsSection";

export const metadata = {
  title: "Careers | Metro Retail Solutions",
  description: "Join the Metro Retail Solutions team. Explore career opportunities in interior design, project management, operations, and more.",
};

// Dummy roles are replaced by dynamic data from WordPress

const processSteps = [
  { step: "01", title: "Watch for Openings", desc: "Published roles will appear on this page with the department, location and application details." },
  { step: "02", title: "Send Your Profile", desc: "Candidates can submit a CV and portfolio to careers@metroretailsolutions.com for current or future consideration." },
  { step: "03", title: "Team Review", desc: "Relevant applications are reviewed by HR and the department lead for experience, fit and availability." },
  { step: "04", title: "Interview & Offer", desc: "Shortlisted candidates meet the team before final selection, offer and onboarding." },
];

import { fetchAPI } from "@/lib/api";
import { GET_ALL_CAREERS_QUERY, mapWordPressCareerToLocal } from "@/lib/queries";

export default async function CareersPage() {
  const wpData = await fetchAPI(GET_ALL_CAREERS_QUERY);
  const rawCareers = wpData?.careers?.nodes || [];
  const roles = rawCareers.map(mapWordPressCareerToLocal);
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center justify-center bg-brand-dark">
        <Image
          src="/high_res_mall_hero.png"
          alt="Metro Retail Solutions Team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="hero-overlay" />


        <div className="relative w-full px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold hero-eyebrow mb-4 block text-center"
            >
              Careers
            </span>
            <h1
              className="hero-title-1 font-serif text-white mb-4 uppercase tracking-tight text-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Join the{" "}
              <span
                className="text-brand-gold italic font-normal block md:inline mt-2 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Metro Team
              </span>
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-sm md:text-lg font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Future openings at Metro Retail Solutions will be posted soon. Explore the teams behind our premium fitout, joinery and interior design work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <BenefitsSection />

      {/* Open Roles */}
      <section className="py-12 md:py-24 bg-neutral-50 text-brand-dark" id="open-positions">
        <div className="w-full px-6">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="section-title text-brand-dark mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Careers Will Be <span className="text-brand-gold italic font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Posted Soon</span>
            </h2>
            <p className="text-neutral-500 leading-[1.8] text-lg font-light max-w-2xl mx-auto">
              We are preparing the next set of vacancies for Metro Retail Solutions. Use the search and filters below to explore the career areas most relevant to our design, fitout, carpentry and project delivery teams.
            </p>
          </div>

          {/* Banner */}
          {roles.length === 0 ? (
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-8 md:mb-16">
              <div>
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-semibold rounded-sm mb-4">
                  No live vacancies yet
                </span>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>Current openings will be announced soon.</h3>
                <p className="text-neutral-600">Until then, you can review our application process and send your CV for future consideration.</p>
              </div>
              <a href="#apply" className="shrink-0 px-8 py-3 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors">
                Apply Now
              </a>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-8 md:mb-16">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-semibold rounded-sm mb-4">
                  We are hiring!
                </span>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>Join our growing team.</h3>
                <p className="text-neutral-600">Review the open positions below and submit your application through the form.</p>
              </div>
              <a href="#apply" className="shrink-0 px-8 py-3 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors">
                Apply Now
              </a>
            </div>
          )}

          <CareersGrid initialRoles={roles} />
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-12 md:py-24 bg-white text-brand-dark">
        <div className="w-full px-6">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="section-title text-brand-dark mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Our Hiring <span className="text-brand-gold italic font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Process</span>
            </h2>
            <p className="text-neutral-500 leading-[1.8] text-lg font-light max-w-2xl mx-auto">
              While current roles are being prepared, here is the process candidates can expect once openings are published.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center md:items-start">
                <div className="text-6xl font-bold text-neutral-100 mb-6 font-serif tracking-wide uppercase">
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
      <section className="py-12 md:py-24 bg-brand-dark text-white" id="apply">
        <div className="w-full px-6">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-16">
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
              <h2 className="section-title text-white mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Join the <span className="text-brand-gold italic font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Metro Legacy</span>
              </h2>
              <p className="text-neutral-400 text-base mb-8 leading-relaxed">
                If your experience aligns with Metro Retail Solutions, submit your profile here. We hire exceptional designers, detail-oriented project managers, expert carpenters, and technical engineers.
              </p>

              <div className="space-y-6 mb-6 md:mb-10">
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

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 md:gap-8">
                <div>
                  <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1.5">Direct Careers Email</h3>
                  <a href="mailto:careers@metroretailsolutions.com" className="text-sm font-serif tracking-wide uppercase hover:text-brand-gold transition-colors">careers@metroretailsolutions.com</a>
                </div>
                <div>
                  <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1.5">Careers Hotline</h3>
                  <a href="tel:+918800607967" className="text-sm font-serif tracking-wide uppercase hover:text-brand-gold transition-colors whitespace-nowrap">+91 8800607967</a>
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
      <section className="py-12 md:py-24 bg-neutral-50 border-t border-neutral-100 text-center">
        <div className="w-full px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-brand-dark mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Ready to Discuss <span className="text-brand-gold italic font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>a Project?</span>
            </h2>
            <p className="text-neutral-500 leading-[1.8] text-lg font-light mb-6 md:mb-10 max-w-lg mx-auto">
              For project enquiries, book a site visit with our fitout and joinery specialists.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/918800607967" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors shadow-sm text-sm md:text-base">
                WhatsApp Now
              </a>
              <Link href="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-white hover:bg-neutral-50 text-brand-dark border border-neutral-200 font-semibold rounded-sm transition-colors shadow-sm text-sm md:text-base">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
