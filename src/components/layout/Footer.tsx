import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../../core/config/constants';
import { Button } from '../common/Button';
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
    <footer className="relative bg-dark-950 border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-gradient from-electric-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/[0.07]">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-cyan p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
                    P
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  PRO <span className="text-electric-cyan">SETUP</span>
                </span>
                <span className="text-[11px] tracking-widest text-slate-400 font-medium uppercase -mt-1">
                  Digital Solutions
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-electric-cyan">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.subDescription}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Stay Ahead of Digital Trends
              </span>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! You are subscribed to PRO SETUP briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    required
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-dark-800 text-xs text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-electric-500 transition-colors"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    isLoading={isLoading}
                    className="text-xs px-3.5"
                  >
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav(cat.id === 'software-tech' ? 'software-technology' : cat.id === 'security-surveillance' ? 'security-surveillance' : cat.id === 'photography-video' ? 'photography-video' : cat.id as ActivePage)}
                    className="hover:text-electric-cyan transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-electric-cyan transition-colors">
                  About PRO SETUP
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-electric-cyan transition-colors">
                  Our Work & Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-electric-cyan transition-colors">
                  Our 5-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-electric-cyan transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-electric-cyan transition-colors">
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-electric-cyan transition-colors text-electric-400 font-semibold">
                  Get a Free Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a
                href={COMPANY_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-2.5 hover:text-electric-cyan transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-electric-600/10 border border-electric-500/20 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.contact.email}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.contact.address}</span>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenQuote}
                  icon={ArrowRight}
                  className="w-full text-xs py-2"
                >
                  Start Setup Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span>© 2026 PRO SETUP. All rights reserved.</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block">{COMPANY_INFO.positioning}</span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {[
              { name: 'Facebook', url: COMPANY_INFO.social.facebook, icon: 'FB' },
              { name: 'Instagram', url: COMPANY_INFO.social.instagram, icon: 'IG' },
              { name: 'TikTok', url: COMPANY_INFO.social.tiktok, icon: 'TK' },
              { name: 'LinkedIn', url: COMPANY_INFO.social.linkedin, icon: 'IN' },
              { name: 'YouTube', url: COMPANY_INFO.social.youtube, icon: 'YT' },
              { name: 'WhatsApp', url: COMPANY_INFO.social.whatsapp, icon: 'WA' },
            ].map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit PRO SETUP on ${soc.name}`}
                className="w-8 h-8 rounded-lg bg-dark-800/80 hover:bg-electric-600/20 text-slate-400 hover:text-electric-cyan border border-white/5 hover:border-electric-500/30 flex items-center justify-center text-[10px] font-bold tracking-wider transition-all duration-200"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
