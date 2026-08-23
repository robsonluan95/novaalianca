'use client';

import React from 'react';
import { CLIENTS_LIST } from '@/data/siteData';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-[#29b6f6] mb-12 tracking-tight">
          Alguns de Nossos Clientes
        </h3>

        {/* Client Logos Grid Matching Screenshot 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-center max-w-5xl mx-auto">
          {CLIENTS_LIST.map((client) => (
            <div
              key={client.id}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group h-36"
            >
              <div className="w-16 h-16 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs font-black mb-3 shadow-md group-hover:scale-105 transition-transform">
                {client.name.split(' ').map((w) => w[0]).slice(0, 3).join('')}
              </div>
              <span className="text-xs font-bold text-gray-700 leading-tight tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
