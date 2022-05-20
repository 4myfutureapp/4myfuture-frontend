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
          600: '#0029B9',
          700: '#0D336B',
          800: '#01114B'
        },
        yellow:{
          300: '#ECCB46'
        },
        gray: {
          100: '#EFEFEF',
          200: '#818181'
        }
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
