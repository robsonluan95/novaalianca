import type { Metadata } from 'next';
import { subverticalMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = subverticalMetadata('saneamento');

export default function InfraestruturaSaneamentoPage() {
  return <SegmentHub slug="infraestrutura" subvertical="saneamento" />;
}
