import { Suspense } from 'react';
import { fetchAPI } from '../../lib/api';
import { GET_ALL_PROJECTS_QUERY, mapWordPressProjectToFitout } from '../../lib/queries';
import { featuredFitouts, FeaturedFitout } from '../../data/featuredFitouts';
import PortfolioClient from './PortfolioClient';

export default async function PortfolioPage() {
  let projects: FeaturedFitout[] = [];

  try {
    const data = await fetchAPI(GET_ALL_PROJECTS_QUERY);
    const nodes = data?.projects?.nodes;

    if (nodes && nodes.length > 0) {
      const wpProjects = nodes.map(mapWordPressProjectToFitout);
      const wpSlugs = new Set(wpProjects.map(p => p.slug.toLowerCase()));
      const filteredStatic = featuredFitouts.filter(p => !wpSlugs.has(p.slug.toLowerCase()));
      projects = [...wpProjects, ...filteredStatic];
    } else {
      // Fallback if WordPress projects are not found or setup is incomplete
      console.log("No projects found from WordPress API. Falling back to static data.");
      projects = featuredFitouts;
    }
  } catch (error) {
    console.error("Failed to fetch projects, falling back to static data", error);
    projects = featuredFitouts;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-dark pt-32 text-center text-white">Loading...</div>}>
      <PortfolioClient initialProjects={projects} />
    </Suspense>
  );
}
