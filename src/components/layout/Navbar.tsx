import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SITE_CONTACT } from '../../data/siteData';
import { BrandLogo } from '../ui/BrandLogo';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '../ui/SocialIcons';
import { MOTION_CONFIG } from '../../lib/motion';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
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
      style={{
        opacity: mounted ? 1 : 0,
        transitionProperty: 'opacity, background-color, border-color',
        transitionDuration: `${MOTION_CONFIG.duration.standard}ms`,
        transitionTimingFunction: MOTION_CONFIG.easing,
      }}
      className={`sticky top-0 z-40 w-full border-b ${
        scrolled
          ? 'bg-surface/95 border-border'
          : 'bg-surface border-border/70'
      }`}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-[76px] items-center justify-between gap-4">
          <a
            href="#hero"
            aria-label="Kitchen Pro الرئيسية"
            className="shrink-0 focus-visible:outline-accent-blue transition-opacity duration-200 hover:opacity-85"
          >
            <BrandLogo />
          </a>

          <nav aria-label="التنقل الرئيسي" className="hidden lg:flex items-center gap-7">
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

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={SITE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="حساب Kitchen Pro على إنستجرام"
              className="inline-flex items-center justify-center w-9 h-9 border border-border text-graphite hover:border-charcoal hover:text-charcoal transition-colors duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحة Kitchen Pro على فيسبوك"
              className="inline-flex items-center justify-center w-9 h-9 border border-border text-graphite hover:border-charcoal hover:text-charcoal transition-colors duration-200"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONTACT.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="حساب Kitchen Pro على تيك توك"
              className="inline-flex items-center justify-center w-9 h-9 border border-border text-graphite hover:border-charcoal hover:text-charcoal transition-colors duration-200"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-4 py-2.5 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>كلمنا دلوقتي</span>
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

      {/* Smooth Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden border-t border-border bg-surface transition-all duration-300 ease-architectural ${
          mobileOpen ? 'max-h-[460px] opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-charcoal border-b border-border/60 last:border-b-0 hover:text-accent-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
            <a
              href="#contact"
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-4 py-3 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>كلمنا وابدأ مشروعك</span>
            </a>
            <a
              href={SITE_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileOpen ? 0 : -1}
              aria-label="إنستجرام Kitchen Pro"
              className="inline-flex items-center justify-center w-11 h-11 border border-border text-charcoal hover:bg-surface-soft transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileOpen ? 0 : -1}
              aria-label="فيسبوك Kitchen Pro"
              className="inline-flex items-center justify-center w-11 h-11 border border-border text-charcoal hover:bg-surface-soft transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONTACT.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileOpen ? 0 : -1}
              aria-label="تيك توك Kitchen Pro"
              className="inline-flex items-center justify-center w-11 h-11 border border-border text-charcoal hover:bg-surface-soft transition-colors"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
