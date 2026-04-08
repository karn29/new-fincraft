/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#07080D',
        accent: '#00FF88',
        loss: '#FF2D55',
        warning: '#F5A623',
        document: '#F0EDE6',
        muted: '#12141A',
        border: '#1E2028',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        lora: ['Lora', 'serif'],
      },
      cursor: {
        crosshair: 'crosshair',
      },
    },
  },
  plugins: [],
}
