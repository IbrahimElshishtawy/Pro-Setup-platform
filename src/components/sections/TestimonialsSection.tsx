import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { SectionTitle } from '../ui/SectionTitle';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Star, ChevronRight, ChevronLeft, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS_DATA.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto sliding with pause on hover
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isPaused, total]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const currentItem = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-24 lg:py-32 overflow-hidden text-right"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          chapterNumber="05"
          eyebrow="شهادات الثقة والاعتماد"
          title="ماذا يقول رواد الأعمال وشركاء النجاح عن تحالف PS"
          highlightedWord="تحالف PS"
          description="ثقة كبرى بنيناها عبر تسليم مشاريع واقعية بأعلى دقة تقنية وهندسية وسينمائية أراحت الشركاء من تشتت الموردين."
          align="center"
          className="mb-16"
        />

        {/* Cinematic Testimonial Stage */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Featured Testimonial Card */}
          <SpotlightCard
            className="p-8 md:p-12 relative overflow-hidden transition-all duration-700"
            spotlightColor="rgba(0, 102, 255, 0.2)"
          >
            {/* Ambient Watermark Quote Icon */}
            <Quote
              className="absolute -bottom-8 -start-8 w-44 h-44 text-white/[0.02] pointer-events-none rotate-12"
              aria-hidden="true"
            />

            {/* Top Row: Service Badge & Star Rating */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{currentItem.serviceCategory}</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: currentItem.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 leading-relaxed tracking-normal">
              "{currentItem.quote}"
            </p>

            {/* Impact Metric Banner */}
            <div className="mt-6 inline-block bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-lg text-xs font-mono text-cyan-300">
              الأثر القياسي: {currentItem.projectHighlight}
            </div>

            {/* Bottom Row: Client Identity & Navigation Controls */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              
              {/* Client Info with Avatar */}
              <div className="flex items-center gap-4">
                <img
                  src={currentItem.avatar}
                  alt={currentItem.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/30 shadow-lg"
                />
                <div className="text-right">
                  <h4 className="text-base font-extrabold text-white">
                    {currentItem.name}
                  </h4>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {currentItem.role} • <span className="text-slate-300 font-semibold">{currentItem.company}</span>
                  </div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="الشهادة السابقة"
                  className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/10 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-1">
                  <span className="text-cyan-400 font-bold">0{activeIndex + 1}</span> / 0{total}
                </div>
                <button
                  onClick={handleNext}
                  aria-label="الشهادة التالية"
                  className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/10 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

            </div>
          </SpotlightCard>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`الانتقال إلى الشهادة رقم ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
