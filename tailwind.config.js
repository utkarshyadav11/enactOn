/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BrownBlack:"#130f0c",
        Gold:"#d29a5a",
        HalfTransparent: "#0000008f",
        MidTransparent :"rgba(255, 255, 255, 0.1)"
      },
    
    },
  },
  plugins: [],
}
