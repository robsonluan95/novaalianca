'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <NewsSection />
        <AboutSection />
        <ContactSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
