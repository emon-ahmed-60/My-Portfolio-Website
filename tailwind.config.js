export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "background-light": "#ffffff",
        "background-dark": "#111827",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },

      spacing: {
        perspective: "1000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".perspective": {
          perspective: theme("spacing.perspective"),
        },

        ".backface-hidden": {
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
