/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
	fontFamily: {
      sans: ["Metropolis"],
      serif: ["DM Serif Display"],
      mono: ["Cascadia Code"],
      display: ["DM Serif Display"],
      body: ["Metropolis"],
	  italic: ["Metropolis Italic"]
    },  
    extend: {},
  },
  plugins: [],
}
