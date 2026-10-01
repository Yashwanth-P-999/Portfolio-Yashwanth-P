import React from 'react';

interface SectionHeaderProps {
  number?: string;
  category?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {/* Category & index lead-in: clean unboxed typographic line */}
      <div
        className={`flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-mono text-[#52525B] ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        {number && <span className="font-semibold text-[#18181B]">{number}</span>}
        {number && category && <span aria-hidden="true" className="text-zinc-300">/</span>}
        {category && <span className="font-medium tracking-wider">{category}</span>}
      </div>

      {/* Main Title with Syne display font */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#121214] tracking-tight leading-tight max-w-3xl">
        {title}
      </h2>

      {/* Subtitle / Context description */}
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
