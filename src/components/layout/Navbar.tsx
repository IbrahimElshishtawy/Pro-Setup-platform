import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICE_CATEGORIES } from '../../core/config/constants';
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
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId as ActivePage);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Matching Visual Reference */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-cyan p-[1px] shadow-glow-sm group-hover:shadow-glow-md transition-all">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
                  P
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white flex items-center gap-1.5">
                PRO <span className="text-electric-cyan">SETUP</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-medium -mt-1 uppercase">
                Digital Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-dark-800/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.06]">
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.id || (link.id === 'services' && activePage.includes('service') || activePage === 'digital-marketing' || activePage === 'software-technology' || activePage === 'design-branding' || activePage === 'security-surveillance' || activePage === 'photography-video' || activePage === 'advertising');

              if (link.id === 'services') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick('services')}
                      className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/[0.08] shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-electric-cyan' : ''}`} />
                    </button>

                    {/* Services Flyout Mega Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-dark-800/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-white/5 flex items-center justify-between">
                          <span>Core Capabilities</span>
                          <Sparkles className="w-3 h-3 text-electric-cyan" />
                        </div>
                        <div className="mt-1 space-y-1">
                          {SERVICE_CATEGORIES.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => handleLinkClick(cat.id === 'software-tech' ? 'software-technology' : cat.id === 'security-surveillance' ? 'security-surveillance' : cat.id === 'photography-video' ? 'photography-video' : cat.id)}
                              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group flex flex-col"
                            >
                              <span className="text-xs font-semibold text-white group-hover:text-electric-cyan transition-colors">
                                {cat.name}
                              </span>
                              <span className="text-[11px] text-slate-400 truncate">
                                {cat.shortDesc}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    activePage === link.id
                      ? 'text-white bg-white/[0.08] shadow-sm font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {activePage === link.id && (
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
              icon={ArrowRight}
              glow
              onClick={onOpenQuote}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenQuote}
              className="text-xs px-3 py-1.5"
            >
              Get Started
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-800 text-slate-200 border border-white/10 hover:border-electric-500/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-dark-900/98 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activePage === link.id
                    ? 'bg-electric-600/20 text-electric-cyan border border-electric-500/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block px-4 mb-2">
                Specialized Services
              </span>
              <div className="grid grid-cols-1 gap-1">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleLinkClick(cat.id === 'software-tech' ? 'software-technology' : cat.id === 'security-surveillance' ? 'security-surveillance' : cat.id === 'photography-video' ? 'photography-video' : cat.id)}
                    className="text-left px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-electric-cyan">→</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={ArrowRight}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
