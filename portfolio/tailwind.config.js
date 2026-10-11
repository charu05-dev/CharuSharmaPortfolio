/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: '#000000',
        paper: '#ffffff',
        sky: '#dceeff',
        concrete: '#cccccc',
        mist: '#e9e9e9',
        electric: '#4da2ff',
        mint: '#55db9c',
        lavender: '#e9ccff',
        ember: '#fb4903',
        sunburst: '#ffd731',
        violet: '#5c4ade',
      },
      fontFamily: {
        display: ['Antonio', 'Space Grotesk', 'Impact', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '28px',
        'card-lg': '36px',
        'pill': '9999px',
      },
      boxShadow: {
        'sticker': '3px 3px 0px #000000',
        'sticker-lg': '5px 5px 0px #000000',
        'sticker-active': '1px 1px 0px #000000',
      },
      lineHeight: {
        'tightest': '0.78',
        'super-tight': '0.85',
      }
    },
  },
  plugins: [],
}
