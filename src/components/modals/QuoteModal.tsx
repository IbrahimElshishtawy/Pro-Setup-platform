import React, { useState, useEffect } from 'react';
import { 
  X, Check, ArrowLeft, ArrowRight, CheckCircle2, 
  Printer, Copy, MessageCircle, Sparkles, Tag, ShieldCheck, FileText 
} from 'lucide-react';
import { Button } from '../common/Button';
import { submitQuote } from '../../core/firebase/firestore';
import confetti from 'canvas-confetti';
import { SERVICE_CATEGORIES, COMPANY_INFO } from '../../core/config/constants';
import { ENV } from '../../core/config/env';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialPromoCode?: string;
}

interface OrderReceipt {
  orderNumber: string;
  date: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
  promoCode: string;
  discountPercentage: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  initialPromoCode = 'FIRST-VIP-25',
}) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : []
  );
  const [budget, setBudget] = useState('$5,000 – $15,000');
  const [timeline, setTimeline] = useState('1 – 3 أشهر (قياسي)');
  const [promoCode, setPromoCode] = useState(initialPromoCode || '');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState<OrderReceipt | null>(null);
  const [copied, setCopied] = useState(false);

  // Apply initial promo code if valid
  useEffect(() => {
    if (initialPromoCode && initialPromoCode.toUpperCase() === 'FIRST-VIP-25') {
      setPromoCode('FIRST-VIP-25');
      setIsPromoApplied(true);
    }
  }, [initialPromoCode, isOpen]);

  // If preselectedService changes
  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectAllServices = () => {
    if (selectedServices.length === SERVICE_CATEGORIES.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(SERVICE_CATEGORIES.map((c) => c.id));
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FIRST-VIP-25') {
      setIsPromoApplied(true);
    } else {
      setIsPromoApplied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    const orderNumber = `PRO-${Math.floor(1000 + Math.random() * 9000)}`;

    const res = await submitQuote({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      services: selectedServices,
      budget,
      timeline,
      details: formData.details,
      orderNumber,
      voucherCode: isPromoApplied ? 'FIRST-VIP-25' : undefined,
      discountLabel: isPromoApplied ? 'خصم العميل الأول المميز 25%' : undefined,
    });

    const receipt: OrderReceipt = {
      orderNumber: res.orderNumber || orderNumber,
      date: new Date().toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      name: formData.name,
      company: formData.company || 'عميل فردي / مشروع جديد',
      phone: formData.phone,
      email: formData.email || 'غير محدد',
      services: selectedServices.map(
        (id) => SERVICE_CATEGORIES.find((c) => c.id === id)?.name || id
      ),
      budget,
      timeline,
      details: formData.details,
      promoCode: isPromoApplied ? 'FIRST-VIP-25' : 'بدون كود',
      discountPercentage: isPromoApplied ? 25 : 0,
    };

    setOrderReceipt(receipt);
    setIsSubmitting(false);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#0066FF', '#00D2FF', '#F59E0B', '#FFFFFF'],
      });
    } catch {
      // Confetti fallback
    }
  };

  // WhatsApp Message generator and redirection
  const handleSendToWhatsApp = () => {
    if (!orderReceipt) return;
    
    // Normalize target phone number
    const cleanPhone = (ENV.CONTACT.WHATSAPP || COMPANY_INFO.contact.phone || '201234567890')
      .replace(/[^0-9]/g, '');

    const servicesText = orderReceipt.services.join('، ');
    const discountText = orderReceipt.discountPercentage > 0 
      ? `\n🎁 *كود الخصم المطبق:* ${orderReceipt.promoCode} (خصم VIP بنسبة ${orderReceipt.discountPercentage}% + استشارة مجانية)`
      : '';

    const text = 
`*السلام عليكم ورحمة الله وبركاته*
أرغب في تأكيد وتسليم طلب التجهيز التجاري لدى شركة *PRO SETUP*:

📄 *رقم الإيصال الرسمي:* #${orderReceipt.orderNumber}
📅 *تاريخ التسجيل:* ${orderReceipt.date}

👤 *اسم العميل:* ${orderReceipt.name}
🏢 *الشركة / العلامة التجارية:* ${orderReceipt.company}
📱 *رقم الهاتف / واتساب:* ${orderReceipt.phone}
✉️ *البريد الإلكتروني:* ${orderReceipt.email}

💼 *الخدمات والحلول المطلوبة:*
${servicesText}

💰 *الميزانية الاستثمارية التقريبية:* ${orderReceipt.budget}
⏱ *الجدول الزمني المطلوب:* ${orderReceipt.timeline}${discountText}

📝 *ملاحظات المشروع:*
${orderReceipt.details || 'لا توجد ملاحظات إضافية، جاهز لبدء مرحلة الاستكشاف والتعاقد.'}

---
_تم تسجيل الطلب وإصدار هذا الإيصال عبر منصة PRO SETUP الرسمية: pro-setup-platform.web.app_`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopyReceipt = () => {
    if (!orderReceipt) return;
    const text = `إيصال حجز وتجهيز معتمد - PRO SETUP\nرقم الإيصال: #${orderReceipt.orderNumber}\nالعميل: ${orderReceipt.name} (${orderReceipt.company})\nالهاتف: ${orderReceipt.phone}\nالخدمات: ${orderReceipt.services.join('، ')}\nالميزانية: ${orderReceipt.budget}\nكود الخصم: ${orderReceipt.promoCode}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleReset = () => {
    setStep(1);
    setOrderReceipt(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/90 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        className="relative w-full max-w-2xl bg-dark-900 border border-white/10 rounded-3xl shadow-2xl p-5 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200 text-right my-8"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="إغلاق النافذة"
          className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {orderReceipt ? (
          /* =========================================================================
             COMMERCIAL ORDER & OFFICIAL RECEIPT VOUCHER (Digital Certificate)
             ========================================================================= */
          <div className="space-y-6 py-2">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-electric-cyan/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-glow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                تم تسجيل طلبك وإصدار الإيصال الرسمي!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                شكراً لاختيارك <span className="text-electric-cyan font-bold">PRO SETUP</span>. تم توليد إيصال الحجز التجاري أدناه بنجاح، ويمكنك إرساله مباشرة لمتابعة التنفيذ فوراً عبر واتساب.
              </p>
            </div>

            {/* Official Digital Receipt Card */}
            <div 
              id="printable-receipt"
              className="relative p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-dark-950 via-[#070D18] to-dark-950 border-2 border-dashed border-electric-cyan/40 shadow-xl space-y-5 text-right font-sans"
            >
              {/* Receipt Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black text-white font-mono tracking-wider">
                      PRO SETUP
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                      معتمد ومسجل
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    إيصال حجز وتجهيز تجاري رسمي
                  </span>
                </div>

                <div className="sm:text-left text-right">
                  <div className="text-[10px] uppercase font-mono text-slate-400">رقم الإيصال (Receipt No.)</div>
                  <div className="text-base sm:text-lg font-black font-mono text-electric-cyan" dir="ltr">
                    #{orderReceipt.orderNumber}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {orderReceipt.date}
                  </div>
                </div>
              </div>

              {/* Receipt Body Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-slate-400 block text-[11px]">العميل والجهة:</span>
                  <span className="text-white font-bold block">{orderReceipt.name}</span>
                  <span className="text-slate-300 text-[11px] block">{orderReceipt.company}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-slate-400 block text-[11px]">بيانات الاتصال:</span>
                  <span className="text-white font-bold block font-mono" dir="ltr">{orderReceipt.phone}</span>
                  <span className="text-slate-300 text-[11px] block">{orderReceipt.email}</span>
                </div>
              </div>

              {/* Services Selected */}
              <div className="space-y-1.5 text-xs">
                <span className="text-slate-400 block text-[11px]">الخدمات والحلول المحددة:</span>
                <div className="flex flex-wrap gap-1.5">
                  {orderReceipt.services.map((s, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-lg bg-electric-600/20 border border-electric-cyan/30 text-electric-cyan font-semibold text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Budget & Timeline & Voucher */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/10 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">الميزانية التقديرية</span>
                  <span className="text-white font-bold font-mono" dir="ltr">{orderReceipt.budget}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">الجدول الزمني</span>
                  <span className="text-white font-bold">{orderReceipt.timeline}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block">العرض الترويجي</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1 font-mono">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{orderReceipt.promoCode} (-{orderReceipt.discountPercentage}%)</span>
                  </span>
                </div>
              </div>

              {/* Verified Seal */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>موثق ومسجل في قاعدة بيانات PRO SETUP السحابية</span>
                </span>
                <span className="font-mono text-[10px] text-slate-500">ID: {orderReceipt.orderNumber}</span>
              </div>
            </div>

            {/* Direct Action Hub (The core request: Forward to WhatsApp) */}
            <div className="space-y-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                glow
                icon={MessageCircle}
                iconPosition="right"
                onClick={handleSendToWhatsApp}
                className="w-full py-4 text-sm sm:text-base font-bold bg-[#25D366] hover:bg-[#20ba59] border-[#25D366] text-white shadow-glow-md flex items-center justify-center gap-2"
              >
                <span>إرسال الطلب والإيصال إلى واتساب فوراً للمباشرة</span>
              </Button>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <Button
                  variant="outline"
                  size="sm"
                  icon={Printer}
                  iconPosition="right"
                  onClick={handlePrintReceipt}
                  className="w-full text-xs"
                >
                  طباعة الإيصال (PDF)
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  icon={Copy}
                  iconPosition="right"
                  onClick={handleCopyReceipt}
                  className="w-full text-xs"
                >
                  {copied ? 'تم النسخ بنجاح!' : 'نسخ بيانات الإيصال'}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="w-full text-xs col-span-2 sm:col-span-1 text-slate-400 hover:text-white"
                >
                  إغلاق النافذة
                </Button>
              </div>
            </div>

          </div>
        ) : (
          /* =========================================================================
             3-STEP COMMERCIAL ORDER WIZARD
             ========================================================================= */
          <>
            {/* Step Indicators */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>الخطوة {step} من 3</span>
                <span>{step === 1 ? 'تحديد باقة الخدمات' : step === 2 ? 'الميزانية وكود العرض' : 'بيانات التأكيد والإيصال'}</span>
              </div>
              <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-electric-gradient transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: Select Services */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 id="modal-quote-title" className="text-xl sm:text-2xl font-black text-white">
                      حدد الحلول المطلوبة لتجهيز أعمالك
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      اختر خدمة واحدة أو ادمج عدة خدمات للحصول على باقة متكاملة بأفضل عائد استثماري.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={selectAllServices}
                    className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-lg bg-electric-600/20 hover:bg-electric-600/30 text-electric-cyan font-bold border border-electric-cyan/30 transition-all shrink-0"
                  >
                    {selectedServices.length === SERVICE_CATEGORIES.length ? 'إلغاء تحديد الكل' : '⚡ اختيار باقة التجهيز الشاملة'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pl-1">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const isSelected = selectedServices.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleService(cat.id)}
                        className={`p-3.5 rounded-xl border text-right flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'bg-electric-600/15 border-electric-cyan text-white shadow-glow-sm'
                            : 'bg-dark-800/80 border-white/5 hover:border-white/20 text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-electric-cyan border-electric-cyan text-dark-900'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold block">{cat.name}</span>
                          <span className="text-[11px] text-slate-400 line-clamp-1">{cat.shortDesc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-400">
                    تم تحديد <span className="text-electric-cyan font-bold">{selectedServices.length}</span> من أصل 6 خدمات
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ArrowLeft}
                    iconPosition="right"
                    disabled={selectedServices.length === 0}
                    onClick={() => setStep(2)}
                  >
                    المتابعة إلى الميزانية والعروض
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Budget, Timeline & Promo Voucher */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    الميزانية، المدة الزمنية، وكود العرض
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    حدد النطاق الاستثماري المناسب لتصميم حل تقني وتسويقي يحقق أعلى عائد.
                  </p>
                </div>

                {/* VIP Promo Voucher Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-electric-600/15 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-amber-300 block">عرض العميل الأول المميز (VIP Discount)</span>
                      <span className="text-[11px] text-slate-300">خصم 25% + استشارة تسويقية واستراتيجية مجانية</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="FIRST-VIP-25"
                      className="px-3 py-1.5 rounded-lg bg-dark-950 text-xs font-mono text-amber-300 uppercase border border-amber-500/40 text-center w-32 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs transition-colors shrink-0"
                    >
                      تطبيق
                    </button>
                  </div>
                </div>

                {isPromoApplied && (
                  <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>تم تفعيل كود الخصم FIRST-VIP-25 بنجاح! سيتم تطبيق خصم 25% وحجز الامتيازات في إيصالك.</span>
                  </div>
                )}

                {/* Budget selection */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    الميزانية الاستثمارية التقديرية (بالدولار الأمريكي)
                  </label>
                  <div className="grid grid-cols-2 gap-2" dir="ltr">
                    {[
                      '$1,000 – $5,000',
                      '$5,000 – $15,000',
                      '$15,000 – $30,000',
                      '$30,000+ (Enterprise VIP)',
                    ].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                          budget === b
                            ? 'bg-electric-600/20 border-electric-cyan text-white shadow-glow-sm'
                            : 'bg-dark-800 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline selection */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    الجدول الزمني المستهدف
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'عاجل (أقل من شهر)',
                      '1 – 3 أشهر (قياسي)',
                      'مرن / على مراحل متتالية',
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                          timeline === t
                            ? 'bg-electric-600/20 border-electric-cyan text-white shadow-glow-sm'
                            : 'bg-dark-800 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-white/10">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="left"
                    onClick={() => setStep(1)}
                  >
                    السابق
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ArrowLeft}
                    iconPosition="right"
                    onClick={() => setStep(3)}
                  >
                    المتابعة لتأكيد الطلب
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Client Details & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    بيانات التواصل وإصدار الإيصال
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    أدخل معلوماتك ليتم إنشاء إيصال الحجز الرسمي وربطه بمدير المشروعات مباشرة.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: كريم أحمد"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none text-right"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">رقم الهاتف / واتساب *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="مثال: 01012345678"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none text-right"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="karim@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none text-right"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">اسم الشركة أو المشروع</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="مثال: شركة الأفق للاستثمار"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none text-right"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">ملخص المشروع أو ملاحظاتك</label>
                  <textarea
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="صف باختصار أهدافك أو أي متطلبات خاصة للتجهيز..."
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:border-electric-cyan focus:outline-none text-right"
                  />
                </div>

                {/* Instant Order Preview Box */}
                <div className="p-3 rounded-xl bg-dark-950/70 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <FileText className="w-4 h-4 text-electric-cyan" />
                    <span>الخدمات المحددة: {selectedServices.length} خدمات</span>
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {isPromoApplied ? 'خصم VIP مُفعل 25%' : 'جاهز للتسجيل'}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="left"
                    onClick={() => setStep(2)}
                  >
                    السابق
                  </Button>

                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    isLoading={isSubmitting}
                    glow
                  >
                    تأكيد الطلب وإصدار الإيصال الرسمي
                  </Button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
