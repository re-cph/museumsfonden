module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1440px",
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      body: ["Akkurat Pro", "Tahoma", "sans-serif"],
      header: ["Gotham", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bg: "#FBF9F7",
    },
  },
};
