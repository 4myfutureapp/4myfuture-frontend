module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        blue:{
          100: '#355F9E',
          400: '#3E69A8',
          500: '#0038A6',
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
      },
      animation: {
        'vote': 'vote 1s ease-in-out',
    },
      keyframes: {
        vote: {
            '3%, 100%': {
                transform: 'translateY(5%)'
            },
            '50%': {
                transform: 'translateY(0)'
            },
        }
    }
    },
  },
  plugins: [],
}
