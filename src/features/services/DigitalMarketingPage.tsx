import React, { useState } from 'react';
import { Megaphone, TrendingUp, Users, Target, BarChart3, CheckCircle2, ArrowRight, DollarSign, MousePointerClick, RefreshCw } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface DigitalMarketingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenQuote }) => {
  // Interactive Campaign Simulator State
  const [selectedChannel, setSelectedChannel] = useState<'meta' | 'google' | 'tiktok'>('meta');
  const [budgetMultiplier, setBudgetMultiplier] = useState(2500);

  const calculateMetrics = () => {
    switch (selectedChannel) {
      case 'meta':
        return {
          reach: (budgetMultiplier * 34).toLocaleString(),
          clicks: Math.floor(budgetMultiplier * 1.8).toLocaleString(),
          leads: Math.floor(budgetMultiplier * 0.16).toLocaleString(),
          conversions: Math.floor(budgetMultiplier * 0.08).toLocaleString(),
          roas: '5.2x',
          cpa: '$12.40',
        };
      case 'google':
        return {
          reach: (budgetMultiplier * 18).toLocaleString(),
          clicks: Math.floor(budgetMultiplier * 2.4).toLocaleString(),
          leads: Math.floor(budgetMultiplier * 0.22).toLocaleString(),
          conversions: Math.floor(budgetMultiplier * 0.11).toLocaleString(),
          roas: '4.8x',
          cpa: '$18.20',
        };
      case 'tiktok':
        return {
          reach: (budgetMultiplier * 55).toLocaleString(),
          clicks: Math.floor(budgetMultiplier * 2.8).toLocaleString(),
          leads: Math.floor(budgetMultiplier * 0.14).toLocaleString(),
          conversions: Math.floor(budgetMultiplier * 0.06).toLocaleString(),
          roas: '4.1x',
          cpa: '$9.80',
        };
    }
  };

  const metrics = calculateMetrics();

  const servicesList = [
    { name: 'Social Media Management', desc: 'Daily organic growth, community replies, and algorithmic feed optimization.' },
    { name: 'Social Media Strategy', desc: 'Audience personas, competitive white-space analysis, and voice mapping.' },
    { name: 'Content Creation', desc: 'High-converting graphics, static carousels, and narrative copywriting.' },
    { name: 'Content Planning & Calendars', desc: 'Structured 30-day schedules planned and approved in advance.' },
    { name: 'Paid Advertising (PPC)', desc: 'Multi-tiered full-funnel ad campaigns across global ad networks.' },
    { name: 'Facebook & Instagram Advertising', desc: 'Advantage+ Shopping campaigns, reels ads, and custom catalog feeds.' },
    { name: 'TikTok Advertising', desc: 'Native Spark Ads, influencer amplification, and trending sound integration.' },
    { name: 'Google Search & Display Ads', desc: 'High-intent search keyword capture and YouTube video ad placement.' },
    { name: 'Lead Generation Funnels', desc: 'Automated CRM pipelines designed to feed sales teams with ready buyers.' },
    { name: 'Audience Targeting & Retargeting', desc: 'Lookalike modeling, custom purchase cohorts, and cart recovery.' },
    { name: 'Campaign Optimization & A/B Testing', desc: 'Continuous testing of creative hooks, headlines, and calls-to-action.' },
    { name: 'Analytics & Looker Studio Dashboards', desc: 'Live transparent telemetry reports without marketing vanity metrics.' },
  ];

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              <span>Digital Marketing & Growth Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Turn Ad Spend into <span className="text-electric-gradient">Predictable Revenue</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              PRO SETUP engineers high-performing marketing ecosystems that eliminate customer acquisition guesswork. Combining psychological copywriting with advanced algorithmic targeting, we build profitable, scalable client acquisition channels.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('digital-marketing')}
                icon={ArrowRight}
              >
                Launch Your Campaign
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Marketing Analytics Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* INTERACTIVE MARKETING DASHBOARD SHOWCASE (Mandated in Prompt) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/30 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 text-left">
            <div>
              <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                Interactive Simulator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Campaign Performance Dashboard
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select your primary ad network and simulated monthly ad budget to project pipeline yields.
              </p>
            </div>

            {/* Channel Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setSelectedChannel('meta')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedChannel === 'meta'
                    ? 'bg-electric-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Meta (FB & IG)
              </button>
              <button
                onClick={() => setSelectedChannel('google')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedChannel === 'google'
                    ? 'bg-electric-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Google Ads
              </button>
              <button
                onClick={() => setSelectedChannel('tiktok')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedChannel === 'tiktok'
                    ? 'bg-electric-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                TikTok Ads
              </button>
            </div>
          </div>

          {/* Budget Slider */}
          <div className="space-y-2 text-left">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Simulated Monthly Media Spend:</span>
              <span className="font-mono text-base font-bold text-electric-cyan">${budgetMultiplier.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="1000"
              max="20000"
              step="500"
              value={budgetMultiplier}
              onChange={(e) => setBudgetMultiplier(Number(e.target.value))}
              className="w-full h-2 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-electric-cyan"
            />
          </div>

          {/* Live Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5 text-left">
              <span className="text-[11px] text-slate-400 block">Est. Impressions</span>
              <span className="text-xl font-black text-white mt-1 block">{metrics.reach}</span>
              <span className="text-[10px] text-emerald-400">High Brand Visibility</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5 text-left">
              <span className="text-[11px] text-slate-400 block">Targeted Clicks</span>
              <span className="text-xl font-black text-white mt-1 block">{metrics.clicks}</span>
              <span className="text-[10px] text-electric-cyan">High Purchase Intent</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5 text-left">
              <span className="text-[11px] text-slate-400 block">Qualified Leads</span>
              <span className="text-xl font-black text-electric-cyan mt-1 block">{metrics.leads}</span>
              <span className="text-[10px] text-emerald-400">Direct Inquiries</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5 text-left">
              <span className="text-[11px] text-slate-400 block">Estimated Sales</span>
              <span className="text-xl font-black text-white mt-1 block">{metrics.conversions}</span>
              <span className="text-[10px] text-slate-400">Verified Checkouts</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5 text-left">
              <span className="text-[11px] text-slate-400 block">Avg. Cost Per Lead</span>
              <span className="text-xl font-black text-white mt-1 block">{metrics.cpa}</span>
              <span className="text-[10px] text-emerald-400">Industry Leading</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-electric-500/30 text-left">
              <span className="text-[11px] text-slate-400 block">Projected ROAS</span>
              <span className="text-xl font-black text-electric-cyan mt-1 block">{metrics.roas}</span>
              <span className="text-[10px] text-emerald-400 font-semibold">Net Ad Yield</span>
            </div>
          </div>
        </div>

        {/* Complete Services List Breakdown */}
        <div className="space-y-8">
          <SectionHeading
            badge="Full Suite"
            title="Complete Digital Marketing"
            highlight="Capabilities"
            subtitle="Every component required to attract, nurture, and convert modern customers."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesList.map((svc, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-dark-800/70 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-md transition-all hover:-translate-y-1 text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0" />
                  <h4 className="text-sm font-bold text-white">{svc.name}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Ready to dominate your digital market?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Schedule a free campaign strategy session with our senior digital growth directors.
          </p>
          <Button variant="primary" onClick={() => onOpenQuote('digital-marketing')} glow>
            Start Marketing Setup
          </Button>
        </div>

      </div>
    </div>
  );
};
