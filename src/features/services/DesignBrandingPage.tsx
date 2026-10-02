import React, { useState } from 'react';
import { Palette, CheckCircle2, ArrowRight, Eye, Layers, Sparkles, Box, Layout, PenTool } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface DesignBrandingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const DesignBrandingPage: React.FC<DesignBrandingPageProps> = ({ onOpenQuote }) => {
  const [selectedPalette, setSelectedPalette] = useState<'cyber' | 'luxury' | 'minimal'>('cyber');

  const brandingPillars = [
    { name: 'Logo Design & Symbolism', desc: 'Golden-ratio emblems engineered for instant memorability and infinite scalability across all mediums.', icon: PenTool },
    { name: 'Complete Visual Identity Systems', desc: 'Color palettes, typographic scales, iconography, and decorative graphic motifs.', icon: Palette },
    { name: 'Master Brand Guidelines', desc: 'Exhaustive rules manual detailing clear space, misuse prevention, and cross-channel standards.', icon: Layers },
    { name: 'UI/UX Design for Web & Mobile', desc: 'Wireframing, interactive Figma prototypes, and complete responsive design tokens.', icon: Layout },
    { name: 'Packaging & Print Materials', desc: 'Luxury debossed packaging, corporate stationery, business cards, and marketing collateral.', icon: Box },
    { name: 'Motion Graphics & 3D Assets', desc: 'Dynamic logo stings, UI micro-animations, and 3D product renders.', icon: Sparkles },
  ];

  const galleryItems = [
    { title: 'Lumina Brutalist Identity', cat: 'Luxury Architecture', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Velox Eyewear Packaging', cat: 'Direct-to-Consumer', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80' },
    { title: 'Aura App Design System', cat: 'Mobile UI/UX', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80' },
    { title: 'Nexus Corporate Brand Book', cat: 'Logistics Enterprise', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="py-12 md:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5" />
              <span>Design & Visual Branding Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Identities Crafted to <span className="text-electric-gradient">Command Attention</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              A business without distinctive branding is invisible. At PRO SETUP, we sculpt unforgettable visual identities, high-conversion UI/UX interfaces, and tangible packaging systems that establish instant market authority.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('design-branding')}
                icon={ArrowRight}
              >
                Create Your Brand Identity
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
                alt="Branding Stationery & Notebooks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Core Design Specialties */}
        <div className="space-y-8">
          <SectionHeading
            badge="Disciplines"
            title="Design & Branding"
            highlight="Capabilities"
            subtitle="Bridging strategic positioning with high-end aesthetic execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandingPillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-sm text-left space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{pil.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Gallery Showcase */}
        <div className="space-y-8">
          <SectionHeading
            badge="Portfolio Gallery"
            title="Recent Identity"
            highlight="Case Studies"
            subtitle="Take a look at how we sculpt distinctive visual languages for ambitious brands."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 aspect-[3/4] cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] text-electric-cyan font-bold uppercase tracking-wider block">
                    {item.cat}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand System Tokens Interactive Preview */}
        <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h4 className="text-lg font-bold text-white">Brand Typography & Palette Tokens</h4>
              <p className="text-xs text-slate-400">Sample architectural design system provided in every PRO SETUP guidelines book.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Palette:</span>
              {(['cyber', 'luxury', 'minimal'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPalette(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedPalette === p ? 'bg-electric-600 text-white' : 'bg-dark-900 text-slate-400 border border-white/10'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {selectedPalette === 'cyber' ? (
              <>
                <div className="p-4 rounded-xl bg-[#05080D] border border-white/10"><span className="text-xs font-mono text-white block">#05080D</span><span className="text-[10px] text-slate-500">Void Black</span></div>
                <div className="p-4 rounded-xl bg-[#0066FF] text-white"><span className="text-xs font-mono block">#0066FF</span><span className="text-[10px] text-blue-200">Electric Blue</span></div>
                <div className="p-4 rounded-xl bg-[#00D2FF] text-dark-950 font-bold"><span className="text-xs font-mono block">#00D2FF</span><span className="text-[10px] text-blue-900">Cyan Highlight</span></div>
                <div className="p-4 rounded-xl bg-[#16233B] text-white"><span className="text-xs font-mono block">#16233B</span><span className="text-[10px] text-slate-400">Slate Border</span></div>
              </>
            ) : selectedPalette === 'luxury' ? (
              <>
                <div className="p-4 rounded-xl bg-[#0B0C10] border border-white/10"><span className="text-xs font-mono text-white block">#0B0C10</span><span className="text-[10px] text-slate-500">Obsidian</span></div>
                <div className="p-4 rounded-xl bg-[#C5A059] text-dark-950 font-bold"><span className="text-xs font-mono block">#C5A059</span><span className="text-[10px] text-amber-950">Champagne Gold</span></div>
                <div className="p-4 rounded-xl bg-[#E5DCC5] text-dark-950 font-bold"><span className="text-xs font-mono block">#E5DCC5</span><span className="text-[10px] text-amber-900">Pearl Sand</span></div>
                <div className="p-4 rounded-xl bg-[#1F2833] text-white"><span className="text-xs font-mono block">#1F2833</span><span className="text-[10px] text-slate-400">Granite</span></div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10"><span className="text-xs font-mono text-white block">#090A0F</span><span className="text-[10px] text-slate-500">Mono Dark</span></div>
                <div className="p-4 rounded-xl bg-[#6366F1] text-white"><span className="text-xs font-mono block">#6366F1</span><span className="text-[10px] text-indigo-200">Neo Violet</span></div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] text-dark-950 font-bold"><span className="text-xs font-mono block">#F8FAFC</span><span className="text-[10px] text-slate-700">Pure White</span></div>
                <div className="p-4 rounded-xl bg-[#334155] text-white"><span className="text-xs font-mono block">#334155</span><span className="text-[10px] text-slate-300">Steel</span></div>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-dark-800 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Elevate your brand beyond the competition</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Get an iconic identity and complete design system that commands respect.
          </p>
          <Button variant="primary" onClick={() => onOpenQuote('design-branding')} glow>
            Start Branding Project
          </Button>
        </div>

      </div>
    </div>
  );
};
