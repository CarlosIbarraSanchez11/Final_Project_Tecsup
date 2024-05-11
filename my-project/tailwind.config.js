/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        first: ["Tilt Prism", "sans-serif"],
        second: ["Poetsen One", "sans-serif"],
        third: ["Freeman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
