/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
require('tailwindcss-writing-mode')({
  variants: ['responsive', 'hover']
})
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leaves': "url('/public/backgroundnew.png')",
      },
      fontFamily: {
        title:['Bricolage Grotesque',...defaultTheme.fontFamily.sans],
        body:["Rubik",...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(-100%) rotate(90deg)' },
          '100%': { transform: 'translateY(0%) rotate(90deg)' },

        }
      },
      animation: {
        marquee: 'marquee 15s ease-in-out infinite ',
      }
    }

  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

