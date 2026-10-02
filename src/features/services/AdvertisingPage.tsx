import React, { useState } from 'react';
import { TrendingUp, Lightbulb, PenTool, Video, Target, BarChart2, Award, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface AdvertisingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const AdvertisingPage: React.FC<AdvertisingPageProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pipelineSteps = [
    {
      step: '01',
      title: 'Campaign Idea & Unique Angle',
      subtitle: 'Psychological Hook',
      desc: 'We unearth your brand’s unfair advantage and formulate a high-converting core message that resonates with your ideal buyer’s deepest pain points.',
      icon: Lightbulb,
      kpi: 'Clear Emotional Resonance',
    },
    {
      step: '02',
      title: 'Creative Design & Key Visuals',
      subtitle: 'Scroll-Stopping Aesthetics',
      desc: 'Our design team generates 30+ visual variations including contrast hooks, split-screen comparisons, and typography that demands immediate attention.',
      icon: PenTool,
      kpi: '< 2s Visual Stop Rate',
    },
    {
      step: '03',
      title: 'Content & Video Production',
      subtitle: 'High-Impact Assets',
      desc: 'In-house cinema production shooting 4K reels, authentic UGC product unboxings, and dynamic motion graphics formatted for all ad specs.',
      icon: Video,
      kpi: '90%+ Video Completion',
    },
    {
      step: '04',
      title: 'Omnichannel Advertising Launch',
      subtitle: 'Algorithmic Deployment',
      desc: 'Deploying campaigns across Meta Advantage+, Google Performance Max, TikTok Spark Ads, and LinkedIn with automated budget pacing.',
      icon: TrendingUp,
      kpi: 'Zero Budget Wastage',
    },
    {
      step: '05',
      title: 'Granular Audience Targeting',
      subtitle: 'Intent & Cohorts',
      desc: 'Leveraging pixel server-side events, lookalike modeling, and high-frequency retargeting to capture high-lifetime-value customers.',
      icon: Target,
      kpi: 'Sub-$15 Customer Acquisition',
    },
    {
      step: '06',
      title: 'Deep Analytics & Attribution',
      subtitle: 'Real-Time Telemetry',
      desc: 'Triple-attributed tracking verifying every sale, return-on-ad-spend (ROAS), click-through rate, and conversion funnel drop-off.',
      icon: BarChart2,
      kpi: 'Transparent Real ROI',
    },
    {
      step: '07',
      title: 'Outsized Results & Scale',
      subtitle: 'Compounded Revenue',
      desc: 'Aggressively scaling winning creatives while eliminating unprofitable ad sets to multiply revenue while maintaining stable margins.',
      icon: Award,
      kpi: '4.8x+ Average Blended ROAS',
    },
  ];

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Full-Funnel Advertising Campaigns</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Commercial Campaigns That <span className="text-electric-gradient">Multiply Capital</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Advertising should never be viewed as an expense. When orchestrated with surgical creative direction and data-backed media buying, it is the most lucrative asset in your business. We engineer ads that print measurable ROI.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('advertising')}
                icon={ArrowRight}
              >
                Scale Your Advertising
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                alt="Advertising Performance Growth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 7-STEP INTERACTIVE CAMPAIGN LIFECYCLE (Mandated in Prompt) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/30 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="text-left space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              The PRO SETUP Campaign Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              7-Step Advertising Campaign Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Click through our systematic lifecycle to understand how raw ideas transform into scaled, profitable revenue.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {pipelineSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeStep === idx
                    ? 'bg-electric-600 text-white shadow-glow-sm border border-electric-cyan/40'
                    : 'bg-dark-900/80 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                <span className="font-mono">{s.step}</span>
                <span>{s.subtitle}</span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan shrink-0">
                  {React.createElement(pipelineSteps[activeStep].icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-[11px] text-electric-cyan font-mono font-bold uppercase tracking-wider block">
                    STAGE {pipelineSteps[activeStep].step} OF 07
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white">
                    {pipelineSteps[activeStep].title}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pipelineSteps[activeStep].desc}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Target Benchmark: {pipelineSteps[activeStep].kpi}</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-center p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Progress
              </span>
              <span className="text-4xl font-black text-electric-cyan font-mono">
                {Math.round(((activeStep + 1) / 7) * 100)}%
              </span>
              <span className="text-[11px] text-slate-400 mt-2">
                Step {activeStep + 1} of 7 Completed
              </span>

              <div className="flex items-center gap-2 mt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-3 py-1 rounded bg-dark-800 text-xs text-slate-300 disabled:opacity-40"
                >
                  Prev
                </button>
                <button
                  disabled={activeStep === 6}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-3 py-1 rounded bg-electric-600 text-xs text-white disabled:opacity-40"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Ready for aggressive market expansion?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Book an advertising strategy audit to see where your current ads are leaking ad spend.
          </p>
          <Button variant="primary" onClick={() => onOpenQuote('advertising')} glow>
            Start Advertising Campaign
          </Button>
        </div>

      </div>
    </div>
  );
};
