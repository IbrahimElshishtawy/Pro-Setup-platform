import React, { useState } from 'react';
import { Code2, Smartphone, Database, Flame, Cloud, CreditCard, Shield, Server, CheckCircle2, ArrowRight, Terminal, ExternalLink, Cpu } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { TECH_STACK } from '../../data/techStackData';

export interface SoftwareTechPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const SoftwareTechPage: React.FC<SoftwareTechPageProps> = ({ onOpenQuote }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'flutter' | 'backend' | 'cloud'>('flutter');

  const softwareServices = [
    { title: 'Custom Web Applications', desc: 'Next.js, React, and TypeScript web architectures engineered for sub-second page loads and high SEO rankings.', icon: Code2 },
    { title: 'Mobile Apps (Flutter & iOS/Android)', desc: 'Smooth 60fps native-compiled applications with offline sync, biometrics, and push notifications.', icon: Smartphone },
    { title: 'Enterprise ERP & Management Systems', desc: 'Custom enterprise software automating inventory, payroll, dispatching, and workflow approvals.', icon: Server },
    { title: 'High-Volume E-Commerce Platforms', desc: 'Custom storefronts integrated with real-time stock sync, multi-currency pricing, and automated fulfillment.', icon: CreditCard },
    { title: 'Interactive Analytics Dashboards', desc: 'Telemetry aggregation, live data feeds via WebSockets, and actionable visual reporting charts.', icon: Cpu },
    { title: 'Cloud Solutions & Database Architecture', desc: 'Firebase, Supabase, PostgreSQL, Docker containers, and Google Cloud automated CI/CD pipelines.', icon: Cloud },
  ];

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Stack Software Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Enterprise Systems Built for <span className="text-electric-gradient">Extreme Scale</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              We engineer mission-critical digital products that automate operations and delight end-users. From multi-tenant SaaS platforms to cross-platform Flutter applications, our code is documented, tested, and battle-ready.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('software-technology')}
                icon={ArrowRight}
              >
                Discuss Technical Architecture
              </Button>
            </div>
          </div>

          {/* Right: Code Sandbox Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-dark-950 font-mono text-xs text-left">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-dark-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Terminal className="w-3 h-3 text-electric-cyan" />
                  <span>pro_setup_core.dart</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">● Live Engine</span>
              </div>

              {/* Code Contents */}
              <div className="p-5 space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <div><span className="text-pink-400">class</span> <span className="text-electric-cyan">ProSetupEngine</span> <span className="text-pink-400">implements</span> <span className="text-amber-300">ScalablePlatform</span> &#123;</div>
                <div className="pl-4"><span className="text-slate-500">// Initialize cloud microservices</span></div>
                <div className="pl-4"><span className="text-electric-cyan">final</span> CloudDatabase _db = <span className="text-amber-300">Firestore</span>.instance;</div>
                <div className="pl-4"><span className="text-electric-cyan">final</span> PaymentGateway _pay = <span className="text-amber-300">StripePaymob</span>();</div>
                <div className="pl-4 mt-2"><span className="text-pink-400">Future</span>&lt;<span className="text-emerald-400">SetupResult</span>&gt; <span className="text-blue-400">buildBusinessSolution</span>() <span className="text-pink-400">async</span> &#123;</div>
                <div className="pl-8"><span className="text-pink-400">await</span> _db.secureBootstrap();</div>
                <div className="pl-8"><span className="text-pink-400">return</span> <span className="text-emerald-400">SetupResult</span>(status: <span className="text-emerald-400">Status</span>.productionReady, uptime: <span className="text-amber-300">0.9999</span>);</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Terminal Status Bar */}
              <div className="px-4 py-2 bg-dark-900/90 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Clean Architecture • Null Safety</span>
                <span className="text-electric-cyan font-bold">Latency: 14ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Software Pillars Grid */}
        <div className="space-y-8">
          <SectionHeading
            badge="Engineering Spectrum"
            title="Software & Technology"
            highlight="Capabilities"
            subtitle="Architectures engineered for uptime, security, and effortless user adoption."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {softwareServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-sm text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{svc.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack Grid (Mandated in Prompt) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 backdrop-blur-2xl space-y-8">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              Core Tech Stack
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Technologies We Master & Deploy
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              We leverage modern, industry-standard languages and frameworks to ensure your codebase remains maintainable, scalable, and secure for years to come.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {TECH_STACK.map((tech, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-dark-900/80 border border-white/[0.07] hover:border-electric-cyan/40 transition-all text-left group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {tech.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Need a custom technical software setup?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Our engineers can review your technical specifications and provide a full system architecture plan.
          </p>
          <Button variant="primary" onClick={() => onOpenQuote('software-technology')} glow>
            Start Software Project
          </Button>
        </div>

      </div>
    </div>
  );
};
