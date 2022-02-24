const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
        title: ['Frank Ruhl Libre', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        mob: '450px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        hd: '1920px',
      },
      margin: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
        '25p': '25%',
      },
    },
    colors: {
      blue: {
        50: '#fbfcfc',
        100: '#f7f9fa',
        200: '#ecf1f1',
        300: '#e0e9e9',
        400: '#c8d8d9',
        500: '#B1C7C8',
        600: '#9fb3b4',
        700: '#859596',
        800: '#6a7778',
        900: '#576262',
      },
      green: {
        50: '#fafbf9',
        100: '#f5f7f3',
        200: '#e6eae1',
        300: '#d7decf',
        400: '#b8c5ac',
        500: '#9AAC88',
        600: '#8b9b7a',
        700: '#748166',
        800: '#5c6752',
        900: '#4b5443',
      },
      'dark-green': {
        50: '#f3f5f4',
        100: '#e6ebe9',
        200: '#c1cdc7',
        300: '#9bafa5',
        400: '#517262',
        500: '#06361E',
        600: '#05311b',
        700: '#052917',
        800: '#042012',
        900: '#031a0f',
      },
      orange: {
        50: '#fffcf9',
        100: '#fff9f2',
        200: '#fff1df',
        300: '#ffe9cc',
        400: '#ffd8a5',
        500: '#FFC77F',
        600: '#e6b372',
        700: '#bf955f',
        800: '#99774c',
        900: '#7d623e',
      },
      pink: {
        50: '#fffbfb',
        100: '#fef8f7',
        200: '#fdedea',
        300: '#fce1dd',
        400: '#facbc4',
        500: '#F8B5AA',
        600: '#dfa399',
        700: '#ba8880',
        800: '#956d66',
        900: '#7a5953',
      },
      brown: {
        50: '#fcfbfa',
        100: '#f9f6f4',
        200: '#efe9e5',
        300: '#e6dbd5',
        400: '#d3c0b5',
        500: '#C0A595',
        600: '#ad9586',
        700: '#907c70',
        800: '#736359',
        900: '#5e5149',
      },
      gray: {
        50: '#f4f4f5',
        100: '#e9eaea',
        200: '#c8cacb',
        300: '#a7abab',
        400: '#656b6c',
        500: '#232C2D',
        600: '#202829',
        700: '#1a2122',
        800: '#151a1b',
        900: '#111616',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
