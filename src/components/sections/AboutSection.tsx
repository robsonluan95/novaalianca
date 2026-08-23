'use client';

import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <SectionTitle
              title={t.about.title}
              subtitle={t.about.subtitle}
              centered={false}
              className="mb-8"
            />

            <div className="space-y-6 text-base sm:text-lg text-emerald-950/80 font-normal leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </div>

          {/* Right Column: Founder Image with Caption Badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-brand-dark group">
              <img
                src="/ceo.jpg"
                alt="Tiago Nunes de Castro - Fundador e Diretor"
                className="w-full h-[450px] sm:h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />

              {/* Floating Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/60">
                <h4 className="text-xl font-bold text-brand-dark">{t.about.founderTitle}</h4>
                <p className="text-sm font-semibold text-brand-emerald mt-0.5">
                  {t.about.founderRole}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {t.about.founderBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
