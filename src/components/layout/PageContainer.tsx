import React from 'react';

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen bg-dark-900 bg-tech-grid overflow-hidden pt-24 ${className}`}>
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-hero-glow pointer-events-none blur-3xl z-0" />
      {/* Side Decorative Lights */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-electric-600/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-2/3 -right-48 w-96 h-96 rounded-full bg-electric-cyan/5 blur-[120px] pointer-events-none z-0" />

      {/* Main Content Area */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};
