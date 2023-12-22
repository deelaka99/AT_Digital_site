/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary':'#6b3cc9',
      'secondary':'#f28d35',
      'analogous1': '#6a44f2',
      'analogous2':'#1cbddd',
      'triadic1':'#52378c',
      'dark':'#4dca79',
      'txtColor':'#2f2f2f',
      'txtColorLight':'#545a75',
      'txtColorSubtle':'#9c9991',
      'accent1':'#e2f2fe',
      'accent2' :'#fff8e0',
      'error':'#ff0335',
      'success' :'#5eb30b',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jomhuria: ["Jomhuria", "cursive"]
    },
    screens:{
      'mobile':'375px',
      'tablet':'768px',
      'laptop':'1200px',
      'desktop':'1440px',
    },
  },
  plugins: [],
}