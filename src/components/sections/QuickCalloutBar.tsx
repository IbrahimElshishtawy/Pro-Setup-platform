import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

export interface QuickCalloutBarProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onAction: () => void;
  variant?: 'primary' | 'gradient';
}

export const QuickCalloutBar: React.FC<QuickCalloutBarProps> = ({
  title = 'هل تبحث عن حماية وتجهيز متكامل لأعمالك على مدار 24/7؟',
  subtitle = 'فريقنا الهندسي والإبداعي جاهز لتقديم استشارة فورية وتجهيز شامل بدون أي تشتت.',
  buttonText = 'ابدأ الآن مجاناً',
  onAction,
  variant = 'primary',
}) => {
  return (
    <section className="relative w-full overflow-hidden select-none border-y border-cyan-500/20 bg-gradient-to-r from-[#162256] via-[#1C2C6E] to-[#162256]">
      {/* Watermark Logo in Background */}
      <div
        className="absolute -top-10 end-4 select-none pointer-events-none opacity-[0.07] font-black text-9xl tracking-tighter text-white font-mono"
        aria-hidden="true"
      >
        PS
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 start-1/4 -translate-y-1/2 w-72 h-32 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          
          {/* Text Content */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-300 text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>جاهزية تشغيلية كاملة واستجابة فورية</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <Button
              variant="primary"
              size="md"
              icon={ArrowLeft}
              glow
              magnetic
              onClick={onAction}
              className="px-6 py-3 font-bold text-sm shadow-[0_0_25px_rgba(74,129,211,0.5)] bg-[#4A81D3] hover:bg-[#3D70BE] border border-cyan-300/30"
            >
              {buttonText}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
