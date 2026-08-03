import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { GET_ALL_POSTS_QUERY, mapWordPressPostToLocal } from "@/lib/queries";

export const metadata = {
  title: "Blog | Metro Retail Solutions",
  description: "Expert advice, design trends, and project insights from Metro Retail Solutions.",
};

export default async function BlogPage() {
  const wpData = await fetchAPI(GET_ALL_POSTS_QUERY);
  const displayPosts = wpData?.posts?.nodes?.map(mapWordPressPostToLocal) || [];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[300px] md:min-h-[440px] overflow-hidden flex items-center justify-center bg-brand-dark">
        <Image
          src="/wide_mall_hero.png"
          alt="Metro Retail Solutions Blog"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="hero-overlay" />


        <div className="relative w-full px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="text-brand-gold hero-eyebrow mb-4 block text-center"
            >
              Metro Blog
            </span>
            <h1
              className="hero-title-1 font-serif text-white mb-4 uppercase tracking-tight text-center"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Insights &{" "}
              <span
                className="text-brand-gold hero-title-2 italic font-normal block md:inline mt-2 md:mt-0"
                style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}
              >
                Inspiration
              </span>
            </h1>
            <p
              className="hidden md:block text-neutral-300 text-base md:text-lg font-light max-w-2xl leading-relaxed mx-auto text-center"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Insights on retail and office fitouts from Metro Retail.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-12 md:py-24 bg-white text-brand-dark">
        <div className="w-full px-6">
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
            <div className="flex overflow-x-auto gap-3 pb-4 md:pb-0 justify-start md:justify-center md:flex-wrap snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 md:mx-0">
              {['All', 'Retail Design', 'Turnkey Fit Out', 'Manufacturing', 'Store Inspection'].map((filter, i) => (
                <button
                  key={filter}
                  className={`shrink-0 snap-start px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 ${i === 0 ? 'bg-brand-gold text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-gray-200 hover:text-brand-dark'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {displayPosts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-8 md:mb-16">
              {displayPosts.map((post: any) => (
                <article key={post.id} className="bg-white rounded-sm overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="relative h-32 sm:h-48 md:h-64 overflow-hidden block shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-1.5 rounded-full text-[8px] md:text-xs font-bold text-brand-gold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </Link>
                  <div className="p-3 sm:p-4 md:p-8 flex flex-col grow">
                    <div className="flex flex-wrap items-center text-[9px] sm:text-xs md:text-sm text-neutral-500 mb-2 md:mb-4 font-medium">
                      <span>{post.date}</span>
                      <span className="mx-1 md:mx-2 text-neutral-300">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-[10px] xs:text-xs sm:text-sm md:text-xl font-bold mb-3 md:mb-6 group-hover:text-brand-gold transition-colors leading-snug flex-grow" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-brand-gold font-bold text-[8px] sm:text-[10px] md:text-sm uppercase tracking-wider group/link mt-auto">
                      Read More
                      <ChevronRight size={12} className="ml-1 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-neutral-100 rounded-sm border border-neutral-200 mb-16">
              <h3 className="text-2xl font-serif text-brand-dark mb-2" style={{ fontFamily: 'var(--font-cinzel), serif' }}>No articles found</h3>
              <p className="text-neutral-500">Please check back later for new insights and inspiration.</p>
            </div>
          )}

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
        <div className="w-full px-6">
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
