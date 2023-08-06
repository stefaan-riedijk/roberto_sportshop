/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soccer-background': "url('~/src/assets/images/soccer-background.jpg')",
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('flowbite-typography')
  ],
}

