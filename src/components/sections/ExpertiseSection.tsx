'use client';

import React from 'react';
import { EXPERTISE_AREAS, SERVICE_STAGES } from '@/data/siteData';
import { Building, HardHat, Droplet, Pickaxe, Sun, ChevronRight } from 'lucide-react';

const iconMap = {
  Building: Building,
  HardHat: HardHat,
  Droplet: Droplet,
  Pickaxe: Pickaxe,
  Sun: Sun,
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="atuacao" className="py-20 bg-[#3a444f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 3 Stat Cards Matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-2xl overflow-hidden mb-16 border border-gray-700">
          <div className="bg-[#29b6f6] p-8 text-center flex flex-col justify-center items-center text-white">
            <span className="text-4xl font-extrabold mb-1">10+</span>
            <span className="text-sm font-semibold tracking-wide">Mais de 10 anos de HB20</span>
          </div>
          <div className="bg-[#f0f4f8] p-8 text-center flex flex-col justify-center items-center text-gray-900">
            <span className="text-4xl font-extrabold mb-1">30+</span>
            <span className="text-sm font-semibold tracking-wide text-gray-600">Mais de 30 Clientes</span>
          </div>
          <div className="bg-[#11161d] p-8 text-center flex flex-col justify-center items-center text-white">
            <span className="text-4xl font-extrabold mb-1">35+</span>
            <span className="text-sm font-semibold tracking-wide text-gray-300">Mais de 35 Projetos Realizados</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Atuamos nas Áreas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            Unindo a tradição da HB20 em infraestrutura civil, saneamento e mineração com a inovação da Carvalho em energia renovável.
          </p>
        </div>

        {/* 4 Grid Boxes Matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {EXPERTISE_AREAS.map((area) => {
            const IconComp = iconMap[area.iconName] || HardHat;

            return (
              <div
                key={area.id}
                className="bg-[#44505c] p-8 rounded-2xl border border-gray-600/60 shadow-lg hover:border-[#29b6f6] transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#29b6f6]/20 text-[#29b6f6] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#29b6f6] mb-3">{area.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed max-w-md mx-auto">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Etapas de Serviços Realizados Matching Screenshot 2 */}
        <div className="pt-10 border-t border-gray-600/50">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#29b6f6] tracking-tight mb-2">
              Etapas de Serviços Realizados
            </h3>
            <p className="text-gray-300 text-sm">Registro de campo em nossas obras de terraplenagem, pavimentação e infraestrutura</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {SERVICE_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="rounded-2xl overflow-hidden shadow-xl border border-gray-600 bg-gray-900 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <p className="font-semibold text-white text-sm font-sans mb-1">{stage.title}</p>
                    <p className="text-[10px] text-gray-300">Coordenadas & Registro Georreferenciado de Obra</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#29b6f6] hover:bg-[#0288d1] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all"
            >
              <span>VEJA MAIS</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
