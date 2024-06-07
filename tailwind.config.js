/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: '11px',
      sm: '12px',
      md: '13px',
      lg: '16px',
      xl: '20px',
      xxl: '45px',
    },
    lineHeight: {
      '18': '18px',
      '22': '22px',
    },
    borderRadius: {
      'sm': '2px',
      'md': '6px',
      'lg': '8px',
      'full': '9999px',
      'large': '10px'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', "sans-serif"],
      },
      colors: {
        'primary-color': '#8D95AF',
        'white': '#FFFFFF',
        'secondary-color': '#454b5f',
        'sub-heading': '#6C7287',
        'black-color': '#21232C',
        'theme-red-color': '#B3293D',
        'theme-red-dark': '#893951',
        'border-primary': '#BDC4D3',
        'border-color': '#D8DEEC',
        'chat-from': '#BB253B',
        'chat-to': '#772430',
        'btn-secondary': '#EDF0F6',
        'card-bg': '#EAEFFC'
      },
      height: {
        '72': '72px',
        '115': '115px',
      },
      width: {
        '38': '38px',
        '72': '72px',
        '76': '76px',
      },
      maxWidth: {
        '1012': '1012px',
        '660': '660px',
      },
      padding: {
        '9px': '9px',
        '26px': '26px',
        '46px': '46px',
        '50px': '50px',
        '90px': '90px',
      },
    },
  },
  plugins: [],
}