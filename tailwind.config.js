/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '.dark', // use .dark for dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Violet Shades
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          foreground: 'var(--color-primary-foreground)',
        },
        // Info Cyan Shades
        info: {
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
          800: 'var(--color-info-800)',
          900: 'var(--color-info-900)',
          foreground: 'var(--color-info-foreground)',
        },
        // Success Green Shades
        success: {
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
          foreground: 'var(--color-success-foreground)',
        },
        // Warning Amber Shades
        warning: {
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
          foreground: 'var(--color-warning-foreground)',
        },
        // Destructive Red Shades
        destructive: {
          100: 'var(--color-destructive-100)',
          200: 'var(--color-destructive-200)',
          300: 'var(--color-destructive-300)',
          400: 'var(--color-destructive-400)',
          500: 'var(--color-destructive-500)',
          600: 'var(--color-destructive-600)',
          700: 'var(--color-destructive-700)',
          800: 'var(--color-destructive-800)',
          900: 'var(--color-destructive-900)',
          foreground: 'var(--color-destructive-foreground)',
        },
        // Neutral / Grays
        neutral: {
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
        // Text semantic colors
        text: {
          strong: 'var(--color-text-strong)',
          DEFAULT: 'var(--color-text-default)',
          muted: 'var(--color-text-muted)',
          subtle: 'var(--color-text-subtle)',
          inverse: 'var(--color-text-inverse)',
        },
        // Background system
        background: {
          DEFAULT: 'var(--color-background)',
          surface: 'var(--color-surface)',
          'surface-elevated': 'var(--color-surface-elevated)',
        },
        border: 'var(--color-border)',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.625rem',
        lg: '0.75rem',
        xl: '0.875rem',
        '2xl': '1rem',
        '3xl': '1.125rem',
        '4xl': '1.25rem',
      },
    },
  },
  plugins: [],
};