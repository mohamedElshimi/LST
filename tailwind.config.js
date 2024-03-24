/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004A54",
        secondry: "#F9C02C",
      },
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "2rem",
        },
        center: true,
      },
      backgroundImage: {
        "first-bannner": "url('./src/assets/Banner/IT-Solution.png')",
        "mid-bannner": "url('./src/assets/Banner/Camera.png')",
        "last-bannner": "url('./src/assets/Banner/GPS.png')",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
