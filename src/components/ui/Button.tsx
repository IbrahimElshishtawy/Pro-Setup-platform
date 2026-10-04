import React, { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'start' | 'end';
  magnetic?: boolean;
  glow?: boolean;
  isLoading?: boolean;
  shine?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'start',
  magnetic = false,
  glow = false,
  isLoading = false,
  shine = true,
  className = '',
  disabled,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || disabled || isLoading) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  // Base styles
  const baseClasses =
    'relative inline-flex items-center justify-center font-bold transition-all duration-300 select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  // Variant styles
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25 border border-white/20 active:scale-[0.98]',
    secondary:
      'bg-dark-800 text-slate-100 border border-slate-700 hover:border-slate-500 hover:bg-dark-750 active:scale-[0.98]',
    glass:
      'bg-white/[0.06] text-white border border-white/[0.12] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/[0.2] active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent active:scale-[0.98]',
  }[variant];

  // Size styles
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5',
  }[size];

  // Glow effect
  const glowClasses = glow
    ? 'shadow-[0_0_25px_rgba(0,102,255,0.45)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)]'
    : '';

  return (
    <button
      ref={btnRef}
      disabled={disabled || isLoading}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: magnetic ? `translate3d(${position.x}px, ${position.y}px, 0)` : undefined,
      }}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${glowClasses} ${className}`}
      {...props}
    >
      {/* Animated Shine Sweep on Hover */}
      {shine && variant === 'primary' && (
        <span
          className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Loading Spinner */}
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'start' && (
            <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
          )}
          <span className="relative z-10">{children}</span>
          {Icon && iconPosition === 'end' && (
            <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
          )}
        </>
      )}
    </button>
  );
};
