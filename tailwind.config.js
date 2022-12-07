/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#f8f9fa',
        'default-dark': '#b1b3b8',
        'info': '#4285F4',
        'info-dark': '#0d47a1',
        'success': '#00C851',
        'success-dark': '#007E33',
        'warning': '#ffbb33',
        'warning-dark': '#FF8800',
        'danger': '#ff4444',
        'danger-dark': '#CC0000',
        'cancel': '#6c757d',
        'cancel-dark': '#343a40',
        'modal': '#343a4080',
      },
      maxWidth: {
        'modal': '60rem',
        'modal-sm': '20rem',
        'modal-md': '40rem',
        'modal-lg': '60rem'
      },
      minWidth: {
        'modal': '20rem',
        'modal-sm': '10rem',
        'modal-md': '20rem',
        'modal-lg': '40rem'
      }
    },
  },
  plugins: [],
}