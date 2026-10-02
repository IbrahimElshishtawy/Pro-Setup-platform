import React from 'react';
import { MessageSquareText } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label */}
      <span className="mr-3 px-3.5 py-1.5 rounded-xl bg-dark-800/90 text-slate-200 text-xs font-medium border border-white/10 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 hidden sm:block">
        Chat with PRO SETUP
      </span>

      {/* Pulsing button */}
      <a
        href={COMPANY_INFO.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp contact with PRO SETUP"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Radar ripple rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />
        <MessageSquareText className="w-7 h-7 fill-current stroke-none" />
      </a>
    </aside>
  );
};
