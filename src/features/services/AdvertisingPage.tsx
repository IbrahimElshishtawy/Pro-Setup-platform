import React, { useState } from 'react';
import { TrendingUp, Lightbulb, PenTool, Video, Target, BarChart2, Award, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, ChevronDown, Sparkles, DollarSign, Layers } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface AdvertisingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const AdvertisingPage: React.FC<AdvertisingPageProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Exact 6-Stage Process per Prompt 14: Idea -> Strategy -> Creative -> Production -> Advertising -> Optimization
  const processSteps = [
    {
      id: 'idea',
      step: '01',
      title: 'Idea',
      subtitle: 'Psychological Hook & Unfair Advantage',
      desc: 'We unearth the compelling core reason customers buy from you instead of competitors, formulating an irresistible, high-converting commercial hook.',
      icon: Lightbulb,
      deliverable: 'Core Angle & Emotional Persona Blueprint',
    },
    {
      id: 'strategy',
      step: '02',
      title: 'Strategy',
      subtitle: 'Funnel & Media Allocation Blueprint',
      desc: 'Determining exact channel splits across Meta, TikTok, and Google, establishing customer acquisition cost (CAC) benchmarks, and modeling target return on ad spend.',
      icon: Target,
      deliverable: 'Omnichannel Budget & Attribution Roadmap',
    },
    {
      id: 'creative',
      step: '03',
      title: 'Creative',
      subtitle: 'High-Impact Visual & Copywriting Design',
      desc: 'Our design and copy team crafts 30+ visual variations, high-contrast hook banners, and narrative scripts designed to stop the infinite social scroll within 2 seconds.',
      icon: PenTool,
      deliverable: '30+ Dynamic Ad Banners & Copy Hooks',
    },
    {
      id: 'production',
      step: '04',
      title: 'Production',
      subtitle: '4K Commercials, UGC & Dynamic Motion',
      desc: 'In-house cinema production shoots 4K vertical reels, authentic user-generated product reviews, and 3D kinetic typography formatted for all digital ad placements.',
      icon: Video,
      deliverable: 'High-Bitrate 9:16 & 16:9 Video Ad Masters',
    },
    {
      id: 'advertising',
      step: '05',
      title: 'Advertising',
      subtitle: 'Algorithmic Deployment & Bid Management',
      desc: 'Deploying campaigns across Meta Advantage+, Google Performance Max, and TikTok Spark Ads with server-side CAPI pixel tracking and automated budget pacing.',
      icon: TrendingUp,
      deliverable: 'Live Campaigns with Zero Budget Wastage',
    },
    {
      id: 'optimization',
      step: '06',
      title: 'Optimization',
      subtitle: 'Compounded Scale & Margin Maximization',
      desc: 'Aggressively allocating media budget into top-performing funnels while ruthlessly eliminating low-yield ad sets to scale gross revenue predictably.',
      icon: Award,
      deliverable: 'Sustained 4.8x+ Average Blended ROAS',
    },
  ];

  // Campaign Showcase Cards
  const campaignShowcase = [
    {
      title: 'Velox DTC Direct Scale Campaign',
      category: 'E-Commerce Fashion & Eyewear',
      highlight: 'From $25K to $180K/mo in 90 Days',
      metric: '4.9x ROAS',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-angle UGC creative sprint paired with Meta Advantage+ shopping funnels and automated dynamic retargeting.',
    },
    {
      title: 'Aura Lifestyle Membership Drive',
      category: 'Health & Luxury Wellness',
      highlight: '1,420+ New Sign-Ups in 60 Days',
      metric: '5.2x ROAS',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      description: 'Localized video reel ads driving direct WhatsApp consultation bookings with automated sales team routing.',
    },
  ];

  const advertisingFaqs = [
    {
      q: 'How does PRO SETUP ensure ad budgets are not wasted on unprofitable clicks?',
      a: 'We implement algorithmic automated rules and server-side tracking (CAPI) that immediately cut off ad sets that fail to meet strict customer acquisition cost thresholds within 48 hours, safeguarding your marketing capital.',
    },
    {
      q: 'Do you provide creative refreshing when ad fatigue sets in?',
      a: 'Yes. Ad creative fatigue is the number one killer of performance campaigns. Because we have in-house photo, video, and design studios, we introduce new hook variations every 7 to 10 days to keep blended ROAS steady.',
    },
    {
      q: 'What attribution tools do you use to measure true return on investment?',
      a: 'We combine native platform pixel data with server-side CAPI, Google Analytics 4, and multi-touch attribution reporting to provide a clear view of exactly which ads generate actual cash collected.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Full-Funnel Commercial Advertising</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Campaigns That <span className="text-electric-gradient">Multiply Capital</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Advertising should never be viewed as an expense. When executed with surgical creative direction and data-backed media buying, it becomes the most profitable investment in your business.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('advertising')}
                icon={ArrowRight}
              >
                Launch Advertising Campaign
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('ad-process-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore 6-Step Pipeline
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

        {/* 2. THE COMPLETE 6-STEP PROCESS (Prompt 14: Idea -> Strategy -> Creative -> Production -> Advertising -> Optimization) */}
        <div id="ad-process-section" className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              The PRO SETUP Campaign Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Complete 6-Stage Advertising Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Idea → Strategy → Creative → Production → Advertising → Optimization
            </p>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-dark-900 border-electric-cyan shadow-glow-sm scale-[1.02]'
                      : 'bg-dark-950/70 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-electric-cyan' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-electric-cyan' : 'text-slate-400'}`} />
                  </div>
                  <span className="text-xs font-bold text-white block">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase */}
          {(() => {
            const current = processSteps[activeStep];
            const Icon = current.icon;

            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-dark-950 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-electric-cyan uppercase tracking-wider block">
                        STAGE {current.step} OF 06
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white">
                        {current.title}: {current.subtitle}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {current.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Key Deliverable: {current.deliverable}</span>
                  </div>
                </div>

                <div className="md:col-span-4 p-5 rounded-xl bg-dark-900 border border-white/5 text-center flex flex-col items-center justify-center space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">Pipeline Progress</span>
                  <span className="text-3xl font-black text-electric-cyan font-mono">
                    {Math.round(((activeStep + 1) / 6) * 100)}%
                  </span>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => prev - 1)}
                      className="px-3 py-1 rounded bg-dark-800 text-xs text-slate-300 disabled:opacity-40"
                    >
                      Prev
                    </button>
                    <button
                      disabled={activeStep === 5}
                      onClick={() => setActiveStep(prev => prev + 1)}
                      className="px-3 py-1 rounded bg-electric-600 text-xs text-white disabled:opacity-40"
                    >
                      Next Stage →
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 3. CAMPAIGN SHOWCASE (Prompt 14) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Demonstrated Results"
            title="High-Yield Campaign"
            highlight="Showcase"
            subtitle="Explore how our creative media buying strategies generated outsized return-on-investment."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaignShowcase.map((camp, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-dark-800 border border-white/10 p-6 space-y-4 shadow-xl"
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-dark-950 relative">
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dark-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    {camp.metric}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-electric-cyan font-bold uppercase">{camp.category}</span>
                  <h4 className="text-xl font-bold text-white">{camp.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{camp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="Campaign FAQs"
            title="Commercial Advertising"
            highlight="FAQ"
            subtitle="Answers regarding ad spend pacing, tracking attribution, and creative iterations."
            align="center"
          />

          <div className="space-y-3">
            {advertisingFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-dark-800/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-sm font-bold text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-electric-cyan' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to multiply your advertising return?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Schedule a confidential ad strategy audit with our media directors to identify hidden leakage in your customer acquisition funnel.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('advertising')} glow>
              Start Advertising Setup
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
