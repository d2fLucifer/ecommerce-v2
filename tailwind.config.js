/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: "#7D8184",
      "green-button": "#00FF66",
      "red-button": "#DB4444",
      "discount-color": "#DB4444",
      "input-color": "var(--input-color, #F5F5F5)",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
