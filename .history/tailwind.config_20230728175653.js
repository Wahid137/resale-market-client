/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        cycleTheme: {
          primary: '#66FCF1',
          secondary: '#45A29E',
          accent: '#0B0C10',
          neutral: '#1F2833',
          info: '#F9FAFB',
          warning: '#F0FDFA'

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

