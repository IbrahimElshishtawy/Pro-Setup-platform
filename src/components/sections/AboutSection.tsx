import React from 'react';
import { ABOUT_STATS, ABOUT_MANIFESTO } from '../../data/aboutData';
import { COMPANY_INFO } from '../../core/config/constants';
import { SectionTitle } from '../ui/SectionTitle';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Button } from '../ui/Button';
import { useInView } from '../../hooks/useInView';
import { useCounter } from '../../hooks/useCounter';
import { ShieldCheck, Sparkles, Layers, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface StatCounterCardProps {
  stat: typeof ABOUT_STATS[0];
  isVisible: boolean;
}

const StatCounterCard: React.FC<StatCounterCardProps> = ({ stat, isVisible }) => {
  const count = useCounter(stat.value, 1800, isVisible);

  return (
    <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between" spotlightColor="rgba(0, 210, 255, 0.15)">
      <div>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-white">
            {count}
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
            {stat.suffix}
          </span>
        </div>
        <h4 className="mt-2 text-base md:text-lg font-bold text-white">
          {stat.label}
        </h4>
      </div>
      <p className="mt-3 text-xs md:text-sm text-slate-400 font-normal leading-relaxed">
        {stat.description}
      </p>
    </SpotlightCard>
  );
};

export interface AboutSectionProps {
  onExploreMore?: () => void;
  onOpenQuote?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreMore,
  onOpenQuote,
}) => {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="relative py-10 md:py-14 overflow-hidden text-right">
      {/* Background Decorative Tech Grid with Radial Mask */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

      {/* Atmospheric Glow Blobs */}
      <div className="absolute top-1/3 -start-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          chapterNumber="00"
          eyebrow="عن كيان PS الدولي"
          title="نحن لا نكتفي بتقديم الخدمات.. بل نبني منظومات المستقبل"
          highlightedWord="منظومات المستقبل"
          description={COMPANY_INFO.detailedDescription}
          align="center"
          className="mb-8 md:mb-10"
        />

        {/* Split Cinematic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Visual Side: Layered Glass Composition & Manifesto */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Visual Glass Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#070D1B]/80 backdrop-blur-2xl p-8 md:p-10 shadow-2xl">
              
              {/* Subtle top light sweep */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div className="flex items-center gap-3 text-cyan-400 text-xs font-mono mb-6">
                <Layers className="w-4 h-4" />
                <span>EXECUTIVE MANIFESTO // 01</span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug tracking-tight">
                "{ABOUT_MANIFESTO.quote}"
              </blockquote>

              <p className="mt-6 text-sm md:text-base text-slate-300 font-normal leading-relaxed">
                {ABOUT_MANIFESTO.story}
              </p>

              {/* Verified Pillars List */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>عقد تجاري موحد واتفاقية مستوى خدمة احترافية (SLA)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>منظومة متكاملة: كود، شبكات أمنية، إنتاج مرئي، وإعلانات</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>فريق قيادي مباشر واستجابة تنفيذية سريعة على مدار 24/7</span>
                </div>
              </div>

              {/* Bottom Authority Stamp */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10 text-xs text-slate-400">
                <div>
                  <span className="block font-bold text-white">{ABOUT_MANIFESTO.author}</span>
                  <span className="text-[11px] font-mono text-cyan-400">{ABOUT_MANIFESTO.authorRole}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20 text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Verified Quality</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Detail Card */}
            <div className="hidden sm:flex absolute -bottom-6 -start-6 items-center gap-3 p-4 rounded-2xl bg-[#091122]/90 border border-cyan-400/30 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-white">معايير دولية صارمة</div>
                <div className="text-[10px] text-slate-400">بدون هدر الوقت والميزانيات</div>
              </div>
            </div>
          </div>

          {/* Statistics Grid Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {ABOUT_STATS.map((stat) => (
                <StatCounterCard key={stat.id} stat={stat} isVisible={isInView} />
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowLeft}
                glow
                onClick={onOpenQuote}
              >
                انضم لقائمة الشركاء النخبة
              </Button>
              {onExploreMore && (
                <Button
                  variant="glass"
                  size="lg"
                  onClick={onExploreMore}
                >
                  تعرف على فريق القيادة والمنهجية
                </Button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
