/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF3F7',
        card: '#F5E7F0',
        ink: '#2B1B26',
        inkSoft: '#5B4A56',
        purple: '#8B5FA3',
        purpleDeep: '#5C3B70',
        pink: '#D4527E',
        pinkDeep: '#8A2C4C',
        amber: '#B07A2E',
        hairline: '#E3CFDD',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
