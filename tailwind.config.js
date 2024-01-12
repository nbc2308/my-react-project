/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontInter: ['Inter', 'sans-serif'],
      },
      colors: {
        bgColor: '#E4E6EB',
        primaryColor: '#F0F0F6',
        secondaryColor: '#FFB400',
      },
    },
  },
  plugins: [],
}
