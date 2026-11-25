import { MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE_CONTACT } from '../../data/siteData';
import { BrandLogo } from '../ui/BrandLogo';
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons';
import { Reveal } from '../motion/Reveal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-surface border-t border-border-dark">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal variant="fade">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-dark">
            <div className="md:col-span-5 space-y-5">
              <BrandLogo inverted />
              <p className="text-sm leading-relaxed text-surface/75 max-w-md">
                شركة متخصصة في جميع أعمال المطابخ والشبابيك والدريسنج، مع الاهتمام
                بجودة التصميم والتنفيذ وخدمة ما بعد البيع وضمان مدى الحياة وفقاً
                لشروط الشركة.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={SITE_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="إنستجرام Kitchen Pro"
                  className="inline-flex items-center gap-2 border border-border-dark px-3.5 py-2 text-xs text-surface/85 hover:border-steel hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SITE_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="فيسبوك Kitchen Pro"
                  className="inline-flex items-center gap-2 border border-border-dark px-3.5 py-2 text-xs text-surface/85 hover:border-steel hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-steel">
                أقسام الموقع
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
                التواصل والموقع
              </h3>
              <ul className="space-y-3 text-sm text-surface/85">
                {SITE_CONTACT.phones.map((phone) => (
                  <li key={phone.display} className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-steel shrink-0" />
                    <a
                      href={phone.telHref}
                      dir="ltr"
                      className="font-mono text-sm hover:text-white transition-colors"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href={SITE_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-surface/85 hover:text-white transition-colors underline underline-offset-4 decoration-border-dark hover:decoration-surface"
                  >
                    <MapPin className="w-3.5 h-3.5 text-steel shrink-0" />
                    <span>زورنا على الخريطة (Google Maps)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-steel">
            <p>© {year} Kitchen Pro. جميع الحقوق محفوظة.</p>
            <p>مطابخ · شبابيك · دريسنج</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
