// const colors = require('tailwindcss/colors');

module.exports = {
  mode:"jit",
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/*.html',
  ],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      colors: {
        "White": "#ffffff",
        "Primery": "#FF5890",
        "Primery-back": "#FFF0F5",
        "Text-black": "#232323",
        "Text-link": "#386FFC",
      },
    },
  },
}
