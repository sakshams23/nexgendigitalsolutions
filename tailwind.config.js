/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'albert': ['"Albert Sans"', 'sans-serif'],
        'openSans': ['"Open Sans"', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'dosis': ['"Dosis"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'],
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)',
      },
      //linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)
    },
  },
  plugins: [],
}

