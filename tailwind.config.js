module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        blue:{
          700: '#0D336B'
        },
      },
      fontFamily:{
        display: [ 'Montserrat']
      },
    },
  },
  plugins: [],
}
