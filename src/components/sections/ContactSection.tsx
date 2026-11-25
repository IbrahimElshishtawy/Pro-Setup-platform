import { useState, type FormEvent } from 'react';
import { Check, MapPin, Phone, Clock, Mail, ArrowUpLeft } from 'lucide-react';
import { SITE_CONTACT } from '../../data/siteData';
import { submitConsultation } from '../../lib/firebase';
import { Reveal } from '../ui/Reveal';

const SERVICE_OPTIONS = [
  'مطبخ ستانلس ستيل / معماري',
  'شبابيك وواجهات ألومنيوم',
  'دريسنج روم',
  'مشروع متكامل (مطبخ + شبابيك + دريسنج)',
];

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    reference: string;
    mode: 'firestore' | 'local';
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitting(true);
    try {
      const result = await submitConsultation({
        name: name.trim(),
        phone: phone.trim(),
        service,
        city: city.trim(),
        notes: notes.trim(),
      });
      setConfirmation({ reference: result.reference, mode: result.mode });
      setName('');
      setPhone('');
      setCity('');
      setNotes('');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappText = encodeURIComponent(
    'مرحباً Kitchen Pro، أرغب في حجز معاينة هندسية والاستفسار عن خدمات المطابخ والشبابيك والدريسنج.',
  );

  return (
    <section id="contact" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Contact Information Column */}
          <Reveal className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                04 / CONSULTATION & SITE MEASUREMENT
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug">
                ابدأ مشروعك بمعاينة هندسية دقيقة
              </h2>
              <p className="text-sm sm:text-base text-graphite leading-relaxed">
                شاركنا تفاصيل المساحة المطلوبة وسيتواصل معك مهندس مختص لتحديد موعد
                المعاينة ومناقشة الخامات والتكلفة التقديرية بشفافية كاملة.
              </p>
            </div>

            <div className="border border-border bg-surface-white divide-y divide-border">
              <div className="p-5 flex items-start gap-4">
                <Phone className="w-4 h-4 text-steel-muted mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-steel-muted">الهاتف المباشر</p>
                  <a
                    href={SITE_CONTACT.phoneHref}
                    dir="ltr"
                    className="block font-mono text-sm font-medium text-charcoal hover:text-accent-blue mt-1"
                  >
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="p-5 flex items-start gap-4">
                <Mail className="w-4 h-4 text-steel-muted mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-steel-muted">البريد الإلكتروني</p>
                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    dir="ltr"
                    className="block font-mono text-sm font-medium text-charcoal hover:text-accent-blue mt-1"
                  >
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="p-5 flex items-start gap-4">
                <MapPin className="w-4 h-4 text-steel-muted mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-steel-muted">المعرض والمصنع</p>
                  <p className="text-sm font-medium text-charcoal mt-1">
                    {SITE_CONTACT.location}
                  </p>
                </div>
              </div>

              <div className="p-5 flex items-start gap-4">
                <Clock className="w-4 h-4 text-steel-muted mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-steel-muted">ساعات العمل</p>
                  <p className="text-sm font-medium text-charcoal mt-1">
                    {SITE_CONTACT.workingHours}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${SITE_CONTACT.whatsappNumber.replace(/\D/g, '')}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full border border-charcoal px-6 py-4 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-surface transition-colors"
            >
              <span>تواصل مباشر عبر واتساب</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </Reveal>

          {/* Consultation Form Column */}
          <Reveal delayMs={100} className="lg:col-span-7">
            <div className="border border-border bg-surface-white p-6 sm:p-8 lg:p-10">
              {confirmation ? (
                <div className="py-10 space-y-5">
                  <div className="w-11 h-11 bg-accent-blue text-white flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-steel-muted" dir="ltr">
                      REF: {confirmation.reference}
                    </p>
                    <h3 className="text-2xl font-semibold text-charcoal">
                      تم استلام طلب المعاينة بنجاح
                    </h3>
                    <p className="text-sm text-graphite leading-relaxed max-w-lg">
                      شكراً لتواصلك مع Kitchen Pro. سيقوم فريقنا الهندسي بالتواصل معك خلال
                      24 ساعة عمل لتأكيد تفاصيل المشروع وموعد الرفع المساحي.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConfirmation(null)}
                    className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-charcoal hover:border-charcoal transition-colors"
                  >
                    إرسال طلب جديد
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="pb-5 border-b border-border flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-charcoal">
                      نموذج طلب معاينة أو عرض سعر
                    </h3>
                    <span className="font-mono text-xs text-steel-muted" dir="ltr">
                      FORM-01
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="kp-name" className="block text-xs font-medium text-graphite">
                        الاسم الكامل *
                      </label>
                      <input
                        id="kp-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="مثال: م. أحمد محمود"
                        className="w-full border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-steel-muted/70 focus:border-accent-blue focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="kp-phone" className="block text-xs font-medium text-graphite">
                        رقم الهاتف / واتساب *
                      </label>
                      <input
                        id="kp-phone"
                        type="tel"
                        required
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 10 0000 0000"
                        className="w-full border border-border bg-surface px-4 py-3 text-sm text-charcoal text-right placeholder:text-steel-muted/70 focus:border-accent-blue focus:outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="kp-service" className="block text-xs font-medium text-graphite">
                        نوع المشروع
                      </label>
                      <select
                        id="kp-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full border border-border bg-surface px-4 py-3 text-sm text-charcoal focus:border-accent-blue focus:outline-none transition-colors"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="kp-city" className="block text-xs font-medium text-graphite">
                        المدينة / المنطقة
                      </label>
                      <input
                        id="kp-city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="مثال: التجمع الخامس، الشيخ زايد"
                        className="w-full border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-steel-muted/70 focus:border-accent-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="kp-notes" className="block text-xs font-medium text-graphite">
                      تفاصيل إضافية (المساحة التقريبية أو موعد التسليم المطلوب)
                    </label>
                    <textarea
                      id="kp-notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="اذكر المساحة التقريبية أو أي متطلبات خاصة بالتصميم..."
                      className="w-full border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-steel-muted/70 focus:border-accent-blue focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-steel-muted">
                      نحترم خصوصية بياناتك ولا نشاركها مع أي طرف ثالث.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover disabled:opacity-60 text-white text-sm font-medium px-8 py-3.5 transition-colors shrink-0"
                    >
                      <span>{submitting ? 'جاري الإرسال...' : 'إرسال طلب المعاينة'}</span>
                      <ArrowUpLeft className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
