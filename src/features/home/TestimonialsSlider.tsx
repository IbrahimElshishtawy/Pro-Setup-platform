import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';

export const TestimonialsSlider: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 3 : prevIndex - 1
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex >= TESTIMONIALS_DATA.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Get current 3 items
  const visibleTestimonials = [
    TESTIMONIALS_DATA[startIndex % TESTIMONIALS_DATA.length],
    TESTIMONIALS_DATA[(startIndex + 1) % TESTIMONIALS_DATA.length],
    TESTIMONIALS_DATA[(startIndex + 2) % TESTIMONIALS_DATA.length],
  ];

  return (
    <section className="relative py-20 bg-dark-900 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Client <span className="text-electric-cyan">Perspectives</span>
          </h2>
          <p className="text-xs text-slate-400 pt-1">
            Sample client partner feedback — official company reviews and case studies are updated regularly.
          </p>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="relative flex items-center gap-3 sm:gap-4">
          
          {/* Prev Arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full bg-dark-800/80 hover:bg-dark-750 text-slate-300 hover:text-white border border-white/10 hover:border-electric-500/50 shadow-lg transition-all shrink-0 hover:scale-110 active:scale-95 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Cards Grid (3 Columns on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {visibleTestimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="group relative p-6 rounded-2xl bg-dark-800/80 hover:bg-dark-750/90 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-sm flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 flex items-center gap-3 border-t border-white/[0.06] mt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15 group-hover:border-electric-cyan transition-colors"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 block">
                      {t.role} • {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-3 rounded-full bg-dark-800/80 hover:bg-dark-750 text-slate-300 hover:text-white border border-white/10 hover:border-electric-500/50 shadow-lg transition-all shrink-0 hover:scale-110 active:scale-95 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
