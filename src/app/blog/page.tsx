import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Blog | Metro Retail Solutions",
  description: "Expert advice, design trends, and project insights from Metro Retail Solutions.",
};

const blogPosts = [
  {
    id: 1,
    title: "Exploring Elegance: The Top 5 Most Popular Retail Design Styles",
    excerpt: "From contemporary chic to industrial luxe, the five interior design styles defining retail spaces — and how to use each one in your next fitout.",
    category: "Retail Design",
    date: "May 5, 2026",
    readTime: "4 min read",
    image: "/images/phase_01_site_audit.png",
    slug: "top-5-most-popular-retail-design-styles",
  },
  {
    id: 2,
    title: "TRANSFORMING SPACES: The Metro Approach",
    excerpt: "With a team of skilled designers, architects, and craftsmen, we are here to transform your commercial space into a masterpiece that drives footfall.",
    category: "Turnkey Fit Out",
    date: "March 4, 2026",
    readTime: "3 min read",
    image: "/images/phase_02_prefabrication.png",
    slug: "transforming-spaces-metro-approach",
  },
  {
    id: 3,
    title: "Why it's essential to manage your manufacturing process locally",
    excerpt: "A look into how having local manufacturing and joinery facilities ensures quality control and faster delivery times for retail rollouts.",
    category: "Manufacturing",
    date: "December 20, 2025",
    readTime: "4 min read",
    image: "/images/phase_03_installation.png",
    slug: "local-manufacturing-process",
  },
  {
    id: 4,
    title: "How Much Does It Cost to Fit Out a Retail Store?",
    excerpt: "Cost of fitting out a commercial space per square foot. For a simple and budget-friendly renovation that includes flooring, ceiling, and bespoke joinery.",
    category: "Turnkey Fit Out",
    date: "December 12, 2025",
    readTime: "3 min read",
    image: "/images/phase_04_handover.png",
    slug: "cost-to-fit-out-retail-store",
  },
  {
    id: 5,
    title: "A Comprehensive Guide to Finding the Best Fitout Companies",
    excerpt: "Best-in-Class Fit-Out Services. Metro Retail Solutions is a high-quality, reliable, and leading fit-out company in the region.",
    category: "Retail Design",
    date: "December 8, 2025",
    readTime: "5 min read",
    image: "/images/phase_01_site_audit.png",
    slug: "best-fitout-companies-guide",
  },
  {
    id: 6,
    title: "Unlocking the Potential: Why Renovate Your Commercial Space",
    excerpt: "In general, renovations increase brand value and boost potential sales. A look into why top brands continually update their physical stores.",
    category: "Turnkey Fit Out",
    date: "December 7, 2025",
    readTime: "4 min read",
    image: "/images/phase_02_prefabrication.png",
    slug: "why-renovate-commercial-space",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center bg-brand-dark">
        <Image
          src="/wide_mall_hero.png"
          alt="Metro Retail Solutions Blog"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/70" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block text-center"
            >
              Metro Blog
            </span>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 uppercase tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Insights &{" "}
              <span
                className="text-brand-gold italic font-normal normal-case block md:inline mt-1 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Inspiration
              </span>
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-base md:text-lg font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Expert advice, design trends, and project insights from Metro Retail Solutions' leading fitout and joinery specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-12 md:py-24 bg-white text-brand-dark">
        <div className="container mx-auto px-6">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-brand-dark uppercase tracking-tight mb-8" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Latest <span className="text-brand-gold italic text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Articles</span>
            </h2>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-6 md:mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="w-full pl-12 pr-4 py-4 rounded-sm border border-neutral-200 focus:outline-none focus:border-[#E8A020] focus:ring-1 focus:ring-brand-gold transition-all bg-neutral-50 text-lg"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['All', 'Retail Design', 'Turnkey Fit Out', 'Manufacturing', 'Store Inspection'].map((filter, i) => (
                <button 
                  key={filter}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    i === 0 ? 'bg-brand-gold text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-gray-200 hover:text-brand-dark'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-sm overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand-gold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </Link>
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center text-sm text-neutral-500 mb-4 font-medium">
                    <span>{post.date}</span>
                    <span className="mx-2 text-neutral-300">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors leading-snug" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-brand-gold font-bold text-sm uppercase tracking-wider group/link mt-auto">
                    Read More 
                    <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-8 border-t border-neutral-100">
            <button className="p-2 rounded-sm text-neutral-400 hover:bg-neutral-100 hover:text-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-sm bg-brand-gold text-white font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-sm hover:bg-neutral-100 text-neutral-600 font-medium flex items-center justify-center transition-colors">2</button>
              <button className="w-10 h-10 rounded-sm hover:bg-neutral-100 text-neutral-600 font-medium flex items-center justify-center transition-colors">3</button>
            </div>
            <button className="p-2 rounded-sm text-neutral-600 hover:bg-neutral-100 hover:text-brand-dark transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-neutral-50 border-t border-neutral-100 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mobile-heading-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-brand-dark uppercase tracking-tight mb-6" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Ready to Transform <span className="text-brand-gold italic text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal ml-2" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Your Space?</span>
            </h2>
            <p className="text-neutral-500 leading-[1.8] text-base md:text-lg font-light mb-6 md:mb-10 max-w-lg mx-auto">
              Book a free site visit and let our experts assess your space. We'll provide a detailed consultation and transparent quote for your property transformation project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/918800607967" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-sm transition-colors shadow-sm">
                WhatsApp Now
              </a>
              <Link href="/contact" className="px-8 py-4 bg-white hover:bg-neutral-50 text-brand-dark border border-neutral-200 font-semibold rounded-sm transition-colors shadow-sm">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
