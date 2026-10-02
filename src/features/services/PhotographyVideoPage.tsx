import React, { useState } from 'react';
import { Camera, Film, Play, Sparkles, CheckCircle2, ArrowRight, Video, Scissors, Eye, Maximize2 } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface PhotographyVideoPageProps {
  onOpenQuote: (serviceId: string) => void;
  onWatchVideo: () => void;
}

export const PhotographyVideoPage: React.FC<PhotographyVideoPageProps> = ({ onOpenQuote, onWatchVideo }) => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'all' | 'video' | 'photo'>('all');

  const mediaItems = [
    { type: 'video', title: 'Solis Smart Coffee Commercial', cat: 'Commercial Ad 4K', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', duration: '0:45' },
    { type: 'photo', title: 'Aura Luxury Gym Studio Shoot', cat: 'Commercial Photography', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
    { type: 'video', title: 'Velox Eyewear Launch Reel', cat: 'Viral Social Reel', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80', duration: '0:30' },
    { type: 'photo', title: 'Lumina Architecture Spatial Photography', cat: 'Interior & Architectural', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { type: 'video', title: 'Nexus Global Logistics Corporate Film', cat: 'Corporate Documentary', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', duration: '1:20' },
    { type: 'photo', title: 'Crafted Precision Product Catalog', cat: 'Macro Studio Photography', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredMedia = activeMediaFilter === 'all'
    ? mediaItems
    : mediaItems.filter(m => m.type === activeMediaFilter);

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Cinema & Commercial Media Production</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Cinematic Visuals That <span className="text-electric-gradient">Ignite Desire</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              High-definition imagery and viral video content are non-negotiable for modern brand prestige. Armed with cinema-grade cameras, art directors, and post-production color scientists, we produce visuals that convert viewers into die-hard advocates.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
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
              >
                Watch Agency Showreel
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              onClick={onWatchVideo}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="Cinema Camera Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
              
              {/* Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-electric-600/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-glow-md group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Filter & Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-left space-y-1">
              <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                Commercial Media Catalog
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Featured Photography & Video
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((m, i) => (
              <div
                key={i}
                onClick={m.type === 'video' ? onWatchVideo : undefined}
                className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 aspect-video cursor-pointer"
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />

                {m.type === 'video' && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-electric-cyan text-electric-cyan" />
                    <span>{m.duration}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] text-electric-cyan font-bold uppercase tracking-wider block">
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

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Elevate your visual storytelling</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Book our studio, cinema camera crews, and lighting directors for your next commercial campaign.
          </p>
          <Button variant="primary" onClick={() => onOpenQuote('photography-video')} glow>
            Start Production Setup
          </Button>
        </div>

      </div>
    </div>
  );
};
