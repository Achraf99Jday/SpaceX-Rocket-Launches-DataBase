module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'greenDrop': '5px 5px 0px #1FAF7B',
        'blackDrop': '5px 5px 0px #000000',
        'greenShadow': '0 0 10px #1FAF7B'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#1FAF7B',
        'danger': '#e3342f',
        'bgMain': '#aaa9a9'
      }),
      fontFamily: {
        'goldman': ['"Goldman"', 'cursive'],
        'barcode': ['"Libre Barcode 39 Text"', 'cursive']
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
