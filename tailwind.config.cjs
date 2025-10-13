/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgba(43, 42, 39, 0.12)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        'muted-ink': 'var(--muted-ink)',
        brand: 'var(--brand)',
        'brand-ink': 'var(--brand-ink)',
        accent: 'var(--accent)',
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
      boxShadow: {
        pill: '0 18px 40px rgba(34, 32, 28, 0.14)'
      }
    }
  },
  plugins: []
};
