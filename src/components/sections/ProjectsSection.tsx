'use client';

import React, { useState, useEffect } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { FEATURED_PROJECT, PROJECTS_LIST, FEATURED_PROJECTS } from '@/data/siteData';
import { MapPin, Zap, ChevronLeft, ChevronRight, ChevronUp, ImageOff, Search } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ProjectsSection: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const { t } = useLanguage();

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentFeaturedData = FEATURED_PROJECTS[featuredIndex];
  const currentFeaturedTranslation = t.projects.list.find((item) => item.id === currentFeaturedData.id);

  const featuredProject = {
    ...currentFeaturedData,
    title: currentFeaturedTranslation?.title || currentFeaturedData.title,
    location: currentFeaturedTranslation?.location || currentFeaturedData.location,
    capacity: currentFeaturedTranslation?.capacity || currentFeaturedData.capacity,
    description: currentFeaturedTranslation?.description || currentFeaturedData.description || '',
  };

  const projectsList = PROJECTS_LIST.map((project) => {
    const translation = t.projects.list.find((item) => item.id === project.id);
    return {
      ...project,
      title: translation ? translation.title : project.title,
      location: translation ? translation.location : project.location,
      capacity: translation ? translation.capacity : project.capacity,
    };
  });

  const uniqueProjects = [FEATURED_PROJECT, ...PROJECTS_LIST].filter(
    (project, index, self) => index === self.findIndex((p) => p.image === project.image)
  );

  const allProjectsList = uniqueProjects.map((project) => {
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

  const filteredProjects = allProjectsList.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="projetos" className="py-20 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {showAllProjects && (
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-emerald-100/60 mb-10 max-w-4xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.projects.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 px-1">
              {filteredProjects.length} {t.projects.foundCount}
            </p>
          </div>
        )}

        {!showAllProjects ? (
          <>
            {/* Main Featured Hero Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-200/80 bg-brand-dark group">
              {/* Indicators/Dots in top right corner of the card */}
              <div className="absolute top-6 right-6 flex gap-2 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {FEATURED_PROJECTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeaturedIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === featuredIndex ? 'bg-brand-light scale-125' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    aria-label={`Ver destaque ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="relative h-[480px] sm:h-[540px] w-full bg-gradient-to-br from-brand-dark via-emerald-950 to-brand-emerald flex items-center justify-center transition-all duration-500">
                {!imageErrors[featuredProject.id] && featuredProject.image ? (
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    onError={() => handleImageError(featuredProject.id)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    suppressHydrationWarning
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-emerald-300/40 p-6">
                    <ImageOff className="w-20 h-20 mb-2 stroke-[1.5]" />
                    <span className="text-sm font-semibold tracking-wide text-center">{featuredProject.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 text-white max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-brand-light font-semibold text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {featuredProject.location} - {featuredProject.year}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-white">
                    {featuredProject.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 text-brand-light font-bold text-base mb-4 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
                    <Zap className="w-4 h-4 fill-brand-light" />
                    <span>{featuredProject.capacity}</span>
                  </div>

                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {featuredProject.description}
                  </p>

                  <div>
                    <Button variant="primary" size="md">
                      {t.projects.viewDetails}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Header & Controls */}
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  id="projects-swiper-prev"
                  className="swiper-button-prev-custom w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center shadow-md hover:bg-brand-dark-hover transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="swiper-pagination-projects inline-flex items-center gap-1.5" />
                <button
                  id="projects-swiper-next"
                  className="swiper-button-next-custom w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center shadow-md hover:bg-brand-dark-hover transition-colors"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                  prevEl: '#projects-swiper-prev',
                  nextEl: '#projects-swiper-next',
                }}
                pagination={{
                  el: '.swiper-pagination-projects',
                  clickable: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-12"
              >
                {projectsList.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 group">
                      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 flex items-center justify-center">
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
                            <ImageOff className="w-10 h-10 mb-1 stroke-[1.5]" />
                            <span className="text-xs font-semibold">{project.title}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-emerald-700 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-emerald-800/80 font-medium">
                          {project.location} • {project.year} • <span className="font-bold text-brand-dark">{project.capacity}</span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
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
                    {project.location} • {project.year} • <span className="font-bold text-brand-dark">{project.capacity}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              if (showAllProjects) {
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
              }
              setShowAllProjects(!showAllProjects);
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#3f4b59] hover:bg-[#2d3744] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all cursor-pointer"
          >
            <span>{showAllProjects ? t.projects.viewLess : t.projects.viewMore}</span>
            {showAllProjects ? <ChevronUp className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};
