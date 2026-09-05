/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kom-yellow': '#ffef38',
        'kom-orange-light': '#f7a418',
        'kom-orange-dark': '#dd6f0e',
        'kom-blue': '#275d79',
        'kom-navy': '#001648',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
