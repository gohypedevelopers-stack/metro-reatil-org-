"use client";

import { motion } from 'motion/react';
import React from 'react';

const ClientsSection = () => {
  const baseClients = [
    { name: "Wendy's", logo: "/logos/Wendys-logo.png" },
    { name: "Biba", logo: "/logos/biba logo.png" },
    { name: "Raymond", logo: "/logos/raymond .png" },
    { name: "Red Tape", logo: "/logos/red-tape-logo-png_seeklogo-304782.png" },
    { name: "Client 1", logo: "/logos/images (1).jpg" },
    { name: "Client 2", logo: "/logos/images (1).png" },
    { name: "Client 3", logo: "/logos/images (2).jpg" },
    { name: "Client 4", logo: "/logos/images.jpg" },
    { name: "Client 5", logo: "/logos/images.png" },
  ];

  // Repeat the array a few times so the first half is guaranteed to be wider than the screen
  const repeatedClients = [...baseClients, ...baseClients, ...baseClients];
  // Duplicate for the marquee effect (first half translates to -50% to show the second half)
  const displayClients = [...repeatedClients, ...repeatedClients];

  return (
    <section className="pt-16 pb-0 bg-white relative overflow-hidden border-t border-brand-gold/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-center mb-8 relative">
          <div className="text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block select-none leading-[0.95] md:leading-[0.85] mobile-heading-balance"
            >
              {/* Top Line: OUR CLIENTS (Black) */}
              <div
                className="text-2xl sm:text-3xl md:text-6xl uppercase tracking-[0.06em] md:tracking-[0.1em] text-brand-dark flex justify-center items-center font-light mb-4 flex-wrap"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {"OUR CLIENTS".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.04), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block whitespace-pre"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden border-y border-brand-dark/5 py-12 md:py-12 bg-white flex">
        <div className="flex w-max animate-marquee hover-pause">
          {displayClients.map((client, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-8 md:px-20 group h-20 md:h-24"
            >
              <img
                src={encodeURI(client.logo)}
                alt={client.name}
                className="w-auto h-12 md:h-16 object-contain transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.style.display = 'none';
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default ClientsSection;
