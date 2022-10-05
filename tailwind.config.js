/** @type {import('tailwindcss').Config} */
module.exports = {
 // mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { // here we can create breakpoints for screen sizes
    extend: {
      screens: {
        "3xl": "2000px"
      }
    },
  },
  // npm i tailwind-scrollbar-hide and then set the puglin here
  plugins: [require("tailwind-scrollbar-hide")], 
}
