import React, { useState } from 'react';
import { Search, Compass, Palette, Code2, Rocket, BarChart3, CheckCircle2, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/processData';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

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

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeading
          badge="Structured Delivery Roadmap"
          title="Our 6-Step Integrated"
          highlight="Process"
          subtitle="From initial discovery and strategic architecture to synchronized production, launch, and long-term optimization."
          align="center"
        />

        {/* 1. ANIMATED TIMELINE BAR WITH 6 STEPS (Prompt 18) */}
        <div className="relative pt-6">
          {/* Animated Neon Connecting Track Behind Icons */}
          <div className="hidden lg:block absolute top-[45px] left-8 right-8 h-1 bg-dark-800 z-0">
            <div
              className="h-full bg-electric-gradient transition-all duration-500 shadow-glow-sm"
              style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getIcon(step.icon);
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-dark-900 border-electric-cyan shadow-glow-sm -translate-y-2 scale-[1.02]'
                      : 'bg-dark-950/80 border-white/10 hover:border-white/25 hover:bg-dark-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-electric-cyan' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-electric-cyan text-dark-950 font-bold' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white block">{step.title}</h4>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{step.shortDesc}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. ACTIVE STEP EXPANDED DEEP-DIVE CARD */}
        {(() => {
          const current = PROCESS_STEPS[activeStepIndex];
          const Icon = getIcon(current.icon);

          return (
            <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/85 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-electric-gradient flex items-center justify-center text-white shadow-glow-sm shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-electric-cyan font-bold tracking-widest uppercase">
                      PHASE {current.step} OF 06
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Prev / Next Steppers */}
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(prev => prev - 1)}
                    className="px-3.5 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-xs font-semibold text-slate-300 disabled:opacity-40 hover:text-white"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStepIndex(prev => prev + 1)}
                    className="px-3.5 py-1.5 rounded-xl bg-electric-600 text-xs font-semibold text-white disabled:opacity-40 hover:bg-electric-500 shadow-sm"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-lg font-bold text-white">Operational Objective & Strategic Execution</h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {current.description}
                  </p>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-950/90 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold text-electric-cyan uppercase tracking-wider">
                    Key Phase Deliverables & Milestones
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
            </div>
          );
        })()}

        {/* 3. EXPANDABLE 6-STEP ACCORDION OVERVIEW */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">All 6 Stages at a Glance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getIcon(step.icon);
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="p-5 rounded-2xl bg-dark-800/70 border border-white/5 hover:border-electric-cyan/40 transition-all cursor-pointer space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-electric-cyan font-bold">0{idx + 1}</span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-electric-cyan transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {step.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to initiate Step 01: Discovery?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Schedule an initial 30-minute discovery consultation with our technical and creative directors today.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={onOpenQuote} glow>
              Start Discovery Consultation
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
