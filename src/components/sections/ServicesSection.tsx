'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SERVICES_LIST } from '@/data/siteData';
import {
  Wrench,
  Hammer,
  Settings,
  Zap,
  Sun,
  ShieldCheck,
  ImageOff,
  Building,
  Truck,
  Search,
  ChevronRight,
  ChevronUp,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  Wrench,
  Hammer,
  Settings,
  Zap,
  Sun,
  ShieldCheck,
  Building,
  Truck,
};

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [showAllServices, setShowAllServices] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const services = SERVICES_LIST.map((item) => {
    const translation = t.services.list.find((s) => s.id === item.id);
    return {
      ...item,
      title: translation ? translation.title : item.title,
      description: translation ? translation.description : item.description,
    };
  });

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const servicesToShow = showAllServices ? filteredServices : filteredServices.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="servicos" className="py-20 bg-bg-light relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          <SectionTitle
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </motion.div>

        {showAllServices && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-emerald-100/60 mb-10 max-w-4xl mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.services.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 px-1">
                {filteredServices.length} {t.services.foundCount}
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {servicesToShow.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
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
                  <div className="absolute inset-0 bg-black/10" />
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
                  <p className="text-xs sm:text-sm text-emerald-900/70 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
          <div className="text-center mt-6">
            <button
              onClick={() => {
                if (showAllServices) {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }
                setShowAllServices(!showAllServices);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#3f4b59] hover:bg-[#2d3744] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all cursor-pointer"
            >
              <span>{showAllServices ? t.services.viewLess : t.services.viewMore}</span>
              {showAllServices ? <ChevronUp className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
