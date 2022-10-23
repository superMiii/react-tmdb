/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0, rgba(20,20,20,.15) 15%, rgba(20,20,20,.35) 29%,rgba(20,20,20,.50) 44%,#141414 68%,#141414 100%);",
        "gradient-to-t":
          "linear-gradient(to top,rgba(20,20,20,0) 0, rgba(20,20,20,.10) 10%, rgba(20,20,20,.20) 20%,rgba(20,20,20,.30) 30%,#141414 100%);",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
