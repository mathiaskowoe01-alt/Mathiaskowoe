/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1A2E',
          darker: '#0F111A',
          primary: '#2563EB',
          'primary-hover': '#1D4ED8',
          light: '#FAFBFC',
          surface: '#FFFFFF',
          border: '#E5E7EB',
          muted: '#6B7280',
          accent: '#38BDF8',
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(37, 99, 235, 0.35)',
        'glow-sm': '0 0 15px rgba(37, 99, 235, 0.2)',
        'card-soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
        'pill': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'scroll-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'marquee-left': 'marquee 35s linear infinite',
        'marquee-right': 'marquee-reverse 35s linear infinite',
        'scroll-up': 'scroll-vertical 25s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
