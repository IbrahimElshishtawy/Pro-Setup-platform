import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';
import { BrandLogo } from '../ui/BrandLogo';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 border-b ${
        scrolled
          ? 'bg-surface/95 border-border'
          : 'bg-surface border-border/70'
      }`}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <a
            href="#hero"
            aria-label="Kitchen Pro الرئيسية"
            className="shrink-0 focus-visible:outline-accent-blue"
          >
            <BrandLogo />
          </a>

          <nav aria-label="التنقل الرئيسي" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-graphite hover:text-charcoal transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-charcoal hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-5 py-2.5 transition-colors duration-200"
            >
              <span>احجز معاينة</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-border text-charcoal hover:bg-surface-soft transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-surface">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-charcoal border-b border-border/60 last:border-b-0 hover:text-accent-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-5 py-3 transition-colors"
            >
              <span>احجز معاينة هندسية</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
