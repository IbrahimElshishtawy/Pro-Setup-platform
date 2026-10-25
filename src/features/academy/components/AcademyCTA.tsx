import React from 'react';
import { ArrowLeft, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { COMPANY_INFO } from '../../../core/config/constants';

export interface AcademyCTAProps {
  onRegisterClick: () => void;
  title?: string;
  description?: string;
}

export const AcademyCTA: React.FC<AcademyCTAProps> = ({
  onRegisterClick,
  title = 'جاهز لبدء رحلتك التقنية وبناء مستقبلك المهني؟',
  description = 'اختر مسارك التعليمي وانضم لبرامجنا التدريبية التطبيقية في ProSetup Academy، أو تواصل مع مستشارينا لتحديد المسار الأنسب لمستواك وأهدافك.',
}) => {
  const cleanPhone = (COMPANY_INFO.contact.whatsappNumber || '201099959133').replace(/[^0-9]/g, '');
  const whatsappHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً أكاديمية ProSetup، أود الاستفسار عن تفاصيل ومواعيد الدورات التدريبية المتاحة.'
  )}`;

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#080D1A] via-[#0B1528] to-[#040814] border border-blue-500/30 p-8 md:p-12 text-center shadow-2xl overflow-hidden">
          {/* Subtle Glow Spheres */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Eyebrow */}
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4">
            PROSETUP ACADEMY • استثمارك في مهارات المستقبل
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4 max-w-2xl mx-auto">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onRegisterClick}
              icon={ArrowLeft}
              className="w-full sm:w-auto shadow-glow-md"
            >
              استمارة التسجيل في الأكاديمية
            </Button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استفسار واتساب فوري</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
