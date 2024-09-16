/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1f5f9",
        secondary: "#60a5fa",
        darkPrimary: "#0f172a",
        darkSecondary: "#b9bfc4",
        // SecondText: "#a39ca8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
