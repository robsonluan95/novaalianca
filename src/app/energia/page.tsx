import type { Metadata } from 'next';
import { segmentMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = segmentMetadata('energia');

export default function EnergiaPage() {
  return <SegmentHub slug="energia" />;
}
