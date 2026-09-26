import type { Metadata } from 'next';
import { subverticalMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = subverticalMetadata('mineracao');

export default function InfraestruturaMineracaoPage() {
  return <SegmentHub slug="infraestrutura" subvertical="mineracao" />;
}
