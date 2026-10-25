import React from 'react';
import { CTA_BANNER_DATA } from '../../data/ctaData';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../core/config/constants';
import { ArrowLeft, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

export interface CtaBannerProps {
  onContactClick?: () => void;
  onOpenQuote?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onContactClick,
  onOpenQuote,
}) => {
  const cleanPhone = (COMPANY_INFO.contact.whatsappNumber || '201099959133').replace(/[^0-9]/g, '');
  const whatsappHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً فريق PS الدولي، أود طلب دراسة وتجهيز لمشروعي والاستفادة من عرض الافتتاح.'
  )}`;

  return (
    <section className="relative py-10 md:py-14 overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dramatic Container with Gradient Border & Atmospheric Blur */}
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden bg-gradient-to-br from-[#060D1E] via-[#09152F] to-[#040814] border border-cyan-400/30 shadow-[0_20px_70px_rgba(0,102,255,0.25)]">
          
          {/* Animated Ambient Color Blobs */}
          <div className="absolute -top-32 -start-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-32 -end-32 w-80 h-80 bg-blue-600/25 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Faint Technical Grid Background */}
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

          {/* Foreground Narrative */}
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs md:text-sm font-bold shadow-md mb-4">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>{CTA_BANNER_DATA.eyebrow}</span>
            </div>

            {/* Giant Dramatic Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight">
              {CTA_BANNER_DATA.title.replace(CTA_BANNER_DATA.highlightWord, '')}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-amber-300 inline-block">
                {CTA_BANNER_DATA.highlightWord}
              </span>
            </h2>

            {/* Sub-text description */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {CTA_BANNER_DATA.description}
            </p>

            {/* Dual Magnetic Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 w-full">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowLeft}
                glow
                magnetic
                onClick={onOpenQuote || onContactClick}
                className="w-full sm:w-auto font-black shadow-glow-md text-sm md:text-base px-8 py-4"
              >
                {CTA_BANNER_DATA.primaryCtaText}
              </Button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm md:text-base shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>{CTA_BANNER_DATA.secondaryCtaText}</span>
              </a>
            </div>

            {/* Reassurance Guarantee Footer */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{CTA_BANNER_DATA.guaranteeText}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
