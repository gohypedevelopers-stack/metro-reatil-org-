"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const CONTACT_INFO = [
  {
    title: "Headquarters",
    details: ["Industrial Area 2,", "Sharjah, UAE"],
    icon: MapPin,
    link: null,
  },
  {
    title: "Call Us",
    details: ["+971 XX XXX XXXX"],
    icon: Phone,
    link: "tel:+971XXXXXXXXX",
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
    <div className="bg-white pt-20">

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-brand-dark border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-6 block">
              Get In Touch
            </span>
            <h1
              className="mobile-heading-balance text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight uppercase"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              {"LET'S DISCUSS YOUR "}
              <br className="hidden md:block" />
              <span
                className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-normal"
                style={{ fontFamily: "var(--font-playfair), serif", textTransform: "none" }}
              >
                Next Project
              </span>
            </h1>
            <p className="text-neutral-400 text-base font-light leading-relaxed max-w-xl">
              Whether you have a specific project in mind or just want to learn more about our services, we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-brand-dark p-8 md:p-12">
                <h2
                  className="text-2xl md:text-3xl font-serif text-white mb-10 md:mb-16 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Send Us a Message
                </h2>
                <ContactForm dark />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-8">

              {/* Info Cards */}
              <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-100">
                <h2
                  className="text-xl font-serif text-brand-dark mb-10 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Contact Information
                </h2>
                <div className="space-y-10">
                  {CONTACT_INFO.map((info, i) => {
                    const Inner = (
                      <div className="flex gap-5 md:gap-8 group">
                        <div className="w-11 h-11 bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-brand-gold group-hover:bg-brand-gold/5 transition-all duration-300">
                          <info.icon size={18} className="text-brand-gold" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((line, j) => (
                            <p key={j} className="text-neutral-500 font-light text-sm leading-relaxed">{line}</p>
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
              <div className="p-8 md:p-12 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3
                  className="text-xl font-serif mb-4 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Follow Our Work
                </h3>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed font-light">
                  Stay updated with our latest project deliveries, design innovations, and behind-the-scenes craftsmanship.
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, href: "#", label: "Instagram" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick note */}
              <div className="border-l-2 border-brand-gold pl-6 py-1">
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  For urgent timelines or immediate discussions, please call us directly. Our project consultants are available during business hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[360px] md:h-[500px] w-full bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-1000 border-t border-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0143899753!2d55.263884843359375!3d25.320448000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sIndustrial%20Area%202%2C%20Sharjah%2C%20UAE!5e0!3m2!1sen!2sae!4v1715690000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Metro Retail Solutions Office Location"
        />
      </section>

    </div>
  );
}
