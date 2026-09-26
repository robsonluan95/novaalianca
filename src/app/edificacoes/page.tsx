import type { Metadata } from 'next';
import { segmentMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = segmentMetadata('edificacoes');

export default function EdificacoesPage() {
  return <SegmentHub slug="edificacoes" />;
}
