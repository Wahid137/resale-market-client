/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        cycleTheme: {
          primary: '#ff0000',
          secondary: '#45A29E',
          accent: '#0B0C10',
          neutral: '#1F2833',
          info: '#F9FAFB',
          warning: '#F0FDFA',
          error: '#444B53'

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
