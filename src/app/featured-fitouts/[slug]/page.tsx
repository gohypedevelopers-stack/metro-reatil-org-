import { notFound } from 'next/navigation';
import FeaturedFitoutDetail from '../../../components/featured-fitouts/FeaturedFitoutDetail';
import { featuredFitouts, getFeaturedFitoutBySlug, getSuggestedFitouts } from '../../../data/featuredFitouts';
import { fetchAPI } from '../../../lib/api';
import { GET_PROJECT_BY_SLUG_QUERY, mapWordPressProjectToFitout } from '../../../lib/queries';

export const generateStaticParams = () =>
  featuredFitouts.map((project) => ({
    slug: project.slug,
  }));

export default async function FeaturedFitoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let project = getFeaturedFitoutBySlug(slug);

  if (!project) {
    try {
      const data = await fetchAPI(GET_PROJECT_BY_SLUG_QUERY, { variables: { id: slug } });
      if (data?.project) {
        project = mapWordPressProjectToFitout(data.project);
      }
    } catch (e) {
      console.error("Failed to fetch project by slug:", e);
    }
  }

  if (!project) {
    notFound();
  }

  return (
    <FeaturedFitoutDetail
      project={project}
      suggestedProjects={getSuggestedFitouts(project.slug, 6)}
    />
  );
}
