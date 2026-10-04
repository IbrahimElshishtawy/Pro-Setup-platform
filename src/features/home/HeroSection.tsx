import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, MessageSquare, Sparkles, Code2, ShieldCheck, Video, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { Button } from '../../components/ui/Button';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHeadlineLoaded, setIsHeadlineLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsHeadlineLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  // Subtle 3D perspective mouse tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const cleanPhone = (COMPANY_INFO.contact.whatsappNumber || '201099959133').replace(/[^0-9]/g, '');
  const whatsappHeroHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً فريق PS الدولي، أود الاستفسار عن تجهيز متكامل لأعمالي والاستفادة من عرض الافتتاح التجاري.'
  )}`;

  // Headline words for cinematic word-by-word reveal
  const headlineWords = [
    { text: 'كل', isGradient: false },
    { text: 'احتياجات', isGradient: false },
    { text: 'أعمالك', isGradient: false },
    { text: 'في', isGradient: false },
    { text: 'مكان', isGradient: true },
    { text: 'واحد', isGradient: true },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden text-right select-none"
    >
      {/* 1. Deep Cinematic Background Image & Mesh Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src="/images/ps_hero_backdrop.jpg"
          alt="PS International Enterprise Headquarters"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft Vignette & Depth Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-transparent to-[#020617]" />
        
        {/* Large Technical Grid with Radial Mask fading to edges */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_30%,transparent_100%)]" />

        {/* Dynamic slow mesh blobs */}
        <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 end-1/4 w-[450px] h-[450px] bg-cyan-500/12 rounded-full blur-[140px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* START COLUMN (In RTL): Hero Copy & Primary Actions */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-right">
            
            {/* Top Brand Pill with Glow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-cyan-400/30 text-xs md:text-sm font-bold shadow-lg backdrop-blur-md">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-amber-400 to-amber-600 text-dark-950 font-black text-xs shadow-sm">
                PS
              </span>
              <span className="text-white font-extrabold tracking-wider">PRO SETUP INTERNATIONAL</span>
              <span className="text-cyan-400">•</span>
              <span className="text-amber-300 font-semibold">كيان التجهيزات الشاملة للشركات</span>
            </div>

            {/* Oversized Arabic Headline with Word-by-Word Reveal */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.15]">
              {headlineWords.map((word, idx) => (
                <span
                  key={idx}
                  style={{
                    transitionDelay: `${idx * 80 + 100}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  className={`inline-block ms-3 transition-all duration-700 ${
                    isHeadlineLoaded
                      ? 'opacity-100 translate-y-0 blur-0'
                      : 'opacity-0 translate-y-6 blur-md'
                  } ${
                    word.isGradient
                      ? 'text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-amber-300'
                      : 'text-white'
                  }`}
                >
                  {word.text}
                </span>
              ))}
            </h1>

            {/* Sub-description with Enterprise Punch */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {COMPANY_INFO.subDescription}
            </p>

            {/* Primary & Secondary Actions Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowLeft}
                glow
                magnetic
                onClick={onOpenQuote || onExploreServices}
                className="w-full sm:w-auto font-black shadow-glow-md text-sm md:text-base px-8 py-4"
              >
                اطلب تجهيز مشروعك الآن
              </Button>

              <a
                href={whatsappHeroHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>محادثة واتساب فورية</span>
              </a>

              <Button
                variant="glass"
                size="lg"
                icon={Play}
                iconPosition="start"
                onClick={onWatchVideo}
                className="w-full sm:w-auto text-slate-200 hover:text-white font-medium text-xs sm:text-sm px-5 py-3.5"
              >
                الفيديو التعريفي
              </Button>
            </div>

            {/* Trust Guarantee Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>مسؤولية تنفيذ 100% بعقد دولي موحد</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/[0.06]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>عرض الشركاء المؤسسين مفعل (-25%)</span>
              </div>
            </div>

          </div>

          {/* END COLUMN (In RTL): 3D Floating Glass Capability Panels */}
          <div className="lg:col-span-5 relative perspective-1000 hidden md:block">
            <div
              className="relative w-full h-[520px] transition-transform duration-500 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * -7}deg) rotateX(${mousePos.y * 7}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Panel 1: Software & Web Systems (Top Depth) */}
              <div
                onClick={() => onSelectVertical('software-technology')}
                style={{ transform: 'translateZ(40px)' }}
                className="absolute top-2 start-4 end-12 p-4 rounded-2xl bg-[#080E1C]/85 border border-cyan-400/30 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-cyan-300 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                    <Code2 className="w-4 h-4" />
                    <span>SOFTWARE & ARCHITECTURE</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono">
                    v2.4 READY
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-300 bg-dark-950/70 p-2.5 rounded-lg border border-white/5 space-y-1">
                  <div className="text-cyan-400">$ ps.deployEnterpriseSystem();</div>
                  <div className="text-slate-400 text-[11px]">→ Architecture: Next.js + Flutter + Cloud</div>
                  <div className="text-emerald-400 text-[11px]">✓ Status: 100% Operational & Scalable</div>
                </div>
              </div>

              {/* Panel 2: CCTV & Security Systems (Mid-Left Depth) */}
              <div
                onClick={() => onSelectVertical('security-surveillance')}
                style={{ transform: 'translateZ(70px)' }}
                className="absolute top-44 start-10 end-4 p-4 rounded-2xl bg-[#0B152A]/90 border border-blue-500/30 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>CCTV SURVEILLANCE & ACCESS</span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE 4K
                  </span>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden border border-white/10 scanlines">
                  <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
                    alt="CCTV Security Grid"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute bottom-2 start-2 bg-dark-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300">
                    CAM_01 // SECURE_FACILITY
                  </div>
                </div>
              </div>

              {/* Panel 3: Cinematic Production & Media (Bottom Depth) */}
              <div
                onClick={() => onSelectVertical('photography-video')}
                style={{ transform: 'translateZ(90px)' }}
                className="absolute bottom-4 start-0 end-16 p-4 rounded-2xl bg-[#091222]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-purple-400 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs">
                    <Video className="w-4 h-4" />
                    <span>CINEMATIC 4K COMMERCIALS</span>
                  </div>
                  <span className="text-[10px] text-red-400 font-bold flex items-center gap-1 font-mono">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    REC 24FPS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-12 rounded-lg bg-black/60 border border-white/10 overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=300&q=80"
                      alt="Cinematic production"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs text-slate-300">
                    <div className="font-bold text-white">إعلانات تجارية سينمائية 4K</div>
                    <div className="text-[10px] text-slate-400 font-mono">RED & ARRI • Custom Sound Design</div>
                  </div>
                </div>
              </div>

              {/* Panel 4: Digital Marketing Growth Badge (Floating Accent) */}
              <div
                onClick={() => onSelectVertical('digital-marketing')}
                style={{ transform: 'translateZ(110px)' }}
                className="absolute -bottom-2 -end-2 p-3.5 rounded-xl bg-gradient-to-br from-[#0D1C38] to-[#060D1A] border border-cyan-400/40 shadow-xl cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>عائد إعلاني ROAS: 5.2x</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">
                  +1.4M Impression Reach
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
