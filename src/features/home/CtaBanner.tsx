import React from 'react';
import { ArrowRight, MessageSquare, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../core/config/constants';
import { Button } from '../../components/common/Button';

export interface CtaBannerProps {
  onContactClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-16 bg-dark-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glowing Pill Card matching Reference Image */}
        <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-dark-800/90 border border-electric-500/35 backdrop-blur-2xl shadow-glow-md overflow-hidden">
          
          {/* Subtle electric blue ambient glow in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-6 space-y-2 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Let's Build <span className="text-electric-cyan">Something Great</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                Have a project in mind? Get in touch with us and let's turn your ideas into reality.
              </p>
            </div>

            {/* Center Action Button */}
            <div className="lg:col-span-2 flex justify-start lg:justify-center">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                glow
                onClick={onContactClick}
                className="w-full sm:w-auto px-7"
              >
                Contact Us
              </Button>
            </div>

            {/* Right Column: 3 Contact Badges (WhatsApp, Email, Location) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-start lg:justify-end gap-3 text-xs text-slate-300">
              
              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-medium">WhatsApp</span>
                  <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {COMPANY_INFO.contact.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-600/15 border border-electric-500/30 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-medium">Email</span>
                  <span className="font-semibold text-white group-hover:text-electric-cyan transition-colors">
                    {COMPANY_INFO.contact.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-2 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-medium">Location</span>
                  <span className="font-semibold text-white">
                    {COMPANY_INFO.contact.address}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
