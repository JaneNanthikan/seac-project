/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)', 
        warning: 'var(--warning-color)', 
        btn_bg: 'var(--btn-bg-color)',
        btn_text: 'var(--btn-color)' 
      },
      maxWidth: {
        content: 1280,
      }
    },
  },
  plugins: [],
}
