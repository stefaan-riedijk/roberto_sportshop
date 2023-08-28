/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./node_modules/flowbite**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "soccer-background": "url('~/src/assets/images/soccer-background.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("flowbite-typography")],
});
