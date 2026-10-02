import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SOCIAL_PLATFORMS } from '../../components/common/SocialIcons';

interface SocialShowcaseCard {
  id: string;
  name: string;
  desc: string;
  badge: string;
  url: string;
  platformId: 'instagram' | 'tiktok' | 'linkedin' | 'youtube' | 'whatsapp';
  color: string;
  gradient: string;
}

export const SocialMediaShowcase: React.FC = () => {
  const showcaseCards: SocialShowcaseCard[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      desc: 'Creative work, projects, photography and visual content.',
      badge: 'Visual Feeds & Stories',
      url: COMPANY_INFO.social.instagram,
      platformId: 'instagram',
      color: '#E4405F',
      gradient: 'from-[#E4405F]/15 via-[#833AB4]/10 to-transparent',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      desc: 'Short-form videos, creative ideas and behind-the-scenes content.',
      badge: 'Shorts & Creative BTS',
      url: COMPANY_INFO.social.tiktok,
      platformId: 'tiktok',
      color: '#00F2FE',
      gradient: 'from-[#00F2FE]/15 via-[#FE2C55]/10 to-transparent',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      desc: 'Company updates, technology projects and business solutions.',
      badge: 'Enterprise & Network',
      url: COMPANY_INFO.social.linkedin,
      platformId: 'linkedin',
      color: '#0A66C2',
      gradient: 'from-[#0A66C2]/15 via-blue-900/10 to-transparent',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      desc: 'Commercial videos, project showcases and production content.',
      badge: '4K Commercials & Reels',
      url: COMPANY_INFO.social.youtube,
      platformId: 'youtube',
      color: '#FF0000',
      gradient: 'from-[#FF0000]/15 via-red-950/10 to-transparent',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      desc: 'Talk directly with our team for quick questions and project kickoff.',
      badge: 'Direct Client Line',
      url: COMPANY_INFO.social.whatsapp,
      platformId: 'whatsapp',
      color: '#25D366',
      gradient: 'from-[#25D366]/15 via-emerald-950/10 to-transparent',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-dark-950 border-t border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-radial-gradient from-electric-600/10 via-electric-cyan/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community & Content</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Stay <span className="text-electric-gradient">Connected</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Follow PRO SETUP and discover our latest projects, campaigns, designs, and behind-the-scenes work.
          </p>
        </div>

        {/* 5-Card Staggered Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {showcaseCards.map((card, idx) => {
            const platform = SOCIAL_PLATFORMS.find(p => p.id === card.platformId);
            const Icon = platform ? platform.svg : MessageSquare;

            return (
              <div
                key={card.id}
                className="group relative rounded-3xl p-6 sm:p-7 bg-dark-900/90 border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between text-left overflow-hidden"
              >
                {/* Subtle gradient hover layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${card.color}18`,
                        borderColor: `${card.color}35`,
                        borderWidth: '1px',
                        color: card.color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 pt-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors flex items-center justify-between">
                      <span>{card.name}</span>
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Follow Button */}
                <div className="relative z-10 pt-6 mt-4 border-t border-white/[0.06]">
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-dark-800/80 group-hover:bg-electric-600 text-xs font-bold text-white border border-white/10 group-hover:border-electric-cyan/40 transition-all duration-300 group-hover:shadow-glow-sm"
                  >
                    <span>{card.id === 'whatsapp' ? 'Chat Directly' : `Follow on ${card.name}`}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
