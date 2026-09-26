import type { Metadata } from 'next';
import { subverticalMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = subverticalMetadata('pch');

export default function EnergiaPchPage() {
  return <SegmentHub slug="energia" subvertical="pch" />;
}
