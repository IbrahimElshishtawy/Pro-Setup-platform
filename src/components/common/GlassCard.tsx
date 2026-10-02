import React from 'react';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glowing' | 'interactive';
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className = '',
  glowColor = 'none',
  ...props
}) => {
  const baseStyles = "relative rounded-2xl overflow-hidden transition-all duration-300";

  const variantStyles = {
    default: "bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] shadow-glass",
    elevated: "bg-dark-750/90 backdrop-blur-2xl border border-white/[0.12] shadow-2xl",
    glowing: "bg-dark-800/90 backdrop-blur-xl border border-electric-500/30 shadow-glow-sm",
    interactive: "bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] hover:border-electric-500/50 hover:bg-dark-750/90 hover:shadow-glow-md hover:-translate-y-1.5 cursor-pointer",
  };

  const glowStyles = {
    blue: "before:absolute before:inset-0 before:bg-radial-gradient before:from-electric-600/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none",
    cyan: "before:absolute before:inset-0 before:bg-radial-gradient before:from-electric-cyan/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none",
    none: "",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${glowStyles[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
