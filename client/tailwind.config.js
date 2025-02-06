/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#2D3142",
        electric: "#00A8E8",
        neon: "#7CFC00",
        crimson: "#DC143C",
      },
    },
  },
  plugins: [],
};
