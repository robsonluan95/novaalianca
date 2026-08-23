'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FEATURED_PROJECT, PROJECTS_LIST } from '@/data/siteData';
import { ImageOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AllProjectsSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const allProjects = [FEATURED_PROJECT, ...PROJECTS_LIST];
  const uniqueProjects = allProjects.filter(
    (project, index, self) => index === self.findIndex((p) => p.image === project.image)
  );

  const projectsList = uniqueProjects.map((project) => {
    const translation = t.projects.list.find((item) => item.id === project.id);
    const featuredTranslation =
      project.id === FEATURED_PROJECT.id
        ? {
            title: t.projects.featured.title,
            location: t.projects.featured.location,
            capacity: t.projects.featured.capacity,
          }
        : null;

    return {
      ...project,
      title: featuredTranslation?.title || (translation ? translation.title : project.title),
      location: featuredTranslation?.location || (translation ? translation.location : project.location),
      capacity: featuredTranslation?.capacity || (translation ? translation.capacity : project.capacity),
    };
  });

  return (
    <section id="projetos" className="py-20 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.projects.allProjectsTitle}
          subtitle={t.projects.allProjectsSubtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 flex items-center justify-center">
                {!imageErrors[project.id] && project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300/40 p-4">
                    <ImageOff className="w-12 h-12 mb-1 stroke-[1.5]" />
                    <span className="text-xs font-semibold">{project.title}</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-emerald-800/80 font-medium">
                  {project.location} • {project.year} • <span className="font-bold text-brand-dark">{project.capacity}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
