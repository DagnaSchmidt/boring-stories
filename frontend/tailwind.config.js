/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: '#DFDFDF',
        primary: '#1E1E1E'
      },
      spacing: {
        '344': '86rem'
      }
    },
  },
  plugins: [],
}