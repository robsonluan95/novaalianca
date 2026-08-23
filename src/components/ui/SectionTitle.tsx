import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  lightText?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
  lightText = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          lightText ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            lightText ? 'text-gray-200' : 'text-emerald-800/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
