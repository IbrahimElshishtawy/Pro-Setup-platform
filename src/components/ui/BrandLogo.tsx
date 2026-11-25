import { SITE_CONTACT } from '../../data/siteData';

interface BrandLogoProps {
  inverted?: boolean;
}

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        className={`flex items-center justify-center w-11 h-11 overflow-hidden border shrink-0 ${
          inverted ? 'border-border-dark bg-surface' : 'border-border bg-surface-white'
        }`}
      >
        <img
          src={SITE_CONTACT.brandLogo}
          alt="شعار Kitchen Pro"
          className="w-full h-full object-contain p-0.5"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-mono text-sm font-medium tracking-[0.12em] uppercase ${
            inverted ? 'text-surface' : 'text-charcoal'
          }`}
          dir="ltr"
        >
          {SITE_CONTACT.brandName}
        </span>
        <span
          className={`text-[11px] mt-1 ${
            inverted ? 'text-steel' : 'text-steel-muted'
          }`}
        >
          مطابخ · شبابيك · دريسنج
        </span>
      </span>
    </span>
  );
}
