"use client";

import { motion } from 'motion/react';
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: "Client 01", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-01.png" },
    { name: "Client 02", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-02.png" },
    { name: "Americana", logo: "https://mattermind.ae/wp-content/themes/meiveda/images/americana-logo-1.png" },
    { name: "Client 03", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-03.png" },
    { name: "Client 04", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-04.png" },
    { name: "Client 05", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-05.png" },
    { name: "Client 07", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-07.png" },
    { name: "Client 19", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-19.png" },
    { name: "Client 21", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-21.png" },
    { name: "CA Logo", logo: "https://mattermind.ae/wp-content/uploads/2024/12/ca-logo.png" },
    { name: "Client 17", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-17.png" },
    { name: "Client 18", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-18.png" },
    { name: "Client 08", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-08.png" },
    { name: "Client 13", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-13.png" },
    { name: "Client 14", logo: "https://mattermind.ae/wp-content/themes/meiveda/mattermind/images/client-logo-14.png" },

  ];

  return (
    <section className="pt-16 pb-0 bg-white relative overflow-hidden border-t border-brand-gold/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex justify-center mb-32 relative">
          <div className="text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block select-none leading-[0.85]"
            >
              {/* Top Line: OUR CLIENTS (Black) */}
              <div
                className="text-4xl md:text-6xl uppercase tracking-[0.1em] text-brand-dark flex justify-center items-center font-light mb-4"
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

              {/* Bottom Line: Strategic Partnerships (Gold, Italic) */}
              <div
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-brand-gold italic flex justify-center items-center whitespace-nowrap"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                {"Strategic Partnerships".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.8, delay: 0.8 + (i * 0.04), ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block whitespace-pre font-normal"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden border-y border-brand-dark/5 py-12 bg-white flex">
        <div className="flex w-max animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-12 md:px-20 group h-24"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-auto h-16 object-contain transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f9f9f8&color=c29d59&size=128`;
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
