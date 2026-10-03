import React from 'react';
import { 
  Sparkles, 
  Award, 
  ExternalLink, 
  MessageSquare, 
  ArrowLeft, 
  Megaphone, 
  ShieldCheck, 
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { TECHNOLOGY_PARTNERS, FEATURED_COMMERCIAL_AD } from '../../data/sponsorsData';
import { Button } from '../../components/common/Button';
import { ENV } from '../../core/config/env';

interface SponsorsAndFeaturedAdsProps {
  onOpenSponsorshipModal: () => void;
  onOpenQuote: (service?: string) => void;
}

export const SponsorsAndFeaturedAds: React.FC<SponsorsAndFeaturedAdsProps> = ({
  onOpenSponsorshipModal,
  onOpenQuote,
}) => {
  const getWhatsAppLink = (messageText: string) => {
    const cleanPhone = (ENV.CONTACT.WHATSAPP || '201234567890').replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(messageText);
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  };

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden text-right border-t border-white/[0.06] bg-dark-950/60">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-amber-500/10 via-electric-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>المنظومة التجارية • الرعاة والعملاء المميزون</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            شركاء النجاح{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-amber-400 to-electric-cyan">
              والمساحات التجارية المميزة
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            في PS، نعتز بالتحالف مع كبرى المنصات العالمية، ونوفر لعملائنا وشركائنا مساحات إعلانية وتجارية لإبراز مشروعاتهم والوصول إلى قاعدة أعمال استثنائية.
          </p>
        </div>

        {/* 1. FEATURED COMMERCIAL AD SPOTLIGHT BANNER */}
        {FEATURED_COMMERCIAL_AD.isActive && (
          <div className="mb-16 rounded-3xl bg-gradient-to-r from-[#0C1527] via-[#09101F] to-[#120E05] border border-amber-500/30 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden group">
            {/* Top Amber Highlight Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Text Information (Right in RTL) */}
              <div className="lg:col-span-7 space-y-5 text-right">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                    <span>{FEATURED_COMMERCIAL_AD.badge}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {FEATURED_COMMERCIAL_AD.clientType}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug">
                    {FEATURED_COMMERCIAL_AD.adTitle}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-amber-400">
                    {FEATURED_COMMERCIAL_AD.adSubtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {FEATURED_COMMERCIAL_AD.description}
                </p>

                {/* Offer Callout */}
                {FEATURED_COMMERCIAL_AD.offerText && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm font-bold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{FEATURED_COMMERCIAL_AD.offerText}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowLeft}
                    glow
                    onClick={() => onOpenQuote('استشارة تجهيز مماثلة للعميل المميز')}
                    className="font-bold text-xs sm:text-sm"
                  >
                    {FEATURED_COMMERCIAL_AD.ctaText}
                  </Button>

                  <a
                    href={getWhatsAppLink(FEATURED_COMMERCIAL_AD.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>محادثة واتساب مخصصة</span>
                  </a>
                </div>
              </div>

              {/* Media Visual (Left in RTL) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/11] border border-white/10 shadow-2xl bg-dark-950 group-hover:border-amber-400/40 transition-all duration-500">
                  <img
                    src={FEATURED_COMMERCIAL_AD.bannerImage}
                    alt={FEATURED_COMMERCIAL_AD.clientName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-dark-950/90 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
                    <span>{FEATURED_COMMERCIAL_AD.clientName}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. GLOBAL TECHNOLOGY PARTNERS & HARDWARE SPONSORS */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <span className="text-xs sm:text-sm font-bold text-slate-300">
              شركاء التكنولوجيا والبنية التحتية المعتمدين لدى PS:
            </span>
            <span className="text-[11px] font-mono text-electric-cyan">
              GLOBAL TECH ALLIANCES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECHNOLOGY_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="group p-4 rounded-2xl bg-dark-900/80 border border-white/10 hover:border-electric-cyan/40 transition-all duration-300 text-center flex flex-col justify-between items-center hover:-translate-y-1"
              >
                <div className="w-full text-center py-2">
                  <span className="font-mono font-black text-sm text-slate-200 group-hover:text-electric-cyan transition-colors tracking-wider">
                    {partner.logoText}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-full mt-2">
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BECOME A SPONSOR / FEATURED CLIENT CALLOUT */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-electric-600/15 via-dark-900 to-amber-500/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right">
            <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0">
              <Megaphone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                هل ترغب في وضع إعلان لشركتك أو الانضمام كراعٍ رسمي لـ PS؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                نوفر مساحات ترويجية ورعاية استراتيجية لمشاريع عملائنا البارزين مع وصول استثنائي لقادة الأعمال.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
            <a
              href={getWhatsAppLink('مرحباً فريق PS، أود الاستفسار عن فرص الرعاية وحجز مساحة إعلانية تجارية مميزة لشركتي.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-xs font-bold transition-all"
            >
              استفسار رعاية سريع
            </a>

            <Button
              variant="primary"
              size="sm"
              icon={ArrowLeft}
              glow
              onClick={onOpenSponsorshipModal}
              className="text-xs font-bold"
            >
              احجز مساحة إعلانية
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
