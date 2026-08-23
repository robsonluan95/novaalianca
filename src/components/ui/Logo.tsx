import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-light flex items-center justify-center text-brand-dark shadow-md group-hover:scale-105 transition-transform duration-200 border-2 border-white/20">
        <img src="/icon.jpeg" alt="Nova Aliança Empreendimentos" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold text-lg sm:text-xl tracking-tight ${isLight ? 'text-white' : 'text-brand-dark'}`}>
          Nova Aliança
        </span>
        <span className={`text-xs font-semibold uppercase tracking-wider ${isLight ? 'text-brand-light' : 'text-emerald-700'}`}>
          Empreendimentos
        </span>
      </div>
    </Link>
  );
};
