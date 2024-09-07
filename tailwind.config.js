/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'toast-success': '#2ecc71',
        'toast-error': '#e74c3c',
      },
      spacing: {
        'toast-padding': '0.75rem 1.25rem',
      },
    },
  },
  plugins: [],
}

