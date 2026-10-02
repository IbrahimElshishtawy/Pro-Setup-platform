import React from 'react';
import { ArrowRight, Megaphone, Palette, Code2, ShieldCheck, Camera, Check } from 'lucide-react';
import { ActivePage } from '../../core/types/common';

export interface ServicesOverviewProps {
  onNavigate: (page: ActivePage) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'digital-marketing',
      icon: Megaphone,
      title: 'Digital Marketing',
      points: [
        'Social Media Management',
        'Paid Advertising (PPC)',
        'Content Creation',
        'Marketing Strategy',
      ],
      target: 'digital-marketing' as ActivePage,
      gradient: 'from-blue-600/20 via-blue-500/5 to-transparent',
    },
    {
      id: 'design-branding',
      icon: Palette,
      title: 'Design & Branding',
      points: [
        'Logo Design',
        'Brand Identity Systems',
        'Social Media Designs',
        'Posters & Banners',
      ],
      target: 'design-branding' as ActivePage,
      gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    },
    {
      id: 'software-technology',
      icon: Code2,
      title: 'Software & Technology',
      points: [
        'Websites & Web Apps',
        'Mobile Applications (Flutter)',
        'Custom Software & ERP',
        'E-commerce Solutions',
      ],
      target: 'software-technology' as ActivePage,
      gradient: 'from-electric-600/25 via-blue-500/5 to-transparent',
    },
    {
      id: 'security-surveillance',
      icon: ShieldCheck,
      title: 'Security & Surveillance',
      points: [
        'CCTV Installation',
        'Security Camera Systems',
        'Network Setup & Cabling',
        'Access Control & NVR',
      ],
      target: 'security-surveillance' as ActivePage,
      gradient: 'from-indigo-600/20 via-blue-500/5 to-transparent',
    },
    {
      id: 'photography-video',
      icon: Camera,
      title: 'Photography & Production',
      points: [
        'Product Photography',
        'Commercial Photography',
        'Video Production (Cinema 4K)',
        'Social Media Reels & Ads',
      ],
      target: 'photography-video' as ActivePage,
      gradient: 'from-blue-500/20 via-cyan-500/5 to-transparent',
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-dark-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Matching Screenshot Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              What We Do
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed pt-1">
              We provide integrated solutions that combine creativity, technology and strategy to help your brand stand out and achieve its goals.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-electric-cyan transition-colors self-start md:self-end group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.target)}
                className="group relative rounded-2xl p-6 bg-dark-800/80 hover:bg-dark-750/90 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm cursor-pointer flex flex-col justify-between"
              >
                {/* Subtle top card glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="space-y-5 relative z-10 text-left">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-electric-600/10 border border-electric-500/25 flex items-center justify-center text-electric-cyan group-hover:scale-110 group-hover:bg-electric-600/20 group-hover:shadow-glow-sm transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {card.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs text-slate-400">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-electric-cyan/70 shrink-0" />
                        <span className="truncate">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <div className="pt-6 relative z-10 text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-electric-cyan transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
