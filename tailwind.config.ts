/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        height: {
          'screen-minus-80': 'calc(100vh - 100px)'
        },
      },
    },
    plugins: [],
};
  