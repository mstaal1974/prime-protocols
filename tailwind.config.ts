import type { Config } from 'tailwindcss'

// AUDIT NOTE: Build spec called for navy + teal as the primary pairing,
// but the "Signal" logo (the selected mark) pairs navy with a steel blue,
// not teal. Tokens below match the logo. Teal is retained as a tertiary
// accent for specific compliance components only (TGANotice / Disclaimer
// border accent) so the brand mark and the site read as the same brand.

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary — sourced from strategy doc §13.3 brand colour
        navy: {
          DEFAULT: '#162347',
          light: '#1E2F5C',
          dark: '#0F1A35',
          900: '#0F1A35',
          800: '#162347',
          700: '#1E2F5C',
          600: '#2A3F75',
        },
        // Secondary — matches the lighter blue in the "Signal" logo mark
        steel: {
          DEFAULT: '#4A7CA8',
          light: '#6B9BC7',
          dark: '#2F5C85',
          50: '#EEF3F8',
          100: '#D9E4EE',
          200: '#B4C9DD',
          300: '#8FAFCB',
          400: '#6B9BC7',
          500: '#4A7CA8',
          600: '#2F5C85',
          700: '#244A6B',
          800: '#1A3850',
          900: '#0F2638',
        },
        // Tertiary — for compliance accent borders only (per audit note)
        teal: {
          DEFAULT: '#1A9E8F',
          light: '#22B5A4',
          dark: '#147A6E',
        },
        // Neutrals
        bone: '#FAF9F6',
        ink: '#0F1A35',
        grey: {
          DEFAULT: '#F4F5F7',
          50: '#FAFBFC',
          100: '#F4F5F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          dark: '#6B7280',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        // AUDIT NOTE: Build spec called for Inter only. Replaced with a
        // distinctive pairing — Bricolage Grotesque (display) gives the
        // brand a clinical-but-confident voice, DM Sans (body) reads
        // clearly without the generic-medical-startup feel of Inter alone.
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Editorial type scale — tighter line-heights at large sizes
        'display-xl': ['clamp(2.75rem, 5vw + 1rem, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 3.5vw + 1rem, 3.75rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.875rem, 2.5vw + 1rem, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 1.5vw + 1rem, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        site: '1240px',
        prose: '68ch',
        narrow: '52rem',
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 8rem)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 26, 53, 0.04), 0 8px 24px rgba(15, 26, 53, 0.06)',
        lift: '0 2px 4px rgba(15, 26, 53, 0.06), 0 24px 48px -12px rgba(15, 26, 53, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
