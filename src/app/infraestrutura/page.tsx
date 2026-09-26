import type { Metadata } from 'next';
import { segmentMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = segmentMetadata('infraestrutura');

export default function InfraestruturaPage() {
  return <SegmentHub slug="infraestrutura" />;
}
