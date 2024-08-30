/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "libre-franklin": ['Libre Franklin', 'sans-serif']
      },
      colors:{
        grey : "hsl(0, 0%, 59%)",
        paleblue: "hsl(223, 100%, 88%)",
        blue: "hsl(223, 87%, 63%)"
      },
      fontSize:{
        "placeholder-sm" : "0.4rem",
        font: "10px"
      },
    },
  },
  plugins: [],
}