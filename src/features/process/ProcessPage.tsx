import React, { useState } from 'react';
import { Search, Compass, Palette, Code2, Rocket, BarChart3, CheckCircle2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/processData';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Button } from '../../components/ui/Button';
import { SpotlightCard } from '../../components/ui/SpotlightCard';

export interface ProcessPageProps {
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return Search;
      case 'Compass': return Compass;
      case 'Palette': return Palette;
      case 'Code2': return Code2;
      case 'Rocket': return Rocket;
      default: return BarChart3;
    }
  };

  const current = PROCESS_STEPS[activeStepIndex];
  const CurrentIcon = getIcon(current.icon);

  return (
    <div className="py-12 md:py-24 space-y-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <SectionTitle
          chapterNumber="06"
          eyebrow="خارطة طريق التنفيذ الموحدة"
          title="منهجية العمل المكونة من 6 خطوات متكاملة"
          highlightedWord="6 خطوات متكاملة"
          description="من الاستكشاف الأول والهندسة الاستراتيجية إلى التنسيق المتزامن للإنتاج والإطلاق والتحسين المستمر."
          align="center"
        />

        {/* 1. ANIMATED TIMELINE BAR WITH 6 STEPS (RTL SUPPORTED) */}
        <div className="relative pt-6">
          {/* Background Connecting Rail */}
          <div className="hidden lg:block absolute top-[45px] start-12 end-12 h-1 bg-white/10 z-0 rounded-full overflow-hidden">
            {/* Active Filled Line with Gradient */}
            <div
              className="h-full bg-gradient-to-l from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-700 ease-out shadow-[0_0_12px_#00D2FF]"
              style={{
                width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getIcon(step.icon);
              const isActive = activeStepIndex === idx;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-right transition-all duration-500 flex flex-col justify-between cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#0A1428] border-cyan-400 shadow-[0_0_25px_rgba(0,102,255,0.35)] -translate-y-2 scale-100'
                      : isPast
                      ? 'bg-[#060B16] border-blue-500/40 opacity-90 scale-95'
                      : 'bg-[#040812]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#070D1C] opacity-70 scale-90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-600 to-cyan-400 text-white font-bold shadow-[0_0_15px_#00D2FF]'
                          : isPast
                          ? 'bg-blue-950 text-cyan-400 border border-blue-500/30'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-sm font-bold block ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {step.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {step.shortDesc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. ACTIVE STEP EXPANDED DEEP-DIVE CARD */}
        <SpotlightCard
          className="p-8 sm:p-12 space-y-8 animate-in fade-in duration-500"
          spotlightColor="rgba(0, 102, 255, 0.2)"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] shrink-0">
                <CurrentIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
                  المرحلة {current.step} من 06 // PROCESS EXECUTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Prev / Next Steppers */}
            <div className="flex items-center gap-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => prev - 1)}
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4" />
                <span>السابق</span>
              </button>
              <button
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => prev + 1)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white disabled:opacity-30 hover:shadow-cyan-500/25 shadow-md transition-all cursor-pointer flex items-center gap-1"
              >
                <span>المرحلة التالية</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-lg font-bold text-white">الهدف التشغيلي والمسار التنفيذي</h4>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#040813]/90 border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                المخرجات الأساسية والمحطات المنجزة
              </h4>
              <div className="space-y-2.5">
                {current.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* 3. CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#060D1E] via-[#09152F] to-[#040814] border border-cyan-400/30 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            هل أنت مستعد لبدء الخطوة 01: الاستكشاف والتحليل؟
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            احجز جلسة استكشافية أولية مدتها 30 دقيقة مع مديرينا الفنيين والإبداعيين اليوم لوضع حجر الأساس لمشروعك.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={onOpenQuote} glow icon={ArrowLeft}>
              ابدأ جلسة الاستكشاف الأولى
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
