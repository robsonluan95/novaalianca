'use client';

import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { MapPin, Phone, Mail, Share2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projetos' },
    { label: t.nav.services, href: '#servicos' },
    { label: t.nav.news, href: '#noticias' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.contact, href: '#contato' },
  ];

  const services = t.services.list.slice(0, 4).map((item) => ({
    title: item.title,
    href: '#servicos',
  }));

  return (
    <footer id="contato" className="bg-brand-dark text-white pt-36 pb-12 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16 pb-12 border-b border-emerald-900/60">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Logo isLight />
            <p className="text-sm text-gray-300 leading-relaxed font-normal pt-2">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/nova-alian%C3%A7a-empreendimentos-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-light hover:text-white bg-emerald-950/80 px-4 py-2 rounded-full border border-emerald-800/60 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{t.footer.followLinkedin}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-brand-light">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-brand-light">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-brand-light transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-brand-light">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-light shrink-0" />
                <a href="tel:+5562984444010" className="hover:text-brand-light transition-colors">
                  +55 (62) 98444-4010
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-light shrink-0" />
                <a href="mailto:contato@novaaliancaempreendimentos.com.br" className="text-xs md:text-sm hover:text-brand-light transition-colors break-all">
                  contato@novaaliancaempreendimentos.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Nova Aliança Empreendimentos. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/robsonluan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-light transition-colors underline decoration-dotted underline-offset-2"
            >
              Robson Luan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
