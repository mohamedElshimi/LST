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
    },
  },
  plugins: [],
};
