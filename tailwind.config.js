/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Framer breakpoints: Desktop >=1280, Tablet 810-1279, Mobile <=809
    screens: {
      sm: '481px',
      md: '810px',
      lg: '1280px',
    },
    extend: {
      colors: {
        cream: '#faf7f3',   // page background
        ink: '#111111',     // primary text
        forest: '#123510',   // dark green accent
        muted: '#999999',   // secondary text
        line: 'rgba(17,17,17,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'Inter Placeholder', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
