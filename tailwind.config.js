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
      colors: { black: { 900: "#000000" }, white: { A700: "#ffffff" } },
      fontFamily: { spacegrotesk: "Space Grotesk" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
