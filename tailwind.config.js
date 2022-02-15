module.exports = {
  content: ['./src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
