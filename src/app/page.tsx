"use client";

import React, { useState, useEffect } from 'react';

// --- Home Components ---
import Hero from '../components/home/Hero';
import ClientsSection from '../components/home/ClientsSection';
import AboutSection from '../components/home/AboutSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import ServicesSlider from '../components/home/ServicesSlider';
import FeaturedFitouts from '../components/home/FeaturedFitouts';
import VideoSeparator from '../components/home/VideoSeparator';
import ManufacturingSection from '../components/home/ManufacturingSection';
import FullServicesSection from '../components/home/FullServicesSection';
import Testimonials from '../components/home/Testimonials';
import WhatsAppCTA from '../components/home/WhatsAppCTA';
import ExecutionProcess from '../components/home/ExecutionProcess';
// import Footer from '../components/home/Footer'; // Removed as it is now in RootLayout

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="font-sans">
      <Hero isLoaded={true} />
      <AboutSection />
      {/* Content Wrapper for Sticky Reveal */}
      <div className="relative z-10 bg-white">
        <ExecutionProcess />





        <ExpertiseSection />

        <ServicesSlider />
        <FeaturedFitouts />

        <VideoSeparator
          src="/only_shows_mrs_as_per_the_logo.mp4"
          title="Engineered to Perfection"
        />

        <ManufacturingSection />
        <ClientsSection />

        <FullServicesSection />
        <Testimonials />

        <VideoSeparator
          src="/no_do_not_use_this_white_logo.mp4"
          title="Excellence in Every Detail"
        />

        <WhatsAppCTA />
      </div>
    </div>
  );
}
