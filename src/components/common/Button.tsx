import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  glow = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-500/50 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: `bg-electric-gradient text-white hover:brightness-110 shadow-glow-sm hover:shadow-glow-md active:shadow-none`,
    secondary: `bg-dark-750 hover:bg-dark-700 text-white border border-slate-700/60 hover:border-electric-500/40`,
    outline: `bg-transparent text-slate-200 border border-slate-700/80 hover:border-electric-500 hover:text-white hover:bg-electric-600/10 shadow-sm`,
    glass: `bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-electric-400/40 backdrop-blur-md`,
    ghost: `bg-transparent text-slate-300 hover:text-electric-cyan hover:bg-white/[0.03]`,
  };

  const glowStyle = glow ? "shadow-glow-md hover:shadow-glow-lg" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      ) : null}

      <span>{children}</span>

      {!isLoading && Icon && iconPosition === 'right' ? (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </button>
  );
};
