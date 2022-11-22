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
        dashmain: "#000000",
        dashprimary: "#021022",
        dashsecondary: "#0e1a29",
        dashbase: "#2e0c35",
        dashbasealt: "#411342",
        dashwarning: "#3f2555",
        dashwarningalt: "#b142c4",
        dashsuccess: "#145a37",
        dashsuccessalt: "#1eff5b",
        dashdanger: "#681551",
        dashdangeralt: "#e80d8d",
      },
      fontFamily: {
        adreg: ["adreg", "sans-serif"],
        adbold: ["adbold", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
