import React, { useState } from 'react';
import { Palette, CheckCircle2, ArrowRight, Eye, Layers, Sparkles, Box, Layout, PenTool, Image as ImageIcon, ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface DesignBrandingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const DesignBrandingPage: React.FC<DesignBrandingPageProps> = ({ onOpenQuote }) => {
  const [selectedPalette, setSelectedPalette] = useState<'cyber' | 'luxury' | 'minimal'>('cyber');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 6 Required Disciplines per Prompt 10
  const creativeDisciplines = [
    { name: 'Logo Design', desc: 'Golden-ratio emblems and timeless monograms engineered for instant recognition across micro-favicons and monumental signage.', icon: PenTool },
    { name: 'Brand Identity', desc: 'Comprehensive corporate visual languages, geometric color harmonies, bespoke typographic pairings, and brand assets.', icon: Palette },
    { name: 'Social Media Design', desc: 'Thumb-stopping feed layouts, reusable Figma social design kits, story templates, and animated kinetic typography.', icon: ImageIcon },
    { name: 'Advertising Design', desc: 'High-yield commercial banners, billboard collateral, promotional print spreads, and conversion-optimized ad creatives.', icon: Sparkles },
    { name: 'Packaging Design', desc: 'Tactile luxury packaging, unboxing experiences, debossed foil stamping specifications, and sustainable retail materials.', icon: Box },
    { name: 'UI/UX Design', desc: 'Clean user interfaces, wireframes, design tokens, component libraries, and intuitive interaction design for web and mobile.', icon: Layout },
  ];

  // Large Project Previews for Creative Studio Experience
  const studioProjects = [
    {
      name: 'Lumina Brutalist Identity',
      category: 'Luxury Architecture & Interiors',
      services: 'Logo Design • Visual Identity • Stationery • Design Book',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Monolithic architectural brand identity featuring gold-leaf debossing and strict Swiss modernist grid systems.',
    },
    {
      name: 'Velox Eyewear Unboxing',
      category: 'Consumer DTC Goods',
      services: 'Packaging Design • Custom Die-Cuts • Foil Stamping',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
      description: 'Tactile rigid magnetic closure boxes with soft-touch matte coating and embossed metallic branding.',
    },
    {
      name: 'Aura Mobile App Interface',
      category: 'Mobile Application UI/UX',
      services: 'UI/UX Design • Design System • Micro-Interactions',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
      description: 'Futuristic fitness tracking dark mode interface with neon accents, custom SVG charts, and haptic feedback design.',
    },
    {
      name: 'Nexus Brand Guidelines',
      category: 'Global Freight & Logistics',
      services: 'Master Brand Book • Iconography • Fleet Signage',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      description: 'A 140-page master identity manual regulating corporate identity standards across international fleet hubs.',
    },
  ];

  const designProcess = [
    { step: '01', title: 'Positioning & Aesthetic Audit', desc: 'We dissect your market competitors and establish the psychological tone of your brand voice.' },
    { step: '02', title: 'Concept Directions & Moodboards', desc: 'Developing 3 distinctive creative routes exploring typography, color theory, and logo symbolism.' },
    { step: '03', title: 'Identity Architecture & Refinement', desc: 'Perfecting chosen visual direction across grid geometries, vector curves, and typographic contrast.' },
    { step: '04', title: 'Collateral & UI/UX Prototyping', desc: 'Designing actual stationery, packaging die-cuts, social templates, and high-fidelity Figma components.' },
    { step: '05', title: 'Brand Guidelines & Asset Delivery', desc: 'Compiling master vector formats (SVG, AI, EPS, PDF, Figma) and exhaustive usage rules.' },
  ];

  const designFaqs = [
    {
      q: 'What assets are included in a complete PRO SETUP brand identity package?',
      a: 'A full identity setup includes primary and secondary logo variations, responsive icon marks, typographic pairings, custom color tokens (HEX, RGB, CMYK, Pantone), stationery templates, social media UI kits, and a comprehensive master brand guidelines manual.',
    },
    {
      q: 'Do we own the full intellectual property rights to our logos and designs?',
      a: 'Yes, 100%. Upon final project delivery, all vector source files and full global commercial intellectual property rights are unconditionally transferred to your company.',
    },
    {
      q: 'Can PRO SETUP assist with actual physical print production and packaging samples?',
      a: 'Absolutely. We provide print-ready vector artwork with exact die-lines, spot UV masks, foil stamping layers, and paper stock recommendations, and we coordinate directly with specialty print partners.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5" />
              <span>Creative Studio & Visual Identity</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Identities Sculpted to <span className="text-electric-gradient">Command Attention</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              In a crowded market, distinct aesthetic authority is your greatest business lever. We design iconic brand identities, luxury packaging, high-converting UI/UX interfaces, and digital design systems.
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
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('studio-gallery');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Creative Showcase
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
                alt="Creative Studio Brand Identity Book"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE 6 REQUIRED CREATIVE DISCIPLINES (Prompt 10) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Studio Capabilities"
            title="Comprehensive Creative & Design"
            highlight="Disciplines"
            subtitle="Bridging strategic market positioning with museum-grade aesthetic execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {creativeDisciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. LARGE PROJECT PREVIEWS & INTERACTIVE GALLERY (Prompt 10: Hover reveals Name, Category, Services, View Project) */}
        <div id="studio-gallery" className="space-y-8">
          <SectionHeading
            badge="Interactive Studio Showcase"
            title="Featured Design & Visual"
            highlight="Deployments"
            subtitle="Hover over each project preview to explore services delivered, category, and creative execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioProjects.map((proj, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-dark-900 border border-white/10 hover:border-electric-cyan/60 transition-all duration-500 aspect-[16/11] cursor-pointer shadow-xl"
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Always-visible subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Default Bottom Bar */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between group-hover:opacity-0 transition-opacity duration-300">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-electric-cyan font-bold uppercase">{proj.category}</span>
                    <h4 className="text-lg font-bold text-white">{proj.name}</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-dark-900/80 border border-white/20 flex items-center justify-center text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Full Dark Overlay Reveal on Hover (Mandated in Prompt 10) */}
                <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-md p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-electric-600/20 border border-electric-500/30 text-electric-cyan text-xs font-bold uppercase">
                      {proj.category}
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                      {proj.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Services Delivered</span>
                      <span className="text-xs font-semibold text-slate-200 block">{proj.services}</span>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      icon={ArrowRight}
                      onClick={() => onOpenQuote('design-branding')}
                      glow
                    >
                      View Project Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BRAND SYSTEM TOKENS INTERACTIVE STUDIO */}
        <div className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h4 className="text-lg font-bold text-white">Interactive Brand Design System Tokens</h4>
              <p className="text-xs text-slate-400">Sample architectural typography and color tokens engineered in our master guidelines.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Palette Scheme:</span>
              {(['cyber', 'luxury', 'minimal'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPalette(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedPalette === p ? 'bg-electric-600 text-white shadow-sm' : 'bg-dark-900 text-slate-400 border border-white/10'
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
                <div className="p-4 rounded-xl bg-[#05080D] border border-white/10"><span className="text-xs font-mono text-white block">#05080D</span><span className="text-[10px] text-slate-400">Void Obsidian</span></div>
                <div className="p-4 rounded-xl bg-[#0066FF] text-white"><span className="text-xs font-mono block">#0066FF</span><span className="text-[10px] text-blue-200">Electric Brand Blue</span></div>
                <div className="p-4 rounded-xl bg-[#00D2FF] text-dark-950 font-bold"><span className="text-xs font-mono block">#00D2FF</span><span className="text-[10px] text-blue-900">Cyan Highlight</span></div>
                <div className="p-4 rounded-xl bg-[#16233B] text-white"><span className="text-xs font-mono block">#16233B</span><span className="text-[10px] text-slate-400">Slate Structure</span></div>
              </>
            ) : selectedPalette === 'luxury' ? (
              <>
                <div className="p-4 rounded-xl bg-[#0B0C10] border border-white/10"><span className="text-xs font-mono text-white block">#0B0C10</span><span className="text-[10px] text-slate-400">Obsidian Black</span></div>
                <div className="p-4 rounded-xl bg-[#C5A059] text-dark-950 font-bold"><span className="text-xs font-mono block">#C5A059</span><span className="text-[10px] text-amber-950">Champagne Gold</span></div>
                <div className="p-4 rounded-xl bg-[#E5DCC5] text-dark-950 font-bold"><span className="text-xs font-mono block">#E5DCC5</span><span className="text-[10px] text-amber-900">Pearl Sand</span></div>
                <div className="p-4 rounded-xl bg-[#1F2833] text-white"><span className="text-xs font-mono block">#1F2833</span><span className="text-[10px] text-slate-400">Graphite Neutral</span></div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10"><span className="text-xs font-mono text-white block">#090A0F</span><span className="text-[10px] text-slate-400">Pure Mono Dark</span></div>
                <div className="p-4 rounded-xl bg-[#6366F1] text-white"><span className="text-xs font-mono block">#6366F1</span><span className="text-[10px] text-indigo-200">Neo Violet</span></div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] text-dark-950 font-bold"><span className="text-xs font-mono block">#F8FAFC</span><span className="text-[10px] text-slate-700">Studio White</span></div>
                <div className="p-4 rounded-xl bg-[#334155] text-white"><span className="text-xs font-mono block">#334155</span><span className="text-[10px] text-slate-300">Steel Slate</span></div>
              </>
            )}
          </div>
        </div>

        {/* 5. HOW WE WORK (Design Process) */}
        <div className="space-y-8">
          <SectionHeading
            badge="Methodology"
            title="How We Architect Brand"
            highlight="Identities"
            subtitle="A structured 5-step creative design sprint from initial brief to vector master delivery."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {designProcess.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-dark-800/70 border border-white/5 space-y-2">
                <span className="font-mono text-xs font-bold text-electric-cyan">{step.step}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="Guidance"
            title="Design & Branding"
            highlight="FAQ"
            subtitle="Common questions regarding file formats, copyright transfer, and stationery print setups."
            align="center"
          />

          <div className="space-y-3">
            {designFaqs.map((faq, i) => {
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
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready for an iconic brand identity?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Elevate your brand presence above market competitors with a master design system that commands prestige.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('design-branding')} glow>
              Start Branding Project
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
