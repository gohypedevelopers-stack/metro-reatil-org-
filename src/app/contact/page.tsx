"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook, ChevronRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const CONTACT_INFO = [
  {
    title: "Headquarters",
    details: ["F-1, SITE-5 KASNA, E 147,", "Surajpur Site V, Greater Noida (U.P.)"],
    icon: MapPin,
    link: "https://www.google.com/maps/search/?api=1&query=F-1,+SITE-5+KASNA,+Greater+Noida,+Uttar+Pradesh+201312",
  },
  {
    title: "Call Us",
    details: ["+91 8800607967"],
    icon: Phone,
    link: "tel:+918800607967",
  },
  {
    title: "Email Us",
    details: ["info@metroretail.ae"],
    icon: Mail,
    link: "mailto:info@metroretail.ae",
  },
  {
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    icon: Clock,
    link: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-brand-dark pt-20">

      {/* Page Header */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center justify-center bg-brand-dark">
        <div className="hero-overlay" />


        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold hero-eyebrow mb-4 block text-center"
            >
              Get In Touch
            </span>
            <h1
              className="hero-title-1 font-serif text-white mb-4 uppercase tracking-tight text-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              LET'S DISCUSS YOUR{" "}
              <span
                className="text-brand-gold italic font-normal normal-case block md:inline mt-1 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Next Project
              </span>
            </h1>
            <p
              className="text-neutral-300 text-lg font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Contact Metro Retail for office and showroom fitouts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pt-10 pb-20 md:py-20 lg:py-16 xl:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-24">

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-brand-dark p-6 md:p-8 xl:p-12">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif text-white mb-6 md:mb-10 xl:mb-16 uppercase tracking-tight text-center md:text-left"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Send Us a Message
                </h2>
                <ContactForm dark />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">

              {/* Info Cards */}
              <div className="bg-neutral-50 px-6 py-8 md:p-8 xl:p-12 border border-neutral-100">
                <h2
                  className="text-xl font-serif text-brand-dark mb-6 md:mb-8 xl:mb-10 uppercase tracking-tight text-center md:text-left"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Contact Information
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 md:gap-x-8 gap-y-6 lg:gap-y-0 lg:space-y-6 xl:space-y-10">
                  {CONTACT_INFO.map((info, i) => {
                    const Inner = (
                      <div className="flex items-start text-left gap-3 md:gap-4 group">
                        <div className="w-8 h-8 md:w-11 md:h-11 bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-brand-gold group-hover:bg-brand-gold/5 transition-all duration-300">
                          <info.icon className="text-brand-gold w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
                        </div>
                        <div>
                          <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-brand-dark mb-1 md:mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((line, j) => (
                            <p key={j} className="text-neutral-500 font-light text-[9px] md:text-[11px] xl:text-sm leading-relaxed">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                    return info.link ? (
                      <a key={i} href={info.link} className="block">{Inner}</a>
                    ) : (
                      <div key={i}>{Inner}</div>
                    );
                  })}
                </div>
              </div>

              {/* Social Connect */}
              <div className="px-6 py-8 md:p-8 xl:p-12 bg-brand-dark text-white relative overflow-hidden text-center md:text-left flex flex-col items-center md:items-start">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3
                  className="text-xl font-serif mb-4 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Follow Our Work
                </h3>
                <p className="text-neutral-400 text-xs xl:text-sm mb-6 xl:mb-8 leading-relaxed font-light">
                  Stay updated with our latest project deliveries, design innovations, and behind-the-scenes craftsmanship.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  {[
                    { Icon: Instagram, href: "#", label: "Instagram" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 xl:w-11 xl:h-11 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick note */}
              <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-brand-gold pt-4 sm:pt-1 pl-0 sm:pl-6 text-center sm:text-left border-l-0 sm:border-l-2">
                <p className="text-[10px] xl:text-xs text-neutral-500 font-light leading-relaxed">
                  For urgent timelines or immediate discussions, please call us directly. Our project consultants are available during business hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section with Floating Address Card */}
      <section className="relative h-[450px] md:h-[550px] w-full border-t border-neutral-200">
        <iframe
          src="https://maps.google.com/maps?q=F-1,%20SITE-5%20KASNA,%20Greater%20Noida,%20Uttar%20Pradesh%20201312&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="transition-all duration-1000"
          referrerPolicy="no-referrer-when-downgrade"
          title="Metro Retail Solutions Office Location"
        />

        {/* Floating Address Card - Top Right, Match Map light/gray theme */}
        <div className="absolute top-2 right-2 left-2 md:left-auto md:top-4 md:right-4 md:bottom-auto bg-white/95 text-brand-dark p-6 md:p-8 max-w-sm border border-neutral-200 shadow-2xl backdrop-blur-md">
          <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] block mb-3">Our Workshop</span>
          <h4 className="text-lg font-serif mb-2 uppercase tracking-wide text-brand-dark">Metro Retail Solutions</h4>
          <p className="text-neutral-600 text-xs font-light leading-relaxed mb-6">
            F-1, SITE-5 KASNA, E 147,<br />
            Surajpur Site V, Greater Noida (U.P.)
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=F-1,+SITE-5+KASNA,+Greater+Noida,+Uttar+Pradesh+201312"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-3 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-500"
          >
            Get Directions <ChevronRight size={14} />
          </a>
        </div>
      </section>

    </div>
  );
}
