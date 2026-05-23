/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0e0e0e',
        card: '#1a1a1a',
        card2: '#222222',
        card3: '#282828',
        border: 'rgba(255,255,255,0.06)',
        border2: 'rgba(255,255,255,0.12)',
        lime: '#c8f135',
        'lime-dk': '#a8d020',
        muted: '#888888',
        dim: '#555555',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
