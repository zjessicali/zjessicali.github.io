/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      pinkie: "#FF5CB6",
      white: "#FBF6F8",
      black: "#696969",
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
      DM: ["DM Sans", "sans-serif"],
    },
    screens: {
      lg: "1160px",
    },
    animation: {
      fadeUp: "fadeUp 0.5s ease-out",
    },
    keyframes: {
      fadeUp: {
        "0%": { opacity: 0, transform: "translateY(1rem)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
};
export const plugins = [];
