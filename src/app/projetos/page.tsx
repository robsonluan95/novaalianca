'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { AllProjectsSection } from '@/components/sections/AllProjectsSection';
import { Footer } from '@/components/layout/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Header />
      <main className="flex-grow">
        <AllProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
