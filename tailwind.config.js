/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Moglan': ['Moglan', 'sans-serif']
      }
    }
  },
  plugins: [],
}

