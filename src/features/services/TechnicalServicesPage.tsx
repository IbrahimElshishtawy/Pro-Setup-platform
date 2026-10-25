import React from 'react';
import { 
  Wrench, 
  Cpu, 
  Smartphone, 
  BatteryCharging, 
  Terminal, 
  Radio, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  PhoneCall, 
  MessageSquare,
  GraduationCap
} from 'lucide-react';
import { TECHNICAL_REPAIR_SERVICES, TECHNICAL_SERVICES_WORKFLOW } from '../../data/technicalServicesData';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Button } from '../../components/ui/Button';
import { COMPANY_INFO } from '../../core/config/constants';

export interface TechnicalServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onNavigateToAcademy?: () => void;
}

export const TechnicalServicesPage: React.FC<TechnicalServicesPageProps> = ({
  onOpenQuote,
  onNavigateToAcademy,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'Cpu': return Cpu;
      case 'BatteryCharging': return BatteryCharging;
      case 'Terminal': return Terminal;
      case 'Radio': return Radio;
      default: return ShieldCheck;
    }
  };

  const cleanPhone = (COMPANY_INFO.contact.whatsappNumber || '201099959133').replace(/[^0-9]/g, '');
  const whatsappRepairHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً مركز ProSetup للصيانة الفنية، لدي جهاز يحتاج إلى فحص وصيانة متخصصة.'
  )}`;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Distinction Banner: Technical Repair Services vs Educational Academy */}
        {onNavigateToAcademy && (
          <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-[#0B1528] to-[#040814] border border-blue-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  هل تبحث عن دورات تدريبية لتعلّم الصيانة والبرمجة بنفسك؟
                </span>
                <span className="text-xs text-slate-400">
                  توفر ProSetup Academy مسارات معملية متخصصة في صيانة الهاردوير والسوفت وير.
                </span>
              </div>
            </div>

            <button
              onClick={onNavigateToAcademy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-cyan-300 text-xs font-bold border border-white/[0.1] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>زيارة ProSetup Academy</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Hero Section Title */}
        <SectionTitle
          chapterNumber="04"
          eyebrow="خدمات الصيانة والتشخيص الفني"
          title="صيانة الهواتف الذكية والحلول الفنية المؤسسية المتقدمة"
          highlightedWord="صيانة الهواتف"
          description="نوفر خدمات هندسية معملية لإصلاح أعطال اللوحات الأم، واستبدال الشاشات والبطاريات، والتفليش الرسمي، وعقود الصيانة الدورية للشركات والمؤسسات."
          className="mb-14 text-center"
        />

        {/* Repair Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {TECHNICAL_REPAIR_SERVICES.map((srv) => {
            const IconComp = getServiceIcon(srv.iconName);
            return (
              <SpotlightCard
                key={srv.id}
                className="p-6 md:p-8 rounded-3xl bg-[#080D1A]/85 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-cyan-400 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                      {srv.category === 'hardware' ? 'هاردوير وعتاد' : srv.category === 'software' ? 'أنظمة وسوفت وير' : 'عقود شركات SLA'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Time & Warranty Bar */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 mb-6 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{srv.typicalTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{srv.warranty}</span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenQuote(srv.title)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-white/[0.06] hover:bg-white/[0.12] text-white hover:text-cyan-300 border border-white/[0.1] transition-all cursor-pointer"
                  >
                    طلب فحص أو عرض سعر
                  </button>

                  <a
                    href={whatsappRepairHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all cursor-pointer"
                    aria-label="استفسار واتساب"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* 4-Step Maintenance Workflow */}
        <section className="p-8 md:p-12 rounded-3xl bg-[#080D1A]/90 border border-white/[0.08] mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
              منهجية الفحص والإصلاح
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              كيف تسير عملية صيانة أجهزتك؟
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_SERVICES_WORKFLOW.map((wf) => (
              <div
                key={wf.step}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative"
              >
                <span className="text-2xl font-black font-mono text-cyan-500/30 block mb-2">
                  {wf.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{wf.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#080D1A] via-[#0B1528] to-[#040814] border border-blue-500/30 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            هل تحتاج إلى فحص عاجل لجهازك أو عقد صيانة لشركتك؟
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            تواصل مباشرة مع مهندسي الصيانة لدينا لتحديد موعد المعاينة أو إرسال مندوب استلام الأجهزة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenQuote('صيانة أجهزة متخصصة')}
              icon={ArrowLeft}
              className="w-full sm:w-auto shadow-glow-md"
            >
              طلب استشارة فحص وصيانة
            </Button>

            <a
              href={whatsappRepairHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>تواصل عبر واتساب الصيانة</span>
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
    </div>
  );
};
