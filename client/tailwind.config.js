/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#FF6F00",
        "secondary" : "#1D3147",
        "tertiary" : "#554575"
      }
    },
    screens:{
      'lg':{'max':'1023px'},
      // =>@media (max-width: 1023px){...}


      'sm':{'max':'639px'}
      // => @media (max-width:639){...}
    }
  },
  plugins: [],
}

