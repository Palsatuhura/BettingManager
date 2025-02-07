module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables dark mode based on a class
  theme: {
    extend: {
      colors: {
        lightInput: "#f3f4f6", // Lighter gray input background (light theme)
        darkInput: "#4a5568", // Darker gray input background (dark theme)
        lightText: "#333333", // Light text color
        darkText: "#87898c", // Dark text color
        darkBackground: "#1a202c", // Dark mode background
        lightBackground: "#bec5d1", // Light mode background
        darkCard: "#212836", // Dark card background
      },
      transitionProperty: {
        all: "all",
        colors: "background-color, border-color, color, fill, stroke",
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};
