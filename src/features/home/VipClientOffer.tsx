import React from 'react';
import { Sparkles, Gift, ShieldCheck, Zap, ArrowLeft, Clock, Award, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { ENV } from '../../core/config/env';

interface VipClientOfferProps {
  onClaimOffer: () => void;
}

export const VipClientOffer: React.FC<VipClientOfferProps> = ({ onClaimOffer }) => {
  const cleanPhone = (ENV.CONTACT.WHATSAPP || '201234567890').replace(/[^0-9]/g, '');
  const whatsappHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً فريق PS الدولي، أود تفعيل عرض الافتتاح التجاري وحجز مقعدي كعميل مؤسس بخصم 25% مع الاستشارة المجانية الشاملة.'
  )}`;

  const vipPerks = [
    {
      title: 'خصم استثنائي 25% على باقة التجهيز المتكاملة',
      desc: 'وفّر ربع الميزانية فوراً عند التعاقد على التجهيز البرمجي والأمني والتسويقي الموحد.',
      icon: Zap,
      badge: 'كود: PS-FOUNDER-25'
    },
    {
      title: 'دراسة استشارية وتشخيصية مجانية (Audit)',
      desc: 'فحص شامل للبنية التحتية، الفرص التسويقية، ومراجعة الأنظمة الأمنية بقيمة 1,500$.',
      icon: Gift,
      badge: 'مجاناً 100%'
    },
    {
      title: 'مدير حساب تنفيذي VIP واستجابة 24/7',
      desc: 'قناة اتصال مباشرة مع الإدارة التنفيذية لضمان أولوية التسليم وجودة الإنجاز.',
      icon: ShieldCheck,
      badge: 'أولوية قصوى'
    },
    {
      title: 'مساحة إعلانية وترويجية في قائمة شركاء النجاح',
      desc: 'إبراز شركتك في الصفحة الرئيسية ومساحات الرعاة الرسميين لمنصة PS.',
      icon: Award,
      badge: 'ترويج مجاني'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden z-10">
      {/* Background radial glow specifically for this offer */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[350px] sm:h-[500px] bg-gradient-to-r from-electric-600/15 via-electric-cyan/15 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-14 bg-gradient-to-b from-[#0B132B]/95 via-[#070E20]/95 to-[#040812]/95 border border-amber-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden group">
          
          {/* Animated top shimmer border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer" />

          {/* Floating background decorative badge */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (Right in RTL): Offer Narrative */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-electric-600/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>عرض الافتتاح التجاري الرسمي لـ PS • باقة العملاء المؤسسين</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  كُن <span className="text-amber-400 underline decoration-amber-400/40 decoration-wavy decoration-2">عميلنا المؤسس الأول</span>، واحصل على تجهيز أعمالك بامتيازات VIP!
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  بمناسبة الإطلاق الرسمي لمنظومة <span className="text-white font-bold">PS الدولية</span>، نكافئ أولى الشركات والمشاريع التي تضع ثقتها في نموذجنا المتكامل. نمنحك حزمة تجهيز متكاملة تجمع البرمجة، كاميرات المراقبة، الهوية، والإنتاج المرئي، مع خصم استثنائي وخدمات استشارية مجانية تماماً.
                </p>
              </div>

              {/* Limited Spots Urgency Counter */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">المقاعد المتبقية لحزمة الافتتاح:</div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="text-amber-400 font-extrabold text-base">متبقي 4 مقاعد فقط من أصل 50</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">حجز فوري</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="w-full sm:w-44 space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>نسبة الاكتمال</span>
                    <span className="text-amber-400 font-bold">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-dark-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-electric-cyan rounded-full w-[92%]" />
                  </div>
                </div>
              </div>

              {/* Action Buttons: Web Order + WhatsApp */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowLeft}
                  iconPosition="right"
                  glow
                  onClick={onClaimOffer}
                  className="font-bold text-sm sm:text-base py-4 px-8 shadow-glow-md"
                >
                  احجز مقعدك واطلب العرض (خصم 25%)
                </Button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>تفعيل العرض عبر واتساب</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ضمان رسمي لعقد التجهيز مع الالتزام الصارم بجدول التسليم</span>
              </div>

            </div>

            {/* Right Content (Left in RTL): VIP Perks Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2 mb-2">
                <Award className="w-4 h-4" />
                <span>حزمة امتيازات العميل المؤسس (Founding VIP Package)</span>
              </div>

              {vipPerks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-dark-900/90 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex items-start gap-4 text-right group"
                  >
                    <div className="p-2.5 rounded-xl bg-dark-800 border border-white/10 text-amber-400 group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {perk.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 whitespace-nowrap">
                          {perk.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
