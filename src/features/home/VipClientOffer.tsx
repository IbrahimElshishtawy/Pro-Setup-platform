import React from 'react';
import { Sparkles, Gift, ShieldCheck, Zap, ArrowLeft, Clock, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';

interface VipClientOfferProps {
  onClaimOffer: () => void;
}

export const VipClientOffer: React.FC<VipClientOfferProps> = ({ onClaimOffer }) => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden z-10">
      {/* Background radial glow specifically for this offer */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[350px] sm:h-[500px] bg-gradient-to-r from-electric-600/15 via-electric-cyan/15 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-14 bg-gradient-to-b from-[#0B132B]/90 via-[#070E20]/90 to-[#040812]/95 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden group">
          
          {/* Animated top shimmer border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-cyan to-transparent animate-shimmer" />

          {/* Floating background decorative badge */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-electric-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (Right in RTL): Offer Narrative */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 to-electric-600/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>عرض الإطلاق التجاري الحصري • لفترة محدودة</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  كُن <span className="text-electric-cyan underline decoration-electric-cyan/40 decoration-wavy decoration-2">عميلنا المميّز الأوّل</span>، واحصل على تجهيز أعمالك بامتيازات VIP!
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  في <span className="text-white font-bold">PRO SETUP</span>، نقدر الشراكات الرائدة. نمنح أول 5 عملاء مميزين هذا الشهر حزمة تجهيز متكاملة (برمجة، تسويق، هوية، أمن، وإنتاج مرئي) بأسعار استثنائية مع ميزات حصرية لا تتكرر.
                </p>
              </div>

              {/* Limited Spots Urgency Counter */}
              <div className="p-4 rounded-2xl bg-dark-950/70 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">المقاعد المتبقية للعرض الحصري:</div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="text-amber-400 font-extrabold text-base">متبقي 2 من أصل 5 مقاعد فقط</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">ينتهي قريباً</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="w-full sm:w-44 space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>نسبة الحجز</span>
                    <span className="text-electric-cyan font-bold">60%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-dark-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-electric-600 to-electric-cyan rounded-full w-[60%]" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowLeft}
                  iconPosition="right"
                  glow
                  onClick={onClaimOffer}
                  className="font-bold text-sm sm:text-base py-4 px-8 shadow-glow-md"
                >
                  احجز مقعدك واطلب باقتك بخصم 25% الآن
                </Button>
                
                <div className="flex items-center gap-2 justify-center sm:justify-start text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ضمان تسليم رسمي ومتابعة مباشرة عبر واتساب</span>
                </div>
              </div>

            </div>

            {/* Right Content (Left in RTL): VIP Perks Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-electric-cyan font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>حزمة امتيازات العميل الأول (VIP Benefits)</span>
              </div>

              {/* Perk 1 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-electric-cyan/40 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-electric-600 to-electric-cyan text-white shadow-glow-sm shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-right">
                  <h4 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>خصم مباشر 25% على إجمالي التجهيز</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">كود: FIRST-VIP-25</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    وفر ربع تكلفة التجهيز الشامل لشركتك سواء في البرمجيات، الهوية، أو الكاميرات والتسويق.
                  </p>
                </div>
              </div>

              {/* Perk 2 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-electric-cyan/40 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-dark-950 shadow-glow-sm shrink-0 font-bold">
                  <Gift className="w-5 h-5 text-dark-950" />
                </div>
                <div className="space-y-1 text-right">
                  <h4 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>استشارة تحليل استراتيجي مجانية</span>
                    <span className="text-[11px] text-amber-400 font-mono">قيمة $500 هدية</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    جلسة عمل 60 دقيقة مع مستشار تقني وتسويقي لتحديد الفجوات التنافسية وبناء خطة الانطلاق.
                  </p>
                </div>
              </div>

              {/* Perk 3 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-electric-cyan/40 transition-all flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-glow-sm shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-right">
                  <h4 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>3 أشهر دعم فني وتحديثات مجاناً</span>
                    <span className="text-[11px] text-emerald-300 font-mono">استجابة سريعة 24/7</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    فريقنا التقني في خدمتك على مدار الساعة لضمان استقرار أنظمتك وحملاتك بعد الإطلاق مباشرة.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
