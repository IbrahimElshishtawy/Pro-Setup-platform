interface BrandLogoProps {
  inverted?: boolean;
}

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="64"
          height="64"
          fill={inverted ? '#F5F5F2' : '#25292D'}
        />
        <rect
          x="14"
          y="14"
          width="8"
          height="36"
          fill={inverted ? '#25292D' : '#F5F5F2'}
        />
        <path
          d="M26 32L46 14H52L32 32L52 50H46L26 32Z"
          fill="#8C9298"
        />
        <rect x="14" y="14" width="8" height="8" fill="#526D82" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-mono text-sm font-medium tracking-[0.14em] uppercase ${
            inverted ? 'text-surface' : 'text-charcoal'
          }`}
          dir="ltr"
        >
          KITCHEN PRO
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
