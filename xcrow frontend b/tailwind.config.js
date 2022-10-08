module.exports = {
  content: ["./*.html"],
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
        primary: "#1B0444",
        secondary: "#5341CD",
        dark: "#2E0673",
      },
      fontFamily: {
        wassetreg: ["wasset-reg", "sans-serif"],
        wassetbold: ["wasset-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
