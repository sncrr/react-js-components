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
      }
    },
  },
  plugins: [],
}