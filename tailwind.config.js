/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      backgroundColor: {
        primary: {
          100: "#00A86B",
        },
      },
      borderColor: {
        primary: {
          100: "#00A86B",
          200: "#4D8C57",
          300: "#74C365",
        },
      },
      textColor: {
        primary: {
          100: "#00A86B",
        },
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1024px",
          "2xl": "1280px",
          "3xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
