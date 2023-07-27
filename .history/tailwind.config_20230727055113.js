/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        parlourTheme: {
          primary: '#66FCF1',
          secondary: '#45A29E',
          dark: '#0B0C10',
          neutral: '#1F2833',
          info: '#C5C6C7',

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

