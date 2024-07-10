/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marble: "#F2F8FC",
        primary: "#2A2438",
        secondary: "#5C5470",
        thrid: "#DBD8E3",
        fourth: "#FF8BA0",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
