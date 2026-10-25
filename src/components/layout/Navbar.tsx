import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowLeft, ChevronDown, ChevronLeft, TrendingUp, Palette, Code2, ShieldCheck, Sparkles, MessageSquare, Wrench, GraduationCap } from 'lucide-react';
import { NAV_LINKS, MEGA_MENU_CATEGORIES, COMPANY_INFO } from '../../core/config/constants';
import { Button } from '../ui/Button';
import { ActivePage } from '../../core/types/common';

export interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMegaMenuOpen, setServicesMegaMenuOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);
  const [mobileAcademyAccordionOpen, setMobileAcademyAccordionOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string>('digital');

  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterMenu = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setServicesMegaMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setServicesMegaMenuOpen(false);
    }, 200);
  };

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId as ActivePage);
    setMobileMenuOpen(false);
    setServicesMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return TrendingUp;
      case 'Palette': return Palette;
      case 'Code2': return Code2;
      case 'Wrench': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  const isServicesActive =
    activePage === 'services' ||
    activePage === 'digital-marketing' ||
    activePage === 'design-branding' ||
    activePage === 'software-technology' ||
    activePage === 'technical-services' ||
    activePage === 'security-surveillance' ||
    activePage === 'photography-video' ||
    activePage === 'advertising';

  const isAcademyActive =
    activePage === 'academy' ||
    activePage === 'academy-courses' ||
    activePage === 'academy-course-detail' ||
    activePage === 'academy-paths' ||
    activePage === 'academy-about' ||
    activePage === 'academy-register';

  const cleanPhone = (COMPANY_INFO.contact.whatsappNumber || '201099959133').replace(/[^0-9]/g, '');
  const whatsappNavHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'مرحباً فريق PS الدولي، أود الاستفسار عن تجهيز أعمالي.'
  )}`;

  return (
    <header
      className={`fixed top-0 start-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Dominant Visual Identity PS */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-right focus:outline-none cursor-pointer select-none"
            aria-label="الرئيسية - PS INTERNATIONAL"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-blue-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(0,102,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,210,255,0.6)] transition-all">
              <div className="w-full h-full bg-[#050B16] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-400 to-white tracking-wider">
                  PS
                </span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-tighter text-white">
                  PS
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-300 border border-cyan-400/25 tracking-wide font-mono">
                  INTERNATIONAL
                </span>
              </div>
              <span className="text-[10px] tracking-wide text-slate-400 font-medium -mt-0.5">
                PRO SETUP • تجهيزات وحلول الأعمال
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#080D1A]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.08]">
            {NAV_LINKS.map((link) => {
              if (link.id === 'services') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleMouseEnterMenu}
                    onMouseLeave={handleMouseLeaveMenu}
                  >
                    <button
                      onClick={() => handleLinkClick('services')}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isServicesActive
                          ? 'text-white bg-white/[0.1] shadow-sm font-bold'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                      aria-expanded={servicesMegaMenuOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesMegaMenuOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Animated Mega Menu Dropdown */}
                    {servicesMegaMenuOpen && (
                      <div
                        className="absolute top-full -end-20 lg:-end-36 mt-3 w-[720px] lg:w-[840px] p-6 rounded-3xl bg-[#030712]/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 z-50 text-right"
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                      >
                        {/* Mega Menu Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                          <div>
                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block font-mono">
                              ALL YOUR BUSINESS NEEDS IN ONE PLACE
                            </span>
                            <h3 className="text-base font-black text-white mt-0.5">
                              طيف القدرات والحلول المتكاملة لشركة PS
                            </h3>
                          </div>
                          <button
                            onClick={() => handleLinkClick('services')}
                            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                          >
                            <span>عرض كافة الخدمات</span>
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 4-Category Mega Menu Grid */}
                        <div className="grid grid-cols-4 gap-4">
                          {MEGA_MENU_CATEGORIES.map((cat) => {
                            const Icon = getCategoryIcon(cat.icon);
                            const isHovered = hoveredCategory === cat.id;

                            return (
                              <div
                                key={cat.id}
                                onMouseEnter={() => setHoveredCategory(cat.id)}
                                className={`p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between text-right ${
                                  isHovered
                                    ? 'bg-[#0D182E] border border-cyan-400/40 shadow-[0_0_20px_rgba(0,102,255,0.25)]'
                                    : 'bg-[#070D1A]/60 border border-white/[0.05] hover:bg-[#0B1528]'
                                }`}
                              >
                                <div className="space-y-3">
                                  {/* Icon & Category Title */}
                                  <div className="flex items-center gap-2.5">
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                        isHovered
                                          ? 'bg-blue-600 text-white'
                                          : 'bg-white/5 text-cyan-400'
                                      }`}
                                    >
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-white">
                                      {cat.title}
                                    </h4>
                                  </div>

                                  {/* Short Description */}
                                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                                    {cat.shortDesc}
                                  </p>

                                  {/* Related Services List */}
                                  <div className="pt-2 space-y-1.5 border-t border-white/[0.06]">
                                    {cat.services.map((svc, i) => (
                                      <button
                                        key={i}
                                        onClick={() => handleLinkClick(svc.path)}
                                        className="w-full text-right text-xs text-slate-300 hover:text-cyan-400 transition-colors flex items-center justify-between group/svc py-0.5 cursor-pointer"
                                      >
                                        <span className="truncate">{svc.name}</span>
                                        <ChevronLeft className="w-3 h-3 text-slate-500 opacity-0 group-hover/svc:opacity-100 group-hover/svc:-translate-x-0.5 transition-all shrink-0" />
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Explore Button */}
                                <div className="pt-4 mt-2">
                                  <button
                                    onClick={() => handleLinkClick(cat.targetPage)}
                                    className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                                      isHovered
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                                    }`}
                                  >
                                    <span>استكشف</span>
                                    <ArrowLeft className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isAcademy = link.id === 'academy';
              const isActive = isAcademy ? isAcademyActive : activePage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? isAcademy
                        ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,210,255,0.2)] font-bold'
                        : 'text-white bg-white/[0.1] shadow-sm font-bold'
                      : isAcademy
                      ? 'text-cyan-300/90 hover:text-cyan-200 hover:bg-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isAcademy && <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />}
                  <span>{link.label}</span>
                  {isAcademy && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-cyan-400 text-dark-950 font-mono tracking-tight">
                      NEW
                    </span>
                  )}
                  {isActive && !isAcademy && (
                    <span className="absolute bottom-1 start-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#00D2FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* End Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative">
              <span className="absolute -top-3 -start-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 text-[10px] font-black shadow-md animate-bounce z-10">
                خصم 25% VIP
              </span>
              <Button
                variant="primary"
                size="sm"
                icon={ArrowLeft}
                glow
                onClick={onOpenQuote}
              >
                ابدأ مشروعك معنا
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenQuote}
              className="text-xs px-3 py-1.5 font-bold"
            >
              ابدأ الآن
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.06] text-slate-200 border border-white/10 hover:border-cyan-400/50 focus:outline-none cursor-pointer"
              aria-label="تبديل القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Full-Screen / Drawer Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#020617]/98 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto text-right">
          <div className="flex flex-col space-y-2 text-right">
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right cursor-pointer ${
                activePage === 'home'
                  ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30 font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              الرئيسية
            </button>

            {/* Academy Mobile Accordion */}
            <div className="rounded-xl border border-cyan-500/25 overflow-hidden bg-cyan-950/20">
              <button
                onClick={() => setMobileAcademyAccordionOpen(!mobileAcademyAccordionOpen)}
                className="w-full px-4 py-3 text-base font-bold text-cyan-300 flex items-center justify-between hover:bg-white/5 transition-all text-right cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span>أكاديمية ProSetup</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400 text-dark-950">
                    جديد
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAcademyAccordionOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileAcademyAccordionOpen && (
                <div className="p-3 border-t border-cyan-500/20 space-y-1.5 bg-dark-950/70 animate-in fade-in duration-200">
                  <button
                    onClick={() => handleLinkClick('academy')}
                    className="w-full text-right px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:bg-white/5 cursor-pointer"
                  >
                    رئيسية الأكاديمية
                  </button>
                  <button
                    onClick={() => handleLinkClick('academy-courses')}
                    className="w-full text-right px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:bg-white/5 cursor-pointer"
                  >
                    دليل الدورات التدريبية (7)
                  </button>
                  <button
                    onClick={() => handleLinkClick('academy-paths')}
                    className="w-full text-right px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:bg-white/5 cursor-pointer"
                  >
                    الخرائط والمسارات المهنية
                  </button>
                  <button
                    onClick={() => handleLinkClick('academy-about')}
                    className="w-full text-right px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:bg-white/5 cursor-pointer"
                  >
                    عن الأكاديمية والمنهجية
                  </button>
                  <button
                    onClick={() => handleLinkClick('academy-register')}
                    className="w-full text-right px-3 py-2 rounded-lg text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 cursor-pointer"
                  >
                    استمارة التسجيل والاستشارة
                  </button>
                </div>
              )}
            </div>

            {/* Services Accordion Button */}
            <div className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                className="w-full px-4 py-3 text-base font-medium text-slate-200 flex items-center justify-between hover:bg-white/5 transition-all text-right cursor-pointer"
              >
                <span className={isServicesActive ? 'text-cyan-400 font-bold' : ''}>خدماتنا المتكاملة</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesAccordionOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {mobileServicesAccordionOpen && (
                <div className="p-3 border-t border-white/5 space-y-3 bg-dark-950/60 animate-in fade-in duration-200">
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-right px-3 py-2 rounded-lg bg-blue-600/10 text-xs font-bold text-cyan-400 flex items-center justify-between cursor-pointer"
                  >
                    <span>نظرة عامة: كل ما يحتاجه مشروعك</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {MEGA_MENU_CATEGORIES.map((cat) => {
                      const Icon = getCategoryIcon(cat.icon);
                      return (
                        <div key={cat.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-right">
                          <button
                            onClick={() => handleLinkClick(cat.targetPage)}
                            className="w-full flex items-center justify-between text-right cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-cyan-400" />
                              <span className="text-xs font-bold text-white">{cat.title}</span>
                            </div>
                            <span className="text-[10px] text-cyan-300 underline">عرض</span>
                          </button>
                          <div className="grid grid-cols-2 gap-1.5 pt-1">
                            {cat.services.map((svc, i) => (
                              <button
                                key={i}
                                onClick={() => handleLinkClick(svc.path)}
                                className="text-right text-[11px] text-slate-400 hover:text-white truncate p-1 rounded bg-white/[0.02] cursor-pointer"
                              >
                                {svc.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.id !== 'home' && l.id !== 'services' && l.id !== 'academy').map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right cursor-pointer ${
                  activePage === link.id
                    ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30 font-bold'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Direct WhatsApp Callout in Mobile Menu */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={whatsappNavHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/90 text-white font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>محادثة واتساب فورية</span>
              </a>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full font-bold"
              >
                طلب عرض أسعار مع كود الخصم
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
