import React, { useState } from 'react';
import { Megaphone, TrendingUp, Users, Target, BarChart3, CheckCircle2, ArrowLeft, DollarSign, MousePointerClick, Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';

export interface DigitalMarketingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenQuote }) => {
  // Interactive Campaign Simulator State
  const [selectedChannel, setSelectedChannel] = useState<'meta' | 'google' | 'tiktok'>('meta');
  const [budgetMultiplier, setBudgetMultiplier] = useState(3500);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const calculateMetrics = () => {
    switch (selectedChannel) {
      case 'meta':
        return {
          reach: (budgetMultiplier * 36).toLocaleString('ar-EG'),
          engagement: (budgetMultiplier * 2.8).toLocaleString('ar-EG'),
          leads: Math.floor(budgetMultiplier * 0.18).toLocaleString('ar-EG'),
          conversions: Math.floor(budgetMultiplier * 0.085).toLocaleString('ar-EG'),
          growth: '+280% نمو متوقع',
          roas: '5.4x عائد استثماري',
          cpa: '$11.80 تكلفة العميل',
        };
      case 'google':
        return {
          reach: (budgetMultiplier * 20).toLocaleString('ar-EG'),
          engagement: (budgetMultiplier * 3.4).toLocaleString('ar-EG'),
          leads: Math.floor(budgetMultiplier * 0.24).toLocaleString('ar-EG'),
          conversions: Math.floor(budgetMultiplier * 0.12).toLocaleString('ar-EG'),
          growth: '+210% نمو متوقع',
          roas: '4.9x عائد استثماري',
          cpa: '$16.50 تكلفة العميل',
        };
      case 'tiktok':
        return {
          reach: (budgetMultiplier * 58).toLocaleString('ar-EG'),
          engagement: (budgetMultiplier * 4.6).toLocaleString('ar-EG'),
          leads: Math.floor(budgetMultiplier * 0.15).toLocaleString('ar-EG'),
          conversions: Math.floor(budgetMultiplier * 0.065).toLocaleString('ar-EG'),
          growth: '+390% نمو متوقع',
          roas: '4.3x عائد استثماري',
          cpa: '$9.20 تكلفة العميل',
        };
    }
  };

  const metrics = calculateMetrics();

  const marketingPillars = [
    {
      title: 'استراتيجية التسويق والتموضع',
      desc: 'تحليل دقيق للسوق والمنافسين ورسم نماذج العملاء المستهدفين لضمان إنفاق كل دولار بهدف تجاري واضح.',
      icon: Target,
    },
    {
      title: 'إدارة منصات السوشيال ميديا',
      desc: 'إدارة تفاعلية يومية للحسابات، وتطوير المحتوى، والرد على الاستفسارات لزيادة المتابعين الأوفياء على إنستغرام وتيك توك وفيسبوك ولينكد إن.',
      icon: Users,
    },
    {
      title: 'صناعة المحتوى التفاعلي',
      desc: 'تصاميم جرافيك عالية التحويل، منشورات دائرية (Carousels) مشوقة، وسيناريوهات ريلز مخصصة لشبكات الإعلانات.',
      icon: Sparkles,
    },
    {
      title: 'الإعلانات الممولة (PPC)',
      desc: 'إدارة استباقية للحملات عبر Meta Advantage+، وحملات أداء جوجل الأقصى، ويوتيوب، وإعلانات تيك توك بمحددات تكلفة صارمة.',
      icon: DollarSign,
    },
    {
      title: 'الاستهداف الذكي والبيانات',
      desc: 'بناء جماهير مخصصة وشبيهة (Lookalike)، مع ربط واجهات تتبع التحويلات من الخوادم (CAPI) للوصول للمشترين الفعليين.',
      icon: MousePointerClick,
    },
    {
      title: 'استقطاب العملاء المحتملين (Leads)',
      desc: 'صفحات هبوط مهيأة للتحويل، ومسارات تواصل مباشر عبر واتساب، مع أتمتة الربط بأنظمة خدمة العملاء والمبيعات (CRM).',
      icon: TrendingUp,
    },
    {
      title: 'التحليلات ولوحات الأداء',
      desc: 'لوحات تحكم تفاعلية وشفافة عبر Looker Studio لتتبع العائد الإعلاني الحقيقي وقيمة العميل دون مؤشرات وهمية.',
      icon: BarChart3,
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'تدقيق الجمهور والعرض التجاري', desc: 'تحليل بيانات العملاء السابقة واقتصاديات المنتج والمنافسين لصياغة عرض لا يُقاوم.' },
    { step: '02', title: 'هيكلة مسارات التحويل والتتبع', desc: 'إعداد واجهات ربط التحويلات بالخادم (CAPI)، وتجهيز خطوط إعادة الاستهداف الذكية.' },
    { step: '03', title: 'إنتاج إبداعي سريع ومكثف', desc: 'ابتكار أكثر من 20 مدخلاً إعلانياً وفيديو موشن وتصاميم متعددة لجذب انتباه المتصفحين فوراً.' },
    { step: '04', title: 'إطلاق واختبار الخوارزميات', desc: 'بدء ميزانيات اختبار مدروسة لاكتشاف أفضل الجماهير والإعلانات تفاعلاً خلال 7 أيام.' },
    { step: '05', title: 'التوسع ومضاعفة العائد', desc: 'ضخ الميزانيات بحكمة في المسارات الأكثر ربحية لتحقيق نمو متسارع في المبيعات.' },
  ];

