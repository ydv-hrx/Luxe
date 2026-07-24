import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const GlassInput: React.FC<GlassInputProps> = ({
  label,
  error,
  helperText,
  icon,
  className,
  id,
  ...props
}) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold tracking-wider uppercase text-neutral-600">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3.5 text-neutral-400 pointer-events-none">{icon}</div>}
        <input
          id={inputId}
          className={twMerge(
            clsx(
              'w-full bg-white/70 backdrop-blur-md border border-neutral-300 rounded-xl py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black',
              icon ? 'pl-10 pr-4' : 'px-4',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )
          )}
          {...props}
        />
      </div>
      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-neutral-500">{helperText}</p>
      ) : null}
    </div>
  );
};
