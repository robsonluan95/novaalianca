import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Nova Aliança Empreendimentos | Energia, Óleo e Gás, Infraestrutura, Estrada e Edificações',
  description:
    'Grupo de engenharia e construção atuando em Energia, Óleo e Gás, Infraestrutura, Estrada e Rodagem e Edificações em todo o Brasil.',
  icons: {
    icon: '/icon.jpeg',
    shortcut: '/icon.jpeg',
    apple: '/icon.jpeg',
  },
  keywords: [
    'Energia Solar',
    'Usinas Fotovoltaicas',
    'Óleo e Gás',
    'Infraestrutura',
    'Estrada e Rodagem',
    'Edificações',
    'Engenharia e Construção',
    'Nova Aliança Empreendimentos',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.jpeg" type="image/jpeg" />
      </head>
      <body className="antialiased selection:bg-brand-light selection:text-brand-dark animated-gradient" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
