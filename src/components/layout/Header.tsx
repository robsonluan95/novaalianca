'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#lang-selector-container')) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projetos' },
    { label: t.nav.services, href: '#servicos' },
    { label: t.nav.news, href: '#noticias' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.contact, href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto bg-brand-dark text-white rounded-2xl shadow-xl border border-emerald-900/40 backdrop-blur-md bg-opacity-95 transition-all duration-300">
        <div className="flex items-center justify-between h-16 sm:h-20 px-6 sm:px-8">
          {/* Logo */}
          <Logo isLight />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-brand-light transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Selector Container */}
            <div id="lang-selector-container" className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLangDropdownOpen((prev) => !prev);
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-white bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/50 transition-colors cursor-pointer"
                aria-label="Seletor de idioma"
              >
                <Globe className="w-4 h-4 text-brand-light" />
                <span className="font-semibold text-xs tracking-wider">{language === 'BR' ? 'PT / BR' : 'EN / US'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-300 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-brand-dark border border-emerald-800/80 rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLanguage('BR');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      language === 'BR' ? 'text-brand-light bg-emerald-900/60 font-bold' : 'text-gray-200 hover:bg-emerald-900/50'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" /> PT-BR
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLanguage('US');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      language === 'US' ? 'text-brand-light bg-emerald-900/60 font-bold' : 'text-gray-200 hover:bg-emerald-900/50'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" /> EN-US
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white hover:bg-emerald-900/50 transition-colors focus-outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden px-6 pt-2 pb-6 border-t border-emerald-900/60 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-200 hover:text-brand-light transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
