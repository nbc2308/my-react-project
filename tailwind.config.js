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
        primaryColor: '#FFFFFF',
        secondaryColor: '#FFB400',
        textColor: '#767676',
      },
    },
  },
  plugins: [],
}
