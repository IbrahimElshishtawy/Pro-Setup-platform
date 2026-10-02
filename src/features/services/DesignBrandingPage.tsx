import React, { useState } from 'react';
import { Palette, ArrowLeft, Eye, Sparkles, Box, Layout, PenTool, Image as ImageIcon, ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface DesignBrandingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const DesignBrandingPage: React.FC<DesignBrandingPageProps> = ({ onOpenQuote }) => {
  const [selectedPalette, setSelectedPalette] = useState<'cyber' | 'luxury' | 'minimal'>('cyber');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const creativeDisciplines = [
    { name: 'تصميم الشعارات (Logos)', desc: 'شعارات مبنية على النسب الذهبية وأيقونات بصرية خالدة مصممة للظهور بوضوح عبر الأيقونات الرقمية واللافتات الضخمة.', icon: PenTool },
    { name: 'الهوية البصرية المتكاملة', desc: 'لغة بصرية مؤسسية شاملة، وتناغم لوني هندسي مدروس، وتوليفات خطوط مخصصة، وأدلة استخدام متكاملة للعلامة التجارية.', icon: Palette },
    { name: 'تصاميم السوشيال ميديا', desc: 'تصاميم تخطف الأنظار، وقوالب Figma جاهزة للمنشورات والقصص، ورسوم خطية ونصوص متحركة (Kinetic Typography).', icon: ImageIcon },
    { name: 'التصاميم الإعلانية والترويجية', desc: 'بنرات إعلانية رقمية عالية الجاذبية، وإعلانات الطرق، والمطبوعات الترويجية المصممة لرفع معدلات النقر والتحويل.', icon: Sparkles },
    { name: 'تصميم التغليف والعلب', desc: 'تصاميم علب وتغليف فاخرة وملموسة، وتخطيط هندسي لخطوط القص، وتحديد طبقات اللمعان والطباعة البارزة (Debossed).', icon: Box },
    { name: 'تصميم واجهات وتجربة المستخدم (UI/UX)', desc: 'واجهات مستخدم تفاعلية انسيابية، ومخططات هيكلية، ومكتبات عناصر متكاملة للمواقع وتطبيقات الهواتف الذكية.', icon: Layout },
  ];

  const studioProjects = [
    {
      name: 'هوية Lumina المعمارية',
      category: 'العمارة الفاخرة والديكور الداخلي',
      services: 'تصميم الشعار • الهوية البصرية • المطبوعات • كتاب العلامة',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'هوية بصرية معمارية مهيبة تعتمد نظام الشبكات السويسرية الصارمة مع لمسات ذهبية بارزة في المطبوعات الفاخرة.',
    },
    {
      name: 'تجربة تغليف Velox الفاخرة',
      category: 'المنتجات الاستهلاكية الفاخرة',
      services: 'تصميم التغليف • خطوط القص المخصصة • الطلاء الحراري اللامع',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
      description: 'علب هدايا فاخرة بمغناطيس خفي مع ملمس مخملي مطفأ وشعار معدني بارز يعزز قيمة المنتج عند فتح الصندوق.',
    },
    {
      name: 'واجهات تطبيق Aura الذكي',
      category: 'تصميم واجهات وتجربة المستخدم (UI/UX)',
      services: 'تصميم UI/UX • نظام التصميم القياسي • التفاعلات الحركية',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
      description: 'واجهة داكنة متطورة مع تدرجات نيون انسيابية، ورسوم بيانية تفاعلية وتجربة مستخدم تركز على البساطة والسرعة.',
    },
    {
      name: 'دليل هوية Nexus اللوجستية',
      category: 'النقل والخدمات اللوجستية',
      services: 'دليل العلامة الرئيسي • الأيقونات • تصميم أسطول الشاحنات',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      description: 'دليل قياسي شامل يضم معايير الهوية المؤسسية واستخداماتها على أسطول الشاحنات والمقرات والمراسلات الرسمية.',
    },
  ];

  const designProcess = [
    { step: '01', title: 'التدقيق والتموضع البصري', desc: 'تحليل دقيق للمنافسين في السوق وتحديد النبرة النفسية والطابع العام لشخصية العلامة التجارية.' },
    { step: '02', title: 'لوحات الإلهام والمسارات الإبداعية', desc: 'تطوير 3 اتجاهات إبداعية متباينة تستكشف فلسفة الخطوط، ونظرية الألوان، ورموز الشعار.' },
    { step: '03', title: 'هندسة الهوية وصقل التفاصيل', desc: 'صقل الاتجاه المعتمد عبر شبكات هندسية دقيقة، ومنحنيات فيكتور عالية الاحترافية، وتباين الخطوط.' },
    { step: '04', title: 'المطبوعات وتطبيقات الواقع', desc: 'تصميم المطبوعات الرسمية، وخطوط قص التغليف، وقوالب السوشيال ميديا، ونماذج Figma التفاعلية.' },
    { step: '05', title: 'دليل العلامة وتسليم الملفات المفتوحة', desc: 'تسليم كافة الملفات المصدرية الأصلية (AI, SVG, EPS, PDF, Figma) مع دليل إرشادات الاستخدام.' },
  ];

  const designFaqs = [
    {
      q: 'ما هي المخرجات المتضمنة في باقة الهوية البصرية الكاملة من PRO SETUP؟',
      a: 'تتضمن الباقة المتكاملة: الشعار الأساسي والفرعي، الأيقونات المستجيبة، لوحة الألوان الرقمية والمطبوعة (HEX, RGB, CMYK, Pantone)، الخطوط المعتمدة، قوالب المطبوعات والمراسلات الرسمية، حزمة تصاميم السوشيال ميديا، ودليل إرشادي شامل (Brand Guidelines).',
    },
    {
      q: 'هل نمتلك كامل حقوق الملكية الفكرية للشعار والتصاميم بعد التسليم؟',
      a: 'نعم بنسبة 100%. بمجرد اكتمال المشروع واعتماده، تنتقل إليكم ملكية كافة الملفات المصدرية المفتوحة وحقوق الملكية الفكرية والتجارية الكاملة دون أي قيود.',
    },
    {
      q: 'هل تساعد PRO SETUP في تجهيز الملفات للطباعة والتنسيق مع المطابع؟',
      a: 'بالتأكيد. نسلم ملفات فيكتور جاهزة للطباعة مع خطوط القص الدقيقة، وتحديد مناطق الورنيش الموضعي (Spot UV)، والتذهيب الحراري، ونوصي بأفضل خامات الورق وننسق مباشرة مع المطابع المتخصصة.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5" />
              <span>استوديو الإبداع وتصميم الهوية البصرية</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              هويات بصرية تصنع <span className="text-electric-gradient">هيبة علامتك التجارية</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              في الأسواق المزدحمة، الحضور البصري القوي هو مفتاح تميزك الحقيقي. نصمم هويات بصرية أيقونية، وتغليفاً فاخراً، وتجارب واجهات مستخدم (UI/UX) تترك انطباعاً دائماً بالفخامة والاحترافية.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('design-branding')}
                icon={ArrowLeft}
              >
                اصنع هوية علامتك الآن
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('studio-gallery');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                استعرض معرض التصاميم
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
                alt="كتاب الهوية البصرية"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE 6 CREATIVE DISCIPLINES */}
        <div className="space-y-8">
          <SectionHeading
            badge="قدرات الاستوديو"
            title="التخصصات الإبداعية و"
            highlight="حلول التصميم"
            subtitle="نجمع بين الرؤية الاستراتيجية للعلامة التجارية والتنفيذ الفني عالي المستوى."
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

        {/* 3. LARGE PROJECT PREVIEWS & INTERACTIVE GALLERY */}
        <div id="studio-gallery" className="space-y-8">
          <SectionHeading
            badge="معرض الاستوديو التفاعلي"
            title="نماذج بارزة من"
            highlight="إبداعاتنا البصرية"
            subtitle="مرر مؤشر الماوس فوق أي مشروع لاستكشاف الخدمات المقدمة، والتفاصيل الفنية للتنفيذ."
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

                {/* Full Dark Overlay Reveal on Hover */}
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
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">الخدمات المنفذة</span>
                      <span className="text-xs font-semibold text-slate-200 block">{proj.services}</span>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      icon={ArrowLeft}
                      onClick={() => onOpenQuote('design-branding')}
                      glow
                    >
                      طلب تفاصيل وتصميم مماثل
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
              <h4 className="text-lg font-bold text-white">نظام رموز وألوان الهوية التفاعلي</h4>
              <p className="text-xs text-slate-400">نماذج لتناغم درجات الألوان القياسية التي نصممها في أدلة الهوية البصرية.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">نمط اللوحة:</span>
              {(['cyber', 'luxury', 'minimal'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPalette(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedPalette === p ? 'bg-electric-600 text-white shadow-sm' : 'bg-dark-900 text-slate-400 border border-white/10'
                  }`}
                >
                  {p === 'cyber' ? 'تقني معاصر' : p === 'luxury' ? 'فخامة وذهبي' : 'تبسيطي Minimal'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" dir="ltr">
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
            badge="المنهجية الفنية"
            title="مراحل تصميم وبناء"
            highlight="الهوية البصرية"
            subtitle="خمس خطوات منتظمة من جلسة الاستكشاف الأولى وحتى تسليم الملفات المصدرية المفتوحة."
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
            badge="إرشادات وتوضيحات"
            title="الأسئلة الشائعة حول"
            highlight="الهوية والتصميم"
            subtitle="إجابات واضحة حول صيغ الملفات، ونقل حقوق الملكية الفكرية، وتجهيزات المطبوعات."
            align="center"
          />

          <div className="space-y-3">
            {designFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="rounded-2xl border border-white/10 bg-dark-800/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-right"
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
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل أنت مستعد لبناء هوية بصرية استثنائية؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            ارتقِ بعلامتك التجارية فوق المنافسين بنظام بصري متكامل يفرض الاحترام والثقة من اللحظة الأولى.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('design-branding')} glow>
              ابدأ مشروع الهوية الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
