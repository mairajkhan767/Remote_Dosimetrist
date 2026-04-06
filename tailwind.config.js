export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // important
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl' : '1366px',
        'xxxl': '1440px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
};