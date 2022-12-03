const plugin = require("tailwindcss/plugin");

const customStyles = plugin(function ({ addUtilities }) {
  addUtilities({
    ".blizzard-shadow": {
      filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));",
      "text-shadow": "0px 1px 35px rgb(0 43 82 / 40%)",
    },
    ".realm-border": {
      "border-image-source":
        "url(https://res.cloudinary.com/jr-cloud/image/upload/v1670023140/rog-realms/rc-media-frame-spritesheet_ewjco5.png)",
      "border-image-slice": "120",
      "border-image-repeat": "repeat",
      "will-change": "filter",
    },
    ".realm-card-divider": {
      "background-size": "auto 60px",
      "background-position": "bottom center, 0",
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        metamorphous: ["Metamorphous", "sans-serif"],
      },
    },
  },
  plugins: [customStyles],
};
