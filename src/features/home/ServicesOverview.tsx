import React from 'react';
import { ArrowLeft, Code2, ShieldCheck, Megaphone, Video, Palette, Layers, CheckCircle2, Sparkles, Terminal, Activity, Film, ExternalLink } from 'lucide-react';
import { ActivePage } from '../../core/types/common';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { SectionDivider } from '../../components/ui/SectionDivider';
import { Button } from '../../components/ui/Button';

export interface ServicesOverviewProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuote?: (serviceId?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden text-right">
      
      {/* Global Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <SectionTitle
          chapterNumber="01"
          eyebrow="فصول المنظومة المتكاملة"
          title="ستة محاور تخصصية ترسم ملامح سيادتك في السوق"
          highlightedWord="سيادتك في السوق"
          description="استكشف الفصول التنفيذية لشركة PS: كل قطاع يمثل عالماً متكاملاً من التميز الهندسي والإبداعي، يعمل بتناغم تام تحت قيادة واحدة."
          align="center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-36">

        {/* ========================================================
            SCENE 01: SOFTWARE & CLOUD ARCHITECTURE
            Layout: Text on Start (Right), Visual on End (Left)
           ======================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chapter Number Watermark */}
          <span className="absolute -top-12 start-0 select-none font-mono text-8xl md:text-[11rem] font-black text-white/[0.025] pointer-events-none -z-10">
            01
          </span>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-bold font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>CHAPTER 01 // SOFTWARE & CLOUD TECH</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              تطوير البرمجيات والمنصات السحابية المتقدمة
            </h3>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              نبني منصات الويب فائقة السرعة، وتطبيقات الجوال الهجينة عبر Flutter، وأنظمة إدارة المؤسسات المخصصة (ERP). بنية سحابية نظيفة ومعيارية، خالية من الثغرات، ومصممة للتوسع والتعامل مع ملايين الزوار والعمليات اليومية.
            </p>

            {/* Capability Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>مواقع ويب فائقة السرعة (Next.js / Vite)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>تطبيقات جوال iOS وAndroid عبر Flutter</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>لوحات تحكم تفاعلية وربط APIs سحابي</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>قواعد بيانات مؤمنة وسريعة الاستجابة</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowLeft}
                glow
                onClick={() => onNavigate('software-technology')}
              >
                استكشف الحلول البرمجية
              </Button>
              <button
                onClick={() => onOpenQuote?.('البرمجيات والتكنولوجيا')}
                className="text-xs md:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>طلب استشارة تقنية فورية</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Content: Floating Code IDE & Hybrid App Panels */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl md:rounded-3xl bg-[#060C1A] border border-blue-500/30 p-5 md:p-7 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>enterprise-system.tsx</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  COMPILED
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs sm:text-[13px] text-slate-300 space-y-2 leading-relaxed bg-[#03060E] p-4 rounded-xl border border-white/5 overflow-x-auto text-left" dir="ltr">
                <div><span className="text-purple-400">import</span> &#123; <span className="text-cyan-300">PSInternationalCore</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@ps/enterprise'</span>;</div>
                <div className="text-slate-500">// Initialize High-Scalability Platform</div>
                <div><span className="text-blue-400">const</span> <span className="text-amber-300">app</span> = <span className="text-blue-400">await</span> <span className="text-cyan-300">PSInternationalCore</span>.<span className="text-amber-200">deploy</span>(&#123;</div>
                <div className="ps-4 text-slate-300">scale: <span className="text-emerald-300">'global-ha'</span>,</div>
                <div className="ps-4 text-slate-300">securityAudit: <span className="text-amber-400">true</span>,</div>
                <div className="ps-4 text-slate-300">responseTime: <span className="text-emerald-300">'&lt;90ms'</span>,</div>
                <div>&#125;);</div>
                <div className="text-emerald-400 pt-1">✓ Status: Ready for Enterprise Production</div>
              </div>

              {/* Floating Mobile Spec Preview Card */}
              <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-blue-900/40 to-[#0A162B] border border-cyan-400/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-bold text-white">Flutter Mobile Engine</span>
                </div>
                <span className="font-mono text-cyan-300">iOS & Android 120Hz</span>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider glowColor="blue" />

        {/* ========================================================
            SCENE 02: CCTV & SECURITY CONTROL ROOM
            Layout: Visual on Start (Right), Text on End (Left)
           ======================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chapter Number Watermark */}
          <span className="absolute -top-12 end-0 select-none font-mono text-8xl md:text-[11rem] font-black text-white/[0.025] pointer-events-none -z-10">
            02
          </span>

          {/* Visual Content: CCTV Control Room Grid */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl md:rounded-3xl bg-[#060B18] border border-blue-500/30 p-4 md:p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CONTROL ROOM // NVR LIVE MATRIX</span>
                </div>
                <span className="text-[11px] text-slate-400">SECURE LAN 10Gbps</span>
              </div>

              {/* 4-Cam Grid Preview */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="relative rounded-lg overflow-hidden border border-white/10 scanlines h-28 sm:h-36">
                  <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80"
                    alt="CCTV Gate Camera"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 start-2 bg-dark-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300">
                    CAM_01 // MAIN_GATE
                  </div>
                  <div className="absolute bottom-2 end-2 text-[9px] font-mono text-red-400 bg-black/70 px-1.5 rounded">
                    4K LIVE
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden border border-white/10 scanlines h-28 sm:h-36">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=500&q=80"
                    alt="CCTV Warehouse Camera"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 start-2 bg-dark-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300">
                    CAM_02 // WAREHOUSE
                  </div>
                  <div className="absolute bottom-2 end-2 text-[9px] font-mono text-red-400 bg-black/70 px-1.5 rounded">
                    4K LIVE
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden border border-white/10 scanlines h-28 sm:h-36">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
                    alt="CCTV Corporate Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 start-2 bg-dark-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300">
                    CAM_03 // HQ_OFFICE
                  </div>
                  <div className="absolute bottom-2 end-2 text-[9px] font-mono text-red-400 bg-black/70 px-1.5 rounded">
                    4K LIVE
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0A1224] p-3 flex flex-col justify-between text-right">
                  <div className="text-[11px] font-mono text-cyan-400 font-bold">
                    SYSTEM HEALTH
                  </div>
                  <div className="space-y-1 font-mono text-[10px] text-slate-300">
                    <div>Storage: <span className="text-emerald-400">92 Days RAID</span></div>
                    <div>PoE Ports: <span className="text-cyan-400">32/32 Active</span></div>
                    <div>AI Alerts: <span className="text-emerald-400">0 Breaches</span></div>
                  </div>
                  <div className="w-full bg-emerald-500/20 text-emerald-400 text-center py-1 rounded text-[10px] font-bold">
                    100% SECURE
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CHAPTER 02 // SECURITY & SURVEILLANCE</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              توريد وتركيب كاميرات المراقبة والأنظمة الأمنية الذكية
            </h3>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              نؤمّن مقرات الشركات والمصانع والمنشآت التجارية بأحدث كاميرات IP فائقة الدقة (4K Ultra-HD)، مع شبكات كابلات PoE معزولة وخوادم تسجيل NVR مركزية، مع بوابات التحكم في الدخول البيومترية (Access Control).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>كاميرات IP ذكية بدقة 4K مع رؤية ليلية ملونة</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>تمديد شبكات ألياف ضوئية وكابلات Cat6 معزولة</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>خوادم NVR وتخزين سحابي ومحلي مشفر</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>بوابات بصمة وحضور ذكية للتحكم بالدخول</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowLeft}
                glow
                onClick={() => onNavigate('security-surveillance')}
              >
                استكشف المنظومات الأمنية
              </Button>
              <button
                onClick={() => onOpenQuote?.('الأنظمة الأمنية والمراقبة')}
                className="text-xs md:text-sm font-bold text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>طلب معاينة ميدانية وعرض أسعار</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <SectionDivider glowColor="cyan" />

        {/* ========================================================
            SCENE 03: DIGITAL MARKETING & DATA GROWTH
            Layout: Text on Start (Right), Visual on End (Left)
           ======================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chapter Number Watermark */}
          <span className="absolute -top-12 start-0 select-none font-mono text-8xl md:text-[11rem] font-black text-white/[0.025] pointer-events-none -z-10">
            03
          </span>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold font-mono">
              <Megaphone className="w-3.5 h-3.5" />
              <span>CHAPTER 03 // DIGITAL MARKETING & GROWTH</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              التسويق الرقمي الموجه بالبيانات ونمو المبيعات
            </h3>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              لا نطلق إعلانات عشوائية — بل نبني مسارات تحويل موجهة بالأرقام. ندير حملاتك عبر Meta وGoogle وTikTok مع ربط مباشر بنظام أتمتة الردود الفورية، لتحويل كل دولار إعلاني إلى عملاء حقيقيين وأرباح مضاعفة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>إدارة كاملة لمنصات التواصل الاجتماعي وصناعة المحتوى</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>إعلانات ممولة عالية العائد (PPC) واستهداف خوارزمي دقيق</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>مسارات استقطاب العملاء وأتمتة الرد عبر واتساب</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>لوحات بيانات أسبوعية مباشرة لقياس العائد (ROAS)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowLeft}
                glow
                onClick={() => onNavigate('digital-marketing')}
              >
                استكشف خطط التسويق
              </Button>
              <button
                onClick={() => onOpenQuote?.('التسويق الرقمي')}
                className="text-xs md:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>طلب تدقيق وخطة نمو تسويقية</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Content: Analytics Dashboard Visualization */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl md:rounded-3xl bg-[#070E20] border border-cyan-400/30 p-6 md:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Header Metric Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="text-xs text-slate-400 font-mono">GROWTH BENCHMARK</div>
                  <div className="text-2xl font-black text-white font-mono mt-0.5">
                    +340% <span className="text-xs text-emerald-400 font-bold">المعدل التراكمي</span>
                  </div>
                </div>
                <div className="text-end">
                  <div className="text-xs text-slate-400 font-mono">ROAS MULTIPLIER</div>
                  <div className="text-2xl font-black text-cyan-400 font-mono mt-0.5">
                    5.2x <span className="text-xs text-slate-400">عائد الإنفاق</span>
                  </div>
                </div>
              </div>

              {/* Graphical Bar Visualization */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Meta & Instagram Reels Campaign</span>
                    <span className="text-cyan-400 font-bold">94% Target</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Google Search & High-Intent Leads</span>
                    <span className="text-emerald-400 font-bold">88% Target</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-300 w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>TikTok Viral Sound Ad Tracks</span>
                    <span className="text-purple-400 font-bold">78% Target</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-[78%]" />
                  </div>
                </div>
              </div>

              {/* Floating Live Leads Card */}
              <div className="mt-6 p-4 rounded-xl bg-dark-950/80 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-white font-bold">متوسط سرعة التواصل مع العميل:</span>
                </div>
                <span className="font-mono text-emerald-400 font-extrabold">&lt; 90 ثانية عبر WhatsApp CRM</span>
              </div>

            </div>
          </div>
        </div>

        <SectionDivider glowColor="purple" />

        {/* ========================================================
            SCENE 04: CINEMATIC 4K COMMERCIAL PRODUCTION
            Layout: Visual on Start (Right), Text on End (Left)
           ======================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chapter Number Watermark */}
          <span className="absolute -top-12 end-0 select-none font-mono text-8xl md:text-[11rem] font-black text-white/[0.025] pointer-events-none -z-10">
            04
          </span>

          {/* Visual Content: 21:9 Letterbox Movie Frame Aesthetic */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/30 bg-black shadow-2xl group">
              
              {/* 21:9 Aspect Ratio Frame */}
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
                  alt="Cinematic 4K production studio"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Film Letterbox Bars */}
                <div className="absolute top-0 inset-x-0 h-4 bg-black" />
                <div className="absolute bottom-0 inset-x-0 h-4 bg-black" />

                {/* Camera Technical Overlay Indicators */}
                <div className="absolute top-6 start-6 flex items-center gap-2 font-mono text-[10px] text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>REC 4K • 23.976 FPS</span>
                </div>

                <div className="absolute top-6 end-6 font-mono text-[10px] text-cyan-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  SHUTTER 180° • ISO 800
                </div>

                <div className="absolute bottom-6 start-6 font-mono text-xs text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  TC 01:24:39:12
                </div>

                <div className="absolute bottom-6 end-6 font-mono text-[10px] text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  LUT: ARRI_ALEXA_GOLDEN_WARM
                </div>
              </div>

              {/* Bottom Film Strip Details */}
              <div className="p-4 bg-[#080D1A] flex items-center justify-between text-xs font-mono text-slate-300 border-t border-white/10">
                <div className="flex items-center gap-2 text-purple-400">
                  <Film className="w-4 h-4" />
                  <span>COMMERCIAL REEL 2025</span>
                </div>
                <span className="text-[11px] text-slate-400">Color Graded in DaVinci Resolve Studio</span>
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-400 text-xs font-bold font-mono">
              <Video className="w-3.5 h-3.5" />
              <span>CHAPTER 04 // CINEMATIC 4K PRODUCTION</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              الإنتاج السينمائي فائق الدقة 4K والتصوير التجاري
            </h3>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              نصنع لعلامتك التجارية حضوراً بصرياً يحبس الأنفاس. أفلام إعلانية بمستوى التلفزيون وشاشات السينما، وتصوير منتجات استوديو فخم، وفيديوهات ريلز سريعة التفاعل بتلوين سينمائي وتصميم صوتي مخصص.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>إعلانات سينمائية 4K بكاميرات RED وARRI</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>تصوير فوتوغرافي تجاري فاخر للمنتجات والمقرات</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>إنتاج وتعديل فيديوهات ريلز وتيك توك سريعة الانتشار</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>هندسة وتلوين سينمائي احترافي وتصميم مؤثرات صوتية</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowLeft}
                glow
                onClick={() => onNavigate('photography-video')}
              >
                شاهد الاستعراض السينمائي
              </Button>
              <button
                onClick={() => onOpenQuote?.('التصوير والإنتاج المرئي')}
                className="text-xs md:text-sm font-bold text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>حجز جلسة إنتاج سينمائي</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <SectionDivider glowColor="amber" />

        {/* ========================================================
            SCENE 05: BRANDING & UI/UX DESIGN
            Layout: Text on Start (Right), Visual on End (Left)
           ======================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chapter Number Watermark */}
          <span className="absolute -top-12 start-0 select-none font-mono text-8xl md:text-[11rem] font-black text-white/[0.025] pointer-events-none -z-10">
            05
          </span>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-bold font-mono">
              <Palette className="w-3.5 h-3.5" />
              <span>CHAPTER 05 // BRANDING & UI/UX</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              صناعة الهوية البصرية وتصميم تجربة المستخدم UI/UX
            </h3>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              الهوية القوية تصنع فارق القيمة. نصمم شعارات أيقونية قائمة على النسب الهندسية الدقيقة، وأدلة هوية مؤسسية كاملة، وواجهات مستخدم تفاعلية (Figma Design Systems) تعزز مكانتك وثقة عملائك من النظرة الأولى.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>تصميم شعارات أيقونية وهندسة الهوية المؤسسية الكاملة</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>تصميم واجهات وتجربة المستخدم للمواقع والتطبيقات (UI/UX)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>دليل إرشادي شامل للهوية (Brand Book) وقواعد الطباعة</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>تصميم التغليف والعبوات والمطبوعات الفاخرة للشركات</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowLeft}
                glow
                onClick={() => onNavigate('design-branding')}
              >
                استكشف استوديو الهوية
              </Button>
              <button
                onClick={() => onOpenQuote?.('الهوية والتصميم')}
                className="text-xs md:text-sm font-bold text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>طلب تصميم هوية تجارية كاملة</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Content: Floating Branding Mockup & Palette Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl md:rounded-3xl bg-[#090F1E] border border-amber-400/30 p-6 md:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Header Info */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-mono text-slate-300">
                <span>IDENTITY SYSTEM SPECIFICATION</span>
                <span className="text-amber-300 font-bold">GOLDEN RATIO 1:1.618</span>
              </div>

              {/* Monogram Surface */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-br from-[#0B152A] via-[#040814] to-black border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-black text-6xl text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-500 to-amber-200 tracking-tight">
                    PS
                  </div>
                  <div className="text-[11px] font-mono tracking-widest text-slate-400 mt-2 uppercase">
                    Brand Vector Geometry
                  </div>
                </div>
              </div>

              {/* Color Palette Swatches */}
              <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                <div className="p-2.5 rounded-lg bg-[#020617] border border-white/10 text-slate-400">
                  <div className="w-full h-3 rounded bg-[#020617] mb-1.5 border border-white/20" />
                  #020617
                </div>
                <div className="p-2.5 rounded-lg bg-[#0066FF] text-white">
                  <div className="w-full h-3 rounded bg-[#0066FF] mb-1.5" />
                  #0066FF
                </div>
                <div className="p-2.5 rounded-lg bg-[#00D2FF] text-dark-950 font-bold">
                  <div className="w-full h-3 rounded bg-[#00D2FF] mb-1.5" />
                  #00D2FF
                </div>
                <div className="p-2.5 rounded-lg bg-[#F59E0B] text-dark-950 font-bold">
                  <div className="w-full h-3 rounded bg-[#F59E0B] mb-1.5" />
                  #F59E0B
                </div>
              </div>

            </div>
          </div>
        </div>

        <SectionDivider glowColor="blue" />

        {/* ========================================================
            SCENE 06: CORPORATE SETUP ECOSYSTEM (CONVERGING MODULES)
            Layout: Visual on Start (Right), Text on End (Left)
           ======================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Chapter Number Watermark */}
          <span className="absolute -top-12 end-0 select-none font-mono text-8xl md:text-[11rem] font-black text-white/[0.025] pointer-events-none -z-10">
            06
          </span>

          {/* Visual Content: Converging Modules into Unified Hub */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#060D1F] via-[#091530] to-[#040814] border border-cyan-400/40 p-6 md:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              <div className="text-center mb-6">
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider">
                  ALL-IN-ONE ENTERPRISE ARCHITECTURE
                </span>
                <h4 className="text-lg font-black text-white mt-1">
                  كل ما تحتاجه أعمالك في منظومة واحدة
                </h4>
              </div>

              {/* Converging Modules Grid */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors">
                  <Code2 className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                  <div className="font-bold text-white">البرمجيات</div>
                  <div className="text-[10px] text-slate-400">ويب وتطبيقات</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                  <div className="font-bold text-white">الأمن و CCTV</div>
                  <div className="text-[10px] text-slate-400">شبكات وحماية</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-colors">
                  <Video className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
                  <div className="font-bold text-white">الإنتاج 4K</div>
                  <div className="text-[10px] text-slate-400">تصوير وإعلانات</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-400/40 transition-colors">
                  <Megaphone className="w-5 h-5 text-blue-400 mx-auto mb-1.5" />
                  <div className="font-bold text-white">التسويق</div>
                  <div className="text-[10px] text-slate-400">نمو ومبيعات</div>
                </div>

                {/* Central PS Core Node */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow-sm">
                  <div className="font-black text-sm">PS CORE</div>
                  <div className="text-[9px] font-bold opacity-90">شريك موحد</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors">
                  <Palette className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                  <div className="font-bold text-white">الهوية البصرية</div>
                  <div className="text-[10px] text-slate-400">UI/UX وتغليف</div>
                </div>
              </div>

              {/* Single SLA Contract Guarantee */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-300 font-medium">
                ✓ عقد موحد يُنهي تماماً التشتت والتنسيق المرهق بين شركات متعددة
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-bold font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>CHAPTER 06 // CORPORATE SETUP ECOSYSTEM</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              باقات التجهيز المؤسسي الشامل للشركات
            </h3>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              إذا كنت تطلق شركة جديدة أو تجدد منشأتك الحالية، فإن باقة التجهيز المؤسسي من PS تمنحك كل ما تحتاجه من الألف إلى الياء: من تصميم الشعار والبرمجة إلى تمديد شبكات المراقبة وتصوير الإعلانات، في مسار تنفيذي واحد وميزانية مدروسة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>إطلاق الهوية والموقع والتطبيقات في وقت متزامن</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>تجهيز المقر بكاميرات المراقبة والشبكات والإنذار</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>فيلم إعلاني افتتاحي فخم مع إطلاق الحملات التسويقية</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>وفر حتى 35% من الميزانية مقارنة بالتعاقد المنفصل</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowLeft}
                glow
                onClick={() => onNavigate('services')}
              >
                استعرض تفاصيل باقات التجهيز
              </Button>
              <button
                onClick={() => onOpenQuote?.('باقات التجهيز المؤسسي المتكامل')}
                className="text-xs md:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>احجز دراسة تجهيز مؤسسي شاملة</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
