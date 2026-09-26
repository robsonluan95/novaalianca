import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nova Aliança Empreendimentos | Contato',
  description:
    'Entre em contato com a Nova Aliança Empreendimentos via WhatsApp para saber mais sobre nossa atuação em Energia, Óleo e Gás, Infraestrutura, Estrada e Rodagem e Edificações.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow pt-24 sm:pt-28">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
