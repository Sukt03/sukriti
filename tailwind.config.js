/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#0C0A0F',
        card: '#17131C',
        ink: '#EEE8EE',
        inkSoft: '#A89DA9',
        purple: '#B08CD2',
        purpleDeep: '#EADFF3',
        pink: '#E8628F',
        pinkDeep: '#F3A2BE',
        amber: '#E3AD62',
        sage: '#8FCB97',
        hairline: '#2B2332',
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
