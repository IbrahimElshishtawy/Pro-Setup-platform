import React from 'react';
import { Users, Layers, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { useInView } from '../../hooks/useInView';
import { useCounter } from '../../hooks/useCounter';

export const WhyChooseUs: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stat1 = useCounter(10, 1800, isInView);
  const stat2 = useCounter(50, 2000, isInView);
  const stat3 = useCounter(20, 1900, isInView);
  const stat4 = useCounter(100, 2200, isInView);

  const pillars = [
    {
      icon: Users,
      title: 'Experienced Team',
      desc: 'Skilled & Creative',
    },
    {
      icon: Layers,
      title: 'Integrated Services',
      desc: 'All in One Place',
    },
    {
      icon: Sparkles,
      title: 'Creative Approach',
      desc: 'Fresh Ideas',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      desc: 'Your Time Matters',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 bg-dark-900 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT: Realistic Agency Studio Workspace (Matches Visual Reference) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-dark-800 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="PRO SETUP Team Collaboration Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
              
              {/* Studio Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dark-900/85 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-electric-600/20 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">PRO SETUP Operations Hub</span>
                    <span className="text-[11px] text-slate-400">Integrated Hardware & Digital Studio • {COMPANY_INFO.contact.address}</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Hub
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Why Choose Pro Setup Details & Pillars (Matches Visual Reference) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Why Choose <span className="text-electric-cyan">Pro Setup</span>?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                We're not just a service provider — we're your growth partner. With a skilled team and a creative mindset, we deliver high-quality solutions that match your vision and budget.
              </p>
            </div>

            {/* 4 Feature Pillars with Rounded Glowing Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pil, idx) => {
                const IconComponent = pil.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-dark-800/70 border border-white/[0.07] hover:border-electric-500/30 backdrop-blur-md flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="w-11 h-11 rounded-full bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {pil.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {pil.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Animated Counters Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  {stat1}+
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  Services
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-2xl sm:text-3xl font-black text-electric-cyan block">
                  {stat2}+
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  Projects
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  {stat3}+
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  Clients
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-2xl sm:text-3xl font-black text-electric-cyan block">
                  {stat4}%
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  Commitment
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
