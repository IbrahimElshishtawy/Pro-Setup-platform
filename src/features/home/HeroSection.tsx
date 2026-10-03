import React from 'react';
import { ArrowLeft, Play, Code2, ShieldCheck, Camera, TrendingUp, Palette, Sparkles, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { Button } from '../../components/common/Button';
import { SocialIcons } from '../../components/common/SocialIcons';
import { ENV } from '../../core/config/env';

export interface HeroSectionProps {
  onExploreServices: () => void;
  onWatchVideo: () => void;
  onSelectVertical: (verticalId: string) => void;
  onOpenQuote?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onWatchVideo,
  onSelectVertical,
  onOpenQuote,
}) => {
  const cleanPhone = (ENV.CONTACT.WHATSAPP || '201234567890').replace(/[^0-9]/g, '');
  const whatsappHeroHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً فريق PS الدولي، أود الاستفسار عن تجهيز متكامل لأعمالي والاستفادة من عرض الافتتاح للشركاء الأوائل.'
  )}`;

  return (
    <section className="relative pt-8 pb-20 md:py-24 lg:py-28 overflow-hidden text-right">
      
      {/* 1. International Enterprise Glass Headquarters Hero Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img 
          src="/images/ps_hero_backdrop.jpg" 
          alt="PS International Enterprise Headquarters" 
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
        />
        {/* Dark Cinematic Vignette & Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-transparent to-dark-950" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,102,255,0.18),rgba(255,255,255,0))]" />
      </div>

      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* RIGHT COLUMN (In RTL): Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-right">
            
            {/* Top Brand Pill & Global Reach */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-electric-cyan/30 text-xs md:text-sm font-bold shadow-lg backdrop-blur-md">
              <span className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-amber-400 to-amber-600 text-dark-950 font-black text-[11px]">
                PS
              </span>
              <span className="text-white font-extrabold tracking-wider">PRO SETUP INTERNATIONAL</span>
              <span className="text-electric-cyan">•</span>
              <span className="text-amber-300 font-semibold">كيان التجهيزات الشاملة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight text-white leading-[1.22]">
              كل احتياجات أعمالك في{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-electric-cyan via-blue-400 to-amber-300 inline-block">
                مكان واحد
              </span>
            </h1>

            {/* Sub-description with Enterprise Punch */}
            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              {COMPANY_INFO.subDescription}
            </p>

            {/* Dual CTA Buttons & Quick WhatsApp Option */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowLeft}
                glow
                onClick={onOpenQuote || onExploreServices}
                className="w-full sm:w-auto font-bold shadow-glow-md"
              >
                اطلب تجهيز مشروعك الآن
              </Button>

              <a
                href={whatsappHeroHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>محادثة واتساب فورية</span>
              </a>

              <Button
                variant="glass"
                size="lg"
                icon={Play}
                iconPosition="right"
                onClick={onWatchVideo}
                className="w-full sm:w-auto text-slate-200 hover:text-white font-medium text-xs sm:text-sm"
              >
                الفيديو التعريفي
              </Button>
            </div>

            {/* Live Stats Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>مسؤولية تنفيذ 100% بعقد موحد</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.06]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>عرض الافتتاح التجاري نشط (-25%)</span>
              </div>
            </div>

            {/* Social Media System Row with tooltips */}
            <div className="pt-1">
              <span className="text-xs font-bold text-slate-400 block mb-2.5">
                قنوات المتابعة والتواصل الدولية:
              </span>
              <SocialIcons size="md" variant="glow" />
            </div>
          </div>

          {/* LEFT COLUMN (In RTL): Interactive Floating Glass Cards Grid */}
          <div className="lg:col-span-6 relative perspective-1000">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-electric-600/20 via-transparent to-transparent blur-2xl pointer-events-none" />

            {/* The 5 Verticals Grid (Software, Security, Photo/Video, Marketing, Design) */}
            <div className="relative grid grid-cols-12 gap-3 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
              
              {/* Card 1: Software & Code (Top Left) */}
              <div
                onClick={() => onSelectVertical('software-technology')}
                className="col-span-7 group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer aspect-[16/11]"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                  alt="تطوير البرمجيات والأنظمة"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                
                {/* Bottom Pill Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold group-hover:border-electric-cyan/40">
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>برمجيات وتطبيقات</span>
                </div>
              </div>

              {/* Card 2: Security & Surveillance (Top Right) */}
              <div
                onClick={() => onSelectVertical('security-surveillance')}
                className="col-span-5 group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer aspect-[16/14]"
              >
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                  alt="أنظمة كاميرات المراقبة CCTV"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold group-hover:border-electric-cyan/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>أنظمة أمنية CCTV</span>
                </div>
              </div>

              {/* Card 3: Photography & Video (Mid-Right Stack) */}
              <div
                onClick={() => onSelectVertical('photography-video')}
                className="col-span-6 col-start-7 group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer aspect-[16/11]"
              >
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
                  alt="الإنتاج المرئي والتصوير السينمائي"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold group-hover:border-electric-cyan/40">
                  <Camera className="w-3.5 h-3.5 text-electric-cyan" />
                  <span className="truncate">تصوير وإنتاج مرئي</span>
                </div>
              </div>

              {/* Card 4: Digital Marketing (Mid-Left Stack) */}
              <div
                onClick={() => onSelectVertical('digital-marketing')}
                className="col-span-6 group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer aspect-[16/14]"
              >
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
                  alt="التسويق الرقمي وإدارة الحملات"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold group-hover:border-electric-cyan/40">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>تسويق رقمي</span>
                </div>
              </div>

              {/* Card 5: Design & Branding (Bottom Center-Right) */}
              <div
                onClick={() => onSelectVertical('design-branding')}
                className="col-span-6 group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-md cursor-pointer aspect-[16/12]"
              >
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
                  alt="الهوية التجارية والتصميم الإبداعي"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold group-hover:border-electric-cyan/40">
                  <Palette className="w-3.5 h-3.5 text-pink-400" />
                  <span>تصميم وهوية</span>
                </div>
              </div>

            </div>

            {/* Handwritten Floating Badge: "أفكار إبداعية • نتائج حقيقية" */}
            <div className="absolute -bottom-6 -left-2 sm:-bottom-4 sm:left-4 z-20 pointer-events-none transform -rotate-3 select-none text-center">
              <div className="relative font-bold text-xl sm:text-2xl text-white tracking-wide drop-shadow-[0_4px_16px_rgba(0,102,255,0.7)] flex flex-col items-center">
                <span>أفكار إبداعية</span>
                <span className="text-electric-cyan">نتائج حقيقية ملموسة</span>
                <svg className="w-28 sm:w-36 h-4 text-electric-cyan" viewBox="0 0 140 20" fill="none">
                  <path d="M5 12 Q 70 2 135 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
