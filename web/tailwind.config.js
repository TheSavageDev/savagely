module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      128: '32rem',
      144: '36rem',
    },
    extend: {
      backgroundImage: {
        cross: "url('assets/images/cross.jpg')",
      },
      colors: {
        green: '#606C38',
        'dark-green': '#283618',
        gold: '#bc6c25',
        brown: '#613d09',
        white: '#fefae0',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('tailwindcss-filters')],
}
