import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Nova Aliança Empreendimentos | Usinas Fotovoltaicas de Grande Escala',
  description:
    'Especialistas na construção de usinas fotovoltaicas de grande escala (GC e GD), combinando inovação, sustentabilidade e excelência técnica.',
  icons: {
    icon: '/icon.jpeg',
    shortcut: '/icon.jpeg',
    apple: '/icon.jpeg',
  },
  keywords: [
    'Energia Solar',
    'Usinas Fotovoltaicas',
    'Geração Centralizada',
    'Geração Distribuída',
    'Obras Civis Solares',
    'Cravação de Perfis Metálicos',
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
