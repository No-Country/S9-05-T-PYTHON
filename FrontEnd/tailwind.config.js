/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      'primary-color-light': '#b097bf',
      'primary-color': '#4f6e98',
      'primary-color-dark': '#344b6a',
      'secondary-color-light': '#fbd46a',
      'secondary-color': '#f3b51e',
      'tertiary-color': '#683832',
      'black': '#191919',
      'white': '#fbfbfb',
      'white-dark': '#F5F5F5',
      'white-light': '#FFF',
      // bg-gradient: linear - gradient(90deg,
      //   rgba(251, 212, 106, 1) 0 %,
      //   rgba(176, 151, 191, 1) 40 %,
      //   rgba(25, 25, 25, 1) 90 %);
      'text-color': '#2e2e2e',
      // --title - font: 'Dancing Script', cursive;
      // --body - font: 'Poppins', sans - serif;



      'real': '#a855f7',
      'noreal': '#ec4899',
      'white-grey': '#605f5f',
      'yellow': '#fbd46a',
      'blue': '#4f6e98',

    },
    fontFamily: {
      sans: ['Dancing Script', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}