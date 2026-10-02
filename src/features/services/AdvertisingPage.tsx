import React, { useState } from 'react';
import { TrendingUp, Lightbulb, PenTool, Video, Target, Award, ArrowLeft, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Button } from '../../components/common/Button';

export interface AdvertisingPageProps {
  onOpenQuote: (serviceId: string) => void;
}

export const AdvertisingPage: React.FC<AdvertisingPageProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const processSteps = [
    {
      id: 'idea',
      step: '01',
      title: 'الفكرة والزاوية الإعلانية',
      subtitle: 'المدخل النفسي والميزة التنافسية الفريدة',
      desc: 'نكتشف السبب الجوهري الذي يدفع العملاء للشراء منك وتفضيلك على المنافسين، ونصيغ مدخلاً إعلانياً جذاباً ومقنعاً يحفز على الشراء الفوري.',
      icon: Lightbulb,
      deliverable: 'وثيقة الزاوية الإعلانية ونموذج شخصية المشتري',
    },
    {
      id: 'strategy',
      step: '02',
      title: 'الاستراتيجية وتوزيع الميزانية',
      subtitle: 'مخطط القنوات ومسارات التحويل',
      desc: 'تحديد نسب توزيع الميزانيات بدقة عبر ميتا وتيك توك وجوجل، ووضع أهداف واضحة لتكلفة استقطاب العميل (CAC) والعائد المستهدف على الإنفاق (ROAS).',
      icon: Target,
      deliverable: 'خطة الميزانية متعددة المنصات ونظام تتبع العائد',
    },
    {
      id: 'creative',
      step: '03',
      title: 'الابتكار وصياغة الإعلانات',
      subtitle: 'نصوص تسويقية وبنرات بصرية خاطفة للأنظار',
      desc: 'يصمم فريقنا أكثر من 20 تنويعاً بصرياً وبنرات ترويجية ذات تباين عالٍ، ونصوصاً تسويقية مقنعة مصممة لإيقاف تصفح المستخدم خلال ثانيتين فقط.',
      icon: PenTool,
      deliverable: 'أكثر من 20 تصميماً إعلانياً وصياغة نصوص متعددة',
    },
    {
      id: 'production',
      step: '04',
      title: 'الإنتاج والمحتوى المرئي',
      subtitle: 'فيديوهات 4K ومحتوى تفاعلي سريع',
      desc: 'ينتج الاستوديو فيديوهات رأسية 4K، وتجارب استخدام تفاعلية للمنتجات، ورسوم متحركة ونصوصاً سينمائية مهيأة لكافة مقاسات المنصات الإعلانية.',
      icon: Video,
      deliverable: 'فيديوهات إعلانية عالية الدقة بمقاسات 9:16 و 16:9',
    },
    {
      id: 'advertising',
      step: '05',
      title: 'الإطلاق وإدارة المزايدات',
      subtitle: 'التوزيع الخوارزمي والتتبع من الخوادم',
      desc: 'إطلاق الحملات عبر منصات Meta Advantage+، وحملات أداء جوجل الأقصى، وتيك توك، مع تفعيل تتبع CAPI وقواعد تلقائية لإدارة الميزانية الذكية.',
      icon: TrendingUp,
      deliverable: 'حملات نشطة ومحمية تماماً من إهدار الميزانية',
    },
    {
      id: 'optimization',
      step: '06',
      title: 'التحسين ومضاعفة التوسع',
      subtitle: 'توسيع الحملات الرابحة وزيادة الأرباح',
      desc: 'ضخ الميزانية الإعلانية بقوة في المجموعات الإعلانية الأكثر ربحية مع إيقاف أي إعلان منخفض العائد، لتحقيق نمو تصاعدي ومستدام في الأرباح.',
      icon: Award,
      deliverable: 'عائد إعلاني مجمع يتجاوز 4.8x في المتوسط',
    },
  ];

  const campaignShowcase = [
    {
      title: 'حملة توسع علامة Velox المباشرة',
      category: 'التجارة الإلكترونية والأزياء الفاخرة',
      highlight: 'نمو المبيعات الشهرية بأكثر من 7 أضعاف خلال 90 يوماً',
      metric: '4.9x عائد إعلاني ROAS',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      description: 'حملة إعلانية اعتمدت مقاطع فيديو ريلز تفاعلية مع مسارات تسوق متقدمة عبر ميتا وإعادة استهداف تلقائي لزوار المتجر.',
    },
    {
      title: 'حملة اشتراكات أندية Aura الفاخرة',
      category: 'اللياقة البدنية ونمط الحياة الراقي',
      highlight: 'أكثر من 1,420 اشتراكاً جديداً خلال 60 يوماً',
      metric: '5.2x عائد إعلاني ROAS',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      description: 'إعلانات فيديو جغرافية موجهة حثت على حجز الاستشارات عبر واتساب مباشرة مع توزيع تلقائي للعملاء على مسؤولي المبيعات.',
    },
  ];

  const advertisingFaqs = [
    {
      q: 'كيف تضمن PRO SETUP عدم إهدار الميزانية الإعلانية على نقرات غير مربحة؟',
      a: 'نعتمد قواعد أتمتة خوارزمية وربطاً مباشراً مع خوادم التتبع (CAPI) يوقف فوراً أي مجموعة إعلانية تتجاوز السقف المحدد لتكلفة العميل خلال 48 ساعة، مما يحمي ميزانيتك من الاستنزاف.',
    },
    {
      q: 'هل تقومون بتجديد التصاميم والمحتوى الإعلاني باستمرار لتفادي تراجع التفاعل؟',
      a: 'نعم بالتأكيد. يعد تشبع الإعلانات السبب الأول لتراجع أداء الحملات؛ وبما أننا نمتلك استوديوهات تصوير وتصميم ومونتاج داخلية متكاملة، فإننا نطلق تنويعات إعلانية جديدة كل 7 إلى 10 أيام للحفاظ على أعلى عائد استثماري.',
    },
    {
      q: 'ما هي أدوات التتبع التي تعتمدونها لقياس العائد الحقيقي على الاستثمار؟',
      a: 'نربط بيانات بيكسل المنصات الإعلانية مع واجهات تتبع الخوادم CAPI، وأدوات Google Analytics 4 المتطورة، لتقديم تقارير شفافة توضح المبيعات والإيرادات النقدية الفعلية المحققة من كل إعلان.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>الحملات الإعلانية الممولة وإدارة الميزانيات</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
              حملات إعلانية تضاعف <span className="text-electric-gradient">عوائد استثمارك</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              الإعلانات ليست تكلفة أو عبئاً، بل عندما تُدار بتوجيه إبداعي دقيق وشراء مساحات مستند إلى الأرقام والبيانات، تصبح الاستثمار الأكثر ربحية ونمواً في مشروعك.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                glow
                onClick={() => onOpenQuote('advertising')}
                icon={ArrowLeft}
              >
                أطلق حملتك الإعلانية الآن
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('ad-process-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                استكشف مراحل العمل الست
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-dark-800 relative group">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                alt="نمو الحملات الإعلانية"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. THE COMPLETE 6-STEP PROCESS */}
        <div id="ad-process-section" className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
              منهجية إدارة الحملات في PRO SETUP
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              المراحل الست لإطلاق الحملات الإعلانية الناجحة
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              الفكرة والزاوية ← الاستراتيجية ← التصميم وصياغة الإعلانات ← الإنتاج المرئي ← الإطلاق الخوارزمي ← التحسين والتوسع
            </p>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl border text-right transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-dark-900 border-electric-cyan shadow-glow-sm scale-[1.02]'
                      : 'bg-dark-950/70 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-electric-cyan' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-electric-cyan' : 'text-slate-400'}`} />
                  </div>
                  <span className="text-xs font-bold text-white block">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase */}
          {(() => {
            const current = processSteps[activeStep];
            const Icon = current.icon;

            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-dark-950 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-electric-600/20 border border-electric-500/40 flex items-center justify-center text-electric-cyan shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-electric-cyan uppercase tracking-wider block">
                        المرحلة {current.step} من 06
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white">
                        {current.title}: {current.subtitle}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {current.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>المخرج الأساسي للمرحلة: {current.deliverable}</span>
                  </div>
                </div>

                <div className="md:col-span-4 p-5 rounded-xl bg-dark-900 border border-white/5 text-center flex flex-col items-center justify-center space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">اكتمال مسار الإنجاز</span>
                  <span className="text-3xl font-black text-electric-cyan font-mono" dir="ltr">
                    {Math.round(((activeStep + 1) / 6) * 100)}%
                  </span>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => prev - 1)}
                      className="px-3.5 py-1.5 rounded-lg bg-dark-800 text-xs font-medium text-slate-300 disabled:opacity-40"
                    >
                      السابق
                    </button>
                    <button
                      disabled={activeStep === 5}
                      onClick={() => setActiveStep(prev => prev + 1)}
                      className="px-3.5 py-1.5 rounded-lg bg-electric-600 text-xs font-medium text-white disabled:opacity-40"
                    >
                      المرحلة التالية ←
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 3. CAMPAIGN SHOWCASE */}
        <div className="space-y-8">
          <SectionHeading
            badge="نتائج موثقة"
            title="نماذج من الحملات"
            highlight="عالية العائد"
            subtitle="استكشف كيف حققت استراتيجياتنا الإعلانية عوائد استثنائية لشركائنا."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaignShowcase.map((camp, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-dark-800 border border-white/10 p-6 space-y-4 shadow-xl"
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-dark-950 relative">
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    {camp.metric}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-electric-cyan font-bold uppercase">{camp.category}</span>
                  <h4 className="text-xl font-bold text-white">{camp.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{camp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SERVICE-SPECIFIC FAQ */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <SectionHeading
            badge="استفسارات الحملات"
            title="الأسئلة الشائعة حول"
            highlight="الحملات الإعلانية"
            subtitle="إجابات دقيقة حول وتيرة الإنفاق الإعلاني، ودقة تتبع الإيرادات، وتجديد المواد الإعلانية."
            align="center"
          />

          <div className="space-y-3">
            {advertisingFaqs.map((faq, i) => {
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

        {/* 5. CTA SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل ترغب في مضاعفة العائد على إعلاناتك؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            احجز جلسة مراجعة متخصصة لاستراتيجيتك الإعلانية مع مديري الحملات لدينا لتحديد نقاط التسرب وفرص النمو في مسارات استقطاب العملاء.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote('advertising')} glow>
              ابدأ إعداد حملتك الإعلانية الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
