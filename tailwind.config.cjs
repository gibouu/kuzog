/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--hairline)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        ink: 'var(--ink)',
        'muted-ink': 'var(--muted-ink)',
        hairline: 'var(--hairline)',
        brand: 'var(--brand)',
        'brand-ink': 'var(--brand-ink)',
        'accent-hydrobio': 'var(--accent-hydrobio)',
        'accent-microplantes': 'var(--accent-microplantes)',
        'accent-group': 'var(--accent-group)',
        chip: 'var(--chip)',
        'chip-active': 'var(--chip-active)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      fontSize: {
        'display-xl': ['clamp(56px, 8vw, 120px)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-lg': ['clamp(40px, 5vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(28px, 3vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      boxShadow: {
        pill: '0 18px 40px rgba(34, 32, 28, 0.14)',
        card: '0 1px 2px rgba(15, 20, 25, 0.04), 0 24px 60px -24px rgba(15, 20, 25, 0.08)',
        'card-hover': '0 1px 2px rgba(15, 20, 25, 0.04), 0 24px 60px -16px rgba(15, 20, 25, 0.12)',
      },
      borderRadius: {
        card: '28px',
        'card-sm': '20px',
      },
    }
  },
  plugins: []
};
