/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  distDir: 'build',
  darkMode: ["class"],

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {},
  },
  plugins: [],
}
