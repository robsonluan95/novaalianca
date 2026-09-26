import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { NewsSection } from '@/components/sections/NewsSection';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nova Aliança Empreendimentos | Notícias',
  description: 'Acompanhe as novidades da Nova Aliança Empreendimentos e os marcos dos nossos projetos.',
};

export default function NoticiasPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow pt-24 sm:pt-28">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
