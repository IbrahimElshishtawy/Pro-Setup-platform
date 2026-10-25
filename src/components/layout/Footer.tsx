import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Mail, MapPin, MessageSquare, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { Button } from '../ui/Button';
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
    <footer className="relative bg-[#02050E] border-t border-white/[0.08] pt-10 pb-8 overflow-hidden text-right select-none">
      
      {/* Soft Top Radial Glow and Center Aura */}
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-600/15 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Massive Faint Background Typography Watermark */}
      <div
        className="absolute -bottom-10 inset-x-0 text-center font-display font-black text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] text-white/[0.015] tracking-tight pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        PRO SETUP
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/[0.08]">
          
          {/* COLUMN 1: Dominant Brand Identity & Statement */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-blue-600 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                <div className="w-full h-full bg-[#050B16] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-400 to-white tracking-wider">
                    PS
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-2xl tracking-tighter text-white">
                    PS
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-300 border border-cyan-400/25 tracking-wide font-mono">
                    INTERNATIONAL
                  </span>
                </div>
                <span className="text-[11px] tracking-wide text-slate-400 font-medium">
                  PRO SETUP • منظومة حلول وتجهيزات الأعمال
                </span>
              </div>
            </div>

            <p className="text-sm font-bold text-cyan-400 tracking-wide font-mono">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              {COMPANY_INFO.subDescription}
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-200 block mb-2">
                النشرة الدورية للتقنية وحلول الأعمال
              </span>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 rounded-xl border border-emerald-500/20 max-w-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>شكراً لاشتراكك! ستصلك أحدث المستجدات والعروض الحصرية.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    aria-label="البريد الإلكتروني للنشرة الإخبارية"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] text-xs text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-cyan-400 transition-colors text-right"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    isLoading={isLoading}
                    icon={Send}
                    className="text-xs px-4 font-bold"
                  >
                    اشتراك
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* COLUMN 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  خدماتنا المتكاملة
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academy')} className="text-cyan-300 hover:text-cyan-200 font-bold transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>أكاديمية ProSetup (جديد)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academy-courses')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  دليل الدورات التدريبية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academy-paths')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  الخرائط والمسارات المهنية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  معرض أعمالنا
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  عن الشركة
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  خطة العمل (6 خطوات)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  تواصل معنا
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  الأسئلة الشائعة
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Integrated Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              منظومة القطاعات
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('technical-services')} className="hover:text-cyan-400 transition-colors cursor-pointer font-bold text-slate-200">
                  صيانة الهواتف والحلول الفنية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('software-technology')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  البرمجيات والمنصات السحابية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security-surveillance')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  كاميرات المراقبة وأنظمة CCTV
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('digital-marketing')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  التسويق الرقمي ونمو الأعمال
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('photography-video')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  الإنتاج السينمائي فائق الدقة 4K
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('design-branding')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  الهوية البصرية وتصميم UI/UX
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('advertising')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  الحملات الإعلانية وإدارة الميزانيات
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Social */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                تواصل مباشر ومنصاتنا
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                قنواتنا الرسمية المعتمدة لاستقبال طلبات التجهيز والاستشارات وعروض الشراكة.
              </p>
            </div>

            {/* Social Icons Strip with Lucide React Icons */}
            <div className="pt-1">
              <SocialIcons size="lg" variant="glow" />
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-2.5 text-xs text-slate-300 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="تواصل عبر الواتساب"
                >
                  واتساب المباشر: <span className="text-white font-mono">{COMPANY_INFO.contact.phone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-cyan-400 transition-colors font-mono"
                  aria-label="مراسلة البريد الإلكتروني"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <a
                href={COMPANY_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-electric-cyan transition-colors group"
                title="عرض المقر على خرائط Google"
              >
                <MapPin className="w-4 h-4 text-slate-500 group-hover:text-electric-cyan shrink-0 transition-colors" />
                <span>المقر الإقليمي: {COMPANY_INFO.contact.address}</span>
              </a>
            </div>

            <div className="pt-2">
              <Button
                variant="glass"
                size="sm"
                onClick={onOpenQuote}
                icon={ArrowLeft}
                className="w-full text-xs py-2.5 font-bold"
              >
                طلب دراسة مشروع أو عرض أسعار
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Positioning */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© {new Date().getFullYear()} PS | PRO SETUP INTERNATIONAL. جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="text-slate-400">{COMPANY_INFO.positioning}</span>
          </div>

          <div className="flex items-center gap-2 text-cyan-400/80 text-[11px] font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO Quality & Enterprise Security Standard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
