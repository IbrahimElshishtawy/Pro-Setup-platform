import { NAV_LINKS, SITE_CONTACT } from '../../data/siteData';
import { BrandLogo } from '../ui/BrandLogo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-surface border-t border-border-dark">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-dark">
          <div className="md:col-span-5 space-y-5">
            <BrandLogo inverted />
            <p className="text-sm leading-relaxed text-surface/75 max-w-md">
              شركة متخصصة في تصميم وتصنيع المطابخ الاستيل العصرية، الشبابيك المعمارية
              العازلة، ووحدات الدريسنج روم بدقة هندسية وخامات تدوم لسنوات طويلة.
            </p>
            <p className="font-mono text-xs tracking-wider text-steel uppercase" dir="ltr">
              {SITE_CONTACT.brandTagline}
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-steel">
              الأقسام
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-surface/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-steel">
              بيانات التواصل
            </h3>
            <ul className="space-y-2.5 text-sm text-surface/80">
              <li>{SITE_CONTACT.location}</li>
              <li>{SITE_CONTACT.workingHours}</li>
              <li dir="ltr" className="text-right font-mono text-xs pt-1">
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </li>
              <li dir="ltr" className="text-right font-mono text-xs">
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-steel">
          <p>© {year} Kitchen Pro. جميع الحقوق محفوظة.</p>
          <p className="font-mono tracking-wider" dir="ltr">
            MODERN MINIMAL INDUSTRIAL · PRECISION FABRICATION
          </p>
        </div>
      </div>
    </footer>
  );
}
