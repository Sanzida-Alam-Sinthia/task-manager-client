/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px',
    },
  },
  plugins: [require('flowbite/plugin')],
}
