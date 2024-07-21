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
      sans: ["Roobert"],
      serif: ["DM Serif Display"],
      mono: ["Cascadia Code"],
      display: ["DM Serif Display"],
      body: ["Roobert"]
    },  
    extend: {},
  },
  plugins: [],
}

