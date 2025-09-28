/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { primary: "#A85C32", primaryDark: "#8F4E2B", ink: "#1A1A1A", ivory: "#FAF7F2" }
      },
      fontFamily: {
        serif: ["Georgia","Times New Roman","serif"],
        sans: ["Inter","system-ui","Segoe UI","Roboto","Helvetica","Arial","sans-serif"]
      }
    },
  },
  plugins: [],
}
