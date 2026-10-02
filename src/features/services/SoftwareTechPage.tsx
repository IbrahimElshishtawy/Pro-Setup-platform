import React, { useState } from 'react';
import { Code2, Smartphone, Database, Flame, Cloud, CreditCard, Shield, Server, CheckCircle2, ArrowRight, Terminal, ExternalLink, Cpu, Layout, Globe, Lock, HelpCircle, ChevronDown, Activity, Sparkles } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { TECH_STACK } from '../../data/techStackData';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface SoftwareTechPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const SoftwareTechPage: React.FC<SoftwareTechPageProps> = ({ onOpenQuote }) => {
  const [activeArchNode, setActiveArchNode] = useState<string>('gateway');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 8 Required Pillars per Prompt 8 & 11
  const softwareCapabilities = [
    { title: 'Websites & Web Development', desc: 'Next.js, React, and TypeScript web platforms engineered for sub-second load times, dynamic caching, and high search rankings.', icon: Globe },
    { title: 'Mobile Apps (Flutter & Native)', desc: 'High-performance cross-platform applications with offline sync, biometric authentication, and smooth 60fps animations.', icon: Smartphone },
    { title: 'Custom Systems & Software', desc: 'Tailor-made enterprise software replacing messy spreadsheets and automating internal dispatching, inventory, and workflows.', icon: Server },
    { title: 'Interactive Dashboards', desc: 'Real-time telemetry visualization, WebSocket event feeds, and executive reporting engines that make data actionable.', icon: Layout },
    { title: 'APIs & Microservices', desc: 'Secure, documented REST and GraphQL endpoints designed for horizontal scalability, rate-limiting, and zero data leakage.', icon: Cpu },
    { title: 'Databases & Data Modeling', desc: 'Relational PostgreSQL architectures, Cloud Firestore document stores, and Redis in-memory caches configured for zero data loss.', icon: Database },
    { title: 'Cloud Systems & DevOps', desc: 'Google Cloud Platform, Docker containerization, Kubernetes clusters, and automated CI/CD pipelines with zero downtime.', icon: Cloud },
    { title: 'Payment & E-Commerce Systems', desc: 'Stripe, Paymob, and multi-currency payment gateway integrations with automated reconciliation and fraud detection.', icon: CreditCard },
  ];

  // Architecture Diagram Nodes for Interactive Visualization
  const architectureNodes = [
    { id: 'client', label: '01 • Client Layer', desc: 'Next.js Web / Flutter iOS & Android apps with local caching and offline-first sync.', icon: Smartphone },
    { id: 'gateway', label: '02 • API Gateway', desc: 'Reverse proxy, JWT token authentication, DDoS mitigation, and SSL termination.', icon: Shield },
    { id: 'engine', label: '03 • Core Services', desc: 'Event-driven business logic services, task queues, and background notification workers.', icon: Cpu },
    { id: 'storage', label: '04 • Database & Cloud', desc: 'PostgreSQL relational core, Firestore real-time sync, and encrypted blob storage.', icon: Database },
    { id: 'payments', label: '05 • Integrations & Pay', desc: 'Stripe / Paymob checkout webhooks, ERP integrations, and third-party APIs.', icon: CreditCard },
  ];

  const softwareFaqs = [
    {
      q: 'Do you build native mobile apps or cross-platform applications?',
      a: 'We specialize in Google Flutter for cross-platform iOS and Android mobile development. Flutter compiles directly to native ARM machine code, giving you 60fps native performance while allowing a single clean codebase that cuts development costs and release cycles in half.',
    },
    {
      q: 'Who owns the source code once the software is built?',
      a: 'Your company owns 100% of the proprietary source code, database schemas, and documentation. We deliver complete Git repositories and deploy directly to your cloud infrastructure accounts.',
    },
    {
      q: 'How do you handle system security, backups, and scalability?',
      a: 'Every software platform is built using strict clean architecture, encrypted at rest and in transit (TLS/AES-256), with automated daily database backups, Docker container isolation, and cloud auto-scaling.',
    },
  ];

  const relevantSoftwareProjects = PORTFOLIO_PROJECTS.filter(p => p.tags?.includes('software') || p.category === 'software');

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION (Mandated Headline per Prompt 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Stack Engineering & Cloud Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Technology Built Around <span className="text-electric-gradient">Your Business</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We design, build, and scale mission-critical digital products that automate operational bottlenecks and give your business an unfair technological advantage.
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
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('tech-vis-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inspect System Architecture
              </Button>
            </div>
          </div>

          {/* Right: Technical Code Sandbox Mockup */}
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
                <span className="text-[10px] text-emerald-400 font-semibold">● Production Live</span>
              </div>

              {/* Code Contents */}
              <div className="p-5 space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <div><span className="text-pink-400">class</span> <span className="text-electric-cyan">ProSetupEngine</span> <span className="text-pink-400">implements</span> <span className="text-amber-300">ScalablePlatform</span> &#123;</div>
                <div className="pl-4"><span className="text-slate-500">// Enterprise Microservices Engine</span></div>
                <div className="pl-4"><span className="text-electric-cyan">final</span> CloudDatabase _db = <span className="text-amber-300">PostgreSQL</span>.pool;</div>
                <div className="pl-4"><span className="text-electric-cyan">final</span> PaymentGateway _pay = <span className="text-amber-300">StripePaymob</span>();</div>
                <div className="pl-4 mt-2"><span className="text-pink-400">Future</span>&lt;<span className="text-emerald-400">SetupResult</span>&gt; <span className="text-blue-400">buildBusinessSolution</span>() <span className="text-pink-400">async</span> &#123;</div>
                <div className="pl-8"><span className="text-pink-400">await</span> _db.secureBootstrap();</div>
                <div className="pl-8"><span className="text-pink-400">await</span> _pay.verifyWebhooks();</div>
                <div className="pl-8"><span className="text-pink-400">return</span> <span className="text-emerald-400">SetupResult</span>(status: <span className="text-emerald-400">Status</span>.productionReady, uptime: <span className="text-amber-300">0.9999</span>);</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Terminal Status Bar */}
              <div className="px-4 py-2.5 bg-dark-900/90 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Clean Architecture • Null-Safe Dart</span>
                <span className="text-electric-cyan font-bold">API Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE 8 MANDATED SOFTWARE CAPABILITIES (Web, Mobile, Systems, Dashboards, APIs, Databases, Cloud, Payments) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Engineering Spectrum"
            title="Complete Software & Technology"
            highlight="Capabilities"
            subtitle="Architectures engineered for uptime, bank-grade encryption, and effortless scalability."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. INTERACTIVE TECHNOLOGY ARCHITECTURE VISUALIZATION (Prompt 8 & 11) */}
        <div id="tech-vis-section" className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                Interactive Architecture Diagram
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ● Resilient Microservices
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Enterprise System Topology
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Click through the five structural layers below to inspect how user requests flow safely from native client apps to encrypted databases and payment integrations.
            </p>
          </div>

          {/* Interactive Topology Nodes Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {architectureNodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeArchNode === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveArchNode(node.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 space-y-2.5 ${
                    isActive
                      ? 'bg-dark-900 border-electric-cyan shadow-glow-sm scale-[1.02]'
                      : 'bg-dark-950/70 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-electric-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{node.label}</span>
                    <span className="text-[11px] text-slate-400 line-clamp-2 mt-1">{node.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Deep-Dive Card */}
          {(() => {
            const current = architectureNodes.find(n => n.id === activeArchNode) || architectureNodes[0];
            return (
              <div className="p-6 rounded-2xl bg-dark-950 border border-white/10 space-y-3">
                <span className="text-xs font-mono text-electric-cyan uppercase tracking-wider block font-bold">
                  Layer Deep Dive: {current.label}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {current.desc} Engineered with redundancy protocols, strict input sanitization, automated telemetry logging, and zero single point of failure.
                </p>
              </div>
            );
          })()}
        </div>

        {/* 4. VISUAL MOCKUPS SHOWCASE (Browser, Mobile App, Dashboard Mockup per Prompt 11) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Interface Engineering"
            title="Multi-Platform Mockup"
            highlight="Showcase"
            subtitle="Delivering delightful business interfaces across browsers, mobile phones, and executive dashboards."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Browser Mockup */}
            <div className="rounded-3xl overflow-hidden bg-dark-900 border border-white/10 p-5 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">https://app.prosetup.enterprise</span>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-950">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Browser Web Platform Mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Browser SaaS Platform</h4>
                <p className="text-xs text-slate-400">Sub-second Next.js responsive web application with role-based access.</p>
              </div>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="rounded-3xl overflow-hidden bg-dark-900 border border-white/10 p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono text-electric-cyan font-bold">iOS & Android App</span>
                <span className="text-[10px] text-slate-400">Flutter 60fps</span>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-950">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Mobile Phone Application Mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Cross-Platform Mobile Client</h4>
                <p className="text-xs text-slate-400">Offline-first mobile client with push notifications and biometric lock.</p>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="rounded-3xl overflow-hidden bg-dark-900 border border-white/10 p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">Telemetry Dashboard</span>
                <span className="text-[10px] text-slate-400">Live WebSockets</span>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-950">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Operations Analytics Dashboard Mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Operations Control Center</h4>
                <p className="text-xs text-slate-400">Real-time throughput metrics, inventory tracking, and revenue alerts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. TECHNOLOGY STACK GRID */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 backdrop-blur-2xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              Core Tech Stack & Frameworks
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Technologies We Master & Deploy
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              We leverage modern, industry-standard languages and frameworks to ensure your software infrastructure remains robust, maintainable, and secure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TECH_STACK.map((tech, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-dark-900/80 border border-white/[0.07] hover:border-electric-cyan/40 transition-all group"
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

        {/* 6. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="Technical FAQs"
            title="Software Engineering"
            highlight="FAQ"
            subtitle="Common questions regarding code ownership, frameworks, hosting, and SLAs."
            align="center"
          />

          <div className="space-y-3">
            {softwareFaqs.map((faq, i) => {
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

        {/* 7. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Need a custom technical software setup?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Our software engineers can review your functional requirements and blueprint a complete system architecture plan.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('software-technology')} glow>
              Start Software Project
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
