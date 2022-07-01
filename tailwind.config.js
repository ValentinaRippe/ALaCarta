/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html', './src/**/*.ts",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{

      }
    },
  },
  plugins: [require("flowbite/plugin.js")],
};
