/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Authority
        surface: '#1F2937', // Sophistication
        health: '#10B981', // Balance/Health
        action: '#F97316', // CTA
        background: '#FFFFFF' // Clarity
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
