import React, { useState } from 'react';
import { Camera, Film, Play, Sparkles, CheckCircle2, ArrowRight, Video, Scissors, Eye, Maximize2, HelpCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface PhotographyVideoPageProps {
  onOpenQuote: (serviceId: string) => void;
  onWatchVideo: () => void;
}

export const PhotographyVideoPage: React.FC<PhotographyVideoPageProps> = ({ onOpenQuote, onWatchVideo }) => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'all' | 'video' | 'photo'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 7 Required Sections per Prompt 13
  const mediaSections = [
    { title: 'Photography', desc: 'Studio and architectural captures with controlled professional strobe lighting and medium-format sharpness.', icon: Camera },
    { title: 'Product Photography', desc: 'Macro studio setups capturing complex metal reflections, luxury textures, packaging, and bottle fluid dynamics.', icon: Eye },
    { title: 'Commercial Photography', desc: 'Campaign brand lifestyle imagery, corporate executive portraiture, and architectural interior showcases.', icon: Film },
    { title: 'Video Production', desc: 'Turnkey cinema video shoots utilizing high-speed cinema camera bodies, robotic cranes, and directional sound.', icon: Video },
    { title: 'Advertising Videos', desc: 'High-concept commercial spots engineered specifically for television broadcasts and high-budget digital campaigns.', icon: Sparkles },
    { title: 'Reels & Short-Form', desc: 'Dynamic vertical videos (9:16) capturing instant viewer hooks, trending transitions, and social media momentum.', icon: Play },
    { title: 'Editing & Color Grading', desc: 'Post-production editorial, sound design, DaVinci Resolve color science, and 3D motion graphics overlay.', icon: Scissors },
  ];

  // Media Gallery Items with Play buttons & Fullscreen previews
  const mediaItems = [
    { type: 'video', title: 'Solis Smart Coffee Commercial', cat: 'Commercial Ad 4K', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80', duration: '0:45' },
    { type: 'photo', title: 'Aura Luxury Gym Studio Shoot', cat: 'Commercial Photography', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80' },
    { type: 'video', title: 'Velox Eyewear Launch Reel', cat: 'Viral Social Reel (9:16)', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80', duration: '0:30' },
    { type: 'photo', title: 'Lumina Spatial Photography', cat: 'Interior & Architectural', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
    { type: 'video', title: 'Nexus Global Logistics Corporate Film', cat: 'Corporate Documentary', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', duration: '1:20' },
    { type: 'photo', title: 'Crafted Precision Product Catalog', cat: 'Macro Studio Photography', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80' },
  ];

  const filteredMedia = activeMediaFilter === 'all'
    ? mediaItems
    : mediaItems.filter(m => m.type === activeMediaFilter);

  const productionProcess = [
    { step: '01', title: 'Treatment & Storyboard', desc: 'Visual moodboard design, shot list choreography, script drafting, and model styling.' },
    { step: '02', title: 'Studio & Location Setup', desc: 'Lighting grid rigging, Aputure light shaping, and camera calibration with cinema primes.' },
    { step: '03', title: 'High-Definition Cinema Shoot', desc: 'Capturing multiple angles in 4K ProRes/RAW at 24fps and 120fps slow-motion.' },
    { step: '04', title: 'Post-Production & Grading', desc: 'Non-linear editing, pacing, Foley sound design, and color grading in DaVinci Resolve.' },
    { step: '05', title: 'Multi-Format Master Export', desc: 'Delivery in 16:9 4K cinema, 9:16 vertical reels, and high-res print master TIFFs.' },
  ];

  const productionFaqs = [
    {
      q: 'Do you provide on-location shoots or studio production?',
      a: 'We provide both. We have fully equipped studio facilities with specialized lighting, seamless backdrops, and product staging rigs, and we deploy mobile cinema production teams for on-site corporate and industrial shoots.',
    },
    {
      q: 'Can videos be delivered formatted for both digital ads and broadcast TV?',
      a: 'Yes. We master every project in cinema-grade RAW and deliver tailored crops and bitrates for Meta and TikTok ads (9:16), YouTube (16:9), and broadcast television specs.',
    },
    {
      q: 'How long does post-production and editing take?',
      a: 'Standard video projects take 5 to 10 business days for the initial color-graded cut. Expedited 48-hour delivery is also available for rapid ad sprints.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. CINEMATIC HERO SECTION */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-14 lg:p-20 bg-dark-950 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=80"
              alt="Cinema Production Rig Visual"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950/50" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/20 border border-electric-500/30 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Cinema & Commercial Media Production</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Cinematic Visuals That <span className="text-electric-gradient">Ignite Commercial Desire</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              High-definition imagery and viral video content are non-negotiable for modern brand prestige. Armed with cinema-grade cameras, art directors, and color scientists, we produce visuals that convert casual viewers into dedicated clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('photography-video')}
                icon={ArrowRight}
              >
                Book a Production Shoot
              </Button>
              <Button
                variant="glass"
                size="md"
                icon={Play}
                iconPosition="left"
                onClick={onWatchVideo}
                className="text-white hover:bg-white/10"
              >
                Watch Agency Showreel
              </Button>
            </div>
          </div>
        </div>

        {/* 2. THE 7 MANDATED MEDIA SECTIONS (Photography, Product, Commercial, Video, Ad Videos, Reels, Editing) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Production Services"
            title="Complete Media Production"
            highlight="Capabilities"
            subtitle="Everything required to capture and post-produce high-impact visuals."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaSections.map((item, idx) => {
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

        {/* 3. HORIZONTAL IMAGE & VIDEO GALLERY WITH PLAY BUTTONS (Prompt 13) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                Visual Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Featured Media Gallery
              </h3>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-800 border border-white/10 self-start sm:self-auto">
              {(['all', 'video', 'photo'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveMediaFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeMediaFilter === filter
                      ? 'bg-electric-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter === 'all' ? 'All Media' : filter === 'video' ? 'Videos & Reels' : 'Photography'}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((m, i) => (
              <div
                key={i}
                onClick={m.type === 'video' ? onWatchVideo : undefined}
                className="group relative rounded-3xl overflow-hidden bg-dark-900 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 aspect-video cursor-pointer shadow-xl"
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Video Play Button Badge (Prompt 13) */}
                {m.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-electric-600/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-glow-md group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Duration indicator */}
                {m.duration && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>{m.duration}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] text-electric-cyan font-bold uppercase tracking-wider block font-mono">
                    {m.cat}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors mt-0.5">
                    {m.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PRODUCTION METHODOLOGY */}
        <div className="space-y-8">
          <SectionHeading
            badge="Studio Pipeline"
            title="The Cinema Production"
            highlight="Workflow"
            subtitle="From script development to cinema color science and multi-format delivery."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {productionProcess.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-dark-800/70 border border-white/5 space-y-2">
                <span className="font-mono text-xs font-bold text-electric-cyan">{step.step}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="Media FAQs"
            title="Photography & Video"
            highlight="FAQ"
            subtitle="Common questions regarding shoot turnaround times, formats, and equipment."
            align="center"
          />

          <div className="space-y-3">
            {productionFaqs.map((faq, i) => {
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

        {/* 6. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready for cinema-grade media production?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Book our studio, camera directors, and lighting crews for your upcoming commercial advertising campaigns.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('photography-video')} glow>
              Book Production Shoot
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
