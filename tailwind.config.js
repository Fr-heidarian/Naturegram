/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderGray: "#d3d3d3",
        hoverColor: "#069874",
        hoverBorderColor: "#16c79a",
        buttonColor: "#4caf50",
        buttonHoverColor: "#45a049",
      },
    },
  },
  plugins: [],
};
