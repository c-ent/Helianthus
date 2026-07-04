/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        helianthus: {
          orange: '#FF890D',
          gold: '#FFA800',
          cream: '#FFEBA3',
          blue: '#2F558B',
          gray: '#737373',
          'gray-dark': '#4F4F4F',
          'gray-text': '#383838',
        },
      },
      fontFamily: {
        Moglan: ['Moglan', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        content: '1460px',
      },
    },
  },
  plugins: [],
}
