/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['var(--font-titillium-web)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

