import React from 'react';
import { 
  Users2, 
  Code2, 
  ShieldCheck, 
  Camera, 
  TrendingUp, 
  Palette, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { Button } from '../../components/common/Button';

interface TheCollectiveStoryProps {
  onExploreServices: () => void;
  onOpenQuote: () => void;
}

export const TheCollectiveStory: React.FC<TheCollectiveStoryProps> = ({
  onExploreServices,
  onOpenQuote,
}) => {
  const pillars = [
    {
      icon: Code2,
      title: 'هندسة البرمجيات والأنظمة السحابية',
      expertRole: 'كبار مهندسي النظم',
      desc: 'بناء مواقع فائقة السرعة، تطبيقات جوال متطورة، وأنظمة إدارة مخصصة تدعم التوسع اللامحدود.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGlow: 'hover:border-cyan-400/50',
      badgeColor: 'text-cyan-400 bg-cyan-500/10'
    },
    {
      icon: ShieldCheck,
      title: 'الأنظمة الأمنية والمراقبة الذكية CCTV',
      expertRole: 'خبراء البنية التحتية الأمنية',
      desc: 'توريد وتركيب كاميرات 4K متقدمة، شبكات PoE معزولة، وبوابات تحكم ذكية لحماية مقراتك على مدار الساعة.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderGlow: 'hover:border-emerald-400/50',
      badgeColor: 'text-emerald-400 bg-emerald-500/10'
    },
    {
      icon: Camera,
      title: 'الإنتاج السينمائي والتصوير التجاري',
      expertRole: 'مخرجو الإعلانات والسينما',
      desc: 'تصوير إعلانات سينمائية بدقة 4K، تصوير منتجات استثنائي، وإنتاج ريلز يخطف الأنظار ويعزز هيبة علامتك.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGlow: 'hover:border-purple-400/50',
      badgeColor: 'text-purple-400 bg-purple-500/10'
    },
    {
      icon: TrendingUp,
      title: 'التسويق الرقمي واستراتيجيات النمو',
      expertRole: 'خبراء النمو والـ Performance',
      desc: 'إدارة حملات إعلانية خوارزمية ذكية، استهداف دقيق للجماهير المربحة، ومسارات استقطاب عملاء فورية.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderGlow: 'hover:border-amber-400/50',
      badgeColor: 'text-amber-400 bg-amber-500/10'
    },
    {
      icon: Palette,
      title: 'استوديو الهوية البصرية وتصميم UI/UX',
      expertRole: 'مبتكرو العلامات وتجربة المستخدم',
      desc: 'تصميم شعارات أيقونية، نظم هوية تجارية كاملة، وواجهات مستخدم تفاعلية ترسخ مكانة شركتك كعلامة عالمية.',
      gradient: 'from-rose-500/20 to-indigo-500/20',
      borderGlow: 'hover:border-rose-400/50',
      badgeColor: 'text-rose-400 bg-rose-500/10'
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden text-right border-y border-white/[0.06] bg-dark-950/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-600/10 border border-electric-cyan/30 text-electric-cyan text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-electric-cyan animate-pulse" />
            <span>قصة تأسيس PS • تحالف النخبة المستقلة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            كُنّا روّاداً لأعمال فريدة في قطاعاتنا...{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-electric-cyan via-blue-400 to-amber-300">
              واليوم اجتمعنا تحت راية واحدة: PS
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            بدلاً من إرهاق نفسك بالتعاقد مع 5 شركات منفصلة تعاني من ضعف التنسيق والمسؤولية المشتتة، جمعنا نخبة المتخصصين والمهندسين الرائدين في كل تخصص، لنقدم لك <strong className="text-white">كياناً دولياً واحداً (PS)</strong> يتولى تأسيس وتجهيز أعمالك بالكامل بنسبة 100%.
          </p>
        </div>

        {/* 5 Integrated Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group relative p-7 rounded-2xl bg-dark-900/90 border border-white/10 ${pillar.borderGlow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle top corner gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.gradient} rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Top row: Icon + Role Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-dark-800 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white group-hover:text-electric-cyan transition-colors" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${pillar.badgeColor}`}>
                      {pillar.expertRole}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-electric-cyan transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>جاهزية تنفيذ دولية</span>
                  </span>
                  <span className="text-electric-cyan font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: The Unified Business Advantage */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-electric-600/30 via-dark-900 to-amber-600/20 border border-electric-cyan/40 shadow-glow-sm flex flex-col justify-between text-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-electric-cyan/20 text-electric-cyan text-xs font-extrabold mb-4">
                <Layers className="w-4 h-4" />
                <span>الميزة التنافسية لـ PS</span>
              </div>
              <h3 className="text-xl font-black text-white mb-3 leading-snug">
                عقد موحد • مسؤولية كاملة • صفر تشتت
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                مع PS، لست بحاجة لملاحقة مصمم، ثم مطور، ثم فني كاميرات، ثم مسوق. مدير حسابك المخصص ينسق المنظومة بأكملها بأعلى المعايير العالمية.
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              icon={ArrowLeft}
              glow
              onClick={onOpenQuote}
              className="w-full font-bold text-sm"
            >
              اطلب باقة التجهيز المتكاملة الآن
            </Button>
          </div>
        </div>

        {/* Bottom Proof Strip */}
        <div className="p-6 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-dark-950 text-xl shadow-lg">
              PS
            </div>
            <div>
              <div className="text-sm font-bold text-white">هل تمتلك شركة أو مشروعاً جديداً ترغب في تجهيزه؟</div>
              <div className="text-xs text-slate-400">نحن هنا لنبدأ معك من الصفر حتى مرحلة التوسع الدولي.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onExploreServices}
              className="text-xs font-bold"
            >
              استكشف تفاصيل القطاعات
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={ArrowLeft}
              glow
              onClick={onOpenQuote}
              className="text-xs font-bold"
            >
              استشارة مجانية مع القيادة
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
