module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        blue:{
          100: '#355F9E',
          700: '#0D336B'
        },
        yellow:{
          300: '#ECCB46'
        },
      },
      fontFamily:{
        display: [ 'Montserrat']
      },
      dropShadow:{
        '3xl': '0 4px 5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
