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
  },
};
export const plugins = [];
