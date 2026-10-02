/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030508',
          900: '#05080D', // Primary background per visual reference
          850: '#080D14', // Secondary background
          800: '#0D1522', // Surface cards
          750: '#111B2C', // Elevated surface
          700: '#16233B',
          600: '#1F3153',
          500: '#2A4370',
        },
        electric: {
          50: '#EBF5FF',
          100: '#D6ECFF',
          200: '#ADDAFF',
          300: '#70C0FF',
          400: '#38A2FF',
          500: '#0084FF',
          600: '#0066FF', // Main electric blue brand accent
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
          cyan: '#00D2FF', // Accent highlight
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Alexandria', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Alexandria', 'Cairo', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        script: ['Caveat', 'Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'electric-gradient': 'linear-gradient(135deg, #0066FF 0%, #00D2FF 100%)',
        'dark-card': 'linear-gradient(180deg, rgba(13, 21, 34, 0.75) 0%, rgba(8, 13, 20, 0.95) 100%)',
        'hero-glow': 'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(0, 102, 255, 0.25), transparent 70%)',
        'blue-glow-card': 'linear-gradient(180deg, rgba(0, 102, 255, 0.08) 0%, rgba(0, 0, 0, 0) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 102, 255, 0.35)',
        'glow-md': '0 0 30px -5px rgba(0, 102, 255, 0.45)',
        'glow-lg': '0 0 50px -10px rgba(0, 102, 255, 0.55)',
        'glow-cyan': '0 0 35px -5px rgba(0, 210, 255, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'radar': 'radar 4s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
