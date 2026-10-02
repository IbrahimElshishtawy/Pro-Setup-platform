import React from 'react';
import { ArrowRight, CheckCircle2, Megaphone, Palette, Code2, ShieldCheck, Camera, TrendingUp } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { ActivePage } from '../../core/types/common';
import { SectionHeading } from '../../components/common/SectionHeading';

export interface ServicesPageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const serviceCategories = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      pageId: 'digital-marketing' as ActivePage,
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      description: 'Engineering high-performing marketing ecosystems that eliminate customer acquisition guesswork. Combining psychological storytelling with algorithmic ad distribution to build compounding growth pipelines.',
      services: [
        'Social Media Management & Strategy',
        'Paid Advertising (Meta, Google, TikTok)',
        'Content Creation & Editorial Calendars',
        'Lead Generation Funnel Architecture',
        'Audience Targeting & Retargeting Cohorts',
        'Performance Analytics & Telemetry Dashboards',
      ],
      ctaText: 'Deep Dive into Digital Marketing',
    },
    {
      id: 'design-branding',
      title: 'Design & Branding',
      pageId: 'design-branding' as ActivePage,
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
      description: 'Sculpting unforgettable corporate identities, high-conversion UI/UX interfaces, and tangible packaging systems that command respect and establish unassailable market prestige.',
      services: [
        'Logo Design & Geometric Symbolism',
        'Comprehensive Visual Identity Systems',
        'Master Brand Guidelines Manual',
        'UI/UX Design for Web & Mobile Applications',
        'Luxury Packaging & Debossed Stationery',
        'Motion Graphics & Digital Asset Libraries',
      ],
      ctaText: 'Explore Brand & UI/UX Studio',
    },
    {
      id: 'software-technology',
      title: 'Software & Technology',
      pageId: 'software-technology' as ActivePage,
      icon: Code2,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
      description: 'Developing mission-critical digital products that automate operational overhead and empower end-users. From multi-tenant SaaS platforms to cross-platform mobile apps, our code is modular, tested, and secure.',
      services: [
        'Custom Web Application Development',
        'Cross-Platform Mobile Apps (Flutter & iOS/Android)',
        'Enterprise ERP & Workflow Automation',
        'Interactive Analytics Dashboards & APIs',
        'High-Volume E-Commerce Platforms',
        'Cloud Solutions, Microservices & Databases',
      ],
      ctaText: 'Discover Software Solutions',
    },
    {
      id: 'security-surveillance',
      title: 'Security & Surveillance',
      pageId: 'security-surveillance' as ActivePage,
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
      description: 'Safeguarding your corporate facilities, assets, and personnel through cutting-edge digital surveillance networks. Eliminating physical blind spots with 4K AI-assisted cameras and biometric barriers.',
      services: [
        'Commercial CCTV Installation & Rigging',
        '4K IP Cameras with AI Motion Analytics',
        'Centralized NVR RAID Storage Arrays',
        'Shielded Cat6/Cat7 PoE Network Trunks',
        'Biometric Access Control & Attendance Systems',
        '24/7 Mobile Remote Feeds & Perimeter Alerts',
      ],
      ctaText: 'Inspect Security Systems',
    },
    {
      id: 'photography-video',
      title: 'Photography & Video',
      pageId: 'photography-video' as ActivePage,
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
      description: 'High-definition media production that stops feeds in their tracks. Armed with cinema-grade cameras, lighting directors, and color scientists, we produce visuals that ignite commercial desire.',
      services: [
        'Commercial & Product Photography',
        '4K Cinematic Commercial Video Production',
        'Short-Form Social Media Reels & TikToks',
        'Corporate Documentaries & Executive Interviews',
        'Studio Lighting & Barista / Product Styling',
        'DaVinci Resolve Color Grading & Sound Design',
      ],
      ctaText: 'View Media Production Showcase',
    },
    {
      id: 'advertising',
      title: 'Advertising',
      pageId: 'advertising' as ActivePage,
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
      description: 'Full-funnel commercial advertising orchestrated with surgical creative direction and data-backed media buying. Transforming every dollar of ad spend into a predictable generator of customer revenue.',
      services: [
        'End-to-End Ad Campaign Strategy',
        'Multi-Variation Creative Production',
        'Omnichannel Ad Placement (Meta, Google, TikTok)',
        'Server-Side Conversion Tracking & Attribution',
        'Continuous Creative Hook Testing & Iteration',
        'Aggressive Scale & ROAS Optimization',
      ],
      ctaText: 'Explore Advertising Campaigns',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION (Mandated Hero & Subtitle) */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
            <span>One Unified Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Everything Your <span className="text-electric-gradient">Business Needs</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            From strategy and creativity to technology, advertising, and security — we bring everything together under one roof.
          </p>
        </div>

        {/* 2. ALTERNATING LAYOUT CATEGORIES (Image Left / Content Right, then Content Left / Image Right) */}
        <div className="space-y-16 lg:space-y-24">
          {serviceCategories.map((cat, index) => {
            const Icon = cat.icon;
            // Alternating condition: Even index = Image Left / Content Right; Odd index = Content Left / Image Right
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={cat.id}
                className="group relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-dark-800/80 border border-white/10 hover:border-electric-cyan/40 backdrop-blur-2xl transition-all duration-500 hover:shadow-glow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* VISUAL COLUMN */}
                  <div className={`lg:col-span-6 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/11] bg-dark-950">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                      
                      {/* Floating Category Number Tag */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-900/85 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-electric-cyan">
                        0{index + 1} // SECTOR
                      </div>
                    </div>
                  </div>

                  {/* CONTENT COLUMN */}
                  <div className={`lg:col-span-6 space-y-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                          {cat.title}
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {cat.description}
                      </p>
                    </div>

                    {/* Services List with Checkmarks */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Key Capabilities Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.services.map((svc, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-200 font-medium">{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                        glow
                        onClick={() => onNavigate(cat.pageId)}
                      >
                        {cat.ctaText}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onOpenQuote(cat.id)}
                      >
                        Request Quote
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Need an end-to-end multi-service setup?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Eliminate vendor friction. Partner with one unified team to manage marketing, technology, creative, security, and advertising simultaneously.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote()} glow>
              Start Complete Business Setup
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