  const featuresAndBenefits = [
    { title: 'حماية الميزانية من الهدر', desc: 'قواعد تلقائية ذكية توقف أي إعلان غير مجدٍ فوراً لمنع استنزاف الميزانية.' },
    { title: 'تكامل متعدد القنوات', desc: 'إعلانات جوجل تحصد نية الشراء الناتجة عن إعلانات تيك توك وميتا، مما يضاعف الفعالية.' },
    { title: 'شفافية وتقارير حية', desc: 'وصول مباشر للوحة بيانات توضح الإيرادات والعملاء الفعليين وليس مجرد المشاهدات.' },
    { title: 'فريق إبداعي متكامل', desc: 'كتاب إعلانات، ومصممون، ومحررو فيديو يطورون الإعلانات أسبوعياً دون تكاليف إضافية.' },
  ];

  const marketingFaqs = [
    {
      q: 'متى يمكننا توقع تدفق العملاء الفعليين بعد إطلاق الحملات؟',
      a: 'مع حملات استقطاب العملاء المدفوعة، يبدأ وصول أولى الطلبات عادةً خلال 48 إلى 72 ساعة من إطلاق الحملة. تكتمل مرحلة التعلم الخوارزمي في غضون 14 يوماً، مما يتيح تثبيت تكلفة العميل والتوسع بشكل مربح.',
    },
    {
      q: 'ما هي الميزانية الإعلانية المقترحة لبدء تحقيق نتائج ملموسة؟',
      a: 'نوصي عادةً بإنفاق إعلاني شهري يتناسب مع مجال نشاطك وسوقك المستهدف، لضمان حصول خوارزميات ميتا وجوجل على بيانات إحصائية كافية لتحسين التوجيه نحو المشترين المؤهلين.',
    },
    {
      q: 'هل تديرون إنتاج الإعلانات وشراء المساحات معاً؟',
      a: 'نعم، وتلك إحدى أقوى ميزات PRO SETUP. نجمع إنتاج الفيديو الاحترافي، والتصميم الجرافيكي، وشراء المساحات الإعلانية معاً. عند تشبع أي إعلان، يصنع استوديو الإنتاج لدينا نسخاً جديدة فوراً دون تأخير.',
    },
  ];

