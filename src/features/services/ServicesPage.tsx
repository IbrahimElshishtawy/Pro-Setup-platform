import React from 'react';
import { ArrowLeft, CheckCircle2, Megaphone, Palette, Code2, ShieldCheck, Camera, TrendingUp } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { ActivePage } from '../../core/types/common';

export interface ServicesPageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const serviceCategories = [
    {
      id: 'digital-marketing',
      title: 'التسويق الرقمي والسوشيال ميديا',
      pageId: 'digital-marketing' as ActivePage,
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      description: 'بناء منظومة تسويق رقمي ذكية تجلب العملاء بدقة واستدامة. نجمع بين السرد القصصي المقنع والتوزيع الخوارزمي الدقيق للحملات الإعلانية لتحقيق نمو تجاري مضاعف.',
      services: [
        'إدارة استراتيجية لمنصات التواصل الاجتماعي',
        'حملات إعلانية مدفوعة وموجهة (ميتا، جوجل، تيك توك)',
        'صناعة المحتوى التفاعلي والجداول التحريرية الشهرية',
        'هندسة مسارات استقطاب العملاء المحتملين (Funnels)',
        'الاستهداف المتقدم وإعادة الاستهداف المخصص',
        'لوحات تحكم وتحليلات أداء دورية ودقيقة',
      ],
      ctaText: 'استكشف حلول التسويق الرقمي',
    },
    {
      id: 'design-branding',
      title: 'الهوية البصرية وتصميم تجربة المستخدم (UI/UX)',
      pageId: 'design-branding' as ActivePage,
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
      description: 'نصمم هويات بصرية راسخة في الأذهان، وواجهات مستخدم رقمية سهلة وفائقة الجاذبية تفرض احترام علامتك التجارية وتمنحك مكانة رائدة وموثوقة في السوق.',
      services: [
        'تصميم الشعارات المبنية على النسب الهندسية الدقيقة',
        'أنظمة الهوية البصرية المتكاملة للمؤسسات والشركات',
        'دليل إرشادات العلامة التجارية الشامل (Brand Guidelines)',
        'تصميم واجهات وتجربة المستخدم للمواقع وتطبيقات الجوال',
        'تصاميم التغليف والعلب الفاخرة والمطبوعات التجارية',
        'مكتبات الرسوم المتحركة (Motion) والمحتوى الرقمي',
      ],
      ctaText: 'استكشف استوديو الهوية والتصميم',
    },
    {
      id: 'software-technology',
      title: 'البرمجيات وتطوير المنصات والتطبيقات',
      pageId: 'software-technology' as ActivePage,
      icon: Code2,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
      description: 'تطوير منصات وتطبيقات قوية وعالية الأمان تؤتمت العمليات وتخدم مستخدميك بسرعة فائقة. كود برمجي معياري نظيف مصمم للتوسع من اليوم الأول.',
      services: [
        'تطوير منصات ومواقع الويب المتطورة والسريعة',
        'تطبيقات هواتف ذكية عبر Flutter تعمل على iOS و Android',
        'أنظمة إدارة الشركات وتخطيط الموارد (ERP & CRM)',
        'لوحات تحكم تفاعلية متقدمة وربط الواجهات البرمجية (APIs)',
        'متاجر إلكترونية متكاملة مع بوابات الدفع والشحن',
        'معمارية سحابية آمنة وقواعد بيانات فائقة السرعة',
      ],
      ctaText: 'اكتشف الحلول البرمجية والتقنية',
    },
    {
      id: 'security-surveillance',
      title: 'أنظمة المراقبة والأمان الذكي (CCTV)',
      pageId: 'security-surveillance' as ActivePage,
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
      description: 'حماية مقراتك، أصولك، وموظفيك بأحدث شبكات المراقبة الرقمية. نقضي على النقاط العمياء تماماً بكاميرات 4K تدعم الذكاء الاصطناعي وأنظمة الدخول البيومترية.',
      services: [
        'توريد وتركيب كاميرات المراقبة التجارية للمنشآت',
        'كاميرات IP بدقة 4K مع تحليلات كشف الحركة والوجوه',
        'أجهزة تسجيل مركزية NVR مع تخزين احتياطي آمن',
        'تمديد شبكات سلكية معزولة فائقة السرعة Cat6/Cat7',
        'بوابات الدخول الذكية بالبصمة وأجهزة تسجيل الحضور',
        'بث مباشر على الهاتف وتنبيهات أمنية فورية على مدار الساعة',
      ],
      ctaText: 'فحص أنظمة المراقبة والأمان',
    },
    {
      id: 'photography-video',
      title: 'التصوير الفوتوغرافي والإنتاج السينمائي',
      pageId: 'photography-video' as ActivePage,
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
      description: 'إنتاج إعلامي وسينمائي فائق الدقة يخطف الأنظار. بمعدات سينمائية وإضاءات احترافية وهندسة ألوان وصوت متقدمة، ننتج محتوى بصرياً يحفز الشراء.',
      services: [
        'تصوير المنتجات الاحترافي التجاري وتصوير الاستوديو',
        'إنتاج إعلانات تجارية سينمائية بدقة 4K فائقة الوضوح',
        'فيديوهات ريلز وتيك توك سريعة الانتشار ومحكمة الجذب',
        'أفلام وثائقية تعريفية بالشركات ولقاءات القيادات',
        'تجهيز الإضاءات السينمائية والديكورات الاحترافية',
        'مونتاج وتلوين سينمائي معتمد وهندسة صوتية متكاملة',
      ],
      ctaText: 'شاهد معرض الإنتاج البصري والسينمائي',
    },
    {
      id: 'advertising',
      title: 'الحملات الإعلانية والتسويق الرقمي المباشر',
      pageId: 'advertising' as ActivePage,
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
      description: 'إدارة حملات إعلانية متكاملة مبنية على استهداف جراحي دقيق وشراء مساحات إعلانية مستند إلى البيانات، لنحول ميزانيتك الإعلانية إلى تدفق مستمر للعملاء والمبيعات.',
      services: [
        'استراتيجية إعلانية شاملة لكامل مراحل اتخاذ القرار (Funnel)',
        'إنتاج تنويعات إبداعية متعددة لاختبار أفضل الإعلانات',
        'إدارة الإعلانات عبر ميتا، إعلانات جوجل، وتيك توك',
        'تتبع التحويلات من الخوادم (CAPI) وقياس مساهمة القنوات',
        'اختبارات مستمرة لافتتاحيات الإعلانات لرفع التفاعل',
        'توسيع الحملات الناجحة ورفع العائد على الإنفاق (ROAS)',
      ],
      ctaText: 'استكشف الحملات الإعلانية المدارة',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
            <span>منظومة متكاملة لنمو الأعمال</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
            كل ما تحتاجه <span className="text-electric-gradient">أعمالك في مكان واحد</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            من التخطيط الاستراتيجي والإبداع البصري إلى البرمجة المتقدمة، وإدارة الحملات الإعلانية، والتأمين الشامل — نجمع كل احتياجاتك تحت سقف واحد بكفاءة لا تضاهى.
          </p>
        </div>

        {/* 2. ALTERNATING LAYOUT CATEGORIES */}
        <div className="space-y-16 lg:space-y-24">
          {serviceCategories.map((cat, index) => {
            const Icon = cat.icon;
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={cat.id}
                className="group relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-dark-800/80 border border-white/10 hover:border-electric-cyan/40 backdrop-blur-2xl transition-all duration-500 hover:shadow-glow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* VISUAL COLUMN */}
                  <div className={`lg:col-span-6 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/11] bg-dark-950">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                      
                      {/* Floating Category Number Tag */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dark-900/85 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-electric-cyan">
                        0{index + 1} // قطاع
                      </div>
                    </div>
                  </div>

                  {/* CONTENT COLUMN */}
                  <div className={`lg:col-span-6 space-y-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan shadow-sm shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                          {cat.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {cat.description}
                      </p>
                    </div>

                    {/* Services List with Checkmarks */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        القدرات والمخرجات المتضمنة:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.services.map((svc, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-200 font-medium">{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ArrowLeft}
                        glow
                        onClick={() => onNavigate(cat.pageId)}
                      >
                        {cat.ctaText}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onOpenQuote(cat.id)}
                      >
                        طلب عرض سعر
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">هل تحتاج إلى إعداد شامل لخدمات متعددة معاً؟</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            وفّر وقتك وتخلص من أعباء التنسيق بين عدة موردين وشركات. تواصل مع فريق متكامل يقود علامتك، برمجياتك، حملاتك الإعلانية، وتأمين مقراتك باحترافية وتناسق كامل.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onOpenQuote()} glow>
              ابدأ إعداد متكامل لأعمالك الآن
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
