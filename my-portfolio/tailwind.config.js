module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        twilight:{
          50:'#e4e5ea',
          100:'#c9ccd6',
          200:'#afb3c2',
          300:'#969bae',
          400:'#7d839a',
          500:'#666d87',
          600:'#4f5674',
          700:'#394161',
          800:'#252c4f',
          900:'#13183d',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}