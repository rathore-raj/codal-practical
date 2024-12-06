/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2.5rem",
          xl: "2.5rem",
          "2xl": "2.5rem",
        },
      },
      colors: {
        primary: "#222222",
        gray: "#3e4545",
        "light-gray": "#ebebeb",
        "lightest-gray": "#f8f8f8",
        "dark-gray": "#c5c5c5",
        "light-mid": "#707070",
        placeholder: "#696969",
        error: "#cc3333",
        stroke: "#eaeaea",
        green: "#13997c",
        blue: "#0f172a",
        yellow: "#ffba00",
        white20: "rgb(255 255 255 / 20%)",
        "light-black": "#1A1919",
        gray300: "#E4E7EC",
        "footer-icon": "#98A2B3",
        "footer-border": "#475467",
      },
    },
  },
  plugins: [],
};
