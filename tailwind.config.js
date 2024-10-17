/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        999: "9999",
      },
      boxShadow: {
        custom: "0 1px 2px #0000000d",
      },
      colors: {
        default: "#f5f5f5",
        primary: "#0f172a",
        card: "#e2e8f0",
        cardHover: "#a5dc69",
      },
      fontFamily: {
        logo: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
