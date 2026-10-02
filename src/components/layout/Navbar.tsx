import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowLeft, ChevronDown, ChevronLeft, TrendingUp, Palette, Code2, ShieldCheck, Sparkles } from 'lucide-react';
import { NAV_LINKS, MEGA_MENU_CATEGORIES } from '../../core/config/constants';
import { Button } from '../common/Button';
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
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  const isServicesActive =
    activePage === 'services' ||
    activePage === 'digital-marketing' ||
    activePage === 'design-branding' ||
    activePage === 'software-technology' ||
    activePage === 'security-surveillance' ||
    activePage === 'photography-video' ||
    activePage === 'advertising';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/92 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Matching Visual Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-right focus:outline-none"
            aria-label="الرئيسية - PRO SETUP"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-cyan p-[1px] shadow-glow-sm group-hover:shadow-glow-md transition-all">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
                  P
                </span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-display font-black text-xl tracking-tight text-white flex items-center gap-1.5">
                PRO <span className="text-electric-cyan">SETUP</span>
              </span>
              <span className="text-[10px] tracking-wide text-slate-400 font-medium -mt-1">
                تجهيزات وحلول الأعمال المتكاملة
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-dark-800/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.07]">
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
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isServicesActive
                          ? 'text-white bg-white/[0.08] shadow-sm font-bold'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                      aria-expanded={servicesMegaMenuOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesMegaMenuOpen ? 'rotate-180 text-electric-cyan' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Animated Mega Menu Dropdown */}
                    {servicesMegaMenuOpen && (
                      <div
                        className="absolute top-full -right-20 lg:-right-36 mt-3 w-[720px] lg:w-[840px] p-6 rounded-3xl bg-dark-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 z-50 text-right"
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                      >
                        {/* Mega Menu Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                          <div>
                            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider block">
                              كل احتياجات أعمالك في مكان واحد
                            </span>
                            <h3 className="text-base font-black text-white">
                              طيف القدرات والحلول المتكاملة
                            </h3>
                          </div>
                          <button
                            onClick={() => handleLinkClick('services')}
                            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-electric-cyan transition-colors"
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
                                    ? 'bg-dark-800/90 border border-electric-cyan/40 shadow-glow-sm'
                                    : 'bg-dark-900/50 border border-white/[0.05] hover:bg-dark-800/50'
                                }`}
                              >
                                <div className="space-y-3">
                                  {/* Icon & Category Title */}
                                  <div className="flex items-center gap-2.5">
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                        isHovered
                                          ? 'bg-electric-600 text-white'
                                          : 'bg-white/5 text-electric-cyan'
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
                                        className="w-full text-right text-xs text-slate-300 hover:text-electric-cyan transition-colors flex items-center justify-between group/svc py-0.5"
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
                                    className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                                      isHovered
                                        ? 'bg-electric-600 text-white shadow-sm'
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

              const isActive = activePage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-electric-cyan rounded-full shadow-glow-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
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

          {/* Mobile Menu Button */}
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
              className="p-2 rounded-xl bg-dark-800 text-slate-200 border border-white/10 hover:border-electric-500/50 focus:outline-none"
              aria-label="تبديل القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Accordion Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-dark-950/98 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto text-right">
          <div className="flex flex-col space-y-2 text-right">
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right ${
                activePage === 'home'
                  ? 'bg-electric-600/20 text-electric-cyan border border-electric-500/30 font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              الرئيسية
            </button>

            {/* Services Accordion Button */}
            <div className="rounded-xl border border-white/5 overflow-hidden bg-dark-900/50">
              <button
                onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                className="w-full px-4 py-3 text-base font-medium text-slate-200 flex items-center justify-between hover:bg-white/5 transition-all text-right"
              >
                <span className={isServicesActive ? 'text-electric-cyan font-bold' : ''}>خدماتنا المتكاملة</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesAccordionOpen ? 'rotate-180 text-electric-cyan' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {mobileServicesAccordionOpen && (
                <div className="p-3 border-t border-white/5 space-y-3 bg-dark-950/60 animate-in fade-in duration-200">
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-right px-3 py-2 rounded-lg bg-electric-600/10 text-xs font-bold text-electric-cyan flex items-center justify-between"
                  >
                    <span>نظرة عامة: كل ما يحتاجه مشروعك</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {MEGA_MENU_CATEGORIES.map((cat) => {
                      const Icon = getCategoryIcon(cat.icon);
                      return (
                        <div key={cat.id} className="p-3 rounded-xl bg-dark-900 border border-white/5 space-y-2 text-right">
                          <button
                            onClick={() => handleLinkClick(cat.targetPage)}
                            className="w-full flex items-center justify-between text-right"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-electric-cyan" />
                              <span className="text-xs font-bold text-white">{cat.title}</span>
                            </div>
                            <span className="text-[10px] text-electric-cyan font-medium">استكشف ←</span>
                          </button>
                          <div className="pr-6 space-y-1">
                            {cat.services.map((svc, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => handleLinkClick(svc.path)}
                                className="w-full text-right text-[11px] text-slate-400 hover:text-white block py-0.5"
                              >
                                • {svc.name}
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

            <button
              onClick={() => handleLinkClick('portfolio')}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right ${
                activePage === 'portfolio'
                  ? 'bg-electric-600/20 text-electric-cyan border border-electric-500/30 font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              معرض أعمالنا
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right ${
                activePage === 'about'
                  ? 'bg-electric-600/20 text-electric-cyan border border-electric-500/30 font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              عن الشركة
            </button>

            <button
              onClick={() => handleLinkClick('process')}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right ${
                activePage === 'process'
                  ? 'bg-electric-600/20 text-electric-cyan border border-electric-500/30 font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              خطة العمل
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-right ${
                activePage === 'contact'
                  ? 'bg-electric-600/20 text-electric-cyan border border-electric-500/30 font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              تواصل معنا
            </button>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                className="w-full font-bold"
                icon={ArrowLeft}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                ابدأ مشروعك الآن
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
