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
      projects = nodes.map(mapWordPressProjectToFitout);
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
    <PortfolioClient initialProjects={projects} />
  );
}
