/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF8A00',
        'black-color': '#2C2C2C'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}

