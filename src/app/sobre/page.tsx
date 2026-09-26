import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { AboutSection } from '@/components/sections/AboutSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nova Aliança Empreendimentos | Sobre Nós',
  description:
    'Conheça a história do grupo Nova Aliança Empreendimentos — a união entre Carvalho Energia Renovável, HB20 Construções, TransÁfrica Power Alliance e TransAmérica Power Alliance.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow pt-24 sm:pt-28">
        <AboutSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
