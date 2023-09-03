/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'login-img': "url('/src/assets/img/background.webp')",
        'main-img': "url('/src/assets/img/bg-main.webp')"
      },
      boxShadow:{
        '3xl': '30px 40px 70px',
      },
      colors:{
        "common": "#6d28d9"
      },
      height:{
        "ninety": "90%",
      },
      width:{
        "nvw" : "46vw",
        "vw": "99vw",
      },
      spacing:{
        "40": "40%"
      }
    },
  },
  plugins: [],
}

