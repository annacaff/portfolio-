module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fff5f7",
          300: "#dfdfdf",
          400: "#c7c7c7",
          500: "#929292",
          800: "#484848",
          900: "#222222",
          "50_01": "#fff5f8",
          "50_02": "#f8f8f8",
          "900_01": "#1a1a1a",
        },
        black: { 900: "#000000", "900_01": "#0a0a0a", "900_02": "#070706" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        manrope: "Manrope",
        bebasneue: "Bebas Neue",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
