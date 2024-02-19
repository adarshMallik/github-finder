/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["coffee"],
  },
  variants:{
     extend:{},
  },
  plugins: [require('daisyui')],
}

