/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#e6c35c',
          light: '#fff2cc',
          dark: '#b89128',
          glow: 'rgba(230, 195, 92, 0.35)'
        },
        spa: {
          darkest: '#050807',
          dark: '#0a110e',
          secondary: '#0f1a15',
          surface: '#14221c',
          card: '#1a2c24',
          emerald: '#2e5344'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      boxShadow: {
        'gold-sm': '0 4px 18px rgba(230, 195, 92, 0.35)',
        'gold-md': '0 8px 30px rgba(230, 195, 92, 0.45)',
        'gold-lg': '0 12px 40px rgba(230, 195, 92, 0.65)',
        'spa-card': '0 20px 50px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
