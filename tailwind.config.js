/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#E2383A",
        secondary: "#132945",
        darkGrey: "#808D9E",
        lightGrey: "#E2E8F0",
        primaryHover: "#C62839",
      },
      colors: {
        primaryText: "#E2383A",
        secondaryText: "#132945",
        darkGreyText: "#808D9E",
        lightGreyText: "#E2E8F0",
        darkText: "#000000",
      },
      boxShadow: {
        primaryBoxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".truncate-ellipsis": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "3",
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "normal",
        },
      });
    },
  ],
};
