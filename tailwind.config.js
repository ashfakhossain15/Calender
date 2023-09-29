/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      glimer: ['"Glimer"'],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
