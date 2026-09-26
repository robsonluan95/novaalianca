'use client';

import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';
import { SEGMENTS } from '@/data/segments';
import { Sun, Fuel, HardHat, Truck, Building2, ArrowRight } from 'lucide-react';

const segmentIconMap = { Sun, Fuel, HardHat, Truck, Building2 };

export const SegmentCardsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.home.segmentsSectionTitle} subtitle={t.home.segmentsSectionSubtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SEGMENTS.map((segment) => {
            const copy = t.segments.list.find((s) => s.slug === segment.slug);
            const Icon = segmentIconMap[segment.iconName];
            return (
              <Link
                key={segment.slug}
                href={segment.href}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative"
              >
                {segment.status === 'coming-soon' && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wide text-brand-emerald bg-emerald-100 px-2 py-1 rounded-full">
                    {t.home.comingSoonBadge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-light flex items-center justify-center mb-4 group-hover:bg-brand-emerald transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{copy?.label ?? segment.label}</h3>
                <p className="text-sm text-emerald-900/70 flex-grow">{copy?.tagline ?? segment.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-emerald group-hover:gap-2 transition-all">
                  {t.home.viewSegment} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
