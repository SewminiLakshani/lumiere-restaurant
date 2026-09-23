/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // core palette for the LUMIERE brand - warm gold on near-black
        charcoal: "#171512",
        charcoal2: "#211e19",
        gold: "#c9a15a",
        goldSoft: "#e4c98a",
        wine: "#5b1a1a",
        cream: "#f4ede1",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
