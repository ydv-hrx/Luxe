import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export interface EmptyStateProps {
  icon?: React.FC<{ className?: string }>;
  badge?: string;
  title: string;
  description: string;
  primaryActionText?: string;
  primaryActionHref?: string;
  onPrimaryClick?: () => void;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  onSecondaryClick?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = Sparkles,
  badge = 'Atelier Selection',
  title,
  description,
  primaryActionText = 'Explore Collection',
  primaryActionHref = '/shop',
  onPrimaryClick,
  secondaryActionText,
  secondaryActionHref,
  onSecondaryClick,
  className = '',
}) => {
  return (
    <div className={`py-20 sm:py-28 text-center flex flex-col items-center justify-center gap-6 max-w-xl mx-auto px-6 animate-in fade-in duration-300 ${className}`}>
      <div className="p-6 bg-neutral-100 text-neutral-400 rounded-full border border-neutral-200/80 shadow-md">
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">{badge}</span>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
        {primaryActionHref ? (
          <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-md py-4 font-bold">
            <Link href={primaryActionHref} className="flex items-center gap-2">
              {primaryActionText} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        ) : (
          <Button variant="primary" size="lg" onClick={onPrimaryClick} className="w-full sm:w-auto gap-2 shadow-md py-4 font-bold">
            {primaryActionText} <ArrowRight className="w-4 h-4" />
          </Button>
        )}

        {secondaryActionText && (
          secondaryActionHref ? (
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 py-4 font-bold">
              <Link href={secondaryActionHref}>{secondaryActionText}</Link>
            </Button>
          ) : (
            <Button variant="outline" size="lg" onClick={onSecondaryClick} className="w-full sm:w-auto gap-2 py-4 font-bold">
              {secondaryActionText}
            </Button>
          )
        )}
      </div>
    </div>
  );
};
