module.exports = {
  content: [
    "./*.html",
    "./x_crow pages/*.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      borderWidth: {
        6: '6px',
      },
      maxWidth: {
        'x_crow': '18rem',
        'x_crow_wrapper': '70rem',
      },
      width: {
        'x_18': '18rem',
      },
      fontSize: {
        'x_base': '1.29rem',
        'xcrow_3xl': ['1.75rem', '2.25rem'],
      },
      fontFamily: {
        'xcrow_lgt': ['xcrowfontlgt', 'consolas'],
        'xcrow_md': ['xcrowfontmd', 'consolas'],
        'xcrow_rg': ['xcrowfontrg', 'consolas'],
        'xcrow_smb': ['xcrowfontsmb', 'consolas'],
        'xcrow_bold': ['xcrowfontbold', 'consolas'],
      },
      colors: {
        xcrow_default: '#301B71',
        xcrow_secondary: '#6C5DD3',
        xcrow_primary: '#68136E',
      },
    },
  },
  plugins: [],
}
