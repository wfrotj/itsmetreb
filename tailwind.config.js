/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        customYellow: "#FFDE59",
        customOrange: "#E54D21",
        customBlue: "#36B7F0",
        customGreen: "#7CB701",
        customBlack: "#212121",
        customGreenText: "#00A64E",
      },
    },
    plugins: [],
    screens: {
      mobile: "320px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 1024px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
  },
};
