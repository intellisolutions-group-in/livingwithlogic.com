import BlogDetailClient from './BlogDetailClient';

// All blog slugs for static generation
const allSlugs = [
  'future-strategic-planning-post-digital-world',
  'building-resilient-leadership-teams',
  'data-driven-decision-making-framework',
  'roi-team-development-measuring-impact',
  'cultural-transformation-inside-out',
  'scaling-agile-methodologies-enterprise',
  'psychology-high-performance-teams'
];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
