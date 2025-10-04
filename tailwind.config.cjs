/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        accent: "#6366f1",
      },
    },
  },
  plugins: [],
};