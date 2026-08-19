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


export default function DesignStylesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center bg-brand-dark">
        <Image
          src="/hero/luxury_fashion_boutique_1785750858524.png"
          alt="Interior Design Styles"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="hero-overlay" />


        <div className="relative w-full px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block text-center"
            >
              Styles
            </span>
            <h1
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-4 uppercase tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Discover Your Perfect{" "}
              <span
                className="text-brand-gold italic font-normal normal-case block md:inline mt-1 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Design Style
              </span>
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-base md:text-lg font-light max-w-2xl leading-relaxed mx-auto text-center mb-8"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Book a free design consultation and let our experts help you choose the perfect style for your space. We create tailored proposals reflecting your brand vision.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-20 md:pt-24 pb-4 md:pb-8 bg-white overflow-hidden border-b border-neutral-100">
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-8 xl:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-12 md:gap-24 items-center">

            {/* Image Section (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7">
              <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/phase_02_prefabrication.png"
                  alt="Execution to perfection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-8">
              <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-brand-dark uppercase tracking-tight mb-3 text-center lg:text-left" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Every Style
              </h2>
              <div className="text-neutral-400 italic text-xl sm:text-2xl mb-8 font-light text-center lg:text-left" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>
                Executed to Perfection
              </div>

              <div className="w-12 h-[2px] bg-brand-gold mb-8"></div>

              {/* Image Section (Mobile Only) */}
              <div className="block lg:hidden w-full mb-8">
                <div className="relative h-[300px] sm:h-[400px] w-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  <Image
                    src="/images/phase_02_prefabrication.png"
                    alt="Execution to perfection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-neutral-500 leading-[1.8] text-base md:text-lg font-light mb-8 max-w-lg text-center lg:text-left">
                From warm Mediterranean venues to ultra-luxury modern retail spaces, Metro Retail Solutions is trusted to bring every design style to life with accuracy and finesse. Explore our portfolio of executed styles and discover the perfect aesthetic for your next project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Grid */}
      <section className="pt-8 md:pt-12 pb-24 bg-white">
        <div className="w-full px-6">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="mobile-heading-balance text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Interior Design Styles <span className="text-brand-gold italic text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>We Execute</span>
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
                  <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-bold text-white mb-2 leading-snug group-hover:text-brand-gold transition-colors" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                    {style.name}
                  </h3>
                  <p className="hidden md:block text-neutral-300 text-sm md:text-base lg:text-xs xl:text-sm leading-relaxed mb-4 font-medium opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 h-0 md:group-hover:h-auto overflow-hidden">
                    {style.description}
                  </p>

                  <div className="hidden md:flex gap-2">
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
    </div>
  );
}
