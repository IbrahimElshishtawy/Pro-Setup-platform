import React from 'react';
import { ArrowLeft, Megaphone, Palette, Code2, ShieldCheck, Camera } from 'lucide-react';
import { ActivePage } from '../../core/types/common';

export interface ServicesOverviewProps {
  onNavigate: (page: ActivePage) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'digital-marketing',
      icon: Megaphone,
      title: 'التسويق الرقمي',
      points: [
        'إدارة منصات التواصل الاجتماعي',
        'الإعلانات الممولة والحملات الرقمية',
        'صناعة المحتوى التفاعلي',
        'استراتيجيات اكتساب العملاء والنمو',
      ],
      target: 'digital-marketing' as ActivePage,
      gradient: 'from-blue-600/20 via-blue-500/5 to-transparent',
    },
    {
      id: 'design-branding',
      icon: Palette,
      title: 'الهوية والتصميم',
      points: [
        'تصميم الشعارات الاحترافية',
        'بناء أنظمة الهوية التجارية الشاملة',
        'تصاميم السوشيال ميديا والإعلانات',
        'تصميم واجهات وتجربة المستخدم UI/UX',
      ],
      target: 'design-branding' as ActivePage,
      gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    },
    {
      id: 'software-technology',
      icon: Code2,
      title: 'البرمجيات والتكنولوجيا',
      points: [
        'تطوير المواقع والمنصات السحابية',
        'تطبيقات الهاتف المحمول (Flutter)',
        'الأنظمة الإدارية المخصصة ERP',
        'المتاجر الإلكترونية وبوابات الدفع',
      ],
      target: 'software-technology' as ActivePage,
      gradient: 'from-electric-600/25 via-blue-500/5 to-transparent',
    },
    {
      id: 'security-surveillance',
      icon: ShieldCheck,
      title: 'الأمن والمراقبة الذكية',
      points: [
        'توريد وتركيب كاميرات CCTV',
        'أنظمة كاميرات المراقبة الشبكية IP',
        'تجهيز البنية التحتية وكابلات الشبكات',
        'أنظمة التحكم بالدخول وأجهزة NVR',
      ],
      target: 'security-surveillance' as ActivePage,
      gradient: 'from-indigo-600/20 via-blue-500/5 to-transparent',
    },
    {
      id: 'photography-video',
      icon: Camera,
      title: 'التصوير والإنتاج المرئي',
      points: [
        'التصوير الفوتوغرافي التجاري',
        'تصوير المنتجات الاحترافي',
        'إنتاج الأفلام الإعلانية بدقة 4K',
        'تصوير ومونتاج الريلز والفيديوهات القصيرة',
      ],
      target: 'photography-video' as ActivePage,
      gradient: 'from-blue-500/20 via-cyan-500/5 to-transparent',
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-dark-900 border-t border-white/[0.06] text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
          <div className="space-y-2 max-w-xl text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              خدمات وتخصصات PRO SETUP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              ماذا نقدم <span className="text-electric-cyan">لأعمالك</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed pt-1 font-normal">
              نقدّم منظومة حلول متكاملة تجمع بين الإبداع البصري، التقنيات البرمجية، والاستراتيجيات التسويقية والأمنية لمساعدة أعمالك على التوسع والتفوق.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-electric-cyan transition-colors self-start md:self-end group"
          >
            <span>استعراض كافة الخدمات</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.target)}
                className="group relative rounded-2xl p-6 bg-dark-800/80 hover:bg-dark-750/90 border border-white/[0.08] hover:border-electric-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm cursor-pointer flex flex-col justify-between text-right"
              >
                {/* Subtle top card glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="space-y-5 relative z-10 text-right">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-electric-600/10 border border-electric-500/25 flex items-center justify-center text-electric-cyan group-hover:scale-110 group-hover:bg-electric-600/20 group-hover:shadow-glow-sm transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {card.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs text-slate-400">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-electric-cyan/70 shrink-0" />
                        <span className="truncate">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <div className="pt-6 relative z-10 text-right">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-electric-cyan transition-colors">
                    <span>استكشف المزيد</span>
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
