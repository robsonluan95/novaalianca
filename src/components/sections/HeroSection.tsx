'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    { value: '2.750+ MWp', label: t.hero.metrics.installed },
    { value: '35+', label: t.hero.metrics.projects },
    { value: '11+', label: t.hero.metrics.experience },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const metricItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/60 text-center max-w-4xl mx-auto transition-all duration-300 transform hover:shadow-[0_25px_50px_-12px_rgba(0,56,41,0.15)]"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-6 shadow-md border-2 border-emerald-100 p-1 bg-white">
            <img src="/icon.jpeg" alt="Nova Aliança Empreendimentos" className="w-full h-full object-cover rounded-full" suppressHydrationWarning />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-tight mb-4"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-emerald-900/80 max-w-2xl mx-auto font-medium leading-relaxed mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100"
          >
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={metricItemVariants}
                className="flex flex-col items-center p-2"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-800/70 mt-1 uppercase tracking-wider">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent pointer-events-none" />
    </section>
  );
};
