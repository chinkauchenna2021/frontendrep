module.exports = {
  mode:'jit',
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "Manrope": ["Manrope"],
      },


      backgroundImage: {
        'hero-pattern': "url('/img/image3.png')",
        'footer-texture': "url('/img/image125.png')",
      },

  
      keyframes:{
 
        wave: {
          '0%': { backgroundPosition: '0% 0%' },
          '10%': { backgroundPosition: '0% 10%' },
          '50%': { backgroundPosition: '40% 50%' },
          '60%': { backgroundPosition: '50% 60%' },
          '100%': { backgroundPosition: '60%  100%' }
        },


     },

     animation:{
       
     "waving-hands": "wave 0.6s linear infinite",

     },






    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
  variants: {
    scrollbar: ['rounded','dark']
}
}
