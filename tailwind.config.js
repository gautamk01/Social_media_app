/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./node_modules/flowbite-react/**/*.js",
 "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./Components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        socialBg:'#F5F7FB',
        socialBlue:'#218DFA',
      }
    },
  },
    plugins: [
    require("flowbite/plugin")
  ],
}

