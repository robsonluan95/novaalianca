import type { Metadata } from 'next';
import { subverticalMetadata } from '@/data/segments';
import { SegmentHub } from '@/components/segments/SegmentHub';

export const metadata: Metadata = subverticalMetadata('transmissao-subestacoes');

export default function EnergiaTransmissaoSubestacoesPage() {
  return <SegmentHub slug="energia" subvertical="transmissao-subestacoes" />;
}
