import { notFound } from 'next/navigation';
import FeaturedFitoutDetail from '../../../components/featured-fitouts/FeaturedFitoutDetail';
import { featuredFitouts, getFeaturedFitoutBySlug, getSuggestedFitouts } from '../../../data/featuredFitouts';

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
  const project = getFeaturedFitoutBySlug(slug);

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
