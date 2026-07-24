import React from 'react';

export interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <div className={`p-8 sm:p-10 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in duration-300 ${className}`}>
      <div className="space-y-2">
        {badge && (
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">
            {badge}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-neutral-500 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {children && <div className="shrink-0 flex items-center gap-3">{children}</div>}
    </div>
  );
};
