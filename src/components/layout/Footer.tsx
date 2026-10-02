import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Mail, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { Button } from '../common/Button';
import { SocialIcons } from '../common/SocialIcons';
import { subscribeNewsletter } from '../../core/firebase/firestore';
import { ActivePage } from '../../core/types/common';

export interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    await subscribeNewsletter(email);
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  const handleNav = (page: ActivePage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-right">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-gradient from-electric-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.07]">
          
          {/* COLUMN 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-electric-600 to-electric-cyan p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
                    P
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white flex items-center gap-1.5">
                  PRO <span className="text-electric-cyan">SETUP</span>
                </span>
                <span className="text-[11px] tracking-wide text-slate-400 font-medium">
                  {COMPANY_INFO.positioning}
                </span>
              </div>
            </div>

            <p className="text-sm font-bold text-electric-cyan tracking-wide">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {COMPANY_INFO.subDescription}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <span className="text-xs font-bold text-slate-300 block mb-2">
                النشرة الإخبارية للأعمال والتقنية
              </span>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 rounded-xl border border-emerald-500/20 max-w-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>شكراً لاشتراكك! ستصلك نشرتنا الدورية للأعمال.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-dark-900 text-xs text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-electric-cyan transition-colors text-right"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    isLoading={isLoading}
                    className="text-xs px-4 font-bold"
                  >
                    اشتراك
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* COLUMN 2: Navigation & Services */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Navigation Sub-Column */}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                روابط سريعة
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <button onClick={() => handleNav('home')} className="hover:text-electric-cyan transition-colors">
                    الرئيسية
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-electric-cyan transition-colors">
                    خدماتنا
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('portfolio')} className="hover:text-electric-cyan transition-colors">
                    معرض أعمالنا
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-electric-cyan transition-colors">
                    عن الشركة
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('process')} className="hover:text-electric-cyan transition-colors">
                    خطة العمل
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-electric-cyan transition-colors">
                    تواصل معنا
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('faq')} className="hover:text-electric-cyan transition-colors">
                    الأسئلة الشائعة
                  </button>
                </li>
              </ul>
            </div>

            {/* Services Sub-Column */}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                خدماتنا المتكاملة
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <button onClick={() => handleNav('digital-marketing')} className="hover:text-electric-cyan transition-colors">
                    التسويق الرقمي
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('design-branding')} className="hover:text-electric-cyan transition-colors">
                    الهوية والتصميم
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('software-technology')} className="hover:text-electric-cyan transition-colors">
                    البرمجيات والتطبيقات
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('security-surveillance')} className="hover:text-electric-cyan transition-colors">
                    أنظمة المراقبة CCTV
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('photography-video')} className="hover:text-electric-cyan transition-colors">
                    التصوير والإنتاج المرئي
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('advertising')} className="hover:text-electric-cyan transition-colors">
                    الحملات الإعلانية
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Connect With Us & Large Professional Social Icons */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                تواصل معنا وتابعنا
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                تابع منصاتنا الرسمية للاطلاع على أحدث مشاريعنا، حملاتنا الإبداعية، وكواليس العمل التقني والميداني.
              </p>
            </div>

            {/* Large Professional Social Icons */}
            <div className="pt-1">
              <SocialIcons size="lg" variant="glow" />
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-2.5 text-xs text-slate-400 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  واتساب: <span className="text-white font-mono">{COMPANY_INFO.contact.phone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric-cyan shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-electric-cyan transition-colors"
                >
                  البريد: <span className="text-white font-mono">{COMPANY_INFO.contact.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>المقر الرئيسي: {COMPANY_INFO.contact.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenQuote}
                icon={ArrowLeft}
                className="w-full text-xs py-2.5 font-bold"
              >
                اطلب استشارة أو عرض سعر
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Positioning */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} PRO SETUP. جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="text-slate-400">{COMPANY_INFO.positioning}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              {COMPANY_INFO.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
