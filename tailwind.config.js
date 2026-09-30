/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '380px',
      },
      colors: {
        gold: {
          DEFAULT: '#cfa559',
          light: '#e8d4a2',
          dark: '#9a752b',
          glow: 'rgba(207, 165, 89, 0.22)'
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
        'gold-sm': '0 4px 16px rgba(207, 165, 89, 0.20)',
        'gold-md': '0 8px 24px rgba(207, 165, 89, 0.28)',
        'gold-lg': '0 12px 32px rgba(207, 165, 89, 0.38)',
        'spa-card': '0 20px 50px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
