import React from 'react';

export interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  action,
  className = '',
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4 ${className}`}>
      <div>
        {badge && (
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
            {badge}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-neutral-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
