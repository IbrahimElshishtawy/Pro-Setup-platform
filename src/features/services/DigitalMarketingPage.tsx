import React, { useState } from 'react';
import { Megaphone, TrendingUp, Users, Target, BarChart3, CheckCircle2, ArrowRight, DollarSign, MousePointerClick, RefreshCw, Sparkles, Layers, ShieldCheck, ChevronDown, HelpCircle, Eye } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface DigitalMarketingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenQuote }) => {
  // Interactive Campaign Simulator State
  const [selectedChannel, setSelectedChannel] = useState<'meta' | 'google' | 'tiktok'>('meta');
  const [budgetMultiplier, setBudgetMultiplier] = useState(3500);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const calculateMetrics = () => {
    switch (selectedChannel) {
      case 'meta':
        return {
          reach: (budgetMultiplier * 36).toLocaleString(),
          engagement: (budgetMultiplier * 2.8).toLocaleString(),
          leads: Math.floor(budgetMultiplier * 0.18).toLocaleString(),
          conversions: Math.floor(budgetMultiplier * 0.085).toLocaleString(),
          growth: '+280% Projected',
          roas: '5.4x',
          cpa: '$11.80',
        };
      case 'google':
        return {
          reach: (budgetMultiplier * 20).toLocaleString(),
          engagement: (budgetMultiplier * 3.4).toLocaleString(),
          leads: Math.floor(budgetMultiplier * 0.24).toLocaleString(),
          conversions: Math.floor(budgetMultiplier * 0.12).toLocaleString(),
          growth: '+210% Projected',
          roas: '4.9x',
          cpa: '$16.50',
        };
      case 'tiktok':
        return {
          reach: (budgetMultiplier * 58).toLocaleString(),
          engagement: (budgetMultiplier * 4.6).toLocaleString(),
          leads: Math.floor(budgetMultiplier * 0.15).toLocaleString(),
          conversions: Math.floor(budgetMultiplier * 0.065).toLocaleString(),
          growth: '+390% Projected',
          roas: '4.3x',
          cpa: '$9.20',
        };
    }
  };

  const metrics = calculateMetrics();

  // 7 Required Pillars per Prompt 9
  const marketingPillars = [
    {
      title: 'Marketing Strategy',
      desc: 'Deep market analysis, competitive positioning, and customer persona mapping to ensure every marketing dollar is spent with tactical purpose.',
      icon: Target,
    },
    {
      title: 'Social Media Management',
      desc: 'Active community engagement, daily feed optimization, comment monitoring, and algorithmic growth across Instagram, TikTok, LinkedIn, and Facebook.',
      icon: Users,
    },
    {
      title: 'Content Creation',
      desc: 'High-converting graphics, narrative carousels, authentic UGC scripts, and cinematic reels crafted specifically for digital ad networks.',
      icon: Sparkles,
    },
    {
      title: 'Paid Advertising (PPC)',
      desc: 'Full-funnel media buying across Meta Advantage+, Google Performance Max, YouTube, and TikTok Spark Ads with strict CPA thresholds.',
      icon: DollarSign,
    },
    {
      title: 'Audience Targeting',
      desc: 'Custom audience cohorts, lookalike modeling, predictive purchase signals, and server-side pixel tracking (CAPI) to reach verified buyers.',
      icon: MousePointerClick,
    },
    {
      title: 'Lead Generation',
      desc: 'Conversion-optimized landing pages, instant WhatsApp chat funnels, and CRM automation delivering qualified buyers to your sales team.',
      icon: TrendingUp,
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Transparent Looker Studio dashboards tracking blended ROAS, customer lifetime value, and cohort retention without vanity vanity metrics.',
      icon: BarChart3,
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Audience & Offer Audit', desc: 'We dissect your historical customer data, unit economics, and competitors to design an uncopyable core offer.' },
    { step: '02', title: 'Funnel & Tracking Architecture', desc: 'Setup of server-side Conversions API, CRM pipelines, and multi-tier retargeting pathways.' },
    { step: '03', title: 'High-Velocity Creative Sprints', desc: 'Producing 30+ hook variations, motion videos, and landing page variants designed to maximize stop-rate.' },
    { step: '04', title: 'Algorithmic Ad Deployment', desc: 'Launching disciplined testing budgets to identify winning audience-creative combinations within 7 days.' },
    { step: '05', title: 'Compounded Scaling & Optimization', desc: 'Aggressively allocating media budget into top-performing funnels to multiply qualified revenue.' },
  ];

  const featuresAndBenefits = [
    { title: 'Zero Wasted Ad Spend', desc: 'Every campaign operates under automated stop-loss rules preventing budget bleeding on underperforming creatives.' },
    { title: 'Multi-Channel Synergy', desc: 'Google Search captures intent generated by TikTok and Meta video ads, maximizing overall conversion efficiency.' },
    { title: 'Live Transparent Telemetry', desc: 'Direct dashboard access to actual client revenue and leads generated, not just impressions and clicks.' },
    { title: 'Full In-House Creative Team', desc: 'Copywriters, motion designers, and video editors iterate on ad creative weekly without extra agency retainers.' },
  ];

  const marketingFaqs = [
    {
      q: 'How quickly can we expect to see tangible lead flow from marketing campaigns?',
      a: 'With paid advertising funnels, initial lead flow typically begins within 48 to 72 hours of campaign launch. Full algorithmic learning phase calibration is achieved within 14 days, allowing us to stabilize cost-per-lead and scale spend profitably.',
    },
    {
      q: 'What minimum ad budget is recommended to start seeing meaningful results?',
      a: 'We usually recommend a minimum monthly media spend of $1,500 – $3,000 depending on your industry and geography. This provides adequate statistical volume for Meta and Google machine learning algorithms to optimize audience delivery.',
    },
    {
      q: 'Do you manage both creative production and media buying in-house?',
      a: 'Yes. One of PRO SETUP’s core advantages is combining video production, graphic design, and media buying under one roof. When an ad fatigue is detected, our studio creates fresh creative variations immediately.',
    },
  ];

  const relevantProjects = PORTFOLIO_PROJECTS.filter(p => p.tags?.includes('marketing') || p.category === 'marketing');

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              <span>Full-Funnel Digital Marketing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Turn Ad Spend into <span className="text-electric-gradient">Predictable Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              PRO SETUP engineers integrated marketing engines combining strategic positioning, high-converting social media management, creative ad production, and algorithmic media buying.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('digital-marketing')}
                icon={ArrowRight}
              >
                Launch Marketing Setup
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('simulator-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Campaign Projections
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Campaign Strategy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE 7 MANDATED MARKETING PILLARS */}
        <div className="space-y-8">
          <SectionHeading
            badge="Strategic Architecture"
            title="Complete 7-Pillar Digital Marketing"
            highlight="Ecosystem"
            subtitle="Every component engineered to capture attention, qualify buyers, and compound return-on-ad-spend."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {marketingPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. ANIMATED MARKETING CHARTS & SIMULATOR WITH CLEAR SAMPLE NOTATION (Mandated in Prompt 9) */}
        <div id="simulator-section" className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                  Interactive Ad Telemetry Simulator
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                  (Sample Projections / Demonstrative Examples)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Projected Campaign Performance
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Adjust simulated monthly ad spend and select ad platform to view projected audience reach, engagement, leads, conversions, and growth metrics.
              </p>
            </div>

            {/* Platform Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-white/10 self-start md:self-auto">
              {(['meta', 'google', 'tiktok'] as const).map((ch) => (
                <button
                  key={ch}
                  onClick={() => setSelectedChannel(ch)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedChannel === ch
                      ? 'bg-electric-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {ch === 'meta' ? 'Meta (FB & IG)' : ch === 'google' ? 'Google Ads' : 'TikTok Ads'}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Simulated Monthly Media Spend:</span>
              <span className="font-mono text-base font-bold text-electric-cyan">${budgetMultiplier.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={budgetMultiplier}
              onChange={(e) => setBudgetMultiplier(Number(e.target.value))}
              className="w-full h-2 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-electric-cyan"
            />
          </div>

          {/* 5 Required Metrics Cards: Reach, Engagement, Leads, Conversions, Growth */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">01 • Reach (Impressions)</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block font-mono">{metrics.reach}</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">Estimated Audience</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">02 • Engagement (Clicks)</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block font-mono">{metrics.engagement}</span>
              <span className="text-[10px] text-electric-cyan font-mono mt-0.5 block">Active Interactivity</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-electric-cyan/30 shadow-glow-sm">
              <span className="text-[11px] text-slate-400 block font-medium">03 • Leads (Direct Inquiries)</span>
              <span className="text-xl sm:text-2xl font-black text-electric-cyan mt-1 block font-mono">{metrics.leads}</span>
              <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">Avg CPA: {metrics.cpa}</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">04 • Conversions (Checkouts)</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block font-mono">{metrics.conversions}</span>
              <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">Projected ROAS: {metrics.roas}</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-emerald-500/30">
              <span className="text-[11px] text-slate-400 block font-medium">05 • Growth (Velocity)</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block font-mono">{metrics.growth}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">Quarterly Compound</span>
            </div>
          </div>
        </div>

        {/* 4. HOW WE WORK (Workflow Timeline) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Process Pipeline"
            title="How We Work &"
            highlight="Execute"
            subtitle="A proven, 5-stage sprint engineered to deploy campaigns on-time with maximum ROAS."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-dark-800/70 border border-white/5 space-y-2">
                <span className="font-mono text-xs font-bold text-electric-cyan">{step.step}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FEATURES & BENEFITS */}
        <div className="space-y-8">
          <SectionHeading
            badge="Why PRO SETUP"
            title="Core Features & Business"
            highlight="Benefits"
            subtitle="The distinct advantages of partnering with an integrated marketing team."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuresAndBenefits.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-dark-800/80 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. PORTFOLIO EXAMPLES */}
        {relevantProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                  Demonstrated Case Studies
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Marketing Setups in Action
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantProjects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-6 rounded-3xl bg-dark-800/90 border border-white/10 flex flex-col sm:flex-row gap-5 items-center">
                  <div className="w-full sm:w-48 aspect-video rounded-2xl overflow-hidden bg-dark-950 shrink-0">
                    <img src={proj.coverImage} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-electric-cyan font-bold uppercase">{proj.industry}</span>
                    <h4 className="text-base font-bold text-white">{proj.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{proj.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="Got Questions?"
            title="Digital Marketing"
            highlight="FAQ"
            subtitle="Common questions about budgets, campaign ramp-up periods, and creative iterations."
            align="center"
          />

          <div className="space-y-3">
            {marketingFaqs.map((faq, i) => {
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

        {/* 8. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to scale customer acquisition?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Schedule a growth consultation with our marketing team to blueprint your complete acquisition pipeline.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('digital-marketing')} glow>
              Start Marketing Setup
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
