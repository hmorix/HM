/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: { DEFAULT: '#0D0D0D', 2: '#141414', 3: '#1C1C1C' },
        cream: { DEFAULT: '#EAE8E3', 2: '#D8D5CE' },
        lime: { DEFAULT: '#C8FF00', dim: 'rgba(200,255,0,0.12)', dim2: 'rgba(200,255,0,0.06)' },
        glass: { DEFAULT: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)' },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}
