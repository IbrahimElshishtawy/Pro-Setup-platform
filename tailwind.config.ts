import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Kitchen Pro — Modern Stainless Steel Design Tokens
        steel: {
          DEFAULT: 'var(--kp-steel)',
          muted: 'var(--kp-steel-muted)',
        },
        charcoal: {
          DEFAULT: 'var(--kp-charcoal)',
        },
        graphite: {
          DEFAULT: 'var(--kp-graphite)',
        },
        surface: {
          DEFAULT: 'var(--kp-off-white)',
          white: 'var(--kp-pure-white)',
          soft: 'var(--kp-soft-gray)',
        },
        'accent-blue': {
          DEFAULT: 'var(--kp-accent-blue)',
          hover: 'var(--kp-accent-blue-hover)',
        },
        border: {
          DEFAULT: 'var(--kp-border)',
          dark: 'var(--kp-border-dark)',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      transitionTimingFunction: {
        architectural: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.045)' },
        },
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 18s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
