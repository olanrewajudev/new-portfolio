/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A1B4A",
        yellow: "#f7921a",
        primaryLight: "#F9F5FF",
        grayed: "#F9FAFB",
      }
    },
  },
  plugins: [],
}