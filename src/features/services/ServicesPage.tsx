import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Megaphone, Palette, Code2, ShieldCheck, Camera, TrendingUp } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { Button } from '../../components/common/Button';
import { ActivePage } from '../../core/types/common';
import { SectionHeading } from '../../components/common/SectionHeading';

export interface ServicesPageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return Megaphone;
      case 'Palette': return Palette;
      case 'Code2': return Code2;
      case 'ShieldCheck': return ShieldCheck;
      case 'Camera': return Camera;
      default: return TrendingUp;
    }
  };

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          badge="End-to-End Capabilities"
          title="All Your Business Needs in"
          highlight="One Ecosystem"
          subtitle="From technical software engineering and smart CCTV installations to brand identity design and high-yield advertising, explore our integrated core services."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-electric-600 text-white shadow-glow-sm'
                : 'bg-dark-800 text-slate-300 hover:bg-dark-750 border border-white/10'
            }`}
          >
            All Services
          </button>
          {SERVICES_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === s.id
                  ? 'bg-electric-600 text-white shadow-glow-sm'
                  : 'bg-dark-800 text-slate-300 hover:bg-dark-750 border border-white/10'
              }`}
            >
              {s.shortTitle}
            </button>
          ))}
        </div>

        {/* Detailed Services Stack */}
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-dark-800/80 border border-white/10 hover:border-electric-500/40 backdrop-blur-2xl transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left / Info Column */}
                  <div className={`lg:col-span-7 space-y-6 text-left ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs text-electric-cyan font-bold uppercase tracking-wider block">
                          Core Pillar 0{index + 1}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-200">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sub-services Grid */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Included Specialties:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.subServices.slice(0, 6).map((sub, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-semibold text-white block">
                                {sub.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                        onClick={() => onNavigate(service.id === 'software-tech' ? 'software-technology' : service.id as ActivePage)}
                      >
                        Deep Dive Page
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onOpenQuote(service.id)}
                      >
                        Request Quote for {service.shortTitle}
                      </Button>
                    </div>
                  </div>

                  {/* Right / Visual Column */}
                  <div className={`lg:col-span-5 relative ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-900 group">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                      
                      {/* Metric highlights floating badge */}
                      {service.metricsHighlight && (
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-dark-900/90 backdrop-blur-md border border-white/10 grid grid-cols-2 gap-2 text-center">
                          {service.metricsHighlight.slice(0, 2).map((m, i) => (
                            <div key={i}>
                              <span className="text-lg font-black text-electric-cyan block">
                                {m.value}
                              </span>
                              <span className="text-[10px] text-slate-400 font-medium">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
