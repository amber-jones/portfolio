/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-oswald)'],
        subheading: ['var(--font-eastseadokdo)'],
        body: ['var(--font-lato)'],
      },

      colors: {
        red: '#E22524',
        purple: '#AA9EFF',
        darkpurple:'#8000FF',
        darkgrey: '#252B42',
        orange: '#FFC289',
        body:'#B6B6B6',
        cream:'#D5D2CE',
        lightcream:'#ECECEC',
        white:'#ffffff',
        yellow:'#FEFFC3',
        lightgreen:'#D6FFC3',
        darkorange:'#F8523B',
      },

      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }
      },

      maxWidth: {
        '8xl': '2000px',
      }
    },
  },
  plugins: [],
}
