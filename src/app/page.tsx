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
import AboutSummary from '../components/home/AboutSummary';
import Footer from '../components/home/Footer';

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="font-sans">
      <Hero isLoaded={true} />
      <ClientsSection />

      {/* Content Wrapper for Sticky Reveal */}
      <div className="relative z-10 bg-white">
        <AboutSection />

        <ServicesSlider />
        <FeaturedFitouts />

        <VideoSeparator
          src="https://assets.mixkit.co/videos/preview/mixkit-mechanical-arm-working-in-a-factory-40337-large.mp4"
          title="Engineered to Perfection"
        />

        <ManufacturingSection />
        <ExpertiseSection />
        <FullServicesSection />
        <Testimonials />

        <VideoSeparator
          src="https://assets.mixkit.co/videos/preview/mixkit-workers-in-a-factory-producing-parts-40338-large.mp4"
          title="Excellence in Every Detail"
        />

        <WhatsAppCTA />
        <AboutSummary />
        <Footer />
      </div>
    </div>
  );
}
