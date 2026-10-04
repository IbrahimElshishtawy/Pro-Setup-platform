import React from 'react';
import { INDUSTRIES_SERVED } from '../../data/marqueeData';
import {
  Cpu,
  Building2,
  Activity,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
  GraduationCap,
  Car,
  Rocket,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Building2,
  Activity,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
  GraduationCap,
  Car,
  Rocket,
  ShieldCheck,
};

export const TrustMarquee: React.FC = () => {
  // Double list for seamless infinite loop
  const marqueeItems = [...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED];

  return (
    <section className="relative w-full py-8 md:py-12 border-y border-white/[0.06] bg-[#030712]/90 backdrop-blur-md overflow-hidden select-none">
      {/* Narrative Label */}
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>القطاعات والصناعات المجهزة تحت مظلة PS الدولية:</span>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-4 md:gap-6 animate-marquee-rtl hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Briefcase;
            return (
              <div
                key={`${item.id}-${idx}`}
                className="group flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 group-hover:scale-110 group-hover:text-cyan-300 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                    {item.nameAr}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.nameEn}
                  </span>
                </div>
                {item.badge && (
                  <span className="ms-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.badge}
                  </span>
                )}
                {/* Subtle vertical separator */}
                <div className="ms-3 w-px h-5 bg-white/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
