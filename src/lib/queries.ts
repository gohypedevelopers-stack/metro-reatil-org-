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
            sourceUrl
          }
        }
      }
    }
  }
`;

/**
 * Maps the WordPress GraphQL response to the local FeaturedFitout type.
 */
export function mapWordPressProjectToFitout(wpProject: any): FeaturedFitout {
  const details = wpProject.projectDetails || {};
  
  return {
    slug: wpProject.slug,
    name: wpProject.title,
    category: details.category || "UNCATEGORIZED",
    subcategory: details.subcategory || "OVERVIEW",
    location: details.location || "",
    img: wpProject.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    intro: details.intro || "",
    description: details.description || "",
    executionTime: details.executionTime || "",
    projectScale: details.projectScale || "",
    gallery: details.gallery ? details.gallery.map((g: any) => g.sourceUrl) : [],
    // Hardcoded scope for now or extract from details if you add it later
    scopeOfWork: []
  };
}
