/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        'heading': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.05em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.05em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.075em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.075em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.1em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.1em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.125em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.125em' }],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
      animation: {
        'rotate-slow': 'rotate 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in': 'slide-in 0.6s ease-out',
        'breathe': 'breathe 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-scale': 'fade-in-scale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-gentle': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-8px)' },
          '70%': { transform: 'translateY(-4px)' },
          '90%': { transform: 'translateY(-2px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-lg': '0 0 40px rgba(34, 197, 94, 0.4)',
        'glow-orange': '0 0 30px rgba(245, 158, 11, 0.4)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'luxury': '0 32px 64px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'elegant': '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.4)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(circle at 25px 25px, rgba(34, 197, 94, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(59, 130, 246, 0.1) 2%, transparent 0%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'mesh': '100px 100px',
      },
      textColor: {
        'gradient-primary': 'transparent',
        'gradient-accent': 'transparent',
      },
    },
    },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          '@apply bg-white/10 backdrop-blur-xl border border-white/20': {},
        },
        '.text-gradient-primary': {
          'background': 'linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.text-gradient-accent': {
          'background': 'linear-gradient(to right, rgb(245, 158, 11), rgb(251, 191, 36))',
          '-webkit-background-clip': 'text', 
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.hover-lift': {
          'transition': 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            'transform': 'translateY(-8px)',
          },
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}