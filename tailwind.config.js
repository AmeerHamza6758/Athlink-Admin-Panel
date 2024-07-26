/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': "#E2383A",
        'secondary': "#132945",
        'darkGrey':'#808D9E',
        'lightGrey':"#E2E8F0"
      },
     colors:{
      'primaryText': "#E2383A",
      'secondaryText': "#132945",
      'darkGreyText':'#808D9E',
      'lightGreyText':"#E2E8F0",
      'darkText': '#000000'
     }
    },
  },
  plugins: [],
};
