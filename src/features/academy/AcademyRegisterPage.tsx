import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  Loader2, 
  BookOpen, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ACADEMY_COURSES } from '../../data/academyData';
import { submitAcademyRegistration } from '../../core/firebase/firestore';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { COMPANY_INFO } from '../../core/config/constants';

export interface AcademyRegisterPageProps {
  initialCourseSlug?: string;
  onNavigateToCatalog: () => void;
  onBackToAcademyHome: () => void;
}

export const AcademyRegisterPage: React.FC<AcademyRegisterPageProps> = ({
  initialCourseSlug,
  onNavigateToCatalog,
  onBackToAcademyHome,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [courseSlug, setCourseSlug] = useState(initialCourseSlug || ACADEMY_COURSES[0]?.slug || '');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [preferredFormat, setPreferredFormat] = useState<'in-person' | 'online-live' | 'flexible'>('flexible');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'phone' | 'email'>('whatsapp');
  const [message, setMessage] = useState('');

  // Form states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [registrationResult, setRegistrationResult] = useState<{
    registrationNumber: string;
    mode: 'firebase' | 'local';
  } | null>(null);

  // Sync if initialCourseSlug changes
  useEffect(() => {
    if (initialCourseSlug) {
      setCourseSlug(initialCourseSlug);
    }
  }, [initialCourseSlug]);

  const selectedCourse = ACADEMY_COURSES.find((c) => c.slug === courseSlug) || ACADEMY_COURSES[0];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = 'يرجى كتابة الاسم الثلاثي بالكامل';
    }

    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      errs.phoneNumber = 'يرجى إدخال رقم هاتف صحيح للتواصل عبر واتساب أو الاتصال';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }

    if (!courseSlug) {
      errs.courseSlug = 'يرجى اختيار الدورة أو المسار التدريبي';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitAcademyRegistration({
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim() || undefined,
        courseSlug,
        courseTitle: selectedCourse?.title || courseSlug,
        experienceLevel,
        preferredFormat,
        preferredContact,
        message: message.trim() || undefined,
      });

      setRegistrationResult({
        registrationNumber: res.registrationNumber,
        mode: res.mode,
      });
      setSubmitSuccess(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } catch (err) {
      console.error('Registration failed:', err);
      setErrors({ form: 'حدث خطأ أثناء إرسال التسجيل، يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر واتساب.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const cleanPhone = (COMPANY_INFO.contact.whatsappNumber || '201099959133').replace(/[^0-9]/g, '');
  const whatsappConfirmHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `مرحباً أكاديمية ProSetup، قمت بالتسجيل في دورة (${selectedCourse?.title}) برقم حجز: ${registrationResult?.registrationNumber || ''}، وأود تأكيد المواعيد.`
  )}`;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs font-semibold text-slate-400">
          <button
            onClick={onBackToAcademyHome}
            className="hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>الرئيسية للأكاديمية</span>
          </button>
          <span>/</span>
          <span className="text-cyan-400">استمارة التسجيل والاستشارة</span>
        </div>

        {/* Success Confirmation Card */}
        {submitSuccess && registrationResult ? (
          <SpotlightCard className="p-8 md:p-12 rounded-3xl bg-[#080D1A]/95 border border-emerald-500/30 text-center shadow-2xl animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
              تم استلام طلب التسجيل بنجاح!
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              أهلاً بك يا {fullName} في ProSetup Academy
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-6">
              تم تسجيل بياناتك المبدئية لدورة <strong className="text-cyan-300">"{selectedCourse?.title}"</strong>.
              سيتواصل معك المستشار الفني عبر {preferredContact === 'whatsapp' ? 'واتساب' : preferredContact === 'phone' ? 'الهاتف' : 'البريد الإلكتروني'} لتأكيد موعد الدورة وتفاصيل الحضور.
            </p>

            {/* Registration Voucher Number */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-sm font-mono text-slate-200 mb-8">
              <span>رقم التسجيل المرجعي:</span>
              <strong className="text-cyan-400 font-bold tracking-wider">{registrationResult.registrationNumber}</strong>
            </div>

            {/* Next Step Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappConfirmHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm shadow-glow-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>تأكيد الموعد عبر واتساب فوراَ</span>
              </a>

              <button
                onClick={onNavigateToCatalog}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-sm font-semibold border border-white/[0.1] transition-all cursor-pointer"
              >
                تصفح باقي الدورات والمسارات
              </button>
            </div>
          </SpotlightCard>
        ) : (
          /* Registration Form Container */
          <div className="rounded-3xl bg-[#080D1A]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>طلب التحاق بدورة تدريبية</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                استمارة التسجيل في ProSetup Academy
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                املأ بياناتك بدقة لتحديد الدورة والمسار الملائم لأهدافك المهنية، وسيقوم فريقنا بالتواصل معك لاستكمال إجراءات الحجز.
              </p>
            </div>

            {errors.form && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm mb-6 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{errors.form}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Course Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  الدورة أو المسار التدريبي المراد الالتحاق به <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <select
                    value={courseSlug}
                    onChange={(e) => setCourseSlug(e.target.value)}
                    className="w-full ps-12 pe-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                  >
                    {ACADEMY_COURSES.map((c) => (
                      <option key={c.slug} value={c.slug} className="bg-[#080D1A] text-white">
                        {c.title} — ({c.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>
                {errors.courseSlug && (
                  <p className="text-xs text-rose-400 mt-1">{errors.courseSlug}</p>
                )}
              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    الاسم الثلاثي بالكامل <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: أحمد محمد علي"
                      className="w-full ps-11 pe-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    رقم الهاتف (الواتساب) <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      dir="ltr"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+20 10 1234 5678"
                      className="w-full ps-11 pe-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm text-right focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-400 mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              {/* Email & Preferred Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    البريد الإلكتروني <span className="text-slate-500 font-normal">(اختياري)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      dir="ltr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full ps-11 pe-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm text-right focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    طريقة التواصل المفضلة
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredContact('whatsapp')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredContact === 'whatsapp'
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      واتساب
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredContact('phone')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredContact === 'phone'
                          ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      مكالمة هاتفية
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredContact('email')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredContact === 'email'
                          ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      إيميل
                    </button>
                  </div>
                </div>
              </div>

              {/* Experience Level & Preferred Learning Format */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    مستواك الحالي في مجال الدورة
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setExperienceLevel('beginner')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        experienceLevel === 'beginner'
                          ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      مبتدئ تماماً
                    </button>
                    <button
                      type="button"
                      onClick={() => setExperienceLevel('intermediate')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        experienceLevel === 'intermediate'
                          ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      متوسط / هاوٍ
                    </button>
                    <button
                      type="button"
                      onClick={() => setExperienceLevel('advanced')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        experienceLevel === 'advanced'
                          ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      ممارس متقدم
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    تفضيل نظام الحضور والتدريب
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredFormat('in-person')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredFormat === 'in-person'
                          ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      حضوري بالمعمل
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredFormat('online-live')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredFormat === 'online-live'
                          ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      أونلاين تفاعلي
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredFormat('flexible')}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredFormat === 'flexible'
                          ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      مرن / مدمج
                    </button>
                  </div>
                </div>
              </div>

              {/* Message / Objectives Note */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  هل لديك استفسار أو هدف محدد تود تحقيقه؟ <span className="text-slate-500 font-normal">(اختياري)</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="مثال: أود معرفة مواعيد الفترة المسائية، أو هل يتطلب الكورس لابتوب بمواصفات معينة..."
                  className="w-full p-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  نحن نحترم خصوصية بياناتك ولن نستخدم رقم هاتفك أو بريدك إلا للتواصل معك بخصوص الدورة التدريبية.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-base font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>جاري إرسال طلب التسجيل...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>تأكيد إرسال طلب التسجيل في الدورة</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
