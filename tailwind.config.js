/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11c9ba",
        secondary: "#f6f6f6",
        tertiary: "#07645c",
      },
    },
  },
  plugins: [],
};
