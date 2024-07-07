/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        container: '#2A323C',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #1D232A, #122212)', // Custom gradient
      },
    },
  },
  plugins: [],
}