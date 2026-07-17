import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Interior Design Styles | Metro Retail Solutions",
  description: "Expert execution of all interior design styles. Mediterranean, Japandi, Contemporary, Neoclassical, Modern, Minimalist, and more.",
};

const styles = [
  {
    name: "Contemporary",
    description: "Contemporary interiors with current forms, clean lines, and balanced sophistication.",
    tags: ["Commercial", "Retail"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
  },
  {
    name: "Minimalist",
    description: "Minimalist interiors centered on clarity, restraint, and purposeful spatial flow.",
    tags: ["Offices", "Retail"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
  },
  {
    name: "Neoclassical",
    description: "Neoclassical interiors blending timeless detailing with modern comfort and proportion.",
    tags: ["Boutique", "Showroom"],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80"
  },
  {
    name: "Mediterranean",
    description: "Mediterranean interiors with earthy palettes, natural textures, and relaxed elegance.",
    tags: ["F&B", "Hospitality"],
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80"
  },
  {
    name: "Japandi",
    description: "Japandi interiors balancing calm minimalism, natural materials, and functional warmth.",
    tags: ["Wellness", "Retail"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
  },
  {
    name: "Arabian",
    description: "Arabian interiors with ornate craftsmanship, layered textiles, and warm jewel tones.",
    tags: ["Hospitality", "F&B"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
  },
  {
    name: "Farmhouse",
    description: "Farmhouse interiors with natural woods, soft whites, and honest materials.",
    tags: ["Cafes", "Retail"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
  },
  {
    name: "Industrial",
    description: "Industrial interiors with raw textures, structural expression, and urban character.",
    tags: ["Offices", "F&B"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
  },
  {
    name: "Ultra Luxury",
    description: "Ultra luxury interiors with bespoke detailing, premium materials, and statement execution.",
    tags: ["High-End Retail", "Jewelry"],
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80"
  },
  {
    name: "Boho Chic",
    description: "Boho Chic interiors with layered textures, artistic accents, and eclectic personality.",
    tags: ["Boutique", "Cafes"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80"
  },
  {
    name: "Wellness",
    description: "Wellness interiors built on biophilic principles, natural materials, and soft palettes.",
    tags: ["Clinics", "Salons"],
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80"
  }
];

const testimonials = [
  {
    name: "Timur G",
    review: "We engaged Metro Retail Solutions for a turnkey project in Dubai. They handled the entire process including design, procurement, and execution. The quality of execution was head and shoulders above anything else, with attention to every detail and very thorough quality control. I cannot recommend them highly enough.",
  },
  {
    name: "AJ Boelens",
    review: "I am so thankful to the team from Metro for their help to conduct an inspection and support us in how to handle a project. They are the most honest people you can rely on. I would give them 6 stars if I could!",
  },
  {
    name: "Limelight Interiors",
    review: "We have had the pleasure of working with Metro on three different projects, and the experience has been nothing short of exceptional. Our clients have praised the quality and service provided. Their premium quality joinery speaks for itself.",
  }
];

export default function DesignStylesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        <Image
          src="/wide_mall_hero.png"
          alt="Interior Design Styles"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 uppercase font-light tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            Discover Your Perfect <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Design Style</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            Book a free design consultation and let our experts help you choose the perfect style for your space. We'll create a tailored design proposal that reflects your brand.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-colors shadow-lg">
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-3xl md:text-5xl text-brand-dark uppercase font-light tracking-tight leading-[1] mb-6 text-center lg:text-left" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Every Style <span className="text-brand-gold italic font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Executed to Perfection</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed text-center lg:text-left">
                From warm Mediterranean venues to ultra-luxury modern retail spaces, Metro Retail Solutions is trusted to bring every design style to life with accuracy and finesse. Explore our portfolio of executed styles and discover the perfect aesthetic for your next project.
              </p>
            </div>
            <div className="lg:w-1/2 w-full relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/phase_02_prefabrication.png"
                alt="Execution to perfection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Interior Design Styles <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>We Execute</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((style, index) => (
              <Link 
                href={`/design-styles/${style.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={index} 
                id={style.name.toLowerCase().replace(/\s+/g, '-')} 
                className="group relative h-96 rounded-sm overflow-hidden block bg-brand-dark cursor-pointer"
              >
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                    {style.name}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                    {style.description}
                  </p>
                  
                  <div className="flex gap-2">
                    {style.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-brand-dark uppercase font-light tracking-tight leading-[1]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              What Our <span className="text-brand-gold italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Clients Say</span>
            </h2>
          </div>

          {/* Simple Grid (as a proxy for slider for responsiveness) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100 relative">
                <Quote className="absolute top-6 right-6 text-neutral-100 w-12 h-12 rotate-180" />
                
                {/* Google-style Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{testi.name}</h4>
                    <p className="text-xs text-neutral-500 font-medium">Google Review</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-brand-gold mb-6 gap-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                {/* Review Text */}
                <p className="text-neutral-600 leading-relaxed text-sm mb-4 relative z-10">
                  "{testi.review}"
                </p>
                
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline">See full Google review</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
