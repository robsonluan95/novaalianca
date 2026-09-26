import type { Metadata } from 'next';
import { subverticalMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = subverticalMetadata('solar');

export default function EnergiaSolarPage() {
  return <SegmentHub slug="energia" subvertical="solar" />;
}
