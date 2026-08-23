'use client';

import React from 'react';
import { VALUES_LIST } from '@/data/siteData';
import { Award, Leaf, HardHat, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  Award: Award,
  Leaf: Leaf,
  HardHat: HardHat,
  Shield: Shield,
};

export const ValuesSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      ...VALUES_LIST[0],
      title: t.values.excellenceTitle,
      description: t.values.excellenceDesc,
    },
    {
      ...VALUES_LIST[1],
      title: t.values.sustainabilityTitle,
      description: t.values.sustainabilityDesc,
    },
    {
      ...VALUES_LIST[2],
      title: t.values.safetyTitle,
      description: t.values.safetyDesc,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mb-24">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100/90 backdrop-blur-md">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark text-center mb-8">
          {t.values.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {values.map((val) => {
            const IconComponent = iconMap[val.iconName] || Award;

            return (
              <div key={val.id} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-brand-emerald flex items-center justify-center mb-4 shadow-sm border border-emerald-100">
                  <IconComponent className="w-8 h-8 stroke-[2]" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">{val.title}</h4>
                <p className="text-sm text-emerald-950/70 leading-relaxed max-w-xs">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
