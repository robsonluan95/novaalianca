'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { getSegment, getProjectById, getRelatedProjects } from '@/data/segments';
import { ImageOff, MapPin, Calendar, Gauge, Layers, ArrowLeft } from 'lucide-react';

export const ProjectDetail: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const project = getProjectById(id);
  if (!project) return null;

  const segment = getSegment(project.segment);
  const segmentCopy = t.segments.list.find((s) => s.slug === project.segment);
  const translation = t.projects.list.find((p) => p.id === project.id);

  const title = translation ? translation.title : project.title;
  const location = translation ? translation.location : project.location;
  const capacity = translation ? translation.capacity : project.capacity;
  const description = translation?.description ?? project.description;

  const related = getRelatedProjects(project.id, project.segment).map((p) => {
    const t2 = t.projects.list.find((x) => x.id === p.id);
    return {
      ...p,
      title: t2 ? t2.title : p.title,
      location: t2 ? t2.location : p.location,
      capacity: t2 ? t2.capacity : p.capacity,
    };
  });

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow bg-bg-light">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 flex items-center justify-center">
          {!imageErrors[project.id] && project.image ? (
            <img
              src={project.image}
              alt={title}
              onError={() => handleImageError(project.id)}
              className="w-full h-full object-cover"
              suppressHydrationWarning
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300/40 p-4">
              <ImageOff className="w-16 h-16 mb-1 stroke-[1.5]" />
              <span className="text-sm font-semibold">{title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link
              href={segment.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-brand-light transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.projectDetail.backToSegment} {segmentCopy?.label ?? segment.label}
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">{title}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {description && <p className="text-base text-emerald-900/80 leading-relaxed">{description}</p>}

            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-3">
                {project.gallery.map((src, i) => (
                  <div key={src} className="relative h-40 sm:h-52 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={src}
                      alt={`${title} — foto ${i + 1}`}
                      className="w-full h-full object-cover"
                      suppressHydrationWarning
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 h-fit">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-light bg-brand-dark inline-block px-3 py-1 rounded-full mb-5">
              {t.projectDetail.technicalSheet}
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">{t.projectDetail.location}</p>
                  <p className="font-semibold text-brand-dark">{location}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">{t.projectDetail.year}</p>
                  <p className="font-semibold text-brand-dark">{project.year}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Gauge className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">{t.projectDetail.capacity}</p>
                  <p className="font-semibold text-brand-dark">{capacity}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs">{t.projectDetail.segment}</p>
                  <p className="font-semibold text-brand-dark">
                    {segmentCopy?.label ?? segment.label}
                    {project.subtype ? ` · ${project.subtype}` : ''}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-6">{t.projectDetail.relatedProjects}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projetos/${p.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 flex items-center justify-center">
                    {!imageErrors[p.id] && p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        onError={() => handleImageError(p.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        suppressHydrationWarning
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300/40 p-4">
                        <ImageOff className="w-10 h-10 mb-1 stroke-[1.5]" />
                        <span className="text-xs font-semibold">{p.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-emerald-700 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-emerald-800/80 font-medium">
                      {p.location} • {p.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
