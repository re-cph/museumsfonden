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
      menu: ["15px", "1.7em"],
      body: ["18px", "1.7em"],
      header: ["24px", "1.7em"],
      title: ["20px", "1.7em"],
      caption: ["12px", "1.7em"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bg: "#FBF9F7",
    },
    extend: {
      dropShadow: {
        menu: "0 3px 2px rgb(0 0 0 / 0.1)",
      },
    },
  },
};
