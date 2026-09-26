'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';
import {
  getSegment,
  getSegmentProjects,
  getSegmentServices,
  getSubvertical,
  getSubverticalProjects,
  getSubverticalsForSegment,
  SubverticalSlug,
} from '@/data/segments';
import { SegmentSlug } from '@/types';
import { HERO_METRICS } from '@/data/siteData';
import {
  Sun,
  Fuel,
  HardHat,
  Truck,
  Building2,
  Wrench,
  Hammer,
  Settings,
  Zap,
  ShieldCheck,
  Building,
  ImageOff,
  Clock,
  ArrowRight,
  Droplet,
  Pickaxe,
} from 'lucide-react';

const segmentIconMap = { Sun, Fuel, HardHat, Truck, Building2 };
const serviceIconMap = { Wrench, Hammer, Settings, Zap, Sun, ShieldCheck, Building, Truck, HardHat, Droplet, Pickaxe };

interface SegmentHubProps {
  slug: SegmentSlug;
  subvertical?: SubverticalSlug;
}

export const SegmentHub: React.FC<SegmentHubProps> = ({ slug, subvertical: subverticalSlug }) => {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const segment = getSegment(slug);
  const segmentCopy = t.segments.list.find((s) => s.slug === slug);
  const subvertical = subverticalSlug ? getSubvertical(subverticalSlug) : null;
  const subverticalCopy = subverticalSlug ? t.segments.subverticals.find((s) => s.slug === subverticalSlug) : null;
  const SegmentIcon = segmentIconMap[segment.iconName];
  const subverticals = getSubverticalsForSegment(slug);

  const heroLabel = subvertical ? `${segmentCopy?.label ?? segment.label} · ${subverticalCopy?.label ?? subvertical.label}` : segmentCopy?.label ?? segment.label;
  const heroTagline = subvertical ? subverticalCopy?.tagline ?? subvertical.tagline : segmentCopy?.tagline ?? segment.tagline;

  const projects = (subverticalSlug ? getSubverticalProjects(subverticalSlug) : getSegmentProjects(slug)).map((project) => {
    const translation = t.projects.list.find((p) => p.id === project.id);
    return {
      ...project,
      title: translation ? translation.title : project.title,
      location: translation ? translation.location : project.location,
      capacity: translation ? translation.capacity : project.capacity,
    };
  });

  // Serviços não têm subtipo hoje — só exibidos no hub do segmento, não nas sub-verticais.
  const services = subverticalSlug
    ? []
    : getSegmentServices(slug).map((service) => {
        const translation = t.services.list.find((s) => s.id === service.id);
        return {
          ...service,
          title: translation ? translation.title : service.title,
          description: translation ? translation.description : service.description,
        };
      });

  const isEmpty = projects.length === 0 && services.length === 0;

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow">
        {/* Hero do segmento */}
        <section className="pt-40 pb-20 bg-segment-institutional text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-emerald/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
              <SegmentIcon className="w-8 h-8 text-brand-light" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {heroLabel}
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-200">
              {heroTagline}
            </p>

            {!subverticalSlug && segment.status === 'live' && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { value: HERO_METRICS[0].value, label: t.hero.metrics.installed },
                  { value: HERO_METRICS[1].value, label: t.hero.metrics.projects },
                  { value: HERO_METRICS[2].value, label: t.hero.metrics.experience },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 border border-white/20 rounded-2xl py-5 px-4">
                    <p className="text-2xl sm:text-3xl font-extrabold text-brand-light">{stat.value}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {!subverticalSlug && subverticals.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {subverticals.map((sv) => {
                  const copy = t.segments.subverticals.find((s) => s.slug === sv.slug);
                  return (
                    <Link
                      key={sv.slug}
                      href={sv.href}
                      className="bg-bg-light rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                    >
                      <h3 className="text-lg font-bold text-brand-dark mb-2">{copy?.label ?? sv.label}</h3>
                      <p className="text-sm text-emerald-900/70 flex-grow">{copy?.tagline ?? sv.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-emerald group-hover:gap-2 transition-all">
                        {t.segments.exploreSubvertical} <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {isEmpty ? (
          <section className="py-24 bg-bg-light">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-brand-emerald mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">{t.segments.comingSoon.title}</h2>
              <p className="mt-4 text-emerald-900/70">{t.segments.comingSoon.body}</p>
            </div>
          </section>
        ) : (
          <>
            {services.length > 0 && (
              <section className="py-20 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => {
                      const IconComponent = serviceIconMap[service.iconName] || Wrench;
                      return (
                        <div
                          key={service.id}
                          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
                        >
                          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 flex items-center justify-center">
                            {!imageErrors[service.id] && service.image ? (
                              <img
                                src={service.image}
                                alt={service.title}
                                onError={() => handleImageError(service.id)}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                suppressHydrationWarning
                              />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300/40 p-4">
                                <ImageOff className="w-12 h-12 mb-1 stroke-[1.5]" />
                                <span className="text-xs font-semibold">{service.title}</span>
                              </div>
                            )}
                          </div>
                          <div className="relative flex justify-center -mt-8 z-10">
                            <div className="w-16 h-16 rounded-full bg-brand-dark text-brand-light flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-brand-emerald transition-colors duration-300">
                              <IconComponent className="w-7 h-7" />
                            </div>
                          </div>
                          <div className="p-6 pt-4 text-center flex flex-col items-center flex-grow">
                            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2 line-clamp-1 group-hover:text-brand-emerald transition-colors duration-300">
                              {service.title}
                            </h3>
                            {service.description && (
                              <p className="text-xs sm:text-sm text-emerald-900/70 leading-relaxed font-normal">
                                {service.description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/projetos/${project.id}`}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300 group"
                      >
                        <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 flex items-center justify-center">
                          {!imageErrors[project.id] && project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              onError={() => handleImageError(project.id)}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              suppressHydrationWarning
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300/40 p-4">
                              <ImageOff className="w-12 h-12 mb-1 stroke-[1.5]" />
                              <span className="text-xs font-semibold">{project.title}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-emerald-700 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-emerald-800/80 font-medium">
                            {project.location} • {project.year} •{' '}
                            <span className="font-bold text-brand-dark">{project.capacity}</span>
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        <section className="py-16 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-6">{t.segments.ctaTitle}</h2>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-dark-hover text-brand-light px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all"
            >
              {t.segments.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
