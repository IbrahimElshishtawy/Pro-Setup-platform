import { ArrowDownLeft, ArrowUpLeft } from 'lucide-react';
import { HERO_SPECS } from '../../data/siteData';

export function HeroSection() {
  return (
    <section id="hero" className="bg-surface border-b border-border">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Top Architectural Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.14em] uppercase text-steel-muted">
              <span className="inline-block w-8 h-[1px] bg-steel" aria-hidden="true" />
              <span dir="ltr">ARCHITECTURAL STAINLESS STEEL SYSTEMS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold text-charcoal leading-[1.2] tracking-tight">
              تصميمات عصرية، تفاصيل دقيقة، وجودة تدوم
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pb-1">
            <p className="text-base sm:text-lg text-graphite leading-relaxed">
              Kitchen Pro لحلول المطابخ والشبابيك والدريسنج، بتصميم يجمع بين العملية والأناقة.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-6 py-3.5 transition-colors duration-200 min-w-[144px]"
              >
                <span>عرض الأعمال</span>
                <ArrowDownLeft className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-surface text-sm font-medium px-6 py-3.5 transition-colors duration-200 min-w-[144px]"
              >
                <span>تواصل معنا</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Cinematic Architectural Frame */}
        <div className="relative overflow-hidden border border-border bg-surface-soft aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10]">
          <img
            src="/images/hero-kitchen.jpg"
            alt="مطبخ ستانلس ستيل حديث بتصميم معماري من Kitchen Pro"
            className="w-full h-full object-cover object-center animate-subtle-zoom"
            fetchPriority="high"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/40 to-transparent"
            aria-hidden="true"
          />
          <div className="hidden sm:flex absolute bottom-4 right-5 left-5 items-center justify-between text-xs font-mono text-surface/90">
            <span dir="ltr">SERIES 01 — MONOLITHIC 304 STEEL ISLAND</span>
            <span dir="ltr">CAIRO · ARCHITECTURAL FABRICATION</span>
          </div>
        </div>

        {/* Minimal Engineering Specification Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 border border-border bg-surface-white divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-border">
          {HERO_SPECS.map((spec) => (
            <div
              key={spec.code}
              className="px-5 py-4 sm:px-6 sm:py-5 flex items-baseline justify-between gap-4"
            >
              <span className="text-sm font-medium text-charcoal">{spec.label}</span>
              <span
                className="font-mono text-xs font-medium tracking-wider text-steel-muted shrink-0"
                dir="ltr"
              >
                {spec.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
