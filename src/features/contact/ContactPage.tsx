import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../../core/config/constants';
import { Button } from '../../components/common/Button';
import { SocialIcons } from '../../components/common/SocialIcons';
import { submitInquiry } from '../../core/firebase/firestore';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: SERVICE_CATEGORIES[0].name,
    budget: '$5,000 – $15,000',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;

    setIsSubmitting(true);
    await submitInquiry({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      message: formData.details,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0066FF', '#00D2FF', '#FFFFFF'],
      });
    } catch {
      // Ignored if canvas-confetti is unavailable
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-600/15 border border-electric-500/25 text-electric-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تعاون وتواصل مباشر</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
            لنصنع شيئاً <span className="text-electric-gradient">عظيماً معاً</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            هل لديك مشروع أو فكرة طموحة؟ شاركنا رؤيتك ولنحول أفكارك إلى منظومة أعمال تجارية وتقنية متكاملة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 2. DIRECT CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">قنوات التواصل المباشرة</h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">محادثة واتساب الفورية</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono" dir="ltr">
                      {COMPANY_INFO.contact.phone}
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-0.5 font-medium">خط مباشر مع فريق الاستشارات</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5 hover:border-electric-cyan/40 hover:bg-electric-600/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">البريد الإلكتروني المباشر</span>
                    <span className="text-sm font-bold text-white group-hover:text-electric-cyan transition-colors font-mono" dir="ltr">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">الاتصال الهاتفي</span>
                    <span className="text-sm font-bold text-white font-mono" dir="ltr">
                      {COMPANY_INFO.contact.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-dark-900 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wider">المقر الرئيسي</span>
                    <span className="text-sm font-bold text-white">
                      {COMPANY_INFO.contact.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media System Bar */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  تواصل معنا عبر المنصات الاجتماعية:
                </span>
                <SocialIcons size="md" variant="glow" />
              </div>
            </div>

            {/* MAP SECTION */}
            <div className="p-6 rounded-3xl bg-dark-800/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Navigation className="w-4 h-4 text-electric-cyan" />
                <span>موقع المقر على الخريطة</span>
              </div>

              <div className="rounded-2xl p-6 bg-dark-950 border border-dashed border-white/15 text-center space-y-2">
                <MapPin className="w-8 h-8 text-electric-cyan mx-auto opacity-70" />
                <span className="text-xs font-semibold text-white block">
                  الموقع: {COMPANY_INFO.contact.address}
                </span>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                  تظهر الخريطة التفاعلية الدقيقة عند اعتماد الإحداثيات الجغرافية الرسمية للمنشأة.
                </p>
              </div>
            </div>
          </div>

          {/* 3. CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-glow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    تم إرسال طلب المشروع بنجاح!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    شكراً لك، <strong className="text-electric-cyan">{formData.name}</strong>. استلم فريق إدارة المشاريع في PRO SETUP تفاصيل مشروعك وسنتواصل معك خلال 24 ساعة بمقترح وخطة عمل واضحة.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                      إرسال طلب مشروع آخر
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white">ابدأ مشروعك الآن</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      املأ هذا النموذج الموجز وسيقوم مسؤولو التجهيز ببدء وضع المخطط المخصص لأعمالك.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">الاسم الكامل *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: محمد أحمد"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">اسم الشركة أو العلامة التجارية</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="مثال: شركة الأفق للاستثمار"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                        dir="ltr"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">رقم الهاتف / واتساب</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="مثال: 01012345678"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                        dir="ltr"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">الخدمة المطلوبة *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                      >
                        {SERVICE_CATEGORIES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="باقة متكاملة (كل الخدمات في مكان واحد)">باقة تجهيز متكاملة (كل الخدمات في مكان واحد)</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">الميزانية التقديرية (بالدولار الأمريكي)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                        dir="ltr"
                      >
                        <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                        <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                        <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                        <option value="$30,000+ (Enterprise)">$30,000+ (Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">تفاصيل ومتطلبات المشروع *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="اذكر نطاق المشروع، والموعد المستهدف للإطلاق، والتحديات التي تواجهك حالياً..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none transition-colors text-right"
                    />
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={Send}
                      isLoading={isSubmitting}
                      glow
                      className="w-full sm:w-auto px-8"
                    >
                      إرسال تفاصيل المشروع
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