  const relevantProjects = PORTFOLIO_PROJECTS.filter(p => p.tags?.includes('marketing') || p.category === 'marketing');

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              <span>تسويق رقمي متكامل ومبني على النتائج</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              حوّل ميزانيتك الإعلانية إلى <span className="text-electric-gradient">نمو تجاري مستدام</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              تبني PRO SETUP محركات تسويقية متكاملة تجمع بين التموضع الاستراتيجي، والإدارة الاحترافية للسوشيال ميديا، والإنتاج الإبداعي للإعلانات، وشراء المساحات الخوارزمي الدقيق.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('digital-marketing')}
                icon={ArrowLeft}
              >
                ابدأ خطة التسويق الآن
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('simulator-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                استكشف نموذج التوقعات الإعلانية
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="استراتيجية التسويق الرقمي"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE 7 MANDATED MARKETING PILLARS */}
        <div className="space-y-8">
          <SectionHeading
            badge="المنظومة الاستراتيجية"
            title="الأركان السبعة المتكاملة"
            highlight="للتسويق الرقمي"
            subtitle="كل ركن مصمم لجذب الانتباه، وتأهيل العملاء المحتملين، ومضاعفة العائد على الإنفاق الإعلاني."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {marketingPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-white/[0.08] hover:border-electric-cyan/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. ANIMATED MARKETING CHARTS & SIMULATOR WITH CLEAR SAMPLE NOTATION */}
        <div id="simulator-section" className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                  محاكي نتائج الحملات الإعلانية التفاعلي
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                  (نموذج قياسي توضيحي)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                توقعات أداء الحملات الإعلانية
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                اضبط الميزانية الإعلانية الشهرية التقديرية واختر المنصة الإعلانية لمعاينة الوصول المقدر، والتفاعل، والعملاء المحتملين، ومعدل النمو المتوقع.
              </p>
            </div>

            {/* Platform Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-white/10 self-start md:self-auto">
              {(['meta', 'google', 'tiktok'] as const).map((ch) => (
                <button
                  key={ch}
                  onClick={() => setSelectedChannel(ch)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedChannel === ch
                      ? 'bg-electric-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {ch === 'meta' ? 'ميتا (فيسبوك وإنستغرام)' : ch === 'google' ? 'إعلانات جوجل' : 'إعلانات تيك توك'}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">الميزانية الإعلانية الشهرية المقترحة:</span>
              <span className="font-mono text-base font-bold text-electric-cyan" dir="ltr">${budgetMultiplier.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={budgetMultiplier}
              onChange={(e) => setBudgetMultiplier(Number(e.target.value))}
              className="w-full h-2 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-electric-cyan"
            />
          </div>

          {/* 5 Required Metrics Cards: Reach, Engagement, Leads, Conversions, Growth */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">01 • الوصول (الظهور)</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block font-mono">{metrics.reach}</span>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">جمهور مستهدف مقدر</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">02 • التفاعل (النقرات)</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block font-mono">{metrics.engagement}</span>
              <span className="text-[10px] text-electric-cyan font-mono mt-0.5 block">تفاعل حقيقي ونشط</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-electric-cyan/30 shadow-glow-sm">
              <span className="text-[11px] text-slate-400 block font-medium">03 • العملاء المحتملين (طلبات تواصل)</span>
              <span className="text-xl sm:text-2xl font-black text-electric-cyan mt-1 block font-mono">{metrics.leads}</span>
              <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">{metrics.cpa}</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-white/5">
              <span className="text-[11px] text-slate-400 block font-medium">04 • التحويلات (طلبات شراء)</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block font-mono">{metrics.conversions}</span>
              <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">{metrics.roas}</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-900/90 border border-emerald-500/30">
              <span className="text-[11px] text-slate-400 block font-medium">05 • سرعة النمو المتوقعة</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block font-mono">{metrics.growth}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">تضاعف ربع سنوي</span>
            </div>
          </div>
        </div>

        {/* 4. HOW WE WORK (Workflow Timeline) */}
        <div className="space-y-8">
          <SectionHeading
            badge="خارطة الإنجاز"
            title="منهجية العمل و"
            highlight="التنفيذ الاحترافي"
            subtitle="خمس مراحل مجربة ومحكمة لضمان إطلاق الحملات في وقتها وبأعلى عائد استثماري ممكن."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-dark-800/70 border border-white/5 space-y-2">
                <span className="font-mono text-xs font-bold text-electric-cyan">{step.step}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FEATURES & BENEFITS */}
        <div className="space-y-8">
          <SectionHeading
            badge="لماذا PRO SETUP؟"
            title="المزايا التنافسية و"
            highlight="الفوائد لأعمالك"
            subtitle="أبرز الفروق الجوهرية للعمل مع شريك تسويقي متكامل يجمع كافة التخصصات."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuresAndBenefits.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-dark-800/80 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. PORTFOLIO EXAMPLES */}
        {relevantProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                  نماذج ودراسات حالة
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  أعمال وتجهيزات تسويقية واقعية
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantProjects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-6 rounded-3xl bg-dark-800/90 border border-white/10 flex flex-col sm:flex-row gap-5 items-center">
                  <div className="w-full sm:w-48 aspect-video rounded-2xl overflow-hidden bg-dark-950 shrink-0">
                    <img src={proj.coverImage} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-electric-cyan font-bold uppercase">{proj.industry}</span>
                    <h4 className="text-base font-bold text-white">{proj.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{proj.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="الأسئلة الشائعة"
            title="استفسارات التسويق"
            highlight="والحملات الإعلانية"
            subtitle="إجابات واضحة ومباشرة حول الميزانيات، وفترات التدريب الخوارزمي، وتحديثات المحتوى الإعلاني."
            align="center"
          />

          <div className="space-y-3">
            {marketingFaqs.map((faq, i) => {
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

        {/* 8. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل أنت مستعد لمضاعفة قاعدة عملائك؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            احجز جلسة استشارية متخصصة مع فريق التسويق لدينا لوضع مخطط كامل لمسارات استقطاب العملاء والمبيعات الخاصة بمشروعك.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('digital-marketing')} glow>
              ابدأ خطة التسويق الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
