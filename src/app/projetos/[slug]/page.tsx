import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectById, projectMetadata } from '@/data/segments';
import { ProjectDetail } from '@/components/segments/ProjectDetail';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata(slug);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProjectById(slug)) notFound();
  return <ProjectDetail id={slug} />;
}
