import type { Metadata } from 'next';
import { segmentMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = segmentMetadata('estrada-e-rodagem');

export default function EstradaERodagemPage() {
  return <SegmentHub slug="estrada-e-rodagem" />;
}
