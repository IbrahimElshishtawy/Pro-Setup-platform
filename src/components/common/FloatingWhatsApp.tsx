import React from 'react';
import { MessageSquareText, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { ENV } from '../../core/config/env';

export const FloatingWhatsApp: React.FC = () => {
  const cleanPhone = (ENV.CONTACT.WHATSAPP || COMPANY_INFO.contact.phone || '201234567890')
    .replace(/[^0-9]/g, '');

  const defaultMsg = encodeURIComponent(
    'السلام عليكم، أرغب في الاستفسار عن باقات وخدمات PRO SETUP والاستفادة من عرض العميل الأول المميز (خصم 25%).'
  );

  const whatsappHref = COMPANY_INFO.contact.whatsapp && !COMPANY_INFO.contact.whatsapp.includes('YOUR_')
    ? COMPANY_INFO.contact.whatsapp
    : `https://wa.me/${cleanPhone}?text=${defaultMsg}`;

  return (
    <aside aria-label="تواصل سريع عبر واتساب" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label */}
      <span className="mx-3 px-3.5 py-1.5 rounded-xl bg-dark-800/95 text-slate-200 text-xs font-bold border border-white/10 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 hidden sm:flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>تواصل مباشر ومتاح الآن مع فريق العمل</span>
      </span>

      {/* Pulsing button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مباشر عبر واتساب مع برو سيت اب"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Radar ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        
        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-dark-900" />

        <MessageSquareText className="w-7 h-7 fill-current stroke-none" />
      </a>
    </aside>
  );
};
