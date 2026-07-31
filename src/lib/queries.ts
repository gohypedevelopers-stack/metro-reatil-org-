import { FeaturedFitout } from '../data/featuredFitouts';

export const GET_ALL_PROJECTS_QUERY = `
  query AllProjects {
    projects(first: 100) {
      nodes {
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        projectDetails {
          category
          subcategory
          location
          intro
          description
          executionTime
          projectScale
          gallery {
            nodes {
              sourceUrl
            }
          }
        }
        projectImages {
          galleryImage1 { node { sourceUrl } }
          galleryimage2 { node { sourceUrl } }
          galleryimage3 { node { sourceUrl } }
          galleryimage4 { node { sourceUrl } }
          galleryimage5 { node { sourceUrl } }
          galleryimage6 { node { sourceUrl } }
          galleryimage7 { node { sourceUrl } }
          galleryimage8 { node { sourceUrl } }
          galleryimage9 { node { sourceUrl } }
          galleryimage10 { node { sourceUrl } }
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_SLUG_QUERY = `
  query ProjectBySlug($id: ID!) {
    project(id: $id, idType: URI) {
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      projectDetails {
        category
        subcategory
        location
        intro
        description
        executionTime
        projectScale
        gallery {
          nodes {
            sourceUrl
          }
        }
      }
      projectImages {
        galleryImage1 { node { sourceUrl } }
        galleryimage2 { node { sourceUrl } }
        galleryimage3 { node { sourceUrl } }
        galleryimage4 { node { sourceUrl } }
        galleryimage5 { node { sourceUrl } }
        galleryimage6 { node { sourceUrl } }
        galleryimage7 { node { sourceUrl } }
        galleryimage8 { node { sourceUrl } }
        galleryimage9 { node { sourceUrl } }
        galleryimage10 { node { sourceUrl } }
      }
    }
  }
`;

/**
 * Maps the WordPress GraphQL response to the local FeaturedFitout type.
 */
export function mapWordPressProjectToFitout(wpProject: any): FeaturedFitout {
  const details = wpProject.projectDetails || {};
  const galleryGroup = wpProject.projectImages || {};

  // Handle ACF checkbox array vs string for category
  const categoryRaw = details.category;
  const categoryStr = Array.isArray(categoryRaw) ? categoryRaw[0] : (categoryRaw || "UNCATEGORIZED");

  const images = [
    galleryGroup.galleryImage1?.node?.sourceUrl,
    galleryGroup.galleryimage2?.node?.sourceUrl,
    galleryGroup.galleryimage3?.node?.sourceUrl,
    galleryGroup.galleryimage4?.node?.sourceUrl,
    galleryGroup.galleryimage5?.node?.sourceUrl,
    galleryGroup.galleryimage6?.node?.sourceUrl,
    galleryGroup.galleryimage7?.node?.sourceUrl,
    galleryGroup.galleryimage8?.node?.sourceUrl,
    galleryGroup.galleryimage9?.node?.sourceUrl,
    galleryGroup.galleryimage10?.node?.sourceUrl,
  ].filter(Boolean); // removes undefined or null

  return {
    slug: wpProject.slug,
    name: wpProject.title,
    category: categoryStr,
    subcategory: details.subcategory || "OVERVIEW",
    location: details.location || "",
    img: wpProject.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    intro: details.intro || "",
    description: details.description || "",
    executionTime: details.executionTime || "",
    projectScale: details.projectScale || "",
    gallery: images.length > 0 ? images : (details.gallery?.nodes ? details.gallery.nodes.map((g: any) => g.sourceUrl) : []),
    // Hardcoded scope for now or extract from details if you add it later
    scopeOfWork: []
  };
}

export const GET_ALL_POSTS_QUERY = `
  query AllPosts {
    posts(first: 100) {
      nodes {
        id
        slug
        title
        excerpt
        date
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        blogPostDetails {
          readingTime
          authorName
          secondaryImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG_QUERY = `
  query PostBySlug($id: ID!) {
    post(id: $id, idType: URI) {
      id
      slug
      title
      content
      date
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      blogPostDetails {
        readingTime
        authorName
        secondaryImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export function mapWordPressPostToLocal(wpPost: any) {
  // Strip HTML tags from excerpt if present
  const rawExcerpt = wpPost.excerpt || '';
  const cleanExcerpt = rawExcerpt.replace(/<[^>]*>?/gm, '');
  
  // Format the date
  const dateObj = new Date(wpPost.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    id: wpPost.id,
    title: wpPost.title,
    excerpt: cleanExcerpt,
    category: wpPost.categories?.nodes?.[0]?.name || 'Blog',
    date: formattedDate,
    readTime: wpPost.blogPostDetails?.readingTime || '3 min read',
    author: wpPost.blogPostDetails?.authorName || 'Metro Team',
    secondaryImage: wpPost.blogPostDetails?.secondaryImage?.node?.sourceUrl || null,
    image: wpPost.featuredImage?.node?.sourceUrl || '/images/phase_01_site_audit.png',
    slug: wpPost.slug,
  };
}

// ---------------------------------------------------------
// CAREERS
// ---------------------------------------------------------

export const GET_ALL_CAREERS_QUERY = `
  query GetAllCareers {
    careers(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        careerDetails {
          jobCategory
          jobLocation
          jobDescription
        }
      }
    }
  }
`;

export function mapWordPressCareerToLocal(wpCareer: any) {
  return {
    title: wpCareer.title,
    category: wpCareer.careerDetails?.jobCategory || 'General',
    location: wpCareer.careerDetails?.jobLocation || 'Remote / Hybrid',
    description: wpCareer.careerDetails?.jobDescription || 'We are looking for talented individuals to join our team.',
  };
}
