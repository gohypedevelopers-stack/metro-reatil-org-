import { fetchAPI } from "@/lib/api";
import { GET_POST_BY_SLUG_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const wpData = await fetchAPI(GET_POST_BY_SLUG_QUERY, { variables: { id: slug } });
  const post = wpData?.post;
  
  if (!post) {
    return { title: 'Post Not Found | Metro Retail Solutions' };
  }

  return {
    title: `${post.title} | Metro Retail Solutions`,
    description: post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160) : 'Blog post by Metro Retail Solutions',
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // Fetch the individual post data
  const wpData = await fetchAPI(GET_POST_BY_SLUG_QUERY, { variables: { id: slug } });
  const post = wpData?.post;

  // If no post is found, show the 404 page
  if (!post) {
    notFound();
  }

  // Format the date
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const category = post.categories?.nodes?.[0]?.name || 'Blog';
  const imageUrl = post.featuredImage?.node?.sourceUrl || '/wide_mall_hero.png';
  const author = post.blogPostDetails?.authorName || 'Metro Team';
  const secondaryImage = post.blogPostDetails?.secondaryImage?.node?.sourceUrl || null;
  const readTime = post.blogPostDetails?.readingTime || '3 min read';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[45vh] min-h-[400px] w-full bg-brand-dark overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-brand-gold transition-colors mb-6 text-sm font-medium uppercase tracking-wider">
              <ChevronLeft size={16} className="mr-1" /> Back to Blog
            </Link>
            
            <h1 
              className="text-white text-3xl md:text-4xl lg:text-5xl mb-6 font-serif leading-tight uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {post.title}
            </h1>
            
            <div className="flex items-center text-white/80 text-sm font-medium flex-wrap gap-y-2">
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center text-white text-xs font-bold">
                  {author.charAt(0)}
                </span>
                {author}
              </span>
              <span className="mx-3 text-white/40 hidden sm:inline">•</span>
              <span>{formattedDate}</span>
              <span className="mx-3 text-white/40">•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div 
            className="prose prose-lg prose-neutral max-w-none prose-headings:font-serif prose-headings:text-brand-dark prose-a:text-brand-gold hover:prose-a:text-yellow-600 prose-img:rounded-sm"
            style={{ 
              // Adding some custom styling for the content since Tailwind Typography might not be installed, 
              // but we use prose classes just in case it is. We also apply basic styles inline.
            }}
          >
            {/* 
              We use dangerouslySetInnerHTML to render the HTML content 
              that WordPress sends us from its WYSIWYG editor. 
            */}
            <div 
              className="wordpress-content"
              style={{ lineHeight: '1.9', fontSize: '1.15rem', color: '#262626', fontWeight: 300 }}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {secondaryImage && (
              <div className="mt-16 mb-12 flex justify-center">
                <div className="relative w-full max-w-3xl h-[400px] md:h-[550px] rounded-sm overflow-hidden shadow-2xl group">
                  <Image
                    src={secondaryImage}
                    alt={`${post.title} - secondary image`}
                    fill
                    className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Custom CSS for the WordPress content to ensure basic formatting even without Tailwind Typography plugin */}
      <style dangerouslySetInnerHTML={{__html: `
        .wordpress-content h2 { font-size: 2rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel), serif; color: #171717; }
        .wordpress-content h3 { font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; font-family: var(--font-cinzel), serif; color: #171717; }
        .wordpress-content p { margin-bottom: 2rem; font-family: 'Inter', sans-serif; }
        .wordpress-content ul { list-style-type: none; padding-left: 1.5rem; margin-bottom: 2rem; }
        .wordpress-content ul li { position: relative; margin-bottom: 0.75rem; }
        .wordpress-content ul li::before { content: '•'; position: absolute; left: -1.5rem; color: #E8A020; font-size: 1.5rem; line-height: 1; top: -0.1rem; }
        .wordpress-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 2rem; }
        .wordpress-content li { margin-bottom: 0.75rem; }
        .wordpress-content blockquote { border-left: 4px solid #E8A020; padding-left: 1.5rem; font-style: italic; color: #525252; margin-bottom: 2rem; font-size: 1.25rem; font-family: var(--font-playfair), serif; background: #fafafa; padding-top: 1rem; padding-bottom: 1rem; border-top-right-radius: 4px; border-bottom-right-radius: 4px; }
        .wordpress-content img { max-width: 100%; height: auto; border-radius: 0.125rem; margin-top: 2rem; margin-bottom: 2rem; }
        .wordpress-content figure { margin: 2rem 0; }
        .wordpress-content figcaption { text-align: center; font-size: 0.875rem; color: #737373; margin-top: 0.5rem; }
      `}} />
    </div>
  );
}
