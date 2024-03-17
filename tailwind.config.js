/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        main: "#2f74c0",
        alt: "#388ae2",
        secend: "#32c3cd",
        altsecend: "#41ecf7",
        third: "#eb6750",
        altthird: "#ff2600",

      },
      boxShadow: {
        'go': '0 0 5px black',
        'lg': '0 0 10px black',
        'hover': '0 0 20px black',
        'xl': 'inset 0 0 5px black',
        '2xl': ' 0 0 10px 1000px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

