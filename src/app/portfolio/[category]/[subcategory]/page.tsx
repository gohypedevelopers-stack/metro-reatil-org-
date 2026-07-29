"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, ArrowLeft, Image as ImageIcon, Calendar } from 'lucide-react';
import FullServicesSection from '../../../../components/home/FullServicesSection';

const SUBCATEGORY_DETAILS: Record<string, {
  title: string;
  intro: string;
  description: string;
  gallery: string[];
}> = {
  "living-dining": {
    title: "Living & Dining Transformations",
    intro: "Bespoke Social Spaces Tailored to High-End Entertaining & Comfort",
    description: "We craft custom timber paneling, structural wood grids, built-in entertainment nodes, and luxury dining spaces. Combining warm ambient light with rich walnut and oak finishes, our spatial setups redefine modern residential luxury.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  "kitchens": {
    title: "Luxury Kitchen Makeovers",
    intro: "Highly Functional Modular Masterpieces with Premium Timber and Stones",
    description: "Our bespoke kitchen systems are engineered in our high-end carpentry facilities. Built using custom internal steel frame drawers, premium soft-close mechanisms, large marble slabs, and custom cabinet fronts that blend style with capacity.",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800"
    ]
  },
  "wardrobes": {
    title: "Bespoke Wardrobes & Closets",
    intro: "Individually Crafted Walk-In Closets and Smart High-Capacity Dressing Units",
    description: "We assemble dressing chambers using custom glass-front wardrobes, integrated soft LED shelves, private vanity bureaus, and luxury drawers. Every timber grain is chosen to align perfectly with the home architectural theme.",
    gallery: [
      "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    ]
  },
  "bathrooms": {
    title: "Premium Bathroom Vanities",
    intro: "Elegant Bathroom Fit-outs with Custom Marble and Oak Accents",
    description: "Delivering customized floating wooden vanity consoles, floor-to-ceiling mirror panels, integrated storage niches, and premium plumbing works. Turn your bathrooms into premium personal spa havens.",
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800"
    ]
  },
  "storage": {
    title: "Smart Storage & Shelving",
    intro: "Intelligent Spatial Solutions & Hidden Storage Cabinets",
    description: "Designed to maximize every single square centimeter without cluttering. We build sliding wall panels, custom floating shelving grids, and hidden utility drawers that align flush with features.",
    gallery: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800"
    ]
  }
};

export default function SubcategoryDetailPage() {
  const params = useParams();
  const category = params?.category as string;
  const subcategory = params?.subcategory as string;

  const defaultData = {
    title: `${subcategory.replace('-', ' ').toUpperCase()} Projects`,
    intro: "A Showcase of High-End Turnkey Fit-out Executions",
    description: "Explore our masterfully crafted solutions designed to deliver premium aesthetics and rigorous functional performance across retail, commercial, and residential sectors.",
    gallery: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800"
    ]
  };

  const data = SUBCATEGORY_DETAILS[subcategory] || defaultData;

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', msg: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', msg: '' });
    }, 1200);
  };

  return (
    <div className="bg-white pt-20">

      {/* Back Button Grid */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href={`/portfolio/${category}`}
            className="inline-flex items-center gap-3 text-neutral-400 hover:text-brand-dark text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft size={14} /> Back to {category} overview
          </a>
          <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold">
            Metro / {category} / {subcategory}
          </span>
        </div>
      </section>

      {/* Main Content & Intro */}
      <section className="py-12 md:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

            {/* Left Column: Rich Description */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block">
                Inspire & Transform
              </span>
              <h1
                className="text-4xl md:text-4xl lg:text-6xl font-serif text-brand-dark leading-tight uppercase"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {data.title}
              </h1>
              <p
                className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed"
                style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
              >
                {data.intro}
              </p>
              <div className="w-16 h-[2px] bg-brand-gold my-6" />
              <p className="text-neutral-500 text-base font-light leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Right Column: Custom Inquiry/Consultation Form */}
            <div className="lg:col-span-5 bg-neutral-50 p-8 md:p-10 border border-neutral-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />

              <div className="flex items-center gap-4 mb-8">
                <Calendar className="text-brand-gold" size={24} strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-serif text-brand-dark uppercase tracking-tight">Book Spatial Consultation</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">Get custom execution quotes</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="YOUR NAME *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-neutral-200 focus:border-brand-gold px-4 py-3.5 text-[10px] font-bold tracking-[0.15em] outline-none placeholder:text-neutral-300 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="EMAIL ADDRESS *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-neutral-200 focus:border-brand-gold px-4 py-3.5 text-[10px] font-bold tracking-[0.15em] outline-none placeholder:text-neutral-300 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="CONTACT NUMBER"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-neutral-200 focus:border-brand-gold px-4 py-3.5 text-[10px] font-bold tracking-[0.15em] outline-none placeholder:text-neutral-300 transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="TELL US ABOUT YOUR SPACE..."
                        value={formData.msg}
                        onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                        className="w-full bg-white border border-neutral-200 focus:border-brand-gold px-4 py-3.5 text-[10px] font-bold tracking-[0.15em] outline-none placeholder:text-neutral-300 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Send Inquiry <Send size={12} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="text-brand-gold mx-auto mb-6" size={56} strokeWidth={1} />
                    <h4 className="text-lg font-serif text-brand-dark uppercase tracking-tight mb-3">Consultation Registered</h4>
                    <p className="text-neutral-400 text-xs font-light max-w-xs mx-auto leading-relaxed">
                      Thank you. Our technical spatial designer will reach out to you within 24 hours to schedule the session.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-8 text-[9px] font-bold uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors underline underline-offset-4"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Multi-image Project Gallery */}
      <section className="py-12 md:py-28 bg-neutral-50/50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8 md:mb-16">
            <ImageIcon className="text-brand-gold font-light" size={28} strokeWidth={1.5} />
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Delivered Projects & Inspirations
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.gallery.map((img, i) => (
              <div key={i} className="relative group aspect-square overflow-hidden bg-neutral-200">
                <img
                  src={img}
                  alt={`Gallery project ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/10 opacity-100 group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looping Section back to core Services */}
      <div className="relative border-t border-neutral-100 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 pt-16 text-center">
          <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Continue Exploring</span>
          <p className="text-neutral-400 text-sm font-serif italic mb-2">Loop back into our complete services range below</p>
        </div>
        <FullServicesSection />
      </div>

    </div>
  );
}
