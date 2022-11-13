/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1199px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#6413F1",
        secondary: "#ab006f",
        dark: "#010910",
        // dark: "#021022",
      },
      fontFamily: {
        adreg: ["adreg", "sans-serif"],
        adbold: ["adbold", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
