/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      pinkie: "#F0C9D4",
      porple: "#2C1733",
      white: "#EEEBEE",
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
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
