import type { Metadata } from 'next';
import { segmentMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = segmentMetadata('oleo-e-gas');

export default function OleoEGasPage() {
  return <SegmentHub slug="oleo-e-gas" />;
}
