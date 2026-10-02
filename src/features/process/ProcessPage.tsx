import React, { useState } from 'react';
import { Search, Compass, Layers, Rocket, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
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
      case 'Layers': return Layers;
      case 'Rocket': return Rocket;
      default: return BarChart3;
    }
  };

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <SectionHeading
          badge="Agile Methodology"
          title="How We"
          highlight="Work"
          subtitle="Our five-step structured delivery pipeline engineered to turn ambitious concepts into high-performing commercial setups."
          align="center"
        />

        {/* Step Selector Horizontal Bar */}
        <div className="relative">
          {/* Neon connecting track */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-dark-800 -translate-y-1/2 z-0">
            <div
              className="h-full bg-electric-gradient transition-all duration-500 shadow-glow-sm"
              style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getIcon(step.icon);
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-dark-800 border-electric-cyan shadow-glow-sm -translate-y-2'
                      : 'bg-dark-900/90 border-white/10 hover:border-white/20 hover:bg-dark-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-electric-cyan' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-electric-cyan text-dark-950 font-bold' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white block">{step.title}</h4>
                    <span className="text-[11px] text-slate-400 line-clamp-1">{step.shortDesc}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Deep-Dive Card */}
        {(() => {
          const current = PROCESS_STEPS[activeStepIndex];
          const Icon = getIcon(current.icon);

          return (
            <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/80 border border-electric-500/30 backdrop-blur-2xl shadow-glow-md text-left space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-electric-gradient flex items-center justify-center text-white shadow-glow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-electric-cyan font-bold tracking-widest uppercase">
                      STEP {current.step} OF 05
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(prev => prev - 1)}
                    className="px-3.5 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-xs font-semibold text-slate-300 disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStepIndex(prev => prev + 1)}
                    className="px-3.5 py-1.5 rounded-xl bg-electric-600 text-xs font-semibold text-white disabled:opacity-40"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-lg font-bold text-white">Objective & Execution</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-900/90 border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold text-electric-cyan uppercase tracking-wider">
                    Key Phase Deliverables
                  </h4>
                  <div className="space-y-2">
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

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to initiate Step 01: Discover?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Book your initial 30-minute discovery consultation with our technical and creative directors today.
          </p>
          <Button variant="primary" onClick={onOpenQuote} glow>
            Start Discover Phase
          </Button>
        </div>

      </div>
    </div>
  );
};
