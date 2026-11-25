import { Phone, MessageCircle, MapPin, ArrowUpLeft } from 'lucide-react';
import { SITE_CONTACT, buildWhatsAppLink } from '../../data/siteData';
import { CinematicSection } from '../motion/CinematicSection';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';
import { StaggerContainer } from '../motion/StaggerContainer';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '../ui/SocialIcons';
import { MOTION_CONFIG } from '../../lib/motion';

export function ContactSection() {
  const defaultWhatsappHref = buildWhatsAppLink(
    0,
    'أهلاً Kitchen Pro، عندي استفسار بخصوص مطبخ / شبابيك / دريسنج وحابب أبدأ مشروعي معاكم.',
  );

  return (
    <CinematicSection id="contact" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Heading & Primary Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="fade">
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-steel-muted" dir="ltr">
                06 / CONTACT KITCHEN PRO
              </p>
            </Reveal>

            <TextReveal
              as="h2"
              delayMs={80}
              className="text-2xl sm:text-4xl font-semibold text-charcoal leading-snug"
            >
              عندك فكرة لمطبخك أو بيتك؟ خلينا نبدأ
            </TextReveal>

            <Reveal variant="paragraph" delayMs={150}>
              <p className="text-base text-graphite leading-relaxed max-w-xl">
                احكيلنا إنت محتاج إيه، وإحنا نساعدك تعرف أنسب الحلول لمساحتك واحتياجاتك.
              </p>
            </Reveal>

            {/* Primary Direct CTAs */}
            <Reveal variant="button" delayMs={220}>
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={SITE_CONTACT.phones[0].telHref}
                  className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-medium px-6 py-3.5 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصل بينا</span>
                </a>

                <a
                  href={defaultWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-surface text-sm font-medium px-6 py-3.5 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ابعتلنا واتساب</span>
                </a>

                <a
                  href={SITE_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-surface-white text-charcoal hover:border-charcoal text-sm font-medium px-6 py-3.5 transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4" />
                  <span>زورنا على الخريطة</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Direct Phone Numbers, WhatsApp & Social Cards with Stagger */}
          <div className="lg:col-span-6">
            <StaggerContainer
              staggerMs={MOTION_CONFIG.stagger.tight}
              className="border border-border bg-surface-white divide-y divide-border"
            >
              {SITE_CONTACT.phones.map((phone, index) => (
                <div
                  key={phone.display}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-xs text-steel-muted">{phone.label}</p>
                    <a
                      href={phone.telHref}
                      dir="ltr"
                      className="inline-block font-mono text-lg font-medium text-charcoal hover:text-accent-blue transition-colors mt-1"
                    >
                      {phone.display}
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={phone.telHref}
                      className="inline-flex items-center gap-1.5 border border-border px-4 py-2 text-xs font-medium text-charcoal hover:border-charcoal transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>اتصال مباشر</span>
                    </a>
                    <a
                      href={buildWhatsAppLink(
                        index as 0 | 1,
                        'أهلاً Kitchen Pro، حابب أستفسر عن المطابخ والشبابيك والدريسنج.',
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-surface hover:bg-surface-soft border border-border px-4 py-2 text-xs font-medium text-charcoal transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Google Maps Row */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-steel-muted">الموقع على الخريطة</p>
                  <p className="text-sm font-medium text-charcoal mt-1">
                    افتح موقع Kitchen Pro مباشرة على Google Maps
                  </p>
                </div>
                <a
                  href={SITE_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-charcoal px-4 py-2.5 text-xs font-medium text-charcoal hover:bg-charcoal hover:text-surface transition-colors shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>زورنا على الخريطة</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Social Links Row */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-steel-muted">تابع أحدث أعمالنا</p>
                  <p className="text-sm font-medium text-charcoal mt-1">
                    صفحات Kitchen Pro الرسمية
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={SITE_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-medium text-charcoal hover:border-charcoal transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={SITE_CONTACT.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-medium text-charcoal hover:border-charcoal transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={SITE_CONTACT.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-medium text-charcoal hover:border-charcoal transition-colors"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
