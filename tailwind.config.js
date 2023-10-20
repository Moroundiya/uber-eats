/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('./src/assets/images/new-desktop.webp')",
        'mobile-header-image': "url('./src/assets/images/new-mobile.webp')"

      },
      keyframes: {
        spread: {
          '0%': { width: '0' },
          '100%': { width: { md: '400px', sm: '800px' } },
        }
      }
    },
  },
  plugins: [],
}

