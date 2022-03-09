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
    fontSize: {
      menu: ["15px", "1.5em"],
      body: ["18px", "1.5em"],
      header: ["24px", "1.5em"],
      title: ["20px", "1.5em"],
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
